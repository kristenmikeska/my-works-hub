/* Persona 3: Equinox · Hyein Lee (Lovers). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: ranks 1-2 (rank 1 opens 4/13, a Tuesday, one of her home days; rank 2 opens 4/30, after The Knock, and
   reads her rank-1 flags and Hanni's rank). Rank 3 (from 6/8, shop windows, atrium, dorm front hall and stairs; reads eqx-hyein-hanni-cardigan,
   eqx-hyein-phone-kept) records her ask: tally asks.hyein (+ cakes / choose). Aigis speaks in it (the ribbon). Ranks 4-10 to come. Rank 2 flags: eqx-hyein-phone-kept,
   eqx-hyein-hanni-cardigan. Nothing reads them yet.
   Solstice's Hyein (assets/femc/game/links/hyein.js) is shared memory here: everyone remembers that year.
   Flags this file sets: eqx-hyein-dress-keep | eqx-hyein-dress-make (rank 1: what Solar tells her to do with the dress she
   arrived in), eqx-hyein-voicemail (rank 1: Solar listens to the saved message with her). Nothing reads them yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hyein', name: 'Hyein Lee', short: 'Hyein', arcana: 'Lovers', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'mall', spot: 'Shop Windows', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons along the shop windows in Paulownia Mall, judging every mannequin out loud.' },
  approach: "Hyein is in front of a shop window in Paulownia Mall with a paper bag held against her chest in both arms, not judging the mannequin for once, just standing there, and she sees you in the glass and turns around already talking.",
  cast: {},
  ranks: [
    { after: '4/13', title: '1: what she came in', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { bg: 'paulownia-mall' },
      { n: "Hyein was at the shop windows on the second floor, which was where Hyein always was, in front of the same mannequin she'd fought with all last autumn, and the mannequin was wearing something new, and Hyein wasn't saying anything about it." },
      { n: "That was how Solar knew something was wrong before she'd got to the top of the escalator. The mannequin had on a belted trench in a beige so committed it was almost a political position, over a pleated skirt, over tights with a seam up the back, and a year ago Hyein would have been halfway through a speech about it to anyone within thirty feet. Today she was just standing there in her borrowed Gekkoukan blouse and a cardigan Fuuka had lent her, holding a paper bag against her chest in both arms the way you'd hold a cat that didn't want to be held." },
      { n: "She saw Solar in the glass. Her whole face turned on, all at once, like a sign." },
      { s: 'hyein', f: 'happy', t: "SOL. Oh my God. Perfect. Okay. Don't say anything about the trench, I already know, I've been standing here with it for forty minutes, we've come to an understanding." },
      { s: 'hyein', f: 'serious', t: "I need you for something. It's a fashion thing. It's also not a fashion thing. Come here. Stand here. No. Here, where the light is." },
      { n: "She opened the bag. Inside, folded very carefully, with tissue paper between the folds the way a shop would do it, was a black dress. Thin black silk, a party dress, the kind you'd wear under a coat across a city at eleven at night on the last night of the year, and under it a pair of black tights, folded small, with a ladder running up one leg from the ankle like a crack in ice." },
      { n: "Solar knew the dress. She'd last seen it on the other side of an ocean, across a room full of people counting down, with Hyein inside it, laughing at something, her hair up, and then she'd seen it a minute after midnight from much closer, because Hyein's hand had been on her wrist, and then Hyein's other hand, and then both of them, and Hyein's voice, saying one word, over and over, very loud, the way she said everything." },
      { n: "*No.*" },
      { s: 'hyein', f: 'neutral', t: "This is what I came in. You know. On the steps. With the snow." },
      { s: 'hyein', f: 'neutral', t: "I haven't washed it. Hanni thinks that's gross. It's not gross, it's dry-clean only, and they don't have my dry cleaner here, and also I don't want to." },
      { s: 'hyein', f: 'sad', t: "It still smells like the party. Cold, and champagne, and that perfume you had on, the one I keep telling you is too old for you. Smell it. No. Don't. Okay, you can." },
      { choose: [
        { t: "(Smell the sleeve.)", notes: 3, then: [
          { n: "She bent her head and breathed in. Cold, under the silk, the clean metal cold of a December night in a city, and something fizzy and sweet gone flat, and under that, faint, almost gone, a perfume she'd stopped noticing on herself years ago. It went in under her ribs and sat there. She straightened up. Hyein was watching her face in the shop glass, very closely, the way you'd watch someone taste something you'd cooked." },
          { s: 'hyein', f: 'sad', t: "Right? It's leaving. Every day it's a bit less. I check." }
        ] },
        { t: "It's not gross.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "THANK you. I'm telling Hanni you said so. You're the tiebreaker. You're always the tiebreaker." }
        ] },
        { t: "You kept the tights too?", notes: 1, then: [
          { s: 'hyein', f: 'serious', t: "I keep everything. You know I keep everything. I have a receipt from your first lunch at the dining hall. Don't ask me where. It's safe." }
        ] }
      ] },
      { n: "She folded the tissue back over the silk. Carefully, corner to corner. Her hands were the steadiest thing about her, they always had been; she could pin a hem on a moving person in a moving car. They were steady now. It was the rest of her that wasn't." },
      { s: 'hyein', f: 'serious', t: "So here's the fashion thing. I could take it apart. The silk's really good, there's enough of it for a top, a nice one, something you could actually wear here, in April, in daylight, instead of a party dress in a bag. I've been drawing it. I've got three sketches. One of them's genius." },
      { s: 'hyein', f: 'neutral', t: "Or I don't. I leave it. I keep it in the bag, exactly how it is, with the snow-water stain on the hem and the ladder and everything, and I wear it home." },
      { n: "She said *home* the way you'd step on a stair in the dark, not sure it was going to be there." },
      { s: 'hyein', f: 'neutral', t: "And I can't decide. I always decide. I decide in, like, a second, I decide about other people's clothes for fun. And I've been standing here for forty minutes. Tell me what to do. Just this once. I'll do it. I promise I'll do it." },
      { choose: [
        { t: "Keep it the way it is.", notes: 3, flag: 'eqx-hyein-dress-keep', then: [
          { s: 'hyein', f: 'neutral', t: "...Yeah?" },
          { s: 'solar', f: 'neutral', t: "It's what you came in. Wear it home." },
          { n: "Hyein looked at the bag in her arms for a long time. Then she nodded, once, the way you'd nod at a doctor, and held it a little tighter, and some knot in her shoulders that Solar hadn't even seen until it went, went." },
          { s: 'hyein', f: 'happy', t: "Okay. Okay. It stays a dress. I'm going to get it a garment bag. A nice one. With a zip. It deserves a zip." }
        ] },
        { t: "Make it into something. Something you can wear here.", notes: 3, flag: 'eqx-hyein-dress-make', then: [
          { s: 'hyein', f: 'surprised', t: "...Really? Okay. Okay. You're right. It's just fabric. It's just really, really good fabric." },
          { n: "She pulled the sketchbook out of her bag one-handed and flipped to the page, and it was the genius one, obviously, a cropped black top with a sharp square neck, and she held it up against the shop glass next to the mannequin's trench like evidence for the prosecution." },
          { s: 'hyein', f: 'happy', t: "I'm going to make it so good. I'm going to make it so good that when I'm wearing it nobody's going to know it used to be anything." },
          { n: "She said it brightly. She said it at a volume meant for the whole second floor. Solar watched her in the glass and thought she might, a little, be talking to the dress." }
        ] },
        { t: "You don't have to decide yet.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "Ugh. That's the Hanni answer. That's the most Hanni answer anybody's ever given me." },
          { s: 'hyein', f: 'neutral', t: "...It's a good answer. I hate it. Fine. It stays in the bag. For now. Not forever. For now." }
        ] }
      ] },
      { n: "Then, because one serious thing had never once in her life been enough for Hyein before she had to cover it with ten loud ones, she spun round, and grabbed Solar by both shoulders, and turned her to face the trench in the window." },
      { s: 'hyein', f: 'serious', t: "Okay, now say something about this. Say something mean. I need to hear you be mean to a coat. I've been nice to it for forty minutes and it's doing something to me." },
      { choose: [
        { t: "It looks like it's about to give a weather report.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "It DOES. Oh my God. It's giving *light showers in the afternoon.* It's giving *and back to you in the studio.*" },
          { n: "She laughed so loud that a woman coming out of the shop with a bag jumped, and then looked at the trench, and then at the two of them, and then, for some reason, at her own coat, which was also beige, and walked off quite fast." }
        ] },
        { t: "ur so annoying.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "There she is. There she *is*. I missed that. I missed it so much it's embarrassing. Say it again in like a week. Ration it." }
        ] },
        { t: "I like the trench.", notes: 1, then: [
          { s: 'hyein', f: 'surprised', t: "You do *not*." },
          { s: 'solar', f: 'neutral', t: "I'd wear it." },
          { s: 'hyein', f: 'serious', t: "Then I've failed. Then the whole year failed. Everything I've ever taught you. Gone. Washed away like a party dress you're not allowed to wash." }
        ] }
      ] },
      { n: "They walked the length of the second floor afterwards, slowly, window to window, Hyein narrating every mannequin like a sports commentator and Solar putting in a word every third window, and it was so much like last autumn that for a minute it wasn't like anything, it was just an afternoon. Hyein's phone was in her cardigan pocket. Not the pink folding one Mitsuru had handed out this week. The other one. The one from home, with its clock stuck on a minute past midnight on the first of January, which still lit up when you touched it and would not, under any circumstances, call anyone." },
      { n: "She kept touching it. Through the cardigan, every few windows, with two fingers, the way you'd touch a pocket to check your keys were there." },
      { n: "At the end of the floor, by the rail over the atrium, where the fountain went up and fell down three floors below them, she stopped, and took it out, and looked at the lock screen, and didn't open it." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you a weird thing? You can't make it weird. You have to be normal about it." },
      { s: 'hyein', f: 'neutral', t: "I've got a voicemail on here. From my mom. From, like, the twenty-ninth. She called when I was in the shower and I didn't call back because I was going to call back on the first, after the party. To say happy new year. Properly. Not a text." },
      { s: 'hyein', f: 'sad', t: "So it's just on here. Her saying call me back. I listen to it at night. To go to sleep. It's eleven seconds. She sounds annoyed in it. She's always a bit annoyed. It's the nicest sound I know." },
      { choose: [
        { t: "Can I hear it?", notes: 3, flag: 'eqx-hyein-voicemail', then: [
          { n: "Hyein looked at her for a second, surprised, and then held the phone out between them on the flat of her hand, and pressed play, and they both leaned in over it by the rail with the fountain going under them." },
          { n: "A woman's voice. Warm and quick and a little put out, a voice in the middle of doing three other things, saying Hyein's name the way only one person in the world says your name, with a little lift at the end of it that meant *you, specifically, I'm talking to you*, and then *it's Mom, call me back, why do you never pick up*, and then a pause, and a breath, and something softer, too quick to catch, and then the click." },
          { n: "Eleven seconds. Hyein's lips moved along with all of it, every word, without a sound. Including the soft part at the end. Especially that." },
          { s: 'hyein', f: 'neutral', t: "See? Annoyed." }
        ] },
        { t: "You'll call her back. When we go home.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Yeah. Obviously. First thing. I'll say sorry I was in the shower for, like, a year." },
          { s: 'hyein', f: 'sad', t: "...She's going to be so annoyed. I can't wait." }
        ] },
        { t: "(Put your hand over hers on the phone.)", notes: 2, then: [
          { n: "She put her hand over Hyein's, over the phone, over the lock screen and its stuck clock. Hyein's hand was cold from the rail. She didn't move it. She stood there with Solar's hand over hers and looked down three floors at the fountain, and didn't say anything for a long time, which was the longest Solar had ever heard Hyein not say anything in daylight." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Here's the weird part. You promised to be normal." },
      { s: 'hyein', f: 'neutral', t: "At the house, at home, I'm the door girl. You know that. Someone knocks, I'm up. Pizza, Hanni's Ubers, the girl from downstairs who locks herself out twice a week. I'm up before they've finished knocking. I can't stand it. A knock and nobody going. It makes my whole skin itch." },
      { s: 'hyein', f: 'serious', t: "And on the roof. On Monday. When it knocked." },
      { s: 'hyein', f: 'sad', t: "I wanted to get up, Sol. I wanted to so badly. It was so polite. It sounded like somebody who'd come a really long way and was trying not to be a bother." },
      { n: "She laughed after she said it, short, embarrassed, and put the phone back in her pocket, and kept her hand on it." },
      { s: 'hyein', f: 'flustered', t: "Which is insane. Obviously. It's, like, an instinct. It's a door-girl instinct. I'm not going to *open* anything. Hanni's literally sleeping across my doorway. She thinks I don't know why. I know why." },
      { choose: [
        { t: "Promise me you won't. Not in the red.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "I promise. Obviously. God. Pinky." },
          { n: "She held out her little finger. Solar hooked it. Hyein squeezed, hard, harder than a pinky promise needed, and held on a second too long, and let go, and looked away at the fountain, and said *okay* to nobody, quite quietly." }
        ] },
        { t: "If it knocks again, wake me. I'll go with you to not open it.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...To *not* open it. Together." },
          { s: 'solar', f: 'neutral', t: "We'll stand there and not open it so hard." },
          { s: 'hyein', f: 'happy', t: "Okay. Okay, that's actually so good. That's a plan. That's a two-person plan. I'll wake you. I'll be so annoying about it." }
        ] },
        { t: "It's not a door-girl instinct. It's because it sounded like somebody.", notes: 1, then: [
          { n: "Hyein went still. Not the way she went still for a hem. The other way." },
          { s: 'hyein', f: 'neutral', t: "...It didn't sound like anybody. It was a knock. Knocks don't sound like people." },
          { s: 'hyein', f: 'serious', t: "Don't do that. You promised to be normal." },
          { n: "And then she was off again, louder than before, about a shoe in the next window, and Solar let her, and walked beside her, and watched her hand stay on the pocket the whole way to the escalator." }
        ] }
      ] },
      { n: "They took the monorail back. Hyein sat across the aisle with the paper bag on her knees and talked the whole way, about the trench, and a girl on the platform wearing a bucket hat like it was armor, and whether Mitsuru would let her have the old sewing machine again if she asked nicely or only if Hanni asked, and every so often, in the dark window behind Solar's head, Solar saw her stop in the middle of a sentence and look down at her own pocket." },
      { n: "At the dorm, somebody knocked on the front door just as they came up the path. Junpei, locked out, with a bag of konbini chicken, knocking with his elbow because his hands were full." },
      { n: "Hyein was up the steps and had the door open before he'd finished. She held it for him. She said *you're welcome* before he'd said thank you. Then she stood in the doorway with her hand still on the handle, and looked out past Solar at the street, at the dark coming down over the town toward the river, for one second, two, the way you'd look at a phone that had just stopped ringing." },
      { n: "Then she shut it. Solar heard her check the latch twice." }
    ] },
    { after: '4/30', title: '2: twelve seconds', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { bg: 'paulownia-mall' },
      { n: "The trench was gone from the window. Someone had put the mannequin in a sundress, yellow, with a straw bag over one wrist and a pair of sunglasses pushed up on its blank head, and Hyein was standing in front of it with her arms folded and her weight on one hip, and she was talking about it. Out loud. To nobody. At volume." },
      { n: "Solar heard her from the escalator, and something in her chest that had been held tight since Thursday let go a notch." },
      { s: 'hyein', f: 'serious', t: "—like, who is she *for*. Who is the yellow sundress for. Is she going to a picnic? Is the picnic in 1994? Is she meeting a man called Gary?" },
      { s: 'hyein', f: 'happy', t: "SOL. Thank God. Come and look at Gary's girlfriend. I've been alone with her for twenty minutes and I'm starting to respect her." },
      { choose: [
        { t: "She's going to leave Gary. Look at the bag.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "She IS. Oh my God, she is. That's a getaway bag. That's a bag with a passport in it. Gary has no idea." },
          { n: "She laughed, loud and too high, and a man coming off the escalator looked round, and she didn't care, and Solar watched her laugh and saw the exact moment where it went on a second longer than the joke, and then stopped, the way a song stops when someone pulls the plug." }
        ] },
        { t: "(Stand next to her. Fold your arms the same way.)", notes: 2, then: [
          { n: "She came and stood beside her and folded her arms and put her weight on the same hip, and they stood there side by side judging the yellow sundress like two critics at an opening, and Hyein's shoulder came over and leaned against hers and stayed." }
        ] },
        { t: "How are you?", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "Don't. Not here. Here's for clothes." },
          { s: 'hyein', f: 'neutral', t: "Ask me about the sundress. The sundress I can do." }
        ] }
      ] },
      { n: "She looked all right. That was the trick of it, with Hyein. Her hair was done, really done, pinned up off her neck in a way that had taken half an hour and two of Yunjin's clips; her lip was done; she'd taken one of Fuuka's plain blouses and done something to the collar with a needle and a ribbon so it looked like it cost money. She'd made herself into a girl who was fine. It was beautifully done. Solar had seen her do it to other people a hundred times. She'd never seen her need it this badly herself." },
      { s: 'hyein', f: 'neutral', t: "Hanni's wearing cardigans. It's May, nearly. She's wearing cardigans buttoned up to here and holding her coffee with her sleeve." },
      { s: 'hyein', f: 'serious', t: "I'm not stupid. I know what's under it. I know I did it. I don't remember doing it, but I know." },
      { s: 'hyein', f: 'sad', t: "...She thinks I think she fell. So I'm letting her think that. That's what we're doing. That's the system now. Everybody pretending for everybody so nobody has to say it." },
      { choose: [
        { t: "She'd do it again. She'd do it every night.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "I know. That's the worst part. That's so much worse than if she was mad." },
          { s: 'hyein', f: 'neutral', t: "...I bought her a thing. A balm. For scars. It's in her drawer. She hasn't said anything. She smells of it at breakfast." }
        ] },
        { t: "You could tell her you know.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "And then what? Then she has to talk about it. Then she has to say *it's fine* to my face, and she's so bad at saying it to my face, she gets this little line between her eyebrows." },
          { s: 'hyein', f: 'neutral', t: "No. I'll just be really, really good. For a while. That's how I'll say it." }
        ] },
        { t: "(Don't say anything. Take her hand.)", notes: 2, then: [
          { n: "She took her hand. Hyein let her for exactly as long as it took to blink twice, and then squeezed, hard, and let go, and pointed at the sundress with the same hand, as if that had been the plan all along." }
        ] }
      ] },
      { ifFlag: 'eqx-hyein-dress-keep', then: [
        { n: "She had a garment bag over her arm. Charcoal gray, long, with a zip, the expensive kind from the department store on the third floor. Solar knew without asking what was in it." },
        { s: 'hyein', f: 'neutral', t: "I got it a zip. Like I said. It deserves a zip." },
        { s: 'hyein', f: 'neutral', t: "I carry it everywhere now. I know. Don't. It's not that I think someone'll take it. It's that I think if I leave it in my room I'll come back and it'll smell like here." }
      ] },
      { ifFlag: 'eqx-hyein-dress-make', then: [
        { n: "She was wearing it. Solar didn't see it at first under Fuuka's cardigan, and then Hyein moved and the cardigan fell open and there it was: the black silk, cut down and made into a top with a sharp square neck, beautifully finished, the seams so neat you couldn't have found them with a magnifying glass. The genius sketch, made real." },
        { s: 'hyein', f: 'happy', t: "Right? Right? I did the whole thing in three nights on Mitsuru's machine. Nobody would ever know it used to be anything." },
        { n: "She said it brightly. And then she put her hand flat on her own chest, on the silk, the way you'd put a hand on a pocket to check your keys were there, and left it there a second too long." }
      ] },
      { ifCount: { of: ['eqx-hyein-dress-keep', 'eqx-hyein-dress-make'], max: 0 }, then: [
        { n: "The paper bag was in her other arm, still, the same one, the tissue paper showing at the top. She hadn't decided. She'd said *for now* and *not forever* and it was still *for now*." },
        { s: 'hyein', f: 'neutral', t: "Don't look at the bag. The bag and I are in a period of reflection." }
      ] },

      { place: 'Paulownia Mall · Atrium', time: 'After School', bg: 'paulownia-atrium', soft: true },
      { n: "They ended up at the rail over the atrium again, where they'd been two weeks ago, with the fountain going up and falling three floors down. Hyein put her elbows on the rail. She didn't look at Solar. She looked down at the water." },
      { s: 'hyein', f: 'neutral', t: "You know what it said. At the door. You were there after, you heard me say it knew the end." },
      { s: 'hyein', f: 'neutral', t: "I'm not telling you what the end is. Don't ask. I'm not telling anyone. If I say it out loud it'll be in the air, and then it'll be the thing's words and not hers." },
      { s: 'hyein', f: 'sad', t: "...But I haven't played the voicemail since. Not once. I lie there at night and I hold the phone and I don't press it. Because what if it's different now. What if I play it and it's the door's voice." },
      { choose: [
        { t: "Then don't play it.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "That's the Hanni answer again. You keep doing that. It's like she's got a hand up your back." },
          { s: 'hyein', f: 'serious', t: "...I have to, though. I have to know. If I don't know I'll never play it again, and then I won't have her at all. Stay here while I do it. That's all. Just be here." }
        ] },
        { t: "Play it now. I'm here.", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "...Yeah. Okay. Yeah. Now, while you're here and it's daytime and there's a fountain." },
          { s: 'hyein', f: 'flustered', t: "If I cry don't look at me. Look at the fountain. Count the coins in it." }
        ] },
        { t: "(Put your arm round her. Let her decide.)", notes: 3, then: [
          { n: "She put her arm round Hyein's shoulders on the rail and didn't say anything. Hyein stood in the arm for a while. Then she reached into her pocket and took out the phone, the one from home, with the clock stuck at a minute past midnight." }
        ] }
      ] },
      { n: "She held it flat on her palm between them over the rail, the way she had before, and pressed play." },
      { n: "The voice. Warm and quick and a little put out, a woman in the middle of three other things, saying Hyein's name with that lift at the end that meant *you, specifically*. *It's Mom, call me back, why do you never pick up.* The pause. The breath. The soft part at the end." },
      { ifFlag: 'eqx-hyein-voicemail', then: [
        { n: "Solar had heard it once, at this rail, and she'd remembered it the way you remember a song: by its length. She knew where the click came. She was waiting for it." },
        { n: "It didn't come. The soft part went on, still too quick to catch, a little longer than it had. And then, after it, before the click, something else." }
      ], else: [
        { n: "Hyein's lips moved with all of it, without a sound, every word, the way they must have moved four hundred nights. And then, at the end, they stopped moving, and her face changed, because the voicemail hadn't." },
        { n: "The soft part went on a little longer than her lips did. And then, after it, before the click, something else." }
      ] },
      { n: "Very faint. Two small sounds, close together, like a knuckle on wood. Or a phone being put down on a kitchen table. Or nothing; the kind of noise a line makes." },
      { n: "Then the click." },
      { s: 'hyein', f: 'serious', t: "...Twelve." },
      { s: 'hyein', f: 'serious', t: "It was eleven. It's always been eleven. I've listened to it four hundred times, Sol, I know it the way I know my own name, it is *eleven seconds*." },
      { s: 'hyein', f: 'sad', t: "And that. At the end. That wasn't there. That was never there." },
      // CG: eqx-twelve-seconds — two girls leaning on a mall balcony rail over a fountain, one holding an old phone flat on her palm between them, the other's arm round her shoulders, both looking down at the lit screen.
      { choose: [
        { t: "It's the phone. It's been stuck since New Year's. It's glitching.", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "Yeah." },
          { s: 'hyein', f: 'neutral', t: "Yeah, it's the phone. Mitsuru said all our phones are weird. Minji's are weird. It's the phone." },
          { n: "She said it three times, like a girl checking a latch, and Solar let her, and neither of them believed it, and both of them pretended, which was the system now." }
        ] },
        { t: "Give it to me. I'll keep it tonight. You don't have to hold it.", notes: 3, flag: 'eqx-hyein-phone-kept', then: [
          { s: 'hyein', f: 'surprised', t: "...Keep it?" },
          { s: 'solar', f: 'neutral', t: "Just tonight. You can have it back at breakfast. It'll still be eleven seconds of her. I'll just be the one holding it." },
          { n: "Hyein looked at the phone on her palm for a long time. Then she put it in Solar's hand, carefully, the way you'd hand someone a baby bird, and folded Solar's fingers over it, and held them folded for a second." },
          { s: 'hyein', f: 'sad', t: "Don't play it. Promise. Don't listen to it without me." },
          { s: 'solar', f: 'neutral', t: "I promise." }
        ] },
        { t: "Did you hear the end? The soft part? Is it still the same?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I'm not telling you." },
          { s: 'hyein', f: 'sad', t: "...It's the same. It's the same words. It's just slower. Like she's taking her time over them. Like she's got all the time in the world now." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-spring', soft: true },
      { n: "That night Hyein sewed. She'd got Mitsuru's old machine set up on the lounge table on a towel, the heavy black one with the gold lettering that Mitsuru had used for exactly one costume in her entire life, and she sat at it in her pajamas with her hair down and a mouthful of pins and fed something through it under the lamp, fast, the needle chattering, her foot on the pedal, not talking." },
      { n: "It wasn't anything. Solar sat on the couch with her knees up and watched and couldn't work out what it was going to be. A long strip of plain cotton, a sheet Mitsuru had found in a cupboard, hemmed on both edges, then turned and hemmed again, then turned. Rows and rows of straight stitching, perfectly even, going nowhere." },
      { s: 'hyein', f: 'neutral', t: "It's not anything. Don't ask what it is. I just need my hands to go." },
      { s: 'hyein', f: 'neutral', t: "When I was little and I couldn't sleep my mom gave me her button tin and I'd sort it. By color. Then size. Then sort it again. My hands would go and my head would stop." },
      { n: "She went on stitching. The needle went up and down. Her hands were perfectly steady, the steadiest thing about her; it was the rest of her that wasn't, the shoulders, the jaw, the foot on the pedal going a fraction too hard." },
      { choose: [
        { t: "(Sit on the floor by her chair. Hand her pins when she reaches.)", notes: 3, then: [
          { n: "She slid off the couch and sat on the floor beside the chair with the pincushion in her lap, and every time Hyein's hand came down without looking, she put a pin in it. Hyein didn't say thank you. On the fourth one she took it and then, without looking, put her other hand on top of Solar's head for a second, the way you'd touch a dog lying by your feet, and went on." }
        ] },
        { t: "Make something for Hanni. A cardigan. One that's not hot.", notes: 3, flag: 'eqx-hyein-hanni-cardigan', then: [
          { n: "The needle stopped. Hyein sat with her foot off the pedal and the pins in her mouth and looked at the strip of cotton, and then at Solar, and then took the pins out one at a time and put them back in the cushion." },
          { s: 'hyein', f: 'happy', t: "...Linen. Cropped sleeves. So she can push them up and still be covered. With pockets, she loves a pocket." },
          { s: 'hyein', f: 'serious', t: "You're a genius. Don't tell anyone, it'll go to your head. Get me a pencil." }
        ] },
        { t: "(Watch. Don't talk.)", notes: 2, then: [
          { n: "She watched. She didn't talk. The machine chattered and stopped and chattered, and the lamp hummed, and at some point Yunjin came down for water and stood in the doorway and watched too, and didn't talk either, and went back up." }
        ] }
      ] },
      { ifRank: { hanni: 2 }, then: [
        { s: 'hyein', f: 'neutral', t: "There's a bell on my door. On the inside handle. A little one, on a red string." },
        { s: 'hyein', f: 'sad', t: "Hanni thinks I don't know it's there. I heard her tie it on. Four times. She's so bad at knots." },
        { s: 'hyein', f: 'neutral', t: "...I haven't touched it. I go out the door really carefully now, so it doesn't ring. So she can sleep." }
      ] },
      { s: 'hyein', f: 'neutral', t: "Sol. Can I tell you one thing about the end. Not the words. Just one thing." },
      { s: 'hyein', f: 'sad', t: "When she said it. Through the door. It wasn't to the me I am now. It was how she'd say it if I was really little. Like when I had a fever and she'd sit by the bed. Like she'd come a long way to say it to the little one." },
      { s: 'hyein', f: 'serious', t: "And I wanted to be the little one so badly. Just for a second. Just to be the one somebody came a long way for." },
      { choose: [
        { t: "Somebody did come a long way for you. Hanni. Me. All of us.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...I know." },
          { s: 'hyein', f: 'neutral', t: "It's not the same. You know it's not the same. But I know." }
        ] },
        { t: "That's what it wanted you to want.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "I know *that*, too. God. I know everything. I know it all and I still lie there holding a phone." }
        ] },
        { t: "(Don't answer. Lean your head on her knee.)", notes: 3, then: [
          { n: "She didn't answer. She leaned her head sideways against Hyein's knee, and Hyein's hand came down and stayed this time, in her hair, and the machine was quiet, and they sat like that under the lamp for a long time, two girls in pajamas in a lounge in the wrong country, and nobody came a long way, and nobody knocked." }
        ] }
      ] },
      { ifFlag: 'eqx-hyein-phone-kept', then: [
        { n: "She slept with Hyein's phone under her pillow, the one with the clock stuck at a minute past midnight. She didn't play it. She'd promised. She lay in the dark with her hand on it." },
        { n: "At some point in the red, for one second, it was warm. Warm like a hand had been holding it. Then it wasn't. In the morning at breakfast she gave it back, and Hyein took it without a word and pressed it to her chest and then put it in her pocket, and neither of them asked the other how they'd slept." }
      ], else: [
        { n: "When Solar went up at eleven, Hyein was still at the machine. She came down at one, after the red, for water, and Hyein was still there, at the table, with the lamp on and the long strip of cotton finished and folded in a perfect square beside her, and the phone face down on top of it, and her hand on the phone, asleep sitting up." }
      ] }
    ] },
    { after: '6/8', title: '3: one new', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { bg: 'paulownia-mall' },
      { n: "The mannequin was in a raincoat. Of course it was; it was June, and the whole of Paulownia Mall had gone into rainy-season mode overnight, umbrella stands at every door and a display of clear plastic boots by the escalator arranged in a pyramid like fruit. The raincoat was transparent. Under it the mannequin had on a white slip dress and nothing else, and it was holding a clear umbrella over its blank head, indoors, and Hyein was standing in front of it with her hands on her hips." },
      { s: 'hyein', f: 'serious', t: "She's wearing a shower curtain. Sol. Look at me. She is wearing a *shower curtain* over a *nightie*, and holding an umbrella *inside a building*, and somebody was paid to do this." },
      { s: 'hyein', f: 'happy', t: "I love her. I've decided. She's insane and I love her. She's the first one all year who looks like she knows what town she's in." },
      { choose: [
        { t: "She's dressed for the red hour. Everything's see-through, nothing's dry.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...Oh my God. Oh my God, she is. That's so dark. That's the darkest fashion opinion you've ever had." },
          { s: 'hyein', f: 'happy', t: "I'm so proud of you. I'm stealing it. I'm telling Yunjin it was mine." }
        ] },
        { t: "(Hold an imaginary umbrella over your own head. Strike the pose.)", notes: 2, then: [
          { n: "She held an imaginary umbrella over her own head and turned her face to the same blank angle as the mannequin, and Hyein made a noise like a kettle and grabbed her arm and they had to walk away from the window for a minute because a woman with a pushchair was staring." }
        ] },
        { t: "You're in a good mood.", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "I'm in a *mood*. Don't call it good, you'll jinx it. It's a mood. I've been in it since breakfast. Let me have it." }
        ] }
      ] },
      { ifFlag: 'eqx-hyein-hanni-cardigan', then: [
        { n: "She was carrying a paper bag again. Not the old one. A new one, from the fabric shop on the first floor, and when Solar looked at it Hyein opened it without being asked and tipped it toward her: linen, oatmeal-colored, folded, with a long row of tiny shell buttons down the front and the sleeves cut short, to the elbow, so you could push them up and still be covered." },
        { s: 'hyein', f: 'happy', t: "It's done. It's *done*. Pockets. Look at the pockets. She's going to put her hands in them and lose her mind." },
        { s: 'hyein', f: 'neutral', t: "...I'm going to leave it on her futon. Folded. Not say anything. If I hand it to her she'll cry and then I'll cry and then we'll have to talk about why there's a cardigan." }
      ], else: [
        { n: "Her nails were done. Pale green, very glossy, and on the left hand, the ring finger, a tiny white bell painted on, with a red line for a cord. She saw Solar see it and closed her hand." },
        { s: 'hyein', f: 'neutral', t: "Don't. It's a joke. It's my joke. She's going to see it and she's going to know I know, and she won't be able to say anything, and neither will I. That's how we talk now." }
      ] },

      { place: 'Paulownia Mall · Atrium', time: 'After School', bg: 'paulownia-atrium', soft: true },
      { n: "They ended up at the rail again. They always ended up at the rail. The fountain went up and fell three floors down, and somebody's toddler was throwing coins in one at a time with enormous ceremony, and Hyein leaned on her elbows and watched the coins go and didn't say anything for long enough that Solar knew." },
      { n: "She took the phone out of her pocket. The one from home, the one with the clock stuck at a minute past midnight on the first of January. She didn't play anything. She held it flat on her palm between them and turned it so Solar could see the screen." },
      { n: "The little voicemail icon in the corner had a number on it. A red dot with a *1* in it." },
      { s: 'hyein', f: 'neutral', t: "It's been there since the full moon. The last one. I woke up and it was there." },
      { s: 'hyein', f: 'neutral', t: "It doesn't have signal. It's never had signal, not once since we got here, it doesn't even do the one-bar thing at seven like Hanni's does. It can't *get* a voicemail. And it's got one." },
      { n: "She thumbed into the list. Two entries. The old one, *Mom*, *12/29*, *0:11*, which was the number it had always said even when it played twelve. And above it, new, bold, unplayed." },
      { n: "*Mom.* *12:01 AM.* *0:02.*" },
      { n: "Two seconds. Timed at the minute the clock had stopped. Solar looked at it and something cold and small went down the back of her neck and sat at the base of her spine, and she didn't let it reach her face." },
      { s: 'hyein', f: 'serious', t: "I haven't played it. I'm not going to play it. Don't ask me to and don't ask me not to." },
      { s: 'hyein', f: 'sad', t: "Two seconds, Sol. What do you say in two seconds. *Hyein-ah.* That's two seconds. That's exactly two seconds. I've timed it. I've said it to myself in the mirror with a stopwatch like a crazy person." },
      // CG: eqx-one-new — a girl's hand holding an old smartphone flat on her palm over a mall balcony rail, the screen showing a voicemail list with one unplayed message, a fountain blurred far below.
      { ifFlag: 'eqx-hyein-phone-kept', then: [
        { s: 'hyein', f: 'neutral', t: "You said it was warm. That night you kept it. You thought I didn't hear you say it at breakfast, under your breath, to Hanni. *It was warm for a second.*" },
        { s: 'hyein', f: 'sad', t: "...It's warm every full moon now. I sleep with it on my chest and at twelve it gets warm, like a hand, for a second. That's when it came. The second time it got warm, it came." }
      ] },
      { choose: [
        { t: "Give it to me. I'll put it somewhere you can't reach in the night.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "No." },
          { s: 'hyein', f: 'sad', t: "...Sorry. No. It's the only thing I've got of hers. Even if one of the things on it isn't her. I'm not giving her to anybody, even you." }
        ] },
        { t: "(Put your hand over the phone. Over hers.)", notes: 3, then: [
          { n: "She put her hand over Hyein's, over the phone, so the screen was covered, and the red dot with it. Hyein let her. Her hand under Solar's was cold, and then it wasn't, and they stood like that at the rail with the fountain going and the toddler throwing coins, and Hyein's breathing slowed down by itself, a breath at a time." }
        ] },
        { t: "Tell Mitsuru. Tell Aigis. Somebody should look at that phone.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "And say what? *Hi, my dead phone got a voicemail from my mom, can you put it in a bag and take it away from me?*" },
          { s: 'hyein', f: 'neutral', t: "...Aigis already knows something. She looks at my pocket. When I walk past. Like she can hear it in there." }
        ] }
      ] },

      { place: 'Iwatodai Dorm · Front Hall', time: 'Late Night', bg: 'iwatodaidorm-front-night', soft: true },
      { n: "The dorm at a quarter past eleven, the lounge emptying, somebody's music going upstairs. Hyein did the latch the way she did it every night: down the hall in her slippers, hand on the brass, turn, check, turn back, check. Twice. Then she stood with her forehead nearly on the door for a second, listening, the way you'd listen at a door for someone you'd been told wasn't coming." },
      { n: "Solar was on the stairs. She'd come down for water and stopped, because she'd seen it before and never this close." },
      { n: "Then Aigis came out of the kitchen. Light, even, every step the same length. She went past Hyein without a word, put her hand on the latch, turned it, checked it, turned it back. Once. Then she looked down at Koromaru, who was lying across the mat with his chin on his paws, and Koromaru thumped his tail once on the boards, and Aigis nodded to him as if he'd signed something." },
      { s: 'hyein', f: 'surprised', t: "...Are you checking my latch?" },
      { s: 'aigis', f: 'neutral', t: "I am checking the latch. It is everyone's latch." },
      { s: 'hyein', f: 'serious', t: "You're checking it *after* me. You're doing a third one. How long have you been doing a third one?" },
      { s: 'aigis', f: 'neutral', t: "Since the twelfth of April. I did not want you to know. It is not a thing you need to carry." },
      { n: "Hyein looked at her. In the low hall light her face went through four things very fast, the way it did, offended and embarrassed and touched and then, last, something softer that she covered by folding her arms." },
      { s: 'hyein', f: 'neutral', t: "Wait there. Don't move. Don't check anything." },
      { n: "She went upstairs and came back with something in her fist, and stood in front of Aigis and held it up: a ribbon. Plain white cotton, the edges hemmed so fine and even you couldn't see the stitches, a long strip cut from the plain sheet she'd sat up hemming at the lounge table one night in the spring and wouldn't say what it was for." },
      { s: 'hyein', f: 'neutral', t: "Turn around. I'm doing your hair. You've had the same headband since the dawn of time and you deserve a moment." },
      { n: "Aigis turned around. She stood perfectly still in the front hall while Hyein tied the white ribbon into her hair at the back, in a bow, and retied it, and retied it, three times, the way Hanni did knots, until it sat exactly right." },
      { s: 'hyein', f: 'happy', t: "There. Now if I'm ever looking for you in a crowd I'll know which one's you. You're the one with my ribbon. That's how this works." },
      { s: 'aigis', f: 'happy', t: "...Thank you. I will not take it off." },
      { s: 'hyein', f: 'flustered', t: "You can take it off to *wash*, Aigis, my God." },
      { s: 'aigis', f: 'neutral', t: "I will think about it." },
      // CG: eqx-ribbon — a dim dormitory front hall at night, a girl in pajamas tying a plain white ribbon into the hair of a still, straight-backed blonde girl, a white dog lying across the mat by the front door.

      { place: 'Iwatodai Dorm · Stairs', time: 'Late Night', bg: 'iwatodaidorm-stairs-night', soft: true },
      { n: "They sat on the stairs after, the two of them, on the fourth step from the top, which was the one you could see the front door from. Hyein had her knees up in her pajama pants and the phone in her lap, face up. The red dot. The *1*." },
      { s: 'hyein', f: 'neutral', t: "Can I ask you something and you just answer it? Not the Hanni answer. Not the smart answer. Just yours." },
      { s: 'hyein', f: 'neutral', t: "At home it never rings. Her phone. I mean she never calls back. I call and it goes to voicemail and I leave one and she never calls back for like a week, and then it's eleven seconds of *why do you never pick up*. That's my mom. That's what she is at home. She's the voicemail." },
      { s: 'hyein', f: 'sad', t: "Here she's *trying*. Here something's trying so hard. It came all this way. It knows the end of the message. It sat outside my door." },
      { n: "She turned the phone over in her hands. Over. Over." },
      { s: 'hyein', f: 'serious', t: "So if it ever rings. It won't. It can't. But if it does, and it's daytime, and it's her voice, really her, the real one, not the door one, if I can tell, and I'm going to be able to tell—" },
      { s: 'hyein', f: 'sad', t: "Tell me I'm allowed to pick up. That's all. Tell me it's okay to answer my mom." },
      { choose: [
        { t: "If it's really her, pick up. She's your mom.", notes: 3, tally: { cakes: 1, 'asks.hyein': 'yes' }, then: [
          { n: "Hyein's whole face opened. She didn't cry. She put both arms round her knees and her forehead on them and made a sound like laughing, muffled, and when she lifted her head again she looked lighter than Solar had seen her since New Year's, as if someone had untied something heavy from her ankle." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay. Thank you. I'm allowed. I'm going to be so careful, I promise. I'll know. I'll know if it's her." },
          { n: "She went up to bed with the phone held against her chest in both hands. Solar sat on the fourth step from the top for a long time after, looking at the front door, the brass latch checked three times, the dog across the mat, and she couldn't work out why she'd said the kindest thing she could think of and felt, the moment it was out, like she'd left a window open in a house she couldn't get back to." }
        ] },
        { t: "Don't. Not that phone. Not any voice, not any door. Promise me.", notes: 2, tally: { 'asks.hyein': 'no' }, then: [
          { s: 'hyein', f: 'serious', t: "You don't get to—" },
          { n: "She stopped. She looked at Solar's face. Whatever she saw on it made her close her mouth, and look down at the phone, and nod, once, the way you'd nod at a nurse." },
          { s: 'hyein', f: 'neutral', t: "...Okay. Fine. I promise. Not that phone." },
          { s: 'hyein', f: 'sad', t: "That's the system, right? Everybody promising everybody. I'll be so good. I'll be so, so good." },
          { n: "She went up without saying goodnight, and Solar heard her door, carefully, so the bell wouldn't ring." }
        ] },
        { t: "I can't answer that for you. It's yours. Whatever you do with her voice, I'll be right there either way.", notes: 2, tally: { choose: 1, 'asks.hyein': 'choose' }, then: [
          { n: "Hyein looked at her for a long time. Solar watched it not be what she'd wanted. Watched her want to be angry about it and not quite manage, the anger going round and round in her like the paper boat in the canal, not sinking, not getting anywhere." },
          { s: 'hyein', f: 'sad', t: "...That's worse. You know that's so much worse. If you'd said yes I could've blamed you." },
          { s: 'hyein', f: 'neutral', t: "Mine. Okay. It's mine. God. Okay." },
          { n: "She looked down at the phone in her lap. At the red dot. She didn't play it. She held her thumb over it for a long moment, and then, slowly, she turned the phone face down on her knee, and put her hand flat on top of it, and left it there." },
          { s: 'hyein', f: 'neutral', t: "Then I'm keeping it. Unplayed. Till I know what I want. That's allowed, right? Not deciding yet. That can be mine too." },
          { s: 'solar', f: 'neutral', t: "That can be yours too." }
        ] }
      ] },
      { n: "At twelve the hall went red, and the hum came up through the floor, and down at the bottom of the stairs Koromaru lifted his head off his paws and looked at the front door, and didn't growl, and didn't put his head back down for the whole of the hour." },
      { n: "Nothing knocked. In the morning, at breakfast, Aigis came down with Hyein's white ribbon in her hair, tied in a perfect bow, and sat down in her usual place, and Junpei looked at it, and opened his mouth, and Hyein said *don't* from across the table so fast and so loud that he shut it again, and nobody mentioned the ribbon after that, and Aigis didn't take it off." }
    ] }
  ]
});
