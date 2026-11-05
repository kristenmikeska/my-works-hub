/* The Runners epilogue, the Manhattan pass (Nov 5 2026, FEMC-RUNNERS-MANHATTAN-PLAN.md; summary: RUNNERS-EPILOGUE-MANHATTAN-PASS.md). 12/21-12/25: the empty campus, the car, home, the dossier, "How long?", Christmas Eve, the spices, the reception, the gifts. The 12/20 rooftop's new ending and the porch flags are in story-w3.js / story-home.js. Each part keeps its writer's header. */
/* The Runners epilogue, the Manhattan pass, Writer B (Nov 5 2026): 12/20 to 12/22. FEMC-RUNNERS-MANHATTAN-PLAN.md §3 / §6 / §7.
   Two parts:
   (1) window.MANHATTAN_REPLACE (merged with Object.assign so Writer A's replacements can sit beside these):
     epi-r-rooftop   12/20 late     REPLACES story-w3.js. Everything up to the hold is the old text (light rewording only). New ending:
                                    the pull, everyone holds, Haechan says only "I've got you" (the "I'll find you. Every world." lines
                                    are gone: they belong to epi-r-midnight now), the twelfth stroke lets go, the snow hangs one second
                                    and falls, the laugh, her ladder footprints and the Monster can gone ({ glitch: 'epi-r-g-footprints' }),
                                    12:01 the last SUnews post (canon 93), read / face down, answer. NO `ends` any more (and, like the old
                                    one, no `consumes`: a late slot). Title changed 'every world' → 'the twelfth stroke'. Added { dark: false }
                                    and { cg: null } after the release (the old scene ended on the CG; this one goes on).
                                    Kept: music world-runners-theme, { glitch: { stage: 4 } }, { glitch: 'epi-r-g-pull' }, { dark: true },
                                    { cg: 'epi-r-held' }, flags epi-r-jacket (Haechan route) and epi-r-held (every route), every route branch,
                                    the ifYear rank/xmas lines.
     epi-r-porch     12/20 evening  REPLACES story-home.js, word for word, plus flag: 'epi-r-porch-fetch' on "If I'm not in the car
                                    tomorrow—" and flag: 'epi-r-porch-stand' on "(Don't say it. Just stand with him.)". Still no `consumes`.
   (2) R.events.push:
     epi-r-empty-campus   12/21 early    the stripped Alpha house, the girls on the early bus, her door's name tag gone (four squares of
                                         tape), the house chat's "Solar left the chat" ({ glitch: 'epi-r-g-leftchat' }); Minji route: Minji
                                         films her crossing the empty quad (the footage Writer C's 12/25 finds)
     epi-r-car            12/21 after    travel-no: Jaehyun comes up the Alpha stairs to get her (epi-r-car-fetched; the porch line, smaller,
                                         if epi-r-porch-fetch); travel-yes: the porch at 8:52. The Thruway, the shoulder strap, footage-sent's
                                         "I'm asking about the second", rehearsing the table, the radio's two bars, the sign to nowhere that he
                                         sees too ({ glitch: 'epi-r-g-sign' }), travel-yes + porch-fetch: "Saves me a trip." bond jaehyun +1
     epi-r-homecoming     12/21 evening  the lobby, Marco's "Miss Lee" (listened to, on purpose), the 11-second elevator, Mrs. Oh, Mom in person
                                         ("you've lost weight in your face"), her room, Ms. Han's PDF at six, the Greenwich refusal in the
                                         study (always refuses: epi-r-greenwich-soft +kindness / epi-r-greenwich-flat +courage), the NB line
                                         eleven minutes later
     epi-r-own-bed        12/21 late     (no consume) the longest night: Jaehyun's two knocks, texts per route and the girls, 11:59 → 12:00 moves
     epi-r-breakfast-dad  12/22 early    her father in person, first time: "The draft." (the car's rehearsal pays off), "And the shoulder.",
                                         "Friday at two", and on his way out "When you're ready to tell me where you were, tell Ms. Han. She'll
                                         find us twenty minutes."
     epi-r-dossier        12/22 evening  Jaehyun POV (the kitchen): Danielle's real account (canon 94, her line verbatim), per route, then the
                                         twelfth frame ({ glitch: 'epi-r-g-frame' }); Solar POV coda: his shadow under her door, no knock,
                                         "Tomorrow morning. Don't go out. / Eat first." Sets epi-r-dossier (always)
   Flags set: epi-r-caption-read / epi-r-caption-down / epi-r-caption-fought (rooftop), epi-r-porch-fetch / epi-r-porch-stand (porch),
     epi-r-car-fetched (car, travel-no only), epi-r-greenwich-soft / -flat (homecoming), epi-r-dossier; plus the rooftop's old
     epi-r-jacket / epi-r-held.
   Flags read: the route (ifEpiRoute), epi-r-travel-yes / -no, epi-r-porch-fetch, epi-r-car-fetched, epi-r-footage-sent / -kept / -file,
     epi-r-public-post, epi-r-term-silent (the rooftop answer, Haechan route), epi-r-caption-fought, epi-r-landing-dare / -ask (Writer A's,
     12/19 landing; read only in the dossier), ifYear rank haechan 10 / xmas haechan (kept from the old rooftop).
   Cast: solar haechan hanni hyein minji jaehyun danielle mom dad (portraits); marco, mrsoh, han (name only; all in world.js cast). None asked for.
   Phone contact labels as the existing data: 'haechanah', 'minjibear', 'hanni, hyein 🩷' (the girls, "@name: " senders), 'big bro'
     (Jaehyun), 'Ms. Han', and two new labels: 'Alpha Phi House' (only via the glitch) and 'Danielle Marsh' (her real account, on
     Jaehyun's phone in his POV).
   Inventions (Kat may change any): the last SUnews post's picture and caption (the shoveled Alpha steps, "we love a man who shows up 👀");
     Solar's comment ("it was my brother. he's the only one who ever shovels anything. merry christmas 💕"); the laminated pink name hearts
     Hanni made in August; Margot and her tupperware; the house mother's break key with Sigma's president; Hyein's sticky note; the
     driver who says nothing for 250 miles; the Advil; "Noted." to the third step; the table rehearsal and Jaehyun's ratings of Dad's
     four "good"s (the third a nine, the fourth unrated); the radio's two bars (a P3 song, never named); the sign IWATODAI 12 · Port
     Island; Marco on the desk since she was eight; Mrs. Oh's lie when Solar was fifteen (the service entrance at 4 a.m.); the barley tea
     and winter radish kimchi; the hall repainted gray-green in October; the plaster rose's 24 petals; the PDF's Mon 22 breakfast line and
     the wardrobe note ("something navy, please, nothing with a slit"); Seojin "going to Yale since she was born"; "I'm not doing oysters
     again" (pays off story-w1's food-poisoning oysters); Davos; Jaehyun's two knocks (from Better Photography); Haechan's "session in the
     city this week. paid" (only "this week": no day named, so Writers C / F can place him); "i packed in eleven minutes" / no mouse
     (Better Photography); the dining room's echo; Dad's tie put on without a mirror; "He booked me once. In 1999."; Lee Industries on
     Park; Danielle's eleven / twelve photos (the side gate, 4B at 10:42 PM / 7:10 AM, the landing; Minji: the honors dorm binder, the
     crewneck, the balcony; cover: the lodge's "No reservations found", the Thanksgiving sign-out sheet, Solar on the stairs at 3:12 /
     3:40 / 2:58 AM); the twelfth frame's date line reading "Wed, Dec 31 · 11:59 PM" (unexplained); "Read 9:14 PM" and no reply.
   Notes for the lead: Dad sees the shoulder at breakfast and says so, nothing more (no doctor booked), so later scenes can still treat it as
     unhandled. Rosa (story-home's espresso / flowers) isn't named here; Mrs. Oh is the housekeeper. The 12/24 guests aren't named (home
     pass says the Kangs, world.js cast has the Kwons: open). Jaehyun hasn't told Solar about the dossier by the end of 12/22; she only
     knows something is coming "tomorrow morning" (Writer C's epi-r-how-long).
   Canon held: Haechan never asks anyone about her; Jaehyun knows nothing of camp or the recording; the girls don't know about the
     recording; nobody explains a glitch; the track stays untitled; Mira isn't mentioned; parents in person only from 12/21.
   Art ideas (one line each, none wired):
     - post-r-11-steps: SUnews, the Alpha Phi steps shoveled to the brick at night, porch light on, one line of footprints filling in.
     - CG: the snow hanging still in the air over the rooftop, everyone laughing, one smooth unbroken strip of snow from ladder to ledge.
     - CG: the stripped Alpha hall, every door open, one door with four squares of tape and no heart.
     - CG: Minji's frame: a tiny figure in a dark jacket at the far end of the empty white quad, the bell tower, the footprints.
     - CG: the green overhead sign in the snow over the Thruway, IWATODAI 12, Jaehyun turned in his seat looking back at it.
     - CG: the dining room at 7:17, the sun across the empty half of the long table, her father at the head with the paper in quarters.
     - CG: Jaehyun in the dark kitchen, one cupboard light, cereal, the phone lit with the frame where his sister isn't.
     - CG: the bar of hall light under her door with a shadow standing in it, the 400 windows behind her on the window seat. */

(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/21, early: the empty campus ─────────────────────────────
  { id: 'epi-r-empty-campus', date: '12/21', slot: 'early', consumes: true, title: 'the empty house', place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', scene: [
    { music: 'epi-r-bleed' },
    { n: "The first thing was the quiet." },
    { n: "Not the snow kind. She knew the snow kind by now, three weeks of it, the soft swallowed hush that came down over Walnut Avenue at night and made the radiators sound loud. This was the other kind, the kind a house makes when there's nobody in it, and she lay on top of her duvet in the coat she'd fallen asleep in and listened to it for a long time before she worked out what she was listening to. No hairdryers. No shower running two doors down. No Hyein singing on the stairs, no Olivia's alarm going off and going on going off, no front door opening on the cold every forty seconds. Just the radiator, knocking, like somebody who'd been sent to wake her and didn't want to come in." },
    { n: "Seven-oh-six. Sunday, the twenty-first of December. The shortest day of the year. The sky in the window was flat and gray, the color of a nickel, nothing falling out of it, and under it the whole campus lay white and finished, like a page somebody had turned." },
    { ifEpiRoute: 'cover', then: [
      { n: "They'd woken her at twenty to six to say goodbye. She remembered it the way you remember things from inside sleep: Hanni crouched by the bed in her coat with her hand on Solar's hair, Hyein in the doorway with both suitcases saying *the bus, Hanni, the BUS,* and Hanni not moving for one more second, and then one more, and then saying *text us from the car, the second you're in it, I mean it,* and kissing her forehead like a mother, and going." },
      { n: "There was a sticky note on the inside of her door in Hyein's handwriting. *WE HELD ON. YOU STAYED. MERRY CHRISTMAS. EAT. 💗💗* And under it, smaller, in Hanni's: *Text us. Not a joke.*" },
      { n: "She read it twice. Then she peeled it off the door and put it in her phone case, behind the phone, where it would be warm." }
    ] },
    { ifEpiRoute: 'haechan', then: [
      { n: "Her phone had one text on it, from 5:58." },
      { phone: [
        { from: 'haechan', t: 'bus' },
        { from: 'haechan', t: 'tell me when youre in the car' },
        { from: 'haechan', t: 'and eat something before. the car doesnt count as a meal' }
      ], contact: 'haechanah' },
      { n: "Not *good morning.* Not anything about last night. He'd never once in his life said a thing about the night before the morning after; he just told you where he was and what to eat, and left the rest of it standing there for you to look at if you wanted. She looked at it for a while. The jacket was still on her. She'd slept in it." },
      { phone: [
        { from: 'solar', t: "bus where" },
        { from: 'haechan', t: 'mm' }
      ], contact: 'haechanah' }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Her phone had one text on it, from 6:31." },
      { phone: [
        { from: 'minji', t: "i'm outside. not in a weird way. on the porch. with coffee" },
        { from: 'minji', t: "my dad's picking me up at ten. i want the quad empty before anyone ruins it. can i film you walking across it. you can say no" }
      ], contact: 'minjibear' }
    ] },
    { n: "Hanni and Hyein had gone on the early bus. Olivia had gone yesterday at four in her father's truck, hugging everyone in the front hall twice. Danielle had gone last night in the black car with the monogrammed case. By the look of it the whole house had gone, every one of the sixty girls who lived in it, and left her the last one in the building, which was a thing she'd never once been in her life: the last one anywhere." },
    { n: "She got up. She went down the hall to brush her teeth." },
    { n: "Every door on the floor was open. That was what break did. The rooms behind them were stripped, mattresses bare in their blue striped ticking, desks cleared, a single sock under somebody's bed and a curl of fairy lights left hanging off a curtain rod in Yerim's room, unplugged, holding nothing up. The air in the hall had already gone a little cold and a little stale, the way air did when sixty people stopped breathing it." },
    { n: "On each door there was a name tag. Hanni had made them in August, the first week, sitting on the floor of the social chair's room with a glue gun and a bag of glitter pens: a pink paper heart, laminated, a name on it in curly silver writing, taped at the four corners. Every girl in the house had one. Every girl in the house had complained about them, and nobody had ever taken theirs down." },
    { n: "*Hanni.* *Hyein.* *Yerim.* *Olivia.* *Chungha*, with a crown somebody had drawn on later in Sharpie. *Danielle*, perfectly straight, the corners re-taped at some point by someone who cared very much about the corners." },
    { n: "Her door was the last on the left." },
    { n: "There were four small squares of tape on it, at the corners of a shape that wasn't there. Holding nothing. The paint underneath them was the same color as the rest of the door, the same pink-white the whole hall was, not paler, not cleaner, not the ghost of anything, as if nothing had ever hung there long enough to keep the light off it." },
    { n: "She looked on the floor. She looked behind the door, and under the radiator, and in the trash can by the bathroom, which was empty, which somebody had emptied. She stood in the hall in her socks and her coat with her toothbrush in her hand and felt the old thing, the thing from the first morning back, the body knowing before the mind did and refusing to say." },
    { n: "It fell off, she told herself. Somebody took it as a joke. Hyein took it for a scrapbook. It was laminated paper, and tape, and she'd seen it every single morning for three weeks and not once thought about it, and she couldn't remember, standing there, the last morning she'd actually seen it." },
    { n: "Her phone buzzed in her coat pocket." },
    { n: "The house group chat. *Alpha Phi House 🏛️💗*, sixty-one members, muted since September because it was mostly people asking who'd taken their oat milk. She opened it to see who was awake." },
    { glitch: 'epi-r-g-leftchat' },
    { n: "Between *who took my blue tupperware i'm not mad i just want it back* at 11:40 p.m. and *safe travels everyone!!! ❤️ see u in jan* at 6:15 a.m., in small gray letters in the middle of the thread, the way the app put things nobody had typed:" },
    { n: "*Solar left the chat.* 3:12 AM." },
    { n: "She hadn't left the chat. She was in the chat. She was reading it, right now, in the chat, and she could see every message after the line, the tupperware and the safe travels and a picture of somebody's dog in a Christmas sweater at 6:40. At 3:12 a.m. she'd been asleep on top of her duvet in her coat with the lamp off and the snow falling the right way past the window. She'd checked. She'd got up and checked every few minutes until she hadn't." },
    { n: "Nobody had said anything about it. Sixty girls, and the dog in the sweater had eleven hearts, and nobody had said a word." },
    { choose: [
      { t: "(Screenshot it. Send it to the girls.)", then: [
        { n: "She screenshotted it with her thumb not quite steady and dropped it in the girls' chat before she could think better of it." },
        { phone: [
          { from: 'solar', t: "@solar: did i do this" },
          { from: 'hyein', t: "@hyein: do what babe" },
          { from: 'hyein', t: "@hyein: is this about the tupperware. it's MARGOT'S tupperware. she's been on this for a week" },
          { from: 'hanni', t: "@hanni: sol we're on the bus, what are we looking at? it's just the house chat" },
          { from: 'hanni', t: "@hanni: you ok?" }
        ], contact: 'hanni, hyein 🩷' },
        { n: "She looked at her own screenshot. The tupperware. The safe travels. The space between them where the gray line was, plain as anything, on her screen." },
        { n: "*Just the house chat.*" },
        { phone: [
          { from: 'solar', t: "@solar: nvm. wrong pic. i'm ok. car's at 9" },
          { from: 'hanni', t: "@hanni: text from the car. the SECOND" }
        ], contact: 'hanni, hyein 🩷' }
      ] },
      { t: "(Close it. Don't look at it again.)", then: [
        { n: "She closed it. She put the phone face down on the sink and brushed her teeth for the full two minutes, the way the dentist on Park had told her when she was nine, counting, looking at her own face in the mirror the entire time to be sure of it." },
        { n: "It was there. Toothpaste at the corner of her mouth, the jacket collar up, four hours of sleep under her eyes. It was there the whole two minutes. She made sure." }
      ] }
    ] },
    { ifEpiRoute: 'minji', then: [
      { place: 'Syracuse · The Quad', time: 'Morning', soft: true },
      { n: "Minji was on the porch steps with two coffees and the camera bag, in a hat with a pompom that made her look about twelve, and she stood up when the door opened like she'd been told to expect royalty." },
      { s: 'minji', f: 'happy', t: "You can say no." },
      { s: 'solar', f: 'neutral', t: "You already asked me that in the text." },
      { s: 'minji', f: 'neutral', t: "I'm asking again in person. I always ask in person." },
      { n: "So she said yes in person, and Minji walked her to the top of the quad and set up at the corner by the library with the long lens, and Solar walked the whole length of it alone, from the library to the chapel, through snow nobody had stepped in yet, with the bell tower at the far end and the sky the color of a nickel and not one single other person anywhere in the frame." },
      { n: "It was a long walk. She'd never noticed how long. She kept her hands in the jacket pockets and her eyes on the tower and didn't look back, because Minji had said *don't look back, it's better if you don't,* and halfway across she understood why, because the urge to look back and check her footprints behind her was so strong it was almost a pull of its own." },
      { n: "She didn't. At the chapel steps she turned around and Minji was lowering the camera at the other end of the quad, small and far away, one hand up, and between them the line of Solar's footprints ran all the way back across the white, unbroken, every one of them, exactly where she'd put them." },
      { n: "She let out a breath she'd been holding since 3:12 a.m." },
      { s: 'minji', f: 'happy', t: "That's the last shot of the semester. I'm not touching it. It's perfect." },
      { s: 'minji', f: 'neutral', t: "My grandmother's in Jersey till the twenty-fourth, then I'm coming in to shoot the city. If you want company. You can say—" },
      { s: 'solar', f: 'happy', t: "Minji. Yes." },
      { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning', soft: true }
    ] },
    { n: "At eight-thirty she zipped the suitcase. The room looked like every other room on the floor now, the bed stripped, the desk bare, nothing on the walls, and she stood in the doorway with the handle in her hand and looked at it and couldn't, for one second, remember a single thing that had ever made it hers." },
    { n: "The four squares of tape stayed on the door. She left them there. It seemed rude to take them down when they were the only part of her still on it." },
    { ifFlag: 'epi-r-travel-no', then: [
      { n: "At eight-forty she sat down on the bare mattress with her coat on and the suitcase beside her, and didn't stand up." },
      { n: "She'd never confirmed the car. That was the thing. She'd sat in the Alpha kitchen on Thursday with Ms. Han's message open and her thumb over the screen and the clocks on every wall saying twelve, and she hadn't answered it, because answering it meant there was a Sunday, and she hadn't known yet whether there was going to be a Sunday." },
      { n: "There was. She was sitting in it. She just hadn't worked out yet how you got up and walked down a staircase into a day you'd never once let yourself plan for." }
    ], else: [
      { n: "At eight-forty she carried the suitcase down the stairs herself. It bumped on every step. Third from the top it groaned, long and loud, the whole length of the empty stairwell, and there was nobody left in the house to hear it but her." }
    ] }
  ] },

  // ───────────────────────────── 12/21, after: the car ─────────────────────────────
  { id: 'epi-r-car', date: '12/21', slot: 'after', consumes: true, title: 'the thruway', place: 'Syracuse · The Car', time: 'Daytime', scene: [
    { ifFlag: 'epi-r-travel-no', then: [
      { place: 'Syracuse · Alpha Phi House · Her Room', time: 'Morning' },
      { music: 'epi-r-home' },
      { n: "Nine o'clock. Through the window a black car turned into Walnut and stopped in front of the house with its hazards going, exactly on the minute, because Ms. Han's cars had never once in their lives been late, and the exhaust went up white in the cold and hung there." },
      { phone: [{ from: 'jaehyun', t: 'Downstairs.' }], contact: 'big bro' },
      { n: "She didn't move. She watched the hazards go on and off against the snow, orange, orange, like something counting." },
      { phone: [{ from: 'jaehyun', t: 'Solar.' }], contact: 'big bro' },
      { n: "Nine-oh-six. Nine-oh-nine. At nine-eleven the front door opened downstairs, which was impossible, because it was locked, because she'd heard the house mother lock it last night at ten, and then she remembered that the house mother left a key with Sigma's president every break, in case of pipes, and had done since before Jaehyun was president, and nobody in Alpha had ever once thought about what else a key could open." },
      { n: "Footsteps on the stairs. Unhurried. Men didn't walk up those stairs. It was the oldest rule in the house, older than the pink, and her brother came up them like he'd been invited, one at a time, left foot first, and the third step from the top groaned under him, the whole length of the stairwell, and he said, to the step, very calmly:" },
      { s: 'jaehyun', f: 'neutral', t: "Noted." },
      { n: "He stood in her doorway in the team parka with snow on his shoulders. He looked at the stripped bed, and the zipped suitcase, and her on the mattress in her coat with her hands in her lap, and the four squares of tape on the outside of her door, which he looked at for exactly one second longer than she'd have liked." },
      { ifFlag: 'epi-r-porch-fetch', then: [
        { s: 'jaehyun', f: 'neutral', t: "I said I'd come and get you." },
        { n: "Smaller than on the porch. No *wherever it is,* no snow coming down between them like a curtain. Just a man in a doorway on a Sunday morning saying the thing he'd said he'd do, now that he was doing it, the way he called a play in the huddle and then simply ran it." },
        { s: 'jaehyun', f: 'neutral', t: "This is me getting you. It's a lot less dramatic than it sounded." },
        { s: 'solar', f: 'sad', t: "...You did it once." },
        { s: 'jaehyun', f: 'neutral', t: "Twice now. I'm starting to think it's a job." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "Car's downstairs. I told you at the party, I'm not carrying your bag down." },
        { n: "Then he walked over and picked it up anyway, with his left hand, and the suitcase came up off the floor wrong, too heavy for the side he'd lifted it on, and his whole right shoulder went tight under the parka holding the rest of him still while he did it." }
      ] },
      { n: "She stood up and took the handle out of his hand." },
      { s: 'solar', f: 'serious', t: "Not with that arm." },
      { s: 'jaehyun', f: 'neutral', t: "It's fine." },
      { s: 'solar', f: 'serious', t: "You say *fine* to Mom now. She told me. Like she's a reporter." },
      { n: "He looked at her. Something in his face moved, very slightly, at the corner, the place where their father's face never moved at all." },
      { s: 'jaehyun', f: 'neutral', t: "...Carry your own bag, then." },
      { flag: 'epi-r-car-fetched' },
      { n: "She carried her own bag. He walked down the stairs behind her, a step back, the whole way, the way he'd walked behind her down every staircase she'd ever been scared of, and on the third step from the top she put her foot exactly where the groan was, on purpose, and it groaned, and he made a sound behind her that in another man would have been a laugh." },
      { place: 'Syracuse · The Car', time: 'Daytime' }
    ], else: [
      { music: 'epi-r-home' },
      { n: "She was on the porch at eight fifty-two with the suitcase and the gray coat, because their mother had said it photographed and because it was the first thing on the hook. Jaehyun came up Walnut at eight fifty-eight from the direction of Sigma, walking, a duffel over his left shoulder and nothing at all over his right." },
      { n: "The car came at nine. Exactly. A black one, the heated kind, turning into the street as the minute changed like it had been waiting around the corner for it, which it probably had, because Ms. Han's cars had never once in their lives been late." },
      { s: 'jaehyun', f: 'neutral', t: "Did you eat." },
      { s: 'solar', f: 'neutral', t: "I had a granola bar from the kitchen. It was Margot's. I'm going to leave her a note." },
      { s: 'jaehyun', f: 'neutral', t: "That's not food. That's a crime with oats in it." }
    ] },
    { n: "The driver said good morning and took the bags and then said nothing else for two hundred and fifty miles, which was the service Ms. Han used and the reason she used it. The back seat was warm and smelled of leather and the little cardboard pine tree hanging off the mirror, and Syracuse went past the tinted windows white and empty and Sunday-shut, the Marshall Street lights still on over nobody, the hill, the dome, the bell tower once, small, over the roofs, and then the on-ramp, and then it was gone." },
    { n: "She didn't look back at it. She looked at her hands." },
    { n: "Jaehyun put his seat belt on, and then took the shoulder strap and moved it, carefully, off his right shoulder and down under his arm, where it would do nothing at all in a crash, and settled back against the leather with his eyes shut. She watched him do it. He knew she was watching. Neither of them said anything." },
    { n: "Somewhere past the Cicero exit he took two Advil out of his parka pocket and swallowed them dry, without opening his eyes." },
    { ifFlag: 'epi-r-footage-sent', then: [
      { n: "*We'll talk in it,* he'd said. He didn't, for an hour. He let the Thruway go past and the snow fields and a whole town's worth of wind turbines standing still in a gray field, and she sat beside him with her stomach in her throat and the forty-one seconds playing on a loop in her head, a staircase, a timestamp, a girl who wasn't there." },
      { n: "Then, near Utica, without opening his eyes:" },
      { s: 'jaehyun', f: 'serious', t: "I watched it. Saturday morning. Twice." },
      { s: 'jaehyun', f: 'serious', t: "I'm not asking about the stairs. Or who was on them. Or what anybody was wearing. I'm going to ask about that some other day, and you're going to hate it, and that's fine." },
      { s: 'jaehyun', f: 'serious', t: "I'm asking about the second." },
      { n: "12:00:00. A hand closing on light. A tower where a wall should have been. Her brother had watched it twice, on a Saturday morning, alone, in a frat house on Walnut, and then come and shoveled her steps with the wrong hand and talked about the Kangs' son." },
      { choose: [
        { t: "It's a phone, Jaehyun. Phones glitch.", then: [
          { glitch: { strain: 1 } },
          { n: "She said it well. She heard herself say it well, in their father's cadence, warm and sensible and a little bored, the voice for a quarter that hadn't gone to plan." },
          { s: 'jaehyun', f: 'neutral', t: "Okay." },
          { n: "He didn't believe her. He didn't say so. He'd never once said so, not in eighteen years; he just said *okay* in a way that put the thing down on the table between you and left it there, so you'd have to look at it all the way to Manhattan." }
        ] },
        { t: "Not in a car.", then: [
          { n: "He opened his eyes and looked at her. Then at the back of the driver's head. Then at her again." },
          { s: 'jaehyun', f: 'neutral', t: "...Okay. Not in a car." },
          { n: "It was the rule he'd always had: where a conversation happened mattered as much as what was in it. She'd hated that rule her whole life. She'd never been so grateful to have taught it back to him." }
        ] }
      ] }
    ] },
    { n: "Past Utica he opened his eyes, and looked at the ceiling of the car, and said, in a voice that wasn't his:" },
    { s: 'jaehyun', f: 'serious', t: "Your examinations." },
    { n: "It took her a second. Then she sat up." },
    { s: 'solar', f: 'neutral', t: "...Fine. All four. Friday was the writing one. I finished early." },
    { s: 'jaehyun', f: 'serious', t: "You always finish early." },
    { s: 'solar', f: 'neutral', t: "I watched the clock." },
    { s: 'jaehyun', f: 'neutral', t: "Don't say that. He'll ask why." },
    { s: 'solar', f: 'happy', t: "Okay. *I checked my work.*" },
    { s: 'jaehyun', f: 'serious', t: "Good. And your brother." },
    { s: 'solar', f: 'serious', t: "He's fine. He's sleeping more." },
    { n: "He turned his head on the headrest and looked at her for a second, and she looked back, and neither of them said anything about the shoulder strap under his arm." },
    { s: 'jaehyun', f: 'neutral', t: "That's good. That's the one." },
    { s: 'solar', f: 'happy', t: "Now you. *The draft.*" },
    { n: "And her brother, the starting quarterback of a top-fifteen program and a projected second-round pick in a sport he loved more than almost anything, folded his hands on his stomach and said, in a perfect flat imitation of himself at a table: *I'm keeping my options open, Dad. The conversations are going well. I'll know more after the combine.*" },
    { s: 'solar', f: 'surprised', t: "Is any of that true?" },
    { s: 'jaehyun', f: 'neutral', t: "The combine's true." },
    { n: "They did the whole table. Somewhere around Little Falls they did the Kangs. He did their mother asking about her face, which he said she'd do in the first minute, *face, not weight, weight in your face, you'll see,* and Solar laughed so hard the driver looked in the mirror. She did their father saying *good* in four different ways, and Jaehyun rated each one out of ten, and the third one got a nine, and the fourth one he refused to rate because it was *too accurate, Solar, it's upsetting.*" },
    { n: "It was the most they'd talked in a car since she was eleven. She didn't say so. Neither did he." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'solar', t: "utica" },
        { from: 'solar', t: "there is a man on this highway with a christmas tree tied to a SEDAN" },
        { from: 'solar', t: "haechan there are no straps involved. it's just. believing" },
        { from: 'haechan', t: 'did you eat' },
        { from: 'solar', t: "rest stop sandwich" },
        { from: 'haechan', t: 'was it offensive' },
        { from: 'solar', t: "it was STRUCTURALLY offensive. the tomato had been against the bread for hours" },
        { from: 'haechan', t: 'good' },
        { from: 'solar', t: "GOOD??" },
        { from: 'haechan', t: 'you ate' }
      ], contact: 'haechanah' },
      { n: "Jaehyun didn't look at her phone. He looked out his own window, very deliberately, at a field, like a man giving somebody privacy in a space with no room in it for privacy, and she put the screen against her knee and her face went hot, and he said, to the field, *Utica's got a lot of Christmas trees,* and nothing else." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { phone: [
        { from: 'hyein', t: "@hyein: status" },
        { from: 'solar', t: "@solar: in the car. jaehyun is doing an impression of himself" },
        { from: 'hanni', t: "@hanni: is it good" },
        { from: 'solar', t: "@solar: it's horrifying" },
        { from: 'hyein', t: "@hyein: my mom just asked if i'm 'still doing the clothes thing.' the CLOTHES THING. i won a CONTEST" },
        { from: 'hanni', t: "@hanni: sol. you're in the car. that's the whole text. that's all i needed" }
      ], contact: 'hanni, hyein 🩷' }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'minji', t: "[photo]" },
        { from: 'minji', t: "one frame. just so you know what you look like from far away. you look like someone who's going somewhere" },
        { from: 'minji', t: "not posting it. ever. it's yours" }
      ], contact: 'minjibear' },
      { n: "A tiny figure in a dark jacket at the far end of a white quad, the bell tower behind her, and a line of footprints running back toward the lens all the way to the bottom of the frame. She zoomed in on the footprints. She counted some of them. Then she made herself stop counting and saved it." }
    ] },
    { n: "Somewhere south of Albany, where the Thruway went long and straight through the trees and the snow thinned out to a gray crust on the shoulders, the radio changed." },
    { n: "The driver had it on low, the whole way, an easy-listening station doing Christmas songs nobody had asked for, and in the middle of one of them, between one bar and the next, it wasn't that station any more. A girl's voice over a piano. A song she knew every word of and had never once heard in this country, a song that had played in a dorm lounge by the sea every evening for a year while somebody argued about the remote and a dog slept on her feet. Two bars. Then the Christmas song again, exactly where it had been, as if nothing had happened, and the driver turning it down a notch without looking." },
    { n: "Jaehyun had his eyes shut. He didn't move. She sat with her heart going and her nails in her palms and didn't look at anyone." },
    { n: "Ten minutes later the sign came." },
    { n: "An overhead one, the big green kind, on a gantry over the right lane, coming up out of the gray with the snow crusted along its top edge. She read it the way you read any sign on a road you've driven forty times, without meaning to, and then read it again." },
    { glitch: 'epi-r-g-sign' },
    { n: "*IWATODAI 12. Port Island. EXIT ↗*" },
    { n: "White letters. Reflective. The little exit arrow pointing up and right into nothing, into trees, where there wasn't an exit and had never been one. Then they were under it, the shadow of the gantry going over the car, and past, and gone." },
    { n: "Jaehyun had turned his head. His eyes were open. He was looking out the back window at it." },
    { s: 'jaehyun', f: 'surprised', t: "What was that." },
    { n: "The driver hadn't moved. The driver was humming along to the Christmas song." },
    { choose: [
      { t: "(I didn't see anything.)", then: [
        { s: 'solar', f: 'neutral', t: "What was what?" },
        { n: "He looked at her. He looked at her for a long time, long enough for her to understand that she'd answered too fast, that a girl who hadn't seen anything would have said *what* and not *what was what,* and that he'd heard the difference the way he heard a defense shift before the snap." },
        { s: 'jaehyun', f: 'neutral', t: "...Nothing. A sign." },
        { n: "He turned back around. He didn't shut his eyes again for the rest of the drive." }
      ] },
      { t: "(I saw it.)", then: [
        { s: 'solar', f: 'serious', t: "I saw it." },
        { s: 'jaehyun', f: 'serious', t: "That's not a place." },
        { s: 'solar', f: 'neutral', t: "No." },
        { n: "He waited. She didn't say anything else. She couldn't have, and he must have seen that, because he didn't ask. He just turned and looked out the back window again, at the empty road behind them, at the gantry going small, and then at her, and filed it, the way he filed a coverage he'd never seen before: not understood, not dismissed. Kept." },
        { s: 'jaehyun', f: 'neutral', t: "Okay." }
      ] }
    ] },
    { ifFlag: 'epi-r-porch-fetch', then: [
      { ifFlag: 'epi-r-car-fetched', then: [], else: [
        { n: "A mile later, without looking at her, he put his left hand out on the seat between them, palm down, the way he used to when she was small and they were in the back of a car at night and she was scared of the tunnels." },
        { s: 'jaehyun', f: 'neutral', t: "You're in the car." },
        { s: 'solar', f: 'neutral', t: "I'm in the car." },
        { s: 'jaehyun', f: 'neutral', t: "Good. I said I'd come and get you. Saves me a trip." },
        { n: "Smaller than on the porch. Smaller than anything. A man making a joke so that the thing under it could ride along unnoticed, the way the strap rode under his arm. She put her hand on top of his on the seat, and he let her, and neither of them looked at it." }
      ] }
    ] },
    { n: "They came down the Henry Hudson at twenty to three with the river on the right, flat and pewter and full of ice, and then the city came up around them the way it always did, not all at once but block by block, until there wasn't anything else. No snow here. Not a flake. The sidewalks were dry and gray and crowded with people carrying shopping bags, and the trees on the park side were strung with lights already, at twenty to three, because it was the shortest day of the year and the city had given up on the sun early." },
    { n: "She looked for the park. She found it. She'd always found it." },
    { bond: { jaehyun: 1 } }
  ] },

  // ───────────────────────────── 12/21, evening: home ─────────────────────────────
  { id: 'epi-r-homecoming', date: '12/21', slot: 'evening', consumes: true, title: 'eleven seconds', place: 'Manhattan · The Building · Lobby', time: 'Daytime', scene: [
    { music: 'epi-r-home' },
    { n: "Solar Lee came home the way she always came home, which was through a lobby." },
    { n: "Marble, cream and gray, polished so you could see the ceiling in it. A Christmas arrangement on the round table in the middle the size of a small car, white amaryllis and birch branches and something silver, smelling faintly of cold and money. Two men behind the long desk in dark suits. Heat that hit you in the face like a door. The particular hush of a building where everybody was paid to be quiet, and was." },
    { n: "The older of the two men looked up, and smiled, and stood." },
    { s: 'marco', f: 'happy', t: "Good afternoon, Miss Lee." },
    { s: 'solar', f: 'happy', t: "Hi, Marco." },
    { s: 'marco', f: 'happy', t: "Good to have you back. And Mr. Lee. The season, I'm sorry." },
    { s: 'jaehyun', f: 'neutral', t: "Thanks, Marco." },
    { n: "Marco had been on the front desk since she was eight. He'd known her name on her first day of second grade, in a uniform and a backpack bigger than she was, and he'd said it every day since in exactly that voice, *Miss Lee,* warm and formal at once, the way you'd hold a door. He knew which car was hers and which of her friends' mothers to call up and which ones to keep in the lobby talking about the weather. He'd never once got it wrong." },
    { n: "She noticed, for some reason, that she was listening to him say it. Really listening. As if it were the kind of thing you'd want to remember the sound of." },
    { s: 'solar', f: 'neutral', t: "It's good to be back." },
    { n: "Which was the correct thing to say, and was not entirely a lie." },
    { place: 'Manhattan · The Building · Lobby', time: 'Daytime', soft: true },
    { n: "The elevator took eleven seconds. It always had. It had a bench in it, upholstered in something green, that nobody in eighteen years had ever sat on, and a mirror on the back wall in a brass frame, and she stood in front of the mirror with her brother beside her and watched the two of them in it: two people in good coats with the same jaw, one holding his right arm a quarter-inch closer than the other, one with four hours of sleep under her eyes, standing very straight." },
    { n: "She counted. One. Two. The numbers above the door going up without a sound. She looked at herself in the mirror the whole time, the way she had in the Alpha bathroom that morning, making sure. She was there. Of course she was there. Nine. Ten." },
    { n: "Eleven. The doors opened on the eleventh floor." },
    { n: "Two doors on the landing, and theirs had a wreath on it, the tasteful one their father had an opinion about, fir and dark berries and a gold ribbon. Before Jaehyun could get his key out the door opened from the inside." },
    { place: 'Manhattan · The Lee Apartment · Hall', time: 'Daytime' },
    { s: 'mrsoh', f: 'happy', t: "Aigo, look at you. Look at you. Come in, come in, you're letting it all out." },
    { n: "Mrs. Oh. Eleven years in this apartment, from nine until eight, the kitchen last; a small woman in a cardigan with her reading glasses on a beaded chain and a dish towel over one shoulder like a badge of office. When Solar was fifteen and had climbed back in through the service entrance at four in the morning with her shoes in her hand, Mrs. Oh had been in the kitchen making the next day's stock, and had looked at her, and said nothing, and at breakfast had told Solar's mother to her face that Solar had been in bed by eleven with a headache. Then she'd never mentioned it again. Not once. Not even to Solar." },
    { n: "She took Solar's face in both her hands now, briefly, the way she had when Solar was small, and looked at it, and said nothing about it at all, which was the kindest thing anyone had done since Utica." },
    { s: 'mrsoh', f: 'neutral', t: "You ate on the road? No. Don't answer, I can see. I'll bring something." },
    { n: "The apartment had been redecorated in October. Nobody had told her. The hall she walked into was a different color from the hall she'd left in August, a darker gray, almost green, with the family photographs rehung along the forty feet of it in new black frames, and she stood just inside the door with her suitcase and felt for one strange second like a guest." },
    { n: "Her mother was in it." },
    { s: 'mom', f: 'happy', t: "There she is." },
    { n: "Solji Lee came down the hall from the study in a cream sweater with her reading glasses pushed up into her hair and her phone in her hand, and didn't put either of them down, and stopped about four feet away, the way she always did, the distance from which she liked to take inventory." },
    { s: 'solar', f: 'happy', t: "Hi, Mom." },
    { s: 'mom', f: 'serious', t: "Let me look at you. No. Properly. *Turn around.*" },
    { n: "She turned around. In the hall, in her coat, with her suitcase, like a girl being fitted for something. Her mother had been on the phone every Sunday since August and Solar had heard her voice a hundred times and none of it had prepared her for the actual woman, the smell of her perfume from four feet away, the small line between her eyebrows, the way she held her phone against her chest like she'd been interrupted in the middle of something important and had chosen this instead." },
    { s: 'mom', f: 'sad', t: "You've lost weight." },
    { s: 'solar', f: 'neutral', t: "I haven't." },
    { s: 'mom', f: 'sad', t: "You've lost weight in your *face.* Jaehyun. Has she lost weight in her face?" },
    { n: "Behind her Jaehyun made a very small sound, the sound of a man who'd called a play from the back seat of a car at Little Falls and watched it run exactly as drawn, and Solar did not look at him, because if she looked at him she'd laugh, and if she laughed in this hall in front of her mother she'd never be able to explain why." },
    { s: 'jaehyun', f: 'neutral', t: "She looks fine." },
    { s: 'mom', f: 'serious', t: "That is not an *answer.* That's what your father says." },
    { n: "Then her mother put the phone down on the hall table, finally, and came the last four feet, and hugged her. Hard, quick, the way she hung up on Sundays, before anyone could say anything that would need answering, one hand flat on the back of Solar's head for exactly one second." },
    { n: "Then she turned and hugged Jaehyun too, and she got him on the right side, the wrong side, her arm across his shoulder and her whole weight against it, and Solar watched her brother not flinch. Watched him do it on purpose. His jaw, his eyes, his breath held for the length of it and let go after, slow, so their mother wouldn't feel it go. He was very good. He'd had a whole season of practice." },
    { s: 'mom', f: 'neutral', t: "Your father's at the office. He'll be late. He said to tell you welcome home." },
    { s: 'mom', f: 'neutral', t: "Those were the words. *Tell her welcome home.* I'm passing them on exactly." },
    { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Daytime' },
    { n: "Her room was the fourth door. Coat cupboard, powder room, Jaehyun's, hers." },
    { n: "It had been made up. Her room was always made up. Twenty-two feet by eighteen with a window seat and its own bathroom and a bed she had never once chosen anything about, and somebody had folded a towel on the end of it into the shape that hotels did, and the curtains were open the way she'd always left them, onto a building across the street with about four hundred windows in it, most of them already lit at three in the afternoon, four hundred small lives going on in squares." },
    { n: "She stood in the doorway with her bag in her hand and thought, with total clarity, *this is a very nice room in a very nice apartment and I have never in my life left anything on the floor in it.*" },
    { n: "She unpacked in about nine minutes. Everything went where it went. The drawers were lined with paper that smelled faintly of cedar, the same paper since she was ten." },
    { ifEpiRoute: 'haechan', then: [
      { n: "Then she took the jacket off, finally, for the first time since the roof, and hung it over the back of the desk chair. In plain view. Where Mrs. Oh would see it when she came in with the tray, and where her mother might, if her mother came in, which her mother sometimes did, at night, to stand in the doorway and look at a sleeping girl and go away again." },
        { n: "She stood and looked at it there for a second, a boy's black jacket two sizes too big on a white chair in a white room, so plainly not hers that it was almost a sentence." },
        { n: "Then she left it there." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Then she took Hyein's sticky note out of her phone case and stuck it on the mirror over the dresser, *WE HELD ON. YOU STAYED,* in pink, crooked, the only crooked thing in the whole room, and stood back and looked at it there. It was very ugly. It was the best thing in the room by a mile." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Then she opened Minji's frame on her phone again, the tiny figure on the white quad, and set it as her lock screen, and turned the phone face up on the window seat, which she never did, so that every time it lit she'd see a girl a long way off with a line of footprints behind her, every one of them there." }
    ] },
    { n: "Mrs. Oh came in with a tray at half past three without knocking, because she'd never knocked in eleven years: rice, soup, a little dish of the radish kimchi she made only in winter, and a glass of barley tea with the steam still coming off it. She put it on the window seat, and looked once, very briefly, at the room, at everything in it, and went out again without a word about any of it." },
    { s: 'mrsoh', f: 'serious', t: "All of it. I'll know." },
    { n: "Solar ate all of it on the window seat with her legs pulled up, watching the four hundred windows across the street, and it was the first meal since the first of December she hadn't had to think about." },
    { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Evening', soft: true },
    { n: "The schedule came from Ms. Han at six o'clock exactly." },
    { phone: [
      { from: 'han', t: 'Good evening, Solar. Welcome home.' },
      { from: 'han', t: "Your schedule for the week is attached. Mr. Lee asked that you have it tonight." },
      { from: 'han', t: '[PDF · Lee_S_Dec22-28.pdf]' }
    ], contact: 'Ms. Han' },
    { n: "It was a PDF. It was always a PDF. It had her name at the top in the Foundation's typeface and a table under it with four columns, and she read it on the edge of her bed with the tray still on the window seat and the city going dark outside in a matter of minutes, the way it did on the shortest day." },
    { n: "*Mon 22 — Breakfast, in. 7:15 a.m. (Mr. Lee departs 7:45.)*" },
    { n: "*Tue 23 — Nothing scheduled.*" },
    { n: "*Wed 24 — Christmas Eve dinner, in. 7:00 p.m. Guests. See wardrobe note.*" },
    { n: "*Thu 25 — LEE FOUNDATION CHRISTMAS RECEPTION. 2:00–5:00 p.m. Approx. 140 guests. Press in attendance (limited). Car 1:15.*" },
    { n: "*Fri 26 – Sun 28 — Greenwich. Depart 9:00 a.m. Return Sunday evening.*" },
    { n: "There was a wardrobe note. There was always a wardrobe note. The green velvet, taken in, for the twenty-fourth; *something navy, please, nothing with a slit,* for the twenty-fifth, in a sentence Ms. Han had very clearly been told to write and had written in a way that made it clear she'd been told to." },
    { n: "Her father had been put on her calendar. Seven-fifteen to seven forty-five. Thirty minutes of breakfast with a departure time in brackets, like a train." },
    { n: "She sat and looked at Thursday for about a minute. A hundred and forty people in a room on Fifth with a string quartet in the corner and the photographers along the back wall where you weren't supposed to notice them. It had happened every Christmas Day of her life. For the first eleven years of it she'd believed it was Christmas." },
    { n: "Then she looked at Friday." },
    { n: "Greenwich. Her grandmother's house with the long lawn down to the water, Aunt Christine and Uncle Sangchul, her cousin Seojin who was two years older and had been going to Yale since she was born. Three days of being asked, kindly, by people who loved her, what she was going to do. Three days of a thing she'd done every December since she could walk." },
    { n: "She found she was already standing up." },
    { place: 'Manhattan · The Lee Apartment · Study', time: 'Evening' },
    { n: "Her mother's study was at the end of the hall, the door open about a foot, the way it always was when her mother was in it and didn't mind being found. Four thousand books, floor to ceiling, most of them read. The awards on the shelf behind the desk, the approved ones, Jaehyun's first and then hers. The lamp on. Her mother at the desk in her reading glasses with a pen in her hand and the Greenwich seating plan in front of her, already, three days early, because she liked to do things before they needed doing so that nobody could ever say she'd done them late." },
    { s: 'mom', f: 'neutral', t: "You got the schedule." },
    { s: 'solar', f: 'neutral', t: "I got the schedule." },
    { n: "Her mother looked up over the glasses. She'd been reading Solar's face since before Solar had words and she read it now, in the doorway, in about a second, and put the pen down." },
    { s: 'mom', f: 'serious', t: "Say it, then." },
    { choose: [
      { t: "I'd like to stay here, Mom. Just those three days. I'll call Halmeoni myself.", flag: 'epi-r-greenwich-soft', then: [
        { n: "She said it gently. She meant it gently. It came out sounding like an apology, which it was, and like a request, which it wasn't, quite." },
        { s: 'mom', f: 'sad', t: "Your grandmother asks for you every single year." },
        { s: 'solar', f: 'neutral', t: "And every single year you tell her I'm working." },
        { s: 'mom', f: 'sad', t: "She thinks eSports is a degree course." },
        { s: 'solar', f: 'happy', t: "It might as well be." },
        { n: "Her mother almost smiled. She took her glasses off and folded them, which she did when she'd decided something and wanted a moment before she said it, and looked at the seating plan, at the place card with *Solar* on it in her own neat hand, third on the left, between Seojin and the window." },
        { s: 'mom', f: 'neutral', t: "I'll tell her you have a cold. Not oysters. I'm not doing oysters again." },
        { s: 'solar', f: 'sad', t: "...Thank you, Mom." },
        { s: 'mom', f: 'sad', t: "Call her on the twenty-sixth. Before lunch. She sleeps after lunch, and then she'll say you didn't call." },
        { n: "She picked up the pen again. She didn't cross the place card out. She moved it, carefully, to the edge of the desk, the way she'd set a place at Thanksgiving for somebody she knew wasn't coming." },
        { stat: { kindness: 1 } }
      ] },
      { t: "I'm not going to Greenwich.", flag: 'epi-r-greenwich-flat', then: [
        { n: "Five words. No *I'd like,* no *Mom.* She heard them land in the study the way you hear a glass set down too hard on a table." },
        { n: "Her mother took her glasses off." },
        { s: 'mom', f: 'serious', t: "That's your father's sentence." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { s: 'mom', f: 'serious', t: "He says it about Davos. *I'm not going to Davos.* In exactly that voice. Every January, and every January they move it for him." },
        { n: "Solar stood in the doorway and didn't take it back. She'd thought she would. Her whole body had been ready to, the warm cadence loaded and waiting, *I just mean, I'm so tired, Mom,* and she found, standing there, that she didn't want to use it. She just wanted to have said the true thing, in her own voice, once, in this apartment, and let it stand there." },
        { n: "Her mother looked at her for a long time." },
        { s: 'mom', f: 'sad', t: "You'll be alone in this apartment for three days." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { s: 'mom', f: 'sad', t: "You have never once been alone in this apartment." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { n: "Something went across her mother's face then that Solar couldn't read, which almost never happened. Not anger. Something closer to the look she'd had in the photographs from before Solar was born, the ones in the hall nobody asked about, a young woman in a borrowed coat looking at something just out of the frame." },
        { s: 'mom', f: 'neutral', t: "...Mrs. Oh will leave you food. You'll eat it." },
        { stat: { courage: 1 } }
      ] }
    ] },
    { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Evening' },
    { n: "At six fifty-two her phone buzzed on the bed. Ms. Han. A new PDF. The same table, the same columns, the same wardrobe note. And underneath Friday, in nine-point, in italics:" },
    { n: "*NB — Miss Lee has advised she will not travel to Greenwich. Ms. Han to confirm.*" },
    { n: "Eleven minutes. She hadn't told Ms. Han anything. She'd told her mother, in a doorway, and her mother had picked up the phone the second Solar was out of the room, and now it was a line in a document with a version number, and somewhere in an office on Park her father would read it tomorrow at seven and know before the eggs." },
    { n: "That was how this apartment worked. Everything you said in it got typed up." },
    { n: "She put the phone face down on the bed. She lay back next to it and looked at the ceiling, which was twelve feet up and had a little plaster rose in the middle of it she'd counted the petals on a thousand times as a girl. Twenty-four. Still twenty-four." },
  ] },

  // ───────────────────────────── 12/21, late: her own bed (no consume) ─────────────────────────────
  { id: 'epi-r-own-bed', date: '12/21', slot: 'late', title: 'the longest night', place: 'Manhattan · The Lee Apartment · Her Room', time: 'Late Night', scene: [
    { music: 'epi-r-late' },
    { n: "Her own bed." },
    { n: "It was much bigger than the one in Alpha. She'd forgotten. She lay in the middle of it with the duvet up to her chin and her arms out on top of it like a starfish and felt the edges a long way off on either side, and the sheets were cool and pressed and smelled of the laundry service, and the radiator under the window seat made no sound at all, because the building ran on a system nobody had ever explained to her and it never once knocked." },
    { n: "She missed the knocking. That was stupid. She lay there and missed it anyway." },
    { n: "The curtains were open. They always had been. She'd fought her mother about it at nine and won, and never lost the habit: the building across the street with its four hundred windows, half of them lit even now, at eleven at night, a man in a kitchen, a woman on a treadmill, a Christmas tree in a window on the seventh floor going red, green, red, green, a television, a television, a dog asleep on the back of a couch. Four hundred small lives in squares. Enough light came off them to read a clock by, a low gray-gold that lay across her ceiling and moved a little when a car went by below." },
    { n: "The longest night of the year. Fifteen hours of dark, she'd read, and some minutes. She didn't count the minutes." },
    { n: "At eleven the front door went." },
    { n: "Her whole body locked under the duvet, which was ridiculous, because it was her brother, he'd gone out at nine to see someone from his high school team and said he'd be back at eleven, and it was eleven. Footsteps down the hall, unhurried, the floor in the hall making the noise it had always made at the third board from the study. And then a pause outside her door. About a second and a half." },
    { n: "Two knuckles. Twice. Very lightly, on the wood. No words." },
    { n: "Then the footsteps went on, and his door shut." },
    { n: "She lay there in the gray-gold with her heart going, and then she smiled at the ceiling, because she'd forgotten that, too. It was the oldest thing he did. He'd done it since she was six and afraid of the dark and he was nine and too proud to say goodnight in words. *That was hello,* she'd have said, if anyone had been there to ask. It was the most he'd said to her at a door since August." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'solar', t: "my mother said i've lost weight in my FACE" },
        { from: 'haechan', t: 'you have' },
        { from: 'solar', t: "HAECHAN" },
        { from: 'haechan', t: "in the jaw. its been going since regionals" },
        { from: 'haechan', t: "eat something with fat in it. youve been living on rice and terror" },
        { from: 'solar', t: "i hate that you can tell that from 250 miles away" },
        { from: 'haechan', t: 'mm' }
      ], contact: 'haechanah' },
      { n: "She looked at the *mm* for a while and didn't know why. Then the dots came up, and went away, and came up again, which he never did; he was a man who decided what he was going to say and then said it, and the dots going on and off like that were the closest thing she'd ever seen to him changing his mind in real time." },
      { phone: [
        { from: 'haechan', t: "ive got a session in the city this week. paid. its a job" },
        { from: 'haechan', t: "not a gesture. dont make it a gesture" },
        { from: 'solar', t: "you're coming to new york" },
        { from: 'haechan', t: "the session is coming to new york. im attached to it" },
        { from: 'solar', t: "haechan" },
        { from: 'haechan', t: "go to sleep princess. you were on a roof" }
      ], contact: 'haechanah' },
      { n: "She held the phone against her chest in the middle of the enormous bed. The jacket was on the chair across the room, black on white, a shape in the window-light, and she could smell it from here, faintly, or thought she could, which came to the same thing at midnight." },
      { phone: [
        { from: 'solar', t: "queue tomorrow? 11" },
        { from: 'haechan', t: "i dont have my mouse" },
        { from: 'solar', t: "you went somewhere without your MOUSE" },
        { from: 'haechan', t: "i packed in eleven minutes" },
        { from: 'haechan', t: "11. goodnight, princess" }
      ], contact: 'haechanah' }
    ] },
    { ifEpiRoute: 'cover', then: [
      { phone: [
        { from: 'haechan', t: 'made it?' },
        { from: 'solar', t: "made it. no snow here. not one flake" },
        { from: 'haechan', t: "tragic. the city never commits" },
        { from: 'haechan', t: "sleep. you were on a roof" }
      ], contact: 'haechanah' },
      { n: "A friend's text. That was what it was. Four lines from a boy who'd held her while the sky tried to take her and then stepped back first and put his hands in his pockets like he'd borrowed something. She read it three times anyway, which was more times than four lines needed, and didn't think about why." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'minji', t: "at my grandmother's. she went to bed at 8:30 and left me a plate of japchae the size of a hubcap" },
        { from: 'minji', t: "i haven't opened the card from last night. or this morning's. they're in my bag in a sock" },
        { from: 'minji', t: "i just wanted you to know where they are" },
        { from: 'solar', t: "in a sock" },
        { from: 'minji', t: "the safest sock in new jersey" }
      ], contact: 'minjibear' }
    ] },
    { phone: [
      { from: 'hyein', t: "@hyein: HOME. my mom made me try on three dresses before i got my coat off" },
      { from: 'hanni', t: "@hanni: mine asked if i had a boyfriend in the first four minutes. i timed it" },
      { from: 'solar', t: "@solar: mine said i've lost weight in my face" },
      { from: 'hyein', t: "@hyein: in your FACE??" },
      { from: 'hanni', t: "@hanni: that's so specific" },
      { from: 'hyein', t: "@hyein: is it the cheekbones. you DO have more cheekbones. i noticed on the 1st i just didn't want to say" },
      { from: 'hanni', t: "@hanni: sol. are you okay. actually" },
      { from: 'solar', t: "@solar: i'm in my room. i'm in bed" },
      { from: 'hanni', t: "@hanni: that's not what i asked" }
    ], contact: 'hanni, hyein 🩷' },
    { n: "She looked at that for a long time. *That's not what I asked.* Her mother's sentence, on a Sunday, about a gray coat. It turned out everybody who loved her had the same one." },
    { ifEpiRoute: 'cover', then: [
      { phone: [
        { from: 'hyein', t: "@hyein: are we talking about last night" },
        { from: 'hanni', t: "@hanni: not on the phone" },
        { from: 'hyein', t: "@hyein: ok but are we EVER" },
        { from: 'solar', t: "@solar: yes. in person. i promise" },
        { from: 'hanni', t: "@hanni: ok. that's enough. that's all i needed. go to sleep" }
      ], contact: 'hanni, hyein 🩷' }
    ], else: [
      { phone: [
        { from: 'solar', t: "@solar: i'm okay. i promise. i'll tell you the real version in january" },
        { from: 'hanni', t: "@hanni: there's a real version??" },
        { from: 'hyein', t: "@hyein: THERE'S A REAL VERSION" },
        { from: 'solar', t: "@solar: goodnight 🩷" }
      ], contact: 'hanni, hyein 🩷' }
    ] },
    { n: "She put the phone face down on the nightstand. She lay in the gray-gold and watched the tree on the seventh floor across the street, red, green, red, green, until her eyes started to close." },
    { n: "At 11:59 she opened them again. She didn't decide to. She just found herself awake, very awake, watching the clock on the nightstand, the old one with hands, the one she'd had since she was ten." },
    { n: "The second hand went round. Fifty-eight. Fifty-nine." },
    { n: "Twelve." },
    { n: "It kept going. Twelve-oh-one. Across the street the tree went red, green, red. A car went by below with its radio on. Nothing stopped. Nothing went green. Nothing pulled." },
    { n: "She watched it all the way to twelve-oh-five, to be sure. Then she turned over into the middle of her own enormous bed, and slept, for the first time in three weeks, straight through until morning." }
  ] },

  // ───────────────────────────── 12/22, early: breakfast with her father ─────────────────────────────
  { id: 'epi-r-breakfast-dad', date: '12/22', slot: 'early', consumes: true, title: 'seven-fifteen', place: 'Manhattan · The Lee Apartment · Dining Room', time: 'Morning', scene: [
    { music: 'epi-r-home' },
    { n: "Breakfast was in the dining room, because it was on the schedule, and things on the schedule happened in the rooms they were scheduled in." },
    { n: "The dining room seated fourteen. It had a table you could have landed a small plane on, dark wood polished so the chandelier came out of it upside down, and twelve-foot ceilings, and it had the worst acoustics of any room she'd ever been in, including the eSports lab during a scrim, because with four people at one end of it every sound went all the way down to the other end and came back late and a little wrong, a spoon on a saucer, a cough, a page turning, so that eating breakfast in it felt like eating breakfast in a museum after closing." },
    { n: "Clear today. The sun, for once, came in low through the tall windows at the far end, gold and very cold-looking, and lay across the empty half of the table like a cloth." },
    { n: "Seven-fourteen. She was there first, on purpose. Jaehyun came in at seven-fifteen exactly in a quarter-zip, his hair wet, and sat across from her and moved his coffee cup from his right hand to his left without looking at it. Her mother came in at seven-sixteen in her reading glasses with her phone." },
    { n: "Her father came in at seven-seventeen." },
    { n: "She'd heard his voice on the phone twice this month. She'd heard it a thousand times in her life. She hadn't seen him since a Sunday in August in the lobby downstairs, when he'd shaken Jaehyun's hand and put his own on her shoulder for exactly one second, and said *call your mother,* and got into a car." },
    { n: "Jaesang Lee in person was smaller than his voice. He always had been. A man of medium height in a dark suit and a white shirt and no tie yet, the tie folded in his jacket pocket for the car, his hair gone gray at the temples in the precise way the Journal liked to photograph, the reading glasses he never wore in pictures folded in his breast pocket beside the tie. He carried the paper folded into quarters, the way he'd carried it every morning of her life. He sat at the head of the table. Not the end near them; the head. There was an empty chair between him and her mother, and three between him and Solar." },
    { s: 'dad', f: 'neutral', t: "Good morning." },
    { s: 'solar', f: 'neutral', t: "Good morning, Dad." },
    { n: "He looked at her. For about two seconds, over the top of the folded paper, the way he looked at a page before he decided whether it was worth reading all the way through. She sat very straight and let him. She'd been let looked-at by this man her entire life. She had never once learned to like it, and never once let him see that." },
    { s: 'dad', f: 'neutral', t: "Your mother says you've lost weight in your face." },
    { s: 'mom', f: 'flustered', t: "Jaesang." },
    { s: 'dad', f: 'neutral', t: "I'm reporting." },
    { n: "Down the table the word went to the far wall and came back. *Reporting.* Jaehyun, across from her, looked at his eggs with enormous concentration." },
    { n: "Mrs. Oh brought the coffee herself, which she didn't usually; someone from the service brought the coffee. She poured her father's first and Solar's second, and on the way past Solar's chair she put a hand on the back of it, briefly, and took it away again." },
    { s: 'dad', f: 'serious', t: "Jaehyun. The draft." },
    { n: "And her brother put his fork down and said, in the voice from the back seat of the car at Little Falls, word for word: *I'm keeping my options open, Dad. The conversations are going well. I'll know more after the combine.*" },
    { s: 'dad', f: 'neutral', t: "Good." },
    { n: "*Good,* the second way. The one Jaehyun had given a six. Solar put a piece of toast in her mouth very fast." },
    { s: 'dad', f: 'serious', t: "And the shoulder." },
    { n: "Nobody moved. The word went down the table and came back late." },
    { n: "Jaehyun didn't look at Solar. She didn't look at him. She looked at her father, who was looking at his paper, and understood that he hadn't been told, by her or by anyone, and had simply watched his son move a coffee cup from one hand to the other at seven-fifteen in the morning, and known." },
    { s: 'jaehyun', f: 'neutral', t: "It's fine." },
    { s: 'dad', f: 'neutral', t: "Your mother says you say *fine* to her now. Like she's a reporter." },
    { n: "Her mother set her cup down. It went down the whole length of the room." },
    { n: "And that was all. He didn't ask what had happened, or when, or why nobody had called. He'd seen it, and said so, at a breakfast table, which was his way of writing it on the yellow pad, and her brother sat there with his left hand around his coffee and his face perfectly still, and Solar watched him be relieved and humiliated at the same time and not show either, which was the one thing all four of them in that room had in common." },
    { s: 'dad', f: 'neutral', t: "Solar. Friday at two." },
    { n: "He remembered. Of course he remembered. He'd written it on the yellow pad by the phone in the study, on a Saturday morning in his robe." },
    { choose: [
      { t: "It went well. I checked my work.", then: [
        { n: "Jaehyun's line. It came out perfectly. Her father nodded once." },
        { s: 'dad', f: 'neutral', t: "You always finish early." },
        { s: 'solar', f: 'neutral', t: "I checked my work." },
        { s: 'dad', f: 'neutral', t: "...Good." },
        { n: "The third way. Jaehyun's nine." }
      ] },
      { t: "I finished early and watched the clock for eighty minutes.", then: [
        { n: "She didn't know why she said it. It was true, and she was tired, and the toast was dry, and the sun was on the table like a cloth, and she'd rehearsed the other line for two hundred and fifty miles and when it came to it she just didn't want to." },
        { n: "Her father lowered the paper." },
        { s: 'dad', f: 'serious', t: "Why?" },
        { s: 'solar', f: 'neutral', t: "To make sure it kept going round." },
        { n: "He looked at her for a long moment over the top of the paper. Not the page look. Something else, something she'd seen on him maybe twice in her life, both times in hospitals." },
        { s: 'dad', f: 'neutral', t: "...Did it?" },
        { s: 'solar', f: 'neutral', t: "Every time." },
        { s: 'dad', f: 'neutral', t: "Good." },
        { n: "The fourth way. The one Jaehyun had refused to rate." }
      ] }
    ] },
    { ifEpiRoute: 'haechan', then: [
      { n: "Her phone buzzed once on her knee under the table. She didn't look at it. She knew who it was the way you know a voice in another room; nobody else on earth texted her at seven-thirty in the morning, because nobody else on earth was awake at seven-thirty in the morning by choice, and he wasn't either. He just did it anyway, some mornings, for no reason he'd ever said." },
      { n: "She looked at it under the table while her father turned a page. *did you eat.* She typed *i'm at a table with my father* with one thumb and didn't send it. She ate a second piece of toast instead, the whole thing, and that was the answer." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Her lock screen lit on her knee under the table, a text coming in, and for one second the tiny figure on the white quad was looking up at her from her own lap, a long way off, with every one of her footprints behind her. She turned the phone over before her mother could see it. She didn't know why. It was the most innocent picture anyone had ever taken of her." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Her phone buzzed on her knee under the table: the girls, already, *@hyein: is he there is he THERE what's he wearing,* and she turned it face down on her thigh and kept her face exactly as it was, which was a thing she'd learned at this table at about the age of seven." }
    ] },
    { n: "At seven forty-four her father folded the paper back into quarters and stood up, and took the tie out of his jacket pocket, and put it on without a mirror in about nine seconds, which she'd watched him do every school morning of her life and had once, at twelve, tried to learn from a video and never managed." },
    { s: 'dad', f: 'serious', t: "Thursday. You'll do the room?" },
    { s: 'solar', f: 'neutral', t: "I'll do the room." },
    { s: 'dad', f: 'neutral', t: "Good." },
    { n: "He came down the table to go out the far door, the one to the hall, and on the way he passed behind her chair. He didn't stop. He put his hand on her shoulder for exactly one second, the way he had in August, and she felt the weight of it go all the way through her and down into the floor." },
    { n: "Then, with his hand already gone and his back half-turned, in exactly the voice he used for the arrival time of a car:" },
    { s: 'dad', f: 'serious', t: "When you're ready to tell me where you were, tell Ms. Han. She'll find us twenty minutes." },
    { n: "And he went out, and the door to the hall shut behind him with a soft expensive click, and the sound of it went down the dining room and hit the far wall and came back late." },
    { n: "Nobody said anything." },
    { n: "Her mother picked up her cup, looked into it, and put it down again without drinking. Jaehyun sat across from Solar with his left hand flat on the table, very still, the way he sat in a film room when the coach stopped the tape on his mistake." },
    { s: 'jaehyun', f: 'neutral', t: "That's worse." },
    { s: 'solar', f: 'neutral', t: "I know." },
    { s: 'jaehyun', f: 'neutral', t: "He's never booked me." },
    { s: 'mom', f: 'serious', t: "He booked me once. In 1999. I married him anyway." },
    { n: "They both turned and looked at their mother. Their mother looked at her phone, perfectly composed, and scrolled, and didn't explain, and after a second Jaehyun started laughing, silently, with his good shoulder, into his napkin, and then Solar was too, and their mother said *eat your eggs* to nobody in particular, and the laugh went down the long table and came back late and wrong, and for once that was funny too." },
    { n: "Twenty minutes. On a calendar. With a PDF. Somewhere in an office on Park a woman who had worked for her father for eleven years was already holding a slot open for a conversation Solar didn't have a single true word for, and would hold it, patiently, perfectly on time, until she did." }
  ] },

  // ───────────────────────────── 12/22, evening: the dossier ─────────────────────────────
  { id: 'epi-r-dossier', date: '12/22', slot: 'evening', consumes: true, title: 'the evidence follows her home', place: 'Manhattan · The Lee Apartment · Kitchen', time: 'Evening', scene: [
    { music: 'epi-r-danielle' },
    { flag: 'epi-r-dossier' },
    { n: "Jaehyun was eating cereal standing up in the dark kitchen at nine o'clock at night when his phone lit on the counter." },
    { n: "He did that at home. He'd always done it. The kitchen with only the one cupboard light on, the big steel fridge humming, the wonky left ring on the range that his mother had been meaning to have looked at since the redecoration, the terrible expensive coffee machine sitting in the corner like a small cold spaceship. A bowl of the cereal Mrs. Oh bought for him and pretended not to, eaten at the counter with his left hand, his right arm close against his side where it ached in the cold." },
    { n: "It wasn't a name he had saved. It was a number, and then a name under it, because she'd signed it, the way people signed letters." },
    { phone: [
      { from: 'danielle', t: "Hi Jaehyun. It's Danielle Marsh. Alpha Phi, treasurer. I'm sorry to message you over the break." },
      { from: 'danielle', t: "I didn't think this should become another SUnews story. I thought you deserved to know." },
    ], contact: 'Danielle Marsh' },
    { ifFlag: 'epi-r-footage-file', then: [
      { phone: [{ from: 'danielle', t: "[11 photos]" }], contact: 'Danielle Marsh' }
    ], else: [
      { phone: [{ from: 'danielle', t: "[12 photos]" }], contact: 'Danielle Marsh' }
    ] },
    { n: "Her real account. Not SUnews; not the anonymous one that everyone at Syracuse knew was hers and nobody could prove. Her own name, her own photo, a girl in a black coat on a ski lift. That was the first thing he noticed, and the thing he'd remember. She'd come to him with her own face on." },
    { n: "He put the spoon down." },
    { n: "The first one he'd seen before. Everyone had. October, the Sigma Chi front steps at seven in the morning, his sister coming down them in last night's clothes with her shoes in her hand and her head down, and the caption it had worn on SUnews for a whole weekend in October: *early morning, isn't it, solar? we hope it was worth it!* Somebody had sent it to him then. He'd been sent it four times. He'd never once said a word to her about it and she'd never once said a word to him about him not saying a word, and that was how they'd got through October." },
    { n: "Danielle had put it first. Of course she had. *You've seen this one,* it said, without saying anything at all. *So you know I'm not making things up.*" },
    { ifEpiRoute: 'haechan', then: [
      { n: "Then December." },
      { n: "The Sigma side gate at night, from across the street, through a parked car's window: his sister going through it, and a hand holding it for her from the other side, a black sleeve pushed up to the elbow. The fourth floor of the Extracurricular Building from the parking lot, one window lit, two people in it. A door in a hallway, *4B,* with a timestamp burned into the corner, *10:42 PM,* and the same door, the same hallway, *7:10 AM.* The landing at the holiday party, three days ago, from the bottom of the stairs, his sister against the wall with her hands in a collar, and Lee Donghyuck kissing her like he'd been waiting a whole semester to do it in a house full of people." },
      { n: "Nothing explicit. Danielle would never. Danielle didn't need to. Every picture was a door, and somebody going through it, and a time." },
      { ifFlag: 'epi-r-public-post', then: [
        { n: "He'd known since the twelfth. Jeno had sent him the post at one in the morning with no message, just the post, *hi,* the two of them, her words. He'd looked at it in the dark for a long time and then put the phone face down and gone to sleep, and in the morning he'd decided he'd known for a while already. It was true. He had." }
      ], else: [
        { n: "He'd known. Not been told; known. Since a noodle place on Marshall Street, since a hoodie at the lab glass that wasn't hers, since a man at a party who'd looked at her from a kitchen doorway the way Jaehyun's own father had once, in a photograph in the hall, looked at their mother. He'd known the way you know a coverage before the snap and decide not to check it yet." }
      ] },
      { n: "So that wasn't what did it. He could stand in a dark kitchen and look at his little sister being kissed on a landing and feel what he felt about it, which was a great deal, which was mostly about a boy who'd sat across a living room from him in October and said *I'm not having this conversation a third time,* and still be standing. He'd stood through worse. He was standing now." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Then December." },
      { n: "The honors dorm at one in the morning, through the glass of the front door: his sister signing a binder at the desk while a girl in a backwards cap stood beside her with a camera bag. The same door at eight the next morning, his sister coming out of it in an SU crewneck that wasn't hers, the girl holding the door. A balcony at the holiday party three days ago, from below, two girls at the rail, very close, one of them with a camera up and pointed at the other, the little red light caught as a dot in the dark like an eye. A dining hall table, two coffees, two hands not quite touching beside them." },
      { n: "Nothing explicit. Danielle would never. Danielle didn't need to. Every picture was a door, and somebody going through it, and a time." },
      { phone: [
        { from: 'danielle', t: "I want to be clear, I don't care who she dates. Honestly. Minji Kim is very talented." },
        { from: 'danielle', t: "I care that she tells the house she's in her room and she isn't. Someone should know where she sleeps. I assumed you'd want it to be you." }
      ], contact: 'Danielle Marsh' },
      { n: "Kim Minji. The film girl. He'd seen her at the lab glass, at Regionals, in the corner of a hundred of his sister's stories with a camera up and her face behind it. He hadn't thought anything of it. That was the thing that went in under his ribs, standing in the dark kitchen. Not the girl. That he hadn't thought anything of it, and somebody else had, and had been standing across the street with a lens." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Then December. And none of it was a boy." },
      { n: "A screenshot of a booking page for a lodge upstate, the one the girls had named to anyone who asked, with *No reservations found for this group* in red. A screenshot of the Alpha Phi sign-out sheet for the week of Thanksgiving, three names on it, *Pham, Lee, Lee,* and the destination column blank on all three, in three different pens. The Alpha Phi stairs at night, from the second landing looking up. His sister on the stairs in pajamas and socks, alone, standing very still, looking up at the top of the flight. *3:12 AM.* The same stairs, the same girl, the same stillness. *3:40 AM.* Another night. *2:58 AM.* Another. She was looking up every time. As if the stairs went further than they did." },
      { phone: [
        { from: 'danielle', t: "There was no trip. I think you know that. I think your father knows that." },
        { from: 'danielle', t: "And she's not sleeping. I live on that landing. I see her on those stairs most nights at three, just standing there. I'm not trying to get her in trouble. I don't know who else to tell." }
      ], contact: 'Danielle Marsh' },
      { n: "He stood with the phone in his left hand and looked at the one from 3:12 for a long time. His sister, small, in Hyein's socks, at the bottom of a staircase in a dark house, looking up at nothing like it was looking back. He'd stood at the bottom of a lot of staircases in her life, waiting to see if she'd fall. He'd never once seen her look up one like that." }
    ] },
    { ifFlag: 'epi-r-caption-fought', then: [
      { phone: [
        { from: 'danielle', t: "She answered my post on Saturday. At 12:04 in the morning. In public. She's never answered one, not once, all semester." },
        { from: 'danielle', t: "I thought you'd want to know she isn't herself." }
      ], contact: 'Danielle Marsh' },
      { n: "*It was my brother. He's the only one who ever shovels anything.* He'd seen it. Of course he'd seen it; Johnny had sent it to him at seven with three crying-laughing faces. He'd read it on the floor of the Sigma front hall with his bag packed and thought it was the best thing she'd ever written. Danielle had read the same eleven words and seen a crack." }
    ] },
    { ifFlag: 'epi-r-landing-dare', then: [
      { phone: [
        { from: 'danielle', t: "She told me on the landing on Friday to do whatever I wanted with what I had. So I'm doing the decent thing with it." }
      ], contact: 'Danielle Marsh' }
    ] },
    { ifFlag: 'epi-r-landing-ask', then: [
      { phone: [
        { from: 'danielle', t: "She asked me on the landing on Friday not to post anything. I want you to notice I haven't. This isn't posting." }
      ], contact: 'Danielle Marsh' }
    ] },
    { n: "Eleven photographs, and he'd looked at all of them, and he was still standing." },
    { n: "The twelfth was the one that did it." },
    { ifFlag: 'epi-r-footage-sent', then: [
      { n: "He'd seen it before. Not as a picture. As forty-one seconds of video on a Saturday morning in a frat house, twice, alone, with the sound off. Danielle had pulled a single frame out of it and put it last, the way you'd put the signature last on a letter." }
    ] },
    { ifFlag: 'epi-r-footage-kept', then: [
      { n: "A still. A frame from a video, the grain of it, the slight blur at the edges of a phone held by someone who hadn't been sure what she was filming. So she'd kept the video. Whatever she'd told his sister on the stairs on Friday night, she'd kept it, and now she'd spent one frame of it, on him, the way you'd spend the one coin you'd been saving." }
    ] },
    { ifFlag: 'epi-r-footage-file', then: [
      { phone: [
        { from: 'danielle', t: "There was a video from Friday as well. I'm not including it. I deleted it, all of it, in front of her. Whatever she's told you about me, I keep my word." }
      ], contact: 'Danielle Marsh' },
      { n: "*I'm not including it.* He read that. He read it again. She'd sent eleven; the little gray bubble said so. Then he looked at the twelfth picture, which was the video, a frame of it, the grain and the blur of a phone held by someone who hadn't been sure what she was filming, and which Danielle Marsh had just told him, in writing, she had not sent." }
    ] },
    { n: "12:00:00 in the corner, in small white numbers." },
    { ifEpiRoute: 'haechan', then: [
      { n: "The landing. The wall. Lee Donghyuck with his arms closed around a shape that wasn't anyone. His hands where her waist should have been, closed on nothing, on light, a soft green light coming off the air between them like steam off a road. And behind where his sister should have been standing, where the Sigma stairwell wall should have been, a tower." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "The living room from the stairs. Forty glasses going up. Hanni Pham at the foot of the stairs, holding a hand, and the hand was light, a soft green light that ended at the wrist. Hyein beside her, laughing, mouth open on a toast. And where his sister should have been standing between them, the fireplace, and behind it, where a wall should have been, a tower." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "The living room from the stairs. Forty glasses going up. Kim Minji at the edge of the frame with her camera raised and pointed at the foot of the stairs, its red light a dot like an eye, aimed at nothing. At a soft green light. At a fireplace, and behind it, where a wall should have been, a tower." }
    ] },
    { glitch: 'epi-r-g-frame' },
    { n: "His sister wasn't in it." },
    { n: "Not cropped out. Not blurred, not turned away, not hidden behind somebody's shoulder. Simply not there, in a picture built around the place where she was, the way a photograph of an empty chair is built around a person." },
    { n: "He made it bigger with two fingers. He made it bigger again, until it was all grain, until the tower was a smear of dark against a smear of green, and he stood there in the dark kitchen with the fridge humming and the cereal going soft and his right shoulder aching and looked at the place where his little sister wasn't, and every single hair on his arms stood up." },
    { n: "And under the picture, in the small gray line where the phone printed what it knew about a photo, the date. Not *Fri, Dec 19.* He read it three times." },
    { n: "*Wed, Dec 31 · 11:59 PM.*" },
    { n: "Nine days from now." },
    { n: "He didn't know what he was looking at. He'd watched film his whole life, ten thousand hours of it, coverages and blitzes and a hundred ways a play could go wrong in the half-second you weren't looking, and he had never once in all of it not known what he was looking at." },
    { n: "Phones glitched. That was what she'd say, if he asked. She'd say it well, in their father's voice." },
    { n: "Yesterday a green sign had gone over the car on the Thruway with a word on it that wasn't a place, and he'd turned in his seat and watched it go, and filed it." },
    { ifFlag: 'epi-r-car-fetched', then: [
      { n: "He'd filed a door on the second floor of Alpha Phi with four squares of tape on it, holding nothing." }
    ] },
    { n: "He was running out of places to put things." },
    { n: "He typed *Thank you for sending this.* He deleted it. He typed *Don't contact me again.* He deleted that. He typed *Who else has these* and looked at it for a long time and deleted that too, one letter at a time, because the answer was in the question and he didn't want her to have the satisfaction of reading it." },
    { n: "In the end he sent nothing. Wherever she'd gone home to, Danielle Marsh would watch the little word come up under her message, *Read 9:14 PM,* and nothing after it, and she would understand that, too, because she understood most things. It was the only reply he had that she couldn't use." },
    { n: "He put the bowl in the sink. He stood with both hands on the edge of the counter in the dark for a while." },
    { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Evening', soft: true },
    { music: 'epi-r-late' },
    { n: "Solar was on the window seat with her knees up and her headphones round her neck and a lobby open on the laptop beside her, nobody in it yet, when the light changed under her door." },
    { n: "A shadow. Two feet's worth, in the bar of hall light along the bottom of the door, standing still. She knew the shape. She'd known it her whole life. She waited for the two knuckles, twice, very lightly, on the wood." },
    { n: "They didn't come." },
    { n: "The shadow stood there. Ten seconds. Twenty. She sat on the window seat with four hundred windows behind her and didn't move, and on the other side of the door her brother didn't either, and she could hear him breathing, or thought she could, the careful slow breath of a man holding his right arm still so nobody would hear it go." },
    { n: "Then the shadow went away, down the hall, slowly. His door didn't shut. She listened for it a long time and it didn't shut." },
    { n: "Her phone lit on the cushion beside her." },
    { phone: [
      { from: 'jaehyun', t: "Tomorrow morning. Don't go out." },
      { from: 'jaehyun', t: "Eat first." }
    ], contact: 'big bro' },
    { n: "She read it four times. *Eat first.* As though whatever it was would be easier to hear on a full stomach. As though he'd already decided she was going to need it." },
    { n: "Across the street the tree on the seventh floor went red, green, red, green. She turned her phone face down on the window seat. Then she turned it face up again, and looked at it, and didn't know which way she wanted it, and in the end held it in both hands in her lap in the dark, waiting, the way she'd waited at the top of a lot of staircases in her life for the step that wasn't there." }
  ] }

  );
})();


/* The Runners epilogue, the Manhattan pass: 12/23-12/25 (Writer C, Nov 5 2026; FEMC-RUNNERS-MANHATTAN-PLAN.md §3, canon
   outline 95-97, Better Photography parts 24-25 for the texture). Data only; story events in story-home.js's format.
   Events (R.events):
     epi-r-how-long       12/23 early    the study, twelve printed pages: "How long?" (canon 95's spine; Haechan absent). Two
                                         layers, the relationship and the pull; what she tells him (consumes)
     epi-r-christmas-eve  12/24 evening  the Lee Christmas Eve dinner: both parents, the Kwons and the Kangs, Jaehyun performing
                                         the heir, Solar in the green velvet as the version her father expected to preserve (consumes)
     epi-r-quietest-way   12/24 late     haechan: the neighborhood walk, the building (the list / the desk / the service lift),
                                         the guest log, her childhood room, "Am I here because you're angry at him?"; minji: the
                                         same with Minji and her own question; cover: alone, the girls on the phone, Haechan texts
                                         (no consume)
     epi-r-spices         12/25 early    haechan: the kitchen (Haechan POV, then hers), "Your sister's hungry. Remind me, where do
                                         wealthy people keep the spices?"; minji: Jaehyun finds Minji's footage of the empty campus
                                         (Minji asleep on the window seat); cover: Solar and Jaehyun alone. He doesn't bless it; he
                                         doesn't send the pages to Dad (consumes)
     epi-r-reception      12/25 after    the Lee Foundation reception, 2 to 5: 140 people, the reporter, Ms. Han's two minutes, the
                                         girl in velvet (consumes)
     epi-r-gifts          12/25 evening  suitcases in the hall: small gifts for Mom, Jaehyun, and Haechan / Minji / the girls (consumes)
   Flags read: the route (ifEpiRoute; and epi-route-haechan / -minji / -cover in choice `when`s), epi-r-footage-sent / -kept /
     -file (which pages Danielle's dossier ended on), epi-r-public-post (the reporter / Ms. Han), epi-r-travel-no (the car),
     epi-r-porch-fetch ("I did it once", if the porch patch lands), epi-r-jacket (his jacket in her room), and my own below.
   Flags set (the contract): epi-r-jh-all / epi-r-jh-part / epi-r-jh-none (12/23); epi-r-entry-listed (set by the scene when
     epi-r-jh-all) or epi-r-entry-desk / epi-r-entry-service (12/24, haechan and minji routes); epi-r-angry-no / epi-r-angry-honest
     (12/24, haechan and minji); optional gifts epi-r-gift-haechan-coffee / -haechan-pads / -haechan-program, epi-r-gift-minji-film
     / -minji-cloth, epi-r-gift-girls-velvet (told them: velvet and a label maker) / -girls-wait, epi-r-gift-jaehyun-sleeve / -jaehyun-noodles, epi-r-gift-mom-coffee
     / -mom-photo. No other flags.
   Glitches: { glitch: 'epi-r-g-reflection' } at the study window (12/23), { glitch: 'epi-r-g-log' } at the guest log / the
     porter's clipboard / the late book (12/24, every route). Never explained.
   Cast ids: solar haechan minji jaehyun mom dad hanni hyein marco mrkwon mrskwon velvet reporter han. None asked for.
   Inventions (Kat may change any):
     - Jaehyun prints the dossier (twelve pages) because he doesn't have the app; he lays them out on the study table like film.
     - Where the parents are Christmas night: St. Thomas's midnight service with the Kwons, then the night at the Kwons' on
       Park, because the Foundation board breakfast is at the Kwons' at eight every Christmas morning (canon 96: parents absent
       that night and the morning). Jaehyun says he's staying at a high-school friend's (Sean, on the cover route's line) and comes back early (canon 96).
     - The Kangs (story-home.js's mom call: "the Kangs were coming on the twenty-fourth, even the son") are at the dinner too;
       the Kwons are the ones who talk. Eleven at the table. Mrs. Oh serves and goes at eight.
     - Haechan's paid session: two days mixing a band's EP in Greenpoint, booked under his own name, the client's couch to sleep
       on (the lead may unify with Writer F). He comes up on the 6 to 77th.
     - Minji's grandmother lives in Leonia, New Jersey; Minji comes over on the bus; she's back at the apartment the 25th night.
     - Marco is on nights over Christmas ("I volunteer for Christmas, Miss Lee. My kids are grown."); the guest book after
       eleven ("the board wants every visitor after eleven in the book"); the porter's door on Seventy-ninth with Solar's code
       from when she was fifteen; the service lift smells of cardboard and pine; the camera's red light.
     - The second name in the guest log is her own (her handwriting, "visiting 11"), there for one line.
     - Her room's leftovers: the choir programs in the window-seat drawer (ninth grade, "Solar Lee, alto, soloist"), a Rutter
       carol with the alto line in yellow highlighter, the approved awards (Model UN, debate, the Headmistress's leadership prize),
       Jaehyun at twelve with a first-place ribbon and her at nine clapping beside him.
     - In the kitchen he makes kimchi fried rice from the Christmas Eve rice; the spices are in the drawer left of the stove,
       Mrs. Oh's system; Jaehyun knows where they are. The left ring that sticks, her mother's terrible expensive coffee machine.
     - The reception: Ms. Han's warning is the empty seat at the 11/24 Foundation Dinner (and, with epi-r-public-post, the post);
       the reporter asks about the winter fund and the November dinner.
     - Gifts: as the flags above; Haechan's to her is a deli bag (hot chips, a Pink Punch): "It was by the register."
   Canon held: Haechan is absent from the confrontation; he's in New York for his own work, not for her father; she authorizes
     him through the building herself; he never fights her brother for her and never asks anyone about her; Jaehyun doesn't
     bless it and doesn't tell the parents; on epi-r-jh-all he says nothing about the list (Writer D's 12/27 confession); the
     track stays untitled; the valley blanket promise stays unpaid; no Iwatodai explanation; nothing explicit (the room cuts away).
   Art ideas (no { cg } lines added):
     - The study table: twelve printed pages in rows, Jaehyun's hand flat on the last one.
     - The guest book at the desk at midnight, his name in her handwriting, snow on the lobby glass.
     - Her childhood room: Haechan on the window seat holding a ninth-grade choir program, four hundred windows behind him.
     - The kitchen ("the spices"): Haechan at the stove, Jaehyun in the doorway in his coat, a drawer open.
     - Minji asleep on the window seat in the gray morning, Jaehyun in the doorway with her camera.
     - The reception: Solar crouched in a gown to talk to a nine-year-old in velvet.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 12/23, morning: how long (canon 95) ─────────────────────────────
  { id: 'epi-r-how-long', date: '12/23', slot: 'early', consumes: true, title: 'how long', place: 'Manhattan · The Lee Apartment · Study', time: 'Morning', scene: [
    { music: 'epi-r-verdict' },
    { n: "Tuesday had nothing scheduled on it. Ms. Han's PDF said so in nine-point, *Tue 23: nothing scheduled,* which in that apartment meant the day had been left empty on purpose, like a chair pulled out at a table for somebody who hadn't arrived yet." },
    { n: "Her father had gone to the office at seven. Her mother had gone to lunch on Madison at eleven, with a woman whose name Solar had been told twice and had lost both times, and Mrs. Oh had the radio on low in the kitchen, something with strings, and the whole eleventh floor had the hush of a very expensive place in the middle of a gray weekday, every room soaking up sound like it was being paid to." },
    { n: "Jaehyun texted from forty feet away." },
    { phone: [{ from: 'jaehyun', t: "Study." }], contact: 'big bro' },
    { n: "One word. No question mark. There had never been a question mark on anything he'd ever sent her, but there was usually a *did you eat* attached, and there wasn't one, and she stood in the hall in her socks looking at the screen and felt her stomach go somewhere low and cold before her mind had caught up to why." },
    { n: "The study was her mother's room, four thousand books and a long table and the awards in a glass case nobody ever opened, and the curtains were half drawn against a sky the color of wet newspaper. Jaehyun was standing at the table in a gray sweater with his sleeves pushed up, and on the table, laid out in two neat rows, were pages." },
    { n: "Printed. He'd printed them. Of course he had. He didn't have the app; he'd deleted the account he'd made to see her post; and so he'd taken whatever Danielle had sent him and run it through their mother's printer at some hour of the night, and laid it out on the table in order, twelve sheets, edge to edge, the way she'd seen him lay out film on the floor of the Sigma living room before a game. Reading a field. All at once." },
    { n: "She didn't have to get closer to know what the first one was. The October morning. The Sigma porch, the light coming flat across the steps, and her in last night's clothes with her shoes in her hand. The whole campus had seen it in October, cropped tight on her face, and he'd called her about it that afternoon and said *I handled things.* This one wasn't cropped. This one had the Sigma door in it, and the time in the corner, seven-oh-four, the morning after the night he thought he'd ended." },
    { ifEpiRoute: 'haechan', then: [
      { n: "Then December. The side gate at night. A hallway outside Studio 4B, two people in it standing much too close for a hallway. A window at Sigma with the blind half down and a shape behind it she knew because it was hers. A kiss on the Alpha steps at one in the morning in the snow, shot from across the street on a long lens, grainy and unmistakable. Every one of them dated in the corner in a neat, helpful font." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { n: "Then December. The honors dorm, after seven, her name in a sign-in binder and the time beside it. Minji in socks on the stairs. A window on the third floor with two shapes in it, late. A walk across the quad under a lamppost, two girls in one scarf. Every one of them dated in the corner in a neat, helpful font." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Then December, which was thinner, and somehow worse for it. Her at the Alpha kitchen island on the second of December with a tan in the middle of a Syracuse winter. A screenshot of the group chat's *emergency vacation.* A ticket confirmation for a cabin that didn't exist, from a company that didn't either. Haechan and her in the lab doorway, nothing happening in it, captioned in the corner with a question mark. Every one of them dated in a neat, helpful font." }
    ] },
    { n: "And at the end of the second row, by itself, the last page. He had his hand flat on it. He didn't move it." },
    { s: 'jaehyun', f: 'serious', t: "How long?" },
    { n: "Measured. Quiet. The study ate it whole. It was the voice he'd used across a coffee table in a living room in October to tell two boys what they were allowed to do about her, and she'd never once been on the receiving end of it, and now she was, and it went into her exactly the way she'd always imagined it went into them." },
    { s: 'solar', f: 'serious', t: "I'm not answering that." },
    { s: 'jaehyun', f: 'serious', t: "You spent the night in his room." },
    { n: "Not a question. He touched the October page with two fingers, lightly, the way you touch a thing to check it's still there." },
    { s: 'solar', f: 'serious', t: "You don't get to ask me that." },
    { s: 'jaehyun', f: 'serious', t: "I'm not asking. I'm reading it off a sheet of paper somebody sent me. That's worse, Solar. You understand that's worse." },
    { n: "Her name. Not *Sol,* not nothing. He only used the whole of it when he'd stopped performing calm and started actually being it, and she could feel the floor of the study under her socks, the cold coming up through it from a building that ran on a system nobody had ever explained to her, and she made herself stand still in it." },
    { ifEpiRoute: 'haechan', then: [
      { s: 'jaehyun', f: 'serious', t: "October. Before I talked to them. Before I sat in that living room and told him to stay away from you. You'd already been upstairs." },
      { s: 'solar', f: 'serious', t: "You keep saying you told him to stay away like you ever told me the truth." },
      { s: 'jaehyun', f: 'neutral', t: "I told you what you needed." },
      { s: 'solar', f: 'serious', t: "You knew enough to warn me, and you decided an order was easier than telling me why. You told *him.* You told *Mark.* You told the whole house what I was allowed to do, and the one person you never sat down across a table from was me." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { s: 'jaehyun', f: 'serious', t: "October's him. And then December's somebody else, and I didn't know about either, and the person who did know was Danielle Marsh." },
      { s: 'solar', f: 'serious', t: "October's over. It was over in November. You'd know that if you'd ever asked me anything instead of telling a living room full of boys what I was allowed to do." },
      { s: 'jaehyun', f: 'neutral', t: "And this." },
      { n: "The honors dorm. The binder. Minji on the stairs in her socks, which was the most undefended Solar had ever seen her, and now it was on her mother's table in ink." },
      { s: 'solar', f: 'serious', t: "That's Minji. She asks before she films anybody. She's asked me twenty times. Danielle didn't ask her once." }
    ] },
    { ifEpiRoute: 'cover', then: [
      { s: 'jaehyun', f: 'serious', t: "October's him. You told me nothing then, and you've told me nothing since, and the person who knew was Danielle Marsh." },
      { s: 'solar', f: 'serious', t: "October's over. It's been over a long time. You'd have known if you'd ever once asked me, instead of sitting in a living room telling two boys what I was allowed to do." },
      { s: 'jaehyun', f: 'neutral', t: "And the cabin." },
      { s: 'solar', f: 'serious', t: "You *know* where I was. You came. You're the only person in this apartment who knows exactly where I was." },
      { n: "He didn't answer that. He didn't have to; he'd been there, in a dormitory with a dog by the door, and he'd come back and told their father on the phone on the twenty-fifth of November *I don't know where she is,* and it had been true. Danielle had put a fake cabin on the table in front of him as though it were the worst thing he'd find out this week. It was the only page in the stack he already knew the answer to." }
    ] },
    { n: "Her voice had gone up. She heard it go and couldn't bring it back, and Mrs. Oh's radio down the hall went on playing its strings, unbothered, the way radios did in that apartment, and Jaehyun didn't raise his voice to meet hers. He never had. Loud was for people who hadn't finished thinking yet." },
    { s: 'jaehyun', f: 'neutral', t: "I warned you because I was scared." },
    { n: "That stopped her. Not the words. The fact that he'd said them at all, flat, to the table, like a stat he'd been made to read out at a press conference." },
    { s: 'solar', f: 'sad', t: "I know you were. I'm not saying you made it up. You weren't wrong to be scared." },
    { s: 'solar', f: 'serious', t: "You were wrong about what that let you do." },
    { n: "He took that the way he took a hit on a third down, which was without moving, and she watched it land somewhere behind his eyes and get filed, and she couldn't tell what drawer it went into. She'd never been able to. That was the whole history of the two of them, in a sentence." },
    { n: "Then he moved his hand off the last page." },
    { n: "The toast. Sigma's holiday party, the nineteenth, midnight: thirty people in the living room with their glasses up and their mouths open on the same word, Jeno on the arm of the couch, Hanni and Hyein in their wine dresses, the lights from the tree smeared gold across everybody. Danielle's camera had been pointed at the place by the fireplace where Solar had been standing. She remembered standing there. She remembered the glass in her hand." },
    { n: "There was nobody by the fireplace. The tree, the glasses, a gap in the crowd exactly the size of a person, and in it nothing but the wallpaper, as clean as if no one had ever stood there in her life." },
    { ifFlag: 'epi-r-footage-sent', else: [
      { n: "And the thing was, she knew Danielle hadn't sent it. Danielle had told her so, one way or another, on the stairs at one in the morning. It was in the stack anyway. The last page, after everything Danielle had chosen, in the same neat font, dated the same night, as though the stack had simply grown it." }
    ] },
    { s: 'jaehyun', f: 'serious', t: "This one I can't read." },
    { s: 'jaehyun', f: 'serious', t: "The rest I can read. I don't like it. I can read it. This one I've looked at for six hours and I can't." },
    { s: 'jaehyun', f: 'sad', t: "How long, Solar. Not him. This. How long has this been happening to you?" },
    { n: "The same two words. A different question. She understood, standing there with her socks going cold, that it had been the second question the whole time, that the first one was only the one he knew how to ask, the one shaped like something he could handle." },
    { n: "Her body knew what she was going to do before she did. Her hands had gone to the edge of the table. She could feel the bell in her teeth, the twelfth stroke from the roof, the snow standing still in the air for one long second over Syracuse, and every hand that had been holding on to her." },
    { choose: [
      { t: "(Tell him everything. The roof too.)", flag: 'epi-r-jh-all', then: [
        { n: "She told him." },
        { n: "Not well. Not in an order. She'd always thought that when she finally said it to him she'd say it like him, flat and in sequence, facts laid on a table like cutlery. It came out of her instead the way the snow had come down on the roof, all at once and sideways." },
        { s: 'solar', f: 'serious', t: "It isn't over. Over there. It didn't let go of me when I came home, it just went quiet, and since Regionals it's been getting louder. The clocks. The snow going up. That frame. It's not Danielle's phone. It's me." },
        { s: 'solar', f: 'sad', t: "Saturday night it tried to take me back. On the roof. At midnight. There was a bell, and everybody held on, and it let go on the twelfth one. It was supposed to work. It didn't." },
        { s: 'solar', f: 'sad', t: "It's going to try again. I don't know when. I think it's a midnight. I think it's soon." },
        { n: "He didn't sit down. That was how she knew it had landed; Jaehyun sat for bad news, he always had, he sat the way their father sat, so that he'd be lower than the problem and could look up at it. He stayed standing. He put both hands on the table, one on either side of the last page, and looked at the gap by the fireplace." },
        { s: 'jaehyun', f: 'serious', t: "Who was holding on." },
        { ifEpiRoute: 'haechan', then: [
          { s: 'solar', f: 'serious', t: "Everybody. Hanni and Hyein. Minji. Chenle. Him." },
          { s: 'solar', f: 'serious', t: "And it's him in the rest of those pages, too. Since October. Since before your living room. I'm not sorry about that part and I'm not going to be." }
        ] },
        { ifEpiRoute: 'minji', then: [
          { s: 'solar', f: 'serious', t: "Everybody. Hanni and Hyein. Chenle. Haechan. Minji had a camera in one hand and me in the other." },
          { s: 'solar', f: 'serious', t: "And it's her in the rest of those pages. Since over there. I'm not sorry about that part and I'm not going to be." }
        ] },
        { ifEpiRoute: 'cover', then: [
          { s: 'solar', f: 'serious', t: "Everybody. Hanni and Hyein. Minji. Chenle. Haechan. Everybody who was there." }
        ] },
        { n: "He was quiet for a long time. Down the hall the radio finished one thing and started another. Then he said it, small, to the table, the way you say a play you've already called once and are calling again because the defense hasn't changed." },
        { ifFlag: 'epi-r-porch-fetch', then: [
          { s: 'jaehyun', f: 'serious', t: "I told you on the porch. I'll come and get you. Wherever it is." },
          { s: 'solar', f: 'sad', t: "You can't come and get me from a roof." },
          { s: 'jaehyun', f: 'serious', t: "I did it once." }
        ], else: [
          { s: 'jaehyun', f: 'serious', t: "Then next time I'm on the roof." },
          { s: 'solar', f: 'sad', t: "You don't know which roof." },
          { s: 'jaehyun', f: 'serious', t: "I found a whole city that wasn't on a map. I'll find a roof." }
        ] },
        { n: "He didn't bless anything. He didn't say *it's okay* or *I'm sorry* or any of the words a different brother would have used, and she'd have hated him for them. He just stood at their mother's table and took the weight of it, and she watched him take it, and she understood that he was never going to give it back, and that this time she'd handed it to him." },
        { bond: { jaehyun: 2 } }
      ] },
      { t: "(Tell him about Haechan. All of it. Not the roof.)", flag: 'epi-r-jh-part', when: { ifFlag: 'epi-route-haechan' }, then: [
        { s: 'solar', f: 'serious', t: "Since October. Since before your living room. You want the number, it's since then, and it stopped at camp, and it started again, and it's real, and I'm not going to apologize for it in Mom's study." },
        { s: 'solar', f: 'serious', t: "He doesn't want anything from Dad. He's never once asked me for anything. You can check. You check everything." },
        { s: 'jaehyun', f: 'neutral', t: "And this." },
        { n: "The last page. The gap by the fireplace. She looked at it and felt the bell in her teeth and said the thing she'd been saying for three weeks, to herself, in mirrors." },
        { s: 'solar', f: 'neutral', t: "It's a bad frame. Danielle's phone. Her camera does things in low light." },
        { n: "He looked at her. He read her, fast and all at once, and she watched him arrive at the edge of it, the way she'd watched him arrive at the edge of a hundred things growing up, and stop there, and not throw into it." },
        { s: 'jaehyun', f: 'neutral', t: "Okay." },
        { n: "It was the okay he used when he didn't believe you and had decided to let you have it anyway. She'd earned it. She'd keep it. It sat in her stomach like a stone she'd swallowed to be polite." },
        { bond: { jaehyun: 1 } }
      ] },
      { t: "(Tell him about Minji. All of it. Not the roof.)", flag: 'epi-r-jh-part', when: { ifFlag: 'epi-route-minji' }, then: [
        { s: 'solar', f: 'serious', t: "It's Minji. Since over there. It's real. She asks me before she does anything, she asks me twenty times, and I'm the one who keeps saying yes." },
        { s: 'solar', f: 'serious', t: "I'm not telling you so you'll approve. I'm telling you so you stop finding things out from Danielle Marsh." },
        { s: 'jaehyun', f: 'neutral', t: "And this." },
        { n: "The gap by the fireplace. She looked at it and felt the bell in her teeth." },
        { s: 'solar', f: 'neutral', t: "It's a bad frame. Low light. Her phone." },
        { s: 'jaehyun', f: 'neutral', t: "Okay." },
        { n: "The okay he used when he didn't believe you and had decided to let you have it anyway. She took it. She'd earned it. It went down like a stone." },
        { bond: { jaehyun: 1 } }
      ] },
      { t: "(Tell him what really happened this fall. Danielle. Not the roof.)", flag: 'epi-r-jh-part', when: { ifFlag: 'epi-route-cover' }, then: [
        { s: 'solar', f: 'serious', t: "She runs SUnews. And SUanon. She told me herself, in November, to my face, in the hallway, and then she told me what she had on me so I wouldn't come to you." },
        { s: 'solar', f: 'serious', t: "She knew I didn't sleep at Alpha that night. She's been holding it since October. These pages aren't her protecting me, Jaehyun. They're her getting your number." },
        { n: "He looked at the stack differently then. She watched him do it, every page at once, the dates, the font, the helpfulness of it, and something in his jaw set that she'd only ever seen set on a sideline." },
        { s: 'jaehyun', f: 'serious', t: "You told me to be careful with her." },
        { s: 'solar', f: 'serious', t: "I'm telling you why." },
        { s: 'jaehyun', f: 'neutral', t: "And this." },
        { n: "The gap by the fireplace. The bell in her teeth." },
        { s: 'solar', f: 'neutral', t: "That one's just a bad frame." },
        { s: 'jaehyun', f: 'neutral', t: "Okay." },
        { n: "The okay that meant he didn't believe her and had decided to let her have it. She'd earned it fair and square." },
        { bond: { jaehyun: 1 } }
      ] },
      { t: "(Tell him nothing.)", flag: 'epi-r-jh-none', then: [
        { s: 'solar', f: 'serious', t: "It's a bad photograph. That's all any of them are. Somebody with a long lens and a lot of free time." },
        { s: 'solar', f: 'serious', t: "You want to know things about me, ask me. Not her. Not a printer." },
        { s: 'jaehyun', f: 'serious', t: "I'm asking you." },
        { s: 'solar', f: 'serious', t: "And I'm not answering." },
        { n: "He looked at her for a long time over the two rows of paper. Then he did something she'd never seen him do in her life, which was nothing. He didn't argue. He didn't order. He just stood there, a man who'd been given a field with no coverage on it at all and was trying to decide whether that meant the play was safe or that he'd been read." },
        { s: 'jaehyun', f: 'neutral', t: "Okay." },
        { n: "It wasn't the okay that let you have it. It was a different one, colder, one she'd only ever heard him use across the dinner table to their father. It meant the conversation had been moved to a later date without her consent." },
        { glitch: { strain: 1 } }
      ] }
    ] },
    { n: "He gathered the pages. One at a time, in order, squaring them on the table with the edge of his palm, and put them in a folder, and put the folder under his arm. He didn't put it in the shredder by the desk. She noticed that. She noticed him notice her notice it." },
    { s: 'jaehyun', f: 'neutral', t: "Did you eat." },
    { s: 'solar', f: 'neutral', t: "It's eleven-thirty." },
    { s: 'jaehyun', f: 'neutral', t: "That's not an answer." },
    { n: "He went out. She heard him go down the forty feet of hall, the careful step, his weight a quarter-inch to the left, and his door shut, softly, the way doors shut in that apartment, so that you were never sure afterward that they'd shut at all." },
    { n: "She stayed. She didn't know why. The study had gone dim around her, the gray outside thickening toward something that wasn't quite rain, and somebody had left the desk lamp on, so that the big window behind the table had turned into what windows turn into on dark days with a lamp lit: a mirror. Four thousand books, the glass case of awards, the long table. Her, in a sweatshirt, standing in the middle of her mother's room with her arms crossed." },
    { n: "She uncrossed them." },
    { glitch: 'epi-r-g-reflection' },
    { n: "The girl in the window uncrossed hers. After. Half a second after, no more, the way a sound arrives late across a field, and Solar stood very still and watched her own reflection finish a movement she'd already finished, and then stand there, matching her, perfectly, as if it had always been matching her, as if it would never dream of doing anything else." },
    { n: "She turned the lamp off. The window went back to being a window, gray, the building across Fifth with its four hundred panes, a pigeon on a sill. She went to her room and sat on the window seat with her back to the glass and didn't turn around for an hour." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'haechan', t: "session's running long. the bassist found a new opinion" },
        { from: 'haechan', t: "you went quiet at 10" },
        { from: 'solar', t: "jaehyun got some mail" },
        { from: 'haechan', t: "mm" },
        { from: 'haechan', t: "you ok" },
        { from: 'solar', t: "i'm ok. i did it myself" },
        { from: 'haechan', t: "i know you did, princess. you'd have said if you wanted company for it" }
      ], contact: 'haechanah' },
      { n: "He didn't ask what the mail was. He didn't ask what she'd said. He never asked anyone anything about her, not even her, and she sat with her back to the window and her phone against her chest and loved him for it so badly it felt like a bruise." }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'minji', t: "my grandma just asked if you're 'the tall one' from the videos. i said you're not that tall. she said 'in the videos you are'" },
        { from: 'minji', t: "tomorrow still ok? you can say no" },
        { from: 'solar', t: "tomorrow's ok. tomorrow's the only thing that's ok" },
        { from: 'minji', t: "ok. then i'll bring it" }
      ], contact: 'minjibear' }
    ] },
    { ifEpiRoute: 'cover', then: [
      { phone: [
        { from: 'hyein', t: "@hyein: status report pls. is it tuesday there too" },
        { from: 'solar', t: "@solar: it's tuesday everywhere hyein" },
        { from: 'hanni', t: "@hanni: that's not a status report" },
        { from: 'solar', t: "@solar: jaehyun found out some stuff. i handled it" },
        { from: 'hanni', t: "@hanni: do you want us to come early" },
        { from: 'solar', t: "@solar: the 27th. that's early enough" }
      ], contact: 'hanni, hyein 🩷' }
    ] }
  ] },

  // ───────────────────────────── 12/24, evening: Christmas Eve (canon 96, the dinner) ─────────────────────────────
  { id: 'epi-r-christmas-eve', date: '12/24', slot: 'evening', consumes: true, title: 'christmas eve', place: 'Manhattan · The Lee Apartment · Dining Room', time: 'Evening', scene: [
    { music: 'epi-r-evening' },
    { n: "The green dress had been taken in. Her mother had stood behind her in the mirror at five o'clock with a pin in her mouth, out of habit, because there was nothing left to pin, and looked at the velvet sitting exactly where it was supposed to sit on her daughter's shoulders and said *there she is,* the way she said it every year, as though Solar were a thing that had been misplaced since August and found at last in the right drawer." },
    { n: "It had snowed a little since four, not much, the fine dry kind that made Fifth Avenue look sifted, and the dining room had been set for eleven. The long table, the good silver, a runner of white flowers and cedar down the middle that made the whole room smell like a forest that had been to finishing school. The dining room sounded terrible. It always had. Anything you said in it came back at you off the ceiling a half-beat later, slightly too loud, so that every person who'd ever eaten in that room had learned to speak a little quieter than they meant to." },
    { n: "That suited her family. It had been built for them." },
    { n: "The Kangs had come, all of them, even the son, who worked at a bank and sat at her mother's right and was talked about in the third person while he was present. And the Kwons, who'd known her father since before Lee Industries had a second floor, and who'd been coming on the twenty-fourth for as long as she could remember, Mr. Kwon with his reading glasses on a cord and Mrs. Kwon with a laugh that could find you anywhere in an apartment." },
    { s: 'mrskwon', f: 'happy', t: "Solar. Look at you. Look at the *dress.* Solji, she looks like you did at the Foundation's tenth, she looks *exactly*—" },
    { s: 'mom', f: 'happy', t: "It's the same velvet. I had it made from the same bolt. Don't tell her, she'll be insufferable." },
    { s: 'solar', f: 'happy', t: "I'm already insufferable, Mom." },
    { s: 'mrskwon', f: 'happy', t: "And still at Syracuse. Your mother tells the Harvard story like a funeral, you know. Every year. *She turned it down,* like you'd turned down a kidney." },
    { s: 'solar', f: 'happy', t: "It was a very good kidney." },
    { n: "Mrs. Kwon laughed, and the room laughed back off the ceiling, and Solar smiled the smile she'd been building since she was eight, the one that cost nothing to look at and a great deal to wear. It fit. That was the awful thing. It still fit perfectly, like the dress. She had been away for a year in a place nobody at this table would ever believe in, and she'd come back, and the shape of the girl her father expected to find at this table on the twenty-fourth of December had been waiting in the closet for her the whole time, pressed." },
    { n: "Her father sat at the end. He always sat at the end. He'd come home at six-forty and changed and come in last, the way he came into every room, so that everyone was already standing when he arrived, and he'd kissed her on the forehead on his way past her chair without breaking stride, which was more than August." },
    { n: "Jaehyun sat across from her. Navy suit. No tie, because it was family, which in their family meant the tie had been considered and excused. And when Mr. Kwon turned to him over the fish and asked about April, she watched her brother do the thing he did better than anyone she'd ever met." },
    { s: 'mrkwon', f: 'neutral', t: "So. The draft. Your father won't tell me anything, so I'm asking the source." },
    { s: 'jaehyun', f: 'neutral', t: "I'm going back for senior year. I'd like to finish something before somebody else decides what it was." },
    { s: 'mrkwon', f: 'happy', t: "And then?" },
    { s: 'jaehyun', f: 'neutral', t: "And then the company. I'd like to start on a floor, not in an office. Learn what the people downstairs actually do before I'm in a room deciding it." },
    { n: "Mr. Kwon looked down the table at their father with an expression that was half envy and half a toast. Their father didn't smile. Their father inclined his head a quarter of an inch, which at that table was a standing ovation." },
    { n: "It was a performance. Solar knew it was a performance because she knew where every one of its seams was; she'd grown up beside the tailor. But it was also true, every word of it, and that was what made her brother so impossible to stand next to. He loved a thing that sat right inside the lines, and so he could say the lines and mean them, and it cost him nothing at all." },
    { ifFlag: 'epi-r-jh-all', then: [
      { n: "Except tonight it cost him something. She could see it. Every time the clock on the sideboard caught the light, his eyes went to it, and then to her, and then back to Mr. Kwon, a quarterback checking his receivers before the snap. He knew. He knew exactly what a midnight could do now, and he was sitting at their father's table saying *the company* in a steady voice and counting the minutes between the fish and the dessert like downs." }
    ] },
    { ifFlag: 'epi-r-jh-none', then: [
      { n: "He didn't look at her once during the fish. Not pointedly. That was the thing. He was perfectly pleasant, passing her the salt before she reached for it, and he didn't look at her, and the not-looking had a shape to it that only she could see, the way a room has a shape when someone's been talking about you in it." }
    ] },
    { n: "Her father asked her two questions. She'd counted them going in; she'd known it would be two, because it was always two." },
    { s: 'dad', f: 'neutral', t: "Your finals." },
    { s: 'solar', f: 'neutral', t: "Done. Friday. The last one was in a gym, which I'd like to formally object to." },
    { s: 'dad', f: 'neutral', t: "Noted." },
    { n: "He looked at her over the candles for a moment longer than the question needed. She held it. She'd been holding her father's look across tables since before she could see over them." },
    { s: 'dad', f: 'neutral', t: "And what did you learn this semester that you didn't expect to?" },
    { n: "The table didn't go quiet, exactly. The table was too well trained for that. But Mrs. Kwon's laugh paused somewhere in the middle of itself, and the Kangs' son looked up from his plate, and Solar sat in the green velvet with her fork in her hand and felt a whole year come up in her throat at once, a dorm and a dog and a tower and a city that wasn't on any map, a roof in the snow with twelve strokes on it and every hand she loved holding on." },
    { choose: [
      { t: "That I'm good under pressure.", then: [
        { s: 'solar', f: 'neutral', t: "That I'm good under pressure. Better than I thought." },
        { s: 'dad', f: 'neutral', t: "You always were." },
        { n: "He went back to his fish. It was the closest thing to a compliment she'd had from him in a year, and he'd given it to a version of her that had played a video game in front of three hundred people, which he didn't know about, and led eight people into a tower, which he'd never believe. She ate a bite of fish to keep her face where it was." },
        { stat: { charm: 1 } }
      ] },
      { t: "That people will hold on to you if you let them.", then: [
        { s: 'solar', f: 'neutral', t: "That people will hold on to you. If you let them." },
        { n: "Her father looked at her. A beat. The ceiling gave the sentence back to the room a half-second late, too loud, the way it gave everything back, and she heard it again in her own voice and wished she could take it out of the air." },
        { s: 'dad', f: 'neutral', t: "That's not a thing they teach in Intro to Business." },
        { s: 'solar', f: 'neutral', t: "No. It isn't." },
        { n: "He didn't say anything else. But he didn't go back to his fish, either, not right away, and Jaehyun across the table had gone very still with his water glass halfway to his mouth, and she understood she'd said something true at a table where true things weren't served, and that her father had heard it, and filed it, and that she'd never know which drawer." },
        { stat: { courage: 1 } }
      ] }
    ] },
    { n: "Dessert. Coffee in the front room, under the tree, which was crooked, her mother was right, and her father was wrong about it, and Mrs. Oh went at eight with the last tray and said *Merry Christmas, Miss Lee* at the door to the kitchen in a voice that had lied to her mother's face for her once and would never mention it." },
    { n: "At ten the Kwons began to put their coats on, and her mother began to put hers on, and the shape of the night came into focus the way it did every year." },
    { s: 'mom', f: 'neutral', t: "We're going down with the Kwons for the midnight service and staying on Park. The board breakfast is at eight. The car comes for both of you at quarter past one tomorrow, not twenty past, Ms. Han will have my head. Wardrobe note. *Read* the wardrobe note." },
    { s: 'solar', f: 'neutral', t: "I read the wardrobe note." },
    { s: 'mom', f: 'serious', t: "You read the first line of the wardrobe note." },
    { s: 'jaehyun', f: 'neutral', t: "I'm going to a friend's. From school. I'll go straight to the reception from there." },
    { n: "He said it to their mother, buttoning his coat. Then he looked at Solar, the first time all night for longer than the salt, and she couldn't read it. She'd never been able to." },
    { ifFlag: 'epi-r-jh-all', then: [
      { s: 'jaehyun', f: 'neutral', t: "Text me at midnight." },
      { s: 'solar', f: 'neutral', t: "Every midnight?" },
      { s: 'jaehyun', f: 'serious', t: "Every one." }
    ], else: [{ ifFlag: 'epi-r-jh-part', then: [
      { s: 'jaehyun', f: 'neutral', t: "Lock the door." }
    ], else: [
      { s: 'jaehyun', f: 'neutral', t: "Merry Christmas." }
    ] }] },
    { n: "The door. The elevator, eleven seconds, a whole family going down inside it. And then the apartment, eleven rooms and nobody in them but her, and the tree lights on in the front room, and the dining room still set, eleven chairs pushed back at eleven angles like a crowd that had just been told to leave." },
    { n: "She stood in the hall in the green velvet with her phone in her hand. She'd checked it eleven times since the fish. Jaehyun had probably counted." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'haechan', t: "done. bassist has made his peace" },
        { from: 'haechan', t: "i'm on the 6. what's your street" },
        { from: 'solar', t: "you don't get my street. you get a corner" },
        { from: 'solar', t: "madison and 77th. 11:30. wear a hat" },
        { from: 'haechan', t: "princess i've survived syracuse" }
      ], contact: 'haechanah' }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'minji', t: "on the bus. the driver has a santa hat and no christmas spirit" },
        { from: 'minji', t: "is 11:30 still ok" },
        { from: 'solar', t: "madison and 77th. bring the camera" },
        { from: 'minji', t: "i always bring the camera. i'll ask before i use it" }
      ], contact: 'minjibear' }
    ] },
    { ifEpiRoute: 'cover', then: [
      { n: "Nobody was coming. She'd known that since the PDF. She went and took the dress off and hung it on the back of the door, and put on jeans and the gray coat, because the apartment was too quiet to stay in and the snow was still coming down outside, fine and dry, and she wanted to walk somewhere that wasn't eleven rooms." }
    ] }
  ] },

  // ───────────────────────────── 12/24, late: the quietest way upstairs (canon 96) ─────────────────────────────
  { id: 'epi-r-quietest-way', date: '12/24', slot: 'late', title: 'the quietest way upstairs', place: 'Manhattan · Upper East Side', time: 'Late Night', scene: [
    { music: 'epi-r-snow' },

    // ── the Haechan route ──
    { ifEpiRoute: 'haechan', then: [
      { n: "He was under the scaffolding on the corner of Madison and Seventy-seventh at eleven twenty-six, four minutes early, which for him was a confession. Black coat, a beanie pulled down, the heavy headphones around his neck and his bag on one shoulder, and the snow coming down fine and dry in the light from a closed florist's window, settling on him the way it settled on everything on that street, as though it had been asked politely." },
      { n: "She'd changed out of the velvet. Jeans, the gray coat, and under it, where nobody in her family would see it, his jacket. Her body had decided that before she had. She'd stood at her closet at ten-forty with the gray coat in her hand and found the jacket already on." },
      { s: 'haechan', f: 'neutral', t: "You're wearing a coat over my coat." },
      { s: 'solar', f: 'flustered', t: "It's layering. People in Manhattan layer." },
      { s: 'haechan', f: 'happy', t: "Mm. Merry Christmas, princess." },
      { n: "It went into her low and warm and stupid, and she put her hands in her pockets so they wouldn't do anything on a public corner on the Upper East Side at eleven-thirty on Christmas Eve. He didn't reach for her either. He looked at her the way he looked at a room before he decided where to stand in it, which was all at once, and then he looked up Madison at the shut boutiques with their lit windows and their single handbags on pedestals like museum pieces, and said nothing about any of it, which was its own sentence." },
      { s: 'solar', f: 'neutral', t: "I'm not taking you home yet." },
      { s: 'haechan', f: 'neutral', t: "Didn't think you were." },
      { s: 'solar', f: 'neutral', t: "I want to show you some things first. Before." },
      { s: 'haechan', f: 'neutral', t: "Okay. Show me." },
      { n: "So she did. She walked him the way she'd walked at twelve, with a backpack, the route her body still knew without her: down Seventy-seventh past the brownstones with their wreaths on the doors and their window boxes full of cut pine, across Park in the middle where the trees in the median were strung with white lights all the way down to the tower at the bottom of Park, glowing like a runway for something that was never going to land. She talked. She hadn't meant to talk. The deli on Lexington where she'd bought her first can of Pink Punch at fourteen because it was pink and her mother had said it would rot her teeth. The corner where a doorman had once held an umbrella over her for a whole block because it was raining and she was nine and alone and he'd known whose daughter she was. The church whose bells she could hear from her bed." },
      { n: "He listened the way he listened to rooms. She could tell. Every so often his head would turn a quarter-inch toward some sound, a cab's tires in the slush, a radiator banging behind a basement grate, the bells starting somewhere uptown for midnight, and she understood that he was hearing her neighborhood in a way nobody who'd lived in it ever had." },
      { place: 'Manhattan · Her Old School', time: 'Late Night', soft: true },
      { n: "Her school was on a side street off Park, behind gates that had been black and gold for a hundred and twenty years and locked for the break since Friday. The chapel window was lit from inside, the way it always was at Christmas, a single bulb behind stained glass that nobody had turned off since 1960. She stood at the gates with her hands around two of the bars, cold through her gloves." },
      { s: 'solar', f: 'neutral', t: "Twelve years. Kindergarten to graduation. The choir sang in there every December. Front row, second from the left. My mother has the program framed in the study. Not that one. The one where I didn't have a solo, because it was the year before I had a solo, and she likes it better." },
      { s: 'haechan', f: 'neutral', t: "Why." },
      { s: 'solar', f: 'neutral', t: "Because in that one I'm in a row." },
      { n: "He didn't say anything. He stood next to her at the gates with the snow on his shoulders and looked at the lit window, and she felt him not say a dozen things and choose the one he did." },
      { s: 'haechan', f: 'neutral', t: "Acoustics in there any good?" },
      { s: 'solar', f: 'happy', t: "Terrible. Stone. Everything comes back at you twice." },
      { s: 'haechan', f: 'happy', t: "Mm. You'd have liked that, though. Hearing yourself twice." },
      { n: "She had. She'd loved it. She'd been fifteen and standing in a stone room with her own voice coming back off the ceiling at her a half-beat late, and it had been the only time in that building she'd ever felt like there were two of her and both of them were allowed. She didn't tell him. He knew. He always just knew, and never once said how." },
      { n: "Eight blocks. Twelve years. He'd come four hundred miles for a session and walked three of them to stand at the gate of the place that had made her, and he hadn't come for her father, and he hadn't come for her, either, not really, he'd come for his own work, under his own name, and then texted *what's your street.* She held on to the bars a second longer than she needed to." },
      { s: 'solar', f: 'neutral', t: "Okay. Now home." },
      { place: 'Manhattan · The Building · Lobby', time: 'Late Night', soft: true },
      { n: "The lobby at midnight on Christmas Eve was the loudest quiet room in New York. Marble floor, the white arrangement the size of a car, the brass on everything polished until it looked wet. Snow on the glass of the revolving door behind them. Marco at the desk in his gray uniform with a paper cup of coffee and the guest book open in front of him, the real one, leather, the one the board insisted on even though everything else in the building ran on screens." },
      { s: 'marco', f: 'neutral', t: "Miss Lee. Merry Christmas." },
      { s: 'solar', f: 'neutral', t: "Marco. You're on tonight?" },
      { s: 'marco', f: 'happy', t: "I volunteer for Christmas, Miss Lee. My kids are grown. They'd rather have the house." },
      { n: "His eyes went to Haechan behind her. Not a long look. A doorman's look, the kind that took a whole person in, coat and bag and the way he was standing in the middle of the marble because there was nowhere in that room to stand that wasn't the middle of it, and filed him, and came back to her face with nothing on it at all." },
      { n: "This was the part. She'd known it since the PDF. You didn't get into this building by being quiet. You got in by somebody who lived here saying your name out loud at a desk." },
      { ifFlag: 'epi-r-jh-all', then: [
        { n: "She opened her mouth to do it. Marco was already looking at his screen." },
        { s: 'marco', f: 'neutral', t: "And this is Mr. Lee? Donghyuck, is it?" },
        { n: "Haechan went absolutely still behind her. She felt it in the air, the jaw, the half-second of nothing." },
        { s: 'haechan', f: 'neutral', t: "...Yeah." },
        { s: 'marco', f: 'neutral', t: "You're on the list, sir. Through the fourth of January. Go right up." },
        { s: 'solar', f: 'surprised', t: "He's on the list?" },
        { s: 'marco', f: 'neutral', t: "It's been there since Saturday." },
        { n: "Saturday. Saturday she'd been on a roof in Syracuse in the snow with twelve strokes of a bell going through her teeth. Saturday nobody in this building should have known his name. She looked at Marco. Marco looked at the guest book with the serene professional blankness of a man who'd been asked once, a long time ago, by someone in this family, not to say who'd asked." },
        { s: 'marco', f: 'neutral', t: "The list is the list, Miss Lee." },
        { n: "There were three people who could put a name on that list. Two of them were at a midnight service on Park with the Kwons. She didn't let herself finish the thought. She was afraid of what it would do to her face in a lobby." },
        { flag: 'epi-r-entry-listed' },
        { s: 'marco', f: 'neutral', t: "I'll still need it in the book, though. Christmas. The board wants every visitor after eleven in the book, list or no list." }
      ], else: [
        { n: "Haechan didn't move. He didn't step forward and he didn't step back, and he didn't say a word, and she understood that he wasn't going to. That it wasn't his to say. That he'd stand on that marble until morning before he'd ask a man at a desk to let him into her life." },
        { choose: [
          { t: "(The front desk.) Marco, this is my guest. I'm authorizing him.", flag: 'epi-r-entry-desk', then: [
            { s: 'solar', f: 'serious', t: "Marco, this is Lee Donghyuck. He's my guest. I'm authorizing him." },
            { n: "It came out in her father's voice. She heard it come out that way and let it, because it was the only voice in her that this lobby had ever obeyed, and because for once she was using it for something that was hers." },
            { s: 'marco', f: 'neutral', t: "Of course, Miss Lee. I'll just need it in the book." },
            { n: "Of course. He didn't hesitate and he didn't look at Haechan again, and that was its own kind of witness: tomorrow morning there'd be a man on the day desk, and a book, and her name next to his in ink, and anyone in this family who wanted to know who'd come up to the eleventh floor on Christmas Eve would only have to turn a page." }
          ] },
          { t: "(The service lift.) Not tonight, Marco. Merry Christmas.", flag: 'epi-r-entry-service', then: [
            { s: 'solar', f: 'neutral', t: "Merry Christmas, Marco. We're just. Getting something from the corner." },
            { s: 'marco', f: 'neutral', t: "Of course, Miss Lee." },
            { n: "Back out through the revolving door into the snow, and around the corner onto Seventy-ninth, to the porter's door with the keypad that had had the same code since she was fifteen, because she'd watched Mrs. Oh punch it in with groceries one afternoon and never forgotten it, and the building had never once changed it, because nobody who lived here had ever had a reason to come in the back." },
            { place: 'Manhattan · The Building · Service Elevator', time: 'Late Night', soft: true },
            { n: "The service elevator was steel and padded blankets and smelled of cardboard and pine needles, because every Christmas tree in the building came up this way, and there was a camera in the top corner with a small red light that didn't blink. Haechan looked at it. She looked at it. Neither of them said anything." },
            { s: 'haechan', f: 'neutral', t: "Quiet way in." },
            { s: 'solar', f: 'neutral', t: "It's not quiet. It's just quieter." },
            { n: "There was a clipboard on a hook by the panel. The porters' log. Every delivery after hours, every repair, every tree. She'd seen Mrs. Oh sign it a hundred times. Nobody had to. Everybody did. It was that kind of building." }
          ] }
        ] }
      ] },
      { n: "She took the pen. It was on a chain, because of course it was, and it was cold, and she wrote his name in her own handwriting under a list of nobody else at all, because nobody else had come to this building on Christmas Eve after eleven: *Lee Donghyuck,* and the time, and *visiting 11,* and her initials, the way her mother had taught her to initial things at eight." },
      { glitch: 'epi-r-g-log' },
      { n: "Under his name there was another." },
      { n: "In her handwriting. Her exact handwriting, the slant on the S she'd never been able to train out, the way her L always came down too long. *Solar Lee. Visiting 11.* And the time, which was now, which was the same minute as his." },
      { n: "She hadn't written it. She was holding the pen. She'd only just lifted it off the page." },
      { n: "She looked at it until the letters stopped meaning anything, a guest in her own home, signed in by her own hand, and then she blinked, and there was his name, and the time, and her initials, and under it the cream of the empty page all the way to the bottom, as clean as if no one had ever stood there in her life." },
      { s: 'haechan', f: 'neutral', t: "You okay?" },
      { n: "He hadn't seen it. She could tell he hadn't; he was looking at her face, not the page. She put the pen down. She'd decided, somewhere around the bell tower, that she was done explaining things she couldn't explain to people who'd only worry, and she didn't take it back now." },
      { s: 'solar', f: 'neutral', t: "Cold pen." },
      { n: "Eleven seconds. The elevator had a bench in it that he didn't sit on and a mirror on the back wall that she didn't look at. Eleventh floor. A wreath on the door with something gold in it. She got her key out and her hand wasn't steady, and he didn't take the key from her, and didn't say anything about her hand, and waited." },
      { place: 'Manhattan · The Lee Apartment · Hall', time: 'Late Night', soft: true },
      { s: 'solar', f: 'serious', t: "Shoes off. The floor makes a noise." },
      { s: 'haechan', f: 'neutral', t: "Nobody's home, princess." },
      { s: 'solar', f: 'serious', t: "*Shoes,* Haechan." },
      { n: "He took his shoes off. The hall ran forty feet from the front door to the study, redecorated in October in a color somebody had called *fog,* lined both sides with family in silver frames: her parents at a gala, Jaehyun in a helmet, Jaehyun in a gown, the four of them on a beach that had cost a great deal to look that casual. Haechan walked it in his socks very slowly and looked at every single one and said nothing, and she walked behind him and watched him look, and felt each frame go past like a door she was being shown through backwards." },
      { n: "First door, the coat closet. Second, the powder room. Third, Jaehyun's, open, dark, the bed made with the tight corners he'd learned at camp the summer he was fourteen and never unlearned. Fourth, hers." },
      { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Late Night', soft: true },
      { n: "She'd left the curtains open. She always did, here; there was a building across the street with about four hundred windows in it, and on Christmas Eve half of them were lit, and with the lamp off the whole room went a low gray-gold you could read a clock by." },
      { n: "She turned the lamp on anyway. She wanted him to see it." },
      { n: "He stood in the middle of it with his bag still on his shoulder. Twenty-two feet by eighteen, a window seat, its own bathroom, a bed she had never once chosen anything about with a folded towel on the end of it in the shape hotels do. And on the walls and the shelves, the things that had been allowed to stay." },
      { n: "The awards. Model UN, three years, the gavel mounted on walnut. Debate. A crystal thing from the Headmistress that said LEADERSHIP in a font that wanted to be carved into a building. On the shelf above the desk, a photograph in a heavy frame: Jaehyun at twelve on a stage with a blue first-place ribbon and a trophy almost as tall as he was, and next to him, a little out of focus, a girl of nine in a velvet dress, clapping." },
      { n: "That was the one her father had chosen for her room. Not one of her. One of her clapping." },
      { n: "Haechan put his bag down. He went to the window seat and sat on the end of it, and his hand found the little brass pull on the drawer underneath, the way hands find things in rooms they've never been in, and he looked at her before he opened it. Asked, without asking. She nodded." },
      { n: "The programs. Every December from seventh grade to senior year, cream card, the school crest, rubber-banded together because she'd taken them out of the study one by one over four years and hidden them here where nobody looked. Sheet music under them, a Rutter carol, the alto line gone over in yellow highlighter so many times the paper had gone soft as cloth." },
      { n: "He took the top one out. Ninth grade. He read it the way he read a track list, all the way down, every name, and she watched him get to the line she knew he'd get to and stop." },
      { s: 'haechan', f: 'neutral', t: "*Solar Lee, alto. Soloist.*" },
      { s: 'solar', f: 'neutral', t: "Once." },
      { s: 'haechan', f: 'neutral', t: "Once is a lot." },
      { n: "He didn't make it into anything. He didn't say *you should sing again* or *I knew it* or any of the things anyone else would have said, the things that would have turned it into a project. He held the cream card between two fingers by the edges, carefully, the way you'd hold a negative, and looked at her name on it, and then up at the room around it, the gavel and the crystal and the girl clapping, and she watched him put the whole thing together in one long quiet second." },
      { n: "The version of Solar her father expected to preserve. All of it, kept, dusted, a room made up every day for a girl who'd stopped existing somewhere around the end of ninth grade and been very well replaced. And under the window, in a drawer, the one thing in it that was hers." },
      { n: "He put the program back. Squared it with the others. Closed the drawer. Then he looked at her across the room, the lamp between them, and when he spoke it wasn't flat at all." },
      { s: 'haechan', f: 'serious', t: "Am I here because you're angry at him?" },
      { n: "Not *princess.* Not anything. Just the question, set down between them like something heavy he'd carried up eleven floors and wanted her to see the weight of." },
      { n: "She knew which *him.* She knew he didn't know about the study, the twelve pages, *How long.* He didn't have to. He'd been the instrument of somebody else's anger before, at eighteen, with a recording, and a boy who'd been that once could feel the shape of it from four hundred miles off." },
      { choose: [
        { t: "No. You're here because I wanted you to see this.", flag: 'epi-r-angry-no', then: [
          { s: 'solar', f: 'serious', t: "No." },
          { s: 'solar', f: 'serious', t: "You're here because nobody from Syracuse has ever seen this room. Not Hanni. Not Hyein. Nobody. And I wanted the first person to be somebody who'd look in the drawer." },
          { n: "She went to the window seat. She opened the drawer again herself, and took out the ninth-grade program, and put it in his hands, and closed his fingers over it with hers." },
          { s: 'solar', f: 'neutral', t: "That's not about Jaehyun. That's about me." },
          { n: "He looked down at their hands for a long time. She felt something in him come down a quarter of an inch, the way the man at the desk's shoulders had come down, the way a held note lets go." },
          { s: 'haechan', f: 'neutral', t: "Okay." },
          { s: 'haechan', f: 'happy', t: "Bad room for it, princess. Twelve-foot ceiling. Everything comes back at you twice." },
          { bond: { haechan: 1 } }
        ] },
        { t: "A little. He found out. But that isn't why you're here.", flag: 'epi-r-angry-honest', then: [
          { s: 'solar', f: 'serious', t: "A little." },
          { n: "She made herself hold his look while she said it. He'd taught her that, without meaning to: you didn't flinch on the true part. You flinched after, if you had to, in private." },
          { s: 'solar', f: 'serious', t: "He found out. Yesterday. Somebody sent him pages, and he printed them, and laid them out on my mother's table like a playbook. I'm angry. I'm going to be angry for a while." },
          { s: 'solar', f: 'serious', t: "But I was going to bring you here before any of it. I had the corner picked out on Saturday. I'm not using you to make a point at him. If I wanted to make a point at Jaehyun I'd make it to his face. I just did." },
          { n: "He was quiet. He turned the program over once in his hands, and back." },
          { s: 'haechan', f: 'neutral', t: "Okay. Good. That I can work with." },
          { s: 'haechan', f: 'neutral', t: "Angry and true, I can work with. It's the other kind I've been." },
          { n: "He didn't say what other kind. He didn't have to. It sat in the room for a second, the worst thing he'd ever done, the thing she knew and Jaehyun didn't, and then he put it down, carefully, beside the program on the window seat, and let her see him put it down." },
          { bond: { haechan: 1 } }
        ] }
      ] },
      { n: "She turned the lamp off." },
      { n: "The room went gray-gold. Four hundred windows. Somewhere uptown the midnight bells were finishing, and somewhere on Park her parents were standing in a pew with the Kwons, and on the eleventh floor of a building on Fifth Avenue a boy from Syracuse was sitting on the window seat of the room she'd grown up in, on Christmas, admitted through the front of her life by her own hand, and she knew every reason her brother would object, and had decided anyway." },
      { s: 'haechan', f: 'neutral', t: "Leave them open." },
      { s: 'solar', f: 'neutral', t: "The curtains?" },
      { s: 'haechan', f: 'neutral', t: "I want to see where you were." },
      { n: "She left them open. She crossed the room to him in the not-dark and he stood up off the window seat to meet her, and his hands came up to her face, cold still from the walk, and she pushed the gray coat off her shoulders and let it fall, and under it was his jacket, and he stopped." },
      { n: "He looked at it for a long second. Then he huffed, once, not quite a laugh, into the space between them, and kissed her, slowly, like there was no one on the eleventh floor but them and no clock anywhere in the building." },
      { n: "Nobody had ever been in that bed with her. There was a considerable amount of whispered negotiation about the number of pillows. Then there wasn't." },
      { n: "Later, much later, with the bells long finished and the snow still sifting past four hundred windows, she lay with her head on his chest and listened to his heart slow down, and it was the loudest thing in the apartment, and it was the only thing in the whole of Manhattan she wanted to hear." }
    ] },

    // ── the Minji route ──
    { ifEpiRoute: 'minji', then: [
      { n: "Minji was under the scaffolding on Madison and Seventy-seventh at eleven twenty-eight with her camera bag across her body and her hat on frontwards, which meant it wasn't a game day, which meant it was a day that mattered for some other reason. Her grandmother had packed her a container of something that was still warm through the plastic. She held it out before she said hello." },
      { s: 'minji', f: 'neutral', t: "She says you're too thin in the videos. I said it's the lens. She said *it's not the lens.*" },
      { s: 'solar', f: 'happy', t: "Everyone in the tri-state area has an opinion about my face this week." },
      { s: 'minji', f: 'happy', t: "It's a good face. It's a very filmable face. I'm not filming it. I'm just saying." },
      { n: "She walked Minji the way she'd walked at twelve, down Seventy-seventh past the wreaths and the window boxes of cut pine, across Park in the middle where the white lights ran down the median toward the tower at the bottom of Park, past the deli on Lexington where she'd bought her first Pink Punch. Minji didn't take the camera out once. She looked at everything the way she looked at a frame she hadn't decided whether to keep, all the way through, and Solar watched her not film it and understood it as the gift it was." },
      { place: 'Manhattan · Her Old School', time: 'Late Night', soft: true },
      { n: "At the school gates, black and gold and locked for the break, the chapel window lit from inside the way it was every Christmas, Minji finally put her hand on the bag." },
      { s: 'minji', f: 'neutral', t: "Can I? Just the window. Not you. You can say no." },
      { choose: [
        { t: "Me too. With the window.", then: [
          { n: "Minji looked at her like she'd been handed something breakable. Then she took the camera out and framed it, the gate, the chapel light, Solar's gloved hands around two of the bars, and filmed for exactly eleven seconds, and put it away, and didn't play it back." },
          { s: 'minji', f: 'neutral', t: "I'll show you first. Before anyone. Even me." }
        ] },
        { t: "Just the window.", then: [
          { n: "Minji filmed the window. Only the window, the stained glass, the single bulb behind it nobody had turned off since 1960, eleven seconds, and put the camera away, and didn't ask why." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "The choir sang in there every December. I had a solo once. Ninth grade. My mother framed the year before, when I was just in a row." },
      { s: 'minji', f: 'serious', t: "She framed the wrong one." },
      { n: "It was so flat and so sure that Solar laughed, out loud, on a side street off Park at midnight, and the sound came back off the stone of the chapel a half-beat late, twice, and Minji turned her head toward the echo like she wanted to film that too, and didn't." },
      { place: 'Manhattan · The Building · Lobby', time: 'Late Night', soft: true },
      { n: "The lobby. Marble, brass, the white arrangement the size of a car, snow on the glass. Marco at the desk on Christmas Eve with a paper cup of coffee and the leather guest book the board insisted on." },
      { s: 'marco', f: 'neutral', t: "Miss Lee. Merry Christmas." },
      { ifFlag: 'epi-r-jh-all', then: [
        { s: 'marco', f: 'neutral', t: "And this is Miss Kim? You're on the list, miss. Go right up." },
        { s: 'solar', f: 'surprised', t: "She's on the list?" },
        { s: 'marco', f: 'neutral', t: "Since Tuesday night. The list is the list, Miss Lee." },
        { n: "Tuesday night. After the study. After *How long* and twelve pages and everything she'd told him. Three people could put a name on that list and two of them were in a pew on Park. She didn't let her face finish the thought." },
        { flag: 'epi-r-entry-listed' },
        { s: 'marco', f: 'neutral', t: "I'll still need it in the book. Christmas. The board likes every visitor after eleven." }
      ], else: [
        { n: "Minji stood half a step behind her and didn't say a word. Not shy. Minji was never shy. She was waiting to be asked into somebody's life, the way she always waited, and she would have waited all night." },
        { choose: [
          { t: "(The front desk.) Marco, this is my guest. I'm authorizing her.", flag: 'epi-r-entry-desk', then: [
            { s: 'solar', f: 'serious', t: "Marco, this is Kim Minji. She's my guest. I'm authorizing her." },
            { s: 'marco', f: 'neutral', t: "Of course, Miss Lee. In the book, please." }
          ] },
          { t: "(The service lift.) Not tonight, Marco.", flag: 'epi-r-entry-service', then: [
            { s: 'solar', f: 'neutral', t: "Merry Christmas, Marco. We forgot something at the corner." },
            { n: "Around onto Seventy-ninth, the porter's door, the code she'd learned watching Mrs. Oh at fifteen. The service lift, steel and padded blankets and pine needles, a camera in the corner with a red light that didn't blink. Minji looked at the camera the way a professional looks at another professional's work." },
            { s: 'minji', f: 'neutral', t: "Wide angle. Bad low light. It'll get us, though." },
            { n: "There was a clipboard by the panel. The porters' log. Nobody had to sign it. Everybody did." }
          ] }
        ] }
      ] },
      { n: "She took the pen and wrote Minji's name in her own handwriting, and the time, and *visiting 11,* and her initials." },
      { glitch: 'epi-r-g-log' },
      { n: "Under it there was another name. Hers. *Solar Lee. Visiting 11.* Her slant on the S, her L too long, the same minute. She was still holding the pen. She blinked, and it was Minji's name alone on a clean cream page." },
      { n: "Minji was looking at the page, not at her. She'd seen something. Solar could tell from her stillness, the cameraman's stillness, the one that came over her right before she decided whether a frame was a keeper. She didn't say anything. She'd asked Solar a long time ago whether she could keep a camera on her, just so someone was watching who knew what they were looking at, and she'd meant her eyes too." },
      { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Late Night', soft: true },
      { n: "Shoes off in the hall. Forty feet of family in silver frames, Minji looking at every one with her hands in her pockets. Fourth door. The curtains open on four hundred windows. The awards, the gavel, the crystal LEADERSHIP. The photograph of Jaehyun at twelve with his ribbon and her at nine beside him, clapping." },
      { n: "Minji stood in front of that one for a long time." },
      { s: 'minji', f: 'serious', t: "They picked this one for your room." },
      { s: 'solar', f: 'neutral', t: "My father did." },
      { s: 'minji', f: 'serious', t: "Bad framing. You're not even in focus." },
      { n: "She found the drawer in the window seat because Solar showed her, and the programs, and the yellow-highlighted alto line gone soft as cloth, and she held the ninth-grade one by its edges like a negative and read *Solar Lee, alto, soloist* and didn't say *you should sing again.* She sat down on the window seat with it in her lap. Then she looked up, and she didn't ask it the way Haechan would have, flat and heavy. She asked it the way she asked everything, with the out built in." },
      { s: 'minji', f: 'serious', t: "Can I ask you something and you tell me the true thing even if it's bad?" },
      { s: 'solar', f: 'neutral', t: "Yeah." },
      { s: 'minji', f: 'serious', t: "Am I a thing you're doing at him? Your brother. Because of the pages. I'd rather know. I can take it if I am. I'd just want to know what I'm in the frame for." },
      { choose: [
        { t: "No. You're here because I wanted you in this room.", flag: 'epi-r-angry-no', then: [
          { s: 'solar', f: 'serious', t: "No. You're here because nobody's ever seen this room. Not the girls. Not anybody. And I wanted it to be you. Somebody who'd look at the framing." },
          { n: "Minji looked at her for one long frame. Then she nodded, once, a director calling print." },
          { s: 'minji', f: 'neutral', t: "Okay. Then I'm in the right shot." },
          { bond: { minji: 1 } }
        ] },
        { t: "A little. I'm angry. But you'd be here anyway.", flag: 'epi-r-angry-honest', then: [
          { s: 'solar', f: 'serious', t: "A little. I'm angry at him. I'll be angry for a while. But I asked you here on the nineteenth, before any of it. You'd be on this window seat anyway." },
          { s: 'minji', f: 'neutral', t: "Okay. Thank you for saying the bad part first." },
          { s: 'minji', f: 'happy', t: "That's the part I'd have checked." },
          { bond: { minji: 1 } }
        ] }
      ] },
      { n: "They didn't turn the lamp on again. They talked on the window seat with their backs to the glass until two, about nothing, about Minji's grandmother's container (japchae, still warm, eaten with two forks from the kitchen in the dark), about whether Doyoung owned a single item of clothing that wasn't navy, and somewhere around two-thirty Solar looked over and Minji was asleep sitting up against the window frame with her hat still on, four hundred lit windows behind her like a set somebody had built for her and forgotten to strike." },
      { n: "Solar put the blanket from the end of the bed over her and didn't move her. She lay down on top of the covers and watched her sleep for a while, and then didn't watch anything at all." }
    ] },

    // ── the cover route ──
    { ifEpiRoute: 'cover', then: [
      { n: "She went down alone. Marco said *Merry Christmas, Miss Lee* and *it's coming down a little* and held the door, and she went out into it." },
      { n: "She walked the way she'd walked at twelve, because her body still knew the route without her: down Seventy-seventh past the wreaths and the window boxes of cut pine, across Park in the middle where the white lights ran down the median toward the tower at the bottom of Park like a runway for something that was never going to land, past the deli on Lexington where she'd bought her first can of Pink Punch at fourteen. The snow was fine and dry and it settled on her shoulders and didn't melt, and the city had gone the way it only went on this one night, switched off and lit up at the same time." },
      { place: 'Manhattan · Her Old School', time: 'Late Night', soft: true },
      { n: "The school gates, black and gold, locked for the break. The chapel window lit from inside, a single bulb behind stained glass nobody had turned off since 1960. She stood with her hands around two of the bars and called the girls, because it was midnight on Christmas Eve and she didn't want to be the only person awake in the world." },
      { s: 'hyein', f: 'surprised', t: "SOLAR. It's midnight. Are you okay. Hanni, she's calling, she's *calling*, it's not a text—" },
      { s: 'hanni', f: 'neutral', t: "I'm right here, Hyein, it's on speaker, I can hear it ringing. Hi, Sol. Where are you? You sound outside." },
      { s: 'solar', f: 'neutral', t: "I'm at my old school. The gate. It's snowing. There's a light on in the chapel." },
      { s: 'hyein', f: 'sad', t: "That's the saddest sentence anyone's ever said to me on Christmas." },
      { s: 'solar', f: 'happy', t: "It's not sad. I used to sing in there. Front row. I had one solo." },
      { n: "There was a silence on the line. The good kind. Two girls in two different houses in two different states, hearing a thing about her nobody at Syracuse had ever heard, and choosing not to make it into anything yet." },
      { s: 'hanni', f: 'neutral', t: "You never told us that." },
      { s: 'solar', f: 'neutral', t: "I'm telling you now. At a gate. At midnight. Like a normal person." },
      { s: 'hanni', f: 'happy', t: "Twenty-seventh. Eleven-oh-five train. You're telling us the rest in person, and you're showing us the chapel." },
      { s: 'hyein', f: 'happy', t: "And the solo. Is there a recording. There's always a recording. Somebody's mom always—" },
      { s: 'solar', f: 'happy', t: "Merry Christmas, Hyein." },
      { s: 'hyein', f: 'sad', t: "That's not a no." },
      { n: "She stayed at the gate after they'd hung up, until her fingers were cold through the gloves, and when she started back toward Fifth her phone buzzed in her pocket." },
      { phone: [
        { from: 'haechan', t: "session done. bassist made his peace" },
        { from: 'haechan', t: "brooklyn's loud on christmas eve. thought you'd want to know" },
        { from: 'solar', t: "it's quiet up here. i'm walking" },
        { from: 'haechan', t: "at midnight" },
        { from: 'solar', t: "it's my neighborhood" },
        { from: 'haechan', t: "mm. text when you're inside, lee" },
        { from: 'haechan', t: "merry christmas" }
      ], contact: 'haechanah' },
      { n: "He didn't ask which neighborhood. He didn't ask anything. She stood under the scaffolding on Madison with the snow falling past the shut boutiques and their single lit handbags and felt, for one whole minute, like a person with friends in a city that had only ever had her family in it." },
      { place: 'Manhattan · The Building · Lobby', time: 'Late Night', soft: true },
      { n: "Marco on Christmas Eve, a paper cup of coffee, the leather guest book. After midnight even residents signed the late book, a thin ledger beside the big one, because the board had once had a burst pipe and nobody to account for the night it happened." },
      { s: 'marco', f: 'neutral', t: "Just your initials, Miss Lee. The board." },
      { n: "She took the pen on its chain and wrote the time and her initials, the way her mother had taught her to initial things at eight." },
      { glitch: 'epi-r-g-log' },
      { n: "Above her initials there was a name. *Solar Lee. Visiting 11.* In her handwriting, her slant on the S, her L too long, at the same minute as now, as though she'd signed herself in as a guest in her own home before she'd arrived to do it." },
      { n: "She blinked. Her initials, the time, a clean page." },
      { s: 'marco', f: 'neutral', t: "Merry Christmas, Miss Lee." },
      { n: "Eleven seconds. A mirror on the back wall of the elevator she didn't look at." },
      { phone: [{ from: 'solar', t: "inside" }, { from: 'haechan', t: "good" }], contact: 'haechanah' }
    ] }
  ] },

  // ───────────────────────────── 12/25, morning: where the spices are (canon 96's ending, 97) ─────────────────────────────
  { id: 'epi-r-spices', date: '12/25', slot: 'early', consumes: true, title: 'where the spices are', place: 'Manhattan · The Lee Apartment · Kitchen', time: 'Morning', scene: [
    { music: 'epi-r-spice' },

    // ── the Haechan route ──
    { ifEpiRoute: 'haechan', then: [
      { n: "The rice was from last night. That was the first thing he'd established, at eight-twenty in the morning on Christmas in somebody else's kitchen, barefoot on a floor that cost more than every room he'd ever lived in put together: there was a whole steel container of it in the refrigerator, short-grain, good, made by someone who knew what they were doing and then forgotten behind four kinds of mustard. Day-old rice was the only rice worth frying. He'd learned that at nine." },
      { n: "She was asleep. She'd been asleep since four, with her face mashed into one of the four pillows, the lumbar one, and one hand fisted in his shirt, and he'd lain there in the gray-gold with four hundred windows going pale across the street and listened to the building. A building like this one had a sound under it, a low steady hum like a held note, every pipe and wire and elevator cable in it agreeing about something. He'd stayed until her hand let go of him on its own. Then he'd gone to find food." },
      { n: "Because she hadn't eaten. Not really. She'd had three bites of fish at a table built to make you say less than you meant, and a hole where dinner should have been, and she'd be hungry the second she woke up, and he knew that without having to be told, the way he knew most things about her. He just knew." },
      { n: "The kitchen was enormous and it had been designed by somebody who didn't cook. Stone counters. A range with six burners, the front left one sticking when you turned it, a click that wanted a second click. A coffee machine on the counter that had clearly cost twelve hundred dollars and was making, as far as he could tell from the smell of what it had made yesterday, a four-dollar mistake. He'd pulled a shot out of it anyway, out of respect for the dead. It was atrocious." },
      { n: "Kimchi he'd found. Eggs he'd found. Scallions, butter, the rice. A cast-iron pan nobody had used since it was bought. The one thing he couldn't find in a kitchen the size of a recording studio was a single jar of anything red." },
      { n: "He was standing in front of the open pantry with the pan going on the sticking burner, opening cabinets one at a time with the resigned patience of a man searching a stranger's car for the hazard lights, when the front door opened down the hall." },
      { n: "He didn't turn around. He heard it. The latch. The coat, a heavy one, wool, shrugged off and hung, not thrown. Shoes coming off, because in this apartment the floor made a noise. And then the footsteps, unhurried, the weight a quarter-inch to the left, a man who was favoring a right shoulder and had decided you'd never see it. He knew those footsteps. He'd heard them come down a staircase in October, toward a living room, toward him." },
      { n: "He turned the rice. His hands didn't change. His face did the thing it did, the flat thing, came all the way up and set, because it was eight-thirty on Christmas morning and he was in Jaehyun Lee's kitchen in Jaehyun Lee's sister's sweatshirt, and under the flat thing everything in him had gone braced and quiet, like a room before a take." },
      { n: "The footsteps stopped in the doorway." },
      { s: 'jaehyun', f: 'serious', t: "Haechan." },
      { n: "A long pause. The rice crackled. Somewhere in the building, the held note held." },
      { s: 'jaehyun', f: 'serious', t: "...Do you happen to have a reason to be in my kitchen several hours from campus?" },
      { n: "He opened another cabinet. Glassware. He closed it." },
      { s: 'haechan', f: 'neutral', t: "Your sister's hungry. Remind me, where do wealthy people keep the spices?" },
      { place: 'Manhattan · The Lee Apartment · Hall', time: 'Morning', soft: true },
      { n: "She heard it from her bed. Not the words. The voices: one flat, one level, the two of them laid down next to each other in the kitchen like two blades on a cutting board, and she was out from under the covers and halfway up the hall in his shirt and her own socks before she'd decided anything at all." },
      { n: "Forty feet. The fog-colored walls, the silver frames, Jaehyun in his helmet going past her shoulder. The floor making its noise under her, every board telling the kitchen she was coming." },
      { place: 'Manhattan · The Lee Apartment · Kitchen', time: 'Morning', soft: true },
      { n: "Jaehyun was in the doorway with his back to her. He hadn't come in. He was standing exactly on the threshold, in last night's suit trousers and a sweater, his hand on the frame, like a man who'd stopped at the edge of a field he hadn't been told was there. And Haechan was at the stove in her sweatshirt, barefoot, with a wooden spoon, turning rice in a pan their mother had bought for a magazine shoot, and not looking up." },
      { n: "He'd made breakfast. In her kitchen. For her. That was the thing her brother was looking at. Not a photograph. Not a printed page. Not a rumor or a boy on a list or a night he could tell himself was a mistake. A pan on the stove and two bowls set out on the stone, and two spoons, and a glass of water poured and set at the place where she always sat, which he couldn't have known was where she always sat, and had." },
      { ifFlag: 'epi-r-jh-all', then: [
        { n: "Jaehyun turned his head when the floor gave her away. He looked at her for a long moment, the shirt, the socks, her hair, and she braced for the order out of a whole lifetime of habit, and it didn't come. He looked back at the boy at the stove. Not like a trespasser. Like a man looking at someone who'd been holding on to his sister on a roof in the snow at midnight, when the bell went, when he hadn't been there." },
        { s: 'jaehyun', f: 'neutral', t: "You were on the roof." },
        { s: 'haechan', f: 'neutral', t: "Yeah." },
        { n: "That was all. One word. Haechan didn't make it into anything; he didn't say *I held on* or *she'd have gone,* didn't reach for her as proof, and she watched her brother take the not-reaching and file it somewhere she'd never see." },
        { s: 'jaehyun', f: 'serious', t: "This doesn't mean I like you." },
        { s: 'haechan', f: 'neutral', t: "Wasn't going to ask." }
      ], else: [{ ifFlag: 'epi-r-jh-part', then: [
        { n: "Jaehyun turned his head when the floor gave her away. He looked at her, the shirt, the socks, and something in his jaw set that she'd only ever seen set on a sideline in the fourth quarter." },
        { s: 'jaehyun', f: 'serious', t: "You told me since October. You didn't tell me *here.*" },
        { s: 'solar', f: 'serious', t: "I didn't know I'd need to file it with you in advance." },
        { s: 'jaehyun', f: 'serious', t: "It's Christmas morning, Solar. It's our *kitchen.*" }
      ], else: [
        { n: "Jaehyun turned his head when the floor gave her away. He looked at her in the boy's shirt and her own socks, and his voice didn't rise. It went the other way. It went down and flat and very, very calm, and she knew that calm. The whole Sigma house knew that calm." },
        { s: 'jaehyun', f: 'serious', t: "Get dressed. He's leaving. I'll call down to the desk and they'll walk him out, and nobody has to hear about this, and we never have to say it out loud." },
        { n: "Haechan turned off the burner. That was all he did. He turned it off, the front left one, the one that stuck, with two clicks, and put the spoon down, and stood there with his hands at his sides, not leaving and not arguing, waiting. Not for Jaehyun. For her." }
      ] }] },
      { ifFlag: 'epi-r-entry-service', then: [
        { s: 'jaehyun', f: 'serious', t: "Marco didn't call me. Marco calls me about the dry cleaning. So you didn't come through Marco." },
        { s: 'solar', f: 'serious', t: "The porters' door. Seventy-ninth. Mrs. Oh's code." },
        { s: 'jaehyun', f: 'serious', t: "There's a camera in that lift." },
        { s: 'solar', f: 'serious', t: "I know there's a camera in that lift. I looked right at it. I wasn't sneaking him in, Jaehyun. I was bringing him in. Quieter isn't the same thing as hiding." }
      ] },
      { ifFlag: 'epi-r-entry-desk', then: [
        { s: 'jaehyun', f: 'serious', t: "Is he in the book?" },
        { s: 'solar', f: 'serious', t: "In my handwriting. With the time. I said his name to Marco's face. Anybody who wants to know who came up last night can turn a page." },
        { n: "That landed. She watched it. He'd been ready for a service lift and a lie, and she'd handed him a signature, and there was nothing to do with a signature but read it." }
      ] },
      { ifFlag: 'epi-r-entry-listed', then: [
        { n: "He didn't ask how Haechan had got in. He didn't ask about the desk, or the book, or Marco. It was the one question he'd have asked on any other day of his life, first, before anything, and he didn't ask it, and she stood there in the doorway and noticed him not ask it, and put it somewhere for later." }
      ] },
      { n: "She came into the kitchen. She came all the way in, past her brother in the doorway, close enough that her shoulder brushed his arm, the good arm, and she stood between the stove and the door, not in front of Haechan like a shield, beside the place set for her, and she put her hand flat on the stone counter next to the glass of water he'd poured." },
      { s: 'solar', f: 'serious', t: "He's not contraband, Jaehyun. He didn't come here for Dad, he came here for a job, his own, under his own name, and I'm the one who asked him up. Not the other way round. I walked him through the front of my life on purpose." },
      { ifFlag: 'epi-r-angry-honest', then: [
        { s: 'solar', f: 'serious', t: "And I'm angry at you. I told him that last night, first thing, before anything. I'm still angry about the study. That's not why he's in this kitchen. He asked me that himself. He asked if he was something I was doing at you. You never once asked if you were something you were doing at me." }
      ], else: [
        { s: 'solar', f: 'serious', t: "And it's not about you. I know you think it is. Everything in this apartment's always been about whoever's standing at the head of it. This isn't. This is about me. He asked me that himself last night. Whether he was something I was doing at you. You never once asked." }
      ] },
      { s: 'solar', f: 'serious', t: "You don't get to take him out of the room like he's a thing I brought home by accident. I didn't do any of this by accident." },
      { n: "Haechan didn't say anything. She'd been afraid he would, the whole forty feet of hall: afraid he'd say *she asked me* or *I'm not going anywhere* or lean on the counter beside her and make it a fight between two men about who got to stand there. He didn't. He stood at the stove with the burner off and let her talk, all of it, every word hers, and didn't once look at her for permission or at Jaehyun for a fight. It was the most respectful thing she'd ever seen anyone do in that kitchen." },
      { n: "Jaehyun was quiet for a long time. The coffee machine on the counter ticked as it cooled. Down the hall, a radiator banged once and thought better of it." },
      { n: "Then he came in." },
      { n: "He crossed the kitchen to the range, to the left of it, to the long shallow drawer under the stone that nobody who didn't live here would ever have looked in, because it looked like a drawer for knives, and he pulled it open. Mrs. Oh's system. Every jar labeled in her small upright capitals, alphabetical, gochugaru in a red-lidded tin between the fennel and the juniper." },
      { n: "He took the tin out. He held it a second, looking at it. Then he set it on the counter by the stove, a foot from Haechan's hand, and didn't let go of it right away." },
      { s: 'jaehyun', f: 'neutral', t: "Left of the stove. Mrs. Oh. Everything's alphabetical." },
      { s: 'haechan', f: 'neutral', t: "...Thanks." },
      { ifFlag: 'epi-r-jh-none', then: [
        { s: 'jaehyun', f: 'serious', t: "I'm not blessing anything. I want that on the record. I don't know what you are. I know what you were in my living room. That hasn't changed because you can fry rice." },
        { s: 'haechan', f: 'neutral', t: "Didn't think it would." },
        { s: 'jaehyun', f: 'serious', t: "And you." },
        { n: "He looked at her. Long. She held it. She'd been holding it across tables her whole life, and she held it now, barefoot, in a borrowed shirt, in their mother's kitchen." },
        { s: 'jaehyun', f: 'serious', t: "You put him in the book or you brought him up the back. Either way, it's a record. Somebody's going to read it." },
        { s: 'solar', f: 'serious', t: "Then they'll read it." }
      ], else: [{ ifFlag: 'epi-r-jh-part', then: [
        { s: 'jaehyun', f: 'serious', t: "I'm not blessing this. I need you to hear that. I don't know what he is. I know what he was in October." },
        { s: 'solar', f: 'serious', t: "I'm not asking you to bless it. I'm asking you to stop deciding it." },
        { n: "He looked at the gochugaru on the counter like it had said something to him." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "I'm not blessing anything." },
        { s: 'solar', f: 'neutral', t: "I know." },
        { s: 'jaehyun', f: 'neutral', t: "Good. As long as we both know." }
      ] }] },
      { n: "He went to the coffee machine. He pressed the button and it groaned and began to produce, with enormous ceremony, its four-dollar mistake, and he stood with his back to both of them watching it drip into a cup with his weight a quarter-inch to the left, and said, to the machine:" },
      { s: 'jaehyun', f: 'neutral', t: "Mom and Dad aren't back until the reception. The board breakfast. They're coming from the Kwons'." },
      { s: 'jaehyun', f: 'neutral', t: "I'm not sending them the pages." },
      { n: "It was so quiet she almost didn't hear it. She did. She heard it the way you hear the snap from the far end of a field, a half-second late." },
      { s: 'solar', f: 'surprised', t: "You're not telling Dad." },
      { s: 'jaehyun', f: 'neutral', t: "Dad doesn't need to know." },
      { choose: [
        { t: "Neither did you.", then: [
          { s: 'solar', f: 'serious', t: "Neither did you." },
          { n: "He didn't turn around. But his shoulders moved, the good one and the bad one, once, and she knew her brother well enough to know that it was the nearest thing to a laugh he'd ever let out in front of Lee Donghyuck, and that it had cost him, and that he'd paid." },
          { s: 'jaehyun', f: 'neutral', t: "...No. I didn't." }
        ] },
        { t: "Thank you.", then: [
          { s: 'solar', f: 'neutral', t: "Thank you." },
          { s: 'jaehyun', f: 'neutral', t: "Don't. If you thank me it's a thing I arranged. It's not. I just didn't do anything." },
          { n: "She'd never once in her life heard him describe not doing something as a choice. She stood there in the kitchen and let it be one." }
        ] }
      ] },
      { n: "Haechan turned the burner back on. Two clicks. He shook the red pepper into the pan, not much, the way you'd salt something for someone you'd watched eat, and the kitchen filled up with the smell of it, sharp and warm and wrong for this room and exactly right, and nobody said anything for a while." },
      { n: "He filled her bowl first. Then the second one. Then, after a pause that she'd remember for the rest of her life, without looking up, without making anything of it, he took a third bowl down from the cabinet he'd already searched and filled that one too, and set it at the end of the island, where her brother always sat." },
      { n: "Jaehyun looked at it. He looked at it for a long time with his cup of terrible coffee in his hand." },
      { n: "Then he sat down and ate it." },
      { n: "Nobody blessed anything. Nobody said it was okay. Three people ate kimchi fried rice in silence at a stone island on the eleventh floor on Christmas morning with the snow coming down outside, and none of them was pretending anymore that it wasn't happening, and that, she thought, with her spoon halfway to her mouth, was going to have to be enough for now. It was more than she'd had yesterday." },
      { s: 'jaehyun', f: 'neutral', t: "It's good." },
      { s: 'haechan', f: 'neutral', t: "I know." },
      { bond: { jaehyun: 1 } }
    ] },

    // ── the Minji route ──
    { ifEpiRoute: 'minji', then: [
      { n: "She woke at ten to nine to the gray light and the snow and the sound of the front door down the hall, and for a second she didn't know where she was. Then the four hundred windows, and the gavel on the shelf, and Minji asleep on the window seat where she'd left her, sitting up against the frame with the blanket over her and her hat still on, her mouth a little open, one hand loose in her lap, curled, like it was still holding something." },
      { n: "The camera wasn't on the desk." },
      { n: "They'd had it in the kitchen at three, in the dark, with the japchae and two forks. Minji had been showing her the cut on the flip screen, quietly, to make her laugh, and they'd left it there on the island when they'd crept back up the hall. Solar was out of the room in her socks before the thought finished." },
      { place: 'Manhattan · The Lee Apartment · Kitchen', time: 'Morning', soft: true },
      { n: "Jaehyun was at the island in his coat. He hadn't taken it off. He'd come in from wherever he'd been, a friend's, he'd said, and walked into the kitchen for water, and found a camera on the stone with its flip screen open and its battery light blinking, and he was standing over it with one finger on the scrub wheel, watching." },
      { n: "She knew what was on it. She'd seen it at three in the morning. The twenty-first. The Sunday her car left. Minji had been the last person on the campus who wasn't leaving yet, and she'd walked it at seven a.m. with her camera before her own bus, the way she walked everything: the Alpha house stripped for break, its windows bare. The quad under new snow with nobody on it. The bus shelter on College Place with one glove on the bench." },
      { n: "And Solar crossing the quad. Small, in the gray coat, carrying her bag toward the car. Minji had filmed her from the library steps, wide, the whole white field of it, so you could see her walk all the way across." },
      { n: "There were no footprints behind her." },
      { n: "Clean snow. Unbroken. From the library to the street, the one figure walking in it, and the snow behind her as smooth as if no one had ever stood there in her life. Minji had played it four times for her at three in the morning, not to make her laugh, by then, and had said only *I checked the card,* and had shut the screen." },
      { n: "Jaehyun was on his fifth." },
      { s: 'jaehyun', f: 'serious', t: "Who filmed this." },
      { s: 'solar', f: 'neutral', t: "Minji." },
      { s: 'jaehyun', f: 'serious', t: "She's here." },
      { s: 'solar', f: 'neutral', t: "She's asleep. On my window seat. With her hat on." },
      { n: "He looked up at her. He'd seen the pages. He'd seen the honors dorm and the binder and the socks on the stairs, printed, on their mother's table; he knew who Minji was to her. And now he'd come home on Christmas morning to that girl's camera on his kitchen island, and her footage of his sister walking across a field of snow and not touching it." },
      { ifFlag: 'epi-r-jh-all', then: [
        { s: 'jaehyun', f: 'serious', t: "This is the same as the frame. The fireplace." },
        { s: 'solar', f: 'neutral', t: "Yes." },
        { s: 'jaehyun', f: 'serious', t: "And she knows. Minji knows what it is." },
        { s: 'solar', f: 'neutral', t: "She was on the roof. She had the camera in one hand and me in the other." },
        { n: "He looked at the screen. He looked down the hall, toward the fourth door. He didn't say anything about the girl on the window seat being in their apartment on Christmas morning. It had stopped being the thing he was most afraid of in this kitchen." }
      ], else: [{ ifFlag: 'epi-r-jh-part', then: [
        { s: 'jaehyun', f: 'serious', t: "You said the frame was a bad frame. Danielle's phone. Low light." },
        { s: 'solar', f: 'neutral', t: "I did say that." },
        { s: 'jaehyun', f: 'serious', t: "This is a good camera, Solar. This is daylight." },
        { n: "She didn't answer. He didn't make her. He looked at the screen, and then at her, and she watched him decide, again, to let her have it, and watched it cost more this time." }
      ], else: [
        { s: 'jaehyun', f: 'serious', t: "You told me they were bad photographs." },
        { s: 'solar', f: 'neutral', t: "I told you I wasn't answering." },
        { s: 'jaehyun', f: 'serious', t: "And she's here. In your room. On Christmas. After I've had the pages on Mom's table for two days." },
        { s: 'solar', f: 'serious', t: "Yes. Because I asked her. Through the front of my life. Not because of you. She asked me that herself last night, whether she was something I was doing at you. You've never once asked." }
      ] }] },
      { n: "He closed the flip screen. Gently, the way you'd close somebody else's book." },
      { s: 'jaehyun', f: 'neutral', t: "I'm not blessing anything." },
      { s: 'solar', f: 'neutral', t: "I'm not asking you to." },
      { s: 'jaehyun', f: 'neutral', t: "And I'm not sending Dad the pages." },
      { s: 'solar', f: 'surprised', t: "You're not?" },
      { s: 'jaehyun', f: 'neutral', t: "Dad doesn't need to know." },
      { s: 'solar', f: 'neutral', t: "Neither did you." },
      { n: "He almost smiled. On him it was a whole event, a thing happening at the corner of his mouth and then being overruled." },
      { n: "Minji was in the doorway. Hat on, blanket around her shoulders like a cape, the cameraman's stillness all over her. She'd heard enough. She looked at Jaehyun, and at the camera under his hand, and didn't apologize for it and didn't explain it." },
      { s: 'minji', f: 'neutral', t: "Hi. Sorry. Can I have my camera back? I'd like to put it somewhere safe." },
      { n: "Jaehyun looked at her for a long moment. Then he picked the camera up off the island with both hands, carefully, the way he'd once handed their mother a crystal thing from the Foundation, and held it out." },
      { s: 'jaehyun', f: 'neutral', t: "Keep it somewhere safe." },
      { s: 'minji', f: 'serious', t: "I always do. I asked her first. Every frame." },
      { s: 'jaehyun', f: 'neutral', t: "I know. I saw the pages. You're the only one in them who looks like she's asking." },
      { n: "Then, because he was Jaehyun, and because it was Christmas, and because there was a girl in a blanket in his kitchen who'd filmed his sister refusing to leave footprints, he opened the refrigerator." },
      { s: 'jaehyun', f: 'neutral', t: "Did either of you eat." },
      { bond: { jaehyun: 1 } }
    ] },

    // ── the cover route ──
    { ifEpiRoute: 'cover', then: [
      { n: "She came down the hall at nine and he was already in the kitchen, home early from wherever he'd been, in his coat still, standing at the stove with a carton of eggs and the expression of a man who'd been told a big breakfast before a reception was a scientifically proven advantage and had never once questioned it." },
      { s: 'jaehyun', f: 'neutral', t: "Sit. Did you eat." },
      { s: 'solar', f: 'happy', t: "You're literally about to feed me. Again. In a second state." },
      { s: 'jaehyun', f: 'neutral', t: "That's not an answer." },
      { n: "She sat at her place at the island. The left burner stuck; he clicked it twice without looking. The coffee machine made its four-dollar mistake. Outside the snow came down fine and slow past Fifth Avenue, and the apartment was eleven rooms with two people in it, the way it had been on a lot of mornings when they were small, when the parents were at something and Mrs. Oh hadn't come yet and Jaehyun had stood on a step stool to make her toast." },
      { n: "He put a plate in front of her. Eggs, toast, half a grapefruit cut into the segments their mother cut, a quarterback's sense of field position. He ate standing up across from her." },
      { ifFlag: 'epi-r-jh-all', then: [
        { s: 'jaehyun', f: 'neutral', t: "You texted at midnight." },
        { s: 'solar', f: 'neutral', t: "You said every one." },
        { s: 'jaehyun', f: 'neutral', t: "I was standing in Sean's mother's kitchen at eleven fifty-eight looking at my phone like a man waiting on a scan." },
        { s: 'jaehyun', f: 'serious', t: "I'm going to do that every night. You know that. Until it happens or it doesn't." },
        { s: 'solar', f: 'sad', t: "I know." }
      ], else: [{ ifFlag: 'epi-r-jh-part', then: [
        { s: 'jaehyun', f: 'serious', t: "I thought about what you told me. About her. I sat up with it." },
        { s: 'jaehyun', f: 'serious', t: "She did the budget for the nineteenth. Both houses. I said *helpful.* To your face." },
        { s: 'solar', f: 'neutral', t: "She is helpful. That's the whole problem with her." }
      ], else: [
        { s: 'jaehyun', f: 'neutral', t: "I'm not going to ask you again." },
        { s: 'solar', f: 'neutral', t: "Okay." },
        { s: 'jaehyun', f: 'serious', t: "I'm telling you I'm not going to ask so you know the question's still there. It's just in a drawer." }
      ] }] },
      { n: "He finished his eggs. He rinsed the plate. Then he stood at the sink with his back to her, his weight a quarter-inch to the left, and said, to the window:" },
      { s: 'jaehyun', f: 'neutral', t: "I'm not sending Dad the pages." },
      { s: 'solar', f: 'surprised', t: "...You're not?" },
      { s: 'jaehyun', f: 'neutral', t: "Dad doesn't need to know." },
      { choose: [
        { t: "Neither did you.", then: [
          { s: 'solar', f: 'serious', t: "Neither did you." },
          { s: 'jaehyun', f: 'neutral', t: "...No. I didn't." }
        ] },
        { t: "(Get up and stand next to him at the sink.)", then: [
          { n: "She got up and stood next to him at the sink, shoulder to shoulder, the way they'd stood at the edge of a lot of things growing up, and dried the plate he'd already dried, and he let her." }
        ] }
      ] },
      { n: "Nobody blessed anything. Nobody said it was okay. Two Lees stood at a sink on Christmas morning, very good at not saying things, and it was the closest she'd felt to him since a noodle place on Marshall Street." },
      { bond: { jaehyun: 1 } }
    ] }
  ] },

  // ───────────────────────────── 12/25, after: the Lee Foundation reception ─────────────────────────────
  { id: 'epi-r-reception', date: '12/25', slot: 'after', consumes: true, title: 'one hundred and forty', place: 'Manhattan · Lee Foundation Reception', time: 'Daytime', scene: [
    { music: 'epi-r-day' },
    { n: "The Lee Foundation Christmas Reception was a hundred and forty people in a long room on Fifth Avenue with a string quartet in the corner and about nine photographers, and it started at two and ran to five, and it had happened on the twenty-fifth of December every year of her life. For the first eleven years of it she'd believed it was Christmas." },
    { n: "The wardrobe note had said *navy, long sleeve, the pearl studs, no velvet twice in two days.* She'd read the whole wardrobe note this time. Her mother had looked at her in the doorway of the car at quarter past one, navy, long sleeve, pearls, and said nothing at all, which was a review." },
    { n: "It was snowing on Fifth, still, fine and dry, and the long windows of the room looked out across the avenue at the park going white, and the room itself was all warm light and cedar and the particular murmur of a hundred and forty people who'd been to this exact party before, the quartet doing something by Corelli under it like a floor." },
    { n: "She was good at it. That wasn't false modesty, and it had stopped being interesting to her at about sixteen: she was *extremely* good at it. The moving between groups. The four-minute conversation, the hand on the forearm at minute three, the question about the one part of somebody's work they actually liked, so they'd leave her thinking they'd been brilliant. She'd been raised for this the way her brother had been raised for a pocket and a play clock. Her father's daughter. She could say the right thing without using any of the words." },
    { n: "She did ninety minutes without a break." },
    { n: "And the whole time, under the navy and the pearls and the four-minute conversations, there was a room on the eleventh floor with four hundred windows in it and an unmade bed, and a kitchen with three bowls in the sink, and she carried both rooms at once, the public one and the private one, the way you carry a full glass across a crowded floor without looking at it. Last night she'd let somebody all the way in. This afternoon she was letting a hundred and forty people exactly as far as the coat check." },
    { n: "Her mother found her at three, between a board member and a woman from a museum, and kissed her cheek, and held her back by the shoulders to look." },
    { s: 'mom', f: 'surprised', t: "You slept." },
    { s: 'solar', f: 'neutral', t: "I sleep, Mom." },
    { s: 'mom', f: 'neutral', t: "You don't. Not here. You never have. You look like somebody let you." },
    { n: "Then she was gone, toward the quartet, toward a man from the Times she'd known for twenty years, and Solar stood with her glass and felt her face go hot and kept it exactly where it was." },
    { n: "The photograph with her father happened at three-fifteen, by the tree. Then the photograph with all four of them. Jaehyun on their father's right in a charcoal suit, the tie considered and this time not excused, his right arm at his side so that nobody would ever know it hurt to lift, smiling the smile that went in the annual report. The heir. He did it beautifully. He did it so well she could almost not see him under it." },
    { n: "And beside him, the heir's sister, in navy, smiling exactly as much as the heir's sister smiled, a half-step back so the camera found him first. She did it beautifully too. She'd had the longest rehearsal of anyone in the room." },
    { ifFlag: 'epi-r-jh-all', then: [
      { n: "He stayed within arm's reach of her all afternoon. Never beside her; that would have been noticed. Two groups over. One. By the window when she was by the window. Every time the clock over the long room's doors moved, she saw him see it. He knew what a stopped clock meant now. He'd been watching clocks since Tuesday." }
    ] },
    { n: "At half three Ms. Han found her by a window." },
    { s: 'han', f: 'neutral', t: "Two minutes." },
    { s: 'solar', f: 'neutral', t: "Go." },
    { s: 'han', f: 'neutral', t: "The paper sent the same woman as last year. She's fine. She's been fine for four years. She'll ask about the winter fund." },
    { n: "Ms. Han didn't look up from her phone. She'd worked for Solar's father for eleven years and had never once, in Solar's presence, looked up from her phone for anything less than a fire." },
    { s: 'han', f: 'neutral', t: "She may also ask about November. The Foundation Dinner. There was an empty chair at your father's table, with a place card on it. It was noticed. It was mentioned in one column, in one sentence, and nowhere else." },
    { ifFlag: 'epi-r-public-post', then: [
      { s: 'han', f: 'neutral', t: "And there's an image from the twelfth of December. It's had a few thousand interactions. It's been on two campus accounts and one aggregator. It hasn't been picked up anywhere that matters and I don't expect it to be." }
    ] },
    { s: 'solar', f: 'serious', t: "Why are you telling me?" },
    { n: "Ms. Han put her phone down. The first time Solar had ever seen her do it." },
    { s: 'han', f: 'neutral', t: "Because you should never find out in the room that somebody knows. That's all. If she raises it you don't owe her a word. If you want me to end the conversation I'll end the conversation. If you want to answer her, answer her however you like." },
    { ifFlag: 'epi-r-public-post', then: [
      { s: 'han', f: 'neutral', t: "It's a nice photograph, actually." }
    ] },
    { n: "And she went off toward the doors with her phone back in her hand, and Solar stood by a window on Fifth Avenue on Christmas Day holding a glass of something she wasn't drinking, and understood, about four seconds late, that her father's assistant had just been kind to her." },
    { n: "The reporter found her at quarter to four. Forties, a good coat, a notebook she actually used, the face of a woman who'd been sent to this room every year and had made her peace with it by being genuinely curious about the winter fund." },
    { s: 'reporter', f: 'neutral', t: "Solar. Merry Christmas. Can I steal you for the fund? Two minutes. I'll make you sound smarter than you'll want." },
    { n: "So she did the fund. She meant every word of that part, which helped: the heating grants, the four buildings in the Bronx, the number of families, the thing the program officer had said to her in August about a woman who'd cried over a boiler. The reporter wrote it down. Then she closed the notebook halfway, which was a reporter's way of saying the next question was off the record and wasn't." },
    { s: 'reporter', f: 'neutral', t: "We missed you at the dinner in November. Your father's table. There was a card with your name on it." },
    { choose: [
      { t: "(The flu.) I was sick. The whole week.", then: [
        { s: 'solar', f: 'neutral', t: "The flu. The whole week. I'd have come in a hazmat suit, but my mother wouldn't let me near the canapés." },
        { s: 'reporter', f: 'happy', t: "Your mother's a wise woman." },
        { n: "It was a perfectly good lie. It slid out of her finished, the way they all did, her father's daughter, and the reporter laughed and opened the notebook again and wrote nothing down, and Solar felt it go into the stack of things she'd said this month that weren't true, the stack getting heavier, the edges of the room going very faintly green." },
        { glitch: { strain: 1 } }
      ] },
      { t: "I was somewhere I needed to be.", then: [
        { s: 'solar', f: 'neutral', t: "I was somewhere I needed to be. I'm sorry about the chair." },
        { n: "The reporter looked at her. A real look, the one under the professional one. Then she smiled, a little, and closed the notebook the rest of the way." },
        { s: 'reporter', f: 'neutral', t: "That's the best non-answer I've had in this room in four years. I'm not printing it." },
        { s: 'solar', f: 'neutral', t: "I know. That's why I said it." },
        { stat: { courage: 1 } }
      ] },
      { t: "(Bring it back to the fund.)", then: [
        { s: 'solar', f: 'happy', t: "Which reminds me. The dinner raised eleven percent more than last year, and the board's voting on a fifth building in March. You'll want that before the Times gets it." },
        { s: 'reporter', f: 'happy', t: "...You're very good at this." },
        { s: 'solar', f: 'neutral', t: "I was raised in it." },
        { stat: { charm: 1 } }
      ] }
    ] },
    { n: "Nobody else asked about November. Nobody asked about anything. A woman from the board asked whether she was enjoying Syracuse, and a man whose name she didn't catch asked whether she was going to work for her father, and she said *we'll see* in a voice that made it sound like *yes,* and he went away pleased." },
    { n: "And at twenty past four, by the long table with the little cakes on it, somebody tugged the side of her dress." },
    { n: "A girl of about nine. Red velvet, a white collar, white tights already gray at the knee from a long afternoon of crawling under tables, a cake in one hand and the expression of a person who'd been working up to something for some time and had decided it was now or never." },
    { s: 'velvet', f: 'neutral', t: "Are you the one who's good at video games?" },
    { n: "Solar crouched. In the navy, in the pearls, all the way down to the girl's level in the middle of the Lee Foundation Christmas Reception, so that a photographer three groups away swung round on instinct and then, mercifully, didn't take it." },
    { s: 'solar', f: 'happy', t: "Who told you that?" },
    { s: 'velvet', f: 'neutral', t: "My brother. He watched you on the computer. He said you're the one who keeps everybody alive." },
    { choose: [
      { t: "I'm the healer. It's the best job.", then: [
        { s: 'solar', f: 'happy', t: "I'm the healer. Everybody else gets to be loud, and I get to decide who doesn't fall down. It's the best job." },
        { s: 'velvet', f: 'neutral', t: "Is it hard?" },
        { s: 'solar', f: 'neutral', t: "Only when you care who falls down." },
        { s: 'velvet', f: 'neutral', t: "Do you care?" },
        { s: 'solar', f: 'happy', t: "So much. It's embarrassing." },
        { n: "The girl nodded, extremely seriously, like a person filing a play, and ate her cake." },
        { stat: { kindness: 1 } }
      ] },
      { t: "Yes. Very. Don't tell anyone here.", then: [
        { s: 'solar', f: 'happy', t: "Yes. Very. But don't tell anyone in this room. They think I'm good at parties." },
        { s: 'velvet', f: 'neutral', t: "You're good at parties too. You did the thing with your hand on that man's arm. My mom does that." },
        { n: "Solar laughed, out loud, crouched by the cake table in front of nine photographers and a hundred and forty people, the real one, the one she didn't have to build first, and the girl looked pleased with herself in the specific way only nine-year-olds and Haechan ever managed." },
        { stat: { charm: 1 } }
      ] }
    ] },
    { n: "It was the best thing that happened all afternoon. It wasn't close." },
    { n: "It finished at ten past five. A hundred and forty people in three hours, and she hadn't said one thing she meant except to a nine-year-old in velvet and, maybe, a reporter. The car got them home at quarter to six through the snow, and nobody in it spoke, and Jaehyun sat with his phone dark in his lap and watched the clock on the dashboard the whole way up Fifth." },
    { ifEpiRoute: 'haechan', then: [
      { phone: [
        { from: 'solar', t: "140 people in 3 hours. a girl in a velvet dress asked if i'm the one who's good at video games" },
        { from: 'solar', t: "best part of the day by a mile" },
        { from: 'haechan', t: "second best" },
        { from: 'solar', t: "...ok yes. second" },
        { from: 'haechan', t: "session's done at 9. i'll come back the way i came" }
      ], contact: 'haechanah' }
    ] },
    { ifEpiRoute: 'minji', then: [
      { phone: [
        { from: 'solar', t: "140 people. a nine year old in velvet asked if i'm the one who's good at video games" },
        { from: 'minji', t: "i would have filmed that. i would have asked her mother first" },
        { from: 'minji', t: "back at 9. my grandma's sending more japchae. i can't stop her" }
      ], contact: 'minjibear' }
    ] },
    { ifEpiRoute: 'cover', then: [
      { phone: [
        { from: 'solar', t: "@solar: 140 people. a 9yo in velvet asked if i'm the one who's good at video games" },
        { from: 'hyein', t: "@hyein: SHE KNOWS. THE CHILDREN KNOW" },
        { from: 'hanni', t: "@hanni: best part of the day?" },
        { from: 'solar', t: "@solar: by a mile" }
      ], contact: 'hanni, hyein 🩷' }
    ] }
  ] },

  // ───────────────────────────── 12/25, evening: gifts ─────────────────────────────
  { id: 'epi-r-gifts', date: '12/25', slot: 'evening', consumes: true, title: 'small things', place: 'Manhattan · The Lee Apartment · Hall', time: 'Evening', scene: [
    { music: 'epi-r-romance' },
    { n: "By seven the apartment was in the state a household gets into the night before it goes somewhere. Three suitcases in the hall by the door, lined up by height like a family portrait. A garment bag over the back of a chair. Her mother on the phone in the study to Greenwich, the door open a foot, *no, the nine o'clock, because if we leave at ten we're in it all the way up the Merritt.* Her father somewhere at the far end of the eleven rooms, being somewhere." },
    { n: "Everybody going at nine in the morning. Except her." },
    { n: "She'd bought the gifts on Monday and Tuesday, small, on Madison and Lexington, in shops where nobody knew her name, which in this neighborhood had taken some finding. She'd wrapped them herself on her bedroom floor in plain brown paper, badly, because she'd never once in her life wrapped her own presents and had wanted, this year, to have done it with her own hands even if it showed." },
    { n: "It showed." },
    { place: 'Manhattan · The Lee Apartment · Study', time: 'Evening', soft: true },
    { n: "Her mother hung up on Greenwich and looked at her in the doorway of the study, at the brown paper in her hands, and took her reading glasses off her head and put them on, which she only did for things she wanted to see properly." },
    { s: 'mom', f: 'neutral', t: "Did you wrap that yourself?" },
    { s: 'solar', f: 'neutral', t: "Don't." },
    { s: 'mom', f: 'happy', t: "I'm not saying a word. It's very. Structural." },
    { choose: [
      { t: "(Coffee she'll actually like. So she'll stop using the machine.)", flag: 'epi-r-gift-mom-coffee', then: [
        { n: "A bag of beans from the roaster on Lexington, the small place with the line out the door, and a little ceramic cone, the kind you set on a cup. Her mother turned the bag over in her hands and read the label like it was a contract." },
        { s: 'mom', f: 'surprised', t: "I like the machine." },
        { s: 'solar', f: 'happy', t: "Nobody likes the machine, Mom. Mrs. Oh doesn't like the machine. Mrs. Oh makes her own coffee in a saucepan when you're out." },
        { s: 'mom', f: 'surprised', t: "Mrs. Oh told you that?" },
        { s: 'solar', f: 'neutral', t: "Mrs. Oh tells me everything. She's just very selective about who else she tells." },
        { n: "Her mother looked at her over the top of her reading glasses, the way she watched a seating chart for the one name that would cause trouble, and Solar held it, and her mother let it go." },
        { s: 'mom', f: 'happy', t: "I'll try it. In Greenwich. Your grandmother's coffee is worse than the machine." }
      ] },
      { t: "(A printed photo of the two of them by the tree. On paper. Not on a phone.)", flag: 'epi-r-gift-mom-photo', then: [
        { n: "She'd taken it on the twenty-first, the night she came home, by the crooked tree, in the gray coat, her mother's arm round her and her mother's face mid-sentence, *is it crooked, it's crooked, tell your father.* She'd had it printed at a place on Third, five by seven, and put it in a frame that cost eleven dollars." },
        { n: "Her mother looked at it for a long time. She didn't say anything about the frame." },
        { s: 'mom', f: 'sad', t: "I'm talking in it." },
        { s: 'solar', f: 'neutral', t: "You're always talking. It's the most you thing I have." },
        { s: 'mom', f: 'happy', t: "...The tree's crooked." },
        { s: 'solar', f: 'happy', t: "The tree's crooked." },
        { n: "Her mother set it on the desk, next to the framed program from the year Solar was just in a row. Then she moved the program, a half-inch, to make room. It was the smallest thing Solar had ever seen her do. She'd remember it." }
      ] }
    ] },
    { s: 'mom', f: 'neutral', t: "You could still come. Tomorrow. Your grandmother asks every single year." },
    { s: 'solar', f: 'neutral', t: "And every single year you tell her I'm working. And she believes you, because she thinks eSports is a degree." },
    { s: 'mom', f: 'neutral', t: "It might as well be, for the amount of—" },
    { s: 'solar', f: 'happy', t: "Goodnight, Mom. Merry Christmas." },
    { s: 'mom', f: 'happy', t: "Merry Christmas, Solar. Eat something. You've lost weight in your face." },
    { place: 'Manhattan · The Lee Apartment · Hall', time: 'Evening', soft: true },
    { n: "Jaehyun's door was open. He was on his bed with ice on his shoulder under his shirt, which he'd have denied, and a game film on his laptop with the sound off, which he'd also have denied, on Christmas night. He shut the laptop when she knocked on the frame. He didn't move the ice." },
    { choose: [
      { t: "(A heated sleeve for the shoulder. The kind the trainers use.)", flag: 'epi-r-gift-jaehyun-sleeve', then: [
        { n: "He unwrapped it. He looked at it. He looked at her, and then, after a long moment, at his own right shoulder, as though it had told on him." },
        { s: 'jaehyun', f: 'neutral', t: "It's nothing." },
        { s: 'solar', f: 'neutral', t: "I know. It's nothing in a box. Wear it on the drive. Don't tell Dad. I'll know if you don't wear it." },
        { s: 'jaehyun', f: 'happy', t: "How." },
        { s: 'solar', f: 'neutral', t: "You'll hold your coffee in your left hand." },
        { n: "He looked at her for a while. He didn't say thank you. He took the ice off his shoulder and put the sleeve on over his shirt right there on the bed, badly, one-handed, and she reached over and did the strap for him, and he let her, and that was the thank you." }
      ] },
      { t: "(A gift card to the noodle place on Marshall Street, in a card signed badly on purpose.)", flag: 'epi-r-gift-jaehyun-noodles', then: [
        { n: "He opened the card first. He read it. *Love, Jaehyun,* it said, in a careful, slightly-worse imitation of his own handwriting, and under it, in hers: *now we're even.*" },
        { n: "He made a sound she'd never heard him make. It might have been a laugh. It was over before she could be sure." },
        { s: 'jaehyun', f: 'happy', t: "That's my signature." },
        { s: 'solar', f: 'happy', t: "I made it worse than yours. So you'd believe it." },
        { s: 'jaehyun', f: 'neutral', t: "...We'll go when we get back. You'll eat the whole bowl." },
        { s: 'solar', f: 'neutral', t: "You'll watch me eat the whole bowl." },
        { s: 'jaehyun', f: 'neutral', t: "I'll be checking." }
      ] }
    ] },
    { ifFlag: 'epi-r-jh-all', then: [
      { s: 'jaehyun', f: 'serious', t: "Midnight." },
      { s: 'solar', f: 'neutral', t: "I'll text." },
      { s: 'jaehyun', f: 'serious', t: "I'll be in Greenwich. Two hours away. If it's—" },
      { s: 'solar', f: 'neutral', t: "It's not tonight. I'd know. I think I'd know." },
      { n: "He didn't believe her. She watched him not believe her and decide to go anyway, because she'd asked him to let her have the apartment and he'd never once, in eighteen years, given her a thing she'd asked for so directly, and he was trying, now, she could see him trying, to learn how." }
    ] },
    { n: "He'd left something on the end of her bed. She found it when she went back to her room: a box, wrapped by someone at a store, perfectly, with a card in his small square capitals. *For the lab. Don't let Doyoung see it.* A thermos, matte black, the expensive kind, with a sticker on the bottom she peeled off and found under it, in marker, a tiny fox." },
    { n: "He'd drawn a fox. Badly. Her brother. She sat on the end of the bed with it and had to look at the ceiling for a while." },
    { place: 'Manhattan · The Lee Apartment · Her Room', time: 'Evening', soft: true },

    { ifEpiRoute: 'haechan', then: [
      { n: "He came back at ten past ten, the same way he'd come the night before." },
      { ifFlag: 'epi-r-entry-service', then: [
        { n: "The porters' door on Seventy-ninth, the code, the lift that smelled of pine, the red light in the corner that didn't blink. She met him at the service door to the kitchen in her socks and he came in carrying a deli bag and the cold." }
      ], else: [
        { n: "Marco at the desk, *good evening, Mr. Lee,* in a voice that had already decided not to remember anything, and eleven seconds, and the wreath. She met him at the door in her socks and he came in carrying a deli bag and the cold." }
      ] },
      { n: "Her mother's door was shut. Her father's was shut. Jaehyun's was shut, the line of light under it going out as they passed, which was either a coincidence or the most diplomatic thing her brother had ever done. Forty feet in socks. The fourth door." },
      { n: "He sat on the window seat and she sat on the floor in front of it with her back against his shins, and she gave him the brown paper. He held it for a second like it might go off." },
      { s: 'haechan', f: 'neutral', t: "You wrapped this." },
      { s: 'solar', f: 'flustered', t: "Don't." },
      { s: 'haechan', f: 'happy', t: "I'm not saying anything. It's got a lot of tape. It's a very committed piece of work." },
      { choose: [
        { t: "(A pour-over cone and a bag of beans from the roaster on Lexington.)", flag: 'epi-r-gift-haechan-coffee', then: [
          { n: "He unwrapped it slowly, the way he did everything that mattered, like he was listening to it. A ceramic cone. A box of paper filters. A bag of single-origin beans from the roaster on Lexington with the line out the door, roasted four days ago, the date stamped on it in ink." },
          { n: "He looked at the date for a long time." },
          { s: 'haechan', f: 'neutral', t: "...Four days." },
          { s: 'solar', f: 'happy', t: "I asked the guy. He said under a week. He said anything older's a crime. He used the word *filtration.*" },
          { s: 'haechan', f: 'serious', t: "Don't." },
          { s: 'solar', f: 'happy', t: "I didn't say anything." },
          { s: 'haechan', f: 'serious', t: "You thought it. I heard you think it." },
          { n: "But he didn't put it down. He held the bag in both hands on his knee, the whole time they talked, like a man who'd been given something he'd wanted so specifically and for so long that he'd stopped admitting it was a thing you could want, and she leaned her head back against his knee and didn't look at his face, to let him have it." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(New ear pads for his headphones. The right ones.)", flag: 'epi-r-gift-haechan-pads', then: [
          { n: "Ear pads. Velour, the replacement kind, for the exact model of the heavy black headphones that had been around his neck since August, whose pleather had been cracking at the seams since before she'd met him." },
          { n: "He turned the box over and read the model number on the back. Then he took the headphones off his neck and checked it against the number on the band. It matched. Of course it matched. She'd checked it on the rooftop in Syracuse in November while he wasn't looking, and written it in her phone under *H*, and never told anyone." },
          { s: 'haechan', f: 'neutral', t: "These are the right ones." },
          { s: 'solar', f: 'neutral', t: "I know they are." },
          { s: 'haechan', f: 'neutral', t: "How'd you know." },
          { n: "She didn't answer. She just looked at him, the way he'd never once answered her, at a tree that leaned too far to the right, with a convenience-store bag between them. He looked back. Something happened at the corner of his mouth and didn't stop happening." },
          { s: 'haechan', f: 'happy', t: "...Okay. Fair." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(The ninth-grade choir program. The one from the drawer.)", flag: 'epi-r-gift-haechan-program', then: [
          { n: "It was the only thing in the brown paper that hadn't come from a shop. Cream card, the school crest, folded once. *Solar Lee, alto. Soloist.*" },
          { n: "He went very still. Not the filing-away stillness. The other kind, the kind she'd only seen on him twice, in a studio, with the faders down." },
          { s: 'haechan', f: 'serious', t: "This is yours." },
          { s: 'solar', f: 'neutral', t: "It's the only one of me in this whole apartment I picked. I want it somewhere they don't dust it." },
          { s: 'haechan', f: 'serious', t: "Solar." },
          { n: "Her name. Not *princess.* It came out of him like something had knocked it loose, and she felt the floor of the room go soft under her, and she didn't let herself make it into anything, because if she did he'd retreat, and she didn't want him to retreat. She wanted him to keep holding the program by its edges like a negative, which he did." },
          { s: 'haechan', f: 'neutral', t: "Okay. I'll keep it somewhere." },
          { bond: { haechan: 2 } }
        ] }
      ] },
      { n: "Then he picked up the deli bag off the floor and put it in her lap without a word. Inside: a bag of hot chips, the cheap red kind that stained your fingers, and a can of Monster Pink Punch, cold, sweating through the paper." },
      { s: 'solar', f: 'surprised', t: "Where did you even get a Pink Punch on the Upper East Side at ten o'clock on Christmas?" },
      { s: 'haechan', f: 'neutral', t: "Food. It was by the register." },
      { n: "It wasn't an answer. It was the same not-answer from a valley at two in the morning, under a tree, with a nearly black banana, and he knew it was, and he'd said it on purpose, and he was watching her know it. She opened the can. It hissed, the loudest thing in the western hemisphere, and they both froze, and listened to the apartment, and nobody came, and she laughed into his knee until she had to put the can down." },
      { n: "Outside, the snow came down past four hundred windows. Tomorrow at nine her whole family would be on the Merritt, and the apartment would have two people in it for three days, and one of them had chosen that, and the other one had come four hundred miles for his own work and walked three more to stand at her school gate. She didn't think about tomorrow. She ate a hot chip. It was terrible. It was perfect." }
    ] },

    { ifEpiRoute: 'minji', then: [
      { n: "Minji came back at nine with a second container of japchae from her grandmother and snow on her hat, by the same way as the night before, and they ate it on the floor of Solar's room with two forks from the kitchen while the apartment packed itself for Connecticut around them." },
      { n: "She gave Minji the brown paper. Minji turned it over in her hands and looked at the tape." },
      { s: 'minji', f: 'neutral', t: "Can I film you opening mine? Later. When I give you mine. You can say no." },
      { s: 'solar', f: 'happy', t: "Open yours first." },
      { choose: [
        { t: "(Three cartridges of Super 8 film, from the one shop on Third that still sells it.)", flag: 'epi-r-gift-minji-film', then: [
          { n: "Minji opened it and stopped breathing. Three yellow boxes. Real film, the kind nobody made anymore, from the one shop in Manhattan that still stocked it, behind a counter, for people who asked by name." },
          { s: 'minji', f: 'surprised', t: "Sol. This is. Do you know what this costs per minute?" },
          { s: 'solar', f: 'neutral', t: "Yes. The man told me. Twice. He was very upset about it." },
          { s: 'minji', f: 'serious', t: "I can't use this on just anything. I'll have to decide every frame." },
          { s: 'solar', f: 'happy', t: "You already decide every frame." },
          { n: "Minji looked at the boxes in her lap for a long time. Then she put them in the inside pocket of her camera bag, the zipped one, where she kept the cards she'd decided were keepers." },
          { bond: { minji: 1 } }
        ] },
        { t: "(A lens cloth with a fox printed on it. Small. Stupid. Perfect.)", flag: 'epi-r-gift-minji-cloth', then: [
          { n: "A microfiber lens cloth, gray, with a small orange fox printed in one corner, from a camera shop on Lexington that had put it by the register for exactly this kind of person." },
          { s: 'minji', f: 'happy', t: "It's Kiriko." },
          { s: 'solar', f: 'neutral', t: "It's a fox. It's a cloth. It's for your lens. It's not a big deal." },
          { s: 'minji', f: 'happy', t: "I'm going to use it on every lens I ever own." },
          { n: "She cleaned the camera's lens with it right there on the floor, slowly, with great ceremony, and then held the camera up and looked at Solar through it, and didn't press record, and smiled behind it." },
          { bond: { minji: 1 } }
        ] }
      ] },
      { n: "Minji's gift to her was a hard drive. A small one, silver, with a label in Minji's tiny careful capitals: *SOL. ASKED. EVERY FRAME.*" },
      { s: 'minji', f: 'neutral', t: "It's everything I have of you. Every frame I've ever shot with you in it. It's yours. You decide what happens to any of it." },
      { s: 'minji', f: 'serious', t: "I kept a copy of nothing. I wanted you to have the only one." },
      { n: "Solar held it in both hands. It weighed almost nothing. It was the heaviest thing anyone had ever given her." }
    ] },

    { ifEpiRoute: 'cover', then: [
      { n: "Nobody came up. She'd known nobody would. She sat on her bedroom floor with the girls' presents, wrapped already, waiting for the twenty-seventh and the eleven-oh-five train, and FaceTimed the two of them from two different states at once, Hyein's ceiling, Hanni's kitchen." },
      { s: 'hyein', f: 'happy', t: "Is that ours. Is that brown paper. Did you WRAP it." },
      { s: 'solar', f: 'neutral', t: "Don't." },
      { s: 'hanni', f: 'happy', t: "It's got a lot of tape. It's very committed." },
      { choose: [
        { t: "(Tell them: a meter of the green velvet from her dress, for Hyein, and the good label maker, for Hanni.)", flag: 'epi-r-gift-girls-velvet', then: [
          { s: 'solar', f: 'happy', t: "Hyein, yours is a meter of the velvet. From my dress. My mom had it made from a bolt from the nineties and there was some left and I stole it." },
          { s: 'hyein', f: 'surprised', t: "SHUT UP. Solar. Vintage. Bolt velvet. Do you know what I can—I'm going to make something. I'm going to make you something out of your own dress." },
          { s: 'solar', f: 'happy', t: "Hanni, yours is a label maker. The good one." },
          { s: 'hanni', f: 'happy', t: "...For the binder." },
          { s: 'solar', f: 'happy', t: "For the binder." },
          { s: 'hanni', f: 'happy', t: "I'm going to label the whole Alpha kitchen. I'm going to label *Danielle's shelf.*" }
        ] },
        { t: "(Don't tell them. Make them wait for the twenty-seventh.)", flag: 'epi-r-gift-girls-wait', then: [
          { s: 'solar', f: 'happy', t: "You get them on the twenty-seventh. On the platform. In person." },
          { s: 'hyein', f: 'sad', t: "That's TWO DAYS." },
          { s: 'hanni', f: 'happy', t: "That's a good reason to get off the train." },
          { n: "She held each one up to the camera anyway, the brown paper and the tape, and Hyein guessed *fabric* in one second flat and refused to say how she knew." }
        ] }
      ] },
      { n: "At ten the house phone by the door rang. Marco." },
      { s: 'marco', f: 'neutral', t: "Miss Lee, there's something at the desk for you. A young man left it. He wouldn't come up. He said you'd know." },
      { n: "A deli bag. Inside, a bag of hot chips, the cheap red kind, and a can of Monster Pink Punch, cold, sweating through the paper, and a receipt from a bodega on Second with a single word written on the back in a handwriting she knew from the margins of a Media and Society handout." },
      { n: "*register.*" },
      { phone: [
        { from: 'solar', t: "you came all the way uptown and didn't come up" },
        { from: 'haechan', t: "it was on my way" },
        { from: 'solar', t: "greenpoint is not on the way to anything" },
        { from: 'haechan', t: "mm. merry christmas, lee" }
      ], contact: 'haechanah' },
      { n: "She ate a hot chip on her bedroom floor on Christmas night, alone in eleven rooms with her whole family packing for Connecticut around her, and it was terrible, and it was perfect, and she had friends." }
    ] }
  ] }

  );
})();
