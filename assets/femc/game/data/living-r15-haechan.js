/* Ranks 11-15 batch (2026-10-21): the living world around haechan's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js). Everything merges into
   FEMC_GAME_LINK_EXTRAS.haechan; nothing is replaced.
   - afterRank 11-15 (11 → 2/2 the hem, 12 → 2/9 go long, 13 → 2/16 seollal, 14 → 2/23 the cut, 15 → 3/1 untitled).
     They react to the shared part of each rank scene, never to a choice in it. Every one carries the locked route's
     `variants` (R / S / H / stay / true); a variant without `reply` uses the base replies, which fit every heading.
   - lateNights 'r15-hc-ln-two-of-him' (rank 11+, 2/3-2/13): the hem, finished, with Hyein (Runners) and Yunjin
     (strangers), who know two different Haechans. The two-lives joke lives here.
   - holidays '2/14' (Valentine's Day, which in 2010 is also Seollal; evening, rank 10+, flag year-goes-on): gloves,
     branched R / S / H / stay / true and by ifRomance 'haechan'.
   His texting voice: lowercase, flat, few words, no emoji. Solar's in hers ("u", "omg"). */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const addRank = (id, rank) => { (X[id] ||= {}).afterRank = { ...((X[id] || {}).afterRank || {}), ...rank }; };
  const addHol = (id, days) => { (X[id] ||= {}).holidays = { ...((X[id] || {}).holidays || {}), ...days }; };
  const addNights = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };
  const H = (t) => ({ from: 'haechan', t });
  const R = (t, notes, then) => ({ t, link: 'haechan', notes, then: then.map(H) });

  /* ── afterRank 11-15 ── */
  addRank('haechan', {
    // 2/2 laundry room: Hyein's coat, the hem pinned for tomorrow.
    11: { slot: 'late', msgs: [H('hyein finished the sleeves'), H('she made me hold them up for an hour'), H('my arms are a fashion casualty')],
      reply: [R('omg thank u for suffering', 3, ['anytime', 'not anytime. once']), R('did she do the hem', 2, ['she did the hem. she cried at the hem', 'i said nothing. i held the hem'])],
      variants: {
        R: { msgs: [H('sleeves are on'), H('she made the pockets longer'), H("a can fits. i checked. don't ask with what can")] },
        S: { msgs: [H('sleeves are on. collar up'), H("she says it's for a pier she's never seen"), H("i told her it's a good pier. it's a terrible pier. she doesn't need to know")] },
        H: { msgs: [H('sleeves are on'), H('she asked me if the star was too much'), H('i said no. it was the right amount')] },
        stay: { msgs: [H('sleeves are on'), H('she wants you to wear it next january'), H("she wrote it on the label. there's a label now")] },
        true: { msgs: [H('sleeves are on. both sides'), H("she's calling it the everything coat"), H("i said that's a bad name. she said so's mine")] }
      } },
    // 2/9 riverside: Jaehyun's football.
    12: { slot: 'late', msgs: [H('your brother texted me'), H('four words'), H('i read them nine times')],
      reply: [R('omg he texted u??', 2, ['he did. i nearly dropped my phone', 'i have good hands. apparently']),
        R('hes rly bad at texting', 3, ['he was fine. better than fine', "i'm keeping it"])],
      variants: {
        R: { msgs: [H('your brother texted me'), H('he wants my list for rush in the fall'), H("first time he's asked. i've had the list a year")] },
        S: { msgs: [H('your brother texted me'), H('a diagram. how to throw the pointy thing'), H("it's on my wall. i'll learn. stupid pointy idiot ball")] },
        H: { msgs: [H('your brother texted me'), H('two words. good seats'), H("i don't know what he means. i know what he means")] },
        stay: { msgs: [H('your brother texted me'), H("thanks. that's all it says"), H("i'm not answering it. some things you leave on the table")] },
        true: { msgs: [H('your brother texted me'), H('a diagram. how to throw it'), H('and under it. hands up. both of you')] }
      } },
    // 2/16 kitchen: the stockpot, the second bowl, Jungwon at the back door.
    13: { slot: 'late', msgs: [H('the pot is back at the guesthouse'), H('he texted to confirm receipt'), H('a yang texted me. to confirm receipt. of a pot')],
      reply: [R('omg he TEXTED u', 2, ["i'm not saving the number", 'i saved the number. under pot']),
        R('u were nice to him', 3, ["i wasn't nice. i was correct. it's different", 'he taught me that. tell no one'])],
      variants: {
        R: { msgs: [H('he texted to confirm the pot'), H("i didn't answer. then i did. one word. received"), H("what's happening to me. it's the snow. it's all snow in here now")] },
        S: { msgs: [H('the pot is back'), H('he texted. thank you for the second bowl. with a full stop'), H("jin says i'm not allowed to frame it. i'm framing it")] },
        H: { msgs: [H('he texted'), H('a question. which cans'), H('i sent him a picture of the wrong ones. he said noted')] },
        stay: { msgs: [H('he texted to confirm the pot'), H('and. other end of the train'), H('i said fine. jin says she has the middle. she says it like a sentence')] },
        true: { msgs: [H('he texted to confirm the pot'), H('ten meters. then a full stop'), H("he's going to be funny now. in two places. i can't take it")] }
      } },
    // 2/23 lounge: Minji's film of the year, his building under it.
    14: { slot: 'late', msgs: [H('minji sent the cut'), H('all eleven minutes'), H("don't watch it alone. or do. it's yours")],
      reply: [R('did u cry', 2, ['no', 'at the fridge part']), R('its so good', 3, ['she did that. i just made it hum', "...the hum's good though"])],
      variants: {
        R: { msgs: [H('minji sent the cut'), H('she left the long shots long'), H("i owe her. i'm never telling her")] },
        S: { msgs: [H('minji sent the cut. on a disc'), H('two discs'), H("one's going in a drawer. you'll know which")] },
        H: { msgs: [H('minji sent the cut'), H('it ends on a door'), H("best ending i've ever scored. i didn't score it. it's just a door")] },
        stay: { msgs: [H('minji sent the cut'), H('the dryer under the last shot'), H("you'll hear it. that's where you'll hear it, after. it's fine. it's on the disc")] },
        true: { msgs: [H('minji sent the cut'), H('three copies. a disc a phone a laptop'), H("she's planning to make you cry in three places. i'm helping")] }
      } },
    // 3/1 roof: the first warm night, the song gets its name.
    15: { slot: 'late', msgs: [H("it's saved"), H('twice')],
      reply: [R('play it again', 3, ['three. roof', "it's warm. no coat"]), R('i love what we called it', 2, ['you called it', 'i just typed'])],
      variants: {
        R: { msgs: [H("it's saved. name and all"), H("i'm playing it for you on a roof with a ladder. you're going to hate the ladder"), H('pretty girl')] },
        S: { msgs: [H('disc is burned'), H("it's in my jacket. i'm not telling you which pocket"), H('agasshi. sleep')] },
        H: { msgs: [H("it's on a stick now. the file"), H("for the place i'm not"), H("don't play it till you're there. or do. it's yours")] },
        stay: { msgs: [H("it's on a disc. the disc stays"), H("mitsuru says she'll keep it in the command room till you want it. she said it like a promise"), H("it's a good room. big chair")] },
        true: { msgs: [H("it's saved in everything i could find"), H('a disc. a laptop. a phone'), H("the third one i'm guessing. i'm usually right")] }
      } }
  });

  /* ── A late night: the hem, finished, and two girls who know two different boys ── */
  addNights('haechan', [
    { id: 'r15-hc-ln-two-of-him', kind: 'dorm', rank: 11, flag: ['year-goes-on', 'arrived-hyein', 'arrived-yunjin'],
      after: '2/3', until: '2/13', place: 'Iwatodai Dorm · Laundry Room', time: 'Late Night', music: 'joy', scene: [
      { n: "The hem took three nights. On the third, at a quarter past one, the laundry room had turned into a sewing room with a dryer in it, Hyein's machine on the folding table and the coat over the back of a chair with its sleeves on at last, a pincushion shaped like a tomato on the windowsill, and Yunjin sitting on the cold dryer in her yellow puffer peeling a mikan, who had come down, she said, for a glass of water, forty minutes ago." },
      { n: "Haechan was on the warm dryer. Hyein had given him the hem to hold." },
      { s: 'yunjin', f: 'neutral', t: "So this is what you do down here. I always wondered. I pictured something darker. Knives. A ledger." },
      { s: 'haechan', f: 'neutral', t: "Hem." },
      { s: 'yunjin', f: 'happy', t: "Hem. Babe. The dog does hems now." },
      { s: 'hyein', f: 'surprised', t: "The DOG? Why do you call him the dog?" },
      { s: 'yunjin', f: 'neutral', t: "Because he's the dog. It's practically his title. What do you call him?" },
      { s: 'hyein', f: 'serious', t: "The recruitment chair, when he's being one. Haechan, mostly. He's so quiet, Jin. He's SO quiet. He says four words a day and three of them are *princess*." },
      { s: 'yunjin', f: 'surprised', t: "Quiet? Babe. He sings trot in the car. With the window down. Through the TOLL BOOTH." },
      { n: "They both turned and looked at him. He sat on the dryer with a hem across his knees and looked back, at one and then the other, and his face did nothing at all, very evenly, like a man being described to a police artist by two witnesses who'd seen two completely different crimes." },
      { s: 'haechan', f: 'neutral', t: "Don't ask me which one of me is in the room. It's whichever one's losing." },
      { ifHeading: 'R', then: [
        { s: 'yunjin', f: 'sad', t: "...It's the quiet one, isn't it. That's the one going home with her." },
        { s: 'haechan', f: 'neutral', t: "He's not quiet. He's saving it." },
        { s: 'hyein', f: 'happy', t: "He IS quiet. He's the quietest. I love him. Don't tell him." },
        { s: 'haechan', f: 'neutral', t: "I'm right here." }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'hyein', f: 'sad', t: "And the loud one's the one going home with her. Isn't he. The trot one." },
        { s: 'haechan', f: 'happy', t: "Through the toll booth. Every time." },
        { s: 'yunjin', f: 'happy', t: "He has never once in his life paid a toll with the window up. The man in the tollbooth knows the words now." }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'yunjin', f: 'neutral', t: "Neither of them's going where she's going, though. Are they." },
        { s: 'haechan', f: 'neutral', t: "No. Both of them are fine about it. One of them's finer than the other. They take turns." }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'hyein', f: 'surprised', t: "Wait. So which one's going home with her?" },
        { s: 'haechan', f: 'happy', t: "Both. Obviously. You're going to have to share me." },
        { s: 'yunjin', f: 'serious', t: "Babe, I have never shared anything in my life." },
        { s: 'hyein', f: 'serious', t: "Me neither. Not once. Ask Hanni." }
      ], else: [
        { s: 'hyein', f: 'sad', t: "And both of them are going home. Without her." },
        { s: 'haechan', f: 'neutral', t: "Yeah. Both of us. We'll keep each other company on the way. We don't get along." }
      ] }] }] }] },
      { choose: [
        { t: "(Take the hem from him. Do the last stitches yourself.)", notes: 3, then: [
          { n: "She did the last six stitches herself, badly, with Hyein leaning over her shoulder saying *smaller, smaller, Sol, SMALLER*, and when she bit the thread off Hyein made a sound like a kettle and held the coat up to the light, and there was the crooked bit at the very end, and Hyein looked at it for a long time and said she was keeping it crooked. It was a signature. It was couture." }
        ] },
        { t: "Tell me about the car.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Black. Leather seats that stick to your legs in summer. Mr. Oh driving with his hands at ten and two, your appa in the back with his window down, singing, and this one in the front pretending he isn't, and then the chorus comes, and he can't help it." },
          { s: 'haechan', f: 'neutral', t: "I can help it." },
          { s: 'yunjin', f: 'happy', t: "He cannot help it." }
        ] },
        { t: "(Throw a mikan at him. See which one of him catches it.)", notes: 2, then: [
          { n: "She threw it. He caught it without looking, one hand, and peeled it in one long spiral without breaking the skin, and gave half to each of the girls and ate none, and Yunjin and Hyein looked at each other over their halves and said, at exactly the same time, *that one*." }
        ] }
      ] },
      { n: "Hyein packed the machine away at two and carried the coat upstairs over both arms like something asleep, and Yunjin went after her with the mikan peel, and at the door turned and pointed at him with it, and said, low, so only Solar heard it, *whichever one goes, babe. Make him wear a coat too.*" }
    ] }
  ]);

  /* ── Valentine's Day (2/14, a Sunday, and this year the lunar new year too) ── */
  addHol('haechan', {
    '2/14': { rank: 10, flag: 'year-goes-on', slot: 'evening', title: "valentine's day", place: 'Iwatodai Dorm · Laundry Room', time: 'Evening', music: 'tender',
      ask: 'two holidays today. one in each calendar. laundry room after dinner. bring nothing', yes: 'omw after dinner', ok: "mm. i said bring nothing. you're going to bring something",
      sorry: 'cant tonight, im sorry', no: 'ok. happy both of them',
      scene: [
        { n: "It was two holidays at once, which he said was the worst thing that could happen to a man with two calendars in his head. Valentine's Day in one of them, and in the other the new year, the lunar one, which had started at lunch with Yunjin's rice-cake soup and ended at four with the kitchen taken over by Hanni and Hyein and a kilo of melted chocolate, so that by nine at night the whole dorm smelled faintly of both." },
        { n: "He was on the warm dryer when she came down, and there was a small paper bag on the cold one opposite, and he was not looking at it so hard that she knew at once it was for her." },
        { s: 'haechan', f: 'neutral', t: "Don't. It's not chocolate. In one of my countries the girl gives the chocolate. In the other one everybody gives everybody chocolate and a card the size of a door. I couldn't work out whose rules we're under. So it isn't chocolate." },
        { n: "It was gloves. Cheap ones, pink knit, from the kiosk at the station, the left one already gone thin at the thumb where somebody had tried them on before him." },
        { s: 'haechan', f: 'neutral', t: "You forget those too. Everywhere. It's the second thing. I've been keeping a list." },
        { ifHeading: 'R', then: [
          { s: 'haechan', f: 'neutral', t: "Over there the house makes a whole thing of today. Roses in buckets. A slow song at the end. I'm usually gone before the slow song." },
          { s: 'haechan', f: 'neutral', t: "...This year I'd stay for it. Don't hold me to that. Hold me to that." }
        ], else: [{ ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "Over there you'd give me nothing, and I'd give you nothing, and Mrs. Bang would give us both rice cakes and a lecture about the stairs. Perfect day. Best day of the year." },
          { n: "He said it loud and pleased, his heels drumming once on the dryer door, and then caught himself drumming and stopped, and didn't stop smiling." }
        ], else: [{ ifHeading: 'H', then: [
          { s: 'haechan', f: 'neutral', t: "Next year, wherever you are, somebody's going to give you something better than gloves. Let them. Then wear the gloves anyway. They're warm. That's all they're for." }
        ], else: [{ ifHeading: 'true', then: [
          { s: 'haechan', f: 'happy', t: "Next year it's three holidays on one day. I've checked every calendar. I've cleared my schedule for all of them." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "Next year somebody gives you something on this roof. Or in this room. Let them. I'll have been first. That's all I wanted out of it. First." }
        ] }] }] }] },
        { choose: [
          { t: "(Give him the box you made. Plain, no card.)", notes: 3, then: [
            { ifRomance: 'haechan', then: [
              { n: "He took it with both hands and held it the way he held the Discman, as if it might go off, and didn't open it. He looked at it for so long that she started to laugh, and he looked up at her laughing, and his face did nothing, very loudly." },
              { s: 'haechan', f: 'flustered', t: "...I'm not eating this. I'm keeping it. It's getting its own shelf. Don't argue. I've decided." }
            ], else: [
              { n: "He took it, and turned it over, and read the small tag on the ribbon, which said, in Hanni's round careful handwriting because Solar had asked her to write it, *tomo*." },
              { s: 'haechan', f: 'neutral', t: "Friend chocolate. You looked it up. You had it labeled. By a professional." },
              { s: 'haechan', f: 'neutral', t: "...It's the best one I've ever been given. That's not a joke. Don't tell anyone. I'll eat it in front of Junpei so he knows what he's missing." }
            ] }
          ] },
          { t: "(Put the gloves on. Right now.)", notes: 3, then: [
            { n: "She put them on. They were too big at the fingertips and the left thumb was thin, and she held both hands up for him to see, and he looked at them the way he'd looked at her in a coat with no sleeves, all the way down and all the way up." },
            { s: 'haechan', f: 'neutral', t: "Good. That's the present. You wearing something warm. That's the only one I wanted." }
          ] },
          { t: "I brought you nothing. You said nothing.", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "I did say nothing. You listened. Nobody listens to me. It's the nicest thing anyone's done for me all day." },
            { n: "He said it so flat that it took her a second to hear that he meant it, and by then he'd looked away at the dryer window, where the two of them were reflected in the round glass, small and curved and side by side." }
          ] }
        ] },
        { n: "Upstairs somebody put on a ballad in the lounge, an old one with strings, and through two floors and a laundry room door he hummed the chorus under his breath, perfectly, without seeming to know he was doing it, and she sat on the cold dryer in pink gloves and didn't tell him." }
      ] }
  });
})();
