/* The strangers epilogue (2/17-3/16/2013, Incheon): the home bonds Haechan, Jungwon, Yunjin, Appa and Eomma (R.bonds) and all
   of the act's texts (R.texts). Writer E, epilogue batch 7. Data only; loaded with the world (epilogue.js WORLDS.strangers.files).
   Bonds go through add() so they merge with people-crew.js whichever loads first. Story events live in story-w1/w2/w3/end.js.

   Bonds (role 'friend'; the first unseen hangout whose gates fit is the one offered; hangouts are Daytime / Evening only):
     haechan  epi-s-haechan-1 'nowhere'          2/18-2/23 after, after epi-s-step (the Rexton, gum, trot, a rest stop; one English word)
              epi-s-haechan-2 'a different drip' 2/25-3/2 after, after epi-s-moon (the kitchen tap; Mrs. Bang, Auntie Song, Pyo, Yunjin)
              epi-s-haechan-3 'weak tea'         3/3-3/9 after, route haechan, after epi-s-alone + epi-s-dust (the annex; waking up)
              epi-s-haechan-4 'where they live'  3/10-3/14 evening, route haechan, after epi-s-dinner (the back step, the koi, the radio)
     jungwon  epi-s-jungwon-1 'the sea side'     2/18-2/23 after, after epi-s-step (Wolmido, formal, Mandarin; the fish-cake cart)
              epi-s-jungwon-2 'the corner'       2/25-3/2 evening, after epi-s-moon (baduk in the study: Appa, then a lesson)
              epi-s-jungwon-3 'west wing'        3/3-3/9 after, route jungwon, after epi-s-alone (his room, the window, the board)
              epi-s-jungwon-4 'two syllables'    3/10-3/14 evening, route jungwon, after epi-s-dinner (Mr. Oh's car in dust-rain; banmal)
     yunjin   epi-s-yunjin-1 'bad coffee'        2/18-2/23 after, after epi-s-kitchen (the Veloster at the seawall at low tide; Japan)
              epi-s-yunjin-2 'the chat, live'    2/25-3/2 after, after epi-s-girls (a nail salon in Songdo with the four girls)
              epi-s-yunjin-3 'mr. and mrs. kim'  3/3-3/9 evening, after epi-s-dust (the back step, the koi, his hoodie, her light)
              epi-s-yunjin-4 'the floor'         3/10-3/14 evening, route family, after epi-s-dinner (she sleeps on Solar's floor)
     appa     epi-s-appa-1 'seven down'          2/20-2/23 evening, after epi-s-stair (the crossword in the study)
              epi-s-appa-2 'trot'                2/25-3/9 evening, after epi-s-moon (a trot tape, baduk, Haechan in Dal's chair)
              epi-s-appa-3 'the cleat'           3/10-3/14 evening, route family, after epi-s-dinner (a mooring knot; "Wherever you come in.")
     eomma    epi-s-eomma-1 'the pears'          2/19-2/27 after, after epi-s-eomma (the sunroom; thank-you cards for the fever fruit)
              epi-s-eomma-2 'the pins'           3/3-3/12 after, after epi-s-dust (she does Solar's hair)
   Flags set: epi-s-nowhere (haechan-1), epi-s-sari (appa-1; read by the ambient crossword text), epi-s-banmal (jungwon-4),
     epi-s-cleat (appa-3), epi-s-cards (eomma-1). Nobody else needs to read them.
   Flags read: epi-route-haechan / -jungwon / -family (route variants of texts), epi-s-sari (ambient). Events read (gates):
     epi-s-home, -kitchen, -step, -eomma, -stair, -trio, -quay, -girls, -bureom, -moon, -gun, -even, -alone, -dust, -karaoke,
     -tide, -clocks, -dinner, -last. Scene conditions: ifEpiRoute (haechan-2, jungwon-2, appa-2), ifGlitch 3 (haechan-3,
     jungwon-3, eomma-2), ifYear xmas haechan (haechan-1) / xmas jungwon (jungwon-1).
   Glitches: none of the act's ids (those belong to the story events); { glitch: { near: true } } where a boy is there and silent
     (haechan-1, -3, -4, jungwon-1, -3, -4) and { glitch: { strain: 1 } } after the fever lie holds (jungwon-1 to the
     fish-cake woman, yunjin-2 to Eunchae, appa-1 to her father, eomma-1 in the thank-you cards).
   Texts: group girls ('🌕 daeboreum committee', from 2/22); 41 dated (2/17-3/15; four route-split days, 2/24, 2/28, 3/6, 3/11,
     3/15, so about 33 reach any one playthrough) and 10 ambient. Haechan, Jungwon, Appa and Sunghoon text like people who know
     the lines are listened to ("not on here"); nothing that matters is ever typed.
   Inventions for Kat to confirm (small, structural): Haechan's 'nowhere' is a half-shut rest stop with a walnut-cake stall; the
     dripping kitchen tap (one drop every four seconds, seven after he fixes it); the half-shut nail salon in Songdo; Yunjin's
     father's grey hoodie with the bleach spot on the cuff; the seawall-at-low-tide coffee is Solar and Yunjin's ritual since
     tenth grade; seven down is 사리 (sari: spring tide, and the noodles you add to the pot); a brass cleat off Taejoon's
     father's first boat is the study's doorstop; the aunts sent eleven boxes of fever fruit (Aunt Hyesun three, all pears);
     Jungwon's 'two syllables' is 가지 마 (don't go), his one banmal of the act; Haechan's stray English word is "No problem."
   Canon held: nothing past what the book has printed; Eomma appears only as care; the pressure from outside is never named;
     nobody's health is described (Jungwon holds with his right hand; Haechan lifts nothing); the Discman never plays; the radio
     on the annex sill only ever plays the shipping forecast and trot; Seo isn't in this file. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const BOTH = ['after', 'evening'];

  /* ── Haechan ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-1', title: 'nowhere', hint: "The Rexton is idling at the gate with the heater on full and a trot tape already in the deck.",
      after: '2/18', until: '2/23', slots: ['after'], events: ['epi-s-step'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Car', time: 'Daytime', scene: [
      { music: 'epi-s-haechan' },
      { n: "The Rexton was at the gate with its engine running and its heater roaring, both front windows fogged to the top, and when she came down the steps in her coat with her hair pinned up for the street, Haechan leaned across and shoved the passenger door open from the inside so hard it bounced on its hinge and nearly shut itself again." },
      { s: 'haechan', f: 'happy', t: "Get in, agasshi. Before your mother sees you without a hat." },
      { s: 'solar', t: "Where are we going?" },
      { s: 'haechan', f: 'neutral', t: "Nowhere." },
      { s: 'haechan', f: 'neutral', t: "It's a long way. Sit down." },
      { n: "Dal's old car smelled the way it always had, diesel and cold vinyl and somebody's cigarettes from years ago worked so far into the headliner they'd never come out, and over the top of it now, cinnamon. There were two cans of vending-machine coffee wedged into the vents to keep warm, the cheap sweet ones in the brown cans, the ones her mother pretended not to know she drank. He'd bought them before she came down. He didn't mention it, and neither did she." },
      { n: "He slapped the dashboard twice, the way Dal used to, and pulled away from the gate without looking, and Mr. Oh, washing the Lee car by the garage with his sleeves rolled to the elbow, watched them go with the face of a man who had never once in thirty years taken a corner like that and never would." },
      { n: "They went east. Out of the port, past the cranes standing over the water like they'd been told to wait, onto the expressway and off it again almost at once, onto roads that didn't go anywhere in particular, past greenhouses white with frost and a shuttered noraebang with a pink sign and a rice field cut to stubble with one grey heron in it, standing on one leg, as if it had been there since the autumn and saw no reason to stop. He drove the way he always drove, one wrist on the wheel and too fast, and the old tape deck played trot with a wobble in it where the tape had stretched." },
      { n: "He sang. Of course he sang. He sang the way he did everything he did to annoy people, which was very well and on purpose, with his whole chest and a little catch in the long notes that the old men at the harbor office would have paid money for, and at the end of every line he looked sideways at her to make sure she was suffering." },
      { choose: [
        { t: "(Turn it off.)", then: [
          { n: "She reached over and pressed stop. The tape clunked. He kept singing without it, exactly in tune, exactly where the song would have been, all the way to the end of the chorus and then into the second verse, because he knew that one too." },
          { s: 'haechan', f: 'happy', t: "It's in my head, agasshi. You can't eject my head." }
        ] },
        { t: "(Sing the chorus with him.)", stat: { charm: 1 }, then: [
          { n: "She came in on the second chorus, badly and on purpose, half a tone flat, the way her father did it at other people's weddings to make the bride's side laugh. He stopped singing entirely to stare at her, and the Rexton drifted toward the center line, and he corrected it with two fingers without looking." },
          { s: 'haechan', f: 'surprised', t: "That was a crime. That was an actual crime. I should ring your father." },
          { s: 'solar', t: "Again." },
          { n: "He rewound the tape with his thumb on the button, grinning at the road like it had told him a joke." }
        ] },
        { t: "(Watch him instead of the road.)", stat: { kindness: 1 }, then: [
          { n: "So she watched him. The moles on his jaw, the scar through his eyebrow, the split knuckles on the wheel, healed and split and healed again, the silver ring he'd had since he was a boy. He felt her looking inside a line and a half, the way he always did, and sang louder to cover it." },
          { s: 'haechan', f: 'flustered', t: "Eyes front, agasshi. You're putting me off." },
          { s: 'solar', t: "You hate being looked at." },
          { s: 'haechan', f: 'neutral', t: "By you. Everybody else can look all they like." }
        ] }
      ] },
      { n: "Nowhere turned out to be a rest stop at the top of a hill, half shut for the winter, with one stall open under a striped awning selling walnut cakes out of a black iron press. The woman behind it was asleep sitting up with her chin on her chest. Haechan bought a paper bag of them without waking her, left the money on the press with a walnut on top to hold it down, and they ate them in the car with the engine running and the bag between them on the handbrake, the windows fogging all over again." },
      { s: 'solar', t: "Do you think about it?" },
      { s: 'haechan', f: 'neutral', t: "About what." },
      { n: "He knew about what. She watched him decide to make her say it out loud, and then decide not to." },
      { s: 'haechan', f: 'neutral', t: "There was a shop by the station. Open all night. It sold one kind of gum." },
      { s: 'haechan', f: 'serious', t: "Mint. A whole year. Mint." },
      { s: 'solar', t: "That's what you think about." },
      { s: 'haechan', f: 'neutral', t: "Every day, agasshi. I've got trauma." },
      { n: "He put another walnut cake in his mouth whole. Down on the road below a truck went past and the whole hill shook a little under them, the paper bag rustling on the handbrake like something alive." },
      { s: 'haechan', f: 'neutral', t: "Nobody understood a word I said. A whole country. I'd go in a shop and say a thing and they'd bow and say a thing back and we'd just stand there." },
      { s: 'solar', t: "I understood you." },
      { s: 'haechan', f: 'neutral', t: "Yeah. So I followed one girl round for a year because she was the only person in the whole place who knew what I was saying." },
      { s: 'haechan', f: 'neutral', t: "Don't let it go to your head." },
      { n: "He said it to the windscreen. He said it the way he said everything he meant, as if it were a joke he'd got a little bored of, and then he didn't look at her for a while, and she let him not." },
      { glitch: { near: true } },
      { ifYear: { xmas: 'haechan' }, then: [
        { n: "She thought of him on the annex step that first morning with the earbuds in and nothing playing, and his face when it stopped performing. He'd put it back on since. He wore it well. She knew exactly where the seams were." }
      ] },
      { n: "She gave him the last cake. He took it. She thanked him for the drive, properly, the way she'd been raised to thank a man who'd driven her somewhere, and he answered without thinking about it at all." },
      { s: 'haechan', f: 'neutral', t: "No problem." },
      { n: "In English. Clear as a bell, the vowels flat and easy, like somebody who said it twenty times a day somewhere else, to somebody else, in a different life." },
      { n: "They both stopped." },
      { s: 'solar', t: "...Since when do you speak English?" },
      { s: 'haechan', f: 'surprised', t: "I don't." },
      { n: "He looked at his own hands on the wheel as if somebody had lent them to him. Then at her. Then out at the frost on the hill, very hard." },
      { s: 'haechan', f: 'flustered', t: "Don't tell the Chairman. He'll think I'm going to America." },
      { choose: [
        { t: "Your secret's safe.", then: [
          { s: 'haechan', f: 'neutral', t: "It's not a secret. It's a stroke. I'm having a stroke, agasshi, and you're eating my cake." }
        ] },
        { t: "Say something else.", stat: { courage: 1 }, then: [
          { n: "He opened his mouth. Nothing came out but Korean, and then some quay Korean, and then he laughed, the loud one, the real one, and knocked his forehead gently on the steering wheel twice." },
          { s: 'haechan', f: 'happy', t: "Gone. It's gone. It was a fluke. Put your belt on." }
        ] }
      ] },
      { n: "He turned the car round at a sign that said INCHEON 38 and drove them home the long way, under a sky going the color of the inside of a shell, and the tape played the same trot song three times because neither of them would be the one to touch it. At the gate he leaned across and opened her door for her again. Gently, this time." },
      { s: 'solar', t: "Where did we go?" },
      { s: 'haechan', f: 'neutral', t: "Nowhere. Told you. It's a long way." },
      { flag: 'epi-s-nowhere' }
    ] },

    { id: 'epi-s-haechan-2', title: 'a different drip', hint: "The kitchen tap has been dripping since Seollal, and Haechan has decided that this is now his problem.",
      after: '2/25', until: '3/2', slots: ['after'], events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
      { music: 'epi-s-house' },
      { n: "The kitchen tap had been dripping since Seollal. Nobody had fixed it, because in a house with ten people and a bucket of fish everybody assumed somebody else would, and one night at the table Solar had said, to nobody in particular, that she could hear it from her room, one drop every four seconds, all night, she'd counted, and then talked about something else." },
      { n: "By lunchtime the next day Haechan was standing at the sink with a wrench from the garage, Dal's knife, a box of washers from the drawer where Mrs. Bang kept things that might be something one day, and the expression of a man about to defuse a bomb he'd once read about in a magazine." },
      { s: 'mrsbang', t: "Aigoo. Not my tap." },
      { s: 'haechan', f: 'neutral', t: "It's the house's tap, Mrs. Bang. I'm the house." },
      { s: 'mrsbang', t: "You're a dog with a spanner." },
      { n: "At the prep table Auntie Song was taking a cleaver to a mountain of chives and didn't look up." },
      { s: 'auntie', t: "*That boy fixes things the way he drives.*" },
      { n: "She said it in Mandarin, to the chives. Solar, at the table with a magazine she wasn't reading, turned a page and kept her face exactly as it was, the face of a daughter who had never in her life understood a word that was said in this kitchen." },
      { s: 'auntie', t: "*Xiao yueliang. Move your feet. There's going to be water.*" },
      { n: "She moved her feet. She didn't look up. Auntie Song made a small satisfied sound and went back to the chives." },
      { n: "Pyo appeared in the back doorway with a sack of onions in his arms and the koi bucket at his heels, looking at the sink as if it might bite." },
      { s: 'pyo', t: "Is it the ghost?" },
      { s: 'haechan', f: 'neutral', t: "It's a washer, Pyo." },
      { s: 'pyo', t: "That's what the ghost would say." },
      { n: "And then the door from the hall banged open, because it always did when Yunjin came through it, and she was there in a puffer and slippers with her hair in a claw clip and her pink camera already round her wrist on its strawberry strap, as if she'd heard there was going to be a show." },
      { s: 'yunjin', f: 'happy', t: "Delivery boy. Are you licensed for this?" },
      { s: 'haechan', f: 'neutral', t: "I've got a knife." },
      { s: 'yunjin', f: 'neutral', t: "That's not a license, that's a threat." },
      { n: "He put the wrench to the tap head with great dignity, and turned it, and the tap head came off in his hand, and the water came straight up out of the pipe in a white column with a noise like a kettle being sick and hit the ceiling and came down again on everybody." },
      { s: 'mrsbang', t: "AIGOO." },
      { n: "Pyo dropped the onions. Auntie Song put a chopping board over the chives with the speed of a woman who had seen floods. Yunjin screamed, laughing, and took four photographs in a row with the flash on. Haechan stood in the middle of it with his hand over the pipe and water squirting out between his fingers into his own face, and said something about Dal's mother that made Mrs. Bang hit him with a tea towel." },
      { choose: [
        { t: "(Get down and shut the valve under the sink.)", stat: { knowledge: 1 }, then: [
          { n: "She was under the sink before she'd decided to be, past the bleach and the old rice-cooker box to the little red valve on the left-hand pipe, and she turned it twice, and the column of water shrank and spat and stopped." },
          { n: "The kitchen was very quiet. Everybody looked at her." },
          { s: 'haechan', f: 'surprised', t: "How did you know that was there." },
          { s: 'solar', t: "I know where everything is in this house." },
          { n: "She said it lightly, the sheltered daughter's voice, as if it were a joke about being nosy. Mrs. Bang, wringing her tea towel into the sink, didn't laugh. Mrs. Bang had watched her learn where everything in this house was, one thing at a time, since she was six." }
        ] },
        { t: "(Hand him the right washer.)", stat: { proficiency: 1 }, then: [
          { n: "She took the box of washers off the counter, picked through it with the water raining down on her magazine, and held one up between two fingers. The small black one. The one that was actually the right size." },
          { s: 'haechan', f: 'neutral', t: "That's the one I was going to use." },
          { s: 'solar', t: "You were going to use the grey one." },
          { s: 'haechan', f: 'flustered', t: "I was going to use the grey one *second*." }
        ] },
        { t: "(Laugh until you can't breathe.)", stat: { charm: 1 }, then: [
          { n: "She laughed. She put her face down on the wet magazine and laughed until her ribs hurt, until she couldn't breathe, until Yunjin was holding onto her shoulder and laughing too and Pyo was laughing without knowing why and even Auntie Song, under her breath, behind the chopping board." },
          { n: "Haechan, soaked, with his hand still clamped over the pipe, looked at her across the kitchen with water running off his chin. He didn't say anything. He didn't have to. It was the first time since she got back that anybody in this house had heard her laugh like that, and the look on his face said he'd have flooded the whole street for it." }
        ] }
      ] },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'yunjin', f: 'neutral', t: "Your fiancé would've read the manual first." },
        { s: 'haechan', f: 'serious', t: "Her fiancé would've had a man come." }
      ] },
      { n: "It took him forty minutes, two more washers and a strip of Mrs. Bang's plumber's tape that she'd had since 1994 and handed over like a relic. When he turned the water back on the tap held. Then, after a long pause in which the whole kitchen watched it, it dripped." },
      { n: "Once. Then nothing. Then once more." },
      { s: 'haechan', f: 'happy', t: "It's a different drip. That's progress." },
      { n: "Mrs. Bang took the hall rug out into the yard and beat it, hard, for some time. Her father appeared in the doorway with his reading glasses on their cord, looked at the ceiling, looked at the floor, looked at Haechan dripping in the middle of it." },
      { s: 'appa', t: "Son." },
      { s: 'haechan', f: 'neutral', t: "Chairman." },
      { s: 'appa', t: "Leave it for the plumber." },
      { s: 'haechan', f: 'neutral', t: "Yes, Chairman." },
      { n: "When he'd gone Haechan wiped his face on his sleeve and leaned on the counter beside her, close enough that his wet shoulder was nearly against hers, and lowered his voice under the sound of the rug." },
      { s: 'haechan', f: 'neutral', t: "Seven seconds now. I timed it." },
      { s: 'haechan', f: 'neutral', t: "Count that tonight. Takes longer. You'll be asleep by forty." }
    ] },

    { id: 'epi-s-haechan-3', title: 'weak tea', hint: "The annex door is open a crack. The radio on the sill is on, low, and so is the light, the color of weak tea.",
      after: '3/3', until: '3/9', slots: ['after'], events: ['epi-s-alone', 'epi-s-dust'], noFlags: [], route: 'haechan', noRoute: null,
      place: 'Incheon · The Lee House · Annex', time: 'Daytime', scene: [
      { music: 'epi-s-haechan' },
      { n: "She woke in the annex with no idea what time it was, which hadn't happened to her since she was a child." },
      { n: "The light through the one window was the color of weak tea, the dust lying over the whole city like a lid, and the old silver radio on the sill was murmuring the shipping forecast so low it was more a texture than a sound, wind speeds and sea states off islands she'd known the names of all her life. The iron bed. Mrs. Bang's crane quilt pulled over both of them. An arm across her waist, heavy and warm, the sleeve of a grey T-shirt pushed up to the elbow." },
      { n: "She'd come down the garden at eleven with a thermos because Mrs. Bang had asked her to, and because she hadn't slept properly since the night she'd woken on her own floor with her palm on fire and the clock reading 12:01, and he'd taken one look at her face and taken the thermos off her and pointed at the bed, and she remembered sitting on the edge of it to take her shoes off and nothing at all after that." },
      { n: "His breathing behind her was very even. Too even. She turned her head on the pillow. His eyes were shut, his face slack, his mouth a little open, and his eyelashes were moving." },
      { s: 'solar', t: "You're awake." },
      { s: 'haechan', f: 'neutral', t: "No." },
      { s: 'solar', t: "You were watching me." },
      { s: 'haechan', f: 'neutral', t: "You snore." },
      { s: 'solar', t: "I do not." },
      { s: 'haechan', f: 'happy', t: "Like a little boat. Putt putt putt. All the way out past Wolmido and back." },
      { n: "She elbowed him. He caught the elbow and kept it, and then kept the rest of her, pulling her back against him under the quilt until there was no room left between them at all, his chin on her shoulder, his breath warm in the hair at her neck that had come down out of its pins while she slept. The pins were on the sill beside the radio, in a little row. He'd taken them out. She didn't remember that either." },
      { choose: [
        { t: "(Turn over and kiss him.)", stat: { courage: 1 }, then: [
          { n: "She turned over inside his arms, which in that bed took some doing, and the springs sang about it, and she kissed him before he could say anything clever. He tasted of cinnamon and sleep. He made a sound against her mouth that he'd have denied in front of anyone, low and surprised, and then his hand was flat on her back under her sweater, warm, his split knuckles rough against her spine, and he wasn't saying anything clever at all." }
        ] },
        { t: "Donghyuck-ah.", then: [
          { n: "She said it into the pillow, not quite to him. He went still behind her. Then his mouth was on the back of her neck, right at the hairline, once, very slowly, and she felt him smile against her skin." },
          { s: 'haechan', f: 'neutral', t: "Again." },
          { s: 'solar', t: "No." },
          { s: 'haechan', f: 'neutral', t: "Agasshi." },
          { n: "So she turned over and said it again, against his mouth, and that was the last thing either of them said for a while that was a word." }
        ] }
      ] },
      { n: "The quilt slid. The radio said *moderate, occasionally rough*. Her sweater ended up somewhere in the direction of the steel door and his T-shirt somewhere in the direction of the sill, and he looked at her in the brown dust light the way he always did when he thought she couldn't see him do it, as if he were memorizing a route he'd have to drive later with the lights off." },
      { n: "Somebody knocked on the steel door." },
      { n: "Three knocks, hard, the knocks of a woman holding a tray. They froze. Outside, a tray was set down on the step, firmly, with a rattle of spoons." },
      { s: 'mrsbang', t: "I'll thank you both to eat it hot." },
      { n: "Footsteps went away up the garden, fast and offended, all the way to the kitchen door, which shut." },
      { n: "He put his face in her neck and laughed until the bed shook. She lay under him staring at the ceiling with both hands over her mouth." },
      { n: "It was seaweed soup and rice and a dish of the good kimchi, the one Mrs. Bang kept for people she was angry with and loved. They ate it sitting up in the bed with the quilt round their shoulders and the bowls on their knees. When she reached for the kimchi he caught her right hand and turned it over." },
      { n: "The blister ran straight across her palm, a hand's width, healing now, the exact width of something round and long and held hard. He looked at it the way he'd looked at the water coming up the quay steps at her feet. He'd gone quiet. Haechan was never quiet." },
      { glitch: { near: true } },
      { s: 'solar', t: "You were at my door before I'd got up off the floor." },
      { s: 'haechan', f: 'serious', t: "Your window went green." },
      { s: 'haechan', f: 'serious', t: "I was on the stairs before I knew I'd stood up. I don't remember the garden." },
      { n: "He put his thumb beside the blister. Not on it. Beside it." },
      { s: 'haechan', f: 'serious', t: "Next time, you wake me up first. Before you go anywhere. I don't care if it's the toilet, agasshi." },
      { s: 'solar', t: "And if I can't?" },
      { n: "He didn't answer that. He looked at her hand." },
      { choose: [
        { t: "I'll wake you.", then: [
          { s: 'haechan', f: 'sad', t: "Liar." },
          { n: "He said it so softly it wasn't an accusation. It was more like a thank you." },
          { s: 'haechan', f: 'neutral', t: "Do it anyway." }
        ] },
        { t: "(Close his hand around yours.)", stat: { kindness: 1 }, then: [
          { n: "She folded his fingers down over her palm, over the blister and all, until her whole hand was inside his. He let her do it. He held on." },
          { s: 'haechan', f: 'neutral', t: "That's cheating." },
          { s: 'solar', t: "It's holding." },
          { s: 'haechan', f: 'neutral', t: "Same thing, with you." }
        ] },
        { t: "You'd sleep through it.", then: [
          { s: 'haechan', f: 'neutral', t: "I've never slept through you once, agasshi. Not one time. Not since November." },
          { n: "He said it at the soup. He'd aimed it. She felt it land somewhere under her ribs and stay there." }
        ] }
      ] },
      { ifGlitch: 3, then: [
        { n: "For one second the tea-colored light in the window went another color, the one she didn't have a word for in Korean, and the radio on the sill said a word that wasn't a wind speed. Then it was the forecast again, *sea state four*, and the dust. He was looking at the window too. Neither of them said so." }
      ] },
      { n: "Afterwards she pinned her hair back up at the little square of mirror by the door, by feel, the way she'd done it in the back of cars and in hospital toilets all winter. He lay on his back in the iron bed with his hands behind his head and watched her do it in the mirror." },
      { s: 'haechan', f: 'neutral', t: "Leave one." },
      { n: "She looked at him in the glass. Then she took the last pin back out and put it on the sill, beside the radio, and went up the garden through the dust with one piece of her hair down against her neck where anyone at all could see it." }
    ] },

    { id: 'epi-s-haechan-4', title: 'where they live', hint: "Haechan is on the back step in the cold with the koi bucket and Mrs. Bang's green thermos, not saying anything.",
      after: '3/10', until: '3/14', slots: ['evening'], events: ['epi-s-dinner'], noFlags: [], route: 'haechan', noRoute: null,
      place: 'Incheon · The Lee House · Garden', time: 'Evening', scene: [
      { music: 'epi-s-haechan' },
      { n: "He was on the back step when she came out, sitting where Mrs. Bang usually sat to feed the fish, with the bucket between his boots and Mrs. Bang's old green dented thermos beside him and two cups, and down at the bottom of the garden the annex door was open so that the radio on the sill carried up the path, very small, an old trot song with the shipping forecast coming through underneath it whenever the signal drifted." },
      { n: "He didn't look round. He'd known it was her from the way the kitchen door opened. He moved over on the step to make room, which on that step meant about a hand's width, and poured the second cup without asking whether she wanted it." },
      { n: "Barley tea. Too hot to drink. She held it." },
      { n: "He hadn't said much at dinner, after. He hadn't said much since. Everybody at the table had seen her go thin as paper for one second in the light over the rice, and everybody had decided together not to say so, and Haechan, who said everything, who could not get through a meal without insulting at least three people and singing at a fourth, had been quiet ever since. She knew what that meant. Everybody in this house knew what that meant." },
      { glitch: { near: true } },
      { n: "In the bucket, under a skin of new ice he'd broken with the side of his fist, Mr. and Mrs. Kim went round and round, orange and white and slow, the way they'd gone round since December, nose to tail." },
      { s: 'haechan', f: 'neutral', t: "Three months they've been in a bucket." },
      { s: 'solar', t: "Mrs. Bang changes the water every day." },
      { s: 'haechan', f: 'neutral', t: "Still a bucket." },
      { n: "He shook a pinch of Mrs. Bang's flakes over the water. The fish came up and took them with little kisses at the surface, and he watched them do it as if it were the most important thing happening in Incheon." },
      { s: 'haechan', f: 'neutral', t: "When the ground's soft I'm putting them a pond in. There. Under your window." },
      { s: 'solar', t: "You've never dug anything in your life." },
      { s: 'haechan', f: 'neutral', t: "Minseok's dug plenty. I'll supervise. I'm very good at supervising." },
      { s: 'haechan', f: 'serious', t: "Fish need to know where they live, agasshi. You can't keep them in a bucket by a door forever. They start thinking they're leaving." },
      { n: "He said it to the bucket. He'd aimed it at her. It went in under her ribs exactly where he'd meant it to, and she sat there holding the barley tea she couldn't drink with the steam going up into the dark between them, and couldn't think of a single thing to say back that wouldn't be a lie." },
      { choose: [
        { t: "They'd like a pond.", then: [
          { s: 'haechan', f: 'neutral', t: "Yeah?" },
          { s: 'solar', t: "Under my window." },
          { n: "He looked at her then, for the first time since she'd come out. Then away. He nodded, once, at the fish, as if they'd agreed something between the three of them and she wasn't allowed to take it back." }
        ] },
        { t: "(Put your hand in the water.)", stat: { courage: 1 }, then: [
          { n: "She put her hand in the bucket, through the broken ice, into water so cold it hurt to the wrist. Mrs. Kim came and looked at her fingers. Mr. Kim, braver, nudged them." },
          { s: 'haechan', f: 'surprised', t: "Agasshi, it's minus three." },
          { s: 'solar', t: "I want them to know what I feel like." },
          { n: "He took her hand out of the water himself and dried it on the inside of his work jacket, against his chest, where it was warm, and kept it there, and didn't say anything else about the cold." }
        ] },
        { t: "(Say nothing. Lean on him.)", stat: { kindness: 1 }, then: [
          { n: "She put her head on his shoulder. The padded jacket was cold on the outside and warm all the way through, diesel and cinnamon and the faint lemon oil Mrs. Bang put on everything in this house including, apparently, him." },
          { n: "He let out a breath. A long one. As if he'd been holding it since Monday at dinner." }
        ] }
      ] },
      { n: "The radio at the bottom of the garden lost the trot song and found the forecast and lost that too, and for a moment there was only the hiss, and the tide going out under the house, which she could feel in her teeth the way she always could." },
      { s: 'haechan', f: 'neutral', t: "It's going out." },
      { s: 'solar', t: "How do you know?" },
      { s: 'haechan', f: 'neutral', t: "Your face does a thing." },
      { n: "He stood up and took her cup off her and drank half of it in one go, scalding, the way men who'd worked the quays drank everything, and put the lid back on the thermos." },
      { s: 'haechan', f: 'neutral', t: "Go up. I'm on the step." },
      { s: 'solar', t: "It's freezing." },
      { s: 'haechan', f: 'neutral', t: "I've got a jacket and a bucket of fish. Go up, agasshi." },
      { n: "She went up. From her window, with the light off, she could see him: a dark shape on the back step under the kitchen eave, elbows on his knees, looking at the bucket, and then, when he thought nobody was watching, up at her window. He stayed there. She didn't see him leave. She fell asleep before he did, which she suspected was the point." }
    ] }
  ]);

  /* ── Jungwon ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-1', title: 'the sea side', hint: "Jungwon is waiting at the foot of the Wolmido promenade in a dark coat, on the side away from the water.",
      after: '2/18', until: '2/23', slots: ['after'], events: ['epi-s-step'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Wolmido', time: 'Daytime', scene: [
      { music: 'epi-s-jungwon' },
      { n: "He was at the foot of the promenade at exactly the time he'd said, in a dark coat buttoned to the throat, on the side away from the water, with his hands at his sides and his face composed for the weather, and when Mr. Oh's car pulled up he bowed to it before she was out of it, which was either manners or a joke, and with Jungwon it was usually both." },
      { s: 'jungwon', f: 'neutral', t: "Good afternoon. Did you sleep?" },
      { s: 'solar', t: "No." },
      { s: 'jungwon', f: 'neutral', t: "Good." },
      { n: "He heard himself and the dimples came out, the polite ones, the ones he kept for menus and old men and her mother." },
      { s: 'jungwon', f: 'happy', t: "I'm sorry. I meant that I'm not going to pretend I hoped you had." },
      { n: "Out at the end of the road, Sunghoon's car sat with its engine running and its nose pointed at the way out, and Sunghoon himself stood beside it facing the traffic, as if the traffic were a door." },
      { n: "They walked. Wolmido in February was a promenade of shuttered rides under tarpaulins, a Viking ship with its prow wrapped in blue plastic, a pirate with half his face peeled off a sign, the cafés with their chairs upside down on the tables, and the sea beyond the railing flat and grey and enormous, the color of a knife nobody had cleaned. Gulls stood about on the railing like they were waiting to be paid. The wind came straight off the water and through her coat as if her coat weren't there." },
      { n: "He walked on the sea side of her. She noticed after twenty steps. He'd crossed behind her without saying anything, without touching her, so that his body was always between her and the railing, and when the promenade bent he bent with it, half a step wider, keeping the place. He didn't mention it. He never had. He'd been doing it since November." },
      { glitch: { near: true } },
      { n: "There was one cart open, near the ferry office, a fish-cake cart with a kettle of broth steaming on a gas ring and an ajumma in a quilted vest behind it, and the ajumma looked at Solar's face, and then at her pinned hair, and then at her coat, and her whole face opened like a window. *Agasshi! The Lee house! You were sick at New Year, I heard. Your mother bought the whole cart for the kitchen on the first day and didn't even take the change.*" },
      { n: "Solar felt Jungwon go very slightly still at her side. Not visibly. Just a change in the air where he was." },
      { choose: [
        { t: "Thirty-nine point four. I couldn't keep rice down.", stat: { charm: 1 }, then: [
          { n: "She said it with a little rueful smile, the one for church and aunts, a hand going to her throat as if remembering the soreness, and the ajumma clucked and pressed a stick of fish cake on her and a paper cup of broth and refused the coins." },
          { n: "*You eat that,* the ajumma ordered. *All of it. You're thin as a pin.*" }
        ] },
        { t: "I'm much better now, ajumma. Thank you.", then: [
          { n: "Softly, with a bow, the sheltered daughter's voice that never had to explain anything. The ajumma clucked at her and put two sticks of fish cake in a paper cup of broth and wouldn't hear of money." }
        ] }
      ] },
      { glitch: { strain: 1 } },
      { n: "They walked on with the broth. When they were out of earshot he spoke without looking at her, in Mandarin, low, the way they always did now when there was anything worth saying." },
      { s: 'jungwon', f: 'neutral', t: "*She gave you an extra one.*" },
      { s: 'solar', t: "*She always does.*" },
      { s: 'jungwon', f: 'neutral', t: "*You lie very well to kind people.*" },
      { s: 'solar', t: "*I lie very well to everybody.*" },
      { s: 'jungwon', f: 'neutral', t: "*No. Not to me.*" },
      { n: "He said it as a fact. Then he touched his watch with two fingers of his right hand, the way he did when he was thinking, and she let it sit." },
      { s: 'jungwon', f: 'neutral', t: "*In Iwatodai I could read every sign. I'd never been anywhere in my life where I could read every sign and still not know where I was.*" },
      { s: 'solar', t: "*You learned Japanese from your grandfather's baduk books.*" },
      { s: 'jungwon', f: 'neutral', t: "*I learned the Japanese for 'atari' and 'the stone is dead.' I had to work up from there.*" },
      { n: "She laughed, and the wind took it. He looked pleased about that. Which meant his face did nothing at all." },
      { ifYear: { xmas: 'jungwon' }, then: [
        { n: "She thought about him at the gate that first morning, in the cold, with his watch ticking and one word in his mouth that he'd never used in daylight. He hadn't used it since. He was very careful, these days, to be exactly as polite as he'd always been, and she'd started to understand that this was how he kept it safe." }
      ] },
      { n: "The promenade ended at the pier, a long concrete finger going out into the grey with benches along it and nothing at the end but a lamp and the water on three sides. Old men were fishing off it in bobble hats with their lines going down into nothing." },
      { choose: [
        { t: "(Walk out to the end of the pier with him.)", needs: { courage: 2 }, stat: { courage: 1 }, then: [
          { n: "She went out along the pier. Not to the end. To the last bench, which was further than she had ever gone on that pier in twenty-one years, and every step of it she could feel the water on three sides of her, the deep cold black of it under the concrete, waiting. He walked on the outside the whole way, with his hand not quite at her back." },
          { n: "At the last bench she stopped. He stopped. He didn't say well done, and he didn't say she could go back now. He stood between her and the end of the pier and looked out at the sea as if he'd come there to look at the sea." },
          { s: 'jungwon', f: 'neutral', t: "*That's far enough for one year.*" },
          { s: 'solar', t: "*It's February.*" },
          { s: 'jungwon', f: 'neutral', t: "*I know what month it is.*" }
        ] },
        { t: "(Stay back by the railing.)", then: [
          { n: "She stopped well short of the pier, by the railing at the land end, where the concrete still had earth under it. He stopped with her. He didn't look at the pier, or at her, or say anything about it at all." },
          { s: 'jungwon', f: 'neutral', t: "*I've never liked piers. They don't go anywhere. They just stop, and make you look at it.*" },
          { n: "It was a kindness so well made that she almost didn't notice it was one." }
        ] },
        { t: "*What are you counting?*", stat: { knowledge: 1 }, then: [
          { s: 'jungwon', f: 'surprised', t: "*How did you know I was counting?*" },
          { s: 'solar', t: "*Your lips move. A little. On the left.*" },
          { n: "He was quiet for three steps." },
          { s: 'jungwon', f: 'neutral', t: "*Gulls. Forty-one. And the number of times you've looked at the water.*" },
          { s: 'solar', t: "*How many?*" },
          { s: 'jungwon', f: 'neutral', t: "*None. That's why I'm counting.*" }
        ] }
      ] },
      { n: "He walked her back to Mr. Oh's car with his right hand in his coat pocket and his left at his side, and at the car door he bowed again, formally, correctly, the bow of a young man returning a borrowed thing to its owner." },
      { s: 'jungwon', f: 'happy', t: "Thank you for your time." },
      { s: 'solar', t: "You're welcome to it." },
      { n: "The dimples went. His face went still. Mr. Oh, at the wheel, looked straight ahead with his hands at ten and two and the face of a man who had heard nothing, and pulled away so smoothly that she didn't feel the car start." }
    ] },

    { id: 'epi-s-jungwon-2', title: 'the corner', hint: "Jungwon and your father are bent over the baduk board in the study, and neither of them has spoken in twenty minutes.",
      after: '2/25', until: '3/2', slots: ['evening'], events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Study', time: 'Evening', scene: [
      { music: 'epi-s-jungwon' },
      { n: "The study smelled of Esse Lights and old paper and the radiator, which was on too high, the way her father liked it, and the lamp on the desk made a yellow circle over the board and left the rest of the room to the dark: the shelves, Dal's cracked leather chair by the radiator, the clock on the wall that ticked like it had somewhere better to be." },
      { n: "Her father played the way he did everything, slowly, with his glasses down his nose on their cord, humming a trot song under his breath that stopped whenever he was about to do something cruel on the board. Jungwon played the way he did everything too. Quietly. Exactly. Taking each stone out of the bowl with his right hand and setting it down with the small clean click of a man who had never once in his life put a stone down and then wished he hadn't." },
      { n: "She sat on the arm of Dal's chair with her feet tucked under her and watched them not speak to each other. It was very loud." },
      { s: 'appa', t: "Sol-ah. Who's winning." },
      { s: 'solar', t: "You are, Appa." },
      { s: 'appa', t: "Wrong. Look again." },
      { n: "She looked again. She didn't know how to look at a baduk board. She knew how to count, so she counted: the white stones and the black, the empty places, the little groups huddled in the corners like men on a quay in the rain. She couldn't make it mean anything. Jungwon, very politely, didn't look at her." },
      { n: "Minseok put his head round the door." },
      { s: 'minseok', t: "Chairman. The fruit man's at the gate. He says one of the boxes for the agasshi's fever went on the house account." },
      { s: 'appa', t: "My sisters-in-law sent eleven boxes of fruit to a girl with a fever, and one of them sent it on my account." },
      { n: "He took his glasses off and polished them on his cardigan, slowly, which meant he was annoyed, and put them back on, and stood." },
      { s: 'appa', t: "Don't touch my stones, Jungwon-ah." },
      { s: 'jungwon', f: 'neutral', t: "I wouldn't dream of it, Chairman." },
      { n: "The door shut behind him. His slippers went off down the hall. Jungwon looked at the board for a long moment. Then he looked at her, and the dimples came, and they were not polite ones." },
      { s: 'jungwon', f: 'happy', t: "Would you like to learn?" },
      { s: 'solar', t: "He said not to touch his stones." },
      { s: 'jungwon', f: 'neutral', t: "He said not to touch his. He didn't say anything about mine." },
      { n: "She came and sat in her father's chair, still warm, and he turned the bowl of white stones toward her across the table with one finger." },
      { s: 'jungwon', f: 'neutral', t: "The first stone goes in a corner. Always. Corners are easy to hold. You only have to defend two sides." },
      { s: 'solar', t: "That's very you." },
      { s: 'jungwon', f: 'neutral', t: "It's very baduk. I'm just very good at it." },
      { n: "He showed her liberties, the empty points beside a stone that let it breathe, and how a stone with none left was taken off the board. She counted them before he'd finished explaining. He stopped explaining." },
      { s: 'jungwon', f: 'neutral', t: "You count." },
      { s: 'solar', t: "Everybody counts." },
      { s: 'jungwon', f: 'neutral', t: "No. Everybody adds up. You count. It's different." },
      { s: 'jungwon', f: 'neutral', t: "You'll be good at this." },
      { s: 'solar', t: "I'll be terrible." },
      { s: 'jungwon', f: 'happy', t: "Yes. For a while." },
      { choose: [
        { t: "(Put a stone down where he told you not to.)", stat: { courage: 1 }, then: [
          { n: "She took a white stone and put it down exactly in the place he'd just explained was a terrible place to put a stone, in the middle of her father's black, with no liberties to speak of and nothing to protect it." },
          { n: "Jungwon looked at it for a long time. His face went still. Then he made a very small sound, which in another man would have been a laugh." },
          { s: 'jungwon', f: 'neutral', t: "That's a dead stone." },
          { s: 'solar', t: "It's a brave stone." },
          { s: 'jungwon', f: 'neutral', t: "Those are frequently the same stone." }
        ] },
        { t: "(Let him show you where it goes.)", stat: { knowledge: 1 }, then: [
          { n: "She held the stone over the board, not sure. He reached across, and put two fingers of his right hand over the back of hers, and moved her hand, an inch, two, to a point at the edge of her father's wall, and pressed down, so that her stone and his fingers went to the board together." },
          { n: "Click." },
          { n: "He didn't take his hand away at once. She didn't move hers. The radiator ticked. The clock ticked. Somewhere down the hall her father was telling the fruit man, in the soft voice nobody interrupted, exactly how many pears was too many." },
          { s: 'jungwon', f: 'neutral', t: "There." },
          { s: 'solar', t: "What does it do?" },
          { s: 'jungwon', f: 'neutral', t: "In about forty moves it ruins your father's evening." }
        ] }
      ] },
      { n: "Her father's slippers came back down the hall. They were both sitting exactly where they'd been, a very correct distance apart, when the door opened. He looked at the board. He looked at the white stone. He looked at his daughter in his chair." },
      { s: 'appa', t: "Sol-ah. That's my game." },
      { s: 'jungwon', f: 'neutral', t: "She's playing it very well, Chairman." },
      { s: 'appa', t: "Then she's losing mine." },
      { n: "But he sat down in Dal's chair instead of his own, and let her keep the seat, and leaned forward with his glasses down his nose to see what she'd done, and after a while, very quietly, he started to hum again." },
      { ifEpiRoute: 'haechan', then: [
        { n: "At ten Haechan put his head round the door on his way down the garden, looked at the board, looked at Jungwon, looked at her in her father's chair, and said nothing at all, which from him was a whole speech. Jungwon put a black stone down with a click that was perhaps very slightly louder than necessary." }
      ] }
    ] },

    { id: 'epi-s-jungwon-3', title: 'west wing', hint: "Jungwon is in his room at the Yang house with the board by the window, playing against himself. He's left the door open a hand's width.",
      after: '3/3', until: '3/9', slots: ['after'], events: ['epi-s-alone'], noFlags: [], route: 'jungwon', noRoute: null,
      place: "Incheon · The Yang House · Jungwon's Room", time: 'Daytime', scene: [
      { music: 'epi-s-jungwon' },
      { n: "His room in the west wing was the quietest room she knew, quieter than her own, quieter than the study at four in the morning, a narrow bed made so tight it looked painted on, books shelved by height, nothing on the walls, and by the window the kaya board on its low stand with the two bowls beside it and a game laid out halfway, black and white, him against himself." },
      { n: "He was sitting at it when Mrs. Moon let her in, in a grey sweater with the sleeves pushed up, his chin on his right fist. He stood. He bowed. He asked whether she'd eaten, and whether Mr. Oh had found the inland road, and whether she'd like tea, in that order, as if he'd written them down." },
      { s: 'solar', t: "Yes. Yes. No." },
      { s: 'jungwon', f: 'neutral', t: "Then would you sit." },
      { n: "She sat in the window seat with her back to the glass. Outside the bay was a sheet of grey with nothing on it, the far shore gone, the cranes gone, the whole port rubbed out as if somebody had taken a thumb to it. He sat back down at the board and put a white stone down. Then a black one, in answer. Then he sat with his hand over the black bowl and didn't move." },
      { s: 'jungwon', f: 'neutral', t: "May I see your hand." },
      { n: "Not which hand. He knew which hand. She held it out, palm up, across the little space between the window seat and the board, and he took it in his right and turned it to the grey light." },
      { n: "The blister was healing. A stripe straight across her palm, the skin new and pink and tight, the width of something round and long and gripped hard, for a long time, with everything she had." },
      { s: 'jungwon', f: 'neutral', t: "What were you holding?" },
      { n: "It was the rule. She'd made it, and she'd kept it, and it had cost her and him and Donghyuck more than either of the boys would ever say out loud. She hid nothing from either of them. Not even this." },
      { s: 'solar', t: "A naginata." },
      { n: "He didn't let go. He didn't do anything. His face went perfectly, completely still, which was what it did when he was pleased, and also, she was learning, what it did when he was more frightened than he had words for in any of his languages." },
      { glitch: { near: true } },
      { s: 'jungwon', f: 'neutral', t: "*I remember the weight of it.*" },
      { s: 'solar', t: "*It was lighter there.*" },
      { s: 'jungwon', f: 'neutral', t: "*Everything was lighter there.*" },
      { n: "He bent his head and put his mouth to the healing skin, once, very lightly, beside the blister and not on it, the way you'd touch a stone you'd been told not to touch." },
      { s: 'jungwon', f: 'neutral', t: "I'd like to ask your permission for something." },
      { s: 'solar', t: "You always ask." },
      { s: 'jungwon', f: 'neutral', t: "I always will." },
      { choose: [
        { t: "Granted.", stat: { charm: 1 }, then: [
          { n: "He came and knelt on the window seat, one knee, his right hand flat on the glass beside her head, and kissed her as if the kiss were a document and he intended to read every clause. Slowly. Thoroughly. With great courtesy. She put her hand in his hair, which he'd never once in his life let anybody muss, and mussed it." },
          { s: 'jungwon', f: 'flustered', t: "That's unkind." },
          { s: 'solar', t: "Shall I stop?" },
          { s: 'jungwon', f: 'neutral', t: "I'd like you to continue to be unkind." }
        ] },
        { t: "*Ask me in Chinese.*", then: [
          { n: "He looked at her. Then he leaned in until his mouth was beside her ear, and asked, in Mandarin, very quietly and with perfect grammar, for something she wouldn't have repeated in any language in front of her mother." },
          { s: 'solar', t: "*...Granted.*" },
          { n: "He drew back far enough to look at her face. The dimples were nowhere. He was very, very pleased." }
        ] }
      ] },
      { n: "The window was cold against her back and he was not. Her coat came off one shoulder and then the other. He was unhurried and exact about it, and she had never in her life been so carefully undone by anybody, button by button, as if he were counting them, and she knew he was, and she let him." },
      { n: "One knock on the door. One. Flat and final, the knock of a man who would not, under any circumstances, be coming in." },
      { s: 'sunghoon', f: 'neutral', t: "Jungwon-ah. Mrs. Moon says lunch." },
      { n: "Jungwon closed his eyes. He didn't move away from her. He answered the door in a voice of perfect, freezing politeness, his ears going slowly red." },
      { s: 'jungwon', f: 'neutral', t: "Thank you, Sunghoon. We'll be down in a moment." },
      { n: "Footsteps went away down the corridor. A lighter clicked somewhere near the stairs, three tries, and then menthol, faint, coming back under the door." },
      { s: 'solar', t: "He's smoking." },
      { s: 'jungwon', f: 'neutral', t: "He's leaving the room. He only does that when he's leaving a room." },
      { s: 'solar', t: "He was never in the room." },
      { s: 'jungwon', f: 'neutral', t: "Emotionally, he was." },
      { ifGlitch: 3, then: [
        { n: "When she turned to do up her coat in the window, the grey outside had a line through it, thin, green, like a crack in glass, running from one side of the bay to the other where the far shore should have been. She blinked and it was grey. Behind her, Jungwon had stopped buttoning his cuff. He'd seen it in the glass too. He did the button. He didn't say anything until they were on the stairs, and then only, in Mandarin, very quietly, *I'll tell Donghyuck.*" }
      ] },
      { n: "Before they went down he sat back at the board and looked at it, and took a white stone from the bowl, and held it out to her across the little table without a word." },
      { n: "She took it. She looked at the game, his against himself, at all the places it could go. Then she put it down in a corner, because corners were easy to hold, and he made a small sound that in another man would have been a laugh." },
      { s: 'jungwon', f: 'neutral', t: "Your move, then. I'll be thinking about it all afternoon." }
    ] },

    { id: 'epi-s-jungwon-4', title: 'two syllables', hint: "Mr. Oh is taking you home from the Yang house in the dust-rain. Jungwon has asked, very politely, to see you to your gate.",
      after: '3/10', until: '3/14', slots: ['evening'], events: ['epi-s-dinner'], noFlags: [], route: 'jungwon', noRoute: null,
      place: 'Incheon · The Car', time: 'Evening', scene: [
      { music: 'epi-s-jungwon' },
      { n: "It was raining, and the rain was brown. It came down through the yellow dust and brought it with it, so that it ran down the windscreen of Mr. Oh's car in muddy threads that the wipers pushed aside and the next rain brought back, and the streetlights over the coast road were smeared and orange and soft, like lights seen through tears." },
      { n: "Jungwon had asked whether he might see her home. Not to the car. Home. To the gate. It wasn't done. A man who was to be married didn't ride in the back of his fiancée's family's car to see her to her own front gate like a schoolboy walking a girl home from cram school, and Mr. Oh had looked at him in the rearview mirror for one long second when he got in, and then said nothing at all, and pulled out of the Yang drive so gently she didn't feel the car start." },
      { n: "Mr. Oh's menthol aftershave. The heater. The wipers. Jungwon on the other side of the back seat, upright, his coat buttoned, his right hand on the seat between them, palm down, not touching hers." },
      { n: "He'd been at the table on Monday night. He'd been standing before she'd finished flickering, before Mrs. Bang's ladle hit the floor. And since then he had been more polite than she had ever heard him. He'd thanked Mrs. Bang for the rice three times. He'd apologized to the gate for the gate. Everybody in two houses knew what that meant." },
      { glitch: { near: true } },
      { s: 'jungwon', f: 'neutral', t: "I hope it isn't an imposition. That I came." },
      { s: 'solar', t: "It isn't." },
      { s: 'jungwon', f: 'neutral', t: "Your father didn't seem to mind. I asked him this morning whether he'd mind. He looked at me for some time and then he said, take the long way." },
      { s: 'solar', t: "Mr. Oh's taking the long way." },
      { s: 'jungwon', f: 'neutral', t: "I know. I've been counting the lights." },
      { n: "She looked at his hand on the seat. Then she put hers over it. He turned it over at once, as if he'd been waiting the whole drive with his palm the wrong way up, and held on, his fingers through hers, firm. Not hard. He never did anything hard. He did everything exactly as hard as it needed doing and not one gram more, and he held her hand all the way along the coast road in the brown rain as if somebody were going to come and check." },
      { choose: [
        { t: "*How many lights?*", then: [
          { s: 'jungwon', f: 'neutral', t: "*Forty-four. Forty-five.*" },
          { s: 'jungwon', f: 'neutral', t: "*I keep starting again.*" },
          { s: 'solar', t: "*Why?*" },
          { s: 'jungwon', f: 'neutral', t: "*Because when I get to the end I'll be at your gate.*" }
        ] },
        { t: "(Put your head on his shoulder.)", stat: { kindness: 1 }, then: [
          { n: "She leaned across and put her head on his shoulder. The coat was cold and smelled of nothing at all, which was the strangest thing about him and always had been, and under it his shoulder went rigid with surprise, and then, slowly, by stages, the way a man puts down something heavy he's been carrying too long, it didn't." }
        ] }
      ] },
      { n: "The car turned off the coast road and up the hill, and the lanterns over the Lee gate came up red out of the brown rain, and Mr. Oh brought the car to a stop under them so smoothly that the rain on the roof was the only thing that changed." },
      { n: "Mr. Oh turned off the engine. He looked at the gate in the windscreen." },
      { s: 'mroh', t: "I'll check the gate." },
      { n: "He got out into the rain without an umbrella, and shut his door, and went and stood at the gate with his back to the car and his hands clasped behind him, checking it, carefully, for some time. It was a gate. It had been there since before she was born." },
      { n: "Jungwon didn't let go of her hand. He was looking at their hands. When he spoke it was in the most formal Korean she'd ever heard come out of him, the register for ministers and the dead." },
      { s: 'jungwon', f: 'neutral', t: "I'd like to apologize in advance. For what I'm about to say." },
      { s: 'solar', t: "You don't have to." },
      { s: 'jungwon', f: 'neutral', t: "I know. I'd like to anyway." },
      { n: "He looked up. And then he said it." },
      { s: 'jungwon', f: 'serious', t: "Gaji ma." },
      { n: "Two syllables. *Don't go.* No ending on it at all. No *-seyo*, no *-sipsio*, nothing on the end of it to make it fit to be said to a woman, to a Lee, to his fiancée, to anyone outside his own skin. Plain. Bare. The way you'd say it to a child at a door, or a brother, or somebody you'd known all your life and never once had to be polite to." },
      { n: "He'd said a handful of things to her like that in four months. She could have counted them on one hand, and she had. She'd never heard him say one in a car, or with his eyes open on hers like this, as if he'd decided to let her see exactly what it cost." },
      { flag: 'epi-s-banmal' },
      { n: "She opened her mouth." },
      { choose: [
        { t: "(Almost answer.)", then: [
          { n: "She almost answered. It was right there behind her teeth, whatever it was going to be, the shape of it, and she could feel him wait for it with his whole hand." },
          { n: "Mr. Oh rapped once on the window with one knuckle, the way he'd rapped on car windows to wake her up since she was seven." },
          { s: 'mroh', t: "Home now." },
          { n: "She shut her mouth. Jungwon let out a breath and looked down, and the dimples came, the polite ones, back on like lamps." }
        ] },
        { t: "Say it again.", stat: { courage: 1 }, then: [
          { s: 'jungwon', f: 'flustered', t: "No." },
          { s: 'solar', t: "Jungwon." },
          { s: 'jungwon', f: 'neutral', t: "Once was already too many, for a gentleman. Twice and I'd have to marry you." },
          { n: "He heard what he'd said. He went red from his collar to his hair. She laughed, and it came out wet, and on the other side of the glass Mr. Oh, checking the gate, checked it a little harder." }
        ] },
        { t: "(Hold his hand tighter.)", stat: { kindness: 1 }, then: [
          { n: "She didn't say anything. She held on. As hard as he held, which was exactly as hard as it needed, and then harder." },
          { n: "He looked at their hands. Then he bowed his head over them until his forehead was nearly touching her knuckles, in the back of Mr. Oh's car, in the rain, and stayed there, and didn't say anything else in any register at all." }
        ] }
      ] },
      { n: "He saw her to the gate under Mr. Oh's umbrella, which Mr. Oh had produced from somewhere and held over them both without being asked, getting soaked himself. At the gate Jungwon bowed, correctly, formally, the bow for a family's daughter at a family's door. Then he went back down the hill to where Sunghoon's car was waiting with its lights off, and didn't look back, because he'd have had to stop if he had." }
    ] }
  ]);

  /* ── Yunjin ── */
  add('yunjin', 'friend', [
    { id: 'epi-s-yunjin-1', title: 'bad coffee', hint: "Yunjin's purple Veloster is idling at the side door with two cans of vending-machine coffee on the dash. The tide's out.",
      after: '2/18', until: '2/23', slots: ['after'], events: ['epi-s-kitchen'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Mudflats', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The purple Veloster smelled of strawberry air freshener and wet puffer and the inside of a thermos, and it was parked where it always parked when they did this, on the gravel at the top of the seawall with its nose to the sea, except that the sea wasn't there. It was low tide. The mudflats ran out from under the wall to the edge of the world, wet and shining and brown, cut through with little silver channels, with the gulls walking about on them like they owned the place and a line of old fishing stakes going out into nothing." },
      { n: "They'd done this since tenth grade. When Solar couldn't sleep because the tide was going out, which was every time the tide went out, Yunjin had driven her here, first in her father's boxy grey Grandeur with a learner's sticker on it and then in the Veloster, and they'd sat with the heater on and two cans of the worst coffee in Korea from the machine at the gas station, and watched the mud, and said nothing, or everything, depending." },
      { s: 'yunjin', f: 'neutral', t: "This coffee is so bad. This is the worst one yet. I think they put a battery in it." },
      { s: 'solar', t: "You say that every time." },
      { s: 'yunjin', f: 'happy', t: "And every time I'm right. That's called a tradition." },
      { n: "She had her feet up on the dash in a pair of slippers she'd driven in, and the pink camera on its strawberry strap round her wrist, and every so often she lifted it and took a photograph of the mud through the windscreen, for no reason Solar had ever been able to work out." },
      { s: 'solar', t: "What do you even do with all those?" },
      { s: 'yunjin', f: 'neutral', t: "Nothing. I've got eleven hundred photos of mud. I'm going to have an exhibition when I'm dead." },
      { n: "A gull landed on the bonnet, looked at them through the glass, and walked off the other side in disgust." },
      { s: 'solar', t: "Do you think about Japan?" },
      { n: "Yunjin took a long pull of the battery coffee and made a face." },
      { s: 'yunjin', f: 'neutral', t: "Okay. So. Here's the thing about Japan." },
      { s: 'yunjin', f: 'neutral', t: "Twelve months. Twelve months of rice balls from the same shop and a dorm TV that only got the weather and some guy in the lounge who ate cup noodles at two in the morning like it was a sacred ritual. Monsters. Actual monsters, Sol. In a tower. I learned to say 'one more, please' in Japanese and literally nothing else." },
      { s: 'yunjin', f: 'serious', t: "And I would go back. Tomorrow. Isn't that disgusting?" },
      { s: 'solar', t: "Yes." },
      { s: 'yunjin', f: 'happy', t: "Thank you. It's disgusting. Their convenience-store egg sandwich ruined my life." },
      { n: "She laughed. Then she didn't, quite, and looked out at the mud, and turned the camera over in her lap." },
      { s: 'yunjin', f: 'sad', t: "I had a whole year to be sad somewhere nobody knew him. Nobody there had ever met my dad. Nobody looked at me like that. I could just. Be sad. In a place where it was just weather." },
      { s: 'yunjin', f: 'sad', t: "And then I came back and it's still December in my mom's face." },
      { n: "She said it without crying, in her gravel voice, flat, the way you'd read out a price. The tide was all the way out. Not a single wave on the whole bay. It made the car very quiet." },
      { choose: [
        { t: "(Take her hand.)", stat: { kindness: 1 }, then: [
          { n: "Solar took her hand off the camera and held it. Yunjin let her. Yunjin's hands were always cold, even in summer, and she always said it was because her heart was too big and used up all the blood." },
          { s: 'yunjin', f: 'neutral', t: "Don't. If you're nice to me I'll cry and then I'll look like a muppet in all the photos." },
          { s: 'solar', t: "You're not in the photos." },
          { s: 'yunjin', f: 'neutral', t: "I'm in the *reflection*, Sol. I'm always in the reflection." }
        ] },
        { t: "It was a terrible holiday.", stat: { charm: 1 }, then: [
          { s: 'yunjin', f: 'happy', t: "It was the WORST holiday. Zero stars. I'd book it again in a heartbeat." },
          { s: 'solar', t: "You'd complain the whole time." },
          { s: 'yunjin', f: 'happy', t: "I *did* complain the whole time. That's how you know I liked it." }
        ] },
        { t: "I'm not sorry we went.", then: [
          { n: "Yunjin looked at her for a long moment, over the can." },
          { s: 'yunjin', f: 'neutral', t: "No. Me neither." },
          { s: 'yunjin', f: 'neutral', t: "Don't tell anybody. They'll think I'm weird. Weirder. I'm already the girl who drives a purple car." },
          { s: 'solar', t: "Purple was a cry for help." },
          { s: 'yunjin', f: 'happy', t: "Purple was a cry for help, and nobody came, and now I'm stuck with it." }
        ] }
      ] },
      { n: "Out on the flats the little silver channels began, very slightly, to move. Nobody else would have seen it yet. Solar felt it in her teeth, the way she always did, the whole bay drawing breath to come back." },
      { s: 'solar', t: "It's turning." },
      { s: 'yunjin', f: 'surprised', t: "How do you DO that. There's literally nothing happening. It's mud." },
      { s: 'solar', t: "It's turning, Jin." },
      { n: "Yunjin lifted the pink camera and took a photograph of the mud, exactly then, the moment it turned, and looked at the little screen, and showed it to her. It was mud. It looked exactly like the other eleven hundred." },
      { s: 'yunjin', f: 'happy', t: "Exhibition piece. 'It's turning, Jin.' Eight million won." },
      { n: "She started the car. They drove home with the heater on full and the coffee cans rolling about in the footwell, and behind them the sea came back in across the mud, the way it always did here, faster than anybody who didn't know it ever believed." }
    ] },

    { id: 'epi-s-yunjin-2', title: 'the chat, live', hint: "The daeboreum committee has taken over a nail salon in Songdo, and Yunjin is saving you the chair by the window.",
      after: '2/25', until: '3/2', slots: ['after'], events: ['epi-s-girls'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Songdo', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The nail salon was on the second floor of a glass building in Songdo that was mostly empty, between a dental clinic and an English academy with a cartoon owl on the door, and it had six chairs and two nail technicians and a television on the wall playing a drama with the sound off, and the daeboreum committee had taken every chair." },
      { n: "They were all on their phones. All five of them. Sitting side by side in a row with their hands in little bowls of soapy water, texting each other." },
      { s: 'chaewon', t: "Solar. You're here. Good. Sit. I booked you the end one. Yunjin said you'd want the window." },
      { s: 'sakura', t: "She said you'd want to be near an exit." },
      { s: 'yunjin', f: 'neutral', t: "I said *window*. Sakura made up the exit." },
      { s: 'sakura', t: "She has exit energy." },
      { n: "Solar sat. She did, in fact, want to be near an exit. She counted them on the way in out of habit, two, and the fire stairs, and a window that opened, and she sat in the end chair with her coat still on and put her hands in the bowl of soapy water like everybody else." },
      { n: "Her phone buzzed in her lap. She looked at it. It was the committee. It was Eunchae, three chairs away." },
      { phone: [ { from: 'eunchae', t: "she's here she's here. she counted the doors" } ] },
      { s: 'solar', t: "...I can see you, Eunchae." },
      { s: 'eunchae', t: "I know. This is more fun." },
      { phone: [
        { from: 'kazuha', t: "solar-ssi hello ☺" },
        { from: 'chaewon', t: "colors. NOW. i'm ordering" },
        { from: 'sakura', t: "black" },
        { from: 'chaewon', t: "you always say black" },
        { from: 'sakura', t: "and i'm always right" }
      ] },
      { n: "It went on like that. Kazuha, two chairs down, reading her horoscope out loud and then typing it into the chat as well, as if it needed to exist in both places. Sakura playing a game on a handheld under the table with her free hand, her face completely blank as she killed things. Chaewon with a little notebook open on her knee, writing everybody's color down, because she didn't trust the chat to remember. The nail technicians, who had clearly been doing this for years, ignoring all of them." },
      { s: 'yunjin', f: 'neutral', t: "Hers is dark. She always does dark." },
      { s: 'chaewon', t: "Why?" },
      { s: 'yunjin', f: 'neutral', t: "Her thumbnail. It's a whole thing." },
      { n: "Solar looked at Yunjin. Yunjin looked at her soapy water with great innocence. There was a faint brown stain at the edge of Solar's left thumbnail, the iodine that never quite came out, and it had been there under dark polish since she was sixteen, and Yunjin was the only person in the world who'd ever asked why and been told." },
      { s: 'eunchae', t: "Where were you at Seollal, anyway? Yunjin said you were sick." },
      { n: "She said it brightly, to her phone, the way you'd ask about the weather. Eunchae noticed things. It was apparently her whole personality. Yunjin's head came up very fast." },
      { choose: [
        { t: "I had a fever. Thirty-nine and something. I missed everything.", stat: { charm: 1 }, then: [
          { n: "Rueful, a little smile, the hand to the forehead, the line she'd been handed on the stairs at dawn by her own father and had now said so many times it had worn smooth in her mouth like a sweet." },
          { s: 'eunchae', t: "Ugh. At New Year. That's the worst. Did you get any money?" },
          { s: 'solar', t: "They slid the envelopes under my door." },
          { s: 'eunchae', t: "That's actually iconic." }
        ] },
        { t: "In bed. The whole time. My aunts sent eleven boxes of fruit.", then: [
          { s: 'kazuha', t: "Eleven?" },
          { s: 'solar', t: "Mostly pears." },
          { s: 'sakura', t: "That's a threat. Eleven boxes of pears is a threat." },
          { n: "Everybody laughed, and Eunchae went back to her phone, and that was the end of it." }
        ] }
      ] },
      { glitch: { strain: 1 } },
      { n: "Yunjin, three chairs down, didn't laugh. She looked at Solar along the row with her hands in the soapy water, and her face did something small and fond and sad at the same time, and then she rolled her eyes enormously, for everyone, and said the drama on the TV had better not kill the second lead or she was writing a letter." },
      { choose: [
        { t: "(Let Yunjin pick your color.)", then: [
          { n: "Yunjin picked a dark red so dark it was nearly black, the color of the inside of a plum, and the technician painted it on in three coats, and it covered the stain completely." },
          { s: 'yunjin', f: 'happy', t: "There. Mysterious. Expensive. Your mom will hate it a normal amount." }
        ] },
        { t: "(Pick something bright, for once.)", stat: { courage: 1 }, then: [
          { n: "She pointed at a pink. A loud one. A pink like a cartoon, like Yunjin's camera, like nothing a Lee daughter had ever worn on her hands at a dinner. The whole row went quiet." },
          { s: 'chaewon', t: "...She can do that?" },
          { s: 'yunjin', f: 'surprised', t: "I don't know! She's never done that! Somebody take a photo!" },
          { n: "Four phones came up. The stain on her thumbnail showed through the pink, faint and brown. She looked at it and didn't mind." }
        ] }
      ] },
      { n: "In the Veloster afterward, with the strawberry air freshener and her nails held out in front of her in the heater to dry, Yunjin didn't start the car straight away." },
      { s: 'yunjin', f: 'neutral', t: "Thanks for coming." },
      { s: 'solar', t: "You dragged me." },
      { s: 'yunjin', f: 'neutral', t: "I know. Thanks for being dragged." },
      { s: 'yunjin', f: 'neutral', t: "They needed somebody to look after that wasn't me. They've been looking after me since the funeral and they're bad at it and it's killing them. Chaewon made a *rota*, Sol." },
      { n: "She started the car. On the dashboard her phone lit up, and lit up, and lit up again. The committee, from four different cars, still talking." }
    ] },

    { id: 'epi-s-yunjin-3', title: 'mr. and mrs. kim', hint: "Yunjin is on the back step in a grey hoodie three sizes too big for her, feeding the koi.",
      after: '3/3', until: '3/9', slots: ['evening'], events: ['epi-s-dust'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The dust had come into the house with everybody's shoes. Mrs. Bang had given up on the hall. There was a grit on the back step that crunched when Solar sat down on it, and the light over the kitchen door had a yellow halo round it, and the sky over the garden was no color at all, just a lid." },
      { n: "Yunjin was in her father's hoodie. Grey, washed soft, with a bleach spot on the left cuff the shape of a country nobody had found yet, and so big on her the sleeves hung past her hands, so that when she fed the fish she had to push one back with her teeth. She'd worn it every night since the dust came. She'd never said why. Solar had never asked." },
      { n: "In the bucket between Yunjin's slippers, Mr. and Mrs. Kim went round and round. She shook Mrs. Bang's flakes over the water a pinch at a time, very seriously, like a woman salting soup for a man she was frightened of." },
      { s: 'yunjin', f: 'neutral', t: "He used to talk to them. Did I tell you that?" },
      { s: 'solar', t: "No." },
      { s: 'yunjin', f: 'neutral', t: "Every morning. On the balcony. In his pajamas with his glasses on top of his head where he couldn't find them. *Good morning, Mr. Kim. Good morning, Mrs. Kim. Did you sleep? Any news?*" },
      { s: 'yunjin', f: 'happy', t: "They never had any news. He asked anyway. Every day. Like they were going to say, actually, Seungwoo-ssi, there's been a development." },
      { n: "She laughed. It came out of her gravel voice in pieces. Solar sat beside her on the gritty step and didn't say anything, because there wasn't anything, and because Yunjin had always hated it when people said the thing." },
      { s: 'yunjin', f: 'neutral', t: "Good evening, Mr. Kim. Good evening, Mrs. Kim. Any news?" },
      { n: "The fish came up and kissed the flakes and went down again." },
      { s: 'yunjin', f: 'neutral', t: "See. Nothing. Classic." },
      { n: "She pulled the hoodie's cuff down over her hand and looked out at the garden, at the dust lying on the dark, at the annex light at the bottom of it." },
      { s: 'yunjin', f: 'serious', t: "I'm not being spooky." },
      { s: 'solar', t: "I know." },
      { s: 'yunjin', f: 'serious', t: "I'm just saying I saw the window. In the dust. The shop window. With the. The armband. I know what that armband is, Sol. I had to look at it every day for a year. You used to leave it on the kitchen table and I'd put my cereal on it." },
      { s: 'yunjin', f: 'serious', t: "So I saw that. That's all. I'm not being spooky. I'm being accurate." },
      { n: "She was, in fact, being very brave, in a hoodie three sizes too big, on a back step in the dark, and they both knew it, and neither of them was going to say so." },
      { choose: [
        { t: "I've been seeing things since I got back.", stat: { courage: 1 }, then: [
          { n: "It was the rule. The oldest one, older than the boys, from tenth-grade English and two girls seated together by their surnames. She told Yunjin everything. She told her now. The bell on the radio, the tea gone cold at midnight, the harbor clock, the moon. Not all of it. Enough." },
          { n: "Yunjin listened with the fish flakes held in her fist inside the cuff. When it was done she nodded slowly, several times, like a woman being told the price of a car." },
          { s: 'yunjin', f: 'neutral', t: "Okay." },
          { s: 'yunjin', f: 'neutral', t: "Okay okay okay. Cool. That's fine. That's normal. That's a normal amount of haunted." }
        ] },
        { t: "I'm sorry you had to see that.", then: [
          { s: 'yunjin', f: 'surprised', t: "Why? It's not your fault some window's got a costume on." },
          { s: 'yunjin', f: 'neutral', t: "And if it is your fault, I don't care. I've been through worse with you. I've been through a *pirate ship*." },
          { n: "Solar had no idea what pirate ship she meant. She suspected Yunjin didn't either. It didn't matter. It worked." }
        ] },
        { t: "(Take the fish food and feed them yourself.)", stat: { kindness: 1 }, then: [
          { n: "She took the flakes out of Yunjin's sleeve, gently, and shook a pinch onto the water, and leaned over the bucket." },
          { s: 'solar', t: "Good evening, Mr. Kim. Good evening, Mrs. Kim." },
          { s: 'solar', t: "Any news?" },
          { n: "Yunjin made a sound beside her that wasn't a laugh and wasn't anything else either, and put her face in the hoodie's sleeve, and stayed like that, and Solar went on feeding the fish." }
        ] }
      ] },
      { n: "Mrs. Bang came out with a blanket, which she threw over both of them without a word as if covering furniture, and a dish of tangerines, and went back in. Through the kitchen window they could hear her telling Pyo that the fish didn't need a blessing, they needed a pond." },
      { n: "They sat until the tangerines were gone. Then Yunjin went up, in the hoodie, with her hands lost in the sleeves." },
      { n: "Later, from her own bed, Solar could see the square of light Yunjin's window laid on the garden beside her own. It was on. It was always on, now. She'd asked Yunjin about it once, the first week, and Yunjin had said she couldn't sleep in the dark, which was a lie, because Yunjin had slept through a typhoon in a tent in Gapyeong in tenth grade with no light at all." },
      { n: "Tonight, through the wall, very quietly, Yunjin said the real reason. Maybe to her. Maybe to nobody." },
      { s: 'yunjin', f: 'sad', t: "If he comes back he'll want to know which window." }
    ] },

    { id: 'epi-s-yunjin-4', title: 'the floor', hint: "Yunjin has turned up at your door with two blankets, a pillow and the rabbit socks. It isn't a question.",
      after: '3/10', until: '3/14', slots: ['evening'], events: ['epi-s-dinner'], noFlags: [], route: 'family', noRoute: null,
      place: 'Incheon · The Lee House · Her Room', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "She came in without knocking with two blankets, a pillow, a laptop, a bag of shrimp crackers, and the rabbit socks on her feet, the ones with ears, and dumped all of it on Solar's floor in front of the radiator and started building a nest." },
      { s: 'solar', t: "What are you doing?" },
      { s: 'yunjin', f: 'neutral', t: "Moving in." },
      { s: 'solar', t: "You live next door." },
      { s: 'yunjin', f: 'neutral', t: "And now I live on your floor. It's called downsizing. It's very fashionable. Everybody in New York does it." },
      { n: "She folded the first blanket double, lengthwise, with the precision of a woman who'd been taught to make hospital corners by a piano teacher, and laid it along the floor right beside the bed, close, so close that if Solar put her feet down in the night she'd put them on Yunjin." },
      { n: "It wasn't an accident. Nothing about the placement was an accident. Solar looked at it and understood exactly what it was." },
      { n: "On Monday night at dinner Yunjin had been sitting opposite. She'd had a dumpling halfway to her mouth when Solar went thin in the light over the table, thin as paper, the rice showing through her hand, and she'd put the dumpling down, and she'd looked across the table at her best friend becoming a shape the light went through, and she hadn't made a single joke. Not one. Not at the table and not after and not since. Yunjin always made a joke." },
      { s: 'solar', t: "Jin." },
      { s: 'yunjin', f: 'neutral', t: "No. Don't. I'm building." },
      { choose: [
        { t: "You don't have to do this.", then: [
          { s: 'yunjin', f: 'serious', t: "I know I don't have to. I'm a free woman. I've got a car and a camera and four puffers. I'm choosing." },
          { s: 'yunjin', f: 'neutral', t: "Get into bed, wifey. Some of us have a nest to finish." }
        ] },
        { t: "(Help her make the nest.)", stat: { kindness: 1 }, then: [
          { n: "She got down on the floor and helped. They argued about pillow placement. Yunjin won, because Yunjin always won arguments about pillows, and when it was done it was a very good nest, deep and warm and right up against the bed, and Yunjin got into it and pulled the blanket up to her chin and looked enormously pleased with herself." },
          { s: 'yunjin', f: 'happy', t: "Five stars. Would sleep on a floor again." }
        ] },
        { t: "Fine. But you're not allowed to snore.", stat: { charm: 1 }, then: [
          { s: 'yunjin', f: 'surprised', t: "*I* don't snore. *You* snore. You snore like a tiny boat." },
          { s: 'solar', t: "Who told you that?" },
          { n: "Yunjin smiled the smile of a woman who knew things about the delivery boy and the annex and would carry them to her grave, and said nothing, and opened the shrimp crackers." }
        ] }
      ] },
      { n: "They watched a drama on the laptop on the floor with Solar's head hanging over the edge of the bed so she could see the screen upside down. It was the one where the second lead was dying. Yunjin had seen it before. She narrated over every scene, telling the characters what they were doing wrong, telling the second lead to go to a hospital, a real one, not a drama one, and eating shrimp crackers in the dark with the screen lighting her face blue." },
      { n: "At some point she stopped narrating. Solar thought she'd fallen asleep. Then a hand came up out of the nest in the dark and closed round Solar's ankle, where it hung over the edge of the bed, and held on. Not hard. Just there. A cold hand, because Yunjin's hands were always cold." },
      { s: 'yunjin', f: 'serious', t: "If you go anywhere tonight you're stepping on me first." },
      { s: 'solar', t: "Okay." },
      { s: 'yunjin', f: 'serious', t: "I mean it, Sol. I'll wake up. I'll scream. I'll wake up your whole house. I'll wake up the *fish*." },
      { s: 'solar', t: "Okay." },
      { s: 'yunjin', f: 'neutral', t: "Okay." },
      { n: "The hand stayed. The drama ended. The second lead died, the way he always did, and Yunjin said a very rude word to the laptop and closed it, and the room went dark except for the strip of light from the landing under the door and, far down the garden, the annex." },
      { n: "She fell asleep holding Solar's ankle. She snored. Solar lay above her in the dark listening to it, with a cold hand round her ankle and the tide going out under the house, and for the first time since Monday, she didn't count anything at all." }
    ] }
  ]);

  /* ── Appa ── */
  add('appa', 'friend', [
    { id: 'epi-s-appa-1', title: 'seven down', hint: "Your father is in the study with the evening paper folded to the crossword and a blue ballpoint, and he's stuck.",
      after: '2/20', until: '2/23', slots: ['evening'], events: ['epi-s-stair'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Study', time: 'Evening', scene: [
      { music: 'epi-s-family' },
      { n: "The study door was open a hand's width, which in this house was an invitation, and her father was at his desk under the lamp with the evening paper folded to the crossword and his reading glasses down his nose on their cord, and an Esse Light lying unlit in the ashtray beside him, because he didn't smoke in front of her and never had, though she'd been able to smell it on his cardigan since she was three." },
      { n: "He was humming. Something old and flat, a trot song from before she was born, the tune going round and round on the same four bars the way it did when he was thinking." },
      { s: 'appa', t: "Sol-ah. Come and be clever." },
      { n: "She came. She sat on the arm of Dal's chair by the radiator, the cracked leather one, where Dal used to do the Sunday crossword with a pencil behind his ear and say every answer out loud whether he was right or not. Nobody sat in it properly unless her father pointed at it. She and her father sat on the arms." },
      { s: 'appa', t: "Seven down. Two syllables." },
      { s: 'appa', t: "'Comes twice a month, at the full moon and the dark. Also what you add to the pot.'" },
      { n: "He read it out in the voice he used for everything, soft, unhurried, the voice nobody in the port had interrupted in thirty years, and then looked at her over his glasses and waited." },
      { choose: [
        { t: "Sari.", stat: { knowledge: 1 }, then: [
          { n: "Spring tide. The big tides, the ones that came with the full moon and the new, when the water came highest and went out furthest and the mud ran out to the horizon. And sari, the noodles you dropped into the pot at the end, when the soup was nearly gone and nobody wanted to stop." },
          { n: "He looked at the puzzle. He looked at her. He wrote it in, in his small square blue capitals, very carefully, the way he wrote everything." },
          { s: 'appa', t: "Your mother's daughter." },
          { s: 'solar', t: "Eomma doesn't know the tides." },
          { s: 'appa', t: "No. But she'd have got the noodles first." }
        ] },
        { t: "Is it a tide?", then: [
          { s: 'appa', t: "You tell me. You're the one who can't sleep at low water." },
          { n: "She thought. The full moon and the dark. The big tides, highest in and furthest out. And then the pot, and the noodles at the end of the soup, and it clicked, and she laughed out loud." },
          { s: 'solar', t: "Sari." },
          { n: "He wrote it in, square and blue, and hummed the four bars again, pleased." }
        ] }
      ] },
      { flag: 'epi-s-sari' },
      { n: "They did the rest of it together. Or he did it, and read her the clues he already knew the answers to, so that she could say them, and pretended to write them in a moment after she did. She saw him do it. She let him. It was the oldest game in this study. He'd played it with her since she could read, at this desk, under this lamp, with her doing her homework under it and listening to everything." },
      { n: "When it was done he folded the paper and laid his glasses on top of it and looked at her for a while, the way he'd looked at her on the seventh stair, as if he were testing a board to see if it would hold his weight." },
      { s: 'appa', t: "The fever suited you. You look rested." },
      { n: "There it was. Gently. Very gently. A man laying his palm flat on a board." },
      { choose: [
        { t: "I slept a lot.", then: [
          { n: "Light, a little rueful, with a shrug, the daughter's voice for parents and church. It was true, in a way. In another bed, in another country, for a year." },
          { s: 'appa', t: "Good." },
          { n: "He said it as if he believed her. He polished his glasses on his cardigan, not slowly, not angrily, just polishing them, and put them back on." }
        ] },
        { t: "Mrs. Bang wouldn't let me out of bed.", stat: { charm: 1 }, then: [
          { s: 'appa', t: "No. She wouldn't." },
          { n: "He smiled a little at the paper. Mrs. Bang hadn't had the chance to keep her in bed or out of it. They both knew that. He let her say it anyway, the way he'd let her say the crossword answers he already knew." }
        ] }
      ] },
      { glitch: { strain: 1 } },
      { n: "He didn't ask anything else. He picked up the unlit Esse Light and turned it over in his fingers and put it down again." },
      { s: 'appa', t: "Your mother says you're too thin." },
      { s: 'solar', t: "Eomma says that every day." },
      { s: 'appa', t: "She's right every day. Mrs. Bang's made soup. Go and eat some, Sol-ah, and then go to bed." },
      { n: "At the door she looked back. He'd unfolded the paper again, to the back page, where there was a second crossword, the hard one, that he never finished and always started, and he was humming the four bars, and he didn't look up, and she knew from the back of his neck that he'd been listening to her go all the way to the door." }
    ] },

    { id: 'epi-s-appa-2', title: 'trot', hint: "There's a trot tape playing in your father's study, and two people are singing along to it, and only one of them is your father.",
      after: '2/25', until: '3/9', slots: ['evening'], events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Study', time: 'Evening', scene: [
      { music: 'epi-s-family' },
      { n: "The tape was older than she was. It lived in the cassette player on the study shelf and had lived there since the Olympics, a trot compilation with the label worn off it by her father's thumb, and when he was in a good mood he played side A, and when he was in a very good mood he played side B, which had the songs on it that made her mother leave the room." },
      { n: "It was side B." },
      { n: "Her father was at the board under the lamp, waiting for her, with the bowls set out and the black ones on his side because he always took black, he said, so that she'd have the advantage, and she'd never once in her life been able to use it. And in Dal's chair by the radiator, in his socks, with his feet up on the coal scuttle and his arms folded and his head back, Haechan was singing." },
      { n: "He was singing very well. He was singing so well that the man on the tape sounded tired. He did the little catch in the long notes and the slide down at the end of each line, and on the chorus her father joined in under his breath, without seeming to know he was doing it, humming the harmony an octave down." },
      { s: 'solar', t: "Appa. Is he allowed in here?" },
      { s: 'appa', t: "He came to tell me the gate's fixed." },
      { s: 'solar', t: "The gate wasn't broken." },
      { s: 'appa', t: "That's what I said. He's been telling me for an hour." },
      { s: 'haechan', f: 'happy', t: "Evening, agasshi. Your father cheats." },
      { s: 'appa', t: "Your father plays black, son. That's not cheating, that's generosity." },
      { n: "She sat down. They played. She was terrible, the way she was always terrible, counting every stone and then not trusting the count. Her father took one corner from her and then the next, slowly, with his glasses down his nose and the trot going, and every time he did, Haechan, from Dal's chair, sucked his teeth like an old man at a cockfight." },
      { s: 'haechan', f: 'neutral', t: "Not there, agasshi." },
      { s: 'solar', t: "You don't know how to play." },
      { s: 'haechan', f: 'neutral', t: "I know how to lose. Dal taught me. That's the bit I'm good at." },
      { s: 'appa', t: "Son. If you know so much, sit here." },
      { s: 'haechan', f: 'neutral', t: "I'd beat you, Chairman. And then where would I sleep." },
      { n: "Her father laughed. A real one, short, surprised out of him, his shoulders going. She hadn't heard it since she got back. She hadn't, she realized, heard it since before Christmas." },
      { choose: [
        { t: "(Sing the chorus with them.)", stat: { charm: 1 }, then: [
          { n: "The chorus came round. She sang it. Flat, on purpose, the way her father did at weddings, and her father looked up from the board at her over his glasses, and then put his head back and sang it properly, full voice, the way she'd only ever heard him sing it in the car with the windows up. Haechan stopped singing entirely to listen to the Chairman of Haesong Shipping do the high bit." },
          { s: 'haechan', f: 'surprised', t: "Hoejangnim. You've been holding out on me for seven years." },
          { s: 'appa', t: "Seven. And I'll hold out for seven more." }
        ] },
        { t: "(Put a stone down where Haechan says not to.)", stat: { courage: 1 }, then: [
          { n: "She put it down exactly where Haechan had said not there. Haechan put his hand over his eyes. Her father looked at the stone for a long time, polishing his glasses, slowly." },
          { s: 'appa', t: "...Who taught you that?" },
          { s: 'solar', t: "Nobody." },
          { s: 'appa', t: "Then nobody's a better teacher than me. Again." }
        ] },
        { t: "(Watch them instead of the board.)", stat: { kindness: 1 }, then: [
          { n: "She watched them. Her father with his glasses on their cord, humming. Haechan in Dal's chair with his feet on the scuttle, singing at the ceiling. They didn't look at each other. They didn't need to. Haechan knew every word of every song on side B because he'd learned them in the car with her father, at seventeen, eighteen, nineteen, all the long nights driving him home, and her father knew Haechan knew, and that was all. That was a whole conversation." }
        ] }
      ] },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'haechan', f: 'serious', t: "The young master plays better than you, agasshi. I'm only saying it because it's true and it hurts me." }
      ] },
      { ifEpiRoute: 'haechan', then: [
        { n: "When her father went to turn the tape over, Haechan reached over from Dal's chair without getting up and moved one of her white stones half an inch, to a better place, with one finger, and was back in the chair with his arms folded before her father turned round. She looked at him. He looked at the ceiling and sang." }
      ] },
      { n: "She lost. Of course she lost. Her father counted it out for her, stone by stone, and wrote the score on the margin of his crossword in small square blue figures, and then, under it, as if it were nothing, the date. He did that. She'd only just noticed. Every game, the date." },
      { s: 'appa', t: "Same time tomorrow, Sol-ah." },
      { s: 'haechan', f: 'happy', t: "I'll be here, Chairman." },
      { s: 'appa', t: "You weren't asked, son." },
      { s: 'haechan', f: 'neutral', t: "I know. I'll be here anyway." }
    ] },

    { id: 'epi-s-appa-3', title: 'the cleat', hint: "Your father is in the study with a length of old rope across his knees and the brass doorstop in his lap.",
      after: '3/10', until: '3/14', slots: ['evening'], events: ['epi-s-dinner'], noFlags: [], route: 'family', noRoute: null,
      place: 'Incheon · The Lee House · Study', time: 'Evening', scene: [
      { music: 'epi-s-family' },
      { n: "The doorstop in the study had been a cleat off her grandfather's first boat. Brass, two horns and a heavy base, worn bright in the middle where the rope had run over it for twenty years before the boat went for scrap and her grandfather unscrewed it from the deck with his own hands and carried it home on the bus. It had held the study door open her whole life. She'd never once seen anybody move it." },
      { n: "Tonight it was in her father's lap. And across his knees, coiled, there was a length of old rope, thick, tarred, grey with age, that smelled even from the door of salt and diesel and the bottom of a boat." },
      { s: 'appa', t: "Shut the door, Sol-ah." },
      { n: "She shut it. Without the cleat it swung, and she had to put her back against it. He watched her do that and nodded, as if that were the first part of the lesson." },
      { n: "He hadn't said anything at dinner, on Monday. When she'd flickered, when the light had gone through her, when Mrs. Bang's ladle hit the floor and her mother's hand went to her mouth and both boys were on their feet, her father had put his glasses down on the tablecloth, very slowly, the way he put them down when something had happened that he would have to think about for a long time. And then he'd picked up his spoon. And so had everybody else." },
      { n: "He hadn't said anything since. He didn't say anything now. He set the cleat on the desk under the lamp, screwed down to nothing, and held out the end of the rope." },
      { s: 'appa', t: "Come here. Give me your hands." },
      { s: 'solar', t: "Appa?" },
      { s: 'appa', t: "Every Lee boy learns this on the quay before he's ten. I never let you near the ropes. Your mother would have had my head off, and she'd have been right." },
      { s: 'appa', t: "You're not a boy and you're not ten. Give me your hands." },
      { n: "She gave him her hands. He put the rope into them. It was heavier than it looked, and rougher, and colder, and he put his own hands over hers, the big square backs of them, the old ring, and showed her." },
      { n: "Round the far horn first. Then across the middle, over the top, and round the near horn, so it made a figure eight. Then again. Then a turn underneath, the rope folded back on itself so it locked, so that the harder the boat pulled the tighter it held." },
      { s: 'appa', t: "Again." },
      { n: "She did it again. She got the locking turn wrong and the whole thing slid off the horn. He took it off and gave her the end." },
      { s: 'appa', t: "Again." },
      { choose: [
        { t: "(Do it again. Slowly. Count the turns.)", stat: { proficiency: 1 }, then: [
          { n: "She counted. Round, one. Across, two. Round, three. Across, four. Under. Lock. She pulled, and it held, and she pulled harder, and it held harder." },
          { s: 'appa', t: "You counted." },
          { s: 'solar', t: "You count money with your lips moving. I've seen you." },
          { n: "He looked, for a second, as if she'd hit him. Then he laughed, very quietly, through his nose." }
        ] },
        { t: "(Do it again with your eyes shut.)", stat: { courage: 1 }, then: [
          { n: "She shut her eyes. Round, across, round, across, under. She felt the rope bite and lock under her fingers in the dark, and opened her eyes, and it was right." },
          { s: 'appa', t: "Who taught you to do things with your eyes shut." },
          { s: 'solar', t: "You did. You used to make me find the light switch in the hall without turning anything on." },
          { s: 'appa', t: "That was so you wouldn't wake your mother." },
          { s: 'solar', t: "It was so I'd know where everything was in the dark." },
          { n: "He didn't argue. He looked at the knot." }
        ] }
      ] },
      { flag: 'epi-s-cleat' },
      { n: "She tied it six times. Seven. He made her untie it and tie it again until she could do it without thinking, until her palms were red and smelled of tar, until it was in her hands and not in her head, the way he said everything worth knowing ought to be. He didn't say anything else the whole time. Only *again*." },
      { n: "When it was right, when it was right every time, he sat back in his chair and took his glasses off and held them, and didn't polish them. He just held them. She thought he might tell her why. He didn't. He was not a man who said why." },
      { n: "She asked anyway." },
      { s: 'solar', t: "Appa. Why now?" },
      { n: "He looked at the cleat for a long time. At the knot she'd made on it. Under the lamp, his face had gone very old and very plain, the way it only did at four-thirty in the morning with the paper, when he thought there was nobody on the stairs." },
      { s: 'appa', t: "So you can tie up." },
      { s: 'appa', t: "Wherever you come in." },
      { n: "That was all. That was the whole of it. He put his glasses back on, and picked up the paper, and found the crossword, and uncapped the blue ballpoint, and began, very quietly, to hum." },
      { n: "She didn't move for a while. Then she untied the knot, and coiled the old rope the way he'd coiled it, and put it back across the cleat, and set the cleat back on the floor against the door, where it had always been. He didn't look up. But when she let herself out, and the door stayed open behind her on its own, held, he stopped humming. Just for a second. Then he went on." }
    ] }
  ]);

  /* ── Eomma ── */
  add('eomma', 'friend', [
    { id: 'epi-s-eomma-1', title: 'the pears', hint: "Your mother is in the sunroom with the orchids, a stack of good cards, and a fountain pen she'd like you to use.",
      after: '2/19', until: '2/27', slots: ['after'], events: ['epi-s-eomma'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Sunroom', time: 'Daytime', scene: [
      { music: 'epi-s-family' },
      { n: "The sunroom in February was the only warm room in the house that didn't smell of food. It smelled of wet soil and the jasmine tea in the tin on the side table and, very faintly, her mother's perfume. The glass ran with condensation on the inside, so the garden outside was only green and grey shapes, and on every shelf the orchids stood in their pots with their long stems tied to bamboo canes, white and violet and a pale spotted yellow, the only things in the house her mother had ever been seen to talk to." },
      { n: "Her mother was in the tapestry chair with a cup in both hands. Not drinking. Holding it. Her hair was up, perfectly, the long black pin through it, and she wore a cream cardigan, and she looked, Solar thought, as if she had been sitting exactly like that, holding the cup exactly like that, for some time before anybody came." },
      { s: 'eomma', t: "Sit down, Solar. There are cards to write." },
      { n: "On the little table beside the chair there was a stack of thick cream cards with a single printed crane in the corner, and her mother's fountain pen, and a list in her mother's beautiful handwriting. Eleven names. Aunts, great-aunts, her father's cousin in Busan, the wife of the man who owned the fruit shop on the hill road." },
      { s: 'eomma', t: "They sent fruit. While you were ill. One thanks people for fruit." },
      { s: 'solar', t: "Eleven boxes." },
      { s: 'eomma', t: "Eleven. Your aunt Hyesun sent three. She has always overcompensated." },
      { n: "Solar sat on the low stool by the table and uncapped the pen. It was heavy and cold and very good and wrote like a wet brush. She wrote *Dear Aunt Hyesun* in her best hand, the hand her mother had made her practice at this table at eight years old, and stopped." },
      { s: 'eomma', t: "'Thank you for the pears.'" },
      { n: "Solar wrote it." },
      { s: 'eomma', t: "'They were the only thing I could eat.'" },
      { n: "Her mother said it without any change in her voice at all, looking at the orchids. Solar wrote it. Her hand was perfectly steady. She'd always been good at this. Her mother had made her good at this." },
      { choose: [
        { t: "(Write it exactly the way she says.)", then: [
          { n: "She wrote all eleven exactly as her mother said them. *The fever has broken. I am much better. Thank you for thinking of me. I was very sorry to miss the bows.* Eleven times, in eleven slightly different arrangements, because her mother would not send the same card twice to two women who might compare them at a funeral." },
          { n: "Her mother read each one when it was done and laid it on the pile, face down, and said nothing about any of them except, once, *your* yi *is beautiful*, about the shape of a single letter." }
        ] },
        { t: "(Add something of your own to Aunt Hyesun's.)", stat: { kindness: 1 }, then: [
          { n: "Under *the only thing I could eat* she added, in a smaller hand, *I thought of you when I ate them. I hope your knee is better in the cold.* It wasn't a lie. It was the only line on the card that wasn't." },
          { n: "Her mother read it. Her eyes stayed on that last line a moment longer than on the others. Then she laid it on the pile face down, very gently, as if it might bruise." },
          { s: 'eomma', t: "She'll cry. She'll ring me and cry." },
          { s: 'solar', t: "Is that bad?" },
          { s: 'eomma', t: "No. It's what she likes best." }
        ] }
      ] },
      { flag: 'epi-s-cards' },
      { glitch: { strain: 1 } },
      { n: "Eleven cards. Eleven envelopes, which her mother addressed herself, because her hand was the one the aunts knew, and stamped with stamps from a little lacquer box, all straight, all the same distance from the corner." },
      { n: "When it was done, her mother turned the cup round in her hands, still not drinking it, and looked at the orchids." },
      { s: 'eomma', t: "They sulk when you move them." },
      { s: 'solar', t: "The orchids?" },
      { s: 'eomma', t: "If you move them from one room to another. Or one window to the next. They drop every bud. They sulk for a month, sometimes two, and you think you've killed them." },
      { s: 'eomma', t: "And then they bloom. Out of spite. Twice as hard as before." },
      { n: "She said it to the orchids. Solar looked at the nearest one, the white one, with its long stem tied to the cane and a row of fat green buds along it, closed tight, and didn't say anything, and neither did her mother." },
      { n: "Then her mother put the cup down at last, untouched, and reached across and turned Solar's collar down where it had folded under, with two fingers, the way she'd done every morning before school for twelve years, and smoothed it flat, and left her hand there a moment on Solar's shoulder." },
      { s: 'eomma', t: "Post them on your way out. Mr. Oh will take you." },
      { n: "She didn't ask anything. She never had. She picked up a little brass mister from the shelf and began, one by one, to mist the orchids, and Solar went out with eleven lies in her coat pocket, written in the most beautiful hand in the family." }
    ] },

    { id: 'epi-s-eomma-2', title: 'the pins', hint: "Your mother is at your dressing table with a dish of hairpins, waiting. She's going to do your hair.",
      after: '3/3', until: '3/12', slots: ['after'], events: ['epi-s-dust'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Her Room', time: 'Daytime', scene: [
      { music: 'epi-s-family' },
      { n: "Her mother was sitting on the end of Solar's bed when she came back from the bathroom with a towel round her wet hair, and there was a little lacquer dish of hairpins on the dressing table that hadn't been there before, and a brush that wasn't Solar's, and her mother's long black pin laid beside them on its own." },
      { s: 'eomma', t: "Sit down." },
      { n: "Solar sat at the dressing table. Her mother stood behind her. In the mirror their faces were one above the other, the same face, twenty-nine years apart, and her mother looked at the two of them in the glass for a moment without doing anything, the way she might have looked at a ledger, and then took the towel off Solar's head and began." },
      { n: "She hadn't done Solar's hair since Solar was fifteen. Not since the day Solar had said she could do it herself and done it, badly and on purpose, and gone down to breakfast with it falling out, and her mother had looked at it across the table and said nothing, and that had been that." },
      { n: "She brushed it out first. Long strokes, from the crown all the way down to the ends, the brush catching on the knots and her mother working each one out with her fingers, patiently, without pulling. Outside the window the dust lay over the garden yellow and dim, the annex at the bottom of it nothing but a darker shape." },
      { s: 'eomma', t: "You've lost weight." },
      { s: 'solar', t: "Everybody keeps saying that." },
      { s: 'eomma', t: "Everybody keeps being right." },
      { n: "She twisted it up. She did it the way she did her own, the long rope of it turned over and over on itself and lifted, pinned close against the back of the head, every pin going in at the same angle, sliding home along the scalp without catching. Her hands were cool. They were very quick. Solar watched them in the mirror and counted the pins without meaning to." },
      { s: 'eomma', t: "You're counting." },
      { s: 'solar', t: "Seven." },
      { s: 'eomma', t: "There are always seven. Your grandmother used seven. A Lee daughter doesn't look undone." },
      { s: 'eomma', t: "Not in public. Not in front of anybody who's going to talk about it." },
      { n: "The long black pin last, through the whole of it, from one side to the other. Her mother set it, and turned Solar's head a little with her fingertips to look at it from the side in the glass, and then from the other." },
      { ifGlitch: 3, then: [
        { n: "For a second, in the mirror, there was something on the sleeve of Solar's sweater, at the upper arm. A band. Red. She looked down at her arm. Nothing. She looked back at the mirror. Nothing. Her mother, behind her, was looking at the hair, only the hair, and her hands on Solar's shoulders hadn't moved at all. If she'd seen it, she had decided not to have." }
      ] },
      { choose: [
        { t: "Thank you, Eomma.", then: [
          { n: "Her mother didn't answer. She put her hands on Solar's shoulders, both of them, light, the way she'd done it before recitals, and left them there, and looked at the two faces in the mirror, one above the other." }
        ] },
        { t: "Can you leave it down? Just today?", stat: { courage: 1 }, then: [
          { s: 'eomma', t: "Not in public." },
          { s: 'solar', t: "I'm not going anywhere." },
          { n: "Her mother looked at her in the glass for a long moment. Then she reached up and drew out one pin, only one, from just behind Solar's ear, so that a single piece of hair came loose and lay against her neck. She put the pin in the dish." },
          { s: 'eomma', t: "Then you're not in public." }
        ] },
        { t: "Teach me how you do the twist.", stat: { proficiency: 1 }, then: [
          { s: 'eomma', t: "You know how." },
          { s: 'solar', t: "I know how to do mine. I don't know how to do yours." },
          { n: "So her mother took it all down again, every pin, and did it again, slowly, with Solar's hands under hers, showing her the turn and the lift and where the thumb went to hold it, the way you'd show somebody how to fold a thing that had to be folded one way only." },
          { s: 'eomma', t: "There. Now you know two ways." }
        ] }
      ] },
      { n: "She picked up the dish of pins and the brush that wasn't Solar's and went to the door. At the door she stopped, and turned, and looked back at her daughter sitting at the dressing table with her hair up in the dust light." },
      { s: 'eomma', t: "Tonight, take them out yourself. Don't sleep in them. You'll have a headache in the morning and you'll blame me." },
      { s: 'solar', t: "I always blame you." },
      { s: 'eomma', t: "Yes. You get that from your father." },
      { n: "She went out. Solar sat at the dressing table and looked at her own head in the glass, her mother's work on it, seven pins and the long black one, and touched it, very lightly, the way you'd touch something you'd been lent and would have to give back." }
    ] }
  ]);

  /* ── Texts ── */
  const T = (R.texts ||= {});
  (T.groups ||= []).push('girls');
  T.threads = Object.assign(T.threads || {}, {
    haechan: 'Haechan', jungwon: '远', yunjin: 'wifey', appa: 'Appa', eomma: 'Eomma', mroh: 'Mr. Oh',
    girls: '🌕 daeboreum committee', niki: 'riki', sunghoon: 'Park Sunghoon', jay: 'Jay'
  });
  const LEAVE = (then = []) => ({ t: '(Leave it on read.)', silent: true, then });
  (T.texts ||= []).push(
    // ── week 1: home, the cover ──
    { id: 'epi-s-tx-yunjin-wall', thread: 'yunjin', date: '2/17', slot: 'evening', events: ['epi-s-kitchen'], msgs: [
      { from: 'yunjin', t: "im literally on the other side of ur wall" },
      { from: 'yunjin', t: "knock twice if ur alive. knock once if mrs bang is still making u do the fever" },
      { from: 'yunjin', t: "39.4 babe. u couldnt keep rice down. i held ur hair. (i was not there)" }
    ], reply: [
      { t: "(Knock twice on the wall.)", silent: true, then: [{ from: 'yunjin', t: "ok i heard that" }, { from: 'yunjin', t: "best sound ive heard all year. and ive had a YEAR" }] },
      LEAVE([{ from: 'yunjin', t: "rude. knocking anyway" }, { from: 'yunjin', t: "knock knock knock" }])
    ] },
    { id: 'epi-s-tx-appa-juk', thread: 'appa', date: '2/18', slot: 'early', events: ['epi-s-home'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "mrs bang made juk" },
      { from: 'appa', t: "for the fever" },
      { from: 'appa', t: "eat it or shell make more" }
    ], reply: [
      { t: "eating it appa", then: [{ from: 'appa', t: "good" }] },
      LEAVE([{ from: 'appa', t: "shes making more" }])
    ] },
    { id: 'epi-s-tx-hc-warm', thread: 'haechan', date: '2/18', slot: 'after', events: ['epi-s-step'], msgs: [
      { from: 'haechan', t: "cars warm" },
      { from: 'haechan', t: "if u want to go nowhere" }
    ], reply: [
      { t: "where's nowhere", then: [{ from: 'haechan', t: "far" }, { from: 'haechan', t: "bring a coffee" }] },
      LEAVE([{ from: 'haechan', t: "warm all week agasshi" }, { from: 'haechan', t: "diesels on the chairman" }])
    ] },
    { id: 'epi-s-tx-jw-wolmido', thread: 'jungwon', date: '2/18', slot: 'evening', events: ['epi-s-step'], msgs: [
      { from: 'jungwon', t: "Good evening. I hope you're resting." },
      { from: 'jungwon', t: "If your schedule allows, I'd like to walk on Wolmido this week. The wind off the water will be cold. Please wear the grey scarf. It's the warm one." }
    ], reply: [
      { t: "which grey scarf", then: [{ from: 'jungwon', t: "The one you wore on the step. I noticed it was warm because you didn't touch it once." }] },
      { t: "yes", then: [{ from: 'jungwon', t: "Thank you. I'll wait at the foot of the promenade, on the side away from the water." }] }
    ] },
    { id: 'epi-s-tx-eomma-pears', thread: 'eomma', date: '2/19', slot: 'after', events: ['epi-s-eomma'], msgs: [
      { from: 'eomma', t: "Your aunts' fruit is in the cold room. There are eleven boxes. Please choose what you would like before your father eats all the pears." },
      { from: 'eomma', t: "Aunt Hyesun sent three. She will ask which ones you ate." }
    ], reply: [
      { t: "the pears", then: [{ from: 'eomma', t: "Then I will tell her the pears. Take one up with you, and eat it where Mrs. Bang can see." }] },
      LEAVE([{ from: 'eomma', t: "I will choose for you, then." }])
    ] },
    { id: 'epi-s-tx-mroh-one', thread: 'mroh', date: '2/20', slot: 'early', events: ['epi-s-home'], msgs: [
      { from: 'mroh', t: "One o'clock. Downstairs." }
    ], reply: [
      { t: "ok mr oh", then: [{ from: 'mroh', t: "Coat." }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-jay-plate', thread: 'jay', date: '2/21', slot: 'after', events: ['epi-s-trio'], msgs: [
      { from: 'jay', t: "plate's back. mrs moon says you can't return a plate empty, so it isn't" },
      { from: 'jay', t: "squid. legitimate. i'd swear to it in front of your mrs bang" }
    ], reply: [
      { t: "tell mrs moon thank you", then: [{ from: 'jay', t: "she says you're too thin. she says that about everybody. she said it to a crate once" }] },
      LEAVE([{ from: 'jay', t: "ok. squid's on your back step next to the fish. don't let them make friends" }])
    ] },
    { id: 'epi-s-tx-hc-awake', thread: 'haechan', date: '2/21', slot: 'late', events: ['epi-s-quay'], msgs: [
      { from: 'haechan', t: "u awake" },
      { from: 'haechan', t: "nothing" },
      { from: 'haechan', t: "go to sleep" }
    ], reply: [
      { t: "(Go to the window.)", silent: true, then: [{ from: 'haechan', t: "saw u" }, { from: 'haechan', t: "ok" }, { from: 'haechan', t: "sleep agasshi" }] },
      { t: "im awake. are you", then: [{ from: 'haechan', t: "not on here" }, { from: 'haechan', t: "step. if u want" }, { from: 'haechan', t: "or dont. go to sleep" }] }
    ] },
    { id: 'epi-s-tx-girls-hello', thread: 'girls', date: '2/22', slot: 'late', events: ['epi-s-girls'], msgs: [
      { from: 'chaewon', t: "ok. this is the daeboreum committee. i made it so it's official" },
      { from: 'chaewon', t: "agenda: wolmido. sunday the 24th. full moon. bonfire. yunjin is coming" },
      { from: 'yunjin', t: "i didnt agree to that" },
      { from: 'chaewon', t: "you're coming" },
      { from: 'sakura', t: "who added the new girl" },
      { from: 'chaewon', t: "me. she's yunjin's. be nice" },
      { from: 'kazuha', t: "solar-ssi welcome ☺ do you believe in ghosts" },
      { from: 'eunchae', t: "she said four sentences at the café. i counted. one was 'no thank you'" },
      { from: 'sakura', t: "respect" }
    ], reply: [
      { t: "hi. no comment on ghosts", then: [{ from: 'kazuha', t: "that's what people say when it's yes" }, { from: 'eunchae', t: "FIVE sentences" }] },
      LEAVE([{ from: 'eunchae', t: "read at 23:41. iconic" }, { from: 'yunjin', t: "leave my wife alone" }])
    ] },
    { id: 'epi-s-tx-yunjin-sheet', thread: 'yunjin', date: '2/23', slot: 'after', events: ['epi-s-girls'], msgs: [
      { from: 'yunjin', t: "chaewon made a SPREADSHEET for sunday" },
      { from: 'yunjin', t: "theres a column called WISHES. its pre-filled. mine says 'yunjin has fun (mandatory)'" },
      { from: 'yunjin', t: "what do u even wish for at daeboreum. i forgot. ive been in japan" }
    ], reply: [
      { t: "you write it on paper and burn it", then: [{ from: 'yunjin', t: "cool cool cool. arson. love that for us" }] },
      { t: "a good year", then: [{ from: 'yunjin', t: "ok but specifically" }, { from: 'yunjin', t: "nvm. a good year. ill take it" }] }
    ] },
    { id: 'epi-s-tx-niki-window', thread: 'niki', date: '2/23', slot: 'evening', events: ['epi-s-girls'], msgs: [
      { from: 'niki', t: "noona" },
      { from: 'niki', t: "the girls in the café window. the japanese ones" },
      { from: 'niki', t: "nvm. forget i asked" }
    ], reply: [
      { t: "asked what?", then: [{ from: 'niki', t: "nothing. im running. im very busy" }] },
      { t: "her name's kazuha", then: [{ from: 'niki', t: "i didnt ask her name" }, { from: 'niki', t: "...ok" }, { from: 'niki', t: "thanks noona" }] }
    ] },
    // ── week 2: Daeboreum, the hammer ──
    { id: 'epi-s-tx-appa-scarf', thread: 'appa', date: '2/24', slot: 'after', events: ['epi-s-bureom'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "take the thick scarf" },
      { from: 'appa', t: "its cold on the water" },
      { from: 'appa', t: "appas up when you get in" }
    ], reply: [
      { t: "ok appa", then: [{ from: 'appa', t: "and a hat" }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-moon-hc', thread: 'haechan', date: '2/24', slot: 'late', flag: 'epi-route-haechan', events: ['epi-s-moon'], msgs: [
      { from: 'haechan', t: "u saw it" },
      { from: 'haechan', t: "dont" },
      { from: 'haechan', t: "not on here" },
      { from: 'haechan', t: "doors open if ur up" }
    ], reply: [
      { t: "(Go down the garden.)", silent: true, then: [{ from: 'haechan', t: "bring a blanket. radios on" }] },
      { t: "go to sleep donghyuck-ah", then: [{ from: 'haechan', t: "no" }, { from: 'haechan', t: "u first" }] }
    ] },
    { id: 'epi-s-tx-moon-jw', thread: 'jungwon', date: '2/24', slot: 'late', flag: 'epi-route-jungwon', events: ['epi-s-moon'], msgs: [
      { from: 'jungwon', t: "Thank you for this evening. The moon was very large tonight. I won't say anything else about it here." },
      { from: 'jungwon', t: "I'm at your gate until one. You don't have to come down." }
    ], reply: [
      { t: "i'm coming down", then: [{ from: 'jungwon', t: "Then please bring a coat. I can't lend you mine; I'd have to explain it to my father." }] },
      LEAVE([{ from: 'jungwon', t: "Good night." }])
    ] },
    { id: 'epi-s-tx-moon-yj', thread: 'yunjin', date: '2/24', slot: 'late', flag: 'epi-route-family', events: ['epi-s-moon'], msgs: [
      { from: 'yunjin', t: "u looked at the moon like it owed u money" },
      { from: 'yunjin', t: "kazuha says the bonfire had a face in it" },
      { from: 'yunjin', t: "she says that about everything. she said it about my soup" },
      { from: 'yunjin', t: "go to sleep babe" }
    ], reply: [
      { t: "did you wish for something", then: [{ from: 'yunjin', t: "yes. not telling. it was about u. go to sleep" }] },
      LEAVE([{ from: 'yunjin', t: "goodnight wifey 🌕" }])
    ] },
    { id: 'epi-s-tx-girls-photos', thread: 'girls', date: '2/25', slot: 'after', events: ['epi-s-moon'], msgs: [
      { from: 'eunchae', t: "question. who was the guy at the far end of the beach in the black jacket who ate EVERYTHING" },
      { from: 'sakura', t: "and the guy at the other end in the long coat who ate nothing" },
      { from: 'chaewon', t: "bodyguards. yunjin said" },
      { from: 'yunjin', t: "theyre not bodyguards theyre an infestation" },
      { from: 'kazuha', t: "they looked at the moon at the same time. like ghosts" },
      { from: 'eunchae', t: "solar's not answering. that's an answer" }
    ], reply: [
      { t: "they're from my dad's work", then: [{ from: 'chaewon', t: "ok" }, { from: 'eunchae', t: "'work'" }, { from: 'sakura', t: "eunchae no" }] },
      LEAVE([{ from: 'eunchae', t: "seen. mysterious. i love it here" }])
    ] },
    { id: 'epi-s-tx-sunghoon-home', thread: 'sunghoon', date: '2/27', slot: 'late', events: ['epi-s-gun'], msgs: [
      { from: 'sunghoon', t: "He's home. He asked me to tell you that." },
      { from: 'sunghoon', t: "Only that." }
    ], reply: [
      { t: "thank you sunghoon", then: [{ from: 'sunghoon', t: "Don't." }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-appa-market', thread: 'appa', date: '2/28', slot: 'early', events: ['epi-s-gun'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "no market this week" },
      { from: 'appa', t: "send pyo. or mr oh" }
    ], reply: [
      { t: "ok appa", then: [{ from: 'appa', t: "good" }] },
      LEAVE([{ from: 'appa', t: "pyo says theres a ghost at the market too" }, { from: 'appa', t: "theres no ghost" }, { from: 'appa', t: "send pyo anyway" }])
    ] },
    { id: 'epi-s-tx-watch-hc', thread: 'haechan', date: '2/28', slot: 'after', noFlag: 'epi-route-jungwon', events: ['epi-s-even'], msgs: [
      { from: 'haechan', t: "tonights mine" },
      { from: 'haechan', t: "yangs got tomorrow" },
      { from: 'haechan', t: "he wanted it written down. a ROTA agasshi" },
      { from: 'haechan', t: "i said no. its in his head and mine. thats enough places" }
    ], reply: [
      { t: "thank you", then: [{ from: 'haechan', t: "dont" }, { from: 'haechan', t: "go to bed early. makes it a shorter shift" }] },
      LEAVE([{ from: 'haechan', t: "step from 11" }])
    ] },
    { id: 'epi-s-tx-watch-jw', thread: 'jungwon', date: '2/28', slot: 'after', flag: 'epi-route-jungwon', events: ['epi-s-even'], msgs: [
      { from: 'jungwon', t: "Tonight is mine. Donghyuck has tomorrow." },
      { from: 'jungwon', t: "I suggested a written schedule. He suggested something I won't repeat to you. We've agreed to keep it in our heads." },
      { from: 'jungwon', t: "I'll be at the gate from eleven." }
    ], reply: [
      { t: "thank you", then: [{ from: 'jungwon', t: "Please don't thank me for standing outside your house. It's the least useful thing I've ever done, and the only thing I want to." }] },
      LEAVE([{ from: 'jungwon', t: "From eleven." }])
    ] },
    { id: 'epi-s-tx-eomma-flag', thread: 'eomma', date: '3/1', slot: 'early', events: ['epi-s-alone'], msgs: [
      { from: 'eomma', t: "Your father is putting the flag out at nine. He would like you there. He will not say so, so I am saying so." },
      { from: 'eomma', t: "Wear gloves." }
    ], reply: [
      { t: "i'll be there", then: [{ from: 'eomma', t: "Thank you." }] },
      LEAVE([{ from: 'eomma', t: "Nine, Solar." }])
    ] },
    { id: 'epi-s-tx-yunjin-blister', thread: 'yunjin', date: '3/2', slot: 'evening', events: ['epi-s-alone'], msgs: [
      { from: 'yunjin', t: "ok what is on ur hand" },
      { from: 'yunjin', t: "dont say nothing. ur bad at lying to me specifically" },
      { from: 'yunjin', t: "i lived with u for a year. i know what that blister is. im not being spooky about it im just saying i KNOW" }
    ], reply: [
      { t: "it's from what you think", then: [{ from: 'yunjin', t: "ok" }, { from: 'yunjin', t: "ok ok ok" }, { from: 'yunjin', t: "coming over. bringing aloe. aloe isnt spooky" }] },
      { t: "it's nothing", then: [{ from: 'yunjin', t: "liar" }, { from: 'yunjin', t: "bringing aloe anyway" }] }
    ] },
    // ── week 3: the dust ──
    { id: 'epi-s-tx-girls-dust', thread: 'girls', date: '3/3', slot: 'evening', events: ['epi-s-moon'], msgs: [
      { from: 'chaewon', t: "DUST WARNING from tomorrow. masks. proper ones. i will check" },
      { from: 'kazuha', t: "in the dust ghosts can walk in the daytime. my grandmother says" },
      { from: 'sakura', t: "your grandmother says a lot of things" },
      { from: 'kazuha', t: "she is usually right" },
      { from: 'eunchae', t: "nobody can see anybody's face for a week. perfect crime weather" },
      { from: 'chaewon', t: "eunchae" }
    ], reply: [
      { t: "masks. got it", then: [{ from: 'chaewon', t: "good. you're my favorite now" }, { from: 'yunjin', t: "excuse me" }] },
      LEAVE([{ from: 'chaewon', t: "i will check, solar" }])
    ] },
    { id: 'epi-s-tx-yunjin-window', thread: 'yunjin', date: '3/4', slot: 'late', events: ['epi-s-dust'], msgs: [
      { from: 'yunjin', t: "im not being spooky" },
      { from: 'yunjin', t: "im just saying. the window" },
      { from: 'yunjin', t: "ok im being a little spooky" },
      { from: 'yunjin', t: "my lights on. if u want it" }
    ], reply: [
      { t: "(Go next door.)", silent: true, then: [{ from: 'yunjin', t: "doors unlocked. bring a pillow. u always steal mine" }] },
      { t: "i saw it too", then: [{ from: 'yunjin', t: "i know babe" }, { from: 'yunjin', t: "i held ur arm the whole way home. i know" }] }
    ] },
    { id: 'epi-s-tx-girls-tide', thread: 'girls', date: '3/6', slot: 'after', events: ['epi-s-tide'], msgs: [
      { from: 'eunchae', t: "did u hear the radio. the tide STOPPED this morning. by the seawall" },
      { from: 'sakura', t: "it's called a weather event" },
      { from: 'kazuha', t: "the sea is haunted now" },
      { from: 'sakura', t: "the sea can't be haunted" },
      { from: 'kazuha', t: "why not" },
      { from: 'sakura', t: "...i don't know actually" },
      { from: 'chaewon', t: "nobody is going to the seawall. committee ruling" }
    ], reply: [
      { t: "committee ruling accepted", then: [{ from: 'chaewon', t: "thank you. someone respects the committee" }] },
      LEAVE([{ from: 'eunchae', t: "solar's not answering. she's at the seawall. calling it" }, { from: 'yunjin', t: "shes NOT. shes in bed. leave her" }])
    ] },
    { id: 'epi-s-tx-tide-hc', thread: 'haechan', date: '3/6', slot: 'evening', flag: 'epi-route-haechan', events: ['epi-s-tide'], msgs: [
      { from: 'haechan', t: "eat something" },
      { from: 'haechan', t: "mrs bang made soup" },
      { from: 'haechan', t: "im on the stairs till u do" },
      { from: 'haechan', t: "i can sit here all night agasshi ive got gum" }
    ], reply: [
      { t: "coming down", then: [{ from: 'haechan', t: "good" }, { from: 'haechan', t: "seventh stairs taken. sit on the sixth" }] },
      LEAVE([{ from: 'haechan', t: "still here" }, { from: 'haechan', t: "still here" }])
    ] },
    { id: 'epi-s-tx-tide-jw', thread: 'jungwon', date: '3/6', slot: 'evening', flag: 'epi-route-jungwon', events: ['epi-s-tide'], msgs: [
      { from: 'jungwon', t: "I've asked Mr. Oh to take the inland road for the rest of the month, away from the seawall. He agreed without asking why. I'm told that is unusual for him." },
      { from: 'jungwon', t: "Please eat something. I'm told Mrs. Bang has made soup. I'm told this by Donghyuck, who was apparently told to tell me." }
    ], reply: [
      { t: "i'll eat", then: [{ from: 'jungwon', t: "Thank you. I'll ask him whether you did. He'll lie, and I'll know, and that will be how I find out." }] },
      LEAVE([{ from: 'jungwon', t: "I'll ask Donghyuck." }])
    ] },
    { id: 'epi-s-tx-tide-appa', thread: 'appa', date: '3/6', slot: 'evening', flag: 'epi-route-family', events: ['epi-s-tide'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "radio says weather event" },
      { from: 'appa', t: "stay in tomorrow" },
      { from: 'appa', t: "appas home" }
    ], reply: [
      { t: "ok appa", then: [{ from: 'appa', t: "good" }] },
      LEAVE([{ from: 'appa', t: "appas on the stairs" }])
    ] },
    { id: 'epi-s-tx-appa-clocks', thread: 'appa', date: '3/8', slot: 'after', events: ['epi-s-clocks'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "new batteries in the kitchen clock" },
      { from: 'appa', t: "and the hall" },
      { from: 'appa', t: "the study one i left" }
    ], reply: [
      { t: "why", then: [{ from: 'appa', t: "its right twice a day" }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-jw-cook', thread: 'jungwon', date: '3/8', slot: 'evening', events: ['epi-s-clocks'], msgs: [
      { from: 'jungwon', t: "Our cook tells me that a cook from your house told her that every clock in your house stopped this morning at the same time." },
      { from: 'jungwon', t: "Our cook has been crossing herself since noon. I've told her it was the electricity. I'd like you to know that I said it very politely." }
    ], reply: [
      { t: "it wasn't the electricity", then: [{ from: 'jungwon', t: "No. I didn't think so." }] },
      LEAVE([{ from: 'jungwon', t: "Good night. Please look at your watch before you sleep. I'll be looking at mine." }])
    ] },
    { id: 'epi-s-tx-eomma-wiring', thread: 'eomma', date: '3/9', slot: 'after', events: ['epi-s-clocks'], msgs: [
      { from: 'eomma', t: "Mrs. Bang has asked for a priest, a shaman and an electrician. I have allowed the electrician." },
      { from: 'eomma', t: "Please don't encourage Pyo." }
    ], reply: [
      { t: "what did pyo do", then: [{ from: 'eomma', t: "He has put salt on every windowsill in the kitchen. Auntie Song is cooking with it." }] },
      LEAVE([{ from: 'eomma', t: "Thank you, Solar." }])
    ] },
    // ── 3/10-3/15: the last week ──
    { id: 'epi-s-tx-appa-34', thread: 'appa', date: '3/10', slot: 'early', events: ['epi-s-clocks'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "34" },
      { from: 'appa', t: "auntie songs dumplings today" },
      { from: 'appa', t: "come down hungry" }
    ], reply: [
      { t: "coming", then: [{ from: 'appa', t: "good" }] },
      LEAVE([{ from: 'appa', t: "appas saving you the ones with the pleats" }])
    ] },
    { id: 'epi-s-tx-dinner-hc', thread: 'haechan', date: '3/11', slot: 'late', flag: 'epi-route-haechan', events: ['epi-s-dinner'], msgs: [
      { from: 'haechan', t: "im on the step" },
      { from: 'haechan', t: "all night" },
      { from: 'haechan', t: "dont come down" },
      { from: 'haechan', t: "just look out the window once so i know" }
    ], reply: [
      { t: "(Look out of the window.)", silent: true, then: [{ from: 'haechan', t: "ok" }, { from: 'haechan', t: "good" }, { from: 'haechan', t: "go to bed agasshi" }] },
      { t: "come up", then: [{ from: 'haechan', t: "chairmans on the seventh stair" }, { from: 'haechan', t: "hes been there since ten" }, { from: 'haechan', t: "im fine down here" }] }
    ] },
    { id: 'epi-s-tx-dinner-jw', thread: 'jungwon', date: '3/11', slot: 'late', flag: 'epi-route-jungwon', events: ['epi-s-dinner'], msgs: [
      { from: 'jungwon', t: "I'm outside your gate. I'll be here until it's light. Please don't come down; it's very cold." },
      { from: 'jungwon', t: "Please turn your light on once. I'd like to see it lit." }
    ], reply: [
      { t: "(Turn the light on.)", silent: true, then: [{ from: 'jungwon', t: "Thank you." }, { from: 'jungwon', t: "You can turn it off now. I'll remember where it is." }] },
      { t: "come in. it's freezing", then: [{ from: 'jungwon', t: "Your father is on the stairs. I'd rather freeze than walk past him tonight. He'd be kind to me, and I couldn't bear it." }] }
    ] },
    { id: 'epi-s-tx-dinner-yj', thread: 'yunjin', date: '3/11', slot: 'late', flag: 'epi-route-family', events: ['epi-s-dinner'], msgs: [
      { from: 'yunjin', t: "im coming over" },
      { from: 'yunjin', t: "not a question" },
      { from: 'yunjin', t: "bringing the rabbit socks" },
      { from: 'yunjin', t: "u can complain about it to my face" }
    ], reply: [
      { t: "the door's open", then: [{ from: 'yunjin', t: "i know. im already in the hall" }] },
      LEAVE([{ from: 'yunjin', t: "too late. im in the hall" }])
    ] },
    { id: 'epi-s-tx-mroh-anywhere', thread: 'mroh', date: '3/12', slot: 'after', events: ['epi-s-dinner'], msgs: [
      { from: 'mroh', t: "Downstairs." },
      { from: 'mroh', t: "Your father says anywhere you like." }
    ], reply: [
      { t: "anywhere?", then: [{ from: 'mroh', t: "Anywhere." }, { from: 'mroh', t: "Downstairs." }] },
      LEAVE([{ from: 'mroh', t: "Engine's on." }])
    ] },
    { id: 'epi-s-tx-girls-saturday', thread: 'girls', date: '3/13', slot: 'after', events: ['epi-s-karaoke'], msgs: [
      { from: 'chaewon', t: "saturday. all of us. jjimjilbang. i've booked nothing but i'm going to" },
      { from: 'sakura', t: "solar's never free saturdays" },
      { from: 'eunchae', t: "she's on a different server" },
      { from: 'kazuha', t: "solar-ssi please come. i'll protect you from the ghosts" },
      { from: 'yunjin', t: "shell come. ill carry her" }
    ], reply: [
      { t: "i'll try", then: [{ from: 'chaewon', t: "trying is a yes. committee rules" }, { from: 'eunchae', t: "screenshotted" }] },
      LEAVE([{ from: 'eunchae', t: "see. different server" }, { from: 'yunjin', t: "shut UP eunchae" }])
    ] },
    { id: 'epi-s-tx-sunghoon-sleep', thread: 'sunghoon', date: '3/14', slot: 'after', events: ['epi-s-dinner'], msgs: [
      { from: 'sunghoon', t: "He hasn't slept since Monday. Neither has the dog." },
      { from: 'sunghoon', t: "I'm telling you because nobody else will." }
    ], reply: [
      { t: "i'll make them sleep", then: [{ from: 'sunghoon', t: "Good luck." }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-yunjin-nothing', thread: 'yunjin', date: '3/15', slot: 'evening', events: ['epi-s-last'], msgs: [
      { from: 'yunjin', t: "tomorrow we're doing NOTHING" },
      { from: 'yunjin', t: "all day. thats the whole plan. pajamas. bad tv. mrs bangs soup" },
      { from: 'yunjin', t: "dont make a face i can hear u making a face through the wall" }
    ], reply: [
      { t: "nothing sounds perfect", then: [{ from: 'yunjin', t: "RIGHT??" }, { from: 'yunjin', t: "night wifey. love u. knock if u need me" }] },
      { t: "(Knock on the wall.)", silent: true, then: [{ from: 'yunjin', t: "knocking back. goodnight. ur not allowed to be weird" }] }
    ] },
    { id: 'epi-s-tx-last-hc', thread: 'haechan', date: '3/15', slot: 'late', flag: 'epi-route-haechan', events: ['epi-s-last'], msgs: [
      { from: 'haechan', t: "agasshi" },
      { from: 'haechan', t: "go to sleep" },
      { from: 'haechan', t: "im up" }
    ], reply: [
      { t: "donghyuck-ah", then: [{ from: 'haechan', t: "..." }, { from: 'haechan', t: "go to sleep solar" }] },
      LEAVE([{ from: 'haechan', t: "im up" }])
    ] },
    { id: 'epi-s-tx-last-jw', thread: 'jungwon', date: '3/15', slot: 'late', flag: 'epi-route-jungwon', events: ['epi-s-last'], msgs: [
      { from: 'jungwon', t: "Good night." },
      { from: 'jungwon', t: "晚安。" },
      { from: 'jungwon', t: "I'll be up." }
    ], reply: [
      { t: "晚安", then: [{ from: 'jungwon', t: "Thank you." }] },
      LEAVE([{ from: 'jungwon', t: "I'll be up." }])
    ] },
    { id: 'epi-s-tx-last-appa', thread: 'appa', date: '3/15', slot: 'late', flag: 'epi-route-family', events: ['epi-s-last'], msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "tides out at four" },
      { from: 'appa', t: "appas up" },
      { from: 'appa', t: "kitchen lights on" }
    ], reply: [
      { t: "coming down", then: [{ from: 'appa', t: "barley tea" }] },
      LEAVE([{ from: 'appa', t: "its on anyway" }])
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-s-am-yunjin-socks', thread: 'yunjin', from: '2/17', to: '2/23', events: ['epi-s-kitchen'], msgs: [
      { from: 'yunjin', t: "do u still have my rabbit socks" },
      { from: 'yunjin', t: "the ones with ears" },
      { from: 'yunjin', t: "i need them back. emotionally" }
    ], reply: [
      { t: "they're under my bed", then: [{ from: 'yunjin', t: "keep them there. i like knowing where they are" }] },
      LEAVE([{ from: 'yunjin', t: "thief" }])
    ] },
    { id: 'epi-s-am-mroh-warm', thread: 'mroh', from: '2/18', to: '3/14', events: ['epi-s-home'], msgs: [
      { from: 'mroh', t: "The car is warm." }
    ], reply: [
      { t: "where are we going?", then: [{ from: 'mroh', t: "Wherever you're going." }] },
      LEAVE()
    ] },
    { id: 'epi-s-am-eomma-coat', thread: 'eomma', from: '2/20', to: '3/10', events: ['epi-s-eomma'], msgs: [
      { from: 'eomma', t: "Please wear the grey coat today. It is the warm one. The black one is the pretty one." },
      { from: 'eomma', t: "It is not a day for the pretty one." }
    ], reply: [
      { t: "grey coat. ok", then: [{ from: 'eomma', t: "Thank you." }] },
      LEAVE([{ from: 'eomma', t: "Mr. Oh has the grey one in the car." }])
    ] },
    { id: 'epi-s-am-appa-salmon', thread: 'appa', from: '2/21', to: '3/9', flag: 'epi-s-sari', msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "4 across. comes home up the river. 2" },
      { from: 'appa', t: "salmon" },
      { from: 'appa', t: "never mind. got it" }
    ], reply: [
      { t: "show-off", then: [{ from: 'appa', t: "appa had help this morning" }, { from: 'appa', t: "mrs bang" }] },
      LEAVE()
    ] },
    { id: 'epi-s-am-niki-fruit', thread: 'niki', from: '2/26', to: '3/8', events: ['epi-s-girls'], msgs: [
      { from: 'niki', t: "noona what fruit does kazuha like" },
      { from: 'niki', t: "for research" },
      { from: 'niki', t: "not bananas. i asked. she laughed" }
    ], reply: [
      { t: "strawberries. probably", then: [{ from: 'niki', t: "ok" }, { from: 'niki', t: "strawberries are expensive in march noona" }, { from: 'niki', t: "ok" }] },
      { t: "ask her yourself", then: [{ from: 'niki', t: "i DID. she laughed. weren't you listening" }] }
    ] },
    { id: 'epi-s-am-girls-rank', thread: 'girls', from: '2/26', to: '3/12', events: ['epi-s-moon'], msgs: [
      { from: 'sakura', t: "hit diamond. nobody congratulate me" },
      { from: 'kazuha', t: "congratulations sakura-chan 🎉" },
      { from: 'sakura', t: "i said nobody" },
      { from: 'eunchae', t: "what's diamond" },
      { from: 'sakura', t: "i'm muting this chat" }
    ], reply: [
      { t: "congratulations", then: [{ from: 'sakura', t: "...thanks" }, { from: 'eunchae', t: "she said thanks to SOLAR" }] },
      LEAVE()
    ] },
    { id: 'epi-s-am-jay-tea', thread: 'jay', from: '3/1', to: '3/14', events: ['epi-s-trio'], msgs: [
      { from: 'jay', t: "tell your mrs bang her barley tea is overextracted. it's bitter because she boils it" },
      { from: 'jay', t: "tell her i said it with love" },
      { from: 'jay', t: "actually don't" }
    ], reply: [
      { t: "i'm telling her", then: [{ from: 'jay', t: "i'll never eat in your house again. she'll make sure of it" }] },
      LEAVE()
    ] },
    { id: 'epi-s-am-yunjin-koi', thread: 'yunjin', from: '3/1', to: '3/12', events: ['epi-s-alone'], msgs: [
      { from: 'yunjin', t: "[photo: two koi, one bucket, one slipper]" },
      { from: 'yunjin', t: "mr and mrs kim say hi" },
      { from: 'yunjin', t: "no news" }
    ], reply: [
      { t: "tell them hi back", then: [{ from: 'yunjin', t: "they say ok" }] },
      LEAVE([{ from: 'yunjin', t: "they're offended" }])
    ] },
    { id: 'epi-s-am-hc-eat', thread: 'haechan', from: '3/3', to: '3/9', flag: 'epi-route-haechan', msgs: [
      { from: 'haechan', t: "mrs bang says ur not eating" },
      { from: 'haechan', t: "im not saying it im passing it on" },
      { from: 'haechan', t: "eat" }
    ], reply: [
      { t: "i ate", then: [{ from: 'haechan', t: "liar" }, { from: 'haechan', t: "theres juk on the stove" }] },
      LEAVE([{ from: 'haechan', t: "she says she can see u reading this" }])
    ] },
    { id: 'epi-s-am-jw-casual', thread: 'jungwon', from: '3/3', to: '3/9', flag: 'epi-route-jungwon', msgs: [
      { from: 'jungwon', t: "Sunghoon says I should text 'more casually.' I asked Riki what that means." },
      { from: 'jungwon', t: "He sent me a picture of a banana. I am no closer." }
    ], reply: [
      { t: "send me the banana", then: [{ from: 'jungwon', t: "[photo: a banana, on a baduk board, very neatly]" }, { from: 'jungwon', t: "Is that casual?" }] },
      LEAVE([{ from: 'jungwon', t: "I'll keep practicing." }])
    ] }
  );
})();
