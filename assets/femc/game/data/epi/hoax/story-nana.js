/* The HOAX epilogue, second pass (Nov 6 2026): more Nana (Kat: "We LOVE Nana. And so do the characters in Hoax!"). Seven short
   moments, each a story event with NO `consumes`, so it plays at the top of its slot and the slot is still free afterwards (Go
   Out, or the late screen). Every one sits on a day whose story event has already played by then, so none of them takes a
   day away from a routine (core.js dailyLife skips a day once one of its events has played). Data only; pushes onto R.events.

   Events (no consumes; every route)
     epi-h-nana-bed       12/22 evening  Hanlim · Home                 her parents in the kitchen about the bed; he's on it first;
                                                                       she gives him the pillow (Dad: Jaeseok, Mom: Soyeon, by name)
     epi-h-nana-antlers   12/25 evening  Hanlim · Home · Living Room   Mom's reindeer antlers over the half-eaten bow; the old
                                                                       group chat; Jungwon's one line. Choice: which photo she sends
     epi-h-nana-hall      12/29 late     Hanlim · Home                 home from the party: Nana at the door, Dad "reading" in the
                                                                       dark, the coat that smells of the party. ifEpiRoute touch
     epi-h-nana-sunghoon  1/1 evening    Hanlim · Winter Street        Sunghoon walking home in his hanbok; Nana at the gate;
                                                                       "Sunghoon has decided"
     epi-h-nana-heeseung  1/2 evening    Hanlim · Home                 Heeseung at the door with RETREAT FACTS v3 after the motion;
                                                                       Nana leans on him; has he had water
     epi-h-nana-shovel    1/4 evening    Hanlim · Home                 the snow day's evening: Dad shovels, Nana eats the snow, Mom
                                                                       at the window. Choice: a snowball / Junkyu's photo
     epi-h-nana-jaehyuk   1/9 evening    Hanlim · Home                 Jaehyuk drops off notes for the last paper; Nana sits on his
                                                                       feet; the snow going up past the porch light; he says nothing
     epi-h-dad-call       1/6 late       Hanlim · Home · Her Room      Kat's idea (Nov 6): Dad phones from a work trip in Daejeon (he's
                                                                       home Sunday morning, as story-days.js epi-h-sunday has it); the
                                                                       front desk's "Kim Jaeseok-nim"; how Mom told him her name; Nana
                                                                       at her door (rt-nana-door); reads epi-h-jw-reel. Choice: sleep /
                                                                       stay on (he talks about the reservoir)
   Flags set: none. Flags read: the locked route (ifEpiRoute, the hall), epi-h-jw-reel (the call). Events read: each has `date` only; the day's earlier
     event (emergency, christmas, party, sebae, motion, snowed-in, prom) always comes first in its own slot.
   Glitches: none (no temple lie is told here).

   Inventions for Kat to confirm
   - Solar's parents' names (Kat, Nov 6: "you can make names up"): her dad is **Kim Jaeseok**, her mom is **Han Soyeon** (she
     kept her own surname, as Korean women do). They call each other by name; Solar still says Mom and Dad. Easy to swap: search
     this folder for "Jaeseok" and "Soyeon".
   - Nana has slept on Solar's bed every night since he was eleven weeks old; Mom "lost that fight in the first week".
   - Mom owns reindeer antlers for him and brings them out every Christmas night; he tolerates them for one photo.
   - Dad waits up in the dark living room with a fishing magazine and calls it reading.
   - Sunghoon walks home from Yeobo's past her street on 1/1; he thinks Nana is the most handsome dog in Hanlim.
   - Heeseung revises RETREAT FACTS (v3, laminated) the evening the motion goes up and delivers it by hand.
   - Jaehyuk brings her colour-coded notes for the last make-up paper on 1/9. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  (R.events ||= []).push(

    // 12/22 evening: the bed
    { id: 'epi-h-nana-bed', date: '12/22', slot: 'evening', title: 'his side', place: 'Hanlim · Home', time: 'Evening', scene: [
      { music: 'epi-h-home' },
      { n: "She heard them before she got to the bottom of the stairs, her parents in the kitchen with the extractor fan on, which they always seemed to think made them soundproof, which it never once had." },
      { s: 'mom', f: 'serious', t: "I'm only saying he could try the floor. For one night. There's a perfectly good bed downstairs that cost a hundred and forty thousand won." },
      { s: 'dad', f: 'neutral', t: "Soyeon. He has been on her bed for nine days." },
      { s: 'mom', f: 'neutral', t: "He has been on her bed since he was eleven weeks old, Jaeseok. I lost that fight in the first week. I'm aware." },
      { s: 'dad', f: 'happy', t: "Then why are we having it again." },
      { s: 'mom', f: 'sad', t: "Because she's back, and she looks tired, and he's sixty pounds, and he lies on her *legs*." },
      { n: "Her dad didn't say anything to that. She heard the fridge open and close, which was what he did instead of answering, and she stood on the bottom stair with her hand on the rail and felt something go warm and stupid in her chest, the way it did every time she caught one of them worrying about her when they thought she couldn't hear." },
      { n: "Then the click of claws on the hall floor. Nana came round the corner from the living room, saw her on the stairs, and went past her up them at a steady, purposeful trot without stopping, like a man who'd remembered he'd left the stove on, and by the time she got to her room he was already on the bed. In the middle. Head on her pillow. Looking at the door with the calm of somebody who'd never once in his life been on the floor and wasn't about to start." },
      { s: 'solar', f: 'happy', t: "Mom wants you on the floor." },
      { n: "Nana's tail thumped the duvet twice. He did not move." },
      { n: "She loved him so much it was embarrassing. She'd loved him so much since the day her dad came home with a white puppy in a cardboard box that said *PEARS* on the side that she'd cried, at eleven, at the size of his feet, and she'd been through a lot of things since then, worse things, stranger ones, a whole year she couldn't explain to anybody in this house, and none of it had made a dent in that. She lay down on the bit of bed he'd left her, which was the edge, and put her face in the back of his neck, and breathed in warm dog and the cold that came off his coat from the yard." },
      { s: 'solar', f: 'happy', t: "Keep the pillow. It's yours. I'll take the edge." },
      { n: "Nana sighed the sigh that came all the way up from the bottom of him and rolled half onto his back, so she could do his stomach, which was the deal, and downstairs the extractor fan clicked off, and her mom's voice came up the stairs, not loud, to nobody in particular." },
      { s: 'mom', f: 'neutral', t: "Fine. The floor can wait." }
    ] },

    // 12/25 evening: the antlers
    { id: 'epi-h-nana-antlers', date: '12/25', slot: 'evening', title: 'antlers', place: 'Hanlim · Home · Living Room', time: 'Evening', scene: [
      { music: 'epi-h-christmas' },
      { n: "When the house had emptied out and the dishes were done and her dad had fallen asleep sitting up on the sofa with the television explaining the weather to him, her mom went to the hall cupboard and came back with the antlers." },
      { n: "They were the same antlers as every year. Felt, brown, a bit squashed, with a red pom-pom between them and an elastic strap Nana had chewed through in 2019 and her mom had sewn back with white thread. Half of the red bow from lunch still hung off his collar like a medal. Her mom knelt down on the heated floor in front of him with the antlers held out, and Nana looked at them, and then at her, with the deep weary patience of a dog who had been through this before and knew it would be over sooner if he cooperated." },
      { s: 'mom', f: 'happy', t: "One picture. One. Then they come off. Solar, get your phone, he's only good for about four seconds." },
      { cg: 'epi-h-antlers' },
      { n: "He was good for exactly four seconds. Then he lay down very slowly onto his side with the antlers on, like a building being demolished, and looked at the ceiling with his tongue out, and her dad woke up and laughed so hard he had to take his glasses off." },
      { s: 'dad', f: 'happy', t: "Soyeon, look at him. He's given up. He's given up on all of us." },
      { cg: null },
      { choose: [
        { t: "(Send the good one, antlers up, to the group chat.)", then: [
          { phone: [
            { from: 'solar', t: "solarsystem: [Photo: Nana in reindeer antlers, sitting up very straight, looking into the camera with enormous dignity]", img: 'tp-hoax-antlers-proud' },
            { from: 'junkyu', t: "junkyute: NANA!!!!!!!! MERRY CHRISTMAS NANA!!!!!" },
            { from: 'jihoon', t: "jihoney: my son has been humiliated On The Day Of Our Lord" },
            { from: 'jihoon', t: "jihoney: he is so handsome though" },
            { from: 'asahi', t: "asanoonecares: he looks like he's about to deliver bad news" },
            { from: 'hyunsuk', t: "geniusuk: he looks better than any of u in that pic" },
            { from: 'jaehyuk', t: "jaehyukkie: the left antler is lower than the right. it's bothering me" },
            { from: 'cherry', t: "cherryblossoms: my grandma says merry christmas to the cloud dog" }
          ], contact: "rip solar kim (she's fine probably)", group: true }
        ] },
        { t: "(Send the one where he's given up, to the group chat.)", then: [
          { phone: [
            { from: 'solar', t: "solarsystem: [Photo: Nana lying flat on his side on the floor in reindeer antlers, tongue out, staring at the ceiling]", img: 'tp-hoax-antlers-flat' },
            { from: 'asahi', t: "asanoonecares: finally someone in this chat who gets it" },
            { from: 'junkyu', t: "junkyute: is he ok!!! is he sad!!! :(" },
            { from: 'solar', t: "solarsystem: he's fine kyu he's being dramatic" },
            { from: 'jihoon', t: "jihoney: he gets that from me" },
            { from: 'hyunsuk', t: "geniusuk: he gets that from both of u" },
            { from: 'cherry', t: "cherryblossoms: saving this. this is my new lock screen. this is how i feel every day" },
            { from: 'jaehyuk', t: "jaehyukkie: the left antler is lower than the right. it's bothering me" }
          ], contact: "rip solar kim (she's fine probably)", group: true }
        ] }
      ] },
      { n: "Then, separately, a minute later, on its own:" },
      { phone: [
        { from: 'jungwon', t: "nana looks very dignified." },
        { from: 'jungwon', t: "please don't show maeumi. he's sensitive about antlers." }
      ], contact: 'Won' },
      { n: "Her mom took the antlers off and put them back in the cupboard for next year, and Nana got up, shook himself from the nose backwards so the half a bow spun round on his collar, and went and lay down on her dad's feet, and her dad didn't move them for the rest of the evening." }
    ] },

    // 12/29 late: home from the party
    { id: 'epi-h-nana-hall', date: '12/29', slot: 'late', title: 'the hall', place: 'Hanlim · Home', time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "The porch light was on. Somebody had left it on for her, the way somebody always did, and when she put her key in the lock very quietly so as not to wake anyone she heard the claws on the other side of the door already, skittering, and the soft frantic *wuf* he only did for her." },
      { n: "He was there before the door was open. Sixty pounds of white dog in the gap, his whole back end going, smiling with his mouth open and his eyes shut, and he shoved his face into her coat and breathed in hard, all down the front of it, and then reared back and sneezed, twice, offended. The coat smelled of the party. Bass and cigarette smoke and somebody else's fake-watermelon lip gloss and the sticky kitchen floor. He sneezed a third time, to make the point." },
      { n: "Then he leaned on her. Not sat. Leaned, all of him, against her shins, the way he leaned on people he'd decided needed holding up, and she sat down on the hall floor in her coat because she had no choice, and put her arms round his neck, and stayed there." },
      { n: "A lamp went on in the living room. Her dad was in the armchair in his reading glasses with a fishing magazine open on his knee, upside down." },
      { s: 'dad', f: 'neutral', t: "I was reading." },
      { s: 'solar', f: 'happy', t: "Dad. It's upside down." },
      { s: 'dad', f: 'neutral', t: "It's an article about the bottom of a lake. It makes more sense this way." },
      { n: "Upstairs a door opened, and her mom's voice came down the stairs in the low, flat register of a woman who'd been lying awake listening for a key." },
      { s: 'mom', f: 'neutral', t: "Jaeseok. She's home. Go to bed." },
      { s: 'dad', f: 'happy', t: "I'm going. I was reading." },
      { n: "He went up past her, and on the way he put his hand on top of her head for a second, the way he used to when she was small enough to reach, and didn't say anything, and went on up. Nana didn't move. Nana stayed exactly where he was, across her legs on the hall floor, until her breathing had gone slow, and then he got up and walked to the bottom of the stairs and looked back at her, waiting, the way he waited every night: *come on, then. Bed.*" },
      { ifEpiRoute: 'jungwon', then: [
        { phone: [
          { from: 'solar', t: "inside. nana's sitting on me" },
          { from: 'jungwon', t: "good. both of those are good." },
          { from: 'jungwon', t: "goodnight, sol." }
        ], contact: 'Won' }
      ] },
      { ifEpiRoute: 'jihoon', then: [
        { n: "Through the frosted glass of the front door she could see the shape of Jihoon's car still at the curb, engine running, headlights off. It sat there until her bedroom light went on upstairs. Then she heard it pull away, slowly, lights still off, all the way to the corner." }
      ] },
      { ifEpiRoute: 'council', then: [
        { phone: [
          { from: 'heeseung', t: "heeheeseung: headcount. reply when home." },
          { from: 'sunoo', t: "sunooshine: home!!! i still have one water" },
          { from: 'solar', t: "solarsystem: home. nana is checking me for injuries" },
          { from: 'jungwon', t: "injangwon: tell him thank you." }
        ], contact: 'RETREAT FACTS (do not leave)', group: true }
      ] }
    ] },

    // 1/1 evening: Sunghoon at the gate
    { id: 'epi-h-nana-sunghoon', date: '1/1', slot: 'evening', title: 'the most handsome', place: 'Hanlim · Winter Street', time: 'Evening', scene: [
      { music: 'epi-h-evening' },
      { n: "She'd only gone out to the gate to put the recycling out, and Nana had come because Nana came to everything, and that was how she was standing in the snow in her slippers on New Year's night when Park Sunghoon came down her street in a full hanbok with a down jacket thrown over it, walking home from Yeobo's with his hands in his sleeves like a prince in a drama who'd lost his horse." },
      { n: "He saw Nana and stopped dead." },
      { s: 'sunghoon', f: 'surprised', t: "Oh." },
      { n: "Nana saw the hanbok. The wide sleeves, specifically, which moved when Sunghoon moved, and which Nana clearly considered a kind of bird. He went to the gate and put both front paws on it and smiled at Sunghoon over the top with his whole face, tail going like a windscreen wiper." },
      { s: 'sunghoon', f: 'happy', t: "Sunghoon has seen this dog on the internet. Sunghoon did not know he was this big in person." },
      { s: 'solar', f: 'happy', t: "He's sixty pounds. He thinks your sleeves are birds." },
      { s: 'sunghoon', f: 'neutral', t: "They're silk." },
      { s: 'solar', f: 'happy', t: "He doesn't know that." },
      { n: "Sunghoon considered this. Then, with enormous dignity, he gathered both sleeves in one hand, held them safely out of the way, leaned over the gate, and let Nana sniff the other hand, and Nana sniffed it, thoroughly, every finger, and then licked it once, wetly, up the wrist, and Sunghoon looked at his own hand like it had been knighted." },
      { s: 'sunghoon', f: 'happy', t: "Sunghoon has decided. This is the most handsome dog in Hanlim." },
      { s: 'solar', f: 'surprised', t: "That's a big honour from you." },
      { s: 'sunghoon', f: 'neutral', t: "It's the biggest one. Usually it goes to Sunghoon." },
      { n: "He stayed at the gate longer than he needed to, scratching under Nana's chin through the bars with his sleeves bunched in his other fist, the snow coming down on his shoulders, not saying anything, and she had the strange feeling she was watching somebody practise being gentle with something before trying it on someone it mattered more with." },
      { s: 'sunghoon', f: 'neutral', t: "...Does Cherry like dogs?" },
      { s: 'solar', f: 'happy', t: "Cherry likes this one." },
      { n: "He nodded slowly, like she'd given him a piece of intelligence, and went on down the street with his sleeves held carefully in one hand, and at the corner he turned round and lifted the other one, to Nana, not to her. Nana barked once, happily, at the last of the birds." }
    ] },

    // 1/2 evening: Heeseung at the door
    { id: 'epi-h-nana-heeseung', date: '1/2', slot: 'evening', title: 'version three', place: 'Hanlim · Home', time: 'Evening', scene: [
      { music: 'epi-h-home' },
      { n: "The doorbell went at seven, and it was Heeseung, on her front step, in a scarf, holding a plastic document sleeve against his chest with both hands like it was keeping him warm." },
      { s: 'heeseung', f: 'serious', t: "Version three. Updated for the motion. It's laminated. Don't write on it, I don't have spares. I have two spares." },
      { n: "RETREAT FACTS, version three. A new heading in bold: *IF ASKED ABOUT THE TIN.* A new rule underneath it: *Do not get into it in writing.* She looked up to say something and found that Heeseung wasn't looking at her at all. He was looking past her, down, at sixty pounds of white Samoyed who had come into the hall to see who it was and was now leaning against Heeseung's legs with his whole weight, eyes shut, as if the two of them had known each other for years." },
      { s: 'heeseung', f: 'surprised', t: "Oh. Hello. Hi. I didn't— he's leaning on me." },
      { s: 'solar', f: 'happy', t: "He does that to people he thinks need holding up." },
      { s: 'heeseung', f: 'neutral', t: "I don't need holding up. I'm fine. I've done four drafts since lunch, I'm completely fine." },
      { n: "Nana leaned harder. Heeseung put one hand down on his head, carefully, the way you'd test a stove, and then left it there, and something in his shoulders, which had been up around his ears in a permanent way since about the twentieth of December, came down half an inch." },
      { s: 'heeseung', f: 'serious', t: "Has he had water? His nose is dry. Is his nose meant to be dry? Sunoo's grandmother says a dry nose means—" },
      { s: 'solar', f: 'happy', t: "He's had water, Heeseung." },
      { s: 'heeseung', f: 'neutral', t: "Okay. Okay. Good. That's good." },
      { n: "He didn't leave. He sat down on her front step in the cold, scarf and all, without being asked, and Nana lay down on the step beside him with his chin on Heeseung's shoe, and Heeseung talked to him for twenty minutes about the motion and the signatures and the forum and what Jake had said in the chat, quietly, in the voice he never used in the council room, while Solar stood in the doorway in her socks and didn't interrupt. At the end of it he took a dog biscuit out of his coat pocket. He'd brought one. He'd planned this." },
      { s: 'heeseung', f: 'flustered', t: "Don't tell the others." },
      { s: 'solar', f: 'happy', t: "I'm putting it in the chat." },
      { s: 'heeseung', f: 'serious', t: "We don't discuss things in writing, Solar. That's rule one. It's on the sheet." }
    ] },

    // 1/4 evening: the shovel
    { id: 'epi-h-nana-shovel', date: '1/4', slot: 'evening', title: 'snow day', place: 'Hanlim · Home', time: 'Evening', scene: [
      { music: 'epi-h-snow' },
      { n: "By the time she got in from Yeobo's the snow was up past the second step and still coming, big and sideways, and her dad was out in the front yard in his fishing jacket and a wool hat with a shovel, clearing a path to the gate that filled back in behind him as fast as he cleared it, which didn't seem to bother him at all. Nana was helping. Nana's idea of helping was to bite every shovelful out of the air as it went past." },
      { s: 'dad', f: 'happy', t: "He's very efficient. He's eaten more of it than I've moved." },
      { n: "Her mom was at the front window in her cardigan with a cup of tea, watching the two of them the way she watched dramas, with her mouth set and her eyes soft. She tapped on the glass. Her dad looked up." },
      { s: 'mom', f: 'serious', t: "Jaeseok. He's eating it. He'll be sick on the rug." },
      { s: 'dad', f: 'neutral', t: "He's a Samoyed, Soyeon. This is what they're for. He's been waiting all year." },
      { n: "She took the spare shovel from the porch and did the other half of the path, badly, and Nana went back and forth between them in the waist-deep snow at a sort of joyful plunging gallop, vanishing completely in the drifts and coming up again further along with a white beard and a white moustache, smiling, his black eyes and black nose the only things you could see of him against the yard." },
      { choose: [
        { t: "(Throw a snowball for him.)", stat: { kindness: 1 }, then: [
          { n: "She packed one and threw it, and Nana went after it like it owed him money, and caught it, and it exploded in his mouth, and he stood there in the drift looking at the empty place where a snowball had been with total, wounded astonishment. She threw another one. He caught it. It exploded. He looked at her. She threw another one. Her dad stopped shovelling to laugh, leaning on the handle, and at the window her mom put her tea down and laughed too, behind her hand, so nobody would see, and everybody saw." },
          { n: "She threw eleven. He never once worked it out. He never once stopped wanting the next one." }
        ] },
        { t: "(Take a picture for Junkyu.)", then: [
          { n: "She crouched in the drift and waited until he came up out of it, a pair of black eyes and a black nose in a wall of white, and took it, and sent it before she could think." },
          { phone: [
            { from: 'solar', t: "[Photo: Nana up to his eyes in a snowdrift, smiling]", img: 'tp-hoax-snowdrift' },
            { from: 'junkyu', t: "SOLARRRRR" },
            { from: 'junkyu', t: "i'm crying. my mom asked why i'm crying. i showed her. she's crying" },
            { from: 'junkyu', t: "tell him he's the best boy in the whole world!!!!" }
          ], contact: 'kyu' },
          { n: "She told him. Nana took it as his due and went back to eating the path." }
        ] }
      ] },
      { n: "They went in when they couldn't feel their faces. Her dad towelled Nana dry in the hall the way he did everything, from the head down, carefully, talking the whole time, and Nana stood there and let him, steaming slightly, with snow melting off his feet onto her mom's good floor, and her mom brought a second towel without being asked and didn't say a word about the rug." }
    ] },

    // 1/9 evening: Jaehyuk's notes
    { id: 'epi-h-nana-jaehyuk', date: '1/9', slot: 'evening', title: 'last paper', place: 'Hanlim · Home', time: 'Evening', scene: [
      { music: 'epi-h-home' },
      { n: "Jaehyuk didn't text first. Jaehyuk never texted first; he simply arrived, at the exact time he'd decided was correct, which tonight was six-fifty, with a clear plastic folder of notes for the last make-up paper tucked under his arm, every page tabbed in three colours." },
      { s: 'jaehyuk', f: 'neutral', t: "The last paper's mostly chapter seven. These are chapter seven. The pink tabs are the parts you'll forget. The yellow ones are the parts you'll think you know." },
      { s: 'solar', f: 'surprised', t: "What are the green ones?" },
      { s: 'jaehyuk', f: 'neutral', t: "The parts you actually know. There are three." },
      { n: "He'd meant to hand them over on the step and go. She could see it in the way he was standing, half turned toward the street already. But Nana had heard his voice from the living room and come out at a trot and sat down, deliberately, squarely, on both of Jaehyuk's feet, all sixty pounds, facing out, with the settled air of a dog who had decided where somebody was staying." },
      { n: "Jaehyuk looked down at him. Nana looked up at Jaehyuk, upside down, smiling." },
      { s: 'jaehyuk', f: 'neutral', t: "...He's on my feet." },
      { s: 'solar', f: 'happy', t: "He always does that to you. Every time. Since we were twelve." },
      { s: 'jaehyuk', f: 'surprised', t: "He does?" },
      { n: "He sounded genuinely surprised. And she realised he'd never noticed, or never let himself notice, that out of all of them, all seven, the loud ones and the funny ones and the one Nana called father, it was always Jaehyuk's feet Nana sat on. The quiet one at the end of the table. The one Solar herself forgot was there sometimes, and Nana never had, not once." },
      { n: "Jaehyuk crouched down slowly, so as not to dislodge anything, and scratched behind both of Nana's ears at once with the very serious concentration he brought to everything, and Nana leaned his head into it and shut his eyes, and over the top of the dog's head, past the porch light, she watched the snow coming down into the street and, about a metre above the ground, losing interest, and drifting back up." },
      { n: "Jaehyuk saw it too. She saw him see it. He didn't say anything. He just kept scratching, a little more carefully, like a person holding on to the one ordinary thing in reach." },
      { s: 'jaehyuk', f: 'neutral', t: "Chapter seven. The green tabs. You'll be fine." },
      { s: 'solar', f: 'sad', t: "Will I?" },
      { s: 'jaehyuk', f: 'neutral', t: "You'll be sixty, probably. Sixty's a pass." },
      { n: "Nana didn't get off his feet for another ten minutes, and Jaehyuk didn't ask him to." }
    ] }    ,

    // 1/6 late: Dad calls from the road (Kat's idea, Nov 6: "a phone call from Solar's dad")
    { id: 'epi-h-dad-call', date: '1/6', slot: 'late', title: 'daejeon', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-home' },
      { n: "Her phone rang at twenty past eleven, an actual ring, not a text, which nobody under forty did, and the screen said *Dad*, and for one second her heart did the thing it did now whenever a phone rang late. Then she answered it and heard a television in the background, a very small one, and a kettle clicking off, and her father breathing out through his nose the way he did when he sat down." },
      { s: 'dad', f: 'neutral', t: "It's me. I'm in Daejeon. The hotel has a kettle the size of a cup. I've made four cups of tea in it so far. That's how I know it's working." },
      { s: 'solar', f: 'happy', t: "Dad, it's eleven." },
      { s: 'dad', f: 'neutral', t: "I know. Your mother said you'd be up. She said call her, she's up, she's always up now." },
      { n: "There was a voice behind him, a man's, muffled, through a door, and her dad said *ne, ne, thank you* away from the phone, and came back." },
      { s: 'dad', f: 'happy', t: "The front desk. They've been calling me Kim Jaeseok-nim all week like I'm a minister. I've started standing up straighter. It's terrible. I'll come home with good posture and your mother won't recognise me." },
      { s: 'solar', f: 'happy', t: "Mom would recognise you anywhere." },
      { s: 'dad', f: 'neutral', t: "Your mother told me her name, the first time, like she was reading me a warning label. *Han Soyeon.* Like I should write it down. I did write it down. I've still got it." },
      { n: "She'd never heard that. She lay on her back on the bed with the phone against her ear and looked at the ceiling and tried to picture it, her mother at twenty-something, saying her own name like a warning, and her father writing it down." },
      { s: 'dad', f: 'neutral', t: "How's the dog." },
      { s: 'solar', f: 'sad', t: "He's sleeping against my door. Since last night. Facing in." },
      { n: "A pause on the line. The tiny television said something about a cold front." },
      { s: 'dad', f: 'neutral', t: "He did that when you were eleven and had the flu. A week. Your mother tried to move him with a broom. He didn't move." },
      { s: 'dad', f: 'neutral', t: "He knows things, that dog. Let him." },
      { ifFlag: 'epi-h-jw-reel', then: [
        { s: 'dad', f: 'happy', t: "Your boy asked me what reel I use. At Christmas. Nobody's asked me that in twenty years. I told him a spinning reel, a cheap one, and he nodded like I'd told him the date of a war." },
        { s: 'solar', f: 'happy', t: "He read about it. For an hour. Before he came." },
        { s: 'dad', f: 'neutral', t: "I know. I could tell. Don't tell him I could tell." }
      ] },
      { choose: [
        { t: "I'm okay, Dad. Go to sleep.", then: [
          { s: 'dad', f: 'neutral', t: "You sound like you did with the flu. A bit far off." },
          { s: 'solar', f: 'sad', t: "I'm just tired." },
          { s: 'dad', f: 'neutral', t: "Okay. Then sleep. I'll be home Sunday morning. Tell the dog I'm coming. He likes to know." }
        ] },
        { t: "Dad. Can you stay on for a bit?", stat: { kindness: 1 }, then: [
          { s: 'dad', f: 'surprised', t: "...Yes. Of course. What do you want me to talk about?" },
          { s: 'solar', f: 'happy', t: "Anything. Fishing." },
          { n: "So he talked about fishing. The reservoir at five in the morning, the mist on it, the way the water went from black to grey to silver while you waited, the man with the green hat who'd been there every Saturday for nine years and had never once said a word to him and once handed him a hot can of coffee without looking. He talked for half an hour, slowly, in his tired hotel voice, with the little kettle clicking on again in the background, and he didn't ask her a single thing about a temple, or a retreat, or anything at all, and she lay in the dark with her eyes shut and listened to him." },
          { n: "At the door, Nana thumped his tail on the floor, twice, at the sound of her father's voice coming out of the phone, and didn't get up, and didn't stop watching her." }
        ] }
      ] },
      { n: "When he'd gone she put the phone on the pillow beside her, still warm, and lay there with her hand on it for a while, the way you leave your hand on a radiator." }
    ] }

  );
})();
