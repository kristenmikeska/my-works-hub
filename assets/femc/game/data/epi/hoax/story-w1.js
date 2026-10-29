/* The HOAX epilogue, week 1 (12/21-12/27/2023): the story events. Epilogue batch 5, writer A.
   "Normal and goofy" week: stage 0, then 1 (the full moon on 12/27). Everybody else thinks the weird things are funny.
   Events (R.events):
     epi-h-home         12/21 early    home: Nana, the stud, the uniform, the can, the clock, the renamed chat, Mom at the door (consumes)
     epi-h-part-four    12/21 after    Cherry; WHERE IS THE COUNCIL (part 4); Hanlim Unfiltered; the autocorrect; Sunghoon's soon (consumes)
     epi-h-curfew       12/21 late     Jungwon calls from his room; the first reach; "It's alright."
     epi-h-emergency    12/22 after    the council's emergency meeting at Yeobo's; the temple stay; the make-up email; his mom's car (consumes)
     epi-h-study-plans  12/23 after    the crew, Cherry and Jihoon descend with study plans; "What retreat." (consumes)
     epi-h-karaoke      12/23 evening  karaoke, then the haunted vending machine (consumes)
     epi-h-eve          12/24 evening  Christmas Eve: three texts, the route choice, three Christmas Eves (consumes)
     epi-h-christmas    12/25 after    Christmas at home: Jungwon meets her parents, Jihoon brings the cocoa; then by route (consumes)
     epi-h-seance       12/27 late     the Hate Club seance at Jihoon's; OKAERI, IWATODAI; Kazuha did it
   Flags set: epi-h-retreat (epi-h-emergency, always); epi-route-jungwon / epi-route-jihoon / epi-route-council (epi-h-eve);
     local: epi-h-mom-lie (epi-h-home, the lie option), epi-h-radio-hers (epi-h-emergency, she changes the station),
     epi-h-xmas-bows (epi-h-christmas, the 108 bows lie).
   Flags read: epi-h-mom-lie (epi-h-christmas), epi-h-radio-hers (epi-h-eve, Jungwon's street).
   ifYear read: { xmas: 'jungwon' }, { xmas: 'jihoon' } (epi-h-home). ifRouteOpen read: jungwon, jihoon, council (epi-h-eve).
   ifEpiRoute read: epi-h-christmas, epi-h-seance.
   Glitches used: epi-h-g-wake (home), epi-h-g-autocorrect (part-four), epi-h-g-vending (karaoke), epi-h-g-planchette (seance);
     { glitch: { strain: 1 } } after each lie that holds the cover (home, christmas); { glitch: { near: true } } in the curfew
     call, the car (emergency) and Jungwon's street (eve). Bonds: cherry, jungwon, jihoon, council (+1 each where they land).
   Inventions for Kat to confirm: the autocorrect word is tadaima (so the board's OKAERI answers it); the advisor "has agreed to
     remember approving it"; Jake's name for the eight of them ("the Monkees"); the hundred-and-eight bows as the temple-stay
     detail; Jungwon's first lie to his parents is that Maeumi needed to go out; his Christmas present is a green scarf (writer D's
     1/10 gate fixes "her scarf": this can be that one); Jihoon's cocoa tradition is four paper cups from the same stand, every
     year since they were small; Mom first saw Jungwon in the driveway once, late; the vending machine gives three cans and
     Cherry and Jihoon drink two of them (hers, in her pocket, is still there and still shut). The brief's off-limits threads are untouched. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/21, morning: home ─────────────────────────────
  { id: 'epi-h-home', date: '12/21', slot: 'early', consumes: true, title: 'home', place: 'Hanlim · Home · Her Room', time: 'Morning', scene: [
    { music: 'world-hoax' },
    { n: "Something enormous and white was lying across her legs, and it was breathing, and it smelled like a dog that had been let out in the snow and then let back in without anybody drying his feet, and Solar lay there under the weight of it with her eyes shut and didn't move, because the last time she'd woken up somewhere it had been a dorm in Iwatodai with a radiator that hissed like it had opinions." },
    { n: "This radiator didn't hiss. This radiator ticked, twice, then gave up, the way it had ticked every winter morning since she was eleven." },
    { n: "She opened her eyes." },
    { n: "Nana lifted his head off her shins, looked at her with the full, wounded seriousness of a dog who had decided she'd been gone a year, and put it back down again, harder, so she couldn't leave. He was right about the year. Nobody had told him. He'd just counted." },
    { s: 'solar', t: "Hi, baby. Hi. I know. I know, I'm sorry, I know." },
    { n: "His tail went once against the duvet, which was forgiveness, conditional, pending breakfast." },
    { glitch: 'epi-h-g-wake' },
    { n: "The alarm clock on her nightstand said 12:00. Not blinking, the way it blinked after a power cut. Just sitting there, green, certain, like midnight was a place and she was in it, and every muscle in her back went tight at once, and her hand was already off the duvet and reaching for something on her thigh that hadn't been there for a whole day." },
    { n: "Then it said 8:14. Red, the way it had always been red." },
    { n: "She looked at it for a long time. Nana sighed through his nose and didn't look at anything, because Nana had never once in his life been scared of a clock." },
    { n: "The room was her room. That was the thing she kept having to tell herself, in pieces, like reading a list back to someone on the phone. Her desk, with the calculus textbook still open to a page she'd never finished. The Sanrio pencil cup. The rom-com poster with the corner that kept peeling. And over the back of her desk chair, where her school blazer usually went to die, a dark Gekkoukan jacket with a red armband pinned to the sleeve, four letters on it in white with dots between them, sitting there in her room in Hanlim like it had every right." },
    { n: "On the desk beside it, a can. Pink and black, a logo like something had dragged its claws down the front. She hadn't put it there. She must've put it there. She'd been holding it, last night, in the gym, the whole time Cherry was screaming at her, and then she'd been holding it on the walk home, and then she'd apparently set it down next to her calculus homework like a paperweight from another life." },
    { n: "She didn't pick it up. She didn't open it. She'd decided, sometime on that last platform, that she was never going to open it, and she'd decided it the way you decide things you don't let yourself look at too closely." },
    { n: "Her hand went to her face instead, out of habit, rubbing sleep out of her eyes, and stopped on the side of her nose." },
    { n: "The stud. Small, cold, exactly where it had been since the day she and Jihoon got matching ones at a school that banned them, her eyes squeezed shut the whole time because of the needle. She'd had it for months. And for a whole year over there it hadn't been there at all, she'd checked in a dorm mirror that first week and found nothing but skin, like it had never happened, like she'd been somebody who'd never done one stupid thing in her life." },
    { n: "Now it was back. She pressed it with her fingertip until it hurt a little, just to be sure, and then a little longer." },
    { n: "Nana licked her wrist. She let him." },

    // The ending, continued.
    { ifYear: { xmas: 'jungwon' }, then: [
      { n: "Her coat was on the floor where she'd dropped it, and when she dragged it up onto the bed by one sleeve something crinkled in the pocket that wasn't the can's pocket. A napkin. Folded in four, a smear of red icing on the inside, and she knew without unfolding it which half of a croissant it had been wrapped around, and that the boy who'd cut it had cut it so exactly in half that she'd accused him of using a ruler." },
      { n: "*Won*, she'd said, in the council room, in the lamplight, and he'd lost count of the tin for the second time, and he hadn't even pretended to be annoyed about it." },
      { phone: [
        { from: 'jungwon', t: "good morning." },
        { from: 'jungwon', t: "my mother is home. she's been home since the school called her, apparently. i'll call you tonight if i can." },
        { from: 'jungwon', t: "i counted the tin again when i got home. in my head. i lost count again. i'm starting to think it's you." },
        { from: 'jungwon', t: "please eat breakfast." }
      ], contact: 'Won' },
      { n: "She read it with the napkin still in her other hand. She read it again. Nana put his whole face on her phone screen to make her stop, and she let him do that too." }
    ], else: [
      { ifYear: { xmas: 'jihoon' }, then: [
        { n: "There was a dog on her pillow that wasn't Nana." },
        { n: "Plush, white, overstuffed, with ears that went in two different directions and a face so exactly, stupidly Nana's that Nana himself had apparently spent part of the night staring at it. It was sitting where her head should've been. She didn't remember putting it there. She remembered the arcade, and the crane, and her hand coming down on top of Jihoon's on the button, and the claw holding, for once, for once in its whole rigged life." },
        { n: "He'd handed it to her without a joke. Then he'd made about six of them, one after the other, each one worse, like he was trying to bury the first part under enough noise that she'd forget it happened. She hadn't." },
        { phone: [
          { from: 'jihoon', t: "Do Not Mention The Dog" },
          { from: 'jihoon', t: "The Dog Is Between Me And God" }
        ], contact: 'jihoney' },
        { n: "Under it, from last night, still unanswered, in full sentences with periods at the end, the way only one person she knew ever texted." },
        { phone: [
          { from: 'jungwon', t: "i'm home. are you home?" },
          { from: 'jungwon', t: "you don't have to answer tonight. i just wanted to know you got there." }
        ], contact: 'Won' },
        { n: "She typed *yes*. She typed *im home*. She sent it nine hours late and put the phone face down on the plush dog, which was its own kind of sentence, and she didn't read it back." }
      ], else: [
        { n: "Her phone was on her face. Not near it. On it, screen-down, warm, where it had apparently landed at some point after two in the morning, when she'd been typing back in all caps with her eyes closed." },
        { n: "The chat had kept going without her. Of course it had." },
        { phone: [
          { from: 'cherry', t: "cherryblossoms: she fell asleep mid keysmash. legend" },
          { from: 'asahi', t: "asanoonecares: we got her back for 6 hours and she already left us on read" },
          { from: 'jihoon', t: "jihoney: Let Her Rest. The Light Of Her Disgusting Life Has Returned To Her Disgusting Bed" },
          { from: 'junkyu', t: "junkyute: does she need ice cream and hugs in the morning!!! i can bring both!!!" },
          { from: 'jaehyuk', t: "jaehyukkie: it's 4am. everyone go to sleep." },
          { from: 'hyunsuk', t: "geniusuk: u go to sleep" }
        ], contact: "rip solar kim (she's fine probably)" }
      ] }
    ] },

    // The chat's name (every variant).
    { n: "She scrolled up to the top of the chat because her thumb wanted to, and there it was again, the name, sitting over everything in bold like a headstone somebody had decorated with stickers." },
    { n: "*rip solar kim (she's fine probably)*" },
    { n: "Renamed by jihoney. The little grey timestamp under it said Monday, the eleventh, at 11:52 p.m. The night she'd gone." },
    { n: "She laughed. Again. It came out of her the same way it had last night in the gym, too loud, ugly, something knocked loose, and Nana lifted his head to check on her." },
    { phone: [
      { from: 'solar', t: "solarsystem: JIHOON. WHO RENAMED THE CHAT" },
      { from: 'jihoon', t: "jihoney: It Has Always Been Called That" },
      { from: 'solar', t: "solarsystem: IT SAYS U DID IT THE NIGHT I LEFT" },
      { from: 'jihoon', t: "jihoney: Phones Lie Sol. Look It Up" },
      { from: 'cherry', t: "cherryblossoms: he did it at 11:52 and then called me crying at 11:53" },
      { from: 'jihoon', t: "jihoney: Cherry Has Been Blocked From My Heart" }
    ], contact: "rip solar kim (she's fine probably)" },

    // Mom.
    { place: 'Hanlim · Home · Her Room', time: 'Morning', soft: true },
    { n: "The knock came the way her mother's knocks always came, two quick ones and then the door opening on the second, like the knocking was a courtesy she'd already finished extending." },
    { n: "Her mother was home. On a Thursday. In a cardigan, not a work blazer, with her hair not done, which meant she'd been home since last night at least, which meant somebody from the school had called her somewhere in the middle of a business trip and said a sentence to her that she'd been chewing on ever since." },
    { n: "Her father was behind her in the hallway, holding a mug, wearing the face he wore when he'd been told to come upstairs for moral support and had been given no other instructions." },
    { s: 'mom', t: "A *retreat*?" },
    { n: "Solar sat up. Nana did not, out of solidarity." },
    { s: 'mom', t: "In *exam week*?" },
    { s: 'dad', t: "Morning, Sol." },
    { s: 'mom', t: "Don't *morning, Sol* her, she's in trouble." },
    { s: 'dad', t: "She can be in trouble and have a good morning. Those aren't opposites." },
    { s: 'mom', t: "The school called me in the middle of a meeting in Busan. A council retreat. Somebody's advisor. Nobody could reach you, nobody could reach any of you, your phone went straight to voicemail for nine days, and now I'm told it was a *retreat*, which nobody signed a form for, which happened in the middle of your exams, which you have also, I assume, not taken." },
    { n: "There was a lot to look at in her mother's face, so Solar looked at the cardigan. It was the grey one. She'd borrowed it once in tenth grade and given it back with a burn on the cuff from a lighter that wasn't hers, and her mother had never asked, and Solar had never told, and that was how this house worked. Nobody asked the thing. Everybody knew where the thing was." },
    { n: "Her father's eyes had gone, briefly, to the jacket on the back of her chair. The armband. He looked at it the way you'd look at a sticker on a stranger's car, and then back at his coffee, and didn't say anything." },
    { choose: [
      { t: "It was a council thing. The advisor set it up. They took our phones.", flag: 'epi-h-mom-lie', then: [
        { glitch: { strain: 1 } },
        { n: "It came out smooth, which was the worst part. It came out in the voice she used for teachers and front-office ladies, sorry in the right places, a little tired, nothing to see, and somewhere at the back of her head something thin and cold went tight, like a wire being pulled from the other end." },
        { s: 'mom', t: "They took your phones." },
        { s: 'solar', t: "It was, like, a whole rule." },
        { s: 'mom', t: "Hm." },
        { n: "*Hm* was worse than yelling. *Hm* meant the case had been filed and would be reopened at a time of her mother's choosing." }
      ] },
      { t: "(Get up and hug her.)", stat: { kindness: 1 }, then: [
        { n: "She got out of bed, which took a while because of Nana, and crossed the room in her socks, and put her arms around her mother's middle before her mother could finish the next sentence." },
        { n: "Her mother went stiff. Then she didn't. Then one hand came up and rested, flat and careful, between Solar's shoulder blades, the way you'd rest your hand on a door to check if there was a fire behind it." },
        { s: 'mom', t: "...This doesn't get you out of it." },
        { s: 'solar', t: "I know." },
        { s: 'mom', t: "You're too thin. What were they feeding you on this retreat." }
      ] },
      { t: "Mom. It's eight in the morning.", stat: { charm: 1 }, then: [
        { s: 'mom', t: "It's eight in the morning *on a Thursday in exam week*, Solar." },
        { n: "Her father laughed into his mug. He tried not to, which made it worse, and her mother turned and looked at him, and he turned and looked at the hallway wall like there was something very interesting on it." },
        { s: 'dad', t: "I'll make eggs." },
        { s: 'mom', t: "You'll stay right there." },
        { s: 'dad', t: "I'll stay right here and think about eggs." }
      ] }
    ] },
    { s: 'mom', t: "We're going to talk about this. Properly. When I'm not this angry." },
    { s: 'dad', t: "So, March." },
    { s: 'mom', t: "*Out.*" },
    { n: "He went. She went after him, leaving the door open the way she always did when she wasn't finished, and Solar listened to the two of them go down the stairs bickering in the hushed, fond, specific voices of two people who'd been worried for nine days and had finally been allowed to be annoyed instead." },
    { n: "Nana put his head back on her legs. The clock said 8:21, red, honest." },
    { n: "She didn't look at it again." }
  ] },

  // ───────────────────────────── 12/21, afternoon: part four ─────────────────────────────
  { id: 'epi-h-part-four', date: '12/21', slot: 'after', consumes: true, title: 'part four', place: 'Hanlim · Home · Her Room', time: 'Daytime', scene: [
    { music: 'epi-h-forum' },
    { n: "Cherry came over at one, in boots, without knocking, holding two iced drinks from Yeobo's in the middle of December like that was a normal thing for a person to do, and flung herself across the foot of Solar's bed so hard that Nana had to relocate." },
    { s: 'cherry', f: 'happy', t: "Okay. You look less like shit. Marginally." },
    { s: 'solar', t: "Thank you, my wife." },
    { s: 'cherry', f: 'neutral', t: "Don't thank me, I said marginally. Sunoo's grandma gave me a croissant for you and I ate it in the car. I'm being honest with you because I'm a good person." },
    { s: 'cherry', f: 'happy', t: "Anyway. Have you seen the forum." },
    { s: 'solar', t: "I've been awake for five hours, Cher." },
    { s: 'cherry', f: 'happy', t: "So no. Oh my God. Okay. Okay, sit up, you need to be sitting up for this." },
    { n: "She held her phone out at arm's length like it was a baby she was presenting to a king, and on it was the Hanlim forum, the ugly grey student board nobody was supposed to use and everybody did, and pinned at the very top of the front page in red, with a fire emoji and nine hundred replies, was a thread." },
    { phone: [
      { from: 'forum', t: "📌 WHERE IS THE COUNCIL (part 4)" },
      { from: 'forum', t: "anon: part 4 because part 3 hit the reply limit. rules: no doxxing, no yang jungwon fancams, I'm serious this time" },
      { from: 'forum', t: "anon: they eloped. all eight of them. it's a polycule" },
      { from: 'forum', t: "anon: my cousin's friend saw the president at incheon airport with a suitcase. that's all i'm saying. that's all i CAN say" },
      { from: 'forum', t: "anon: witness protection. kim sunoo witnessed something. look at his face. he's been witnessing things his whole life" },
      { from: 'forum', t: "anon: rehab??? like all of them? group rate?" },
      { from: 'forum', t: "anon: ^ delete this" },
      { from: 'forum', t: "anon: the vp wasn't even in the building on monday and everyone's acting like that's normal" },
      { from: 'forum', t: "anon: CAN SOMEONE CHECK IF THE BAKE SALE MONEY IS ALSO MISSING. asking for everyone" }
    ], contact: 'Hanlim Forum' },
    { s: 'solar', t: "Who's anon." },
    { s: 'cherry', f: 'neutral', t: "Everyone's anon, Sol, that's the point of anon. I'm like four of those." },
    { s: 'solar', t: "Which four." },
    { s: 'cherry', f: 'happy', t: "The polycule one. The Sunoo one. The fancam one, the first part, not the rule, I would never ban fancams." },
    { s: 'solar', t: "And the fourth?" },
    { s: 'cherry', f: 'neutral', t: "I'll tell you when you're older." },
    { n: "Solar read the rehab one twice, and then scrolled past it fast, the way you'd walk past a dog you didn't trust, and Cherry saw her do it and didn't say anything, and then started talking very loudly about something else, which was how Cherry said things." },
    { s: 'cherry', f: 'happy', t: "But wait. It gets worse. There's a *show*." },
    { n: "A video. A first-year Solar half-recognized from the lunch line, small and fierce with a ring light so bright it bleached her forehead into the wall behind her, sitting in what was clearly her bedroom with a mic clipped to her collar. The channel name ran under her in glittery block letters. HANLIM UNFILTERED." },
    { s: 'eunchae', t: "Hi Hanlim, it's Eunchae, welcome back to Hanlim Unfiltered, the only news in this school that isn't the morning announcements, and the council is *still missing*. Day nine. Nine days, you guys." },
    { s: 'eunchae', t: "The school says retreat. I say: where. I say: what kind of retreat takes your phone. I say: why does Yang Jungwon, a man who has not missed a day since kindergarten, a man who came to school with *pneumonia*, suddenly need to retreat. From what. From us?" },
    { s: 'eunchae', t: "Like and subscribe, and if you have information, my DMs are open, and if you're the council, hi, I'm not scared of you, please don't do anything to my club funding." },
    { s: 'solar', t: "She has club funding?" },
    { s: 'cherry', f: 'happy', t: "She's a *club*, Sol. She's one person and a ring light and she's a club. She filed the paperwork. You approved it." },
    { s: 'solar', t: "I did not." },
    { s: 'cherry', f: 'neutral', t: "Your signature's on it. Jungwon showed me. He was very upset about it." },
    { n: "That sounded true. That sounded exactly like a thing she'd have signed at four o'clock on a Thursday with a croissant in her other hand." },
    { s: 'cherry', f: 'happy', t: "Tell the chat you're alive. Officially. They've been in mourning. Jihoon made a playlist." },
    { n: "So she opened the chat, still grinning, and typed the most normal sentence in the world. *im home!!!!*" },
    { glitch: 'epi-h-g-autocorrect' },
    { n: "The phone thought about it. It made a tiny noise, a fizz, like static on a radio between stations, which it had never once made in two years of being her phone, and the words in the box rearranged themselves under her thumb, quick as a card trick, into something that wasn't English." },
    { n: "*ただいま*" },
    { n: "She knew what it said. That was the problem. She'd said it every evening for a year, kicking her shoes off in a dorm entryway, to whoever was in the lounge, Junpei with a controller, Fuuka with a laptop, a dog's nails clicking over the floor to meet her. *Tadaima*. I'm home. And somebody always said it back." },
    { n: "She deleted it. She typed *im home* again, slower, like the phone was a child she was explaining something to." },
    { n: "*ただいま*" },
    { s: 'cherry', f: 'surprised', t: "...Did your phone just go weeb on you." },
    { s: 'solar', t: "It's autocorrect. It's broken." },
    { s: 'cherry', f: 'happy', t: "Oh my God. Oh my *God*. You were gone for a year and you came back *localized*." },
    { n: "Cherry was laughing so hard she had to put her drink down. She took a screenshot. She took another one. She sent both of them to the chat herself before Solar could stop her, and the chat lost its mind, Junkyu with nine exclamation points, Asahi saying *finally someone in this group is cultured*, Jihoon with *Who Is This Woman. Tell Her I Said Okaeri* and then, a second later, *I Don't Know What That Means I Read It On A Cereal Box*." },
    { n: "Solar laughed too. She did. She laughed until Cherry stopped, and then she looked at the little Japanese word sitting there in the chat like a footprint in the snow outside her door going one way, and turned her phone over on the bed, and didn't turn it back for a while." },
    { n: "Cherry's phone buzzed. She looked at it. Her whole face changed, quick, soft, and then she shoved it into her pocket like it had bitten her." },
    { s: 'solar', t: "Who was that." },
    { s: 'cherry', f: 'neutral', t: "Nobody." },
    { s: 'solar', t: "Cherry Kim." },
    { s: 'cherry', f: 'serious', t: "It's Sunghoon, okay? It's just Sunghoon. He just texts *soon*. That's it. That's the whole text. *Soon. Dash S.* Like a fortune cookie. Like a fortune cookie that's into me." },
    { s: 'solar', t: "Soon what?" },
    { s: 'cherry', f: 'serious', t: "I don't *know*, Sol! He's been saying soon for like a year!" },
    { s: 'solar', t: "...Literally a year." },
    { n: "Cherry opened her mouth, and closed it, and then threw a pillow at Solar's face so hard Nana barked." },
    { s: 'cherry', f: 'happy', t: "Too soon. Too soon for that joke. I hate you. I love you. Drink your drink, it's melting." },
    { choose: [
      { t: "Does Hyunsuk know he's still texting you?", stat: { kindness: 1 }, then: [
        { n: "Cherry stopped smiling. Not all at once. It went out of her face the way light goes out of a room when someone closes a door down the hall." },
        { s: 'cherry', f: 'sad', t: "He knows. He's being... Suk about it. He'll be at yours on Saturday, by the way. Jaehyuk's making everyone study." },
        { s: 'cherry', f: 'neutral', t: "Don't make it weird." },
        { s: 'solar', t: "I would never make it weird." },
        { s: 'cherry', f: 'neutral', t: "You're literally making it weird right now, with your face." }
      ] },
      { t: "Text him back *later*. Dash C.", stat: { charm: 1 }, then: [
        { s: 'cherry', f: 'surprised', t: "Oh, that's evil." },
        { n: "She did it. She did it immediately, giggling, typing with both thumbs, and then lay on her back on Solar's bed holding the phone to her chest like a hot water bottle, and stared at the ceiling, and waited, and pretended she wasn't waiting." }
      ] }
    ] },
    { bond: { cherry: 1 } },
    { n: "The ice in the drinks melted. The afternoon went grey and then blue against the window. Somewhere in the forum, part four hit its thousandth reply, and somewhere on her bed, face down, her phone kept the word it had picked for her, and didn't take it back." }
  ] },

  // ───────────────────────────── 12/21, late: curfew ─────────────────────────────
  { id: 'epi-h-curfew', date: '12/21', slot: 'late', title: 'curfew', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
    { music: 'epi-h-home' },
    { n: "He called at 10:41. Not 10:40, not 10:45. 10:41, like he'd been sitting with his thumb over her name watching the minute change and had made himself wait one more for no reason he'd ever admit to." },
    { s: 'jungwon', f: 'neutral', t: "Hi. Is now okay." },
    { s: 'solar', t: "Now's okay. Hi. Hi, Won." },
    { n: "His voice was low, the kind of low you use in a house where somebody might be listening at the door, and under it she could hear nothing at all. No TV. No dog. A house so quiet the quiet had a sound." },
    { s: 'solar', t: "Are you in trouble?" },
    { s: 'jungwon', f: 'neutral', t: "Yes." },
    { s: 'solar', t: "How much?" },
    { s: 'jungwon', f: 'neutral', t: "My mother said *just wait till you get home* on the eleventh. I got home on the twentieth. She'd waited." },
    { s: 'jungwon', f: 'neutral', t: "I'm allowed out for studying and errands. I'm allowed to use her car for both. I'm not allowed out after nine. She checks on me every forty minutes. She's very punctual. So I have until 11:20." },
    { s: 'solar', t: "Won. That's prison." },
    { s: 'jungwon', f: 'neutral', t: "It's a very nice prison. There's an en-suite." },
    { n: "She laughed into her pillow so it wouldn't carry down the hall. Nana lifted his head at the noise, decided it wasn't food, and put it down again." },
    { s: 'solar', t: "Did you eat?" },
    { s: 'jungwon', f: 'neutral', t: "Define eat." },
    { s: 'solar', t: "*Yang Jungwon.*" },
    { s: 'jungwon', f: 'happy', t: "I had soup. My mother made soup. She put it outside my door and knocked once. It was very good soup. I think that's how she's yelling at me now." },
    { n: "That was the most he'd ever said about his mother in one go without stopping to correct himself, and she lay there with the phone warm against her ear and didn't touch it, because she'd learned a long time ago that you didn't touch the things he set down in front of you, you just let them sit there and be seen." },
    { s: 'jungwon', f: 'neutral', t: "How was your day." },
    { n: "So she told him. Nana and the clock, only she said the clock was broken. Her mother and the cardigan. The forum, the polycule, Eunchae and the ring light and the club funding, which made him go silent in a specific, offended way she could feel down the line. And then, without deciding to, because it was late and her voice had gone soft and lazy, the thing about the radio." },
    { s: 'solar', t: "The dorm had this radio. In the lounge. It only got two stations and one of them was just a man reading the weather in a voice like he was so sad about it. And somebody always used to change it, every time I came down, like it was a whole personal mission, like the sad weather man had personally wronged him, and he'd go—" },
    { s: 'solar', t: "Hae—" },
    { n: "She stopped." },
    { n: "Not because she forgot. She didn't forget anything, that was the problem, she remembered all of it, all three of them, the way you remember every room of a house you grew up in. She stopped because the name was right there on her tongue, warm and stupid and sure of itself, and she was lying in her bed in Hanlim with her boyfriend on the phone, and she didn't know what it meant that it was the next word." },
    { glitch: { near: true } },
    { n: "Jungwon didn't say anything." },
    { n: "It wasn't the quiet of someone who hadn't heard. She'd been on the phone with him enough times to know his quiets. The busy one, with the scratch of a pencil in it. The tired one, with a dry swallow in it. This was a third one. Still. Careful. The quiet of somebody standing very carefully in a room with something he recognized, not moving, so it wouldn't startle." },
    { n: "Somewhere in his house, a door opened and closed. 11:00, she thought. Not his. Somebody checking early." },
    { s: 'jungwon', f: 'neutral', t: "It's alright." },
    { n: "That was all. Not *who*. Not *what were you going to say*. Not even her name. Just that, low and even, like he was setting a glass down on a table very gently, so it wouldn't ring." },
    { n: "And she understood, lying there, with the kind of certainty that came up from her stomach before her head got a vote, that he knew. Not guessed. Knew. Whatever she'd been about to say, whoever she'd been about to say it about, he'd known before she got to the second syllable, and he'd known for a while, and he had decided, all on his own, in his quiet, punctual, en-suite prison, that she never had to say it to him if she didn't want to." },
    { n: "She didn't know how. She didn't ask. That was the deal, too, apparently. Everyone had deals." },
    { choose: [
      { t: "...Okay.", then: [
        { s: 'jungwon', f: 'neutral', t: "Okay." },
        { n: "And they just stayed on the line for a minute, not talking, breathing, like two people sitting on opposite ends of the same bench in the cold." }
      ] },
      { t: "How do you always know.", stat: { courage: 1 }, then: [
        { n: "A long pause. Longer than his quiets usually were." },
        { s: 'jungwon', f: 'serious', t: "There's a date in my head I can't stop counting down to. I didn't put it there. I don't know what happens when it gets here. I just count." },
        { s: 'jungwon', f: 'neutral', t: "So I know what it looks like. When somebody's carrying something from somewhere else." },
        { n: "He didn't say anything after that, and she didn't make him, and the two of them lay in their two separate houses on the same road holding the same kind of thing." }
      ] }
    ] },
    { bond: { jungwon: 1 } },
    { n: "11:19. She heard it happen on his end before he did, footsteps, the soft rattle of a door handle being tested, and he said *goodnight, Sol* in a whisper so quick it was barely words, and the line went dead with the specific, guilty click of a boy pretending to have been asleep for an hour." },
    { n: "She held the phone against her chest. Down the road, three houses and a whole other life away, a light went off. She liked to think it was his. It probably was." }
  ] },

  // ───────────────────────────── 12/22, afternoon: the emergency meeting ─────────────────────────────
  { id: 'epi-h-emergency', date: '12/22', slot: 'after', consumes: true, title: 'the retreat', place: "Hanlim · Yeobo's", time: 'Daytime', scene: [
    { music: 'epi-h-goofy' },
    { n: "The emergency meeting of the 2024 Hanlim student council was called to order at 2:00 p.m. sharp, in the back booth of Yeobo's, by a president who had been allowed out of the house on the grounds that he was *studying with the vice president*, which was technically true, because the vice president was there, and there was a calculus textbook on the table, unopened, holding down a napkin." },
    { n: "Heeseung had a clipboard. Nobody had asked him to bring a clipboard. Heeseung had been fired as vice president to make room for her and he still had the clipboard, the way some people keep a ring." },
    { s: 'heeseung', f: 'serious', t: "Okay. Agenda item one. Getting our story straight. Because right now we have, by my count, eight different stories, and my mom has heard four of them." },
    { s: 'jay', f: 'neutral', t: "Nobody's going to ask. Nobody asked me anything. Coach thinks I had mono." },
    { s: 'heeseung', f: 'serious', t: "For nine days?" },
    { s: 'jay', f: 'neutral', t: "He didn't ask that either." },
    { s: 'niki', f: 'happy', t: "What if we just say we got abducted." },
    { s: 'heeseung', f: 'serious', t: "No." },
    { s: 'niki', f: 'happy', t: "By what, though. That's the fun part. That's where we get creative." },
    { s: 'heeseung', f: 'serious', t: "Niki. No. You're on your last straw." },
    { s: 'niki', f: 'neutral', t: "I've been on my last straw since freshman year. I live on the last straw. It's a nice straw." },
    { s: 'jungwon', f: 'neutral', t: "The school has already told everyone's parents *a council retreat*. We keep that. We just need to agree on where and what we did there." },
    { s: 'jungwon', f: 'neutral', t: "And we need to agree on it today. Before somebody's mother calls somebody else's mother." },
    { n: "He said it in his president voice, the one he used at assemblies, clear and level and very slightly bored, and every single person at the table went quiet for a second out of pure muscle memory, which was its own kind of power and which he had absolutely no idea he had." },
    { s: 'sunghoon', f: 'neutral', t: "Sunghoon proposes Jeju. Sunghoon looks good on beaches." },
    { s: 'heeseung', f: 'serious', t: "It's December." },
    { s: 'sunghoon', f: 'neutral', t: "Sunghoon looks good on beaches in December." },
    { s: 'jake', f: 'happy', t: "Ooh, what about a temple. Like a temple stay. They take your phone at the gate. It's like a rule. You give them your phone and they give you, like, a vest." },
    { n: "The whole table turned and looked at Jake. Jake, who'd come in wearing a beanie with a pom-pom on it, beamed back at them like a dog who'd brought in the newspaper." },
    { s: 'heeseung', f: 'surprised', t: "...That's actually good." },
    { s: 'jake', f: 'happy', t: "I know! My cousin did one. In Gangwon-do. He said it was the worst week of his life and he cried every morning. He came back so calm. It was scary." },
    { s: 'jungwon', f: 'neutral', t: "No phones explains the voicemails. Gangwon-do explains why nobody saw us. A temple explains why it was in exam week, because a temple doesn't care about exam week." },
    { s: 'solar', t: "Why would a leadership retreat be at a *temple*?" },
    { s: 'jungwon', f: 'neutral', t: "Mindfulness." },
    { s: 'solar', t: "Mindfulness." },
    { s: 'jungwon', f: 'neutral', t: "Leadership through mindfulness. It's a real thing. Somebody wrote a book about it. I'm sure somebody did." },
    { n: "Heeseung wrote it down. *TEMPLE STAY. GANGWON-DO. PHONES AT GATE (TEMPLE RULES). LEADERSHIP THROUGH MINDFULNESS (book?).* He underlined *book?* twice." },
    { s: 'heeseung', f: 'neutral', t: "And I talked to the advisor this morning. He's agreed to remember approving it." },
    { s: 'solar', t: "He's agreed to *remember*?" },
    { s: 'heeseung', f: 'neutral', t: "His words were, *I would like to remember approving it, and then I would like none of you to ever speak to me about it again.* And then he hung up. I think it's a yes." },
    { s: 'jake', f: 'happy', t: "So we're monks now. Wait. Wait wait wait. We're the *Monkees*." },
    { s: 'jay', f: 'neutral', t: "Bro." },
    { s: 'jake', f: 'happy', t: "Hey hey, we're the Monkees—" },
    { s: 'jay', f: 'neutral', t: "*Bro.*" },
    { s: 'heeseung', f: 'neutral', t: "I'm not writing that down." },
    { n: "He wrote it down." },
    { s: 'sunoo', f: 'flustered', t: "Okay, but, what if someone asks what we *did* there. Like specifically. Like what if someone looks right at me and asks." },
    { s: 'niki', f: 'happy', t: "Then you lie, Sunoo. With your mouth." },
    { s: 'sunoo', f: 'sad', t: "I can't lie with my mouth! My mouth doesn't do that! My mouth tells my face and my face tells everybody!" },
    { s: 'heeseung', f: 'neutral', t: "Practice, then. I'm your mom. Where were you." },
    { s: 'sunoo', f: 'flustered', t: "We were at a... temple... stay. In... Gang... won... do. And we did..." },
    { s: 'sunoo', f: 'flustered', t: "...bows?" },
    { s: 'heeseung', f: 'neutral', t: "Don't say it like a question." },
    { s: 'sunoo', f: 'sad', t: "Bows!" },
    { s: 'heeseung', f: 'neutral', t: "Don't yell it." },
    { s: 'sunoo', f: 'sad', t: "*Bows,*" },
    { n: "Sunoo's voice cracked on the *s*. Jay put his face down on the table. Sunghoon patted Sunoo's back with great dignity, the way you'd pat a horse that had refused a jump." },
    { s: 'halmeoni', t: "What bows?" },
    { n: "Sunoo's grandmother was standing at the end of the booth. Nobody had heard her come. Nobody ever heard her come; she moved through her own cafe like weather. She had a tray of croissants and a look on her face of a woman who had raised one generation of liars already and had no intention of being impressed by the second." },
    { n: "Sunoo went white. Then pink. Then a third colour Solar had never seen on a human face." },
    { s: 'sunoo', f: 'flustered', t: "Halmeoni! Nothing! Bows! At the temple! We went to a temple! For mindfulness! I was mindful! Look how mindful I am!" },
    { s: 'halmeoni', t: "You. At a temple." },
    { s: 'sunoo', f: 'flustered', t: "Yes!" },
    { s: 'halmeoni', t: "What did they feed you." },
    { n: "A long silence. The whole table watched Sunoo's face try to remember what temples ate, and fail, and reach for the nearest food it knew, which was on the tray in his grandmother's hands." },
    { s: 'sunoo', f: 'sad', t: "...Croissants?" },
    { n: "His grandmother looked at him for a long, long moment. Then she set the tray down in the middle of the table, patted his head twice, hard, and walked back to the counter without a word." },
    { s: 'niki', f: 'happy', t: "LMAOOO" },
    { s: 'niki', f: 'happy', t: "He said croissants. To *her*. She *makes* the croissants." },
    { s: 'heeseung', f: 'neutral', t: "Sunoo's not allowed to talk to any parents. That's agenda item two. Sunoo talks to nobody's parents until after New Year's." },
    { s: 'sunoo', f: 'sad', t: "That's fair. That's so fair. Thank you." },
    { n: "Jungwon hadn't laughed. Not out loud. But he'd turned his face toward the window, and from where Solar was sitting she could see the edge of one dimple, deep as a thumbprint, and it didn't go away for a long time." },
    { n: "Then every phone on the table buzzed at once." },
    { n: "It was the sound of seven phones and hers going off together, a whole swarm of it, rattling the cups, and Jake jumped so hard his pom-pom bounced, and for one stupid second all eight of them looked at each other like the last thing that had happened to all of them at once had been a door." },
    { phone: [
      { from: 'school', t: "Hanlim High School: Make-up examinations for students absent during the 12/11-12/15 examination period will be held Monday 1/8 through Wednesday 1/10. Results will be posted Friday 1/12. Attendance is mandatory. We hope you enjoyed your retreat." }
    ], contact: 'Hanlim High School' },
    { s: 'jake', f: 'surprised', t: "*We hope you enjoyed your retreat.* With a period. That's so aggressive." },
    { s: 'jay', f: 'neutral', t: "Whatever. That's like three weeks." },
    { s: 'solar', t: "Two and a half. And one of them's Christmas." },
    { n: "Solar's stomach did a slow, cold roll. Calculus. Chapter six. A page she'd last looked at a full year ago, in a different school, on a different continent, with a different boy explaining limits to her and her not listening to a word." },
    { n: "Beside her, Jungwon had gone very, very still." },
    { n: "Not his tired still. His other one. The one he went into before a competition, when his eyes stopped seeing the room and started seeing a ranking, a column of names with his at the top and nowhere else, because nowhere else wasn't somewhere his parents had ever let him imagine. She watched his thumb press against the edge of his watch, once, like he was setting it." },
    { s: 'solar', t: "Won." },
    { s: 'jungwon', f: 'serious', t: "First. I need to come first. Even on make-ups. Especially on make-ups." },
    { s: 'heeseung', f: 'serious', t: "Jungwon, nobody's ever going to compare the make-up rankings to the—" },
    { s: 'jungwon', f: 'serious', t: "My father will." },
    { n: "Nobody said anything after that. Sunghoon took a croissant very quietly. Niki, for once in his life, put his phone face down." },
    { n: "Then Jungwon looked at his watch, and the stillness went somewhere else, into his shoulders, which were suddenly up around his ears." },
    { n: "Six hours, the meeting had taken. Six hours, two trays of croissants, one rehearsal of Sunoo's face per hour and a long argument about whether monks were allowed hot chocolate, and outside the window it had gone fully dark without anybody noticing." },
    { s: 'jungwon', f: 'surprised', t: "It's 8:31." },
    { s: 'jay', f: 'neutral', t: "And?" },
    { s: 'jungwon', f: 'flustered', t: "And I have to be home by nine. It takes eleven minutes to drive home and I have to drive Solar first, and Solar's house is four minutes the other direction, and my mother counts the time from when I'm supposed to have left the library, which closed at eight, so as far as she knows I've been driving for thirty-one minutes—" },
    { s: 'heeseung', f: 'neutral', t: "Jungwon. Nobody's timing you that closely." },
    { s: 'jungwon', f: 'flustered', t: "My mother is. It's *one* fiction. I need everything in it to be true." },
    { n: "That was the most Yang Jungwon sentence ever spoken, and the whole table knew it, and the whole table was very kind and didn't say so, except Niki." },
    { s: 'niki', f: 'happy', t: "He's going to get *so* grounded. This is the best Christmas." },

    // The car.
    { place: "Hanlim · Jungwon's Car", time: 'Evening', soft: true },
    { music: 'epi-h-romance' },
    { n: "His mother's car smelled like his mother's car. Lavender air freshener, leather, the faint sharp ghost of somebody's hand cream on the steering wheel. There was a pair of reading glasses on the dashboard and a parking ticket folded in the cupholder and the seat was all the way forward in a way that suggested he had never once dared to move it back." },
    { n: "He drove the way he did everything. Both hands. Exactly the speed limit. Signalling to turn into a street with nobody in it, in the snow, at dusk, like the empty road might report him." },
    { n: "The radio was on low. A station playing a ballad she didn't know, something with too many strings in it. He didn't seem to be listening. His eyes were on the road and his jaw was doing the thing it did when he was solving something." },
    { n: "Her hand went to the dial." },
    { n: "She didn't decide to. It just went, the way your hand goes to a light switch in a room you used to live in, and she turned it, two clicks, three, past static, past a man selling insurance, until she landed on something with a bassline you could feel in the seat. Something loud and stupid and much too bright for a lavender-scented car in the snow. Something nobody in this town would've picked for her, because she'd never once picked it for herself, until a year where somebody else had kept picking it for her every single morning until she started humming it on the stairs." },
    { n: "She heard herself humming. She stopped." },
    { glitch: { near: true } },
    { n: "Jungwon glanced at the dial. Then at her. Then back at the road." },
    { n: "He didn't know the song. She could tell he didn't know the song, the way she could tell when he didn't know a word somebody used, the half-second pause while he filed it." },
    { choose: [
      { t: "(Leave it there.)", flag: 'epi-h-radio-hers', then: [
        { n: "He left it there too. He didn't turn it down. He drove the rest of the way home at exactly the speed limit with a song much too loud for his mother's car, his hands at ten and two, his face doing absolutely nothing, and at the last red light, without looking at her, he tapped one finger on the steering wheel, once, on the beat." },
        { n: "Just once. Like he was learning it." }
      ] },
      { t: "(Turn it back.)", then: [
        { n: "She turned it back to the strings. Too quick, too guilty. His hand came off the wheel, and for a second she thought he was going to say something, but he only reached over and turned it back to her station himself, and put his hand back at ten, and drove." },
        { s: 'jungwon', f: 'neutral', t: "You liked it." },
        { s: 'solar', t: "It's loud." },
        { s: 'jungwon', f: 'neutral', t: "You liked it." },
        { n: "And that was all he said about it." }
      ] }
    ] },
    { n: "He pulled up outside her house at 8:52 by the clock on the dash, which was wrong, which was set to his mother's time, which was eight minutes fast so he'd never be late, and he looked at it like it was a bomb with a timer." },
    { s: 'jungwon', f: 'neutral', t: "Go. Before I get grounded more." },
    { s: 'solar', t: "Can you get grounded more?" },
    { s: 'jungwon', f: 'neutral', t: "I'm sure she'll find a way. She's very creative." },
    { n: "She leaned across the gearshift and kissed him on the cheek, right on the dimple, and he went red to the ears and stared straight ahead through the windshield like a man being photographed for his license." },
    { phone: [
      { from: 'heeseung', t: "heeheeseung added you to RETREAT FACTS (do not leave)" },
      { from: 'heeseung', t: "heeheeseung: OFFICIAL STORY. memorize. 1. temple stay, gangwon-do. 2. phones collected at the gate (temple rules). 3. leadership through mindfulness. 4. we did bows. 5. SUNOO DOES NOT SPEAK TO PARENTS" },
      { from: 'jake', t: "jakeys: 6. we are the monkees" },
      { from: 'heeseung', t: "heeheeseung: there is no 6" },
      { from: 'niki', t: "rikiniki left the chat" },
      { from: 'heeseung', t: "heeheeseung added rikiniki" },
      { from: 'heeseung', t: "heeheeseung: IT SAYS DO NOT LEAVE" },
      { from: 'sunoo', t: "sunooshine: i'm practicing in the mirror!!! bows!!! (not a question)" },
      { from: 'jungwon', t: "injangwon: made it with 1 minute to spare. goodnight everyone." }
    ], contact: 'RETREAT FACTS (do not leave)' },
    { flag: 'epi-h-retreat' },
    { bond: { council: 1 } },
    { n: "From her doorstep she watched his mother's car go down the road at exactly the speed limit, indicator blinking at an empty intersection, until it turned the corner and was gone, and then she stood there a little longer in the cold with the song still going round her head, loud and stupid and bright, and didn't stop it." }
  ] },

  // ───────────────────────────── 12/23, afternoon: study plans ─────────────────────────────
  { id: 'epi-h-study-plans', date: '12/23', slot: 'after', consumes: true, title: 'study plans', place: 'Hanlim · Home · Her Room', time: 'Daytime', scene: [
    { music: 'epi-h-goofy' },
    { n: "They came at noon, all at once, like a weather system. Cherry first, because Cherry had a key, then Junkyu with a bag of snacks so big it had its own gravity, then Asahi and Hyunsuk not talking, then Jaehyuk carrying a binder, an actual binder, with tabs, and last of all, ten minutes late and taking up the whole doorframe, Jihoon, in black, with chains, holding a single bag of chips over his head like a trophy." },
    { s: 'jihoon', f: 'happy', t: "The Almighty Hoon has arrived. You may now begin." },
    { n: "Nana lost his mind. Nana always lost his mind for Jihoon, a full-body, ears-back, whole-house-shaking kind of losing it, and Jihoon dropped to his knees in the doorway and let himself get knocked flat on his back and lay there on her carpet, a hundred and eighty centimetres of emo, being stood on by a dog." },
    { s: 'jihoon', f: 'happy', t: "My son. My beloved. Your mother has neglected you. I'm here now." },
    { s: 'solar', t: "I've been home two days." },
    { s: 'jihoon', f: 'neutral', t: "Exactly. Two days. Neglect." },
    { n: "Junkyu hadn't said anything yet. He was standing just inside the door with the snack bag in both arms, looking at Solar, and his eyes were already wet, and his chin was doing the thing a chin does right before it goes." },
    { s: 'junkyu', f: 'sad', t: "Hi Sol." },
    { s: 'solar', t: "Kyu. Don't." },
    { s: 'junkyu', f: 'sad', t: "I'm not! I'm not. I'm just. You're in your room. You're in your *room*, Sol." },
    { s: 'cherry', f: 'neutral', t: "He cried in the gym. Like, ugly. Like he was being exorcised." },
    { s: 'junkyu', f: 'sad', t: "I'm still crying a little!! It's leftover!!" },
    { n: "She hugged him, snacks and all. The bag crinkled between them and he held on with one arm and kept the chips safe with the other, because Junkyu could be wrecked and still be responsible about snacks, and over his shoulder she saw Jaehyuk set the binder on her desk with the gentle, deliberate care of a man laying down a weapon he intended to use." },
    { s: 'jaehyuk', f: 'neutral', t: "Okay. Make-ups are January eighth. That's sixteen days. I made everyone a plan." },
    { s: 'asahi', f: 'neutral', t: "No one cares." },
    { s: 'jaehyuk', f: 'neutral', t: "They're colour-coded, Asahi." },
    { s: 'asahi', f: 'neutral', t: "No one cares in colour." },
    { n: "Jaehyuk handed them out anyway. Each one had a name on the front. Solar's had a little drawing of a skull on it, next to the word CALCULUS, which was either a joke or a warning, and she was afraid to ask Jaehyuk which, because she already knew." },
    { s: 'jaehyuk', f: 'neutral', t: "Sol, you're starting at chapter four. Not six. Four." },
    { s: 'solar', t: "We did four. We did four in October." },
    { s: 'jaehyuk', f: 'serious', t: "*We* did four in October. You copied my four in October. It's different." },
    { n: "There was no arguing with that. It was the single most accurate thing anyone had said to her in two days." },
    { s: 'junkyu', f: 'happy', t: "It's so nice we're all back though!!! Like when we were all in—" },
    { s: 'jihoon', f: 'neutral', t: "In What." },
    { n: "He was still lying on the carpet with Nana on his chest. He hadn't moved. He'd just said it, flat, to the ceiling, the capital letters audible somehow even out loud." },
    { s: 'junkyu', f: 'surprised', t: "In, um. In. You know. With the—" },
    { s: 'jihoon', f: 'neutral', t: "What Retreat. I Was Home. I'm Always Home." },
    { n: "The room went quiet the way a room goes quiet when somebody drops a glass and nobody wants to be the first to look down. Hyunsuk looked at the carpet. Cherry looked at Jihoon. Asahi looked at his phone so hard it might as well have been a book." },
    { s: 'junkyu', f: 'sad', t: "...You were there, though. You were there for, like, all of it. You carried—" },
    { s: 'jihoon', f: 'happy', t: "Kyu. Buddy. My guy. I have never left this town in my life. I get carsick at the mall." },
    { n: "He was smiling. It was a very good smile. It was the smile from the cafeteria, the one that had been doing so much heavy lifting lately that you could almost hear it strain, and Solar sat on the edge of the bed with her colour-coded study plan in her lap and watched him lie on her floor and lie to her face about a year she'd watched him live." },
    { n: "Hyunsuk was watching him too. Not the smile. His sleeve, where he kept tugging it down over his wrist, and the pocket of his jacket, which he'd kept on, indoors, in a heated room, and had kept a hand near the whole time like it might wander off. Hyunsuk had watched that pocket before. Solar knew exactly when." },
    { choose: [
      { t: "Sure, Jihoon. You were home.", stat: { kindness: 1 }, then: [
        { n: "He turned his head on the carpet and looked at her for the first time since he'd walked in. Really looked, for half a second, and something in his face went loose, almost grateful, and then he smirked and it was gone." },
        { s: 'jihoon', f: 'happy', t: "Thank you. Finally. A woman of reason. Unlike some ungrateful rugs." },
        { s: 'solar', t: "I'm the ungrateful rug." },
        { s: 'jihoon', f: 'happy', t: "You're the ungrateful rug. Kyu's a different rug. A grateful one." }
      ] },
      { t: "I watched you be there, Jihoon. The whole year.", stat: { courage: 1 }, then: [
        { n: "His face didn't change. That was what she'd remember. Not a flicker, not a flinch. He just kept smiling at the ceiling while Nana breathed on his chin, and the smile held, and held, like a door somebody was leaning their whole weight against from the other side." },
        { s: 'jihoon', f: 'neutral', t: "Be where. Sounds fake." },
        { s: 'cherry', f: 'serious', t: "Sol." },
        { n: "Cherry didn't say anything else. She didn't have to. She was sitting between Solar and the carpet now, somehow, in a way she hadn't been a minute ago, and she was holding Jaehyuk's binder against her chest like a shield." }
      ] }
    ] },
    { n: "Asahi cleared his throat." },
    { s: 'asahi', f: 'neutral', t: "Anyway. I came back from wherever none of us went, and the first thing my mom asked me was my GPA. So. Good to be home, I guess. No one cares." },
    { s: 'hyunsuk', f: 'neutral', t: "Your GPA's fine, man." },
    { s: 'asahi', f: 'neutral', t: "My GPA is *fine*. She wanted *good*. There's a whole canyon between fine and good. I live in it." },
    { n: "Hyunsuk had said it to Asahi. He'd been saying everything to Asahi. He'd been very carefully not saying anything in the direction of the bed, where Cherry was sitting, and Cherry was being very careful not to notice, and the two of them were being so careful at each other that the air in that corner of the room had gone thin." },
    { s: 'cherry', f: 'neutral', t: "Suk, can you pass the—" },
    { s: 'hyunsuk', f: 'neutral', t: "Yeah." },
    { n: "He passed the chips without looking at her. She took them without looking at him. Junkyu looked from one to the other with his eyes still red and his mouth open like a kid watching parents fight in a parking lot." },
    { n: "Jaehyuk sighed. He had been sighing, by Solar's count, since 12:04." },
    { s: 'jaehyuk', f: 'neutral', t: "Okay. Chapter four. Limits. Sol, what's a limit." },
    { choose: [
      { t: "A limit is... where a function is going. Even if it never gets there.", stat: { knowledge: 1 }, then: [
        { n: "Jaehyuk blinked. Everyone blinked. She'd said it without thinking, in somebody else's voice, a soft monotone one that had explained it to her once over a council room table with a croissant between them, and it had apparently stuck." },
        { s: 'jaehyuk', f: 'surprised', t: "...That's right. That's actually right." },
        { s: 'jihoon', f: 'neutral', t: "Ew. She got tutored. I can smell it on her." }
      ] },
      { t: "Mine was about three hours ago.", then: [
        { s: 'jaehyuk', f: 'neutral', t: "Sol." },
        { s: 'solar', t: "I'm serious, Jae, I opened the book this morning and my brain left my body. It's on the roof. It's not coming down." },
        { s: 'jihoon', f: 'happy', t: "Respect." }
      ] }
    ] },
    { n: "That was as far as they got." },
    { n: "Jihoon sat up, which took a while because of Nana, and announced to the room with the solemnity of a king abdicating that he had *a proposal*, and the proposal was karaoke, and the proposal was tonight, and the proposal was that anyone who voted against it would be removed from the chat by the chat's owner, who was him." },
    { s: 'jaehyuk', f: 'serious', t: "You're not the owner. Sol made the chat." },
    { s: 'jihoon', f: 'neutral', t: "And I renamed it. Possession is nine tenths of the law." },
    { s: 'cherry', f: 'neutral', t: "You said you didn't rename it." },
    { s: 'jihoon', f: 'neutral', t: "I have no memory of that conversation." },
    { n: "It was six to one. Jaehyuk voted against, and then, when he saw the faces, voted for, and then put his head down on his own binder and stayed there." },
    { bond: { jihoon: 1 } },
    { n: "Nobody opened chapter four. Solar's study plan stayed on her bed, face up, with its little skull, until Nana lay down on it and made it his." }
  ] },

  // ───────────────────────────── 12/23, evening: karaoke ─────────────────────────────
  { id: 'epi-h-karaoke', date: '12/23', slot: 'evening', consumes: true, title: 'the machine has chosen you', place: 'Hanlim · Karaoke', time: 'Evening', scene: [
    { music: 'epi-h-goofy' },
    { n: "The room was the cheap one, number six, with a sticky table and a tambourine missing half its jingles and a disco ball that only went around when you hit the wall beside it, so Junkyu hit the wall beside it every four minutes for two hours." },
    { n: "Jihoon went first. Jihoon always went first. He picked a ballad so overwrought that the music video was mostly a man walking through rain in a long coat, and he sang it standing on the couch, one foot on the armrest, his free hand outstretched to Nana, who wasn't there, who was at home, who he dedicated the whole song to anyway." },
    { s: 'jihoon', f: 'happy', t: "This one's for my son." },
    { s: 'asahi', f: 'neutral', t: "Your son is a dog." },
    { s: 'jihoon', f: 'happy', t: "And?" },
    { n: "Asahi went second, and chose something by that one emo singer, the one Solar loved and wouldn't admit to loving, and he sang it with his eyes shut and his hand flat over his heart and not a single shred of irony, and when it was over nobody said anything for a respectful second, and then Cherry said *wanna be Kellin Quinn*, and the room fell apart." },
    { n: "Junkyu did a duet with himself. Jaehyuk refused, then didn't, then did a song from his parents' generation all the way through with complete technical accuracy and a face like a man reading a will." },
    { n: "Then the machine went to random, the way it did when nobody picked anything, and the screen said *DUET* in big pink letters with two names under it, which the machine didn't know but which the room supplied, because the mics had been sitting in front of Cherry and Hyunsuk, and it was a love song." },
    { n: "Cherry looked at Hyunsuk. Hyunsuk looked at his phone." },
    { s: 'hyunsuk', f: 'neutral', t: "I'm gonna get some air." },
    { n: "He went. The door swung shut behind him on the first chorus. Cherry sang the whole thing by herself, both parts, too loud, with her chin up, and when it ended she put the mic down on the table very gently, like it might break, and said *that song sucks* to nobody." },
    { n: "Solar's phone buzzed in her lap." },
    { phone: [
      { from: 'jungwon', t: "are you having fun? don't let jihoon pick every song." },
      { from: 'jungwon', t: "i'm on chapter nine. i've been on chapter nine for an hour. i think chapter nine is lying to me." },
      { from: 'solar', t: "HES PICKED EVERY SONG. asahi did one. jaehyuk did a TROT SONG" },
      { from: 'jungwon', t: "i'd pay money to see that. not a lot. but some." }
    ], contact: 'Won' },
    { n: "Then it was her turn, and the remote was in her hand, and the room was chanting her name with Junkyu banging the half-dead tambourine, and she scrolled through the catalogue for a song, any song, and her thumb kept going past all of them, looking for one that wasn't there. A song with a bassline you could feel in the seat. She knew the title. She typed it in. *No results.* She typed it again." },
    { choose: [
      { t: "(Pick something everyone knows.)", stat: { charm: 1 }, then: [
        { n: "She picked the dumbest, loudest, most universally known song in the catalogue, the one everyone in the country had danced to at least once at a wedding against their will, and the whole room screamed and got up on the couch, and for three and a half minutes nobody was hurt or sad or carrying anything, they were just a sticky room full of people yelling the same words at a disco ball." }
      ] },
      { t: "(Pick the sad emo one Asahi did. Again.)", then: [
        { n: "Asahi stared at her. Then, without a word, he picked up the second mic and stood next to her, and they sang it together, deadpan, with their eyes shut and their hands over their hearts, and Cherry filmed the whole thing and said it was the most romantic thing she'd ever seen and she was going to send it to Jungwon." },
        { s: 'asahi', f: 'happy', t: "Send it. He'll think it's funny. He's the only one of you with taste." }
      ] }
    ] },

    // Winter Street: the machine.
    { place: 'Hanlim · Winter Street', time: 'Evening', soft: true },
    { n: "Outside, it had started snowing again, small dry flakes that didn't land so much as hang around, and the convenience store on the corner was lit up like an aquarium, and the row of vending machines out front hummed in the cold with the patient, buzzing loneliness of machines that had been switched on for a very long time." },
    { n: "Hyunsuk was out there already, leaning on the wall by the machines with his hands in his pockets, and he looked at them all coming out, and looked at Cherry for a second, and then looked at the machines, and said *I'm buying* like that settled something. Maybe it did." },
    { n: "Junkyu pressed banana milk and got banana milk. Jaehyuk pressed barley tea and got barley tea. Asahi pressed black coffee and got black coffee and said it was the only thing in this town that had never disappointed him. Jihoon pressed strawberry milk and got strawberry milk and drank it with his pinky out. Cherry pressed corn tea, which nobody understood, and got corn tea." },
    { n: "Solar pressed peach iced tea." },
    { glitch: 'epi-h-g-vending' },
    { n: "Somewhere under the hum, so faint she'd decide later it was the store's speakers, three notes of a piano went by. Then the machine thunked, deep in its chest, and something rolled down into the tray, heavier than a tea, and she bent and took it out." },
    { n: "Pink and black. A logo like claw marks." },
    { n: "She stood there holding it. The snow kept not landing." },
    { s: 'jaehyuk', f: 'neutral', t: "That's not peach tea." },
    { s: 'solar', t: "Yeah." },
    { s: 'jaehyuk', f: 'neutral', t: "That's not even in there. Look. There's no slot for it. They don't stock that here. They don't stock that *anywhere* here, I've looked, it's an import." },
    { s: 'cherry', f: 'happy', t: "Press it again." },
    { n: "She pressed it again. Pocari, this time, the blue one, the most normal drink on earth." },
    { n: "Thunk. Pink and black." },
    { s: 'cherry', f: 'happy', t: "OH my God." },
    { n: "She pressed the water. The cheapest thing in the machine. Plain water, in a plain clear bottle, behind plain clear glass." },
    { n: "Thunk." },
    { n: "Cherry was on the ground. Actually on the ground, on the sidewalk, in the snow, laughing so hard she couldn't breathe, phone up, filming, and Jihoon had his hands on his knees and was wheezing, and Junkyu was saying *it's haunted!! it's a haunted machine!!* in a voice that was delighted and only a little bit scared." },
    { s: 'jihoon', f: 'happy', t: "The machine has chosen you. You can't fight it, Sol. It's destiny. It's literally destiny." },
    { s: 'cherry', f: 'happy', t: "It's because you went to a *temple*. You came back *blessed*. The vending machine knows." },
    { s: 'asahi', f: 'neutral', t: "Press the coffee. I want to see if it does it for coffee." },
    { s: 'solar', t: "I'm not pressing anything else." },
    { n: "She said it too fast. Nobody noticed. Everybody was laughing. Cherry was sending the video to every chat she'd ever been in, and the snow was hanging in the air, and Hyunsuk had his hand on the side of the machine, frowning at it the way you'd frown at a dog that had growled at nobody." },
    { n: "She put her free hand in her coat pocket." },
    { n: "It was there. Of course it was there. Cold and smooth and shut, the one he'd given her on the last platform, the one she was never going to open. Still there. Still the only one. The three in her arms weren't it, and she knew that the way you know your own handwriting, and she stood under the buzzing lights holding three cans that didn't exist in this town, and her stomach went somewhere very far down and stayed there." },
    { n: "It wasn't funny. She knew that the way the dog knew about the year." },
    { n: "Everyone else thought it was the funniest thing that had ever happened." },
    { choose: [
      { t: "(Give them away.)", then: [
        { n: "Cherry took one and cracked it open before Solar could say anything, and drank half of it in one go, and made a face." },
        { s: 'cherry', f: 'surprised', t: "Oh, that's disgusting. That's *so* pink. It tastes like a highlighter." },
        { s: 'jihoon', f: 'neutral', t: "Give it. Give. The Almighty Hoon fears no highlighter." },
        { n: "He took the second one. He drank it like a dare. He said it tasted like nothing, *like nothing, Sol, like air with a logo*, and he finished it anyway, and crushed the can, and threw it at the bin and missed." },
        { n: "She held the third one until they started walking, and then she set it on top of the machine, upright, very carefully, and didn't look back to see if it was still there." }
      ] },
      { t: "(Put them back in the tray.)", then: [
        { n: "She crouched and put all three back in the tray, one at a time, upright, like she was returning something she'd borrowed, and stood up and wiped her hands on her coat." },
        { s: 'cherry', f: 'surprised', t: "You're *returning* them? To the haunted machine?" },
        { s: 'solar', t: "They're not mine." },
        { n: "Cherry laughed again, but it was a smaller laugh, and she looked at Solar for a second longer than the joke needed, and then hooked her arm through Solar's and pulled her down the street, away from the buzzing lights." }
      ] }
    ] },
    { bond: { cherry: 1 } },
    { n: "Behind them the machines went on humming in the snow, patient, lit up, full of exactly what they said they were full of, as far as anyone could tell." }
  ] },

  // ───────────────────────────── 12/24, evening: Christmas Eve (the route) ─────────────────────────────
  { id: 'epi-h-eve', date: '12/24', slot: 'evening', consumes: true, title: 'christmas eve', place: 'Hanlim · Home · Her Room', time: 'Evening', scene: [
    { music: 'epi-h-eve' },
    { n: "Christmas Eve came in grey and stayed grey, the kind of grey where the streetlights come on at four and the whole town looks like it's being kept somewhere in a drawer. Her parents had gone to a dinner for her father's work. They'd asked her to come. She'd said she had to study, and her mother had looked at her the way you'd look at a weather forecast you didn't believe, and gone anyway." },
    { n: "So it was her and Nana and the house, and her phone, face up on the bed, going off." },
    { ifRouteOpen: 'jungwon', then: [
      { phone: [
        { from: 'jungwon', t: "merry christmas eve." },
        { from: 'jungwon', t: "my parents are home tonight. they're watching something with a lot of violins in it. i'm at my desk pretending chapter nine is interesting." },
        { from: 'jungwon', t: "if you happened to be at the end of my street at nine, i think maeumi would suddenly need to go out." },
        { from: 'jungwon', t: "he doesn't. he went at seven. but i think he would." }
      ], contact: 'Won' }
    ], else: [
      { phone: [
        { from: 'jungwon', t: "merry christmas eve. i'm home. please eat something that isn't cereal." }
      ], contact: 'Won' }
    ] },
    { ifRouteOpen: 'jihoon', then: [
      { phone: [
        { from: 'jihoon', t: "Get In The Car" },
        { from: 'jihoon', t: "I'm Outside" },
        { from: 'jihoon', t: "I Have Been Outside For Ten Minutes. Your Neighbor Thinks I'm A Cop" },
        { from: 'jihoon', t: "The Lights At The Park Are On. They Are Tacky. We Are Going To Judge Them" }
      ], contact: 'jihoney' }
    ], else: [
      { phone: [
        { from: 'jihoon', t: "Merry Xmas Eve Skank" },
        { from: 'jihoon', t: "Tell My Son I Said Merry Xmas" }
      ], contact: 'jihoney' }
    ] },
    { phone: [
      { from: 'sunoo', t: "sunooshine: DECORATING YEOBO'S!!! NOW!!! halmeoni made too much food!!! everyone come!!!" },
      { from: 'niki', t: "rikiniki: i found a ladder" },
      { from: 'heeseung', t: "heeheeseung: where did you find a ladder" },
      { from: 'niki', t: "rikiniki: outside" },
      { from: 'jake', t: "jakeys: layla is dressed as a reindeer and she is NOT happy about it" },
      { from: 'sunghoon', t: "princehoon: sunghoon will be fashionably late. - s" },
      { from: 'jay', t: "jbird: bro just say late" },
      { from: 'jungwon', t: "injangwon: have fun. don't let niki on the ladder." },
      { from: 'niki', t: "rikiniki: too late" }
    ], contact: 'RETREAT FACTS (do not leave)' },
    { n: "Three places she could be. She sat on the edge of the bed with her coat already half on, because some part of her had known since four o'clock she was going somewhere, and Nana watched her from the doorway with the resigned face of a dog who knew what a coat meant." },
    { n: "The can was in the pocket. She felt it against her hip when she stood, cold, the way it always was, and left it there." },
    { choose: [

      // ── Jungwon ──
      { t: "(Go to the end of Jungwon's street.)", when: { ifRouteOpen: 'jungwon' }, flag: 'epi-route-jungwon', then: [
        { place: "Hanlim · Jungwon's Street", time: 'Evening' },
        { music: 'epi-h-romance' },
        { n: "His street was the kind of street where the houses had gates and the gates had little lights on them and the little lights were all the same warm white, like the neighbourhood had held a meeting about it. The snow on the pavement was untouched, except for one set of very small paw prints and one set of slippers, coming toward her from the house at the end." },
        { n: "He was in slippers. In the snow. With his good coat over his pyjamas and Maeumi on a leash, and Maeumi was walking with the slow, offended dignity of a very small dog who had been taken out at nine o'clock at night for absolutely no reason." },
        { s: 'jungwon', f: 'neutral', t: "Hi." },
        { s: 'solar', t: "You're in *slippers*." },
        { s: 'jungwon', f: 'flustered', t: "Shoes would have been suspicious." },
        { s: 'solar', t: "What did you tell them?" },
        { s: 'jungwon', f: 'neutral', t: "That Maeumi needed to go out." },
        { n: "He said it like a confession, low, looking down at the dog, and the dog looked back up at him with a face that clearly said *I did not*." },
        { s: 'jungwon', f: 'serious', t: "I've never lied to them before. Not like that. I've said what they want to hear. That's different. That's a kind of truth. This wasn't." },
        { s: 'jungwon', f: 'neutral', t: "It was very easy. That's the part I don't like." },
        { n: "She didn't know what to say to that, so she took his hand, the one without the leash, and it was so cold it felt like holding a key, and she put it in her own coat pocket, the other one, the one without the can, and kept her hand over it in there." },
        { s: 'jungwon', f: 'neutral', t: "I have ten minutes. I timed the walk. If I'm gone longer than ten minutes it stops being a dog." },
        { ifFlag: 'epi-h-radio-hers', then: [
          { s: 'jungwon', f: 'neutral', t: "I found your song, by the way. The one from the car. I listened to it with headphones. Four times." },
          { s: 'solar', t: "And?" },
          { s: 'jungwon', f: 'neutral', t: "It's very loud." },
          { s: 'jungwon', f: 'happy', t: "I'm on five." }
        ] },
        { cg: 'epi-h-eve-jungwon' },
        { n: "They walked to the end of the street and back. That was all. Maeumi stopped at every single gate to inspect the little warm white lights, and they let him, and the snow came down slow between the streetlamps, and Jungwon kept looking at his watch with his free hand, and then stopped looking at it, and then looked at it again like he'd caught himself doing something." },
        { glitch: { near: true } },
        { n: "He didn't say anything about the year. He didn't say anything about the radio, or the half a name on the phone two nights ago, or the can she kept touching through her coat like a pulse. He just walked next to her in his slippers, getting snow in them, not complaining, and every so often his thumb moved against her knuckles inside her pocket, and that was the whole conversation, and it was enough of one." },
        { s: 'jungwon', f: 'neutral', t: "Nine minutes." },
        { s: 'solar', t: "Okay." },
        { s: 'jungwon', f: 'neutral', t: "I'm going to do something tomorrow. You're not going to like it. I'm going to do it anyway." },
        { s: 'solar', t: "What?" },
        { s: 'jungwon', f: 'neutral', t: "Something with your parents." },
        { s: 'solar', t: "*Won.*" },
        { n: "He kissed her. Quick, cold, a little crooked, in the middle of his own street, with his own front door forty metres away and the light on in the window, which was either very brave or very stupid, and he didn't seem to know which either, because when he pulled back his face was doing the thing it did before a competition. Still. Certain. Terrified." },
        { s: 'jungwon', f: 'flustered', t: "Merry Christmas. Go home. It's cold." },
        { cg: null },
        { n: "He went back up the street with the dog, not hurrying, in his slippers, at exactly the speed of a boy walking a dog who didn't need walking. At the gate he turned around. She was still standing there. He lifted Maeumi's leash a little, like a wave. She lifted her hand." },
        { n: "The door opened. The door closed. Ten minutes, on the dot." },
        { bond: { jungwon: 1 } }
      ] },

      // ── Jihoon ──
      { t: "(Get in Jihoon's car.)", when: { ifRouteOpen: 'jihoon' }, flag: 'epi-route-jihoon', then: [
        { place: 'Hanlim · Christmas Lights', time: 'Evening' },
        { music: 'epi-h-jihoon' },
        { n: "His car was warm in the specific, overheated way of a car whose owner liked it like a sauna, and it smelled like cologne and cold fries and the pine tree air freshener that had stopped smelling like pine sometime in September, and he didn't look at her when she got in. He just pulled away from the curb before her door was all the way shut." },
        { s: 'jihoon', f: 'neutral', t: "You're getting snow on my upholstery." },
        { s: 'solar', t: "Your upholstery is fries." },
        { s: 'jihoon', f: 'neutral', t: "Vintage fries. Collector's fries. Don't disrespect the fries." },
        { n: "The lights at the park were exactly as tacky as advertised. The town did it every year, a whole loop road of them, a glowing reindeer with one leg out, a tunnel of blue bulbs, a giant inflatable snowman with a slow leak that made it look like it was bowing to every car that passed. Jihoon drove through the whole thing at four kilometres an hour with the windows cracked and the heat on full and gave every single display a rating out of ten in a nasal, judgy voice like he was hosting a show." },
        { s: 'jihoon', f: 'happy', t: "Reindeer. Three. He has a limp. I respect him, but I can't reward it." },
        { s: 'jihoon', f: 'happy', t: "Snowman. Negative four. Get up. Have some dignity, snowman." },
        { s: 'solar', t: "He's *bowing*. He's being *polite*." },
        { s: 'jihoon', f: 'neutral', t: "He's deflating, Sol. It's a metaphor. Look it up." },
        { n: "She laughed so hard she hit the window with her forehead. He looked pleased with himself in a way he didn't hide fast enough." },
        { cg: 'epi-h-eve-jihoon' },
        { n: "At the far end of the loop there was a tunnel of white lights, the long one, the one they'd walked through every year since they were small, her holding his sleeve because she was scared of the dark bits between the bulbs, him pretending not to be. He slowed down even more. He didn't say anything about it. Neither did she." },
        { s: 'solar', t: "Remember the year it short-circuited and we were stuck in the dark in the middle and you—" },
        { s: 'jihoon', f: 'neutral', t: "No." },
        { s: 'solar', t: "You screamed. You screamed like a—" },
        { s: 'jihoon', f: 'neutral', t: "I have no memory of anything. Ever. I'm a clean slate. Ask anyone." },
        { n: "He meant this year, too. She knew he did. The whole of it, the dorm and the station and every night of it he'd been right there next to her. He was holding a door shut on all of it right now, in the car, with the heat on full, and the white light went over his face in bars, bright, dark, bright, and in the bright bits she could see his jaw working." },
        { n: "She opened the glovebox for napkins. Her nose was running from the cold. There were no napkins. There was a pill bottle with the label scraped off and something rattling in it, and he reached across her without looking, and closed the glovebox with one finger." },
        { s: 'jihoon', f: 'neutral', t: "Napkins are in the door." },
        { n: "They were. She took one. Neither of them said anything for the rest of the tunnel." },
        { cg: null },
        { n: "When they came out the other end, he pulled into the empty lot by the skating pond and put the car in park and left the engine running, and for a while they just sat there with the heater roaring and the reindeer limping in the rear-view mirror." },
        { s: 'jihoon', f: 'sad', t: "You looked different. When you came through that door. In the gym. For a second you looked like—" },
        { n: "He stopped. His hand had come up off the wheel, toward her face, the side with the stud, and it stopped there in the air between them, and for one second it was the most honest thing she'd seen him do in months." },
        { n: "Then he flicked her nose. Hard." },
        { s: 'jihoon', f: 'happy', t: "Like you'd joined a cult. Which you did. Temple stay. Very spiritual. I'm happy for you." },
        { s: 'solar', t: "*Ow*, Jihoon, *what the hell*." },
        { s: 'jihoon', f: 'happy', t: "Merry Christmas Eve, ungrateful rug." },
        { n: "He drove her home the long way, back through the tacky lights, so they'd have to see the bowing snowman again, and he gave it a two this time, *for effort*, and she didn't say anything about the glovebox, and he didn't say anything about the door in the gym, and that was a kind of deal too, the oldest one they had." },
        { bond: { jihoon: 1 } }
      ] },

      // ── The council ──
      { t: "(Go to Yeobo's.)", when: { ifRouteOpen: 'council' }, flag: 'epi-route-council', then: [
        { place: "Hanlim · Yeobo's", time: 'Evening' },
        { music: 'epi-h-goofy' },
        { n: "Yeobo's had the sign flipped to CLOSED and every light inside it on, and through the steamed-up front window it looked like a snow globe somebody had shaken too hard. There was a ladder in the middle of the floor. Niki was on top of it. Heeseung was holding the bottom of it with both hands and his clipboard in his teeth." },
        { s: 'heeseung', f: 'serious', t: "Mm-mmf. *Mmf.*" },
        { s: 'niki', f: 'happy', t: "He says hi Sol. He also says I'm going to die." },
        { s: 'solar', t: "Are you?" },
        { s: 'niki', f: 'happy', t: "Probably not. Maybe. It's Christmas, I'm feeling lucky." },
        { n: "Sunghoon was standing very still near the counter, wrapped from shoulder to knee in a string of fairy lights like a mummy, plugged in, glowing, with the calm face of a man who had decided this was intentional." },
        { s: 'sunghoon', f: 'neutral', t: "Sunghoon is a tree now. Don't ask Sunghoon how it happened." },
        { s: 'jay', f: 'neutral', t: "He spun. He was showing us a spin. Like the skating thing." },
        { s: 'sunghoon', f: 'flustered', t: "The skating thing is called a *sit spin*, and it was beautiful, and the lights got involved." },
        { n: "Jay was hanging ornaments on the little fake tree by the register with the blunt efficiency of a man defusing a bomb, one per branch, exact spacing, no notes. Jake was on the floor sorting tinsel by colour and narrating it to no one. Sunoo came out of the kitchen with two trays and a face so bright it was basically another light, and when he saw her he put the trays down on the nearest table and ran." },
        { s: 'sunoo', f: 'happy', t: "SOL! You came! I didn't say anything to anyone's parents today! Not one thing!" },
        { s: 'solar', t: "I'm so proud of you." },
        { s: 'sunoo', f: 'happy', t: "Halmeoni asked me what the temple was called and I just *walked away*. Like a monk." },
        { n: "Sunoo's grandmother, behind the counter, did not look up from the dumplings she was folding, but one corner of her mouth went somewhere it didn't usually go." },
        { n: "There was a phone propped up against the sugar jar on the counter, on a video call, and on the screen was Jungwon at his desk at home, lit by one lamp, in a hoodie, with a textbook open in front of him that he wasn't looking at." },
        { s: 'jungwon', f: 'neutral', t: "Hi. I'm here. I'm here for eleven minutes." },
        { s: 'jungwon', f: 'neutral', t: "The tree's crooked." },
        { s: 'jay', f: 'neutral', t: "The tree's not crooked." },
        { s: 'jungwon', f: 'neutral', t: "Move me. Point me at it." },
        { n: "Jay picked up the phone and pointed it at the tree. There was a pause." },
        { s: 'jungwon', f: 'neutral', t: "It's crooked." },
        { s: 'jay', f: 'neutral', t: "Bro." },
        { cg: 'epi-h-eve-council' },
        { n: "They put the star on last. It was a cheap gold plastic one Sunoo had owned since he was six, and the ladder was occupied by Niki, who refused to come down, so Jay and Sunghoon, still glowing, each took one of Solar's arms and just lifted her, straight up, like a kid at a parade, while she screamed and kicked and Jake filmed it, and she jammed the star on so hard the whole tree leaned." },
        { s: 'jungwon', f: 'happy', t: "Now it's crooked." },
        { n: "Everybody laughed. Even Sunoo's grandmother, a little, into the dumplings." },
        { cg: null },
        { n: "Then it was quiet, the good kind, the kind after a laugh where everybody's still smiling and nobody's said the next thing yet. The snow was coming down outside in fat, slow flakes, and the window had gone dark enough to be a mirror, and in it she could see all of them, Niki on his ladder and Heeseung at the bottom and Sunghoon glowing and Jay and Jake and Sunoo, and a small phone screen with a boy in it, and her." },
        { n: "Seven of them and her. She counted twice. She'd caught that from somebody." },
        { n: "In the window, under the reflection of the crooked tree, nobody was wearing an armband. She checked that too." },
        { s: 'sunoo', f: 'happy', t: "Group photo! Group photo before Won's eleven minutes are up!" },
        { s: 'jungwon', f: 'neutral', t: "Nine." },
        { n: "So they all piled in around the sugar jar, ladder and lights and tinsel, and Sunoo held his phone out at arm's length and Jungwon's phone sat in the middle of the frame like a portrait at a memorial, and Jake said *say Monkees* and nobody did, and it was the worst photo any of them had ever been in, and Heeseung printed it later and stuck it on the clipboard." },
        { bond: { council: 1 } }
      ] }
    ] }
  ] },

  // ───────────────────────────── 12/25, afternoon: Christmas ─────────────────────────────
  { id: 'epi-h-christmas', date: '12/25', slot: 'after', consumes: true, title: 'four cups', place: 'Hanlim · Home · Living Room', time: 'Daytime', scene: [
    { music: 'epi-h-christmas' },
    { n: "Her parents were home on Christmas Day, both of them, at the same time, in the same room, which happened about as often as a comet, and the house felt it. Her mother had been cooking since nine. Her father had been told to stay out of the kitchen since nine and fifteen. The heating was up too high, the windows were fogged, and there was a cake from the good bakery on the counter that her mother had ordered a week ago, back when she still thought her daughter was at a retreat." },
    { n: "Nana had been given a red bow. Nana had eaten half of the red bow. The other half hung off his collar like a medal." },
    { n: "The doorbell rang at exactly one o'clock." },
    { n: "Solar knew. Solar knew the way you know a step is there in the dark. She got up off the sofa so fast she knocked a cushion onto the floor, and her mother looked up from the kitchen doorway with a spoon in her hand and said *who's that*, and Solar said *nobody* in a voice that was so obviously somebody that her father put down his newspaper." },
    { n: "He was on the step in the good coat, buttoned to the top, his hair actually brushed, holding a wrapped present under one arm and a white bakery box in both hands, held level, like it had something alive inside it. The snow on his shoulders hadn't melted. He'd been standing there a while, getting ready." },
    { s: 'jungwon', f: 'neutral', t: "Hi. Merry Christmas. I'm sorry. I'm doing it." },
    { s: 'solar', t: "Won, you don't have to—" },
    { n: "Her mother was behind her. Her mother had appeared behind her in the hall, the way mothers do, without walking, spoon still in hand." },
    { cg: 'epi-h-christmas' },
    { n: "Jungwon bowed. Not a nod. A full bow, ninety degrees, the bakery box held perfectly level the whole way down and the whole way back up, like a waiter in a very expensive restaurant, and when he came back up his ears were already red." },
    { s: 'jungwon', f: 'neutral', t: "Good afternoon. I'm Yang Jungwon. I'm sorry to come by without calling first. These are for your family. They're from the place by the station. I didn't know what you liked, so I asked the woman what the best thing was, and she said this, so if it's bad it's her fault." },
    { n: "Her mother looked at him. Looked at the box. Looked at him again, and her face did something slow, like a drawer opening in an old desk." },
    { s: 'mom', t: "...You're the one from the driveway." },
    { s: 'jungwon', f: 'surprised', t: "Ma'am?" },
    { s: 'mom', t: "October. Eleven at night. You were standing in our driveway for twenty minutes holding a dog. I watched you from the upstairs window. I was about to call somebody." },
    { s: 'jungwon', f: 'flustered', t: "That was. Yes. That was Maeumi. He was. I was walking him. Past. For twenty minutes. In one place." },
    { s: 'solar', t: "*Mom.*" },
    { s: 'mom', t: "Well, nobody ever *introduced* us, Solar." },
    { n: "She said it at Solar. All of it. The retreat, the nine days, the voicemails, the cardigan, all of it folded small and handed over in one sentence, and then she turned to the boy on her step and smiled the specific, terrifying smile she used on clients." },
    { cg: null },
    { s: 'mom', t: "Come in, Jungwon. Take your shoes off. You're letting the heat out." },
    { s: 'solar', t: "This is Jungwon. He's my... He's. Mom, Dad, this is my boyfriend." },
    { n: "Her father, in the living room doorway now, shook Jungwon's hand. Jungwon shook it back with both hands, the polite way, the formal way, the way you'd shake a principal's hand at graduation, and her father looked delighted and alarmed in about equal parts." },
    { s: 'dad', t: "Boyfriend. Okay. Hi. How are your grades?" },
    { s: 'jungwon', f: 'neutral', t: "First in the year, sir. I'm on the council. I'm the president. I'm aiming for first again on the make-ups. I take five AP classes and two dual-credit courses, and I tutor your daughter in calculus. She's doing much better than she thinks." },
    { n: "Her father blinked. Her father looked at Solar. Her father had never, in her entire life, heard the phrase *your daughter* and *much better* in the same sentence about math." },
    { s: 'dad', t: "...Do you want some cake?" },
    { n: "They'd gotten as far as the sofa. Jungwon sitting on the very edge of it, back straight, knees together, a cup of tea he hadn't asked for balanced on one knee, Nana's whole enormous head in his lap, answering her mother's questions in his speech voice, the bright clear one for assemblies, which was working, which was *terrifyingly* working." },
    { n: "Then the doorbell rang again." },
    { n: "Two long, one short. Solar knew that ring like she knew her own name. Her mother's whole face changed before Solar had even stood up." },
    { s: 'mom', t: "*Jihoonie!*" },
    { n: "He was on the step with a cardboard drink carrier and four paper cups, the same four paper cups from the same stand by the park he'd brought every Christmas since they were small enough to need help carrying them, steam coming off the lids, wearing his chains and his beanie and an expression of pure, innocent, choir-boy delight." },
    { s: 'jihoon', f: 'happy', t: "Merry Christmas, Eomeoni! Merry Christmas, Abeoji! I brought the cocoa!" },
    { n: "Her mother hugged him. Full arms. Spoon and all. Like he was the one who'd been gone nine days. Her father came out into the hall and clapped him on the back so hard the cocoa sloshed, and asked him about his car, and about the noise the car had been making, and Jihoon said he'd fixed it himself, and her father looked at him the way her father had never once looked at a boy holding his daughter's hand in the driveway." },
    { n: "And Nana. Nana left Jungwon's lap like he'd been fired out of it." },
    { s: 'jihoon', f: 'happy', t: "My son! My beloved! You got fat! I'm so proud of you!" },
    { n: "Then he looked up, past her parents, past the dog, into the living room, at the boy sitting on the edge of the sofa with a cup of tea on his knee and dog hair all over his good coat." },
    { n: "His smile didn't go anywhere. It just got wider. That was worse." },
    { s: 'jihoon', f: 'happy', t: "Oh. Jungwon. Hi. I only brought four." },
    { n: "Jungwon stood up. He set his tea down on a coaster. He did it very carefully, very precisely, the exact centre of the coaster, and when he straightened up his face was perfectly pleasant and perfectly polite and about as warm as the inside of a freezer." },
    { s: 'jungwon', f: 'neutral', t: "Jihoon. Merry Christmas. It's nice you could come." },
    { s: 'jihoon', f: 'happy', t: "It's nice that *you* could come. I come every year. This is your first year. How exciting for you." },
    { s: 'jungwon', f: 'neutral', t: "It is. Thank you." },
    { s: 'jihoon', f: 'happy', t: "Here. Take mine. I've had plenty of Christmases here." },
    { n: "He held out his own cup. The fourth one. Jungwon looked at it for exactly one second too long." },
    { s: 'jungwon', f: 'neutral', t: "That's very generous. Thank you, Jihoon." },
    { n: "He took it. He drank from it. He held eye contact the whole time, over the rim, while her mother beamed at both of them like she was watching her two sons share, and Solar stood in the hallway between them with her own cocoa going cold in her hands and wanted, very badly, to lie down on the floor with the dog." },
    { n: "Jihoon was a dream at lunch. That was the horrible part. He set the table without being asked. He knew where everything went. He told her mother the japchae was better than last year and her mother glowed. He fixed the drip under the kitchen sink that her father had been *getting to* since August with a butter knife and a hair tie. He said *please* and *thank you* in sentences without a single capital letter in the wrong place. He was the nicest he'd been in a year." },
    { n: "Jungwon got quieter. With every nice thing Jihoon did, Jungwon got a little quieter and a little more polite, until he was sitting at the end of the table cutting his food into exact, identical squares and saying *thank you, this is wonderful* every time anyone passed him anything, in a voice so even it could've levelled a shelf. He was furious. She'd never seen him this furious. He was being so courteous about it that her father asked twice if he was feeling alright." },
    { n: "Then her mother put down her chopsticks, and smiled at Jungwon, and Solar knew exactly what was coming, because she'd watched her mother's eyes go to the window at the start of the meal and then come back, slow, like a file being reopened." },
    { s: 'mom', t: "So, Jungwon. This retreat." },
    { ifFlag: 'epi-h-mom-lie', then: [
      { s: 'mom', t: "Solar tells me they took your phones." }
    ] },
    { s: 'jungwon', f: 'neutral', t: "It was a temple stay. In Gangwon-do. They collected our phones at the gate. It's a temple rule. I'm sorry nobody could reach her. That was my responsibility, as president. I should have arranged a way to call home." },
    { s: 'mom', t: "In exam week." },
    { s: 'jungwon', f: 'neutral', t: "Yes. It was poorly scheduled. I've raised it with the advisor." },
    { s: 'jihoon', f: 'happy', t: "A temple. Wow. Did they teach you to breathe, Jungwon? You seem very calm." },
    { s: 'jungwon', f: 'neutral', t: "They taught us a great deal about patience." },
    { s: 'mom', t: "And what did you do there, Solar? Exactly? All day?" },
    { choose: [
      { t: "We did a hundred and eight bows every morning. At five. In the cold.", flag: 'epi-h-xmas-bows', then: [
        { glitch: { strain: 1 } },
        { n: "It was such a good detail. It was so good, and so specific, and so sorry for itself, that her mother actually winced in sympathy, and her father said *a hundred and eight* under his breath like he was trying to picture it, and something at the back of Solar's neck went cold and thin, a wire pulled tight from somewhere very far away." },
        { s: 'mom', t: "...At five?" },
        { s: 'solar', t: "Every morning." },
        { s: 'jihoon', f: 'happy', t: "That's so spiritual. I'm so moved. I have to lie down." }
      ] },
      { t: "(Let Jungwon answer.)", then: [
        { s: 'jungwon', f: 'neutral', t: "Mostly sweeping. And silence. A lot of silence." },
        { s: 'dad', t: "Solar? Silence?" },
        { s: 'jungwon', f: 'neutral', t: "She struggled, sir. But she grew." },
        { n: "Her father laughed so hard he had to put his glass down. Her mother pressed her lips together and didn't laugh, and then did, and Jihoon stabbed a piece of beef like it had insulted his family." }
      ] },
      { t: "Mom, it's Christmas.", stat: { charm: 1 }, then: [
        { s: 'mom', t: "It's Christmas *after you were missing for nine days*, Solar." },
        { s: 'dad', t: "It's both. It can be both. Pass the japchae." }
      ] }
    ] },

    // By route.
    { ifEpiRoute: 'jungwon', then: [
      { place: 'Hanlim · Home · Porch', time: 'Daytime', soft: true },
      { music: 'epi-h-romance' },
      { n: "He had to be home by five. He announced it at 4:20 the way you'd announce a flight, and her mother insisted he take half the cake, and Jihoon said *drive safe, Jungwon* from the sofa in a voice like a hand waving from a lifeboat, and Solar walked him out onto the porch and shut the door behind them, hard, on all of it." },
        { n: "It was snowing again. The porch light was on even though it was still day. He stood on the top step holding half a cake in a bakery box and breathed out, long, white, like he'd been holding it in since one o'clock." },
      { s: 'jungwon', f: 'neutral', t: "He's very good with your parents." },
      { s: 'solar', t: "He's had fifteen years." },
      { s: 'jungwon', f: 'neutral', t: "I've had one afternoon." },
      { s: 'jungwon', f: 'serious', t: "I'm going to need more afternoons." },
      { n: "Then he put down the cake on the railing, carefully, level, and took the wrapped present out from under his arm, where it had been the entire day, through the tea and the cocoa and the japchae and the temple, like he'd forgotten it was there, which he hadn't, which he'd been holding on to like a rope." },
      { n: "She opened it on the step. A scarf. Soft and thick and dark green, the colour of a pine tree in the snow, folded with the kind of precision that meant he'd folded it himself, more than once, until the corners were right." },
      { s: 'jungwon', f: 'neutral', t: "It's green." },
      { s: 'solar', t: "Won, it's—" },
      { s: 'jungwon', f: 'flustered', t: "Because of your eyes. That's not embarrassing. It's accurate. They're green and it's green. It's just a fact." },
      { n: "She put it on. He watched her do it wrong, and then reached over and fixed it, tucking one end under the other at her collarbone with the same care he used for the bake sale tin, for chapter six, for anything he'd decided was his to get right, and then left his hands there a second, on the scarf, at her throat, warm." },
      { s: 'jungwon', f: 'neutral', t: "There. Now it's right." },
      { n: "She kissed him on the porch. In front of the window. She didn't check. She found out later from her mother that her father had been standing right there in it, with a plate of cake, watching, and that when Jungwon pulled back and saw him, Jungwon had bowed to the window. Ninety degrees. Very formal. Her father had bowed back." },
      { bond: { jungwon: 1 } }
    ], else: [
      { ifEpiRoute: 'jihoon', then: [
        { place: 'Hanlim · Home · Porch', time: 'Evening', soft: true },
        { music: 'epi-h-jihoon' },
        { n: "Jungwon left at 4:20 with half the cake and a bow for everyone, including Nana. Jihoon stayed. Jihoon always stayed. Her parents went to watch the movie they watched every Christmas and fell asleep in it inside of twenty minutes, the way they did every Christmas, and Jihoon picked up two of the paper cups, still a quarter full and stone cold, and jerked his head at the front door." },
        { n: "They sat on the steps. The same steps. Every year, since they were small enough that their feet didn't reach the bottom one, with the same cocoa from the same stand going cold in their hands, watching the street lights come on, because that was the tradition, that was the whole tradition, there wasn't any more to it than that." },
        { s: 'jihoon', f: 'neutral', t: "Your boyfriend drinks like a hostage." },
        { s: 'solar', t: "You gave him your cup to be a dick." },
        { s: 'jihoon', f: 'happy', t: "I gave him my cup to be gracious. He took it to be a dick. Very different." },
        { n: "The snow was coming down slow and blue in the streetlights. He drank his cold cocoa like it was hot. She leaned against his shoulder without thinking about it, the way she'd leaned against it a thousand times, and felt him go still, and then not move away." },
        { s: 'jihoon', f: 'sad', t: "Your mom hugged me like I'd been gone." },
        { n: "His voice did something on the last word. A small thing, a catch, like a sleeve on a nail." },
        { s: 'jihoon', f: 'sad', t: "I wasn't gone. I was home. I'm always home. I was just..." },
        { n: "He didn't finish. He looked at his cup. She waited, the way you wait for a cat to come out from under a bed, not reaching." },
        { s: 'jihoon', f: 'happy', t: "...Anyway, she hugs good. Your dad still can't fix a sink. I'm the son now. It's done. I've taken over. Tell him gently." },
        { s: 'solar', t: "Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "Drink your cocoa. It's a tradition. You're ruining the tradition with your face." },
        { n: "She drank it. It was disgusting, cold and thick and too sweet, the way it was every year. They sat on the steps until the streetlights were all the way on and his hands had gone red and he wouldn't put them in his pockets, because one of his pockets had something in it he didn't want her to see him reach for, and she knew it, and he knew she knew it, and the snow came down on both of them anyway." },
        { bond: { jihoon: 1 } }
      ], else: [
        { place: 'Hanlim · Home · Front Door', time: 'Daytime', soft: true },
        { music: 'epi-h-goofy' },
        { n: "The doorbell rang a third time at three o'clock, and then didn't stop ringing, and then there was a very loud thud against the front door like something large had hit it, and then the sound of a lot of people swearing in a lot of directions." },
        { n: "When she opened it the council was on her front step in a heap. Literally a heap. Niki on the bottom, Jay half on top of him, Heeseung on top of Jay with the clipboard held up over his head to save it, Sunoo sitting in the snow next to them holding a box of croissants perfectly level, Sunghoon standing slightly apart with the calm face of a man who had stepped aside at the right moment and would never let anyone forget it." },
        { s: 'heeseung', f: 'surprised', t: "Ice. There's ice. On your step. Someone should salt that." },
        { s: 'niki', f: 'happy', t: "I'm fine! I'm fine. I broke Jay's fall." },
        { s: 'jay', f: 'neutral', t: "You *caused* Jay's fall." },
        { s: 'niki', f: 'happy', t: "And then I broke it. Full service." },
        { n: "And at the end of the path, red-cheeked, grinning, in his pom-pom beanie, Jake, holding a leash, and on the end of the leash, a dog in a reindeer costume who was clearly done with all of this." },
        { s: 'jake', f: 'happy', t: "Merry Christmas! This is Layla. Layla, this is Sol. We owe Nana a date. It's been owed since *September*. A Jake always pays his debts." },
        { s: 'sunghoon', f: 'neutral', t: "That's a Lannister." },
        { s: 'jake', f: 'happy', t: "A Jake *also* always pays his debts." },
        { n: "Behind her in the living room, Jungwon put his tea down on a coaster very slowly and closed his eyes." },
        { n: "The council saw him. The council saw him on the sofa, with her father, with dog hair all over his good coat. There was a long silence on the step." },
        { s: 'niki', f: 'surprised', t: "Won is meeting the *parents*?" },
        { s: 'sunoo', f: 'happy', t: "On *Christmas*?" },
        { s: 'jay', f: 'neutral', t: "And Park Jihoon's here. Oh, this is *bad*. This is so bad. I'm coming in." },
        { n: "Her mother fed all of them. Her mother looked at the seven boys on her step and the croissants and the reindeer dog, and at Solar, and at the ceiling, and said *shoes off* in the exact voice Solar had heard in her head every time she'd ever thought about bringing anyone home, and then went and got more plates." },
        { n: "Nana met Layla in the front yard. It was the most important meeting in the history of either dog. They circled each other three times in the snow, Nana enormous and white and silly-legged and completely beside himself, Layla small and dignified in her antlers, and then Nana lay down in the snow and rolled over and showed her his entire stomach, and Layla sniffed it once, thoughtfully, and sat down next to him like she'd decided to allow it." },
        { s: 'jake', f: 'happy', t: "She likes him. Oh my God. She *likes* him. Heeseung, put it in the minutes." },
        { s: 'heeseung', f: 'neutral', t: "*Dog date. Commenced. Three-fifteen p.m. Successful.*" },
        { n: "Sunghoon came and stood next to her on the step, watching the dogs, hands in his coat pockets, and said, in a voice so casual it had clearly been rehearsed in a mirror, *is Cherry coming, by any chance, not that Sunghoon is asking*." },
        { s: 'solar', t: "She's at her grandma's. Why?" },
        { s: 'sunghoon', f: 'flustered', t: "No reason. Sunghoon is simply making conversation. Soon." },
        { s: 'solar', t: "Soon *what*, Sunghoon." },
        { s: 'sunghoon', f: 'neutral', t: "Soon." },
        { n: "He went inside. Through the window she watched Jihoon hand Niki his cup of cocoa with a big friendly smile and Niki drink it suspiciously, and Jay and Jungwon sit on opposite ends of the sofa like bookends, and Sunoo telling her father about the temple with his eyes closed so his face couldn't tell, and Heeseung writing all of it down." },
        { bond: { council: 1 } }
      ] }
    ] }
  ] },

  // ───────────────────────────── 12/27, late: the seance (full moon) ─────────────────────────────
  { id: 'epi-h-seance', date: '12/27', slot: 'late', title: 'okaeri', place: "Hanlim · Jihoon's House", time: 'Late Night', scene: [
    { music: 'epi-h-seance' },
    { n: "Jihoon's house was big and dark and too warm and very, very quiet, the way it had been quiet for five years, a whole house of rooms nobody went into with the doors all left open anyway. They used the living room. They always used the living room. Jihoon had dragged every candle he owned into the middle of the floor, plus four that were clearly from a gift set and smelled like a cake shop, and lit them all, and turned off every light, and stood in the middle of it all with his arms out like a cult leader welcoming new members." },
    { s: 'jihoon', f: 'happy', t: "Welcome. Welcome to the Hate Club's First Annual Communion With The Dead. Shoes off. Snacks on the left. Spirits on the right." },
    { s: 'jaehyuk', f: 'neutral', t: "There are no spirits." },
    { s: 'jihoon', f: 'neutral', t: "Not with that attitude, Jaehyuk." },
    { n: "The board was Kazuha's. Kazuha was Asahi's. That was how Asahi had introduced her, in the doorway, flat, *she's my classmate, she believes in ghosts, she brought a board, no one cares*, and then stepped aside to let in a tall girl with a long scarf and a soft, polite smile who'd bowed to everyone in the room, one by one, including Nana, who wasn't there, whom she'd been told about." },
    { s: 'kazuha', t: "Thank you for having me. Asahi says you're all very haunted." },
    { s: 'asahi', f: 'neutral', t: "I said they were all *very weird*." },
    { s: 'kazuha', t: "He said haunted. I heard it in his heart." },
    { n: "Asahi looked at the ceiling for a long time. Junkyu sat as close to the snacks as possible without technically being in the snacks, a blanket over his head like a hood, already scared, only twenty minutes in." },
    { s: 'junkyu', f: 'surprised', t: "Is it a full moon? It's a full moon. Hyunsuk, it's a full moon, that's like the worst night for this." },
    { s: 'hyunsuk', f: 'neutral', t: "It's a cloud, man. It's just a really bright cloud." },
    { n: "It wasn't a cloud. It was a full moon, low and white over the roofs, coming in through the big front window and lying across the floor between the candles like it was something you'd have to step over. Solar looked at it once and then didn't look at it again." },
    { n: "Cherry sat down next to her. Not near her. Next to her, hip to hip, between Solar and the empty cushion on her other side, and when Jihoon came back from the kitchen with a bowl of chips and went to drop onto that cushion, Cherry put her boot on it." },
    { s: 'cherry', f: 'neutral', t: "Taken." },
    { s: 'jihoon', f: 'neutral', t: "By what." },
    { s: 'cherry', f: 'neutral', t: "My boot. It's tired. It's had a long week." },
    { n: "Jihoon looked at the boot. Looked at Cherry. Something passed between them, quick and hard, the look of two people who both knew exactly what a promise was and to whom it had been made. Then he sat down across the circle instead, between Hyunsuk and Jaehyuk, and smiled at Solar through the candles like it was his idea." },
    { s: 'kazuha', t: "Okay! Two fingers. Lightly, lightly. Like you're touching a butterfly. And nobody pushes. If you push, the spirit knows, and it's very rude." },
    { s: 'jaehyuk', f: 'neutral', t: "It's the ideomotor effect. Your hands move without you noticing. It's been studied. It's science." },
    { s: 'kazuha', t: "Science is a spirit too." },
    { s: 'jaehyuk', f: 'surprised', t: "That's not—" },
    { s: 'kazuha', t: "Who should we call?" },
    { n: "There was a pause. A small one, the length of one breath held by six people at once, and every single one of them looked anywhere but at Jihoon, and Solar felt the whole room do it, the old rule, the one everyone knew, going round the circle like a hand squeezed along a line." },
    { s: 'hyunsuk', f: 'neutral', t: "Nobody specific. Literally anyone else. A random guy." },
    { s: 'jihoon', f: 'happy', t: "Summon someone hot. A hot ghost. Victorian. With a cravat." },
    { s: 'kazuha', t: "Okay! Anyone who's here, then. Is there anyone here with us tonight?" },
    { n: "Eight sets of fingers on a little wooden heart. The candles ticked. Junkyu whimpered under his blanket. Jaehyuk had his eyes narrowed at the planchette like he was waiting to catch it in a lie." },
    { n: "It moved." },
    { n: "Slow, at first. A drag. Everybody accused Jihoon. Jihoon accused Asahi. Asahi said *no one cares* without taking his finger off. And the little heart slid across the board, letter by letter, and Kazuha read them out in a whisper, delighted, like she was reading a birthday card." },
    { s: 'kazuha', t: "O." },
    { s: 'kazuha', t: "K." },
    { s: 'kazuha', t: "A. E. R." },
    { s: 'kazuha', t: "I." },
    { n: "The planchette stopped. Kazuha clapped her hands over her mouth." },
    { s: 'kazuha', t: "*Okaeri!*" },
    { s: 'junkyu', f: 'surprised', t: "Is that a curse? Is that a curse word? Is that a demon's name?" },
    { s: 'asahi', f: 'neutral', t: "It's Japanese. *Okaeri.* It's... welcome home. It's what you say when somebody comes back. When they walk in the door and say *tadaima*, *I'm home*, you say *okaeri*. Welcome back." },
    { n: "He said it in his flattest voice, the one he used for everything, but he'd looked at Solar halfway through. Just for a second. Then he looked at the board." },
    { n: "Solar couldn't feel her fingers. She could feel the planchette under them, smooth and warm, and the floor under her, and Cherry's hip against hers, and she could feel her phone in her back pocket like it had suddenly gotten heavier, with one word in it from a week ago, sitting in the chat, never answered. *Tadaima*. And now, a week later, on a full moon, in a dead house, somebody had." },
    { n: "Cherry's knee pressed against hers. Hard. Once." },
    { s: 'kazuha', t: "It's still moving!" },
    { glitch: 'epi-h-g-planchette' },
    { cg: 'epi-h-seance' },
    { n: "Every candle in the room went green." },
    { n: "Not out. Green. For one second, every flame in that living room burned the colour of old pool water, of a hallway at midnight, of a light she'd lived under for a whole year, and the moon on the floor went green with it, and every face in the circle went green, and the planchette moved fast now, sure, like it knew the way." },
    { s: 'kazuha', t: "I." },
    { s: 'kazuha', t: "W. A. T. O." },
    { s: 'kazuha', t: "D. A. I." },
    { cg: null },
    { n: "Then the candles were yellow again, cake-shop yellow, flickering, normal, and the planchette sat on the last letter and didn't move, and nobody in the room said anything at all." },
    { n: "Eight people. Seven of them had been there. Seven of them had walked those streets, that station, that dorm with the hissing radiator and the dog's nails on the floor, and seven of them sat in a green-gone circle in Park Jihoon's dark living room and looked at a word on a board that none of them had said out loud since they came home." },
    { n: "Cherry was looking at Solar. Hyunsuk was looking at Jihoon. Junkyu had his blanket pulled all the way down over his face. Jaehyuk's finger had come off the planchette, and he was staring at his own hand like it had done something without asking him." },
    { s: 'jihoon', f: 'neutral', t: "What's an Iwatodai." },
    { n: "He said it lazily. Leaning back on his hands, legs out, eyebrows up, the candlelight making him look about twelve. His fingers were still on the planchette. They were pressing down so hard his nail beds had gone white." },
    { s: 'jihoon', f: 'happy', t: "Is that a ramen place. It sounds like a ramen place. I'd go." },
    { s: 'kazuha', t: "It's a place in Japan, I think? By the sea. I've never been." },
    { s: 'jihoon', f: 'happy', t: "Never heard of it. Weird. What a weird ghost." },
    { n: "Solar looked at him across the candles. He didn't look back. He looked at the board, and he kept smiling, and the smile kept holding, the way it had held on her bedroom carpet, the way it had held in the tunnel of lights, a door with somebody's whole weight against it." },
    { choose: [
      { t: "Kazuha did it.", stat: { charm: 1 }, then: [
        { n: "It came out of her bright and loud and certain, in her vice-president voice, the one that could get a cafeteria to do things, and the whole circle grabbed it like a rope thrown over the side of a boat." },
        { s: 'cherry', f: 'happy', t: "Oh, she *totally* did it." },
        { s: 'hyunsuk', f: 'happy', t: "She did. She pushed it. It's her board, man, she knows where all the letters are." },
        { s: 'junkyu', f: 'sad', t: "Kazuha, did you do it?? Please say you did it!!" }
      ] },
      { t: "(Take your hand off the board.)", stat: { courage: 1 }, then: [
        { n: "She took her fingers off. Slowly. One, then the other, the way you'd take your hand off a dog you weren't sure about. The planchette didn't move. Across the circle, Jihoon's knuckles were white." },
        { n: "Then Asahi, very quietly, very flatly, said *Kazuha did it*, and Hyunsuk said *yeah, Kazuha did it*, and Cherry said *obviously*, and like that it was decided, like a vote, like a story they'd all agreed on before they walked in." }
      ] }
    ] },
    { s: 'kazuha', t: "I didn't! I really didn't! But thank you so much!" },
    { n: "She was delighted. She was so delighted. She put both hands on her cheeks and beamed at the board like it had given her flowers, and asked if they could do it again, and asked if Iwatodai was a nice place, and asked Asahi whether he thought the ghost was lonely, and Asahi said *it's not lonely, it's got us now*, and then looked very annoyed with himself for saying it." },
    { s: 'jaehyuk', f: 'neutral', t: "I need a lighter. Some of these went out." },
    { n: "Some of them had. Jaehyuk reached for the side table by the sofa, the one with the little drawer, and pulled it open, rummaging, and stopped." },
    { n: "There was a baggie in it. Small. Folded over. Sitting on top of a takeout menu and three dead batteries like it lived there, like it had always lived there." },
    { n: "Jaehyuk didn't say anything. He didn't touch it. He just looked at it, and then looked across the circle at Jihoon, and his face didn't do anything at all, which on Jaehyuk was worse than anything a face could do." },
    { n: "Hyunsuk reached past him and shut the drawer with his knee. Not hard. Just closed it, the way you'd close a door on a room with somebody sleeping in it." },
    { s: 'jihoon', f: 'happy', t: "That's for decoration." },
    { s: 'hyunsuk', f: 'neutral', t: "Shut up, Hoon." },
    { s: 'jihoon', f: 'happy', t: "It's seasonal. It's a festive drawer." },
    { s: 'hyunsuk', f: 'serious', t: "*Hoon.*" },
    { n: "Jihoon shut up. He ate a chip instead. Very loudly. Cherry's hand had found Solar's on the carpet between them and was holding it so hard it hurt, and not, Solar understood, because of the ghost." },
    { n: "Nobody called anybody. Nobody ever called anybody. Kazuha asked the board if the ghost liked music, and the planchette didn't move again, not one letter, for the rest of the night." },

    // Home, by route.
    { ifEpiRoute: 'jihoon', then: [
      { place: "Hanlim · Jihoon's House · Porch", time: 'Late Night', soft: true },
      { n: "He walked them out. He stood in his doorway with the dark house behind him, the candles still guttering in there, the moon full and white over the porch and his mother's flowerpots, frozen solid, lined up by the step like they were waiting for somebody." },
      { n: "Cherry was already halfway down the path, holding Solar's sleeve. Solar stopped anyway." },
      { s: 'jihoon', f: 'neutral', t: "It was Kazuha." },
      { s: 'solar', t: "Yeah." },
      { n: "He didn't look at her. He was looking at the moon, his hand on the doorframe, his thumb going back and forth along the wood like he was trying to wear a groove in it." },
      { s: 'jihoon', f: 'sad', t: "...Go home, Sol." },
      { n: "Cherry pulled her sleeve. She went. When she looked back from the end of the street, his door was still open, and he was still in it, and the light from the candles was green for one second behind him, or she thought it was. Then he shut it." }
    ], else: [
      { ifEpiRoute: 'jungwon', then: [
        { place: 'Hanlim · Home · Her Room', time: 'Late Night', soft: true },
        { n: "Cherry walked her all the way to her door. Cherry waited on the step until the door was locked. Cherry texted *ur inside right* from the end of the street and *good* thirty seconds later, and Solar knew exactly who Cherry had promised, and didn't mind, much." },
        { phone: [
          { from: 'jungwon', t: "are you home safe? i'm still awake. my mother thinks i'm reading." },
          { from: 'solar', t: "home" },
          { from: 'jungwon', t: "welcome home." }
        ], contact: 'Won' },
        { n: "She looked at it for a long time, sitting on her bed in her coat, with the moon on the floor and the can in her pocket. Two words. Full sentence. A period at the end. He didn't know what had happened tonight. He couldn't have known." },
        { n: "She didn't ask him how he'd known what to say." }
      ], else: [
        { place: 'Hanlim · Home · Her Room', time: 'Late Night', soft: true },
        { n: "Cherry walked her all the way to her door, and waited on the step until it was locked, and Solar sat on her bed in her coat with the moon on the floor and her phone in her hand, and the council's chat was going, because the council's chat was always going." },
        { phone: [
          { from: 'niki', t: "rikiniki: why is the hate club summoning demons. eunchae is posting about it. there's a CLIP" },
          { from: 'sunoo', t: "sunooshine: SOL ARE YOU OKAY!!! halmeoni says never touch a spirit board!!! she says it with her whole chest!!!" },
          { from: 'heeseung', t: "heeheeseung: please tell me nobody said the word temple on camera" },
          { from: 'jake', t: "jakeys: boo-ddhism" },
          { from: 'jay', t: "jbird: bro" },
          { from: 'jungwon', t: "injangwon: sol, are you home?" }
        ], contact: 'RETREAT FACTS (do not leave)' },
        { n: "She typed *home*. She watched it, in case it changed into something else. It didn't. She sent it, and lay back on her bed, and the moon lay on the floor and didn't move, and neither did she, for a long time." }
      ] }
    ] }
  ] }

  );
})();
