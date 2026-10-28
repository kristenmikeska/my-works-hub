/* Niki, living world (Jay / Niki / Sunghoon batch). Data only; formats in core.js (deliverTexts / afterRank, holidayInvites,
   dailyLife / dailyFits, runInDue). Load after daily-life.js and living-runins.js (they assign their arrays; this file pushes).
   His link: links/niki.js (Fortune, searcher, Hoax · strangers; arrival a4-yeobos, 11/7).
   - afterRank (ranks 1-10): texts a day or two after each rank. They react to the scene, never to a choice in it, so every
     path reads right. Niki texts in his HOAX chat voice (lowercase, u / ur / rly / sumn, LMAOOO, -skull-, bruh, ts); Solar
     texts lowercase. Rank 9 carries variants by heading (S: the lobby moment; H: the chat). Replies name the link.
   - holidays: '12/23' The Emperor's Birthday (rank 4; the mall's Christmas lights with Ken and Koromaru, evening) and '1/2'
     (rank 6; fukubukuro lucky bags at the New Year sale, after school slot). Both carry flag year-goes-on; ♪ come from the
     choices' notes (finishHoliday). Speakers: niki, solar, ken, koromaru only.
   - routines (FEMC_GAME_DAILY_LIFE), every one gated events ['a4-yeobos'], windows 28-35 days, none past 2/26; the Nov-Dec ones are
     low: true (filler on the in-between days, core.js dailyLife), so they never crowd out the story routines:
       niki-signs        11/10-12/12 early, school days: Iwatodai Station, an old man asks him the way in his own accent.
       niki-featherman   11/22-12/20 after school, Niki rank 3+: the shrine walk with Ken and Koromaru; Ken explains
                         Featherman, Niki has opinions, Koromaru takes Niki's side (the Ken / Koromaru one).
       niki-lessons      12/26-1/28 evening, flag year-goes-on: the dorm lounge, Junpei paying for dance lessons in
                         yakisoba bread; out by eight; Mitsuru.
       niki-school-run   1/27-2/24 early, school days, flag year-goes-on: Niki at the dorm gate in the cold, walking Ken
                         to school whether Ken likes it or not; milk rolls; whistling.
   - run-ins (FEMC_GAME_RUNINS), never at Gekkoukan or a club, each ends { bond: { niki: 1 } }:
       ri-niki-sign      Game Panic (acts arcade / crane), 11/10-1/31: the counter guy's new sign, addressed to RKI.
       ri-niki-omikuji   Naganaki Shrine (any shrine activity), 11/10-1/31: drawing fortunes until he gets the great one.
   Canon guard: nothing here says what he does at home beyond "errands"; nothing about his hand, his parents, the houses, or
   Solar and Jungwon at home. Faces: niki happy, happy-2, neutral, sad, serious, surprised; ken happy neutral sad serious;
   koromaru happy neutral sad serious; junpei all six; mitsuru happy neutral sad serious surprised. */
(() => {
  const W = window;
  const X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const D = (X.niki ||= {});

  /* ── Texts after each rank ── */
  D.afterRank = { ...(D.afterRank || {}),
    1: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'junpei just walked past game panic and looked in the window' }, { from: 'niki', t: 'he saw the tables' }, { from: 'niki', t: 'he made a noise like a dog toy -skull-' }],
      reply: [{ t: 'u have to stop', link: 'niki', notes: 1, then: [{ from: 'niki', t: 'i will never stop. its my calling' }] },
        { t: 'did he go in', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'no he walked away rly fast like he saw a ghost' }, { from: 'niki', t: 'the ghost was me. LMAOOO' }] }] },
    2: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'mrs hayashi says ur too skinny and i have to bring u more mikan' }, { from: 'niki', t: 'she put 6 in my pocket. i ate 4 on the way home. dont tell her' }],
      reply: [{ t: 'tell her thank u', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'she said ur welcome and wear a hat' }, { from: 'niki', t: 'she says wear a hat to everyone. its her catchphrase' }] },
        { t: 'u ate my mikan', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'finders fee bruh' }] }] },
    3: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'ur kouhai texted me' }, { from: 'niki', t: 'wait he doesnt have a phone. junpei texted me FOR him' }, { from: 'niki', t: '"please return koromaru\'s ball. it went in your pocket." HES SO SERIOUS i cant' }],
      reply: [{ t: 'give the dog his ball', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'ok ok. ill bring it sunday. with interest. (a second ball)' }] },
        { t: 'hes not my kouhai hes urs', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'ur right. hes MINE. i called it' }] }] },
    4: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'junpei found the STP' }, { from: 'niki', t: 'he is texting me in all caps' }, { from: 'niki', t: 'i have never been happier in my life' }],
      reply: [{ t: 'thats so mean lol', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'its not mean its a GIFT. he got his racing record back. its just. named different' }] },
        { t: 'what does STP mean', link: 'niki', notes: 1, then: [{ from: 'niki', t: 'ask ur dorm' }, { from: 'niki', t: 'its a public utility' }] }] },
    5: { delay: 1, slot: 'late', msgs: [{ from: 'niki', t: 'ken can do the fence every time now' }, { from: 'niki', t: 'he still says he disapproves every time' }, { from: 'niki', t: 'i think he disapproves on purpose so he can keep doing it' }],
      reply: [{ t: 'thats so ken', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'thats SO ken' }] },
        { t: 'r u ok', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'im good. im rly good' }, { from: 'niki', t: 'go to sleep solar' }] }] },
    6: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'the bear is on the old phone' }, { from: 'niki', t: 'if it rings hes coming w me' }, { from: 'niki', t: 'it hasnt rung. hes very bored. hes lying down about it' }],
      reply: [{ t: 'name him', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'he has a name. its a secret. hes a private bear' }] },
        { t: 'good. let it not ring', link: 'niki', notes: 3, then: [{ from: 'niki', t: 'yeah' }, { from: 'niki', t: 'yeah ok' }] }] },
    7: { delay: 1, slot: 'late', msgs: [{ from: 'niki', t: 'i stopped whistling at the corner btw' }, { from: 'niki', t: 'u can stop worrying abt me. i can feel u worrying from the guesthouse' }],
      reply: [{ t: 'i wasnt worrying', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'u were. i can feel it. its a skill' }, { from: 'niki', t: 'night solar' }] },
        { t: 'goodnight niki', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'night. dont dream about fare charts' }, { from: 'niki', t: 'i will. its fine' }] }] },
    8: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'ken asked how many shirts i have' }, { from: 'niki', t: 'i said eleven' }, { from: 'niki', t: 'he asked which number is the best. hes taking it so seriously. he wants to make a chart' }],
      reply: [{ t: 'let him make the chart', link: 'niki', notes: 3, then: [{ from: 'niki', t: 'i already said yes. hes using a ruler' }] },
        { t: 'which one is the best', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'number 7. strawberry. dont tell ken i have a favorite he will make it a whole thing' }] }] },
    9: { delay: 1, slot: 'evening', msgs: [{ from: 'niki', t: 'the wifi is back to normal' }, { from: 'niki', t: 'for now' }],
      reply: [{ t: 'for now??', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'i have ideas. i have so many ideas' }] },
        { t: 'leave the wifi alone', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'heeseung said that too. in the same words. are u guys working together' }] }],
      variants: {
        S: { msgs: [{ from: 'niki', t: 'sorry abt the lobby thing' }, { from: 'niki', t: 'the hyung thing. its a bit. dont think abt it' }],
          reply: [{ t: 'i wont', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'ok good. ur rly good at not thinking abt stuff. compliment' }] },
            { t: 'its ok. riki', link: 'niki', notes: 3, then: [{ from: 'niki', t: '...' }, { from: 'niki', t: 'only jungwon calls me that' }, { from: 'niki', t: 'ok. u can too. once a week. max' }] }] },
        H: { msgs: [{ from: 'niki', t: 'jungwon sent me a SCREENSHOT of the wifi settings w instructions' }, { from: 'niki', t: 'numbered instructions' }, { from: 'niki', t: 'like a manual. -skull-' }],
          reply: [{ t: 'did u follow them', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'i followed them to rename it again' }] },
            { t: 'he loves u', link: 'niki', notes: 3, then: [{ from: 'niki', t: 'ew' }, { from: 'niki', t: '(yeah)' }] }] }
      } },
    10: { delay: 2, slot: 'evening', msgs: [{ from: 'niki', t: 'the table is still up' }, { from: 'niki', t: 'i checked' }, { from: 'niki', t: 'i check every day now. its my job. i gave myself a job' }],
      reply: [{ t: 'same thing', link: 'niki', notes: 3, then: [{ from: 'niki', t: 'SAME THING' }, { from: 'niki', t: 'ok im saving that one' }] },
        { t: 'proud of u', link: 'niki', notes: 2, then: [{ from: 'niki', t: 'ew' }, { from: 'niki', t: 'thank u' }] }] }
  };

  /* ── Holidays ── */
  D.holidays = { ...(D.holidays || {}),
    '12/23': { rank: 4, flag: 'year-goes-on', slot: 'evening', title: 'the lights', place: 'Paulownia Mall · Fountain', time: 'Evening', bg: 'paulownia-mall-night', music: 'tender',
      ask: "the mall turned the christmas lights on. ken says koromaru has never seen them. thats a crime. fountain at 6. bring ken (ken is bringing u)",
      yes: 'ok. 6. ill bring ken', ok: 'LETS GO. tell him to wear the hat with the ears', sorry: 'cant tonight, sorry', no: 'ok. ill send u 400 pics. ken will rate them out of 10',
      scene: [
        { n: "Somebody at Paulownia Mall had decided this year to do the lights properly, and they had: every tree along the fountain wound in white bulbs to the tips of its bare branches, a canopy of them strung across the walkway like a net full of small stars, and in the middle of the fountain, rising out of the cold water, a tree made entirely of light, turning slowly, so the whole plaza went gold and then silver and then gold again." },
        { n: "Ken was wearing the hat with the ears. He had not wanted to wear the hat with the ears. He stood at the fountain's edge in it with Koromaru's lead wrapped twice round his mittened hand and his face tipped up at the turning tree, and he had forgotten, entirely, that he was wearing anything at all." },
        { s: 'koromaru', f: 'happy', t: "Woof!" },
        { s: 'niki', f: 'happy-2', t: "SEE. He gets it. He's never seen it. Look at his face. Look at both their faces." },
        { n: "Niki had his phone up and was taking pictures of Ken looking at the lights, not of the lights, a whole burst of them, and Ken didn't notice that either." },
        { s: 'ken', f: 'neutral', t: "It's taller than last year. I think. My mother brought me once. When I was small. I don't remember it being this tall." },
        { n: "Niki didn't say anything. That was the thing Solar would remember afterwards: that he didn't say anything at all, for once, and didn't make a joke, and didn't look at Ken. He just crouched down beside him, all knees and puffer, and turned his back, and held his arms out behind him." },
        { s: 'niki', f: 'neutral', t: "Get on. You can't see the top from down there. You're too short. It's not your fault. It's a design flaw." },
        { s: 'ken', f: 'serious', t: "I'm too old to be carried." },
        { s: 'niki', f: 'neutral', t: "I'm not carrying you. I'm elevating you. It's different. Get on." },
        { choose: [
          { t: "(Hold Koromaru's lead so Ken can climb up.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "She took the lead. Ken looked at her, and at the back of Niki's puffer, and at the tree, and then climbed up with grim care, like a boy mounting a horse he didn't entirely trust, and Niki stood, and Ken went up into the light." },
            { n: "From up there he could see the star. He didn't say anything about it. His mittens were on top of Niki's head, holding on, and his mouth was a little open, and Koromaru sat at Solar's feet and looked up at the two of them with his whole tail going." }
          ] },
          { t: "Ken, it's okay. Nobody here knows you.", notes: 2, then: [
            { s: 'ken', f: 'serious', t: "Everyone at school comes to this mall." },
            { n: "But he climbed up anyway, and sat on Niki's shoulders with great dignity, and pulled the hat with the ears down further over his face, so that if anyone from school came he would simply be a hat." }
          ] },
          { t: "(Take a picture of the two of them.)", notes: 2, then: [
            { n: "Ken got on. She took the picture: a ten-year-old in a hat with ears on the shoulders of a boy in a taped silver puffer, both of them gold in the light of the turning tree, both of them looking up, neither of them knowing. It was, she thought, the best picture on her phone." }
          ] }
        ] },
        { n: "They walked the whole length of the lights like that, Ken up top, Koromaru weaving, Niki narrating the decorations for him in a voice like a tour guide, and at the far end, under the net of small stars, Ken said something to the top of Niki's head that Solar didn't catch, and Niki stopped walking." },
        { s: 'niki', f: 'neutral', t: "...Yeah. Okay. Me too." },
        { n: "She didn't ask what. Niki didn't tell her. He walked on, a little slower, with both hands round Ken's ankles, holding on." },
        { choose: [
          { t: "(Buy three hot chocolates.)", notes: 3, then: [
            { n: "Three cups from the stand, too hot to drink, and Ken drank his from up on Niki's shoulders, carefully, so as not to spill on anybody's hair, and Niki said if he spilled on his hair it would just match the orange, and Ken laughed. Out loud. Ken." }
          ] },
          { t: "Niki. Your arms must be tired.", notes: 2, then: [
            { s: 'niki', f: 'happy', t: "My arms are never tired. My arms are a lifestyle." },
            { n: "His arms were shaking. He didn't put Ken down until the very end of the lights, and then only because Ken asked." }
          ] }
        ] }
      ] },
    '1/2': { rank: 6, flag: 'year-goes-on', title: 'lucky bags', place: 'Paulownia Mall · Central Atrium', time: 'Daytime', music: 'joy',
      ask: "FUKUBUKURO. the mall is selling LUCK in BAGS. u cant see whats inside. its gambling but legal. come. 10am. im already here",
      yes: 'omw. dont buy all of them', ok: 'too late. jk. hurry', sorry: 'cant today, sorry', no: 'ok. if i get sumn good im not sharing. (i will share)',
      scene: [
        { n: "The second of January, and the atrium of Paulownia Mall was a riot. Every shop had put its fukubukuro out front, sealed paper bags stacked in pyramids, red and gold and white, with a price on the front and absolutely nothing else, and people were queuing for them with the grim joy of a crowd at a horse race, and in the middle of it, with four bags already hooked over one arm, was Niki." },
        { s: 'niki', f: 'happy-2', t: "This is the best country. They sell luck. In bags. You just pick one and it's either good or it's not and you don't know until it's too late. That's the best feeling there is." },
        { s: 'solar', f: 'neutral', t: "How are you picking?" },
        { s: 'niki', f: 'serious', t: "By feel." },
        { n: "He demonstrated. He walked along a pyramid of bags outside the sports shop with one hand out, not touching, palm down, like a man dowsing for water, and stopped, and frowned, and moved one bag to the left, and took the one behind it." },
        { s: 'niki', f: 'neutral', t: "That one. That one's lucky. I can tell." },
        { choose: [
          { t: "(Pick one by feel too.)", notes: 3, then: [
            { n: "She held her hand out over the bags the way he had, feeling ridiculous, and stopped where her hand felt like stopping, and took that one. Niki watched her do it with the face of a teacher whose student had finally gotten the joke." },
            { s: 'niki', f: 'happy', t: "Yes. Good. Don't think. Thinking ruins it. Thinking's for people who want to be right. We want to be lucky." }
          ] },
          { t: "(Pick the heaviest one. Logic.)", notes: 2, then: [
            { s: 'niki', f: 'sad', t: "Logic. In MY luck market. On the second of January. Jungwon's rubbing off on you." },
            { n: "He let her buy it anyway, and carried it for her, holding it at arm's length like it might be contagious." }
          ] },
          { t: "Pick one for me.", notes: 3, then: [
            { n: "He took this extremely seriously. He walked the whole atrium twice. He came back, eventually, with a small white bag from the stationery shop, and held it out to her in both hands, and wouldn't say why that one." },
            { s: 'niki', f: 'neutral', t: "It felt like you. Don't ask me. I don't make the rules. Well. I made that one." }
          ] }
        ] },
        { n: "They opened them on the edge of the fountain, all of them, in a heap. Niki's four bags turned out to contain, between them, eleven pairs of sports socks, a towel with a cat on it, a key chain shaped like a dumpling, a ball cap that didn't fit anyone, a sweatband, and one very good pair of running shoes, his size, exactly, as though somebody had measured him in his sleep." },
        { s: 'niki', f: 'surprised', t: "...Solar. SOLAR. My size. My EXACT size." },
        { s: 'niki', f: 'happy-2', t: "I was right. The bag was lucky. I told you. I said it was lucky. You heard me say it." },
        { choose: [
          { t: "You were lucky.", notes: 2, then: [
            { s: 'niki', f: 'happy', t: "Lucky is just right but faster. Look it up." },
            { n: "He put the shoes on right there on the fountain's edge, over a pair of the new socks, and stood up, and bounced on his toes, and then went over the low rail round the fountain without warning, to test them, and came back over it, and was grinning so hard he couldn't speak." }
          ] },
          { t: "(Give him your sweatband too.)", notes: 3, then: [
            { n: "There was a sweatband in hers as well. She put it on his wrist, over the puffer's cuff. He looked at it. Then he gave her the dumpling key chain, solemnly, as if they had concluded a trade between nations, and they each kept their half." }
          ] }
        ] },
        { n: "He wore the new shoes home and carried the old ones in a fukubukuro bag, and on the way to the station he told her that in one of his lives nobody ever bought him shoes, he just ran in whatever, and in the other the team bought them, and these were the first pair that had just, he said, happened. Like luck. Like they'd been waiting in a bag for him to walk past." }
      ] }
  };

  /* ── Routines (daily-life format) ── */
  (W.FEMC_GAME_DAILY_LIFE ||= []).push(
    // The arrival-aware one: the youngest, who can't read the signs where he lives, reading every sign at Iwatodai Station.
    { id: 'niki-signs', low: true, after: '11/10', until: '12/12', slot: 'early', schoolOnly: true, events: ['a4-yeobos'],
      place: 'Iwatodai Station', time: 'Early Morning', bg: 'iwatodai-station', scene: [
        { n: "Seven forty at Iwatodai Station, the morning rush flowing through the ticket gates in a long gray river of coats and school blazers, and on the bench by the timetable boards, eating a banana, with his headphones round his neck and no train to catch and nowhere at all to be, sat Niki, reading the timetables aloud to himself under his breath for the pleasure of it." },
        { s: 'niki', f: 'happy', t: "Solar. Morning. Did you know there's a train at eight-oh-four that goes somewhere called Tatsumi? I don't know what's in Tatsumi. I just like that I can read it." },
        { n: "An old man in a cloth cap had stopped in front of the boards, peering up at them with his glasses pushed onto his forehead, then down, then up again, a paper in his hand with an address on it. Niki stood up, and went over, and asked him something, and the old man answered, and then the old man's whole face changed." },
        { n: "It was the accent. She could hear it from the bench, the soft western lilt of it, a grandmother's accent from a long way off, and the old man was laughing and patting Niki's arm and telling him, at length, about his own mother's village somewhere out that way, while the morning rush flowed round them both like a stream round a rock." },
        { choose: [
          { t: "(Help the old man find his platform.)", stat: { kindness: 1 }, then: [
            { n: "She came over and found the platform on the board for them while Niki listened to the story about the village, and the old man thanked them both, and bowed, and went, and Niki stood there afterwards with his hands in his pockets and a look on his face like he'd been handed something warm." },
            { s: 'niki', f: 'neutral', t: "He said I talk like his mom. That's the second time this week. Everybody's mom here talks like my grandma." }
          ] },
          { t: "Where did you learn to talk like that?", stat: { charm: 1 }, then: [
            { s: 'niki', f: 'neutral', t: "My grandma. She's from— she talks like that. I don't talk like that on purpose. It just comes out when old people look at me." },
            { s: 'niki', f: 'happy', t: "It's like a cheat code. Old people give you stuff. Look. He gave me a candy. I didn't even do anything." }
          ] },
          { t: "(Go. You'll be late.)", then: [
            { n: "She went through the gates. At the top of the stairs she looked back, and Niki and the old man were still at the board, the old man pointing at something, Niki nodding, and the old man had his hand on Niki's sleeve, on the square of silver tape, as if it were the most natural place in the world to put it." }
          ] }
        ] },
        { bond: { niki: 1 } }
      ] },

    // Ken and Koromaru: Featherman, opinions, and whose side the dog is on.
    { id: 'niki-featherman', low: true, after: '11/22', until: '12/20', slot: 'after', events: ['a4-yeobos'], ranks: { niki: 3 },
      place: 'Naganaki Shrine', time: 'After School', bg: 'outside-shrine-day', scene: [
        { n: "Koromaru's afternoon walk had grown a member. Ken held the lead, as always, and walked as always in a straight line exactly down the middle of the shrine path, and beside him, not in a straight line at all, went Niki, who had asked Ken one question about Featherman ten minutes ago and was now receiving the answer." },
        { s: 'ken', f: 'serious', t: "So Featherman Blue isn't the leader. People think he's the leader because he's the strongest. But the leader is Red. Because Red decides." },
        { s: 'niki', f: 'neutral', t: "Okay but who would win in a fight. Red or Blue." },
        { s: 'ken', f: 'serious', t: "They wouldn't fight. They're a team." },
        { s: 'niki', f: 'neutral', t: "But IF." },
        { s: 'ken', f: 'serious', t: "There is no if. That's the point of a team." },
        { n: "Niki looked at Solar over Ken's head with an expression of pure joy, the face of a boy who has found an argument he can have every single day for the rest of his life, and Koromaru, between them, looked up at Niki and wagged." },
        { choose: [
          { t: "Who's your favorite, Niki?", stat: { charm: 1 }, then: [
            { s: 'niki', f: 'happy', t: "The yellow one. Because nobody likes the yellow one. Somebody has to." },
            { s: 'ken', f: 'neutral', t: "...Featherman Yellow is actually very underrated." },
            { n: "And then they were on the same side, abruptly, the two of them, and Ken talked about Yellow for the whole length of the path, and Niki agreed with every word, and Solar walked behind them with the dog and didn't say anything, because there was nothing to add to that." }
          ] },
          { t: "Ken's right. Teams don't fight.", stat: { kindness: 1 }, then: [
            { s: 'ken', f: 'happy', t: "Thank you, Solar-san." },
            { s: 'niki', f: 'sad', t: "Everyone's always on his side. Koromaru. Koromaru, buddy. Whose side are you on." },
            { n: "Koromaru, consulted, crossed the path, and sat down on Niki's foot. Ken looked at his dog with the expression of a man betrayed by his own government." }
          ] },
          { t: "(Let them argue. Walk the dog.)", then: [
            { n: "She took the lead from Ken, who didn't notice, and walked Koromaru the rest of the way while the two of them argued behind her about whether a giant robot counted as a member of the team, and Koromaru trotted beside her with his ears up, listening, as if he had a position on it too." }
          ] }
        ] },
        { bond: { niki: 1 } }
      ] },

    // Junpei pays for dance lessons in yakisoba bread; out by eight.
    { id: 'niki-lessons', after: '12/26', until: '1/28', slot: 'evening', flags: ['year-goes-on'], events: ['a4-yeobos'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "The lounge furniture had been pushed back against the walls. In the cleared space, on squares of printer paper taped to the floor, somebody had drawn arrows in marker, up, down, left, right, in a grid, and on the arrows, sweating, in his socks, was Junpei." },
        { n: "On the sofa, with his feet up and a yakisoba bread in each hand, sat Niki, coaching." },
        { s: 'niki', f: 'neutral', t: "Left. LEFT. Your other left. Junpei-san. You've had that left your whole life." },
        { s: 'junpei', f: 'serious', t: "It's a lot of lefts, man!" },
        { s: 'niki', f: 'happy', t: "He's paying me in bread. One bread a lesson. This is my second bread. He's not getting better. I'm getting full." },
        { n: "Mitsuru came down the stairs, and stopped on the bottom step, and looked at the paper arrows taped to the lounge floor, and at Junpei on them, and at Niki on the sofa, and at the clock, which said seven fifty-one." },
        { s: 'mitsuru', f: 'neutral', t: "Nishimura. It's nine minutes to eight." },
        { s: 'niki', f: 'happy', t: "I know, Kirijo-san. I'm leaving at seven fifty-nine. It's like a whole thing. Ken's timing me." },
        { choose: [
          { t: "(Get on the arrows with Junpei.)", stat: { courage: 1 }, then: [
            { n: "She got on the arrows. She was exactly as bad as Junpei. Possibly worse. Niki stood up on the sofa and conducted the two of them with a yakisoba bread like a baton, shouting directions, and Mitsuru, on the bottom step, put one hand over her mouth and turned away, and Solar would never be certain whether it was in disgust." }
          ] },
          { t: "Junpei, you're actually getting better.", stat: { kindness: 1 }, then: [
            { s: 'junpei', f: 'happy', t: "You hear that? You HEAR that, RKI? Leader says I'm getting better!" },
            { s: 'niki', f: 'neutral', t: "Leader is being nice. Leader is nice to everybody. It doesn't count." },
            { n: "But he got off the sofa and showed Junpei the left again, slowly, standing behind him and steering him by both shoulders like a boy with a shopping trolley, and Junpei got it, once, and screamed." }
          ] },
          { t: "(Pull the tape up before Mitsuru does.)", stat: { proficiency: 1 }, then: [
            { n: "She knelt and started peeling up the arrows. Mitsuru watched her do it for a moment and then, without a word, knelt on the other side of the grid and started peeling from that end, and they met in the middle, and Mitsuru handed her the last arrow, a left, and said, quite seriously, that it was the one he needed most." }
          ] }
        ] },
        { n: "At seven fifty-nine exactly, Niki put on his shoes at the door, and saluted the room, and was gone at a run. Ken, from the stairs, where he had been sitting the whole time, noted the time in a small notebook." },
        { bond: { niki: 1 } }
      ] },

    // February, the cold: walking Ken to school, whether Ken likes it or not.
    { id: 'niki-school-run', after: '1/27', until: '2/24', slot: 'early', schoolOnly: true, flags: ['year-goes-on'], events: ['a4-yeobos'],
      place: 'Iwatodai Dorm · Front', time: 'Early Morning', bg: 'iwotodaidorm-outside', scene: [
        { n: "Seven twenty, February, the cold so hard and bright the air seemed to ring, frost on the dorm's front step and on the railings and on the bicycle seats down the street, and at the gate, whistling, with a paper bag of milk rolls in one hand and his breath going up in clouds, was Niki." },
        { s: 'niki', f: 'happy', t: "Morning. I'm not here for you. I'm here for him." },
        { n: "Ken came out of the door behind her with his school bag on both shoulders and his scarf to his nose, and saw Niki at the gate, and stopped, and closed his eyes briefly, like a man counting to ten." },
        { s: 'ken', f: 'serious', t: "I've walked to school by myself since April." },
        { s: 'niki', f: 'neutral', t: "And now you don't have to. That's called progress." },
        { s: 'ken', f: 'serious', t: "It's four hundred meters." },
        { s: 'niki', f: 'neutral', t: "Four hundred meters is a long way when you're short." },
        { n: "He gave Ken a milk roll. Ken took it, because it would have been rude not to, and ate it walking, and Niki walked beside him on the outside of the pavement, between Ken and the road, the whole four hundred meters, every morning that week, and never once mentioned that that was where he was walking." },
        { choose: [
          { t: "(Walk with them to the corner.)", stat: { kindness: 1 }, then: [
            { n: "She walked with them as far as the corner where her road and Ken's split. Niki whistled the whole way, the tune she almost knew. Ken, after a while, without seeming to decide to, started humming it too, a beat behind, and neither of them noticed, and she didn't tell them." }
          ] },
          { t: "Ken, let him. He's cold. It's good for him to walk.", stat: { charm: 1 }, then: [
            { s: 'ken', f: 'neutral', t: "...That's true. He does whistle a lot. Mitsuru-san says whistling is a sign of low body temperature." },
            { s: 'niki', f: 'happy', t: "See? Medical. I'm doing this for my health." }
          ] },
          { t: "(Steal a milk roll.)", then: [
            { n: "She took one out of the bag in passing. Niki didn't even turn round. He just said *that's the wrong one, by the way*, and Ken said *they're all the same*, and Niki said *that's what makes them wrong*, and they were still arguing about it when they turned the corner." }
          ] }
        ] },
        { bond: { niki: 1 } }
      ] }
  );

  /* ── Run-ins (living-runins.js format) ── */
  (W.FEMC_GAME_RUNINS ||= []).push(
    { id: 'ri-niki-sign', who: 'niki', where: { acts: ['arcade', 'crane'] }, after: '11/10', until: '1/31', events: ['a4-yeobos'], scene: [
      { n: "On her way out of Game Panic she noticed the sign. It was new, handwritten in thick marker on the back of a flattened snack box, and taped to the side of the drum game at eye level, where nobody could miss it, and the guy at the counter was watching her read it with the hollow eyes of a man who had written it at two in the morning." },
      { n: "*To the customer RKI. Please do not sit on the cabinets. Please do not rename all the tables. Please let the children win sometimes. Thank you for your continued patronage.*" },
      { s: 'niki', f: 'surprised', t: "I DO let the children win sometimes." },
      { n: "He'd come up behind her with a can in each hand. He read the sign again, slowly, the whole thing, his lips moving, and his face went from outrage to something very like pride, and then, horribly, to delight." },
      { s: 'niki', f: 'happy-2', t: "Solar. He made a sign. For me. Personally. Addressed to me. Nobody's ever made me a sign." },
      { choose: [
        { t: "(Help him write a reply on the back.)", stat: { charm: 1 }, then: [
          { n: "They wrote it on the back of the snack box together, in her careful hand and then his terrible one. *Dear counter guy. Noted. RKI.* And under it, in hers, *(he will not stop)*. The counter guy read it, and put his face down on the counter, gently, and left it there." }
        ] },
        { t: "You should probably get off the cabinets.", stat: { kindness: 1 }, then: [
          { s: 'niki', f: 'neutral', t: "...I'll get off the cabinets." },
          { s: 'niki', f: 'happy', t: "I'm keeping the tables. A man has to have something." },
          { n: "He went over to the counter and gave the guy the second can, and the guy looked at it like it might be a trap, and then, slowly, took it." }
        ] },
        { t: "(Take a picture of the sign.)", then: [
          { n: "She took a picture of it. Niki made her send it to him immediately, and then stood next to it and made her take another one, with him pointing at it, beaming, like a tourist at a monument." }
        ] }
      ] },
      { bond: { niki: 1 } }
    ] },
    { id: 'ri-niki-omikuji', who: 'niki', where: { areas: ['shrine'] }, after: '11/10', until: '1/31', events: ['a4-yeobos'], scene: [
      { n: "On her way back down through the shrine grounds she heard the rattle of the omikuji box, the little hexagonal tin you shook until a numbered stick fell out, and then heard it again, and again, and again, and followed the sound round the corner of the hall." },
      { n: "Niki was at the fortune stall. In front of him on the counter was a small, growing heap of paper fortunes, unfolded, read, discarded. Behind the counter, the smallest and fiercest of the old women who swept the shrine steps had her arms folded and the face of a woman whose patience was being drawn in lots like everything else." },
      { s: 'niki', f: 'neutral', t: "Small blessing. Small blessing. Blessing. Future blessing. Small blessing." },
      { s: 'niki', f: 'serious', t: "I want the big one. The great one. Daikichi. I'm not leaving till I get it." },
      { n: "The old woman told him, in a voice that carried across the grounds, that that was not how fortunes worked, that you took the one the gods gave you and tied it on the tree if it was bad and thanked them if it was good, and that the gods did not appreciate being shaken like a vending machine." },
      { s: 'niki', f: 'happy', t: "She says the gods don't like being shaken. I say the gods should've given me the good one first." },
      { choose: [
        { t: "(Draw one yourself.)", stat: { courage: 1 }, then: [
          { n: "She paid her hundred yen and shook the box once, and the stick fell out, and the old woman gave her the paper, and it was the great blessing. First try. Niki stared at it, and at her, and at his heap of small blessings, and put his forehead down on the stall counter, very slowly, like a man lying down in the road." },
          { s: 'niki', f: 'sad', t: "...Unbelievable. You're the luckiest person I know. You don't even WANT it." }
        ] },
        { t: "Tie the bad ones on the tree, Niki.", stat: { kindness: 1 }, then: [
          { n: "He sighed like a boy sent to tidy his room, and gathered up the heap, and went to the rack of strings by the tree, and tied every one of them on, neatly, each in its own knot, while the old woman watched with her arms folded and then, without a word, came out from behind the stall and helped him with the high ones." }
        ] },
        { t: "(Pay for one more. Just one.)", stat: { charm: 1 }, then: [
          { n: "She put a hundred yen on the counter. He looked at her, and shook the box, slowly, with great ceremony, his eyes shut. A stick fell out. The old woman read the number and found the paper and handed it to him, and he unfolded it, and read it, and then turned it round so Solar could see." },
          { n: "*Blessing. What you wait for will come. Do not run toward it.*" },
          { s: 'niki', f: 'neutral', t: "Rude. That's so rude. That's the rudest blessing I've ever gotten." },
          { n: "He folded it in three, neatly, like a letter, and didn't tie it on the tree, and put it in the puffer's pocket instead." }
        ] }
      ] },
      { bond: { niki: 1 } }
    ] }
  );
})();
