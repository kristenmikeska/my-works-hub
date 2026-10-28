/* The true ending's coda: the six scenes (epilogue batch 8, 2026-10-28; FEMC-EPILOGUE-PLAN.md section 6; the private plan §7).
   Three small days, one per world, each a Day and a Night; every Night ends on that world's holding-on moment and then one
   line of Iwatodai (Akihiko, on his run, at a bench he doesn't know why he stops at). Consumes: every scene spends its slot,
   so the day goes straight on (no Go Out, no late screen); the last one `ends` the act (the end card, the Equinox card).
   Events (R.events):
     epi-tr-r-day     3/8 Day     Syracuse, Sat 12/20/2025: the first snow, finals closed, the girls (and who she is now)
     epi-tr-r-held    3/8 Night   the Language Arts rooftop: Haechan holds on ("I'll find you. Every world."), world-runners
     epi-tr-s-day     3/9 Day     Incheon, the evening before: the full kitchen, Yunjin, the house (fence-free)
     epi-tr-s-held    3/9 Night   the garden by the annex before light, the bottom of the tide: both boys hold on, world-strangers
     epi-tr-h-day     3/10 Day    Hanlim, Fri 1/12/2024: Cherry, the crew, the council finishing the gym, Jungwon
     epi-tr-h-held    3/10 Night  the gym at midnight: Jungwon holds on; Haechan's voice comes through (simply the promise:
                                  on this route he never made the HOAX deal), world-hoax; ends
   Memory (the approved lean): S.E.E.S. forgot the year; Solar and the searchers kept it. Wren is part of her now: she can feel
   her as herself, never as a separate girl. strangers: fence-free only (the kitchen, the tide, the annex step, the radio, the
   Discman that never plays; nothing of the house's business, injuries, outsiders, the wedding or any particular night).
   Flags set: epi-tr-r-held, epi-tr-s-held, epi-tr-h-held. Reads: ifYear romance haechan / jungwon, xmas haechan / jungwon.
   Glitch ids (glitches.js, each once): epi-tr-g-aki, -snow, -r-pull, -radio, -tide, -s-pull, -koro, -h-pull, -voice. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).true ||= {});
  // Between the worlds: Iwatodai, where nobody remembers her.
  const bench = n => [
    { music: 'epi-tr-bench' },
    { place: 'Iwatodai Station · Bench', time: 'Morning' },
    ...n
  ];

  (R.events ||= []).push(

  // ───────────────────────────── Syracuse ─────────────────────────────
  { id: 'epi-tr-r-day', date: '3/8', slot: 'early', consumes: true, title: 'first snow', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'epi-tr-snow' },
    { n: "Three weeks home, and it snowed for real on the last day of finals, the first proper snow of the year, the kind that came down slow and fat out of a white sky and didn't stop to think about it. She woke up to the light of it on the ceiling before she saw it at the window, the room gone bright and soft and blue, and lay there for a while with her hair everywhere and her hands open on the blanket, listening to the house." },
    { n: "Hyein's hairdryer. Hanni on the stairs, singing something wrong. A door. The radiator knocking the way it had every morning for three weeks, which she'd started to find funny, which was new." },
    { n: "She had woken up three times, every morning, for three weeks. Once here. Once to a ship's horn and the tide going out under a house. Once to a dog barking at nothing in a quiet street. Not one after the other. All at once, the way you hear three notes as a chord and not as three notes, and she knew which was which, and none of them was the dream." },
    { n: "Nobody here knew that. Not Hanni, not Hyein. They knew she'd been somewhere with them, a whole year of it, and that she'd come back with her hair down. That was all they needed. It was, she'd decided, all anybody needed." },
    { place: 'Syracuse · The Quad', time: 'Morning' },
    { n: "The last final was at nine, and she walked to it between them across a quad nobody had walked on yet, three sets of boots in the new snow, Hanni with a coffee in each hand because one was never enough, Hyein with her scarf over her mouth narrating everybody's outfit as they passed." },
    { s: 'hyein', f: 'happy', t: "That boy is wearing shorts. In this. Respect, honestly." },
    { s: 'hanni', f: 'neutral', t: "You can't respect shorts in December." },
    { s: 'hyein', f: 'serious', t: "I respect commitment. I respect a man who decided something in October and is seeing it through." },
    { n: "Solar laughed. Out loud, on the quad, at nothing, the way she'd been doing for three weeks and still wasn't used to. Hanni looked at her sideways over the coffee lid, the look she'd been giving her since the first morning, the one that checked and then didn't ask." },
    { s: 'hanni', f: 'happy', t: "You do that now." },
    { s: 'solar', t: "Do what." },
    { s: 'hanni', f: 'happy', t: "Laugh like nobody's grading it." },
    { n: "She didn't have an answer for that. She drank the coffee Hanni gave her instead, and across the quad, by the chapel, under the lamppost that always leaned a little too far to the right, a boy in a red scarf stopped and looked at the snow coming down, as if he'd been told to wait for someone." },
    { glitch: 'epi-tr-g-aki' },
    { n: "Then a bus went past between them, and when it had gone there was nobody by the lamppost, and the snow was filling his footprints in." },
    { n: "Something low in her chest turned over, once, the way it did on the stairs at night when she reached for a railing that was in another building. She let it. She didn't put it away. She was done putting things away." },
    { s: 'hyein', f: 'surprised', t: "Sol? You stopped." },
    { s: 'solar', t: "Somebody I used to know." },
    { s: 'hyein', f: 'neutral', t: "...From over there?" },
    { n: "Solar nodded. Hyein put her arm through hers and didn't let go of it all the way to the Hall of Languages, which was its own answer." },
    { n: "Her phone buzzed in her pocket during the final, face down on the desk, once. She didn't turn it over until she'd finished. One line, from a thread at the top of her list that she'd never once muted." },
    { phone: [{ from: 'haechan', t: 'roof. tonight. bring a coat this time pretty girl' }], contact: 'haechanah' }
  ] },

  { id: 'epi-tr-r-held', date: '3/8', slot: 'late', consumes: true, title: 'every world', place: 'Syracuse · Language Arts Rooftop', time: 'Late Night', scene: [
    { music: 'world-runners' },
    { glitch: { stage: 4 } },
    { n: "The Language Arts roof at a quarter to twelve, the city below them gone quiet under the snow, every streetlamp wearing a little halo of it. The ledge, the vent stack, the fire escape they'd both stopped pretending was the only way up. A can of Monster Pink Punch on the ledge beside them, sweating in the cold, unopened, because some things were for looking at." },
    { n: "She'd brought a coat. He noticed. He didn't say anything about it, which was how she knew he'd noticed." },
    { s: 'haechan', f: 'neutral', t: "Finals?" },
    { s: 'solar', t: "Done." },
    { s: 'haechan', f: 'neutral', t: "And?" },
    { s: 'solar', t: "And I don't care. Isn't that weird? A year ago I'd have been sick about it." },
    { s: 'haechan', f: 'happy', t: "A year ago you were in a different country fighting a tower. Maybe let yourself off the Business final." },
    { n: "She laughed into her scarf. He watched her do it, sideways, with the look he still got sometimes, like he was checking a song against the version in his head and finding it better." },
    { ifYear: { anyFlag: ['xmas-haechan'] }, then: [
      { n: "He took her hand without looking at it and put it in his coat pocket with his own, the way he'd done every night for three weeks, as if it were a thing his hand did by itself, as if she'd been doing it in every world all along. She let him. She'd stopped counting the ways she let him." }
    ], else: [
      { n: "He sat close enough that their shoulders touched and not one inch closer, the way he had all year, in every version of this, a boy who'd learned the exact distance a person could stand and stood there, faithfully, until he was asked to come nearer." }
    ] },
    { n: "At midnight the snow stopped falling." },
    { glitch: 'epi-tr-g-snow' },
    { n: "Not stopped. Stopped. Every flake in the sky over Syracuse hanging where it was, a whole city's worth of white held still in the air like somebody had put a hand flat on the world. The streetlights didn't flicker. They just went green." },
    { n: "And she felt it come for her. Not from anywhere. From everywhere, from under her ribs, the pull she'd felt at doors all year, the tide going out under a house, a hand closed around her wrist from a direction that wasn't a direction. Her fingers went thin first. She could see the light from the stairwell through them." },
    { glitch: 'epi-tr-g-r-pull' },
    { s: 'solar', t: "Haechan." },
    { n: "He was already holding on. Both arms, his whole weight, the way you'd hold someone on a ledge, his face in her hair and his breath going fast against her ear, and he didn't say *what's happening*. He didn't ask her anything at all. He'd always known this part would come. He'd just never told her he knew." },
    { s: 'haechan', f: 'serious', t: "I've got you." },
    { n: "She could feel, very clearly, that it wasn't only here. That somewhere very far away, at the bottom of a garden, someone else had her by the hand. That somewhere else, in a gym, someone else's arms had closed. The same pull, three places, one girl. She was in all of them. She was being held in all of them." },
    { s: 'haechan', f: 'serious', t: "I'll find you. You hear me? I'll find you. Every world." },
    { n: "The snow hung in the air around them like a held breath, and the edges of her came apart into light, gold and green, and he held on." },
    { flag: 'epi-tr-r-held' },
    ...bench([
      { n: "In a city by a bay, where it was nearly spring, a boy in a red scarf ran the same route he'd run every morning since he was twelve, and slowed, without meaning to, at the far end of Iwatodai Station. The last bench, under the timetable. He stood there with his breath going up white and his hands on his knees, and looked at it, and didn't know why." },
      { n: "Then he ran on. He was a little behind his time. He didn't check the watch." }
    ])
  ] },

  // ───────────────────────────── Incheon ─────────────────────────────
  { id: 'epi-tr-s-day', date: '3/9', slot: 'early', consumes: true, title: 'the kitchen', place: 'Incheon · The Lee House · Kitchen', time: 'Evening', scene: [
    { music: 'epi-tr-kitchen' },
    { n: "The kitchen in the Lee house had been full since five, the way it was full most evenings now, ten people and a bucket of fish and nobody agreeing about the rice. Mrs. Bang at the stove with her sleeves pushed up, running the room the way a general runs a hill. Steam on the windows. Someone's radio on the counter, low, a trot song nobody admitted to liking. The smell of barley tea and sesame oil and the sea, which got into everything in this house, the walls and the linen and her hair." },
    { n: "Three weeks home. She'd come down every evening of them and sat in her chair at the end of the long table with her hair down, and nobody in the house had said a word about the hair, which in this house was the loudest thing anyone could have said." },
    { s: 'mrsbang', t: "Agasshi. Taste this. Your father says it's too salty and your father is wrong." },
    { s: 'solar', t: "...It's too salty." },
    { s: 'mrsbang', t: "Then you're both wrong, and I'm feeding the koi." },
    { n: "She went out the back door with the bucket of scraps, and the cold came off the garden at her the way it always did in March, damp and mineral, the sky over the harbor already going dark blue at the edges. The koi in their bucket on the back step went round under the light from the kitchen window, slow, orange, patient, the two of them that had lived through the winter in a bucket because nobody in this house could bring themselves to do anything else with them." },
    { n: "Yunjin was on the step beside the bucket, in the red puffer, eating something off a skewer she'd definitely stolen from the kitchen." },
    { s: 'yunjin', f: 'happy', t: "Sol. They're getting fat. Look at that one. That one's in charge now." },
    { s: 'solar', t: "That one's always been in charge." },
    { s: 'yunjin', f: 'neutral', t: "Mm. Like someone." },
    { n: "Her voice still did the thing it had done all year, the gravel under it, worn rough from somewhere Solar had never asked about and never would. Yunjin bumped her shoulder against Solar's and kept it there, the way she had every night since the morning Solar had found her asleep on her floor in a nest of blankets, as if she'd come in the night to make sure and simply refused to leave." },
    { s: 'yunjin', f: 'neutral', t: "You're going to the step later." },
    { n: "Not a question. Solar didn't answer it. Down at the bottom of the garden the annex door was shut, the steel of it gone dull in the dusk, and on the sill of the little window beside it the old silver radio sat where it always sat, and as she looked at it, it caught two seconds of something, a bell, a school bell, a long way off, and then only the sea again." },
    { glitch: 'epi-tr-g-radio' },
    { s: 'yunjin', f: 'surprised', t: "Did that thing just—" },
    { s: 'solar', t: "It does that." },
    { s: 'yunjin', f: 'serious', t: "...Since when?" },
    { s: 'solar', t: "Since me." },
    { n: "Yunjin looked at her for a long moment in the light from the kitchen. Then she held out the skewer, the last piece left on it, which from her was a declaration, and Solar took it, and they sat on the back step and watched the koi until Mrs. Bang shouted for the plates." },
    { n: "That night her father came up the stairs at eleven, in his slippers, humming something old and flat, and stopped on the seventh stair, the one that creaked, and didn't ask her anything. He put his hand on her hair on his way past her door. Just that. She lay awake afterward with the place still warm." }
  ] },

  { id: 'epi-tr-s-held', date: '3/9', slot: 'late', consumes: true, title: 'the bottom of the tide', place: 'Incheon · The Lee House · Garden', time: 'Before Light', scene: [
    { music: 'world-strangers' },
    { glitch: { stage: 4 } },
    { n: "Before light. She knew the tide before she opened the back door: all the way out, the bay pulled back to the horizon, the mud shining under the last of the sodium lights, the bottom of it, the place the water went to think. She'd been born at four in the morning at the bottom of a tide. She'd always been able to feel one, the way other people could feel rain coming." },
    { n: "Haechan was on the annex step, where he always was by now, his back against the steel door and the Discman in his hands, the old one with the cracked lid, the earbuds in. It hadn't played in years. He wore it anyway. Some things weren't for listening to." },
    { n: "And Jungwon was at the bottom of the garden, by the wall, in a dark coat, as far from the step as the garden allowed and not one inch farther, his watch running. Two boys who would never be friends, who had been at the two ends of her garden every night for three weeks without once agreeing to it, and who had never once failed to come." },
    { n: "She sat down on the step beside Haechan. He took one earbud out and didn't offer it to her, because there was nothing on it, and that was the joke, and she laughed at it anyway, under her breath, which was the point." },
    { s: 'haechan', f: 'neutral', t: "*Can't sleep, agasshi?*" },
    { s: 'solar', t: "Can you?" },
    { n: "He didn't answer that. Down by the wall Jungwon checked his watch, and said something quietly in Mandarin that was meant for nobody, and Solar answered it in Mandarin without thinking, the way her mouth still did, and he went still, and looked up at her across the whole dark garden." },
    { s: 'jungwon', f: 'neutral', t: "...You still do that." },
    { s: 'solar', t: "I do a lot of things still." },
    { n: "The tide stopped." },
    { glitch: 'epi-tr-g-tide' },
    { n: "Out past the wall, out on the flats, the first thin line of returning water had been coming in across the mud, the way it did every morning before light, silver, unhurried. It stopped where it was. All of it. A long gray edge of the sea standing still on the mudflats like a held breath, the gulls hanging over it not moving their wings, and the whole garden went the color of a pool at night." },
    { n: "Haechan was on his feet before she was. Jungwon was already crossing the garden. Neither of them said a word to the other. Neither of them had to." },
    { n: "She felt it take her from under the ribs, the same pull, the same direction that wasn't a direction, and her hands went thin first, and she held them out without deciding to, one to each side, the way you'd hold out your hands to be pulled up off the floor." },
    { glitch: 'epi-tr-g-s-pull' },
    { n: "Haechan took the left. Jungwon took the right, the one with the jade ring on it, and his thumb found the ring and pressed it, hard, as if it were a thing he could hold her by. Two boys at either side of her at the bottom of a tide, before light, each with one of her hands, not looking at each other once." },
    { s: 'haechan', f: 'serious', t: "*I'll find you.* Solar. *Every world.*" },
    { n: "He said her name. In the middle of the Korean, in the middle of everything, her name in his mouth like a thing he'd been saving, and she felt it land somewhere under the pull and stay there." },
    { n: "Jungwon didn't say anything for a long moment. Then, in Mandarin, the shortest thing he had, two syllables, quiet, the way he said things he'd decided were true." },
    { s: 'jungwon', f: 'serious', t: "*Bié zǒu.*" },
    { n: "Don't go. She knew he knew she couldn't promise it. She knew he'd said it anyway, which was the most he had ever given anyone. The sea stood still on the flats, and the light came up gray behind it, and her edges came apart into gold and green between two hands that didn't let go." },
    { flag: 'epi-tr-s-held' },
    ...bench([
      { n: "In a city by a bay, a boy on his morning run stopped at the far end of Iwatodai Station, at the last bench under the timetable, for the second day running. He didn't sit. He pulled off his left glove to wipe his face, and something small fell out of the lining onto the slats. A scrap of pink ribbon." },
      { n: "He picked it up. He looked at it for a long time. He didn't know where it had come from. He put it back in the glove, carefully, the way you'd put back something that belonged to someone, and ran on." }
    ])
  ] },

  // ───────────────────────────── Hanlim ─────────────────────────────
  { id: 'epi-tr-h-day', date: '3/10', slot: 'early', consumes: true, title: 'friday', place: 'Hanlim · School', time: 'Afternoon', scene: [
    { music: 'epi-tr-hanlim' },
    { n: "Friday at Hanlim, the last bell, the halls full of winter coats and the smell of wet shoes and somebody's tteokbokki, illegally, from a thermos. Three weeks home. The forum had stopped asking where the council had been after the first week, because the forum had the attention span of a goldfish and Eunchae had posted a video of a vice principal falling over in the snow." },
    { n: "Cherry found her at her locker, the way Cherry found her at her locker every afternoon, by walking into it." },
    { s: 'cherry', f: 'happy', t: "You're coming to the gym. Don't argue. The council's finishing the decorations and they need a vice president to stand there looking disappointed." },
    { s: 'solar', t: "I can do that." },
    { s: 'cherry', f: 'happy-2', t: "You're the best at it. It's your gift. Jihoon's coming to heckle. Junkyu's bringing ice cream for some reason. In January." },
    { n: "In the hallway by the stairs, where nobody else was looking, a single low note sounded and didn't fade, the kind of note a piano makes in a room with a blue door, and she stopped walking, and Cherry walked into her for the second time that day." },
    { glitch: 'epi-tr-g-koro' },
    { s: 'cherry', f: 'surprised', t: "What. What is it. Is it a teacher." },
    { s: 'solar', t: "It's nothing. A sound." },
    { s: 'cherry', f: 'neutral', t: "You've got that face again. The far face." },
    { s: 'solar', t: "I don't have a far face." },
    { s: 'cherry', f: 'serious', t: "Babe, you have three." },
    { place: 'Hanlim · School · Gym', time: 'Afternoon' },
    { n: "The gym was still half-decorated for the thing the council had voted on before they'd all vanished in exam week, blue and silver balloons gone soft on every surface, a string of lights hanging down off the bleachers in a sulk. Sunoo was up a ladder. Heeseung was holding the ladder and reading the minutes aloud. Jihoon was on the bottom bleacher with his feet up, eating Junkyu's ice cream, offering commentary nobody had asked for." },
    { s: 'jihoon', f: 'happy', t: "Left. Your other left. Sunoo. Buddy." },
    { n: "And Jungwon was at the far end with a clipboard, very straight, checking things off a list in handwriting so neat it looked typed, and when she came in he looked up, and lost his place on the list, which in three weeks had happened eleven times, and which she was counting." },
    { s: 'jungwon', f: 'neutral', t: "You came." },
    { s: 'solar', t: "Cherry made me." },
    { s: 'jungwon', f: 'happy', t: "I'll thank her formally." },
    { n: "He was the only one in this building who'd stood in the other places too. She knew that every time he looked at her, the way he looked at her now, like a man reading a page he'd read before in another language, and finding it the same." },
    { s: 'jungwon', f: 'neutral', t: "Stay late tonight. We're finishing it. Whatever it was for." },
    { s: 'solar', t: "Whatever it was for." }
  ] },

  { id: 'epi-tr-h-held', date: '3/10', slot: 'late', title: 'the gym at midnight', place: 'Hanlim · School · Gym at Midnight', time: 'Midnight', ends: true, scene: [
    { music: 'world-hoax' },
    { glitch: { stage: 4 } },
    { n: "They finished it. At eleven the others went home in a heap, Sunoo crying because it looked so good, Jihoon saying it looked like a dentist's office, Cherry dragging Junkyu out by the hood, and then it was the two of them in the gym with the lights off and only the strings over the bleachers lit, blue and silver, the exit signs green over every door." },
    { n: "Jungwon sat down beside her on the bottom bleacher. Not touching. Then, after he'd checked his watch, touching." },
    { s: 'jungwon', f: 'neutral', t: "It's almost twelve." },
    { s: 'solar', t: "I know." },
    { s: 'jungwon', f: 'serious', t: "You've known all day." },
    { s: 'solar', t: "...Since this morning. Since before. I could feel it in the other two." },
    { n: "He didn't ask what she meant. He was the one person in this world she never had to explain it to, because he'd stood in one of the other places himself, by a sea, at the bottom of a garden, and he carried it the way she did, and they didn't talk about it, and it sat between them like a third person on the bleacher, not unkindly." },
    { n: "At midnight every exit sign in the gym went out at once, and came back green, a deeper green, the green of a whole city holding its breath." },
    { glitch: 'epi-tr-g-h-pull' },
    { n: "She went thin all at once this time. No edges first. All of her, the bleacher showing through her knees, her hand going pale as paper in his, and he turned and took her by both arms and held on the way you'd hold a door shut in a wind, his whole body set against it, his face very calm, because his face was always very calm when it mattered." },
    { s: 'jungwon', f: 'serious', t: "Solar. Look at me. Not there. Here." },
    { n: "And then, through the green, through the bleed, from somewhere very far away and very close at once, a voice came through. A boy's voice. Rough at the edges, the way a song is rough when it's played through a wall." },
    { glitch: 'epi-tr-g-voice' },
    { s: 'haechan', f: 'serious', t: "I'll find you." },
    { n: "Jungwon's hands tightened. He knew the voice. Of course he knew the voice. He'd heard it in another world through a steel door at the bottom of a garden, and across a hall, and on the far side of her, all his life, it felt like." },
    { s: 'haechan', f: 'serious', t: "Every world. I said every world." },
    { n: "And she understood, with her whole body, that it wasn't coming from anywhere else. He was holding her now. On a roof in the snow, with both arms, his face in her hair. On a step at the bottom of a tide, by her left hand. And here, in a gym full of soft balloons, there was a boy holding her by both arms who had every reason in two worlds to let the voice have her, and wasn't, and wouldn't." },
    { s: 'jungwon', f: 'serious', t: "...I heard him." },
    { s: 'solar', t: "I know." },
    { s: 'jungwon', f: 'serious', t: "I'm not letting go." },
    { cg: 'epi-true-coda' },
    { n: "She was being held in three places at once. In all of them. Somewhere in the middle of her, where a frightened girl had sat on a bench all year waiting for a train she was scared of, someone small and hers reached out too, and held on, and didn't let go either." },
    { n: "The lights over the bleachers went gold, and green, and white. Her edges came apart into all three. And all three held." },
    { flag: 'epi-tr-h-held' },
    ...bench([
      { n: "In a city by a bay, where it was nearly spring, a boy in a red scarf ran to the far end of Iwatodai Station on the third morning, and this time he sat down. On the last bench, under the timetable, the place he didn't know why he stopped at. He sat with his elbows on his knees and his breath going up white and the ribbon in his glove, and a train horn sounded somewhere down the line, a long way off, not coming any closer." },
      { n: "He didn't know who he was waiting for. He waited anyway. It felt, for no reason at all, like being on time." }
    ])
  ] }

  );
})();
