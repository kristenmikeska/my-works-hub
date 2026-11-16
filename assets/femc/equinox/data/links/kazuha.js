/* Persona 3: Equinox · Nakamura Kazuha · Faith. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 6/29: she came through on 6/26, story-act2 'eqx-stage'; her home is the flat stones at Naganaki
   Shrine on Tuesday, Thursday and Saturday after school and Sunday daytime. Gated to 6/29, her first Tuesday, not 6/27:
   the scene needs a few nights of the saucer, and 6/27 is the morning they arrived). Ranks 2–10 still to
   write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Shared memory: the HOAX epilogue (Osaka, ballet until middle school and the posture kept, the purikura ghost theory:
   "a friend who follows you is a good friend. In Japan we would leave it a little rice"), the strangers epilogue
   ("Solar-ssi", her grandmother's sayings: "the body is older than the weather report"), the 6/26 atrium ("I was at the
   barre"). She calls Solar "Solar-ssi" and "Solar-senpai" in turn, without noticing (the braiding).
   The hook: her body remembers three floors. And the saucer of rice she leaves out at the boarding house every night.
   Reads: ifEvent eqx-last-grain (7/27 morning) for the saucer.
   Flags this file sets: eqx-kazuha-rice (Solar helps her leave the rice). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kazuha', name: 'Nakamura Kazuha', short: 'Kazuha', arcana: 'Faith', numeral: '', from: 'Runners · strangers · Hoax', kind: 'arrival',
  world: 'RSH', romance: null, arrives: '6/26', starts: '6/27', lodging: 'boarding',
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
    ] }
  ]
});
