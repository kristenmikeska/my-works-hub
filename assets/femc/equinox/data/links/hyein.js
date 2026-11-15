/* Persona 3: Equinox · Hyein Lee (Lovers). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: rank 1 (opens 4/13, a Tuesday, one of her home days). Ranks 2-10 to come.
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
    ] }
  ]
});
