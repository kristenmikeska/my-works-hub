/* The Runners epilogue, week 3 ("bleeding", 12/15-12/20): the home bonds' week-3 hangouts, three routines and the week's texts.
   Epilogue batch 4, people writer. Data only; loaded with the world (epilogue.js WORLDS.runners.files). Merges into
   FEMC_EPI_WORLDS.runners; never replaces a list. Load order doesn't matter: people.js assigns B.<id> = {...} outright, so
   when this file comes first `add` holds the bond on an accessor that merges these hangouts into people.js's object (after
   weeks 1-2's, so the order stays right). List it after people.js in WORLDS.runners.files anyway.

   Hangouts (pushed onto the existing bonds; danielle is the rival):
     haechan   epi-r-haechan-4   'open book'        12/15-12/18 after/evening, route haechan, after epi-r-upward (4B, finals; cuts away)
               epi-r-haechan-4b  'brown noise'      12/15-12/18 after, noRoute haechan, after epi-r-upward (the 4B landing)
     hanni     epi-r-hanni-3     'gerald'           12/15-12/19 after/evening (her mother's card to the cabin; the formal list)
     hyein     epi-r-hyein-3     'the fitting'      12/15-12/18 after/evening (Haechan's shirt, Jaemin's velvet, Solar's dress)
     minji     epi-r-minji-3     'four seconds'     12/15-12/19 after/evening, after epi-r-upward (her snow footage; the reel ask)
     jaehyun   epi-r-jaehyun-3   'two chairs'       12/16-12/19 after, after epi-r-kitchen (Bird; the car; the house and Mark)
     chenle    epi-r-chenle-3    'second thursday'  12/17-12/19 after/evening, after epi-r-upward (the log, three angles)
     jaemin    epi-r-jaemin-3    'run of show'      12/15-12/18 after/evening (the Sigma fridge; Mark crossed off)
     danielle  epi-r-danielle-3  'for the records'  12/15-12/18 after/evening (the Alpha dining room; initial the line)
     mark      epi-r-mark-3      'honestly'         12/17-12/19 after/evening, after epi-r-kitchen (the Hall of Languages piano)
   Routines: epi-r-rt-suanon (after, 12/15-12/16, after epi-r-upward), epi-r-rt-allnighter (evening, 12/16-12/18),
     epi-r-rt-packing (after, 12/19-12/20; routines don't spend the slot, so Saturday's practice still follows on the 20th).
   Flags set: epi-r-reel-yes / epi-r-reel-cut (minji-3, Minji's route, only when epi-r-reel-think was set: reel-think then stays
     set beside the answer, so readers should check yes / cut first); epi-r-danielle-initial / epi-r-danielle-blank (danielle-3:
     she initialed her guest-list line / left it blank; read by hanni-3).
   Flags read: epi-route-* (texts), epi-r-reel-think, epi-r-mark-door / -closed, epi-r-travel-yes / -no, epi-r-said-it,
     epi-r-public-post, epi-r-danielle-initial / -blank. ifEpiRoute: haechan, minji, cover. ifEvent: epi-r-kitchen (jaemin-3),
     epi-r-clocks (allnighter). ifYear: noFlag arrived-mark (mark-3).
   Texts: 11 dated (12/15-12/19), 4 ambient (girls; haechan off-route twice, by epi-route-cover / epi-route-minji; team).
   Canon held: the track stays untitled; the jacket never leaves the bag; no valley night; he never asks anyone about her;
   nobody explains a glitch and this file schedules none (two lying choices add { glitch: { strain: 1 } }: jaehyun-3, danielle-3); Danielle shows no footage; Jaehyun knows nothing of camp or the
   recording. Decisions for the lead: Solar's dress for the 19th is wine-red silk, bias cut, long sleeves, mostly no back
   (Hyein); Haechan's is a black silk shirt with a tiny gold sun embroidered inside the collar (route) / a tiny pair of headphones
   (off-route); on the cover route Hyein put all three girls in the same wine, different cuts; Jaemin wears the oxblood velvet;
   the run of show on the Sigma fridge has doors at 8 (Jeno), Hyein's looks arrive at 8:15, Jaemin's speech at 9, "12:00 · the
   toast"; Mark's name is crossed off the committee list in blue ballpoint (Johnny's); Hanni's invented cabin owner is
   "Mr. Gerald Lodge, One Lake Road" (Gerald is Hyein's dress form); the car on 12/21 is at 9 a.m., booked for two whatever
   Solar answered; Chenle's log is three angles (his phone, the bell-tower webcam, an SUanon video), 4.2 seconds each.
   Noticed, not changed: people.js's ambient epi-r-am-mark-notes says the Stats final is the 16th; this brief has it on the 15th. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  const B = (R.bonds ||= {});
  // people.js assigns B.<id> = {...} outright. If it hasn't loaded yet (the checker loads files alphabetically, so this one
  // comes first), hold the bond on an accessor that merges this week's hangouts into whatever people.js assigns later.
  const add = (id, role, list) => {
    if (B[id]) { (B[id].hangouts ||= []).push(...list); return; }
    let v = { id, role, hangouts: [...list] };
    Object.defineProperty(B, id, { enumerable: true, configurable: true, get: () => v,
      set: o => { (o.hangouts ||= []).push(...list); v = o; } });
  };
  const BOTH = ['after', 'evening'];

  /* ── Haechan ── */
  add('haechan', 'friend', [
    { id: 'epi-r-haechan-4', title: 'open book', hint: "4B's light is the only one on upstairs. He has a final too, allegedly.",
      after: '12/15', until: '12/18', slots: BOTH, route: 'haechan', events: ['epi-r-upward'],
      place: 'Syracuse · Studio 4B', time: 'After Class', scene: [
      { music: 'epi-r-romance' },
      { n: "Finals week had turned the whole Extracurricular Building into a library nobody had agreed to. Downstairs the lab was dark for the first time all semester, a sheet of printer paper taped to the door in Doyoung's handwriting that said GO STUDY. I MEAN IT., and upstairs every studio but one had its door shut and its light off, and the one was 4B. She walked past the hallway without looking down the length of it. She'd been doing that since Sunday." },
      { n: "She'd brought the Media and Society reader, three highlighters and a granola bar she had no intention of eating. He'd brought nothing. He was flat on the glued couch with his feet up on the bad arm and his headphones on and his eyes shut, and he didn't open them when she came in. He just moved his feet so there was room." },
      { s: 'solar', t: "We have the same final." },
      { s: 'haechan', f: 'neutral', t: "I know." },
      { s: 'solar', t: "You haven't opened the reader once. All semester." },
      { s: 'haechan', f: 'neutral', t: "I've been to every lecture." },
      { s: 'solar', t: "You slept through every lecture." },
      { s: 'haechan', f: 'neutral', t: "I listened to every lecture. With my eyes closed. It's a technique." },
      { s: 'solar', t: "It's a nap." },
      { s: 'haechan', f: 'happy', t: "It's a nap with a technique." },
      { n: "She sat on the carpet with her back against the couch and the reader on her knees, and for twenty minutes it nearly worked. The mic in the booth was unplugged, its cable coiled on the hook the way he'd coiled it every time she'd been in this room since the ninth, without a word about it, and the little red light on the interface was dark. She'd stopped checking. She'd noticed herself stop checking, which was its own kind of check." },
      { n: "Then his hand came down off the couch and rested in her hair. Not doing anything. Just there, the way you'd rest a hand on something you weren't thinking about, except he was thinking about it, she could tell from how still it went, and she read the same paragraph about parasocial attention four times and couldn't have told anyone a single word of it." },
      { s: 'haechan', f: 'neutral', t: "You were online at four. Last night. You didn't queue." },
      { s: 'solar', t: "I was studying." },
      { s: 'haechan', f: 'neutral', t: "You've been on that page since I put my hand there." },
      { ifFlag: 'epi-r-said-it', then: [
        { n: "Neither of them had said anything about last night. The lab, the blue wings opening and closing on the fox keycap like it was breathing, and him saying it out loud, finally, in that flat voice, like a man reading a verdict he'd been handed. It was in the room with them now. It sat coiled on the hook beside the cable, waiting to be decided about, and neither of them reached for it." }
      ] },
      { choose: [
        { t: "(Put the reader down.)", then: [
          { n: "She put it down. She got up off the floor and onto the couch, which wasn't built for two people and had never once let that stop anyone, and he took his headphones off and dropped them on the carpet without looking where they went, and that was how she knew." },
          { s: 'haechan', f: 'serious', t: "Can I kiss you." },
          { n: "Not princess. Not pretty. Nothing on the end of it at all, and no question mark either, the way he said everything, except that he waited. He actually waited. His hand was on her knee and it stayed exactly there." },
          { s: 'solar', t: "You're asking." },
          { s: 'haechan', f: 'neutral', t: "I'm asking. That's the rule. I like the rule." },
          { s: 'solar', t: "Yes." },
          { n: "He kissed her slow, the way he did things he'd decided were worth doing properly, and then not slow, his hand finding the small of her back under her sweater and spreading there, warm, and she pulled him down by the collar of his hoodie until the couch arm creaked a warning neither of them listened to. A highlighter rolled off the cushion and across the carpet and under the desk. Somewhere at the far end of the building a door sealed with a sound like a held breath." },
          { n: "He stopped once, his forehead against hers, breathing like he'd run up the stairs." },
          { s: 'haechan', f: 'flustered', t: "Still yes?" },
          { s: 'solar', t: "Still yes, Hyuck." },
          { n: "The reader slid off the couch onto the floor and lay there open to the page about parasocial attention, which seemed fair, and the window went from gray to blue to the deep early dark of December at a quarter to five, and what happened on the glued couch in 4B after that was nobody's business at all, which was, after all, the whole point of a room with a door like that." },
          { bond: { haechan: 1 } }
        ] },
        { t: "Quiz me, then. If you listened.", then: [
          { s: 'haechan', f: 'neutral', t: "Week six. Parasocial attention. He used a cooking influencer as the example and then said *don't quote me* and somebody quoted him on SUanon in under four minutes. That's on the final. The quote, not the influencer." },
          { n: "Eyes still shut. He went through three more, the whole semester, flat and perfect, including the professor's handkerchief and which week he'd had the cold, and she threw a highlighter at him and he caught it without opening his eyes, which was unforgivable." },
          { s: 'haechan', f: 'neutral', t: "My turn. Can I kiss you." },
          { s: 'solar', t: "That's not on the final." },
          { s: 'haechan', f: 'happy', t: "Everything's on the final, princess." },
          { n: "She said yes. He asked once more, later, against her jaw, like he wanted to hear it in a different room of her, and she said it again." },
          { stat: { knowledge: 1 } }
        ] }
      ] },
      { n: "She didn't mean to fall asleep. She hadn't meant to sleep in four days and it hadn't happened, and then it happened here, on a couch with a glued arm, her face in the crook of his neck, vanilla and solder and warm electronics, like her body had been waiting for one room in the world where it was allowed to." },
      { place: 'Syracuse · Studio 4B', time: 'Evening' },
      { n: "She woke in the dark with his hoodie over her like a blanket and the couch to herself. He was on the floor where she'd been, his back against the couch, the Media and Society reader open on his knees and her yellow highlighter in his hand, and he was highlighting it. Carefully. One line in three, the way she did, in her color." },
      { s: 'haechan', f: 'neutral', t: "Fifty-two minutes." },
      { s: 'solar', t: "You timed it." },
      { s: 'haechan', f: 'neutral', t: "You do a thing when you sleep. It's not snoring. I'd mix it out." },
      { n: "While she looked for her other shoe he stood up, and his hand went to his hip, quick, the way you'd go for a phone that had buzzed, and closed on nothing. He looked down at it. He didn't have anything on that hip. He never had." },
      { s: 'haechan', f: 'serious', t: "...I keep thinking I left the radio on." },
      { s: 'solar', t: "You don't have a radio." },
      { s: 'haechan', f: 'neutral', t: "No." },
      { n: "He put the hand in his pocket and left it there. She knew that gesture from somewhere that wasn't here. She didn't say where from. Some things you didn't hand a person in the dark." },
      { s: 'haechan', f: 'neutral', t: "Go home, pretty. Sleep. Actually sleep. I'll know." }
    ] },

    { id: 'epi-r-haechan-4b', title: 'brown noise', hint: "Haechan is on the landing between the lab and the studios, and he's been waiting long enough to look bored about it.",
      after: '12/15', until: '12/18', slots: ['after'], noRoute: 'haechan', events: ['epi-r-upward'],
      place: 'Syracuse · Studio 4B · Hallway', time: 'After Class', scene: [
      { n: "The landing halfway up the Extracurricular Building, nobody's floor. The lab below was dark for finals, Doyoung's GO STUDY sign taped crooked to its door, and the studios above were dark too, all but a strip of light under one of them, and he was sitting on the top step with a laptop on his knees and his headphones round his neck like he'd been put there by somebody with a sense of humor." },
      { n: "She hadn't been on this floor since Sunday night. The hallway behind him looked exactly like a hallway. Carpet, doors, an exit sign humming green at the far end. She looked at the length of it anyway, twice, before she looked at him." },
      { s: 'haechan', f: 'neutral', t: "You were online at three forty on Monday. And four last night. You didn't queue either time." },
      { s: 'solar', t: "Are you watching my status?" },
      { s: 'haechan', f: 'neutral', t: "It's on the side of my screen. I didn't put it there. Blizzard did." },
      { n: "He hadn't asked anybody. He never asked anybody. He just knew things, the way he'd always known them, before she'd said a word, and it had stopped surprising her somewhere back in another year and started doing something else instead, something lower down." },
      { s: 'haechan', f: 'serious', t: "You're not sleeping." },
      { s: 'solar', t: "It's finals." },
      { s: 'haechan', f: 'neutral', t: "It's not finals. You did the midterm like it was a warm-up. Feet on the chair. Monster. You finished early and drew a Kiriko on the back of the scantron." },
      { s: 'solar', t: "That was a fox." },
      { s: 'haechan', f: 'neutral', t: "It was a bad fox." },
      { n: "Her phone buzzed in her pocket. An AirDrop. A single file, no art, forty minutes long, named *brown.*" },
      { s: 'haechan', f: 'neutral', t: "Brown noise. Forty minutes. I made it. It's not music, don't get excited." },
      { n: "It wasn't nothing, though, a thing he'd made. She knew what it had cost him, this fall, to make anything at all, and here he was making a thing designed to be nothing, on purpose, so that she could listen to nothing. She stood on the landing holding her phone like it was warm." },
      { choose: [
        { t: "(Sit down on the step below him. Put it on now.)", then: [
          { n: "She sat. Earbuds in. It sounded like snow landing on a roof from inside the house, low and even and going nowhere, and her shoulders came down from her ears one at a time without being asked. She didn't sleep, not quite. She went somewhere next to it." },
          { n: "When she opened her eyes he was still typing. He hadn't moved. He hadn't looked at her, as far as she could tell, the whole time, which was how she knew he'd been watching the stairs for her the whole time instead." },
          { bond: { haechan: 1 } }
        ] },
        { t: "Why do you care if I sleep?", then: [
          { s: 'haechan', f: 'neutral', t: "Your cleanse was half a second late at Regionals." },
          { s: 'solar', t: "There's no practice this week." },
          { s: 'haechan', f: 'neutral', t: "There's practice Saturday. Last one before break. I'd like it on time." },
          { n: "That was the reason he'd decided to give her. It wasn't the reason. She took it anyway, and put it in her pocket with the phone, and he went back to his screen like the subject had been closed by a higher court." },
          { stat: { kindness: 1 } }
        ] }
      ] },
      { s: 'haechan', f: 'neutral', t: "Hyein measured my neck in the dining hall line. With a tape. In front of Jisung." },
      { s: 'solar', t: "She does that." },
      { s: 'haechan', f: 'serious', t: "I didn't agree to anything. I want that on the record somewhere." },
      { n: "She didn't tell him why she was up at four. That every time she shut her eyes lately the dark had a length to it, a hallway that went on a little further than hallways did. He didn't ask. He'd have seen it on her face if he'd looked straight at her, so he didn't look straight at her, and that was its own kind of kindness, the only kind he trusted himself with." },
      { s: 'haechan', f: 'neutral', t: "Go home. Put it on. Don't skip to the end. There's no end. It's noise." }
    ] }
  ]);

  /* ── Hanni ── */
  add('hanni', 'friend', [
    { id: 'epi-r-hanni-3', title: 'gerald', hint: "Hanni is on her bed with the formal list and the face she makes when she's being very brave about something.",
      after: '12/15', until: '12/19', slots: BOTH,
      place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Evening', scene: [
      { music: 'epi-r-sisters' },
      { n: "Hanni was cross-legged on her bed with the formal list in her lap, Alpha's half of the nineteenth, every name and every plus-one and every allergy, and a column down the right-hand side that somebody had added in red pen and titled INITIALS. Hyein was at the machine on the other side of the room with one earbud in, feeding it something wine-colored. Gerald, the dress form, stood in the corner in half of somebody's velvet, watching all of them with his no face." },
      { n: "Hanni's phone was face down on the duvet. Hanni did not put her phone face down. Hanni slept with her phone on her chest like a cat." },
      { s: 'hanni', f: 'neutral', t: "My mom wrote a thank-you card." },
      { s: 'hanni', f: 'flustered', t: "To the cabin. For having us. She says it's what you do when someone has your daughter for ten days and sends her back in one piece. She asked me for the address." },
      { s: 'solar', t: "Which address." },
      { s: 'hanni', f: 'sad', t: "...The one I made up. In the hallway. In about one second." },
      { n: "Hyein took her earbud out without stopping the machine." },
      { s: 'hyein', f: 'happy', t: "Tell her the name." },
      { s: 'hanni', f: 'serious', t: "No." },
      { s: 'hyein', f: 'happy', t: "Tell her the NAME." },
      { s: 'hanni', f: 'sad', t: "...Gerald." },
      { n: "Solar looked at the dress form. The dress form looked at nothing, the way it always had." },
      { s: 'hanni', f: 'flustered', t: "I was looking at him! I panicked! She said *Gerald what,* and I said—" },
      { s: 'hyein', f: 'happy', t: "Lodge." },
      { s: 'hanni', f: 'flustered', t: "Gerald Lodge. Like that was a normal name. Like I'd said it a hundred times. Mr. Gerald Lodge, One Lake Road, the Adirondacks, New York." },
      { s: 'hyein', f: 'serious', t: "There are like four hundred Lake Roads in the Adirondacks." },
      { s: 'hanni', f: 'serious', t: "That's what I was COUNTING on." },
      { n: "Solar laughed, she couldn't help it, it came out of her like something knocked over, and Hanni laughed too, and Hyein laughed so hard the machine ate a corner of the wine silk and she had to stop and swear at it. And then Hanni stopped laughing, about one second before Solar did. Solar heard the second." },
      { s: 'hanni', f: 'sad', t: "She mailed it on Thursday. It's going to come back. It's going to come back to her with a yellow sticker on it that says no such address, and she's going to stand in our kitchen at home holding it, and then she's going to call me." },
      { s: 'hanni', f: 'serious', t: "And I'm going to say something. I don't know what yet. Whatever it is, I'll say it really well." },
      { ifEpiRoute: 'cover', then: [
        { n: "It was the three of them. It had always been going to be the three of them, holding the cabin up with their bare hands, a lodge and a dirt road and an uncle nobody could find, and Solar had known that when she'd let them, and she'd let them anyway, because the other thing was worse. She hadn't thought about it reaching somebody's mother. She hadn't thought about it reaching anybody's kitchen." },
        { s: 'hanni', f: 'sad', t: "She wrote *thank you for keeping my girls safe.* Girls. Plural. She meant you two as well. She's never met any of you properly and she thanked a man who doesn't exist for all three of us." },
        { s: 'hyein', f: 'sad', t: "...That's actually really nice of her." },
        { s: 'hanni', f: 'sad', t: "I KNOW it's nice of her, Hyein, that's the PROBLEM." }
      ] },
      { choose: [
        { t: "When it comes back, give it to me. I'll keep it.", then: [
          { s: 'hanni', f: 'surprised', t: "Why would you want it?" },
          { s: 'solar', t: "Because it's the only true thing in the whole story. She meant every word." },
          { n: "Hanni looked at her for a long moment, her mouth doing something complicated, and then she nodded, hard, once, the way you nod when you can't trust what your voice is about to do. Across the room the machine started up again, louder than it needed to be, which was Hyein's way of giving them the room." },
          { bond: { hanni: 1 } }
        ] },
        { t: "Gerald's a good name. Very trustworthy.", then: [
          { s: 'hyein', f: 'happy', t: "GERALD IS TRUSTWORTHY." },
          { s: 'hanni', f: 'happy', t: "Gerald would never let anything happen to us." },
          { n: "Hanni laughed again, wet at the edges, and threw a pillow at the dress form, and missed, and Gerald stood there in his half a jacket, unbothered, the most reliable man any of them had ever met." },
          { stat: { charm: 1 } }
        ] }
      ] },
      { ifFlag: 'epi-r-danielle-initial', then: [
        { s: 'hanni', f: 'neutral', t: "You initialed yours. I saw. It's very neat. I hate how neat it is." }
      ], else: [{ ifFlag: 'epi-r-danielle-blank', then: [
        { s: 'hanni', f: 'serious', t: "Yours is the only empty box on the whole page. She circled it. In red. Just a circle, no note. I think the circle is the note." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "Danielle wants every line initialed. Every single one. I asked her what for. She said *for the records.* I asked which records. She said *the records* again, slower, like I was a pledge." },
        { s: 'hanni', f: 'serious', t: "She's doing yours in person. She told me that like it was a favor." }
      ] }] },
      { n: "Hanni initialed her own line, *H.P.,* pressing hard enough to go through to the page underneath, and turned the list over, and turned her phone back over too, face up, the way it should be. It didn't ring. It would. Not tonight. She held it together until eleven, which was the deal she'd made with herself, and at eleven she put her head down on Solar's shoulder and let it all go a little, quietly, and Hyein kept sewing so there'd be something else to listen to." }
    ] }
  ]);

  /* ── Hyein ── */
  add('hyein', 'friend', [
    { id: 'epi-r-hyein-3', title: 'the fitting', hint: 'Hyein has booked three fittings for the same hour, and one of them is you.',
      after: '12/15', until: '12/18', slots: BOTH,
      place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'After Class', scene: [
      { n: "Hyein had booked three fittings for the same hour, because Hyein believed in pressure, and the room was full in the way only Hyein's half of a room could be full. Jaemin was standing on her desk chair in the oxblood velvet, the reddest of the six, because of course the reddest one was his, with his arms held out from his sides like a man being knighted. Hanni was on her bed with a bag of pretzels, watching it like television. Gerald was in the corner wearing Solar's dress." },
      { n: "Solar stopped in the doorway. It was the dress she'd been fitted for twice already and hadn't seen finished, and on the dress form, under the lamp, it was a different object entirely. Wine-red silk that went nearly black in the folds, cut on the bias so it moved like water even standing still, long sleeves because Hyein said December was not an excuse to be cold, and a back that was mostly not there." },
      { s: 'hyein', f: 'serious', t: "Don't touch it. Get undressed. Jaemin, close your eyes." },
      { s: 'jaemin', f: 'happy', t: "They've been closed since I got here. I'm a gentleman. I'm also standing on a chair." },
      { s: 'hyein', f: 'serious', t: "Your arms are wrong." },
      { s: 'jaemin', f: 'sad', t: "My arms are the only thing about me that's never been wrong." },
      { s: 'jaemin', f: 'happy', t: "Danielle approved a velvet line item, by the way. I didn't ask her to. She found the receipt and approved it. Retroactively. It's the most frightening thing anyone's ever done for me." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Haechan was in the doorway behind her. He had been in the doorway for some time, by the look of it, holding a garment bag he'd been handed and had not agreed to, refusing to come one step further into a room with this much tulle in it." },
        { s: 'hyein', f: 'happy', t: "His is done. Black. Obviously black, he said black or he'd leave. It's silk. He doesn't know it's silk. Don't tell him it's silk." },
        { s: 'haechan', f: 'neutral', t: "I can hear you." },
        { s: 'hyein', f: 'serious', t: "It's not silk." },
        { n: "Hyein leaned in close to pin Solar's sleeve, close enough that nobody else could hear, and said through the pins in her mouth," },
        { s: 'hyein', f: 'happy', t: "I put something inside his collar. Little. Gold. A sun. You'd only ever see it if you undid the top button." },
        { n: "Solar's whole face went hot so fast she felt it in her ears, and Hyein felt her go hot, and was so pleased with herself she stuck her with a pin." },
        { s: 'haechan', f: 'serious', t: "What did she put in the collar." },
        { s: 'hyein', f: 'neutral', t: "Nothing. Structural." }
      ], else: [
        { n: "On the back of the door hung a black shirt on a hanger, with a sticky note on its shoulder in Hyein's capitals: HAECHAN (HE DOESN'T KNOW YET)." },
        { s: 'hyein', f: 'neutral', t: "He said no. I made it anyway. Chenle says he'll wear it. Chenle's never been wrong about anything, it's disgusting." },
        { s: 'hyein', f: 'happy', t: "There's a tiny pair of headphones embroidered inside the collar. So he knows I know." }
      ] },
      { ifEpiRoute: 'cover', then: [
        { n: "On Hyein's bed, laid out side by side like evidence, were two more pieces in the same wine. One cut short and square for Hanni, one long and sharp for Hyein herself. Three girls, one color, three different ways of standing in it." },
        { s: 'hyein', f: 'serious', t: "We're not matching. We're coordinating. If we're a unit, we walk in like a unit." }
      ] },
      { n: "Then it was her turn. The silk went over her head cold and then not cold, and Hyein went round her with the pins, quick and sure, a half inch at the waist, a thread at the sleeve, talking the whole time through a mouthful of steel." },
      { s: 'hyein', f: 'serious', t: "Arms out. Breathe in. Hold it. No, not like that, you look like you're about to testify." },
      { choose: [
        { t: "(Turn and look in the mirror.)", then: [
          { n: "She turned. The mirror on the back of the closet door was long and slightly warped at the bottom, the way every mirror in this house was, and in it there was a girl in wine-red silk with her shoulders back and her chin level, the girl her mother had spent eighteen years building for rooms exactly like the one on the nineteenth." },
          { n: "Except the girl in the mirror had a pin-scratch on her wrist and dark under her eyes she hadn't covered, and was standing in a room full of velvet and pretzels and people who'd been somewhere impossible with her, and was, she realized, about to laugh. That part wasn't her mother's. That part was new." },
          { s: 'hyein', f: 'happy', t: "See? You look like you." },
          { bond: { hyein: 1 } }
        ] },
        { t: "Is the back... legal?", then: [
          { s: 'hyein', f: 'serious', t: "It's legal in this state." },
          { s: 'jaemin', f: 'happy', t: "It's legal at MY house. I make the laws at my house." },
          { s: 'hanni', f: 'neutral', t: "Jeno makes the laws at your house. You just write them down." },
          { s: 'jaemin', f: 'sad', t: "...That's fair." },
          { stat: { charm: 1 } }
        ] }
      ] },
      { ifEpiRoute: 'haechan', then: [
        { n: "When she looked up, he was looking at her. Still in the doorway, still holding the garment bag he hadn't agreed to, and he looked at her in the wine silk for one second longer than a person in a doorway at a sorority should, his jaw doing the small thing it did, and then he said, perfectly flat," },
        { s: 'haechan', f: 'neutral', t: "I'm going to wait downstairs." },
        { n: "He went. Hyein waited until the stairs had stopped creaking, and then turned to Solar with her eyes enormous and whispered, with the reverence of somebody in a church," },
        { s: 'hyein', f: 'happy', t: "He's going to wait *downstairs.*" }
      ], else: [
        { n: "Jaemin opened one eye from the chair, looked at her, and closed it again." },
        { s: 'jaemin', f: 'happy', t: "I didn't see that. But if I had, I'd say it's going to ruin my party, and I'd say it with love." }
      ] },
      { n: "Hyein stepped back, took the last pin out of her mouth, and looked at all of it, the velvet and the silk and the black shirt, her whole first commission standing around her bedroom on people and furniture and a dress form named Gerald, and for one second she didn't say anything at all, which for Hyein was a speech." }
    ] }
  ]);

  /* ── Minji ── */
  add('minji', 'friend', [
    { id: 'epi-r-minji-3', title: 'four seconds', hint: 'Minji finished a final early and has footage she wants somebody to see.',
      after: '12/15', until: '12/19', slots: BOTH, events: ['epi-r-upward'],
      place: 'Syracuse · Honors Dorm', time: 'After Class', scene: [
      { music: 'epi-r-closure' },
      { n: "Minji's room, the hard drives humming in their stack, the succulent on the sill still refusing to die. On the left monitor, paused, the quad on Monday morning from the library steps, gray light and old snow and two hundred people in coats coming out of finals with their heads down." },
      { ifEpiRoute: 'minji', then: [
        { n: "Just the two of them. Minji had cleared the bed of index cards for her, which was as close as Minji came to rolling out a carpet, and sat at the desk with her cap frontwards and her hands in her lap, the way she sat when she was about to ask something." }
      ], else: [
        { n: "Olivia was on the bed eating Minji's snacks with the volume of a person eating somebody else's snacks, and Haerin was on the floor with her back to the radiator and a textbook open on her knees that she was not reading. Minji had texted the three of them at once. *done with my last final. come see something. you can say no.* Nobody had said no." }
      ] },
      { s: 'minji', f: 'neutral', t: "I shot it at sixty frames. I want you to see it at sixty frames. Okay?" },
      { n: "She pressed play. On the screen the snow fell the way snow fell, slant and slow across the quad, and then it stopped. All of it, every flake, hung in the air over two hundred heads like somebody had pressed pause on the world and forgotten to tell the people. And then it went up. Slowly. Back up into the gray it had come out of, and every face on the quad tipped up after it at once, and every phone came up after the faces." },
      { n: "Then it fell again, the right way, like nothing had happened, and the quad stood there in it." },
      { s: 'minji', f: 'serious', t: "Four seconds. Two hundred and forty frames. I've been through every one." },
      { s: 'minji', f: 'sad', t: "Last week it was one frame. I could tell myself one frame was the card. I can't tell myself two hundred and forty frames is the card. It's just real. That's what I can't get past. Not what it is. That it's real." },
      { n: "The worst part of the footage wasn't the snow. It was the sound. Three seconds in, two hundred people stopped talking at the same time, and the quad went so quiet you could hear the bell tower's clockwork tick across it, and that silence was the thing Solar would hear later, lying awake." },
      { ifEpiRoute: 'minji', then: [
        { s: 'minji', f: 'neutral', t: "Can I hold your hand while it plays again? You can say no." },
        { n: "Solar didn't say no. Minji's hand was cold and steady and held hers on the desk between them like something she'd been trusted to carry, and they watched the snow go up again, together, and Minji didn't look at the screen once the second time. She looked at their hands." },
        { ifFlag: 'epi-r-reel-think', then: [
          { s: 'minji', f: 'serious', t: "My calendar still says ask, on the nineteenth. I'm not moving it." },
          { s: 'minji', f: 'flustered', t: "But you said after finals. And I had my last one today. So technically, it's after finals. I checked the wording. I'm asking." },
          { s: 'minji', f: 'serious', t: "The film's different now. This is in it, if you let it be. Can I use it? You, the footage, the lamppost, all of it. You can say no. You can say some. You can still say not yet." },
          { choose: [
            { t: "Yes. All of it. The snow too.", flag: 'epi-r-reel-yes', then: [
              { n: "Minji wrote it on an index card before she smiled, the date and the word *yes* and Solar's initials, and pinned it beside the first card on the corkboard, in a color all its own. Then she smiled, the private one, the one nobody was supposed to see." },
              { s: 'minji', f: 'happy', t: "I'll still ask again before it screens. You know I will." },
              { bond: { minji: 1 } }
            ] },
            { t: "Yes. But not the green frame. That one's ours.", flag: 'epi-r-reel-cut', then: [
              { s: 'minji', f: 'neutral', t: "That one was never going in." },
              { n: "She dragged the single frame into its folder with no name, the blank one, and the four seconds of snow into the timeline in its place, and the two of them sat and watched where it landed, and it fit like it had been waiting for that exact spot." },
              { bond: { minji: 1 } }
            ] },
            { t: "Still not yet.", then: [
              { s: 'minji', f: 'happy', t: "Then the nineteenth stays where it is. Good. I like seeing it there." }
            ] }
          ] }
        ], else: [
          { s: 'minji', f: 'serious', t: "You already said yes to the film. I'm asking again anyway, because this is new. Can this go in? The snow. You can say no. It's the whole campus's, not just ours." },
          { choose: [
            { t: "It can go in.", then: [
              { s: 'minji', f: 'happy', t: "Okay. Thank you. I'll put it right before the end. Before you walk away." },
              { bond: { minji: 1 } }
            ] },
            { t: "Keep it out. Let it just be what happened.", then: [
              { s: 'minji', f: 'neutral', t: "Okay. Then it's just what happened. That's allowed too." },
              { n: "She made a folder for it with the date on it and nothing else, and closed it, and Solar watched her do it and thought it was the most careful thing anyone had ever done with something they wanted." }
            ] }
          ] }
        ] }
      ], else: [
        { s: 'olivia', t: "I WAS IN THE DINING HALL. I missed it. I missed the ONE thing. Everyone in my Econ final was talking about it and I was eating a waffle." },
        { s: 'haerin', t: "I saw it." },
        { s: 'olivia', t: "You SAW it? You didn't SAY?" },
        { s: 'haerin', t: "It went up." },
        { n: "That was the whole of Haerin's report. Olivia stared at her. Haerin turned a page of the textbook she wasn't reading. Minji laughed, the real one, the one she kept for when she'd forgotten anyone was listening, and Solar found she was laughing too, which she hadn't expected to do in front of that footage, ever." },
        { s: 'minji', f: 'neutral', t: "Okay. Food. All of us. That's not a question, Sol, it's a team thing." },
        { choose: [
          { t: "Team thing.", then: [
            { n: "The four of them went down the honors dorm stairs in a clump with their hoods up, Olivia narrating the waffle, Haerin half a step behind saying nothing, Minji with her camera bag zipped shut over her shoulder the whole way, and Solar in the middle of it, where she'd always liked to be, quietly holding the line." },
            { bond: { minji: 1 } }
          ] },
          { t: "I should study.", then: [
            { s: 'olivia', t: "You should EAT. You look like a Victorian ghost." },
            { s: 'haerin', t: "She does." },
            { n: "Two votes from the girl who barely voted. She went." },
            { stat: { kindness: 1 } }
          ] }
        ] }
      ] }
    ] }
  ]);

  /* ── Jaehyun ── */
  add('jaehyun', 'friend', [
    { id: 'epi-r-jaehyun-3', title: 'two chairs', hint: 'Jaehyun booked a study room at Bird for four hours and is using one chair of it.',
      after: '12/16', until: '12/19', slots: ['after'], events: ['epi-r-kitchen'],
      place: 'Syracuse · Bird Library', time: 'After Class', scene: [
      { n: "The group study rooms on the third floor of Bird had glass walls and whiteboards nobody ever fully erased, and the one with LEE (4 HRS) on the sign-up sheet had somebody else's organic chemistry ghosting across its board, and her brother in it alone, in a hoodie, with a corporate finance textbook open and a highlighter he was using like a scalpel." },
      { n: "The second chair was pulled out from the table. There was a sandwich on it. Turkey, wrapped in deli paper, from the place on Marshall Street she liked and had never once told him she liked." },
      { s: 'jaehyun', f: 'neutral', t: "That's yours. Sit." },
      { s: 'solar', t: "How did you know I'd come?" },
      { s: 'jaehyun', f: 'neutral', t: "I didn't. I'd have eaten it at four." },
      { n: "She sat. She ate. He went back to the finance and didn't watch her do it, which was how she knew he was watching her do it, the way he watched a defense before the snap, all at once and without seeming to look anywhere." },
      { s: 'jaehyun', f: 'neutral', t: "Ms. Han booked the car. Sunday. Nine." },
      { ifFlag: 'epi-r-travel-yes', then: [
        { s: 'jaehyun', f: 'neutral', t: "For two. You confirmed. She forwarded me the confirmation, which means she forwarded Dad the confirmation, which means he's already decided what we're doing on the twenty-third." }
      ], else: [{ ifFlag: 'epi-r-travel-no', then: [
        { s: 'jaehyun', f: 'serious', t: "She booked it for two anyway. She said she'd hold the second seat until the car pulls away. She said it the way she says everything." },
        { s: 'jaehyun', f: 'neutral', t: "...I'm not going to ask you." },
        { n: "He said it to the textbook. It sounded like it had cost him something, and he'd paid it anyway, and she didn't know what to do with a brother who paid for things like that, so she ate the rest of the sandwich." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "She booked it for two. She's still waiting on yours. Thursday." }
      ] }] },
      { s: 'jaehyun', f: 'serious', t: "Johnny took Mark off the committee for the nineteenth. Johnny doesn't take anybody off anything without telling me first. He told me after." },
      { s: 'jaehyun', f: 'neutral', t: "The house is cold on him. Nobody saves him a seat at dinner. I can feel it when I walk in, like somebody left a door open." },
      { s: 'jaehyun', f: 'serious', t: "Do you know why?" },
      { choose: [
        { t: "It's not mine to tell.", then: [
          { n: "He looked at her. He read her, fast and all at once, and she watched him arrive at the edge of something and stop there, and not throw into it." },
          { s: 'jaehyun', f: 'neutral', t: "...Okay." },
          { n: "That was all. Not *then whose is it,* not *I'll find out.* Just okay, and the highlighter going back to the page, and the strange new feeling of being trusted with something by a person whose whole life was deciding what other people got to hold." },
          { bond: { jaehyun: 1 } }
        ] },
        { t: "Ask Johnny.", then: [
          { s: 'jaehyun', f: 'neutral', t: "I did. He said *it's handled* and went back to his laptop." },
          { n: "Then he stopped, highlighter in the air. She watched the sentence come back round and hit him, the way a ball you've thrown sometimes comes back faster than you threw it." },
          { s: 'jaehyun', f: 'serious', t: "I've said that to you. *I handled things.*" },
          { s: 'jaehyun', f: 'sad', t: "I didn't like hearing it." },
          { stat: { kindness: 1 } }
        ] },
        { t: "(Say you don't know.)", then: [ { glitch: { strain: 1 } },
          { s: 'solar', t: "I don't know." },
          { s: 'jaehyun', f: 'neutral', t: "Okay." },
          { n: "It was the okay he used when he didn't believe you and had decided to let you have it anyway. She knew that okay. She'd heard it across a dinner table her whole life. It was the first time she'd been the one who earned it, and it sat in her like the sandwich had gone down wrong." }
        ] }
      ] },
      { ifFlag: 'epi-r-public-post', then: [
        { s: 'jaehyun', f: 'neutral', t: "I saw your post." },
        { n: "Measured. Not loud. Never loud, with him; loud was for people who hadn't finished thinking yet." },
        { s: 'jaehyun', f: 'neutral', t: "Somebody sent it to me. I don't have the app. I had to make an account to see it. Then I deleted the account." },
        { s: 'jaehyun', f: 'serious', t: "We're going to talk about it. Not here. Not this week." },
        { s: 'jaehyun', f: 'neutral', t: "Finish the sandwich." }
      ] },
      { n: "He walked her down to the lobby when the four hours were up, the careful step on the stairs, left side first, his bag on the good shoulder. At the door he stopped, the way he'd stopped her at a hundred doors, and she braced for the order out of habit." },
      { s: 'jaehyun', f: 'neutral', t: "Did you eat." },
      { s: 'solar', t: "You watched me eat." },
      { s: 'jaehyun', f: 'happy', t: "I'm checking." }
    ] }
  ]);

  /* ── Chenle ── */
  add('chenle', 'friend', [
    { id: 'epi-r-chenle-3', title: 'second thursday', hint: "The lab is supposed to be closed for finals. Chenle's corner light is on anyway.",
      after: '12/17', until: '12/19', slots: BOTH, events: ['epi-r-upward'],
      place: 'Syracuse · eSports Lab', time: 'After Class', scene: [
      { n: "The lab was closed for finals. Doyoung's sign said so. Chenle had a key, because Chenle was the one person in the program Doyoung trusted with a key, and the only light in the whole long dark room was the one over his corner station, where three windows sat side by side on his monitor, three versions of the quad at 9:41 on Monday morning, frozen." },
      { n: "He didn't say hi. He moved his bag off the second chair, which was hi." },
      { s: 'chenle', f: 'serious', t: "Three angles. Mine, from the library steps. The webcam on the bell tower, which the university streams twenty-four hours a day and nobody has ever watched. And a video somebody posted to SUanon at 9:44. I asked them for the original. They sent it." },
      { s: 'chenle', f: 'neutral', t: "People send you things if you ask politely and don't explain why." },
      { n: "He'd synced them. A spreadsheet underneath, his tiny careful capitals in the column headers, START (STOP), START (RISE), END. Timestamps down to the frame. The three clips ran together when he pressed play, the same snow from three directions, stopping, lifting, falling, and the numbers in the spreadsheet ticked along beside them like a pulse." },
      { s: 'chenle', f: 'serious', t: "Four point two seconds. On all three. Within two frames of each other." },
      { s: 'solar', t: "What is it?" },
      { s: 'chenle', f: 'neutral', t: "I don't know." },
      { s: 'chenle', f: 'neutral', t: "That's why I wrote it down. Somebody should write it down who doesn't exaggerate." },
      { n: "The folder on his desktop was named the date. Nothing else. *12-15-2025.* He'd never once in his life named a folder something it wasn't." },
      { choose: [
        { t: "Can I have a copy?", then: [
          { s: 'chenle', f: 'neutral', t: "Yes." },
          { n: "He made it while she was still finishing the question, three clips and the spreadsheet on a little drive from his drawer, and handed it to her, and it had the same name as his. *12-15-2025.* She put it in her coat pocket next to her hand, where she could feel the shape of it." },
          { stat: { knowledge: 1 } }
        ] },
        { t: "Delete it.", then: [
          { n: "He looked at her. Not at the screen. At her, which he did maybe twice a semester, and it went on long enough that she wished she hadn't said it." },
          { s: 'chenle', f: 'neutral', t: "No." },
          { s: 'chenle', f: 'serious', t: "Not because I want it. Because if it happens again, somebody's going to say it didn't happen the first time. I'd like to be able to say it did." },
          { s: 'chenle', f: 'neutral', t: "I won't show anyone. That's different from deleting it." },
          { bond: { chenle: 1 } }
        ] }
      ] },
      { s: 'chenle', f: 'neutral', t: "Thursdays I drive. This week's the second one." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'solar', t: "Does he talk about it? In the car?" },
        { s: 'chenle', f: 'neutral', t: "No. He goes in. I sit in the lot and do problem sets. It's a good lot for problem sets. Nobody honks." },
        { s: 'chenle', f: 'happy', t: "Last week he came out and said the coffee was worse than ours. That's the most he's said. I wrote it down." }
      ], else: [
        { s: 'solar', t: "Drive who?" },
        { s: 'chenle', f: 'neutral', t: "Someone. Somewhere. It's on the way to nothing." },
        { s: 'chenle', f: 'serious', t: "That's all I'm going to say about it. It isn't mine to say." }
      ] },
      { n: "He went back to the spreadsheet. She stayed in the second chair while he color-coded something that didn't need it, the three windows of snow paused on his screen in the blue light, and he didn't ask her a single thing. Not about Monday, not about the quad, not about why she'd watched the clip with her hand pressed flat on the desk like she was holding it down. He just made room, and kept the light on, and let her sit in it." }
    ] }
  ]);

  /* ── Jaemin ── */
  add('jaemin', 'friend', [
    { id: 'epi-r-jaemin-3', title: 'run of show', hint: 'Jaemin has taped the run of show for the nineteenth to the Sigma fridge and is defending it with his body.',
      after: '12/15', until: '12/18', slots: BOTH,
      place: 'Syracuse · Sigma Chi House', time: 'After Class', scene: [
      { music: 'epi-r-party' },
      { n: "The Sigma kitchen at four in the afternoon in finals week smelled like burnt coffee and orange cleaner and somebody's abandoned ramen, and on the fridge, held up by six magnets and a strip of gaffer tape, was a single printed sheet titled RUN OF SHOW (FINAL) (FINAL FINAL) in Jaemin's purple gel pen." },
      { n: "*8:00 · doors (JENO).* *8:15 · Hyein's looks arrive (EVERYONE LOOK).* *9:00 · a few words (JAEMIN, 3 min).* Somebody had crossed out the 3 and written *lol* in pencil. *10:00 · photo wall.* *12:00 · the toast (EVERYONE).* At the bottom, underlined twice: *NO PINK PUNCH. I MEAN IT. JENO.*" },
      { n: "Jaemin was standing in front of it with his arms folded like a bouncer. Jeno was at the island measuring something with his feet, heel to toe across the tile, counting under his breath. Jisung was on the floor surrounded by extension cords, untangling them with the patience of somebody who'd been told it was important." },
      { s: 'jaemin', f: 'happy', t: "Solar. Look at it. It's perfect. It's the most perfect document this house has ever produced and that includes the charter." },
      { s: 'jeno', t: "Doors is me. Nobody gets in who isn't on the list." },
      { s: 'jeno', t: "Unless they're fun." },
      { s: 'jaemin', f: 'serious', t: "Jeno." },
      { s: 'jeno', t: "Or they bring something." },
      { s: 'jaemin', f: 'serious', t: "JENO." },
      { n: "Next to the run of show, under its own magnet, a budget. Both houses, every line costed to the cent, the punch and the lights and the velvet, *velvet (retroactive),* and at the bottom in small neat print, *approved, D. Marsh.* Next to that, the committee list. Jaemin, Jeno, Jisung, Renjun *(decor, under protest).* And under Renjun, Mark." },
      { n: "Crossed off. One line, straight and clean, in blue ballpoint. Not purple. Nothing on that fridge was in blue except that one line." },
      { n: "Jaemin saw her see it. He didn't follow her eyes to it. He didn't need to." },
      { s: 'jaemin', f: 'neutral', t: "That's not my pen." },
      { s: 'jaemin', f: 'neutral', t: "I use purple. I don't cross people off. I just stop putting them in bold." },
      { n: "That was the whole of it. He didn't say whose pen it was. He didn't say anything else at all, and on Jaemin, who could talk about a napkin for nine minutes, the not-saying was so loud it echoed off the tile." },
      { ifEvent: 'epi-r-kitchen', then: [
        { n: "She knew whose pen. Johnny's capitals were all over the house chart in the hallway, the same blue, the same straight lines. She knew why, too, now, most of it, the part Mark had been willing to put into words across an island in this same kitchen, and she stood there looking at one blue line on a fridge and thought it was the quietest sentence anyone in this house had ever written." }
      ], else: [
        { n: "She didn't know whose pen. She didn't know why. She only knew that a whole house had decided something about Mark Lee without a meeting, which in this house meant it was serious, and that nobody was going to say it in front of her." }
      ] },
      { s: 'jaemin', f: 'happy', t: "Final decision. Yours. The theme. *Winter Formal,* or something with a little more soul." },
      { choose: [
        { t: "Winter Formal. Keep it simple.", then: [
          { s: 'jaemin', f: 'sad', t: "Simple. In my house." },
          { s: 'jaemin', f: 'neutral', t: "...Fine. I respect it. I'll put snowflakes on it. Tasteful snowflakes. Three." },
          { stat: { charm: 1 } }
        ] },
        { t: "Call it the emergency vacation.", then: [
          { s: 'jaemin', f: 'happy', t: "Oh, that's *evil.* Invite only. No signal. Everyone will think they missed something." },
          { s: 'jaemin', f: 'happy', t: "Everyone *did* miss something. That's the beauty of it." },
          { bond: { jaemin: 1 } }
        ] }
      ] },
      { n: "Jisung looked up from the extension cords. He had the face he always had before a question, open and pink-eared and completely without strategy." },
      { s: 'jisung', t: "Is Mark coming to the party?" },
      { n: "Nobody answered. Jeno stopped counting tiles. Jaemin looked at the run of show like it had suddenly developed a typo." },
      { s: 'jaemin', f: 'neutral', t: "Everyone's invited to my parties, Jisungie." },
      { s: 'jisung', t: "...But is he coming." },
      { s: 'jaemin', f: 'neutral', t: "Go find the long cord, baby. The orange one." },
      { n: "Jisung went. The kitchen went back to being a kitchen, the fridge hummed, Jeno resumed measuring, and the blue line stayed exactly where it was, the only thing on that whole fridge that nobody was going to talk about." }
    ] }
  ]);

  /* ── Danielle (rival) ── */
  add('danielle', 'rival', [
    { id: 'epi-r-danielle-3', title: 'for the records', hint: 'Danielle has taken over the Alpha dining room with the party budget, and she has saved you a chair.',
      after: '12/15', until: '12/18', slots: BOTH,
      place: 'Syracuse · Alpha Phi House', time: 'Evening', scene: [
      { music: 'epi-r-danielle' },
      { n: "The Alpha dining room, the long table nobody ate at, the chandelier with one dead bulb Chungha kept saying she'd replace. Danielle had covered every inch of the table in order. Receipts squared into stacks by date, a calculator with a paper tape curling off it onto the floor, the laptop, the red folder, and in front of the chair beside hers, set out exactly square, a single pen." },
      { n: "Chungha came through from the kitchen with a mug, saw them, and kept walking without slowing down. Chaeyeon, a minute later, did the same. Neither of them looked at the table. It was very noticeable, how much they didn't look at it." },
      { s: 'danielle', f: 'neutral', t: "Sit. This takes a minute. Most things do, if they're done right." },
      { s: 'danielle', f: 'neutral', t: "Both houses. Punch, which Jeno will ruin. Lights, which Jisung will plug in wrong. Velvet, which I approved after the fact, because Jaemin buys first and asks never, and somebody has to make a decision look like it was made on purpose." },
      { n: "She turned the formal list toward Solar with one finger. Alpha's half of the nineteenth. *Lee, Solar · +1.* And next to it, in Jaemin's purple, a question mark he'd drawn a little crown on." },
      { s: 'danielle', f: 'happy', t: "I can't budget a crown." },
      { s: 'danielle', f: 'neutral', t: "Initial it. For the records." },
      { s: 'solar', t: "Which records?" },
      { s: 'danielle', f: 'neutral', t: "The ones I keep." },
      { ifEpiRoute: 'haechan', then: [
        { ifFlag: 'epi-r-public-post', then: [
          { s: 'danielle', f: 'happy', t: "I could write his name in myself. Everyone knows it. You told them, which was very brave. I'd just rather it was in your hand." }
        ], else: [
          { s: 'danielle', f: 'happy', t: "Unless you'd like me to fill it in for you. I'm a very good guesser. It's my best quality." }
        ] }
      ] },
      { n: "The pen sat there between them. It was a nice pen, heavy, the kind her father signed things with. Solar understood, the way you understand the temperature of water before you're all the way in, that whatever she did with it was going to end up somewhere with a date next to it." },
      { choose: [
        { t: "(Initial it.)", flag: 'epi-r-danielle-initial', then: [ { glitch: { strain: 1 } },
          { n: "*S.L.,* in the box. Her neat hand, the thank-you-card hand, the one she'd been taught for people who could do things for her father. It looked very good on the page. It always did." },
          { s: 'danielle', f: 'happy', t: "Thank you. See? Painless." },
          { n: "Danielle blew on the ink, lightly, like a birthday candle, and filed the page in the red folder, and Solar watched it go in and felt it go in somewhere else too." }
        ] },
        { t: "(Leave it blank.)", flag: 'epi-r-danielle-blank', then: [
          { s: 'danielle', f: 'neutral', t: "That's an answer too." },
          { n: "She took the pen back, and drew a circle around the empty box, one smooth red line, and wrote nothing in it. The circle was the note." },
          { s: 'danielle', f: 'happy', t: "I'll write that down. I write everything down." }
        ] },
        { t: "Initial yours first.", flag: 'epi-r-danielle-blank', then: [
          { n: "Danielle smiled. It was the real one, which was worse." },
          { s: 'danielle', f: 'happy', t: "I don't go on lists, Solar. I keep them." },
          { n: "She drew a circle around Solar's empty box without looking down at it, like her hand already knew where it was." }
        ] }
      ] },
      { n: "She closed the laptop. She stood, receipts and folder and calculator tape all gathered into one neat armful in a single motion, as if she'd been rehearsing standing up her whole life, and looked down at Solar with something that was very nearly warm." },
      { s: 'danielle', f: 'neutral', t: "The nineteenth. Wear something you'd like to be remembered in." },
      { n: "Then she was gone, through the doorway and up the stairs, third step from the top silent under her as always, and her door shut with its soft click before Solar had even put together the first word of an answer. The chandelier's dead bulb ticked as it cooled. The chair beside her was still warm, and perfectly pushed in." }
    ] }
  ]);

  /* ── Mark ── */
  add('mark', 'friend', [
    { id: 'epi-r-mark-3', title: 'honestly', hint: 'Somebody is playing the forgotten piano on the third floor of the Hall of Languages. Badly.',
      after: '12/17', until: '12/19', slots: BOTH, events: ['epi-r-kitchen'],
      place: 'Syracuse · Hall of Languages', time: 'After Class', scene: [
      { n: "The third floor of the Hall of Languages emptied out in finals week, seminar rooms dark, the old radiators clanking for nobody, and at the end of the corridor was a room the music department had forgotten it owned, with an upright piano in it that had been out of tune since about 1990. Somebody was playing it. Badly. Then stopping. Then starting again, from the same place, the same wrong note." },
      { n: "She knew who before she reached the door. The narrow window in it showed her the back of a gray coat thrown over the bench, and his shoulders, and his hands. He didn't know she was there." },
      { n: "He played eight bars and went wrong on the ninth and swore at the piano, softly, not the piano's fault, and sat with his hands in his lap for a long moment. Then he went back to the top. Slower. The same eight bars, and this time the ninth didn't go wrong. It went somewhere she didn't expect, down instead of up, and it stayed there, and it was good. Not good in the way that wanted her for anything. Just good, in an empty room, on a piano nobody had tuned for thirty years." },
      { ifFlag: 'epi-r-mark-door', then: [
        { n: "*Make music honestly. Then we'll see.* She'd said it across an island on Tuesday morning, and he'd looked at her like she'd handed him something heavy and breakable and told him to carry it home without a bag. This was him carrying it. She could hear that he didn't know if he was doing it right." }
      ], else: [
        { n: "She hadn't said anything to him in that kitchen that he could take with him. She'd let him say his piece, all of it, and let it sit on the island between them, and walked out with nothing in her hands for him. He was playing anyway. That seemed to be the point." }
      ] },
      { n: "He saw her in the window. His hands came off the keys. He didn't wave her in, and he didn't get up. He just lifted his hand an inch off his knee, like somebody acknowledging a car that had let them cross." },
      { choose: [
        { t: "(Go in.)", then: [
          { n: "She went in. The room smelled like dust and radiator. He moved over on the bench without being asked, to the far end, as far as the bench went, and that was all the room he made, and it was enough." },
          { s: 'mark', f: 'flustered', t: "It's not done. It's not anything yet." },
          { s: 'mark', f: 'serious', t: "It's mine, though. Nobody's on it but me. That's the only thing I know about it so far." },
          { ifYear: { noFlag: 'arrived-mark' }, then: [
            { s: 'mark', f: 'sad', t: "You didn't see me over there. That was probably right. I keep thinking it, and it keeps being right." }
          ] },
          { s: 'mark', f: 'neutral', t: "I wrote the first eight bars over there. It's the only thing I brought back with me that I didn't take from somebody." },
          { n: "He played it again from the top. The wrong note came back on the ninth bar, the way wrong notes do when somebody's watching, and he didn't stop this time. He played through it, and past it, and found the place where it went down instead of up, and it was better the second time than the first, which was the most honest thing she'd ever heard him do." },
          { s: 'mark', f: 'serious', t: "I'm not going to ask you if it's good." },
          { s: 'mark', f: 'neutral', t: "That's the deal I made with myself. I don't get to use you to find out." },
          { bond: { mark: 1 } }
        ] },
        { t: "(Listen from the hall.)", then: [
          { n: "She stayed where she was. He looked at her through the glass for one more second, and then turned back to the piano and played it for the empty room, all of it, start to finish, not for her, and she stood in the cold corridor and listened to every bar." },
          { ifYear: { noFlag: 'arrived-mark' }, then: [
            { n: "He'd been over there. She hadn't seen him once, a whole year, and he'd seen all of it. He'd told her that was probably right. Listening to him through a door, she thought it probably was, and that it was also the saddest thing she'd ever agreed with." }
          ] },
          { n: "When it was done he sat with his hands on his knees, and didn't look back at the window. She was almost sure he'd had to make himself not look." }
        ] }
      ] },
      { n: "When she turned to go, he looked at her a beat too long. Not the old way, the measuring way, the receipt way. The way you'd glance back at a light you'd left on, to check that it was still on. He didn't say anything. He'd seen something at the island on Tuesday that he'd never say a word about, to her or to anyone, and she knew he'd seen it, and he knew she knew. It was the one thing he got right that December. She didn't thank him for it. It wasn't the kind of thing you thanked a person for." },
      { s: 'mark', f: 'neutral', t: "Okay. Good luck with the rest of them, Sol." }
    ] }
  ]);

  /* ── Texts ── */
  const T = (R.texts ||= {});
  (T.texts ||= []).push(
    { id: 'epi-r-tx-han-reminder', thread: 'dad', date: '12/15', slot: 'after', msgs: [
      { from: 'dad', t: 'Good afternoon, Solar. This is Ms. Han.' },
      { from: 'dad', t: 'A reminder that your winter break travel needs to be confirmed by Thursday, the eighteenth. Arrangements for Sunday are in place pending your confirmation.' },
      { from: 'dad', t: "Mr. Lee has asked me to note, again, that he is still waiting for the advisor's name." }
    ], reply: [
      { t: "i'll confirm by thursday", then: [{ from: 'dad', t: 'Thank you, Solar. Good luck with your examinations.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'dad', t: "I'll note that the message was received. Again." }] }
    ] },
    { id: 'epi-r-tx-team-last', thread: 'team', date: '12/15', slot: 'late', msgs: [
      { from: 'doyoung', t: 'lab is closed for finals. i mean it. i will know' },
      { from: 'doyoung', t: 'saturday 2pm is the last practice before break. not optional. bring your regionals notes' },
      { from: 'olivia', t: 'LAST PRACTICE OF THE YEAR' },
      { from: 'olivia', t: "i'm going to cry. not now. saturday" },
      { from: 'haerin', t: 'ok' }
    ], reply: [
      { t: "see you saturday", then: [{ from: 'doyoung', t: '2pm. not 2:05' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'chenle', t: "she read it at 11:48. that's a studying time. leave her alone" }] }
    ] },
    { id: 'epi-r-tx-girls-upward', thread: 'girls', date: '12/15', slot: 'evening', events: ['epi-r-upward'], msgs: [
      { from: 'hyein', t: 'hyein: has everyone seen the snow video' },
      { from: 'hyein', t: 'hyein: the quad one. its on every single story. jeno posted it four times with four different songs' },
      { from: 'hanni', t: 'hanni: sol were you out there' },
      { from: 'hyein', t: 'hyein: she was out there. she had stats' }
    ], reply: [
      { t: "i was out there", then: [{ from: 'hanni', t: 'hanni: are you ok' }, { from: 'hyein', t: 'hyein: ARE you ok' }] },
      { t: "it was an inversion layer", then: [{ from: 'hyein', t: 'hyein: a WHAT' }, { from: 'hanni', t: 'hanni: sol.' }, { from: 'hanni', t: "hanni: i'm coming up with tea" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'hanni', t: "hanni: coming up with tea. don't argue" }] }
    ] },
    { id: 'epi-r-tx-mark-listening', thread: 'mark', date: '12/16', slot: 'late', events: ['epi-r-kitchen'], msgs: [
      { from: 'mark', t: 'thank u for listening' },
      { from: 'mark', t: 'thats all' }
    ], reply: [
      { t: "goodnight mark", then: [{ from: 'mark', t: 'night' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-tx-hc-home-2', thread: 'haechan', date: '12/16', slot: 'late', flag: 'epi-route-haechan', msgs: [
      { from: 'haechan', t: 'home' },
      { from: 'haechan', t: "same as last time. i'm keeping the rule boring on purpose" }
    ], reply: [
      { t: "home too", then: [{ from: 'haechan', t: 'good' }, { from: 'haechan', t: 'sleep princess. actually sleep' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'haechan', t: 'read receipt counts' }] }
    ] },
    { id: 'epi-r-tx-mom-car', thread: 'mom', date: '12/17', slot: 'after', msgs: [
      { from: 'mom', t: 'Ms. Han says the car will come Sunday morning.' },
      { from: 'mom', t: "Your father will be at the apartment. He's taking the whole week. I don't know what that means either." },
      { from: 'mom', t: "Your place card is still on your desk. I'm putting it out on the twenty-fourth whether anyone tells me anything or not." }
    ], reply: [
      { t: "i'm working on it", then: [{ from: 'mom', t: "That's all I'm asking. Wear the gray coat." }] },
      { t: "has he said anything", then: [{ from: 'mom', t: "He asked if you'd eaten. That's how he says things." }] }
    ] },
    { id: 'epi-r-tx-girls-microwave', thread: 'girls', date: '12/18', slot: 'after', events: ['epi-r-clocks'], msgs: [
      { from: 'hyein', t: 'hyein: i reset the microwave' },
      { from: 'hyein', t: 'hyein: it says 1:12 now. like a normal microwave' },
      { from: 'hyein', t: "hyein: i don't trust it" },
      { from: 'hanni', t: 'hanni: i put a sticky note on it that says BEHAVE' }
    ], reply: [
      { t: "is it behaving", then: [{ from: 'hyein', t: "hyein: for now. i'm watching it" }, { from: 'hanni', t: 'hanni: she pulled a chair up' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'hanni', t: 'hanni: we love you. text us later. or dont. but we love you' }] }
    ] },
    { id: 'epi-r-tx-jaemin-dress', thread: 'jaemin', date: '12/18', slot: 'evening', msgs: [
      { from: 'jaemin', t: 'one day.' },
      { from: 'jaemin', t: 'reminder. festive but NOT department store' },
      { from: 'jaemin', t: 'someone sent me a sweater with a reindeer on it. as a question. i have blocked them' },
      { from: 'jaemin', t: "ur in bold. bold means u can't be late" }
    ], reply: [
      { t: "what time", then: [{ from: 'jaemin', t: "8. 8:15 if ur in hyein's looks. hyein's looks arrive at 8:15 so everyone sees them arrive" }, { from: 'jaemin', t: "it's in the run of show. it's on the fridge. it's LAW" }] },
      { t: "is the reindeer person ok", then: [{ from: 'jaemin', t: "they're on a journey" }, { from: 'jaemin', t: "i hope it takes them somewhere festive but NOT department store" }] }
    ] },
    { id: 'epi-r-tx-chenle-fact', thread: 'chenle', date: '12/18', slot: 'late', msgs: [
      { from: 'chenle', t: 'second thursday. he went in at 6:58. came out at 9:04' },
      { from: 'chenle', t: "that's the fact. goodnight" }
    ], reply: [
      { t: "thank you for driving", then: [{ from: 'chenle', t: "same spot as last week. i'm a creature of habit" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-tx-jaehyun-car', thread: 'jaehyun', date: '12/19', slot: 'after', msgs: [
      { from: 'jaehyun', t: "Car's at nine Sunday. Ms. Han booked it for two." },
      { from: 'jaehyun', t: 'Eat before the party. Food. Not punch.' }
    ], reply: [
      { t: "i'll eat", then: [{ from: 'jaehyun', t: 'Good.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jaehyun', t: 'Solar.' }, { from: 'jaehyun', t: 'Eat.' }] }
    ] },
    { id: 'epi-r-tx-minji-ask', thread: 'minji', date: '12/19', slot: 'after', flag: 'epi-route-minji', msgs: [
      { from: 'minji', t: "it's the nineteenth. i'm asking." },
      { from: 'minji', t: 'the calendar says ask. so. can i keep you in it. you can say no. you can say not tonight' }
    ], reply: [
      { t: "yes", then: [{ from: 'minji', t: "ok. i'm writing it on a card. same color as the first one" }] },
      { t: "ask me after the party", then: [{ from: 'minji', t: "ok. after. i'll ask after" }, { from: 'minji', t: "i'll keep asking. that's the whole point of me" }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-r-am-girls-gerald', thread: 'girls', from: '12/16', to: '12/19', msgs: [
      { from: 'hyein', t: "hyein: update. hanni's mom asked if mr lodge got the card yet" },
      { from: 'hyein', t: 'hyein: MR LODGE' },
      { from: 'hanni', t: "hanni: i'm going to move to the adirondacks and become gerald" }
    ], reply: [
      { t: "gerald would want you to stay", then: [{ from: 'hyein', t: 'hyein: GERALD WANTS U TO STAY' }, { from: 'hanni', t: 'hanni: ok. for gerald' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'hanni', t: "hanni: she's laughing. i can tell. the read receipt is laughing" }] }
    ] },
    { id: 'epi-r-am-hc-tape', thread: 'haechan', from: '12/16', to: '12/19', flag: 'epi-route-cover', msgs: [
      { from: 'haechan', t: 'hyein put a tape measure around my neck in the dining hall line' },
      { from: 'haechan', t: 'in front of jisung' },
      { from: 'haechan', t: "i didn't agree to anything" }
    ], reply: [
      { t: "did you hold still", then: [{ from: 'haechan', t: '...i held still' }] },
      { t: "she does that", then: [{ from: 'haechan', t: "she said 'it's for the art' and walked off" }, { from: 'haechan', t: "i'm still standing here" }] }
    ] },
    { id: 'epi-r-am-hc-audio', thread: 'haechan', from: '12/16', to: '12/19', flag: 'epi-route-minji', msgs: [
      { from: 'haechan', t: 'every video of the snow thing has the same audio at 0:03' },
      { from: 'haechan', t: "everybody stops talking at once. that's the part. not the snow" }
    ], reply: [
      { t: "you listened to all of them?", then: [{ from: 'haechan', t: "i listen to everything. it's a problem" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-am-team-charger', thread: 'team', from: '12/16', to: '12/19', msgs: [
      { from: 'olivia', t: 'WHO HAS A CHARGER. BIRD 4TH FLOOR' },
      { from: 'olivia', t: 'i will pay in snacks' },
      { from: 'haerin', t: 'me' },
      { from: 'olivia', t: 'HAERIN I LOVE YOU' },
      { from: 'haerin', t: 'table 12' }
    ], reply: [
      { t: "olivia it's the quiet floor", then: [{ from: 'olivia', t: "i'm typing QUIETLY" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] }
  );

  /* ── Routines (week 3; daily-life format) ── */
  (R.routines ||= []).push(
    { id: 'epi-r-rt-suanon', slot: 'after', after: '12/15', until: '12/16', events: ['epi-r-upward'], place: 'Syracuse · Bird Library', time: 'After Class', scene: [
      { n: "Bird Library in finals week, every table full, every outlet claimed, and on every table a phone face up, because nobody on the whole campus could stop looking. SUanon had been on fire since a quarter to ten." },
      { n: "*not to be dramatic but the snow went UP. like UP up. i have a video.* Four hundred and twelve likes. Under it: *climate change is so back.* Under that: *its an inversion layer my roommate is a meteorology major.* Under that: *your roommate is lying to you.*" },
      { n: "*it was a drone show for finals. the university loves us.* Then, immediately: *the university has never loved us one day in its life.* Somebody had posted a slowed-down clip with a sad piano over it. Somebody else had replied, simply, *someone get the bad wifi king on this,* and Jeno had replied to that with a single crown, and nothing else, which was somehow the most frightening comment in the thread." },
      { n: "At the next table two boys in hockey hoodies were arguing in whispers about whether you could fake snow. At the table beyond that a girl was watching the clip on loop with her earbuds in and her mouth slightly open, and she'd been doing it, as far as Solar could tell, for twenty minutes." },
      { choose: [
        { t: "(Like the inversion layer one.)", then: [
          { n: "She liked it. It was a perfectly good explanation, and she picked it the way you'd pick a coat off a hook in somebody else's house, because it was there and it was close to her size. It didn't keep her any warmer. She knew it wouldn't." }
        ] },
        { t: "(Close the app. Open the textbook.)", then: [
          { n: "She closed it, and turned the phone face down, and opened the textbook to the chapter she'd been avoiding, and read it properly, the whole thing, because it was full of things that stayed where you put them, and she'd never in her life been so grateful for a regression line." },
          { stat: { knowledge: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-r-rt-allnighter', slot: 'evening', after: '12/16', until: '12/18', place: 'Syracuse · Alpha Phi House', time: 'Night', scene: [
      { music: 'epi-r-home' },
      { n: "The Alpha living room the night before a final looked like a field hospital. Girls on every cushion and most of the rug, laptops balanced on knees, a pizza box open on the coffee table with two slices left that everyone was too polite to take, and Olivia at the center of it all with six highlighters fanned out in one hand like a winning poker hand, explaining a system nobody had asked about to everyone at once." },
      { s: 'olivia', t: "Yellow is facts. Pink is facts I'll forget. Orange is facts I've already forgotten. Green is vibes." },
      { s: 'solar', t: "What's blue?" },
      { s: 'olivia', t: "Blue is *I'm scared.* There's a lot of blue in this one." },
      { n: "Yerim came in from the kitchen with a tray of mugs, steam rising off them, bright and pink-cheeked in her socks, and started handing them out without asking anybody what they wanted." },
      { s: 'yerim', t: "Chamomile! It's for anxiety. My mom says it's for anxiety. I don't know if it works. I just really like the word." },
      { ifEvent: 'epi-r-clocks', then: [
        { n: "The clock on the mantel said 9:14. That morning it had said twelve, like every clock in the house had, all of them at once, and everyone had seen it. Now it said 9:14, and then 9:15, and kept on saying the right thing minute after minute, carefully, like it was apologizing. Nobody in the living room looked at it. Everybody in the living room knew exactly where it was." }
      ], else: [
        { n: "The clock on the mantel said 9:14, and then 9:15. She watched it do that. It was a good clock. It had kept the right time over that fireplace for longer than any of them had been alive, and it was doing a good job, and she watched it do its good job for a full minute before she made herself look back at her notes." }
      ] },
      { choose: [
        { t: "(Stay up with them. Blue highlighter.)", then: [
          { n: "She stayed. She took the blue highlighter off Olivia without asking, which Olivia took as the highest compliment of her life, and highlighted until her page was more blue than white, and at some point Yerim fell asleep against her shoulder with a mug still in her hand, and Solar took the mug out of it so carefully that Yerim never knew." },
          { stat: { knowledge: 1 } }
        ] },
        { t: "(Go up before it's midnight.)", then: [
          { n: "At half past eleven she gathered her things. Olivia said *traitor* with real love. She didn't say why she wanted to be upstairs before twelve, and nobody asked, and on the stairs she found she was going a little faster than she needed to, and didn't let herself think about why that was either." },
          { stat: { courage: 1 } }
        ] }
      ] }
    ] },

    { id: 'epi-r-rt-packing', slot: 'after', after: '12/19', until: '12/20', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Afternoon', scene: [
      { n: "The suitcase was open on the bed, the big one, her mother's list running in her head in her mother's voice. Two nice dresses. The gray coat. Shoes that weren't sneakers. Something for church, in case. She folded things into it in the order she'd been taught, heaviest at the wheels, nothing creased." },
      { n: "The other bag was under the desk. The duffel from the trip, if you could call it that, unzipped halfway since the first of December. She'd taken things out of it from the top over three weeks, a toothbrush, a sweater, a charger, the way you'd take things from the top of a pile you didn't want to tip over. She'd never once gone to the bottom. There was something folded down there. She knew what it was by its weight, and by the way the room changed a little when she thought about it." },
      { n: "She didn't open it. She looked at it for a while, and then she went back to the suitcase." },
      { n: "Her team jersey was on top of the dresser, the one Hyein had taken in, the XL that wasn't an XL anymore. Her father had never seen it. Her father didn't know there was anything to see." },
      { choose: [
        { t: "(Pack the jersey.)", then: [
          { n: "She folded it the way you'd fold a flag and put it in the suitcase, on top, where it would be the first thing she saw when she opened it in a bedroom on the Upper East Side with a choir folder on the desk that nobody had moved in three years. She didn't know what she'd do with it there. She only knew she wasn't leaving it behind." },
          { stat: { courage: 1 } }
        ] },
        { t: "(Leave it on the dresser.)", then: [
          { n: "She left it where it was. It would be here when she got back. Some things were safer where they were, she told herself, and zipped the suitcase shut, and didn't look under the desk, and didn't look at the jersey either, and stood in the middle of her own room for a minute with nothing in her hands." }
        ] }
      ] }
    ] }
  );
})();
