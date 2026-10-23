/* The living world for three visitors (2026-10-21, Kat's playtest note: deepen Mercy, Kiriko and Sebastian).
   FEMC_GAME_LINK_EXTRAS[link]: afterRank texts (core.js deliverTexts), holidays (core.js holidayInvites) and lateNights
   (core.js lateNightDue), merged into links/mercy.js, kiriko.js and sebastian.js by core.js indexLinks.
   - afterRank texts react to the rank scene, never to one choice in it, so every path reads right. None after rank 1:
     Mitsuru hands the visitors their folding phones between ranks 1 and 2 (their rank 2 scenes).
   - Visitors text in their own voices: Mercy in full sentences, Kiriko in lowercase with a fox, Sebastian in lowercase
     with no punctuation. Solar texts like herself (lowercase, "u").
   - Holidays: Mercy 7/20 (Marine Day) and 9/21 (Respect for the Aged Day), Kiriko 9/23 (the equinox) and 12/31 (the
     temple bell), Sebastian 10/12 (Sports Day) and 1/11 (Coming of Age Day). Friendship only; no route is read or set.
   - Late nights: none of them lives in the dorm (FEMC_GAME_LODGING), so each is a visit to the dorm's front step or a
     call. Mercy's 3 a.m. call needs the flag mercy-three-am (her rank 9, "the person I'd call at three in the morning").
   Visitors go home through the doors on 3/6 (1/30 until the year ran to March); nothing here plays past 3/5. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, field, v) => {
    const o = (X[id] ||= {});
    o[field] = Array.isArray(v) ? [...(o[field] || []), ...v] : { ...(o[field] || {}), ...v };
  };
  const M = t => ({ from: 'mercy', t }), K = t => ({ from: 'kiriko', t }), S = t => ({ from: 'sebastian', t });

  /* ── Mercy ── */
  add('mercy', 'afterRank', {
    2: { slot: 'evening', msgs: [M('This is Angela. Kirijo says this telephone sends messages. I am testing it on you.'), M('Thursday. Same roof. Same coffee. I lied about the coffee being better.')],
      reply: [{ t: 'it works!! see u thursday', link: 'mercy', notes: 2, then: [M('Wunderbar. It works. I will now use it to nag.')] },
        { t: 'u can just call it bad coffee', link: 'mercy', notes: 1, then: [M('I could. I am being diplomatic. It is a war crime.')] }] },
    3: { slot: 'late', msgs: [M('I counted your knots again before I threw the orange away. Four. Square. Even.'), M('Go to sleep. That is not a request.')],
      reply: [{ t: 'ok doctor', link: 'mercy', notes: 2, then: [M('Thank you. Finally, a compliant patient.')] },
        { t: 'cant sleep. my hands keep doing it', link: 'mercy', notes: 3, then: [M('Then let them. Hands remember for us sometimes.'), M('Put them under the pillow. Mine used to do that in medical school. It helps. A little.')] }] },
    5: { slot: 'late', delay: 1, msgs: [M('He is asleep in the chair in the treatment room. Sitting up. Like a lamp somebody switched off.'), M('I put a blanket on him. Do not tell him.'), M('Thank you for the light, Solar.')],
      reply: [{ t: 'anytime. i mean it', link: 'mercy', notes: 3, then: [M('I know you do. That is what worries me.'), M('Sleep. Doctor\'s orders. Hers and mine.')] },
        { t: 'did u sleep too', link: 'mercy', notes: 2, then: [M('...'), M('I am going to. Now. Because you asked.')] }] },
    7: { slot: 'evening', msgs: [M('Aphrodite has sent me eleven photographs of you with your hair down.'), M('I have saved all eleven. I do not know how to delete things on this telephone, but I would not anyway.')],
      reply: [{ t: 'ELEVEN??', link: 'mercy', notes: 2, then: [M('She says there are more. She says she is "curating."')] },
        { t: 'send me the best one', link: 'mercy', notes: 3, then: [M('They are all the best one. That is the trouble with little sisters.')] }] },
    9: { slot: 'evening', delay: 2, msgs: [M('I told Genji. He said he knew. He did not know. He was very pleased with himself anyway.'), M('You were first. I want that written down somewhere.')],
      reply: [{ t: 'its written down', link: 'mercy', notes: 3, then: [M('Good. In ink. I will check.')] },
        { t: 'hes going to be insufferable', link: 'mercy', notes: 2, then: [M('He has been insufferable since the day I met him. I have adapted.')] }] }
  });

  add('mercy', 'holidays', {
    '7/20': { rank: 2, title: 'marine day', place: 'Port Island · Seaside Park', time: 'Daytime', bg: 'port-island-seaside-park', music: 'sun',
      ask: 'The night nurse has taken my pager and told me not to come back until tomorrow. She says it is a holiday. What does one do on a holiday?', yes: 'u go to the sea. im coming', ok: 'Very well. The sea. Seaside park, eleven. I will bring sunscreen and you will wear it.', sorry: 'cant today, im sorry!!', no: 'Then I will sit very still on a bench and see if that is a holiday.',
      scene: [
        { n: "Marine Day, and the seaside park on Port Island was full of people who had been told by the calendar to go and look at the water and were doing it with great seriousness, families on picnic sheets and old men with fishing rods and a whole elementary school class in matching yellow hats being herded along the railing by a teacher with a whistle." },
        { n: "Angela was on a bench at the end of the promenade, not in her white coat for once, in a pale blue blouse with the sleeves still rolled to the elbow out of habit, and she was sitting the way people sit in waiting rooms, upright, bag on her knees, ready to be called." },
        { s: 'mercy', f: 'happy', t: "There you are. Sit. Hold out your arms. No, both of them. You burn. I can tell by looking. You have the skin of someone who lives indoors and lies about it." },
        { n: "She did Solar's arms, then her face, then the back of her neck, with the same calm thoroughness she gave a dressing, and Solar sat there being sunscreened by a field surgeon in a public park and let it happen, because there was no version of saying no that would have worked." },
        { s: 'mercy', f: 'neutral', t: "I haven't had a day off since, hm. I don't know. Before Zürich. Before the war. I'm not sure I know how they go." },
        { choose: [
          { t: "(Teach her to do nothing. Lie back on the bench and look at the sky.)", notes: 3, then: [
            { n: "Solar leaned back against the bench and tipped her face up and shut her eyes, and after a long, deeply suspicious minute, she heard Angela do the same, the bench creaking, a breath going out of her that sounded like it had been in there since spring." },
            { s: 'mercy', f: 'neutral', t: "...This is very difficult." },
            { s: 'solar', f: 'happy', t: "You're doing great." },
            { s: 'mercy', f: 'happy', t: "Don't patronize me. I'm a surgeon. I'll get the hang of it." }
          ] },
          { t: "You buy ice cream. That's the first step.", notes: 2, then: [
            { n: "They bought two soft-serves from the cart by the fountain, vanilla and green tea, and Angela held hers like a sample she'd been handed to carry to the lab until it started running down her wrist and she had to actually eat it, fast, laughing, catching the drips with her tongue like a little girl." }
          ] },
          { t: "(Walk to the edge of the water with her.)", notes: 2, then: [
            { n: "They walked down the slipway to where the bay came up gray-green and slapped at the concrete, and Angela stood at the very edge with her sandals almost in it and looked out at the container ships going nowhere very slowly, the way you look at something you can't do anything about and, for once, don't have to." }
          ] }
        ] },
        { n: "Later she held her hand up against the sun, fingers spread, and turned it this way and that, studying it, and Solar knew exactly what she was checking for because she'd watched Kirijo's paper explain it, and because she'd seen the floor through Angela's hands once, in June, at the end of a shift." },
        { s: 'mercy', f: 'neutral', t: "When I first came through I could see the lino through my fingers by evening. Now look. Nothing. Not a bit of sea comes through." },
        { s: 'mercy', f: 'neutral', t: "I'm told that is because somebody keeps turning up. I'm a scientist, so I don't believe it. But I've stopped checking every hour, which for me is the same as believing it." },
        { ifRank: { mercy: 3 }, then: [
          { s: 'mercy', f: 'happy', t: "Your hands, now. Give them here. No, I'm not checking if they're solid. I'm checking for orange." }
        ] },
        { n: "They stayed until the yellow-hat class had been herded back onto its bus and the light went long and gold across the water, and when Solar walked her to the monorail Angela said she'd had a very nice day off, in the tone of a person reporting a successful procedure, and then, at the gate, as an afterthought, that she might try another one. In a year or two. If it was medically indicated." }
      ] },

    '9/21': { rank: 4, title: 'respect for the aged day', place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Daytime', bg: 'hospital-room', music: 'tender',
      ask: 'The hospital is giving every patient over seventy a sweet and a card today. They have left the third floor off the list. I am fixing that. I would like help. Bring your steady hands.', yes: 'on my way', ok: 'Thank you. Third floor. I have commandeered a trolley.', sorry: 'i cant today, im sorry', no: 'I understand. I will do every bed myself. Slowly. It is fine.',
      scene: [
        { n: "Respect for the Aged Day, and the whole of Tatsumi Memorial smelled faintly of red bean, because somebody in administration had ordered three hundred manju in little paper boxes, red and white, one for every patient over seventy, with a card from the mayor's office in a plastic sleeve." },
        { n: "The third floor wasn't on the list. Angela had found that out at eight in the morning and had spent the next two hours being extremely polite at a man in a tie until he'd given her a trolley and a box of forty just to make her stop." },
        { n: "There were more beds on the ward than there had been in June. Solar didn't count them, and then did. Eleven." },
        { s: 'mercy', f: 'serious', t: "They said these patients won't know. That it's a waste of the sweets. As if that's what the day is for." },
        { s: 'mercy', f: 'neutral', t: "We give one to every bed. We say their name. We say thank you. Whether they know or not is their business." },
        { n: "So they went bed to bed, the trolley squeaking, Angela reading each name off the chart at the foot of the bed in her careful accented Japanese and Solar putting a little red-and-white box on the table by each chair, beside each pair of still hands, beside each face turned to the window." },
        { choose: [
          { t: "(Read the mayor's card out loud at every bed. All of it.)", notes: 3, stat: { kindness: 1 }, then: [
            { n: "The card was four sentences long and said the city was grateful for their many years of service to the community, and Solar read it eleven times, all the way through, at every bed, in the voice she'd use for a person who could hear her, and by the sixth bed two nurses had stopped what they were doing to listen, and by the eleventh one of them was crying a little and pretending she had something in her eye." }
          ] },
          { t: "(Put the sweet in their hands, not on the table.)", notes: 3, then: [
            { n: "She opened each box and put the manju into each pair of hands, carefully, closing the fingers around it so it wouldn't fall, and every pair of hands let her, and held it, not holding it exactly, just not letting it drop, the way the girl with the clips held her rabbit." },
            { s: 'mercy', f: 'surprised', t: "...Ja. That's better. That's much better than the table." }
          ] },
          { t: "(Sit with the old man at bed five until his wife comes at two.)", notes: 2, then: [
            { n: "She sat in the visitor's chair at bed five with his card on her knee until two o'clock exactly, when a small woman in a gray cardigan came in with a carrier bag, and stopped, and looked at the red-and-white box in her husband's lap, and then at Solar, and bowed so low that Solar had to stand up and bow back, and neither of them said anything at all." }
          ] }
        ] },
        { n: "At the nurses' station afterward Angela took a pen and wrote something in the margin of her own notebook, small, a date, under a column of other dates, and Solar read it upside down without meaning to. Every one of them was the day after a full moon." },
        { s: 'mercy', f: 'neutral', t: "The ward fills after every full moon. Two, three beds. I've started writing the dates down. I don't know what it means yet." },
        { s: 'mercy', f: 'neutral', t: "...I suspect you do. I'm not asking. Today is not a day for asking. Eat a manju. There were forty and there are eleven beds. That's a lot of manju." }
      ] }
  });

  add('mercy', 'lateNights', [
    { id: 'mercy-ln-ribs', kind: 'call', rank: 8, after: '9/25', until: '3/5', when: 'tartarus', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', music: 'night', scene: [
      { n: "Solar had been back from Tartarus for twenty minutes and was lying on top of the covers in her clothes, too tired to take them off, when the phone went on the desk. Not a text. A call. The screen said ANGELA, in the capitals Solar had typed it in, and it was eleven-thirty at night." },
      { phone: [{ from: 'mercy', t: 'Ribs.' }] },
      { n: "That was all she said when Solar picked up. Not hello. Ribs. In the voice of a woman with a clipboard." },
      { s: 'mercy', f: 'serious', t: "You were in the hour tonight. Fuuka told Mitsuru, Mitsuru told no one, and Genji was on the roof of the hospital and saw the tower go up green. I am a doctor. I can count. Ribs. Press each one for me. Left side first. Tell me which one makes you say a word you shouldn't." },
      { choose: [
        { t: "(Do it properly. One rib at a time.)", notes: 3, then: [
          { n: "She lay on her back on the bed in the dark and pressed along her own ribs with two fingers, one at a time, left side then right, saying each one out loud, and on the right side the seventh one said something, sharp and hot, and she said a word in English she didn't know she knew." },
          { s: 'mercy', f: 'neutral', t: "Mm. Seventh. Bruised, not broken, or you would have said a worse word. Ice. Twenty minutes. And you sleep on your left. I'll look at it on Thursday whether you like it or not." }
        ] },
        { t: "I'm fine. Nothing's broken.", notes: 1, then: [
          { s: 'mercy', f: 'neutral', t: "Every soldier I ever knew said that. Some of them were right. Press them anyway, Liebling. Humor me." },
          { n: "She pressed them. The seventh on the right said something. Angela heard it in her breathing before Solar had decided whether to mention it, and said ice, and said twenty minutes, and said Thursday." }
        ] },
        { t: "Are you checking everyone, or just me?", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Everyone. Akihiko first. He lies the most. Then Junpei, who tells me everything hurts, which is also a kind of lying." },
          { s: 'mercy', f: 'neutral', t: "You're last. I save the good patients for last. Now press them." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "You in the hour. Me in the morning. That was the deal. I'm only moving the morning a little earlier." },
      { n: "She stayed on the line while Solar went down to the kitchen for ice, and talked the whole time, about nothing, about a patient on the fourth floor who'd started knitting a second scarf and wouldn't say who it was for, and Solar lay back down with a bag of frozen edamame against her side and listened to her voice instead of the ache, which, she was fairly sure, was the point." }
    ] },
    { id: 'mercy-ln-three', kind: 'call', rank: 9, flag: 'mercy-three-am', after: '10/21', until: '3/5', when: 'quiet', place: "Iwatodai Dorm · Solar's Room", time: 'Night · 11:40 PM', music: 'tender', scene: [
      { n: "It wasn't three in the morning. It was twenty to midnight, and the dorm had gone quiet around her floor by floor, and Solar was lying in the dark with her phone on her chest, awake for no reason she could name, the kind of awake that has nothing to do with being tired." },
      { n: "She'd said it on the roof. The person I'd call at three in the morning. She hadn't actually thought she'd do it." },
      { n: "Angela picked up on the first ring. In the background, a monitor beeped, steady, and a trolley wheel squeaked, and somebody laughed down a corridor, softly, the way people laugh in hospitals at night." },
      { s: 'mercy', f: 'neutral', t: "It isn't three." },
      { s: 'solar', f: 'neutral', t: "It's three somewhere." },
      { s: 'mercy', f: 'happy', t: "That's an excellent answer and medically meaningless. I accept it. What's wrong?" },
      { choose: [
        { t: "Nothing. I just couldn't sleep.", notes: 2, then: [
          { s: 'mercy', f: 'neutral', t: "That's not nothing. That's the most common complaint in this building. Stay on the line. I'm doing charts. You can listen to me do charts. It's very boring. Patients find it soothing." },
          { n: "She did charts. Solar listened to the pen, and the monitor, and Angela murmuring numbers to herself in German, and somewhere around the fourth chart her eyes closed by themselves." }
        ] },
        { t: "I keep thinking about March.", notes: 3, then: [
          { n: "There was a pause. The pen stopped. Solar heard her put it down." },
          { s: 'mercy', f: 'neutral', t: "So do I. Every night, about now. I'm glad it isn't only me." },
          { s: 'mercy', f: 'neutral', t: "Here is what I know, as a doctor. You can't do anything about March at midnight in October. You can only sleep, so that you're there for it with your eyes open. That's all. That's the whole prescription." }
        ] },
        { t: "Tell me about your day.", notes: 2, then: [
          { s: 'mercy', f: 'happy', t: "Oh, you'll regret that." },
          { n: "She told her about her day. All of it, in order, from the six o'clock coffee to the man in bed six who'd asked her to marry him and then asked again an hour later because he'd forgotten, and she'd said yes both times, because it made him so happy, and Solar laughed into her pillow so the walls wouldn't hear." }
        ] }
      ] },
      { s: 'mercy', f: 'neutral', t: "Call me again. At three, or at twenty to twelve, or whenever it is somewhere. I meant it. I'm always awake. That part I can't fix." },
      { n: "When the call ended the room was the same room, dark, the streetlight through the curtain, and Solar was the same, and something in her chest had gone down a notch, like a fever breaking, quietly, without asking her first." }
    ] }
  ]);

  /* ── Kiriko ── */
  add('kiriko', 'afterRank', {
    2: { slot: 'evening', msgs: [K('hi'), K('its kiriko'), K('that took me 6 min. i want that on record 🦊')],
      reply: [{ t: 'proud of u', link: 'kiriko', notes: 2, then: [K('THANK U. the 5 key and i are enemies now')] },
        { t: 'hi kiriko 🦊', link: 'kiriko', notes: 3, then: [K('u can do the fox??'), K('how. HOW. teach me tomorrow')] }] },
    3: { slot: 'early', msgs: [K('how r ur legs'), K('day 2 after swift step is the worst. dont take the stairs. take the stairs slowly')],
      reply: [{ t: 'i live on the 3rd floor kiriko', link: 'kiriko', notes: 2, then: [K('oh no'), K('ok go down backwards. trust me')] },
        { t: 'worth it', link: 'kiriko', notes: 3, then: [K('RIGHT??'), K('ur a natural. i said so on the roof')] }] },
    5: { slot: 'evening', msgs: [K('update: dr ziegler put my fortune on her wall'), K('she says its "not medically relevant." she left it up 🦊')],
      reply: [{ t: 'told u yall would be friends', link: 'kiriko', notes: 3, then: [K('we are NOT'), K('ok we are a little. dont tell her')] },
        { t: 'which fortune', link: 'kiriko', notes: 2, then: [K('two lights in one room. she read it out loud like a diagnosis')] }] },
    6: { slot: 'late', msgs: [K('dai-kichi ate his first dinner'), K('the boss came by on his walk and watched the bowl for 20 min. no blinking')],
      reply: [{ t: 'the boss is a good boy', link: 'kiriko', notes: 2, then: [K('the BEST boy. he did not eat the fish. growth')] },
        { t: 'i had a really good night', link: 'kiriko', notes: 3, then: [K('me too'), K('like. the best one. in any world. 🦊')] }] },
    8: { slot: 'evening', msgs: [K('she still has it'), K('the fortune. she tucked it in her glove. didnt even read it first. just TUCKED it'), K('im going to be sick again')],
      reply: [{ t: 'she likes u', link: 'kiriko', notes: 2, then: [K('she does NOT'), K('...she might. gross')] },
        { t: 'opposites cover blind spots', link: 'kiriko', notes: 3, then: [K('dont quote the gods at me sol-chan'), K('ok it was a good one')] }] },
    9: { slot: 'late', delay: 1, msgs: [K('ribs hurt'), K('the grumpy fox has a crack in his bib now. i fixed it'), K('worth it. all of it 🦊')],
      reply: [{ t: 'ice. 20 min. thats from angela', link: 'kiriko', notes: 2, then: [K('ugh. ok. ICE')] },
        { t: 'best friend', link: 'kiriko', notes: 3, then: [K('best friend.'), K('in every world. its final. the gods have been informed')] }] }
  });

  add('kiriko', 'holidays', {
    '9/23': { rank: 5, title: 'the equinox', place: 'Naganaki Shrine', time: 'Daytime', bg: 'outside-shrine-day', music: 'tender',
      ask: 'its the equinox!! ohigan. u visit graves today. come help me i made too many ohagi', yes: 'coming. save me one', ok: 'yay 🦊 bottom of the steps. the little temple. bring ur sweeping arm', sorry: 'cant today, sorry kiriko', no: 'ok 😔 ill eat ur ohagi. respectfully',
      scene: [
        { n: "There was a temple at the bottom of the shrine hill that Solar had walked past a hundred times without seeing, a low wooden hall and a graveyard behind it, rows of gray stones going up the slope in steps, and on the equinox the whole graveyard was busy, families with buckets and ladles and bundles of flowers, scrubbing the stones, pouring water over them, lighting incense that went up in thin blue threads into the cool September air." },
        { n: "Kiriko was at the back, in the oldest row, where the stones were green with moss and leaning, and nobody was. She had a bucket and a brush and a lacquered box of ohagi, sticky rice under sweet red bean, and she'd done four of the graves already, and her sleeves were wet to the elbow." },
        { s: 'kiriko', f: 'happy', t: "Sol-chan! Grab the ladle. These ones nobody's visited in like forever. Look at this one. Moss in the letters. That's a crime." },
        { s: 'kiriko', f: 'neutral', t: "Ohigan. You're supposed to visit your family. Clean the stones. Bring sweets. Tell them what you've been up to so they don't worry." },
        { s: 'kiriko', f: 'neutral', t: "Mine are all in Kanezaka. So I'm doing these. Somebody's somebody. It counts. I decided it counts." },
        { choose: [
          { t: "(Take the brush and scrub the moss out of the letters.)", notes: 3, then: [
            { n: "Solar knelt on the wet gravel and worked the stiff brush into the carved letters one stroke at a time until the name came up clean and dark out of the green, a family name and two given names and a year from long before either of them was born, and Kiriko poured the ladle over it, slowly, the water running down into the letters and filling them like ink." },
            { s: 'kiriko', f: 'happy', t: "There. Now they can read their own name. That's the whole point. Everybody should get to read their own name." }
          ] },
          { t: "Who's doing yours? Back home?", notes: 2, then: [
            { s: 'kiriko', f: 'neutral', t: "Mom. Mom does everything. That's kind of the problem." },
            { s: 'kiriko', f: 'sad', t: "There's a row behind our shrine for the people who looked after it before us. Old teachers. Grandma's grandma. I always did the far end. Mom always did the near end. This year she's doing both ends." },
            { n: "She put the ladle down in the bucket and didn't pick it up again for a moment, and Solar watched her shoulders decide something, and then she picked it up and went on to the next stone." }
          ] },
          { t: "(Leave an ohagi on every stone in the row.)", notes: 2, then: [
            { n: "There were nine stones in the oldest row and Solar left an ohagi on a square of paper on each one, and Kiriko watched her do it with her mouth very slightly open, and then said that was too many ohagi, and then said it wasn't, actually, and then went and got the last two out of the box and put them on the two stones Solar had missed in the row behind." }
          ] }
        ] },
        { n: "When they were done the oldest row was the cleanest in the graveyard, every stone dark and wet and shining, and the incense Kiriko had lit stood up in the still air in nine straight lines." },
        { s: 'kiriko', f: 'neutral', t: "Okay. You're supposed to tell them what you've been up to. I'll go first." },
        { n: "She put her hands together in front of the nearest stone and closed her eyes, and told it, out loud, that she'd been sweeping somebody else's shrine all summer, and that she'd made a friend who stood in front of the sun for her, and that she was doing okay, mostly, and that she'd be home soon, probably, and that she was sorry about the far end of the row this year." },
        { s: 'kiriko', f: 'happy', t: "Your turn. They don't mind who you are. They're very relaxed." },
        { n: "Solar put her hands together. She opened her mouth to say what she'd been up to, and found that she couldn't start it, because she didn't know where it started, and she stood there in the incense with her hands together for a long time saying nothing, and Kiriko didn't hurry her, and then she said, quietly, to a stranger's grave, that she was here, and that people kept being kind to her, and that she didn't know what she'd done to deserve it. It was the truest thing she'd said out loud in a month." },
        { s: 'kiriko', f: 'neutral', t: "Fortune. Equinox edition. Kichi. \"Those who tend the forgotten are never forgotten.\"" },
        { s: 'kiriko', f: 'flustered', t: "...Okay, I didn't even shake the box that time. It just fell out. The gods are being so obvious lately." }
      ] },

    '12/31': { rank: 9, slot: 'evening', flag: 'year-goes-on', title: "the bell", place: 'Naganaki Shrine · Night', time: "New Year's Eve", bg: 'naganaki-shrine-night', music: 'tender',
      ask: 'sol-chan. the little temple lets anyone ring the big bell tonight. from 8. the priest is old and wants to be in bed before the year turns', yes: 'ill be there', ok: 'ok. ok ok ok. 8. bottom of the hill. dont be late or ill lose my nerve', sorry: 'i cant tonight. im so sorry', no: 'ok. ill ring it for both of us. ill try',
      scene: [
        { n: "In the old year's last cold hours the little temple at the bottom of the shrine hill had a line out of the gate, people in coats and scarves stamping their feet, breath going up white under the paper lanterns, waiting their turn at the bell." },
        { n: "It hung in a wooden tower open on four sides, a great bronze bell as big as a car, dark with age, and a log on two ropes hung beside it, and every so often somebody took the ropes and swung the log back and let it go, and the note came out of the bell so low and long that Solar felt it in her teeth and her knees and the soles of her feet, and the line went quiet every time, and stayed quiet until it was gone." },
        { s: 'kiriko', f: 'neutral', t: "A hundred and eight. One for every bad thing you're carrying. The priest says you ring it and it goes. I don't know if that's true. Grandma says it's true. Grandma says a lot of things." },
        { n: "Kiriko was quiet in the line, which she never was. She had her hands in her sleeves and her eyes on the bell, and she kept swallowing, and when it was their turn, she walked up the three steps into the tower and took the ropes in both hands and stood there." },
        { n: "She didn't swing it. She stood there with the ropes in her fists and the bell over her head, and Solar knew exactly where she was. A top step in another town. A rope in her hand. A whole street waiting." },
        { choose: [
          { t: "(Put your hands on the ropes beside hers.)", notes: 3, then: [
            { n: "Solar went up the steps and put her hands on the ropes, just below Kiriko's, not pulling, just there, and Kiriko looked down at their four hands on the rope and let out a breath that shook on the way out." },
            { s: 'kiriko', f: 'neutral', t: "...Okay. Okay. On three. Don't pull. I'll pull. You just. Be there." },
            { n: "She pulled. The log swung back, and came forward, and the bell spoke, so low and so long that the whole line behind them went silent, and the sound went out over the graveyard and up the hill and over the dark roofs of the town, and Kiriko stood there with her hands still on the rope and her eyes shut until the very last of it was gone." }
          ] },
          { t: "(Stand at the back of the tower, the way her mom would.)", notes: 3, then: [
            { n: "Solar stayed at the back. She stood at the foot of the steps where Kiriko could see her if she turned around, and didn't say anything, and didn't come any closer, and after a long moment Kiriko looked over her shoulder at her, and saw her there, at the back, standing, and turned around again, and swung the log." },
            { n: "The bell spoke. The line went silent. Kiriko didn't let go of the rope until the note was completely gone, and when she came down the steps her face was wet, and she was grinning, and she walked straight into Solar and stayed there." }
          ] },
          { t: "Count for her. \"One.\"", notes: 2, then: [
            { n: "Solar said it out loud. One. Like the start of something. Kiriko laughed, a short shocked laugh, and swung the log, and the bell spoke, and while it was still going she said, two, under her breath, and Solar realized she was counting the next one already." }
          ] }
        ] },
        { ifFlag: 'kiriko-next-one', then: [
          { s: 'kiriko', f: 'neutral', t: "The next one. Not the last one. You said that. At the festival. I've been saying it to myself every morning since. Like a fortune." }
        ], else: [
          { s: 'kiriko', f: 'neutral', t: "I didn't ring it at home. I've told you that. I've never rung anything that big. I thought my arms wouldn't go." }
        ] },
        { s: 'kiriko', f: 'happy', t: "It went. It actually went. That's one bad thing gone. I picked the one about being the last one. A hundred and seven to go. Somebody else can do those." },
        { n: "They walked back up the hill to the shrine in the cold with the bell still going behind them, every minute or so, someone else's bad thing going out over the town, and at the top Kiriko drew a fortune by lantern light, with her eyes shut, the last one of the year." },
        { s: 'kiriko', f: 'neutral', t: "Dai-kichi. \"The year ends. You do not.\"" },
        { s: 'kiriko', f: 'flustered', t: "...Don't look at me like that. I didn't write it. I swear on the foxes." }
      ] }
  });

  add('kiriko', 'lateNights', [
    { id: 'kiriko-ln-count', kind: 'visit', rank: 6, after: '8/16', until: '9/30', when: 'quiet', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { n: "Something tapped on Solar's window at half past eleven. A pebble. Then another one. She went to the glass and looked down, and Kiriko was standing in the street in front of the dorm in her jacket with a third pebble in her hand and her arm already back." },
      { phone: [{ from: 'kiriko', t: 'come down' }, { from: 'kiriko', t: 'not an emergency. a counting emergency' }] },
      { n: "Solar went down in her socks. Kiriko was sitting on the dorm's front step with a stack of fortune slips in her lap, the blank backs covered in names in pencil, her small round handwriting going all the way to the edges." },
      { s: 'kiriko', f: 'neutral', t: "I counted. Like I said. Everybody I've met. Then I couldn't sleep, so I ran the roofs and checked their windows. Angela's light's on, obviously. Goth boy's light's on, obviously. Every light I know." },
      { s: 'kiriko', f: 'sad', t: "Then I got to yours and it was off and I got scared. Which is dumb. Because off means asleep. Off means home." },
      { choose: [
        { t: "I'm home. Look. Here I am.", notes: 3, then: [
          { s: 'kiriko', f: 'neutral', t: "...Yeah. Here you are." },
          { n: "She took a pencil from behind her ear and found Solar's name on the top slip and put a small neat tick beside it, the way you'd mark a register, and looked at the tick for a while like it had cost her something to make." }
        ] },
        { t: "(Sit down on the step and look through the list with her.)", notes: 2, then: [
          { n: "Solar sat down beside her and they went through it in the light from the dorm's front door, slip by slip, every name, every tick, and Kiriko told her where each one lived and which window was theirs, and Solar realized, somewhere around the second slip, that Kiriko had memorized the whole city by its lights." }
        ] },
        { t: "You can't run the roofs every night, Kiriko.", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "I can, though. I did it every night at home. It's the one thing I know how to do." },
          { s: 'kiriko', f: 'neutral', t: "...Okay. Not every night. Most nights. Some nights. I'll negotiate." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "At the bottom there's one I don't have a name for. The porter girl. From the first night. I put her down as \"sorry,\" because that's what she said. I never see her light. I don't know which window's hers." },
      { n: "Solar looked at the word at the bottom of the last slip, sorry, in pencil, with no tick beside it, and something cold went down her neck that she didn't have a reason for, and she let it go, because it was late, and because Kiriko was yawning." },
      { s: 'kiriko', f: 'happy', t: "Okay. Everybody's home. I can sleep now. Night, Sol-chan. Lock the door. I'll know if you don't. The fox will tell me." }
    ] },
    { id: 'kiriko-ln-call', kind: 'call', rank: 9, after: '11/8', until: '3/5', when: 'quiet', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', music: 'tender', scene: [
      { n: "The phone rang at eleven. Rang. Solar stared at it. Kiriko had never once called her. Kiriko conducted her entire life through four-minute texts and pebbles." },
      { s: 'kiriko', f: 'surprised', t: "Sol-chan. Sol-chan. Phones are for CALLING. You push the green button and it's just a person. In your ear. Why did nobody tell me this. I've been typing like an animal for five months." },
      { s: 'solar', f: 'surprised', t: "...You didn't know you could call?" },
      { s: 'kiriko', f: 'flustered', t: "I knew. Technically. I thought it was for emergencies. Like, Mitsuru-emergencies. Genji-nii called me to ask if I'd eaten and it changed my life." },
      { n: "She was outside. Solar could hear wind, and the creak of something wooden, and crows complaining far off about being woken, and Kiriko's breath going in and out like she'd just landed." },
      { s: 'kiriko', f: 'neutral', t: "I'm on the shrine roof. The office one. You can see your dorm from here if you squint. Which window's yours? Turn your light on." },
      { choose: [
        { t: "(Turn the light on and off three times.)", notes: 3, then: [
          { n: "Solar got up and flicked the switch, on, off, on, off, on, off, and stood in the dark again with the phone to her ear, and across the whole width of the town she heard Kiriko gasp like a child at fireworks." },
          { s: 'kiriko', f: 'happy', t: "THERE. There you are. Third floor. I knew it. I knew it was that one. Okay. I'm going to look at it every night now. Don't move rooms." }
        ] },
        { t: "Tell me what you can see from up there.", notes: 2, then: [
          { s: 'kiriko', f: 'neutral', t: "Everything. The bridge. The monorail going to sleep. The hospital, top floor's lit, that's Angela. The arcade sign. Your dorm. Every light I counted." },
          { s: 'kiriko', f: 'neutral', t: "...It looks like Kanezaka from up here. Not the buildings. The lights. A town with everybody home." }
        ] },
        { t: "Go to bed, Kiriko.", notes: 1, then: [
          { s: 'kiriko', f: 'serious', t: "I'm IN bed. Spiritually. The roof is a bed if you're brave." }
        ] }
      ] },
      { s: 'kiriko', f: 'neutral', t: "Okay. That's all I wanted. To hear it be you. Night, Sol-chan. I'm going to call you all the time now. You've unleashed something." },
      { n: "It was a while before Solar fell asleep. She lay facing the window, and somewhere out there on a dark roof, she was nearly certain, someone was looking straight back at it." }
    ] }
  ]);

  /* ── Sebastian ── */
  add('sebastian', 'afterRank', {
    2: { slot: 'late', msgs: [S('this is sebastian'), S('testing the phone'), S('the frog is fine i assume. i went to the canal. didnt see him. thats a good sign probably')],
      reply: [{ t: 'hes thriving. i can feel it', link: 'sebastian', notes: 3, then: [S('yeah'), S('yeah me too')] },
        { t: 'u went back to check on a frog', link: 'sebastian', notes: 2, then: [S('obviously')] }] },
    3: { slot: 'evening', msgs: [S('abby says hi'), S('sam says hi'), S('junpei says hes still a goblin and he wants a hat')],
      reply: [{ t: 'tell everyone hi. junpei gets a hat', link: 'sebastian', notes: 2, then: [S('ok. hat approved. hes going to be insufferable')] },
        { t: 'when is the next session', link: 'sebastian', notes: 3, then: [S('writing it'), S('dont rush me. the lich has a cardigan now. its complicated')] }] },
    4: { slot: 'late', delay: 1, msgs: [S('thanks for the walk'), S('i dont usually say that stuff'), S('to anybody')],
      reply: [{ t: 'anytime. im a good walker', link: 'sebastian', notes: 3, then: [S('you are actually'), S('you dont talk at the wrong parts')] },
        { t: 'ur secret is safe w me', link: 'sebastian', notes: 2, then: [S('i know. thats why i said it')] }] },
    6: { slot: 'evening', msgs: [S('bikes fine. the old guy at the shop says hi'), S('you lean the right way on corners. hardly anybody does that')],
      reply: [{ t: 'u drive like a grandpa', link: 'sebastian', notes: 2, then: [S('i drive like a guy who rebuilt the brakes himself')] },
        { t: 'take me again sometime', link: 'sebastian', notes: 3, then: [S('ok'), S('the end of the road is still there. it isnt going anywhere')] }] },
    8: { slot: 'late', msgs: [S('abby wants to know if you saw my face'), S('at the pier'), S('tell her no')],
      reply: [{ t: 'i did not see ur face', link: 'sebastian', notes: 3, then: [S('thanks'), S('liar')] },
        { t: 'i saw everything', link: 'sebastian', notes: 2, then: [S('great'), S('cool. moving to a cave')] }] },
    9: { slot: 'evening', delay: 2, msgs: [S('told my mom in my head like 40 times today'), S('getting better at it'), S('version 40 had no swearing')],
      reply: [{ t: 'version 41 will be perfect', link: 'sebastian', notes: 3, then: [S('version 41 has a frog in it. for confidence')] },
        { t: 'practice on me', link: 'sebastian', notes: 2, then: [S('"mom im moving to the city in spring. not leaving. moving"'), S('...ok that one felt ok')] }] }
  });

  add('sebastian', 'holidays', {
    '10/12': { rank: 5, title: 'sports day', place: 'Iwatodai · Riverside', time: 'Daytime', bg: 'park-2', music: 'joy',
      ask: 'abby signed the flat up for the neighborhood relay. without asking. i have to run. in public. come witness my death', yes: 'i would never miss ur death', ok: 'riverside. 1pm. bring nothing. bring a stretcher', sorry: 'cant today, sorry!!', no: 'cool. ill die alone. like a frog in winter',
      scene: [
        { n: "Sports Day, and the riverside park had been given over to the neighborhood association, which meant a chalk track on the grass, a tent with a folding table full of barley tea, a man with a megaphone who was enjoying it far too much, and four teams of very serious old people, small children, and one Kirijo-owned flat full of people from another world." },
        { n: "Abigail had painted a banner. It said PELICAN TOWN in purple letters and had a drawing of a sword on it. Sam had borrowed a whistle from somewhere and was blowing it at nothing. Sebastian was standing behind the barley tea tent in his hoodie, in the shade, with the hood up, in October, looking at the chalk track like it had threatened his family." },
        { s: 'sebastian', f: 'neutral', t: "Last leg. She put me on last leg. The leg where everyone's watching. She said it's because I have long legs. It's because she's evil." },
        { s: 'abigail', f: 'happy', t: "It's because you have long legs and I'm evil. Both. Hi, Solar! Tell him he's going to be great." },
        { choose: [
          { t: "(Run the last stretch beside him, on the outside of the track.)", notes: 3, stat: { courage: 1 }, then: [
            { n: "When the baton came round to him he took it like it was hot and ran, all elbows and knees, hood flying back off his head for the first time all day, and Solar ran beside him on the grass outside the chalk, not racing, just there, and she heard him laugh, once, out of breath and completely surprised at himself, three strides from the line." },
            { n: "They came fourth. There were four teams. Abigail screamed like they'd won, and so did Sam, and so did a very old man from the team that had won, who apparently just liked screaming." }
          ] },
          { t: "(Cheer for him louder than anyone. Louder than Sam.)", notes: 2, then: [
            { n: "Solar yelled his name across the riverside so loudly that a heron took off from the shallows, and kept yelling it, all the way down the last straight, and Sebastian ran the entire leg with his face scarlet and his eyes fixed straight ahead on the line, not looking at her, very much because of her." }
          ] },
          { t: "(Hold his hoodie for him so he can actually run.)", notes: 2, then: [
            { n: "He gave it up like a man surrendering a weapon. Underneath he was in a gray T-shirt with a faded band logo, thin arms, and he looked about five years younger and deeply exposed, and he ran faster than any of them expected, possibly to get it back sooner." }
          ] }
        ] },
        { n: "Afterwards Abigail got a sticker that said PARTICIPANT and put it on Sebastian's forehead, and he let her, and wore it for the rest of the afternoon, all the way through the barley tea and the tug-of-war he refused to join and the walk back along the river." },
        { s: 'sebastian', f: 'neutral', t: "In Pelican Town there's the Flower Dance every spring. Everybody dances in the meadow. I always stand at the edge and say I don't dance." },
        { s: 'sebastian', f: 'happy', t: "...I ran a relay. In front of people. With a sticker on my head. I think something's broken in me. In a good way. Maybe." },
        { s: 'abigail', f: 'happy', t: "He's going to dance this spring. I've decided. Solar's my witness." }
      ] },

    '1/11': { rank: 9, flag: 'year-goes-on', title: 'coming of age day', place: 'Paulownia Mall · Game Panic', time: 'Daytime', bg: 'gameparade-outside', music: 'tender',
      ask: 'theres a bunch of people in suits and fancy kimonos walking past the arcade. abby says its a holiday about becoming an adult. come watch with me i dont get it', yes: 'coming. its a good one', ok: 'awning. ill save you the dry side', sorry: 'cant today, im sorry', no: 'ok. ill figure out adulthood alone. under an awning. as usual',
      scene: [
        { n: "It was the second Monday of January and Paulownia Mall was full of twenty-year-olds. Girls in furisode, long swinging sleeves in red and cream and peacock blue, white fur stoles around their necks, hair pinned up in flowers, walking in careful little steps in their zori on the cold pavement. Boys in dark suits or striped hakama, standing in clumps, taking photographs of each other in front of the fountain, all of them looking slightly stunned, as if someone had told them that morning that they were grown now and they hadn't decided whether to believe it." },
        { n: "Sebastian was under the Game Panic awning, watching them go past, with his hands in his front pocket. It wasn't raining. He was under it anyway." },
        { s: 'sebastian', f: 'neutral', t: "Abby explained it. You turn twenty and the city throws you a ceremony. Somebody gives a speech. Your parents cry. Then you go drinking. Then you're an adult. Officially." },
        { s: 'sebastian', f: 'neutral', t: "We don't have anything like that. In Pelican Town you're a kid until you move out, and if you don't move out you just. Stay a kid. In the basement. Forever." },
        { choose: [
          { t: "Then you can have one. Right now. I'll give the speech.", notes: 3, then: [
            { s: 'sebastian', f: 'surprised', t: "...You're going to give me a speech." },
            { n: "Solar stood in front of him under the awning and gave a speech. It was four sentences long. It said that he had rebuilt a motorcycle from rust and finished a text adventure and run a relay in public and told his mom he was moving, in his head, forty-one times, and that the city of Iwatodai therefore recognized him as an adult, effective immediately. A girl in a red furisode going past stopped to listen to the end of it and clapped." },
            { s: 'sebastian', f: 'flustered', t: "...That was the worst speech I've ever heard. Thank you. I'm going to remember it forever. I hate that." }
          ] },
          { t: "Do you feel like a kid?", notes: 2, then: [
            { s: 'sebastian', f: 'neutral', t: "In the basement, yeah. Here, no. Here I'm the guy who runs the game. And fixes the bike. And stands at the front sometimes." },
            { s: 'sebastian', f: 'neutral', t: "Which is weird. Because nothing about me changed. Except where I was standing." }
          ] },
          { t: "(Watch them go past with him and don't say anything.)", notes: 2, then: [
            { n: "They watched. A boy in hakama was being photographed by his grandmother, who kept telling him to stand straighter, and every time he did she started crying again, and he kept standing straighter anyway. Sebastian watched that one for a long time." }
          ] }
        ] },
        { ifRank: { sebastian: 10 }, then: [
          { n: "He took the die out of his pocket, the dark green one, no, he'd given that one away, it was a different one, blue, and rolled it on the ticket machine without looking at it, the way some people touch wood." }
        ] },
        { n: "Abigail came round the corner of the fountain a while later in a borrowed furisode, purple, of course, with a stole and her hair up in two crooked flowers Hyein had pinned in that morning, walking very carefully in zori she clearly hated, and stopped in front of the awning, and spread her arms." },
        { s: 'abigail', f: 'happy', t: "I'm not twenty in this world, technically. Nobody checked. I look amazing. Seb. Say I look amazing." },
        { s: 'sebastian', f: 'happy', t: "...You look like an adult." },
        { s: 'abigail', f: 'surprised', t: "That's the nicest thing you've ever said to me. That's horrible. I love it. Take a picture." },
        { n: "He took a picture with the folding phone, badly, her head half out of the frame, and she made him take another, and then she pulled Solar into the third one, and the picture they ended up keeping was the fourth, all three of them under the arcade awning on a dry day for no reason at all, blurred, because Sam had run up behind them at the last second and jumped." }
      ] }
  });

  add('sebastian', 'lateNights', [
    { id: 'seb-ln-rain', kind: 'visit', rank: 3, after: '7/12', until: '11/30', when: 'rain', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { phone: [{ from: 'sebastian', t: 'arcade closed at 11' }, { from: 'sebastian', t: 'its still raining' }, { from: 'sebastian', t: 'im outside your dorm. you dont have to come down. i just didnt want to go home yet' }] },
      { n: "He was on the dorm's front step under the little concrete overhang that kept off about half the rain, sitting with his back against the door frame and his knees up and his hood up, watching the street run with water under the streetlight like it was a fire he'd lit." },
      { s: 'sebastian', f: 'neutral', t: "...Hey. Sorry. I know it's late. The awning's the only place I think properly and they pulled the shutter down on it." },
      { choose: [
        { t: "(Sit down on the step next to him and watch the rain.)", notes: 3, then: [
          { n: "She sat. The step was cold through her pajama pants and the rain came down a foot in front of their shoes in a bright gray curtain, and neither of them said anything for twenty minutes, and it was, Solar thought, possibly the best conversation she'd had all week." }
        ] },
        { t: "Want me to sneak you in? There's tea.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "No. Your boss with the red hair would know. She'd know from her bed. I believe that about her." },
          { s: 'sebastian', f: 'neutral', t: "Out here's fine. Out here's the best part." }
        ] },
        { t: "Is something wrong?", notes: 2, then: [
          { s: 'sebastian', f: 'sad', t: "No. That's the weird part. Nothing's wrong. I just didn't want to be by myself with nothing being wrong. It feels like I'm not doing it right." }
        ] }
      ] },
      { s: 'sebastian', f: 'neutral', t: "At home I'd be in the basement right now with the window open, listening to it on the lawn. You can hear the rain better underground. Everything sounds like it's happening to somebody else." },
      { s: 'sebastian', f: 'happy', t: "Here you're just in it. On a step. It's worse. I kind of like it more." },
      { n: "At midnight minus ten he stood up and pulled his hood further down and stepped out into the rain without an umbrella, the way he always did, and turned around at the gate and lifted one hand, flat, the same wave as off the motorcycle, and went, and Solar sat on the step a while longer by herself, listening to it happen to her." }
    ] },
    { id: 'seb-ln-call', kind: 'call', rank: 7, after: '9/13', until: '3/5', when: 'quiet', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', music: 'dorm', scene: [
      { n: "He called at eleven-fifteen and didn't say hello. He said, in a flat narrator's voice, the old-radio one he used for the lich, \"You are standing in a dormitory. It is late. There is a phone at your ear. What do you do?\"" },
      { s: 'solar', f: 'neutral', t: "...Is this the game?" },
      { s: 'sebastian', f: 'neutral', t: "New room. I wrote it tonight. I can't test it on Junpei's laptop, it's at the dorm. So you're the laptop. Say what you'd type." },
      { ifFlag: 'seb-dragon-friend', then: [
        { s: 'sebastian', f: 'neutral', t: "\"A dragon is asleep across the foot of your bed. It is your friend. It snores. It has been alone in a cave a long time and now it isn't.\" ...That's for you. That's not part of the room. Okay, it's part of the room." }
      ] },
      { ifFlag: 'seb-dragon-slain', then: [
        { s: 'sebastian', f: 'neutral', t: "\"On the wall of your room there is a dragon's tooth. You took it in one hit. On your first session. People are still talking about it.\" Sam is still talking about it. Every day." }
      ] },
      { choose: [
        { t: "LOOK OUT WINDOW.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "\"Outside, it is not raining. This is suspicious. Across the town, in a basement that isn't a basement, a boy is sitting up writing a game for you, very badly, with one hand, while he holds the phone with the other.\"" },
          { s: 'sebastian', f: 'flustered', t: "...I didn't write that one down. That one just came out. Forget it." }
        ] },
        { t: "GO TO SLEEP.", notes: 2, then: [
          { s: 'sebastian', f: 'neutral', t: "\"You try to sleep. A voice in the phone keeps talking. You cannot sleep. You suspect the voice.\" ...Fair. That's fair. Ten more minutes." }
        ] },
        { t: "TALK TO THE NARRATOR.", notes: 3, then: [
          { s: 'sebastian', f: 'neutral', t: "\"The narrator does not like being talked to.\"" },
          { s: 'sebastian', f: 'sad', t: "\"...The narrator says thank you for being the laptop. The narrator has never once had someone to test things on who didn't laugh at the wrong part.\"" }
        ] }
      ] },
      { n: "They played until nearly midnight, Solar lying on her back in the dark typing out loud and Sebastian narrating her into rooms he'd made up that evening, a lighthouse, a train with no driver that he cut short and wouldn't explain, a kitchen where a man with a beanie made soup and grumbled at you to stir it, and when he hung up she didn't put the phone down for a long time, as if the game might still be on the line." }
    ] }
  ]);
})();
