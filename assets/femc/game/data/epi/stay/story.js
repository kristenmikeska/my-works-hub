/* The Stay epilogue (batch 8, writer A): the story events. Iwatodai, spring break, Wed 3/24/2010 to Tue 4/6/2010, one year
   to the night from her first Dark Hour. The reverse epilogue: Iwatodai is home, and the signals come from the three worlds.
   Format as the runners story files (consumes: true spends the slot; ends: true finishes the act when the scene ends).
   Loaded with the world; wraps itself so load order never matters.
   Events (R.events):
     epi-st-morning     3/24 early    the first morning that is just a morning; the form with the surname box blank
     epi-st-rooms       3/25 after    the searchers' rooms; Mitsuru asks what to do with their things (consumes)
     epi-st-hanami      3/27 after    hanami at Port Island Seaside Park; one frame of Hanni's face in the crowd (consumes)
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
   Wren is never literal (the empty last bench, a horn). No ending line is quoted back. No explicit content. */
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
      { s: 'solar', t: "It's seven." },
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
        { s: 'solar', t: "Leave it. For now." }
      ] }
    ] }
  ] },

  // ───────────────────────────── 3/27, daytime: hanami ─────────────────────────────
  { id: 'epi-st-hanami', date: '3/27', slot: 'after', consumes: true, title: 'first blossoms', place: 'Port Island · Seaside Park', time: 'Daytime', scene: [
    { music: 'epi-st-spring' },
    { glitch: { stage: 1 } },
    { n: "The cherry trees along the seawall had opened that week all at once, the way they did, as if somebody had given an order. Saturday, warm for March, every blue tarp in Port Island spread out under them and every family and office party and couple sitting on one with their shoes off, and the petals coming down slow over all of it like the trees were tired of holding them." },
    { n: "S.E.E.S. had a tarp. Mitsuru had brought a lacquered three-tier box from a restaurant whose name she wouldn't say. Junpei had brought a bento he had made himself, which he unveiled with a drumroll on his own knees." },
    { s: 'junpei', f: 'happy', t: "Behold. The Iori Special. Rice, egg, and..." },
    { s: 'yukari', f: 'neutral', t: "Is that a hot dog cut like an octopus or an octopus cut like a hot dog?" },
    { s: 'junpei', f: 'flustered', t: "It's an octopus! It has legs! Count the legs!" },
    { s: 'aigis', f: 'neutral', t: "It has five legs, Junpei-san. I have also counted one hundred and twelve petals on the tarp since we sat down. The rate is increasing." },
    { n: "Ken was throwing a ball for Koromaru down the grass, and Koromaru was bringing it back to Solar every time instead of Ken, which Ken had stopped taking personally around the fifth throw. Fuuka had petals in her hair and didn't know it. Akihiko had eaten four of Junpei's octopi to be polite and was quietly regretting each one." },
    { s: 'mitsuru', f: 'neutral', t: "I propose a game. Each of us names something from this year. If anyone has heard it before, the speaker drinks. Juice. I'm not an animal." },
    { n: "It turned out Mitsuru was ruthless at it. She remembered everything everybody had ever said in that dorm and she deployed it with the face of a woman reading minutes, and by the third round Junpei had drunk four cups of orange juice and was lying on his back on the tarp groaning, and Mitsuru had not drunk once, and had the very small smile on that she only wore when she was winning." },
    { s: 'mitsuru', f: 'happy', t: "Execution." },
    { n: "Solar laughed. Out loud, the real one, the one that came up out of her chest before she'd decided to let it. Yukari looked over at the sound and then looked away fast, pleased about it, like she'd seen something she wasn't supposed to." },
    { n: "Then she looked up past the tarp into the crowd on the path, the hundred faces going by under the trees, and for one frame, one, the length of a blink—" },
    { glitch: 'epi-st-g-hanni' },
    { n: "Hanni. In the crowd, walking, half turned, in a coat that wasn't a coat anybody wore in Iwatodai, her hair caught in her collar the way it always caught, looking for someone over the heads of the people in front of her. Then a family with a stroller. Then a man in a suit with his tie round his head. Then petals. Nobody." },
    { n: "She looked at the place on the path for a long time. A petal landed in her juice. Nobody on the tarp had turned their head. It was only hers, the way the first ones always were, and she drank the juice, petal and all, and when Junpei asked if she was okay she said yes and handed him the next round." }
  ] },

  // ───────────────────────────── 3/28, evening: the crossroads ─────────────────────────────
  { id: 'epi-st-crossroads', date: '3/28', slot: 'evening', consumes: true, title: 'sunday', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'epi-st-home' },
    { n: "Sunday evening, the last normal one, though nobody had told her that and she wouldn't have believed them. The lounge with the TV on low and Junpei asleep on the sofa with his mouth open, Ken doing a puzzle on the floor, the windows going dark blue. Upstairs, through the ceiling, a door. Outside, the bus stop, the late bus to the hospital at twenty past." },
    { choose: [
      { t: "(Go up to the roof. Akihiko's light's on.)", when: { ifRouteOpen: 'akihiko' }, flag: 'epi-route-akihiko', then: [
        { music: 'epi-st-romance' },
        { place: 'Iwatodai Dorm · Rooftop', time: 'Evening' },
        { n: "His door was open and his room was empty and the light was on, and she knew where he was. He was on the roof by the garden in his coat, not doing anything, which was the rarest thing he ever did." },
        { s: 'akihiko', f: 'surprised', t: "Hey. ...I was going to come down." },
        { s: 'solar', t: "You were going to stand up here for another hour and then come down." },
        { s: 'akihiko', f: 'blushing', t: "...Maybe forty minutes." },
        { n: "She stood next to him at the railing and he moved half a step closer, not touching, close enough to feel the warmth come off his sleeve in the cold, and they watched the city light up a window at a time until it was too dark to count." }
      ] },
      { t: "(Take the late bus to Tatsumi Memorial.)", when: { ifRouteOpen: 'shinjiro' }, flag: 'epi-route-shinjiro', then: [
        { music: 'epi-st-romance' },
        { place: 'Tatsumi Memorial Hospital · 3F Ward', time: 'Evening' },
        { n: "The night nurse saw her in the corridor at a quarter to eight and sighed the sigh of a woman who'd already decided to let her in and wanted credit for it." },
        { s: 'nurse', t: "Fifteen minutes. I mean it this time." },
        { ifYear: awake, then: [
          { s: 'shinjiro', f: 'neutral', t: "...Visiting hours are over." },
          { s: 'solar', t: "I know." },
          { s: 'shinjiro', f: 'neutral', t: "...Sit down, then." },
          { n: "He held out the bad hand on the blanket, palm up, without looking at her, and waited. It shook a little. She put hers in it and it stopped." }
        ], else: [
          { n: "He was asleep, the way he was always asleep, the machines keeping time. She sat in the chair and talked to him about Junpei's octopus. On the blanket his fingers moved, twice, at the funny part." }
        ] }
      ] },
      { t: "(Stay down in the lounge with everyone.)", flag: 'epi-route-sees', then: [
        { n: "She sat on the floor next to Ken and found an edge piece he'd been looking for for twenty minutes. He took it with enormous dignity. Koromaru put his head in her lap. Junpei woke up, said something about octopi, and went back to sleep." },
        { s: 'yukari', f: 'neutral', t: "...This is nice. Don't tell anyone I said that." },
        { n: "Fuuka brought calming tea. Nobody needed calming. They drank it anyway." }
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
    { phone: [{ from: 'hyein', t: 'drink' }, { from: 'hyein', t: 'drink wat' }], contact: 'hanni, hyein' },
    { n: "Then three dots. Typing. She sat up. She held the phone in both hands like it might get away. The dots went on, and on, and on, Hyein typing with her thumbs in a dorm in a city where it was the middle of the morning, and never sending, and then the dots stopped, and nothing came, and the thread was still there, lit, waiting for the end of a word." },
    { glitch: 'epi-st-g-camo' },
    { n: "For two seconds, under the hum of the dorm's fridge downstairs, under her own breathing, there was a song. A bassline she'd have known asleep. Then the fridge again." },
    { place: 'Iwatodai Dorm · Kitchen', time: 'Late Night' },
    { n: "She went downstairs in her socks and stood at the kitchen sink in the dark and ran the tap until it went cold and drank a glass of water, all of it, standing up. It wasn't for any reason. She put the glass in the rack. She stood there with her hands on the edge of the sink." },
    { ifEpiRoute: 'akihiko', then: [
      { n: "The light came on. Akihiko in the doorway in a T-shirt, hair flat on one side, squinting." },
      { s: 'akihiko', f: 'neutral', t: "Heard you on the stairs. ...You okay?" },
      { s: 'solar', t: "Thirsty." },
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
        { s: 'solar', t: "Thirsty." },
        { glitch: { strain: 1 } },
        { n: "He nodded like he believed her. He was a bad liar about believing people." }
      ] }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Mitsuru was at the dining table in the dark in a dressing gown, with a cup of tea gone cold in front of her and her hands round it, and Solar hadn't seen her until she moved." },
      { s: 'mitsuru', f: 'neutral', t: "You couldn't sleep either." },
      { s: 'solar', t: "Just thirsty." },
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
    { n: "She went down. She picked it up. She didn't say hello." },
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
      { n: "She went and got her shoes. He waited at the door, holding it open on the cold blue dark, not asking." }
    ] }
  ] },

  // ───────────────────────────── 3/31, daytime: renamed ─────────────────────────────
  { id: 'epi-st-renamed', date: '3/31', slot: 'after', consumes: true, title: 'where is she', place: 'Paulownia Mall · Chagall Café', time: 'Daytime', scene: [
    { music: 'epi-st-spring' },
    { n: "Chagall at two on a Wednesday, the good table by the window, three drinks with too much cream on them. Yukari had declared a girls' afternoon at breakfast with the authority of someone who'd been planning it for a week, and Fuuka had brought a list of things to talk about in case they ran out, which they didn't." },
    { s: 'yukari', f: 'neutral', t: "Third year. I'm going to be a third-year. Who let that happen?" },
    { s: 'fuuka', f: 'happy', t: "You're going to be so good at it. Everyone's going to be scared of you." },
    { s: 'yukari', f: 'blushing', t: "...Okay, that's the nicest thing anyone's said to me all month and it's so mean." },
    { n: "Solar's phone, face down by her saucer, buzzed once. She turned it over to be polite to it." },
    { n: "A group chat. She had never been in it, not in this world, not on this phone. SOLAR SYSTEM, it said at the top, in the font her phone used for everything, with a number of members her phone shouldn't have been able to count. No messages. Just the name." },
    { n: "While she watched, the name changed. *SOLAR SYSTEM* went to *where is she.* A notice under it, small and gray, the way those notices always were. Somebody had changed the group name. It didn't say who." },
    { glitch: 'epi-st-g-hoax' },
    { n: "Two seconds of a song came up under the café's radio, bright and bratty, a song that belonged to a school hallway in another country, and went." },
    { n: "Then *where is she* went back to *SOLAR SYSTEM,* like somebody else had reached over and changed it back, fast, before anyone could see. Like you'd pull a sleeve down over a bruise." },
    { s: 'fuuka', f: 'surprised', t: "...Solar? You've gone pale." },
    { n: "Fuuka was looking at her. Not at the phone. At her face, with the soft careful attention she'd once used to find people in the dark from a long way off." },
    { s: 'solar', t: "Too much cream. I'm fine. What's next on your list?" },
    { n: "She put the phone back face down and smiled the bright one, the one that had worked on student councils and fraternity houses and her father, and Fuuka looked at it for one second too long, and then read the next thing off her list, which was *favorite season,* and Yukari said spring, obviously, and Solar said spring too, and meant it more than either of them knew." }
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
    { s: 'solar', t: "...April Fool's?" },
    { n: "Nobody laughed. Junpei put the sugar bowl down. It was full of salt, and nobody ever found out." }
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
    { s: 'solar', t: "...Hey. I'm here. I'm right here." },
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
        { s: 'solar', t: "It's not the Dark Hour. It's them. The ones who went home. At midnight I'm... there. Their places. They can't see me." },
        { s: 'solar', t: "The bell on Thursday was them. The phone at four was them. I think they're looking for me. I don't think they know they are." },
        { n: "Nobody said anything for a long time. Then Mitsuru sat down, which she never did in that room, and folded her hands on the table." },
        { s: 'mitsuru', f: 'neutral', t: "Thank you. ...Then at midnight, from now on, you won't be alone in your room. That's not a request." },
        { s: 'koromaru', f: 'serious', t: "Arf." }
      ] },
      { t: "Keep it. \"It's probably nothing. Leftovers.\"", flag: 'epi-st-kept', then: [
        { s: 'solar', t: "It's probably leftovers. The end of something. It'll stop." },
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
    { s: 'solar', t: "Jungwon. Jungwon, I'm here, I'm— can you hear me? Jihoon. Park Jihoon, look at me—" },
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
    { flag: 'epi-st-unheard' }
  ] },

  // ───────────────────────────── 4/5, evening: witness ─────────────────────────────
  { id: 'epi-st-witness', date: '4/5', slot: 'evening', consumes: true, title: 'witness', place: 'Iwatodai Strip · Hagakure', time: 'Evening', scene: [
    { music: 'epi-st-witness' },
    { n: "The last spring break dinner. Mitsuru had announced it at breakfast as a formal event, which meant Hagakure, which meant all of them at the long counter on stools in a row, Koromaru tied up outside with his nose pressed to the glass, and steam going up off eight bowls of ramen into the lights. Monday. School tomorrow, for the ones who still had school." },
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
        { s: 'solar', t: "I'm fine. Eat." },
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
      { s: 'solar', t: "I know." }
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
    { n: "They were here. In Iwatodai. On the platform they'd left from. They didn't look like they knew it yet." },
    { battle: { id: 'epi-stay-4', kind: 'scripted', script: 'epi-stay-4', title: 'One Second', forced: true,
      desc: 'Iwatodai Station at midnight, where the doors were. For one round, the ones who went home are here, and they can hear her.',
      notes: 'Stay fight 4 (contact, reversed): party Solar, Akihiko, Haechan, Jungwon; one round, then they are pulled home.' } },
    { n: "In the one second, after the first hit, when the things had fallen back off the rails, Haechan turned his head." },
    { n: "He looked at her. Right at her. Not through. His eyes did the thing they always did, went still and filed it away, and then didn't, and she watched him not." },
    { s: 'haechan', f: 'neutral', t: "There you are." },
    { s: 'solar', t: "...Hi." },
    { n: "That was all she had. A year of it and that was all she had. He almost laughed, the flat one, the one that scraped." },
    { s: 'jungwon', f: 'neutral', t: "...You look well. You're eating. Good." },
    { n: "He said it to her and not to Haechan, and Haechan didn't look at him, and Jungwon didn't look back, ten steps, even here, even now, and it was so exactly them that she laughed out loud on the platform with her eyes stinging." },
    { s: 'akihiko', f: 'neutral', t: "Lee." },
    { n: "Haechan looked past her at Akihiko. A nod. One. Two boys who'd shared a dorm all winter and never once agreed about anything, with nothing left to settle between them but her, and they both knew it, and neither of them said so." },
    { ifFlag: 'epi-st-told', then: [
      { n: "She'd told them. Everyone back home knew. She wanted to say that. She wanted to say all of it, the bell and the harbor and the gym and the socks." }
    ], else: [
      { n: "She wanted to say all of it. The bell and the harbor and the gym and the socks and the four a.m. phone." }
    ] },
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
    { n: "The last day of spring break. Tuesday. The dorm smelled of starch. Junpei's uniform, Yukari's, Fuuka's, hanging pressed on the backs of three chairs in the lounge for tomorrow, the first day of their third year, and Yukari had ironed Junpei's because she couldn't watch him do it any more. Ken's school bag by the door, packed since Sunday. In the hall, a stack of Mitsuru's boxes, neatly taped, because she was leaving the dorm at the end of the month and had started packing three weeks early, which was, she said, late." },
    { n: "It was one year to the night. Nobody had said so. Everybody knew. They were being very normal about it, which was how she knew they knew." },
    { ifEpiRoute: 'akihiko', then: [
      { n: "She'd gone running with him at five. Along the river in the gray, the cherry petals coming down in the wet, his stopwatch on a string round his neck. At the bridge he'd stopped it, looked at it, and showed her." },
      { s: 'akihiko', f: 'happy', t: "Best time. You're getting faster." },
      { s: 'solar', t: "Or you're getting slower." },
      { s: 'akihiko', f: 'blushing', t: "...I'm staying at your pace. Don't tell anyone." }
    ] },
    { ifEpiRoute: 'shinjiro', then: [
      { n: "She'd been at the hospital by ten. The physiotherapy room, a bowl of soup, a spoon." },
      { ifYear: awake, then: [
        { n: "He got it to his mouth. Shaking, slow, the right hand, with the physio watching and pretending not to, and the soup mostly stayed on it. He put the spoon down and looked at the bowl like it had insulted his family." },
        { s: 'shinjiro', f: 'neutral', t: "...Too much salt." },
        { s: 'shinjiro', f: 'happy', t: "...You eat yet?" }
      ], else: [
        { n: "She held the spoon. She told him what the soup was. His fingers moved on the blanket, toward the bowl, a little further than yesterday. The physio wrote it down." }
      ] }
    ] },
    { ifEpiRoute: 'sees', then: [
      { n: "Everyone was in the lounge. Nobody had planned it. Koromaru on the sofa where he wasn't allowed, Aigis polishing Ken's shoes without being asked, Fuuka making tea, Junpei asleep under his own uniform. A whole morning of nobody leaving the room." }
    ] },
    { place: "Iwatodai Dorm · Solar's Room", time: 'Morning' },
    { n: "The form was still on her desk. The sticky note. The two boxes. She picked up a pencil." },
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
    { n: "The pull went through her like a tide going out. It wanted her. It didn't take her." },
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
    { flag: 'epi-st-held' }
  ] }

  );
})();
