/* Ranks 11-15 batch (2026-10-22): the living world around minji's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js). Everything merges into
   FEMC_GAME_LINK_EXTRAS.minji (and FEMC_GAME_DAILY_LIFE); nothing is replaced.
   - afterRank 11-15 (11 → 2/2 the slate, 12 → 2/9 coverage, 13 → 2/16 the last match, 14 → 2/21 selects, 15 → 2/25 the
     wrap): each reacts to the shared part of the rank scene, never to a choice in it. The route is locked by February, so
     they carry `variants` by heading where Solar's register changes: caps and keysmash in the Hoax register (H), careful
     lowercase in the strangers one (S), lowercase and "u" otherwise. 15's message changes with the heading too (where the
     slate goes). Rank 14's text sits between her selects (2/21) and the cut in Haechan's rank 14 (2/23): it never says the
     sound has been found.
   - lateNights (1): 'r15-minji-ln-logging' (a call, rank 11+, 2/3-3/2). She lives at the guesthouse, so only 'call' / 'visit'.
     Choices carry notes 2.
   - routine (1): 'r15-minji-long-table' (early, school days, 2/10-2/26, rank 12+, after the girls' arrival): the household
     round the long table, the shot in her film.
   Everything gates on 'year-goes-on'. Her texting voice: lowercase, u, 2, :] ;] (:. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const M = (t) => ({ from: 'minji', t });
  const R = (t, notes, then) => ({ t, link: 'minji', notes, then: then.map(M) });
  const addRank = (rank) => { (X.minji ||= {}).afterRank = { ...((X.minji || {}).afterRank || {}), ...rank }; };
  const addNights = (list) => { (X.minji ||= {}).lateNights = [...((X.minji || {}).lateNights || []), ...list]; };

  /* ── afterRank 11-15 ── */
  const chalk = [M('i bought more chalk'), M('a whole box. for one slate. the man said its still bad luck')];
  const shot = [M('mitsuru asked to see her shot'), M('she watched it 3 times. she said acceptable. then she said it again quieter')];
  const board = [M('i went back and checked the board'), M("still number one. someone's gonna beat it. i hope theyre bad")];
  const eleven = [M('eleven minutes. i timed it nine times'), M('it still needs sound. not music. sound'), M("i'm scared it doesn't exist :[")];
  const slate = [M("the slate's on my windowsill"), M("it still says tk 1. i'm never wiping it")];

  addRank({
    // 2/2 Seaside Park: the slate, the list of boxes.
    11: { slot: 'evening', flag: 'year-goes-on', msgs: chalk,
      reply: [R('did u write take 2 already', 3, ['yes. before i left', 'u always write the next one. so u have to come back :]']),
        R('i looked so serious w the slate', 2, ['u looked like u were starting a war', 'a good war. a small one'])],
      variants: {
        H: { msgs: chalk, reply: [R('MINJI THE SLATE. THE SLATE IS SO CUTE I CANT', 3, ['its a tool', '...its a little cute']),
          R('SEND PICS OF THE CHALK BOX PLS', 2, ['its just chalk', 'sent. dont say anything'])] },
        S: { msgs: chalk, reply: [R('did you write take two yet?', 3, ['yes. you always write the next one', "so you have to come back. that's the rule (:"]),
          R('thank you for asking twice.', 2, ['i asked like six times', "you just didn't count"])] }
      } },
    // 2/9 the dorm lounge: coverage, the chair, Mitsuru.
    12: { slot: 'late', flag: 'year-goes-on', msgs: shot,
      reply: [R('omg shes so proud of it', 3, ["she's asked for a copy", 'in writing. on letterhead']),
        R('how is junpei', 2, ['he wants top billing', 'i said the chair gets top billing'])],
      variants: {
        H: { msgs: shot, reply: [R('MITSURU SAID ACCEPTABLE??? THATS LIKE A 10/10', 3, ['i know', 'i almost cried. i didnt. i did']),
          R('JUNPEI AND THE CHAIR IS THE BEST THING IVE EVER SEEN', 2, ["he's been telling everyone", 'he says its method acting'])] },
        S: { msgs: shot, reply: [R("that's the most she's ever said about anything.", 3, ['i know', 'i wrote it down. acceptable. twice']),
          R('is junpei okay?', 2, ['he says hes famous now', 'in another universe. he keeps saying that part'])] }
      } },
    // 2/16 Game Panic: the last match, the high-score board.
    13: { slot: 'evening', flag: 'year-goes-on', msgs: board,
      reply: [R('they wont be. we were too good', 3, ['we were so good', 'nice ;]']),
        R('u didnt play again after did u', 2, ['no', 'i walked past the bead curtain like it was an ex'])],
      variants: {
        H: { msgs: board, reply: [R('NUMBER ONE FOREVER. NOBODY TOUCH IT', 3, ['nobody touch it', "i'm guarding it. ish"]),
          R('U WENT BACK TO CHECK?? ILY', 2, ['i was passing', 'i was not passing'])] },
        S: { msgs: board, reply: [R("they won't be. we were too good.", 3, ['we were. nice ;]']),
          R('did you play again after?', 2, ['no', "i walked past it like it was somebody i'm not talking to"])] }
      } },
    // 2/21 the guesthouse: selects, eleven minutes, no sound yet.
    14: { slot: 'late', delay: 1, flag: 'year-goes-on', msgs: eleven,
      reply: [R('it exists. someone has it', 3, ['ok', "if somebody hands it to me i'm going to cry on them"]),
        R('its gonna be perfect', 2, ['not perfect', "true. that's the brief"])],
      variants: {
        H: { msgs: eleven, reply: [R('IT EXISTS!!! I BELIEVE IN U', 3, ['ok', 'stop yelling. ok. i believe u']),
          R('ELEVEN MINUTES OF US???? I WILL SOB', 2, ['thats the idea', 'bring tissues. bring hyein tissues'])] },
        S: { msgs: eleven, reply: [R("it exists. somebody's keeping it for you.", 3, ['ok', "then i'll wait for them (:"]),
          R('it will sound like it sounded.', 2, ['thats all i want', "that's the whole thing (:"])] }
      } },
    // 2/25 the riverside lamp: the wrap. Where the slate goes depends on where she's going.
    15: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: slate,
      reply: [R('good. never wipe it', 3, ['never', 'not even if it rains. i checked the forecast']),
        R('thank u for this year', 2, ['dont', "...ok. thank u back. that's a wrap"])],
      variants: {
        R: { msgs: [M("the slate's packed"), M("it's coming home with us. it's going on the lab wall over ur chair")],
          reply: [R('doyoung is gonna hate it', 3, ["he's gonna hate it so much", "he's gonna leave it up"]),
            R('one walk. i didnt forget', 2, ['noted', 'i wrote it down. on the slate. in chalk'])] },
        S: { msgs: slate,
          reply: [R('never wipe it.', 3, ['never', 'not even if it rains']),
            R('thank you for asking me, all year.', 2, ['dont', "...ok. thank you for saying yes. that's a wrap"])] },
        H: { msgs: [M("the slate's on my windowsill"), M('i wrote tk 42 on it. for u getting there ok. its a long take')],
          reply: [R('TK 42 IM CRYING IN A KONBINI', 3, ['good', 'i mean. not good. u know what i mean']),
            R('U BETTER SHOW THEM. U HAVE MY YES', 2, ['saving it', 'one time. a good time'])] },
        stay: { msgs: [M('i left the slate on ur desk'), M("it's yours. it's the only thing i'm not taking")],
          reply: [R('i will keep it forever', 3, ['dont clean it', "it's continuity"]),
            R('u r taking the camera tho', 2, ['the camera comes with me', 'the slate stays w u. thats the deal'])] },
        true: { msgs: [M('the slate says tk 1 on both sides now'), M("so whichever way up u find it. it's the start")],
          reply: [R('whichever way up', 3, ['whichever way', "i'll be holding it. somewhere"]),
            R('show me over there', 2, ['first day', 'lights off'])] }
      } }
  });

  /* ── A late call ── */
  addNights([
    { id: 'r15-minji-ln-logging', kind: 'call', rank: 11, after: '2/3', until: '3/2', when: 'quiet', flag: 'year-goes-on', place: "Iwatodai Dorm · Solar's Room", time: 'Night · 1 AM', music: 'night', scene: [
      { n: "Her phone went at one. Not a text. Minji never called. She'd said once that calling was for emergencies and dentists, and Solar answered it lying down in the dark, already half sure something was wrong." },
      { s: 'minji', f: 'neutral', t: "Nothing's wrong. I'm logging. I've got nine hours left to log, and if I do them alone I'm going to start talking to the desk lady's rice crackers." },
      { s: 'minji', f: 'neutral', t: "Can you just stay on? You don't have to talk. I'll read you the timecodes. It's very boring. That's the point." },
      { n: "So she stayed on. Minji read timecodes in a low flat voice, *oh-four-twelve, river, lamp, out of focus*, *oh-four-nineteen, back in*, and every few minutes a train went in under the guesthouse window at her end and the glass hummed, and Solar, a station away, could hear it hum." },
      { ifRoute: 'romance', then: [
        { s: 'minji', f: 'neutral', t: "...Oh-five-oh-two. You. Laughing. In focus." },
        { n: "She didn't read the next one for a while. Solar didn't ask her to." }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Oh-five-oh-two. You. Laughing. Junpei's fault. Logged." }
      ] },
      { choose: [
        { t: "(Fall asleep to the timecodes.)", notes: 2, then: [
          { n: "She fell asleep somewhere in the sevens. In the morning there was a text with the exact minute she'd gone quiet, logged in Minji's leaning capitals like everything else. *01:47. SOL. ASLEEP. KEEPING.*" }
        ] },
        { t: "Read me the one you're scared to log.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "...Oh-six-thirty. Roof. December. You." },
          { n: "She didn't describe it. She logged it in the same flat voice as the gulls and the trains, and then said *okay*, and then said *thank you*, and then read the next one, which was Koromaru, asleep, again." }
        ] }
      ] }
    ] }
  ]);

  /* ── A routine ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'r15-minji-long-table', after: '2/10', until: '2/26', slot: 'early', schoolOnly: true, flags: ['year-goes-on'], events: ['a4-names'], ranks: { minji: 12 },
      place: 'Iwatodai Dorm · Dining Room', time: 'Morning', bg: 'iwatodaidorm-diningroom', scene: [
        { n: "Minji was at breakfast at seven with a tripod and Mitsuru's permission slip folded in her pocket, though the slip had technically expired, and she'd set the tripod at the far end of the long table and was moving people with two fingers on their shoulders, very gently, like furniture that belonged to somebody else." },
        { s: 'minji', f: 'neutral', t: "The whole table. One shot. More people than chairs, that's the shot. I want it to look crowded. I want it to look like nobody planned for this many of us." },
        { n: "It looked like nobody had. S.E.E.S. on the chairs, Hanni and Hyein squeezed onto the bench from the hall, Koromaru underneath with his chin on Ken's foot, Aigis standing at the end because she said standing was more efficient, and Junpei on a stool from the kitchen that was much too low, so that his chin was nearly in the rice." },
        { s: 'hyein', f: 'serious', t: "Can I fix my hair. I'm fixing my hair." },
        { s: 'hanni', f: 'happy', t: "You fixed it at the door. You fixed it on the stairs. It's fixed, Hyein." },
        { choose: [
          { t: "(Squeeze in at the end on half a chair.)", stat: { kindness: 1 }, then: [
            { n: "She took half of Fuuka's chair, and Fuuka moved over without being asked, and the two of them sat on one seat with their shoulders pressed together, and the little red light came on, and stayed on." }
          ] },
          { t: "(Say something that makes the whole table laugh at the same second.)", stat: { charm: 1 }, then: [
            { n: "She pointed out that Junpei's chin was in the rice. It was. The whole table went at once, Mitsuru too, hand over her mouth, and the light was on, and Minji said *that's the one* without even checking the screen." }
          ] }
        ] },
        { n: "Then everybody ate, and the tripod stayed up through the whole meal, running, pointed at nothing in particular, because Minji said the parts in between were the parts you ended up needing later." }
      ] }
  );
})();
