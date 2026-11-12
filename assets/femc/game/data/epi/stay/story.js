/* The Stay epilogue (batch 8, writer A): the story events. Iwatodai, spring break, Wed 3/24/2010 to Tue 4/6/2010, one year
   to the night from her first Dark Hour. The reverse epilogue: Iwatodai is home, and the signals come from the three worlds.
   Format as the runners story files (consumes: true spends the slot; ends: true finishes the act when the scene ends).
   Loaded with the world; wraps itself so load order never matters.
   Events (R.events):
     epi-st-morning     3/24 early    the first morning that is just a morning; the form with the surname box blank
     epi-st-rooms       3/25 after    the searchers' rooms; Mitsuru asks what to do with their things (consumes)
     epi-st-hanami      3/27 after    hanami at Port Island Seaside Park; Fuuka's extra box, Mitsuru's game (Akihiko's turn, Solar's);
                                   one frame of Hanni's face in the crowd (consumes)
     epi-st-crossroads  3/28 evening  the route lock: the roof / the late bus to Tatsumi Memorial / the lounge (consumes)
     epi-st-thread      3/29 late     the Syracuse girls' thread lights up; a glass of water at the sink; she says nothing true
     epi-st-moon        3/30 late     the full moon; 4 a.m., the lounge landline; a tide, a horn, a radio, Yunjin once
     epi-st-renamed     3/31 after    Chagall Café with Yukari and Fuuka; a chat she was never in renames itself (consumes)
     epi-st-alone       3/31 late     fight 1, alone: Studio 4B's hallway in Syracuse, half Tartarus; a boy humming behind a door
     epi-st-charms      4/1 early     April Fool's; she reaches for Haenim in the kitchen and the three charms ring (consumes)
     epi-st-unseen      4/2 late      fight 2, unseen: the harbor in Incheon at midnight; Haechan and Jungwon
     epi-st-clocks      4/3 after     every clock at 12:00, frost shaped like a door; the command room; tell or keep (consumes)
     epi-st-unheard     4/4 late      fight 3, unheard: Hanlim's gym at midnight; Jungwon and Jihoon see her
     epi-st-witness     4/5 evening   Hagakure, the last spring break dinner; she flickers in front of everyone (consumes)
     epi-st-platform    4/5 late      fight 4, one second: Iwatodai Station platform; Haechan and Jungwon flicker in
     epi-st-last-day    4/6 early     uniforms ironed, Ken's bag, Mitsuru's boxes; the surname box (consumes)
     epi-st-held        4/6 late      the final: the pull at midnight; someone from this world holds on (ends)
   Flags set: epi-st-rooms-leave / epi-st-rooms-box / epi-st-rooms-keep, with epi-st-kept-haechan / -hyein / -hanni / -yunjin
     (epi-st-rooms); epi-route-akihiko / epi-route-shinjiro / epi-route-sees (epi-st-crossroads); epi-st-alone, epi-st-unseen,
     epi-st-unheard, epi-st-platform (the four fights, each sets its own id); epi-st-told / epi-st-kept (epi-st-clocks);
     epi-st-hold-table (epi-st-witness, the "Hold onto the table" path); epi-st-form-blank / epi-st-form-pencil (epi-st-last-day);
     epi-st-held (the final, last line).
   Flags read: epi-st-rooms-keep + the four epi-st-kept-<id> (epi-st-held's coda; each kept thing answers since batch 9); epi-st-told / epi-st-kept (epi-st-witness,
     epi-st-platform); epi-st-form-pencil (epi-st-held). Route: ifEpiRoute akihiko / shinjiro / sees throughout (before the lock
     it reads the lean). ifYear: { anyFlag: ['shinji-awake', 'ending-shinjiro'] } wherever Shinjiro appears.
   Glitch ids used (each once): epi-st-g-hanni (hanami), epi-st-g-girls + epi-st-g-camo (thread), epi-st-g-tide (moon),
     epi-st-g-hoax (renamed), epi-st-g-alone (alone), epi-st-g-bell / -jade / -star (charms), epi-st-g-unseen (unseen),
     epi-st-g-clocks (clocks), epi-st-g-unheard (unheard), epi-st-g-witness + epi-st-g-home (witness), epi-st-g-platform
     (platform), epi-st-g-pull (held). Stages set: 0 (morning), 1 (hanami), 2 (thread, moon), 3 (charms), 4 (unheard on).
     Strain: the lie in the kitchen (thread), the not-telling (clocks), "I'm fine. Eat." (witness).
   Fights: { battle: { script: 'epi-stay-<n>' } } lines exactly as the brief gives them; fades written for 2 and 3.
   Decisions / inventions for the lead:
     - Hanami is at Port Island Seaside Park (3/27). The café on 3/31 is Chagall.
     - The enrollment form is "the Kirijo Group's people" paperwork for Gekkoukan's university track, with a sticky note in
       Mitsuru's hand; what it's for stays vague. She never writes a surname: the pencil option leaves a mark, not a name.
     - The HOAX chat is called SOLAR SYSTEM (as the brief), rendered in narration only (no messages from the HOAX cast).
     - Yunjin's "...Sol?" on the 4 a.m. call is in narration (italics), not an `s` line, so searchers only speak in fights / final.
     - Haechan's lines at the harbor are italic English standing in for Korean; Jungwon calls him "Donghyuck".
     - The Personas at the harbor are described, not named (a pale moon-faced thing; a black tortoise in a serpent's coil).
     - The Hanlim gym is half-decorated for a winter formal the council voted on (no date, no name for it).
     - The constant at 4 a.m. (moon) is Akihiko on every route (he's up for his run); on Shinjiro's route Shinjiro gets the
       thread (a 12:04 text if awake; else Akihiko), and the charms' bell reaches the hospital.
     - At Hagakure the wrist is grabbed by Akihiko (akihiko), Ken (shinjiro), Junpei (sees). Koromaru waits outside.
     - The four rooms are Haechan's, Hanni's, Hyein's, Yunjin's (as the brief). Note: FEMC_GAME_LODGING also put Jihoon in
       the dorm; his room is not mentioned here.
     - Speakers: S.E.E.S. (akihiko, shinjiro, junpei, yukari, fuuka, mitsuru, ken, aigis, koromaru), nurse (no portrait),
       haechan / jungwon / jihoon (fights, the final), yunjin (the final). No new cast ids.
   Wren is never literal (the empty last bench, a horn). No ending line is quoted back. No explicit content.
   The days pass (Nov 5 2026; DO-NOT-OPEN-stay-epilogue-expansion.md gaps 1, 6, 7): epi-st-unheard gains two { ifFlag:
     'epi-st-told' } blocks (Yukari, Fuuka and Koromaru in her room before midnight, Akihiko in the hall; the three faces when
     she comes back), so the clocks' "you won't be alone in your room" holds; epi-st-witness "School tomorrow" → "School on
     Wednesday" (term starts 4/7); epi-st-last-day Ken's bag "packed since Sunday" → "since last Tuesday" (his phone topic).
     No flag, gate, fight line, glitch id or date changed. New scenes around these: story-days.js.
   Nov 11 2026 (Kat): she's gone. Solar disappears at the end of every epilogue (Runners' epi-r-midnight is the model; the plan's
     "takes something of her" is superseded): epi-st-held keeps everything up to "she was held" (one change: "It didn't take
     her. Not yet."), then at 12:01 the three lights take her; the last thing she hears is Akihiko's "Stay." / Shinjiro (awake:
     "come back"; asleep: his hand closes) / Mitsuru and Junpei ("We'll keep the room"); aftermath: the roof (Akihiko or
     Mitsuru and Junpei holding nothing, the others up the stairs, Koromaru on her spot, Fuuka can't find her anywhere) or the
     ward (the warm chair, his closed hand, Akihiko at 12:40); then her room, kept made up, the surname box (pencil flag), its
     light at midnight. New CG pairs { cg: 'epi-stay-gone' } (roof) / { cg: 'epi-stay-gone-ward' } (Shinjiro) / { cg: null }
     (FEMC-ART-TODO 57C / 57D). The flag epi-st-held is still set where it was. No id, date, gate, choice or outcome changed.
   Nov 11 2026 (Kat): length. Thin scenes lengthened (lines marked `// Nov 11 2026 (Kat): length`): epi-st-crossroads (the lounge
     before the choice; the roof kiss on Akihiko's; the ward at night on Shinjiro's, awake and asleep; the whole dorm on the puzzle
     on S.E.E.S.'s), epi-st-moon (the stairs at four; Akihiko's run on his route, the bottom stair on the others), epi-st-renamed
     (Fuuka's list before the phone; the walk to the station after), epi-st-alone (after the fight: the bathroom mirror, Akihiko on
     the stairs seeing her wet hair, which akihiko-3 and mitsuru-2 already cite), epi-st-charms (the breakfast that went on anyway),
     epi-st-last-day (per route, and the room before the pencil). No new flags; no id, date, gate, choice, flag or outcome changed;
     epi-st-held untouched. Inventions: the lounge landline "never in any book"; Fuuka's two-squeeze "still here". */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  const awake = { anyFlag: ['shinji-awake', 'ending-shinjiro'] };

  (R.events ||= []).push(

  // ───────────────────────────── 3/24, morning: just a morning ─────────────────────────────
  { id: 'epi-st-morning', date: '3/24', slot: 'early', title: 'just a morning', place: "Iwatodai Dorm · Solar's Room", time: 'Morning', scene: [
    { music: 'epi-st-home' },
    { glitch: { stage: 0 } },
    { n: "She woke up at seven because her body had been waking up at seven for a year, and lay there for a while under the dorm's thin blanket waiting for something to need her, a class, a briefing, a floor of a tower, and nothing did. Wednesday. Spring break. The light through the curtain was ordinary and white and stayed that color the whole time she looked at it." },
    { n: "Her uniform was hanging in the closet with the door half open, pressed, the ribbon folded over the hanger, and she didn't need it any more. She'd graduated three weeks ago in a gym full of folding chairs. She looked at it anyway, the way you look at a coat that belonged to someone who moved away." },
    { n: "On the desk, where she'd left it last night and every night that week, was a form. Gekkoukan's university track, the Kirijo Group's paperwork, a yellow sticky note on top in Mitsuru's handwriting, *Whenever you're ready. There's no deadline that matters.* Name, the form said, in two boxes. She'd filled in the second. The first one, the surname, was empty." },
    { n: "She left it empty. It had been empty all week. She was getting used to the shape of it." },
    { place: 'Iwatodai Dorm · Dining Room', time: 'Morning' },
    { n: "Downstairs it smelled like rice and burnt toast and somebody's shampoo. Junpei was at the table in a T-shirt with his cap on backwards, reading the back of a cereal box like it owed him money. Yukari had her feet up on the next chair and her phone in her hand. Fuuka was making tea for five people who had not asked for tea. Ken was doing homework on spring break on purpose. Aigis stood by the window with her hands folded, watching the street as if it might do something, and Mitsuru sat at the head of the table with a newspaper, which she read the way other people read contracts." },
    { s: 'junpei', f: 'happy', t: "Look who's up! Morning, graduate. How's unemployment?" },
    { s: 'yukari', f: 'neutral', t: "Junpei. She's been free for twelve hours." },
    { s: 'mitsuru', f: 'neutral', t: "Good morning. There's rice. Fuuka has made tea, so I'm told." },
    { s: 'fuuka', f: 'happy', t: "It's chamomile! It's very calming. ...Everybody seemed like they'd want calming." },
    { ifEpiRoute: 'akihiko', then: [
      { n: "Akihiko came in the front door in his track jacket with the cold still on him, red in the face, a towel round his neck, and stopped at the bottom of the stairs when he saw her, as if he'd been waiting there for her in his head the whole loop of the river and was a little surprised to find her real." },
      { s: 'akihiko', f: 'happy', t: "You slept in." },
      { s: 'solar', f: 'happy', t: "It's seven." },
      { s: 'akihiko', f: 'neutral', t: "Like I said. Tomorrow. Five a.m. I'll be on your left." },
      { n: "His gloves were hanging out of his jacket pocket, the red ones, for no reason at all on a run. She didn't ask. He sat down next to her and ate three bowls of rice and didn't look at her more than twice, which for him was a lot." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { n: "Akihiko came in from his run and ate standing up and told her the ward's visiting hours had moved to ten, as if she didn't know, as if she hadn't been on the ten o'clock bus every morning for a month. She thanked him like it was news." },
      { ifYear: awake, then: [
        { n: "Ten o'clock. A spoon. That was today's plan, on a slip of paper in her pocket in a physiotherapist's handwriting. She'd been carrying it since Monday like a ticket." }
      ], else: [
        { n: "Ten o'clock. A chair by a bed. The machines. His hand, which moved now, sometimes, when she talked. She'd been carrying that since Christmas like a ticket." }
      ] }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Something warm and heavy settled across her feet under the table, sighed, and stayed. Koromaru, who had decided at some point that winter that her feet were his and had never bothered to explain it." },
      { s: 'koromaru', f: 'happy', t: "Arf." },
      { s: 'ken', f: 'happy', t: "He does that to me too. But he chooses you more. I counted." }
    ] },
    { n: "Nobody asked her what she was going to do today. That was the strangest part. Nobody needed her to do anything. She ate her rice and drank the calming tea and it was, as far as she could tell, a morning, and she sat in it with both hands round the cup and did not know what to do with how quiet it was." }
  ] },

  // ───────────────────────────── 3/25, daytime: the rooms ─────────────────────────────
  { id: 'epi-st-rooms', date: '3/25', slot: 'after', consumes: true, title: 'the rooms', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', scene: [
    { music: 'epi-st-rooms' },
    { s: 'mitsuru', f: 'serious', t: "I need to ask you something, and I'd like you to know there is no right answer." },
    { s: 'mitsuru', f: 'neutral', t: "The dorm turns over in April. New residents, new assignments. The rooms on the second floor... the ones that were theirs. I can hold them. Or not. I'd rather you decided what happens to their things than a facilities office did." },
    { n: "She said it the way she said everything, formally, standing, one hand on the back of the sofa, and it was the kindest thing anybody had said to Solar in three weeks, and Mitsuru knew that, and looked at the window so Solar wouldn't have to see her know it." },
    { place: "Iwatodai Dorm · Haechan's Room", time: 'Daytime' },
    { n: "Haechan's room first, because it was nearest the stairs and because she wanted it over with. The bed made badly. A hoodie on the chair. On the desk, unopened, a can of Monster Pink Punch that nobody in this dorm drank and nobody had moved, like a candle on an altar nobody had admitted was an altar." },
    { place: "Iwatodai Dorm · Hyein's Room", time: 'Daytime' },
    { n: "Hyein's, a sewing kit open on the floor with the pins still in the cushion in a neat spiral and a half-finished hem on a skirt that wasn't anybody's size here. Hanni's, the alarm clock on the nightstand still set for six-forty, the little switch still on, waiting for a morning nobody was going to wake up to." },
    { place: "Iwatodai Dorm · Yunjin's Room", time: 'Daytime' },
    { n: "Yunjin's, last. A pair of socks balled on the radiator with rabbits on them, which Solar had made fun of in January, and which Yunjin had worn every day after that out of spite. She picked them up. She put them down. Her throat did something she didn't let it finish." },
    { choose: [
      { t: "Leave them as they are.", flag: 'epi-st-rooms-leave', then: [
        { s: 'mitsuru', f: 'neutral', t: "Then they'll stay as they are. I'll speak to facilities. I can be very persuasive with facilities." },
        { n: "So the alarm clock would keep its switch on. The can would stay unopened. It wasn't a decision so much as a refusal to make one, and Mitsuru took it as if it were a decision, which was its own kind of kindness." }
      ] },
      { t: "Box them. Carefully.", flag: 'epi-st-rooms-box', then: [
        { s: 'mitsuru', f: 'sad', t: "...Carefully. Yes. I'll bring tissue paper. Fuuka will want to help." },
        { n: "They did it that afternoon, the two of them and Fuuka, folding hoodies into tissue paper as if they could be bruised, and labeling every box in Mitsuru's perfect handwriting with a name nobody in facilities would know how to read, and stacking them in the storeroom by the stairs where she'd pass them every day." }
      ] },
      { t: "Take one thing.", flag: 'epi-st-rooms-keep', then: [
        { choose: [
          { t: "The can. Unopened.", flag: 'epi-st-kept-haechan', then: [
            { n: "She took the can. It was cold, the way it was always cold, as if it had come out of a fridge a minute ago and not three weeks. She put it on her own desk next to the form and didn't open it." }
          ] },
          { t: "The sewing kit.", flag: 'epi-st-kept-hyein', then: [
            { n: "She took the sewing kit, pins and all, and put it on her own desk, and that night she sewed the button back on her cardigan that had been hanging by a thread since February. Badly. Hyein would have screamed." }
          ] },
          { t: "The alarm clock.", flag: 'epi-st-kept-hanni', then: [
            { n: "She took the alarm clock and set it on her nightstand and didn't turn it off. Six-forty. Somebody should still get up at six-forty for her." }
          ] },
          { t: "The rabbit socks.", flag: 'epi-st-kept-yunjin', then: [
            { n: "She took the rabbit socks. She put them on, there, standing in the room, and they were too big, and she stood in them on the cold floor for a while with her hands in her sleeves." }
          ] }
        ] },
        { s: 'mitsuru', f: 'neutral', t: "And the rest?" },
        { s: 'solar', f: 'serious', t: "Leave it. For now." }
      ] }
    ] }
  ] },

  // ───────────────────────────── 3/27, daytime: hanami ─────────────────────────────
  { id: 'epi-st-hanami', date: '3/27', slot: 'after', consumes: true, faces: 'stay-hanami', title: 'first blossoms', place: 'Port Island · Seaside Park · Hanami', time: 'Daytime', scene: [
    { music: 'epi-st-spring' },
    { glitch: { stage: 1 } },
    { n: "The cherry trees along the seawall had opened that week all at once, the way they did, as if somebody had given an order. Saturday, warm for March, every blue tarp in Port Island spread out under them and every family and office party and couple sitting on one with their shoes off, and the petals coming down slow over all of it like the trees were tired of holding them." },
    { n: "S.E.E.S. had a tarp. Mitsuru had brought a lacquered three-tier box from a restaurant whose name she wouldn't say. Junpei had brought a bento he had made himself, which he unveiled with a drumroll on his own knees." },
    { s: 'junpei', f: 'happy', t: "Behold. The Iori Special. Rice, egg, and..." },
    { s: 'yukari', f: 'neutral', t: "Is that a hot dog cut like an octopus or an octopus cut like a hot dog?" },
    { s: 'junpei', f: 'flustered', t: "It's an octopus! It has legs! Count the legs!" },
    { s: 'aigis', f: 'neutral', t: "It has five legs, Junpei-san. I have also counted one hundred and twelve petals on the tarp since we sat down. The rate is increasing." },
    { n: "Fuuka set out her boxes along the edge of the tarp in a row, lacquered, borrowed from three different cupboards, the tamagoyaki in every one of them cut to the same width with a ruler. One each. Koromaru's with no salt. And one more at the very end of the row, the best one, the gold side of the egg turned up, that didn't have anyone's name on it." },
    { s: 'fuuka', f: 'neutral', t: "That one's extra. I counted wrong." },
    { s: 'fuuka', f: 'sad', t: "...I counted wrong on purpose. Is that okay? You can say if it's not okay." },
    { s: 'solar', f: 'happy', t: "It's okay, Fuuka." },
    { n: "Nobody touched the extra box. Junpei looked at it twice and didn't. It sat at the end of the tarp with petals landing on its lid, and it wasn't empty, and it wasn't anyone's, and that was what it was for." },
    { cg: 'epi-st-hanami' },
    { n: "Ken was throwing a ball for Koromaru down the grass, and Koromaru was bringing it back to Solar every time instead of Ken, which Ken had stopped taking personally around the fifth throw. Fuuka had petals in her hair and didn't know it. Akihiko had eaten four of Junpei's octopi to be polite and was quietly regretting each one." },
    { s: 'mitsuru', f: 'neutral', t: "I propose a game. Each of us names something from this year. If anyone has heard it before, the speaker drinks. Juice. I'm not an animal." },
    { n: "It turned out Mitsuru was ruthless at it. She remembered everything everybody had ever said in that dorm and she deployed it with the face of a woman reading minutes, and by the third round Junpei had drunk four cups of orange juice and was lying on his back on the tarp groaning, and Mitsuru had not drunk once, and had the very small smile on that she only wore when she was winning." },
    { s: 'mitsuru', f: 'happy', t: "Execution." },
    { n: "Akihiko had been quiet the whole game, sitting with his back against the trunk of the nearest tree in a grey hoodie and an open navy jacket, the red gloves stuffed in his pocket because it was too warm for them and he'd brought them anyway. When it came round to him he didn't think about it. He'd clearly had it ready." },
    { s: 'akihiko', f: 'neutral', t: "She stayed." },
    { n: "The tarp went quiet. Junpei sat up on his elbows. Somewhere down the seawall a radio was playing something with a lot of trumpets in it." },
    { s: 'yukari', f: 'neutral', t: "...Senpai. Everybody's heard that one." },
    { s: 'akihiko', f: 'serious', t: "I know." },
    { n: "He picked up his cup and drank the whole thing, orange juice, in one go, without being told to, and put it down on the tarp, and looked at the sea instead of at her." },
    { s: 'akihiko', f: 'happy', t: "I just wanted to hear it out loud. Once. Somewhere with people in it." },
    { n: "Mitsuru didn't say execution. Fuuka was looking at her lap. Solar felt the back of her throat go tight and hot, and she did what she always did with a feeling she didn't have anywhere to put, which was make it somebody else's problem." },
    { s: 'solar', f: 'happy', t: "My turn. Akihiko-senpai ate four of Junpei's octopi to be polite and he's been sorry about every single one." },
    { s: 'akihiko', f: 'surprised', t: "...Five. It was five." },
    { s: 'mitsuru', f: 'neutral', t: "Nobody had heard that. Solar doesn't drink. Akihiko drinks for lying about the count." },
    { s: 'junpei', f: 'flustered', t: "FIVE? Dude, they're good! Why are you sorry!" },
    { n: "Solar laughed. Out loud, the real one, the one that came up out of her chest before she'd decided to let it. Yukari looked over at the sound and then looked away fast, pleased about it, like she'd seen something she wasn't supposed to." },
    { cg: null },
    { n: "Then she looked up past the tarp into the crowd on the path, the hundred faces going by under the trees, and for one frame, one, the length of a blink—" },
    { glitch: 'epi-st-g-hanni' },
    { n: "Hanni. In the crowd, walking, half turned, in a coat that wasn't a coat anybody wore in Iwatodai, her hair caught in her collar the way it always caught, looking for someone over the heads of the people in front of her. Then a family with a stroller. Then a man in a suit with his tie round his head. Then petals. Nobody." },
    { n: "She looked at the place on the path for a long time. A petal landed in her juice. Nobody on the tarp had turned their head. It was only hers, the way the first ones always were, and she drank the juice, petal and all, and when Junpei asked if she was okay she said yes and handed him the next round." }
  ] },

  // ───────────────────────────── 3/28, evening: the crossroads ─────────────────────────────
  { id: 'epi-st-crossroads', date: '3/28', slot: 'evening', consumes: true, title: 'sunday', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'epi-st-home' },
    { n: "Sunday evening, the last normal one, though nobody had told her that and she wouldn't have believed them. The lounge with the TV on low and Junpei asleep on the sofa with his mouth open, Ken doing a puzzle on the floor, the windows going dark blue. Upstairs, through the ceiling, a door. Outside, the bus stop, the late bus to the hospital at twenty past." },
    // Nov 11 2026 (Kat): length. The lounge before the choice: the dorm's Sunday, and the pull of three directions.
    { n: "Dinner had been leftovers from the hanami, eaten standing up in the kitchen out of Fuuka's boxes, everybody's fingers in everybody's bento, Junpei claiming the octopus sausages were legally his under a rule he'd made up on the spot. Now the dishes were drying in the rack and the dorm had gone soft and slow the way it did on Sunday nights, the whole building sighing into the week. Yukari on the armchair with her feet tucked under her, painting her nails a pink that smelled like a chemistry lab. Fuuka at the dining table with a cup of tea and a library book she wasn't reading. Mitsuru's pen going upstairs, scratch, scratch, somewhere above the ceiling, and Aigis by the window, watching the street the way other people watched television." },
    { s: 'yukari', f: 'neutral', t: "Somebody put something on that isn't the weather. I'm begging." },
    { s: 'ken', f: 'neutral', t: "The weather is useful." },
    { s: 'yukari', f: 'serious', t: "Ken. Buddy. It's been the weather for an hour. It's going to be nice. We get it." },
    { n: "Solar was in the doorway between the lounge and the hall with her shoulder against the frame, not in and not out, which she'd noticed she did a lot lately. From there she could see all of it, the lamp and the puzzle and Koromaru asleep on his back with his legs in the air, and the stairs going up into the dark of the second floor where one door had a line of light under it, and through the glass of the front door the bus shelter on the corner, empty, its timetable lit up white. Three directions. Her body knew all three of them by heart. It had been leaning a little toward one of them for a while now, the way a plant leans, without asking her." },
    { choose: [
      { t: "(Go up to the roof. Akihiko's light's on.)", when: { ifRouteOpen: 'akihiko' }, flag: 'epi-route-akihiko', then: [
        { music: 'epi-st-romance' },
        { place: 'Iwatodai Dorm · Rooftop', time: 'Evening' },
        { n: "His door was open and his room was empty and the light was on, and she knew where he was. He was on the roof by the garden in his coat, not doing anything, which was the rarest thing he ever did." },
        { s: 'akihiko', f: 'surprised', t: "Hey. ...I was going to come down." },
        { s: 'solar', f: 'happy', t: "You were going to stand up here for another hour and then come down." },
        { s: 'akihiko', f: 'blushing', t: "...Maybe forty minutes." },
        { n: "She stood next to him at the railing and he moved half a step closer, not touching, close enough to feel the warmth come off his sleeve in the cold, and they watched the city light up a window at a time until it was too dark to count." },
        // Nov 11 2026 (Kat): length. The roof, the route lock made physical.
        { s: 'akihiko', f: 'neutral', t: "I was thinking about April." },
        { s: 'solar', f: 'neutral', t: "The university? The gym?" },
        { s: 'akihiko', f: 'serious', t: "Neither. I was thinking about last April. You'd been here a week. You came down to the lounge at midnight and stood right there at the bottom of the stairs like you'd been expecting something, and I thought, she's not going to last." },
        { s: 'solar', f: 'happy', t: "Thanks." },
        { s: 'akihiko', f: 'blushing', t: "I was wrong. I'm telling you I was wrong. That's hard for me. You should be enjoying this more." },
        { n: "She was enjoying it. She was enjoying it so much she had to look at the city instead of at him, at the bridge strung with lights across the bay and the dark lump of Port Island and the little moving lights of the monorail going home, and the cold came off the railing into her palms and her face was hot and she let it be." },
        { n: "He moved first. That surprised both of them. His hand came along the railing until the side of it touched the side of hers and stopped there, and stayed, and then, when she didn't take hers away, turned over, and his fingers went between hers, rough and warm and a little clumsy, like a man threading a lace he'd tied a thousand times in the dark and suddenly couldn't see." },
        { s: 'akihiko', f: 'serious-3', t: "I keep coming up here because it's the highest place in the building. I can see everything from here. The station. The bridge. Your window." },
        { s: 'solar', f: 'flustered', t: "My window is directly under your feet." },
        { s: 'akihiko', f: 'blushing', t: "...I know where your window is, Solar." },
        { n: "She turned to say something to that and he was closer than she'd thought, and the thing she'd been going to say went out of her like breath on a cold day. He kissed her. Or she kissed him, she was never afterwards sure which, only that it was short and very careful and tasted of the cold, and that when it ended neither of them stepped back, and his forehead came down against hers and rested there, and she could feel him breathing like he'd just come off the river at a sprint." },
        { s: 'akihiko', f: 'happy', t: "...Forty minutes was a lie. I'd have stood up here all night." },
        { s: 'solar', f: 'happy', t: "I know." },
        { n: "Below them the late bus went past the corner on its way to the hospital, its windows lit and empty, and she watched it go over his shoulder and felt something in her settle, quietly, like a coin landing flat after spinning for a long time. Then he pulled his coat open and wrapped half of it round her without a word, and they stood like that at the railing, two people in one coat, until Mitsuru's window opened beneath them and her voice came up crisp into the dark to say that the roof door was not soundproof, and that she would see them both at breakfast." }
      ] },
      { t: "(Take the late bus to Tatsumi Memorial.)", when: { ifRouteOpen: 'shinjiro' }, flag: 'epi-route-shinjiro', then: [
        { music: 'epi-st-romance' },
        { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Evening' },
        { n: "The night nurse saw her in the corridor at a quarter to eight and sighed the sigh of a woman who'd already decided to let her in and wanted credit for it." },
        { s: 'nurse', t: "Fifteen minutes. I mean it this time." },
        { ifYear: awake, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Visiting hours are over." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'shinjiro', f: 'neutral', t: "...Sit down, then." },
          { n: "He held out the bad hand on the blanket, palm up, without looking at her, and waited. It shook a little. She put hers in it and it stopped." },
          // Nov 11 2026 (Kat): length. The ward at night; the route lock made physical.
          { n: "The ward was half dark, the overhead lights off and only the lamp at the nurses' station and the green glow of the monitor at his shoulder, and the window beside the bed full of the city at night with the bay a black gap in the middle of it. Somewhere down the corridor an old man was coughing in his sleep. Somebody's radio was on very low, a baseball game, the crowd sound coming and going like surf." },
          { s: 'shinjiro', f: 'neutral', t: "...Why'd you come. It's Sunday night." },
          { s: 'solar', f: 'neutral', t: "Everyone was in the lounge. It was nice. I kept looking at the bus stop." },
          { s: 'shinjiro', f: 'sad', t: "...Idiot. You should've stayed in the nice place." },
          { s: 'solar', f: 'happy', t: "I did." },
          { n: "He looked at her then. Properly, for the first time since she'd come in, the way he used to look at a pot to see whether it was done, and whatever he found in her face made his jaw go tight and then not, and his thumb moved across the back of her hand, slow, once, the most he'd been able to do with that hand in five months, and he did it like it cost him nothing at all." },
          { n: "She leaned down until her forehead was resting on the back of his hand on the blanket, and stayed there. His other hand came up, the good one, and settled on the back of her head, heavy and warm, his fingers in her hair, not stroking, just there, the way you'd hold something down in a wind. The monitor counted. The baseball game went to an ad." },
          { s: 'shinjiro', f: 'neutral', t: "...You smell like the dorm. Like the kitchen." },
          { s: 'solar', f: 'neutral', t: "Fuuka made tamagoyaki." },
          { s: 'shinjiro', f: 'happy', t: "...Burnt on one side." },
          { s: 'solar', f: 'happy', t: "Gold on the other." },
          { n: "Fifteen minutes was forty. The nurse came to the door twice and went away again both times without saying anything, and the second time she turned off the corridor light, so the room was just the two of them and the monitor and the city in the window, and Solar didn't lift her head until her neck ached, and then for a while after that." }
        ], else: [
          { n: "He was asleep, the way he was always asleep, the machines keeping time. She sat in the chair and talked to him about Junpei's octopus. On the blanket his fingers moved, twice, at the funny part." },
          // Nov 11 2026 (Kat): length.
          { n: "So she told it again. The whole thing, slower, the bento and the five legs and Junpei's speech about the five legs, and the second time through his fingers moved at the same place, exactly, as if he'd been waiting for it, and she laughed out loud in the dark ward and put her hand over her mouth, and the nurse at the end of the corridor looked up and didn't tell her off." },
          { n: "She stayed past the fifteen minutes. She took his hand in both of hers on the blanket and laid her cheek down on the back of it, the way she'd never done in daylight, and told him she'd been in the lounge with everybody, and that it had been nice, and that she'd kept looking at the bus stop. She told him she'd keep coming. She told him that was a promise, and that he'd have to be awake to hold her to it. His fingers closed, very slightly, around nothing. Then around two of hers." },
          { s: 'nurse', t: "...Time. Really, this time. ...Five more minutes." }
        ] }
      ] },
      { t: "(Stay down in the lounge with everyone.)", flag: 'epi-route-sees', then: [
        { n: "She sat on the floor next to Ken and found an edge piece he'd been looking for for twenty minutes. He took it with enormous dignity. Koromaru put his head in her lap. Junpei woke up, said something about octopi, and went back to sleep." },
        { s: 'yukari', f: 'neutral', t: "...This is nice. Don't tell anyone I said that." },
        { n: "Fuuka brought calming tea. Nobody needed calming. They drank it anyway." },
        // Nov 11 2026 (Kat): length. The lounge, the route lock as the whole dorm.
        { s: 'ken', f: 'neutral', t: "Solar-san. That's the sky. You're good at sky. Can you do the rest of the sky." },
        { s: 'solar', f: 'happy', t: "Nobody's good at sky, Ken. Sky is just blue." },
        { s: 'ken', f: 'serious', t: "That's why I need help." },
        { n: "So she did sky. Three hundred pieces of almost the same blue, on her stomach on the rug with her chin in her hands, Koromaru's head moved from her lap to the small of her back where he decided he liked it better. Yukari came down off the armchair and lay on the floor too and did the edges with her wet nails held up in the air like a surgeon's. Aigis turned from the window and announced that the piece Solar was holding went three rows to the left, and was right, and Ken let her do one more and then politely asked her to stop." },
        { n: "Mitsuru came down at nine with her pen still in her hand, saw all of them on the floor, and stood on the bottom stair for a moment as if she'd forgotten what she'd come down for. Then she sat on the arm of the sofa by Junpei's feet and asked which part was hers. Ken gave her a piece of cloud. She studied it very seriously, the way she'd once studied floor plans, and put it in the right place on the first try, and said *ah,* very quietly, pleased with herself, and pretended she hadn't." },
        { n: "At ten Akihiko came down from the roof with his face red from the cold and stopped dead in the doorway, looking at the whole dorm on the lounge floor around a puzzle, and said *what's happening,* and Junpei woke up at last and said *bonding,* with total authority, and fell back asleep. Akihiko sat down by the coffee table and took off his shoes and did corners. On the TV the weather girl said it would be clear all week. Nobody got up to turn it off." },
        { n: "Solar lay on the floor with her cheek on her arm and the lamp warm on the side of her face, a piece of sky in her fingers she couldn't find the place for, and listened to the sounds of the room, all of them, the pages and the breathing and the small click of somebody getting a piece right, and thought, without quite meaning to, *this one.* It wasn't a decision. It felt more like noticing something that had been true for a while." }
      ] }
    ] }
  ] },

  // ───────────────────────────── 3/29, late: the thread ─────────────────────────────
  { id: 'epi-st-thread', date: '3/29', slot: 'late', title: 'drink', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'epi-st-thread' },
    { glitch: { stage: 2 } },
    { n: "Midnight. She was lying on top of the blanket with the light off, not sleeping, the way she'd learned to not sleep at midnight a year ago, and her phone buzzed on the desk." },
    { n: "It shouldn't have. There was nobody left to buzz it. She'd stopped charging it every night in the second week, and then had started again, and hadn't asked herself why." },
    { glitch: 'epi-st-g-girls' },
    { n: "A thread with two names at the top that her thumb knew. A thread that wasn't there any more. That had gone dark on a night she wasn't going to think about. *Read,* it said, under her last message, from three weeks ago, and then the time, and the time was now." },
    { phone: [{ from: 'hyein', t: 'drink' }, { from: 'hyein', t: 'drink wat' }], contact: 'hanni, hyein', group: true },
    { n: "Then three dots. Typing. She sat up. She held the phone in both hands like it might get away. The dots went on, and on, and on, Hyein typing with her thumbs in a dorm in a city where it was the middle of the morning, and never sending, and then the dots stopped, and nothing came, and the thread was still there, lit, waiting for the end of a word." },
    { glitch: 'epi-st-g-camo' },
    { n: "For two seconds, under the hum of the dorm's fridge downstairs, under her own breathing, there was a song. A bassline she'd have known asleep. Then the fridge again." },
    { place: 'Iwatodai Dorm · Kitchen', time: 'Late Night' },
    { n: "She went downstairs in her socks and stood at the kitchen sink in the dark and ran the tap until it went cold and drank a glass of water, all of it, standing up. It wasn't for any reason. She put the glass in the rack. She stood there with her hands on the edge of the sink." },
    { ifEpiRoute: 'akihiko', then: [
      { n: "The light came on. Akihiko in the doorway in a T-shirt, hair flat on one side, squinting." },
      { s: 'akihiko', f: 'neutral', t: "Heard you on the stairs. ...You okay?" },
      { s: 'solar', f: 'neutral', t: "Thirsty." },
      { glitch: { strain: 1 } },
      { n: "He looked at the empty glass in the rack and at her hands on the sink and didn't say anything, and filled the glass again, and gave it to her, and stood there while she drank it, which was worse." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { ifYear: awake, then: [
        { phone: [{ from: 'shinjiro', t: '...u up' }, { from: 'shinjiro', t: "nurse turned the lights off. can't sleep. 12:04" }], contact: 'shinjiro' },
        { n: "Six words. That was a speech, from him. She typed *just thirsty. go to sleep* and looked at it and sent it." },
        { glitch: { strain: 1 } },
        { phone: [{ from: 'shinjiro', t: '...liar' }], contact: 'shinjiro' }
      ], else: [
        { n: "The light came on. Akihiko in the doorway, squinting." },
        { s: 'akihiko', f: 'neutral', t: "...You okay?" },
        { s: 'solar', f: 'neutral', t: "Thirsty." },
        { glitch: { strain: 1 } },
        { n: "He nodded like he believed her. He was a bad liar about believing people." }
      ] }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Mitsuru was at the dining table in the dark in a dressing gown, with a cup of tea gone cold in front of her and her hands round it, and Solar hadn't seen her until she moved." },
      { s: 'mitsuru', f: 'neutral', t: "You couldn't sleep either." },
      { s: 'solar', f: 'serious', t: "Just thirsty." },
      { glitch: { strain: 1 } },
      { s: 'mitsuru', f: 'sad', t: "...Of course. So am I." },
      { n: "Neither of them got up. They sat in the dark kitchen together and were both very thirsty until one." }
    ] }
  ] },

  // ───────────────────────────── 3/30, late: the moon ─────────────────────────────
  { id: 'epi-st-moon', date: '3/30', slot: 'late', title: 'four a.m.', place: 'Iwatodai Dorm · Lounge', time: 'Late Night', scene: [
    { music: 'night' },
    { glitch: { stage: 2 } },
    { n: "The full moon came and went over the dorm and nothing happened. That was the point of the night: nothing. No green, no coffins, no tower. She lay awake until three anyway out of a year's habit, and then fell asleep, and then the landline rang." },
    { n: "The lounge phone. The beige one on the table by the stairs that nobody had used since the dorm got cell reception, that Junpei had once tried to prank-call from his own phone and failed to find the number of. Four in the morning. It rang, and rang, and nobody else woke up." },
    // Nov 11 2026 (Kat): length. The stairs at four.
    { n: "The stairs were cold through her socks. The dorm at four in the morning was a different building, every surface gone gray and flat, the lounge furniture shapes under the window, Koromaru's bowl by the kitchen door catching a line of moonlight that had come all the way in across the floor to find it. The moon itself hung over the station, white and full and doing nothing, which she still didn't trust. A year of nights had taught her what it looked like when that moon meant something. It looked like this. It looked exactly like this." },
    { n: "The phone kept ringing. Each ring went off the walls of the empty lounge and up the stairwell and came back down. She stood over it with her hand out and counted them the way you'd count between lightning and thunder. Seven. Eight." },
    { n: "She picked it up. She didn't say hello." },
    { glitch: 'epi-st-g-tide' },
    { n: "A tide. That was the first thing. Water moving against stone, close, a long breath in and out. Then, far away, a ship's horn, low enough that she felt it in the receiver more than heard it. Then a radio somewhere between stations, a man's voice and then static and then a song, a few notes of it, cold and slow, gone." },
    { n: "Then a breath, very near. Somebody who'd been about to hang up." },
    { n: "*...Sol?*" },
    { n: "Gravel. Low, a little hoarse, the way it got late. Yunjin, who had called her that across a cold kitchen and a dorm hallway and a year, said it once, like a question she already knew the answer to and wanted to hear anyway." },
    { n: "Solar opened her mouth. The dial tone came." },
    { n: "She stood there holding it. The dial tone went on, flat and patient and stupid. She didn't put it down. If she put it down it would have happened." },
    { s: 'akihiko', f: 'neutral', t: "...Who calls that thing?" },
    { n: "He was on the stairs, halfway down, in his running clothes, laces untied, the way he came down every morning at a quarter past four to stretch in the hall before the five o'clock. He'd been there long enough. She could see that on him." },
    { s: 'akihiko', f: 'neutral', t: "Wrong number. At four. Typical." },
    { n: "He said it to the room. He said it like a man putting a hand flat on a table to stop it shaking. She put the receiver down in its cradle very gently, and let him have said it, and let it be what he'd said." },
    { ifEpiRoute: 'akihiko', then: [
      { s: 'akihiko', f: 'sad', t: "...Come run. You won't sleep now anyway." },
      { n: "She went and got her shoes. He waited at the door, holding it open on the cold blue dark, not asking." },
      // Nov 11 2026 (Kat): length. The run at half past four.
      { n: "They ran the river in the dark with the moon going down in front of them, his pace shortened to hers without a word about it, their breath going out white and coming apart. The streetlights were still on. A delivery van went by with its hazards blinking and a man threw a bundle of newspapers onto a doorstep and lifted a hand to Akihiko, who lifted one back, because that was the kind of thing that happened when you'd run the same river at the same hour for three years. At the rowing club he stopped, and bent with his hands on his knees, and didn't look at her." },
      { s: 'akihiko', f: 'serious-3', t: "If somebody calls that phone again. At four. Come and get me. Don't pick it up on your own." },
      { s: 'solar', f: 'neutral', t: "It was a wrong number." },
      { s: 'akihiko', f: 'sad', t: "...Yeah. Come and get me for the wrong numbers too." },
      { n: "He straightened up and took her hand, cold fingers round cold fingers, and held it all the way back along the river at a walk, which he'd never once done on a run, while the sky behind the bridge went from black to gray to the thin washed pink of the first morning after a full moon in a year where nothing at all had happened. He didn't let go on the steps. He didn't let go in the hall. Junpei came down at seven and found them asleep against each other on the bottom stair with their running shoes on, and for once in his life he had the sense to go back up." }
    ], else: [
      // Nov 11 2026 (Kat): length. Off his route he stays on the stairs.
      { n: "He didn't go for his run. He came down the rest of the stairs and sat on the bottom one with his elbows on his knees, the laces still untied, and after a while she sat down beside him, and they stayed there while the moon went down behind the station and the gray in the windows turned the color of dishwater and then of milk." },
      { s: 'akihiko', f: 'neutral', t: "...Mitsuru had that thing put in for emergencies. Before cell phones. The number was never in any book." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'akihiko', f: 'serious', t: "Right. ...Just saying. It's a strange wrong number." },
      { n: "That was as far as he'd go, and they both knew it, and he stood up at half past five and tied his laces, double-knotted, and went out into the morning without asking her to come, and she heard his footsteps go down the hill and turn toward the river, steady, the way he did everything, and sat on the stair and listened to them until she couldn't." }
    ] }
  ] },

  // ───────────────────────────── 3/31, daytime: renamed ─────────────────────────────
  { id: 'epi-st-renamed', date: '3/31', slot: 'after', consumes: true, title: 'where is she', place: 'Paulownia Mall · Chagall Café', time: 'Daytime', scene: [
    { music: 'epi-st-spring' },
    { n: "Chagall at two on a Wednesday, the good table by the window, three drinks with too much cream on them. Yukari had declared a girls' afternoon at breakfast with the authority of someone who'd been planning it for a week, and Fuuka had brought a list of things to talk about in case they ran out, which they didn't." },
    { s: 'yukari', f: 'neutral', t: "Third year. I'm going to be a third-year. Who let that happen?" },
    { s: 'fuuka', f: 'happy', t: "You're going to be so good at it. Everyone's going to be scared of you." },
    { s: 'yukari', f: 'blushing', t: "...Okay, that's the nicest thing anyone's said to me all month and it's so mean." },
    // Nov 11 2026 (Kat): length. The list, before the phone.
    { s: 'fuuka', f: 'neutral', t: "Next on the list is... oh. 'If you could live anywhere.' I wrote that one at one in the morning, I think. It's very dramatic." },
    { s: 'yukari', f: 'neutral', t: "Easy. Somewhere with a bathtub that isn't shared with Junpei." },
    { s: 'fuuka', f: 'happy', t: "That's not a place, Yukari-chan." },
    { s: 'yukari', f: 'serious', t: "It's a state of mind. Solar?" },
    { n: "Solar looked out of the window at the mall, at the fountain going and a man in an apron sweeping petals out of the doorway of the shoe shop, and said *here,* and it came out before she'd checked it, and both of them looked at her like she'd said something in another language. Fuuka wrote it down. Yukari stole the cherry off the top of Solar's drink, for no reason, the way you'd squeeze somebody's hand under a table." },
    { s: 'yukari', f: 'neutral', t: "Okay, that was disgusting. You can't just say stuff like that at two in the afternoon." },
    { s: 'solar', f: 'happy', t: "Sorry. Somewhere with a bathtub." },
    { s: 'yukari', f: 'blushing', t: "Thank you. Normal. God." },
    { n: "Solar's phone, face down by her saucer, buzzed once. She turned it over to be polite to it." },
    { n: "A group chat. She had never been in it, not in this world, not on this phone. SOLAR SYSTEM, it said at the top, in the font her phone used for everything, with a number of members her phone shouldn't have been able to count. No messages. Just the name." },
    { n: "While she watched, the name changed. *SOLAR SYSTEM* went to *where is she.* A notice under it, small and gray, the way those notices always were. Somebody had changed the group name. It didn't say who." },
    { glitch: 'epi-st-g-hoax' },
    { n: "Two seconds of a song came up under the café's radio, bright and bratty, a song that belonged to a school hallway in another country, and went." },
    { n: "Then *where is she* went back to *SOLAR SYSTEM,* like somebody else had reached over and changed it back, fast, before anyone could see. Like you'd pull a sleeve down over a bruise." },
    { s: 'fuuka', f: 'surprised', t: "...Solar? You've gone pale." },
    { n: "Fuuka was looking at her. Not at the phone. At her face, with the soft careful attention she'd once used to find people in the dark from a long way off." },
    { s: 'solar', f: 'serious', t: "Too much cream. I'm fine. What's next on your list?" },
    { n: "She put the phone back face down and smiled the bright one, the one that had worked on student councils and fraternity houses and her father, and Fuuka looked at it for one second too long, and then read the next thing off her list, which was *favorite season,* and Yukari said spring, obviously, and Solar said spring too, and meant it more than either of them knew." },
    // Nov 11 2026 (Kat): length. After: the walk home, Fuuka's look.
    { n: "Under the table, her knee wouldn't stop going. She put her hand on it. It went on under her hand. The phone lay face down by her saucer and she could feel it there the way you can feel somebody standing behind you in a room, and she didn't turn it over again, not for the list's last three questions, not for the bill, not when Yukari made them do rock-paper-scissors for it and lost and paid with very bad grace." },
    { n: "On the walk to the station Yukari went ahead to look at a window full of spring jackets she couldn't afford, and Fuuka fell into step beside Solar and didn't say anything for a whole block, and then took her hand, briefly, the way she used to on the stairs in Tartarus when a floor was bad, two quick squeezes, *still here, still here,* and let it go before Yukari could turn round and see." },
    { s: 'fuuka', f: 'sad', t: "...You don't have to tell me. I just wanted you to know I can still tell. Even without Juno. When somebody's far away." },
    { s: 'solar', f: 'neutral', t: "I'm right here, Fuuka." },
    { s: 'fuuka', f: 'neutral', t: "I know. That's what's strange about it." }
  ] },

  // ───────────────────────────── 3/31, late: alone (fight 1) ─────────────────────────────
  { id: 'epi-st-alone', date: '3/31', slot: 'late', title: 'alone', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'epi-st-half' },
    { n: "Eleven fifty-nine. She'd started watching the clock again, the way she had a year ago, before she knew what midnight was. The clock on her desk ticked over." },
    { glitch: 'epi-st-g-alone' },
    { place: 'Syracuse · Studio 4B · Hallway', time: 'Midnight' },
    { dark: true },
    { n: "Carpet. Scratchy and gray under her bare feet, and a bulletin board with a flyer pinned crooked, and an exit sign burning green at the end of a hallway that went on past where any building would stop, into black-and-gold tile she knew better than her own handwriting." },
    { n: "There was a window halfway down. Snow outside it. Snow, at the end of March, in a city she hadn't lived in for a year, coming down slow and white past a streetlight that wasn't on any street in Iwatodai." },
    { n: "And a door. Studio 4B, the little window in it papered over from the inside, and under it a line of light, the blue-white of a mixing desk left on, and through it a song. Not played. Hummed. A boy's voice, low and flat and a little off on the high part, going through the melody to nobody, the way you hum a thing you've been working on so long you've stopped hearing it." },
    { n: "She knew the voice. She knew the song. She put her hand flat on the door, an inch from the handle." },
    { n: "She didn't open it. If she opened it there would be a room, and a boy in a chair with headphones round his neck, and he would turn, and he wouldn't see her, or worse, he would. She kept her hand on the door and listened to him get the high part wrong again." },
    { n: "Something came up the hallway out of the gold on too many legs." },
    { n: "Her hand went to her hip, where nothing was, and then something was, cold and heavy, and she called Haenim the way you'd say your own name in the dark to prove you still had one." },
    { battle: { id: 'epi-stay-1', kind: 'scripted', script: 'epi-stay-1', title: 'Alone', forced: true,
      desc: 'Studio 4B’s hallway in Syracuse at midnight, half Tartarus. Solar, by herself, a world away from home.',
      notes: 'Stay fight 1 (alone): solo; pulled back mid-fight.' } },
    { dark: false },
    { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', soft: true },
    { n: "Her bedroom floor. On her knees on the rug in Iwatodai with her palms flat and her breath going like she'd run the river twice. The clock said 12:01." },
    { n: "There was snow in her hair. She put her hand up and felt it, cold, real, melting already, running down behind her ear and into her collar. She knelt there and let it melt. It took a long time. Behind the door in her head the humming had stopped, and she couldn't remember on which note." },
    // Nov 11 2026 (Kat): length. After: the mirror, the hall, Akihiko and the wet hair (akihiko-3 and mitsuru-2 both say he saw).
    { n: "Her hands, when she held them up, had carpet burn across the heels, gray fibers pressed into the skin, a carpet she didn't own. Her knees were shaking. Everything was shaking, in fact, in a fine continuous way, like a glass on a table near a road, and she sat back on her heels and waited for it to stop, and it didn't, so she got up anyway, because that was the other thing a year had taught her." },
    { n: "The girls' bathroom at the end of the third-floor hall. The light buzzed and came on and there she was in the mirror, white-faced, her hair dark and wet at the crown and stuck to her neck, a single flake still caught in it, not melting, perfect, six-sided, the kind they drew on Christmas cards. She looked at it for a long time. Then she put her head under the tap, all of it, and stood up dripping, and there was nothing in her hair but water from Iwatodai." },
    { n: "When she came out Akihiko was on the stairs. T-shirt, a glass of water in his hand from the kitchen, halfway up the flight from the boys' floor where he had no reason at all to be at midnight, stopped dead under the landing light like he'd walked into the edge of something. He looked at her. At her hair, wet to the shoulders, dripping on the floorboards at midnight on a night it hadn't rained." },
    { s: 'akihiko', f: 'surprised', t: "...Solar?" },
    { s: 'solar', f: 'neutral', t: "Couldn't sleep. Washed my hair." },
    { n: "It was a terrible lie. It was the kind of lie you told somebody you trusted to let you tell it. He stood there with the glass of water and she watched him decide, watched it go across his face like weather, and then he held the glass out to her, and she took it, and drank it, and gave it back empty, and he said *goodnight* in a voice that wasn't one, and went back down the stairs one at a time, and she heard his door on the floor below open, and not close all the way." },
    { n: "She lay in the dark afterwards with a towel on her pillow and the door of her own room open a crack too, and listened to the building, the fridge, the pipes, a floor below her a man not sleeping, the stairs creaking once at one o'clock as if somebody had come up three steps to check and gone down again, and at some point she fell asleep listening for that, which was better than listening to the clock." },
    { flag: 'epi-st-alone' }
  ] },

  // ───────────────────────────── 4/1, morning: the charms ─────────────────────────────
  { id: 'epi-st-charms', date: '4/1', slot: 'early', consumes: true, title: 'april fool', place: 'Iwatodai Dorm · Kitchen', time: 'Morning', scene: [
    { music: 'epi-st-charms' },
    { glitch: { stage: 3 } },
    { n: "Junpei had been planning the prank since February. It involved salt in the sugar bowl and a speech, and he had rehearsed the speech, and he was halfway through it at the kitchen counter, holding the bowl up like a trophy, when it stopped being April Fool's." },
    { s: 'junpei', f: 'happy', t: "—and that, ladies and gentlemen, is why you never trust a sugar bowl you didn't personally—" },
    { n: "Solar was reaching past him for a mug. That was all. Her hand went out for the cupboard and halfway there it changed its mind on its own and went to her temple, two fingers, the old shape, the way a hand goes to a pocket for keys it doesn't carry any more." },
    { n: "She didn't have the Evoker. It was in a drawer upstairs. She didn't need it." },
    { n: "Haenim came up behind her in the kitchen. Not all the way. Enough. Tall and veiled and gold at the edges, filling the space between the fridge and the ceiling, the morning light going through her like through a curtain. Her sash moved. On it, three charms that had hung dark and still for three weeks like keepsakes on a shelf." },
    { glitch: 'epi-st-g-bell' },
    { n: "The gold bell rang." },
    { glitch: 'epi-st-g-jade' },
    { n: "The jade ring rang against it, a sound lower and colder, like a cup set down on stone." },
    { glitch: 'epi-st-g-star' },
    { n: "The star pin, last, high and thin, a sound like a school bell three floors away." },
    { n: "Then she was gone, and the charms were still ringing, very faintly, the way glass rings after you've stopped touching it, and the whole kitchen had heard it." },
    { s: 'junpei', f: 'surprised', t: "...Okay. That's. That's not my prank. I want that on the record." },
    { s: 'aigis', f: 'serious', t: "A bell. Three tones. Source unidentified. It came from Solar-san." },
    { s: 'ken', f: 'serious', t: "You didn't use your Evoker. You don't... I thought you needed it." },
    { s: 'yukari', f: 'serious', t: "Solar. What was that." },
    { n: "Mitsuru had put her cup down. Fuuka had both hands over her mouth. Koromaru was standing in the doorway with his ears flat, looking at the empty air above Solar's head, and whining, very softly." },
    { ifEpiRoute: 'shinjiro', then: [
      { s: 'akihiko', f: 'serious', t: "...That was a bell." },
      { ifYear: awake, then: [
        { phone: [{ from: 'shinjiro', t: 'something rang in here' }, { from: 'shinjiro', t: 'nurse says no it didnt. it did' }], contact: 'shinjiro' }
      ], else: [
        { n: "At ten the nurse told her, conversationally, that he'd moved his hand at seven, all at once, as if somebody had rung for him." }
      ] }
    ], else: [
      { s: 'akihiko', f: 'serious', t: "...That was a bell." },
      { n: "He said it slowly, like a man setting something heavy down because he couldn't carry it any further. He didn't say *pipes*. He didn't say *wind.* A week ago he would have. He looked at her across the kitchen, and she watched him run out of explanations in real time, and arrive at the place where there was only her face." }
    ] },
    { s: 'solar', f: 'surprised', t: "...April Fool's?" },
    { n: "Nobody laughed. Junpei put the sugar bowl down. It was full of salt, and nobody ever found out." },
    // Nov 11 2026 (Kat): length. The breakfast that went on anyway.
    { n: "What happened next was breakfast, because nobody knew what else to do. Mitsuru picked her cup back up and found it empty and poured another with a hand that was almost steady. Yukari sat down hard. Fuuka took her hands away from her mouth and put them flat on the table on either side of her plate as if the table might move. Ken went and got Koromaru's bowl and filled it, though Koromaru had eaten an hour ago, and Koromaru didn't touch it. He came and sat on Solar's feet instead, all of his weight, the way he did in thunderstorms." },
    { s: 'mitsuru', f: 'serious', t: "Aigis. Did you record it?" },
    { s: 'aigis', f: 'neutral', t: "Yes. Thirteen hundred and eighteen hertz, approximately. The second tone was lower. The third I could not resolve. I will post the figures to the group chat." },
    { s: 'junpei', f: 'flustered', t: "Please don't post bell math to the group chat. ...Okay, post it. I wanna know." },
    { n: "Solar made toast. She did it because her hands needed a task and the toaster was there, and she buttered every slice for everybody without asking and put them on the table one at a time, and everybody ate one, even Mitsuru, who never ate toast, chewing slowly with the look of someone doing it on principle. Nobody asked her anything else. That was worse, somehow, than if they had. Every so often one of them looked up at the space between the fridge and the ceiling, quickly, and down again, like checking a stove you know you turned off." },
    { n: "Her temple still felt the two fingers. She kept her hands round her mug so they'd have something to hold. Under the table Koromaru's tail went once against her ankle, and stopped, and he whined again, very low, at nothing anyone else could see." }
  ] },

  // ───────────────────────────── 4/2, late: unseen (fight 2) ─────────────────────────────
  { id: 'epi-st-unseen', date: '4/2', slot: 'late', title: 'unseen', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'epi-st-half' },
    { n: "She was awake at midnight on purpose this time, sitting on the edge of the bed with her shoes on, because if it was going to come she'd decided she wasn't going to meet it barefoot." },
    { glitch: 'epi-st-g-unseen' },
    { place: 'Incheon · Harbor', time: 'Midnight' },
    { dark: true },
    { n: "Cold. Salt cold, the kind that came off water in the dark and went straight into your teeth. Concrete under her shoes, wet. A long harbor wall with the tide working at the bottom of it, breathing in and out against the stone, and the lights of ships at anchor sitting out on the black like somebody had dropped them." },
    { n: "A ship's horn, far out, low. On a bollard by the steps, a dented thermos with the cap off, steam coming out of it. Barley tea. She knew the smell before she knew where she was. Then she knew where she was." },
    { n: "And green over all of it. The harbor lights green, the water green and slick and wrong, and the tide coming up the steps too far, and things coming up out of it, black and shining and shaped like nets." },
    { n: "There were two of them on the wall already. She knew them by their backs." },
    { n: "One in black with his hands empty and loose, light on his feet, the stillness of a boy who'd been waiting for this all his life and didn't want to admit it was fun. Over his shoulder a pale thing hung in the air with a moon for a face. The other ten steps away, straight-backed, coat buttoned to the throat, a black tortoise coiled in a serpent rising behind him like a gate." },
    { n: "Ten steps apart. Not one step closer. She could have measured it." },
    { s: 'jungwon', f: 'serious', t: "Donghyuck. The steps." },
    { s: 'haechan', f: 'neutral', t: "*I see the steps.*" },
    { n: "That was all they said to each other. They didn't look at each other to say it. She was standing between them, close enough to touch either of them, and neither of them turned his head." },
    { s: 'solar', f: 'sad', t: "...Hey. I'm here. I'm right here." },
    { n: "Nothing. The tide breathed. Haechan's eyes went across the place where she was standing to the water, through her, the way you look through a window to the street. She waved a hand in front of Jungwon's face, and felt stupid, and felt worse than stupid, and he didn't blink." },
    { battle: { id: 'epi-stay-2', kind: 'scripted', script: 'epi-stay-2', title: 'Unseen', forced: true,
      desc: 'The harbor in Incheon at midnight. Haechan and Jungwon fight; neither of them can see her.',
      notes: 'Stay fight 2 (unseen): party Solar (ghost), Haechan, Jungwon.',
      fade: "She thinned out between one wave and the next, and the harbor didn't notice. The last of the things went back under the tide. Haechan stood on the wet step a while longer than he needed to, looking at the water, then picked up the thermos off the bollard and poured, and held the cup out to his left, to nobody, and stood like that for a second before he heard himself and drank it. Ten steps away Jungwon was buttoning a cuff that didn't need buttoning. Neither of them said anything. A ship's horn went, far out. They walked off the wall in different directions, the way they always did, and didn't look back, and both of them nearly did." } },
    { n: "The last of them went back under the tide in pieces, and the green went out of the water a shade at a time, and the harbor was just a harbor. Cold. The thermos steaming on its bollard." },
    { s: 'haechan', f: 'neutral', t: "*...Cold tonight.*" },
    { n: "He said it to the air beside him. To her left. To exactly where she stood. He didn't look. Ten steps off, Jungwon's head turned, just slightly, toward the same place, and stopped, and turned back." },
    { dark: false },
    { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', soft: true },
    { n: "Her room. Her shoes on, wet at the toes. She sat on the edge of the bed and put her hands over her face and breathed, and her hands smelled of salt, all the way down into the lines of her palms. She didn't wash them. She fell asleep like that, sitting up, with her face in the smell of the sea." },
    { flag: 'epi-st-unseen' }
  ] },

  // ───────────────────────────── 4/3, daytime: the clocks ─────────────────────────────
  { id: 'epi-st-clocks', date: '4/3', slot: 'after', consumes: true, title: 'twelve', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', scene: [
    { music: 'epi-st-residue' },
    { glitch: 'epi-st-g-clocks' },
    { n: "It was Ken who noticed. Saturday, early afternoon, and he came into the lounge and said, in a small careful voice, that the clock in the hall was wrong, and then that the one in the kitchen was wrong too, and then they all went and looked." },
    { n: "Every clock in the dorm said twelve. The hall clock. The kitchen clock, the microwave. Junpei's watch, which he held up to his ear and shook. The clock on Mitsuru's phone, until she looked at it, and then it said 2:14 like nothing had happened, and when she looked away the corner of her eye said twelve." },
    { n: "And on the big lounge window, on the third of April, in the sun, frost. A single sheet of it, white and fine, in the shape of a tall narrow rectangle with a curve at the top, standing on the sill like something leaning there. Like a door." },
    { s: 'yukari', f: 'surprised', t: "It's sixteen degrees outside. That's... that's not possible, right? Somebody tell me that's not possible." },
    { s: 'aigis', f: 'serious', t: "Frost cannot form on that glass today. I have checked three times. It is still there." },
    { s: 'mitsuru', f: 'serious', t: "Command room. All of you. Now, please." },
    { place: 'Iwatodai Dorm · Command Room', time: 'Daytime' },
    { n: "The command room hadn't been used since March. Dust on the monitors. The big chair. Mitsuru stood at the head of the table and S.E.E.S. sat round it the way they used to sit round it before an operation, and Akihiko came in last with his gloves already on, the red ones, and didn't sit, and nobody asked him why." },
    { s: 'mitsuru', f: 'serious', t: "Clocks at twelve. Residue on the glass. Fuuka?" },
    { s: 'fuuka', f: 'sad', t: "...It's not the Dark Hour. I'd know. It's... it's like someone knocking on a wall from the other side. Very far away. Three someones." },
    { s: 'junpei', f: 'serious', t: "So it's coming back. Right? That's what this is. Senpai, tell me that's not what this is." },
    { s: 'akihiko', f: 'serious', t: "If it is, we'll be ready." },
    { n: "They were half right. That was the worst of it. She sat at the table where they'd planned eight full moons and watched six people get ready to fight something that wasn't coming for the city. It was coming for her. Or she was going to it. She still didn't know which." },
    { n: "Everyone was looking at her. They'd been looking at her since the kitchen on Thursday. They'd been very polite about it." },
    { choose: [
      { t: "Tell them. Some of it.", flag: 'epi-st-told', then: [
        { s: 'solar', f: 'sad', t: "It's not the Dark Hour. It's them. The ones who went home. At midnight I'm... there. Their places. They can't see me." },
        { s: 'solar', f: 'serious', t: "The bell on Thursday was them. The phone at four was them. I think they're looking for me. I don't think they know they are." },
        { n: "Nobody said anything for a long time. Then Mitsuru sat down, which she never did in that room, and folded her hands on the table." },
        { s: 'mitsuru', f: 'neutral', t: "Thank you. ...Then at midnight, from now on, you won't be alone in your room. That's not a request." },
        { s: 'koromaru', f: 'serious', t: "Arf." }
      ] },
      { t: "(Keep it.) It's probably nothing. Leftovers.", flag: 'epi-st-kept', then: [
        { s: 'solar', f: 'serious', t: "It's probably leftovers. The end of something. It'll stop." },
        { glitch: { strain: 1 } },
        { n: "Mitsuru looked at her the way she looked at a report she knew had been edited. Akihiko didn't take his gloves off. Fuuka looked at her hands." },
        { s: 'mitsuru', f: 'sad', t: "...Very well. If it doesn't stop, I'd like to be the first to know. Not the last." }
      ] }
    ] },
    { n: "When they came out, the frost on the lounge window had melted into one long line of water down the glass, and every clock in the dorm said 2:31, and they all believed it a little less than they used to." }
  ] },

  // ───────────────────────────── 4/4, late: unheard (fight 3) ─────────────────────────────
  { id: 'epi-st-unheard', date: '4/4', slot: 'late', title: 'unheard', place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', scene: [
    { music: 'epi-st-half' },
    { glitch: { stage: 4 } },
    // The days pass (Nov 5 2026): on the told path she isn't alone (epi-st-clocks' promise; story-days.js epi-st-rota's watch).
    { ifFlag: 'epi-st-told', then: [
      { n: "She wasn't alone. Mitsuru had said she wouldn't be, and Mitsuru had made a chart. Yukari was on the floor with her back against the bed and a blanket round her shoulders and a bag of shrimp chips she hadn't opened. Fuuka was in the desk chair with her headphones round her neck and her eyes shut. Koromaru lay across the door. Out in the hall, on the floor, she could hear Akihiko not sleeping." },
      { n: "At eleven fifty-nine Yukari reached up without looking and took hold of the hem of Solar's sleeve, a pinch of it, between finger and thumb, and held on." },
      { s: 'fuuka', f: 'sad', t: "...It's coming. I can hear it. I'm sorry. I'm right here." }
    ] },
    { n: "Midnight came, and the room went, and she let it." },
    { glitch: 'epi-st-g-unheard' },
    { place: 'Hanlim · School · Gym at Midnight', time: 'Midnight' },
    { dark: true },
    { n: "Varnish, and dust, and the rubber smell of a gym floor. Hanlim's gym, the big one, with the bleachers folded up against the wall and a ladder standing in the middle of the court, and streamers looped from the rafters, balloons loose across the floor, a banner on the floor with half its letters painted. Something the council had voted on in a meeting she had been at, once. Nobody had finished it." },
    { n: "Green light coming down through the high windows. And two boys under it, back to back on the half-court line, with things coming in at them from the dark under the bleachers." },
    { n: "Jungwon, in his school jacket, sleeves pushed up, dimples gone flat with concentration. Jihoon, taller, a chain swinging at his hip, laughing at something that wasn't funny in the way he laughed when he was frightened. And something in her chest went out to both of them at once, the old table and the new one, and stopped halfway, because there was nowhere to put it." },
    { n: "Jihoon saw her first." },
    { n: "His eyes went right to her. Right to her face, by the ladder, and his whole body stopped, and then he turned his head away, hard, the way you turn from a car crash." },
    { s: 'jihoon', f: 'surprised', t: "Nope. No. Didn't see that. The almighty Hoon saw absolutely nothing just now, and if anyone asks—" },
    { s: 'jungwon', f: 'surprised', t: "...Sol." },
    { n: "He said it quietly. Not a question. He was looking straight at her across the court, the dimpled boy, the president, with his deadpan gone somewhere she'd never seen it go." },
    { s: 'solar', f: 'surprised', t: "Jungwon. Jungwon, I'm here, I'm— can you hear me? Jihoon. Park Jihoon, look at me—" },
    { n: "Her mouth moved. She felt it move. Nothing came out into that gym, not a sound, like shouting through glass. Jungwon watched her lips. She watched him try to read them and fail and keep trying, the way he never stopped at a problem until it was done." },
    { s: 'jungwon', f: 'serious', t: "I can't hear you. ...Stay where I can see you. Please." },
    { s: 'jihoon', f: 'sad', t: "Don't look at her, Yang. That's how they get you. You look, and then she's gone again, and you've—" },
    { n: "Then the things under the bleachers came out all at once, and nobody said anything else." },
    { battle: { id: 'epi-stay-3', kind: 'scripted', script: 'epi-stay-3', title: 'Unheard', forced: true,
      desc: 'Hanlim’s gym at midnight. Jungwon and Jihoon can see her. They can’t hear her.',
      notes: 'Stay fight 3 (unheard): party Solar, Jungwon, Jihoon; her marks followed.',
      fade: "She went out like a lamp on the half-court line, between one swing and the next, and the last of the things went back under the bleachers. Jihoon was talking before it was over, loud, a whole stream of it about how he'd known, he'd absolutely known, nobody could say he didn't, and then he ran out of words in the middle of one and stood there with his hands on his knees. Jungwon had walked to the place where she'd been and was standing in it. He crouched and touched the floor, as if it might still be warm. Then he picked up the paintbrush from beside the banner and finished one letter, very carefully, and set the brush down, and Jihoon watched him do it and for once didn't say anything at all." } },
    { n: "At the end she was standing by the banner, and the gym was quiet, and Jungwon was walking toward her across the court. Not fast. Like you'd walk toward a bird." },
    { n: "She pointed. She didn't know why. At the banner on the floor, at the half of it nobody had painted. He looked down at it. He looked back up at her." },
    { s: 'jungwon', f: 'neutral', t: "...I'll finish it. Is that what you mean? I'll finish it." },
    { n: "Behind him Jihoon had his back turned, both hands in his hair, not looking, so hard it was a kind of looking." },
    { dark: false },
    { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', soft: true },
    { n: "Her room. Her hands. On the side of one of them, a smear of blue paint, still wet. She didn't remember touching anything." },
    { ifFlag: 'epi-st-told', then: [
      { n: "And three faces, a foot from hers. Yukari on her knees with her empty hand still closed on nothing, the way it had closed when the sleeve went. Fuuka with her headphones off and both hands over her mouth. Koromaru's nose pushed hard into her neck, and the sound he was making, which she'd never heard a dog make. Nobody said anything. Yukari opened her hand, and looked at it, and took hold of the sleeve again." }
    ] },
    { flag: 'epi-st-unheard' }
  ] },

  // ───────────────────────────── 4/5, evening: witness ─────────────────────────────
  { id: 'epi-st-witness', date: '4/5', slot: 'evening', consumes: true, title: 'witness', place: 'Iwatodai Strip · Hagakure', time: 'Evening', scene: [
    { music: 'epi-st-witness' },
    { n: "The last spring break dinner. Mitsuru had announced it at breakfast as a formal event, which meant Hagakure, which meant all of them at the long counter on stools in a row, Koromaru tied up outside with his nose pressed to the glass, and steam going up off eight bowls of ramen into the lights. Monday. School on Wednesday, for the ones who still had school." },
    { s: 'mitsuru', f: 'happy', t: "I'm paying. Please don't argue. I've already argued with the owner about it and I won." },
    { s: 'junpei', f: 'happy', t: "Senpai, you're a legend. Extra pork. Extra everything. This is the best day of my—" },
    { ifEpiRoute: 'shinjiro', then: [
      { s: 'junpei', f: 'neutral', t: "...We should get one to go. For Shinji-senpai. He'd pretend he hates it." }
    ] },
    { n: "Ken was telling Aigis about his new homeroom teacher. Yukari was stealing Fuuka's egg. Akihiko was on his second bowl and arguing with the chef about protein. The restaurant was full, office workers and a couple on a date and two high school girls in the corner taking pictures of their noodles, and it was loud and warm and steaming, and she was laughing at something Junpei had said, mid-sentence, she was about to answer—" },
    { glitch: 'epi-st-g-witness' },
    { n: "—and she wasn't there." },
    { n: "Not gone. Thin. She could see it herself, her own hand on the counter going pale as paper held up to a window, the grain of the wood showing through her fingers. The green came up round her like steam. For one second she was in a gym, and on a harbor wall, and in a hallway with snow at the window, all at once, and in Hagakure with her chopsticks falling through her hand onto the counter." },
    { n: "The two girls in the corner screamed. The chef dropped his ladle. The couple on the date stood up so fast a stool went over. Seven people she loved were looking straight at her, and every single one of them saw." },
    { glitch: 'epi-st-g-home' },
    { choose: [
      { t: "I'm fine. Eat.", then: [
        { s: 'solar', f: 'serious', t: "I'm fine. Eat." },
        { glitch: { strain: 1 } },
        { n: "Her voice came out of somewhere a long way away. Nobody ate." }
      ] },
      { t: "(Hold onto the table.)", flag: 'epi-st-hold-table', then: [
        { n: "She put both hands flat on the counter and held on to it, the wood, the warmth of it, the drip of soup by her bowl, and her fingers went through it, and she held on anyway." }
      ] }
    ] },
    { ifEpiRoute: 'akihiko', then: [
      { n: "Akihiko's hand closed round her wrist. Hard. A boxer's grip, the one he used on a bag, and it shouldn't have caught anything, there was nothing to catch, and it caught her." },
      { s: 'akihiko', f: 'serious', t: "No." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { n: "Ken grabbed her wrist. Both hands, small and fierce, the way he'd once held a spear he was too young for, and his face set the way it had set on a night in October, and he didn't let go." },
      { s: 'ken', f: 'serious', t: "You're not. You're not allowed." }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Junpei grabbed her wrist. He was nearest. He didn't think about it. His hand closed round her the way it had closed round a lot of things that year it couldn't keep, and this time it kept." },
      { s: 'junpei', f: 'serious', t: "Nope! Nope. Got you. Sit down. You're sitting down." }
    ] },
    { n: "Solid. Just like that. Her hand on the counter was a hand. The chopsticks were on the floor. Somebody's heart was going under her fingers and she didn't know whose." },
    { s: 'aigis', f: 'serious', t: "Twenty-three people saw that." },
    { s: 'mitsuru', f: 'neutral', t: "...A trick of the steam. Everyone, please, the steam in here is extraordinary. I'll be paying for everyone's dinner tonight. Everyone's." },
    { n: "It worked, mostly. People will believe almost anything if you buy them ramen. The girls in the corner kept looking. The wrist stayed held under the counter until they paid, and on the walk home, and up the stairs, and nobody asked whose idea that was." },
    { ifFlag: 'epi-st-told', then: [
      { s: 'yukari', f: 'sad', t: "...You said midnight. That wasn't midnight." },
      { s: 'solar', f: 'sad', t: "I know." }
    ] }
  ] },

  // ───────────────────────────── 4/5, late: one second (fight 4) ─────────────────────────────
  { id: 'epi-st-platform', date: '4/5', slot: 'late', title: 'one second', place: 'Iwatodai Station', time: 'Late Night', scene: [
    { music: 'epi-st-half' },
    { n: "She knew where it would be tonight. She didn't know how. At eleven-thirty she put her coat on in the hall and Akihiko was already there by the door with his coat on, and his gloves, and he didn't ask where, and she didn't tell him." },
    { s: 'akihiko', f: 'serious', t: "You're not going alone. Not anymore. I don't care whose idea that was." },
    { n: "The station at eleven fifty-five was empty and lit too bright, the last train gone, a cleaner's cart parked by the gates. They went up the stairs to the platform. The last bench at the end was empty. It was always empty now. She didn't look at it for long." },
    { glitch: 'epi-st-g-platform' },
    { place: 'Iwatodai Station · Platform', time: 'Midnight' },
    { dark: true },
    { n: "Green. The lights went green and the rails went black and gleaming, and somewhere far down the line, so far it was almost a memory, a train horn sounded once and didn't come any closer. This was where the doors had been. She could still see the places on the concrete where they'd stood." },
    { n: "Things came up off the rails, slow, like smoke that had learned to stand." },
    { s: 'akihiko', f: 'serious', t: "Behind me. ...No. Next to me. Fine." },
    { n: "And beside her, at her right shoulder, the air thinned, the way it thinned around her own edges now, and somebody was standing in it." },
    { n: "Half there. A boy in black with headphones round his neck, the platform showing through him, his face turned to the tracks with the old flat stillness. And on her left, ten steps off by habit even here, a boy in a buttoned coat, a tortoise and a serpent rising faint behind him like a reflection in a window." },
    { cg: 'epi-st-platform' },
    { n: "They were here. In Iwatodai. On the platform they'd left from. They didn't look like they knew it yet." },
    { battle: { id: 'epi-stay-4', kind: 'scripted', script: 'epi-stay-4', title: 'One Second', forced: true,
      desc: 'Iwatodai Station at midnight, where the doors were. For one round, the ones who went home are here, and they can hear her.',
      notes: 'Stay fight 4 (contact, reversed): party Solar, Akihiko, Haechan, Jungwon; one round, then they are pulled home.' } },
    { n: "In the one second, after the first hit, when the things had fallen back off the rails, Haechan turned his head." },
    { n: "He looked at her. Right at her. Not through. His eyes did the thing they always did, went still and filed it away, and then didn't, and she watched him not." },
    { s: 'haechan', f: 'neutral', t: "There you are." },
    { s: 'solar', f: 'happy', t: "...Hi." },
    { n: "That was all she had. A year of it and that was all she had. He almost laughed, the flat one, the one that scraped." },
    { s: 'jungwon', f: 'neutral', t: "...You look well. You're eating. Good." },
    { n: "He said it to her and not to Haechan, and Haechan didn't look at him, and Jungwon didn't look back, ten steps, even here, even now, and it was so exactly them that she laughed out loud on the platform with her eyes stinging." },
    { s: 'akihiko', f: 'neutral', t: "Lee." },
    { n: "Haechan looked past her at Akihiko. A nod. One. Two boys who'd shared a dorm all winter and never once agreed about anything, with nothing left to settle between them but her, and they both knew it, and neither of them said so." },
    // Nov 11 2026 (Kat): who knows. "Back home" read as their homes; it's the dorm that knows (epi-st-clocks).
    { ifFlag: 'epi-st-told', then: [
      { n: "She'd told them. Everyone at the dorm knew. She wanted to say that. She wanted to say all of it, the bell and the harbor and the gym and the socks." }
    ], else: [
      { n: "She wanted to say all of it. The bell and the harbor and the gym and the socks and the four a.m. phone." }
    ] },
    { cg: null },
    { n: "The one second ended." },
    { n: "Haechan's hand came up, as if to take her wrist, and closed on light. Jungwon's mouth opened on a word. Then the platform was a platform, and the rails were rails, and the lights were white, and there was nobody at her shoulder, and nobody ten steps off." },
    { dark: false },
    { place: 'Iwatodai Station · Platform', time: 'Late Night', soft: true },
    { n: "Akihiko was breathing hard beside her with his gloves up. He lowered them slowly. He didn't say anything about what he'd seen. He held out his hand, and she took it, and they stood on the empty platform with the cleaner's cart squeaking past down below, and far off down the line, once, a train horn, going the other way." },
    { flag: 'epi-st-platform' }
  ] },

  // ───────────────────────────── 4/6, morning: the last day ─────────────────────────────
  { id: 'epi-st-last-day', date: '4/6', slot: 'early', consumes: true, title: 'the last day', place: 'Iwatodai Dorm · Lounge', time: 'Morning', scene: [
    { music: 'epi-st-last' },
    { n: "The last day of spring break. Tuesday. The dorm smelled of starch. Junpei's uniform, Yukari's, Fuuka's, hanging pressed on the backs of three chairs in the lounge for tomorrow, the first day of their third year, and Yukari had ironed Junpei's because she couldn't watch him do it any more. Ken's school bag by the door, packed since last Tuesday. In the hall, a stack of Mitsuru's boxes, neatly taped, because she was leaving the dorm at the end of the month and had started packing three weeks early, which was, she said, late." },
    { n: "It was one year to the night. Nobody had said so. Everybody knew. They were being very normal about it, which was how she knew they knew." },
    { ifEpiRoute: 'akihiko', then: [
      { n: "She'd gone running with him at five. Along the river in the gray, the cherry petals coming down in the wet, his stopwatch on a string round his neck. At the bridge he'd stopped it, looked at it, and showed her." },
      { s: 'akihiko', f: 'happy', t: "Best time. You're getting faster." },
      { s: 'solar', f: 'happy', t: "Or you're getting slower." },
      { s: 'akihiko', f: 'blushing', t: "...I'm staying at your pace. Don't tell anyone." },
      // Nov 11 2026 (Kat): length.
      { n: "She took the stopwatch off its string and put it in her own pocket, and he let her, and they walked the last of it back up the hill with their hands knocking together and then not knocking, just holding, petals stuck to his wet hair and to the back of his neck where she picked them off one at a time at the front steps, slowly, longer than it took, while he stood very still and let her and pretended he didn't know Junpei was watching from the kitchen window." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { n: "She'd been at the hospital by ten. The physiotherapy room, a bowl of soup, a spoon." },
      { ifYear: awake, then: [
        { n: "He got it to his mouth. Shaking, slow, the right hand, with the physio watching and pretending not to, and the soup mostly stayed on it. He put the spoon down and looked at the bowl like it had insulted his family." },
        { s: 'shinjiro', f: 'neutral', t: "...Too much salt." },
        { s: 'shinjiro', f: 'happy', t: "...You eat yet?" },
        // Nov 11 2026 (Kat): length.
        { s: 'solar', f: 'happy', t: "Junpei made breakfast." },
        { s: 'shinjiro', f: 'neutral', t: "...So no." },
        { n: "He pushed the bowl at her with the back of the bad hand, which he'd never have been able to do a week ago, and didn't comment on it, and she ate the soup that was too salty with the physio pretending to fill in a form and his eyes on her the whole time, and when she was done he took the spoon back off her and held it, just held it, in the right hand, and didn't put it down until she had to go." }
      ], else: [
        { n: "She held the spoon. She told him what the soup was. His fingers moved on the blanket, toward the bowl, a little further than yesterday. The physio wrote it down." }
      ] }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Everyone was in the lounge. Nobody had planned it. Koromaru on the sofa where he wasn't allowed, Aigis polishing Ken's shoes without being asked, Fuuka making tea, Junpei asleep under his own uniform. A whole morning of nobody leaving the room." },
      // Nov 11 2026 (Kat): length.
      { s: 'yukari', f: 'neutral', t: "Okay. Nobody moves. If anybody goes upstairs I'm going to assume they're doing something sad and I'm going to follow them." },
      { s: 'ken', f: 'neutral', t: "I need to use the bathroom." },
      { s: 'yukari', f: 'serious', t: "Ken, that's different, go. Take Koromaru. Come straight back." },
      { n: "He came straight back. Everybody did, every time, all morning, a cup of tea and back, the bathroom and back, the door for the post and back, like the lounge was a lifeboat and they were taking turns leaning over the side. Solar sat in the middle of the sofa with Koromaru's head on her knee and Fuuka's shoulder against hers and let them do it, and didn't once say she was fine, because nobody had asked, and because she'd have been lying, and because she wasn't sure, today, which way." }
    ] },
    { place: "Iwatodai Dorm · Solar's Room", time: 'Morning' },
    // Nov 11 2026 (Kat): length. The room, the form, before the pencil.
    { n: "Her room in the late morning. The bed made with hospital corners because she'd been awake since before five with nothing to do with her hands. The uniform in the closet that she'd never need again, pressed anyway, because Yukari had been ironing and had come in without knocking and taken it off the hanger and done it without a word. On the windowsill, petals, blown in through the inch of open window and lying in a little drift against the glass like something that had tried to get in and given up." },
    { n: "The form was still on her desk. The sticky note. The two boxes. She sat down in front of it the way she'd sat down in front of it every night for two weeks, and for once she didn't look at the empty box. She looked at the one she'd filled. Her first name, in her own handwriting, the S a little too big, the way it had always been, in every life, on every form, in every country. It was the only thing on the page that had come with her from everywhere." },
    { n: "Downstairs somebody laughed. Junpei, waking up. Then Yukari's voice telling him to get off his uniform. Then Koromaru, one bark, glad about something. The sounds came up through the floor and through the open door and sat in the room with her while she looked at the box, and she thought about who'd given her each of the names she'd had, and who'd taken them back, and how this was the first time anybody had ever left the space empty and told her there was no deadline that mattered." },
    { n: "She picked up a pencil." },
    { choose: [
      { t: "(Leave it blank.)", flag: 'epi-st-form-blank', then: [
        { n: "She put the pencil down. The box stayed empty. It wasn't a decision not to. It was a decision not yet, and she was allowed those now. She'd checked." }
      ] },
      { t: "(Write something. Lightly. In pencil.)", flag: 'epi-st-form-pencil', then: [
        { n: "She wrote something in the box. Small, pale, pencil. Not a name. Nothing anyone had given her. A mark you could rub out with a thumb, and she looked at it for a while, and didn't rub it out, and didn't go over it in pen either." }
      ] }
    ] },
    { n: "Then she went downstairs, because somebody was calling her name for lunch, and it was only her first name, and it was enough to answer to." }
  ] },

  // ───────────────────────────── 4/6, late: held (the final) ─────────────────────────────
  { id: 'epi-st-held', date: '4/6', slot: 'late', ends: true, title: 'held', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', scene: [
    { music: 'epi-st-held' },
    { ifEpiRoute: 'shinjiro', then: [
      { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Late Night' },
      { n: "The night nurse had let her stay. She hadn't asked. She'd looked at Solar in the corridor at eleven with her coat still on and her face doing whatever it was doing, and said *the chair's yours,* and gone back to her desk, and turned the corridor lights down." },
      { s: 'nurse', t: "If anyone asks, you're his cousin." }
    ] },
    { ifEpiRoute: 'akihiko', then: [
      { n: "The roof. The garden, the tomatoes Fuuka had planted in March just coming up in their pots, the city below lit gold to the bay. Akihiko by the railing in his coat. He'd come up first so she wouldn't come up to nobody." }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "The roof. Mitsuru at the railing, very straight, in her coat. Junpei on an upturned bucket with his cap pulled down. Koromaru at her feet. The others downstairs, because she'd asked them to be, because she couldn't stand to have everyone watch, and none of them were asleep." }
    ] },
    { n: "Eleven fifty-nine. One year ago she'd stood in a dorm she'd never seen before and a clock had stopped." },
    { glitch: 'epi-st-g-pull' },
    { dark: true },
    { n: "Midnight. And this time it didn't take her somewhere. It pulled." },
    { n: "Three lights came up out of the dark from three directions at once. Gold from the east, low and warm, a bell's color. Green from the sea, cold and deep, jade. White from somewhere very high, sharp as a star pin catching the sun. And they all wanted her. She felt it in her feet first, the floor under her going thin, and then in her hands, which were coming apart at the edges into light, going three ways." },
    { n: "Haenim came up behind her without being called. The charms on her sash were ringing, all three, not faintly now, a sound like three cities' worth of bells." },
    { ifEpiRoute: 'akihiko', then: [
      { cg: 'epi-stay-held' },
      { n: "Akihiko had her. Both arms, from behind, his chin over her shoulder, the boxer's weight braced back against all three directions at once like a man holding a door against weather, and his arms were going through her and he didn't care. He held on to the light." },
      { s: 'akihiko', f: 'serious', t: "I've got you. I'm right here. Look at the city. Look at it. That's where you live." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { ifYear: awake, then: [
        { n: "The bad hand. His right, the one that couldn't hold a spoon three weeks ago, came off the blanket and found her wrist in the light and closed. Shaking. All the way. As hard as it could, which wasn't very hard, which was everything." },
        { s: 'shinjiro', f: 'neutral', t: "...Nope. ...Not you. Not tonight." }
      ], else: [
        { n: "He was asleep. He'd been asleep the whole time. And his hand, the bad one, came off the blanket in his sleep and found her wrist in the light and closed, slow, the way a hand closes when it's been reaching for something a very long time, and it didn't open." }
      ] }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Mitsuru had her left arm and Junpei had her right and they were both pulling, Mitsuru silent with her jaw set, Junpei saying her name over and over like a man trying to start an engine, and Koromaru was barking, barking, barking at the three lights like he could drive them off the roof, and on the stairs below, feet, all of them, running up." },
      { s: 'mitsuru', f: 'serious', t: "Iori. Don't let go." },
      { s: 'junpei', f: 'serious', t: "I'm not! I'm NOT! Senpai, I'm not letting go, tell her—" },
      { s: 'koromaru', f: 'serious', t: "Arf! Arf! Arf!" }
    ] },
    { n: "Then, out of the gold, a voice. Close, as if he were standing at her shoulder on another roof in the snow." },
    { s: 'haechan', f: 'serious', t: "I'll find you. Every world." },
    { n: "Out of the green. Gravel, and a tide behind it." },
    { s: 'yunjin', f: 'neutral', t: "Sol." },
    { n: "Out of the white, last. Formal. Quiet. One word, the way he'd say a thing he'd checked three times." },
    { s: 'jungwon', f: 'neutral', t: "Solar." },
    { n: "The pull went through her like a tide going out. It wanted her. It didn't take her. Not yet." }, // Nov 11 2026 (Kat): she's gone ("Not yet." added)
    { n: "It took something. Behind her, Haenim's veil lifted, by itself, a finger's width. No more. A line of light at the bottom of it, a sliver of a jaw, the edge of a mouth she knew from mirrors, and the cool air of three worlds coming in under it. Then it hung there, lifted, and didn't fall back." },
    { ifFlag: 'epi-st-rooms-keep', then: [
      { n: "Downstairs, in her room, the thing she'd kept from their rooms was ringing too, very faintly, the way glass rings, the way a thing rings when somebody on the other end has picked up." },
      // Batch 9: what she kept answers in its own way (the four epi-st-kept-<id> flags from epi-st-rooms).
      { ifFlag: 'epi-st-kept-haechan', then: [
        { n: "The can on her desk had gone cold again. Beaded. As if somebody on the other end had just taken it out of a fridge and set it down next to her form." }
      ] },
      { ifFlag: 'epi-st-kept-hyein', then: [
        { n: "In the sewing kit on her desk, the pins in their neat spiral were turning, slowly, all together, like a compass that had found its north and didn't want to say which one." }
      ] },
      { ifFlag: 'epi-st-kept-hanni', then: [
        { n: "On her nightstand, Hanni's alarm clock went off. Not six-forty. Twelve. It rang and rang and nobody on that side of the door got up to turn it off." }
      ] },
      { ifFlag: 'epi-st-kept-yunjin', then: [
        { n: "The rabbit socks, balled on her radiator the way Yunjin used to leave them, were warm. Not radiator-warm. Somebody's, the way a thing is warm when someone has only just taken it off." }
      ] }
    ] },
    { ifFlag: 'epi-st-form-pencil', then: [
      { n: "On her desk, in the dark, the pencil mark in the surname box had gone a little darker, as if somebody had gone over it once, gently, from the other side." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { n: "And the hand on her wrist was still holding." }
    ], else: [
      { n: "And the arms around her were still holding." }
    ] },
    { n: "The three lights hung there, gold and green and white, very patient. The bells rang. Her hands were half light and half hers. Nobody let go. Nobody had decided anything. It was one year to the night, and every clock in Iwatodai said twelve, and stayed there, and she was held." },
    { flag: 'epi-st-held' },
    // Nov 11 2026 (Kat): she's gone. The plan had the pull take only "something of her"; Kat: she disappears at the end of every
    // epilogue (Runners' epi-r-midnight is the model). The pull takes her from this world too; the aftermath in the third person.
    { n: "Then the clock in the stairwell ticked over." },
    { n: "Twelve oh one. Somewhere below them, in the lounge, the old clock over the television that had stopped every night for a year at midnight and started again in the morning like nothing had happened, ticked, once, and went on." },
    { n: "And the three lights stopped being patient." },
    { n: "She felt them decide. All three at once, the gold and the green and the white, the way three people pick up one end of a heavy thing together on a count nobody says out loud. The floor under her went from thin to nothing. Her hands went from half hers to not hers at all." },
    { ifEpiRoute: 'shinjiro', then: [
      { n: "The hand on her wrist didn't let go. It didn't need to. Her wrist went out of it the way water goes out of a fist, and the fingers stayed closed, round the shape of it, on the blanket, and held the shape." },
      { s: 'solar', f: 'sad', t: "Shinji— Shinjiro, I'm sorry, I don't want—" },
      { ifYear: awake, then: [
        { n: "His eyes were open. He was looking at her. He'd seen worse things than this, and done worse, and come back from further than this, and his face didn't move, except his jaw, once." },
        { s: 'shinjiro', f: 'neutral', t: "...Hey. Eat something. Wherever it is." },
        { s: 'shinjiro', f: 'serious', t: "...And come back. You hear? Don't make me come get you. I'll do it. Took me a year to hold a spoon. I'll do it anyway." }
      ], else: [
        { n: "He didn't wake. His face didn't change. Only his hand, the bad one, closed a little tighter on the shape of her wrist as it went out of it, the way a sleeping hand closes when someone tries to take something out of it." },
        { n: "The monitor by his bed went on beeping. Slow. Steady. The most patient sound in the building." }
      ] }
    ], else: [
      { n: "The arms around her didn't open. She went out of them anyway, the way smoke goes through a fence, and they stayed closed round the place she'd been, braced, holding." },
      { s: 'solar', f: 'sad', t: "I'm sorry. I'm sorry, I'm sorry, I stayed, I *stayed*, I don't want to—" },
      { ifEpiRoute: 'akihiko', then: [
        { n: "He didn't let go. He held tighter, if anything, his chin still over her shoulder, his breath in her ear going hard and fast like the last round of a fight he already knew he was losing on points, and he said the thing. One word. The one he'd been holding back all year so it would be hers to say first." },
        { s: 'akihiko', f: 'serious', t: "Stay." },
        { s: 'akihiko', f: 'sad', t: "...Sol. Stay." }
      ] },
      { ifEpiRoute: 'sees', then: [
        { n: "Koromaru had stopped barking. That was how she knew. He was standing with his front paws on her feet, on what had been her feet, whining, very small, the way he whined at the shrine when it rained." },
        { s: 'mitsuru', f: 'serious', t: "Solar. You came back to us once. We'll be here." },
        { s: 'junpei', f: 'sad', t: "We kept your room, okay? We're gonna keep your room. Nobody's touching it. Senpai, tell her—" },
        { s: 'mitsuru', f: 'sad', t: "...We'll keep the room." }
      ] }
    ] },
    { n: "It was the last thing she heard." },
    { dark: false },
    { ifEpiRoute: 'shinjiro', then: [
      { cg: 'epi-stay-gone-ward' },
      { n: "On the third floor of Tatsumi Memorial, at two minutes past midnight, the corridor lights were turned down and the night nurse was at her desk writing up her notes, and in the last bed by the window a young man lay with his right hand closed on the blanket, round nothing, very tight." },
      { n: "The chair beside the bed was empty. It was still warm. The visitor's coat wasn't on the back of it anymore, and the paper cup of vending-machine tea on the windowsill was still steaming, a little, into the dark." },
      { ifYear: awake, then: [
        { n: "He didn't call anyone. He didn't press the button. He lay on his back with his eyes open and his bad hand closed and looked at the ceiling, and when the nurse came round at one she found him exactly like that, and he said *don't,* before she'd said anything at all, and she didn't." }
      ], else: [
        { n: "When the nurse came round at one she found his hand closed on the blanket, and tried, gently, to open it, the way she straightened all the sleepers' hands at night, and it wouldn't open. She left it. She sat in the empty chair for a minute, for no reason she could have written in her notes." }
      ] },
      { n: "At twenty to one the lift doors opened at the end of the corridor and Sanada Akihiko came out of them at a run, in his tracksuit, no coat, his breath still steaming from outside. He'd been asleep. He'd woken up at midnight on his feet." },
      { n: "He stopped in the doorway. He looked at the empty chair, and at the hand on the blanket, and at the tea on the sill, and he didn't ask. He sat down on the edge of the bed, and put his own hand over his friend's closed one, and held on to that." }
    ], else: [
      { cg: 'epi-stay-gone' },
      { n: "On the roof of a dormitory in Iwatodai, at two minutes past midnight, the city lay gold all the way down to the bay, and the tomatoes Fuuka had planted in March were just coming up in their pots, and the three lights had gone out of the sky as if they'd never been in it." },
      { ifEpiRoute: 'akihiko', then: [
        { n: "Sanada Akihiko stood at the railing with his arms closed around nothing, his chin over a shoulder that wasn't there, braced back against a weight that had gone." },
        { n: "He didn't let go. Not when the bells stopped. Not when the door at the top of the stairs banged open behind him and the others came out onto the roof one after another in their pajamas and their socks, Junpei first, Yukari with her hand over her mouth, Fuuka already holding her head, Ken, Aigis, Mitsuru last, very straight, and stopped. Not when Koromaru went past all of them and lay down at his feet, on the spot where she'd stood, and put his chin on his paws." }
      ] },
      { ifEpiRoute: 'sees', then: [
        { n: "Mitsuru and Junpei were on their knees on the roof with their arms out, each with both hands closed on nothing, the way you'd hold the two ends of a rope across a gap." },
        { n: "Neither of them let go. Not when the bells stopped. Not when the others came out of the stairwell behind them, in their pajamas and their socks, and stopped. Koromaru lay down on the spot where she'd stood, and put his chin on his paws, and didn't bark again." }
      ] },
      { n: "Fuuka had her eyes shut. She'd had them shut since the door. She was reaching the way she reached in the tower, all of her, out over the city and the bay and the dark water past the island, further than she'd ever tried." },
      { s: 'fuuka', f: 'sad', t: "...I can't find her." },
      { s: 'fuuka', f: 'sad', t: "She isn't anywhere. She isn't anywhere I can reach." },
      { n: "Nobody said anything. Nobody went back in. They stood on the roof in the cold, all of them, in a knot around the one in the middle holding on to the space where she'd been, until the sky over the bay went gray." }
    ] },
    { n: "Downstairs, on the second floor, at the end of the hall, a door stood half open on a room that was made up." },
    { n: "The bed made, square. The uniform in the closet with the ribbon folded over the hanger. On the desk, under the lamp, a form with a sticky note on it in Mitsuru's handwriting, and two boxes." },
    { ifFlag: 'epi-st-form-pencil', then: [
      { n: "In the box for a surname, a small pale pencil mark. Not a name. Gone a little darker than she'd left it, as if somebody had gone over it once, from the other side, and then stopped." }
    ], else: [
      { n: "The box for a surname was empty. Nothing anyone had given her. A decision not yet, which she'd been allowed, and which nobody in that building would ever fill in for her." }
    ] },
    { n: "In the morning Mitsuru stopped packing. Her boxes stayed in the hall, neatly taped, and nobody moved them, and nobody touched the room at the end of it. They kept it made up. That was all they could keep." },
    { n: "At midnight, the next night, and the one after that, its light came on by itself." },
    { cg: null }
  ] }

  );
})();
