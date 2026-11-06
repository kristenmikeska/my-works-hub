/* The strangers epilogue (2/17-3/16/2013, Incheon): ten Late Night hangouts (R.bonds, slots ['late'], time 'Late Night').
   The Nov 5-6 expansion pass, writer 2 of 3. Data only; loaded with the world (epilogue.js WORLDS.strangers.files). Bonds go
   through add() so they merge with people.js and people-crew.js in any load order. These play on the quiet nights (raw.lateOpen);
   a late hangout spends the night and then she sleeps, so every one ends with her going to bed or falling asleep.

   Hangouts (role 'friend'):
     haechan  epi-s-haechan-islands 'the islands'      2/18-2/25 late, after epi-s-step, every route (Annex)
              epi-s-haechan-oddnight 'his night'       3/1-3/6 late, after epi-s-even, every route (Annex)
              epi-s-haechan-stair 'the seventh stair'  3/10-3/12 late, route haechan, after epi-s-sunday (Her Room)
     jungwon  epi-s-jungwon-gatelamp 'the gate lamp'   3/1-3/6 late, after epi-s-even, every route (Gate)
              epi-s-jungwon-latch 'the latch'          3/10-3/12 late, route jungwon, after epi-s-sunday (Kitchen)
     yunjin   epi-s-yunjin-socks 'rabbit socks'        2/18-2/25 late, after epi-s-kitchen (Her Room)
     house    epi-s-house-lastbus 'the last bus'       3/3-3/12 late, after epi-s-twenty (Kitchen)
     niki     epi-s-niki-wall 'top of the wall'        3/3-3/12 late, after epi-s-even (Garden)
     eomma    epi-s-eomma-sunroom 'the sunroom at night' 2/21-2/25 late, after epi-s-eomma (Sunroom)
     appa     epi-s-appa-forecast 'the forecast'       3/10-3/12 late, route family, after epi-s-sunday (Study)
   Flags set (local): epi-s-islands (haechan-islands, she asked him to name them; read in haechan-oddnight).
   Flags read: epi-s-islands; epi-s-niki-name (people-crew niki-1) in niki-wall; epi-s-sari (people.js appa-1) in appa-forecast.
   Events read: epi-s-step, -kitchen, -eomma, -even, -twenty, -sunday (gates); ifEvent epi-s-clocks (house-lastbus, latch: the
     dish towel over the kitchen clock). ifEpiRoute for colour only in niki-wall.
   Glitch lines: { glitch: { near: true } } once, in haechan-islands. No glitch ids; no strain (no fever lie is told here).
   Bonds: one { bond } at most per hangout, inside the warmest option (appa-forecast: appa +1).
   Inventions for Kat to confirm (small, structural): the coast-weather reads the islands in the order Socheong, Baengnyeong,
     Deokjeok; Haechan has never been to any of them; Yunjin's rabbit-eared socks are a joke present from Eunchae; Solar leaves
     her desk lamp on for Yunjin; Auntie Song named Solar xiao yueliang on her first day on the crate, at nine, in the Haesong
     kitchen in Chinatown; the gate has twenty bars, one hidden behind the lamp post; Minseok sleeps (or doesn't) under the
     sports pages; Mrs. Bang's room is over the kitchen; Riki's slipped word on the wall is "hai"; Appa's clue is hagu (the
     estuary, "where the river gives up"); Eomma's blanket on the window seat is the grey wool one from the reading chair; a tenth window in the attic (Christmas
     lights, a box of Solar's baby shoes); Auntie Song's burst-arm armchair came from the restaurant; Kazuha's studio days are
     Thursdays (Saturdays if Chaewon says); Yunjin's NYU sweatshirt and the apartment on 104th; Mrs. Bang's porridge pot with the
     dented lid, the sesame oil behind the vinegar, the rug beater by her bed; the white orchid by the sunroom door is in bud in
     late February (people.js eomma-3 has it bloom in March). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const LATE = ['late'];

  /* ── Haechan ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-islands', title: 'the islands', hint: "The tide is going out, and the annex light is on at the bottom of the garden.",
      after: '2/18', until: '2/25', slots: LATE, events: ['epi-s-step'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Annex', time: 'Late Night', scene: [
      { music: 'epi-s-step' },
      { n: "At one in the morning the tide was going out, and she could feel it the way she'd always felt it, in the backs of her teeth and the soles of her feet, the whole bay drawing off the mud toward the islands like a sheet being pulled slowly off a bed, and she lay under the quilt and listened to it go until lying there was worse than getting up." },
      { n: "So she got up. Coat over the boat pajamas, boots in her hand, down the back stairs in her socks and past the kitchen, where Mrs. Bang had left the light on over the stove, past the koi bucket on the back step with its lid of ice and Mr. and Mrs. Kim turning underneath it, slow, orange and white, and out. The snow had gone old along the terraces, grey and sunk in the middle, and the sky over the garden was the same grey with nothing behind it, low enough that she felt she could have reached up and left a fingerprint in it. The cold here was the wet, patient kind. It got in at the cuffs and waited." },
      { n: "He was on the step. Of course he was. The black jacket zipped to his chin, his knees up, his hands pushed into his sleeves, and on the sill behind his head the old silver radio was on low, a man's voice reading the coast weather into the dark as if somebody had rung in and asked for it." },
      { s: 'radio', f: 'neutral', t: "...for the islands. Socheong, Baengnyeong, Deokjeok. Northwest, eight to eleven meters a second. Waves one and a half to two meters. Visibility moderate, poor in snow showers later." },
      { s: 'haechan', f: 'neutral', t: "It's one in the morning, agasshi." },
      { s: 'solar', f: 'neutral', t: "I know what time it is." },
      { s: 'haechan', f: 'happy', t: "I know you know. I'm telling the garden. So it knows who's out of bed." },
      { n: "He shifted over on the step without looking at her, off the hollow in the middle where he always sat and onto the cold half, and she sat down in the warm place he'd left, and he stretched one leg out in front of him and frowned at it, as if he'd only moved because his knee was stiff. She let him have the knee." },
      { n: "Cinnamon. He was chewing slowly, and she breathed it in without meaning to, the way you breathe in a kitchen you grew up in." },
      { s: 'solar', f: 'happy', t: "Still quitting?" },
      { s: 'haechan', f: 'neutral', t: "I'm a man of tremendous discipline. I've quit four times since Seollal. Nobody's quit more than me. Ask the gum." },
      { s: 'solar', f: 'neutral', t: "Why do you listen to that?" },
      { n: "She nodded at the radio. The man had moved down the coast and was reading out somewhere else's wind now, flat and kind, a voice for people who were already out on the water and couldn't do anything about it." },
      { s: 'haechan', f: 'neutral', t: "For the islands." },
      { n: "He said it as if it were obvious. As if anybody would." },
      { choose: [
        { t: "Which islands? Name them for me.", stat: { kindness: 1 }, flag: 'epi-s-islands', then: [
          { n: "He looked at her sideways, to see if she was making fun of him, and decided she wasn't, and sat up a little on the step and cleared his throat like a waiter at a restaurant much too good for either of them." },
          { s: 'haechan', f: 'happy', t: "Socheong. Starter. Very fresh this time of year. The sea's ugly, the wind's ugly, there's seaweed on everything. Three stars." },
          { s: 'haechan', f: 'happy', t: "Baengnyeong. Furthest out. The chef's special. Nobody orders it, everybody's heard of it. There's a rock that looks like an old general if you've had enough to drink." },
          { s: 'haechan', f: 'happy', t: "Deokjeok. Closest. The set lunch. Ferry twice a day if the sea's in a good mood, which it never is. Comes with soup." },
          { n: "She laughed into her hand, and he looked pleased with himself in the particular way he only allowed when he thought she wasn't watching his face." },
          { bond: { haechan: 1 } },
          { s: 'solar', f: 'happy', t: "Have you been to any of them?" },
          { s: 'haechan', f: 'neutral', t: "No." },
          { s: 'haechan', f: 'neutral', t: "That's not what they're for." }
        ] },
        { t: "You've never been to any of them, have you.", stat: { charm: 1 }, then: [
          { s: 'haechan', f: 'happy', t: "Never. Not once. That's how you know they're good." },
          { s: 'solar', f: 'happy', t: "That's not how anyone knows anything." },
          { s: 'haechan', f: 'neutral', t: "It's how I know the Chairman's cardigan is cashmere. Never touched it. Never will. Very soft." }
        ] },
        { t: "(Don't ask. Just listen.)", then: [
          { n: "She didn't ask. She pulled her coat round her knees and listened, the way he was listening, with her chin down in her collar and her eyes on the black shape of the wall, and the names came round again at the end of the bulletin, as they did, in the same order, and she found she'd been waiting for them." }
        ] }
      ] },
      { n: "The man on the radio started the islands again." },
      { s: 'radio', f: 'neutral', t: "Socheong. Baengnyeong." },
      { n: "And then nothing. Not static. Not the hiss the old set made between stations. A gap, clean, as if somebody had lifted the needle off a record and was holding it there, and she counted it without deciding to, the way she counted everything, one, two, three, four, and in the gap the garden went so quiet that she couldn't hear the sea under the wall, and the sea was always under the wall." },
      { n: "Haechan had stopped chewing." },
      { glitch: { near: true } },
      { n: "He didn't look at the radio. He didn't look at her. He looked at the place on the gravel where his boots were, and his split knuckles went pale where they came out of his sleeves, and he didn't say anything at all, which was the loudest thing he knew how to do." },
      { s: 'radio', f: 'neutral', t: "Deokjeok. Northwest, eight to eleven meters a second." },
      { n: "The sea came back. It had never gone anywhere, she told herself, and her body didn't believe it, and sat very still on the step with its heart going." },
      { n: "He moved first. He dug into his jacket and came out with the gum, the flat paper packet, and shook one stick halfway out and held it toward her without a word, the way you'd hold a light out to somebody in the wind. She took it. It was cinnamon and too sweet and she chewed it anyway, and so did he, and for a minute they were two people on a step chewing gum at the bottom of a garden, which was a thing that could be explained to anybody." },
      { s: 'haechan', f: 'neutral', t: "Agasshi." },
      { s: 'solar', f: 'neutral', t: "Mm." },
      { s: 'haechan', f: 'serious', t: "When you were gone, I—" },
      { n: "He stopped. He looked at the radio, as if it had said it, and not him, and his jaw worked once on the gum, hard." },
      { s: 'haechan', f: 'neutral', t: "Go up." },
      { s: 'solar', f: 'surprised', t: "You were saying something." },
      { s: 'haechan', f: 'happy', t: "I was saying go up. I say it all the time, it's my favourite thing to say. Go up, go to bed. The tide'll go out without you, it's done it before. It's very experienced." },
      { n: "That was the voice with the extra words in it, the one he used when there was something underneath he'd rather sit on. She looked at the scar through his eyebrow, his eyes on the gravel, and decided that whatever he'd started to say, he'd said it to the radio, and she'd let the radio keep it." },
      { n: "She went up the garden with the gum in her cheek and the cold in her socks. At the kitchen door she looked back, and he was sitting exactly as she'd left him, on the cold half of the step, with the warm half empty beside him." },
      { n: "In bed, with the quilt over her ears, she could still just hear it through the glass if she held her breath, the man on the radio going round the coast, coming back to the islands, and she fell asleep somewhere between Baengnyeong and Deokjeok, before the tide had finished going out, which hadn't happened in years." }
    ] },

    { id: 'epi-s-haechan-oddnight', title: 'his night', hint: "Mrs. Bang has left the green thermos full on the kitchen counter. It's his night on the step.",
      after: '3/1', until: '3/6', slots: LATE, events: ['epi-s-even'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Annex', time: 'Late Night', scene: [
      { music: 'epi-s-step' },
      { n: "The green thermos was standing on the kitchen counter by the stove at half past twelve, full, with the cup screwed on upside down and a cloth folded under it, and nobody had written a note this time, because nobody needed to. Mrs. Bang knew whose night it was. Everyone in the house knew whose night it was. Nobody said so, the way nobody said what the kitchen door was doing on the latch." },
      { n: "She took it down the garden in her coat with her hair down and her boots unlaced. The cold had something in it tonight, a taste at the back of the throat, and there wasn't a star anywhere, and the lamp over the annex door threw a small yellow room out onto the gravel with nothing outside it at all." },
      { n: "He saw her before she was off the second terrace, and stood up, which he never did." },
      { s: 'haechan', f: 'serious', t: "No." },
      { s: 'solar', f: 'neutral', t: "I haven't said anything." },
      { s: 'haechan', f: 'serious', t: "You're up. That's saying something. It's my night. Do you know what my night is for, agasshi? It's for you being asleep in it. That's the whole job. You asleep, me out here being heroic at nobody. You're ruining my job." },
      { s: 'solar', f: 'happy', t: "Mrs. Bang made tea." },
      { s: 'haechan', f: 'flustered', t: "Mrs. Bang made tea for *me*." },
      { s: 'solar', f: 'happy', t: "So you don't want it." },
      { n: "He looked at the thermos. He looked at her. He sat back down on the step, heavily, the way a man sits down who's lost an argument he'd been looking forward to, and moved over onto the cold half without being asked." },
      { s: 'haechan', f: 'neutral', t: "Ten minutes." },
      { n: "She sat. The step was granite, worn hollow, and still warm from him where she sat, and the radio on the sill was murmuring trot tonight, a woman singing about a harbor she wasn't going back to, the volume down so low it was more like a smell than a sound." },
      { ifFlag: 'epi-s-islands', then: [
        { n: "When the song ended and the coast-weather came on, he reached up behind him without turning round and turned it up one notch. Just one. The man read the islands, Socheong, Baengnyeong, Deokjeok, and Haechan turned it back down again after, and didn't look at her, and she didn't say anything about it, and it sat between them on the step like the thermos did." }
      ], else: [
        { n: "When the song ended the coast-weather came on, the islands and the wind and the waves in meters, and he listened to it with his head tipped back against the steel door, his eyes half shut, the way other people listened to music." }
      ] },
      { choose: [
        { t: "(Pour him the first cup.)", stat: { kindness: 1 }, then: [
          { n: "She unscrewed the cup and poured it full, the barley tea coming out dark and roasted and so hot it steamed in a sheet, and held it out to him, and he took it in both hands and held it under his chin and didn't drink, just breathed it." },
          { s: 'haechan', f: 'neutral', t: "...It's hot." },
          { s: 'solar', f: 'happy', t: "She'll be so pleased." },
          { s: 'haechan', f: 'neutral', t: "Don't tell her. She'll want me to say thank you. I don't do that. I've got a reputation." },
          { bond: { haechan: 1 } },
          { n: "He drank half of it and gave her the other half, the cup still warm where his hands had been, and that was a thank you, and she knew it, and so did he." }
        ] },
        { t: "(Drink from the cup first, slowly, while he watches.)", stat: { charm: 1 }, then: [
          { n: "She poured, and drank, slowly, all of it, with her eyes on him over the rim the whole time, and he watched her do it with the face of a man watching his own car being driven into the harbor." },
          { s: 'haechan', f: 'flustered', t: "That's theft. That's theft from a man on duty. In some countries they'd take your hand off." },
          { s: 'solar', f: 'happy', t: "It's the second cup that matters." },
          { s: 'haechan', f: 'neutral', t: "Who told you that." },
          { s: 'solar', f: 'happy', t: "Nobody. I just decided." }
        ] }
      ] },
      { n: "Ten minutes went by. Then another ten. Neither of them mentioned it." },
      { n: "They didn't talk much. He told her the cat from the fish market had followed him as far as the bus stop on Wednesday and then thought better of it, and that Minseok had been doing push-ups in the gatehouse at eleven and pretending he hadn't, and that the sea had been the colour of a dirty knife all afternoon, and she listened, and drank the tea when he passed it back, and every so often his eyes went up the garden to the dark line of her window, and then round the wall, and the gate, and the sky, the way a man checks his pockets, and came back down to the gravel." },
      { n: "She watched him do it. She didn't ask what he was watching for. He didn't say. There was a name for what the two of them were doing on that step, in the cold, with a thermos and a radio, and neither of them was going to be the one to use it." },
      { s: 'haechan', f: 'neutral', t: "You're doing the thing." },
      { s: 'solar', f: 'surprised', t: "What thing?" },
      { s: 'haechan', f: 'neutral', t: "Counting. Your lips go. You've counted the windows twice." },
      { s: 'solar', f: 'neutral', t: "Nine." },
      { s: 'haechan', f: 'happy', t: "Ten. There's one in the attic nobody uses. Mrs. Bang keeps the Christmas lights up there and a box of your baby shoes." },
      { s: 'solar', f: 'surprised', t: "How do you know that?" },
      { s: 'haechan', f: 'happy', t: "I know everything about this house, agasshi. I'm its dog." },
      { n: "He said it lightly, with the grin, the way he said everything he meant, and she looked at the side of his face in the yellow light from the lamp and didn't laugh, and he didn't look round to see if she had." },
      { n: "At two he took the thermos out of her hands and screwed the cup back on and stood it on the step by his boot." },
      { s: 'haechan', f: 'neutral', t: "Up. Now. I'm serious. I'll tell your father you were out here and he'll look at me for an hour." },
      { s: 'solar', f: 'happy', t: "He'd look at you, not me." },
      { s: 'haechan', f: 'neutral', t: "Exactly. Have some pity." },
      { n: "She went up. Halfway up the second terrace she looked back, and he'd stood up again to watch her go, all the way to the kitchen door, the way he never did, his hands in his jacket and the thermos at his feet." },
      { n: "She left her curtains open a hand's width. She could see the lamp from her pillow, a small yellow square at the bottom of the dark, and she lay and looked at it, and looked at it, and somewhere in the looking her eyes shut, and the last thing she knew was that the light was still on." }
    ] }
  ]);

  /* ── Jungwon ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-gatelamp', title: 'the gate lamp', hint: "There's a lamp on at the gate, and somebody standing under it who never leans on anything.",
      after: '3/1', until: '3/6', slots: LATE, events: ['epi-s-even'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Gate', time: 'Late Night', scene: [
      { music: 'epi-s-jungwon' },
      { n: "From the hall window at one she could see him, if she stood at the left edge of it with her cheek nearly on the glass, a dark shape under the gate lamp at the top of the drive, perfectly straight, perfectly still, standing the way he stood, which was never against anything. Not the gatepost. Not the wall. Just upright in the cold on his own two feet, as though leaning were a kind of debt and he didn't carry any." },
      { n: "She went down and made barley tea. Not the thermos. A cup, a proper one, the white one with the thin blue rim from the good cupboard, because she had a feeling about him and cups. She carried it up the drive in both hands in her coat and her boots, with the hair down her back, and the gravel was loud under her feet and there was nothing she could do about that." },
      { n: "He'd turned to watch her come before she was halfway. He bowed, from the waist, under the lamp." },
      { s: 'jungwon', f: 'neutral', t: "Solar-ssi. It's very late." },
      { s: 'solar', f: 'neutral', t: "It's your night." },
      { s: 'jungwon', f: 'neutral', t: "It is. That's usually the reason for you not to be in it." },
      { n: "She held out the cup. He looked at it, and then at her, and then he took it, with his right hand, the left one coming up flat beneath his right forearm the way you were taught as a child to receive something from your elders, a gesture so correct, so old-fashioned, at one in the morning at the top of her father's drive, that she nearly laughed and found she didn't want to." },
      { s: 'jungwon', f: 'neutral', t: "Thank you. You're very kind." },
      { n: "In the gatehouse, Minseok was asleep in his chair with the sports pages over his face. The sports pages rose and fell, rose and fell, with tremendous regularity, the breathing of a man who wanted it known that he was asleep and would be asleep for as long as it took." },
      { n: "She looked at the lamp. The light it threw had a soft edge to it tonight, a halo, the cold doing something to the air. She looked at the bars of the gate, black iron, the paint flaking at the hinges. One, two, three. The cars on the harbor road below, two, then none. The lit windows in the houses down the hill, four, and one went out while she was looking, three. The bars again. Nineteen." },
      { s: 'jungwon', f: 'neutral', t: "*You're counting.*" },
      { n: "In Mandarin, low, so it was only for her, and Minseok's paper went on rising and falling as if it hadn't heard a thing." },
      { s: 'solar', f: 'neutral', t: "*Nineteen bars.*" },
      { s: 'jungwon', f: 'neutral', t: "*Twenty. There's one behind the lamp post. I counted at a quarter to twelve.*" },
      { s: 'solar', f: 'surprised', t: "*You count?*" },
      { s: 'jungwon', f: 'neutral', t: "*Only when I'm standing somewhere for four hours. It's a long time to be standing somewhere and know nothing about it.*" },
      { n: "He drank. Small, careful sips, the cup held level, the steam going up past his face into the lamp. It was the plainest thing in the world, a man drinking barley tea at a gate, and she stood and watched him do it as if she'd never seen it done." },
      { s: 'jungwon', f: 'neutral', t: "*Did you make this yourself?*" },
      { s: 'solar', f: 'happy', t: "*Mrs. Bang would have made it better.*" },
      { s: 'jungwon', f: 'neutral', t: "*Mrs. Bang wouldn't have brought it up the drive.*" },
      { choose: [
        { t: "Come inside. It's warm in the kitchen. Just for ten minutes.", stat: { charm: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "No. Thank you." },
          { s: 'solar', f: 'neutral', t: "The door's on the latch. Nobody would know." },
          { s: 'jungwon', f: 'neutral', t: "I'd know. It wouldn't be correct." },
          { n: "He said it gently, the way you'd tell someone their coat was buttoned wrong, and the dimples didn't come, which meant he wasn't being polite. He meant it. The Chairman had said the gate. The gate was where he'd stand." },
          { s: 'jungwon', f: 'happy', t: "Besides. If I go inside, Minseok will have to wake up. He's worked very hard at being asleep." }
        ] },
        { t: "(Stand beside him under the lamp. Don't lean either.)", stat: { courage: 1 }, then: [
          { n: "She went and stood next to him, a hand's width away, facing the same way he was facing, down the drive toward the dark house, and she put her shoulders back and her feet together and didn't lean on anything. Not the post. Not him." },
          { n: "He looked at her sideways. His face went still, the whole of it, the way it went when he was actually pleased and didn't want anyone to have it." },
          { bond: { jungwon: 1 } },
          { s: 'jungwon', f: 'neutral', t: "*You'll get tired.*" },
          { s: 'solar', f: 'happy', t: "*So will you.*" },
          { s: 'jungwon', f: 'neutral', t: "*Yes. But I've had practice.*" }
        ] },
        { t: "Minseok's stool is right there. Sit down for a minute.", stat: { kindness: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "I'm all right standing, thank you." },
          { s: 'solar', f: 'neutral', t: "You've been standing since a quarter to twelve." },
          { s: 'jungwon', f: 'neutral', t: "And I'll stand until four. If I sit down, Solar-ssi, I'll have to get up again. Getting up is the part that's difficult." }
        ] }
      ] },
      { n: "They stood. The lamp hummed. Down the hill a dog barked twice and thought better of it. She didn't count the bars again. She was surprised to find she didn't need to." },
      { n: "He finished the tea and held the cup for a moment in his right hand, looking down into it, the way he looked at a board before he played, and then gave it back to her the same way he'd taken it, the left hand under the right arm, as if a cup were a thing that deserved both." },
      { s: 'jungwon', f: 'neutral', t: "*Go in now. Please.*" },
      { s: 'solar', f: 'neutral', t: "*You said please.*" },
      { s: 'jungwon', f: 'neutral', t: "*I always say please. You only notice when you'd rather not do what I'm asking.*" },
      { s: 'jungwon', f: 'neutral', t: "It's my night, Solar-ssi. Let me have it. You can have the next one." },
      { n: "She didn't ask him what that meant. She went down the drive with the empty cup, and she could feel him not watching her go, very carefully, all the way to the front steps, the way only a man who was watching could manage it." },
      { n: "Upstairs she stood at the left edge of the hall window with her cheek nearly on the glass. He was where she'd left him, straight, still, under the soft-edged lamp. In the gatehouse, the sports pages had stopped rising and falling. She went to bed. She left the cup on her desk, unwashed, and fell asleep looking at the thin blue rim of it in the dark." }
    ] }
  ]);

  /* ── Yunjin ── */
  add('yunjin', 'friend', [
    { id: 'epi-s-yunjin-socks', title: 'rabbit socks', hint: "Someone next door has got out of bed. You can hear socks on the landing.",
      after: '2/18', until: '2/25', slots: LATE, events: ['epi-s-kitchen'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The tide was going out, and she'd turned over eleven times, and on the twelfth the door opened without a knock, which in this house meant only one person." },
      { n: "Yunjin stood in the gap with her pillow under one arm and her phone in the other hand, the screen lighting her face from underneath like a ghost story, in flannel pajama trousers and an old NYU sweatshirt and a pair of fluffy white socks with pink rabbit ears sewn on at the toes, the ears flopping when she moved." },
      { s: 'yunjin', f: 'serious', t: "You're doing the tide thing." },
      { s: 'solar', f: 'surprised', t: "I'm lying here." },
      { s: 'yunjin', f: 'serious', t: "You're lying there *loudly*. I can hear you doing it through the wall. Turn, sigh, turn, the bed goes *eek*, turn. It's like living next to a washing machine with feelings. Move over." },
      { n: "She didn't wait for Solar to move over. She threw the pillow onto the bed, got in after it, and arranged herself with the brisk efficiency of a woman taking a seat on a plane she'd paid for, pulling the quilt up to her chin and then, after consideration, over her head, and then down again." },
      { s: 'solar', f: 'happy', t: "What are those." },
      { s: 'yunjin', f: 'happy', t: "These are my sleeping socks. Eunchae gave them to me as a joke. The joke is that I love them. Look, they move." },
      { n: "She held one foot up out of the quilt and wiggled it, and the rabbit ears flopped, and Solar put her face into the pillow so the house wouldn't hear her." },
      { n: "Her mother was asleep on the other side of the wall. Mrs. Park slept the way she did everything, without a sound, and the room next door was so quiet with Yunjin gone out of it that Solar could feel it, a held breath through the plaster." },
      { s: 'yunjin', f: 'neutral', t: "Okay. Story time. You're not allowed to talk. You're the audience." },
      { n: "And she talked. She talked about the drama, the man with amnesia, who'd got his memory back in tonight's episode by falling off a different horse, and whose first act with it was to forget the woman in the rain all over again on purpose, which Yunjin felt was a real low point for television. She talked about Chaewon, who'd laminated a plan for a birthday that was eight months away, and Sakura, who'd beaten the arcade machine in the Songdo mall so many times the manager had started hiding the coins, and Kazuha, who'd seen a ghost in the studio changing room and then found out it was her own coat, and Eunchae, who'd counted the number of times Yunjin said *literally* in one afternoon and texted her the total at midnight like a threat." },
      { s: 'yunjin', f: 'happy', t: "Forty-one. Forty-one *literally*s, Sol. That's not a vocabulary. That's a diagnosis." },
      { n: "She talked about New York. The radiator in the apartment on 104th that banged all night like a man trying to get out of it. The bodega cat that sat on the newspapers and wouldn't move for anyone but her. The way the subway smelled in August, which she described in detail, with feeling, until Solar begged her to stop." },
      { n: "She didn't talk about where Solar had been. Not once. Not a sideways word. She talked round it the way water goes round a stone, quick and bright and noisy, and Solar lay on her back in the dark and listened, and felt the tide going out under the house, and felt it matter a little less." },
      { choose: [
        { t: "(Give her the wall side. She always wanted the wall side.)", stat: { kindness: 1 }, then: [
          { n: "Solar climbed over her, quilt and all, and lay down on the outside, the cold side, and Yunjin rolled into the warm space against the wall without a word, the way she'd done at every sleepover since they were small, as if the wall had been hers the whole time and Solar had only been keeping it for her." },
          { bond: { yunjin: 1 } },
          { s: 'yunjin', f: 'neutral', t: "...You remembered." },
          { s: 'solar', f: 'happy', t: "You kicked me off the bed in eighth grade for taking it." },
          { s: 'yunjin', f: 'happy', t: "And I'd do it again. I've grown. But not that much." }
        ] },
        { t: "Your feet are freezing. Why are your feet freezing in socks.", stat: { charm: 1 }, then: [
          { s: 'yunjin', f: 'serious', t: "Because the rabbits are decorative, Sol. They're not *functional* rabbits. Nobody said they'd be warm." },
          { n: "She put both of them on Solar's shins anyway, deliberately, and held them there while Solar hissed, and looked enormously satisfied." }
        ] },
        { t: "(Reach over and turn the desk lamp on. Leave it on.)", then: [
          { n: "She reached across and turned on the little lamp on her desk, and pushed it round so it faced the wall and only made a low gold puddle on the floor, and left it on. Yunjin had slept with a light on every night since December. Nobody in the house mentioned it. Solar didn't either." },
          { n: "Yunjin looked at the lamp for a second. Then she went straight on with the story about the bodega cat, a little louder than before, which was how she said thank you." }
        ] }
      ] },
      { n: "It was after two when the talking slowed. Yunjin's voice had gone down into the gravel it went to at night, the low one she had now, and her sentences started ending earlier than she meant them to, and Solar turned on her side and looked at the shape of her friend in the dark, the cloud of hair on the pillow, the rabbit ears sticking up out of the end of the quilt." },
      { s: 'solar', f: 'neutral', t: "Jin." },
      { s: 'yunjin', f: 'neutral', t: "Mm." },
      { s: 'solar', f: 'sad', t: "When I was— there was a—" },
      { n: "It was right there. It was sitting on her tongue the way the Mandarin sat there, ready, and her chest had gone tight around it, and her hand had found the edge of the quilt and was holding it. She didn't know which true thing it was going to be until it was halfway out. She didn't know if it was going to be the small one or the one that had no bottom." },
      { n: "Yunjin's hand came across the pillow in the dark and found her face and pressed, once, flat, warm, over her mouth. Not hard. The way you'd put a hand over a cup so it wouldn't spill." },
      { s: 'yunjin', f: 'neutral', t: "Tomorrow. Or don't. Don't is also fine for tomorrow." },
      { s: 'yunjin', f: 'neutral', t: "Go to sleep, wifey. You're doing the tide thing again. I can hear it from here." },
      { n: "She took her hand back. She didn't take it far. It stayed on the pillow between them, and Solar put hers next to it, not holding, just next to, and listened to Yunjin's breathing go long and slow and finally, unbelievably, into a small snore, and somewhere under the house the tide reached the bottom of itself and turned, and she didn't feel it turn, because she was asleep." }
    ] }
  ]);

  /* ── The house ── */
  add('house', 'friend', [
    { id: 'epi-s-house-lastbus', title: 'the last bus', hint: "There's a light on in the kitchen, and somebody in the armchair by the stove has missed the last bus.",
      after: '3/3', until: '3/12', slots: LATE, events: ['epi-s-twenty'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Late Night', scene: [
      { music: 'epi-s-house' },
      { n: "There was a light on in the kitchen at midnight, not the one over the stove that Mrs. Bang left for whoever had the night but the low lamp on the shelf by the rice cooker, and when she came down for water in her socks it was the first thing she saw from the bottom of the back stairs, and the second was a pair of rubber boots standing side by side on the fender, upside down, drying." },
      { n: "Auntie Song was in her armchair by the stove. The old one with the burst arm that had come from the restaurant in a truck one winter and never gone back, pulled up close to the warmth, with a blanket over her knees and her feet in Mrs. Bang's spare slippers, which were too big for her, and her eyes shut. She'd missed the last bus. She'd missed it on purpose, probably. She missed it about once a week." },
      { n: "On the bench under the window, under his own coat, Pyo was asleep with his mouth open and one arm hanging down to the floor, his knuckles resting on the tiles. Since his party he'd been trying very hard to act like a man who stayed up late. He was not that man yet." },
      { ifEvent: 'epi-s-clocks', then: [
        { n: "Over the kitchen clock, the dish towel. Blue check. Nobody had taken it down. The clock ticked under it like something in a cage with a cloth over it, and she didn't look at it, and the kitchen didn't either." }
      ] },
      { s: 'auntie', f: 'neutral', t: "*Little moon. You walk like your father. Heel first. Sit down.*" },
      { n: "She hadn't opened her eyes. Solar sat down on the low stool by the fender, the one she'd sat on at nine, and at eleven, and every year after it had got too small for her for years and she'd sat on it anyway." },
      { s: 'auntie', f: 'neutral', t: "*Under the table. Behind the vinegar. You know where.*" },
      { n: "She knew where. Under the prep table, behind the black vinegar, the green bottle of soju that was there for cooking, officially, and had been replaced every month for nineteen years, which said something about how much cooking went on in this kitchen after midnight. She got two of the little glasses from the shelf." },
      { choose: [
        { t: "*(Pour for her with both hands, the way she taught you.)*", stat: { kindness: 1 }, then: [
          { n: "She poured for the old woman first, the bottle held in her right hand with her left fingers resting under the wrist, properly, the way Auntie Song had shown her with a teapot when she was too small to lift the teapot, and Auntie Song opened one eye, watched her do it, and closed it again." },
          { s: 'auntie', f: 'happy', t: "*Good. Your mother taught you to pour for a minister. I taught you to pour for a cook. Mine's harder.*" },
          { bond: { house: 1 } }
        ] },
        { t: "*Should you be drinking? It's midnight.*", stat: { charm: 1 }, then: [
          { s: 'auntie', f: 'serious', t: "*It's for my bones. A doctor told me.*" },
          { s: 'solar', f: 'happy', t: "*Which doctor?*" },
          { s: 'auntie', f: 'neutral', t: "*Me. I'm a very good doctor. I've been treating myself since nineteen seventy-eight and look. Still here. Pour.*" }
        ] }
      ] },
      { n: "They drank. It was sharp and cheap and went straight down into her chest and lit something there, and Auntie Song held her glass on the blanket on her knee in both hands like a little bird she'd caught, and looked at the stove." },
      { s: 'auntie', f: 'neutral', t: "*You were nine. I've told you this.*" },
      { s: 'solar', f: 'neutral', t: "*Tell me again.*" },
      { s: 'auntie', f: 'neutral', t: "*Thursday. Your mother had her cards. They sent you to the restaurant with Mr. Oh and a book to read in the corner, and you put the book on the rice sacks and you stood by my crate and you didn't say anything for an hour. Just watched my hands. An hour. Like a cat at a window.*" },
      { s: 'auntie', f: 'happy', t: "*So I gave you the other crate and a flounder and a knife. My knife. Too big. Your hand went round the handle and there was handle left over, this much.*" },
      { n: "She held up her finger and thumb, a gap, the width of a child's hand." },
      { s: 'auntie', f: 'neutral', t: "*Everybody else's first time, they shout. The fish moves, they shout, they drop it. Pyo dropped his on my boots.*" },
      { n: "On the bench, Pyo, who only knew his own name in Mandarin, said something in his sleep in Korean, distressed, about a staircase, and turned over under his coat, and was quiet." },
      { s: 'auntie', f: 'neutral', t: "*You didn't shout. You held it still and you looked at it and you asked me what time the tide was. At nine years old. With a knife. What time is the tide, Auntie.*" },
      { s: 'auntie', f: 'happy', t: "*And then you did it. Not well. Slowly. But you did the whole thing, all the way, and you never once let go of the knife, and when it was finished you put it down very straight on the board, the way I do, and you went behind the rice sacks and you cried where you thought I couldn't see.*" },
      { s: 'auntie', f: 'neutral', t: "*You cut yourself at eleven. Not at nine. At nine you were careful. At eleven you were good, and good is when you cut yourself.*" },
      { n: "Solar looked at her left palm. The thin white line across it in the lamplight. She'd had it so long she forgot it until somebody looked." },
      { s: 'solar', f: 'neutral', t: "*Why little moon?*" },
      { n: "She'd never asked. In all the years, she'd never once asked. It came out tonight because of the soju in her chest, maybe, and the warm kitchen, and nobody else awake to hear." },
      { n: "Auntie Song turned her glass round once on the blanket." },
      { s: 'auntie', f: 'neutral', t: "*Because you were very pale, and very small, and very quiet, and you came out at night when everyone else was busy.*" },
      { s: 'auntie', f: 'happy', t: "*And because the moon is a little thing, and the whole sea goes where she says. You asked me about the tide with a knife in your hand. I thought, there she is. Little moon.*" },
      { n: "Solar didn't say anything. She couldn't, for a second. Her throat had done something without asking her, and she looked at the stove until it stopped, and Auntie Song, who had been listening at doors for nineteen years and knew exactly when to stop listening at one, looked at the stove too." },
      { s: 'auntie', f: 'serious', t: "*Now go to bed. You've got your father's heels and my bad hours. Don't keep both.*" },
      { s: 'solar', f: 'neutral', t: "*What about Pyo?*" },
      { s: 'auntie', f: 'neutral', t: "*Pyo stays where he is. If he goes up those stairs in the dark, the ghost will get him. That's what he thinks. Let him think it. He sleeps better down here with me.*" },
      { n: "She went up the back stairs with the warmth still in her chest and her feet cold on the treads. At the turn she looked down. The lamp by the rice cooker. The boots upside down on the fender. Auntie Song with her eyes shut and the little glass still in her hands, humming something under her breath, off-key, the first four notes of it, over and over, and Pyo's arm hanging down to the tiles." },
      { n: "She got into bed and pulled the quilt up and lay there with her hand open on top of it, palm up, the scar to the ceiling, and fell asleep like that, before she'd decided to." }
    ] }
  ]);

  /* ── Riki ── */
  add('niki', 'friend', [
    { id: 'epi-s-niki-wall', title: 'top of the wall', hint: "There's somebody sitting on top of the garden wall at one in the morning, eating a banana.",
      after: '3/3', until: '3/12', slots: LATE, events: ['epi-s-even'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Garden', time: 'Late Night', scene: [
      { music: 'epi-s-late' },
      { n: "She'd come down for the thermos, which she'd left on the step the night before, and which Mrs. Bang would notice was missing at six and say nothing about in a way that went on all morning, and she was halfway down the second terrace in her coat and her socks when she saw that the top of the garden wall had somebody on it." },
      { n: "He was sitting on the coping at the far end, where the wall ran down past the annex to the lane, with one long leg hanging over on the lane side and the other drawn up on the stone, in a thin silver puffer that caught what light there was, with a pair of big headphones round his neck that weren't plugged into anything, peeling a banana with tremendous care. There was no sky to speak of. There was the lamp over the annex door, and the dark, and Riki on top of the wall in between, like a cat that had been told not to and had thought about it and decided the wall was a better idea." },
      { s: 'niki', f: 'happy', t: "Noona." },
      { s: 'solar', f: 'surprised', t: "Riki. It's one in the morning." },
      { s: 'niki', f: 'neutral', t: "Yeah. It's quiet. I like it when it's quiet." },
      { s: 'solar', f: 'neutral', t: "Who sent you?" },
      { s: 'niki', f: 'neutral', t: "Nobody sent me." },
      { n: "He said it simply, with his mouth full, the way he'd have said it was cold. No message. No jar in a cloth bag, no folded note, no reason she could see at all except that he was here, on her father's wall, eating a banana at one in the morning in somebody else's garden." },
      { n: "Below him, on the step, Haechan was sitting with his forearms on his knees, and he hadn't moved, and he hadn't said a word, and he wasn't looking at the wall. He was looking at the gravel a meter in front of his boots with the expression of a man reading something written there very small." },
      { choose: [
        { t: "You're allowed to just come in, you know. The gate's right there.", stat: { kindness: 1 }, then: [
          { s: 'niki', f: 'neutral', t: "Gates are for people with a reason." },
          { s: 'solar', f: 'happy', t: "And walls?" },
          { s: 'niki', f: 'happy', t: "Walls are for everyone." },
          { n: "He looked very pleased with that, and took another bite, and she found she was smiling up at him in the dark, and that he'd seen it, and that it had done something to his shoulders, brought them down a little from round his ears, as if he'd been holding them there since he climbed up." },
          { bond: { niki: 1 } }
        ] },
        { t: "Kazuha still thinks you're a ghost, if that helps.", stat: { charm: 1 }, then: [
          { s: 'niki', f: 'flustered', t: "It does. It does help. Ghosts sit on walls. It's on brand." },
          { s: 'solar', f: 'happy', t: "Ghosts don't eat bananas." },
          { s: 'niki', f: 'serious', t: "You don't know that. Nobody's ever asked one." }
        ] }
      ] },
      { n: "He finished the banana. He folded the peel the way he always did, in half and in half again into a small neat square, pressing the corners flat on his knee, and put it in his pocket, and then he sat with his hands between his knees and looked at the house, and the lit kitchen, and the dark windows above it." },
      { ifFlag: 'epi-s-niki-name', then: [
        { s: 'niki', f: 'neutral', t: "Kazuha. Is she. Does she still. Go to the studio. In Songdo." },
        { n: "He said the name very carefully, the Japanese way, all the vowels the right length, the way you'd carry something full across a room." }
      ], else: [
        { s: 'niki', f: 'neutral', t: "The Japanese girls. The tall one. Does she still. Go to the studio. In Songdo." }
      ] },
      { s: 'solar', f: 'neutral', t: "On Thursdays. And sometimes Saturdays, if Chaewon makes them." },
      { s: 'niki', f: 'neutral', t: "Thursdays." },
      { n: "He nodded slowly, as if Thursdays were a fact about the universe he'd suspected for some time and was glad to have confirmed. She didn't tell him she'd tell nobody. He hadn't asked her not to. It was very clear from the back of his neck that he'd climbed a wall at one in the morning partly to ask one question, and that he'd now asked it, and that he would have to sit up here until it stopped feeling like he had." },
      { s: 'haechan', f: 'serious', t: "Get down." },
      { n: "Not loud. Haechan didn't look up when he said it. It was the first thing he'd said since she came down, and it came out flat and low and not at all like him, not like the voice he used on the old men at the harbor or the aunties or the koi, and Riki on the wall went still the way a boy goes still when a teacher he likes says his name." },
      { s: 'niki', f: 'surprised', t: "Hai—" },
      { n: "It was out before he could catch it. Japanese, sharp and quick, the word you say to a coach, to a man on a platform, to anybody who tells you to do a thing, the way a hand comes up to catch something before you've seen what was thrown. He shut his mouth on it so fast she heard his teeth." },
      { n: "Nobody said anything. Riki looked at his own knees. Haechan looked at the gravel. Solar stood on the second terrace between them with her hands in her coat pockets and the cold coming up through her socks and didn't say a word, because there wasn't a word in any of the three languages she knew that would have made it smaller, and she didn't want it smaller. She wanted, for a second, very badly, for one of them to say where they'd learned to answer like that. Neither of them would. Neither did she." },
      { s: 'niki', f: 'neutral', t: "...Yeah. Okay. I'm getting down." },
      { s: 'haechan', f: 'neutral', t: "The lane side. Not the garden. And go home. Straight home. Don't run on the hill, it's dark." },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'niki', f: 'happy', t: "I'll tell hyung you said hi." },
        { s: 'haechan', f: 'neutral', t: "I didn't say hi. I'd never say hi to that house. Tell him I said get down." }
      ], else: [
        { s: 'niki', f: 'happy', t: "You sound like my mom." },
        { s: 'haechan', f: 'neutral', t: "Then your mom's very smart. Go home." }
      ] },
      { n: "Riki swung his leg over and dropped, and there was a soft heavy sound in the lane below the wall, the sound of a long-limbed boy landing on frozen ground, and then his footsteps, walking, not running, which was its own kind of obedience, going away down the hill." },
      { n: "Haechan didn't watch him go. He sat on the step and looked at the wall where Riki had been, the empty coping, and his jaw worked on nothing, there was no gum, and his knuckles were pale where his hands were clasped. He didn't look at her. He couldn't look at Riki for long, she'd noticed, from the first day; he looked at him the way you look at a photograph of yourself you don't remember anyone taking." },
      { s: 'haechan', f: 'neutral', t: "Bed, agasshi. Take your thermos. Mrs. Bang counts them." },
      { s: 'solar', f: 'neutral', t: "Are you all right?" },
      { s: 'haechan', f: 'happy', t: "I'm always all right. It's my best quality. Go." },
      { n: "She took the thermos up. She lay in bed with the quilt to her chin and listened, the way she'd learned to listen this winter, past the house and the wind and the tide, for footsteps on the hill, and heard none, and the last thing she heard before she slept was the radio on the annex sill, very faint, turned up a little louder than usual, as if somebody down there didn't want it quiet any more." }
    ] }
  ]);

  /* ── Eomma ── */
  add('eomma', 'friend', [
    { id: 'epi-s-eomma-sunroom', title: 'the sunroom at night', hint: "The house is dark, the tide is out, and you need a glass of water.",
      after: '2/21', until: '2/25', slots: LATE, events: ['epi-s-eomma'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Sunroom', time: 'Late Night', scene: [
      { music: 'epi-s-family' },
      { n: "Low water at a quarter to three, and she was awake for it the way she was always awake for it, lying on her back with her eyes open and her whole body tilted very slightly toward the sea as if the bed were on a slope, and her mouth so dry that in the end it was thirst, and not the tide, that got her up." },
      { n: "She went down the main stairs in her socks, on the edges of the treads, over the seventh, and through the dark hall toward the kitchen, and on the way past the sunroom door she stopped, because it was open, and it was never open at night, and there was somebody inside." },
      { n: "Her mother was sitting on the window seat in the dark." },
      { n: "No lamp. The only light was what came off the garden through the glass, grey, from nowhere in particular, and in it the orchids stood along the shelves in their white pots like a row of people who'd been told to wait quietly and were doing it very well. The room was cold. The glass gave the cold back into it. And her mother sat at the end of the window seat in a cream cardigan over her nightdress with her feet drawn up under her, holding a cup in both hands in her lap, not drinking from it, and her hair was down." },
      { n: "Down. All of it. Solar had never seen it down. Not once in her life, not on holidays or on the night of a storm or at four in the morning when the phone rang; her mother came out of her room with her hair already up, already pinned, as though she slept in it. And here it was, long and dark and heavier than Solar had ever imagined, lying over the cream wool of the cardigan almost to her waist, with a little grey in it at the temple that the pins must have hidden for years, and her mother sitting in it like a woman sitting in the rain." },
      { n: "She didn't look round. She'd heard Solar on the stairs; of course she had. Nobody in this house had ever got down those stairs without her mother hearing." },
      { n: "She moved her feet. That was all. She drew them in a little further under her, on the cushion, and the empty half of the window seat was suddenly there, beside her, in the grey light from the garden, and she went on looking out at the dark and didn't say anything at all." },
      { choose: [
        { t: "(Sit in the space she's made, close enough to touch.)", stat: { kindness: 1 }, then: [
          { n: "She sat. Close. Close enough that her shoulder was nearly against her mother's, nearly, a finger's width of cold air between the cream wool and her own sleeve, and neither of them closed it, and neither of them moved away from it either. She could smell her. Not the perfume. Under the perfume, at this hour, something plainer, soap, and warm wool, and the bitter green smell of the orchid leaves on her fingers." },
          { n: "After a minute, her mother's head tipped. Not much. Just enough that a long piece of her hair slid off her shoulder and lay against Solar's arm, and stayed there, and her mother let it." },
          { bond: { eomma: 1 } }
        ] },
        { t: "(Sit at the far end, the way you would at a dinner.)", then: [
          { n: "She sat at the far end of the window seat, with the whole length of the cushion between them, her back straight, the way you sat across from her mother at a dinner, because that was the distance her body knew. Her mother didn't look at her. But after a moment she put her cup down on the sill between them, exactly halfway, as if she'd measured it, and left it there." }
        ] }
      ] },
      { n: "There was a blanket folded over the arm of the reading chair, the grey wool one. Her mother reached for it without getting up, a long arm in a cream sleeve, and shook it out one-handed with a single snap, and laid it over Solar's knees. Tucked it. The edge under Solar's thigh, firmly, on the near side, and then the far side, the way you'd tuck a child into a bed she was going to try to get out of." },
      { s: 'eomma', f: 'neutral', t: "Drink something warm." },
      { n: "It was the only thing she said. She said it to the glass, quietly, in the voice she used for orchids and for Mrs. Bang and for nobody else, and she didn't say anything after it, and she didn't need to. Then she held out her cup, the one she hadn't drunk from, and Solar took it." },
      { n: "It was barley tea. It had gone cold. It had gone cold a long time ago, by the feel of it, sitting in her mother's hands, and Solar held it in both of hers the way her mother had, in her lap, and didn't drink it either, and they sat there on the window seat with their two cold cups' worth of nothing, looking out at the garden." },
      { n: "There wasn't much to see. The terraces going down in the dark. The bare persimmon tree. The black shape of the annex at the bottom with its one small lit window, and beyond the wall, where the sea should have been, the flat dull shine of the mud, because the tide was all the way out now, the bay emptied to the horizon, and it was the first time she could remember being awake at the bottom of it and not minding." },
      { n: "She didn't ask why her mother was here. Her mother didn't ask why she was. Nobody asked anything. The orchids waited along the shelves. One of them, the white one by the door, had buds coming along its stem, tight and green, that hadn't been there the last time she looked." },
      { n: "She meant to go back up. She meant to. She sat with the blanket over her knees and the cold cup in her hands and her mother's long dark hair against her arm, and she was going to go up in a minute, and the minute went on, and the warmth came up through the grey wool from somewhere, and her eyes closed, and she let them, the way you let a door swing shut behind you in a house where you know exactly who's home." },
      { n: "She woke in her own bed. It was light. The quilt was tucked in on both sides, firmly, under the mattress, the way she never did it, and the cup was on her bedside table, washed, upside down on a folded cloth." },
      { n: "She lay there and looked at it, and didn't know who had brought her up the stairs, or how, or whether she'd walked and simply didn't remember, and she found that she didn't want to know, and she didn't get up to find out." }
    ] }
  ]);

  /* ── Haechan, route ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-stair', title: 'the seventh stair', hint: "Somebody is coming up the stairs in the dark, and he knows to skip the seventh one.",
      after: '3/10', until: '3/12', slots: LATE, events: ['epi-s-sunday'], noFlags: [], route: 'haechan', noRoute: null,
      place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-s-haechan' },
      { n: "She heard him on the stairs at a quarter past one. Not the creak. That was how she knew it was him." },
      { n: "She'd counted those treads by sound her whole life, the tick of the loose brass rod on the third, and then the seventh, which complained for everyone, every time. Tonight somebody came up one, two, the tick, four, five, six, and then a held breath of nothing, and then eight. Somebody who knew exactly where it was had taken the long step over it in the dark." },
      { n: "Her door opened a hand's width, the wind rattling the window frame behind her, and he came round it sideways in his socks with his boots in one hand and shut it with the care of a man shutting a door on a sleeping baby, and stood with his back against it." },
      { s: 'haechan', f: 'happy', t: "Don't scream." },
      { s: 'solar', f: 'neutral', t: "I wasn't going to scream." },
      { s: 'haechan', f: 'happy', t: "Mrs. Bang's got a rug beater by her bed. I've seen it. If you scream, she comes up those stairs with it, and she doesn't skip the seventh, agasshi. She doesn't skip anything. She goes straight through." },
      { n: "He put the boots down by her door, toes to the wall, next to her slippers, as if they lived there, and stood against the door in the dark with cinnamon and cold coming off him and his chest going faster than the stairs could account for." },
      { choose: [
        { t: "You skipped the seventh stair.", stat: { charm: 1 }, then: [
          { s: 'haechan', f: 'happy', t: "I'm a professional." },
          { s: 'solar', f: 'happy', t: "You've practised." },
          { s: 'haechan', f: 'flustered', t: "...I've practised on the bottom ones. In the daytime. When nobody was home. It's a big step, your seventh stair, I nearly went down the whole flight on Tuesday. Don't laugh." },
          { n: "She laughed into the quilt, silently, with her whole body." }
        ] },
        { t: "(Hold the quilt open.)", stat: { courage: 1 }, then: [
          { n: "She didn't say anything. She lifted the edge of the quilt, and held it, and looked at him over it." },
          { n: "He stopped grinning. It went off his face all at once, the way a light goes off, and he looked at the open quilt and then at her, and swallowed, and she watched him swallow." }
        ] },
        { t: "Donghyuck-ah.", stat: { kindness: 1 }, then: [
          { n: "Quietly. Only that. Only the name, the one she almost never used, the one that wasn't for kitchens or cars or her father's hearing." },
          { n: "He went completely still against the door. She saw it go through him, the whole length of him, the way cold goes through you when you step off a boat, and he shut his eyes for a second as if it had been very bright." },
          { bond: { haechan: 1 } },
          { s: 'haechan', f: 'flustered', t: "That's not fair. You can't just say that. I've got no defences up here. I left them on the stairs." }
        ] }
      ] },
      { n: "He crossed her room on the boards that didn't creak, because of course he knew those too, and got in beside her, jacket and all, freezing, wet with the garden, and when she said so into his collar he said he'd come up all those stairs to be warmed, it was the whole plan, and then his mouth was on hers." },
      { n: "He kissed her the way he did everything he meant, which was all at once and then slower than she expected, his cold hand at her jaw and then in her hair, which was down, all of it, on her pillow, and he made a small sound when his fingers found that, a sound like a man who's been told he's allowed something. She got the jacket off him, which took both of them and an elbow in the headboard that he swore at in a whisper, and he was warm underneath it, his neck warm, the pulse in it going hard under her mouth, his breath going ragged and stupid against her ear." },
      { s: 'haechan', f: 'flustered', t: "Agasshi." },
      { s: 'solar', f: 'neutral', t: "Shh." },
      { s: 'haechan', f: 'flustered', t: "I'm being quiet. I'm being so quiet. I'm the quietest I've ever been in my life. This is—" },
      { n: "She kissed him again to stop him finishing, and the quilt slid, and his hand went flat on the small of her back under her pajama top, spread wide, holding her to him as if she might be blown somewhere, and for a long breath the only thing in the whole house was that hand, and the dark." },
      { n: "She didn't count anything. It was the first time in her life she noticed afterwards that she hadn't." },
      { n: "It was half past four when the study door opened downstairs." },
      { n: "She heard it through his shoulder, tangled in the warm wreck of the quilt, nearly asleep, and felt him hear it too, because every muscle in his body went still at once." },
      { n: "Slippers in the hall, a soft drag on the left one where the sole had worn, and the humming, four flat bars of an old trot song. Her father, up for the paper the way he was up every morning of her life at half past four, and instead of going to the kitchen he'd turned toward the stairs." },
      { n: "First stair. Second. The tick of the loose rod on the third. Four. Five. Six." },
      { n: "The seventh stair creaked, long and low, like an old man getting up out of a chair." },
      { n: "And stopped." },
      { n: "Nobody breathed. She had Haechan's shirt in her fist and his hand was over the back of her head, pressing her face into his chest, his heart under her cheek going so hard it seemed impossible that a man on the seventh stair couldn't hear it. The humming had stopped. Her father was standing where he always stood, looking up at the dark line under her door, deciding whether to come the rest of the way." },
      { n: "He never came the rest of the way." },
      { n: "The stair creaked again. The slippers went down, the tick of the third, the hall, the kitchen door, and then, faint, a newspaper opening, and the humming starting again exactly where it had left off." },
      { n: "Haechan breathed out. All of it, a long shaking breath into her hair that seemed to have no bottom." },
      { s: 'haechan', f: 'flustered', t: "Agasshi." },
      { s: 'solar', f: 'neutral', t: "Don't." },
      { s: 'haechan', f: 'flustered', t: "Agasshi, I want it on record. If he'd come up. I was going to be a coat." },
      { s: 'solar', f: 'surprised', t: "A what?" },
      { s: 'haechan', f: 'serious', t: "A coat. On the back of your door. I was going to stand very flat and very still and be a coat. A black one. He'd have thought, my daughter has a new coat, it's quite tall, good for her, and gone back down to his paper." },
      { n: "She had to put her face into the pillow, shaking with it, helpless, while he lay with his eyes on the ceiling and his heart still going like a trapped bird, completely serious, whispering the rest of the plan, which involved the coat having a hat." },
      { n: "He went at five, when the radio came on in the study and the study door shut, boots in his hand. At her door he looked back at her hair all over the pillow, and something came up into his face and got as far as his teeth and stopped there. He didn't say it. He never said that one." },
      { s: 'haechan', f: 'neutral', t: "Go to sleep, agasshi." },
      { n: "She listened to him go down. One, two, the tick of the third. Four, five, six. Nothing. Eight. Then the back of the house, and the kitchen door on its latch, and gone." },
      { n: "She slept with her face in the side of the pillow that smelled of cinnamon, until Mrs. Bang knocked at nine and asked through the door, very pointedly, whether anybody in this house had seen her rug beater, because she'd been sure it was right by her bed." }
    ] }
  ]);

  /* ── Jungwon, route ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-latch', title: 'the latch', hint: "It's two in the morning, it's his night, and the kitchen door is on the latch.",
      after: '3/10', until: '3/12', slots: LATE, events: ['epi-s-sunday'], noFlags: [], route: 'jungwon', noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Late Night', scene: [
      { music: 'epi-s-jungwon' },
      { n: "At two she went down with the one lamp on behind her by the rice cooker, and lifted the latch, and he was on the back step as if he'd known to the minute, beside the koi bucket with his hands at his sides and the cold of two hours at a gate standing off him like a smell." },
      { s: 'jungwon', f: 'neutral', t: "Solar-ssi." },
      { s: 'solar', f: 'neutral', t: "Come in. Before Minseok wakes up and decides it's his business." },
      { s: 'jungwon', f: 'neutral', t: "I'm not sure I should." },
      { s: 'solar', f: 'neutral', t: "You came down the side of the house to the kitchen door. You're sure." },
      { n: "His face didn't change. But he came in, and wiped his good shoes on the mat, twice each, exactly, and looked round Mrs. Bang's kitchen once, the whole room, the way he looked at a board before he played." },
      { ifEvent: 'epi-s-clocks', then: [
        { n: "His eyes stopped on the dish towel over the clock. Blue check. They stayed there a moment. Then they moved on, and he didn't mention it, and she was grateful in a way that went all the way down into her stomach." }
      ] },
      { s: 'jungwon', f: 'neutral', t: "*Have you eaten?*" },
      { s: 'solar', f: 'surprised', t: "*It's two in the morning.*" },
      { s: 'jungwon', f: 'neutral', t: "*That isn't what I asked.*" },
      { n: "He took his coat off, folded it over a chair, lining out, pushed his sleeves to the elbow, and went to work in Mrs. Bang's kitchen as if he'd been born in it." },
      { n: "He didn't ask her where anything was. That was the thing she'd remember. He opened the right cupboard first time for the small pot with the dented lid, Mrs. Bang's porridge pot, and found the rice in the crock and the sesame oil behind the vinegar, where Mrs. Bang hid it from Pyo, and took the good knife from the block and turned it in his right hand as if it had answered a question." },
      { n: "He washed the rice three times without hurry. He cut a spring onion so fine it fell apart into green rings under the lamp, the blade going down on the board in a quick soft rhythm she felt in her teeth, then ginger into threads, then the rice turned in the oil until the kitchen smelled of toasted sesame, then the water, the gas low, the blue flame ticking." },
      { choose: [
        { t: "(Sit on the counter beside the stove and watch his hands.)", stat: { charm: 1 }, then: [
          { n: "She hitched herself up onto the counter beside the stove, in her pajamas, with her heels against the cupboard door, and watched him. His right hand with the spoon, round and round. The watch on his wrist. He felt her watching, in the back of his neck, and kept stirring exactly as before, which took, she suspected, some effort." },
          { bond: { jungwon: 1 } },
          { s: 'jungwon', f: 'neutral', t: "*Mrs. Bang would say you were sitting on her counter.*" },
          { s: 'solar', f: 'happy', t: "*Mrs. Bang would say you were using her pot.*" },
          { s: 'jungwon', f: 'neutral', t: "*Then we'll both be in trouble. That seems fair.*" }
        ] },
        { t: "*You've been in this kitchen before.*", stat: { courage: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "*Never.*" },
          { s: 'solar', f: 'neutral', t: "*You found the sesame oil. Pyo has been looking for that sesame oil since Seollal.*" },
          { s: 'jungwon', f: 'happy', t: "*Every kitchen hides it in the same place. Behind something sour. I've been in a lot of kitchens at two in the morning, Solar-ssi. They're all the same kitchen, at two in the morning.*" }
        ] }
      ] },
      { n: "He stirred until the rice broke down soft and white, salted it with a pinch, tasted, and ladled it into a plain white bowl with the green onion and the ginger and three drops of oil, exactly three, and set it in front of the chair she always took, with the spoon laid straight beside it." },
      { s: 'jungwon', f: 'neutral', t: "Please." },
      { n: "She ate it. It was the best thing she'd eaten in weeks and she didn't tell him, and he stood across the table and didn't sit, and watched her with his face perfectly still, the stillness that meant he was pleased and didn't want her to have it, and she had it anyway." },
      { n: "When she got up to put the bowl in the sink he was already there, taking it out of her hands with his right hand, and neither of them let go at the right moment." },
      { s: 'jungwon', f: 'neutral', t: "I'll wash it." },
      { s: 'solar', f: 'neutral', t: "You cooked." },
      { s: 'jungwon', f: 'neutral', t: "That's why I'll wash it. It's correct." },
      { n: "They stood at Mrs. Bang's sink with a white bowl between them and the counter at the small of her back, close enough that she could see the lamp in his eyes, and he smelled of nothing at all, so close she should have known his soap, and she didn't." },
      { s: 'jungwon', f: 'neutral', t: "May I." },
      { n: "He asked it. Properly, quietly, in the formal speech, as if he were asking to borrow a pen. And she said yes, and he put the bowl down on the counter behind her without looking where it went, and kissed her." },
      { n: "Very politely, for the first second, his mouth careful, his knuckles at her face the way you'd touch something you'd been told was valuable. Then she put her hand flat on his chest and felt his heart going under it, fast, not polite at all, and he made a sound low in his throat she'd never heard from him, and the politeness went out of it entirely. He pressed her back against the counter. His right hand went into her hair. Her fingers found the cold metal of the watch on his wrist and held on to it, and his breath went, and hers did, and somewhere a long way off the gas was still ticking under the empty pot—" },
      { n: "Overhead, the floor creaked." },
      { n: "Mrs. Bang's room was over the kitchen. Everyone had always known that. Footsteps, heavy, sure, from the bed to the door, and stopping, the way Mrs. Bang stopped to listen to a house, and they came apart by a centimeter and stood frozen with their foreheads almost touching, listening to Mrs. Bang listen." },
      { n: "A long moment. Then the footsteps went back. The bed. The springs. Quiet." },
      { s: 'jungwon', f: 'neutral', t: "*She knows.*" },
      { s: 'solar', f: 'neutral', t: "*She doesn't know.*" },
      { s: 'jungwon', f: 'neutral', t: "*Solar-ssi. She's the woman who keeps the sesame oil behind the vinegar. She knows.*" },
      { n: "He stepped back. One step, exactly, and his hand came out of her hair slowly, as if it didn't want to and was being made to by the rest of him, and he turned off the gas, which neither of them had remembered was on." },
      { n: "Then he washed the pot, and the bowl and the spoon and the knife and the board, carefully, the way he'd cooked, and dried them and put each one back where he'd found it. The pot went on its shelf with the dent in the lid facing the wall, the way it had been. She watched him turn it a few degrees, and check it again." },
      { n: "He put his coat on at the door and bowed to her. From the waist. In the kitchen, at half past three in the morning, with her mouth still feeling like his." },
      { s: 'jungwon', f: 'neutral', t: "Thank you for letting me in. Please go to sleep now. I'll be at the gate." },
      { n: "She latched the door behind him and went up to bed, still tasting the sesame oil, her fingers on her own wrist where the watch had been under her hand, and fell asleep before she'd decided what she thought about any of it, and in the morning Mrs. Bang made porridge in the small pot with the dented lid, and looked at it on its shelf a long moment before she took it down, and said nothing at all." }
    ] }
  ]);

  /* ── Appa, route ── */
  add('appa', 'friend', [
    { id: 'epi-s-appa-forecast', title: 'the forecast', hint: "There's a radio playing low in your father's study at two in the morning. He hasn't gone to bed either.",
      after: '3/10', until: '3/12', slots: LATE, events: ['epi-s-sunday'], noFlags: [], route: 'family', noRoute: null,
      place: 'Incheon · The Lee House · Study', time: 'Late Night', scene: [
      { music: 'epi-s-family' },
      { n: "The study door was open a hand's width at two in the morning, with the lamp on, which in this house was an invitation and at this hour was something else as well, and through the gap came a man's voice, low, from the old radio on the shelf, reading the sea." },
      { s: 'radio', f: 'neutral', t: "...Incheon offshore, northwest, six to nine meters a second. Waves one to one and a half meters. For the islands, Socheong, Baengnyeong, Deokjeok, the same, becoming..." },
      { n: "She went down to the kitchen first. She made two cups of barley tea in the dark, from Mrs. Bang's big kettle, which was still warm on the back of the stove, and carried them back along the hall, one in each hand, and pushed the study door open with her shoulder." },
      { n: "Her father was at his desk in his cardigan with his glasses on their cord down at the end of his nose, the paper folded to the crossword in front of him under the lamp, a blue ballpoint in his hand and not moving. The window behind him was black and the wind was leaning on it. He looked up when the door moved, over the glasses, and didn't seem surprised. He never seemed surprised by her. She'd wondered, sometimes, whether it was because he'd decided long ago that nothing she did would be allowed to surprise him." },
      { n: "She put one cup down by his hand. He put the pen down to take it, both hands round it, the way Mr. Oh held a cup, and nodded once at Dal's chair by the radiator." },
      { n: "She sat on the arm of it. The cracked leather. He didn't tell her to sit in it properly. He never did." },
      { n: "The radio went on. It went round the coast the way it always did, from the north to the south, the sea areas and the islands and the wind and the waves, a calm voice reading out a list of places where nothing was calm, and the two of them sat and listened to it and drank their tea, and didn't say anything at all. There wasn't anything that needed saying. That was the thing she hadn't expected. She'd come down with her chest full of things and sat on the arm of Dal's chair and found that the radio said them all, in meters per second, and that it was enough." },
      { n: "Her father turned his cup a quarter turn on the blotter. He looked at the crossword." },
      { s: 'appa', f: 'neutral', t: "Fourteen across. Two syllables." },
      { s: 'appa', f: 'neutral', t: "'Where the river gives up.'" },
      { n: "He read it out in the voice he used for everything, soft and unhurried, and looked at her over his glasses, and waited, the way he'd waited at this desk under this lamp since she could read." },
      { ifFlag: 'epi-s-sari', then: [
        { s: 'appa', f: 'happy', t: "Your seven down was right, by the way. Last month. The tide and the noodles. I checked it in the back." },
        { s: 'solar', f: 'happy', t: "You knew it was right. You wrote it in." },
        { s: 'appa', f: 'neutral', t: "I wrote it in. I checked it anyway. That's a different thing, Sol-ah." }
      ] },
      { choose: [
        { t: "Hagu. The estuary.", stat: { proficiency: 1 }, then: [
          { n: "The mouth of the river, where it went out wide and slow and brown into the bay and stopped being a river, and became the sea, without anybody being able to say which meter it happened on. She'd watched it from the car her whole life, the Han coming out past the islands, giving up." },
          { n: "He wrote it in. Small square blue capitals, very carefully, the way he wrote everything." },
          { s: 'appa', f: 'happy', t: "Mm." },
          { n: "That was all. Mm. He didn't look up again. He just sat with the pen over the next clue, and began, very quietly, to hum." }
        ] },
        { t: "(Pretend you don't know, so he can tell you.)", stat: { kindness: 1 }, then: [
          { s: 'solar', f: 'neutral', t: "I don't know. What is it?" },
          { n: "He looked at her over the glasses for a long moment. He knew. Of course he knew. He'd played this game with her since she could read, from the other side, reading out the answers he already had so she could say them, and he knew exactly what it looked like when somebody did it back." },
          { s: 'appa', f: 'happy', t: "Hagu. The estuary. Where the river comes out." },
          { bond: { appa: 1 } },
          { n: "He wrote it in, small and square and blue, and then he sat and looked at the word on the page, and didn't move on to the next one, and began, very quietly, to hum." }
        ] }
      ] },
      { n: "Four bars of some old trot song from before she was born, flat and slow, round and round, under the radio's voice. He didn't seem to know he was doing it. He never did. She'd heard that hum through her bedroom floor on a thousand nights, and on the seventh stair, and in the car, and she sat on the arm of Dal's chair with her cup going cool in her hands and listened to it the way she listened to the tide, which was with her whole body, without deciding to." },
      { n: "The radio came round to the islands again. Socheong. Baengnyeong. Deokjeok. Her father's lips moved on them, silently, the way they moved on the shipping notices in the paper at half past four, reading along." },
      { n: "He didn't ask her anything. Not why she was up. Not what she'd been thinking about on the stairs before she came in, or where she'd been at Seollal, or any of it. He sat with his pen and his crossword and his hum, and the wind leaned on the window, and he didn't ask, and she understood, sitting there, that not asking was a thing he did with his whole self, every day, the way other fathers did the dishes. It cost him something. She could see the cost, in his shoulders, in the way the pen didn't move. He paid it anyway. He'd been paying it since she came home." },
      { n: "When her cup was empty he reached out without looking and took it from her and put it on the blotter beside his own, the two of them together, handles the same way." },
      { s: 'appa', f: 'neutral', t: "Go to bed, Sol-ah." },
      { s: 'solar', f: 'neutral', t: "You go to bed." },
      { s: 'appa', f: 'happy', t: "I'm going. After this one. It's a hard one, this one." },
      { n: "He was pointing at the back page. The hard crossword. The one he never finished and always started." },
      { n: "She went up. On the seventh stair she stopped, and stood on it, and it creaked under her the way it had creaked under him every night of her life, and she looked back down the stairwell at the lamplight lying across the hall from the study door, and listened, and the humming hadn't stopped." },
      { n: "She went the rest of the way. She got into bed and lay in the dark with the radio coming up faintly through the floor, the islands and the wind, her father's voice humming under it, and she fell asleep before either of them stopped." }
    ] }
  ]);
})();
