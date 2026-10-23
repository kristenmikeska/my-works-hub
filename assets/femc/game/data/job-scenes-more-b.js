/* Job scenes, more (living world part 2, 2026-10-21): konbini, chagall, hagakure. Format: data/job-scenes-more files merge into
   data/job-scenes.js by job id (core.js shiftScene): shifts (full scenes, never repeated), beats (a one-time story with the
   regulars, in order), quiet (short moments once the full scenes have played), openers (a line per month for quiet shifts). */
Object.assign((window.FEMC_GAME_JOB_SCENES_MORE ||= {}), {

  /* ── Convenience store (Port Island, by the station) ── */
  konbini: {
    cast: { kbMika: 'Mika', kbHattori: 'Mr. Hattori', kbOno: 'Nurse Ono', kbGonda: 'Gonda', kbHelmet: 'Man in a Helmet',
      kbMom: "Kid's Mom", kbGran: 'Old Woman', kbFirstyear: 'First-Year', kbDaughter: 'Little Girl', kbHanami: 'Office Worker' },
    shifts: [
      { id: 'kb-s-helmet', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The clerk had a speech about robberies, which he gave her on a slow night while unpacking cigarettes, and it boiled down to three rules: give them the register, don't be a hero, and press the button under the counter with your knee, which she found by accident four times that night and which he made her swear, every time, she hadn't actually pressed." },
        { s: 'clerk', t: "It's never happened. Not once in four years. I just like saying it. It makes me feel like I work somewhere." },
        { n: "At twenty to ten the doors opened and a man came in wearing a full-face motorcycle helmet, black visor down, leather jacket zipped to the chin, and walked straight to the counter without looking at a single shelf, which was, she would learn, the most frightening thing a customer could possibly do." },
        { n: "The clerk went very still beside her. Her knee found the button again and stayed there, not pressing." },
        { choose: [
          { t: "Good evening. What can I do for you?", stat: { courage: 1 }, then: [
            { n: "She said it in exactly the voice she used for everyone, which cost more than it should have, and the helmet tilted, and a gloved hand went into the jacket, and came out holding a crumpled electricity bill." },
            { s: 'kbHelmet', t: "...Is it too late to pay this here? They said they'd cut me off Monday." }
          ] },
          { t: "(Smile at the visor and wait for him to go first.)", stat: { charm: 1 }, then: [
            { n: "She smiled at her own reflection in the black visor, which was a strange thing to do and the only thing she could think of, and after a long second the man flipped it up on the most apologetic face she had ever seen, round and sweating and very young, holding out a crumpled electricity bill." },
            { s: 'kbHelmet', t: "Sorry. Sorry. I forgot I had it on. Can I pay this here?" }
          ] }
        ] },
        { n: "She paid his electricity. It took a minute and a half and two stamps, and he bowed so deep on the way out that his helmet knocked the gum display off its hook." },
        { s: 'clerk', t: "...I need to sit down. You understand that was the closest we've ever come. Four years." },
        { n: "He sat on the step-stool behind the counter for the rest of the shift with a can of coffee pressed to his forehead, flinching every time the door chimed, and Solar, who had not flinched once, noticed that her knee was shaking under the counter anyway, and kept that to herself." }
      ] },
      { id: 'kb-s-mika', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The clerk had the night off, which nobody had told her, and in his place behind the counter was a girl of about twenty with a high ponytail and a junior-college lanyard and the energy of someone who had been waiting her whole life for a coworker." },
        { s: 'kbMika', t: "You're the high schooler! Finally. I'm Mika. I do Thursdays and some Saturdays. Do you want to see the thing? Come see the thing." },
        { n: "The thing was the hot case, which Mika had arranged by color, fried chicken to croquettes to sweet potato in a gradient that went from gold to brown to purple, and which she presented with both hands, like a magician revealing a dove." },
        { s: 'kbMika', t: "Nobody notices. Four months I've been doing this. Not one person has noticed." },
        { choose: [
          { t: "It's beautiful. People notice. They just don't say.", stat: { kindness: 1 }, then: [
            { n: "Mika looked at her for a long moment the way people look at someone who has just said the correct thing in a foreign language, and then grabbed her by both shoulders and shook her, gently, with joy." },
            { s: 'kbMika', t: "I KNEW you'd be like this. I knew it. Okay. You can do the steamer. Nobody gets to do the steamer." }
          ] },
          { t: "The croquettes should go before the chicken. Brown is darker than gold.", stat: { proficiency: 1 }, then: [
            { n: "Mika stared at the case, then at her, then at the case again, and then reorganized the entire thing in silence with the tongs, and stood back, and put a hand over her mouth." },
            { s: 'kbMika', t: "...Oh, you're *good*. Okay. You're dangerous. I'm putting you in charge of the oden when it comes back." }
          ] }
        ] },
        { n: "A man bought the last croquette at nine-thirty and left a gap in the gradient, and Mika made a small wounded sound like she'd been stepped on, and refilled it so fast the tongs clicked." },
        { n: "Walking home Solar found she was thinking about the hot case, the gold going to brown going to purple under the lamps, and about how many things in the world were arranged carefully by someone nobody ever thanked, and decided that she would notice, from now on, on principle." }
      ] },
      { id: 'kb-s-hanami', months: [4], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "It was hanami week, which meant the store sold out of blue tarps by six and beer by eight and ice by half past, and the floor by the door was a slurry of tracked-in petals, pink going brown, that no amount of mopping could win against." },
        { n: "At nine a whole office party came in at once, eight people in suits with their ties around their heads, and bought every remaining paper cup in the store, and one of them, a young woman with a petal stuck to her cheek, leaned on the counter like it was the only stable thing left on earth." },
        { s: 'kbHanami', t: "It's my first year at the company. They said hanami is mandatory. They said the new hire has to save the spot. I've been sitting under a tree since eleven this morning." },
        { s: 'kbHanami', t: "Eleven. A.M. On a tarp. Alone. Guarding a tree." },
        { choose: [
          { t: "(Slip a can of hot tea into her bag with the cups.)", stat: { kindness: 1 }, then: [
            { n: "She rang up the cups and didn't ring up the tea, and the woman found it in the bag and looked up at her with an expression so naked and grateful it was almost embarrassing, and then her boss yelled her name from the door and the expression went away, folded up, put back where it lived." },
            { s: 'kbHanami', t: "...Thank you. Really. Okay. Okay. Back to the tree." }
          ] },
          { t: "Next year, bring a book and a pillow. Make it yours.", stat: { charm: 1 }, then: [
            { n: "The woman thought about it with enormous seriousness, the petal still on her cheek, the way you think about something that hadn't occurred to you was allowed." },
            { s: 'kbHanami', t: "A pillow. You can just... bring a pillow. Huh. I'm writing that down." },
            { n: "She did write it down, on the back of the receipt, and tucked it into her jacket like a plan." }
          ] }
        ] },
        { s: 'clerk', t: "Eight years in a row, they've sent somebody from that company in here looking like that. Every spring. Different person. Same face." },
        { n: "At ten she took the trash out to the back and stood for a minute in the alley, where the wind came off the bay and carried, from somewhere far up the street, the sound of a whole office singing badly under the cherry trees, and petals, a few, all the way out here, settling on the lids of the bins." }
      ] },
      { id: 'kb-s-umbrellas', weather: ['rain'], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The rain came all at once at half past eight, the way it did on the island, a gray wall walking in off the water and hitting the windows so hard the magazines on the rack seemed to flinch, and within five minutes the store was full of people who had not come to buy anything, standing in the aisles dripping and looking out at the street." },
        { n: "The clear plastic umbrellas went in a single wave, five hundred yen each, until there was one left in the bucket by the door, and two hands on it at once." },
        { n: "One belonged to a man in a good suit with a briefcase over his head. The other belonged to a girl in a Gekkoukan uniform, a first-year by the look of her, who let go immediately, the way first-years let go of everything, and went back to standing by the window." },
        { choose: [
          { t: "(Tell the man there's another one in the back. Then give the girl yours.)", stat: { kindness: 1 }, then: [
            { n: "There wasn't another one in the back. There was her own, black, a little bent at one rib, leaning against the mop. The man bought the last one and left satisfied, and she went and got hers and held it out to the first-year, who stared at it like it might bite." },
            { s: 'solar', f: 'neutral', t: "Bring it back whenever. I'm here most nights." },
            { n: "The girl brought it back a few nights later, dried and folded and with a packet of chocolates tied to the handle with a hair elastic, and was gone before Solar could say anything at all." }
          ] },
          { t: "She was here first, sir. You can wait it out with the rest of us.", stat: { courage: 1 }, then: [
            { n: "The man opened his mouth, and looked at the girl, and looked at the whole store watching him over the tops of their magazines, and closed it, and put the umbrella in the girl's hands himself with a stiff little bow that was, Solar thought, only about forty percent sarcastic." },
            { n: "Then he bought a coffee and stood at the window with everyone else and watched the rain, and after a while, she noticed, he looked a lot less angry, the way people do when they're forced to stand still." }
          ] }
        ] },
        { s: 'clerk', t: "Rain's good for business. Bad for the floor." },
        { n: "It eased off around half past nine, and the store emptied in a long sigh, and she mopped the shining trail of everybody who had waited it out in there, from the door to the window and back, a map of the evening written in water." }
      ] },
      { id: 'kb-s-heat', months: [7, 8], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The air conditioning died at seven-fifteen with a sound like a sigh, and by eight the store was a glass box full of the day's leftover heat, the fluorescent lights buzzing louder in it, the chocolate on the bottom shelf starting to soften in its wrappers, and every customer who came in for a drink stood with the fridge door open for a very long time." },
        { s: 'clerk', t: "The repair guy says tomorrow. He said it like he was proud of himself. Tomorrow." },
        { n: "By nine the clerk was lying flat on his back on the floor behind the counter, where the tiles were coolest, with a bag of frozen edamame on his forehead, conducting the evening from there." },
        { s: 'clerk', t: "If anyone needs me, I'm dead. Ring them up. Tell my family I loved the ice cream freezer." },
        { choose: [
          { t: "(Prop both doors open and set a fan blowing through the freezer.)", stat: { proficiency: 1 }, then: [
            { n: "It took a box cutter, the fan from the back room, and a creative use of the mop handle, and it was not in any of the store's procedures, but by half past nine a thin cool wind smelling faintly of frost and soft-serve was blowing out of the freezer case and across the counter and out into the street, and the clerk got up off the floor to stand in it with his eyes closed like a man at a shrine." }
          ] },
          { t: "(Lie down next to him. Just for a minute.)", stat: { charm: 1 }, then: [
            { n: "The tiles were cool all the way down her back. The clerk didn't say anything, only moved the edamame over so it touched both their foreheads, and for one long, stupid minute they lay there side by side looking up at the ceiling tiles and the moth circling the light, and listened to the freezer hum, and it was the best minute of her week." },
            { n: "Then the door chimed, and she got up, and said welcome, with tile marks on her elbows." }
          ] }
        ] },
        { n: "Every customer that night bought one more cold thing than they'd come in for, a popsicle, a second tea, a cup of shaved ice, and the till came out higher than any Thursday all summer, which the clerk wrote down on the shift report as a direct consequence of suffering." }
      ] },
      { id: 'kb-s-oden', months: [9, 10, 11], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The oden came back to the counter in a steel tray of compartments full of dark, fragrant broth, daikon and eggs and fishcakes and konnyaku knots bobbing in their little squares like a city seen from the air, and from the moment it went in, the whole store smelled like somebody's grandmother's kitchen." },
        { n: "The salaryman came in at nine, stopped dead in the doorway, and breathed it in with his eyes closed." },
        { s: 'salaryman', t: "It's back. It's back. The year can start now." },
        { s: 'salaryman', t: "I'll take the egg that's been in the longest. The darkest one. You know the one. And a daikon. No. Two. It's been a week. Takeda ate my lunch. Off my desk. With my chopsticks." },
        { choose: [
          { t: "(Find him the darkest egg in the pot, however long it takes.)", stat: { proficiency: 1 }, then: [
            { n: "She hunted through the broth with the ladle like she was diving for pearls, turning eggs over one by one in the steam, and came up at last with one stained nearly the color of tea all the way through, and held it up to the light, and the salaryman applauded, quietly, three times." },
            { s: 'salaryman', t: "Perfect. A professional. The young people are going to be all right." }
          ] },
          { t: "Your own chopsticks? That's a war crime.", stat: { charm: 1 }, then: [
            { s: 'salaryman', t: "THANK you. That's what I said. Nobody at the office would say it. A *war crime*." },
            { n: "He said war crime two more times while she served him, savoring it more than the egg, and left with his oden held in both hands like something sacred, muttering it to himself all the way out the door." }
          ] }
        ] },
        { s: 'clerk', t: "He'll be in every night now till March. He's been coming for oden since before I worked here. Before the last guy. Possibly before the store." },
        { n: "When she closed out the pot at ten, there was one egg left in the corner, cooked so long it was nearly black, and the clerk ate it standing up over the sink with a look of deep peace, and she understood, finally, why people wrote poems about this kind of thing." }
      ] },
      { id: 'kb-s-gonda', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The night man came on at ten. She had never actually met him, only seen him arriving as she left, a mountain of a man in a gray hoodie who had to duck a little under the door chime, and tonight he came in early, at half past nine, sat down on the milk crate in the back room, and opened a paperback with a cover she didn't recognize." },
        { s: 'clerk', t: "That's Gonda. He's been on nights eleven years. He's never once been robbed. I think about why a lot." },
        { n: "The paperback was philosophy. She saw that when she went back for a box of chopsticks, the title in French, the margins full of tiny pencil notes in a handwriting so neat it looked typed." },
        { s: 'kbGonda', t: "...You're the high schooler. The one who scared the magazine kids." },
        { s: 'kbGonda', t: "Good." },
        { choose: [
          { t: "What are you reading?", stat: { knowledge: 1 }, then: [
            { n: "He told her, slowly, in a deep unhurried voice that sounded like it didn't get used much, about a man who argued that you had to imagine somebody pushing a boulder up a hill forever as happy, and she asked why, and he thought about it for so long the clerk called her twice from the register." },
            { s: 'kbGonda', t: "Because the hill's his. ...I do nights, kid. It helps." }
          ] },
          { t: "(Leave him the good stool, and go back out front.)", stat: { kindness: 1 }, then: [
            { n: "There was a stool in the back room with a cushion on it, the only one, which the clerk guarded like a dragon. She moved it beside the milk crate on her way past. Gonda looked at it, and then at her, and then moved over onto it without a word, and turned a page." },
            { n: "At ten, when she clocked out, there was a canned coffee waiting by her bag, hot, the kind she liked, which she had never told anyone." }
          ] }
        ] },
        { n: "She left him at the counter as she went out, enormous and calm under the lights with his book open by the register, the street outside dark and empty to the station, and thought that if she ever had to be awake at four in the morning somewhere, she would want it to be somewhere with a man like that in it." }
      ] },
      { id: 'kb-s-shinjiro', flags: ['joined-shinjiro'], until: '10/3', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "At ten to ten the door chimed and Shinjiro came in, hood up, hands in his coat pockets, and went down the aisles without looking at her once, picking things off the shelves with the brisk distaste of a man shopping in a store he disapproved of: eggs, a bunch of scallions, a block of tofu, dashi stock in a paper packet, which he turned over to read the back of and put back with a small noise of contempt." },
        { s: 'shinjiro', f: 'neutral', t: "...Didn't know you worked here." },
        { s: 'shinjiro', f: 'neutral', t: "Three hundred yen for scallions. That's robbery. Somebody should call somebody." },
        { choose: [
          { t: "The supermarket by the station closes at nine. You know that.", stat: { courage: 1 }, then: [
            { s: 'shinjiro', f: 'neutral', t: "...Yeah. I know that." },
            { n: "He paid for the scallions anyway, in exact change, counting it out onto the tray one coin at a time, and did not explain who was cooking at ten at night in a dorm where everybody had already eaten, and she did not ask, and both of those things sat there on the counter next to the eggs." }
          ] },
          { t: "(Bag the eggs on top, separately, the careful way.)", stat: { proficiency: 1 }, then: [
            { n: "She bagged the tofu flat on the bottom, the scallions along the side, the eggs on top in their own bag so nothing could lean on them, and he watched her hands do it with an expression that didn't change at all, except that something in it did." },
            { s: 'shinjiro', f: 'happy', t: "...Somebody taught you right." }
          ] }
        ] },
        { n: "When he'd gone the clerk leaned over from the cigarettes." },
        { s: 'clerk', t: "That guy comes in sometimes. Always late. Always buys enough food for like four people and looks like he's going to fight the scallions. Friend of yours?" },
        { n: "She thought about it longer than the question deserved, wiping down the counter where he'd counted out his change, and said yes, and the clerk nodded like that explained something, and maybe it did." }
      ] },
      { id: 'kb-s-kuji', flags: ['joined-junpei'], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The prize lottery went up by the register on a Friday, a cardboard display of prizes on a shelf, A through G, with the A prize at the top in its box like a saint in a niche: a figure of a girl from some anime in a sailor suit with a sword, posed mid-swing, her hair molded in a perfect plastic arc." },
        { n: "Junpei saw it from the street. She watched it happen through the window. He stopped walking so abruptly that the man behind him walked into him." },
        { s: 'junpei', f: 'surprised', t: "Is that... dude. DUDE. Is that the limited one? The *sword* one? Here? At the corner store by the station? This is a sign. This is literally a sign." },
        { s: 'junpei', f: 'happy', t: "Okay. Okay okay okay. How many tickets left. Don't tell me. Tell me. No. Don't. Give me three." },
        { n: "He drew a G. A keychain. He drew another G. A different keychain. He drew an F, a hand towel with the sword girl's face on it, and held it up to the light like it had personally betrayed him." },
        { choose: [
          { t: "Junpei. Put the wallet away. I'm saying this as your field leader.", stat: { courage: 1 }, then: [
            { s: 'junpei', f: 'sad', t: "...You can't pull field leader on me at the *convenience store*." },
            { s: 'solar', f: 'happy', t: "I can pull field leader anywhere." },
            { n: "He put the wallet away. He looked at the sword girl for a long time on his way out, like a man leaving a lover at the station, and then he wore the hand towel around his neck all the way back to the dorm, which she heard about later from Yukari, at length." }
          ] },
          { t: "(Count the tickets left in the box. Do the math out loud.)", stat: { knowledge: 1 }, then: [
            { n: "Forty-two tickets left, one A. She did the division out loud and then the cost, and Junpei went quiet, and then very quiet, and then he said a number that she was fairly sure was his entire month, and looked at the hand towel in his hands like it had told him the truth about himself." },
            { s: 'junpei', f: 'neutral', t: "...You're a really bad person to bring to stuff like this. You know that? Like, you're the worst." }
          ] }
        ] },
        { n: "The A prize went on a Saturday two weeks later to a quiet middle-aged man in a cardigan who drew it on his first ticket, said oh, in a mild voice, and took it home under his arm like a loaf of bread, and she decided, for the sake of everyone, never to tell Junpei." }
      ] },
      { id: 'kb-s-mom', days: [5], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "At twenty to eight on a Friday a woman came in in a long beige coat, with the same jaw and the same cram-school bag over her arm, folded flat and empty, and Solar knew who she was before she reached the counter, the way you know the second half of a song." },
        { s: 'kbMom', t: "Excuse me. Sorry. This is silly. My son goes to the cram school on the corner, and he's supposed to be there till nine, but his teacher called, and I thought maybe... a boy about this high? With a very large bag?" },
        { n: "Behind the woman, through the window, she could see the kid himself, coming down the street at a trot with his coins already in his fist, and seeing his mother's coat through the glass, and stopping so dead it was almost a cartoon." },
        { choose: [
          { t: "He comes in Fridays. He buys too many sweets. He's a good kid.", stat: { courage: 1 }, then: [
            { n: "The woman closed her eyes for a second. Outside, the kid closed his eyes too, as if they had rehearsed it, and then, with the posture of a man walking to the gallows, came in through the door." },
            { s: 'kid', t: "...Hi, Mom." },
            { s: 'kbMom', t: "Extra math." },
            { s: 'kid', t: "It's *sort of* extra math. The sour powder has a lot of numbers on it." },
            { n: "They left together, his hand in hers, and he looked back at Solar over his shoulder with an expression of total betrayal, and then, at the door, after a second, a small grudging nod, as if some part of him had wanted to be found." }
          ] },
          { t: "I'm not sure. Lots of kids come through. Would you like something warm while you wait?", stat: { charm: 1 }, then: [
            { n: "The woman bought a can of hot tea and stood by the window drinking it, and while she stood there the kid circled the block twice and finally went into the cram school after all, and Solar watched him go in under the lit sign with his bag, and had the strong sense that she had just made a small and very specific enemy." },
            { s: 'kbMom', t: "Thank you. He's at a hard age. I don't think I'd have bought sweets with him at his age, either, honestly." }
          ] }
        ] },
        { s: 'clerk', t: "...You know he's never going to forgive you. Either way." },
        { n: "The next Friday the kid came in at a quarter to eight exactly, set his basket down, and slid her a single grape gummy across the counter without a word, which she chose to understand as a peace treaty." }
      ] },
      { id: 'kb-s-saturday', days: [6], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "On a Saturday a man came in in a gray sweatshirt and soft trousers holding the hand of a girl of about five, who wore a yellow raincoat even though it wasn't raining and walked straight to the ice cream freezer and put both palms flat on the glass." },
        { n: "It took Solar until he was at the counter to recognize him. The salaryman. No tie, no briefcase, no Takeda, his hair flat on one side like he'd been napping, his whole face rearranged into somebody softer and younger and a little bit lost." },
        { s: 'salaryman', t: "Oh. Hello. Yes. This is my daughter. We're getting ice cream. It's a whole thing. She has rules." },
        { s: 'kbDaughter', t: "You have to pick for the other person. Daddy picks mine. I pick his. That's the rules." },
        { n: "The salaryman had been holding the freezer open for a full minute, sweating, choosing, and looked up at Solar over his daughter's head with the eyes of a man who did spreadsheets for a living and had never felt so unqualified." },
        { choose: [
          { t: "(Point at the strawberry one, very subtly.)", stat: { charm: 1 }, then: [
            { n: "He picked strawberry. The girl gasped like he'd guessed a password, and then picked him the one with the chocolate shell, and they stood at the counter together unwrapping them, and he bit into his and said it was the best ice cream he'd had in his life in a voice that suggested he meant something much bigger than ice cream." }
          ] },
          { t: "What does she usually pick for herself?", stat: { knowledge: 1 }, then: [
            { s: 'kbDaughter', t: "That's cheating." },
            { s: 'salaryman', t: "...That's research. Daddy does research at work. It's called research, sweetheart." },
            { n: "She let him have it, with the air of a judge granting a mistrial, and he picked strawberry, and was right, and walked out of the store holding her hand with the strut of a man who had just closed a deal." }
          ] }
        ] },
        { n: "On Tuesday he came in at nine in his tie and his briefcase and bought his one beer and told her Takeda had changed the printer settings again, and she rang him up and said nothing about strawberry, and at the door he paused and said thank you for Saturday, very quietly, and then went out into the dark to be the other man again." }
      ] },
      { id: 'kb-s-copier', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The copy machine in the corner jammed at nine, which it did about once a week, with a grinding noise and a hot plastic smell and a small red light that blinked like it was asking for a lawyer, and standing in front of it with a stack of loose-leaf held to her chest was a first-year from Gekkoukan, in uniform, on the verge of tears." },
        { s: 'kbFirstyear', t: "I'm sorry. I'm so sorry. It's my friend's notes. For the test. She lent them to me, and I have to give them back tomorrow, and it ate page four. It *ate* it." },
        { n: "The clerk said there was a procedure for this, and that the procedure was to call the copier company, and that the copier company opened at nine in the morning, and then went to restock the instant noodles in a way that made it clear he considered his part done." },
        { choose: [
          { t: "(Open the side panel and get in there.)", stat: { proficiency: 1 }, then: [
            { n: "She had never opened a copy machine in her life. There were green levers and a numbered diagram that didn't match anything and a heat inside that smelled like toast, and she worked a crumpled page out of the rollers a millimeter at a time, the first-year holding her breath behind her, until it slid free, warm and creased and whole, page four, the handwriting still perfectly readable." },
            { s: 'kbFirstyear', t: "...You're a *senpai*. Oh my god. You're the third-year from the... thank you. Thank you so much." }
          ] },
          { t: "Read it to me. I'll write it out by hand for you while you copy the rest.", stat: { knowledge: 1 }, then: [
            { n: "They sat at the little window counter by the magazines, and the first-year read page four aloud from the corner that still showed through the rollers, and Solar copied it fair onto the back of a receipt roll in her neatest hand, chemistry, valence electrons and a joke in the margin about the teacher's tie, and by the end the first-year had stopped shaking." }
          ] }
        ] },
        { n: "She went home with the whole set, tucked into a clear folder Solar sold her at a discount she made up on the spot, and at the door she turned and bowed the full, formal, first-year bow, and Solar, who was not used to being anyone's senpai in particular, bowed back slightly wrong." }
      ] },
      { id: 'kb-s-newyear', months: [12, 1], scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The New Year postcards were stacked by the register in plastic sleeves, printed with tigers for the new year, and with them the stamps, the envelopes, a little stand of pens, and at nine an old woman in a knitted hat came in and bought a single card and a single stamp and then stood at the window counter for a long time with the pen in her hand, not writing." },
        { n: "Her hand shook. Solar could see it from the register, the pen trembling a centimeter above the card, and the woman's face set in the patient, furious way of someone who had been writing her own name for eighty years and was not about to be stopped by her own hand now." },
        { s: 'kbGran', t: "It's for my sister. In Sendai. Seventy years I've sent her a card. I'm not about to stop because my hands decided to retire before I did." },
        { choose: [
          { t: "Tell me what you want it to say. I'll write it, and you sign it.", stat: { kindness: 1 }, then: [
            { n: "The woman dictated it the way you'd give orders to a junior officer, every word deliberate, the address first, then the greeting, then a short sentence about the plum tree in the courtyard of her building, and Solar wrote it in her careful hand, and then held the card flat on the counter while the woman signed her own name at the bottom in a shaky, fierce, perfectly legible line." },
            { s: 'kbGran', t: "There. She'll know I wrote that part. She'll know the rest was a nice girl at the shop. She'll be jealous." }
          ] },
          { t: "(Hold the card steady while she writes it herself.)", stat: { courage: 1 }, then: [
            { n: "She came around the counter and pinned the corners of the card down flat with both hands, and the woman wrote the whole thing herself, every character, slowly, breathing hard through her nose, the pen wandering and coming back, wandering and coming back, and it took eleven minutes, and nobody came in to buy anything the whole time, as if the street knew." },
            { s: 'kbGran', t: "...It's ugly. It's mine, though. That's the point." }
          ] }
        ] },
        { n: "Solar put it in the postbox outside herself, after the woman had gone, and stood there a second with her hand on the cold red metal, thinking about a woman in Sendai who would get a card on the first of January the way she had for seventy years, and about how some things only kept going because one person refused to let them stop." }
      ] }
    ],
    beats: [
      { id: 'kb-arc-1', at: 2, after: '4/28', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "At nine-forty, every night she worked and, the clerk swore, every night she didn't, two people came into the store within a minute of each other and bought their usual and left, and neither of them had ever, as far as anyone knew, spoken to the other." },
        { n: "One was a taxi driver, Mr. Hattori, in his fifties, white gloves folded into his breast pocket, who parked the cab outside with the light off and bought a can of black coffee and one pork bun from the steamer. The other was a nurse from the hospital on the island, Ms. Ono, in a cardigan over her scrubs, who bought a lemon tea and one pork bun from the steamer." },
        { s: 'clerk', t: "Watch. Watch what happens. I've been watching this for two years. Two years. It's the best show on television." },
        { n: "Tonight there was one pork bun left. It sat in the steamer alone on its paper square, glistening, under the little heat lamp, and Mr. Hattori came in and went to the coffee, and the door chimed again, and Nurse Ono came in and went to the tea, and they both turned toward the counter at the same time." },
        { s: 'kbHattori', t: "...Ah." },
        { s: 'kbOno', t: "Oh. Ah. Please. Go ahead." },
        { s: 'kbHattori', t: "No, no. Please. You've been on your feet all day. I've been sitting down. Professionally. All day." },
        { n: "They stood there with a meter of linoleum between them, both holding out a hand toward the pork bun like it was a door neither of them would go through first, and the clerk made a small, strangled noise behind the cigarettes, and Solar realized everyone was looking at her." },
        { choose: [
          { t: "(Cut the pork bun exactly in half. Two bags.)", stat: { proficiency: 1 }, then: [
            { n: "She did it with the bread knife from the back room, which was not technically a procedure, on a clean paper square, a perfect cut straight down through the steam, and bagged the halves separately, and charged them each half, and held out both bags at once." },
            { n: "They looked at each other over the bags. Nurse Ono laughed first, a short surprised sound like she hadn't laughed in a while, and Mr. Hattori ducked his head and smiled at the floor." }
          ] },
          { t: "There's more in ten minutes. Why don't you both wait?", stat: { charm: 1 }, then: [
            { n: "There were not more in ten minutes. She put a fresh tray in the steamer anyway, out of turn, and they waited, standing by the window with their drinks, a polite distance apart, saying nothing, and then, around minute six, Mr. Hattori said something about the wind off the bay, and Nurse Ono agreed it was very windy, and that was the longest conversation either of them had ever had in the store." }
          ] }
        ] },
        { n: "They left within a minute of each other, the way they'd arrived, the cab pulling away from the curb with its light still off, the nurse walking the other way toward the hospital with her hands around her tea." },
        { s: 'clerk', t: "Two years. TWO YEARS. And you walk in and—you understand you've ruined my show. You've ruined it. I have to watch it now. I'm invested." }
      ] },
      { id: 'kb-arc-2', at: 5, after: '7/1', prev: 'kb-arc-1', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "It was hot, even at half past nine, the kind of island heat that came up off the asphalt long after dark, and Mr. Hattori came in ten minutes early, alone, sweating through his white shirt, and did not go to the coffee at all." },
        { s: 'kbHattori', t: "Excuse me. Miss. I have an odd question. Professionally speaking." },
        { s: 'kbHattori', t: "The lemon tea. The one Ms.—the nurse—buys. Is it the hot one or the cold one, in summer? I've never been in the right place in the line to see." },
        { n: "He held a thousand-yen note folded very small, as if it were evidence. Behind the cigarettes, the clerk had stopped moving entirely, a carton held aloft, like an animal that has heard a twig snap." },
        { s: 'solar', f: 'neutral', t: "The cold one. Since June. With the pork bun. Same as you." },
        { s: 'kbHattori', t: "I'd like to buy one. For her. But I don't want to be... it's a strange thing, a man buying a woman a tea. At my age. In a convenience store. I'd like it to be just there. Waiting. Without any of the... me." },
        { choose: [
          { t: "(Put it behind the counter for her. Say it's from a customer.)", stat: { kindness: 1 }, then: [
            { n: "She took his thousand yen and gave him his change and put the cold lemon tea behind the counter beside the register, where it sweated a small ring onto the counter, and at nine-forty-one Nurse Ono came in, and Solar held it out and said a customer had left it, and watched the nurse's face do something complicated and private and then put itself back together." },
            { s: 'kbOno', t: "...A customer. Well. Tell the customer thank you." },
            { n: "Out the window, in the cab with its light off, Mr. Hattori was very carefully looking at a map." }
          ] },
          { t: "Mr. Hattori, she'll want to know who it's from. Let her.", stat: { courage: 1 }, then: [
            { n: "He stood there in his sweat-dark shirt and thought about it so hard she could practically hear it, and then shook his head, and then nodded, and then said, all right, his name, but only his surname, as if surnames were safer." },
            { n: "When the nurse came in Solar held out the tea and said it was from Mr. Hattori, the taxi, and Nurse Ono turned and looked out the window at the cab, and Mr. Hattori, inside it, lifted one white-gloved hand off the wheel about two centimeters." },
            { s: 'kbOno', t: "...Hattori. Huh. I always thought he looked like a Hattori." }
          ] }
        ] },
        { n: "The clerk put the carton of cigarettes down very slowly, came out from behind the shelf, and stood beside her at the register with his hands folded, watching the cab pull away and the nurse walk off toward the hospital with the cold tea against her cheek." },
        { s: 'clerk', t: "...I don't say this a lot. Ever. But I'm glad you work here." }
      ] },
      { id: 'kb-arc-3', at: 9, after: '10/1', prev: 'kb-arc-2', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The tea had been on the counter at nine-forty every night for three months, cold and then, when the wind turned, hot, and then one week in October Nurse Ono stopped coming." },
        { n: "Mr. Hattori kept coming. He bought his coffee and his pork bun, and left the tea, and the tea sat behind the register till ten, going lukewarm, and Solar put it in the fridge in the back room, where by the end of the week there was a little row of them, five, lined up like soldiers waiting for orders." },
        { s: 'kbHattori', t: "Perhaps she changed shifts. Nurses change shifts. That's very normal. It's a hospital. It's not my business." },
        { s: 'kbHattori', t: "...Is she all right, do you think? You'd know if she wasn't. Someone would come in and say." },
        { n: "On Saturday, at nine-forty, the door chimed and it was her, in a coat instead of a cardigan, her arm in a navy sling, her face pale and tired and a little annoyed, the way people look after being made to rest against their will." },
        { s: 'kbOno', t: "I fell down the back stairs at work. On the *one* day I was carrying nothing. I've been home a week watching cooking shows and I want to die." },
        { s: 'kbOno', t: "...He's not here yet, is he. The taxi man. I wanted to say. I wanted him to know it wasn't the tea." },
        { choose: [
          { t: "He was here every night. He was worried. Wait, he'll come.", stat: { courage: 1 }, then: [
            { n: "She said it plainly, the way you'd hand someone a thing they'd dropped, and the nurse went a little pink across the nose, which made her look much younger, and looked out the window at the empty curb, and decided to wait." }
          ] },
          { t: "(Go into the back. Bring out all five teas, and set them in a row.)", stat: { charm: 1 }, then: [
            { n: "She lined them up along the counter, five cold lemon teas in a row, and Nurse Ono looked at them for a long time, and put her good hand over her mouth, and laughed behind it, and then didn't, quite, and then did again." },
            { s: 'kbOno', t: "Five. He bought five. Oh, that *idiot*." }
          ] }
        ] },
        { n: "The cab pulled up at nine-forty-four. He came in, saw her, saw the sling, and stopped in the doorway with the chime going off over his head and his whole face open in a way she suspected it hadn't been for years." },
        { s: 'kbHattori', t: "...Ms. Ono." },
        { s: 'kbOno', t: "Mr. Hattori. You'll have to drive me home, I'm afraid. I'm not allowed to carry my own tea. Doctor's orders." },
        { n: "He carried her tea. He carried all five, in a bag Solar gave him for free, and opened the back door of the cab for her like it was a limousine, and they drove off toward the residential side of the island with the light still off, and the clerk, who had been hiding in the back room this entire time with the door open a crack, came out and sat down on the floor." }
      ] },
      { id: 'kb-arc-4', at: 13, after: '12/26', prev: 'kb-arc-3', scene: [
        { place: 'Port Island · Convenience Store', time: 'Evening' },
        { n: "The Christmas cake poster came down after Christmas, a strawberry shortcake glowing under a cartoon snowfall, and the clerk rolled it up with the solemnity of a man folding a flag, and then took down the clipboard of preorder slips that had hung by the register on a string all month and that he had referred to, darkly, as the Ledger." },
        { s: 'clerk', t: "Thirty. Head office wanted thirty. We sold thirty-one. From a store by a train station. They're going to think I'm a genius. I'm going to let them think it." },
        { n: "Mika had sold eleven, mostly to her own relatives. The clerk had sold two, both to himself, out of fear. Solar had sold six, to the salaryman, who bought one for his daughter and then, after visible inner struggle, one for his department, Takeda included, and to the kid, who bought one with an enormous bag of coins and refused to say who it was for." },
        { s: 'kbMika', t: "And you missed the best one. You weren't on. The twentieth. Look. *Look.* I kept the carbon. I'm going to frame it." },
        { n: "It was a preorder slip in a quick, slanting nurse's hand, a small cake, the twenty-fourth, and on the line for the name, two names, one after the other, Hattori and Ono, and neither of them crossed out." },
        { s: 'kbMika', t: "They came in *together*. Through the *door*. At the same *time*. He held the clipboard and she wrote. I had to go into the walk-in afterward and just stand there." },
        { n: "Something in her chest went warm and then, oddly, a little sore, the way it did at the end of a good book, the specific ache of having been one chapter of a story that had gone on without her, which was, she supposed, what you wanted for a story." },
        { n: "At nine-forty the door chimed, and it was both of them, together, in coats, Mr. Hattori holding a small white box in his gloved hands like it was something that might break or go off." },
        { s: 'kbOno', t: "We saved you some. It seemed only right. You were the first to see it, after all. Before we did." },
        { s: 'kbHattori', t: "Professionally speaking, you were the dispatcher." },
        { n: "Inside the box were three slices of strawberry shortcake, a little leaning, the cream softening at the edges, and a tiny chocolate plate with Merry Christmas written on it in white icing, broken carefully into three pieces." },
        { choose: [
          { t: "(Get three forks from the counter. Eat it right there, all of you.)", stat: { charm: 1 }, then: [
            { n: "She handed out the plastic forks from the bin by the register, one to the clerk, one to Mika, one for herself, and the three of them stood behind the counter eating Christmas cake at nine-forty-five at night while the taxi driver and the nurse watched them from the other side with their hands in their pockets, pleased with themselves, like parents at a recital." },
            { s: 'clerk', t: "...This is the best cake I've ever had. It's a convenience store cake. I sold it. It's the best one." }
          ] },
          { t: "Thank you. Both of you. It was nice to be part of it.", stat: { kindness: 1 }, then: [
            { n: "She meant it, and it came out plainer than she'd planned, without any of the usual armor on it, and Nurse Ono looked at her a second longer than the sentence needed, and reached across the counter and squeezed her wrist, once, with the hand that had been in the sling." },
            { s: 'kbOno', t: "You're a good kid. Don't let them work you too hard here." }
          ] }
        ] },
        { n: "They bought a can of black coffee and a lemon tea, hot, and one pork bun, and asked her to cut it in half, and she did, with the bread knife from the back room, straight down through the steam, two bags." },
        { n: "When they'd gone the clerk took a marker and wrote on the inside of the rolled-up poster, small, thirty-one, and then, after a second, drew a very small heart, badly, and Solar pretended not to see it, and he pretended not to know that she had." }
      ] }
    ],
    quiet: [
      { id: 'kb-q-receipt', scene: [
        { n: "The receipt button stuck. She pressed it like she didn't mean it, the way the clerk had taught her, and it worked, which felt like a metaphor for something she was too tired to work out." },
        { s: 'clerk', t: "See. You've got the touch. Took me a year." }
      ] },
      { id: 'kb-q-gonda-book', scene: [
        { n: "Gonda came on at ten with a new paperback, this one in German, and held it up for her to see the cover on his way past like a man showing a friend a photograph of his dog." },
        { s: 'kbGonda', t: "This one's worse. You'd like it." }
      ] },
      { id: 'kb-q-kid-gummy', days: [5], scene: [
        { n: "The kid came in, bought one bag of gummies instead of six, and laid a hundred-yen coin on the counter with the air of a man who was trying to be a new person." },
        { s: 'kid', t: "Don't say anything." },
        { n: "He came back four minutes later for the sour powder. She didn't say anything." }
      ] },
      { id: 'kb-q-mika-steamer', scene: [
        { n: "Mika had taught her the steamer: the buns in rows by flavor, the lid lifted with the wrist and never the fingers, the steam let out sideways and away from the face. Solar got it right the first time, and Mika put a hand on her heart." },
        { s: 'kbMika', t: "You're my legacy." }
      ] },
      { id: 'kb-q-takeda', scene: [
        { s: 'salaryman', t: "Takeda brought cookies in today. Homemade. For everyone. I don't know what to do with that. I'm very confused." },
        { choose: [
          { t: "Maybe Takeda is a person.", stat: { kindness: 1 }, then: [
            { s: 'salaryman', t: "...Don't say that. Don't. I need him. I need him to be how he is." }
          ] },
          { t: "It's a trap. Don't eat them.", stat: { charm: 1 }, then: [
            { s: 'salaryman', t: "I KNEW it. I knew it. I ate two. I'll be on my guard." }
          ] }
        ] }
      ] },
      { id: 'kb-q-hattori-wave', scene: [
        { n: "Mr. Hattori's cab rolled past the window at nine-forty with its light off, and he lifted two fingers off the wheel at her through the glass, the taxi driver's wave, and she lifted two fingers off the register back." },
        { s: 'clerk', t: "Taxi wave. You're in. There's no going back from the taxi wave." }
      ] },
      { id: 'kb-q-door', scene: [
        { n: "The automatic door opened on nobody, the way it did sometimes for reasons nobody could explain, and she said welcome to the empty street out of habit, and somewhere behind the shelves the clerk said welcome too, softly, in solidarity." },
        { s: 'clerk', t: "Maybe it's a ghost. Maybe it's a ghost who just wants to be welcomed somewhere. Let it have this." }
      ] },
      { id: 'kb-q-magazines', scene: [
        { n: "The magazine rack had been read and put back crooked again. She straightened every issue, spines out, in order, and stood back from it, and the clerk came and stood beside her and looked at it too, two people admiring a magazine rack at nine at night." },
        { s: 'clerk', t: "Beautiful. Lasts about forty minutes." }
      ] },
      { id: 'kb-q-ono-tea', scene: [
        { n: "Nurse Ono paid for her lemon tea in exact change and, before she left, set a cough drop from her own pocket on the counter beside the register." },
        { s: 'kbOno', t: "Your voice sounds scratchy. You talk to the door too much." }
      ] },
      { id: 'kb-q-cat', scene: [
        { n: "There was a cat that sat outside the back door at closing, gray, one ear ragged, and never came in and never let anyone touch it. Tonight it let her stand a meter away while she took out the trash, which the clerk said was a personal record for anyone." },
        { s: 'clerk', t: "It hates me. Four years. You've been here five minutes." }
      ] },
      { id: 'kb-q-mop', scene: [
        { n: "She mopped at ten in long figure-eights, the way Gonda did it, which was faster and left no streaks, and which he had shown her once without a word, by doing it beside her for one aisle and then handing her the mop." },
        { s: 'kbGonda', t: "...Better. Wrists, not shoulders." }
      ] },
      { id: 'kb-q-change', scene: [
        { n: "A man in a hurry paid for his cigarettes with a ten-thousand-yen note and was out the door before she'd counted his change. She ran after him into the street with it, all nine thousand five hundred and twenty, and he stared at her like she'd come down from space." },
        { choose: [
          { t: "(Hand it over, and jog back without a word.)", stat: { proficiency: 1 }, then: [
            { n: "The clerk was holding the door for her when she got back. He didn't say anything. He just looked proud, in a tired way." }
          ] },
          { t: "You'd forget your own head, sir.", stat: { courage: 1 }, then: [
            { n: "He laughed, startled, and told her it was true, and that his wife said the same, and bowed to her right there on the sidewalk." }
          ] }
        ] }
      ] }
    ],
    openers: {
      4: "April nights at the store still had a bite to them, the doors letting in cold air and the odd pink petal blown all the way from the station trees, and the shelf by the register was given over to blue tarps and paper cups and beer by the case.",
      5: "In May the store smelled of the hot case and floor cleaner and, faintly, the sea, and the drinks fridge had started to empty faster, green tea first, then everything.",
      6: "The umbrella bucket by the door was never empty in June, and neither was the mop, and the whole store had the warm, damp, rubber-mat smell of a place that had given up on being dry until July.",
      7: "July meant the ice cream freezer, its glass lid fogging every time a kid lifted it, and cicadas still going in the station trees long after dark, and the clerk standing in front of the drinks fridge with the door open, calling it inventory.",
      8: "August filled the rack by the counter with fireworks kits and sparklers, and the evenings stayed hot and orange and smelled of the bay until well past nine, and the shaved ice sold faster than they could stock it.",
      9: "In September the oden pot came back to the counter, a month too early for the weather and right on time for head office, and steamed away under the lamps while customers came in sweating and bought it anyway.",
      10: "October brought the wind off the bay in earnest, shoving at the automatic doors, and a shelf of Halloween candy in orange and black that the kid regarded every Friday with the reverence of a pilgrim.",
      11: "By November it was dark before the shift started, the windows black mirrors full of the store's own fluorescent light, and the pork bun steamer worked so hard the glass over the register fogged at the corners.",
      12: "In December the Christmas cake poster went up by the register and the windows went cold to the touch, and the store smelled of oden and wet wool and the heaters, which rattled.",
      1: "January was quiet at the store, the New Year postcards sold out and the little kagami mochi on the shelf by the register gathering a faint film of dust, and the cold came in sharp every time the doors slid open."
    }
  },

  /* ── Chagall Café (Paulownia Mall) ── */
  chagall: {
    cast: { chKagami: 'Ms. Kagami', chYuu: 'Yuu', chHinata: 'Hinata', chOkuda: 'Mr. Okuda', chRibbon: 'Girl with a Ribbon',
      chFriend: 'Her Friend', chJobman: 'Man in a Suit', chFreshman: 'University Student', chOldwife: 'Old Woman', chOldman: 'Old Man',
      chWaiting: 'Girl at the Window', chLostboy: 'Little Boy' },
    shifts: [
      { id: 'ch-s-first', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Chagall was all dark wood and brass and a long window onto the mall fountain, and it smelled of roasted beans and warm milk and, underneath that, something she couldn't name, faintly sweet and faintly smoky and a little like the air before a storm, which she would learn was the smell of the Pheromone Coffee and which she would never, in all her shifts there, get used to." },
        { n: "The manager, Ms. Kagami, was somewhere in her forties, with her hair in a low knot and reading glasses on a thin chain, and she looked Solar up and down once, the way you'd look at a cut of fish." },
        { s: 'chKagami', t: "The machine you'll learn in a week. The register in a day. The job is memory. Who comes in, what they drink, what they drink when it's a bad day. People don't come here for coffee. They come here to be known a little." },
        { s: 'chKagami', t: "The Pheromone Coffee, you don't touch. I make it. Nobody else. Don't ask what's in it. Everybody asks." },
        { n: "Then she nodded toward the window seat, where an old man in a gray cardigan sat with a newspaper folded into quarters, a crossword facing up, a fountain pen in his hand, not a pencil, as if mistakes were for other people." },
        { s: 'chKagami', t: "Mr. Okuda. Every day but Sunday. His cup's nearly empty. What does he want? Don't ask him. Tell me." },
        { choose: [
          { t: "(Watch him for a minute. Then answer.)", stat: { knowledge: 1 }, then: [
            { n: "She watched. The cup was black, no spoon on the saucer. The sugar bowl had been moved to his side of the table, but the lid was still on. He was frowning at the bottom left corner of the puzzle and tapping the pen, and the frown had the look of someone settling in." },
            { s: 'solar', f: 'neutral', t: "Black. Another one. And he'll take the sugar this time, because he's stuck." },
            { n: "Ms. Kagami looked at her over the reading glasses for a long moment, and then, very slightly, raised one eyebrow, which Solar would come to understand was as close to a standing ovation as the woman got." }
          ] },
          { t: "(Go over and ask him anyway, nicely.)", stat: { charm: 1 }, then: [
            { n: "Mr. Okuda looked up at her when she asked, surprised, and then pleased, and then, with a very dry little smile, told her he'd have another black coffee, and that Ms. Kagami had certainly told her not to ask him, and that she should never listen to Ms. Kagami about anything except coffee." },
            { s: 'chOkuda', t: "And she's only right about coffee two times in three." },
            { s: 'chKagami', t: "I heard that." }
          ] }
        ] },
        { n: "In the far corner, behind a fortress of workbooks, a boy of about nineteen had ordered one coffee at one o'clock and was still nursing it at five, highlighting something with such concentration that the highlighter had begun to squeak, and Ms. Kagami refilled his cup without a word on her way past and didn't ring it up." },
        { n: "Solar noticed. She noticed, too, that she had been noticed noticing, and that this seemed to be the first test she'd actually passed." }
      ] },
      { id: 'ch-s-pheromone', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Yuu, who worked weekday afternoons and was in his second year studying something at a university across the bay that he described only as “vague,” believed in the Pheromone Coffee the way some people believe in horoscopes, which was completely and with evidence." },
        { s: 'chYuu', t: "I'm serious. I've seen it work. A guy came in last month, had one, went out there, and a girl dropped her shopping bags in front of him. *Dropped them.* Do you know how rare that is outside a manga." },
        { n: "At four two girls came in in another school's blazers, one of them with a red ribbon in her hair and the pale fixed look of a person about to jump off something, and ordered one Pheromone Coffee, to go, and stood at the counter holding hands under the edge of it." },
        { s: 'chRibbon', t: "He's out there. By the fountain. He comes every Monday. I'm going to say it today. I'm going to drink this and then I'm going to say it." },
        { s: 'chFriend', t: "She's been going to say it since February." },
        { choose: [
          { t: "It's just coffee. You were brave enough before you came in here.", stat: { knowledge: 1 }, then: [
            { n: "The girl with the ribbon stared at her, and Yuu made a noise like a man watching a vase fall, but something in the girl's shoulders came down an inch, and she took the cup anyway, and held it like a talisman, and went out." }
          ] },
          { t: "(Lean in and whisper: Ms. Kagami made this one extra strong.)", stat: { charm: 1 }, then: [
            { n: "Ms. Kagami had not made it extra strong. Ms. Kagami had made it exactly the way she made every one of them, behind her screen, without a word. But the girl's eyes went wide, and she nodded hard, twice, like a soldier receiving orders, and went out." }
          ] }
        ] },
        { n: "The three of them, Solar and Yuu and, from behind the screen, very pointedly not watching, Ms. Kagami, watched through the window as the girl walked up to a boy on the fountain's edge, said something nobody could hear, and stood there, and then, after a terrible, endless second, he went red to the ears and said something back, and she put both hands over her face." },
        { s: 'chYuu', t: "IT WORKS. I *told* you. I told you and you looked at me like I was an idiot. Every time." },
        { s: 'chKagami', t: "It works when they've already decided. Wipe the steam wand, Yuu." }
      ] },
      { id: 'ch-s-spring', months: [4, 5], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "In spring the mall filled with new people, first-years in uniforms a size too big and university students from out of town carrying maps of the monorail, and Ms. Kagami put a sakura syrup on the menu with the visible reluctance of a woman who believed flavored coffee was a moral failing but also believed in rent." },
        { n: "At four a girl came in alone with a brand-new tote bag from a university in the city and stood at the counter reading the menu board for so long that a line formed behind her, and Solar watched her eyes go back and forth, back and forth, the way eyes do when they've stopped reading and started panicking." },
        { s: 'chFreshman', t: "I'm sorry. I've never... we didn't have a café. Where I'm from. There was a vending machine outside the post office. What's a, um. What is a macchiato. Is it a size?" },
        { choose: [
          { t: "(Explain the whole menu, quickly and kindly, top to bottom.)", stat: { knowledge: 1 }, then: [
            { n: "She did it in under a minute, espresso and milk and foam and which was which, with her hand moving down the board like a tour guide, the line behind them going quiet to listen, and at the end the girl ordered a cafe au lait with total confidence and the man behind her, a businessman in his fifties, ordered one too, a little sheepishly, as if he'd learned something." }
          ] },
          { t: "What did you drink at home, after school?", stat: { charm: 1 }, then: [
            { s: 'chFreshman', t: "...Milk tea. From the machine. The one in the brown can." },
            { n: "Chagall did not have milk tea from a brown can. Solar made her a royal milk tea anyway, strong and sweet, in the biggest cup, and the girl drank it at the window looking out at the fountain with her shoulders slowly coming down from around her ears, and left her a note on the napkin that said, in careful handwriting, *it tasted like home, but better.*" }
          ] }
        ] },
        { s: 'chKagami', t: "She'll be back. She'll be a regular by June. They always are, the lost ones." },
        { n: "Ms. Kagami said it like a diagnosis, wiping down the sakura syrup bottle as if it had personally offended her, and Solar looked at the napkin note pinned behind the register for the rest of the shift, and thought about being from somewhere, and how you'd know." }
      ] },
      { id: 'ch-s-rain', weather: ['rain'], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The rain came down on the mall's glass roof loud enough to drown out the fountain, a gray steady roar, and the whole mall filled up with people who hadn't planned to be there, standing in shop doorways shaking out their umbrellas, and Chagall filled up fastest of all." },
        { s: 'chKagami', t: "Rain rule. Anybody who comes in soaked gets a cup of hot water with lemon. Free. On me. You decide who's soaked." },
        { s: 'chKagami', t: "And you don't announce it. You just put it in front of them." },
        { n: "It was harder than it sounded. A salaryman with a damp shoulder, a pair of schoolgirls laughing with their hair plastered to their faces, a man so wet his shoes squelched who ordered three espressos and looked, frankly, fine. And in the corner by the door, an old woman with a folded umbrella that had obviously not opened, her cardigan dark with water, sitting very straight and ordering nothing." },
        { choose: [
          { t: "(Everybody. Everybody who walked in from outside gets one.)", stat: { charm: 1 }, then: [
            { n: "She made eleven cups of hot water with lemon in twenty minutes and set them down without a word, one by one, and nobody said anything, and everybody drank them, and by the end the café had the soft, steamed, close feeling of a bathhouse, people with their hands around their cups watching the rain together like it was a film." },
            { s: 'chKagami', t: "...Eleven. Well. It's my rule." }
          ] },
          { t: "(The old woman first. Then sit her by the heater.)", stat: { knowledge: 1 }, then: [
            { n: "She brought the cup and moved the old woman, gently, to the table by the heating vent, and took the broken umbrella behind the counter, where Yuu, who it turned out had grown up above a hardware shop, fixed the bent rib in four minutes with a paperclip and pliers, and the woman left an hour later dry and holding her umbrella like it was new." }
          ] }
        ] },
        { n: "At the window Mr. Okuda filled in seven across, held the paper up, and showed it to her as she passed: *SHOWER*, in fountain pen, very neat." },
        { s: 'chOkuda', t: "It's a sign. I don't believe in signs. But it's a sign." }
      ] },
      { id: 'ch-s-summer', months: [8], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'Daytime' },
        { n: "In the summer the mall was the coolest place on the island and everybody knew it, and the fountain was full of children with their trousers rolled up and mothers pretending not to see them, and Chagall sold iced coffee by the bucket, the ice machine grinding away in the back like a ship's engine." },
        { n: "An old couple had taken the table by the pillar at eleven, and at three they were still there, one iced coffee between them with two straws, the ice long melted to a pale brown water, the husband reading and the wife fanning herself with a folded menu." },
        { s: 'chYuu', t: "They were here yesterday too. And the day before. Same coffee. One. They come in at opening and leave at closing. Should we... I don't know. Say something?" },
        { n: "Ms. Kagami was in the back. She came out drying her hands and looked at the couple, and then at Solar, and waited, the way she waited when she wanted to see what you'd do with something." },
        { choose: [
          { t: "Their apartment doesn't have air conditioning. Look at her. Leave them be.", stat: { knowledge: 1 }, then: [
            { n: "The wife's neck was flushed. The husband had a damp towel around his shoulders under his collar, the way old people did on the hottest days. Ms. Kagami looked at Solar for a long second, and nodded once, and went back into the kitchen, and came out with a plate of the small almond cookies that never sold, and put it on the couple's table without explanation." },
            { s: 'chOldwife', t: "Oh, we didn't order... oh. Oh, you're too kind. We'll come back and buy something properly. We will." }
          ] },
          { t: "(Bring them fresh ice in the cup. Ask how long they've been married.)", stat: { charm: 1 }, then: [
            { s: 'chOldman', t: "Fifty-one years. In October. She still fans herself with the menu. I bought her a proper fan in nineteen seventy. She lost it in nineteen seventy." },
            { s: 'chOldwife', t: "He's never let it go. Fifty-one years." },
            { n: "They argued about the fan all afternoon, cheerfully, with the fresh ice clinking in the cup between them, and when they left at closing the wife pressed Solar's hand in both of hers and said they'd been coming to Chagall since before it was Chagall, when it was a stationery shop, which nobody had ever told her and which, Ms. Kagami confirmed later, was true." }
          ] }
        ] },
        { n: "After they'd gone she wiped down their table and found, under the sugar bowl, a folded hand fan, paper and bamboo, cheap, the kind they sold at the summer festival stalls, left on purpose, with a note on it in shaky pencil that said *for the young lady at the counter, it's hot.*" }
      ] },
      { id: 'ch-s-crossword', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Mr. Okuda called her over at half past four with the particular dignity of a man who has never once in his life asked for help with a crossword and has no intention of starting now." },
        { s: 'chOkuda', t: "I'm not asking. I'm consulting. There's a difference. Seventeen down. Four characters. *Lost in a fog five leagues deep.*" },
        { n: "He tapped it with his pen. Four empty squares. The fountain splashed outside the window and the coffee machine hissed behind her and the phrase sat in her head a moment, lost in a fog, five leagues deep, and something in her chest went still in a way she couldn't account for." },
        { choose: [
          { t: "Gori-muchu. Completely lost. Not knowing which way you came from.", stat: { knowledge: 1 }, then: [
            { n: "It came out of her before she'd thought it, the way some things did now, from a shelf in her head she couldn't see the rest of, and Mr. Okuda wrote it in carefully, four characters in fountain pen, and looked up at her over his glasses with an expression she couldn't read." },
            { s: 'chOkuda', t: "...Quick. Young people don't know that one anymore. They don't need it. They have maps on their phones." }
          ] },
          { t: "(Ask the boy in the corner with all the workbooks.)", stat: { charm: 1 }, then: [
            { n: "The boy in the corner looked up from his fortress, startled, like a deer seeing headlights, and said it at once without thinking, gori-muchu, and then went red, and then, when Mr. Okuda turned around in his chair and nodded at him gravely across the café, sat up a little straighter than she'd ever seen him sit." },
            { s: 'chHinata', t: "It's... it was on a practice test. Last year. I got it wrong last year." }
          ] }
        ] },
        { n: "Lost in a fog five leagues deep. She thought about it the rest of the shift, steaming milk, wiping cups, not in any way that hurt, only the way you keep touching a bruise to see if it's still there, and decided it was a good phrase, and that somebody very long ago had felt that way too, and had gotten far enough out of the fog to write it down." }
      ] },
      { id: 'ch-s-complaint', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The man came in at a quarter past five in a suit that was a little too new, set an empty takeout cup on the counter, upside down, and said he would like to make a complaint about the Pheromone Coffee." },
        { s: 'chJobman', t: "I had one of these this morning. Before an interview. The third one this month. Everybody said, go to Chagall, it works, get the coffee. I didn't get it. They told me in the lobby. They didn't even wait till I'd gone." },
        { s: 'chJobman', t: "So I'd like my money back. On principle. That's all. I'm sorry. I know it's stupid." },
        { n: "He didn't look like he wanted his money back. He looked like a man who had been holding himself together with both hands since about ten in the morning and needed, very badly, somewhere to put something down. Yuu had gone pale and slightly backward. Ms. Kagami, behind her screen, had gone silent." },
        { choose: [
          { t: "Of course. Sit down a minute first, though. You've been on your feet all day.", stat: { charm: 1 }, then: [
            { n: "He sat. She gave him his money back, counted out into his palm, and then a glass of water, and then just stood there wiping a table nearby that didn't need wiping, so he wasn't alone and didn't have to talk, and after a while he talked anyway, about the first job and the second job and the man in the lobby who didn't wait." }
          ] },
          { t: "It's not a lucky charm. You did three interviews this month. That's the brave part.", stat: { courage: 1 }, then: [
            { n: "He looked at her like she'd slapped him, and then like she'd done something else, something he didn't have a word for, and his jaw worked for a second, and he laughed, short and wet and surprised." },
            { s: 'chJobman', t: "...Three. Yeah. Three. Nobody's said that like it was a good thing." }
          ] }
        ] },
        { n: "Ms. Kagami came out from behind the screen with a Pheromone Coffee in a takeout cup, the lid already on, and set it on the counter in front of him, and pushed it across with one finger." },
        { s: 'chKagami', t: "For the next one. It works when you've already decided. You've decided. Come back and tell me." },
        { n: "He came back three weeks later in the same suit, a little less new, and didn't say anything at all, just put a box of good cakes from the department store on the counter, bowed, and left, and Ms. Kagami ate one standing in the kitchen with her eyes closed and did not share." }
      ] },
      { id: 'ch-s-yukari', met: ['yukari'], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The bell over the door went and it was Yukari, with her bag over her shoulder and her phone in her hand, who looked up and saw Solar behind the counter in the brown Chagall apron with her hair pinned up and a steam wand in her fist, and stopped dead, and slowly smiled the smile of someone who had been handed a great gift." },
        { s: 'yukari', f: 'neutral', t: "Oh my god. You work *here*? You didn't tell me you work here. Look at you. You look like a barista in a drama. The kind who has a tragic backstory and remembers everyone's order." },
        { s: 'yukari', f: 'neutral', t: "...Okay, don't look at me like that. What's good. And don't say the Pheromone Coffee. I'm not drinking that. People get *weird* around you after." },
        { choose: [
          { t: "I'll make you the Pheromone Coffee. Ms. Kagami does it. But I'll watch.", stat: { charm: 1 }, then: [
            { s: 'yukari', f: 'surprised', t: "You're not listening to me *at all*." },
            { n: "She drank it anyway, at the window, under protest, and by the time she'd finished it two boys from the second-year class had stopped at her table to say hi and one man from the shoe store across the concourse had asked if she was a model, and she came back to the counter and set the empty cup down with the grim face of a scientist whose hypothesis had been proven." },
            { s: 'yukari', f: 'neutral', t: "Never again. Never. I'm going to tell Mitsuru-senpai to have it tested." }
          ] },
          { t: "(Make her a honey latte and draw a very bad heart on top.)", stat: { proficiency: 1 }, then: [
            { n: "The heart came out lopsided, more of a kidney, really, and she slid it across the counter with a completely straight face, and Yukari looked at it, and looked at her, and covered her mouth and laughed, really laughed, the kind that made her eyes go small." },
            { s: 'yukari', f: 'neutral', t: "It's terrible. It's the worst thing I've ever seen. I'm taking a picture. I'm keeping this forever." }
          ] }
        ] },
        { n: "She stayed till the end of the shift doing her homework at the counter, which was not allowed, and Ms. Kagami allowed it, and when Solar hung up the apron Yukari was waiting by the door to walk back to the monorail together, the mall's lights coming on above them in long white rows." }
      ] },
      { id: 'ch-s-mitsuru', after: '6/13', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Mitsuru came in at four, alone, in her uniform, with her coat over her arm, and stood just inside the door for a moment taking in the room the way she took in everything, the brass and the dark wood and the menu board and the Pheromone Coffee's faint strange smell, as if she were assessing it for purchase." },
        { s: 'mitsuru', f: 'neutral', t: "So this is where you go on Mondays. Iori was very insistent that I see it. He said it would be *character building*. I'm not entirely sure for whom." },
        { s: 'mitsuru', f: 'neutral', t: "I'd like to try the house specialty. And I'd like to know the origin of the beans." },
        { n: "Ms. Kagami looked up from behind her screen. The two of them regarded each other across the café the way two cats regard each other across a fence, with enormous mutual respect and no intention whatsoever of blinking first." },
        { s: 'chKagami', t: "The beans are a secret, miss. So is everything else." },
        { s: 'mitsuru', f: 'neutral', t: "...I see. That's an admirable answer." },
        { n: "She drank it at the window, slowly, with total concentration, and at the end she sat for a moment with her eyes closed, and then rose and came to the counter and put down a ten-thousand-yen note, for a five-hundred-yen coffee, and turned to go." },
        { choose: [
          { t: "Senpai. We don't do tips here. Here's your change.", stat: { courage: 1 }, then: [
            { n: "Mitsuru stopped, and turned, and looked at the nine thousand five hundred yen in Solar's outstretched hand, and something in her composure tilted a fraction of a degree." },
            { s: 'mitsuru', f: 'surprised', t: "...Ah. Of course. I knew that. I was... testing the establishment's integrity." },
            { s: 'solar', f: 'neutral', t: "It passed." }
          ] },
          { t: "(Give Ms. Kagami the note, and let her handle it.)", stat: { knowledge: 1 }, then: [
            { n: "Ms. Kagami came out from behind the screen, took the note, put a five-hundred-yen charge through the register and nine thousand five hundred yen in change in an envelope, sealed it, wrote *Kirijo* on the front in very beautiful handwriting, and handed it to Mitsuru with a small bow, and Mitsuru took it with a small bow back, and Solar felt as if she had just watched a treaty being signed." }
          ] }
        ] },
        { s: 'mitsuru', f: 'neutral', t: "It's excellent coffee. I'd like to know what it's called, the note at the back. The smoke. ...No. Don't tell me. I suspect I'm better off not knowing." }
      ] },
      { id: 'ch-s-fuuka', after: '6/20', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The grinder died at a quarter to five, in the middle of the rush, with a grinding shriek and then a silence so complete everybody in the café turned to look, and Ms. Kagami said a word Solar had never heard her say and went into the back to call somebody who, she said, would come on Thursday, as if Thursday were a mythical place." },
        { n: "Fuuka was at the window table with her laptop open and a strawberry tart she hadn't touched, and she had looked up when the grinder screamed, and was now looking at it across the café with the soft, total, almost tender attention she usually saved for things with circuit boards in them." },
        { s: 'fuuka', f: 'neutral', t: "Um. Solar-chan. Sorry. That sound... I think it's the burr, it's not the motor. The motor would sound different. Lower. I could... if it's okay. I could look?" },
        { choose: [
          { t: "Ms. Kagami. My friend can fix it.", stat: { courage: 1 }, then: [
            { n: "Ms. Kagami looked at Fuuka, a soft-voiced girl with a tart, and then at Solar, for a long, measuring second, and then stood aside from the grinder with the air of a woman letting a stranger hold her baby." }
          ] },
          { t: "(Get her the toolbox from under the sink.)", stat: { proficiency: 1 }, then: [
            { n: "She brought the battered red toolbox from under the sink and set it on the counter, and Fuuka opened it and looked inside and made a small happy noise, the way other girls made over kittens, and had the top off the grinder before Ms. Kagami had finished coming out of the back." }
          ] }
        ] },
        { n: "It was a coffee bean. One bean, stuck sideways in the burr, wedged at an angle, the whole machine brought to its knees by a single bean. Fuuka got it out with a pair of tweezers from her own pencil case and held it up, triumphant, and the café, which had been watching, applauded." },
        { s: 'fuuka', f: 'happy', t: "It's just one. It's always just one small thing. ...Can I keep it?" },
        { s: 'chKagami', t: "You can have a tart every day for the rest of the month. And yes. Keep the bean." },
        { n: "Fuuka kept the bean. Solar saw it later, at the dorm, sitting in a little dish on her desk beside a screwdriver, and asked, and Fuuka said it reminded her that things that stopped working usually weren't broken, only stuck, which Solar thought about for longer than she'd have liked." }
      ] },
      { id: 'ch-s-ann', met: ['ann'], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Ann came in with a shopping bag on each arm and her sunglasses pushed up into her hair, and read the pastry case the way some people read a map to treasure, her nose very nearly on the glass." },
        { s: 'ann', f: 'happy', t: "Okay, I came all the way out here on the train for a photo shoot and the shoot got *canceled*, so I'm getting sugar. A lot of it. What's the sweetest thing you have? Like, the most irresponsible thing." },
        { s: 'ann', t: "Don't say the coffee. I heard about the coffee. Seriously, people get *weird*. I already get enough weird." },
        { choose: [
          { t: "(Build her something off the menu. Cream, caramel, the works.)", stat: { charm: 1 }, then: [
            { n: "She took a mille-feuille and put it on the good plate and a scoop of the vanilla cream beside it and a ribbon of caramel over both and a single candied chestnut on top like a crown, and slid it across the counter, and Ann stared at it with her mouth open." },
            { s: 'ann', f: 'happy', t: "...That's not on the menu. Is that on the menu? Oh, this is a *crime*. You're my favorite person on this whole island. I'm going to tell everyone." }
          ] },
          { t: "The crème caramel. Ms. Kagami makes it at six in the morning. It's perfect.", stat: { knowledge: 1 }, then: [
            { n: "Ann ate it in seven small bites with her eyes closed after each one, and when she finished she sat there with the spoon in her mouth like a kid, and then ordered another one, to go, for the train." },
            { s: 'ann', t: "You know your stuff. You should totally work in Shibuya. You'd be famous in a week. Don't, though. It's exhausting there." }
          ] }
        ] },
        { n: "She stayed an hour, chatting with Solar across the counter between customers about nothing at all, shoes and the train and a cat that hung around her school, and when she left she waved through the window with a crème caramel box held up beside her face, the fountain glittering behind her, and Solar realized she'd been smiling the entire hour without deciding to." }
      ] },
      { id: 'ch-s-autumn', months: [10, 11], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "In autumn Ms. Kagami made Mont Blancs, chestnut cream piped in fine spirals over meringue, and she made them herself, in the morning, alone, and on a slow Thursday in the light that came in low and gold across the mall, she called Solar into the back and handed her the piping bag without a word." },
        { s: 'chKagami', t: "Steady pressure. Don't think. If you think, your hand shakes. Go." },
        { n: "The first one came out like a pile of brown string. The second one looked, Yuu said from the doorway, like a very sad bird's nest. The third one was nearly right, and Ms. Kagami looked at it for a long time, and on the wall above the counter, the only decoration in the back room, was a print of a painting, a man and a woman floating over a crooked blue village, the goat and the moon and the rooftops, all of it slightly wrong and completely certain." },
        { s: 'chKagami', t: "I named it for that. The café. The painter. When I opened it, twenty-two years ago. My husband thought it was pretentious." },
        { s: 'chKagami', t: "He was right. He usually was. Don't tell him." },
        { choose: [
          { t: "Why that painting?", stat: { knowledge: 1 }, then: [
            { s: 'chKagami', t: "Because they're flying and they don't look surprised about it. I liked the idea of a place where people could feel like that. For the length of one coffee." },
            { n: "She said it without looking up from the piping bag, the way you'd say a recipe, and then made Solar do the fourth Mont Blanc again, and the fifth, until it was right." }
          ] },
          { t: "(Pipe the fourth one without thinking. Just do it.)", stat: { charm: 1 }, then: [
            { n: "She didn't think. She let her hand go, steady pressure, round and round, and the chestnut cream came out in a fine perfect spiral, tight and even, and she stood back from it, startled, and Ms. Kagami reached out and put it in the case herself, front and center, with the price card in front of it." },
            { s: 'chKagami', t: "...There. That's the one people will buy first. They always buy the first one somebody's proud of." }
          ] }
        ] },
        { n: "It sold at four-ten, to Mr. Okuda, who ate it at the window in small careful bites and then lifted his fork to her across the room, very slightly, like a man raising a glass." }
      ] },
      { id: 'ch-s-latte', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Yuu had decided she needed to learn latte art, on the grounds that it was the only thing he was better at than her, and on a slow Tuesday he stood beside her at the machine with the gravity of a sensei and a pitcher of milk, explaining the wrist." },
        { s: 'chYuu', t: "It's all wrist. Pour high, then low, then wiggle, then pull through. A rosetta. A leaf. The most beautiful thing in coffee. Watch me. Watch the wrist." },
        { n: "His came out like a fern, delicate and perfect. Hers came out like something else. It had too many arms. It was, unmistakably, a squid. Yuu looked at it for a long time with his mouth slightly open." },
        { s: 'chYuu', t: "...How. How did you do that. That's harder than a leaf. That's *harder*." },
        { choose: [
          { t: "(Serve it anyway. With confidence.)", stat: { charm: 1 }, then: [
            { n: "She took it to Mr. Okuda at the window, who had ordered a latte for the first time in living memory, and set it in front of him with a perfectly straight face, and he looked at it for a long moment and then looked up at her over his glasses." },
            { s: 'chOkuda', t: "A cuttlefish. How thoughtful. I'm from a fishing town, you know. I'll drink it in its honor." }
          ] },
          { t: "Again. Show me the wrist again.", stat: { knowledge: 1 }, then: [
            { n: "They did it nine more times, and nine more lattes went to the staff, to Ms. Kagami, to the boy in the corner with the workbooks, to a confused businessman who was given one free, and the ninth was a leaf, slightly crooked, unmistakably a leaf, and Yuu put his hand over his heart." },
            { s: 'chYuu', t: "My student. My student has surpassed... no. No, she hasn't. But it's a *leaf*." }
          ] }
        ] },
        { n: "The squid became a thing. Mr. Okuda asked for it by name after that, every so often, as a treat, and she always made it, and it always came out slightly different, and he always told her which fish it was, which was never a squid." }
      ] },
      { id: 'ch-s-lostboy', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The boy was maybe four and was standing in the middle of the café with his hands at his sides, not crying, in the way that is worse than crying, looking at each table in turn as if one of them might suddenly have his mother at it." },
        { n: "Ms. Kagami was already on the phone to the mall office before Solar got around the counter. Yuu had frozen with a cup in each hand. The boy saw Solar's apron and seemed to decide she was the most official thing in the room, and walked to her and took a firm grip of the edge of it." },
        { s: 'chLostboy', t: "My mama is lost." },
        { choose: [
          { t: "Okay. Let's wait for her where she can see us. In the window.", stat: { knowledge: 1 }, then: [
            { n: "She sat him up on the window counter where the whole concourse could see him, a small round boy in a striped shirt against the glass, and stood beside him so nobody could take him off it, and four minutes later a woman came running across the mall from the bookshop, white as paper, and saw him in the window like a display, and put both hands over her mouth." }
          ] },
          { t: "(Kneel down. Give him a cookie. Ask him about his shoes.)", stat: { charm: 1 }, then: [
            { n: "His shoes lit up when he stamped. He showed her. He showed her again. He showed Yuu, and Ms. Kagami, and the boy in the corner, and Mr. Okuda, who put down his pen and watched with enormous seriousness and said they were very fine shoes, and when his mother arrived running he was on the floor stamping for the whole café and barely looked up." }
          ] }
        ] },
        { n: "The mother cried, the way mothers do once the danger has passed and it's safe to, and bowed to everyone, and the boy waved to the café from the door, still holding her hand, and then turned back at the last second and waved to Solar, specifically, by herself." },
        { s: 'chKagami', t: "...Well. You have a face children trust. That's either a gift or a warning. Clean the window, there are handprints." }
      ] },
      { id: 'ch-s-december', months: [12], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "In December the mall strung white lights in long lines from the roof beams and put a tree beside the fountain, and Chagall did a Christmas blend with cinnamon and orange peel that made the whole café smell like a warm coat, and every table filled with couples, sitting close, sharing cake off one plate." },
        { n: "There was a girl at the window table who wasn't sharing anything. She'd come in at three-thirty in a good coat, with her hair carefully done, and ordered one coffee and said she was waiting for someone, and now it was five-fifteen, and the coffee was cold, and she was still looking at the door every time it opened, and it kept opening, and it kept not being him." },
        { s: 'chYuu', t: "...Should we do something? I can't look at it. I keep looking at it. It's like a sad movie but it's in my café." },
        { choose: [
          { t: "(Bring her a fresh cup. Sit with her for one minute.)", stat: { charm: 1 }, then: [
            { n: "She brought a fresh cup of the Christmas blend and sat down across from the girl, uninvited, just for a minute, and asked about her coat, which was new, and the girl said she'd bought it for today, and then laughed, and then didn't, and Solar stayed for the length of that, and then got up, and the girl was looking at the fountain instead of at the door." },
            { s: 'chWaiting', t: "...It's a really nice coat, isn't it. It'd be a waste to go home." }
          ] },
          { t: "(Leave her be. Bring a slice of cake with no explanation.)", stat: { knowledge: 1 }, then: [
            { n: "She put a slice of the chocolate cake by the girl's elbow and walked away before the girl could say anything, and didn't look back, and the girl ate it slowly, very slowly, looking out the window at the lights, and when she stood up to go she had stopped looking at the door entirely." }
          ] }
        ] },
        { n: "When the girl left she paid for everything, including the cake, and wouldn't hear otherwise, and at the door she stopped, and put her shoulders back in the new coat, and walked out into the bright mall with her chin up like she had somewhere better to be, which, Solar thought, she probably did, and just hadn't been told yet." },
        { s: 'chKagami', t: "Every December. There's always one. You did fine." }
      ] },
      { id: 'ch-s-results', months: [1], after: '1/18', flags: ['ch-hinata-sendoff'], scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The newspaper on Monday had printed the answers to the Center Test across four full pages, the way it did every January, and by Tuesday half the city's nineteen-year-olds had marked their own papers and knew roughly where they stood, and Hinata had not come into Chagall since before the New Year." },
        { n: "Mr. Okuda had saved the pages. They sat folded on the corner of his table, under his elbow, unread, and he did the crossword with more crossings-out than she had ever seen him make, in fountain pen, the ink going through the paper." },
        { n: "At ten past four the bell over the door went, and it was Hinata, in his coat, without a single workbook, his hands empty for the first time since she'd known him, and he stood in the doorway a moment, breathing hard, like he'd run from the station." },
        { s: 'chHinata', t: "I marked it. Twice. Three times. I'm over the line. For the first stage. I'm *over*. By eleven points. Eleven." },
        { s: 'chHinata', t: "There's still the second stage. In February. I could still—but I'm *over*. Last year I was forty under." },
        { choose: [
          { t: "(Come around the counter. Shake his hand, properly, like a grown-up.)", stat: { charm: 1 }, then: [
            { n: "She shook his hand across the café like they'd closed a business deal, very formal, and he shook back too hard, laughing, and then Mr. Okuda was standing up from the window table, slowly, the newspaper sliding off onto the floor, and came over, and shook his hand too, and didn't let go of it for a while." }
          ] },
          { t: "Mr. Okuda. Did you hear him?", stat: { knowledge: 1 }, then: [
            { n: "He'd heard. He was already standing. He came across the café with the crossword still in his hand and stopped in front of Hinata and looked at him a long time, and then reached up and put a hand on the boy's shoulder, very lightly, the way you'd touch a framed picture to make sure it was level." },
            { s: 'chOkuda', t: "...Good. Good. Now don't get lazy. February is worse." }
          ] }
        ] },
        { s: 'chKagami', t: "Sit down. The usual. On the house." },
        { s: 'chHinata', t: "...Actually. Can I have the Pheromone Coffee? I've never tried it. I think I've decided some things." },
        { n: "Ms. Kagami made it behind her screen without a word, and set it in front of him, and stood there with her arms folded, very nearly smiling, and Solar went back to the machine and steamed milk for nobody for a minute, because there was something in her throat she didn't feel like explaining to the café." }
      ] }
    ],
    beats: [
      { id: 'ch-arc-1', at: 2, after: '4/28', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "At closing the boy in the corner was asleep, face down on a workbook of English grammar, the highlighter still in his hand and the cap off, a thin yellow line wandering off the edge of the page and onto the table where he'd gone under mid-sentence." },
        { s: 'chKagami', t: "Wake him gently. He's been here since ten. He'll be mortified. Make it so he isn't." },
        { choose: [
          { t: "(Set down a fresh cup beside him, loudly enough to wake him.)", stat: { charm: 1 }, then: [
            { n: "The saucer clicked. He jerked up, a pink grammar-shaped crease across his cheek, and looked at the cup, and at her, and then at the yellow line on the table, and went the deep slow red of a person discovering they had been asleep in public." },
            { s: 'solar', f: 'neutral', t: "Last call. You can finish that one. The line will come off with a damp cloth." }
          ] },
          { t: "(Read the page he fell asleep on. Wake him with the next answer.)", stat: { knowledge: 1 }, then: [
            { n: "It was a fill-in-the-blank, subjunctive mood, *if I were you*, the answer obvious once you saw it, and she said it quietly over his shoulder, *were*, and he sat up and said *were* back at her before he was properly awake, and then stared at her, and then at the yellow line on the table." },
            { s: 'chHinata', t: "...That's the right answer. Oh, no. I was asleep. How long was I asleep." }
          ] }
        ] },
        { n: "His name was Hinata. He told her while he packed the fortress back into his bag, workbook by workbook, nine in all, in an order, like bricks. He'd graduated last year. Everyone in his class was at university now, or working, or somewhere. He'd failed the exam, the one that mattered, by forty points." },
        { s: 'chHinata', t: "So I'm a ronin. That's the word. Like the samurai with no master. It sounds cooler than it is. It means you sit in a café all day with one coffee and everybody you went to school with is having a life." },
        { s: 'chHinata', t: "I can't study at home. My mom keeps bringing me tea and looking at me. Here nobody looks at me." },
        { n: "Behind them Ms. Kagami turned off the espresso machine, and the long hiss of it went quiet, and the café went quiet with it, and Solar thought about saying something useful and didn't have anything, so she said what was true." },
        { s: 'solar', f: 'serious', t: "Ms. Kagami's been refilling your cup for free since April. She looks at you. She just doesn't let you see." },
        { n: "Hinata turned around and looked at Ms. Kagami, who was very busy with a cloth and the steam wand and did not look back, and he stood there holding his bag against his chest, nineteen and tired and crumpled, and bowed to her back, deeply, and she didn't turn around, and he left." },
        { s: 'chKagami', t: "...Don't tell people things about me." }
      ] },
      { id: 'ch-arc-2', at: 5, after: '7/1', prev: 'ch-arc-1', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "The summer mock exam results came out in July, and Hinata came in with his and didn't open a single workbook, only sat in his corner with the envelope on the table in front of him, unopened, and then opened, and then folded back up into a small hard square, staring out the window at the children in the fountain." },
        { s: 'chYuu', t: "It's an E. I saw it when he went to the bathroom. I wasn't looking. It was just there. E means don't bother. E is the bottom." },
        { n: "Mr. Okuda, at the window, had been watching the corner too, over his crossword, in the patient, sideways way of someone who had watched a great many young people sit in a great many corners. He had never spoken to Hinata. Nobody spoke to Hinata. That was the arrangement." },
        { choose: [
          { t: "(Take Mr. Okuda his coffee. Mention the boy is good at four-character idioms.)", stat: { charm: 1 }, then: [
            { n: "She said it lightly, setting the cup down, as if it were nothing, and Mr. Okuda looked at her over his glasses with the expression of a man who could see exactly what she was doing and had decided to allow it." }
          ] },
          { t: "(Take Hinata a coffee. Tell him an E in July is just a letter.)", stat: { courage: 1 }, then: [
            { n: "He looked up at her, red-eyed and furious, the way people are furious at the person who notices, and said it was easy for her to say, and she agreed that it was, and set the cup down and stayed put, and he looked away first." }
          ] }
        ] },
        { n: "Ten minutes later Mr. Okuda got up from the window, crossword in hand, and walked across the café, slowly, and stood at the edge of Hinata's table, and cleared his throat." },
        { s: 'chOkuda', t: "Young man. Twenty-three across. Classical. *The old word for the sound of autumn wind in the pines.* I've forgotten it. I'm seventy-four. You'll have to forgive me." },
        { s: 'chHinata', t: "...Shōrai. It's... it's in the Kokinshū. We had to... it was on a practice paper." },
        { s: 'chOkuda', t: "So it was. And you got it wrong on the practice paper, I expect, and right just now, without thinking. That's how it goes in. Wrong first. Then without thinking." },
        { n: "He sat down across from Hinata without being asked, which nobody had done all year, and spread the crossword between them, and asked him another, and then another, all classical, all hard, and Hinata answered them, slower and then faster, and somewhere around the fifth the folded envelope went into his bag, and Solar watched from the counter with a cloth in her hand that had stopped moving some time ago." },
        { s: 'chKagami', t: "...Thirty-eight years. He taught classical Japanese at the high school across the river. He never says. Nobody ever asks him." },
        { s: 'chKagami', t: "Don't stand there. Bring them two more coffees. On the house." }
      ] },
      { id: 'ch-arc-3', at: 9, after: '10/1', prev: 'ch-arc-2', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "By autumn the corner table had become their table, Hinata on one side with his fortress, Mr. Okuda on the other with the crossword, which these days he composed himself in the evenings, at home, by hand, out of old exam questions, and brought in folded in his breast pocket like a love letter." },
        { n: "The autumn mock results came in October. Hinata opened his at the counter, in front of her, on purpose, and turned it around so she could see. C. Two whole letters up from July." },
        { s: 'chHinata', t: "C means maybe. Maybe! I've never been a maybe in my *life*." },
        { n: "Mr. Okuda was not at the window. Mr. Okuda, Ms. Kagami said, had not been in since Thursday, which had never happened, not in nine years, and Hinata's face went through the C and out the other side into something younger and more worried." },
        { s: 'chHinata', t: "Is he okay? Does anybody know where he lives? Should somebody... I don't even know his first name." },
        { n: "At four-thirty the bell went, and it was Mr. Okuda, in a scarf, with a cold, red-nosed and furious about it, carrying a tissue box under one arm and a folded crossword in the other hand, which he set down on the corner table with great ceremony." },
        { s: 'chOkuda', t: "A cold. At my age. Indignity. I've done you a hard one. Out of the 1987 national paper. You'll hate it." },
        { choose: [
          { t: "Show him the C, Hinata. Go on.", stat: { courage: 1 }, then: [
            { n: "Hinata held the paper out with both hands, the way you'd present a diploma, and Mr. Okuda took it and read it and handed it back and blew his nose, at length, and said it was the cold, the cold made his eyes run, a terrible cold, the worst he'd had in years." }
          ] },
          { t: "(Bring Mr. Okuda honey and ginger, and slip the C under his saucer.)", stat: { charm: 1 }, then: [
            { n: "He lifted the cup and found the paper under it and read it with the cup halfway to his mouth and put the cup back down without drinking, and looked across at Hinata, and Hinata looked at the floor, and neither of them said anything at all for a while, which was, Solar thought, the right amount." }
          ] }
        ] },
        { s: 'chOkuda', t: "My wife did the crossword every morning. Forty years. In pen. She never let me help. She said I was a teacher and I'd ruin it." },
        { s: 'chOkuda', t: "After, I couldn't do it at home. The house was too quiet for it. So I came here. That's all. Don't make a face. Do the crossword." },
        { n: "Hinata did the crossword. It was the hardest one yet, and he got it all but two, and Mr. Okuda wrote the last two in himself, in fountain pen, and dated the corner of the page, and folded it up and gave it to him to keep, and Ms. Kagami turned the radio up a notch behind the counter, which she never did, so that none of them had to hear what anyone's voice was doing." }
      ] },
      { id: 'ch-arc-4', at: 11, after: '12/1', until: '1/14', prev: 'ch-arc-3', scene: [
        { place: 'Paulownia Mall · Chagall Café', time: 'After School' },
        { n: "Hinata's last day at the corner table before the exam was a gray afternoon, the mall lights coming on early, the fountain switched off for the winter. After this, he said, he'd study at home, every hour, until the Center Test, because his mother had promised to stop bringing tea and looking at him, and he'd promised to let her bring the tea." },
        { n: "Nobody had planned anything. Nobody at Chagall planned things. It just happened that everyone was there." },
        { n: "Mr. Okuda gave him a fountain pen, old, black, with a worn gold nib, in a box with a crack in the lid, and said only that it had marked thirty-eight years of exams and that it might as well sit one, for once, and that if Hinata lost it he would personally haunt him." },
        { n: "Yuu gave him a can of hot corn soup from the machine outside, because, he said, it was the only thing he could afford and corn was lucky somewhere, probably." },
        { choose: [
          { t: "(Give him a KitKat. Kitto katsu. You'll surely win.)", stat: { charm: 1 }, then: [
            { n: "She'd written on the back of the wrapper in marker, the way everybody did for exam season, *kitto katsu*, and under that, smaller, *we'll be here*, and he read it, and read it again, and put it in his breast pocket without opening it, next to the pen." },
            { s: 'chHinata', t: "I'm not going to eat it. I'm going to keep it. That's allowed, right? To not eat the lucky chocolate." }
          ] },
          { t: "(Give him the folded crossword from the window table, the one from October, dated.)", stat: { knowledge: 1 }, then: [
            { n: "He'd left it behind in November by accident and she'd kept it behind the register in a clear folder, the hardest one, all filled in, two answers in Mr. Okuda's hand, and dated, and he took it from her and unfolded it and looked at it a long time." },
            { s: 'chHinata', t: "...I forgot I'd left this. I thought I'd lost it. I looked everywhere." }
          ] }
        ] },
        { s: 'chKagami', t: "And one more thing. What do you want? Not the usual. What do you want." },
        { n: "Hinata looked at the menu board for a long time, the way he hadn't since April, since the day he came in with nine workbooks and ordered the cheapest thing on it, and then looked at Ms. Kagami, behind her screen, and then at Solar." },
        { s: 'chHinata', t: "...The Pheromone Coffee. I've never had it. I always thought it was for people who'd already won something." },
        { s: 'chKagami', t: "It's for people who've already decided. Sit down." },
        { n: "She made it behind her screen, and he drank it at the corner table with Mr. Okuda across from him and Yuu hovering and Solar at the counter pretending to wipe a cup she'd already wiped, the strange sweet smoky smell of it filling the corner, and when he left at closing he stood at the door and bowed to the whole café, all of them, the bow you give a school on graduation day." },
        { s: 'chHinata', t: "I'll come back. Either way. I'll come back and tell you, either way." },
        { s: 'chOkuda', t: "You'd better. You have my pen." },
        { flag: 'ch-hinata-sendoff' }
      ] }
    ],
    quiet: [
      { id: 'ch-q-okuda-pen', scene: [
        { n: "Mr. Okuda finished the crossword at four-fifteen, capped his pen, and laid the newspaper face down on the table, which he did only on days he'd solved it without help. He looked very pleased about it, in a way that involved no change to his face at all." },
        { s: 'chOkuda', t: "Another black, please. The celebratory one. It's the same as the other one, but I know." }
      ] },
      { id: 'ch-q-screen', scene: [
        { n: "Ms. Kagami made a Pheromone Coffee behind her screen, and Solar heard a grinder, a spoon, a pause, and a sound she couldn't place, like a match being struck very far away. Then Ms. Kagami came out with the cup and caught her listening." },
        { s: 'chKagami', t: "No." }
      ] },
      { id: 'ch-q-yuu-theory', scene: [
        { s: 'chYuu', t: "New theory. It's not the coffee. It's the cup. She's got special cups. Have you ever seen her wash them? Have you? Think about it." },
        { n: "She had seen Ms. Kagami wash the cups. They were the same cups. She let him have it anyway." }
      ] },
      { id: 'ch-q-hinata-nod', scene: [
        { n: "Hinata looked up from his workbook when she brought his refill, and nodded, and said thank you without taking the highlighter out of his mouth, which came out as one long vowel." },
        { choose: [
          { t: "(Nod back, and leave him to it.)", stat: { knowledge: 1 }, then: [
            { n: "He was back underlining before she'd set down the pot. That was the kindest thing she could do for him, and they both knew it." }
          ] },
          { t: "You've got highlighter on your chin.", stat: { charm: 1 }, then: [
            { n: "He rubbed it, made it worse, and laughed for the first time all afternoon." }
          ] }
        ] }
      ] },
      { id: 'ch-q-regular-order', scene: [
        { n: "A woman she'd served twice before came in, and Solar had the oat milk latte half made by the time she reached the counter, and the woman stopped, and blinked, and went a little pink with pleasure." },
        { n: "Ms. Kagami, behind the screen, said nothing, which meant everything." }
      ] },
      { id: 'ch-q-fountain', scene: [
        { n: "Through the long window the fountain went up and came down, went up and came down, and a little girl dropped a coin in and squeezed her eyes shut, and Solar watched her make the wish and wondered what it was, and hoped, without knowing why it mattered, that it came true." },
        { s: 'chYuu', t: "She wished for a pony. They always wish for a pony. I wished for a pony until I was twenty." }
      ] },
      { id: 'ch-q-okuda-clue', scene: [
        { s: 'chOkuda', t: "Two characters. *What the morning forgets.*" },
        { n: "She thought about it while she steamed the milk for his latte, and couldn't get it, and he didn't tell her, and it sat with her all the way home." }
      ] },
      { id: 'ch-q-saucers', scene: [
        { n: "She washed forty saucers in a row and stacked them in the rack by size, and Ms. Kagami came past and moved one, a single saucer, two centimeters to the left, and walked on. Solar looked at it a long time. It was better there." },
        { s: 'chKagami', t: "The light. From the window. Now it doesn't catch the rim." }
      ] },
      { id: 'ch-q-yuu-exam', scene: [
        { s: 'chYuu', t: "I have a test tomorrow. In something. I'm not sure what. It's my major. I'll find out tomorrow." },
        { n: "He said it with total serenity, foaming milk, and she decided that whatever Yuu's major was, it was something you could not fail, possibly by design." }
      ] },
      { id: 'ch-q-tip-jar', scene: [
        { n: "Someone had left a hundred-yen coin under their saucer. There was no tip jar at Chagall; Ms. Kagami thought tip jars were vulgar. Solar put it in the little ceramic pot by the register that said *for the fountain* in Ms. Kagami's handwriting, which every month went into the fountain all at once, one big wish, on behalf of the café." },
        { s: 'chKagami', t: "Last month it wished for a new grinder. It worked. Keep feeding it." }
      ] },
      { id: 'ch-q-window-seat', scene: [
        { n: "For a few minutes between customers there was nothing to do, and she stood behind the counter in the smell of coffee and the low murmur of the mall, and felt, for once, like exactly the person she was supposed to be, and didn't question it, and then the bell went." },
        { s: 'chKagami', t: "Table four. The usual. Don't stand there looking peaceful, it unsettles the customers." }
      ] },
      { id: 'ch-q-pastry', scene: [
        { n: "The last almond croissant in the case went to a little boy who had been staring at it through the glass for five minutes while his father decided between two kinds of coffee bean. She put it in a paper bag and handed it to him over the counter without ringing it up, and Ms. Kagami saw, and rang it up, and paid for it from her own purse, and said nothing at all." },
        { s: 'chKagami', t: "We don't give things away here. We buy them for people. There's a difference. Wipe the case." }
      ] }
    ],
    openers: {
      4: "In April the light came down through the mall's glass roof clean and pale, and the fountain had been scrubbed for spring, and Chagall smelled of fresh beans and the faint sweet sakura syrup Ms. Kagami kept on the shelf under protest.",
      5: "May brought the first iced coffees and the windows propped open onto the concourse, so that the café filled with the sound of the fountain and the shop music from the boutique across the way, and the cream for the strawberry tarts went fast.",
      6: "In June the mall smelled of wet umbrellas and the floor by Chagall's door wore a permanent shine, and the hot drinks came back for a month, people coming in damp and wanting something to hold.",
      7: "July was iced everything, the ice machine grinding away in the back, the glass sweating rings onto every table, and the mall the coolest place on the island, which everybody in the island seemed to know.",
      8: "In August the café was full by eleven with people escaping the heat, and the fountain was full of children, and Ms. Kagami made a coffee jelly with condensed milk that she refused to call a summer special and that sold out every day.",
      9: "September was still hot outside, but in the café the first of the dark roasts came back, and the mall's shop windows changed over to wool and brown, and the light through the roof came in lower and more golden each afternoon.",
      10: "In October Chagall smelled of chestnuts and roasted sweet potato from the Mont Blancs, and the afternoon sun lay across the tables in long gold bars, and the regulars started keeping their coats on their chairs.",
      11: "November turned the mall's light gray and early, the café windows fogging at the corners, and hot chocolate came back to the menu and the brass rail along the counter was cold to the touch for the first hour every afternoon.",
      12: "In December white lights hung from the mall's roof beams in long lines and the Christmas blend filled the café with cinnamon and orange peel, and every second table was a couple sharing a single slice of cake.",
      1: "January at Chagall was quiet and pale, the fountain switched off and the mall half-empty after the New Year sales, and the coffee tasted better for it somehow, slower, the steam standing straight up over every cup."
    }
  },

  /* ── Hagakure (Iwatodai Strip, the ramen kitchen) ── */
  hagakure: {
    cast: { hgMaster: 'The Master', hgDaisuke: 'Daisuke', hgGotou: 'Mr. Gotou', hgTanabe: 'Mrs. Tanabe', hgCritic: 'Man with a Notebook',
      hgCaptain: 'Team Captain', hgAngry: 'Angry Customer', hgColdman: 'Customer in a Polo Shirt' },
    shifts: [
      { id: 'hg-s-first', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "Hagakure's kitchen was a long narrow galley behind the counter, so hot and so loud with steam and the roll of the boiling pots that the first thing it did was take the breath out of her, and the second thing it did was smell like pork bone broth simmered since four in the morning, deep and milky and rich enough to stand a spoon in, a smell that got into her hair and her clothes and, she would find out later, her dreams." },
        { n: "The master was a short square man in his sixties with forearms like hams and a white towel knotted around his head, and he looked at her once across the steam, the way you'd look at a delivery you hadn't ordered, and then looked at her hands." },
        { s: 'hgMaster', t: "Hm." },
        { s: 'hgDaisuke', t: "That means welcome! That's how he says welcome. I'm Daisuke. Apprentice. Six years. He's said about forty words to me. You get used to it. You don't, but you get used to not getting used to it." },
        { n: "Daisuke was in his twenties, tall and loud and burned in small places all up both arms, and he showed her everything in a rush: the ticket machine by the door that customers fed and the tickets that came through to the kitchen, the bowls warming in hot water, the green onions, the soft-boiled eggs marinating in their dark tare, and the noodle baskets, the long-handled strainers the master swung up out of the boiling water and snapped down hard, twice, so the water flew off in a single clean sheet." },
        { s: 'hgMaster', t: "Bowls. Ten. Now." },
        { choose: [
          { t: "(Move. Ask nothing. Get the ten bowls lined up and hot.)", stat: { proficiency: 1 }, then: [
            { n: "She had them out of the warming water and lined up on the pass in under a minute, ten white bowls in a straight row, steaming, and the master looked at the row, and then at her, and then poured the broth into all ten in a single continuous motion, like a man writing his name." },
            { s: 'hgMaster', t: "Hm." },
            { s: 'hgDaisuke', t: "That one was a good hm! That was a really good hm!" }
          ] },
          { t: "Which bowls? The big ones or the regular?", stat: { courage: 1 }, then: [
            { n: "The master looked at her for a long, flat moment, and the whole kitchen seemed to hold still, and Daisuke made a small noise like a kettle, and then the master pointed with his chin, once, at the regular stack." },
            { s: 'hgMaster', t: "...Good. Ask. Don't guess. Guessing is how you get the Mega Bowl out to a man who ordered a small." }
          ] }
        ] },
        { n: "The rush came at seven like weather, the door opening and closing on the Strip's cold air and the ticket machine chiming nonstop, and she lifted bowls and wiped the counter and carried trays and got shouted at twice and burned once, a small pink line across the back of her wrist from the edge of a pot." },
        { n: "At ten, when the last customer had gone and the noren curtain came down off the door, the master put a small bowl on the counter in front of her without a word, one ladle of broth, a few noodles, half an egg, and she ate it standing up in the sudden quiet with her whole body aching, and it was the best thing she had ever eaten in her life." }
      ] },
      { id: 'hg-s-rainyday', weather: ['rain'], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "When it rained the master changed. She saw it happen. He came in from the back with the rain hammering the roof, and looked out at the Strip shining wet under the streetlights, and something in his square shoulders settled, the way a cat settles in front of a heater, and he went to the back shelf and took down a pot she'd never seen him use." },
        { s: 'hgDaisuke', t: "Rainy-day special. He only makes it when it rains. Nobody knows what's in it. Six years and I don't know. Sometimes I think I know and then it's different." },
        { n: "By seven the line went out the door and down the street, people standing under umbrellas in the rain for forty minutes because word had gone out across Iwatodai in the way word does, a text, a phone call, *it's raining, Hagakure's doing the special*, and the master moved through the kitchen in a kind of trance, silent, reaching for things without looking." },
        { n: "At eight he set a small tasting bowl in front of her, on the pass, without a word, and waited." },
        { choose: [
          { t: "(Taste it, close your eyes, and try to name everything in it.)", stat: { proficiency: 1 }, then: [
            { n: "Pork, and something from the sea under it, kelp or dried fish, and ginger, and a dark sweetness like burnt sugar, and something else she couldn't place, round and deep, like the smell of a wood floor. She named what she could, out loud, and the master listened with his arms crossed, and at the end, very slightly, the corner of his mouth went up." },
            { s: 'hgMaster', t: "Three of five. Not bad. Never tell Daisuke." }
          ] },
          { t: "Why only when it rains?", stat: { courage: 1 }, then: [
            { n: "He didn't answer for so long she thought he wasn't going to, swinging a noodle basket up out of the pot, snap, snap, and then he set it down." },
            { s: 'hgMaster', t: "People come in wet and cold, they need something. On a nice day, they don't need anything. They just want ramen. On a rainy day, they need it." },
            { n: "It was the longest thing she had ever heard him say. Behind her Daisuke dropped a ladle." }
          ] }
        ] },
        { n: "They sold out at nine-twenty. The people left in the line were told in the rain, and nobody was angry, only resigned, the way you're resigned to weather, and the master went out himself with an umbrella and gave the last six in line a free egg each, wrapped in paper, still warm, and came back in soaked and said nothing about it, ever." }
      ] },
      { id: 'hg-s-junpei', flags: ['joined-junpei'], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "The door slid open at half past seven and Junpei came in on a gust of cold air with his cap on backward and his hands in his pockets, already talking, and saw her through the pass in a white kitchen bandana with a tray of bowls, and stopped." },
        { s: 'junpei', f: 'surprised', t: "No WAY. You work at *Hagakure*? Dude. DUDE. This is the best day of my life. This changes everything. You know what this means, right?" },
        { s: 'junpei', f: 'happy', t: "Staff discount. Friends and family. I'm family. I'm basically your brother. Ask the old man. Go on. Tell him I'm family." },
        { n: "The master, at the pots, did not turn around. He did not need to turn around. A silence came off his back like heat off a stove, and Junpei felt it, visibly, all the way across the counter, and took his hands out of his pockets." },
        { choose: [
          { t: "(Turn around and actually ask the master.)", stat: { courage: 1 }, then: [
            { n: "She asked. The master turned his head slowly, looked at Junpei over her shoulder for a long moment, from his cap down to his sneakers and back up again, and then went back to the pots." },
            { s: 'hgMaster', t: "Egg. One. Free. That's family." },
            { s: 'junpei', f: 'happy', t: "...An egg. He gave me an egg. Okay! I'll take it! That's the start of something! That's a relationship!" }
          ] },
          { t: "Junpei. Buy your ticket at the machine like a person.", stat: { charm: 1 }, then: [
            { n: "He bought his ticket at the machine like a person, muttering, and sat down at the counter, and when his bowl came, she'd put an extra slice of pork in it, under the noodles, where nobody would see, and he found it halfway through and looked up at her and opened his mouth, and she shook her head very slightly, and he shut it again, beaming." }
          ] }
        ] },
        { s: 'junpei', f: 'neutral', t: "...Hey, so. The Mega Bowl. On the wall. With the pictures. How hard is it really. Like, scale of one to ten. Asking for a friend. The friend is me." },
        { s: 'hgDaisuke', t: "Eleven." },
        { n: "Junpei looked at the photo wall for the rest of his meal the way he looked at the prize lottery and the sword girl, with a kind of longing that was half joke and half not, and she decided not to encourage him, and then caught herself, at the door, telling him it was thirty minutes, and you had to drink the broth too." }
      ] },
      { id: 'hg-s-akihiko', after: '5/12', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "Akihiko came in after boxing practice with his hair still damp and his gym bag over one shoulder, and didn't use the ticket machine, because he didn't have to: he was, Daisuke explained in a reverent whisper, a regular, a *real* regular, the kind the master had a standing order for, which meant the master was already pulling noodles from the basket before Akihiko had sat down." },
        { n: "He saw her at the pass and his eyebrows went up, and then he nodded, approvingly, as if she'd joined a gym." },
        { s: 'akihiko', f: 'neutral', t: "Huh. You work here? Good. It's hard work. Heat, standing, lifting. It's basically training. You'll get good forearms." },
        { s: 'akihiko', f: 'neutral', t: "Master. The usual. Extra pork. Extra egg. Two extra eggs. Protein." },
        { s: 'hgMaster', t: "...Hm." },
        { n: "The bowl that came out was a monument. Pork stacked like roof tiles over the noodles, three eggs halved and gleaming, the broth barely visible underneath, and Akihiko looked at it the way other people looked at sunsets, and broke his chopsticks apart with a little snap of anticipation." },
        { choose: [
          { t: "You should eat some vegetables, senpai. Just once.", stat: { courage: 1 }, then: [
            { n: "Akihiko paused, chopsticks halfway to the pork, and looked at her with the honest puzzlement of a man who had genuinely never considered it." },
            { s: 'akihiko', f: 'neutral', t: "...There's green onion on it." },
            { n: "The master, without turning around, added a handful of bean sprouts on top, and Akihiko looked at them, and looked at the master's back, and ate them, slowly, with tremendous dignity, like a man taking his medicine, and she had to go into the back for a minute to laugh." }
          ] },
          { t: "(Ask how practice went, and actually listen.)", stat: { charm: 1 }, then: [
            { n: "He told her, between bites, about a new combination he was working on, left-left-right, and moved his hand in the air a little to show her, chopsticks and all, and his whole face changed when he talked about it, got younger and clearer, the way faces do when someone's talking about the one thing they're sure of." },
            { s: 'akihiko', f: 'happy', t: "...Sorry. I'm talking a lot. It's good ramen. It makes me talk. Don't tell Mitsuru." }
          ] }
        ] },
        { n: "He finished every drop, including the broth, and set the bowl down with both hands, and said thank you for the meal to the master's back, properly, the way he'd probably been raised to, and the master lifted one hand off the noodle basket, about an inch, which Daisuke said later was the warmest gesture he'd seen the man make in six years." }
      ] },
      { id: 'hg-s-critic', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "The man came in alone at seven-fifteen, in a black turtleneck, with a leather notebook and a pen and a camera on a strap, and ordered the regular bowl and then photographed it from four angles before he touched it, and Daisuke, at the sink, went white." },
        { s: 'hgDaisuke', t: "That's him. That's the blog guy. *Ramen Wanderer*. He did a review of the place on the other side of the station and they closed in a month. A *month*." },
        { n: "The man tasted the broth, once, with the spoon, and wrote something. Tasted it again. Wrote something longer. Lifted the noodles to the light and looked at them like a jeweler looks at a stone. The master, at the pots, had not looked at him once, and did not look at him now, and the back of his neck had gone a dull brick red." },
        { s: 'hgCritic', t: "Excuse me. Miss. Is the tare shoyu-based or a blend? And how long is the broth reduced? I'm trying to identify the... there's a note. A smoky note. At the back." },
        { choose: [
          { t: "Those are the master's secrets. You'll have to come back a lot.", stat: { charm: 1 }, then: [
            { n: "The man looked up from his notebook, surprised, and then smiled, and then laughed, a real one, and wrote that down too, she could see, in quotation marks." },
            { s: 'hgCritic', t: "...That's the correct answer. You'd be amazed how many places just tell me." }
          ] },
          { t: "(Turn around. Ask the master yourself, so he hears the question.)", stat: { courage: 1 }, then: [
            { n: "The master put down his noodle basket, turned, and looked at the man in the turtleneck across the counter for a long, steady, silent moment, the steam rising between them, and then picked his basket back up and turned away again without a word." },
            { s: 'hgCritic', t: "...Yes. Right. Understood. I'll put that in." }
          ] }
        ] },
        { n: "He finished the bowl. Every noodle, every drop of the broth. He paid, bowed, and left. The review went up on Monday, and Daisuke printed it at the internet café and brought it in folded in quarters and read it out loud in the kitchen before service, his voice getting higher and higher." },
        { s: 'hgDaisuke', t: "*The broth is the work of a man who has been angry at the same pot for forty years and won.* ...That's good, right? Master? That's good? Is that good?" },
        { s: 'hgMaster', t: "...Hm." },
        { n: "The master took the printout from him without a word and put it in the drawer under the register, where, Solar would find out much later, there was a folder with every review the shop had ever had, going back to 1971, in order." }
      ] },
      { id: 'hg-s-tanabe', days: [0], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "Mrs. Tanabe came in at seven every Sunday, eighty-something, very small, in a fur-collared coat that had been fashionable at some point in the previous century, and sat on the same stool at the end of the counter, and ordered a small bowl, and complained about it." },
        { s: 'hgTanabe', t: "It's not as good as 1987. In 1987 this was the best bowl in the prefecture. I don't know what happened. Something happened." },
        { s: 'hgDaisuke', t: "She says that every week. Every week. She's been saying it since before I started." },
        { n: "The master, at the pots, said nothing, as always, and set the bowl in front of her himself, which he did for nobody else, and stood there a second, and went back. Mrs. Tanabe ate it slowly, all of it, very small sips of the broth, and Solar noticed she ate every single noodle." },
        { choose: [
          { t: "What was different in 1987, Mrs. Tanabe?", stat: { courage: 1 }, then: [
            { n: "Mrs. Tanabe set her spoon down and looked at her, and something went soft around her eyes, and far away." },
            { s: 'hgTanabe', t: "My husband was alive. He'd bring me here on Sundays. He ate the big bowl. Every week. The big one. And he'd steal my egg." },
            { s: 'hgTanabe', t: "...It's very good ramen, dear. Don't tell him I said so." }
          ] },
          { t: "(Put a second egg in her bowl. Say nothing.)", stat: { proficiency: 1 }, then: [
            { n: "She did it quickly on the pass, while the master's back was turned, a second soft egg, sliced, on the edge of the bowl, and Mrs. Tanabe saw it and stopped, and looked at it, and her hand on the spoon trembled very slightly, and she didn't say anything for a long time." },
            { s: 'hgTanabe', t: "...Two eggs. Now that's more like 1987." }
          ] }
        ] },
        { n: "At the end of the night, closing out, the master said one of his forty words to her, wiping down the end stool where Mrs. Tanabe sat." },
        { s: 'hgMaster', t: "Her husband taught me to make the egg. Forty years ago. She doesn't know. Don't tell her." },
        { n: "Solar didn't tell her. She thought about it the whole way back to the dorm, though, under the streetlights, a recipe passing from one man to another, and the woman who ate it every Sunday, complaining, and never knowing why it tasted the way it did." }
      ] },
      { id: 'hg-s-burn', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "At seven-thirty, right at the peak of the rush, Daisuke caught the back of his hand on the rim of the big stockpot and made a noise she'd never heard a grown man make, and the master, without looking, pointed at the sink, and Daisuke went and stood with his hand under the cold tap, his face screwed up, swearing in a whisper." },
        { n: "That left the master and the noodle baskets and eleven tickets on the rail and four more coming through the machine, and the master looked at the rail, and then at her, and held out a noodle basket by the long handle." },
        { s: 'hgMaster', t: "Up. Snap. Twice. Hard. Don't be polite with it." },
        { choose: [
          { t: "(Take it. Don't think. Swing it like he does.)", stat: { courage: 1 }, then: [
            { n: "The first snap was too gentle and the water stayed in. The second spattered her apron and the floor. The third came off in a single sheet, clean, a sound like a towel snapping, and the master, beside her, did not say anything, only shifted half a step to make room, which was a lot." }
          ] },
          { t: "(Watch his wrists for three bowls. Then take over.)", stat: { proficiency: 1 }, then: [
            { n: "She watched. It wasn't the arm, it was the wrist, a sharp flick down at the bottom of the swing, the same as cracking a whip, and on the fourth bowl she took the basket and did it the way she'd seen it and it was right the first time, and the master grunted, which she'd learned meant he was impressed and would rather die than say so." }
          ] }
        ] },
        { n: "They cleared the rail by eight-fifteen. Her shoulders ached and her forearms ached and her apron was soaked, and Daisuke came back from the sink with his hand wrapped in a dish towel and looked at the empty rail and then at her and then at the master." },
        { s: 'hgDaisuke', t: "...Six years. Six years before he let me touch the baskets. She's been here *how* long?" },
        { s: 'hgMaster', t: "You burned yourself. Be more careful. Then you'll have the baskets." },
        { n: "Which was, she understood, as close as the master came to telling someone he loved them, and Daisuke seemed to understand it too, because he didn't say anything else for the rest of the night, and he was very careful." }
      ] },
      { id: 'hg-s-spring', months: [4, 5], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "In spring the university baseball team came in after their first game of the season, twelve enormous young men in muddy practice uniforms who filled the whole counter and the two tables and the space by the door, laughing and shoving and smelling of grass and sweat and liniment, and all twelve of them hit the ticket machine at once." },
        { n: "The machine, which had been built sometime around the moon landing, made a grinding noise and spat out thirty-one tickets in a single stream, all over the floor, like a slot machine paying out." },
        { s: 'hgCaptain', t: "Uh. Sorry. Sorry! Okay, guys, everybody, find your ticket. FIND YOUR TICKET." },
        { n: "Twelve large young men got down on their knees on the floor of the shop. The master looked at the scene for one long second from the pass, and then went back to his pots with an expression of pure, profound indifference, which was his way of saying it was her problem now." },
        { choose: [
          { t: "(Gather every ticket. Sort them by bowl on the counter. Call them out.)", stat: { proficiency: 1 }, then: [
            { n: "She swept them all up and sorted them on the counter in stacks by order, large, regular, extra pork, extra noodles, and called each one out in a clear carrying voice like an auctioneer, and the young men raised their hands one by one to claim their bowls, and by the end they were applauding each order as it came out, and the captain bowed to her from his stool." }
          ] },
          { t: "Everyone stand up. Line up. Tell me what you ordered.", stat: { courage: 1 }, then: [
            { n: "There was a pause. Then twelve large young men stood up and formed a straight line in front of her by the door, in order of height, possibly out of habit, and told her their orders one at a time like they were giving their names to a coach, and the master, at the pots, made a short sound through his nose that might, conceivably, have been a laugh." }
          ] }
        ] },
        { n: "They ate forty bowls. Forty. Eight of them had seconds and one of them had thirds, and when they'd gone the shop smelled like a locker room and the floor was gray with dirt from their cleats, and the master looked at the till and nodded, very slowly, once." },
        { s: 'hgMaster', t: "Good team. Will lose a lot. Eats well." }
      ] },
      { id: 'hg-s-summer', months: [7, 8], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "In high summer the kitchen was a sauna, the stockpots going full roll and the air so thick with steam it beaded on the ceiling and dripped down on the back of her neck, and the master stood in the middle of it in his towel headband looking completely, unnervingly comfortable, as if he were a lizard on a warm stone." },
        { n: "At seven a man in a polo shirt came in, red-faced from the heat outside, and read the menu on the wall from top to bottom twice, and then leaned over the counter." },
        { s: 'hgColdman', t: "Do you have cold ramen? Hiyashi chūka? It's thirty-one degrees out. Every ramen place on the Strip has it. Every single one." },
        { n: "The kitchen went quiet. Daisuke, at the sink, actually put down the bowl he was washing. The master turned around slowly from the pots, and looked at the man for a long moment, the steam rising off his shoulders, and the man in the polo shirt stood up a little straighter without knowing why." },
        { s: 'hgMaster', t: "Ramen is hot." },
        { choose: [
          { t: "(Suggest the regular bowl, and an ice-cold tea on the side.)", stat: { charm: 1 }, then: [
            { n: "She said it brightly, and quickly, like a person stepping between two dogs, and the man looked at her and at the master and at the steam and agreed that this was a reasonable compromise, and drank three glasses of iced barley tea with his ramen, sweating, and at the end admitted, a little resentfully, that it was the best ramen he'd ever had in a heat wave." }
          ] },
          { t: "He's right, though. Everybody else makes it.", stat: { courage: 1 }, then: [
            { n: "She said it to the master, not to the man, and Daisuke made a small strangled sound, and the master turned to her and looked at her for a long time, longer than he'd ever looked at her, and then turned back to the pots without a word, and she thought she might have just lost her job." }
          ] }
        ] },
        { n: "At closing, with the noren down and the Strip outside still radiating the day's heat, the master came out of the back room carrying three bowls on a tray. Cold noodles, sesame dressing, ribbons of cucumber and ham and egg laid in neat stripes, beads of water on the sides of the bowls." },
        { s: 'hgMaster', t: "For staff. Not for customers. Never for customers. This is not ramen." },
        { n: "The three of them ate it at the counter in the quiet with the fans going, and it was cold and sharp and perfect, and nobody said anything about it at all, and Daisuke, beside her, ate his with his eyes slightly wet, and she decided it was the heat." }
      ] },
      { id: 'hg-s-autumn', months: [10, 11], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "In autumn the master was working on something. She knew because he came in an hour early every day for a week and went into the back alone, and the back started to smell different, a dark roasted smell, miso and sesame and something burnt on purpose, and Daisuke said he was not allowed in, and that this happened once every few years, and that it was, he said with real fear, *a new bowl*." },
        { n: "On Wednesday the master put a small bowl on the pass in front of her before the doors opened, dark brown broth, the noodles thicker than usual, a sheen of red chili oil on the top in a perfect circle, and stood back, arms crossed." },
        { s: 'hgMaster', t: "Taste. Tell me the truth. If you lie, I'll know. Then you're fired." },
        { choose: [
          { t: "It's amazing. But the chili oil is fighting the miso. It's too loud.", stat: { courage: 1 }, then: [
            { n: "The words came out and sat on the counter between them, and Daisuke, at the door, physically covered his eyes. The master looked at her for a very long time, then took the spoon out of her hand, tasted it himself, and stood there with his eyes closed, chewing on nothing." },
            { s: 'hgMaster', t: "...Hm. Yes. Too loud. I knew. I wanted somebody to say." }
          ] },
          { t: "(Taste it again, slowly, before you answer.)", stat: { proficiency: 1 }, then: [
            { n: "She tasted it three times, the broth and then the noodles and then the two together, the way he tasted things, and on the third she found what was underneath, a sweetness, roasted sesame and something like squash, that was nearly hidden by the heat, and told him, and he nodded slowly as if she'd confirmed a suspicion." },
            { s: 'hgMaster', t: "Underneath. Yes. That's the part I'm making it for. Everything else is just to get you there." }
          ] }
        ] },
        { n: "It went on the board the next week, chalk, the master's own blunt characters: *Autumn Miso. Limited.* The chili oil was half what it had been, in a thinner ring. The sweetness came through. It sold out by eight every night until the first frost, and he never said a word to her about it, but on the second night he gave her the first bowl." }
      ] },
      { id: 'hg-s-aigis', flags: ['joined-aigis'], scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "Aigis came in at eight, alone, and did not use the ticket machine, but stood in front of it reading every button from top to bottom with total attention, and then turned and walked to the counter and sat down very upright on a stool, hands folded, and looked through the pass at Solar." },
        { s: 'aigis', f: 'neutral', t: "I have come to observe your workplace. I am curious about the conditions. Also, Junpei-san said the food here is 'life-changing.' I would like to determine whether this is literal." },
        { s: 'aigis', f: 'neutral', t: "I do not require a bowl. I will sit here and observe. Please do not be alarmed." },
        { n: "The master, who did not like people sitting at his counter not eating, looked at Aigis for a long time, and Aigis looked back at him without blinking, which she was better at than anyone, and the master, for the first time in Solar's experience, looked away first." },
        { choose: [
          { t: "(Put a small bowl in front of her anyway. That's the rule here.)", stat: { charm: 1 }, then: [
            { n: "Aigis looked down at the bowl, and the steam rose up past her face and caught in her hair, and she looked at it the way she looked at sunsets and the sea, with that strange, open attention, and then leaned forward a little and breathed in." },
            { s: 'aigis', f: 'happy', t: "...It is warm. The air above it is warm. I think this is what Junpei-san meant. I think it is a little bit life-changing." }
          ] },
          { t: "Watch the noodle basket. That's the best part.", stat: { knowledge: 1 }, then: [
            { n: "Aigis watched the master swing the noodle basket up out of the water and snap it down, twice, the water flying off in a single sheet, and watched him do it again, and again, and her head moved very slightly with each snap, tracking it, and at the end of twenty minutes she turned to Solar." },
            { s: 'aigis', f: 'happy', t: "His motion is exactly the same each time. Within one centimeter. This is very rare in a human. I think he is very good." },
            { s: 'hgMaster', t: "...Hm." }
          ] }
        ] },
        { n: "Daisuke asked about her later, in a whisper, whether the blond girl with the strange voice was okay, and Solar said she was the most okay person she knew, which was not entirely true and not entirely false, and Daisuke nodded like that made perfect sense, because he worked for the master and was used to people who said exactly what they meant and nothing else." }
      ] },
      { id: 'hg-s-ticket', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "The ticket machine ate a thousand-yen note at eight-fifteen, swallowed it whole with a mechanical gulp and then gave nothing back, no ticket, no change, no light, and the man who'd fed it, a big man in a construction jacket who'd clearly had a long day, hit the side of it with the flat of his hand, hard, and then again." },
        { s: 'hgAngry', t: "Hey! HEY. This thing just took my money. Somebody fix it. I'm not paying twice. I've been on site since six. I'm not *paying twice*." },
        { n: "The whole counter went quiet. The master did not turn around. Daisuke had gone into the back for green onions and was, she suspected, staying there on purpose." },
        { choose: [
          { t: "(Come out from behind the counter. Open the machine with the key.)", stat: { courage: 1 }, then: [
            { n: "She went right up to the man, who was a head taller than her and furious, and took the key from the hook by the register and opened the front of the machine in front of him, and there was his note, crumpled up in the feed, and she pulled it out and smoothed it flat on her apron and handed it back to him with both hands." },
            { s: 'hgAngry', t: "...Oh. Huh. Sorry. Sorry about the yelling. Long day." }
          ] },
          { t: "I'll take your order myself. Pay me at the end. Sit down.", stat: { charm: 1 }, then: [
            { n: "He stared at her, and then, in the face of an offer he couldn't argue with, sat down, and she took his order by hand on the back of a ticket, and he paid at the end with the same thousand-yen note, which had come out of the machine on its own half an hour later, as if embarrassed." }
          ] }
        ] },
        { n: "After he'd gone the master spoke, still facing the pots." },
        { s: 'hgMaster', t: "That machine has eaten money since 1969. You're the first one who didn't call me." },
        { n: "He didn't say whether that was good. She decided that it was." }
      ] },
      { id: 'hg-s-yearend', months: [12], after: '12/19', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "The last service before the New Year closing came cold and clear, the Strip lit up and full of people going somewhere, and Hagakure was packed all night with regulars coming in for one last bowl before the shop closed for the New Year, the windows so steamed up from inside you couldn't see the street." },
        { n: "Mrs. Tanabe came, in her fur collar, and stayed well past her usual hour. The baseball team came, all twelve, and sat on the floor by the door when there was no room. The blog man came and didn't take a single picture. Mr. Gotou came, and the regulars nodded to each other across the shop the way people do when they've seen each other every week for years and never learned each other's names." },
        { s: 'hgDaisuke', t: "Every year. Every year it's like this. I don't know how they all know it's the last night. He doesn't put up a sign. They just know." },
        { n: "At ten, when the last customer had gone and the noren came down off the door, the master did something he'd never done. He put up three bowls on the counter, the big ones, full, everything on them, pork and eggs and bamboo and nori, and then took off his towel headband, and sat down on a stool on the customer side, beside them." },
        { s: 'hgMaster', t: "Sit. Eat. It's the end of the year." },
        { choose: [
          { t: "(Sit beside him and eat. Don't say anything.)", stat: { proficiency: 1 }, then: [
            { n: "The three of them ate in silence, shoulder to shoulder at the counter, the steam rising, the kitchen behind them going quiet as the pots cooled, the heaters ticking. Daisuke finished first and put his chopsticks down and said thank you for the meal, and his voice cracked on it, and nobody said anything about that either." }
          ] },
          { t: "Master. Thank you for this year.", stat: { courage: 1 }, then: [
            { n: "He didn't say anything for a while, eating, and then put down his chopsticks." },
            { s: 'hgMaster', t: "...You work well. Come back next year. If you want." },
            { n: "Daisuke, beside her, choked on a noodle and had to be hit on the back." }
          ] }
        ] },
        { n: "She walked back up the Strip at half past ten with the cold on her face and the taste of the broth still in her mouth, her whole body warm from the inside out, and somewhere behind her the lights of Hagakure went off one at a time, and she didn't look back, but she knew exactly what it looked like anyway." }
      ] },
      { id: 'hg-s-closing', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "On a slow Wednesday they closed early, and the master, instead of sending her home, put her on the stockpot: the bones for tomorrow, scrubbed and blanched and put on to simmer, a job he'd never let anyone do, not even Daisuke, and stood beside her while she skimmed the scum off the top, a gray foam that came up endlessly out of the bones." },
        { s: 'hgMaster', t: "Skim. Skim. Keep skimming. If you stop, it clouds. If it clouds, it's ruined. You can't fix it. Only start again." },
        { n: "It was, by his standards, a speech. She skimmed. It went on forever, the gray coming up, the ladle going down, the steam in her face, the kitchen quiet except for the low roll of the pot and the hum of the refrigerator." },
        { choose: [
          { t: "Why ramen, Master? Why this, your whole life?", stat: { courage: 1 }, then: [
            { n: "He didn't answer for a long time, watching the pot." },
            { s: 'hgMaster', t: "My father had a cart. On the street. By the old station. Before the monorail. I'd skim for him. Like you're doing. All night. Every night." },
            { s: 'hgMaster', t: "...I just never stopped skimming." }
          ] },
          { t: "(Just skim. Don't talk. Let it be quiet.)", stat: { proficiency: 1 }, then: [
            { n: "They stood there side by side for forty minutes without a word, and at the end the broth was clear, a deep gold, the bones visible all the way to the bottom of the pot, and the master looked into it and then looked at her and nodded once." },
            { s: 'hgMaster', t: "...Good. Clear. Patient. You'd be good at this. If you wanted." }
          ] }
        ] },
        { n: "She went home smelling of pork bone, and lay in bed that night with her arms aching, and could still feel the ladle going down and coming up, down and up, the gray rising and being taken away, and thought, half asleep, that there were worse things to do with a life than make one thing clear, every night, for as long as you could." }
      ] }
    ],
    beats: [
      { id: 'hg-arc-1', at: 2, after: '4/25', scene: [
        { place: 'Iwatodai Strip · Hagakure', time: 'Evening', bg: 'hagakure-challenge-bowl' },
        { n: "The Mega Bowl came out of the kitchen on a tray, carried by Daisuke with both arms, a bowl the size of a car's hubcap holding four portions of noodles and a heap of pork slices like a fallen building and six eggs and a whole sheet of nori sticking up at the back like a sail, and the whole shop went quiet to watch it go by." },
        { n: "It went to Mr. Gotou. Mr. Gotou was forty-five, a foreman on a site on the far side of the river, built like a refrigerator, and this, Daisuke said, setting it down in front of him with ceremony, was his thirteenth attempt." },
        { s: 'hgGotou', t: "Thirteen's lucky. In some countries. Somewhere. Start the clock." },
        { n: "The master set the old kitchen timer on the counter, thirty minutes, and turned it, and it began to tick. Mr. Gotou broke his chopsticks apart with a small solemn snap, and bowed to the bowl, and went in." },
        { n: "Above the counter was the wall. Photographs, dozens of them, curling and faded, people holding up empty bowls with expressions of agony and triumph. The oldest one, in the top corner, black and white and gone the color of tea, was a young man with a towel around his head." },
        { n: "At minute twenty Mr. Gotou had slowed to a stop, a third of the noodles still left, sweating, his chopsticks hovering. At minute twenty-six he put them down." },
        { s: 'hgGotou', t: "...Next time. Next time. Thirteen's not lucky anywhere. I made that up." },
        { choose: [
          { t: "You got further than last time, though. I could tell.", stat: { courage: 1 }, then: [
            { s: 'hgGotou', t: "You think? Huh. Yeah. Maybe. Maybe I did. ...You're new. You're nice. Stay nice. This place'll knock it out of you." },
            { n: "He paid the full price for the failed bowl, which was the rule, with a slap of notes on the counter and no complaint, and lumbered out into the night with his hand pressed to his stomach, and Daisuke watched him go with the face of a man watching a hero fall in battle." }
          ] },
          { t: "(Bring him a glass of cold water and a toothpick. Quietly.)", stat: { proficiency: 1 }, then: [
            { n: "He drank the water in one go and looked at the toothpick and laughed, a big rough laugh that shook the counter, and took it and put it in the corner of his mouth like a cowboy, and sat there a minute catching his breath, looking up at the wall of photographs." },
            { s: 'hgGotou', t: "My whole crew's up there, you know. Every one of them. All five. The young ones. The foreman's the only one who's not on the wall. Bad for morale." }
          ] }
        ] },
        { n: "When he'd gone she asked Daisuke about the old photo in the corner, the black and white one. Daisuke lowered his voice, as if in church." },
        { s: 'hgDaisuke', t: "That's him. The master. 1970. He was the first one ever to finish it. Before he ran the place. He's never said one word about it." }
      ] },
      { id: 'hg-arc-2', at: 5, after: '7/1', prev: 'hg-arc-1', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "Mr. Gotou had a plan. He came in on a slow Wednesday and laid it out on the counter for her in a small spiral notebook, written in carpenter's pencil, very square, the plan for attempt fourteen." },
        { s: 'hgGotou', t: "I've been doing it wrong. I go for the pork first. The pork's heavy. Then I'm full and the noodles are getting fat in the broth. So I'm going to train. Regular bowl, every Wednesday. You time me. I'm getting faster. I'm doing this properly." },
        { n: "So she timed him. Regular bowl, every Wednesday, the old kitchen timer on the counter, and Mr. Gotou eating with his eyes closed, breathing through his nose, like a man in a meditation retreat. Six minutes forty. Six minutes twelve. Five minutes fifty-eight." },
        { n: "The master watched without seeming to watch. On the third Wednesday he spoke, from the pots, without turning around." },
        { s: 'hgMaster', t: "Wrong." },
        { s: 'hgGotou', t: "...What's wrong? What did I do? Master? What's wrong?" },
        { n: "The master did not explain. He never explained. He swung a noodle basket up out of the water and snapped it, twice, and went back to the pots, and Mr. Gotou looked at Solar across the counter with the eyes of a drowning man." },
        { choose: [
          { t: "Noodles first. Before they soak up the broth. That's what he means.", stat: { knowledge: 1 }, then: [
            { n: "She'd watched the master taste every bowl a hundred times, noodles first, always, quick, before anything else, and she said it like it was obvious, and the master's back, at the pots, went very still for a second, and then he swung the next basket a little harder than he needed to." }
          ] },
          { t: "You're eating with your eyes closed. Open them. Watch the bowl.", stat: { courage: 1 }, then: [
            { n: "Mr. Gotou opened his eyes and looked at the bowl as if it had just been introduced to him, and something about it changed, she could see it, the way he held the chopsticks, the way he went in. The master at the pots grunted, once, and swung the next basket." }
          ] }
        ] },
        { n: "Five minutes ten. He wrote it in the notebook, very square, with the date, and underlined it twice, and then looked up at the wall of photographs a long time, the master in black and white in the top corner." },
        { s: 'hgGotou', t: "...This winter. Before the year's out, or near enough. I'll do it. You'll see. Everybody'll see." }
      ] },
      { id: 'hg-arc-3', at: 9, after: '10/1', prev: 'hg-arc-2', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "Mr. Gotou didn't come in on Wednesday, for the first time since spring, and didn't come in on Friday, and on Saturday he came in late, at half past nine, in his work clothes, and sat at the end of the counter and didn't order anything at all." },
        { s: 'hgGotou', t: "They're moving me. The company. A site in Nagoya. Big job. Three years, maybe more. It's good. It's a promotion. I go at the end of January." },
        { s: 'hgGotou', t: "My wife's happy. Her mother's in Nagoya. It's good. It's all good." },
        { n: "He said it to the counter, rubbing his thumb along the edge of the wood where a hundred thousand bowls had been set down, and the shop around him was nearly empty, and the master, at the pots, had stopped moving entirely." },
        { s: 'hgGotou', t: "...So I don't think I'll do the bowl. There's no point now. If I'm not going to be here. What's the point of being on the wall of a place you don't go to." },
        { choose: [
          { t: "That's the whole point, though. So there's something of you here.", stat: { courage: 1 }, then: [
            { n: "He looked up at her, surprised, and then at the wall of photographs, slowly, curling and faded, dozens of people who had moved away or grown old or stopped coming, all still there, all still holding up their empty bowls, and his jaw worked, and he didn't say anything for a while." }
          ] },
          { t: "(Set the old kitchen timer down on the counter in front of him.)", stat: { charm: 1 }, then: [
            { n: "She took it down from the shelf, the old kitchen timer, and set it in front of him without a word, and he looked down at it for a long time, his big rough hands flat on the counter on either side of it, like it was something he'd lost and been handed back." }
          ] }
        ] },
        { n: "The master put down the ladle. He came over from the pots, which he never did, and stood across the counter from Mr. Gotou, and wiped his hands slowly on the towel at his waist." },
        { s: 'hgMaster', t: "Before you go. You pick the night. Seven o'clock. I'll make it myself." },
        { s: 'hgMaster', t: "Don't be late." },
        { n: "He went back to the pots. Mr. Gotou sat for a moment with his mouth slightly open, and then closed it, and got out his small spiral notebook, and wrote down the date in carpenter's pencil, very square, and underlined it three times, and when he left he was standing up straighter than when he'd come in." }
      ] },
      { id: 'hg-arc-4', at: 13, after: '12/1', prev: 'hg-arc-3', scene: [
        { place: 'Iwatodai Strip · Hagakure · Kitchen', time: 'Evening' },
        { n: "It was seven o'clock on a cold night, and Mr. Gotou came in with his whole crew, five young men in work jackets who had come, they said, to see the boss die, and sat in a row along the wall under their own photographs, cheering, and Mrs. Tanabe was there on her end stool, and the blog man, and the baseball captain, and half the shop was people who'd heard." },
        { n: "The master carried the bowl out himself. He'd never done that. He set it down in front of Mr. Gotou with both hands, the hubcap bowl, the four portions and the pork and the six eggs and the sail of nori, and then he set the old kitchen timer next to it, and turned it to thirty, and let go." },
        { s: 'hgMaster', t: "Start." },
        { n: "Noodles first. Eyes open. He went in. The crew counted down the minutes along the wall. At twenty, half the noodles were gone. At twenty-four the pork was going and his face had gone red and his hands had slowed, and the shop had gone so quiet she could hear the timer ticking from the kitchen." },
        { choose: [
          { t: "Mr. Gotou! Five minutes! You're nearly there!", stat: { courage: 1 }, then: [
            { n: "She shouted it across the shop, not like a waitress, like someone on the sidelines, and the crew took it up, and then the baseball captain, and then, unbelievably, Mrs. Tanabe in her fur collar, thumping the counter with her small fist, *Go, go, go*, and Mr. Gotou, red as a brick, picked up his chopsticks again." }
          ] },
          { t: "(Set down a cold glass of water beside him, without a word, at exactly the right moment.)", stat: { proficiency: 1 }, then: [
            { n: "She put it down at minute twenty-five, a tall glass, ice cold, beading, by his left hand, just where he'd reach, and he drank half of it in a single swallow and set it down and breathed out, long and slow, and went back in, and something about him changed, the rhythm came back." }
          ] }
        ] },
        { n: "He drank the last of the broth with forty seconds left on the timer, the bowl tipped up against his face with both hands, and set it down on the counter upside down, empty, and the shop exploded, the crew on their feet, Daisuke yelling something with no words in it, Mrs. Tanabe clapping her small hands, and the master just stood there behind the counter, arms crossed, watching." },
        { n: "Then he went into the back and came out with a camera, old, the kind that used film, and took the picture himself. Mr. Gotou holding the empty bowl over his head with both hands, red-faced, his eyes wet, roaring." },
        { s: 'hgMaster', t: "...Good." },
        { n: "The photo went up the next week, when the film came back. Not on the bottom row, where the new ones went. The master hung it himself, on a stool, in the top corner, right next to the oldest one, the black and white one, the young man with the towel around his head and the empty bowl in 1970." },
        { s: 'hgGotou', t: "Nagoya's got ramen. I know. It's not going to be the same. But when I'm back in Iwatodai on a visit, I'll come in. And I'll be up there. Next to him." },
        { s: 'hgGotou', t: "...Small bowl, from now on. Doctor's orders. And my wife's. Mostly my wife's." },
        { n: "He left at the end of January, the way he'd said. His photo stayed. Some nights, swinging the noodle basket, Solar would look up at the top corner of the wall, at the two men holding their empty bowls forty years apart, and the master would catch her looking, and look too, and neither of them would say anything, which was the way, at Hagakure, you said most things." }
      ] }
    ],
    quiet: [
      { id: 'hg-q-hm', scene: [
        { n: "She set down ten bowls on the pass without being told, hot, in a straight line, just as the tickets came through, and the master looked at them, and at her." },
        { s: 'hgMaster', t: "Hm." },
        { n: "Daisuke, at the sink, gave her a thumbs up. It had been one of the good ones." }
      ] },
      { id: 'hg-q-daisuke-dream', scene: [
        { s: 'hgDaisuke', t: "When I have my own shop, it's going to be called Daisuke's. Just that. Daisuke's. And I'm going to say hello to every customer. Out loud. With words." },
        { n: "The master, at the pots, said nothing at all, which Daisuke took as encouragement." }
      ] },
      { id: 'hg-q-snap', scene: [
        { n: "She swung the noodle basket up and snapped it down, twice, and the water came off in one clean sheet with a sound like a towel cracking, and she stood there a second, pleased with herself, and the master, beside her, didn't say anything, but stepped back to let her do the next one too." },
        { s: 'hgDaisuke', t: "Don't look so happy. He notices when you look happy. Then he gives you the pots." }
      ] },
      { id: 'hg-q-tanabe-coat', scene: [
        { n: "Mrs. Tanabe's fur collar had slipped off the back of her stool onto the floor. Solar picked it up, brushed it off, and laid it back over the stool, and Mrs. Tanabe patted her hand without looking up from her bowl." },
        { s: 'hgTanabe', t: "Good girl. Not as good as 1987. But good." }
      ] },
      { id: 'hg-q-ticket-machine', scene: [
        { n: "The ticket machine gulped, whirred, and spat out a ticket for a bowl nobody had ordered. Daisuke picked it up and read it and looked at the machine like it had spoken to him." },
        { s: 'hgDaisuke', t: "...It wants a large with extra garlic. It's been through a lot. Should we make it one?" }
      ] },
      { id: 'hg-q-egg', scene: [
        { n: "The master taught her the egg: six minutes forty, the ice bath, the peel under running water, the tare overnight. He did it once, with his hands, in front of her, and then didn't say anything, and walked away, which meant she was meant to do the next twenty." },
        { choose: [
          { t: "(Do twenty, perfectly.)", stat: { proficiency: 1 }, then: [
            { n: "Nineteen were perfect. One cracked. She ate that one herself, standing at the sink, and the master pretended not to see." }
          ] },
          { t: "Can I ask why six-forty, and not seven?", stat: { courage: 1 }, then: [
            { s: 'hgMaster', t: "...Seven is for people who are afraid of the yolk." }
          ] }
        ] }
      ] },
      { id: 'hg-q-steam', scene: [
        { n: "The windows had fogged up from inside so completely that the Strip outside was only a blur of lights, and someone had drawn a smiley face in the fog on the inside of the glass at child height, and nobody wiped it off, and it ran a little all evening, and stayed." },
        { s: 'hgDaisuke', t: "Leave it. He says the windows look sad without one. He drew it. Don't tell anybody he drew it." }
      ] },
      { id: 'hg-q-gotou-wave', scene: [
        { n: "Mr. Gotou came in, ordered a small bowl, and saw her through the pass, and lifted his chopsticks at her in salute before he broke them apart, the way you'd salute someone across a battlefield." },
        { s: 'hgGotou', t: "Small bowl! Training! Don't tell the master I said training." }
      ] },
      { id: 'hg-q-burns', scene: [
        { n: "She had a new small burn on the back of her wrist, a pink line next to the old one, and Daisuke, seeing it, held out his own arm, covered in them, and pointed at the first one, faded nearly white." },
        { s: 'hgDaisuke', t: "That was my first week. You'll get a collection. It means you're real." }
      ] },
      { id: 'hg-q-towel', scene: [
        { n: "The master tied a white towel around his head at the start of the shift the same way every time, a single knot at the back, pulled tight with both hands, and it was the closest thing to a ritual she'd seen in a person, and she found herself waiting for it every shift, like the start of a song." },
        { s: 'hgMaster', t: "...Bowls." }
      ] },
      { id: 'hg-q-broth-taste', scene: [
        { n: "The master held out a small ladle of the broth across the pass for her to taste before the doors opened, as he'd started doing, and she tasted it, and nodded, and he nodded back, and that was the whole conversation, and it was enough." },
        { s: 'hgMaster', t: "Good. Doors." }
      ] },
      { id: 'hg-q-noren', scene: [
        { n: "At ten she took the noren curtain down off the doorway, the dark blue cloth with the shop's name on it gone soft with years of hands, and folded it in thirds the way Daisuke had shown her, and the Strip outside went on without it, and the shop was quiet, and her own." },
        { s: 'hgMaster', t: "Go home. Eat something that isn't ramen. Sleep." }
      ] }
    ],
    openers: {
      4: "In April the noren over Hagakure's door still had a chill in it, and the steam from the kitchen met the cold air of the Strip at the door and rolled out into the street in thick white clouds that people walked through on their way to the station, breathing in.",
      5: "May brought the first warm evenings, and the master propped the door open with a stool, and the smell of the broth went out down the Strip on the breeze and came back with customers, like a fishing line.",
      6: "June at Hagakure meant the line for the rainy-day special could go any night, and the master looked out at the sky every evening before service the way a farmer does, and the umbrella stand by the door was full of other people's umbrellas.",
      7: "In July the kitchen was a furnace, the stockpots rolling full and the air beading on the ceiling, and three electric fans did nothing but move the heat around, and everyone who came in asked for cold barley tea before they'd sat down.",
      8: "August was all heat and sweat and summer-break students in groups of five, ordering large, and the master went through four headband towels a night and never once looked uncomfortable.",
      9: "In September the evenings started to cool, and the kitchen with them, a few degrees at a time, and the broth tasted richer for it, and the regulars who'd stayed away all summer came back, one by one, like birds.",
      10: "October brought the first real cold to the Strip, and the noren snapped in the wind off the river, and the windows steamed up from the inside for the first time since spring, and every bowl went out with the steam standing straight up off it.",
      11: "In November it was dark before the shift, and Hagakure was the brightest thing on the Strip, its windows fogged gold, the line for a stool going out the door and people standing in it stamping their feet and breathing into their hands.",
      12: "December was the busiest month of the year at Hagakure, the regulars coming in for one last bowl before the New Year closing, the kitchen roaring all night, the windows streaming, and the master never once slowing down.",
      1: "In January the shop opened again after the New Year with a new noren over the door, stiff and dark blue, and the master's first broth of the year simmered from four in the morning, and the regulars came back one at a time with their New Year's greetings, a little shy, as if returning from a long trip."
    }
  }
});
