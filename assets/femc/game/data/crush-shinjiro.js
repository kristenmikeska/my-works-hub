/* Shinjiro's crush track and the triangle (2026-10-23). Track, world lines and texts are in crush.js; the format is
   core.js "Crushes". He comes into it when he comes into Solar's life: the opt-in plays in the back alley once she's met
   him there (5/24 on), or in the dorm kitchen after he moves back in (8/8 on), whichever comes first. Everything stops on
   10/4 (canon, offstage): a track that isn't 'dating' by then fades, and nothing here plays after it.
   The triangle (Kat, 2026-10-20): when both tracks are growing, cr-tri-* moments play, and they lean Akihiko. Shinjiro
   notices first and steps back, the way he does everything, by feeding somebody. Choices can still warm either track; a
   romance route on either (his rank 8, Akihiko's rank 7 or 9) settles the other into a friendship. */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases;
  const S = ph => ({ shinjiro: ph }), BOTH = { akihiko: P.BUILD, shinjiro: P.BUILD };
  const CLASS = { maki: 'Maki', sonoda: 'Sonoda' };
  const by = (dating, building, friend) => ({ ifCrush: S('dating'), then: dating, else: [{ ifCrush: S(P.FRIEND), then: friend, else: building }] });

  C.moments.push(
    /* ── The opt-in, either way in. ── */
    { id: 'cr-shin-optin-alley', who: 'shinjiro', optIn: 'shinjiro', slot: 'evening', after: '5/24', until: '8/6', met: ['shinjiro'], weather: ['rain', 'cloudy'],
      place: 'Port Island Station · Back Alley', time: 'Evening', bg: 'outside-nightdistrict', scene: [
        { n: "She'd come over to Port Island for a book and stayed too long in the shop, and by the time she came out the rain had started, the cold thin kind that May still had in it at night, and her feet took her the back way past the station before she'd asked them to, the way they did." },
        { n: "He was under the ramen counter's awning, at the end where the gutter dripped, with his coat collar up. He saw her. He looked at her wet sleeves and her book held under her blazer and her hands, which had gone white at the knuckles from the cold, and pushed off the wall without a word and went to the vending machine." },
        { n: "It thunked. He came back with a can of hot corn soup and held it out to her at arm's length without looking at her, the way you'd hold something out to a stray you didn't want to get attached to." },
        { s: 'shinjiro', f: 'neutral', t: "Hands. You can't hold a book like that. Drink it. Then go home the front way." },
        { choose: [
          { t: "(Hold it in both hands. Look at him over the top of it.)", crush: S('in'), then: [
            { n: "She held it in both hands, the heat going into her fingers like something coming back to life, and looked at him over the top of it, and he was looking at the street with great concentration, and she kept looking at him anyway, at the scar across his knuckle and the rain on the brim of his beanie, until he said *what* without turning his head, and she said *nothing*, and drank, and her face was warmer than the can could account for." }
          ] },
          { t: "(Stand under the awning with him until you've finished it. Don't say anything.)", crush: S('in'), then: [
            { n: "She stood under the awning beside him, at the dry end, and drank it slowly, and he didn't tell her to go, and the drip hit his shoulder every two seconds and he let it, and they stood there until the can was empty and the rain had thinned, two people in a doorway, and she found she'd have stood there a good deal longer, and didn't know what to do with that, and went home the front way." }
          ] },
          { t: "(Thank him like you'd thank anyone. Go home.)", crush: S('out'), then: [
            { n: "She thanked him and he said *don't*, and she went home the front way with the can warm in her pocket, and it was a kind thing, the kind of thing he seemed to do for anybody who wandered into his alley looking cold, and she let it be that." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-optin-kitchen', who: 'shinjiro', optIn: 'shinjiro', slot: 'late', when: 'quiet', after: '8/8', until: '9/10', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "One in the morning, and the smell came up the stairwell again, garlic and ginger and something slow, the way it had every night since he'd moved back in, and this time she followed it down." },
        { n: "He was at the stove in a T-shirt with the coat over a chair, which she had never seen, his arms bare and scarred across the knuckles and the forearms both, stirring a pot with the absorbed, unfriendly care he gave to everything that would do what he told it." },
        { s: 'shinjiro', f: 'surprised', t: "...Go back to bed." },
        { n: "He didn't sound like he meant it. He sounded like somebody saying it because it was the thing you said. She didn't go back to bed. He sighed through his nose, and took a clean spoon from the drawer, and dipped it, and held it out to her across the stove, handle first." },
        { s: 'shinjiro', f: 'neutral', t: "Taste. Tell me what it needs. Don't say nothing. Everything needs something." },
        { choose: [
          { t: "(Taste it. Take your time. Tell him the truth.)", crush: S('in'), then: [
            { n: "She tasted it, slowly, with her eyes shut, because it seemed to deserve that, and it was so good it was almost unfair, and underneath the good there was something missing, small, at the back, and she said *salt* and opened her eyes and he was watching her mouth with total professional attention and then wasn't, and looked at the pot." },
            { s: 'shinjiro', f: 'neutral', t: "...Yeah. Salt." },
            { n: "He added salt. He gave her the spoon again. She tasted it again. It was perfect. He watched her find out it was perfect, and something went across his face too fast to name, and she stood in the warm kitchen at one in the morning with her heart doing something it had not cleared with her first." }
          ] },
          { t: "(Taste it. Say *it's perfect* and mean it, and watch him not believe you.)", crush: S('in'), then: [
            { s: 'shinjiro', f: 'neutral', t: "It's not. Try again." },
            { n: "She tried again, and this time she found it, salt, and he nodded once, like a teacher whose student had finally stopped guessing, and the corner of his mouth went somewhere it didn't usually go, and stayed there a second too long, and she went back up to bed with the taste of it and the look of it and lay awake with both." }
          ] },
          { t: "(Taste it. Tell him it's good. Go back up.)", crush: S('out'), then: [
            { s: 'shinjiro', f: 'neutral', t: "...Good isn't a note. But okay." },
            { n: "He took the spoon back and rinsed it and she went back up, and the smell followed her up the stairs, kind and warm and ordinary, a big quiet guy cooking at one in the morning for a house that didn't know he was doing it." }
          ] }
        ] }
      ] },

    /* ── Before he's back (met in the alley, June to early August). ── */
    { id: 'cr-shin-lozenges', who: 'shinjiro', crush: S(P.BUILD), slot: 'evening', after: '6/18', until: '8/6', met: ['shinjiro'],
      place: 'Port Island Station', time: 'Evening', bg: 'portisland-station-night', scene: [
        { n: "She saw him from the far end of the station concourse before he saw her, which was rare, a tall long-coated shape at the convenience store's magazine rack, not reading, coughing into his shoulder in a way that made two salarymen beside him move away without looking." },
        { n: "She went into the store by the other door. She bought a bag of honey lozenges, the soft kind, the expensive kind, and came up behind him at the rack, and, while he was coughing, dropped the bag into the pocket of his coat, and walked away before he'd straightened up." },
        { n: "She got as far as the ticket gates." },
        { s: 'shinjiro', f: 'surprised', t: "...Hey." },
        { n: "He was holding the bag up between two fingers like evidence. He'd come after her the whole length of the concourse. He was, she noticed, not coughing." },
        { choose: [
          { t: "They're for your throat. Not for anything else. Don't make it a thing.", crush: S(1), then: [
            { s: 'shinjiro', f: 'neutral', t: "..." },
            { n: "It was his line, more or less. She watched him recognize it, and watched him decide whether to be annoyed, and watched him lose, and put the bag back in his pocket, and go back the way he'd come without another word, and at eleven her phone went." },
            { phone: [{ from: 'shinjiro', t: 'theyre the good ones' }, { from: 'shinjiro', t: 'tch' }], contact: 'Aragaki' }
          ] },
          { t: "(Shrug. Walk through the gate. Don't look back.)", crush: S(1), then: [
            { n: "She shrugged and went through the gate and didn't look back, and it took everything she had, and on the platform the monorail came in and she got on and sat by the window and looked out of it, and he was still standing at the gate on the other side of the glass with the bag in his hand, looking at it like he'd never been given anything in his life and wasn't sure of the rules." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-strip-door', who: 'shinjiro', crush: S(P.BUILD), slot: 'after', after: '6/28', until: '8/6', met: ['shinjiro'], weather: ['rain'],
      place: 'Iwatodai Strip · Bookworms', time: 'After School', bg: 'bookworms-inside', scene: [
        { n: "Bookworms on a wet afternoon, the old couple's shop smelling of paper and damp coats, and when she came out with a bag of paperbacks the door was already being held, from outside, by a scarred hand in the rain, and she knew the hand before she looked up." },
        { s: 'shinjiro', f: 'neutral', t: "Don't. I was passing." },
        { n: "He was not passing. Bookworms was on nobody's way to anywhere. He had an umbrella, black, enormous, a man's umbrella from a department store that had clearly never been used, and he put it up over both of them without comment and walked her along the strip toward the dorm with his shoulder getting wet." },
        { n: "At the corner a few streets short of the dorm he stopped, where he always stopped, as though there were a line painted on the pavement only he could see, and handed her the umbrella." },
        { choose: [
          { t: "Walk me the rest of the way.", crush: S(2), then: [
            { s: 'shinjiro', f: 'neutral', t: "...No." },
            { n: "He didn't say why. He looked up at the dorm's lit windows, and then at her, and for a second she thought he might, and then he put his hands in his pockets and said *bring it back sometime* about the umbrella, and walked off into the rain without one, and she stood at the line he'd drawn holding his umbrella over nobody but herself." }
          ] },
          { t: "(Take it. Hold it over his head instead, for one more second.)", crush: S(1), then: [
            { n: "She took it and held it up over his head instead, which meant reaching, and he looked at her reaching, and something in his face gave, a fraction, the way ice gives on a pond before it decides, and then he pushed the umbrella gently back toward her with one finger and said *you'll get wet*, as if that were the thing that mattered, and went." }
          ] }
        ] }
      ] },

    /* ── In the dorm (from 8/8). ── */
    { id: 'cr-shin-list', who: 'shinjiro', crush: S(P.BUILD), slot: 'after', after: '8/9', until: '8/31', offOnly: true, events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Daytime', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "He caught her at the front door on her way out, which he'd never done, and held out a folded piece of paper and a thousand-yen note without coming any closer than the end of the hall." },
        { s: 'shinjiro', f: 'neutral', t: "You're going to the strip. Don't lie. You've got your going-to-the-strip shoes on." },
        { s: 'shinjiro', f: 'neutral', t: "List. Don't get the cheap soy. The cheap soy is a crime." },
        { n: "The list was in blunt slanting pencil on the back of a receipt. *Green onion (2). Ginger (fresh, not the tube). Eggs. Tofu, firm. Real soy. NOT the cheap one.* And at the bottom, after a gap, in the same pencil but pressed harder: *whatever you want.*" },
        { choose: [
          { t: "(Buy everything on the list. And strawberry milk. Put it in his share of the fridge.)", crush: S(1), then: [
            { n: "She bought everything on the list and a carton of strawberry milk, and put the milk in the back of the fridge on his shelf, behind the eggs, and said nothing. That night there were two glasses of it on the counter by the rice cooker, poured, one at each end, and he was drinking his at the stove with his back to her as if he'd been born doing it." }
          ] },
          { t: "(Buy everything on the list. Write *whatever you want* on the receipt and give him the change.)", crush: S(2), then: [
            { n: "She wrote it on the new receipt, *whatever you want*, in her own hand, and gave it back to him with the change, and he unfolded it at the counter and read it and didn't say anything for a long time." },
            { s: 'shinjiro', f: 'neutral', t: "...That's not how lists work." },
            { n: "He put it in his coat pocket, though. She saw him do it. It didn't come out again." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-koro-dusk', who: 'shinjiro', crush: S(P.UP), slot: 'evening', after: '8/12', until: '9/6', events: ['a3-full-house'],
      place: 'Iwatodai · Riverside', time: 'Evening', bg: 'park-2', scene: [
        { n: "He walked Koromaru at dusk, every night, the long loop by the river, and she'd started happening to be on the dorm steps at dusk, which he'd started not commenting on, and tonight he handed her the lead at the bottom of the steps without a word, as though it had been agreed in writing." },
        { n: "They walked. The sky over the bay went orange and then rose and then the color of a plum, and the cicadas wound down in the trees one by one like clocks being stopped, and Koromaru trotted ahead between them with his tail up, looking back every few meters to check they were both still there." },
        { s: 'shinjiro', f: 'neutral', t: "He keeps doing that. Checking." },
        { s: 'shinjiro', f: 'neutral', t: "...Somebody taught him people leave." },
        { choose: [
          { t: "Then we'll keep being here when he looks.", crush: S(2), then: [
            { n: "He didn't answer. He walked. After a while she realized he'd slowed down, so that Koromaru, looking back, would always find the two of them together, side by side, the same distance behind him, and that he'd done it without deciding to, and that she'd done the same, and the dog stopped looking back somewhere near the second bridge, satisfied." }
          ] },
          { t: "(Stop. Crouch. Let Koromaru come back to you.)", crush: S(1), then: [
            { n: "She crouched on the path and Koromaru came trotting back and put his head in her hands, and she told him she wasn't going anywhere, and looked up, and Shinjiro was standing over them with the end of the lead looped round his wrist, looking at the two of them with an expression he immediately took off his face and put away somewhere, but not fast enough." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-taste', who: 'shinjiro', crush: S(P.UP), slot: 'late', when: 'quiet', after: '8/14', until: '9/12', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "She came down at one because she'd started coming down at one, and the pot was on, and there was a second spoon on the counter already, clean, laid on a folded towel next to the stove, waiting, as though he'd known." },
        { n: "He didn't say anything about it. She didn't either. She picked it up and dipped it and tasted, and this time it didn't need anything, and she said so, and he said *liar* without looking round, and then, after a minute, very low, to the pot," },
        { s: 'shinjiro', f: 'neutral', t: "...I made it how you'd like it. Less ginger. You make a face at ginger. Little one. Here." },
        { n: "He touched the corner of his own mouth, once, with a knuckle, to show her where." },
        { choose: [
          { t: "You watch my face when I eat?", crush: S(2), then: [
            { s: 'shinjiro', f: 'neutral', t: "I watch everybody's face when they eat. It's the only review that counts." },
            { s: 'shinjiro', f: 'neutral', t: "...Yours more. Don't make it a thing." },
            { n: "She didn't make it a thing. She stood there with the spoon and made it, very quietly, into the biggest thing in her week." }
          ] },
          { t: "(Eat it. Don't make the face. Watch him notice.)", crush: S(1), then: [
            { n: "She ate it and didn't make the face, and he watched her not make it, and nodded once at the pot, and turned the heat down, and they stood in the kitchen while it simmered, not saying anything, his arm a few centimeters from hers on the counter, and she could feel the warmth of the stove on one side of her and of him on the other, and couldn't have said which was which." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-cat', who: 'shinjiro', crush: S(P.PUP), slot: 'evening', after: '8/18', until: '9/20', events: ['a3-full-house'],
      place: 'Port Island Station · Back Alley', time: 'Evening', bg: 'outside-nightdistrict', scene: [
        { n: "Some nights he still went out to the alley after dinner, and tonight he'd said *coming?* over his shoulder at the front door, one word, in a voice like he was asking about the weather, and she'd been on her feet before he'd finished saying it." },
        { n: "The cat was waiting by the ramen counter's back door. A thin gray tabby with one notched ear and a tail that had been broken once and set wrong, and it came out from under a crate when it saw him and wound once round his boots, and he crouched, coat pooling on the wet concrete behind him, and put down a paper dish of something he'd cooked that afternoon that was not, in any sense, cat food." },
        { s: 'shinjiro', f: 'neutral', t: "Don't name it. If you name it, it's yours. Then you have to keep it." },
        { choose: [
          { t: "(Crouch beside him. Don't name it. Hold out your hand.)", crush: S(2), then: [
            { n: "She crouched beside him and held out her hand, and the cat considered it, and him, and her, and then pushed its broken-tailed head into her palm with a rusty sound, and Shinjiro, beside her, made a noise in his chest that wasn't quite a laugh." },
            { s: 'shinjiro', f: 'happy', t: "...It's never done that. Not with me. I've been feeding it since March." },
            { s: 'solar', f: 'happy', t: "Maybe it likes me better." },
            { s: 'shinjiro', f: 'happy', t: "Everybody does. That's the problem with you." }
          ] },
          { t: "Too late. Its name is Lid. Because you never lift it.", crush: S(1), then: [
            { s: 'shinjiro', f: 'surprised', t: "..." },
            { s: 'shinjiro', f: 'happy', t: "...Tch. Lid." },
            { n: "He said the name to the cat, once, low, testing it, and the cat looked up, and that was that. He'd tell her later, much later, without ever admitting he'd told her anything, that the cat came now when he said it." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-stairwell', who: 'shinjiro', crush: S(P.UP), slot: 'lunch', after: '9/1', until: '9/30', schoolOnly: true,
      place: 'Gekkoukan High · Rooftop', time: 'Lunch', bg: 'rooftop-day', cast: CLASS, scene: [
        { n: "He came to school some days now. Not many. He sat at the back of his classroom on the other side of the corridor with his coat on in September and his beanie off because a teacher had made him, and at lunch he disappeared, and she'd found out on the second day where to: the top of the roof stairs, the last flight, where nobody went because the door was usually locked." },
        { n: "She brought him a can of tea from the machine. He took it without looking up. He had a bento, obviously made by him, and he passed half a rolled omelette down to her on the lid without a word, and she sat two steps below him and ate it, and the stairwell was cool and smelled of dust and the summer finally leaving." },
        { n: "Maki came up the stairs looking for her, saw who she was sitting with, stopped dead, and went back down without a sound, and Solar heard her say *ARAGAKI* in a whisper on the landing like it was the name of a ghost." },
        { s: 'shinjiro', f: 'neutral', t: "Your friend's scared of me." },
        { choose: [
          { t: "She'll get over it. I did.", crush: S(2), then: [
            { s: 'shinjiro', f: 'neutral', t: "...Did you?" },
            { s: 'solar', f: 'neutral', t: "Mostly." },
            { s: 'shinjiro', f: 'happy', t: "Mostly's smart." },
            { n: "He passed down the other half of the omelette. She hadn't asked for it. He watched her eat it, and then looked at the locked door at the top of the stairs as if the sky were on the other side of it and he'd decided he could do without." }
          ] },
          { t: "Everybody's scared of you. You like it.", crush: S(1), then: [
            { s: 'shinjiro', f: 'neutral', t: "...Saves time." },
            { s: 'shinjiro', f: 'neutral', t: "You're not, though. Never were. It's annoying." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-faded', who: 'shinjiro', crush: S(P.FRIEND), slot: 'evening', after: '8/20', until: '9/28', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Onions, thin. He'd started teaching her properly, two evenings a week, in a way that he refused to call teaching, and tonight he stood at her elbow and watched her knife and said nothing for nearly a minute, which from him was a medal." },
        { s: 'shinjiro', f: 'neutral', t: "...Better. You're not mad at it anymore." },
        { s: 'shinjiro', f: 'neutral', t: "Aki says you beat his time on the bridge on Tuesday. He's been talking about it for three days. He talked about it to the dog." },
        { choose: [
          { t: "He talks about everything to the dog.", then: [
            { s: 'shinjiro', f: 'happy', t: "Not like that, he doesn't." },
            { n: "He said it to the onions. He didn't say anything else about it, and slid the board toward her, and said *now the ginger, and don't make the face*, and she made the face, and he snorted, and the kitchen was warm, and that was the evening." }
          ] },
          { t: "Teach me the thing you make for him. The one he doesn't know you make for him.", then: [
            { s: 'shinjiro', f: 'surprised', t: "...How do you know about that." },
            { s: 'solar', f: 'neutral', t: "He has it every Thursday and thinks it's a coincidence." },
            { s: 'shinjiro', f: 'neutral', t: "...Get the pork out. Don't tell him. Ever." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-dating', who: 'shinjiro', crush: S('dating'), slot: 'evening', after: '9/1', until: '10/2',
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "He let her stir now. That was the whole of it, and it was enormous. He stood behind her at the stove with his chin almost on the top of her head, close enough that she could feel him breathing, his hand over hers on the spoon, slow circles along the bottom of the pot, and told her when, in a voice he didn't use for anybody else, lower, as if the soup might overhear." },
        { s: 'shinjiro', f: 'neutral', t: "...There. Feel it change? That's when. Remember that." },
        { n: "Akihiko came in for water. He stopped in the doorway. He looked at the two of them at the stove for exactly one second, the length of a breath, with a face that wasn't anything, and then it was something, and he filled his glass at the sink with his back to them, and said *smells good, Shinji*, and went." },
        { choose: [
          { t: "(Stay where you are. Don't let go of the spoon.)", then: [
            { n: "She stayed. Shinjiro didn't move either. His hand stayed over hers on the spoon. But he'd heard the glass, and the *smells good*, and the door, and after a while he said, very quietly, into her hair, *he's glad*, and then, *he is*, and then nothing, and kept stirring, and she understood that he was telling her and telling himself, and that both of them needed it." }
          ] },
          { t: "Should I go after him?", then: [
            { s: 'shinjiro', f: 'neutral', t: "...No. Not tonight. He'd hate it." },
            { s: 'shinjiro', f: 'neutral', t: "Tomorrow. Run with him. Five. He won't say anything. Just run." },
            { n: "He said it like a recipe. She did it like one. In the morning Akihiko was out front at five, already stretching, and he didn't say anything, and they ran, and it helped, and when they got back there were three bowls on the counter instead of two." }
          ] }
        ] }
      ] },

    { id: 'cr-shin-fridge-schedule', who: 'shinjiro', crush: S(P.ASKED), slot: 'evening', after: '9/24', until: '10/3', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "There was a new piece of paper on the fridge, next to Akihiko's summer roadwork, which nobody had taken down. A feeding schedule for Koromaru, in blunt slanting pencil: what, how much, when, which brand, which brand never, the vet's number, the vet's other number, and at the bottom, *the cat behind the ramen place on Port Island: Tues, Fri. Not canned.*" },
        { n: "He was standing in front of it with the pencil behind his ear as though he'd just finished, and when she came in he moved to stand in front of it a little more, which didn't work, because she could read." },
        { s: 'shinjiro', f: 'neutral', t: "...In case I'm busy. Ken can't reach the top shelf. Somebody has to know where the food is." },
        by([
          { n: "She didn't say anything. She came round the counter and put her arms round him from behind, her face against his back, against the T-shirt, and held on, and he went completely still, and then his hand came up and covered both of hers where they were locked over his stomach, and stayed, and he didn't say *don't make it a thing*, and the fridge hummed, and the schedule hung there in the light, and neither of them read it again." }
        ], [
          { n: "She read it twice. He let her. When she'd finished she took the pencil from behind his ear without asking and wrote, under *Not canned*, *(I'll do Tuesdays)*, and he looked at it for a long time, and said *you'll do it wrong*, and she said *then you'll have to check*, and something in his face went very quiet." }
        ], [
          { n: "She read it twice. She said she'd learn it. He said she'd better, and then, after a long pause, with his back to her, *and make sure Aki eats something that isn't powder*, and she said she would, and he nodded at the fridge as if it had agreed to something, and went up early." }
        ])
      ] },

    /* ── The triangle: both tracks growing. Leaning Akihiko. ── */
    { id: 'cr-tri-kitchen-three', who: 'shinjiro', crush: BOTH, slot: 'late', when: 'quiet', after: '8/9', until: '8/30', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "One in the morning, Solar on the counter by the rice cooker with a bowl, Shinjiro at the stove, and then Akihiko in the doorway in his T-shirt with an empty glass, stopping dead, the way you stop when you walk into your own kitchen and find two people you know already sitting at the table." },
        { s: 'akihiko', f: 'surprised', t: "...Oh. Hey. I was just. Water." },
        { n: "He didn't get the water. He stood there. Shinjiro looked at him, and at her, and at him, with no expression at all, and took a third bowl down from the cupboard without being asked and filled it and held it out." },
        { s: 'shinjiro', f: 'neutral', t: "Sit down, Aki. You're making the room nervous." },
        { n: "Akihiko sat on the counter on her other side. They ate, the three of them, in the light over the stove, and Akihiko said it was like the kitchen at the home, the one with the broken lid, and Shinjiro said *don't*, and then told the story of the broken lid himself, and Akihiko laughed so hard he nearly dropped his bowl, and Solar sat between them in the warm with the two of them talking over her head about a kitchen she'd never seen." },
        { n: "Once she caught Shinjiro looking at Akihiko looking at her. He saw her see it. He looked down at the pot." },
        { choose: [
          { t: "(Laugh with Akihiko. Lean on his shoulder when it gets funny.)", crush: { akihiko: 2 }, then: [
            { n: "She laughed and leaned on Akihiko's shoulder when the story got to the part about the fire alarm, and Akihiko went still under her and then didn't, and kept laughing, and Shinjiro, at the stove, put an extra slice of pork in Akihiko's bowl without a word, which, she'd learn, was how he said *I see that*." }
          ] },
          { t: "(Hand Shinjiro your bowl for seconds. Watch his hands.)", crush: { shinjiro: 1 }, then: [
            { n: "She held out her bowl and he filled it and their fingers touched on the rim, and he took his back first, and then, very deliberately, filled Akihiko's too, though Akihiko hadn't asked, and slid it across to him, and said *eat* to both of them like a man spreading something evenly." }
          ] }
        ] }
      ] },

    { id: 'cr-tri-sofa', who: 'shinjiro', crush: BOTH, slot: 'evening', after: '8/12', until: '8/31', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Movie night, Junpei's choice, which meant explosions. The lounge sofa had three seats. Yukari and Fuuka had the armchair between them, Junpei had the floor by choice, and Solar had the middle of the sofa, and Shinjiro had come in first and sat at the end beside her, in his coat, with his arms folded, as if he'd been told to and was doing it under protest." },
        { n: "Then Akihiko came down from the shower with his hair wet and a bag of chips and stopped at the end of the sofa where there wasn't room." },
        { n: "Shinjiro looked at him. Then he got up, without a word, and moved to the armchair's arm on the far side of the room, where he couldn't possibly have been comfortable, and sat there, and folded his arms again, and looked at the TV." },
        { s: 'akihiko', f: 'surprised', t: "...Shinji. You were there first." },
        { s: 'shinjiro', f: 'neutral', t: "Too close to the speaker. Sit down. You're in Iori's way." },
        { choose: [
          { t: "(Pat the seat. Akihiko sits. Don't look over at the armchair.)", crush: { akihiko: 2 }, then: [
            { n: "She patted the seat and Akihiko sat, and the chips went between them, and somewhere around the second explosion his knee was against hers, and she didn't look over at the armchair, and she knew without looking that Shinjiro was watching the TV with total concentration, and that he'd known exactly what he was doing when he got up." }
          ] },
          { t: "(Look over at Shinjiro on the armchair. Hold his eyes for a second.)", crush: { shinjiro: 1, akihiko: 1 }, then: [
            { n: "She looked over. He looked back. One second. Then he lifted his chin a millimeter toward Akihiko, toward the empty seat, *go on*, and looked back at the TV, and Akihiko sat down beside her, oblivious, offering her the chips, and she took one and didn't taste it." }
          ] }
        ] }
      ] },

    { id: 'cr-tri-roof-push', who: 'shinjiro', crush: BOTH, slot: 'evening', after: '8/20', until: '8/30', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "She'd come down to help with the dishes because helping with the dishes was how you got to be in the kitchen, and he handed her the towel and then didn't hand her any dishes. He stood at the sink with his hands in the water and looked out of the dark window at nothing, and said, to the window," },
        { s: 'shinjiro', f: 'neutral', t: "He's on the roof. He's been on the roof every night this week. Since about nine." },
        { s: 'shinjiro', f: 'neutral', t: "He's waiting for somebody. He'll never say so. He'll stand up there till one and come down and say he was looking at the weather." },
        { n: "He washed a bowl. Rinsed it. Set it on the rack, handle out." },
        { s: 'shinjiro', f: 'neutral', t: "...Go on. I've got the dishes." },
        { choose: [
          { t: "(Go. Take the stairs two at a time.)", crush: { akihiko: 2 }, then: [
            { n: "She went. She took the stairs two at a time, the way he did, and at the top the door was propped open with a dumbbell, and he was at the rail, and he heard her and turned round and his whole face lit up, row by row, like a stadium, before he could stop it. Behind her and three floors down she thought she heard the tap turn off, and then on again." }
          ] },
          { t: "(Stay. Pick up a bowl. Dry it.)", crush: { shinjiro: 1 }, then: [
            { n: "She picked up a bowl and dried it. He watched her do it out of the side of his eye. He didn't say anything for a while. Then he said *idiot*, very low, without heat, and she didn't know which of the three of them he meant, and he handed her another bowl." },
            { s: 'shinjiro', f: 'neutral', t: "...Go up after this one. He won't wait forever. He thinks he will. He won't." }
          ] }
        ] }
      ] },

    { id: 'cr-tri-tower', who: 'shinjiro', crush: BOTH, slot: 'late', when: 'tartarus', after: '8/10', until: '9/30', events: ['a3-full-house'],
      place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Back from the tower. She'd caught a claw across the forearm on the thirtieth floor, nothing, a scratch, and had said it was nothing, and by the time she'd got her boots off there were two first-aid kits open on the lounge table, one on either side of her, and two third-year boys sitting on either side of the kits, not looking at each other." },
        { s: 'akihiko', f: 'serious', t: "I've got it. I tape everything. I've got the good tape." },
        { s: 'shinjiro', f: 'neutral', t: "It's not a sprain, Aki. It's a cut. You clean it first. You've never cleaned anything first in your life." },
        { n: "They looked at each other over her arm. Twelve years of something went across the table between them in about a second." },
        { choose: [
          { t: "(Hold your arm out to Akihiko.)", crush: { akihiko: 1 }, then: [
            { n: "She held her arm out to Akihiko. Shinjiro said *tch*, and cleaned it anyway, first, without asking, quick and gentle, and then sat back and let Akihiko tape it, and watched him do it, and said *too tight* once, and Akihiko loosened it, and that, she understood afterward, had been the whole argument, and both of them had won it." }
          ] },
          { t: "(Hold your arm out to Shinjiro.)", crush: { shinjiro: 1 }, then: [
            { n: "She held her arm out to Shinjiro. He cleaned it, carefully, with his big scarred hands moving like they were handling an egg, and then, without a word, pushed the tape across the table to Akihiko, and said *you do the rest, you're better at it*, which she was fairly sure was the first compliment he'd paid Akihiko in a year, and Akihiko was so surprised he taped it perfectly." }
          ] },
          { t: "(Do it yourself. Let them watch.)", then: [
            { n: "She did it herself, cleaned and taped, one-handed and neat, while the two of them watched in total silence, and when she'd finished they both said *good* at exactly the same moment, and looked at each other, and Akihiko laughed, and Shinjiro didn't, quite, but nearly." }
          ] }
        ] }
      ] },

    { id: 'cr-tri-umbrellas', who: 'shinjiro', crush: BOTH, slot: 'after', after: '9/1', until: '9/30', schoolOnly: true, weather: ['rain'],
      place: 'Gekkoukan High · Shoe Lockers', time: 'After School', bg: 'school-entryhallway', cast: CLASS, scene: [
        { n: "Rain at the last bell, and her umbrella was in the dorm, and she was standing at the glass doors weighing six minutes of it, and two umbrellas arrived at the same moment from opposite ends of the entrance hall." },
        { n: "One was black and enormous and had never been used, held out at arm's length by a tall boy in a long coat. One was clear and cheap with a bent rib, her own, from the dorm, which Akihiko had apparently gone back for at lunch, held out by Akihiko, who was soaked." },
        { n: "The whole entrance hall stopped to watch. Maki stopped with one shoe on." },
        { n: "Shinjiro looked at Akihiko's umbrella, and at Akihiko's wet hair, and at her. Then he closed his own umbrella, and pushed it into Akihiko's free hand, and said *share hers, she'll get you wetter*, and walked out into the rain without one, coat collar up, hands in his pockets, like a man who'd never had an umbrella and wasn't about to start." },
        { s: 'akihiko', f: 'surprised', t: "...Shinji! Shinji, you'll—" },
        { choose: [
          { t: "(Open your umbrella. Walk with Akihiko.)", crush: { akihiko: 2 }, then: [
            { n: "She opened it and Akihiko ducked under it, holding Shinjiro's closed one like a sword he didn't know what to do with, and they walked to the station with the rain drumming on the clear plastic over them, and ahead of them, a block ahead, a long dark coat getting wetter and not hurrying." },
            { s: 'akihiko', f: 'neutral', t: "...He did that on purpose." },
            { s: 'solar', f: 'neutral', t: "I know." }
          ] },
          { t: "(Take the black umbrella. Run after Shinjiro with it.)", crush: { shinjiro: 1 }, then: [
            { n: "She took the black umbrella out of Akihiko's hand and ran out after him into the rain, and caught him at the gate, and put it up over his head, which meant reaching, and he looked at it, and at her, and said *go back*, and she said *no*, and he took the umbrella, and turned her round by the shoulders, gently, and walked her back to the doors where Akihiko was standing in the doorway with her umbrella and an expression like a dropped glass, and said *share*, and left." }
          ] }
        ] }
      ] }
  );
})();
