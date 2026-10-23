/* Chenle, living world (2026-10-22). Everything here joins the link in links/chenle.js; formats are the other living files'.
   - afterRank (FEMC_GAME_LINK_EXTRAS.chenle.afterRank; core.js deliverTexts): texts a day or so after ranks 1, 2, 3, 4, 5, 6,
     8, 9 and 10. Each reacts to the scene as every path plays it, never to a choice in it. His texting voice: lowercase,
     terse, exact numbers, "you" spelled out; Solar's replies are hers (lowercase, "u", little punctuation).
   - holidays (core.js holidayInvites): '12/23' the Emperor's Birthday, a day off (Game Panic's 2v2 tournament, rank 3) and
     '1/3' the New Year sales (the electronics shop's lucky bags by Port Island Station, rank 6). Both are after the
     solstice, so both need the flag year-goes-on.
   - routines (FEMC_GAME_DAILY_LIFE; core.js dailyLife / dailyFits), every one gated on his arrival 'a4-twelve':
       chenle-early   11/18–12/20, early, school days. The arrival-aware one: he's always early; he's at the dorm's dining
                      table before anyone, with Fuuka and Koromaru; the VISITORS whiteboard (Mitsuru's) gets a correction.
       chenle-minji   11/21–12/20, after school. Minji films the trains at Iwatodai platform; her tank calls the second.
       chenle-steps   11/20–12/20, evening, also needs a4-household-introductions. Haechan and Chenle on the dorm steps:
                      food, cold air, one number, no words; never said what for.
       chenle-girls   1/4–2/6, evening, flag year-goes-on. Hanni and Hyein in the dorm lounge; Hyein likes the way he talks.
   - run-ins (FEMC_GAME_RUNINS; core.js runInDue), both who: 'chenle', events ['a4-twelve'], never at Gekkoukan or a club:
       ri-chenle-vending    the station vending machines (act 'vending'), 11/19–1/15. Five cans for a team of five.
       ri-chenle-bathhouse  the bathhouse (acts 'bathhouse', 'electricbath'), evening, 12/1–2/20. Jaemin brought him.
   Faces: Chenle (and Jaemin) use only neutral / happy / sad / serious / surprised / flustered until their portraits exist.
   Nothing here states Haechan's substance use, decodes a book truth or reports news from home the book hasn't printed. */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const C = (X.chenle ||= {});
  const L = t => ({ from: 'chenle', t });

  C.afterRank = { ...(C.afterRank || {}),
    1: { slot: 'evening', delay: 1, msgs: [L('you left at 5:52'), L('back row is open thursday'), L("you don't have to come")],
      reply: [
        { t: 'u wrote down when i left??', link: 'chenle', notes: 2, then: [L('i write down everything'), L("it's not personal"), L("it's a little personal")] },
        { t: 'ill be there', link: 'chenle', notes: 3, then: [L('ok'), L("i'm not writing that down. i'll just know it")] }
      ] },
    2: { slot: 'late', msgs: [L('jaemin did 14 songs'), L('i counted from my room. the walls here are about 4cm of nothing')],
      reply: [
        { t: 'were any of them good', link: 'chenle', notes: 2, then: [L('1'), L('the one where he forgot the words and stopped trying. it was better')] },
        { t: 'u ok?', link: 'chenle', notes: 3, then: [L('yes'), L('3:11 is still the number. i just wanted to say it to somebody again'), L('goodnight')] }
      ] },
    3: { slot: 'evening', msgs: [L('minji says the footage is good'), L("she won't show me"), L("she says i'll count the frames. she's right")],
      reply: [
        { t: 'show me when she shows u', link: 'chenle', notes: 2, then: [L("she won't show me. that's the whole sentence")] },
        { t: 'she really doesnt sleep huh', link: 'chenle', notes: 3, then: [L('3:04 last night'), L("i didn't say anything to her"), L('you could. she listens to you')] }
      ] },
    4: { slot: 'evening', delay: 1, msgs: [L('your brother texted me'), L('"Thank you for looking out for her."'), L('capital t. period'), L("i've read it 9 times. i don't know what to do with it")],
      reply: [
        { t: 'say ur welcome', link: 'chenle', notes: 2, then: [L('i said "ok."'), L('also with a period'), L("i think we're even now. i hope we're even now")] },
        { t: 'lol hes like that', link: 'chenle', notes: 3, then: [L("he's like that to you"), L("to me he's like a final exam that's pleased with me"), L("it's so much worse")] }
      ] },
    5: { slot: 'late', msgs: [L("knee's fine"), L('fuuka says hers does it too. after'), L('22 floors. go to sleep')],
      reply: [
        { t: 'u go to sleep', link: 'chenle', notes: 2, then: [L("i'm logging the readings first"), L('fuuka gave me her notes. she writes like i do. it was upsetting')] },
        { t: 'thank u', link: 'chenle', notes: 3, then: [L("don't. i'll think about it"), L('ok. you can have that one. one')] }
      ] },
    6: { slot: 'evening', msgs: [L('i made the document'), L('about you'), L('not the losing one. the other one'), L('11 pages')],
      reply: [
        { t: 'can i read it', link: 'chenle', notes: 3, then: [L('no'), L('yes'), L("when it's done"), L("it's not going to be done")] },
        { t: 'whats on page 1', link: 'chenle', notes: 2, then: [L('your name'), L('then a lot of numbers'), L("then your name again at the bottom. like a signature. i didn't mean to do that")] }
      ] },
    8: { slot: 'late', delay: 1, msgs: [L('the carton was in the bin. rinsed'), L('that means it worked'), L('thanks')],
      reply: [
        { t: 'how do u know about the bin', link: 'chenle', notes: 2, then: [L('fuuka'), L('she tells me things now. we have a system. it has columns')] },
        { t: 'anytime', link: 'chenle', notes: 3, then: [L('ok'), L('i\'m writing that down. "anytime." i\'m going to use it')] }
      ] },
    9: { slot: 'evening', delay: 1, msgs: [L('you said fine 0 times today'), L('fuuka kept count for me at dinner'), L("she's good at it. she's better than me at it")],
      reply: [
        { t: 'fine', link: 'chenle', notes: 3, then: [L('1'), L('...you did that on purpose'), L("ok. that one doesn't count")] },
        { t: 'u have a whole network now', link: 'chenle', notes: 2, then: [L('2 people'), L("it's a small network. it's a good one")] }
      ] },
    10: { slot: 'late', msgs: [L('practice monday')],
      reply: [
        { t: 'practice monday', link: 'chenle', notes: 3, then: [L('ok')] },
        { t: 'what time', link: 'chenle', notes: 2, then: [L('you know what time'), L("1. i'll be there at 12:40")] }
      ] }
  };

  C.holidays = { ...(C.holidays || {}),
    // The Emperor's Birthday: a day off. The dorm's party is tonight (story), so this one ends with time to get back.
    '12/23': { rank: 3, flag: 'year-goes-on', slot: 'after', title: "the emperor's birthday", place: 'Paulownia Mall · Game Panic', time: 'Daytime', bg: 'gameparade-outside', music: 'joy',
      ask: "game panic is running a 2v2 on the team cabinet. 12:00. i signed us up. you can unsign us", yes: 'omg ok. wait. us??',
      ok: 'us. 11:40. bring coins. i have 14', sorry: 'cant today, im so sorry', no: "ok. i'll unsign us. i'll be very professional about it",
      scene: [
        { n: "Game Panic had put out a whiteboard on an easel by the door with a bracket drawn on it in three colors of marker, sixteen teams of two, and somebody had already misspelled half the names and somebody else had corrected them, and the back row, which never had anybody in it, had a crowd. Middle-schoolers in their holiday clothes. Two salarymen in suits on a day off, very serious. A pair of brothers of maybe twelve and fourteen in matching jackets who looked like they had been born at this cabinet." },
        { n: "Chenle was standing in front of the whiteboard with his arms folded, reading every name on it, top to bottom, lips moving. He'd worn a different hoodie. It was the same grey. It had been ironed." },
        { s: 'chenle', f: 'serious', t: "The brothers are the problem. Everyone else is a coin flip. The brothers have played this cabinet more than the man who fixes it. I watched them on Saturday for forty minutes. The little one baits. The big one waits. Don't chase the little one." },
        { s: 'chenle', f: 'neutral', t: "First tournament in program history. Here, I mean. It counts. I've decided it counts." },
        { choose: [
          { t: "(Play the bracket exactly the way he says.)", notes: 3, then: [
            { n: "They played it his way. Four rounds, back to back, the crowd getting bigger every time, and every round he said very little and all of it was right, and she held the wrench and kept him at sixty, and in the final the little brother baited, and baited again, so prettily it hurt not to go, and she didn't go, and the big one stepped out to wait for her and found Chenle waiting for him instead." },
            { s: 'chenle', f: 'happy', t: "Don't chase the little one. Told you. Told you. Told you." },
            { n: "He said it three times in a row, very fast and very low, gripping the stick, with his face lit up like the whole of the mall's December had gone off at once behind his glasses, and not one person in the crowd could have heard him. That was the loudest she ever heard him get." }
          ] },
          { t: "(Chase the little one. Trust your hands.)", notes: 2, stat: { courage: 1 }, then: [
            { n: "In the final she chased the little one. She couldn't help it. He baited so beautifully that her hands went before she did, and the big brother stepped out to punish her for it, and Chenle, who had known she'd do it, she realized afterwards, from the moment he'd told her not to, was already standing in exactly the place the big brother stepped into." },
            { s: 'chenle', f: 'happy', t: "You chased him." },
            { s: 'solar', f: 'flustered', t: "I chased him." },
            { s: 'chenle', f: 'happy', t: "You always chase him. I planned for it. I just didn't want you to know I'd planned for it." }
          ] }
        ] },
        { n: "The prize was a voucher for a thousand yen of credits and a plastic trophy the size of a thumb, gold paint already flaking at the base. The brothers shook their hands very formally, like men who'd lost a war with honor, and the little one told Chenle in Japanese that he would beat him next year, and Chenle, who didn't understand a word, nodded gravely as though he did." },
        { s: 'chenle', f: 'neutral', t: "You take the trophy." },
        { s: 'solar', f: 'neutral', t: "We both won it." },
        { s: 'chenle', f: 'neutral', t: "You take the trophy. I take the number. Sixteen teams, four rounds, zero maps dropped. I can keep that one anywhere." },
        { n: "He put the voucher in his wallet and the bracket's photo in his phone, and checked the time, and said there was a party at the dorm tonight that Mitsuru had planned like an operation and that they had two hours and eleven minutes to get her back for it, and walked her to the doors with the little gold trophy in her coat pocket, heavier than it had any right to be." }
      ] },

    // The New Year sales: the lucky bags at the electronics shop by Port Island Station.
    '1/3': { rank: 6, flag: 'year-goes-on', slot: 'after', title: 'lucky bags', place: 'Port Island Station', time: 'Morning', bg: 'location-1', music: 'city',
      ask: "the electronics shop by port island station has lucky bags. 10,000 yen. contents unknown. i've been thinking about it for 2 days. i need someone to stop me or not stop me", yes: 'omg yes. ill stop u. or not',
      ok: "line starts at 8. i'm in it. i'm 31st", sorry: 'cant today, sorry!!', no: "ok. i'll make the decision alone. that's how people get hurt",
      scene: [
        { n: "The line went along the front of the shop and round the corner and halfway down the next street, people in good coats and bad coats stamping their feet in the cold with their hands round cans of hot coffee, and every one of them was waiting for the same thing, a stack of identical red paper bags behind the glass with the shop's name on them and a price and nothing else." },
        { n: "Chenle was thirty-first. He'd been there since seven forty. He was holding a can of corn soup he wasn't drinking, for the heat, and when he saw her he didn't wave, he held up the can, which she understood was a wave." },
        { s: 'chenle', f: 'serious', t: "I can't calculate it. That's the problem. At home I'd look it up. Somebody would have posted every bag from last year. I'd know the expected value to the yen. Here there's no forum. There's no data. It's just a bag." },
        { s: 'chenle', f: 'serious', t: "It's ten thousand yen and I have no idea what's in it. Do you understand. I have no idea. I've never not had an idea." },
        { n: "He said it in the low intense voice he used for frame data, and his eyes were enormous behind his glasses, and she realized that he wasn't upset. He was thrilled. He'd been thrilled for two days and had nowhere to put it." },
        { choose: [
          { t: "Buy it. Some things you just open.", notes: 3, then: [
            { n: "He bought it. He held it in both hands on the pavement outside like it might go off. Then he opened it right there, against every principle he had, and took things out one at a time and announced each one in the voice of a man reading results off an instrument. A memory stick, four gigabytes. Earphones, white, still sealed. A tiny digital photo frame that played a slideshow of the shop's own logo. A keyboard cleaning kit. A second, identical memory stick." },
            { s: 'chenle', f: 'happy', t: "Fourteen thousand yen of things. Retail. I won. I won by forty percent. I won a gamble with no data." },
            { s: 'chenle', f: 'serious', t: "I'm never doing that again. I didn't like how it felt. I'm going to think about it every day for a year." }
          ] },
          { t: "Don't. You'll hate not knowing.", notes: 2, then: [
            { s: 'chenle', f: 'neutral', t: "...I'll hate not knowing more if I don't." },
            { n: "He bought it anyway, which she'd known he would, and opened it on a bench by the station with his tongue between his teeth like a kid with a cracker toy, and when it turned out to be mostly memory sticks he laid them out on the bench in a row and looked at them with deep, quiet satisfaction, the way other people looked at a sea view." }
          ] },
          { t: "(Buy one too. Open them at the same time.)", notes: 3, stat: { courage: 1 }, then: [
            { n: "She bought one too. They sat on a bench by the station and opened them at the same time, on three, which he counted. Hers was a rice cooker. A whole small rice cooker, in a box, in a paper bag. His was memory sticks. They stared at each other's for a long moment." },
            { s: 'chenle', f: 'surprised', t: "How did you get a rice cooker." },
            { s: 'chenle', f: 'happy', t: "Nobody would have predicted that. That's not in any distribution. That's beautiful. I hate it." }
          ] }
        ] },
        { n: "On the train back he gave her the earphones, still sealed, without a word, holding them out at arm's length the way he held out food, and when she asked why he said she'd had the same ones at home, the white ones, and that he'd always thought she should have a spare, and now she did." }
      ] }
  };
})();

(window.FEMC_GAME_DAILY_LIFE ||= []).push(

  { id: 'chenle-early', after: '11/18', until: '12/20', slot: 'early', schoolOnly: true, events: ['a4-twelve'],
    place: 'Iwatodai Dorm · Dining Room', time: 'Early Morning', bg: 'iwatodaidorm-diningroom', scene: [
      { n: "Solar came down at ten past six because she couldn't sleep, and found that she wasn't first. Fuuka was at the rice cooker in her cardigan with her hair still flat on one side, measuring water by the line on her finger. Koromaru was under the dining table, lying on somebody's feet. The feet belonged to Chenle, who was sitting at the table in the visitors' chair with his hood up and a can of tea in front of him, very upright, like a man in a waiting room who'd arrived for an appointment two days early." },
      { s: 'fuuka', f: 'happy', t: "Koromaru heard him at the door at six. He didn't knock. He was just... standing there. Koromaru told me." },
      { s: 'chenle', f: 'neutral', t: "The whiteboard says visitors at seven." },
      { s: 'solar', f: 'neutral', t: "It's six." },
      { s: 'chenle', f: 'neutral', t: "I'm early." },
      { n: "He said it with no apology in it at all, as a fact about himself, the way you'd say you were left-handed. On the whiteboard by the fridge, under Mitsuru's VISITORS, his name had been written in last night with *7:00* beside it in her exact hand, and under that, this morning, in tiny careful letters somebody had squeezed in, *(6:02).* Further along the board, the RATINGS column had come back again, overnight, and somebody had already given the rice a four." },
      { s: 'koromaru', f: 'happy', t: "Woof." },
      { choose: [
        { t: "Why so early?", then: [
          { s: 'chenle', f: 'neutral', t: "At home I get to the lab before everyone. You set up your station. You sit. The room's empty. Then people come in one at a time and you know exactly who's there and in what order." },
          { s: 'chenle', f: 'neutral', t: "If you come last, the room's already happened. You just walk into it." },
          { n: "Fuuka, at the rice cooker, nodded very slightly, as if somebody had finally said out loud a thing she'd always thought." }
        ] },
        { t: "(Sit down. Steal the other end of Koromaru.)", then: [
          { n: "She sat down across from him and put her feet under the table, and Koromaru, after consideration, rearranged himself so that his head was on Chenle's feet and his back half was on hers, and lay there between them like a bridge. Chenle looked down at the dog and then up at her, and didn't move his feet for the next forty minutes, including when it was clearly causing him pain." }
        ] }
      ] },
      { n: "By seven the dining room had filled the way he'd said it would, one at a time, Akihiko back from his run, Junpei half-asleep, Mitsuru with the newspaper, and Chenle watched each of them come in over the top of his can of tea with the calm of a man who'd got there first and already knew where everyone was going to sit." },
      { bond: { chenle: 1 } }
    ] },

  { id: 'chenle-minji', after: '11/21', until: '12/20', slot: 'after', events: ['a4-twelve'],
    place: 'Iwatodai Station · Platform', time: 'After School', bg: 'station-platform-day', scene: [
      { n: "On her way past the station Solar found two people from home at the very end of the platform, where the yellow line ran out and nobody stood. Minji had her camera up on its little tripod, pointed down the tracks toward the bend where the trains came out from behind the buildings. Chenle was beside her with his phone in one hand and his other hand in the air, flat, like someone about to start a race." },
      { s: 'minji', f: 'neutral', t: "I want it to come into frame on the beat. Exactly on it. The light's only right for about six more minutes." },
      { s: 'chenle', f: 'serious', t: "Off peak they're eight minutes apart. Give or take twenty seconds. The next one's due in fifty-one seconds. It's going to be eleven seconds late. They're always eleven seconds late on this line in the afternoon." },
      { s: 'minji', f: 'happy', t: "He's been timing them for four days. He has a spreadsheet. On his phone. For trains." },
      { s: 'chenle', f: 'neutral', t: "You asked me to." },
      { s: 'minji', f: 'neutral', t: "I asked you once." },
      { choose: [
        { t: "(Stand out of the frame and watch.)", then: [
          { n: "She stood out of the frame. Minji's finger rested on the record button, and Chenle's flat hand stayed up in the air, and his lips moved, counting, and at the end of the count he dropped the hand, and Minji pressed, and the train came round the bend into the low gold light exactly then, exactly on it, its windows going past the lens one by one like frames of film." },
          { s: 'minji', f: 'happy', t: "*Le.* That was perfect. That was so perfect I'm going to be insufferable about it." },
          { s: 'chenle', f: 'happy', t: "Eleven seconds late. Told you." }
        ] },
        { t: "Let me call one.", then: [
          { s: 'chenle', f: 'neutral', t: "...Okay. Next one. Eight minutes. You call it. I'll check." },
          { n: "She called it. She was two seconds early, and the train came into Minji's frame a breath after the beat, and Minji said it was better, actually, it looked like the train was hurrying to keep up with something, and Chenle wrote down *2.0* in the spreadsheet next to her name, which had apparently been there for a while." }
        ] }
      ] },
      { n: "When the light went, Minji folded the tripod, and Chenle put his phone away, and the two of them stood on the edge of the platform for a second longer than they needed to, looking down the empty tracks toward a bend that went somewhere, and neither of them said what they were both obviously thinking, which was that this was the closest they'd come in weeks to being in a room with the rest of their team." },
      { bond: { chenle: 1 } }
    ] },

  { id: 'chenle-steps', after: '11/20', until: '12/20', slot: 'evening', events: ['a4-twelve', 'a4-household-introductions'],
    place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', scene: [
      { n: "There was somebody sitting on the dorm's front steps at half past seven with a plastic bag from the konbini by the station. Solar saw the back of a grey hood through the glass in the door and stopped with her hand on the handle, because there was somebody else coming down the path to meet him, from the side of the building, hood up too, black, hands in his pockets, and she knew both of their walks by now." },
      { n: "Haechan didn't say anything. He sat down two steps above Chenle and a little to one side, the way you'd sit near someone in a waiting room, not with them. Chenle didn't say anything either. He didn't turn round. He took a rice ball out of the bag and held it up over his shoulder, and after a second Haechan took it out of his hand." },
      { n: "They ate. The cold came down the path. A train went over the line somewhere behind the houses with a long low sound like somebody humming in the next room. Neither of them looked at the other once." },
      { choose: [
        { t: "(Stay behind the glass. Don't interrupt.)", then: [
          { n: "She stayed behind the glass. She told herself she was letting them have it, and she was, and she was also watching, because she had never once seen Haechan take anything anybody handed him without making them earn it, and he had just taken a rice ball from a boy who hadn't even turned round." }
        ] },
        { t: "(Go out and sit on the step between them.)", then: [
          { n: "She went out and sat on the step between them. Neither of them reacted. After a moment Chenle took another rice ball out of the bag and held it up over his shoulder, without turning, at exactly the height of her hand, and she took it, and the three of them sat there in a row on the steps like birds on a wire, eating, not talking." }
        ] }
      ] },
      { n: "When the bag was empty Chenle folded it into a small precise square and put it in his pocket and stood up. At the bottom of the steps he stopped, still facing the gate." },
      { s: 'chenle', f: 'neutral', t: "Two." },
      { s: 'haechan', f: 'neutral', t: "...Yeah." },
      { n: "That was all. Chenle went down the path and out of the gate and turned toward the station, and Haechan sat on the step a while longer with his elbows on his knees, looking at the place the gate had been, and Solar didn't ask either of them what two was. She had the feeling that was the arrangement, and that the arrangement was older than her, and that it worked, a little, and that she'd only been allowed to see it because neither of them had thought to stop her." },
      { bond: { chenle: 1 } }
    ] },

  { id: 'chenle-girls', after: '1/4', until: '2/6', slot: 'evening', flags: ['year-goes-on'], events: ['a4-twelve'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Hanni and Hyein had got hold of Chenle. They'd made friends with him at a party at home, the very first one, apparently, before Solar had even met him properly, and it seemed they'd simply picked up where they'd left off, because he was on the end of the lounge sofa with a girl on either side of him and a plate of cut fruit on his knee that he hadn't asked for, looking like a man who'd been kidnapped by people he liked." },
      { s: 'hyein', f: 'happy', t: "Explain something. Anything. I don't care what. Explain the rice cooker." },
      { s: 'chenle', f: 'neutral', t: "...It's a thermostat with a magnet. When the water's gone the temperature goes above a hundred and the magnet lets go and it switches to warm." },
      { s: 'hyein', f: 'happy', t: "*See?* Hanni. *Hanni.* Did you hear that? He talks like a museum." },
      { s: 'hanni', f: 'happy', t: "Eat the pear, Chenle. It's going brown." },
      { s: 'chenle', f: 'neutral', t: "It's oxidizing. It's fine to eat. It's just honest about its age." },
      { n: "Hyein made a sound like she'd been given a present and had to lie down on the arm of the sofa for a moment. Hanni pushed the plate an inch closer to his hand, the way she did for Solar, and Chenle looked at the plate, and at the inch, and ate the pear." },
      { choose: [
        { t: "(Sit down and ask him to explain the heater.)", then: [
          { s: 'chenle', f: 'neutral', t: "That one's just a resistor. It's boring. It gets hot because it doesn't want to let the electricity through. It's stubborn. That's the whole thing." },
          { s: 'hyein', f: 'happy', t: "Oh, that's Sol. That's literally Sol. The heater is Sol." },
          { s: 'hanni', f: 'neutral', t: "Hyein." },
          { s: 'hyein', f: 'neutral', t: "What? It's a compliment. She's warm because she's stubborn." }
        ] },
        { t: "Has Jaemin paid Hyein's deposit yet?", then: [
          { s: 'hyein', f: 'serious', t: "He has *not.* He keeps saying it's *in the mail.* There's no mail. Where's the mail, Chenle?" },
          { s: 'chenle', f: 'neutral', t: "There's no mail. I'll tell him. He'll say it's in the mail." },
          { s: 'hanni', f: 'happy', t: "He'll pay. He always pays. He just likes being chased first." }
        ] }
      ] },
      { n: "At five to eight Chenle stood, very precisely, because visitors were out by eight, and Hanni put three pieces of fruit in a napkin and pressed them into his hand at the door, and Hyein shouted *bye, museum* from the sofa, and he went out into the cold with the napkin held in front of him in both hands like something he'd been asked to deliver, and Solar watched from the window as he ate all three before the gate." },
      { bond: { chenle: 1 } }
    ] }
);

(window.FEMC_GAME_RUNINS ||= []).push(

  { id: 'ri-chenle-vending', who: 'chenle', where: { acts: ['vending'], areas: [], jobs: [], clubs: [] },
    events: ['a4-twelve'], after: '11/19', until: '1/15', scene: [
      { n: "Her can thudded into the flap, and while she was still bent to get it there was a second thud from the next machine along, and then a third, and a fourth, somebody buying in a slow careful rhythm, one can at a time, reading each label before pressing." },
      { n: "It was Chenle. He had four cans lined up on the ledge above the coin slot and was considering a fifth with his finger hovering over the buttons, the way he hovered over a choice in a game he hadn't played before. A can of energy drink with a lightning bolt on it. A green tea. A can of sweet milk coffee. A grape soda. He pressed the button for a lemon soda and it thudded down and he put it at the end of the row." },
      { s: 'chenle', f: 'neutral', t: "The team fridge. At the lab. Everybody's drink. One each. Olivia's the lightning one. Haerin's the tea. Minji's the coffee. Mine." },
      { s: 'chenle', f: 'sad', t: "...There's no lab. Two of these people aren't here. I knew that before I started. I bought them anyway." },
      { choose: [
        { t: "Which one's mine?", then: [
          { n: "He looked at the row. Then he put another coin in the machine and pressed the iced coffee, the plain black kind, and it thudded down, and he handed it to her without a word." },
          { s: 'chenle', f: 'neutral', t: "Daytime. You never have it after six. You don't sleep if you do. You don't sleep anyway, but you sleep less." },
          { n: "She stood there with the cold can in her hand. It was exactly right. It had been exactly right before she'd known it was." }
        ] },
        { t: "(Help him carry them back.)", then: [
          { n: "She took two. He took three. They walked back toward the guesthouse with their arms full of cans for a team that was mostly somewhere else, and he didn't explain it, and she didn't ask him to, and at the door he took the lightning one and the tea off her and put them at the back of the guesthouse fridge, behind the milk, where no one would drink them by accident." }
        ] }
      ] },
      { bond: { chenle: 1 } }
    ] },

  { id: 'ri-chenle-bathhouse', who: 'chenle', where: { acts: ['bathhouse', 'electricbath'], areas: [], jobs: [], clubs: [] }, slot: 'evening',
    events: ['a4-twelve'], after: '12/1', until: '2/20', scene: [
      { n: "When she came out of the bathhouse, pink and steaming, into air so cold it hurt, there was someone sitting on the bench outside the men's entrance in a hoodie with the hood down for once, his blonde hair still wet and sticking up in tufts, his glasses so fogged he was looking at the world through two small white clouds, holding a glass bottle of coffee milk in both hands like a holy relic." },
      { s: 'chenle', f: 'surprised', t: "Solar. I can't see you. I know it's you. You walk like you." },
      { s: 'chenle', f: 'serious', t: "Jaemin made me come. He's still in there. He's singing in the bath. People are letting him. There's a bath in there with electricity in it. On purpose. I sat in it." },
      { s: 'chenle', f: 'serious', t: "It's maybe ten milliamps. I think. I'm estimating. My left arm disagrees with my estimate." },
      { n: "He said it low and fast and completely serious, with his eyes wide behind the fog and his whole body vibrating very slightly, not from the cold. It was the most excited she had ever seen a person be about having been mildly electrocuted." },
      { choose: [
        { t: "Are you okay?", then: [
          { s: 'chenle', f: 'happy', t: "I'm great. I want to go back in. I want to know where the electrodes are. The old man in there won't tell me. I asked with my hands." }
        ] },
        { t: "(Wipe his glasses for him with your sleeve.)", then: [
          { n: "She took his glasses off his face and wiped them on the inside of her sleeve and put them back on him, slightly crooked, and he blinked at her through them as the world came back into focus, and said *oh, hi* as though she'd only just arrived, and then *thank you* to the coffee milk." }
        ] }
      ] },
      { n: "Behind the men's curtain, faintly, a voice that was unmistakably Jaemin's hit a note in a ballad that the bathhouse's tiled walls did very generous things to, and somebody inside applauded, and Chenle closed his eyes and drank his coffee milk in one long go." },
      { s: 'chenle', f: 'happy', t: "Don't tell him it sounds good in there. It's the tiles. It's the reverb. It's not him." },
      { bond: { chenle: 1 } }
    ] }
);
