/* The strangers epilogue (2/17-3/16/2013, Incheon): heat on the routes. The Nov 6 2026 pass (Kat's question 9: strangers is her
   spiciest book, "bring it on"). Data only; loaded with the world (epilogue.js WORLDS.strangers.files). Bonds go through add()
   so they merge with people.js and people-night.js in any load order. Like the book, every scene goes all the way up to the
   door and cuts there: tension, hands, mouths, beds, waking up, the morning after; nothing graphic on the page.

   Hangouts (role 'friend'; the first unseen hangout whose gates fit is the one offered, so these queue behind their bond's
   older hangouts in the same slot):
     haechan  epi-s-haechan-fogged 'fogged'          3/1-3/9 evening, route haechan, after epi-s-hc-annex (The Car)
     haechan  epi-s-haechan-dawn 'five ten'          3/1-3/6 late, route haechan, after epi-s-hc-annex (Annex); after
                                                     'his night' (people-night) in the late queue
     jungwon  epi-s-jungwon-hands 'four hands'       3/1-3/9 evening, route jungwon, after epi-s-jw-tea (The Lee House)
   Flags set (local): epi-s-glovebox (fogged: she opened the glove box), epi-s-laundry-window (dawn: she went in by the
     laundry window). Read nowhere else.
   Texts: { later } lines (core.js laterText, a text the next morning) in dawn (Yunjin) and fogged (Haechan).
   Glitch lines: { near: true } once in dawn. No glitch ids, no strain.
   Bonds: one { bond } per hangout, in the warmest option.
   Fences kept: no injury on either boy named or implied (no stitches, no cast, no side: their bodies are hands, mouths, necks,
     the scar through Haechan's eyebrow, his moles); Jungwon uses his right hand; the Discman never plays; no wedding talk.

   Inventions for Kat to confirm (small): the seawall car park below the Lee house where the Rexton goes when nobody's meant to
   know; a harbor watchman with a torch who believes they're married; Dal's glove box (the registration papers, a cassette, a
   strip of something Haechan swears came with the car); the radio on the annex sill on a timer that comes on at 5:10 with
   the coast forecast; the laundry room window onto the side path (the book's), Mrs. Bang ironing at half past five; a
   high-necked black sweater left folded on the dryer; Jungwon had piano lessons until twelve and "only the right hand
   stayed"; the front-room piano's lowest A, which booms. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };

  /* ── Haechan, his route ── */
  add('haechan', 'friend', [
    { id: 'epi-s-haechan-fogged', title: 'fogged', hint: "The Rexton's idling at the side gate with the lights off. He says the tide's worth seeing tonight. You can't see the tide from anywhere he's going.",
      after: '3/1', until: '3/9', slots: ['evening'], events: ['epi-s-hc-annex'], noFlags: [], route: 'haechan', noRoute: null,
      place: 'Incheon · The Car', time: 'Evening', scene: [
      { music: 'epi-s-haechan' },
      { n: "He was at the side gate at nine with the Rexton's lights off and the engine running and the window down, chewing, and when she came out along the path by the onggi jars in her coat he didn't say anything, only leaned across and pushed the passenger door open from inside, and she got in, and he drove off down the hill without turning the lights on until the corner." },
      { s: 'solar', f: 'neutral', t: "Where are we going?" },
      { s: 'haechan', f: 'happy', t: "To look at the tide." },
      { s: 'solar', f: 'neutral', t: "You can't see the tide at night, Haechan." },
      { s: 'haechan', f: 'happy', t: "That's true. That's very true, agasshi. That's going to be a real problem for us." },
      { n: "He didn't go far. Down the hill, round the back of the seawall, onto a strip of cracked concrete below it where the fishermen parked in the day and nobody parked at night, between a stack of old crab pots and a wall with something painted on it that the weather had made illegible, and turned the engine off, and the lights, and the dark came down on the car like a cloth." },
      { n: "Out past the windscreen, nothing. The sea was out, a long way out, and there was only the smell of it coming in at his window, mud and salt and iron, and the sound of it, very far, the faint hiss of water moving over flats in the dark." },
      { n: "He didn't touch her. That was the first thing. He sat with his wrists on the wheel looking out at the dark where the sea wasn't, chewing slowly, and didn't look at her, and didn't reach over, and the not-reaching filled the car until she could hear her own pulse in it." },
      { n: "It had been days since the annex. Since the bolt. In the house he was what he'd always been, agasshi at breakfast, the joke at the stove, the shape on the step at night with the radio, and only she could see the difference, which was that now he never once let his eyes stay on her for more than a second in front of anyone, and when he looked away it was like a door being shut very carefully on a room with a fire in it." },
      { s: 'haechan', f: 'neutral', t: "I can't do it in the house." },
      { s: 'solar', f: 'neutral', t: "Do what?" },
      { s: 'haechan', f: 'serious', t: "Look at you." },
      { n: "He still wasn't looking at her. He said it to the windscreen. He'd aimed it. She knew by the gum, which had stopped." },
      { s: 'haechan', f: 'serious', t: "Your father's at the end of the table. Mrs. Bang's at the stove. The whole house is watching me not look at you. It's like holding my breath for eleven hours a day. So." },
      { s: 'haechan', f: 'happy', t: "So I thought I'd drive somewhere very dark and do it for a bit. Get it out of my system. Like a sneeze." },
      { choose: [
        { t: "Then look.", stat: { courage: 1 }, then: [
          { n: "He turned his head." },
          { n: "He looked at her the way he never did in daylight. All of it. Slowly, the whole of her face in the almost-dark, the way you'd read something you'd been carrying around for a long time and finally let yourself unfold, her eyes and her mouth and the pins in her hair and her throat above the collar of her coat, and back to her mouth, and stayed there, and she felt it like a hand." },
          { n: "It didn't get anything out of his system. She watched it go the other way." },
          { s: 'haechan', f: 'flustered', t: "Yeah. No. That was a mistake." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(Take the gum out of his mouth.)", stat: { charm: 1 }, then: [
          { n: "She reached over and took the gum out of his mouth. With her fingers. He let her. He sat very still and let her, and she wrapped it in the paper from the dashboard and put it in the ashtray and shut the ashtray with a click." },
          { s: 'haechan', f: 'flustered', t: "That was mine." },
          { s: 'solar', f: 'neutral', t: "You're quitting." },
          { s: 'haechan', f: 'flustered', t: "That's cigarettes. The gum is the quitting. You've taken my quitting, agasshi. Now what do I do with my mouth." },
          { n: "She didn't answer. She didn't have to. He heard what he'd said about two seconds after she did, and shut his eyes, and said *ah, fuck,* very quietly, to the roof of the car, and she laughed, and then he was looking at her, and then she wasn't laughing." }
        ] }
      ] },
      { n: "It was her who moved. She'd tell herself that later, and it would be true, for once." },
      { n: "She got her hand in the front of his jacket and pulled, and he came across the gearstick at her as if he'd been leaning on a door and somebody had opened it, and his mouth was on hers, cold from the window, cinnamon, and his hand was in her hair, finding the pins, pulling them out one after another without looking and dropping them God knew where, into the footwell, the seat, Dal's ashtray, until all of it came down over her shoulders and his fingers went into it to the root and he made the sound, the one from the annex, low in his chest, like a man setting something heavy down after carrying it up a hill." },
      { n: "The gearstick was in the way. The handbrake was in the way. Everything in the front of a Rexton was in the way, it turned out, it had been designed by a man who had never once wanted to kiss anybody, and she said so, into his mouth, and he laughed against her teeth and said *back,* and they went over the seats, which was not dignified, which involved her boot in the headrest and his elbow in the roof and both of them saying *shh* to each other in a car on an empty concrete strip at the bottom of a seawall where there was nobody on earth to hear them." },
      { n: "In the back he pulled her into his lap and she went, her knees either side of him on Dal's old seat, the springs complaining, her coat open, his jacket open, and his hands went under her sweater, up her back, flat, spread wide, burning, the way they'd gone in the annex, as if he were holding her up out of deep water. She had her mouth on his neck. On the mole under his jaw, the one she'd been looking at across the breakfast table for eleven hours a day for three weeks without once letting herself, and she bit it, not gently, and felt the whole of him go taut under her like a rope taking weight." },
      { s: 'haechan', f: 'flustered', t: "Solar." },
      { n: "Not agasshi. The other one. The tell. He'd said it maybe four times in his life, and every one of them she could have told you the date of." },
      { n: "The windows had gone white. All of them. Their breath, the heat off them, the cold outside, the whole car fogged from the inside to the top so that the dark beyond it was gone and there was only this, the small warm white room of the back seat, his hands, her hair everywhere, the smell of the sea and diesel and him." },
      { n: "Then there was a light." },
      { n: "A torch. Bobbing. Coming along the concrete strip from the seawall steps, swinging, and then a tap on the fogged window right beside her head, metal on glass, three times, polite and absolutely relentless." },
      { n: "They froze. All of them, all at once. His hands still under her sweater. Her hands still in his shirt. The torch on the white glass a foot from her face, a blurred moon." },
      { s: 'haechan', f: 'surprised', t: "...Don't move." },
      { s: 'solar', f: 'flustered', t: "I'm not moving. Where would I move. We're in a car." },
      { n: "Tap tap tap." },
      { n: "He took his hands out from under her sweater, which took a while, because they didn't want to go, and pulled her coat closed over her, and reached past her and wound the window down five centimeters, and the cold came in, and the torch, and above the torch, the face of a very old man in a padded watchman's jacket with earflaps, looking at the two of them in the back of the Rexton with the expression of a man who had seen everything on this seawall in fifty years and was going to see it all again." },
      { s: 'haechan', f: 'happy', t: "Evening, ajeossi." },
      { n: "His voice was perfect. Cheerful, easy, warm, the voice for aunties and old men at the quay, the voice of a man with absolutely nothing in the world to hide. She'd never been so impressed by anything in her life. She had her face in his shoulder and was shaking." },
      { s: 'haechan', f: 'happy', t: "We're married. Three years. It's our anniversary. We came to look at the tide." },
      { n: "The old man looked at the dark beyond the seawall, where there was no tide to look at. He looked at the fogged windows. He looked at the hairpins on the parcel shelf. He looked at Solar's hair, all of it, down." },
      { s: 'watchman', f: 'neutral', t: "Tide's out." },
      { s: 'haechan', f: 'happy', t: "We know. We're waiting for it to come back. We're very patient people." },
      { n: "A long pause. The torch didn't move." },
      { s: 'watchman', f: 'neutral', t: "Then go home and wait for it. Your wife's cold." },
      { n: "And he went away along the concrete with his torch bobbing and his earflaps flapping, without hurrying, back toward the seawall steps, and they sat in the back of the car with the window five centimeters open and the cold coming in, completely still, until the torch had gone up the steps and out of sight, and then she lost it entirely, face in his neck, and he lost it too, his head back against the seat and his whole chest going under her, both of them laughing so hard the car rocked on its springs, which, she said when she could speak, was exactly what they'd been trying not to make it do." },
      { s: 'haechan', f: 'happy', t: "Three years. Did you hear me? I gave us three years. I'm very generous." },
      { s: 'solar', f: 'happy', t: "Our anniversary." },
      { s: 'haechan', f: 'happy', t: "I'll get you something. A crab pot. There's a lot of them. Pick one." },
      { n: "She got her breath back in his lap with her forehead on his collarbone. Then she climbed off him, and over into the front, with no dignity at all, to look for her pins in the footwell, and in the dark, feeling along under the dashboard, her hand found the catch of the glove box, and it fell open." },
      { choose: [
        { t: "(Look in the glove box.)", flag: 'epi-s-glovebox', stat: { knowledge: 1 }, then: [
          { n: "Registration papers in a plastic sleeve. A torch with no batteries. A trot cassette with its label in Dal's square writing. A packet of the cinnamon gum, unopened. And behind the registration papers, pushed right to the back where you'd only find it if you were looking for hairpins at ten o'clock at night, a strip of something in foil that was very definitely not gum." },
          { n: "She held it up between two fingers in the light from the glove box bulb and turned round in the seat and looked at him." },
          { n: "He looked at it. He looked at her. He'd gone a color she'd never seen on him, a deep slow red from the collar up, all the way to the scar in his eyebrow." },
          { s: 'haechan', f: 'flustered', t: "That's Dal's car." },
          { s: 'solar', f: 'neutral', t: "Haechan." },
          { s: 'haechan', f: 'flustered', t: "The car came like that. It was in the will. I've never looked in that glove box in my life. I didn't know it opened. I thought it was decorative." },
          { s: 'solar', f: 'happy', t: "The registration papers are in your name. From January." },
          { s: 'haechan', f: 'flustered', t: "...I'm going to drive into the sea now, agasshi. Hold on to something." },
          { n: "She put the strip back behind the papers, very neatly, and shut the glove box, and didn't say anything else about it, and that was worse, and he knew it was worse, and he drove her home with the windows down to clear the fog and his ears red the whole way, singing trot at the top of his voice to drown out the silence she wasn't making." }
        ] },
        { t: "(Leave it. Find the pins.)", stat: { kindness: 1 }, then: [
          { n: "She shut it again without looking. She found four pins in the footwell and one on the parcel shelf and one, inexplicably, in his boot, and put her hair back up in the dark by feel, badly, the way she'd never in her life put it up, and he watched her do it from the back seat with his arms folded and his head against the window and said nothing at all, and when she'd finished he leaned forward between the seats and took one pin out again, at the back, and put it in his pocket." },
          { s: 'haechan', f: 'neutral', t: "Tax." }
        ] }
      ] },
      { n: "He drove her back up the hill with the windows down and the fog going off the glass in long streaks, and stopped at the side gate with the lights off, the way he'd left it, and didn't get out." },
      { s: 'haechan', f: 'neutral', t: "Go in the kitchen way. Mrs. Bang's got her back to the door at this hour. She does the rice for the morning. She doesn't turn round for the rice." },
      { s: 'solar', f: 'neutral', t: "You've timed it." },
      { s: 'haechan', f: 'serious', t: "I've timed everything in that house for seven years, agasshi. I just never had anything to time it for." },
      { n: "She went in the kitchen way. Mrs. Bang had her back to the door, washing the rice, and didn't turn round, and said, to the rice, *your hair's coming down,* and went on washing." },
      { later: { delay: 1, slot: 'early', thread: 'haechan', msgs: [
        { from: 'haechan', t: "found a pin in the seat this morning" },
        { from: 'haechan', t: "and one in the ashtray. and one in the heater vent somehow" },
        { from: 'haechan', t: "keeping them. dont ask for them back. anniversary present" }
      ] } }
    ] },

    { id: 'epi-s-haechan-dawn', title: 'five ten', hint: "His night off the watch. The annex light went out at midnight. The door's on the latch.",
      after: '3/1', until: '3/6', slots: ['late'], events: ['epi-s-hc-annex'], noFlags: [], route: 'haechan', noRoute: null,
      place: 'Incheon · The Lee House · Annex', time: 'Late Night', scene: [
      { music: 'epi-s-haechan' },
      { n: "It was his night off. The watch went Jungwon, then him, then Jungwon, alternate nights, midnight to four, and tonight was the Yang heir's, so at midnight the annex light at the bottom of the garden went out for the first time in a week, and she lay in bed with her eyes open and watched the dark where it had been, and at one she got up." },
      { n: "Coat over the pajamas. Boots in her hand. The back stairs in her socks, past the kitchen where Mrs. Bang had left the light on over the stove, out past the koi bucket under its board, down the four terraces in the frost. At the gate end of the garden, very far off, in the lantern light, a dark coat standing very straight, facing the road. He didn't turn round. She was certain he knew exactly where she was going and had decided to be looking at the road." },
      { n: "The steel door was on the latch. Not locked. It stuck in the cold and she shouldered it on the second push, the way you did, as quietly as a door like that could be shouldered, and the warm came out at her in a wave, the oil heater ticking on low, the smell of the place." },
      { n: "He was asleep." },
      { n: "She'd never seen it. Not once, in seven years, not in the car or on the step or in a chair in any kitchen or anywhere: Haechan asleep. He slept on his side on the narrow iron bed with Mrs. Bang's crane quilt pulled up to his ear and one arm out over the edge, his knuckles on the floor, his mouth slightly open, the wrecked hair over his forehead, his face gone completely, startlingly young, the face of somebody who'd arrived in this house at seventeen and had never once since been allowed to look like that in front of anyone." },
      { n: "She stood in the doorway in her coat with her boots in her hand and couldn't move for a moment." },
      { choose: [
        { t: "(Get in beside him. Don't wake him.)", stat: { kindness: 1 }, then: [
          { n: "She put her boots by the door, toes to the wall, beside his. She took her coat off. And she lifted the edge of the crane quilt and got in, slowly, onto the edge of the narrow bed, into the warm he'd made, her back to his chest, and lay very still, and the springs complained, long and low, like an old man getting up out of a chair." },
          { n: "He didn't wake. Not properly. His arm came back up off the floor in his sleep and went over her and pulled her in against him, hard, the way you'd pull in something on a deck in weather, and his face went into the back of her neck, and he said something into her hair, in Korean, a word she didn't catch, and was asleep again." },
          { n: "She lay there in the dark with his arm across her and his breath on her neck and the heater ticking and felt her whole body come down, all at once, from somewhere very high up where it had been holding itself for three weeks, and she thought, I'll stay ten minutes, and then she thought nothing." }
        ] },
        { t: "Donghyuck-ah. (Quietly.)", stat: { courage: 1 }, then: [
          { n: "He was awake before she'd finished saying it. Up on one elbow in the dark, his hand already going under the pillow for something that wasn't there any more, his eyes open and wild, and then he saw her, and everything in him that had come up came down." },
          { s: 'haechan', f: 'surprised', t: "...Agasshi." },
          { s: 'haechan', f: 'flustered', t: "It's my night off. It's my one night. I was sleeping. Do you know how long it's been since I slept. I was having a dream about crabs." },
          { s: 'solar', f: 'happy', t: "Good crabs?" },
          { s: 'haechan', f: 'flustered', t: "Great crabs. Wonderful. I'll never see them again. Get in, you're freezing, I can feel it from here." }
        ] }
      ] },
      { n: "Later she couldn't have said how it went from that to the rest of it. Whether it was her or him. Whether he woke properly and found her there, or had been awake the whole time, pretending, the way he pretended everything, lying very still with his arm over her and his heart going like a trapped bird against her back." },
      { n: "Only that at some point his mouth was on the back of her neck, not sleeping, on the soft place under her hair, slow, and his hand was flat on her stomach under her pajama top, and she'd turned over in the narrow bed to face him so fast the springs said something rude, and he laughed into her mouth, and the laugh went out of him all at once the way it did when something was real." },
      { n: "The bed was too small. It had always been too small. Her knee against the wall and his shoulder off the edge and the quilt going and nobody caring, and his hands, his hands everywhere, rough and warm and careful and then not careful, and his voice in her ear saying her name, the real one, the tell, over and over, low, like a man reading out the islands one by one to make sure they were still there." },
      { n: "He stopped her once, a hand flat on her back, his forehead on hers, breathing, his eyes very dark and very close in the dark." },
      { s: 'haechan', f: 'serious', t: "The heir's on the gate." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'haechan', f: 'serious', t: "He'll have seen you come down." },
      { s: 'solar', f: 'neutral', t: "He was looking at the road." },
      { n: "He looked at her a long time. Something went across his face that wasn't jealousy and wasn't gratitude and was, she thought, both, and was harder than either." },
      { s: 'haechan', f: 'neutral', t: "...Then I owe him a road." },
      { n: "And he reached over her for the bolt on the steel door, and shot it, and it went home with the sound like a full stop, and the rest was nobody's business but the cranes'." },

      { place: 'Incheon · The Lee House · Annex', time: 'Before Light', soft: true },
      { n: "The radio woke her." },
      { n: "Five ten. A click from the sill and then the man's voice, flat and kind, reading the coast weather into the dark, the way it did every morning at ten past five on a timer he'd never told her about. *For the islands. Socheong, Baengnyeong, Deokjeok.*" },
      { n: "She didn't know where she was. Then she did, all at once, the way you remember a word: the heater, the cranes on the quilt, the narrow wall against her knee, his arm under her neck, gone dead, he'd have no feeling in it, and his other hand on her hip under the quilt, holding on even asleep, and his breath in her hair going long and slow." },
      { n: "She'd woken up with him. She'd never done that. Not here, not anywhere, not once in seven years. Every other time one of them had gone, in the dark, before anything could be seen in daylight. She lay very still and looked at it. At him. The scar through his eyebrow, very close. The moles, one, two, three along his jaw and one on his neck, which she counted, because she counted, and the mark under his ear that she had put there, going dark already, and his mouth, slightly open, and his eyelashes, which were absurd, which were longer than hers, which nobody in this city knew." },
      { n: "The window over the bed had gone grey at the edges. Up the garden, through the clear corner where somebody's hand had wiped the fog off the glass at some point in the night, the house: dark, and then one light. The kitchen. Half past four had come and gone. Her father was at the table with the paper." },
      { s: 'haechan', f: 'neutral', t: "You're counting my face." },
      { n: "He hadn't opened his eyes. His voice was ruined with sleep, lower than she'd ever heard it." },
      { s: 'solar', f: 'neutral', t: "Four moles." },
      { s: 'haechan', f: 'neutral', t: "Five. There's one you can't see from there. You'll have to come back another time." },
      { n: "He opened his eyes. He looked at her in the grey, from about ten centimeters, the way he looked at her in the car at the seawall, all of it, slowly, without the joke, and his hand on her hip tightened, and she watched him understand what she'd understood a minute before: that she'd woken up with him, here, and it was nearly light, and the world hadn't ended." },
      { glitch: { near: true } },
      { n: "For one second the radio on the sill said the islands in the wrong order. Deokjeok first. Then the man's voice went on as if nothing had happened, and Haechan's arm under her neck went rigid, and they lay very still looking at each other in the grey with the same thought in both their faces, and didn't say it." },
      { s: 'haechan', f: 'serious', t: "Not yet." },
      { n: "He said it to her, or to the radio, or to something else. She didn't ask which. She put her hand flat on his chest over his heart until it slowed." },
      { s: 'haechan', f: 'neutral', t: "Your father's in the kitchen." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'haechan', f: 'neutral', t: "The back door's the kitchen, agasshi." },
      { s: 'solar', f: 'neutral', t: "I know where the back door is." },
      { n: "He thought about it with his eyes shut. She watched him think about it, the whole house laid out behind his eyelids, every door and stair and window, the way he'd had it laid out for seven years with nothing to time it for." },
      { s: 'haechan', f: 'neutral', t: "The laundry window. On the side path. The catch is broken, it has been since Christmas, I've been meaning to tell Mrs. Bang for three months and I haven't, and now you know why. Push the bottom. It goes up." },
      { s: 'solar', f: 'happy', t: "You've never been meaning to tell her." },
      { s: 'haechan', f: 'happy', t: "I've been meaning to tell her every single day. I'm a very honest man." },
      { n: "She got up. It was the hardest thing she'd done in a month. He didn't help. He lay on his back on the narrow bed with his dead arm out where her neck had been and the crane quilt round his waist and watched her look for her pajama top in the grey and put her coat on over it and pick up her boots, with an expression she would keep, she decided, somewhere safe, for a long time." },
      { s: 'haechan', f: 'neutral', t: "Agasshi." },
      { n: "She stopped at the door." },
      { s: 'haechan', f: 'neutral', t: "...Nothing. Go. Mind the frost on the second terrace. It's like glass." },

      { place: 'Incheon · The Lee House · Garden', time: 'Before Light', soft: true },
      { n: "The garden was white. The frost had come down in the night and furred every leaf and the gravel and the steps, and the sky was going from black to the grey of the inside of a shell, and she went up the four terraces in her socks with her boots in her hand because boots on frozen gravel were loud, and the cold went up through her feet into her teeth, and she didn't care at all." },
      { n: "At the gate end of the garden the dark coat had gone. The watch ended at four." },
      { n: "The side path. The laundry window, low, under the eaves, its pane steamed from inside. She pushed the bottom of the frame. It went up, with a small complaint, exactly as he'd said." },
      { choose: [
        { t: "(Climb in.)", flag: 'epi-s-laundry-window', stat: { courage: 1 }, then: [
          { n: "She went in sideways over the deep steel sink with her boots in one hand, which was not graceful, and put one sock in the sink, which was wet, and got the other leg over, and dropped onto the cold tiles in the dark of the laundry room, and straightened up, and the fluorescent tube came on." },
          { n: "Mrs. Bang was at the ironing board." },
          { n: "Her ironing board. The scorched cover with the faded blue flowers that nobody else in the house was allowed to touch. In her quilted vest with the iron in her hand and a pile of shirts beside her, at half past five in the morning, the way she'd been ironing at half past five in the morning for twenty-six years, and the brass bolt on the inside of the door shot home at shoulder height, where she'd put it, so she could iron in peace." },
          { n: "She looked at Solar. At the wet sock. At the boots. At the coat over the pajamas. At her hair, which was down, all of it, and full of the night, and at her neck." },
          { n: "She didn't say anything for a very long time. The iron hissed. Then she put it down on its heel, and reached over to the top of the dryer, and picked up a sweater that was folded there, black, high-necked, Solar's own, from the clean pile, and held it out." },
          { s: 'mrsbang', f: 'neutral', t: "Breakfast at seven. Wear this." },
          { s: 'solar', f: 'flustered', t: "Mrs. Bang—" },
          { s: 'mrsbang', f: 'neutral', t: "And tell him the window catch is broken. I've known since Christmas. I've been waiting to see how long he'd let it stay broken. Three months. Aigoo. That boy." },
          { n: "She picked the iron up again and went back to the shirt, a white one, one of his, and ironed the collar very carefully, the points first, the way you were meant to, and didn't look up again, and Solar went out of the laundry room in her wet sock with the sweater against her chest and up the back stairs past the kitchen door, behind which her father turned a page of the paper and hummed four bars of trot, and did not stop humming." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(Go round by the kitchen and face it.)", stat: { charm: 1 }, then: [
          { n: "She didn't climb in. She put the window down again, gently, and went round the side of the house in her socks to the back door, and put her boots on the step beside the koi bucket, and went in." },
          { n: "Her father was at the table under the one light with the paper open and his glasses on the cord and an Esse Light going in the saucer. He looked up. He looked at her: the coat over the pajamas, the socks wet with frost, her hair down, all of it, full of the night. He looked at her for a long moment over his glasses with absolutely no expression whatsoever." },
          { n: "Then he moved the second chair out from the table with his foot." },
          { s: 'appa', f: 'neutral', t: "Tides. Inner harbor. Low water at—" },
          { s: 'solar', f: 'neutral', t: "Six oh four." },
          { s: 'appa', f: 'neutral', t: "Six oh four." },
          { n: "He went back to the paper. She sat. He didn't ask her anything. He slid the crossword across with his pen on top of it, and she did eleven across, and he made the small noise in his throat that meant *of course you did,* and the window over the sink went from grey to white, and at six Mrs. Bang came in from the laundry room with a high-necked black sweater over her arm and put it on the back of Solar's chair without a word." }
        ] }
      ] },
      { later: { delay: 1, slot: 'after', thread: 'yunjin', msgs: [
        { from: 'yunjin', t: "wifey" },
        { from: 'yunjin', t: "why are u wearing a turtleneck indoors. its 22 degrees in this house" },
        { from: 'yunjin', t: "actually dont answer. i have eyes. i have TWO eyes" },
        { from: 'yunjin', t: "im so proud of u and also im going to need every single detail at a later date" }
      ] } }
    ] }
  ]);

  /* ── Jungwon, his route ── */
  add('jungwon', 'friend', [
    { id: 'epi-s-jungwon-hands', title: 'four hands', hint: "Somebody's at the piano in the front room, playing only the right hand of something. Badly. Carefully.",
      after: '3/1', until: '3/9', slots: ['evening'], events: ['epi-s-jw-tea'], noFlags: [], route: 'jungwon', noRoute: null,
      place: 'Incheon · The Lee House', time: 'Evening', scene: [
      { music: 'epi-s-jungwon' },
      { n: "Somebody was at the piano in the front room." },
      { n: "She heard it from the stairs. The right hand of the easy Clementi, the first page, played slowly, very correctly, the way a person plays who learned it once a long time ago and has been running through it in his head since, and the left hand not there at all, so that the melody walked on its own over nothing, like a man crossing a bridge with the rails taken off." },
      { n: "Jungwon was on the piano stool in his dark suit with the jacket off and folded over the back of a chair, his shirt sleeves turned back twice, his right hand on the keys and his left on his knee, and when she came into the doorway he stopped mid-phrase and didn't turn round." },
      { s: 'jungwon', f: 'neutral', t: "Good evening, Solar-ssi. I'm sorry. Your father went up to change. He said to wait. I was told this was a piano." },
      { s: 'solar', f: 'happy', t: "It's a piano." },
      { s: 'jungwon', f: 'neutral', t: "Mrs. Bang said it's yours. I asked if I could. She said nobody's asked her that in twenty years and I could do what I liked." },
      { s: 'solar', f: 'neutral', t: "You play." },
      { s: 'jungwon', f: 'neutral', t: "I had lessons until I was twelve. Then I stopped. Only the right hand stayed. I don't know why. The left just went." },
      { n: "He played the phrase again. Right hand. The melody walking out over nothing. He played it well, actually, very well, and very precisely, and it sounded like the loneliest thing she'd ever heard in this room, and she'd sat in this room a thousand times with the door shut." },
      { n: "She sat down beside him on the stool. It wasn't a stool for two. It was a stool for one sheltered daughter and her alibi. Her hip against his. Her shoulder against his arm. She put her left hand on the keys, low, where the bass would be." },
      { s: 'solar', f: 'neutral', t: "From the top. I'll take the left." },
      { n: "He didn't say anything. He looked at her hand on the keys beside his, his right and her left, as if they were two people he'd been introduced to and was trying to place." },
      { n: "They played. It was terrible at first, the tempo all wrong, him too careful and her too used to playing with herself, the two hands not knowing each other, and then on the second line it wasn't terrible, it was something else, his melody walking out and her bass coming up under it like the floor of the bridge being put back, plank by plank, until the thing could hold weight." },
      { n: "She'd never played this piece with anyone. She'd only ever played it alone. She'd never known that the hands were having a conversation, that the left answered the right, that they'd been talking the whole time and she'd been doing both voices." },
      { n: "On the second page his little finger brushed her thumb in the middle of the keyboard, where his hand came down and hers came up, and neither of them moved them apart. They went on playing. The next time the phrase came round the same thing happened, and it wasn't an accident, and both of them knew it wasn't, and nobody stopped." },
      { n: "Mrs. Bang went past the open door with a duster. She stopped. She looked in. Solar saw her out of the side of her eye: Mrs. Bang in the hall, the duster in her hand, looking at the two of them on one piano stool, and her mouth doing something complicated, and then she went on past, dusting, loudly, and pulled the door to behind her. Not shut. To. A hand's width. The way you'd leave a door for a cat." },
      { n: "They got to the end of the first movement. The last chord, his right and her left, held. It rang out in the front room and went away into the curtains." },
      { n: "Neither of them took their hands off the keys." },
      { s: 'jungwon', f: 'neutral', t: "That was the first time I've heard the left hand. Since I was twelve." },
      { s: 'solar', f: 'neutral', t: "It's been there the whole time." },
      { s: 'jungwon', f: 'neutral', t: "I know. I just couldn't hear it." },
      { choose: [
        { t: "(Turn his hand over on the keys. Hold it.)", stat: { kindness: 1 }, then: [
          { n: "She took his right hand off the keys. Turned it over, palm up, on the wood above the keyboard, on the little shelf where the music goes, and looked at it. A size small. Clean. A writing callus on the middle finger. No scent. She put her fingers along the inside of his wrist, where the pulse was." },
          { n: "He let her. He sat very still and let her hold his wrist like a nurse, counting, and she counted, and it was fast, much faster than his face, and she looked up at his face, which was doing nothing, the polite nothing, and down at his wrist, which was doing everything, and she thought it was the first time in her life she'd caught Yang Jungwon lying with his whole body." },
          { s: 'solar', f: 'happy', t: "A hundred and four." },
          { s: 'jungwon', f: 'flustered', t: "That's not a polite thing to count, Solar-ssi." },
          { s: 'solar', f: 'happy', t: "I'm not a polite person." },
          { s: 'jungwon', f: 'neutral', t: "No. I know. It's the thing about you I'd least like anybody else to find out." },
          { bond: { jungwon: 1 } }
        ] },
        { t: "Play it again. Slower.", stat: { proficiency: 1 }, then: [
          { n: "They played it again. Slower. Much slower than it was written, so slow the Clementi stopped being an exercise for daughters and became something else, something you could hear the room in, the radiator ticking, the clock in the hall, his breathing beside her, which she could feel through her arm, and which got slower too, to match, and then didn't." },
          { n: "On the last page he stopped playing. His hand stayed on the keys and stopped. She went on alone with the left hand for two bars, the bass walking out on its own over nothing, and stopped too." },
          { n: "When she turned her head he was looking at her. Not at the keys. At her. From very close, on the stool, with the stillness on his face, the rare one, the pleased one, all of it." }
        ] }
      ] },
      { n: "He kissed the inside of her wrist." },
      { n: "He lifted her left hand off the keys in his right, the way you'd lift something out of water, and turned it, and put his mouth to the inside of her wrist where the pulse was, and stayed there, his eyes shut, his breath warm on it, for exactly as long as he'd held the last chord, and she felt it go up her arm into her chest and down through the whole of her like a note through a soundboard." },
      { n: "Then she had his tie in her fist. She didn't remember deciding to. His mouth was on hers, and it wasn't the kiss that had nearly happened in the study, careful, every ending still on, nothing measured in it at all, his hand at her jaw and then in her hair, at the pins, pulling, her hair coming down over the back of her chair and his wrist, and she was turning toward him on the stool for one, and her hip came down on the bottom of the keyboard." },
      { n: "The lowest A. The whole of the bottom octave. A huge, ugly, booming chord, the kind that makes the floor buzz and the windows hum, rang out through the front room and the hall and up the stairs and, presumably, out into the garden and the street and the harbor and the whole of Incheon." },
      { n: "They froze." },
      { n: "The chord went on ringing. It took forever. It took a whole year to die away into the curtains." },
      { n: "From upstairs, through the floor, faintly, her father's voice. Mild. Not raised. Just carrying, the way it always carried, in a soft voice nobody ever interrupted." },
      { s: 'appa', f: 'neutral', t: "Sol-ah. The Clementi. From the top, please." },
      { n: "She put her face in Jungwon's shoulder. He made a sound she'd never heard from him, a sort of choked, appalled, helpless sound, his whole chest going with it, and she realized he was laughing, really laughing, without his wrist to his mouth for once, into her hair, with his hand still at the back of her head." },
      { s: 'jungwon', f: 'flustered', t: "Your father." },
      { s: 'solar', f: 'happy', t: "He's upstairs." },
      { s: 'jungwon', f: 'flustered', t: "Your father plays baduk against me every Tuesday, Solar-ssi. Your father is going to look at me across a board tomorrow. He's going to be very kind. He's going to let me win." },
      { s: 'solar', f: 'happy', t: "He never lets anybody win." },
      { s: 'jungwon', f: 'neutral', t: "He'll let me win. That's how I'll know he heard." },
      { n: "He put her pins back in. He did it himself, carefully, by feel, at the back of her head, one by one, with his right hand, the way he'd do anything he'd been told was difficult, while she sat very still on the stool and felt his fingers in her hair, and the last pin went in, and he smoothed the hair over it with his palm, once, and took his hand away." },
      { s: 'jungwon', f: 'neutral', t: "From the top. Your father asked." },
      { n: "So they played it from the top. His right hand. Her left. All the way through, properly, the Clementi, the sheltered daughter's piece, for her father upstairs, and they didn't look at each other once, and halfway down the second page his little finger found her thumb in the middle of the keyboard and stayed there, and they played the rest of it like that, a little wrong, joined in the middle, and the door stood open a hand's width, for the cat." }
    ] }
  ]);
})();
