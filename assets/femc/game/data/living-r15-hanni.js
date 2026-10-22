/* Ranks 11-15 batch (2026-10-22): the living world around hanni's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js). Everything merges into
   FEMC_GAME_LINK_EXTRAS.hanni; nothing is replaced.
   - afterRank 11-15 (11 → 2/1 the third receipt, 12 → 2/8 her cold, 13 → 2/15 the flower stall, 14 → 2/22 the river,
     15 → 3/1 the last page): each reacts to the shared part of the rank scene, never to a choice in it. The route is locked
     by February, so they carry `variants` by heading where Solar's register changes: lowercase and "u" in the Runners one
     (R, and the base), careful lowercase in the strangers one (S), caps and keysmash in the Hoax one (H). 15's message
     changes with every heading (what happened to the notebook depends on it).
   - routine (1): 'r15-hanni-glasses' (early, 2/16-2/27, rank 12+): the kitchen at six, a glass for everyone.
   - lateNights (1): 'r15-hanni-ln-count' (kind 'dorm', rank 12+, 2/9-3/2, quiet nights): the count. Reads hanni-knock
     (rank 5) for whether she knocks or leaves her door open. Choices carry notes 2.
   Everything gates on 'year-goes-on', and nothing lands on 2/14 (her Valentine's invite, living-march.js). Her texting
   voice: @hanni, lowercase, "!!!", apologizes for being nosy. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const H = (t) => ({ from: 'hanni', t });
  const R = (t, notes, then) => ({ t, link: 'hanni', notes, then: then.map(H) });
  const addRank = (rank) => { (X.hanni ||= {}).afterRank = { ...((X.hanni || {}).afterRank || {}), ...rank }; };
  const addNights = (list) => { (X.hanni ||= {}).lateNights = [...((X.hanni || {}).lateNights || []), ...list]; };

  /* ── afterRank 11-15 ── */
  const receipt = [H('ok i wrote todays good thing on the receipt!!!'), H('the 2nd one. after urs. ur not allowed to read it'), H('ok u can read it in march. sorry. nosy. not nosy. the opposite of nosy')];
  const alive = [H('im alive!!!'), H('hyein says i snored. i did NOT snore. i breathed with confidence'), H('thank u for the fruit. i ate all of it. even the brown apple')];
  const okada = [H('SOL the flower lady called the dorm!!!'), H('mitsuru answered!!! mitsuru!!!'), H('she wanted to check how big enormous is. mitsuru said "very" and hung up')];
  const bud = [H('i went back to the river after dinner'), H('the bud opened more. like a whole extra millimeter'), H("i'm not crazy. ok i'm a little crazy. its a good crazy")];

  addRank({
    // 2/1 Chagall: the third receipt.
    11: { slot: 'evening', flag: 'year-goes-on', msgs: receipt,
      reply: [R('omg u cant just say that and not tell me', 3, ['i can and i did!!!', 'march. its 4 weeks. u can survive 4 weeks']),
        R('was it about the tarts', 2, ['...maybe', 'he made a whole new batch for tmrw. one teaspoon less. i saw the note'])],
      variants: {
        S: { msgs: receipt, reply: [R("i'll wait. i'm good at waiting.", 3, ['u ARE good at waiting', 'thats why ur getting 2 good things tmrw. 1 for waiting']),
          R('was it about the tarts?', 2, ['...maybe', 'one teaspoon less. he wrote it on his WRIST sol'])] },
        H: { msgs: receipt, reply: [R('HANNI THATS SO MEAN ASDFGHJKL', 3, ['IT IS NOT MEAN', 'its suspense. suspense is a gift']),
          R('IS IT ABOUT THE TARTS. ITS ABOUT THE TARTS', 2, ['...maybe!!!', 'one teaspoon less. hes taking notes'])] }
      } },
    // 2/8 the dorm kitchen: her cold; Solar did the fruit.
    12: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: alive,
      reply: [R('ur welcome. drink water', 3, ['yes mom', '...that was weird. i liked it. dont do it again. do it again']),
        R('u breathed SO confidently', 2, ['hyein filmed it on her phone. i made her delete it', 'she didnt delete it'])],
      variants: {
        S: { msgs: alive, reply: [R("you're welcome. please drink water.", 3, ['yes mom', "...that was weird. i liked it. don't do it again. do it again"]),
          R('are you still in three cardigans?', 2, ['two. i graduated to two', "hyein says that's growth"])] },
        H: { msgs: alive, reply: [R('DRINK WATER OR I WILL END U', 3, ['ok!!! ok i am drinking it rn', 'u sound like hyein. its scary. i love it']),
          R('CONFIDENT BREATHING IS STILL SNORING', 2, ['i will not be slandered in my own chat', 'ok i will. a little'])] }
      } },
    // 2/15 the flower stall: the bouquet is ordered.
    13: { slot: 'evening', flag: 'year-goes-on', msgs: okada,
      reply: [R('omg mitsuru knows about the bouquet now', 3, ['she said she wont tell anyone', 'she said it like a threat. i felt so safe']),
        R('very is the right answer tho', 2, ['it IS the right answer. i hate that shes right', 'hyein bought ribbon. so much ribbon'])],
      variants: {
        S: { msgs: okada, reply: [R("mitsuru knows about the bouquet now.", 3, ['she said she wont tell anyone', 'she said it like a threat. i felt so safe']),
          R('"very" is correct.', 2, ['it IS correct. i hate that', 'hyein bought ribbon. so much ribbon'])] },
        H: { msgs: okada, reply: [R('MITSURU SAID VERY???? ICONIC', 3, ['she hung up so fast', 'i think she was smiling. i could HEAR it']),
          R('HOW BIG IS THIS BOUQUET HANNI', 2, ['enormous', 'u heard me. u translated it'])] }
      } },
    // 2/22 the riverside: the one bud.
    14: { slot: 'late', flag: 'year-goes-on', msgs: bud,
      reply: [R('the good kind of crazy', 3, ['the best kind', 'today was a bad day and a good day. both. thank u for both']),
        R('did u wear the mittens', 2, ['yes!!! both!!!', 'ur doing it again. the mom thing. i noticed'])],
      variants: {
        S: { msgs: bud, reply: [R('the good kind.', 3, ['the best kind', 'thank u for today. the heavy part too. especially that part']),
          R('did you wear your mittens?', 2, ['yes!!! both!!!', "you're doing the mom thing. i noticed. i'm keeping it"])] },
        H: { msgs: bud, reply: [R('A WHOLE MILLIMETER???? HANNI', 3, ['A WHOLE ONE', 'ok i measured it with my eyes. its approximate']),
          R('GO TO BED ITS COLD', 2, ['going!!! going', 'thank u for today. the heavy part too'])] }
      } },
    // 3/1 Chagall: the last page.
    15: { slot: 'evening', flag: 'year-goes-on', msgs: [H('all three receipts are in my wallet now'), H("it doesn't close. i don't care. it's the best wallet in the world")],
      reply: [R('ur wallet is a library', 3, ['a library of u', 'thats the most embarrassing thing ive ever typed. not deleting it']),
        R('course girlie', 2, ['thats MY line', 'ok fine. its ours'])],
      variants: {
        R: { msgs: [H('the notebooks in my bag'), H("it's coming home"), H('so are u. i keep saying it to myself on the stairs')],
          reply: [R('first morning. 7am. the page', 3, ['sparkling water then the page', "it's a date. it's in the notebook. it's binding"]),
            R('course girlie', 2, ['thats MY line', 'ok fine. its ours'])] },
        S: { msgs: [H("there's a hole in my notebook now"), H("it's the best hole i've ever made")],
          reply: [R("it's somewhere safe. i promise.", 3, ['over ur heart?', 'dont answer that. i know. i saw']),
            R('course, girlie.', 2, ['thats MY line', 'ok fine. its ours. even there'])] },
        H: { msgs: [H("there's a hole in my notebook now"), H("it's the best hole i've ever made"), H('tell cherry about the bears. she knows. just tell her anyway')],
          reply: [R('ITS SAFE I PROMISE', 3, ['in a bear?', 'u dont have to tell me. i know its in a bear']),
            R('COURSE GIRLIE', 2, ['thats MY line', 'ok fine. its ours. in caps apparently'])] },
        stay: { msgs: [H('my bags so light without the notebook'), H('i keep reaching for it on the stairs. my hand thinks its still mine')],
          reply: [R('its in my bag. its safe', 3, ['i know', 'read the handover first. the mixer page. name tags are non negotiable']),
            R('u can read it anytime', 2, ['until the 6th', "i'm going to come read it every day. that's a threat"])] },
        true: { msgs: [H('i keep saying the page in my head'), H('so its in two places. my head and ur ears'), H('three if u count hyeins pink pen')],
          reply: [R('four. i know it by heart now', 3, ['FOUR', 'ok now im crying on the stairs. good crying']),
            R('course girlie', 2, ['thats MY line', 'ok fine. its ours'])] }
      } }
  });

  /* ── Late nights ── */
  addNights([
    { id: 'r15-hanni-ln-count', kind: 'dorm', rank: 12, after: '2/9', until: '3/2', when: 'quiet', flag: 'year-goes-on', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'night', scene: [
      { ifFlag: 'hanni-knock', then: [
        { n: "The knock came at the minute the green came up, twice, soft, the way it had come every night since October, and Solar knocked twice back, and then, because February had made her strange, opened the door, and Hanni was still standing there in the hall in her cream cardigan, with her knuckles still raised, not expecting it." }
      ], else: [
        { n: "Hanni's door at the end of the hall was open, the way it had been every night since October, the crack of lamplight across the floor, and Solar went down the hall in her socks and sat on the end of the bed without asking, the way she apparently always had, and Hanni moved her feet to make room without looking up from her notebook." }
      ] },
      { s: 'hanni', f: 'neutral', t: "I'm counting. Don't laugh. Every night since I got here. Every time the green comes up and stops, and then starts again. I was on thirty-six in October." },
      { s: 'hanni', f: 'sad', t: "I'm on a hundred and fifty-something now. I keep losing the something. It's the only number I've ever been scared to get to the end of." },
      { choose: [
        { t: "(Count the rest of tonight's with her. Out loud.)", notes: 2, then: [
          { n: "They counted nothing, because there was nothing to count, the clock on the wall stopped at midnight and the window green and the dorm silent around them, so they counted breaths instead, Hanni's meditation count, in and out, until the green went out of the window all at once like a held note ending, and Hanni wrote a number in the margin of the notebook, and didn't show her what it was." }
        ] },
        { t: "Then stop counting. Just for tonight.", notes: 2, then: [
          { s: 'hanni', f: 'surprised', t: "...Can I do that?" },
          { s: 'solar', f: 'neutral', t: "I'll count it for you. Tomorrow you can have it back." },
          { n: "Hanni closed the notebook and lay back against the headboard with her eyes shut, and for the first time since Solar had known her, which was either five months or her whole life, she didn't count anything at all, and fell asleep before the green went out, and Solar counted for both of them and kept the number to herself." }
        ] }
      ] }
    ] }
  ]);

  /* ── A routine ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'r15-hanni-glasses', after: '2/16', until: '2/27', slot: 'early', flags: ['year-goes-on'], ranks: { hanni: 12 },
      place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Six in the morning, the overhead light off and the window going gray, and Hanni at the counter in her cream cardigan pouring sparkling water from the big green bottle, slowly so it wouldn't fizz over. Not three glasses. A whole row of them, every glass the kitchen owned, lined up down the counter in a straight line, with a strip of masking tape on each one and a name on the tape in her round careful letters." },
        { s: 'hanni', f: 'neutral', t: "It's practice. For the handover. I want to see if I know everyone's glass. The little one's Ken's. The one with the chip is Junpei's because he chipped it. Koromaru's is a bowl. That's not a glass, I know. He's still getting one." },
        { n: "There was one at the very end with no tape on it at all." },
        { choose: [
          { t: "Whose is that one?", stat: { kindness: 1 }, then: [
            { s: 'hanni', f: 'happy', t: "Whoever comes down next. That's how kitchens work. There's always one more glass than you think." },
            { n: "The stairs creaked, right on cue, and somebody came down, and Hanni handed them the glass without even looking to see who it was." }
          ] },
          { t: "(Write *Hanni* on a strip of tape. Put it on the last one.)", stat: { charm: 1 }, then: [
            { s: 'hanni', f: 'surprised', t: "...I don't have a glass. I just use whichever one's left." },
            { s: 'solar', f: 'neutral', t: "Now you've got one." },
            { n: "Hanni looked at the tape for a long moment, and then drank out of the glass with her name on it, very carefully, both hands, like it was the first glass anyone had ever given her." }
          ] }
        ] }
      ] }
  );
})();
