/* The strangers epilogue (2/17-3/16/2013, Incheon): two more Late Night hangouts (R.bonds, slots ['late'], time 'Late Night').
   The Nov 6 2026 pass (Kat's questions 12 and 13: yes). Data only; loaded with the world (epilogue.js WORLDS.strangers.files).
   Bonds go through add() so they merge with people-crew.js in any load order. These play on the quiet nights (raw.lateOpen);
   a late hangout spends the night and then she sleeps, so each ends with her going to bed.

   Hangouts (role 'friend'):
     mroh  epi-s-mroh-engine 'engine running'   2/21-3/12 late, after epi-s-home, every route (The Car, at the gate)
     jay   epi-s-jay-sugar 'sugar giving up'    3/1-3/12 late, after epi-s-trio, every route (The Yang House · Kitchen);
                                               Jungwon comes down to cook and finds his kitchen taken; route colour by ifEpiRoute
   Flags set (local): epi-s-oh-harbor (she asked him to drive the harbor road), epi-s-umbrella (Jungwon's umbrella broke).
   Flags read: epi-s-oh-cranes (people-crew mroh-1) in mroh-engine, one line.
   Glitch lines: { near: true } once in jay-sugar (the three of them who remember, at the stove). No glitch ids.
   Bonds: one { bond } per hangout, in the warmest option (mroh; jay or jungwon by route).

   Inventions for Kat to confirm (small): Mr. Oh lives in (Kat, Nov 6), in the room over the garage; since the ten days he sits
   in the car at the gate with the engine running on the nights he can't sleep, radio off, a thermos of instant coffee; he
   ran the engine all ten nights "so you'd hear it, if you came back by the road". Riki brings Jay's invitation over the wall;
   Minseok walks her down the lane and waits on Jay's crate. Jay makes ppopgi (sugar candy with baking soda, pressed with a
   shape) at one in the morning because sugar is the only reaction that can't hurt anybody; Mrs. Moon's ladle; Jungwon
   barefoot in a soft grey sweater (the book's), who cooks when he can't think, and has never played the needle game. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const LATE = ['late'];

  /* ── Mr. Oh ── */
  add('mroh', 'friend', [
    { id: 'epi-s-mroh-engine', title: 'engine running', hint: "There's a car idling at the gate at one in the morning, exhaust going up white in the lamp. Nobody's going anywhere.",
      after: '2/21', until: '3/12', slots: LATE, events: ['epi-s-home'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Car', time: 'Late Night', scene: [
      { music: 'epi-s-late' },
      { n: "From her window at one in the morning she could see the gate, and below the gate, in the circle of the lamp, the exhaust. A thread of it, white, going straight up in the cold air the way smoke goes up from a chimney on a still night, and under it the long dark shape of Mr. Oh's car with its sidelights on." },
      { n: "It wasn't going anywhere. She watched it for five minutes with her forehead on the glass. It sat there with its engine running and went nowhere at all, the way it had sat there, Mrs. Bang had told her, every night for ten nights in February, all night, until the frost came off the bonnet in the morning." },
      { n: "She put her coat on over her pajamas and went down." },
      { n: "The gravel on the drive was frozen into one piece and crunched under her boots like sugar. Minseok's light was on in the gatehouse; he looked up from the sports pages as she passed, and looked at the car, and looked back down at the sports pages, which in Minseok was a whole speech. She tapped on the passenger window. The lock went up." },
      { n: "It was warm inside. Too warm, the heater roaring, and it smelled the way it had always smelled, menthol aftershave and the vinyl seats and very faintly of barley candy, and Mr. Oh was in the driver's seat in his grey jacket with his tie loosened exactly one centimeter, which was as undressed as she had ever seen him, his hands at ten and two on a wheel that was going nowhere, looking straight ahead through the windscreen at the road going down the hill into the dark." },
      { n: "The radio was off. It was always off. In twelve years she had never once heard it on." },
      { s: 'mroh', f: 'neutral', t: "Shut the door. You're letting the warm out." },
      { n: "She shut the door. She sat. He didn't look at her. There was a thermos on the dashboard, a cheap tartan one, and he unscrewed the cup and poured into it, instant coffee, very sweet, she could smell the sugar, and held it out to her without turning his head, and she took it." },
      { s: 'solar', f: 'neutral', t: "You can't sleep." },
      { s: 'mroh', f: 'neutral', t: "I sleep." },
      { s: 'solar', f: 'neutral', t: "It's one in the morning, Mr. Oh." },
      { s: 'mroh', f: 'neutral', t: "I sleep in the car. It's a good car. Better than the bed. The bed doesn't have a heater." },
      { n: "He lived in the room over the garage, and had since before she was born, a room she had been in exactly once, at eight, with a fever, when he'd carried her up the outside stairs because her mother was in Seoul and Mrs. Bang was at the market, and she remembered a single bed made so tight you could bounce a coin on it and a photograph of a fishing boat, and nothing else, nothing at all, as if he'd only rented the room from himself for the night." },
      { n: "She drank the coffee. It was disgusting. She drank all of it." },
      { s: 'solar', f: 'neutral', t: "Mrs. Bang says you did this. When I was gone. Every night." },
      { n: "His hands moved on the wheel. A centimeter. Back to ten and two." },
      { s: 'mroh', f: 'neutral', t: "Mrs. Bang talks." },
      { s: 'solar', f: 'neutral', t: "Why the engine?" },
      { n: "He didn't answer for a long time. Long enough that she thought he wasn't going to, which with Mr. Oh was always possible; he could go a whole drive to Seoul and back without a sentence, and had. The heater roared. The exhaust went up past the window, white, into the lamp." },
      { s: 'mroh', f: 'neutral', t: "So you'd hear it." },
      { s: 'mroh', f: 'neutral', t: "If you came back by the road. In the dark. You'd hear an engine at the gate and you'd know somebody was waiting with the heater on. You hate the cold. You always hated the cold. In the car, when you were seven, you'd put your feet on the heater and I'd have to tell you." },
      { n: "He said it to the windscreen in the same voice he said everything, flat and low and without please in it, a voice for directions. And she sat in the passenger seat with the empty cup in her hands and couldn't say anything at all." },
      { n: "She hadn't come back by the road. She'd come back by the tide, before light, at the bottom of it, out of nowhere, into the garden. And all ten nights he'd been sitting here, at the wrong end of the house, with the engine running, so that if she came back the ordinary way, the way people came back, she'd hear it." },
      { ifFlag: 'epi-s-oh-cranes', then: [
        { n: "She thought of the cranes, the first week, the way he'd driven the long way round the harbor without being asked, and said nothing all the way, and pointed once, at one of them, the way you'd point out an old friend in a crowd. She'd thought it was for the cranes. It hadn't been for the cranes." }
      ] },
      { choose: [
        { t: "Drive me round the harbor. Like when I was eight.", flag: 'epi-s-oh-harbor', stat: { kindness: 1 }, then: [
          { n: "He didn't say anything. He put the car into gear. That was the answer. It had always been the answer." },
          { place: 'Incheon · Harbor at Midnight', time: 'Late Night', soft: true },
          { n: "Down the hill, at exactly the speed limit, through the empty streets, past the onggi shop with its shutters down, past the closed pharmacy and the twenty-four-hour mart with its one bored boy behind the counter, out onto the harbor road where the cranes stood over the black water with their red lights blinking on top, slow, out of time with each other, like a choir that had forgotten the beat." },
          { n: "When she was eight she couldn't sleep at low tide, and her father had rung down to the garage at two in the morning, and Mr. Oh had put her in the back in her pajamas with a blanket and driven her round this road, round and round, the whole of the inner harbor and back, until she slept. She'd forgotten. She'd forgotten until this second, and now it was in the car with them, the blanket and the red lights and his hands at ten and two." },
          { n: "He didn't speak. He never had. He drove the long curve past the container yards with the sea on her side, and at the end of the quay, where the road turned, he slowed, and stopped, and they sat for a moment with the engine running looking out at the water, black, flat, the lights of the ships at anchor laid out on it." },
          { s: 'mroh', f: 'neutral', t: "Eleven." },
          { n: "She looked. She counted. Eleven ships at anchor. She looked at him. He was looking at the water." },
          { s: 'mroh', f: 'neutral', t: "You always counted. In the back. Out loud. Every time. I know it's eleven." },
          { n: "Then he took a barley candy out of the glove compartment, still in its twist of cellophane, the same kind he'd kept there for her since she was seven and stopped crying at red lights, and put it in her hand, and turned the car round, and drove her home." },
          { bond: { mroh: 1 } }
        ] },
        { t: "The toll-booth woman on the bridge. Auntie Song says you wear the aftershave for her.", stat: { charm: 1 }, then: [
          { n: "It was the first time in her life she'd seen Mr. Oh's ears go red." },
          { n: "He didn't look at her. He didn't move his hands. He looked straight down the hill through the windscreen with his face perfectly still and his ears going slowly the color of the lamp on top of a crane." },
          { s: 'mroh', f: 'neutral', t: "Auntie Song talks more than Mrs. Bang." },
          { s: 'solar', f: 'happy', t: "Is it true?" },
          { s: 'mroh', f: 'neutral', t: "I wear aftershave. I've always worn aftershave. A man wears aftershave." },
          { s: 'solar', f: 'happy', t: "Twice a week. When you have business across the bridge." },
          { n: "A long silence. The heater. The exhaust." },
          { s: 'mroh', f: 'neutral', t: "She gives correct change." },
          { n: "That was all he'd say. She knew it was all he'd ever say, and she leaned her head against the cold window and laughed until her eyes ran, quietly, so as not to wake Minseok, and beside her Mr. Oh sat at ten and two with his ears on fire and something at the very corner of his mouth that would have been, on any other man, a smile." }
        ] },
        { t: "(Just sit with him. Don't ask anything.)", stat: { courage: 1 }, then: [
          { n: "She didn't ask anything. She put her feet up on the heater vent under the dashboard, the way she had at seven, in her boots, and he looked at them, once, and didn't tell her." },
          { n: "They sat. The engine ran. The exhaust went up into the lamp. Down the hill, a long way off, a ship's horn went, and another answered it, and the frost grew slowly on the outside of the windscreen in little ferns, from the edges in, until the road down the hill was only a blur of light." },
          { n: "At some point she was asleep. She knew because she woke, with her head against the window and her feet still on the heater and his grey jacket over her, which he'd taken off without her feeling it, and the clock on the dashboard said ten to three." },
          { s: 'mroh', f: 'neutral', t: "Home now." },
          { n: "He meant the house. Twenty meters up the drive. He meant go up to bed. He'd waited, she understood, until she woke by herself, because you didn't wake a child who'd finally gone to sleep at low tide; you drove round again." },
          { bond: { mroh: 1 } }
        ] }
      ] },
      { place: 'Incheon · The Lee House · Gate', time: 'Late Night', soft: true },
      { n: "She got out. The cold took her whole face at once. She shut the door very quietly and stood on the frozen gravel, and he wound the window down two centimeters, the way he did, and said, through the gap, to the road, not to her:" },
      { s: 'mroh', f: 'neutral', t: "I'm turning it off now. You're back. I'll sleep in the bed." },
      { n: "And he did. She heard it go, the engine, halfway up the steps, the sound she'd stopped hearing because it had been there all night, stopping, and the silence come down after it over the gate and the drive and the frozen garden like snow." },
      { n: "She went up to bed. She left her lamp on. Below, through the window, she saw him get out of the car, and stand by it for a moment in the lamp with his hand flat on the bonnet, feeling it cool, the way you'd put your hand on a horse, and then walk round to the garage and up the outside stairs to the room over it, slowly, a man going to bed in a bed." }
    ] }
  ]);

  /* ── Jay (Park Jongseong), at night ── */
  add('jay', 'friend', [
    { id: 'epi-s-jay-sugar', title: 'sugar giving up', hint: "Riki's on the wall with a message: Jay-hyung says if you're up, the Yang kitchen's open. He's doing chemistry. The legitimate kind.",
      after: '3/1', until: '3/12', slots: LATE, events: ['epi-s-trio'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Yang House · Kitchen', time: 'Late Night', scene: [
      { music: 'epi-s-late' },
      { n: "The message came over the wall at a quarter to one, in a silver puffer, eating a banana." },
      { s: 'niki', f: 'neutral', t: "Jay-hyung says if you're up, the kitchen's open. He's doing chemistry." },
      { s: 'solar', f: 'neutral', t: "At one in the morning?" },
      { s: 'niki', f: 'happy', t: "The legitimate kind. He said to say that. He said say it twice. The legitimate kind." },
      { n: "Minseok walked her down the lane. He didn't say anything about it. He came out of the gatehouse in his coat with the heavy torch as she reached the gate, as if he'd been told, which he had, by Riki, who'd told everybody, and walked a step behind her down the frozen ruts of the lane between the two houses with the torch pointed at her feet, and when they reached the Yang kitchen's back step he sat down on Jay's crate with the torch across his knees and took out the sports pages." },
      { n: "The Yang kitchen at night was a different room. Steel counters, the window black, one light on over the big stove, everything else gone dark and huge round it, and the smell, which hit her at the door: burnt sugar, warm and brown and bitter at the edges, the smell of every school gate she'd ever walked past as a child." },
      { n: "Jay was at the stove in a faded SEATTLE tee and track trousers with his goggles pushed up into his hair and Mrs. Moon's big ladle in one hand, holding it over the gas flame, very still, watching something in the bowl of it with the expression of a man watching a bomb." },
      { s: 'jay', f: 'neutral', t: "Don't talk. Thirty seconds. It's at the stage." },
      { n: "In the ladle, a spoonful of sugar had gone clear, and then gold, and then the color of barley tea, bubbling at the edges. Jay took a wooden chopstick with a pinch of white powder on the end of it and dropped it in, and stirred, fast, and the brown went pale and rose all at once like a held breath let go, foaming up the ladle, and he tipped it out onto a square of greased foil and slapped it flat with the bottom of a pan, and pressed a little tin cutter into it, a star, and lifted the cutter, and there was a star printed in the middle of a round flat disc of honey-colored candy, cooling." },
      { s: 'jay', f: 'happy', t: "Ppopgi. Sugar, sodium bicarbonate, heat. The bicarbonate breaks down, gives up carbon dioxide, the gas gets trapped in the sugar as it sets. That's the foam. That's all it is. It's a reaction you can eat." },
      { s: 'solar', f: 'happy', t: "You make it sound like a crime." },
      { s: 'jay', f: 'neutral', t: "It's the only reaction I know that can't hurt anybody. That's why I do it at night." },
      { n: "He said it lightly. He was already putting the next spoon of sugar in the ladle. She let the words lie where they'd fallen, on the steel counter between the foil and the sugar bag, the way you learned to in her father's house, and he knew she'd let them, and something in his tired face came down half an inch." },
      { n: "There was a row of them already on the counter. Stars, triangles, circles, a heart. And a box of the tin cutters, the kind the old men sold outside primary schools, and a jar of sewing needles." },
      { s: 'jay', f: 'neutral', t: "You know the game. You get the shape out without breaking it, you get another one free. You break it, you lose. You use the needle. You lick the back of it if you're desperate. Everybody's desperate. That's the whole economy." },
      { n: "She took a triangle. It was warm still. She took a needle out of the jar and began, at the corner, to pick." },

      // Jungwon comes down.
      { n: "She was halfway down the second side of the triangle when the inner door opened, and Jungwon came into his own kitchen at one in the morning and stopped." },
      { n: "Barefoot. That was the first thing. Bare feet on the cold tiles, and track trousers, and a soft dark grey sweater with the sleeves pushed up to the elbow, and his hair not neat, for once, pushed back off his forehead as though he'd been lying on it, and no watch. She'd never seen his wrist without the watch. It looked like somebody else's wrist." },
      { n: "He looked at Jay at the stove. He looked at the foil and the sugar and the row of stars on his counter. He looked at her, on a stool, in her coat over her pajamas, with a needle in one hand and a half-dug triangle of burnt sugar in the other. And his face did absolutely nothing at all." },
      { s: 'jay', f: 'neutral', t: "Oh. Hey. You're up." },
      { s: 'jungwon', f: 'neutral', t: "It's my kitchen, Jay." },
      { s: 'jay', f: 'neutral', t: "It's Mrs. Moon's kitchen. You just live in it." },
      { s: 'jungwon', f: 'neutral', t: "...That's fair." },
      { n: "He'd come down to cook. She knew it the way you know the weather. He cooked when he couldn't think, alone, late, with a knife, and he'd come down the back stairs barefoot to stand at his own counter and cut something very precisely until his head was quiet, and found his kitchen full of sugar and his fiancée and his chemist." },
      { n: "He didn't go back upstairs. That was the thing she'd remember. He looked at the three of them, at the scene, for one more second, and then he came round the end of the counter and sat down on the stool next to hers, and folded his hands, and looked at Jay." },
      { s: 'jungwon', f: 'neutral', t: "What's the game?" },
      { s: 'jay', f: 'surprised', t: "You've never done ppopgi?" },
      { s: 'jungwon', f: 'neutral', t: "There weren't any old men outside my school. There were guards." },
      { n: "Jay looked at him for a moment with the ladle held over the flame. Then he looked at Solar. Then he did the sugar, the clear, the gold, the barley-tea brown, the pinch of white, the rising foam, the slap of the pan, and pressed the cutter into it, and lifted it, and slid the foil across the counter to Jungwon with something close to ceremony." },
      { s: 'jay', f: 'happy', t: "Umbrella. Hardest one. Nobody gets the umbrella." },
      { s: 'jungwon', f: 'neutral', t: "Then I'll get the umbrella." },
      { glitch: { near: true } },
      { n: "For a second, the three of them at the stove under the one light, nobody said anything. The kitchen ticked as it cooled. She thought, suddenly and for no reason, of a dorm kitchen in a city by the sea, a pot of something on a stove at one in the morning and people round it who weren't supposed to be awake, and she saw Jay's hands stop on the ladle, and Jungwon's on the needle, and knew they'd thought it too, at the same moment, the same kitchen, and then the moment went, and Jay said *anyway*, and lit the gas." },
      { n: "Jungwon picked up a needle in his right hand. He held the disc down flat with two fingers of the same hand and began on the umbrella's handle, the hook at the bottom, the hardest part, and his face went into the stillness she knew, the one he had over a baduk board, a knife, a column of numbers, the stillness that meant everything else in the world had been set down somewhere for later." },
      { n: "She stopped working on her triangle. She watched him. She couldn't help it. His hands were a size small and very steady and the needle went into the sugar along the line in tiny exact taps, tick, tick, tick, like someone counting, and she watched his mouth, which was very slightly open, and the tip of his tongue at the corner of it, which she was absolutely certain he didn't know was there." },
      { s: 'jay', f: 'neutral', t: "He's going to do it. Oh no. He's actually going to do it. I've never seen anybody do the umbrella." },
      { n: "The handle came out. The hook. Then the first rib of the umbrella's top, the curve, clean. Then the second. Jungwon breathed out through his nose. Then the third curve, the one at the tip, where the sugar was thinnest, and the needle went in, and there was a very small sound." },
      { n: "Crack." },
      { n: "A line ran through the umbrella from the tip to the handle like lightning across a window. It broke in two on the foil." },
      { n: "Jungwon looked at it. His face didn't change. It didn't change at all, for a long moment, while he looked at the two halves of the umbrella on the foil with the needle still in his fingers, and she realized, watching him, that he was not used to this, that there were very few things in Yang Jungwon's life he'd set out to do and not done, and that he'd just been beaten, in his own kitchen, at one in the morning, barefoot, by sugar." },
      { choose: [
        { t: "(Laugh. You can't help it.)", flag: 'epi-s-umbrella', stat: { charm: 1 }, then: [
          { n: "She laughed. She tried not to and it came out of her anyway, into her hands, helpless, her shoulders going, and Jay at the stove put his forehead down on the steel counter and shook." },
          { n: "Jungwon turned his head and looked at her laughing at him. And the dimples came. Both of them. Not the polite ones. She'd never seen them like this, not for politeness, not for anybody in a room, his whole face going with it, a boy's face, and he laughed too, the rare one, with his wrist to his mouth, the bare wrist, no watch on it." },
          { s: 'jungwon', f: 'happy', t: "Again. Jay. Again, please." },
          { s: 'jay', f: 'happy', t: "It's one in the morning, man." },
          { s: 'jungwon', f: 'happy', t: "I'm aware of the time. Again." }
        ] },
        { t: "(Lick the back of your needle and finish your triangle. Show him.)", stat: { proficiency: 1 }, then: [
          { n: "She didn't say anything. She picked her triangle back up, and licked the back of it where Jay had said you lick it when you're desperate, which softened the sugar along the line, and went down the last side in tiny taps, and lifted the triangle out of the disc whole, and put it down on the foil in front of him, very straight, the way Auntie Song put down a knife." },
          { n: "Jungwon looked at the triangle. He looked at her. He looked at the triangle again." },
          { s: 'jungwon', f: 'neutral', t: "You licked it." },
          { s: 'solar', f: 'happy', t: "Everybody's desperate. That's the whole economy." },
          { s: 'jungwon', f: 'neutral', t: "...Again, Jay. Please." }
        ] }
      ] },
      { n: "He did four more umbrellas. He broke three. The fourth one came out whole, the hook and every curve, at twenty past two in the morning, and he held it up to the light over the stove between his finger and thumb, a little brown umbrella of burnt sugar, and looked at it with his face perfectly still, which meant, she knew now, the thing it meant." },

      { ifEpiRoute: 'jungwon', then: [
        { n: "Jay took one look at the two of them, Jungwon holding up his umbrella and Solar looking at Jungwon holding up his umbrella, and turned off the gas, and took his goggles off his head, and said he was going to check on the squid, and went out through the back door to sit on the step with Minseok, and shut it behind him with real tact." },
        { n: "The kitchen was very quiet. The one light. The smell of sugar." },
        { s: 'jungwon', f: 'neutral', t: "This is for you. I'd like you to have it. It took me four." },
        { n: "He held it out. She took it. It was so thin you could see the light through it. And there was sugar on his thumb where he'd held it, a little glaze of brown on the pad of his thumb, and she looked at it, and he saw her look at it." },
        { n: "He didn't move. He let her take his hand, his right hand, by the wrist, the bare wrist with no watch on it, and lift it, and put his thumb to her mouth. She felt him stop breathing. Burnt sugar, sweet and bitter. She held it there a second too long, on purpose, with her eyes on his, and felt his pulse go under her fingers at the wrist like something trying to get out." },
        { s: 'jungwon', f: 'flustered', t: "Solar-ssi." },
        { s: 'solar', f: 'neutral', t: "You had sugar on you." },
        { s: 'jungwon', f: 'flustered', t: "I'm aware I had sugar on me." },
        { n: "He kissed her then, on the stool, in his kitchen, in his bare feet, one hand at her jaw, and he tasted of the sugar too, and of nothing else, nothing at all, the strangest thing about him, and she held the little umbrella out to the side in her other hand all the way through it so it wouldn't break, and it didn't." },
        { n: "When he stopped, he put his forehead against hers and said, in Mandarin, very low, that he'd never in his life been so glad to find his kitchen taken." },
        { bond: { jungwon: 1 } }
      ], else: [
        { ifEpiRoute: 'haechan', then: [
          { n: "He held the umbrella out to her. She took it. Then he picked up one of the stars off the counter, one of Jay's, whole, and wrapped it in a square of kitchen paper, carefully, folding the corners in like a parcel, and held that out too." },
          { s: 'jungwon', f: 'neutral', t: "For Donghyuck. He likes sweet things. He pretends he doesn't. He's pretended since he was fourteen. Don't tell him it's from me." },
          { s: 'solar', f: 'neutral', t: "He'll know." },
          { s: 'jungwon', f: 'happy', t: "He'll know. But he'll be able to say he didn't. That's the important part, with him." },
          { n: "She took it. The little parcel of sugar. She held it and the umbrella in her two hands and looked at him in his bare feet with his hair pushed back and no watch, and he looked back, steadily, without asking for anything, and she understood that he was giving her, very politely, both things at once: the umbrella, and the permission to carry the other thing down the lane to someone else." },
          { bond: { jay: 1 } }
        ], else: [
          { n: "He gave the umbrella to Jay. Jay held it up to the light and looked at it for a long time and said it was the first umbrella he'd ever seen come out whole, and that he was going to keep it, in a jar, as a specimen, and Jungwon said that was fine, and Solar laughed, and the three of them sat at the counter in the Yang kitchen at half past two and ate the broken ones, all of them, every star and triangle and the three dead umbrellas, until their teeth hurt." },
          { bond: { jay: 1 } }
        ] }
      ] },
      { place: 'Incheon · The Lee House · Gate', time: 'Late Night', soft: true },
      { n: "Minseok walked her back up the lane at a quarter to three with the torch pointed at her feet. Behind them the Yang kitchen's light went off. Then, a minute later, a light came on upstairs, in the west wing, and stayed on." },
      { n: "She went up to bed with sugar on her teeth and her fingers sticky and something in her pocket wrapped in kitchen paper, or nothing, depending, and when she lay down she could still smell it in her hair, the school-gate smell, burnt and sweet, and she fell asleep before she'd decided whether it was a good smell or a sad one, which was the answer." }
    ] }
  ]);
})();
