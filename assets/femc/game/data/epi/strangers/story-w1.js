/* The strangers epilogue, week 1 (Sun 2/17 - Sat 2/23/2013): the story events. Epilogue batch 7, writer A.
   Home and the cover. Stage 0, then 1 from 2/20. The house holds a lie for her (the fever over Seollal) and she learns to hold
   it back; the three of them who remember the year (Solar, Haechan, Jungwon) find out they share it; the first small wrong
   things (a bell, cold tea, a song, a tide); the night before Daeboreum, who she sits with (the route locks).
   Events (R.events):
     epi-s-home        2/17 early    home: the seventh stair, before light; Appa hands her the fever; the calendar at 55 (consumes)
     epi-s-kitchen     2/17 after    ten people and a bucket of fish: Mrs. Bang drills the fever in front of everyone (consumes)
     epi-s-step        2/17 late     the step: both boys at the annex, the secret, Mandarin, the radio catches a school bell
     epi-s-eomma       2/18 evening  the right hand: Eomma, the hanbok, the pins; Aunt Hyesun on the phone (consumes)
     epi-s-stair       2/19 late     the seventh stair: barley tea at midnight; he asks about the fever; the tea goes cold
     epi-s-trio        2/20 after    errands: a plate back to the Yang house; Jay, Riki, Sunghoon, one beat each; Jungwon (consumes)
     epi-s-humming     2/20 late     molihua: somebody singing in the dark kitchen; nobody there
     epi-s-quay        2/21 after    an hour: the harbor with Haechan; her tide is an hour wrong; he pulls her back (consumes)
     epi-s-girls       2/22 after    the studio girls: Songdo, Yunjin and the four; Riki runs past; the Wolmido plan (consumes)
     epi-s-crossroads  2/23 late     the night before: the annex step / the gate / the kitchen with Appa (the route locks)
   Flags set: epi-s-fever (home), epi-s-secret (step), epi-s-appa-lie / epi-s-appa-quiet (stair, by choice), epi-s-tables (quay),
     epi-route-haechan / epi-route-jungwon / epi-route-family (crossroads).
   Flags read: epi-s-appa-lie, epi-s-appa-quiet (crossroads, the family branch).
   ifYear read: { xmas: 'haechan' }, { xmas: 'jungwon' } (home; crossroads, the gate branch). ifRouteOpen read (as option `when`):
     haechan, jungwon, family (crossroads). No ifEpiRoute (the route isn't locked until the night of 2/23).
   Glitches used: epi-s-g-bell (step), epi-s-g-tea (stair), epi-s-g-hum (humming), epi-s-g-tables (quay);
     { glitch: { strain: 1 } } after each lie that holds the cover (home, kitchen, eomma, stair's lie option);
     { glitch: { near: true } } in the step (both boys silent after the bell) and the quay (Haechan gone quiet).
   Bonds: haechan (quay; crossroads), jungwon (trio, per the table; crossroads), yunjin (girls), eomma (eomma), appa (stair;
     crossroads), each once per scene at most.
   Music: world-strangers (home), epi-s-house (kitchen, trio, quay), epi-s-danger (quay, the step), epi-s-step (step, crossroads),
     epi-s-family (eomma; crossroads family), epi-s-cover (stair, humming), epi-s-yunjin (girls), epi-s-haechan / epi-s-jungwon
     (crossroads branches).
   Inventions for Kat to confirm (structural, small): Aunt Hyesun's side of the family is never named (she rings for every
     holiday, talks, and sent hallabong); the Seollal fruit is Naju pears from the aunts and hallabong from Hyesun, which Solar
     doesn't like, so Appa ate them; the house calendar is the rice shop's, with the countdown written in the corner of every
     square; the Seollal hanbok is pale green and deep rose; the plate she returns to the Yang house is one the Yang kitchen sent
     over at Seollal, and it goes back full of Mrs. Bang's yakgwa; Riki's one Japanese word is "okaeri" (he stops on the second
     syllable); Haechan's radio sits on the coast-weather station at night; the steps at the quay are old stone landing steps
     below the fish-market wall (no quay number); the old passenger terminal's clock is the one that reads 12:00; Kazuha calls to Riki
     "abunai" and he answers "sumimasen" before he can stop himself; Auntie Song goes home at nine with her boots in a bag.
     Tide and moon numbers the later weeks should match: 2/21 low water 15:50 (spring ebb); 2/24 low water about 18:50, high
     water just after 1 a.m., 8.9 m (Appa reads it out); Chaewon's laminated plan has moonrise at 6:19 p.m., meet at six at the
     Wolmido end, everyone home by ten. Kitchen calendar: 55 on 2/17, 52 on 2/20, 49 on 2/23. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 2/17, before light: home ─────────────────────────────
  { id: 'epi-s-home', date: '2/17', slot: 'early', consumes: true, title: 'home', place: 'Incheon · The Lee House · Stairs', time: 'Before Light', scene: [
    { music: 'world-strangers' },
    { n: "The seventh stair creaked the way it had creaked her whole life, a long low complaint in the wood like an old man getting up out of a chair he'd been told not to sit in, and her father stopped on it." },
    { n: "He always stopped there. She'd known that the way she knew the tide, without anybody ever having told her, from twenty-one years of lying awake on the other side of her door listening to him do it: the study door, the slippers, the humming, slow and flat, and then the creak, and then nothing, while he stood on the seventh stair and looked up at the line of light under her door, or the dark, and decided whether to come the rest of the way. He never came the rest of the way. He went back down." },
    { n: "This time she was on the landing above him in her socks with her hair down past her shoulders, and there was no door between them at all." },
    { n: "The hall was dark except for the lamp he'd left on in the study, which threw a long yellow shape up the stairwell and stopped short of her feet. The house was cold the way it was only cold at this hour, the heated floors not yet ticking, the windows giving off the sea. She could feel the tide out under all of it. The whole bay pulled back to the horizon. Low water, and her standing up in the middle of it, awake, which was the one thing about tonight that wasn't new." },

    // The ending's variant, continued.
    { ifYear: { xmas: 'haechan' }, then: [
      { n: "Her feet were still cold from the garden. The frost on the gravel by the annex step had gone straight through her socks while she stood at the bottom of it and said his name, and he hadn't said anything back, not for a long time, and then he'd looked past her up the garden at the one lit window in the house and said, very low, in the voice he used for the old men on the quays when he was being kind and didn't want them to notice, *Go in, agasshi. He's been up all night.*" },
      { n: "When she'd turned round at the kitchen door he was sitting on the step again with the cracked Discman in his hands and the earbuds back in, listening to nothing. The batteries had been dead for years. He'd never once taken them out." }
    ], else: [
      { ifYear: { xmas: 'jungwon' }, then: [
        { n: "Through the landing window she could still see the gate. The lanterns over it were going pale against the sky, and under them, in the dark coat, exactly where he'd been when she came down the front steps, Jungwon was still standing with his hands at his sides." },
        { n: "He'd said the one word, and then he'd bowed again, as if to put it away, and told her in the careful register he always used with her that her father was awake, that she should go in, that he would wait until the door was shut. The door had been shut for ten minutes. He hadn't moved. She didn't think he'd move until it was light, and she didn't think anyone in the house would ask him to." },
        { n: "She still had the word. She'd folded it up small and put it somewhere nobody went." }
      ], else: [
        { n: "Behind her, through her open bedroom door, Yunjin was still asleep on the rug in her nest of blankets with her mouth open, one rabbit-eared sock sticking out of the bottom of it, snoring like a much bigger person. Down on the road, through the landing window, Mr. Oh's car sat with its engine running and its lights off. She'd watched it from her window for a long time before she came out. It hadn't moved. It wasn't going to." }
      ] }
    ] },

    // Appa.
    { n: "Her father looked up." },
    { n: "His reading glasses were hanging on their cord against his cardigan, and his face, without them, without the paper in front of it, was older than she'd left it, or she was only seeing it properly, the way you only see a room properly when you've been gone from it. There was grey at his temples she didn't remember being that grey. There was a crease down one cheek from the arm of the study chair. He'd been asleep in it, then. Or not asleep. Sitting." },
    { n: "He looked at her hair. Down, in the hall, before light, in this house where a Lee daughter did not look undone. He looked at it for a long moment, and his mouth did something small, and he didn't say anything about it." },
    { s: 'appa', t: "Sol-ah." },
    { s: 'solar', t: "Appa." },
    { n: "He didn't come up. She came down, one stair, two, and sat on the eighth so that their heads were level, the way she'd sat on it when she was small and wanted to be told a story she'd already heard, and the wood was cold under her through the boat pajamas and she didn't care." },
    { n: "She waited for it. Her whole body arranged itself around the question the way you brace on a deck when you can feel the swell coming under the hull, her hands flat on her knees, the ring on her right hand turning under her thumb without her telling it to. Where. Where were you. Ten days. She had an answer. She'd had it ready since the dorm kitchen, smooth, true in the places that could be checked." },
    { n: "It didn't come." },
    { n: "He put his glasses on, as if he needed them to look at her, and then took them off again, and let them fall back against his chest on the cord." },
    { s: 'appa', t: "Mrs. Bang's up. She'll want to feed you." },
    { s: 'appa', t: "She's been up since three. She says it's the fish. It isn't the fish." },
    { n: "On the back step, she knew without looking, two koi were going round and round in their bucket under a skin of new ice. She'd heard Mrs. Bang breaking it with the ladle handle. A small sound, very careful, every few minutes, all night." },
    { s: 'appa', t: "You had a fever." },
    { n: "He said it the way he read out the coastal forecast at breakfast to nobody in particular, the wind and the swell height and the visibility off Deokjeok, flat, factual, a thing that had happened to the weather." },
    { s: 'appa', t: "Over Seollal. Thirty-nine point something. You couldn't come down for the bows." },
    { s: 'appa', t: "Your aunts sent fruit. Pears, from Naju. Your aunt Hyesun sent hallabong, which you don't like, so I've been eating them." },
    { n: "She understood about halfway through the pears that it wasn't news." },
    { n: "It was a coat. He was standing on the seventh stair in his slippers at five in the morning, holding it out, open, at exactly the height of her shoulders, the way he'd held her school coat for her every winter morning until she was twelve and told him to stop, and he was waiting for her to put her arms in it. He'd had it ready a long time. Ten days, at least. Long enough to choose the number." },
    { n: "He didn't ask where she'd been. He wasn't going to. He knew she'd lie, and he'd decided, somewhere in those ten days, in that chair, that he would rather hand her the lie himself than make her build one in front of him. That was the gift. She could see the size of it. She could see what it had cost him not to ask, sitting there in the lamp-shape on the stairs with his glasses on their cord, and it nearly undid her, and she sat very still on the eighth stair, because when she was rattled she went stiller, and the shaking could come later, behind a door." },
    { choose: [
      { t: "...Thirty-nine point what?", stat: { charm: 1 }, then: [
        { s: 'solar', t: "Thirty-nine point what?" },
        { s: 'appa', t: "Four." },
        { s: 'appa', t: "Mrs. Bang will tell you. Mrs. Bang has told everybody. She told the man who reads the gas meter." },
        { n: "Something went at the corner of his mouth. Not a smile. The place a smile would have been in a less tired man." }
      ] },
      { t: "(Nod.)", then: [
        { n: "She nodded. Once. That was all it took, in the end. One nod, on a stair, before light." },
        { n: "He nodded back, the same, once, the way two men nod across a table when the price has been agreed and nobody is going to write it down." }
      ] },
      { t: "I'm sorry, Appa.", stat: { kindness: 1 }, then: [
        { s: 'solar', t: "I'm sorry, Appa." },
        { s: 'appa', t: "For a fever?" },
        { n: "He looked at her. For a moment something stood up behind his face, all of it, ten days of it, the chair and the lamp and the seventh stair every single night, and she watched him take hold of it and sit it back down." },
        { s: 'appa', t: "People get fevers, Sol-ah." }
      ] }
    ] },
    { glitch: { strain: 1 } },
    { n: "Somewhere at the back of her head something thin went tight, like a line paid out too far and caught on a cleat. She noticed it. She put it away. She'd been putting things away in this house since she was eleven." },
    { flag: 'epi-s-fever' },
    { s: 'appa', t: "Come down. It's cold up here." },

    // The kitchen, before light.
    { place: 'Incheon · The Lee House · Kitchen', time: 'Morning', soft: true },
    { n: "The kitchen smelled of barley tea and lemon oil and the gas ring, and Mrs. Bang was at the stove with her back to the door, stirring a pot of rice porridge with abalone in it, the pale green kind she made for people who were sick, which nobody in the house was." },
    { n: "She didn't turn round. Her shoulders did. They went up once, under the cardigan, and came down, and stayed down." },
    { s: 'mrsbang', t: "Aigoo." },
    { n: "That was all. She went on stirring. She didn't turn round for a long time, and when she finally did, with the bowl, her face was perfectly normal and her eyes were red at the rims, and she put the bowl down in front of Solar at the end of the long table with a spoon already in it and said nothing whatsoever about anything, which in Mrs. Bang was a speech." },
    { n: "Her father sat at the other end with the paper. He opened it. He didn't read it. She could tell, because she'd watched him read the paper at this table at half past four every morning of her life, and when he read it he moved his lips over the shipping notices, and he wasn't moving his lips." },
    { n: "The calendar hung where it had always hung, on the nail by the fridge, the free one from the rice shop with a picture of a mountain for every month and big red numbers. Since New Year somebody had been writing a second number in the top corner of every square in black pen, small and square, counting down. Somebody had turned the page to February while she was gone, and kept writing." },
    { n: "Today's square said 55." },
    { n: "Fifty-five days. She'd left at sixty-six. She'd come home to the countdown, shorter, in her father's handwriting, and she looked at it for a long time with the spoon in her hand." },
    { n: "Outside, on the sill over the sink, it had started to snow. Small and dry, not settling, the kind that came in off the water and went sideways and didn't mean anything yet. A little of it had caught in the corner of the window frame, white against the dark, the first thing in the house that hadn't been put there on purpose." },
    { n: "She ate the porridge. All of it. Mrs. Bang watched her do it from the stove with the ladle in her hand like a weapon she'd decided not to use." }
  ] },

  // ───────────────────────────── 2/17, daytime: ten people and a bucket of fish ─────────────────────────────
  { id: 'epi-s-kitchen', date: '2/17', slot: 'after', consumes: true, title: 'ten people and a bucket of fish', place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { n: "By noon the kitchen had filled up the way the harbor filled on a flood, from every side at once and faster than you'd think, until there wasn't a stretch of counter left that didn't have somebody's elbow on it." },
    { n: "It was Sunday, which in this house meant dumplings, which meant Auntie Song, five feet tall in her rubber boots, in from Chinatown since ten with a bowl of pork and chives the size of a bathtub, folding at the end of the long table with the speed of a woman dealing cards. Pyo, beside her, was peeling garlic with the expression of a boy defusing it. Mr. Oh sat at the far corner with a cup of instant coffee held in both hands, at ten and two, as if the cup might pull to the left if he let it. Minseok was eating rice standing up by the back door with his coat still on, because he'd come in off the gate and was going back out to it, and the cold came in round him every time the door moved." },
    { n: "Mrs. Bang was everywhere. That was her gift. She was at the stove and the sink and the rice cooker and the back step all inside the same minute, and every time she passed the back step she bent and dropped a pinch of something into the bucket out there, where two koi went round and round under the snow, orange and white, slow, like they'd decided the winter was somebody else's problem." },
    { s: 'mrsbang', t: "Ten people and a bucket of fish in my kitchen, and not one of you can find the sesame oil." },
    { n: "Solar counted, because she counted. Mrs. Bang, Auntie Song, Pyo, Mr. Oh, Minseok, herself. Her father in the study with the door open an inch. Yunjin and Yunjin's mother in the room next to hers upstairs. Haechan, out since nine in the Rexton on some errand of her father's that nobody had named in front of her. That made ten, if you were generous, and Mrs. Bang was generous, and the fish didn't count, Mrs. Bang said, though she fed them first." },
    { n: "It was the loudest the kitchen had ever been, and she sat in the middle of it at the end of the long table with her hair pinned up again, properly, the long black pin, and let it go on round her like weather." },
    { s: 'auntie', t: "*Little moon.*" },
    { n: "Auntie Song said it in Mandarin without looking up from the dumplings, the way she'd said it since Solar was nine and standing on a crate at her elbow with a fish knife too big for her hand. *Xiao yueliang.* Then a dumpling arrived on the table in front of her, pleated, perfect, raw, as if it had been flicked there." },
    { s: 'auntie', t: "*You're thin. Eat that when it's cooked. Not before. I know you.*" },
    { s: 'solar', t: "*I haven't eaten a raw one since I was ten.*" },
    { s: 'auntie', t: "*Eleven. You were sick on my boots.*" },
    { n: "Pyo, who only knew his own name in Mandarin, looked from one of them to the other with the face of a boy who was sure, absolutely sure, that he was being discussed, and peeled faster." },

    // Eomma, passing.
    { n: "Her mother came through at a quarter past twelve." },
    { n: "She came through the way she came through every room, as if she'd been sent for and was being gracious about it, in a cream cardigan with her hair done, a ledger under one arm and a pen in the hand that held it. The kitchen didn't go quiet, exactly. It went careful. Pyo stopped peeling. Minseok stood up straighter by the door without seeming to." },
    { n: "She didn't stop. She passed behind Solar's chair on her way to the sunroom, and as she passed she reached down and took Solar's right hand off the table, lightly, by the fingers, and turned it over, and back, and ran her thumb once across the jade ring, the way you'd check a lock you'd already checked. The ring was where it lived. Her mother put the hand back down on the table exactly where she'd found it." },
    { n: "Then she was gone through the sunroom door, and the kitchen started again, and Solar sat looking at her own hand on the table for a while as if it belonged to someone who'd been lent it." },

    // Yunjin.
    { n: "The door to the back stairs banged open hard enough to bounce." },
    { s: 'yunjin', f: 'happy', t: "SOL." },
    { n: "Yunjin came through it in socks and the red puffer zipped to her chin over her pajamas, with her hair in a claw clip that had given up halfway, and the whole kitchen flinched in a single motion except Auntie Song, who had been flinched at by better." },
    { s: 'yunjin', f: 'happy', t: "You're downstairs. You're *vertical*. Mrs. Bang, she's vertical, you said she'd be in bed till Tuesday." },
    { s: 'mrsbang', t: "I said she *should* be in bed till Tuesday." },
    { s: 'yunjin', f: 'happy', t: "Pyo. Pyo, buddy. Garlic? On a Sunday? Bold. I respect it. Mr. Oh, you look incredible, have you done something with your coffee. Minseok, shut the door, I'm from New York, I'll die." },
    { n: "She said everything. She said everything about the snow and the puffer and the claw clip and the koi, who she leaned out of the back door to address personally as Mr. and Mrs. Kim, in the gravel voice she had now, the one that came up from somewhere lower than it used to since December, and she said everything about the dumplings, and she put her chin on top of Solar's head from behind and left it there, heavy, and narrated the room like a nature documentary." },
    { n: "She didn't say one single word about Japan." },
    { n: "That was how Solar knew she remembered it. Yunjin had never in her life been loud about everything except one thing. The one thing was always the loudest thing in the room, the way a hole in a fence is the loudest part of the fence." },
    { n: "She bent down, under the noise, and put her mouth by Solar's ear." },
    { s: 'yunjin', f: 'neutral', t: "Later. Not in here. I'm not crying in front of Pyo." },
    { s: 'yunjin', f: 'happy', t: "Also nice fever. Very convincing. Ten out of ten. I told everyone you threw up on the chandelier." },

    // Mrs. Bang drills the fever.
    { n: "Mrs. Bang put a plate of cooked dumplings in the middle of the table, steam coming off it in a sheet, and wiped her hands on her apron, and looked round the kitchen once, slowly, at all of them, like a schoolteacher checking that the whole class was looking at the board." },
    { s: 'mrsbang', t: "Thirty-nine point four." },
    { n: "Nobody had asked. The kitchen went quiet anyway." },
    { s: 'mrsbang', t: "Thirty-nine point four, on Seollal morning. She couldn't keep rice down. Not even the water off the rice. Three days, she didn't come down those stairs. I took her a basin every two hours." },
    { n: "She said it to the room. Not to Solar. To Pyo, and Minseok, and Mr. Oh, and the open inch of the study door, and Auntie Song's quick hands, in the voice she used to tell the fish man how much his flounder was actually worth, and Solar understood, sitting there with a dumpling halfway to her mouth, that this wasn't a story. It was a drill. Mrs. Bang was walking the whole kitchen through it, once, out loud, so that every single person in it would tell it the same way if anybody ever asked them, down to the basin." },
    { n: "And now it was her turn. Mrs. Bang was looking at her. Everybody was looking at her. It was her own fever. She'd have to have it." },
    { choose: [
      { t: "(Perform it properly.) I don't remember most of it.", stat: { charm: 1 }, then: [
        { s: 'solar', t: "I don't remember most of it. I remember the ceiling." },
        { s: 'mrsbang', t: "You were talking nonsense. About tides. The whole second night, the tides, what time, what height." },
        { n: "It was such a good detail that for a second Solar nearly believed it herself, and she had to look down at her plate so nobody would see her face doing something about it." },
        { s: 'pyo', t: "I heard her coughing! Through the floor! Like a seal!" },
        { s: 'mrsbang', t: "Nobody asked you, Pyo." },
        { s: 'pyo', t: "...Like a small seal." }
      ] },
      { t: "(Keep it short.) It was just a fever.", then: [
        { s: 'solar', t: "It was just a fever." },
        { s: 'mrsbang', t: "*Just.* Thirty-nine point four is not *just*. You listen to her. *Just.*" },
        { n: "Mrs. Bang said it to the room, outraged, as if Solar had insulted the fever personally, and Minseok nodded at the floor with great seriousness, and the story was, if anything, stronger than before for having been argued with." }
      ] },
      { t: "You sat with me?", stat: { kindness: 1 }, then: [
        { s: 'solar', t: "You sat with me?" },
        { n: "Mrs. Bang looked at her. Something went across her face too fast to see, and then her hand came out and did a thing it hadn't done since Solar was small, which was to tuck a loose bit of hair back behind her ear, roughly, as if it had personally offended her." },
        { s: 'mrsbang', t: "Every night." },
        { n: "It was true. Solar could hear that it was true. Somewhere upstairs there was a chair outside her bedroom door that hadn't been there before, she'd walked past it this morning without seeing it, and she saw it now, in her head, very clearly, and she put her dumpling down." }
      ] }
    ] },
    { glitch: { strain: 1 } },
    { n: "It held. She felt it hold. The whole room took it from her and folded it in, the way Auntie Song folded a dumpling shut with three pinches, and nobody would ever open it again unless she did." },
    { n: "Mr. Oh, at the far corner, lifted his coffee cup half an inch off the table toward her, both hands, ten and two, the way another man might have lifted a glass. Then he drank from it and put it down and looked out of the window at the snow." },
    { n: "Yunjin took the dumpling off her plate and ate it." },
    { s: 'yunjin', f: 'happy', t: "Recovery tax." },
    { n: "The back door went again. Snow came in, and cold, and Minseok's elbow, and a smell of diesel from the road where a car was pulling up that wasn't the Rexton, and then wasn't anything, a delivery, gone. Solar's head had turned toward it before she could stop it. So had Yunjin's. Neither of them said so." },
    { n: "He wasn't back yet. Neither of them was. They'd both be here by dark, she thought, one of them through the kitchen and one of them through the gate, the way things were now, and she took another dumpling off the plate, cooked, as instructed, and held it until it was cool enough to eat, and ate it." }
  ] },

  // ───────────────────────────── 2/17, late: the step ─────────────────────────────
  { id: 'epi-s-step', date: '2/17', slot: 'late', title: 'the step', place: 'Incheon · The Lee House · Garden', time: 'Late Night', scene: [
    { music: 'epi-s-step' },
    { n: "At half past eleven she took the pins out." },
    { n: "One at a time, at the mirror, the long black one last, and laid them in a row on the dresser the way her mother had taught her to, so you could find them again in the dark. Then she put her coat on over the boat pajamas and went down the back stairs in her socks with her boots in her hand, and past the koi asleep under their ice, and out." },
    { n: "The snow had stopped at dusk and left a thin crust on everything that broke under her boots like a skin of burnt sugar. The garden went down in three terraces to the old wall at the bottom, and the annex sat against it with its steel door and its one small window, and the light was on. It had been on every night since she was home. She'd checked. Three times last night, if she was honest, and she wasn't, often, in this house." },
    { n: "There were two of them." },
    { place: 'Incheon · The Lee House · Annex', time: 'Late Night', soft: true },
    { n: "Haechan was on the step, the way he'd been on the step every time she'd checked, sitting with his knees up and his forearms on them and the black padded work jacket open over a sweatshirt, chewing gum, cinnamon, she could smell it from the second terrace. Behind him on the sill the old silver radio was on low, the coast-weather station, a man's voice reading out wind speeds for places nobody would ever go on holiday." },
    { n: "Jungwon was standing by the bare persimmon tree in a dark coat, with his hands at his sides, on the other side of about two meters of frozen gravel that nobody had walked across." },
    { n: "Two meters. She could see it from the terrace, how exact it was. Not far enough to be rude. Not near enough to be anything else. Two men who had been standing in the same small garden in the cold for some time, she suspected, in silence, out of a shared and mutual refusal to be the one who left first." },
    { s: 'haechan', f: 'neutral', t: "Agasshi." },
    { n: "Jungwon bowed. Properly, from the waist, in the snow, as if she'd come down a staircase in a hotel." },
    { s: 'jungwon', f: 'neutral', t: "Good evening. I hope you're warm enough." },
    { s: 'solar', t: "How long have you been standing there?" },
    { s: 'haechan', f: 'neutral', t: "An hour. He won't sit. I offered him the step." },
    { s: 'jungwon', f: 'neutral', t: "You offered me the bottom step." },
    { s: 'haechan', f: 'happy', t: "It's a good step. My feet are on it. It's warm." },
    { n: "The dimples came out. Both of them, deep, sweet, the most polite thing about him, and she knew what that meant, because she'd learned his face backwards months ago: he was being exactly as courteous as he'd be to a man he was about to ruin." },
    { s: 'jungwon', f: 'happy', t: "That's very generous, Donghyuck." },
    { s: 'haechan', f: 'neutral', t: "I'm a generous man. Ask anyone. Ask the young master's tailor." },
    { s: 'solar', t: "Why are you here?" },
    { n: "She asked Jungwon. They both knew who she was asking." },
    { s: 'jungwon', f: 'neutral', t: "Because of the phones." },
    { n: "He said it simply. Everybody's phone in both houses was listened to, everyone knew it, and the people who knew it used their phones for the weather and for being late and for nothing else, and said the rest in person, in kitchens and cars and at the bottoms of gardens, and in other languages." },
    { s: 'jungwon', f: 'neutral', t: "Some things are better said in a garden." },
    { s: 'solar', t: "And what are we saying?" },
    { n: "Nobody answered." },
    { n: "The radio read out the wind at Baengnyeong. Northwest, eight to twelve meters a second. Swell two meters. Haechan's gum stopped." },
    { choose: [
      { t: "(Sit on the step.)", then: [
        { n: "She sat on the step next to him, on the cold half, and he moved over without being asked so she got the warm half instead, which was his way of saying a thing without saying it, and she pretended not to notice, which was hers." },
        { n: "Jungwon watched them do it. His face didn't change at all. He came one step closer across the gravel, which was one step more than he'd come in an hour, and stopped." }
      ] },
      { t: "(Stay standing, between them.)", stat: { courage: 1 }, then: [
        { n: "She stood in the middle of the two meters. Exactly in the middle. She knew how far it was because she'd counted it from the terrace, and she put herself on the line of it like a buoy, and the two of them looked at her standing there, and then, briefly, at each other, over her head, for the first time all night." },
        { n: "Haechan looked away first. That was almost the most interesting thing that happened." }
      ] },
      { t: "(Go and stand by Jungwon.)", then: [
        { n: "She went and stood by the persimmon tree. Not touching him. A hand's width away. Close enough to feel that he gave off no warmth and no smell at all, the strangest thing about him, a man standing in the cold like a clean page." },
        { n: "Haechan looked at the two of them under the tree and blew a small bubble with the gum and popped it, very loudly, in the silence." }
      ] }
    ] },

    // The secret.
    { s: 'solar', t: "You remember." },
    { n: "She didn't make it a question. It wasn't one. She'd seen it in both their faces in the dorm kitchen by a door that hadn't been there, and she'd seen it at the bottom of this garden and at that gate, and she'd been waiting all day, through dumplings and a fever, for somebody to say it out loud in a place where it could be heard." },
    { s: 'haechan', f: 'serious', t: "Don't." },
    { s: 'jungwon', f: 'neutral', t: "Yes." },
    { n: "They said it at the same time. Haechan looked at the persimmon tree like it had spoken out of turn." },
    { s: 'haechan', f: 'serious', t: "...Yeah. I remember." },
    { s: 'haechan', f: 'neutral', t: "A whole year of nobody understanding a word I said. Except you. Every shop. Every train. I pointed at things for a year, agasshi. I pointed at a man's dog once for ten minutes because I thought it was a menu." },
    { s: 'haechan', f: 'neutral', t: "And this one, it turns out, reads Japanese. Never said. Let me point at the dog." },
    { s: 'jungwon', f: 'neutral', t: "You never asked." },
    { s: 'haechan', f: 'neutral', t: "I don't ask you things, Yang." },
    { s: 'jungwon', f: 'happy', t: "No. You point at dogs." },
    { n: "It should have been funny. It was, a little. She laughed, and it came out of her wrong, too short, a sound like something dropped, and both of them looked at her at once, and the laugh stopped." },
    { n: "Ten days here. A year there. A dormitory by a bay and a moon that was too big, and three people standing in a frozen garden in Incheon who all had it in them at the same time, in the same order, the same green, the same midnight, and nobody else in the whole house did. Not her father. Not Mrs. Bang. Not the koi. Nobody had a word for the arithmetic of it, and none of them tried to find one." },
    { n: "Jungwon asked her something, then, very quietly, in Mandarin." },
    { s: 'jungwon', f: 'neutral', t: "*Did you sleep at all?*" },
    { n: "And she answered him in Mandarin before she'd decided to. It was just there, under her tongue, the way it was always there with him, the street Mandarin of the Chinatown aunties and his careful schoolroom kind, meeting halfway." },
    { s: 'solar', t: "*No. The tide was out.*" },
    { s: 'jungwon', f: 'neutral', t: "*It's always out when you can't sleep.*" },
    { s: 'solar', t: "*That's how I know it's out.*" },
    { n: "Something moved in his face. Not the dimples. The other thing, the stillness that came over him when he was actually pleased, which most people mistook for nothing at all." },
    { s: 'jungwon', f: 'neutral', t: "You still do that." },
    { n: "In Korean, that. For Haechan to hear. Or not for Haechan, exactly. Just so that it would be said in the language of the garden." },
    { n: "A year of another language in her mouth, every day, all day, and the first time a word of Mandarin came out of her since she'd been home, it had come out for him, without asking her. She hadn't known that until it happened. He'd known it before she had." },
    { n: "Haechan had gone quiet." },
    { n: "Not the sulking kind. She knew the sulking kind; it came with commentary. This was the other one, the real one, where he stopped talking and stopped chewing and looked at something in the middle distance, the radio, the wall, the dark, and his split knuckles went white for a second on his knees and then didn't." },
    { s: 'haechan', f: 'neutral', t: "Korean, young master. In this garden it's Korean. The Chairman's rule." },
    { s: 'jungwon', f: 'neutral', t: "The Chairman has no such rule." },
    { s: 'haechan', f: 'neutral', t: "He does now. I just made it. I'll tell him in the morning. He'll love it." },

    // The bell.
    { n: "The radio on the sill went to static." },
    { n: "It did that. It was an old radio, older than Haechan, silver going green at the seams, and the coast-weather station came and went with the weather it was reading out, and none of them looked round." },
    { glitch: 'epi-s-g-bell' },
    { n: "Then, out of the static, clear as if somebody had opened a window onto it, a bell." },
    { n: "Four notes, falling. Then four more, answering. A school chime, electric, a little flat on the third note the way it had always been a little flat, the one that went off over the whole of a school by a bay at half past eight every morning and at three-thirty every afternoon and that she'd stopped hearing, by May, the way you stop hearing your own heartbeat." },
    { n: "Two seconds. Then the static. Then the man's voice again, from very far away, reading out the swell at Yeonpyeong." },
    { n: "None of them moved." },
    { n: "She looked at Haechan. He was looking at the radio. She looked at Jungwon. He was looking at the radio, and his hand had gone, slowly, to his watch, the old one with the link taken out, and stayed there." },
    { n: "Haechan reached up behind him without turning round and turned the radio off with one finger." },
    { n: "The garden got very quiet. The sea under the wall. A car, far off, on the harbor road. The tick of Jungwon's watch under his fingers, which she could hear, in that quiet, the way she'd heard it at a gate." },
    { s: 'haechan', f: 'serious', t: "You heard that." },
    { n: "He said it to Jungwon. It was the first thing he'd said to him all night that didn't have an edge on it." },
    { s: 'jungwon', f: 'serious', t: "Yes." },
    { s: 'haechan', f: 'serious', t: "Good. I thought it was just me." },
    { n: "That was all he said. He didn't make a joke. She waited for the joke and it didn't come, and that was worse than the bell." },
    { glitch: { near: true } },
    { n: "They stayed like that a while. The three of them, in the cold, not talking, a careful distance apart, round a radio that was switched off, like people who've heard a sound in the house in the night and are each waiting for somebody else to be the one to go and look." },
    { choose: [
      { t: "It was the school bell. Gekkoukan's.", stat: { knowledge: 1 }, then: [
        { s: 'solar', t: "It was the school bell. The one at Gekkoukan. It's flat on the third note. It was always flat." },
        { s: 'haechan', f: 'neutral', t: "I know what it was, agasshi. I heard it enough." },
        { s: 'jungwon', f: 'neutral', t: "It's still flat." },
        { n: "He said it as if that were the strangest part. Maybe it was. Wherever it was, that bell, somebody still hadn't fixed it." }
      ] },
      { t: "(Say nothing.)", then: [
        { n: "She said nothing. Neither did they. It turned out that was a thing three people could agree on without a word of any language, and they agreed on it, for a long time, in the cold." }
      ] }
    ] },
    { n: "Jungwon was the one who moved. Of course he was. He bowed to her again, in the snow, exactly as deep as before, as if to show the bell hadn't changed anything about the angle." },
    { s: 'jungwon', f: 'neutral', t: "It's late. Your father will want the gate locked. I'll say goodnight." },
    { s: 'jungwon', f: 'neutral', t: "Donghyuck." },
    { s: 'haechan', f: 'neutral', t: "Yang." },
    { n: "He went up the garden on the path, not across the terraces, and she listened to his shoes on the crust of the snow all the way up past the kitchen and round the side of the house to the gate, and she heard the gate, and she didn't hear a car for a long time after that." },
    { n: "Haechan didn't turn the radio back on. He sat on the step with his forearms on his knees and looked at the place by the persimmon tree where Jungwon had been standing, at the two neat prints in the snow, very close together, very still." },
    { s: 'haechan', f: 'neutral', t: "Go to bed, agasshi." },
    { s: 'solar', t: "You go to bed." },
    { s: 'haechan', f: 'neutral', t: "I'm in bed. This is my bed. It's a step. I'm very comfortable." },
    { n: "She didn't go to bed. She sat on the step beside him until her socks were wet through, and neither of them said anything about the bell, or the year, or the man with no scent who would be standing in the cold on the other side of the gate until her light went out, she knew, she knew exactly, and the radio sat on the sill behind them, switched off, and she kept watching it anyway, out of the corner of her eye, the way you watch a dog you've been told doesn't bite." },
    { flag: 'epi-s-secret' }
  ] },

  // ───────────────────────────── 2/18, evening: the right hand ─────────────────────────────
  { id: 'epi-s-eomma', date: '2/18', slot: 'evening', consumes: true, title: 'the right hand', place: 'Incheon · The Lee House · Her Room', time: 'Evening', scene: [
    { music: 'epi-s-family' },
    { n: "Monday came in grey off the water and stayed grey, the kind of February day that never properly got light, the harbor and the sky the same colour so you couldn't see where one stopped, and by six the windows of her room were black mirrors with her in them." },
    { n: "The hanbok was still hanging on the wardrobe door." },
    { n: "Pale green jeogori, deep rose chima, in the dry cleaner's plastic, the long ribbon pressed flat and pinned so it wouldn't crease. Her Seollal hanbok. Somebody had collected it on the eighth, she could see the ticket stapled to the hanger, and hung it there for the morning of the tenth, when she would have put it on and gone down and knelt in front of her aunts and her father's old friends and done the bows and taken the New Year money and said the right thing to every single one of them, and it had hung there instead, on its own, for a week and a half, in an empty room, being ready." },
    { n: "She hadn't touched it. She'd walked round it all day like it was asleep." },
    { n: "Her mother knocked once and waited. That was how her mother knocked, as if the door might have an opinion and she was prepared to hear it out." },
    { s: 'solar', t: "Come in." },
    { n: "She came in. Cream cardigan, the pearl studs, her hair done the way it was always done, low and smooth and not one strand out of place at six in the evening on a Monday, which had always seemed to Solar like a kind of magic trick, or a threat. She closed the door behind her without a sound." },
    { n: "She looked at the hanbok before she looked at Solar. A long look. The kind she gave a ledger with a number in it she hadn't put there." },
    { s: 'eomma', t: "It was pressed on the eighth." },
    { s: 'eomma', t: "Mrs. Bang wanted to put it back in the paper. I told her to leave it where it was." },
    { n: "She didn't say why. Solar didn't ask. It hung between them in its plastic, pale green and deep rose, and both of them looked at it for a while like it was the third person in the room and had just said something neither of them wanted to answer." },
    { s: 'eomma', t: "Sit down. Your hair's coming out at the back." },

    // The mirror.
    { n: "She sat at the dressing table. Her mother stood behind her and took the pins out, one at a time, and laid them in a row on the glass in the order they'd come out, the way she'd taught Solar to do it when she was seven and couldn't reach the mirror without kneeling on the stool. Then the brush. Long, slow strokes from the crown, the bristles dragging a little at the ends where the wave was." },
    { n: "Solar counted them. She'd always counted them. When she was small it was supposed to be a hundred, and her mother had never once got to a hundred, she always stopped somewhere in the seventies to say something, and the something was always the real reason she'd come in." },
    { n: "In the mirror, the two of them. Her mother's face, composed, over her shoulder. Her own, under it, composed. The same face, people said, twenty-nine years apart. She'd never seen it as clearly as she did now, with the lamp on and the window black behind them both: two women in a glass being exactly as calm as each other on purpose." },
    { n: "Forty. Fifty-one. Sixty." },
    { n: "At sixty-three her mother put the brush down and picked up Solar's right hand from her lap, and turned it over, and back." },
    { n: "The jade ring had slipped round on her finger. The carving was facing her palm, the plain side out, the way it never sat, because it never moved, because it had fitted exactly since the day her grandmother's hands had put it there. Her mother turned it back with one finger so the carving faced out again, and held it there a moment, and let go. It slid round again almost at once." },
    { s: 'eomma', t: "It's loose." },
    { s: 'solar', t: "It's cold. My hands shrink in the cold." },
    { s: 'eomma', t: "You've lost weight." },
    { n: "It wasn't a question. It was a figure entered in a column. Her mother looked at the ring a moment longer and then picked the brush back up." },
    { n: "Sixty-four. Sixty-five." },
    { s: 'eomma', t: "Your father hasn't slept." },
    { n: "She said it to the mirror. To the Solar in the mirror, not the one in the chair, very evenly, while the brush went down and down, and Solar watched her mother's face say it and didn't see one single thing move in it, and knew from that exactly how much it had cost." },
    { n: "Where. Now. This would be when. She felt it come up through the brush strokes, the question, the way you feel a boat's engine through the deck before you hear it." },
    { n: "It didn't come. Her mother went on brushing." },
    { choose: [
      { t: "(Let her brush it.)", then: [
        { n: "She let her. She sat very still and let her mother brush her hair in the lamplight like she was seven, and didn't say anything, and her mother didn't, and somewhere in the seventies the brush slowed down and kept going anyway, past the place it always stopped." },
        { n: "Seventy-eight. Seventy-nine. She lost count. She had never lost count in her life." }
      ] },
      { t: "He hasn't?", then: [
        { s: 'solar', t: "He hasn't?" },
        { s: 'eomma', t: "He sits in the study. He says he's reading." },
        { s: 'eomma', t: "Your father hasn't read a book since nineteen eighty-eight." },
        { n: "Something happened at the corner of her mother's mouth in the mirror. It could have been the start of a smile, on another woman. Then it was gone, filed, and the brush went on." }
      ] },
      { t: "(Put your hand over hers on the brush.)", stat: { kindness: 1 }, then: [
        { n: "She reached up over her own shoulder and put her hand over her mother's, on the handle of the brush, and stopped it." },
        { n: "Her mother let it be stopped. That was the astonishing thing. She stood behind the chair with Solar's hand over hers and didn't take it away, for one breath, two, three, and in the mirror her face didn't change at all, and under Solar's palm her mother's knuckles were very cold and not entirely steady." },
        { n: "Then she slid her hand out, gently, and went on brushing, as if nothing had happened, which in this house was how you said it had." }
      ] }
    ] },
    { bond: { eomma: 1 } },

    // Aunt Hyesun.
    { n: "Her mother's phone went in her cardigan pocket. She took it out, looked at the name, and something about her face set, the way plaster sets." },
    { s: 'eomma', t: "Hyesun." },
    { s: 'eomma', t: "She's rung every day. She wants to hear it from you." },
    { n: "She held the phone out over Solar's shoulder. Not urging. Just holding it, at the height of her ear, the way her father had held out the fever on the stairs, so that all Solar had to do was turn her head." },
    { n: "Everybody knew the phones were listened to. Her mother knew it better than anyone. Whatever she said into this one she'd be saying to the room on the other end of it as well, whoever was sitting in it. The best lies were the ones you told to two people at once and both of them believed." },
    { s: 'solar', t: "Gomo." },
    { s: 'aunt', t: "*Sol-ah!* There she is! Is that her? Is it you? You sound terrible. You sound like a crow. Thirty-nine point four, your father said, *thirty-nine*, I nearly drove down, I said to your uncle, I'm driving down, and he said Hyesun, there's ice on the expressway, and I said she's my only niece, and he said she's got a whole house full of people, and I said—" },
    { n: "Aunt Hyesun didn't need anyone else on a phone call. She'd never needed anyone else. She could have run a call on her own, both halves, and been thrilled with how it went." },
    { s: 'aunt', t: "Did they take you to the hospital? Which hospital? Not the big one by the station, I hope, your uncle had his knee done there and they left him in a corridor for four hours, I said to the nurse—" },
    { n: "Which hospital. There it was. A plain question, from a woman who meant nothing by it, with a hole in the bottom of it you could put your foot straight through." },
    { choose: [
      { t: "Appa had the doctor come to the house.", stat: { knowledge: 1 }, then: [
        { s: 'solar', t: "No hospital. Appa had the doctor come to the house." },
        { s: 'aunt', t: "Of course he did. Of course he did, your father, he'd have a surgeon come to the house for a splinter. Did he give you the injection? The one in the—" },
        { s: 'solar', t: "Gomo." },
        { s: 'aunt', t: "Fine, fine, I won't say where. Your mother's listening, isn't she. Hello, Miseon." },
        { n: "Behind her, in the mirror, her mother didn't move a muscle." }
      ] },
      { t: "(Cough. Convincingly.)", stat: { charm: 1 }, then: [
        { n: "She coughed. It came up out of her chest the way she'd heard Pyo describe it, small and barking, and she let it go on a beat longer than was dignified, and at the end of it she let her voice crack." },
        { s: 'aunt', t: "*Aigoo*, listen to that. Listen to that! No, don't talk. Don't talk, you'll make it worse. Drink something hot. Is there ginger? Tell Mrs. Bang ginger. Jujube and ginger. Don't talk." },
        { n: "In the mirror her mother's eyebrows went up a quarter of a centimetre, which from her was a standing ovation." }
      ] },
      { t: "I don't remember much. Eomma sat with me.", then: [
        { s: 'solar', t: "I don't remember much of it. Eomma sat with me." },
        { n: "She felt her mother hear it. Behind her. Felt the brush, which had been resting against her shoulder, stop being a brush and become a thing her mother was holding very still." },
        { s: 'aunt', t: "Did she! Miseon? Sat up with you? Well. Well, good. Good for her. I always said she had it in her, under all the—well. Good." },
        { n: "In the mirror her mother's face did nothing at all. But she didn't correct it. She stood there and let it be true, out loud, on a line that somebody else was listening to, and Solar would think about that later more than she wanted to." }
      ] }
    ] },
    { glitch: { strain: 1 } },
    { n: "It held. She could feel it hold the way you feel a knot hold when the line goes taut, the little jump of it through your hands. Somewhere behind her eyes the thin cold wire pulled again, and she let it, and went on smiling at a phone." },
    { s: 'aunt', t: "Well, I won't keep you. The pears were all right? I told them Naju, I said only Naju, you can't send a sick girl pears from just anywhere. And your father liked the hallabong? He said he liked the hallabong." },
    { s: 'solar', t: "He loved the hallabong." },
    { s: 'aunt', t: "I knew it. Rest! Eat! Don't talk! Put your mother on." },
    { n: "Her mother took the phone. She said *yes* four times, and *the pears were lovely*, and *she's tired, Hyesun*, and *yes*, and then she ended the call and put the phone back in her cardigan pocket and picked up the first of the pins from the glass." },
    { n: "She put Solar's hair back up. All of it, properly, the way it was supposed to go, every pin in the order it had come out. It wasn't late yet. A Lee daughter did not look undone before midnight, not even in her own room, not even this week." },
    { s: 'eomma', t: "There." },
    { n: "She didn't ask where. She hadn't. She wasn't going to. Solar understood, watching her in the mirror tuck the last pin in with one precise push, that her mother had come up here to do exactly this, the pins and the brush and the ring and the phone, and nothing else, and had done it." },
    { n: "On her way out her mother stopped by the wardrobe and put her hand flat on the hanbok's plastic, smoothing it, from the shoulder down, once. Then she left it hanging where it was and went out, and closed the door without a sound." }
  ] },

  // ───────────────────────────── 2/19, late: the seventh stair ─────────────────────────────
  { id: 'epi-s-stair', date: '2/19', slot: 'late', title: 'the seventh stair', place: 'Incheon · The Lee House · Stairs', time: 'Late Night', scene: [
    { music: 'epi-s-cover' },
    { n: "At ten to midnight the study door opened." },
    { n: "She was awake. She was always awake at ten to midnight; it had been the hour of something for a whole year, in a dormitory a long way away, and her body hadn't been told yet that it could stop. She lay on her back in the dark with her hair down on the pillow and listened to her father come up the stairs." },
    { n: "Slippers. Slow. Humming, the old flat trot he always hummed when he thought nobody could hear, the one about the harbor at Mokpo and a girl who didn't wait. First stair. Third. Fifth." },
    { n: "The seventh creaked." },
    { n: "Then nothing, the way there was always nothing, while he stood on it and looked up at her door. She waited for the creak again, the other way, him going back down." },
    { n: "It didn't come. There was a small sound instead, a little hollow knock of china on wood, twice. Then the stair creaked once more, lower, the particular low note of a man of fifty-six sitting down on it." },
    { n: "She got up." },
    { place: 'Incheon · The Lee House · Stairs', time: 'Late Night', soft: true },
    { n: "He was sitting on the seventh stair in his cardigan with his reading glasses hanging on their cord, and on the stair beside him were two cups of barley tea, the old brown ones from the back of the cupboard, steam coming off both of them in the cold of the stairwell." },
    { n: "Two. He hadn't come up to see if she was awake. He'd come up knowing." },
    { s: 'appa', t: "Mrs. Bang leaves the pot on the back of the stove. She thinks I don't know." },
    { n: "He held one up. She came down and took it and sat on the eighth stair, above him, where she'd sat on Sunday, and wrapped both hands round the cup. It was too hot to hold, nearly. She held it." },
    { n: "Neither of them said anything for a while." },
    { n: "Her father was very good at saying nothing. It was the loudest thing he did. In a room full of men shouting about money he could say nothing in a way that made every single one of them stop and look round to see what they'd done, and he was doing it now, on the stairs, at midnight, to her, gently, without seeming to try, and she sat in it the way you sit in a bath that's slightly too hot and you're not going to be the one to get out first." },
    { n: "The hall clock ticked at the bottom of the stairs. The tide was going out. She could feel it." },
    { s: 'appa', t: "Thirty-nine point four is high, Sol-ah." },
    { n: "He said it to the hall below them, not to her. Mildly. The way he'd step onto the deck of a boat he didn't trust and put his weight down on one board, slowly, and stand there, and listen to see what it said." },
    { s: 'appa', t: "When you were small your fevers broke in the night. Always the night. You'd wake up wet through and ask for watermelon. In January. Your mother sent Mr. Oh to four markets once." },
    { n: "The board. He was standing on it. Waiting to hear it creak." },
    { choose: [
      { t: "It broke on the third night. I asked for watermelon.", flag: 'epi-s-appa-lie', then: [
        { s: 'solar', t: "It broke on the third night." },
        { s: 'solar', t: "I asked for watermelon." },
        { n: "It came out easily. That was the worst of it. Smooth and small and in exactly the right voice, a little sheepish, the voice of a girl who'd asked for watermelon in February and knew it was stupid, and she heard it come out of her own mouth and land on the stair between them, and hold." },
        { glitch: { strain: 1 } },
        { s: 'appa', t: "There's no watermelon in February." },
        { s: 'solar', t: "Mrs. Bang found one." },
        { n: "He looked at his tea. He nodded, slowly, as if that was exactly what Mrs. Bang would have done, which it was." },
        { s: 'appa', t: "She would." },
        { n: "The board held. He took his weight off it. Somewhere at the back of her head the cold wire went tight again, a notch further than before, and she felt it the way you feel the first ache in a tooth, and drank her tea round it." }
      ] },
      { t: "(Say nothing at all.)", flag: 'epi-s-appa-quiet', then: [
        { n: "She said nothing." },
        { n: "She held the cup and looked at the hall and gave him nothing back at all, not a lie and not the other thing, just the quiet, the same quiet he'd taught her, and she watched him hear it." },
        { n: "He nodded. Slowly. Like a man at a table who's been shown a hand he can't read and has decided he respects it." },
        { s: 'appa', t: "No." },
        { n: "That was all. *No.* As if she'd answered a question and he was agreeing with her." }
      ] },
      { t: "Appa. I wasn't sick.", needs: { courage: 2 }, then: [
        { s: 'solar', t: "Appa. I wasn't—" },
        { n: "He put his hand up. Not fast. He just lifted it off his knee, palm out, the way he lifted it at the long table at Haesong when a man was about to say a number he'd regret, and she stopped." },
        { s: 'appa', t: "Not yet, Sol-ah." },
        { n: "He didn't look at her. He looked at the hall, and the clock, and the front door at the end of it, with the bolt across." },
        { s: 'appa', t: "When you tell me, I'd like to be sitting in a chair. A good one. And I'd like to have slept." },
        { n: "It was the closest thing to a joke he'd made since she was home, and it wasn't one. She closed her mouth. Her heart was going hard enough that the tea moved in the cup." }
      ] }
    ] },
    { n: "He didn't push. She'd known he wouldn't, and it still went through her, watching him not do it." },
    { n: "Her father didn't ask her mother things. Solar had known that since she was small, the way children know the shape of a house in the dark: there were doors in it he didn't open, and he'd decided that a long time ago, and he'd kept to it, and he called it something like respect and something like love, and it was both, and it was also how he'd managed to go on living in it. Now there was a new door. He was sitting outside it on the stairs at midnight with a cup of tea, and he wasn't going to open it either." },
    { n: "Not yet. That was the difference. Not *never*. He'd said *not yet*." },

    // The tea.
    { n: "Below them, at the bottom of the stairs, the hall clock gathered itself with a little whirr, the way it always did before the hour." },
    { glitch: 'epi-s-g-tea' },
    { n: "It struck. Once, for the start of it, low and brass." },
    { n: "And the tea in her hands was cold." },
    { n: "Not cooling. Cold. Stone cold, all the way through, in one stroke of a clock, the way tea is cold when it's been left on a windowsill since the afternoon, and the cup was cold, and her fingers round it were suddenly the only warm thing in the stairwell. There was a skin on it. She looked down at it. A thin grey skin on the barley tea, and no steam at all." },
    { n: "She looked at the clock. Both hands were straight up. Twelve. And the second hand, the thin brass one she'd watched sweep round its face her whole life, wasn't sweeping. It was stopped, standing on the twelve with the other two, all three of them pointing at the ceiling together like they'd been told to wait there." },
    { n: "The hall was very quiet. No tick. She could hear the house, and the sea under it, and her own heart, and nothing else." },
    { n: "Her father lifted his cup and drank from it. Steam came off it. It went past his glasses and fogged the bottom of one lens." },
    { s: 'appa', t: "Still hot. She makes it too strong. I've told her." },
    { n: "He hadn't noticed. Nothing in his face. He sat on the seventh stair with his hot tea and his fogged lens, a foot below her, in a different temperature, in a different minute, and the clock stood at twelve over both of them, and he didn't look round." },
    { n: "Then the second hand moved. One tick, loud as a dropped pin. Then another. The clock went on. The house went on." },
    { n: "Her tea didn't come back. It stayed cold in her hands, with its skin on it, and she held it anyway, very carefully, and didn't put it down, because putting it down would mean she'd have to explain why she wasn't drinking it." },
    { bond: { appa: 1 } },
    { n: "He finished his. He stood up, a hand on the banister, and his knees said something about it that he ignored." },
    { s: 'appa', t: "Go to bed, Sol-ah. Leave the cup. I'll take it down." },
    { n: "She gave it to him. He took it without looking into it, and their fingers touched on the china, and he didn't say anything about her hands being warmer than her tea." },
    { n: "Then he went back down. The seventh stair creaked under him, the long low note, the other way. He always went back down." }
  ] },

  // ───────────────────────────── 2/20, daytime: errands ─────────────────────────────
  { id: 'epi-s-trio', date: '2/20', slot: 'after', consumes: true, title: 'errands', place: 'Incheon · The Car', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { n: "The plate had come over from the Yang house at Seollal, piled with jeon, under a cloth, with the compliments of the Yang kitchen, and in Mrs. Bang's kitchen you did not send a plate back empty. That wasn't a rule. It was older than a rule. It was simply a thing that would not happen while Mrs. Bang was alive." },
    { n: "So the plate went back full of yakgwa, honey-dark and glossy, wrapped in a blue bojagi with the corners knotted on top like rabbit ears, and Mrs. Bang put it into Solar's hands at the back door at two o'clock with the air of a woman handing over a hostage." },
    { s: 'mrsbang', t: "You take it. You need air. You've been in that room so long you're going the colour of the wallpaper." },
    { s: 'solar', t: "Mr. Oh could take it." },
    { s: 'mrsbang', t: "Mr. Oh is taking *you*. That's different." },
    { n: "Mr. Oh had the car warm. He always had the car warm. He held the back door open for her and closed it behind her without a sound and went round, and got in, and adjusted the mirror one millimetre, and put his hands at ten and two." },
    { s: 'mroh', t: "Seatbelt." },
    { n: "Mr. Oh had never in his life said please. Not to her, not to her father, not to anybody. He said what needed doing and then waited for it to be done, and it always was, because there was something about Mr. Oh that made the word unnecessary. She put her seatbelt on." },
    { n: "The car smelled of his menthol aftershave and the leather and, faintly, the yakgwa on her knee. He took the harbor road the long way, the way he'd always taken it, and never once braked hard, and the cranes went past the window one after another against a sky the colour of dishwater, and across the water the Yang house came slowly round to meet them." },
    { n: "She counted the cranes. Eleven. She counted them again. Mr. Oh, in the mirror, watched her count and said nothing, the way he'd watched her count things in the back of this car since she was seven and swinging her legs." },
    { s: 'mroh', t: "Kitchen door or front." },
    { s: 'solar', t: "Kitchen. It's a plate." },
    { n: "He nodded. A plate went to the kitchen door. Of course it did. He'd only asked so she'd have decided it." },

    // The Yang kitchen: Jay.
    { place: 'Incheon · The Yang House · Kitchen', time: 'Daytime' },
    { n: "The Yang kitchen was bigger than the Lee one and colder, all steel and white tile and a long window over the sinks that looked at the water, and it smelled of garlic and sesame and very fresh squid." },
    { n: "There was an auntie at the sink cleaning squid, a broad woman in a hairnet and pink rubber gloves, working fast, peeling the skin off each one in a single long pull like a stocking. And leaning on the counter beside her with his arms folded, supervising, was Jay." },
    { n: "The white Tyvek suit was unzipped and tied round his hips by the arms, the way he always wore it, over a faded grey SEATTLE t-shirt so washed it was nearly transparent at the collar. Goggles pushed up into his hair. An unlit cigarette behind one ear. He was watching the squid with the expression of a man watching a sauce he didn't trust to thicken." },
    { s: 'jay', f: 'neutral', t: "Slower on the mantle, ajumma. You're tearing it." },
    { n: "The auntie did not slow down. The auntie did not look at him. The auntie peeled the next squid in one long insulting pull and dropped it in the bowl." },
    { s: 'jay', f: 'neutral', t: "That's legitimate squid. It deserves respect. It's the only legitimate thing in this building." },
    { n: "Then he looked up and saw her in the doorway with the plate in its blue cloth." },
    { n: "He didn't move. That was the thing. Jay moved all the time, a small tired constant shifting, a man always about to go and check something, and he went completely still against the counter with his arms folded and looked at her for a second that went on too long." },
    { s: 'jay', f: 'neutral', t: "You came back." },
    { n: "He said it quietly. Flat, dry, the way he said everything. But it wasn't the plate he meant, and both of them knew it wasn't, and somewhere very far behind his face she saw it, the other kitchen, the other life, a dorm by a bay at midnight, all of it, there and then put away again behind the goggles and the cigarette and the squid." },
    { s: 'solar', t: "With the plate." },
    { s: 'jay', f: 'neutral', t: "Sure." },
    { s: 'jay', f: 'neutral', t: "With the plate." },
    { n: "The auntie took the plate off her without a word, untied the rabbit ears, looked at the yakgwa, sniffed it, and grunted once in a way that meant Mrs. Bang had won this round and would be told." },

    // Riki.
    { n: "The back door banged open and a boy came through it at a speed doors weren't built for." },
    { n: "Thin silver puffer, big headphones round his neck, half a banana in one hand, long legs skidding on the wet tile so that he had to catch himself on the end of the counter, and he was already talking, loudly, to Jay, before he'd stopped moving." },
    { s: 'niki', f: 'happy', t: "Hyung, the rice man's here and he says it's the wrong rice and I said it's not my rice and he said whose rice is it then and I said—" },
    { n: "He saw her." },
    { s: 'niki', f: 'surprised', t: "Okae—" },
    { n: "He stopped dead. Half a word. The second syllable caught in his mouth like a fishbone, and his face went through about four things in a row, too fast to follow, and ended up somewhere young." },
    { n: "*Okaeri.* Welcome home. What you said at a door, in a language nobody in this kitchen spoke but him, to someone you'd been waiting for. She'd heard it a hundred times, coming in from the night, from the hallway of a dorm. She'd never once heard it in Incheon." },
    { s: 'niki', f: 'flustered', t: "...Agasshi." },
    { n: "He bowed, much too low, the banana still in his hand, and straightened up, and folded the banana peel down over the fruit very neatly, one strip at a time, as if that had been what he'd come in to do, and went straight back out through the door he'd come in by. It banged. She heard his feet on the gravel outside, running." },
    { n: "The auntie at the sink went on peeling squid. Jay looked at the door, and then at her, and didn't say a word about it, which she was beginning to understand was how all of them were going to do this. Not a word. A look that went on a second too long, and then the squid." },
    { s: 'jay', f: 'neutral', t: "I'll go and tell the rice man it's his rice." },

    // Sunghoon.
    { place: 'Incheon · The Yang House', time: 'Daytime', soft: true },
    { n: "The way out to the car went through the front hall, because the auntie had decided it did, because the kitchen door was for deliveries and the Lee daughter was not a delivery, and so Solar walked down the long cold hall of the Yang house with its dark wood and its scrolls, toward the front door." },
    { n: "Sunghoon was standing in front of it." },
    { n: "Facing it. Not facing her, not facing the hall: facing the door, a meter back from it, with his hands loose at his sides and his weight on both feet, in a black coat, the way he always stood in a room, as if the door was the only thing in the house that might do something interesting. Cold, beautiful, very still. He didn't turn round when she came up the hall. He knew it was her. He always knew who was behind him." },
    { n: "Then he turned his head and looked at her." },
    { n: "One second. Then one more. It was a second too long, and on Sunghoon, who never looked at anything a second longer than it needed, it was like hearing a man who never raised his voice say something loudly. His face didn't do anything. His eyes did. They went over her once, quickly, the way you check that someone has all their fingers, and something in them she couldn't name, and wasn't meant to." },
    { s: 'sunghoon', f: 'neutral', t: "Jungwon's upstairs." },
    { n: "That was all. He turned his head back to the door." },
    { n: "But he'd said it in a way that wasn't information. It was something else. It was *he's here, he's all right, I've got the door*, all at once, in two words, from a man who didn't spend words, and she thought of another door, in another city, a whole year of nights, and a boy who'd stood in front of it exactly like this while the rest of them slept, and didn't say so." },

    // Jungwon.
    { n: "Jungwon came down the stairs." },
    { n: "Not quickly. He never came down anything quickly. A dark suit, the dark coat over it, his hair neat, his face arranged, and the whole house arranged itself round him as he came, Sunghoon by the door, the auntie appearing in the kitchen doorway with her pink gloves, Riki somehow at the far end of the hall again with his headphones on and no music in them. His house. In front of his house, he was the heir. She watched him put it on, step by step, the way she put her hair up." },
    { n: "He stopped at the bottom of the stairs and bowed to her. Exactly as far as the heir of one house bowed to the daughter of the other, in front of witnesses. Not a degree more." },
    { s: 'jungwon', f: 'happy', t: "Thank you for returning the plate. Please thank Mrs. Bang. The kitchen will be very pleased." },
    { n: "The dimples. Both of them. Deep and sweet and completely for the auntie in the doorway." },
    { s: 'solar', t: "Mrs. Bang says the jeon was very good." },
    { s: 'jungwon', f: 'happy', t: "Mrs. Bang is too kind. I'll tell them. My father is out, I'm afraid, or he'd want to come down himself. May I see you to the car?" },
    { n: "He walked her out. Down the front steps, across the gravel, to where Mr. Oh had the car waiting with the engine running and the back door already open. He walked at exactly the right distance from her, a correct distance, a distance you could have measured and filed, with Sunghoon in the doorway behind them watching the drive and not them." },
    { n: "At the car, with his back to the house, where nobody in it could see his mouth, he spoke to her in Mandarin, very low." },
    { s: 'jungwon', f: 'neutral', t: "*You came across the water.*" },
    { s: 'solar', t: "*It was a plate.*" },
    { s: 'jungwon', f: 'neutral', t: "*Yes. I could see that it was a plate.*" },
    { n: "His face didn't change. The heir's face, polite, for the windows. But his voice wasn't the heir's, under it, in the other language, and she knew the difference now. She'd learned it the way you learn the difference between two tides that look the same from the shore." },
    { choose: [
      { t: "(Bow back, properly. For the house.)", stat: { charm: 1 }, then: [
        { n: "She bowed. The daughter of one house to the heir of the other, correct to the degree, in front of every window. Her mother would have found nothing wrong with it." },
        { n: "When she straightened up he was looking at her with his face perfectly still, the still that wasn't nothing, and she understood that he'd liked it, very much, that she'd played it with him and played it well, the way you like an opponent across a baduk board who answers your move exactly right." }
      ] },
      { t: "*You didn't have to come down.*", then: [
        { s: 'solar', t: "*You didn't have to come down.*" },
        { s: 'jungwon', f: 'neutral', t: "*I did.*" },
        { n: "He said it in two words, without decoration, and then went on in Korean, for the house, in exactly the same breath, as if it were the same sentence." },
        { s: 'jungwon', f: 'happy', t: "Please mind the step. The gravel's icy." }
      ] },
      { t: "*Did you sleep?*", stat: { kindness: 1 }, then: [
        { s: 'solar', t: "*Did you sleep?*" },
        { n: "It was his question. He'd asked it in the garden. She gave it back to him, and for a moment the heir's face slipped, just at one edge, and she saw how tired he was underneath it, very tired, the way a man is tired when he's been standing up all night on purpose." },
        { s: 'jungwon', f: 'neutral', t: "*Some.*" },
        { s: 'jungwon', f: 'neutral', t: "*More than you, I think.*" }
      ] }
    ] },
    { n: "He opened the car door a little wider for her with his right hand, the correct gesture, and she got in, and he closed it, and stepped back exactly one pace, and stood there on the gravel in the cold." },
    { bond: { jungwon: 1 } },
    { n: "Mr. Oh pulled away without braking once. In the mirror the Yang house turned slowly back round across the water, and on the front step a man in a dark coat stood with his hands at his sides and watched the car all the way to the harbor road, and in the doorway behind him another man faced the drive, and somewhere round the side of the house a boy in a silver puffer was sitting on a wall, eating a banana, not looking." },
    { s: 'mroh', t: "Home now." },
    { n: "She sat back. The seat was warm. Mr. Oh had left the heat on the whole time, for nobody, in case." }
  ] },

  // ───────────────────────────── 2/20, late: molihua ─────────────────────────────
  { id: 'epi-s-humming', date: '2/20', slot: 'late', title: 'molihua', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-cover' },
    { n: "It was the middle of the night when she heard it, and for a long moment, lying there, she didn't know what it was, only that her body had sat up before the rest of her had decided anything." },
    { n: "Singing. Downstairs. Thin, from far off, through two floors and the old pipes." },
    { glitch: 'epi-s-g-hum' },
    { n: "A woman's voice. Off-key. Wandering up and down a tune it had never once in its life hit square, flat on the high notes and sharp on the turns, and Solar knew that voice the way she knew the creak of the seventh stair. She'd stood on a crate in a restaurant kitchen at nine years old and heard it every Sunday morning for years, over the steam and the dumplings, the same old song, the jasmine-flower song, so badly and so happily that the cooks used to put their fingers in their ears." },
    { n: "*Hǎo yì duǒ měilì de mòlìhuā*. What a lovely jasmine flower." },
    { n: "Auntie Song's Molihua. Coming up through the floor of the Lee house at — she looked at her phone — eleven fifty-eight on a Wednesday." },
    { n: "Auntie Song had gone home to Chinatown at nine. Solar had watched her go, out of the back door with her rubber boots in a plastic bag and her coat buttoned to the chin, complaining in Mandarin about the cold to nobody." },
    { n: "And it was Wednesday. Auntie Song only sang on Sundays." },
    { n: "Except once. Once, not Sunday, not quiet, but loud, at the top of her lungs, standing in a doorway, so that it carried through every wall in the building. Solar had been on the other side of one of those walls. In this house, in that kitchen, everybody had learned what that song meant when it was loud." },
    { n: "It wasn't loud. She lay very still and listened, and it wasn't. It was the Sunday kind. Soft, wandering, pleased with itself, the kind you sing with your hands full." },
    { n: "Not loud. Not yet." },
    { n: "She got up." },
    { place: 'Incheon · The Lee House · Stairs', time: 'Midnight', soft: true },
    { n: "The house was dark. The landing, the stairs. The seventh stair creaked under her own foot and the singing didn't stop for it, the way a person singing in a kitchen would have stopped, to listen, to see who was coming. It went on. *Mòlìhuā, mòlìhuā*. Off-key and steady, from the kitchen at the back, where there was no light under the door." },
    { n: "Down. The hall. The clock, ticking. She noticed that she was glad it was ticking." },
    { place: 'Incheon · The Lee House · Kitchen', time: 'Midnight', soft: true },
    { n: "The kitchen door was open a hand's width. The singing was right there, on the other side of it, in the dark, close enough that she could hear the breath between the lines, the little catch where Auntie Song always ran out of air before the end of the second verse and pushed through it anyway." },
    { n: "She stood in the doorway. Her eyes found the shapes. The long table. The stove. The fridge, humming under the song. The calendar on its nail, a pale square. The back door, bolted. And by the stove, the old armchair that had been Auntie Song's for longer than Solar had been alive, low, its cushion worn down by years of short women sitting in it to take the weight off their boots." },
    { n: "She couldn't see who was in it. It was too dark. She could hear the song coming from exactly there." },
    { choose: [
      { t: "(Turn on the light.)", then: [
        { n: "Her hand found the switch by the door without looking, the way it had since she was tall enough to reach it, and pressed it." }
      ] },
      { t: "(Say her name into the dark.)", stat: { courage: 1 }, then: [
        { s: 'solar', t: "*Auntie?*" },
        { n: "She said it in Mandarin, softly, the way you'd say it to wake someone who'd fallen asleep in a chair. The singing didn't pause. It didn't hear her, or it didn't care. It went on into the next line as if she hadn't spoken at all, the way you'd go on singing over a radio in the next room." },
        { n: "Her hand found the switch by the door and pressed it." }
      ] },
      { t: "(Listen to the end of the verse.)", stat: { knowledge: 1 }, then: [
        { n: "She stood in the dark and listened. She couldn't have said why. Because it was the Sunday kind. Because she knew how the verse ended, the long wobble on the last note, and some stupid part of her wanted to hear it get there." },
        { n: "It got there. The long wobble. Flat, the way it always was. And then the breath, and the next verse starting, the same as ever, exactly the same as a thousand Sundays, as if it would go on forever, as if it had been going on down here in the dark every night she hadn't been listening." },
        { n: "Her hand found the switch by the door and pressed it." }
      ] }
    ] },
    { n: "The light came on, the long tube over the table flickering twice and catching." },
    { n: "The song stopped. Not trailed off. Stopped, in the middle of a word, the way a song stops when somebody lifts the needle." },
    { n: "Nobody." },
    { n: "The armchair by the stove was empty. The worn cushion with nobody's shape in it. The stove was cold; she put her hand flat on the iron to be sure, and it was cold as the step outside, cold for hours. The kettle cold. The dumpling bowls stacked and dry on the rack where Auntie Song had left them at nine. Nothing moved. The fridge hummed. Through the door of the little room off the kitchen, Mrs. Bang was snoring, steady and enormous, a woman who had not been singing in her life." },
    { n: "Solar stood in the middle of the bright kitchen in her socks with her hair down and her hand still flat on the cold stove, and waited, and nothing happened." },
    { n: "Nothing at all. That was the thing about it. No green. No bell. The clock in the hall ticking on, normally. Just a song, and then not a song, and a chair with nobody in it, and the calendar on its nail saying fifty-two in her father's square black pen." },
    { n: "She didn't turn the light off when she went back up. She left it burning over the empty kitchen all night, like a lamp in a window for somebody who'd said they'd be late." },
    { n: "Up in her room, she lay awake with the door open a crack and listened to the house for a long time. It didn't sing again. She found she was listening anyway for the other kind. The loud kind." },
    { n: "It didn't come. Not that night." }
  ] },

  // ───────────────────────────── 2/21, daytime: an hour ─────────────────────────────
  { id: 'epi-s-quay', date: '2/21', slot: 'after', consumes: true, title: 'an hour', place: 'Incheon · The Car', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { s: 'solar', t: "I want to see the water." },
    { s: 'haechan', f: 'neutral', t: "You can see the water from your window, agasshi. You've got the best view of the water in Incheon. People would kill for that window." },
    { s: 'solar', t: "Without the window." },
    { n: "He looked at her across the kitchen for a long second, chewing, and then took the keys to the Rexton off the hook by the back door without a word, which was how Haechan said yes to anything he thought was a bad idea." },
    { n: "The Rexton was Dal's old car, big and black and boxy and older than it should have been allowed to be, and it started on the second try, and Haechan patted the dashboard and told it *good girl*, the way Dal had. He drove the way he always drove, fast and loose and absolutely precise, one wrist over the wheel, through gaps in the harbor-road traffic that she'd have sworn weren't there until the Rexton was through them. Cinnamon gum. The window cracked an inch for the cold. And the radio on the trot station, loud, an old song about a boat and a girl on the far shore, and he sang it." },
    { n: "He sang it well. That was the unbearable thing about Haechan and trot. He had a real voice, warm and rough, and he knew every bend and sob in every old song, and he used all of it, on purpose, with his whole chest, to annoy whoever was in the car." },
    { s: 'haechan', f: 'happy', t: "*On the far shore she waits, she waits, the boat doesn't come—*" },
    { choose: [
      { t: "(Ask him to turn it down.)", then: [
        { s: 'solar', t: "Turn it down." },
        { s: 'haechan', f: 'happy', t: "Can't, agasshi. Knob's broken. Has been for years. Tragic." },
        { n: "He turned it up. She reached over and turned it down. He turned it back up with one finger without looking, and went into the second verse with even more feeling, and she gave up and looked out of the window, and her mouth did something at the corner she didn't let him see." }
      ] },
      { t: "(Sing the harmony.)", stat: { courage: 1 }, then: [
        { n: "She sang the harmony. Badly. Quietly, at first, and then not quietly, because it was the only way to win." },
        { n: "He nearly drove into a fish lorry. He stopped singing altogether and turned and looked at her with his mouth open, and then he laughed, a real one, loud, head back, both hands back on the wheel, and they did the last chorus together at the top of their lungs down the harbor road past the cranes, and it was terrible, and it was the best thing she'd heard since she was home." }
      ] },
      { t: "(Let him sing.)", stat: { kindness: 1 }, then: [
        { n: "She let him. She sat with her temple against the cold window and let him sing the whole thing, every verse, and didn't say anything, and somewhere in the third verse he noticed she wasn't complaining and glanced at her, and the singing went quieter, and then was just singing." }
      ] }
    ] },

    // The steps.
    { place: 'Incheon · Harbor', time: 'Daytime' },
    { n: "He parked by the fish-market wall, where the old stone landing steps went down into the harbor, the ones nobody had landed anything at since before she was born. Wide grey steps, worn into dips in the middle, going down and down under the wall into the dark green weed and then the mud. Gulls on the bollards. The smell of salt and diesel and the market's ice." },
    { n: "She knew these steps. She'd come down here as a girl when the tide was out and stood on the bottom ones and looked out over the mud, the whole grey shining floor of the harbor laid bare to the breakwater, the boats lying over on their sides in it like dogs asleep. Only when it was out. She'd never once come down here when it wasn't." },
    { s: 'solar', t: "It's out till four." },
    { n: "She didn't look at her watch. She didn't need to. It was ten to three on the twenty-first of February and the moon would be full on Sunday and the ebb had been running since half past nine, big, a spring ebb, emptying the whole harbor, low water at ten to four. She'd known the tide tables since she was nine years old. She could feel them. She'd never been wrong about a tide in her life, not once, not by a minute; it was the one thing about her nobody in either house had ever been able to argue with." },
    { s: 'solar', t: "Come and look. You can see all the way to the breakwater on a spring ebb. The whole floor of it." },
    { s: 'haechan', f: 'neutral', t: "I've seen mud, agasshi. I grew up on a fish truck. I've seen more mud than God." },
    { n: "But he came. She went down ahead of him, the way she'd always gone down, talking over her shoulder, not looking at her feet, because she knew these steps and she knew this tide. First step. Second. The stone wet and dark here under the wall where the sun never got. Third. She turned her head to say something to him about the gulls." },
    { n: "His hand closed on the back of her collar." },
    { music: 'epi-s-danger' },
    { n: "Hard. Fast. A fist in the wool of her coat at the nape of her neck and a pull, straight back and up, so that her heel came down on the step behind instead of the one in front and her back hit his chest and all the breath went out of her." },
    { n: "The step in front was gone." },
    { n: "There was water on it. Black water. Not mud, not weed, not the grey floor of the harbor shining out to the breakwater: water, deep and black and moving, right there, slopping over the stone a hand's breadth below her boot, up the steps, up past where the weed was, up to the fourth step, swirling and pulling at the edge in that particular fast way the flood came in here, the way it came across the whole bay at once, faster than a man could walk." },
    { n: "She'd been about to stand in it. She'd been about to put her whole weight down on a step that wasn't there, into water she couldn't see the bottom of, talking about gulls." },
    { n: "She didn't move. She got stiller. That was what she did. Her whole body went quiet and cold and very still, standing there pressed back against him on the wet step with his fist still knotted in her collar, and she looked at the black water moving a hand's breadth from her foot, and she couldn't swim, she had never been able to swim, and she didn't breathe." },
    { glitch: 'epi-s-g-tables' },
    { n: "Up on the old passenger terminal across the inner harbor, above the shuttered ticket windows, there was a clock. A big white face, black hands. It had been there her whole life. She looked at it because it was the only thing to look at that wasn't the water." },
    { n: "It said twelve. Both hands up." },
    { n: "Then it said four minutes to three." },
    { n: "She looked at the water. She looked at the clock. Four minutes to three in the afternoon, on a spring ebb that ran till ten to four, and the flood was up the steps as if it were four minutes to four. Not near. Not roughly. As if it were exactly one hour later than it was. To the minute. The tide was doing, now, precisely what she'd have told anyone it would be doing in an hour, and she'd have been right, and it was doing it now." },
    { n: "An hour. She'd been wrong by an hour." },
    { n: "She had never in her life been wrong by an hour." },

    // He goes quiet.
    { n: "Haechan hadn't let go of her collar." },
    { n: "He didn't say anything. That was how she knew. She waited for the noise, the joke, *agasshi, you want a swimming lesson, I charge by the minute*, the talking that came out of him whenever anything was bad, and it didn't come. He'd stopped chewing. He stood on the step behind her with his fist in her coat and his chest going against her back, hard, too fast, and he didn't make a single sound." },
    { n: "Haechan talked when he lied. When he was frightened, really frightened, all the way down, he went quiet." },
    { n: "He was very quiet." },
    { glitch: { near: true } },
    { n: "After a long time he pulled her up one more step. Then another. Then up onto the quay, onto the flat stone, well back from the edge, past the bollards, and only then, slowly, one finger at a time, like he had to tell each one, he let go of her coat." },
    { n: "He looked at the water. He looked at the clock across the harbor, and she saw him look at it, and she saw his face." },
    { s: 'haechan', f: 'serious', t: "It said twelve." },
    { s: 'solar', t: "You saw it." },
    { s: 'haechan', f: 'serious', t: "For a second. Both hands." },
    { s: 'haechan', f: 'serious', t: "Like over there. Every night. Right before it went green." },
    { n: "He said it very low. Then he didn't say anything else for a while. The gulls went on screaming on the bollards. The black water came on up the steps behind them, step by step, the way the flood always came in here, unhurried and certain, covering the weed, covering the place where her foot would have gone." },
    { s: 'haechan', f: 'serious', t: "You've never been wrong." },
    { n: "Not a question. He said it like a man saying the sun comes up. He'd watched her tell old men on the quays what the water would do at three in the morning since she was a girl in a school uniform, and he'd watched the water do it, every time, like it had been told." },
    { s: 'haechan', f: 'serious', t: "Not once. Not by a minute. Not in your whole life." },
    { choose: [
      { t: "I got it wrong.", then: [
        { s: 'solar', t: "I got it wrong." },
        { s: 'haechan', f: 'serious', t: "No." },
        { n: "He said it flat, fast, the way you'd slap a hand away from a stove." },
        { s: 'haechan', f: 'serious', t: "No, you didn't. You didn't get it wrong. Something else did." }
      ] },
      { t: "It's an hour. Exactly an hour.", stat: { knowledge: 1 }, then: [
        { s: 'solar', t: "It's an hour. Exactly. Not fifty minutes, not seventy. One hour, to the minute." },
        { s: 'solar', t: "Tides aren't wrong by exact hours. Nothing in the sea is exact." },
        { n: "He looked at her. Then at the clock. He worked his jaw, once, as if the gum were still there." },
        { s: 'haechan', f: 'serious', t: "Clocks are." }
      ] },
      { t: "(Say nothing. Take his hand.)", stat: { kindness: 1 }, then: [
        { n: "She didn't say anything. She reached down and found his hand, the one that had been in her collar, and it was shaking. Very slightly. A tremor, right down in the split knuckles, that he'd have denied with his last breath." },
        { n: "She held it. He let her. He didn't look at her while she did it, and he didn't take it back." }
      ] }
    ] },
    { bond: { haechan: 1 } },
    { flag: 'epi-s-tables' },
    { n: "He drove her home slowly." },
    { n: "Haechan had never driven anywhere slowly in his life. He drove the harbor road at exactly the speed limit, with both hands on the wheel, at ten and two, like Mr. Oh, and the radio off, and he didn't sing, and he didn't talk, and at every red light he looked across at her in the passenger seat as if he were counting something and needed to check the number." },
    { n: "She sat with her hands in her lap. They'd started to shake now, a little, in the warm of the car, the way they always did, later, when there was nobody to see. She put them under her thighs. He saw. He didn't say anything about that either." },
    { n: "At the gate he didn't get out. He sat with the engine running and looked at the house." },
    { s: 'haechan', f: 'neutral', t: "Tomorrow you tell me the tide before you go anywhere near anything wet. And I'll check it. On the clock. And then the young master can check it on his very expensive watch." },
    { s: 'solar', t: "You're going to let Jungwon check my tide." },
    { s: 'haechan', f: 'neutral', t: "I'd let the koi check it, agasshi. I'd let Pyo check it." },
    { n: "He said it lightly. It was the first light thing he'd said in an hour. It came out of him like something he'd had to go and fetch from a long way off, and it didn't reach his eyes, and she looked at his face in the dashboard light and understood that he was going to be frightened of water now, on her behalf, for the rest of his life." }
  ] },

  // ───────────────────────────── 2/22, daytime: the studio girls ─────────────────────────────
  { id: 'epi-s-girls', date: '2/22', slot: 'after', consumes: true, title: 'the studio girls', place: 'Incheon · Songdo · Café', time: 'Daytime', scene: [
    { music: 'epi-s-yunjin' },
    { n: "Yunjin's car was purple." },
    { n: "Not a tasteful purple. Not aubergine, not plum. The purple of a grape-flavoured lollipop, a Hyundai Veloster with three doors, one of them on the wrong side, and a strawberry air freshener so strong it had its own weather. Yunjin had bought it the week she got her licence and still described it to people as a cry for help." },
    { s: 'yunjin', f: 'happy', t: "Okay. So. Ground rules. They're going to love you. You're going to let them. You're going to be *normal*, Sol, I'm begging you, you're going to be a normal girl who had a normal fever and not look at the door every four seconds like there's a sniper on the roof." },
    { s: 'solar', t: "I don't do that." },
    { s: 'yunjin', f: 'neutral', t: "Babe. You're doing it now. In my car. There's no door. You're looking at the glovebox." },
    { n: "The café in Songdo had too many plants and a window wall that looked across the water at the glass city going up, the new towers standing in the mud flats like somebody had planted them, and Yunjin parked half on the kerb and they went in out of the wind, and Solar sat down at the corner table with her back to the wall and her eyes on the door, and Yunjin looked at her and sighed through her nose." },
    { s: 'yunjin', f: 'neutral', t: "Unbelievable. Wifey. Unbelievable." },

    // The four.
    { n: "They came in all at once, in a gust of cold and scarves." },
    { n: "Four of them, through the door together, talking over each other, unwinding scarves and pulling off gloves and stamping feet in a way that took up the whole front of the café and made the barista look up. Girls her own age, give or take a year, with the kind of posture you only get from years of somebody shouting *shoulders* at you in front of a mirror. Yunjin's old dance studio. Solar had heard about them for years in the abstract. In person they were a weather system." },
    { s: 'chaewon', t: "Yunjin. You're early. You're never early. Is something wrong?" },
    { n: "That was Chaewon. Small and neat, in a long navy coat, with a phone already out and something on it that looked unmistakably like a list. She said *is something wrong* the way a teacher asks it, strict, and then her face did something very kind and very quick that she put away before anyone could comment." },
    { s: 'yunjin', f: 'happy', t: "Nothing's wrong. I've reformed. I'm early now. I'm a new woman." },
    { s: 'sakura', t: "She's lying. Her clock in the car is wrong. It's been wrong since the summer." },
    { n: "Sakura, behind her, dry as a cracker, unwinding a grey scarf that seemed to go on forever. She had a game console in one coat pocket. Solar could see the shape of it." },
    { s: 'kazuha', t: "Hello. You must be Sol." },
    { n: "Kazuha, tall and soft-voiced and a little odd, smiling at Solar as if they'd met before somewhere neither of them could place, which they hadn't. She sat down next to her without being asked, and looked at her with great interest, the way you'd look at a bird that had landed on your windowsill." },
    { s: 'eunchae', t: "Unni! Unni, hi, I'm Eunchae, I'm the youngest, everybody's mean to me, Yunjin unni says you're scary, are you scary? You don't look scary. You look like a doll. A scary doll. Are you getting cake? I'm getting cake." },
    { n: "Eunchae was already sitting down on Solar's other side before she'd finished the sentence, and she didn't finish the sentence, she just went into another one. She had the round fearless face of a girl who'd been the youngest in every room she'd ever been in and had decided early that this was a superpower." },
    { n: "They absorbed her. There was no other word for it. Within four minutes Solar had a scarf on her lap that wasn't hers, a fork in her hand, a slice of strawberry cake she hadn't ordered in front of her, and three separate conversations going on round her head, about a choreographer none of them liked and a drama none of them would admit to watching and whether Sakura had really stayed up till five to beat a boss, which she had." },
    { n: "Nobody asked where she'd been. Nobody here knew there was a where. To these four girls she was Yunjin's best friend who'd had a bad fever at Seollal, and that was all she was, the whole of her, and it was so restful that for a moment, holding the fork, she nearly forgot to watch the door." },

    // Why they came.
    { n: "It was Chaewon who said it. Of course it was. She put her phone face down on the table, which was clearly an event, and the other three went quiet in a way that told Solar they'd planned for her to be the one." },
    { s: 'chaewon', t: "We heard about your dad, Yunjin." },
    { n: "Yunjin's fork stopped halfway to her mouth." },
    { s: 'chaewon', t: "My mom heard from Eunchae's mom. In December. And we didn't know what to do. We still don't know what to do. So we're going to do this." },
    { s: 'chaewon', t: "Daeboreum. Sunday. We're taking you to Wolmido. All of us. The bonfire, the moon, the wishes, the whole thing. You're not allowed to say no. We've voted. It was unanimous. Sakura abstained but we counted her as yes." },
    { s: 'sakura', t: "I didn't abstain. I was in a dungeon." },
    { n: "Yunjin put her fork down. She looked at the four of them, one after the other, and for a moment her face didn't do anything at all, which on Yunjin, whose face was always doing something, was like a radio going silent in the middle of a song. Then the gravel came up into her voice." },
    { s: 'yunjin', f: 'sad', t: "...You guys are so *corny*." },
    { s: 'eunchae', t: "We are SO corny. We're the corniest people you know. We made a schedule." },
    { s: 'chaewon', t: "It's a plan, not a schedule. It's laminated." },
    { s: 'yunjin', f: 'happy', t: "You laminated it." },
    { s: 'chaewon', t: "I laminated it." },
    { n: "Yunjin laughed. It came out cracked down the middle, and she covered her face with both hands and laughed into them, and Kazuha reached across the table without a word and put a hand on her wrist and left it there, and Solar looked down at her strawberry cake and found that she couldn't see it properly for a second." },
    { n: "Under the table, Yunjin's foot found hers and pressed. Once. *Don't you dare cry in front of these people, I will never forgive you.*" },

    // Riki at the window.
    { n: "Kazuha had gone out to the car to get her other scarf, because she'd brought two, because she was Kazuha. Through the window wall Solar watched her come back across the terrace with the second scarf over her arm, head down against the wind." },
    { n: "And a boy came round the corner of the building at a dead run." },
    { n: "Thin silver puffer. Big headphones. Long legs going like a deer's. He was cutting across the terrace the way runners cut across everything, at the shortest possible line, and Kazuha stepped right into the line of it with her scarf." },
    { s: 'kazuha', t: "*Abunai!*" },
    { n: "She said it in Japanese. The way you'd yell *look out* in your own language when there wasn't time for any other one." },
    { s: 'niki', f: 'surprised', t: "*Sumimasen!*" },
    { n: "He said it straight back. In Japanese. Without thinking, round her, a hand out to keep himself off her shoulder, the way he'd have said it on any street in any town where people said things in Japanese. And then he'd gone past her, three strides, and he stopped." },
    { n: "Dead. In the middle of the terrace. With his back to the window." },
    { n: "Solar watched his shoulders. They'd gone up round his ears under the silver puffer. He stood there for one second, two, as if somebody had called his name from a long way off in a voice he knew, and then he didn't turn round. He put his head down and ran. Out of the terrace, across the road against the light, gone round the next tower like he'd never been there." },
    { n: "Kazuha came in with her scarf and her mouth a little open." },
    { s: 'kazuha', t: "...He said sorry in Japanese." },
    { s: 'sakura', t: "I heard." },
    { s: 'sakura', t: "...Who was that." },
    { n: "Sakura said it to the window, flat, not quite a question, frowning at the place on the road where he'd gone. Kazuha sat down slowly. She was looking at the same place. She had the face of somebody trying to remember the end of a dream that's already going." },
    { s: 'kazuha', t: "I feel like I know his face." },
    { s: 'eunchae', t: "Everyone feels like they know everyone's face, unni. It's called Korea. It's very small." },
    { n: "Yunjin looked across the table at Solar. Solar looked at her cake." },
    { choose: [
      { t: "Nobody. A delivery boy.", stat: { charm: 1 }, then: [
        { s: 'solar', t: "Nobody. A delivery boy." },
        { n: "Yunjin choked on her coffee. It came out of her nose. She had to put her whole face in a napkin, and the four of them looked at her in alarm, and she flapped a hand at them, wheezing." },
        { s: 'yunjin', f: 'happy', t: "Sorry. Sorry. Inside joke. Delivery boys. There's a lot of them around here. They're a whole thing." }
      ] },
      { t: "(Say nothing. Watch the road.)", then: [
        { n: "She said nothing. She watched the road where he'd gone, the next tower, the light changing, and counted, without meaning to, the seconds it would take a boy that fast to get from here to the bridge. She stopped counting when she noticed." },
        { s: 'eunchae', t: "You sit facing the door, unni." },
        { n: "Eunchae said it cheerfully, round a mouthful of cake, as an observation, the way she might have said *you have nice hands*. Everyone at the table looked at the door, and then at Solar." },
        { s: 'yunjin', f: 'neutral', t: "She likes to see who's coming. It's a Libra thing." },
        { s: 'eunchae', t: "Unni's a Capricorn. I asked." }
      ] }
    ] },

    // The plan.
    { n: "The plan was laminated. Chaewon actually produced it, from her bag, a single A4 sheet sealed in plastic, with times on it. Six o'clock, meet at the Wolmido end. Fish-cake broth from the cart. The daljip bonfire on the beach, the big one, the moon house of straw and pine they'd burn when the moon came up. Wishes written on paper and tied to it. Rice cakes. The moon. Ten o'clock, everyone home, *no exceptions, Eunchae*." },
    { s: 'eunchae', t: "Why is my name on the plan." },
    { s: 'chaewon', t: "You know why your name is on the plan." },
    { s: 'kazuha', t: "On the night of the first full moon the dead can see us better. My grandmother says. They come close to the fire because it's warm." },
    { s: 'sakura', t: "Your grandmother says that about every night." },
    { s: 'kazuha', t: "She's usually right." },
    { s: 'chaewon', t: "Sol-ssi. You're coming too. You're on the plan." },
    { n: "She was. Chaewon turned the laminated sheet round to show her, and there it was, under Yunjin's name, in the same neat print, a little squeezed in as if it had been added this morning: *+ Sol (Yunjin's).* She'd been on the plan before they'd met her. They'd decided to absorb her sight unseen." },
    { choose: [
      { t: "I'll come.", stat: { kindness: 1 }, then: [
        { s: 'solar', t: "I'll come." },
        { s: 'eunchae', t: "YAY. Yay! Unni's coming! I'm going to win you a wish. You can't win wishes. I'm going to win you one anyway." },
        { n: "Yunjin didn't say anything. She just reached over and squeezed the back of Solar's neck, once, hard, the way you'd squeeze a dog that had done something right." }
      ] },
      { t: "Is the moon on the plan too?", stat: { charm: 1 }, then: [
        { s: 'solar', t: "Is the moon on the plan too?" },
        { s: 'chaewon', t: "Six nineteen. Moonrise. I checked." },
        { n: "She had. She'd written it in the margin. Solar looked at it, and at Chaewon's serious small face, and decided on the spot that she liked her enormously and would never be able to lie to her very well." },
        { s: 'solar', t: "Then I'll come." }
      ] }
    ] },
    { bond: { yunjin: 1 } },
    { n: "They left in another gust, scarves and goodbyes and Eunchae walking backwards across the terrace still talking, and Yunjin stood at the window with her hands in the pockets of the red puffer and watched them go round the corner, and didn't say anything for a while." },
    { s: 'yunjin', f: 'sad', t: "Laminated, Sol." },
    { s: 'solar', t: "I know." },
    { s: 'yunjin', f: 'sad', t: "She *laminated* it." },
    { n: "She wiped under one eye with the side of her thumb, quickly, like there was something in it, and then she turned round and was Yunjin again, all of her, loud, jangling the keys of the purple car." },
    { s: 'yunjin', f: 'happy', t: "Also, the delivery boy speaks Japanese now. We're not going to talk about that. I'm putting it in the box with Japan." },
    { s: 'solar', t: "There's a box?" },
    { s: 'yunjin', f: 'neutral', t: "There's a box. It's a big box. It's got a lock on it. Get in the car, wifey." }
  ] },

  // ───────────────────────────── 2/23, late: the night before (the crossroads) ─────────────────────────────
  { id: 'epi-s-crossroads', date: '2/23', slot: 'late', title: 'the night before', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-step' },
    { n: "The night before Daeboreum the house went to sleep early, the way it always did before a festival, the way a boat goes quiet the night before it puts out. Mrs. Bang had soaked the five grains in their bowls on the counter under cloths. The nuts for the morning were in a basket by the rice cooker, walnuts and peanuts and chestnuts, for cracking in your teeth at breakfast for luck. The calendar by the fridge said 49." },
    { n: "By midnight the house was dark. Almost." },
    { n: "She stood at her window in the dark with her hair down and counted the lights. She counted, because she counted." },
    { n: "Three." },
    { n: "Down the garden, at the bottom of the terraces, the annex. Its one small window yellow, and on the sill inside it the shape of the old silver radio, and on the step under it, she knew without being able to see, a man in a black padded jacket with his forearms on his knees." },
    { n: "Out at the front, the gate. The lanterns over it had been lit at dusk for the festival and nobody had put them out, red, swaying a little in the wind off the water, and under them, in the red, something darker standing still that might have been a coat." },
    { n: "And under her, round the side of the house, a long pale bar of light laid out across the back step and the koi bucket and the frozen gravel. The kitchen. Somebody was up in the kitchen." },
    { n: "Three lights. Tomorrow was the first full moon of the year. Tomorrow they'd crack nuts at breakfast and go to Wolmido and burn the moon house and write their wishes on paper and tie them to the fire. Tonight was the last night before all that, and she was awake, the way she was always awake, and she had her coat in her hand already. She'd had it in her hand for a while." },
    { n: "Three lights. She could only go down to one of them." },
    { choose: [

      // ── Haechan ──
      { t: "(Go down the garden to the annex step.)", when: { ifRouteOpen: 'haechan' }, flag: 'epi-route-haechan', then: [
        { place: 'Incheon · The Lee House · Annex', time: 'Late Night' },
        { music: 'epi-s-haechan' },
        { n: "He heard her on the second terrace. He always did. He didn't look up." },
        { s: 'haechan', f: 'neutral', t: "The Chairman says I'm to take you to Wolmido tomorrow and bring you back with all your fingers. He counted them. In front of me. He's very thorough." },
        { s: 'solar', t: "He did not count my fingers." },
        { s: 'haechan', f: 'happy', t: "He counted mine, then. To show me how it's done." },
        { n: "She sat down on the step beside him. He moved over, the way he always moved over, and she got the warm half. There was a walnut in his hand. He was turning it over in his split knuckles, round and round." },
        { s: 'haechan', f: 'neutral', t: "Practising. For the morning. You crack it in your teeth, first bite, you get a whole year with no boils. Dal could do it with a chestnut. In the shell. I watched him break a tooth once doing it to show off for his girls." },
        { n: "He put the walnut between his back teeth and bit. It cracked like a knuckle. He spat the shell into his palm and held out the half with the meat in it, to her, without looking." },
        { s: 'haechan', f: 'neutral', t: "No boils, agasshi. Not on my watch." },
        { n: "She took it. She ate it. It was bitter and cold and tasted of his gum, faintly, cinnamon, and she leaned over until her temple was against his shoulder, the black padded jacket cold on the outside and warm under it, and he went still, the way he went still when he didn't want to scare something off." },
        { s: 'solar', t: "Donghyuck-ah." },
        { n: "He didn't answer. He didn't need to. He turned his head, slowly, and put his mouth against her hair, not a kiss exactly, just there, breathing, and she felt him breathe in, like he was checking the smell of her against something he'd been keeping." },
        { s: 'haechan', f: 'neutral', t: "You looked at that water the other day like it owed you money." },
        { s: 'haechan', f: 'serious', t: "Don't do that again. Look at me like that, if you have to look at something. I don't mind. I'm used to it." },
        { n: "It wasn't a joke. He'd made it sound like one. He'd aimed it, every word, and it landed exactly where he'd aimed it, under her ribs, and he knew it had, and he didn't look at her to see." },
        { n: "Up in the house a light went on and off, on the landing, somebody going to the bathroom. They both stopped breathing until it was dark again, and then she laughed, quietly, into his jacket, and he laughed too, without any sound, his shoulder shaking under her cheek." },
        { s: 'haechan', f: 'neutral', t: "Go to bed, agasshi. Big day. Nuts. Fire. The moon." },
        { s: 'solar', t: "In a minute." },
        { n: "He didn't argue. He took his jacket off without getting up, one arm and then the other, and put it round her shoulders, and sat there in his sweatshirt in the cold with the radio off on the sill behind them, and neither of them went to bed, and the minute went on for a long time." },
        { bond: { haechan: 1 } }
      ] },

      // ── Jungwon ──
      { t: "(Go out to the gate. He's there.)", when: { ifRouteOpen: 'jungwon' }, flag: 'epi-route-jungwon', then: [
        { place: 'Incheon · The Lee House · Gate', time: 'Late Night' },
        { music: 'epi-s-jungwon' },
        { ifYear: { xmas: 'jungwon' }, then: [
          { n: "He was standing under the red lanterns exactly where he'd stood the morning she came home. The same place on the stones. The same dark coat, his hands at his sides. As if he'd marked the spot and come back to it." }
        ], else: [
          { n: "He was standing under the red lanterns on the far side of the gate, in the dark coat, with his hands at his sides, very straight, the way she'd begun to suspect he stood at this gate a great deal more often than anybody in the house had been told." }
        ] },
        { n: "He bowed when she came out. In the red light, in the cold, correctly." },
        { s: 'jungwon', f: 'neutral', t: "Good evening. It's very late. I'm sorry to have kept you up." },
        { s: 'solar', t: "You didn't keep me up. You were standing at a gate." },
        { s: 'jungwon', f: 'happy', t: "That's true. I'm sorry to have stood at your gate, then." },
        { n: "The dimples. Then not. His face went still, the real still, the one he couldn't help, and she watched it happen under the lanterns and felt something in her chest go the same way." },
        { n: "She opened the side gate. He didn't come through it. He stayed on his side and she stood on hers, in the gap, with the iron cold under her hand." },
        { s: 'jungwon', f: 'neutral', t: "*Tomorrow's the full moon. You're supposed to make a wish.*" },
        { n: "In Mandarin. Low. The phones were in the house. The gate wasn't." },
        { s: 'solar', t: "*I don't make wishes.*" },
        { s: 'jungwon', f: 'neutral', t: "*No. You make arrangements.*" },
        { s: 'jungwon', f: 'neutral', t: "*So do I. It's a terrible way to live. I recommend it to no one.*" },
        { n: "She laughed. It surprised her, the sound of it in the frozen street. He looked at her laughing with an expression she couldn't read and didn't try to, and he lifted his right hand and took hers off the iron of the gate, and held it, once, his fingers cold, and in the quiet she could hear his watch ticking, and then he let it go." },
        { s: 'jungwon', f: 'neutral', t: "*I counted the days, while you were gone. I count everything. You know that.*" },
        { s: 'jungwon', f: 'neutral', t: "*I haven't told anyone the number. I'm not going to tell you either.*" },
        { s: 'solar', t: "*Why not?*" },
        { s: 'jungwon', f: 'neutral', t: "*Because then you'd know it.*" },
        { n: "He said it simply, and bowed again, in Korean, in the proper register, as if nothing at all had been said in any other language." },
        { s: 'jungwon', f: 'neutral', t: "Please go in. It's cold. I'll stay until you do." },
        { n: "She went in. She stood inside the front door with her back against it in the dark hall for a long time, and when she went up and looked out of the landing window, he was still there under the lanterns, his hands at his sides. He'd said until she went in. She was in. He'd meant until her light went out." },
        { n: "She didn't turn it out for a long time. Neither of them, she suspected, was going to sleep." },
        { bond: { jungwon: 1 } }
      ] },

      // ── The family ──
      { t: "(Stay in the kitchen. Appa's still up.)", when: { ifRouteOpen: 'family' }, flag: 'epi-route-family', then: [
        { place: 'Incheon · The Lee House · Kitchen', time: 'Late Night' },
        { music: 'epi-s-family' },
        { n: "Her father was at the kitchen table with the paper." },
        { n: "At midnight. Which he never did. The paper was a half past four thing, a dawn thing, his glasses on and his lips moving over the shipping notices and the kettle going, and in twenty-one years she had never once come into this kitchen at night and found him at the table with the paper open in front of him under the long light, in his cardigan, with his glasses on, as if it were morning and he'd come down early to wait for something." },
        { n: "He looked up when she came in. He didn't seem surprised. He moved the basket of nuts six inches along the table, so there was room across from him." },
        { s: 'appa', t: "Sol-ah. Sit." },
        { n: "She sat. He went on reading. He'd folded the paper back to the inside page, she saw, the one with the tide tables for the week in small grey columns, and he was running one finger down Sunday's." },
        { ifFlag: 'epi-s-tables', then: [
          { s: 'appa', t: "Low water tomorrow evening, ten to seven. High water just after one in the morning. Eight point nine meters. Big. It's the moon." },
          { n: "He read it out to her. He'd never once in her life read her a tide; she was the one who read tides, she'd been reading them to him since she was nine. She didn't correct him. She didn't check it in her head. She let him read it, and sat there in the long light and listened to her father tell her what the water would do, and believed him." }
        ], else: [
          { s: 'appa', t: "Low water tomorrow evening, ten to seven. High water just after one in the morning. Eight point nine meters. Big. It's the moon." },
          { n: "He read it out to her. He'd never once in her life read her a tide; she'd been reading them to him since she was nine. She knew he was right. She let him read it anyway." }
        ] },
        { ifFlag: 'epi-s-appa-lie', then: [
          { n: "He didn't mention watermelon. He didn't mention fevers. He turned the page." }
        ] },
        { ifFlag: 'epi-s-appa-quiet', then: [
          { n: "He didn't ask her anything. He'd learned that she could be as quiet as he could, on a stair, and he seemed, if anything, a little proud of it." }
        ] },
        { n: "He took a walnut out of the basket and turned it in his fingers. Then he put it down in front of her, very precisely, in the middle of the table, the way you'd lay a piece on a board." },
        { s: 'appa', t: "For the morning. First bite. Your mother doesn't do it any more. She says it's for children and fishermen." },
        { s: 'solar', t: "We're fishermen." },
        { s: 'appa', t: "We move fish. It's not the same." },
        { n: "Something went at the corner of his mouth. The place a smile would have been. He went back to the paper, and she sat across from him in the kitchen with the walnut in front of her and the koi going round in their bucket outside the door and the calendar saying 49 on its nail, and neither of them went to bed." },
        { s: 'appa', t: "Go to bed, Sol-ah." },
        { s: 'solar', t: "In a minute." },
        { n: "He turned the page. He didn't make her go. It was midnight, and the paper was a dawn thing, and he'd brought it down at midnight anyway, and sat under the long light with it open at the tides, and she understood, watching him not read it, that he'd been waiting to see which door she'd come through, and that he'd hoped, without letting himself hope, that it would be this one." },
        { bond: { appa: 1 } }
      ] }
    ] }
  ] }
  );
})();
