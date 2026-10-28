/* The strangers epilogue, week 2 (2/24-3/1/2013): "wrong". Batch 7, Writer B (2026-10-28).
   Merges into FEMC_EPI_WORLDS.strangers (events); never overwrites. Stage 2 from 2/24 (the floor), 3 on the night of the
   first pull (2/28). The route is locked from the night of 2/23; route colour is { ifEpiRoute } inside the shared scenes.

   Events
     epi-s-bureom      2/24 Sun  early, consumes     Daeboreum morning: the nuts, five-grain rice, nine namul, the heat for sale,
                                                     the ear-quickening wine; both boys at one table; the calendar at 48
     epi-s-moon        2/24      evening, consumes   Wolmido with Yunjin and the four girls: the moon house, the wishes, the fever
                                                     held; the moon goes green for one breath; the three of them in the middle
     epi-s-hc-annex    2/26 Tue  evening, consumes   route haechan (event gate flag epi-route-haechan): the annex, the crane quilt,
                                                     the Discman that doesn't play; Donghyuck-ah once; the thing he aimed
     epi-s-jw-tea      2/26      evening, consumes   route jungwon (epi-route-jungwon): after baduk with Appa (he lost on purpose);
                                                     tea made properly at the kitchen table at night; Mandarin; Mrs. Bang
     epi-s-fam-trot    2/26      evening, consumes   route family (epi-route-family): the coast road at night, Mr. Oh driving, Appa
                                                     in the back beside her, Haechan singing trot in the front; Appa almost says it
     epi-s-gun         2/27 Wed  after, consumes     the fish market: a man from outside the two houses, a pistol, the hammer falls
                                                     as the Dark Hour flickers on; everything stops but the three of them; it
                                                     didn't fire. On Haechan (haechan / family route) or on Jungwon (jungwon route)
     epi-s-even        2/27      late                the annex step: the alliance said out loud; the midnight rota; "We're even." /
                                                     "We're not."
     epi-s-alone       2/28 Thu  late                fight 1 (epi-strangers-1): the harbor at midnight, half Tartarus; back on her
                                                     floor with a blister and the clock at 12:01; whoever's on watch at her door
     epi-s-seo         3/1 Fri   after, consumes     Independence Movement Day: Inspector Seo on the back step with an iced coffee in
                                                     March; the fever, and a story from the market; Mrs. Bang and a rug

   Flags set: epi-s-moon-seen (moon), epi-s-gun (gun), epi-s-alliance (even), epi-s-alone (alone), epi-s-seo (seo).
     Local (nobody else needs to read them): epi-s-wine-asked (bureom, "What good news"), epi-s-wish-name (moon, she wrote a
     name), epi-s-seo-turned (seo, the charm option).
   Flags read: the route events' own gates (epi-route-haechan / -jungwon / -family). ifEpiRoute read: bureom, moon, gun, even,
     alone, seo (route colour; the gun's target and the watch on the night of the first pull).
   Glitches: epi-s-g-moon (moon), epi-s-g-gun (gun), epi-s-g-alone (alone), each once; { stage: 2 } in gun, { stage: 3 } in
     alone; { strain: 1 } after each lie that holds the cover (moon: the fever to the girls; seo: the fever, and the market);
     { near: true } in even (both boys silent on the step) and hc-annex (he goes quiet).
   Bonds: haechan +1 (hc-annex), jungwon +1 (jw-tea), haechan +1 or jungwon +1 by route in even (one per scene).
   Music: epi-s-festival (bureom, moon), epi-s-haechan, epi-s-jungwon, epi-s-family (the three route nights), epi-s-house then
     epi-s-danger (gun, at the turn), epi-s-step (even), epi-s-half (alone), epi-s-cover (seo).

   Canon fences kept as the private plan sets them (Claude-only: DO-NOT-OPEN-epilogue-plan-private.md §4).

   Inventions for Kat to confirm (structural, small)
   - Daeboreum customs at the Lee table: Mrs. Bang soaks the nine namul from Thursday; Jungwon brings a lacquer box of yaksik
     "from his house" at seven; the heat-selling game (call a name; if they answer, "my heat's yours"): Jungwon sold his to
     Haechan at the gate at six; Appa calls "Sol-ah", she answers, and he won't sell her his.
   - The ear-quickening wine is cold cheongju from the little white kettle, in a thimble cup.
   - Wolmido: the moon house is pine branches and straw on the shingle past the end of the promenade; wishes are folded paper
     tied into it; Eunchae claims she saw the moon first.
   - Haechan's Discman is "on track four", always (he knows where it stopped).
   - Jungwon lost to Appa by one and a half points; Appa: "Next time lose by more. Then I'll believe it."
   - The family drive: Appa wanted the coast road; the trot is an old Na Hoon-a song about a hometown station (title only, no
     lyrics quoted).
   - The market man's pistol is an old black one "with the hammer outside"; the market's verdict is "it jammed".
   - The midnight rota: midnight to four, odd nights and even, Haechan on the annex step, Jungwon standing at the gate under the lamp;
     Minseok lets him in because the Chairman said to; the kitchen door is left on the latch. Thursday 2/28 is Haechan's on
     the haechan and family routes, Jungwon's on his.
   - Seo drinks iced coffee in March ("Ice is the only thing in it I trust"); she heard the market story as market gossip.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 2/24 morning: bureom ─────────────────────────────
  { id: 'epi-s-bureom', date: '2/24', slot: 'early', consumes: true, title: 'bureom', place: 'Incheon · The Lee House · Kitchen', time: 'Morning', scene: [
    { music: 'epi-s-festival' },
    { n: "Daeboreum came in clear and hard, the first clear morning in a week, the sky over the harbor scraped clean by a wind off the Yellow Sea that rattled every window on the seaward side of the house, and by seven the kitchen was so full that Mrs. Bang had given up trying to get people to sit down and had started simply putting bowls into whatever hands came near her." },
    { n: "Five-grain rice in the big pot, sticky and purple-dark with black beans and sorghum and millet, the steam coming off it in a column that the draught from the back door kept knocking over. Nine kinds of dried namul in nine small dishes down the middle of the table, the ones Mrs. Bang had been soaking since Thursday in basins along the windowsill, fernbrake and radish greens and aster and eggplant and the dried pumpkin that only came out once a year, each one dressed in perilla oil and a different amount of garlic according to a system Mrs. Bang had never written down and would die before explaining." },
    { n: "In the middle of all of it, a wooden bowl of nuts in their shells. Walnuts, peanuts, chestnuts, and a handful of ginkgo nobody would touch." },
    { n: "Auntie Song at the stove in her rubber boots, scolding the rice in Mandarin. Pyo at the sink, washing the same bowl he'd been washing when Solar came down. Mr. Oh in the corner by the door with his coat still on, as if the morning were a car he might have to start at any moment. Minseok with both elbows on the table until Mrs. Bang hit one of them with the flat of a spoon, without looking, on her way past. And through the glass of the back door, Mr. and Mrs. Kim going round and round in their bucket, under a lid of new ice somebody had already broken for them." },
    { n: "The calendar by the fridge had been turned before she came down. It always had. 48, and somebody had drawn a small round moon beside it in pencil, badly, the way a man draws a moon when he hasn't drawn anything since school." },
    { n: "She stood in the doorway in her socks for one second longer than she needed to and counted them. She couldn't help it. She'd been counting this kitchen since she was tall enough to see over the table." },
    { s: 'yunjin', f: 'happy', t: "Okay. Okay. Explain it to me one more time. I crack it with my teeth—" },
    { n: "Yunjin had come in from next door in the yellow puffer over her pajamas, hair in a knot on top of her head, and was holding a walnut up to the window like a jeweler." },
    { s: 'mrsbang', t: "The first one. With the front teeth. So you don't get boils all year." },
    { s: 'yunjin', f: 'surprised', t: "Boils. This is a country where the big winter festival is about not getting boils." },
    { s: 'auntie', t: "*Tell your friend boils are very serious, xiao yueliang.*" },
    { n: "Auntie Song didn't turn round from the stove to say it. She never did. She'd been speaking Mandarin over her shoulder in this house for nineteen years on the principle that whoever needed to understand her would, and whoever didn't would at least feel told off." },
    { s: 'solar', t: "Auntie says boils are very serious." },
    { s: 'yunjin', f: 'neutral', t: "Auntie can say it to my face." },
    { n: "The back door banged open on the wind and Haechan came in with it, cold coming off his jacket in a sheet, cheeks dark red from the garden, chewing. He took a walnut out of the bowl as he passed it, put it in the back of his mouth, and cracked it between his molars with a sound like a knuckle breaking." },
    { s: 'mrsbang', t: "*Front* teeth. Aigoo. Front." },
    { s: 'haechan', f: 'happy', t: "The back ones need luck too, Ajumma. They do all the work." },
    { n: "Yunjin looked at him. Then she looked at her walnut. Then, with great care, as if it had been the plan from the moment she was born, she reached up and knocked it on the top of his head." },
    { n: "It didn't crack. She did it again, harder." },
    { s: 'haechan', f: 'surprised', t: "Hey—" },
    { s: 'yunjin', f: 'happy', t: "Hold still, delivery boy, your head's the hardest thing in this kitchen." },
    { n: "On the third knock the shell went with a clean little pop and Yunjin held the two halves up to the room like a trophy, and Minseok laughed so hard he had to put his rice down, and Pyo dropped the bowl he'd been washing into the sink, and Mrs. Bang said *aigoo* a second time, which she almost never did before eight." },
    { s: 'haechan', f: 'neutral', t: "Do that one more time and I'll sell you my heat." },
    { s: 'yunjin', f: 'surprised', t: "Your what." },
    { s: 'solar', t: "Don't answer anyone who calls your name today. If you answer, they get to say *my heat's yours*, and then you're hot all summer instead of them." },
    { s: 'yunjin', f: 'neutral', t: "That's the stupidest thing I've ever heard. I love it. Who's done it to who." },
    { n: "There was a knock at the back door then, two knocks, light and exact, the kind of knock that was asking permission it already had, and Mrs. Bang opened it on Jungwon." },
    { n: "Dark coat. The wind behind him lifting nothing, because nothing about him ever came loose in a wind. A small black lacquer box held against his chest in his right hand, the lid tied with red string. He bowed to Mrs. Bang first, properly, then to the room, and the kitchen went quiet in the particular way it had learned to go quiet when one of the Yangs came through a door in this house, which was the way you go quiet near a dog you've been told is friendly now." },
    { s: 'jungwon', f: 'happy', t: "Good morning. My house sends yaksik, for the full moon. With apologies that it isn't more." },
    { n: "The dimples. Both of them. He was being very polite." },
    { n: "Mrs. Bang took the box as if it might go off and put it in the middle of the table, beside the nuts, where everyone could look at it. Minseok moved his elbow. Mr. Oh, in the corner, inclined his head one centimeter, which from Mr. Oh was a standing ovation." },
    { n: "Haechan stopped chewing." },
    { s: 'haechan', f: 'neutral', t: "Yang." },
    { n: "Jungwon took the chair at the far end of the table and sat in it, and laid his napkin on his knee, and did not answer." },
    { s: 'haechan', f: 'neutral', t: "*Yang.*" },
    { s: 'jungwon', f: 'neutral', t: "I'm afraid there's no heat left to sell this morning, Donghyuck. It's already been sold." },
    { s: 'haechan', f: 'serious', t: "To who." },
    { s: 'jungwon', f: 'happy', t: "To you. At the gate, at six. I called your name, and you said *what*, and I said it was yours." },
    { s: 'haechan', f: 'surprised', t: "You didn't say it. I'd have heard you say it." },
    { s: 'jungwon', f: 'neutral', t: "I said it under my breath. It still counts. I asked Mrs. Bang." },
    { n: "Everyone looked at Mrs. Bang. Mrs. Bang, ladling rice, after a long and terrible pause, nodded." },
    { n: "Haechan looked at the ceiling as if the ceiling had betrayed him personally, and Yunjin put her face in her hands and screamed into them, and Solar had to turn round to the fridge and look at the calendar very hard for a moment, because if she looked at either of them she was going to laugh, and if she laughed at one of them she'd have to laugh at the other one too, and she had learned, this winter, to be very careful about what she did to both of them at once." },

    { ifEpiRoute: 'haechan', then: [
      { n: "When she sat down there was a chair free beside Minseok and a stool free beside Haechan, and she took the stool. Nobody said anything about that either. Under the table his boot found the side of her foot and stayed there, the whole length of it, warm through her sock." },
      { n: "He cracked a peanut, picked the nut out with his split thumbnail, and dropped it in her rice without looking at her. Then another one. Then a third, still not looking, still telling Minseok a story about the gate at six in the morning that got bigger every time Jungwon didn't react to it." },
      { n: "At the far end of the table Jungwon ate his rice with great precision and watched the peanuts arrive, one at a time, and said nothing at all, very politely." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "She took the chair across from Jungwon because it was the only one left, which was a lie the kitchen allowed her, since Pyo had very obviously been told to get up from it." },
      { n: "He didn't look at her for a while. He ate. He complimented Auntie Song's rice in a Mandarin so careful that Auntie Song turned all the way round from the stove for the first time that morning and looked at him with her eyes narrowed, as if she were checking a fish for freshness, and then turned back without a word, which from her was approval." },
      { s: 'jungwon', f: 'neutral', t: "*You've moved the pumpkin to the edge of your bowl. Three times, since you sat down.*" },
      { s: 'solar', t: "*You counted.*" },
      { s: 'jungwon', f: 'happy', t: "*I always count. You know that. Eat the pumpkin. It's once a year.*" },
      { n: "Halfway down the table Haechan, who did not speak Mandarin and never would, looked from one of them to the other and cracked a walnut between his molars so loudly that Pyo flinched." }
    ] },
    { ifEpiRoute: 'family', then: [
      { n: "Her father's chair was at the top of the table and the seat at his right elbow was empty, the way it had been empty every morning of her life until she was old enough to be put at the side with the guests, and she took it without thinking, like a girl of eight, and he moved his newspaper to make room for her bowl." },
      { n: "Down the table the two of them, the boys, sat as far apart as the kitchen allowed, one at each end, and conducted the whole of breakfast through the salt." }
    ] },

    { n: "Her father came in last. He'd been up since half past four, the way he always was, and he'd already read the paper, but he carried it in under his arm anyway, his reading glasses swinging on their cord, and he stopped by the stove to hum something at Auntie Song that made her flap a dish towel at him." },
    { n: "Then he went to the cupboard over the sink, the high one, and took down the little white kettle with the blue crane on it, and a cup so small it was really a thimble, and he came and stood beside her chair and poured." },
    { n: "Cold cheongju. Clear as water. It shivered in the cup when he set it down by her hand." },
    { s: 'appa', t: "Gwibalgisul. So you'll hear good news all year." },
    { n: "He'd done it every Daeboreum since she was three. She knew because her mother had a photograph of it, a fat-cheeked girl in a red jacket making a face at a thimble, and the same white kettle, and the same hand pouring, younger." },
    { choose: [
      { t: "(Drink it.)", then: [
        { n: "She drank it in one go, the way you were supposed to, cold, so cold it hurt her teeth, and then a slow warmth behind it, all the way down." },
        { n: "He watched her do it. He watched the whole of it, the cup going up and the cup coming down, as if he were reading something written very small." },
        { s: 'appa', t: "Good." },
        { n: "That was all. He put the kettle back in the cupboard. His hand rested on the top of her head for exactly as long as it took to walk past her chair." }
      ] },
      { t: "What good news, Appa?", stat: { kindness: 1 }, flag: 'epi-s-wine-asked', then: [
        { n: "He thought about it. He actually stopped, kettle in hand, and thought about it, and the people nearest them at the table went quiet to hear what he'd say." },
        { s: 'appa', t: "Any. I'm not fussy this year." },
        { n: "She drank it. It was very cold. It took a long time to go down." }
      ] },
      { t: "(Pour one for him too.)", stat: { charm: 1 }, then: [
        { n: "She took the kettle out of his hand before he could put it away and poured a second thimble and held it up to him, both hands, the way you hand an elder anything, and he looked at it as if no one had ever once thought of that." },
        { n: "He drank it. He made a face, a small one, because it was seven in the morning." },
        { s: 'eomma', t: "It's too early for him." },
        { n: "Her mother had come in behind them without a sound, in a cream cardigan, her hair already pinned. She said it to the room, not to either of them. On her way past Solar's chair her fingers brushed the back of Solar's right hand, once, lightly, over the jade ring, as if checking it was still on, and then she went to the stove and asked Auntie Song about the rice." }
      ] }
    ] },
    { n: "She'd forgotten about the game. That was the only excuse she had afterwards." },
    { s: 'appa', t: "Sol-ah." },
    { s: 'solar', t: "Yes?" },
    { n: "The whole kitchen stopped. Yunjin's hands came down off her face. Haechan, mid-walnut, went still. At the far end of the table Jungwon put his spoon down with no sound at all." },
    { n: "Her father looked at her. Over the top of his glasses, with the paper under his arm and the morning coming in behind him off the sea, he looked at her for a long time, and she watched him decide." },
    { s: 'appa', t: "...Nothing. Eat your rice." },
    { s: 'yunjin', f: 'surprised', t: "He's supposed to say it. Isn't he supposed to say it? Mrs. Bang. He's supposed to say it." },
    { s: 'mrsbang', t: "Aigoo. He'd sooner sweat." },
    { n: "Her father went to his chair and sat down in it and opened the paper he'd already read and held it up in front of his face, and behind it, very quietly, he began to hum." },
    { n: "Solar took a walnut out of the bowl. She put it between her front teeth, the way you were supposed to, and bit down, and the shell went with a crack that she felt in her jaw and in her ears and somewhere further down than that, and she counted the kitchen one more time while it rang. Ten of them, counting herself. A box of rice cakes from across the water. Two fish in a bucket." },
    { n: "Everyone where she'd left them. She held on to the half-walnut in her hand until it was warm." }
  ] },

  // ───────────────────────────── 2/24 evening: the first full moon ─────────────────────────────
  { id: 'epi-s-moon', date: '2/24', slot: 'evening', consumes: true, title: 'the first full moon', place: 'Incheon · Wolmido', time: 'Evening', scene: [
    { music: 'epi-s-festival' },
    { n: "Wolmido on the night of the first full moon was the whole city deciding at once to stand in the cold and be lucky. The promenade was lit end to end, paper lanterns strung between the lampposts and swinging in the wind off the water, the shuttered rides along the seafront wearing strings of colored bulbs they'd been switched on for specially, children with sparklers, couples in matching scarves, old men with their hands behind their backs walking the length of the railing and back again as if they'd been sent to inspect it." },
    { n: "The tide was up. A spring tide, the biggest of the month, the full moon pulling the whole of the Yellow Sea up against the promenade wall so it slapped and sucked and threw spray up over the railing every seventh wave. She knew it would be. She'd known since she was six. She stood a full meter back from the railing with her hands in her coat pockets and let the crowd go between her and the water, the way she always had, and nobody noticed, because nobody ever did." },
    { n: "And then, in a gust of scarves and cold and somebody's dropped glove, the girls arrived." },
    { s: 'chaewon', t: "Okay. Okay, everyone, we're here, nobody wander off, the bonfire's at eight, the moon's at seven fifty-two, I checked." },
    { n: "Chaewon came first, the organizer, in a long cream coat and a beret she'd clearly thought about, carrying a paper bag of hand warmers which she began distributing at once without asking anyone whether they wanted one. Behind her Sakura, small and dry and unbothered, a pink handheld game console in one mittened hand that she did not look up from. Then Kazuha, tall and soft in a white coat, gazing up at the lanterns as if they might do something. And last, already talking, Eunchae, the youngest of them by a year and somehow the loudest, who reached Solar before anyone had introduced her and looked up into her face with enormous interest." },
    { s: 'eunchae', t: "You're Sol. You're *the* Sol. Yunjin talks about you like you're a weather system." },
    { s: 'yunjin', f: 'happy', t: "She is a weather system. She's a cold front." },
    { s: 'eunchae', t: "You're taller than I thought. Yunjin said you were small and scary." },
    { s: 'solar', t: "I'm sitting down when I'm scary." },
    { n: "Eunchae thought about that for one second and then laughed so hard she had to hold on to Kazuha, and that was it, apparently, Solar had been absorbed. Chaewon pressed a hand warmer into her palm. Sakura glanced up from the game, looked her over with the flat, assessing expression of someone deciding whether a new party member was worth leveling, and went back to the game. Kazuha told her, quite seriously, that the full moon on Daeboreum was the night the other side came closest, and that she should hold her wish paper with both hands so nothing took it." },
    { n: "They'd come for Yunjin. Solar understood that within a minute. They'd heard about her father from someone at the old studio and none of them had known what to do with it, so they'd done what girls who'd stretched next to each other at barres for six years did, which was turn up in a group, loudly, with a plan, and not mention it once. Chaewon had Yunjin's arm. Eunchae kept putting things in Yunjin's pockets. Kazuha had brought her a lantern shaped like a rabbit. Nobody said his name. Yunjin's laugh was a size too big all night and they let it be." },
    { s: 'chaewon', t: "Yunjin said you were really sick at Seollal. Are you okay now? You look okay. You look thin." },
    { n: "The cover arrived the way it always did, a half-second before she needed it, smooth and warm and in her own voice." },
    { s: 'solar', t: "Thirty-nine point four. I missed the whole thing. I'm fine now. My aunts sent so much fruit I could open a shop." },
    { glitch: { strain: 1 } },
    { n: "Somewhere at the back of her head something pulled tight, thin and cold, like a line going taut from the other end. Yunjin, beside her, didn't look at her. Yunjin looked at the lanterns, and said *so much fruit*, and laughed the size-too-big laugh, and held it up for her like a coat." },
    { s: 'yunjin', f: 'neutral', t: "Also. Don't look now. Both your boys are here." },
    { s: 'solar', t: "They're not my—" },
    { s: 'yunjin', f: 'happy', t: "Babe. Your fiancé is at the ferry end looking at the sea like it owes him money, and the delivery boy is at the Viking end looking at your fiancé like *he* owes *him* money. Don't look." },
    { n: "She looked." },
    { n: "Haechan was at one end of the promenade, leaning on the barrier in front of the shuttered Viking ride, black padded jacket, hands in his pockets, chewing, the colored bulbs on the ride going red and green and red across his face. Jungwon was at the other, a quarter of a mile away, by the ferry terminal, standing very straight in his dark coat with the lanterns swinging over his head, not leaning on anything." },
    { n: "They hadn't come together. They hadn't come with her. They'd each, separately, without telling her or each other, decided to be on Wolmido on the night of the full moon, at opposite ends of it, like two men guarding the two doors of a room." },
    { n: "Neither of them waved. She didn't either." },
    { n: "Down past the end of the promenade, on the strip of shingle where the sea wall gave out, the moon house stood ready, taller than a man: pine branches lashed into a cone over a frame of poles, straw packed in between, a ring of firemen standing round it with their hands in their pockets. Its whole skin was paper. Hundreds of slips, white and red and yellow, folded small and pushed in among the needles, every wish anyone in Incheon had brought with them tonight, shivering in the wind." },
    { n: "There was a table by it with a box of paper slips and a jar of pens, and a woman in a fleece vest telling everyone to write clearly so the moon could read it." },
    { s: 'eunchae', t: "What are you writing. Can I see. I'm not going to look. What are you writing." },
    { s: 'sakura', t: "She's going to look." },
    { s: 'kazuha', t: "Both hands. Remember." },
    { choose: [
      { t: "(Write *a quiet year*.)", stat: { kindness: 1 }, then: [
        { n: "She wrote it small, three words, in the neat hand her mother had made her practice at the kitchen table until her wrist ached. *A quiet year.* Then she looked at it, and thought about what year it was, and what was on the calendar by the fridge, and folded it twice so the words were on the inside." },
        { s: 'eunchae', t: "That's so *sad*. Write *money*. Everybody writes money." },
        { s: 'solar', t: "Everybody else can have the money." }
      ] },
      { t: "(Write a name. Fold it before anyone can see whose.)", stat: { charm: 1 }, flag: 'epi-s-wish-name', then: [
        { n: "She wrote it fast and folded it faster, twice, then a third time, until it was a hard little square she could have hidden under a thumbnail." },
        { n: "Eunchae, who had been craning, sat back." },
        { s: 'eunchae', t: "That was a *name*. That was a whole name. Was it a boy. Whose name was it." },
        { s: 'solar', t: "Mine." },
        { s: 'sakura', t: "...That's actually kind of cool." },
        { n: "It wasn't hers. She tucked it into the branches deep, where the fire would get to it first." }
      ] },
      { t: "(Write nothing. Fold it anyway.)", then: [
        { n: "She held the pen over the paper for long enough that the woman in the fleece vest asked if she needed help spelling something, and then she folded it, blank, and pushed it in among the pine needles with the others." },
        { n: "Kazuha watched her do it. Kazuha didn't say anything, which Solar was beginning to understand was unusual for Kazuha." },
        { s: 'kazuha', t: "The moon can read blank ones too. Those are the ones it reads first." }
      ] }
    ] },
    { n: "At seven fifty-two exactly, because Chaewon had checked, a man with a megaphone counted down from ten and the firemen stepped back, and an old man in a padded hat put a torch to the base of the moon house, and the straw went up with a sound like a breath drawn in all at once." },
    { n: "The crowd roared. The heat came off it in a wall. Thousands of folded wishes caught and lifted, spinning, and went up into the dark over the shingle as flakes of orange light, and over the city behind them, over the cranes and the warehouse roofs and the long black line of the harbor, the moon came up." },
    { s: 'eunchae', t: "I saw it first! I saw it first, that's a whole year of luck, everybody heard me—" },
    { s: 'sakura', t: "You saw a streetlight." },
    { n: "It was enormous. The first full moon of the year always was, low and fat and gold, sitting on the roof of the city like it had been set down there on purpose. Solar looked at it the way everyone else was looking at it, with the fire roaring on the shingle in front of her and the sea slamming the wall to her left and Yunjin's arm hooked through hers, and for one second she was only a girl at a festival, and it was very good." },
    { glitch: 'epi-s-g-moon' },
    { n: "Then the moon went green." },
    { n: "Not dark. Not dim. Green, the whole disc of it, a sick bright green like light through a bottle, like the light she had stood in at midnight for a year in a city across the water, and the sky around it went green with it, and the edges of everything, the cranes, the rooftops, the smoke going up off the moon house, were edged in it, sharp, wrong, for exactly as long as it took her to breathe in." },
    { n: "Then it was gold again. The crowd cheered for the fire. Nobody had stopped cheering. Nobody had seen a thing." },
    { n: "Her hand was clenched so hard on Yunjin's arm that Yunjin looked down at it." },
    { s: 'yunjin', f: 'neutral', t: "Ow. Babe. What." },
    { s: 'solar', t: "Nothing. The fire's hot." },
    { n: "She didn't look at the Viking end of the promenade. She didn't look at the ferry end. She knew, without looking, as surely as she knew where the tide was, that at the far end of the seafront a man in a black work jacket had just stopped chewing, and that at the other end a man in a dark coat had just put two fingers on his watch, and that neither of them would move a step toward her or say a single word about it until the other one did." },
    { n: "She looked anyway." },
    { n: "Haechan had taken his hands out of his pockets. He was looking at the moon, and then he wasn't, he was looking down the whole length of the promenade, through the crowd, for her. A quarter of a mile away Jungwon was doing exactly the same thing in the other direction. Neither of them moved. They found her at the same moment, from opposite ends, and she felt it land on her twice, like two hands on her shoulders." },
    { n: "Then, slowly, at the same time, each of them looked past her. At the other one." },
    { flag: 'epi-s-moon-seen' },
    { s: 'eunchae', t: "Sol. Unnie. Are you okay? You look like you saw a—" },
    { s: 'kazuha', t: "Don't say it. Don't say it on the full moon." },
    { s: 'chaewon', t: "Fish cakes. Everybody. Now. There's a cart. Yunjin, you're carrying the lantern." },
    { n: "The girls went toward the cart in a knot of scarves, Yunjin in the middle, the rabbit lantern swinging, and Solar said she'd follow, and didn't. She walked the other way instead, into the middle of the promenade, where the crowd was thinnest and the lanterns were furthest apart, and stopped there, under one that had gone out, a meter and a half back from the railing." },
    { n: "Haechan got there first, because Haechan walked like a man who'd been told not to run and was ignoring half of it. Jungwon got there eleven seconds later, because Jungwon had counted how long it would take and had decided, for reasons of his own, not to arrive first." },
    { n: "They stood with her between them. Not close. The lantern over them creaked on its wire. Below the wall the spring tide sucked at the stone and let go and sucked again, and none of them said anything at all for long enough that a couple in matching scarves walked straight between Haechan and her, said *sorry*, and kept walking." },
    { s: 'haechan', f: 'serious', t: "You saw it." },
    { n: "He said it to Jungwon. Not to her." },
    { s: 'jungwon', f: 'neutral', t: "I was waiting for you to say so." },
    { s: 'haechan', f: 'neutral', t: "I was waiting for *you* to say so." },
    { s: 'jungwon', f: 'neutral', t: "Then we were both standing at either end of Wolmido waiting for the other one to admit it first. Which is very like us." },
    { s: 'haechan', f: 'serious', t: "Don't say *us*." },
    { n: "They both looked at her then. She'd known they would. She had her hands in her coat pockets and the hand warmer Chaewon had given her was burning a square into her palm, and she held on to it, and kept her face exactly where her mother had taught her to keep it." },
    { s: 'solar', t: "It was green." },
    { n: "Nobody answered that. There wasn't anything to answer. It was green, and the three of them were the only people on an island full of people who had seen it, and they'd all three of them stood in that green before, in another city, for a whole year, and come home, and not one of them had believed for a second that it was finished with them." },
    { s: 'jungwon', f: 'serious', t: "*How long did it last. For you.*" },
    { s: 'solar', t: "*One breath.*" },
    { s: 'jungwon', f: 'serious', t: "*For me as well.*" },
    { n: "Haechan looked from one of them to the other, the way he always did when they went somewhere he couldn't follow, and didn't ask, and took a stick of cinnamon gum out of his pocket and unwrapped it with his teeth and put the wrapper back in the pocket, and looked at the moon." },
    { s: 'haechan', f: 'neutral', t: "One breath. Same." },
    { n: "So he'd understood that much. Of course he had. He'd had a year of being the only one in a room who couldn't follow what was being said, over there, and he'd learned to read it off faces the way she read a tide off the color of the mud." },
    { s: 'yunjin', f: 'happy', t: "SOL. FISH CAKE. I'M NOT CARRYING THIS RABBIT AND YOUR BROTH AT THE SAME TIME." },
    { n: "The yell came from forty meters off, through the whole crowd, and an old man at the railing turned round to look for whoever had been murdered." },
    { n: "Down on the shingle the moon house fell in on itself all at once, a great soft collapse of burning straw, and a column of sparks went up into the dark and over the water, and the crowd went *ohhh* together, the way crowds do, and the moon, gold, ordinary, enormous, sat on the roof of the city and pretended it had never been anything else." },
    { s: 'haechan', f: 'neutral', t: "Go on, agasshi. Go and eat a fish cake. We're not going anywhere." },
    { n: "*We*. He heard himself say it a half-second after she did. He shut his mouth on it and looked at the sea." },
    { n: "Jungwon, beside him, very politely, did not say anything about it at all." }
  ] },

  // ───────────────────────────── 2/26 evening, route haechan: the annex ─────────────────────────────
  { id: 'epi-s-hc-annex', date: '2/26', slot: 'evening', consumes: true, flag: 'epi-route-haechan', title: 'the annex', place: 'Incheon · The Lee House · Annex', time: 'Evening', scene: [
    { music: 'epi-s-haechan' },
    { n: "The annex at the bottom of the garden had a steel door that stuck in the cold and had to be shouldered on the second push, and when she shouldered it the warmth came out at her all at once, the little oil heater in the corner ticking on its highest setting, the window over the bed fogged from the inside, and the smell of the place, diesel and cinnamon and Mrs. Bang's soap on the pillowcase, which was the smell of nowhere else on earth." },
    { n: "He was on the iron bed with his back to the wall and his boots still on, which Mrs. Bang would kill him for, Mrs. Bang's crane quilt rucked up under him, the old silver radio on the sill murmuring a weather forecast nobody was listening to. The cracked silver Discman sat on his knee. The earbuds were in. Both of them." },
    { n: "She knew the batteries were dead. They'd been dead since 2006. She'd known that since the first time she'd come down here and found him exactly like this." },
    { s: 'solar', t: "What are you listening to." },
    { s: 'haechan', f: 'neutral', t: "Track four." },
    { s: 'solar', t: "It doesn't play, Donghyuck-ah." },
    { n: "It came out before she'd decided to say it. The name. It sat in the little warm room between them and neither of them looked at it." },
    { s: 'haechan', f: 'neutral', t: "I know it doesn't play. I know where it's up to." },
    { n: "He took one of the earbuds out and held it up to her, the wire hanging, without looking at her. She came and sat on the edge of the bed and took it and put it in her ear. Nothing. A very small hiss that was only her own blood. The weather forecast from the radio, fainter, on the other side. His knee warm against her hip through the quilt." },
    { s: 'haechan', f: 'neutral', t: "That's the bit where the drums come in." },
    { s: 'solar', t: "There's nothing." },
    { s: 'haechan', f: 'happy', t: "You're not listening properly, agasshi." },
    { n: "She laughed. She hadn't meant to. It came out of her the way things only ever came out of her down here, at the bottom of the garden, behind a steel door, where there was nobody to perform for and nothing to count except him." },
    { choose: [
      { t: "(Take the other earbud out of his ear and put it in your own.)", stat: { courage: 1 }, then: [
        { n: "She reached over and took the other one out of his ear, slowly, so he could stop her if he wanted to, and he didn't, and she put it in her own, so that she was the one with both of them in, and he was the one with nothing, sitting there with a dead Discman in his hand and the wire running from it across his knee to her." },
        { n: "He looked at her then. Finally. The whole of his face, the scar through the eyebrow and the moles along his jaw and his mouth not doing anything at all, for once, not grinning, not chewing." },
        { s: 'haechan', f: 'serious', t: "Now you're listening." }
      ] },
      { t: "Sing me the bit with the drums, then.", stat: { charm: 1 }, then: [
        { n: "He did. Of course he did. Low and rough and perfectly in tune, a song she'd never heard, from a disc that had belonged to somebody else, all the way through the drums and into a chorus, his head tipped back against the wall and his eyes shut, singing it well on purpose, the way he sang everything well on purpose, to annoy her." },
        { n: "It didn't annoy her. That was the problem with him. It never had." }
      ] }
    ] },
    { n: "She didn't know who moved. She'd tell herself later it was him and know it was a lie." },
    { n: "His hand came up and found the pins in her hair, the long black one her mother had put in that morning, and pulled it, and her hair came down over both of them, and he made a sound low in his chest like a man setting something heavy down. The Discman slid off his knee into the quilt. The wire pulled the earbud out of her ear. Neither of them went after it." },
    { n: "He kissed her the way he did everything that mattered, which was without making a joke of it first, hard and then not, his split knuckles along her jaw, cinnamon and cold air and the heater ticking. She got her hands in his jacket and he let her. He let her push him back against the wall and climb into his lap on Mrs. Bang's cranes with her hair hanging down round both their faces like a curtain, and he held her there, his hands spread wide on her back under her sweater, as if he were holding her up out of deep water." },
    { n: "The radio went on with the weather. Wind from the northwest, it said, and a hard frost on the coast, and a tide at eleven fifty, and he laughed into her mouth at the tide, because he knew she'd heard it, because he knew she'd already known." },
    { n: "What happened after that was nobody's business but the cranes'." },
    { place: 'Incheon · The Lee House · Annex', time: 'Late Night', soft: true },
    { n: "Later, the window over the bed had cleared in one corner where her hand had been, and through it she could see the whole of the house at the top of the garden, dark except for the kitchen and, two floors up, the window of her own room, where the lamp was still on because she'd left it on, because she always did, so that anybody looking up from the garden would think she was there." },
    { n: "He was looking at it too. He'd been looking at it a long time. His arm was under her neck and his other hand was turning the dead Discman over and over on his chest." },
    { glitch: { near: true } },
    { n: "He'd gone quiet. Not asleep. The other quiet, the one she'd learned this winter, the one that meant something in him was very frightened and had decided to keep still until it passed." },
    { s: 'solar', t: "Say it." },
    { s: 'haechan', f: 'neutral', t: "Say what." },
    { s: 'solar', t: "Whatever it is you've been holding since the moon." },
    { n: "He turned the Discman over again. The cracked lid. Somebody else's old disc inside it, going nowhere. He didn't look at her when he said it. He looked up the garden at her lit window, and he said it slowly, and she knew by how slowly that he'd had it ready for days and had been choosing the moment the way he chose a gap in traffic." },
    { s: 'haechan', f: 'serious', t: "You were gone ten days. I sat here with this. I knew where it was up to the whole time. Track four. I didn't skip once." },
    { s: 'haechan', f: 'serious', t: "So next time you go somewhere, agasshi, you tell me which track. That's all. I'll wait on that one." },
    { n: "She didn't answer. She couldn't have, not then, and he knew that too, and that was why he'd said it in the dark with his face turned away, so she wouldn't have to." },
    { n: "She took the Discman out of his hand instead, and opened the lid, and looked at the disc inside it, and closed it again, very gently, and put it back on his chest with her hand over it, and his hand over hers." },
    { bond: { haechan: 1 } },
    { n: "Up the garden, in the house, the kitchen light went out. Then, a moment later, on the stairs, another one, the small one on the landing, the one her father always switched off on his way up, last, after the seventh stair." }
  ] },

  // ───────────────────────────── 2/26 evening, route jungwon: properly ─────────────────────────────
  { id: 'epi-s-jw-tea', date: '2/26', slot: 'evening', consumes: true, flag: 'epi-route-jungwon', title: 'properly', place: 'Incheon · The Lee House · Study', time: 'Evening', scene: [
    { music: 'epi-s-jungwon' },
    { n: "The baduk board in her father's study was older than she was, a slab of kaya wood gone the color of strong tea, the grid lines worn to a whisper at the corners where her grandfather's sleeves had rubbed them, and Jungwon sat at it across from her father with his coat folded over the arm of Dal's old chair and lost." },
    { n: "He lost slowly. That was what she noticed, from the window seat where she'd been told she could sit as long as she didn't talk. He lost so slowly and so gracefully, a stone at a time, over an hour and forty minutes, defending the wrong corner with tremendous care, that anyone who didn't know him would have thought he was fighting for his life." },
    { n: "Her father counted it out at the end the old way, filling in the territories with his thick fingers, his glasses on the end of his nose, humming." },
    { s: 'appa', t: "One and a half." },
    { s: 'jungwon', f: 'happy', t: "Thank you for the lesson, Chairman. I learned a great deal." },
    { n: "Her father looked at him over his glasses for a long moment. Then he took them off and polished them on the end of his cardigan, not slowly, which meant he wasn't angry. He was trying not to laugh." },
    { s: 'appa', t: "Next time lose by more. Then I'll believe it." },
    { n: "He stood up and put a hand on the top of Solar's head on his way past the window seat, and went out, and they heard him on the stairs, humming, and the creak of the seventh, and his door." },
    { n: "Jungwon didn't move until the door had shut. Then he looked at her across the board, and his face went completely still." },
    { n: "Pleased, then. Very." },
    { s: 'jungwon', f: 'neutral', t: "Would the young lady care for tea before I go? I'm told the kitchen is open to guests after eleven. I'm told that by the young lady, as a rule, so I'm assuming it's true." },
    { place: 'Incheon · The Lee House · Kitchen', time: 'Late Night', soft: true },
    { n: "The kitchen at night was a different room. Mrs. Bang's barley tea going cold in its kettle on the back of the stove, the window black, the koi bucket brought in off the step for the frost and set by the radiator, where the two fish hung in the water side by side as if they were listening. The calendar by the fridge, turned to tomorrow already. One lamp. The big table with nobody at it." },
    { n: "He made the tea properly. He'd brought it with him, in a small paper packet in his coat pocket, as if he'd known the game would end like this, and she supposed he had. He warmed the pot first with water from the kettle and poured it away. He warmed the cups. He put the leaves in and poured the first water over them and poured that away too, a short bright wash into the sink, to wake the leaves, and only then the second water, and he waited, watching the watch on his wrist, the second hand going round." },
    { s: 'solar', t: "*You're showing off.*" },
    { s: 'jungwon', f: 'neutral', t: "*I'm making tea. Properly. Your house makes barley tea in a kettle the size of a bucket. Someone has to.*" },
    { s: 'solar', t: "*Mrs. Bang would hit you with a spoon for that.*" },
    { s: 'jungwon', f: 'happy', t: "*Mrs. Bang is asleep. I counted the doors.*" },
    { n: "He poured. A thin gold stream, held high, not a drop on the table. He set her cup in front of her and turned it a quarter turn so the little crane painted on the side faced her, and then he sat down across the corner of the table from her, not opposite, the corner, close enough that his knee was nearly against hers under the table, and not quite, a centimeter off, which was worse." },
    { s: 'jungwon', f: 'neutral', t: "Is it acceptable?" },
    { n: "In Korean again. Formal. The most formal she'd heard from him in a week, with all the endings on, as if she were his grandmother, or a judge." },
    { n: "She knew this game. He'd taught it to her without either of them admitting it was a game, sometime in the winter: the more correct he was, the closer he sat. The politer the words, the less polite the centimeter under the table." },
    { choose: [
      { t: "It's acceptable, Yang Jungwon-ssi. Barely.", stat: { charm: 1 }, then: [
        { n: "She gave it back to him with every ending on it too, and her mother's smile, the one for the wives at New Year, and watched his face go perfectly still again." },
        { s: 'jungwon', f: 'neutral', t: "Only barely. I'm devastated. I'll have to try again. Many times. Over a great many evenings." },
        { n: "The centimeter under the table closed." }
      ] },
      { t: "*It's good.* (In Mandarin. Just that.)", stat: { kindness: 1 }, then: [
        { n: "Two words, in Mandarin, plain. No game in it at all." },
        { n: "He looked at her as if she'd cheated, which she had. He looked down at the table. His ears, very slowly, went red." },
        { s: 'jungwon', f: 'flustered', t: "*That's not fair.*" },
        { s: 'solar', t: "*I know.*" }
      ] },
      { t: "(Drink it without a word and hold out the cup for more.)", then: [
        { n: "She drank it in three swallows, hot enough to sting, and held the empty cup out to him across the corner of the table, and didn't say anything at all." },
        { n: "He filled it. He didn't say anything either. When he set the pot down his hand stayed on the table between their cups, and so, after a while, did hers." }
      ] }
    ] },
    { n: "He touched his watch. He did it when he was thinking. She'd stopped asking what about." },
    { s: 'jungwon', f: 'serious', t: "*At the moon. Did you hear anything. When it went.*" },
    { s: 'solar', t: "*No. Did you?*" },
    { s: 'jungwon', f: 'serious', t: "*A clock. Not mine. A big one. Somewhere it shouldn't have been.*" },
    { n: "She looked at his wrist. The watch, ticking. The kitchen clock over the stove, ticking slightly behind it, the way it always had. Neither of them said the number they were both thinking of." },
    { n: "He reached across the corner of the table and took her wrist in his right hand, gently, the way you'd lift a cup, and turned it over, and put two fingers on the inside of it where the pulse was, and looked at the watch on his own wrist, and counted. She let him." },
    { s: 'solar', t: "*What are you doing.*" },
    { s: 'jungwon', f: 'neutral', t: "*Counting. You know I count.*" },
    { s: 'solar', t: "*What's the number.*" },
    { s: 'jungwon', f: 'happy', t: "*Higher than it was at the start of the tea.*" },
    { n: "She should have taken her hand back. She'd tell herself that later. She left it where it was, and his thumb moved, once, over the place his two fingers had been, and he leaned in across the corner of the table, very slowly, very correctly, with every ending still on, until she could feel the warmth of his breath and there was nothing of him to smell at all, because there never was, and his mouth was a centimeter from hers—" },
    { n: "The light came on." },
    { s: 'mrsbang', t: "Aigoo." },
    { n: "Mrs. Bang was in the doorway in her quilted dressing gown with her hair in a net, holding an empty water glass, and she looked at the two of them, and at the teapot, and at the koi bucket, and at the little packet of leaves on the table that was not barley, and she said nothing else whatsoever." },
    { n: "Jungwon was on his feet. She hadn't seen him get up. He bowed, from the waist, all the way." },
    { s: 'jungwon', f: 'flustered', t: "Good evening, Mrs. Bang. Please forgive the intrusion. I was just leaving. The tea was mine. I'll wash the cups." },
    { s: 'mrsbang', t: "You'll do no such thing in my sink. Coat. Door." },
    { n: "He took his coat. He went to the door. At the door he stopped, and turned, and looked back at Solar past Mrs. Bang's shoulder, and the dimples came out, both of them, deep and sweet and completely false, which meant he was being very polite, which meant he was furious with the timing and delighted with everything else." },
    { s: 'jungwon', f: 'happy', t: "Goodnight, Solar-ssi. Thank you for the company. I'll come and lose again soon." },
    { bond: { jungwon: 1 } },
    { n: "The door shut. Mrs. Bang filled her glass at the sink with her back to Solar for a very long time." },
    { s: 'mrsbang', t: "He warmed the pot." },
    { s: 'solar', t: "He did." },
    { s: 'mrsbang', t: "Hm." },
    { n: "She switched off the light on her way out. In the dark the two fish turned once in their bucket, and on the table the second cup was still warm when Solar put her hand round it." }
  ] },

  // ───────────────────────────── 2/26 evening, route family: trot ─────────────────────────────
  { id: 'epi-s-fam-trot', date: '2/26', slot: 'evening', consumes: true, flag: 'epi-route-family', title: 'trot', place: 'Incheon · The Car', time: 'Evening', scene: [
    { music: 'epi-s-family' },
    { n: "Her father wanted the coast road. He said it at dinner to nobody, the way he said things he'd already decided, *I want the coast road tonight*, and by nine Mr. Oh had the black car at the foot of the front steps with the engine running and the heater on, and her father was in the back with his coat buttoned to the neck, and he patted the seat beside him without looking at her, and she got in." },
    { n: "Haechan was in the front passenger seat. He was always in the front passenger seat when her father went out after dark. Nobody had ever explained that to her and nobody needed to." },
    { n: "Mr. Oh drove the way he'd driven since she was seven: hands at ten and two, menthol aftershave filling the car like a cold room, never once braking hard, so that the whole black city slid past the windows as smoothly as if somebody were pulling it on a cloth. Out past the port, past the cranes standing over the fourth quay with their floodlights on, past the last of the warehouses, and then the road bent to the sea and there was nothing on the left but the black water and the lights of fishing boats very far out, small and orange, like somebody had dropped a handful of embers." },
    { n: "Haechan turned on the radio. Of course he did. Trot." },
    { n: "And of course, within half a verse, he was singing along to it. Not quietly. Not badly. Perfectly, his head back against the headrest, every slide and catch and trembling held note exactly where it should be, the old Na Hoon-a song about a hometown station that every man over fifty in Korea had sung at a wedding, sung better than the man on the radio was singing it, and on purpose, the whole thing, to annoy everybody in the car." },
    { s: 'solar', t: "Make him stop." },
    { s: 'mroh', t: "I'm driving." },
    { s: 'solar', t: "Appa. Make him stop." },
    { n: "Her father didn't answer. Her father had his eyes shut and his head tipped back against the seat, and his reading glasses were folded in his breast pocket, and his finger was tapping on his knee in time." },
    { choose: [
      { t: "(Put your hands over your ears.)", then: [
        { n: "She put both hands over her ears, flat, like a child, and stared out of the window at the black sea with an expression of tremendous suffering." },
        { n: "Haechan, in the front seat, without turning round, sang louder." }
      ] },
      { t: "(Lean forward and turn the radio off.)", stat: { courage: 1 }, then: [
        { n: "She leaned between the front seats and turned it off with one decisive click." },
        { n: "Haechan kept singing. Without the radio. Same key. Same verse. He didn't even pause for breath, and from the driver's seat, for the first time in fourteen years of her life, she heard Mr. Oh make a small sound through his nose that might, in another man, have been a laugh." }
      ] },
      { t: "(Know every word. Don't sing any of them.)", stat: { kindness: 1 }, then: [
        { n: "She knew every word. She'd known every word since she was four, from this car, from this seat, from her father humming it on the stairs. She folded her arms and looked out at the sea and moved her mouth on none of them, very carefully, and Haechan's eyes found hers in the rear-view mirror and saw exactly what she wasn't doing, and he grinned round the chorus like a dog with a stolen shoe." }
      ] }
    ] },
    { n: "Then the chorus came round, and her father opened his mouth and joined in." },
    { n: "He had a soft voice. Everyone said so. A voice nobody interrupted, a voice that made men at long tables stop chewing. She'd heard it give orders and she'd heard it say *Sol-ah* on the stairs at four in the morning and she had never once, not in her whole life, heard it sing in front of anybody but her mother." },
    { n: "He sang the chorus with his eyes shut, low, a little flat, under Haechan's perfect tenor, the two of them, the old man and the dog, filling Mr. Oh's car with a song about a man coming home to a station where nobody is waiting, and Mr. Oh kept his hands at ten and two and his eyes on the road and did not brake, and the boats burned on the black water, and Solar sat with her arms folded and her face to the window so none of them would see it." },
    { n: "She hated it. She made very sure she looked like she hated it. Her throat hurt." },
    { n: "The song ended. The radio, if it was on, went on to something else. Haechan, in the front seat, went quiet, the good quiet, and slid down a little against the window, and chewed his gum, and let them have the back of the car." },
    { n: "Her father opened his eyes. He looked out of his own window for a while at the sea going by. The coast road ran along the top of the seawall here, and below it, on the left, the water had gone a long way out, and the mud was shining under the moon, two nights past full, and it went on shining all the way to the horizon." },
    { s: 'appa', t: "Sol-ah." },
    { s: 'solar', t: "Mm." },
    { s: 'appa', t: "When you were—" },
    { n: "He stopped." },
    { n: "She waited. She knew how to wait for him. She'd been waiting for him on stairs and in doorways and outside his study her whole life, and she knew the difference between him pausing and him stopping, and she sat very still and didn't breathe and waited to find out which one this was." },
    { n: "His hand moved on the seat between them. It came to rest on top of hers. Big, dry, warm, the knuckles thick, a hand that had held this whole city by the back of the neck for thirty years and held hers now as if it might come apart if he squeezed." },
    { s: 'appa', t: "...The tide's out." },
    { s: 'solar', t: "Since nine-forty. It'll turn at four." },
    { s: 'appa', t: "Good." },
    { n: "That was all. That was all he said, all the way back along the coast road and through the port and up the hill, and he didn't take his hand off hers once, and in the front seat Haechan didn't turn round once, and Mr. Oh didn't brake once, and she didn't ask him what it was that he'd almost said, because she was her father's daughter, and in this family you didn't ask the thing. You sat beside it in the dark, with your hand under its hand, and you let it decide." },
    { n: "At the foot of the front steps Mr. Oh put the car in park and looked at the two of them in the mirror." },
    { s: 'mroh', t: "Home now." }
  ] },

  // ───────────────────────────── 2/27 daytime: the hammer ─────────────────────────────
  { id: 'epi-s-gun', date: '2/27', slot: 'after', consumes: true, title: 'the hammer', place: 'Incheon · Fish Market', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { n: "Wednesday at the fish market was ice. Ice shoveled out of the backs of the trucks in gray drifts and trodden into a slush that got into everybody's boots by ten, ice in the long steel trays where the flounder lay in rows with both their eyes on one side, looking up at the bulbs, and ice in the air itself, because the big dock doors at the seaward end of the shed were rolled all the way up and the wind came straight in off the water and went down the aisles as if it were looking for somebody." },
    { n: "Mrs. Bang wanted flounder for Sunday. She'd brought Solar because Solar could tell a one-day fish from a three-day fish faster than any man on the pier, and nobody in Mrs. Bang's acquaintance needed to know where she'd learned that. She'd brought Pyo to carry. Haechan had driven them, because Haechan had driven everybody everywhere this week, and nobody had asked him to, and nobody had asked him why." },
    { n: "He was leaning on a pillar by the eel tanks with a fish-cake skewer in one hand and a paper cup of the broth in the other, watching the eels the way other men watch a baseball game, and every so often he looked up, not at anything, just round, the whole shed, once, and then back at the eels." },
    { s: 'mrsbang', t: "This one's been dead since Monday." },
    { n: "Mrs. Bang said it in the voice she kept for soft mackerel, low and grieved, as if the fish had died personally to spite her. The flounder woman behind the tray, a broad woman in a rubber apron with her sleeves rolled to the elbow in the cold, said it had been swimming this morning and she'd swear it on her mother. Mrs. Bang said she'd met her mother." },
    { n: "Solar picked the flounder up by the tail and looked at its eyes and its gills and put it back. Monday. Sunday night at the latest. She put her finger on the one beside it instead, and Mrs. Bang, without looking, nodded, and the flounder woman threw up her hands." },
    { s: 'pyo', t: "Agasshi. Agasshi, that one moved." },
    { n: "Pyo had the crate in both arms, a cheap white polystyrene box already half full of Mrs. Bang's morning, and he was staring at the eel tank behind Haechan with the expression of a boy who had never once, in nineteen years, trusted anything that lived in water." },
    { s: 'haechan', f: 'happy', t: "They all move, Pyo. That's how you know they're fresh." },
    { s: 'pyo', t: "I don't like it when they move." },
    { n: "At the far end of the shed, by the dock doors, where the squid came off the boats in blue plastic boxes stacked as high as a man, Jungwon was standing beside a man with a clipboard, signing something with his right hand, the dark coat buttoned to the collar and the wind off the water not lifting a single hair on his head. He looked up. He found her across forty meters of slush and bulbs and shouting men, and bowed, a small one, exactly the depth that two houses who'd been at each other's throats for twenty years and were allies now owed each other in public. Then he went back to the clipboard." },
    { s: 'haechan', f: 'neutral', t: "The heir's buying squid." },
    { s: 'solar', t: "Legitimate squid." },
    { n: "Haechan snorted into his broth so hard he had to put the cup down." },
    { s: 'haechan', f: 'happy', t: "Is that his joke?" },
    { s: 'solar', t: "It's his cook's. He just repeats it when he thinks nobody's listening." },
    { n: "That was the last ordinary thing anybody said." },
    { n: "She was counting. She was always counting. It was a habit older than she was tall: exits, cups, men. Two exits at this end, the side door and the loading ramp; the dock doors at the other. Eleven men in the aisle between her and the dock doors, nine in boots and aprons and two in the padded jackets of the truck drivers, smoking under the no-smoking sign. Twelve. She counted again. Twelve." },
    { n: "The twelfth man was wrong." },
    { n: "It took her a second to understand why, and then it was everything at once. Sneakers, on a floor of slush, white sneakers, soaked. A gray work jacket with nothing on it, no scales, no blood, no ice, a jacket that had never been near a fish in its life. Hands in his pockets. Walking against the current of the aisle, slowly, not looking at the trays, not looking at the prices, the only man in the whole shed not looking at a single fish." },
    { n: "She didn't know his face. That was the worst of it, afterwards. She knew every face from both houses, every man her father had ever paid and every man the Yangs had, and his was nobody's. A man from outside the two houses. A face like a closed door." },
    { music: 'epi-s-danger' },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "He stopped four meters from the eel tanks. From the pillar. From Haechan." },
      { n: "Haechan had seen him already. Of course he had. He'd seen him on the last of those looks round the shed and had kept his face exactly where it was, on the eels, the broth going cold in his hand, and he didn't move now, either, when the man took his right hand out of his pocket." },
      { n: "A pistol. Old, black, square, the kind with the hammer outside, the kind men's grandfathers brought home from somewhere and kept wrapped in a cloth. The man held it out at the end of a straight arm, pointed at the middle of Haechan's chest, and his thumb went over and pulled the hammer back with a small, oiled, ordinary click." },
      { n: "Haechan went quiet." },
      { n: "He'd been quiet already. This was the other quiet. The one she'd only seen in him a handful of times in her life, when something in him was so afraid it had stopped making any noise at all. He didn't look at the gun. His eyes went past it, past the man, sideways, fast, to her, to where she was standing by the flounder tray, to the line that ran from the end of that barrel through his chest and out of his back and on, to check that she wasn't on it." },
      { n: "She wasn't. He'd made sure of that before he ever leaned on the pillar. She understood that then, all at once, standing by the flounder with her finger still on its cold side. He'd chosen the pillar so she'd never be behind him." }
    ], else: [
      { n: "He walked past her. Past the flounder, past the eels, past Haechan on his pillar, all the way down the aisle in his wet white sneakers to the dock doors at the end, where the squid boxes were stacked, where the man with the clipboard was holding it out for another signature." },
      { n: "He stopped four meters from Jungwon." },
      { n: "Jungwon had seen him. Of course he had. He'd seen him at forty meters and counted him as she had and finished signing his name anyway, every stroke of it, and handed the clipboard back, and turned." },
      { n: "A pistol. Old, black, square, the kind with the hammer outside, the kind men's grandfathers brought home from somewhere and kept wrapped in a cloth. The man held it out at the end of a straight arm, pointed at the middle of Jungwon's dark coat, and his thumb went over and pulled the hammer back with a small, oiled, ordinary click." },
      { n: "Jungwon's face did nothing. The dimples went. That was all. He stood with his right hand at his side in front of the squid boxes in the wind, polite, attentive, as if a man had come up to him at a party with a question, and he didn't step back, and he didn't look at the gun. He looked past the man, down the whole length of the shed, once, to her, to be sure where she was." },
      { n: "Then he looked at the man, very courteously, and waited." }
    ] },
    { n: "Nobody in the market had noticed yet. That was the strangest thing. The flounder woman was still complaining. A truck was reversing somewhere outside, beeping. A man was shouting a price for crabs. The whole shed went on being a Wednesday round the four of them, the man and the gun and the boy at the end of it and her, and she couldn't move, and she couldn't make a sound, and she got very, very still, the way she always did, the way her body had always done for her when there was nothing else it could do." },
    { n: "The man's finger closed." },
    { n: "She watched the hammer fall." },
    { glitch: { stage: 2 } },
    { glitch: 'epi-s-g-gun' },
    { n: "And the world went green." },
    { n: "Not a flash. Not the moon over Wolmido, one breath and gone. The Dark Hour came down over the fish market the way the tide comes over the mud, all at once and everywhere, the bulbs gone to a sick bright green, the ice gone green, the slush green, the whole long shed lit from inside like a bottle held up to a lamp, and every sound in it stopped." },
    { n: "Everything stopped." },
    { n: "The crab man's mouth, open on a price. The flounder woman with both hands still in the air. A shovel of ice halfway out of the back of a truck, the ice hanging off the blade in a spray of green glass, each chip of it separate, turning, not falling. A gull that had come in through the dock doors after a dropped fish, hung over the squid boxes with its wings wide and one eye on the floor, motionless, as if it had been pinned there. Pyo with one foot off the ground, mid-step, the crate in his arms, his face caught halfway to a flinch. Mrs. Bang beside her with her hand up to say something, never to say it." },
    { n: "The man with the gun, his arm out straight, his finger white on the trigger, a drop of sweat stopped on the line of his jaw. The hammer down. All the way down. And nothing. Nothing had come out of the end of it. Nothing was coming." },
    { n: "Only three things in the whole green world still moved." },
    { n: "She did. She felt her own breath go in. And at the end of the barrel the boy it was pointed at blinked, slowly, and looked down at the gun, and then up, and found her. And at the other end of the aisle, the other one, who was not frozen either, who had turned his head, who was looking at her too." },
    { n: "The three of them. Looking at each other across a fish market at midnight in the middle of a Wednesday afternoon, with the whole city stopped round them like a held breath." },
    { choose: [
      { t: "(Count.)", stat: { knowledge: 1 }, then: [
        { n: "She counted. She couldn't help it. It was the only thing she had ever had in a room that wouldn't hold still. The frozen men, twelve. The gull, one. The chips of ice in the air over the truck, too many, she stopped. Seconds. She counted seconds, the way she'd counted them every night for a year in a dorm across the water, waiting for the green to end." },
        { n: "One. Two. On three she knew, with absolute certainty, the way she knew where the tide was, that it was going to start again." }
      ] },
      { t: "(Go to him.)", stat: { courage: 1 }, then: [
        { n: "She took a step. The air was thick, green, cold, like walking down the steps into the sea, like the water closing over her shins and her knees, the one thing in the world she had never been able to make her body do, and she did it anyway, one step and then a second, toward him, through the hanging ice." },
        { n: "He saw her coming. His face changed. Not fear, not for himself. He shook his head at her, once, hard, *no*, the way you'd stop a child at the edge of a road." },
        { n: "She took a third step anyway. On the third it started again." }
      ] },
      { t: "(Look at the gun.)", then: [
        { n: "She looked at the gun. She made herself. The black of it, the scratches on the slide, the hammer lying down flat against the back where it had fallen, exactly where it should be, having done exactly what it was supposed to do, onto a round that hadn't gone." },
        { n: "It hadn't misfired. She knew that the way she knew a fish. Something had reached into the one second the round needed and held it, the way the green was holding the ice in the air, and hadn't let it go." }
      ] }
    ] },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "At the end of the aisle, Jungwon had taken one step. Forward. Toward the man. In the green, with everything stopped, he'd taken one step down the aisle toward a gun pointed at a man he had spent years hating, without hurrying, as if he'd decided it a long time ago and had only been waiting for the time to stand still long enough to do it." }
    ], else: [
      { n: "By the eel tanks, Haechan had come off the pillar. One step. Forward. Toward the man's back. In the green, with everything stopped, he'd taken one step down the aisle toward a gun pointed at a man he'd spent years hating, and his face as he did it was the face of somebody who hadn't decided anything at all, whose feet had simply gone." }
    ] },
    { n: "Then it all came back at once." },
    { n: "The bulbs went yellow. The ice came off the shovel and hit the floor of the truck in a long hissing rush. The gull screamed and wheeled and went out through the dock doors. Pyo's foot came down. The crab man finished his price. Mrs. Bang's hand finished going up. The noise of the whole market crashed back into the shed like a wave coming over a wall, and in the middle of it, in the middle of all that ordinary noise, the man stood with his arm out and his finger on the trigger and stared at the gun in his hand." },
    { n: "It hadn't fired." },
    { s: 'man', t: "I pulled it." },
    { n: "He said it to nobody. To the gun. His voice had gone high and thin. He shook it, as if something might fall out of it." },
    { s: 'man', t: "I pulled it. I pulled it. I *pulled* it—" },
    { n: "The flounder woman saw the gun then, and screamed. And then the whole aisle saw it, all at once, the way a whole flock of birds sees a hawk, and it went from a market to a stampede in the space of a breath, men shouting, boxes going over, somebody's ice shovel coming down on the steel edge of a tray with a clang like a bell, and a truck driver in a padded jacket lunging at the man from the side and missing." },
    { n: "The man ran. He went the way he'd come, if he'd come from anywhere, through the dock doors and out along the quay at a dead sprint with the useless gun still in his hand, slipping in his wet white sneakers, and three of the market men went after him as far as the doors and stopped there, shouting after him into the wind, because nobody in Incheon chases a man with a gun, even a gun that doesn't work, past the end of the shed." },
    { n: "Then he was gone. The doors were only doors. The quay was only the quay, and the gray water, and the gull coming back." },
    { n: "Pyo had dropped the crate. Mrs. Bang's flounder lay on the wet concrete among the spilled ice, slapping its tail, very much alive, a full day fresher than the flounder woman had promised it was." },
    { s: 'mrsbang', t: "Aigoo. Aigoo, aigoo, aigoo—" },
    { n: "Mrs. Bang had Solar's face in both her hands. She was turning it from side to side as if checking it for cracks, her own face gone the color of the slush, and Solar let her, and stood very still, and didn't shake. She wouldn't, not here. Later. Alone. With the door shut. She knew her body that well, at least." },
    { s: 'fisherman', t: "Jammed. Cheap thing. Chinese junk, they all jam, I've seen it, my cousin had one—" },
    { s: 'fisherman', t: "It didn't jam. I was looking right at it. I saw the hammer go." },
    { s: 'fisherman', t: "Then it jammed after the hammer went. Hyung, it *jammed*." },
    { n: "That was going to be the story. She could hear it settling already, round the tanks and the trays and the trucks, being passed from stall to stall, getting the cousin and the Chinese junk added to it as it went, so that by tonight it would be all over the harbor and by the end of the week nobody in the market would remember that they hadn't understood it. A man with a gun at the fish market. It jammed. Lucky." },
    { n: "Only three people in the whole shed knew it hadn't." },
    { n: "Haechan was beside her. She hadn't seen him cross the aisle. His hand was on the back of her collar, the way it had been on the quay a week ago, two fingers hooked into it, holding on, as if she might go over an edge that wasn't there. He was still quiet. His jaw was moving on nothing. The gum was gone; he'd swallowed it, or spat it, she didn't know." },
    { n: "Jungwon walked the length of the shed. He didn't run. He walked the whole forty meters down the middle of the wrecked aisle through the shouting and the spilled ice, with the dark coat buttoned and his right hand at his side, at an even, ordinary, unhurried pace, and only when he got to them did she see that he was so white his lips had gone gray." },
    { n: "He bowed to Mrs. Bang. He actually bowed." },
    { s: 'jungwon', f: 'serious', t: "Mrs. Bang. Are you hurt." },
    { s: 'mrsbang', t: "Me? Me? Aigoo. Look at this one. Look at her." },
    { s: 'jungwon', f: 'serious', t: "Solar-ssi. Are you hurt." },
    { s: 'solar', t: "No." },
    { n: "He looked at Haechan then. Haechan looked at him. Over her head, over Mrs. Bang's hands still holding her face, two men who had never once in their lives been on the same side of anything stood a meter apart in a fish market and looked at each other, and she saw it go between them, plain as a rope thrown across a gap." },
    { s: 'haechan', f: 'serious', t: "Green." },
    { s: 'jungwon', f: 'serious', t: "Yes." },
    { s: 'haechan', f: 'serious', t: "Tonight. The step." },
    { s: 'jungwon', f: 'neutral', t: "Tonight." },
    { n: "Mrs. Bang let go of her face at last. She took a long breath, the kind of breath she took before beating a rug, and looked down at the flounder on the floor, still slapping, and at Pyo, still white, and at the flounder woman behind her tray with her hand over her heart." },
    { s: 'mrsbang', t: "We'll take that one. And that one. Pyo. Pick up the box." },
    { n: "Because Sunday was still Sunday, in that house. Because a man could point a gun across a fish market on a Wednesday and the flounder still had to be bought. Solar picked her flounder up off the floor by the tail and laid it back in the crate in Pyo's shaking arms, and it went still under her hand, and she stood there with her palm flat on its cold side for a moment longer than she needed to, and counted. Twelve men. Two exits. Three people who'd seen." },
    { flag: 'epi-s-gun' }
  ] },

  // ───────────────────────────── 2/27 late: even ─────────────────────────────
  { id: 'epi-s-even', date: '2/27', slot: 'late', title: 'even', place: 'Incheon · The Lee House · Annex', time: 'Late Night', scene: [
    { music: 'epi-s-step' },
    { n: "The step at the bottom of the garden was one slab of old granite, worn hollow in the middle, outside a steel door, and the three of them had never once all fitted on it at the same time. Tonight they didn't try." },
    { n: "Haechan sat on it, in the hollow, where he always sat, in the black jacket with the collar up, with the old silver radio murmuring on the sill behind his head and a can of something from the vending machine going cold in his fist. Jungwon stood. He'd come through the side gate at eleven in the dark coat, and Minseok had let him in without being asked, because the Chairman had said so at dinner, and he'd walked down the garden in the frost and stopped a meter and a half from the step and stayed there, very straight, as if the meter and a half had been agreed on in writing." },
    { n: "Solar had come down last, in her coat over her pajamas, with her hair down, because it was after midnight and the house was asleep and there was nobody left to be undone in front of except these two, who had seen her undone in two worlds now. She sat on the upturned crate beside the koi bucket. Somebody had put it there for her. She didn't ask which of them." },
    { n: "The frost was thick on the grass. Up the garden the house was dark except the kitchen, where Mrs. Bang had left the light over the stove, the way she did. The tide was going out. She could feel it in her teeth." },
    { n: "Nobody said anything for a long time. The radio played a woman singing something slow and old." },
    { s: 'haechan', f: 'neutral', t: "So." },
    { n: "That was all. He said it to the can." },
    { s: 'jungwon', f: 'neutral', t: "So." },
    { s: 'solar', t: "If either of you says *so* again I'm going back to bed." },
    { n: "Haechan laughed. Not much. Once, down his nose. He turned the can round in his hand and looked at it as if there were something written on it." },
    { s: 'haechan', f: 'serious', t: "It stopped. Everything. The ice. That bird." },
    { s: 'jungwon', f: 'serious', t: "And the round." },
    { s: 'haechan', f: 'serious', t: "And the round." },
    { n: "There. It was out. It sat in the frost between the three of them, the thing they'd all three stood inside at a quarter past two that afternoon, and nobody tried to make it smaller." },
    { s: 'jungwon', f: 'serious', t: "It's the same as over there. The green. The time that isn't time. Everything stopping, except—" },
    { s: 'haechan', f: 'serious', t: "Except us." },
    { s: 'jungwon', f: 'neutral', t: "Except us." },
    { s: 'haechan', f: 'neutral', t: "Don't say *us*. I keep telling you." },
    { s: 'jungwon', f: 'neutral', t: "You said it first. Just now. I'm only agreeing with you, Donghyuck. I know how rarely that happens. I'm trying to enjoy it." },
    { n: "They both looked at her then, the way they'd looked at her on Wolmido, from either side. She'd known they would. She'd been holding it since the market, all afternoon, through Mrs. Bang's soup and her father's long look at dinner and the bath she'd sat in until the water went cold, and she let it out now, carefully, the way you let out a line." },
    { s: 'solar', t: "It's following me." },
    { n: "Nobody told her it wasn't. She was grateful for that. She'd have known." },
    { s: 'solar', t: "The bell on the radio. The tea. The tide being wrong. The moon. Today." },
    { s: 'solar', t: "It's getting closer. And it's getting louder. And today it put its hand out and stopped a bullet, and I don't know if that was for us or because it wanted something to still be standing there when it comes back." },
    { n: "Haechan put the can down on the step. Very carefully, so it wouldn't make a sound." },
    { n: "Jungwon touched his watch." },
    { choose: [
      { t: "And I don't know what it wants. Not yet.", stat: { knowledge: 1 }, then: [
        { n: "She said it plainly, the way she'd say a tide time, because it was the truth and she'd promised both of them, in her own way, a long time ago now, that she would only ever give them the truth." },
        { s: 'jungwon', f: 'serious', t: "Then we'll find out. Before it does whatever it wants." },
        { s: 'haechan', f: 'serious', t: "And if it wants her, it can get in line." }
      ] },
      { t: "I'm scared.", stat: { courage: 1 }, then: [
        { n: "It came out very small, in the frost. She hadn't said it aloud to anyone since the year. She didn't know why it was now, except that the two of them were the only two people in Incheon she'd never once been able to lie to with her face." },
        { n: "Haechan didn't make a joke. That was how she knew he'd heard it properly." },
        { s: 'haechan', f: 'serious', t: "Yeah. Me too, agasshi." },
        { s: 'jungwon', f: 'serious', t: "And I." }
      ] },
      { t: "(Say nothing. Pull the coat tighter. Wait for one of them.)", then: [
        { n: "She pulled her coat round her knees and looked at the koi going round in their bucket and didn't say anything else at all, and let the frost do it, and the radio, and the tide." },
        { n: "It was Jungwon who moved first. It was always going to be. He was the one who couldn't bear a silence he hadn't arranged." }
      ] }
    ] },
    { s: 'jungwon', f: 'neutral', t: "Midnight." },
    { s: 'haechan', f: 'neutral', t: "What about it." },
    { s: 'jungwon', f: 'neutral', t: "It comes at midnight. It came at midnight over there, every night, and it's coming here at midnight now, mostly, except when it doesn't, like today. So somebody watches at midnight. Every night. Under her window." },
    { s: 'jungwon', f: 'neutral', t: "Midnight to four. Odd nights and even. You take the step. I'll take the gate. If anything turns green, the one on watch goes up. The other one gets a phone call. Not on the house line." },
    { n: "Haechan looked at him for a long time." },
    { s: 'haechan', f: 'neutral', t: "You're making a rota." },
    { s: 'jungwon', f: 'neutral', t: "I'm making a rota." },
    { s: 'haechan', f: 'neutral', t: "For guarding my— for guarding the agasshi. You're making a rota for me. Like I'm one of your runners." },
    { s: 'jungwon', f: 'happy', t: "I'm making a rota for both of us. I've put myself on it too, you'll notice. I've given you the step because you'd sit on it anyway and I'd rather it was on paper. Would you prefer to argue about the hours, Donghyuck, or shall we just pretend you argued and I gave in." },
    { n: "The dimples. Both. Very polite." },
    { n: "Haechan opened his mouth. Shut it. Looked up the garden at her dark window, two floors up, and at the kitchen light under it, and back at Jungwon." },
    { s: 'haechan', f: 'neutral', t: "The kitchen door's on the latch at night. Mrs. Bang leaves it for me. Don't make me regret telling you that." },
    { n: "That was yes. All three of them knew it." },
    { s: 'solar', t: "I'll take a shift too." },
    { s: 'haechan', f: 'serious', t: "No." },
    { s: 'jungwon', f: 'serious', t: "No." },
    { n: "They said it at exactly the same moment, in exactly the same flat voice, and then looked at each other with an expression of real horror, and she laughed out loud in the frozen garden, the first real laugh since the moon, and had to put her hand over her mouth so the house wouldn't hear." },
    { s: 'solar', t: "That's the only thing you two have ever agreed on." },
    { s: 'haechan', f: 'neutral', t: "Don't tell anyone." },
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "Haechan picked the can back up and turned it round once in his fingers and didn't drink from it. He was looking at Jungwon. Not at his face. At his feet, in their good shoes, on the frost." },
      { s: 'haechan', f: 'serious', t: "You took a step. In the green. Toward him." },
      { s: 'jungwon', f: 'neutral', t: "Did I." },
      { s: 'haechan', f: 'serious', t: "You took a step toward a man pointing a gun at me, Yang. I saw you." },
      { n: "Jungwon didn't answer that. He touched his watch." },
      { s: 'haechan', f: 'neutral', t: "We're even." },
      { s: 'jungwon', f: 'neutral', t: "We're not." },
      { n: "He said it very quietly. Not polite. Just quiet. And Haechan, who never let anybody have the last word in his life, let him have it." },
      { s: 'haechan', f: 'neutral', t: "Thursday's mine, then. Tomorrow. I'll take it." }
    ], else: [
      { n: "Jungwon was looking at Haechan. Not at his face. At his boots, on the step, where they'd been all evening, heels dug into the frost." },
      { s: 'jungwon', f: 'serious', t: "You came off the pillar. In the green. Toward his back." },
      { s: 'haechan', f: 'neutral', t: "Did I." },
      { s: 'jungwon', f: 'serious', t: "You came off the pillar toward a man pointing a gun at me, Donghyuck. I saw you." },
      { n: "Haechan didn't answer that. He turned the can round in his hand and looked at it." },
      { s: 'haechan', f: 'neutral', t: "We're even." },
      { s: 'jungwon', f: 'neutral', t: "We're not." },
      { n: "He said it very quietly. Not polite. Just quiet. And Haechan, who never let anybody have the last word in his life, let him have it." },
      { s: 'jungwon', f: 'neutral', t: "Thursday's mine. Tomorrow. I'll be at the gate at a quarter to twelve." }
    ] },
    { glitch: { near: true } },
    { n: "Then neither of them said anything at all. Haechan on the step with his can. Jungwon standing in the frost with two fingers on his watch. The radio on the sill went on to the shipping forecast, the old man's voice reading the sea areas one by one, and both of them sat there in it, silent, the way two men sit on either side of a bed in a hospital, not looking at each other, keeping exactly the same watch." },
    { n: "She looked from one of them to the other. She didn't know a word in either language for what they were. They weren't friends. They'd never be friends. She'd have bet her grandmother's ring on that." },
    { n: "She went up the garden at half past one. She felt them both watch her go, all the way, until the kitchen door shut behind her." },
    { n: "At the top of the garden, through the glass, she saw Jungwon turn to go. He stopped beside the step, by Haechan's shoulder, and said something, low, two syllables, that she couldn't hear but could read off his mouth as clearly as print." },
    { s: 'jungwon', f: 'neutral', t: "Goodnight, hyung." },
    { n: "Haechan went completely still on the step. He didn't look up. He didn't answer. Jungwon didn't wait for him to. He walked up the side of the garden in the frost to the gate, and the gate shut, and Haechan sat on alone under the radio with the can in his hand, looking at nothing, for a long time." },
    { ifEpiRoute: 'haechan', then: [ { bond: { haechan: 1 } } ] },
    { ifEpiRoute: 'jungwon', then: [ { bond: { jungwon: 1 } } ] },
    { flag: 'epi-s-alliance' }
  ] },

  // ───────────────────────────── 2/28 late: alone (fight 1) ─────────────────────────────
  { id: 'epi-s-alone', date: '2/28', slot: 'late', title: 'alone', place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-s-half' },
    { n: "She couldn't sleep. The tide was going out, the long ebb before a neap, and she lay on her back in the dark in the boat pajamas with her hair spread across the pillow and felt it go, the whole bay emptying under the house like a breath let out slowly through the teeth, and at a quarter to twelve she gave up and got out of bed." },
    { n: "The floor was warm. The window was cold. She stood at it in her socks with her arms wrapped round herself and looked down the dark garden to the annex at the bottom, where the light was off, and the step." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "And up by the gate, in the small hard circle of frost under the gate lamp, a figure in a dark coat, standing very straight, not leaning on anything, lifting one wrist to look at a watch. Thursday. His." }
    ], else: [
      { n: "And on the step, a shape. Black jacket, collar up, sitting in the hollow of the granite with his elbows on his knees and the silver radio on the sill behind him not playing. Chewing, no cigarette. Thursday. His." }
    ] },
    { n: "She put her palm flat on the glass. It was so cold it hurt." },
    { n: "The clock on her nightstand said 11:59." },
    { glitch: { stage: 3 } },
    { glitch: 'epi-s-g-alone' },
    { place: 'Incheon · Harbor at Midnight', time: 'Midnight' },
    { dark: true },
    { n: "She was standing on the harbor." },
    { n: "Socks. Boat pajamas. The concrete of the quay under her feet, gritty and freezing, and the cranes standing over her against a sky gone the color of the inside of a bottle, and the moon, the moon, too big, so big it took up a quarter of the sky, hung low over the outer harbor like somebody had reeled it in on a line to get a better look at her." },
    { n: "The bollards weren't bollards. All along the edge of the quay, where the iron mooring posts had stood since before she was born, there were coffins, upright, black, taller than a man, patient, one every ten meters as far as she could see in both directions, the way the bollards had always stood, waiting for ships." },
    { n: "And the water." },
    { n: "The water was still. Not calm. Still. The whole black harbor lay flat to the horizon like a sheet of glass somebody had poured and let set, not a ripple on it, not a wave at the foot of the quay, not a sound, the sea that had never once in her life been quiet stopped dead in the middle of an ebb with the mud half bare and the water standing up the steps in a clean black line where it had been when the clock struck." },
    { n: "She was two meters from the edge." },
    { n: "Her whole body knew it before she did. Two meters from deep water, at night, in the green, with nobody. Not on a step. Not with a hand on her collar. Not with anybody's hand. Her heart went so hard she could feel it in her teeth, and she stood absolutely still, stiller than she had ever stood, the way her body had always done for her when it had nothing else to give." },
    { n: "Past the end of the quay, where the fourth quay's lights should have been, the concrete kept going. Out over the water. A long straight road of black and gold tile laid on nothing, running out across the still sea toward the moon, and at the far end of it the light was the particular wrong gold she knew the way she knew her own handwriting." },
    { n: "Tartarus. Coming up through Incheon harbor like a crane through fog." },
    { n: "Something came off the black tile and onto the quay. Low and wide and wet, a shape the color of the mud, dragging itself along the edge between the coffins on too many hands, and it smelled like the harbor smelled on the worst nights of August, salt and rot and diesel, and it turned toward her." },
    { n: "Her right hand closed on nothing. Then it closed on something. The long smooth haft of it, cold, exactly the right weight, the blade end tipping back over her shoulder, and she didn't look at it, because if she looked at it she would have to know what it meant that it had come here, all the way here, to her father's harbor, to find her." },
    { n: "Haenim." },
    { n: "She called it the way she'd have called a name on a dark stair to prove she wasn't alone on it, and something answered, far away, under the water, fizzing, coming apart in her mouth like a radio between stations, *Hae-, Haen-, H—*, the name breaking up and breaking up and never quite finishing. And the light came anyway. Not all of it. Enough to stand in." },
    { n: "She stood in it. Alone. On the edge of the deep water. With nobody." },
    { battle: { id: 'epi-strangers-1', kind: 'scripted', script: 'epi-strangers-1', title: 'Alone', forced: true, desc: 'The harbor at midnight, half turned into Tartarus. Solar, by herself.', notes: 'Half-present fight 1 (FEMC-EPILOGUE-PLAN 2.4): solo, no escape, Haenim answers but her name glitches. After a few rounds or a hard hit she is pulled back mid-fight (interrupt, turn 4, half HP). Cannot be lost: an empty HP bar fades her home instead.' } },
    { dark: false },
    { place: 'Incheon · The Lee House · Her Room', time: 'Late Night', soft: true },
    { n: "Then she was on her bedroom floor." },
    { n: "On her knees on the warm boards between the bed and the window, breathing as if she'd run up every stair in the house, her palms flat on the floor and her hair stuck to her face and her neck. Nothing in her hands. The lamp off. The window above her black, ordinary, with frost growing in from the corners." },
    { n: "The clock on her nightstand said 12:01." },
    { n: "It had said 11:59. She knew it had. Two minutes. She'd been gone two minutes, and she'd fought something on the edge of the sea for what had felt like an hour, and her legs were shaking now, both of them, all the way up, the shaking that never came while it was happening and always came after." },
    { n: "There was a blister across her right palm." },
    { n: "Long and raised and angry, already filling, running straight across the base of her fingers exactly where the haft of a naginata sits when you've been holding it too hard for too long. She knew that blister. She'd had one every week for a year. She hadn't had one since the night she came home." },
    { n: "She held her hand up in the dark and looked at it and didn't let herself think anything at all." },
    { n: "Feet on the stairs. Fast. Then not fast, careful, the stairs taken two at a time but softly, and a skip, one stair stepped over entirely." },
    { n: "The seventh. Whoever it was knew about the seventh." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "He didn't knock. He opened the door with his right hand and stood in it, in the dark coat, breathing harder than she had ever heard him breathe, his face so white in the dark it was nearly the only thing she could see, and he looked at her on the floor and didn't come in. Not yet. As if he needed permission to be in the room. As if, for once, he couldn't work out the correct form." },
      { s: 'jungwon', f: 'serious', t: "Your window went green." },
      { n: "He said it in Korean. With every ending on it." },
      { s: 'jungwon', f: 'serious', t: "From the gate. The whole window. For two minutes. I was at the kitchen door before the first one was over, and it was on the latch, and it still took me fifty-one seconds." },
      { n: "Fifty-one. Of course he'd counted. She almost laughed. Her legs were shaking too hard." },
      { choose: [
        { t: "I was at the harbor. Alone. It was the harbor, Jungwon.", stat: { courage: 1 }, then: [
          { n: "He came in then. He shut the door behind him, very softly, and crossed the room and knelt down on the floor in front of her in the dark coat on her warm boards, and took her right wrist in his right hand, carefully, and turned it over, and looked at the blister." },
          { s: 'jungwon', f: 'serious', t: "*Alone.*" },
          { s: 'solar', t: "*Alone.*" },
          { n: "He didn't say anything else. He didn't let go of her wrist. He stayed kneeling there, holding it, his thumb not quite touching the edge of the blister, until her legs stopped." }
        ] },
        { t: "(Hold up the hand. Let him see.)", then: [
          { n: "She held it up. She couldn't do anything else. The palm toward him, the blister across it, in the light from the hall." },
          { n: "He looked at it for a long time. Then he came in and shut the door and knelt down beside her on the floor and put his right hand under hers, palm to the back of her hand, and held it up between them, the two of their hands, as if it were something he'd been handed to keep, and didn't say anything at all." }
        ] }
      ] }
    ], else: [
      { n: "He didn't knock. He came through the door with his shoulder, the way he came through the annex door, and stopped dead in it, in the black jacket, his chest going, cold coming off him from the garden in a sheet, and he looked at her on the floor and his whole face went still. Not the grin. Not the joke. Nothing." },
      { n: "Quiet. The real one." },
      { s: 'haechan', f: 'serious', t: "Your window went green." },
      { s: 'haechan', f: 'serious', t: "From the step. The whole thing. Like a fish tank. I was in the kitchen before it went out and I still—" },
      { n: "He stopped. He didn't finish. He came across the room and went down on his knees on the floor in front of her, hard, and didn't touch her, not yet, his split hands open in the air between them as if he didn't know which part of her it was safe to hold." },
      { s: 'haechan', f: 'serious', t: "Solar." },
      { n: "Her name. Not *agasshi*. The tell, spent, on her bedroom floor at one minute past midnight." },
      { choose: [
        { t: "I was at the harbor. Alone. Donghyuck-ah, it was the harbor.", stat: { courage: 1 }, then: [
          { n: "His hands came down then. Both of them, on her face, on either side of it, his thumbs under her eyes, the way Mrs. Bang had held it at the market, checking it for cracks." },
          { s: 'haechan', f: 'serious', t: "Alone." },
          { s: 'solar', t: "Alone." },
          { n: "He pulled her in by the back of the head and held her there against his jacket, against the cold coming off it, and didn't say anything else. She felt him breathing. She felt him not saying a single word for a very long time, which was the loudest thing she had ever heard him do." }
        ] },
        { t: "(Hold up the hand. Let him see.)", then: [
          { n: "She held it up. Palm out. The blister across it." },
          { n: "He looked at it. He took her wrist, gently, in his split fingers, and turned her hand to the light from the hall, and looked at it for a long time. Then he bent his head and put his forehead down on the back of her hand, and kept it there, and didn't say anything at all." }
        ] }
      ] }
    ] },
    { n: "Down the hall, behind the other bedroom door, Yunjin's light was on. It always was. It stayed on." },
    { n: "Out past the garden wall, under the house, the tide had started running again, out, the long ebb, the sea that couldn't stand still for anybody going on doing what it had always done. She could feel it in her teeth. She had never in her life been so glad to feel it." },
    { flag: 'epi-s-alone' }
  ] },

  // ───────────────────────────── 3/1 daytime: a holiday ─────────────────────────────
  { id: 'epi-s-seo', date: '3/1', slot: 'after', consumes: true, title: 'a holiday', place: 'Incheon · The Lee House · Garden', time: 'Daytime', scene: [
    { music: 'epi-s-cover' },
    { n: "Independence Movement Day came in cold and bright, a hard blue sky over the harbor and a wind that snapped the flags. Every gate on the hill had one out: the taegukgi on its pole in its bracket on the gatepost, red and blue, the four black trigrams, the whole street lined with them like a parade waiting for a parade. Minseok had put theirs out at seven. Her father had come down and looked at it and straightened it by two centimeters with his own hands and gone back in." },
    { n: "The city was on holiday. The cranes on the fourth quay stood still. In the kitchen the little television on top of the fridge was showing the ceremony from Seoul, old men in dark coats, the bell, the long rolling cry of *manse* going up from the crowd three times, and Auntie Song had turned the sound down to nothing and was making dumplings anyway, because it wasn't Sunday but she'd decided it felt like one." },
    { n: "Solar had come out onto the back step to get away from the television. She was sitting on the cold stone with her coat round her and the koi bucket beside her, her right hand wrapped in a strip of white gauze from her own kit, watching Mr. and Mrs. Kim go round, when the garden gate clicked." },
    { n: "Inspector Seo came down the side of the house as if she'd been invited, which she had not." },
    { n: "Cheap gray parka. Canvas bag over one shoulder, the strap gone shiny. Iron-gray hair cut short with the gray coming in at the temples. And in her hand, on the first of March, in a wind that could take the skin off your face, a tall plastic cup of iced coffee from the convenience store at the bottom of the hill, the ice rattling in it." },
    { s: 'seo', t: "Solar-ssi. Happy Independence Day." },
    { n: "She didn't wait to be asked. She lowered herself onto the other end of the back step, on the far side of the koi bucket, the way a woman sits down on a park bench beside someone she doesn't know, and set the coffee down on the stone between her boots, and looked at the fish." },
    { s: 'seo', t: "These are new." },
    { s: 'solar', t: "They're a friend's." },
    { s: 'seo', t: "Hm." },
    { n: "Up at the top of the step, in the kitchen doorway behind them, Mrs. Bang appeared, took one look at who was on her back step, and disappeared. A moment later she reappeared with the long runner rug from the hall over her arm and the bamboo beater in her other hand, and marched past both of them without a word, down the garden to the washing line, and threw the rug over it." },
    { n: "The first blow went off like a rifle shot. Seo didn't even turn her head." },
    { s: 'seo', t: "I heard you were sick. Over Seollal." },
    { n: "And there it was, held out to her across a bucket of fish on a holiday, the way it had been held out by her aunt, and the girls on Wolmido, and her mother. The cover. Warm and ready, in her own voice." },
    { s: 'solar', t: "Thirty-nine point four. I couldn't keep rice down. I missed the whole thing. I couldn't even come down for the bows." },
    { glitch: { strain: 1 } },
    { n: "The wire at the back of her head went tight. Thin and cold, pulled from the other end, harder than it had been on Wolmido. She kept her face exactly where it was." },
    { s: 'seo', t: "My daughter ran thirty-nine once. When she was small. I sat up all night with a bowl of water and a cloth, and every time I put the cloth on she took it off and threw it at me." },
    { n: "Seo picked up her coffee and drank, and fished a piece of ice out of the cup with her fingers, and put it in her mouth and crunched it, slowly, looking at the koi." },
    { s: 'seo', t: "It's the only thing in it I trust. The ice. You know where you are with ice." },
    { n: "*Crack*, went Mrs. Bang's beater on the rug." },
    { s: 'seo', t: "You look better. Thinner. Your hand." },
    { s: 'solar', t: "Piano. I practiced too long. It's nothing." },
    { s: 'seo', t: "Hm." },
    { n: "She crunched the ice. She was in no hurry. She had never once, in all the years Solar had watched her stand at the backs of funerals in that same gray parka, been in a hurry about anything, and that was what made her so frightening. She didn't push. She waited. She was patient the way weather is patient, the way the tide is, and she was kind with it, tired and kind, as if she were sorry in advance for whatever it was she'd find, and that was worse than any suspicion Solar had ever been looked at with." },
    { s: 'seo', t: "There's a story going round the fish market. Did you hear it? A man with a pistol, Wednesday afternoon, right there in the middle of the shed. Pointed it at somebody. Pulled the trigger." },
    { s: 'seo', t: "And nothing. *Click*. The whole market's telling it. They say he stood there and swore at it, he pulled it, he pulled it, it should've gone, and then he ran." },
    { n: "*Crack*, went the rug. *Crack. Crack.*" },
    { s: 'seo', t: "I heard you were there. With your housekeeper." },
    { n: "She didn't say anything else. She didn't put the two things next to each other. She just set them down on the step, the fever and the gun, one on either side of the koi bucket, and crunched her ice, and let them sit there in the cold together, and waited to see which way Solar would look." },
    { choose: [
      { t: "I didn't see much. Mrs. Bang made me look at flounder.", then: [
        { n: "It came out light, a little bored, a rich girl's account of an errand she hadn't wanted to go on, and she even made a face at the end of it, at the flounder." },
        { glitch: { strain: 1 } },
        { n: "The wire went tighter. It sang." },
        { s: 'seo', t: "Hm. Flounder. Was it good?" },
        { s: 'solar', t: "It's for Sunday." }
      ] },
      { t: "If guns in this city have started not going off, Inspector, I'd call that good news.", needs: { charm: 2 }, stat: { charm: 1 }, flag: 'epi-s-seo-turned', then: [
        { n: "She said it to the koi, with the very edge of a smile, the one her mother used on the wives at New Year, and let it sit." },
        { n: "Seo laughed. She actually laughed, once, a short surprised bark that she hadn't meant to let out, and shook her head at the fish." },
        { glitch: { strain: 1 } },
        { s: 'seo', t: "So would I, Solar-ssi. So would I. It'd save me a great deal of paperwork." },
        { n: "She crunched another piece of ice. She was still smiling. Solar didn't make the mistake of thinking that meant anything." }
      ] },
      { t: "(Say nothing. Watch the fish.)", then: [
        { n: "She watched the fish. Mr. Kim, Mrs. Kim. Round and round. She let the silence go on until it was a thing with its own weight, sitting on the step between them, and she didn't fill it." },
        { s: 'seo', t: "That's what your father does." },
        { n: "Seo said it mildly, to the bucket, the way you'd remark that a child has her father's ears." }
      ] }
    ] },
    { n: "Down the garden Mrs. Bang hit the rug so hard the washing line bounced and a cloud of dust went up off it into the bright cold air and blew away over the wall toward the harbor." },
    { s: 'mrsbang', t: "Aigoo. Twenty years of dirt in this thing." },
    { n: "She said it very loudly, to nobody, and hit it again." },
    { n: "Seo picked up her coffee. It was mostly ice now. She stood, slowly, with a hand on her knee, the way a woman stands up who has been standing at the backs of rooms for twenty years, and looked down at Solar on the step, at her face, at the gauze on her hand, at the hair pinned up so neatly, every pin in place." },
    { s: 'seo', t: "Get well, Solar-ssi. Properly, this time." },
    { n: "She nodded at the koi as if they were people. She nodded at Mrs. Bang, who did not nod back. Then she went up the side of the house the way she'd come, past the flag on its pole snapping in the wind, and the gate clicked behind her." },
    { n: "Mrs. Bang stopped beating the rug." },
    { n: "She stood at the washing line with the beater hanging from her hand and her breath going white, and looked up the garden at Solar on the back step for a long moment, and Solar looked back, and neither of them said anything. Then Mrs. Bang took the rug down off the line, perfectly clean, and folded it over her arm, and came back up the garden, and went past her into the kitchen, and on the way past, without stopping, without looking down, she put her hand on the top of Solar's head. Once. The way her father did." },
    { n: "On the television in the kitchen, with the sound off, the crowd in Seoul raised its arms for the third time." },
    { flag: 'epi-s-seo' }
  ] }
  );
})();
