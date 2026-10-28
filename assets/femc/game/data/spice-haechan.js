/* The spice batch, Haechan (2026-10-24): the centrepiece (Kat: heat is a big part of them in her novels; his set is the
   largest). Cuts away before anything graphic. Loaded after the crush files and spice-akihiko.js. Formats: late nights
   core.js lateNightDue, moments core.js "Crushes", the morning after core.js glowIs.
   His route logic holds: his ranks are story (forced), he arrives 11/4, the pull starts by itself, rank 8 (12/18) is the
   romance turn and the first kiss. So before 12/18 everything here is an almost (no kiss, no "Donghyuck" from her, which
   she first says at rank 8), and the full scenes are his romance route only. Kat's ruling on several romances
   (2026-10-24): on his romance route the full set plays whether or not she's also with Akihiko, and his plays too; while
   she's with someone else and his route isn't chosen, it's tension and "we can't" (sp-hc-ln-we-cant, ifTaken lines).
   The fallout can show the triangle (sp-hc-aki-sees, sp-aki-hc-sees): honest and torn, nobody a villain.
   Two registers, by heading (links/haechan.js header): 'S' is strangers Haechan (Korean only, loud and warm, cinnamon gum,
   diesel and salt, agasshi, quiet when he's afraid, "Solar" the tell); everything else is Runners Haechan (fluent English,
   flat and dry, pretty girl / princess, the headphones, aimed double meanings), with small H / true / stay touches.
   Housing: his room is the empty one at the end of the top floor, the radiator that knocks (rank 1); hers is a floor down.
   Before his route (almosts):
     sp-hc-first-touch   moment, evening 11/6-11/18   the dish rota; hands under the tap; both freeze
     sp-hc-korean        moment, evening 11/12-12/17  heading S: a lounge full of people, Korean, looks and hands, one word
     sp-hc-ln-headphones late, rank 4, 11/26-12/17   free: his room, the headphones, "not yet"
     sp-hc-ln-we-cant    late, rank 3, 11/20-12/17   taken: the hand pulled back, "we can't"
     sp-hc-stitches      moment, evening 12/6-12/17   after he awakens: she patches his knuckles like she's done it before
   His romance route:
     sp-hc-ln-room       late 12/19-2/28   his room: the headphones, the song he won't admit is about her, the quiet kiss
     sp-hc-ln-caught     late 12/27-2/28   the laundry room; Mitsuru's lock check (glow caught)
     sp-hc-ln-down       late 12/27-2/28   he comes down to her room; waking up together; Hyein on the landing (glow sneak)
     sp-hc-ln-night-r    late 12/28-2/28   heading not S: the night, the cut-away, the morning after (glow night)
     sp-hc-ln-night-s    late 12/28-2/28   heading S: the same night in his other life (glow night)
     sp-hc-ln-snow       late, rank 9, 1/10-2/24   the roof in the snow, the water tank, every universe
     sp-hc-ln-again      late, rank 11, 2/3-3/3    another night; she wakes and he's watching; she leaves in his hoodie
     sp-hc-cupboard      moment, evening   the cupboard under the back stairs; Junpei on the creaky step
     sp-hc-booth         moment, after     the record shop's listening booth, one pair of headphones
   The fallout (the day after: glow): sp-hc-sisters (Hanni and Hyein with concealer; Yunjin on S), sp-hc-aki-sees (she's
   with both: Akihiko on his run), sp-aki-hc-sees (she's with both: the day after Akihiko's night, Haechan hears it).
   Texts and world lines at the bottom. */
(() => {
  const W = window, X = (W.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };
  const C = W.FEMC_GAME_CRUSH, P = C.phases;
  const H = ph => ({ haechan: ph });
  const MET = ['a4-household-introductions'], AFTER = ['year-goes-on'];
  const NOT_S = ['R', 'H', 'stay', 'true', 'bad'];
  const HIS = { place: "Iwatodai Dorm · Haechan's Room", bg: 'haechan-bedroom' };
  const ROOM = { place: "Iwatodai Dorm · Solar's Room", bg: 'solar-dormroom-night' };

  C.moments.push(
    /* ── Before his route: the first touch. Both freeze, as if their bodies remember. ── */
    { id: 'sp-hc-first-touch', who: 'haechan', crush: H(['noticed', 'crush']), slot: 'evening', after: '11/6', until: '11/18', events: MET,
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Fuuka's dish rota had been on the fridge since August, a hand-ruled grid with everybody's name in a different color pen, and on the day after he moved in she had added a new row at the bottom in black, very neatly, HAECHAN-KUN, and paired him with Solar for Thursdays, because, she said, apologetically, they were the only two people who never complained about the rota, and it seemed fair." },
        { n: "So on Thursday they washed up. She washed. He dried. He'd turned up at the sink at exactly the time the rota said, with a tea towel over one shoulder and the hood of his black hoodie up, and he hadn't said anything except *you wash, I'll dry*, and taken a plate out of her hands, and they'd done the whole of dinner like that without speaking, the tap running, the kitchen warm from the rice cooker, the lounge loud through the wall with Junpei losing at something." },
        { n: "The last thing was the rice pot. It was heavy and she had both hands in it under the tap, scrubbing at the crust on the bottom, and he reached in past her to take it before she'd finished, too early, the way you'd reach for something you'd been handed a thousand times by the same person, and his hand went into the water over hers." },
        { n: "Skin on skin. Warm water and his fingers across the backs of hers. That was all it was." },
        { n: "They both stopped." },
        { n: "Not jumped. Stopped. Completely, both of them, at the same instant, like two people on a platform who hear their own name called in a voice they haven't heard in years, and turn, and there's nobody there. The water kept running over their hands. Neither of them moved them. And her body did something her mind had no part in: her thumb turned, under the water, and found the side of his hand, the outside edge below the little finger, where the skin was rough and split and healed and split again, and it knew exactly where the scar was before it touched it." },
        { n: "It knew. Her thumb knew. It went to the place like it had a key." },
        { ifHeading: 'S', then: [
          { n: "He had gone completely silent. Not his quiet. Something under it. The loud warm boy who'd sung the whole of a trot song at the washing machine that morning and called Junpei *hyung* to make him cry had gone so still beside her she could hear him breathing through his nose, carefully, like a man trying not to wake someone in the next room." },
          { n: "Then he said something in Korean. Very low. Two words, maybe three, not to her, to the water, and she didn't understand them, and she understood them, and both were true at once and her stomach dropped through the floor." }
        ], else: [
          { n: "He'd stopped breathing. She could tell, because she was standing close enough to feel his chest not move against her shoulder. His face did nothing. His face was the flattest thing she'd ever seen. But his jaw had gone tight, once, at the hinge, a small hard movement like a lock catching, and his eyes had gone to the water, to their hands in it, and stayed there like something was written on them." },
          { s: 'haechan', f: 'neutral', t: "...Huh." }
        ] },
        { ifTaken: 'haechan', then: [
          { n: "She took her hand out of the water. She did it first. She dried it on her own sleeve, carefully, the fingers one by one, and she was with someone, and she loved him, and her hand was still warm where his had been, and those were all true, and she put the hand in her pocket like something she'd been told to hold onto and not look at." },
          { n: "He let her. He didn't watch her do it. He took the rice pot out of the sink and dried it so thoroughly it squeaked." }
        ], else: [
          { n: "She took her hand out of the water. Slowly. He let her. He didn't watch her do it; he looked at the rice pot instead, as if the rice pot had said something rude, and took it out of the sink and dried it so thoroughly it squeaked." }
        ] },
        { choose: [
          { t: "Have we met?", crush: { haechan: 1 }, then: [
            { ifHeading: 'S', then: [
              { s: 'haechan', f: 'happy', t: "Agasshi. Everybody in this house has met me. I sang at the washing machine. Loudly." },
              { s: 'haechan', f: 'neutral', t: "...Ask me something else." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "You're asking me that at a sink." },
              { s: 'haechan', f: 'neutral', t: "Ask me somewhere better. I'll lie to you there instead." }
            ] }
          ] },
          { t: "(Say nothing. Hand him the last bowl.)", crush: { haechan: 1 }, then: [
            { n: "She handed him the last bowl. Their fingers didn't touch, on purpose, both of them, a careful millimeter, and the care was worse than the touch had been, much worse, because it meant they both knew exactly where the other one's hand was without looking." }
          ] }
        ] },
        { n: "Upstairs, in bed, she held her right hand up in the dark and looked at it. It was her hand. It had always been her hand. She lay there with her thumb pressed to the side of her own little finger, at the place where his scar had been, and couldn't sleep, and didn't understand why she couldn't, and understood it completely." }
      ] },

    /* ── Strangers Haechan, who speaks only Korean: looks, hands and one word. ── */
    { id: 'sp-hc-korean', who: 'haechan', heading: 'S', crush: H(P.UP), slot: 'evening', after: '11/12', until: '12/17', events: MET,
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Friday, and Junpei had declared it a movie night in a tone that suggested a national holiday. Everybody came. The sofas filled and then the floor did, and the room got warm and loud and full of popcorn, and somewhere in the shuffle Solar ended up on the end of the big sofa with her feet tucked under her and Haechan ended up on the arm of the other one, across the low table, with his knees up and a can of something in his hand and the light of the television on half his face." },
        { n: "He'd stopped speaking Japanese at all a week ago. He'd never spoken much of it. Now he didn't even try: when Junpei asked him something he answered in Korean, loud and warm and fast, a cheerful landslide of it, laughing at his own jokes, and Junpei laughed too, because you couldn't not, and nobody in the room understood a single word except, sometimes, very much against her will, her." },
        { n: "The movie started. Nobody watched it. Or she didn't. Because he wasn't watching it either." },
        { n: "He was looking at her. Across the table, over the popcorn, in the flicker. Not hiding it. That was the thing about this version of him: he never hid anything he could say out loud instead, and he couldn't say this out loud, not here, not in a language anyone in the room could follow, so he just looked, openly, steadily, with his chin on his knee and a small crooked smile, and when she looked back he didn't look away. He raised his eyebrows, once. *What.*" },
        { n: "She looked at the screen. She looked back. He was still looking. He held up his can, very slightly, a toast to nobody, and drank, and wiped his mouth with his thumb, slowly, and her face went hot in the dark so fast it was ridiculous." },
        { n: "Halfway through, Junpei got up for more popcorn and the seat next to her on the sofa came free, and Haechan slid off his armrest and into it in one movement before anybody else noticed it was empty, and sat, and put his arm along the back of the sofa behind her head, not touching her, the way a boy at the pictures in an old film would, a gesture so corny and so deliberate she had to bite the inside of her cheek." },
        { n: "His fingers, on the back of the sofa, found the end of her hair. Just the ends. He turned a strand of it round one finger, idly, the way you'd fidget with a string, his eyes on the screen now, his face completely innocent, and every time the strand pulled against her scalp she felt it go all the way down her spine." },
        { ifTaken: 'haechan', then: [
          { ifRomance: 'akihiko', then: [
            { n: "Akihiko was on the floor in front of the other sofa with Koromaru's head on his knee. She could see the back of his neck. She looked at it, and Haechan saw her look, and his finger went still in her hair, and then let the strand go, gently, as if putting something back on a shelf, and his arm came down off the back of the sofa and he folded both hands in his lap like a boy at a funeral and watched the movie, actually watched it, for the rest of the night." }
          ], else: [
            { n: "She was with somebody. She thought about him, on purpose, clearly, the whole of him, and Haechan saw her do it, saw it on her face in the television light, and his finger went still in her hair, and then let the strand go, gently, and his arm came down off the back of the sofa, and he watched the movie, actually watched it, for the rest of the night." }
          ] }
        ], else: [
          { n: "She didn't move. He didn't stop. On the screen something exploded and Junpei cheered and in the light of it she glanced sideways and he was already looking at her again, close now, the side of his face a foot from hers, and he let go of her hair and put his hand down on the sofa cushion between them, palm up, without a word, and left it there." },
          { choose: [
            { t: "(Put your hand in it. Under the cushion's edge, where nobody can see.)", crush: { haechan: 2 }, then: [
              { n: "She put her hand in his, down between them in the gap of the cushions, out of the light. His fingers closed over it. His thumb went across her knuckles once, slow, and stopped on the ring finger and stayed there, pressing, very lightly, as if checking that it was bare, and she felt him breathe out beside her, a long breath, the way you breathe out on a dock when a boat you were waiting for finally comes round the harbor wall." }
            ] },
            { t: "(Don't. Just look at him. Let him see you not doing it.)", crush: { haechan: 1 }, then: [
              { n: "She looked at his hand and didn't take it, and then looked at him, and let him see her not take it, and that was somehow more than taking it would have been, and he knew, and he grinned, slow and delighted, the grin of a man who has been told *not yet* and heard only the *yet*." }
            ] }
          ] }
        ] },
        { n: "When the movie ended she stood up to go to bed. Everybody was standing, stretching, arguing about the ending. He said something to her, under the noise, in Korean, long and low and warm, a whole sentence of it that went past her like water, the shapes of it familiar and the meaning gone." },
        { n: "Except the last word. The last word she caught, the way you catch a ball you didn't see thrown." },
        { n: "*Gajima.*" },
        { n: "Don't go. She knew it. She didn't know how she knew it. She stood in the middle of the lounge with everyone moving round her and the word sitting in her ear like a stone in a shoe, and he was already looking away, at Junpei, laughing at something, as if he hadn't said anything at all, as if he hadn't said it to her." },
        { ifTaken: 'haechan', then: [
          { n: "She went. She went up the stairs to her room and shut the door and stood with her back to it in the dark, and she'd gone, that was the right thing and she'd done it, and the word came up the stairs after her anyway and sat down on the end of her bed and stayed all night." }
        ], else: [
          { n: "She went anyway. She went up the stairs slowly, slower than she needed to, and at the turn she looked back, and he was at the bottom of the stairs, alone, with his hands in his hoodie pocket, watching her go, and when she looked he said it again, without any sound at all, just the shape of it, and she went up the rest of the way with her heart in her throat." }
        ] }
      ] },

    /* ── Before his route, after he's awake: she patches his hands like she's done it all her life. ── */
    { id: 'sp-hc-stitches', who: 'haechan', crush: H(['puppy', 'almost']), slot: 'evening', after: '12/6', until: '12/17', events: ['a5-haechan-awakens'],
      place: 'Iwatodai Dorm · Kitchen', time: 'Night', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "He'd come back from the tower with his knuckles open. Both hands. He'd hit something with them that wasn't meant to be hit with hands, and laughed while he did it, Junpei said, and was now sitting on the kitchen counter in the dark with his fists in a bowl of water going pink, refusing Mitsuru's first-aid kit with great charm, refusing Fuuka's with less, refusing Akihiko's with none at all." },
        { n: "She came down for water. She saw the bowl. And her body walked past the sink, and opened the cupboard above the fridge, the high one nobody used, and took down the old tin with the plasters and the gauze and a needle and thread nobody had touched in years, and she had no memory of ever having opened that cupboard in her life." },
        { s: 'haechan', f: 'surprised', t: "..." },
        { n: "She stood between his knees at the counter and took his right hand out of the water and turned it over in the light from the hall. Her hands did it. They knew the weight of a split knuckle, how to hold the wrist so the skin pulled flat, where the old scars ran under the new cut. She didn't think. She threaded the needle on the first try in the half dark. She had never threaded a needle in this world." },
        { ifHeading: 'S', then: [
          { n: "He'd gone silent. The loud one. He sat on the counter and watched her hands with a look she couldn't read, like he was watching someone open a door in a house he'd been told had burned down, and when she put the first stitch in he didn't flinch, and when she put the second in he said, so quietly it was almost not a sound, *agasshi*, and then nothing, and his free hand came up and held onto the edge of the counter beside her hip, hard." },
          { s: 'haechan', f: 'sad', t: "You never said. You never once said anything. Neither did I. All those times." },
          { s: 'solar', f: 'neutral', t: "What times?" },
          { s: 'haechan', f: 'neutral', t: "...Do the other hand." }
        ], else: [
          { n: "He watched her hands with his flat face and his eyes not flat at all. When she put the first stitch in he didn't flinch. When she put the second in his jaw went tight, once, at the hinge, and he looked at the ceiling." },
          { s: 'haechan', f: 'neutral', t: "...You're good at that." },
          { s: 'solar', f: 'neutral', t: "I don't know how I'm good at it." },
          { s: 'haechan', f: 'neutral', t: "Yeah. You do. You just don't know you know. Different thing." }
        ] },
        { n: "She did the other hand. Close, between his knees, the counter edge against her stomach, his breath on her hair. When she bit the thread off she was near enough to his wrist that her mouth was almost on it, and she felt his pulse jump against her lip, and they both froze, again, like the sink, like the platform, and the kitchen tap dripped twice." },
        { ifTaken: 'haechan', then: [
          { n: "She stepped back. She put the needle in the tin and the tin in the cupboard and shut it. She was with somebody, and she loved him, and her mouth had been an inch from this boy's wrist, and her heart was going like it was hers to spend. It wasn't. Not tonight. She said goodnight to the counter." },
          { s: 'haechan', f: 'neutral', t: "...Yeah. Goodnight. Thank you. For the—" },
          { n: "He held up both hands, stitched, neat, in the hall light, and looked at them like a man looking at two letters he wasn't allowed to open." }
        ], else: [
          { choose: [
            { t: "(Stay where you are. Let him decide.)", crush: { haechan: 2 }, then: [
              { n: "She stayed. He didn't move either. He looked down at her, close, his stitched hands either side of her on the counter edge not touching her, holding the counter instead, his knuckles white under the gauze, and she watched him want to and watched him not, the whole fight of it on his face, and in the end he leaned down and put his forehead against hers, just that, and held it there, breathing, for one, two, three seconds, and then sat back." },
              { s: 'haechan', f: 'neutral', t: "Not like this. Not with you patching me up like it's a habit. I want you to know what you're doing when you do it." }
            ] },
            { t: "(Step back. Put the tin away. Smile at him.)", crush: { haechan: 1 }, then: [
              { n: "She stepped back and put the tin away, and he watched her do it, and when she turned round she smiled at him, and he looked at the smile the way you'd look at the sun, not quite straight, and laughed under his breath, and held up his stitched hands like a surgeon, and said *don't tell Mitsuru you're better than her kit*, and she said she wouldn't, and they both knew she'd been better than the kit for years, somewhere." }
            ] }
          ] }
        ] }
      ] },

    /* ── His romance route: the cupboard under the back stairs. ── */
    { id: 'sp-hc-cupboard', who: 'haechan', crush: H('dating'), slot: 'evening', flags: AFTER, after: '12/27', until: '2/26',
      place: 'Iwatodai Dorm · Stairs', time: 'Evening', bg: 'iwatodaidorm-hallway', scene: [
        { n: "The back stairs had a cupboard under them that nobody used, a narrow slant-roofed space full of old umbrellas and a broken vacuum cleaner and the dorm's Christmas decorations in a box that said XMAS in Mitsuru's handwriting and DO NOT in Junpei's underneath it, and he pulled her into it by the wrist on the way past with no warning at all, and shut the door, and it was black." },
        { ifHeading: 'S', then: [
          { n: "He was laughing. Silently, but she could feel it, his whole chest going against her, and he smelled of cinnamon gum and the cold from outside and the cheap dorm soap, and he found her face in the dark with both hands like he'd been told to find it blindfolded and win a prize, and kissed her, laughing, and then not laughing, his back against the box of decorations, the tinsel rustling." },
          { s: 'haechan', f: 'happy', t: "Agasshi. Shh. Shh. You're very loud. Your heart. I can hear it from here." }
        ], else: [
          { n: "He didn't say anything. He didn't need to. He had her against the slope of the stair ceiling in the dark with one hand flat on the wood above her head, and his mouth on her neck, just below her ear, slow, unhurried, as if he'd scheduled this and was running exactly on time, and every so often he stopped and breathed against her skin and started again a little lower." },
          { s: 'haechan', f: 'neutral', t: "You're shaking. I've done nothing. Imagine if I did something." }
        ] },
        { cg: 'romance-haechan-cupboard' },
        { n: "Above them, on the stairs, footsteps. Heavy, unhurried, somebody in slippers, and then the fourth stair from the bottom, the creaky one, the one everybody stepped over, went *crrrrk* directly over their heads, loud as a gunshot in the cupboard, and stopped." },
        { s: 'junpei', f: 'neutral', t: "...Hello?" },
        { n: "They froze. His mouth was at her throat and his hand was inside the back of her sweater, flat on her spine, and they froze exactly like that, a single object, and didn't breathe. On the stair above them Junpei stood on the creak. She could hear him thinking. It sounded like a fridge." },
        { s: 'junpei', f: 'neutral', t: "Cupboard? Is the cupboard... no. Nope. I'm going to bed. Ghosts can have the cupboard. Goodnight, ghosts." },
        { cg: null },
        { n: "The creak let go. The slippers went on up. Haechan put his forehead down on her shoulder and shook with silent laughter for so long she started to worry he'd hurt himself, and she was shaking too, her hand over her own mouth, the tinsel going like a rattlesnake every time either of them moved." },
        { choose: [
          { t: "(Kiss him again. The ghosts can wait.)", then: [
            { n: "She found his face in the dark and pulled it back up to hers, and he stopped laughing at once, as if she'd turned him off at the wall, and they didn't get out of the cupboard for another half an hour, and when they did there was tinsel in her hair, and in his, and in the collar of his hoodie, and on the stairs Koromaru was sitting waiting for them with a look of profound disappointment." }
          ] },
          { t: "(Push him out first. Count to fifty. Follow.)", then: [
            { n: "She pushed him out first. He went, rumpled, with his hood half off and a strand of tinsel stuck to his sleeve, and she counted to fifty in the dark with her back against the decorations, and came out, and he was sitting on the bottom stair waiting with his chin on his fist like he'd been there for hours, and held up the tinsel between two fingers, and said *your ghost dropped this*." }
          ] }
        ] }
      ] },

    /* ── His romance route: the record shop's listening booth. ── */
    { id: 'sp-hc-booth', who: 'haechan', crush: H('dating'), slot: 'after', flags: AFTER, after: '12/27', until: '2/26',
      place: 'Paulownia Mall · Record Shop', time: 'After School', bg: 'record-shop-listening-booth', scene: [
        { n: "The record shop at the back of the mall had one listening booth, a glass box with a stool and a pair of headphones on a hook and a sign in the owner's handwriting that said ONE PERSON PLEASE, and he read the sign, and looked at her, and opened the door and went in, and held it, and she went in too." },
        { n: "It was very small. Two people standing up filled it. The glass fogged on the inside almost at once, and the shop went soft and far away behind it, the owner at the counter with his newspaper, the rain on the skylight, the radio playing something she half knew." },
        { ifHeading: 'S', then: [
          { n: "He'd picked a record off the rack on the way past without looking at it. Trot. Of course. An old one, the kind taxi drivers sang along to with their whole chest, and he put the headphones on her, both cups, his hands careful round her ears, and put the needle down, and then leaned in and sang the chorus into her neck, over the record, half a beat ahead of it, so she heard it twice, once in each ear and once on her skin." },
          { s: 'haechan', f: 'happy', t: "That's the good part. Everyone thinks the verse is the good part. They're idiots. I'm going to do the chorus again." },
          { n: "He did the chorus again. Lower. He wasn't singing it at her neck anymore, he was singing it against it, his mouth moving on the words, and then not on the words, and the record went on into the next verse without him." }
        ], else: [
          { n: "He'd picked a record off the rack without looking. He put the headphones on her, both cups, with his hands careful round her ears, and set the needle down, and then didn't listen to it himself. He watched her listen. That was the whole thing. He stood in a glass box with his back against the fogged glass and watched her face while she heard something, and she could see him hearing it on her, the way he heard rooms." },
          { s: 'haechan', f: 'neutral', t: "Left channel's better. They mixed the bass wrong. You can hear the room they recorded in. It was small. Like this." },
          { s: 'haechan', f: 'neutral', t: "...I'm saying the room was small, princess. Read into it." }
        ] },
        { n: "She took one cup off one ear to hear him and he took that as an invitation, which it was, and kissed her against the glass, slowly, the cord of the headphones swinging between them, the music coming out of the loose cup tiny and tinny, and the glass at her back cold through her coat and his hand warm at her waist under it, and the fog on the glass went up round them like a curtain." },
        { n: "Somebody tapped on the glass. Twice. The owner, with his newspaper rolled up, his face pressed close to the fog, his eyes very tired." },
        { s: 'haechan', f: 'neutral', t: "...One person please." },
        { s: 'solar', f: 'flustered', t: "I can read." },
        { n: "They bought the record. He insisted. He said it was the least they could do for the booth, and the owner took the money without a word and put the record in a paper bag and said, as they were leaving, without looking up, *the fog's never been that bad*, and Haechan said *thank you* like it was a review." }
      ] },

    /* ── The fallout: the girls and the concealer (the day after a night). ── */
    { id: 'sp-hc-sisters', who: 'hyein', crush: H('dating'), glow: 'haechan:night', slot: 'evening', after: '12/19', until: '3/4',
      place: "Iwatodai Dorm · Solar's Room", time: 'Evening', bg: 'solar-dormroom-night', scene: [
        { n: "There was a knock at her door at eight, and before she'd answered it Hyein had opened it, and Hanni was behind her, and Hyein was holding a makeup bag in both hands like a paramedic arriving at an accident." },
        { s: 'hyein', f: 'serious', t: "Sit. Sit down. We have to talk about his neck." },
        { s: 'solar', f: 'flustered', t: "What about his—" },
        { s: 'hanni', f: 'neutral', t: "Sol. Everyone saw his neck. Ken asked if he'd been bitten by Koromaru. Koromaru looked offended." },
        { n: "Hyein sat her down on the bed and unzipped the bag. Concealer, three shades, a sponge, a brush, a little pot of something green, all laid out on the duvet with a surgeon's order. Hanni leaned in the doorway with her arms folded, half fond, half despairing, the way she'd once leaned in another doorway in another life, and Solar felt it, the shape of it, like a song she'd heard on a radio in a shop and couldn't place." },
        { s: 'hyein', f: 'happy', t: "Green first, it cancels red, then this one, then you blend down, not out. You don't remember, but you used to do this yourself in about four minutes flat and think nobody could tell. I could tell. I always wanted to fix it. Now I'm allowed." },
        { s: 'hanni', f: 'serious', t: "Hyein." },
        { s: 'hyein', f: 'flustered', t: "What? It's true. It's not a secret here, he lives here, he made her lip like that, it's—" },
        { s: 'hanni', f: 'neutral', t: "Hyein, put the green on her and stop talking." },
        { n: "Hyein put the green on. Then the concealer. Her hands were quick and certain and very gentle, tipping Solar's chin up and to the side with two fingers, dabbing at her lip, at the place under her jaw she hadn't even known about until she'd seen Hyein's face see it, and it was the strangest thing, sitting there being fixed by someone who knew exactly how, who'd done it before, whose hands knew her face the way Solar's thumb had known his scar." },
        { ifHeading: 'S', then: [
          { n: "Yunjin put her head round the door halfway through, in her yellow puffer, back from somewhere, and looked at the makeup on the duvet and at Solar's chin and said, in a voice like she was reading the weather off a board, *oh, the Lee house is going to have opinions*, and went away again, and came back thirty seconds later with a scarf, a thick one, gray, and dropped it on the bed without a word, and left." }
        ] },
        { s: 'hanni', f: 'neutral', t: "We're happy for you. For the record. Both of us. We've been happy about this one since before you could remember his name." },
        { ifHeading: ['R', 'true'], then: [
          { s: 'hanni', f: 'serious', t: "He told us the worst of it himself. At home. He didn't ask us to fix it for him. That's why." }
        ] },
        { s: 'hyein', f: 'happy', t: "Hanni cried. On the stairs. This morning. She'll deny it." },
        { s: 'hanni', f: 'flustered', t: "I had something in my eye." },
        { s: 'hyein', f: 'happy', t: "Both eyes. For ten minutes. On the stairs." },
        { choose: [
          { t: "Did you do his neck too?", then: [
            { s: 'hyein', f: 'serious', t: "He wouldn't let me. He said, and I quote, *no*. He's wearing a turtleneck. In the house. He looks like a sad poet." },
            { n: "Solar laughed so hard Hyein had to start the lip again, and scolded her the whole time, and Hanni laughed in the doorway with her hand over her mouth, and it was the most ordinary she had felt in months, and the most like somewhere she used to live." }
          ] },
          { t: "(Hug them both. Hard. Smudge the concealer.)", then: [
            { n: "She hugged them both at once, Hyein with the sponge still in her hand and Hanni pulled off the doorframe by the wrist, and the concealer smudged onto Hyein's sleeve, and Hyein shrieked, and Hanni held on, and none of them said anything for a while, and they didn't need to; the three of them had apparently done this before, too, in a pink room somewhere with a bad radiator, and her arms remembered how." }
          ] }
        ] }
      ] },

    /* ── The fallout, honest and torn: she's with both. Akihiko on his run, the morning after Haechan's night. ── */
    { id: 'sp-hc-aki-sees', who: 'akihiko', crush: { akihiko: 'dating', haechan: 'dating' }, glow: 'haechan', slot: 'early', after: '12/19', until: '3/4',
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "Five in the morning, the river path, the cold so sharp it hurt her teeth. She'd come out to run with him because she always ran with him on Thursdays, and because not coming would have been a sentence of its own, and he'd been waiting by the gate stretching, the way he always waited, and said *morning* and *let's go*, and they'd gone, and he hadn't said anything else for two kilometers." },
        { n: "At the bridge he stopped. He stood with his hands on his knees and his breath going up white, and then he straightened up and looked at her, and his eyes went, once, briefly, to the collar of her running jacket, which she had zipped all the way up, and which had slipped." },
        { n: "He didn't say anything for a long moment. He looked at the river. A heron was standing in the shallows on one leg, as still as a post." },
        { s: 'akihiko', f: 'sad', t: "...Is he good to you?" },
        { n: "That was it. That was all he asked. Not *when*, not *how could you*, not anything that would have let her be angry instead. Just that, to the river, in the voice he used to ask Ken if he'd eaten." },
        { choose: [
          { t: "Yes. He is. So are you. I never lied to either of you.", then: [
            { s: 'akihiko', f: 'neutral', t: "I know. You never have. You told me in daylight. You looked at me while you did it. I remember." },
            { s: 'akihiko', f: 'sad-2', t: "It still— I'm allowed for it to still. Right? It's allowed to do this a bit. In here." },
            { n: "He touched his own chest, once, with two fingers, where the tape used to be in April, and she said *yes*, it was allowed, and he nodded, and breathed out white, and then reached over and zipped her collar back up for her, all the way to her chin, carefully, with his cold fingers, and left his hand there against her jaw for one second." },
            { s: 'akihiko', f: 'neutral', t: "Okay. Race you to the shrine. Loser buys breakfast. Don't let me win. I'll know." }
          ] },
          { t: "(Take his hand. Don't make it smaller with words.)", then: [
            { n: "She took his hand. Cold, both of them, rough at his knuckles from the tape, and he looked down at it in hers and his face did something complicated and then something simple, and he turned his hand over so he was holding hers, the way he had on a windy roof in September, and they stood on the bridge holding hands and watching the heron not move." },
            { s: 'akihiko', f: 'neutral', t: "I'm not going anywhere. I said it in November and I'll say it in March. I just need a minute on a bridge sometimes. That's all. That's all this is." },
            { s: 'akihiko', f: 'neutral', t: "He looks at you like you're the last round. I see it. I'm not blind. I look at you like that too. That's the worst part. I can't even hate him properly." }
          ] }
        ] },
        { n: "They ran back. He won, because she let him, and he knew, and bought breakfast anyway, and at the dorm Haechan was on the front steps in a turtleneck with two cans of coffee, one held out toward Akihiko without a word, and Akihiko looked at it for a long second, and took it, and said *thanks*, and the two of them stood on the steps drinking terrible canned coffee in silence like two men at a bus stop in the rain, and it was the strangest, saddest, kindest thing she'd ever watched." }
      ] },

    /* ── The fallout, the other way: the day after Akihiko's night, Haechan hears it. ── */
    { id: 'sp-aki-hc-sees', who: 'haechan', crush: { akihiko: 'dating', haechan: 'dating' }, glow: 'akihiko', slot: 'evening', after: '12/19', until: '3/4',
      place: 'Iwatodai Dorm · Laundry Room', time: 'Night', bg: 'iwatodaidorm-laundryroom', scene: [
        { n: "He was on the dryer when she came in. Of course he was. He'd been on the dryer since November. He had his headphones round his neck and nothing playing in them, and he looked up when she came in, and listened to her, the way he listened to rooms, and she watched him hear it." },
        { ifHeading: 'S', then: [
          { s: 'haechan', f: 'neutral', t: "You're humming. You've been humming since breakfast. Some song about a train." },
          { s: 'haechan', f: 'sad', t: "...Protein made eggs. Junpei told everybody. Junpei tells everybody everything, in two languages, one of them with his hands." },
          { n: "He laughed, but it came out quiet, the quiet of a man who goes quiet when he's actually afraid, and she saw his hand on the edge of the dryer tighten, and let go." }
        ], else: [
          { s: 'haechan', f: 'neutral', t: "You're humming. You've been doing it since breakfast. Same four bars. You don't know you're doing it." },
          { s: 'haechan', f: 'neutral', t: "It's not my four bars. That's how I know." }
        ] },
        { n: "She stood in the doorway. She didn't pretend. She'd decided a long time ago, on a roof, in a laundry room, that she wasn't going to pretend with either of them, and it cost her every time, and she paid it." },
        { choose: [
          { t: "I'm not going to say sorry for it. Or for you.", then: [
            { s: 'haechan', f: 'neutral', t: "Good. Don't. If you said sorry I'd have to be the guy who's owed one, and I'm not. I knew the deal. I knew it on the stairs in November. He was here first." },
            { s: 'haechan', f: 'neutral', t: "...In this one. He was here first in this one." }
          ] },
          { t: "(Climb up on the other dryer. Knees touching. Say nothing.)", then: [
            { n: "She climbed up on the other dryer. Their knees touched across the gap. He looked down at their knees and didn't move his, and after a while he took his headphones off his neck and put them over her ears, gently, and pressed play, and it was the four bars, his, and then more than four, a whole thing now, finished, and he watched her listen to it, and didn't say anything at all, which was how he said most of the things that mattered." }
          ] }
        ] },
        { s: 'haechan', f: 'neutral', t: "He's good to you. I watched him at breakfast. Man made eggs for fourteen people because he didn't know what else to do with himself. I'd have done the same. I'd have burnt them." },
        { s: 'haechan', f: 'neutral', t: "Go to bed. Come down tomorrow. I'll be here. That's the whole of my plan, princess. It's been the whole of my plan in every one of them." }
      ] }
  );

  add('haechan', [
    /* ── Before his route, when she's free: his room, the headphones. Not yet. ── */
    { id: 'sp-hc-ln-headphones', kind: 'dorm', rank: 4, crush: H(['puppy', 'almost']), free: true, after: '11/26', until: '12/17', when: 'quiet', ...HIS, time: 'Night · 3 AM', music: 'night', scene: [
      { n: "The laundry room was empty at three. That had never happened. She stood in the doorway looking at his dryer with nobody on it, and felt something in her stomach drop like a stair that wasn't there, and then her phone went." },
      { phone: [{ from: 'haechan', t: 'up here' }, { from: 'haechan', t: 'end of the top floor' }, { from: 'haechan', t: "the radiator's knocking. it's the only warm room in the building. that's the only reason" }], contact: 'Haechan' },
      { n: "His door at the end of the top floor was open an inch. She'd never been in. Nobody had. The room was bigger than she'd expected and emptier, a bed he clearly sat on more than slept in, a desk, a dark blue wall, his bag still half unpacked on the floor after a month like he might need to leave in a hurry, and the radiator under the window knocking every few seconds like somebody politely asking to be let in." },
      { n: "He was sitting on the floor with his back against the bed and a laptop open on his knees, and the heavy black headphones round his neck, and he didn't look up when she came in. He patted the floor beside him without looking. She sat. Their shoulders touched. Neither of them moved them." },
      { ifHeading: 'S', then: [
        { n: "It wasn't a laptop he was looking at. It was the Discman, the cracked one, open on his knee with a disc in it, and he took the headphones off his own neck and put them over her ears with both hands, carefully, the way you'd put a helmet on a child, and pressed play." },
        { n: "An old song. A man singing about a harbor, in Korean, the big swooping kind of chorus. And Haechan, beside her, not singing along for once. Watching her listen. When the chorus came she found she knew it, every word, and her mouth moved on it before she could stop it, and she felt him go still against her shoulder, the loud boy gone silent, the way he went when he was frightened." }
      ], else: [
        { n: "There was something open on the laptop. A track. Layers of it stacked on the screen in colored bars, most of them muted, one playing. He took the headphones off his own neck and put them over her ears with both hands, and the room went away, and there was only the sound: a small room's worth of something, a few chords on a piano that wasn't quite in tune, a hiss under it like rain on a window, and a line, four notes, going round and round looking for the fifth." },
        { s: 'haechan', f: 'neutral', t: "It's nothing. It's a thing I started. It's not about anything." },
        { n: "He said it too fast. He never said anything too fast. She looked at him with the headphones on and he was looking at the screen with his flat face, and his ears had gone red." }
      ] },
      { n: "She leaned her head back against the bed. He leaned his back too, and turned it, and his face was very close, and the headphones were between them, the cord across her collarbone, and his eyes went to her mouth and stayed there, and the radiator knocked, and the song went round, and she could feel her own heartbeat in the headphones, louder than the music." },
      { n: "He reached up. She thought he was going to touch her face. He took the headphones off her instead, gently, one cup and then the other, before the song had finished, before the fifth note, and held them in his lap." },
      { s: 'haechan', f: 'neutral', t: "...Not yet." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'sad', t: "Not while you're still looking at me like I'm a stranger on a dock. I've waited for you on a lot of docks. I can do one more." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Not while you don't know what you're doing. When you know, you can have the rest of it. All of it. The fifth note too." }
      ] },
      { choose: [
        { t: "How do you know I don't know what I'm doing?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Because you don't know my name yet." },
          { n: "He said it simply, the way you'd tell someone the time, and she opened her mouth, and something was there, right behind her teeth, two syllables, warm and worn, and it wouldn't come, and he watched it not come, and smiled, small, like he'd been watching it not come for weeks and had made his peace with the wait." }
        ] },
        { t: "(Lean your head on his shoulder instead.)", notes: 2, then: [
          { n: "She leaned her head on his shoulder instead. He let out a breath like he'd been punched, a small one, and then put the headphones back on her, one cup only, and the other on himself, so they were listening to the same song with their heads together, and the radiator knocked, and somewhere around four she fell asleep on him, and woke at six on his floor with his hoodie over her and him asleep sitting up, and the song still going round and round in the headphones, looking for its fifth note." }
        ] }
      ] }
    ] },

    /* ── Before his route, when she's with someone: the hand pulled back. We can't. ── */
    { id: 'sp-hc-ln-we-cant', kind: 'dorm', rank: 3, crush: H(['crush', 'puppy', 'almost']), taken: true, after: '11/20', until: '12/17', when: 'quiet', place: 'Iwatodai Dorm · Rooftop', bg: 'iwatodaidorm-roof-night', time: 'Night · 2 AM', music: 'night', scene: [
      { n: "The roof at two, the cold off the bay coming over the parapet in long flat sheets, and he was at the railing with his hood up, and she was at the railing too, a meter away, which was the distance they'd agreed on without ever agreeing on it. A meter. You could stand a meter from somebody for a long time. People did it on platforms all their lives." },
      { n: "The bridge lights went on across the water. They both watched them go. And on the cold rail between them, her hand and his hand had been inching, without either of them deciding it, the way a tide comes up a beach, a centimeter at a time, until her little finger was against the side of his, on the freezing metal, and neither of them moved them away." },
      { n: "His finger hooked hers. Just the little finger. The barest thing. And her whole body went toward him, all of it, like a plant toward a window, and she was turning, and he was turning, and his other hand was coming up toward her face in the dark—" },
      { n: "He pulled it back." },
      { n: "He stopped it in the air an inch from her cheek and held it there, and she watched his hand shake, actually shake, the split knuckles white, and then he closed it into a fist, slowly, and put it in his hoodie pocket, and unhooked his little finger from hers on the rail, and stepped back. The meter came back. It was colder than before." },
      { ifRomance: 'akihiko', then: [
        { s: 'haechan', f: 'neutral', t: "We can't." },
        { s: 'haechan', f: 'serious', t: "He's two floors down. Protein. He's asleep with his shoes lined up by the door because he's going to be up in three hours to run, and he's going to look for you at the gate, and you're going to be there. I'm not going to be the reason you're not." },
        { n: "He said it without any edge at all. Like a fact about trains. And it was true, every word, and she loved Akihiko, that had never once been the question, and her hand on the rail was still warm from his little finger, and that was true too, and she stood there holding both true things in her two hands, freezing, and couldn't put either of them down." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "We can't." },
        { s: 'haechan', f: 'serious', t: "You're with somebody. You picked them. I'm not going to be a thing you do at two in the morning on a roof and feel sick about at breakfast. I've been that. In the other place. I'm not doing it to you." },
        { n: "He said it without any edge at all. And it was true. She'd chosen, and she meant it, and her hand on the rail was still warm from his, and that was true too, and she stood there holding both, freezing, and couldn't put either down." }
      ] },
      { choose: [
        { t: "I know. I know we can't.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Yeah." },
          { s: 'haechan', f: 'sad', t: "...Say it again, though. That you know. I like hearing you know a thing at the same time I do. It never happens." },
          { n: "She said it again. *I know.* He nodded at the bridge. They stood a meter apart for another twenty minutes not touching, and it was the most intimate thing she'd ever done on a roof in any world, and when she went down he didn't follow, and she heard him come down an hour later, slowly, past her door, without stopping, and she lay awake and listened to every stair." }
        ] },
        { t: "(Go down. Now. Before you can't.)", notes: 2, then: [
          { n: "She went down. Now, before she couldn't. She didn't run, but she didn't not run either, and at the roof door she stopped with her hand on it and didn't look back, because if she looked back she'd go back, and he knew that, and said, very quietly, to the bay, *good*, and she heard it, and went." }
        ] }
      ] }
    ] },

    /* ── His route: his room. The headphones, the song he won't admit is about her, the kiss. ── */
    { id: 'sp-hc-ln-room', kind: 'dorm', rank: 8, route: 'romance', after: '12/19', until: '2/28', when: 'quiet', ...HIS, time: 'Night · 2 AM', music: 'romance', scene: [
      { n: "His door at the end of the top floor was open. Not an inch this time. All the way, and the light on, and the radiator knocking, and him sitting cross-legged on the bed with the headphones round his neck, waiting, and when she came to the door he looked up and didn't pretend he hadn't been." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Agasshi. Come in. Shut the door. Not because of anything. Because of Junpei." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Shut the door, princess. Not because of anything. Because Junpei sleepwalks and he talks while he does it and I don't want him in this." }
      ] },
      { n: "She shut the door. She sat on the bed facing him, cross-legged, their knees touching, and he took the headphones off his neck and held them for a second in both hands, looking at them, the way you'd look at a letter you'd written and hadn't sent." },
      { ifHeading: 'S', then: [
        { n: "He put them on her. It was a song. Not trot. Something she'd never heard, just a voice and a guitar that sounded like it had been recorded in a stairwell, a man's voice, low, rough at the edges, singing in Korean about the sea and a girl on a pier who never once looked at the water, and it was his voice. It was him. She knew it on the first line, and he watched her know it, and went red to the roots of his hair." },
        { s: 'haechan', f: 'flustered', t: "It's an old song. Everyone sings it. Every guy on every dock in Incheon. It's not about anybody." },
        { s: 'solar', f: 'neutral', t: "The girl on the pier can't swim." },
        { s: 'haechan', f: 'flustered', t: "...Lots of girls can't swim." },
        { s: 'solar', f: 'neutral', t: "She stands on the pier and never at the edge." },
        { s: 'haechan', f: 'flustered', t: "It's a very common— agasshi, stop translating it, you're not supposed to be able to translate it—" }
      ], else: [
        { n: "He put them on her. It was the track. The one from before, from the floor, the four notes going round looking for the fifth, except it wasn't four notes anymore. It had found the fifth. It had found the sixth and the seventh and a whole bridge, and under it, low, there was a rhythm that wasn't a drum, a soft steady double beat, and it took her a full verse to understand it was a heartbeat, a real one, recorded close, slow, and then, halfway through, getting faster." },
        { s: 'haechan', f: 'neutral', t: "It's nothing. It's a thing I finished." },
        { s: 'solar', f: 'neutral', t: "Whose heartbeat is that?" },
        { s: 'haechan', f: 'neutral', t: "Mine. Obviously. I'm not going to record anyone else's without asking. I've learned that—" },
        { n: "He stopped. He looked at the screen, at the long bright shape of the track, somewhere in the middle of it, for a second too long." },
        { s: 'haechan', f: 'neutral', t: "...Mostly. I'm working on it." },
        { s: 'solar', f: 'neutral', t: "Why does it speed up?" },
        { n: "He looked at her. He looked at her for a long time, his flat face, his ears scarlet, and then he said, in the flattest voice she'd ever heard him use, *it's not about anything, pretty girl*, and every single word of it was a lie he had aimed, fired, and wanted her to catch." }
      ] },
      { n: "She took the headphones off. She put them round his neck again, both hands, the way he'd put them on her, and kept her hands there, on the cord, at the back of his neck, and pulled." },
      { n: "He came. He'd been waiting since November and he came like a man who'd decided waiting was over, his hands in her hair, his mouth on hers, and it wasn't like the laundry room, careful and shaking. It was slow. It was so slow. He kissed her like he was listening to it, like it was a track and he was hearing every layer, the top and the bottom and the room it was in, and she felt her head, for the first time since April, for the first time since she'd woken up in a tower with nobody's name in her mouth, go completely, totally quiet." },
      { n: "No three worlds. No blank page. No counting. Just the radiator knocking and his breath and the warm weight of him pressing her slowly back onto his bed, and his hand flat on her stomach under the hem of her shirt, his thumb moving, and the quiet, the enormous quiet, like walking out of a loud room into snow." },
      { choose: [
        { t: "(Say his name into his mouth.)", notes: 3, then: [
          { s: 'solar', f: 'flustered', t: "Donghyuck." },
          { n: "He stopped. He pulled back an inch and looked down at her with his hair in his eyes and his mouth wet and his whole face open, not flat, not loud, not anything she'd seen it be, and said nothing, and kissed her again, harder, as if the name had been a door and he'd been standing outside it in the rain for longer than he could say." }
        ] },
        { t: "(Pull him down. All the way. Hold on.)", notes: 3, then: [
          { n: "She pulled him all the way down and held on, her arms round his back, his whole weight on her, warm, solid, real, and he made a sound into her neck that she'd never heard a person make, and buried his face there, and stayed, breathing, and she felt him shaking, very slightly, all over, and understood that he was trying not to cry, and held on tighter, and he didn't, quite, and the quiet held." }
        ] }
      ] },
      { n: "She didn't go down until five. They didn't do anything but that, for hours, kiss and stop and talk and kiss, his head on her stomach for a long time while she put her fingers through his hair, and when she finally went down the stairs in the gray light her mouth felt bruised and her head was still quiet, still, like a room after the music stops, and she lay in her own bed and didn't want to sleep in case it went." },
      { flag: 'sp-hc-room' }
    ] },

    /* ── His route: the laundry room. Mitsuru's three a.m. lock check, again. ── */
    { id: 'sp-hc-ln-caught', kind: 'dorm', rank: 8, route: 'romance', flag: ['year-goes-on', 'sp-hc-room'], after: '12/27', until: '2/28', when: 'quiet', place: 'Iwatodai Dorm · Laundry Room', bg: 'iwatodaidorm-laundryroom', time: 'Night · 3 AM', music: 'romance', scene: [
      { n: "The dryer was going, warm and shuddering, full of nobody's laundry; he'd put it on empty again, for the heat, and for the noise, and he was sitting on it and she was standing between his knees, and they had stopped pretending this room was about laundry sometime around Christmas." },
      { n: "He kissed her with the machine humming up through both of them. His hands were inside the back of her hoodie, flat against her spine, spread wide, holding her to him, and her hands were in his hair, and his mouth went down her jaw to the side of her throat and stayed there, unhurried, and the tube light hummed its flat E and the dryer turned and her knees were going in a way that had nothing to do with standing." },
      { ifHeading: 'S', then: [
        { n: "He was murmuring something against her neck in Korean. Nonsense, probably. A song, maybe. The cinnamon of his gum and the hot cotton smell of the dryer and his voice in her skin, and she understood about one word in four and didn't need the other three." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "You're doing the thing. With your breath. You hold it and then you let it all go at once. Like you've been underwater." },
        { s: 'haechan', f: 'neutral', t: "I'm going to keep doing this until you stop holding it. That's a promise, princess. I keep those now." }
      ] },
      { n: "The door opened." },
      { n: "A flashlight. A claret dressing gown. Mitsuru, at three in the morning, doing her lock check, which everyone now knew she did and which she had not seen any reason to stop doing on their account." },
      { n: "The flashlight went to the dryer. To the boy on it. To the girl standing between his knees with her hoodie rucked up at the back and his hands, very visibly, inside it. To his mouth, which was at her throat. It stayed there. It stayed there for what felt like a geological age." },
      { s: 'mitsuru', f: 'neutral', t: "..." },
      { n: "Last time she had said *carry on*. Solar remembered it with total clarity. She waited for it. Everyone in the building would remember it. Haechan, very slowly, took his hands out of the back of her hoodie and put them flat on his own knees like a schoolboy." },
      { s: 'mitsuru', f: 'neutral', t: "Haechan. Solar. It is three in the morning." },
      { s: 'mitsuru', f: 'neutral', t: "The dryer costs the household one hundred and twelve yen a cycle. I've noticed it running empty eleven times since Christmas. I had assumed a fault." },
      { s: 'mitsuru', f: 'surprised', t: "I see that it isn't a fault." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "Hoejangnim." },
        { n: "He said it with a perfect little bow from where he sat on the dryer, his hair wrecked, the most formal word he had, and Mitsuru looked at him over the flashlight and something happened to her mouth that, in a less disciplined woman, would have been a smile, and she put it away immediately." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "I'll pay for the cycles." },
        { s: 'mitsuru', f: 'neutral', t: "Yes. You will." }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Goodnight." },
      { n: "She turned off the flashlight and closed the door behind her with the faint, precise click of a woman who had decided to have seen something, and to do something about it, at a time of her own choosing. The slippers went away down the hall. The dryer turned. Solar put her face down on his shoulder." },
      { choose: [
        { t: "(Laugh. You can't help it.)", notes: 2, then: [
          { n: "She laughed into his shoulder, and he laughed into her hair, and they held onto each other on and against the warm machine and shook with it, silently, like two people at a funeral, and every time it nearly stopped one of them said *a hundred and twelve yen* and it started again, and they didn't make it upstairs until four." }
        ] },
        { t: "We're going to get a talk. Tomorrow. I can feel it.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Oh, we're getting a talk. There's going to be a whiteboard." },
          { ifHeading: 'S', then: [
            { s: 'haechan', f: 'happy', t: "Worth it. I'll take the talk. I'll take ten. Your father's men would've thrown me in the harbor for less." }
          ], else: [
            { s: 'haechan', f: 'neutral', t: "Worth it. I've had worse talks. From your brother. In a living room. Five guys in a row on a couch." }
          ] }
        ] }
      ] },
      { glow: 'haechan:caught' }
    ] },

    /* ── His route: he comes down to her. Waking up together. Hyein on the landing. ── */
    { id: 'sp-hc-ln-down', kind: 'dorm', rank: 8, route: 'romance', flag: 'year-goes-on', after: '12/27', until: '2/28', when: 'quiet', ...ROOM, time: 'Night · 3 AM', music: 'romance', scene: [
      { n: "She'd left her door unlocked. She'd done it on purpose and lay in bed in the dark listening to herself having done it, and at ten past three the handle went down, slowly, with the care of a man who knew exactly which way the hinge creaked, and he came in in his socks and his hoodie and stood in the dark of her room for a second with his back against her door, like a man who'd climbed out of a window and was checking he'd landed." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "Agasshi. You left your door open. That's a security problem. Somebody should talk to you about that." },
        { s: 'solar', f: 'happy', t: "Somebody should." },
        { s: 'haechan', f: 'happy', t: "...I'll do it. In the morning. Very sternly. Move over." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Your door was unlocked." },
        { s: 'solar', f: 'neutral', t: "Was it." },
        { s: 'haechan', f: 'neutral', t: "Don't play with me at three in the morning, pretty girl. I'll lose and I'll like it. Move over." }
      ] },
      { n: "She moved over. He got in under her duvet with his hoodie still on and his cold feet, and she yelped at his feet, and he said *sorry* without sounding sorry at all, and pulled her back against him, his chest to her spine, his arm over her waist, his face in the back of her neck, and they lay like that in the dark not doing anything, for a long time, which was its own kind of everything." },
      { n: "And then not nothing. His mouth on the back of her neck, slow. His hand flat on her stomach under her shirt, warm now, his thumb at her ribs. Her turning over to face him and finding his mouth in the dark. The duvet over their heads like a tent, the air under it hot and close and full of him, and somewhere in the middle of it she stopped knowing which of her worlds she was in and stopped caring, and so did he." },
      { n: "They fell asleep at five without meaning to, tangled, in the middle of a sentence neither of them finished." },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Early Morning', bg: 'solar-dormroom-day', music: 'tender' },
      { n: "She woke up to light and a weight on her and didn't know where she was, and then did. He was asleep on her. Most of him. His head on her chest and one arm across her and one leg over hers, heavy and warm and completely unconscious, his mouth open, his hair in her face, breathing slow, and the light coming in gray-gold round the edge of her curtain onto the side of his face." },
      { n: "She lay very still and looked at him. Asleep, he didn't look like either of them. Not the flat one, not the loud one. He looked about twelve. He looked like a boy who'd run a very long way and finally been allowed to stop. She put her hand in his hair, very lightly, and he made a small sound in his sleep and pressed his face harder into her collarbone, and her chest did something she had no name for in any language." },
      { n: "Then Fuuka's alarm went off through the wall, the little tinkling one, and it was seven, and he was on her floor, and his room was at the end of the top floor, and there was a whole landing and a staircase between here and there and a household waking up on every inch of it." },
      { s: 'solar', f: 'surprised', t: "...You have to go. Now. Go." },
      { s: 'haechan', f: 'neutral', t: "Five more minutes." },
      { s: 'solar', f: 'flustered', t: "Fuuka's up. Hanni's up. Hyein gets up at seven-ten to steal the good shower—" },
      { s: 'haechan', f: 'happy', t: "Then I'll be quick." },
      { n: "He was not quick. He kissed her goodbye four times between the bed and the door, one of them against the door, and slipped out into the hall in his socks with his hair standing straight up on one side and her hair tie, somehow, on his wrist, and she pressed her ear to the door and heard him make it four steps down the corridor before a voice on the landing said, with enormous, delighted horror," },
      { s: 'hyein', f: 'surprised', t: "...OH MY GOD." },
      { n: "Then a sound like a hand being clapped over someone's mouth. Hanni's voice, very quietly, *Hyein, go back in your room*. Hyein's voice through the hand, *I'm not, I can't, this is the best day of my life*. And his footsteps going up the stairs two at a time, unhurried, and his voice, flat, from the turn, *morning, ladies*, and a door at the end of the top floor shutting." },
      { glow: 'haechan:sneak' }
    ] },

    /* ── His route: the night, Runners. The cut-away; the very obvious morning after. ── */
    { id: 'sp-hc-ln-night-r', kind: 'dorm', rank: 8, route: 'romance', heading: NOT_S, flag: ['year-goes-on', 'sp-hc-room'], after: '12/28', until: '2/28', when: 'quiet', ...HIS, time: 'Night · 1 AM', music: 'romance', scene: [
      { n: "There was a candle. He'd never have admitted to buying it. It was on the windowsill of his room at the end of the top floor in a jar from the hundred-yen shop, vanilla, the label still on, and the radiator was knocking and the light was off and the candle was the only light, and she stood in his doorway and looked at it and then at him, sitting on the end of his bed with his elbows on his knees, not looking at her." },
      { s: 'haechan', f: 'neutral', t: "It was by the register." },
      { s: 'solar', f: 'neutral', t: "The candle." },
      { s: 'haechan', f: 'neutral', t: "It was by the register. I was buying gum. It was there. Don't read into it." },
      { s: 'haechan', f: 'neutral', t: "...Read into it, princess. I want you to read all the way into it." },
      { n: "She shut the door behind her. The sound of it went into the room like a stone into water, and he looked up at her then, finally, and he wasn't flat. Not even a little. Everything that he usually held under his face like a hand over a mouth was right there on it, the whole year, every universe, the platform and the roof and the dryer and the docks, and it was so much that for a second she couldn't move." },
      { s: 'haechan', f: 'serious', t: "Solar." },
      { n: "Her name. Not princess. Not pretty girl. The name he used when he'd stopped performing entirely, the one he only said when there was nothing left to hide behind, and he said it into the candlelight like a man setting down the last thing he'd been carrying." },
      { s: 'haechan', f: 'serious', t: "I want you. I've wanted you in every one of them. I want you to know I know what that means and I'm not being cute about it. If you want to go back downstairs, go. I'll walk you. I'll still be here at three." },
      { choose: [
        { t: "(Cross the room. Take his face in your hands. Kiss him.)", notes: 3, then: [
          { n: "She crossed the room. She stood between his knees and took his face in both her hands and tipped it up and looked at it in the candlelight for a long moment, the moles on his cheek and his jaw and the hollow under his eye, all of it, like a map of somewhere she'd lived, and then she kissed him, and he made a sound against her mouth like a door coming off its hinges, and pulled her down onto him by the waist." }
        ] },
        { t: "Donghyuck. I'm not going downstairs.", notes: 3, then: [
          { n: "He shut his eyes. He sat on the end of his bed with his eyes shut and his hands open on his knees like a man in a church, and took the name in, and she watched it go all the way down, and when he opened his eyes again they were wet, and he didn't wipe them, and he reached up and pulled her down to him by the front of her shirt." },
          { s: 'haechan', f: 'flustered', t: "...Say it again." },
          { s: 'solar', f: 'flustered', t: "Donghyuck." },
          { s: 'haechan', f: 'serious', t: "Again. Slower. I'm recording it. In here. Only in here." }
        ] }
      ] },
      { n: "It wasn't slow. It had been slow for weeks. It had been slow since November and they were done with slow. His hands were in her hair and then at the hem of her shirt and then pulling it over her head, and she had his hoodie off him and then the T-shirt under it, and his skin was hot and smelled of vanilla and cold air and him, and he pulled her down onto the bed and over him and then rolled them both so she was under him, his weight on his forearms either side of her head, breathing hard, looking down at her in the candlelight like he was trying to memorize the light on her." },
      { s: 'haechan', f: 'serious', t: "Tell me if you want me to stop." },
      { s: 'solar', f: 'neutral', t: "I'm not going to want you to stop." },
      { s: 'haechan', f: 'neutral', t: "Tell me anyway. If. I'll stop. I'll always stop. I need you to know that before—" },
      { n: "She pulled his mouth down to hers and he stopped talking, and the radiator knocked, and the candle on the sill leaned in a draft from the window and righted itself, and the last thing she saw before she closed her eyes was the jar from the hundred-yen shop with its label still on, and his hand reaching across to it, and the flame between his finger and thumb, and then the dark, and him in it, and nothing in her head at all but him, all the way down." },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Morning', bg: 'iwatodaidorm-diningroom', music: 'joy' },
      { n: "There was no hiding it. She'd known there wouldn't be when she'd looked in the bathroom mirror at seven and said a word out loud she'd only ever said in her head. Her lower lip was swollen, visibly, and had a small mark at one corner, and there was another mark under her jaw on the left side that no amount of hair would cover, and she'd tried, for five minutes, with a comb, before giving up and coming down to breakfast with her chin up like a woman walking into a firing squad." },
      { n: "He was already at the table. In a T-shirt. A T-shirt with a collar so wide that the side of his neck was simply there, out in the open, in the morning light, marked from the hinge of his jaw to his collarbone like a map of a small archipelago, and he was eating rice with total composure and reading the back of the milk carton." },
      { n: "The dining room was silent. The whole dorm was there. Junpei with his chopsticks halfway to his mouth, frozen. Yukari with her coffee cup at her lips, not drinking it. Fuuka, who had looked up, and seen, and was now staring at her own rice with her face the color of a tomato. Aigis, upright and serene. Koromaru under the table, who sneezed, once, into the silence, like a starting pistol, and nobody moved." },
      { s: 'haechan', f: 'neutral', t: "Morning." },
      { n: "Nobody said it back. Mitsuru turned a page of her newspaper. The sound was enormous." },
      { ifTaken: 'haechan', then: [{ ifRomance: 'akihiko', then: [
        { n: "Akihiko came in from his run. He stopped in the doorway with his towel round his neck and looked at the table and at the silence and at Haechan's neck and then, last, slowly, at her, and his face did a lot of things in a very short time and then decided on one, and it was not anger. It was something tired and fond and sore. He came in and sat down and reached for the rice and said *pass the miso, Junpei*, and Junpei passed the miso with a trembling hand, and Akihiko ate his breakfast next to her, the side of his knee against hers under the table, deliberately, the whole meal, and didn't say anything else, and that was the kindest thing anybody did all day." }
      ] }] },
      { n: "Hyein, at the end of the table, put her spoon down very gently. Hanni put her hand flat on top of Hyein's hand and pressed it into the table without looking at her, the way you'd hold down a cat." },
      { s: 'hyein', f: 'flustered', t: "...I didn't say anything." },
      { s: 'hanni', f: 'neutral', t: "You're about to." },
      { s: 'hyein', f: 'flustered', t: "I'm NOT, I'm being SO good, I'm the best I've ever been, look at me—" },
      { ifHeading: 'H', then: [
        { n: "He passed her the salt. He didn't look up from the milk carton. And under the table, for one second, his foot found hers, and pressed, the way you'd press a hand on a station platform before a train, and she understood that he was memorizing this too, the breakfast, the silence, all of it, for afterwards, and she pressed back." }
      ], else: [
        { n: "He passed her the salt. He didn't look up from the milk carton. And under the table his foot found hers and stayed there, and she ate her breakfast in total silence in front of everyone she lived with with her ears on fire and her lip throbbing and his ankle against hers, and she had never, in any world, been so embarrassed, or so happy, or so completely unable to tell the difference." }
      ] },
      { s: 'junpei', f: 'surprised', t: "...Dude." },
      { s: 'haechan', f: 'neutral', t: "Eat your eggs, Junpei." },
      { flag: 'sp-hc-night' },
      { glow: 'haechan' }
    ] },

    /* ── His route: the night, strangers. The loud boy goes quiet; looks and hands; the morning after. ── */
    { id: 'sp-hc-ln-night-s', kind: 'dorm', rank: 8, route: 'romance', heading: 'S', flag: ['year-goes-on', 'sp-hc-room'], after: '12/28', until: '2/28', when: 'quiet', ...HIS, time: 'Night · 1 AM', music: 'romance', scene: [
      { n: "He'd been singing all evening. In the kitchen, at the sink, on the stairs, the big swooping kind of song, half the verses wrong and the choruses perfect, so loud that Junpei had thrown a slipper at him from the lounge, and he'd caught it and put it on his head like a hat and sung the rest of the chorus to Junpei with his hand on his heart until Junpei had laughed so hard he fell off the sofa." },
      { n: "At one in the morning, in his room at the end of the top floor, with the door shut and the radiator knocking and her standing in the middle of the floor in her socks, he wasn't singing. He wasn't saying anything at all." },
      { n: "That was how she knew. Every other version of him she'd learned to read talked more when it was lying and joked when it was cornered and sang when it was happy. The one who went quiet was the one who was afraid. He was standing by his window with the cinnamon gum still in his mouth, not chewing it, and his hands at his sides, and his face completely, nakedly quiet, and he was so frightened he was shaking with it." },
      { n: "He said something in Korean. Low. A whole sentence. She caught almost none of it. She caught her name at the end. Not agasshi. Not gongjunim. Solar. The way he only ever said it when every joke he had had run out." },
      { choose: [
        { t: "(Go to him. Take the gum out of his mouth. Kiss him.)", notes: 3, then: [
          { n: "She crossed the room and put her fingers to his mouth and took the gum out of it, the way you'd take something out of a child's hand, and dropped it in the bin by his desk without looking, and he laughed, once, a cracked startled breath of a laugh, and then she kissed him and he stopped laughing and stopped shaking and started something else entirely." }
        ] },
        { t: "(Hold out your hand. Palm up. Wait.)", notes: 3, then: [
          { n: "She held out her hand to him, palm up, across the floor, the way he'd held his out to her on a sofa in November. He looked at it. He looked at it the way a man on a dock looks at a boat he's been told isn't coming. Then he crossed the room in three steps and didn't take her hand at all; he took her face, both hands, his split knuckles rough on her cheeks, and kissed her like he was falling into a harbor and had decided not to swim." }
        ] }
      ] },
      { n: "He didn't say a word all night that wasn't Korean. He didn't need to. He talked to her in Korean, low, against her jaw, against her shoulder, against the inside of her wrist, a constant unbroken murmur, and she understood one word in five and the rest went into her skin without being translated, and she answered him in a language she didn't remember knowing, and he heard it, and went still against her, and said *again*, the one word, and she said it again." },
      { n: "His hands were the rest of it. Dockworker's hands, hard and split, and so careful on her it was unbearable, like she was something he'd been told would break and he'd decided to prove everyone wrong by being gentle with it forever. His jacket on the floor. His shirt. The smell of him, diesel and salt wind and cinnamon, the sun-brown of his shoulders in the dark, a scar through his eyebrow she put her mouth on without deciding to, as if it had been waiting for her there, and he shut his eyes and made a sound she'd remember on her deathbed." },
      { n: "He reached across her for the lamp. He looked at her first, a long look, his face above hers with the light behind him, the whole of it there, nothing sideways, nothing a joke. Then he said one more thing in Korean, very quietly, a thing she understood perfectly, all of it, every syllable, and turned the light off." },
      { place: 'Iwatodai Dorm · Dining Room', time: 'Morning', bg: 'iwatodaidorm-diningroom', music: 'joy' },
      { n: "Her lip. That was the first thing. She'd seen it in the bathroom mirror and said *oh no* out loud, in Korean, to her own reflection. It was swollen and it had a mark at the corner and there was another, worse, under her jaw, a dark bruise-colored thumbprint of a thing, and she had come down to breakfast with her hair carefully over that side of her face and her chin up like a duchess." },
      { n: "It was for nothing, because he was already at the stove." },
      { n: "He was singing. The whole dining room was dead silent and he was at the stove in a sleeveless shirt with a frying pan, cooking an absolutely enormous amount of eggs, and singing at full volume, a trot song about a man coming home to a harbor, badly in the verses and perfectly in the chorus, and the side of his neck from his ear to his collarbone was a constellation, and he didn't care, he didn't care at all, he was swinging the frying pan like a microphone." },
      { n: "Nobody spoke. Junpei, at the table, was holding his chopsticks so still they might have been carved. Yukari had both hands round her mug and her eyes shut, as if in pain. Fuuka was the color of a postbox. Yunjin, in her yellow puffer at the end of the table, was eating rice with the face of a woman watching a car crash she'd seen coming from two worlds away, and when Solar sat down Yunjin said, without looking up, very quietly, in Korean, *your father would have had him shot*, and went on eating." },
      { ifTaken: 'haechan', then: [{ ifRomance: 'akihiko', then: [
        { n: "Akihiko came in from his run, and stopped, and heard the singing, and saw the neck. She watched it go into him. He stood in the doorway for one long breath with his towel round his shoulders, and then he went to the stove, and stood beside the singing boy, and took a plate, and held it out, and Haechan stopped singing, mid-chorus, and looked at him, and put eggs on the plate, a lot of them, carefully, and Akihiko said *thanks* and took them to the table and sat down next to her and ate them, every one, and didn't look at her neck, and pressed his knee against hers under the table, deliberately, all through breakfast. Nobody in that room was a villain. That was the thing she couldn't get down with the eggs." }
      ] }] },
      { n: "He came to the table with the pan. He put eggs on her plate. A lot of eggs. He put a hand on the top of her head as he passed, briefly, warm, in front of everyone, and said, in Korean, loud and cheerful, a whole sentence that made Yunjin choke on her rice, and then went back to the stove and picked up the chorus exactly where he'd left it." },
      { s: 'junpei', f: 'surprised', t: "What did he say? Yunjin. Yunjin, what did he just say?" },
      { s: 'yunjin', f: 'flustered', t: "I'm not translating that. I'm never translating that. I'm going to the guesthouse to live with normal people." },
      { n: "Mitsuru, at the head of the table, folded her newspaper. Very slowly. She put it down beside her plate, squared to the edge. Everyone at the table watched her do it, the way you'd watch a referee walk to the center of the ring." },
      { s: 'mitsuru', f: 'neutral', t: "There will be a house meeting this evening. About the dryer. Among other things." },
      { s: 'haechan', f: 'happy', t: "Hoejangnim." },
      { n: "He bowed to her over the frying pan. And then he went on singing. And Solar sat in the silence in front of everyone she lived with with her lip throbbing and her face on fire and a mountain of eggs she'd never finish, and under the table Koromaru put his chin on her foot, and it was, by some distance, the happiest she had been in this world." },
      { flag: 'sp-hc-night' },
      { glow: 'haechan' }
    ] },

    /* ── His route: the roof in the snow. Every universe. ── */
    { id: 'sp-hc-ln-snow', kind: 'dorm', rank: 9, route: 'romance', flag: 'year-goes-on', after: '1/10', until: '2/24', when: 'quiet', place: 'Iwatodai Dorm · Rooftop', bg: 'iwatodaidorm-roof-night', time: 'Night · 2 AM', music: 'romance', scene: [
      { n: "It was snowing on the roof. Not falling so much as hanging, fat flakes moving in no particular direction under the one light by the door, settling on the water tank and the railing and the planters with the dead summer tomatoes in them, and on him, on his hood and his shoulders, where he stood at the railing waiting with his back to her." },
      { n: "He heard the door. He didn't turn round. He opened his coat instead, one side of it, the way she'd once seen someone do in another winter, and she walked across the snow in her socks and boots and stepped into it, and he closed it round both of them, and his chest was warm against her back through two layers and his chin came down on the top of her head." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "In the other place it snows on the harbor. On the cranes. It sits on the containers in lines. You used to count them from the office window. The containers. You'd count them with your finger on the glass." },
        { s: 'haechan', f: 'neutral', t: "I used to watch you count from the yard. You never knew. I'd stand in the snow on purpose so I'd have a reason to come up to the office and get warm." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "It snows at home. Syracuse. It snows like it's being paid to. Fifteen feet. People just disappear into it, their cars, everything. You can walk across campus at two in the morning and it's so quiet you can hear the lights." },
        { s: 'haechan', f: 'neutral', t: "I used to think that was the only quiet place in the world. I was wrong about that too." }
      ] },
      { n: "She turned round inside his coat. It took some doing. They both laughed at it, the shuffle, the snow going down her neck, and then she was facing him with the coat round them both and her hands flat on his chest and her back against the cold curve of the water tank, and the snow was in his eyelashes, and he was looking down at her like he'd found her at the bottom of a very long list." },
      { n: "He kissed her against the water tank with the snow coming down on both their faces. Cold mouths and then not. His hands inside her coat at her waist, and then at the small of her back, pulling her off the tank and into him, and the snow melting where it fell on her cheeks, and his breath, and hers, going up white together into the light and coming apart." },
      { s: 'solar', f: 'neutral', t: "Was it always this? In every one?" },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'happy', t: "No. In the other one you looked straight through me for a month. Like I was weather. Like I was a crane on the dock." },
        { s: 'haechan', f: 'serious', t: "...And then it was this. Every time, after the part where you don't know me. It's always this. That's how I know it's you." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "No. In mine you thought I was the worst person you'd ever met. You were mostly right." },
        { s: 'haechan', f: 'neutral', t: "...And then a roof. There's always a roof. I don't know what it is about us and roofs." },
        { s: 'haechan', f: 'serious', t: "And then you find out the worst of me, and you believe me, and you're still standing there. That's as far as we got, over there." }
      ] },
      { choose: [
        { t: "(Kiss him again. Let the snow have the rest.)", notes: 2, then: [
          { n: "She kissed him again and let the snow have the rest of the night. They stayed up there until neither of them could feel their feet, and when they finally went in he had snow in his hair like he'd aged fifty years in an hour, and she told him, and he said *good, I want to*, and meant it, and they went down the stairs leaving wet footprints that Mitsuru would find at six and say nothing about, with tremendous restraint, at breakfast." }
        ] },
        { t: "Next time I'll find you first.", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "You won't." },
          { s: 'haechan', f: 'neutral', t: "That's fine. Somebody's got to be the one looking. I don't mind. I'd look in every one. I'd look in a hundred." }
        ] }
      ] }
    ] },

    /* ── February: again. She wakes and he's watching; she leaves in his hoodie. ── */
    { id: 'sp-hc-ln-again', kind: 'dorm', rank: 11, route: 'romance', flag: ['year-goes-on', 'sp-hc-night'], after: '2/3', until: '3/3', when: 'quiet', ...HIS, time: 'Night · 12 AM', music: 'tender', scene: [
      { n: "February, and the building so cold at night that the radiator in his room at the end of the top floor was the most valuable thing in it, and they'd stopped pretending she slept anywhere else. Not every night. Enough nights that her toothbrush lived in a mug on his desk next to his, and Hyein had stopped saying *oh my god* on the landing and started saying *good morning, Solar's toothbrush*." },
      { n: "Tonight they hadn't even talked. She'd come up and he'd been in bed already with a book he wasn't reading, and lifted the duvet without looking up from the book, and she'd got in, and he'd put the book down on his chest, open, and turned the light off with the other hand, and found her in the dark like he always did, like he'd been finding her in the dark for years." },
      { n: "Slower than the first time. Much slower. Like a song you've played enough times that you don't have to think about the chords anymore and can listen to the room instead. The book slid off the bed and hit the floor and neither of them went to get it." },
      { place: "Iwatodai Dorm · Haechan's Room", time: 'Early Morning', bg: 'haechan-bedroom', music: 'tender' },
      { n: "She woke up and he was watching her." },
      { n: "He was lying on his side, his head on his arm, his hair a disaster, in the gray light coming through the curtain, and he was just looking at her, quietly, with nothing on his face at all but looking, and when he saw she was awake he didn't look away or make a joke about it or pretend he'd only just woken up himself. He kept looking." },
      { ifHeading: 'S', then: [
        { s: 'haechan', f: 'neutral', t: "Agasshi. Your mouth is open when you sleep. You've got a crease from the pillow. Here. Right here." },
        { n: "He touched her cheek with one finger, where the crease was, and left the finger there." },
        { s: 'haechan', f: 'sad', t: "I watched you sleep in a car once. In the other one. Four hours. On the Incheon bridge in traffic. You never knew. I didn't change lanes once so I wouldn't wake you." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "You sleep with your hands like that. Fists. Like you're going to have to fight someone in your dreams." },
        { s: 'haechan', f: 'neutral', t: "I've been trying to open them for twenty minutes. You won't let me. Even asleep. It's very you." }
      ] },
      { choose: [
        { t: "How long have you been watching me?", notes: 2, then: [
          { s: 'haechan', f: 'neutral', t: "Since about August. In one of them." },
          { s: 'haechan', f: 'happy', t: "This morning? An hour. I was going to wake you. Then I didn't. Then I was going to again. I'm very bad at it." }
        ] },
        { t: "(Open your fist. Put your hand flat on his chest.)", notes: 2, then: [
          { n: "She opened her hand and put it flat on his chest, over his heart, and he looked down at it there and covered it with his own and pressed it in, and she felt his heart under her palm go from slow to fast in the space of three beats, and he felt her feel it, and laughed, quietly, at himself, and said *see, that's the speed-up, that's the part in the track*, and she understood about the heartbeat finally, all of it, and kissed him for it." }
        ] }
      ] },
      { n: "She went down at seven wearing his hoodie. She hadn't meant to. It was the nearest thing and it was warm and it came down to her thighs and smelled of him, and she was halfway down the stairs with her bare legs and her hair everywhere before she noticed, and on the landing Hanni was coming out of the bathroom with a towel on her head and stopped." },
      { s: 'hanni', f: 'neutral', t: "...That's his hoodie." },
      { s: 'solar', f: 'neutral', t: "It is." },
      { n: "Hanni looked at her for a long moment, the way she'd once looked at her in another hallway in another life, half fond and half despairing and all the way on her side, and then she reached out and fixed the hood so it lay flat, and tucked a piece of Solar's hair behind her ear, the way you'd straighten someone's collar before they went on stage." },
      { s: 'hanni', f: 'happy', t: "Keep it. It looks better on you. He'd say that too. Don't let him say it, though. He's said it enough." },
      { glow: 'haechan' }
    ] }
  ]);

  /* ── Texts, late: spicier now. By heading where his register matters (variants, core.js header). ── */
  const T = W.FEMC_GAME_TEXTS;
  if (T) {
    const hc = t => ({ from: 'haechan', t });
    (T.ambient ||= []).push(
      { id: 'sp-tx-hc-floor', thread: 'haechan', from: '12/8', to: '12/17', slot: 'late', flag: 'arrived-haechan', crush: H(['almost']), msgs: [
        hc("you're awake"), hc('i can hear you not sleeping'), hc("the floors in this place are a joke")
      ], variants: {
        S: { msgs: [hc('agasshi'), hc("you're awake. i can hear you turning over"), hc("turn over the other way. toward the wall. toward me. i'm upstairs")] }
      }, reply: [
        { t: 'what does not sleeping sound like', crush: H(1), then: [hc('like you'), hc('go to sleep before i come down and say something stupid')] },
        { t: "go to sleep", then: [hc('you first')] }
      ] },
      { id: 'sp-tx-hc-door', thread: 'haechan', from: '12/27', to: '2/26', slot: 'late', flag: 'arrived-haechan', crush: H('dating'), msgs: [
        hc("door's unlocked"), hc('not an invitation'), hc("it's an invitation")
      ], variants: {
        S: { msgs: [hc('agasshi'), hc("my door's open"), hc("the radiator's going. it's the only warm room in the building. this is a public service announcement")] }
      }, reply: [
        { t: 'on my way', then: [hc('skip the fourth stair'), hc("and walk like you're not happy about it. junpei's up")] },
        { t: "u come down", then: [hc('...'), hc('give me a minute. i have to find socks. i have no socks. why do i have no socks')] }
      ] },
      { id: 'sp-tx-hc-hoodie', thread: 'haechan', from: '1/12', to: '2/27', slot: 'late', flag: 'arrived-haechan', crush: H('dating'), msgs: [
        hc('where is my hoodie'), hc("don't answer that"), hc('i know where it is. i walked past you in it at dinner. i lost my whole sentence')
      ], variants: {
        S: { msgs: [hc('agasshi'), hc('i want my hoodie back'), hc("no i don't. keep it. wear it to breakfast. let junpei see. let him suffer")] }
      }, reply: [
        { t: "it's on me rn", then: [hc('...'), hc("that's cheating"), hc("i'm putting my phone under the pillow. it's still on. i'm still looking at it")] },
        { t: 'come get it', then: [hc("that's not how this works, pretty girl"), hc('give me two minutes')] }
      ] }
    );
  }

  /* ── The day after (glow) and the dating stretch: the world notices. ── */
  const add2 = C.add, DH = H('dating');
  add2('chatter.morning', [
    { t: "The new one in the black hoodie walked her to the gate. He was wearing a turtleneck under it. In January. A turtleneck.", glow: 'haechan', crush: DH },
    { t: "Did you see her lip? Did you SEE it? Don't look. Don't look. Okay look.", glow: 'haechan', crush: DH }
  ]);
  add2('lunch.clear', [
    { t: "Lunch on the roof. Maki looked at her chin, and at her scarf, which was very high for a sunny day, and back at her chin, and said *who*, and Solar said *nobody*, and Maki said *nobody has a very specific bite* and Sonoda choked on his milk.", glow: 'haechan', crush: DH }
  ]);
  add2('lunch.rain', [
    { t: "Lunch in the corridor, rain on the glass. Maki leaned over and moved Solar's hair off her neck with one finger, and looked, and put it back, very gently, and said *you're glowing, which is disgusting, and also, use green, it cancels red*.", glow: 'haechan', crush: DH }
  ]);
  add2('classQuiet', [
    { t: "The lesson went past in warm slow pieces. She kept touching her lower lip with the end of her pen without meaning to, and catching herself, and stopping, and doing it again.", glow: 'haechan', crush: DH }
  ]);
  add2('home', [
    { t: "Home. From the kitchen came the sound of somebody singing, loudly, very well in the chorus and very badly in the verse, and Junpei on the sofa said *he's been doing that since breakfast* with the face of a man who has not slept.", glow: 'haechan', crush: DH, heading: 'S' },
    { t: "Home. He was on the dorm steps with two cans of coffee, one held out toward her without a word, and the collar of his hoodie zipped up to his chin, and his ears went red when he saw her see the collar.", glow: 'haechan', crush: DH }
  ]);
  add2('evening.sub', [
    { t: "Hyein is on the sofa pretending to read a magazine. She looks at you over it, looks away, looks back, and mouths something enormous. What now?", glow: 'haechan', crush: DH },
    { t: "Mitsuru has written HOUSE MEETING: 8 PM on the whiteboard by the stairs, and under it, smaller, the dryer. What now?", glow: 'haechan:caught', crush: DH }
  ]);
  add2('late.plain', [
    { t: "She lay in bed and listened to the radiator at the end of the top floor knock through the building, every few seconds, like somebody politely asking her to come up.", crush: DH, months: [1, 2] }
  ]);
})();
