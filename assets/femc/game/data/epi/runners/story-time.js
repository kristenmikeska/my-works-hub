/* The Runners epilogue, the time pass (Nov 5 2026, Kat's "build the more time changes and the rest of the story gaps";
   FEMC-RUNNERS-EPI-EXPANSION gaps 6, 7 and 9). Data only; loaded with the world after story-home (epilogue.js
   WORLDS.runners.files). Merges into FEMC_EPI_WORLDS.runners.events.

   Events:
     epi-r-morning-after  12/8 early     the morning after the crossroads, one per route (gap 7; no consume, so the
                                         Monday routines still play after it)
     epi-r-mark-alone     12/13 after    Mark alone in the Marshall Street café window, seen from across the street; no
                                         conversation (gap 9; no consume, so Go Out / the optional practice follows)
     epi-r-last-practice  12/20 after    the last practice before break as a real scene: Doyoung's board, the notes, the
                                         trophy, Olivia's promised crying, the board wiped (gap 6; consumes, replacing the
                                         practice screen; proficiency +1 like practice)
   Flags read: epi-route-* (ifEpiRoute), epi-practice-12-9 / epi-practice-12-13 (practice taken on the optional days;
     epilogue.js practice()). Flags set: none.
   Inventions: the honors dorm's standing guest list (a page at the front of the sign-in binder); Hanni's coffees from the
     cart on the quad; Mark's yellow legal pad; Jeno and Jisung carrying a box of party lights down Marshall Street; Olivia
     calling the trophy "Gregory"; Doyoung's "see you in january". Canon held: Mark gets no conversation and no making-up;
     Solar doesn't learn about the Dean (that's 12/16); nobody on the team knows about the other world. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/8, early: the morning after the crossroads (gap 7) ─────────────────────────────
  { id: 'epi-r-morning-after', date: '12/8', title: 'the next morning', slot: 'early', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { ifEpiRoute: 'haechan', then: [
      { n: "She woke at seven-forty to the radiator knocking like somebody wanted in and her phone face down on the pillow beside her, where she'd fallen asleep holding it, which she would be denying to anyone who asked for the rest of her life." },
      { n: "One text. 2:51 a.m. No name in the preview, because she'd never changed his contact from the handle, and no punctuation, because he was him." },
      { phone: [{ from: 'haechan', t: 'home' }], contact: 'haechanah' },
      { n: "That was all of it. One word, sent from wherever he'd ended up after the steps, after the cold cup and the snow on his shoulders, after she'd walked away from him the long way and looked back once. He hadn't said goodnight. He hadn't asked if she'd got in. He'd just told her where he was, the way you'd drop a pin on a map for somebody you weren't sure was still looking at the map." },
      { n: "She lay there with it on her chest. Down the hall someone's alarm went off and went on going off. The window was a white square with a gray morning stuck to it, and her neck ached from yesterday's chair, and she read the word four times, which was three more times than a word that short could possibly need." },
      { n: "It wasn't nothing. That was the trouble with him. He'd built a whole reputation on being a person who didn't tell anybody anything, and here he was at three in the morning, telling her one thing, on purpose, so small she could pretend not to have noticed it if she wanted to. He'd made it easy to ignore. He'd made it easy to ignore so that, if she didn't, it would mean something." },
      { choose: [
        { t: "(Reply.) you don't have to tell me where you are", then: [
          { phone: [{ from: 'solar', t: "you don't have to tell me where you are" }, { from: 'haechan', t: 'i know' }, { from: 'haechan', t: 'doing it anyway' }], contact: 'haechanah' },
          { n: "She looked at that for a while. Then she typed the thing she actually meant, which took longer, and sent it before she could start being clever about it." },
          { phone: [{ from: 'solar', t: "then tell me before. when you're going to be gone. not after" }, { from: 'haechan', t: 'ok' }, { from: 'haechan', t: "that's a rule then" }], contact: 'haechanah' }
        ] },
        { t: "(Reply.) tell me when you're going to be gone. before, not after", then: [
          { phone: [{ from: 'solar', t: "tell me when you're going to be gone. before, not after" }], contact: 'haechanah' },
          { n: "The dots came up and went away. Came up. Went away. She could see him on the other end of it, wherever he was, typing something and deleting it, typing something and deleting it, a man who'd made an entire personality out of not being told what to do, being told what to do." },
          { phone: [{ from: 'haechan', t: "i'm bad at rules" }, { from: 'haechan', t: "i'll keep this one" }], contact: 'haechanah' }
        ] }
      ] },
      { n: "She got up. She showered until the hot water ran out, which in the Alpha house was eleven minutes, and when she came back the phone had nothing new on it, and that was right too. He'd said it once. He wasn't going to say it twice. That wasn't how he did things." },
      { n: "It was such a small thing. A word at three in the morning. A rule about saying where you were. She'd had rules her whole life, her father's, her brother's, the house's, the Foundation's, and every one of them had been made for her by someone else. This was the first one she'd made herself, and the first one anybody had promised, in lowercase, to keep for her." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Her phone went at seven-fifty-two, while she was still lying there deciding whether her whole body hurt or only most of it. It was a photo before it was anything else, which with Minji it usually was." },
      { n: "A page in a binder. The honors dorm's binder, the one at the front desk with the pen on a string; she recognized the gray plastic cover in the corner of the frame and the RA's calculus textbook in the corner of the corner. Not the sign-in sheet. The page in front of it, the one with a typed heading, *STANDING GUESTS (resident must sign),* and a column of names in a column of handwritings." },
      { n: "At the bottom, in Minji's small, careful, all-capitals print, the kind she used for slate boards: *SOLAR LEE.* And in the box beside it, today's date, and Minji's initials." },
      { phone: [
        { from: 'minji', t: 'i put you on the standing list. so if you ever come by you don\'t have to wait outside in the cold while they find me' },
        { from: 'minji', t: "it doesn't mean anything" },
        { from: 'minji', t: 'ok it means something. you can say no. i can cross it out. it\'s just pen' }
      ], contact: 'minjibear' },
      { n: "Solar looked at the photo for a long time. At the name, mostly, in that handwriting, the letters squared off and deliberate, a name written by somebody who'd decided where every line would go before she put the pen down. Minji had stood at that desk at seven-something in the morning with a binder open and the RA not looking up, and written her in, and taken a picture of it so Solar would know exactly what she'd done, and then asked." },
      { n: "She always asked. Even after. Even about the things she'd already done, she asked, in case." },
      { choose: [
        { t: "(Reply.) don't cross it out", then: [
          { phone: [{ from: 'solar', t: "don't cross it out" }, { from: 'minji', t: 'ok' }, { from: 'minji', t: 'ok. good. ok' }], contact: 'minjibear' },
          { n: "Three okays. From Minji, that was practically a parade." }
        ] },
        { t: "(Reply.) you asked. thank you for asking", then: [
          { phone: [{ from: 'solar', t: 'you asked. thank you for asking' }, { from: 'minji', t: 'i always ask' }, { from: 'minji', t: "that's not a yes or a no btw. i'm leaving it in pen until you tell me" }], contact: 'minjibear' },
          { n: "She would. She knew she would. She just wanted, for one morning, to be the one holding the pen." }
        ] }
      ] },
      { n: "She got up. The room was cold and the light was gray and her name was in a binder on the other side of campus, in somebody else's handwriting, in pen, and she walked to Statistics with her hands in her pockets knowing exactly where it was, the way you know where your keys are without having to check." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Somebody knocked at seven-thirty, twice, the polite way, which meant it wasn't Hyein. Hyein knocked like she was being chased." },
      { n: "Hanni was in the hall in her coat and her boots and last night's mascara, with snow melting off her shoulders and a coffee in each hand from the cart on the quad, the one that opened at seven for people who'd made bad decisions about their eight-thirties. She held one out. She didn't say good morning. She didn't say anything." },
      { n: "Solar took it. It was too hot to drink and exactly how she took it, which she'd never once told Hanni, and which Hanni knew anyway, the way Hanni knew most things she hadn't been told." },
      { n: "Hanni came in and sat on the end of the bed, the way she'd sat on the end of it on Monday morning when they'd pulled her out of it by both wrists, and took the lid off her own cup and blew on it, and looked out the window at the snow, and didn't ask." },
      { n: "She didn't ask about the shuttle. She didn't ask about the quad, or why Solar had run for the bus like the bus was the last one out of a burning city, or what had been on her face before she'd made it to the steps. She didn't ask about Danielle, or the trip, or anything at all. She drank her coffee. She was very good at it. Solar had never seen anyone not ask a question so thoroughly." },
      { choose: [
        { t: "(Tell her one true thing.)", then: [
          { s: 'solar', f: 'neutral', t: "I slept. Actually slept. First time since I got back." },
          { n: "Hanni nodded. She didn't look away from the window. But her free hand came off her knee and found Solar's ankle through the blanket and held on to it, once, and let go." },
          { s: 'hanni', f: 'neutral', t: "Good. Do it again tonight." }
        ] },
        { t: "(Drink the coffee. Let her not ask.)", then: [
          { n: "So Solar drank it. They sat there, the two of them, on a bed with the radiator banging, drinking coffee in silence while the house woke up around them, a hair dryer, a door, Hyein somewhere down the hall singing a song she didn't know the words to, loudly, wrong." },
          { s: 'hanni', f: 'happy', t: "She's going to come in here in a minute and ruin this." },
          { s: 'solar', f: 'happy', t: "I know." }
        ] }
      ] },
      { n: "Hanni stood up when her cup was empty and put her hat back on, and at the door she stopped, the way people in their family stopped at doors, it turned out, both families, the one you were born into and the one that had pulled you onto a bus by the wrists." },
      { s: 'hanni', f: 'neutral', t: "Statistics at nine. I'll walk you." },
      { n: "It wasn't a question. Nothing with Hanni this week was going to be a question. Solar found, a little to her own surprise, that she didn't mind." },
      { bond: { hanni: 1 } }
    ] }
  ] },

  // ───────────────────────────── 12/13, after: Mark, alone (gap 9) ─────────────────────────────
  { id: 'epi-r-mark-alone', date: '12/13', title: 'the window seat', slot: 'after', place: 'Syracuse · Marshall Street', time: 'Daytime', scene: [
    { n: "Saturday on Marshall Street at noon was salt and slush and the smell of the falafel place opening, a line out the bagel shop door, a man in a Santa hat outside the bookstore ringing a bell with the grim endurance of somebody on his third hour. The sky was the color of a sink. Everyone she passed had their hood up and their head down, the whole street walking like it was apologizing for something." },
    { n: "She was crossing at the light when she saw him, and she stopped on the curb without meaning to, and somebody bumped her shoulder going past and said *sorry* the way people in Syracuse said sorry, which was mostly to the snow." },
    { place: 'Syracuse · Marshall Street · Café', time: 'Daytime', soft: true },
    { n: "Mark was in the window of the café. The front booth, the one everybody wanted, the one that was never free on a weekend. He had it to himself." },
    { n: "That was the first thing that was wrong. She had never, in a whole semester, seen Mark Lee anywhere by himself. Mark was a person who happened in groups. Mark was the center of a table, the guy who knew the barista's name and the barista's sister's name, the one with an arm over somebody's chair and a laugh going before the joke had finished. She'd watched him walk into rooms all fall and seen the rooms rearrange themselves around him, slightly, the way water does around a stone." },
    { n: "There was nobody around him now. A coffee in front of him with the lid still on, untouched. His phone face down on the table beside it. A yellow legal pad, and a pen, and his hand flat on the pad not writing anything." },
    { n: "Even from across the street she could see the page had been written on. A column of short lines, one under the other, the way you'd make a list. Every line on it had a line through it. Every one but the last." },
    { n: "He wasn't looking at the street. He was looking at that last line. Not reading it; just looking, the way you look at something you already know by heart because you've decided it's the thing you're going to have to do next and you want a second before you have to." },
    { n: "Down the block, the door of the hardware store banged and Jeno came out with a cardboard box in both arms, string lights spilling over the top of it, and Jisung behind him with two more, the party for the nineteenth in pieces, and they came up the sidewalk past the café window laughing about something, and Jisung saw Mark." },
    { n: "His free hand came up, halfway, the beginning of a wave. Then he looked at Jeno. Jeno was looking straight ahead at the snow. Jeno's hands were full, but that wasn't it; Jeno's face was the face of a man who had been told something and agreed with it." },
    { n: "Jisung's hand came back down. He hitched his box higher and kept walking. Neither of them stopped." },
    { n: "Behind the glass, Mark had seen the whole thing. She watched him see it. She watched his face do the Mark thing first, out of pure habit, the easy half-smile coming up to meet the wave that wasn't coming, and then she watched him notice that it wasn't coming and put the smile away again, carefully, like he was putting something back on a shelf where it went. He didn't look after them. He looked back down at the pad." },
    { n: "She had watched that man perform in a hundred rooms. She had watched him be warm in the right places and sorry in the right amount and kind with a receipt clipped to it. She'd never once seen him with nobody to perform for. She hadn't known, until right now, that there was anything left over when the audience went home." },
    { choose: [
      { t: "(Keep walking.)", then: [
        { n: "The light changed. She went with it. She didn't look back at the window, and that was a choice too, and she knew it was, and made it anyway, and it stayed with her for the whole length of the street like a stone in her boot." }
      ] },
      { t: "(Stand there one minute longer.)", then: [
        { n: "She stayed on the curb. The light changed twice. Mark picked up the pen and held it over the last line on the pad for a long time, and then he didn't cross it out. He underlined it. Once, slowly, the whole length of it." },
        { n: "Then he capped the pen and sat back and looked at the coffee he hadn't drunk, and she turned around and walked the other way before he could look up and find her looking. She didn't know what was on that line. She found she didn't want to know, yet, and that she would." }
      ] }
    ] },
    { n: "Whatever it was, he was doing it alone. She'd thought, for weeks, that there was nothing he could do that would make her feel anything about him except tired. She'd been wrong about that, apparently. She wasn't sure yet what the feeling was. It wasn't forgiveness. It sat a long way off from forgiveness, in the cold, with its lid still on." }
  ] },

  // ───────────────────────────── 12/20, after: the last practice (gap 6) ─────────────────────────────
  { id: 'epi-r-last-practice', date: '12/20', title: 'see you in january', slot: 'after', consumes: true, place: 'Syracuse · eSports Lab', time: 'Daytime', scene: [
    { music: 'epi-r-team' },
    { n: "The lab at two o'clock on the last Saturday before break smelled like snow-wet coats and the space heater Doyoung swore he didn't own, and the windows were white all the way up, the real snow, the first real one, coming down outside so thick that the parking lot had stopped being a parking lot and become a suggestion." },
    { n: "Doyoung was at the whiteboard when she came in. Of course he was. He'd been at the whiteboard when the season started and he'd be at it when the building came down. It had been wiped clean the week after Regionals, and for two weeks it had stayed that way, white and blank and somehow louder than any number had ever been, and now there was writing on it again. *NATIONALS.* A date in the spring. Under that, a list, in his small neat capitals: *what we fix.*" },
    { s: 'doyoung', f: 'neutral', t: "Lee. It's 1:58. Sit." },
    { n: "Everybody was already there, which was its own kind of miracle. Chenle at his corner with a stack of printouts so tall it had a slight lean, the Regionals notes, all of them, as promised and apologized for. Haerin in her chair with her knees up and her headset round her neck, eating clementines with surgical precision and lining the peels up on the desk by size. Minji with her cap on backward and her camera in its bag on the floor beside her, for once, zipped." },
    { n: "And Olivia, at the end of the row, with the trophy." },
    { n: "It sat on the desk beside her keyboard where her water bottle usually went. It had lived in her dorm room for two weeks. It had, Olivia informed the room before anyone could ask, a name, and the name was Gregory, and Gregory had been to the dining hall twice and to a Christmas party in Day Hall once and had been, by all accounts, a delight." },
    { s: 'olivia', f: 'happy', t: "He's coming home with me for break. My mom already set a place for him." },
    { s: 'haerin', f: 'neutral', t: "It's a cup." },
    { s: 'olivia', f: 'happy', t: "*He's* a cup. Gregory is a cup. You can be a cup and a person, Haerin." },
    { s: 'haerin', f: 'neutral', t: "You can't." },
    { n: "Chenle, without looking up from his printouts, slid one across the desk toward Olivia, and on it, in his handwriting, was a single line: *Gregory: 0 deaths, 0 assists, 100% win rate.* Olivia looked at it and made a sound like a kettle and put it under the trophy's base like a coaster, and nobody said anything about it again, and it stayed there for the rest of the afternoon." },
    { n: "They played. Not scrims, not really. Doyoung put up a custom game and they ran the maps from the bracket, every one, slowly, stopping and starting, Chenle reading from his notes in a flat voice about where they'd been a half-second late and where they'd been early, Doyoung writing it on the board under *what we fix* in letters that got smaller as the list got longer. Haerin didn't say a word for an hour and hit every shot. Olivia narrated her own deaths in the third person. Minji, beside her, called a flank so quietly that Solar heard it more as a feeling than a sound, and turned, and it was there." },
    { ifEpiRoute: 'minji', then: [
      { n: "Halfway through, Minji's elbow touched hers on the desk, a long way from the two ends of a cold bench on the night of the crossroads, and neither of them moved it, and neither of them looked, and Minji's next callout came out a quarter-step softer than the one before it, which nobody on the team noticed except Chenle, who noticed everything, and wrote nothing down." }
    ] },
    { n: "At four Doyoung stopped the game. He stood at the front with the marker in his hand and looked at the list, which went all the way to the bottom of the board and turned the corner up the side." },
    { s: 'doyoung', f: 'serious', t: "One thing each. For the spring. Not for me. For you. Out loud, so I can hold you to it." },
    { s: 'olivia', f: 'happy', t: "Stop dying to the same Widow." },
    { s: 'haerin', f: 'neutral', t: "Talk more." },
    { n: "Everybody turned round and looked at Haerin. Haerin looked back at them, unbothered, and ate a clementine segment." },
    { s: 'chenle', f: 'neutral', t: "Eat lunch on match days. Apparently it's a problem." },
    { s: 'minji', f: 'neutral', t: "Stop filming when I'm supposed to be playing." },
    { s: 'doyoung', f: 'neutral', t: "Lee." },
    { choose: [
      { t: "My cleanse. It's still half a second late.", then: [
        { s: 'doyoung', f: 'neutral', t: "It was. It isn't anymore. Pick something else." },
        { n: "She looked at him. He didn't look back. He wrote *Lee: cleanse (fixed)* on the board, very small, and then, because he'd made her look, *find something harder,* and the room laughed, and she did too." }
      ] },
      { t: "Make the call before I'm sure.", then: [
        { s: 'doyoung', f: 'serious', t: "Good. That's the right one. That's the one I'd have given you." },
        { n: "He wrote it under her name, *call before sure,* and underlined it, which he did not do for anyone, and Olivia said *ooooh* and Haerin said *teacher's pet* without any inflection at all." }
      ] },
      { t: "(Shrug.) Show up.", then: [
        { n: "Nobody laughed. Doyoung looked at her over the marker for a second, and she watched him decide what that answer had cost." },
        { s: 'doyoung', f: 'neutral', t: "...You did." },
        { n: "He wrote it anyway. *Lee: show up.* Then he drew a very small sun next to it, and when Olivia pointed at it he said it was an asterisk." }
      ] }
    ] },
    { n: "Then he did the thing nobody expected. He picked up the eraser. He stood back from the board and looked at all of it, the season's whole list, the date, the word NATIONALS, all their names and all their one things, and he wiped it." },
    { n: "Top to bottom, in long even strokes, the way he did everything, until the whole board was white again and the only thing left on it was the faint gray ghost of the letters underneath, which no eraser ever quite got." },
    { s: 'olivia', f: 'surprised', t: "Doyoung. *Doyoung.* That was our *list.*" },
    { s: 'doyoung', f: 'neutral', t: "I took a picture. It's in the drive. The board's for January." },
    { s: 'doyoung', f: 'neutral', t: "You don't carry the board home. You carry what's on it. Go home. Sleep. Eat something with a vegetable in it." },
    { n: "Olivia cried, as promised. She'd promised on Monday, in writing, and she kept it the way she kept everything, loudly and all at once, with Gregory in her arms. Haerin handed her a clementine without looking at her, which, from Haerin, was a hug. Chenle said goodbye to each of them by name. Minji filmed the empty board, once, after asking the room, and the room said yes." },
    { n: "Doyoung was the last one at the front, capping the marker. On her way past him, with her bag on her shoulder and the snow already waiting at the door, she saw him reach up and write one more thing, very small, in the bottom corner of the clean board, where the cleaners wouldn't bother with it." },
    { n: "*see you in january.*" },
    { n: "No name on it. It wasn't for anyone in particular. She stood in the doorway and read it twice, a promise in a coach's handwriting about a month she had no idea whether she'd be in, and then she pulled her hood up and went down the stairs and out into the white, and didn't take the back way, and didn't look up." },
    { ifEpiRoute: 'cover', then: [
      { n: "Hanni and Hyein were at the bottom of the steps in the snow, the way they'd been at the bottom of the lab stairs a hundred times this month, Hyein with a bag of gummy worms and Hanni with two coats over her arm, one of which was hers. Nobody had asked them to come. Nobody ever did." }
    ] },
    { stat: { proficiency: 1 } }
  ] }

  );
})();
