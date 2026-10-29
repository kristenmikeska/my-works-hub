/* The Runners epilogue, week 3 ("bleeding", 12/15-12/20) and the act's end (epilogue batch 4, 2026-10-28). Plus 12/14's late
   slot, the first half-present pull. Format: story events as story-w1.js / story-w2.js (consumes: true spends the slot;
   ends: true finishes the act when the scene ends: epilogue.js playEvent → finish(): the end card, the Equinox card, the year).
   Loaded with the world; wraps itself so load order never matters.
   Events (R.events):
     epi-r-alone        12/14 late     fight 1, alone: the 4B hallway at midnight, half Tartarus (a { battle } placeholder)
     epi-r-upward       12/15 early    finals; the snow falls up on the quad and everyone sees it; Mark asks for ten minutes
     epi-r-kitchen      12/16 early    breakfast at Sigma, Mark's verdict (every copy accounted for), the flicker he sees (Mark POV)
     epi-r-unseen       12/16 late     fight 2, unseen: the Alpha stairs going up too far; S.E.E.S. can't see her
     epi-r-butterfly    12/17 evening  the dark lab, a blue butterfly in December; Haechan says it out loud (every route)
     epi-r-clocks       12/18 early    every clock in the Alpha house at 12:00, the girls see it; Ms. Han's deadline
     epi-r-unheard      12/18 late     fight 3, visible, unheard: the bell tower at midnight; they see her, nobody hears her
     epi-r-holiday      12/19 evening  the Sigma holiday party; the midnight toast; fight 4, one second of contact; the footage
     epi-r-footage      12/19 late     Danielle's footage shows something impossible; her choice (the year decides it)
     epi-r-first-snow   12/20 early    the first snow, finals closed, the last SUnews post face down; the bag
     epi-r-rooftop      12/20 late     the final: the Language Arts rooftop in the first snow; she's pulled, Haechan holds on (ends)
   The four fights are { battle: { script: 'epi-runners-<n>' } } lines, played since batch 6 by battle.js's EPI table (the
   stage rules) through epilogue.js fightHook (the handoff, the resume, EXP into the battle save); `notes` are the designer's.
   Flags set: epi-r-mark-door / epi-r-mark-closed (the kitchen), epi-r-said-it (the butterfly, always), epi-r-travel-yes /
     epi-r-travel-no (the clocks: Ms. Han's deadline), epi-r-footage-file / epi-r-footage-sent / epi-r-footage-kept (Danielle's
     choice), epi-r-jacket (the rooftop, Haechan route), epi-r-held (the rooftop, every route).
   Reads: the locked route (ifEpiRoute), epi-r-term-ask / -none, epi-r-public-post, epi-r-reel-yes / -cut / -think, epi-r-stem-hers,
     epi-r-danielle-initial; ifYear: flag danielle-refused / danielle-sold, noFlag arrived-danielle / arrived-mark, xmas haechan,
     rank haechan 10.
   Glitches: floors 12/15 3 and 12/19 4 (glitches.js); inline ids epi-r-g-alone, -upward, -kitchen, -butterfly, -clocks, -midnight,
     -pull; { glitch: { stage } } on the pull days; strain on the lies that still hold the cover.
   Canon held: the track stays untitled; the valley promise stays unpaid; the jacket comes out of the bag only on the roof (his
   route); Haechan never asks anyone about her; Jaehyun learns nothing of camp; Mark is complicated, not a villain, and gets
   no clean reconciliation; the prior girl's file is hers to decide. Wren is never literal. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});

  (R.events ||= []).push(

  // ───────────────────────────── 12/14, late: alone (fight 1) ─────────────────────────────
  { id: 'epi-r-alone', date: '12/14', slot: 'late', title: 'alone', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
    { music: 'epi-r-half' },
    { n: "Sunday night she did the responsible thing, which was set two alarms for the Intro to Business final and lie in bed at eleven-forty with the lamp off and her eyes open, listening to the house settle around her like a ship. Somebody's hairdryer. A door. Hyein on the phone through two walls, laughing at something, then not." },
    { n: "At 11:59 she checked her phone, because she always checked it at 11:59 now and didn't tell anyone she did. At 12:00 the radiator stopped knocking halfway through a knock." },
    { glitch: 'epi-r-g-alone' },
    { place: 'Syracuse · Studio 4B · Hallway', time: 'Late Night' },
    { dark: true },
    { n: "She was standing in the hallway outside 4B." },
    { n: "Barefoot. Her sleep shirt, her hair down, the carpet under her feet the same scratchy gray it always was, the bulletin board with the same campus-tour flyer pinned crooked on it, and every single thing the color of a pool at night. The exit sign over the far stairs was green, which it always had been, except now everything else was too, and the hallway didn't end where it used to. It went on past the stairwell door, past where the building stopped, into a corridor of black-and-gold tile that she knew the way you know your own handwriting." },
    { n: "Tartarus. Coming through the end of a college music building like water through a ceiling." },
    { n: "Her hand went to her hip. There was nothing on her hip. Then there was something in her hand, cold and heavy and exactly the right weight, and she didn't look down at it, because if she looked down she'd have to decide what it meant that it was there." },
    { n: "Something came out of the gold end of the hallway on too many legs." },
    { n: "Haenim. She called it the way you'd say your own name in the dark to prove you still had one, and something answered, far away and fizzing, the name coming apart in her mouth like a radio between stations, *Hae-, Haen-, H—*, and the light came anyway. Not all of it. Enough." },
    { battle: { id: 'epi-runners-1', kind: 'scripted', script: 'epi-runners-1', title: 'Alone', forced: true,
      desc: 'Studio 4B’s hallway at midnight, half turned into Tartarus. Solar, by herself.',
      notes: 'Half-present fight 1 (FEMC-EPILOGUE-PLAN 2.4): solo, no escape, Haenim answers but her name glitches. After a few rounds or a hard hit she is pulled back mid-fight (interrupt, turn 4, half HP). Cannot be lost: an empty HP bar fades her home instead.' } },
    { dark: false },
    { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', soft: true },
    { n: "Then she was on her bedroom floor." },
    { n: "On her knees on the pink rug, breathing like she'd run the length of the quad, her palms flat on the carpet and her hair stuck to her neck. Nothing in her hand. The radiator knocking again, mid-knock, picking up exactly where it had left off, as if it had only lost its place." },
    { n: "Her phone said 12:01. It had said 12:00 a second ago. She knew it had." },
    { n: "There was a scrape across the knuckles of her right hand, four thin lines already beading, the kind of mark you get from catching yourself on something rough. She looked at it for a long time. Then she got up and washed it in the bathroom with the light off so she wouldn't have to see her face in the mirror, and put a Band-Aid on it, and got back into bed, and lay there with her hand on her chest until the alarms she'd set for the final went off one after the other into a room where she was already awake." },
    { flag: 'epi-r-alone' }
  ] },

  // ───────────────────────────── 12/15, morning: upward ─────────────────────────────
  { id: 'epi-r-upward', date: '12/15', slot: 'early', consumes: true, title: 'upward', place: 'Syracuse · The Quad', time: 'Morning', scene: [
    { music: 'epi-r-finals' },
    { n: "Finals week walked across the quad the way an army would if the army had slept four hours and was carrying its whole life in a tote bag. Monday, quarter to nine, gray, the salted paths crunching, everybody's breath going up in front of them, and Hanni beside her with two coffees and a Business flashcard stack held together with a hair tie." },
    { s: 'hanni', f: 'neutral', t: "Name three stakeholders." },
    { s: 'solar', t: "Shareholders. Employees. My father." },
    { s: 'hanni', f: 'happy', t: "Two of those are right and one of them is a cry for help." },
    { n: "The Band-Aid on her knuckles caught on the strap of her bag. Hanni had looked at it once, at breakfast, and hadn't asked, and Solar had decided to love her for that specifically, today, on top of everything else." },
    { n: "It had started snowing on the walk out of Alpha, a light dry snow out of a white sky, the kind that didn't so much fall as wander. Halfway across the quad it stopped wandering." },
    { glitch: { stage: 3 } },
    { glitch: 'epi-r-g-upward' },
    { n: "It went up." },
    { n: "All of it, at once, the whole quad's worth. Every flake hung for one breath at the height it was at and then turned and rose, slow and soft and perfectly sure of itself, past the lampposts, past the bell tower's face, up into the white, like the sky was breathing in. Snow lifting off the shoulders of people's coats. Snow lifting off the hoods of the parkas and the brim of somebody's hat and the top of a trash can, peeling up off everything in a fine glittering sheet, going home." },
    { n: "And the quad stopped." },
    { n: "Not frozen, not like the party. Just stopped, the way a crowd stops for something, two hundred people on the way to finals standing in the gray paths with their heads tipped back and their mouths open. A boy dropped his coffee. A girl near the chapel said *oh my God* very quietly, like a prayer. Then the phones came up, all of them, a whole field of little black rectangles held to the sky, and somebody laughed in the high wrong way people laugh at things they can't use." },
    { s: 'hanni', f: 'surprised', t: "...Sol." },
    { n: "Four seconds. Maybe five. Then it was just snow again, falling the right way, onto two hundred upturned faces, and people looked at each other and started talking all at once about wind, about an inversion something, about how it had definitely been the wind." },
    { n: "Hanni hadn't moved. She had a coffee in each hand and she was holding them so hard the lids had popped, and she was looking at Solar, not at the sky." },
    { s: 'hanni', f: 'serious', t: "Everyone saw that." },
    { s: 'solar', t: "I know." },
    { s: 'hanni', f: 'serious', t: "No. Sol. *Everyone* saw that." },
    { n: "That was the difference, and they both heard it. Until this morning, it had been hers. A green moon nobody else looked up at. A room under her voice on a track. A party that stopped for one second with only her inside it. Things she could carry around in her own chest and decide later whether to believe. This had happened to two hundred people on the way to finals. It was going to be on SUanon by ten." },
    { n: "Someone came across the snow toward them, unhurried, hands in his coat pockets, and her stomach knew who it was before her eyes did." },
    { s: 'mark', f: 'neutral', t: "Hey. Morning." },
    { s: 'mark', f: 'neutral', t: "Did you, I mean. Obviously you did." },
    { n: "He didn't look at the sky. That was what she'd remember afterward. Every person on the quad was still looking up at it, and Mark Lee wasn't, because he'd stopped looking at it the second it started and looked at her instead, the way you look toward the person you know it's about." },
    { ifYear: { noFlag: 'arrived-mark' }, then: [
      { n: "She had never seen him over there. He'd made sure of that. But he knew. It was all over his face, the way he'd stood in the snow and not looked up." }
    ] },
    { s: 'mark', f: 'sad', t: "Stats is tomorrow. Before it. Ten minutes, at the house. Jaehyun's making breakfast, he said you'd come if he asked, so he asked." },
    { s: 'mark', f: 'neutral', t: "There's something I've done that you should hear about from me. Not about you. About something else. I'm not asking for anything." },
    { choose: [
      { t: "Ten minutes.", then: [
        { s: 'mark', f: 'neutral', t: "Ten. I'll time it." }
      ] },
      { t: "(Nod. Don't make it easy.)", then: [
        { n: "She nodded. That was all. He took it like it was more than he'd been expecting, which it probably was, and went back across the quad without looking up once." }
      ] }
    ] },
    { s: 'hanni', f: 'neutral', t: "...You don't have to go." },
    { s: 'solar', t: "I know. I'm going to go." },
    { place: 'Syracuse · Lecture Hall', time: 'Morning' },
    { n: "Intro to Business, nine o'clock, a gym-sized room with the desks a seat apart and a proctor walking the aisles in squeaky shoes. She sat. She uncapped her pen. Someone took the empty seat diagonally behind her with a rustle of cream wool and the smell of coffee and cold air." },
    { s: 'danielle', f: 'neutral', t: "Strange weather, wasn't it?" },
    { s: 'danielle', f: 'happy', t: "Everyone's saying it was the wind. I think that's so nice of everyone." },
    { n: "The proctor said *pens down until I say,* and they put their pens down, and Solar took the final, and she knew every answer, and she wrote every one of them with the Band-Aid on her knuckles catching on the paper and a pair of eyes on the back of her neck the whole two hours like a hand." },
    { stat: { knowledge: 1 } }
  ] },

  // ───────────────────────────── 12/16, morning: Mark's verdict ─────────────────────────────
  { id: 'epi-r-kitchen', date: '12/16', slot: 'early', consumes: true, title: 'every copy', place: 'Syracuse · Sigma Chi House · Kitchen', time: 'Morning', scene: [
    { music: 'epi-r-verdict' },
    { n: "Sigma at eight in the morning in finals week smelled like burnt coffee and a hundred unwashed hoodies and, under that, eggs, because her brother was standing at the stove in a T-shirt with a spatula like a man who'd been told that a big breakfast before an exam was a scientifically proven advantage and had never once questioned it." },
    { s: 'jaehyun', f: 'neutral', t: "Sit. Did you eat." },
    { s: 'solar', t: "You're literally about to feed me." },
    { s: 'jaehyun', f: 'neutral', t: "That's not an answer." },
    { n: "The kitchen was full in the way the Sigma kitchen was only ever full during finals, which was full of people pretending not to be awake. Jeno asleep sitting up on the counter with a highlighter in his fist. Jisung at the island with a flashcard app open, mouthing the definitions. Johnny with a mug and a laptop and the particular calm of somebody who'd finished his finals on Friday and was now watching everyone else's like a nature program. Renjun at the window with the sash pushed up two inches and his morning smoke happening on schedule, as if nothing in the world, upward snow included, would ever be important enough to change a schedule." },
    { s: 'renjun', t: "You see the sky yesterday?" },
    { s: 'solar', t: "Everybody saw the sky yesterday." },
    { s: 'renjun', t: "Mm. Jisung thinks it's a sign." },
    { s: 'jisung', t: "I didn't say a sign. I said it could be, like, an indication." },
    { s: 'renjun', t: "Of what." },
    { s: 'jisung', t: "...I didn't get that far." },
    { n: "Jaehyun put a plate in front of her. Eggs, toast, a banana, two strips of bacon arranged with a quarterback's sense of field position. He stood across the island from her with his own plate and ate standing up, the way he did when he was already mentally somewhere else, and watched her eat the way their mother would have, which was a thing she'd never tell him." },
    { s: 'jaehyun', f: 'neutral', t: "Finance at nine. Then I'm done. The car's Sunday." },
    { s: 'jaehyun', f: 'serious', t: "You're coming home. For Christmas. I'm not asking, I'm telling you what Dad's office booked." },
    { s: 'solar', t: "I know what Dad's office booked." },
    { n: "He looked at the Band-Aid on her knuckles. He looked at it for exactly as long as it took to decide not to ask, which was half a second, which was very fast for Jaehyun, and then he rinsed his plate and put on his coat and squeezed the back of her neck once on his way past, hard, the way he used to when she was nine and he was leaving for something important." },
    { s: 'jaehyun', f: 'neutral', t: "Eat the banana." },
    { n: "Then he was gone, the front door, the cold, a slice of white light across the hall floor and then not. And the kitchen, which had been six people pretending not to be awake, became six people pretending not to notice who'd just come down the stairs." },
    { n: "Mark had a mug in his hand and a hoodie on inside out, the tag at his throat, and he looked like someone who'd been up since five deciding how to stand in a doorway. Nobody said good morning to him. Not pointedly. That was the thing. Jeno didn't wake up. Jisung looked at his flashcards. Johnny's eyes went to Mark over the laptop for one second and then back to the screen, and there was a sheet of paper stuck to the fridge behind him, the holiday party committee list in Jaemin's handwriting, and halfway down it Mark's name had a line through it in blue ballpoint, neat, like a correction on a form." },
    { n: "Nobody had said anything. That was how she knew the house knew something." },
    { s: 'mark', f: 'neutral', t: "Hey. Ten minutes. I'm timing it, I said I would." },
    { s: 'mark', f: 'neutral', t: "...Can we do it out back?" },
    { place: 'Syracuse · Sigma Chi House · Back Porch', time: 'Morning', soft: true },
    { n: "The back porch, the cold, the yard white and stamped flat with a weekend's worth of boots, beer cans frozen into the snow by the fence like fossils. He set his mug on the railing and didn't drink from it. His phone was in his hand, and he turned it so she could see the timer running, 9:58, 9:57, and put it face up on the railing next to the mug, as if that settled something." },
    { s: 'mark', f: 'serious', t: "I kept it. You know I kept it. The original. From last year. You heard it at camp, because I played it for you, and I told myself that was for you, and it wasn't." },
    { s: 'mark', f: 'serious', t: "It isn't mine. It was never mine. It isn't Hyuck's either, and it isn't yours. It's hers." },
    { n: "Something went tight and cold in her chest, a whole year's worth of things she'd decided not to think about at once. She didn't say anything. She'd learned that from Danielle, of all people: you didn't help someone get through a confession. You let them carry it the whole way." },
    { s: 'mark', f: 'neutral', t: "Thursday I took the drive to the Dean's office. In an envelope. With a letter. What it is, where it came from, what I did with it, every copy that ever existed and where each one is now. They're getting it to her family's lawyer. Whatever happens to it after that is her call. Not mine. Not the house's. Not yours." },
    { s: 'mark', f: 'neutral', t: "The one on my phone, the one I played at camp, is the one in the envelope now. There isn't another. I checked. I had Johnny check, because I knew you'd ask if anyone besides me checked." },
    { s: 'solar', t: "And Danielle's." },
    { s: 'mark', f: 'sad', t: "...Danielle's is the one I gave her. The one with no sound. I can't get it back. I'm not going to stand here and tell you I can. I put it in the letter. That she has it. That I gave it to her." },
    { n: "So that was every copy. He'd counted them out loud, like a man reading a receipt back at a register, and the number was larger than zero and it would always be larger than zero, and he knew that, and so did she." },
    { s: 'mark', f: 'neutral', t: "I told Johnny. Thursday, after the Dean. All of it. He didn't tell anyone. That's why everyone knows." },
    { n: "That was almost funny. It was the most Sigma sentence she'd ever heard, and he said it without a trace of a joke, and behind them, through the kitchen window, she could see Johnny's back at the island not moving at all." },
    { s: 'mark', f: 'sad', t: "I'm not telling you so you'll say it's okay. It's not okay. I just didn't want you to hear I'd done it from somebody who'd make it sound better than it was." },
    { s: 'solar', t: "Why now." },
    { n: "He looked at the yard for a long time. The timer on the railing said 4:12." },
    { s: 'mark', f: 'sad', t: "Over there nobody had heard of me. Nobody knew what I'd done, and I wasn't the guy who'd done it. I was just. Some guy who could play piano in a dorm lounge at two in the morning. And I liked him. I really liked him, Sol." },
    { s: 'mark', f: 'neutral', t: "I want to be him here. I don't get to just decide that. I have to, like. Pay for it first. This is the first payment. It's not the last one." },
    { n: "*Sol.* It went in the way it always went in, small and exact, a splinter she'd stopped trying to dig out. He heard himself say it. She watched him hear it, and not take it back, because he had no other name for her and they both knew it." },
    { choose: [
      { t: "Then make music honestly. Your own. Then we'll see.", flag: 'epi-r-mark-door', then: [
        { n: "He didn't smile. She was grateful for that. He nodded slowly, like she'd handed him a weight rather than a door, which was what it was, and he understood that it was what it was." },
        { s: 'mark', f: 'neutral', t: "Okay. Honestly. I can try that." },
        { s: 'solar', t: "That's not forgiveness." },
        { s: 'mark', f: 'sad', t: "I know. I'd be worried if it was." }
      ] },
      { t: "Thank you for telling me. That's all I've got.", flag: 'epi-r-mark-closed', then: [
        { s: 'mark', f: 'sad', t: "That's more than I'd have given me." },
        { n: "He picked up his mug. The coffee in it had gone to ice at the edges. He looked into it like there was an answer at the bottom, and there wasn't, and he knew there wasn't, and he drank it anyway." }
      ] },
      { t: "(Say nothing. Let the timer run.)", flag: 'epi-r-mark-closed', then: [
        { n: "She let it run. 2:40. 2:39. He didn't fill the silence. That was new. The old Mark would have filled it with something warm and useless, a joke, a *you know I'd never,* and this one stood at the railing with his hands open and let the seconds go by and didn't ask her for a single one of them." }
      ] }
    ] },
    { place: 'Syracuse · Sigma Chi House · Kitchen', time: 'Morning', soft: true },
    { n: "Haechan was in the kitchen when they came back in. Hoodie, headphones round his neck, pouring coffee from the burnt pot into a mug that said WORLD'S OKAYEST BROTHER, which belonged to Jaehyun and which nobody had ever had the nerve to tell him about." },
    { ifEpiRoute: 'haechan', then: [
      { n: "His eyes found hers first. Then the Band-Aid. Then Mark, behind her. He went still in the way only she'd ever learned to read, the jaw, the half second of nothing, the filing away." }
    ], else: [
      { n: "He looked at her, then at Mark behind her, and something in his face went flat and shut, the way a door shuts when someone's leaning on the other side of it." }
    ] },
    { s: 'mark', f: 'neutral', t: "Hyuck." },
    { s: 'haechan', f: 'neutral', t: "Don't." },
    { n: "That was all. One syllable each. Two boys who'd been best friends since they were twelve stood at opposite ends of a kitchen in finals week with nothing between them but a burnt coffee pot and every word neither of them was going to say, and Renjun at the window took a long, slow drag and looked at the ceiling like a man watching weather come in over a lake." },
    { n: "She went to put her plate in the sink. That was all she was doing. She put the plate down on the steel and turned the tap and reached for the soap—" },
    { glitch: 'epi-r-g-kitchen' },
    { place: 'Syracuse · Sigma Chi House · Kitchen', time: 'Morning', soft: true },
    { n: "Mark saw it." },
    { n: "He'd been looking at the back of her head because he'd been looking at the back of her head since August, it was a thing he did, a thing he'd stopped pretending he didn't do, and so he was looking right at her when she wasn't there." },
    { n: "Not gone. Worse than gone. For one second the shape of her went thin at the edges, like a photograph held up to a window, and through her he could see the tap and the soap and the gray yard beyond the glass, and the light around her was green. He knew that green. He had stood in it in a city that didn't exist, on a night when every clock stopped, and watched a girl with her face fight something that wasn't there for anyone but her." },
    { n: "Then she was solid again, rinsing a plate, her back to the room. The tap ran. Jisung turned a flashcard. Haechan, at the coffee pot, hadn't been looking her way. Nobody else had seen a thing." },
    { n: "Mark put his mug down on the counter very carefully, as if it might go off." },
    { n: "He could have said it. He knew exactly what he could have said, and who to, and what it would have bought him: Jaehyun, a conversation, a *you need to know something about your sister,* the kind of currency he'd been spending his whole life. He could feel the shape of it in his mouth." },
    { n: "He said nothing. He picked his bag up off the floor and went out the back door into the cold without his coat, and stood in the yard with his hands in his armpits until his Statistics final, not telling anyone. It was the one thing he got right that December. He'd never know it was." },
    { stat: { courage: 1 } }
  ] },

  // ───────────────────────────── 12/16, late: unseen (fight 2) ─────────────────────────────
  { id: 'epi-r-unseen', date: '12/16', slot: 'late', title: 'unseen', place: 'Syracuse · Alpha Phi House · Stairs', time: 'Late Night', scene: [
    { music: 'epi-r-half' },
    { n: "She'd gone down for water. That was all. Midnight, socks, the second landing where the house turned on itself, Danielle's door at the end of the hall with no light under it for once, and her hand on the banister, and the banister going on." },
    { glitch: { stage: 3 } },
    { dark: true },
    { n: "Up. The stairs went up, past the landing, past the third floor, past where the house had a roof, a white banister turning into black-and-gold rail, carpet into tile, the smell of the radiators into the smell she would have known blind, cold stone and old air and something electric. Green light coming down from nowhere." },
    { n: "There were people on the stairs above her. Four of them, and a dog." },
    { n: "She knew the back of his head. She'd have known it from a mile off, the white hair, the set of the shoulders, a boxer's weight sitting forward on the balls of his feet. She knew the others by the shapes of their weapons before she knew their faces, and she knew the dog, who turned, and looked right at her, and started to bark." },
    { s: 'koromaru', f: 'neutral', t: "Arf! Arf arf!" },
    { s: 'akihiko', f: 'serious', t: "Koro, what is it? There's nothing there." },
    { n: "She said his name. She said it twice. It went out of her mouth into the green and landed nowhere at all, like shouting into a pillow, and he didn't turn around. None of them turned around. Only the dog, barking at a step where a girl was standing, and getting told to heel." },
    { s: 'fuuka', f: 'serious', t: "I'm reading Shadows ahead. And... something else. An unknown signal. Right beside you. I can't tell what it is." },
    { n: "Something moved on the stairs above them. Something with a mask. Akihiko's fists came up and the others moved around him the way they always had, the way she'd moved with them a hundred nights, and she was in the middle of it, and nobody could see her." },
    { battle: { id: 'epi-runners-2', kind: 'scripted', script: 'epi-runners-2', title: 'Unseen', forced: true,
      desc: 'The Alpha Phi stairs going up too far. S.E.E.S. are fighting, and they can’t see her.',
      notes: 'Half-present fight 2 (FEMC-EPILOGUE-PLAN 2.4, the ghost slot): Solar is in the party but untargetable; acts every other round; portrait flickers between turns; allies Act Freely; no Direct, Bond, All-Out or Theurgy; her heals land and allies bark ("Who did that?"); navigator reads "an unknown signal". Akihiko always plus two by her highest S.E.E.S. ranks; Koromaru can see her (barks at her slot). Cannot be lost: she fades home.' } },
    { n: "She healed him. She didn't decide to. A Shadow caught Akihiko across the ribs and the old reflex went off in her like a sneeze, and the light left her and found him, and the cut closed, and he stopped dead in the middle of the stairs with his hand on his side." },
    { s: 'akihiko', f: 'surprised', t: "...Who did that?" },
    { n: "Nobody answered him. Nobody could. He looked around, at the stairs, at the green, at the empty step where she was standing so close she could have touched his sleeve, and his face did something she couldn't bear to look at, the face of a man trying very hard not to hope for a specific thing." },
    { dark: false },
    { place: 'Syracuse · Alpha Phi House · Stairs', time: 'Late Night', soft: true },
    { n: "She was on the second landing with her hand on the banister and a glass in her other hand. Empty. She hadn't filled it yet. She was shaking so hard the glass was ringing against her ring, a thin small note in the dark, and she held it against her stomach to make it stop." },
    { n: "Under Danielle's door, at the end of the hall, a light came on." },
    { n: "Solar went back up the stairs. She counted them. There were exactly as many as there had always been." }
  ] },

  // ───────────────────────────── 12/17, evening: the butterfly ─────────────────────────────
  { id: 'epi-r-butterfly', date: '12/17', slot: 'evening', consumes: true, title: 'out loud', place: 'Syracuse · eSports Lab', time: 'Evening', scene: [
    { music: 'epi-r-bleed' },
    { n: "Doyoung's sign was still on the lab door, GO STUDY. I MEAN IT., and she went in anyway, because she had a key and a Media and Society final in the morning and nowhere else on campus was quiet enough to hear herself think. She didn't turn the lights on. She sat at her own setup in the blue of one monitor with the reader open and her headphones round her neck and the building humming around her, empty, the way it only ever hummed during finals." },
    { ifEpiRoute: 'haechan', then: [
      { n: "The fox looked up at her from her keyboard. Small, white, the red-and-white kitsune mask painted so carefully you could count the whiskers, sitting on the Escape key where she'd put it the night he gave it to her, so that every time she wanted out of something she'd have to press it." }
    ] },
    { n: "Something moved at the edge of the monitor's light." },
    { glitch: 'epi-r-g-butterfly' },
    { n: "A butterfly." },
    { n: "Blue. Not sky blue, not anything that lived in New York in December. A deep impossible blue that seemed to be lit from inside, the blue of a door she'd walked through a hundred times in another life, the blue of velvet and a piano playing somewhere down a long hall. It came down out of the dark of the drop ceiling in no hurry at all and settled, wings opening and closing, slow as breathing." },
    { ifEpiRoute: 'haechan', then: [
      { n: "On the fox. Exactly on the fox, as if it had been aiming." }
    ], else: [
      { n: "On her keyboard. On the Escape key, of all of them, as if it had been aiming." }
    ] },
    { n: "She didn't move. She'd learned not to move. She sat with her hands in her lap and watched its wings open and close and felt the building's hum go very far away, and then there were footsteps on the stairs from the second floor, and she knew whose they were, and she still didn't move." },
    { s: 'haechan', f: 'neutral', t: "Your light's the only one on in the building. You know that? You can see it from the parking lot." },
    { n: "He came and stood behind her chair. He looked at the screen, at the reader, at her. Then he looked down at her keyboard, and he stopped." },
    { n: "It was December. It was eleven degrees outside. There was a blue butterfly on her keyboard opening and closing its wings in the light of a monitor in a dark lab in Syracuse, and he looked at it for a long time, and she watched his face, the way she'd been watching it for a week, waiting for the conduit, the heat, the Jisung's-speaker, the wind." },
    { n: "It didn't come." },
    { s: 'haechan', f: 'serious', t: "...Don't." },
    { s: 'solar', t: "I didn't say anything." },
    { s: 'haechan', f: 'serious', t: "I'm not explaining it. That's what I mean. I'm not doing it anymore. The bleed in the conduit. The speaker. I've been doing it all week and I'm tired." },
    { n: "He pulled out the chair from Minji's setup and sat in it backward, his arms folded on the back of it, close enough that his knee was against her chair. The butterfly didn't fly. It just went on breathing on her keys like it had all the time in the world, which, maybe, it did." },
    { s: 'haechan', f: 'serious', t: "The snow went up on Monday. Everybody saw. You've had a Band-Aid on your hand since Sunday and you put your weight on the stairs like they might not be there." },
    { s: 'haechan', f: 'neutral', t: "It's coming through. Over there. Into here. Whatever we were in, it's leaking, and it's leaking through you." },
    { n: "He said it flat, the way he said everything, the way he'd say a bridge was sitting too low in a mix, and it was the most frightening thing anyone had said to her since she'd come home, and she was so relieved she could have cried." },
    { ifEpiRoute: 'haechan', then: [
      { s: 'solar', t: "You said it out loud." },
      { s: 'haechan', f: 'neutral', t: "Rule's the rule. Before, not after. Even when it's ugly." },
      { n: "He reached out and put one finger on the desk beside the keyboard, next to the fox, not touching the butterfly, and it walked onto his finger the way something walks onto a branch, and he lifted it, very slowly, and they both watched it sit there on his hand in the blue light." },
      { s: 'haechan', f: 'neutral', t: "...I know this color. I don't know how I know it. I've never seen it once in my life and I know it." }
    ], else: [
      { s: 'solar', t: "Why are you telling me this." },
      { s: 'haechan', f: 'neutral', t: "Because you're the only other person who knows. And I'd rather you heard it from someone who isn't going to tell you it's the wind." },
      { n: "He looked at the butterfly and not at her, which was how she knew he'd come down the stairs on purpose, from a studio where he could see the lab's one light, and had been deciding for a while whether to." }
    ] },
    { n: "Then it lifted off and went up into the dark of the drop ceiling, and was gone, the way all of them went, mid-thought, leaving nothing behind but the knowledge that it had been there." },
    { flag: 'epi-r-said-it' },
    { s: 'haechan', f: 'neutral', t: "If it happens again. When. You call me. Not after. While." },
    { choose: [
      { t: "While. I promise.", then: [
        { s: 'haechan', f: 'neutral', t: "Good." },
        { n: "He didn't get up. He stayed in Minji's chair turned backward and opened his laptop on his knees and worked on something with the sound off, and she studied for her final with his knee against her chair, and neither of them said anything else for two hours, and it was the safest she'd felt since the snow went up." }
      ] },
      { t: "What are you going to do. Hold on to me?", then: [
        { s: 'haechan', f: 'serious', t: "Yeah." },
        { n: "He said it before she'd finished the question. Not a joke. Not a performance. Just yes, as if it were the only answer there had ever been and he was surprised she'd needed to ask, and she looked at him in the blue light and couldn't think of a single dry thing to say." }
      ] }
    ] },
    { bond: { haechan: 1 } }
  ] },

  // ───────────────────────────── 12/18, morning: the clocks ─────────────────────────────
  { id: 'epi-r-clocks', date: '12/18', slot: 'early', consumes: true, title: 'twelve', place: 'Syracuse · Alpha Phi House · Kitchen', time: 'Morning', scene: [
    { music: 'epi-r-bleed' },
    { n: "Hyein found it first, because Hyein was always up first during finals, because she didn't really sleep during finals, she lay down at four and got up at six and called it a nap. She came into Solar's room without knocking with her hair in a claw clip and her face doing something Solar had never seen it do." },
    { s: 'hyein', f: 'surprised', t: "Come downstairs. Don't ask. Just come." },
    { glitch: { stage: 3 } },
    { glitch: 'epi-r-g-clocks' },
    { n: "Every clock in the house said 12:00." },
    { n: "The microwave. The oven. The cable box in the living room, the old brass clock on the mantel that had been in the house since 1964 and was wound by the house mother every Sunday whether it needed it or not, the cheap plastic one over the pantry door, the alarm clock on the chapter-room desk, the little digital readout on the coffee maker blinking 12:00, 12:00, 12:00 like it was trying to tell them something very slowly. Hanni's watch. Hyein's watch. The grandfather clock at the foot of the stairs that Danielle had once called *a liability* in a budget meeting, both hands straight up, not ticking." },
    { n: "Their phones said 7:42. Their phones were fine. Every clock that could stop had stopped at exactly the same minute, and no clock that couldn't had." },
    { n: "Half the house was in the kitchen in pajamas, standing around the island like it was a crime scene. Chungha was on the phone with an electrician, saying *no, all of them, even the wind-up ones,* in the voice of a president who'd hoped finals week would be quiet. Olivia was filming the grandfather clock and narrating. Yerim was trying to reset the microwave and kept getting 12:00 back, and laughing, and then not laughing." },
    { s: 'olivia', t: "WE ARE HAUNTED. Alpha Phi is HAUNTED. This is the best thing that has ever happened in this house." },
    { s: 'yerim', t: "It keeps going back. I set it and it goes back. Why does it keep going back?" },
    { n: "Hanni was at the bottom of the stairs with her hand on the grandfather clock's case. She wasn't filming. She wasn't saying anything. She was looking at Solar coming down the stairs, the way she'd looked at her on the quad on Monday with the coffee lids popped off, and Solar understood that Hanni had already decided something, alone, at seven in the morning, and had been waiting for her to come down to find out what." },
    { s: 'hanni', f: 'serious', t: "It's yours. Isn't it." },
    { n: "Not an accusation. Just a fact, set down on the counter between them where they could both look at it." },
    { s: 'hyein', f: 'sad', t: "Monday the snow. Sunday your hand. Last night you came up the stairs at like twelve-oh-two and I heard you count them. Out loud. Sol, you counted the stairs." },
    { choose: [
      { t: "Yes. It's mine. I don't know how to stop it.", then: [
        { n: "It came out quiet. It came out true. Hanni let go of the clock and came across the hall and took both her hands, the way she'd taken them on the shuttle, one each, and Hyein came up behind her and put her chin on Solar's shoulder, and the three of them stood at the bottom of the stairs in their pajamas in a house where every clock had stopped, holding on." },
        { s: 'hanni', f: 'neutral', t: "Okay. Then it's ours. Like the cabin. We hold it." },
        { s: 'hyein', f: 'sad', t: "We are SO bad at holding normal things. We're going to be incredible at this." }
      ] },
      { t: "(Lie.) It's the electrics. Old house. Chungha's calling someone.", then: [
        { glitch: { strain: 1 } },
        { n: "Her father's daughter. Smooth as a wineglass, not a hitch. Behind her the grandfather clock made a sound it hadn't made in years, a single deep tick, as if it disagreed." },
        { s: 'hanni', f: 'sad', t: "...Okay, Sol." },
        { n: "Hanni said it the way you say okay to someone on a ledge. She didn't let go of the clock. Hyein didn't say anything at all, which was how Solar knew how bad it was." }
      ] }
    ] },
    { n: "At the top of the stairs, on the second landing, Danielle stood in a cream robe with a mug in her hand, looking down at the grandfather clock with an expression of polite, total interest, like someone reading a line item that didn't add up. She didn't come down. She didn't film it. She just looked at the clock, and then at Solar, and then went back to her room and shut the door with that small, precise, almost polite sound." },
    { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', soft: true },
    { phone: [
      { from: 'dad', t: 'Good morning, Solar. This is Ms. Han.' },
      { from: 'dad', t: 'Today is the eighteenth. Mr. Lee asks you to confirm your winter break travel so the arrangements can be completed. The car is booked for Sunday at 9:00 a.m. for you and Jaehyun.' },
      { from: 'dad', t: 'He also asked me to note, again, that he is still waiting for the name of the trip’s faculty advisor.' }
    ], contact: 'Dad' },
    { n: "The clock on her desk said 12:00. Her phone said 7:58. She sat on the edge of the bed with both in front of her and the cursor blinking in the reply box." },
    { choose: [
      { t: "(Confirm.) confirmed. thank you ms. han. see you sunday", flag: 'epi-r-travel-yes', then: [
        { phone: [{ from: 'solar', t: 'confirmed. thank you ms. han. see you sunday' }, { from: 'dad', t: 'Thank you, Solar. I’ll let him know.' }], contact: 'Dad' },
        { n: "She'd go home. Of course she'd go home. She'd sit at the table set for four with her place card on it and her father at the head, and she'd say the right thing without using any of the words, the way she'd been raised to. She knew exactly how. That was the worst part. She knew exactly how." }
      ] },
      { t: "(Don't answer. Not today.)", flag: 'epi-r-travel-no', then: [
        { n: "She turned the phone face down on the desk next to the stopped clock. The car was booked anyway. She knew that. Her father's office booked things whether you answered or not; answering was only ever a courtesy you extended so they could pretend it had been a question." },
        { n: "But she didn't answer. For one day she let it not be a question she'd answered, and that was something, and it was hers." }
      ] }
    ] }
  ] },

  // ───────────────────────────── 12/18, late: unheard (fight 3) ─────────────────────────────
  { id: 'epi-r-unheard', date: '12/18', slot: 'late', title: 'unheard', place: 'Syracuse · The Quad', time: 'Late Night', scene: [
    { music: 'epi-r-half' },
    { n: "She didn't wait for it to find her in her room. She couldn't. She put her coat on over her pajamas at a quarter to twelve and went out into the cold, onto the quad, because if it was going to happen she wanted it to happen somewhere with sky over it." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [{ from: 'solar', t: 'quad. bell tower. now' }, { from: 'haechan', t: 'coming' }], contact: 'haechanah' }
    ], else: [
      { phone: [{ from: 'solar', t: 'quad. bell tower. you said while' }, { from: 'haechan', t: 'coming' }], contact: 'haechanah' }
    ] },
    { n: "The bell tower said a quarter to twelve, and then ten to, and then it said midnight, and the first stroke rang out over the snow, and the second didn't." },
    { glitch: { stage: 4 } },
    { dark: true },
    { n: "The quad was green. The lamps were out. The bell tower went up and up and didn't stop, stone giving way to something black-and-gold and impossibly tall, and all along the paths there were coffins, standing upright in the snow where students should have been walking home." },
    { n: "And S.E.E.S. were fighting on the chapel steps." },
    { n: "This time when she ran toward them, Akihiko turned around." },
    { s: 'akihiko', f: 'surprised', t: "Solar?!" },
    { n: "He saw her. He was looking straight at her across the snow, at her coat over her pajamas and her bare hands and her hair coming loose, and his whole face broke open. She shouted his name. She shouted it so hard it hurt her throat, and his mouth moved, and nothing came across the green between them. Not a sound. Like a film with the sound cut." },
    { s: 'fuuka', f: 'serious', t: "I can see her on the readings. I can't hear her. But she's *there*. She's right there." },
    { s: 'akihiko', f: 'serious', t: "...Sol? Sol, can you hear me?" },
    { n: "She could. She could hear every word. She nodded so hard her teeth clicked. He couldn't tell what it meant. She could see him not being able to tell." },
    { n: "Then something came down off the tower at them, and there wasn't time for anything but the old way, the way they'd always done it, her hand pointing and his eyes following her hand." },
    { battle: { id: 'epi-runners-3', kind: 'scripted', script: 'epi-runners-3', title: 'Unheard', forced: true,
      desc: 'The quad at midnight, the bell tower going up into Tartarus. They can see her now. Nobody can hear her.',
      notes: 'Half-present fight 3 (FEMC-EPILOGUE-PLAN 2.4): Solar can be hit (half damage); her Talk is "…"; partial control: a skill or Analyze on a foe marks it and allies start following her marks. Barks know her ("Solar?!", Akihiko "…Sol?", Fuuka "I can’t hear her, but she’s there"). Cannot be lost: she fades home.' } },
    { n: "He followed her marks. Every one. She'd point and he'd go, she'd hit something and he'd turn on it, the two of them fighting like a single argument they'd been having for a year in a language only they spoke, and when the last thing fell he turned to her across the snow with his fists still up and his chest heaving and said something she heard perfectly, and he didn't know she had." },
    { s: 'akihiko', f: 'sad', t: "We kept your room. Just so you know. In case you can hear me. We never touched a thing." },
    { dark: false },
    { place: 'Syracuse · The Quad', time: 'Late Night', soft: true },
    { n: "Then the bell rang the second stroke, and the third, and she was on her knees in the snow at the foot of the tower and someone had her by both shoulders." },
    { s: 'haechan', f: 'serious', t: "Solar. Solar. Look at me." },
    { n: "Her name. Not princess. Not pretty. The real one, which he only ever used when he'd stopped performing altogether, and he was kneeling in the snow in a hoodie with no coat, out of breath, his hands on her shoulders like he was checking she was a solid object." },
    { s: 'haechan', f: 'serious', t: "You weren't here. I got here on the first bell and you weren't here, and then you were. You were *gone*, I was standing where you're standing." },
    { s: 'solar', t: "They kept my room." },
    { n: "He didn't know what that meant. He didn't ask. He pulled her up out of the snow and put his hoodie on her over her coat, which made no sense and which she didn't argue with, and walked her back to Alpha with his arm around her the whole way, the bell tower behind them telling the right time." },
    { bond: { haechan: 1 } }
  ] },

  // ───────────────────────────── 12/19, evening: the Sigma holiday party (fight 4) ─────────────────────────────
  { id: 'epi-r-holiday', date: '12/19', slot: 'evening', consumes: true, faces: 'runners-holiday', title: 'the holiday party', place: 'Syracuse · Sigma Chi House · Holiday Party', time: 'Evening', scene: [
    { music: 'epi-r-holiday' },
    { n: "The last Friday before break, Sigma put on a jacket. That was the only way to describe it. The Friday party, the one that happened weekly without fail, had shaved and put on a tie and hung lights from every surface that would take a staple, and called itself a holiday party, and behaved, for the first hour, like it believed it." },
    { n: "Jaemin had hosted it the way some people direct films. There was a run of show on the fridge in his handwriting, doors at eight, Jeno, a speech at nine, a photo wall at ten that was just a bedsheet with tinsel safety-pinned to it, and at the bottom, underlined twice, *12:00 · the toast (EVERYONE).* Under that, smaller, in a different pen: *NO PINK PUNCH.* Under that, smaller still, in a third: *there is pink punch.*" },
    { cg: 'epi-r-holiday' },
    { n: "Jeno handled the room. That was his job and his whole nature, an accelerant in a Christmas sweater, a hand on every back, a cup in every empty hand, pouring from a bowl he swore on his mother was eggnog. Renjun had the kitchen doorway and the face of a man at a wake he'd been looking forward to. Jisung had finally connected the speaker and was standing next to it like it was a child he'd raised." },
    { ifYear: { noFlag: 'arrived-jaemin' }, then: [
      { s: 'jaemin', f: 'happy', t: "The emergency vacationer! You made it to a party of mine in at least one universe. Growth." }
    ], else: [
      { s: 'jaemin', f: 'happy', t: "The emergency vacationer! Look at you. Hyein, look at her. You did that. That's a crime. In a good way." }
    ] },
    { n: "Hyein had done it. Wine-red silk, cut on the bias, long sleeves and almost no back at all, and Solar had stood in front of the mirror in Hanni and Hyein's room at seven-thirty and not recognized the girl in it and then, slowly, recognized her, which had been worse and better." },
    { s: 'jaemin', f: 'neutral', t: "Toast at midnight. Everyone. That means you. I'm going to say something about the emergency vacation and you're going to laugh like it's the first time." },
    { s: 'solar', t: "Midnight." },
    { s: 'jaemin', f: 'happy', t: "It's tradition. As of tonight." },
    { n: "She looked at the clock over the Sigma fireplace. It said 8:51. It was telling the right time. She checked her phone anyway, which also said 8:51, and put it away, and felt the evening open in front of her like a staircase in the dark, every step there, until one of them wasn't." },
    { cg: null },
    { n: "Danielle was on the stairs. Three steps up, the way she always was, in black, a glass of something clear in her hand she wasn't drinking, her phone in the other. She'd done the budget for this party. Everyone knew she had, because she'd put *approved, D. Marsh* on the bottom of the spreadsheet in a font size that suggested she'd like it engraved. She lifted the glass an inch toward Solar. *Wear something you'd like to be remembered in,* she'd said on Tuesday. Solar had." },
    { ifFlag: 'epi-r-danielle-initial', then: [
      { n: "Solar's initials were on that spreadsheet, too, small, on a guest-list line she'd signed for the records. She thought about that now. She thought Danielle was thinking about it too." }
    ] },

    // The Haechan route: the stairs, the sequence, the pull
    { ifEpiRoute: 'haechan', then: [
      { music: 'epi-r-romance' },
      { n: "He'd worn the shirt. She hadn't been sure he would. Black silk, Hyein's, cut close, the sleeves pushed up, and when Solar touched the collar at the door to fix it she felt the embroidery inside it under her thumb, a tiny gold sun stitched where only the person who wore it would ever know it was there, and she looked at him, and he looked at the ceiling." },
      { s: 'haechan', f: 'neutral', t: "Hyein said it was structural." },
      { s: 'solar', t: "It's a sun." },
      { s: 'haechan', f: 'neutral', t: "Structurally." },
      { n: "They were careful for two hours. They'd decided to be. They stood near each other and not with each other, they talked to other people, he got pulled into the kitchen by Jeno to judge the eggnog and declared it *a hate crime* and drank it anyway, and every so often across a room she'd find him already looking at her, and he wouldn't look away, and neither would she, and that was the whole conversation." },
      { ifFlag: 'epi-r-public-post', then: [
        { n: "Everyone knew. She'd posted *hi* herself a week ago in the front hall of this house. It didn't stop people looking. It just meant they looked at both of them now instead of trying to decide." }
      ], else: [
        { n: "The four people on the list knew. Everyone else could guess, and was, out loud, near the punch bowl." }
      ] },
      { n: "At eleven-fifty he found her by the stairs. He didn't say anything. He put two fingers on the inside of her wrist, very lightly, the way you'd check a pulse, and looked up the stairs, and then back at her, and asked." },
      { s: 'haechan', f: 'serious', t: "Yes?" },
      { s: 'solar', t: "Yes." },
      { n: "They went up. Past the first landing, past the photo wall nobody had used, past where the music turned into bass through the floor. Halfway up, on the landing where the staircase turned and you couldn't see down or up, he stopped her with a hand on her waist and turned her round against the wall, and she was already reaching for his collar, for the sun inside it." },
      { n: "He kissed her like he'd been waiting two hours and a whole fall and a year in another city to do it in a house full of people, slow and then not slow, his hand flat on the bare small of her back where Hyein's dress didn't go, her breath going out of her against his mouth. Somewhere below them a door opened and a wave of party came up the stairs, the bass and somebody's laugh and Jaemin's voice saying *two minutes, people, find a glass,* and neither of them stopped." },
      { n: "And at the bottom of the stairs, where the light was, someone stood with a phone held up at an angle that caught the whole landing." }
    ] },

    // The cover route: the three of them, the toast, the girls covering
    { ifEpiRoute: 'cover', then: [
      { music: 'epi-r-sisters' },
      { n: "Hyein had put all three of them in the same wine, three different cuts, which she said was a *statement* and Hanni said was a *uniform*. They moved through the party in formation, the way they'd been moving for a week, Solar in the middle, a girl on each arm." },
      { n: "Every half hour Hanni checked her watch. It was telling the right time tonight. She checked it anyway, and then she checked Solar's face, and then she laughed at whatever Jaemin was saying, perfectly on cue, and Solar had never loved anyone the way she loved her in that moment for being so good at pretending in the right direction." },
      { s: 'hyein', f: 'serious', t: "Eleven fifty-two. Okay. If anything, like. Happens. Hanni goes left, I go loud." },
      { s: 'hanni', f: 'neutral', t: "We are not going loud." },
      { s: 'hyein', f: 'serious', t: "I'm going SO loud. It's a plan. It's a good plan. It's the only plan we've got." },
      { n: "At eleven fifty-eight Jaemin stood on the coffee table and the whole room found a glass. Hanni had her left hand. Hyein had her right. On the stairs, three steps up, Danielle lifted her phone, as if to film the toast, which everyone was doing, which was what made it perfect." }
    ] },

    // The Minji route: the camera that asks
    { ifEpiRoute: 'minji', then: [
      { music: 'epi-r-closure' },
      { n: "Minji was working again, the house account, paid in pizza, moving through the party with the camera low against her stomach and asking everyone first. She'd asked Solar at the door. She'd asked again at ten. At eleven-forty she came and stood next to her by the fireplace and didn't raise the camera at all." },
      { s: 'minji', f: 'neutral', t: "It's midnight in twenty minutes." },
      { s: 'solar', t: "I know." },
      { s: 'minji', f: 'serious', t: "You've been looking at that clock all night. Every clock. Since Monday you've been looking at every clock." },
      { ifFlag: 'epi-r-reel-yes', then: [
        { s: 'minji', f: 'neutral', t: "You said yes to the reel. All of it. I'm asking anyway: do you want me filming at midnight? You can say no. I'll put it away." }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Do you want me filming at midnight? You can say no. I'll put it away. I'll put it in the car." }
      ] },
      { n: "Solar looked at her. At the camera, at the hand flat over the lens cap, at the only person on earth who had never once taken anything from her without asking first." },
      { s: 'solar', t: "Keep it rolling. Whatever happens. I want someone to have it who asked." },
      { n: "Minji's face did something very small. Then she took the lens cap off, and pressed the button, and the little red light came on, and she held it steady against her chest, pointed at Solar, and at eleven fifty-nine Jaemin climbed onto the coffee table and the whole room found a glass. On the stairs, three steps up, Danielle lifted her phone too. Two red lights. One had asked." }
    ] },

    { n: "The clock over the fireplace said 12:00." },
    { glitch: { stage: 4 } },
    { glitch: 'epi-r-g-midnight' },
    { dark: true },
    { music: 'epi-r-half' },
    { n: "The party went green." },
    { n: "Not stopped, this time. Green, and *going,* the room peeling back like wallpaper off a wet wall, the lights and the tinsel and Jaemin on the coffee table with his glass up and his mouth open, all of it going thin and far, and behind it, through it, a tower, a sky the wrong color, a moon so big and so close she could have touched it. Her body came apart at the edges into light. She could see her own hand go through itself." },
    { n: "And she was standing in Tartarus, at the top of something, with S.E.E.S. around her, and for the first time, the very first time since she'd come home, Akihiko looked at her and she said his name and he *heard* it." },
    { s: 'akihiko', f: 'surprised', t: "Sol—" },
    { battle: { id: 'epi-runners-4', kind: 'scripted', script: 'epi-runners-4', title: 'One Second', forced: true,
      desc: 'The Sigma holiday party, at the stroke of midnight, and somewhere else at the same time. For one round, they can hear her.',
      notes: 'Half-present fight 4 (FEMC-EPILOGUE-PLAN 2.4): banner ONE SECOND; for exactly one round (contactRound) allies obey Direct and she can use a Bond skill with Akihiko or an All-Out; then she is pulled away (interrupt after the contact round). Cannot be lost.' } },
    { n: "One second. One round. She'd never fought so fast in her life. She called it and he moved, all of them moved, the way they had a hundred nights, and the light left her hands and his fist came down with it, the two of them at once, and something enormous broke apart into green dust, and in the ringing after he turned to her with his hand already reaching—" },
    { s: 'solar', t: "I'm okay. Tell them I'm okay. I'm—" },
    { dark: false },
    { place: 'Syracuse · Sigma Chi House · Holiday Party', time: 'Late Night', soft: true },
    { music: 'epi-r-holiday' },
    { n: "—and Jaemin's glass came down from over his head, and the whole room was shouting *happy holidays,* and someone threw tinsel, and it was 12:00 and one second." },
    { ifEpiRoute: 'haechan', then: [
      { n: "She was against the wall on the landing. He had his arms around her so tight her ribs hurt, his face in her hair, breathing like a man who'd come up from underwater, and he didn't say anything at all for a long time." },
      { s: 'haechan', f: 'serious', t: "...My hands went through you. You were here and my hands went *through* you." },
      { s: 'solar', t: "I'm here." },
      { s: 'haechan', f: 'serious', t: "Say it again." },
      { n: "She said it again. She said it into his collar, into the sun, and then she took his hand and went up the last flight of stairs and opened the door to his room, and he looked at her in the doorway with the bass coming up through the floor, and asked one more time, out loud, before, not after, and she said yes, and the door closed, and the rest of the night was theirs and nobody else's." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Hanni had her hand in both of hers and was holding it so hard the bones ground together. Hyein was not beside her. Hyein was on the arm of the couch, glass up, shouting the toast louder than any human being had ever shouted a toast, *TO THE EMERGENCY VACATION,* and forty people turned to look at her and roared it back, and nobody, not one person in that room except the three of them, was looking at Solar." },
      { s: 'hanni', f: 'serious', t: "You went see-through. Sol. You went *see-through*. I could see the fireplace." },
      { s: 'solar', t: "Get me outside." },
      { s: 'hanni', f: 'neutral', t: "Walking. We're walking. Smile. We smile now." },
      { n: "They walked her out through the front door into the snow with her between them, laughing like girls who'd had too much eggnog, Hyein's arm round her waist under the coat, and the cold hit her face and she breathed it in like it was the first air she'd ever had." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Minji hadn't moved. She was standing exactly where she'd been, the camera against her chest, the red light still on, and her face was white." },
      { s: 'minji', f: 'serious', t: "I've got it. I've got all of it. You were... I've got it." },
      { s: 'minji', f: 'sad', t: "I didn't stop. You said don't stop. I didn't stop." },
      { n: "Solar took her free hand. Minji's fingers were ice. Around them the party roared its toast and threw its tinsel and nobody, not one person, had been looking at the girl by the fireplace except the one who'd asked first." }
    ] },
    { n: "On the stairs, three steps up, Danielle lowered her phone. She looked at the screen. She looked at it for a long time, and for the first time in all the time Solar had known her, she didn't look like a girl updating a chart. She looked like a girl who'd seen something she didn't have a column for." },
    { bond: { danielle: 2 } }
  ] },

  // ───────────────────────────── 12/19, late: the footage ─────────────────────────────
  { id: 'epi-r-footage', date: '12/19', slot: 'late', title: 'the footage', place: 'Syracuse · Alpha Phi House · Stairs', time: 'Late Night', scene: [
    { music: 'epi-r-footage' },
    { ifEpiRoute: 'haechan', then: [
      { place: 'Syracuse · Sigma Chi House · His Room', time: 'Late Night' },
      { n: "Two in the morning. His room, the lamp off, the blinds open on the snow, the sun-collared shirt somewhere on the floor where neither of them would think about it until morning. He was asleep with his arm across her ribs. He said something in Korean, very low, a number, a time, like he was reading it off a chart she couldn't see." },
      { n: "Her phone lit on the nightstand." },
      { phone: [
        { from: 'danielle', t: 'I think you should see this before anyone else does.' },
        { from: 'danielle', t: '[video · 0:41]' }
      ], contact: 'Danielle' },
      { n: "She watched it with the sound off, the brightness all the way down, his arm heavy across her." },
      { cg: 'epi-r-footage' },
      { n: "The staircase from below. Her first, alone at the foot of it with a red cup, looking back over her shoulder at the lens. Then the landing. The two of them, unmistakable, her dress, his shirt, his hand on her back, her hand at his collar, the kind of footage a girl like Danielle had been waiting all semester to have. She watched it with her stomach in her throat, the old sick drop, *here it is, here it finally is,* and then the timestamp in the corner turned over to 12:00:00." },
      { n: "And she wasn't there." },
      { n: "One second. His arms closed around a shape that was her and then was light, green light, his hands going through where her waist had been, and behind where she should have been, the wall of the Sigma stairwell was gone, and there was a tower. Then 12:00:01, and she was back in his arms, and he was holding her like he'd never let anything go in his life." }
    ], else: [
      { n: "Two in the morning. The second landing, where the house turned on itself, the light under Danielle's door on, and Danielle herself sitting on the top step of the second flight in a black dress with her heels beside her and her phone in both hands, as if she'd been waiting. She had. Solar had known she would be." },
      { s: 'danielle', f: 'neutral', t: "Sit down. Please." },
      { n: "*Please.* Solar had never heard her say it. She sat. Danielle turned the phone around and held it out, and didn't let go of it, so they were both holding it." },
      { cg: 'epi-r-footage' },
      { ifEpiRoute: 'cover', then: [
        { n: "The living room from the stairs. Jaemin on the coffee table. Forty glasses going up. Solar at the foot of the stairs with a red cup, looking back over her shoulder at the lens, Hanni and Hyein a step behind her, three girls in wine, and the timestamp turning over to 12:00:00." },
        { n: "And she wasn't there. Hanni's hand was holding a hand that was light. Through the place where Solar had been standing, the fireplace, and behind it, where a wall should have been, a tower. Green light. One second. Then 12:00:01, and she was back, and Hyein was on the arm of the couch screaming a toast, and Hanni was pulling her toward the door, and the two of them were laughing, perfectly, while their faces said something else entirely." }
      ] },
      { ifEpiRoute: 'minji', then: [
        { n: "The living room from the stairs. Jaemin on the coffee table. Forty glasses going up. And at the foot of the stairs, Solar with a red cup, looking back over her shoulder, and Minji at the edge of the frame with her camera up and pointed at her, its little red light like an eye, and the timestamp turning over to 12:00:00." },
        { n: "And she wasn't there. The camera was pointed at nothing. At light, green light, at a fireplace and behind it, where a wall should have been, a tower. One second. Then 12:00:01, and she was back, and Minji hadn't moved an inch." },
        { s: 'danielle', f: 'neutral', t: "She got it too. Kim Minji. Hers will be better. She doesn't shake." }
      ] }
    ] },
    { cg: null },
    { n: "Something impossible. On a phone, with a timestamp. Not a green frame you could call a fault on the card or a print you could call a chemical mistake. Forty-one seconds of video of a girl flickering out of the world at midnight in front of forty people who hadn't seen it, and one who had." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'danielle', t: "I filmed the stairs because I wanted the stairs. You know what I wanted. You can think whatever you want about me." },
        { from: 'danielle', t: "But I watched it eleven times and I don't know what I'm looking at. And I don't like not knowing what I'm looking at." }
      ], contact: 'Danielle' },
      { n: "He'd woken up. He was looking at the screen over her shoulder. He didn't say anything. He just put his arm back round her, tighter, and watched it with her a second time, and at 12:00:00 his breath stopped and so did hers." }
    ], else: [
      { s: 'danielle', f: 'neutral', t: "I filmed the toast because I wanted you in the toast. You know why. You can think whatever you want about me." },
      { s: 'danielle', f: 'serious', t: "But I've watched it eleven times and I don't know what I'm looking at. And I don't like not knowing what I'm looking at." }
    ] },
    { ifYear: { noFlag: 'arrived-danielle' }, then: [
      { n: "*You never saw me there,* she'd said, in the kitchen, the second morning. *I saw you.* Solar understood now that she'd meant it as a threat and it had been the truth, and that the truth had been frightening her for three weeks too." }
    ] },
    { ifYear: { flag: 'danielle-refused' }, then: [
      { ifEpiRoute: 'haechan', then: [
        { phone: [
          { from: 'danielle', t: "You wouldn't trade with me over there. Not once. It was very irritating." },
          { from: 'danielle', t: "So here. It's yours. I've deleted mine. All of it, the cloud too. I'm sending you the screen recording of me doing it, because you'll want a receipt. I would." },
          { from: 'danielle', t: "Don't make me regret having been unspent." }
        ], contact: 'Danielle' }
      ], else: [
        { s: 'danielle', f: 'neutral', t: "You wouldn't trade with me over there. Not once. It was very irritating." },
        { n: "She took the phone back. She AirDropped the video to Solar, and Solar's phone buzzed in her pocket with it. Then she opened her own photos and deleted it, and the deleted folder, and her cloud, one at a time, with the screen turned so Solar could watch, like a girl reading a receipt back at a register." },
        { s: 'danielle', f: 'neutral', t: "It's yours. I don't have it anymore. I wanted you to watch me not have it." },
        { s: 'danielle', f: 'happy', t: "Don't make me regret having been unspent." }
      ] },
      { flag: 'epi-r-footage-file' },
      { n: "It was the strangest gift anyone had ever given her. It was, she'd think later, the only time Danielle Marsh had ever done anything for nothing, and she'd done it like it cost her a tooth." }
    ], else: [
      { ifYear: { flag: 'danielle-sold' }, then: [
        { ifEpiRoute: 'haechan', then: [
          { phone: [
            { from: 'danielle', t: "You let me take one, over there. You stood still and let me." },
            { from: 'danielle', t: "I've sent this to someone who deserves to know. Not SUnews. I wouldn't do that to it. Someone with your last name." },
            { from: 'danielle', t: "Have a good break, Solar." }
          ], contact: 'Danielle' }
        ], else: [
          { s: 'danielle', f: 'neutral', t: "You let me take one, over there. Do you remember? You stood still and let me." },
          { s: 'danielle', f: 'happy', t: "I've already sent it. Not to SUnews. I wouldn't do that to it. To someone who deserves to know. Someone with your last name." },
          { s: 'danielle', f: 'neutral', t: "Have a good break, Solar." }
        ] },
        { flag: 'epi-r-footage-sent' },
        { n: "*Someone with your last name.* There were three people with her last name who'd care, and only one of them was in a frat house on Walnut Avenue, asleep, with a car booked for nine in the morning on Sunday. She thought about the car. She thought about the inside of it, for four hours, down the Thruway, in the snow." }
      ], else: [
        { ifEpiRoute: 'haechan', then: [
          { phone: [
            { from: 'danielle', t: "I'm keeping it. I want you to know that. I'm not sending it to anyone, and I'm not deleting it." },
            { from: 'danielle', t: "It's the only true thing I've ever filmed. I haven't decided what it's for yet." }
          ], contact: 'Danielle' }
        ], else: [
          { s: 'danielle', f: 'neutral', t: "I'm keeping it. I want you to know that. I'm not sending it to anyone, and I'm not deleting it." },
          { s: 'danielle', f: 'neutral', t: "It's the only true thing I've ever filmed. I haven't decided what it's for yet." },
          { n: "She stood up, heels in one hand, phone in the other, and went to her door, and stopped in it the way she always did. Solar braced for the line. It didn't come. Danielle just looked at her for a moment from the doorway, and then went in, and shut the door, and the light underneath it stayed on until morning." }
        ] },
        { flag: 'epi-r-footage-kept' }
      ] }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Minji texted at three. *i've watched mine. i'm not showing anyone. i'm keeping it somewhere safe. i asked you first and you said yes and i'm holding you to it. go to sleep, sol.* She didn't go to sleep." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "When she went back down the hall, Hanni and Hyein's door was open a crack, and the fairy lights were on, and they were both on the floor in their wine dresses, waiting up, the way the floor was for crises. She lay down between them without saying anything. Nobody slept." }
    ] }
  ] },

  // ───────────────────────────── 12/20, morning: the first snow ─────────────────────────────
  { id: 'epi-r-first-snow', date: '12/20', slot: 'early', consumes: true, title: 'first snow', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'epi-r-snow' },
    { n: "It had been snowing on and off for three weeks, the way Syracuse snowed in December, a little here, a little there, gray by noon. This wasn't that. She woke up on Saturday to a light she'd never seen through the pink curtains, white and soft and coming from everywhere at once, and when she pulled them back the whole campus was gone under it. The first real snow of the winter. The kind that stayed." },
    { n: "Finals were over. The last one had been yesterday at two, and she'd walked out of it into the cold and stood on the steps of the building for a full minute not knowing what to do with her hands. The house was already half empty, girls hauling suitcases down the stairs, somebody's dad double-parked on Walnut with the hazards going. Tomorrow the car came at nine." },
    { n: "Her phone lit on the desk. NEW POST. @SUnews. A photo: the Sigma living room at midnight, a blur of raised glasses and tinsel and the fireplace, nobody's face sharp enough to name. The caption underneath: *happy holidays from sigma chi! 🎄 some of us really know how to disappear 😉*" },
    { n: "No faces. Just the toast, the tinsel, the fireplace. A caption with a knife folded into it, the way they always were. Two thousand likes by eight a.m. and a comment thread full of people asking who'd disappeared, and somebody answering *the emergency vacation girls obv,* and forty people laughing at it." },
    { n: "She read it once. Then she put the phone face down on the desk and went and looked at the snow instead, because the snow was there, and it was falling the right way, and for once she didn't feel any need to win." },
    { ifFlag: 'epi-r-footage-sent', then: [
      { n: "There was a text from Jaehyun underneath it, which she'd seen first and read second. *Car's at nine tomorrow. We'll talk in it.* Five words and a period. She knew every one of them." }
    ] },
    { n: "Her suitcase was open on the bed. Under the suitcase, in the corner, was the bag she hadn't unpacked since the trip. She'd been stepping round it for three weeks." },
    { ifEpiRoute: 'haechan', then: [
      { n: "She knelt down and unzipped it. Socks, a sweater she'd forgotten she owned, a hairbrush, all of it smelling faintly of somewhere else. And at the bottom, folded small, the way you'd fold something you couldn't throw away and couldn't look at, his jacket." },
      { n: "She didn't take it out. Not yet. She lifted it, folded, and put it in the tote bag she was going to carry tonight, and zipped the tote, and sat back on her heels with her hand flat on the outside of it, feeling the shape of it through the canvas, and the vanilla came up off it anyway, faint, the way it always would." }
    ], else: [
      { n: "She knelt and unzipped it, and packed the sweater and the socks into the suitcase, and left the bottom of the bag alone. Whatever was down there could stay down there. Some things you carried home without unpacking." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { s: 'hyein', f: 'happy', t: "SOL. SNOW. ROOF. Tonight. You said you know a roof. You said it like you were in a movie. Take us to the roof." },
      { s: 'hanni', f: 'neutral', t: "We're not leaving you alone tonight. That's not a question. We're just telling you where we'll be, which is wherever you are." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'minji', t: 'first real snow. i want to shoot it from somewhere high' },
        { from: 'minji', t: 'you said you know a roof. can i come. you can say no' },
        { from: 'solar', t: 'come. bring the camera' }
      ], contact: 'minjibear' }
    ] },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'haechan', t: 'roof. tonight. late' },
        { from: 'haechan', t: 'wear something warm princess its going to be cold up there' }
      ], contact: 'haechanah' }
    ] },
    { n: "The longest night of the year was tomorrow. She'd read that somewhere, last year, in a dorm in another city, on a calendar taped to a fridge. The solstice. The night the dark is longest before it starts, very slowly, to turn back toward the sun." }
  ] },

  // ───────────────────────────── 12/20, late: the rooftop (the final) ─────────────────────────────
  { id: 'epi-r-rooftop', date: '12/20', slot: 'late', ends: true, title: 'every world', place: 'Syracuse · Language Arts Rooftop · Snow', time: 'Late Night', scene: [
    { music: 'world-runners' },
    { n: "The ladder was cold enough to burn. She went up it in gloves, rung over rung, the way she'd gone up it in October with her heart going for a completely different reason, and swung her leg over the parapet onto the roof of the Language Arts building, and stood up into the snow." },
    { n: "It was falling slow and thick and straight down, no wind, every flake taking its time. The whole campus below was white, the quad and the paths and the bell tower and the dome of the chapel, every lamppost wearing a little white cap, and beyond it the city's lights going soft and gold through the snow like they were very far away. The ledge had six inches on it. There was a can of Monster Pink Punch on the ledge, already open, half buried, with snow on its lid." },
    { glitch: { stage: 4 } },

    // ── Haechan ──
    { ifEpiRoute: 'haechan', then: [
      { n: "He was standing by the vent stack, in black, with snow on his shoulders and his hair, and his hands in his pockets, the way he'd stood in the valley and on the side steps and in every place she'd ever found him, like a man who'd come to a place he came to and found it occupied by somebody he'd hoped would occupy it." },
      { s: 'haechan', f: 'neutral', t: "Told you to wear something warm." },
      { n: "She put the tote down on the snow and unzipped it, and took out the jacket, and shook it out, folded creases and all, and put it on. It was too big. It had always been too big. The vanilla came up off the collar in the cold so strong she had to shut her eyes." },
      { flag: 'epi-r-jacket' },
      { n: "He didn't say anything about the jacket. He looked at it, at her in it, for one long second, the jaw, the nothing, the filing away, and then he looked at the snow, which was how she knew exactly what it had done to him." },
      { s: 'haechan', f: 'neutral', t: "It fits you better." },
      { n: "They stood at the ledge. They didn't say much. She drank half the Monster even though it was mostly ice. He told her the bell tower was a quarter-tone flat on the hour and had been since September and nobody had ever fixed it, and she said she'd never noticed, and he said that was because she'd never stood on a roof waiting for it, and she said she was standing on one now, and he didn't have anything to say to that." },
      { ifYear: { rank: { haechan: 10 } }, then: [
        { n: "*You'll have no idea who I am for about five minutes,* he'd told her once, in another life, and he'd been right; on the first morning back she'd looked at him in a hallway and not known him for the longest five minutes of her life, and he'd stood there and timed it on his phone, and waited." }
      ] },
      { n: "At five to midnight he took her hand. Not her wrist. Her hand, his glove off, his fingers cold and then not cold, laced through hers." }
    ] },

    // ── The cover ──
    { ifEpiRoute: 'cover', then: [
      { n: "Hanni came over the parapet after her, swearing, and Hyein came over after Hanni in a coat she'd made herself and couldn't climb in, and the three of them stood up in the snow on a roof none of them were supposed to be on and looked out at the campus, and for a second nobody said anything, because there was nothing to say that the snow wasn't already saying." },
      { s: 'hyein', f: 'happy', t: "...Okay. Okay, I get it. I get the roof. You were right about the roof." },
      { s: 'hanni', f: 'neutral', t: "Someone's up here." },
      { n: "He was by the vent stack, in black, with snow on his shoulders. He didn't look surprised to see them. He looked at Solar, and then at the two girls on either side of her, and something in his face settled, the way it had at the studio door when he'd seen who was sitting in the hallway." },
      { s: 'haechan', f: 'neutral', t: "...You brought backup." },
      { s: 'solar', t: "They brought me." },
      { s: 'haechan', f: 'neutral', t: "Good." },
      { n: "Hyein looked at him for a long time. Then she held out her mittened hand, and he looked at it, and took it, and shook it once, very formally, like two people signing something, and Hanni laughed so suddenly she had to put her face in her scarf." },
      { n: "At five to midnight Hanni took her left hand. Hyein took her right. Nobody said why. Nobody needed to." }
    ] },

    // ── Minji ──
    { ifEpiRoute: 'minji', then: [
      { n: "Minji came over the parapet after her with the camera bag held up out of the snow like a baby, and set it down very carefully on the vent housing, and took the camera out, and turned it on, and didn't lift it. She looked at the campus for a long time first, with her own eyes, the way she always looked at a thing before she decided whether it wanted to be filmed." },
      { s: 'minji', f: 'neutral', t: "...Oh. Sol. Oh, it's perfect." },
      { s: 'minji', f: 'neutral', t: "Can I?" },
      { s: 'solar', t: "You can. Keep it rolling. Whatever happens." },
      { n: "He was by the vent stack, in black, with snow on his shoulders. He looked at Minji and the camera and the little red light, and then at Solar, and he didn't say anything about any of it. He just nodded at Minji, once, the way one person who makes things nods at another." },
      { s: 'haechan', f: 'neutral', t: "Frame's a little left. The tower wants to be in it." },
      { s: 'minji', f: 'neutral', t: "I know where the tower wants to be." },
      { n: "At five to midnight the red light was still on. Minji had stopped looking at the campus. The lens was on Solar, steady, and Minji's face above it was very still." }
    ] },

    { n: "The bell tower began to ring midnight." },
    { n: "One. Two." },
    { glitch: 'epi-r-g-pull' },
    { dark: true },
    { music: 'epi-r-half' },
    { n: "On the third stroke it started, and it wasn't like the other times. The other times had been a door opening and closing. This was a tide going out." },
    { n: "She felt it in her feet first, the roof under her boots going thin, like ice in March, and then her hands, the snow falling *through* them, and she looked down and her edges were coming apart into light, green and gold, fine as the snow and going the other way, up, like the snow on the quad on Monday, every flake of her going home. Behind the bell tower the sky had split like a seam. Through it, so close she could have touched it, a tower, and a moon the wrong color, and a city where every clock had stopped." },
    { n: "It wanted her back. She could feel it want her. It didn't feel cruel. It felt like being called in for dinner by someone who'd been calling a long time." },
    { s: 'solar', t: "No— no, no, I don't— I'm not—" },

    { ifEpiRoute: 'cover', then: [
      { n: "Hanni had her left hand and Hyein had her right and they were holding on, both of them, their feet braced in the snow like girls in a tug of war, Hyein crying already, Hanni not, Hanni's jaw set and her eyes on Solar's face, saying *look at me, look at me, Sol, I've got you, we've got you,* and their hands were going through her. She could see it. Their fingers closing on light." },
      { s: 'hyein', f: 'sad', t: "SOL. Sol, no, no, stay, you have to stay, we have a STORY, we have a whole story, we memorized it—" }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "The red light was still on. Minji was still filming. Her whole body was shaking and she held the camera dead still, the way she'd held it through everything, because Solar had said *keep it rolling* and Minji had never once in her life not done what Solar asked her to with a camera, and tears were running down her face and freezing there, and the lens didn't move an inch." },
      { s: 'minji', f: 'sad', t: "I've got you. I've got you, Sol, I'm getting all of it, someone's going to have it, I asked, you said yes—" }
    ] },

    { cg: 'epi-r-held' },
    { n: "And he held on." },
    { n: "Both arms. Around her, from in front, pulling her into him so hard the breath went out of her, his whole weight leaning back against the pull like a boy holding a door shut against a storm, one hand flat between her shoulder blades and the other in her hair, and she could feel his arms going through her and he didn't care, he held on to the light anyway, he held on to whatever of her there was." },
    { n: "She was panicking. She knew she was. Her breath came in sobs she couldn't stop and her hands were in his coat, fisted, going through it, coming back, and she could hear herself saying his name, all of his names, *Haechan, Hyuck, Donghyuck,* over and over like she was trying to find the one that would work." },
    { s: 'haechan', f: 'serious', t: "Solar. Look at me. Look at me." },
    { n: "She looked at him. His face was an inch from hers, snow in his hair, and for once in his entire life he wasn't flat. Every single thing he'd ever filed away was on it, all at once, and he let her see all of it." },
    { s: 'haechan', f: 'serious', t: "I'll find you." },
    { s: 'haechan', f: 'serious', t: "Wherever it takes you. Whatever you are there. Whoever I am. I'll find you." },
    { s: 'haechan', f: 'serious', t: "Every world." },
    { flag: 'epi-r-held' },
    { n: "The bell rang. Seven. Eight. The light came off her like snow off a roof, and the sky behind the tower opened wider, and his arms were around her, and everyone who loved her on that roof was holding on, and the snow fell through all of them and up, and the tower in the seam of the sky waited, very patient, very green, and the last thing she felt was his hand in her hair, and the last thing she heard was the bell, a quarter-tone flat, ringing nine, ten—" },
    { n: "—and on the ledge, half buried in the snow, the can of Monster Pink Punch stood where she'd left it, and somewhere a long way off, in a city where it was always midnight, every clock began, very slowly, to move." }
  ] }

  );
})();
