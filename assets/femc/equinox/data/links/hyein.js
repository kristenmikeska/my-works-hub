/* Persona 3: Equinox · Hyein Lee (Lovers). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1-6. Rank 1 opens 4/13, a Tuesday, one of her home days; rank 2 opens 4/30, after The Knock, and reads
   her rank-1 flags and Hanni's rank. Rank 3 (from 6/8, shop windows, atrium, dorm front hall and stairs; reads
   eqx-hyein-hanni-cardigan, eqx-hyein-phone-kept) records her ask: tally asks.hyein (+ cakes / choose). Aigis speaks in
   it (the ribbon). Rank 4 (from 7/8, the festival-season shop window, then a yukata fitting in the dorm lounge at night):
   reads eqx-stage (the four girls' measurements), eqx-tanabata (her wish's answered back), asks.hyein (the phone: face up
   and charged / in the drawer / face down), eqx-hunted (she knows the hum from Haechan's tape); she hums the lullaby
   without knowing it. Rank 5 (from 8/18, summer break, the atrium rail at noon, then Solar's room at night): reads
   eqx-festival + eqx-fireworks-girls, eqx-three-breakfasts; at 12:01 p.m. the dead phone rings with *Mom*: asks.hyein yes
   = she answers, two seconds of her home kitchen (eqx-hyein-picked-up), no = she lets it ring, keeping her promise, choose
   = she lets it ring by her own choice (both eqx-hyein-let-ring); she sleeps over; the phone warms at 12:01. Rank 6 (from
   9/13; branches hard on eqx-equinox, also dead.shinjiro): her first shop window, "Are You Home?"; why she never picks up
   (her mother always asks when she's coming home); Chenle texts that a flooded corridor with a door lying in the water has
   opened on the Third Hill: her ask floor, flag eqx-floor-hyein. Her rank 6 (or Hanni's) by 11/22 is §14's Aigis
   condition (story-act4.js eqx-1122 reads ifRank hyein 6 / hanni 6): rank 6 is reachable by ~10/10. Ranks 7-10 to come.
   Rank 2 flags: eqx-hyein-phone-kept, eqx-hyein-hanni-cardigan. Rank 4 flags: eqx-hyein-yukata-navy | -red | -hers,
   eqx-hyein-hum-asked, eqx-hyein-matching. Rank 5 flags: eqx-hyein-picked-up, eqx-hyein-let-ring, eqx-hyein-slept-over.
   Rank 6 flags: eqx-hyein-two-person, eqx-floor-hyein (hook: her ask floor in the Well, §8). No new tallies. Nothing reads
   the cosmetic ones yet. Chenle texts in rank 6.
   Solstice's Hyein (assets/femc/game/links/hyein.js) is shared memory here: everyone remembers that year.
   Flags this file sets: eqx-hyein-dress-keep | eqx-hyein-dress-make (rank 1: what Solar tells her to do with the dress she
   arrived in), eqx-hyein-voicemail (rank 1: Solar listens to the saved message with her). Nothing reads them yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hyein', name: 'Hyein Lee', short: 'Hyein', arcana: 'Lovers', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'mall', spot: 'Shop Windows', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons along the shop windows in Paulownia Mall, judging every mannequin out loud.' },
  approach: "Hyein is in front of a shop window in Paulownia Mall with a paper bag held against her chest in both arms, not judging the mannequin for once, just standing there, and she sees you in the glass and turns around already talking.",
  cast: { chenle: 'Chenle' },
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
    ] },
    { after: '7/8', title: '4: fitting', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { bg: 'paulownia-mall' },
      { n: "The mannequin was in a yukata. Navy, with white morning glories climbing up from the hem, a yellow obi tied in a bow so big and so stiff it looked like it could take off, and somebody had put a paper fan in its blank hand and tilted its blank head as if it were listening to something nice a long way off. The whole second floor had gone like that overnight. Summer festival season. Goldfish on the posters, lanterns in the shop windows, a display of geta by the escalator lined up in pairs like a school photo." },
      { n: "Hyein was in front of it with her arms folded and her weight on one hip, and she wasn't talking. She was looking at the obi the way a mechanic looks at an engine." },
      { s: 'hyein', f: 'serious', t: "It's tied wrong. Sol. The bow. They've tied it like a present. It's not a present, it's a *knot*, it has a whole history, I watched a video about it at three in the morning." },
      { s: 'hyein', f: 'happy', t: "I love her, though. I want to be her. I want to be standing in a window being listened to by something nice a long way off." },
      { choose: [
        { t: "She's waiting for someone who's late.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "She IS. Look at the fan. That's a waiting fan. That's a fan you hold when you've been at the shrine gate for twenty minutes and you're pretending you just got there." },
          { s: 'hyein', f: 'neutral', t: "...He's not coming. She knows. She's going to stand there being beautiful at him anyway. Iconic." }
        ] },
        { t: "You could tie it better.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "I could tie it so much better. I could tie it with my eyes shut. I'm going to come back at night and break in and retie it." },
          { s: 'hyein', f: 'serious', t: "Don't put that in the group chat. Mitsuru reads the group chat." }
        ] },
        { t: "(Tilt your head the same way as the mannequin.)", notes: 2, then: [
          { n: "She tilted her head, the same angle, listening to the same nothing, and Hyein looked at the two of them side by side in the glass and made the kettle noise and had to hold the rail." }
        ] }
      ] },
      { n: "She had her sketchbook under her arm, the big one, and a cloth tape measure round her neck like a doctor's stethoscope, the yellow one with the numbers worn off the first twenty centimeters, and Solar knew before she asked that she'd been measuring somebody." },
      { ifEvent: 'eqx-stage', then: [
        { s: 'hyein', f: 'neutral', t: "The girls. At the boarding house. They came through in whatever they were wearing, Sol, in four different rooms' clothes. Chaewon's in somebody's pajama top. Kazuha came through in tights and a school blazer." },
        { s: 'hyein', f: 'serious', t: "So they come to the mall now, and I measure them, by the fountain, in public, like a crazy person. I've got four new pages. I'm making them things. Real things. Things that fit." },
        { s: 'hyein', f: 'sad', t: "...They each wake up with three lives and not one of them came with a coat. That's the part I can't stop thinking about. Three lives and not one coat." }
      ] },
      { s: 'hyein', f: 'neutral', t: "Okay. Here's the thing. Don't make it weird. I want to make you a yukata. For the festival. In August. I've already bought half the fabric so you can't say no, the man at the shop on the first floor knows me now, he calls me *sensei* as a joke and I've decided it's not a joke." },
      { choose: [
        { t: "(The navy one, with the morning glories.)", notes: 3, flag: 'eqx-hyein-yukata-navy', then: [
          { s: 'hyein', f: 'happy', t: "Like her. Like the girl in the window. Okay, but *better*, and tied right. You're going to look like somebody waiting at a gate who's actually going to get met." }
        ] },
        { t: "(The red one, with the goldfish.)", notes: 3, flag: 'eqx-hyein-yukata-red', then: [
          { s: 'hyein', f: 'happy', t: "*Red.* Oh my God. Bold. Loud. I've raised you so well. Red with goldfish and a white obi and you're going to be the only thing anybody looks at all night." },
          { s: 'hyein', f: 'neutral', t: "...Wait. Do you want that? Being the only thing anybody looks at? We can do navy. Navy's a hiding color." }
        ] },
        { t: "You choose. You always know.", notes: 3, flag: 'eqx-hyein-yukata-hers', then: [
          { s: 'hyein', f: 'surprised', t: "...Really? Just like that?" },
          { s: 'hyein', f: 'happy', t: "Okay. Okay, I'm going to choose something you'd never have picked and you're going to love it and you're going to have to say so in front of Hanni. It's going to be green. Don't argue." }
        ] }
      ] },
      { ifEvent: 'eqx-tanabata', then: [
        { n: "On the way down the escalator she said it, not looking at Solar, looking at the goldfish on the posters going past." },
        { s: 'hyein', f: 'neutral', t: "I know what mine said. On the back. At the shrine. Everybody's said it. Stay." },
        { s: 'hyein', f: 'sad', t: "I wished for Hanni to sleep in her own bed. That's all. That's what I put on the front, in my nicest writing. And in the morning I went up the steps before school and found mine on the bamboo, and on the back someone had answered it." },
        { s: 'hyein', f: 'serious', t: "That's what it felt like, Sol. Not a word. An answer. Like I'd asked for something and someone said, sure, sweetheart. If you stay." }
      ] },

      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-summer', music: 'tender', soft: true },
      { n: "The fitting was at nine, in the lounge, with the sewing machine on its towel on the low table and the lamp pulled over and every window open because it was July and the air in the dorm sat in the rooms like warm water. Hyein had the half-made thing pinned together on a hanger on the curtain rail. Unhemmed, the sleeves only tacked on, a ghost of a yukata in the lamplight." },
      { n: "She put it on Solar over her T-shirt and shorts and stood back and looked, and then came in close and started pinning, and didn't talk, because her mouth was full of pins." },
      { n: "Solar stood very still. Hyein's hands went over her the way they'd gone over the black silk in April, quick and certain, pinch, fold, pin, the cool head of a pin against her collarbone and then gone. Her hands were the steadiest thing about her. They always had been. Up close Solar could smell her shampoo and the chalk off the tailor's chalk and, under it, the faint sour edge of somebody who hadn't been sleeping." },
      { ifChoice: { 'asks.hyein': 'yes' }, then: [
        { n: "The phone was on the low table beside the machine. The one from home. Face up. Plugged into a fat travel adaptor Jaehyun had found her, though it couldn't charge anything that didn't want charging, and its clock still said a minute past midnight on the first of January, and the little red dot with the *1* was still in the corner." },
        { n: "Every few pins Hyein's eyes went to it. Not long. The way you'd check a pot." },
        { s: 'hyein', f: 'neutral', t: "In case. You said I could. If it's her, really her, in the daytime, I'm allowed. So I'm keeping it where I can get to it. That's all." }
      ], else: [
        { ifChoice: { 'asks.hyein': 'no' }, then: [
          { n: "The phone wasn't on the table. Solar noticed that. For three months it had been wherever Hyein was, in a pocket, in a hand, on a pillow; tonight it wasn't anywhere." },
          { s: 'hyein', f: 'neutral', t: "It's in my drawer. Under the sweaters. I promised. I don't even hold it at night now. I hold Hanni's old hoodie instead. It smells like her fruity candle." },
          { s: 'hyein', f: 'sad', t: "I'm being so good. I want that on the record. I'm being *so* good." }
        ], else: [
          { n: "The phone was on the low table beside the machine. Face down. It had been face down, as far as Solar could tell, since the night on the stairs; Hyein turned it over to look at it sometimes, the red dot and the *1*, and turned it back." },
          { s: 'hyein', f: 'neutral', t: "Still not playing it. Still not deciding. It's been a month. I'm the most undecided person in Japan." }
        ] }
      ] },
      { n: "And then she started humming." },
      { n: "Round the pins, through her nose, the way people hum when their hands are busy and their head's gone somewhere else. Not a song from the house speaker. Not anything from the radio. Three notes up, two down, and then a long one, held, that went on past where your breath should have run out." },
      { n: "Solar knew it. She knew it from the bottom of the Well with the sky under her feet in April, and from Mrs. Oka's front room in May with the carp streamers hanging straight in no wind, and from somewhere further back than either, a bed, a dark room, a voice. Every hair on her arms stood up under the cotton." },
      { n: "Hyein went on pinning. Three up. Two down. The long one." },
      { choose: [
        { t: "Hyein. What's that song?", notes: 2, flag: 'eqx-hyein-hum-asked', then: [
          { s: 'hyein', f: 'neutral', t: "Mm? What song?" },
          { s: 'solar', f: 'neutral', t: "You were humming." },
          { s: 'hyein', f: 'surprised', t: "Was I? Oh. I don't know. It's a— my mom used to—" },
          { n: "She stopped, with a pin halfway in. She stood with her hand on Solar's shoulder and the pin in her fingers and her eyes on nothing." },
          { s: 'hyein', f: 'neutral', t: "...No. She didn't. My mom never sang anything. She can't sing. She sings in the car and Dad turns the radio up." },
          { s: 'hyein', f: 'serious', t: "I don't know where that's from. Isn't that weird? It's so in my head. It's like it's been in there forever." }
        ] },
        { t: "(Put your hand over hers. Stop the pin.)", notes: 3, flag: 'eqx-hyein-hum-asked', then: [
          { n: "She put her hand over Hyein's on her own shoulder, over the pin, and Hyein stopped, and the humming stopped with her hands, as if it had been coming out of them." },
          { s: 'hyein', f: 'surprised', t: "What? Did I stick you?" },
          { s: 'solar', f: 'neutral', t: "You were humming." },
          { s: 'hyein', f: 'neutral', t: "...Was I? I don't hum. I'm a talker. Ask anyone. I'm a talker, not a hummer." },
          { n: "She took her hand back and looked at it, at her own steady fingers, and put the pin in, very carefully, and didn't hum again, and Solar watched her not hum for the rest of the fitting the way you'd watch somebody not scratch a bite." }
        ] },
        { t: "(Don't say anything. Let her finish.)", notes: 1, then: [
          { n: "She didn't say anything. She stood still and let Hyein pin, and the hum went on, three up, two down, the long one, round and round like a shuttle, and Solar counted it, and it went round eleven times before Hyein ran out of pins and stopped to get more and didn't start it again." },
          { n: "She didn't seem to know she'd been doing it. She came back from the sewing box talking about sleeves." }
        ] }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Then Hyein's face changed. All at once, like a light going out in a window. She sat down on the arm of the couch with the pincushion in her lap and her hand flat on her stomach." },
        { s: 'hyein', f: 'sad', t: "...That's the tape. Isn't it. That's what was on Haechan's tape. Under the hum. That's the bit I couldn't— that's why I was sick." },
        { s: 'hyein', f: 'serious', t: "How is it in my mouth, Sol? How is it in my *mouth*?" }
      ] },
      { n: "When it was pinned all over she turned Solar round to the black window so she could see herself, a girl in a half-made yukata in a dark pane of glass with the lamp behind her, and stood beside her in the reflection with the tape measure round her neck." },
      { s: 'hyein', f: 'happy', t: "There. See? There you are. You're going to be so pretty I'll have to stand next to you in something ugly so nobody gets hurt." },
      { n: "In the glass, Hyein's reflection smiled a second after Hyein did. Or Solar thought it did. She looked again, and they were together, both of them smiling, and she put it down to the lamp, and the late hour, and the pins, and didn't say anything." },
      { choose: [
        { t: "Thank you. I mean it.", notes: 2, then: [
          { s: 'hyein', f: 'flustered', t: "Ew. Don't mean it at me. Say it like a normal person, with a joke on top." }
        ] },
        { t: "Make yourself one too. We'll match.", notes: 3, flag: 'eqx-hyein-matching', then: [
          { s: 'hyein', f: 'surprised', t: "...Match? Like, twin outfits? Like the girls from my floor who do the matching pajamas at Christmas and I make fun of them?" },
          { s: 'hyein', f: 'happy', t: "...Yeah. Okay. Yeah. Matching. I'll do the obis the same and the fabric different. That's the tasteful way. Hanni gets one too, she's going to cry." }
        ] },
        { t: "(Hug her. Mind the pins.)", notes: 3, then: [
          { n: "She hugged her, carefully, and got stuck anyway, twice, and Hyein shrieked and laughed and pulled them out of her one by one going *hold still, hold still, you're a pincushion, this is your fault*, and Yunjin came to the door to see what the noise was and went away again shaking her head." }
        ] }
      ] },
      { n: "Afterward, upstairs, Solar lay in the dark and didn't sleep, and at some point, very far off, down the river, a long way past the post office, she heard someone humming. Three up. Two down. The long one." },
      { n: "She put the pillow over her head. When she took it off it was quiet, and she couldn't have said, by then, whether she'd heard it outside, or only in herself." }
    ] },
    { after: '8/18', title: '5: twelve-oh-one', place: 'Paulownia Mall · Atrium', time: 'Daytime', music: 'city', scene: [
      { bg: 'paulownia-atrium' },
      { n: "The mall in the middle of August had given up on air. The air conditioning ran so hard it made the glass roof drip on the inside, and the atrium smelled of chlorine from the fountain and sugar from the crêpe stand, and every bench round the water had a grandmother on it fanning a grandchild, and the grandchildren, in a line, had their feet in the fountain, and nobody was stopping them." },
      { n: "Hyein was at the rail on the second floor. Their rail. Elbows on it, chin on her fists, watching the grandchildren's feet. She had her hair up in a clip shaped like a shark and she was wearing a top Solar had never seen, white, square-necked, with tiny goldfish embroidered along the hem in orange thread, one of them upside down." },
      { s: 'hyein', f: 'neutral', t: "Don't look at the upside-down one. That's on purpose. That's my signature now. Every piece I make has one thing wrong in it on purpose so I know it's mine." },
      { ifEvent: 'eqx-festival', then: [
        { ifFlag: 'eqx-fireworks-girls', then: [
          { s: 'hyein', f: 'happy', t: "I've been thinking about the fireworks. The step. The three of us. Hanni holding your arm like you were going to float off." },
          { s: 'hyein', f: 'sad', t: "...It was the first night since New Year's I didn't hold my phone at all. I didn't even think about it. Isn't that crazy? Somebody had to set off five thousand fireworks for me to forget my phone." }
        ], else: [
          { s: 'hyein', f: 'happy', t: "I saw you at the festival. In it. My yukata. Walking around with everybody looking. I nearly cried into the takoyaki. I didn't. Hanni did, but that was the smoke." }
        ] }
      ] },
      { ifEvent: 'eqx-three-breakfasts', then: [
        { s: 'hyein', f: 'neutral', t: "And your *mom*. Your New York mom. Here. In a cardigan. She saw me in the dorm kitchen and she said *Hyein, oh my goodness, the tall one*, like she'd been waiting all year to say it." },
        { s: 'hyein', f: 'sad', t: "...She hugged me, Sol. Right there by the fridge. She smelled like a department store. I had to go upstairs for a minute after." }
      ] },
      { choose: [
        { t: "You went upstairs and held your phone.", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "...I went upstairs and held my phone." },
          { s: 'hyein', f: 'sad', t: "Not to play anything. Just to hold. It's like holding a hand that's gone to sleep. You can't feel it but you know it's yours." }
        ] },
        { t: "The goldfish is a good signature.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "Right? Right? Forty years from now there's going to be a museum of my work and every single piece has one wrong thing and the curators are going to fight about it." }
        ] },
        { t: "(Lean on the rail next to her. Watch the kids.)", notes: 2, then: [
          { n: "She leaned on the rail beside her and they watched the grandchildren, the row of small feet going up and down in the water, a little boy in a bucket hat solemnly trying to catch a coin as it sank." }
        ] }
      ] },
      { n: "The clock over the atrium was a big round one, white, with black hands, hung from the roof on chains above the fountain so the whole mall could see it, and it said two minutes to twelve. Noon. The middle of the day." },
      { n: "Hyein had the phone out. She'd got it out without Solar seeing her do it; it was in her hand on the rail between them, face up, the way it used to be, the screen lit, the frozen clock in the corner of it saying what it always said. *12:01.*" },
      { s: 'hyein', f: 'neutral', t: "Watch this. This is a thing I found. Watch the big clock." },
      { n: "They watched. The big black minute hand went over. Twelve. And then over again." },
      { n: "*12:01.*" },
      { n: "For one minute, the clock over the fountain in Paulownia Mall and the clock on Hyein's dead phone said the same thing. The only minute in the whole day they could." },
      { s: 'hyein', f: 'happy', t: "See? Twice a day it's right. Well, once. At midnight I'm not looking. But every day at lunch for one minute my phone's on time. I come and watch it. It's so stupid. It makes me so happy." },
      { n: "The phone rang." },
      // CG: eqx-twelve-oh-one — a crowded summer mall atrium at noon, a big white clock on chains over a fountain, a girl at a balcony rail staring at an old phone ringing in her open hand while the girl beside her reaches toward her wrist.
      { n: "In her hand. On the rail. Loud. A ringtone neither of them had heard in eight months, the default one, the marimba, bright and silly and enormous in the atrium, so loud a grandmother on the bench below looked up. The screen had gone white. Across the top, in plain letters, the word Hyein had seen on that screen ten thousand times in her life and not once since New Year's." },
      { n: "*Mom*" },
      { n: "Hyein didn't move. Solar watched her not move. Her hand open on the rail with the phone ringing in it like something alive, and her face completely empty, the way faces go in the second before they decide what they're going to be." },
      { ifChoice: { 'asks.hyein': 'yes' }, then: [
        { n: "And then she remembered. Solar saw her remember. Daytime. Her voice. *If it's really her, pick up. She's your mom.* Solar had said it. On the stairs. It was the kindest thing Solar could think of, and she'd said it, and Hyein had gone up to bed holding the phone against her chest." },
        { n: "Hyein's thumb went across the screen." },
        { s: 'hyein', f: 'neutral', t: "...Mom?" },
        { n: "Solar heard it. She was close enough. She'd leaned in the way you lean in without deciding to." },
        { n: "Nobody spoke. But the line was open, and it was full. A tap running, a long way off, into a steel sink. A radio, low, a man reading something, in English, in the voice of morning radio anywhere. The clatter of a spoon put down on a counter. A chair scraping on a tiled floor. Somebody in a kitchen in the morning, doing three other things, the way somebody always is." },
        { n: "Two seconds. Exactly two. And then the line went dead, and the screen went dark, and the clock in its corner said *12:01* again, and nothing in the list had changed at all." },
        { s: 'hyein', f: 'surprised', t: "...That's our kitchen." },
        { s: 'hyein', f: 'sad', t: "That's our kitchen, Sol. That's our tap. It does that, it knocks when you turn it off, Dad's been going to fix it for six years. That's the radio. That's her spoon. I'd know that spoon." },
        { n: "She was smiling. That was the worst part. She was smiling with her whole face, wet, shaking, holding the dead phone against her chest in both hands as if she'd just been handed a baby, and Solar stood next to her with the atrium going on below them, the grandmothers, the feet in the fountain, and felt the cold come up through the soles of her shoes from somewhere very far down." },
        { flag: 'eqx-hyein-picked-up' },
        { s: 'hyein', f: 'happy', t: "She's there. She's *there*. She's just in the kitchen. She just didn't hear me." }
      ], else: [
        { ifChoice: { 'asks.hyein': 'no' }, then: [
          { n: "And then she remembered. Solar saw her remember. *Not that phone. Not any voice, not any door. Promise me.* Solar had said it. On the stairs. Hyein had promised, and gone up without saying goodnight, and had been so good since. So good." },
          { n: "She didn't move her thumb. She held the phone flat on her open hand and let it ring. It rang, and rang, the stupid marimba, over and over, and her hand began to shake under it, and then her arm, and then all of her, the whole tall body at the rail shaking like a struck wire, and she didn't close her hand." },
          { n: "Solar put both her hands round Hyein's wrist. Not to take it. Just to be there. Hyein's pulse was going under her fingers like something trying to get out." },
          { n: "It rang twelve times. Solar counted. Then it stopped, and the screen went dark, and the clock in its corner said *12:01* again. No voicemail. Nothing new in the list. As if it had never rung at all." },
          { s: 'hyein', f: 'sad', t: "...I was good. Sol. I didn't. I was so good." },
          { s: 'hyein', f: 'sad', t: "What if it was her. What if it was actually her, just once, in the daytime, and I was *good*." },
          { flag: 'eqx-hyein-let-ring' }
        ], else: [
          { n: "And then she looked at Solar. Not at the phone. At Solar. One look, fast, the way you look at somebody across a room for an answer." },
          { n: "Solar didn't give her one. She'd said on the stairs that it was Hyein's, and it was. She stood at the rail and kept her hands where they were and let Hyein see her face, which was frightened, and wasn't going to say anything, and was going to be right there either way." },
          { n: "Hyein looked back at the phone. It rang. The marimba, bright and stupid. She looked at the word on the screen for a long time, for five rings, six, with her thumb over it." },
          { s: 'hyein', f: 'serious', t: "...No. Not like this." },
          { n: "She turned it face down on the rail. Under her palm. It went on ringing into the metal, muffled, a buzzing like something trapped under a cup, and she held it down." },
          { s: 'hyein', f: 'serious', t: "If she wants me, she can call when it's not a trick. When it's not twelve-oh-one and a stopped clock and a fountain. She can call like a person. She can leave a voicemail and be annoyed in it." },
          { n: "It stopped. She didn't lift her hand for a long time after." },
          { flag: 'eqx-hyein-let-ring' },
          { s: 'hyein', f: 'sad', t: "...That was mine. Right? That was me. Nobody told me." },
          { s: 'solar', f: 'neutral', t: "That was you." }
        ] }
      ] },
      { n: "Below them, the grandmother who'd looked up had gone back to her fanning. Nobody else had noticed anything. The little boy in the bucket hat had caught his coin. He held it up, dripping, to show somebody, and nobody was looking, and he held it up anyway." },

      { place: 'Iwatodai Dorm · Solar’s Room', time: 'Night', bg: 'iwatodaidorm-hallway', music: 'night', soft: true },
      { n: "Hyein knocked on her door at eleven. Not a knock. A scratch, the way Koromaru asked to be let in, and then her voice through the wood, small for Hyein, which meant almost normal for anyone else." },
      { s: 'hyein', f: 'neutral', t: "...Can I sleep on your floor? Just tonight. Hanni's across my door and she'll do the face if I ask her to come in. I don't want the face. I want the floor." },
      { choose: [
        { t: "(Open the door. Throw her a pillow.)", notes: 3, flag: 'eqx-hyein-slept-over', then: [
          { n: "She opened the door and threw a pillow at her, and Hyein caught it against her chest and came in and lay down on the floor beside the bed with the pillow and Solar's spare blanket and her phone, face down, under the pillow, and Solar lay on the edge of the bed with her hand hanging down, and at some point Hyein's hand came up and found it in the dark, and held two of her fingers, the way little kids hold on, and didn't let go." },
          { n: "Hanni, outside in the hall, on her futon across the wrong door now, moved hers across Solar's without a sound. Solar heard her do it. She didn't say anything. Neither did Hanni." }
        ] },
        { t: "(Open the door. Get in the bed with her.)", notes: 3, flag: 'eqx-hyein-slept-over', then: [
          { n: "She opened the door and went back to the bed and held the blanket up, and Hyein looked at her for a second as if she'd been offered something enormous, and then got in, the whole long length of her, and lay on her side facing the wall with her knees up and her back against Solar's, the way they'd slept on each other's beds at the house after parties, and was asleep before Solar had finished deciding whether she was." },
          { n: "Hanni, in the hall, moved her futon across Solar's door without a sound. Solar heard her do it. She didn't say anything. Neither did Hanni." }
        ] },
        { t: "Go and get Hanni. We'll do it properly. All three.", notes: 3, flag: 'eqx-hyein-slept-over', then: [
          { s: 'hyein', f: 'surprised', t: "...A sleepover? Now? In the middle of— okay. Okay, yes. Wait there." },
          { n: "They did it properly. All three. Two futons pushed together on Solar's floor and Solar on the bed and the door open, and Hanni in the middle with an arm over each of them as if she thought one might roll away, and Hyein talking until nearly the red, about everything, about nothing, about the goldfish, and then stopping all at once, asleep, in the middle of a word." }
        ] }
      ] },
      { dark: true },
      { music: 'mystery' },
      { n: "At twelve the red came up through the window. Hyein was asleep. Really asleep; Solar could tell, now, she'd learned the difference from Hanni's grid." },
      { n: "At one minute past, under the pillow, the phone went warm. Solar felt it through the floor, through the edge of the mattress, through her own hand hanging down in Hyein's. Warm like a hand. For a second. And then not." },
      { n: "Nothing rang. Nothing knocked. Hyein slept through the whole hour with her fingers round Solar's, and in the morning, when the light came, she woke and stretched and said *I slept*, in the voice of somebody saying *I won*, and Solar said *I know*, and didn't say anything about the minute past twelve." },
      { n: "She'd tell her. She'd find the moment. There'd be a moment." }
    ] },
    { after: '9/13', title: '6: the door girl', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { bg: 'paulownia-mall' },
      { n: "The mannequin was gone from the window. The window was empty. Just the white board floor and the gray back wall and the little spotlights on their track pointing at nothing, and a sign taped to the glass in neat marker, *NEW DISPLAY COMING*, and on the other side of the glass, inside, on her knees on the white floor with a mouthful of pins and a staple gun, Hyein." },
      { n: "She saw Solar in the glass and waved the staple gun." },
      { s: 'hyein', f: 'happy', t: "*SOL.* Come in! Round the side! I'm allowed! I'm *allowed*, they *let* me!" },
      { n: "The shop's manager, a thin woman in a black smock, had given her the window for September after Hyein had come in every day for three weeks and stood in front of it saying things about the obi in two languages until the woman had said, in English, very tiredly, *you do it, then*. Hyein had taken it as a contract. She'd been in the window since ten." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "That was the story she told, anyway. She told it fast and loud and twice. Solar let her. Since the bridge the whole household had gone loud or gone quiet, there was no middle; Junpei had gone quiet, Mitsuru had gone quiet, Hyein had gone into a shop window and wouldn't come out." },
        { s: 'hyein', f: 'serious', t: "If I don't do something with my hands I'll open something. That's not a joke. I'm telling you as a fact. I need my hands busy till I'm too tired to lift them." }
      ], else: [
        { s: 'hyein', f: 'serious', t: "My first window. My first ever. In a real shop. With a manager. Nobody's going to know whose it is and I don't care. I'll know. I'll walk past it and know." }
      ] },
      { n: "The display was a girl at a door. That was what she was making. A mannequin in a long autumn coat, oatmeal wool, the collar turned up, one hand raised in a fist to knock on a door Hyein had built out of plywood and painted white, with a brass knob she'd bought at the hardware store by the station. The fist was an inch from the wood. Frozen. Not knocking. About to." },
      { s: 'hyein', f: 'neutral', t: "It's called *Are You Home?* Isn't that good? It's fall, it's a coat, she's come to see somebody. Everybody's going to think it's romantic." },
      { choose: [
        { t: "It's not romantic.", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "...No. It's not." },
          { s: 'hyein', f: 'sad', t: "But they'll think it is. That's the trick. That's what clothes are for, Sol. You make a thing that looks like one thing and is another, and if you do it right, nobody can tell." }
        ] },
        { t: "Who's behind the door?", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "Nobody. It's plywood. There's the wall behind it." },
          { s: 'hyein', f: 'serious', t: "...That's the point. She doesn't know that. She's about to knock, and nobody's there, and she's going to stand there with her hand up forever. I'm going to light it so her face is hopeful." }
        ] },
        { t: "It's beautiful. It's horrible. It's both.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "Thank you. That's the review I wanted. Can I put that on a card in the corner? *It's both. — a critic.*" }
        ] }
      ] },
      { n: "She'd made the coat. Of course she had. It had one thing wrong in it, on purpose: the last button on the left cuff was sewn on with red thread instead of oatmeal, a small bright stitch like a cut. You'd only see it if you were the girl wearing it." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "Solar looked at the coat for a long time. It was cream, nearly; it was nearly the color of a cardigan she'd last seen on a picnic blanket on the night of the moon, on a woman who'd said *stay, stay, after all this*, and laughed, and nodded at something Mrs. Oka bent down to say." },
        { n: "Hyein saw her looking. She put the staple gun down." },
        { s: 'hyein', f: 'sad', t: "...I didn't mean it to be. I didn't. I bought the wool in August. I'd already cut it. I'm so sorry. Do you want me to take it off her? I'll take it off her right now." },
        { choose: [
          { t: "Leave it on her.", notes: 3, then: [
            { s: 'hyein', f: 'neutral', t: "...Okay." },
            { n: "Hyein reached out and fixed the collar on the mannequin, very gently, turning it up a little more on one side, the way you'd fix the collar of somebody going out into the cold." }
          ] },
          { t: "(Take her hand. The one with the pins.)", notes: 3, then: [
            { n: "She took Hyein's hand, pins and all, and Hyein let her, and they knelt there in the window with the white floor and the white door and the oatmeal coat, two girls holding hands in a shop window on an ordinary afternoon with the mall going past outside, and a few people looked in, and decided it was part of the display, and walked on." }
          ] }
        ] }
      ] },

      { place: 'Paulownia Mall · Atrium', time: 'After School', bg: 'paulownia-atrium-evening', music: 'tender', soft: true },
      { n: "They sat on the edge of the fountain afterward, on the stone, with their backs to the water and the late light coming in long and amber through the glass roof. The grandmothers had gone home. The clock on its chains said ten past five." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'hyein', f: 'serious', t: "I've been thinking about the bridge. About how it did it. You heard what they were each asked. Everybody heard." },
        { s: 'hyein', f: 'sad', t: "*Hold my hand across.* *Carry this for me.* *Wait for me.* Tiny things. Tiny, nice things. The smallest things you can ask a person. And every one of them just. Did it. Because why wouldn't you? Who says no to *wait for me*?" },
        { s: 'hyein', f: 'serious', t: "That's how it does it, Sol. It doesn't break down doors. It asks you something tiny in a voice you'd do anything for. And you do it. And you're gone, and your shoes are in a row." },
        { s: 'hyein', f: 'sad', t: "And it already asked me. In April. Through the door. In her voice. And I turned the latch a quarter. For nothing. For *a voice*." }
      ], else: [
        { s: 'hyein', f: 'serious', t: "Mrs. Oka asked me something last week. At the gate. When I walked the girls back." },
        { s: 'hyein', f: 'neutral', t: "She's got an old kimono, her mother's, the hem's gone at the back. She asked if I'd come in one afternoon and look at it. *It's a tiny thing, dear. It'd take you an hour. You have such clever hands.*" },
        { s: 'hyein', f: 'sad', t: "And I wanted to. So much. My hands wanted to. A real silk hem, hand-rolled, on somebody's mother's kimono. I could have done it on the step." },
        { s: 'hyein', f: 'serious', t: "I said I'd think about it. I walked back up the river street so fast Kazuha thought I'd seen a dog. Everybody in that house gets asked for something tiny, Sol. Have you noticed? Everybody. Tiny, nice, *an hour*." }
      ] },
      { n: "She got the phone out. The one from home. She didn't look at it. She held it in her lap in both hands and turned it over, and over, the way she'd turned it on the stairs in June." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you why I never pick up? At home. The real why. Not the shower. I've never told anybody. Not even Hanni. Hanni thinks I'm just bad at phones." },
      { s: 'hyein', f: 'neutral', t: "Every time she calls, every single time, she asks when I'm coming home. That's it. That's the whole call. *How are you, are you eating, when are you coming home.* Thanksgiving, Christmas, spring break, a random weekend in October. *When are you coming home, Hyein-ah.*" },
      { s: 'hyein', f: 'sad', t: "And I never know what to say. I left first. Out of everybody in my family, I went the furthest, and I went the fastest, and I never once said why, because I don't know why. I just wanted to be somewhere where I was the one who got to decide." },
      { s: 'hyein', f: 'sad', t: "So I let it go to voicemail. And she leaves *call me back, why do you never pick up*, and I listen to it fifty times, and I love her so much, and I don't call. Because if I call she'll ask. And one day I'm going to say *now*. I'm going to say *I'm coming home now, Mom.* Just to make her happy. Just because she asked." },
      { s: 'hyein', f: 'serious', t: "That's what it knows, Sol. That thing at the door. That's the end of the voicemail. That's the soft part I could never catch. It's her asking. And I'm the door girl. I can't stand a knock with nobody going." },
      // CG: eqx-door-girl — two girls sitting on the stone edge of a mall fountain in amber evening light, one tall girl turning an old phone over and over in her lap, behind them through the glass a lit shop window with a mannequin in a cream coat about to knock on a white door.
      { ifChoice: { 'asks.hyein': 'yes' }, then: [
        { ifFlag: 'eqx-hyein-picked-up', then: [
          { s: 'hyein', f: 'sad', t: "I heard the kitchen. You were there. I heard our tap. And I've been waiting for it to ring again every day at lunch, at the clock, and it hasn't, and I keep thinking, next time she'll hear me. Next time I'll say it louder." }
        ], else: [
          { s: 'hyein', f: 'sad', t: "You said I could pick up. If it's her. I keep it charged, I keep it near me, all the time, so I'll be fast enough. I've been waiting so hard I can feel it in my teeth." }
        ] }
      ], else: [
        { ifChoice: { 'asks.hyein': 'no' }, then: [
          { s: 'hyein', f: 'sad', t: "I promised you. Not that phone. And I'll keep it. I'm so good at keeping it. I'm just telling you why it's so hard. Why it's so, so hard." }
        ], else: [
          { s: 'hyein', f: 'neutral', t: "It's still face down. The two seconds. Still unplayed. I keep it face down because I know exactly what's on it now. It's her asking. And I'm not ready to hear what I'd say back." }
        ] }
      ] },
      { choose: [
        { t: "Then when it knocks, wake me first. We'll stand there and not open it. Together.", notes: 3, flag: 'eqx-hyein-two-person', then: [
          { s: 'hyein', f: 'surprised', t: "...The two-person plan. From April. You remember the two-person plan." },
          { s: 'solar', f: 'neutral', t: "I remember all your plans." },
          { s: 'hyein', f: 'sad', t: "...Okay. Okay. The two-person plan. I'll wake you. I'll be so annoying about it. You'll have to be right there. You'll have to be *in the building*, Sol." },
          { n: "She said that last part lightly, and then heard it, and didn't take it back." }
        ] },
        { t: "You don't have to know what you'd say. You just have to not say it to that.", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "...To *that*. Not to her. To that." },
          { s: 'hyein', f: 'serious', t: "Yeah. Yeah. Say it again, slower. I'm going to write it on my hand." },
          { n: "She did. With the tailor's chalk from her pocket, on the inside of her wrist, in small white letters, *NOT TO THAT*, and looked at it for a while, and pulled her sleeve down over it." }
        ] },
        { t: "(Put your arm round her. Don't say anything.)", notes: 3, then: [
          { n: "She put her arm round her on the edge of the fountain, and Hyein leaned into it, all the long length of her folding down until her head was on Solar's shoulder, and the phone went still in her lap, and they sat like that until the clock on its chains said half past and the man from the crêpe stand pulled his shutter down with a long metal rattle, and neither of them said anything at all, which for Hyein was a kind of shouting." }
        ] }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "On the way out, she stopped at a shop by the escalator and bought a black ribbon, and didn't say who it was for, and tied it round the wrist with the chalk on it." }
      ] },

      { place: 'Iwatodai Dorm · Front Hall', time: 'Late Night', bg: 'iwatodaidorm-front-night', music: 'night', soft: true },
      { n: "That night Hyein did the latch. Twice. Then she stood with her forehead nearly on the door, the way she always did, listening; and then, for the first time Solar had ever seen, she turned round and put her back against it instead. Flat. Like a girl holding a door shut in a film." },
      { n: "Aigis came out of the kitchen and did the third check, and looked at Hyein leaning there, and at the white ribbon in her own hair in the hall mirror, and stood beside her at the door, shoulder to shoulder, and leaned on it too." },
      { s: 'aigis', f: 'neutral', t: "Is this a new procedure?" },
      { s: 'hyein', f: 'neutral', t: "Yeah. It's called *not tonight*." },
      { s: 'aigis', f: 'happy', t: "I would like to be on it." },
      { dark: true },
      { music: 'mystery' },
      { n: "At twelve the red came, and the hum, and at twelve-oh-one Solar's phone buzzed on the stairs where she'd been sitting watching them. Chenle, from the command room." },
      { phone: [
        { from: 'chenle', t: "hey. third hill. theres a corridor off the lockers we never saw before" },
        { from: 'chenle', t: "its flooded. like an inch. still water. black" },
        { from: 'chenle', t: "and at the end theres a door lying flat in the water. like a front door. white. latch up" },
        { from: 'chenle', t: "fuuka says its someones. she says it sounds like hyein" },
        { from: 'chenle', t: "she says it sounds like someone humming at it" }
      ], contact: 'chenle' },
      { flag: 'eqx-floor-hyein' },
      { n: "Solar looked down the stairs at the two of them, Hyein and Aigis, standing with their backs flat against the front door in the red, shoulder to shoulder, the white ribbon and the chalk on a wrist. Neither of them had heard the phone. Neither of them moved." },
      { n: "She put it in her pocket. She'd go down and look at it. She'd look at it first, before anybody told Hyein there was a door with her name on it lying in the water at the bottom of the world." },
      { n: "She sat on the stairs and watched them hold the door until the hour ended, and then for a long while after, and didn't go to bed, because she'd said she'd be in the building, and she'd meant all of it." }
    ] }
  ]
});
