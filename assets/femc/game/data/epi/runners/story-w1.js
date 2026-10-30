/* The Runners epilogue, week 1 (12/1-12/7/2025): the story events. Epilogue batch 3, writer A.
   "Normal" week: glitches are almost nothing, only Solar notices, everything deniable. Kat's December canon (outline 82-88,
   moved home: the sibling talk is in Syracuse, not Manhattan; game Solar never had Thanksgiving, she was gone 11/22-11/30).
   Events (R.events):
     epi-r-home          12/1 early    the first morning back (ending variants: xmas-haechan / xmas-minji / the friends)
     epi-r-five-days     12/1 after    Statistics, FIVE DAYS TO REGIONALS, practice and Doyoung (consumes)
     epi-r-pale          12/1 late     Chenle on the stairs; the act's only cutaway (4B, close on Chenle)
     epi-r-cover         12/2 early    Danielle in the kitchen, the emergency vacation; her father on the phone
     epi-r-ask           12/2 late     his text; she picks the room
     epi-r-did-you-eat   12/3 after    Jaehyun at the lab door; the sibling talk (consumes)
     epi-r-confession    12/3 evening  the recording, before she hears anything (consumes)
     epi-r-moon          12/4 late     the full moon passes; the promise stays unpaid
     epi-r-friday        12/5 evening  the party before the match, without the team (consumes)
     epi-r-regionals-1   12/6 early    day one (fills after, evening)
     epi-r-regionals-2   12/7 early    the hard middle, the result, Minji, Mark (fills after)
     epi-r-crossroads    12/7 late     the quiet route choice
   Flags set: epi-r-room-hl / epi-r-room-cafe / epi-r-room-library (epi-r-ask); epi-r-stem-wait / epi-r-stem-file /
     epi-r-stem-deleted (epi-r-confession); epi-r-read-1 / -2 / -3 (epi-r-regionals-2, right reads only);
     epi-route-haechan / epi-route-minji / epi-route-cover (epi-r-crossroads).
   Flags read: the three room flags, epi-r-stem-deleted, epi-r-read-3.
   ifYear read: { xmas: 'haechan' }, { xmas: 'minji' }, { rank: { haechan: 10 } }, { romance: 'minji' },
     { noFlag: 'arrived-danielle' }, { noFlag: 'arrived-mark' }, { noFlag: 'arrived-chenle' }, { noFlag: 'arrived-jaemin' }.
   Glitches used (named entries in glitches.js): epi-r-g-wake, epi-r-g-thumbs, epi-r-g-moon, epi-r-g-junpei, epi-r-g-evoke;
     { glitch: { strain: 1 } } on each lie that holds the cover. The track stays untitled. The jacket stays in the bag. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/1, morning: home ─────────────────────────────
  { id: 'epi-r-home', date: '12/1', slot: 'early', title: 'home', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'world-runners-theme' },
    { n: "The radiator under the window knocked twice, the way it had knocked every morning since August, like somebody downstairs had a complaint and was too polite to come up and make it, and Solar lay there under the pink duvet and listened to it the way you'd listen to a voice on the phone you hadn't heard in a year." },
    { n: "It hadn't been a year. That was the thing. Her phone said Monday, the first of December, and her phone had never once lied to her about the date, and if she did the math, which she did, twice, lying on her back with her eyes on the ceiling, she'd been gone nine days." },
    { glitch: 'epi-r-g-wake' },
    { n: "For one breath the light on the ceiling was wrong. Not darker. Greener, the snow light coming through the pink curtains and landing on the plaster the color of old pool water, of a hallway at midnight with every clock stopped, and her whole body went still under the duvet the way it had learned to go still, ready, a hand already halfway to a weapon that wasn't on the nightstand." },
    { n: "Then it was just snow light. Pink curtains. A crack in the plaster shaped like Ohio that she'd named in September and forgotten about until right now." },
    { n: "She let her hand fall back on the duvet. She didn't look at it. She'd decided, somewhere around the second knock of the radiator, that she wasn't going to look at anything too closely today, which was a plan, and which was also, she was aware, what she'd always done instead of one." },
    { n: "There was a song in her head. There had been a song in her head since April, low and patient, four minutes of it, the kind of thing you hum in the shower without ever knowing where you heard it. She knew where now. And she knew how it finished, which was new, and which sat in her chest like a stone that had been warmed in somebody's pocket." },

    { ifYear: { xmas: 'haechan' }, then: [
      { n: "She went out into the hallway in her socks because she couldn't not. The ending of a thing doesn't care whether you're ready. The second floor was long and narrow and overheated and smelled like eleven different shampoos, and Hyein's hairdryer was going behind the bathroom door, loud, and Hyein was swearing at it, which meant the world was in order." },
      { n: "He was at the end of it. By the stairs. Leaning on the wall with his hands in his pockets and his headphones round his neck, a paper cup of iced coffee sweating on the windowsill beside him in the first week of December like a joke he'd decided not to explain, and he'd said *morning, princess* already, she'd heard it, and she stood there with her hand on the wall and had absolutely no idea who he was." },
      { n: "None. Not a flicker. A boy in a sorority hallway at eight in the morning, dark hair in his eyes, a black hoodie, split knuckles, the kind of stillness that made you check where the exits were. Her body did the math before she did. Weight onto the balls of her feet. Shoulders down. The specific, cold alertness of a girl who had grown up in buildings with doormen and knew exactly what it meant when a man was somewhere he shouldn't be." },
      { n: "He didn't move toward her. He took his phone out of his pocket, turned it so she could see the screen, and she saw a stopwatch running. Two minutes and some seconds. Climbing." },
      { s: 'haechan', f: 'neutral', t: "It's fine. Take your time." },
      { s: 'solar', t: "Who let you in?" },
      { s: 'haechan', f: 'neutral', t: "Hanni. Kitchen window. I knocked. She looked at the coffee first and me second, which is the right order." },
      { n: "His voice was flat. Dry, almost bored, the voice of a boy reading a weather report to a room that wasn't listening, and it went into her ear and kept going, down, past the part of her that was checking exits, into somewhere older, a laundry room, a dryer turning with nothing in it, a ledge with a lot of sky behind it, and it was like watching a photograph come up in a tray." },
      { n: "Vanilla. That was what did it, in the end. The hallway's eleven shampoos, and under them, faint, warm, stupid, vanilla." },
      { n: "Oh." },
      { n: "She knew him. She knew him so completely that the not-knowing of a second ago felt like a lie she'd told somebody else. She knew the split on his second knuckle and which side he slept on and the exact flat sound he made when something landed and he didn't want you to see it land. She knew what he'd done. All of it. He'd told her himself, days before she fell, and she'd believed him, and they hadn't fixed anything, and then there'd been a whole other year, and whatever that had been, and it had been a lot, it hadn't been here." },
      { n: "He watched it arrive on her face. He stopped the clock with his thumb without looking at it." },
      { s: 'haechan', f: 'neutral', t: "Two minutes, forty-one. I said about five." },
      { s: 'haechan', f: 'neutral', t: "I'll take it." },
      { choose: [
        { t: "Go to hell.", then: [
          { n: "It came out of her already shaped, worn smooth, like she'd been carrying it in her pocket for a year waiting for the right door to throw it at." },
          { n: "Something happened at the corner of his mouth. Not a smile. The place a smile would go, if he'd let it." },
          { s: 'haechan', f: 'happy', t: "There she is." }
        ] },
        { t: "(Take the coffee.)", then: [
          { n: "She walked the length of the hallway in her socks and took the coffee off the sill without asking whose it was, because she already knew whose it was, and the cold of it went straight into her palm and up her wrist. He hadn't asked anybody how she took it. He never asked anybody anything about her. He just knew, and it had never once stopped being unbearable." },
          { s: 'haechan', f: 'neutral', t: "It's December. I know. Don't start." }
        ] },
        { t: "...Donghyuck.", then: [
          { n: "It came out quiet. Not the laugh it had escaped in once, in a field at two in the morning. Not the accident. The serious one, the door she opened on purpose." },
          { n: "And he did what he always did with that door. He looked at it, and looked at her, and something moved in his jaw, and he closed it, gently, with a pet name, like closing a door on a sleeping room." },
          { s: 'haechan', f: 'neutral', t: "Morning, pretty. Again." }
        ] }
      ] },
      { n: "Somewhere behind her, down the hall, a door handle turned. Not the bathroom. Further. The end room, the one with the good radiator, the one whose light had been on at two in the morning once in a life that had kept going without her." },
      { n: "He was already on the stairs. He didn't hurry. He went down them the way he went through every door, like he'd been invited and found the invitation underwhelming, and the last thing she saw of him was his hand on the banister, and then the front door, and then cold air coming up the stairwell like a held breath let out." },
      { n: "The handle down the hall turned back. The door stayed shut. She stood there holding a December iced coffee and decided not to think about that either." },
      { n: "Then the bathroom door banged open and Hyein came out in a cloud of steam with half her hair dry, and saw the coffee, and saw Solar's face, and screamed for Hanni, and that was the end of standing in hallways." }
    ], else: [
      { ifYear: { xmas: 'minji' }, then: [
        { n: "Her phone was face down on the desk where she'd apparently left it, nine days ago, and when she turned it over it lit up her whole hand. Forty messages in the girls' chat. Doyoung's *regionals saturday. you good?* And under those, from six fourteen this morning, one from Minji, which she opened first and didn't think about why." },
        { phone: [
          { from: 'minji', t: "the lamp outside honors is flickering again" },
          { from: 'minji', t: "its been doing it since 5. i think its waiting for something" },
          { from: 'minji', t: "im going to be there around 4 with the camera. no pressure. i mean it this time. mostly" }
        ], contact: 'minji' },
        { n: "She read it three times. The third time she noticed she was smiling at it, and stopped, and then didn't stop, which was its own sentence." },
        { n: "Later, she'd go. She knew it the way you know a step is there in the dark. And later still, after that, Minji would send her the footage, and there'd be one frame in the middle of it that neither of them could explain, and they would both decide, separately, that it was the camera." },
        { n: "That was later. Right now her door banged open." },
        { n: "Hanni and Hyein, in pajamas and coats, Hyein's hair half-dried and enormous on one side, Hanni holding two iced coffees in the middle of a snowstorm, both of them talking at once, and then both of them stopping at once, in the doorway, to look at her." },
        { s: 'hyein', f: 'surprised', t: "Did you just wake up too?" },
        { s: 'hanni', f: 'serious', t: "Do you remember?" },
        { n: "Solar looked at them. Hanni's coat over Hanni's pajamas, the ones with the strawberries. The cheap plastic charm on Hyein's wrist, won from a crane game in a mall in another country, in another year, in a world that had a whole extra hour in it." },
        { s: 'solar', t: "...Everything." },
        { n: "Hyein made a noise like a kettle. Hanni put a coffee in Solar's hand and kept her hand over Solar's for a second longer than it needed, and then took it back, and sat down on the end of the bed like she'd been invited, which she had, about four hundred times." }
      ], else: [
        { n: "The coffee was still cold in her hand. That was how she knew she hadn't dreamed the last ninety seconds. Hyein had stopped screaming and was now sitting cross-legged on the end of the bed in a coat over her pajamas, crying a little and pretending it was the cold, and Hanni was in the desk chair with her knees pulled up, watching Solar's face the way you'd watch a pot." },
        { s: 'hyein', f: 'sad', t: "You were gone for so long. Like, here. Nine days here. And then over there it was..." },
        { s: 'hanni', f: 'neutral', t: "Don't do the math, Hyein. You'll cry again." },
        { s: 'hyein', f: 'sad', t: "I'm already crying again." },
        { n: "Solar drank the coffee. It was exactly how she took it. Hyein had never once in her life gotten it right on the first try and she'd gotten it right today, in a snowstorm, at eight in the morning, and Solar had to look at the window for a while." },
        { s: 'hanni', f: 'serious', t: "You do remember. Right? All of it. You're not doing the thing where you say you're fine and you're actually just being polite to two strangers." },
        { s: 'solar', t: "I remember all of it." },
        { s: 'hanni', f: 'happy', t: "Okay. Okay. Good. Then we can do the boring part." }
      ] }
    ] },

    // The drill (every variant).
    { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', soft: true },
    { n: "The boring part had a Notes app. Hanni had written it at some point in the last nine days, clearly at three in the morning, clearly more than once, and she held the phone up between the three of them like a coach holding up a play sheet." },
    { s: 'hanni', f: 'serious', t: "Okay. Joint retreat with Sigma. Invite only. Upstate. A lodge. No signal. We left on the twenty-second, you left on the twenty-second, we came back on the thirtieth. Memorize it." },
    { s: 'hyein', f: 'neutral', t: "We didn't leave on the twenty-second. We left on, like, the twenty-fourth." },
    { s: 'hanni', f: 'serious', t: "To campus we left on the twenty-second. To our moms we went to Friendsgiving." },
    { s: 'hyein', f: 'happy', t: "My mom made a group chat with Hanni's mom. It's called *friendsgiving??* With two question marks. It has forty-one messages. One of them is a photo of a turkey with a question mark drawn on it." },
    { s: 'hanni', f: 'neutral', t: "And to your dad it's an emergency trip with the chapter. No signal." },
    { s: 'hyein', f: 'neutral', t: "Which is the retreat, but sadder. It's an emergency vacation." },
    { s: 'hanni', f: 'neutral', t: "Don't call it that." },
    { s: 'hyein', f: 'happy', t: "It's literally what it is. We had an emergency. We were on vacation from it. In a way." },
    { n: "Solar listened to them argue about what to call the lie, which was the most normal thing that had happened to her in a year, and felt something in her chest that she was going to classify, for now, as caffeine." },
    { s: 'hanni', f: 'serious', t: "Say it back. All of it. Like you're saying it to a Dean." },
    { choose: [
      { t: "Joint retreat. Invite only. A lodge upstate. No signal, so I couldn't call. I'm sorry I worried everyone.", then: [
        { glitch: { strain: 1 } },
        { n: "It came out perfect. That was the problem. It came out in her father's cadence, the one you used across a table from somebody who'd already decided to believe you if you just gave them the shape of a reason, warm in the right places, sorry in the right amount, and she heard herself do it and something at the back of her neck went cold and tight, like a hand had been laid there." },
        { s: 'hyein', f: 'surprised', t: "Oh my god. I believe you. I was THERE and I believe you." },
        { s: 'hanni', f: 'sad', t: "...Yeah. That's really good, Sol." },
        { n: "Hanni didn't say it like a compliment. She said it like somebody who'd watched you do a magic trick and seen exactly where the card went." }
      ] },
      { t: "(Nod. Let Hanni say it for you.)", then: [
        { n: "She nodded along while Hanni said it again, slower, and didn't open her mouth, because she knew exactly how good she'd be at it if she did, and she wasn't ready to find out what it would cost this time." },
        { s: 'hanni', f: 'neutral', t: "You're going to have to say it out loud eventually." },
        { s: 'solar', t: "I know. Not before coffee." },
        { s: 'hyein', f: 'happy', t: "You're HOLDING a coffee." }
      ] },
      { t: "We could just tell people we don't want to talk about it.", then: [
        { s: 'hyein', f: 'surprised', t: "To WHO. To your DAD?" },
        { s: 'hanni', f: 'neutral', t: "To campus that's worse. *Doesn't want to talk about it* is a caption, Sol. You know whose." },
        { n: "She did know whose. She looked at the wall between her room and the end of the hall, and didn't say the name, and neither did they." }
      ] }
    ] },
    { s: 'hanni', f: 'neutral', t: "And put it in the chat. So we all have it in writing and nobody improvises." },
    { n: "She opened the girls' chat. Forty messages up, *SNOW DAY*, and her own last message from nine days ago, *omw*, which hadn't been true. Hyein had already pasted the trip story under it in a block, with a lodge emoji she'd clearly had to search for." },
    { n: "Solar put her thumbs on the screen to type *memorized*, and her thumbs typed something else." },
    { glitch: 'epi-r-g-thumbs' },
    { n: "*tartarus tonight?* Lowercase, no capital, the way she'd sent it to a different group chat a hundred times, every night the air was right, to eight people and a dog. Her thumbs had done it on their own, quick and practiced, like a hand going for a light switch in a house you'd moved out of." },
    { n: "There was a little hiss in her ears, like a radio between stations. Then there wasn't." },
    { n: "She deleted it a letter at a time. Neither of them was looking at her screen. Hyein was talking about pancakes. Solar typed *memorized*, and sent it, and it went blue, and that was that." },
    { phone: [{ from: 'solar', t: "@solar: memorized" }, { from: 'hyein', t: "@hyein: 🫡🫡🫡" }, { from: 'hanni', t: "@hanni: pancakes in 10. nobody text her" }, { from: 'hyein', t: "@hyein: hanni shes IN THE ROOM" }], contact: 'hanni, hyein 🩷' },

    { ifYear: { xmas: 'haechan' }, then: [
      { n: "The coffee he'd brought was down to ice by the time she stood up. She drank the last of it anyway, the watery part, and didn't say anything when Hyein looked at the cup and then at her and then very obviously decided not to say anything either." }
    ], else: [
      { n: "Her phone buzzed again while Hanni was pulling her up by both wrists. Not the girls. A thread she hadn't opened in nine days and a year, sitting where it had always sat, three down from the top." },
      { ifYear: { rank: { haechan: 10 } }, then: [
        { phone: [{ from: 'haechan', t: "ur up. good. 5 min rule still applies" }], contact: 'haechanah' },
        { n: "Five minutes. She looked at it and knew exactly what it meant, a laundry room, a promise made on a dryer with the song running out and going back to the start on its own, and she felt it land somewhere under her sternum and stay there." },
        { choose: [
          { t: "(Type: go to hell)", then: [
            { phone: [{ from: 'solar', t: "go to hell" }, { from: 'haechan', t: "there she is" }], contact: 'haechanah' }
          ] },
          { t: "(Leave it on read.)", then: [
            { n: "She left it on read. He'd know what that meant too. He'd know it better than the message." }
          ] }
        ] }
      ], else: [
        { phone: [{ from: 'haechan', t: "ur back." }], contact: 'haechanah' },
        { n: "Two words and a period. He never used periods. She looked at it until Hanni physically took the phone out of her hand and put it in the pocket of Solar's own hoodie and zipped it." }
      ] }
    ] },
    { n: "Downstairs, somebody was burning the first pancake, which was traditional. The house was loud under her feet. The snow kept coming. It was, by any reasonable measure, a completely normal Monday, and she was going to walk around inside it all day like a girl in a borrowed coat, and nobody was going to know, and she was good at that. She'd always been good at that." }
  ] },

  // ───────────────────────────── 12/1, after class: five days ─────────────────────────────
  { id: 'epi-r-five-days', date: '12/1', slot: 'after', consumes: true, title: 'five days', place: 'Syracuse · Lecture Hall', time: 'After Class', scene: [
    { music: 'epi-r-return' }, // Novocaine: queen Solar's back on campus
    { n: "Statistics was in the big hall on the ground floor, the one with the bad heating and the good acoustics, three hundred seats bolted to the floor in a curve like a shell, and Solar sat where she always sat, two-thirds of the way up on the left, in the seat she'd picked in September for its view of the exit and nothing else." },
    { n: "The seat on her left was empty. It had a mark on the armrest where somebody's pen had gone through the laminate in October. The somebody had sat there every Monday and Wednesday since the first week, unasked, with two coffees and a running commentary about the professor's ties, and it had been easy, and she'd never once had to think about it, which was what easy cost." },
    { n: "He came in at four minutes past. Coat dusted with snow, hood down, earbuds in, the same backpack with the same frayed strap. He came up the stairs on the left the way he always came up them, two at a time, and at the row below hers he slowed, and looked at the seat with the pen mark, and looked at her." },
    { n: "It was maybe a second. It felt longer, the way a held note feels longer. His face did nothing at all, which was not a thing Mark's face did; Mark's face was always doing something, was always warm and moving and ready to laugh, and the stillness on it now was so unlike him that she almost didn't recognize it as his." },
    { n: "Then he went two rows down and sat on the aisle. He put his bag on the seat beside him. He took out a notebook. He didn't turn around." },
    { n: "She looked at the back of his neck for most of the lecture. The professor was talking about confidence intervals, about how a ninety-five percent interval didn't mean there was a ninety-five percent chance the truth was inside it, it meant that if you did the whole thing a hundred times you'd catch it about ninety-five, and that people got this wrong constantly, *constantly*, he said, tapping the board, because people liked to believe that being careful made them right." },
    { n: "She wrote it down. She didn't know why. Her pen kept stopping." },
    { n: "Mark remembered. She knew it the way she knew the stairwell in Alpha had a creaky fourth step. She didn't know how much, or from where, or whether he'd stood somewhere over there in the green and watched her and decided not to come any closer, but he remembered, and he'd walked past the seat, and she was grateful, and she hated that she was grateful, and she didn't look at the empty seat once for the rest of the hour, which took a surprising amount of effort." },
    { n: "When the hall emptied he went out the bottom door without looking up. She went out the top." },
    { n: "Her phone buzzed on the stairs." },
    { phone: [
      { from: 'suesports', t: "SUesports posted a photo." },
      { from: 'suesports', t: "FIVE DAYS TO REGIONALS ⏳ our overwatch roster heads downtown this saturday. coach says no visitors at practice, but the bracket's public 🧡 come loud" },
      { from: 'suesports', t: "oliviahye commented: LETS GOOOOOOO" },
      { from: 'suesports', t: "oliviahye commented: ok i was told to say that more professionally. lets go. 🧡" },
      { from: 'suesports', t: "minjibear commented: 🎥" }
    ], contact: '@SUesports · Instagram' },
    { n: "The photo was the five of them from October, before. Olivia mid-laugh. Haerin with her hands in her sleeves. Chenle looking slightly to the left of the camera like he'd been told where to look and disagreed. Minji, cap backwards. And her, in the middle, smiling the smile she used for photos, which was a very good smile, and which wasn't hers." },
    { n: "Five days. She put the phone away and went across campus to the Extracurricular Building in the snow, and didn't look up at the second floor windows when she went in, because she had things to do downstairs." },

    { place: 'Syracuse · eSports Lab', time: 'After Class' },
    { music: 'epi-r-team' },
    { n: "The lab smelled like it always smelled, warm plastic and somebody's energy drink and the faint ozone of a dozen machines that never really got turned off, and the RGB was cycling slowly through its colors on every keyboard like the room was breathing. Olivia was already there, loud, with a bag of clementines. Haerin was already there, quiet, peeling one. Minji was at her station with her cap frontwards, which meant it wasn't a game day, and which meant she'd thought about it." },
    { n: "Chenle was there too. He looked up when Solar came in, and held it a second, the specific second of a boy checking a number against a number, and then looked back at his screen and didn't say anything at all." },
    { n: "Doyoung was standing at the front with the clipboard. He did not say hello. He let her get all the way to her chair and put her bag down and sit before he spoke, which was a coaching technique, she was nearly sure, and it worked." },
    { s: 'doyoung', t: "Lee. Three remote practices. Monday the twenty-fourth, Tuesday the twenty-fifth, Saturday the twenty-ninth. Thursday I gave everyone. The other three I did not." },
    { s: 'doyoung', t: "Kim. Two. Tuesday and Saturday." },
    { s: 'doyoung', t: "The same Tuesday. The same Saturday." },
    { n: "Minji looked at her keyboard. Solar looked at the clipboard, because looking at Minji would have been a confession, and she could feel the whole room not looking at either of them, which was louder than looking." },
    { s: 'doyoung', t: "Zhong. One. We'll talk about yours Thursday." },
    { n: "Chenle said nothing. He didn't even nod. He sat with his hands flat on either side of his keyboard and waited for it to be over, which was, she'd learn later, the only thing he could think of to do that wasn't lying." },
    { s: 'doyoung', t: "Six years. I've had players miss for funerals. I've had a player miss for a wedding, his own, and he called in from the reception. Nobody's ever just stopped existing for a week." },
    { s: 'doyoung', t: "So. I'm going to ask once." },
    { choose: [
      { t: "There was a chapter retreat. No signal. I should have told you before I went. It won't happen again.", then: [
        { glitch: { strain: 1 } },
        { n: "She said it well. Too well. Doyoung looked at her over the clipboard for a long moment, the look of a man who'd watched ten thousand hours of footage and knew what a fake commit looked like." },
        { s: 'doyoung', t: "A retreat." },
        { s: 'doyoung', t: "Kim. Were you on the retreat?" },
        { s: 'minji', f: 'neutral', t: "...I'm not in a sorority." },
        { s: 'doyoung', t: "No. You're not." },
        { n: "He wrote something down. He didn't ask anything else. That was worse." }
      ] },
      { t: "I don't have a good answer. I'll make it up.", then: [
        { n: "He looked at her for a while. She held it. It was the most honest thing she'd said to anyone all day, and she was a little surprised by how much it cost, and how little." },
        { s: 'doyoung', t: "You'll make it up. Double VOD tonight. Both of you." },
        { s: 'minji', f: 'neutral', t: "That's fair." },
        { s: 'doyoung', t: "I didn't ask if it was fair." }
      ] },
      { t: "(Say nothing. Take it.)", then: [
        { n: "She didn't say anything. She sat there and let him look at her, the way she'd let her father look at her across a dinner table at fifteen, and waited for the look to finish being a look." },
        { s: 'doyoung', t: "Okay. Silence is an answer. It's just not one I can use." },
        { s: 'doyoung', t: "Double VOD. Tonight. Both of you." }
      ] }
    ] },
    { s: 'doyoung', t: "Five days. Headsets on. We're running the Hanamura set until I stop being angry." },
    { n: "They ran the Hanamura set for two hours. He did not stop being angry, and it didn't matter, because the work was the work and the work was good." },
    { n: "Her hands were different. She noticed it on the first fight and kept noticing. Not worse. Different. They knew where the weight of a thing sat, a long thing, a pole with a blade at the end of it, and some reflex in her wrists kept bracing for a swing that a mouse didn't need, and then remembering, and then not bracing, and somewhere in the second hour it stopped being something she noticed and started being something she used. Her kunai went where she sent them. Her Swift Steps were early and clean. She read the enemy Ana's sleep half a second before it left the gun and stood exactly where it would miss." },
    { s: 'olivia', t: "WHAT was that. Solar. What was THAT." },
    { s: 'haerin', t: "She moved before it fired." },
    { s: 'minji', f: 'happy', t: "She does that." },
    { n: "Minji didn't look over when she said it. She didn't have to. They'd been a duo for four months here and a whole year somewhere else, and the comms between them had gone so quiet and so exact that Olivia complained about it, loudly, during the water break, as if two people being good together was something they were doing on purpose to annoy her." },
    { stat: { proficiency: 1 } },
    { n: "Chenle said three things in two hours. All of them were callouts. All of them were right. Once, between maps, she caught him looking at her the way he'd looked when she came in, and when she met his eyes he looked at the ceiling, at the slow-cycling lights, as if he were counting them." }
  ] },

  // ───────────────────────────── 12/1, late: does she know ─────────────────────────────
  { id: 'epi-r-pale', date: '12/1', slot: 'late', title: 'does she know', place: 'Syracuse · Studio 4B · Hallway', time: 'Late Night', scene: [
    { n: "Double VOD review was exactly as fun as it sounded. By the time she and Minji had watched their own Tuesday from a week before Thanksgiving three times, at half speed, with Doyoung's notes open in a second window like a parole officer, it was twenty to midnight and the lab had gone quiet in the way only a room full of machines can, all fans and no voices." },
    { n: "Minji left first. Solar shut her station down, the long slow sigh of the tower fans winding off, and took the back stairs because they were closer, and because the front ones went past the trophy case, and she wasn't in the mood to look at her own face behind glass." },
    { n: "The back stairwell ran the whole height of the Extracurricular Building, cinderblock painted the color of weak tea, a window on every landing gone black with night. eSports on the ground floor. Music on the second. You could hear it sometimes from the lab, a bass line through the ceiling like somebody else's heartbeat, and she'd learned in October to stop hearing it, and she'd learned in November that she couldn't." },
    { n: "Somebody was coming down from the second floor." },
    { n: "She heard the door first, the heavy fire door with the bad hinge, and then footsteps, quick and light and uneven, a person taking stairs without paying attention to them, and then Chenle came round the landing above her with his hood half up and a plastic convenience-store bag still hanging from one hand, the handles knotted, untouched." },
    { n: "He stopped when he saw her. All of him stopped. He stood on the landing with his hand on the rail, and in the flat light of the stairwell his face was the color of the paint." },
    { s: 'solar', t: "Hey. You okay?" },
    { s: 'chenle', f: 'neutral', t: "Yeah." },
    { s: 'solar', t: "You're white." },
    { s: 'chenle', f: 'neutral', t: "It's December." },
    { n: "It was a good line. It was exactly the kind of thing he'd say, dry and precise and a little mean, and he said it without any of the pleasure he usually took in being right, as if he'd found the sentence lying on the stairs and picked it up because it was the nearest thing to hand." },
    { n: "He came down the rest of the flight. He held the door at the bottom open for her, out into the cold, and she went through, and he didn't follow. He stood there in the doorway with the bag in his hand, looking at her the way he'd looked at her in the lab, checking a number against a number and not liking either of them." },
    { s: 'chenle', f: 'serious', t: "Go home, Solar. It's late." },
    { n: "And he let the door shut. Not hard. Just all the way." },
    { n: "She stood on the step in the snow for a second with her hands in her pockets. Then she looked up, without meaning to, at the second floor, at the one window at the end that still had a light on. Studio 4B. She knew it the way she knew the fourth step in Alpha. Nobody was at the window. The light didn't move." },
    { n: "She walked home. She didn't ask. She was very good at not asking, when not asking was what she could afford." },
    { ifYear: { xmas: 'minji' }, then: [
      { n: "Halfway across the quad her phone buzzed in her pocket. Minji. A video file, thirty-one seconds, the lamp outside the honors dorm in the long gold light of four o'clock, and Solar under it, looking straight into the lens." },
      { phone: [
        { from: 'minji', t: "ok so this is going to sound insane" },
        { from: 'minji', t: "go to 0:19. frame by frame" },
        { from: 'minji', t: "is my camera dying or did you see anything weird when you were under there" }
      ], contact: 'minji' },
      { n: "She went to nineteen seconds and pressed the screen and dragged it, a frame at a time, her own face moving in stops like a flipbook. And there, one frame, one single twenty-fourth of a second, the whole picture was green. Not tinted. *Green.* The lamp dead. The sky gone the color of deep water. The dorm behind her with every window black. And her, in the middle of it, exactly the same, smiling the same smile, as if she hadn't noticed the world had stopped around her." },
      { n: "The next frame it was gold again." },
      { phone: [{ from: 'solar', t: "nope. probably the camera" }, { from: 'minji', t: "yeah. probably" }, { from: 'minji', t: "im keeping it though" }], contact: 'minji' }
    ] },

    // The act's only cutaway: close on Chenle, not Solar.
    { place: 'Syracuse · Studio 4B', time: 'Late Night' },
    { n: "Twenty minutes earlier, Chenle had come up the back stairs with a bag of food, because it was Monday, and Monday was one of the days." },
    { n: "He didn't call it anything. If you called it something it became a program, and if it became a program somebody would have to be in charge of it, and Haechan would rather eat glass than be in a program. So Chenle didn't call it anything. He just came up on Mondays and Thursdays with a convenience-store bag, and put it on the desk, and sat on the broken couch for exactly as long as it took Haechan to eat at least half of whatever was in it, and kept count of other things while he waited. Bottles in the bin. Which ones. How many minutes before Haechan looked at his phone. Whether his hands were steady on the faders. He'd never once said any of the numbers out loud. He just kept them, the way you keep a score." },
    { n: "Tonight the door of 4B was propped open with a mic stand base and the room was too warm and Haechan was at the desk with his back to the door and his headphones off, on his neck, and the monitors were up. Not loud. Just up. A track was playing." },
    { n: "Chenle had heard it before. Pieces of it. Through doors, through floors, the same eight bars looped until even he could have hummed them. He'd never heard it like this. It had a body now. It had a second half. He stood in the doorway with the bag in his hand and listened to it go somewhere, build, open out, and he thought, with the part of his brain that never shut off, that the mix was good, that the low end was finally sitting right, that whatever Haechan had done to the bridge was correct." },
    { n: "And then, under the second half, faded in so carefully you'd think it was a synth pad, a room, somebody breathing, there was a voice." },
    { n: "Four nights a week, for four months, that voice had been in his ear. In a headset. Calling cooldowns, calling positions, *suzu's up, I've got you, step to me*. He knew the little breath it took before a callout. He knew the exact way it went up at the end when it was being nice to Olivia. He knew it the way he knew the sound of his own keyboard." },
    { n: "It was singing." },
    { n: "Chenle didn't move. The bag hung from his hand. The track kept going, and the voice kept going under it, soft, close, a girl singing in a small room to one person, not knowing, and every hair on Chenle's arms stood up at once." },
    { s: 'chenle', f: 'surprised', t: "Hold on. Isn't that—" },
    { n: "Haechan's hand went to the fader. Not fast. Not slow, either. It pulled the voice down until it was gone, and then pulled the whole track down, and the room was just the hum of the monitors, and the radiator, and the two of them." },
    { n: "He didn't turn round. Chenle watched the back of his head. Watched his shoulders not move. Watched his hand stay on the fader, flat, like he was holding something down that wanted to come back up." },
    { n: "Chenle had a lot of things he could have said. He'd watched a year of this. He'd watched two years. He'd sat on that couch and counted bottles and never once said a number out loud, because he'd decided that the counting was his business and the drinking was Haechan's and the line between them was the only thing keeping him in the room. He could have said any of it. He'd had it ready, honestly, for months." },
    { n: "He said one thing." },
    { s: 'chenle', f: 'serious', t: "Does she know?" },
    { n: "The radiator knocked. The monitors hummed their flat, patient note. Haechan's hand stayed on the fader." },
    { ifYear: { rank: { haechan: 10 } }, then: [
      { s: 'haechan', f: 'neutral', t: "...I told her there's something in it." },
      { n: "Chenle waited. That was the whole of his answer: waiting, while the sentence Haechan had just said sat in the warm room and got smaller and smaller until even Haechan could see how small it was." },
      { s: 'haechan', f: 'serious', t: "No. She doesn't know." }
    ], else: [
      { s: 'haechan', f: 'neutral', t: "She—" },
      { n: "And nothing. He stopped. Chenle had never once in two years heard him stop in the middle of a sentence; he finished them, every one, flat and complete, especially the cruel ones. This one he left lying there, and Chenle looked at it, and understood that it didn't have an end that Haechan could say out loud." }
    ] },
    { n: "Chenle put the bag on the desk. Next to the keyboard, where it would be in the way, where he'd have to move it to work. He didn't sit on the couch." },
    { n: "He went out. He went down the stairs too fast, without paying attention to them, and on the last flight he came round the corner and she was there at the bottom, by the door, with her bag on her shoulder and her coat half zipped, and the only thing he could think, the only number his brain would give him, was that she'd been on the other side of one ceiling the whole time." }
  ] },

  // ───────────────────────────── 12/2, morning: the emergency vacation ─────────────────────────────
  { id: 'epi-r-cover', date: '12/2', slot: 'early', title: 'the emergency vacation', place: 'Syracuse · Alpha Phi House · Kitchen', time: 'Morning', scene: [
    { n: "The Alpha kitchen at seven forty-five on a Tuesday was the most crowded room in central New York. Somebody's smoothie was screaming in the blender. Somebody else had left a pan of eggs on the stove and gone upstairs. Two girls from her pledge class were arguing about a sweater in the doorway, a third was asleep on the counter with her head on a dish towel, and the radio on top of the fridge was playing a Christmas song at a volume nobody had agreed to." },
    { n: "Solar came in for sparkling water, which was what she drank in this kitchen in the morning and had drunk every morning since August, and which she'd forgotten she drank until her hand went to the fridge door on its own." },
    { n: "Danielle was at the island." },
    { music: 'epi-r-danielle' },
    { n: "Of course she was. Sitting very straight on one of the tall stools with her coffee in front of her and her laptop open to a spreadsheet, curly hair perfect at seven forty-five, the sleeves of her sweater pushed up exactly the same distance on both arms. Beside the laptop, on its strap, coiled neatly like a sleeping cat, a camera. An old one. Film. The lens cap was on." },
    { n: "Solar had never seen Danielle with a camera before. She looked at it a beat too long, and Danielle let her, and then looked up from the spreadsheet with the smile she'd clearly had ready since the front door opened." },
    { s: 'danielle', f: 'happy', t: "Solar. You're back." },
    { s: 'danielle', f: 'neutral', t: "Everyone's been asking." },
    { n: "The kitchen didn't go quiet, exactly. Kitchens like this never went quiet. But the girl with the sweater stopped arguing, and the blender stopped, because its smoothie was done, and in the space where the noise had been, Solar heard Hanni's slippers on the stairs, fast, and Hyein's behind them, faster." },
    { s: 'danielle', f: 'neutral', t: "People are saying there was another joint trip. With Sigma. So exclusive not even the whole chapters were invited." },
    { s: 'danielle', f: 'happy', t: "Which is fun. I just think it's funny, as treasurer, that I never saw an invoice." },
    { n: "Hanni came into the kitchen in her strawberry pajamas and a fleece with her hair in a claw clip and a face like she'd been woken by a fire alarm and come down to find the fire making itself a coffee. Hyein was behind her. Hyein had a mug, and was holding it like a weapon." },
    { s: 'hanni', f: 'neutral', t: "It was Sigma's. They booked it. You'd have to ask Yuta." },
    { s: 'danielle', f: 'neutral', t: "Then Yuta would have an invoice." },
    { s: 'hyein', f: 'serious', t: "It was an emergency vacation. You don't invoice an emergency." },
    { s: 'danielle', f: 'happy', t: "You do, actually. That's most of what an emergency is. Paperwork." },
    { n: "Somebody at the stove laughed and turned it into a cough. Hanni's ears went pink. Hyein opened her mouth, and Hanni put a hand on her arm without looking at her, and Hyein shut it again." },
    { n: "Danielle turned her coffee cup a quarter turn on the counter, a small precise motion, and looked at Solar over it, because the girls were the defense and she'd never cared about the defense." },
    { s: 'danielle', f: 'neutral', t: "Was it nice? The lodge? Nine days with no signal. I'd go insane. I'd want to know what everyone was saying about me." },
    { choose: [
      { t: "It was beautiful. A lodge upstate, a fireplace, terrible Wi-Fi and no signal at all. I'd go back tomorrow.", then: [
        { glitch: { strain: 1 } },
        { n: "It came out easy and warm and specific, and she watched it go across the island and land, and watched Danielle catch it in both hands and turn it over, and felt the back of her neck go tight and cold, the way it had in her room yesterday, like a hand pressed flat there and kept pressing." },
        { n: "She was her father's daughter. She knew exactly how to make someone believe the shape of a thing. She'd been doing it since she was nine, at dinners, to men who owned buildings. She'd sworn, in a whole other life, that she'd stop." },
        { s: 'danielle', f: 'happy', t: "A fireplace. That's lovely." },
        { s: 'danielle', f: 'neutral', t: "You should write down which lodge. For the records." }
      ] },
      { t: "Some people like not knowing what's being said about them. It's restful.", then: [
        { n: "Hyein made a small, involuntary, delighted noise into her mug. Danielle's smile didn't move at all, which on her was the same as a flinch." },
        { s: 'danielle', f: 'neutral', t: "Restful. Hm." },
        { s: 'danielle', f: 'happy', t: "Everyone's on a timeline, Solar. Some of us just read faster." }
      ] },
      { t: "(Get the water. Say nothing.)", then: [
        { n: "She got the water. She opened it at the fridge, and the hiss of it was very loud in the kitchen, and she drank half of it standing there with her back to the island, and let Danielle look at her back, which she'd learned a long time ago was the one part of you that couldn't give anything away." },
        { s: 'danielle', f: 'neutral', t: "Okay. Keep your secrets." },
        { s: 'danielle', f: 'happy', t: "Everyone does, eventually. For a while." }
      ] }
    ] },
    { s: 'hanni', f: 'serious', t: "Where were you on the twenty-ninth, Danielle? Saturday night. After the game." },
    { n: "It was a good question. It was a dangerous question. Solar saw Hanni know that as she said it, and say it anyway, chin up, the Social Chair's voice she used on boys who wouldn't leave at two in the morning." },
    { n: "Danielle closed her laptop. She did it slowly, all the way, until it clicked. She picked up the camera by its strap and put it over her shoulder and stood, and pushed the stool in, square to the island, the way you'd leave a desk you expected to come back to." },
    { s: 'danielle', f: 'neutral', t: "Watching the game. Like everyone." },
    { n: "She went past them toward the stairs. And at the doorway, on her way out, she stopped beside Solar, close enough that the girl at the stove couldn't hear, close enough that Solar could smell her perfume, something clean and expensive and cold, and said one more thing, pleasantly, low, without turning her head." },
    { ifYear: { noFlag: 'arrived-danielle' }, then: [
      { s: 'danielle', f: 'neutral', t: "You never saw me there. I saw you." }
    ], else: [
      { s: 'danielle', f: 'neutral', t: "Last time I saw you, you were in a uniform. It suited you. You looked like someone with a curfew." }
    ] },
    { n: "Then she was on the stairs, and gone, and the radio on the fridge was still playing its Christmas song, and the blender started up again, and nobody in the kitchen except the three of them had heard a single word." },
    { s: 'hyein', f: 'surprised', t: "What did she say. What did she just say to you." },
    { s: 'solar', t: "Nothing." },
    { s: 'hanni', f: 'sad', t: "Sol." },
    { s: 'solar', t: "She said nothing. Nothing I can do anything with." },
    { n: "Which was true, and which was also the worst thing about Danielle Marsh: everything she said was true, and nothing she said could be used, and she always left before you'd worked out which one was the knife." },

    { place: 'Syracuse · Alpha Phi House', time: 'Morning' },
    { music: 'epi-r-home' },
    { n: "Her phone rang on the porch at eight-fifteen, which was the time her father's office made calls, because eight-fifteen was when people were at their desks and not yet in meetings. She'd gone out to get away from the kitchen. The porch was white, the steps buried, the snow on the railing an untouched inch thick, and the cold went straight through her socks and her hoodie and into her, clean and total, and she was glad of it." },
    { n: "It was Ms. Han's number. It was always Ms. Han's number." },
    { n: "*Good morning, Solar. Please hold for your father.* Warm, efficient, a voice that had booked a thousand cars and never once been late. Then a click, and a small particular silence, the silence of a phone being handed across a large desk in a high room in Manhattan." },
    { s: 'dad', t: "Solar." },
    { s: 'solar', t: "Hi, Dad." },
    { s: 'dad', t: "You're well." },
    { n: "It wasn't a question. Her father didn't ask questions on the phone; he made statements and let you correct them, and the correcting was the part he listened to." },
    { s: 'solar', t: "I'm well." },
    { s: 'dad', t: "Good. Your mother will be glad. She held the Foundation dinner without you, on the twenty-fourth. She told the table you had food poisoning. She chose oysters. She thought it was believable." },
    { s: 'dad', t: "Thanksgiving was your mother, and me, and a great deal of silver. Your brother was with his team. I don't need to tell you how that looked." },
    { n: "He didn't. Her body told her. A table on the Upper East Side, the good silver, her chair, empty, with a place card on it in her mother's handwriting, and nobody moving it." },
    { s: 'dad', t: "Ms. Han called the Dean of Students on the twenty-fifth. The Dean was very helpful. The Dean told us there was no university-sanctioned travel for either chapter over the break. Then the Dean told us that private chapter retreats are not always registered. Then the Dean asked if we'd like to speak to someone in counseling." },
    { s: 'dad', t: "Ms. Han asked for the trip's insurance waiver. Any trip with members of a recognized chapter needs one. There isn't one." },
    { n: "There it was. Not *I don't believe you.* He'd never say that. He'd lay out the facts in order on the table between you, neat as cutlery, and let you watch them, and wait for you to be the one to say it." },
    { choose: [
      { t: "It was a private retreat, Dad. A lodge, no signal. The chapter didn't file it because it wasn't official. I'm sorry I scared everyone.", then: [
        { glitch: { strain: 1 } },
        { n: "She said it the way he'd taught her. She heard it come out of her in his own cadence, warm, regretful, firm on the facts and soft on the feelings, the exact register he used when he was explaining a quarter to a board, and there was a pause on the line that went on long enough for her to know he'd heard it too." },
        { s: 'dad', t: "That's very good." },
        { n: "He didn't mean the story. He meant the delivery. He said it like a man looking at something he'd built." },
        { s: 'dad', t: "Your brother says he doesn't know where you were. Your brother has never once in his life not known where something was." }
      ] },
      { t: "I'm safe. That's what I can tell you right now.", then: [
        { n: "The pause this time was different. Longer. She'd never once said *right now* to her father; it was an admission that there was a later, and he'd built an entire company on noticing when people said *right now*." },
        { s: 'dad', t: "Right now." },
        { s: 'dad', t: "All right. Then I'll ask you something else, and I'd like the true answer. Was anyone hurting you?" },
        { s: 'solar', t: "No. Nobody was hurting me." },
        { n: "It was true. It was the truest thing she'd told anyone since she got back. Nobody had hurt her. She'd spent a year in a dormitory by the sea with eight people and a dog who'd have died for her, and very nearly had, several times, at midnight, in a tower." },
        { s: 'dad', t: "...Good." }
      ] }
    ] },
    { s: 'dad', t: "I've told your mother it was a retreat. She's chosen to believe me. I would like you to make that worth something." },
    { s: 'dad', t: "Ms. Han will send you the dates for the break. You'll confirm them by Friday. Not at three in the morning, Solar. During business hours." },
    { n: "Her stomach dropped through the porch. *Confirm the travel, pretty.* A field, a leaning tree, the small hours of a Wednesday in November. He couldn't know. Of course he couldn't know. It was just the kind of thing her father would know without knowing, which had always been the most frightening thing about him." },
    { s: 'solar', t: "I'll confirm them." },
    { s: 'dad', t: "Good. Eat something. You sound thin." },
    { n: "The line went to Ms. Han, and Ms. Han said *have a lovely day, Solar,* and meant it, and the call ended, and Solar stood on the white porch in her socks with the phone cold against her ear for a long time after it had gone quiet." },
    { n: "A text came in while she was still standing there. Her mother. Three words, no punctuation, which was how her mother texted when she'd been crying and didn't want you to know it." },
    { phone: [{ from: 'mom', t: "we missed you" }], contact: 'Mom' },
    { n: "She went in. She put her socks on the radiator. She didn't answer it until lunch, and when she did she sent a heart, because a heart couldn't lie, and because it was the only thing she had that wasn't a story." }
  ] },

  // ───────────────────────────── 12/2, late: the ask ─────────────────────────────
  { id: 'epi-r-ask', date: '12/2', slot: 'late', title: 'the ask', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
    { n: "Eleven fifty. Her desk lamp on, the rest of the room dark, snow ticking at the window in small dry handfuls like somebody throwing rice. Statistics homework open on the laptop, done, which was a lie she was telling the laptop. The bag from the trip was on the floor of the closet, zipped, where it had been since she got back, and she'd walked around it nine times today without opening it." },
    { n: "Her phone lit up face down on the desk. She knew who it was before she turned it over, which she'd stopped finding strange in about April." },
    { ifYear: { rank: { haechan: 10 } }, then: [
      { phone: [
        { from: 'haechan', t: "u up" },
        { from: 'haechan', t: "i owe u something. i said id pay it" },
        { from: 'haechan', t: "not a studio. not my room. not anywhere u cant leave" },
        { from: 'haechan', t: "u pick where. u pick when. ill be there" }
      ], contact: 'haechanah' }
    ], else: [
      { phone: [
        { from: 'haechan', t: "u up" },
        { from: 'haechan', t: "theres one more thing. i should have said it with the rest of it. i didnt" },
        { from: 'haechan', t: "not a studio. not my room. not anywhere u cant leave" },
        { from: 'haechan', t: "u pick where. u pick when. ill be there" }
      ], contact: 'haechanah' }
    ] },
    { n: "She read it twice. The second time she noticed what it wasn't. It wasn't *come here.* It wasn't *sigma fri, you'll be there*, a declaration dressed up as an invite. It wasn't a time and a place already decided and handed to her like a ticket. There was no question mark anywhere in it and it was still, somehow, the most question he'd ever sent her." },
    { n: "Her stomach had done something on the first read that she was ignoring. Her hands were cold. She tucked them under her thighs on the desk chair, and then took them out again, because she needed them to type." },
    { phone: [{ from: 'solar', t: "is this the thing ur sorry about" }, { from: 'haechan', t: "its the thing im sorriest about" }, { from: 'haechan', t: "i know how that sounds. given everything" }], contact: 'haechanah' },
    { n: "Given everything. A girl with a famous father and a recording she never agreed to. A boy who'd made it. He'd told her that himself, all of it, in a voice with no performance left in it, and she'd believed every word, and that had been the worst part, how easy it had been to believe him." },
    { n: "And there was still something worse than that, apparently. Or something he thought was worse. Which was its own kind of information." },
    { s: 'solar', t: "...Tomorrow. Evening. Somewhere with a door I can walk out of." },
    { n: "She said it out loud, to the empty room, to hear what it sounded like. It sounded like somebody else, somebody steadier. She decided to borrow her." },
    { choose: [
      { t: "(The Hall of Languages. A seminar room, third floor.)", flag: 'epi-r-room-hl', then: [
        { phone: [{ from: 'solar', t: "hall of languages. 3rd floor seminar room. the one at the end. 7" }, { from: 'haechan', t: "ok" }, { from: 'haechan', t: "ill be there at 7. not before. u can sit by the door" }], contact: 'haechanah' },
        { n: "A room with a long table and a door with a window in it, where you could see the hall, and the hall could see you. Neutral ground. A room that belonged to nobody, to the university, to whatever seminar had left half a proof on the whiteboard. She'd sit by the door. He'd already said so. She hated that he'd already said so." }
      ] },
      { t: "(The café on Marshall Street. The back table.)", flag: 'epi-r-room-cafe', then: [
        { phone: [{ from: 'solar', t: "the cafe on marshall. back table. 7" }, { from: 'haechan', t: "ok" }, { from: 'haechan', t: "their coffee is bad but its less bad than the rest" }, { from: 'haechan', t: "7" }], contact: 'haechanah' },
        { n: "Public enough. People, noise, an espresso machine screaming every ninety seconds, a whole street of strangers on the other side of the window who had no idea who either of them were and didn't care. She could leave whenever she wanted. She could leave in the middle of a sentence and it would just look like a girl who'd remembered somewhere to be." }
      ] },
      { t: "(Bird Library. A group study room.)", flag: 'epi-r-room-library', then: [
        { phone: [{ from: 'solar', t: "bird. i'll book a group room. 7" }, { from: 'haechan', t: "ok" }, { from: 'haechan', t: "its going to be under ur name right" }, { from: 'solar', t: "obviously" }, { from: 'haechan', t: "good. 7" }], contact: 'haechanah' },
        { n: "A glass room on the fourth floor with her name on the reservation slip taped to the door. Hers, for two hours, booked through a university portal, logged somewhere. Quiet enough to hear him. Glass enough that she'd never be alone with him in any way that counted. She booked it at 11:58 PM, and the confirmation came back with a little cartoon owl on it, and she looked at the owl for a very long time." }
      ] }
    ] },
    { n: "She put the phone face down. She turned off the lamp. She lay in the dark with the snow going at the window and her hands on her stomach, and the bag in the closet, zipped, and the song in her head, still, low and patient, that she knew the end of now, and she didn't sleep for a long time." },
    { n: "Somewhere under the middle of the song there was something she still couldn't name. She'd heard it once, on one side of a pair of heavy black headphones, in a laundry room in another world, and felt him watch her not name it." },
    { n: "Tomorrow, he was going to name it for her. She already knew she wasn't going to like it. That was the only thing about tomorrow she was sure of." }
  ] },

  // ───────────────────────────── 12/3, after class: did you eat ─────────────────────────────
  { id: 'epi-r-did-you-eat', date: '12/3', slot: 'after', consumes: true, title: 'did you eat', place: 'Syracuse · eSports Lab', time: 'After Class', scene: [
    { n: "Wednesday wasn't a practice day, which was the whole reason Doyoung had given her the lab key and a list. Opponent VODs, four teams, every map they'd played in the fall, with a note on top in his small neat handwriting that said *supports. what do they do when they're scared.* It was the most interesting homework she'd ever been assigned." },
    { n: "She'd been at it for three hours. The lab was dim and empty and warm, all fans and slow-cycling lights, and she had a legal pad half full of notes and a sandwich from the vending machine she'd taken one bite of at noon and then forgotten in a drawer." },
    { n: "Somebody knocked on the glass." },
    { n: "Not the door. The glass. Two knocks, flat, measured, the knock of somebody who'd been taught that doors were for people who'd been invited and glass was for people who wanted to be seen first." },
    { n: "Jaehyun was standing in the hallway in a team-issue quarter-zip and a Syracuse beanie, a gym bag over one shoulder, his hair still wet from a shower, one hand in his pocket. He looked like he'd come from treatment. He looked tired the way only he ever looked tired, everywhere except his face." },
    { n: "She let him in. He came in and looked around the lab once, the whole room, every station, the way he looked at every room, reading it. Then he looked at her." },
    { s: 'jaehyun', f: 'neutral', t: "Did you eat." },
    { n: "No question mark. There had never been a question mark on it. It was the first thing he'd said to her after every bad thing since she was eleven, and she'd always hated it, and it went into her now like warm water." },
    { s: 'solar', t: "...There's a sandwich in the drawer." },
    { s: 'jaehyun', f: 'neutral', t: "Is there a bite out of it?" },
    { s: 'solar', t: "One." },
    { s: 'jaehyun', f: 'neutral', t: "Get your coat." },

    { place: 'Syracuse · Marshall Street', time: 'Afternoon' },
    { music: 'epi-r-home' },
    { n: "He took her to the noodle place on Marshall Street with the steamed-up windows, the one that was always too warm and smelled like star anise and wet wool, and ordered for both of them without asking, and she let him, which was a measure of how tired she was. He sat with his back to the wall. He always sat with his back to the wall. She sat across from him and watched him move his right shoulder very carefully when he took his coat off, a slow, tested movement, and then pretend he hadn't." },
    { n: "The season was over. Boston College, the twenty-ninth, at home, the last game; she'd seen the final score on a group chat a week late, and she'd felt proud and far away at the same time, which was how she'd always felt about his games. He'd walked off that field and showered and gone, that night, somewhere he couldn't have explained to a single person in that locker room. She didn't know how. She didn't ask. He didn't say." },
    { s: 'jaehyun', f: 'neutral', t: "You remember." },
    { s: 'solar', t: "Everything. You?" },
    { s: 'jaehyun', f: 'neutral', t: "A dormitory. A dog. My little sister leading eight people into a tower at midnight with a weapon taller than her." },
    { s: 'jaehyun', f: 'happy', t: "You ate badly there, too." },
    { n: "She laughed. It surprised both of them. He looked down at the table, at his chopsticks still in their paper, and something in his face that had been held tight since he came to the glass let go, very slightly, the way a fist lets go when the person attached to it decides you're not going anywhere." },
    { s: 'jaehyun', f: 'neutral', t: "Dad called me on the twenty-fifth. I told him I didn't know where you were." },
    { s: 'jaehyun', f: 'neutral', t: "It was true. For four days it was the truest thing I'd ever said to him." },
    { n: "The noodles came. He pushed hers toward her an inch. She ate, because he was watching her, and because she was, it turned out, starving." },
    { n: "She ate half the bowl before she said it. She'd been planning to say it for three days, in different rooms, in different orders, and none of them had been a noodle place on Marshall Street with her brother's wet hair dripping onto his collar." },
    { s: 'solar', t: "Last year. The girl. The one Mark dated." },
    { n: "He didn't move. He'd known it was coming; she watched him have known. Pre-snap. He'd read it in the way she'd held her chopsticks." },
    { s: 'solar', t: "Mark has a version. He's told me his version. I want to know what you actually know. Not what you think. What you know." },
    { s: 'jaehyun', f: 'serious', t: "Okay." },
    { s: 'jaehyun', f: 'serious', t: "Mark wasn't the injured party. Whatever he's told you. He dated her, and he pushed her to use her father for him, and when she said no he pushed harder. There were messages. The Dean had them. I sat across a table from them. That's why the university moved. Not a rumour. Not a post. A file." },
    { s: 'jaehyun', f: 'neutral', t: "He lost the part of his scholarship that came with the contacts. He got off light. I thought so then. I think so now." },
    { n: "She'd known. She'd known since a cold night in a tent with somebody's audio playing tinny out of a phone, since a boy on a step had told her the rest of it without making himself any better in the telling. It was still different, hearing it in her brother's voice. Flat facts on a table, neat as cutlery, the way their father laid them out. It was a family trait, apparently. She'd have to think about that, later." },
    { s: 'solar', t: "And Haechan." },
    { s: 'jaehyun', f: 'neutral', t: "What about him." },
    { n: "She looked at him. He looked back. And she understood, with a cold drop in her stomach, that he didn't know. Not Haechan's part. Not the recording, not who'd made it. He knew Mark was guilty and he'd assumed, the way everybody assumed, that guilt was a thing only one person could hold at a time." },
    { n: "It wasn't hers to tell. It was the worst thing she knew about anyone, and it wasn't hers." },
    { s: 'solar', t: "Nothing. Just. Mark lying doesn't make anybody else a good person." },
    { s: 'jaehyun', f: 'serious', t: "No. It doesn't." },
    { s: 'jaehyun', f: 'serious', t: "I'm not going to sit here and tell you Lee Donghyuck's a good person because Mark lied about him. I don't know what he is. I know what he was in my living room. I'm not giving him a reference." },
    { s: 'solar', t: "I didn't ask you to." },
    { s: 'jaehyun', f: 'neutral', t: "You were about to." },
    { n: "She hadn't been. She'd been about to do something worse, which was ask him whether a person could be the worst thing they'd done and also the one who'd held on to her in the dark when everything else let go. She didn't. He didn't know about the dark. He didn't need to. She ate a noodle instead, aggressively." },
    { s: 'solar', t: "Danielle. Did she post the pictures? Of the girl?" },
    { s: 'jaehyun', f: 'neutral', t: "I don't know." },
    { s: 'jaehyun', f: 'serious', t: "I think so. I've thought so for a year. I can't prove it, and I don't say things I can't prove. So I'm not saying it." },
    { s: 'jaehyun', f: 'neutral', t: "She noticed I was gone, by the way. Saturday night. She asked Johnny on Monday where I'd been after the game. Johnny said bed. She wrote it down." },
    { s: 'solar', t: "She was gone too." },
    { n: "He looked at her for a long moment. Then he nodded, once, slowly, like a man filing a play he'd watch on film later, and didn't ask how she knew." },
    { n: "The waitress came and refilled the water. Somewhere across the room, at a table of guys in Syracuse hoodies, somebody said Jaehyun's name, not loud, the way people said it on this campus, like it was a weather condition, and he didn't turn around." },
    { s: 'solar', t: "Are you going? In April. The draft." },
    { n: "It came out of her sideways. She'd meant to ask it a different way, or never. He moved the right shoulder again, carefully, and looked at it, like it was the one who'd asked." },
    { s: 'jaehyun', f: 'neutral', t: "Somebody's front office called Coach on Monday. They want to know if I'm declaring." },
    { s: 'jaehyun', f: 'neutral', t: "I'm not. I'm coming back. Senior year." },
    { s: 'solar', t: "Dad?" },
    { s: 'jaehyun', f: 'happy', t: "Dad's very proud of a decision I made." },
    { n: "He said it dry. But he meant it, too, she could see him mean it, and she could see him know exactly what it was: that he loved a thing, really loved it, and the thing he loved happened to sit right inside the lines their father had drawn, so loving it cost him nothing at all at home. She'd never once had that. She was proud of him anyway. The two feelings sat side by side in her chest like strangers on a train, very politely not touching." },
    { s: 'jaehyun', f: 'neutral', t: "I want the year. I'd like to finish something before somebody else decides what it was." },
    { n: "He paid. Of course he paid. Outside the snow had stopped and the light had gone flat and blue, and the street was all slush and taillights. She checked the time on her phone. Five forty. She checked it again, which she hadn't meant to do." },
    { s: 'jaehyun', f: 'neutral', t: "You've got somewhere to be at seven." },
    { s: 'solar', t: "How do you—" },
    { s: 'jaehyun', f: 'neutral', t: "You've checked the time twice since we sat down and you put your coat on before I'd stood up." },
    { n: "He read the field. That was what he did. He'd read it his whole life, early and right, and then he'd always, always called the play himself and sent ten people to run it without asking a single one of them what they thought. She waited for him to call it." },
    { n: "He didn't. He stood on the sidewalk on Marshall Street with his hands in his pockets and his breath going up white, and looked at her, and she watched him decide something, which on him looked like nothing at all." },
    { s: 'jaehyun', f: 'neutral', t: "...What do you need from me." },
    { n: "Nobody in her family had ever asked her that. Not once, not in that order. She stood there with her mouth slightly open, feeling it land." },
    { s: 'solar', t: "Nothing. Honestly. Nothing." },
    { s: 'jaehyun', f: 'neutral', t: "Okay." },
    { s: 'jaehyun', f: 'happy', t: "You won't call. But the offer stands." },
    { bond: { jaehyun: 1 } },
    { n: "He walked off toward the hill and the football complex with his bag over the good shoulder. She watched him go until the snow and the dark took him. He didn't look back. He never looked back. He'd told her once, in another world, that he looked where people were going, not where they'd been, and she'd thought it was the coldest thing she'd ever heard, and she understood now it was the warmest thing he knew how to say." }
  ] },

  // ───────────────────────────── 12/3, evening: the recording ─────────────────────────────
  { id: 'epi-r-confession', date: '12/3', slot: 'evening', consumes: true, title: 'the recording', time: 'Evening', scene: [
    { music: 'epi-r-confession' },
    { ifFlag: 'epi-r-room-hl', then: [
      { place: 'Syracuse · Hall of Languages', time: 'Evening' },
      { n: "The third-floor seminar room at the end of the hall had a long scarred table, twelve chairs, a radiator that clanked like a ship's boiler, and somebody else's half-erased proof on the whiteboard, a long loose chain of symbols that ended in a box and a question mark. The door had a narrow window in it. Through it you could see the empty corridor, and the stairwell, and the exit sign glowing red at the end." },
      { n: "He was already there. Not early-early. Exactly on time, which for him was early. Sitting at the far end of the table, the end furthest from the door, with his coat still on and his hands flat on the wood in front of him like he was showing her they were empty." },
      { n: "She took the chair nearest the door. She didn't take her coat off either." }
    ], else: [
      { ifFlag: 'epi-r-room-library', then: [
        { place: 'Syracuse · Bird Library', time: 'Evening' },
        { n: "The group study room on the fourth floor was a glass box with a whiteboard and four chairs and a table with somebody's initials carved into it in 2009. Her name was on the reservation slip taped to the door. *LEE, S. 7:00-9:00 PM.* Two hours, hers, logged. Through the glass, the stacks went on in long quiet rows under the hum of the lights, and a boy in a hoodie was asleep on a carrel two aisles down with his face on a textbook." },
        { n: "He was outside the room when she got there. Not in it. Standing by the door, beside her name, with his coat on and his headphones round his neck, waiting for her to open it. He hadn't gone in. It was her room." },
        { n: "She opened it. He went in after her and took the chair furthest from the door, and she took the one nearest, and the glass door hissed shut behind them on its slow hinge." }
      ], else: [
        { place: 'Syracuse · Marshall Street · Café', time: 'Evening' },
        { n: "The café on Marshall Street at seven was half full and very loud: the espresso machine screaming, chairs scraping, a girl at the counter spelling her name for the third time, a playlist of soft acoustic covers nobody was listening to. The windows had fogged from the inside. Outside, the street was blue and white and full of people going places who would never once think about the two of them." },
        { n: "He was at the back table. Corner, back to the wall, coat on. He'd taken the chair that faced the room so she could have the one that faced the door. She noticed that. She noticed she'd noticed it." }
      ] }
    ] },
    { n: "There was a drink on her side of the table. Of course there was. Pink, cold, sweating a ring onto the wood. Not coffee, because she didn't drink coffee at night, and he'd never once asked her that, he'd just known it, the way he knew everything about her that she'd never said to him." },
    { n: "She didn't touch it. He watched her not touch it and didn't say anything, which meant he'd known she wouldn't, and had brought it anyway, which was the most him thing in the world and made her want to throw it at the wall." },
    { n: "His laptop wasn't out. She noticed that, too. No laptop, no headphones on, no phone on the table. Nothing that could play anything. He'd made sure of it. He'd come with his hands empty and he was keeping them where she could see them." },
    { n: "He looked at her. Flat. Then not." },
    { s: 'haechan', f: 'serious', t: "Solar." },
    { n: "Her name. Not *princess.* Not *pretty.* She could count on one hand the number of times he'd said it like that, with nothing in front of it, no performance, nowhere to hide, and every single time something had been about to end." },
    { s: 'haechan', f: 'serious', t: "I'm going to say it all at once. If I stop I'll start making it sound better than it is." },
    { s: 'solar', t: "Then don't stop." },
    { s: 'haechan', f: 'neutral', t: "The night you came upstairs. My room. I gave you the headphones and you heard the track and I asked you to sing, and you did." },
    { s: 'haechan', f: 'neutral', t: "You asked if I was recording. I said no." },
    { s: 'haechan', f: 'serious', t: "I was." },
    { n: "The radiator, or the espresso machine, or the hum of the lights, something in the room made a sound, and she didn't hear it. She heard her own pulse. She felt her hands go flat on the table, both of them, and press, the way you press on a floor that's moving." },
    { s: 'haechan', f: 'serious', t: "I kept it. The stem. Just your voice, on its own. It's in the track. Under the second half. I faded it in under everything so it sits where you'd think it was a pad." },
    { s: 'haechan', f: 'neutral', t: "After the tournament I turned it up. Two dB." },
    { s: 'haechan', f: 'flustered', t: "...I don't know why I'm telling you the number." },
    { n: "He did know. She watched him know. He was telling her the number because the number was the worst part, because it was the part where it had stopped being something he'd done once in a dark room at the start of everything and become something he'd gone back to, on purpose, on a good night, and made louder." },
    { s: 'haechan', f: 'serious', t: "I'm not going to tell you what it sounds like. It doesn't matter what it sounds like. It's not an excuse that it's good." },
    { s: 'haechan', f: 'neutral', t: "Chenle heard it Monday night. He came in with food and it was playing and he heard you in it. He asked me if you knew." },
    { s: 'haechan', f: 'serious', t: "I didn't have an answer. That's why it's tonight and not some other night. You should know that too. He asked the question I'd been not asking myself for a long time, and I'd been going to keep not asking it." },
    { ifYear: { rank: { haechan: 10 } }, then: [
      { s: 'haechan', f: 'neutral', t: "I told you there was one thing in it that wasn't mine. On a dryer. I said I'd pay it." },
      { s: 'haechan', f: 'serious', t: "Not on a dryer. Here. Where you can throw something." },
      { s: 'haechan', f: 'neutral', t: "This is me paying it. It doesn't cover it." }
    ] },
    { n: "And then he stopped, because he'd said all of it, and he sat there with his hands flat on the table and didn't fill the silence with anything, not a joke, not a pet name, not the flat scraping laugh he used when something hurt. He just let it be as bad as it was." },
    { n: "She'd thought she knew what fury felt like. She'd been furious at him before, in a dozen registers, at a party, in a kitchen, on a cold morning in the woods with a phone playing somebody else's worst night tinny and small through its speaker. That had been a different thing. That had been horror, and grief, and a girl she'd never met. That had been about who he'd been." },
    { n: "This was about her." },
    { n: "Her voice, in a room. The one thing she'd done in that whole year purely because she wanted to, for nobody, for the pleasure of a sound coming out of her chest. The thing her father had crowded out. The thing she'd told exactly one person about, on a roof, in the wind. She'd asked him. She'd *asked*. She'd stood there in his room with his headphones on and her whole body unguarded and she'd asked him if he was recording, and he'd looked her in the face and said no, and she'd sung." },
    { n: "Her face was hot. Her hands were cold. She could feel her heartbeat in the hinge of her jaw." },
    { s: 'solar', t: "You've heard me say what I think about that. To your face. You sat there and heard me say it and you didn't say a word." },
    { s: 'haechan', f: 'sad', t: "Yeah." },
    { s: 'solar', t: "You had weeks. You had a whole—" },
    { s: 'haechan', f: 'serious', t: "I had longer than that. I had a year." },
    { n: "He didn't argue. That was the thing she couldn't get past. He didn't argue, and he didn't explain, and he didn't reach across the table, and the not-reaching was so deliberate she could see it in his forearms, every muscle in them holding still." },
    { n: "And under the fury, in a cold clear place she didn't want to look at, she noticed something else. He'd told her. Before she'd heard it. Before it was a song on somebody's phone, before it was content, before she'd found out the way the girl had found out, from a screen, after. He'd told her while it was still a file nobody had heard but him and Chenle. She knew exactly how much that mattered, and she hated, with her whole body, that it did." },
    { s: 'haechan', f: 'neutral', t: "There are three things I can do. You pick. Not me." },
    { s: 'haechan', f: 'neutral', t: "I delete it. The stem, and every version of the track with it in, and I show you it's gone if you want to see." },
    { s: 'haechan', f: 'neutral', t: "Or I pull it out and give you the file. The only one. It's yours. Do whatever you want with it." },
    { s: 'haechan', f: 'serious', t: "Or it sits where it is and nobody touches it. Not me. Nobody plays it, nobody opens the session, while you decide. For as long as you need." },
    { n: "She looked at him for a long time. At the split knuckle. At the headphones that weren't on. At the drink sweating on her side of the table that she still hadn't touched." },
    { choose: [
      { t: "Not yet.", flag: 'epi-r-stem-wait', then: [
        { n: "It came out quieter than she meant it to. She made herself say the rest louder." },
        { s: 'solar', t: "Don't delete it. Don't touch it. Don't open it, don't play it, don't think about it. I haven't decided. That's not a yes." },
        { s: 'haechan', f: 'serious', t: "I know it's not a yes." },
        { s: 'solar', t: "Say it back to me." },
        { s: 'haechan', f: 'serious', t: "It's not a yes. It's don't touch it while you decide. Nobody hears it. Not me. Not until you say." },
        { n: "He said it back exactly, every word in order, flat and careful, like a man reading terms off a page he'd be signing. She'd made him do it. She'd watched him do it. Some small cold part of her that had grown up in rooms full of contracts noted, with satisfaction, that he hadn't once tried to change a word." },
        { bond: { haechan: 1 } }
      ] },
      { t: "Delete it.", flag: 'epi-r-stem-deleted', then: [
        { n: "She said it flat. She said it the way he said things, and watched him hear that she'd said it the way he said things." },
        { s: 'haechan', f: 'neutral', t: "Okay." },
        { s: 'haechan', f: 'neutral', t: "Tonight. All of it. If you want to see, I'll show you." },
        { s: 'solar', t: "I don't want to see anything of yours tonight." },
        { n: "Something in his jaw. A small movement, there and gone, like a door closing in a house you were walking past. He nodded once." },
        { s: 'haechan', f: 'sad', t: "Okay." },
        { n: "That was all. He didn't ask her to reconsider. He didn't say what it would cost him, what the track would be without it, how many months, how many nights. He'd said he wasn't going to explain it with what it sounded like. He didn't. She'd half expected him to try, and he didn't, and that was almost worse." }
      ] },
      { t: "Give me the file.", flag: 'epi-r-stem-file', then: [
        { s: 'solar', t: "Give me the file. The only one. Mine." },
        { n: "He reached into his coat. Slowly, so she'd see his hand the whole way. He put a flash drive on the table, small and black and plain, and slid it across the wood with two fingers until it stopped beside her drink." },
        { s: 'haechan', f: 'neutral', t: "It's on there. Just your voice. Nothing else." },
        { s: 'haechan', f: 'serious', t: "I took it out of the session last night. There's no copy. You can make me prove that later. You should." },
        { n: "He'd brought it. He'd come here with it in his pocket in case she said this. He'd provisioned for the one answer that took something away from him, and set it next to the drink like it was the same kind of thing, and she looked at the two of them side by side on the table and couldn't decide which one made her angrier." },
        { n: "She picked up the drive. It was warm from his coat. She put it in her own pocket and zipped it shut." },
        { bond: { haechan: 1 } }
      ] }
    ] },
    { n: "She stood up first. She put her coat on, which she hadn't taken off, so what she actually did was zip it, all the way to her chin, and pick up her bag. The drink she left where it was." },
    { n: "He didn't stand. He didn't say her name. He sat there with his hands flat on the table and let her go, the way he'd said he would, and she understood as she reached the door that letting her go was the whole of what he had to offer tonight, and that he knew it, and that he was offering it anyway." },
    { n: "She didn't look back. She'd thought she'd want to. She didn't." },
    { n: "Outside, the cold took her whole face at once. She walked fast, the wrong way first, then the right way. Her heart was going hard and her hands were shaking and none of it had anything to do with being afraid of him, and that was the strangest part, the part she'd think about later in the dark: she'd never once been afraid of him. She'd only ever been afraid of how much she knew him." },
    { n: "She hadn't heard it. The song. Her own voice, in it, under the second half. She'd walked out without hearing a single bar, and the song in her head was still there, low and patient, the four minutes she'd been humming since April, and she knew how it finished, and she knew now what was in the middle of it." },
    { n: "It had been her. The thing she couldn't name. It had been her the whole time." }
  ] },

  // ───────────────────────────── 12/4, late: the promise that passes ─────────────────────────────
  { id: 'epi-r-moon', date: '12/4', slot: 'late', title: 'the promise that passes', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-r-moon' },
    { n: "The last practice before Regionals had been the best one of the year. Doyoung ran them through every map in the pool with a stopwatch in one hand and the clipboard in the other, and Olivia stopped being loud for two whole hours, and Haerin's support work was so quiet and so exact that Solar caught herself trusting it before she'd checked it, and Chenle called every rotation before it happened, and Minji's cap was backwards, on a Thursday, for the first time, and nobody mentioned it. Solar played well. She played well the way you drive well after a fight, very carefully, every mirror checked twice, and when Doyoung said *that's it, go home, sleep, eat something with a vegetable in it* she was the last one out, and she didn't take the back stairs, and she didn't look up." },
    { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', soft: true },
    { n: "The moon came up over the bell tower a little after eleven. Full. She'd known it would be. She'd known since a phone call in November, *there's a full moon tonight*, and since a field, and a tree that leaned too far to the right, and a boy under it with an ugly thin blanket who'd been going whether she came or not." },
    { n: "*I'll bring you a better one next time.*" },
    { n: "This was next time. This was the first one since. December the fourth, the next full moon after the valley, and she'd known it was coming the way you know a date on a calendar you're pretending not to read." },
    { n: "She sat on the end of her bed with the curtain pulled back an inch and watched it climb. It was huge, and clean, and very white, and it made the snow on the quad look lit from underneath. Somewhere out past the Language Arts building, past the edge of the light, there was a wide shallow bowl of grass under a foot of snow, and a tree, and nobody under it." },
    { n: "Or somebody. She didn't know. That was the point. She wasn't going to know." },
    { ifFlag: 'epi-r-stem-deleted', then: [
      { n: "There was nothing on any drive anywhere now with her voice on it. She'd made sure of that. He'd sent one line at two in the morning on Wednesday night, *its gone. all of it. if u want proof its yours,* and she hadn't answered, and it hadn't made the bed any warmer." }
    ], else: [
      { ifFlag: 'epi-r-stem-file', then: [
        { n: "The flash drive was in the drawer of her desk, under a pack of gum and an Alpha Phi lanyard, where she could see the edge of it if she leaned. She hadn't plugged it in. She didn't know if she was going to. She'd checked that it was still there four times today, which was its own sentence." }
      ], else: [
        { n: "Somewhere across campus there was a session file nobody was allowed to open. He'd said it back to her word for word. She believed him. She'd always believed him; that had never been the problem. The problem was everything he'd ever said that she'd believed and that had turned out to have a second half." }
      ] }
    ] },
    { n: "The jacket was in the bag in the closet. At the bottom, under everything. She didn't get it out. She thought about it for a while, the weight of it, the smell, and then she didn't think about it, which took about forty minutes." },
    { n: "At five to midnight she was still sitting there. The house was quiet in pieces: a shower, a door, somebody's music through a wall, then nothing. The moon was very high and very bright and her phone was face down on the desk, and the clock on the nightstand ticked over to the next minute, and the next." },
    { glitch: 'epi-r-g-moon' },
    { n: "12:00." },
    { n: "The red numbers on the nightstand said *12:00*, and they didn't flicker the way they did when the power hiccuped. They just sat there. And out the window the moon was green." },
    { n: "Not tinted. Not a trick of the snow. Green, the deep sick underwater green of a sky she knew better than her own ceiling, the whole disc of it bloated and close and wrong, and the quad below it lay perfectly still, no wind, the bare trees not moving, the lamps along the paths all dark at once. Every hair on her arms stood up. Her hand went to her temple before she'd told it to, two fingers, the shape of something cold." },
    { n: "One breath. She held it." },
    { n: "Then the moon was white. The lamps were on. The clock said 12:01, and the second it changed, the radiator knocked twice, like somebody downstairs with a complaint." },
    { n: "She lowered her hand. She looked at it. She put it in her lap and held it there with the other one, and sat there for a long time, and didn't tell anybody, because there was nobody awake to tell, and because there was no sentence in English that started with *the moon* and ended anywhere a person could follow." },
    { n: "Two o'clock came. She knew because she was watching for it." },
    { n: "Nothing happened at two o'clock. That was the thing that happened. She sat there in the white moonlight with her knees pulled up and listened to the house not making a sound, and somewhere out past the Language Arts building the moon was exactly where he liked it, and the promise he'd made her at the tree line went past, slow, like a train you could hear but not see, and didn't stop." },
    { n: "At four minutes past two her phone lit up face down on the desk. She turned it over." },
    { n: "*haechanah is typing...*" },
    { n: "Three dots. They went for a while. They stopped. They started again. She watched them like a fire. And then they stopped, and didn't start again, and the screen went dark in her hand." },
    { n: "Neither of them had gone. Both of them knew. That was the whole conversation, and it was the most honest one they'd ever had." },
    { n: "She lay down. She didn't sleep until the moon had gone behind the bell tower, and when she did, she dreamed of nothing, which was a mercy, and which she'd learned not to count on." }
  ] },

  // ───────────────────────────── 12/5, evening: the party before the match ─────────────────────────────
  { id: 'epi-r-friday', date: '12/5', slot: 'evening', consumes: true, title: 'the party before the match', place: 'Syracuse · eSports Lab', time: 'Evening', scene: [
    { music: 'epi-r-team' },
    { n: "Friday night, and the Sigma house was going to be loud, because the Sigma house was loud every Friday without fail and had been since before any of them were born. And the eSports lab was full of cables." },
    { n: "Doyoung had a list. Of course Doyoung had a list. It was laminated. Headsets, five, plus a spare. Mice, five, plus two spares, because Olivia had once thrown one. Mousepads, rolled, rubber-banded. Every cable coiled and zip-tied and labeled in Haerin's tiny perfect handwriting, *MINJI KB*, *CHENLE HS*, *SOLAR MOUSE (PINK) (DO NOT TOUCH)*. The backup keyboard. The adapter nobody had ever needed but which Doyoung said they'd need the one time they didn't bring it." },
    { s: 'doyoung', t: "Chenle. Read it back." },
    { s: 'chenle', f: 'neutral', t: "Five headsets, one spare, labeled. Seven mice, labeled. Five pads. Three surge protectors. One adapter we've never used." },
    { s: 'doyoung', t: "One adapter we've never used *yet.*" },
    { s: 'olivia', t: "I'm going to frame that adapter if we win." },
    { s: 'haerin', t: "You said that about the backup keyboard at the tournament." },
    { s: 'olivia', t: "And I DID frame it. It's in my room. It's beautiful." },
    { n: "Haerin giggled. It was small and sudden and gone, and the whole room glanced at her, because Haerin didn't giggle, and when she did it meant something, and Solar decided it meant they were going to be fine." },
    { n: "Pizza came at seven, four boxes, ordered on the program card with a receipt Doyoung put in an envelope. They ate it on the floor between the stations with the lights on low, VODs of the Saturday bracket playing on the big screen, Doyoung pausing every ninety seconds to say *watch the Lucio, watch where he goes when he's scared,* and Minji taking notes in a little black book with her cap backwards, which made two days in a row now." },
    { n: "Phones came out around eight, the way phones did. Olivia's first." },
    { s: 'olivia', t: "Oh my god, the Sigma stories are already insane. Look. LOOK." },
    { phone: [
      { from: 'jeno', t: "jen0l33 posted a story." },
      { from: 'jeno', t: "[the sigma living room, red light, a punch bowl the color of a warning] december lineup pt 1 🎄 no invite list this time. you know who you are" },
      { from: 'jaemin', t: "jaemin posted a story." },
      { from: 'jaemin', t: "[a hand-drawn sign taped to the stairs: NO LODGE TONIGHT] reminder: tonight is open to everyone who was NOT on the secret trip 🤫 so everyone. allegedly" },
      { from: 'jaemin', t: "jaemin posted a story." },
      { from: 'jaemin', t: "[a blurry selfie, jaemin and three boys in reindeer antlers] if u went on the exclusive one dm me the wifi password. asking for a friend (the friend is me)" }
    ], contact: 'Stories' },
    { n: "Olivia was howling. Haerin was smiling into her pizza. Minji looked at the screen for exactly as long as politeness required and then looked at Solar, and away, fast." },
    { n: "Chenle didn't look at it at all. He was eating a slice very precisely, crust first, which he did when he was thinking, and when Olivia shoved the phone toward him he just said, without looking up from the crust, the way he gave callouts in a fight." },
    { s: 'chenle', f: 'neutral', t: "He's not in any of them." },
    { s: 'olivia', t: "Who?" },
    { s: 'chenle', f: 'neutral', t: "Nobody. Jaemin's posted eleven. Jeno's posted six. I'm just saying who's in them." },
    { n: "Solar didn't ask who wasn't. She knew. He didn't perform; that was the whole of him. He didn't stand in the back of a Jaemin story with a soda to prove he was sober. He didn't come to the lab glass. He didn't send her anything, all day, not one word, two days out from the most important weekend of her year, and she'd checked, more times than she'd ever admit, and every time she checked she'd understood a little more exactly that he was doing it on purpose." },
    { s: 'olivia', t: "Okay but SERIOUSLY. Solar. The trip. Was it actually that exclusive? Like, was there a guest list? Was there a dress code? Did Jaemin cry?" },
    { choose: [
      { t: "Smaller than they're making it sound. A lodge, bad Wi-Fi, a lot of board games. Jaemin cheated at all of them.", then: [
        { glitch: { strain: 1 } },
        { n: "Olivia screamed with delight. Haerin laughed into her sleeve. And Solar felt the cold hand at the back of her neck press down again, harder this time, and a faint hiss in her ears like a station between stations, and she smiled through it and took another slice so she'd have something to do with her hands." },
        { n: "Minji didn't laugh. Minji looked at her notebook and wrote something down, and Solar never found out what it was." }
      ] },
      { t: "Ask Jaemin. He'll tell you it was the best party of the year.", then: [
        { s: 'olivia', t: "He literally WILL. He's been saying it in the group chat all week." },
        { n: "Which was true. Jaemin had been saying it all week, delighted, embroidering a trip he'd been on in a way he could never once describe, and the campus was eating it out of his hand, because a party you weren't invited to was always better than one you were." }
      ] }
    ] },
    { s: 'chenle', f: 'neutral', t: "For the record, Jaemin doesn't cheat. He just doesn't read the rules." },
    { ifYear: { noFlag: 'arrived-chenle' }, then: [
      { n: "He said it to the crust. Then, while Olivia was distracted by her phone, he said one more thing, low, without looking up, the way he'd said *go home* on the stairs." },
      { s: 'chenle', f: 'neutral', t: "I was in the back row. Over there. You never turned around." },
      { n: "It wasn't an accusation. It was data. He delivered it the way he'd tell her an enemy's ult was at ninety percent, and went back to his pizza, and Solar sat there with her mouth slightly open and absolutely nothing she could say." }
    ], else: [
      { n: "He said it to the crust. Then, while Olivia was distracted by her phone, he said one more thing, low, without looking up." },
      { s: 'chenle', f: 'neutral', t: "Junpei still owes me ramen. Frame six. I was right." },
      { n: "She laughed so suddenly she choked on her pizza. Minji had to hit her on the back. Nobody else in the room had any idea why it was funny, and Chenle didn't explain, and he looked, for one second, pleased with himself in a way she hadn't seen since before Thanksgiving." }
    ] },
    { n: "At nine Doyoung shut the VOD off and stood up and looked at them, all five of them, cross-legged on the floor of the lab in the low light with pizza grease on their fingers and their gear packed and labeled in a row by the door like a little army of luggage." },
    { s: 'doyoung', t: "That's it. We're done. Nobody is going to that party." },
    { s: 'olivia', t: "Nobody WANTS to go to that party." },
    { s: 'doyoung', t: "Good. Go home. Sleep eight hours. Eat breakfast. The real kind. The van leaves from the front steps at seven-fifteen. If you're not on it, you're not on the team, and I mean that, and I've never once meant it before." },
    { s: 'haerin', t: "You've meant it before." },
    { s: 'doyoung', t: "I've never meant it this much." },
    { n: "They went out together. All five of them, into the snow, down the front steps of the Extracurricular Building in a loose tired clump, Olivia and Haerin arm in arm, Chenle with his hood up, Minji beside Solar with the little black notebook in her coat pocket. Somewhere across campus the Sigma house was shaking its windows with bass. You could feel it in your sternum from the quad, faint, like somebody else's heartbeat." },
    { n: "None of them turned toward it. They walked the other way, toward bed, toward tomorrow, their breath going up white, and Olivia started singing something terrible, and Haerin joined in, and then Minji, under her breath, and then, to her own surprise, Solar." },
    { n: "Not loud. Not well. Just a girl singing in the snow with four people who'd never once asked her for anything except to be on time. It was the first time she'd sung anything since she got back. It didn't cost her a thing." }
  ] },

  // ───────────────────────────── 12/6: Regionals, day one ─────────────────────────────
  { id: 'epi-r-regionals-1', date: '12/6', slot: 'early', fills: ['after', 'evening'], faces: 'runners-regionals', title: 'regionals', place: 'Syracuse · Regionals', time: 'Morning', scene: [
    { music: 'epi-r-regionals' },
    { n: "Regionals was in the convention center downtown, in a hall that hosted boat shows in the spring and bridal expos in the fall and, for one weekend in December, eight college Overwatch teams from across the Northeast, two stages, a broadcast desk, a few hundred folding chairs, and a smell like carpet glue, energy drinks and nerves." },
    { n: "It wasn't a stadium. It wasn't anything like the screens she'd seen on stream as a kid, the arenas, the confetti. It was a long cold room with black drapes over the windows and a lot of tangled cable taped to the floor, and somebody's mom selling hot chocolate at a card table by the door, and it was the most important room she'd ever walked into." },
    { n: "The van had left at seven-fifteen on the dot. Everyone had been on it. Doyoung had counted them twice." },
    { n: "Check-in was a table with a printed list and a girl with a lanyard who couldn't find *Syracuse* for a full minute and then found it under *S, University of*. Badges. Wristbands. A sticker sheet with their team logo that Olivia immediately stuck to her own forehead. Then equipment: the five of them at their stage-side stations, unpacking Haerin's labeled cables into a row of identical black machines, plugging in, calibrating, the specific terror of a mouse that felt half a millimeter different from yours." },
    { s: 'doyoung', t: "Don't touch your settings. I know you want to. Don't." },
    { s: 'olivia', t: "My sensitivity feels wrong." },
    { s: 'doyoung', t: "Your sensitivity is the same number it's been since September. Your hands are scared. Tell your hands." },
    { n: "Solar's hands were scared too. She held them flat on the desk on either side of the keyboard, the way Chenle did, and waited for them to stop. They didn't stop. They'd held a weapon for a year in a tower that rearranged itself every night, and they'd been steady then, steady with Shadows coming up the stairs in the green dark, and they were shaking now in a convention center in Syracuse over a game, which was either funny or the most human thing about her, and she decided not to choose." },
    { n: "Minji, at the next station, didn't look over. She reached across the gap without a word and put two fingers on the back of Solar's wrist, light, a pulse check, and took them away." },
    { s: 'minji', f: 'neutral', t: "Same as the tournament. Faster than that, actually." },
    { s: 'solar', t: "Is that a good thing?" },
    { s: 'minji', f: 'happy', t: "You won the tournament." },
    { n: "Scouting, between setup and the first match. Chenle with a laptop and a spreadsheet he'd built at three in the morning, color-coded. Minji's little black notebook. Doyoung standing over both of them like a man reading tea leaves." },
    { s: 'chenle', f: 'neutral', t: "Opening match. Their Lucio's good. Their Lucio's really good. He saves beat for the second fight of every point, not the first. Every time. Twenty-two out of twenty-two maps I watched." },
    { s: 'chenle', f: 'neutral', t: "Their supports rotate early. Like, criminally early." },
    { s: 'doyoung', t: "So we make them wait." },
    { s: 'chenle', f: 'neutral', t: "So we make them wait." },
    { n: "Haerin hadn't looked up from the end of the row. She was in the orange jersey with the sleeves pulled down past her wrists, the headset already round her neck, rewinding the same eleven seconds of the Lucio's VOD on her phone with one thumb, over and over, the way some people bite a nail." },
    { s: 'haerin', f: 'neutral', t: "I'll track his beat. I'll call it the second he has it. Out loud. Every fight." },
    { s: 'olivia', t: "She says that like a threat." },
    { s: 'haerin', f: 'neutral', t: "It is one." },
    { n: "Doyoung wrote it on the clipboard. *HAERIN · BEAT.* He underlined it, which he'd never once done for anything Olivia said." },
    { n: "Then the crowd started coming in, and Solar made the mistake of looking at it." },
    { n: "It wasn't big. A few hundred people in folding chairs, other teams' friends in other teams' colors, a dad with a camcorder, a cluster of high-schoolers with a sign for somebody from Rochester. And in the third row, on the left, behind the Syracuse stage, a little block of orange." },
    { n: "Hanni and Hyein in matching orange scarves Hyein had obviously made, holding a sign between them that said *KIRIKO DIFF* in glitter, with a fox drawn on it that Hyein had clearly agonized over. Jaemin, beside them, already on his feet, in a Syracuse beanie with a pom-pom the size of a grapefruit, waving both arms over his head like somebody guiding in a plane." },
    { n: "And on the end of the row, next to Hyein, with a paper cup of the hot chocolate from the card table in one hand and the other end of the glitter sign in the other, because Hyein had made him hold it, Haechan." },
    { n: "He wasn't hiding. That was what she saw first. He wasn't at the back, by the doors, in the dark, with his hood up, watching from somewhere she couldn't find him. He was in the third row in the middle of the light, in a black coat, holding one end of a glitter sign with a badly drawn fox on it, looking like a man who'd lost a bet and decided to lose it with dignity, and he wasn't looking at her. He was looking at the stage, the way he'd look at a room, listening to it." },
    { n: "Hanni said something to him. He answered, flat, short, and Hanni laughed, and Hyein elbowed him, and he let her, and Solar watched it happen from the stage with her hands flat on the desk and thought, very clearly, that a year ago there was no version of the world where Hyein elbowed Lee Donghyuck and he let her. There'd been a dormitory, since. Months of it. Dinners. A whole kitchen. Hyein making him hold a tape measure. The world had moved under all of them while she wasn't looking, and here it was, on the third row, holding a sign." },
    { ifFlag: 'epi-r-stem-deleted', then: [
      { n: "She'd told him to delete it. He'd done it; she'd believed him without asking for proof, which was its own kind of decision. And he'd come anyway, and sat exactly where she could see him, and asked her for nothing at all." }
    ] },
    { n: "It wasn't a reward. It wasn't a gesture. He hadn't come to be seen coming. He'd come because her friends had asked him, probably, and because he wanted to, and he'd sat where he could be seen because hiding would have been its own kind of performance and he'd decided, somewhere, to stop giving her those. She didn't know how she knew that. She just knew it. She looked away first." },
    { ifYear: { noFlag: 'arrived-jaemin' }, then: [
      { n: "Jaemin caught her eye over the heads of the first two rows, and grinned, and cupped his hands round his mouth, and shouted over the house music, cheerful, carrying, completely unhinged." },
      { s: 'jaemin', f: 'happy', t: "I threw a party over there you never came to! RUDE! Win anyway!" },
      { n: "Half the row turned to look at him. He waved at them too. Hyein put her face in the glitter sign." }
    ], else: [
      { n: "Jaemin caught her eye over the heads of the first two rows, and grinned, and cupped his hands round his mouth, and shouted over the house music." },
      { s: 'jaemin', f: 'happy', t: "You left my party at eleven, over there! I'm still counting! Win anyway!" },
      { n: "Half the row turned to look at him. He waved at them too. Hyein put her face in the glitter sign." }
    ] },
    { place: 'Syracuse · Regionals', time: 'Afternoon' },
    { n: "The opening bracket was a blur of the best kind. Two best-of-threes before dinner, the first against the team with the good Lucio, the second against a school from Ohio in matching jerseys with their names stitched on the back." },
    { n: "They made the Lucio wait. Every fight, they pulled him to the first one and made him decide, and twenty-two maps of habit made him hold beat for the second fight that Doyoung never let them take, and Haerin called it every single time he had it, flat and exact in the headsets, *beat's up, he's holding,* like a girl reading a train timetable, and by the middle of the second map he was spending it early out of panic and Chenle was saying *there it is, there it is, go* in a voice so quiet and so happy it was barely a voice at all." },
    { n: "Somewhere in the second map against Ohio, Solar threw a Protection Suzu across a choke she couldn't see, off sound alone, the hiss of an enemy Ana's nade still in the air, and it landed on Haerin and Olivia and Chenle a quarter second before the anti did, and cleansed it, and the whole fight turned over like a coin." },
    { n: "She didn't hear the broadcast. Nobody on stage did; their headsets were closed. She found out between maps, when they slid the headsets down and the sound of the hall came back in like water, and the speaker over the stage was playing the caster desk, and a woman's voice was saying her name." },
    { s: 'sakura', t: "...and that's Solar Lee on the Kiriko, and I need everyone at home to rewind that, because she does not see that nade. She can't see it. She hears it. She hears the Ana pull the pin and she's already throwing." },
    { s: 'caster', t: "Sakura, you've been watching her VODs again." },
    { s: 'sakura', t: "I've been watching her VODs since October. I'm not ashamed. Remember the name. Solar Lee. She plays Kiriko like she's done this somewhere a lot scarier." },
    { n: "Olivia screamed. Not a little. Haerin put both hands over her own mouth. Minji, at the next station, looked over at her with an expression Solar had no name for, pride and something under it, and didn't say anything at all." },
    { s: 'haerin', f: 'surprised', t: "...She's been watching your VODs since October. That's longer than Olivia has." },
    { s: 'olivia', t: "I watch them! I fall asleep in them, but I WATCH them!" },
    { n: "Solar sat very still with the headset round her neck and felt her face go hot from the collar up. A stranger at a desk with a microphone had said her name to however many people were watching, and it had been her name, just hers, Solar Lee, Kiriko, a girl who heard things. Not anybody's sister. Not anybody's daughter. Not a caption. Just a play she'd made and a voice saying it was good." },
    { n: "She didn't know who the caster was. She'd look her up later, on the van, and find a girl with a big laugh and a streaming channel and two hundred thousand followers who'd tweeted *SYRACUSE KIRIKO SAW THE FUTURE* with four crying emojis, and she'd read it three times and put the phone face down on her knee and not tell anyone why she was smiling." },
    { n: "In the crowd, a cheer had gone up from the third row. She looked. She couldn't not. Hyein was on her chair. Hanni was trying to get her down. Jaemin was filming everything. And Haechan, at the end, was still holding his end of the sign, still sitting, still not cheering, and he was looking straight at her, across the whole hall, the stage lights between them, and he didn't look away when she caught him." },
    { n: "He tipped the paper cup of hot chocolate at her. An inch. That was all." },
    { glitch: 'epi-r-g-junpei' },
    { n: "And behind him, four rows back, in the dim of the folding chairs, a face." },
    { n: "A boy in a blue baseball cap, turned backwards, a goatee he'd been too proud of, a grin so wide and so stupid and so familiar that her whole chest went tight before she understood why, and he was clapping, big dumb clapping with his whole arms, the way he'd clapped for her in a lounge in a dormitory by the sea after every single night she'd brought them all home." },
    { n: "One frame. A blink." },
    { n: "It was a dad. A tired-looking dad in a fleece with a camcorder, clapping politely for somebody from Rochester. No cap. No goatee. He didn't even look at her." },
    { n: "She looked at the place where the face had been until Doyoung said her name twice. Her hands were steady. That was the strange part. Her hands, which had been shaking all morning, were perfectly, completely steady, the way they'd been in a tower in the green dark with somebody she loved at her back." },
    { s: 'doyoung', t: "Lee. Headset. We're not done." },
    { n: "They weren't done. They won the Ohio set two-nil. They went into the dinner break undefeated, top of their side of the bracket, through to tomorrow." },
    { place: 'Syracuse · Regionals', time: 'Evening' },
    { n: "Dinner was sandwiches in a green room that was actually a coat check. Doyoung didn't smile, but he let Olivia put the forehead sticker on his clipboard, which for him was a parade. Chenle ate an entire sandwich, which Solar noticed, and noticed she'd noticed, and filed somewhere she'd come back to." },
    { n: "Her phone had forty notifications. She read three of them." },
    { phone: [{ from: 'jaehyun', t: "Saw the stream. Good." }, { from: 'jaehyun', t: "Did you eat." }, { from: 'solar', t: "sandwich. a whole one" }, { from: 'jaehyun', t: "Good. Sleep." }], contact: 'big bro' },
    { phone: [{ from: 'hyein', t: "@hyein: SAKURA. SAID. YOUR. NAME." }, { from: 'hanni', t: "@hanni: we're so proud of u. go to bed" }, { from: 'hyein', t: "@hyein: haechan says the fox on the sign looks like a dog. i said he can make his own sign. he said he will not be doing that" }, { from: 'hyein', t: "@hyein: he held it for 4 hours tho" }], contact: 'hanni, hyein 🩷' },
    { n: "Four hours. She read it twice. Then she turned the phone face down on her knee, and leaned her head back against the coats, and closed her eyes, and let herself have it, just for the length of the van ride home: a whole day where the best thing that had happened to her was something she'd done herself." }
  ] },

  // ───────────────────────────── 12/7: Regionals, day two ─────────────────────────────
  { id: 'epi-r-regionals-2', date: '12/7', slot: 'early', fills: ['after'], faces: 'runners-regionals', title: 'regionals, day two', place: 'Syracuse · Regionals', time: 'Morning', scene: [
    { music: 'epi-r-match' },
    { n: "Day two was a different hall. Same room, same drapes, same carpet-glue smell, but half the teams were gone, and the folding chairs had been pushed closer to the stages, and the crowd had doubled overnight, because the stream had numbers now and the numbers had told people where to be. The card-table mom had run out of hot chocolate by ten." },
    { n: "Quarterfinal, semifinal, final. Three series between nine in the morning and dinner. Doyoung had drawn it on the whiteboard in the coat-check green room in three boxes and stood back from it like an architect." },
    { s: 'doyoung', t: "Somebody's going to find our weakness today. It's not a secret. It's on film. They're going to dive the duo." },
    { s: 'doyoung', t: "Kim, Lee. You're the weakness. Congratulations. Be a weakness that bites." },
    { n: "Minji turned her cap around. Backwards. She didn't look at Solar while she did it. She didn't have to." },
    { place: 'Syracuse · Regionals', time: 'Morning', soft: true },
    { n: "The quarterfinal was a team from Boston with a Zarya who was the best player in the building, and everybody knew it, including the Zarya. Map one went their way, clean, two-nil on points. Map two was Lijiang, and Lijiang was a knife fight in a phone booth, and in the third round of Control Center, with the point at ninety-eight and the Zarya's ultimate at a hundred, Solar had her Suzu up and a choice." },
    { n: "The enemy Ana was lining up an anti-nade on their tank. Throw the Suzu now, and it cleansed the anti. Hold it, and the anti landed, and the Graviton came, and the Suzu might cleanse that instead, if she timed it to the frame, if she was right that the Zarya was going to wait for the anti to land before she threw, the way she'd waited in every fight on the film." },
    { choose: [
      { t: "(Suzu the anti. Now.)", then: [
        { n: "She threw it on the anti. It was clean, it was pretty, it cleansed the whole front line, and a second and a half later the Zarya threw Graviton into the middle of all of them with nothing left to answer it, and the fight folded like wet paper, and they lost the point, and the map." },
        { n: "She took her hand off the mouse. One map. One map was allowed. Doyoung said it in her headset before she could say anything, flat, the voice of a man who'd expected exactly this." },
        { s: 'doyoung', t: "She waits for the anti. You knew that. Next map. Go." },
        { n: "They took map three. Two-one. Through. It was harder than it should have been, and Solar knew whose fault that was, and she put it in a box, and shut the box, and kept playing." }
      ] },
      { t: "(Hold it. Wait for the grav.)", flag: 'epi-r-read-1', then: [
        { n: "She held it. Every nerve in her hand wanted to throw. The anti landed on their tank, and he couldn't heal, and the Zarya saw it land and grinned, probably, somewhere in Boston's headsets, and threw Graviton into the middle of all of them." },
        { n: "And Solar's Suzu was already in the air." },
        { n: "It came down on the Graviton like a bell. Cleansed. Invulnerable. The whole front line pulled into the black hole and, for one long beautiful half second, nobody in it could die, and when it ended, Olivia and Chenle were standing in the middle of four enemies at full health with all their cooldowns and nowhere better to be." },
        { s: 'chenle', f: 'surprised', t: "...Oh, that's disgusting. Go. GO." },
        { n: "They took the point. They took the map. Two-nil. Through." }
      ] }
    ] },
    { place: 'Syracuse · Regionals', time: 'Afternoon' },
    { n: "The semifinal was worse. The semifinal was a team that had watched them on film all night and come in with exactly the plan Doyoung had drawn on the whiteboard: dive the duo. Every fight, a Genji and a Winston, through the back line, straight at Minji, and then at Solar, and then at Minji again, like a dog that had found a gap in a fence." },
    { n: "Second map. King's Row. Third point. A Genji came over the wall behind Minji's sightline, and Solar heard it, the little scrape of the climb, a half second before anyone else did." },
    { s: 'minji', f: 'neutral', t: "I'm fine. I've got him. Stay with tank." },
    { n: "It was her voice. Her steady voice. Her comms voice, calm and exact. And Solar, who had said *I'm fine* in that exact tone of voice ten thousand times in her life, to her father, to her brother, to her own mirror, heard it, and heard what was under it, and knew." },
    { choose: [
      { t: "(Trust her. Stay with tank.)", then: [
        { n: "She stayed. Minji had said she had him, and Minji always had him. She held the line with the tank and listened to the fight behind her and heard Minji's health go down in her comms, steady, steady, and then the Genji's blade, and then nothing." },
        { s: 'minji', f: 'sad', t: "...Sorry. I didn't have him." },
        { n: "They lost the fight, and the point, and the map, because without the Ashe the line couldn't hold, and because she'd known, and she'd let Minji's voice tell her a thing she'd heard was a lie. She'd know better than anyone. She'd invented that voice." },
        { s: 'solar', t: "That was me. That's on me. Next one." },
        { n: "They took the next one. Two-one. Through to the final, a map heavier than they should have been, and Minji didn't say anything about it, and Solar didn't either, and the not-saying sat between their stations like a third chair." }
      ] },
      { t: "(She's not fine. Swift Step to her.)", flag: 'epi-r-read-2', then: [
        { n: "She stepped. Swift Step, the little fox-fire blink across the map, and she was beside Minji before the Genji had finished drawing his blade, and her Ofuda were already on Minji, and Minji's health came back up as fast as it was going down, and the Genji looked at the two of them, a girl with a bow and a girl with a fox, and committed anyway, because he'd been told to, and died." },
        { n: "Minji didn't say anything for a second. Then, in comms, very quietly." },
        { s: 'minji', f: 'flustered', t: "...I said I was fine." },
        { s: 'solar', t: "You said it like me." },
        { n: "Minji laughed. In the middle of the semifinal. A short helpless real laugh, in comms, in front of the whole team, and then she shot the Winston twice in the head, and they took the point, and the map, and the series, two-nil." }
      ] }
    ] },
    { place: 'Syracuse · Regionals', time: 'Afternoon' },
    { music: 'epi-r-regionals' },
    { n: "The final was a best-of-five against the team they'd been afraid of all season, from a school with a real arena and real scholarships and a coach who'd played semi-pro, and the first map went so badly that afterward nobody would talk about it, ever, not even Olivia." },
    { n: "Busan. Three rounds of Control. Lost all three. Every fight, the duo dove, every fight, Solar and Minji split apart and picked off, every fight the scoreboard turning over against them like a clock. It was the weakness. It was exactly the weakness Doyoung had drawn on the whiteboard, found and pried open and stood on." },
    { n: "In the break between maps, nobody spoke. Doyoung stood behind them with his clipboard and didn't write on it. That was the worst part. He just stood there, and let them sit in it, and then he leaned down between Solar's and Minji's chairs and said one thing, very quietly, so only they could hear." },
    { s: 'doyoung', t: "You two aren't a weakness because they dive you. You're a weakness because when they dive you, you go separate ways. Stop going separate ways." },
    { n: "Minji looked at her. Solar looked back. Something passed between them that didn't need comms, and they turned back to the screens, and they took the second map, together, so close the whole time that Olivia complained, and the third, and the fourth went to the last fight of the last point with the score tied and the whole hall on its feet." },
    { n: "Numbani. Overtime. The payload six meters from the end. The enemy Lucio, the good one, the one Chenle had watched on film until four in the morning, was sitting on Sound Barrier. Solar had Kitsune Rush. Everyone had everything. It was the fight." },
    { s: 'haerin', f: 'serious', t: "Beat's up. He's had it forty seconds. He's not holding it for the payload. He's holding it for you." },
    { n: "Her hand left the mouse." },
    { glitch: 'epi-r-g-evoke' },
    { n: "It went up. Toward her temple. Two fingers, the shape of something cold and heavy that wasn't there, the old reflex of a hundred midnights when the fight was the fight and there was only one thing left to do, and for a second she wasn't in a convention center in Syracuse, she was at the top of a staircase in the green with everything she loved at her back and something terrible coming up it, and her hand knew what came next, and her hand was already pulling the trigger on nothing." },
    { n: "She put it back on the mouse. It was steady. It was perfectly, completely steady." },
    { choose: [
      { t: "(Rush now. Go first.)", then: [
        { n: "She went first. Kitsune Rush, the long fox-lit corridor of speed and cooldowns laid out ahead of them, and her team poured into it, and the enemy Lucio, who'd been waiting for exactly this for the whole series, dropped Sound Barrier on top of it, and every bit of damage they'd brought bounced off the shield like rain off a roof." },
        { n: "They lost the fight. They lost the map. Two-two." },
        { n: "She sat back. Doyoung's hand was on the back of her chair. He didn't say anything. He didn't have to. The fifth map loaded, and she put her hands on the desk, flat, and waited for them to stop shaking, and they stopped, and she leaned forward." },
        { n: "The fifth map was Ilios, and they won it three rounds to one, and the last fight of it wasn't a read at all. It was just the five of them going the same way at the same time, the way Doyoung had told them to, until there was nobody left to go the other way." }
      ] },
      { t: "(Wait. Make the Lucio spend it first.)", flag: 'epi-r-read-3', then: [
        { n: "She waited. *Make them wait.* She held the Rush and called the bait, Chenle diving in alone, loud and visible and obvious, the way he'd never once played in his life, and the enemy Lucio, who'd been saving Sound Barrier for the second fight of every point for twenty-two straight maps, saw a kill coming on his tank, and panicked, and spent it." },
        { s: 'chenle', f: 'happy', t: "Barrier's gone. Barrier's GONE. Solar." },
        { n: "She threw the Rush. The fox-fire corridor opened ahead of them and the five of them went down it together, so fast the enemy line didn't have time to understand it was over before it was, and the payload rolled the last six meters with Olivia standing on it screaming and Haerin's healing on all of them like a hand on a back, and the hall came apart." }
      ] }
    ] },
    { cg: 'epi-r-regionals' },
    { ifFlag: 'epi-r-read-3', then: [
      { n: "Three-one. Regional champions. Through to Nationals in the spring." }
    ], else: [
      { n: "Three-two. Regional champions, the hard way, a map down from the start and level going into the last. Through to Nationals in the spring." }
    ] },
    { n: "There was confetti. Actual confetti, orange and white, from a cannon somebody had rented, and it went everywhere, in her hair, down the back of her shirt, in Olivia's open screaming mouth. Haerin was crying. Haerin was crying and giggling at the same time, which nobody had ever seen, and which Olivia filmed and would later have framed. Chenle stood up so fast he knocked his chair over and then stood there over it looking at the scoreboard with an expression of perfect scientific delight. Doyoung put the clipboard down on the desk. Face down. And walked away from it. And then came back and hugged each of them, one at a time, briefly and very hard, like a man checking the weight of something before he carried it." },
    { n: "When he got to Haerin she was still giggling, wet-faced, the jersey sleeves pulled over both hands, and she looked past his shoulder at Solar with the flat, level look she gave a support ultimate she'd just seen come up." },
    { s: 'haerin', f: 'happy', t: "You were gone for nine days and you came back better. That's not allowed. I'm putting it in the notes." },
    { s: 'solar', t: "What notes?" },
    { s: 'haerin', f: 'neutral', t: "Mine. I keep notes on everyone. Olivia's are mostly crying." },
    { stat: { proficiency: 1 } },
    { n: "Minji got to her last. She came round the desk and stopped in front of Solar with her cap backwards and confetti in her eyelashes and didn't hug her, not at first. She just looked at her. Then she put both arms round her and held on, and Solar held on back, and the hall was screaming and the speaker over the stage was playing the caster desk again, the woman's voice, laughing, *I said remember the name, I SAID it,* and none of it reached them for a second." },
    { n: "Then Minji let go. And Solar, with confetti still falling, did a thing she didn't decide to do. She turned and looked out at the crowd." },
    { n: "She'd done it before. In October, at the tournament, she'd stood on a stage and scanned the room, every face, every row, looking for somebody she couldn't find, because he'd been there in the dark at the back where she'd never see him." },
    { n: "This time he was exactly where he'd let himself be seen. Third row. On the end. On his feet, now, because everyone was, but not shouting, not clapping, just standing there next to Hyein, who was screaming, with the glitter sign folded under his arm and his hands in his coat pockets, looking at her." },
    { n: "She found him in a second. Less. Like her eyes had known where to go before she'd asked them to." },
    { n: "And Minji, beside her, still close enough to touch, watched her do it." },
    { cg: null },
    { place: 'Syracuse · Regionals', time: 'Afternoon', soft: true },
    { music: 'epi-r-closure' },
    { n: "Later. Twenty minutes, maybe more. Out of the hall, past the coat check, down a service corridor that led to the loading dock, where it was cold and quiet and smelled like cardboard and snow, and the noise of the celebration came through the walls like the sea through the side of a ship." },
    { n: "Minji had walked out here, and Solar had followed her, and neither of them had said why." },
    { n: "Minji had her camera, of course. She wasn't filming. She was holding it in both hands against her chest like something that might get away, and she'd taken her cap off, and was turning it round and round by the brim." },
    { ifYear: { romance: 'minji' }, then: [
      { s: 'minji', f: 'neutral', t: "I'm not going to make a speech. I want that on the record." },
      { s: 'solar', t: "Okay." },
      { s: 'minji', f: 'sad', t: "Over there you picked me. You picked me in a lot of rooms. I was there for all of them. I remember every one." },
      { s: 'minji', f: 'serious', t: "And then you came home and looked at a crowd. I'm a filmmaker, Sol. I watch where people look. It's my whole job." },
      { n: "Solar's throat closed. She didn't say *I'm fine.* She didn't say anything. Minji turned the cap once more by the brim and stopped." },
      { s: 'minji', f: 'neutral', t: "I'm not asking you to pick me again. Here. I'm not asking you not to look. I'm asking whether over there counts." },
      { s: 'solar', t: "...It counts. It counts more than anything I've ever—" },
      { s: 'minji', f: 'sad', t: "Okay. Then don't finish it. Not today." },
      { n: "She put the cap back on. Frontwards. On a game day. It meant something; Solar didn't know what yet, and she understood that Minji didn't either, and that was the point." },
      { s: 'minji', f: 'neutral', t: "I'm not going to stand under that lamp forever. You should know that. I'm too proud." },
      { s: 'minji', f: 'happy', t: "But I'm not leaving it yet." },
      { n: "She stepped forward and kissed Solar once on the cheek, quick and light and certain, the way you'd set something down where you'd be able to find it again. Then she went back inside, toward the noise, and left the door propped open behind her with the edge of a fire extinguisher, which was its own sentence, and Solar stood in the cold with her hand on her face for a long time." }
    ], else: [
      { s: 'minji', f: 'neutral', t: "Sorry. It's... it's not my place." },
      { s: 'minji', f: 'happy', t: "You were incredible today. I mean that. I really, really mean that. Today was yours." },
      { s: 'solar', t: "Today was ours. You hit the Winston twice in the head." },
      { s: 'minji', f: 'sad', t: "Sol." },
      { n: "Just her name. Short. Kind. Minji's voice had never once been anything but kind, and it was kind now, and it was going to say something that would cost them both, and Solar could feel it coming the way you feel weather in a knee." },
      { s: 'minji', f: 'sad', t: "I don't know how to do this. I've never done it before. I've filmed it. That's different." },
      { s: 'minji', f: 'serious', t: "Tell me... just tell me it wasn't all in my head. Tell me you felt it, too." },
      { s: 'minji', f: 'sad', t: "Not who your heart calls. Because I know, I know, Sol. I watched you look for him out there. I watched you find him. Faster than you've ever found anything." },
      { s: 'minji', f: 'neutral', t: "Just that even for a second, you liked me the way I like you." },
      { n: "There it was. Not a request to be chosen. She'd already conceded that; she'd conceded it standing two feet away from Solar on a stage with confetti in her eyelashes, watching her look at somebody else. She was only asking not to have been wrong about what she'd seen. Not to have been the girl with the camera who'd made it all up." },
      { n: "Solar's chest hurt. A real, physical hurt, under the sternum, like she'd been hit there." },
      { s: 'solar', t: "Of course I did. I do. He's just—" },
      { s: 'minji', f: 'sad', t: "—Different. I know. I've known all along, actually. I just needed to hear you say it." },
      { n: "And there it was again, the thing. A sentence finished for her. Something decided about her by somebody who loved her, kindly, gently, so she wouldn't have to. Her whole life had been people finishing her sentences. Her father. Her brother. Him." },
      { choose: [
        { t: "(Let her finish it.)", then: [
          { n: "She let it go. Minji had earned it, the finishing; she'd earned it a hundred times over, in every frame she'd ever asked permission for. Solar nodded, and Minji nodded back, and it was over, and it was kind, and that was enough." },
          { n: "It was nearly enough." }
        ] },
        { t: "Let me say it.", then: [
          { s: 'solar', t: "Minji. Let me say it. Please." },
          { n: "Minji went very still. Then she nodded, once, and held the camera tighter, and waited, the way she'd waited in the honors dorm doorway twenty times with the lens cap on until Solar said yes." },
          { s: 'solar', t: "You weren't in your head. I felt it. I still do. He's different, and I don't know what that means yet. I haven't picked anything. I'm not with him. I don't know what I am." },
          { s: 'solar', t: "But I'm not going to let you think you made it up. You didn't make it up." },
          { n: "Minji's mouth moved, and stopped, and moved again. She put her cap back on. Frontwards. On a game day." },
          { s: 'minji', f: 'happy', t: "...Okay. Thank you for saying it yourself." },
          { s: 'minji', f: 'neutral', t: "You never do. You should do it more." }
        ] }
      ] },
      { n: "She went back in first. She held the door for Solar, and didn't look at her while she held it, and Solar went past her into the warm and the noise and felt Minji's eyes on her back, and knew that they were going to be all right, eventually, in the way people are all right after a thing like this, which is slowly, and not quite, and for real." }
    ] },
    { bond: { minji: 1 } },
    { place: 'Syracuse · Regionals', time: 'Evening' },
    { music: 'epi-r-regionals' },
    { n: "The hall was emptying. Teams packing up. The confetti being swept into orange drifts by a man with a push broom who looked like he'd seen a lot of confetti. The third row had come down to the stage rail: Hanni with her arm through Hyein's, Jaemin trying to get the trophy off Olivia for a photo, Jeno, who had apparently arrived at some point and was wearing Jaemin's grapefruit pom-pom hat, and Haechan, a little apart, at the end of the rail, with the folded sign still under his arm." },
    { n: "She went over. She didn't decide to. He didn't come to meet her; he let her come. Hyein saw her coming and squeaked and Hanni put a hand over Hyein's mouth with the efficiency of long practice." },
    { n: "She stopped in front of him. He looked at her. He didn't say *congratulations*, or *you were good*, or anything a person would say. He looked at the confetti in her hair for a long moment, like he was listening to it." },
    { ifFlag: 'epi-r-read-3', then: [
      { s: 'haechan', f: 'neutral', t: "You waited on the Lucio." },
      { s: 'solar', t: "Chenle's spreadsheet." },
      { s: 'haechan', f: 'neutral', t: "No. You." }
    ], else: [
      { s: 'haechan', f: 'neutral', t: "You went first on the fourth. You didn't do it twice." },
      { s: 'solar', t: "Doyoung told us to go the same way." },
      { s: 'haechan', f: 'neutral', t: "He told you. You did it." }
    ] },
    { n: "That was all. He didn't touch her. His hands stayed in his pockets. And then his eyes went past her shoulder, to the back of the hall, and stayed there, and she watched his jaw do the thing it did, the small shift, there and gone." },
    { s: 'haechan', f: 'neutral', t: "He's waiting for you." },
    { n: "She didn't have to turn round. She turned round anyway." },
    { n: "Mark was at the back of the hall, by the doors, alone. Coat on, hands in his pockets, a little apart from everyone, standing in the place where you'd stand if you'd come to something you weren't sure you'd been invited to. He hadn't brought anything. No flowers. No sign. He wasn't filming. He was just standing there." },
    { s: 'solar', t: "I know." },
    { s: 'haechan', f: 'neutral', t: "You going over there?" },
    { s: 'solar', t: "I'm going to thank him for coming." },
    { n: "Haechan didn't say anything. She watched him not say it. It cost him something, she could see what it cost, the jaw and the hands in the pockets and the way he looked at the floor between them for a second like there was something written there he didn't like. And then he nodded. Once. Short." },
    { n: "He let her go. That was twice in four days. She was starting to keep count." },
    { n: "She walked to the back of the hall through the drifts of swept confetti. Mark watched her come the whole way. His face was doing the thing it had done in Statistics, the stillness that didn't belong on it, and it got stiller the closer she got, until she was standing in front of him and he looked like a photograph of himself." },
    { s: 'mark', f: 'neutral', t: "Sol... hey." },
    { n: "*Sol.* It landed somewhere under her ribs and stayed there. He'd called her that since the first day, practically, in August, with a grin and a coffee and a whole easy afternoon, already knowing who she was. It had been easy, then. It had been warm. It was the same word, in the same voice, and it hurt now the way an old bruise hurts when you press it to see if it still does." },
    { s: 'mark', f: 'sad', t: "I'm sorry if it's weird that I'm here." },
    { s: 'solar', t: "It is a little." },
    { s: 'mark', f: 'neutral', t: "Yeah." },
    { s: 'mark', f: 'neutral', t: "I couldn't miss it. I know how important it is to you." },
    { n: "It was true. That was the thing about Mark. It was always true. He did know how important it was. He'd known before she did, probably, and he'd come, and stood at the back, and asked for nothing, and that was true too, and none of it unmade a single thing he'd done." },
    { s: 'solar', t: "Thank you for coming." },
    { n: "She said it neutral. Plain. A true thing, with no door in it. He heard there was no door in it. She watched him hear it." },
    { s: 'mark', f: 'sad', t: "And, uh... I am sorry, Sol." },
    { ifYear: { noFlag: 'arrived-mark' }, then: [
      { s: 'mark', f: 'neutral', t: "I was there, you know. Over there. You didn't see me." },
      { s: 'mark', f: 'sad', t: "That was probably right." }
    ], else: [
      { s: 'mark', f: 'neutral', t: "Over there you let me stand by the window. At the end. I'm not asking to come any closer than that. Here either." }
    ] },
    { n: "She didn't answer. She didn't have to; he hadn't asked a question. He looked at her for a second longer, like a man memorizing a room he wasn't going to be let back into, and then he nodded, and turned, and pushed the door open into the snow, and went." },
    { n: "She stood there and watched the door swing shut. Behind her, at the stage rail, Hyein was shrieking about the trophy, and Jaemin was taking a photo, and somebody was saying her name, and she knew, without turning round, that one person at the end of the rail had watched her the whole way there and the whole way back, and hadn't moved, and was still waiting, and wasn't going to ask." }
  ] },

  // ───────────────────────────── 12/7, late night: after (the route choice) ─────────────────────────────
  { id: 'epi-r-crossroads', date: '12/7', slot: 'late', title: 'after', place: 'Syracuse · The Quad', time: 'Late Night', scene: [
    { music: 'world-runners-theme' },
    { n: "The van dropped them on the quad at twenty to midnight, because Doyoung said it was the closest point to everyone's bed and he'd done the math. Snow coming down slow and fat and straight, no wind, every path a gray line through white, the bell tower lit from below and the lamps along the walks making little rooms of light in the dark." },
    { n: "The trophy went with Olivia, by vote, and Olivia carried it across the quad toward South Campus in both arms like a baby, singing to it. Haerin went with her. Chenle said goodnight to each of them by name, which he'd never done before, and went off toward the Sigma house with his hood up, walking fast. Doyoung got back in the van and drove it away, and the quad was very quiet, and very white, and all hers." },
    { n: "Not quite all. Hanni and Hyein were at the shuttle stop at the bottom of the hill, stamping their feet, the last loop of the night coming round the corner with its lights on. Minji was on a bench under a lamp with her camera bag open on her knees, packing lenses into their foam one at a time, slow, careful, the way she did everything she cared about. And past the far side of the quad, past the dark bulk of the Language Arts building, the long way back to Alpha ran along a path nobody used after dark." },
    { n: "She stood in the middle of the quad in the snow with her gear bag over her shoulder and confetti still in her hair, and it was nothing. It was just the walk home. It was just which way." },
    { choose: [
      { t: "(Walk back the long way, past the Language Arts building.)", when: { ifRouteOpen: 'haechan' }, flag: 'epi-route-haechan', then: [
        { place: 'Syracuse · The Quad', time: 'Late Night', soft: true },
        { n: "She went the long way. It was colder. The path past the Language Arts building wasn't salted, and the snow on it was untouched except for one set of footprints, going the same way, ahead of her, not long ago." },
        { n: "He was on the side steps. Not the roof. Not the ladder. Just the steps by the side door, under the fire escape that ran up toward the roof he'd never once taken anyone but her to. No laptop. There was a paper cup of something, gone cold, and his headphones round his neck, and snow on his shoulders like he'd been there a while." },
        { n: "He didn't look surprised. He didn't look like he'd been waiting, either. He looked like a man who'd come to a place he came to, and found it occupied by somebody he'd hoped would occupy it, and was trying not to let that show on his face, and failing, a little, at the corners." },
        { s: 'haechan', f: 'neutral', t: "Long way." },
        { s: 'solar', t: "Long way." },
        { n: "She didn't sit down. He didn't ask her to. She stood at the bottom of the steps with snow coming down between them and he sat at the top of them, and for a while neither of them said anything, and the bell tower across the quad said midnight, slowly, twelve times, the way it always did, and nothing went green. Nothing at all. The snow kept falling. The lamps stayed on." },
        { s: 'haechan', f: 'neutral', t: "Nothing's settled." },
        { s: 'solar', t: "No." },
        { s: 'haechan', f: 'neutral', t: "Okay. Just checking we both knew." },
        { n: "She went on. She walked past the steps and on down the long way home, and she heard him not get up, and she heard him not follow, and at the corner of the building she looked back, which she hadn't done on Wednesday, and he was still there, with the cold cup, looking at the snow, and he lifted it an inch, the way he had at Regionals. That was all." },
        { n: "It was the coldest walk home she'd had all winter. It was, she'd think later, the first time since she'd come home that she'd walked toward him on purpose." }
      ] },
      { t: "(Wait while Minji packs up the cameras.)", when: { ifRouteOpen: 'minji' }, flag: 'epi-route-minji', then: [
        { place: 'Syracuse · The Quad', time: 'Late Night', soft: true },
        { n: "She sat down on the other end of Minji's bench. Minji didn't look up. She kept packing, one lens at a time, each into its own foam cutout, a little click every time one went in, like counting." },
        { n: "Solar didn't help. She knew better. Minji's gear was a kind of altar and you didn't touch it without asking, and she didn't ask, and Minji, she could tell, noticed her not asking, and was grateful, and didn't say so." },
        { s: 'minji', f: 'neutral', t: "You don't have to wait. It's cold." },
        { s: 'solar', t: "I know." },
        { n: "So she waited. The snow came down. The lamp over the bench held steady, didn't flicker once, and they both looked up at it at the same time, and then at each other, and Minji laughed, very softly, and Solar did too." },
        { n: "The last lens went in. Click. Minji zipped the bag shut and sat with her hands flat on top of it, and didn't get up, and Solar didn't either." },
        { s: 'minji', f: 'neutral', t: "I got a lot of footage today. Most of it's the crowd. You'd be surprised what ends up in a crowd." },
        { s: 'minji', f: 'neutral', t: "Can I show you some of it? Not tonight. Sometime. Before I do anything with it." },
        { s: 'solar', t: "You're asking." },
        { s: 'minji', f: 'happy', t: "I always ask." },
        { n: "She did. She always had. Twenty times in a doorway with the lens cap on. Solar sat on the cold bench in the falling snow next to the only person she knew who'd never once taken anything from her without asking first, and felt something in her chest unclench that she hadn't known was clenched, and said yes." }
      ] },
      { t: "(Take the shuttle back with Hanni and Hyein.)", flag: 'epi-route-cover', then: [
        { place: 'Syracuse · The Quad', time: 'Late Night', soft: true },
        { n: "She ran for it. The shuttle was pulling up and Hyein was waving both arms at her from the stop, and Hanni was holding the door with one foot and arguing with the driver about it, and she got there with her gear bag thumping on her hip and her lungs full of cold, and they pulled her up the steps by both wrists, the way they'd pulled her out of bed on Monday." },
        { n: "The last loop of the night was empty except for them and a boy asleep against the back window with his mouth open. The heater was on too high. The seats were sticky. Hyein sat in the middle with her head on Solar's shoulder, and Hanni on the other side with her knees pulled up, and the bus swung round the bottom of the hill and up toward the houses, wipers going, and the snow came at the windshield like stars in a film about space." },
        { s: 'hyein', f: 'happy', t: "Sakura said your name. I'm going to be saying that for a year." },
        { s: 'hanni', f: 'neutral', t: "She's going to be saying it at the chapter meeting. In front of Danielle." },
        { s: 'hyein', f: 'serious', t: "ESPECIALLY in front of Danielle." },
        { n: "Hanni laughed. Then she didn't, and was quiet for a while, watching the snow, and Solar watched her watching it." },
        { s: 'hanni', f: 'serious', t: "She's not going to let it go, you know. The trip. She knows. I don't know how she knows, but she knows." },
        { s: 'solar', t: "I know." },
        { s: 'hyein', f: 'neutral', t: "So we hold it. The emergency vacation. All three of us. As long as it takes." },
        { s: 'hanni', f: 'neutral', t: "Don't call it that." },
        { s: 'hyein', f: 'happy', t: "I'm going to call it that at your wedding." },
        { n: "The bus stopped at the bottom of the Alpha steps. None of them moved, for a second. The heater ticked. The boy at the back snored. And Solar sat between the two of them in the warm with her hands in theirs, one each, and didn't say anything, and didn't need to, and thought that whatever was coming, whatever Danielle had, whatever she'd brought back, this was the part she'd remember: the last loop of the night, too warm, and nobody letting go first." }
      ] }
    ] },
    { n: "It was snowing on all of Syracuse. It had been a long day. It was, by any reasonable measure, only the walk home." }
  ] }

  );
})();
