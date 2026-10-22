/* Ranks 11-15 batch (2026-10-22): the living world around hyein's last five ranks (February to early March).
   Same formats as the other living-* files (core.js link-format header, daily-life.js).
   - afterRank 11-15 (FEMC_GAME_LINK_EXTRAS.hyein.afterRank): each reacts to the shared part of the rank scene (the window,
     the lost voice, the labels, the velvet, the blouse), never to a choice in it. The route is locked by February, so they
     carry `variants` by heading where Solar's register changes: Runners lowercase with "u" / "omg" (R and the base),
     careful lowercase (S), caps and keysmash in the Hoax register (H). 15's message changes with the heading too.
   - routine (1): 'r15-hyein-collar' (early, school days, 2/5-3/3, rank 11+): she does Solar's collar at the front door.
   - late night (1): 'r15-hyein-ln-inventory' (a dorm night, rank 13+, 2/19-3/2, quiet nights): the top of the stairs at
     one in the morning, the list of things you can't pack. She lives on the dorm's second floor, so kind 'dorm'.
     Choices carry notes 2.
   Everything gates on 'year-goes-on'. Her texting voice: lowercase, caps when excited, ur, ltrly, fr, ofc, "drink water. ttyl". */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const Y = (t) => ({ from: 'hyein', t });
  const R = (t, notes, then) => ({ t, link: 'hyein', notes, then: then.map(Y) });
  const addRank = (rank) => { (X.hyein ||= {}).afterRank = { ...((X.hyein || {}).afterRank || {}), ...rank }; };
  const addNights = (list) => { (X.hyein ||= {}).lateNights = [...((X.hyein || {}).lateNights || []), ...list]; };

  /* ── afterRank 11-15 ── */
  const window11 = [Y('three people stopped at the window today'), Y('THREE. on purpose. at the WINDOW'), Y('not at me. at the sleeves')];
  const voice12 = [Y('i can say four words now'), Y('hanni is rationing them'), Y('she says i used two on menace and that was irresponsible')];
  const labels13 = [Y('aigis came back to show me the label'), Y('she just stood in my door with her hand on it'), Y("i'm fine. i'm totally fine. i'm on the floor")];
  const velvet14 = [Y('the velvet is cut'), Y("don't ask"), Y("i said DON'T ASK. i can feel u asking from downstairs")];

  addRank({
    // 2/4 the shop window: dressed by H.
    11: { slot: 'evening', flag: 'year-goes-on', msgs: window11,
      reply: [R('ur sleeves r famous now', 3, ['THEY ARE', 'the bald one is a celebrity. he has a fanbase']),
        R('omg did u eat today', 2, ['i ate a sock', 'not a real sock. a chocolate one. from the shop next door. it counts'])],
      variants: {
        H: { msgs: window11, reply: [R('HYEIN UR SLEEVES ARE FAMOUS. DRESSED BY H. ICONIC', 3, ['I KNOW', 'u type like jihoon in this mood btw. i love it. never stop']),
          R('THREE PEOPLE????? HSJDKSJ', 2, ['three!!! one had a skateboard. he came back twice'])] },
        S: { msgs: window11, reply: [R('they were right to stop.', 3, ['u never say things like that', 'say it in person. no actually dont. i will cry in the mall']),
          R('the collar was good.', 2, ['the collar was PERFECT. ur allowed to say perfect'])] }
      } },
    // 2/11 the lounge: no voice.
    12: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: voice12,
      reply: [R('save them for something good', 3, ['i am. i have a list', 'number one is ur name. number two is also menace']),
        R('drink water. ttyl', 2, ["that's MY line", 'stolen. reported. drinking water'])],
      variants: {
        H: { msgs: voice12, reply: [R('FOUR WORDS??? USE THEM ON JUNPEI', 3, ['i used one on junpei. it was HEM', 'he understood']),
          R('HANNI IS A TYRANT FR', 2, ['she made me a chart. it has stickers'])] },
        S: { msgs: voice12, reply: [R("don't waste them on me.", 3, ['not wasting them. spending them. u r a good investment']),
          R('rest.', 2, ['resting. under the kotatsu. like a cat in a box'])] }
      } },
    // 2/18 the workroom: labels.
    13: { slot: 'late', flag: 'year-goes-on', msgs: labels13,
      reply: [R('omg the heart place', 3, ['the heart place', "it's my best label. it's my best work. it's a centimeter long"]),
        R('ur good at this', 2, ['i KNOW', 'thank u. i know. thank u'])],
      variants: {
        H: { msgs: labels13, reply: [R('NOT AIGIS MAKING ME CRY AT MIDNIGHT', 3, ['she made junpei cry too. he says it was dust', 'there is no dust. mitsuru has a schedule']),
          R('GET OFF THE FLOOR', 2, ['no. the floor understands me'])] },
        S: { msgs: labels13, reply: [R("that's the best place for it.", 3, ['she said she considered several', 'she CONSIDERED. hyein lee. a considered option']),
          R('go to sleep, hyein.', 2, ['after one more label', 'ok after zero more labels. gn sol'])] }
      } },
    // 2/23 the strip: the rest of the velvet.
    14: { slot: 'late', flag: 'year-goes-on', msgs: velvet14,
      reply: [R('not asking', 3, ['thank u', "u're asking with ur eyes. through two floors. stop"]),
        R('omg is it for u', 2, ['maybe', 'no', 'i said maybe'])],
      variants: {
        H: { msgs: velvet14, reply: [R('IM NOT ASKING IM SCREAMING', 3, ['screaming is allowed. asking is a crime']),
          R('IS IT FOR ME. JUST NOD', 2, ["i'm not nodding. u can't see me. i'm nodding"])] },
        S: { msgs: velvet14, reply: [R("i won't ask.", 3, ['ur the only person who ever means that', 'its so annoying. i love it']),
          R('thank you for asking me first. the question.', 2, ['i waited three months', 'worth it. tuesday was worth it'])] }
      } },
    // 2/27 the shop windows: hold still.
    15: { slot: 'evening', delay: 1, flag: 'year-goes-on', msgs: [Y("i wore the blouse to dinner"), Y('nobody said anything'), Y('i said nothing back. on PURPOSE. i was so quiet. it was horrible. i loved it')],
      reply: [R('u looked like urself', 3, ['i always look like myself', '...thank u. i know what u mean. i heard it']),
        R('wear it every saturday', 2, ['standing order. i know. i wrote it down'])],
      variants: {
        R: { msgs: [Y('i wore the blouse to dinner'), Y("hanni took a picture on her dead phone. it won't save"), Y("she says it's saved in her heart. her thumb's in it. i can tell")],
          reply: [R('every saturday. at home. u hold still', 3, ['every saturday', 'hanni is making a sticker chart. for ME this time']),
            R('the thumb is iconic', 2, ['the thumb is a family member'])] },
        S: { msgs: [Y('i wore the blouse to dinner'), Y('i was quiet the whole time'), Y("practicing. so i know what it's like at ur dinners. it's so hard. how do u do it")],
          reply: [R('knock over a small glass for me sometime.', 3, ['ONLY if u do it first', 'a small one. we agreed small']),
            R("you looked like you.", 2, ['i know. thank u. i know'])] },
        H: { msgs: [Y('i wore the blouse to dinner'), Y('jihoon said i looked like a librarian'), Y("i said thank u. he didn't know what to do. it was the best moment of my life")],
          reply: [R('HSKDJS JIHOON SPEECHLESS??? LEGENDARY', 3, ['he called back an hour later with a better insult', 'too late. i already won']),
            R('BE LOUD ONCE FOR ME TOO', 2, ['always. that was never in danger. ur the one on probation'])] },
        stay: { msgs: [Y('i wore the blouse to dinner'), Y('i sat next to u. u know that. u were there'), Y("i'm just writing it down. so it's somewhere. i sat next to u")],
          reply: [R('u sat next to me', 3, ['i did', "i'm writing that down too. it's a whole list. it's mostly u"]),
            R("you're for you, hyein", 2, ["that's still so cheesy", 'keeping it'])] },
        true: { msgs: [Y('i wore the blouse to dinner'), Y('if u see me at home in it. the first day. tell me no about something'), Y("so i know it's u")],
          reply: [R('no hyein im not wearing that', 3, ['THAT', "that's the one. that's how i'll know"]),
            R('ill know ur measurements', 2, ['everybody knows my measurements. i yell them'])] }
      } }
  });

  /* ── A late night: the top of the stairs ── */
  addNights([
    { id: 'r15-hyein-ln-inventory', kind: 'dorm', rank: 13, after: '2/19', until: '3/2', when: 'quiet', flag: ['year-goes-on', 'arrived-hyein'], place: 'Iwatodai Dorm · Stairs', time: 'Late Night', music: 'night', scene: [
      { n: "At one in the morning there was a light on the second-floor landing, the small reading lamp from somebody's desk run out on its cord as far as the cord would go, and Hyein was sitting on the top step under it in her pink fleece, where she'd sat in October to count at a clock that didn't move. She wasn't counting. She had the sketchbook on her knees and she was writing a list." },
      { s: 'hyein', f: 'neutral', t: "Don't look. It's private. Okay, look. It's not private. It's the opposite of private. It's for you." },
      { n: "*THINGS YOU CAN'T PACK*, it said across the top, underlined twice. And under it, in her round capitals going smaller as the page went down: *the kotatsu. the hot milk tea from the machine by the bridge. Koromaru's face when Ken says walk. Mitsuru's handwriting. the old lady laughing. the monorail at night. the sound of the dorm at 3am when it's just us. the bald one.*" },
      { ifHeading: ['R', 'true'], then: [
        { s: 'hyein', f: 'sad', t: "We're going home. I know. I'm happy. I'm SO happy. I just want it written down that there was a kotatsu. In case home tries to tell us there wasn't." }
      ], else: [
        { s: 'hyein', f: 'sad', t: "I know you get to keep them. You're the one who gets to keep them. I'm making a list so I've got them too. Even if it's only a list." }
      ] },
      { choose: [
        { t: "(Sit down a step below her. Add to the list.)", notes: 2, then: [
          { n: "She took the pen and wrote under *the bald one*, in her own small spiky hand, *a girl on the top step at 1am.* Hyein read it and made the sound, the small one that was worse than a scream, and put her forehead down on her own knees, and held the sketchbook against her shins with both arms so nothing could fall out of it." }
        ] },
        { t: "You forgot one. The window.", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "...I didn't forget it. I couldn't write it. It's too big for a list." },
          { n: "She wrote it anyway, at the very bottom, *dressed by H.*, smaller than everything else on the page, as though if she wrote it small enough it would fit." }
        ] }
      ] },
      { n: "They sat on the stairs until the lamp's cord got tired of being stretched and the bulb flickered, and then Hyein turned it off and they sat in the dark a while longer, and the building made its three-in-the-morning sounds two hours early, and neither of them got up." }
    ] }
  ]);

  /* ── A routine: the collar ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    { id: 'r15-hyein-collar', after: '2/5', until: '3/3', slot: 'early', schoolOnly: true, flags: ['year-goes-on'], ranks: { hyein: 11 },
      place: 'Iwatodai Dorm · Front', time: 'Morning', scene: [
        { n: "Hyein was at the front door at ten to eight in her pajamas and her coat, with her hair in a towel, which was not a way anyone left the house, and she wasn't leaving the house. She'd come down to do Solar's collar. She'd done it every morning that week, and when Solar had asked why, she'd said that third-years on free attendance had nothing to hold them together but their collars, and that she was providing a public service." },
        { s: 'hyein', f: 'neutral', t: "Chin up. Not like that. Like you've been asked a question you already know the answer to." },
        { choose: [
          { t: "(Hold still. Let her.)", stat: { charm: 1 }, then: [
            { n: "She held still, and Hyein turned the collar up, one side and then the other, and smoothed it with her thumbs, and stepped back and looked, and nodded once, sharp, the way a stage manager nods at the end of a cue, and went back upstairs to bed." }
          ] },
          { t: "(Fix hers first. Her towel's coming down.)", stat: { kindness: 1 }, then: [
            { n: "The towel was coming down over one eye, and Solar reached up and fixed it before Hyein could get to the collar, a quick tuck at the back, the way you'd tuck a label in, and Hyein stood there with her hands in the air and her mouth open, outmaneuvered on her own doorstep." },
            { s: 'hyein', f: 'flustered', t: "...That's my JOB. Okay. Thank you. Chin up." }
          ] }
        ] },
        { n: "From the stairs, a door opened and shut, and Hanni's voice called down to ask if Hyein was doing the collar thing again, and Hyein called back that it was not a thing, it was a service, and the door shut, and the cold came in when Solar opened the front door, and the collar held." }
      ] }
  );
})();
