/* The Stay epilogue, the days pass: twelve more hangouts and two routines (Nov 5 2026, Kat's "lengthen them and do the same
   improvements we did to the Runners epilogue"; DO-NOT-OPEN-stay-epilogue-expansion.md). Data only; loaded with the world
   after story-days (epilogue.js WORLDS.stay.files). Pushes onto the existing bonds with Runners' `add` (people.js assigns
   B.<id> = {...} outright, and the checker loads this file first), so load order doesn't matter. No new bonds.

   Hangouts (window · slot · gates):
     fuuka     epi-st-fuuka-phrase    'jal ja'          3/24-3/26 · late (the lounge; her Korean phrasebook, bought for the
                                                          ones who went home)
     yukari    epi-st-yukari-masks    'sheet masks'     3/25-3/28 · late · events epi-st-rooms (Solar's floor; Hyein's masks)
     junpei    epi-st-junpei-cake     'contraband'      3/27-3/28 · late · events epi-st-hanami (the kitchen at midnight: the
                                                          cake he hid in the hanami basket; a party that grows to everyone;
                                                          sets epi-st-cake)
     aigis     epi-st-aigis-watch     'watch'           4/1-4/3 · late · events epi-st-charms (the stairs at two a.m.)
     akihiko   epi-st-akihiko-couch   'gloves on'       4/3 · late · route akihiko · events epi-st-clocks (the lounge couch;
                                                          cut away; the morning)
     shinjiro  epi-st-shinjiro-call   'lights out'      4/1-4/3 · late · route shinjiro · events epi-st-charms (awake: he calls
                                                          after lights out / asleep: the night nurse holds the phone)
     ken       epi-st-ken-shadow      'the shadow'      4/1-4/5 · after · events epi-st-charms (Koromaru won't leave her side;
                                                          the riverside; Ken's kanji)
     shinjiro  epi-st-shinjiro-chairs 'two chairs'      3/29-4/5 · after (any route: Akihiko and Solar visit together; awake /
                                                          asleep; per route)
     4/6 goodbyes (events epi-st-last-day; junpei and mitsuru after or evening, ken after only, aigis evening only (sunset);
     the evening ones follow story-days.js epi-st-last-evening):
     junpei    epi-st-junpei-iron     'the iron'        the laundry room; the scorched shirt; Yukari
     mitsuru   epi-st-mitsuru-sundays 'sundays'         her room in boxes; the planner page
     ken       epi-st-ken-tomorrow    'tomorrow'        his bag by the door; walk him to school at 8:10
     aigis     epi-st-aigis-wave      "arm's length"    the front step at sunset; learning to wave "see you tomorrow"
   Late Night hangouts show only on world.js lateOpen nights (3/24-3/28, 4/1, 4/3: every night the story doesn't own).
   Routines: epi-st-rt-petals (early 4/2-4/6: petals on the front step, Koromaru snapping at them), epi-st-rt-game (evening
     3/24-4/4: Junpei and Ken's fighting game in the lounge).
   Flags set: epi-st-cake (contraband) and epi-st-jalja (jal ja); texts-days.js's cake text and two topics read them. Flags read: epi-st-told (ken tomorrow), epi-st-kept-hyein (sheet masks: the sewing kit on her desk), epi-st-rooms-box (sheet masks).
     ifEpiRoute akihiko / shinjiro / sees (chairs, iron, sundays). ifYear { anyFlag: ['shinji-awake', 'ending-shinjiro'] }
     (both Shinjiro hangouts).
   Glitches: none scheduled. One bare { ifGlitch: 3 } 'sound' in aigis watch (a bell, very faint), like people.js.
   Canon held: Wren is never literal; nobody explains the pull; S.E.E.S. know only what the story has shown them (told /
     kept); the searchers are traces (rooms, masks, the phrasebook), never present; Shinjiro's awake lines stay a beat slow
     and short; Ken is ten and starts sixth grade on Wednesday 4/7.
   Inventions (Kat may change any): Fuuka's Korean phrasebook (the lore bible's) was bought in December "for Hyein and the
     others", with sticky tabs; she can say "baby carrots" and "where is the bathroom"; Hyein's sheet masks in the second-floor
     bathroom cabinet (snail, rice, "honey glow"); the cake is a strawberry shortcake from the bakery at the bottom of the
     hill, hidden behind the miso; Junpei cuts it into one more piece than there are forks; the stairs' third step creaks
     (people.js); the night nurse's cordless phone; Akihiko's "I wasn't asleep"; Junpei's note on the blanket; Ken's
     kanji for the first week (spring, bridge, return); Junpei's scorch is iron-shaped, on the back of the shirt; Mitsuru's
     planner page lists every Sunday to December in ink; Ken's school gate at 8:10; Aigis has never waved goodbye. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const B = (R.bonds ||= {});
  // people.js assigns B.<id> = {...} outright. If it hasn't loaded yet (the checker loads files alphabetically, so this one
  // comes first), hold the bond on an accessor that merges these hangouts into whatever people.js assigns later.
  const add = (id, role, list) => {
    if (B[id]) { (B[id].hangouts ||= []).push(...list); return; }
    let v = { id, role, hangouts: [...list] };
    Object.defineProperty(B, id, { enumerable: true, configurable: true, get: () => v,
      set: o => { (o.hangouts ||= []).push(...v.hangouts); v = o; } });
  };
  const BOTH = ['after', 'evening'];
  const AWAKE = { anyFlag: ['shinji-awake', 'ending-shinjiro'] };
  const BYE = { after: '4/6', until: '4/6', slots: BOTH, events: ['epi-st-last-day'] };

  /* ── Fuuka ── */
  add('fuuka', 'friend', [
    { id: 'epi-st-fuuka-phrase', title: 'jal ja', hint: "There's a light on in the lounge after eleven. Fuuka, on the sofa, with a small fat book full of sticky tabs.",
      after: '3/24', until: '3/26', slots: ['late'], place: 'Iwatodai Dorm · Lounge', time: 'Late Night', scene: [
      { music: 'epi-st-evening' },
      { n: "The book was a Korean phrasebook, the pocket kind, with a cartoon of a smiling woman in a hanbok on the cover and about forty pink sticky tabs coming out of the top like feathers. Fuuka had it open on her knees and was mouthing at it, very quietly, with her eyes shut, the way she did her English vocabulary before a test." },
      { n: "She jumped when Solar came down. She closed the book on her finger, and then opened it again, because hiding it was clearly worse." },
      { s: 'fuuka', f: 'surprised', t: "Senpai! I. Hi. I couldn't sleep. I'm not doing anything." },
      { s: 'solar', f: 'happy', t: "You're doing something with forty tabs in it." },
      { s: 'fuuka', f: 'sad', t: "...I bought it in December. For Hyein-chan and the others. I thought if I could say even one real thing to them in their own words. I got as far as *where is the bathroom.* And *baby carrots*, for some reason. It's on the food page." },
      { n: "She turned it so Solar could see. The pages were soft with use. Somebody had underlined things in three colors of pen, and in the margin by GOODNIGHT, in Fuuka's tidy handwriting, she'd written *ask Yunjin how she says it, she says it different*, and never crossed it out." },
      { s: 'fuuka', f: 'neutral', t: "I know it doesn't matter now. I just didn't want to stop in the middle. It feels like leaving a sentence." },
      // Nov 11 2026 (Kat): who knows. Fuuka lived a winter beside the searchers; she'd heard Solar's Korean, only never aimed at her.
      { n: "Solar sat down next to her on the sofa. Her body knew the shape of the words before she'd decided anything, the way it knew which stair creaked, and it was strange to have them in her mouth again, here, in this lounge, in the dark, for somebody who'd only ever heard her say them across a table to someone else." },
      { choose: [
        { t: "(Say it for her. Jal ja.)", then: [
          { s: 'solar', f: 'neutral', t: "Jal ja. That's how you'd say goodnight to a friend. To somebody you're close to." },
          { s: 'fuuka', f: 'happy', t: "Jal... ja. Jal ja. Is that right? Did I do it right?" },
          { n: "She'd done it almost right. A little careful, a little too much like a question. It was the most Fuuka thing Solar had ever heard, and her throat went tight and she let it, for once, because it was dark and Fuuka was looking at the book." },
          { s: 'solar', f: 'happy', t: "You did it right." },
          { bond: { fuuka: 1 } }
        ] },
        { t: "(Take her pen. Write it in the margin, under Yunjin's.)", then: [
          { n: "She wrote it out in the margin under Fuuka's note, in hangul and then in letters underneath so Fuuka could read it, and then, after a second, the softer one too, the way Yunjin said it, gravel and all, as near as letters could get to it. Fuuka watched the pen the whole time like it was doing a magic trick." },
          { s: 'fuuka', f: 'sad', t: "...She does say it different. You remembered." },
          { s: 'solar', f: 'neutral', t: "I remember all of it." },
          { stat: { kindness: 1 } }
        ] }
      ] },
      { n: "Fuuka went up first. At the bottom of the stairs she stopped with one hand on the banister and said it, *jal ja*, to the lounge in general, very carefully, and went pink, and went up, and Solar sat in the dark for a while after with the little book left on the cushion beside her, open at the right page." },
      { flag: 'epi-st-jalja' }
    ] }
  ]);

  /* ── Yukari ── */
  add('yukari', 'friend', [
    { id: 'epi-st-yukari-masks', title: 'sheet masks', hint: "A knock at eleven. Yukari, in pajamas, with a cardboard box under her arm and a guilty face.",
      after: '3/25', until: '3/28', slots: ['late'], events: ['epi-st-rooms'], place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
      { music: 'epi-st-evening' },
      { n: "The box was full of sheet masks. Dozens. Flat foil packets, every color, every label in Korean, the kind Hyein had kept in bulk in the second-floor bathroom cabinet the way other people kept toilet paper, and had pressed on everyone in the dorm at least once with the zeal of a missionary." },
      { s: 'yukari', f: 'neutral', t: "I found them in the cabinet. Behind the bleach. There's like forty. I can't throw them out, that's psychotic, and I can't use them, I can't read them. One of them could be for feet." },
      { s: 'solar', f: 'happy', t: "So you came to me." },
      { s: 'yukari', f: 'blushing', t: "You can read them. Don't make it a thing." },
      { n: "They sat on the floor with their backs against the bed and the box between them, and Solar read the packets out loud one at a time. Rice. Green tea. Collagen. Honey glow, which Yukari said sounded like a stripper. Snail, which Yukari took out of Solar's hand with two fingers and put face down on the far side of the room." },
      { ifFlag: 'epi-st-kept-hyein', then: [
        { n: "On the desk above them the sewing kit sat where Solar had put it, pins still in their neat spiral, and Yukari looked at it once and then didn't, carefully, for the rest of the night." }
      ] },
      { ifFlag: 'epi-st-rooms-box', then: [
        { n: "There'd been a box for Hyein's things, labeled in Mitsuru's handwriting, in the storeroom by the stairs. Yukari hadn't put the masks in it. Neither of them mentioned that." }
      ] },
      { n: "They did the rice ones. Cold and wet and slapping onto their faces with a sound that made them both laugh, and then you couldn't laugh, because the mask slid, so they lay on the floor side by side with their faces white and blank like two ghosts in a cheap movie, staring at the ceiling, talking without moving their mouths." },
      { s: 'yukari', f: 'neutral', t: "She told me my pores were a choice. In October. To my face. In this exact cabinet voice." },
      { s: 'solar', f: 'happy', t: "She told me my posture was a cry for help." },
      { s: 'yukari', f: 'neutral', t: "...It kind of was." },
      { n: "The radiator ticked. Somebody's music went on and then off through the ceiling. Yukari's hand was lying on the floor between them, and after a while it found Solar's sleeve and held on to a bit of it, the way she did on trains, without seeming to notice it had." },
      { s: 'yukari', f: 'sad', t: "Do you think she knows? That we're using them. Is that stupid." },
      { choose: [
        { t: "She'd say we're doing it wrong.", then: [
          { s: 'yukari', f: 'neutral', t: "We're absolutely doing it wrong." },
          { n: "Yukari laughed, and the mask slid off her chin, and she said a word Mitsuru would have fined her for, and put it back on crooked, and they lay there with fifteen minutes on the packet's little clock going by in the dark, and for most of it neither of them was sad, exactly." },
          { bond: { yukari: 1 } }
        ] },
        { t: "(Don't answer. Hold her hand back.)", then: [
          { n: "She turned her hand over under Yukari's and held it back, and Yukari went still for exactly one second, the way she always did, and then didn't, and the masks dried on their faces, and somewhere around the end of the fifteen minutes Yukari fell asleep on the floor and Solar didn't wake her, and got the blanket off the bed, and left her the pillow." }
        ] }
      ] }
    ] },
  ]);

  /* ── Junpei ── */
  add('junpei', 'friend', [
    { id: 'epi-st-junpei-cake', title: 'contraband', hint: "Somebody's in the kitchen at midnight, very badly trying not to be heard. The fridge door. A whispered *yes*.",
      after: '3/27', until: '3/28', slots: ['late'], events: ['epi-st-hanami'], place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', scene: [
      { music: 'epi-st-evening' },
      { n: "Junpei, in the light of the open fridge, in boxers and a Gekkoukan baseball T-shirt, holding a cake box against his chest like a man who'd just pulled it out of a burning building." },
      { s: 'junpei', f: 'surprised', t: "Sol! Oh thank god. I thought you were Mitsuru-senpai. Shut the door. Shut the door, the light's on." },
      { n: "It was a strawberry shortcake from the bakery at the bottom of the hill, the one that gave Koromaru the ends of things. He'd hidden it in the hanami basket under the tarp, and Mitsuru had checked the basket at the door, and he'd panicked and carried it back up the hill in his jacket, and it had been in the fridge since Saturday behind the miso, where nobody had looked because nobody ever looked behind the miso." },
      { s: 'junpei', f: 'happy', t: "It was supposed to be a surprise. Then there was the juice game, and I got destroyed, and I forgot. So now it's a midnight surprise. Which is better. Which is way better." },
      { n: "He got two forks out. Then the kitchen door opened, and Yukari stood in it in her pajamas with her arms crossed." },
      { s: 'yukari', f: 'neutral', t: "I heard the fridge. I always hear the fridge. Is that a cake." },
      { s: 'junpei', f: 'flustered', t: "...Three forks." },
      { n: "Then Akihiko, from the stairs, who'd heard Yukari, and who said cake wasn't protein and took a fork anyway. Then Ken, in pajamas with rockets on them, who'd heard Akihiko on the third step, and who said he wasn't hungry and wasn't allowed up and sat on the counter. Then Koromaru, who'd heard the word cake in his sleep. Then Aigis, who'd heard everything and had come down to say so." },
      { s: 'aigis', f: 'neutral', t: "I heard a fork. Then five forks. I am not eating. I would like to be present for the cake." },
      { n: "Then Fuuka, apologizing before she was through the door. And last, in a dark red dressing gown, with her hair down, which nobody in the dorm had seen more than twice, Mitsuru, who stood in the doorway and looked at the cake, and at Junpei, and at the cake again." },
      { s: 'mitsuru', f: 'serious', t: "Iori. Is that the cake you hid in the basket." },
      { s: 'junpei', f: 'flustered', t: "...What cake. Which basket." },
      { s: 'mitsuru', f: 'happy', t: "I'd like a slice. A small one. A medium one." },
      { n: "So it was eight people and a dog in a kitchen built for three, the big light off so nobody upstairs would see it under their door and the fridge propped open with Ken's foot so they could see, the counter crowded, and somebody laughing too loud and getting shushed by everyone, and getting shushed harder by Mitsuru than anyone, in a whisper that was louder than the laugh." },
      { n: "Junpei handed Solar the knife. She cut. She wasn't thinking about it. She cut the way you count stairs in the dark, and when she put the knife down there was a slice in front of every person in the kitchen and one more, at the end, on the board, with a strawberry on it and nobody's fork." },
      { n: "Junpei looked at it. Everybody looked at it. She opened her mouth to say she'd counted wrong." },
      { choose: [
        { t: "(Leave it there.)", then: [
          { n: "She left it. Nobody touched it. It sat on the board at the end of the counter with the fridge light on it, the way Fuuka's box had sat at the end of the tarp, and Junpei ate his slice standing up and didn't look at it again, and the conversation went on around it the way water goes round a rock." },
          { s: 'fuuka', f: 'sad', t: "...You do it too, Senpai. The counting." },
          { s: 'solar', f: 'sad', t: "Every time." }
        ] },
        { t: "Koromaru. Good boy. Extra one.", then: [
          { n: "She put it on a saucer and put the saucer on the floor and Koromaru ate the extra slice in two bites with the strawberry, with enormous gratitude, and Ken said that was too much sugar for a dog, and Mitsuru said it was a special occasion, and Ken asked what the occasion was, and nobody answered, and then everybody answered at once, and none of the answers were the same." },
          { s: 'koromaru', f: 'happy', t: "Arf!" },
          { bond: { junpei: 1 } }
        ] }
      ] },
      { n: "They went up at one, all of them at once, in a crowd on the stairs, hissing at each other about the third step, which creaked anyway, every single time, under every single one of them." },
      { flag: 'epi-st-cake' }
    ] }
  ]);

  /* ── Aigis ── */
  add('aigis', 'friend', [
    { id: 'epi-st-aigis-watch', title: 'watch', hint: "Two in the morning. Something is standing at the top of the stairs, very still. It's Aigis. She knows you're awake.",
      after: '4/1', until: '4/3', slots: ['late'], events: ['epi-st-charms'], place: 'Iwatodai Dorm · Stairs', time: 'Late Night', scene: [
      { music: 'epi-st-rooms' },
      { n: "She was on the landing below the second floor, where the stairs turned, with her back to the wall and her hands folded in front of her, and her eyes on the corridor above, where the doors were. Haechan's. Hanni's. Hyein's. Yunjin's. All shut. She'd been there, Solar guessed, since about ten." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. You are not asleep." },
      { s: 'solar', f: 'neutral', t: "Neither are you." },
      { s: 'aigis', f: 'neutral', t: "I do not sleep. I rest. I am not resting. I am on watch. Mitsuru-san did not ask me to. I asked myself, and I said yes." },
      { n: "Solar sat down on the step below her. The wood was cold through her pajamas. Above them the corridor light buzzed faintly, the way it always had, and down the hall somebody's door was open a crack, Junpei's, and the sound of him sleeping came out of it, steady as a tide." },
      { s: 'aigis', f: 'neutral', t: "When people are going to leave, they check doors. I have observed it. Before a trip, Junpei-san checks his door three times. On the last night, Haechan-san stood outside his own door for four minutes before he went in. I did not know then what it meant." },
      { s: 'aigis', f: 'sad', t: "Since the kitchen, I find I am the one checking doors. I check yours. I would like to know if that is the correct response." },
      { ifGlitch: 3, then: [
        { glitch: 'sound' },
        { n: "Somewhere above them, behind one of the shut doors, very faint, a bell. One note, then nothing. Aigis turned her head toward it the exact way Koromaru did, and held it there, and didn't say what she'd heard, which meant she was learning." }
      ] },
      { choose: [
        { t: "It's what I'd do. If it was you.", then: [
          { s: 'aigis', f: 'neutral', t: "...Then I will keep doing it." },
          { n: "She said it simply, like a setting she'd changed. Then she unfolded her hands and sat down on the step beside Solar, which Aigis never did on stairs, and put her knees together and her hands on them, and the two of them kept watch on four shut doors until the window at the turn of the stairs went gray." },
          { bond: { aigis: 1 } }
        ] },
        { t: "You should rest, Aigis. I'm right here.", then: [
          { s: 'aigis', f: 'sad', t: "That is the problem. You are right here. I would like you to be right here when I am not watching. That would mean trusting it." },
          { s: 'aigis', f: 'neutral', t: "I am not good at that yet. I will practice. Not tonight." },
          { n: "So Solar stayed, because there wasn't anything else to say to that, and they sat on the stairs until two-forty, when Aigis said, precisely, that Solar's breathing had changed and she should go to bed, and walked her the eleven steps to her door, and stood outside it." }
        ] }
      ] }
    ] }
  ]);

  /* ── Akihiko ── */
  add('akihiko', 'friend', [
    { id: 'epi-st-akihiko-couch', title: 'gloves on', hint: "The lounge light is still on at one. Akihiko is asleep on the couch in his gloves. Mitsuru hasn't asked him to stop.",
      after: '4/3', until: '4/3', slots: ['late'], route: 'akihiko', events: ['epi-st-clocks'], place: 'Iwatodai Dorm · Lounge', time: 'Late Night', scene: [
      { music: 'epi-st-romance' },
      { n: "He'd fallen asleep sitting up. That was the first thing. On the lounge couch with his back to the arm and his feet on the floor, his head tipped against the wall at an angle that was going to hurt in the morning, and the red gloves on, both of them, laced, his hands in his lap like a boxer between rounds waiting for a bell." },
      { n: "Every clock in the dorm was new. Mitsuru had replaced them twice. The one on the lounge wall said 1:07 and she stood under it and watched the second hand go round, all the way round, twice, before she believed it." },
      { n: "She sat down on the floor by the couch with her back against it, by his knee. She wasn't going to wake him. She was just going to sit there. That was the whole plan, and it lasted about four minutes." },
      { s: 'akihiko', f: 'neutral', t: "...I wasn't asleep." },
      { s: 'solar', f: 'happy', t: "You were snoring." },
      { s: 'akihiko', f: 'blushing', t: "I was breathing. Loudly. On purpose. So you'd know where I was." },
      { n: "She turned round on her knees and took his left hand, and started undoing the laces. He let her. She'd done his wraps a hundred times in the club; she'd never once taken his gloves off him. It was a different thing. It was very slow, and he watched her the whole time, and neither of them said anything while she did it, and when the first glove came off his hand was warm and damp and stayed open on his knee where she'd put it, palm up." },
      { s: 'akihiko', f: 'serious-3', t: "I can't keep watch from upstairs. I tried. I lie there and I listen for the clocks." },
      { s: 'solar', f: 'neutral', t: "Then don't keep watch. Just keep me." },
      { n: "She hadn't meant to say it like that. It came out and sat there between them. He looked at her for a long time, and then he moved over on the couch, which was much too narrow for that, and held his bare arm out, and she climbed up into the space he'd made." },
      { choose: [
        { t: "(Take the other glove off too.)", then: [
          { n: "She took the other one off. She dropped them both on the floor, one and then the other, the soft thump of them on the rug, and he laughed under his breath and said that was a terrible way to treat gloves, and pulled her in by the waist, and she put her cold feet on his shins on purpose and he let her." }
        ] },
        { t: "(Leave the other one on.)", then: [
          { n: "She left the right one on. He didn't ask why. He put his arm round her with the glove still on it, the red leather cool against the back of her neck, and she understood that he'd have stayed in it all night, ready for something, and that she'd let him, because it was his way of holding on and she wasn't going to take that from him too." }
        ] }
      ] },
      { n: "It was a very small couch. That turned out not to matter. His chin ended up on the top of her head, and his breathing went slow under her ear, and somewhere around two the lounge light went off on its timer, and neither of them got up to turn it back on." },
      { n: "When she woke it was gray in the windows and somebody had put a blanket over them both. Pinned to it with a clothes peg was a page from a notebook in house-style capitals. *NOT TELLING MITSURU-SENPAI.* And under it, smaller, in a different pen. *(TOLD MITSURU-SENPAI.)*" },
      { bond: { akihiko: 1 } }
    ] }
  ]);

  /* ── Shinjiro ── */
  add('shinjiro', 'friend', [
    { id: 'epi-st-shinjiro-call', title: 'lights out', hint: "Ten past twelve. The phone on your desk, lit up. Tatsumi Memorial.",
      after: '4/1', until: '4/3', slots: ['late'], route: 'shinjiro', events: ['epi-st-charms'], place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
      { music: 'epi-st-romance' },
      { ifYear: AWAKE, then: [
        { n: "He'd called. Not texted. He never called, because the nurses didn't like phones on the ward after lights out and because talking took him longer than it took other people, and he hated anybody waiting for him to finish a word. But it was ten past twelve and his name was on the screen, and she picked up before the second ring." },
        { s: 'shinjiro', f: 'neutral', t: "...Hey." },
        { s: 'solar', f: 'neutral', t: "Hey. You're not supposed to have that out." },
        { s: 'shinjiro', f: 'neutral', t: "...Under the blanket. Like a kid." },
        { n: "His voice was low and slow and a little thick, the right side of his mouth still a beat behind the left. She lay down on her bed in the dark with the phone on the pillow beside her ear so it was like he was there, in the room, saying it into the side of her head." },
        { s: 'shinjiro', f: 'sad', t: "...Can't sleep. Since the bell. Keep thinking I hear it." },
        { s: 'solar', f: 'sad', t: "You did hear it." },
        { s: 'shinjiro', f: 'neutral', t: "...Yeah. Figured." },
        { n: "He didn't ask what it was. He'd never asked her a question he didn't already have the answer to, and he didn't start now. He just breathed on the other end of the line, the long careful breaths of a man doing it on purpose, and she found she was breathing in time with him." },
        { choose: [
          { t: "Talk to me till you fall asleep.", then: [
            { s: 'shinjiro', f: 'happy', t: "...You talk. I'm bad at it. Talk about... anything. The dorm. What Junpei burnt." },
            { n: "So she told him what Junpei had burnt. Then the curry from February. Then Koromaru and the bread ends, and the baker who was weak to him, and Ken's rocket pajamas, and somewhere in the middle of Mitsuru's clocks his breathing went long and slow and stopped answering, and she kept going anyway, quieter, for another ten minutes, in case." }
          ] },
          { t: "I'm coming at ten. First bus.", then: [
            { s: 'shinjiro', f: 'neutral', t: "...You always come at ten." },
            { s: 'solar', f: 'happy', t: "So you'll know when to look at the door." },
            { s: 'shinjiro', f: 'happy', t: "...Tch. ...Yeah. I'll look." }
          ] }
        ] },
        { n: "When she finally hung up the screen said forty-one minutes, and she put the phone face down on the pillow and left her hand on it, and it was still warm." }
      ], else: [
        { n: "She called the ward. She'd never done it before. At ten past twelve she sat on her bed in the dark with the number on the screen, and pressed it, and listened to it ring at the night desk on the third floor, where she knew exactly which lamp would be on." },
        { s: 'nurse', t: "Tatsumi Memorial, third floor. ...Oh. It's you." },
        { n: "The night nurse sighed down the phone, the sigh of a woman who'd already decided and wanted credit for it. Then a chair scraped. Then footsteps, soft, on lino, and the hush of a ward at night, and a door, and the machines, which Solar knew by heart now, their low patient counting." },
        { s: 'nurse', t: "Five minutes. I'm holding it by his ear. Go." },
        { n: "So she talked. To the dark, to the machines, to a man she couldn't see, about the bell in the kitchen, and nothing that it meant, and the cherry trees outside the dorm that were almost all the way open now, and how he'd hate them." },
        { choose: [
          { t: "(Tell him something true.)", then: [
            { n: "She told him she was frightened. She'd told nobody that. It came out easier to a phone held by a stranger next to a sleeping man than it had ever come out to a face, and there was a long silence on the other end, and then the nurse's voice, very close to the receiver, not unkind." },
            { s: 'nurse', t: "...His hand's moving. I'm writing it down." }
          ] },
          { t: "(Tell him about Junpei's octopi.)", then: [
            { n: "She told him about Junpei's octopus bento at the hanami, the whole thing, every leg, all five, and somewhere in the middle she heard the nurse snort, once, very quietly, and pretend she hadn't." },
            { s: 'nurse', t: "...That's his laughing face. The one he does in his sleep. I'll put it on the chart." }
          ] }
        ] },
        { n: "Five minutes was eleven. The nurse said *goodnight, then* in the voice of someone who'd be saying it again tomorrow, and hung up, and Solar lay there in the dark with the phone on her chest and the dial tone going, and for once she didn't mind the sound." }
      ] },
      { bond: { shinjiro: 1 } }
    ] },

    { id: 'epi-st-shinjiro-chairs', title: 'two chairs', hint: "Akihiko is waiting at the bus stop at a quarter to ten, holding a bag of something from the konbini. He says he's going anyway.",
      after: '3/29', until: '4/5', slots: ['after'], place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', scene: [
      { n: "There were two chairs in the room now. There'd always been one, the plastic one by the bed that she'd worn the shape of herself into over the winter, and today the nurse had gone and got another from the corridor without being asked and set it down next to the first, and gone away again with a look on her face like she'd done something that needed doing." },
      { n: "Akihiko sat in it the way he sat on a bench between rounds, forward, elbows on his knees. He'd brought a bag of the dried squid Shinjiro used to eat on the dorm roof, and put it on the bedside table, and then moved it an inch, and then moved it back." },
      { ifYear: AWAKE, then: [
        { s: 'shinjiro', f: 'neutral', t: "...Both of you. What is this. An intervention." },
        { s: 'akihiko', f: 'happy', t: "It's a visit. People do it." },
        { s: 'shinjiro', f: 'neutral', t: "...You've been coming alone for a month. Now it's a group." },
        { n: "He looked at Akihiko, and then at her, and then at the two chairs side by side, and something went across his face slowly, a beat behind, the way everything did now. She couldn't read it. She'd never once been able to read it all the way, and he liked it like that." },
        { ifEpiRoute: 'akihiko', then: [
          { s: 'shinjiro', f: 'neutral', t: "...Took you long enough. Aki." },
          { n: "Akihiko went red to the ears, a deep, total red, and opened his mouth and shut it again, and Shinjiro turned his head on the pillow toward the window so they wouldn't see him almost smile, which meant they both saw it." }
        ] },
        { ifEpiRoute: 'shinjiro', then: [
          { s: 'akihiko', f: 'neutral', t: "I'll go get a drink. Ten minutes. Vending machine's slow." },
          { n: "The vending machine was not slow. He was gone forty minutes. Shinjiro watched the door close behind him and then held his bad hand out on the blanket, palm up, without a word, and waited, and she took it." }
        ] },
        { ifEpiRoute: 'sees', then: [
          { n: "Akihiko talked boxing at him for half an hour. The new captain, the first-years, a kid with a good jab and no feet. Shinjiro said *tch* at all the right places and *idiot* twice, and his eyes kept closing and opening, and every time they opened they went to Akihiko first, and then to her, checking they were both still there." }
        ] },
        { choose: [
          { t: "(Open the squid.)", then: [
            { n: "She opened the bag and the smell came out, salty and awful, the smell of the dorm roof on a summer night with three people on it, and Shinjiro's whole face changed. He took a piece in his left hand. Akihiko took one. She took one. Nobody said anything about the roof, and it was the loudest thing in the room." },
            { s: 'shinjiro', f: 'happy', t: "...Still disgusting." }
          ] },
          { t: "(Let the two of them talk. Watch the window.)", then: [
            { n: "She sat back in her chair and looked at the bay, and let the two of them have it, the low back-and-forth of two boys who'd grown up in the same room, all the old shorthand, and somewhere in it she heard Akihiko laugh at something she hadn't caught, and Shinjiro say *shut up* like it was a kindness." }
          ] }
        ] }
      ], else: [
        { n: "He didn't know what to say. That was clear in the first minute. He'd been coming here alone since October and he'd never said anything out loud, she realized, not once, in all that time. He'd just sat. She'd been talking to Shinjiro for months, and Akihiko had been sitting in silence on the same plastic, on different days, and neither of them had ever told the other." },
        { s: 'akihiko', f: 'sad', t: "...How do you do it? Just talk. He can't." },
        { s: 'solar', f: 'neutral', t: "You just start. He moves his hand at the funny parts." },
        { n: "So Akihiko started. Badly. About the club, about the new captain, about a kid with a good jab and no feet, his voice too loud for the room and then too quiet, and Solar held Shinjiro's hand on the blanket while he did it, and after a minute and a half, at the part about the kid tripping over his own rope, Shinjiro's fingers moved." },
        { n: "Akihiko stopped talking. He looked at the hand. He looked at her." },
        { choose: [
          { t: "Keep going. That was the funny part.", then: [
            { n: "He kept going. His voice did something on the next sentence and he waited until it stopped, and then kept going, and the fingers moved again on the joke after that, and Akihiko put his own hand flat on the blanket next to theirs, not touching, near enough." }
          ] },
          { t: "(Put Akihiko's hand where yours is.)", then: [
            { n: "She took her hand away and took his, the big scarred one, and put it where hers had been. Akihiko let her. He sat very still with his best friend's hand under his own, and the fingers moved, once, against his palm, and he bent his head and didn't lift it for a long time, and she looked at the window so he wouldn't have to be looked at." }
          ] }
        ] }
      ] },
      { n: "They took the bus back together. Akihiko sat by the window. Halfway across the bridge he said, to the glass, *thanks for letting me come*, as if she'd had anything to do with it, and she said *same time tomorrow*, and he nodded like it had been his idea." },
      { bond: { shinjiro: 1 } }
    ] }
  ]);

  /* ── Ken (and Koromaru) ── */
  add('ken', 'friend', [
    { id: 'epi-st-ken-shadow', title: 'the shadow', hint: "Ken is at your door with Koromaru's leash. Koromaru is already sitting on your feet. He's been there since breakfast.",
      after: '4/1', until: '4/5', slots: ['after'], events: ['epi-st-charms'], place: 'Iwatodai · Riverside', time: 'Daytime', scene: [
      { music: 'epi-st-spring' },
      { n: "Since the kitchen, Koromaru hadn't let her out of his sight. He'd slept across her doorway, outside, with his nose to the gap. He'd followed her to the bathroom and waited. He'd sat on her feet at breakfast and lunch and dinner and growled, very softly, once, at an empty corner of the lounge, which nobody had mentioned since." },
      { s: 'ken', f: 'neutral', t: "He won't walk with me. I tried twice. He sits down at the door and looks back at you. So I think you're the walk now." },
      { n: "So she was the walk. Down the hill, along the river, Ken holding the leash because he'd been given the leash and it was his, Koromaru between them in the exact middle, close against her leg, his shoulder touching her knee on every step, and every time a jogger came the other way he put himself between them and her without fuss, the way a good dog does a thing he was never trained for." },
      { n: "The cherry trees along the water were all the way open now, so white that the river looked pink under them, and the petals were landing on Koromaru's back and staying there, and he didn't shake them off." },
      { s: 'ken', f: 'neutral', t: "Can you test me? On the first week. I made a list. Spring. Bridge. Return. I picked them myself." },
      { n: "She tested him. He got them all. He wrote *return* with his finger in the air in front of him, stroke by stroke, frowning, and got the order right, and then didn't say anything for a while." },
      { s: 'ken', f: 'serious', t: "Is he guarding you? From something? You can say if he is. I'm not a little kid. I was on the operations." },
      { choose: [
        { t: "Yes. I think he is.", then: [
          { s: 'ken', f: 'serious', t: "...Okay." },
          { n: "He thought about it all the way to the bridge. At the bridge he stopped, and handed her the leash, formally, and took a step to her other side, so that Koromaru was on her left and he was on her right, and walked the rest of the way like that without explaining, chin up, ten years old and enormously on duty." },
          { s: 'ken', f: 'neutral', t: "After school I'll do it too. He can have mornings." },
          { bond: { ken: 1 } }
        ] },
        { t: "From me doing something silly, maybe.", then: [
          { s: 'ken', f: 'sad', t: "...You don't do silly things. You do brave ones and say they're silly. Mitsuru-san does it too." },
          { n: "He said it to the river, very matter-of-fact, as if he'd been keeping a record and had come to the end of it. Then he asked for one more kanji, a hard one, and she gave him the hardest one she knew, and he got that too." }
        ] }
      ] },
      { n: "At the bottom of the dorm's hill Koromaru stopped and sat and wouldn't go up until she did, and when she did, he went up beside her with his shoulder against her knee all the way to the door." }
    ] }
  ]);

  /* ── The last day: goodbyes (4/6) ── */
  add('junpei', 'friend', [
    { id: 'epi-st-junpei-iron', title: 'the iron', hint: "There's a smell of hot cotton coming out of the laundry room, and Junpei saying *no no no no* in a calm voice.",
      ...BYE, place: 'Iwatodai Dorm · Laundry Room', time: 'Daytime', scene: [
      { music: 'epi-st-last' },
      { n: "The shirt was on the ironing board, white, his school shirt for tomorrow, and on the back of it, square between the shoulder blades, was a perfect iron-shaped scorch the color of weak tea. Junpei stood over it with the iron held up in one hand, unplugged, like he'd just taken it away from someone." },
      { s: 'junpei', f: 'flustered', t: "It's fine. It's on the back. Nobody looks at your back. Do people look at your back?" },
      { s: 'solar', f: 'happy', t: "Everybody behind you looks at your back, Junpei." },
      { s: 'junpei', f: 'sad', t: "...Third year. First day. Iron on the back. That's my whole legacy." },
      { n: "Yukari arrived about a minute later, because he'd texted her, because Solar had told him to, and stood in the doorway with her arms folded and looked at the shirt for a long time without a word, which was worse than anything she could've said." },
      { s: 'yukari', f: 'neutral', t: "Give me the iron. Sit down. Don't touch anything. Don't touch me." },
      { n: "There was a trick with lemon juice and salt that Yukari had from her mother and wouldn't explain, and it half worked, and the half that didn't work went under Junpei's blazer, and that was the plan. Junpei sat on the dryer and swung his feet against it. Solar sat on the washer. Yukari ironed the other shirt, the spare one, very fast and very well, with the face she used for archery." },
      { s: 'junpei', f: 'neutral', t: "So tomorrow I'm a third-year. Yuka-tan's a third-year. Ken's a sixth-grader. Mitsuru-senpai's a... CEO, I guess. Aki-senpai's wherever." },
      { s: 'junpei', f: 'serious', t: "And you're..." },
      { n: "He didn't finish it. He swung his feet against the dryer. The iron hissed. Yukari didn't look up from the collar." },
      { choose: [
        { t: "Here. I'm here.", then: [
          { s: 'junpei', f: 'happy', t: "...Yeah. Yeah. Here. That's a good one. That's the best one, honestly. I'd take that one." },
          { n: "He punched her in the shoulder, very lightly, the way he'd been doing since April whenever something got close to the bone, and left his fist there a second longer than a punch needed." },
          { bond: { junpei: 1 } }
        ] },
        { t: "I'm the one who's going to look at your back.", then: [
          { s: 'junpei', f: 'surprised', t: "...Wait, you're coming? Tomorrow? To school?" },
          { s: 'solar', f: 'happy', t: "To the gate. Somebody has to check the scorch." },
          { n: "Yukari put the iron down very carefully on its end and said nothing at all, and Junpei looked at her and then at Solar and then at the shirt, and said *cool, cool, cool*, three times, very fast, and had to go and get a drink of water." }
        ] }
      ] },
      { n: "When they left, the two shirts were hanging on the back of the laundry room door, side by side, the good one in front, and Yukari had pinned a note to the scorched one in her neat round hand. *BLAZER ON. AT ALL TIMES.*" }
    ] }
  ]);

  add('mitsuru', 'friend', [
    { id: 'epi-st-mitsuru-sundays', title: 'sundays', hint: "Mitsuru's door is open. Her room is almost all boxes now. She's sitting on one, with her planner.",
      ...BYE, place: 'Iwatodai Dorm · 3F Hallway', time: 'Daytime', scene: [
      { music: 'epi-st-last' },
      { n: "Her door at the end of the third floor was open. Her room had been the nicest in the dorm, and now it was boxes, taped and labeled and stacked in a way that would've satisfied a removals company and an architect, and Mitsuru was sitting on one of them in the middle of the floor with her planner open on her knee and a fountain pen in her hand, not writing anything." },
      { s: 'mitsuru', f: 'neutral', t: "Come in. Sit. Anywhere. Any box. They're all very sturdy. I tested them." },
      { n: "Solar sat on a box marked BOOKS · PERSONAL. The window was open and the sound of the street came in, a bicycle bell, kids on spring break, a woman calling somebody's name over and over in a bright voice that wasn't worried yet." },
      { s: 'mitsuru', f: 'neutral', t: "I'm leaving at the end of the month. You know that. I keep telling people as if they don't." },
      { n: "She tore a page out of the planner. Mitsuru, tearing a page out of a planner. It made a very small sound, and she held it out." },
      { n: "It was a list. Every Sunday from April to December, in a column, in ink. Next to every one, in the same small careful hand, *Dinner. Dorm. 7:00.* On the twenty-fifth of April someone had added, in a different ink, *bring Fuuka's tea*. On one in July: *Ask Takeba about the beach. Iori will want to come. Allow it.*" },
      { s: 'mitsuru', f: 'sad', t: "I have my copy. That's yours. So you know I mean it. So you can check." },
      { ifEpiRoute: 'sees', then: [
        { s: 'mitsuru', f: 'serious', t: "And so that if anyone ever tries to take you somewhere on a Sunday, you can show them that you have a prior engagement." }
      ] },
      { choose: [
        { t: "(Fold it. Put it in your pocket.)", then: [
          { n: "She folded it in half and in half again and put it in the pocket over her heart, and Mitsuru watched her do it, and looked away at the window very quickly, and said the weather was remarkable for April, in a voice that wasn't entirely steady about the weather." },
          { bond: { mitsuru: 1 } }
        ] },
        { t: "You tore a page out of your planner.", then: [
          { s: 'mitsuru', f: 'happy', t: "I did. I'm aware. I've never done it before. I may need to lie down." },
          { n: "She laughed. Actually laughed, the low startled one, sitting on a box in an empty room, and covered her mouth with the back of her hand as if it had got out without permission, and Solar laughed too, and for a minute the room didn't feel like boxes at all." }
        ] }
      ] },
      { n: "When she went, Mitsuru was writing again, finally, in the planner, something short. She didn't say what it was. Solar saw the date at the top of the page as she passed, and it was tomorrow's, and the word under it was her name." }
    ] }
  ]);

  add('ken', 'friend', [
    { id: 'epi-st-ken-tomorrow', title: 'tomorrow', hint: "Ken's school bag is by the front door, packed. Ken is sitting next to it on the step. He's been there a while.",
      ...BYE, slots: ['after'], place: 'Iwatodai Dorm · Front', time: 'Daytime', scene: [
      { music: 'epi-st-spring' },
      { n: "The bag was new, black, the kind every sixth-grader in Iwatodai had, with his name on a tag in Mitsuru's handwriting and the pencil case already inside it in the right pocket, and he was sitting next to it on the front step with his elbows on his knees, the way Akihiko sat, which he'd started doing in about January." },
      { n: "Koromaru was lying across both their feet. The petals had come down all morning and the step was covered in them, and every so often Koromaru snapped at one going past, very half-heartedly, out of tradition." },
      { s: 'ken', f: 'neutral', t: "Solar-san. Tomorrow. Would you walk me to school? Just to the gate. It's at eight-ten. You don't have to come in. I'd be embarrassed if you came in." },
      { n: "He'd practiced it. She could tell. It came out in one piece, too smooth, and then he looked at the bag instead of at her, and waited, his small jaw set, a boy who'd once held a spear he was too young for and was now holding very still for the answer to a much harder question." },
      { ifFlag: 'epi-st-told', then: [
        { n: "He knew about midnight. He'd been at the table in the command room when she told them, and he'd listened to all of it without interrupting once, his hands flat on the table the way Mitsuru's were. He was asking anyway. He was asking for exactly that reason." }
      ], else: [
        { n: "He didn't know about midnight. Not really. He knew about the bell and the frost and Hagakure, and the nail brush, and he'd put it together into something, the way he put kanji together, stroke by stroke, and come out here to sit by the bag." }
      ] },
      { choose: [
        { t: "Eight-ten. I'll be there.", then: [
          { s: 'ken', f: 'happy', t: "...Okay. I'll set two alarms. One for you." },
          { s: 'ken', f: 'serious', t: "You have to actually come. Promise in a way you can keep." },
          { s: 'solar', f: 'serious', t: "I promise I'll try harder than I've ever tried anything." },
          { n: "He thought about it, frowning, the way he'd thought about the kanji for *return* on the bridge. Then he nodded. It was close enough. He seemed to know it was the most anyone could promise, and he took it, and put it in his bag with the pencil case." },
          { bond: { ken: 1 } }
        ] },
        { t: "Koromaru should walk you. He's the expert.", then: [
          { s: 'ken', f: 'neutral', t: "He's not allowed at the gate. ...But you could hold the leash. At the gate. And then he'd be walking me, technically." },
          { s: 'solar', f: 'happy', t: "Technically." },
          { s: 'ken', f: 'happy', t: "Eight-ten. Technically." },
          { s: 'koromaru', f: 'happy', t: "Woof." }
        ] }
      ] },
      { n: "They sat there until the light went long and gold on the street and Mitsuru called down that it was nearly dinner. Ken took the bag in himself. At the door he stopped and looked back at the step, at the petals, at the dent in them where they'd been sitting, as if he wanted to remember exactly where it was." }
    ] }
  ]);

  add('aigis', 'friend', [
    { id: 'epi-st-aigis-wave', title: "arm's length", hint: "Aigis is on the front step at sunset, watching the street. She'd like to ask you something about the word *goodbye*.",
      ...BYE, slots: ['evening'], place: 'Iwatodai Dorm · Front', time: 'Evening', scene: [
      { music: 'epi-st-last' },
      { n: "The street went gold and then pink and then a deep soft blue, and the people going by on it went by in their spring coats, and Aigis sat on the step and watched them with her hands on her knees and her head very slightly on one side, the way she watched everything she was trying to learn." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. People wave. When they leave. I have catalogued nine kinds on this street since four o'clock." },
      { s: 'aigis', f: 'serious', t: "I have never waved goodbye to anyone. I did not need to. The people I was with did not leave, or when they left, they were not coming back, and that is not a wave. It is something else." },
      { s: 'aigis', f: 'neutral', t: "I would like to learn the one that means *see you tomorrow*. In case I need it. In the morning." },
      { n: "A woman across the street turned at her gate and lifted her hand to someone in a window, loose, the fingers just moving, not looking back to see if anyone waved back because she knew they would. Aigis watched it with total attention." },
      { choose: [
        { t: "(Show her. Small. Lazy. Don't look back.)", then: [
          { n: "Solar showed her. Hand up, not high, the fingers going once, the way you'd wave at someone you were going to see in nine hours and couldn't be bothered to make a fuss of, which was the whole point. You don't look back. Looking back means you're not sure." },
          { n: "Aigis did it. Too precise the first time. Too high the second. The third time she did it almost right, loose, at the empty street, without looking, and then looked at her own hand afterwards as if it had done something it was proud of." },
          { s: 'aigis', f: 'happy', t: "...I will use it tomorrow. At breakfast. On you." },
          { bond: { aigis: 1 } }
        ] },
        { t: "You don't need it, Aigis. Just say it.", then: [
          { s: 'aigis', f: 'neutral', t: "...See you tomorrow." },
          { n: "She said it to the street first, testing it. Then she turned her head and said it to Solar, at exactly one arm's length, the distance she'd kept all year from everyone, and then, slowly, as if checking the measurement, she closed it, and leaned her shoulder against Solar's on the step." },
          { s: 'aigis', f: 'neutral', t: "That is a better distance. I am updating it." }
        ] }
      ] },
      { n: "The streetlights came on all down the hill one after the other, and the last of the petals came down through them, and Aigis said, without turning her head, that there were four thousand and eighty on the front step, and that she'd counted them for Solar, so that someone would know." }
    ] }
  ]);

  /* ── Routines ── */
  (R.routines ||= []).push(
    { id: 'epi-st-rt-petals', slot: 'early', after: '4/2', until: '4/6', place: 'Iwatodai Dorm · Front', time: 'Morning', scene: [
      { n: "Overnight the cherry trees along the street had let go of something, and the front step was white with it, the petals drifted in the corners like snow that didn't melt, and stuck to the doormat, and to the bottom of Junpei's shoes, and to Koromaru, who stood in the middle of the step in the low sun snapping at the ones still coming down, one after another, and missing every single one." },
      { n: "Akihiko had the broom. He'd swept the step twice already. It was white again. He was looking at it with the face of a man who'd lost a fight fairly." },
      { choose: [
        { t: "(Take the broom. Sweep.)", then: [
          { n: "She swept. It made no difference. It was the least useful thing she'd done in a year, and she did it with her whole heart, and Akihiko leaned on the rail and timed her, and Koromaru ran through the pile she'd made as soon as she'd made it." }
        ] },
        { t: "(Leave them. Sit on the step.)", then: [
          { n: "She sat down in them. They were cold and soft and smelled of almost nothing, very faintly sweet. Koromaru gave up on the air and came and lay down next to her with petals all over his back, and they watched the street go white together, and Akihiko put the broom away." }
        ] }
      ] }
    ] },
    { id: 'epi-st-rt-game', slot: 'evening', after: '3/24', until: '4/4', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { n: "Junpei and Ken were on the lounge floor with the old console, playing the fighting game Junpei had been losing to Ken at since November. Ken played with his tongue between his teeth and no mercy. Junpei played like it was a personal insult every time. Koromaru lay between them and turned his head to whoever was shouting." },
      { s: 'junpei', f: 'flustered', t: "He's doing the thing. Sol, he's doing the thing again. Ken, that's a cheap move. That's an illegal move." },
      { s: 'ken', f: 'neutral', t: "It's in the manual." },
      { choose: [
        { t: "(Take Junpei's controller.)", then: [
          { n: "She took the controller. She lost in forty seconds. Ken said *thank you for playing* very politely, and Junpei laughed so hard he rolled over onto Koromaru, who didn't mind, and then they made her play again, and she lost faster, and it was the best she'd felt all day." }
        ] },
        { t: "(Sit on the couch. Watch.)", then: [
          { n: "She watched from the couch with her feet tucked under her. Ken won six in a row. Junpei won one, by accident, and stood up and did a lap of the lounge with his arms up, and Ken let him have it, and gave Solar a look over his shoulder, very small, that said he'd let him." }
        ] }
      ] }
    ] }
  );
})();
