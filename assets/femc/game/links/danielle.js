/* Danielle · Devil (XV). Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines
   in scene.js. Searcher (Runners), friendship only (romance: null). Kat's new link (2026-10-21), "chaos energy".
   Danielle Marsh: Alpha Phi Treasurer. In canon (Runners, current through Ch 66) she runs SUnews (Instagram, photo-only,
   captions) and SUanon (Twitter, anonymous text); in Ch 48 she confirmed it to Solar's face and countered with leverage. She
   is obsessed with Jaehyun in a way that became surveillance, and used to turn up for no reason to see if he was around, and
   stopped (Ch 66). Here: a girl whose whole power is watching and being watched, dropped in a city with no feed ("Couldn't
   post. Tap to retry."). She adapts: a disposable camera, a paper IWATODAI NEWS board in SUnews-voice captions that Mitsuru
   takes down and that comes back, the guesthouse grocery ledger taken over one line item at a time, reasons to be wherever
   Jaehyun is (the long route again; she never says she came for him). She is not redeemed, never cracks for longer than a
   second, never confesses, never explains herself, never becomes Solar's warm friend. Something "almost adjacent to
   respect" (Ch 48) grows in it, and that is all.
   Arcana Devil: P5's Devil is the scandal journalist; obsession, leverage, temptation. A relationship of trades and nerve.
   The spine: she holds Solar's public record (what campus saw: posts, captions, a coffee order that was public record by
   the second week, Ch 44), so in a world where Solar has no memory she is, uncomfortably, an archive of her; and there is
   one thing she knows about Solar that Solar doesn't. Its content is never stated, hinted at or placed in time (canon:
   Ch 48's leverage; it stays locked). The Devil's offer (rank 7): that one thing, for a price (one photograph, her caption,
   posted at home). The best answers refuse to buy herself from Danielle, which Danielle finds interesting. MAX (rank 10):
   she leaves it unspent, says it isn't a kindness, and is gone before Solar can answer.
   The one room she didn't prepare in advance: rank 6, the Dark Hour, a Shadow that doesn't care about captions; Solar pulls
   her out; her hands shake; she's fine. Rank 8 (1/7, after 12/10 by date): the prints, and, only with ifMet wren, a station
   bench she photographed and says nothing about (deniable, never explained).
   Canon echoes used (Ch 5, 10, 23, 35, 42, 44, 48, 49, 53, 59, 63, 66): perfect posture, the folder, the highlighter laid
   parallel to the spreadsheet's edge, coffee, the bedroom door always open, the door shut with a click, curly hair, brown
   eyes speckled with gold, exits before rebuttal (she paused at doorways because exits were where she kept her best
   material), "you'd be *surprised* what travels", "Solar," the way you'd correct a child's spelling, "Just helping out",
   "that's *not* how we speak to our sorority sisters" (living run-in), "some of us just read faster" (afterMax caption),
   "people repeat things, Solar, it's what makes them people", a chart being updated, almost adjacent to respect, nobody
   hands a treasurer that, a treasurer takes it (rank 3, in action). From the arrival: "That's very generous" (rank 3), the
   phone's "Couldn't post. Tap to retry." (hangout), "Nobody ever sits in the seat between us" (ranks 5, 10).
   Never used: "a girl I used to know", "some lessons have to be learned the hard way", any "hard lesson".
   Who knows what (Runners Ch 66 ledger): Hanni, Hyein and Minji know she runs the accounts and has leverage; they will not
   say why in front of Solar. Haechan knows, and much more he never says (his one line, rank 4). Jaemin, Chenle and Jaehyun
   don't know about the accounts (Jaemin complains about SUnews to her face, rank 3; Jaehyun is polite, rank 5). Solar may
   hear the caption voice in her (rank 4); Danielle never confirms. Mark (gated a4-mark, rank 9) overplays casual, she's bored,
   Solar can't read it; nothing about their arrangement is stated. Nothing here confirms Solar and Haechan; nothing touches the
   recording, the girl incident, Mark's motive or the doorstep. The camping trip is in her folder as upcoming, never dated.
   Housing: the Kirijo guesthouse by the station (Mitsuru's key, a4-light-on). The dorm's board, kitchen and lounge are visits;
   visitors are out by eight on school days (rank 4 has her leave at 7:59).
   Arrival: story event a4-light-on (data/story-runners-arrivals.js; 11/10 late once Solar holds five Runners memories, by
   12/13), flag arrived-danielle, named in storyEvents. Rank 1 is the first visit after it: no "next day", no replay.
   Flags this link sets (all by choices in this file) and where they're read:
     danielle-free      r1 she takes the free question ("What was I like?"); read r7.
     danielle-turned    r1 she asks about Danielle instead; not read (kept for later writers).
     danielle-first-shot  r2 she lets Danielle take the first of the twenty-seven; read r4 (the board), r8 (the prints).
     danielle-took-camera r2 she takes the camera and photographs Danielle; read r8.
     danielle-ledger-help / danielle-mitsuru  r3 whose ledger she backs; danielle-mitsuru read in afterMax 'balance'.
     danielle-voice     r4 "You write like the captions."; read r9.
     danielle-held      r6 she holds Danielle's hands still on the stairs; read r8.
     danielle-refused / danielle-sold  r7 the offer; danielle-sold read r10; danielle-refused read afterMax 'last roll'.
     danielle-show      r9 "Show me."; not read.
   Story flags read: route-R / route-true (rank 10), route-R / route-true / route-stay (afterMax 'the record'); events:
   a4-twelve (Jaemin in rank 3, Chenle in afterMax 'no feed'), a4-mark (Mark in rank 9); ifMet wren (rank 8). No ifHeading.
   Branches hold lines only, never choices, so each rank's meter is the same on every path; no scene reads more than three
   distinct ifFlag flags.
   Faces: no portrait yet (silhouette until Kat's art): neutral, happy, sad, serious, surprised, flustered only. Others use
   only faces in portraits/index.js (Mitsuru: neutral, sad, surprised; Fuuka: no serious; Mark: no happy).
   Living world (afterRank texts, holidays 1/11 and 2/14, routines, run-ins): data/living-danielle.js. She texts with capitals
   and periods; Solar texts lowercase. Searchers never close: afterMax plays in person to the end. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'danielle', name: 'Danielle Marsh', short: 'Danielle', arcana: 'Devil', numeral: 'XV', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null, portraitPending: true,
  starts: '11/10', gate: { R: 5 }, storyEvents: ['a4-light-on'],
  home: { area: 'station', spot: 'The Overpass', slot: 'after', days: [1, 3, 4, 6],
          hint: 'Afternoons on the overpass above Iwatodai Station’s ticket gates. The best seat in town for watching who leaves.' },
  approach: "Halfway along the glass overpass above Iwatodai Station's ticket gates, a girl with curly dark hair sits very straight on the only bench with a folder open on her knees, watching the turnstiles the way other people watch television, and writing some of it down.",
  cast: {},
  invite: {
    ask: [
      "Are you free this afternoon? Don't answer that. I can see the dorm from here. I'm joking.",
      "The overpass. Four o'clock. Bring nothing. I've brought everything.",
      "I have twenty-seven shots and nothing worth twenty-seven of them. Come and be the closest thing.",
      "Mitsuru took the board down again. I'm putting it back up at five. You'll want to see her face. I know I do.",
      "I've found a coffee stand that prints an honest receipt. Come and look at one. They're rare.",
      "The man who misses the 4:20 is back. He's going to miss it again. Come and watch.",
      "Hyein said something about me at breakfast. I'd like your version. Hers had fewer verbs.",
      "I need someone who can add. Everyone at the guesthouse rounds.",
      "Free? I'll buy the coffee. I always buy the coffee. Note that.",
      "Your brother runs at five. I'll be at the station at four. Those two facts are unrelated.",
      "There's a seat on the overpass with your name on it. Not literally. Yet."
    ],
    ok: ["Good.", "Wonderful. Don't be late. You're always nearly late.", "Four o'clock. I'll be the one already there.", "Good. Wear a coat. The glass lies about the temperature."],
    no: ["Of course. Another time.", "Noted.", "That's fine. I'll see where you went anyway. That's a joke, Solar.", "Understood. I'll keep your seat warm. Figuratively."]
  },
  hangouts: [
    [
      { n: "The overpass at half past four, the glass gone gold with the low sun, the gates below swallowing and releasing people in their steady beige rhythm, and Danielle on her bench with the folder shut for once and her chin on one hand, captioning them under her breath like a woman doing a crossword she'd already finished in pen." },
      { s: 'danielle', f: 'neutral', t: "Briefcase. Left the office early, told them it was the dentist. It isn't the dentist." },
      { s: 'danielle', f: 'neutral', t: "Girl in the plaid scarf. She's been on the phone since the platform. She keeps saying *I'm fine* to someone who doesn't believe her. Neither do I." },
      { s: 'danielle', f: 'happy', t: "Your turn. Him. The one carrying flowers upside down." },
      { choose: [
        { t: "(Caption him. Mean.)", notes: 2, then: [
          { s: 'solar', f: 'neutral', t: "Apology flowers. He hasn't decided what for yet. He's hoping she'll tell him." },
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'happy', t: "Oh, that's good. That's very good. You've always been better at this than you let anyone see." },
          { n: "She said it like a compliment. Solar went down the stairs later with it sitting in her chest like a swallowed coin, not sure whether she'd been given something or had something taken." }
        ] },
        { t: "(Caption him. Kind.)", notes: 2, then: [
          { s: 'solar', f: 'neutral', t: "They're for his mother. He always carries them like that. She taught him." },
          { s: 'danielle', f: 'neutral', t: "Boring." },
          { s: 'danielle', f: 'neutral', t: "...Probably true, though. The true ones usually are boring. That's why nobody posts them." }
        ] },
        { t: "Does he know you're doing this?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Nobody ever knows. That's what keeps it honest." },
          { s: 'solar', f: 'neutral', t: "Or what makes it yours." },
          { n: "Danielle looked at her for one beat longer than the gates needed, and then went back to the gates, and didn't write anything down, which Solar would come to understand was the nearest thing to a concession she was ever going to be handed." }
        ] }
      ] }
    ],
    [
      { n: "There was a man on the platform who missed the 4:20 to Port Island. Danielle had been watching him do it for days. Gray coat, newspaper folded to the crossword, and when the train came in he stood up and went to the yellow line and looked at the open doors as if they'd asked him a personal question, and the doors closed, and he went back to the bench." },
      { s: 'danielle', f: 'neutral', t: "Six days. Same bench, same crossword, same train. He has a ticket. I've seen it." },
      { s: 'danielle', f: 'serious', t: "Nobody misses a train six days running by accident. He's waiting for something to be on it. Or for something not to be." },
      { choose: [
        { t: "Maybe he likes the platform.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Nobody likes a platform, Solar. A platform's where you stand when you haven't decided anything yet." }
        ] },
        { t: "Maybe he's waiting for someone to stop him.", notes: 3, then: [
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'neutral', t: "That's a strange thing to say." },
          { s: 'danielle', f: 'neutral', t: "Fine. I'll write it down. *Waiting to be stopped, possibly.*" },
          { n: "She wrote it down. It was, Solar noticed, the first thing she'd ever watched her write that was a guess." }
        ] },
        { t: "Leave him alone.", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "I'm forty feet above him behind a pane of glass. I'm the most alone anyone's ever left him." }
        ] }
      ] },
      { n: "The 4:20 came in. The man stood. The doors opened, and this time he folded his newspaper under his arm and got on, just like that, and the doors closed behind him, and the train pulled out toward the water." },
      { n: "Danielle sat back. For one second she looked, Solar thought, very nearly betrayed, as if a story she'd been following had ended in a way that didn't need her." },
      { s: 'danielle', f: 'neutral', t: "Well. That's six days I won't be getting back." },
      { n: "She drew a single neat line through a whole column, and capped the pen, and laid it parallel to the edge of the folder." }
    ],
    [
      { n: "She bought the coffee. She always bought the coffee, from the stand at the bottom of the overpass stairs where the old man in the paper hat printed a receipt for every cup whether you wanted it or not, and she always took the receipt, and folded it once, and slid it into the back pocket of the folder, behind a small and growing stack of other receipts, every one of them folded exactly once." },
      { s: 'solar', f: 'neutral', t: "You're keeping the receipts." },
      { s: 'danielle', f: 'neutral', t: "I keep all my receipts." },
      { choose: [
        { t: "How much have I cost you?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Two thousand eight hundred and forty yen. Since you're asking." },
          { s: 'solar', f: 'neutral', t: "Is that a lot?" },
          { s: 'danielle', f: 'happy', t: "It's an investment." },
          { n: "She said *investment* so pleasantly that it went down the back of Solar's collar like a drop of cold water off a gutter." }
        ] },
        { t: "(Pay for the next one before she can.)", notes: 3, then: [
          { n: "She had the coins on the counter before Danielle's hand reached her bag. Danielle watched the old man take them. Then she took the receipt from him, unfolded the pen, and wrote on the back of it, in her small upright hand, *S. paid. 160.*" },
          { s: 'danielle', f: 'neutral', t: "There. Now we're even." },
          { s: 'solar', f: 'serious', t: "We're not even." },
          { s: 'danielle', f: 'happy', t: "No. But it's written down that we are. That's the version that lasts." }
        ] },
        { t: "(Drink it. Say thank you.)", notes: 1, then: [
          { s: 'danielle', f: 'happy', t: "You're welcome. Note that." }
        ] }
      ] }
    ],
    [
      { n: "The board was back. A square of cork in the guesthouse lobby, beside the front desk with the bell nobody rang, IWATODAI NEWS stenciled across the top in pink marker, and five new prints pinned in a perfect row with an index card under each one in a small, upright, deeply cheerful hand. Mitsuru had taken it down on Tuesday. It had been up again by Wednesday breakfast. The desk lady had been seen reading it with her glasses on." },
      { n: "Under a photograph of the guesthouse rice cooker, *someone's been making the rice way too soft again!! 💕 we're not naming names. we're just saying ✨*. Under one of Junpei on the Strip, caught halfway into a sneeze, *iwatodai's funniest man caught being funny 👀 some talents really are natural!!*" },
      { choose: [
        { t: "(Read the next one out loud.)", notes: 2, then: [
          { n: "Under a photograph of the dorm's VISITORS whiteboard, *out by eight on school days? 👀 we hear SOME people's curfew is more of a suggestion!!*" },
          { s: 'danielle', f: 'happy', t: "That one's my favorite. It isn't about anyone. That's what makes it about everyone." },
          { n: "She'd come in behind her without a sound, as she always did, coffee in one hand, folder in the other, and was looking at her own board with the calm satisfaction of a woman admiring a well-reconciled account." }
        ] },
        { t: "(Straighten the crooked one.)", notes: 2, then: [
          { n: "There wasn't a crooked one. She looked for a long time and there wasn't. Every pin went in at the same angle, every card sat the same distance below its print, and when she put a finger out anyway, toward the corner of the last one, a voice behind her said, very pleasantly, *don't touch my layout.*" }
        ] },
        { t: "Mitsuru's going to take it down again.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Yes." },
          { s: 'solar', f: 'neutral', t: "Then why do you keep putting it up?" },
          { s: 'danielle', f: 'happy', t: "Because she has to read it to take it down." }
        ] }
      ] },
      { n: "Mitsuru took it down that night. Solar heard about it from Junpei, who'd watched her do it in total silence, card by card, and then stand with the cork board under her arm for a while in the lobby reading the back of the last card, which, Junpei said, nobody had ever thought to check. It was back by breakfast." }
    ],
    [
      { n: "Below them, at the gates, a puffer jacket stopped dead in the middle of a turnstile so abruptly that the salaryman behind it walked into its back. Hyein, coming home from the Strip with a shopping bag on each arm, had looked up at the overpass glass, and seen Danielle, and seen who was sitting beside her." },
      { n: "She didn't come up. She mouthed something up through the glass instead, large and slow, so it could be read from forty feet away. Solar couldn't read it. Danielle could. Danielle waved, a little wave from the wrist, the kind you'd give someone on a departing train." },
      { s: 'danielle', f: 'happy', t: "She says hello." },
      { s: 'solar', f: 'neutral', t: "That wasn't hello." },
      { s: 'danielle', f: 'neutral', t: "It had the same number of syllables." },
      { choose: [
        { t: "(Wave down at Hyein.)", notes: 2, then: [
          { n: "Hyein pointed at Solar, then at Danielle, then made a gesture with two fingers at her own eyes and turned them, slowly, on the glass, and then marched off toward the dorm with both bags swinging. Solar's phone went before she'd reached the exit." },
          { phone: [
            { from: 'hyein', t: "SOL" },
            { from: 'hyein', t: "why are u UP THERE with HER" },
            { from: 'hyein', t: "come home. theres soup. the soup doesnt have an agenda" }
          ], contact: 'Hyein' }
        ] },
        { t: "What did she actually say?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Something about a ditch." },
          { s: 'solar', f: 'neutral', t: "And?" },
          { s: 'danielle', f: 'happy', t: "And that she'd put me in it. It's a running joke between us. She has never once been joking." }
        ] },
        { t: "(Step back from the glass.)", notes: 1, then: [
          { s: 'danielle', f: 'neutral', t: "You don't have to hide from her. She'd have to go all the way round to get up here, and Hyein never goes round. She goes through." }
        ] }
      ] }
    ],
    [
      { n: "Every so often, between trains, she took her phone out of her coat and tapped one thing on it, and looked at it, and put it away again. The same thing, Solar realized by the fourth time. The same small gray sentence coming back up at her, patient as anything." },
      { phone: [
        { from: 'lockscreen', t: "Couldn't post. Tap to retry." }
      ], contact: "Danielle's phone" },
      { choose: [
        { t: "How many times have you tried?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Two hundred and twelve." },
          { s: 'solar', f: 'surprised', t: "...Today?" },
          { s: 'danielle', f: 'neutral', t: "In total. I'm not unhinged, Solar." },
          { n: "She said it with total serenity, and tapped it again. Two hundred and thirteen." }
        ] },
        { t: "What does it say?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Nothing you'd like." },
          { s: 'danielle', f: 'happy', t: "It's a street at night, with a window in it. And a caption. *found her!! 💕 you're all very welcome ✨*" },
          { n: "Solar knew which street. She knew which window. She stood there in the gold light of the overpass with her own face, somewhere in that phone, waiting forever to be posted, and felt it in the soles of her feet like a train going by underneath." }
        ] },
        { t: "(Take the phone. Delete it.)", notes: 2, then: [
          { n: "Danielle didn't let go. She didn't pull, either. For a second they both held it, the gray sentence lit up between their hands, and nobody moved." },
          { s: 'danielle', f: 'neutral', t: "That's mine." },
          { s: 'solar', f: 'neutral', t: "Then why are you showing me?" },
          { s: 'danielle', f: 'happy', t: "I'm not. You're looking." },
          { n: "She took it back, gently, the way you'd take back a pen you'd lent someone, and put it in her pocket, and didn't tap it again for the rest of the afternoon, which Solar suspected was entirely for her benefit." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/11', title: '1: the best seat', place: 'Iwatodai Station · Overpass', time: 'After School', music: 'mystery', scene: [
      { n: "The overpass above Iwatodai Station's ticket gates was a long glass-sided corridor that nobody used except to get from the north exit to the south one, bright and drafty and smelling faintly of floor polish and the coffee stand at the bottom of the stairs, and from halfway along it you could see straight down onto the turnstiles, where at four in the afternoon the whole town fed itself through in a slow beige river of school blazers and shopping bags and men in coats the color of wet cardboard." },
      { n: "On the one bench, with her back perfectly straight and a folder open on her knees, sat Danielle Marsh, watching all of them leave." },
      { n: "She didn't look up when Solar came up the stairs. Solar had the distinct impression she'd been seen on the second step, and that the not looking up was a courtesy, or a technique, and that with Danielle there might not be any difference." },
      { s: 'danielle', f: 'neutral', t: "You found it. Good. It's the best seat in town." },
      { s: 'danielle', f: 'neutral', t: "Everyone who leaves this city goes through those gates. Everyone who comes back does too. You can learn more from a turnstile in an hour than from a month of anyone's company." },
      { n: "There was a pen in her hand, and a highlighter, capped, laid parallel to the edge of the folder, and in the folder, Solar could see from the end of the bench, columns. Neat ones. Times down the left side, and beside each time a few words in a small upright hand. *Briefcase, 4:02, north. Girl, uniform, crying, 4:05. Same man as yesterday, 4:11, didn't go through.*" },
      { choose: [
        { t: "You're writing them down.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "I'm keeping track. It's different." },
          { s: 'danielle', f: 'neutral', t: "Writing things down is a commitment. Keeping track is a hobby. Everyone needs a hobby, Solar. You used to have several." }
        ] },
        { t: "(Sit at the far end of the bench.)", notes: 3, then: [
          { n: "She sat at the far end, as far as the bench allowed, which wasn't very far. Danielle didn't comment. She moved the folder one inch toward the middle of the bench, not an invitation, a measurement, the way you'd slide a ruler across a desk to see how much room was left." }
        ] },
        { t: "Is this where you go every day?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Mondays, Wednesdays, Thursdays and Saturdays. The other days I have the guesthouse." },
          { s: 'danielle', f: 'happy', t: "Mondays and Wednesdays we'd have had Business together. I like to keep the shape of a week. It's restful." }
        ] }
      ] },
      { n: "A train came in under them and the gates went busy and then quiet again, like a breath. Danielle wrote a time without looking at the departure board. She was, Solar thought, the only person she'd ever met who could make sitting still look like a form of paperwork." },
      { s: 'danielle', f: 'neutral', t: "Fuuka explained the memory thing. Very sweetly. She used her hands a lot." },
      { s: 'danielle', f: 'neutral', t: "I'll tell you what it looks like from where I'm sitting. It looks like a girl who walked out of her entire life one night and left all of her paperwork behind." },
      { s: 'danielle', f: 'happy', t: "Somebody had to keep it." },
      { n: "Solar looked at the folder. Danielle closed it. Not quickly. With her palm laid flat on the cover, the way you'd close a hymnbook after the last verse, and left her hand there." },
      { s: 'danielle', f: 'neutral', t: "Not this. This is Alpha's. The trip. Cabins, beds, who rides with whom, who owns a camp stove and is lying about it. It was soon. I'm not sure what *soon* means anymore." },
      { s: 'danielle', f: 'neutral', t: "You're on it, incidentally. You're on everything." },
      { s: 'danielle', f: 'neutral', t: "That isn't the paperwork I meant. I meant everything else. What you wore. Who you stood next to. Where you were at four o'clock on a Tuesday. Your coffee order was public record by your second week. Everyone at home has a little bit of you, Solar." },
      { s: 'danielle', f: 'happy', t: "I have the rest." },
      { n: "The back of Solar's neck went tight, the way it had at the gate on the night she came, before her mind had caught up to why. She didn't remember this girl. Her body didn't like her anyway, very specifically, in the way it disliked a step that wasn't where it should be in the dark." },
      { s: 'danielle', f: 'neutral', t: "Ask me something. About you. The first one's free." },
      { choose: [
        { t: "What was I like?", notes: 2, flag: { 'danielle-free': true }, then: [
          { s: 'danielle', f: 'neutral', t: "Punctual. Never early. Iced coffee until dark, never after. You walked across the quad like you'd rented it and were thinking of complaining to the landlord." },
          { s: 'danielle', f: 'neutral', t: "Your brother's name came into every room about four seconds before you did, and you hated that, and you were very, very good at looking like you didn't." },
          { n: "It was true. She could feel that it was true, the way you feel a step that's there. It was also, she understood a second later, the kind of true that anyone standing in a quad could have told her. Free, because it had cost Danielle nothing at all." }
        ] },
        { t: "Tell me about you instead.", notes: 3, flag: { 'danielle-turned': true }, then: [
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'neutral', t: "Me." },
          { s: 'danielle', f: 'neutral', t: "Treasurer. Business. I keep the books. I'm very good at it." },
          { n: "That was all. She said it like a résumé read aloud to an empty room, and then, for the first time since Solar had come up the stairs, she looked at her for longer than it took to read her." }
        ] },
        { t: "I don't want it.", notes: 3, then: [
          { s: 'danielle', f: 'surprised', t: "No?" },
          { s: 'danielle', f: 'neutral', t: "Nobody's ever turned down free. Not in my experience." },
          { s: 'danielle', f: 'happy', t: "Hm. Or have they. I'm trying to remember. You'd think I'd remember." }
        ] }
      ] },
      { n: "At twenty to five she opened the folder again and wrote something at the bottom of the page, and Solar understood that she'd been dismissed, pleasantly, the way a meeting is over when the chair starts packing up. She went down the stairs toward the gates. Halfway down, from behind and above, in the drafty glass hush of the overpass, came a small sound she already knew. Crisp. Fake. A camera shutter." },
      { choose: [
        { t: "(Turn around and look up.)", notes: 2, then: [
          { n: "Danielle was at the glass with the phone lowered, already, as if it had never been raised. She gave her the little wave from the wrist. Solar had the feeling that the turning around had been the photograph she'd actually wanted." }
        ] },
        { t: "(Keep walking. Don't give her a second one.)", notes: 3, then: [
          { n: "She didn't turn. She went through the gates at an even pace with her shoulders down and her face doing nothing, and it was, she thought, the first thing she'd decided about Danielle Marsh entirely on her own." }
        ] }
      ] },
      { phone: [
        { from: 'danielle', t: "You walk faster when you know someone's watching." },
        { from: 'danielle', t: "You always did." }
      ], contact: 'Danielle Marsh' }
    ] },

    { after: '11/18', title: '2: twenty-seven', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'city', scene: [
      { n: "The electronics shop at the back of Paulownia Mall had a photo counter in one corner, a little island of white light and glossy envelopes run by a young clerk with a careful side part, and Danielle was standing at it with a disposable camera in a green cardboard jacket in one hand and her purse in the other, negotiating." },
      { n: "Nobody negotiated at the electronics shop. The prices were printed on little cards. Danielle did not seem to have been informed of this, or had been informed and had filed it under *suggestions*, and she was being so pleasant at the clerk, so steadily and specifically pleasant, that he had begun to look frightened." },
      { s: 'danielle', f: 'happy', t: "And the one-hour developing. If I bring the roll back here. Every time. Loyalty, I mean. I'm a very loyal customer, I've been one for nearly ten minutes." },
      { n: "He took fifty yen off the developing. Solar watched him do it as if he couldn't quite work out how his hand had got there." },
      { n: "At the far end of the counter, someone else was buying tape. A whole stack of the small cassettes, and two packs of batteries, and a lens cloth, laid out in a neat row, and paying for them in exact change. Minji. Cap on frontways, the camera on its strap against her chest. She'd seen them before they'd seen her. Solar could tell by how still her shoulders were." },
      { s: 'minji', f: 'neutral', t: "Danielle." },
      { s: 'danielle', f: 'happy', t: "Minji. Still filming?" },
      { s: 'minji', f: 'neutral', t: "Still asking." },
      { s: 'danielle', f: 'neutral', t: "And how's that going?" },
      { s: 'minji', f: 'neutral', t: "People say yes." },
      { s: 'danielle', f: 'happy', t: "They say yes to you. That isn't the same as it being true." },
      { n: "Minji looked at her for a moment, the way she looked at a monitor when somebody on the enemy team was doing something she'd seen before, and then she looked at Solar, and the look changed into something quieter that asked a question without needing an answer, and she picked up her tapes and went, and on her way past she touched Solar's elbow, once, light, like checking a door was locked." },
      { place: 'Paulownia Mall · Fountain', time: 'After School', soft: true },
      { n: "Danielle sat on the lip of the fountain and wound the camera with her thumb, the little plastic wheel ticking under it, and held it up to her eye and lowered it again without pressing anything." },
      { s: 'danielle', f: 'neutral', t: "Twenty-seven. No preview, no deleting, no retry. You press it and it's taken and you don't even get to see what you took for an hour." },
      { s: 'danielle', f: 'neutral', t: "I'd forgotten what that was like. Having to mean it the first time." },
      { s: 'danielle', f: 'happy', t: "So. Who gets the first one?" },
      { choose: [
        { t: "(Let her take it. Of you.)", notes: 2, flag: { 'danielle-first-shot': true }, then: [
          { n: "She stood by the fountain. Danielle didn't tell her to smile, which she noticed, and didn't tell her where to look, which she noticed more. The shutter went. A dry little click with no flash in it, nothing like the fake sound phones made." },
          { s: 'danielle', f: 'neutral', t: "There. You'll never see it. Neither will I, for an hour. That's the part I like." }
        ] },
        { t: "(Take the camera out of her hands. Take hers.)", notes: 3, flag: { 'danielle-took-camera': true }, then: [
          { n: "It was out of Danielle's fingers before either of them had decided anything, and up to Solar's eye, and the shutter went, and there was Danielle on the fountain's edge for one frame with her hand only halfway up." },
          { s: 'danielle', f: 'surprised', t: "..." },
          { n: "For half a second her face wasn't arranged. It came back fast, every corner where it lived, and she held out her hand for the camera and waited, and Solar gave it back." },
          { s: 'danielle', f: 'neutral', t: "Nobody takes mine." },
          { s: 'danielle', f: 'neutral', t: "That was a waste of a frame." },
          { n: "She didn't wind it on, though, for a long moment. She held it in her lap with her thumb on the little wheel, not turning it, like someone holding a door that had swung open in a wind." }
        ] },
        { t: "Ask Minji first. She'd say you should ask.", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "Minji left." },
          { s: 'danielle', f: 'neutral', t: "But fine. Solar, may I take your photograph?" },
          { s: 'solar', f: 'neutral', t: "No." },
          { s: 'danielle', f: 'happy', t: "See? That's exactly why I don't ask." },
          { n: "She took one of the fountain instead. Then one of the escalator. She did not, Solar noticed, take one of her, and she noticed herself noticing, and didn't like that either." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "There's no paper here. Did you know? Nobody covers this town. Nobody's keeping any kind of record of it at all. A whole city, and all it's got is a station clock and a weather report." },
      { s: 'danielle', f: 'happy', t: "That's a gap in the market." },
      { choose: [
        { t: "Nobody here knows you.", notes: 3, then: [
          { s: 'danielle', f: 'happy', t: "Exactly. Clean books." },
          { n: "She said it like a girl who'd just been handed a new notebook. Solar had the sense that she'd said something that was supposed to sound like a warning and had come out sounding like an opportunity, and that this happened to people around Danielle a lot." }
        ] },
        { t: "What would you even put in it?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Whatever's true. Arranged nicely." },
          { s: 'danielle', f: 'neutral', t: "People think the arranging is the lie. The arranging is the work, Solar. Anyone can be true. Very few people are true *on time.*" }
        ] },
        { t: "Mitsuru won't let you.", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "Mitsuru hasn't been asked." },
          { s: 'danielle', f: 'neutral', t: "And she won't be. You don't ask people things you can find out by doing them." }
        ] }
      ] },
      { n: "On the way out they passed the escalators, where Minji had stopped to film the light coming down through the glass roof onto the moving steps. She lowered the camera as they came by. She looked at Solar." },
      { s: 'minji', f: 'neutral', t: "Can I? Just you on the stairs. You don't have to." },
      { n: "Solar nodded. Minji filmed four seconds of her on the escalator going down, and lowered the camera, and said thank you, and meant it. Beside them, without a word to anyone, Danielle took one of the two of them. Two cameras. One of them asked first." }
    ] },

    { after: '11/25', title: '3: line items', place: 'Kirijo Guesthouse', time: 'After School', music: 'joy', scene: [
      { n: "The Kirijo guesthouse's common room had, for the length of its working life, been a place where visiting executives sat in leather chairs and waited for cars, and since the autumn it had been quietly annexed by people from home, and in the last two weeks it had acquired, on the long table under the window, an administration." },
      { n: "Solar pieced it together from Jihoon, who'd told her with his feet up and the air of a man reporting a hostage situation he'd decided to find funny. Day one, Danielle had asked to see the grocery ledger. Day two, she'd found three hundred yen missing in the eggs. Day three, people had started handing her their receipts, because she was the one who asked for them, and asking, it turned out, was most of the job. Day four, the grocery money jar on the kitchen shelf had a label on it in her handwriting. Nobody had seen her put it there. Nobody had taken it off." },
      { n: "Today the long table was hers. The folder, the ledger, the jar, the receipts sorted into three piles by a system known to one person, and Danielle in the middle of it with her sleeves pushed up exactly to the same point on both forearms, like a girl who'd been at a desk all her life and had just been given a bigger one." },
      { s: 'danielle', f: 'happy', t: "Solar. Good. Sit. Check this column for me. Everyone in this building rounds. It's like living with a family of weather forecasters." },
      { choose: [
        { t: "(Check her arithmetic.)", notes: 2, flag: { 'danielle-ledger-help': true }, then: [
          { n: "She checked it. It was right. Of course it was right. It was so right it was faintly insulting, every column carried, every receipt accounted for, a single pencil tick beside each line in the margin like a row of tiny soldiers." },
          { s: 'danielle', f: 'neutral', t: "Thank you. Now it's been checked. That's different from it being right." }
        ] },
        { t: "This is Mitsuru's ledger.", notes: 3, flag: { 'danielle-mitsuru': true }, then: [
          { s: 'danielle', f: 'neutral', t: "It's Kirijo's ledger. Mitsuru keeps it." },
          { s: 'danielle', f: 'happy', t: "I'm helping her keep it. Just helping out. Somebody always says that's what we're supposed to do." }
        ] },
        { t: "(Put the receipts back in the jar.)", notes: 2, then: [
          { n: "She picked up the nearest pile and put it back in the jar. Danielle watched her do it with an expression of mild scientific interest, and then reached past her, and took them all out again, and put them back in the same pile in the same order, and Solar realized she'd known the order without looking." },
          { s: 'danielle', f: 'neutral', t: "*Solar.*" },
          { n: "She said the name gently, the way you'd correct a child's spelling, and it was so much worse than if she'd said anything else." }
        ] }
      ] },
      { ifEvent: 'a4-twelve', then: [
        { n: "Jaemin came through the common room on his way to the kitchen with his phone held out in front of him like a divining rod, scrolling something that wouldn't load, and stopped at the end of the table, and sighed at it, theatrically, to the room." },
        { s: 'jaemin', f: 'neutral', t: "No signal for anything but *that.* That account. Every time. You know the one. I swear to God, whoever runs it, when we get home, I'm finding out, and I'm going to be so normal at them. So polite. They'll never recover." },
        { s: 'danielle', f: 'happy', t: "Terrible. Who would do something like that?" },
        { s: 'jaemin', f: 'neutral', t: "Thank you. Thank you, Danielle. Someone in this building has values." },
        { n: "He went on into the kitchen. Danielle went back to the ledger. She didn't smile, exactly. It was more that her whole face settled, very slightly, the way a cat settles in a patch of sun, and stayed like that for the next five minutes, and Solar sat across the table from it and didn't know why she wanted to get up and open a window." }
      ] },
      { n: "The door opened. Mitsuru came in with the cold still on her coat and a ledger of her own under her arm, a heavy one, leather, with the Kirijo crest pressed into the cover, and stopped, and looked at the table, at the jar with its label, at the three piles, at the girl in the middle of them." },
      { s: 'mitsuru', f: 'neutral', t: "Ms. Marsh." },
      { s: 'danielle', f: 'happy', t: "Mitsuru." },
      { s: 'mitsuru', f: 'neutral', t: "The egg column." },
      { s: 'danielle', f: 'neutral', t: "Was wrong." },
      { s: 'mitsuru', f: 'neutral', t: "Was rounded." },
      { s: 'danielle', f: 'neutral', t: "That's the same thing. It just takes longer." },
      { n: "Solar sat very still between them with a receipt for daikon in her hand and had the specific sensation of being a chair in a room where two women were playing chess without a board. Neither of them raised her voice. Neither of them would ever raise her voice. That was, she realized, the problem. It was going to go on forever." },
      { s: 'mitsuru', f: 'neutral', t: "The grocery column is yours, then. Only the grocery column. I'll keep the rest." },
      { s: 'danielle', f: 'happy', t: "Thank you. That's very generous." },
      { n: "Mitsuru put the leather ledger under her arm again and went out. At the door she stopped, and looked back, not at Danielle, at Solar, and tilted her head an inch toward the hall." },
      { place: 'Kirijo Guesthouse · Front', time: 'After School', soft: true },
      { s: 'mitsuru', f: 'neutral', t: "She's very good." },
      { choose: [
        { t: "Is that a compliment?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "It's an observation." },
          { s: 'mitsuru', f: 'neutral', t: "People who are very good at taking things one line at a time are always thanked for it. Until someone reads the whole page." }
        ] },
        { t: "You gave her the column on purpose.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "I gave her one." },
          { s: 'mitsuru', f: 'neutral', t: "I'd like to see what she does with one. It tells you a great deal, what a person does with exactly one." }
        ] },
        { t: "(Say nothing.)", notes: 1, then: [
          { n: "She said nothing. Mitsuru seemed to find that acceptable, possibly even correct, and went out to her car." }
        ] }
      ] },
      { n: "When Solar went back in for her bag, the grocery column in the guesthouse ledger had a new heading at the top, ruled twice in pencil. *D. MARSH, TREASURER (ACTING).* Mitsuru, it turned out, had seen it on her way out. She had added nothing. In the morning, beside *(ACTING)*, in a different and very much more expensive pen, someone had underlined the word." }
    ] },

    { after: '12/3', title: '4: iwatodai news', place: 'Iwatodai Dorm · Kitchen', time: 'After School', music: 'joy', scene: [
      { n: "The board had come to the dorm." },
      { n: "Not the guesthouse's. A new one, smaller, a cork square propped on top of the fridge beside the VISITORS whiteboard, so that anybody reaching for the milk had to look at it, IWATODAI NEWS across the top in the same pink stencil, and under it six prints in a perfect row, each with its index card, each card in that small, upright, sunny hand." },
      { n: "Under a photograph of Junpei asleep on the lounge sofa with a baseball cap over his face, *someone's been studying SO hard!! ✨ we're sure the grades will reflect it 💕*. Under one of Akihiko's protein shaker on the counter, *gekkoukan's favorite senpai brings his own snacks to class 👀 some habits really are hard to break!*. Under one of Koromaru on the front step, *the only resident of this building with nothing to hide 💕*." },
      { n: "Hanni and Hyein were standing in front of it. Hyein had her arms folded so tightly she looked like she was holding herself together with them. Hanni had a tea towel over one shoulder and an expression Solar had only ever seen on her once before, at the gate, at midnight, on a girl who couldn't hide anything and had stopped trying." },
      { s: 'hyein', f: 'serious', t: "I'm going to kill her. I've decided. I'm going to do it with the board. It'll be poetic." },
      { s: 'hanni', f: 'neutral', t: "You're not killing anyone with a cork board, Hyein." },
      { s: 'hyein', f: 'serious', t: "Watch me." },
      { ifFlag: 'danielle-first-shot', then: [
        { n: "In the corner of the board, apart from the others, a little crooked on purpose, was Solar. By the fountain at Paulownia Mall, not looking at the lens, the first of twenty-seven. *new in town? 👀 funny, we hear she's been here all year ✨*" }
      ], else: [
        { n: "In the corner of the board, apart from the others, was a photograph of the dorm itself, from across the road, at night, one window lit. *early night, everyone? 💕 some of us are just getting started ✨*" }
      ] },
      { choose: [
        { t: "(Read them out loud.)", notes: 2, then: [
          { s: 'hyein', f: 'flustered', t: "Don't do the voice. Don't. Oh my God, you're doing the voice. Sol, you're doing it *exactly.*" },
          { n: "She hadn't meant to. It came out of her on its own, bright and light and faintly delighted, a voice for reading captions, and she heard it come out of her own mouth, and stopped, and had the strange nauseous sense of having put on a coat and found someone else's hands already in the pockets." }
        ] },
        { t: "Who writes like this?", notes: 2, then: [
          { n: "Hanni and Hyein looked at each other. It was a long look, and a practiced one, with a whole history in it that Solar wasn't in, and at the end of it Hanni turned back to the board." },
          { s: 'hanni', f: 'neutral', t: "Someone who's run out of things to post." }
        ] },
        { t: "(Take one down.)", notes: 2, then: [
          { n: "She took Koromaru's down. It seemed the least unfair. Hyein looked at her as if she'd taken the wrong hostage." },
          { s: 'hyein', f: 'serious', t: "The DOG? Of all of them? The dog's the only one she was nice about." },
          { s: 'solar', f: 'neutral', t: "That's why." },
          { s: 'hanni', f: 'surprised', t: "..." },
          { n: "Hanni looked at her for a second the way you'd look at a photograph of someone you knew, taken from an angle you'd never seen them at." }
        ] }
      ] },
      { n: "The front door opened at a quarter to six. Visitors knocked, that was the rule, and Danielle knocked, and came in, and took her shoes off in the hall with perfect manners, and walked into the kitchen with a thumbtack between two fingers and a new print in her other hand, and stopped, pleasantly, at the sight of the three of them in front of her board." },
      { s: 'danielle', f: 'happy', t: "Oh, good. Readers." },
      { s: 'hanni', f: 'serious', t: "Take it down, Danielle." },
      { s: 'danielle', f: 'neutral', t: "It's a community board, Hanni. It's for the community. You're in the community. I put the dog on it for you." },
      { s: 'hyein', f: 'serious', t: "You're a..." },
      { s: 'hanni', f: 'neutral', t: "Sol. Could you see if Fuuka needs help with the rice?" },
      { n: "Fuuka did not need help with the rice. Fuuka was upstairs. Solar knew it, and Hanni knew she knew it, and the sentence sat in the kitchen with all three of them looking at it, a door being held open politely by somebody who very much wanted her to walk through it." },
      { choose: [
        { t: "No. I'm staying.", notes: 3, then: [
          { n: "Hanni looked at her. Then she nodded, once, and said nothing else at all, not to Danielle, not to anyone, and the kitchen went quiet in the particular way of a room in which everybody has decided not to say the one thing they're all thinking about, and it was worse than shouting would have been, and Solar stood in the middle of it and didn't move." }
        ] },
        { t: "You write like the captions.", notes: 3, flag: { 'danielle-voice': true }, then: [
          { n: "She said it to Danielle. She didn't know which captions. She knew the chime of an app she didn't have, and gray squares that wouldn't load, and the bright needling cadence under them, and she knew it was the same voice the way you know a song through a wall." },
          { n: "Hyein went completely still. Hanni's hand closed on the tea towel." },
          { s: 'danielle', f: 'neutral', t: "People repeat things, Solar. It's what makes them people." },
          { s: 'danielle', f: 'happy', t: "Phrases get around. You'd be *surprised* what travels." },
          { n: "She pinned the new print up. Her hand didn't do anything at all. That was the thing Solar would remember, later, lying in bed, the absolute steadiness of the thumbtack going in." }
        ] },
        { t: "(Go upstairs. Let them have it.)", notes: 1, then: [
          { n: "She went. Halfway up the stairs she heard nothing at all from the kitchen, not a word, not a raised voice, and that was how she knew it was bad. When she came down again twenty minutes later, Hyein's eyes were red and Hanni was washing a single cup very slowly and Danielle was gone and the new print was on the board." }
        ] }
      ] },
      { n: "Someone came down the stairs for a glass of water. Black hoodie, hood down, bare feet on the cold floor. He stopped in the kitchen doorway, and looked at the board, and at the girl beside it, and the girl looked back at him with her smile ready, already, all its corners in place." },
      { s: 'danielle', f: 'happy', t: "Haechan." },
      { n: "He didn't answer. He went past her to the sink and filled a glass and drank all of it standing there with his back to the room, and put the glass down, and on his way out, as he passed Solar, without slowing, without looking at her, he said it low and flat to the doorframe." },
      { s: 'haechan', f: 'neutral', t: "She's never been anywhere by accident." },
      { n: "Then he was gone up the stairs. Danielle watched him go with no expression, which on her was so unusual that Solar looked twice, and by the second look the expression was back." },
      { n: "She stayed for dinner, which nobody had offered, and ate it beautifully, and at 7:59 by the kitchen clock she put on her shoes in the hall, thanked them all for their hospitality, and left. At 8:00 the door clicked shut behind her. It had been, Hyein said to nobody, timed. Mitsuru took the board down at ten. It was back on the fridge by breakfast, with one new card at the bottom, which said only, *thank you for reading!! ✨*" }
    ] },

    { after: '12/10', title: '5: the long route', place: 'Naganaki Shrine', time: 'After School', music: 'mystery', scene: [
      { n: "Naganaki Shrine in December, at a quarter to five, the light going blue and early behind the trees, the stone steps damp, the old man with the broom gone home and his broom left leaning against the offering box as if he'd been called away mid-sweep. Somebody was running the steps. All hundred and twelve, up, and down, and up, in a quarter-zip with the sleeves shoved to the elbow, at the pace of somebody who had been told the number of a play and was going to run it until it was right." },
      { n: "Danielle was on the bench at the bottom of the steps with the folder on her knees and a pen ready, and when Solar came through the torii she looked up as if Solar were the one who'd turned up somewhere unexpected." },
      { s: 'danielle', f: 'happy', t: "Solar. What a coincidence." },
      { s: 'danielle', f: 'neutral', t: "The guesthouse grocery fund needs a second signature over ten thousand yen. A resident's. He's a resident. I've been waiting. He runs until five. He's very consistent. It's restful, knowing where somebody will be." },
      { n: "Something happened to the back of Solar's neck. It didn't hurt. It went hot and tight in a thin line, the way skin does when it's been in the sun too long and you only find out later, and she stood at the bottom of the steps with the feeling and nowhere to put it, because she didn't know this girl, and didn't know why it felt like being stood in front of a window somebody else was looking through." },
      { choose: [
        { t: "You knew he'd be here.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Everybody knows he'll be here. It's on the whiteboard at the guesthouse. He wrote it himself. In capitals. With the times." },
          { s: 'danielle', f: 'happy', t: "If you don't want to be found, Solar, you shouldn't write it on a whiteboard. That's just basic." }
        ] },
        { t: "(Watch her watch him.)", notes: 3, then: [
          { n: "She watched. Danielle's eyes followed him up the steps and down, up and down, and her pen didn't move, and her face didn't move, and the whole of her was so still and so attentive that it looked, from a few feet away, almost exactly like patience. It wasn't patience. Solar didn't know what it was. She knew it was a long way round to be standing somewhere." }
        ] },
        { t: "(Go and stand at the bottom of the steps.)", notes: 2, then: [
          { n: "She went and stood at the foot of the steps, between the bench and the stone, without exactly deciding to. Danielle noted it. Solar watched her note it, a small movement behind the eyes like a figure being carried into the next column." }
        ] }
      ] },
      { n: "He came down the last flight and checked his watch and didn't look pleased and saw them both at once, and his face did the thing it did, which was nothing, finished, a conclusion already filed." },
      { s: 'jaehyun', f: 'neutral', t: "Solar." },
      { s: 'jaehyun', f: 'serious', t: "...Danielle." },
      { s: 'danielle', f: 'happy', t: "Jaehyun. I'm so sorry to interrupt. The grocery fund. Second signature. It'll take a minute." },
      { n: "He took the pen. He read the whole page first, which was like him, and signed it at the bottom in a hand like his voice, level, without flourish, and handed back the pen, and Danielle took it as if he'd handed her something that had been in a museum." },
      { s: 'jaehyun', f: 'neutral', t: "You're running the fund now?" },
      { s: 'danielle', f: 'happy', t: "Just the grocery column. Mitsuru's very generous. Somebody had to, they all round." },
      { s: 'jaehyun', f: 'neutral', t: "Thank you. That's helpful." },
      { n: "He meant it. That was the worst part, watching it. He meant it completely, the way he meant everything, and he had no idea at all, and Danielle received it like a coin into a jar." },
      { s: 'jaehyun', f: 'neutral', t: "Are you two friends? At home?" },
      { choose: [
        { t: "We're sorority sisters.", notes: 2, then: [
          { n: "It was Danielle's phrase. Solar heard herself use it. Danielle heard it too, and her smile changed by perhaps a single degree, the way a thermostat clicks." },
          { s: 'jaehyun', f: 'happy', t: "Good. That's good. Someone from the house." }
        ] },
        { t: "No.", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Alright." },
          { n: "He filed it. She watched him file it. Danielle laughed, lightly, prettily, as if Solar had made a joke at a dinner party, and the laugh went over the gravel and up the steps and didn't come back." },
          { s: 'danielle', f: 'happy', t: "She's always been very honest. It's one of her many qualities." }
        ] },
        { t: "Ask her.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Colleagues. We have a class together. She sits two seats away." },
          { s: 'jaehyun', f: 'neutral', t: "Two seats." },
          { s: 'danielle', f: 'happy', t: "Nobody ever sits in the one between." }
        ] }
      ] },
      { n: "He nodded, and checked his watch again, and said he had one more set, and went back up. Danielle closed the folder with the signature inside it and stood, smoothing her coat down with both hands, and didn't watch him go, which was somehow more noticeable than watching would have been." },
      { s: 'danielle', f: 'neutral', t: "Tell him I said goodnight. He won't remember I did. He never does." },
      { n: "And then she was walking, at her even administrative pace, out under the torii and down toward the road, and gone before Solar could get any of the three things she wanted to say into the right order, because Danielle always left at the exact moment before a sentence could reach her, as if exits were where she kept her best material." },
      { n: "Jaehyun came down again ten minutes later. He stood beside her at the bottom of the steps getting his breath back, and looked at the bench where Danielle had been." },
      { s: 'jaehyun', f: 'serious', t: "She signs everything twice. At home. Every form, every sheet the house sends over. Twice. I always thought that was careful of her." },
      { choose: [
        { t: "Did you?", notes: 3, then: [
          { s: 'jaehyun', f: 'neutral', t: "...Yes. Why?" },
          { n: "She didn't know why. She had a hot thin line along the back of her neck and no memory to hang it on. She said it was nothing. He looked at her a second longer than he usually looked at anything, and then put his hand on the top of her head, briefly, where nobody could see, and they walked down to the road together." }
        ] },
        { t: "(Say nothing. Walk down with him.)", notes: 2, then: [
          { n: "She said nothing. They walked down to the road together. At the bottom, where the bench was, there was a small dent in the gravel where the bench's legs had been shifted, a few inches, to face the steps. Solar didn't know why she noticed. She noticed." }
        ] }
      ] }
    ] },

    { after: '12/17', title: '6: no captions', place: 'Iwatodai Station · Overpass', time: 'After School', music: 'mystery', scene: [
      { n: "Danielle had a new roll in the camera, her third, and she was turning it over in her hands on the bench in a way Solar hadn't seen her do with anything, as if for once she were the one being given a gift, and when Solar sat down she held it up between two fingers like evidence." },
      { s: 'danielle', f: 'neutral', t: "There's an hour every night that nobody in this city gets. Fuuka told me. Twelve to one. Everyone's asleep in their little boxes and everything stops." },
      { s: 'danielle', f: 'happy', t: "An hour nobody else gets. Solar. Do you know how long it's been since anybody had an exclusive?" },
      { n: "She meant it. That was what made Solar's stomach drop, a slow cold slide like a lift starting without warning. She meant it the way other people meant a holiday." },
      { choose: [
        { t: "Don't.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "You always say *don't.* You never once say why." },
          { s: 'solar', f: 'serious', t: "There are things out there." },
          { s: 'danielle', f: 'happy', t: "There are things everywhere, Solar. That's what cameras are for." }
        ] },
        { t: "Then I'm coming with you.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "No. You'd be in it." },
          { s: 'danielle', f: 'neutral', t: "You're always in it. Just once I'd like something that isn't." }
        ] },
        { t: "(Say nothing.)", notes: 1, then: [
          { n: "She said nothing. Danielle took the silence the way she took receipts, folded once and put away, and Solar understood a second too late that she'd been entered in a column as *consent.*" }
        ] }
      ] },
      { place: "Iwatodai Dorm · Solar's Room", time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At four minutes past twelve the knock on her door was soft, and very fast, and Fuuka didn't wait to be told to come in." },
      { s: 'fuuka', f: 'surprised', t: "Solar. Your friend. The one with the folder. She's out. By the station, in the plaza." },
      { s: 'fuuka', f: 'sad', t: "And there's something near her. It doesn't feel like her kind. It's coming up out of the ground by the clock, and she's just... standing there. She's not running. Why isn't she running?" },
      { place: 'Iwatodai Station · Plaza · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'darkhour' },
      { n: "The plaza in front of the station was green and silent and full of coffins, a whole evening crowd stopped where it had stood, upright black boxes outside the konbini and at the bus stop and two of them leaning together on a bench like a couple who'd been waiting for the same bus for a hundred years. The station clock said a time that wasn't a time. Nothing moved." },
      { n: "Except Danielle, in the middle of it, in her long coat, winding the little wheel with her thumb and lifting the camera and pressing, the flash going off, white, enormous, in a world that had no light of its own. She was photographing the coffins. She was doing it the way she did everything, unhurried, choosing, moving one step left for the angle. Solar could see her lips moving. She was captioning them." },
      { n: "And under the station clock the shadow of the clock had stood up out of the paving like water rising through a drain, black and boneless, with a blue mask floating in it and too many hands, and it was coming across the plaza toward her at a slow wet crawl, and Danielle turned, and saw it, and lifted the camera, and took its picture." },
      { n: "The flash went off in its face. It didn't flinch. It didn't stop. It didn't look at the camera at all. It didn't care, Solar understood from thirty feet away, in her whole body at once, it didn't care about the flash or the caption or the angle or who was watching or what anyone would say, it didn't care about anything, it was just hungry, and it was coming, and Danielle Marsh stood in front of it with the camera still raised and did nothing." },
      { n: "For the first time since Solar had known her, which wasn't long, which was apparently her whole life, Danielle didn't know what to do." },
      { n: "Solar didn't decide. She was across the plaza with her hand in the back of Danielle's coat, hauling, and they went backward together between the coffins, and the thing turned its mask after them, slow, and she had the Evoker out of her pocket and against her own temple before she'd thought the word, and pulled, and the glass broke inside her head the way it always did, and Haenim came up out of her like light through a door, and the golden rope cracked across the plaza and the thing came apart into black water and was gone." },
      { place: 'Iwatodai Station · Overpass Stairs · The Dark Hour', time: 'The Dark Hour', soft: true },
      { n: "They were sitting on the overpass stairs. Solar didn't remember sitting. Danielle was two steps above her with her back against the wall and the camera in both hands in her lap, and her hands were shaking. Not much. Enough that the little plastic wheel made a faint ticking against her ring, over and over, like a clock that had forgotten which way it went." },
      { s: 'danielle', f: 'neutral', t: "I'm fine." },
      { n: "Her voice was perfect. Bright, light, perfectly modulated. Her hands went on shaking underneath it as if they belonged to somebody who hadn't been told." },
      { choose: [
        { t: "(Hold her hands still.)", notes: 3, flag: { 'danielle-held': true }, then: [
          { n: "She put her hands over Danielle's, over the camera, and held them. Danielle let her. For four seconds, which Solar counted, without meaning to, Danielle let her, and her hands were very cold, and very small inside Solar's, and very still now, and her face looked straight ahead at the green wall." },
          { n: "Then she took them back. Not fast. The way she'd closed the folder on the bench, palm flat, unhurried." },
          { s: 'danielle', f: 'neutral', t: "Your hands are cold." },
          { s: 'solar', f: 'neutral', t: "So are yours." },
          { s: 'danielle', f: 'neutral', t: "Mine are always cold. Yours aren't. That's the difference." }
        ] },
        { t: "You're not fine.", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "I'm very fine. I'm the finest person on these stairs." },
          { n: "She said it with the whole smile. The smile was there, every corner of it where it lived. It just wasn't attached to anything underneath, and for a second Solar could see the join, like a seam on the inside of a coat." }
        ] },
        { t: "(Sit with her. Say nothing.)", notes: 3, then: [
          { n: "She said nothing. She sat on the step below with her back to the wall too, and they listened together to the absolute silence of the hour, and after a while Danielle wound the camera on to the next frame, and it took her three tries to do it, and Solar didn't watch her do it, and that was the kindest thing she knew how to do, and she had the feeling Danielle knew that, and hated it." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "It didn't look at me." },
      { s: 'solar', f: 'neutral', t: "What?" },
      { s: 'danielle', f: 'neutral', t: "The thing. I took its picture and it didn't look at me. It didn't even know I was taking it." },
      { n: "She said it very quietly, to the camera, the way you'd report a fact you'd checked twice and still didn't believe." },
      { s: 'danielle', f: 'neutral', t: "Everything looks at me, Solar." },
      { dark: false },
      { music: 'night' },
      { n: "The hour ended. The lights on the overpass came back on with a hum, a taxi pulled away from the rank below, two salarymen came out of the coffins outside the konbini mid-sentence and went on with it, and Danielle stood up, and smoothed her coat down with both hands, and her face was entirely back, every corner of it, as if it had been waiting in a pocket." },
      { s: 'danielle', f: 'neutral', t: "You had your coat open. It's December. Do it up." },
      { n: "She walked to the guesthouse. It was two minutes away. Solar walked her there and Danielle let her, without comment, and at the door she went in without saying goodnight, and without saying thank you, and the door shut behind her with a click so quiet it might have been an accident, which from Danielle was the loudest sound Solar had ever heard her make." },
      { choose: [
        { t: "(Text her when you get home.)", notes: 2, then: [
          { phone: [
            { from: 'solar', t: "home" },
            { from: 'danielle', t: "I know. I watched you go through the gates." },
            { from: 'danielle', t: "That's a joke, Solar. I'm in bed." },
            { from: 'danielle', t: "Goodnight." }
          ], contact: 'Danielle Marsh' }
        ] },
        { t: "(Don't. Let her have the night.)", notes: 3, then: [
          { n: "She didn't text. She lay on her bed with her coat still on and looked at the ceiling. At 3:12 her phone lit up on the desk." },
          { phone: [
            { from: 'danielle', t: "I'm fine." }
          ], contact: 'Danielle Marsh' },
          { n: "That was all. Solar looked at it for a long time, two words and a period, and didn't answer, which she was fairly sure was the point." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '7: the offer', place: 'Iwatodai Station · Overpass', time: 'After School', music: 'tension', scene: [
      { n: "After Christmas the overpass was colder, and emptier, and the coffee stand at the bottom of the stairs had a little paper sign in the window that said it would be closed for New Year's from the thirtieth, and Danielle had the folder open on her knees again, and had laid out on top of it, in a neat row, three things. The guesthouse grocery ledger, its column balanced to the yen. A stack of prints in a paper envelope from the photo counter. And nothing, a clean space at the end of the row, as if something were going to be set down there." },
      { s: 'danielle', f: 'neutral', t: "Sit down, Solar. I'm going to make you an offer." },
      { ifFlag: 'danielle-free', then: [
        { s: 'danielle', f: 'neutral', t: "The first one was free. You took it. People always do. This one isn't." }
      ], else: [
        { s: 'danielle', f: 'neutral', t: "You didn't take the free one, the first afternoon. I wrote that down. I've been looking at it ever since." }
      ] },
      { s: 'danielle', f: 'neutral', t: "Everything about you that happened in public, I have. That's not the offer. Anyone could have that, if they'd been paying attention, and nobody does." },
      { n: "She put her hand in the empty space at the end of the row, flat, palm down, and left it there." },
      { s: 'danielle', f: 'neutral', t: "There's one thing I know about you that you don't. It isn't in this folder. It isn't on my phone. It isn't written down anywhere. It's here." },
      { n: "She took the hand off the folder and tapped her temple with one finger, twice, lightly, the way you'd tap a jar to see if it was full." },
      { s: 'danielle', f: 'happy', t: "At home, it's worth a very great deal. Here it's worth whatever you'd pay for it." },
      { choose: [
        { t: "Why would I want it?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Because it's yours. Because I have it and you don't. Nobody likes that, Solar. You least of all. You've never once in your life liked someone else holding your things." }
        ] },
        { t: "Why now?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Because it's after the twenty-first." },
          { s: 'danielle', f: 'neutral', t: "Everyone's decided something. I can see it on all of you, the whole building. Things are worth more once people have decided. It's simple economics. It was on the syllabus. Week three." }
        ] },
        { t: "What is it about?", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "If I told you that, I'd have told you." },
          { s: 'danielle', f: 'neutral', t: "*Solar.* Really." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "Here's the price. One photograph of you. Taken by me, today, here. My caption. Posted when I'm home." },
      { s: 'danielle', f: 'neutral', t: "That's all. One picture. You've been in hundreds. What's one more?" },
      { n: "The gates went on below them, swallowing and releasing, swallowing and releasing. Solar sat on the cold bench and felt the offer settle into her body in the order bodies took things. Her hands first, curling, wanting it. Then her stomach, turning over, slow. Then, last, the back of her neck, which had never once been wrong about this girl." },
      { choose: [
        { t: "No.", notes: 3, flag: { 'danielle-refused': true }, then: [
          { s: 'danielle', f: 'surprised', t: "..." },
          { n: "Something moved behind Danielle's eyes. It wasn't disappointment, and it wasn't anger, nothing like that. It was interest. A chart being updated, a figure carried into a column it hadn't been in before." },
          { s: 'danielle', f: 'neutral', t: "You'd rather not know something about yourself than buy it from me." },
          { s: 'solar', f: 'serious', t: "I'd rather not buy anything from you." },
          { s: 'danielle', f: 'neutral', t: "Hm." },
          { s: 'danielle', f: 'neutral', t: "...Interesting." },
          { n: "She said it slowly, the way she'd said nothing else, and looked at Solar with something on her face that was, horribly, almost adjacent to respect." }
        ] },
        { t: "(Stand still. Let her take it.)", notes: 1, flag: { 'danielle-sold': true }, then: [
          { n: "She stood. She didn't know why she stood. Her hands had wanted it before the rest of her had voted. Danielle lifted the phone, unhurried, and didn't tell her to smile, and the fake little shutter went, and it was done." },
          { s: 'danielle', f: 'happy', t: "Thank you." },
          { s: 'solar', f: 'neutral', t: "...So?" },
          { s: 'danielle', f: 'neutral', t: "So I'll tell you at home." },
          { s: 'danielle', f: 'happy', t: "It's worth more there. That's how a deposit works, Solar. You pay first. You find out what you bought later." },
          { n: "She put the phone away. Solar stood on the overpass with nothing in her hands and the specific nausea of having paid for something in full and been handed a receipt, and the receipt had her own face on it." }
        ] },
        { t: "Make it two. One of you.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "No." },
          { s: 'danielle', f: 'neutral', t: "Nobody takes mine." },
          { s: 'solar', f: 'serious', t: "Then there's no deal." },
          { s: 'danielle', f: 'happy', t: "Then there's no deal. You've always negotiated like someone who's never once had to. On principle, and out loud." },
          { n: "She didn't seem unhappy about it. She seemed, if anything, entertained, a woman watching a hand she'd already seen played out to the last card anyway, for the pleasure of the form." }
        ] }
      ] },
      { n: "Danielle gathered up the three things on the folder, the ledger, the envelope, the empty space, and closed the cover over them and laid her palm flat on it, and stood, and smoothed her coat." },
      { s: 'danielle', f: 'neutral', t: "The offer doesn't expire. Things like that don't. They only change price." },
      { n: "And she was gone down the stairs before Solar had decided what her face was doing, through the gates, without looking back, because she never needed to." }
    ] },

    { after: '1/7', title: '8: one-hour prints', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'night', scene: [
      { n: "The clerk at the photo counter saw Danielle coming from the escalator and visibly braced, the way a man braces on a platform when the express goes through, and had the envelope out and on the counter before she'd reached it. Twenty-seven prints. The third roll. The one from December." },
      { n: "She took them to the fountain, and sat on its lip, and laid them out on the stone one at a time in rows, like a woman dealing a hand of patience, or a detective laying out a case, and Solar sat at the other end of the row and looked at them upside down." },
      { n: "Gates, mostly. The overpass glass with the light coming through it. The guesthouse rice cooker again. Mitsuru's car at the curb with a parking ticket on it, which Danielle had captioned in pencil on the back before she'd even laid it down. The Strip at night. A cat. And then, in the middle of the second row, a print that was almost entirely green-black, nothing, a darkness with a smear of flash at its center, and in one corner of it, blurred, a sleeve. A coat sleeve, and a hand on it, gripping." },
      { s: 'danielle', f: 'neutral', t: "That's the one from the plaza." },
      { s: 'danielle', f: 'neutral', t: "I took it when you grabbed me. I didn't mean to. My finger went." },
      { n: "She looked at it the way she looked at nothing else in the row. It was the only photograph in twenty-seven that she hadn't chosen, Solar realized. The only one that had happened to her." },
      { ifFlag: 'danielle-held', then: [
        { n: "She had put it, Solar noticed, at the front of its row. Not the middle. The front, where you'd put the one you meant people to see first, and then she'd laid the next print down slightly over its corner, as if to make sure nobody would." }
      ] },
      { ifFlag: 'danielle-first-shot', then: [
        { n: "Further along was one from the first roll, the first of all of them, Solar by the fountain in November, not looking at the lens. Of course not. It had gone up in the corner of the dorm board in December and vanished off the fridge one night soon after, and Solar had assumed that was Mitsuru. It was here. Danielle had written on the back of it in pencil, in her small upright hand, *1/27*, and nothing else, which for her was an essay." }
      ] },
      { ifFlag: 'danielle-took-camera', then: [
        { n: "And at the very end of the last row, by itself, the one Danielle hadn't taken. Danielle on the fountain's edge in November with her hand halfway up, too late, half her face, one eye, the gold in it caught in the atrium light. The only print in any of the rolls with her in it. She had kept it. She hadn't said so. It was just there, at the end, where you'd put a signature." }
      ] },
      { ifMet: 'wren', then: [
        { n: "One more. She laid it down last, slightly apart, face up. The last bench at Iwatodai Station, where the light from the platform fell in long bars at the end of the day. Empty. A clean, careful, well-composed photograph of an empty bench. On the back, in pencil, a time, *5:41*, and a single small dot." },
        { n: "Solar looked at it a second too long. She knew that bench. She knew who sat on that bench at that hour, in a coat too big for her, with a ticket she never used. The bench in the print was empty." },
        { n: "Danielle saw her look. Danielle said nothing at all. She picked the print up again, without hurry, and didn't put it back in the row. She put it in the folder, in the back pocket, behind the receipts, and closed the folder, and laid her hand flat on it." }
      ] },
      { s: 'danielle', f: 'neutral', t: "Pick one. You can keep one. That's a gift, Solar. I don't do gifts. Don't get used to it." },
      { choose: [
        { t: "(Take the one from the plaza.)", notes: 3, then: [
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'neutral', t: "That's the worst photograph I've ever taken." },
          { s: 'solar', f: 'neutral', t: "That's why." },
          { n: "Danielle looked at her for a long moment. Then she slid it across the stone with one finger, the way you'd slide a check across a desk, and didn't watch Solar put it in her bag." }
        ] },
        { t: "(Take one of the gates.)", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "Sensible. The gates are the only honest thing in the city. People go through them or they don't." }
        ] },
        { t: "(Take none.)", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "No?" },
          { s: 'solar', f: 'neutral', t: "You'd want something for it later." },
          { s: 'danielle', f: 'happy', t: "...Yes. Probably. You're learning." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "These go on the board tomorrow. All but three." },
      { choose: [
        { t: "Which three?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "The ones that aren't news." },
          { n: "She didn't say which ones those were. Solar thought she could guess at two of them. She couldn't guess at the third, and she had the feeling, watching Danielle square the stack of prints against the stone with the side of her hand, that that was the one that mattered." }
        ] },
        { t: "Why do you still do the board? Nobody here cares.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Mitsuru cares. She takes it down every single night. She reads every card while she does it. She's my most loyal reader." },
          { s: 'danielle', f: 'neutral', t: "And when we go home, somebody here should know it happened. All of it. The rice and the parking tickets and the man who missed the 4:20. Somebody should be able to say it was true." },
          { n: "She said it the way she said everything, light, pleasant, a remark about the weather, and gathered the prints, and Solar sat on the fountain's edge with the strange feeling of having been told something true by accident, and of the person who'd said it being furious about it, very quietly, inside." }
        ] }
      ] }
    ] },

    { after: '1/14', title: '9: the archive', place: 'Kirijo Guesthouse', time: 'After School', music: 'mystery', scene: [
      { n: "The guesthouse common room in January smelled of the kerosene heater someone had dragged in from the hall and of oranges, a whole net of them on the long table that nobody admitted buying, and Danielle had the window end of the table and her phone face down on the folder, and when Solar sat down she turned the phone face up and slid it, without a word, across the table to her." },
      { n: "The camera roll. Not the IWATODAI NEWS prints. Home. Hundreds of photographs, thousands, a wall of tiny squares in the dull blue light of the screen, and Solar didn't have to scroll very far to find herself. She was everywhere. A lab with the lights off, headphones round her neck, mid-laugh at something on a monitor. Under a caption that was saved with it, *who knew she was a gamer!*" },
      { s: 'danielle', f: 'neutral', t: "Everyone at home has a version of you. Hanni has the kind one. Your brother has the one he'd like you to be. Minji has one in very good light." },
      { s: 'danielle', f: 'neutral', t: "Mine's the one that happened in public. At home, that's the only one that counts." },
      { s: 'danielle', f: 'happy', t: "I'm the archive, Solar. Whether you like it or not. And you don't. It's all over your face. You've always done that with your mouth when you don't like something." },
      { ifFlag: 'danielle-voice', then: [
        { s: 'danielle', f: 'neutral', t: "You said I write like the captions. In the kitchen, in front of Hanni." },
        { s: 'danielle', f: 'happy', t: "You've said that to me before. You were louder." },
        { n: "Solar didn't remember being louder. Something in her chest did, a heat with no picture attached to it, and she sat with it, and Danielle watched her sit with it, the way you'd watch someone feel around in a dark room for a light switch you already knew wasn't there." }
      ] },
      { choose: [
        { t: "Show me.", notes: 2, flag: { 'danielle-show': true }, then: [
          { n: "Danielle scrolled for her. Slowly. Solar on a quad. Solar at a tailgate in an orange scarf, squinting up at a scoreboard. Solar on a set of steps with a coffee, looking at nothing, looking very tired. Every one of them true. Every one of them taken from just far enough away that she'd never known." },
          { n: "She didn't feel like she was remembering. She felt like she was being shown around a house she'd lived in by an estate agent." }
        ] },
        { t: "Delete them.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "No." },
          { n: "Just that. Flat. Not cruel, not anything. The way you'd tell somebody the shop was closed." }
        ] },
        { t: "Keep them. They're yours, not mine.", notes: 3, then: [
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'neutral', t: "They're not mine. They're everyone's. That was the whole point of them." },
          { s: 'solar', f: 'serious', t: "Then they're not mine either." },
          { n: "Danielle took the phone back. She didn't turn it face down. She looked at it for a moment as if the wall of tiny squares had become, very slightly, a different shape, and then she locked it, and the screen went dark, and she kept her hand on it." }
        ] }
      ] },
      { ifEvent: 'a4-mark', then: [
        { n: "The door from the hall opened and Mark came in with his sweatshirt sleeves pulled over his hands and his hair still wet, heading for the oranges, and saw who was at the window end of the table, and his whole body did a small complicated thing, like a man missing a step on a staircase he'd climbed a thousand times." },
        { s: 'mark', f: 'flustered', t: "Sol! Hey. Hey. And— Danielle. Hey. Hi. Cool. Cool cool cool. Oranges. I'm here for the oranges." },
        { s: 'danielle', f: 'neutral', t: "Mark." },
        { n: "That was all she gave him. One word, bored, the way you'd read out the name on a parcel that wasn't for you. She didn't even look up from the phone. Mark took three oranges, which was two more than anyone needed, and laughed at nothing, a beat too early, and rubbed the back of his neck, and said something about a chord, and left, and the door swung shut behind him." },
        { n: "Solar looked from the door to Danielle and back. Something had happened in the room. She was sure of it. She couldn't for the life of her have said what, or between whom, or in which direction, and Danielle was already peeling an orange in one long unbroken spiral as if nobody had come in at all." }
      ] },
      { s: 'danielle', f: 'neutral', t: "You're doing it again." },
      { s: 'solar', f: 'neutral', t: "Doing what?" },
      { s: 'danielle', f: 'neutral', t: "Standing in the doorway in your head. You always did that, at home. Every morning. Kitchen doorway, one hand on the frame, before you'd come in. As if you were checking who was already in the room." },
      { choose: [
        { t: "When?", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "Every morning. You never once came in first." },
          { s: 'danielle', f: 'neutral', t: "You'd see me, and then you'd come in anyway. I always liked that about you. It's the only thing I've ever liked about you." }
        ] },
        { t: "(Step all the way into the room.)", notes: 3, then: [
          { n: "She didn't know what it would mean to do it. She did it anyway, in whatever way you do a thing like that, sitting down properly, both elbows on the table, taking an orange from the net without asking and peeling it in front of Danielle in short, bad, broken pieces." },
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'neutral', t: "...That's new." }
        ] },
        { t: "(Take your hand off the frame.)", notes: 2, then: [
          { n: "Her hand was on the edge of the table. She took it off. Danielle watched her do it with total attention, and wrote nothing down, and Solar had the creeping, uncomfortable sense that it had gone in a column anyway." }
        ] }
      ] },
      { n: "Danielle offered her a segment of the orange, a perfect one, the pith all gone. Solar took it. It was sweet. She hated that it was sweet." }
    ] },

    { after: '1/21', title: '10: unspent', place: 'Iwatodai Station · Overpass', time: 'After School', music: 'tender', scene: [
      { n: "The overpass in January at four in the afternoon, the glass cold enough to feel from a foot away, the light already going, the gates below working through the school crowd and the early shift with their tired beige patience, and Danielle on her bench with her back perfectly straight and her folder closed on her knees, and no pen out. For the first time since November, no pen out." },
      { s: 'danielle', f: 'neutral', t: "I've given the grocery column back to Mitsuru." },
      { s: 'danielle', f: 'neutral', t: "Balanced. To the yen. She checked it twice. She found nothing. She looked so disappointed. I don't think I've ever liked anyone more." },
      { cg: 'link-danielle-r10' },
      { n: "She said it with real pleasure, the only kind she seemed to have, the pleasure of a figure coming out where it should, and then she said nothing for a while, and the gates went on, and Solar sat down at the far end of the bench, and Danielle took a second folder from under the first and set it down on the bench between them, an inch nearer the middle than it needed to be. A measurement." },
      { s: 'danielle', f: 'neutral', t: "Did you ever want to know? Honestly. The one thing." },
      { cg: null },
      { choose: [
        { t: "Every day.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Good. Honest. That's two of your qualities I can count now." }
        ] },
        { t: "Less than you wanted me to.", notes: 3, then: [
          { s: 'danielle', f: 'happy', t: "Oh, that's good. That's very good. Nobody's ever told me that to my face." },
          { s: 'danielle', f: 'neutral', t: "...Or they have. Once. I'm trying to remember." }
        ] },
        { t: "No.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Liar. But a good one. Your father would be proud. Don't tell him I said that." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "I had a whole plan, you know. For when to tell you. Timing. It's all timing, Solar. Anyone can be true. Very few people are true on time." },
      { s: 'danielle', f: 'neutral', t: "I'm not going to tell you." },
      { n: "She said it to the gates. Below them a girl in a Gekkoukan blazer ran for a train and made it, and the doors shut behind her, and Danielle followed her the whole way with her eyes, and didn't write it down." },
      { s: 'danielle', f: 'serious', t: "Don't make it a kindness. It isn't one. I don't do kindness, it doesn't keep." },
      { s: 'danielle', f: 'neutral', t: "Some things are worth more unspent. That's all. That's the whole of it. You can hate me for it if you like. You'd be in good company." },
      { ifFlag: 'danielle-sold', then: [
        { n: "She took her phone out. She found something on it without looking for long, and turned the screen toward Solar, and Solar saw herself on the overpass in December, standing still, not smiling, the photograph she'd paid with." },
        { s: 'danielle', f: 'neutral', t: "And this." },
        { n: "She deleted it. In front of her. And then went into the folder where deleted things went and deleted it from there too, two taps, unhurried, the way she did everything." },
        { s: 'danielle', f: 'neutral', t: "Bad trade. I don't keep bad trades on my books. Also not a kindness. Accounting." }
      ] },
      { ifFlag: 'route-R', then: [
        { s: 'danielle', f: 'neutral', t: "So. I'll see you in Business, then. At home. Two seats." },
        { s: 'danielle', f: 'happy', t: "Nobody will sit in the one between. Nobody ever does." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'danielle', f: 'neutral', t: "So. I'll see you in Business, then. At home. Two seats." },
          { s: 'danielle', f: 'happy', t: "Nobody will sit in the one between. Nobody ever does." }
        ], else: [
          { s: 'danielle', f: 'neutral', t: "So. I'll have to tell them something, at home. Where you went. Everyone will ask me. Everyone always asks me." },
          { s: 'danielle', f: 'neutral', t: "I'll tell them something true. I haven't decided which." }
        ] }
      ] },
      { n: "And then she stood up, and smoothed her coat down with both hands, and tucked the folder under her arm, and was walking, at her even administrative pace, down the long glass corridor toward the stairs, and Solar had her mouth open, she had the first word of a sentence actually in her mouth, and Danielle was already on the stairs, and already at the gates, and already through, and didn't look back, because she never needed to, and the sentence went nowhere, and stayed in Solar's mouth like a coin." },
      { choose: [
        { t: "(Stay. Take her seat.)", notes: 3, then: [
          { n: "She moved along the bench to the middle, where the folder had been, and sat there with her hands in her coat pockets and watched the gates. A briefcase. A girl on the phone saying she was fine. A man carrying flowers upside down. She didn't write any of it down. She found that she knew the times anyway." },
          { n: "4:31. North exit. Curly hair, long coat, didn't look back." }
        ] },
        { t: "(Go after her.)", notes: 2, then: [
          { n: "She took the stairs two at a time and came out at the bottom into the crowd at the gates, and Danielle was gone, the way she was always gone, into the exact gap a person leaves when they've planned their exit to the second, and Solar stood in the middle of the station with the commuters parting round her like water round a post." }
        ] },
        { t: "(Look up at the glass.)", notes: 2, then: [
          { n: "She looked up, from the bench, at the long glass wall of the overpass, where you could see the gates and, faint, your own reflection over them. For a second she half expected the little sound. The shutter. It didn't come. Nobody was watching. It was the strangest she'd felt all year." }
        ] }
      ] },
      { phone: [
        { from: 'danielle', t: "You sat on my bench after I left." },
        { from: 'danielle', t: "Nobody told me. Nobody had to." }
      ], contact: 'Danielle Marsh' }
    ] }
  ],

  afterMax: [
    { title: 'balance', place: 'Iwatodai Dorm · Kitchen', time: 'Early Morning', scene: [
      { n: "The VISITORS whiteboard by the fridge had three columns again. Mitsuru's, in her briefing hand, who was coming and when. Jihoon's RATINGS, which kept coming back however many times it was erased, like a weed. And between them, ruled in pencil, in a small upright hand nobody else in the building wrote in, BALANCE, with a figure in yen beside every visitor's name and a little tick beside the ones who'd settled up." },
      { ifFlag: 'danielle-mitsuru', then: [
        { n: "Mitsuru stood in front of it with the eraser in her hand. She didn't use it. She read the BALANCE column top to bottom, the way she read operation reports, and then, without a word, she took the marker and corrected one figure, by forty yen, and capped the marker, and went out." },
        { n: "Solar had told her once whose ledger it was. Mitsuru, she suspected, had written it down somewhere." }
      ], else: [
        { n: "Mitsuru stood in front of it with the eraser in her hand for a long moment. Then she erased RATINGS, and left BALANCE, and went out, which Jihoon would later describe as the single greatest betrayal of his life." }
      ] },
      { choose: [
        { t: "(Check your own line.)", notes: 3, then: [
          { n: "*Solar (dorm). 0.* And beside the zero, in pencil, very small, *(for now).*" }
        ] },
        { t: "(Add a column of your own.)", notes: 2, then: [
          { n: "She ruled it in marker beside Danielle's. It took her a while to think of a heading. In the end she wrote OWED, and left it empty, and went to school. When she came home it had one entry in it, in the small upright hand. *D. Marsh. One coffee. Disputed.*" }
        ] }
      ] }
    ] },
    { title: 'the long route', place: 'Naganaki Shrine', time: 'After School', scene: [
      { n: "Jaehyun was running the steps. Danielle was on the bench at the bottom. Today's reason was a form about the guesthouse heater, which required, it emerged, a resident's signature, and a second resident's initials, and a date in a particular format, and took, from start to finish, exactly as long as it took him to run three sets." },
      { n: "Solar sat on the other end of the bench and watched her watch him, and the thin hot line along the back of her neck came, as it always came, and she still didn't know what it was for, and had stopped expecting to." },
      { choose: [
        { t: "You could just talk to him.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "I am talking to him. I'm talking to him about the heater." },
          { s: 'danielle', f: 'happy', t: "Some of us take the long way round, Solar. It's more scenic. You see who else is on the road." }
        ] },
        { t: "(Time him. Out loud.)", notes: 2, then: [
          { n: "She called the time when he reached the bottom. Two forty-one and three tenths. Danielle wrote it down, in the margin of the heater form, without appearing to decide to, and then looked at what she'd written as if somebody else had done it." }
        ] }
      ] },
      { s: 'jaehyun', f: 'neutral', t: "Danielle. Solar. Is it the heater?" },
      { s: 'danielle', f: 'happy', t: "It's the heater." },
      { n: "He signed, and initialed, and dated it in the particular format, and went back up, and she didn't watch him go, and Solar watched her not watch him go, and the bench was very quiet between them for a long time." }
    ] },
    { title: 'last roll', place: 'Iwatodai Station · Overpass', time: 'After School', scene: [
      { n: "The fourth camera, the last of the green cardboard ones the electronics shop had in stock, and Danielle held it out to Solar across the bench with one frame left on the counter." },
      { s: 'danielle', f: 'neutral', t: "I don't take the last one. Ever. It's a rule." },
      { s: 'danielle', f: 'neutral', t: "I'm not superstitious. It's just that the last one's always the one people remember, and I don't like to be remembered for something I didn't plan." },
      { ifFlag: 'danielle-refused', then: [
        { s: 'danielle', f: 'happy', t: "You turned down my one picture. You can have my last one. That's not a trade. I just like the symmetry." }
      ] },
      { choose: [
        { t: "(Take a picture of her.)", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Nobody takes—" },
          { n: "The shutter went. Danielle on the bench with her mouth open on the rule, the gates behind her, the light low and gold through the glass. She closed her mouth. She held out her hand for the camera. She didn't say it was a waste of a frame. Solar noticed, and filed it, and didn't say anything either." }
        ] },
        { t: "(Take a picture of the gates.)", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "Good. That's the honest answer. Nobody ever takes the honest answer with the last frame." }
        ] },
        { t: "(Give it back. Let it stay unused.)", notes: 3, then: [
          { s: 'danielle', f: 'surprised', t: "..." },
          { s: 'danielle', f: 'neutral', t: "...An unspent frame. Of course you would." },
          { n: "She put the camera in her coat pocket with one shot still on it, and kept her hand on it there, and they watched the gates." }
        ] }
      ] }
    ] },
    { title: 'the record', place: 'Iwatodai Station · Overpass', time: 'After School', scene: [
      { s: 'danielle', f: 'neutral', t: "I've been drafting what I'll say. At home. About you. About all of this. People will want a caption, Solar. People always want a caption." },
      { ifFlag: 'route-R', then: [
        { s: 'danielle', f: 'neutral', t: "But you'll be there. So I suppose you'll be your own caption. That's going to be very inconvenient for me." },
        { s: 'danielle', f: 'happy', t: "I'll manage. I'll say you were studying abroad. It's accurate." }
      ], else: [
        { ifFlag: 'route-true', then: [
          { s: 'danielle', f: 'neutral', t: "But you'll be there. All of you, apparently, everywhere at once, which I don't understand and refuse to have explained to me." },
          { s: 'danielle', f: 'happy', t: "I'll say you were studying abroad. It's accurate. It's just not the whole of it. Nothing ever is." }
        ], else: [
          { ifFlag: 'route-stay', then: [
            { s: 'danielle', f: 'neutral', t: "And you're staying. Here. In a city with no paper and a station clock." },
            { s: 'danielle', f: 'happy', t: "I'll say you found somewhere that suited you. People will hate that. They'll be talking about it for a year." }
          ], else: [
            { s: 'danielle', f: 'neutral', t: "And you won't be there to correct me. Nobody will be. That's a lot of space for a caption." },
            { s: 'danielle', f: 'neutral', t: "I'll say you transferred. It's accurate enough. Accurate enough is most of what anyone gets." }
          ] }
        ] }
      ] },
      { choose: [
        { t: "Say something true.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "I always say something true, Solar. That's never been the problem with me." }
        ] },
        { t: "Don't say anything.", notes: 2, then: [
          { s: 'danielle', f: 'happy', t: "Oh, I couldn't. Silence gets talked about too. I'd just be handing someone else the caption." }
        ] }
      ] }
    ] },
    { title: 'no feed', place: 'Iwatodai Station · Overpass', time: 'After School', scene: [
      { n: "No folder today. No pen. Danielle on the bench with her hands in her coat pockets, watching the gates without writing anything down, and looking, Solar thought, faintly annoyed about it, as though she'd caught herself enjoying something she hadn't scheduled." },
      { s: 'danielle', f: 'neutral', t: "I stopped tapping retry. Last Tuesday. I noticed on Thursday that I'd stopped. I didn't decide to. I don't like things I didn't decide to." },
      { ifEvent: 'a4-twelve', then: [
        { n: "Footsteps on the overpass, small and even. Chenle, in a hoodie, with a can of something and his phone sideways, playing a game with the sound off, who sat down on the bench between them without asking, because it was a bench, and went on playing." },
        { n: "Danielle looked at him. She looked at him the way she looked at a new page of a spreadsheet, top to bottom, and Solar watched her come to the bottom and find nothing. Not a thing. His face was a closed laptop. He didn't look up." },
        { s: 'chenle', f: 'neutral', t: "You're doing the thing." },
        { s: 'danielle', f: 'neutral', t: "What thing?" },
        { s: 'chenle', f: 'neutral', t: "Looking." },
        { n: "He finished his level, drank the last of the can, stood, nodded at Solar, and left. Danielle watched him all the way to the gates with an expression Solar had never seen on her before, and it took her a while to name it. It was the face of somebody who'd been read and couldn't tell what had been written down." }
      ] },
      { choose: [
        { t: "Maybe you like it. Not being posted.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "I don't like it." },
          { s: 'danielle', f: 'neutral', t: "...I'm getting used to it. That's worse. Liking a thing is a choice. Getting used to it just happens to you." }
        ] },
        { t: "(Sit and watch the gates with her. Don't talk.)", notes: 3, then: [
          { n: "They watched the gates. Nobody captioned anything. A whole train came and went, and the next one, and when Danielle finally spoke it was to say what time it was, which she did without looking at a clock, and which was exactly right." }
        ] }
      ] }
    ] },
    { title: 'retry', place: 'Iwatodai Station · Overpass', time: 'After School', scene: [
      { n: "She had her phone out again, after all. Not retrying. Typing, slowly, with one thumb, a caption she wasn't going to post, and when she'd finished she held the phone out to Solar so she could read it, which she had never once done before." },
      { n: "It was a photograph of the gates, from above, at four in the afternoon. The caption said, *the best seat in town ✨ some of us just read faster 💕*" },
      { choose: [
        { t: "That's not news.", notes: 3, then: [
          { s: 'danielle', f: 'happy', t: "No. It isn't. That's why I'm not posting it." },
          { s: 'danielle', f: 'neutral', t: "I'm allowed one thing that isn't news, Solar. Everybody is. I checked the rules." }
        ] },
        { t: "Post it here. On the board.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "And let Mitsuru take it down?" },
          { s: 'danielle', f: 'happy', t: "...Yes. All right. She'll have to read it first." }
        ] }
      ] },
      { n: "She deleted the caption, letter by letter, from the end, and put the phone away, and they sat there until the light went, and at twenty to five she got up and smoothed her coat and left, the way she always left, before anything could be said to her back." }
    ] }
  ]
});
