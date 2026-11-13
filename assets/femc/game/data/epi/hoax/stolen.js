/* The HOAX epilogue, the Jihoon thread ("stolen moments"; Nov 11 2026, Kat's rulings, which override HOAX ruling 5 where they
   conflict). Data only, no engine change.

   ── The rulings ────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1. If the year's romance was Jihoon (core.js links.jihoon.route === 'romance'; read as { ifYear: { romance: 'jihoon' } } in a
      scene, or the flag 'y-romance-jihoon' that epilogue.js stateFor copies onto the epilogue for every year romance, which is
      what an event's single `flag` gate can read), Jihoon is a romance in HOAX on EVERY route, a little scandalous, the way
      they are in the novel: stolen moments behind Jungwon's back, near-misses, a kiss she shouldn't have let happen, guilt,
      Jungwon almost noticing, Jihoon pushing exactly as far as he knows he can. On the Jungwon and council routes it is present
      and dangerous and never breaks those routes' endings or Jungwon's arc.
   2. On Jihoon's own route it becomes real by the end: the kiss at Christmas, the honest conversation with Jungwon (1/4), out in
      the open at school (1/9), said out loud at the arcade (1/10), her hand in his at the gym (1/12). Her rebellious side comes
      back out along it (Kat, same day): smoking with him (the 1/4 smell, 1/10 behind the gym), his jacket over her uniform, the
      skirt rolled, skipping a meeting, mouthing off; it feeds Mom's suspicion and the heat. These route beats play for
      every Jihoon-route player (the route is his romance now), not only the year's Jihoon romancers.
   3. Kat's follow-up (same day): the triangle ALWAYS stays. Solar never breaks up with Jungwon on any route. On Jihoon's route
      she comes to favor Jihoon, says so to Jungwon honestly, and Jungwon stays in the picture, hurt, tender and unfinished
      ("I'm not good at losing. I've never done it."). The gym at midnight is structurally unchanged: Jungwon still holds on.
   Jihoon keeps his voice (normal capitalization out loud; texts lowercase with Random Caps for drama) and his visible denial
   of the Personaverse ("What retreat."; the porch's "I remember" is still the player's to reach). Nothing past kissing,
   sleeping on a couch and waking up next to each other; scenes cut away before anything more.

   ── Load order ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
   Loads after stakes.js and before every story-*.js (epilogue.js WORLDS.hoax.files: 'stakes', 'stolen', 'story-w1'; the
   checkers load alphabetically, and "stakes" < "stolen" < "story-"), because the story files spread the shared blocks below
   (R.stolen.*) into existing scenes. Every block gates itself, so a spread is a no-op for anyone it isn't for.

   ── New events (R.events) ──────────────────────────────────────────────────────────────────────────────────────────────────
     epi-h-jh-stolen  12/26 late  flag y-romance-jihoon  consumes  every route: jihoon, his kitchen the night after the
                      Christmas kiss ("last night didnt happen"), the couch, waking up at five; jungwon / council, the tunnel
                      lights' last night, the lot by the skating pond, the kiss; then Jungwon's 7:02 "did you sleep?"
     epi-h-jh-closet  12/30 late  flag y-romance-jihoon  consumes  every route: snowballs, her room with her parents home,
                      Jungwon's 11:41 call while Jihoon is on her bed, Mom at the door, Jihoon in the closet
     epi-h-jh-honest  1/4 late    flag epi-route-jihoon  consumes  Jihoon's route: Jungwon and Maeumi at the end of her street
                      in the snow-day snow; he has counted the car; she tells him (all of it / the part she knows); he does not
                      end it
     epi-h-jh-skip    1/10 after  flag epi-route-jihoon  consumes  Jihoon's route (Kat: "she smokes more, etc."): she skips
                      the council's second prom meeting after the last paper, his jacket over her uniform, a cigarette on his hood behind the gym;
                      the first-years' phone (epi-h-heat-jh-smoke); Mom smells it on her coat (epi-h-sus-jh-smoke)
                      (Dates picked around story-jungwon.js, written alongside: its 1/1 late, 1/7 late, 1/8 after, 1/11 evening.)
     epi-h-jh-trip    12/28 evening  flag epi-route-jihoon  consumes  Jihoon's route, The Trip (Nov 11 2026, Kat: the old friends
                      "have a little too much fun"; Solar falls back into old habits on this route): the night after the séance,
                      the old table on Asahi's blankets in Hanlim Park; Hyunsuk's bag; Jihoon waits on her. (Take the bag.) →
                      { minigame: 'trip', flags: 'epi-h-mg-trip', opts: { bg: 'epi-h-park-night' } }, result lines by -good / -won
                      / else (curdled: Jaehyuk counts her breathing), the park gate (heat), Mom at 1 a.m. (sus), the ceiling.
                      No. I'll sit with Nana. (confirm: true) → no game; Jihoon gives his back too; the bench, home at 11:00.
                      Evening only (12/28's late screen still lists Sunoo's and Junkyu's late hangouts); a free evening on this
                      route, nothing else dated that slot.
     epi-h-jh-trip-after 12/29 early  flag epi-h-trip  consumes  the morning after: Jungwon's 7:02 (Sunoo saw a story), the
                      club chat's 3:58 bench video, the glow and the guilt, the party tonight (the jacket); Mom: juk and "Not
                      again" (epi-h-sus-trip) / two glasses of water / the 11:00!! sticky note (she said no).
   ── Spliced into existing scenes (R.stolen.*; each file's header names its splice) ────────────────────────────────────────
     karaoke   story-w1 epi-h-karaoke (12/23 evening), at the end      ifYear romance jihoon: the curb, the snow in her hair, the
                                                                        porch light; Mom's "eleven minutes" text (the near-miss)
     xmasKiss  story-w1 epi-h-xmas-night (12/25 late), jihoon branch,   the route: the kiss on her rug before he goes home
               after "Somebody has to sleep in that house."
     coats     story-w2 epi-h-party (12/29), each route branch after    ifYear romance jihoon: the coat room upstairs, the door,
               the kitchen beat (R.stolenCoats(route))                  the girl with the phone; the crew asks where she went
     prom      story-w3 epi-h-prom (1/9 after), at the end              the route: Jihoon at the council-room door; out in the
                                                                        open; the council, the old chat, Mom
     witness   story-end epi-h-witness (1/10 evening), at the end       the route: "I like you", said back
     gym       story-end epi-h-gym (1/12 late), jihoon branch           the route: her hand in Jihoon's when Jungwon comes in
   Also inline (no spread; the file loads before this one in the checker): people-last.js epi-h-jihoon-late-2 (1/11, one line).

   ── Flags ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   Set here: epi-h-jh-curb-stayed (karaoke), epi-h-jh-kissed (xmasKiss, stolen), epi-h-jh-xmas-kiss / -xmas-stopped (xmasKiss),
     epi-h-jh-it-happened / -let-deny (stolen, jihoon), epi-h-jh-again / -left-car (stolen, jungwon / council),
     epi-h-jh-told-night (stolen, the truth to Jungwon), epi-h-jh-closet (closet), epi-h-jh-answered (closet),
     epi-h-jh-coats (coats), epi-h-jh-told-jw / -half-told (honest), epi-h-jh-open (prom), epi-h-jh-real (witness).
   The Trip (epi-h-jh-trip): epi-h-trip (the event played, either way; gates the morning after), epi-h-trip-took (she took them),
     epi-h-mg-trip-played / -won / -lost / -grade-<S|A|B|C> / -good (scene.js minigame), epi-h-heat-trip, epi-h-sus-trip.
     Nothing else reads them yet.
   Stakes (stakes.js lists; header there documents them):
     heat  epi-h-heat-jh-coats (seen leaving the coat room), epi-h-heat-jh-hall (his hand down the main hall, 1/9),
           epi-h-heat-trip (12/28, waves at the park gate)
     sus   epi-h-sus-trip (12/28, "My eyes always go like this in the cold.")
     sus   epi-h-sus-jh-curb (lies to Mom about the eleven minutes), epi-h-sus-jh-car (lies to Mom about the car on the corner)
     lies  epi-h-lie-jw-night ("slept like a rock"), epi-h-lie-jw-nana ("It's Nana."), epi-h-lie-crew-coats ("Bathroom.")
           (new score: each lie raises the trust the verdict needs; stakes.js R.stakesVerdict)
   Read: epi-route-jihoon (events, ifEpiRoute), epi-h-party-left / -jh-flushed (party splices), epi-h-jihoon-remembers,
     epi-h-jh-kissed, epi-h-jh-told-jw / -half-told (prom), epi-h-jh-real (people-last.js).
   ── Inventions for Kat to confirm ──────────────────────────────────────────────────────────────────────────────────────────
     The Trip: Hyunsuk's cousin knows somebody (the bag); Asahi's two blankets; the park's lamps hum; Jaehyuk measured the tree
     in ninth grade; two girls from school at the park gate; Mom's juk the morning after; the 11:00!! sticky note.
     The tunnel lights come down on the 27th; Jihoon's fridge still has his mother's grocery list under a magnet; Mrs. Oh's son
     (a neighbour's car, Solar's lie); Jungwon has counted the car on the corner (four nights); the girl at the coat-room door
     is a second-year from the swim team; Mom's "He has always just taken you."; the old chat's reactions on 1/9.
   CG prompts: FEMC-ART-TODO 54 (the pond lot, the closet, the hallway); not wired until the art exists. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const JR = { romance: 'jihoon' };
  const ROOM = 'Hanlim · Home · Her Room';

  // Jungwon's 7:02 text the morning after (both branches of epi-h-jh-stolen). The lie costs trust (R.stakes.lies).
  const morningAfter = [
    { place: ROOM, time: 'Morning', soft: true },
    { n: "At 7:02 her phone went on the pillow. It always went at 7:02. He'd told her once, in November, that seven was too early to text a person and seven-oh-five looked like he'd been waiting, so he'd split the difference, and she'd laughed at him for a full minute, and he'd let her." },
    { ifEpiRoute: 'jungwon', then: [
      { phone: [
        { from: 'jungwon', t: "good morning." },
        { from: 'jungwon', t: "i dreamt about the reservoir. your father was in it. you weren't. i was annoyed about that in the dream." },
        { from: 'jungwon', t: "did you sleep?" }
      ], contact: 'Won' }
    ], else: [
      { phone: [
        { from: 'jungwon', t: "good morning." },
        { from: 'jungwon', t: "heeseung has sent the minutes of christmas. there are four pages. i'm in three of them." },
        { from: 'jungwon', t: "did you sleep?" }
      ], contact: 'Won' }
    ] },
    { n: "Three words. A question mark, which he used the way other people used exclamation points, sparingly and only when he meant it. She lay there and looked at it until the screen went dark, and then she touched it so it would light again, and looked at it some more." },
    { choose: [
      { t: "slept like a rock. nana stole the blanket", flag: 'epi-h-lie-jw-night', then: [
        { phone: [
          { from: 'solar', t: "slept like a rock. nana stole the blanket" },
          { from: 'jungwon', t: "good. he's earned it." },
          { from: 'jungwon', t: "eat breakfast. i'm going to ask." }
        ], contact: 'Won' },
        { n: "It was so easy. That was what she kept coming back to, lying there with the phone face down on her chest. It wasn't the cover, the temple, the bell at four, the thing she'd been lying about for a week with the whole council and her own face. It was a small, warm, ordinary lie, about a blanket, to a boy who believed her because she'd never once given him a reason not to, and it went out of her as easily as breathing, and he said *good*." },
        { n: "She was going to have to remember it now. That was the thing about lies. You had to keep them somewhere." }
      ] },
      { t: "(Tell him the part you can.)", flag: 'epi-h-jh-told-night', then: [
        { ifEpiRoute: 'jihoon', then: [
          { phone: [
            { from: 'solar', t: "not really. i was at jihoons. i fell asleep on his couch" },
            { from: 'jungwon', t: "okay." },
            { from: 'jungwon', t: "thank you for telling me." }
          ], contact: 'Won' },
          { n: "*Okay.* With the period. And then nothing for four minutes, and she watched every one of them go by on the clock, and then, because he was Yang Jungwon and he finished things:" },
          { phone: [
            { from: 'jungwon', t: "is he alright?" }
          ], contact: 'Won' },
          { n: "She didn't know how to answer that. She typed *yes*. She deleted it. She typed *i think so* and sent that, because it was true, and because he'd asked about Jihoon before he'd asked about anything else, and she didn't know what to do with that either." }
        ], else: [
          { phone: [
            { from: 'solar', t: "not really. jihoon drove me round the tunnel lights. last night before they take them down" },
            { from: 'jungwon', t: "okay." },
            { from: 'jungwon', t: "did the angel get an eight?" },
            { from: 'solar', t: "she always gets an eight" },
            { from: 'jungwon', t: "then it was fair." }
          ], contact: 'Won' },
          { n: "It was true. Every word of it was true. It was so true she could have passed it through a machine and the machine would have lit up green, and it wasn't the whole thing, and he'd said *then it was fair*, the way he'd said it on Christmas Eve, a boy marking a box he had no way of knowing was the wrong one." }
        ] }
      ] }
    ] }
  ];

  (R.events ||= []).push(
    // 12/26, Late Night: the kiss she shouldn't have let happen (non-Jihoon routes), or the night after it (Jihoon's route).
    { id: 'epi-h-jh-stolen', date: '12/26', slot: 'late', consumes: true, flag: 'y-romance-jihoon', title: 'it didn’t happen', place: ROOM, time: 'Late Night', scene: [
      { music: 'epi-h-jihoon' },
      { ifEpiRoute: 'jihoon', then: [
        { n: "He didn't come on the twenty-sixth. No snowballs at half past ten, no *Come Outside*, no car idling crooked at the end of the drive. Nothing on her phone all day but one text at four in the afternoon, which she had read so many times that the words had stopped being words and become shapes." },
        { phone: [
          { from: 'jihoon', t: "last night didnt happen" },
          { from: 'jihoon', t: "im informing u. not asking" },
          { from: 'jihoon', t: "dont reply to this. it also didnt happen" }
        ], contact: 'jihoney' },
        { n: "She didn't reply. At midnight she put her coat on over her pyjamas, the left pocket heavy, and went down the stairs skipping the fourth one, the way he'd taught her when they were eleven, and let herself out the back, and walked down the street to his house in the snow." },
        { place: "Hanlim · Jihoon's House", time: 'Late Night', soft: true },
        { n: "His house was the quiet one. It always had been, the last five years: a whole house of rooms nobody went into, one lamp on in the front window like a nightlight left on for a kid who'd grown up and stopped needing it. The pots on the porch were frozen solid, six of them, his mother's, and the porch light was on, and before she'd got to the second step the door opened." },
        { s: 'jihoon', f: 'neutral', t: "You're trespassing." },
        { s: 'solar', f: 'serious', t: "You texted me that it didn't happen." },
        { s: 'jihoon', f: 'neutral', t: "It didn't. I'm glad we agree. Goodnight." },
        { n: "He didn't shut the door. He stood in it in a hoodie with the sleeves pushed up and his hair wet, like he'd showered to get something off and it hadn't worked, and he looked at her the way he'd looked at the bag in his hand at the party, like a thing he wanted and had already decided he wasn't going to be allowed." },
        { s: 'solar', f: 'serious', t: "Park Jihoon." },
        { n: "The full name. It did what it always did. He stepped back and let her in." },
        { n: "His kitchen was exactly what it had been since they were in middle school, which was the problem with it: the clock that ran four minutes fast, the good knives nobody used, and on the fridge, under a magnet shaped like a pear, a grocery list in his mother's handwriting, *eggs, the good soy sauce, something for Jihoon's lunches*, that he had never once taken down. She'd stopped seeing it years ago. She saw it now. He was standing in front of it, so he wouldn't have to." },
        { s: 'jihoon', f: 'sad', t: "If it happened, then I have to know what it was. And if I know what it was, I have to know what it wasn't. And I'm very bad at the second one, Sol. Historically. Ask the whole of tenth grade." },
        { s: 'solar', f: 'sad', t: "You kissed me on my floor." },
        { s: 'jihoon', f: 'neutral', t: "Allegedly." },
        { choose: [
          { t: "It happened.", flag: 'epi-h-jh-it-happened', then: [
            { s: 'solar', f: 'serious', t: "It happened, Jihoon. I was there. I was the one on the floor." },
            { n: "He looked at her for a long time. Then he laughed, the real one, the one that got them thrown out of libraries, except it came out low and wrecked and he put his hand over his face in the middle of it." },
            { s: 'jihoon', f: 'happy', t: "Okay. Okay. It happened. Don't tell anyone, I've got a reputation. People think I'm a monk now. I went to a temple." },
            { n: "And then he was across the kitchen, and she was against the counter with the edge of it in the small of her back and his hands on either side of her, not touching her, just there, the way you'd put your hands on either side of something you were scared would fall, and he waited. He actually waited. Park Jihoon, who had never once in his life waited for anything." },
            { n: "She was the one who closed it. She pulled him down by the front of his hoodie and kissed him, and this time it was slow, it was nothing like the floor, it was the kind of kiss you have when you've already had the first one and nobody died, his wet hair cold against her forehead, his mouth warm, the fridge humming behind him and his mother's grocery list a foot away and she didn't think about it. She didn't think about anything. That was the point. That was also the problem." },
            { n: "They ended up on the couch somehow, the big one with the bad lamp, her coat on the floor and her pyjama sleeves pushed up and his hand flat on her back under the hem of her sweater, cold, then not cold, and his mouth at the side of her neck, saying her name against it like it was a word in a language only he spoke. And somewhere in it he stopped, and put his forehead against her shoulder, and breathed, and she held on to the back of his neck, and that was all, for a long time, and it was more than enough." }
          ] },
          { t: "(Let him have it. Tonight.)", flag: 'epi-h-jh-let-deny', then: [
            { s: 'solar', f: 'sad', t: "...Okay. It didn't happen." },
            { s: 'jihoon', f: 'neutral', t: "Good. Thank you. Very mature." },
            { n: "He made instant cocoa because that was what he did with his hands when he didn't know what to do with his hands, and they sat on the big couch under the bad lamp with a terrible film on, the kind with a lot of helicopters, on opposite ends, her socks against his leg and his hand round her ankle like that was a normal place to keep a hand." },
            { n: "Somewhere around the third helicopter she fell asleep on his shoulder. She didn't remember moving. She remembered him going very still, and then, carefully, the way you'd move around a bird that had landed on you, reaching for the remote and turning the sound all the way down so it wouldn't wake her." }
          ] }
        ] },
        { flag: 'epi-h-jh-kissed' },
        { n: "She woke up at ten past five with his jacket over her, the leather one that wasn't warm enough for anything, and the film long over, and the screen blue, and his arm under her neck gone completely dead, she could tell by his face. He was awake. He was looking at the ceiling. He looked like he'd been looking at it a while." },
        { s: 'jihoon', f: 'neutral', t: "Your mom gets up at six." },
        { s: 'solar', f: 'neutral', t: "I know when my mom gets up." },
        { s: 'jihoon', f: 'happy', t: "Just making sure. I can't feel my arm. I'm going to lose it. You've cost me an arm, Sol. I'll have to do pilates with one arm. People will talk." },
        { n: "She walked home in the blue dark with his jacket still on, because he'd said *keep it, it's ugly on me anyway*, which was a lie, and let herself in the back door at half past five. Nana was sitting at the top of the stairs. He didn't bark. He looked at her coming up the stairs in her pyjamas and a boy's leather jacket, at half past five in the morning, with the specific contempt of a dog who had seen everything in this house and been asked to keep quiet about all of it." }
      ], else: [
        // the Jungwon and council routes: she's Jungwon's, and she goes anyway
        { phone: [
          { from: 'jihoon', t: "the tunnel lights are still on" },
          { from: 'jihoon', t: "they take them down on the 27th. Final Night. its a Tragedy" },
          { from: 'jihoon', t: "im outside. u dont have to come. im just telling u where my car is. for Legal reasons" }
        ], contact: 'jihoney' },
        { n: "She shouldn't. She knew she shouldn't the way she knew the stairs, the way she knew which one creaked: in her feet, without thinking. She had a boyfriend a block away who did the maths on how long a dog walk could last before it stopped being a dog. She had a scarf on her chair that wasn't hers yet, not really, that she kept touching to check." },
        { n: "She put her coat on over her pyjamas anyway. The left pocket was heavy. She went out the back." },
        { place: 'Hanlim · Christmas Lights', time: 'Late Night', soft: true },
        { n: "He drove the loop slow, the way he had every year since they were small, the reindeer with the limp and the snowman bowing at nobody and the angel on the bank building with her wingspan, and he didn't rate any of them. That was how she knew. He drove through all of it without saying a single number." },
        { n: "The tunnel at the end was still on. The long one, white bulbs on hoops, bright, dark, bright over the windshield, and he slowed down until they were barely moving, and in the middle of it, where the dark bits between the bulbs had always scared her, he stopped the car." },
        { s: 'jihoon', f: 'neutral', t: "You never come anymore." },
        { s: 'solar', f: 'sad', t: "I'm here." },
        { s: 'jihoon', f: 'neutral', t: "You're here because I said Final Night in capitals. That's manipulation. I learned it from a president." },
        { n: "He took the car out the far end of the tunnel and into the empty lot by the skating pond and put it in park and left the engine running, and the heater roared, and the pond was a flat grey plate under the snow, and for a while he didn't say anything at all, which for Park Jihoon was its own sentence." },
        { s: 'jihoon', f: 'serious', t: "You picked him. That's fine. I'm not asking you to pick me. I'm not stupid. I've seen him look at you, it's disgusting, it's like watching a calculator fall in love." },
        { s: 'jihoon', f: 'sad', t: "I'm asking for the lights. One night of the lights. That's not stealing, Sol. That's— sharing. It's Christmas. It's basically charity." },
        { n: "The tunnel was behind them in the mirror, still blinking, bright, dark. His face was half in it. She looked at him and thought, very clearly, the way you think *I'm going to fall* half a second before you do, that she was going to remember this as his fault, later. That she was going to tell herself he'd moved first." },
        { n: "He didn't. She did. She leaned across the gearstick and put her mouth on his, and he made a sound like she'd hit him, and then his hand was at her jaw, cold from the wheel, and he was kissing her back like he'd been holding his breath since the ninth grade and had only just been told he was allowed to let it out." },
        { n: "It tasted like the cocoa he always drank and the gum he chewed to cover the other thing. His thumb found the stud on the side of her nose, the one that matched his, and stayed there. The heater roared. The pond did nothing. In her pocket, against her hip, the can was cold and shut, and her phone was next to it, and neither of them made a sound." },
        { n: "He pulled back first. Barely. His forehead stayed against hers." },
        { s: 'jihoon', f: 'neutral', t: "...Okay. That was a mistake." },
        { s: 'solar', f: 'sad', t: "Yeah." },
        { s: 'jihoon', f: 'sad', t: "Do it again?" },
        { choose: [
          { t: "(Kiss him again.)", flag: 'epi-h-jh-again', then: [
            { n: "She did. It was worse. It was better. It was slower and it knew what it was doing, his hand sliding from her jaw to the back of her neck, under her hair, under the collar of her coat, her fingers in the front of his jacket pulling him over the gearstick until it was digging into both of them and neither of them cared." },
            { ifEpiRoute: 'jungwon', then: [
              { n: "His fingers caught in the scarf. The green one. She'd put it on to go out without thinking, because it was the warmest thing she owned now, and his hand found the wool and stopped, and she felt him know whose it was. He didn't let go of it. He just held it, the way you hold a railing, and kept kissing her, and that was the worst thing anybody had ever done to her and she'd let him." }
            ], else: [
              { n: "Her phone buzzed against the can. Once. She knew whose minute it wasn't, it was past one, he'd be asleep in a neat room with his phone on the kitchen counter where his mother made him leave it, and it buzzed anyway, a group chat, somebody's dog in antlers, and she flinched like it had been him." }
            ] },
            { n: "When it stopped they sat there with the windows fogged white, breathing like they'd run somewhere, and he wrote *8* in the fog on his window with one finger, and then wiped it out with the side of his fist before she could say anything." }
          ] },
          { t: "(Get out of the car.)", flag: 'epi-h-jh-left-car', then: [
            { n: "She opened the door. The cold came in like a slap, which was what she'd wanted. She stood in the snow in the empty lot in her pyjamas and her coat with her hand on the roof of his car, breathing, and he didn't follow her, and he didn't drive away." },
            { n: "The window came down." },
            { s: 'jihoon', f: 'neutral', t: "Sol. Get in. You'll die. I'll be charged. It'll be a whole thing on the forum." },
            { s: 'solar', f: 'serious', t: "It didn't happen." },
            { n: "He looked up at her through the window for a long time. Then he did the thing he did on the porch, the forum voice, the mock-royal one, the one that made everything sound like a joke so nobody would have to hold it." },
            { s: 'jihoon', f: 'neutral', t: "What didn't. I was home. I'm always home. Ask Nana." },
            { n: "She got back in. He drove her home without the radio, the long way, through the tunnel one more time, and neither of them looked at the other, and the lights went over them both, bright, dark, bright." }
          ] }
        ] },
        { flag: 'epi-h-jh-kissed' },
        { n: "She got in the back door at twenty to two. She lay in bed with her coat still on and the can still in the pocket and her mouth still feeling like it was somebody else's, and the scarf on the chair, and she didn't sleep. She tried. She lay there trying until the window went grey." }
      ] },
      { bond: { jihoon: 1 } },
      ...morningAfter
    ] },

    // 12/30, Late Night: the almost-caught. Her parents home, Jungwon's minute, the closet.
    { id: 'epi-h-jh-closet', date: '12/30', slot: 'late', consumes: true, flag: 'y-romance-jihoon', title: 'the closet', place: ROOM, time: 'Late Night', scene: [
      { music: 'epi-h-jihoon' },
      { n: "Quarter past eleven, and something soft hit her window." },
      { ifFlag: 'epi-h-jh-it-happened', then: [
        { n: "She knew the sound now. It had stopped being the old signal from middle school and become a new one, in the space of a week, and that was its own kind of problem." }
      ], else: [
        { n: "A thud and a hiss and a white starburst on the glass, sliding. The old signal. Snowballs at her window, the way they'd done it before either of them had a phone, before he had a licence, before a lot of things she didn't let herself list." }
      ] },
      { n: "Her parents were home. That was the thing. Her father was downstairs with the television on, a baseball replay from a season that had ended in October, and her mother was in the bath with the door shut and the radio going, and the house was full of the warm, loud, open-door noise that Jungwon had said he liked, the noise of people who might walk into any room at any time." },
      { n: "She let him in the back door anyway. In her socks, past the kitchen, past the living room doorway with her father's back to it and the replay going, so close she could see the grey in his hair, and up the stairs skipping the fourth, and Jihoon behind her with his boots in his hand and snow melting off his beanie onto her mother's floor, both of them barely breathing, both of them about to laugh, both of them knowing that if either of them laughed it was over." },
      { n: "She shut her door. She didn't lock it. Her door didn't lock. It had never needed to." },
      { s: 'jihoon', f: 'happy', t: "Your dad's still watching the Lotte game. They lost that game. He knows they lost that game." },
      { s: 'solar', f: 'happy', t: "He thinks if he watches it enough times they'll win." },
      { s: 'jihoon', f: 'neutral', t: "That's the most beautiful thing I've ever heard. I respect him so much. I'm going to marry your dad." },
      { n: "Then he wasn't joking anymore, and neither was she. It happened the way it had started happening, like falling down the last stair in the dark, no decision anywhere in it, her back on her own bed and the lamp off and the streetlight lying in a stripe across them both, his weight on his forearms so none of it was on her, his cold hands warming up against her sides under her sweater, the rings he wore cold for a second longer than his fingers." },
      { n: "She had her hands in his hair. The beanie was on the floor. He kissed her like he was memorizing something, her jaw, the corner of her mouth, the place under her ear that made her breath go wrong, and every time it went wrong he stopped and looked at her in the stripe of light like he'd found something and wanted to check it was real. Nana sighed at the foot of the bed, loudly, a long-suffering sigh, the sigh of a dog who had been asked to keep a great many secrets this week and was beginning to resent it." },
      { n: "11:41." },
      { n: "Her phone lit up the ceiling. It was face up on the nightstand, and it lit the whole ceiling white, and the name sat in the middle of it like it had been written there." },
      { n: "*Won ♡*" },
      { n: "Jihoon went completely still. Not the way he went still when he was angry. The other way. The way you go still when a car pulls into the drive." },
      { s: 'jihoon', f: 'neutral', t: "...He has a minute. He has a *minute*, Sol." },
      { choose: [
        { t: "(Answer it.)", flag: 'epi-h-jh-answered', then: [
          { n: "She answered it. She didn't know why. She'd answer it later, in her head, a hundred times, and still not know. Maybe because he'd never once called her and not had her pick up. Maybe because not answering felt like the bigger lie." },
          { s: 'jungwon', f: 'neutral', t: "Hi. I'm in the bathtub. It's forty-one." },
          { s: 'solar', f: 'neutral', t: "I know. Hi." },
          { s: 'jungwon', f: 'neutral', t: "You sound out of breath." },
          { s: 'solar', f: 'flustered', t: "Stairs." },
          { n: "A pause. With tile in it. Jihoon, above her, put his face into her shoulder so she couldn't see what it was doing, and she felt him shaking, and didn't know if it was laughing." },
          { s: 'jungwon', f: 'neutral', t: "You don't have stairs in your room." },
          { s: 'solar', f: 'flustered', t: "I came *up* the stairs. Before. To my room. With the stairs." },
          { s: 'jungwon', f: 'neutral', t: "Okay." },
          { n: "Then Nana, who had had enough, got up off the end of the bed and walked straight up the middle of it, across both of them, all sixty pounds, and planted one enormous paw in the centre of Jihoon's back, and Jihoon said a word. Not loud. Into her shoulder. But the room was very quiet, and the bathtub carried everything." },
          { s: 'jungwon', f: 'serious', t: "...Is someone there?" },
          { choose: [
            { t: "It's Nana.", flag: 'epi-h-lie-jw-nana', then: [
              { s: 'solar', f: 'neutral', t: "It's Nana. He stood on me." },
              { n: "The silence went on a long time. Long enough for her to hear him decide, the way she'd heard him decide on Christmas Eve which answer to leave on the card." },
              { s: 'jungwon', f: 'neutral', t: "Nana doesn't swear." },
              { s: 'solar', f: 'flustered', t: "He's been through a lot this year." },
              { n: "And he laughed. That was the worst part. One of the rare ones, short, surprised out of him, and she lay there under two bodies and a dog listening to Yang Jungwon laugh at her lie because it was funny, because she was funny, because he'd decided a long time ago to believe the girl who said it." },
              { s: 'jungwon', f: 'happy', t: "Tell him goodnight from me. And Maeumi. Maeumi is very disappointed in his language." }
            ] },
            { t: "Mom's coming up. I have to go.", then: [
              { s: 'solar', f: 'neutral', t: "My mom's coming up. I have to go. Sorry. Sorry, Won." },
              { s: 'jungwon', f: 'neutral', t: "Okay. Go. Goodnight, Sol." },
              { n: "It was true, as it turned out. That was the only reason it worked. Her mother's bath had been draining for a full minute and Solar hadn't heard it over her own heart, and now there were feet on the landing, and the bathroom door, and the two quick knocks she'd known her whole life." }
            ] }
          ] }
        ] },
        { t: "(Let it ring.)", then: [
          { n: "She let it ring. She lay there under him with the phone ringing on the nightstand and lighting the ceiling, and Jihoon didn't move and she didn't move, and they both watched the name, and it rang out." },
          { n: "Then it buzzed. Once." },
          { phone: [
            { from: 'jungwon', t: "i'm here if you want. if not, goodnight. that's not a complaint." }
          ], contact: 'Won' },
          { s: 'jihoon', f: 'sad', t: "*That's not a complaint.* God. He texts like a hostage." },
          { n: "He didn't say it like a joke. He rolled off her onto his back and lay there looking at her ceiling, and she lay there next to him looking at the same ceiling, and it was the furthest apart they'd been all night." }
        ] }
      ] },
      { n: "Two quick knocks." },
      { n: "Jihoon was in her closet before the second one landed. She'd never seen anybody move that fast, not in Tartarus, not anywhere. One second he was there and the next the closet door was sliding shut on a boy six feet tall folded up under her winter coats with his boots in his arms, and she was sitting up in bed with the duvet to her chin and her hair everywhere, and her mother's head came round the door." },
      { s: 'mom', f: 'neutral', t: "You're up." },
      { s: 'solar', f: 'neutral', t: "Can't sleep." },
      { n: "Her mother was in her dressing gown with a towel round her hair, and she didn't come in. She stood in the doorway and looked at the room the way she looked at a spreadsheet somebody had told her was finished: the beanie on the floor by the bed, which Solar saw at the exact same second she did, and the wet patch on the carpet by the door the shape of two boots, and the dog, sitting up very straight at the end of the bed staring at the closet with his ears all the way forward." },
      { cg: 'epi-h-jh-closet' }, // FEMC-ART-TODO 54B
      { s: 'mom', f: 'serious', t: "Whose car is that on the corner? It's been there since eleven. Engine running. Your father thinks it's a burglar. I think a burglar would turn the engine off." },
      { choose: [
        { t: "Mrs. Oh's son's. He visits on Saturdays.", flag: 'epi-h-sus-jh-car', then: [
          { glitch: { strain: 1 } },
          { s: 'solar', f: 'neutral', t: "Mrs. Oh's son. From across the road. He visits." },
          { s: 'mom', f: 'neutral', t: "Mrs. Oh's son lives in Daegu." },
          { s: 'solar', f: 'flustered', t: "He visits from Daegu." },
          { s: 'mom', f: 'neutral', t: "At eleven at night. On a Saturday. With the engine running." },
          { s: 'solar', f: 'flustered', t: "He's a very... dedicated son." },
          { n: "Her mother looked at her for a long time. Then she looked at the beanie on the floor, black, with the little silver chain on the fold that Cherry had picked out in ninth grade as a joke and he'd worn every winter since as a personality. Solar watched her see it. She watched her not say anything about it, which was worse, which was so much worse." },
          { s: 'mom', f: 'neutral', t: "Mm." }
        ] },
        { t: "It's Jihoon's. He drives round at night. You know he does.", then: [
          { s: 'solar', f: 'sad', t: "It's Jihoon's. He drives round at night when he can't sleep. You know he does, Mom." },
          { n: "Her mother's face did the thing it only did for one boy who wasn't hers. It went soft, all at once, the whole of it, like something had been unpinned." },
          { s: 'mom', f: 'sad', t: "That boy. Text him. Tell him to go home and sleep. Tell him there's japchae, he can come for it tomorrow, I made too much." },
          { n: "Then her eyes went past Solar to the end of the bed, to the dog, still staring at the closet with his whole body, like a pointer." },
          { s: 'mom', f: 'neutral', t: "Why is Nana staring at your closet?" },
          { s: 'solar', f: 'flustered', t: "...He thinks there's a cat in it." },
          { s: 'mom', f: 'neutral', t: "We don't have a cat." },
          { s: 'solar', f: 'flustered', t: "That's what I keep telling him." }
        ] }
      ] },
      { cg: null },
      { s: 'mom', f: 'neutral', t: "Goodnight, Solar. Lamp off by twelve." },
      { n: "She left the door open behind her. She always left it open when she wasn't finished." },
      { n: "Solar got up and shut it, very slowly, the way you'd shut a door on a sleeping baby or a bomb, and stood with her back against it, and after a long count of ten the closet door slid open and Jihoon unfolded out of it with Cherry's pink bear sitting on top of his head where it had fallen off the shelf, and his boots still clutched to his chest like a man rescued from a flood." },
      { n: "They looked at each other." },
      { n: "Then they were both on the floor, laughing into each other's shoulders without making a single sound, the worst kind of laughing, the kind that hurts, the kind where you can't breathe and can't stop and every time you nearly stop the other person shakes and you're gone again, the bear rolling off his head onto the carpet, Nana standing over them both with the expression of a dog who'd known about the cat all along." },
      { n: "It stopped eventually. Things did. And when it stopped they were just sitting on her floor with their backs against the bed, and it was very quiet, and her phone was face down on the nightstand, and neither of them looked at it." },
      { s: 'jihoon', f: 'sad', t: "Forty-one past. Every night?" },
      { s: 'solar', f: 'sad', t: "...Most nights." },
      { s: 'jihoon', f: 'neutral', t: "Huh. He's alright, you know. That's the worst part. I keep trying to hate him properly and he keeps texting you *that's not a complaint*." },
      { n: "He picked his beanie up off the carpet and put it on, and put his boots on, and didn't kiss her again. He stood in her doorway in the dark and looked at her on the floor, and she thought he was going to say something real, the way he almost had in the car on Christmas Eve, his hand coming up toward her face." },
      { s: 'jihoon', f: 'happy', t: "Your closet smells like Cherry's perfume. You should look into that." },
      { n: "Then he was gone, down the stairs, skipping the fourth, past her father and the game the Lotte Giants were still losing, and out the back door so softly it was barely a sound. From the window she watched the car on the corner turn its headlights on, finally, and pull away, slow on the snow, and turn at the end of the road toward his quiet house." },
      { flag: 'epi-h-jh-closet' },
      { ifFlag: 'epi-h-jh-answered', else: [
        { n: "She picked up her phone. *i'm here if you want. if not, goodnight. that's not a complaint.* She typed *goodnight won* and sent it, and it said *Read* almost at once, and nothing else, a boy in an empty bathtub a block away who'd waited up for two words and got them, and put his phone down, satisfied." }
      ], then: [
        { n: "She picked up her phone. There was nothing new on it. There didn't need to be. *Tell him goodnight from me.* She lay down on the floor next to the dog and the bear and looked at the ceiling where the name had been, and didn't sleep for a long time." }
      ] }
    ] },

    // 1/10, After School (Jihoon's route): she skips the council's second prom meeting (an exam day, so no council duty runs).
    // The rebellious side coming back out (Kat, Nov 11: "she smokes more, etc.").
    { id: 'epi-h-jh-skip', date: '1/10', slot: 'after', consumes: true, flag: 'epi-route-jihoon', title: 'the meeting', place: 'Hanlim · School', time: 'After School', scene: [
      { music: 'epi-h-jihoon' },
      { phone: [
        { from: 'heeseung', t: "heeheeseung: prom meeting part two. 3:40. council room. agenda attached. attendance is being taken. by me. personally" },
        { from: 'niki', t: "rikiniki: he made a seating chart" },
        { from: 'jihoon', t: "jihoney: car. behind the gym. i have a Proposal" }
      ], contact: 'RETREAT FACTS (do not leave)', group: true },
      { n: "Jihoon wasn't in RETREAT FACTS. He'd never been in RETREAT FACTS. His text had come in on the old chat at the exact same second, and her phone had stacked them on top of each other, Heeseung's agenda and Jihoon's proposal, like the universe was asking her a multiple-choice question and had stopped pretending it wasn't." },
      { n: "She'd done the last paper that morning, maths, most of it guessed with great confidence, and come out of it not knowing if she'd passed, and she'd stood at her locker for a full minute with her school jacket over one arm looking at the two messages. Then she'd put the jacket on, and put his on over it, the leather one, the one he'd said was ugly on him, and rolled her skirt once at the waistband the way she hadn't since tenth grade, and walked out the back doors past the gym." },
      { place: 'Hanlim · School · Gym', time: 'After School', soft: true },
      { n: "His car was parked across two spaces in the staff lot, crooked, like always, and he was sitting on the hood in the cold with his knees up, smoking, and when he saw her coming round the corner of the gym in his jacket he didn't say anything about the jacket. He held the packet out instead. Like a question he already knew the answer to." },
      // Nov 11 2026 (Kat): the gym
      { n: "Crooked, and backwards. He'd nosed it in at the fence by the bins, so the windshield and the hood and Jihoon on the hood all faced away from the building, and the gym's fire doors were behind him, ten feet off, push bars and wired glass and a cold coming off them she could feel from the corner. He had his back square to them, like a boy at a sleepover sitting with his back to the window during the scary part." },
      { n: "She took one. Her hands knew how. That was the part that surprised her, that her hands still knew, after two years: the cupped palm round the lighter, the first drag held a second too long, the way you tip your head back to let it out so it goes up and not in somebody's face. It tasted like being sixteen. It tasted like the old table, and the back of the bleachers, and the summer before everything, and she didn't cough, and he watched her not cough." },
      { s: 'jihoon', f: 'neutral', t: "Look at you. The vice president. Skipping a meeting. Smoking on school property. In a skirt rolled up like a delinquent." },
      { s: 'solar', f: 'neutral', t: "Shut up. It's cold. You have heat in your car and you're sitting on the hood." },
      { s: 'jihoon', f: 'happy', t: "It's for the aesthetic. You wouldn't understand. You're a council girl now." },
      { s: 'solar', f: 'serious', t: "Say *council girl* again and I'll put this out on your Hyundai." },
      { n: "He laughed, delighted, like she'd given him something, and she realized she had. That was the old her. The one who said things like that. She hadn't heard herself say anything like that out loud since September, since a podium and a boy with dimples and a whole autumn of being good, very good, the kind of good you have to keep checking on, like a pot." },
      // Nov 11 2026 (Kat): the gym
      { s: 'solar', f: 'neutral', t: "You parked backwards." },
      { s: 'jihoon', f: 'neutral', t: "I parked facing the view." },
      { s: 'solar', f: 'neutral', t: "It's bins, Jihoon." },
      { s: 'jihoon', f: 'happy', t: "It's a view of bins. Very underrated. Very peaceful. Bins never did anything to anybody." },
      { n: "Behind him the fire doors ticked in the cold, twice, like a radiator giving up. He didn't turn round. He tapped his ash off the far side of the hood and talked about Heeseung's seating chart, and he didn't look over his shoulder once, and she watched him not look and didn't say anything, because she knew exactly what it cost to pretend a building was just a building." },
      { n: "Her phone went in his jacket pocket. Heeseung. *3:42. you are not in the council room. this is not a judgement. it's an observation.* Then Niki, *LMAOOO she's skipping*, then Sunoo, *are u ok sol!!!!*, and she turned it face down on the hood of his car and didn't answer any of them, and the smoke went up into the cold, and it felt good. It felt so good. That was the problem with it. It always had been." },
      { n: "A door banged round the front of the gym. Voices. A group of first-years coming out of the side entrance with their bags, and one of them stopping, and pointing, and a phone coming up, because there was always a phone." },
      { choose: [
        { t: "(Let them look. Finish it.)", flag: 'epi-h-heat-jh-smoke', then: [
          { n: "She didn't put it out. She looked straight at the phone across the car park and took a long drag and let it out slowly, upwards, the way you'd do it in a film, and Jihoon made a sound beside her like a man watching a firework he'd lit himself." },
          { s: 'jihoon', f: 'happy', t: "Oh, she's back. Oh, I missed her. Hi. Hello. Where have you *been*." },
          { n: "By six it was on Hanlim Unfiltered. A blurry photo: the hood of a car, two figures in leather jackets, smoke going up. *ghost vp is NOT ghosting the delinquent era huh.* Two hundred comments. Somebody had circled her rolled skirt in red. Somebody else had written *rehab didn't take*, and somebody else had written *leave her alone she's literally fine*, and she read all of them, twice, on her bed, and didn't feel anything about most of them, which was the part that scared her." }
        ] },
        { t: "(Put it out on your shoe. Go to the meeting late.)", then: [
          { n: "She put it out on the sole of her shoe and flicked the end into the snowbank behind the car, and slid off the hood, and Jihoon watched her do it with his head on one side." },
          { s: 'jihoon', f: 'neutral', t: "Boring. Very boring. I respect it. I hate it." },
          { s: 'solar', f: 'neutral', t: "Heeseung made a seating chart." },
          { s: 'jihoon', f: 'happy', t: "Go, then. Go sit in your seat. Tell Heeseung I said he has beautiful handwriting." },
          { n: "She walked into the council room at four minutes to four in his leather jacket smelling like his car, and seven people looked up, and nobody said anything, and Heeseung, without looking up from his clipboard, wrote something down. She took the jacket off. She didn't give it back." }
        ] }
      ] },
      { place: 'Hanlim · Home · Kitchen', time: 'Evening', soft: true },
      { n: "Her mother was at the kitchen table when she got home, with her reading glasses on and a bowl of tangerines, and she looked up when Solar came in, and her nose did a very small thing." },
      { s: 'mom', f: 'neutral', t: "Your coat smells like cigarettes." },
      { s: 'mom', f: 'serious', t: "Your coat, Solar. Not his. I know what his car smells like. I've known what his car smells like since he got it." },
      { choose: [
        { t: "Cherry was smoking. I was standing next to her.", flag: 'epi-h-sus-jh-smoke', then: [
          { glitch: { strain: 1 } },
          { s: 'mom', f: 'neutral', t: "Cherry was smoking. Next to you. In your coat pocket." },
          { n: "She held up the lighter. It had been in the pocket. It was purple. It wasn't Cherry's. It wasn't even Jihoon's. It was the one she'd had in tenth grade, the one that had burned the cuff of her mother's grey cardigan, which she'd found that morning at the back of her desk drawer and put in her pocket without asking herself why." },
          { s: 'mom', f: 'sad', t: "I'll keep this one too. With the armband. I'm running out of pocket." }
        ] },
        { t: "It's mine. I had one. Just one.", then: [
          { s: 'solar', f: 'neutral', t: "It's mine. I had one. Behind the gym. Just one." },
          { n: "Her mother looked at her for a long time over her reading glasses. Then she peeled a tangerine, all the way, in one piece, the way she did when she was deciding something, and put half of it on the table in front of Solar's chair." },
          { s: 'mom', f: 'sad', t: "...Not in the house. Not near the dog. And not *just one*, Solar. I was eighteen once. It's never just one." }
        ] }
      ] },
      { bond: { jihoon: 1 } }
    ] },

    // 1/4, Late Night (Jihoon's route): the honest conversation (the snow day; 1/7 late and 1/8 after belong to story-jungwon.js). Jungwon is not ended; he stays, hurt and tender.
    { id: 'epi-h-jh-honest', date: '1/4', slot: 'late', consumes: true, flag: 'epi-route-jihoon', title: 'the count', place: "Hanlim · Jungwon's Street", time: 'Late Night', scene: [
      { music: 'epi-h-romance' },
      { phone: [
        { from: 'jungwon', t: "maeumi needs to go out." },
        { from: 'jungwon', t: "he doesn't. but i'm at the end of your street. i'd like to talk to you, if you'll come down. you don't have to." }
      ], contact: 'Won' },
      { n: "He was standing under the streetlight at the end of her road in his good coat and slippers, which meant he'd come out without his parents knowing, again, and the dog on the end of the leash was sitting on the snow with the specific dignity of a very small animal who has been told he needs to go out and does not." },
      { n: "She'd come down in her coat over her pyjamas. She'd done that a lot, this winter. She noticed it, standing there. She noticed him notice it." },
      { s: 'jungwon', f: 'neutral', t: "Hi." },
      { s: 'solar', f: 'neutral', t: "Hi. You're in slippers again." },
      { s: 'jungwon', f: 'neutral', t: "Shoes would have been suspicious." },
      { s: 'jungwon', f: 'neutral', t: "You smell like smoke. You don't smoke." },
      { s: 'solar', f: 'neutral', t: "...I used to." },
      { n: "He didn't say anything to that. He'd never asked what she used to do. He'd decided not to, in the autumn, and he was a person who kept his decisions the way other people kept receipts, and she watched him keep this one too, standing in the snow, and file the smell of Jihoon's car away with everything else he'd chosen not to ask about." },
      { n: "He said it like a joke, the way he'd have said it in November. It wasn't one now, and he didn't smile, and Maeumi got up off the snow and walked over and sat down on her boot, as if he'd decided something about sides, and Jungwon looked down at him with a face she'd never seen him wear, like a boy watching something he'd built be very kind to somebody else." },
      { s: 'jungwon', f: 'serious', t: "I count things. You know that. I don't mean to, it just happens. Tins. Minutes. How long a dog walk can be." },
      { s: 'jungwon', f: 'serious', t: "There's been a car on the corner of your street four nights out of the last ten. After midnight. Engine running. It's a Hyundai with a dent in the back left door from the tree outside Yeobo's, which I know because I was there when he hit it." },
      { n: "He said it in his flattest voice. The test-score voice. The weather. Like he'd written it down somewhere and was reading it back so he wouldn't have to say it any other way." },
      { s: 'jungwon', f: 'serious', t: "I'm not asking you what it is. I decided a long time ago I'd never make you tell me anything you weren't ready to. I'm asking you to tell me if I should stop counting." },
      { n: "The snow came down between them under the streetlight, thick and fast, the heavy kind that had been coming down all day and shut the whole town in. She could hear the dog breathing on her boot. She could hear, from somewhere a long way off, a car on a main road, and she didn't turn to look at it, because she knew it wasn't the car, and she knew she'd wanted it to be, and that was the answer, really. That was the whole answer. She'd known it for a while." },
      { choose: [
        { t: "(Tell him the truth. All of it.)", flag: 'epi-h-jh-told-jw', stat: { courage: 1 }, then: [
          { s: 'solar', f: 'sad', t: "It's Jihoon. It's been Jihoon. Since Christmas. Before Christmas, maybe, I don't— since before I had a word for it. I kissed him, Won. More than once. I'm not going to tell you it was him. It wasn't him. It was me." },
          { n: "He didn't move. He stood there and took it like he'd taken the punch in the hallway in the fall, like he'd decided to stand still for it before it came, and the only thing that moved was the leash, in his hand, which went very tight and then, slowly, slack." },
          { s: 'jungwon', f: 'neutral', t: "Thank you for telling me." },
          { s: 'solar', f: 'sad', t: "Don't say that. Don't *thank* me." },
          { s: 'jungwon', f: 'sad', t: "I'm going to. You could have let me keep counting. That would have been easier for you. You didn't." }
        ] },
        { t: "I don't know what it is yet. That's the truth too.", flag: 'epi-h-jh-half-told', stat: { kindness: 1 }, then: [
          { s: 'solar', f: 'sad', t: "It's Jihoon's car. You know it is. And I don't know what it is yet, Won, I don't, and I'm not going to stand here and give you a word for it that's wrong. That's the truth too. That's the most true thing I've got." },
          { n: "He looked at her for a long time. Then he nodded, once, the way he nodded at a number in the ledger that didn't match and that he'd have to go back and find the mistake in later, on his own, with a pencil." },
          { s: 'jungwon', f: 'neutral', t: "Okay. Then I'll wait for the word. I'm good at waiting. I'm very bad at most things that aren't maths, but I'm good at that." }
        ] }
      ] },
      { s: 'solar', f: 'sad', t: "Are you breaking up with me?" },
      { n: "She hadn't meant to ask it. It came out small, like something knocked off a shelf." },
      { n: "He thought about it. She watched him think about it, properly, the way he thought about everything, all the way to the end of the sum, standing in his slippers in the snow with his dog on her foot." },
      { s: 'jungwon', f: 'sad', t: "No." },
      { s: 'jungwon', f: 'serious', t: "I'm not good at losing, Sol. I've never done it. Not once. I don't know how it goes. I'd like to do it properly, if I have to, and not in the snow at midnight because I counted a car. That's not a reason. That's a symptom." },
      { s: 'jungwon', f: 'neutral', t: "And I don't think you know yet either. Not all of it. I think you know which way you're leaning. I'm not stupid. But leaning isn't falling. I've watched you nearly fall a lot of times this year. You always catch yourself on something." },
      { n: "He said it so quietly. He said it like he was the one apologizing. She thought about the bathtub, and the container of japchae he'd hidden as evidence that somebody fed him, and the way he'd said *I liked it more with the door open* like a thing he'd found out about himself and was going to think about. She thought about him counting, alone, in a neat room, four nights out of nine." },
      { s: 'solar', f: 'sad', t: "I don't deserve you being this nice about it." },
      { s: 'jungwon', f: 'serious', t: "I'm not being nice. I'm being accurate. I'm also very upset. I'd like that on the record, since you keep saying *Won* like it's an apology. I'm upset, and I'm going to go home and lie in an empty bathtub and be upset, very quietly, so my mother doesn't hear." },
      { s: 'jungwon', f: 'sad', t: "And on Monday I'll be at the gate at seven-forty, because there's a make-up exam, and you haven't finished chapter six, and that's not about any of this. That's just true." },
      { n: "He bent down and picked up the dog off her boot, very gently, like he was taking something back he'd only lent, and tucked him into the front of his good coat with just the small furious face showing." },
      { s: 'jungwon', f: 'neutral', t: "Tell him— Park. Tell him the dent's getting worse. He should get it looked at." },
      { n: "He walked back up his road in his slippers with his dog in his coat, and he didn't look back, and she stood under the streetlight until he'd turned the corner, and then a while after that, and she didn't cry until she was back in her room, and then she did, into Nana, who had been waiting at the top of the stairs, who let her." },
      { phone: [
        { from: 'jungwon', t: "home." },
        { from: 'jungwon', t: "i'm still going to text you at 7:02. i just wanted you to know that, so you wouldn't wonder." }
      ], contact: 'Won' },
      { bond: { jungwon: 1 } }
    ] }
  );

  // ── The Trip (Nov 11 2026, Kat: "one hangout night with the old friends where they have a little too much fun ... only on the
  // Jihoon route since Solar is supposed to fall back into her drug habits more in that route"). minigames/trip.js, flags
  // epi-h-mg-trip-*. 12/28 evening (the night after the séance, the night before the party), Jihoon's route only: the old crew
  // in Hanlim Park; she can take them (the game) or say no and sit it out with Nana (confirm). Stakes: epi-h-heat-trip (seen
  // at the gate), epi-h-sus-trip (comes home wrong and lies to Mom). The morning after is its own 12/29 early event.
  const CLUB = "rip solar kim (she's fine probably)";
  (R.events ||= []).push(
    { id: 'epi-h-jh-trip', date: '12/28', slot: 'evening', consumes: true, flag: 'epi-route-jihoon', title: 'the park', place: 'Hanlim · The Park', time: 'Evening', scene: [
      { music: 'epi-h-late' },
      { phone: [
        { from: 'hyunsuk', t: "geniusuk: park. 8. the slope above the pond" },
        { from: 'hyunsuk', t: "geniusuk: we are not talking about last night. we are going outside like normal people" },
        { from: 'junkyu', t: "junkyute: can we bring blankets!!!" },
        { from: 'asahi', t: "asanoonecares: no one cares. i'm bringing two" },
        { from: 'jihoon', t: "jihoney: Bring My Son" }
      ], contact: CLUB, group: true },
      { n: "Last night a little wooden heart had slid round a board in Jihoon's living room under eight sets of fingers and spelled something in the dark that nobody would say out loud today, and nobody had slept, and by the afternoon the chat had decided, the way the chat always decided things, by Hyunsuk saying something and nobody saying no, that the cure was cold air." },
      { n: "Hanlim Park after dark was the hard kind of clear, the sky scraped black, the old snow shoved up grey along the paths and gone to crust on top. The pond was frozen at the edges and black in the middle, and the streetlamps round it hummed, actually hummed, a thin electric note she'd never noticed in daylight. Asahi's two blankets were down on the slope above the water, one on top of the other, and the old table was on them, all of it, for the first time since before." },
      { n: "Nana lay down in the snow beside the blanket like he'd been personally invited and the invitation had said black tie. Junkyu had brought a third blanket nobody had asked for and put it over Nana. Jaehyuk had brought a textbook, which he said was for the vibes. Cherry sat on the far side from Hyunsuk, and Hyunsuk sat on the far side from Cherry, and nobody said anything about that, which was how you knew everybody had noticed." },
      { s: 'hyunsuk', f: 'neutral', t: "Okay. So. Don't be weird about it." },
      { n: "He took a sandwich bag out of his coat. Inside it was something that looked like it had been dug up, because it had, somewhere, by somebody his cousin knew, and Solar knew what it was before he'd opened his mouth. Her stomach knew. The way it knows the stairs in the dark in a house you used to live in." },
      { s: 'cherry', f: 'serious', t: "Suk. Seriously?" },
      { s: 'hyunsuk', f: 'neutral', t: "A board spelled a word at us last night, man. In Hoon's living room. I'm not doing tonight as myself. Myself is having a terrible week." },
      { s: 'jaehyuk', f: 'neutral', t: "It's one night. Statistically the risk is- okay, I don't actually know the statistic." },
      { s: 'asahi', f: 'neutral', t: "No one cares about the statistic." },
      { s: 'junkyu', f: 'sad', t: "Is it gonna be scary? I don't want it to be scary. I want it to be nice." },
      { s: 'hyunsuk', f: 'happy', t: "It's gonna be so nice, Kyu. It's the park. Look at it. It's the nicest park." },
      { n: "The bag went round the blanket. It got to Jihoon and stopped. He didn't open it. He sat with it on his knee in the lamp light, and he didn't look at the bag, he looked at her, the way he'd been looking at her since Christmas, like she was the weather and he was deciding whether to go out in it." },
      { s: 'jihoon', f: 'neutral', t: "Your call, Sol. I'm very easily led. It's my one flaw. Top three. Top five, if Cherry's counting." },
      { n: "They'd promised. All of them, two years ago, on a day nobody talked about, and they'd kept it, most of them, mostly, the way you keep a promise to people who'd know if you didn't. And then there'd been a whole year somewhere else, and a whole autumn of being good before that, very good, the kind of good you have to keep checking on, like a pot, and sitting there in the cold with Nana breathing beside her she was so tired, all of a sudden, of checking." },
      { choose: [
        { t: "(Take the bag.)", flag: 'epi-h-trip-took', then: [
          { n: "She took the bag. They tasted like the floor of a forest, which was all she was planning to remember about that part. Jihoon watched her do it, and then he took his, without a joke, like a boy who'd only been waiting for permission and was a little sorry to get it." },
          { s: 'jihoon', f: 'happy', t: "Well. If you're going, I'm going. Somebody has to hold your hand. It can't be Cherry, she has terrible circulation." },
          { s: 'cherry', f: 'serious', t: "Solar Kim. One night. Then we go back to being boring, and I'm holding you to it, and if you make me hold you to it I'll break both your legs." },
          { n: "For forty minutes nothing happened, and they talked about nothing, the party tomorrow, the swim-team boy's tragic haircut, whether Nana could beat a deer. Then Junkyu said, very quietly, that Nana's fur was sparkling, and nobody laughed at him, because it was." },
          { minigame: 'trip', flags: 'epi-h-mg-trip', opts: { bg: 'epi-h-park-night' } },
          { ifFlag: 'epi-h-mg-trip-good', then: [
            { n: "She got every one of them back. Asahi off the bridge, conducting. Junkyu from the bench he'd been apologising to for twenty minutes. Cherry out of the willow with half of it braided. One by one, hand in hand, a chain of seven across the snow, onto the blanket, and they all sat down at once and the sky went the colour of milk tea, like the sun was coming up just for them." },
            { n: "It wasn't. It was eleven-forty. Jaehyuk checked twice and said it was impossible and then lay back in the snow and laughed until he cried, and Jihoon's hand was still in hers, and neither of them had let go, and neither of them said anything about it." }
          ], else: [
            { ifFlag: 'epi-h-mg-trip-won', then: [
              { n: "She got them all back in the end. It took the long way. Twice someone let go of her hand and drifted off to stand very still under a lamp, and twice she went and got them, and by the time all seven were on the blanket her hands were shaking and her face hurt from smiling and she wasn't sure, for a second, which of those was the trip." },
              { s: 'jihoon', f: 'happy', t: "Head count. Seven. And one son. Nobody lost. I'm putting it on my résumé." }
            ], else: [
              { n: "Somewhere in the middle it went wrong. The colours drained out of the park like somebody had pulled a plug, and the lamps went out of tune, and at the very edge of the light there was a shape standing where nobody was, not coming closer, just standing, the way something stands that has all night." },
              { n: "Jaehyuk found her by the pond. He took her face in both his hands, gently, like a textbook he was afraid of creasing, and made her look at him, and counted, four in, four out, until the shape was a tree again. Cherry sat on her other side and didn't say *I told you*, which was the kindest thing Cherry had ever not said." },
              { s: 'jaehyuk', f: 'serious', t: "Look at me. Not over there. Me. It's a tree, Sol. I measured it once in ninth grade for a worksheet. It's a tree." }
            ] }
          ] },
          { n: "They walked out together at half past midnight, Nana up front like a snowplough, and at the gate by the road there were two girls from school coming the other way with a little dog and their phone torches on, and one of them stopped." },
          { s: 'solar', f: 'surprised', t: "...Oh no." },
          { choose: [
            { t: "(Wave. Big.)", flag: 'epi-h-heat-trip', then: [
              { n: "She waved with her whole arm, like a woman on a ship, and called *happy holidays!* across the road a lot louder than she'd meant to, and behind her Junkyu said *happy holidays!* too, and then said it to the dog, and then to a bin." },
              { n: "By morning it was on Hanlim Unfiltered. No picture, just a post. *ghost vp + the old table at hanlim park at like 1am. someone was talking to a BIN.* Forty comments. Someone had written *temple must have been really relaxing*, with the crying face." }
            ] },
            { t: "(Hood up. Keep walking.)", then: [
              { n: "She put her hood up and looked at her boots, and Jihoon, without a word, stepped between her and the road, tall and loud and talking about the swim-team boy's haircut to nobody, so all the girls with the phone saw was the back of his coat and a very large dog." }
            ] }
          ] },
          { place: 'Hanlim · Home · Kitchen', time: 'Late Night', soft: true },
          { n: "The kitchen light was on. Her mother was at the table in her cardigan with a cup of barley tea gone cold in front of her, reading nothing on her phone, the way she did when she'd been waiting and wanted it to look like she hadn't." },
          { s: 'mom', f: 'neutral', t: "It's one o'clock." },
          { s: 'mom', f: 'serious', t: "Come here where I can see you." },
          { choose: [
            { t: "It's freezing out. My eyes always go like this in the cold.", flag: 'epi-h-sus-trip', then: [
              { glitch: { strain: 1 } },
              { n: "She came into the light, because not coming into the light would have been worse, and her mother looked up at her face for a long time, at her eyes, which she could feel were enormous, which she could feel were the whole of her face." },
              { s: 'mom', f: 'sad', t: "Your eyes have never done this in the cold, Solar. You've had the same eyes for eighteen years. I was there for all of them." },
              { s: 'mom', f: 'neutral', t: "Drink a glass of water. Then another one. Then bed. We'll talk when you can look at me properly." }
            ] },
            { t: "(Say goodnight from the stairs. Don't turn around.)", then: [
              { s: 'solar', f: 'neutral', t: "I'm so tired, Mom. Goodnight. Love you." },
              { n: "She said it to the stairs, already on the third one, Nana's tail in front of her face like a curtain, and her mother didn't call her back, and that was almost worse. There was a long pause in the kitchen. Then the scrape of a chair, and the tap running, and a glass of water left outside her door, the way you'd leave one for somebody who was sick." }
            ] }
          ] },
          { place: ROOM, time: 'Late Night', soft: true },
          { n: "Her ceiling was still breathing a little. Slowly, in and out, the crack above the window opening and closing like a gill. She lay on top of the covers in her coat with Nana's whole weight across her shins and watched it, and she felt so good. That was the thing. She felt warm all the way to the ends of her fingers, and full of love for everyone, the bin included, and underneath all of it, small and very clear, like a stone at the bottom of a glass of water, the knowledge that two years had just gone, in an evening, on a slope above a pond, and it hadn't felt like losing anything. It had felt like being let back into a party." }
        ] },
        { confirm: true, t: "No. I'll sit with Nana.", then: [
          { n: "She gave the bag back to Hyunsuk without opening it, and he shrugged, *your call, man*, no weirdness, which was the thing about the old table, they'd never once made anybody do anything. She looked over at Jihoon." },
          { n: "He looked at the bag on his knee for a long moment. Then he leaned across Asahi and dropped it in Hyunsuk's lap like it had bitten him." },
          { s: 'jihoon', f: 'neutral', t: "Then I'm out. Somebody has to be sober enough to make fun of them. It's a sacred duty. I take it very seriously." },
          { n: "So she sat on the bench at the top of the slope with Jihoon and Nana between them like a white wall, a thermos of Hyunsuk's terrible cocoa going back and forth, and watched. Asahi conducted the wind from the little bridge, very solemnly, with a stick. Junkyu apologised to a bench for twenty minutes. Jaehyuk read calculus to the moon, out loud, and the moon took it well. Cherry braided a willow. Hyunsuk filmed a duck that was not there." },
          { s: 'jihoon', f: 'happy', t: "Look at them. Our children. We did a terrible job." },
          { n: "She laughed into Nana's neck. It was cold and it was stupid and she was sober for all of it, and it was still, somehow, the best night she'd had since she got back, and she wasn't sure what to do with that either." },
          { place: 'Hanlim · Home · Kitchen', time: 'Late Night', soft: true },
          { n: "She was home at eleven exactly. Her mother looked up from the table, at the clock, then at her, then at the clock again, and got up without a word and wrote *11:00!!* on a sticky note and put it on the fridge, next to the takeout menus, like a gold star." }
        ] }
      ] },
      { flag: 'epi-h-trip' },
      { bond: { jihoon: 1 } }
    ] },

    // 12/29, Morning (the morning after the park; plays only if epi-h-jh-trip did): Jungwon's 7:02, the glow and the guilt, Mom.
    { id: 'epi-h-jh-trip-after', date: '12/29', slot: 'early', consumes: true, flag: 'epi-h-trip', title: 'seven-oh-two', place: ROOM, time: 'Morning', scene: [
      { music: 'epi-h-home' },
      { n: "At 7:02 her phone went on the pillow." },
      { phone: [
        { from: 'jungwon', t: "good morning." },
        { from: 'jungwon', t: "heeseung has sent out a hydration schedule for tonight. you're on it twice. i'm on it four times, which i think is personal." },
        { from: 'jungwon', t: "sunoo says the old table was at the park last night. he saw a story. how was it?" }
      ], contact: 'Won' },
      { ifFlag: 'epi-h-trip-took', then: [
        { n: "She'd woken at six with a mouth like the bottom of the pond and her coat still on, Nana snoring on her legs, the ceiling back to being a ceiling. In the club chat there was a video from 3:58 a.m. of Junkyu explaining to a bench that it was a good bench and he was sorry, and under it fourteen messages that were just Asahi's name, and one from Jihoon, at 4:10: *Everybody Drink Water. That Is An Order From Your King.*" },
        { choose: [
          { t: "it was good. we looked at the pond for like an hour. it's very deep", then: [
            { phone: [
              { from: 'solar', t: "it was good. we looked at the pond for like an hour. it's very deep" },
              { from: 'jungwon', t: "the pond is about a metre." },
              { from: 'jungwon', t: "i hope you wore a hat." }
            ], contact: 'Won' }
          ] },
          { t: "(Send him the picture of Nana asleep under Junkyu's blanket instead.)", then: [
            { n: "She sent him the one of Nana asleep in the snow under Junkyu's striped blanket with one paw sticking out, and nothing else, because a picture of a dog wasn't a lie." },
            { phone: [
              { from: 'jungwon', t: "he looks like he had a big night." },
              { from: 'jungwon', t: "eat something before tonight. i'm going to check." }
            ], contact: 'Won' }
          ] }
        ] },
        { n: "She put the phone face down on her chest and lay there with the glow still in her, faint now, a warm light left on in a room she'd walked out of. She'd laughed so hard last night her stomach still hurt. She'd held seven people's hands. She'd been sixteen for five hours and it had been lovely, and he'd said *i hope you wore a hat*, and that was the part she couldn't look at." },
        { n: "Tonight was the party. Tonight Jihoon would have something in his jacket, he always did at parties, and she'd know what it was, and he'd know she knew, and she had no idea, lying there, what her face was going to do." },
        { place: 'Hanlim · Home · Kitchen', time: 'Morning', soft: true },
        { ifFlag: 'epi-h-sus-trip', then: [
          { n: "Her mother had made juk. Plain rice porridge, the kind she made for fevers, and set it down in front of Solar with a big glass of water and not one word, and sat across from her and watched her eat every spoonful of it." },
          { s: 'mom', f: 'serious', t: "I'm not stupid, Solar. I was eighteen. Your eyes were like two dinner plates." },
          { s: 'mom', f: 'sad', t: "Whatever it was. Not again. Not with that boy and not without him. I'm not asking. I'm telling you I know." }
        ], else: [
          { s: 'mom', f: 'neutral', t: "You came in very quietly last night." },
          { s: 'solar', f: 'neutral', t: "I was tired." },
          { n: "Her mother said *mm*, the long one, the one that wasn't agreeing, and slid a glass of water across the table to her, and then, after a second, a second glass beside it, and went back to her paper." }
        ] }
      ], else: [
        { n: "She'd slept like a stone, the good kind, and in the club chat there was a video from 3:58 a.m. of Junkyu explaining to a bench that it was a good bench and he was sorry, filmed by Jihoon, narrated by Jihoon, captioned *Sober Witness Testimony*." },
        { phone: [
          { from: 'solar', t: "it was good. junkyu apologised to a bench. i was the designated nana" },
          { from: 'jungwon', t: "was the bench alright?" },
          { from: 'jungwon', t: "i'm glad you had a good night. you sound like you had a good night." }
        ], contact: 'Won' },
        { n: "The sticky note was still on the fridge when she came down. *11:00!!* Her mother had added a second one under it overnight, in the same pen. *see? possible.*" }
      ] }
    ] }
  );

  // Shared blocks spliced into existing scenes (see the header for where each goes). Each gates itself.
  R.stolen = {
    // 12/23, karaoke (end): the curb. The near-miss.
    karaoke: [
      { ifYear: JR, then: [
        { place: "Hanlim · Jihoon's Car", time: 'Evening', soft: true },
        { music: 'epi-h-jihoon' },
        { n: "The others peeled off at the bus stop on the corner: Junkyu and Jaehyuk the same way, arguing about whether barley tea was a real drink; Asahi without saying goodbye to anybody, which was how he said goodbye; Cherry into Hyunsuk's car without looking at him, and Hyunsuk driving her anyway. Which left Jihoon's car, and her. They lived on the same street. They always had. There had never once in their lives been a reason to walk when Jihoon was driving." },
        { n: "He drove the three minutes home in eleven. He went round the long way, past the park, past the convenience store with the haunted machine still lit up in the snow, past the school, dark, the gym's high windows black, and he didn't say anything about the cans, and he didn't say anything about the route. He just drove it." },
        { n: "Outside her house he put it in park and left the engine running, and didn't unlock the doors." },
        { s: 'jihoon', f: 'neutral', t: "You've got snow in your hair." },
        { s: 'solar', f: 'neutral', t: "Where." },
        { s: 'jihoon', f: 'neutral', t: "Everywhere. You look like a cake somebody dropped. Hold still." },
        { n: "He leaned across the gearstick and started picking it out, one flake at a time, with the focus of a man defusing something. His fingers at her temple. In her hair, by her ear. His cologne, the one he'd worn since ninth grade that she'd stopped smelling years ago, the way you stop smelling your own house, and smelled now, all at once, like somebody had opened a window." },
        { n: "He stopped picking at the snow. His hand stayed where it was." },
        { n: "His eyes went to her mouth and back. It was so fast it could have been nothing. It wasn't nothing. She'd seen him do it once before, on a curb, outside a dance, a long time ago and also this autumn, and she'd laughed at him then, and she didn't laugh now." },
        { n: "Neither of them moved. The heater roared. In her coat pocket the phone buzzed against the can, once, and she didn't look at it, and that was the part she'd think about later, lying in bed with the lamp off: not his hand, not his face an inch from hers. That she didn't look." },
        { choose: [
          { t: "(Stay where you are.)", flag: 'epi-h-jh-curb-stayed', then: [
            { n: "She stayed. He leaned in. One inch, maybe less, the width of a decision, slow enough that she could have said his name and stopped it, and he was waiting for her to, she could see him waiting for her to, Park Jihoon who never waited for anything, his breath on her mouth—" },
            { n: "The porch light came on." },
            { n: "White, flat, sudden, right across the windshield, and behind it, in the front window, the curtain moving, and a shape that was unmistakably her mother in her reading glasses, not even pretending not to look." },
            { n: "Jihoon was back in his own seat so fast he hit his elbow on the door. He sat there with both hands at ten and two, like a driving test, staring straight ahead through the windshield at the empty street." },
            { s: 'jihoon', f: 'neutral', t: "Your mom's watching, rug." },
            { s: 'solar', f: 'surprised', t: "I *know* my mom's watching." },
            { s: 'jihoon', f: 'happy', t: "Wave. Wave at her. Act natural. I'm going to wave." },
            { n: "He waved. With his whole arm. Like a paperboy in an old movie. Her mother, behind the glass, after a long second, lifted one hand and waved back, slowly, the way you'd wave at a car you'd taken down the licence plate of." }
          ] },
          { t: "(Open the door.)", then: [
            { n: "She found the handle without looking. The cold came in all at once, and the snow, and the sound of the street, and his hand fell back to the wheel like it had been there the whole time." },
            { s: 'jihoon', f: 'neutral', t: "Rude. I was performing a service." },
            { s: 'solar', f: 'neutral', t: "Goodnight, Jihoon." },
            { s: 'jihoon', f: 'happy', t: "Goodnight, cake." },
            { n: "She walked up the path without turning round, and the porch light came on as she reached it, and in the front window the curtain moved, just once, and was still." }
          ] }
        ] },
        { n: "Upstairs, with the door shut, she finally looked at the phone. One text, from a block away, sent at the exact second she hadn't looked." },
        { phone: [
          { from: 'jungwon', t: "chapter nine was lying to me. i was right. goodnight, sol." }
        ], contact: 'Won' },
        { n: "Then, while she was still holding it, another one, from downstairs. Her mother had never once in Solar's life texted her from inside the same house." },
        { phone: [
          { from: 'mom', t: "Eleven minutes." },
          { from: 'mom', t: "In the car. I timed it. I'm not asking. I'm telling you I timed it." }
        ], contact: 'Mom' },
        { choose: [
          { t: "he was showing me a video. of a cat", flag: 'epi-h-sus-jh-curb', then: [
            { phone: [
              { from: 'solar', t: "he was showing me a video. of a cat" },
              { from: 'mom', t: "An eleven minute cat." },
              { from: 'mom', t: "I'll add it to the list." }
            ], contact: 'Mom' }
          ] },
          { t: "he drove me home. we talked. thats all mom", then: [
            { phone: [
              { from: 'solar', t: "he drove me home. we talked. thats all mom" },
              { from: 'mom', t: "Mm. He's a good boy." },
              { from: 'mom', t: "That's not the same thing as a simple one. Goodnight." }
            ], contact: 'Mom' }
          ] }
        ] }
      ] }
    ],

    // 12/25, Christmas night (Jihoon's route), before he goes home: the kiss on her rug.
    xmasKiss: [
      { n: "He didn't stand up, though. He sat there on her rug with his back against the side of her bed, so his head was level with her pillow, and turned it, and she was right there. She'd been right there the whole time. Her hand, the one he'd been holding, was still hanging over the edge of the bed, and his was still under it, and the tree went red, green, red through the gap under the door." },
        { s: 'jihoon', f: 'neutral', t: "Say something mean. Quick." },
      { s: 'solar', f: 'sad', t: "...I can't think of anything." },
      { s: 'jihoon', f: 'sad', t: "That's a first. That's a Christmas miracle. Somebody call the—" },
      { n: "She'd spend a long time afterwards trying to work out which of them had moved. She never got further than the fact that neither of them had moved away. His mouth was cold from the snowballs and tasted of the cocoa he'd had at quarter to one, nine hours ago, which was impossible, and of mint, and of him, and his hand came up off her wrist to her jaw, very carefully, like she was something he'd been told not to touch in a shop." },
      { choose: [
        { t: "(Kiss him back.)", flag: 'epi-h-jh-xmas-kiss', then: [
          { n: "She kissed him back. She slid off the edge of the bed onto the rug into the tissue paper and kissed him back with both hands in the front of his jacket, and he made a sound in his throat like a boy who'd been punched and was grateful for it, and pulled her in, and the tissue paper went everywhere, and Nana, displaced from his post, sighed and moved two feet to the left and lay down again with the croissant." },
          { n: "It wasn't careful anymore after that. It was fifteen years of being careful all coming due at once: his hand in her hair, her back against the side of the bed, his mouth at her jaw and her throat and back to her mouth like he'd lost his place and had to start again, her name said into her skin like a thing he'd been saving. Her parents were asleep downstairs in front of the credits. The tree blinked. She stopped thinking about anything at all for a while, which was the point, and which was the problem." },
          { n: "Her phone lit up on the nightstand. The whole ceiling went white." },
          { phone: [
            { from: 'jungwon', t: "merry christmas, sol. i'm going to sleep. thank you for today. i'll count it." }
          ], contact: 'Won' },
          { n: "They both saw it. She saw him read it, upside down, from the floor, because he'd been reading her phone upside down since they were twelve. He didn't let go of her. He put his forehead down on her shoulder and stayed there and breathed." },
          { s: 'jihoon', f: 'sad', t: "You should answer that." },
          { s: 'solar', f: 'sad', t: "It's a text." },
          { s: 'jihoon', f: 'neutral', t: "You should answer it anyway. He'll count it. He said." }
        ] },
        { t: "(Stop. Say his name. Not Jihoon's.)", flag: 'epi-h-jh-xmas-stopped', then: [
          { s: 'solar', f: 'sad', t: "...Jungwon." },
          { n: "She said it against his mouth. It was the worst possible place to say it. He sat back on his heels on the rug like she'd pushed him, and she hadn't, she hadn't touched him, it was only the name." },
          { s: 'jihoon', f: 'neutral', t: "Yeah. I know his name." },
          { s: 'jihoon', f: 'sad', t: "I'm not— I'm not going to make you say it twice. I'm a gentleman. There's a difference." },
          { n: "But it had already happened. They both knew it. You couldn't put a thing back in a box just because you'd said somebody's name over the top of it, and she lay back against the side of the bed with the tissue paper crackling under her and her mouth still feeling like his, and he sat on her rug and didn't look at her, and the tree went red, green, red." }
        ] }
      ] },
      { flag: 'epi-h-jh-kissed' },
      { bond: { jihoon: 1 } }
    ],

    // 1/9, prom (end), Jihoon's route: out in the open.
    prom: [
      { ifEpiRoute: 'jihoon', then: [
        { place: 'Hanlim · School', time: 'After School', soft: true },
        { music: 'epi-h-jihoon' },
        { n: "He was waiting outside the council room. Not hiding round the corner by the stairs, the way he'd waited for her every time this year that he'd waited for her at all. Right outside the door, leaning on the lockers opposite with his ankles crossed and his school jacket open, in full view of the hallway and the window in the council-room door, holding two melon bars, in January, in a heated building, like a boy who'd decided to make a point and was going to make it if it melted." },
        { s: 'jihoon', f: 'happy', t: "Vice President. Your ice cream. As is tradition." },
        { n: "Behind her the door was still open, and behind the door the whole council had gone completely silent, the way a classroom goes silent when a teacher walks in, except nobody had walked in. Somebody had just walked out. Her." },
        { n: "Jihoon held out the second melon bar. Then, when she'd taken it, he held out his other hand, empty, palm up, in the middle of the hallway, the way she'd held out hers to him at the party for the bag. And he waited. He looked her in the eye and waited." },
        { choose: [
          { t: "(Take his hand. Walk down the main hall.)", flag: ['epi-h-jh-open', 'epi-h-heat-jh-hall'], then: [
            { n: "She took it. She walked down the main hall with him at five past five on a Tuesday in the middle of make-up exams, past the trophy case and the first-years and the girl from the debate team who wrote everything down, and every single person in that hallway turned to look, and she let them." },
            { n: "By seven there was a post. *VP and the bake sale guy???? in the MAIN HALL????* Under it, a blurred photo of two backs and two joined hands and a melon bar, and three hundred comments, and Hanlim Unfiltered's top reply: *so THAT'S what the temple was for.*" }
          ] },
          { t: "(Take his hand. Go out the back way.)", flag: 'epi-h-jh-open', then: [
            { n: "She took it. They went out the back way, by the gym, past the doors where the half-finished decorations were still taped, and nobody saw them but the caretaker and a crow on the bins, and that was fine. That was enough. She hadn't been sure there'd ever be a way she was allowed to walk out of a building holding his hand. It turned out there were two." }
          ] }
        ] },
        { n: "But the council saw. The council had been watching through the window in the door the whole time, seven faces stacked in the little square of glass like a totem pole." },
        { s: 'niki', f: 'happy', t: "LMAOOO." },
        { s: 'jake', f: 'surprised', t: "Wait. Wait. What about jolar? I have a *fan account*. It has *eleven followers*. One of them's a *dog*." },
        { s: 'jay', f: 'neutral', t: "Bro." },
        { s: 'sunoo', f: 'sad', t: "...Did she tell him? Before? Hyung, did she tell him first?" },
        { ifFlag: 'epi-h-jh-told-jw', then: [
          { s: 'heeseung', f: 'neutral', t: "She told him on Thursday. In the snow. He told me on Monday. In the car park. In detail. With a diagram." },
          { s: 'heeseung', f: 'neutral', t: "That's not going in the minutes." }
        ], else: [
          { s: 'heeseung', f: 'neutral', t: "She told him something on Thursday. He said she told him the truth, which was that she didn't know yet. He said that like it was a gift." },
          { s: 'heeseung', f: 'neutral', t: "That's not going in the minutes." }
        ] },
        { n: "And in the doorway, last, holding the key to the council room in one hand and Sunoo's laminator cord in the other, because somebody had to unplug it, Jungwon. He looked at the two of them, at the hands, for exactly as long as it took him to read it, and not a second longer. Then he looked at her face. Only her face. It was the kindest thing he could possibly have chosen to look at, and she knew he'd chosen it." },
        { s: 'jungwon', f: 'neutral', t: "Go. I'll lock up." },
        { s: 'jungwon', f: 'neutral', t: "Park. Eat yours before it melts. It's January. That's not a point, that's a mess." },
        { s: 'jihoon', f: 'neutral', t: "...Noted, Yang." },
        { n: "Neither of them said anything else. Jungwon locked the door behind the council and walked the other way down the hall with the laminator cord coiled round his hand, and Sunoo went after him, and so, after a second, did Jay, and she watched the three of them go and thought: he's not alone. Good. And then: you don't get to think *good*. And then she thought it anyway." },
        { phone: [
          { from: 'cherry', t: "cherryblossoms: SOLAR KIM" },
          { from: 'cherry', t: "cherryblossoms: I PINKY PROMISED HIM. I DID THE THUMB KISS. IN A BATHROOM" },
          { from: 'cherry', t: "cherryblossoms: im not mad. im not. i'm just going to scream into a care bear for one (1) hour" },
          { from: 'asahi', t: "asanoonecares: no one cares" },
          { from: 'asahi', t: "asanoonecares: (i care. a little. don't screenshot)" },
          { from: 'junkyu', t: "junkyute: SOL AND HOON!!!!! I KNEW IT!!!! I KNEW IT SINCE THE HIKE!!!!" },
          { from: 'jaehyuk', t: "jaehyukkie: For the record, I've known since first year. I said nothing. I'd like that acknowledged at some point." },
          { from: 'hyunsuk', t: "geniusuk: took u fifteen years man" },
          { from: 'hyunsuk', t: "geniusuk: dont fuck it up. either of u. i mean it" },
          { from: 'jihoon', t: "jihoney: Silence Peasants" },
          { from: 'jihoon', t: "jihoney: suk i saw that. thank u. delete it" }
        ], contact: "rip solar kim (she's fine probably)", group: true },
        { n: "And at half past seven, when she'd got home and taken her shoes off and lain down on her bed in her uniform with her face in the dog, one more. From downstairs. From inside the same house, again." },
        { phone: [
          { from: 'mom', t: "Jihoon just came to the front door. He asked if he could take you for tteokbokki on Saturday." },
          { from: 'mom', t: "He's never asked before. In fifteen years. He has always just taken you." },
          { from: 'mom', t: "I said yes. Then I had to sit down. Your father made me tea." },
          { from: 'mom', t: "That other boy ate my japchae, Solar. Twice. Be kind to him." }
        ], contact: 'Mom' },
        { choose: [
          { t: "i am. i'm trying to be", then: [
            { phone: [
              { from: 'solar', t: "i am. i'm trying to be" },
              { from: 'mom', t: "I know. That's why I'm worried." },
              { from: 'mom', t: "Come down and eat. Both your boys can wait until after dinner." }
            ], contact: 'Mom' }
          ] },
          { t: "mom he's not my— it's not", then: [
            { phone: [
              { from: 'solar', t: "mom he's not my— it's not like that. jungwon and i aren't. i don't know what we are" },
              { from: 'mom', t: "Then find out. Kindly." },
              { from: 'mom', t: "And Solar. Jihoon's mother would have been so happy. I'm sorry. I had to say it to somebody." }
            ], contact: 'Mom' }
          ] }
        ] },
        { bond: { jihoon: 1 } }
      ] }
    ],

    // 1/10, the arcade (Jihoon's route): said out loud.
    witness: [
      { n: "The hamburger sat on the lip of the chute, thinking about it. Neither of them touched the machine. Neither of them left. The crane game hummed its little song to nobody, pink and blue and buzzing, and his hand was on the glass next to hers, and he didn't move it." },
      { s: 'solar', f: 'serious', t: "Say it." },
      { s: 'jihoon', f: 'neutral', t: "Say what. I've said loads of things. I'm a prolific speaker. I'm speaking at an impeachment tomorrow." },
      { s: 'solar', f: 'serious', t: "The thing in the bag. With the polaroids. *If you wanted a clue.* Say it without a bag." },
      { n: "He looked at the hamburger. Then at the machine. Then at the broken air-hockey table, as if it might help. Then, finally, because there was nowhere else left in the arcade to look, at her." },
      { s: 'jihoon', f: 'serious', t: "I like you. I've liked you since middle school. I liked you through all of it, the election and the president and the bake sale and the other place, the whole other world, Sol, the guy over there, everything. I liked you the entire time and I was a dick about it most of the time, and I'm saying it now because I'm standing up in front of the whole school tomorrow and I'd like there to be one thing on record that isn't a joke." },
      { s: 'jihoon', f: 'neutral', t: "That's it. That's the thing. You can go now. I'm going to play air hockey with myself." },
      { choose: [
        { t: "(Say it back.)", flag: ['epi-h-jh-real', 'epi-h-jh-said-back'], then: [
          { s: 'solar', f: 'sad', t: "I like you too." },
          { s: 'solar', f: 'flustered', t: "Not like— I mean like that. Like the thing in the bag. I didn't know. I think I did know. I think I've known since the curb outside homecoming and I laughed at you because I didn't know what else to do with my face." },
          { n: "He went very quiet. Then he nodded, once, like a man accepting a parking ticket." },
          { s: 'jihoon', f: 'neutral', t: "Okay." },
          { s: 'solar', f: 'surprised', t: "*Okay?*" },
          { s: 'jihoon', f: 'neutral', t: "I'm being cool about it. I'm being very cool. I'm going to go out to the car and scream for about four minutes. It's a precision job." }
        ] },
        { t: "(Kiss him. In the middle of the arcade.)", flag: ['epi-h-jh-real', 'epi-h-jh-arcade-kiss'], then: [
          { n: "She kissed him. In the middle of the arcade, in the light of the crane game, with the plush hamburger still on the lip of the chute behind the glass and a kid at the rhythm game behind them filming it, probably, she didn't care. It wasn't stolen. That was the difference. It was the first one that wasn't. It was out under the lights where anybody could see it, and it was slower for that, and softer, and it went on for a long time." },
          { s: 'jihoon', f: 'surprised', t: "...That's not saying it back." },
          { s: 'solar', f: 'happy', t: "It's saying it louder." }
        ] }
      ] },
      { s: 'jihoon', f: 'sad', t: "What about Yang." },
      { ifFlag: 'epi-h-jh-told-jw', then: [
        { s: 'solar', f: 'sad', t: "I told him. All of it. He said he's not good at losing. He's never done it. He said he'd like to do it properly, if he has to." }
      ], else: [
        { s: 'solar', f: 'sad', t: "I told him I didn't know what it was yet. He said he'd wait for the word. He said he's good at waiting." }
      ] },
      { n: "Jihoon looked at the crane game for a long time. The claw was back up in its corner, swinging a little, empty. Behind the glass, very slowly, like it had finally made up its mind, the hamburger tipped over the lip and dropped into the chute." },
      { s: 'jihoon', f: 'neutral', t: "...Neither am I. Good at losing. We've got that in common. God. Don't tell him." },
      { s: 'jihoon', f: 'neutral', t: "He's not going anywhere, is he." },
      { s: 'solar', f: 'sad', t: "No." },
      { s: 'jihoon', f: 'happy', t: "Good. Somebody has to keep me honest. And it's not going to be you, you're a terrible influence. You flushed my stuff. Twice. Allegedly." },
      { bond: { jihoon: 1 } }
    ],

    // 1/12, the gym at midnight (Jihoon's route): her hand in his when Jungwon comes in. Inserted after "the nicest thing
    // that had ever happened between them" (the gym's structure, the pull and Jungwon holding on are unchanged).
    gym: [
      { n: "Her other hand was in Jihoon's. She noticed it at the same moment Jungwon did, which meant she'd been holding it since the cocoa without deciding to, the way you hold a railing on stairs you've climbed your whole life. She didn't let go. Jungwon looked at it, at the two hands, for exactly as long as it took him to read it, the way he'd read it in the hallway on Tuesday. Then he looked at her face." },
      { s: 'jungwon', f: 'neutral', t: "You're cold. Both of you. Your hands are blue." },
      { s: 'jihoon', f: 'neutral', t: "It's a gym at midnight, Yang. Everything's blue. It's ambience." },
      { n: "Nobody let go of anything. They stood there in a row in the dark under the half-strung lights, the three of them, two cocoas and one held hand and one boy with his hands in his coat pockets, and it was the strangest, saddest, most honest thing she'd ever stood in the middle of, and she wouldn't have been anywhere else." }
    ]
  };

  // 12/29, the party: the coat room (each route's branch calls this with its own lead-in; story-w2.js).
  R.stolenCoats = route => [
    { ifYear: JR, then: [
      ...(route === 'jungwon' ? [{ ifFlag: 'epi-h-party-left', then: [], else:coatsScene('cherry', "Cherry had gone to the bathroom, finally, after making Solar swear on Nana's life not to move from the bottom of the stairs, and Solar had moved from the bottom of the stairs.") }]
        : route === 'jihoon' ? [{ ifFlag: 'epi-h-party-jh-flushed', then: coatsScene('hyunsuk', "He didn't go back downstairs. He stood in the bathroom doorway after the water stopped, and then he pushed off it and took her wrist, not hard, and walked her two doors down the landing, to the room where everybody had thrown their coats, and let go of her at the door, and let her go in first.") }]
        : coatsScene('cherry', "Her coat was upstairs. That was all it was. She went up to get it while the council was still steaming on the curb, and the landing was dark and loud, and the room where everyone had thrown their coats was at the end of it."))
    ] }
  ];
  function coatsScene(asker, lead) {
    return [
      { n: lead },
      { n: "Coats on a bed. Thirty of them, forty, in a heap as big as a car, and the only light was the streetlight through the window and the bass coming up through the floor into the soles of her feet. She was digging for hers, for the heavy left pocket, when the door shut behind her, and she didn't have to turn around to know. She knew him by his cologne. She'd known him by his cologne since she was nine." },
      { s: 'jihoon', f: 'neutral', t: "Yours is the ugly one. Third from the bottom. I watched you throw it." },
      { n: "He didn't go and get it. He stood with his back against the door and looked at her across the dark, and the bass went through the floor, and somebody screamed with laughter on the landing, right outside, inches away, and neither of them moved." },
      { n: "Then he crossed the room in two steps and she was against the wall by the window with the streetlight on half her face and his hand flat on the wall beside her head, and he didn't kiss her. That was the thing. He put his forehead against hers and stayed there, breathing the party out of himself, and she could feel him shaking, a little, the way he'd shaken on the porch with his hands round the kettle." },
      { s: 'jihoon', f: 'sad', t: "I'm being good. Look at me. I'm being so good. Nobody's ever been this good in a coat room." },
      { s: 'solar', f: 'sad', t: "Jihoon—" },
      { n: "She didn't know how the sentence ended. She found out. She kissed him, in the dark, in a stranger's house, with forty coats watching and a party going on through the wall, and the bass came up through the floor into both of them, and it was the most stupid, dangerous, completely obvious thing she'd done since she came home, and she didn't stop." },
      { n: "The door opened." },
      { n: "Only a crack. It hit his back and stopped, and through the gap came a slice of landing light and a phone, held up at face height, its flashlight on, and behind the phone a second-year from the swim team with her mouth already open." },
      { s: 'jihoon', f: 'neutral', t: "Occupied. Coats only. Go away." },
      { choose: [
        { t: "(Pull your hood up and walk out past her.)", flag: 'epi-h-heat-jh-coats', then: [
          { n: "She grabbed the first coat she touched, which turned out by some miracle to be hers, and put the hood up and pushed past him and out through the crack in the door and past the girl on the landing with her face down. It didn't matter. You can't hide a walk. Everybody at Hanlim knew how the vice president walked, she'd walked up to a podium in front of all of them in October." },
          { n: "Behind her, she heard the girl say *oh my God* to her phone, softly, almost reverently, like she was in church." }
        ] },
        { t: "(Put your hand on the door. Hold it shut. Wait.)", then: [
          { n: "She reached past him and put her hand flat on the door and leaned, and it clicked shut on the slice of light, and she held it there with her whole weight and her heart going in her ears, and on the other side the girl said *sorry, sorry* and laughed and went away down the landing." },
          { n: "They waited a full minute. Then another one. Then he went out first, alone, whistling, and she counted to a hundred against the coats, and went out the other way, round by the bathroom, like she'd been there all along." }
        ] }
      ] },
      { flag: 'epi-h-jh-coats' },
      asker === 'hyunsuk' ? { n: "Hyunsuk was at the bottom of the stairs. He looked at her coming down with her coat on and her mouth the way it was, and then up the stairs behind her, at nothing, at the empty landing, at where Jihoon wasn't anymore." }
        : { n: "Cherry was at the bottom of the stairs, with her arms folded and her bag on her shoulder and the face of a woman who had been made to swear something in a bathroom and had come out to find the person she'd sworn it about missing." },
      asker === 'hyunsuk' ? { s: 'hyunsuk', f: 'serious', t: "Where'd you go, Sol?" } : { s: 'cherry', f: 'serious', t: "Where the fuck did you go." },
      { choose: [
        { t: "Bathroom. The line was insane.", flag: 'epi-h-lie-crew-coats', then: [
          asker === 'hyunsuk' ? { s: 'hyunsuk', f: 'sad', t: "Bathroom's the other way, man." } : { s: 'cherry', f: 'serious', t: "I was IN the bathroom, Solar. There was no line. I was the line." },
          { n: "Nobody said anything else about it. That was worse than if they had. It sat there between them the rest of the night like a third person, a lie about a bathroom, the stupidest lie she'd ever told, to someone who'd known her since before either of them could spell." }
        ] },
        { t: "Getting my coat. He was up there. Don't.", then: [
          asker === 'hyunsuk'
            ? { s: 'hyunsuk', f: 'sad', t: "I wasn't gonna say anything. I've never said anything. Fifteen years I haven't said anything, man." }
            : { s: 'cherry', f: 'serious', t: "Don't? DON'T? I did a thumb kiss, Sol. In a BATHROOM. For a man who texts with PERIODS." },
          asker === 'hyunsuk'
            ? { n: "He put his hand on top of her head, briefly, the way he used to when they were small and she'd fallen off something, and then took it away." }
            : { n: "Then she looked at Solar's face properly, in the light at the bottom of the stairs, and something went out of her shoulders, and she hooked her arm through Solar's without another word, and held on too hard." }
        ] }
      ] }
    ];
  }
})();
