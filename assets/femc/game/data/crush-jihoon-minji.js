/* Jihoon's and Minji's crush tracks (2026-10-23, the multi-romance batch): the moments, their world lines and their texts.
   The tracks are in crush.js (two steps each: 'crush', then 'puppy'); the format is core.js "Crushes". Lighter tracks: five
   moments each, Kat's "side" romances that sort of happen in the novels. Both are standard tracks: the opt-ins are `free`
   (offered only while she isn't on anyone's romance route), another link's romance settles them into 'faded', and each
   one's rank 8 is the romance turn (Jihoon 11/21 "the quiet part", Minji 11/26 "the thing you look at").
   Both live at the Kirijo guesthouse by the station: every dorm scene is a visit, and neither is ever at Gekkoukan.
   Jihoon (HOAX canon to Ch 99; his habits are named and owned, never shown):
     cr-jh-optin     evening  9/21-11/14  opt-in (free), after a4-ice-cream. The dorm kitchen: the ramen he knows by heart.
     cr-jh-purikura  after    9/28-11/8   BUILD. The mall photo booth: the fifth frame.
     cr-jh-sixthirty early    10/12-11/21 UP (a puppy beat inside). The river at six-thirty: he knew her route before she did.
     cr-jh-karaoke   evening  11/8-12/20  ASKED, after a4-crew. The Hate Club at Mandragora: dating / building / friend.
     cr-jh-fountain  evening  11/22-12/31 dating or faded (after his rank 8); ifTaken: mean about it, and it shows.
   Minji (Runners canon to Ch 66; asks twenty times, never posts a frame without it):
     cr-mj-optin     after    9/28-11/20  opt-in (free), after a4-lamppost. The dorm steps: Solar holds the light, on her.
     cr-mj-duo       after    10/4-11/14  BUILD. Game Panic's PC corner, a duo match; Jihoon coaching through the beads.
     cr-mj-lensdown  after    10/18-11/24 UP (a puppy beat inside), clear or cloudy. Seaside Park: the camera lowered.
     cr-mj-nest      evening  11/3-12/12  ASKED. The guesthouse window seat over the tracks: dating / building / friend.
     cr-mj-lamp      evening  11/27-1/10  dating or faded (after her rank 8); ifTaken: she means it, and it costs her.
   World lines: home, evening.sub, late.plain, study (searchers aren't at school). Texts: threads 'jihoon', 'minji' and
   'hateclub', gated on the arrival flags. Nothing here touches the links' rank scenes or the 12/16 call. */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases, add = C.add;
  const J = ph => ({ jihoon: ph }), M = ph => ({ minji: ph });
  const JW = n => ({ jihoon: n }), MW = n => ({ minji: n });
  // dating / still building / a friendship (faded, or said no).
  const byJ = (dating, building, friend) => ({ ifCrush: J('dating'), then: dating, else: [{ ifCrush: J(P.FRIEND), then: friend, else: building }] });
  const byM = (dating, building, friend) => ({ ifCrush: M('dating'), then: dating, else: [{ ifCrush: M(P.FRIEND), then: friend, else: building }] });

  C.moments.push(
    /* ══ Jihoon ══ */

    /* ── The opt-in: the dorm kitchen, a dinner nobody invited him to. ── */
    { id: 'cr-jh-optin', who: 'jihoon', optIn: 'jihoon', free: true, events: ['a4-ice-cream'], slot: 'evening', after: '9/21', until: '11/14',
      place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
        { n: "Jihoon had come over from the guesthouse for dinner again, which nobody had invited him to and nobody had got round to un-inviting him from, and by eight he had taken over the dorm kitchen the way a small loud country takes over a smaller quieter one, with Junpei as a collaborator and Koromaru as a hostage." },
        { n: "He was making ramen. Not for everybody. For her. He'd announced it to the lounge at a volume that made it everybody's business, and then shut the kitchen door on them, and now he stood at the stove in Mitsuru's apron, cracking eggs into the pot with the grim concentration of a surgeon who'd been told the patient was famous." },
        { s: 'jihoon', f: 'serious', t: "Two eggs. One broken, one not. Spring onion, only the green part, because you're a psychopath. Extra water, because you like it soupy, and then you complain that it's soupy." },
        { s: 'junpei', f: 'surprised', t: "Dude. How do you know how she likes her ramen? She doesn't know how she likes her ramen." },
        { s: 'jihoon', f: 'neutral', t: "Two in the morning, every exam week since middle school, her kitchen, her mom's good pot. I could make this asleep. I have made this asleep. Nobody asked you, Junpei." },
        { n: "He held the chopsticks out behind him without turning round, one noodle hanging off them, the way you'd hold a spoon out to a kid in the back seat. She leaned in and took it. It was exactly right. It tasted like a kitchen she had never stood in, the fridge humming, the clock on the microwave saying 2:14, somebody's big feet in socks on cold tiles and a textbook nobody was reading open on the counter." },
        { n: "When she looked up he'd turned round. He was watching her face with nothing on his own at all, for one second, open as a door somebody had left on the latch, the way you'd watch a person open a present you'd wrapped yourself and been worried about for a week." },
        { n: "Then it was gone, and the bit came down over it like a shutter." },
        { s: 'jihoon', f: 'neutral', t: "What. There's broth on your chin. You eat like a raccoon. Ten out of ten, by the way, you're welcome, you can say it, I'll wait." },
        { choose: [
          { t: "(Hold his look. Don't let him get away with the bit.)", crush: J('in'), then: [
            { n: "She didn't look away. He did the bit anyway, louder, raccoons and her table manners and his own genius, and halfway through it his ears went red, and he turned back to the stove and said he had to watch the eggs, and the eggs were done, and had been for a while." },
            { s: 'junpei', f: 'surprised', t: "...Oh. Oh no." },
            { n: "Junpei said it very quietly, to Koromaru, who agreed." }
          ] },
          { t: "You've done this a thousand times.", crush: J('in'), then: [
            { s: 'jihoon', f: 'surprised', t: "..." },
            { s: 'jihoon', f: 'neutral', t: "A thousand and twelve. Not that anyone's counting. I'm not. Junpei, stop writing that down." },
            { n: "Junpei wasn't writing anything down. He was looking from one of them to the other with the face of a man who'd walked into the second half of a movie and could already tell he'd missed the important part." }
          ] },
          { t: "It needs salt.", crush: J('out'), then: [
            { s: 'jihoon', f: 'serious', t: "It does NOT need salt. Get out of my kitchen." },
            { s: 'solar', f: 'happy', t: "It's not your kitchen." },
            { s: 'jihoon', f: 'happy', t: "Every kitchen you're in is my kitchen. That's a law. That's international law. Junpei, tell her." },
            { n: "It didn't need salt. The argument went on through two bowls and out into the lounge, comfortable as an old sweater, an argument the two of them had clearly had in another kitchen a hundred times, and she won it, and he said she didn't, and that was the whole evening, and it was a good one." }
          ] }
        ] },
        { ifCrush: J(P.BUILD), then: [
          { n: "She ate the whole bowl standing at the counter while he washed the pot and explained his own greatness to Koromaru. It was only ramen. She told herself so twice. The second time it came out of her sounding like a question." }
        ], else: [
          { n: "It was, she was fairly sure, the best ramen in two worlds, and she was never, under any circumstances, going to tell him." }
        ] }
      ] },

    /* ── Noticed: the photo booth by the escalators. ── */
    { id: 'cr-jh-purikura', who: 'jihoon', crush: J(P.BUILD), slot: 'after', after: '9/28', until: '11/8',
      place: 'Paulownia Mall · Photo Booth', time: 'After School', bg: 'inside-mall', scene: [
        { n: "The photo booth by the escalators was pink inside and smelled of hot plastic and somebody else's perfume, and it had a robot voice that counted down in a register only dogs and middle-school girls could love, and Jihoon had dragged her into it by the strap of her bag, announcing to the whole floor that it was for the archives." },
        { s: 'jihoon', f: 'happy', t: "Pose one. Look like you respect me. I know it's hard for you. Dig deep." },
        { n: "Three, two, one, flash. He did a peace sign under his chin like a magazine cover. She put two fingers up behind his head like horns, without deciding to, the way you'd sign your own name. Flash. He got her in a headlock. Flash. She bit his sleeve. Flash. By the fourth one her face hurt and he was wheezing and the robot had started to sound concerned." },
        { n: "Then the decorating screen. He took the stylus like a scepter and wrote HOSTAGE across her forehead in pink, and UGLY with an arrow, and, on himself, in gold glitter, THE ALMIGHTY HOON, with a crown, and then a second crown, in case the first one wasn't clear." },
        { s: 'jihoon', f: 'neutral', t: "You've got a whole string of photos at home. From me. You hung them up crooked and never fixed it. I fix it every time I'm over and you never notice. That's our relationship. I fix things, you don't notice." },
        { n: "The strip came out of the slot warm. Five frames. She looked at them under the mall lights while he complained about the robot's attitude." },
        { n: "In the last one, the one where she'd been laughing at something with her eyes screwed shut, he wasn't looking at the camera. He was looking at her. Not doing a bit, not pulling a face, just looking, the way you'd look at the house you grew up in from across the street after somebody else had bought it." },
        { choose: [
          { t: "(Tear the strip in half. Keep the half with the fifth frame.)", crush: JW(1), then: [
            { n: "She tore it along the little perforation the way you're supposed to and kept the half with the last frame on it, without a word, and put it in her blazer pocket. He saw which half. For once in his life he didn't say anything about it." },
            { s: 'jihoon', f: 'neutral', t: "...You took the good half. Typical. Thief. I'm putting it in the group chat that you're a thief." },
            { n: "He didn't. She checked." }
          ] },
          { t: "Why aren't you looking at the camera in this one?", crush: JW(1), then: [
            { s: 'jihoon', f: 'surprised', t: "..." },
            { s: 'jihoon', f: 'neutral', t: "The flash. I've got very sensitive eyes. They're extremely valuable. They're insured." },
            { s: 'jihoon', f: 'serious', t: "Don't look at it like that. Give it here. I'll draw a mustache on me. It'll be a better picture." },
            { n: "He held his hand out for it, and then, before she'd moved, took it back, and put it in his pocket, as if his hand had said something without asking him first." }
          ] },
          { t: "(Write SKANK on his half in glitter.)", then: [
            { s: 'jihoon', f: 'happy-2', t: "...Okay, see, that's the most romantic thing anyone's ever done for me. You remembered my love language. Unbelievable. Cherry's going to be so jealous." },
            { n: "He kept that half. A week later she saw it tucked into the back of his phone case, SKANK side out, and he caught her seeing it and said it was there for structural reasons." }
          ] }
        ] },
        { n: "On the escalator down he was already complaining about the booth's lighting to the whole mall, at length, with his hands. She had her fingers on the strip in her pocket the entire way to the monorail, and couldn't have said why, and didn't try." }
      ] },

    /* ── Crush (a puppy beat inside): six-thirty at the river. He knew her route before she did. ── */
    { id: 'cr-jh-sixthirty', who: 'jihoon', crush: J(P.UP), slot: 'early', after: '10/12', until: '11/21',
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "Sometime in October her body had started getting up at six-fifteen for no reason she could name, and going out. Koromaru had worked out the schedule before she had. By the third morning he was waiting by the door with the leash in his mouth and the patient face of a dog who had always known." },
        { n: "The river path at that hour was blue and cold and empty, the water lying flat, the birds in the trees along the bank making the racket they made before anyone was up to hear it. She liked the birds. She didn't know when she'd decided that." },
        { n: "And on the grass by the second bridge, on a purple mat, in a hoodie, with an expression of such total serenity that it could only be fake, Park Jihoon was doing pilates." },
        { s: 'jihoon', f: 'neutral', t: "Oh. It's you. What a coincidence. I didn't see you there. I come here every morning. For the air. The air here is very rich. It's full of nutrients." },
        { s: 'solar', f: 'neutral', t: "You live on the other side of the station." },
        { s: 'jihoon', f: 'serious', t: "And?" },
        { n: "*You walk your dog at six-thirty in the morning because you like the birds.* He'd said it on the dorm steps like a piece of trivia. She did the math. Quarter to six, then, for him. Twenty minutes in the dark with a rolled-up mat under his arm, past the station, down the hill, onto frozen grass, to lie on a path he'd known she'd be on before she'd known it herself." },
        { n: "Akihiko came past at a dead run going the other way, finishing whatever he'd started at five, and lifted a hand, and looked at Jihoon on the mat, and at her, and at Jihoon again, and said *morning* over his shoulder in the voice of a man who had seen something and was choosing to keep running." },
        { s: 'jihoon', f: 'serious', t: "He thinks he's so fast. Nobody's impressed, Sanada. Run somewhere you're needed." },
        { s: 'jihoon', f: 'neutral', t: "Hold my ankles. I'm doing the roll-up. It's very advanced. Don't let go whatever happens, and if I die, tell Nana he was the light of my life." },
        { choose: [
          { t: "(Hold his ankles.)", crush: JW(1), then: [
            { n: "She knelt on the wet grass and held his ankles, and he rolled up, slow and smooth and ridiculous, and at the top of it his face came level with hers, very close, close enough to see his breath, and stopped there one second longer than pilates required." },
            { s: 'jihoon', f: 'neutral', t: "...You're breathing on me. That's a violation. That's assault with breath." },
            { n: "He went back down much faster than the exercise called for." }
          ] },
          { t: "You got up at quarter to six for this.", crush: JW(1), then: [
            { s: 'jihoon', f: 'surprised', t: "..." },
            { s: 'jihoon', f: 'serious', t: "I get up at quarter to six every day. I'm a morning person. I'm extremely disciplined. Ask anyone." },
            { s: 'jihoon', f: 'neutral', t: "...Don't ask anyone." }
          ] },
          { t: "(Let Koromaru lie down on his stomach.)", then: [
            { n: "Koromaru, released, walked onto the mat and lay down across Jihoon's stomach with a long satisfied sigh, like a man getting into a bath." },
            { s: 'jihoon', f: 'sad', t: "My core. My temple. Desecrated. By a professional." },
            { n: "He didn't move him. He lay there with a dog on his stomach and his hand in the dog's fur and looked up at the sky going pink, and for a while neither of them said anything, which with Jihoon was an event." }
          ] }
        ] },
        { ifCrush: J(P.PUP), then: [
          { n: "On the walk back he carried the mat and the leash and complained the whole way, the cold, the birds, her pace, the inferiority of this river to rivers in general, and halfway up the hill, without looking, he pulled his own sleeve down over her bare hand where it was holding the mat strap, the way you'd fix someone's collar, and left it there, and kept talking about Akihiko." },
          { n: "She didn't take her hand back. He didn't stop talking. Neither of them mentioned the sleeve, all the way to the gate, and at the gate he said *same time tomorrow* to a tree." }
        ], else: [
          { n: "On the walk back he carried the mat and complained the whole way, and at the dorm gate he said *same time tomorrow, don't be late*, in the voice of somebody who had never once in fourteen years expected her to be on time, and walked off toward the station, and turned round once, and pretended he'd been looking at a bird." }
        ] }
      ] },

    /* ── Shared (everyone who was asked): the Hate Club at karaoke. ── */
    { id: 'cr-jh-karaoke', who: 'jihoon', crush: J(P.ASKED), slot: 'evening', after: '11/8', until: '12/20', events: ['a4-crew'],
      place: 'Paulownia Mall · Karaoke', time: 'Evening', bg: 'paulownia-karaoke', scene: [
        { n: "Mandragora's biggest booth was meant for eight, and the Hate Club had got into it with eleven bags, a tambourine Junkyu had found under the seat and adopted, and the specific volume of a group of people who had crossed into another world after their friend and decided the correct response was karaoke." },
        { n: "Asahi sat in the corner with his hood up and the songbook open on his knees like a hymnal, choosing the saddest song in it for everyone but himself. Hyunsuk sang whatever Asahi chose, badly, joyfully, with his whole body. Jaehyuk read the lyrics on the screen with real attention, as if there might be a quiz at the end." },
        { s: 'asahi', f: 'neutral', t: "Jihoon's up. God help us. He's picked a ballad. He always picks a ballad. Nobody asked for a ballad. Nobody has ever asked." },
        { s: 'jihoon', f: 'serious', t: "Silence, peasant. Art is happening." },
        byJ([
          { n: "He stood on the seat for it. He sang the whole thing straight at her, one hand on his heart and one hand pointing, every *you* aimed like a dart, the club booing and Junkyu shaking the tambourine in a rhythm entirely his own." },
          { n: "Then the bridge came, the quiet part, and he forgot. He just forgot to make it a bit. His voice went down, and he sang it to her like there was nobody else in the booth, and there wasn't, for about eight bars; the tambourine stopped, and Hyunsuk looked at the ceiling, and Asahi looked at his shoes." },
          { s: 'jihoon', f: 'happy', t: "THANK you. I'll be here all week. Tip your waitress." },
          { n: "He climbed down and sat next to her, and under the table, behind the plate of fries, he found her hand and held it, and went on heckling Hyunsuk's song as if he weren't doing anything at all with his left hand." },
          { s: 'asahi', f: 'neutral', t: "Go talk to a girl, Jihoon." },
          { s: 'asahi', f: 'surprised', t: "...Oh. He did. Never mind. I'm going to be sick." }
        ], [
          { n: "He sang it at her as a bit. One hand on his heart, the other pointing, every *you* aimed like a dart, the club booing, Junkyu on the tambourine in a rhythm entirely his own. It was horrible. It was the best thing she'd seen all week." },
          { n: "On the very last line he forgot. Just for the line. His voice dropped out from under the joke and the line came out quiet and plain and looking at her, and then the music stopped, and it was a joke again, and he was bowing." },
          { n: "Across the booth, Hyunsuk was looking at her. Not at Jihoon. At her. Steady, careful, with a face like he was holding something for somebody and wasn't sure how much longer he could." },
          { s: 'jihoon', f: 'happy', t: "Ten out of ten. Applaud. Asahi, applaud, I can see your hands." },
          { s: 'asahi', f: 'neutral', t: "My hands are busy. They're holding my will to live." }
        ], [
          { n: "He sang it to Junkyu. On one knee, on the sticky booth carpet, with both of Junkyu's hands in his, every line of a ballad about a love that would outlast the stars delivered straight into Junkyu's round, delighted face, and Junkyu cried, actually cried, and Asahi filmed the entire thing for blackmail." },
          { s: 'junkyu', f: 'happy', t: "That was BEAUTIFUL. Sol, did you see? He sang it to me! Nobody's ever sung it to me!" },
          { ifTaken: 'jihoon', then: [
            { s: 'jihoon', f: 'serious', t: "And this next one goes out to whoever Sol's dating. You know who you are. I hope you step on a Lego. I hope you step on it barefoot, every day, for a year." },
            { s: 'hyunsuk', f: 'neutral', t: "Bro." },
            { s: 'jihoon', f: 'neutral', t: "...I hope you're very happy together. In between the Legos." }
          ] }
        ]),
        { choose: [
          { t: "(Take the next song. Sing it at him.)", crush: JW(1), then: [
            { s: 'jihoon', f: 'happy-2', t: "FINALLY. A worthy opponent. Everyone sit down. This is a duel." },
            { n: "She sang it at him, the whole thing, badly, pointing, and he heckled every line, and he knew every word, and so did she, and neither of them knew how she did, and the booth sang the last chorus together, eleven bags and one tambourine and six people a world from home." }
          ] },
          { t: "(Make Asahi sing.)", then: [
            { s: 'asahi', f: 'serious', t: "No." },
            { s: 'junkyu', f: 'happy', t: "ASAHI. ASAHI. ASAHI." },
            { n: "He sang. One verse. In a monotone so flat it came all the way round the other side and was beautiful, and the booth went quiet, and when it was over he said *nobody heard that* and put his hood back up, and Jihoon said he'd heard it and was going to tell everyone in two worlds, and Asahi threw the songbook at him." }
          ] }
        ] }
      ] },

    /* ── After his rank 8 (late November on): dating, a friendship, or she's with someone else. ── */
    { id: 'cr-jh-fountain', who: 'jihoon', crush: J(['dating', 'faded']), slot: 'evening', after: '11/22', until: '12/31',
      place: 'Paulownia Mall · Fountain', time: 'Evening', bg: 'paulownia-mall-night', scene: [
        { n: "The mall had put its winter lights up early, the way malls did, little white bulbs wound round the rim of the fountain and up the pillars, and Jihoon was sitting on the rim under them eating soft-serve in a coat, because seasons, he said, were a social construct, and because the soft-serve place by the escalator gave him extra now, out of either pity or love." },
        { ifCrush: J('dating'), then: [
          { n: "He saw her coming and held the cone out without a word so she could bite the top off, which was a thing she did, apparently, which was a thing he'd stopped complaining about sometime around the age of eleven." },
          { s: 'jihoon', f: 'happy', t: "People are looking. At us. Because you're with me. Let them look. I'm extremely good-looking. It's a public service." },
          { n: "He took her hand, then, and put it on his knee, and held it there under his, like a man holding down a piece of paper in the wind, and went on talking about the soft-serve with total confidence, and didn't look at her for almost a full minute, and his ears were red, and it wasn't the cold." },
          { s: 'jihoon', f: 'neutral', t: "...I keep thinking I'll wake up and it's the curb again. The gym. One week, and then I mess it up. I'm very good at messing it up. It's honestly one of my best skills." },
          { choose: [
            { t: "(Kiss his cheek. In public. Under the lights.)", then: [
              { s: 'jihoon', f: 'surprised', t: "..." },
              { s: 'jihoon', f: 'happy-2', t: "Okay. Okay. I'm going to need to sit down. I'm sitting down. I was already sitting down. I'm going to need to sit down more." }
            ] },
            { t: "It's not the curb. It's a fountain.", then: [
              { s: 'jihoon', f: 'happy', t: "It is a very good fountain. I'm going to come here every day and stare at it like a weirdo. The security guard already thinks I'm a weirdo. He's right. He's very perceptive." }
            ] }
          ] }
        ], else: [
          { ifTaken: 'jihoon', then: [
            { n: "He saw her coming and held up the cone in greeting, like a torch, like a king saluting a ship that was sailing off with somebody else on it." },
            { s: 'jihoon', f: 'neutral', t: "So. I heard. Everyone heard. Junkyu told the guesthouse desk lady. She doesn't speak Korean. She got it anyway. She patted my hand." },
            { ifRomance: 'akihiko', then: [
              { s: 'jihoon', f: 'serious', t: "Sanada. You picked a man who is sixty percent protein shake. Okay. I can respect that. I do pilates. We're basically colleagues. I'm going to have to walk into your dorm and see his face every day now. I'm going to plank at him. In his own lounge." }
            ], else: [{ ifRomance: 'jungwon', then: [
              { s: 'jihoon', f: 'serious', t: "Yang. Of course. Of COURSE it's Yang. The man irons his socks, Sol. I've seen it. Through his door. He doesn't close his door. He has nothing to hide, it's disgusting." },
              { ifEvent: 'a5-call-hoax', then: [
                { s: 'jihoon', f: 'neutral', t: "In two universes. You've picked him in two separate universes. That's not a choice anymore. That's a diagnosis." }
              ], else: [{ ifRank: { jihoon: 6 }, then: [
                { s: 'jihoon', f: 'neutral', t: "In two universes. You've picked him in two separate universes. That's not a choice anymore. That's a diagnosis." }
              ] }] }
            ], else: [{ ifRomance: 'haechan', then: [
              { s: 'jihoon', f: 'serious', t: "The guy from your dorm. The one with the headphones who stares at you like you're a song. He doesn't talk. You'll have to do all the talking. You'll love that. That's annoying. That's actually a good match. I hate that it's a good match." }
            ], else: [{ ifRomance: 'minji', then: [
              { s: 'jihoon', f: 'serious', t: "The camera girl. She asks permission for everything. She probably asked permission to like you. In writing. Disgusting. Respectful. I hate how respectful it is." }
            ], else: [
              { s: 'jihoon', f: 'serious', t: "Whoever it is, I've drafted a list of their flaws. It's laminated. It's double-sided. I'm working on a binder." }
            ] }] }] }] },
            { n: "He laughed, the big one, and licked the side of the cone where it was running, and for a second, between one bit and the next, his face forgot to do anything at all, and she saw it, plain as the lights on the water. Then it remembered." },
            { s: 'jihoon', f: 'sad', t: "I'm fine. I'm great. I'm number one. Number one's a friend thing. It was always a friend thing. I've checked. I looked it up." },
            { choose: [
              { t: "You're still number one.", then: [
                { s: 'jihoon', f: 'neutral', t: "I know. I know I am. Say it again anyway." },
                { s: 'jihoon', f: 'sad', t: "...Okay. Okay, that's enough, that's too much, now I'm going to cry in a mall. In front of the security guard. He'll pat my hand too. Everyone's patting my hand." }
              ] },
              { t: "(Steal his ice cream.)", then: [
                { s: 'jihoon', f: 'happy', t: "THIEF. Okay. Okay, good. That's better. That's normal. That's us. Do it again so I know we're normal." },
                { n: "She did it again. He let her. He watched her eat the top off his cone with the face of a man watching the last ferry leave, and then he said *you eat like a raccoon* in exactly the voice he'd always used, and it was nearly the same, and nearly was a lot." }
              ] }
            ] }
          ], else: [
            { n: "He saw her coming and moved his coat off the rim so she could sit, and held the cone out so she could bite the top off, which was a thing she did, which was a thing he'd stopped complaining about sometime around the age of eleven." },
            { s: 'jihoon', f: 'neutral', t: "Number one. Still. I checked with the committee. The committee is me. It was a unanimous vote." },
            { ifRank: { jihoon: 8 }, then: [
              { s: 'jihoon', f: 'neutral', t: "I said it loud, and you heard it. Up on that roof. That's more than I had before, you know. Fourteen years of nobody hearing it. Now somebody's heard it. That's progress. That's personal growth. I should get a certificate." }
            ], else: [
              { s: 'jihoon', f: 'neutral', t: "Number one is a lifetime position. Like a judge. Or a king. You can't vote me out. I checked the bylaws. I wrote the bylaws. That's personal growth. I should get a certificate." }
            ] },
            { choose: [
              { t: "I'll make you a certificate.", then: [
                { s: 'jihoon', f: 'happy', t: "Gold border. Calligraphy. *For Services to Solar Kim, Who Doesn't Deserve Him.* I'll frame it in the guesthouse. Asahi will hate it. That's the best part." }
              ] },
              { t: "(Bite the top off his ice cream.)", then: [
                { s: 'jihoon', f: 'happy-2', t: "Every time. Every single time, for fourteen years. You know they sell their own cones, right? You know you can have your own?" },
                { s: 'jihoon', f: 'neutral', t: "...Don't. Don't get your own. I'd hate that." }
              ] }
            ] }
          ] }
        ] },
        { n: "They sat on the rim until the lights went to their late setting, softer, and the fountain turned itself down, and the cone was gone, and he walked her to the monorail with his hands in his coat pockets, saying something rude about every shop window they passed, all the way to the gate." }
      ] },

    /* ══ Minji ══ */

    /* ── The opt-in: the dorm's front steps, the sunshade, the light. ── */
    { id: 'cr-mj-optin', who: 'minji', optIn: 'minji', free: true, events: ['a4-lamppost'], slot: 'after', after: '9/28', until: '11/20',
      place: 'Iwatodai Dorm · Front', time: 'After School', bg: 'iwotodaidorm-outside', scene: [
        { n: "Minji had come over from the guesthouse with a car windshield sunshade under her arm, the silver folding kind, and announced to the dorm in general that she was making a short film about Koromaru, that it was a serious documentary, and that Junpei could not be in it." },
        { s: 'minji', f: 'serious', t: "He's the only one in this building who's never once looked at the lens. He's a natural. He's the most authentic person I've met here. No offense." },
        { n: "Koromaru sat on the front steps in the late gold light with his ears up, being authentic. Minji lay on her stomach on the warm pavement with the camera an inch off the ground. She had asked him first. She'd actually asked him, out loud, and he'd wagged, and she'd said *thank you* and meant it." },
        { s: 'minji', f: 'neutral', t: "Sol, can you hold that? The sunshade. Bounce it at him. Not at me, at his face. Just a little fill. He's got a very good face. It deserves fill." },
        { n: "She held it. It was harder than it looked. The light went where it liked. She tipped it, and missed Koromaru entirely, and the bounce landed full on Minji instead, lying there on the pavement with her cap backwards and the camera at her eye, and lit her up gold from underneath, the whole side of her face, her eyelashes, a small mole by her ear Solar had never noticed, the little furrow of concentration at the corner of her mouth." },
        { n: "Minji didn't notice. She was looking through the lens at a dog. For once she was the one in the light and didn't know it, and Solar was the one holding it, and the feeling of that was strange, like picking somebody else's coat up off a chair by mistake and finding it fit." },
        { choose: [
          { t: "(Keep the light on her. Just a second longer.)", crush: M('in'), then: [
            { n: "She kept it there. One second. Two. Long enough for Minji to frown at the viewfinder, and lower the camera, and squint up into the glare, and understand, slowly, what Solar was doing, and go red from the collar up." },
            { s: 'minji', f: 'flustered', t: "That's— Sol. That's me. You're lighting me. I'm not the— he's the subject. I'm crew." },
            { s: 'solar', f: 'happy', t: "You looked good." },
            { s: 'minji', f: 'flustered', t: "I'm CREW." },
            { n: "She put the camera back up to her eye, very fast, at Koromaru, who hadn't moved, and her ears stayed red for the rest of the shot, and she didn't ask Solar to move the light." }
          ] },
          { t: "You're in your own shot, you know. You're lit.", crush: M('in'), then: [
            { s: 'minji', f: 'surprised', t: "..." },
            { s: 'minji', f: 'flustered', t: "No I'm not. I'm behind it. That's the rule. I'm always behind it." },
            { s: 'minji', f: 'neutral', t: "...Am I? How do I look?" },
            { s: 'solar', f: 'neutral', t: "Like someone people should point a camera at." },
            { n: "Minji looked at her over the top of the camera for a long moment, the lens pointing at the pavement, forgotten." },
            { s: 'minji', f: 'happy', t: "Okay. Nobody's ever lit me before. That's new. I'm going to need a minute. Koromaru, take five." }
          ] },
          { t: "(Swing it back to Koromaru. He's the star.)", crush: M('out'), then: [
            { n: "She swung the light back onto Koromaru, and he blazed gold and squinted, magnificently, like an old film star at a premiere, and Minji whispered *yes, yes, that's it, that's the shot*, and they got it, ten seconds of a white dog on a step in the last of the sun, perfect." },
            { s: 'minji', f: 'happy', t: "You're a natural gaffer. Can I credit you? Big letters. GAFFER: SOL." }
          ] }
        ] },
        { ifCrush: M(P.BUILD), then: [
          { n: "Later, at her desk, she couldn't stop seeing it. Not the dog. The side of a face, lit gold from underneath, not knowing it was being looked at. It had been the first time since April that she'd been the one doing the looking, and she found she liked it more than she'd expected to, and a good deal more than she was ready for." }
        ], else: [
          { n: "Minji sent her the cut that night, forty seconds of a dog in the sun, and at the end, white on black, in very big letters, *GAFFER: SOL*. It was a good afternoon. It had been exactly what it looked like." }
        ] }
      ] },

    /* ── Noticed: a duo match in Game Panic's PC corner; Jihoon coaching through the bead curtain. ── */
    { id: 'cr-mj-duo', who: 'minji', crush: M(P.BUILD), slot: 'after', after: '10/4', until: '11/14',
      place: 'Paulownia Mall · Game Panic', time: 'After School', bg: 'gamepanic-inside', scene: [
        { n: "Two middle-school boys had challenged them through the bead curtain of Game Panic's PC corner, at a volume, with the specific confidence of people who had never lost to anyone over the age of fifteen, and Minji had turned her cap round backwards without a word, which Solar knew by now meant exactly what it meant." },
        { n: "Outside the beads, at the crane game, Jihoon had taken it upon himself to coach. None of it was useful." },
        { s: 'jihoon', f: 'serious', t: "SOL. HIT THE GUY. The one with the hat. They've all got hats? Then HIT ALL OF THEM. This is your coach speaking. I've never played this game. I don't need to. I have instincts." },
        { s: 'minji', f: 'neutral', t: "Is he always like this?" },
        { s: 'solar', f: 'neutral', t: "I think so." },
        { s: 'minji', f: 'happy', t: "I like him. He's loud on purpose. It's a very honest kind of loud." },
        { n: "The PC corner was three sticky chairs in a space built for two, and they played shoulder to shoulder, Minji's knee bouncing against hers under the desk the whole first round like a metronome. Minji took the long shots, calm and unhurried. Solar kept her alive, and didn't know how, her hand moving before Minji's health bar had finished dipping, like a hand on a shoulder in a crowd." },
        { n: "At the last fight Minji said *Sol*, once, low, and Solar was already there. The heal landed. The middle schoolers groaned through the beads like a wounded animal." },
        { n: "Minji held up her hand for a high five without looking, and Solar hit it, and then Minji's fingers folded down over hers, a second, two, as if she'd forgotten how the end of a high five went. Her hand was cold. It was always cold before a match. Solar knew that and didn't know how she knew it." },
        { s: 'minji', f: 'flustered', t: "Sorry. Habit. Team habit. Doyoung makes us do that. After wins. It's a whole thing." },
        { n: "She was lying. Solar didn't know how she knew that either." },
        { choose: [
          { t: "Doyoung doesn't make you do that.", crush: MW(1), then: [
            { s: 'minji', f: 'surprised', t: "...How do you— no. He doesn't. He doesn't make us do anything except VOD review. I made that up just now. Badly." },
            { s: 'minji', f: 'flustered', t: "Can we requeue. I'd like to requeue and never discuss this again in my life." }
          ] },
          { t: "(Don't let go first.)", crush: MW(1), then: [
            { n: "She didn't let go first. Neither did Minji. They sat there in the sticky chairs with their hands knotted on the desk between the two keyboards, looking at the scoreboard as if it were very interesting, until the requeue popped and they both grabbed their mice at once and said nothing about it for the rest of the night." }
          ] },
          { t: "Again. Best of three.", then: [
            { s: 'minji', f: 'happy', t: "Obviously. I was about to say that. You always say it first. It's so annoying." }
          ] }
        ] },
        { n: "When they came out through the beads, Jihoon was leaning on the crane game with his arms folded, like a man who'd been waiting at an airport." },
        { s: 'jihoon', f: 'neutral', t: "I saw that. I see everything. ...Good game. Fan behavior, both of you. I'm very proud. I coached." }
      ] },

    /* ── Crush (a puppy beat inside): Seaside Park at sunset, the camera lowered on purpose. ── */
    { id: 'cr-mj-lensdown', who: 'minji', crush: M(P.UP), slot: 'after', after: '10/18', until: '11/24', weather: ['clear', 'cloudy'],
      place: 'Port Island · Seaside Park', time: 'After School', bg: 'port-island-seaside-park', scene: [
        { n: "The sun went down over Port Island the way it always did here, on what Minji insisted was the wrong side of the water, turning the bay copper and then pink and then a color she didn't have a name for, and they sat on the seawall with their legs hanging over and the camera on Minji's knee pointed at all of it." },
        { s: 'minji', f: 'neutral', t: "Can I turn it round? On you. You can say no. The sunset's fine on its own. It doesn't need help." },
        { s: 'solar', f: 'neutral', t: "Yes." },
        { n: "She turned it round. She filmed for a while, Solar in the last of the light, the wind lifting her hair off her neck, a gull going over. Solar tried not to do the shoulders. She did the shoulders a little." },
        { n: "And then, slowly, deliberately, the way you'd set a glass down on a table you weren't sure was level, Minji lowered the camera to her lap. Lens cap still off. Still running, probably. She didn't check. She just looked at Solar. Not through anything." },
        { s: 'minji', f: 'neutral', t: "Sorry. I wanted to check something." },
        { s: 'solar', f: 'neutral', t: "Check what?" },
        { s: 'minji', f: 'serious', t: "Whether it's the lens. The camera already loves you. That's easy. Anybody can see that. That's not a talent, that's just you standing in front of it." },
        { s: 'minji', f: 'neutral', t: "I wanted to know if it's the camera or if it's me." },
        { s: 'solar', f: 'neutral', t: "And?" },
        { s: 'minji', f: 'flustered', t: "...It's not the camera." },
        { choose: [
          { t: "(Look back. No lens. Let her see you see her.)", crush: MW(2), then: [
            { n: "She looked back. No lens between them, no mirror, nothing to check. Just Minji's face going pink in the pink light, and her own face, which she could feel doing nothing at all, and she let it do nothing, and it was the hardest thing she'd done all week." },
            { s: 'minji', f: 'surprised', t: "...You're not checking. Your shoulders didn't go up." },
            { s: 'minji', f: 'happy', t: "That's the first time. That's the first time ever. And I'm not even filming it. That's so typical. That's so, so typical." }
          ] },
          { t: "Then put it away. Just for today.", crush: MW(1), then: [
            { n: "Minji looked at her, and then at the camera, and then, with enormous ceremony, put the lens cap on and the camera in her bag and zipped the bag shut." },
            { s: 'minji', f: 'flustered', t: "I feel naked. I feel like I'm at a party without a drink. I don't know what to do with my hands. Talk to me about something stupid. Quickly." }
          ] },
          { t: "Film me anyway. I don't mind which it is.", then: [
            { s: 'minji', f: 'neutral', t: "...I mind. A little. I'd like to know which." },
            { n: "She lifted the camera and turned it back to the sunset, and filmed the water for a long time, and didn't say anything else about it, and her ears stayed pink anyway." }
          ] }
        ] },
        { ifCrush: M(P.PUP), then: [
          { n: "On the walk to the monorail she took her cap off and put it on Solar's head, backwards, without asking, the only thing Solar had ever seen her not ask about, and when Solar raised an eyebrow she said *it's a game-day thing, you won today*, and wouldn't say what the game had been." },
          { n: "Solar wore it home. Yukari, on the sofa, looked at the cap, and then at Solar's face, and then went back to her magazine and said *mm-hm* in a tone that had a great deal of paperwork behind it." }
        ], else: [
          { n: "On the walk to the monorail Minji didn't film anything. Not the gulls, not the ferry, not the light going pink on the museum's windows. She walked with her hands in her sweatshirt pocket and kept glancing sideways, quick, the way you'd check on a candle you'd left burning in another room." }
        ] }
      ] },

    /* ── Shared (everyone who was asked): Minji's window seat at the guesthouse, over the tracks. ── */
    { id: 'cr-mj-nest', who: 'minji', crush: M(P.ASKED), slot: 'evening', after: '11/3', until: '12/12',
      place: 'Kirijo Guesthouse', time: 'Evening', bg: 'kirijo-guesthouse-night', scene: [
        { n: "The Kirijo guesthouse by the station was carpeted and hushed and overheated, and smelled of green tea and lemon floor cleaner, and the lady at the front desk had started waving Solar through like a resident and leaving a rice ball out for her too, wrapped in a napkin, with no explanation." },
        { n: "Minji's window seat was at the end of the second-floor corridor, over the tracks, and she had made it a nest: a blanket, the borrowed laptop, an external hard drive held together with gaffer tape, three rice balls in a row like a firing squad. She was cutting the trains. She'd filmed the 5:12 every morning for a month." },
        { s: 'minji', f: 'neutral', t: "It's the same shot every day. It's never the same shot. That's my whole thesis. I'm going to win an award for it in a world that doesn't exist yet." },
        { n: "Halfway through the third train Jihoon came down the corridor in a white sheet mask and slides with a towel round his neck, and stopped, and looked at the two of them in the window seat like a landlord." },
        { s: 'jihoon', f: 'neutral', t: "Oh. It's you. In my home. Unannounced. Very rude." },
        { s: 'minji', f: 'happy', t: "Hi, Jihoon." },
        { s: 'jihoon', f: 'serious', t: "Camera Girl. Your lighting in here is a crime. I've said it before. I'll say it at your trial." },
        { n: "He moved the floor lamp a meter to the left, without asking, to a spot that was immediately and obviously better, and walked off toward the baths with his towel, and the sheet mask, and his dignity." },
        { s: 'minji', f: 'neutral', t: "...He's right. He's always right about the lamp. It's so annoying. He doesn't even film anything." },
        { ifRomance: 'jihoon', then: [
          { n: "He came back ten seconds later, flicked Solar's ear, very gently, which in Park Jihoon was a love letter, and said *don't stay out late, she'll make you watch trains till you die*, and left again. Minji said *it's a THESIS* to his back." }
        ] },
        byM([
          { n: "Solar got into the window seat behind her, and Minji leaned back against her, all her weight, the laptop on her knees, the way you'd lean into a seat you'd been saving, and played the trains, and didn't say anything for three of them." },
          { s: 'minji', f: 'neutral', t: "I keep not cutting us. Every clip with you in it that I like too much to cut, I keep. The timeline's four hours long. It's four hours of not cutting." },
          { s: 'minji', f: 'flustered', t: "That's not how editing works. I know how editing works. I'm choosing not to." }
        ], [
          { n: "The window seat was built for one and they were two, so their knees touched, and their shoulders, and the glass in front of them was dark enough to show the corridor behind them, and their two faces, and the lamp Jihoon had moved." },
          { n: "Solar watched the train come in on the screen, and then, without meaning to, watched the window instead, and in the window Minji wasn't watching the train. She was watching Solar's reflection. Their eyes met in the glass. Neither of them turned round." },
          { s: 'minji', f: 'flustered', t: "...A window's a lens too. Technically. I didn't ask the window. I'm sorry. I'll ask the window next time." }
        ], [
          { n: "They watched all thirty trains with the sound up, and Solar named every one of them as it came in, *Gerald*, *the Duchess*, *small Gerald*, and Minji laughed so hard the second time she had to stop the timeline, and the desk lady came up the stairs to see what the noise was and stayed for two trains." },
          { s: 'minji', f: 'happy', t: "I'm really glad you're here. Here here. In the nest. You're the only one who doesn't ask me why I filmed the same train thirty times." }
        ]),
        { choose: [
          { t: "Show me the first one again. The very first 5:12.", then: [
            { s: 'minji', f: 'neutral', t: "The first one's terrible. It's the morning after I came through. I was shaking. Look, the whole frame shakes." },
            { s: 'minji', f: 'happy', t: "...Okay. Watch it. Then watch the last one. That's the whole movie. That's the only thing that happened, the shaking stopped." }
          ] },
          { t: "(Eat the desk lady's rice ball.)", then: [
            { s: 'minji', f: 'surprised', t: "She'll know. She'll know it was you. She counts them. She counts them, Sol." },
            { n: "In the morning, Minji reported by text, there were two rice balls outside her door, and a small paper note, in careful English, that said *FOR THE FRIEND*." }
          ] }
        ] }
      ] },

    /* ── After her rank 8 (late November on): dating, a friendship, or she's with someone else. ── */
    { id: 'cr-mj-lamp', who: 'minji', crush: M(['dating', 'faded']), slot: 'evening', after: '11/27', until: '1/10',
      place: 'Iwatodai · Riverside', time: 'Evening', bg: 'iwatodai-riverside-night', scene: [
        { n: "The lamp at the bottom of the river path was flickering the way it always flickered, tired amber on the black water, and it was cold enough now that their breath went up into the light and hung there between stutters like something left on." },
        { n: "Solar stopped under it. She didn't decide to. She never did." },
        { ifCrush: M('dating'), then: [
          { s: 'minji', f: 'neutral', t: "You always do that. You stop. Every time. Like you're waiting for it to decide something." },
          { s: 'solar', f: 'neutral', t: "Maybe I am." },
          { n: "And then, because it was dark between flickers and that made it easier, she told her. Not everything. The thing underneath. That some days she woke up and didn't know which of three girls was going to get out of bed, and that she was scared she'd pick the wrong one, and that people would be kind to whichever one she picked and she'd never know if they'd wanted another." },
          { s: 'minji', f: 'serious', t: "I always believe you, Sol." },
          { s: 'minji', f: 'neutral', t: "Whichever one gets up. I'll believe her. I've got footage of all of them, and they're all you. I checked. I check every night." },
          { choose: [
            { t: "(Hold her hand under the lamp.)", then: [
              { n: "She took Minji's hand, cold, always cold, and held it in the pocket of her coat, and they stood under the lamp while it made up its mind, on and off and on, and Minji didn't reach for the camera once, and at the end of it said *that's a fixed shot*, and *it doesn't need me*, and smiled into her scarf." }
            ] },
            { t: "Film me. Right now. I'm not performing.", then: [
              { n: "Minji lifted the camera. She looked at Solar through it for a long second. Then she lowered it again, and put the lens cap on, carefully, like closing a book at a good page." },
              { s: 'minji', f: 'happy', t: "I don't need to. I've got it. I've got it right here." }
            ] }
          ] }
        ], else: [
          { ifTaken: 'minji', then: [
            { s: 'minji', f: 'neutral', t: "I heard. I'd have heard anyway. You've been walking different. Lighter. I film people walking, I notice walking." },
            { ifRomance: 'haechan', then: [
              { s: 'minji', f: 'neutral', t: "I knew before you did. Back home. Four seconds, at a party. I didn't even lift the camera. I just knew." },
              { s: 'minji', f: 'neutral', t: "I hope he's careful with it. I said that once already. I'm saying it again so it's on record twice." }
            ], else: [{ ifRomance: 'akihiko', then: [
              { s: 'minji', f: 'neutral', t: "He slows down on the river path when you're on it. Did you know? I've got it on film. Fourteen times. He's never once noticed he does it. I'm not going to show him. I'll show you, one day." }
            ], else: [{ ifRomance: 'jungwon', then: [
              { s: 'minji', f: 'neutral', t: "The president. He holds doors like he's signing them. He looks at you like he's taking minutes and you're the only item. I like him. Don't tell him. He'll put it in the minutes." }
            ], else: [{ ifRomance: 'jihoon', then: [
              { s: 'minji', f: 'happy', t: "Jihoon. He moved my lamp. He moves everybody's lamp. He's been loud for you his whole life, you know. It's the most honest kind of loud. I'm really glad it was heard." }
            ], else: [
              { s: 'minji', f: 'neutral', t: "Whoever it is, they're lucky. I've seen you happy lately. I don't even need to ask. It's all over the footage." }
            ] }] }] }] },
            { s: 'minji', f: 'neutral', t: "I'm okay. I'm actually okay. I said I'd rather point a camera at you forever than be the thing you reach for. I meant it then. I mean it more now. I just didn't think I'd get to find out." },
            { n: "She said it to the lamp. It went out, one whole second of real dark, and she waited for it to come back on before she looked at Solar, the way you'd wait out the chorus of a song you couldn't listen to yet." },
            { choose: [
              { t: "Can I still be your subject?", then: [
                { s: 'minji', f: 'happy', t: "Always. Duo. That's not a thing that changes. I'd fight anyone who tried. I'd ask them first, and then I'd fight them." }
              ] },
              { t: "(Stand with her until the lamp decides something.)", then: [
                { n: "They stood under it. It didn't decide anything. It never did. After a while Minji bumped her shoulder against Solar's, once, and said *okay*, to the river, and *okay* again, softer, and the second one sounded true." }
              ] }
            ] }
          ], else: [
            { s: 'minji', f: 'happy', t: "You stopped. You always stop. Under my favorite lamp, in my favorite light. That's a shot. Can I? I'm asking. I'll ask twenty times." },
            { choose: [
              { t: "Ask me nineteen more.", then: [
                { s: 'minji', f: 'happy', t: "Can I. Can I. Can I. Can I— okay, that's four, I'm counting, I'll finish on the walk home. Duo." },
                { n: "She did finish, at the dorm gate. Number twenty was very quiet. Solar said yes to all of them." }
              ] },
              { t: "(Step into the light. That's a yes.)", then: [
                { n: "She stepped into it. Minji lifted the camera, and the lamp, for once, for about ten seconds, held steady, as if it knew, and Minji whispered *thank you*, the way she'd whispered it to a dog on a step in September, and meant it the same amount." }
              ] }
            ] }
          ] }
        ] }
      ] }
  );

  /* ── The world reacts. Searchers aren't at school: the dorm, the evening, late, the study table. ── */
  add('home', [
    { t: "She went straight home. Jihoon was on the lounge sofa again, a guest who had stopped pretending to be a guest, eating her pudding with her spoon, and he said *took you long enough, skank* without looking up, and moved his feet so she could sit, and she sat.", crush: J(P.UP), months: [10, 11, 12] },
    { t: "Home. Jihoon was on the dorm steps with his hood up, waiting, and when she came through the gate he stood up and took her bag off her shoulder and put it on his own without a word, as if it were a thing boyfriends did, which he'd clearly looked up.", crush: J('dating'), months: [11, 12, 1, 2] },
    { t: "She came home to a sticky note on her shoe shelf in tidy capitals: *U LEFT UR SCARF AT GAME PANIC. ITS IN THE LOUNGE. I DIDNT FILM IT. (I FILMED IT A LITTLE) :]*", crush: M(P.BUILD), months: [10, 11] },
    { t: "Home. Minji was on the front steps with the camera in her lap and the lens cap on, which meant she was waiting, not working, and when she saw Solar she took the cap off, and then, after a second, put it back on, and just looked.", crush: M(['puppy', 'almost', 'dating']), months: [10, 11, 12, 1, 2] }
  ]);
  add('evening.sub', [
    { t: "Jihoon has come over from the guesthouse for a dinner nobody invited him to. He has saved you a seat by sitting in the one beside it and glaring at Junpei. What now?", crush: J(P.BUILD), months: [9, 10, 11] },
    { t: "Jihoon is in the lounge explaining pilates to Koromaru, who is listening better than anyone ever has. He stops to tell you your hair looks stupid. It looks fine. What now?", crush: J(P.FRIEND), months: [10, 11, 12, 1, 2] },
    { t: "Minji is in the lounge borrowing the laptop again, cap backwards. She looks up when you come in, and then becomes very interested in a timeline. What now?", crush: M(P.UP), months: [10, 11, 12] },
    { t: "Minji is in the lounge filming Junpei's 'documentary' with the patience of a saint. She waves at you with the hand that isn't holding the camera. What now?", crush: M(P.FRIEND), months: [11, 12, 1, 2] }
  ]);
  add('late.plain', [
    { t: "Her phone lit up on the pillow at one. *are u asleep. Do Not answer if ur asleep.* A minute later: *ok u didnt answer so ur asleep. goodnight Skank.* She lay there and didn't answer, on purpose, and smiled at the ceiling like she was getting away with something.", crush: J(P.UP) },
    { t: "She lay awake thinking about a camera lowered on purpose, and a girl looking at her over the top of it, and turned over, and turned back, and turned over again.", crush: M(P.UP) },
    { t: "Her phone buzzed at midnight: a clip, six seconds, the bay from the dorm roof, and two voices at the very bottom of it. *goodnight duo :]*", crush: M('dating'), months: [11, 12, 1, 2] }
  ]);
  add('study', [
    { t: "She studied at the dining-room table. Jihoon, who did not go to her school and had not been invited, sat across from her doing nothing at all with tremendous focus, and every time she got a sum wrong he said *wrong* without looking at the page, and he was right every single time, which was the most annoying thing that had happened to her in this world.", crush: J(P.BUILD), months: [10, 11, 12] },
    { t: "She studied in the lounge. Minji was editing at the other end of the sofa with her headphones on, and once, when Solar stretched, there was the tiny click of a shutter, and a whisper, *sorry, can I keep that one?*, and she said yes without looking up.", crush: M(P.BUILD), months: [10, 11, 12] }
  ]);

  /* ── Texts. Jihoon: Capitalized Random Words, hashtags, Skank as affection. Minji: u, 2, :] ;] (: . Solar answers him in
     caps and keysmash, her in Runners lowercase. ── */
  const T = window.FEMC_GAME_TEXTS; if (!T) return;
  const jh = t => ({ from: 'jihoon', t }), mj = t => ({ from: 'minji', t });
  (T.ambient ||= []).push(
    { id: 'cr-tx-jh-counted', thread: 'jihoon', from: '9/24', to: '10/20', slot: 'late', flag: 'arrived-jihoon', crush: J(['noticed', 'crush']), msgs: [
      jh('u looked at me Three Times at dinner'), jh('i counted. fan behavior'), jh('its ok. it happens to the best of them. mostly to Me')
    ], reply: [
      { t: 'I WAS LOOKING AT THE CURRY', crush: JW(1), then: [jh('the curry was Behind me'), jh('u looked Through me at the curry?? with ur eyes??'), jh('Goodnight Skank')] },
      { t: 'HEHEHE u counted??', crush: JW(1), then: [jh('...'), jh('i count Everything. its a skill. Do Not make it weird'), jh('#brocken')] },
      { t: '(Leave it on read.)', silent: true, then: [jh('Read At 12:41'), jh('wow. ok. the almighty Hoon has been Left On Read')] }
    ] },
    { id: 'cr-tx-jh-trumpet', thread: 'jihoon', from: '10/19', to: '11/15', flag: 'arrived-jihoon', crush: J(P.UP), msgs: [
      jh('i gave ur texts their own sound'), jh('its a trumpet. a Royal trumpet'), jh('so i know when the Commoners are calling')
    ], reply: [
      { t: 'make mine the sad violin', crush: JW(1), then: [jh('Absolutely Not'), jh('u are the Trumpet. Deal With It'), jh('it goes off and i Stand Up. every time. Junkyu has noticed')] },
      { t: 'whats everyone elses', then: [jh('Silent. Obviously'), jh('...Junkyu gets a small bell. he earned it')] }
    ] },
    { id: 'cr-tx-jh-holdinghands', thread: 'hateclub', from: '11/23', to: '12/18', flag: 'arrived-crew', crush: J('dating'), msgs: [
      { from: 'junkyu', t: 'junkyute: JIHOON IS HOLDING HANDS IN PUBLIC!!!' },
      { from: 'asahi', t: "asanoonecares: i saw. i've never wanted to go home more" },
      { from: 'hyunsuk', t: 'geniusuk: bro he waved at me with the hand. the holding hand' },
      { from: 'jihoon', t: 'jihoney: Jealousy Is A Disease. Get Well Soon #blessed' }
    ], reply: [
      { t: 'HEHEHEHE LEAVE HIM ALONE', then: [{ from: 'jihoon', t: 'jihoney: See. She Defends Me. Write It Down' }, { from: 'jaehyuk', t: 'jaehyukkie: Noted.' }] },
      { t: 'ok but he DID wave with it', then: [{ from: 'jihoon', t: 'jihoney: BETRAYAL. from my own Girlfriend. in the Hate Club of all places' }, { from: 'asahi', t: 'asanoonecares: best day of my life' }] }
    ] },
    { id: 'cr-tx-jh-list', thread: 'jihoon', from: '11/24', to: '12/20', slot: 'late', flag: 'arrived-jihoon', crush: J('faded'), msgs: [
      jh('reminder that i am still Number One'), jh('i dont care who else is on the list. the list is Not My Business'), jh('ok it is a little my business. Goodnight')
    ], reply: [
      { t: 'UR NUMBER ONE', then: [jh('I Know'), jh('i just like hearing it. thats allowed. thats in the Rules')] },
      { t: 'who said there was a list', then: [jh('Nobody. There Is No List'), jh('go to sleep Skank')] }
    ] },
    { id: 'cr-tx-mj-light', thread: 'minji', from: '9/30', to: '10/25', slot: 'evening', flag: 'arrived-minji', crush: M(['noticed', 'crush']), msgs: [
      mj('can i ask u something'), mj('its not a film thing'), mj("ok it's a little bit a film thing. whats ur favorite time of day. for light reasons :]")
    ], reply: [
      { t: '5 at the river. u already know that', crush: MW(1), then: [mj('i do'), mj('i wanted 2 hear u say it (:')] },
      { t: 'whenever ur filming', crush: MW(1), then: [mj('...'), mj("ok that's not fair"), mj("ur not allowed 2 be smooth by text. ur barely allowed in person ;]")] },
      { t: 'midnight lol', then: [mj('ha. ok. green it is'), mj('not my best color tbh')] }
    ] },
    { id: 'cr-tx-mj-wallpaper', thread: 'minji', from: '10/20', to: '11/18', slot: 'late', flag: 'arrived-minji', crush: M(P.UP), msgs: [
      mj('i made u my phone wallpaper'), mj('WITH permission. i asked u. u were half asleep on the dorm sofa and said mhm'), mj('does mhm count. i can change it')
    ], reply: [
      { t: 'mhm counts', crush: MW(1), then: [mj('ok :] keeping it'), mj('u look like a cat in it. a very authentic cat')] },
      { t: 'send me the pic first', then: [mj('[image]'), mj('see?? cat'), mj("i'm keeping it unless u say the word")] },
      { t: 'change it to the pigeons', then: [mj('...ok. pigeons'), mj('(ur still in the folder)')] }
    ] },
    { id: 'cr-tx-mj-bay', thread: 'minji', from: '11/28', to: '12/20', slot: 'late', flag: 'arrived-minji', crush: M('dating'), msgs: [
      mj('the bay footage is 41 min'), mj("i've watched it 3 times"), mj('the bay is not the point of the bay footage')
    ], reply: [
      { t: 'whats the point of the bay footage', then: [mj('u know what the point is (:'), mj('the point is at the bottom of the frame. talking')] },
      { t: 'send it to me', then: [mj('no'), mj("come watch it in person. it's a 2 person film ;]")] }
    ] },
    { id: 'cr-tx-mj-duo', thread: 'minji', from: '11/28', to: '12/20', slot: 'evening', flag: 'arrived-minji', crush: M('faded'), msgs: [
      mj('duo tmrw?'), mj("no pressure. game panic. i'll bring the good snacks :]")
    ], reply: [
      { t: 'always', then: [mj('nice'), mj("(that's thank u in duo)")] },
      { t: 'only if i pick the map', then: [mj('u always pick the map'), mj("that's not a condition sol that's a tradition (:")] }
    ] }
  );
})();
