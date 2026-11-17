/* Persona 3: Equinox · Nakamura Kazuha · Faith. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 6/29: she came through on 6/26, story-act2 'eqx-stage'; her home is the flat stones at Naganaki
   Shrine on Tuesday, Thursday and Saturday after school and Sunday daytime. Gated to 6/29, her first Tuesday, not 6/27:
   the scene needs a few nights of the saucer, and 6/27 is the morning they arrived). Ranks 4–10 still to
   write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Shared memory: the HOAX epilogue (Osaka, ballet until middle school and the posture kept, the purikura ghost theory:
   "a friend who follows you is a good friend. In Japan we would leave it a little rice"), the strangers epilogue
   ("Solar-ssi", her grandmother's sayings: "the body is older than the weather report"), the 6/26 atrium ("I was at the
   barre"). She calls Solar "Solar-ssi" and "Solar-senpai" in turn, without noticing (the braiding).
   The hook: her body remembers three floors. And the saucer of rice she leaves out at the boarding house every night.
   Reads: ifEvent eqx-last-grain (7/27 morning) for the saucer.
   Flags this file sets: eqx-kazuha-rice (Solar helps her leave the rice). Nothing reads it yet.
   Written: ranks 1–3. Rank 2 '2: accepted' (after 8/3, Tue, summer break, the flat stones by day): since 7/27 her feet
   agree (the barre is going); she teaches Solar pliés at the stone lantern so the barre is kept outside her (sets
   eqx-kazuha-barre); Mrs. Arai comes to feed the side-gate fox, knows Kazuha's saucer from the lane, says her son came
   home (Junpei rank 5) and "it's the stopping that's cruel"; seeds 9/11's "granddaughter". The saucer moved from the hall
   shelf (rank 1) to the veranda after 7/27 (reconciles story-act3 7/28); its flour ring grows weekly. Choice: salt beside
   it (sets eqx-kazuha-salt, a morijio cone: welcome and no at once), keep going, or stop (she doesn't). Cast `arai`.
   Rank 3 '3: something that looks like it' (after 9/14, Tue, the stones in the first cool, cutting susuki): before
   eqx-equinox the grass is for Mrs. Oka's moon-viewing; after it, for the genkan where the bridge shoes stand. Mrs. Arai's
   "granddaughter" (story-act3 9/11). Her ask (§9 LE SSERAFIM, "stay together", her own: "I've never been in the middle of
   anything. Here I'm in the middle"): tally asks.kazuha yes (+cakes) / choose (+choose) / no ("on purpose", seed for the
   group's rank-10 scene). The saucer: pre-equinox the ring is warm at six a.m.; after eqx-equinox it was full three
   mornings from 9/24, then upside down with a two-hand ring; after eqx-persimmon she left it behind. Reads eqx-kazuha-barre
   (she borrows the floor back). Nothing reads eqx-kazuha-salt yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kazuha', name: 'Nakamura Kazuha', short: 'Kazuha', arcana: 'Faith', numeral: '', from: 'Runners · strangers · Hoax', kind: 'arrival',
  world: 'RSH', romance: null, arrives: '6/26', starts: '6/27', lodging: 'boarding',
  cast: { arai: 'Mrs. Arai' },
  home: { area: 'shrine', spot: 'Flat Stones', slot: 'after', days: [0, 2, 4, 6],
          hint: 'After school on Tuesdays, Thursdays and Saturdays, and daytime on Sundays, stretching on the flat stones at Naganaki Shrine.' },
  approach: "On the flat stones behind Naganaki's offering hall a girl in practice clothes is holding one leg up beside her ear as if it weighs nothing, perfectly still in the heat, and the shrine's cat is sitting a meter away watching her with the respect of one professional for another.",
  ranks: [
    { after: '6/29', title: '1: three floors', place: 'Naganaki Shrine · Flat Stones', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      // BG: naganaki-flat-stones — the back of a small Shinto shrine in summer, a row of wide flat stepping stones under old camphor trees, dappled shade, a stone lantern furred with moss, cicada-loud.
      { n: "The cicadas at Naganaki had started in earnest that week, all of them at once, the way they did, as if someone had found the switch, and the noise came down out of the camphor trees and sat on the shrine like weather. Behind the offering hall, where the old flat stones ran in a line under the trees and nobody went except the cat, it was ten degrees cooler and smelled of moss and warm stone." },
      { n: "Kazuha was on the third stone. She had one foot planted and the other leg up beside her head, held there by nothing, by the hand resting very lightly on her own ankle, her back straight as a door, her face completely calm. She wasn't sweating. Everything else in Iwatodai was sweating. The cat sat a meter away with its tail round its feet and watched her." },
      { s: 'kazuha', f: 'happy', t: "Solar-ssi. You found the good stones." },
      { n: "She brought the leg down. Slowly. It took a long time, and every centimeter of it was deliberate, and when the foot touched the stone it touched it the way you'd put down a full cup." },
      { s: 'kazuha', f: 'neutral', t: "The cat was here first. We have an arrangement. I don't sit on the fourth stone." },
      { choose: [
        { t: "What does the cat get?", notes: 2, then: [
          { s: 'kazuha', f: 'happy', t: "Company. He's very lonely. You can see it in his face. He pretends not to be. Like a man at a bus stop." }
        ] },
        { t: "How long have you been out here?", notes: 2, then: [
          { s: 'kazuha', f: 'neutral', t: "Since lunch. I don't know. Time is strange here. My body knows, though. My body says, two hours, a little more." }
        ] },
        { t: "(Sit on the second stone. Leave the fourth for the cat.)", notes: 3, then: [
          { n: "Solar sat on the second stone. Kazuha watched where she sat and then looked at the cat, and the cat looked at Solar, and blinked, slowly, once. Kazuha nodded as if a contract had been countersigned." },
          { s: 'kazuha', f: 'happy', t: "Good. He likes you. That's two of us." }
        ] }
      ] },
      { n: "She went on stretching while they talked. She didn't seem able to stop. She folded forward over her own legs until her forehead touched her knees, and came up, and opened her arms in a slow curve over her head, and Solar, who had spent years watching people perform being at ease, realized she was watching someone who actually was. Or who was so good at it that it came to the same thing." },
      { s: 'kazuha', f: 'neutral', t: "It's my feet. That's why I come here. They're confused." },
      { s: 'kazuha', f: 'neutral', t: "In one of me, I'm on a barre every day. Ballet. I never stopped. My feet know a wooden floor with rosin on it, and a mirror, and a teacher with a stick who says *again*." },
      { s: 'kazuha', f: 'neutral', t: "In one of me I stopped in middle school. I still stand like it, but my feet forgot. They walk to school in Seoul in normal shoes like normal feet." },
      { s: 'kazuha', f: 'neutral', t: "And in Songdo they know a studio floor with a sticker on it where the heating pipe is, so you don't stand there barefoot in February. And they know Yunjin's choreography. Which is not ballet. Which is a crime against ballet. Which I love." },
      { s: 'kazuha', f: 'happy', t: "So every morning I wake up and my left foot thinks it's on the barre and my right foot thinks it's late for school. I come here and I teach them they're both on stone. Then they agree. For a while." },
      // CG: eqx-three-floors — a young woman in practice clothes stretching on a wide flat stone behind a shrine in summer shade, one arm curved overhead in a ballet line, a small cat sitting on the next stone watching her, sunlight coming through camphor leaves.
      { choose: [
        { t: "Teach mine.", notes: 3, then: [
          { s: 'kazuha', f: 'happy', t: "Yes. Stand up. Stand up, Solar-senpai. Feet together. No. Together. Heels touching." },
          { n: "She stood Solar on the stone and turned her feet out by the ankles, with her own two hands, firmly, like a woman adjusting a vase, and then lifted Solar's arms into a curve in front of her chest, and stepped back to look." },
          { s: 'kazuha', f: 'neutral', t: "...Oh. You have three as well. Your shoulders don't agree with your hips. Your hips are from a different country." },
          { s: 'solar', f: 'neutral', t: "Which country?" },
          { s: 'kazuha', f: 'happy', t: "A cold one. With stairs." }
        ] },
        { t: "You called me senpai yesterday. And ssi today.", notes: 3, then: [
          { n: "Kazuha stopped mid-stretch. She stood very still on the stone with both arms over her head, and then lowered them, slowly, and looked at Solar with real surprise." },
          { s: 'kazuha', f: 'surprised', t: "Did I? I didn't hear myself. I hear Solar. Only Solar." },
          { s: 'kazuha', f: 'neutral', t: "...My mouth is choosing for me. That's a little frightening. I'll be frightened later. Now I'll stretch." }
        ] },
        { t: "(Copy her stretch. Badly.)", notes: 2, then: [
          { n: "Solar tried. She folded forward over her own legs and got about halfway to her knees before something in the backs of them said, very clearly, no. Kazuha watched this with an expression of deep and professional compassion." },
          { s: 'kazuha', f: 'neutral', t: "Breathe out. Your body is older than you. Listen to it. It's telling you a story." },
          { s: 'solar', f: 'sad', t: "It's telling me to stop." },
          { s: 'kazuha', f: 'happy', t: "That's a short story. Those are good too." }
        ] }
      ] },
      { n: "When the light had gone gold and slanted and the cicadas had changed key, Kazuha put on a cardigan, even in that heat, and rolled down her sleeves, and sat on her stone with her knees under her chin, and was quiet for long enough that the cat got up, stretched in a way that was a clear parody of her, and came and lay down on the fourth stone in the last of the sun." },
      { s: 'kazuha', f: 'neutral', t: "Can I tell you something I do? You won't laugh. Asahi-kun laughed. Not at home. In my head. I imagine him laughing. He says *no one cares* and then he laughs." },
      { s: 'kazuha', f: 'neutral', t: "At the boarding house, every night, I leave a little rice. On a saucer. In the hall, on the shelf under the hooks where the coats go. For the friend." },
      { s: 'solar', f: 'neutral', t: "What friend?" },
      { s: 'kazuha', f: 'neutral', t: "The one who follows you. You know. The one in the photo booth. At Hanlim, in the winter, there was a white shape at your shoulder in every picture. I drew it a face. You remember." },
      { n: "Solar remembered. A strip of four small bright pictures, the two of them in bunny ears, and in the last frame a pale smear at her shoulder like a thumbprint on the lens, and Kazuha's careful stylus drawing it two round eyes and a smile and a little bow. She remembered the cold of the arcade outside the booth. She remembered what she'd thought the smear was, and hadn't said, and still didn't." },
      { s: 'kazuha', f: 'neutral', t: "On the first morning there was a cap on the hook. Nobody's. Then it was gone. So I thought, ah, someone has come in, and gone out again, and they might be hungry. My grandmother in Osaka does it for my grandfather. Every night. A little rice." },
      { s: 'kazuha', f: 'happy', t: "And every morning the saucer is clean. Every morning. Not a grain. Licked. So it's welcome." },
      { n: "She said it with total contentment. As if she'd found out that a guest liked her cooking. The cat on the fourth stone opened one eye at the word *licked* and shut it again." },
      { choose: [
        { t: "Can I put the rice out with you tonight?", notes: 3, flag: 'eqx-kazuha-rice', then: [
          { s: 'kazuha', f: 'surprised', t: "...Really? You don't think it's silly?" },
          { s: 'solar', f: 'neutral', t: "I think whoever's following me should eat." },
          { n: "Kazuha smiled, the wide one, the one that took up her whole face and made her look about twelve, and said that was the nicest thing anyone had said to her in this whole country, in any of her lives, and that she'd get the good saucer, the blue one, not the one with the chip." }
        ] },
        { t: "Kazuha. Who's licking the saucer?", notes: 3, then: [
          { s: 'kazuha', f: 'neutral', t: "Hm? The friend." },
          { s: 'solar', f: 'serious', t: "Not Mrs. Oka? Not a cat?" },
          { n: "Kazuha thought about it. Really thought. She looked at the actual cat, and at her own knees, and at the gold light through the trees." },
          { s: 'kazuha', f: 'neutral', t: "...There's no cat at the house. The dogs on the street won't come to the gate. And Oka-san doesn't touch it. I asked her. She said, *oh, leave it, dear, it's nice to feed things.*" },
          { s: 'kazuha', f: 'neutral', t: "So. The friend. Who else is there?" }
        ] },
        { t: "(Don't say anything. Just look at the cat.)", notes: 2, then: [
          { n: "Solar looked at the cat. The cat looked at Solar. Neither of them said anything, and Kazuha, after a while, followed Solar's gaze to the cat and back, and her face changed, very slightly, the way water changes when a cloud goes over it, and she pulled her cardigan closer, in the heat." }
        ] }
      ] },
      { s: 'kazuha', f: 'neutral', t: "My grandmother says a house where the rice is eaten is a house that wants you to stay." },
      { s: 'kazuha', f: 'happy', t: "I think that's true. I feel it there. It wants us. All five of us at the table, all four of us upstairs. I haven't felt wanted by a house since I was small." },
      { n: "She said it lightly. She meant it with her whole body. Solar could see it in her shoulders, which had come down, finally, as if someone had taken off a heavy coat she'd been wearing for years." },
      { place: 'The Oka Boarding House · Front Hall', time: 'Night', bg: 'eqx-oka-kitchen', music: 'eerie' },
      // BG: oka-front-hall-night — the narrow front hall of an old Japanese house at night, a row of wooden coat hooks over a low shelf, one small blue saucer on the shelf, a lamp lit at the far end of the hall, a kitchen door ajar (stand-in: eqx-oka-kitchen).
      { n: "Later, at the boarding house, Kazuha took the blue saucer from the kitchen cupboard and a pinch of rice from the cooker, which Mrs. Oka kept warm all night for anyone, and carried it down the hall in both hands, the way she'd brought her leg down on the stone, like a full cup." },
      { n: "She set it on the shelf under the hooks. The hook where the cap had hung on the first morning was empty. They'd all been careful not to hang anything on it since, Kazuha said, without anyone deciding." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "She stood back and looked at the saucer, and was quiet, and then said it in the same calm voice she said everything." },
        { s: 'kazuha', f: 'sad', t: "...Only one morning it wasn't eaten. Not a grain gone. One morning in the whole summer." },
        { s: 'kazuha', f: 'neutral', t: "The twenty-seventh. The morning they found Nozomi-kun." },
        { s: 'kazuha', f: 'neutral', t: "I thought, the friend was sad too. It couldn't eat. That's what I thought." },
        { n: "She didn't look at Solar. She looked at the saucer, and at the empty hook above it, and her hands, folded in front of her, were holding each other very hard." },
        { s: 'kazuha', f: 'neutral', t: "The next morning it was licked clean again. Cleaner than ever." }
      ], else: [
        { n: "She clapped twice, softly, the way you would at a shrine, and bowed to the saucer, and then, as an afterthought, to the empty hook." },
        { s: 'kazuha', f: 'happy', t: "There. Good night, friend. Eat well." }
      ] },
      { n: "From the kitchen, through the door that was always a little ajar, came the landlady's voice, warm and amused, humming something Solar couldn't place, and under the humming, very faintly, a soft wet rhythm, like someone kneading, slowly, in no hurry at all." },
      { n: "Solar didn't go and look. She put her own hand on the shelf beside the saucer, just for a second, the way you'd touch a sleeping person's arm to tell them you were there. The wood was warm. Warmer than the hall. As if something had been sitting on it a long time and had only just got up." }
    ] },
    { after: '8/3', title: '2: accepted', place: 'Naganaki Shrine · Flat Stones', time: 'Daytime', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      // BG: naganaki-flat-stones — the back of a small Shinto shrine in summer, a row of wide flat stepping stones under old camphor trees, dappled shade, a stone lantern furred with moss, cicada-loud.
      { n: "August came down on Iwatodai like a lid. School was out and the town had gone slow and white with it, the shutters half down on the Strip by eleven, the air over the road wobbling, the river low and green and smelling of warm weed, and up at Naganaki the cicadas had stopped sounding like a switch someone had found and started sounding like the heat itself, as if the noise were what the sun did when it hit the camphor leaves." },
      { n: "Kazuha wasn't stretching. That was the first thing. She was standing on the third stone in her practice clothes with her feet together and her arms loose at her sides, perfectly still, looking down at her own feet the way you'd look at two dogs who'd started behaving and you didn't trust it yet. The cat was on the fourth stone, flat on its side, in the only patch of shade that moved." },
      { s: 'kazuha', f: 'neutral', t: "Solar-senpai. Don't come on the stones yet. I'm listening." },
      { s: 'solar', f: 'neutral', t: "To what?" },
      { s: 'kazuha', f: 'neutral', t: "My feet. They're very quiet. They've been very quiet for a week." },
      { n: "Solar sat on the step at the end of the row, where the shade was deepest, and waited. It took a long time. A crow walked along the offering hall's roof gutter and looked down at them both and walked away again. Kazuha lifted her right heel a centimeter off the stone, and put it down, and lifted the left, and put it down, and then let out a breath that had been in her a while." },
      { s: 'kazuha', f: 'neutral', t: "...They agree. Both of them. They've agreed since the twenty-seventh." },
      { s: 'kazuha', f: 'neutral', t: "In June I told you. My left foot wakes up on a barre, my right foot is late for school in Seoul. Every morning, an argument. I came here and made them be on stone." },
      { s: 'kazuha', f: 'neutral', t: "Now they wake up and they know the tatami in the big room. And the boards on the veranda. And these stones. That's all. They don't argue. They don't remember there was anything to argue about." },
      { n: "She said it in the calm voice she said everything in, the one she'd have used for the weather, and the calm was so complete that it took Solar a second to hear the floor go out of it." },
      { choose: [
        { t: "Isn't that what you wanted?", notes: 2, then: [
          { s: 'kazuha', f: 'neutral', t: "I thought it was. I wanted them to stop fighting. I didn't want one of them to win." },
          { s: 'kazuha', f: 'sad', t: "...It's like when two people stop fighting because one of them has gone out of the room. It's quiet. It isn't nice." }
        ] },
        { t: "What can't they remember?", notes: 3, then: [
          { s: 'kazuha', f: 'neutral', t: "The barre. The floor under it. I could tell you in June what color it was. Honey. With a burn mark from a curling iron in front of the third mirror, where a girl put it down once and cried." },
          { s: 'kazuha', f: 'sad', t: "This morning I tried to see it and I saw the tatami. I tried again and I saw this stone. My head knows there was a burn mark. My feet don't believe me." }
        ] },
        { t: "(Sit with her, on the second stone. Don't say anything yet.)", notes: 3, then: [
          { n: "Solar got up and stepped onto the second stone and sat, cross-legged, below her. Kazuha looked down at her for a moment, and then folded down onto the third stone too, knees under her chin, the way she sat at the end of a day, though it was barely noon." },
          { s: 'kazuha', f: 'neutral', t: "...Thank you. You're good at not saying things. My grandmother says the best visitors are the ones who come in and sit down and don't ask why the clock stopped." }
        ] }
      ] },
      { n: "The cicadas went up a pitch, all of them together, and came down again. Kazuha pressed the soles of her bare feet flat against the stone, side by side, like someone pressing their palms against a window." },
      { s: 'kazuha', f: 'neutral', t: "I have an idea. It's a little silly. Can I tell you a silly idea?" },
      { s: 'kazuha', f: 'neutral', t: "If you learn it, then it's somewhere. Outside me. The barre. The first combination. Then if I lose it all the way, I can come and borrow it back from you. Like a cup of rice from a neighbor." },
      { choose: [
        { t: "Teach me. All of it.", notes: 3, flag: 'eqx-kazuha-barre', then: [
          { s: 'kazuha', f: 'happy', t: "Not all of it. You'd die. The first one. Pliés. Stand up. Hold the lantern." }
        ] },
        { t: "I'm not a very good place to keep things.", notes: 2, then: [
          { s: 'kazuha', f: 'neutral', t: "That's not true. You keep three of everything. I've seen you. You keep things so well you can't put them down. Stand up. Hold the lantern." }
        ] },
        { t: "Maybe it's okay if your feet forget.", notes: 2, then: [
          { n: "Kazuha looked at her for a long moment, without anything in her face at all, the way she looked at a step she wasn't sure of yet." },
          { s: 'kazuha', f: 'neutral', t: "Maybe. Maybe it's okay. I'd like to be the one who decides that. Not my feet. Stand up, please. Hold the lantern." }
        ] }
      ] },
      { n: "The stone lantern at the end of the row was the right height, Kazuha said, almost exactly, a barre for a girl a little shorter than a ballerina, and the moss on top of it was cool and damp and gave under Solar's palm like a wet sponge. Kazuha stood behind her and took her other wrist and lifted the arm out to the side, low, curved, and turned Solar's feet out by the heels with her own bare foot, briskly, the way you'd turn a stubborn tap." },
      { s: 'kazuha', f: 'serious', t: "First position. Heels together. Knees over your toes. Over. Your knees are from a different country again." },
      { s: 'kazuha', f: 'serious', t: "And down. Demi. Slow. Like you're sitting into very warm water. And up. Again. Breathe out on the way down. Your teacher would say, you're not a lift. Lifts don't breathe. Again." },
      { n: "They did it four times, then eight, and the heat sat on the backs of Solar's knees and her thighs began to report, quietly and then not quietly, that this was not what they'd been told they were for. Kazuha counted under her breath in Japanese. Then, on the fifth time, without noticing, in Korean. Then, on the sixth, in English, with an accent Solar didn't know she had, a teacher's accent, somebody else's, a woman with a stick saying *and*." },
      { n: "On the seventh count Kazuha stopped counting. Solar felt the hand on her wrist go still." },
      { s: 'kazuha', f: 'surprised', t: "...Oh. Oh, it's there. When you do it, it's there. I can see the floor." },
      { s: 'kazuha', f: 'happy', t: "Honey. The burn mark. Third mirror. Again, again, don't stop, Solar-ssi, don't stop, I'm looking at it." },
      // CG: eqx-stone-barre — two young women at the back of a summer shrine, one holding a moss-covered stone lantern like a ballet barre, knees bent in a plié, the other standing close behind her holding her wrist out in a curve, eyes shut, smiling, dappled shade, a small cat asleep on a stepping stone.
      { n: "So Solar didn't stop. She went down into the warm water and came up out of it, again and again, with her legs shaking and the moss going warm under her hand, and behind her Kazuha stood with her eyes shut and her hand on Solar's wrist and watched a floor in another country through the bones of someone else's arm. The cat on the fourth stone rolled onto its back in the moving shade and showed them its belly, which, Kazuha said afterward, it had never once done for her alone." },
      { place: 'Naganaki Shrine · Flat Stones', time: 'Daytime', bg: 'naganaki-shrine-summer', music: 'tender', soft: true },
      { n: "They were sitting on the stones with their legs out and Solar's thighs still trembling when someone came round the side of the offering hall. Slowly. A small old woman in a cotton summer cardigan, buttoned to the top despite the heat, with a paper fan in one hand and a little cloth bundle in the other, and a straw hat with a ribbon that had been blue a long time ago." },
      { n: "Solar knew her. Not to speak to. The blue-roofed house at the bottom of the dorm street, the one with the pots on the step and the nameplate worn soft at the edges; the woman who watered them twice a day; Mrs. Arai. She'd passed her gate a hundred times." },
      { s: 'arai', t: "Oh! Oh, I'm sorry, girls, I didn't think anyone came round the back. I come to give the fox his rice. The one by the side gate. Nobody gives him anything anymore." },
      { n: "She held up the cloth bundle, as if it were an excuse, and then she saw Kazuha properly, and stopped, and her whole face changed. Went soft and bright and delighted, like a girl's." },
      { s: 'arai', t: "...You're the one with the saucer. At the big house by the river. On the veranda. I've seen it from the lane in the mornings. I said to myself, there's a girl who was brought up right." },
      { s: 'kazuha', f: 'surprised', t: "...Yes. That's mine. It's for— my grandmother does it. In Osaka. For my grandfather." },
      { s: 'arai', t: "Then you know. You know already. Isn't that lovely, a girl your age knowing." },
      { n: "She came and sat down on the first stone, carefully, in sections, the way old women sat, with her fan going, and she reached out without asking and took one of Kazuha's hands and patted it, and held on to it." },
      { s: 'arai', t: "Mine came home, you know. My son. Last week. I'd been leaving it out since spring, the way the kind lady by the river told me to, and he came. Late. He always came home late." },
      { s: 'arai', t: "I heard him eat. Every scrap. I didn't go down. He never liked to be looked at eating, not since he was small. But the plate was clean in the morning, and the chair pushed in. So I know." },
      { n: "Kazuha's hand lay in the old woman's hand. It didn't move. Solar watched it not move. Kazuha's face did what it did when she was holding a leg up beside her ear in the heat, which was nothing, beautifully, with every muscle in it." },
      { s: 'arai', t: "So you keep at it, dear. Don't you stop. It's the stopping that's cruel. If you stop, they come to the door and there's nothing there for them, and they think you've stopped expecting them." },
      { s: 'arai', t: "You'd have been about my granddaughter's age, if I'd had one. He never married. He worked too hard. I'd have liked a granddaughter with a back like yours." },
      { choose: [
        { t: "Arai-san. Whatever you hear at night. Don't open the door.", notes: 2, then: [
          { s: 'arai', t: "Oh, I don't, dear. I'm old, I'm not a fool. Everybody tells me that. All you young people, so worried." },
          { s: 'arai', t: "I don't need to open it. He's already in." },
          { n: "She said it fondly. She said it the way you'd say the kettle was already on." }
        ] },
        { t: "(Ask about the fox.)", notes: 2, then: [
          { n: "Mrs. Arai brightened, and told them about the fox: a little stone fox by the side gate with a chipped ear and a red bib gone pink, that nobody fed since the old priest died, and how she brought it a rice ball every Tuesday, and how it was always gone by Wednesday, and how that was crows, of course, she wasn't silly, but it was nice to think." },
          { s: 'arai', t: "It's nice to think something's glad you came. That's all any of it is." }
        ] },
        { t: "(Let her talk. Watch Kazuha's hand.)", notes: 3, then: [
          { n: "Mrs. Arai talked. About the son, who'd run up the dorm hill to school every morning with his shoes untied; about the maple on her step he'd bought her that had never grown an inch; about the lady by the river, such a kind woman, who knew exactly how everyone took their tea. And all the while she held Kazuha's hand, and patted it, and Kazuha let her, and halfway through the son's school shoes Solar saw Kazuha's thumb move, once, very slightly, and stroke the back of the old woman's wrist, the way you'd calm something that didn't know it was frightened." }
        ] }
      ] },
      { n: "Mrs. Arai went off to give the fox his rice, slowly, round the side of the hall, her fan going, and called back over her shoulder that Kazuha should come and have pickles with her, any day, any time, the gate was never locked. Then she was gone, and the cicadas closed over the place where she'd been." },
      { n: "Kazuha looked at her own hand for a while, where the old woman had held it. Then she wiped it, slowly, on her knee." },
      { s: 'kazuha', f: 'neutral', t: "...I moved it, you know. The saucer. After the twenty-seventh. I couldn't put it in the hall anymore, under the hook. The hall felt like it was holding its breath. So I put it on the veranda. Outside. Where the garden starts." },
      { s: 'kazuha', f: 'neutral', t: "Every morning since, it's upside down. You saw. Face down on the boards, very neat, and the flour around it in a circle. My grandmother would say, accepted. Polite. It's turned its cup over, it's finished, thank you for the meal." },
      { s: 'kazuha', f: 'neutral', t: "The circle is bigger every week. I measured it with my hand. In July, a hand. Now a hand and two fingers. As if whoever eats is sitting longer." },
      { s: 'kazuha', f: 'neutral', t: "And now a lady tells me, don't stop. It's the stopping that's cruel." },
      { choose: [
        { t: "Put salt beside it. A little cone. Like at a shop door.", notes: 3, flag: 'eqx-kazuha-salt', then: [
          { n: "Kazuha turned and looked at her. Really looked, the way she'd looked at the cat in June when Solar had asked who was licking the saucer." },
          { s: 'kazuha', f: 'neutral', t: "Morijio. My grandmother does that too. On the step, two little hills. Salt is for keeping out. Rice is for welcoming." },
          { s: 'kazuha', f: 'neutral', t: "...Both at once. A welcome and a no. That's very Korean of you, Solar-ssi. That's what my Songdo mother would do. She'd say come in, come in, and stand in the door." },
          { n: "She said she'd do it. Tonight. A little cone, beside the saucer, from the box by the cooker. She said it as if Solar had suggested a better brand of tea, and her shoulders, which had been up round her ears since the old woman sat down, came down a centimeter." }
        ] },
        { t: "Then keep going. Don't stop. Not because she said. Because you want to.", notes: 2, then: [
          { s: 'kazuha', f: 'neutral', t: "Because I want to. Yes. I like that better than because I'm afraid of being cruel." },
          { s: 'kazuha', f: 'neutral', t: "...I don't know which one it is. I'll put the rice and I'll find out which one it is." }
        ] },
        { t: "Stop. Tonight. Just don't put it out.", notes: 2, then: [
          { n: "Kazuha didn't answer for a long time. The cat yawned on the fourth stone, enormously, all its teeth, and closed its mouth with a click." },
          { s: 'kazuha', f: 'sad', t: "...If I stop, then I'm the one who closed the door. On someone who was polite. Who turned the cup over and said thank you." },
          { s: 'kazuha', f: 'neutral', t: "I'll think about it. I'll think about it tonight, at the place where I put it. That's where I'll decide." },
          { n: "She didn't say what she'd decided. Solar knew, without being told, that the saucer would be on the boards in the morning." }
        ] }
      ] },
      { n: "Then she stood, all at once, in one movement, the way she did, and stepped onto the third stone and put her hand on the warm moss of the lantern, and turned out her bare feet." },
      { s: 'kazuha', f: 'neutral', t: "Count for me. In whatever language comes. Don't choose." },
      { n: "Solar counted. It came out in English first, then Korean, then something with no words in it at all, just the beat, and Kazuha went down into the warm water and came up, and went down, and on the fourth time her left heel lifted a hair off the stone, by itself, the way a heel lifts on a sprung wooden floor that gives a little under you, and she stopped there, mid-count, with her eyes closed, and didn't come up for a long moment." },
      { s: 'kazuha', f: 'happy', t: "...There. A little. Don't tell it I noticed." },
      { n: "The cat got up off the fourth stone, stretched in a perfect, insulting copy of her plié, and walked off into the trees. Behind the offering hall, by the side gate, an old woman was telling a stone fox about her son. The shade moved on the stones. Neither of them said anything about the saucer again, and Kazuha kept her hand on the lantern a long time after the count ran out, as if it were the only thing in the garden that wasn't going anywhere." }
    ] },
    { after: '9/14', title: '3: something that looks like it', place: 'Naganaki Shrine · Flat Stones', time: 'After School', music: 'tender', scene: [
      { bg: 'naganaki-shrine-autumn' },
      { n: "The heat broke in the second week of September the way a fever breaks, all at once, in the night, so that you woke up cold under a sheet you'd kicked off and lay there not understanding what had changed. By the next afternoon the light at Naganaki had gone thin and gold and sideways, and the cicadas were down to a few stubborn ones going on alone in the high branches like men who hadn't heard the party was over, and the camphor leaves had started, here and there, to come down onto the stones." },
      { n: "Kazuha was at the far end of the row, past the lantern, where the shrine ground ran out into a slope of long grass and an old bamboo fence nobody had mended since before any of them were born. She had a pair of kitchen scissors and an armful of pampas grass, the tall silver plumes leaning over her shoulder like something she'd caught, and she was cutting more, one stalk at a time, choosing, the way you'd choose flowers for someone who'd notice." },
      { s: 'kazuha', f: 'happy', t: "Solar-senpai. Good. Hold these. Don't squash them. They're very proud." },
      { n: "She loaded the plumes into Solar's arms. They were lighter than they looked and softer, and they shed a fine silver fluff onto her sleeves that stuck there and wouldn't brush off." },
      { ifEvent: 'eqx-equinox', then: [
        { s: 'kazuha', f: 'neutral', t: "Susuki. For the moon, in Japan. My grandmother puts them out every year. In a vase, by the window, with dango. Even after the moon is gone." },
        { s: 'kazuha', f: 'neutral', t: "...These aren't for the moon. These are for the front hall. For the step. Where the shoes are." },
        { n: "Solar's arms tightened on the grass before she knew they had. The three pairs in the genkan. The heels and the embroidered slippers and the flat black shoes, in a row on the cold stone, toes to the door, where nobody had moved them since the morning of the twenty-fourth, and everyone who came in took off their own shoes at the far end of the step so they wouldn't touch." },
        { s: 'kazuha', f: 'neutral', t: "Grandmother says, susuki looks like rice in the field. You put out something that looks like what you're hoping for. So the gods see it and think, ah, they're expecting a harvest. Better bring one." },
        { s: 'kazuha', f: 'neutral', t: "I bow to the shoes when I go out. Every time. Like the hook in the hall, in June. I don't know who taught me that. I think the house did." }
      ], else: [
        { s: 'kazuha', f: 'neutral', t: "Susuki. For the moon. Oka-san's moon-viewing, on the twenty-third. She said, who'll get the grass, girls, and I said me before anyone else could say anything." },
        { s: 'kazuha', f: 'neutral', t: "My grandmother puts them out every year. In a vase, by the window, with dango. She says susuki looks like rice in the field. You put out something that looks like what you're hoping for, so the gods see it and think, ah, they're expecting a harvest. Better bring one." },
        { s: 'kazuha', f: 'happy', t: "So this year I'm hoping for a big one. Look how much I've cut. The gods will think we're very greedy." }
      ] },
      { n: "She cut three more and then stopped, and stood with the scissors open in her hand, looking at the slope of long grass running down to the fence, silver and moving, all of it bending one way in a wind Solar couldn't feel." },
      { s: 'kazuha', f: 'neutral', t: "...Arai-san calls me her granddaughter now. At the table. Every night. You saw." },
      { s: 'kazuha', f: 'neutral', t: "She has no granddaughter. Her son never married. I said yes. She asked, aren't you, aren't you my granddaughter, with her hand on mine, and I said yes, and I looked at you, and you looked at me." },
      { s: 'kazuha', f: 'neutral', t: "What should I have said?" },
      { choose: [
        { t: "You said what was kind.", notes: 2, then: [
          { s: 'kazuha', f: 'neutral', t: "Kind. Yes. It was the kind thing. It was very easy. That's what frightened me, a little. How easy." },
          { s: 'kazuha', f: 'neutral', t: "In this house all the kind things are easy. You just say yes. Yes to supper, yes to tea, yes, I'm your granddaughter. Everyone smiles. My mouth likes it very much." }
        ] },
        { t: "I don't know. I'd have said yes too.", notes: 3, then: [
          { s: 'kazuha', f: 'surprised', t: "...You would? You?" },
          { s: 'solar', f: 'neutral', t: "I'm very good at being who people need. It's my worst thing." },
          { n: "Kazuha looked at her over the armful of grass for a long moment, and then nodded, slowly, as if Solar had told her where she'd been born." },
          { s: 'kazuha', f: 'neutral', t: "Then I'm in good company. Bad company. Good company." }
        ] },
        { t: "(Take the scissors out of her hand. Close them.)", notes: 3, then: [
          { n: "Solar shifted the grass to one arm and took the scissors out of Kazuha's hand, gently, and closed them, and held them. Kazuha let her. She looked at her own empty hand, open in the air in front of her, the way she'd looked at both her hands in the atrium on the night they came through, as if they belonged to someone else." },
          { s: 'kazuha', f: 'neutral', t: "...Thank you. I was holding them very hard. I didn't notice." }
        ] }
      ] },
      { n: "They walked back along the stones with the grass, Kazuha ahead, Solar behind with her arms full of silver, and sat on the third stone and the second, and the cat came from nowhere and sat on the fourth, and for a while Kazuha sorted the stalks by height on the stone between them, tallest first, and said nothing, and the light went from gold to amber." },
      { s: 'kazuha', f: 'neutral', t: "Can I ask you something? A real thing. Not a silly idea." },
      { s: 'kazuha', f: 'neutral', t: "In July, Oka-san asked us. You'll stay together, won't you, girls. Promise me. And we said, we will. All four. I said it too. I said it with my mouth. I didn't decide. My mouth did it, like it does senpai and ssi." },
      { s: 'kazuha', f: 'neutral', t: "I'd like to decide now. With the rest of me." },
      { n: "She put the last stalk down. She put her hands flat on her knees, the way she put her feet flat on the stone, pressing, like someone pressing their palms on a window." },
      { s: 'kazuha', f: 'neutral', t: "In one of me I'm at the barre in a row of girls I never talk to. We stand in a line every day for years and I don't know where any of them live. In one of me I'm the Japanese girl at Hanlim, and my friends are a stream board and a ghost in a photo booth. In one of me I'm Yunjin's friend from the studio, and she has a whole life in a house I've never been to, that she won't talk about, and I don't ask." },
      { s: 'kazuha', f: 'neutral', t: "Here there are five of us. In one room. With the light on. Chaewon counting. Sakura early on the turn. Eunchae watching her feet. Yunjin at the end with a space next to her. Me." },
      { s: 'kazuha', f: 'neutral', t: "I've never been in the middle of anything. Here I'm in the middle." },
      { s: 'kazuha', f: 'neutral', t: "So. Tell me it's all right. Tell me we can stay together. Here. The five of us. You're the one I'd believe. You have three of everything, like me. You'd know." },
      { choose: [
        { t: "Together is something you already are. Where you are is yours to decide. Not hers. Not mine.", notes: 2, tally: { choose: 1, 'asks.kazuha': 'choose' }, then: [
          { n: "Kazuha was quiet. She looked at the five stalks of grass she'd laid out on the stone in a row, by height, tallest first, and moved the last one, the shortest, a little closer to the others." },
          { s: 'kazuha', f: 'neutral', t: "...Mine. My feet don't like that word. It's a word with no floor. You stand on it and it doesn't tell you where you are." },
          { s: 'kazuha', f: 'neutral', t: "But I think it's the only word nobody else can say for me. Oka-san can say *stay*. Arai-san can say *granddaughter*. Only I can say *mine*." },
          { s: 'kazuha', f: 'neutral', t: "That's unkind of you, Solar-ssi. Thank you. I'll be angry later. Now I'll sort the grass." }
        ] },
        { t: "Stay together. All five of you. Here, where you're in the middle.", notes: 3, tally: { cakes: 1, 'asks.kazuha': 'yes' }, then: [
          { n: "Kazuha's face did the wide thing, the whole-face smile that made her look twelve, and her shoulders came all the way down, the way they had in June, as if a heavy coat had been lifted off them by someone kind." },
          { s: 'kazuha', f: 'happy', t: "Yes. Good. Then I've decided. Not my mouth. All of me. Feet too." },
          { s: 'kazuha', f: 'happy', t: "I'll tell the others tonight. Not that you said. That I decided. Chaewon will count us. Five. She'll be so pleased it comes out the same every time." },
          { n: "She gathered the five stalks into one bundle and wound a stalk round them twice and tied it, firmly, and held it up against the amber light, and the cat on the fourth stone looked at it with its ears very flat, and got up, and went away into the trees, and didn't come back while they were there." }
        ] },
        { t: "You can find each other at home too. In all three. On purpose.", notes: 2, tally: { 'asks.kazuha': 'no' }, then: [
          { n: "Kazuha looked at her for a long time. Long enough that the last cicada in the high branches stopped, and started, and stopped." },
          { s: 'kazuha', f: 'neutral', t: "...On purpose. That's a nice phrase. It's a sad one too. You only have to do things on purpose when they don't happen by themselves." },
          { s: 'kazuha', f: 'sad', t: "At home nothing happens by itself. Here it all happens by itself. That's why it's easy. That's why I asked." },
          { s: 'kazuha', f: 'neutral', t: "...I'll remember it. On purpose. I'll put it somewhere I can borrow it back." }
        ] }
      ] },
      { n: "The light went. Not all at once; the way it went now that it was autumn, sliding off the stones one at a time, the last of it climbing the trunks of the camphor trees like water draining up instead of down. Kazuha stood, and picked up the grass, all of it, in both arms, and stood on the third stone with the silver plumes over her shoulder, looking toward the river." },
      { ifEvent: 'eqx-persimmon', then: [
        { s: 'kazuha', f: 'neutral', t: "I left the saucer. When we went. Chaewon said, not one sock, Kazu, don't leave one sock in this house. I took my socks. I left the saucer on the veranda, the right way up, with rice in it." },
        { s: 'kazuha', f: 'sad', t: "I thought, somebody should still be fed. Then I was on the bridge, and I thought, no. Nobody should. Not there." },
        { s: 'kazuha', f: 'neutral', t: "I didn't go back for it. I'm not going to." }
      ], else: [
        { ifEvent: 'eqx-equinox', then: [
          { s: 'kazuha', f: 'neutral', t: "The saucer. You'll want to know. You always look at it when you come." },
          { s: 'kazuha', f: 'neutral', t: "On the morning of the twenty-fourth it was the right way up. Full. Not one grain. Like the morning they found Nozomi-kun. And the next morning. And the next. Three mornings, full." },
          { s: 'kazuha', f: 'sad', t: "Then on the fourth morning it was upside down again, in the flour, very neat. The circle is two hands now. As if whoever eats came back from a long way off, and was very, very full, and sat down to rest." },
          { n: "She didn't say what she thought it meant. She held the grass. Solar didn't say it either, and something under her ribs turned over, once, slowly, the way it had on the bridge at dawn." }
        ], else: [
          { s: 'kazuha', f: 'neutral', t: "The saucer. You'll want to know. You always look at it when you come." },
          { s: 'kazuha', f: 'neutral', t: "Upside down, every morning. The circle is a hand and four fingers now. This week I put my whole hand in the middle of it and spread my fingers, and the flour was still warm at the edge. At six in the morning. Like a cup somebody had just put down." },
          { s: 'kazuha', f: 'neutral', t: "My grandmother would say, a guest who stays that long is a guest who's thinking of moving in." },
          { n: "She said it lightly, the way her grandmother would have, and laughed a little, and it was a good laugh, and it stopped a fraction too early, like a step that wasn't there." }
        ] }
      ] },
      { ifFlag: 'eqx-kazuha-barre', then: [
        { n: "Before they went down the steps she stopped by the lantern, and shifted the grass to one arm, and put her free hand on the moss, and looked at Solar." },
        { s: 'kazuha', f: 'neutral', t: "Can I borrow it? The floor. Just for a second. I've been too busy to keep it." },
        { n: "Solar put her own hand on the lantern beside Kazuha's and turned out her feet, badly, with her knees from a cold country, and went down into the warm water, once, slowly, and came up; and Kazuha, beside her, with an armful of silver grass, did it with her, and closed her eyes on the way down, and opened them on the way up, and nodded, as if somebody had handed her back a cup of rice exactly as full as she'd lent it." }
      ], else: [
        { n: "Before they went down the steps she stopped by the lantern and touched the moss on top of it, lightly, with two fingers, the way you'd touch the head of a child on your way out of a room." }
      ] },
      { s: 'kazuha', f: 'neutral', t: "Come again on Thursday. The cat likes you. That's two of us, still." },
      { s: 'kazuha', f: 'happy', t: "Make it three. I'll count you twice. Senpai and ssi. Don't tell Chaewon. She'll want the number to be right." },
      { n: "She went down the shrine steps ahead of her with the pampas grass over her shoulder like a flag, and the wind that Solar couldn't feel went through the long grass on the slope behind them, all of it bending one way, toward the river, and stayed bent a little after the wind was gone, the way grass does when something heavy has lain down in it and only just got up." }
    ] }
  ]
});
