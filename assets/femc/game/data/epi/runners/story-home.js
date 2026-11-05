/* The Runners epilogue, the home pass (2026-11-04, Kat: "shouldn't there have been more story when she went back home?").
   New story events that fill gaps in FEMC-RUNNERS-EPI-EXPANSION.md: the first night back (gap 16), both parents on the
   phone in person (gap 10, plus a Sunday call from her mother so Solji's portrait is used), the run-up to the holiday party
   (gaps 1-3; gap 4 is the opening of epi-r-holiday in story-w3.js) and a goodbye before the roof (gap 11, Section B "the car").
   Format as story-w1.js; loaded with the world after story-w3 (epilogue.js WORLDS.runners.files).
   Events (R.events):
     epi-r-welcome      12/1  evening  the first night back: Hanni and Hyein's room, the fort, one true thing (consumes)
     epi-r-dad-call     12/13 early    her father calls from his own phone, on a Saturday, and doesn't mention the trip
     epi-r-mom-call     12/14 early    Sunday at ten: her mother, the place card, the green dress, the gray coat
     epi-r-what-tells   12/18 evening  the girls' room, door shut: what she tells them (ifFlag epi-r-lied-girls) (consumes)
     epi-r-hoodie       12/19 early    waking up in his hoodie (one version per route)
     epi-r-last-final   12/19 after    Friday at two: the writing final in the gym, the second hand (doesn't spend the slot)
     epi-r-porch        12/20 evening  Jaehyun on the Alpha porch with a shovel: the car, the table, "I did it once" (no consume since the time pass, Nov 5: the 12/20 goodbyes follow it in Go Out)
   Flags read: epi-r-lied-girls / epi-r-told-girls (set in story-w3.js epi-r-clocks, new), epi-r-travel-yes / -no, the route.
   Flags set: none.
   Small inventions (Kat may change any): the fort and the three takeout places; the station window and the last train; her
     father's own cell, Mrs. Oh's espresso machine and the radio in the kitchen; the green dress for Christmas Eve and the Kangs;
     the empty chair on Thanksgiving; the list in pen on Hyein's arm ("4. sorry. quad."); the coffee on the porch rail; the
     finals schedule (Mon Intro to Business, Tue Statistics, Thu Media and Society, Fri 2 p.m. the writing final in Archbold
     Gym, which fixes the old disagreement); Jaehyun's right shoulder (canon in story-w1, not the planning doc's wrist); Ms.
     Han covering an unconfirmed car; "I did it once."
   Canon held: parents by phone only, never in person; Jaehyun knows nothing of camp or the recording; Hanni and Hyein don't
     know about the recording; Haechan never asks anyone about her; the jacket stays in the bag; the track stays untitled. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/1, evening: the first night back ─────────────────────────────
  { id: 'epi-r-welcome', date: '12/1', slot: 'evening', consumes: true, title: 'the first night back', place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Evening', scene: [
    { music: 'epi-r-sisters' },
    { n: "By seven the snow had buried the bikes outside the house up to their handlebars, and Hanni and Hyein's room had been turned, without anybody discussing it, into the kind of fort you build when you're nine and someone in the house is sick. Every spare blanket on the second floor. Both desk chairs dragged together under a duvet to make a roof that sagged in the middle. The fairy lights Hyein had stapled along the ceiling in September plugged in at last, warm and uneven, one strand blinking on a timer nobody had ever figured out how to change." },
    { n: "Hyein had ordered from three different places on Marshall Street, because she couldn't decide, and because, she said, it was an occasion, and the containers sat open on the rug in a ring between them, noodles and dumplings and soup and a box of fries that had gone soft in the cold on the way over and that nobody was going to admit to wanting the most." },
    { s: 'hyein', f: 'happy', t: "I got the spicy one and the not-spicy one because I didn't know which one you'd be tonight. Like, as a person." },
    { s: 'solar', f: 'neutral', t: "Which one am I?" },
    { s: 'hyein', f: 'serious', t: "You're eating the fries. So neither. You're a third thing." },
    { n: "Hanni was on her bed with her back against the wall and the laptop open on her knees, scrolling the group chat their mothers had made, *friendsgiving??*, with the expression of a soldier rereading letters from home." },
    { s: 'hanni', f: 'neutral', t: "My mom asked if the turkey was dry. Your mom said the turkey was *rustic.* They went back and forth about it for a week. About a turkey neither of us ate." },
    { s: 'hyein', f: 'surprised', t: "I ate a turkey." },
    { s: 'hanni', f: 'neutral', t: "You ate a sandwich from a convenience store on a monorail platform in a city that isn't on any map, Hyein." },
    { s: 'hyein', f: 'happy', t: "It was a turkey sandwich." },
    { n: "Solar laughed. It came out of her before she'd decided anything about it, a real one, loud enough that it surprised her, the first one all day that she hadn't had to build first, and Hanni looked up from the laptop and didn't say anything, and looked back down, and Solar watched her not say anything and loved her for it so suddenly that she had to eat a fry about it." },
    { n: "It was so normal. That was the part she hadn't been ready for. She'd been ready for the cover story and her father and the green coming into the corners of her eyes when she wasn't looking. She hadn't been ready for a Monday night in December with the radiator knocking and Hyein's socks not matching and the smell of soy sauce and somebody's vanilla candle and wet coats drying on the back of the door, and the three of them in a room that was exactly as small as she remembered it, which was the strangest thing of all, because she'd been sure, somewhere, that it would have shrunk." },
    { n: "Hyein put her chopsticks down. She did it carefully, the way she did things when she was about to be brave." },
    { s: 'hyein', f: 'sad', t: "Did you sleep? There, I mean. Like actually sleep. In a bed. Was it a nice bed?" },
    { n: "Solar looked at the fairy lights. The one strand blinked on, off, on." },
    { s: 'solar', f: 'neutral', t: "There was a window over it. It looked out at the station. You could hear the last train come in at midnight." },
    { s: 'solar', f: 'neutral', t: "Except some nights there wasn't one." },
    { n: "Neither of them asked what that meant. They'd been there. They knew exactly what it meant, a whole hour folded into the middle of the night like a page you weren't supposed to read, and Hyein made a small sound and picked her chopsticks back up and didn't use them, and Hanni closed the laptop." },
    { choose: [
      { t: "(Tell them one more thing.)", then: [
        { n: "She didn't know she was going to until she was already doing it." },
        { s: 'solar', f: 'sad', t: "There was a dog. He sat by the front door every night until we came home. Every single night. Even the bad ones. Especially the bad ones." },
        { n: "Hyein burst into tears. Not quietly. All at once, the whole way, her face crumpling over the dumplings, and Hanni said *oh my god, Hyein,* in the voice of somebody who was also, she'd like everyone to know, not crying, and reached over and pulled her into her side, and held out her other arm, and Solar went." },
        { n: "The three of them on Hanni's bed, under a roof made of two desk chairs and a duvet, crying about a dog. It was the stupidest thing she'd ever done. She'd remember it for the rest of her life." }
      ] },
      { t: "(Ask about them instead.)", then: [
        { s: 'solar', f: 'serious', t: "What about you? The nine days. Before you... crossed. What did you do?" },
        { n: "Hanni and Hyein looked at each other, a whole conversation in it, the kind they'd been having across this room since August." },
        { s: 'hanni', f: 'neutral', t: "We looked for you." },
        { s: 'hyein', f: 'sad', t: "That's it. That's all we did. Hanni made a spreadsheet." },
        { s: 'hanni', f: 'serious', t: "It was a very good spreadsheet." },
        { n: "Solar didn't say anything. There wasn't anything to say to that that would be the right size, so she ate the last dumpling instead, which was Hyein's, and Hyein let her, which was its own sentence." }
      ] },
      { t: "(Eat the fries. Change the subject.)", then: [
        { n: "She ate a fry instead, like she always did, and asked Hyein whether the turkey on the monorail had been any good, and Hyein said *honestly? five stars,* and Hanni looked at her over the laptop for one second longer than the joke needed." },
        { s: 'hanni', f: 'neutral', t: "Okay. Fries tonight. But not every night." },
        { s: 'solar', f: 'happy', t: "Not every night." }
      ] }
    ] },
    { n: "They watched something bad after that. A Christmas movie about a woman who inherits a bakery, which Hyein had seen four times and narrated in advance, every line, a beat early, until Hanni threw a pillow at her. The snow kept coming past the window, sideways, gold where the porch light caught it." },
    { n: "At some point Solar realized she'd stopped checking the time. Then she checked it, 10:52, and put the phone face down on the rug under the fries, and left it there." },
    { n: "She didn't go back to her own room that night. Nobody asked her to stay. Nobody had to." },
    { bond: { hanni: 1 } },
    { bond: { hyein: 1 } }
  ] },

  // ───────────────────────────── 12/13, morning: two minutes ─────────────────────────────
  { id: 'epi-r-dad-call', date: '12/13', slot: 'early', title: 'two minutes', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'epi-r-home' },
    { n: "Saturday her phone rang at four minutes past nine, and it wasn't Ms. Han's number." },
    { n: "It was his. His own phone, the cell, the number she'd had memorized since she was seven and had called maybe a dozen times in her whole life, most of them from school nurses' offices. Her father didn't call people from his own phone. He had an office for that, and an office's hours, and a woman whose entire job was making sure nobody ever heard him dial." },
    { n: "She let it ring twice. She was sitting up in bed with the duvet round her shoulders and the snow light gray on the ceiling, and her heart had done something she needed it to stop doing before she could trust her voice. Then she picked up." },
    { s: 'dad', f: 'neutral', t: "Solar." },
    { s: 'solar', f: 'surprised', t: "Dad. Hi. Is everything—" },
    { s: 'dad', f: 'neutral', t: "Everything is fine. It's Saturday." },
    { n: "As if that explained it. As if he had ever once in her life called on a Saturday because it was Saturday." },
    { n: "Behind him she could hear the apartment. Not the office. The hush of the big rooms on a weekend morning, soaking up sound the way expensive rooms did, the espresso machine Mrs. Oh ran at nine whether or not anybody wanted a coffee, and faintly, down the hall, the radio her mother kept on in the kitchen for company, playing something with a lot of strings." },
    { s: 'dad', f: 'serious', t: "Your examinations. When are they." },
    { s: 'solar', f: 'neutral', t: "Monday's Intro to Business. Tuesday's Statistics. Thursday's Media and Society. Friday at two, the writing one. Then I'm done." },
    { s: 'dad', f: 'neutral', t: "Friday at two." },
    { n: "She heard him write it down. Actually write it, a pen on paper, the scratch of it carried two hundred and fifty miles up the Thruway, on the yellow legal pad he kept by the phone in the study that nobody else was allowed to use. Her father was writing down her finals schedule on a Saturday morning in his robe. She was sure about the robe. She couldn't have said how." },
    { s: 'dad', f: 'serious', t: "And your brother." },
    { n: "Jaehyun, at the noodle place, moving his right shoulder like it had asked him something. Jaehyun at the lab glass with his hair wet from treatment. Jaehyun, every time she'd seen him since the season ended, holding that arm a little closer than the other one, like something borrowed that he'd promised to bring back in one piece." },
    { choose: [
      { t: "He's fine. He's sleeping more.", then: [
        { n: "It came out easy. It was his to tell, the way eSports had been hers, and he'd kept that one for her all the way through a Thanksgiving she hadn't been at. She could keep a shoulder." },
        { s: 'dad', f: 'neutral', t: "Good." }
      ] },
      { t: "You could ask him yourself.", then: [
        { n: "There was a pause. Not an angry one. Her father didn't get angry on the phone; he got quiet and let you hear yourself." },
        { s: 'dad', f: 'neutral', t: "I did. He said fine." },
        { s: 'solar', f: 'neutral', t: "Then he's fine." },
        { s: 'dad', f: 'neutral', t: "...Then he's fine." }
      ] }
    ] },
    { n: "And then he didn't say it." },
    { n: "The trip. The Dean of Students, the waiver that didn't exist, the lodge upstate with no signal, Ms. Han's folder, whatever was in it by now. She waited for it the way you wait at the top of a dark staircase for the step that isn't there. Her whole body waited. She'd rehearsed it in the shower. She'd rehearsed it on the walk to class. She had the cadence ready, warm in the right places, sorry in the right amount." },
    { n: "It didn't come." },
    { s: 'dad', f: 'neutral', t: "You sound better than you did on the second." },
    { s: 'solar', f: 'neutral', t: "I'm sleeping more too." },
    { n: "She checked her phone at 11:59 every night and lay awake until the radiator knocked. It wasn't true. He didn't say anything about that either." },
    { s: 'dad', f: 'serious', t: "Good. Eat something." },
    { n: "Then there was a second where neither of them hung up. She could hear him breathe, which she didn't think she'd ever heard in her life, and the strings on her mother's radio, and the espresso machine down the hall going quiet." },
    { s: 'dad', f: 'sad', t: "...Your mother kept the card." },
    { s: 'solar', f: 'sad', t: "I know." },
    { s: 'dad', f: 'neutral', t: "Good." },
    { n: "Click." },
    { n: "The call log said 2:04. Two minutes and four seconds, and not one word about where she'd been for nine days, and she sat on the edge of the bed with the phone in both hands and understood that it was the most frightening conversation she had ever had with him. Her father only ever stopped asking about a thing when he'd found somebody better to ask." }
  ] },

  // ───────────────────────────── 12/14, morning: Sunday at ten ─────────────────────────────
  { id: 'epi-r-mom-call', date: '12/14', slot: 'early', title: 'sunday at ten', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'epi-r-home' },
    { n: "Her mother called on Sundays at ten. She had since August, every week, ten o'clock exactly, because ten o'clock was after church and before brunch and her mother had believed for eighteen years that a thing done at the same time every week became a thing that couldn't be taken away." },
    { n: "Two Sundays it had gone to voicemail. Solar had listened to both of them in the dining hall on the second of December with her hood up. She hadn't been able to get through either." },
    { n: "This one she picked up on the first ring." },
    { s: 'mom', f: 'happy', t: "There you are, dear." },
    { n: "Four words, and the whole Upper East Side came down the line with them, her mother's voice the way it was on Sundays, low and bright at once, the voice she used at the kitchen island in her reading glasses with her coffee going cold beside her because she'd forgotten it the second she dialed." },
    { s: 'solar', f: 'neutral', t: "Hi, Mom." },
    { s: 'mom', f: 'happy', t: "The tree went up on Thursday. Mrs. Oh and the two men from the building, the tall one and the one who always calls me *madam* like I'm a hotel. It's crooked. Your father says it isn't crooked. It's crooked. You'll see." },
    { s: 'mom', f: 'neutral', t: "Are you wearing the gray coat?" },
    { n: "She was wearing an SU hoodie and pajama shorts and a pair of socks that were technically Hyein's, sitting cross-legged on her bed with the radiator knocking. The gray coat was in the closet behind his jacket. She didn't think about his jacket." },
    { s: 'solar', f: 'happy', t: "I'm inside, Mom." },
    { s: 'mom', f: 'serious', t: "That isn't what I asked." },
    { n: "Her mother talked, then, the way she always talked on Sundays, a gentle unbroken stream of things that weren't the thing. The Kangs were coming on the twenty-fourth, all of them, even the son. She'd had the green dress taken in, the velvet one, and Solar would need to try it the minute she walked in the door, because she didn't trust measurements from August, not after a semester, girls changed in a semester. The building had put a wreath on the elevator. The wreath was tasteful. Her father had an opinion about the wreath." },
    { n: "Solar listened to all of it with her eyes closed. She'd forgotten this. Not her mother. This: the sound of somebody laying a table for you out of words, every plate in its place, so that when you came home there'd be somewhere to sit." },
    { s: 'mom', f: 'sad', t: "You sound thin." },
    { s: 'solar', f: 'neutral', t: "Dad said that too." },
    { s: 'mom', f: 'sad', t: "Your father doesn't know what thin sounds like. I told him to say it." },
    { n: "Then her mother was quiet for a second. Solar opened her eyes." },
    { s: 'mom', f: 'sad', t: "I set your place on Thanksgiving. I knew you wouldn't be there, sweetheart, I'm not silly. I set it anyway. The card and the good glass. Your father let me." },
    { s: 'mom', f: 'sad', t: "He didn't say anything. He sat across from it all through dinner. He didn't look at it once. I've been married to him for twenty-four years, and I've never seen him work so hard at not looking at something." },
    { n: "Something went in under Solar's ribs and stayed there. A table on Seventy-Second Street, the good silver, her chair, empty, and her father at the head of it in his Thanksgiving tie, not looking. She could see it more clearly than she could see her own room." },
    { choose: [
      { t: "I'm sorry, Mom.", then: [
        { s: 'mom', f: 'neutral', t: "I know you are, dear. I didn't call for sorry. I called because it's Sunday." }
      ] },
      { t: "Where did you think I was?", then: [
        { n: "The pause was long enough that she heard the radio in the kitchen, the strings again, something her mother had always loved and never once known the name of." },
        { s: 'mom', f: 'neutral', t: "Somewhere you didn't want to tell me about. Which is allowed, at eighteen. I told myself it was allowed. Every night I told myself." },
        { s: 'mom', f: 'flustered', t: "...Was it a boy?" },
        { n: "Solar laughed. It hurt a little, going out." },
        { s: 'solar', f: 'happy', t: "It wasn't a boy, Mom." },
        { s: 'mom', f: 'flustered', t: "Good. Or. I don't know which one I wanted you to say." }
      ] },
      { t: "(Don't say anything. Let her talk.)", then: [
        { n: "She didn't say anything. She held the phone and let the quiet sit there, and her mother, who had raised her and knew exactly what that kind of quiet was, let it sit there too, and after a while started talking about the wreath again, gently, like pulling a blanket back up over somebody who'd kicked it off in their sleep." }
      ] }
    ] },
    { s: 'mom', f: 'serious', t: "Bring your brother home in one piece. He won't let me ask him anything. He says *fine* to me now, Solar. *Fine.* Like I'm a reporter." },
    { s: 'solar', f: 'neutral', t: "I'll bring him." },
    { s: 'mom', f: 'happy', t: "Wear the gray coat on the drive. It photographs." },
    { s: 'mom', f: 'happy', t: "Love you. Eat something." },
    { n: "Her mother hung up the way she always did, quickly, before anyone could say anything that would need answering, and Solar sat on the bed with the phone warm in her hand and the radiator knocking and the snow coming down past the window, slow, like it had all the time in the world." },
    { n: "Twelve days to the twenty-fourth. A green velvet dress, taken in. A crooked tree. A place card on a desk in an empty room. She'd go home. She'd put the dress on. She'd stand where her mother put her, in the photograph by the tree, and smile, and it would photograph." },
    { n: "She just had to get to Sunday first." }
  ] },

  // ───────────────────────────── 12/18, evening: what she tells them ─────────────────────────────
  { id: 'epi-r-what-tells', date: '12/18', slot: 'evening', consumes: true, title: 'what she tells them', place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Evening', scene: [
    { music: 'epi-r-bleed' },
    { ifFlag: 'epi-r-lied-girls', then: [
      { n: "They were careful with her all day. That was how she knew." },
      { n: "Hanni texted her at lunch, *soup?*, and nothing else. Hyein left a sticky note on her door that said *u got this (media + society) (and in general)* with a drawing of a fox that looked, if she was being honest, like a dog. Nobody mentioned the clocks. Nobody mentioned the stairs. When she came back from her Media and Society final at four, somebody had reset the microwave and put a second sticky note on it that said *BEHAVE*, and she stood in the kitchen and looked at that for a long time." },
      { n: "At eight Hanni knocked on her door with two mugs of tea, which Hanni never made, because Hanni said tea was a hot drink for people who'd given up, and said *come next door,* and Solar went." },
      { n: "Hyein was on the rug with her nail kit open in front of her like surgical instruments. She held out a hand without looking up. Solar sat and gave her her hand, and Hyein started painting her nails wine-red, to match the dress, one careful stroke at a time, and didn't say a single word." },
      { n: "That was the worst part. Hyein not talking. Hyein, who talked through movies and dentist appointments and once, memorably, through a fire drill. She painted Solar's thumbnail and blew on it and moved on to the next one, and her mouth stayed shut in a straight small line that Solar had never seen on her, and Solar understood that this was what it looked like when Hyein was afraid of saying the wrong thing to someone." },
      { n: "Hanni talked instead. About the party. About Jaemin's run of show, which she'd seen on the Sigma fridge and which had, she reported, a slide. About whether the dresses would be warm enough for the walk over and how they were going to do Solar's hair. Ordinary things, set down one after another on the rug between them, gently, the way you'd set things down near something that might startle." },
      { n: "She'd lied to them. That morning, at the bottom of the stairs, with every clock in the house stopped at twelve, she'd looked at the two people who'd crossed a whole world to find her and said *old house, the electrics,* in her father's voice. And they'd let her. And now they were painting her nails." },
      { choose: [
        { t: "(Tell them the truth now.)", then: [
          { s: 'solar', f: 'sad', t: "It's not the electrics." },
          { n: "Hyein's brush stopped. Hanni stopped talking in the middle of a sentence about bobby pins." },
          { s: 'solar', f: 'sad', t: "It's me. I'm sorry. I don't know how to stop it." },
          { n: "Hyein put the brush back in the bottle and screwed the cap on very slowly. Then she put her forehead down on Solar's knee, carefully, so as not to touch the wet nails, and stayed there." },
          { s: 'hyein', f: 'sad', t: "I knew. I knew, I knew, I knew." },
          { s: 'hanni', f: 'serious', t: "Okay. Then we hold it. Starting now." }
        ] },
        { t: "(Let them be careful. Say nothing.)", then: [
          { glitch: { strain: 1 } },
          { n: "She said nothing. She let Hyein finish all ten nails, and blew on them when she was told to, and laughed at the right places in Hanni's story about Jaemin's slide, and the lie held, and holding it felt like carrying something heavy up a staircase that didn't end." }
        ] }
      ] },
      { n: "At the door, at eleven, Hanni stopped her with a hand on her arm." },
      { s: 'hanni', f: 'serious', t: "If you change your mind about anything. Any time. Two in the morning. You knock. You don't text, you knock." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { n: "She went back to her own room and sat on the bed in the dark with her nails drying and looked at the clock on the desk, the one that still said 12:00 and had said it all day. Twelve. In an hour every clock in the world would agree with it." },
      { n: "She wasn't going to wait for it here. She knew that the way you know your own handwriting. Not in this room, with the girls through the wall. If the floor was going to go green under somebody tonight, it wasn't going to be under them." },
      { n: "She got up and found her coat." }
    ], else: [
      { n: "Hyein locked the door. Then she looked at the lock, and at Solar, and dragged her desk chair across and wedged it under the handle, which wasn't necessary, which was the point." },
      { s: 'hyein', f: 'serious', t: "Okay. Nobody's coming in. Nobody's going out. Tell us. All of it. Like you're telling a Dean, except we believe you." },
      { n: "So she told them." },
      { n: "Not all of it. Some things weren't hers to tell, and some things were hers but not ready, and she'd been raised by a man who could tell a whole truth with one piece missing so neatly you'd never think to look for it. She knew exactly which piece she was holding back. The recording. A boy on a step. A file. That stayed in her chest where it lived. Everything else came out." },
      { n: "The snow on Monday, falling up past the library steps while two hundred people stood and watched it. Her knuckles on Sunday, four thin lines, the Band-Aid still on them now. The stairs on Tuesday night, the ones right outside this door, going up and up past the second landing into somewhere green, and the people at the top of them, fighting." },
      { s: 'solar', f: 'serious', t: "They're there. All of them. At midnight. Akihiko, everyone. Fighting, like always. And they can't see me." },
      { n: "Hanni's face did something complicated. She'd known them too. Eight people and a dog, a dorm by the station, the long green hour. She'd stood in that lounge." },
      { s: 'hanni', f: 'sad', t: "...Can they now?" },
      { s: 'solar', f: 'sad', t: "Tuesday they almost could." },
      { n: "Nobody said anything for a while. The radiator knocked. On the other side of the wall somebody was playing the same thirty seconds of a song over and over, trying to learn the words before the party." },
      { n: "Then Hanni got off the bed and took the pen out of Hyein's pencil cup and took Hyein's arm, and Hyein held it out like she'd been waiting to, and Hanni started writing on the inside of it in small neat capitals, the way she'd written the cover story in the Notes app on the first of December, the way she did everything she was scared of. Like a list. Like a plan." },
      { s: 'hanni', f: 'serious', t: "One. Nobody's alone at midnight. Not you, not anybody." },
      { s: 'hyein', f: 'serious', t: "Two. Coats by the door. Boots by the door. If we have to go somewhere at midnight, we go in boots." },
      { s: 'hanni', f: 'neutral', t: "Three—" },
      { s: 'hyein', f: 'happy', t: "Three, snacks. For after. There's always an after. Write snacks." },
      { n: "Hanni wrote *snacks.* She capped the pen. She looked at Solar across Hyein's arm and the three lines of ink on it, and her eyes were wet and her voice wasn't." },
      { s: 'hanni', f: 'serious', t: "We said we'd hold it. This is what holding it looks like. It's not pretty. It's a list on Hyein's arm. But it's ours." },
      { n: "Solar nodded. She meant it. She meant it with her whole body." },
      { n: "And she sat with them until half past eleven, the three of them on Hyein's bed with the chair still under the door handle, and somewhere around eleven-twenty Hyein fell asleep sitting up with her arm still held out, the list facing the ceiling, and a few minutes later Hanni's head went down on Solar's shoulder, heavy, finals-heavy, two people who hadn't really slept in a week finally losing the fight." },
      { n: "She looked at them. At Hyein's mouth open a little. At Hanni's hand, still loosely holding the pen." },
      { n: "If the floor went green tonight, it would go green wherever she was. She knew that now. And she couldn't let it happen here, with them asleep in it." },
      { n: "She eased Hanni's head down onto the pillow. She took the pen out of her fingers. Under *3. snacks,* very carefully, so as not to wake her, she wrote on Hyein's arm in her own handwriting:" },
      { n: "*4. sorry. quad.*" },
      { n: "Then she moved the chair from under the handle, slowly, so it wouldn't scrape, and went to find her coat." }
    ] }
  ] },

  // ───────────────────────────── 12/19, morning: his hoodie ─────────────────────────────
  { id: 'epi-r-hoodie', date: '12/19', slot: 'early', title: 'his hoodie', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'epi-r-home' },
    { n: "She woke up in his hoodie." },
    { n: "She'd slept in it. Over her pajamas, the coat gone somewhere in the night, the hood half up and the sleeves pulled down over her hands, and the first thing she knew before she even opened her eyes was the smell, vanilla, warm and stupid and everywhere, like she'd fallen asleep inside him instead of next to nothing. The second thing was that it was eight-ten and all her clocks agreed with each other." },
    { n: "The one on her desk said 8:10. Her phone said 8:10. She lay there and looked at the two of them telling the same time, and didn't trust it, and was so grateful she could have cried." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'haechan', t: 'home' },
        { from: 'haechan', t: 'porch rail' },
        { from: 'haechan', t: "dont read into it. its a beverage" }
      ], contact: 'haechanah' },
      { n: "*Home.* Sent at 7:51. The rule, the boring one, the one he'd said he was keeping boring on purpose, so that every morning she'd know he'd gotten wherever he was going and she'd never have to ask. She'd never once had to ask." },
      { n: "She went downstairs in his hoodie and her socks. The porch was white, the railing an inch deep in new snow, and on it, pressed into the snow so it wouldn't tip, was a paper cup with a lid on it, and when she picked it up it was still warm, and when she drank it it was exactly how she took it, which nobody had ever told him." },
      { n: "His footprints went down the steps and out to the street and turned the wrong way. Not toward Sigma. Toward the Extracurricular Building, where the studios were. He'd been up all night too, then. Or he'd never gone to bed." },
      { n: "She stood on the porch in his hoodie, holding his coffee, and didn't care who saw, which was new." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'minji', t: "morning. you don't have to answer this" },
        { from: 'minji', t: "i'll be in the lab from 4. no camera. not asking anything. just if you want somewhere quiet after your last one" }
      ], contact: 'minjibear' },
      { n: "*Not asking anything.* Minji, who asked about everything. Who asked before she filmed and asked before she cut and asked again before anything screened, who was going to ask her something this afternoon because the calendar said to and ask again tonight whether she could keep the camera rolling, was writing to tell her she wasn't going to ask." },
      { n: "It went into her somewhere low and stayed there. She looked down at the sleeves of the hoodie, not Minji's, and back at the screen, and typed with her thumbs before she could think about it." },
      { phone: [{ from: 'solar', t: 'ok. thank you for not asking' }, { from: 'minji', t: 'i asked if i could not ask. in my head. you said yes' }], contact: 'minjibear' },
      { n: "She laughed out loud, alone in her room, and then put her face in the sleeve and stayed there a while." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Hyein was asleep on her floor." },
      { n: "In a nest made out of the duvet from their room, dragged the length of the hallway at some point in the night, her boots still on, a granola bar unopened in one hand. Hanni was in the desk chair, asleep sitting up with her coat on and her phone in her lap, and her head tipped back against the bookshelf at an angle that was going to hurt for a week." },
      { ifFlag: 'epi-r-lied-girls', then: [
        { n: "Hanni had heard the front door at a quarter to twelve. Solar knew because Hanni had been sitting on the stairs when she came back in, at twenty past, in his hoodie, with his arm around her, and hadn't said a single thing. She'd just stood up, and taken Solar's other arm, and walked her the rest of the way, and then not left." }
      ], else: [
        { n: "On the inside of Hyein's arm, faded and smudged now, five lines in two people's handwriting. *1. nobody alone at midnight. 2. coats by the door. 3. snacks.* And under them, in her own: *4. sorry. quad.* And under that, in Hyein's, in what looked like eyeliner, very large: *5. NO.*" },
        { n: "They'd woken up at twelve-oh-something and found it. They'd run out in boots, both of them, and met her coming back across the quad under his arm, and Hyein had cried, and then yelled, and then cried again, and then neither of them had been willing to leave her room." }
      ] },
      { n: "She didn't wake them. She sat on the edge of the bed in his hoodie and watched two people sleep on the floor of her room because they'd decided she wasn't going to be alone in it, and she thought, with total clarity, that if she ever had to choose one thing to be true in every world there was, it would be this." }
    ] },
    { choose: [
      { t: "(Keep it on.)", then: [
        { n: "She kept it on. She'd give it back. Later. Some other day, when it smelled like her instead." }
      ] },
      { t: "(Fold it. Give it back tonight.)", then: [
        { n: "She took it off, and folded it, carefully, the way her mother had taught her to fold things that mattered, and put it on the end of the bed to give back at the party, and stood there in her pajamas missing it already, which was ridiculous, which she was going to have to live with." }
      ] }
    ] },
    { n: "Her last final was at two. After that she'd be done with the semester, done with Syracuse until January, and between now and the car at nine on Sunday there was only a party, and a night, and whatever was waiting for her at the end of it." }
  ] },

  // ───────────────────────────── 12/19, after class: Friday at two ─────────────────────────────
  { id: 'epi-r-last-final', date: '12/19', slot: 'after', title: 'friday at two', place: 'Syracuse · Archbold Gym · Finals', time: 'Afternoon', scene: [
    { music: 'epi-r-half' },
    { n: "The writing final was in Archbold Gym, because there were four hundred of them and nowhere else on campus would hold four hundred people at folding desks, and the gym smelled the way gyms always smelled in December, floor wax and radiator heat and rubber and the faint ghost of a basketball game nobody had cleaned up after." },
    { n: "The desks went in rows to the far wall, under the banners. The proctors walked the aisles in sneakers. Over the scoreboard at the end, where everybody could see it, there was a big round clock with a red second hand, the old kind, the kind that clunked, and at 2:00 exactly a woman with a lanyard said *you may begin,* and four hundred people turned over four hundred papers at once, and it sounded like a flock of something taking off." },
    { n: "She wrote the essay in forty minutes." },
    { n: "It was fine. It was better than fine; it was clear, which was what her father had told her to be, and she hated a little that it was clear because he'd told her to. Then she put her pen down with an hour and twenty minutes left, and folded her hands on the desk, and looked up at the clock." },
    { n: "And watched it." },
    { n: "Eighty minutes. She counted the second hand all the way round, sixty clunks, and then again, and then again. She didn't mean to. Her eyes just went there and stayed, the way your tongue goes to a tooth that hurts. Every time it came up to the twelve something in her chest pulled tight, and every time it went past the twelve, clunk, and kept going, the tightness let go a quarter-inch. Clunk. Clunk. The red hand going round and round over four hundred bowed heads, telling the right time, over and over, like it was trying to convince her." },
    { n: "At 3:38 it stuck." },
    { n: "For one beat. Right on the twelve. The red hand stood straight up and didn't move and the gym went very quiet in her ears, the scratching of four hundred pens sliding away from her like a tide going out." },
    { n: "Then, clunk. 3:38 and one second. Nobody else looked up." },
    { n: "She looked down at her hands. They were flat on the desk, pressed hard enough into the laminate that her fingertips had gone white. She took them off the desk and put them in her lap, and didn't look at the clock again for the last twenty-two minutes, which was the hardest thing she did all semester." },
    { n: "At four the woman with the lanyard said *pens down,* and Solar handed in her paper and her blue book and walked out of Archbold into the cold and stood on the steps for a full minute with four hundred people streaming round her, laughing, calling each other, hugging, somebody already playing music off a phone, and didn't know what to do with her hands." },
    { n: "Done. The semester was done. She'd survived a fall that had ended in another world and a December that kept trying to end the same way, and she'd written a clear essay about it without mentioning any of it, and now there was nothing between her and Sunday but a dress and a party and a night." },
    { n: "She put her hands in her pockets. Then she took them out and put them in her sleeves. Then she gave up and walked home to pack." }
  ] },

  // ───────────────────────────── 12/20, evening: the porch ─────────────────────────────
  { id: 'epi-r-porch', date: '12/20', slot: 'evening', title: 'the car', place: 'Syracuse · Alpha Phi House · Porch', time: 'Evening', scene: [
    { music: 'epi-r-home' },
    { n: "Somebody was shoveling the Alpha Phi steps at six o'clock on the last Saturday before break, in the dark, in the first real snow of the winter, which was strange, because nobody ever shoveled the Alpha Phi steps. The house mother called a man. The man came on Tuesdays. It was Saturday." },
    { n: "It was her brother." },
    { n: "She watched him from the front window for a minute before she went out. A Syracuse beanie, the team-issue parka, a borrowed shovel from somewhere. Working left-handed. He'd scrape, and lift, and throw, and every time the shovel came up his right arm stayed close to his side, carefully, like something he'd been lent and promised to bring back in one piece." },
    { n: "She put her coat on. The gray one. She didn't think about why." },
    { n: "The porch was white and quiet and the cold went straight through her, clean and total, and he didn't look up when the door opened. He didn't have to. He'd read it in the way the porch light changed." },
    { s: 'jaehyun', f: 'neutral', t: "Did you eat." },
    { s: 'solar', f: 'happy', t: "There's a whole Sigma party in my stomach still. I'm good until Easter." },
    { s: 'jaehyun', f: 'neutral', t: "That's not food. That's a decision." },
    { n: "He finished the last step and leaned the shovel on the railing and stood at the bottom with the snow coming down on his shoulders, looking up at her, the way he'd looked up at her from the bottom of a lot of staircases in her life, waiting to see if she'd fall." },
    { s: 'jaehyun', f: 'serious', t: "Car's at nine." },
    { ifFlag: 'epi-r-travel-no', then: [
      { s: 'jaehyun', f: 'serious', t: "You didn't confirm. Ms. Han called me Thursday night. I told her you had, and that the email must have bounced." },
      { s: 'solar', f: 'surprised', t: "Did she believe you?" },
      { s: 'jaehyun', f: 'neutral', t: "No. She wrote it down anyway. Ms. Han has worked for Dad for eleven years. She knows when a thing's a question and when it's a courtesy." },
      { n: "He'd lied to Ms. Han. For her. The way he'd sat at a Thanksgiving table and said *I don't know where she is,* and the way, back in October, he'd found out about eSports and decided their father didn't need to. It wasn't the first thing he'd kept for her. She was starting to understand it might never be the last." }
    ], else: [
      { s: 'jaehyun', f: 'neutral', t: "Ms. Han told me you'd confirmed before she told Dad. That's never happened. I think she likes you better." },
      { s: 'solar', f: 'happy', t: "Everyone likes me better." },
      { s: 'jaehyun', f: 'neutral', t: "That's not true. But it's close." }
    ] },
    { n: "She came down the steps he'd cleared and stood next to him in the snow. Up close the shoulder was worse. Not anything you'd see. Something you'd only notice if you'd grown up next to him, the way he held his weight a quarter-inch to the left, the way he'd thrown the snow with the wrong hand and made it look like a choice." },
    { n: "She could tell Dad. She thought about it, one clean second. A word on the drive down, a word in the study on the twenty-sixth, and their father would have a doctor on the phone by noon and an opinion by one, and her brother would never forgive her, and he'd be right." },
    { n: "He'd kept hers. She'd keep his." },
    { s: 'solar', f: 'serious', t: "What do we say at the table?" },
    { s: 'jaehyun', f: 'neutral', t: "Nothing. We eat." },
    { s: 'jaehyun', f: 'neutral', t: "He'll ask me about the draft and you about finals. Mom will talk about the Kangs' son for forty minutes. Nobody will say the word *trip.* And then on the twenty-sixth, when the Kangs have gone home, he'll ask us into the study. One at a time. Me first." },
    { s: 'solar', f: 'surprised', t: "You've thought about this." },
    { s: 'jaehyun', f: 'neutral', t: "I've thought about nothing else since the season ended." },
    { n: "The snow came down between them, heavy and slow, the kind that swallowed sound. Somewhere down the street someone was laughing on another porch. Inside the house, through the glass, Hyein was carrying a laundry basket up the stairs and singing." },
    { n: "Midnight was six hours away. The roof was a ten-minute walk. He didn't know. He knew about the dorm and the dog and the tower; he didn't know about tonight, and she wasn't going to be the one to put it on him, not now, not on a porch, not with his shoulder like that." },
    { choose: [
      { t: "If I'm not in the car tomorrow—", flag: 'epi-r-porch-fetch', then: [
        { n: "He turned and looked at her. Properly. Not the sideline look. The other one, the one she'd only seen a handful of times, the last one in a noodle place on Marshall Street when she'd said *everything* and he'd said *you ate badly there, too.*" },
        { s: 'jaehyun', f: 'serious', t: "You'll be in the car." },
        { s: 'solar', f: 'sad', t: "But if I'm not." },
        { n: "He didn't ask why she'd say that. He didn't ask anything. He just looked at her for a long time with the snow landing on his beanie, and then he said it the way he said everything that mattered, flat, like a fact he'd already filed." },
        { s: 'jaehyun', f: 'serious', t: "Then I'll come and get you. Wherever it is. I did it once." }
      ] },
      { t: "(Don't say it. Just stand with him.)", flag: 'epi-r-porch-stand', then: [
        { n: "She didn't say it. She stood next to him at the bottom of the steps he'd cleared with the wrong hand, shoulder to shoulder, the way they'd stood at the edge of a lot of things growing up, watching the snow fill in the street, and after a while he said, without looking at her:" },
        { s: 'jaehyun', f: 'neutral', t: "Whatever it is. Tonight. You're in the car tomorrow." },
        { n: "It wasn't a question. It never was, with him. She'd hated that her whole life. Tonight she held on to it like a railing." }
      ] }
    ] },
    { n: "He picked up the shovel. He looked at it like he didn't know where it had come from, and then remembered, and leaned it against the porch rail for the man who came on Tuesdays." },
    { s: 'jaehyun', f: 'neutral', t: "Wear the gray coat. Mom'll want a photo by the tree." },
    { s: 'solar', f: 'happy', t: "I'm wearing the gray coat." },
    { s: 'jaehyun', f: 'happy', t: "I know. I'm telling you to keep wearing it." },
    { n: "He went down the cleared path to the street, and turned toward Sigma, and she stood on the bottom step and watched his footprints fill in behind him, one by one, slowly, until you couldn't tell anybody had walked there at all." },
    { n: "Six hours." },
    { n: "She went inside and took the gray coat off and hung it by the door, where it would be ready, either way." },
    { bond: { jaehyun: 1 } }
  ] }

  );
})();
