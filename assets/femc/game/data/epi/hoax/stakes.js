/* The HOAX epilogue, the stakes pass (Nov 11 2026; Kat: "Do any of the decisions the player makes actually change anything?").
   Data only, no engine change. This file loads BEFORE every story-*.js file (epilogue.js WORLDS.hoax.files lists it after
   people-crew; the scene checker loads alphabetically, and "stakes" < "story-"), because those files read R.stakes.

   ── The three scores ─────────────────────────────────────────────────────────────────────────────────────────────────────
   Each score is a COUNT of flags. A choice that matters sets one flag named for what it did; the score is how many of that
   score's flags are set, read with core.js's existing { ifCount: { of: [flags], min, max }, then, else } (menu.js peek reads it
   too, so Theater replays follow). Scores only climb: the careful answer is the one that adds nothing, or adds to another
   score. Old saves need no migration: a flag never set counts as 0.
     heat   how much the forum / Hanlim Unfiltered is sniffing around the "retreat"   R.stakes.heat
     trust  the council and the crew having her back                                 R.stakes.trust
     sus    her mom getting close to the truth                                       R.stakes.sus

   ── Where each one moves (✱ = flag that existed before this pass; everything else is new) ─────────────────────────────────
   heat (22; 19 + the Jihoon thread below)
     epi-h-heat-upvote     story-w2 rt-doomscroll         upvotes "a different dimension lol" (a reply turns up under it)
     epi-h-heat-cult       story-party mingle, living rm  "I joined a cult. The robes were cute." (on the forum by midnight)
     epi-h-heat-quote      story-party mingle, stairs     gives Eunchae a quote on stream
     epi-h-heat-iwatodai   story-party mingle, NHIE       "Never have I ever been to Iwatodai" (the debate girl writes it down)
     epi-h-heat-door       story-party mingle, landing    knocks on the bathroom door on the girls talking about her
     epi-h-heat-loud       story-party mingle, porch      tells the football team, loudly, that yes, she's dating Jungwon
     epi-h-heat-photo      story-party, the tip           "Post it. It's a hallway."
     epi-h-heat-hunt       story-party, the tip           goes round the house asking who sent the photo
     epi-h-heat-scene      story-party, the hallway       tells Hyunsuk and Jay off in front of the whole hallway (filmed)
     epi-h-party-flushed ✱ story-w2 party, jungwon        takes Jihoon's bag in the kitchen to flush it (someone sees her take it)
     epi-h-party-jh-flushed ✱ story-w2 party, jihoon      the same on Jihoon's route
     epi-h-heat-reply      story-w2 motion                replies to Jihoon's comment publicly
     epi-h-heat-hayoon     story-w2 motion (if met)       answers hanlim_accountability's DM with the temple, or blocks her
     epi-h-heat-mona       people-crew jake-2             "Post the Mona Lisa."
     epi-h-niki-alt ✱      people-crew niki-1             writes a forum comment on Niki's alt
     epi-h-war-sol-post ✱  story-w3 war-room (council)    writes the council's forum post
     epi-h-eunchae-nocomment ✱ story-w3 makeup            "No comment." at the gate (reads guilty)
     epi-h-heat-owed       story-w3 makeup                owed Eunchae from the party and didn't pay with a quote: the photo goes up
     epi-h-heat-deny       story-w3 prom (the leak)       calls the leaked RETREAT FACTS screenshot fake
   trust (23)
     epi-h-tables-pushed ✱ people council-tables          pushes the old table and the big table together
     epi-h-suk-seat ✱      people-crew-late long way      "I'm in your car, Suk."
     epi-h-jaehyuk-told ✱  people-crew jaehyuk-2 / office tells Jaehyuk the truth about her hand / the clocks
     epi-h-jay-fight ✱     people-crew jay-2              "Yes." (she'll fight for it)
     epi-h-cherry-dark-truth ✱ people-late cherry sleepover "I don't know." (tells Cherry the true thing)
     epi-h-poster-real-one ✱ people-crew sunoo-2          keeps *a real one* on Sunoo's poster
     epi-h-war-sol-receipts ✱ / epi-h-war-sol-gym ✱  story-w3 war-room (council)  takes the receipts or the gym
     epi-h-trust-ledger    story-w2 study-council         "Boring wins." (every won)
     epi-h-trust-step      story-party mingle, back step  sits down between Asahi and Junkyu
     epi-h-trust-jay-porch story-party mingle, porch      lets Jay handle the football team
     epi-h-trust-crew      story-party, the hallway       stands next to Hyunsuk
     epi-h-trust-council   story-party, the hallway       stands next to Jay
     epi-h-trust-between   story-w2 party, council        gets between Jay and Jihoon in the kitchen
     epi-h-trust-call      story-party codas (by route)   lets Jihoon and Jungwon talk (jungwon: hands Jihoon her phone;
                                                          jihoon: answers Jungwon on the car's speaker; council: leaves them on speaker)
     epi-h-trust-heeseung  people-crew heeseung-2         "Thank you, Heeseung. Really."
     epi-h-trust-jake      people-crew jake-2             "Run it past Heeseung first."
     epi-h-trust-kyu       people-late junkyu-late-1      "I'm not going anywhere tonight."
     epi-h-trust-prom      story-w3 prom                  "Nobody panic. Sunoo, plug the laminator back in."
     epi-h-trust-owned     story-w3 prom (the leak)       owns the leaked screenshot in the council room
     epi-h-hearing-charm ✱ / -courage ✱ / -knowledge ✱  story-end hearing  any of the three stat speeches (the plain one adds nothing)
   sus (12; 9 + the Jihoon thread below)
     epi-h-mom-lie ✱       story-w1 home                  "It was a council thing. The advisor set it up."
     epi-h-xmas-bows ✱     story-w1 christmas             "a hundred and eight bows"
     epi-h-sus-boring      story-w2 rt-mom-breakfast      describes the temple until she stops asking
     epi-h-sus-swept       story-w2 new-year              "We woke up at four and swept things."
     epi-h-sus-party       story-party, Mom's text        "movie night!! home by 12:30 i promise"
     epi-h-sus-ignored     story-party, Mom's text        leaves Mom on read
     epi-h-sus-armband     stakes.js epi-h-armband 1/5    "Volunteers wear them. At the temple."
     epi-h-sus-costume     stakes.js epi-h-armband 1/5    "It's a costume. From the party."
     epi-h-sus-chair       story-days sunday 1/7          "It's nothing, Mom. It's just a chair."
   heat / sus / lies, the Jihoon thread (Nov 11 2026, Kat's rulings; stolen.js sets every one, its header documents them):
     heat  epi-h-heat-jh-coats  (party coat room, seen leaving)   epi-h-heat-jh-hall (1/9, his hand down the main hall)
           epi-h-heat-jh-smoke  (1/10, smoking behind the gym, photographed)
     sus   epi-h-sus-jh-curb    (12/23, "a video of a cat")       epi-h-sus-jh-car (12/30, "Mrs. Oh's son")
           epi-h-sus-jh-smoke   (1/10, "Cherry was smoking")
     lies (new score, R.stakes.lies) epi-h-lie-jw-night (12/26, "slept like a rock"), epi-h-lie-jw-nana (12/30, "It's Nana."),
           epi-h-lie-crew-coats (12/29, "Bathroom."). Lies cost trust: the verdict adds min(lies, 2) to both trust thresholds
           (turns needs trust ≥ 5 + k, falls takes trust ≤ 6 + k). Only players with the year's Jihoon romance can lie here, so
           every other run's verdict is unchanged.
   Jungwon going out (Nov 11 2026, Kat: more rebellion from him; story-jungwon.js sets every one, its header documents them):
     heat  epi-h-heat-seen   (1/1 late, walks him round the block at 1 a.m.; a forum thread the next morning)
           epi-h-heat-late   ('quiet feet', 1/8-1/10 late, walks him home past a doorbell camera)
     trust epi-h-trust-curb  (1/7 late, makes room for him on the old table's curb, next to Hyunsuk)
           epi-h-trust-gate  (1/8 after, waves both tables round him at the gate)
   Light feedback: every new flag's choice carries a line that shows it (a forum post, a comment count, a look, a Mom text);
   the old ✱ choices already had one. Check-ins read the running counts: the motion's signatures (1/2), Eunchae at the gate
   (1/8), the leak (1/9: it only happens if she passed her phone round at the party OR heat ≥ 4), the bleachers and the
   council table and the gym doors at the hearing.

   ── Thresholds ───────────────────────────────────────────────────────────────────────────────────────────────────────────
     Mom calls the school   sus ≥ 3 when epi-h-armband plays (1/5 morning)   → epi-h-mom-called (she knows it wasn't approved)
     Mom at the hearing     sus ≥ 4 when the hearing starts                   → epi-h-mom-hearing (she's by the gym doors)
     The leak               epi-h-party-phone (the Nana picture went round Dohyun's den) or heat ≥ 4, on 1/9
     The verdict (R.stakesVerdict, played in epi-h-hearing after her speech, so the stat speeches count):
       (k = min(lies, 2), the Jihoon thread; 0 for everyone else)
       turns  heat ≤ 4 and trust ≥ 5 + k    epi-h-out-turns   the room turns for her; Hayoon withdraws (the old ending)
       falls  heat ≥ 7 and trust ≤ 6 + k    epi-h-out-falls   the vote carries against the VP; Heeseung acting VP; Yeobo's pays
       split  anything else                 epi-h-out-split   a hand vote, 104 to 98; a censure, an apology at assembly, the
                                                              advisor in every meeting until prom; Jungwon promises the gym she
                                                              won't leave again (a promise he can't keep)
       (Tuned on a random-play sim of all three routes: about 1 in 5 turns, 3 in 5 split, 1 in 5 falls; a player who keeps
       quiet online and leans on her people lands turns, one who feeds the forum and goes it alone lands falls.)
     Check: python3 tools/femc-hoax-stakes.py (every list flag is set somewhere; the verdict gives exactly one outcome for
       every count; all three outcomes reachable on each route; every flag the outcomes read is set somewhere).

   ── The three outcomes and their fallout (story-end.js) ──────────────────────────────────────────────────────────────────
     The flicker, the clip and the gym at midnight happen on every outcome; only what the room does, and what it costs, changes.
     turns  hearing: as before (Hayoon: "Something happened."), plus who stands. after: the clip is a love letter ("ghost vp i
            would die for u"). results: first-years bow in the hall. gate: everyone.
     split  hearing: Hayoon keeps count one; hands; 104-98; Chaewon's censure (a written apology read at Friday assembly, the
            advisor in every meeting until prom); Jungwon: "She's not going anywhere. I promise you." after: forum "104-98 lmao";
            by route the promise sits between them. results: she reads the apology at assembly before the list goes up;
            Jungwon's mother's text grows a second line. gate: whoever she stood with at the party first.
     falls  hearing: the vote carries (VP only); Jungwon tries to resign (choice: stop him / let him say it; Chaewon refuses it
            either way: "In writing, Mr. President"); Heeseung named acting VP; the crowd turns on the tin and on Sunoo.
            after: "ex-vp", Yeobo's one-star reviews start; Heeseung's text. results: her name gone from the council-room door;
            the side she didn't stand with at the party doesn't come to the gate. sunoo-3 (1/12): Halmeoni and the reviews.
            council-3 (roof): "Officially, Heeseung's clipboard says eight."
     Mom (sus ≥ 4): at the hearing, by the doors; she saw it live, so "Is this you?" becomes "I was there." (epi-h-after).

   Flags set here: epi-h-armband (event), epi-h-mom-called, epi-h-mom-after-exams, epi-h-sus-armband, epi-h-sus-costume;
     the verdict sets exactly one of epi-h-out-turns / -split / -falls, and epi-h-mom-hearing.
   Inventions for Kat to confirm: Mom keeps the armband in her cardigan pocket; the advisor's phrase "no form was ever signed";
     the vote count 104-98; Chaewon's censure terms; Heeseung as acting VP; Yeobo's getting one-star reviews in the falls outcome. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});

  R.stakes = {
    heat: ['epi-h-heat-upvote', 'epi-h-heat-cult', 'epi-h-heat-quote', 'epi-h-heat-iwatodai', 'epi-h-heat-door', 'epi-h-heat-loud',
      'epi-h-heat-photo', 'epi-h-heat-hunt', 'epi-h-heat-scene', 'epi-h-party-flushed', 'epi-h-party-jh-flushed', 'epi-h-heat-reply',
      'epi-h-heat-hayoon', 'epi-h-heat-mona', 'epi-h-niki-alt', 'epi-h-war-sol-post', 'epi-h-eunchae-nocomment', 'epi-h-heat-owed',
      'epi-h-heat-deny',
      // the Jihoon thread (stolen.js, Nov 11 2026): seen with him
      'epi-h-heat-jh-coats', 'epi-h-heat-jh-hall', 'epi-h-heat-jh-smoke',
      // Jungwon going out (story-jungwon.js, Nov 11 2026): seen out late with him
      'epi-h-heat-seen', 'epi-h-heat-late'],
    trust: ['epi-h-tables-pushed', 'epi-h-suk-seat', 'epi-h-jaehyuk-told', 'epi-h-jay-fight', 'epi-h-cherry-dark-truth',
      'epi-h-poster-real-one', 'epi-h-war-sol-receipts', 'epi-h-war-sol-gym', 'epi-h-trust-ledger', 'epi-h-trust-step',
      'epi-h-trust-jay-porch', 'epi-h-trust-crew', 'epi-h-trust-council', 'epi-h-trust-between', 'epi-h-trust-call',
      'epi-h-trust-heeseung', 'epi-h-trust-jake', 'epi-h-trust-kyu', 'epi-h-trust-prom', 'epi-h-trust-owned',
      'epi-h-hearing-charm', 'epi-h-hearing-courage', 'epi-h-hearing-knowledge',
      // Jungwon going out (story-jungwon.js, Nov 11 2026): both tables round him
      'epi-h-trust-curb', 'epi-h-trust-gate'],
    sus: ['epi-h-mom-lie', 'epi-h-xmas-bows', 'epi-h-sus-boring', 'epi-h-sus-swept', 'epi-h-sus-party', 'epi-h-sus-ignored',
      'epi-h-sus-armband', 'epi-h-sus-costume', 'epi-h-sus-chair',
      // the Jihoon thread (stolen.js, Nov 11 2026): lies to Mom about him
      'epi-h-sus-jh-curb', 'epi-h-sus-jh-car', 'epi-h-sus-jh-smoke'],
    // the Jihoon thread (stolen.js, Nov 11 2026): lies to Jungwon or the crew about him. Each one raises the trust the
    // verdict needs (R.stakesVerdict below), so a lie costs trust without any score ever going down.
    lies: ['epi-h-lie-jw-night', 'epi-h-lie-jw-nana', 'epi-h-lie-crew-coats']
  };
  const ST = R.stakes;
  // { ifCount } helpers (plain data at load time; nothing here runs in a scene).
  R.stakesIf = (score, range, then, els) => ({ ifCount: { of: ST[score], ...range }, then, else: els || [] });
  const IF = R.stakesIf;

  // The verdict: exactly one outcome flag (epi-h-hearing plays it right after her speech and the backers). Mom's presence
  // (epi-h-mom-hearing, sus ≥ 4) is decided at the top of the hearing instead, so she can be seen in the room from the start.
  // The Jihoon thread (Nov 11 2026): k = lies told (capped at 2) is subtracted from trust, i.e. added to each trust threshold.
  // With no lies (every route without the year's Jihoon romance) this is exactly the old verdict.
  const verdict = k => IF('heat', { max: 4 },
    [IF('trust', { min: 5 + k }, [{ flag: 'epi-h-out-turns' }], [{ flag: 'epi-h-out-split' }])],
    [IF('heat', { min: 7 },
      [IF('trust', { max: 6 + k }, [{ flag: 'epi-h-out-falls' }], [{ flag: 'epi-h-out-split' }])],
      [{ flag: 'epi-h-out-split' }])]);
  R.stakesVerdict = [
    IF('lies', { max: 0 }, [verdict(0)], [IF('lies', { max: 1 }, [verdict(1)], [verdict(2)])])
  ];

  // ── 1/5 morning: the armband (new decision point; something real can go wrong) ──────────────────────────────────────────
  (R.events ||= []).push(
    { id: 'epi-h-armband', date: '1/5', slot: 'early', title: 'the armband', place: 'Hanlim · Home · Kitchen', time: 'Morning', scene: [
      { flag: 'epi-h-armband' },
      { n: "Her dad's suitcase was in the hallway, the small grey one with the broken wheel that he took to Daejeon twice a year and refused to replace on the grounds that it still had three good ones, and her dad was at the counter eating toast standing up, in his coat, which he only did when he was late, which he always was." },
      { n: "Her mom was at the table. Not eating. Her coffee was in front of her and her hands were on either side of it, and between her hands, folded once, very neatly, the way she folded everything, was a strip of black cloth with a red band printed on it and white letters she'd never be able to read the way Solar could." },
      { n: "S.E.E.S." },
      { n: "Solar stopped in the doorway with one sock on. Nana, behind her, walked into the back of her knees and stopped too, and looked round her legs at the table, and thumped his tail against the doorframe, twice, the way he did for people he liked, which was apparently also the way he did for evidence." },
      { s: 'mom', t: "It was in the wash. In the pocket of your coat. The good coat. I nearly put it through on hot." },
      { s: 'dad', t: "Soyeon. I have a train." },
      { s: 'mom', t: "Then go and get on it, Jaeseok." },
      { n: "He didn't. He stood there with the toast, looking from one of them to the other, a man who'd been married long enough to know that a train could be caught later and this could not." },
      R.stakesIf('sus', { min: 3 }, [
        { flag: 'epi-h-mom-called' },
        { music: 'epi-h-dread' },
        { n: "Her mom didn't pick it up. She didn't need to. She looked at it lying there between her hands, and then up, and Solar knew the look, because she'd been waiting for it since the twenty-first, the look of a file that had been reopened and read all the way to the end." },
        { s: 'mom', t: "I called the school yesterday. I spoke to your advisor. The council advisor. Very nice woman. Very tired." },
        { s: 'mom', t: "She told me there was no retreat. Not one she'd approved. She said no form was ever signed, and she'd been *meaning to talk to Heeseung about it*, and then she asked me, Solar, she asked *me*, if I knew where you'd all been." },
        { n: "The kitchen was very quiet. The fridge hummed. Somewhere in the house a clock was ticking, and Solar listened to it tick and thought, for a strange, sideways second, that she'd have given anything for it to stop at twelve right now, so there'd be something else in the room to look at." },
        { s: 'dad', t: "...Soyeon, you didn't tell me you called." },
        { s: 'mom', t: "I'm telling you now." },
        { s: 'mom', t: "So. What is this?" }
      ], [
        { n: "Her mom didn't pick it up. She just turned it, slightly, with one finger, so the letters faced Solar, the way she'd turn a contract across a desk to a client so they could see exactly which line they'd signed." },
        { s: 'mom', t: "What is it?" }
      ]),
      { choose: [
        { t: "Volunteers wear them. At the temple. So the monks know who's new.", flag: 'epi-h-sus-armband', then: [
          { glitch: { strain: 1 } },
          { n: "It came out so easily. That was the thing. It came out in the voice, the one for front-office ladies, sorry and tired and a little bored, and she watched it go across the table and land on her mother's face and not stick." },
          { s: 'mom', t: "In English." },
          { s: 'solar', f: 'flustered', t: "It's an international temple." },
          { n: "Her dad made a small sound into his toast. Her mom didn't. Her mom picked the armband up, finally, and folded it once more, smaller, and put it in the pocket of her cardigan, the grey one, and kept her hand over the pocket." },
          { s: 'mom', t: "Then I'll keep it. As a souvenir. Of the international temple." },
          { phone: [
            { from: 'mom', t: "I'm not angry. I want you to know that. I'm keeping a list." }
          ], contact: 'Mom' }
        ] },
        { t: "It's a costume. From the party. Somebody's cosplay thing.", flag: 'epi-h-sus-costume', then: [
          { glitch: { strain: 1 } },
          { ifFlag: 'epi-h-sus-party', then: [
            { s: 'mom', t: "From the party you told me was a movie night." },
            { n: "Oh God." },
            { s: 'solar', f: 'flustered', t: "...From the party *after* the movie night." }
          ], else: [
            { s: 'mom', t: "Which party." },
            { s: 'solar', f: 'flustered', t: "The swim-team one. The twenty-ninth. Somebody had a box of costumes and it was— it was a theme." },
            { s: 'mom', t: "A theme." }
          ] },
          { n: "It was a bad lie and they all knew it was a bad lie, all three of them and the dog, and her mom didn't even do her the courtesy of looking angry about it. She looked tired. She looked, for one second, like a woman who'd been lied to by a client she liked, and had decided to charge for it later." },
          { n: "She put the armband in the pocket of her cardigan and kept her hand there." },
          { ifFlag: 'epi-h-sus-party', then: [
            { phone: [
              { from: 'mom', t: "I drove past at eleven that night, by the way. To bring you a coat." },
              { from: 'mom', t: "Nobody was watching a movie." }
            ], contact: 'Mom' }
          ], else: [
            { phone: [
              { from: 'mom', t: "A theme. I've written it down." }
            ], contact: 'Mom' }
          ] }
        ] },
        { t: "(Take it back.) After exams. I'll tell you after exams.", flag: 'epi-h-mom-after-exams', stat: { courage: 1 }, then: [
          { n: "She crossed the kitchen and put her hand over the armband, on top of her mother's hand, which was on top of it too, and for a second the two of them were holding the same strip of cloth across a table like it was something they were dividing between them." },
          { s: 'solar', f: 'serious', t: "After exams. I'll tell you after exams. I can't before. I'm not— it's not bad, Mom. Nobody hurt me. I didn't do anything wrong. I just can't yet." },
          { n: "Her mom looked at her for a long time. At her face, and her one sock, and her hand." },
          { s: 'mom', t: "Friday." },
          { s: 'solar', f: 'sad', t: "Friday." },
          { s: 'mom', t: "Friday night, Solar. At this table. Your father will be home. And I'm keeping this until then." },
          { n: "She took her hand out from under Solar's, with the armband in it, and put it in her cardigan pocket, and buttoned the pocket, which Solar hadn't known that cardigan's pocket could do." },
          { s: 'dad', t: "...I'm going to miss my train." },
          { s: 'mom', t: "Go, Jaeseok." },
          { n: "He went. He kissed the top of Solar's head on the way past, toast and all, which he hadn't done since she was about eleven, and didn't say anything, and the door shut behind him, and the suitcase's bad wheel went *tock, tock, tock* all the way down the path." }
        ] }
      ] },
      R.stakesIf('sus', { min: 4 }, [
        { n: "Her mother put her coffee in the sink without drinking it, which she had never once done in Solar's life, and went upstairs, and Solar heard the bedroom door, and then her mother's voice, low, on the phone, and the word *Thursday*, and then nothing." },
        { n: "Thursday was the hearing. Solar stood in the kitchen with one sock on and the dog leaning on her legs and understood that her mother had read the forum. All of it. Probably twice." }
      ], [
        { n: "Her mom put her cup in the sink and went upstairs, and Solar stood in the kitchen with one sock on and Nana leaning his whole weight against her legs, like he was trying to hold her in the room." }
      ])
    ] }
  );
})();
