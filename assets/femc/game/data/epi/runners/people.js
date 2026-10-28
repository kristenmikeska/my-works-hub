/* The Runners epilogue, part 1 (12/1-12/14): the home bonds' hangouts (R.bonds) and the act's texts (R.texts).
   Writer C, epilogue batch 3. Data only; loaded with the world (epilogue.js). Story events live in story-w1.js / story-w2.js.

   Bonds (role 'friend' unless noted; the first unseen hangout whose gates fit is the one offered):
     haechan   epi-r-haechan-1   'burnt'           12/3-12/5, after epi-r-confession, noFlags epi-r-stem-deleted (the warm one)
               epi-r-haechan-1b  'checked twice'   12/3-12/5, after epi-r-confession, flags epi-r-stem-deleted (the cold one)
               epi-r-haechan-2   'low tide'        12/9-12/11 (before Thursday night), after epi-r-studio (branches by route)
               epi-r-haechan-3   'the side gate'   12/11-12/14 evening, route haechan, after epi-r-playback (his room; cuts away)
               epi-r-haechan-3b  'eleven pm'       12/11-12/14 evening, noRoute haechan (the duo queue)
     hanni     epi-r-hanni-1 'pancakes' 12/2-12/5 (after epi-r-cover) · epi-r-hanni-2 'the binder' 12/11-12/14 (after epi-r-strategy)
     hyein     epi-r-hyein-1 'taking it in' 12/2-12/5 · epi-r-hyein-2 'velvet' 12/10-12/14 (after epi-r-regionals-2)
     minji     epi-r-minji-1 'duo' 12/2-12/5 evening · epi-r-minji-2 'the lamppost' 12/8-12/14 (after epi-r-regionals-2)
     mark      epi-r-mark-1 'no notes' 12/2-12/5 · epi-r-mark-2 'her order' 12/8-12/14 (after epi-r-regionals-2)
     jaehyun   epi-r-jaehyun-1 'treatment' 12/3-12/5 (after epi-r-did-you-eat) · epi-r-jaehyun-2 'helpful' 12/11-12/14 (after epi-r-strategy)
     chenle    epi-r-chenle-1 'forty-one for forty-one' 12/2-12/5 · epi-r-chenle-2 'thursday' 12/9-12/14 (after epi-r-studio)
     jaemin    epi-r-jaemin-1 'the architect' 12/2-12/5 · epi-r-jaemin-2 'the list' 12/9-12/14 (after epi-r-regionals-2)
     danielle  (role 'rival') epi-r-danielle-1 'the second landing' 12/2-12/5 (after epi-r-cover)
               epi-r-danielle-2 'intro to business' 12/8-12/12, Mon/Wed/Fri
   Flags set: epi-r-minji-drive (Solar took Minji's hard drive), epi-r-jaehyun-warned (she told Jaehyun to be careful with
     Danielle), epi-r-hc-thursday (she asked what Thursday is, in the lab).
   Flags read: epi-r-stem-wait / -file / -deleted, epi-r-danielle-print, epi-r-public-post, epi-route-* (via ifEpiRoute and
     text flags), y- flags none.
   ifYear read: xmas haechan (haechan-1, the five minutes), rank haechan 10 (haechan-1b), rank hyein 7 (hyein-1, the coat),
     romance minji (minji-1, minji-2), noFlag arrived-mark / arrived-chenle / arrived-jaemin (the missed-searcher lines),
     flag danielle-refused / danielle-sold (danielle-2).
   Texts: groups girls, team; 18 dated (12/1-12/14), 6 ambient (three route-gated after 12/8). Ms. Han writes from 'dad'.
   Canon held: the track has no title; the valley promise is never paid; he never asks anyone about her; the jacket stays in the
   bag; Hanni/Hyein/Jaemin/Jaehyun don't know about the stem; nobody but Danielle has seen a print. Decision: Jaemin pays Hyein's
   deposit on 12/9 (cash, an envelope that says FOR THE ARTIST). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  const B = (R.bonds ||= {});
  // After the confession (epi-r-confession sets exactly one of the three stem flags).
  const told = (yes, no) => ({ ifFlag: 'epi-r-stem-wait', then: yes, else: [{ ifFlag: 'epi-r-stem-file', then: yes, else: [{ ifFlag: 'epi-r-stem-deleted', then: yes, else: no }] }] });
  const BOTH = ['after', 'evening'];

  /* ── Haechan ── */
  B.haechan = { id: 'haechan', role: 'friend', hangouts: [
    { id: 'epi-r-haechan-1', title: 'burnt', hint: "Haechan is at the back of the café on Marshall Street with a laptop and a coffee he's clearly offended by.",
      after: '12/3', until: '12/5', slots: BOTH, events: ['epi-r-confession'], noFlags: ['epi-r-stem-deleted'],
      place: 'Syracuse · Marshall Street · Café', time: 'After Class', scene: [
      { n: "He was at the back table, the one by the radiator that nobody wanted because it was either freezing or a sauna, headphones round his neck and a laptop open on a waveform that wasn't hers. She could tell from the door. She didn't know how she could tell, and she didn't like that she could." },
      { n: "He saw her come in. He didn't wave. With him that was practically a parade." },
      { n: "She sat down, which she didn't have to do, and he moved the laptop an inch to the left so she had room, which he didn't have to do either. There was a coffee in front of him, black, holding the particular gray film of something that had been brewed at nine in the morning and kept warm on a plate for six hours out of spite." },
      { s: 'solar', t: "Is it good?" },
      { s: 'haechan', f: 'neutral', t: "It's been on a plate since nine." },
      { s: 'solar', t: "So you're drinking it." },
      { s: 'haechan', f: 'neutral', t: "I'm punishing it." },
      { n: "There was a second cup on the table, too, by her elbow. A strawberry refresher, sweating a ring onto the wood, the ice already half gone, which meant it had been sitting there a while, which meant he'd bought it before she'd decided to come in, before she'd even decided to walk down Marshall Street at all. She didn't drink coffee after three. She hadn't told him that. She hadn't told him that in any of her lives." },
      { s: 'solar', t: "Who's that for." },
      { n: "He didn't answer. He pushed it an inch closer to her with one finger, and went back to the waveform, and that was that." },
      { ifFlag: 'epi-r-stem-file', then: [
        { s: 'haechan', f: 'serious', t: "You've got the only copy. I checked the drive twice. Then I checked it again because I didn't trust the first two." }
      ], else: [
        { s: 'haechan', f: 'serious', t: "Nothing's open. I haven't touched it. It's sitting exactly where it was when you walked out, and it's going to keep sitting there till you say something different." }
      ] },
      { choose: [
        { t: "I know. I believe you.", then: [
          { n: "He went still. Not the performance of still, the real one, the jaw doing something small and then stopping itself, the cursor on the screen not moving for a full second." },
          { s: 'haechan', f: 'neutral', t: "...Okay." },
          { n: "Flat. Then, under it, something that wasn't." }
        ] },
        { t: "Why are you telling me again?", then: [
          { s: 'haechan', f: 'neutral', t: "Because I'm going to keep telling you till it's boring." },
          { s: 'haechan', f: 'serious', t: "It should be boring. It should be the most boring thing you know about me." }
        ] }
      ] },
      { ifYear: { xmas: 'haechan' }, then: [
        { n: "She took the lid off the refresher and drank, because it was there and she was thirsty and refusing it would have meant something, and she wasn't ready for anything to mean something yet." },
        { s: 'solar', t: "It took me four minutes. That morning. In the hallway." },
        { s: 'haechan', f: 'neutral', t: "Three fifty-one." },
        { s: 'solar', t: "You timed it." },
        { s: 'haechan', f: 'happy', t: "I said I would." }
      ] },
      { n: "Then he put the headphones on, one ear, the other one off so she knew he could still hear her, and went back to his client's mix, and she sat there and drank the whole refresher down to the pink ice while the radiator knocked and the window fogged and Marshall Street went blue outside it. Forty minutes. Neither of them said anything else, and neither of them called it anything, and it was the first time since she'd come home that she hadn't felt like she was holding something up." },
      { s: 'haechan', f: 'neutral', t: "Go home before it's dark, princess. Saturday." }
    ] },

    { id: 'epi-r-haechan-1b', title: 'checked twice', hint: 'Haechan is on the Extracurricular Building stairs, between the two floors.',
      after: '12/3', until: '12/5', slots: BOTH, events: ['epi-r-confession'], flags: ['epi-r-stem-deleted'],
      place: 'Syracuse · Studio 4B · Hallway', time: 'After Class', scene: [
      { n: "He was sitting on the landing halfway between the lab and the studios, which was nobody's floor, headphones on, and she could tell from the bottom of the stairs that there was nothing playing in them. He took them off when he saw her. He didn't stand up." },
      { s: 'haechan', f: 'serious', t: "It's gone." },
      { s: 'haechan', f: 'serious', t: "The stem. The session. The bounce. The backup on the other drive, and the one in the cloud I forgot about until two in the morning. All of it." },
      { s: 'haechan', f: 'neutral', t: "I'd show you the empty folder. That's not proof of anything. I know that." },
      { choose: [
        { t: "Okay.", then: [
          { s: 'haechan', f: 'neutral', t: "Okay." }
        ] },
        { t: "(Say nothing.)", then: [
          { n: "She said nothing. He nodded like she had, like nothing was an answer he'd been expecting and had decided, somewhere on that landing, that he could live inside." }
        ] }
      ] },
      { ifYear: { rank: { haechan: 10 } }, then: [
        { n: "He'd told her once, on a dryer, in a laundry room in another country, that he owed her the truth about one thing. He'd paid it. She'd told him what to do with it. There was nothing left on the table between them now, which was supposed to feel lighter than it did." }
      ] },
      { s: 'haechan', f: 'neutral', t: "Your cleanse has been half a second late since you got back. You'll fix it by Saturday." },
      { n: "He put the headphones back on and turned to the window, and she went down the stairs, and it was only at the bottom that she noticed he hadn't called her anything. Not princess, not pretty girl, not sweetheart, not even her name. It was the most careful he'd ever been with her, and it felt exactly like a door." }
    ] },

    { id: 'epi-r-haechan-2', title: 'low tide', hint: 'Somebody cleared the snow off one corner of the Language Arts roof.',
      after: '12/9', until: '12/11', slots: BOTH, events: ['epi-r-studio'],
      place: 'Syracuse · Language Arts Rooftop', time: 'After Class', scene: [
      { n: "The ladder was cold enough to hurt through her gloves. At the top, the whole roof was white and flat and untouched except for one corner by the ledge, where somebody had kicked the snow away in long impatient strokes, down to the gravel, and was sitting in the space he'd made with his knees up and his hood up and a can of something pink in his coat pocket that he took out and held toward her without turning his head." },
      { s: 'haechan', f: 'neutral', t: "It's cold already. The roof did it for me." },
      { n: "She took it. Monster Pink Punch, cold enough to ache her teeth. She sat down next to him on the gravel, and the cold came up through her jeans immediately, and she decided she didn't care, which was a decision she'd been making a lot lately and not examining." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'haechan', f: 'serious', t: "Thursday night. Seven to nine. I'm going to be somewhere. You said tell you when I'm going to be gone. So I'm telling you." },
        { s: 'solar', t: "Somewhere." },
        { s: 'haechan', f: 'neutral', t: "Somewhere with chairs in a circle and bad coffee. I'll tell you the rest when I've been more than once. I don't want to tell you about a thing I've done once." },
        { n: "She knew what it cost him to say even that much, because she could see it on him, the way his thumb went looking for a lighter in his pocket that wasn't there anymore and came back empty and rested on her knee instead. She let it. She put her hand over it. It was freezing. So was hers." }
      ], else: [
        { n: "He asked about Hyein's velvet. He knew the whole Jaemin saga, start to finish, the moodboard and the envelope and the glitter, because over there he'd sat up in a laundry room with Hanni at three in the morning more than once, and Hanni told everything to people who sat up with her at three in the morning. He was warmer with them than he had any right to be. She'd stopped being surprised by it somewhere in October of a year that hadn't happened here." },
        { s: 'haechan', f: 'neutral', t: "Tell Hyein the lapels are wrong on the third one. She'll yell at me. It'll make her week." }
      ] },
      { n: "The light went the color it always went up there in winter, a thin gold that didn't warm anything. He looked at it for a long time. Then he said, to nobody, in the voice of somebody reading a sign out loud," },
      { s: 'haechan', f: 'neutral', t: "Low tide's at four twelve." },
      { s: 'solar', t: "We're in Syracuse." },
      { n: "He frowned. Not at her. At himself, at the sentence, like he'd found it in his pocket and didn't remember putting it there." },
      { s: 'haechan', f: 'serious', t: "...Yeah." },
      { choose: [
        { t: "Where's the tide, Donghyuck?", then: [
          { n: "His name, the real one, in the cold. He didn't retreat to a pet name this time. He just looked at the sky." },
          { s: 'haechan', f: 'sad', t: "Nowhere. I don't know why I said it. Sometimes I know what time it is somewhere I've never been." },
          { s: 'haechan', f: 'neutral', t: "Forget it." }
        ] },
        { t: "(Let it go.)", then: [
          { n: "She let it go. It didn't go far. It sat on the roof with them for the rest of the hour like a third person, small and patient, and when they climbed down, it climbed down too." }
        ] }
      ] },
      { n: "She didn't forget it. She was beginning to suspect she wasn't built to forget anything anymore." }
    ] },

    { id: 'epi-r-haechan-3', title: 'the side gate', hint: "Haechan's light is on at Sigma, and the side gate is off the latch.",
      after: '12/11', until: '12/14', slots: ['evening'], route: 'haechan', events: ['epi-r-playback'],
      place: 'Syracuse · Sigma Chi House · His Room', time: 'Night', scene: [
      { music: 'epi-r-romance' },
      { n: "The side gate was the one Mark used to let her in through, back when Mark letting her in had been a favor with a receipt stapled to it. Tonight it was off the latch, and nobody was standing at it, and nobody was going to ask her for anything for walking through it. She went up the back way. Renjun was in the kitchen window with the sash pushed up two inches and his morning smoke happening at ten at night, which was the most Renjun thing she'd ever seen, and he watched her cross the yard and lifted the joint an inch, like a toast." },
      { s: 'renjun', t: "I didn't see you." },
      { s: 'solar', t: "Thanks, Renjun." },
      { s: 'renjun', t: "Didn't see that either." },
      { n: "His room smelled like vanilla and solder and the cold coming off the window. He was at the desk with the track paused on the screen, the long untitled block of it sitting there in gray with no name on the session, and when she came in he didn't turn around right away. He reached over and turned his phone face down. Then he picked it back up and held the button down until the screen went black, all the way off, while she watched. There was a Post-it stuck over the laptop's camera in his terrible handwriting. It said *off.*" },
      { s: 'haechan', f: 'neutral', t: "You're early." },
      { s: 'solar', t: "You didn't say a time." },
      { s: 'haechan', f: 'neutral', t: "I didn't say anything." },
      { s: 'solar', t: "You left the gate." },
      { n: "He turned around then. The desk lamp was the only light, and it did what lamps always did to him, found the line of his jaw and the tired under his eyes and left the rest to her. She'd had a whole speech, a short one, about terms, about the thing they'd said in 4B and what it meant to walk into this house through the back. She forgot it somewhere between the door and his chair, which was annoying, because she'd been proud of it." },
      { n: "He didn't reach for her. That was the thing. He sat there with his hands on his knees and let her be the one to cross the last three feet of floor, and she did, and stood between his knees, and put her cold hands on either side of his face, and felt him breathe in sharp at the cold and not move away from it." },
      { s: 'haechan', f: 'flustered', t: "Your hands are criminal." },
      { s: 'solar', t: "Then do something about it, Hyuck." },
      { s: 'haechan', f: 'serious', t: "Say it again." },
      { n: "She said it against his mouth instead, and he kissed her like he'd been waiting for permission in a language he was still learning, slow and then not slow at all, his hands finally coming up, finding her waist under the coat and pushing the coat off her shoulders onto the floor where neither of them would think about it again until morning. The chair creaked. The radiator knocked. Somewhere downstairs a door went and somebody laughed, and he pulled back an inch, just an inch, enough to look at her properly." },
      { s: 'haechan', f: 'serious', t: "Yes?" },
      { s: 'solar', t: "Yes." },
      { n: "He'd asked. He'd asked like it was the most important word in the room, which, she supposed, it was. Then he stood up and took her with him, and the lamp went out, and the rest of the night belonged to nobody but the two of them." },
      { place: 'Syracuse · Sigma Chi House · His Room', time: 'Late Night' },
      { n: "She woke because he was talking. Low, in the dark, into the back of her neck, a run of soft words in Korean she didn't know, a name or a place or a time, she couldn't tell, his arm heavy across her ribs. When she turned over he was asleep, frowning, and when she said his name he woke up all at once and looked at her like he'd been very far away and was surprised to have landed here." },
      { s: 'haechan', f: 'surprised', t: "...What." },
      { s: 'solar', t: "You were talking." },
      { s: 'haechan', f: 'neutral', t: "I don't talk." },
      { s: 'solar', t: "In Korean." },
      { n: "He didn't have anything to say to that. He put his face back in her hair instead, and she let him, and the clock on the desk said 3:20, which meant the house would start waking at seven and there was a decision to make, one they'd made rules about, out loud, in 4B, in the daylight." },
      { choose: [
        { t: "(Stay till morning.)", then: [
          { n: "She stayed. She slept again, properly, the heavy kind, and woke at eight to gray light and the smell of somebody burning toast downstairs and his side of the bed already cold, and him at the desk in a hoodie with one earbud in and the volume so low it might as well have been nothing, not working, just keeping her company with his back turned." },
          { n: "On the way out, Jeno was in the upstairs hallway with a mug, in boxers and a Sigma Chi formal sash he'd clearly slept in. He looked at her. He looked at the door. He raised the mug." },
          { s: 'jeno', t: "Morning, Solar." },
          { ifFlag: 'epi-r-public-post', then: [
            { n: "Everyone knew. She'd posted it herself, on her own terms, before anyone could do it for her. It still did something to her stomach to watch Jeno not care." }
          ], else: [
            { n: "Jeno was not in the inner circle. Jeno was, as of 8:04 this morning, apparently in the inner circle. She was going to have to tell Hanni, and Hanni was going to make pancakes about it." }
          ] }
        ] },
        { t: "(Go now, while it's dark.)", then: [
          { n: "She went at four, with his hoodie on under her coat and his hand on the back of her neck at the gate for one second longer than was strictly safe. The snow had stopped. Walnut Avenue was empty and orange under the streetlights and the cold got into her lungs and stayed there, sharp and clean, and she was halfway up the Alpha stairs in her socks with her boots in her hand when she saw it." },
          { n: "The light under Danielle's door. On, at 4:10 in the morning. Again." },
          { n: "She stood on the second landing with her heart going and her boots dripping on the carpet for a long, stupid moment. Then she went up the last flight, and shut her door, and lay down in his hoodie, and did not sleep at all." }
        ] }
      ] }
    ] },

    { id: 'epi-r-haechan-3b', title: 'eleven pm', hint: "Haechan's in queue at eleven, and his invite is already sitting in her client.",
      after: '12/11', until: '12/14', slots: ['evening'], noRoute: 'haechan',
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Night', scene: [
      { n: "The invite was there when she sat down. *haechanah has invited you to a group.* Eleven o'clock on the dot, like it had been for a while now, like he'd decided that was the time and she could take it or leave it and either way he'd be there at eleven." },
      { n: "She took it. She always took it. That was a sentence she didn't look at too closely." },
      { s: 'haechan', f: 'neutral', t: "Widow, Kiriko. Don't die on the first point. I'm tired." },
      { s: 'solar', t: "You're always tired." },
      { s: 'haechan', f: 'neutral', t: "I'm always tired at eleven. It's a schedule. You should respect it." },
      { n: "Two games. He played the way he always played, far back and silent and perfect, and every so often a callout in that flat voice, *your left*, *he's low*, *I've got the Mercy*, and she played under it, the way she'd always liked best, like the two of them were the same instrument from opposite ends of the room." },
      { ifEpiRoute: 'cover', then: [
        { s: 'haechan', f: 'neutral', t: "How's the vacation holding up." },
        { s: 'solar', t: "Danielle asked Hanni for the receipts from the lodge. For the records." },
        { s: 'haechan', f: 'serious', t: "Tell Hanni to send her one from a Denny's." },
        { n: "She laughed so hard she missed a suzu. He didn't mention it. He killed the Genji who'd have punished it instead, which was the same thing." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "How's the edit." },
        { s: 'solar', t: "Minji's? She won't let me see it. She says I'll ruin it by being nice about it." },
        { s: 'haechan', f: 'neutral', t: "She's right. You'd say it's good. She wants someone to tell her what's wrong with it." },
        { s: 'haechan', f: 'serious', t: "Tell her the cut at the lamppost is a frame too long. She'll know which one." }
      ] },
      { n: "On the last round her shoulders were up by her ears and she hadn't noticed until he said," },
      { s: 'haechan', f: 'neutral', t: "Mute for a sec." },
      { choose: [
        { t: "(Mute.)", then: [
          { n: "She muted. On the other end she could hear him breathe, slow, on purpose, three times, the way you'd do it so somebody else would copy you without having to be told. She copied him without being told. Then she unmuted." },
          { s: 'haechan', f: 'neutral', t: "Better. Point." },
          { stat: { kindness: 1 } }
        ] },
        { t: "I'm fine.", then: [
          { s: 'haechan', f: 'neutral', t: "Yeah. I know. Mute anyway." },
          { n: "She muted anyway. She sat there with her hands off the keyboard for the length of a respawn and felt very stupid and a lot better, both at once, which was the most Haechan feeling in the world." }
        ] }
      ] },
      { n: "They won. Of course they won. He left the group without saying goodnight, and then, three seconds later, a text." },
      { phone: [{ from: 'haechan', t: 'go to bed princess' }, { from: 'haechan', t: 'thats not a suggestion' }], contact: 'haechanah' }
    ] }
  ] };

  /* ── Hanni ── */
  B.hanni = { id: 'hanni', role: 'friend', hangouts: [
    { id: 'epi-r-hanni-1', title: 'pancakes', hint: 'Hanni is in the Alpha kitchen, making pancakes nobody asked for.',
      after: '12/2', until: '12/5', slots: BOTH, events: ['epi-r-cover'],
      place: 'Syracuse · Alpha Phi House · Kitchen', time: 'Evening', scene: [
      { music: 'epi-r-home' },
      { n: "Hanni made pancakes when she felt guilty, which nobody in the Alpha house had ever said out loud and everybody knew, the way you knew which stair talked. There was a stack of them on the island at six in the evening, a second stack happening, a bowl of batter big enough to feed the whole chapter, and Hanni in an apron that said KISS THE SOCIAL CHAIR, which Hyein had made her as a joke and which she'd worn without a single drop of irony since September." },
      { s: 'hanni', f: 'happy', t: "Sit. You're eating. Don't argue, there's blueberries in some of them, I don't know which, it's a surprise." },
      { n: "Solar sat. The radiator under the window knocked twice and gave up. Hanni flipped one too early and it folded over on itself in the pan, and she looked at it like it had personally let her down." },
      { s: 'hanni', f: 'neutral', t: "Yerim asked me today where we went." },
      { s: 'hanni', f: 'serious', t: "I said the Adirondacks. Then I said a lodge. Then I said it was a lodge in the Adirondacks, like that was a third thing. She said *oh, cute,* and walked off, and I stood in the hallway for a whole minute because I think I'm going to throw up every single time someone's nice to me about it." },
      { n: "It wasn't really the trip, though. Solar knew what it was, the same way she knew what the pancakes were. It was a doorstep in November, and a sentence Hanni had heard through Danielle's door and carried home and sat on, for weeks, while Mark brought flowers he'd picked with things Hanni had told him. They'd had that fight. They'd had it on Hanni's floor, all four of them, the night before everything, and cried, and made up, and Hanni had said sorry enough times that Solar had started counting, and then a whole other year had happened in between, and somehow none of that had made the guilt any smaller. It had just made it travel." },
      { s: 'hanni', f: 'sad', t: "I keep thinking I should've told you the second I heard it. I keep thinking I'm going to be forty and still thinking it." },
      { choose: [
        { t: "You told me. That's the part I kept.", then: [
          { s: 'hanni', f: 'sad', t: "...That's a really nice thing to say to someone holding a spatula." },
          { n: "She hugged Solar from the side with the spatula still in her hand, and a pancake burned behind her, and neither of them did anything about it for a while." },
          { bond: { hanni: 1 } }
        ] },
        { t: "(Take a pancake off the stack before she can stop you.)", then: [
          { s: 'hanni', f: 'surprised', t: "That one's raw in the middle." },
          { s: 'solar', t: "I know." },
          { n: "She ate it anyway, standing up, like she always did when somebody handed her a feeling she wasn't ready to hold. Hanni watched her do it and laughed, wet, and turned back to the pan, and that was its own kind of answer." }
        ] }
      ] },
      { n: "Yerim came in in her socks, following the smell, bright and pink-cheeked and completely without bad intent anywhere in her body, and stole a pancake off the top of the stack." },
      { s: 'yerim', t: "Was it so cold? The lodge thing? Chungha said there was no signal at all, I would literally die." },
      { choose: [
        { t: "Freezing. No signal, no heat after ten. Hyein cried twice.", then: [
          { glitch: { strain: 1 } },
          { s: 'yerim', t: "Oh my god. Iconic." },
          { n: "It came out of her mouth finished, with a detail on it and a little laugh at the end, the way her father's sentences came out at dinner parties, and Yerim believed every word because Yerim was not someone who looked at a person and thought about a bad thing. Hanni stared down into the pan. Solar felt it land somewhere under her sternum and sit there, heavy and warm, like something swallowed too fast." }
        ] },
        { t: "(Let Hanni answer.)", then: [
          { s: 'hanni', f: 'happy', t: "So cold. Don't ever go to the Adirondacks, Yerim. Promise me." },
          { s: 'yerim', t: "Noted!!" }
        ] }
      ] },
      { n: "Yerim left with three pancakes and a fork. The kitchen went quiet. Hanni turned the burner off." },
      { s: 'hanni', f: 'neutral', t: "A lodge in the Adirondacks." },
      { s: 'solar', t: "It's a third thing." },
      { n: "Hanni laughed, finally, properly, with her whole face, and it was the best thing Solar had heard all week, which was its own sentence." }
    ] },

    { id: 'epi-r-hanni-2', title: 'the binder', hint: 'Hanni has the Social Chair binder open and her mother on the other line.',
      after: '12/11', until: '12/14', slots: BOTH, events: ['epi-r-strategy'],
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Evening', scene: [
      { music: 'epi-r-sisters' },
      { n: "Hanni came into Solar's room without knocking, because Hyein's sewing machine had been going for three hours next door and there was only so much a person could take, and sat on the end of Solar's bed with the Social Chair binder open across her knees and her phone face up on top of it, buzzing." },
      { s: 'hanni', f: 'sad', t: "It's the parents' group chat." },
      { s: 'hanni', f: 'serious', t: "My mom told Hyein's mom it was a Friendsgiving trip. Hyein's mom told my mom it was skiing. Now they're both being really nice to each other about it, which is how I know they're both furious." },
      { n: "The binder was open to the page for the nineteenth. Sigma's holiday party, the Alpha half of it, the half Hanni was responsible for, with a headcount column at the bottom that Danielle wanted by Monday. Hanni had written the date and the venue and underlined both, twice. The headcount was blank." },
      { s: 'hanni', f: 'neutral', t: "I used to be the worst liar in this house. Like, famously. Chungha used to make me do the pledge-week surprises because I'd crack and she thought it was cute." },
      { s: 'hanni', f: 'sad', t: "I'm so good at it now, Sol. I'm so good at it and I hate it." },
      { ifEpiRoute: 'cover', then: [
        { n: "She didn't say the rest. She didn't have to. It had been the three of them in that chapter meeting, holding it up with their bare hands while Danielle asked about money in a voice like a ruler, and it would be the three of them again on Monday, and the Monday after." },
        { s: 'hanni', f: 'serious', t: "If it's us, then it's us. I can hold it. I just want to be allowed to hate it while I do." },
        { bond: { hanni: 1 } }
      ] },
      { choose: [
        { t: "Tell her some of the truth. The boring part.", then: [
          { s: 'hanni', f: 'surprised', t: "Which part's boring?" },
          { s: 'solar', t: "That you were with me. That I needed you. That you'd do it again." },
          { n: "Hanni looked at her for a long time. Then she picked up the phone and typed it, more or less, without the parts that would get anyone arrested, and sent it, and put the phone face down on the binder like it might bite her." },
          { s: 'hanni', f: 'happy', t: "She sent a heart. One heart. That's either really good or really bad." }
        ] },
        { t: "(Take the binder off her lap.)", then: [
          { n: "Solar took the binder. Hanni let her. She filled in the headcount from memory, every Alpha who'd said yes in the group chat and every one who'd said maybe and meant yes, in her neatest handwriting, the handwriting she'd been taught to use on thank-you cards to people who could do things for her father, and she found she didn't mind using it for this." },
          { stat: { kindness: 1 } }
        ] }
      ] },
      { n: "By eleven Hanni was asleep across the foot of the bed with one sock off and her phone still in her hand, and the binder was closed, and the sewing machine next door had finally stopped, and the house was quiet in pieces around them, a door, a shower, then nothing. Solar put a blanket over her and left the lamp on. It seemed like the least she could do for someone who'd been lying for her for two weeks and was still, somehow, the most honest person she knew." }
    ] }
  ] };

  /* ── Hyein ── */
  B.hyein = { id: 'hyein', role: 'friend', hangouts: [
    { id: 'epi-r-hyein-1', title: 'taking it in', hint: "Hyein has Solar's team jersey on her dress form and pins in her mouth.",
      after: '12/2', until: '12/5', slots: BOTH,
      place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'After Class', scene: [
      { n: "Hyein's half of the room had been colonized long ago by fabric, and the dress form in the corner, which she called Gerald for reasons she refused to explain, was wearing Solar's Regionals jersey. Solar had not given Hyein her Regionals jersey. She'd last seen it folded in her own bottom drawer." },
      { s: 'hyein', f: 'serious', t: "It's an XL, Sol. They ordered you an XL. I'm going to call the program. I'm going to call the *dean.*" },
      { s: 'hyein', f: 'neutral', t: "Put it on. Arms up. Don't breathe." },
      { n: "Solar put it on. Hyein went round her with pins in her mouth, talking through them anyway, pinching the sides in, a half inch, another half inch, her fingers quick and cold and completely sure of themselves." },
      { s: 'hyein', f: 'serious', t: "Jaemin wants six Sigma looks for the nineteenth. Six. Velvet. He sent a moodboard. It's just pictures of himself." },
      { s: 'hyein', f: 'flustered', t: "I said deposit up front, fifty percent. He said, and I'm quoting, *we're family now, Hyein, after everything.* After EVERYTHING. Like going to another universe together is a payment method." },
      { choose: [
        { t: "Is it, though?", then: [
          { s: 'hyein', f: 'serious', t: "No! Trauma is not legal tender!" },
          { n: "Solar laughed, and Hyein stuck her with a pin, and it was very much on purpose, and they both knew it." }
        ] },
        { t: "Charge him extra for the moodboard.", then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'hyein', f: 'happy', t: "I'm writing that down. A moodboard fee. Oh, he's going to hate it. He's going to *pay* it, and he's going to hate it." },
          { stat: { charm: 1 } }
        ] }
      ] },
      { ifYear: { rank: { hyein: 7 } }, then: [
        { n: "She'd made Solar a coat once, somewhere else, long and dark and cut close, the kind of coat you'd wear to inherit something. The coat had not come back with them. Hyein hadn't said a single word about it since they got home, not one, and for Hyein, who said everything, that was practically a eulogy." },
        { s: 'hyein', f: 'sad', t: "This one's staying, at least." },
        { n: "She said it to the pins, not to Solar. Solar let her." }
      ], else: [
        { n: "Solar's long black coat, the one her mother had bought her, was over the back of Hyein's desk chair, and Hyein kept glancing at it the way she glanced at all of Solar's clothes, like a doctor looking at an X-ray she had opinions about." }
      ] },
      { s: 'hyein', f: 'neutral', t: "Okay. Question. Do you dream about it?" },
      { choose: [
        { t: "Every night.", then: [
          { s: 'hyein', f: 'sad', t: "Me too. Mostly the vending machine. The one with the melon thing in it." },
          { s: 'hyein', f: 'happy', t: "I wake up *thirsty,* Sol." }
        ] },
        { t: "No.", then: [
          { s: 'hyein', f: 'serious', t: "Liar. You said that like a press release." },
          { s: 'hyein', f: 'neutral', t: "It's okay. I'll ask you again later. I'll ask you so many times you'll answer just to make me stop." }
        ] }
      ] },
      { n: "She stepped back. She looked. The jersey fit like it had been made for somebody who meant to be there, which, Solar supposed, was the whole point of Hyein." },
      { s: 'hyein', f: 'happy', t: "There. Now you look like you're going to win something." }
    ] },

    { id: 'epi-r-hyein-2', title: 'velvet', hint: 'Hyein got paid. There is velvet everywhere.',
      after: '12/10', until: '12/14', slots: BOTH, events: ['epi-r-regionals-2'],
      place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Evening', scene: [
      { n: "There were six velvet jackets in various stages of being alive across Hyein's floor, bottle green and oxblood and one in a navy so dark it looked black until the lamp hit it, and on the wall above her desk, in a frame from the dollar store, was a white envelope with FOR THE ARTIST written on it in silver Sharpie and about a tablespoon of glitter still stuck to the flap." },
      { s: 'hyein', f: 'happy', t: "Cash. In an envelope. With glitter. He came to the door in a scarf and said *for the artist* and bowed. Hanni had to sit down." },
      { s: 'hyein', f: 'serious', t: "I'm framing it forever. It's my first deposit. They'll bury me with it." },
      { n: "Solar sat on Hanni's bed and watched her work, the machine going in long whining bursts, the needle a blur under the little lamp. Halfway through the oxblood sleeve the whine of it went thin and strange for a second, like a radio turned between two stations, a hiss with something talking very far down inside it." },
      { glitch: { kind: 'sound', sound: 'static' } },
      { n: "Hyein didn't look up. The machine went back to sounding like a machine. Solar sat very still on the bed and decided, firmly, that it was the bobbin." },
      { s: 'hyein', f: 'neutral', t: "Okay. Question one. Why did you stop in the hallway yesterday for like ten whole seconds looking at nothing. Question two, why do you check the clock every time it's on the hour. Question three—" },
      { s: 'solar', t: "You're doing the questions thing." },
      { s: 'hyein', f: 'sad', t: "I know I'm doing the questions thing." },
      { s: 'hyein', f: 'serious', t: "I did eleven, that first night over there. I counted later. Eleven questions, and you answered zero, and I just kept going, because if I stop asking things I have to sit there and be scared, and I'm bad at that. Asking is better. Asking is something to do with your hands." },
      { choose: [
        { t: "Ask me one. Just one. I'll answer it.", then: [
          { n: "Hyein turned the machine off. It was suddenly very quiet. She looked at Solar for a long time, and all eleven questions went across her face, and she picked the one at the bottom." },
          { s: 'hyein', f: 'sad', t: "Are you staying?" },
          { s: 'solar', t: "I'm here." },
          { s: 'hyein', f: 'serious', t: "That's not what I asked." },
          { n: "Solar didn't have a better answer. Hyein seemed to know that, and seemed to decide it would do for now, and turned the machine back on." },
          { bond: { hyein: 1 } }
        ] },
        { t: "(Hold still for the fitting instead.)", then: [
          { n: "Hyein put the navy jacket on her to check the shoulders, since Jaemin was apparently never available for fittings and always available for brunch, and Solar stood in the middle of the room in six hundred dollars of velvet with her arms out like a scarecrow." },
          { s: 'hyein', f: 'happy', t: "You're shorter than Jaemin by a whole person. This is useless. Stay there anyway, you look rich." }
        ] }
      ] },
      { n: "The radiator knocked. The machine whined. Hanni came in at ten with three mugs of tea she'd made without asking anyone what they wanted, and the three of them sat on the floor in the velvet until midnight, and when the clock on Hyein's desk turned over to twelve, Solar didn't look at it. She looked at Hyein instead. Hyein noticed. Hyein, for once, didn't ask." }
    ] }
  ] };

  /* ── Minji ── */
  B.minji = { id: 'minji', role: 'friend', hangouts: [
    { id: 'epi-r-minji-1', title: 'duo', hint: 'Minji is still in the lab after practice, and the queue is already up.',
      after: '12/2', until: '12/5', slots: ['evening'],
      place: 'Syracuse · eSports Lab', time: 'Evening', scene: [
      { music: 'epi-r-team' },
      { n: "Doyoung had left at eight with his clipboard and a parting look that meant *two games, then sleep, I'll know.* The lab hummed. Somebody had left the RGB on the back row cycling through every color it had, slowly, like it was thinking about something. Minji was at her station with her cap on frontwards, which meant it wasn't a game day, and her camera on the desk beside the keyboard with the lens cap on, which meant something else." },
      { s: 'minji', f: 'neutral', t: "Two games. Then sleep. He'll know." },
      { s: 'solar', t: "He always knows." },
      { s: 'minji', f: 'happy', t: "He knows everything. It's terrible. Queue." },
      { n: "They queued. First fight, the enemy Genji came in over the wall on Minji the way Genjis always came in on Minji, like she owed them money, and Solar had maybe a second." },
      { choose: [
        { t: "(Hold suzu for the dive.)", then: [
          { n: "She held it. The Genji committed, the blade came out, and she threw the suzu at exactly the moment it mattered, and Minji walked out of the cleanse with a sliver of health and turned around and shot him in the head." },
          { s: 'minji', f: 'happy', t: "Thank you." },
          { s: 'solar', t: "Always." }
        ] },
        { t: "(Cleanse her early.)", then: [
          { n: "She threw it early. The Genji waited it out, the way good Genjis did, and came in a second later, and Minji died, and respawned, and said nothing at all for one full walk back from spawn." },
          { s: 'minji', f: 'neutral', t: "Early." },
          { s: 'solar', t: "I know." },
          { s: 'minji', f: 'happy', t: "Saturday you won't." }
        ] }
      ] },
      { ifYear: { romance: 'minji' }, then: [
        { n: "Between games Minji took her hands off the keyboard and looked at her camera instead of at Solar, which was how Solar knew it was going to be about her." },
        { s: 'minji', f: 'sad', t: "Over there I didn't have to ask. You'd just be in frame. You'd walk into it like it was your room." },
        { s: 'minji', f: 'serious', t: "Here I don't know what we're allowed to be. So I'm asking. Not for an answer. I'm asking so you know there's a question." },
        { n: "Solar's heart did something it hadn't done in this building since September. She put her hand flat on the desk between them, not on Minji's, near it. Minji looked at it. It was enough, for a lab, at nine at night." }
      ], else: [
        { n: "Between games Minji took her hands off the keyboard and said, without looking away from the screen," },
        { s: 'minji', f: 'serious', t: "Can I ask you something, and you don't have to answer." },
        { s: 'minji', f: 'neutral', t: "Are you okay. Like, actually." },
        { s: 'solar', t: "I'm fine." },
        { s: 'minji', f: 'neutral', t: "Okay." },
        { n: "A pause. The RGB went from blue to purple." },
        { s: 'minji', f: 'sad', t: "I always believe you, Sol. I'm just saying it so you know I noticed." }
      ] },
      { n: "They won the second game ugly and Minji laughed at the end of it, the real one, the one she kept for when she'd forgotten anyone was listening, and then they turned the stations off one by one and the lab went dark around the two of them, and they walked out into the snow with their hoods up, and Minji didn't take the lens cap off once the whole way to the honors dorm. Solar noticed. She didn't say so. That was a kind of thank you, too." }
    ] },

    { id: 'epi-r-minji-2', title: 'the lamppost', hint: "Minji is under the lamppost outside the honors dorm, and for once the camera's in its bag.",
      after: '12/8', until: '12/14', slots: BOTH, events: ['epi-r-regionals-2'],
      place: 'Syracuse · Honors Dorm', time: 'Evening', scene: [
      { music: 'epi-r-closure' },
      { n: "The lamppost outside the honors dorm flickered. It had always flickered. Minji was under it with her hands in her pockets and her camera bag zipped shut over her shoulder, and when she saw Solar coming she didn't reach for it, and that was how Solar knew Minji had been waiting for her specifically, and had been waiting a while, and had decided some things while she waited." },
      { s: 'minji', f: 'neutral', t: "Hi." },
      { s: 'minji', f: 'serious', t: "I'm okay. I want to say that first, before you look at me like that. I'm not okay *yet,* but I'm the kind of not-okay that ends. I can tell the difference now. That's new." },
      { ifEpiRoute: 'minji', then: [
        { s: 'minji', f: 'serious', t: "And I'm going to ask. Every frame. Every time. You're going to get sick of me asking." },
        { s: 'minji', f: 'neutral', t: "Can I film this? Right now. Just the lamppost, and you under it. You can say no." },
        { choose: [
          { t: "Yes.", then: [
            { n: "Minji unzipped the bag like it was something that could break, and took the lens cap off, and lifted the camera, and Solar stood under the lamp and didn't look past the lens, or through it, or away. The lamp held steady the whole time. It never held steady. Minji let out a breath that steamed in the cold and didn't say anything, which was the loudest thing she'd ever said." },
            { bond: { minji: 1 } }
          ] },
          { t: "Not tonight. Ask me tomorrow.", then: [
            { s: 'minji', f: 'happy', t: "Okay. Tomorrow. I'll ask tomorrow." },
            { n: "She looked, if anything, relieved, like a no that came with a tomorrow attached to it was a better present than a yes." }
          ] }
        ] }
      ], else: [
        { n: "She took a hard drive out of her coat pocket. Small, black, a strip of masking tape on it with nothing written on it." },
        { s: 'minji', f: 'serious', t: "Everything I ever shot of you. The originals. Here and over there, whatever came back. I didn't keep a copy." },
        { s: 'minji', f: 'sad', t: "It's yours. It kind of always was. I just didn't—" },
        { s: 'solar', t: "I know." },
        { choose: [
          { t: "(Take the drive.)", flag: 'epi-r-minji-drive', then: [
            { n: "She took it. It was warm from Minji's pocket. It weighed nothing, which seemed wrong for something that had a whole fall inside it, a tournament and a balcony and a walk home under this exact lamp, every time Solar had laughed when she thought nobody was looking." },
            { s: 'minji', f: 'happy', t: "Thank you for taking it. I couldn't have kept it, and I couldn't have thrown it in the river. I tried both in my head." }
          ] },
          { t: "Keep it. Just ask me first, next time.", then: [
            { s: 'minji', f: 'surprised', t: "I always asked." },
            { s: 'solar', t: "I know. Keep asking." },
            { n: "Minji put the drive back in her pocket very slowly, like it had become a different object on the way, and nodded, and couldn't look at Solar for a second." },
            { bond: { minji: 1 } }
          ] }
        ] }
      ] },
      { ifYear: { romance: 'minji' }, then: [
        { s: 'minji', f: 'neutral', t: "I'm not going anywhere, Sol. I'm not waiting, either. I'm just going to stand somewhere you can see me. That's all. That's not a question." }
      ] },
      { n: "The lamppost flickered, once, the way it always did. They both looked up at it at the same time, and Minji laughed, and so did Solar, and for one second under the lamp it was just two girls who'd been through something together standing in the snow outside a dorm, which was exactly what it was." }
    ] }
  ] };

  /* ── Mark ── */
  B.mark = { id: 'mark', role: 'friend', hangouts: [
    { id: 'epi-r-mark-1', title: 'no notes', hint: 'Mark is in a carrel at Bird Library with the Statistics problem set and nothing written on it.',
      after: '12/2', until: '12/5', slots: ['after'],
      place: 'Syracuse · Bird Library', time: 'After Class', scene: [
      { n: "Fourth floor, the quiet floor, the carrels by the windows with the radiators that ticked. He saw her before she saw him. She knew because when she turned the corner he was already halfway out of his chair and then sitting back down in it, too fast, the way he did when he was nervous about a room, overplaying casual so hard it went all the way round to obvious." },
      { s: 'mark', f: 'neutral', t: "Sol. Hey." },
      { n: "It landed somewhere under her ribs and stayed there. It had been his first, that name, before anyone, the first week of school, and she'd let him have it because it had felt like a gift. Now every time he said it she could feel the shape of everything he'd built on top of it." },
      { s: 'mark', f: 'flustered', t: "I was going to offer you my notes. For the week we, uh. Missed. Then I remembered I wasn't here either." },
      { s: 'mark', f: 'neutral', t: "So I have no notes. You have no notes. We're the two least prepared people in this building, and there's a guy over there asleep on a textbook." },
      { ifYear: { noFlag: 'arrived-mark' }, then: [
        { s: 'solar', t: "You were... there. Weren't you." },
        { s: 'mark', f: 'sad', t: "You didn't see me. That was probably right." },
        { n: "He said it without any self-pity in it, which was somehow worse, like he'd done the math on it a long time ago and the answer had stopped hurting him the way it should have." }
      ], else: [
        { n: "She'd seen him over there. At the edge of things, mostly, standing apart from whoever was in the middle, like he'd finally learned where he belonged in a room and didn't like the answer." }
      ] },
      { choose: [
        { t: "(Sit down across from him.)", then: [
          { n: "She sat. He slid the calculator across the desk to the middle, between them, and didn't say anything, and they did the problem set in silence, question by question, him writing an answer and turning it toward her and her checking it and turning it back. He didn't ask her anything. Not how she was, not where she'd been, not what she was doing Saturday. It was the first hour she could remember with him that didn't have a receipt at the end of it." }
        ] },
        { t: "I'll find somebody else's notes.", then: [
          { s: 'mark', f: 'serious', t: "Yeah. That's fair." },
          { n: "He didn't push. He nodded and looked back down at the empty problem set, and she stood there longer than she'd meant to, because it was the first time since September she'd watched him take a no without trying to turn it into something else." }
        ] }
      ] },
      { n: "There was one earbud on the desk by his elbow with music coming out of it very small. Piano, she thought. Something that went up and didn't come down where you'd expect." },
      { s: 'mark', f: 'flustered', t: "I wrote something. Over there. It's the first thing I've finished in a year that I didn't—" },
      { n: "He stopped. He looked at the earbud. He started again, more carefully, like a man crossing ice." },
      { s: 'mark', f: 'serious', t: "It's mine. All of it. I checked." },
      { choose: [
        { t: "Play it.", then: [
          { n: "He handed her the earbud. Eight seconds, maybe ten, and he took it back before it could become a performance, which she noticed, and which she thought he'd done on purpose. It was good. It was good in a way that didn't need her for anything." },
          { s: 'solar', t: "It's good, Mark." },
          { n: "Mark. Not Marky. He heard it. He nodded like it was what he'd expected, and like it still cost him something, and he said thanks to the desk." }
        ] },
        { t: "(Don't ask.)", then: [
          { n: "She didn't ask. He put the earbud away in its case and clicked it shut, and that was that, and it was strange how much it felt like a kindness, from both directions." }
        ] }
      ] },
      { s: 'mark', f: 'neutral', t: "Good luck Saturday, Sol. You don't need it. I'm just saying it so it's said." }
    ] },

    { id: 'epi-r-mark-2', title: 'her order', hint: 'Mark is in line at the café on Marshall Street, one person ahead of her.',
      after: '12/8', until: '12/14', slots: ['after'], events: ['epi-r-regionals-2'],
      place: 'Syracuse · Marshall Street · Café', time: 'After Class', scene: [
      { n: "He was one person ahead of her in line, in the gray coat, earbuds in, and he didn't know she was there until he got to the register and turned his head to check the pastry case and saw her. He took the earbuds out. He smiled, the one that went most of the way up." },
      { s: 'mark', f: 'neutral', t: "Hey. I'll get—" },
      { n: "His mouth had already started it. She watched it happen, watched him get as far as *a strawberry* and stop, physically stop, like he'd walked into the edge of a table in the dark. He'd learned her whole map in the fall, sparkling water in the morning, iced coffee in the day, refresher at night, and he'd used it on her every day for two months like a key. He closed his mouth. He turned back to the barista." },
      { s: 'mark', f: 'flustered', t: "Sorry. Habit. You order." },
      { n: "She ordered. He paid for his own and stood off to the side by the straws, not waiting for her exactly, just not leaving yet." },
      { s: 'mark', f: 'serious', t: "I'm not asking for anything. I said that at Regionals and I meant it. And I know saying I meant it is also kind of asking for something. I'm working on that part." },
      { s: 'mark', f: 'neutral', t: "The house is weird with me. Since I was gone. That's fair. I'd be weird with me too." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'mark', f: 'sad', t: "Is he—" },
        { n: "He stopped himself again. Twice in five minutes. It looked like it hurt." },
        { s: 'mark', f: 'serious', t: "No. I don't get to ask that. Forget I started it." }
      ] },
      { choose: [
        { t: "You can sit. For a minute.", then: [
          { n: "They sat at the window. Ten minutes, maybe, and he talked about his piece, the one from over there, about a professor who wanted it for a winter showcase and how he'd said he needed to think about it, and she found she was listening, actually listening, the way she used to before every conversation with him came with a second conversation underneath it. At the end he said *Sol* when he said goodbye, and it hurt, and she let it." }
        ] },
        { t: "I'm meeting someone.", then: [
          { s: 'mark', f: 'neutral', t: "Yeah. Okay. Good." },
          { n: "She wasn't, or she was, it didn't matter; he didn't ask which. He picked up his coffee and held the door for a girl coming in with a stroller, and went out into the snow, and didn't look back through the window, which she was almost sure he'd had to make himself not do." }
        ] }
      ] }
    ] }
  ] };

  /* ── Jaehyun ── */
  B.jaehyun = { id: 'jaehyun', role: 'friend', hangouts: [
    { id: 'epi-r-jaehyun-1', title: 'treatment', hint: 'Jaehyun is at the football complex. He told her which door.',
      after: '12/3', until: '12/5', slots: ['after'], events: ['epi-r-did-you-eat'],
      place: 'Syracuse · Football Complex', time: 'After Class', scene: [
      { n: "He'd told her which door, because he knew she wouldn't wander into a building full of men in shoulder pads looking for him, and he was right. The player exit at Ensley, the side one by the equipment trucks. She waited there with a paper bag going translucent at the bottom from the grease and her hands tucked into her sleeves, and watched the snow come down slant across the floodlights over a practice field with nobody on it." },
      { n: "The season was over. Nobody in the building was acting like it." },
      { n: "He came out at five past, hair still wet, hood up, and the first thing she noticed was the way he took the step down, carefully, leading with the left, and the second thing was the edge of an ice wrap showing at the collar of his hoodie, and the third was that he'd seen her see both and decided not to mention either." },
      { s: 'jaehyun', f: 'neutral', t: "You came." },
      { n: "She held up the bag." },
      { s: 'solar', t: "Did you eat." },
      { n: "He almost smiled. On him it was a whole event, a thing happening at the corner of his mouth and then being overruled." },
      { s: 'jaehyun', f: 'happy', t: "...No." },
      { n: "They sat on the bench by the gate and ate out of the bag with the snow coming down on them, two people in very expensive coats eating fries off their knees, and he told her his week without being asked, the way he'd give a briefing. Treatment, then film. Conditioning at six tomorrow. The banquet next week, where somebody's father would ask him about April in front of their father's friends." },
      { s: 'jaehyun', f: 'serious', t: "Ms. Han called me Tuesday. She wants the name of the faculty advisor on the trip. For Dad's records." },
      { s: 'solar', t: "What did you say." },
      { s: 'jaehyun', f: 'neutral', t: "That I'd get back to her. I don't throw into coverage." },
      { choose: [
        { t: "Tell me what you're going to tell her. Before you tell her.", then: [
          { n: "He looked at her. He was a quarterback; he read a field the way other people read a menu, fast and all at once, and she watched him read her and arrive somewhere. He set the bag down." },
          { s: 'jaehyun', f: 'serious', t: "Okay. Here's what I'm going to say." },
          { n: "He told her. All of it, the advisor he'd invent and the department he'd say she was from and the email address that would go nowhere, and then he asked her if it was okay, actually asked, and she was so surprised she said yes before she'd thought about it, and then thought about it, and it was still yes." },
          { bond: { jaehyun: 1 } }
        ] },
        { t: "(Let him handle it, like always.)", then: [
          { s: 'jaehyun', f: 'neutral', t: "I'll handle it." },
          { n: "She heard it. She knew the shape of that sentence better than any shape in the world; it was the shape of her whole life. She let it go anyway, because she was tired and the fries were hot and he had ice on his shoulder, and it sat in her stomach the whole walk home like a stone she'd swallowed to be polite." }
        ] }
      ] },
      { n: "When he got up he did it the careful way again, left side first. She looked at his shoulder. He looked at the field." },
      { s: 'jaehyun', f: 'neutral', t: "It's nothing." },
      { n: "It was nothing in the way everything with him was nothing. She didn't argue. She just took the empty bag from him, so he didn't have to carry anything, and he let her, and that was how she knew it wasn't nothing at all." }
    ] },

    { id: 'epi-r-jaehyun-2', title: 'helpful', hint: "Jaehyun asked her to come by Sigma and sign their mother's Christmas card.",
      after: '12/11', until: '12/14', slots: ['after'], events: ['epi-r-strategy'],
      place: 'Syracuse · Sigma Chi House', time: 'After Class', scene: [
      { n: "The Sigma living room at four in the afternoon was a different country from the Sigma living room at midnight. Somebody had vacuumed. Johnny was asleep upright on the far end of the couch with a laptop on his chest. Jaehyun was at the coffee table in the middle of it all, in the chair he used for meetings, the chair she knew, without ever having seen it, he'd sat in to tell two boys what they were allowed to do about her, and in front of him on the table was a card with a gold border and their mother's handwriting already on the inside." },
      { n: "Danielle was leaving as Solar came in. She had a folder under her arm, the chapter's red one, and she paused in the doorway long enough for it to be a pause." },
      { s: 'danielle', f: 'neutral', t: "Jaehyun." },
      { s: 'jaehyun', f: 'neutral', t: "Danielle." },
      { s: 'danielle', f: 'happy', t: "Solar. Signing things? Good habit." },
      { n: "She was gone before Solar could find the corner on that one, which was the point. The front door shut with the soft click of somebody who knew exactly how to close a door so it didn't slam." },
      { s: 'jaehyun', f: 'neutral', t: "She did the whole budget for the nineteenth. Both houses. Johnny didn't have to touch it. She's been helpful." },
      { n: "Helpful. Solar stood there with the pen in her hand and the word in her ear, and everything they'd laid out on Hanni's floor sat in her throat, the screenshots and the dates, the proof and the inference, and the one rule all of them had agreed on, which was *not Jaehyun, not yet, not until it can't cost you.*" },
      { choose: [
        { t: "Be careful with her.", flag: 'epi-r-jaehyun-warned', then: [
          { s: 'jaehyun', f: 'surprised', t: "With Danielle?" },
          { n: "She didn't say anything else. She didn't have to; he read it, she watched him read it, the way his eyes went to the door and back to her and filed something somewhere behind them. He didn't ask. That was the frightening thing about him, and tonight, for once, it was the useful thing." },
          { s: 'jaehyun', f: 'serious', t: "Okay." }
        ] },
        { t: "(Sign the card.)", then: [
          { n: "She signed the card. *Love, Solar,* under *Love, Jaehyun,* in handwriting nobody would ever be able to tell anything from. She'd been trained for this since she was eight. It was the most expensive signature she'd ever given." },
          { glitch: { strain: 1 } }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Mom wants a photo for the inside. The two of us. I said I'd ask." },
      { n: "He said it to the card, not to her. On his forearm, where the sleeve had ridden up, the last of a turf burn was going yellow at the edges. She didn't mention it. He didn't mention Danielle again. They sat there for a while in the clean quiet room with Johnny snoring at the end of the couch, two Lees being very good at not saying things, and it was the closest she'd felt to him all year." }
    ] }
  ] };

  /* ── Chenle ── */
  B.chenle = { id: 'chenle', role: 'friend', hangouts: [
    { id: 'epi-r-chenle-1', title: 'forty-one for forty-one', hint: 'Chenle has a spreadsheet of every team in the bracket, and he wants to show someone.',
      after: '12/2', until: '12/5', slots: ['after'],
      place: 'Syracuse · eSports Lab', time: 'After Class', scene: [
      { n: "He was at the corner station with both monitors going, one on a VOD paused mid-fight and the other on a spreadsheet so color-coded it looked like a quilt. He'd been pale since Monday. He was still pale. He looked up when she came in and the paleness didn't change, but something behind it did, like a person deciding to be fine on purpose." },
      { s: 'chenle', f: 'serious', t: "Their Ana sleeps the tank every time he uses Nade. Every time. Forty-one for forty-one. Look." },
      { n: "She looked. He had every instance clipped, timestamped, in a column labeled *SLEEP (TANK) AFTER NADE (Y/N)*, and every cell said Y, and they went down the screen like a drumbeat." },
      { s: 'chenle', f: 'neutral', t: "So when the Nade goes out, the sleep's coming. You have about a second and a half. That's a lot, actually. That's forever." },
      { choose: [
        { t: "So I hold suzu for the sleep.", then: [
          { s: 'chenle', f: 'happy', t: "That's what I wrote." },
          { n: "He turned the other monitor so she could see. In the notes column, in his tiny careful capitals, it said *SOL HOLDS SUZU.* He'd written it on Sunday. He'd known what she'd say before she said it, and he was so pleased about it he forgot to look pale for almost a whole minute." },
          { stat: { proficiency: 1 } }
        ] },
        { t: "So Minji punishes the Ana when he throws it.", then: [
          { s: 'chenle', f: 'surprised', t: "..." },
          { s: 'chenle', f: 'happy', t: "I didn't write that. I'm writing it now. That's better. That's criminally better." },
          { stat: { knowledge: 1 } }
        ] }
      ] },
      { ifYear: { noFlag: 'arrived-chenle' }, then: [
        { s: 'chenle', f: 'neutral', t: "I was in the back row. You never turned around." },
        { n: "He said it to the spreadsheet. She opened her mouth and he kept going before she could apologize for it." },
        { s: 'chenle', f: 'neutral', t: "It's fine. I like the back row. You see more." }
      ] },
      told([
        { s: 'solar', t: "You knew. About the—" },
        { s: 'chenle', f: 'serious', t: "Since Monday." },
        { n: "He didn't look away from the screen. His hand was very still on the mouse." },
        { s: 'chenle', f: 'neutral', t: "He told you himself?" },
        { s: 'solar', t: "He told me himself." },
        { s: 'chenle', f: 'neutral', t: "...Good." },
        { n: "He went back to the spreadsheet. That was all. It was the most anybody had said to her about it, and it was one word, and it was enough." }
      ], [
        { s: 'solar', t: "You looked like you'd seen a ghost on Monday. On the stairs." },
        { n: "His hand stopped on the mouse. For a second she thought he was going to say something, and she could see it on him, a sentence all the way up in his throat with its shoes on." },
        { s: 'chenle', f: 'serious', t: "It's not mine." },
        { s: 'solar', t: "What isn't?" },
        { s: 'chenle', f: 'neutral', t: "To say." },
        { n: "He clicked the VOD back on. The Ana threw the Nade. The tank went to sleep. Forty-two for forty-two." }
      ])
    ] },

    { id: 'epi-r-chenle-2', title: 'thursday', hint: "Chenle is breaking down the Regionals VODs in the lab, and he isn't alone.",
      after: '12/9', until: '12/14', slots: ['after'], events: ['epi-r-studio'],
      place: 'Syracuse · eSports Lab', time: 'After Class', scene: [
      { n: "It wasn't a practice hour, so the lab was open, and Doyoung's no-visitors rule was technically asleep. Chenle was at his corner with the Regionals final paused on the left monitor. Haechan was in the chair beside him, which was not his chair because nothing in this room was his, headphones round his neck, legs stretched out, looking at the screen like it owed him an explanation." },
      { n: "Neither of them said hi. Chenle lifted two fingers off the mouse. Haechan looked at her and then back at the screen, which on him was a hug." },
      { n: "On the desk between them was a takeout container, rice and something, still steaming. While she watched, Chenle pushed it six inches to the right, toward Haechan, without looking at it or him or anything except the VOD. Haechan picked up the fork. Haechan ate. Neither of them acknowledged that any of this had happened, and the way they didn't acknowledge it was so practiced that it must have happened a lot." },
      { s: 'chenle', f: 'serious', t: "You were point four faster on suzu in the final than you were in November. Point four. That's a lot." },
      { s: 'haechan', f: 'neutral', t: "She was half a second late on the cleanse in the first map." },
      { s: 'chenle', f: 'neutral', t: "Point four." },
      { s: 'haechan', f: 'neutral', t: "Rounded." },
      { s: 'chenle', f: 'flustered', t: "You can't *round* frame data." },
      { n: "Both their phones lit up on the desk at the same time. Same buzz, same second. She saw both screens before either of them turned them over. The same reminder on both, no title, no label, just *thu 7:00.*" },
      { choose: [
        { t: "What's Thursday?", flag: 'epi-r-hc-thursday', then: [
          { s: 'chenle', f: 'neutral', t: "Thursday." },
          { s: 'haechan', f: 'neutral', t: "Thursday." },
          { n: "They said it at the same time, in the same flat voice, and then looked at each other, annoyed about it." },
          { s: 'haechan', f: 'serious', t: "I'll tell you. Not in a lab." }
        ] },
        { t: "(Don't ask.)", then: [
          { n: "She didn't ask. She'd learned what it cost when people decided what she could handle, and lately she'd been learning it from the other side, too. Some things weren't hers to ask in a room with someone else in it. She took the third chair and watched the final with them instead, the whole thing, start to finish, and the container was empty by the end of the first map." }
        ] }
      ] },
      { n: "Chenle never said anything about it. Not the food, not the reminder, not the way he'd glanced at Haechan's hands once, quickly, the way you'd check a clock. That was the whole of it, as far as she could see. Somebody making sure somebody ate. Somebody making sure somebody went where he'd said he'd go on Thursday. No speeches. It looked a lot like what it was." }
    ] }
  ] };

  /* ── Jaemin ── */
  B.jaemin = { id: 'jaemin', role: 'friend', hangouts: [
    { id: 'epi-r-jaemin-1', title: 'the architect', hint: 'Jaemin is holding court at the café on Marshall Street, delighted about something.',
      after: '12/2', until: '12/5', slots: BOTH,
      place: 'Syracuse · Marshall Street · Café', time: 'After Class', scene: [
      { n: "Three girls were just leaving his table when she came in, the way girls were always just leaving Jaemin's table, and he saw her over their heads and put both arms up like she'd scored." },
      { s: 'jaemin', f: 'happy', t: "Solar Lee. Sit. Sit with the architect." },
      { s: 'jaemin', f: 'happy', t: "I went quiet for one Friday. One. I didn't post on the twenty-eighth because I was, you know." },
      { n: "He waved a hand at the window, at the snow, at the whole idea of elsewhere." },
      { s: 'jaemin', f: 'happy', t: "And this entire campus decided it meant there was a party so exclusive I couldn't even post about it. Invite only. No signal. Not even the whole chapters. I have never in my life been this famous for doing nothing." },
      { s: 'jaemin', f: 'serious', t: "Three people have asked me how to get on the list. For a trip that doesn't exist. I could sell it. Should I sell it?" },
      { choose: [
        { t: "Don't you dare.", then: [
          { s: 'jaemin', f: 'sad', t: "I wasn't going to." },
          { s: 'jaemin', f: 'happy', t: "I was a *little* going to." }
        ] },
        { t: "What would you charge?", then: [
          { s: 'jaemin', f: 'happy', t: "*Exactly.* See, you get it. You're business track. Nobody else in my life understands me." },
          { stat: { charm: 1 } }
        ] }
      ] },
      { ifYear: { noFlag: 'arrived-jaemin' }, then: [
        { s: 'jaemin', f: 'serious', t: "I threw a party over there you never came to. Rude." },
        { s: 'jaemin', f: 'neutral', t: "I'm not over it. I'm being the bigger person about it in public. Privately, I'm devastated." }
      ], else: [
        { s: 'jaemin', f: 'neutral', t: "You came to mine over there. So you owe me one here. That's how it works. I don't make the rules. I make *all* the rules, actually, but I don't make that one." }
      ] },
      { n: "Jisung came over from the counter with a hot chocolate, sincere and pink-eared, and stood by the table the way Jisung stood by tables, like he'd been raised to wait to be asked to sit." },
      { s: 'jisung', t: "Was it actually no signal, though? Like none? My mom would have called the police." },
      { choose: [
        { t: "None. Not one bar the whole time.", then: [
          { glitch: { strain: 1 } },
          { s: 'jisung', t: "That's insane. I'd die." },
          { n: "He believed her. Of course he believed her. She'd said it in the voice, and Jisung was a person who asked questions because he wanted the answers, not because he wanted to catch anyone in them. She smiled at him. It felt like a coat that didn't fit." }
        ] },
        { t: "(Let Jaemin take it.)", then: [
          { s: 'jaemin', f: 'serious', t: "Jisung. Jisungie. Some things are sacred. Some things are invite only. Some things you have to be *chosen* for." },
          { s: 'jisung', t: "...So there was signal?" },
          { s: 'jaemin', f: 'happy', t: "Go sit down, baby." }
        ] }
      ] },
      { s: 'jaemin', f: 'happy', t: "The nineteenth. Holiday party. It's going to be the best night of the year. It has to be. I lost a Friday. I'm owed." },
      { n: "He paid for her drink on the way out without asking, the way Jaemin did everything, like it was a gift and also like it was his house and she was a guest in it, and she let him, because it was snowing and he was happy and somebody should be." }
    ] },

    { id: 'epi-r-jaemin-2', title: 'the list', hint: "Jaemin is on the snowy quad, filming a story about a party that hasn't happened yet.",
      after: '12/9', until: '12/14', slots: ['after'], events: ['epi-r-regionals-2'],
      place: 'Syracuse · The Quad', time: 'After Class', scene: [
      { n: "He was in the middle of the quad in a camel coat with his phone held out at arm's length, saying something to it with great feeling, and when she got close enough she heard *days until the most important night of your lives* and then he saw her and turned the camera on her before she could get out of the way." },
      { s: 'jaemin', f: 'happy', t: "Say hi to my followers." },
      { s: 'solar', t: "No." },
      { s: 'jaemin', f: 'happy', t: "She said no. Iconic. That's the post." },
      { n: "He put the phone away. Under his arm was a garment bag with HYEIN LEE DESIGNS on it in silver letters she was ninety percent sure Hyein had ironed on herself the night the envelope came." },
      { s: 'jaemin', f: 'serious', t: "I paid, by the way. In cash. With glitter. I'm a man of my word, eventually." },
      { s: 'jaemin', f: 'neutral', t: "Okay. Business. You're on the list for the nineteenth. Obviously. The girls are on the list. The girls are load-bearing. Who's your plus-one." },
      { n: "He had the list open in his notes app, a long column of names, some in bold, some with little emojis next to them that clearly meant something only to Jaemin. Halfway down, between two names she didn't know, plain, no emoji, *Danielle.*" },
      { s: 'jaemin', f: 'neutral', t: "She's always on it. She's on it the way weather's on it." },
      { choose: [
        { t: "Put him down.", when: { ifEpiRoute: 'haechan' }, then: [
          { s: 'jaemin', f: 'surprised', t: "Him. Him who." },
          { n: "She looked at him. He looked at her. Then he grinned, slow and enormous, the grin of a man who'd been right about something for a very long time and had been waiting with great discipline to be told so." },
          { s: 'jaemin', f: 'happy', t: "...Him. I'm writing *him* and nothing else. It's going to drive Jeno insane." }
        ] },
        { t: "Put Minji down. She'll bring a camera. She'll ask first.", when: { ifEpiRoute: 'minji' }, then: [
          { s: 'jaemin', f: 'happy', t: "A filmmaker. At my party. With *consent forms.* This is the classiest thing that's ever happened to Sigma Chi." }
        ] },
        { t: "Nobody. I'll come with the girls.", then: [
          { s: 'jaemin', f: 'neutral', t: "Respect. Arriving as a unit. Very strong. Very *girls' night, but at my house.*" }
        ] }
      ] },
      { n: "He went back to filming. Somewhere behind her a bell tower was ringing the hour, and the snow on the quad was so new and so flat that the only marks on it were theirs, and she stood in the middle of it while Jaemin narrated a party that hadn't happened yet to four thousand people, and she thought about Danielle on that list, plain, no emoji, like weather." }
    ] }
  ] };

  /* ── Danielle (rival: closeness is how much she's watching) ── */
  B.danielle = { id: 'danielle', role: 'rival', hangouts: [
    { id: 'epi-r-danielle-1', title: 'the second landing', hint: "Danielle is sitting on the Alpha stairs with the chapter ledger, in no hurry at all.",
      after: '12/2', until: '12/5', slots: BOTH, events: ['epi-r-cover'],
      place: 'Syracuse · Alpha Phi House · Stairs', time: 'Evening', scene: [
      { music: 'epi-r-danielle' },
      { n: "The second landing. The one Solar had crossed at two in the morning in November in a jacket that wasn't hers, the one where she'd seen a strip of light under a door and stopped breathing and kept walking. Danielle was sitting on it now with the chapter ledger open across her knees and a stack of receipts beside her squared off so neatly it looked like a single object." },
      { s: 'danielle', f: 'neutral', t: "Careful. Third step from the top. It talks." },
      { n: "It did. It always had. Solar had never once heard Danielle use it." },
      { s: 'danielle', f: 'neutral', t: "Dues. You missed the November installment. I covered you. Don't thank me. It's in the ledger. Everything's in the ledger." },
      { s: 'danielle', f: 'happy', t: "The emergency vacation. That's Hanni's, isn't it? It's catching on. I heard a pledge use it today about a dentist." },
      { choose: [
        { t: "It was a retreat. You'd know if you'd been invited.", then: [
          { glitch: { strain: 1 } },
          { s: 'danielle', f: 'happy', t: "Mm. I'm sure I would." },
          { n: "She said it so pleasantly. She made a small note in the margin of the ledger while she said it, and Solar would have given a great deal to know what it said." }
        ] },
        { t: "What do you want, Danielle?", then: [
          { s: 'danielle', f: 'surprised', t: "Want? I'm doing the books." },
          { s: 'danielle', f: 'neutral', t: "Somebody has to know where everything went." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "I had some film developed. It's taking longer than it should. The man at the shop keeps calling me to ask if I'm sure it's mine." },
      { n: "She closed the ledger. She stood up, receipts and all, in one smooth motion, and she was a step above Solar now, which put them eye to eye." },
      { s: 'danielle', f: 'neutral', t: "I don't sleep much. You'd know that, actually." },
      { s: 'danielle', f: 'happy', t: "You've seen my light." },
      { n: "Then she went up. Third step from the top, silent. Her door shut with that soft click. And Solar stood on the second landing with her heart going hard enough to hear and nothing at all to say back to a door, which, she was beginning to understand, was exactly how Danielle liked to end a conversation." }
    ] },

    { id: 'epi-r-danielle-2', title: 'intro to business', hint: 'Intro to Business lets out, and Danielle takes the seat beside hers before Solar can stand.',
      after: '12/8', until: '12/12', slots: ['after'], days: [1, 3, 5],
      place: 'Syracuse · Lecture Hall', time: 'After Class', scene: [
      { music: 'epi-r-danielle' },
      { n: "Intro to Business, Mondays, Wednesdays and Fridays, a hundred and forty people in a hall that smelled like wet coats and dry-erase marker. The lecture had been on crisis communications, which Solar had sat through with an expression of polite interest that had taken her eighteen years to build. The professor had said *the cover-up is always worse than the thing* three times, like it was a joke, and everybody had laughed three times." },
      { n: "Before she could get her bag zipped, someone sat down in the seat beside hers. Not the seat beside that. Hers." },
      { s: 'danielle', f: 'happy', t: "He's wrong, you know. The cover-up's only worse if it's bad. A good one's just the story." },
      { ifFlag: 'epi-r-danielle-print', then: [
        { s: 'danielle', f: 'neutral', t: "You've seen it now. The street." },
        { n: "Solar's body did it before she could stop it, the cold that went down the backs of her arms, the green of that print behind her eyes, the tall shapes standing in it. Danielle watched it happen. Danielle had the specific patience of somebody watching a chemical do what she knew it would." }
      ], else: [
        { s: 'danielle', f: 'neutral', t: "My film came back. I'll show you sometime. When you've got time to be surprised." }
      ] },
      { ifYear: { flag: 'danielle-refused' }, then: [
        { s: 'danielle', f: 'sad', t: "I said no to something, over there. I think about why. I don't usually have to think about why." }
      ], else: [{ ifYear: { flag: 'danielle-sold' }, then: [
        { s: 'danielle', f: 'serious', t: "I made a deal over there. I keep my deals. You'd do well to remember I'm a person who keeps them." }
      ] }] },
      { s: 'danielle', f: 'neutral', t: "Where was the lodge again? I keep forgetting." },
      { choose: [
        { t: "The Adirondacks.", then: [
          { glitch: { strain: 1 } },
          { s: 'danielle', f: 'happy', t: "Of course. The Adirondacks. A lodge in the Adirondacks. Hanni says it like it's a third thing." },
          { n: "She'd heard. Of course she'd heard. She'd heard it through a wall or a door or a pledge, and she'd kept it, and taken it out now to show Solar she had it. That was the whole trick of Danielle, Solar was learning. She never told you anything you didn't know. She just showed you that she knew it too." }
        ] },
        { t: "Ask Hanni. She planned it.", then: [
          { s: 'danielle', f: 'neutral', t: "I did ask Hanni." },
          { s: 'danielle', f: 'happy', t: "That's why I'm asking you." }
        ] }
      ] },
      { n: "She stood up, coat over her arm, and looked down at Solar for a second with something that was almost fondness, which was the worst thing her face could do." },
      { s: 'danielle', f: 'neutral', t: "See you Wednesday. Or Friday. Everyone's on a schedule." },
      { n: "She was up the aisle and through the doors before Solar had found a single word, and the hall emptied around her, and the professor erased the board, *the cover-up is always worse,* in long squeaking strokes, until there was nothing left on it at all." }
    ] }
  ] };

  /* ── Texts ── */
  const T = (R.texts ||= {});
  (T.groups ||= []).push('girls', 'team');
  T.threads = Object.assign(T.threads || {}, {
    girls: 'the girls', team: 'SU overwatch', haechan: 'haechanah', minji: 'minjibear', mark: 'markylee',
    jaehyun: 'Jaehyun', chenle: 'Chenle', jaemin: 'Jaemin', dad: 'Dad', mom: 'Mom'
  });
  (T.texts ||= []).push(
    { id: 'epi-r-tx-mom-home', thread: 'mom', date: '12/1', slot: 'late', msgs: [
      { from: 'mom', t: "You're back. Good." },
      { from: 'mom', t: "Your father isn't talking about it, so I will. We are glad you're safe. That's all I'm going to say tonight." },
      { from: 'mom', t: "Tomorrow I'm going to say more." }
    ], reply: [
      { t: "im sorry mom", then: [{ from: 'mom', t: 'I know, sweetheart. Go to sleep.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'mom', t: 'Goodnight, Solar.' }] }
    ] },
    { id: 'epi-r-tx-team-film', thread: 'team', date: '12/1', slot: 'late', events: ['epi-r-five-days'], msgs: [
      { from: 'doyoung', t: 'film from today is up. 40 min each. notes by tomorrow 4pm' },
      { from: 'doyoung', t: 'minji. solar. you two get 60' },
      { from: 'olivia', t: 'WE ARE SO BACK' },
      { from: 'olivia', t: 'sorry. we are so back (quietly)' },
      { from: 'haerin', t: 'ok' }
    ], reply: [
      { t: "60. got it", then: [{ from: 'doyoung', t: 'good' }, { from: 'minji', t: 'minjibear: 60. got it' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'chenle', t: 'she read it. i saw the read receipt. she is watching the film' }] }
    ] },
    { id: 'epi-r-tx-han-advisor', thread: 'dad', date: '12/2', slot: 'after', msgs: [
      { from: 'dad', t: "Good afternoon, Solar. This is Ms. Han, from your father's office." },
      { from: 'dad', t: "Mr. Lee asks that you keep Thursday at 6:00 p.m. free for a call. He would also like the name of the trip's faculty advisor, for his records." },
      { from: 'dad', t: 'Thank you.' }
    ], reply: [
      { t: "of course. ill send it", then: [{ from: 'dad', t: "Thank you, Solar. I'll let him know you're looking for it." }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'dad', t: "I'll note that the message was received." }] }
    ] },
    { id: 'epi-r-tx-girls-exclusive', thread: 'girls', date: '12/2', slot: 'evening', events: ['epi-r-cover'], msgs: [
      { from: 'hyein', t: 'hyein: did danielle say EXCLUSIVE' },
      { from: 'hyein', t: 'hyein: she said it like a CAPTION' },
      { from: 'hanni', t: "hanni: she says everything like a caption" },
      { from: 'hanni', t: 'hanni: sol you were so good this morning. i almost believed us' }
    ], reply: [
      { t: "we were very convincing", then: [{ from: 'hyein', t: 'hyein: we were ICONIC' }, { from: 'hanni', t: 'hanni: we were a little iconic' }] },
      { t: "i hate that i'm good at it", then: [{ from: 'hanni', t: 'hanni: me too' }, { from: 'hyein', t: "hyein: i'm not good at it. i just yell" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'hyein', t: 'hyein: shes thinking about it. i can tell. the read receipt looks worried' }] }
    ] },
    { id: 'epi-r-tx-hc-wait', thread: 'haechan', date: '12/3', slot: 'late', flag: 'epi-r-stem-wait', events: ['epi-r-confession'], msgs: [
      { from: 'haechan', t: 'nothing opens till you say' },
      { from: 'haechan', t: "thats the whole text. i'm not going to send another one" }
    ], reply: [
      { t: "ok", then: [{ from: 'haechan', t: 'ok' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-tx-hc-file', thread: 'haechan', date: '12/3', slot: 'late', flag: 'epi-r-stem-file', events: ['epi-r-confession'], msgs: [
      { from: 'haechan', t: 'sent. check ur drive' },
      { from: 'haechan', t: "theres no other copy. i'll keep saying it till its boring" }
    ], reply: [
      { t: "got it", then: [{ from: 'haechan', t: 'good' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-tx-hc-deleted', thread: 'haechan', date: '12/3', slot: 'late', flag: 'epi-r-stem-deleted', events: ['epi-r-confession'], msgs: [
      { from: 'haechan', t: 'done' },
      { from: 'haechan', t: 'checked twice' }
    ], reply: [
      { t: "ok", then: [] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-tx-minji-count', thread: 'minji', date: '12/4', slot: 'evening', msgs: [
      { from: 'minji', t: 'fourteen practices. i counted' },
      { from: 'minji', t: "we're ready. i'm saying it so it's true" }
    ], reply: [
      { t: "we're ready", then: [{ from: 'minji', t: 'see. now its true' }] },
      { t: "you counted?", then: [{ from: 'minji', t: 'i count everything. its a filmmaker thing. or a me thing' }] }
    ] },
    { id: 'epi-r-tx-jaehyun-stream', thread: 'jaehyun', date: '12/5', slot: 'late', msgs: [
      { from: 'jaehyun', t: "I'll be watching the stream." },
      { from: 'jaehyun', t: 'Eat breakfast. Not coffee. Breakfast.' }
    ], reply: [
      { t: "yes captain", then: [{ from: 'jaehyun', t: "Don't." }, { from: 'jaehyun', t: 'Good luck.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jaehyun', t: 'Breakfast, Solar.' }] }
    ] },
    { id: 'epi-r-tx-team-day1', thread: 'team', date: '12/6', slot: 'late', events: ['epi-r-regionals-1'], msgs: [
      { from: 'doyoung', t: 'day one: through.' },
      { from: 'doyoung', t: 'phones off at midnight. lobby at 8:30. eat something with a vegetable in it' },
      { from: 'olivia', t: "WE'RE THROUGH WE'RE THROUGH WE'RE" },
      { from: 'chenle', t: 'their ana slept the tank 6 times today. 6 for 6' },
      { from: 'haerin', t: 'good game everyone' }
    ], reply: [
      { t: "see you at 8:30", then: [{ from: 'doyoung', t: '8:25' }] },
      { t: "olivia go to sleep", then: [{ from: 'olivia', t: 'I CANT' }, { from: 'olivia', t: 'ok i can' }] }
    ] },
    { id: 'epi-r-tx-mark-regionals', thread: 'mark', date: '12/7', slot: 'late', events: ['epi-r-regionals-2'], msgs: [
      { from: 'mark', t: 'u were incredible today' },
      { from: 'mark', t: 'thats it. thats the whole text. u dont have to answer' }
    ], reply: [
      { t: "thank you for coming", then: [{ from: 'mark', t: 'word' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-tx-mom-calls', thread: 'mom', date: '12/8', slot: 'after', msgs: [
      { from: 'mom', t: "Ms. Han tells me you didn't call your father on Thursday." },
      { from: 'mom', t: "I'm not angry. I'm asking you to call him before he decides to come up there." }
    ], reply: [
      { t: "i'll call him this week", then: [{ from: 'mom', t: 'Thank you. Wear something warm. It says snow.' }] },
      { t: "i had a thing on thursday", then: [{ from: 'mom', t: 'I know you did. Call him anyway.' }] }
    ] },
    { id: 'epi-r-tx-chenle-data', thread: 'chenle', date: '12/8', slot: 'evening', events: ['epi-r-regionals-2'], msgs: [
      { from: 'chenle', t: 'regionals final. your suzu was 0.4s faster than your november average' },
      { from: 'chenle', t: "that's a lot. i'm telling you because nobody else will notice. that's not an insult to them" }
    ], reply: [
      { t: "i noticed", then: [{ from: 'chenle', t: 'good. then two of us noticed' }] },
      { t: "thank you chenle", then: [{ from: 'chenle', t: "you're welcome. i made a graph. i'm not going to send it unless you ask" }] }
    ] },
    { id: 'epi-r-tx-girls-deposit', thread: 'girls', date: '12/9', slot: 'evening', msgs: [
      { from: 'hyein', t: 'hyein: JAEMIN PAID THE DEPOSIT' },
      { from: 'hyein', t: 'hyein: IN CASH' },
      { from: 'hyein', t: 'hyein: THE ENVELOPE SAYS FOR THE ARTIST' },
      { from: 'hanni', t: 'hanni: there is glitter on our carpet now. forever' }
    ], reply: [
      { t: "frame it", then: [{ from: 'hyein', t: "hyein: ALREADY BUYING THE FRAME" }] },
      { t: "the artist!!!", then: [{ from: 'hyein', t: 'hyein: THE ARTIST' }, { from: 'hanni', t: 'hanni: please do not encourage her she bowed back to him' }] }
    ] },
    { id: 'epi-r-tx-jaehyun-card', thread: 'jaehyun', date: '12/10', slot: 'late', msgs: [
      { from: 'jaehyun', t: "Mom's card came. It needs both of us." },
      { from: 'jaehyun', t: 'Come by the house this week. Afternoon. Nobody will be there.' }
    ], reply: [
      { t: "ok. thursday or friday", then: [{ from: 'jaehyun', t: 'Good.' }] },
      { t: "nobody?", then: [{ from: 'jaehyun', t: 'Johnny. Johnny is furniture.' }] }
    ] },
    { id: 'epi-r-tx-hc-checkin', thread: 'haechan', date: '12/11', slot: 'late', flag: 'epi-route-haechan', msgs: [
      { from: 'haechan', t: 'home' },
      { from: 'haechan', t: "not going anywhere tonight. that's the check in" }
    ], reply: [
      { t: "thank you for telling me", then: [{ from: 'haechan', t: "don't thank me for it. it's the rule" }, { from: 'haechan', t: '...ok. ur welcome' }] },
      { t: "how was it", then: [{ from: 'haechan', t: 'bad coffee. a guy cried. i didnt' }, { from: 'haechan', t: 'i went' }] }
    ] },
    { id: 'epi-r-tx-han-travel', thread: 'dad', date: '12/13', slot: 'after', msgs: [
      { from: 'dad', t: "Good afternoon, Solar. This is Ms. Han." },
      { from: 'dad', t: "Mr. Lee will be in touch about your winter break travel. Please confirm by the eighteenth so the arrangements can be made." },
      { from: 'dad', t: 'He also asked me to note that he is still waiting for the advisor\'s name.' }
    ], reply: [
      { t: "i'll confirm. thank you ms. han", then: [{ from: 'dad', t: 'Thank you, Solar.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'dad', t: "I'll note that the message was received." }] }
    ] },
    { id: 'epi-r-tx-jaemin-list', thread: 'jaemin', date: '12/14', slot: 'evening', msgs: [
      { from: 'jaemin', t: 'five days.' },
      { from: 'jaemin', t: "ur on the list. ur always on the list. i'm just saying it so u feel special" },
      { from: 'jaemin', t: 'dress code is festive but NOT department store. hyein has been briefed' }
    ], reply: [
      { t: "i feel very special", then: [{ from: 'jaemin', t: 'as u should. ur in bold' }] },
      { t: "what does bold mean", then: [{ from: 'jaemin', t: 'it means ur bold' }, { from: 'jaemin', t: "i don't explain the system" }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-r-am-girls-brand', thread: 'girls', from: '12/2', to: '12/5', msgs: [
      { from: 'hyein', t: 'hyein: the pledges are calling it THE emergency vacation now. capital T' },
      { from: 'hanni', t: 'hanni: i made that up as a joke' },
      { from: 'hyein', t: 'hyein: u made a BRAND' }
    ], reply: [
      { t: "trademark it", then: [{ from: 'hanni', t: "hanni: i'm not trademarking a lie sol" }, { from: 'hyein', t: "hyein: she's thinking about it" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'hyein', t: 'hyein: she loves it. she just cant say so' }] }
    ] },
    { id: 'epi-r-am-mark-notes', thread: 'mark', from: '12/9', to: '12/14', msgs: [
      { from: 'mark', t: 'stats final is the 16th. i found someones notes from the week we missed. theyre good' },
      { from: 'mark', t: 'theyre in the drive. no strings. i mean that. i know thats what someone with strings would say' }
    ], reply: [
      { t: "thanks mark", then: [{ from: 'mark', t: 'word' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-r-am-hc-porch', thread: 'haechan', from: '12/9', to: '12/14', flag: 'epi-route-haechan', msgs: [
      { from: 'haechan', t: 'u didnt eat' },
      { from: 'haechan', t: 'porch rail. before it freezes' }
    ], reply: [
      { t: "how do you know i didnt eat", then: [{ from: 'haechan', t: "it's getting cold out there princess" }] },
      { t: "thank you", then: [{ from: 'haechan', t: "don't tell hyein. she'll want one" }] }
    ] },
    { id: 'epi-r-am-girls-maiden', thread: 'girls', from: '12/9', to: '12/14', flag: 'epi-route-cover', msgs: [
      { from: 'hyein', t: "hyein: danielle asked me for my mom's maiden name" },
      { from: 'hyein', t: 'hyein: for the RECORDS' },
      { from: 'hanni', t: "hanni: don't answer that" },
      { from: 'hanni', t: "hanni: don't answer anything. just smile. we smile now" }
    ], reply: [
      { t: "tell her it's lee", then: [{ from: 'hyein', t: "hyein: ...it IS lee" }, { from: 'hanni', t: 'hanni: oh my god' }] },
      { t: "we smile now", then: [{ from: 'hyein', t: "hyein: i'm smiling so hard my face hurts" }, { from: 'hanni', t: "hanni: that's the job" }] }
    ] },
    { id: 'epi-r-am-minji-frame', thread: 'minji', from: '12/11', to: '12/14', flag: 'epi-route-minji', msgs: [
      { from: 'minji', t: 'the frame is still there. i checked it on three monitors' },
      { from: 'minji', t: "i'm not putting it in anything. i just needed someone else to know it's real" }
    ], reply: [
      { t: "i know it's real", then: [{ from: 'minji', t: 'ok. thank you. that helps more than it should' }] },
      { t: "can i see it again", then: [{ from: 'minji', t: 'tomorrow. in daylight. i want to look at it with the lights on' }] }
    ] },
    { id: 'epi-r-am-chenle-thursday', thread: 'chenle', from: '12/12', to: '12/14', msgs: [
      { from: 'chenle', t: 'he went thursday. i drove' },
      { from: 'chenle', t: "that's all i'm going to say about it. i just thought you'd want one fact" }
    ], reply: [
      { t: "thank you for driving", then: [{ from: 'chenle', t: "it's on the way to nothing. i'd drive it again" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] }
  );
})();
