/* The HOAX epilogue, second pass (Nov 6 2026): the last days (Kat: "open a few more evenings / late nights there so more of
   those last scenes fit in one run"). world.js now opens Late Night on 1/11 (after epi-h-after) and makes 1/12's council duty
   optional, so the last two days have four free times instead of two: 1/11 evening, 1/11 late, 1/12 After School, 1/12
   evening. The evening ones (jungwon-5 / jihoon-6 / council-3 by route, cherry-4) keep the evenings; people.js jihoon-5
   'fix it' (other routes) now also runs Late Night 1/8 and 1/10, so it no longer crowds them. These seven fill the new times.
   Data only; bonds go through add() as in people.js (append, whichever file loads first).

   Hangouts
     1/11 Late Night (after epi-h-after: she's back in bed, the can in her coat pocket, Nana across her legs)
       jungwon  epi-h-jungwon-late-3 'still on'     every route. Jungwon route: the line from epi-h-after never hung up; other
                                                    routes: he calls at 12:50. "I said I'd look at you. I looked at you." Nana
                                                    breathes into the phone. Choice: the hallway / anything else / Nana.
       cherry   epi-h-cherry-late-4 'facetime'      every route. A sheet mask and the Care Bears; she watched the clip forty
                                                    times for Solar's angles; she props the phone on her pillow and won't hang up.
       jihoon   epi-h-jihoon-late-2 'the car'       route jihoon. The car from epi-h-after is still at the curb; she goes down in
                                                    her coat with Nana; melon bars; reads epi-h-jihoon-speaks, epi-h-jihoon-remembers.
       hyunsuk  epi-h-hyunsuk-late-2 'u up'         every route. The old chat at 1:30 a.m.; then Hyunsuk alone: "four minutes
                                                    away. in case." Reads epi-h-suk-seat. Choice: "no." / "i will be."
     1/12 After School (after epi-h-results: they walked her to the gate; she's home)
       junkyu   epi-h-junkyu-3 'the rest of the way' Junkyu ran the long way round; a clay Nana keyring he'd saved since November;
                                                    Nana knocks him into the snow. Choice: a snow angel / the keyring on her bag.
       sunoo    epi-h-sunoo-3 'the back door'       Yeobo's back door, Nana, and Halmeoni's soup bone with his name on it (texts-
                                                    more.js); the clocks still at twelve; "he knows where you are."
       asahi    epi-h-asahi-3 'see-through'         Asahi walks her the long way; one earbud; "no one cares" (he cares).
   Flags set: none. Flags read: epi-h-jihoon-speaks, epi-h-jihoon-remembers, epi-h-suk-seat (all optional branches).
   Glitches: none (nothing of the cover is lied about; the strangeness is only seen, never named).

   Inventions for Kat to confirm
   - Junkyu made a clay Nana keyring in art club in November and was saving it.
   - Halmeoni finally meets Nana in person at the back door on the last afternoon.
   - Asahi shares one earbud on the walk (the song is never named).
   Canon held: no Haechan by name; no Danielle, no video; the gym tonight is never mentioned (she doesn't know yet: she wakes
   at 11:40 "knowing", story-end.js); Jungwon still doesn't ask; Hyunsuk is softer, not healed. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const LATE = ['late'], AFTER = ['after'];
  const ROOM = 'Hanlim · Home · Her Room';

  /* ── 1/11, Late Night ── */
  add('jungwon', 'friend', [
    { id: 'epi-h-jungwon-late-3', title: 'still on', hint: "Jungwon is still on the line. Or he's calling back. He's whispering either way.",
      after: '1/11', until: '1/11', slots: LATE, events: ['epi-h-after'], noFlags: [], route: null, noRoute: null,
      place: ROOM, time: 'Late Night', scene: [
      { music: 'epi-h-romance' },
      { ifEpiRoute: 'jungwon', then: [
        { n: "The phone was still on the pillow. She'd thought he'd hung up. He hadn't. At ten past one the screen still said *Won* and a timer under it that had been running for an hour and a half, and when she put it to her ear she could hear his house, the radiator, the very faint whistle of Maeumi asleep, and him, breathing, awake." },
        { s: 'jungwon', f: 'neutral', t: "...Sol? Are you still there." },
        { s: 'solar', f: 'happy', t: "I'm still here." }
      ], else: [
        { n: "At ten to one her phone lit on the pillow, no sound, just the name. *Won.* His phone was supposed to be on the kitchen counter by ten. She answered it under the duvet, the way he'd taught her, without meaning to teach her anything." },
        { s: 'jungwon', f: 'neutral', t: "I went down and got it. The kitchen floor's very cold. I want that on record." },
        { s: 'solar', f: 'happy', t: "You stole your own phone?" },
        { s: 'jungwon', f: 'neutral', t: "I retrieved it." }
      ] },
      { n: "He didn't ask about the hearing. He didn't ask about the clip, or the bleachers through her chest, or the frame everybody had screenshotted. He'd made that decision a long time ago, about a lot of things, and he was a person who kept his decisions the way other people kept promises; she could hear him keeping it, in the careful way he left the silence alone." },
        { s: 'jungwon', f: 'neutral', t: "I said I'd look at you. Before. During it." },
        { s: 'solar', f: 'sad', t: "I know." },
        { s: 'jungwon', f: 'serious', t: "I looked at you the whole time. Even then. Especially then." },
      { n: "Something behind her ribs went very quiet and very warm at once. Nana, across her legs, lifted his head at the change in her breathing and looked at her in the dark." },
      { choose: [
        { t: "(Tell him what the hallway looked like.)", stat: { courage: 1 }, then: [
          { n: "She told him. Not all of it. The long corridor, the lockers, the moon in the window that was the wrong size for any window, a voice she couldn't answer. She said it into the pillow in a whisper, and he didn't say a single thing the whole time, and when she stopped he was quiet for so long she thought the call had dropped." },
          { s: 'jungwon', f: 'sad', t: "Was it cold?" },
          { s: 'solar', f: 'surprised', t: "...What?" },
          { s: 'jungwon', f: 'neutral', t: "The hallway. Was it cold. I want to know if you were cold." },
          { n: "Of all the things he could have asked. She pressed the heel of her hand against her eyes and laughed, a little wet." },
          { s: 'solar', f: 'happy', t: "No. It wasn't cold." },
          { s: 'jungwon', f: 'neutral', t: "Okay. Good. That's one thing." }
        ] },
        { t: "Talk about anything else. Anything.", stat: { kindness: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "Spinning reels have a thing called a bail. It's a little arm. You flip it open to cast and closed to reel in. If you forget to close it you lose everything. I've been thinking about that all week." },
          { s: 'solar', f: 'happy', t: "Why?" },
          { s: 'jungwon', f: 'flustered', t: "I don't know. It seemed important. It seemed like the kind of thing a person should remember to do." },
          { n: "He talked about reels for twenty minutes, in a whisper, in perfect order, and she lay in the dark and listened to the most boring thing anyone had ever told her and felt safer than she had all day." }
        ] },
        { t: "(Hold the phone out to Nana.)", stat: { charm: 1 }, then: [
          { n: "Nana put his whole nose against the screen and breathed on it, loudly, like a steam engine leaving a station." },
          { s: 'jungwon', f: 'happy', t: "Hello, Nana." },
          { s: 'jungwon', f: 'neutral', t: "Look after her tonight. I can't. I would if I could." },
          { n: "Nana's tail thumped the duvet twice, which in Nana meant *obviously*, and somewhere a block away, under another duvet, a very small dog woke up and yelled at the sound of his voice, and Jungwon said *no, no, no* in a frantic whisper, and she laughed so hard she had to put the pillow over her face." }
        ] }
      ] },
      { n: "He fell asleep first. She knew because the whisper went slower and then went out, mid-word, and turned into breathing. She didn't hang up. She lay with the phone on the pillow and Nana's weight on her legs and listened to Yang Jungwon sleep, a block away, in a house she'd stood outside of in the snow, and the last thing she thought before she went too was that she wanted to remember the exact sound of it." }
    ] }
  ]);

  add('cherry', 'friend', [
    { id: 'epi-h-cherry-late-4', title: 'facetime', hint: "Cherry is FaceTiming at 12:40 in a sheet mask. She will not be hanging up.",
      after: '1/11', until: '1/11', slots: LATE, events: ['epi-h-after'], noFlags: [], route: null, noRoute: null,
      place: ROOM, time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "The FaceTime came through at 12:40, and the face on it was white and wet and expressionless and had two holes for eyes, and for one bad second her whole body went cold, and then the face said *answer faster, bitch,* and it was Cherry in a sheet mask, lying on her side in bed with a wall of Care Bears behind her like an audience." },
      { s: 'cherry', f: 'neutral', t: "Don't look at me. Look at my eyes. My eyes are the only part of me that's not hydrating." },
      { s: 'solar', f: 'happy', t: "It's almost one, Cher." },
      { s: 'cherry', f: 'serious', t: "I know what time it is. I've been watching it go round. Listen. I've watched the clip forty times." },
      { s: 'solar', f: 'sad', t: "...Cherry." },
      { s: 'cherry', f: 'serious', t: "Not like that. For your angles. Somebody had to. And I want you to know, as a professional, that your skin looked *amazing.* For a ghost. Like, glowing. Literally. I'm not even joking, I'm going to ask you what serum." },
      { n: "She laughed. She hadn't expected to. It came out of her like a cough, surprised and too loud for one in the morning, and Nana lifted his head off her legs to see what was wrong, and Cherry, on the screen, smiled under the sheet mask so the mask wrinkled." },
      { s: 'cherry', f: 'happy', t: "There she is. There's my wife." },
      { n: "She'd seen Cherry today. Cherry had been at the hearing, with her bag in her lap and her knuckles white on the strap. They'd walked out of school together. Cherry had called anyway, and Solar understood why, and neither of them said it." },
      { n: "Nana chose that moment to climb up the bed and shove his entire face into the phone, nose first, so that for a second Cherry's whole screen was one enormous black wet nose." },
      { s: 'cherry', f: 'happy', t: "Hi, baby. Hi, my baby. Hi, my big beautiful boy. You're the only man in my life who has never once let me down." },
      { s: 'solar', f: 'happy', t: "What about Sunghoon?" },
      { s: 'cherry', f: 'neutral', t: "Sunghoon is *pending*. Nana is *proven*." },
      { choose: [
        { t: "Don't hang up.", stat: { kindness: 1 }, then: [
          { s: 'cherry', f: 'serious', t: "I wasn't going to. I was never going to. I was going to put you on the pillow and fall asleep on you, and you were going to let me." },
          { n: "She did. Cherry propped the phone against a Care Bear and peeled off the sheet mask and lay down facing it, and Solar propped hers against Nana, which he allowed, and they lay there on two pillows on two sides of town with the lights off, the screens the only light, talking about nothing, about Valentine's Day, about whether *soon* counted as a date, about Cherry's grandmother printing photos, until Cherry's eyes closed in the middle of a sentence." },
          { n: "The screen stayed on. Cherry's face, asleep, pillow-creased, with a Care Bear's foot in the corner of the shot. Solar watched it for a long time." }
        ] },
        { t: "Cher. Thank you for looking at my angles.", stat: { charm: 1 }, then: [
          { s: 'cherry', f: 'flustered', t: "Shut up. Don't. It's one in the morning, I'm emotional, I'm wearing a mask that cost three thousand won, don't make me cry into it, it'll ruin the essence." },
          { s: 'solar', f: 'happy', t: "I love you." },
          { s: 'cherry', f: 'sad', t: "I love you, you dumb bitch. Go to sleep. I'm not hanging up. I'll know if you hang up." }
        ] }
      ] }
    ] }
  ]);

  add('jihoon', 'friend', [
    { id: 'epi-h-jihoon-late-2', title: 'the car', hint: "Jihoon's car is still at the curb with its headlights off. It hasn't moved.",
      after: '1/11', until: '1/11', slots: LATE, events: ['epi-h-after'], noFlags: [], route: 'jihoon', noRoute: null,
      place: "Hanlim · Jihoon's Car", time: 'Late Night', scene: [
      { music: 'epi-h-jihoon' },
      { n: "At one she gave up. She put her coat on over her pajamas, the left pocket still heavy, and went down the stairs in her socks with her boots in her hand, and Nana came after her, because Nana came after her everywhere now, and she didn't have it in her to tell him no." },
      { n: "The car was exactly where it had been. Engine running for the heat, headlights off, the snow going up past the windscreen in that slow steady way it did now. She opened the passenger door and got in, and Nana got in the back, all of him, with a sound like a sofa being delivered, and put his head between the two front seats." },
      { s: 'jihoon', f: 'surprised', t: "I Said I'd Leave When Your Light Was Off." },
      { s: 'solar', f: 'neutral', t: "It's off." },
      { s: 'jihoon', f: 'neutral', t: "And Yet Here You Are. In My Vehicle. With My Son. Who Is Shedding On The Upholstery." },
      { n: "He put his hand back without looking and found Nana's head and left it there, scratching behind one ear in a slow, absent circle, and Nana shut his eyes and sighed through his nose so the windscreen fogged." },
      { s: 'jihoon', f: 'happy', t: "He Missed Me. Obviously. Look At Him. He's Been Starved Of Paternal Affection." },
      { n: "There was a convenience-store bag on the dashboard with two melon bars in it, sweating slightly in the heat. He'd bought two. He'd sat out here for two hours with two." },
      { ifFlag: 'epi-h-jihoon-speaks', then: [
        { s: 'jihoon', f: 'serious', t: "...Did I Do Okay. Today. When I Stood Up." },
        { s: 'solar', f: 'sad', t: "You did really okay, Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "Don't Say It Like That. Say It Like I Was Amazing. I Was Amazing." },
        { s: 'solar', f: 'happy', t: "You were amazing." },
        { s: 'jihoon', f: 'sad', t: "...Thanks." }
      ] },
      { ifFlag: 'epi-h-jihoon-remembers', then: [
        { s: 'jihoon', f: 'serious', t: "Don't Explain The Clip To Me. Not Me. Of All People. I Know What I Saw. I've Seen Weirder. I've Been Weirder." },
        { n: "He didn't look at her when he said it. He looked at the snow going up. She remembered the porch, the pots, *I remember. All of it.* She didn't explain anything." }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Don't Explain. I Don't Want The Explanation. I Want A Melon Bar And Five Minutes And My Son." }
      ] },
      { choose: [
        { t: "(Eat the melon bar.)", stat: { kindness: 1 }, then: [
          { n: "They ate the melon bars in the car with the heater roaring, like they were nine and it was July and his mother was going to come out on the porch any second and tell them they'd ruin their dinner, which neither of them said, and Nana watched every bite with total, tragic attention, and Jihoon gave him the stick to lick, and called it a Grave Sin, and did it anyway." }
        ] },
        { t: "Jihoon. Go home and sleep. Please.", stat: { courage: 1 }, then: [
          { s: 'jihoon', f: 'neutral', t: "I Will. I Will. Once I've Seen Your Light Go Off Again. I'm Very Literal. It's A Condition." },
          { s: 'solar', f: 'sad', t: "Promise?" },
          { s: 'jihoon', f: 'serious', t: "I Promise, Sol. Look At Me. I'm Promising. Sober, Even. Write It Down." }
        ] }
      ] },
      { n: "She went back in at half past one. She went up and turned the light on and then off again, on purpose, so he'd see it go, and stood at the curtain. The car sat there for a minute longer. Then it pulled away from the curb, slowly, headlights off until the corner, so they wouldn't sweep her parents' window, the way he'd always done it, since he got his licence, since before." }
    ] }
  ]);

  add('hyunsuk', 'friend', [
    { id: 'epi-h-hyunsuk-late-2', title: 'u up', hint: "The old group chat is awake at 1:30 a.m. Hyunsuk started it.",
      after: '1/11', until: '1/11', slots: LATE, events: ['epi-h-after'], noFlags: [], route: null, noRoute: null,
      place: ROOM, time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "Her phone buzzed at half past one, and it wasn't Jungwon and it wasn't Cherry and it wasn't the forum. It was the old chat, which hadn't had a message in it since dinner, waking up all at once like a house where somebody had dropped a pan." },
      { phone: [
        { from: 'hyunsuk', t: "geniusuk: u up" },
        { from: 'asahi', t: "asanoonecares: no one in this chat is asleep. don't insult us" },
        { from: 'jaehyuk', t: "jaehyukkie: i'm awake. i'm always awake. it's fine" },
        { from: 'junkyu', t: "junkyute: i was asleep!!! but now i'm up!!! hi solar!!!!!" },
        { from: 'cherry', t: "cherryblossoms: im on facetime with her shut up" }
      ], contact: "rip solar kim (she's fine probably)", group: true },
      { ifEpiRoute: 'jihoon', then: [
        { phone: [
          { from: 'jihoon', t: "jihoney: Am Outside Her House. Do Not Ask Why. Simply Respect It" },
          { from: 'hyunsuk', t: "geniusuk: man" },
          { from: 'hyunsuk', t: "geniusuk: ok. respect" }
        ], contact: "rip solar kim (she's fine probably)", group: true }
      ], else: [
        { phone: [
          { from: 'jihoon', t: "jihoney: Go To Sleep Sol" },
          { from: 'jihoon', t: "jihoney: That's All. That Was The Message" }
        ], contact: "rip solar kim (she's fine probably)", group: true }
      ] },
      { n: "Nobody said the word. Nobody said *clip* or *hearing* or *gym* or *see-through.* Junkyu sent eleven pictures of his ceiling. Asahi sent one song with no comment. Jaehyuk sent a photo of his desk lamp with no caption, which nobody needed, which was the point. For twenty minutes the old chat talked about nothing at one in the morning, the way it used to every night in ninth grade, and she lay there reading it with Nana's head on her stomach and her thumb hovering, not typing anything, just letting it hold her." },
      { n: "Then, separately, a private message, on its own." },
      { phone: [
        { from: 'hyunsuk', t: "u good? for real. not chat good" }
      ], contact: 'geniusuk' },
      { choose: [
        { t: "no.", stat: { courage: 1 }, then: [
          { phone: [
            { from: 'solar', t: "no." },
            { from: 'hyunsuk', t: "ok" },
            { from: 'hyunsuk', t: "thanks for not lying to me" },
            { from: 'hyunsuk', t: "i'm four minutes away. in case. that's all" }
          ], contact: 'geniusuk' }
        ] },
        { t: "i will be.", stat: { kindness: 1 }, then: [
          { phone: [
            { from: 'solar', t: "i will be." },
            { from: 'hyunsuk', t: "ok. i'll take that" },
            { from: 'hyunsuk', t: "i'm four minutes away tho. in case. just saying it" }
          ], contact: 'geniusuk' }
        ] }
      ] },
      { ifFlag: 'epi-h-suk-seat', then: [
        { phone: [
          { from: 'hyunsuk', t: "also im sitting with u at lunch tomorrow. dont make it a thing" }
        ], contact: 'geniusuk' },
        { n: "She didn't make it a thing. She put the phone face down on her chest and made it a thing very quietly in the dark, by herself, for a while." }
      ], else: [
        { n: "She put the phone face down on her chest. Four minutes away. It was the kind of thing Hyunsuk said like a joke, so you couldn't tell he meant it. He meant it." }
      ] }
    ] }
  ]);

  /* ── 1/12, After School ── */
  add('junkyu', 'friend', [
    { id: 'epi-h-junkyu-3', title: 'the rest of the way', hint: "Junkyu is at your gate, out of breath. He ran the long way round.",
      after: '1/12', until: '1/12', slots: AFTER, events: ['epi-h-results'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Front Step', time: 'After School', scene: [
      { music: 'epi-h-home' },
      { n: "She'd been home ten minutes when the gate rattled, and it was Junkyu, in the red puffer, bent over with his hands on his knees in the snow at the bottom of her steps, wheezing." },
      { s: 'junkyu', f: 'happy', t: "I ran— the long way— round the block— so you wouldn't— see me following you—" },
      { s: 'solar', f: 'surprised', t: "Kyu, you could've just walked with me." },
      { s: 'junkyu', f: 'sad', t: "Cherry said *let her walk.* So I let you walk. And then I ran." },
      { n: "He straightened up, still breathing hard, and dug in his puffer pocket and held something out in his mitten. A keyring. A tiny white clay dog, slightly lumpy, with two black dots for eyes and a black dot for a nose and a smile drawn on in marker, and silly legs, unmistakably, four of them, sticking out at slightly different angles." },
      // Nov 11 2026 (Kat): searchers know
      { s: 'junkyu', f: 'flustered', t: "I made it in art club. In November. Before you— before. It was in my desk the whole time we were— over there. I thought about it every day. And then we got back and I forgot I had it and then I remembered today and I— it's Nana. It's meant to be Nana." },
      { s: 'solar', f: 'happy', t: "I know it's Nana." },
      { s: 'junkyu', f: 'happy', t: "You can TELL?" },
      { n: "The front door, which she hadn't shut properly, swung open behind her. And Nana, who had heard Junkyu's voice from upstairs and had been coming down the stairs at speed since about the word *art club,* came through it like a cannonball, down all three steps without touching any of them, and hit Junkyu square in the chest." },
      { n: "Junkyu went over backwards into the snowbank by the gate with a noise like a tyre going flat, and lay there laughing with sixty pounds of Samoyed standing on him and licking his entire face, and the clay keyring held up safely in the air in one mitten, out of harm's way, like a man rescuing a baby from a flood." },
      { s: 'junkyu', f: 'happy', t: "HI NANA!!! HI!!! I MADE YOU!!! I MADE A SMALL YOU!!!" },
      { choose: [
        { t: "(Lie down in the snow next to him.)", stat: { kindness: 1 }, then: [
          { n: "She lay down in the snowbank beside him in her school coat, which her mom was going to have something to say about, and Nana stood over the two of them and couldn't decide whose face to lick so did both in turns, and Junkyu made a snow angel, very seriously, and so did she, and above them the snow was going up into a white sky in a slow, steady stream, and Junkyu looked at it for a long moment with his whole open face and then looked at her instead." },
          { s: 'junkyu', f: 'sad', t: "...It's okay. Whatever it is. I don't need to know. I just wanted to give you Nana." },
          { s: 'solar', f: 'sad', t: "You did, Kyu. You gave me Nana." }
        ] },
        { t: "(Put the keyring on your schoolbag right now.)", stat: { charm: 1 }, then: [
          { n: "She took it out of his mitten and clipped it straight onto the zip of her schoolbag on the step, and the little lumpy clay dog swung there next to the real one, who was still standing on Junkyu." },
          { s: 'junkyu', f: 'happy', t: "He looks so good there. He looks like he belongs there!!!" },
          { s: 'solar', f: 'happy', t: "He does. He's coming everywhere with me now." },
          { n: "Junkyu, flat in the snow with a Samoyed on his chest, put both mittens over his face and made a sound of pure, unmanageable joy." }
        ] }
      ] }
    ] }
  ]);

  add('sunoo', 'friend', [
    { id: 'epi-h-sunoo-3', title: 'the back door', hint: "Sunoo says Halmeoni has a bone in the freezer with a name on it, and today is the day. Bring Nana. The BACK door.",
      after: '1/12', until: '1/12', slots: AFTER, events: ['epi-h-results', 'epi-h-sebae'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's · Back Door", time: 'After School', scene: [
      { music: 'epi-h-home' },
      { n: "Yeobo's back door was down the side alley between the café and the dry cleaner's, a steel door propped open with a crate of empty milk bottles and the warm smell of butter and bread coming out of it into the cold, and Sunoo was standing in it in his apron with flour on his cheek, bouncing on his toes, and he saw Nana come round the corner on the end of the leash and made a sound like a kettle." },
      { s: 'sunoo', f: 'happy', t: "He CAME. Halmeoni! Halmeoni, he came! The big white dog came!" },
      { n: "Sunoo's grandmother came to the door wiping her hands on a cloth, in her quilted vest and her slippers, and looked down at Nana for a long moment, very seriously, from the step. Nana sat down in the alley without being told, which he never did, and looked back up at her with the same seriousness, like two heads of state." },
      { s: 'halmeoni', f: 'neutral', t: "Hm." },
      { s: 'halmeoni', f: 'happy', t: "Good face. I said so. Through the window, I said, that's a good face." },
      { n: "She went back in and came out again with a parcel in freezer paper, and on the freezer paper in black marker, in careful capitals, it said *THE BIG WHITE DOG.* Sunoo had not been exaggerating. She unwrapped it on the step and held it out, the soup bone from New Year, and Nana took it from her hand as gently as Solar had ever seen him take anything, like it was made of glass, and lay down in the alley with it between his paws and looked at Halmeoni with what could only be called love." },
      { s: 'sunoo', f: 'flustered', t: "He's so polite. Why is he so polite with her. He jumped on me in October and knocked a tray of croissants into the bin." },
      { s: 'halmeoni', f: 'neutral', t: "Because I'm old. Dogs know who to be careful with." },
      { n: "Inside, past her shoulder, Solar could see the café's clock over the counter. Twelve. Still twelve. Nobody had touched it, the way Halmeoni had said nobody should, and the hands sat there pointing straight up while everything else in the café went on around them." },
      { n: "Halmeoni followed her eyes. She didn't turn round to look at the clock. She looked at Solar instead, and then down at Nana, chewing, peaceful, with one eye on Solar at all times the way he kept one eye on her now, always." },
      { s: 'halmeoni', f: 'serious', t: "He watches you." },
      { s: 'solar', f: 'sad', t: "He does that lately." },
      { s: 'halmeoni', f: 'neutral', t: "He knows where you are. That's what they're for. Let him keep knowing." },
      { choose: [
        { t: "(Bow to her. Properly.)", stat: { kindness: 1 }, then: [
          { n: "She bowed, all the way, the way she had at New Year, in the alley in her school coat, and Halmeoni made the small dismissive noise she made at all thanks, and put a croissant in her hand that she hadn't asked for, and one in Sunoo's, and went back inside, and they stood in the alley eating them in the cold while Nana finished the bone, and Sunoo said *she likes you* with his mouth full four times." }
        ] },
        { t: "Halmeoni. What does it mean, when they watch like that?", stat: { courage: 1 }, then: [
          { n: "Halmeoni was quiet for a while. A truck went past the end of the alley. Somewhere inside an oven timer went off and nobody moved to answer it." },
          { s: 'halmeoni', f: 'neutral', t: "It means you're here. Eat something. Go home before dark." },
          { n: "That was all. It was, Solar thought later, exactly the right amount." }
        ] }
      ] }
    ] }
  ]);

  add('asahi', 'friend', [
    { id: 'epi-h-asahi-3', title: 'see-through', hint: "Asahi is leaning on the wall at the end of your street with his headphones on. He says he isn't waiting for anyone.",
      after: '1/12', until: '1/12', slots: AFTER, events: ['epi-h-results'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Winter Street', time: 'After School', scene: [
      { music: 'epi-h-day' },
      { n: "She'd taken Nana out for the shortest walk in history, to the end of the street and back, mostly so she could stand somewhere that wasn't her room, and Asahi was leaning on the low wall at the corner with his headphones on and his hands in his coat, looking at the sky like it owed him an explanation." },
      { s: 'asahi', f: 'neutral', t: "I'm not waiting for anyone." },
      { s: 'solar', f: 'happy', t: "You live on the other side of town." },
      { s: 'asahi', f: 'neutral', t: "I like this wall. It's a good wall. No one cares." },
      { n: "Nana went to him like he'd been sent for and leaned against his knees, and Asahi, who had told everyone in ninth grade that he was a cat person and had never once taken it back, took one hand out of his pocket and put it on Nana's head and left it there with the stiff awkward care of somebody holding a phone that didn't belong to him." },
      { s: 'asahi', f: 'neutral', t: "Kazuha asked me if your dog was real. I said he's sixty pounds of hair. She said that's not an answer." },
      { s: 'solar', f: 'happy', t: "It's a pretty good answer." },
      { s: 'asahi', f: 'neutral', t: "I showed her eleven pictures. She said that's not an answer either." },
      { n: "He walked with them. He didn't say he was going to. He just pushed off the wall when they turned and fell in on her other side, and after a minute, without looking at her, he took one of the earbuds out of his own ear and held it out, sideways, between two fingers." },
      { n: "She took it. Something with guitars and a boy who sounded like he was singing from the bottom of a well, which was what Asahi always listened to, which she'd made fun of since they were thirteen. They walked the long way round the block with one earbud each and Nana between them, past the houses with their gates and the snow going up past the streetlights, which had come on early, and neither of them said a word for the whole song." },
      { s: 'asahi', f: 'sad', t: "You were very see-through today. At lunch. I said it like a joke." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'asahi', f: 'sad', t: "It wasn't a joke. I just didn't know how else to say it." },
      { choose: [
        { t: "Thanks for saying it anyway.", stat: { kindness: 1 }, then: [
          { s: 'asahi', f: 'neutral', t: "Don't thank me. It makes it weird." },
          { s: 'asahi', f: 'neutral', t: "(You're welcome.)" }
        ] },
        { t: "Play the next one.", stat: { charm: 1 }, then: [
          { n: "He played the next one. And the one after that. They went round the block three times, which she knew because they passed her gate three times, and every time Nana tried to turn in at it and every time Asahi said *one more* without being asked, until the streetlights were properly on and her mom was in the window, and he gave her the rest of the song and took his earbud back and walked off down the street with his hands in his pockets, not looking back, which from Asahi was a wave." }
        ] }
      ] }
    ] }
  ]);
})();
