/* Ranks 11-15 batch (2026-10-21): the living world around shinjiro's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js).
   He's in the coma at Tatsumi Memorial until rank 15 (2/27, forced) sets the flag 'shinji-awake'. Nothing here has him speak
   or move before that flag; everything after it keeps P3's framing (awake, fragile, a long way to go).
   - afterRank 11-14: texts from the people keeping him going (Akihiko on 11 and 13, Ken on 12 and 14), reacting to the scene,
     never to a choice. afterRank 15: his first text since 10/3, two days later, shaky.
   - Routines (all 'year-goes-on', rank 10+ with him): Koromaru by the door and Junpei's rice (before he wakes), and the dorm
     the first morning after (after he wakes). Ids r15-shinjiro-*. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, rank) => { (X[id] ||= {}).afterRank = { ...((X[id] || {}).afterRank || {}), ...rank }; };

  /* ── Texts after his ranks 11-15 ── */
  add('shinjiro', {
    11: { thread: 'akihiko', slot: 'evening', delay: 1, msgs: [
      { from: 'akihiko', t: 'i bought steel wool' }, { from: 'akihiko', t: 'a lot of steel wool' },
      { from: 'akihiko', t: "next time i'm not touching the flame. i wrote it on my hand" }],
      reply: [
        { t: 'u will touch the flame', link: 'shinjiro', notes: 2, then: [{ from: 'akihiko', t: 'i will not' }, { from: 'akihiko', t: "...i'll let you stand between me and the flame" }] },
        { t: 'tastes like camping', link: 'shinjiro', notes: 3, then: [{ from: 'akihiko', t: '...yeah' }, { from: 'akihiko', t: 'it does' }] }
      ] },
    12: { thread: 'ken', slot: 'evening', delay: 1, msgs: [
      { from: 'ken', t: 'Solar-san, Koromaru smelled your coat for a very long time this morning.' },
      { from: 'ken', t: 'Then he sneezed.' }, { from: 'ken', t: 'Did you meet a cat?' }],
      reply: [
        { t: 'i met a cat', link: 'shinjiro', notes: 2, then: [{ from: 'ken', t: 'I thought so. He seemed to approve. Mostly.' }] },
        { t: 'koromaru is a snitch', link: 'shinjiro', notes: 2, then: [{ from: 'ken', t: 'He is very honest. It is one of his qualities.' }, { from: 'ken', t: 'Was it a nice cat?' }] }
      ] },
    13: { thread: 'akihiko', slot: 'late', delay: 1, msgs: [
      { from: 'akihiko', t: 'sorry for talking your ear off' },
      { from: 'akihiko', t: "i haven't said most of that out loud since i was twelve" },
      { from: 'akihiko', t: "he really did sing. i'll prove it someday. he'll deny it" }],
      reply: [
        { t: 'u can talk my ear off anytime', link: 'shinjiro', notes: 3, then: [{ from: 'akihiko', t: "careful. i've got twelve years saved up" }] },
        { t: 'ur both terrible singers', link: 'shinjiro', notes: 2, then: [{ from: 'akihiko', t: "i'm a GREAT singer" }, { from: 'akihiko', t: 'he taught me. so. no. you have a point' }] }
      ] },
    14: { thread: 'ken', slot: 'evening', delay: 1, msgs: [
      { from: 'ken', t: 'Solar-san. Koromaru stayed by the door until eleven last night.' },
      { from: 'ken', t: 'His tail did it again. Twice.' }, { from: 'ken', t: 'I wrote it down.' }],
      reply: [
        { t: 'good. keep writing it down', link: 'shinjiro', notes: 3, then: [{ from: 'ken', t: 'I will. With the time.' }] },
        { t: 'did u change the tape again', link: 'shinjiro', notes: 2, then: [{ from: 'ken', t: '...That is not related.' }, { from: 'ken', t: 'Yes.' }] }
      ] },
    15: { slot: 'evening', delay: 2, msgs: [
      { from: 'shinjiro', t: 'you eat yet' },
      { from: 'shinjiro', t: 'aki holding the phone. hands dont work rihgt' },
      { from: 'shinjiro', t: 'dont laugh' },
      { from: 'shinjiro', t: 'cat' }],
      reply: [
        { t: 'i ate. for real this time', link: 'shinjiro', notes: 2, then: [{ from: 'shinjiro', t: 'liar' }, { from: 'shinjiro', t: 'eat again' }] },
        { t: 'the cat is fed. not the canned garbage', link: 'shinjiro', notes: 3, then: [{ from: 'shinjiro', t: 'good' }, { from: 'shinjiro', t: '...thanks' }, { from: 'shinjiro', t: 'aki says i have to say i said that. i didnt' }] }
      ] }
  });

  /* ── Routines: February to the first days of March ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // Before he wakes: the dog by the door.
    { id: 'r15-shinjiro-by-the-door', after: '2/4', until: '2/12', slot: 'evening', flags: ['year-goes-on'], noFlags: ['shinji-awake'],
      ranks: { shinjiro: 10 }, place: 'Iwatodai Dorm · Hallway', time: 'Evening', bg: 'iwatodaidorm-hallway', scene: [
        { n: "A little before nine Koromaru got up off the lounge rug, where he'd been lying on Junpei's socks, and walked out into the front hall without being called, and lay down on the bare tiles inside the door with his chin on his paws and his face to it. Under the coat rack. Under the long coat nobody wore and nobody took down." },
        { n: "Mitsuru came down the stairs with her shoes in her hand on her way somewhere, and stopped, and looked at him, and stepped over him with great care, and put her shoes on sitting on the step instead of standing, so she wouldn't have to move him." },
        { s: 'mitsuru', f: 'neutral', t: "He's been doing it on and off since the start of the month. I've asked the vet. The vet says he's a dog." },
        { choose: [
          { t: "(Bring him the folded blanket from the lounge.)", stat: { kindness: 1 }, then: [
            { n: "She brought the blanket from the back of the couch and folded it in four and put it on the tiles by his side. He didn't get on it. He shifted, a few centimeters, so his back was against it, and kept watching the door. Mitsuru watched him do it from the step, and finished tying her shoe very slowly." }
          ] },
          { t: "He's waiting for somebody.", then: [
            { s: 'mitsuru', f: 'sad', t: "...I know. I didn't ask the vet about that part." },
            { n: "She went out. She closed the door behind her very gently, so it wouldn't make the sound he was listening for." }
          ] }
        ] }
      ] },
    // Before he wakes: Junpei, who learned rice from him in September, practicing for a quiz nobody's set.
    { id: 'r15-shinjiro-junpei-rice', after: '2/8', until: '2/24', slot: 'evening', flags: ['year-goes-on'], noFlags: ['shinji-awake'],
      ranks: { shinjiro: 10 }, place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Junpei was at the sink with his cap on backward, washing rice. He'd been washing it for a while. The water in the bowl was already clear, perfectly clear, and he kept going anyway, slow, his whole hand in it, turning the grains over the way you'd turn over a thought." },
        { s: 'junpei', f: 'neutral', t: "Senpai's gonna quiz me. When he's up. First thing, he's gonna come down here and go, Iori, rice, and stand there with his arms folded like a judge on TV." },
        { s: 'junpei', f: 'happy', t: "So I'm studying. This is studying. Don't tell Mitsuru-senpai this is the only thing I'm studying." },
        { choose: [
          { t: "(Quiz him. Arms folded. Like a judge on TV.)", stat: { charm: 1 }, then: [
            { n: "She folded her arms and stood behind him and said *rice, pot, how much water*, flat and low, and Junpei went rigid and then held up his hand, fingers flat, and touched his thumb to the first joint of his middle finger, and looked at her over his shoulder, terrified and proud." },
            { s: 'junpei', f: 'happy', t: "...Did I pass? Dude. Tell me I passed." }
          ] },
          { t: "The water's clear, Junpei.", stat: { proficiency: 1 }, then: [
            { s: 'junpei', f: 'sad', t: "I know. I know it is. I just." },
            { n: "He didn't finish. He kept his hand in the cold water a second longer, and then tipped it out, and put the pot on, and didn't lift the lid once, the whole time, and she stood with him until it clicked over to warm." }
          ] }
        ] }
      ] }
  );
  /* After he wakes: the next morning at the dorm. A story event (unlock: his rank 15 and shinji-awake), so it plays the first
     early morning after his waking without taking a routine's turn in the crowded last days (core.js dueEvent / unlockMet). */
  (W.FEMC_GAME_EVENTS ||= []).push(
    { id: 'r15-shinjiro-awake-morning', date: '2/28', slot: 'early', flag: 'year-goes-on', unlock: { flags: ['shinji-awake'], ranks: { shinjiro: 15 }, until: '3/4' },
      title: 'good day', place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', scene: [{ bg: 'iwatodaidorm-kitchen' },
        { n: "Somebody had written on the fridge in the night. Under the note in its fresh tape, DOG, REAL FOOD, 1 CUP, NOT THE CANNED GARBAGE, in Junpei's fat marker, HE'S AWAKE!!!, and under that, in Fuuka's neat hand, *he is :)*, and under that, in pink glitter gel, a small wobbly heart that nobody would admit to, and under all of it, in pencil, so light you had to tilt your head, *good day*." },
        { n: "Ken was at the counter, dressed already, making the dog's breakfast, exactly, the cup levelled with the back of a knife. He had a folded sheet of paper in his breast pocket, behind his student ID. It had been folded and unfolded so many times the creases had gone soft." },
        { s: 'ken', f: 'neutral', t: "Good morning, Solar-san. I'm going this afternoon. Akihiko-san says they'll let me in for ten minutes." },
        { s: 'ken', f: 'serious', t: "I picked one. Of the eleven. I don't know if it's the right one." },
        { choose: [
          { t: "I'll come with you.", stat: { kindness: 1 }, then: [
            { s: 'ken', f: 'neutral', t: "...To the door. And then, if I look at you, in." },
            { s: 'solar', f: 'neutral', t: "If you look at me." },
            { n: "He nodded once, hard, and carried the bowl out to the front hall in both hands. Koromaru wasn't lying by the door. He was on the rug in the lounge, on his back, all four feet in the air, asleep, snoring, for the first time in a month." }
          ] },
          { t: "He'll like whichever one you read.", stat: { courage: 1 }, then: [
            { s: 'ken', f: 'neutral', t: "He won't like any of them. He'll say *tch*." },
            { s: 'ken', f: 'happy', t: "...That's all right. I'd like to hear him say *tch*." }
          ] }
        ] }
      ] }
  );
})();
