/* The strangers epilogue (2/17-3/16/2013, Incheon): the other home bonds (R.bonds), two hangouts each, and the act's routines
   (R.routines). Writer F, epilogue batch 7 (2026-10-28). Data only; loaded with the world (epilogue.js). Bonds go through add()
   so they merge with people.js (Writer E: haechan, jungwon, yunjin, appa, eomma) in either load order. Role 'friend' for all.

   Bonds (the first unseen hangout whose gates fit is the one offered):
     sunghoon  epi-s-sunghoon-1  'the limit'      2/21-3/2 evening, after epi-s-trio (his car from Chinatown, because Jungwon asked)
               epi-s-sunghoon-2  'the doorway'    3/4-3/14 after, after epi-s-gun (the Lee kitchen doorway; Haechan wants through)
     jay       epi-s-jay-1       'reactions'      2/21-3/2 after, after epi-s-trio (the Yang kitchen, the kimchi jar)
               epi-s-jay-2       'loess'          3/4-3/14 evening, after epi-s-dust (the back lane behind the Yang kitchen)
     niki      epi-s-niki-1      'the wall'       2/22-3/2 after, after epi-s-girls (over the Lee garden wall, "the Japanese girls")
               epi-s-niki-2      'a message'      3/4-3/14 evening, after epi-s-dust (a note in Mandarin; he stays to eat)
     house     epi-s-house-1     'pleats'         2/18-2/27 after, after epi-s-kitchen (dumplings for the freezer, Pyo's ghost)
               epi-s-house-2     'the rugs'       3/1-3/14 after, after epi-s-clocks (Mrs. Bang beats the rugs; nobody mentions the clocks)
     mroh      epi-s-mroh-1      'ten and two'    2/18-2/28 evening, after epi-s-home (the night he drove her round till she slept)
               epi-s-mroh-2      'the front seat' 3/1-3/14 evening, after epi-s-seo (outside the bathhouse; the gate, those nights)
     girls     epi-s-girls-1     'four frames'    2/25-3/3 after, after epi-s-moon (a photobooth in Songdo, studio stories)
               epi-s-girls-2     'high score'     3/5-3/14 evening, after epi-s-karaoke (the arcade; Sakura; Kazuha's ghost theory)

   Routines (once each; early or late):
     epi-s-rt-paper      early 2/18-2/24  after epi-s-home     Appa at the kitchen table at 4:30, the paper, the calendar
     epi-s-rt-koi        early 2/18-3/9   after epi-s-kitchen  Mrs. Bang feeding Mr. and Mrs. Kim on the back step
     epi-s-rt-light      late  2/18-3/14  after epi-s-kitchen  Yunjin's light on next door
     epi-s-rt-thermos    late  2/20-3/14  after epi-s-stair    barley tea outside her door in the green thermos
     epi-s-rt-radio      late  2/24-3/7   after epi-s-bureom   the radio on the annex sill, seen from her window (route colour)
     epi-s-rt-masks      early 3/4-3/12   after epi-s-dust     masks by the door with names on them (ifGlitch 3: one too many)
     epi-s-rt-calendar   early 3/1-3/15   after epi-s-home     the calendar turned by someone who got there first
     epi-s-rt-watch      late  2/28-3/15  after epi-s-alone    the watch under her window (ifEpiRoute haechan / jungwon / family)

   Flags set (local; nothing else needs them): epi-s-oh-cranes (she asked Mr. Oh to go round again; read in mroh-2),
     epi-s-niki-name (she told Riki which one was Kazuha; read in niki-2), epi-s-sh-tea (she put tea in both their hands).
   Flags read: epi-s-oh-cranes, epi-s-niki-name, epi-s-clocks (jay-2), epi-route-* via ifEpiRoute (sunghoon-2, girls-2,
     rt-radio, rt-watch). ifGlitch 1 in house-1 (the storeroom), ifGlitch 3 in house-2, girls-2, rt-masks (residue everyone sees).
   Glitch lines: strain after lies that hold the cover in house-1 (Auntie Song), mroh-1 (Mr. Oh), girls-1 (Eunchae); near where a
     boy is present and silent in sunghoon-1 (Haechan at the gate), sunghoon-2 (Haechan in the door), niki-2 (Haechan at the fridge),
     girls-2 (whoever the house sent), rt-watch. No scheduled or inline glitch ids used (those belong to the story events).
   Oblique Personaverse beats, one each: Sunghoon (sunghoon-1, "You'd stopped. Where we were."), Jay (jay-2, he quit smoking over
     there without noticing), Riki (niki-1, nobody here talks like that). Kazuha's ghost theory (girls-2) knows nothing; it's a guess.
   Canon fences kept as the private plan sets them (Claude-only: DO-NOT-OPEN-epilogue-plan-private.md §4).
   Inventions for Kat to confirm (structural, small): Mrs. Bang sent kimchi across to the Yangs and the jar keeps going back and
     forth; Mr. Oh once drove Solar round the harbor road at two in the morning when she was eight and couldn't sleep at low tide
     (her father rang him), and he sat in the car at the gate with the engine on the nights she was gone; Pyo's storeroom ghost
     moved house with him (it "lives in storerooms generally"); Mrs. Bang hangs a dish towel over the kitchen clock after the
     twelve o'clock morning; the girls' studio stories (Yunjin fell off the recital stage at fourteen into the front row, Sakura
     learned every routine from one watch of the video, Kazuha cried at every recital, Eunchae stole hair ties); the arcade is
     on the top floor of a Songdo mall; Taejoon fills in the crossword on the torn calendar page; Mrs. Bang writes names on the
     dust masks; Mrs. Moon (the book's Yang-house cook at the sink) runs the Yang kitchen and stirs against Jay's advice; Auntie
     Song's gossip that Mr. Oh wears his aftershave for a toll-booth woman on the bridge; Riki goes over the Lee wall beside the
     open gate every time (Minseok in the gatehouse). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const AFTER = ['after'];
  const EVE = ['evening'];

  /* ── Park Sunghoon ── */
  add('sunghoon', 'friend', [
    { id: 'epi-s-sunghoon-1', title: 'the limit', hint: "A black car is idling at the bottom of the Chinatown steps. Nobody rang to say it was coming.",
      after: '2/21', until: '3/2', slots: EVE, events: ['epi-s-trio'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Chinatown', time: 'Evening', scene: [
      { music: 'epi-s-step' },
      { n: "She came down the red steps with a paper bag of dumplings she hadn't ordered and the aunties' Mandarin still warm in her ears, the lanterns knocking on their wires overhead and the snow on the steps gone to a gray crust that crunched, and at the bottom, where Mr. Oh's car should have been, there was a different car, black, very clean, its engine running and its wipers parked exactly level." },
      { n: "Park Sunghoon was at the wheel, looking straight ahead through the windscreen as though the car had come by itself and he'd only been put in it to keep it company." },
      { n: "He leaned across and opened the passenger door from inside, which was the most effort she had ever seen him spend on her, and sat back again." },
      { s: 'sunghoon', f: 'neutral', t: "Mr. Oh's taken your mother to the restaurant. Jungwon asked." },
      { s: 'solar', t: "Asked who?" },
      { s: 'sunghoon', f: 'neutral', t: "Me." },
      { n: "That was the whole of it, apparently. Nobody rang anybody in either house any more if they could help it, because the phones were listened to, and so things arrived instead, by car, by runner, by a man who could stand at the bottom of a flight of steps for forty minutes without once looking at his watch. She got in the back. He didn't comment on it. He didn't comment on anything." },
      { place: 'Incheon · The Car', time: 'Evening', soft: true },
      { n: "He drove exactly the limit, hands at ten and two, the way Mr. Oh drove, except that Mr. Oh drove like that because he loved the car and Sunghoon drove like that, she suspected, because a man who drives exactly the limit is a man nobody on the road remembers. No radio. The heater on low. The car smelled of nothing at all, not menthol, not leather, not him, which was a thing she'd only ever noticed about one other person." },
      { n: "She counted his mirrors without meaning to. Rear, left, rear, right, every eleven seconds, like a metronome somebody had set and walked away from." },
      { choose: [
        { t: "You can put the radio on, you know.", stat: { charm: 1 }, then: [
          { s: 'sunghoon', f: 'neutral', t: "No." },
          { s: 'solar', t: "Okay." },
          { s: 'sunghoon', f: 'neutral', t: "Jungwon-ah doesn't like it either." },
          { n: "He heard it a second after she did, the *-ah*, the private name set down in front of her like a cup he hadn't meant to pour, and his jaw did something small and annoyed and was still again. She looked out of the window so he wouldn't have to watch her not smile." }
        ] },
        { t: "(Let the silence be his.)", stat: { kindness: 1 }, then: [
          { n: "She let it be. Somewhere around the Wolmido turn she understood it wasn't hostile, the silence, it was just his, the way a coat is somebody's, and that he'd made room in it for her the way he'd have made room in the back seat for a parcel Jungwon had asked him to carry carefully. She leaned her head on the cold glass. It was the most restful ten minutes she'd had since she came home." }
        ] }
      ] },
      { n: "At the light on the harbor road he spoke without turning his head, in the same flat, bored voice he used for car parks and weather." },
      { s: 'sunghoon', f: 'neutral', t: "You've started counting again." },
      { s: 'solar', t: "What?" },
      { s: 'sunghoon', f: 'serious', t: "Mirrors. Under your breath. Doors, in rooms." },
      { n: "A pause, the red light on the wet road, the indicator ticking for nobody." },
      { s: 'sunghoon', f: 'serious', t: "You'd stopped. Where we were." },
      { n: "Then the light changed, and he drove on at the limit as if he hadn't said anything at all, and she understood she wasn't to answer, so she didn't. Her hand had gone to the jade ring. She left it there." },
      { place: 'Incheon · The Lee House · Gate', time: 'Evening', soft: true },
      { n: "He stopped exactly at the gate, not a hand's width past it. The lanterns were lit. On the wall beside them, one boot up on the stone and his black jacket open in the cold, Haechan was chewing gum and watching the car come up the hill the way he watched weather he hadn't ordered." },
      { s: 'sunghoon', f: 'neutral', t: "Your dog's out." },
      { glitch: { near: true } },
      { n: "Haechan didn't come off the wall. Sunghoon didn't look at him. They had never once, she was fairly sure, looked at each other in the same second, and it was the only thing in the world the two of them agreed on." },
      { s: 'solar', t: "Thank you for the ride, Sunghoon-ssi." },
      { s: 'sunghoon', f: 'neutral', t: "Thank him." },
      { n: "She got out. The car pulled away at the limit, its tail lights going down the hill in no hurry at all, and Haechan spat his gum into the paper and fell into step beside her without a word, which in him was a whole speech." }
    ] },

    { id: 'epi-s-sunghoon-2', title: 'the doorway', hint: "Park Sunghoon is standing in the Lee kitchen doorway, facing the back door. So, unfortunately, is somebody else.",
      after: '3/4', until: '3/14', slots: AFTER, events: ['epi-s-gun'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
      { music: 'epi-s-house' },
      { n: "Jungwon was upstairs in the study with her father and a baduk board, which meant the house had gone quiet in the particular way it went quiet when two men were being polite to each other over stones, and it meant Park Sunghoon was in the kitchen. Standing. In the doorway between the kitchen and the back hall, his back to the room and his face to the back door, the way he stood in every room he'd ever been put in." },
      { s: 'mrsbang', t: "Forty minutes. I've offered him a chair three times." },
      { n: "Mrs. Bang was at the sink with her sleeves pushed up, glaring at his shoulder blades as if they'd tracked mud in. Pyo was flattened against the far counter peeling garlic at a speed that suggested he believed Sunghoon could hear fear. Auntie Song, on her armchair by the stove, didn't look up from her mending." },
      { s: 'auntie', t: "*Leave him. Some men are furniture.*" },
      { s: 'solar', t: "*He understands Mandarin, Auntie.*" },
      { s: 'auntie', t: "*Good. Then he knows he's furniture.*" },
      { n: "If Sunghoon understood, his back didn't say so. Then the back door opened, and the yellow light of the dusty afternoon came in, and Haechan came in with it, stamping grit off his boots, his jacket over one shoulder, gum going, and stopped dead one step inside the door. Because the doorway he needed was the doorway Sunghoon was standing in, and Sunghoon was facing him." },
      { n: "Nobody moved. Pyo stopped peeling. The tap ran. Somewhere upstairs a baduk stone clicked onto the board, small and final." },
      { s: 'haechan', f: 'neutral', t: "Figure skater." },
      { s: 'sunghoon', f: 'neutral', t: "Dog." },
      { s: 'haechan', f: 'neutral', t: "You're in my door." },
      { s: 'sunghoon', f: 'neutral', t: "It's the Chairman's door." },
      { s: 'haechan', f: 'happy', t: "I live here." },
      { s: 'sunghoon', f: 'neutral', t: "In a shed." },
      { glitch: { near: true } },
      { n: "Haechan went silent, which was worse than anything he could have said, and smiled with all of his teeth. The space between them was about one forearm long. She counted the knives on the magnetic strip by the stove without meaning to, seven, and then the people between those knives and either man, one, Pyo, who had realized it at the same moment and gone the color of the garlic." },
      { choose: [
        { t: "(Put a cup of barley tea into each of their hands.)", stat: { kindness: 1 }, flag: 'epi-s-sh-tea', then: [
          { n: "She took two cups off the rack, filled them from Mrs. Bang's pot, crossed the kitchen and put one into Haechan's free hand and the other into Sunghoon's, and stood there until both of them had closed their fingers on them, because a man holding a full cup of hot tea in somebody else's mother's kitchen cannot do anything else at all, and every man in this house had been raised by a Mrs. Bang of some kind." },
          { n: "Sunghoon looked down at the cup as though it had served him with papers. Haechan looked at his as though it had betrayed him personally. They drank. At the same time. Neither of them would ever forgive her." }
        ] },
        { t: "Haechan. Go round by the front.", needs: { courage: 2 }, then: [
          { s: 'haechan', f: 'surprised', t: "Agasshi." },
          { s: 'solar', t: "It's forty steps. I've counted." },
          { n: "He looked at her for a long, wounded second. Then he went back out into the dust and the door banged and they all listened to his boots go round the whole side of the house, the gravel, the front steps, the hall, and then he came in through the other kitchen door, the one from the dining room, which put him directly behind Sunghoon's back." },
          { n: "Sunghoon did not turn round. That was the point. A man who faces the door does not turn round for a dog, and the dog knew it, and stood eighteen inches behind him eating a mandarin out of the fruit bowl as loudly as it is possible to eat a mandarin, which is surprisingly loud." }
        ] },
        { t: "(Say nothing. Let Mrs. Bang handle it.)", then: [
          { n: "Mrs. Bang turned off the tap. She dried her hands on her apron, one finger at a time. She picked up the wooden rug-beater from where it leaned by the back step like a rifle." },
          { s: 'mrsbang', t: "Out. Both of you. Out of my door." },
          { n: "And they went, both of them, through the same doorway at the same moment, because neither would let the other go first, and for one terrible second they were wedged in it shoulder to shoulder, the Yang heir's right hand and the Chairman's dog, before the frame let go of them and they spilled out into the back hall in a silence so total that Pyo laughed out loud and then put a garlic clove in his mouth to stop himself." }
        ] }
      ] },
      { n: "Later, when it had settled, Sunghoon was back in his doorway as if none of it had happened, and Haechan was leaning on the counter by the stove with his arms crossed, and they were both, very carefully, not in the same half of the room. Then Haechan pushed off the counter, filled a cup from the pot without looking at anybody, and set it down on the shelf by the doorway at Sunghoon's elbow, and walked out of the back door into the yellow afternoon." },
      { n: "Sunghoon looked at the cup for a while. Then he left the room. She watched him through the window, standing at the bottom of the garden steps in the dust, light a menthol on the third try and smoke it facing the wall." },
      { n: "He only ever smoked when he was leaving a room. She'd never once seen him leave this one." },
      { ifEpiRoute: 'jungwon', then: [
        { n: "When Jungwon came down from the study, polite and unreadable, Sunghoon was back at the door with the empty cup in his hand, and he looked at it, and at his friend, and said nothing, and Jungwon looked at it, and at her, and his face went very still, which she had learned was the face for when he was pleased." }
      ], else: [
        { ifEpiRoute: 'haechan', then: [
          { n: "Down at the annex Haechan was sitting on his step with the radio on low, and when she came down the garden he didn't look up." },
          { s: 'haechan', f: 'neutral', t: "Don't tell the young master I gave his man tea." },
          { s: 'solar', t: "He'll know. He counts the cups." },
          { s: 'haechan', f: 'happy', t: "Then tell him it was poisoned." }
        ], else: [
          { n: "From the top of the stairs, her father's soft voice came down into the hall, the voice nobody interrupted, mild as milk." },
          { s: 'appa', t: "Sol-ah. Tell them they're both very frightening, and to stop it. I'm losing." }
        ] }
      ] },
      { n: "When Sunghoon left with Jungwon at dusk the cup was on the shelf by the doorway, empty, rinsed, and turned upside down on a folded towel, the way Mrs. Bang turned them. Mrs. Bang looked at it and said nothing for the rest of the evening, and gave Pyo the good end of the fish." }
    ] }
  ]);

  /* ── Jay (Park Jongseong) ── */
  add('jay', 'friend', [
    { id: 'epi-s-jay-1', title: 'reactions', hint: "Mrs. Bang has a jar of kimchi the size of a child that needs to go across to the Yang house. Jay is in their kitchen.",
      after: '2/21', until: '3/2', slots: AFTER, events: ['epi-s-trio'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Yang House · Kitchen', time: 'Daytime', scene: [
      { music: 'epi-s-house' },
      { n: "One plate had gone across to the Yang house, and so a dish had to come back, and so a jar had to go across, and so on, presumably forever, which was apparently how two houses that had spent years trying to ruin each other became neighbors. Mrs. Bang's jar was the size of a small child and had to be carried with both arms. Mr. Oh carried it to the Yangs' kitchen door and set it down and went back to the car without a word, which left Solar holding the lid." },
      { n: "The Yang kitchen was bigger than theirs and quieter, steel counters and a window full of white sky, and it smelled of sesame oil and steam and the cold coming off the window. Mrs. Moon, who ran it, was at the stove. Jay was not at the stove. Jay was standing a respectful distance from the stove in a Tyvek suit tied off at the hips over a faded SEATTLE tee, goggles pushed up in his hair, an unlit cigarette behind his ear, supervising." },
      { s: 'jay', f: 'neutral', t: "Don't stir it. If you stir it you're just making it anxious." },
      { s: 'solar', t: "Is he always like this, Mrs. Moon?" },
      { n: "Mrs. Moon, who was sixty and had stirred things for forty years, stirred it, looking Jay dead in the eye." },
      { s: 'jay', f: 'sad', t: "Fine. Fine. It's your pot." },
      { n: "He saw the jar. He saw her. Something went across his tired face, quick, the same thing that had gone across it when she came in with the plate, and he put it away again where he kept things and nodded at the jar instead." },
      { s: 'jay', f: 'neutral', t: "Mrs. Bang's? Good. That's real fermentation. That's a living thing. Lactobacillus doing the actual work while everybody else takes the credit." },
      { s: 'solar', t: "That's the most romantic thing anyone's said about kimchi." },
      { s: 'jay', f: 'happy', t: "Everything's chemistry. Salt's not a flavor, salt's a door. It lets the water out of things. Caramel's just sugar giving up. Rice is a reaction with a rice cooker standing guard over it." },
      { s: 'jay', f: 'neutral', t: "And a reaction's just a recipe that doesn't forgive you. Same rules. You weigh it. You don't rush it. You skim it and you skim it and you skim it, and the guy who gets bored of skimming is the guy whose stock goes cloudy." },
      { n: "He said *stock* in exactly the voice another man might have said something else, and she let him, because she'd grown up in a house where everybody talked about one thing in the words for another, and she'd learned early which words to leave lying where they fell." },
      { choose: [
        { t: "So what are you making?", stat: { courage: 1 }, then: [
          { n: "The kitchen went quiet in a way that had nothing to do with the stove. Mrs. Moon's spoon stopped. Jay looked at her for a moment, dry, tired, almost fond." },
          { s: 'jay', f: 'neutral', t: "Lunch." },
          { s: 'solar', t: "For who?" },
          { s: 'jay', f: 'happy', t: "The legitimate squid. It's having a very strong quarter. Honestly, record numbers. You should see the squid." },
          { n: "Mrs. Moon started stirring again. That was the end of that, and Solar had known it would be, and asked anyway, because her father had always said you could tell a great deal about a man by how he said no." }
        ] },
        { t: "(Take the fish off the board and clean it yourself.)", stat: { proficiency: 1 }, then: [
          { n: "There was a flounder on the board by the sink, waiting for somebody to care about it. She rolled up her sleeves, took the knife from the block, and did it the way the Chinatown aunties had taught her at eleven, one long pass behind the head and the fillet lifting off the bone clean as a page, the old white scar across her palm pale under the cold tap." },
          { n: "Mrs. Moon stopped stirring. Jay took the cigarette from behind his ear, looked at it, and put it back." },
          { s: 'jay', f: 'surprised', t: "Huh." },
          { s: 'solar', t: "Chinatown." },
          { s: 'jay', f: 'neutral', t: "Respect. Most people saw at it. You didn't saw. That's the whole trick, not sawing. Nobody believes you." }
        ] },
        { t: "(Ask Mrs. Moon what she's making instead.)", stat: { kindness: 1 }, then: [
          { n: "Mrs. Moon brightened by about one degree, which on her was a sunrise, and told her, at length, with the spoon, and Jay stood there with his arms folded and the expression of a man watching somebody explain his own field to him wrong and deciding, heroically, not to say anything." },
          { s: 'jay', f: 'neutral', t: "Too much garlic." },
          { n: "He said it at the exact second Mrs. Moon turned her back, and she heard it anyway, and hit him on the Tyvek with the spoon without turning round, which seemed to be a thing that happened in this kitchen a lot." }
        ] }
      ] },
      { n: "On the way out he walked her to the kitchen door, which he didn't need to do. The empty jar from last time was waiting there for her to take back, washed, with something already in it, wrapped in a cloth." },
      { s: 'jay', f: 'neutral', t: "Tell Mrs. Bang it's not as good as hers. She'll want to hear that." },
      { s: 'solar', t: "Is it?" },
      { s: 'jay', f: 'happy', t: "God, no. It's better. Don't tell her that." }
    ] },

    { id: 'epi-s-jay-2', title: 'loess', hint: "In the back lane behind the Yang kitchen, someone is sitting on a crate in the dust with an unlit cigarette.",
      after: '3/4', until: '3/14', slots: EVE, events: ['epi-s-dust'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Yang House', time: 'Evening', scene: [
      { music: 'epi-s-dust' },
      { n: "The jar had gone back again, of course. It was always going back. She took the lane way round to the Yang kitchen so she wouldn't have to go through the front of the house, past the bins and the steam vents and the high wall with the broken glass along the top that somebody's grandfather had set in the cement, and the dust was in, the whole sky the color of weak tea, the streetlamp at the end of the lane wearing a dirty yellow halo, everything with the edges rubbed off." },
      { n: "Jay was sitting on an upturned crate by the kitchen's back step with his goggles down over his eyes for once, for the dust, and a paper mask hooked under his chin, and the cigarette behind his ear, unlit. He pushed the goggles up when he saw her. Two pale rings round his eyes where they'd been, like a raccoon who'd had a long week." },
      { s: 'jay', f: 'neutral', t: "You came back." },
      { s: 'solar', t: "You said that already. Last month. In there." },
      { s: 'jay', f: 'neutral', t: "Yeah." },
      { n: "He kicked the other crate toward her with one boot. The lane was quiet except for the vents and, far off, a ship's horn going long and low under the dust." },
      { s: 'jay', f: 'serious', t: "Last month it was a question. Now I'm just checking." },
      { n: "She sat down. He took the cigarette from behind his ear and looked at it, the way she had seen him look at it before, the way you look at a photograph of a place you used to live." },
      { s: 'jay', f: 'neutral', t: "Here's a weird one. I quit. A while back. Didn't even notice I'd done it, it just, stopped being a thing I did. And then I came back and the first thing I did, first morning, before coffee, I put one of these behind my ear." },
      { s: 'jay', f: 'neutral', t: "Don't light them. Never light them. I just like to know where it is." },
      { n: "He didn't say where he'd quit, and he didn't say back from where. He didn't need to. The dust moved in the lamplight like something breathing slowly." },
      { ifFlag: 'epi-s-clocks', then: [
        { s: 'jay', f: 'serious', t: "Riki says every clock in your house stopped at twelve. Same minute. Microwave too." },
        { s: 'solar', t: "Riki says a lot of things." },
        { s: 'jay', f: 'neutral', t: "Riki's sixteen. He mostly says things that happened, and then he says them louder." },
        { n: "She didn't answer. He didn't push. He turned the cigarette end over end between them, and she watched it instead of his face." }
      ] },
      { choose: [
        { t: "I'm here, Jay.", stat: { courage: 1 }, then: [
          { s: 'jay', f: 'neutral', t: "That's not what I asked." },
          { n: "A pause, his breath going white and yellow at once in the lamp." },
          { s: 'jay', f: 'happy', t: "But okay. I'll take it. I'll write it down. *Here, Thursday-ish, in the dust.* Good data." }
        ] },
        { t: "What even is this stuff?", stat: { knowledge: 1 }, then: [
          { n: "He brightened, which in Jay meant one eyebrow went up a millimeter." },
          { s: 'jay', f: 'happy', t: "Loess. Silt off the Gobi. Calcium carbonate, quartz, a bit of everything they burn in between, and bad luck. Comes two thousand kilometers to get in your teeth. Every spring. Like a relative." },
          { s: 'solar', t: "You make everything sound like it's on a menu." },
          { s: 'jay', f: 'neutral', t: "Everything's on a menu. You just haven't read far enough down." }
        ] },
        { t: "(Take the cigarette. Hold it for him for a while.)", stat: { kindness: 1 }, then: [
          { n: "She held out her hand. He looked at it, and at her, and then he put the cigarette in her palm, across the old white scar, and she closed her fingers over it, carefully, the way you'd hold a moth." },
          { n: "They sat in the dust and didn't say anything for the length of three ship's horns. Then she gave it back, and he put it behind his ear, and something in his shoulders came down half an inch." },
          { s: 'jay', f: 'neutral', t: "Thanks. I need that one." }
        ] }
      ] },
      { n: "When she stood up to go he put the goggles back down over his eyes and lifted a hand, and the yellow swallowed the lane behind her in about six steps, crate and step and steam and him, as if none of it was there, which in this weather was true of everything, and she found she'd turned round anyway at the corner, to check." }
    ] }
  ]);

  /* ── Riki (Nishimura Riki) ── */
  add('niki', 'friend', [
    { id: 'epi-s-niki-1', title: 'the wall', hint: "Someone has just come over the Lee garden wall instead of through the open gate. He's holding a banana.",
      after: '2/22', until: '3/2', slots: AFTER, events: ['epi-s-girls'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Gate', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The gate was open. It was standing wide open in the thin February sun, both leaves, with Minseok in the gatehouse door drinking a can of coffee and looking straight at it, and Riki came over the wall three meters to the left of it anyway, one hand on the coping and both long legs swinging over sideways in his thin silver puffer, and landed in Mrs. Bang's frozen herb bed with a crunch, headphones round his neck, a banana in his other hand." },
      { s: 'minseok', t: "The gate's open." },
      { s: 'niki', f: 'happy', t: "I know." },
      { n: "Minseok closed his eyes for a moment in the way of a man counting to ten in a language he didn't really believe in, and went back inside." },
      { n: "Riki had brought the jar back, which was why he was here, officially. It was in a cloth bag over his shoulder and had swung into the wall on the way over. It was fine. He showed her it was fine, very seriously, and handed it over, and then he stood there peeling the banana with tremendous concentration, and didn't go." },
      { s: 'niki', f: 'neutral', t: "So." },
      { s: 'solar', t: "So." },
      { s: 'niki', f: 'neutral', t: "Those girls. At the café. With Yunjin-noona." },
      { s: 'solar', t: "Which ones?" },
      { s: 'niki', f: 'flustered', t: "...You know which ones." },
      { s: 'solar', t: "There were four of them, Riki." },
      { s: 'niki', f: 'flustered', t: "The Japanese ones. Obviously. Not, I'm not, it's not a thing. I'm just asking. As a, as a professional. I like to know who's on the street. That's my job." },
      { n: "He took a large bite of banana to stop himself from saying anything else, and she watched him chew a sixteen-year-old's whole pride into it, and was very, very kind, and didn't laugh." },
      { s: 'niki', f: 'neutral', t: "The one who talked to me. Her Japanese is Kyoto. Soft. It goes up at the ends. Nobody here talks like that, nobody, I haven't heard anybody talk like that since—" },
      { n: "He stopped. Not the way you stop when you've forgotten a word. The way you stop at the edge of a platform. His eyes went somewhere over her shoulder, past the gate and the hill and the harbor, a long way, and came back." },
      { s: 'niki', f: 'neutral', t: "...In a while." },
      { n: "He folded the banana peel into a small neat square, the way he always did, and put it in his pocket." },
      { choose: [
        { t: "Her name's Kazuha.", stat: { kindness: 1 }, flag: 'epi-s-niki-name', then: [
          { s: 'niki', f: 'surprised', t: "Kazuha." },
          { n: "He said it the way you'd test ice with one foot. Then again, under his breath, the Japanese way, the vowels all the right length. Then he went bright red from the collar of the puffer to the roots of his hair, all at once, like a kettle." },
          { s: 'niki', f: 'flustered', t: "Okay. Cool. That's, cool. Useful. For the street." },
          { s: 'solar', t: "For the street." },
          { s: 'niki', f: 'flustered', t: "Noona." }
        ] },
        { t: "She thinks you're a ghost, by the way.", stat: { charm: 1 }, then: [
          { s: 'niki', f: 'surprised', t: "A *what?*" },
          { s: 'solar', t: "You came out of nowhere, said one sentence in perfect Japanese, and vanished at a sprint. She told the whole table. Sakura's not convinced. Eunchae wants to set a trap." },
          { s: 'niki', f: 'serious', t: "I'm not a ghost. I'm *fast*. That's completely different. Tell her that. No, don't tell her that. Tell her—" },
          { n: "He thought about it so hard his ears moved." },
          { s: 'niki', f: 'neutral', t: "Don't tell her anything. It's better if she thinks I'm a ghost. Ghosts are cool." }
        ] },
        { t: "Ask Jungwon. I'm sure he'd love to help.", then: [
          { s: 'niki', f: 'surprised', t: "Noona. No. Noona, please, he'd make a *spreadsheet*." },
          { n: "The horror on his face was so total and so sincere that she had to look at the sky for a while." }
        ] }
      ] },
      { n: "When he left, the gate was still open. Both leaves. Minseok came out of the gatehouse to watch. Riki looked at the gate, considered it, took a run of four steps and went over the wall again, three meters to the left of it, and was gone down the hill before the herb bed had finished crunching." },
      { s: 'minseok', t: "Every time." }
    ] },

    { id: 'epi-s-niki-2', title: 'a message', hint: "Riki has run a message across town in the dust. He hasn't left yet.",
      after: '3/4', until: '3/14', slots: EVE, events: ['epi-s-dust'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Evening', scene: [
      { music: 'epi-s-dust' },
      { n: "He came in the back door with the dust, a gust of yellow off the garden and the smell of it, chalk and something burnt a long way off, the paper mask pulled down under his chin and the headphones round his neck and his silver puffer gone the color of old brass from the walk. Nobody rang anybody any more. They sent Riki." },
      { s: 'niki', f: 'neutral', t: "Noona. For you. By hand, he said. Your hand." },
      { n: "A square of paper folded four times, warm from the inside pocket. She unfolded it at the kitchen table. Jungwon's small, exact characters, in Mandarin, which nobody in this house but her and Auntie Song could read and Auntie Song was asleep in her chair." },
      { n: "*The dust is worse tomorrow. I'd be grateful if you didn't go near the water. That's all. I wanted it to arrive in something other than a voice.* And under it, smaller, not signed with his name, a single character. 远." },
      { n: "She folded it again along the same lines and put it in her sleeve, and when she looked up Riki was looking very hard at the fridge to give her privacy, which he'd plainly been told to do by someone, and was doing with enormous effort." },
      { s: 'mrsbang', t: "Sit. You walked across the whole city in that. Sit." },
      { s: 'niki', f: 'surprised', t: "I'm fine, I have to—" },
      { s: 'mrsbang', t: "Sit *down*." },
      { n: "He sat. Mrs. Bang put rice in front of him, and soup, and three side dishes, and then a fourth because the third had looked lonely, and Riki ate the way only sixteen-year-old boys eat, as if the food had personally insulted his family, and Mrs. Bang watched him do it with her arms folded and an expression Solar hadn't seen on her face since the house was full of men who came home late and hungry." },
      { n: "Then the back door opened again, and Haechan came in out of the yellow, and stopped." },
      { n: "He looked at the boy at the table. One second. Long legs folded under the chair, puffer, headphones, rice on his chin, too thin, all elbows and appetite, a kid pretending to be a hard man and mostly pulling it off. Then he looked at the fridge. Then at the clock. Then at anything else in the kitchen that wasn't Riki, for slightly too long, like a man looking away from the sun." },
      { glitch: { near: true } },
      { n: "He didn't say anything. He took a banana out of the fruit bowl on his way past, set it down beside Riki's elbow without looking at him, and went out through the hall door, and they heard the front door, and his boots on the steps, going round the long way to the annex in the dust rather than back across the kitchen." },
      { s: 'niki', f: 'sad', t: "Why does he do that?" },
      { s: 'solar', t: "Do what?" },
      { s: 'niki', f: 'neutral', t: "Not look at me. He does it every time. I haven't even done anything to him. Recently." },
      { choose: [
        { t: "You remind him of somebody he used to be.", stat: { kindness: 1 }, then: [
          { n: "Riki stopped eating. He looked at the banana. He looked at the door Haechan had gone out of." },
          { s: 'niki', f: 'neutral', t: "...Was he cool?" },
          { s: 'solar', t: "He was fast. He went over walls." },
          { n: "Riki thought about that for a long moment. Then he picked up the banana, and didn't eat it, and put it carefully into the inside pocket of his puffer, next to wherever the note had been, as if it was a thing that needed to get somewhere by hand." }
        ] },
        { t: "He doesn't look at anybody. Don't take it personally.", then: [
          { s: 'niki', f: 'neutral', t: "He looks at you." },
          { n: "He said it with his mouth full, not meaning anything by it, and went back to the soup, and she sat at the table with the note in her sleeve and the dust ticking at the window and found she had nothing to say to that at all." }
        ] }
      ] },
      { ifFlag: 'epi-s-niki-name', then: [
        { s: 'niki', f: 'flustered', t: "Did you, um. Tell her I asked. Kazuha-san. You didn't tell her, right." },
        { s: 'solar', t: "I didn't tell her." },
        { s: 'niki', f: 'sad', t: "Oh. Good. Great." },
        { n: "He looked so profoundly disappointed that Mrs. Bang gave him a fifth side dish." }
      ] },
      { n: "He left at eight, mask up, headphones on, and Solar walked him to the gate because it felt like the kind of night you walked people to gates. The gate was open. Minseok was in the gatehouse. Riki looked at the gate, and at her, and grinned behind the mask, and went over the wall into the yellow dark, and was gone." }
    ] }
  ]);

  /* ── The kitchen (Mrs. Bang, Auntie Song, Pyo) ── */
  add('house', 'friend', [
    { id: 'epi-s-house-1', title: 'pleats', hint: "The kitchen has flour on every surface and an argument going in two languages.",
      after: '2/18', until: '2/27', slots: AFTER, events: ['epi-s-kitchen'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
      { music: 'epi-s-house' },
      { n: "Ten people and a bucket of fish meant dumplings for the freezer, three hundred of them, and so the long table had been floured end to end and the whole kitchen had gone white at the edges, the window steamed, the radio on the shelf murmuring the shipping forecast to nobody. Auntie Song stood on her upturned crate at the head of the table in her rubber boots, five feet tall on it, rolling wrappers faster than anyone could fill them. She wasn't singing. It wasn't Sunday." },
      { s: 'auntie', t: "*Xiao yueliang. Sit. Fold. Your pleats used to be fourteen. Let me see if you've gone soft.*" },
      { n: "She sat, and folded, and her hands knew it before she did, the wrapper in her left palm across the scar and the little pinches walking along the edge one after another. Fourteen. Auntie Song took it off the board, held it up to the window like a jeweler, grunted, and put it back, which was the highest praise available in this kitchen." },
      { s: 'mrsbang', t: "She's talking about me. I can always tell." },
      { s: 'solar', t: "She's talking about Mr. Oh's aftershave." },
      { s: 'auntie', t: "*I'm talking about Mr. Oh's aftershave. He puts it on for the woman in the toll booth on the bridge. Twice a week he has business across the bridge. Twice a week. What business has a driver got across a bridge.*" },
      { s: 'mrsbang', t: "She's talking about me." },
      { n: "The gossip went on like that in long Mandarin loops while the pile of dumplings grew, the fish man's new wife and her terrible perm, the Yang kitchen auntie who used too much garlic in everything, a shocking story about a cousin in Qingdao and a refrigerator, and Mrs. Bang folded at the other end of the table with her mouth set, convinced every word of it was about her, and occasionally it was." },
      { n: "Pyo, nineteen and permanently terrified, was sent to the storeroom for more flour and came back without it." },
      { s: 'pyo', t: "It's breathing." },
      { s: 'mrsbang', t: "That's the boiler." },
      { s: 'pyo', t: "The boiler doesn't *sigh*, Mrs. Bang." },
      { n: "He'd brought his ghost with him from the restaurant, apparently, the one that had kept him off the storeroom stairs there for months. It lived in storerooms generally, he'd decided. It went where storerooms went." },
      { ifGlitch: 1, then: [
        { n: "She went for the flour herself. The storeroom light buzzed and caught. And for one breath, between the sacks of rice and the shelf of old onggi lids, the air smelled of curry. Not Auntie Song's. A packet curry, sweet, out of a box, the kind somebody made for a whole dormitory on a Sunday when nobody else would cook." },
        { n: "Then it was flour and cold concrete and the boiler, sighing. She came back out with the sack on her hip and her face exactly as it always was. Pyo looked at her face. Pyo, who noticed nothing, looked at her face for a long time." }
      ] },
      { n: "Auntie Song rolled a wrapper, slapped it down, and didn't look up." },
      { s: 'auntie', t: "*A fever. Ten days in your bed with a fever. Your whole family brought fruit.*" },
      { s: 'auntie', t: "*Next time you have a fever, little moon, take a coat.*" },
      { n: "The kitchen didn't stop, exactly. Mrs. Bang's hands kept folding. But the radio seemed louder, suddenly, and Pyo had gone still with a spoonful of filling halfway to a wrapper." },
      { choose: [
        { t: "*Thirty-nine point four, Auntie. I couldn't keep rice down.*", then: [
          { n: "She said it in Mandarin, evenly, folding, fourteen pleats, and didn't look up either." },
          { glitch: { strain: 1 } },
          { s: 'auntie', t: "*Mm. Thirty-nine point four.*" },
          { n: "The old woman said it back to her the way you'd repeat a price at the market that you didn't believe but were prepared, today, to pay. Then she put another wrapper on the pile. That was all. The lie had held, and something in the room let go of its breath." }
        ] },
        { t: "(Answer in Korean, loud enough for Mrs. Bang.)", stat: { charm: 1 }, then: [
          { s: 'solar', t: "Auntie wants to know how high my fever went, Mrs. Bang." },
          { s: 'mrsbang', t: "Thirty-nine point four. She couldn't keep rice down. I was up three nights with the cloths. Tell her that in her language, and tell her I'll thank her to keep her nose in her own wrappers." },
          { glitch: { strain: 1 } },
          { n: "Auntie Song understood not one word of that and every word of it. She smiled, very small, at her rolling pin, the smile of a woman who'd been listening at doors for nineteen years and knew exactly which ones to stop listening at." }
        ] },
        { t: "(Say nothing. Keep folding.)", stat: { kindness: 1 }, then: [
          { n: "She said nothing. She folded. Fourteen pleats. Fourteen pleats. Auntie Song watched her hands for a while, not her face, never her face, and then reached across the flour and pressed one floury thumb, once, to the back of Solar's wrist, the way you'd press down the edge of a dumpling to make sure it held." },
          { s: 'auntie', t: "*Good. Fourteen.*" }
        ] }
      ] },
      { n: "Three hundred and six, in the end. Pyo counted. Mrs. Bang made him count again. Auntie Song had already gone back to her chair by the stove, boots up on the fender, eyes shut, pretending to sleep, which in this house meant she was listening to everything." }
    ] },

    { id: 'epi-s-house-2', title: 'the rugs', hint: "Mrs. Bang is in the garden beating the rugs. All of them.",
      after: '3/1', until: '3/14', slots: AFTER, events: ['epi-s-clocks'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Lee House · Garden', time: 'Daytime', scene: [
      { music: 'epi-s-house' },
      { n: "Mrs. Bang beat rugs when she was upset. Everybody in the house knew it. You could tell how upset by the number of rugs, and today she had all of them out, every rug in the house, the hall runner and the study rug and the good silk one from the dining room that wasn't supposed to be beaten at all, slung over three washing lines across the bottom of the garden in a sky still faintly yellow at the edges, and she was going at them with the wooden beater like they owed her money." },
      { n: "*Thwack.* A cloud of dust, the house's and the sky's, indistinguishable. *Thwack.*" },
      { n: "Pyo held the corners. Auntie Song sat on an upturned bucket by the back step in her rubber boots, peeling a mandarin and supervising nobody. In the kitchen window behind them, Solar could see the kitchen clock. Someone, she suspected Mrs. Bang, had hung a clean dish towel over it." },
      { s: 'pyo', t: "I'm not going to say anything about the—" },
      { s: 'mrsbang', t: "Then don't." },
      { n: "*Thwack.*" },
      { s: 'pyo', t: "I'm just saying, if there was a time when, say, everything in a house all said the same—" },
      { s: 'mrsbang', t: "Pyo." },
      { s: 'pyo', t: "I'm not saying anything." },
      { n: "He'd started wearing his watch on the inside of his wrist, she noticed, face in, so he wouldn't have to look at it by accident. Auntie Song split the mandarin and ate a segment and spoke in Mandarin to the garden in general." },
      { s: 'auntie', t: "*In my mother's village, twelve o'clock is the hour the ghosts come to the table. You leave a chair out. You don't look at it.*" },
      { s: 'mrsbang', t: "She's talking about the clocks." },
      { s: 'solar', t: "She's talking about her mother's village." },
      { s: 'mrsbang', t: "She's talking about the clocks." },
      { n: "*Thwack.* The silk rug, which would never be the same, gave up a cloud of something that had been in it since before Solar was born." },
      { ifGlitch: 3, then: [
        { n: "Up at the house, the hall clock, which Pyo had stopped winding, which nobody had touched in days, struck once. One. Clear, through the shut windows, across the garden. Nobody turned round. Pyo's hands went white on the corners of the rug. Auntie Song put a segment of mandarin in her mouth and chewed it very slowly. Mrs. Bang raised the beater and brought it down so hard the line sang." }
      ] },
      { choose: [
        { t: "(Take the beater. Have a go.)", stat: { courage: 1 }, then: [
          { n: "Mrs. Bang looked at her for a moment and then handed it over without a word, and Solar stood in front of the hall runner with her feet apart the way she'd seen Mrs. Bang stand all her life and hit it, and hit it again, and it turned out it helped, it turned out it helped a great deal, the jolt going up both arms and the dust going up into the yellow and something in her chest going with it." },
          { s: 'mrsbang', t: "Not from the shoulder. From the back. Like you mean it." },
          { n: "She meant it. Mrs. Bang nodded, once, with something that on another woman might have been pride and on Mrs. Bang was a sniff." }
        ] },
        { t: "(Go in and take the towel off the clock.)", stat: { knowledge: 1 }, then: [
          { n: "She went in. The kitchen was warm and empty and smelled of barley tea. She lifted the dish towel. The clock said twenty past two, which was right, which it had been saying, right, for days now, ticking on as if nothing had ever happened to it. She stood in front of it until she'd counted sixty, and then she hung the towel back over it, exactly as it had been, folded the same way." },
          { n: "When she came back out nobody asked. Mrs. Bang was still beating. But she'd stopped, Solar thought, for those sixty seconds. She'd been watching the window." }
        ] },
        { t: "(Sit on the step with Auntie Song.)", stat: { kindness: 1 }, then: [
          { n: "She sat on the cold step beside the bucket and Auntie Song, without looking, handed her half the mandarin." },
          { s: 'auntie', t: "*You've been gone a long time, little moon. Somewhere.*" },
          { n: "Not a question. Auntie Song never asked questions. She only ever said things in a kitchen and waited to see who flinched." },
          { s: 'solar', t: "*I had a fever.*" },
          { s: 'auntie', t: "*Mm. And now the clocks have one.*" }
        ] }
      ] },
      { n: "When the last rug was done Mrs. Bang stood with the beater hanging at her side and her breath coming white and the sweat at her temples gone gray with dust, and she looked up at the house, at the windows, at all of it, and then at Solar." },
      { s: 'mrsbang', t: "Whatever it is, it's not coming in my kitchen." },
      { n: "Then she wiped her face on her sleeve and said the only thing anyone in the house had agreed to say, the way other people said grace." },
      { s: 'mrsbang', t: "Thirty-nine point four. Aigoo. Go and wash your hands." }
    ] }
  ]);

  /* ── Mr. Oh ── */
  add('mroh', 'friend', [
    { id: 'epi-s-mroh-1', title: 'ten and two', hint: "Mr. Oh has the car warm at the front steps. He hasn't asked where you want to go.",
      after: '2/18', until: '2/28', slots: EVE, events: ['epi-s-home'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · The Car', time: 'Evening', scene: [
      { music: 'epi-s-cover' },
      { n: "The car was warm. It was always warm. Mr. Oh had been warming it at the foot of the front steps every evening since she came home, whether or not she went anywhere, and tonight she came down the steps in her coat and got into the back and sat there with her hands in her lap, and he looked at her once in the mirror, menthol aftershave and the gray at his temples and his hands at ten and two, and didn't ask." },
      { s: 'solar', t: "Anywhere. Just drive." },
      { s: 'mroh', t: "Seatbelt." },
      { n: "He drove the harbor road. Down past the cranes standing over the quays like something told to wait, past the ferry terminal and the bright windows of the sashimi places, round the Wolmido loop, never braking hard, never once in fourteen years braking hard, the car taking every corner like water taking the shape of a cup. The tide was going out. She could feel it in her teeth." },
      { n: "Halfway round the loop he spoke, which he didn't do, not on drives, not unless the sentence had a destination in it." },
      { s: 'mroh', t: "You were eight." },
      { s: 'solar', t: "What?" },
      { s: 'mroh', t: "Two in the morning. The Chairman rang me. You wouldn't sleep. Low tide. You were sitting on the stairs in your coat over your pajamas and you wouldn't go back up." },
      { n: "His eyes on the road. His hands at ten and two." },
      { s: 'mroh', t: "So I drove you round. This road. You counted the cranes out loud. Every time round. Twenty-three. Every time, twenty-three, like you were checking nobody had taken one." },
      { s: 'mroh', t: "Fourth time round, you were asleep against that window. The Chairman carried you in." },
      { n: "She didn't remember. She looked at the window, at the cold glass where an eight-year-old's face would have pressed, and at the cranes going by beyond it, and found she was counting them. Nine, ten. She made herself stop." },
      { s: 'solar', t: "I don't remember that." },
      { s: 'mroh', t: "You were asleep for most of it." },
      { n: "The car came round the bottom of the loop and the lights of the Lee house showed on the hill. He signalled for home, the way he always did, though there was nobody on the road to see, and then he spoke again without taking his eyes off it, flat, the way a man reads out an address." },
      { s: 'mroh', t: "Your aunt's driver asked me how you were. At Seollal." },
      { choose: [
        { t: "And what did you tell him?", then: [
          { s: 'mroh', t: "That you had a fever." },
          { s: 'solar', t: "Thirty-nine point four." },
          { s: 'mroh', t: "That's what I told him." },
          { glitch: { strain: 1 } },
          { n: "He didn't look in the mirror. That was the kindness. He'd handed her the lie like a coat at a door and let her put it on without watching." }
        ] },
        { t: "Go round again. Please.", stat: { kindness: 1 }, flag: 'epi-s-oh-cranes', then: [
          { n: "He didn't answer. He didn't say anything about the please either, though she saw the corner of his mouth notice it. He cancelled the indicator, and took the loop again, and then again, at exactly the same speed, and she sat in the back with her forehead on the cold glass and counted the cranes, out loud, under her breath, and he let her." },
          { n: "Twenty-three. Every time. Nobody had taken one." }
        ] }
      ] },
      { n: "At the foot of the steps he got out and opened her door, as he had done since she was seven, and stood beside it with the cold coming off the harbor, and she got out, and he shut it." },
      { s: 'mroh', t: "Home now." }
    ] },

    { id: 'epi-s-mroh-2', title: 'the front seat', hint: "Mr. Oh is waiting outside the bathhouse with the engine running, the way he waits everywhere.",
      after: '3/1', until: '3/14', slots: EVE, events: ['epi-s-seo'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Bathhouse', time: 'Evening', scene: [
      { music: 'epi-s-family' },
      { n: "She came out of the bathhouse pink to the ears with her hair wet under a knitted hat and a sikhye in a paper cup, the steam still coming off her in the cold, and the car was at the curb exactly where she'd known it would be, engine running, lights on low, Mr. Oh behind the wheel with a newspaper folded into a square and his reading glasses on the end of his nose." },
      { place: 'Incheon · The Car', time: 'Evening', soft: true },
      { n: "She walked past the back door. She opened the front one." },
      { n: "He looked at the door. At her. At the road. He took the folded newspaper off the passenger seat, and his green thermos, and the cloth he cleaned the mirrors with, and put them all on the back seat, in that order, without a word, and she got in beside him." },
      { n: "It was a completely different car from the front. She'd never seen the dashboard from here. There was a paper pine tree hanging from the mirror that had stopped smelling of anything years ago, and a pair of cotton gloves folded on the dashboard, and a mint tin, and none of it had ever been visible from the back, and she sat among it feeling like she'd walked into somebody's kitchen without knocking." },
      { s: 'solar', t: "Do you ever get bored? Waiting?" },
      { s: 'mroh', t: "No." },
      { n: "He pulled out. Ten and two. The wipers took one long pass at the dust on the windscreen." },
      { s: 'mroh', t: "The policewoman. The one with the ice." },
      { s: 'solar', t: "Inspector Seo." },
      { s: 'mroh', t: "She asked me how long I'd driven you. I said since you were seven. She asked if you'd been ill at Seollal." },
      { s: 'mroh', t: "I said you had a fever." },
      { n: "He said it to the windscreen, plainly, the way he'd tell her it was raining. Then he drove for a while, through the yellow streetlights, before he said the other thing." },
      { s: 'mroh', t: "I sat at the gate, those nights. Engine on." },
      { s: 'solar', t: "Which nights?" },
      { n: "He didn't answer. That was the answer. Ten nights, then, at the gate, at the bottom of the hill, with the heater running and the newspaper folded into a square, waiting for a girl who had a fever upstairs to come down the steps and need driving somewhere." },
      { choose: [
        { t: "(Put the radio on. Trot.)", stat: { charm: 1 }, then: [
          { n: "She found the station her father liked, a woman singing about a harbor and a man who didn't come back, and Mr. Oh didn't stop her, and somewhere around the second chorus she saw his right forefinger lift off the wheel, just the one, and tap, twice, on the leather, in time." },
          { n: "In fourteen years she had never once seen his hand leave ten and two. She didn't say anything about it. She'd have sooner died." }
        ] },
        { t: "Thank you, Mr. Oh.", stat: { kindness: 1 }, then: [
          { s: 'mroh', t: "Seatbelt." },
          { n: "She already had it on. He knew she had it on. She looked at him, and his face did nothing at all, and his ears, under the gray at the temples, went very slightly red." }
        ] },
        { t: "(Lean your head on the window.)", ifFlag: 'epi-s-oh-cranes', then: [
          { n: "She leaned her head on the cold glass, the warm car humming under her, the bathhouse still in her bones, and he took the long way home without being asked. The harbor road. The cranes. She didn't count them. She was asleep before the Wolmido turn." },
          { n: "When she woke the car was at the foot of the front steps, the engine still running, and he was sitting with his hands at ten and two, waiting, as if he could have gone on waiting there all night, which, she understood now, he could." }
        ] }
      ] },
      { n: "At the steps he got out and came round and opened her door, the front one, as if it was the door he'd been opening all his life." },
      { s: 'mroh', t: "Home now." }
    ] }
  ]);

  /* ── The girls (Chaewon, Sakura, Kazuha, Eunchae) ── */
  add('girls', 'friend', [
    { id: 'epi-s-girls-1', title: 'four frames', hint: "Chaewon has booked a photobooth. Nobody knows how you book a photobooth. Chaewon has done it.",
      after: '2/25', until: '3/3', slots: AFTER, events: ['epi-s-moon'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Songdo', time: 'Daytime', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The Songdo mall on a weekday afternoon, all glass and pale wood and a fountain doing nothing in particular, and in the corner by the escalators a photobooth with a pink curtain and a laminated sign that read FOUR PEOPLE MAXIMUM, in front of which stood six." },
      { s: 'chaewon', t: "Okay. Three poses. Cute, then serious, then Eunchae does whatever she wants because she's going to anyway." },
      { s: 'eunchae', t: "Thank you for respecting my process." },
      { s: 'sakura', t: "It says four people." },
      { s: 'chaewon', t: "It's a guideline." },
      { s: 'yunjin', f: 'happy', t: "It's a *challenge*. Get in, wifey. You're small. You go on somebody." },
      { n: "They went in. All six. The curtain wouldn't close. Kazuha ended up mostly on Sakura, Eunchae ended up on the floor with only her face in frame, Yunjin's yellow puffer took up the space of a seventh person by itself, and Solar found herself pressed against the side of the booth with Chaewon's elbow in her ribs and somebody's hair in her mouth, laughing before the first flash, which was apparently against Chaewon's rules for the cute one." },
      { n: "Between frames, crushed in the pink light, they told studio stories, all of them at once, over each other, the way people do who learned to count to eight together." },
      { s: 'kazuha', t: "Yunjin fell off the stage at the recital. The year we were fourteen. Into the front row." },
      { s: 'yunjin', f: 'flustered', t: "I *stepped down off* the stage. Dynamically." },
      { s: 'chaewon', t: "Onto my mother." },
      { s: 'sakura', t: "She kept doing the choreography. On the floor. With Chaewon's mother." },
      { s: 'yunjin', f: 'happy', t: "The show goes on, Sakura. That's called professionalism." },
      { s: 'eunchae', t: "Sakura learned every routine from one watch of the video. Every single one. It was disgusting. Kazuha cried at every recital, even the bad ones. I stole everybody's hair ties for three years and nobody ever found out." },
      { s: 'chaewon', t: "We all found out, Eunchae. You had forty hair ties on your wrist." },
      { s: 'eunchae', t: "Allegedly." },
      { n: "Solar hadn't been at that studio. She'd been at piano, the good daughter's hobby, the alibi, behind a closed door in a quiet house. But she knew these stories already, every one of them, because Yunjin had told her every one of them at the time, on the phone, at night, crying with laughter. It was strange to meet them in person. Like meeting people from a book." },
      { n: "Then Eunchae, on the floor, looked up at her with her chin on her fists between flashes, the way she looked at everything, too long and too directly." },
      { s: 'eunchae', t: "Yunjin said you had a fever at Seollal. Like, a bad one." },
      { s: 'eunchae', t: "You don't look like a person who has fevers." },
      { choose: [
        { t: "Thirty-nine point four. I couldn't keep rice down.", then: [
          { s: 'eunchae', t: "Gross. Respect." },
          { glitch: { strain: 1 } },
          { n: "It held. It held so easily, here, in a pink booth with somebody's hair in her mouth, that it frightened her a little, how good she'd got." }
        ] },
        { t: "(Let Yunjin answer.)", stat: { kindness: 1 }, then: [
          { s: 'yunjin', f: 'neutral', t: "She was disgusting, Eunchae. Sweating through everything. I had to hold her hair. I've never been so unattracted to anyone in my life." },
          { glitch: { strain: 1 } },
          { n: "Yunjin said it without missing a beat, without looking at her, with her chin up and her eyes on the camera, and under the pile of coats she found Solar's hand and squeezed it once, hard, and let go." }
        ] }
      ] },
      { n: "Flash. The serious one. Flash. Eunchae's free choice, which turned out to be lying across everybody's laps like a fainting duchess." },
      { choose: [
        { t: "(Do the cute pose. Commit to it.)", stat: { charm: 1 }, then: [
          { n: "She did it. Both hands, the heart, the head tilt, the full thing, the face she'd never in her life made for any camera in Incheon. The girls screamed. Chaewon nodded, satisfied, like a coach whose difficult athlete had finally landed the jump." }
        ] },
        { t: "(In the last frame, look at Yunjin instead of the camera.)", stat: { kindness: 1 }, then: [
          { n: "In the last frame everyone was looking at the lens except her. She was looking at Yunjin, who was laughing with her whole face, head back, the way she hadn't laughed since December. When the strips came out of the slot, Yunjin looked at that frame for a long time. She tore it off along the line very carefully, and put it in the clear pocket of her phone case, behind the phone, and didn't say anything about it at all." }
        ] }
      ] },
      { n: "There were six strips, one each. Kazuha held hers up to the light and squinted at the third frame and announced, with total serenity, that there was somebody standing behind Solar in it. Everybody looked. It was the curtain. Sakura told her it was the curtain. Kazuha said that was what it wanted them to think." }
    ] },

    { id: 'epi-s-girls-2', title: 'high score', hint: "The girls have found an arcade on the top floor in Songdo. Sakura is already winning.",
      after: '3/5', until: '3/14', slots: EVE, events: ['epi-s-karaoke'], noFlags: [], route: null, noRoute: null,
      place: 'Incheon · Songdo', time: 'Evening', scene: [
      { music: 'epi-s-yunjin' },
      { n: "The arcade was on the top floor of the mall, above the cinema, a cave of blinking lights and bass and the smell of hot plastic and popcorn, everything inside it far too loud and far too bright and absolutely indifferent to the dust pressing at the glass roof overhead. Sakura had found the fighting cabinets within forty seconds and sat down at one, and nobody had beaten her since." },
      { s: 'sakura', t: "Next." },
      { s: 'chaewon', t: "That's eleven, Sakura. You're being antisocial." },
      { s: 'sakura', t: "I'm being efficient. Next." },
      { n: "Eunchae was on the dance machine with her coat still on, getting a B on a song she clearly considered an A. Yunjin was feeding tokens into a claw machine full of sad pastel bears and narrating every attempt like a war correspondent. And the house had sent someone, of course, because the house sent someone everywhere now." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Haechan, leaning on the claw machine next to Yunjin with his arms crossed and his gum going, offering expert advice nobody had asked for and losing a token every time he proved it." }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { n: "Jungwon, by the change machine in his dark coat, perfectly still, looking at the arcade the way another man might look at a hostile foreign parliament, which was somehow worse than anything Haechan could have done." }
        ], else: [
          { n: "Minseok, on a stool by the air hockey table, pretending to read a newspaper in an arcade, which convinced no one, least of all Minseok." }
        ] }
      ] },
      { glitch: { near: true } },
      { s: 'eunchae', t: "You always stand where you can see the stairs. Did you know that? Every place we go. The café. The booth. Here. You go straight to where you can see the way in." },
      { s: 'solar', t: "I like stairs." },
      { s: 'eunchae', t: "Nobody likes stairs." },
      { n: "Then Kazuha drifted over from the photo-sticker machines with her strip in her hand and the soft unfocused look she had when she'd been thinking about something unreasonable, and stood beside Solar and looked, not at Solar, but just past her. Over her shoulder. For a long time." },
      { s: 'kazuha', t: "You have people standing behind you." },
      { s: 'sakura', t: "Kazuha. No." },
      { s: 'kazuha', t: "Not bad ones. I'm not saying bad ones." },
      { s: 'kazuha', t: "A lot of them. Like a team. And they're tired. They look like they've been walking for a long time to get somewhere." },
      { n: "The arcade went on being loud. Somewhere a machine played a victory fanfare for nobody. Solar stood very still, which was what she did, which had always been what she did, the stillness coming up through her like cold through a floor, and she didn't turn round, because she knew exactly what would be there if she did, which was nothing, which was an arcade, which was worse." },
      { ifGlitch: 3, then: [
        { n: "For one second, every screen in the place showed the same thing, all of them, the fighting cabinets and the dance machine and the claw machine's little screen: a clock, white on black. 12:00. Then the attract loops came back. Sakura looked at her cabinet. Kazuha didn't look at anything. She just nodded, very slightly, as if something had agreed with her." }
      ] },
      { s: 'yunjin', f: 'serious', t: "She's got a lot of people standing behind her, Kazuha. It's called a family. Most of them are idiots. Leave my wife alone." },
      { n: "Yunjin said it lightly, over her shoulder, without letting go of the claw joystick, and Kazuha said *ah, sorry* and smiled her odd lovely smile and wandered off toward the sticker machines again, and only Solar saw that Yunjin's knuckles on the joystick had gone white." },
      { choose: [
        { t: "(Sit down across from Sakura. Lose with dignity.)", then: [
          { n: "She picked a character because it had a nice coat. Sakura picked the same character, out of what Solar could only assume was contempt. It took eleven seconds." },
          { s: 'sakura', t: "You held block the whole time." },
          { s: 'solar', t: "I was being careful." },
          { s: 'sakura', t: "You can't win being careful." },
          { n: "Sakura put another token in for her without being asked, which from Sakura was practically an embrace." }
        ] },
        { t: "(Beat her. Once.)", needs: { proficiency: 2 }, stat: { proficiency: 1 }, then: [
          { n: "She watched three of Sakura's matches first, standing at her shoulder, counting. Sakura opened every round the same way. Everybody did something the same way. Then she sat down." },
          { n: "She lost the first round. She won the second, by a sliver, and the whole cabinet flashed, and Eunchae screamed from the dance machine without even knowing why, and Sakura sat back and looked at her for the first time as though she was a real person." },
          { s: 'sakura', t: "...Again." }
        ] },
        { t: "Kazuha. What do they look like?", stat: { courage: 1 }, then: [
          { n: "Kazuha turned back. She didn't think it was a strange question. That was the strangest thing about it." },
          { s: 'kazuha', t: "I don't know. I don't see them, I only feel where they're standing. Tall. One of them is very loud." },
          { s: 'kazuha', t: "And there's a dog." },
          { n: "Solar said thank you. Her voice came out completely normal. She went and stood at the top of the stairs for a while, where she could see the way in, and Eunchae, for once in her life, didn't say anything about it." }
        ] }
      ] },
      { n: "Yunjin won a bear in the end, on her twentieth token, a lopsided lilac thing with one eye sewn on wrong, and gave it to Solar, and Solar carried it out through the yellow dust to the car like it was something that needed carrying carefully, by hand." }
    ] }
  ]);

  /* ── Routines: the house's daily life across the act (once each; early or late) ── */
  (R.routines ||= []).push(

    { id: 'epi-s-rt-paper', slot: 'early', after: '2/18', until: '2/24', events: ['epi-s-home'], place: 'Incheon · The Lee House · Kitchen', time: 'Before Light', scene: [
      { n: "Half past four. She heard him on the stairs before she was properly awake, his slippers and the seventh stair's creak, and when she went down in her socks with her hair down he was at the kitchen table under the one light, the paper open, the reading glasses on their cord, an Esse Light unlit in the ashtray like a promise he'd made to somebody and was keeping for now." },
      { n: "The calendar on the wall beside him had already been turned. The number was one smaller than yesterday. He didn't look at it. He didn't look at her either, for a moment. Then he moved the second chair out from the table with his foot." },
      { s: 'appa', t: "Tides. Inner harbor. Low water at—" },
      { s: 'solar', t: "Five forty-one." },
      { s: 'appa', t: "Five forty-one." },
      { n: "He read it off the paper as if he were checking her, and turned the page, and that was all he said, and he didn't ask her anything, not one thing, and the not-asking sat on the table between them as solid as the teapot." },
      { choose: [
        { t: "(Sit with him till it gets light.)", stat: { kindness: 1 }, then: [
          { n: "She sat. He read. At some point he slid the crossword across to her with his pen on top of it, and she did four across, and he made a small noise in his throat that meant *of course you did*, and the window went from black to gray to the color of the inside of a shell while neither of them said a word." }
        ] },
        { t: "(Make him barley tea and go back up.)", then: [
          { n: "She made it the way Mrs. Bang made it, the kettle just off the boil, and put it at his elbow, and he put his hand flat on the table beside the cup for a moment without picking it up. On her way up she stopped on the seventh stair, without meaning to, and stood there, and heard him not turn the page for a long time." }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-koi', slot: 'early', after: '2/18', until: '3/9', events: ['epi-s-kitchen'], place: 'Incheon · The Lee House · Kitchen', time: 'Morning', scene: [
      { n: "Mrs. Bang fed the koi before she fed anybody else. Every morning, on the back step, in her quilted vest with her breath coming white, a tin of pellets in one hand and the other breaking the skin of ice on the bucket with the back of a spoon." },
      { n: "Mr. and Mrs. Kim came up to the spoon, orange and white, slow with cold, mouths opening and closing like they had something important to say and had forgotten it. Yunjin's father's fish. He had named them. Nobody in the house had ever once called them anything else." },
      { s: 'mrsbang', t: "Mrs. Kim's the greedy one. Look at her. Pushing him out the way. Aigoo, she's no better than she should be." },
      { choose: [
        { t: "(Take the tin and feed them yourself.)", stat: { kindness: 1 }, then: [
          { n: "Mrs. Bang gave her the tin and stood over her like an examiner. Solar scattered a few pellets on the black water and Mr. Kim, who was shy, didn't come up for them, so she put the next ones down near the side of the bucket where Mrs. Kim couldn't reach, and he came. Mrs. Bang made a sound that was nearly approval and took the tin back." }
        ] },
        { t: "(Stand on the step and watch them go round.)", then: [
          { n: "She stood on the cold step in her socks and watched them circle, round and round in their small bucket under the gray sky, as if the bucket were the whole sea and they'd decided to be satisfied with it. Upstairs, Yunjin's curtain twitched, and then was still, and Solar didn't look up at it, because Yunjin wouldn't have wanted her to." }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-light', slot: 'late', after: '2/18', until: '3/14', events: ['epi-s-kitchen'], place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
      { n: "Two in the morning, and the line of light under the wall between her room and the next one, the room that had been the guest room and was Yunjin's now, hadn't gone out. It never went out. Yunjin had slept with her light on every night since December, and nobody in the house had once mentioned it, and Mrs. Bang had quietly started putting a new bulb in the drawer of her bedside table every week, just in case." },
      { n: "Through the wall, very faintly, a laptop. A drama. A woman crying beautifully about a man in the rain, and under it, every so often, a much less beautiful sniff." },
      { choose: [
        { t: "(Knock twice on the wall.)", stat: { kindness: 1 }, then: [
          { n: "She knocked, twice, with one knuckle, the way they'd done it through bedroom walls at every sleepover since they were fifteen." },
          { n: "A pause. The drama paused too. Then three knocks back, fast and loud and annoyed, which meant *I'm fine, go to sleep, I love you, shut up*, and then, a moment later, her phone lit on the pillow." },
          { phone: [ { from: 'yunjin', t: "he just told her he has amnesia. AGAIN. this man has had amnesia three times" }, { from: 'yunjin', t: "go to sleep babe" } ] }
        ] },
        { t: "(Go next door. Bring the blanket.)", stat: { courage: 1 }, then: [
          { n: "She went next door with the quilt round her shoulders like a cape. Yunjin, in the yellow puffer over her pajamas, didn't look up from the laptop. She just lifted the edge of her own blanket. Solar got in. They watched the man with amnesia not recognize the woman in the rain for the third time, and Yunjin said it was the worst thing she'd ever seen and cried, and Solar held her hand under the blanket, and neither of them reached for the light." }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-thermos', slot: 'late', after: '2/20', until: '3/14', events: ['epi-s-stair'], place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
      { n: "When she opened her door to go down for water there was a thermos on the floor outside it. Mrs. Bang's old green one, the dented one, the one that had been to every hospital waiting room in this family's history, standing on a folded cloth with a cup upside down on its lid." },
      { n: "Barley tea. Still too hot to drink. Under the cup, a strip torn off the edge of a shopping list in Mrs. Bang's square hand: *Drink it hot. Not cold. HOT.* Underlined twice. As if she knew. As if somebody in this house had noticed that the tea kept going cold in Solar's hands at midnight and decided, without asking anyone anything, to fight it with a thermos." },
      { choose: [
        { t: "(Drink it hot, as instructed.)", stat: { kindness: 1 }, then: [
          { n: "She sat on her floor with her back against the bed and drank it too hot, the way Mrs. Bang meant, the roasted bitter warmth of it going all the way down, and the clock on her desk ticked on past twelve without doing anything strange at all, as if it had been told." }
        ] },
        { t: "(Take it down the garden to the annex.)", then: [
          { n: "She took it down the garden in her socks through the frost. The annex light was on. She put the thermos on the step by the steel door, with the cup and the note, and knocked once with her fist and went back up without waiting." },
          { n: "In the morning the thermos was outside her door again, empty, washed, standing on the same cloth. The note had a second line under Mrs. Bang's, in a much worse hand: *it was hot.*" }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-radio', slot: 'late', after: '2/24', until: '3/7', events: ['epi-s-bureom'], place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
      { n: "From her window she could see the whole garden going down to the annex in the dark, the onggi jars along the wall with frost on their lids, the bare branches, and at the bottom, on the annex sill, the old silver radio with its dial lit orange. She'd never once in her life seen that dial dark at night." },
      { n: "She couldn't hear it from here. She didn't need to. Shipping forecast, then trot, then whatever the night station played at two in the morning for taxi drivers and men on cranes and people who couldn't sleep." },
      { ifEpiRoute: 'haechan', then: [
        { n: "Her lamp went on, and a moment later, as if he'd been watching for it, the music came up, just once, just loud enough to cross the garden, a single bar of a trot chorus sung by a man who'd been dead for twenty years, and then down again to nothing. She put her forehead on the cold glass and laughed without making a sound." }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { n: "Somewhere across the water, past the harbor lights, a different house. A different window. She didn't know which one. She looked anyway, the way you look for a star you've been told is there, and then back down at the little orange dial at the bottom of her own garden, and found she was turning the jade ring." }
        ], else: [
          { n: "Below her, the study light was still on too. Two lights in the dark, one at the top of the garden and one at the bottom, the radio's and her father's, and neither of them, she was perfectly sure, was ever going to admit to keeping the other company." }
        ] }
      ] },
      { choose: [
        { t: "(Turn your lamp off so he can stop pretending to be awake.)", then: [
          { n: "She turned it off. A minute later the orange dial went off too. She stood in the dark and counted to a hundred, and at a hundred it came back on, very quietly, as she'd known it would." }
        ] },
        { t: "(Leave your lamp on.)", stat: { kindness: 1 }, then: [
          { n: "She left it on. Two lights, all night, in the frost. She fell asleep in the chair by the window with her coat over her knees, and when she woke at five the dial was still glowing, and somebody had put a spare blanket over her feet, and she hadn't heard the door." }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-masks', slot: 'early', after: '3/4', until: '3/12', events: ['epi-s-dust'], place: 'Incheon · The Lee House · Gate', time: 'Morning', scene: [
      { n: "Mrs. Bang had put a basket by the front door, and every morning of the dust it was full of paper masks, a fresh box opened each dawn, and on every one of them she'd written a name in black marker across the front where the mouth went, so nobody could take anybody else's. CHAIRMAN. MRS. HAN. PYO. MR. OH. YUNJIN, with a heart Yunjin had added herself. AGASSHI on Solar's, which had been SOLAR yesterday until somebody had crossed it out and written over it in a much worse hand." },
      { n: "Outside the gate the city had gone the color of an old photograph. People going down the hill to the bus with their faces covered to the eyes. Nobody can see faces. Everybody looks the same from the eyes up." },
      { ifGlitch: 3, then: [
        { n: "Mrs. Bang was counting the basket. She counted it again. Eleven masks. Ten people in the house, ten names. The eleventh mask had nothing written on it. Mrs. Bang looked at it for a long moment, at the empty white where a name went. Then she folded it and put it back in the box, carefully, the way you'd put back a letter that hadn't been addressed to you." }
      ] },
      { choose: [
        { t: "(Wear the one that says AGASSHI.)", stat: { charm: 1 }, then: [
          { n: "She put it on. It was the stupidest thing she'd ever worn. She wore it all the way down the hill, and from the annex step, with his own mask hooked under his chin and his gum going, Haechan watched her go and didn't laugh, which took visible effort." }
        ] },
        { t: "(Swap with Yunjin's, heart and all.)", then: [
          { n: "She took the one with the heart. When Yunjin came down ten minutes later she stared at the AGASSHI mask in the basket for a full five seconds and then put it on with enormous dignity and went down the hill in it to her own car, and Solar heard about it, in lowercase, for the rest of the day." }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-calendar', slot: 'early', after: '3/1', until: '3/15', events: ['epi-s-home'], place: 'Incheon · The Lee House · Kitchen', time: 'Morning', scene: [
      { n: "Somebody had got to the calendar first again. Every morning, however early she came down, the day before was already gone off the kitchen calendar and the new number was waiting for her, a day shorter, and she'd started to be able to tell who'd done it by the tear." },
      { n: "Her father tore along the perforations, slowly, exactly, so the stub was clean. Mrs. Bang folded it back first and tore against the fold. Haechan ripped it off sideways in one go and left a ragged flap. Yunjin drew a face on the new number, sometimes happy, sometimes not." },
      { choose: [
        { t: "(Check the bin for the torn page.)", stat: { knowledge: 1 }, then: [
          { n: "It was in the kitchen bin, on top, folded once. On the back of yesterday someone had filled in a crossword clue in the margin in small square blue ballpoint, seven down, the clue she'd known and he'd pretended not to. She smoothed it flat and put it in her pocket and didn't tell anybody she was keeping them." }
        ] },
        { t: "(Don't look. Just let it be turned.)", stat: { kindness: 1 }, then: [
          { n: "She didn't look at who. She looked at the number instead, the way she would have looked at a tide table, and then away, and poured herself coffee from the pot somebody had already made, which was also, she noticed, already warm. Somebody had been down here a while. Somebody in this house was always down here first." }
        ] }
      ] }
    ] },

    { id: 'epi-s-rt-watch', slot: 'late', after: '2/28', until: '3/15', events: ['epi-s-alone'], place: 'Incheon · The Lee House · Her Room', time: 'Late Night', scene: [
      { n: "Midnight, near enough. She couldn't sleep, which was ordinary, and she went to the window, which was not, any more. Since the harbor she didn't go to windows lightly. She stood a step back from it, the way she stood back from the edge of a quay." },
      { ifEpiRoute: 'haechan', then: [
        { n: "He was in the garden under her window, on the frozen bench by the onggi jars, his black jacket zipped to the chin and his breath going up white, the radio's orange dial far behind him at the bottom of the garden. Gum. Arms crossed. Facing the house. It was his shift, apparently. It was, as far as she could tell, always his shift." },
        { glitch: { near: true } },
        { n: "He didn't wave. He tipped his chin up at her once, the way he'd tip it at a man across a yard, *I see you, go to bed*, and went back to watching the dark as if the dark owed him money." }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { n: "He was by the gate lamp, in his dark coat, perfectly still, the light making a small hard circle on the frost round his shoes. Not leaning on anything. Jungwon didn't lean. She couldn't hear his watch from here but she could see him lift his wrist and look at it, and lower it, and look up at her window, and she understood he'd been doing that every few minutes for an hour." },
          { glitch: { near: true } },
          { n: "When he saw her he bowed, very slightly, very correctly, from the gate, at midnight, to a window, the way you'd bow to somebody across a reception room. Then he lifted his right hand. Just the hand. Just once." }
        ], else: [
          { n: "Haechan's shift tonight. He was on the frozen bench under her window with his jacket zipped to the chin, facing the house, gum going. And below her, too, the study light was on, and through the gap in the study curtain she could see her father in his armchair with a book he wasn't reading, the reading glasses on their cord, facing the same window." },
          { glitch: { near: true } },
          { n: "Two men keeping watch on one window, one in the garden and one in a chair, and neither of them, she was perfectly sure, had told the other he was doing it." }
        ] }
      ] },
      { choose: [
        { t: "(Go down. Bring the thermos.)", stat: { kindness: 1 }, then: [
          { n: "She went down in her coat over her pajamas with the green thermos and two cups and sat beside whoever was on watch in the cold and poured, and they drank it hot, and didn't talk about the harbor, or the green, or the clock, and when the tide turned under the house at a quarter to one she felt it go, and so, by the way his hand went still on the cup, did he." }
        ] },
        { t: "(Turn the light off so he can see you've gone to bed.)", then: [
          { n: "She turned it off and got into bed and lay looking at the ceiling. She didn't sleep. But she knew exactly where he was, to the meter, in the dark, the way she knew the tide, and that turned out to be almost the same thing as sleeping." }
        ] }
      ] }
    ] }
  );
})();
