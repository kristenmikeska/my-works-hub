/* Secrets: runners. Format in femc-social.js above secrets().
   Runners crossover (Kat's novel: Solar Lee at Syracuse). Everything here echoes the published chapters in readers/runners.html.
   - A wrong-number group chat: Hanni typed one digit wrong making the girls' chat, so this Solar gets it (8/30 → 12/31).
     Syracuse is 13–14 hours behind Iwatodai, so their mornings land in her evenings.
   - Jaehyun texting the wrong little sister (8/24, 11/25). Minji, once Kiriko has told Solar about the girl who picks her (11/22).
   - A Christmas Eve question from Hyein, only once Haechan's secret link has started (12/24).
   - Moments: the invitational (10/24, Game Panic) and the Winx Club wings (10/30, the day before Halloween).
   - Hidden place: a side door off the strip, open the three nights before the invitational (10/21–10/23).
   Stamps rn-* and the code "perfect suzu timing" live in achievements.js and codes.js. */
FemcSocial.secrets({
  id: 'runners',
  cast: {
    'rn-hanni': '@hanni', 'rn-hyein': '@hyein', 'rn-jaehyun': 'Unknown Number', 'rn-minji': 'Unknown Number',
    'rn-hoodie': 'Boy in a Hoodie', junpei: 'Junpei', yukari: 'Yukari'
  },
  threads: {
    'rn-gc': { name: 'hanni, hyein', members: ['rn-hanni', 'rn-hyein'] },
    'rn-bro': { name: '+1 (315) 555-0186', members: ['rn-jaehyun'] },
    'rn-minji': { name: '+1 (315) 555-0133', members: ['rn-minji'] }
  },
  texts: [
    /* ── Jaehyun: the first text he ever sends his sister at SU ── */
    { id: 'rn-bro-1', thread: 'rn-bro', date: '8/24', window: 4, slot: 1, msgs: [
      { from: 'rn-jaehyun', t: "Are you settling in alright?" },
      { ask: [
        { t: "Who is this?", then: [
          { from: 'rn-jaehyun', t: "Very funny, Solar." },
          { from: 'rn-jaehyun', t: "Do not be hostile. You know I just want to check on you." }
        ] },
        { t: "I think so. Thank you for asking.", then: [
          { from: 'rn-jaehyun', t: "Good." },
          { from: 'rn-jaehyun', t: "That's all I wanted to know." }
        ] },
        { t: "Yes.", then: [
          { from: 'rn-jaehyun', t: "Good. Call if you need anything." },
          { from: 'rn-jaehyun', t: "You won't. But the offer stands." }
        ] }
      ] }
    ] },

    /* ── The girls' chat, 1: the morning after the first Sigma party ── */
    { id: 'rn-gc-1', thread: 'rn-gc', date: '8/30', window: 4, slot: 1, msgs: [
      { sys: 'hanni added you to a group with hyein' },
      { from: 'rn-hanni', t: "SOLAR we are so worried about you" },
      { from: 'rn-hanni', t: "please let us know you are ok" },
      { from: 'rn-hyein', t: "sorry solar!!! we didnt mean to leave you behind" },
      { from: 'rn-hyein', t: "the party wasnt really that scary, just really stinky" },
      { ask: [
        { t: "Who is this?", then: [
          { from: 'rn-hyein', t: "its US" },
          { from: 'rn-hyein', t: "ur sorority sisters??" },
          { from: 'rn-hanni', t: "hanni and hyein!!! did you hit your head??" }
        ] },
        { t: "I'm okay. What party?", then: [
          { from: 'rn-hyein', t: "WHAT PARTY" },
          { from: 'rn-hyein', t: "the sigma party solar. the STINKY one" },
          { from: 'rn-hanni', t: "oh no she hit her head" }
        ] },
        { t: "I'm fine. Thank you for worrying about me.", then: [
          { from: 'rn-hanni', t: "of course!!! thats what sisters are for" },
          { from: 'rn-hyein', t: "wait why r u typing like that" },
          { from: 'rn-hyein', t: "with the capital letters and the punctuation" },
          { from: 'rn-hyein', t: "solar is NEVER polite before noon" }
        ] }
      ] },
      { from: 'rn-hanni', t: "wait did you get a new phone? your number looks different" },
      { from: 'rn-hyein', t: "omg did u drop it in the sigma bathroom" },
      { ask: [
        { t: "No. I've had this number since April.", then: [
          { from: 'rn-hyein', t: "april??? we met u like a WEEK ago" },
          { from: 'rn-hanni', t: "okay maybe you need more sleep!!!" }
        ] },
        { t: "I think you might have the wrong Solar.", then: [
          { from: 'rn-hyein', t: "lol how many solars do u think there are" },
          { from: 'rn-hanni', t: "there is only one solar!!!" }
        ] }
      ] },
      { from: 'rn-hanni', t: "okay well as long as youre safe!!!" },
      { from: 'rn-hyein', t: "drink water. ttyl" }
    ] },

    /* ── 2: the playoffs (Saturday night there, Sunday morning here) ── */
    { id: 'rn-gc-2', thread: 'rn-gc', date: '9/20', window: 3, slot: 0, msgs: [
      { from: 'rn-hanni', t: "we're waiting for u just outside" },
      { from: 'rn-hyein', t: "YEAH we've got the change of clothes ready to go!!!!!" },
      { from: 'rn-hyein', t: "solar????" },
      { from: 'rn-hyein', t: "the game literally ended" },
      { ask: [
        { t: "What game?", then: [
          { from: 'rn-hyein', t: "THE GAME. ur brothers game. the one ur dad came up for" },
          { from: 'rn-hanni', t: "sunews already posted you in the suite!!" }
        ] },
        { t: "It's Sunday morning here.", then: [
          { from: 'rn-hyein', t: "its SATURDAY NIGHT" },
          { from: 'rn-hanni', t: "solar... where is here" }
        ] },
        { t: "I'm not outside. I'm in Iwatodai.", then: [
          { from: 'rn-hyein', t: "is that a dining hall" },
          { from: 'rn-hanni', t: "i dont think thats a dining hall hyein" }
        ] }
      ] },
      { from: 'rn-hanni', t: "okay this is going to sound weird" },
      { from: 'rn-hanni', t: "but solar just walked out of the elevator" },
      { from: 'rn-hanni', t: "and her phone is in her hand and she is NOT typing" },
      { from: 'rn-hanni', t: "she says she never got any of our texts. her number ends in a different digit" },
      { from: 'rn-hanni', t: "hyein i typed it wrong. ive been texting a stranger for three weeks" },
      { from: 'rn-hyein', t: "..." },
      { from: 'rn-hyein', t: "ok who r u" },
      { ask: [
        { t: "My name is Solar.", then: [
          { from: 'rn-hyein', t: "NO IT ISNT" },
          { from: 'rn-hyein', t: "wait" },
          { from: 'rn-hyein', t: "is it??" },
          { from: 'rn-hanni', t: "thats so pretty!!! you have the same name as our friend!!!" }
        ] },
        { t: "Someone a long way from Syracuse.", then: [
          { from: 'rn-hanni', t: "how long of a way" },
          { from: 'rn-hyein', t: "ok thats the creepiest thing anyones ever texted me and i go to sigma chi parties" }
        ] },
        { t: "Sorry. I liked being worried about.", then: [
          { from: 'rn-hanni', t: "oh no" },
          { from: 'rn-hanni', t: "no thats okay!!! you can keep the worrying" },
          { from: 'rn-hyein', t: "hanni ur adopting a phone number" }
        ] }
      ] },
      { from: 'rn-hanni', t: "okay well. hi other solar!!!" },
      { from: 'rn-hyein', t: "we're not deleting u btw. this is the most interesting thing thats happened to me all semester" }
    ] },

    /* ── 3: the invitational (Saturday there, Sunday here) ── */
    { id: 'rn-gc-3', thread: 'rn-gc', date: '10/25', window: 3, slot: 0, msgs: [
      { from: 'rn-hyein', t: "OTHER SOLAR" },
      { from: 'rn-hyein', t: "OUR SOLAR WON" },
      { from: 'rn-hyein', t: "MVP!!!!!!! OF THE WHOLE COLLEGIATE INVITATIONAL" },
      { from: 'rn-hanni', t: "we made her a sign!! it said LET SOLAR COOK" },
      { from: 'rn-hanni', t: "hyein drew kiriko on it" },
      { from: 'rn-hyein', t: "it looked like a cat in a scarf and i stand by it" },
      { ask: [
        { t: "Tell her congratulations.", then: [
          { from: 'rn-hanni', t: "she says thank you!!!" },
          { from: 'rn-hanni', t: "and also who is telling her congratulations" },
          { from: 'rn-hanni', t: "i said you!!" },
          { from: 'rn-hyein', t: "she made a face. a good face i think" }
        ] },
        { t: "Who's Kiriko?", then: [
          { from: 'rn-hyein', t: "fox ninja healer lady. throws little bells at people to save them" },
          { from: 'rn-hanni', t: "solar loves her more than anyone alive" },
          { from: 'rn-hyein', t: "more than ME" }
        ] },
        { t: "I win this in every universe.", then: [
          { from: 'rn-hyein', t: "..." },
          { from: 'rn-hyein', t: "ok that is SO something she would say" },
          { from: 'rn-hanni', t: "are you sure you're not her???" },
          { from: 'rn-hyein', t: "hanni we checked. she was literally on stage" }
        ] }
      ] },
      { from: 'rn-hyein', t: "NEW RULE" },
      { from: 'rn-hyein', t: "if u were the MVP of a collegiate invitational today u drink" },
      { from: 'rn-hyein', t: "ur not but ur named solar so u drink too" },
      { from: 'rn-hanni', t: "she means water!!! drink water!!!" },
      { ask: [
        { t: "It's lunchtime here. Cheers.", then: [{ from: 'rn-hyein', t: "CHEERS OTHER SOLAR" }, { from: 'rn-hyein', t: "brunch of champions" }] },
        { t: "(Raise a juice box to the screen.)", then: [{ from: 'rn-hanni', t: "i can feel it. thank you!!!" }] }
      ] }
    ] },

    /* ── 4: Halloween plans, sent to the wrong chat ── */
    { id: 'rn-gc-4', thread: 'rn-gc', date: '10/28', window: 2, slot: 1, msgs: [
      { from: 'rn-hyein', t: "OMG AND COSTUMES" },
      { from: 'rn-hyein', t: "we are gonna be... DRUM ROLL" },
      { from: 'rn-hyein', t: "winx CLUBBBB" },
      { from: 'rn-hyein', t: "UR GONNA BE STELLA" },
      { from: 'rn-hyein', t: "LTRLY THE FAIRY OF THE SUN AND MOON" },
      { from: 'rn-hyein', t: "ITS UR NAME THIS WAS PREDESTINED FR" },
      { from: 'rn-hanni', t: "hyein" },
      { from: 'rn-hanni', t: "wrong chat" },
      { from: 'rn-hyein', t: "NOOOOO" },
      { from: 'rn-hyein', t: "ok but actually. other solar. same name. same destiny. ur stella too" },
      { ask: [
        { t: "Only if the wings are small.", then: [
          { from: 'rn-hyein', t: "SMALL WINGS?!" },
          { from: 'rn-hanni', t: "thats exactly what she said!!!" },
          { from: 'rn-hyein', t: "two solars. one wing policy" }
        ] },
        { t: "What's Winx Club?", then: [
          { from: 'rn-hyein', t: "i have never been so hurt in my life" },
          { from: 'rn-hanni', t: "its about girls who go to a magic school!!" },
          { from: 'rn-hanni', t: "and they fight monsters at night!!" },
          { from: 'rn-hyein', t: "very relatable content" }
        ] },
        { t: "I'm not really a fairy person.", then: [
          { from: 'rn-hyein', t: "neither is she" },
          { from: 'rn-hyein', t: "she still has to" }
        ] }
      ] }
    ] },

    /* ── 5: the camping trip upstate. No service, except this chat ── */
    { id: 'rn-gc-5', thread: 'rn-gc', date: '11/14', window: 3, slot: 1, msgs: [
      { from: 'rn-hyein', t: "ok so" },
      { from: 'rn-hyein', t: "we are in the woods" },
      { from: 'rn-hyein', t: "there is NO service. zero bars. chungha warned us" },
      { from: 'rn-hanni', t: "my texts to my mom won't go through" },
      { from: 'rn-hyein', t: "mine wont go to ANYONE" },
      { from: 'rn-hyein', t: "except this chat" },
      { from: 'rn-hanni', t: "why does only this chat work???" },
      { ask: [
        { t: "Are you safe?", then: [
          { from: 'rn-hanni', t: "yes!! just cold" },
          { from: 'rn-hyein', t: "and haunted apparently" }
        ] },
        { t: "Maybe the signal is coming from my side.", then: [
          { from: 'rn-hyein', t: "dont SAY that" },
          { from: 'rn-hanni', t: "that is a little bit spooky other solar" }
        ] },
        { t: "What time is it there?", then: [
          { from: 'rn-hanni', t: "almost 10am!!" },
          { from: 'rn-hyein', t: "why" }
        ] }
      ] },
      { from: 'rn-hyein', t: "other solar whats ur time" },
      { ask: [
        { t: "11:59.", then: [{ sys: 'Message not delivered' }] },
        { t: "Almost midnight.", then: [{ sys: 'Message not delivered' }] }
      ] }
    ] },

    /* ── Christmas Eve. Only once Haechan's link has started ── */
    { id: 'rn-gc-hc', thread: 'rn-gc', date: '12/24', window: 2, slot: 1, unlock: { links: { haechan: 1 } }, msgs: [
      { from: 'rn-hyein', t: "ok random q other solar" },
      { from: 'rn-hyein', t: "its christmas eve and im being nosy" },
      { from: 'rn-hyein', t: "is there a boy over there" },
      { from: 'rn-hanni', t: "HYEIN" },
      { from: 'rn-hyein', t: "what!! its a valid question!!" },
      { from: 'rn-hyein', t: "specifically one who calls u princess. or sweetheart. asking for science" },
      { ask: [
        { t: "...Maybe.", then: [
          { from: 'rn-hyein', t: "MAYBE" },
          { from: 'rn-hanni', t: "omg" },
          { from: 'rn-hyein', t: "its a universal constant. i KNEW it" }
        ] },
        { t: "He doesn't call me anything. Yet.", then: [
          { from: 'rn-hanni', t: "yet!!!!!" },
          { from: 'rn-hyein', t: "YET" },
          { from: 'rn-hyein', t: "oh hes so done for" }
        ] },
        { t: "Why would you ask that?", then: [
          { from: 'rn-hyein', t: "no reason" },
          { from: 'rn-hanni', t: "there is a reason" },
          { from: 'rn-hyein', t: "there is NO reason. merry christmas!!!" }
        ] }
      ] }
    ] },

    /* ── 6: New Year's Eve. She gets to 2010 first ── */
    { id: 'rn-gc-6', thread: 'rn-gc', date: '12/31', window: 3, slot: 1, stamp: 'rn-wrong-chat', rename: 'winx club (+1)', msgs: [
      { from: 'rn-hyein', t: "OTHER SOLAR" },
      { from: 'rn-hyein', t: "is it 2010 over there yet" },
      { from: 'rn-hanni', t: "its not even 9am here and you're almost in next year!!" },
      { from: 'rn-hyein', t: "also sorry about november. ur last text never came through. the woods ate it" },
      { ask: [
        { t: "Almost. A couple more hours.", then: [
          { from: 'rn-hyein', t: "REPORT BACK. tell us if there are flying cars" },
          { from: 'rn-hanni', t: "or if its just nice!!" }
        ] },
        { t: "It's quiet here tonight.", then: [
          { from: 'rn-hanni', t: "that sounds nice" },
          { from: 'rn-hanni', t: "its never quiet here" }
        ] }
      ] },
      { from: 'rn-hanni', t: "hey. we wanted to say something" },
      { from: 'rn-hanni', t: "when i typed your number wrong i thought it was the most embarrassing thing ive ever done" },
      { from: 'rn-hanni', t: "but im really glad it was you on the other end" },
      { from: 'rn-hyein', t: "ok hanni dont make me cry its 8am" },
      { from: 'rn-hyein', t: "ALSO ur in this chat forever. no take backs" },
      { ask: [
        { t: "Happy new year, Hanni. Hyein.", then: [{ from: 'rn-hanni', t: "happy new year other solar!!!" }] },
        { t: "Tell your Solar I said happy new year.", then: [
          { from: 'rn-hyein', t: "she says" },
          { from: 'rn-hyein', t: "happy new year. and to stop stealing her name" },
          { from: 'rn-hanni', t: "she was smiling!!! i saw it" }
        ] },
        { t: "Small wings forever.", then: [{ from: 'rn-hyein', t: "SMALL WINGS FOREVER" }] }
      ] },
      { sys: 'hyein named the group "winx club (+1)"' },
      { from: 'rn-hyein', t: "there. now its official" }
    ] },

    /* ── Minji, once Kiriko has told Solar about the girl who picks her ── */
    { id: 'rn-minji-1', thread: 'rn-minji', date: '11/22', window: 5, slot: 1, unlock: { links: { kiriko: 4 } }, rename: 'minjibear', msgs: [
      { from: 'rn-minji', t: "hey solar, its your dps player" },
      { from: 'rn-minji', t: "jk. im not. hanni gave me this number" },
      { from: 'rn-minji', t: "she says theres a solar on the other end who isnt our solar" },
      { from: 'rn-minji', t: "which is the most cursed sentence ive ever read" },
      { from: 'rn-minji', t: "so. other solar. do u play" },
      { ask: [
        { t: "Play what?", then: [
          { from: 'rn-minji', t: "overwatch. obviously" },
          { from: 'rn-minji', t: "ok so thats a no. tragic" },
          { from: 'rn-minji', t: "our solar is the best kiriko on the east coast" },
          { from: 'rn-minji', t: "dont tell her i said east coast. she'll say world" }
        ] },
        { t: "I know a Kiriko.", then: [
          { from: 'rn-minji', t: "everyone knows a kiriko" },
          { from: 'rn-minji', t: "i know THE kiriko" },
          { from: 'rn-minji', t: "shes my support" }
        ] }
      ] },
      { from: 'rn-minji', t: "anyway. if u ever see a fox girl with little bells over there" },
      { from: 'rn-minji', t: "tell her she has a fan" },
      { ask: [
        { t: "She knows. Someone picks her every time.", then: [
          { from: 'rn-minji', t: "..." },
          { from: 'rn-minji', t: "yeah" },
          { from: 'rn-minji', t: "thats my support" }
        ] },
        { t: "I'll tell her.", then: [
          { from: 'rn-minji', t: "good" },
          { from: 'rn-minji', t: "tell her the suzus were perfectly timed" }
        ] }
      ] },
      { from: 'rn-minji', t: "ok. saving u as other solar" },
      { from: 'rn-minji', t: "save me as minjibear. everyone does" }
    ] },

    /* ── Jaehyun again, Thanksgiving week. He works it out ── */
    { id: 'rn-bro-2', thread: 'rn-bro', date: '11/25', window: 3, slot: 1, stamp: 'rn-settling-in', rename: 'Jaehyun', msgs: [
      { from: 'rn-jaehyun', t: "Father moved the foundation function to Monday. The revised schedule is in your email." },
      { from: 'rn-jaehyun', t: "Please read it this time, Solar." },
      { from: 'rn-jaehyun', t: "Press will be attending. Wear something appropriate." },
      { ask: [
        { t: "I think you have the wrong number.", then: [] },
        { t: "You texted me in August, too.", then: [] }
      ] },
      { from: 'rn-jaehyun', t: "..." },
      { from: 'rn-jaehyun', t: "I see." },
      { from: 'rn-jaehyun', t: "I apologize. I've been sending family business to a stranger." },
      { from: 'rn-jaehyun', t: "In my defense, you answered politely. That should have been my first clue." },
      { ask: [
        { t: "Did she settle in alright? Your sister.", then: [
          { from: 'rn-jaehyun', t: "She did." },
          { from: 'rn-jaehyun', t: "Better than I expected. She has good friends. And a team." },
          { from: 'rn-jaehyun', t: "She would never tell me any of that herself." }
        ] },
        { t: "I'm settling in too, if you were wondering.", then: [
          { from: 'rn-jaehyun', t: "I was, actually." },
          { from: 'rn-jaehyun', t: "Good." }
        ] }
      ] },
      { from: 'rn-jaehyun', t: "This is Jaehyun, by the way. Lee." },
      { from: 'rn-jaehyun', t: "I hope you settled in alright too. Wherever you are." }
    ] }
  ],

  moments: [
    /* The collegiate invitational, a world away. */
    { id: 'rn-the-kiriko', date: '10/24', slot: 1, label: 'A strange night', title: 'the kiriko', place: 'Paulownia Mall · Game Panic', music: 'mystery', stamp: 'rn-the-kiriko', scene: [
      { n: "Saturday night at Game Panic was all noise and no air, every cabinet shouting over every other cabinet, and Junpei had been feeding coins into the same fighting game for forty minutes with the doomed optimism of a man who believed the next round would be different." },
      { s: 'junpei', f: 'happy', t: "Okay. Okay. Watch this one. This is the one." },
      { n: "It was not the one. Solar watched his character get juggled into a corner and looked away, politely, at the row of demo screens by the door." },
      { n: "Every one of them, for one second, was showing the same thing. Not a demo. A room she had never been in, folding chairs in crooked rows, a projector screen the size of a garage door, a pink sign shedding glitter over a crowd, and in the middle of it all a girl in a fox mask with two little blades of light still leaving her hand." },
      { n: "Behind her, a boy in a hoodie with a lanyard around his neck nudged his friend." },
      { s: 'rn-hoodie', t: "Yo, that's the Kiriko." },
      { n: "He said it at a volume he clearly believed was quiet, and he was looking right at her. When she turned all the way around, he wasn't there. Nobody was, except a little kid working the claw machine with grim, total focus." },
      { s: 'junpei', f: 'surprised', t: "Huh? Who's Kiriko? Is that, like, a band?" },
      { choose: [
        { t: "(Look at the screens again.)", then: [
          { n: "They were demos again. A racing game, a rhythm game, a pink cartoon cat dancing badly. But for half a second before it went, one of them had shown three letters in enormous type, the way things only get written when a room is screaming. MVP." }
        ] },
        { t: "A friend. I think.", then: [
          { ifRank: { kiriko: 4 }, then: [
            { n: "It was true, which was the strange part. A shrine girl at the top of a hundred and twelve steps had told her about this in July, popsicle dripping on the stone. There's a girl. She picks me every time." }
          ], else: [
            { n: "It was a strange thing to say about a word she'd never heard before. It felt true anyway." }
          ] },
          { s: 'junpei', f: 'neutral', t: "...Okay, mystery girl." }
        ] }
      ] },
      { n: "On the way out Junpei bought two sodas from the machine by the door and handed her one without asking, and she held it against her cheek the whole walk to the station, cold and fizzing, thinking about a hundred strangers somewhere, all breathing in at once." },
      { n: "She didn't know who'd won. She knew who'd won." }
    ] },

    /* The day before Halloween. Hyein's wing policy, delivered. */
    { id: 'rn-small-wings', date: '10/30', slot: 0, label: 'A package', title: 'small wings', place: 'Iwatodai Dorm · Front', music: 'joy', stamp: 'rn-small-wings', scene: [
      { n: "There was a box on the dorm steps when she got home, flat and white and tied with curling ribbon, and across the lid in fat round marker someone had written SOLAR, and then underneath, smaller, as if they'd panicked about it, (the other one)." },
      { n: "No stamp. No address. Nothing on it but her name and a fine, persistent shedding of gold glitter that had already gotten onto the steps, the doormat, and somehow her shoes." },
      { s: 'yukari', f: 'surprised', t: "Is that for you? Who's it from?" },
      { n: "Inside, folded in tissue paper, was a pair of fairy wings. Small ones. Barely bigger than two hands, gold and gauzy, with a stick-on star where they met in the middle. The sticky note on top said small wings, as negotiated, in handwriting that looked like it had been written while laughing." },
      { s: 'junpei', f: 'happy', t: "Ohhh, Halloween! That's tomorrow, right? Do we do Halloween here? Dibs on Superman." },
      { s: 'yukari', f: 'neutral', t: "You'd be Clark Kent at best, Stupei." },
      { s: 'junpei', f: 'flustered', t: "Clark Kent IS Superman! That's the whole point of the guy!" },
      { choose: [
        { t: "(Try them on.)", then: [
          { n: "The elastic straps fit like they'd been measured for her. She stood on the front steps in her school uniform with two small gold wings on her back, and Yukari put a hand over her mouth, and Junpei said, with total sincerity, that she looked like the fairy of something." },
          { s: 'yukari', f: 'blushing', t: "...Okay. That's actually really cute." }
        ] },
        { t: "Someone negotiated for these. It wasn't me.", then: [
          { n: "She said it before she knew why. Somewhere, a girl had argued about wing dimensions and lost the big argument and won the small one, and Solar felt, very specifically, proud of her." },
          { s: 'yukari', f: 'serious', t: "...You're being weird. Weirder than usual." }
        ] }
      ] },
      { n: "She had never seen the show. She didn't know what the fairies were called, or what they fought, or why. But holding the wings she knew exactly which one she'd be. The fairy of the sun and the moon. It was her name. It felt, absurdly, predestined." },
      { n: "That night she hung them from the corner of her mirror. At midnight the Dark Hour came and turned the room green and wrong, the way it always did, and the wings, alone out of everything she owned, stayed gold." }
    ] }
  ],

  places: [
    /* A side door off the strip, the three nights before the invitational. */
    { id: 'rn-side-door', area: 'Iwatodai Strip', title: 'A side door', label: 'A side door', dates: ['10/21', '10/22', '10/23'], slot: 1,
      hint: "There's a beige door in the back alley you've never seen before. It's propped open an inch, and the air coming out of it is the wrong kind of cold.",
      place: 'Iwatodai Strip · Back Alley', music: 'mystery', stamp: 'rn-let-solar-cook', scene: [
      { n: "The door was steel, painted the dull beige of every institution in the world, wedged open an inch with a rubber doorstop. Light came through the gap. So did the cold, a thin, glassy cold that smelled like leaves and lake water, nothing like the bay." },
      { n: "When she pulled, it stuck. Something in the frame. She put her shoulder into it and it gave all at once, like it had been waiting for someone who knew the trick." },
      { place: 'The Extracurricular Building · Gaming Lab', time: 'Evening' },
      { n: "A long hallway with tall windows. Outside them, a dark campus she had never walked, amber lamps in a row along a path, a flag snapping somewhere. A folding sign leaned against the wall: ESPORTS INVITATIONAL - DOORS OPEN AT NOON. Someone had taped SATURDAY!!! underneath it in pink marker." },
      { n: "The lab at the end was dark except for one monitor. Rows of expensive computers asleep behind the glass, folding chairs stacked against the wall, a projector screen the size of a garage door rolled halfway down, as if someone had been practicing the moment it would be needed." },
      { n: "On the one screen still awake, a girl in a fox mask stood alone in an empty practice range, perfectly still, waiting for someone to stop being distracted and come back." },
      { ifRank: { kiriko: 4 }, then: [
        { n: "Solar knew her. Not this her, the flat bright one on the screen, but the one on the shrine steps with melon pan and a broom and opinions. She had the sudden, ridiculous urge to wave." }
      ], else: [
        { n: "Solar didn't know her. She had the strangest feeling she was supposed to." }
      ] },
      { n: "Propped against the chair was a pink poster board edged in silver glitter that was coming off onto the carpet like the tail of a comet. LET SOLAR COOK, in careful, even letters. Around it, in a messier hand, eleven drawn stars and a small cartoon that was probably the fox girl and looked, charitably, like a cat in a scarf." },
      { choose: [
        { t: "(Sit down. Put on the headset.)", then: [
          { n: "The chair was set lower than she'd have set it, and the mouse was so sensitive the camera whipped all the way around the first time she touched it. Somebody had been teased about that once, she thought. Somebody had kept it anyway." },
          { n: "She found a key that did something. The girl on the screen threw a little bell of light at nothing, at no one, and it chimed, and for one second the empty lab felt full, a hundred people holding their breath to see where it would land." }
        ] },
        { t: "(Read the sticky note on the monitor.)", then: [
          { n: "Cooldown drills, it said. Suzu, teleport, suzu. Hold it. HOLD IT. And underneath, in a different pen, smaller, like it had been added the night before something big: you've got this." },
          { n: "The handwriting wasn't hers. It was close enough that she put the note back exactly where she'd found it." }
        ] },
        { t: "(Don't touch anything. It isn't your chair.)", then: [
          { n: "It wasn't. It was somebody's whole life, left running on one screen overnight, and she stood there with her hands in her pockets and let it be." }
        ] }
      ] },
      { ifRank: { haechan: 1 }, then: [
        { n: "From somewhere down the hall, past a row of doors with little windows that said MUSIC, came the faintest beat, the kind that leaks out of someone else's headphones, looping over itself in the dark. She knew, without knowing how, that if she followed it she'd find a boy who didn't want to be found yet. She didn't follow it. Not in this world." }
      ] },
      { place: 'Iwatodai Strip · Back Alley', time: 'Evening' },
      { n: "On the way out the door stuck again, and she shouldered it open without thinking, the way you learn a door after a few months of cold. The alley was the alley. The strip was the strip, neon and noodle steam and a salaryman singing to a vending machine." },
      { n: "There was silver glitter on her sleeve. It didn't come off for a week." }
    ] }
  ]
});
