/* Ranks 11-15 batch (2026-10-21): the living world around jungwon's last five ranks (February to early March).
   Filled in by this batch's writer. Same formats as the other living-* files (core.js link-format header, daily-life.js).
   - afterRank 11-15 (FEMC_GAME_LINK_EXTRAS.jungwon.afterRank): each reacts to the rank scene, never to a choice in it.
     The route is locked by February, so they carry `variants` by heading where Solar's register changes: caps and
     keysmash in the Hoax register (H), careful lowercase in the strangers one (S), lowercase and "u" otherwise.
     15's message changes with the heading too (on 'stay' he gave her the minutes book).
   - lateNights (2): 'r15-jungwon-ln-trains' (a call, rank 11+) and 'r15-jungwon-ln-tide' (a visit at the gate, rank 13+). He lives at
     the guesthouse, so only 'call' / 'visit'. Both end by 3/2 (3/3 late is the story's). Choices carry notes 2.
   - routine (1): 'r15-jungwon-monorail' (early, school days, 2/3-2/26, rank 11+): he rides the school monorail with her.
   Everything gates on 'year-goes-on'. His texting voice: lowercase, with apostrophes and full stops. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const J = (t) => ({ from: 'jungwon', t });
  const R = (t, notes, then) => ({ t, link: 'jungwon', notes, then: then.map(J) });
  const addRank = (rank) => { (X.jungwon ||= {}).afterRank = { ...((X.jungwon || {}).afterRank || {}), ...rank }; };
  const addNights = (list) => { (X.jungwon ||= {}).lateNights = [...((X.jungwon || {}).lateNights || []), ...list]; };

  /* ── afterRank 11-15 ── */
  const ribbon = [J("i've put the ribbon back in the black one."), J('it keeps ending up in the red one. i don\'t know how.')];
  const key = [J('i handed it over.'), J('eleven minutes. i made a speech. she cried. i think from fear.')];
  const coat = [J("the coat's back in the wardrobe."), J("the pin's still on it. i've decided not to take it off.")];
  const minutes = [J("i've read the minutes again."), J('all of them. they hold up.')];

  addRank({
    // 2/2 council room: two books, one ribbon.
    11: { slot: 'evening', flag: 'year-goes-on', msgs: ribbon,
      reply: [R('omg u did that on purpose', 3, ["i don't do things on purpose.", '...i did that on purpose.']),
        R('let them find out about each other', 2, ["they have. they're not speaking."])],
      variants: {
        H: { msgs: ribbon, reply: [R('WON THE RIBBON KNOWS WHERE IT LIVES', 3, ["it's a very well-informed ribbon.", 'it keeps choosing the seventh.']),
          R('ok but did u eat dinner', 2, ['the ribbon and i are both declining to comment.'])] },
        S: { msgs: ribbon, reply: [R('leave it where it wants to be.', 3, ["it wants to be in pencil. i've explained that isn't how ribbons work.", "it isn't listening. it takes after you."]),
          R('did you write anything else?', 2, ["no. i'm still working out how to ask it."])] }
      } },
    // 2/9 the guesthouse lobby: chapter seven, page two-twelve.
    12: { slot: 'late', flag: 'year-goes-on', msgs: [J('jihoon did page two-twelve after you left.'), J("all of it. he's asked me not to tell anyone. i'm telling you.")],
      reply: [R('omg tell him im proud of him', 3, ["he'll pretend he didn't hear it.", 'he heard it.']),
        R('was it right', 2, ['two mistakes. both signs.', 'he flips them the same way you do. i didn\'t tell him that either.'])],
      variants: {
        H: { msgs: [J('jihoon did page two-twelve after you left.'), J("all of it. he's asked me not to tell anyone. i'm telling you.")],
          reply: [R('PARK JIHOON DID MATH???? SCREENSHOTS OR IT DIDNT HAPPEN', 3, ["i'm not photographing jihoon.", '...i photographed the page.']),
            R('ASDFGHJ TELL HIM IM PROUD', 2, ['i did. he threw a croissant at me.', 'an ugly one. from the left.'])] },
        S: { msgs: [J('jihoon did page two-twelve after you left.'), J("all of it. he's asked me not to tell anyone. i'm telling you.")],
          reply: [R("tell him i'm proud of him.", 3, ["he'll pretend he didn't hear it.", 'he heard it.']),
            R('was it right?', 2, ['two mistakes. both signs.', 'he flips them the same way you do.'])] }
      } },
    // 2/16 the key: handed over the next day.
    13: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: key,
      reply: [R('omg did u do the second side', 3, ['no. i stopped before the second side.', 'i was told to. twice.']),
        R('eleven minutes is so long', 2, ["kirijo-san's was four. she's texted me. it just says \"eleven.\""])],
      variants: {
        H: { msgs: key, reply: [R('WON. ELEVEN MINUTES.', 3, ["i'm aware.", 'she clapped at the end. i think from relief.']),
          R('DID U EAT LUNCH FIRST', 2, ['yes. before. on purpose.', "don't make a face. i can hear you making it."])] },
        S: { msgs: key, reply: [R('did it feel like giving something back?', 3, ['yes.', 'i was polite the whole time. you know what that means.']),
          R("i'm proud of you.", 2, ['...thank you.', "nobody's ever said that to me about giving something away."])] }
      } },
    // 2/23 the pier: the other coat.
    14: { slot: 'late', flag: 'year-goes-on', msgs: coat,
      reply: [R('it looks good there', 3, ['it looks absurd.', 'thank you.']),
        R('the other one is scary btw', 2, ['i know. i saw your face.', "he's only scary to men with coolers."])],
      variants: {
        H: { msgs: coat, reply: [R('A SCHOOL PIN ON CASHMERE???? ICONIC', 3, ['sunoo said the same thing.', 'in the same capitals.']),
          R('THE OTHER COAT IS SCARY BTW', 2, ['i know. i saw your face.', 'the president is much nicer. tell everyone.'])] },
        S: { msgs: coat, reply: [R('it looks right there.', 3, ['it looks absurd.', "thank you. i'm keeping it."]),
          R('goodnight, jungwon-ssi.', 2, ["you're trying to make me angry.", "it isn't working. goodnight."])] }
      } },
    // 3/1 the last meeting: adjourned.
    15: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: minutes,
      reply: [R('read them every morning', 3, ['i will.', 'i already do.']),
        R('u better not get sad about it', 2, ["i'll be gracious. it was in the motion. it's binding."])],
      variants: {
        H: { msgs: minutes, reply: [R('WON GO TO SLEEP ITS A SCHOOL NIGHT IN TWO DIMENSIONS', 3, ["it's four in the afternoon.", "i'll go to bed early. to practice."]),
          R('EIGHT OCLOCK ROW THREE!!!', 2, ['row three.', "i'll be in row one. i won't look."])] },
        S: { msgs: minutes, reply: [R("i'm glad you kept them.", 3, ['so am i.', "i'd like you to know i'm keeping everything."]),
          R("you said the word wasn't for a room.", 2, ["it isn't. it still isn't."])] },
        R: { msgs: [J("i've read the minutes again."), J('the book has a hole at the front now where the first page was. i\'ve decided that\'s correct.')],
          reply: [R('i put the page in my wallet', 3, ['good.', "that's where i'd have put it. folded once."]),
            R('u better not get sad about it', 2, ["i'll be gracious. it was in the motion. it's binding."])] },
        stay: { msgs: [J('i keep reaching for the minutes book.'), J("it's at yours. that's correct. my hand hasn't been told.")],
          reply: [R("i'll keep them going", 3, ['i know you will.', 'write the date at the top. you always forget the date.']),
            R('u can come read them anytime', 2, ['until the sixth.', "i'll come every day. that's a threat."])] },
        true: { msgs: minutes, reply: [R('read them every morning', 3, ['i will.', 'in two rooms. i\'ll read them in both.']),
          R('even this room?', 2, ['especially this room.'])] }
      } }
  });

  /* ── Late nights ── */
  addNights([
    { id: 'r15-jungwon-ln-trains', kind: 'call', rank: 11, after: '2/3', until: '3/2', when: 'quiet', flag: 'year-goes-on', place: "Iwatodai Dorm · Solar's Room", time: 'Night · 12 AM', music: 'night', scene: [
      { n: "Her phone lit up at midnight. A call, not a text. In this whole world he was still the only person who called, and she knew it was him before she looked, the way you know a knock." },
      { s: 'jungwon', f: 'neutral', t: "I'm sorry. It's late. I'm not calling about a worksheet. I want to be clear about that from the start." },
      { s: 'jungwon', f: 'sad', t: "I started counting the nights. Until the sixth. I got to a number and stopped, because I'd have had to say it, and I don't want to have said it." },
      { n: "Behind his voice the trains were going into the depot by the station, one and then a long gap and then another, slow, the sound she'd heard behind him in November and hadn't known she'd been listening for until it came." },
      { ifHeading: 'H', then: [
        { s: 'jungwon', f: 'happy', t: "I keep thinking about the morning. You in row three. Me pretending not to turn round. It's the first morning in my life I've wanted to get to." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'jungwon', f: 'neutral', t: "In the other house the clock starts again the minute we're back. I'd like to be the one person in it who isn't counting." }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'jungwon', f: 'neutral', t: "You'll be on a different clock altogether. I looked up the time difference. I don't know why. I wrote it down in both books." }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'jungwon', f: 'neutral', t: "This is the clock you're keeping. I've been listening to it. The trains here are very punctual. I'd like you to know I approve of the clock." }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "You'll be on every clock at once. I've stopped trying to do the arithmetic. It's the first sum I've ever left unfinished on purpose." }
      ] }] }] }] },
      { choose: [
        { t: "(Count the trains with him instead.)", notes: 2, then: [
          { n: "They counted trains. He said the numbers, she said the numbers, a beat behind him, like a choir that hadn't rehearsed. At seven he said goodnight, formally, in full, and she said it back, and neither of them hung up for another train, and then another, and then he did, and she lay there with the warm phone on her chest and didn't count anything." }
        ] },
        { t: "Don't say the number. Say goodnight.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "Goodnight." },
          { n: "A train went by under it, long and slow. She waited. He knew she was waiting." },
          { s: 'jungwon', f: 'neutral', t: "...Goodnight, Solar." }
        ] }
      ] }
    ] },
    { id: 'r15-jungwon-ln-tide', kind: 'visit', rank: 13, after: '2/17', until: '3/2', when: 'quiet', flag: 'year-goes-on', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { phone: [
        J("i'm at the gate."),
        J("not to come in. i'm aware of the time."),
        J("it's low tide at ten past one. i checked the table for this bay.")
      ], contact: 'Jungwon' },
      { n: "He was at the gate under the streetlight with his coat buttoned to the throat and a steel thermos held in both gloved hands like an offering at a shrine, and his breath going up white, and he didn't come any closer when she came down the path in her socks and her coat over her pajamas. He waited for her to decide how close. He always did." },
      { s: 'jungwon', f: 'neutral', t: "Barley tea. It's still hot. In the other house you can't sleep at low tide. I don't know if that's true here. I thought I'd rather be wrong with a thermos than right without one." },
      { n: "She hadn't been sleeping. Not well, not since February had started, not between one and two, when she'd lie on her back in the dark with her eyes open and something in her body listening for a sound that never came, and she'd never once thought to ask what it was listening for. Her body knew the tables. Her head had just found out." },
      { ifHeading: 'S', then: [
        { s: 'jungwon', f: 'neutral', t: "You'll go home to the tables. I'd like you to know there'll be one person in that house who checks them for you. Without being asked. Every night." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'jungwon', f: 'happy', t: "There's no sea at Hanlim. You'll sleep. I checked that too. I'm told you'll sleep through your alarm, which is the other problem." }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "Wherever you sleep after the sixth, I hope it's somewhere the tide doesn't get a vote." }
      ] }] },
      { choose: [
        { t: "(Sit on the step. Drink it with him.)", notes: 2, then: [
          { n: "They sat on the cold step with the thermos between them and drank out of its one cup, taking turns, the barley tea toasted and bitter and hot enough to feel all the way down. At ten past one exactly he looked at his stopped watch out of habit, and then at her, and she yawned, enormously, and he looked so pleased with himself that she didn't tell him it was the tea." }
        ] },
        { t: "(Take the thermos. Send him home before he freezes.)", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "I'm not cold." },
          { s: 'solar', f: 'happy', t: "Your ears are purple." },
          { n: "He went. At the corner he turned round and bowed, a full proper bow, to the girl in socks at the gate holding his thermos, and was gone. She drank the tea at her window. She slept at a quarter past one, and didn't wake until Fuuka knocked." }
        ] }
      ] }
    ] }
  ]);

  /* ── A routine ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'r15-jungwon-monorail', after: '2/4', until: '2/26', slot: 'early', schoolOnly: true, flags: ['year-goes-on'], ranks: { jungwon: 11 },
      place: 'Iwatodai Station · Monorail', time: 'Morning', bg: 'train-car-inside', scene: [
        { n: "He was on the monorail platform at twenty to eight with a ring of flashcards in one gloved hand, the way he'd been on it every morning that week, although nobody at Gekkoukan expected either of them, and although he'd have had to explain to anybody who asked why a boy who didn't go to the school was riding the school train." },
        { n: "Nobody asked. The third-years who were still coming in had stopped asking anybody anything around the first of the month. They stood in the carriage with their own flashcards on their own rings, gray-faced, mouthing, and the bay went by underneath them flat and pale as a sheet of paper." },
        { s: 'jungwon', f: 'neutral', t: "Vocabulary. Ten words between here and the bridge. I've timed it." },
        { choose: [
          { t: "(Do the ten words.)", stat: { knowledge: 1 }, then: [
            { n: "She got eight. He said eight was very good, and that the two she'd missed were both words for *reluctant*, which he found significant, and wouldn't say why." }
          ] },
          { t: "(Read his flashcards back to him, in his assembly voice.)", stat: { charm: 1 }, then: [
            { n: "She read them in the bright booming voice he used for speeches, and he went red to the collar, and a first-year by the doors laughed out loud and then pretended he'd been coughing, and Jungwon thanked him for his attention, very politely, which shut him up all the way to Port Island." }
          ] }
        ] },
        { n: "At Port Island he got off with her and walked her to the gate and stopped exactly on the line where the school began, as though there were glass there, and bowed, and went back to the station to ride the train home again." }
      ] }
  );
})();
