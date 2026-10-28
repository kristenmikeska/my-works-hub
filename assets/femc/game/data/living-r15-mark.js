/* Ranks 11-15 batch (2026-10-22): the living world around Mark's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js). Everything merges into
   FEMC_GAME_LINK_EXTRAS.mark; nothing is replaced.
   - afterRank 11-15 (11 → 2/5 the requests, 12 → 2/12 Valentine's windows, 13 → 2/19 the soft rice, 14 → 2/24 the borrowed
     guitar, 15 → 3/1 the title). Each reacts to the shared part of the rank scene, never to a choice in it. `variants` by
     heading change Solar's register (caps and keysmash for H, careful lowercase for S, "u" otherwise); 15's message changes
     with the heading too. A variant without `reply` uses the base replies.
   - routine 'r15-mark-commuters' (early, school days, 2/8-2/26, rank 11+): the seagull piano at twenty to eight.
   - lateNights 'r15-mark-ln-last-train' (a call, rank 12+, 2/13-3/2): he lives at the guesthouse, so 'call' only. Choices
     carry notes 2. Ends by 3/2 (3/3 late is the story's).
   Everything gates on 'year-goes-on'. His texting voice (markylee): lowercase, "word", "lol", "ofc", ":)", "its not on u". */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const M = (t) => ({ from: 'mark', t });
  const R = (t, notes, then) => ({ t, link: 'mark', notes, then: then.map(M) });
  const addRank = (rank) => { (X.mark ||= {}).afterRank = { ...((X.mark || {}).afterRank || {}), ...rank }; };
  const addNights = (list) => { (X.mark ||= {}).lateNights = [...((X.mark || {}).lateNights || []), ...list]; };

  /* ── afterRank 11-15 ── */
  const requests = [M('22 requests today'), M('one kid asked for the cat song 3 times in a row. i played it 3 times. i respect him')];
  const diagram = [M('hanni drew me another diagram'), M('theres a 4th kind of chocolate now. its for people on probation. she looked right at me. im keeping it anyway')];
  const rice = [M('mrs kanda says i used too much water'), M('she ate two bowls. she said it was too soft. she ate TWO bowls sol')];
  const guitar = [M('did the guitar make it home'), M('third shelf. tell me it was the third shelf')];
  const title = [M('i wrote it on the sheet music'), M('the title. then ur name. then mine')];

  addRank({
    // 2/5 the concourse: the notice on the piano, the list of requests.
    11: { slot: 'late', flag: 'year-goes-on', msgs: requests,
      reply: [R('omg write him down 3 times', 3, ['already did :)', 'with a little cat']),
        R('how many days left', 2, ["31. ok 30. im not counting", 'im counting'])],
      variants: {
        H: { msgs: requests, reply: [R('MARKY THE CAT SONG KID IS MY HERO', 3, ['he had a hat with ears on it', 'he came prepared']),
          R('HOW MANY DAYS LEFT', 2, ["30. dont yell at me in caps i can feel it"])] },
        S: { msgs: requests, reply: [R('write him down three times.', 3, ['already did :)', 'u sound so serious tonight. its kind of cute']),
          R('how many days are left?', 2, ['30. im not counting. im counting'])] }
      } },
    // 2/12 the back streets: Valentine's windows, Hanni's diagram.
    12: { slot: 'late', flag: 'year-goes-on', msgs: diagram,
      reply: [R('omg what does the 4th kind look like', 3, ['a bear. with a little badge', 'she drew the badge. its a good badge']),
        R('hanni is unwell', 2, ['hanni is a genius and i wont hear otherwise'])],
      variants: {
        H: { msgs: diagram, reply: [R('A BODYGUARD CHOCOLATE ASDFGHJ', 3, ['its very official', 'it has a badge sol']),
          R('HANNI IS UNWELL', 2, ['hanni is a genius and i wont hear otherwise'])] },
        S: { msgs: diagram, reply: [R('what does it look like?', 3, ['a bear. with a little badge', "she's very thorough"]),
          R('hanni thinks of everything.', 2, ['she really does. its a little scary'])] }
      } },
    // 2/19 the guesthouse kitchen: the cook's soft rice.
    13: { slot: 'late', flag: 'year-goes-on', msgs: rice,
      reply: [R('shes so proud of u', 3, ['she would never say that', 'she said it with her face though']),
        R('two bowls is a review', 2, ['five stars. two bowls.'])],
      variants: {
        H: { msgs: rice, reply: [R('TWO BOWLS IS A STANDING OVATION', 3, ['she would hate that u said that', 'she would also eat a third bowl']),
          R('MARKY SHE LOVES U', 2, ['she tolerates me. its better'])] },
        S: { msgs: rice, reply: [R("she's proud of you.", 3, ['she would never say that', 'she said it with her face though']),
          R("two bowls is a review.", 2, ['five stars. two bowls.'])] }
      } },
    // 2/24 the dorm steps: the borrowed guitar goes back the next day.
    14: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: guitar,
      reply: [R('third shelf. in tune', 3, ['wow. ok. thank u', 'tell no one']),
        R('the music teacher looked at me so weird', 2, ['thats fair. thats so fair', 'its not on u'])],
      variants: {
        H: { msgs: guitar, reply: [R('THIRD SHELF. MISSION COMPLETE', 3, ['bodyguard solar', 'it suits u']),
          R('I GOT A LOOK FROM A TEACHER BC OF U', 2, ['its not on u. ok its a little on me'])] },
        S: { msgs: guitar, reply: [R('third shelf. in tune.', 3, ['wow. ok. thank u', 'tell no one']),
          R('nobody asked.', 2, ['perfect. the best kind of crime'])] }
      } },
    // 3/1 the concourse: the song has a name.
    15: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: title,
      reply: [R('my name better be big', 3, ['biggest thing on the page', 'i went over it twice']),
        R('u get back ok?', 2, ['thats my line', 'yes. i got back :)'])],
      variants: {
        R: { msgs: [...title, M('see u at home. ill be the guy by the tree')],
          reply: [R('ill be the girl with the shoes', 3, ['word', 'bring the shoes']),
            R('my name better be big', 2, ['biggest thing on the page'])] },
        S: { msgs: [...title, M('ill play it with the middle empty. every time')],
          reply: [R("i'll listen for the horn.", 3, ['stop walking when u hear it', "that's an order"]),
            R('my name had better be big.', 2, ['biggest thing on the page'])] },
        H: { msgs: [...title, M('ill play it with the middle empty. nobody on the train')],
          reply: [R('SOMEBODY IS ON THE TRAIN MARKY', 3, ['i know', 'shes just on a different line']),
            R('MY NAME BETTER BE BIG', 2, ['biggest thing on the page'])] },
        stay: { msgs: [...title, M('ur note is still ur note. hum it at the trains')],
          reply: [R('all six an hour', 3, ['good', 'do all of them']),
            R('my name better be big', 2, ['biggest thing on the page'])] },
        true: { msgs: [...title, M('if u dont remember this ill play it till u do')],
          reply: [R('play it a lot', 3, ['so much', 'so much it sticks to something']),
            R('my name better be big', 2, ['biggest thing on the page'])] }
      } }
  });

  /* ── Late night ── */
  addNights([
    { id: 'r15-mark-ln-last-train', kind: 'call', rank: 12, after: '2/13', until: '3/2', when: 'quiet', flag: 'year-goes-on', place: "Iwatodai Dorm · Solar's Room", time: 'Night · 12 AM', music: 'night', scene: [
      { n: "Her phone went at five past midnight. Not a text. A call, which he never did, and when she picked it up there was no hello, only a sound, far away and thin, a bright little run of notes like a doorbell with ambitions, and then a long hush, and then his voice, too close to the phone, the way people talk when they think they're whispering." },
      { s: 'mark', f: 'neutral', t: "Did you hear it? The last one. The last chime of the night. I'm on the fire escape at the guesthouse. You can hear the whole station from here if nobody's running a dryer." },
      { s: 'mark', f: 'flustered', t: "I've never heard the last one. All month I've been at the piano for the six-forty and the seven-ten, and I realized I'd never once heard the station say goodnight. So I came out here. It's so cold. I'm in socks. I don't know why I'm in socks." },
      { n: "Behind him the city made its midnight sound, a long low hum with nothing in it, and somewhere under it the monorail going into the depot, slow, the rails ringing like a wet finger round a glass." },
      { s: 'mark', f: 'neutral', t: "It's in a different key from the others. The last one. A little lower. Like it's tired. I'm putting it at the end. After the crossing. I didn't know the song had an end until tonight." },
      { choose: [
        { t: "(Hum it back to him. A little lower. Tired.)", notes: 2, then: [
          { n: "She hummed it back into the phone, lying in the dark under her blanket, and got it wrong by half a step, and he didn't correct her. He was quiet so long she thought the call had dropped, and then she heard him breathe out, and the fire escape creak, and him say *yeah,* very softly, to nobody, and then *goodnight, Sol,* and he was gone." }
        ] },
        { t: "Go inside, Marky. Put on real socks.", notes: 2, then: [
          { s: 'mark', f: 'neutral', t: "Okay. Okay. Going. Bodyguard orders. Reversed. I'm the one being guarded now. This is a whole new dynamic." },
          { n: "She heard the window, and the warmth of a room come over the line all at once like a door opening onto a party, and him say *goodnight* in his normal voice, the daytime one, and then, as if he couldn't help it, *u get back ok?* even though she hadn't been anywhere." }
        ] }
      ] }
    ] }
  ]);

  /* ── A routine ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'r15-mark-commuters', after: '2/8', until: '2/26', slot: 'early', schoolOnly: true, flags: ['year-goes-on'], ranks: { mark: 11 },
      place: 'Port Island Station · Central Concourse', time: 'Morning', scene: [
        { n: "At twenty to eight the concourse at Port Island was a river of navy uniforms and black coats going one way, toward the school and the offices, and against the current of it, on the bench by the seagull piano, Mark was playing something slow with a paper cup of station coffee balanced on the lid and the request notebook open beside it, his hair still wet, his eyes not entirely open." },
        { s: 'mark', f: 'neutral', t: "Morning requests. Nobody asks for anything in the morning. Everyone's too sad. I'm playing them what I think they'd ask for. It's a public service." },
        { n: "A man in a gray suit slowed as he went past, and listened for four whole steps, and then hurried on, and Mark wrote him down anyway. *Man in gray. Would've asked for something by a river.*" },
        { choose: [
          { t: "(Request something for the morning. Something that wakes you up.)", stat: { charm: 1 }, then: [
            { n: "He played her the cheerful pop song with the key change he always jumped like a fence, at a quarter of the speed, and then at full speed, and a girl from her class going past at a run turned round and walked backward three steps to see who it was, and waved at Solar, and Solar waved back before she'd decided to." }
          ] },
          { t: "Go back to bed, Marky.", stat: { kindness: 1 }, then: [
            { s: 'mark', f: 'neutral', t: "I can't. The piano needs me. It's got less than a month left. You don't sleep through the last month of something." },
            { n: "But he finished the coffee, and closed the notebook, and when she looked back from the escalator up to the school exit he had his head down on the piano lid, on his folded arms, beside the seagulls, asleep in the middle of the river of uniforms like a stone the water went round." }
          ] }
        ] }
      ] }
  );
})();
