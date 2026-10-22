/* Ranks 11-15 batch (2026-10-22): the living world around jihoon's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js). Everything merges into
   FEMC_GAME_LINK_EXTRAS.jihoon; nothing is replaced.
   - afterRank 11-15 (11 → 2/3 demons out, 12 → 2/10 two-twelve, 13 → 2/17 pansies, 14 → 2/24 no, 15 → 2/28 the string):
     each reacts to the shared part of the rank scene, never to a choice in it. The route is locked by February, so they
     carry `variants` by heading where Solar's register changes: caps and keysmash in the Hoax register (H), careful
     lowercase in the strangers one (S), lowercase and "u" otherwise. 15's message changes with every heading (where the
     string goes).
   - lateNights (1): 'r15-jihoon-ln-flash' (a visit at the gate, rank 12+, 2/15-3/2): the string needs a night one. He lives
     at the guesthouse, so 'visit'. Choices carry notes 2.
   - routine (1): 'r15-jihoon-gate-lunch' (lunch, school days, 2/4-2/26, rank 11+): the gate bento again, made by him this time.
   Everything gates on 'year-goes-on'. His texting voice: lowercase with Capitalized Random Words, hashtags. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const J = (t) => ({ from: 'jihoon', t });
  const R = (t, notes, then) => ({ t, link: 'jihoon', notes, then: then.map(J) });
  const addRank = (rank) => { (X.jihoon ||= {}).afterRank = { ...((X.jihoon || {}).afterRank || {}), ...rank }; };
  const addNights = (list) => { (X.jihoon ||= {}).lateNights = [...((X.jihoon || {}).lateNights || []), ...list]; };

  /* ── afterRank 11-15 ── */
  const beans = [J('there are Beans in my shoes'), J('both shoes. Ken Did This. i have proof')];
  const twelve = [J('for the record i did Not do page two-thirteen'), J('or two-fourteen'), J('Yang cannot prove anything. the bath ate the evidence')];
  const pansies = [J('the pansies are on the guesthouse windowsill'), J('next to my Valentines. they get along. the ugly one is the Leader')];
  const still = [J('back at the guesthouse'), J('Asahi asked where i went. i said Out. he said ok. longest conversation we have ever had'), J('Still No.')];

  addRank({
    // 2/3 the dorm's front steps: Setsubun, the mask, the camera.
    11: { slot: 'evening', flag: 'year-goes-on', msgs: beans,
      reply: [R('HEHEHE good. demons out', 3, ['Betrayal. From A Child.', 'he said sorry and then threw one more. #brocken']),
        R('did u keep the picture', 2, ['Obviously. its Art', 'u look like u are throwing a fastball at god'])],
      variants: {
        H: { msgs: beans, reply: [R('KEN IS MY HERO ASDFGHJKL', 3, ['Ken Is A Menace', 'i taught him that. indirectly. by existing']),
          R('SHAKE UR SHOES OUT BEFORE U GET IN BED', 2, ['too late', 'it is like the princess and the pea but there are forty peas'])] },
        S: { msgs: beans, reply: [R('tell ken i said thank you.', 3, ['Disgusting. ok', 'he bowed. at the phone. he is ten']),
          R('did you keep the picture?', 2, ['its on the string. day one', 'the string is very short right now. it has Potential'])] }
      } },
    // 2/10 Game Panic: the flashcards, the calculator from the claw.
    12: { slot: 'late', flag: 'year-goes-on', msgs: twelve,
      reply: [R('u did all three didnt u', 3, ['Allegedly', '...two mistakes. both signs. Do Not tell Yang i know that']),
        R('proud of u', 2, ['Do Not.', 'ok a Little. quietly. dont look at the phone while u do it'])],
      variants: {
        H: { msgs: twelve, reply: [R('PARK JIHOON DOING HOMEWORK??? ON A SCHOOL NIGHT??? IN THE BATH????', 3, ['the bath is my Office', 'all great men did their best work in the bath. look it up']),
          R('ROW THREE BABEYYYY', 2, ['Row Three.', 'i will sit behind u and breathe Correct Answers at ur neck'])] },
        S: { msgs: twelve, reply: [R("i'm proud of you.", 3, ['Disgusting', '...thank u. dont make it a thing']),
          R('was it right?', 2, ['Mostly. Hyunsuk checked. Hyunsuk is short but accurate'])] }
      } },
    // 2/17 the flower stall: two pots, and Mrs. Okada's third.
    13: { slot: 'evening', flag: 'year-goes-on', msgs: pansies,
      reply: [R('water them at the soil!!', 3, ['Not The Leaves. Not At Night.', 'i know. Mrs Okada lives in my head now. rent free']),
        R('pics or it didnt happen', 2, ['[image]', 'that is a Pansy. respect it'])],
      variants: {
        H: { msgs: pansies, reply: [R('THE UGLY ONE IS THE LEADER OMG', 3, ['it has Charisma', 'it gets that from me']),
          R('U BOUGHT FLOWERS??? WHO ARE U', 2, ['a Gardener. Now. deal with it'])] },
        S: { msgs: pansies, reply: [R('water them at the soil.', 3, ['i know. i know. i Know', 'goodnight sol']),
          R('they suit the windowsill.', 2, ['they suit Me. the windowsill is just there'])] },
        stay: { msgs: [J('the white one is on my windowsill'), J('did u put the other one on the roof yet'), J('Did U Water It. its been six hours')],
          reply: [R('watered. soil not leaves', 3, ['Good', 'ur learning. slowly. like a cactus']),
            R('jihoon its asleep. its a plant', 2, ['plants dont sleep sol', '...do they?? dont answer'])] }
      } },
    // 2/24 the station bench: no.
    14: { slot: 'late', flag: 'year-goes-on', msgs: still,
      reply: [R('still no', 3, ['Still No.', 'say it every night. im making it a Ritual']),
        R('good. sleep', 2, ['cant. Asahi is blinking', 'ok. trying. goodnight'])],
      variants: {
        H: { msgs: still, reply: [R('STILL NO!!!! -salute-', 3, ['-salute-', 'stop doing my salute. its Trademarked']),
          R('ILL BE AT THE DOOR', 2, ['Before.', 'i will be at the door Before. thats the deal'])] },
        S: { msgs: still, reply: [R("still no. i'm proud of you. i know. sorry.", 3, ['Disgusting', 'thank u']),
          R('text hyunsuk too.', 2, ['already did', 'he sent a thumbs up and then a longer message and then deleted the longer message'])] }
      } },
    // 2/28 the dorm steps: the string, the family-size tub.
    15: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: [J('is the string up'), J('i can tell if its crooked. From Here')],
      reply: [R('its up. its crooked. on purpose', 3, ['Monster', 'i love it. dont tell anyone']),
        R('family size was right', 2, ['i am Never Wrong', 'write it down'])],
      variants: {
        H: { msgs: [J('the string is in the gift bag right'), J('next to the letter. Right?')],
          reply: [R('NEXT TO THE LETTER. GOING ROUND MY ROOM TWICE', 3, ['Crime Board', 'ur mom is going to think ur investigating me']),
            R('row three. 8am. i will eat breakfast', 2, ['u will Not', 'i am bringing the second granola bar'])] },
        S: { msgs: [J('dont take the string off in the shower'), J('actually do. they warp')],
          reply: [R("it's staying on.", 3, ['Good', "who's ever there. tell them number one. in the Voice"]),
            R('goodnight, jihoon.', 2, ['too polite. try again', '...goodnight sol'])] },
        R: { msgs: [J('is the string packed'), J('dont let it get crushed in a suitcase. its Archival')],
          reply: [R('wrapped it in a sweater', 3, ['Smart', 'a sweater is the only correct way to transport history']),
            R('number one', 2, ['in the Voice??', 'ok i can hear it. i can hear it from here'])] },
        stay: { msgs: [J('i have the bean one'), J('its in my wallet. dont tell anyone'), J('Hyunsuk saw it. Hyunsuk is dead to me')],
          reply: [R('keep it in there forever', 3, ['Obviously', 'its going to outlive me. its laminated now. dont ask who']),
            R('tell them the right amount dramatic', 2, ['i will stand on a Chair'])] },
        true: { msgs: [J('four strings. all knotted'), J('i checked mine three times. the knot is Binding')],
          reply: [R('mine is on the dorm steps', 3, ['in the rain??', '...ok. thats the point. ur smarter than u look']),
            R('the other mes get a demon', 2, ['Let Them Wonder', 'their whole lives'])] }
      } }
  });

  /* ── A late night ── */
  addNights([
    { id: 'r15-jihoon-ln-flash', kind: 'visit', rank: 12, after: '2/15', until: '3/2', when: 'quiet', flag: 'year-goes-on', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { phone: [J('come to the window'), J('dont ask why'), J('the string needs a Night One')], contact: 'Jihoon' },
      { n: "He was on the pavement under the streetlight in his coat, buttoned, which she noticed, with the blue plastic camera held up to his face, pointed at her window like a sniper with very poor equipment." },
      { s: 'jihoon', f: 'serious', t: "Don't move. Don't open it. Through the glass. The glass is the point. It's artistic. You wouldn't understand, you've never had a vision." },
      { n: "The flash went off, enormous in the empty street, and somewhere down the hill a dog started barking, and somewhere above her a window slid open on the fourth floor." },
      { choose: [
        { t: "(Open the window anyway. Lean out so he gets your whole face.)", notes: 2, then: [
          { n: "She leaned out into the cold. He took a second one. The flash went off again. Mitsuru's voice said *Park-san* into the night with tremendous calm, and Jihoon bowed to the fourth floor with the camera over his heart and backed away down the hill, still holding the square up to the streetlight to watch it turn." }
        ] },
        { t: "(Hold up your phone flashlight. Make him squint.)", notes: 2, then: [
          { n: "She turned her phone light on and pointed it at him. He staggered back like he'd been shot and said she'd ruined the exposure, and took the picture anyway, and in the morning he sent it to her, a dark square with one bright star in the middle that was her, and nothing else, and said it was the best one he'd ever taken." }
        ] }
      ] }
    ] }
  ]);

  /* ── A routine ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'r15-jihoon-gate-lunch', after: '2/4', until: '2/26', slot: 'lunch', schoolOnly: true, flags: ['year-goes-on'], ranks: { jihoon: 11 },
      place: 'Gekkoukan High · Front Gate', time: 'Lunch', bg: 'gekkoukanhigh', cast: { guard: 'The Security Guard' }, scene: [
        { n: "There was a tall boy in a navy blazer that was not a Gekkoukan blazer at the school gate at lunch again, the way there had been in September, holding a lunchbox up over the bars, and the security guard was standing beside him with the face of a man who had accepted it as weather." },
        { s: 'jihoon', f: 'happy', t: "SOL. Lunch. I made it. Me. With my hands. The guesthouse lady supervised. She stood behind me the whole time like a lifeguard." },
        { n: "It was a real lunchbox, borrowed, with a lid that didn't quite shut. Inside, the rice was shaped into something that might have been a dog, or a cloud, or a dog that had become a cloud, and the egg was folded wrong, and there were no pickles, because she didn't like the pickles, and there never had been." },
        { choose: [
          { t: "(Eat it right there at the gate. Every bite.)", stat: { kindness: 1 }, then: [
            { n: "She ate it through the bars standing up, while he watched every bite with his arms folded, nodding like a judge on a cooking show, and the guard pretended to check the bushes and looked, very briefly, like a man who was going to tell his wife about this." },
            { s: 'jihoon', f: 'happy-2', t: "The egg was a choice. It was an artistic choice. Don't say anything about the egg." }
          ] },
          { t: "Is this Nana? In the rice?", stat: { charm: 1 }, then: [
            { s: 'jihoon', f: 'serious', t: "It's our SON. Obviously. Look at his little legs. That's his legs. That's three of his legs. The fourth one fell off on the train." }
          ] }
        ] },
        { n: "He took the empty box back through the bars and walked off backward toward the station, telling the guard he'd see him tomorrow, and the guard, after a long moment, said *I know,* and closed the gate, gently this time." }
      ] }
  );
})();
