/* The strangers epilogue (2/17-3/16/2013, Incheon): more heat. Nov 11 2026 (Kat): spice ("I do want lots of spice in
   strangers. I'm playing it next!"). Data only; loaded with the world, last of the people files (epilogue.js
   WORLDS.strangers.files). Bonds go through add() so they merge with people.js, people-night.js and people-heat.js in any
   load order; these queue behind each bond's older hangouts in the same slot. Like the book and people-heat.js, every scene
   goes all the way up to the door and cuts there: nothing graphic on the page.

   Week 1 is the starving week on purpose: near misses only. Week 2 lets go: on Haechan's route the first kiss is behind the
   Viking at Daeboreum (story-w2 epi-s-moon) and the first night is still the annex (2/26); on Jungwon's the first kiss is
   'nobody hung it up' (2/24-2/25 late, below), then the tea's near miss (2/26), then the gate (story-home epi-s-twenty). Before the 2/23 lock a hangout's `route`
   can't be read, so week 1's two scenes gate on the year's romance (ifYear) instead.

   Hangouts (role 'friend'):
     haechan  epi-s-haechan-pantry 'the storeroom'      2/18-2/22 late, ifYear romance haechan, after epi-s-step (Kitchen);
                                                        after 'the islands' (people-night) in the late queue
     jungwon  epi-s-jungwon-sunroom 'the orchid'        2/18-2/22 late, ifYear romance jungwon, after epi-s-step (Sunroom)
     jungwon  epi-s-jungwon-persimmon 'nobody hung it up' 2/24-2/25 late, route jungwon, after epi-s-moon (Gate → Garden):
                                                        the epilogue's first kiss on his route, under the moon; Haechan on
                                                        the step sees through the bare persimmon
     jungwon  epi-s-jungwon-soft 'soft, please'           3/3-3/6 late, route jungwon, after epi-s-jw-tea + epi-s-even
                                                        (Kitchen → Her Room → Morning): his watch ends at four; he sleeps in
                                                        her bed on top of the covers; "Soft, please." to Mrs. Bang through
                                                        the door; out the front past Appa ("Don't let me win.") or the back;
                                                        Haechan on the front step ("She takes all the quilt."); queues after
                                                        'the gate lamp' (people-night) in his late list
     haechan  epi-s-haechan-sweatshirt 'his sweatshirt'   3/12-3/14 evening, route haechan, after epi-s-tank (Annex): "You
                                                        smell of nothing."; ifFlag epi-s-tank-coat-jw (story-car) picks one
                                                        line; "Mine."; the bolt; she keeps the sweatshirt
   Texts (route-gated, the locked route): epi-s-tx-spice-hc-tuesday (2/25 late, haechan: "coast weather says tuesday clear"),
     epi-s-tx-spice-jw-scarf (2/25 evening, jungwon: the grey scarf, his mother asked), epi-s-tx-spice-hc-step and
     epi-s-tx-spice-jw-near (3/14 evening, the last ordinary night: the step / his window across the water).
   Flags read: epi-s-tank-coat-jw (story-car epi-s-tank) in 'his sweatshirt'.
   Flags set (local, read nowhere else): epi-s-pantry-hand (pantry: her hand over his mouth), epi-s-sunroom-watch (sunroom:
     she took his watch off).
   Texts: { later } lines (core.js laterText) the next morning in both (coded, because the phones are listened to).
   Bonds: one { bond } per hangout, in the warmest option.
   Fences kept: no injury named on either boy (hands, mouths, necks, the scar through his eyebrow); Jungwon uses his right hand;
     the Discman never plays; no wedding talk; Appa never addresses the storeroom.

   Inventions for Kat to confirm (small): the storeroom off the Lee kitchen (rice sack, doenjang jars, strings of dried
   persimmon, the yakgwa tin Mrs. Bang counts); Appa's two a.m. glass of water; Mr. Oh's night round with a torch at one;
   Mr. Oh drives Jungwon's forgotten watch back to the Yang house at seven, polished. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const LATE = ['late'];

  /* ── Week 1: Haechan (Nov 11 2026 (Kat): spice) ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-pantry', title: 'the storeroom', hint: "Somebody's in the kitchen at two in the morning with the fridge door open, eating the yakgwa Mrs. Bang counted.",
      after: '2/18', until: '2/22', slots: LATE, events: ['epi-s-step'], noFlags: [], route: null, noRoute: null, ifYear: { romance: 'haechan' },
      place: 'Incheon · The Lee House · Kitchen', time: 'Late Night', scene: [
      { music: 'epi-s-late' },
      { n: "She went down for water at two, which was a lie she told herself on the back stairs, in her socks, past the window where the annex light at the bottom of the garden was out for once, and the step under it was empty." },
      { n: "The kitchen was dark except for the fridge. Its door stood open, and the long white light of it fell across the floor and the table and the koi bucket, which Mrs. Bang had brought in by the radiator for the frost, and in the light, with his back against the counter and the black jacket still zipped to his chin, Haechan was eating cold japchae out of the container with his fingers." },
      { n: "He looked at her over the lid. He didn't stop chewing. A noodle hung off his fingers in a long, shining, guilty loop." },
      { s: 'haechan', f: 'neutral', t: "I'm not here." },
      { s: 'solar', f: 'happy', t: "You're eating Mrs. Bang's japchae with your hands in the dark." },
      { s: 'haechan', f: 'neutral', t: "In the light. The fridge is very bright. And it's tomorrow's, so technically I'm eating it early. That's not stealing, that's punctual." },
      { n: "His hands were blue. Not cold: blue, at the knuckles, the split ones gone the color of the skin on milk, and when he reached into the tin on the counter for a yakgwa they shook, very slightly, and he saw her see it and put them in his pockets." },
      { s: 'solar', f: 'serious', t: "How long were you on the step?" },
      { s: 'haechan', f: 'happy', t: "Not long. A normal amount. Three hours. The radio said frost on the coast and I thought, I should check, I'm on the coast." },
      { n: "She took his hands out of his pockets. He let her, which was how she knew how cold he was. She put them round the glass of warm water she'd poured from the kettle, and her own round his, and held all of it together, his hands and the glass and hers, between them in the light of the open fridge, and felt the cold come out of him into her palms like something poured." },
      { n: "He watched her do it. The joke went out of his face somewhere around the second minute and didn't come back." },
      { n: "Then, overhead, the seventh stair." },
      { music: 'epi-s-danger' },
      { n: "The long low complaint in the wood. Her father's slippers. And humming, slow and flat, four bars of something old, coming down." },
      { n: "Haechan moved before she'd finished hearing it. He shut the fridge with his hip, so the kitchen went black, and he had her by the wrist, and the storeroom door was open, and then shut, and they were inside it, in the dark, in the smell of rice and doenjang and the dried persimmons hanging from the beam in their strings, and there was no room at all." },
      { n: "There had never been room in the storeroom. It was a cupboard with ambitions. Her back was against the shelves, a jar of something pressing cold into her shoulder blade, and the rice sack was against her calves, and he was against all the rest of her, from her knees to her collarbone, because there was nowhere else in that dark for him to be, one hand flat on the shelf beside her head and the other still holding the glass of water, which he hadn't let go of, which was somehow the funniest thing that had ever happened to her." },
      { n: "She couldn't see him. She could feel him breathe. His chest against hers going in and out, too fast and trying not to be, and his breath on her temple, cinnamon and sesame oil, and the cold still coming off the front of his jacket, and his heart, which she could feel through two coats, going like somebody running up a hill." },
      { n: "The kitchen light went on. A line of it came under the storeroom door and lay across their feet, his boots and her socks, toes to toes." },
      { n: "Her father crossed the kitchen. The tap ran. A glass filled, and stopped. A chair scraped back from the table, slowly, and took his weight, and the paper rustled, and he began, very softly, to hum." },
      { n: "He was sitting down." },
      { n: "At two in the morning, her father had come down for a glass of water and was sitting down with it at the kitchen table, and humming, as if he had all night, which he did, which he always did." },
      { n: "Haechan's mouth was against her ear. Not on purpose. There was nowhere else for it to go. When he breathed out she felt it all the way down her neck, and her whole body lit up along the line of it like a fuse, and she pressed her face into the zip of his jacket so she wouldn't make a sound, and felt him feel her do it, and felt him go absolutely rigid against her, everywhere." },
      { choose: [
        { t: "(Put your hand over his mouth.)", flag: 'epi-s-pantry-hand', stat: { courage: 1 }, then: [
          { n: "Because he was going to laugh. She could feel it building in his chest, the helpless kind, the kind that came out of him at funerals, and she got her hand up between them in the dark and over his mouth, hard, and held it there." },
          { n: "He stopped. All of it, the laugh, the breathing, the shaking. He stood very still with her palm over his mouth and his breath going hot and slow into it, and then, under her hand, very deliberately, his mouth moved. Not a word. His lips, once, against the middle of her palm, slow, and then the edge of his teeth, so lightly she might have imagined it, and she didn't imagine it." },
          { n: "She didn't take her hand away. She couldn't have. Her knees had gone somewhere else entirely and the rice sack was the only thing holding her up." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(Hold absolutely still.)", stat: { proficiency: 1 }, then: [
          { n: "She held still. She was good at it. She'd been holding still in this house since she was six, behind doors and under tables and on the far side of the seventh stair, and she held still now with her face in his jacket and her hands flat against his ribs, and counted her father's humming, four bars, and again, and again." },
          { n: "It was worse. Holding still was worse. With nothing moving, there was only the heat of him, slowly coming back into his body through the front of hers, and his hand coming off the shelf by her head, very slowly, an inch at a time, so as not to make a sound, and settling at the side of her neck, under her hair, his cold thumb along her jaw, and staying there, the way you'd keep your hand on a dog in a storm." }
        ] },
        { t: "(Lean into him.)", stat: { charm: 1 }, then: [
          { n: "She leaned into him. Not much. There wasn't much room to do it in. Just her weight, all of it, given to him, her hips and her chest and her forehead against his collarbone, the way you'd lean on a door you knew would hold." },
          { n: "He made a sound. Very small. Not even a sound: a breath that caught on something in his throat on the way out, and his free hand came off the shelf and went flat on the small of her back over her coat and pulled her the last inch in, and held her there, hard, and she felt his mouth open against her hair, and his breath stop, and stay stopped." }
        ] }
      ] },
      { n: "Outside, her father turned a page." },
      { n: "He drank his water. He put the glass in the sink. He stood, she could hear him stand, and then he didn't go. He stood in the kitchen for a long moment with the light on, the way he stood on the seventh stair, deciding something, and through the gap under the door the line of light lay on their four feet and didn't move." },
      { n: "Then the tin. The yakgwa tin on the counter. The lid came off, and went back on." },
      { n: "The light went out. The slippers crossed to the hall. On the stairs, humming, and the creak of the seventh, and a pause on it, a long one, longer than usual, and then on up, and his door." },
      { n: "Neither of them moved for a full minute. Then he leaned back, very slowly, which put about four centimeters between them, which was all the storeroom had, and in the dark she heard him let out a breath that seemed to have been in him since the stairs." },
      { s: 'haechan', f: 'flustered', t: "Your father drinks water like it's a sport. Like he's training. I've never seen a man take that long over a glass." },
      { s: 'solar', f: 'happy', t: "You didn't see it." },
      { s: 'haechan', f: 'flustered', t: "I heard it. Every swallow. I'm going to hear it in my sleep, agasshi. I'm going to be ninety and hear it." },
      { n: "They came out. The kitchen was dark and ordinary, the koi turning in their bucket, the table, the chair pushed back in. And on the table, set out on one of the good saucers, side by side, exactly in the middle, two yakgwa." },
      { n: "Not one. Two." },
      { n: "Haechan looked at them for a long time. Then he picked one up and broke it in half, and put half in his own mouth and held the other half to hers, and she took it from his fingers with her teeth, and the honey was cold and very sweet, and some of it stayed on her lower lip." },
      { n: "He looked at it. In the grey from the window, she watched him look at it, the honey on her mouth, and his hand came up, and he took it off with the side of his thumb, slowly, the whole width of her lip, and then he looked at his thumb, and then at her, and his throat moved." },
      { n: "He didn't put his thumb in his mouth. She saw him decide not to. It was the most indecent thing she'd ever watched anybody not do." },
      { s: 'haechan', f: 'serious', t: "Bed, agasshi." },
      { s: 'solar', f: 'neutral', t: "You first." },
      { s: 'haechan', f: 'neutral', t: "I'm going back down to my step. My very cold step. I'm going to sit on it and think about water." },
      { n: "He went out the back door into the frost with the second yakgwa in his teeth and his hands in his pockets. She went up the back stairs and skipped the seventh, and lay in bed with the quilt to her chin and the taste of honey in her mouth, and didn't sleep until the annex light came back on, and then did, almost at once." },
      { later: { delay: 1, slot: 'early', thread: 'haechan', msgs: [
        { from: 'haechan', t: "mrs bang says 2 yakgwa missing" },
        { from: 'haechan', t: "i said 4. i said i was very hungry. i took the fall" },
        { from: 'haechan', t: "storeroom smells like me now probably. dont go in there" }
      ] } }
    ] }
  ]);

  /* ── Week 1: Jungwon (Nov 11 2026 (Kat): spice) ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-sunroom', title: 'the orchid', hint: "At one in the morning there's a dark coat under the gate lamp again. He isn't meant to be on this side of the water.",
      after: '2/18', until: '2/22', slots: LATE, events: ['epi-s-step'], noFlags: [], route: null, noRoute: null, ifYear: { romance: 'jungwon' },
      place: 'Incheon · The Lee House · Gate', time: 'Late Night', scene: [
      { music: 'epi-s-jungwon' },
      { n: "At one in the morning there was a dark coat under the gate lamp again, and she stood at her window with the light off and watched it not move for eleven minutes before she put her own coat on." },
      { n: "The street beyond the bars was empty all the way to the corner. Frost on the parked trucks. Frost on his shoulders. His breath going up past the lamp, slow and even, the breath of a man who had decided how long he would stand somewhere before he arrived, and was standing it." },
      { s: 'jungwon', f: 'neutral', t: "Good evening. I'm sorry. I walked." },
      { s: 'solar', f: 'surprised', t: "From your house? Across the water?" },
      { s: 'jungwon', f: 'neutral', t: "Round it. There's a bridge. It took an hour and forty minutes. I wasn't told I shouldn't come to the gate after midnight, so I've come. I'll be told tomorrow, I expect." },
      { s: 'solar', f: 'neutral', t: "Who'd tell you?" },
      { s: 'jungwon', f: 'happy', t: "I would. I'm very strict with myself. It's exhausting for both of us." },
      { n: "He was shivering. Very slightly, at the jaw, under the politeness, a fine fast tremor he couldn't stop and was trying to stand over, the way you'd stand over a crack in a floor so a guest wouldn't see it. An hour and forty minutes in February. In those shoes." },
      { n: "She opened the side gate." },
      { s: 'jungwon', f: 'surprised', t: "Solar-ssi." },
      { s: 'solar', f: 'neutral', t: "You're coming in. You're not coming in the house. You're coming in somewhere with a floor that's heated and nobody in it." },
      { place: 'Incheon · The Lee House · Sunroom', time: 'Late Night', soft: true },
      { n: "The sunroom was dark and warm and smelled of earth. Her mother's room, all glass on three sides, the heated floor under the tiles ticking softly, the plants standing round the walls in the dark like guests who'd come early, and by the door, on its own stand, the white orchid in bud, the buds closed tight and pale in the light from the garden, waiting for March." },
      { n: "They didn't turn the lamp on. Through the glass on the far side, at the bottom of the garden, the annex window was a small yellow square. She saw him see it. He didn't say anything about it. He took his coat off and folded it, lengthwise, then in half, the way the coat had probably been folded in the shop, and laid it over the back of the cane chair, and then didn't sit in the cane chair, because cane creaked, and sat down on the floor instead, on the warm tiles, with his back against the glass, in his good suit, as if he did it every night." },
      { n: "She sat down beside him. Her mother's grey wool blanket was on the window seat, and she pulled it down over both their knees, and under it, on the warm floor, their legs were side by side, his and hers, from the hip to the ankle, and she felt the cold still in him through the cloth, all down that one long line." },
      { n: "His hands were in his lap. White. She took the right one." },
      { n: "She put it inside her coat. Flat, against her side, over her pajama top, under her ribs, where she was warmest, and pressed her arm down over it so it stayed." },
      { n: "He made no sound at all. His whole body went still, the real still, the one that wasn't the polite one, and his hand lay against her ribs, frozen, his fingers spread, and she felt every one of them, five cold separate points, and then she felt them begin to warm, and then she felt them begin, very slightly, to move. Not much. The tips of his fingers, along one rib, the way you'd read a line in the dark." },
      { s: 'jungwon', f: 'flustered', t: "That's— I'm very sorry. Thank you. You're very kind." },
      { n: "More polite, the more it mattered. She'd learned that about him. By the sound of it, it mattered enormously." },
      { s: 'solar', f: 'happy', t: "You're welcome, Yang Jungwon-ssi." },
      { s: 'jungwon', f: 'flustered', t: "Please don't. Not with every ending on. Not while my hand is— Please." },
      { n: "His watch was on his other wrist. She could hear it in the quiet, under the floor's ticking, the small exact sound of it. She reached across him for it." },
      { choose: [
        { t: "(Undo the strap and take his watch off.)", flag: 'epi-s-sunroom-watch', stat: { courage: 1 }, then: [
          { n: "She undid the strap. He let her. She'd have bet her mother's ring that nobody alive had ever taken that watch off his wrist but him, and he sat on the floor of her mother's sunroom and watched her do it, the old leather strap, the buckle, the link taken out, and she slid it off over his hand and held it up to her ear in the dark." },
          { n: "It ticked. Loud, this close. His time, going on without him." },
          { n: "He looked at his bare wrist as if it belonged to somebody else. The pale band where the strap had been. Then he looked at her, holding his time against her ear, and something went across his face that she would have given a great deal to have a word for, and she didn't have one, in any of her three languages." },
          { s: 'jungwon', f: 'neutral', t: "*Now I don't know what time it is.*" },
          { s: 'solar', f: 'neutral', t: "*Late.*" },
          { s: 'jungwon', f: 'neutral', t: "*That's not a time.*" },
          { s: 'solar', f: 'happy', t: "*It is tonight.*" },
          { bond: { jungwon: 1 } }
        ] },
        { t: "(Put your fingers on his pulse instead.)", stat: { knowledge: 1 }, then: [
          { n: "She didn't take the watch. She put two fingers on the inside of his left wrist beside it, under the strap, where the skin was thin and warm now, and counted against his own second hand, the way he'd have done it." },
          { s: 'jungwon', f: 'neutral', t: "*That's mine to do.*" },
          { s: 'solar', f: 'happy', t: "*You were busy.*" },
          { n: "He looked down at his right hand, inside her coat, against her ribs. He didn't take it away. His ears had gone red in the dark; she could see it against the glass." }
        ] }
      ] },
      { n: "His hand moved. Out from her coat, slowly, and down, under the grey blanket, and found her ankle, bare between the pajama hem and the sock, and closed round it. Warm now. His thumb on the knob of the bone." },
      { n: "He didn't look at her. He looked straight ahead at the dark plants with his jaw set as if he were taking an examination, and his hand went up from her ankle along her calf under the blanket, slow, so slow it was barely moving, every centimeter asked for and paid for, the flat of his palm and the drag of his fingertips, up over the curve of the muscle, and stopped at the back of her knee, and stayed there, his fingers in the soft place behind it, very lightly, as if it were a pulse he'd been told to find." },
      { n: "She couldn't breathe properly. She heard herself not breathing properly, in the quiet, a small sound in the back of her throat that she would have died rather than make in front of anyone, and he heard it, and his fingers pressed, once, very gently, and her whole leg went to water under the blanket." },
      { s: 'jungwon', f: 'neutral', t: "Is this acceptable." },
      { n: "Every ending on. Not a question. His voice had gone low and rough in a way she'd never heard it go, as if somebody had taken the polish off it with sandpaper, and his eyes were still on the plants, and his hand was still behind her knee, and he was waiting." },
      { s: 'solar', f: 'neutral', t: "Jungwon-ah." },
      { n: "Banmal. To him. Out loud. She heard it go into him like a key." },
      { n: "He turned his head. From very close, on the floor, in the dark, he looked at her mouth, and she watched him look at it, and the stillness came over his face, all of it, and he leaned in, and his breath was on her lips, and it was warm now, she'd done that, she'd warmed him up enough for this—" },
      { n: "Light." },
      { n: "A torch. Out on the garden path, swinging, a slow round beam that went over the gravel and the koi bucket and the onggi jars and the glass wall of the sunroom, and across it, and across them, white, and stopped." },
      { n: "On the coat. Folded lengthwise and in half, over the back of the cane chair. The torch stayed on the coat for one second. Two." },
      { n: "Then it moved on, down the terraces, slow and steady, swinging, as if it had seen a chair." },
      { n: "Mr. Oh's round. She'd forgotten. One o'clock every night of her life, the garden, the wall, the annex, the gate, a torch and his good black shoes on the gravel, and back to the gatehouse, and she'd forgotten, and she sat on the floor of her mother's sunroom with Yang Jungwon's hand behind her knee and her face on fire and started, silently, helplessly, to laugh." },
      { n: "He put his forehead on her shoulder. She felt his shoulders going. He was laughing too, without a sound, into her coat, his hand still where it was, as if it had been told to stay and would stay until it was told otherwise." },
      { s: 'jungwon', f: 'flustered', t: "*He saw the coat.*" },
      { s: 'solar', f: 'flustered', t: "*He saw the coat.*" },
      { s: 'jungwon', f: 'flustered', t: "*I folded it. Why did I fold it. A man who'd been doing nothing would have thrown it on the floor.*" },
      { n: "When they stopped, he didn't kiss her. She watched him not do it, from very close, the decision going across his face the way it had gone across it at the gate, and come back, and go again." },
      { s: 'jungwon', f: 'neutral', t: "*I'd like to be sent home now. Before I stop being able to be sent.*" },
      { n: "He took his hand back. He did it slowly, the whole length of her calf, and the cold came in after it, and she felt every centimeter of its going more than she'd felt its coming." },
      { place: 'Incheon · The Lee House · Gate', time: 'Late Night', soft: true },
      { n: "Mr. Oh was at the side gate when they came round the house. Standing by it. Holding it open. His torch off and in his pocket and his hands folded in front of him, looking at the street." },
      { s: 'mroh', f: 'neutral', t: "Young master." },
      { s: 'jungwon', f: 'neutral', t: "Mr. Oh. Good evening. Thank you." },
      { n: "Jungwon bowed to him. Properly, from the waist, the bow you'd give a man's father. Mr. Oh inclined his head a centimeter and shut the gate behind him, and locked it, and turned to Solar in the lamplight with an expression she had last seen on him when she was eleven and had put Mrs. Bang's best ladle in the koi bucket to see if the fish would use it." },
      { s: 'mroh', f: 'neutral', t: "Home now." },
      { n: "She went home now. Up the back stairs, past the seventh, into bed, and lay in the dark with her ankle still knowing exactly where his thumb had been." },
      { ifFlag: 'epi-s-sunroom-watch', then: [
        { n: "Somewhere in the night she realized he'd walked an hour and forty minutes home without knowing what time it was. His watch was in her coat pocket. Ticking. She took it out and held it, and then, because there was nobody to see, she put it under her pillow and fell asleep to it, the way she'd fallen asleep to the tide as a girl." },
        { later: { delay: 1, slot: 'early', thread: 'jungwon', msgs: [
          { from: 'jungwon', t: "Good morning. I hope you slept." },
          { from: 'jungwon', t: "Your orchid is in bud. I'm told it will flower in March. I'd like to see it when it does, if I'm permitted." },
          { from: 'jungwon', t: "Mr. Oh came to our gate at seven with something of mine. He'd polished it. He didn't say a word. I've never been so frightened of a man in my life." }
        ] } }
      ], else: [
        { later: { delay: 1, slot: 'early', thread: 'jungwon', msgs: [
          { from: 'jungwon', t: "Good morning. I hope you slept." },
          { from: 'jungwon', t: "Your orchid is in bud. I'm told it will flower in March. I'd like to see it when it does, if I'm permitted." },
          { from: 'jungwon', t: "Mr. Oh nodded to me on the harbor road at eight. Only nodded. I've never been so frightened of a man in my life." }
        ] } }
      ] }
    ] }
  ]);

  /* ── Week 2: Jungwon, his route (Nov 11 2026 (Kat): spice) ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-persimmon', title: 'nobody hung it up', hint: "Past one, after the moon. His scarf is still round your neck, and somebody is still standing at the gate to have it back.",
      after: '2/24', until: '2/25', slots: LATE, events: ['epi-s-moon'], noFlags: [], route: 'jungwon', noRoute: null,
      place: 'Incheon · The Lee House · Gate', time: 'Late Night', scene: [
      { music: 'epi-s-jungwon' },
      { n: "His scarf was still round her neck at one in the morning. She'd gone to bed in it. She hadn't meant to; she'd sat down on the edge of the bed to take it off, and then she'd been lying down, and then the moon had come round to her window, enormous and gold and ordinary, and she'd lain there with her chin in the dark grey cashmere looking at it and not thinking about anything, very hard, for an hour." },
      { n: "Then she got up and took it down to the gate to give it back, which was the reason, and she'd have said so to anyone." },
      { n: "He was there. He'd never left. Mr. Oh had driven the Yang heir home from Wolmido at ten, and the Yang heir had thanked him and gone in at his own gate across the water and, apparently, walked straight back out of it and round the bridge, an hour and forty minutes, and was standing under the Lees' lamp at one in the morning with his bare throat in his collar and his hands at his sides as if he'd been put there with the lamp." },
      { s: 'solar', f: 'neutral', t: "You'll get sick. You haven't got a scarf." },
      { s: 'jungwon', f: 'neutral', t: "I know where it is." },
      { n: "She unlocked the side gate. She didn't give it back. He didn't ask for it. They went down the garden instead, neither of them having said they would, along the path past the onggi jars and the koi bucket, and down the terraces, him a step behind her on the frozen gravel, very quiet, the way he walked in other people's houses." },
      { place: 'Incheon · The Lee House · Garden', time: 'Late Night', soft: true },
      { n: "The moon was right overhead now. High water at one, eight point nine meters, her father had read it out; she could hear it under the garden wall, the whole bay pushed up full and brimming against the stone and breathing there, not going anywhere, at the top of itself. Everything was silver. The frost on the terraces, the bare branches, the roofs of the city going down to the water. On the second terrace the persimmon held its arms out over them, empty, every twig of it drawn on the sky in silver ink." },
      { n: "She stopped under it. He stopped behind her." },
      { s: 'solar', f: 'neutral', t: "You said somewhere nobody had hung anything up." },
      { n: "He looked up. Through the bare branches, at the moon. The full one, the first of the year, that the whole city had been out on the seafront to burn a straw house for, that had gone green for one breath and come back. Nobody had hung it up. Nobody could." },
      { n: "He didn't say anything. He took her face in his hands." },
      { n: "His right hand, bare, at her jaw, and he turned her face up into the moonlight the way you'd turn a page toward a window to read it, and looked, for a long time, as if he were committing it to something; and she stood in his scarf and let him look, and felt the look go over her mouth like a thumb." },
      { s: 'jungwon', f: 'neutral', t: "May I." },
      { s: 'solar', f: 'neutral', t: "You asked me that at the gate." },
      { s: 'jungwon', f: 'neutral', t: "I'm asking again. I'll ask every time. I'd like you to get very tired of it." },
      { s: 'solar', f: 'neutral', t: "Yes." },
      { n: "He kissed her properly." },
      { cg: 'epi-s-persimmon' }, // FEMC-ART-TODO 58B
      { n: "That was the only word for it, and it was his word, and he meant it. Slowly, and completely, with his whole attention, as if there were nothing else he was supposed to be doing anywhere in the world and never had been; his mouth cold and then not cold, his breath warm in the cold air between them, his thumb at the hinge of her jaw tipping her face up a degree further, then another, as if he were finding the exact angle of something and would not stop until he had it. He had it. She felt him find it. She felt the moment he knew, because his hand at her jaw shook, once, and then went very steady." },
      { n: "Her back met the trunk of the persimmon. She didn't know when. The bark was rough and cold through her coat and his body was against the front of her, all of him, the good wool and the shirt under it and the heat under that, which she'd never once felt from him, never in a whole winter, the man who gave off no warmth and no scent, and here it was, coming off him in waves through two coats under a tree in February, and it had been there the whole time." },
      { n: "He made a sound when she put her hands inside his coat. Low. In his chest. It wasn't polite. It wasn't anything she'd heard a Yang make, and he heard himself make it and didn't stop, and kissed her harder, his hand going from her jaw into her hair, the scarf coming loose between them and sliding down her front into the frost at their feet, and neither of them going after it." },
      { n: "When he pulled back it was only far enough to breathe. His forehead on hers. His eyes shut. Breathing as if he'd walked the whole hour and forty minutes at a run." },
      { s: 'jungwon', f: 'neutral', t: "*Solar.*" },
      { n: "Just her name. No -ssi. No ending on it at all. In Mandarin, the way her name sounded in his mouth in Mandarin, which was a way she'd never heard it sound in anyone's." },
      { cg: null },
      { n: "Then he opened his eyes, and looked past her shoulder, down, and his face changed. Not much. A degree. The way it had changed at the railing on the promenade." },
      { n: "She knew what he was looking at before she turned. The bottom of the garden. The annex. The one small yellow window, and the step under it, and on the step, a shape in a black jacket with its forearms on its knees, looking up the terraces at a persimmon tree that had no leaves on it at all, so that anyone sitting on that step could see straight through every branch of it to whatever was underneath." },
      { n: "The shape didn't move. It didn't look away either." },
      { choose: [
        { t: "(Step out from under the tree.)", stat: { kindness: 1 }, then: [
          { n: "She stepped out from under the persimmon, onto the open terrace, into the plain moonlight, away from Jungwon, a meter. Not for her. For the step." },
          { n: "Jungwon let her. He picked his scarf up out of the frost and shook it out and folded it over his arm, and stood very straight beside the tree, and bowed, a small one, down the garden, at the annex, the bow you'd give a man across a room whose evening you had just ruined and were sorry for and would do again." },
          { n: "On the step, the shape lifted one hand. Just the hand, off the knee, a few centimeters. Then put it back." }
        ] },
        { t: "(Stay where you are. Let him see.)", stat: { courage: 1 }, then: [
          { n: "She didn't move. She stayed against the tree with Jungwon's hands still on her and her hair coming down, in the silver, where anyone could see, and looked down the garden at the step, and let him." },
          { n: "Jungwon didn't move either. He didn't put his hands away. He didn't hold her tighter. He kept them exactly where they were, as if it would be dishonest to do anything else, and when he spoke it was very quietly, still looking at the annex." },
          { s: 'jungwon', f: 'neutral', t: "I'd rather he knew. I'm tired of being polite about it. I'm only polite about everything else." },
          { n: "Down on the step, the shape got up, and went inside, and the steel door shut. Not slammed. Shut, carefully, the way you'd shut a door on a sleeping house. The radio on the sill went off. The light stayed on." },
          { bond: { jungwon: 1 } }
        ] }
      ] },
      { n: "He put his scarf back round her neck before he went. Twice. Tucked it in. Didn't say it was hers now, and didn't take it." },
      { s: 'jungwon', f: 'neutral', t: "Goodnight, Solar-ssi. Thank you for the moon." },
      { s: 'solar', f: 'happy', t: "It's not mine." },
      { s: 'jungwon', f: 'happy', t: "No. Nobody hung it up. I checked." },
      { n: "She went up to bed in his scarf and lay looking at the moon until it went off the edge of her window, and she slept, eventually, with her mouth still feeling the exact angle he'd found, and the annex light at the bottom of the garden still on when she closed her eyes, and still on, she would have bet, when she opened them." },
      { later: { delay: 1, slot: 'early', thread: 'haechan', msgs: [
        { from: 'haechan', t: "persimmon's got no leaves agasshi" },
        { from: 'haechan', t: "you can see straight through it from the step" },
        { from: 'haechan', t: "just so you know. for next time. the onggi jars are taller" },
        { from: 'haechan', t: "tell him to wear a scarf. he coughed all the way up the garden. i heard it" }
      ] } }
    ] }
  ]);


  /* ── Week 3: Jungwon, his route (Nov 11 2026 (Kat): spice): waking up together ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-soft', title: 'soft, please', hint: "His watch ends at four. The kitchen door is on the latch, and the back stairs know which step to skip.",
      after: '3/3', until: '3/6', slots: LATE, events: ['epi-s-jw-tea', 'epi-s-even'], noFlags: [], route: 'jungwon', noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Before Light', scene: [
      { music: 'epi-s-jungwon' },
      { place: 'Incheon · The Lee House · Kitchen', time: 'Before Light', soft: true, bg: 'epi-s-lee-kitchen' },
      { n: "His watch ended at four. She was in the kitchen at four minutes to, in the dark, with the back door on the latch and her coat over her pajamas and her heart going in a way she'd have been ashamed of in a girl of fifteen." },
      { n: "He came in from the garden with the cold on him and the dust in the cold, the yellow grit of it on the shoulders of the dark coat, and stopped on the mat when he saw her, and didn't bow, for once. He looked too tired to bow. Four hours on a gate in the dust, standing, facing the road, the way he stood everything, and the whites of his eyes gone pink with it, and his face doing nothing at all because there was nothing left in it to do anything with." },
      { s: 'jungwon', f: 'neutral', t: "Solar-ssi. You should be asleep." },
      { s: 'solar', f: 'neutral', t: "So should you. You've got a forty-minute drive." },
      { s: 'jungwon', f: 'neutral', t: "Forty-one. There's a light at Sinpo that's always red." },
      { s: 'solar', f: 'neutral', t: "Come up." },
      { n: "He didn't move. He stood on the mat in the dark kitchen with the dust on his coat and looked at her as if she'd asked him to sign something without reading it, and she watched him read it anyway, every clause, the house and her father and the seventh stair and Mrs. Bang asleep behind the door four meters away, and come to the bottom of the page." },
      { s: 'jungwon', f: 'neutral', t: "*Two hours. I'll go at six. Before your father's paper.*" },
      { s: 'solar', f: 'neutral', t: "*He reads the paper at half past four.*" },
      { s: 'jungwon', f: 'neutral', t: "*...Then I'll go at a time I'll think of on the stairs.*" },
      { place: 'Incheon · The Lee House · Her Room', time: 'Before Light', soft: true },
      { n: "He took his shoes off at the bottom of the back stairs and carried them, the way she carried her boots, and went up behind her in his socks, and she stopped him on the sixth stair with a hand flat on his chest, and pointed, in the dark, at the seventh, and stepped over it. He stepped over it. She felt him memorize it. She'd have bet her mother's ring he'd never forget where it was as long as he lived." },
      { n: "Her room. The lamp she always left on, low. He stood just inside the door and looked at it, her room, the dresser with the pins in their row and the window over the black water and the bed, and his eyes went round all of it once, slowly, the way he'd look round a room where a meeting was going to be held, and then came back to her, and stopped." },
      { n: "He took his coat off and folded it. She'd known he would. Lengthwise, then in half, over the back of her desk chair. Then his jacket. Then he stood there in his shirt, the white one, creased from the gate, with his tie loosened by somebody who'd been too cold to loosen it properly, and looked at her bed as if it were a body of water and he had never been taught to swim." },
      { s: 'jungwon', f: 'flustered', t: "I'll sleep on top of the covers." },
      { s: 'solar', f: 'happy', t: "You'll sleep wherever you fall over." },
      { n: "She undid his tie. He let her. The silk went through the knot with a long soft sound and she laid it on the dresser beside her pins, and undid the top button of his shirt, and the second, slowly, and stopped there, with her fingers on the third, and felt him stop breathing under them." },
      { n: "He put his right hand over hers. Not to stop it. To keep it there." },
      { s: 'jungwon', f: 'neutral', t: "*Solar. I've been awake for twenty-two hours.*" },
      { s: 'solar', f: 'neutral', t: "*I know.*" },
      { s: 'jungwon', f: 'neutral', t: "*I'd like to be awake for this. All of it. I'd like to be very awake.*" },
      { n: "It was the most devastating thing anyone had ever said to her with his hand over hers on a shirt button, and he'd said it completely sincerely, and he meant it as a promise and not as a refusal, and she heard both, and her face went hot to the roots of her hair." },
      { n: "So they lay down on top of the covers. Him in his shirt, her in her pajamas, her mother's grey quilt pulled over both of them from the foot of the bed, and his arm went under her neck, and she turned her face into his shirt, which smelled of nothing but the cold and, very faintly, of the dust, and of her own soap, from her hands on him at the gate, and his heart was slow, slow, slower, and then he was asleep." },
      { n: "Just like that. Mid-breath. A man who had decided to sleep and had slept, the way he'd decided to lose by one and a half." },
      { n: "She lay there a long time, watching it. Yang Jungwon, asleep in her bed, his face gone completely still, not the polite still or the pleased one but a third one she'd never seen, without anybody inside it holding it up. His mouth slightly open. His watch on the wrist across her pillow, ticking by her ear. She fell asleep counting it." },
      { place: 'Incheon · The Lee House · Her Room', time: 'Morning', soft: true },
      { n: "She woke because something was looking at her." },
      { cg: 'epi-s-soft' }, // FEMC-ART-TODO 58C
      { n: "Grey light. The window gone pale over the water. His face very close on the pillow, awake, his eyes on her, and on his face the most enormous embarrassment she'd ever seen on anybody, as if he'd woken up in a stranger's house wearing her clothes." },
      { s: 'jungwon', f: 'flustered', t: "Good morning. I'm so sorry. I've slept in your bed." },
      { s: 'solar', f: 'happy', t: "You have." },
      { s: 'jungwon', f: 'flustered', t: "It's six forty. I looked. I had a time. I was going to think of it on the stairs. I fell asleep before the stairs." },
      { s: 'solar', f: 'happy', t: "You fell asleep after the stairs." },
      { s: 'jungwon', f: 'flustered', t: "That's worse, Solar-ssi. That's so much worse." },
      { cg: null },
      { n: "She kissed him to make him stop apologising. It worked on the first try, which she noted for later. He made a small sound into her mouth, surprised, and then not surprised at all, and his hand came up into her hair, which had come down in the night all over both of them, and the kiss went slow and warm and sleepy and then not sleepy, his weight turning toward her under the grey quilt, his shirt open at the throat where she'd left it, the creases of the gate in it and the warmth of her bed in it, and her hand going flat on his chest over his heart, which was not slow now, which was not slow at all." },
      { n: "He stopped at the third button. His own hand on hers this time, the way he had at four, and he looked at her from about three centimeters, flushed to the ears, very awake." },
      { s: 'jungwon', f: 'neutral', t: "*I'm awake now.*" },
      { s: 'solar', f: 'flustered', t: "*I can tell.*" },
      { n: "There was a knock on the door." },
      { n: "Two knocks, flat, the way Mrs. Bang knocked when she was leaving a tray. They both froze, his hand on hers on his shirt, her leg over his, the quilt everywhere. Then the clink of a tray going down on the hall floor outside, and Mrs. Bang's voice through the door, absolutely ordinary, the voice for weather." },
      { s: 'mrsbang', f: 'neutral', t: "Breakfast at seven. Eggs." },
      { s: 'mrsbang', f: 'neutral', t: "How does the young master take his?" },
      { s: 'jungwon', f: 'neutral', t: "Soft, please." },
      { n: "He said it before he could stop himself. In his best voice. The correct one, every ending on, the voice for people's mothers, from the middle of her bed with his shirt half open and his hair standing up at the back." },
      { n: "There was a silence on the other side of the door that went on for about a year." },
      { s: 'mrsbang', f: 'neutral', t: "Soft." },
      { n: "Her footsteps went away down the hall. Solar got her face into the pillow just in time. Beside her he lay flat on his back with both his hands over his face and said nothing whatsoever for a long time, his whole chest shaking, and she couldn't tell whether he was laughing or dying, and suspected he couldn't either." },
      { choose: [
        { t: "(Walk him out the front, past the study, like a guest.)", stat: { courage: 1 }, then: [
          { place: 'Incheon · The Lee House · Stairs', time: 'Morning', soft: true },
          { n: "She took him down the main stairs. In daylight. Dressed, tie on, coat folded over his arm, his shoes in his hand, which was the only thing that gave him away, and she let it. On the seventh stair he stepped over it without being told. The study door was open a hand's width, and through the gap her father was at his desk with his glasses on the end of his nose, writing in the margin of something, and he didn't look up as they passed." },
          { n: "Then, as they reached the hall, he spoke without looking up, in the voice nobody in the port had interrupted in thirty years." },
          { s: 'appa', f: 'neutral', t: "Tuesday. The board. Don't let me win." },
          { s: 'jungwon', f: 'flustered', t: "...Yes, Chairman." },
          { bond: { jungwon: 1 } }
        ] },
        { t: "(Take him down the back stairs and out through the garden.)", stat: { proficiency: 1 }, then: [
          { place: 'Incheon · The Lee House · Garden', time: 'Morning', soft: true },
          { n: "The back stairs. The kitchen, where Mrs. Bang was at the stove with her back very square to them, cracking eggs into a bowl one-handed with tremendous concentration, and did not turn round, and said *the soft ones take four minutes* to the eggs. The garden, grey with dust, every leaf of it furred yellow. The path round the side of the house to the gate." },
          { n: "And on the front step, in the black jacket, with a cigarette he'd quit and a cup of Mrs. Bang's coffee on the stone beside him, Haechan." }
        ] }
      ] },
      { place: 'Incheon · The Lee House · Gate', time: 'Morning', soft: true },
      { n: "He was there either way. On the step by the front door with the morning, as if he'd been put there with it: up from the annex for breakfast, his hair wet from the outdoor tap, the unlit cigarette in his fingers going round and round. He looked at Jungwon. At his shoes, in his hand. At his collar, where she had not done the button back up quite straight." },
      { s: 'jungwon', f: 'neutral', t: "Good morning, Donghyuck." },
      { s: 'haechan', f: 'neutral', t: "Yang." },
      { n: "A long pause. The dust coming down the street in the low sun. The cigarette going round." },
      { s: 'haechan', f: 'neutral', t: "Your collar." },
      { n: "Jungwon put his hand to his collar. He did the button. He did it correctly, without hurrying, looking Haechan in the eye the whole time, the way you'd straighten a piece on a board that someone had nudged." },
      { s: 'haechan', f: 'neutral', t: "She takes all the quilt. Round about five. Hold on to your end or you'll freeze." },
      { n: "He said it to the street. Flat, helpful, like the tide. And she watched it go into Jungwon like a nail, and watched Jungwon not let it show, except that his ears went red, and stayed red, and he bowed, to Haechan, slightly, the bow for a man who has said something true." },
      { s: 'jungwon', f: 'neutral', t: "Thank you. I'll remember." },
      { n: "Then he went down the steps to his car. Haechan put the cigarette behind his ear and picked up the coffee and held it out to her without looking, up over his shoulder, at the height of her hand, the way he'd held out gum to her on a step a hundred times, and she took it." },
      { s: 'haechan', f: 'neutral', t: "Eggs are soft today, I hear. Very soft. The whole house is having them soft." },
      { s: 'solar', f: 'flustered', t: "Donghyuck-ah." },
      { s: 'haechan', f: 'serious', t: "I'm fine, agasshi. Drink the coffee. It's got two sugars in. I know how you take it." },
      { n: "She drank it. It was exactly right. That was the cruellest thing he could have done, and the kindest, and he'd done it on purpose, and he sat on the step in the dust with his back to her and let her drink it." },
      { later: { delay: 0, slot: 'after', thread: 'jungwon', msgs: [
        { from: 'jungwon', t: "I'm home. 41 minutes. The light at Sinpo was red." },
        { from: 'jungwon', t: "Thank you for the eggs. Please thank Mrs. Bang. Please don't tell her I said soft twice in the car on the way home, out loud, by myself." }
      ] } }
    ] }
  ]);

  /* ── Week 4: Haechan, his route (Nov 11 2026 (Kat): spice): his sweatshirt ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-sweatshirt', title: 'his sweatshirt', hint: "There's a grey sweatshirt folded on the annex step. It wasn't there this morning. It's his.",
      after: '3/12', until: '3/14', slots: ['evening'], events: ['epi-s-tank'], noFlags: [], route: 'haechan', noRoute: null,
      place: 'Incheon · The Lee House · Annex', time: 'Evening', scene: [
      { music: 'epi-s-haechan' },
      { n: "There was a grey sweatshirt folded on the annex step, square, the sleeves tucked under, the way Mrs. Bang folded things, except that Mrs. Bang hadn't folded it. It was his. It had the hole in the left cuff where he put his thumb through. And it was folded on the step the way you'd leave a thing on a step for somebody who was going to come down a garden." },
      { n: "She picked it up. It was warm. He'd had it on a minute ago." },
      { n: "The steel door was open a hand's width. The heater going, the radio low, the weather; and him, on the edge of the iron bed in his undershirt with his elbows on his knees, looking at the floor between his boots as if he'd dropped something there in about 2006." },
      { s: 'haechan', f: 'neutral', t: "Put it on." },
      { s: 'solar', f: 'neutral', t: "I've got a coat." },
      { s: 'haechan', f: 'neutral', t: "I know you've got a coat, agasshi. You've had a lot of coats this week." },
      { ifFlag: 'epi-s-tank-coat-jw', then: [
        { n: "There it was. Flat, to the floor. She'd had Jungwon's coat over her knees all the way back from Guwol-dong in the dust, and he'd driven the whole way with it in his mirror, and said nothing, and come down here, and taken off his own sweatshirt and folded it, and waited." }
      ], else: [
        { n: "There it was. Flat, to the floor. She'd kept his jacket all the way back from Guwol-dong, and the other one had sat behind her in his good coat being very warm at the back of her neck, politely, for forty minutes, and he'd driven the whole way with that in his mirror." }
      ] },
      { s: 'haechan', f: 'serious', t: "He smells of nothing. You know that? I sat behind him at a dinner once and couldn't tell he was there. You come back from a car with him and you smell of nothing, and I can't stand it. I can't stand you smelling of nothing." },
      { n: "He said it to the floor. He'd aimed it. It wasn't jealousy, exactly, the way he said it; it was worse, it was honest, a man reporting a fault in the engine he couldn't fix and couldn't stop listening to." },
      { s: 'haechan', f: 'flustered', t: "That's a stupid thing to say. Forget I said it. Put the sweatshirt on." },
      { choose: [
        { t: "(Take your coat off. Put it on.)", stat: { kindness: 1 }, then: [
          { n: "She took her coat off and hung it on the hook over his jacket, and pulled the sweatshirt over her head, and it came down over her hands and to the middle of her thighs, warm all through, cinnamon and diesel and Mrs. Bang's soap and him, and she pushed her thumb through the hole in the left cuff, and stood in the middle of his little room in it, and let him look." },
          { n: "He looked. Something in his shoulders let go that had been held up since Guwol-dong." },
          { s: 'haechan', f: 'neutral', t: "...Better." },
          { bond: { haechan: 1 } }
        ] },
        { t: "You can't make me smell of you, Donghyuck-ah.", stat: { courage: 1 }, then: [
          { s: 'solar', f: 'serious', t: "You can't make me smell of you, Donghyuck-ah. It's not a fence. You can't put it round me." },
          { n: "He looked up then. Finally. His eyes red at the rims, from the dust or from something else." },
          { s: 'haechan', f: 'serious', t: "I know. I'm asking." },
          { n: "So she put it on. Over her head, down over her hands, warm all through, him, and pushed her thumb through the hole in the left cuff, and he watched her do it with a face she'd only ever seen on him once, at a crossroads, in the dark, when she'd come down the garden instead of going to the gate." }
        ] }
      ] },
      { cg: 'epi-s-sweatshirt' }, // FEMC-ART-TODO 58D
      { n: "She sat down beside him on the bed. Then in his lap, sideways, her legs over his, the sweatshirt rucking up, and he put his arms round her and his face into the side of her neck, into the collar of his own sweatshirt, and breathed in, long, the way you'd breathe in at a window you'd just opened in a stuffy room, and held it." },
      { s: 'haechan', f: 'neutral', t: "There you are." },
      { n: "Muffled. Into her neck. As if she'd been somewhere and he'd found her. And then he kissed her there, slowly, under her ear, where the sweatshirt's collar met her skin, and she felt it go down her whole spine like warm water poured from the top of her head." },
      { n: "It was slow. That was what she would keep of it, later. Not hungry, not the car or the bridge or the wall. Slow, his hands under the sweatshirt on her back, flat, warm, not moving, just there, as if he were checking the weather off her skin; and his mouth on hers when she turned her head, unhurried, deep, the kiss of a man who had decided that if the world was going to end it could wait until he'd finished this; and her hands in his wrecked hair, and the heater ticking, and the woman on the radio reading out the islands one by one, all still there." },
      { n: "He lay back on the iron bed and took her with him, and the springs said their long low complaint, and he laughed into her mouth at them, the way he always did, and the laugh went out of him the way it always did when something was real." },
      { cg: null },
      { n: "She reached past his head for the bolt. He caught her wrist. Turned it over. Kissed the inside of it, where the pulse was, and stayed there a long time, his mouth on it, his eyes shut, as if he were counting it himself and kept losing his place on purpose." },
      { s: 'haechan', f: 'serious', t: "Mine." },
      { n: "One word. Into her wrist. And then, as if he'd heard himself, before she could say anything, he lifted his head." },
      { s: 'haechan', f: 'flustered', t: "That's not— You're not a, I didn't mean like a car. I meant— I don't know what I meant. Forget it. It's the sweatshirt talking. It's a very possessive sweatshirt." },
      { choose: [
        { t: "Say it again.", stat: { courage: 1 }, then: [
          { s: 'solar', f: 'neutral', t: "Say it again." },
          { n: "He looked at her for a long time from the pillow. Then he said it again. Not into her wrist this time. To her face, in the lamplight, very low, with all the jokes gone out of him, the way he said the tide was out, as if it were simply the state of the water." },
          { s: 'haechan', f: 'serious', t: "Mine. For as long as you'll have it. Longer, if you let me." },
          { n: "She shot the bolt. It went home with the sound like a full stop." }
        ] },
        { t: "(Shoot the bolt instead of answering.)", stat: { charm: 1 }, then: [
          { n: "She didn't answer. She reached past his head and shot the bolt on the steel door, and it went home with a sound like a full stop, and that was the answer, and he heard it, and shut his eyes, and pulled her down." }
        ] }
      ] },
      { n: "What happened after that was nobody's business but the cranes'." },
      { place: 'Incheon · The Lee House · Annex', time: 'Late Night', soft: true },
      { n: "Later, she was still in the sweatshirt. Only the sweatshirt, rucked to her ribs under the crane quilt, his arm over her and his breath going slow into her hair, and the window over the bed fogged so thick that the house at the top of the garden was only a smear of light." },
      { n: "He was tracing the hole in the cuff with one finger. Round and round. Her thumb through it, his finger going round her thumb." },
      { s: 'haechan', f: 'neutral', t: "Keep it." },
      { s: 'solar', f: 'neutral', t: "It's your only grey one." },
      { s: 'haechan', f: 'neutral', t: "I know. That's why." },
      { n: "Up the garden, through the fog, the kitchen light went out, and then the landing, the small one her father turned off last, after the seventh stair. He listened to it go with his face in her hair. She felt him count it." },
      { s: 'haechan', f: 'neutral', t: "Mrs. Bang's going to see you in this tomorrow." },
      { s: 'solar', f: 'happy', t: "Mrs. Bang washed it. Mrs. Bang knows every hole in it." },
      { s: 'haechan', f: 'flustered', t: "...Oh, God. She does. She darned the other cuff." },
      { n: "He put his face in the pillow. She laughed, very quietly, with her thumb through his sleeve, and the heater ticked, and the radio went round the coast again and came back to the islands, and she fell asleep before Deokjeok, warm, in a sweatshirt that smelled of everything." }
    ] }
  ]);
  /* ── Texts (Nov 11 2026 (Kat): spice): the night before the annex / after the moon, by route ── */
  const T = (R.texts ||= {});
  const LEAVE = (then = []) => ({ t: '(Leave it on read.)', silent: true, then });
  (T.texts ||= []).push(
    { id: 'epi-s-tx-spice-hc-tuesday', thread: 'haechan', date: '2/25', slot: 'late', events: ['epi-s-moon'], route: 'haechan', msgs: [
      { from: 'haechan', t: "coast weather says tuesday clear" },
      { from: 'haechan', t: "light winds. good visibility. tide at 11:50" },
      { from: 'haechan', t: "thought you should know. for the islands" }
    ], reply: [
      { t: "i already knew the tide", then: [{ from: 'haechan', t: "i know you did" }, { from: 'haechan', t: "i wanted to say it to you anyway" }] },
      { t: "is tuesday a long way", then: [{ from: 'haechan', t: "21 hours" }, { from: 'haechan', t: "not that im counting. go to sleep agasshi" }] },
      LEAVE([{ from: 'haechan', t: "ok" }, { from: 'haechan', t: "still clear. still tuesday" }])
    ] },
    { id: 'epi-s-tx-spice-jw-scarf', thread: 'jungwon', date: '2/25', slot: 'evening', events: ['epi-s-moon'], route: 'jungwon', msgs: [
      { from: 'jungwon', t: "Good evening. I hope the day was quiet." },
      { from: 'jungwon', t: "My mother asked where my grey scarf was. I said I'd lent it to someone who was cold." },
      { from: 'jungwon', t: "She asked who. I said someone who keeps her shoulders up at fires." }
    ], reply: [
      { t: "do you want it back", then: [{ from: 'jungwon', t: "No." }, { from: 'jungwon', t: "I'd like to know where it is. That's different." }] },
      { t: "(Send a photo of the scarf folded on your pillow.)", silent: true, then: [{ from: 'jungwon', t: "..." }, { from: 'jungwon', t: "Thank you. I'll be at the board with your father tomorrow and I'll have to look at him. Please don't do that again before then." }] },
      LEAVE([{ from: 'jungwon', t: "Goodnight, Solar-ssi." }])
    ] },
    // The last ordinary nights (3/14), by route. Soft; nothing said about what's coming.
    { id: 'epi-s-tx-spice-hc-step', thread: 'haechan', date: '3/14', slot: 'evening', events: ['epi-s-dinner'], route: 'haechan', msgs: [
      { from: 'haechan', t: "step's cold tonight" },
      { from: 'haechan', t: "bring the sweatshirt. or dont. if youre in it you can come too" }
    ], reply: [
      { t: "coming", then: [{ from: 'haechan', t: "ok" }, { from: 'haechan', t: "warm half's yours" }] },
      { t: "you want it back", then: [{ from: 'haechan', t: "no" }, { from: 'haechan', t: "i want to see it on the step. thats different" }] },
      LEAVE([{ from: 'haechan', t: "radio says clear. islands all there. thought youd want to know" }])
    ] },
    { id: 'epi-s-tx-spice-jw-near', thread: 'jungwon', date: '3/14', slot: 'evening', events: ['epi-s-dinner'], route: 'jungwon', msgs: [
      { from: 'jungwon', t: "Good evening. I've been sitting at my window for an hour looking at your lit one across the water." },
      { from: 'jungwon', t: "I'm told that's what people do. I thought it was only something people said." }
    ], reply: [
      { t: "turn your light off so i can see you", then: [{ from: 'jungwon', t: "Done." }, { from: 'jungwon', t: "I can't see anything now. I hope you can. Please don't tell me if you can't." }] },
      { t: "come over", then: [{ from: 'jungwon', t: "It's not my night." }, { from: 'jungwon', t: "I'm putting my coat on anyway." }] },
      LEAVE([{ from: 'jungwon', t: "Goodnight. I'll stay at the window a little longer. It's acceptable." }])
    ] }
  );
})();
