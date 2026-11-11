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
     epi-h-christmas    12/25 after    Christmas at home: Jungwon meets her parents, Jihoon brings the cocoa, Cherry on the step
                                       on her way to her grandmother's (every route); then by route (consumes)
     epi-h-eve-night    12/24 late     Christmas Pass: her room at eleven, Mom at the door, then by the eve's pick (no consumes)
     epi-h-xmas-night   12/25 late     Christmas Pass: Christmas night in her room, the presents on the rug, by route (no consumes)
     epi-h-seance       12/27 late     the Hate Club seance at Jihoon's; OKAERI, IWATODAI; Kazuha did it
   Flags set: epi-h-retreat (epi-h-emergency, always); epi-route-jungwon / epi-route-jihoon / epi-route-council (epi-h-eve);
     epi-h-eve-stayed (epi-h-eve-night, Christmas pass; read by epi-h-christmas);
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
     Cherry and Jihoon drink two of them (hers, in her pocket, is still there and still shut).
   Depth pass (2026-10-31), Christmas Eve: Mom's fridge note under the tangerine magnet; last Christmas Eve's choice in Iwatodai
     (unnamed); Jungwon says 'girlfriend' and Maeumi sits on her boot; Jihoon's light ratings (the bank angel, an eight) and the
     radio; at Yeobo's, Halmeoni silences Heeseung with a dumpling and Jake hands her tinsel. No new flags. The brief's off-limits threads are untouched.
   Christmas pass (Nov 11 2026, Kat: "Christmas is not long enough... more romance, interaction between characters... More Jihoon
     and Jungwon moments. Also in Solar's room."): about 7.2k → 22.3k words over eve, eve-night, christmas, xmas-night and the
     antlers (all branches). No existing flag, id, gate, choice, date or outcome changed; the new lines add no bond or glitch.
     epi-h-eve: the hall at five (Mom, Dad, "eleven, I'll open your door"); the old chat's roll call; jungwon: the bench longer
       (vegetables, the onions, "a problem... the kind you stay up for"), the walk home and Jihoon's "ur light was off at nine"
       (ifRouteOpen jihoon: he'd been outside); jihoon: the cocoa stand pre-order for tomorrow ("since we were nine"), Jungwon's
       "so it's been asked" text, "He's alright", her pick on the radio; council: dumplings, Jungwon off the sugar jar on the
       kitchen step ("I wish I was there" / "Then I'll be the tree"), Jihoon's "did the lights by myself" text.
     epi-h-eve-night (new, 12/24 late, no consumes; branches on the eve's epi-route-* flag, since the lock comes at Sleep):
       jungwon: Mom at 11:02 (the wet boots; "Nana needed to go out", his lie), his 11:41 call from the bathtub (the physics
       people-late.js's flashcards remembers), item four of the notes, "nobody's ever told me a time", 12:00 and "It's 12:01"
       (searchers know); choice: stay on (sets epi-h-eve-stayed) / goodnight. jihoon: his car idles outside until her parents'
       headlights, Jungwon's 10:41 call ("I wouldn't either. That's not a complaint"), Mom: "Of course he was." council: Mom
       and the tinsel ("Was it nice?"), Heeseung's MANDATORY DEBRIEF group call (Niki's spoken LMAOOO; Jake and Layla "it's
       fate", which sets up the heap on the step), Jungwon stays on past midnight.
     epi-h-christmas: the morning (jungwon + epi-h-eve-stayed: the call still connected at 6:58); presents at ten (Mom's planner
       "so you can write down where you are", Dad's ear-flap hat with a Samoyed that is a sheep, her framed Nana photos, Nana's
       squeaky croissant); both group chats (RETREAT FACTS reminder; council route: Layla's ready); Jihoon photographs the
       lined-up shoes ("The Enemy Is Among Us", which people-crew-late.js's long way quotes); at lunch Jungwon asks her father
       about the reservoir (ifFlag epi-h-jw-reel: "what reel do you use", the forgiving one; story-days.js's bath remembers it),
       twenty-two minutes, Jihoon "I've been to the reservoir"; the dishes, every route (Jungwon washes, Jihoon dries; "You
       did it at the dorm" / "I've never been in a dorm in my life" (Jihoon's denial); "Check the container" / "Since
       kindergarten"); her room, "Door open" (the jacket on the door, the armband, "You can see it from the bed"); the water
       bottle with the times on it: jungwon, the kiss against the desk, Nana, "Open it *more*"; jihoon, Jihoon as the door on
       her bed, the wrong Big Dipper, "It is, actually"; council, a kiss at the corner of her mouth. Tails: jungwon, the blue
       container and the porch ("I'm a problem with a container"), the gate; jihoon, Jungwon's 4:59 text ("tell jihoon the
       cocoa was good. it was."), "the container's a test" (she saves it for his late text), her present (a pine air freshener,
       REAL PINE (fake) (but new)); council, the living room at four (Niki's monk, Sunoo in the strawberry apron, Sunghoon on
       the piano bench, Jihoon in the doorway), the container, a kiss on the cheek, they stay till dark.
     epi-h-xmas-night (new, 12/25 late, no consumes, ends by about 11:30 so Hyunsuk's 'the long way' at twenty to midnight still
       fits): jungwon: 10:41 from the bathtub, the container as evidence, "That's two this week" (the Sunoo's lie, no glitch),
       "Your mother put more on my plate twice", "I keep thinking about your desk", "I can't climb, Sol" (story-w3.js's window);
       choice: "I liked you in my room" / "One day I'm going to come to your window" (no flags). jihoon: snowballs at the window
       (the old signal), the back door, the fourth stair, his pockets on her desk ("I left it in the car"), the rug, the wrong
       Big Dipper, "What dorm" (his denial), her hand over the edge of the bed; choice: hold on / let him let go first (no
       flags); "Suk's driving round... I told him you'd be up". council: Heeseung's minutes, Cherry from her grandmother's
       ("if sunghoon texts me at midnight i'm blocking him", which people-late.js's boxing day pays off), Jungwon's 10:41
       ("Item nine. Contingency: Jake"), Jihoon's "Best Christmas Of My Life".
     New flag: epi-h-eve-stayed (epi-h-eve-night, jungwon pick, "Stay on"; read by epi-h-christmas's morning).
     Inventions for Kat to confirm: Dad's director's dinner; Mom's planner and Dad's sheep hat; her presents to them (one Nana
       photo, two frames); Nana's squeaky croissant; Jihoon pre-orders the four cups at the stand on Christmas Eve, "since we
       were nine"; the snowballs as their old signal; the glow-in-the-dark stars (he made the Big Dipper wrong at ten); the
       blue container's cracked lid ("I made the crack"); Dad's spinning reel was his father's (a Daiwa); the heron; Solar's
       presents for the boys (Jungwon: a litre water bottle with the hours on it; Jihoon: a pine air freshener). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/21, morning: home ─────────────────────────────
  { id: 'epi-h-home', date: '12/21', slot: 'early', consumes: true, title: 'home', place: 'Hanlim · Home · Her Room', time: 'Morning', scene: [
    { music: 'world-hoax-theme' },
    { n: "Something enormous and white was lying across her legs, and it was breathing, and it smelled like a dog that had been let out in the snow and then let back in without anybody drying his feet, and Solar lay there under the weight of it with her eyes shut and didn't move, because the last time she'd woken up somewhere it had been a dorm in Iwatodai with a radiator that hissed like it had opinions." },
    { n: "This radiator didn't hiss. This radiator ticked, twice, then gave up, the way it had ticked every winter morning since she was eleven." },
    { n: "She opened her eyes." },
    { n: "Nana lifted his head off her shins, looked at her with the full, wounded seriousness of a dog who had decided she'd been gone a year, and put it back down again, harder, so she couldn't leave. He was right about the year. Nobody had told him. He'd just counted." },
    { s: 'solar', f: 'happy', t: "Hi, baby. Hi. I know. I know, I'm sorry, I know." },
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
          { from: 'jihoon', t: "do not mention the dog" },
          { from: 'jihoon', t: "the dog is between Me And God" }
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
          { from: 'jihoon', t: "jihoney: let her rest. the light of her disgusting life has returned to her Disgusting Bed" },
          { from: 'junkyu', t: "junkyute: does she need ice cream and hugs in the morning!!! i can bring both!!!" },
          { from: 'jaehyuk', t: "jaehyukkie: it's 4am. everyone go to sleep." },
          { from: 'hyunsuk', t: "geniusuk: u go to sleep" }
        ], contact: "rip solar kim (she's fine probably)", group: true }
      ] }
    ] },

    // The chat's name (every variant).
    { n: "She scrolled up to the top of the chat because her thumb wanted to, and there it was again, the name, sitting over everything in bold like a headstone somebody had decorated with stickers." },
    { n: "*rip solar kim (she's fine probably)*" },
    { n: "Renamed by jihoney. The little grey timestamp under it said Monday, the eleventh, at 11:52 p.m. The night she'd gone." },
    { n: "She laughed. Again. It came out of her the same way it had last night in the gym, too loud, ugly, something knocked loose, and Nana lifted his head to check on her." },
    { phone: [
      { from: 'solar', t: "solarsystem: JIHOON. WHO RENAMED THE CHAT" },
      { from: 'jihoon', t: "jihoney: it has always been called that" },
      { from: 'solar', t: "solarsystem: IT SAYS U DID IT THE NIGHT I LEFT" },
      { from: 'jihoon', t: "jihoney: phones lie sol. look it up" },
      { from: 'cherry', t: "cherryblossoms: he did it at 11:52 and then called me crying at 11:53" },
      { from: 'jihoon', t: "jihoney: cherry has been Blocked From My Heart" }
    ], contact: "rip solar kim (she's fine probably)", group: true },

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
        { s: 'solar', f: 'flustered', t: "It was, like, a whole rule." },
        { s: 'mom', t: "Hm." },
        { n: "*Hm* was worse than yelling. *Hm* meant the case had been filed and would be reopened at a time of her mother's choosing." }
      ] },
      { t: "(Get up and hug her.)", stat: { kindness: 1 }, then: [
        { n: "She got out of bed, which took a while because of Nana, and crossed the room in her socks, and put her arms around her mother's middle before her mother could finish the next sentence." },
        { n: "Her mother went stiff. Then she didn't. Then one hand came up and rested, flat and careful, between Solar's shoulder blades, the way you'd rest your hand on a door to check if there was a fire behind it." },
        { s: 'mom', t: "...This doesn't get you out of it." },
        { s: 'solar', f: 'sad', t: "I know." },
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
    { s: 'solar', f: 'happy', t: "Thank you, my wife." },
    { s: 'cherry', f: 'neutral', t: "Don't thank me, I said marginally. Sunoo's grandma gave me a croissant for you and I ate it in the car. I'm being honest with you because I'm a good person." },
    { s: 'cherry', f: 'happy', t: "Anyway. Have you seen the forum." },
    { s: 'solar', f: 'neutral', t: "I've been awake for five hours, Cher." },
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
    { s: 'solar', f: 'serious', t: "Who's anon." },
    { s: 'cherry', f: 'neutral', t: "Everyone's anon, Sol, that's the point of anon. I'm like four of those." },
    { s: 'solar', f: 'neutral', t: "Which four." },
    { s: 'cherry', f: 'happy', t: "The polycule one. The Sunoo one. The fancam one, the first part, not the rule, I would never ban fancams." },
    { s: 'solar', f: 'serious', t: "And the fourth?" },
    { s: 'cherry', f: 'neutral', t: "I'll tell you when you're older." },
    { n: "Solar read the rehab one twice, and then scrolled past it fast, the way you'd walk past a dog you didn't trust, and Cherry saw her do it and didn't say anything, and then started talking very loudly about something else, which was how Cherry said things." },
    { s: 'cherry', f: 'happy', t: "But wait. It gets worse. There's a *show*." },
    { n: "A video. A first-year Solar half-recognized from the lunch line, small and fierce with a ring light so bright it bleached her forehead into the wall behind her, sitting in what was clearly her bedroom with a mic clipped to her collar. The channel name ran under her in glittery block letters. HANLIM UNFILTERED." },
    { s: 'eunchae', t: "Hi Hanlim, it's Eunchae, welcome back to Hanlim Unfiltered, the only news in this school that isn't the morning announcements, and the council is *still missing*. Day nine. Nine days, you guys." },
    { s: 'eunchae', t: "The school says retreat. I say: where. I say: what kind of retreat takes your phone. I say: why does Yang Jungwon, a man who has not missed a day since kindergarten, a man who came to school with *pneumonia*, suddenly need to retreat. From what. From us?" },
    { s: 'eunchae', t: "Like and subscribe, and if you have information, my DMs are open, and if you're the council, hi, I'm not scared of you, please don't do anything to my club funding." },
    { s: 'solar', f: 'surprised', t: "She has club funding?" },
    { s: 'cherry', f: 'happy', t: "She's a *club*, Sol. She's one person and a ring light and she's a club. She filed the paperwork. You approved it." },
    { s: 'solar', f: 'serious', t: "I did not." },
    { s: 'cherry', f: 'neutral', t: "Your signature's on it. Jungwon showed me. He was very upset about it." },
    { n: "That sounded true. That sounded exactly like a thing she'd have signed at four o'clock on a Thursday with a croissant in her other hand." },
    // Nov 11 2026 (Kat): searchers know
    { s: 'cherry', f: 'happy', t: "Tell the chat you're home. Officially, in writing, so it counts. Junkyu keeps asking if we're sure it worked. Jihoon made a playlist." },
    { n: "So she opened the chat, still grinning, and typed the most normal sentence in the world. *im home!!!!*" },
    { glitch: 'epi-h-g-autocorrect' },
    { n: "The phone thought about it. It made a tiny noise, a fizz, like static on a radio between stations, which it had never once made in two years of being her phone, and the words in the box rearranged themselves under her thumb, quick as a card trick, into something that wasn't English." },
    { n: "*ただいま*" },
    { n: "She knew what it said. That was the problem. She'd said it every evening for a year, kicking her shoes off in a dorm entryway, to whoever was in the lounge, Junpei with a controller, Fuuka with a laptop, a dog's nails clicking over the floor to meet her. *Tadaima*. I'm home. And somebody always said it back." },
    { n: "She deleted it. She typed *im home* again, slower, like the phone was a child she was explaining something to." },
    { n: "*ただいま*" },
    // Nov 11 2026 (Kat): searchers know
    { n: "Cherry had stopped chewing her straw. She'd heard that word too, a hundred times, called through a dorm door on the nights she'd walked Solar back from the station, and for one second her face knew exactly where it was from, and so did Solar's, and neither of them said so." },
    { s: 'cherry', f: 'surprised', t: "...Okay. Nope. Did your phone just go weeb on you." },
    { s: 'solar', f: 'flustered', t: "It's autocorrect. It's broken." },
    { s: 'cherry', f: 'happy', t: "Oh my God. Oh my *God*. We were *all* gone for a year and you're the one who came back *localized*." },
    { n: "Cherry was laughing so hard she had to put her drink down. She took a screenshot. She took another one. She sent both of them to the chat herself before Solar could stop her, and the chat lost its mind, Junkyu with nine exclamation points, Asahi saying *finally someone in this group is cultured*, Jihoon with *Who Is This Woman. tell her i said okaeri* and then, a second later, *i dont know what that means i read it on a cereal box*." },
    { n: "Solar laughed too. She did. She laughed until Cherry stopped, and then she looked at the little Japanese word sitting there in the chat like a footprint in the snow outside her door going one way, and turned her phone over on the bed, and didn't turn it back for a while." },
    { n: "Cherry's phone buzzed. She looked at it. Her whole face changed, quick, soft, and then she shoved it into her pocket like it had bitten her." },
    { s: 'solar', f: 'serious', t: "Who was that." },
    { s: 'cherry', f: 'neutral', t: "Nobody." },
    { s: 'solar', f: 'serious', t: "Cherry Kim." },
    { s: 'cherry', f: 'serious', t: "It's Sunghoon, okay? It's just Sunghoon. He just texts *soon*. That's it. That's the whole text. *Soon. Dash S.* Like a fortune cookie. Like a fortune cookie that's into me." },
    { s: 'solar', f: 'neutral', t: "Soon what?" },
    { s: 'cherry', f: 'serious', t: "I don't *know*, Sol! He's been saying soon for like a year!" },
    { s: 'solar', f: 'happy', t: "...Literally a year." },
    { n: "Cherry opened her mouth, and closed it, and then threw a pillow at Solar's face so hard Nana barked." },
    { s: 'cherry', f: 'happy', t: "Too soon. Too soon for that joke. I hate you. I love you. Drink your drink, it's melting." },
    { choose: [
      { t: "Does Hyunsuk know he's still texting you?", stat: { kindness: 1 }, then: [
        { n: "Cherry stopped smiling. Not all at once. It went out of her face the way light goes out of a room when someone closes a door down the hall." },
        { s: 'cherry', f: 'sad', t: "He knows. He's being... Suk about it. He'll be at yours on Saturday, by the way. Jaehyuk's making everyone study." },
        { s: 'cherry', f: 'neutral', t: "Don't make it weird." },
        { s: 'solar', f: 'happy', t: "I would never make it weird." },
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
    { s: 'solar', f: 'happy', t: "Now's okay. Hi. Hi, Won." },
    { n: "His voice was low, the kind of low you use in a house where somebody might be listening at the door, and under it she could hear nothing at all. No TV. No dog. A house so quiet the quiet had a sound." },
    { s: 'solar', f: 'sad', t: "Are you in trouble?" },
    { s: 'jungwon', f: 'neutral', t: "Yes." },
    { s: 'solar', f: 'neutral', t: "How much?" },
    { s: 'jungwon', f: 'neutral', t: "My mother said *just wait till you get home* on the eleventh. I got home on the twentieth. She'd waited." },
    { s: 'jungwon', f: 'neutral', t: "I'm allowed out for studying and errands. I'm allowed to use her car for both. I'm not allowed out after nine. She checks on me every forty minutes. She's very punctual. So I have until 11:20." },
    { s: 'solar', f: 'surprised', t: "Won. That's prison." },
    { s: 'jungwon', f: 'happy', t: "It's a very nice prison. There's an en-suite." },
    { n: "She laughed into her pillow so it wouldn't carry down the hall. Nana lifted his head at the noise, decided it wasn't food, and put it down again." },
    { s: 'solar', f: 'neutral', t: "Did you eat?" },
    { s: 'jungwon', f: 'happy', t: "Define eat." },
    { s: 'solar', f: 'happy', t: "*Yang Jungwon.*" },
    { s: 'jungwon', f: 'happy', t: "I had soup. My mother made soup. She put it outside my door and knocked once. It was very good soup. I think that's how she's yelling at me now." },
    { n: "That was the most he'd ever said about his mother in one go without stopping to correct himself, and she lay there with the phone warm against her ear and didn't touch it, because she'd learned a long time ago that you didn't touch the things he set down in front of you, you just let them sit there and be seen." },
    { s: 'jungwon', f: 'neutral', t: "How was your day." },
    { n: "So she told him. Nana and the clock, only she said the clock was broken. Her mother and the cardigan. The forum, the polycule, Eunchae and the ring light and the club funding, which made him go silent in a specific, offended way she could feel down the line. And then, without deciding to, because it was late and her voice had gone soft and lazy, the thing about the radio." },
    { s: 'solar', f: 'sad', t: "The dorm had this radio. In the lounge. It only got two stations and one of them was just a man reading the weather in a voice like he was so sad about it. And somebody always used to change it, every time I came down, like it was a whole personal mission, like the sad weather man had personally wronged him, and he'd go—" },
    { s: 'solar', f: 'surprised', t: "Hae—" },
    { n: "She stopped." },
    { n: "Not because she forgot. She didn't forget anything, that was the problem, she remembered all of it, all three of them, the way you remember every room of a house you grew up in. She stopped because the name was right there on her tongue, warm and stupid and sure of itself, and she was lying in her bed in Hanlim with her boyfriend on the phone, and she didn't know what it meant that it was the next word." },
    { glitch: { near: true } },
    { n: "Jungwon didn't say anything." },
    { n: "It wasn't the quiet of someone who hadn't heard. She'd been on the phone with him enough times to know his quiets. The busy one, with the scratch of a pencil in it. The tired one, with a dry swallow in it. This was a third one. Still. Careful. The quiet of somebody standing very carefully in a room with something he recognized, not moving, so it wouldn't startle." },
    { n: "Somewhere in his house, a door opened and closed. 11:00, she thought. Not his. Somebody checking early." },
    { s: 'jungwon', f: 'neutral', t: "It's alright." },
    { n: "That was all. Not *who*. Not *what were you going to say*. Not even her name. Just that, low and even, like he was setting a glass down on a table very gently, so it wouldn't ring." },
    { n: "And she understood, lying there, with the kind of certainty that came up from her stomach before her head got a vote, that he knew. Not guessed. Knew. Whatever she'd been about to say, whoever she'd been about to say it about, he'd known before she got to the second syllable, and he'd known for a while, and he had decided, all on his own, in his quiet, punctual, en-suite prison, that she never had to say it to him if she didn't want to." },
    // Nov 11 2026 (Kat): searchers know
    { n: "She didn't have to ask how. He'd been there too, that year, in and out of that lounge with his textbooks, and he'd seen whose hand went to the dial every morning. What she didn't ask was what it cost him to know it. That was the deal, too, apparently. Everyone had deals." },
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
    { n: "She held the phone against her chest. A block over, one street and a whole other life away, a light was going off somewhere she couldn't see. She liked to think it was his. It probably was." }
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
    { s: 'solar', f: 'surprised', t: "Why would a leadership retreat be at a *temple*?" },
    { s: 'jungwon', f: 'neutral', t: "Mindfulness." },
    { s: 'solar', f: 'happy', t: "Mindfulness." },
    { s: 'jungwon', f: 'neutral', t: "Leadership through mindfulness. It's a real thing. Somebody wrote a book about it. I'm sure somebody did." },
    { n: "Heeseung wrote it down. *TEMPLE STAY. GANGWON-DO. PHONES AT GATE (TEMPLE RULES). LEADERSHIP THROUGH MINDFULNESS (book?).* He underlined *book?* twice." },
    { s: 'heeseung', f: 'neutral', t: "And I talked to the advisor this morning. He's agreed to remember approving it." },
    { s: 'solar', f: 'surprised', t: "He's agreed to *remember*?" },
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
    { s: 'halmeoni', f: 'neutral', t: "What bows?" },
    { n: "Sunoo's grandmother was standing at the end of the booth. Nobody had heard her come. Nobody ever heard her come; she moved through her own cafe like weather. She had a tray of croissants and a look on her face of a woman who had raised one generation of liars already and had no intention of being impressed by the second." },
    { n: "Sunoo went white. Then pink. Then a third colour Solar had never seen on a human face." },
    { s: 'sunoo', f: 'flustered', t: "Halmeoni! Nothing! Bows! At the temple! We went to a temple! For mindfulness! I was mindful! Look how mindful I am!" },
    { s: 'halmeoni', f: 'serious', t: "You. At a temple." },
    { s: 'sunoo', f: 'flustered', t: "Yes!" },
    { s: 'halmeoni', f: 'neutral', t: "What did they feed you." },
    { n: "A long silence. The whole table watched Sunoo's face try to remember what temples ate, and fail, and reach for the nearest food it knew, which was on the tray in his grandmother's hands." },
    { s: 'sunoo', f: 'sad', t: "...Croissants?" },
    { n: "His grandmother looked at him for a long, long moment. Then she set the tray down in the middle of the table, patted his head twice, hard, and walked back to the counter without a word." },
    { s: 'niki', f: 'happy', t: "LMAOOO" },
    { n: "He said it. Out loud, with his actual mouth, every letter of it, at a volume meant for the back of the café, and the couple by the window turned around to see who had typed something." },
    { s: 'heeseung', f: 'neutral', t: "Did you just say *lmao.* Out loud. In a restaurant. In front of his grandmother." },
    { s: 'niki', f: 'happy', t: "It's how I laugh, hyung. It's my laugh. You can't take my laugh." },
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
    { s: 'solar', f: 'happy', t: "Two and a half. And one of them's Christmas." },
    { n: "Solar's stomach did a slow, cold roll. Calculus. Chapter six. A page she'd last looked at a full year ago, in a different school, on a different continent, with a different boy explaining limits to her and her not listening to a word." },
    { n: "Beside her, Jungwon had gone very, very still." },
    { n: "Not his tired still. His other one. The one he went into before a competition, when his eyes stopped seeing the room and started seeing a ranking, a column of names with his at the top and nowhere else, because nowhere else wasn't somewhere his parents had ever let him imagine. She watched his thumb press against the edge of his watch, once, like he was setting it." },
    { s: 'solar', f: 'serious', t: "Won." },
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
        { s: 'jungwon', f: 'happy', t: "You liked it." },
        { s: 'solar', f: 'flustered', t: "It's loud." },
        { s: 'jungwon', f: 'happy', t: "You liked it." },
        { n: "And that was all he said about it." }
      ] }
    ] },
    { n: "He pulled up outside her house at 8:52 by the clock on the dash, which was wrong, which was set to his mother's time, which was eight minutes fast so he'd never be late, and he looked at it like it was a bomb with a timer." },
    { s: 'jungwon', f: 'happy', t: "Go. Before I get grounded more." },
    { s: 'solar', f: 'happy', t: "Can you get grounded more?" },
    { s: 'jungwon', f: 'happy', t: "I'm sure she'll find a way. She's very creative." },
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
    ], contact: 'RETREAT FACTS (do not leave)', group: true },
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
    { s: 'solar', f: 'serious', t: "I've been home two days." },
    { s: 'jihoon', f: 'neutral', t: "Exactly. Two days. Neglect." },
    { n: "Junkyu hadn't said anything yet. He was standing just inside the door with the snack bag in both arms, looking at Solar, and his eyes were already wet, and his chin was doing the thing a chin does right before it goes." },
    { s: 'junkyu', f: 'sad', t: "Hi Sol." },
    { s: 'solar', f: 'sad', t: "Kyu. Don't." },
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
    { s: 'solar', f: 'flustered', t: "We did four. We did four in October." },
    { s: 'jaehyuk', f: 'serious', t: "*We* did four in October. You copied my four in October. It's different." },
    { n: "There was no arguing with that. It was the single most accurate thing anyone had said to her in two days." },
    { s: 'junkyu', f: 'happy', t: "It's so nice we're all back though!!! Like when we were all in—" },
    { s: 'jihoon', f: 'neutral', t: "In what." },
    { n: "He was still lying on the carpet with Nana on his chest. He hadn't moved. He'd just said it, flat, to the ceiling, no question mark anywhere in it." },
    { s: 'junkyu', f: 'surprised', t: "In, um. In. You know. With the—" },
    { s: 'jihoon', f: 'neutral', t: "What retreat. I was home. I'm always home." },
    { n: "The room went quiet the way a room goes quiet when somebody drops a glass and nobody wants to be the first to look down. Hyunsuk looked at the carpet. Cherry looked at Jihoon. Asahi looked at his phone so hard it might as well have been a book." },
    { s: 'junkyu', f: 'sad', t: "...You were there, though. You were there for, like, all of it. You carried—" },
    { s: 'jihoon', f: 'happy', t: "Kyu. Buddy. My guy. I have never left this town in my life. I get carsick at the mall." },
    { n: "He was smiling. It was a very good smile. It was the smile from the cafeteria, the one that had been doing so much heavy lifting lately that you could almost hear it strain, and Solar sat on the edge of the bed with her colour-coded study plan in her lap and watched him lie on her floor and lie to her face about a year she'd watched him live." },
    { n: "Hyunsuk was watching him too. Not the smile. His sleeve, where he kept tugging it down over his wrist, and the pocket of his jacket, which he'd kept on, indoors, in a heated room, and had kept a hand near the whole time like it might wander off. Hyunsuk had watched that pocket before. Solar knew exactly when." },
    { choose: [
      { t: "Sure, Jihoon. You were home.", stat: { kindness: 1 }, then: [
        { n: "He turned his head on the carpet and looked at her for the first time since he'd walked in. Really looked, for half a second, and something in his face went loose, almost grateful, and then he smirked and it was gone." },
        { s: 'jihoon', f: 'happy', t: "Thank you. Finally. A woman of reason. Unlike some ungrateful rugs." },
        { s: 'solar', f: 'happy', t: "I'm the ungrateful rug." },
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
        { s: 'solar', f: 'happy', t: "I'm serious, Jae, I opened the book this morning and my brain left my body. It's on the roof. It's not coming down." },
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
    { s: 'solar', f: 'serious', t: "Yeah." },
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
    { s: 'solar', f: 'serious', t: "I'm not pressing anything else." },
    // Nov 11 2026 (Kat): searchers know
    { n: "She said it too fast. Nobody said anything about it. Everybody was laughing. Cherry was sending the video to every chat she'd ever been in, and the snow was hanging in the air, and Hyunsuk had his hand on the side of the machine, frowning at it the way you'd frown at a dog that had growled at nobody." },
    { n: "She put her free hand in her coat pocket." },
    { n: "It was there. Of course it was there. Cold and smooth and shut, the one he'd given her on the last platform, the one she was never going to open. Still there. Still the only one. The three in her arms weren't it, and she knew that the way you know your own handwriting, and she stood under the buzzing lights holding three cans that didn't exist in this town, and her stomach went somewhere very far down and stayed there." },
    { n: "It wasn't funny. She knew that the way the dog knew about the year." },
    // Nov 11 2026 (Kat): searchers know
    { n: "Everyone else was treating it like the funniest thing that had ever happened, which wasn't the same thing, and every one of them had seen a machine do something it shouldn't in a city by the sea, and every one of them kept laughing anyway, louder, because the other choice was standing under those lights and saying so." },
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
        { s: 'solar', f: 'serious', t: "They're not mine." },
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
    // Christmas pass (Nov 11 2026, Kat: "Christmas is not long enough"): the hall at five, the old chat. No flags.
    { n: "Not straight away. First there had been the hall at five o'clock, her mother in her good camel coat doing the buttons up wrong and then right again without once looking down at them, because she was looking at Solar, and her father in the open front door with the car keys, letting all the heat out, the way he did every single time, like it was a personal tradition." },
    { s: 'mom', f: 'neutral', t: "There's a whole table of them. Your father's director's wife asked after you. I told her you were home studying. I'd like that to be true by the time I get back." },
    { s: 'solar', f: 'happy', t: "It'll be true." },
    { s: 'mom', f: 'serious', t: "Mm." },
    { n: "*Mm* was the worst thing her mother could say. *Mm* was a whole paragraph with the words taken out. She tucked a piece of Solar's hair behind her ear with one gloved finger, slowly, the way she used to check for a temperature, and left her hand there a second longer than a piece of hair needed." },
    { s: 'dad', f: 'neutral', t: "Soyeon. We'll be late." },
    { s: 'mom', f: 'neutral', t: "We're always late, Jaeseok. They expect it. It's the only thing about us they like." },
    { s: 'dad', f: 'happy', t: "She'll be fine. She's got the dog." },
    { n: "Nana, sitting in the middle of the hall like a large white piece of furniture somebody had forgotten to move, sneezed, which her father took as agreement and her mother took as nothing at all." },
    { s: 'mom', f: 'serious', t: "Eleven. I'm going to open your door at eleven, Solar, and you're going to be behind it." },
    { s: 'solar', f: 'flustered', t: "Where else would I be?" },
    { n: "Her mother looked at her for one more second, the long kind, like a page she was going to come back and finish reading later. Then she went out into the snow after her father, and the door shut, and the car backed down the drive with its headlights sweeping across the hall ceiling, and the house went very, very quiet." },
    { n: "So it was her and Nana and the house, and her phone, face up on the bed, going off." },
    { n: "Her mother had left a note on the fridge under the magnet shaped like a tangerine. *Japchae in the blue container. Eat a vegetable. We'll be back by eleven. Do NOT go anywhere.* The NOT was underlined twice and then, as an afterthought, a third time in a different pen, which meant her father had been standing there when she wrote it and had said something, and her mother had gone back over the line to make a point to him as much as to her." },
    { n: "She ate the japchae standing up at the counter out of the blue container. It was cold and very good. Nana sat at her feet with his chin on her slipper and watched every bite go past him with the patience of a saint who had been personally wronged by God, and she gave him a mushroom, and he spat it out, and looked at her like that had been her fault." },
    { n: "Last Christmas Eve she'd been somewhere else entirely, in a city with a monorail, with a whole dorm's worth of people who'd turned out to matter, and she'd been asked to choose then too, where to be and who with. She'd thought that was the hard part. Picking. It turned out the hard part was afterwards, when the thing you'd picked became the only thing that had happened, and all the other evenings went quietly on without you somewhere you'd never get to see." },
    { n: "The house ticked. The tree in the living room blinked on its timer, red, green, red, the same cheap strand her father had been threatening to replace since she was in middle school. She went back upstairs, and the phone was still going." },
    { phone: [
      { from: 'junkyu', t: "junkyute: what is everyone doing for christmas eve!!!! roll call!!!!" },
      { from: 'asahi', t: "asanoonecares: nothing. no one cares" },
      { from: 'hyunsuk', t: "geniusuk: my mom is making me go to church. i have to wear the sweater" },
      { from: 'junkyu', t: "junkyute: THE REINDEER ONE???" },
      { from: 'hyunsuk', t: "geniusuk: dont" },
      { from: 'jaehyuk', t: "jaehyukkie: Studying. Make-ups are in two weeks. I'd like that on the record for later, when some of you ask me for my notes." },
      { from: 'cherry', t: "cherryblossoms: getting my nails done like a free woman. grandma's tomorrow. pray for me" },
      { from: 'junkyu', t: "junkyute: solar??? hoon???" },
      { from: 'solar', t: "solarsystem: home. eating japchae out of the container like a raccoon" },
      { from: 'junkyu', t: "junkyute: :D a raccoon at home!!! merry christmas eve raccoon!!!" }
    ], contact: "rip solar kim (she's fine probably)", group: true },
    { n: "Under the last message the little grey dots came up beside Jihoon's name. *jihoney is typing.* They stayed there a long time, long enough for her to sit down on the bed and watch them, and then they went away, and nothing came, and she knew without having to think about it that whatever he'd been typing, he was about to send it to her instead, on her own, where the others couldn't see." },
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
        { from: 'jihoon', t: "get in the car" },
        { from: 'jihoon', t: "im outside" },
        { from: 'jihoon', t: "i have been outside for ten minutes. ur neighbor thinks im a cop" },
        { from: 'jihoon', t: "the lights at the park are on. they are Tacky. we are going to judge them" }
      ], contact: 'jihoney' }
    ], else: [
      { phone: [
        { from: 'jihoon', t: "merry xmas eve skank" },
        { from: 'jihoon', t: "tell my son i said merry xmas" }
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
    ], contact: 'RETREAT FACTS (do not leave)', group: true },
    { n: "Three places she could be. She sat on the edge of the bed with her coat already half on, because some part of her had known since four o'clock she was going somewhere, and Nana watched her from the doorway with the resigned face of a dog who knew what a coat meant." },
    { n: "The can was in the pocket. She felt it against her hip when she stood, cold, the way it always was, and left it there." },
    { choose: [

      // ── Jungwon ──
      { t: "(Go to the end of Jungwon's street.)", when: { ifRouteOpen: 'jungwon' }, flag: 'epi-route-jungwon', then: [
        { place: "Hanlim · Jungwon's Street", time: 'Evening' },
        { music: 'epi-h-romance' },
        { n: "His street was the kind of street where the houses had gates and the gates had little lights on them and the little lights were all the same warm white, like the neighbourhood had held a meeting about it. The snow on the pavement was untouched, except for one set of very small paw prints and one set of slippers, coming toward her from the house at the end." },
        { n: "He was in slippers. In the snow. With his good coat over his pyjamas and Maeumi on a leash, and Maeumi was walking with the slow, offended dignity of a very small dog who had been taken out at nine o'clock at night for absolutely no reason." },
        { s: 'jungwon', f: 'happy', t: "Hi." },
        { s: 'solar', f: 'surprised', t: "You're in *slippers*." },
        { s: 'jungwon', f: 'flustered', t: "Shoes would have been suspicious." },
        { s: 'solar', f: 'neutral', t: "What did you tell them?" },
        { s: 'jungwon', f: 'neutral', t: "That Maeumi needed to go out." },
        { n: "He said it like a confession, low, looking down at the dog, and the dog looked back up at him with a face that clearly said *I did not*." },
        { s: 'jungwon', f: 'serious', t: "I've never lied to them before. Not like that. I've said what they want to hear. That's different. That's a kind of truth. This wasn't." },
        { s: 'jungwon', f: 'serious', t: "It was very easy. That's the part I don't like." },
        { n: "She didn't know what to say to that, so she took his hand, the one without the leash, and it was so cold it felt like holding a key, and she put it in her own coat pocket, the other one, the one without the can, and kept her hand over it in there." },
        { s: 'jungwon', f: 'neutral', t: "I have ten minutes. I timed the walk. If I'm gone longer than ten minutes it stops being a dog." },
        { s: 'solar', f: 'happy', t: "And if it's eleven?" },
        { s: 'jungwon', f: 'serious', t: "Then it's a boy standing in the snow with his girlfriend, and my mother comes outside in her good coat, and we all have a very long conversation about my future." },
        { n: "He said *girlfriend* like it was a fact on a test, flat, correct, already checked twice, and then his ears went red in the cold anyway, which they couldn't really do, she'd have thought, at minus six. She looked at the gates so he wouldn't see her see it." },
        { ifFlag: 'epi-h-radio-hers', then: [
          { s: 'jungwon', f: 'happy', t: "I found your song, by the way. The one from the car. I listened to it with headphones. Four times." },
          { s: 'solar', f: 'happy', t: "And?" },
          { s: 'jungwon', f: 'happy', t: "It's very loud." },
          { s: 'jungwon', f: 'happy', t: "I'm on five." }
        ] },
        { cg: 'epi-h-eve-jungwon' },
        { n: "They walked to the end of the street and back. That was all. Maeumi stopped at every single gate to inspect the little warm white lights, and they let him, and the snow came down slow between the streetlamps, and Jungwon kept looking at his watch with his free hand, and then stopped looking at it, and then looked at it again like he'd caught himself doing something." },
        { glitch: { near: true } },
        { n: "He didn't say anything about the year. He didn't say anything about the radio, or the half a name on the phone two nights ago, or the can she kept touching through her coat like a pulse. He just walked next to her in his slippers, getting snow in them, not complaining, and every so often his thumb moved against her knuckles inside her pocket, and that was the whole conversation, and it was enough of one." },
        { n: "Halfway back up there was a bench nobody ever sat on, under a streetlight with a cracked cover, and they stopped at it without deciding to and stood in front of it, not sitting. Maeumi sat on her boot. Jungwon looked at the dog on her boot for a long time with a complicated expression." },
        { s: 'jungwon', f: 'neutral', t: "He doesn't do that. He doesn't sit on people. He barely sits on me." },
        { s: 'solar', f: 'happy', t: "He knows a good thing." },
        { s: 'jungwon', f: 'flustered', t: "He's a dog, Sol. He doesn't know anything. He knows dinner." },
        { n: "But he crouched down in his slippers in the snow and fixed the little dog's collar where it had twisted, and stayed down there a second longer than a collar needed, with one hand on Maeumi and the other, she noticed, on the toe of her boot." },
        // Christmas pass (Nov 11 2026): the bench, a little longer.
        { s: 'jungwon', f: 'neutral', t: "Did you eat?" },
        { s: 'solar', f: 'happy', t: "Japchae. Out of the container. Standing up." },
        { s: 'jungwon', f: 'neutral', t: "Did you eat a vegetable?" },
        { s: 'solar', f: 'happy', t: "Japchae *has* vegetables, Won. That's the whole point of japchae." },
        { s: 'jungwon', f: 'neutral', t: "The spinach counts. The mushrooms count if you didn't give them to the dog." },
        { n: "She opened her mouth. She closed it. He looked up at her from down there by her boot with his eyebrows very slightly raised, the face he made when she'd shown her working and got it wrong in the second line." },
        { s: 'solar', f: 'surprised', t: "How do you *know* that?" },
        { s: 'jungwon', f: 'neutral', t: "You give Nana the parts you don't want. You did it with the onions at Yeobo's in November. He doesn't even like onions. He takes them to be polite." },
        { n: "He stood up. He brushed the snow off his pyjama knees with great dignity, as if there was any dignity left anywhere on this street, and then he was standing very close, closer than he usually let himself stand anywhere a window could see, close enough that she could see the snow caught in his hair, a whole small constellation of it, melting where it touched him." },
        { n: "She reached up and brushed it off. She didn't think about it first. He let her. He stood completely still and let her do it, the way Maeumi let him fix the collar, and when she'd finished he was still looking at her, not at the gates, not at his watch, at her, with his reading face on, the one that went over every line twice." },
        { s: 'solar', f: 'flustered', t: "What. You're doing the thing." },
        { s: 'jungwon', f: 'neutral', t: "What thing." },
        { s: 'solar', f: 'flustered', t: "Looking at me like I'm a problem set." },
        { s: 'jungwon', f: 'neutral', t: "You're not a problem set." },
        { s: 'solar', f: 'happy', t: "Then what am I?" },
        { n: "He thought about it. He actually thought about it, standing in the snow in his slippers on Christmas Eve, the way he'd think about question nine, and his ears went red again, both of them, and she watched it happen with enormous satisfaction." },
        { s: 'jungwon', f: 'flustered', t: "A problem." },
        { s: 'solar', f: 'surprised', t: "*Won.*" },
        { s: 'jungwon', f: 'happy', t: "The good kind. The kind you stay up for." },
        { s: 'jungwon', f: 'neutral', t: "Nine minutes." },
        { s: 'solar', f: 'flustered', t: "Okay." },
        { s: 'jungwon', f: 'neutral', t: "I'm going to do something tomorrow. You're not going to like it. I'm going to do it anyway." },
        { s: 'solar', f: 'serious', t: "What?" },
        { s: 'jungwon', f: 'neutral', t: "Something with your parents." },
        { s: 'solar', f: 'flustered', t: "*Won.*" },
        { n: "He kissed her. Quick, cold, a little crooked, in the middle of his own street, with his own front door forty metres away and the light on in the window, which was either very brave or very stupid, and he didn't seem to know which either, because when he pulled back his face was doing the thing it did before a competition. Still. Certain. Terrified." },
        { s: 'jungwon', f: 'flustered', t: "Merry Christmas. Go home. It's cold." },
        { cg: null },
        { n: "He went back up the street with the dog, not hurrying, in his slippers, at exactly the speed of a boy walking a dog who didn't need walking. At the gate he turned around. She was still standing there. He lifted Maeumi's leash a little, like a wave. She lifted her hand." },
        { n: "The door opened. The door closed. Ten minutes, on the dot." },
        { n: "She walked home with her hand still in her pocket where his had been, holding the warm he'd left there like you'd hold a seat for somebody, and halfway down the block her phone went in the other pocket, against the can, twice." },
        { ifRouteOpen: 'jihoon', then: [
          { phone: [
            { from: 'jihoon', t: "u went out the back" },
            { from: 'jihoon', t: "i saw ur light go off at nine. i know what that means. i have known u since we were three" }
          ], contact: 'jihoney' }
        ], else: [
          { phone: [
            { from: 'jihoon', t: "ur light was off at nine" },
            { from: 'jihoon', t: "drove past. for the lights. Not For You" }
          ], contact: 'jihoney' }
        ] },
        { n: "She stopped under a streetlamp. The snow came down through its cone of light in slow, fat pieces and landed on the screen, and she wiped it off with her thumb, and typed, and deleted it, and typed again." },
        { phone: [
          { from: 'solar', t: "was walking nana" },
          { from: 'jihoon', t: "nana was in ur window" },
          { from: 'jihoon', t: "he looked Abandoned" },
          { from: 'jihoon', t: "whatever. its fine. the bank angel is still an 8. went by myself. the snowman didnt bow this year he just kind of. sagged" },
          { from: 'jihoon', t: "merry xmas eve skank. tell my son" }
        ], contact: 'jihoney' },
        { n: "She read it twice. She knew what he was doing. He was letting her off, the way you let a fish off a hook, fast, before either of you can look at it properly, and he was doing it in lowercase so it wouldn't count. She typed *merry christmas eve ungrateful rug* and sent it before she could do anything worse, and then she stood there a while longer under the lamp, in the snow, with one hand still warm and the other one going cold." },
        { bond: { jungwon: 1 } }
      ] },

      // ── Jihoon ──
      { t: "(Get in Jihoon's car.)", when: { ifRouteOpen: 'jihoon' }, flag: 'epi-route-jihoon', then: [
        { place: 'Hanlim · Christmas Lights', time: 'Evening' },
        { music: 'epi-h-jihoon' },
        { n: "His car was warm in the specific, overheated way of a car whose owner liked it like a sauna, and it smelled like cologne and cold fries and the pine tree air freshener that had stopped smelling like pine sometime in September, and he didn't look at her when she got in. He just pulled away from the curb before her door was all the way shut." },
        { s: 'jihoon', f: 'neutral', t: "You're getting snow on my upholstery." },
        { s: 'solar', f: 'happy', t: "Your upholstery is fries." },
        { s: 'jihoon', f: 'neutral', t: "Vintage fries. Collector's fries. Don't disrespect the fries." },
        { n: "The lights at the park were exactly as tacky as advertised. The town did it every year, a whole loop road of them, a glowing reindeer with one leg out, a tunnel of blue bulbs, a giant inflatable snowman with a slow leak that made it look like it was bowing to every car that passed. Jihoon drove through the whole thing at four kilometres an hour with the windows cracked and the heat on full and gave every single display a rating out of ten in a nasal, judgy voice like he was hosting a show." },
        { s: 'jihoon', f: 'happy', t: "Reindeer. Three. He has a limp. I respect him, but I can't reward it." },
        { s: 'jihoon', f: 'happy', t: "Snowman. Negative four. Get up. Have some dignity, snowman." },
        { s: 'solar', f: 'happy', t: "He's *bowing*. He's being *polite*." },
        { s: 'jihoon', f: 'neutral', t: "He's deflating, Sol. It's a metaphor. Look it up." },
        { n: "She laughed so hard she hit the window with her forehead. He looked pleased with himself in a way he didn't hide fast enough." },
        { s: 'jihoon', f: 'happy', t: "Angel on the bank building. Eight. Tasteful. Restrained. She has a wingspan I respect." },
        { s: 'solar', f: 'happy', t: "You gave her an eight last year too." },
        { s: 'jihoon', f: 'neutral', t: "Consistency is the mark of a great critic. Unlike you. You gave the bowing snowman a ten in ninth grade because you felt sorry for him." },
        { s: 'solar', f: 'sad', t: "He looked lonely." },
        { s: 'jihoon', f: 'neutral', t: "He's inflatable, Sol. He's lonely by design." },
        // Christmas pass (Nov 11 2026): the cocoa stand, the night before the four cups.
        { n: "Halfway round the loop he pulled over without signalling, which was how he did everything, beside the little cocoa stand at the park gate, a wooden hut with a striped awning sagging under the snow and one bare bulb and a man inside it in a hat with ear flaps, who looked up when the window came down and didn't even ask." },
        { s: 'jihoon', f: 'happy', t: "Ahjussi. Merry Christmas Eve. Same as always. Tomorrow, quarter to one." },
        { n: "The man nodded and wrote something on the back of a paper cup with a pencil stub, and Jihoon passed him a folded note through the window, and that was the whole transaction. He was rolling the window back up before Solar understood what she'd seen." },
        { s: 'solar', f: 'surprised', t: "You *pre-order* them?" },
        { s: 'jihoon', f: 'neutral', t: "He opens at one on Christmas. I get there at quarter to. He makes them early for me. Four. Since we were nine." },
        { s: 'solar', f: 'sad', t: "Since we were *nine*? I thought your—" },
        { n: "She stopped. She knew where that sentence went, past his front door, to a kitchen with a woman in it holding a paper cup out to a nine-year-old so he could carry it to the Kims' by himself and feel big, and the rule was older than the cocoa. She'd nearly walked straight into it with the reindeer watching." },
        { s: 'jihoon', f: 'happy', t: "You thought what? That cocoa just *appears*? That I'm magic? I am magic. But I also have a guy." },
        { n: "He said it fast and bright, the way he said everything he needed her to step over, and she stepped over it, and he let out a breath through his nose that she wasn't supposed to hear, and turned the heater up even higher, which shouldn't have been possible." },
        { n: "The radio was on low, some station doing carols with too much saxophone, and the heater was blowing so hard the air smelled like hot dust, and every so often his hand came off the gearstick and hovered near the dial like he was going to change it and then didn't. She knew why. Last time she'd been in this car he'd let her pick, and she'd put on a song he hated, and he'd sung every word of it at the top of his lungs to prove he hated it." },
        { cg: 'epi-h-eve-jihoon' },
        { n: "At the far end of the loop there was a tunnel of white lights, the long one, the one they'd walked through every year since they were small, her holding his sleeve because she was scared of the dark bits between the bulbs, him pretending not to be. He slowed down even more. He didn't say anything about it. Neither did she." },
        { s: 'solar', f: 'happy', t: "Remember the year it short-circuited and we were stuck in the dark in the middle and you—" },
        { s: 'jihoon', f: 'neutral', t: "No." },
        { s: 'solar', f: 'happy', t: "You screamed. You screamed like a—" },
        { s: 'jihoon', f: 'neutral', t: "I have no memory of anything. Ever. I'm a clean slate. Ask anyone." },
        { n: "He meant this year, too. She knew he did. The whole of it, the dorm and the station and every night of it he'd been right there next to her. He was holding a door shut on all of it right now, in the car, with the heat on full, and the white light went over his face in bars, bright, dark, bright, and in the bright bits she could see his jaw working." },
        { n: "She opened the glovebox for napkins. Her nose was running from the cold. There were no napkins. There was a pill bottle with the label scraped off and something rattling in it, and he reached across her without looking, and closed the glovebox with one finger." },
        { s: 'jihoon', f: 'neutral', t: "Napkins are in the door." },
        { n: "They were. She took one. Neither of them said anything for the rest of the tunnel." },
        { n: "Her hand was on her knee. She could feel the shape of the glovebox through the dashboard like a pulse, the way she could feel the can in her own coat pocket, two things nobody in this car was going to open tonight. She thought about saying his name. The full one. She'd used it on him a hundred times and it had worked a hundred times, and she didn't know, tonight, what it would make him do, and she wasn't sure she wanted to find out with the reindeer watching." },
        { cg: null },
        { n: "When they came out the other end, he pulled into the empty lot by the skating pond and put the car in park and left the engine running, and for a while they just sat there with the heater roaring and the reindeer limping in the rear-view mirror." },
        { s: 'jihoon', f: 'sad', t: "You looked different. When you came through that door. In the gym. For a second you looked like—" },
        { n: "He stopped. His hand had come up off the wheel, toward her face, the side with the stud, and it stopped there in the air between them, and for one second it was the most honest thing she'd seen him do in months." },
        { n: "Then he flicked her nose. Hard." },
        { s: 'jihoon', f: 'happy', t: "Like you'd joined a cult. Which you did. Temple stay. Very spiritual. I'm happy for you." },
        { s: 'solar', f: 'surprised', t: "*Ow*, Jihoon, *what the hell*." },
        { s: 'jihoon', f: 'happy', t: "Merry Christmas Eve, ungrateful rug." },
        { n: "Her phone lit up on her knee before she could hit him back. She turned it face down. It was too late. He had the eyes of a hawk for exactly one thing, which was her phone, and he'd been reading it upside down since they were twelve." },
        { s: 'jihoon', f: 'neutral', t: "Is that the president?" },
        { s: 'solar', f: 'neutral', t: "...It's Jungwon." },
        { s: 'jihoon', f: 'happy', t: "Read it to me. Do the voice." },
        { s: 'solar', f: 'serious', t: "I'm not doing the voice." },
        { n: "She turned it over anyway, because he'd only take it if she didn't, and because there was nothing on it, which was somehow worse." },
        { phone: [
          { from: 'jungwon', t: "did you eat something that isn't cereal." },
          { from: 'jungwon', t: "you don't have to answer. i'm just asking so it's been asked." }
        ], contact: 'Won' },
        { s: 'jihoon', f: 'happy', t: "*So it's been asked.* He texts like my dentist. Tell him you had cereal. I want to watch him die." },
        { n: "She typed *japchae* and sent it. Jihoon made a long, wounded noise like a tyre going down." },
        { s: 'jihoon', f: 'neutral', t: "Snitch." },
        { n: "Then he was quiet. The heater roared. On the screen, under *japchae*, the word *Read* came up almost at once, and then nothing, no reply, just a boy a block from her house who'd read it and put his phone down, satisfied, the way you'd put down a pen after ticking a box." },
        { s: 'jihoon', f: 'neutral', t: "He's alright." },
        { n: "He said it to the windshield, flat, like a fact he'd checked and didn't like, and then he reached over and turned the radio off the saxophone and onto the station that played the songs she liked, and turned it up, and didn't look at her." },
        { s: 'jihoon', f: 'neutral', t: "You can pick. One. It's Christmas. Don't make it the emo guy." },
        { n: "She made it the emo guy. He groaned like he'd been shot, and slumped in his seat, and then, on the first chorus, sat up and sang every single word of it at the top of his lungs, the windows cracked, the heat on full, to prove how much he hated it, and she laughed until she couldn't breathe and the snowman in the mirror bowed and bowed." },
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
        { s: 'solar', f: 'happy', t: "Are you?" },
        { s: 'niki', f: 'happy', t: "Probably not. Maybe. It's Christmas, I'm feeling lucky." },
        { n: "Sunghoon was standing very still near the counter, wrapped from shoulder to knee in a string of fairy lights like a mummy, plugged in, glowing, with the calm face of a man who had decided this was intentional." },
        { s: 'sunghoon', f: 'neutral', t: "Sunghoon is a tree now. Don't ask Sunghoon how it happened." },
        { s: 'jay', f: 'neutral', t: "He spun. He was showing us a spin. Like the skating thing." },
        { s: 'sunghoon', f: 'flustered', t: "The skating thing is called a *sit spin*, and it was beautiful, and the lights got involved." },
        { n: "Jay was hanging ornaments on the little fake tree by the register with the blunt efficiency of a man defusing a bomb, one per branch, exact spacing, no notes. Jake was on the floor sorting tinsel by colour and narrating it to no one. Sunoo came out of the kitchen with two trays and a face so bright it was basically another light, and when he saw her he put the trays down on the nearest table and ran." },
        { s: 'sunoo', f: 'happy', t: "SOL! You came! I didn't say anything to anyone's parents today! Not one thing!" },
        { s: 'solar', f: 'happy', t: "I'm so proud of you." },
        { s: 'sunoo', f: 'happy', t: "Halmeoni asked me what the temple was called and I just *walked away*. Like a monk." },
        { n: "Sunoo's grandmother, behind the counter, did not look up from the dumplings she was folding, but one corner of her mouth went somewhere it didn't usually go." },
        { n: "There was a phone propped up against the sugar jar on the counter, on a video call, and on the screen was Jungwon at his desk at home, lit by one lamp, in a hoodie, with a textbook open in front of him that he wasn't looking at." },
        { s: 'jungwon', f: 'happy', t: "Hi. I'm here. I'm here for eleven minutes." },
        { s: 'jungwon', f: 'neutral', t: "The tree's crooked." },
        { s: 'jay', f: 'neutral', t: "The tree's not crooked." },
        { s: 'jungwon', f: 'neutral', t: "Move me. Point me at it." },
        { n: "Jay picked up the phone and pointed it at the tree. There was a pause." },
        { s: 'jungwon', f: 'neutral', t: "It's crooked." },
        { s: 'jay', f: 'neutral', t: "Bro." },
        { s: 'heeseung', f: 'serious', t: "Mmf. *Mmmf.*" },
        { s: 'niki', f: 'happy', t: "He says Won's right and the tree's crooked and also that I should come down. I'm not coming down. It's warmer up here. Heat rises. Science." },
        { n: "Sunoo's grandmother came out from behind the counter, took the clipboard out of Heeseung's mouth, put a dumpling in it instead, and went back behind the counter without a word. Heeseung chewed, still holding the ladder with both hands, with the face of a man who'd been silenced by a higher power and was grateful for it." },
        { n: "Solar took her coat off. She didn't remember deciding to. She hung it on the back of a chair by the radiator with the heavy pocket facing the wall, and Jake handed her a fistful of gold tinsel without looking up, the way you'd hand something to someone who'd been there the whole time, and she started sorting it with him, by shade, which was apparently a thing you could do with tinsel if you were Jake." },
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
        // Christmas pass (Nov 11 2026): dumplings, Jungwon off the sugar jar, the walk home.
        { n: "Then Sunoo's grandmother brought out the dumplings, all of them, on two trays and a baking sheet, and said nothing, and went back for the soy sauce, and the decorating ended there, because nobody in the history of Yeobo's had ever kept working while Halmeoni's dumplings were on a table." },
        { s: 'niki', f: 'happy', t: "I'm coming down. Not because Heeseung said. Because of the dumplings. Write that down." },
        { s: 'heeseung', f: 'neutral', t: "*Niki descended. Motivation: dumplings.* It's in." },
        { s: 'sunghoon', f: 'neutral', t: "Could somebody unplug Sunghoon? Sunghoon would like to eat with his arms." },
        { s: 'jay', f: 'neutral', t: "Nah. You're the tree now. Trees don't eat." },
        { n: "Jake unplugged him in the end, and then plugged him back in for one more photo, and then unplugged him again, and Sunghoon ate his first dumpling still wrapped in dark bulbs from the shoulders down, like a very handsome man who'd been arrested by Christmas." },
        { n: "Halfway through the second tray Jay picked up the phone off the sugar jar, looked at the screen, and held it out to her across the table without a word, the way you'd pass the salt." },
        { s: 'jay', f: 'neutral', t: "He wants you. He won't say it. He's been doing the face for four minutes." },
        { s: 'jungwon', f: 'flustered', t: "I haven't been doing a face." },
        { s: 'jay', f: 'neutral', t: "Bro, you're doing it right now." },
        { n: "She took him to the back, by the radiator, past the coat with the heavy pocket, and sat on the little step into the kitchen where Sunoo sat to do his homework, and held him up in front of her. He'd pushed his hood back. The lamp on his desk made one half of his face gold and left the other half in his room." },
        { s: 'jungwon', f: 'neutral', t: "You're wearing tinsel." },
        { s: 'solar', f: 'surprised', t: "I'm—" },
        { n: "She was. Somewhere over her left ear, gold, a long piece of it, and she had no idea when Jake had done it, which meant he'd done it the way he'd handed her the first fistful, without looking, like she'd been there all along." },
        { s: 'jungwon', f: 'happy', t: "Leave it. It suits you." },
        { s: 'jungwon', f: 'neutral', t: "I wish I was there." },
        { s: 'solar', f: 'happy', t: "You are there. You're propped up against the sugar. You told Jay the tree was crooked four times." },
        { s: 'jungwon', f: 'sad', t: "I mean properly. Sitting on the step with you. Getting tinsel on me." },
        { n: "He said it in his flattest voice, the one for weather and test scores, and then didn't take it back, and didn't make it into a joke, and didn't fill the silence after it with anything at all. He just let it sit there on the screen between them like something he'd set down very carefully on a counter and was now leaving for her." },
        { s: 'solar', f: 'sad', t: "Next year." },
        { s: 'jungwon', f: 'neutral', t: "Next year I'll be on the ladder." },
        { s: 'solar', f: 'happy', t: "You'd fall off the ladder." },
        { s: 'jungwon', f: 'happy', t: "Then I'll be the tree." },
        { n: "Somewhere behind him, through a wall, a woman's voice said his name, not loud, the way you'd say it if you were used to it being answered the first time. His face did the thing it did before a competition. Still. Certain. Already somewhere else." },
        { s: 'jungwon', f: 'neutral', t: "That's my eleven minutes. Merry Christmas Eve, Sol. Tell Niki to get off the ladder." },
        { n: "The screen went to his name and then to nothing. She sat on the step for a second holding the phone, warm from his face being on it, and through the door Niki was back on the ladder, eating a dumpling, out of spite." },
        { n: "Jake and Sunghoon walked her home at ten-forty, Sunghoon still faintly glowing at the cuffs, Jake showing her forty photos of a small dog in antlers looking betrayed, one after another, narrating each, and at the corner of her street her phone buzzed against the can." },
        { phone: [
          { from: 'jihoon', t: "saw sunoos story. the tree is crooked" },
          { from: 'jihoon', t: "did the lights by myself this year. bank angel 8. snowman bowed at me. Respect" },
          { from: 'jihoon', t: "tell my son merry christmas from his Real Father" }
        ], contact: 'jihoney' },
        { n: "She looked at it for longer than she'd looked at anything all night. *By myself.* He'd put it in the middle, where it would get lost between a tree and a snowman, and it hadn't got lost at all." },
        { phone: [
          { from: 'solar', t: "next year" },
          { from: 'jihoon', t: "sure" }
        ], contact: 'jihoney' },
        { bond: { council: 1 } }
      ] }
    ] }
  ] },

  // ───────────────────────────── 12/24, late: Christmas Eve, her room (Christmas pass, Nov 11 2026) ─────────────────────────────
  // No consumes (12/24 isn't a lateOpen night, so the plain late screen and Sleep follow; the route locks on that Sleep).
  // The route isn't locked yet, so the branches read the eve's choice flags, not ifEpiRoute.
  { id: 'epi-h-eve-night', date: '12/24', slot: 'late', title: 'eleven', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
    { music: 'epi-h-late' },
    { ifFlag: 'epi-route-jungwon', then: [
      { n: "At two minutes past eleven her door opened exactly as wide as a mother's head, and her mother's head came round it, earrings still in, and looked." },
      { n: "Solar was in bed. Lamp on. Duvet to the chin. Calculus textbook open on her knees, which would have been very convincing if it hadn't been upside down, which she noticed at the same moment her mother did. Nana, across her feet, lifted his head, looked at the door, and put his head back down, the way a man in a waiting room looks up at every name that isn't his." },
      { s: 'mom', f: 'neutral', t: "Studying." },
      { s: 'solar', f: 'happy', t: "Chapter nine." },
      { n: "Her mother's eyes went to the radiator under the window. Her boots were standing in front of it with snow still melting off the toes into two small dark puddles on the floorboards, steaming faintly, like a confession somebody had left out to dry." },
      { s: 'mom', f: 'serious', t: "Your boots are wet." },
      { s: 'solar', f: 'neutral', t: "Nana needed to go out." },
      { n: "She heard it come out of her mouth and almost laughed, because it was his line, word for word, in his voice, and she'd caught it off him the way she'd caught the counting. Nana, who had been out at six and not since, sighed through his nose at the ceiling." },
      { s: 'dad', f: 'happy', t: "It's snowing, Soyeon. Boots get wet. That's what boots are for." },
      { n: "Her father's voice came from somewhere down the hall, with his tie already off, from the sound of it, and the deep contentment of a man who'd eaten three courses he hadn't paid for and been seated, by some miracle, next to somebody else who fished." },
      { s: 'mom', f: 'neutral', t: "Mm. Is he coming tomorrow?" },
      { s: 'solar', f: 'flustered', t: "...At one." },
      { s: 'mom', f: 'neutral', t: "Then you'll be up before noon. And you'll put a real sweater on. Not that one." },
      { n: "She shut the door. Then she opened it again, an inch." },
      { s: 'mom', f: 'happy', t: "Your book's upside down." },
      { n: "The door shut for real. Solar put her face in the duvet and screamed into it, very quietly, and Nana put one enormous paw on the back of her head, which he did sometimes, and which nobody had ever taught him." },
      { music: 'epi-h-romance' },
      { n: "Her phone went at 11:41. His minute. Forty-one past, every time, like a train, and this time the voice on the other end sounded like it was coming from the bottom of a well." },
      { s: 'jungwon', f: 'neutral', t: "Hi. Don't be alarmed. I'm in the bathtub." },
      { s: 'solar', f: 'surprised', t: "You're in the *what*?" },
      { s: 'jungwon', f: 'neutral', t: "It's empty. I'm dressed. It's the furthest room in the house from my parents' door, and tile carries a whisper less than carpet does. It's physics. The carpet in my room is a microphone." },
      { s: 'solar', f: 'happy', t: "Won. That's insane." },
      { s: 'jungwon', f: 'neutral', t: "It's reasonable. I sat down and did the maths." },
      { n: "She could picture it, which was the problem with him, always. The big white tub in the en-suite of the neat, fancy room, the room nobody ever messed up, and Yang Jungwon sitting in it fully clothed with his knees up and his slippers still damp, the phone held close, his hair still flat on one side from the hood. She rolled onto her back and held the phone on her chest and listened to him breathe in a bathroom a block away." },
      { s: 'jungwon', f: 'neutral', t: "Did your mother check?" },
      { s: 'solar', f: 'happy', t: "She saw the boots. I said Nana needed to go out." },
      { n: "There was a pause on the line. A long one, with tile in it." },
      { s: 'jungwon', f: 'flustered', t: "That's my lie." },
      { s: 'solar', f: 'happy', t: "It's *our* lie now. We share it. Like a dog." },
      { s: 'jungwon', f: 'neutral', t: "We don't share a dog." },
      { s: 'solar', f: 'happy', t: "We share *two* dogs, Won. Maeumi sat on my boot. That's a custody arrangement." },
      { n: "She heard him laugh. It was one of the rare ones, the ones that got out before he could shut the door on them, short and helpless and surprised at itself, and then smothered fast into a sleeve, and then silence again while they both listened to his house not wake up." },
      { s: 'jungwon', f: 'neutral', t: "I've written notes. For tomorrow." },
      { s: 'solar', f: 'happy', t: "Read me the notes." },
      { s: 'jungwon', f: 'flustered', t: "No." },
      { s: 'solar', f: 'happy', t: "Read me *one* of the notes." },
      { n: "Paper. She heard paper, actual paper, unfolded on the edge of a bathtub. Of course he'd printed them." },
      { s: 'jungwon', f: 'neutral', t: "*Item four. Do not mention the driveway. If the driveway is mentioned, do not explain the driveway. There is no explanation of the driveway that improves it.*" },
      { s: 'solar', f: 'surprised', t: "Oh my God. You *know* she saw you." },
      { s: 'jungwon', f: 'serious', t: "I've always known she saw me. A curtain moved. I stood there for another twelve minutes because if I'd left right after the curtain moved it would've looked like I was running." },
      { s: 'solar', f: 'happy', t: "You *were* running." },
      { s: 'jungwon', f: 'neutral', t: "I was standing very still in a way that was running." },
      { n: "She laughed into her pillow. Nana lifted his head, offended on behalf of the household, and put it down again across her knees with a groan. Down the line Jungwon folded the paper back up, she could hear him do it, along its old creases, carefully, like the notes were something that could be hurt." },
      { s: 'jungwon', f: 'neutral', t: "Sol." },
      { s: 'solar', f: 'neutral', t: "Mm?" },
      { s: 'jungwon', f: 'sad', t: "Nobody's ever told me a time before. To come to their house. *At one.* Like it's a normal thing. Like there's a chair." },
      { n: "He said it so quietly the tile almost got it. Then nothing, the long held kind of nothing, a boy in an empty bathtub in a house where every room was too clean waiting to see whether she'd make it into a joke, so that he could." },
      { n: "She didn't. She lay there with the phone on her chest and the dog on her knees and let it be the truest thing anyone had said to her all week." },
      { s: 'solar', f: 'sad', t: "There's a chair. It's the one by the window. Dad's going to try to give you his. Don't take it, it's a test." },
      { s: 'jungwon', f: 'neutral', t: "...I'm writing that down." },
      { s: 'jungwon', f: 'neutral', t: "I'm getting out of the bathtub. I'm getting into bed. Don't hang up." },
      { n: "She didn't. She listened to the whole operation, the squeak of a slipper on porcelain, the bathroom door, four careful steps across a carpet that was apparently a microphone, a duvet, the small furious huff of a very small dog being moved over, and then his voice again, closer, warmer, muffled by a pillow." },
      { s: 'jungwon', f: 'neutral', t: "Okay. I'm here." },
      { n: "They talked about nothing. They talked about Niki on the ladder and the tinsel Jake would have put on her if she'd gone, and the violins in his parents' film, and her father's work dinner, where he'd been seated next to the only other man in the company who fished and had come home *radiant*, and his voice got lower and lower and slower and slower and somewhere in there the clock on her nightstand went from 11:59 to 12:00." },
      { n: "Her whole back went tight. She didn't mean it to. It just did, the way it did every time, every muscle at once, her hand already off the duvet and reaching for something on her thigh that wasn't there, and she didn't make a sound, she was sure she didn't make a sound." },
      // Nov 11 2026 (Kat): searchers know
      { s: 'jungwon', f: 'neutral', t: "It's 12:01." },
      { n: "She hadn't said anything. She hadn't breathed wrong, even. He'd just known what minute it was, and what that minute used to be, because he'd been there for a year of them, on the other side of something with her, and he'd been waiting for it." },
      { s: 'jungwon', f: 'neutral', t: "I'm watching it. I'll tell you when it's 12:02." },
      { n: "He did. And 12:03. He told her every minute up to 12:05, in his flattest voice, the weather-report one, like reading out a list of cities where it wasn't raining, and her back let go one muscle at a time, and Nana sighed and rolled against her, and the snow went past the window the right way, down." },
      { s: 'jungwon', f: 'neutral', t: "It's Christmas." },
      { s: 'jungwon', f: 'flustered', t: "Merry Christmas, Sol. I've said that before. To people. I've never said it to somebody before." },
      { choose: [
        { t: "(Stay on. Don't hang up.)", flag: 'epi-h-eve-stayed', then: [
          { s: 'solar', f: 'flustered', t: "Don't hang up. Stay on. Read me the fishing notes." },
          { s: 'jungwon', f: 'surprised', t: "The *fishing* notes?" },
          { s: 'solar', f: 'happy', t: "I want to hear about the forgiving reel." },
          { n: "So he read them to her. Very quietly, under a duvet a block away, in a voice that kept almost laughing at itself. Spinning reels and baitcasting reels, and line weight, and why you put the fish back, and a sentence he'd copied out from somewhere about how fishing was mostly waiting and you had to learn to like waiting, which he read twice, slower the second time, like it was about something else." },
          { n: "She didn't hear the end. She heard *the forgiving one* and then the snow and then his breathing, slow, the phone warm against her cheek on the pillow, and then she didn't hear anything at all, and neither, somewhere around a quarter to one, did he." }
        ] },
        { t: "Merry Christmas, Won. Go to sleep.", then: [
          { s: 'solar', f: 'happy', t: "Merry Christmas, Won. Go to sleep. You have to be charming at one." },
          { s: 'jungwon', f: 'neutral', t: "I'm always charming." },
          { s: 'solar', f: 'happy', t: "You're never charming. You're *correct*. It's different." },
          { s: 'jungwon', f: 'happy', t: "...Goodnight, Sol." },
          { n: "He hung up the way he always did, so slowly that she never heard the click, just the quiet where he'd been. She lay there in it for a long time with the phone on her chest, smiling at the ceiling, and Nana's chin on her shin, and the snow going down." }
        ] }
      ] }
    ], else: [
      { ifFlag: 'epi-route-jihoon', then: [
        { n: "He didn't drive away." },
        { n: "He'd pulled up outside her house at half past ten, crooked across the end of the drive the way he parked everywhere, and she'd got out and said *night* and shut the door, and walked up the path, and got all the way upstairs and turned her lamp on, and when she went to the window to pull the curtain the car was still there. Engine running. Headlights off. The exhaust going up white in the cold under the streetlight like a kettle that had been left on." },
        { n: "Nana got off the bed and came and put his front paws on the windowsill beside her, which he wasn't allowed to do, and looked down at the car with his whole back end going, whining in the high thin voice he only had for one person." },
        { phone: [
          { from: 'solar', t: "go home" },
          { from: 'jihoon', t: "cant" },
          { from: 'jihoon', t: "ur house is empty. Rules" },
          { from: 'solar', t: "what rules" },
          { from: 'jihoon', t: "My Rules. i made them just now. in the car. they are binding" },
          { from: 'solar', t: "nana is here" },
          { from: 'jihoon', t: "nana is a Child" },
          { from: 'jihoon', t: "i'll go when the adults get home. i'm not a monster. i'm a gentleman. theres a difference" }
        ], contact: 'jihoney' },
        { n: "She sat down on the floor under the window with her back against the radiator, the heat going through her coat, which she still hadn't taken off, and the can in the pocket of it pressed against her hip, and the dog leaned all sixty pounds of himself against her shoulder so she couldn't get up even if she wanted to. She didn't want to. She could hear the car's engine through the glass. It was a stupid thing to be comforted by. She was comforted by it anyway." },
        { n: "At 10:41 her phone rang in her hand. Not Jihoon." },
        { s: 'jungwon', f: 'neutral', t: "Hi. Sorry. It's my minute. I wasn't sure if you'd be home." },
        { s: 'solar', f: 'neutral', t: "I'm home." },
        { s: 'jungwon', f: 'neutral', t: "Did you see the lights?" },
        { n: "Her stomach went somewhere very far down. Of course he knew. Of course Jihoon had posted it, the bank angel and the snowman and the tunnel, with a caption, an hour ago, for everyone, the way you'd plant a flag." },
        { s: 'solar', f: 'flustered', t: "...He posted it." },
        { s: 'jungwon', f: 'neutral', t: "The angel got an eight." },
        { s: 'solar', f: 'sad', t: "She always gets an eight." },
        { s: 'jungwon', f: 'neutral', t: "Then it was fair." },
        { n: "That was all. No *why didn't you tell me*. No silence for her to fall into. He said it like a fact on a test, flat and correct, and let it stand there, and she found she was holding the phone very hard." },
        { s: 'jungwon', f: 'neutral', t: "Is he still outside?" },
        { s: 'solar', f: 'surprised', t: "How do you—" },
        { s: 'jungwon', f: 'neutral', t: "Your parents aren't back till eleven. You told me on Thursday. He wouldn't leave you in an empty house." },
        { n: "A pause. Paper, somewhere on his end. He'd been reading something when he called and he'd put it down to do this." },
        { s: 'jungwon', f: 'neutral', t: "I wouldn't either. That's not a complaint. I'm just noting it." },
        { s: 'solar', f: 'sad', t: "Won." },
        { s: 'jungwon', f: 'neutral', t: "I'll be at your door at one. With a box. I've written notes, I'll be fine. Tell him—" },
        { n: "He stopped. She heard him decide, the small sound of a boy choosing which answer to leave on the card." },
        { s: 'jungwon', f: 'neutral', t: "Don't tell him anything. Goodnight, Sol. Merry Christmas Eve." },
        { n: "He hung up slowly, the way he always did, so she never heard the click. She sat on the floor with the phone in her lap, and below the window the car went on idling, and she didn't know which of the two of them she felt worse about, which was its own answer, probably, to some question she wasn't going to ask herself tonight." },
        { n: "At eleven exactly, headlights turned into the street. Her parents' car. She watched it come up the road slow on the snow, and watched Jihoon's car pull away from the curb before it got there, headlights still off, all the way to the corner, so they wouldn't sweep across her mother's face, the way he'd done since the day he got his licence. At the corner they came on. Then he was gone." },
        { phone: [
          { from: 'jihoon', t: "Adults Have Landed" },
          { from: 'jihoon', t: "goodnight skank. dont let the snowman haunt u" }
        ], contact: 'jihoney' },
        { n: "Her mother opened her door at two minutes past, earrings still in, and looked at her sitting on the floor in her coat under the window." },
        { s: 'mom', f: 'serious', t: "Was that Jihoon's car?" },
        { s: 'solar', f: 'neutral', t: "...He was making sure." },
        { n: "Her mother's face did something she didn't expect. It went soft all at once, the whole of it, the way it only ever went for one boy who wasn't hers." },
        { s: 'mom', f: 'sad', t: "Of course he was." },
        { s: 'mom', f: 'neutral', t: "Your boots are wet." },
        { s: 'dad', f: 'happy', t: "It's snowing, Soyeon. Boots get wet. That's what boots are for." },
        { s: 'mom', f: 'neutral', t: "Mm. Take your coat off, Solar. You look like you're waiting for a bus." },
        { n: "She took her coat off when the door had shut. She hung it on the back of the chair with the heavy pocket facing the wall, and got into bed, and lay there with Nana stretched along her whole side like a second, warmer person, thinking about a glovebox, and a tunnel of white lights, and a boy in a bathtub a block away who'd said *I'm just noting it* and meant every word, until the thinking ran out and she slept." }
      ], else: [
        { n: "Her mother opened her door at two minutes past eleven, earrings still in, and found her in bed with the lamp on and a calculus book on her knees and a long piece of gold tinsel still caught behind her left ear, which she hadn't known about until her mother reached over, without a word, and pulled it out." },
        { n: "She held it up between two fingers in the lamplight. It turned slowly, gold, a little bent." },
        { s: 'mom', f: 'neutral', t: "Studying." },
        { s: 'solar', f: 'flustered', t: "...Tinsel's a study aid." },
        { n: "Down the hall her father laughed, one big helpless bark, and tried to turn it into a cough, and failed." },
        { s: 'mom', f: 'neutral', t: "Mm." },
        { n: "But she didn't put the tinsel down. She stood there in her good coat holding it, looking at it, and something went across her face that Solar couldn't name, something tired and relieved and almost young, and when she spoke again it was in a different voice entirely, the one from when Solar was small and had been to a birthday party." },
        { s: 'mom', f: 'sad', t: "Was it nice?" },
        { s: 'solar', f: 'happy', t: "It was really nice." },
        { s: 'mom', f: 'happy', t: "Good." },
        { n: "She laid the tinsel on the nightstand, by the clock, very carefully, like a thing worth keeping, and turned the lamp off herself, and shut the door. Solar lay in the dark and didn't move for a while." },
        { music: 'epi-h-goofy' },
        { n: "At 11:30 her phone lit up the whole ceiling. *RETREAT FACTS (do not leave) is calling.* Heeseung had started a group call. Heeseung had started a group call at 11:30 on Christmas Eve and named it, in the call itself, *MANDATORY DEBRIEF*." },
        { n: "She answered under the duvet. The first voice on the line, before anyone had said a single word, was Niki's." },
        { s: 'niki', f: 'happy', t: "LMAOOO." },
        { s: 'jay', f: 'neutral', t: "Nobody's said anything." },
        { s: 'niki', f: 'happy', t: "I'm getting ahead of it." },
        { s: 'heeseung', f: 'serious', t: "Okay. Thank you all for joining. This will be quick. Tomorrow some of us will be seeing our parents for an extended period for the first time since the retreat. I'd like to go over the facts." },
        { s: 'sunoo', f: 'happy', t: "*Some* of us have been seeing our parents every day, hyung." },
        { s: 'heeseung', f: 'serious', t: "Extended, Sunoo. Over food. Food is where people get asked things. Facts. The bell at four. Sweeping. Silence. Phones collected at the gate. Nobody improvises. Jake." },
        { s: 'jake', f: 'flustered', t: "Why did you say *Jake* like that?" },
        { s: 'heeseung', f: 'neutral', t: "You told your aunt there was a monk who did kickflips." },
        { s: 'jake', f: 'happy', t: "There *could* have been. Monks are people. Layla says hi, by the way. She's still in the antlers. She won't let me take them off now. She's decided they're hers." },
        { s: 'sunghoon', f: 'neutral', t: "Sunghoon just found another bulb. In his sleeve. Sunghoon is going to be finding bulbs until he dies." },
        { n: "Then a new voice joined, low and close and with a faint echo to it, like it was coming from the bottom of a well." },
        { s: 'jungwon', f: 'neutral', t: "Hi. I'm here. I'm in the bathtub." },
        { s: 'niki', f: 'surprised', t: "*Why?*" },
        { s: 'jungwon', f: 'neutral', t: "Physics. The carpet's a microphone. I'm going to Sol's house tomorrow at one." },
        { n: "There was a pause on the line the length of seven people inhaling at once." },
        { s: 'sunoo', f: 'surprised', t: "MEETING THE PARENTS?" },
        { s: 'jay', f: 'surprised', t: "On *Christmas*?" },
        { s: 'niki', f: 'happy', t: "LMAOOO." },
        { s: 'heeseung', f: 'serious', t: "Jungwon. Facts. Bell at four. Sweeping. Silence." },
        { s: 'jungwon', f: 'neutral', t: "I wrote the facts, hyung." },
        { s: 'jake', f: 'happy', t: "We should go. All of us. Moral support. A council goes where its president goes." },
        { s: 'heeseung', f: 'serious', t: "Absolutely not." },
        { s: 'jake', f: 'happy', t: "Layla's ready. She owes Nana a date. She's in the antlers already, Heeseung, it's *fate*." },
        { s: 'heeseung', f: 'serious', t: "Absolutely not. That's the end of the debrief. Goodnight. Drink water. Sunghoon, take the lights off before you get into bed, that's a fire." },
        { n: "They dropped off one by one, little chimes in the dark. Sunoo with *merry christmas!!!* typed into the call chat. Jay with nothing. Sunghoon with a signature. Jake with a photo of a small dog in antlers looking at the camera like it had been personally betrayed, which went up on her ceiling in the glow of the screen. Niki last of the rest, with one final *LMAOOO* for nobody." },
        { n: "Then it was just the echo. Just him." },
        { music: 'epi-h-romance' },
        { s: 'jungwon', f: 'neutral', t: "Hi." },
        { s: 'solar', f: 'happy', t: "Hi. You're still in the bathtub." },
        { s: 'jungwon', f: 'neutral', t: "I'm comfortable. That's not true. Jake isn't going to come tomorrow. Is he." },
        { s: 'solar', f: 'happy', t: "Jake's absolutely going to come tomorrow." },
        { s: 'jungwon', f: 'sad', t: "...I'll write a note about it." },
        { n: "Her clock went from 11:59 to 12:00. Her back went tight, every muscle at once, the way it always did, and she didn't make a sound." },
        // Nov 11 2026 (Kat): searchers know
        { s: 'jungwon', f: 'neutral', t: "It's 12:01, Sol. I'm watching it." },
        { n: "He'd been there. He'd sat through a year of that minute with her, on the other side of something, and he'd remembered to be watching it tonight, from a bathtub, on Christmas. She let her breath out against the pillow." },
        { s: 'jungwon', f: 'flustered', t: "Merry Christmas. I've said that before, to people. I've never said it to somebody before. Goodnight." },
        { n: "He hung up so slowly she didn't hear the click. On the nightstand, by the clock, the piece of tinsel caught the streetlight and went gold, and went on going gold, a little bent, all night." }
      ] }
    ] }
  ] },

  // ───────────────────────────── 12/25, afternoon: Christmas ─────────────────────────────
  { id: 'epi-h-christmas', date: '12/25', slot: 'after', consumes: true, faces: 'hoax-christmas', title: 'four cups', place: 'Hanlim · Home · Living Room', time: 'Daytime', scene: [
    { music: 'epi-h-christmas' },
    { n: "Her parents were home on Christmas Day, both of them, at the same time, in the same room, which happened about as often as a comet, and the house felt it. Her mother had been cooking since nine. Her father had been told to stay out of the kitchen since nine and fifteen. The heating was up too high, the windows were fogged, and there was a cake from the good bakery on the counter that her mother had ordered a week ago, back when she still thought her daughter was at a retreat." },
    { n: "Nana had been given a red bow. Nana had eaten half of the red bow. The other half hung off his collar like a medal." },
    // Christmas pass (Nov 11 2026, Kat: "Christmas is not long enough"): the morning, presents, the chats. Reads epi-h-eve-stayed.
    { ifFlag: ['epi-route-jungwon', 'epi-h-eve-stayed'], then: [
      { n: "She'd woken at ten to seven with her phone stuck to her cheek, hot, the battery at four percent, and the call still going. *6:58:12*, the screen said, counting up, and on the other end of it a boy a block away was breathing slow and even into a pillow, and somewhere near him something very small was snoring in long whistling breaths." },
      { n: "She'd lain there and listened to it for a whole minute without moving. It was the most private thing she'd ever heard. It felt like reading somebody's diary, if the diary was just a boy asleep, and she didn't want to stop reading it." },
      { s: 'jungwon', f: 'neutral', t: "...Sol?" },
      { s: 'solar', f: 'happy', t: "Merry Christmas." },
      { n: "A long pause, full of a very sleepy boy understanding, piece by piece, what had happened, and what time it was, and what his mother would say if she'd tried his door in the night, and what his voice must have sounded like for six hours to anyone listening." },
      { s: 'jungwon', f: 'flustered', t: "Did I. Was I asleep? On the phone? Did I *say* anything?" },
      { s: 'solar', f: 'happy', t: "You said *spinning reel* at about three in the morning." },
      { s: 'jungwon', f: 'flustered', t: "That's not funny." },
      { s: 'solar', f: 'happy', t: "You said it very lovingly." },
      { n: "He made a small noise like a kettle starting and the call dropped, and she lay there laughing into her pillow at four percent, and a second later her phone buzzed once." },
      { phone: [
        { from: 'jungwon', t: "my phone died. that's why the call ended. i didn't hang up on you." },
        { from: 'jungwon', t: "merry christmas. see you at one. i'm going to shower for a very long time." }
      ], contact: 'Won' }
    ] },
    { n: "Presents were at ten, on the living-room floor, the way they'd always been, her father cross-legged in his good sweater with his reading glasses pushed up into his hair and her mother on the sofa above them with her coffee, supervising, and Nana lying in the exact middle of all of it like a centrepiece, eating tissue paper slowly and with total concentration, as if it were a job." },
    { n: "Her mother had bought her a planner. Leather, dark red, a ribbon to keep your place, the year stamped on the front in gold, and every single week of it completely empty." },
    { s: 'mom', f: 'neutral', t: "For the extracurriculars. And so you can write down where you are." },
    { n: "She said it pleasantly. She said it into her coffee. Her father looked at the ceiling like there was something very interesting on it, and Solar held the planner in both hands and said *thank you, Mom, I love it*, and meant it, which was the horrible thing, because it was a beautiful planner, and she knew exactly which page her mother had pictured her opening it to." },
    { n: "Her father's present was a hat. He'd picked it himself, which you could tell from across the room. Knitted, cream, with ear flaps, and a pom-pom on top the size of a fist, and two little ties under the chin, and on the front, slightly crooked, an embroidered white dog that he insisted was a Samoyed." },
    { s: 'dad', f: 'happy', t: "It's Nana. Look. It's him." },
    { s: 'solar', f: 'happy', t: "Dad, it's a sheep." },
    { s: 'dad', f: 'neutral', t: "It's a Samoyed. The woman at the stall said so. I asked her twice." },
    { n: "She put it on. She wore it for the whole rest of the morning, ties done up under her chin, pom-pom wobbling, and every time her father looked over at her he looked so pleased with himself that her mother had to leave the room twice." },
    { n: "Her own presents were small, because she'd come back from nine days at a temple with no money and no shopping done and a story she had to keep telling, so she'd done what she could on the twenty-third with the last of her savings and a convenience store: a framed photo of Nana for each of them, the same photo, him asleep on her bed with all four silly legs in the air, in two cheap frames, one gold, one silver. Her mother looked at hers for a long time. Her father put his on the mantelpiece right away, between the clock and the wedding picture, and said *there*, like he'd fixed something." },
    { n: "Nana's present was a squeaky plush croissant. He took it very seriously. He carried it to the hall, lay down across the front door with it between his paws like a guard with a hostage, and squeaked it, once, every time anybody looked at him, for the next three hours." },
    { n: "Her phone had been going since eight." },
    { phone: [
      { from: 'junkyu', t: "junkyute: MERRY CHRISTMAS!!!!!!!!!!!!!!!!! i love u all!!!!!!!!" },
      { from: 'junkyu', t: "junkyute: my mom got me socks with DUCKS on them!!! i'm wearing them and the santa hat at the same time!!!" },
      { from: 'asahi', t: "asanoonecares: it's 8am" },
      { from: 'junkyu', t: "junkyute: its CHRISTMAS 8am!!!" },
      { from: 'jaehyuk', t: "jaehyukkie: Merry Christmas. My aunt gave me a book about mindfulness. I've already found two factual errors." },
      { from: 'hyunsuk', t: "geniusuk: got a sweater. its another reindeer. this one lights up" },
      { from: 'asahi', t: "asanoonecares: send a picture" },
      { from: 'hyunsuk', t: "geniusuk: no" },
      { from: 'cherry', t: "cherryblossoms: merry christmas losers. at grandma's. she's already asked if i'm eating. i have been here eleven minutes" },
      { from: 'jihoon', t: "jihoney: Merry Christmas To All Except Asahi" },
      { from: 'asahi', t: "asanoonecares: ok" },
      { from: 'jihoon', t: "jihoney: kidding. merry christmas asahi. u are a Light" },
      { from: 'solar', t: "solarsystem: my dad got me a hat with nana on it. it has EAR FLAPS. i'm wearing it until i die" },
      { from: 'cherry', t: "cherryblossoms: send it" },
      { from: 'cherry', t: "cherryblossoms: oh my god. that's a sheep. there's a sheep on your head" },
      { from: 'solar', t: "solarsystem: its NANA" },
      { from: 'jihoon', t: "jihoney: that is not my son. that is a Sheep. who did this to u. was it ur father. tell him i'm disappointed. coming at one with the cocoa" },
      { from: 'junkyu', t: "junkyute: i love it!!!!!!" }
    ], contact: "rip solar kim (she's fine probably)", group: true },
    { phone: [
      { from: 'heeseung', t: "heeheeseung: merry christmas. RETREAT FACTS reminder for family meals: bell at four. sweeping. silence. phones collected at the gate. do NOT improvise" },
      { from: 'niki', t: "rikiniki: who's improvising" },
      { from: 'heeseung', t: "heeheeseung: jake told his aunt there was a monk who did kickflips" },
      { from: 'jake', t: "jakeys: there COULD have been" },
      { from: 'sunoo', t: "sunooshine: merry christmas everyone!!!! halmeoni says merry christmas and also come eat!!!!" },
      { from: 'jungwon', t: "injangwon: merry christmas. i'm going to the kims' at one." },
      { from: 'niki', t: "rikiniki: LMAOOO" },
      { from: 'jay', t: "jbird: bro is meeting the parents ON christmas. respect" },
      { from: 'sunghoon', t: "princehoon: Sunghoon wishes you luck. Sunghoon has met many parents. Bring fruit. - s" },
      { from: 'jungwon', t: "injangwon: i'm bringing a cake." },
      { from: 'sunghoon', t: "princehoon: Bring fruit also. - s" }
    ], contact: 'RETREAT FACTS (do not leave)', group: true },
    { ifEpiRoute: 'council', then: [
      { phone: [
        { from: 'jake', t: "jakeys: layla is in her antlers. she's ready. i'm just saying" },
        { from: 'heeseung', t: "heeheeseung: jake." },
        { from: 'jake', t: "jakeys: i'm JUST saying" }
      ], contact: 'RETREAT FACTS (do not leave)', group: true }
    ] },
    { n: "At twelve-thirty she took the hat off. At twelve-forty she put a real sweater on, the one her mother had pointed at without pointing at it. At twelve-fifty she stood in the hall and looked at herself in the mirror by the coats, and her mother walked past behind her in the mirror with a dish, and slowed, and didn't say anything, and went on, which was somehow louder than if she had. Solar went and sat on the sofa with a cushion in her lap and tried very hard to look like somebody who wasn't waiting for anything." },
    { n: "The doorbell rang at exactly one o'clock." },
    { n: "Solar knew. Solar knew the way you know a step is there in the dark. She got up off the sofa so fast she knocked a cushion onto the floor, and her mother looked up from the kitchen doorway with a spoon in her hand and said *who's that*, and Solar said *nobody* in a voice that was so obviously somebody that her father put down his newspaper." },
    { n: "He was on the step in the good coat, buttoned to the top, his hair actually brushed, holding a wrapped present under one arm and a white bakery box in both hands, held level, like it had something alive inside it. The snow on his shoulders hadn't melted. He'd been standing there a while, getting ready." },
    { s: 'jungwon', f: 'flustered', t: "Hi. Merry Christmas. I'm sorry. I'm doing it." },
    { s: 'solar', f: 'flustered', t: "Won, you don't have to—" },
    { n: "Her mother was behind her. Her mother had appeared behind her in the hall, the way mothers do, without walking, spoon still in hand." },
    { cg: 'epi-h-christmas' },
    { n: "Jungwon bowed. Not a nod. A full bow, ninety degrees, the bakery box held perfectly level the whole way down and the whole way back up, like a waiter in a very expensive restaurant, and when he came back up his ears were already red." },
    { s: 'jungwon', f: 'neutral', t: "Good afternoon. I'm Yang Jungwon. I'm sorry to come by without calling first. These are for your family. They're from the place by the station. I didn't know what you liked, so I asked the woman what the best thing was, and she said this, so if it's bad it's her fault." },
    { n: "Her mother looked at him. Looked at the box. Looked at him again, and her face did something slow, like a drawer opening in an old desk." },
    { s: 'mom', t: "...You're the one from the driveway." },
    { s: 'jungwon', f: 'surprised', t: "Ma'am?" },
    { s: 'mom', t: "October. Eleven at night. You were standing in our driveway for twenty minutes holding a dog. I watched you from the upstairs window. I was about to call somebody." },
    { s: 'jungwon', f: 'flustered', t: "That was. Yes. That was Maeumi. He was. I was walking him. Past. For twenty minutes. In one place." },
    { s: 'solar', f: 'flustered', t: "*Mom.*" },
    { s: 'mom', t: "Well, nobody ever *introduced* us, Solar." },
    { n: "She said it at Solar. All of it. The retreat, the nine days, the voicemails, the cardigan, all of it folded small and handed over in one sentence, and then she turned to the boy on her step and smiled the specific, terrifying smile she used on clients." },
    { cg: null },
    { s: 'mom', t: "Come in, Jungwon. Take your shoes off. You're letting the heat out." },
    { s: 'solar', f: 'flustered', t: "This is Jungwon. He's my... He's. Mom, Dad, this is my boyfriend." },
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
    { n: "Then he looked up, past her parents, past the dog, into the living room, at the boy sitting on the edge of the sofa with a cup of tea on his knee and dog hair all over his good sweater." },
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
    { n: "Her phone buzzed in her back pocket. Then again. Then a third time, which with Cherry meant the first two had been warnings." },
    { phone: [
      { from: 'cherry', t: 'outside' },
      { from: 'cherry', t: "NOT coming in. if ur mom sees me she'll feed me and if she feeds me my grandma will kill me. lunch is at 2. she counts" },
      { from: 'cherry', t: 'come out. i have a bear' }
    ], contact: 'cherryblossoms' },
    { place: 'Hanlim · Home · Front Door', time: 'Daytime', soft: true },
    { n: "Cherry was at the bottom of the front steps in a fluffy cherry-red mohair sweater with a white bow in her hair, boots planted in the snow like the steps were lava, holding a gift bag out at arm's length the way you'd hold out something that might bite." },
    { s: 'cherry', f: 'happy', t: "Merry Christmas, you ugly bitch. Take it. Don't open it in front of me. I'll get emotional and then I'll have to kill you, and it's a holiday." },
    { n: "It was a Care Bear. She could feel the shape of it through the tissue paper. It was always a Care Bear." },
    { n: "Cherry was looking past her, into the hall, at the row of shoes on the mat. Her mother's garden clogs. Jihoon's sneakers, kicked off any old way, one upside down. And beside them a pair of good black shoes set side by side with their toes exactly level, like they'd been parked." },
    { s: 'cherry', f: 'surprised', t: "Are those the preppy freak's shoes? Lined up? He lined his shoes up in your hallway?" },
    { s: 'solar', f: 'flustered', t: "He's meeting my parents." },
    { s: 'cherry', f: 'serious', t: "And Park's car is in your driveway." },
    { n: "She looked at it. Jihoon's car, parked crooked across the end of the drive the way he'd parked it every Christmas, the paper bag from the cocoa stand still on the dashboard. Cherry looked at it a second longer than a car needed looking at, and Solar didn't know yet what that second was for." },
    { s: 'cherry', f: 'neutral', t: "Four cups?" },
    { s: 'solar', f: 'neutral', t: "Four cups." },
    { s: 'cherry', f: 'happy', t: "Oh, he gave him one. He made the preppy freak drink his cocoa. I'm missing a murder for my grandma's japchae. This is the worst Christmas of my life." },
    { s: 'cherry', f: 'neutral', t: "...It's my second one this year, you know. Christmas. I'm too old for two." },
    { s: 'solar', f: 'sad', t: "You could skip this one." },
    { s: 'cherry', f: 'sad', t: "No. This is the one where you're home." },
    { n: "She said it at the snow, not at Solar, and then she heard it, and her whole face went murderous to cover it." },
    { s: 'cherry', f: 'serious', t: "That was disgusting. Forget I said it. Go inside before Park poisons your boyfriend with kindness." },
    { n: "She went down the path backwards so she could keep pointing at Solar the whole way, and at the gate she stopped and looked at the house for a second, the fogged window, the shape of Jungwon sitting very straight on the sofa, the dog's tail going in the hall, like she was taking a picture of it without her phone. Then she went to her grandmother's." },
    { place: 'Hanlim · Home · Living Room', time: 'Daytime', soft: true },
    // Christmas pass (Nov 11 2026): the shoes (people-crew-late.js's "The Enemy Is Among Us" photo), then lunch and the reservoir.
    { n: "When she came back in with the bear under her arm, Jihoon was crouched in the hall over the shoe mat with his phone out, very low, very still, like a wildlife photographer who'd found something rare in a bush." },
    { s: 'solar', f: 'surprised', t: "What are you *doing*?" },
    { s: 'jihoon', f: 'neutral', t: "Documenting. For the archive. Look at them, Sol. Toes level. Like a hotel. Like they're waiting to be called up to the front desk." },
    { s: 'solar', f: 'serious', t: "Jihoon, don't you dare post that." },
    { s: 'jihoon', f: 'happy', t: "I would never post it. I'm sending it to the group chat. That's different. That's *private.*" },
    { n: "He sent it. She heard the whoosh. He stood up, slid his phone into his back pocket, and walked into the living room with his hands in the air, all innocence, like a man who'd been stopped at a border and had nothing to declare, and in her own pocket her phone buzzed, and she didn't need to look at it to know what the caption said, and looked anyway." },
    { phone: [
      { from: 'jihoon', t: "jihoney: The Enemy Is Among Us" },
      { from: 'asahi', t: "asanoonecares: are those shoes parked" },
      { from: 'hyunsuk', t: "geniusuk: man" },
      { from: 'junkyu', t: "junkyute: they're so neat!!!!" },
      { from: 'jaehyuk', t: "jaehyukkie: Honestly, respect." }
    ], contact: "rip solar kim (she's fine probably)", group: true },
    { n: "Jihoon was a dream at lunch. That was the horrible part. He set the table without being asked. He knew where everything went. He told her mother the japchae was better than last year and her mother glowed. He fixed the drip under the kitchen sink that her father had been *getting to* since August with a butter knife and a hair tie. He said *please* and *thank you* like somebody's well-raised son, no voices, no bits. He was the nicest he'd been in a year." },
    { n: "Jungwon got quieter. With every nice thing Jihoon did, Jungwon got a little quieter and a little more polite, until he was sitting at the end of the table cutting his food into exact, identical squares and saying *thank you, this is wonderful* every time anyone passed him anything, in a voice so even it could've levelled a shelf. He was furious. She'd never seen him this furious. He was being so courteous about it that her father asked twice if he was feeling alright." },
    { n: "Then Jungwon put his chopsticks down, exactly parallel, and turned to her father the way you'd turn to an examiner when you've finally reached the question you revised for." },
    { ifFlag: 'epi-h-jw-reel', then: [
      { s: 'jungwon', f: 'neutral', t: "Sir. Can I ask what reel you use?" },
      { n: "Her father stopped chewing. Her father looked up from his plate with the expression of a man who has been waiting his whole life, in a world of people asking whether he'd caught anything, for somebody to ask him the right question." },
      { s: 'dad', f: 'surprised', t: "...Spinning. A Daiwa. It was my father's. The bail's been replaced twice." },
      { s: 'jungwon', f: 'neutral', t: "The forgiving one." },
      { s: 'dad', f: 'happy', t: "The *forgiving* one. Yes. Soyeon, he knows about the forgiving one." }
    ], else: [
      { s: 'jungwon', f: 'neutral', t: "Sir. Sol says you fish. At a reservoir. In the mornings." },
      { s: 'dad', f: 'neutral', t: "I do. I don't catch anything. Before you ask." },
      { s: 'jungwon', f: 'neutral', t: "I wasn't going to ask. I was going to ask what it's like when you don't." },
      { n: "Her father looked at him for a long second over the japchae, the way he looked at the water at six in the morning, she imagined, when it was flat and he couldn't tell yet what was under it." }
    ] },
    { n: "And that was it. Her father talked for twenty-two minutes. She timed it on the kitchen clock. The reservoir past the toll gate, the thermos, the folding stool with one short leg, the heron that came every morning and stood a little way down the bank judging him, the carp he'd put back in April after five hours, which he described the way other men described their children. Jungwon didn't say anything. He nodded. He asked one small, precise question every four minutes, exactly when her father needed one, and the rest of the time he listened with his whole face, the dimple out on one side the way it came out when he concentrated, like her father's reservoir was the most interesting problem anybody had ever set him." },
    { n: "Her mother watched this happen with her chin on her hand. Solar watched her mother watch it." },
    { n: "Jihoon watched all of it with a polite smile set so hard on his face it could have held up a shelf." },
    { s: 'jihoon', f: 'happy', t: "Abeoji. I've *been* to the reservoir." },
    { s: 'dad', f: 'neutral', t: "You were nine. You threw my bait in the water to see if the fish would come and eat it. You threw the whole box, Jihoon." },
    { s: 'jihoon', f: 'neutral', t: "And did they come?" },
    { s: 'dad', f: 'happy', t: "...They came." },
    { s: 'jihoon', f: 'happy', t: "Results. I get results." },
    { n: "Her father laughed, the big one, and pointed his chopsticks at him, and for a second it was every Christmas there'd ever been, Jihoon at the end of the table making her father laugh with his mouth full. Then her father turned straight back to Jungwon and said *so, the line weight*, and Jihoon's smile stayed exactly where it was, and Solar watched it stay there, and felt it in her stomach like a stone dropped into very still water." },
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
        { s: 'solar', f: 'serious', t: "Every morning." },
        { s: 'jihoon', f: 'happy', t: "That's so spiritual. I'm so moved. I have to lie down." }
      ] },
      { t: "(Let Jungwon answer.)", then: [
        { s: 'jungwon', f: 'neutral', t: "Mostly sweeping. And silence. A lot of silence." },
        { s: 'dad', t: "Solar? Silence?" },
        { s: 'jungwon', f: 'happy', t: "She struggled, sir. But she grew." },
        { n: "Her father laughed so hard he had to put his glass down. Her mother pressed her lips together and didn't laugh, and then did, and Jihoon stabbed a piece of beef like it had insulted his family." }
      ] },
      { t: "Mom, it's Christmas.", stat: { charm: 1 }, then: [
        { s: 'mom', t: "It's Christmas *after you were missing for nine days*, Solar." },
        { s: 'dad', t: "It's both. It can be both. Pass the japchae." }
      ] }
    ] },

    // Christmas pass (Nov 11 2026): the dishes (every route), then her room (by route).
    { place: 'Hanlim · Home · Kitchen', time: 'Daytime', soft: true },
    { n: "After lunch her mother stood up, looked down the table at the two boys on either side of it like a general reviewing troops she didn't entirely trust, and said one word." },
    { s: 'mom', f: 'neutral', t: "Dishes." },
    { n: "They were both on their feet before she'd finished it. Both of them, at the same time, the same speed, chairs scraping in unison, and they both reached for the same stack of bowls, and stopped with their hands on it, and looked at each other over it." },
    { s: 'jihoon', f: 'happy', t: "I'll wash." },
    { s: 'jungwon', f: 'neutral', t: "I'll wash." },
    { s: 'mom', f: 'neutral', t: "Jungwon washes. Jihoon dries. Jihoon knows where everything goes. Solar, put the cake plates out and then stay out of their way." },
    { n: "She said it in the voice she used to seat clients at a dinner so the two who'd sued each other weren't next to each other, and then she went into the living room to wake up her husband, and Solar was left standing between the fridge and the pantry with a stack of cake plates, and the two of them at the sink with their backs to her and their shoulders exactly the same height, which she'd never noticed, which seemed like the kind of thing that would make them both furious if she pointed it out." },
    { n: "She went into the pantry for the cake forks. She stayed in the pantry. It was a narrow cupboard with a light on a string and her mother's jars of plum syrup in rows, and from in there, with the door half shut, she could see a slice of the sink through the gap, and hear all of it." },
    { s: 'jihoon', f: 'neutral', t: "You're doing it wrong." },
    { s: 'jungwon', f: 'neutral', t: "I'm doing it in order. Glasses, then bowls, then pans. The water's cleanest at the start. You use the clean water on the things you drink out of." },
    { s: 'jihoon', f: 'neutral', t: "Her mom does pans first." },
    { s: 'jungwon', f: 'neutral', t: "Then her glasses are washed in pan water." },
    { s: 'jihoon', f: 'serious', t: "Don't tell her that." },
    { s: 'jungwon', f: 'neutral', t: "I wasn't going to." },
    { s: 'jihoon', f: 'neutral', t: "You were absolutely going to. You were going to say it at the table. Politely. With a fact in it." },
    { n: "Jungwon didn't answer that, which was an answer. He handed Jihoon a glass. Jihoon dried it and put it away without looking, top cupboard, second shelf, the left side, where the glasses had always gone. Jungwon watched him do it. He handed him another. Jihoon put that one away too, and then stacked the next two bowls as he dried them, nested, the rims turned in so they wouldn't chip, the way he'd always stacked them, every Christmas, for fifteen years." },
    // Nov 11 2026 (Kat): searchers know
    { s: 'jungwon', f: 'neutral', t: "You stack them the same way. Rims in. You did it at the dorm. Every night. Nobody asked you to." },
    { n: "In the pantry, Solar stopped breathing." },
    { n: "Jihoon's hands didn't stop. That was the thing she'd remember. They kept going, the towel round the bowl and round again, smooth, practised, and his voice when it came was light and bright and pleasant, the voice for her mother and for teachers and for anything he needed to step over." },
    { s: 'jihoon', f: 'happy', t: "I've never been in a dorm in my life. I'm a homeowner. Ask anyone." },
    { s: 'jungwon', f: 'neutral', t: "Okay." },
    { s: 'jihoon', f: 'neutral', t: "Don't." },
    { s: 'jungwon', f: 'neutral', t: "I said okay." },
    { n: "For a while there was only the water running and the clink of china, a bowl, a bowl, a pan lid, Jungwon washing in his exact order and Jihoon drying in his, two boys who'd sat on opposite sides of the same dorm lounge for a year and were now going to stand at the same sink and pretend one of them hadn't. Then Jihoon spoke again, lower, without the bright in it, so low she had to lean into the jars to catch it." },
    { s: 'jihoon', f: 'serious', t: "She doesn't eat when she's scared. She'll say she ate. She'll say it really well. Check the container after. If the container's full she didn't." },
    { s: 'jungwon', f: 'neutral', t: "I know." },
    { s: 'jihoon', f: 'neutral', t: "I know you know. I'm saying it anyway. Somebody has to say it in this house who isn't her mom." },
    { n: "Jungwon turned the tap off. He stood there with his hands on the edge of the sink, wet to the wrists, and looked at the window over it, at the snow on the sill, for a long second." },
    { s: 'jungwon', f: 'neutral', t: "She drinks water if you hand it to her. She won't get up and get it herself. She'll sit there thirsty for an hour rather than stand up." },
    { s: 'jihoon', f: 'neutral', t: "Since kindergarten." },
    { s: 'jungwon', f: 'neutral', t: "Thank you." },
    { s: 'jihoon', f: 'flustered', t: "Don't thank me. That's disgusting. I'm drying a bowl." },
    { n: "Solar shifted, just a little, to see better, and her elbow found a tin of something on the second shelf, and the tin found the floor." },
    { n: "The noise it made in the pantry was enormous. When she came out, holding the cake forks like a weapon and her face doing something she couldn't control, they were both facing the sink again, side by side, perfectly still, perfectly pleasant, scrubbing and drying with enormous dedication, like two portraits of boys doing dishes." },
    { s: 'jihoon', f: 'happy', t: "Merry Christmas, Jungwon." },
    { s: 'jungwon', f: 'neutral', t: "Merry Christmas, Jihoon." },
    { n: "Her mother came back in to find them like that, and looked at them, and looked at Solar with the forks, and narrowed her eyes at all three of them, very slowly." },
    { s: 'mom', f: 'serious', t: "Did you two fight?" },
    { s: 'jihoon', f: 'happy', t: "No, Eomeoni." },
    { s: 'jungwon', f: 'neutral', t: "No, ma'am." },
    { s: 'mom', f: 'neutral', t: "Mm." },
    { n: "Afterwards, when the cake was cut and everybody was back in the living room arguing about whether there was room for more, Solar found a glass of water on the arm of the sofa beside her that she hadn't poured. She looked up. Neither of them was looking at her. Both of them were very carefully looking at the cake." },
    { place: 'Hanlim · Home · Her Room', time: 'Daytime', soft: true },
    { n: "It was her mother who did it, in the end. At half past two, between the cake and the second pot of tea, she looked at Jungwon sitting on the very edge of the sofa with dog hair all over his good sweater and said, pleasantly, *Solar, why don't you show Jungwon where the bathroom is*, as if the bathroom were somewhere you needed to be shown, as if it weren't the first door at the top of the stairs." },
    { n: "Her father didn't look up from the fishing magazine Jungwon had somehow got him onto. He just said, to the magazine, in his mildest voice, the one for parallel parking." },
    { s: 'dad', f: 'neutral', t: "Door open." },
    { n: "Jungwon went red from the collar up, all at once, the way a thermometer goes in a cartoon. He followed her up the stairs very formally, a step and a half behind, both hands at his sides, like he was being shown to his seat at a ceremony." },
    { s: 'jungwon', f: 'flustered', t: "Nobody's ever said that to me before." },
    { s: 'solar', f: 'happy', t: "*Door open?*" },
    { s: 'jungwon', f: 'flustered', t: "Nobody's ever thought I'd be a problem. I've never been a problem in my life. I've been a *solution*. I've been on the council for two years." },
    { s: 'solar', f: 'happy', t: "Congratulations. You're a problem." },
    { n: "She pushed the door open and left it open, very wide, all the way back against the wall, so her father could hear it from the bottom of the stairs, and Jungwon stood in the doorway of her room and didn't come in for a second. He just looked." },
    { n: "She saw it the way he must have. The bed, unmade, Nana's dent still in the middle of it. The Sanrio pencil cup. The rom-com poster with the corner that kept peeling, held up now with three different kinds of tape. The calculus textbook on the desk, open to chapter six, with his own tiny neat handwriting in the margins from November, arrows, *you've got this*, the little dog drawn under the question she'd got wrong. Her clock. Her window, the snow on the sill. And on the back of the door, on a proper hanger now, not over the chair, a dark school jacket with a red armband pinned to the sleeve." },
    // Nov 11 2026 (Kat): searchers know
    { n: "He saw it last. She watched him see it. His face didn't change, not exactly, but it went very still, the competition stillness, and he walked over to the door and stood in front of the jacket and lifted the sleeve with two fingers, the armband, the four letters, like you'd lift the corner of a page to check the number." },
    { s: 'jungwon', f: 'neutral', t: "You kept it." },
    { s: 'solar', f: 'neutral', t: "I didn't know what else to do with it." },
    { n: "He'd been there. He'd seen it on her every night for a year, in a dorm lounge on the other side of something that wasn't a city, and now it was hanging on her bedroom door in Hanlim next to her dressing gown, and he was the only person in this house who knew what it was. He didn't say anything about that. He straightened the hanger instead, so it hung level, and smoothed the sleeve back down, and let it go." },
    { s: 'jungwon', f: 'neutral', t: "That's a good place for it. You can see it from the bed." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "She'd wrapped his present twice, because the first time it had looked like it had been wrapped by a raccoon, and the second time it had looked like it had been wrapped by a raccoon who was trying. She took it out from under her pillow and pushed it into his hands before she could think about it." },
      { s: 'solar', f: 'flustered', t: "It's stupid. Don't open it. Open it." },
      { n: "He opened it the way he did everything, the tape lifted at the corners so the paper wouldn't tear, the paper folded once and set on the desk. A water bottle. A big clear one, the litre kind, and down the side of it, in her handwriting, in black permanent marker, the times. *8AM. 10AM. NOON (are u drinking). 2PM (WON). 4PM (i can see u). 6PM (proud of u).* Three Sanrio stickers, slightly crooked. And a sticky note on the lid, in smaller writing, which he read with his reading face on." },
      { n: "*for comps. and the dizzy thing. and in general. - ur loyal vice pres*" },
      { n: "He looked at it for a long time. Then he laughed. Not the smothered one. The real one, the one he almost never let out where anyone could hear it, startled out of him, his head going down and the dimples coming out, both of them, deep enough to lose a coin in, and he put his free hand over his eyes like the bottle had personally attacked him." },
      { s: 'jungwon', f: 'happy', t: "*I can see u.*" },
      { s: 'solar', f: 'flustered', t: "I *can.* I have spies. Heeseung is a spy." },
      { s: 'jungwon', f: 'happy', t: "Heeseung's been a spy for two years. He doesn't have a bottle." },
      { n: "Then he stopped laughing. He looked at the bottle again, and at her, and his face did the slow, careful thing it did right before he said something he'd checked twice." },
      { s: 'jungwon', f: 'neutral', t: "Nobody's ever written the times down for me. They write down the scores." },
      { n: "She didn't decide to. She took a fistful of the front of his good sweater, the dog hair and all, and pulled, and he came, the bottle still in one hand, and kissed her back like he'd been waiting since the bench last night with the dog on her boot, which he probably had, which he'd probably counted." },
      { n: "Her desk was behind her. She found it with the backs of her thighs. His free hand found her waist and then, under the hem of her sweater, the small of her back, his fingers so cold off the sink water that she gasped against his mouth, and he started to pull them away, and she said *don't* into him, and he didn't. He held on. He held on like a boy who'd never once been allowed to hold on to anything he wanted for as long as he wanted it, careful and then not careful, the bottle knocking against the edge of the desk, the textbook sliding, chapter six going over onto the floor, the whole warm length of him leaning her back against the place where she'd done every bit of homework of her life." },
      { n: "Nana came in." },
      { n: "He didn't knock. He never knocked. He shouldered the already-open door so it hit the wall, walked to the exact middle of the rug, sat down, and looked at them, smiling, panting, the half of the red bow swinging off his collar like a medal, with the deep and total interest of a dog who'd been told there was a boy upstairs and had come to check on the boy's progress." },
      { n: "They broke apart. Jungwon's hair was in his eyes. His ears were the colour of the bow. He looked at Nana the way you'd look at a teacher who'd walked into the wrong classroom at the worst possible second." },
      { s: 'jungwon', f: 'flustered', t: "...Hello, Nana." },
      { s: 'mom', f: 'neutral', t: "Solar. The *door.*" },
      { n: "Her mother's voice, from the bottom of the stairs, not raised. It didn't need raising. It came up the stairwell like a draught." },
      { s: 'solar', f: 'flustered', t: "It's OPEN." },
      { s: 'mom', f: 'neutral', t: "Open it *more.*" },
      { n: "There was no more. It was against the wall. Jungwon picked chapter six up off the floor and put it back on the desk, open at the right page, and smoothed it flat, and picked up the water bottle, and held it against his chest in both arms like something he'd won at a fair, and went down the stairs ahead of her, a step and a half ahead, very formal, with his ears on fire and his hair still wrong and his sweater pulled out of shape at the front in the exact shape of her fist." },
      { n: "Her father didn't look up from the magazine. He turned a page." },
      { s: 'dad', f: 'neutral', t: "Found the bathroom?" },
      { s: 'jungwon', f: 'flustered', t: "Yes, sir. It's very nice. Thank you." }
    ], else: [
      { ifEpiRoute: 'jihoon', then: [
        { n: "She had his present under her pillow. She'd just got it out, and was holding it out to him, when somebody knocked twice on the open door, which was the most sarcastic thing she'd ever heard a door do." },
        { n: "Jihoon was leaning in the doorway with a tangerine, peeling it in one long spiral the way he'd always done it, the peel hanging off his fingers like a ribbon." },
        { s: 'jihoon', f: 'happy', t: "Hi. Your mom sent me. I'm the door." },
        { n: "He didn't wait to be asked in. He'd never once waited to be asked in, not since they were three. He walked straight past Jungwon and dropped onto her bed on his back, shoes on the duvet, the way he'd been doing it for fifteen years, and Nana came in behind him like he'd been called and climbed straight up onto his chest and lay down there like a rug." },
        { s: 'jihoon', f: 'happy', t: "Ah. My son. He knows where Father lies." },
        { s: 'jihoon', f: 'neutral', t: "Don't mind me. I'm furniture. Carry on. What's he getting? It's a book. It's a math book. You got him a harder math book." },
        { n: "He pointed at things with a tangerine segment while he talked, without looking, the way you'd point out the sights to tourists in a town you were born in. The poster, *peeling since ninth grade, she won't let anybody fix it, it's a whole thing*. The pencil cup, *from the Sanrio shop by the station, she cried when the handle broke, I glued it, you can see the glue*. The dent in the mattress, *that's my son's, not hers, she rents*. Jungwon stood in the middle of the rug with the present in his hands and listened to all of it very politely, the way he'd listened to her father's reservoir, and Solar watched him put every single piece of it somewhere and keep it." },
        { n: "Jungwon opened his present anyway. Carefully, the corners, the paper folded once. A water bottle, the litre kind, with the times down the side in her handwriting in black marker, *8AM, 10AM, NOON (are u drinking), 2PM (WON)*, three crooked Sanrio stickers, a sticky note on the lid." },
        { s: 'jihoon', f: 'happy', t: "A water bottle. Wow. Romantic." },
        { s: 'jungwon', f: 'neutral', t: "It is, actually." },
        { n: "He said it to the bottle, not to Jihoon, and not loudly, the way you'd give the correct answer to a question nobody had meant you to answer. Jihoon's tangerine stopped halfway to his mouth." },
        { n: "Nobody said anything for a second. Nana breathed. Downstairs, her father laughed at something in the magazine." },
        { s: 'jihoon', f: 'neutral', t: "...Sure." },
        { n: "He put the segment in his mouth and looked at her ceiling. There were glow-in-the-dark stars on it from when she was ten. He'd helped her put them up. He'd stood on her desk chair and she'd held it, and he'd made the Big Dipper wrong on purpose, and it was still wrong, right above where his head was now, and she watched him look at it." },
        { n: "Then he rolled off the bed, dog and all, and stood up, and brushed tangerine pith off his chains." },
        { s: 'jihoon', f: 'happy', t: "Okay. Door open, kids. I'm going to go fix your dad's sink again. It's not broken. I'm going to fix it anyway. It calms me." },
        { n: "He went. Nana went with him. Jungwon held the bottle in both hands and looked at the doorway for a while after it was empty, at the place a boy had walked through without being asked, and then at the stars on her ceiling, and found the wrong Big Dipper in about four seconds, and didn't say anything about that either." }
      ], else: [
        { n: "She had his present under her pillow, wrapped twice, badly both times, and she pushed it into his hands and told him not to open it and then to open it. A water bottle, the litre kind, the times written down the side in her handwriting in black marker, *8AM, 10AM, NOON (are u drinking), 2PM (WON), 4PM (i can see u)*, three crooked Sanrio stickers, a sticky note on the lid that said *for comps. and the dizzy thing. - ur loyal vice pres*." },
        { n: "He laughed. The real one, startled out of him, head down, both dimples. Then he leaned over the bottle, very deliberately, and kissed her once, carefully, at the corner of her mouth, like signing something at the bottom of a page, and stepped back, and his ears were red, and down at the bottom of the stairs her father turned a page of the magazine very loudly." },
        { s: 'jungwon', f: 'flustered', t: "Thank you. I'll drink at four. You'll see me." },
        { s: 'solar', f: 'happy', t: "I'll know." },
        { s: 'jungwon', f: 'happy', t: "You'll have spies." },
        { n: "He carried it downstairs like a trophy, both hands, and set it down on the coaster next to his tea, the exact centre, and every so often for the rest of the afternoon she caught him looking at it, at *4PM (i can see u)*, and then at her, and then very quickly at something else." }
      ] }
    ] },

    // By route.
    { ifEpiRoute: 'jungwon', then: [
      { place: 'Hanlim · Home · Porch', time: 'Daytime', soft: true },
      { music: 'epi-h-romance' },
      { n: "He had to be home by five. He announced it at 4:20 the way you'd announce a flight, and her mother insisted he take half the cake, and Jihoon said *drive safe, Jungwon* from the sofa in a voice like a hand waving from a lifeboat, and Solar walked him out onto the porch and shut the door behind them, hard, on all of it." },
        { n: "It was snowing again. The porch light was on even though it was still day. He stood on the top step holding half a cake in a bakery box and breathed out, long, white, like he'd been holding it in since one o'clock." },
      { s: 'jungwon', f: 'happy', t: "He's very good with your parents." },
      { s: 'solar', f: 'happy', t: "He's had fifteen years." },
      { s: 'jungwon', f: 'happy', t: "I've had one afternoon." },
      { s: 'jungwon', f: 'flustered', t: "I'm going to need more afternoons." },
      // Christmas pass (Nov 11 2026): the container, the porch a little longer.
      { n: "He wasn't only holding the cake. Under the bakery box, flat against his chest, was a blue plastic container with a snap lid, warm through, packed so full of japchae and galbi the lid bulged, which her mother had put into his hands in the hall without a word and then, when he tried to say something, had put her hand flat on top of the lid, like a seal, and walked away." },
      { s: 'solar', f: 'happy', t: "She gave you the container." },
      { s: 'jungwon', f: 'neutral', t: "She gave me a container. I don't know what it means. Is it good? It feels good. It also feels like a test." },
      { s: 'solar', f: 'happy', t: "It's both." },
      { s: 'jungwon', f: 'neutral', t: "Everything in your house is both. The cocoa was both." },
      { n: "He looked down at the container like it might tell him the answer if he looked hard enough. The water bottle was sticking out of his coat pocket, the 2PM side out, *(WON)*, and every time he moved it knocked against the porch post like it was reminding him." },
      { s: 'jungwon', f: 'neutral', t: "Your father said *door open.*" },
      { s: 'solar', f: 'flustered', t: "I know. I was there. I was very much there." },
      { s: 'jungwon', f: 'flustered', t: "I'm going to think about that for the rest of my life. Not the door. That he thought he had to say it." },
      { s: 'solar', f: 'happy', t: "You're a problem now, Won. You said it yourself." },
      { s: 'jungwon', f: 'happy', t: "I'm a problem with a container." },
      { n: "Then he put down the cake on the railing, carefully, level, and took the wrapped present out from under his arm, where it had been the entire day, through the tea and the cocoa and the japchae and the temple, like he'd forgotten it was there, which he hadn't, which he'd been holding on to like a rope." },
      { n: "She opened it on the step. A scarf. Soft and thick and dark green, the colour of a pine tree in the snow, folded with the kind of precision that meant he'd folded it himself, more than once, until the corners were right." },
      { s: 'jungwon', f: 'neutral', t: "It's green." },
      { s: 'solar', f: 'flustered', t: "Won, it's—" },
      { s: 'jungwon', f: 'flustered', t: "Because of your eyes. That's not embarrassing. It's accurate. They're green and it's green. It's just a fact." },
      { n: "She put it on. He watched her do it wrong, and then reached over and fixed it, tucking one end under the other at her collarbone with the same care he used for the bake sale tin, for chapter six, for anything he'd decided was his to get right, and then left his hands there a second, on the scarf, at her throat, warm." },
      { s: 'jungwon', f: 'happy', t: "There. Now it's right." },
      { n: "She kissed him on the porch. In front of the window. She didn't check. She found out later from her mother that her father had been standing right there in it, with a plate of cake, watching, and that when Jungwon pulled back and saw him, Jungwon had bowed to the window. Ninety degrees. Very formal. Her father had bowed back." },
      { n: "She watched him go down the path with half a cake held level in front of him and a blue container under it and a water bottle knocking against his hip, getting snow on his good shoes, and at the gate he stopped and turned around and looked at the house, the whole of it, the fogged window and the porch light and her on the step in his scarf, the way Cherry had looked at it at lunchtime. Like he was taking a picture of it without his phone." },
      { n: "Then he went the block home to his own house, where it would be very quiet, at exactly the speed of a boy who'd promised to be in by five and was going to be, with forty seconds to spare, because he'd timed it." },
      { bond: { jungwon: 1 } }
    ], else: [
      { ifEpiRoute: 'jihoon', then: [
        { place: 'Hanlim · Home · Porch', time: 'Evening', soft: true },
        { music: 'epi-h-jihoon' },
        { n: "Jungwon left at 4:20 with half the cake, a blue container of leftovers her mother had pressed into his hands in the hall like a summons, and a bow for everyone, including Nana. Jihoon stayed. Jihoon always stayed. Her parents went to watch the movie they watched every Christmas and fell asleep in it inside of twenty minutes, the way they did every Christmas, and Jihoon picked up two of the paper cups, still a quarter full and stone cold, and jerked his head at the front door." },
        { n: "They sat on the steps. The same steps. Every year, since they were small enough that their feet didn't reach the bottom one, with the same cocoa from the same stand going cold in their hands, watching the street lights come on, because that was the tradition, that was the whole tradition, there wasn't any more to it than that." },
        { s: 'jihoon', f: 'neutral', t: "Your boyfriend drinks like a hostage." },
        { s: 'solar', f: 'happy', t: "You gave him your cup to be a dick." },
        { s: 'jihoon', f: 'happy', t: "I gave him my cup to be gracious. He took it to be a dick. Very different." },
        // Christmas pass (Nov 11 2026): his text, the container, her present.
        { n: "Her phone buzzed in her coat. She knew who it was before she looked, and so did he, because he made a long, slow, suffering noise through his nose, like a tyre going down." },
        { phone: [
          { from: 'jungwon', t: "home. 4:59." },
          { from: 'jungwon', t: "your mother's container is on my desk. i don't know what to do with it. it's like an exhibit." },
          { from: 'jungwon', t: "thank you for today. please thank your parents. please tell jihoon the cocoa was good. it was." }
        ], contact: 'Won' },
        { n: "Jihoon read it over her shoulder. He didn't even pretend not to. He read it all the way to the end, and then read the last line again, and his face did something complicated in the streetlight that he got rid of almost before it had finished happening." },
        { s: 'jihoon', f: 'neutral', t: "*It was.* With a full stop. He types like a ransom note." },
        { s: 'solar', f: 'happy', t: "He's being *nice*, Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "He's being correct. It's different." },
        { n: "He drank. He looked at the street. Then, not looking at her, in a voice like he was reading off the side of a cereal box," },
        { s: 'jihoon', f: 'neutral', t: "Tell him the container's a test. He has to bring it back with something in it. Not empty. Never empty. Your mom will die. She'll die and then she'll never mention it again, which is worse." },
        { s: 'solar', f: 'surprised', t: "How do you know that?" },
        { s: 'jihoon', f: 'happy', t: "Sol. I've had fifteen years of containers. I've returned that blue one forty times. There's a crack in the lid by the hinge. I made the crack." },
        { n: "She didn't type it. Not yet. He'd ask, later, in the dark, in full sentences, she knew he would, and she'd tell him then, and she wouldn't say who'd told her. Jihoon watched her put the phone away without answering, and knew exactly what she was saving it for, and drank his cold cocoa, and didn't say anything either." },
        { n: "The snow was coming down slow and blue in the streetlights. He drank his cold cocoa like it was hot. She leaned against his shoulder without thinking about it, the way she'd leaned against it a thousand times, and felt him go still, and then not move away." },
        { s: 'jihoon', f: 'sad', t: "Your mom hugged me like I'd been gone." },
        { n: "His voice did something on the last word. A small thing, a catch, like a sleeve on a nail." },
        { s: 'jihoon', f: 'sad', t: "I wasn't gone. I was home. I'm always home. I was just..." },
        { n: "He didn't finish. He looked at his cup. She waited, the way you wait for a cat to come out from under a bed, not reaching." },
        { s: 'jihoon', f: 'happy', t: "...Anyway, she hugs good. Your dad still can't fix a sink. I'm the son now. It's done. I've taken over. Tell him gently." },
        { s: 'solar', f: 'sad', t: "Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "Drink your cocoa. It's a tradition. You're ruining the tradition with your face." },
        { n: "She drank some, to make him stop. Then she put the cup down on the step and dug in her coat pocket, the one without the can, and held out a small flat package wrapped in the same paper as everyone else's, slightly crushed from being sat on." },
        { s: 'jihoon', f: 'surprised', t: "What is that." },
        { s: 'solar', f: 'happy', t: "It's your present, dumbass. It's Christmas." },
        { s: 'jihoon', f: 'neutral', t: "We don't do presents. We do cocoa. The cocoa *is* the present. That's the whole—" },
        { s: 'solar', f: 'happy', t: "Open it." },
        { n: "He opened it like it might go off. It was an air freshener. A little cardboard pine tree on a string, dark green, the expensive kind from the car wash on the main road, still sealed in its plastic, and on the back of it, in her handwriting, in marker, *REAL PINE (fake) (but new)*." },
        { n: "He looked at it for a long time. Long enough that she started to worry it was stupid. It was stupid. That was the point. His was a grey cardboard ghost of a tree that had stopped smelling of pine sometime in September, and he'd kept it hanging off his mirror anyway, every single day since, because he never threw anything away that had been in that car when the car was new." },
        { s: 'jihoon', f: 'neutral', t: "...It's for the car." },
        { s: 'solar', f: 'happy', t: "Your car smells like fries, Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "*Vintage* fries." },
        { n: "He didn't open the plastic. He held it, the string looped round one finger, and turned it over and read the back again in the streetlight, *(but new)*, and his thumb went over the letters once, the way you'd go over a word on a page to make sure it was really there." },
        { s: 'jihoon', f: 'sad', t: "I'm not taking the old one down." },
        { s: 'solar', f: 'sad', t: "I know." },
        { s: 'jihoon', f: 'neutral', t: "I'm hanging this one next to it. They can be friends. The old one can teach it things." },
        { n: "He put it in the pocket of his jacket. Not the other one, the one his hand kept not going to. This one. He put it in carefully, and kept his hand on the outside of the pocket for a second, flat, like he was making sure it would stay." },
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
        { n: "The council saw him. The council saw him on the sofa, with her father, with dog hair all over his good sweater. There was a long silence on the step." },
        { s: 'niki', f: 'surprised', t: "Won is meeting the *parents*?" },
        { s: 'sunoo', f: 'happy', t: "On *Christmas*?" },
        { s: 'jay', f: 'neutral', t: "And Park Jihoon's here. Oh, this is *bad*. This is so bad. I'm coming in." },
        { n: "Her mother fed all of them. Her mother looked at the seven boys on her step and the croissants and the reindeer dog, and at Solar, and at the ceiling, and said *shoes off* in the exact voice Solar had heard in her head every time she'd ever thought about bringing anyone home, and then went and got more plates." },
        { n: "Nana met Layla in the front yard. It was the most important meeting in the history of either dog. They circled each other three times in the snow, Nana enormous and white and silly-legged and completely beside himself, Layla small and dignified in her antlers, and then Nana lay down in the snow and rolled over and showed her his entire stomach, and Layla sniffed it once, thoughtfully, and sat down next to him like she'd decided to allow it." },
        { s: 'jake', f: 'happy', t: "She likes him. Oh my God. She *likes* him. Heeseung, put it in the minutes." },
        { s: 'heeseung', f: 'neutral', t: "*Dog date. Commenced. Three-fifteen p.m. Successful.*" },
        { n: "Sunghoon came and stood next to her on the step, watching the dogs, hands in his coat pockets, and said, in a voice so casual it had clearly been rehearsed in a mirror, *is Cherry coming, by any chance, not that Sunghoon is asking*." },
        { s: 'solar', f: 'neutral', t: "She's at her grandma's. Why?" },
        { s: 'sunghoon', f: 'flustered', t: "No reason. Sunghoon is simply making conversation. Soon." },
        { s: 'solar', f: 'serious', t: "Soon *what*, Sunghoon." },
        { s: 'sunghoon', f: 'neutral', t: "Soon." },
        { n: "He went inside. Through the window she watched Jihoon hand Niki his cup of cocoa with a big friendly smile and Niki drink it suspiciously, and Jay and Jungwon sit on opposite ends of the sofa like bookends, and Sunoo telling her father about the temple with his eyes closed so his face couldn't tell, and Heeseung writing all of it down." },
        // Christmas pass (Nov 11 2026): the council in the Kims' living room.
        { place: 'Hanlim · Home · Living Room', time: 'Daytime', soft: true },
        { n: "By four the living room had more boys in it than chairs. Niki was on the floor with his back against the sofa and a plate of galbi balanced on his knees, telling her father in great and invented detail about the temple's head monk, who he said could punch through a door, while her father nodded seriously and fed Nana bits of his rice cake under the table where her mother couldn't see." },
        { s: 'niki', f: 'happy', t: "Like, *through* it, Abeonim. Not open it. Through." },
        { s: 'dad', f: 'neutral', t: "Why would a monk punch through a door?" },
        { s: 'niki', f: 'neutral', t: "To teach us. About doors." },
        { s: 'heeseung', f: 'serious', t: "Niki." },
        { s: 'niki', f: 'happy', t: "*Sweeping.* Silence. Bell at four. Lots of doors, though." },
        { n: "Sunoo had found her mother in the kitchen within ten minutes and was now wearing her apron, the spare one with the strawberries, and plating the croissants on her good plates while she told him which ones, and laughing at something she'd said, and Solar heard her mother laugh back, the real one, the one from before the retreat, and had to go and stand in the hall for a second with her hand on the radiator." },
        { s: 'sunoo', f: 'happy', t: "Eomeoni, Halmeoni says you're welcome at Yeobo's any time! She says Sol eats like a bird and somebody should *do something*." },
        { s: 'mom', f: 'happy', t: "*Thank* you. Tell your grandmother I've been saying that for eighteen years." },
        { n: "Jay and Jake were on the floor by the tree with the dogs, Layla asleep in the crook of Jake's knees in her antlers and Nana asleep on most of Jay, who was lying very still with the face of a man who had accepted his fate. Sunghoon had found the piano bench nobody used and was sitting on it with excellent posture, looking out at the front path through the window, in case anybody with boots and a white bow came up it, which nobody did." },
        { n: "Jihoon was in the kitchen doorway with his cocoa. He'd given Niki his cup and then got himself another one from somewhere, she didn't know where, he always got another one from somewhere, and he was watching the room the way he watched a show he'd seen before and didn't like the new cast of. When Jake laughed at something he laughed too, a second late. When Niki said *Hoon-hyung, come sit*, he said *I'm good here* with a big smile and didn't move." },
        { n: "She went and stood next to him in the doorway. She didn't say anything. He didn't either. After a while he bumped her shoulder with his, once, the way he'd done it in the lunch line since they were six, and drank his cocoa, and that was all, and she stayed there anyway until the cup was empty." },
        { n: "At 4:20 Jungwon stood up. He'd timed it. She could see him having timed it, the watch, the small private nod to himself. Her mother put a blue plastic container of leftovers into his hands in the hall without a word, warm through, the lid bulging, and when he tried to say something she put her hand flat on top of the lid like she was sealing it, and went back to the kitchen." },
        { n: "Solar walked him to the door. Behind them, in the living room, the conversation stopped completely. Seven heads did not turn round. She could feel them not turning round. Somebody, probably Jake, whispered *say Monkees*." },
        { s: 'jungwon', f: 'neutral', t: "I'm going to be home at four fifty-nine." },
        { s: 'solar', f: 'happy', t: "Of course you are." },
        { s: 'jungwon', f: 'neutral', t: "Your mother gave me a container." },
        { s: 'solar', f: 'happy', t: "She likes you." },
        { s: 'jungwon', f: 'flustered', t: "It feels like a test." },
        { s: 'solar', f: 'happy', t: "It's both." },
        { n: "He looked at the container. He looked at the living room doorway, where a strip of Niki's face was visible, at floor level, watching. He looked at her. Then, very quickly, he leaned down and kissed her on the cheek, beside the stud, so fast it was almost an accident, and was out of the door and halfway down the path before the living room had finished screaming." },
        { s: 'niki', f: 'happy', t: "LMAOOO." },
        { s: 'heeseung', f: 'neutral', t: "*Four twenty-one. The president departed. With leftovers.*" },
        { n: "The council stayed until dark. They stayed through the second pot of tea and the third, and the last of the croissants, and her father's slideshow of the reservoir on the television, which they watched with total respect, and Sunoo cried a little at the heron. When they finally went, in a heap again, carefully, down the salted step, the house was so quiet afterwards she could hear the tree lights clicking on their timer, red, green, red." },
        { bond: { council: 1 } }
      ] }
    ] }
  ] },

  // ───────────────────────────── 12/25, late: Christmas night, her room (Christmas pass, Nov 11 2026) ─────────────────────────────
  // No consumes: 12/25 is a lateOpen night, so the late screen's people follow it (Hyunsuk's 'the long way' texts at twenty to
  // midnight; every branch here ends by about half past eleven with her awake). The route is locked by now (ifEpiRoute).
  { id: 'epi-h-xmas-night', date: '12/25', slot: 'late', title: 'christmas night', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
    { music: 'epi-h-late' },
    { n: "At ten o'clock on Christmas night the house had gone quiet the way it only went quiet once a year, her parents asleep downstairs in front of the film they fell asleep in every Christmas, the television still murmuring to nobody, the tree blinking on its timer through the banisters, red, green, red, and Solar sat on her bedroom floor in her pyjamas with everything she'd been given spread out around her on the rug like the contents of a pocket turned out." },
    { n: "The planner, dark red, empty. Her father's hat, ear flaps and pom-pom and the sheep he swore was a Samoyed. Cherry's bear, pink, a rainbow on its stomach, with a note round its neck on a ribbon that said *ON YOUR PILLOW OR ELSE* in Cherry's handwriting, which she obeyed, immediately, because she wasn't stupid." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "And the scarf. She hadn't taken it off until her mother had looked at her at dinner, eating galbi in a wool scarf in a heated house, and said nothing in a way that said everything. Now it was folded on her pillow next to the bear, dark green, folded the way he'd folded it, corners right. She'd tried three times to fold it like that again herself and given up." }
    ] },
    { n: "Nana was lying across all the tissue paper, all of it, every sheet, like he'd been assigned to guard it, with the plush croissant between his front paws. Every few minutes he squeaked it, once, and looked at her to see if she'd noticed. She had. She always had." },
    { ifEpiRoute: 'jungwon', then: [
      { music: 'epi-h-romance' },
      { n: "Her phone went at 10:41. His minute. And again, the faint hollow echo of tile." },
      { s: 'solar', f: 'happy', t: "You're in the bathtub." },
      { s: 'jungwon', f: 'neutral', t: "I'm in the bathtub. The container's on the edge of it. I didn't want to leave it in my room in case my mother asked what it was." },
      { s: 'solar', f: 'surprised', t: "You *hid* my mom's japchae?" },
      { s: 'jungwon', f: 'neutral', t: "I ate the japchae. I'm hiding the container. It's evidence." },
      { s: 'solar', f: 'happy', t: "Of what?" },
      { s: 'jungwon', f: 'neutral', t: "That somebody fed me." },
      { n: "He said it like a joke. It wasn't quite one. She lay down on the rug on her back next to the dog, in the tissue paper, with the phone on her chest, the way she'd lain in bed last night, and looked at the glow-in-the-dark stars on her ceiling that had been up there since she was ten." },
      { s: 'solar', f: 'neutral', t: "What did you tell her? Your mom. Where you were." },
      { s: 'jungwon', f: 'sad', t: "Sunoo's. Lunch at Sunoo's grandmother's." },
      { n: "A pause, with tile in it." },
      { s: 'jungwon', f: 'sad', t: "That's two this week. I'm keeping count. I don't like that I'm good at it." },
      { s: 'solar', f: 'sad', t: "Won." },
      { s: 'jungwon', f: 'neutral', t: "I'm not sorry I went. I want that to be clear. I'm sorry about the counting." },
      { n: "She didn't know what to say to that, so she didn't say anything, and he let her not say it, and they lay there in two different rooms a block apart listening to each other breathe, and Nana squeaked the croissant." },
      { s: 'jungwon', f: 'neutral', t: "Your house is loud." },
      { s: 'solar', f: 'happy', t: "Sorry." },
      { s: 'jungwon', f: 'neutral', t: "No. I liked it. Everybody's in every room. Nobody shuts a door. Your father talks to the dog in full sentences. Your mother put more on my plate twice without asking if I wanted it." },
      { s: 'jungwon', f: 'sad', t: "Nobody's done that since I was small. Put more on without asking. Like they'd decided I'd want it." },
      { n: "She turned onto her side and put her face in Nana's fur so the phone couldn't hear what her face was doing, and Nana, who could hear everything, thumped his tail once against the tissue paper, very loud." },
      { s: 'solar', f: 'sad', t: "She'll do it every time now. You know that. You're in the system." },
      { s: 'jungwon', f: 'happy', t: "Good. I'll eat it every time." },
      { s: 'jungwon', f: 'neutral', t: "Sol." },
      { s: 'solar', f: 'neutral', t: "Mm." },
      { s: 'jungwon', f: 'flustered', t: "I keep thinking about your desk." },
      { n: "She sat straight up. Nana's head came up off the croissant." },
      { s: 'solar', f: 'surprised', t: "*Won.*" },
      { s: 'jungwon', f: 'flustered', t: "The textbook. Chapter six went on the floor. I'm worried about the spine. It was already cracked at the chain rule." },
      { s: 'solar', f: 'flustered', t: "You are *not* thinking about chapter six." },
      { n: "There was a very long silence from the bathtub." },
      { s: 'jungwon', f: 'flustered', t: "...No." },
      { n: "She lay back down on the rug with her hand over her eyes and laughed until it hurt, silently, so she wouldn't wake her parents, and down the line he was laughing too, the smothered kind, into a sleeve, a boy in an empty bathtub with a container on the edge of it, laughing on Christmas night at something that wasn't a joke at all, and they both knew it." },
      { s: 'solar', f: 'happy', t: "Come over." },
      { s: 'jungwon', f: 'serious', t: "I can't. The stairs creak. The front door beeps. My mother can hear the front door beep from inside a dream." },
      { s: 'solar', f: 'happy', t: "Climb out the window." },
      { s: 'jungwon', f: 'serious', t: "I can't climb, Sol. I've never climbed anything in my life. I'd get onto the garage roof and lose my nerve and they'd find me there in the morning, frozen, holding a container." },
      { choose: [
        { t: "I liked you in my room.", stat: { courage: 1 }, then: [
          { s: 'solar', f: 'flustered', t: "I liked you in my room. With the door open and everything." },
          { n: "The tile went quiet. Not the empty kind. The kind where somebody has stopped breathing for a second so they can hear something properly the first time." },
          { s: 'jungwon', f: 'neutral', t: "I liked being in it." },
          { s: 'jungwon', f: 'flustered', t: "I liked it more with the door open. I'm surprised by that. I'm going to think about why." }
        ] },
        { t: "One day I'm going to come to your window.", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'happy', t: "One day I'm going to come and stand under your window. In the snow. Like a movie." },
          { s: 'jungwon', f: 'neutral', t: "It'll be minus eleven. It's always minus eleven in those movies. Nobody ever mentions it." },
          { s: 'solar', f: 'happy', t: "Will you come down?" },
          { n: "He thought about it. She could hear him thinking about it, the garage roof, the drainpipe, the whole sum of it, all the way to the end." },
          { s: 'jungwon', f: 'neutral', t: "I'll leave a light on. That's all I'm promising tonight." }
        ] }
      ] },
      { n: "At quarter past eleven something changed on his end of the line. A door somewhere in his house, far off. He went completely still, the way Maeumi went still when he heard the car." },
      { s: 'jungwon', f: 'neutral', t: "She checks at twenty past. I have to be in bed looking asleep. I'm very good at looking asleep. I've had a lot of practice." },
      { s: 'jungwon', f: 'happy', t: "Merry Christmas, Sol. That's two. I said it last night too. I'm going to say it every year now, so you can count them." },
      { n: "The line went to nothing, so slowly she didn't hear the click. She sat on the rug in the tissue paper with the dog, and looked at the scarf on her pillow, folded the way he'd folded it, and didn't feel even slightly like sleeping, and somewhere a block away a boy was lying very straight in his bed with his eyes shut, looking asleep, holding very still for a door, and smiling, probably, in the dark, where nobody could see it to make him stop." }
    ], else: [
      { ifEpiRoute: 'jihoon', then: [
        { music: 'epi-h-jihoon' },
        { n: "At half past ten something hit her window." },
        { n: "Soft. A thud and a hiss, and a white starburst on the glass, slowly sliding. Then another one. Nana was off the tissue paper and at the window before the second one landed, paws on the sill, his whole back half going, whining in the high thin voice he only had for one person, which was how she knew before she'd even got up." },
        { n: "Snowballs at her window. The old signal. They hadn't used it since middle school, since he'd got a phone and then a licence and then a lot of things she didn't like to count, but they'd never once retired it, and she knew the second thud the way she knew his doorbell ring, two long, one short." },
        { n: "He was standing in the side yard under her window in the snow, no hat, his hands red, his breath going up white, holding a third snowball he'd clearly been about to throw and then hadn't. He lifted it. He looked at it. He put it down very gently on top of the fence post, like he was setting down a glass." },
        { phone: [
          { from: 'jihoon', t: "back door" },
          { from: 'jihoon', t: "or i will throw the third one. i have it ready. it's on the fence. It Is Watching You" }
        ], contact: 'jihoney' },
        { n: "She let him in through the back door in her socks, past the kitchen and the dark living room where her parents were asleep sitting up with the credits rolling over their faces, and he went up the stairs ahead of her the way he'd gone up them a thousand times, skipping the fourth step, the one that creaked, without having to think about it, and she watched him skip it and felt something in her throat she pushed away." },
        { n: "In her room he did what he'd always done. He stood by her desk and emptied his pockets onto it, one thing at a time, the way he'd done since they were small and his pockets had held marbles and gum and stolen sugar packets: his keys, his wallet, a lighter, gum, the new air freshener still in its plastic. He lined them up. Then his hands were empty, and he looked at them, and then he looked at her looking at the desk." },
        { s: 'jihoon', f: 'neutral', t: "I left it in the car." },
        { n: "He said it flat, to the desk, before she'd asked. Before she could decide whether to." },
        { s: 'jihoon', f: 'neutral', t: "Before you look at me like that. I'm telling you. It's in the car. I didn't bring it in your house. I wouldn't bring it in your house." },
        { s: 'solar', f: 'sad', t: "Okay." },
        { s: 'jihoon', f: 'neutral', t: "Don't say okay like that." },
        { s: 'solar', f: 'sad', t: "How do you want me to say it?" },
        { s: 'jihoon', f: 'happy', t: "Like Jungwon. *Okay.* Flat. Like a fact on a test. No feelings in it anywhere. You'd hate it." },
        { n: "He lay down on her rug. Flat on his back, in the middle of the tissue paper, the way he'd lain on her floor through every sleepover they'd ever had until her mother had said they were too old for sleepovers, at thirteen, and then a year later had stopped saying it, without ever explaining why, because everybody knew why. Nana climbed straight onto his chest, sixty pounds, and lay down, and sighed, and Jihoon said *oof* and put both arms round him and shut his eyes." },
        { s: 'jihoon', f: 'neutral', t: "The house is very loud tonight." },
        { n: "It wasn't. She knew it wasn't. His house was never loud. It was the quietest house on the street, a whole house of rooms nobody went into, with the photographs on the shelf facing the room, dusted, and one lamp left on so it looked like somebody was home besides him. He meant the other thing. He meant Christmas night in it. She knew the rule. She'd known it for five years. She didn't say anything about his house." },
        { s: 'solar', f: 'neutral', t: "You can stay a while." },
        { s: 'jihoon', f: 'neutral', t: "I know I can. I'm not asking. I'm informing you." },
        { n: "She turned the lamp off and got into bed, and lay on the edge of it, looking down at him in the dark. The streetlight came in round the curtain and lay across the floor and across him, and across the dog on him, and on the ceiling above them both the glow-in-the-dark stars came out one by one as her eyes got used to it, pale green, the Big Dipper wrong, the way he'd put it up when they were ten." },
        { s: 'jihoon', f: 'happy', t: "It's still wrong." },
        { s: 'solar', f: 'happy', t: "You did it on purpose." },
        { s: 'jihoon', f: 'neutral', t: "I did it artistically. There's a difference." },
        // Nov 11 2026 (Kat): searchers know (and Jihoon's denial, HOAX ruling 5: he says he wasn't there)
        { s: 'solar', f: 'neutral', t: "You used to do this at the dorm. On the lounge floor. When you couldn't sleep. You'd lie there with your arms out and count the ceiling tiles until somebody—" },
        { s: 'jihoon', f: 'neutral', t: "What dorm." },
        { n: "He didn't open his eyes. He said it lightly, pleasantly, the way you'd say *bless you* to a stranger, and the whole room heard what it cost him to keep it that light, and she heard it too, and she let it go, because she always let it go, because that was the oldest deal they had, older than the cocoa." },
        { s: 'jihoon', f: 'neutral', t: "I don't know her. I've never been in a dorm in my life. Go to sleep, Sol." },
        { n: "She didn't go to sleep. She let her hand hang off the edge of the bed, in the dark, over the side, not reaching, just there, the way she'd done when they were small and she was scared of whatever was under the bed and he'd been on the floor beside it, and he was the thing under the bed, he'd said, so there was nothing to be scared of." },
        { n: "For a long time nothing happened. Nana snored. The tree blinked downstairs through the gap under the door, red, green, red." },
        { n: "Then his hand came up out of the dark, off the dog, and found hers, and held it. Not tight. Just held it, his fingers still cold from the snowballs, his thumb resting across her knuckles, not moving, the way you'd rest your hand on a railing at the top of some stairs." },
        { s: 'jihoon', f: 'neutral', t: "Don't make it weird." },
        { choose: [
          { t: "(Hold on.)", stat: { kindness: 1 }, then: [
            { n: "She held on. She didn't say anything. She held on, and after a while she felt his hand stop being careful, felt it take the weight of itself, the way a person takes the weight of themselves in a chair they've decided is safe." },
            { s: 'jihoon', f: 'sad', t: "...You're making it weird with your hand." },
            { s: 'solar', f: 'sad', t: "You're the one holding it." },
            { s: 'jihoon', f: 'neutral', t: "That's a technicality." },
            { n: "He didn't let go. Neither of them said anything else for a long time, a boy on her floor and a dog on the boy and her hand in his over the edge of the bed, and it was the quietest she'd heard him be in a year, and she didn't know if he was asleep, and she didn't check." }
          ] },
          { t: "(Let him let go first.)", then: [
            { n: "She didn't hold on and she didn't pull away. She left her hand where it was and let him decide, and she could feel him deciding, the small shift of his fingers, there, and there, and then, very slowly, after a long time, letting go, one finger at a time, like setting something down that might break." },
            { s: 'jihoon', f: 'sad', t: "Thanks." },
            { s: 'solar', f: 'sad', t: "For what?" },
            { s: 'jihoon', f: 'neutral', t: "For not making it weird. Go to sleep." }
          ] }
        ] },
        { n: "At half past eleven he sat up. Nana slid off him onto the tissue paper in one long white avalanche and didn't wake." },
        { s: 'jihoon', f: 'neutral', t: "Okay. I'm going home. Somebody has to sleep in that house. It gets ideas otherwise." },
        { n: "He stood and put everything back in his pockets in the same order, keys, wallet, lighter, gum, the air freshener last, and kept his hand on the outside of that pocket for a second, flat, the way he had on the step." },
        { s: 'jihoon', f: 'neutral', t: "Suk's driving round. He does that on Christmas. He doesn't think anyone knows. I told him you'd be up." },
        { s: 'solar', f: 'surprised', t: "Jihoon." },
        { s: 'jihoon', f: 'neutral', t: "Go with him or don't. He needs somebody in that car who isn't me. I'm a lot. I'm aware. It's part of my charm." },
        { n: "He went down the stairs in the dark, skipping the fourth step, and she heard the back door open and shut so softly it was barely a sound at all. From her window she watched him cross the side yard. At the fence he stopped and picked up the third snowball off the post where he'd left it, and looked up at her window, and weighed it in his hand, and then, very gently, put it in his jacket pocket instead, and went." }
      ], else: [
        { music: 'epi-h-goofy' },
        { n: "Her phone had not stopped since the council had gone home. It had stopped being a phone around eight and become a sort of weather." },
        { phone: [
          { from: 'heeseung', t: "heeheeseung: MINUTES. christmas at the vice president's. 3:00 arrived (fell). 3:15 dog date commenced, successful. 3:40 niki told abeonim a monk can punch through a door. 4:21 the president departed with leftovers. 5:30 sunoo cried at a heron" },
          { from: 'sunoo', t: "sunooshine: IT WAS A VERY BEAUTIFUL HERON" },
          { from: 'jay', t: "jbird: it was a pretty good heron" },
          { from: 'jake', t: "jakeys: layla hasn't stopped looking at the door since we got home. she misses him. i think this is love" },
          { from: 'niki', t: "rikiniki: LMAOOO layla got a boyfriend before jake" },
          { from: 'jake', t: "jakeys: layla got a boyfriend before ALL of us niki. look inward" },
          { from: 'sunghoon', t: "princehoon: Sunghoon would like it noted that he was on the piano bench for two hours and nobody came up the path. - s" },
          { from: 'jay', t: "jbird: noted" },
          { from: 'heeseung', t: "heeheeseung: noted." },
          { from: 'jungwon', t: "injangwon: noted." },
          { from: 'sunghoon', t: "princehoon: Thank you. - s" }
        ], contact: 'RETREAT FACTS (do not leave)', group: true },
        { phone: [
          { from: 'cherry', t: "grandma made me sleep over. my uncle is singing through the wall. it's trot. it's bad" },
          { from: 'cherry', t: "if sunghoon texts me at midnight i'm blocking him" },
          { from: 'cherry', t: "i'm not blocking him" },
          { from: 'cherry', t: "is my bear on ur pillow" },
          { from: 'solar', t: "its on my pillow" },
          { from: 'cherry', t: "correct. goodnight ugly. merry christmas. i love u. delete that" }
        ], contact: 'cherryblossoms' },
        { n: "At 10:41 it rang. His minute. The faint hollow echo of tile." },
        { s: 'jungwon', f: 'neutral', t: "Hi. I'm in the bathtub. Your house had seven more boys in it than I planned for." },
        { s: 'solar', f: 'happy', t: "Was it in the notes?" },
        { s: 'jungwon', f: 'neutral', t: "Item nine. *Contingency: Jake.* It said *unlikely.* I've crossed out unlikely." },
        { n: "She laughed into her pillow. She could hear him not laughing, which was a sound too, his particular way of not laughing, a little breath through the nose, the dimple almost certainly out in an empty bathroom where no one could see it." },
        { s: 'jungwon', f: 'neutral', t: "Your father showed them the heron slideshow." },
        { s: 'solar', f: 'happy', t: "He showed you the heron slideshow first. Before they came. You *asked* for the heron slideshow." },
        { s: 'jungwon', f: 'flustered', t: "I asked a follow-up question. He took it as a request." },
        { s: 'jungwon', f: 'neutral', t: "Niki says I kissed you in front of the whole council." },
        { s: 'solar', f: 'happy', t: "On the cheek. For a second. Then you *ran*." },
        { s: 'jungwon', f: 'neutral', t: "I walked very fast in a way that was running." },
        { n: "Then he was quiet for a moment, the good kind, and she lay on her back on the rug with Nana's croissant digging into her shoulder blade and listened to the tile." },
        { s: 'jungwon', f: 'neutral', t: "Thank you for today. I'll say it properly when I bring the container back. I'm going to bring it back with something in it. I don't know what yet. I'll write a note." },
        { s: 'solar', f: 'happy', t: "You'll write *three pages*." },
        { s: 'jungwon', f: 'happy', t: "Four. Goodnight, Sol. Merry Christmas." },
        { n: "He hung up slowly, the way he always did. Before she'd even put the phone down it buzzed again." },
        { phone: [
          { from: 'jihoon', t: "watched the council fall down ur steps from the kitchen window" },
          { from: 'jihoon', t: "Best Christmas Of My Life" },
          { from: 'jihoon', t: "also the hat was a sheep. i'm sorry somebody had to tell u" },
          { from: 'jihoon', t: "goodnight skank. tell my son i love him and that the croissant is not a real croissant and he shouldnt trust it" }
        ], contact: 'jihoney' },
        { n: "Nana squeaked the croissant, once, as if he'd read it, and looked at her to see if she'd noticed. She'd noticed. She picked the sheep hat up off the rug and put it on, ear flaps and all, and sat there in it in the dark in the middle of the tissue paper with her dog and her phone and the house asleep around her, until the tree downstairs clicked off on its timer and the whole house went dark except her, and she didn't mind at all." }
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
      { s: 'solar', f: 'sad', t: "Yeah." },
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
        ], contact: 'RETREAT FACTS (do not leave)', group: true },
        { n: "She typed *home*. She watched it, in case it changed into something else. It didn't. She sent it, and lay back on her bed, and the moon lay on the floor and didn't move, and neither did she, for a long time." }
      ] }
    ] }
  ] }

  );
})();
