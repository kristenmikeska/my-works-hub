/* The HOAX epilogue, second pass (Nov 6 2026): Kat's three "ideas I didn't build", answered yes. Data only; bonds go through
   add() as in people.js (append, whichever file loads first). The third idea, the phone call from her dad, is story-nana.js's
   epi-h-dad-call (1/6 Late Night) plus two Contacts calls in texts-nana.js.

   Hangouts
     jungwon  epi-h-jungwon-dogs 'dog date'   12/31-1/7 After School, every route, after epi-h-christmas. The park; Nana and
              Maeumi; Sunoo's plan on an index card in Jungwon's coat pocket (four items; the fourth is "kiss her (only if
              appropriate!!!)"); the biscuits he baked by weight; forty-five minutes, timed, because a dog walk is an errand.
              By route: jungwon (the fourth item, and her hands in his pockets), jihoon (she keeps checking her phone; he
              holds it for her for forty minutes; the fourth item can wait), council (Niki behind a tree; RETREAT FACTS lights
              up; Jungwon does the fourth item "for the record"). Choice: the biscuits / the photo / the leash.
              The window starts 12/31 so it never sits in front of epi-h-jungwon-2 (12/26-12/30); on the jungwon route it
              shares 1/2-1/7 with epi-h-jungwon-3, and both fit (seven free afternoons and evenings).
     kazuha   epi-h-kazuha-1 'purikura'       12/28-1/7 After School, every route, after epi-h-seance (new bond, role friend).
              The arcade's photo booth; Kazuha's theory that ghosts show up in purikura; a white smear at Solar's shoulder in
              one frame ("the lens. Or a friend."); Osaka; Asahi's eleven pictures of Nana. Choice: draw a ghost / ask about Osaka.
     eunchae  epi-h-eunchae-1 'off the record' Late Night 1/1-1/7 (lateOpen 1/1, 1/3, 1/4, 1/7), every route, after
              epi-h-livestream (new bond, role friend). A DM at 12:20, then a call: cereal in the dark, the mean comments she's
              been deleting, why she started Hanlim Unfiltered; { ifEvent: 'epi-h-motion' } the tin question wasn't hers. Her one
              question. Choice: the temple (strain) / "off the record? no." / "ask me after exams". She'll still ambush
              Solar on Monday (story-w3's 1/8 lunch).
   Flags set: none. Flags read: the locked route (ifEpiRoute). Glitches: one { glitch: { strain: 1 } } (Eunchae, the temple).

   Inventions for Kat to confirm
   - Jungwon bakes dog biscuits from a recipe by weight (one tray burnt, not brought); Mrs. Yang bought Maeumi a knitted coat;
     Sunoo writes the dates on index cards.
   - Kazuha moved from Osaka in the spring of second year; she did ballet until middle school and kept the posture; purikura
     lore (ghosts show up in photo booths) is hers.
   - Eunchae started Hanlim Unfiltered in first year because nobody talked to her at lunch and a camera gave her a reason to
     talk to people; she eats cereal at midnight; her mom's bedtime for her is 12:10 (the livestream already says so).
   Canon held: Jungwon is her boyfriend on every route and gets warmer, never louder; nothing past a kiss; Jungwon's curfew
   (errands, timed) and his mother's car; Nana tackling Maeumi on the first morning; Kazuha's "Solar-senpai"; nobody explains
   the strangeness; no Danielle, no video. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };

  /* ── Jungwon: the dog date ── */
  add('jungwon', 'friend', [
    { id: 'epi-h-jungwon-dogs', title: 'dog date', hint: "Jungwon texted at noon: are you and nana free at two. Two dogs, one park, forty-five minutes, timed.",
      after: '12/31', until: '1/7', slots: ['after'], events: ['epi-h-christmas'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · The Park', time: 'Daytime', scene: [
      { music: 'epi-h-romance' },
      { phone: [
        { from: 'jungwon', t: "are you and nana free at two." },
        { from: 'solar', t: "is this a date" },
        { from: 'jungwon', t: "it's a walk. walks are errands. errands are allowed." },
        { from: 'jungwon', t: "it's a date." }
      ], contact: 'Won' },
      { n: "He was at the park gate at two exactly, in the good coat buttoned to the top, with a canvas tote bag over one shoulder and Maeumi on a lead at his feet in a small knitted coat the colour of a traffic cone, and the moment Maeumi saw Nana come round the corner he did what he had been doing since the first morning of the school year, which was scream." },
      { n: "Nana did what he had been doing since the first morning of the school year, which was love him. He went straight across the snow on his big silly legs, dragging her behind him on her heels, and lay down at Jungwon's feet and rolled over in the snow with his paws in the air and his whole white stomach offered up to the sky, and Maeumi stopped screaming, and looked at the stomach, and after a long, suspicious moment, stepped up onto it, and stood there, like a very small king on a very large hill." },
      { s: 'jungwon', f: 'happy', t: "Good afternoon." },
      { s: 'solar', f: 'happy', t: "Your dog is standing on my dog." },
      { s: 'jungwon', f: 'neutral', t: "He's establishing a hierarchy." },
      { s: 'solar', f: 'happy', t: "Won. Nana's sixty pounds. Maeumi's like four." },
      { s: 'jungwon', f: 'neutral', t: "It's not about weight. It's about confidence." },
      { n: "He'd set the timer on his watch at the gate. She could see it going, forty-five minutes counting down, because a dog walk was an errand and an errand was allowed and nobody in the Yang house had said anything about how long, so he'd asked for an hour and been given forty-five and had decided that was a victory. He reached into the tote bag and took out an index card and looked at it, and she saw the handwriting on it from where she stood, the round bubbly letters with hearts over the i's." },
      { s: 'solar', f: 'surprised', t: "Is that Sunoo's writing?" },
      { s: 'jungwon', f: 'flustered', t: "...No." },
      { s: 'solar', f: 'happy', t: "Won. There's a heart over the i." },
      { s: 'jungwon', f: 'flustered', t: "He's very thorough. He wanted to help. He said I'd stand there and talk about the handbook for forty-five minutes. I told him I wouldn't. He made a list." },
      { n: "He didn't let her see the list. He put it back in his coat pocket like a man hiding a ransom note and took out, instead, a thermos of barley tea, two paper cups, and a small paper bag folded over twice at the top." },
      { s: 'jungwon', f: 'neutral', t: "Item one. A walk. Item two." },
      { n: "In the paper bag were dog biscuits. Homemade, lumpy, bone-shaped more or less, a little too brown on the bottoms. He'd made them. She could tell he'd made them because each one was almost exactly the same size as every other one, the way only someone who'd weighed the dough on a kitchen scale could get them." },
      { s: 'jungwon', f: 'neutral', t: "Oat flour, pumpkin, one egg. No salt, no sugar. I found a recipe from a veterinary college. There was a first tray. We don't talk about the first tray." },
      { s: 'solar', f: 'happy', t: "You baked for my dog." },
      { s: 'jungwon', f: 'flustered', t: "I baked for both dogs. It's not favouritism. It's a dog date." },
      { n: "They walked. The path round the pond was salted and grey and the pond was white and the benches had little caps of old snow on them, and the dogs walked the way they'd always walk, she thought, if she and Jungwon were walking them together for the rest of their lives: Maeumi in a straight, furious line at Jungwon's ankle, and Nana in loops, wide happy loops, out and back, out and back, round Maeumi like a planet with a very small, very bad-tempered sun." },
      { choose: [
        { t: "(Feed Nana one of his biscuits.)", stat: { kindness: 1 }, then: [
          { n: "She held one out flat on her glove. Nana took it like it was a sacrament, chewed it with his eyes closed, swallowed, and then sat down in the middle of the path and looked at Jungwon with an expression of such naked, total devotion that Jungwon actually took a step back." },
          { s: 'jungwon', f: 'surprised', t: "Why is he looking at me like that?" },
          { s: 'solar', f: 'happy', t: "You fed him. You're his now. That's how it works. You can't give him back." },
          { n: "Jungwon looked at Nana. Nana looked at Jungwon. Very slowly, the way he did everything that frightened him a little, Jungwon crouched down and held out a second biscuit on his own flat palm, and Nana took it as gently as anything, and then put his whole enormous head against Jungwon's chest and leaned, and Jungwon, crouched in the snow in the good coat with sixty pounds of dog leaning on him, put his arms round Nana's neck and held on, and didn't say anything, and his ears went pink." }
        ] },
        { t: "(Take a picture of the dogs together.)", stat: { charm: 1 }, then: [
          { n: "It took eleven tries. On the twelfth they were both, briefly, on the same bench: Nana sitting up straight, smiling at the camera with enormous dignity, and Maeumi beside him in his traffic-cone coat staring off to the left in the opposite direction, at nothing, with a face like a disappointed headteacher." },
          { s: 'jungwon', f: 'happy', t: "That's my lock screen." },
          { s: 'solar', f: 'surprised', t: "Your lock screen is the default one. The mountains." },
          { s: 'jungwon', f: 'neutral', t: "It was. Send it to me." },
          { n: "She sent it to him. He changed it standing there on the path, carefully, and showed her, and she looked at the two of them on his screen, the dog she'd had since she was eleven and the dog that had started all of this, side by side, and had to look at the pond for a second." }
        ] },
        { t: "(Swap leashes with him.)", stat: { courage: 1 }, then: [
          { n: "She held out Nana's leash. He looked at it like he'd been handed a summons." },
          { s: 'jungwon', f: 'serious', t: "He'll pull." },
          { s: 'solar', f: 'happy', t: "He'll pull. Hold on with both hands." },
          { n: "Nana pulled. Jungwon held on with both hands, and was towed, at speed, very politely, in a straight line across the snow towards a pigeon, saying *Nana, Nana, Nana, please,* while she stood on the path holding Maeumi, who weighed nothing and screamed at everything, and laughed so hard she had to sit down on a bench in the snow, and Maeumi got onto her lap and sat there, warm and indignant, and let her." }
        ] }
      ] },
      { cg: 'epi-h-dog-date' },
      { n: "They ended up on the bench by the pond with the thermos between them and twenty minutes left on his watch. Maeumi had climbed into the deep fur on Nana's back and gone to sleep there, curled up small, his traffic-cone coat the only colour in the whole white park, and Nana was lying very still underneath him with his chin on his paws, not moving so much as an ear, in case he woke him up." },
      { s: 'jungwon', f: 'neutral', t: "Look at them." },
      { s: 'solar', f: 'happy', t: "I'm looking." },
      { s: 'jungwon', f: 'sad', t: "He's never slept outside the house. Not once. He doesn't trust anything." },
      { n: "He took the index card out of his pocket again, and this time he didn't hide it, and she leaned over and read it. *DOG DATE (SUNOO'S PLAN) 1. walk!! 2. treats (u made them right??) 3. a photo of the dogs 4. kiss her (only if appropriate!!!)*" },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'solar', f: 'happy', t: "Is it appropriate?" },
        { s: 'jungwon', f: 'neutral', t: "I've been assessing it since two o'clock." },
        { s: 'solar', f: 'happy', t: "And?" },
        { n: "He put the card down on the bench. He looked at her the way he looked at a question he already knew the answer to and wanted to get exactly right anyway, with the dimple coming in his cheek, the deep one, the one that came when he concentrated, and then he leaned in and kissed her, carefully, his nose cold against hers and his mouth warm and tasting a little of barley tea, and she put both her hands in his coat pockets to keep them warm, because they were right there, and kept them there." },
        { n: "When he pulled back his ears were pink to the tips. He picked the card back up, and took a pen out of his inside pocket, because of course he had a pen, and ticked item four, neatly, and put the card away." },
        { s: 'jungwon', f: 'flustered', t: "For Sunoo. He'll ask." },
        { s: 'solar', f: 'happy', t: "Won." },
        { s: 'jungwon', f: 'sad', t: "Forty-five minutes is not enough. I'm going to ask for an hour next time. I'm going to say the dogs need it." },
        { s: 'solar', f: 'happy', t: "The dogs do need it." },
        { s: 'jungwon', f: 'neutral', t: "That's what I'm going to say." }
      ] },
      { ifEpiRoute: 'jihoon', then: [
        { n: "She'd checked her phone four times since the gate. She knew it was four because he'd noticed every one, and hadn't said anything, and on the fourth she saw him see her do it, and look at the pond instead." },
        { s: 'jungwon', f: 'neutral', t: "Is it him?" },
        { s: 'solar', f: 'sad', t: "...He hasn't answered since last night. It's probably nothing. It's always probably nothing." },
        { n: "He didn't get jealous. He never got louder. He got quieter, and warmer, and he held his hand out on the bench between them, palm up, the way you'd hold it out for a dog you didn't want to frighten." },
        { s: 'jungwon', f: 'neutral', t: "Give it to me. For twenty minutes. If he calls, I'll hand it to you myself. I promise. I'll watch it the whole time." },
        { n: "She gave it to him. He put it in his inside pocket, over his heart, and kept his hand on the outside of the pocket the whole twenty minutes, she noticed, the way you keep your hand on something you've promised to look after. Then he looked at the index card for a long moment, and folded it in half, and put it away with item four unticked." },
        { s: 'jungwon', f: 'neutral', t: "Later. When you're all the way here." },
        { n: "He kissed the back of her glove instead, quickly, like he was embarrassed to have thought of it, and when the timer went off he gave her the phone back first, before anything else, and there was a message on it from Jihoon that said *Alive. Don't Be Dramatic.*, and Jungwon read it upside down and smiled, very slightly, like he was glad, and he was." }
      ] },
      { ifEpiRoute: 'council', then: [
        { n: "She was reading item four for the second time when a small white flash went off behind the big pine by the toilets." },
        { s: 'jungwon', f: 'serious', t: "...We're being surveilled." },
        { n: "Her phone and his buzzed at the same moment, in both their pockets, like an alarm." },
        { phone: [
          { from: 'niki', t: "rikiniki: JOLAR DOG DATE SPOTTED" },
          { from: 'niki', t: "rikiniki: [Photo: two people on a bench by a frozen pond, very blurry, and two dogs, one very large]" },
          { from: 'jake', t: "jakeys: THE DOGS ARE ALSO DATING??" },
          { from: 'sunoo', t: "sunooshine: that was MY PLAN. did he do number 4" },
          { from: 'heeseung', t: "heeheeseung: we don't discuss things in writing" },
          { from: 'heeseung', t: "heeheeseung: did he do number 4" }
        ], contact: 'RETREAT FACTS (do not leave)', group: true },
        { n: "Jungwon read it. His ears went red. He put his phone face down on the bench with great precision, looked at the pine tree, looked at her, and then, for the record, apparently, leaned over and kissed her, quickly and very deliberately, while a second flash went off behind the pine and somebody behind it said *YESSS* in Niki's exact voice." },
        { s: 'jungwon', f: 'flustered', t: "Item four." },
        { s: 'solar', f: 'happy', t: "You did that for the chat." },
        { s: 'jungwon', f: 'neutral', t: "I did that for me. The chat was a coincidence." }
      ] },
      { cg: null },
      { n: "The timer went off at a quarter to three. Maeumi woke up on Nana's back, remembered where he was, and screamed. Nana got up very slowly so as not to tip him off, and Maeumi rode him the first four metres of the path before he jumped down, and Jungwon watched them with his hands in his pockets and the empty biscuit bag folded in one of them, and walked her to the gate, and at the gate, before he went, he crouched down one more time and said *goodbye, Nana* into the dog's ruff, quietly, so only the dog would hear, and she heard anyway." }
    ] }
  ]);

  /* ── Kazuha ── */
  add('kazuha', 'friend', [
    { id: 'epi-h-kazuha-1', title: 'purikura', hint: "Kazuha is outside the arcade's photo booth with two thousand won and a theory.",
      after: '12/28', until: '1/7', slots: ['after'], events: ['epi-h-seance'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Arcade', time: 'Daytime', scene: [
      { music: 'epi-h-day' },
      { n: "Kazuha was standing in front of the photo booth at the back of the arcade with her hands folded in front of her and two thousand-won notes held between her fingers like a ticket, perfectly still in the middle of all the noise, the way only Kazuha could be perfectly still, as if the arcade were going on around a photograph of her." },
      { s: 'kazuha', f: 'happy', t: "Solar-senpai. Good. You came. I need a second person." },
      { s: 'solar', f: 'surprised', t: "For the booth?" },
      { s: 'kazuha', f: 'serious', t: "For the experiment. In Osaka, everybody knows. If something is following you, it shows up in purikura. The cameras are too bright. They catch everything. My cousin had a hand on her shoulder in four strips in a row. No one was there." },
      { s: 'solar', f: 'neutral', t: "Kazuha. Is this about the séance?" },
      { s: 'kazuha', f: 'happy', t: "Everything is about the séance. Come. Sit. Make a nice face. The ghost will like a nice face." },
      { n: "The booth was a curtained box the size of a wardrobe, bright as an operating theatre inside, with a screen that talked in a very high cheerful voice and a countdown and pink frames you could choose with a stylus. Kazuha chose the frame with bunny ears. She chose it with enormous seriousness, the stylus held like a calligraphy brush." },
      { n: "Three. Two. One. They made faces. Peace signs, the heart with two hands, the one where you both look shocked, Kazuha's posture perfect in every single one, back straight as a door, chin lifted, because she'd done ballet until middle school and her body had never let her forget it. Solar slouched in all of them. That was fine. That was the control group." },
      { n: "Then the strip came out of the slot, still warm, and Kazuha took it and held it up to the arcade's lights, and went quiet." },
      { n: "Five frames. In four of them it was just two girls with bunny ears. In the fifth, the last one, the one where they'd both looked shocked, there was a soft white smear at Solar's shoulder, just at the edge, where nobody was. A thumb on the lens, probably. A smudge. The kind of thing you'd never look at twice." },
      { n: "Kazuha looked at it twice. Then a third time. Then she looked up at Solar, not at her face, at her shoulder, at the air beside it, with the calm interest of someone checking on the weather." },
      { s: 'kazuha', f: 'neutral', t: "Ah. The lens." },
      { s: 'kazuha', f: 'happy', t: "Or a friend." },
      { s: 'solar', f: 'sad', t: "...Kazuha." },
      { s: 'kazuha', f: 'happy', t: "It's okay. A friend is okay. A friend who follows you is a good friend. In Japan we would leave it a little rice." },
      { choose: [
        { t: "(Draw a ghost on the strip with the stylus.)", stat: { charm: 1 }, then: [
          { n: "They went back in and paid for the decorating, and she drew a little white ghost with the stylus right over the smear, with round eyes and a smile and a tiny bow on its head, and Kazuha laughed, really laughed, a high surprised sound with her hand over her mouth, which Solar had never once heard her do at school." },
          { s: 'kazuha', f: 'happy', t: "Now it has a face. Now it's not scary. Solar-senpai, you're very clever." },
          { n: "The machine printed two. Kazuha kept one, for research, she said, and put it in the clear pocket on the back of her phone case where Solar could see it every time she looked at her phone, the two of them in bunny ears and a small white ghost with a bow, keeping them company." }
        ] },
        { t: "Kazuha. Do you miss Osaka?", stat: { kindness: 1 }, then: [
          { n: "Kazuha held the strip in both hands and was quiet for long enough that the booth's screen gave up and started its demo on a loop, a cartoon rabbit asking nobody to choose a frame." },
          { s: 'kazuha', f: 'sad', t: "I miss the trains. And my grandmother's house. And people saying my name right the first time." },
          { s: 'kazuha', f: 'neutral', t: "When I came in second year, nobody talked to me for three weeks. Then Asahi-kun spoke Japanese to me in the library by accident. He said *sorry* in Japanese because he bumped my chair. I followed him everywhere after that. He hated it." },
          { s: 'solar', f: 'happy', t: "He didn't hate it." },
          { s: 'kazuha', f: 'happy', t: "No. He says *no one cares*. That's how he says he cares." }
        ] }
      ] },
      { n: "They got tteokbokki from the cart outside the arcade and ate it standing up in the cold, and Kazuha told her, very seriously, that Asahi had eleven pictures of Nana on his phone and had shown her every one of them while saying *no one cares* after each one, and that she did not believe a dog could be that size, and that she was reserving judgement until she saw him with her own eyes." },
      { s: 'kazuha', f: 'serious', t: "Sixty pounds is not a dog, Solar-senpai. Sixty pounds is a small cloud." },
      { s: 'solar', f: 'happy', t: "He's a dog. He's my dog. He sleeps on my bed." },
      { s: 'kazuha', f: 'happy', t: "Then I will come and see. With rice. For your friend." }
    ] }
  ]);

  /* ── Eunchae ── */
  add('eunchae', 'friend', [
    { id: 'epi-h-eunchae-1', title: 'off the record', hint: "A DM from Eunchae at 12:20: off the record. not for the stream. are you ok",
      after: '1/1', until: '1/7', slots: ['late'], events: ['epi-h-livestream'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { phone: [
        { from: 'eunchae', t: "off the record" },
        { from: 'eunchae', t: "not for the stream. i'm not recording. i don't even have the ring light on" },
        { from: 'eunchae', t: "are you ok" }
      ], contact: 'eunchae' },
      { n: "She looked at it for a long time. Eunchae, who had aired frame 214 to half of Hanlim on New Year's Eve, who had a ring light and a lucky pair of socks and a mother who sent her to bed at twelve-ten. Nana, across her feet, sighed at the light of the phone. She called her. She didn't know why. She was tired of people only ever talking about her in comments." },
      { n: "Eunchae picked up on the first ring and said nothing for a second, and then, in a very small voice, nothing like the stream's voice at all, *oh, hi, oh my God, you actually called,* and Solar could hear a spoon against a bowl and a fridge humming and the particular hush of somebody in a kitchen in the dark trying not to wake a house." },
      { s: 'eunchae', f: 'flustered', t: "Sorry. I'm eating cereal. My mom thinks I'm asleep. I'm in the kitchen with the light off like a raccoon." },
      { s: 'solar', f: 'happy', t: "What kind?" },
      { s: 'eunchae', f: 'neutral', t: "The chocolate ones. Shells. Don't put that on anything." },
      { s: 'solar', f: 'happy', t: "I'm not the one with a stream, Eunchae." },
      { n: "There was a pause, and the spoon stopped." },
      { s: 'eunchae', f: 'sad', t: "Yeah. About that." },
      { s: 'eunchae', f: 'sad', t: "The comments got really mean. Under the clip. Not the funny mean. The other kind. About you. I've been deleting them since New Year's. I've deleted, like, three hundred. I made a filter. I'm not very good at filters." },
      { ifEvent: 'epi-h-motion', then: [
        { s: 'eunchae', f: 'serious', t: "And now there's a whole motion. With my stream in it. *As asked on Hanlim Unfiltered.* The tin thing wasn't me, I swear. It was a comment in the chat. I just read it out. I read everything out. That's the whole problem with me." }
      ] },
      { s: 'solar', f: 'neutral', t: "Why do you do it? The stream." },
      { n: "Eunchae was quiet for so long she thought the call had dropped. Then the spoon went back in the bowl, slowly." },
      { s: 'eunchae', f: 'sad', t: "First year nobody talked to me at lunch. For, like, a whole semester. And then I started filming stuff and asking people questions, and if you're holding a phone people talk to you. They have to. It's like a ticket." },
      { s: 'eunchae', f: 'neutral', t: "Then it got big. And now I don't know how to put the phone down. If I put the phone down I'm just the girl eating lunch on her own again." },
      { n: "Solar lay in the dark with the phone on her ear and Nana's weight on her feet and thought about every lunch she'd ever eaten at the old table, the noise of it, the way you never once had to have a reason to sit down." },
      { s: 'eunchae', f: 'flustered', t: "Can I ask one thing. Off the record. Actually off it. I won't use it. I just want to know." },
      { s: 'eunchae', f: 'serious', t: "Was it really a temple?" },
      { choose: [
        { t: "It was a temple, Eunchae.", stat: { charm: 1 }, then: [
          { glitch: { strain: 1 } },
          { s: 'eunchae', f: 'neutral', t: "...Okay." },
          { n: "She could hear that Eunchae didn't believe her. She could also hear that Eunchae had decided, right there in the dark kitchen with her spoon, to let her have it anyway, which was a kind of present, and not one Solar had expected from her." },
          { s: 'eunchae', f: 'happy', t: "Okay. Temple. I'm going to be so normal about it on Monday. I'm still going to ambush you on Monday, by the way. For a quote. That's my job." }
        ] },
        { t: "Off the record? No. And that's all you get.", stat: { courage: 1 }, then: [
          { n: "The spoon clinked down in the bowl and stayed there." },
          { s: 'eunchae', f: 'surprised', t: "...Oh." },
          { s: 'eunchae', f: 'serious', t: "Okay. Okay. That's all I get. I'm not going to use it. I'm writing it down in my head in invisible ink and then I'm burning my head." },
          { s: 'eunchae', f: 'sad', t: "Thank you for telling me the truth. Nobody tells me the truth. They tell me the version they want on the stream." }
        ] },
        { t: "Ask me after exams.", stat: { kindness: 1 }, then: [
          { s: 'eunchae', f: 'happy', t: "That's such a council answer. That's so Yang Jungwon of you. I love it. I hate it." },
          { s: 'eunchae', f: 'neutral', t: "Okay. After exams. I'm putting it in my calendar. I'm going to ambush you on Monday anyway, though. For a different quote. That's my job." }
        ] }
      ] },
      { n: "They talked until the cereal was gone. About nothing, after that. About Chaewon's index cards and the vending machine outside the convenience store that only worked if you kicked it and the dog in the clip from the park that Eunchae had been trying to identify for her stream since October, which turned out, when Solar described him, to be Nana, which made Eunchae shriek, quietly, in the dark, like a raccoon who'd found something wonderful in a bin." },
      { s: 'eunchae', f: 'happy', t: "He's YOURS? He's on, like, half my B-roll! Can I do a segment? Not on you. On *him*. *Hanlim Unfiltered presents: the dog.*" },
      { s: 'solar', f: 'happy', t: "He'd love that. He's a big fan of being looked at." },
      { s: 'eunchae', f: 'happy', t: "Same, honestly." }
    ] }
  ]);
})();
