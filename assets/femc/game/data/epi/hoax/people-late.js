/* The HOAX epilogue, expansion pass (Nov 5-6 2026), writer 2: seven more hangouts for four home bonds, mostly Late Night.
   Kat's ask: the epilogue lengthened "with the same improvements we did to the Runners epilogue" (more time with friends,
   small recurring touches, realism) and more of Nana, appearing naturally. Data only; bonds go through add() exactly as in
   people.js / people-crew.js, so these append to each bond's list whichever file loads first. A bond offers its FIRST unseen
   hangout whose gates fit (slot included), so a late hangout here only competes with that bond's other late hangouts (none
   in people.js / people-crew.js), and Cherry's daytime one competes with epi-h-cherry-1 / -2 (see "Order" below).

   Hangouts
     jungwon  epi-h-jungwon-late-1 'eleven fifty-nine'  12/22-12/23 late, after epi-h-emergency, every route (before the lock)
              Her Room. He calls at 11:59 from under his duvet (Maeumi asleep on his feet) so he can say goodnight "today";
              he's been reading about fishing for an hour because he's coming for Christmas lunch at one; Nana climbs on the
              bed and breathes into the phone and wakes Maeumi. Choice: the reel tip (sets epi-h-jw-reel) / "you don't have to".
     jungwon  epi-h-jungwon-late-2 'flashcards'         1/7-1/8 late, after epi-h-new-year, every route
              Her Room. He calls from the dry bathtub in his en-suite and quizzes her for calculus; she quizzes him on her.
              Branches on { ifEvent: 'epi-h-makeup' }: 1/7 is the night before (he gives her a ladder problem: the paper's
              question one is a ladder); 1/8 is after it (the snow went up past both their windows; he doesn't make her say
              anything; tomorrow's paper instead). Nana eats a flashcard. Choice: ask what he's scared of / hang up first.
     jihoon   epi-h-jihoon-late-1 'proof of life'       12/22-12/23 late, after epi-h-home, every route (before the lock)
              Front Step. One a.m.: "send Proof Of Life", then Nana at the front door; Jihoon on the step with a convenience-
              store bag of dog treats for his son; father Jihoon; the mock-royal voice; he plays along with the temple and nothing
              else ("I was home"); sober, and his hands never stop (the receipt folded smaller and smaller, the treats torn into
              exact halves). { ifEvent: 'epi-h-study-plans' } touch (twelve hours after he lay on her carpet). Choice: give him the
              temple, all of it (strain) / sit and hold the bag. He drives off with his headlights off until the corner.
     cherry   epi-h-cherry-late-1 'boxing day'          12/26-12/28 after, after epi-h-christmas, every route
              "Hanlim · Cherry's Room" (new place: Care Bears on every shelf). Cherry back from her grandmother's; her
              grandmother's present for Solar (a Bedtime Bear, the blue one asleep on a moon); Christmas gossip: Sunghoon's
              midnight text and its correction at 12:01; Hyunsuk (he doesn't say her name); Christmas at the Kims' by route
              ({ ifEpiRoute }: the porch / the steps / the council's heap and Sunghoon asking after her). No Nana (her room).
              Choice: what Solar tells her about Hyunsuk.
     cherry   epi-h-cherry-late-2 'sleepover'           12/30-1/1 late, after epi-h-party, every route
              Her Room. Cherry sleeps over; Nana takes the middle of the bed; the party post-mortem by route and flag
              (epi-h-party-refused / -flushed / -left, epi-h-party-jh-flushed / -jh-walked, epi-h-party-scuffle and Sunghoon's
              scarf); lights off; in the dark Cherry asks if she'd go back. { ifEvent: 'epi-h-new-year' } for the 1/1 night (the
              hanbok on the wardrobe door, falling snow; 12/30 is grey with no snow). The mirror is left alone (cherry-3 owns it).
              Choice: "No." / "I don't know." (sets epi-h-cherry-dark-truth) / hold her hand and don't answer.
     cherry   epi-h-cherry-late-3 'the night before'    1/10 late, after epi-h-prom, every route
              Her Room. The night before the hearing: Cherry does her nails (clear, because Hanlim bans polish) and lays out
              the uniform; her emergency kit for Thursday; the green scarf on { ifFlag: 'epi-h-jw-gate' }; { ifGlitch: 3 } the
              snow going up past the window and Cherry shutting the curtain. Nothing of the hearing itself. Choice: let her stay
              the night / paint her nails black.
     junkyu   epi-h-junkyu-late-1 "can't sleep"         12/28-12/30 late, after epi-h-seance, every route
              Her Room. One a.m.; he hasn't slept since the séance ("i didn't sleep :("); he sings when he's nervous on the
              phone (made-up words, then, without meaning to, the tune from the dorm lounge); Nana snores into the receiver; she
              stays on until he's asleep. Choice: "Kazuha did it." / "I don't know what it was." / sing with him.

   Windows vs world.js lateOpen (12/22, 12/23, 12/25, 12/26, 12/28, 12/30, 1/1, 1/3, 1/4, 1/7, 1/8, 1/10): every late window
   holds at least one (eleven fifty-nine and proof of life 12/22 + 12/23; flashcards 1/7 + 1/8; sleepover 12/30 + 1/1; the night
   before 1/10; can't sleep 12/28 + 12/30). Weather written to the brief's fixed days: 12/22-12/23 snowing; 12/26-12/28 clear,
   old snow banked; 12/28 and 12/30 no falling snow; 1/1 snowing (branched); 1/7 grey; 1/8 and 1/10 light snow, going up sometimes.

   Order (for the lead): epi-h-cherry-late-1 is After School 12/26-12/28. If people.js's Cherry hangouts come first in the bond's
   list, cherry-1 (12/22-12/27, after/evening) is offered before it while unseen, and cherry-2 (after, 12/28-1/5) takes 12/28, so
   boxing day only shows on 12/26-12/27 after cherry-1 has played. It's written to read fine before or after cherry-1 (Hyunsuk
   never texts her in it; cherry-1 says he hasn't).

   Flags set: epi-h-jw-reel (eleven fifty-nine: she told him to ask Dad what reel he uses; free for the bath routine / Dad's call),
     epi-h-cherry-dark-truth (sleepover: she told Cherry "I don't know" about going back; free for later scenes).
   Flags read: epi-h-party-refused / -flushed / -left, epi-h-party-jh-flushed / -jh-walked, epi-h-party-scuffle (sleepover),
     epi-h-jw-gate (the night before). Events read (ifEvent): epi-h-study-plans, epi-h-makeup, epi-h-new-year.
     ifEpiRoute: jungwon / jihoon (boxing day, sleepover; council is the else). ifGlitch 3: the night before.
   Glitches: no glitch ids. { glitch: { strain: 1 } } once, right after she gives Jihoon the temple story (proof of life).

   Inventions for Kat to confirm
     - Jungwon: Solar told him in October that her dad drives to a reservoir at five and comes back with nothing, happy; he
       reads about reels (the spinning one "is the forgiving one"; Dad's later "he knew what a spinning reel was" fits); he
       hasn't worked out what to tell his mother about Christmas lunch ("I have until Monday": 12/25/2023 was a Monday);
       Maeumi sleeps on his feet under the duvet; on 1/7-1/8 he calls from the dry bathtub in his en-suite (farthest from his
       parents' door); Nana eats the chain-rule flashcard.
     - Jihoon: his text "send Proof Of Life"; beef jerky sticks and a chew shaped like a toothbrush from the convenience store;
       he drives off with his headlights off until the corner so they won't sweep her parents' window.
     - Cherry: her grandmother started the Care Bear collection (one every Christmas since Cherry was four); her grandmother
       calls Solar "the little one with the green eyes" (saw her at chuseok) and sends her a Bedtime Bear; Cherry slept at her grandmother's on
       Christmas night; Sunghoon's Christmas text at 00:00 ("merry christmas cherry. soon. - s") and 00:01 ("that was sunghoon.
       - s"), rated by Cherry; Cherry wears Sunghoon's scarf (grey cashmere) to bed on the council route; on the jihoon route Cherry watched
       Solar get into Jihoon's car from her window at 8:30 and wasn't inside the party (check against writer 1's epi-h-ready); Cherry's emergency kit for the
       hearing (safety pins, tissues, a granola bar, a spare pair of tights, Solar's own perfume in a tiny bottle); Hanlim bans
       nail polish, so clear coat.
     - Junkyu: he sings made-up songs about whatever is in front of him; without meaning to he hums the dorm lounge's morning
       tune; his mom sleeps across the hall and knocks.
   Canon held: Jungwon is her boyfriend on every route; nothing romantic past a kiss is even near; Haechan is never named (the
     one reach is a pause on the 1/7 call, and the lounge tune); Jihoon pretends he was home and nobody mentions his parents;
     the baggie is not in these scenes (he's sober in his); nothing of sophomore year is filled in; Cherry and Sunghoon stay
     "soon"; Hyunsuk stays hurt; the video and Danielle never come up; nobody calls an adult. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const LATE = ['late'];

  /* ── Jungwon ── */
  add('jungwon', 'friend', [
    { id: 'epi-h-jungwon-late-1', title: 'eleven fifty-nine', hint: "Jungwon is calling at 11:59 from under his duvet, which is not his minute at all.",
      after: '12/22', until: '12/23', slots: LATE, events: ['epi-h-emergency'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-romance' },
      { n: "Her phone lit up on the pillow at 11:59, which was a strange minute for anybody to call anybody and a stranger one for Yang Jungwon, who called at the same minute past the hour every time like a train, whose mother checked his door for the last time at 11:20 and then went to bed, and who therefore had no business being awake at all." },
      { s: 'solar', f: 'surprised', t: "Won?" },
      { s: 'jungwon', f: 'neutral', t: "Hi. Sorry. I'm under the duvet." },
      { n: "He was. She could hear it, the close cotton hush around his voice, every word padded like he was talking from inside a tent he'd built himself, and under it, very faintly, something small snoring in long whistling breaths." },
      { s: 'jungwon', f: 'neutral', t: "Maeumi's asleep on my feet. If he wakes up he'll yell, and then we both die. So I'm whispering." },
      { s: 'solar', f: 'happy', t: "Why are you calling at 11:59, you freak?" },
      { s: 'jungwon', f: 'neutral', t: "Because it's still today for one more minute, and I didn't say goodnight to you today. I don't like doing that." },
      { s: 'jungwon', f: 'flustered', t: "Also I've been reading about fishing for an hour." },
      { s: 'solar', f: 'surprised', t: "About *what?*" },
      { s: 'jungwon', f: 'serious', t: "Fishing. Your father likes fishing. You told me in October. You said he drives to a reservoir at five in the morning and comes back with nothing and he's happy about it. I didn't understand that, so I've been reading." },
      { n: "She could picture it exactly, which was the problem. The duvet pulled up into a peak over his head, the phone's glow on his face, his hair in his eyes, eleven tabs open about lures, his reading face on, the one with the dimple that came out when he was concentrating, as if fishing were a paper he could get first in." },
      { s: 'jungwon', f: 'neutral', t: "There are two kinds of reel. Spinning and baitcasting. The spinning one is the forgiving one. I think your father is a spinning man." },
      { s: 'solar', f: 'happy', t: "Won. Why are you studying my dad?" },
      { s: 'jungwon', f: 'flustered', t: "I'm coming for Christmas. If that's alright. At one. I'll bring something from the bakery by the station. I haven't worked out what I'm telling my mother yet. I have until Monday." },
      { n: "Then the minute on her phone turned over to 12:00, and nothing happened. No green. No hum. No coffins standing where the furniture had been. The heating ticked, the snow kept coming down past the streetlight the slow fat way it had come down all evening, and it was just the next minute, the way it was here, which she was still getting used to." },
      { s: 'jungwon', f: 'sad', t: "...It's tomorrow. I missed it." },
      { s: 'solar', f: 'happy', t: "You said hi before it turned. Hi counts." },
      { n: "Nana chose that moment. He'd been asleep across her feet like a sandbag, and he heard her voice go soft and decided it had to be about him, and got up, sixty pounds of white Samoyed walking straight up the bed and across her stomach, and put his whole enormous face against the phone, and breathed into it. Long, hot, damp, investigative breaths, the snuffle of a dog who suspected there was a boy in there." },
      { s: 'jungwon', f: 'surprised', t: "Sol. Someone's breathing." },
      { s: 'solar', f: 'happy', t: "It's Nana." },
      { s: 'jungwon', f: 'neutral', t: "...Hello, Nana." },
      { n: "Nana sneezed into the phone. And a block away, under a duvet, something small woke up and yelled." },
      { s: 'jungwon', f: 'surprised', t: "No. No, no, no. Maeumi. Maeumi, it's a phone. It's a Samoyed in a phone. He can't get you." },
      { n: "A muffled scramble. The yelling, smothered, like a small dog being folded into a blanket against his will. Then silence, the long held kind, the two of them in two dark houses listening for the same thing, a door down a hallway, a voice. Nothing came. Nana lay down on her chest with a groan like this had all been very tiring for him." },
      { s: 'jungwon', f: 'happy', t: "We survived." },
      { s: 'solar', f: 'happy', t: "Barely." },
      { choose: [
        { t: "(Tell him the one thing that works on Dad.)", stat: { charm: 1 }, flag: 'epi-h-jw-reel', then: [
          { s: 'solar', f: 'happy', t: "Okay. Don't ask him if he caught anything. He never caught anything. Ask him what reel he uses, and then just let him talk. Don't say anything. Nod. He'll go for twenty minutes." },
          { s: 'jungwon', f: 'serious', t: "What reel do you use." },
          { n: "She heard him type it. At midnight, under a duvet, with a small dog glaring at him, he typed it into his phone with both thumbs like it was going on the test." },
          { s: 'jungwon', f: 'neutral', t: "I've put it at the top. Above *compliment the fruit.*" },
          { s: 'solar', f: 'surprised', t: "You have a *list?*" },
          { s: 'jungwon', f: 'flustered', t: "It's not a list. It's notes. It's three pages of notes." }
        ] },
        { t: "You don't have to do this, Won.", stat: { kindness: 1 }, then: [
          { n: "He was quiet for long enough that she checked the screen to see if he was still there." },
          { s: 'jungwon', f: 'neutral', t: "I know I don't." },
          { s: 'jungwon', f: 'sad', t: "I want to sit in a house where somebody's dad asks me how my grades are, and I give the right answer, and it just stays the right answer." },
          { n: "That was all he said about it. It was a lot, for him, a whole room he'd opened the door to and let her see into for one second before he shut it again, and she didn't touch it. She just put her hand flat on Nana's back and felt him breathe." },
          { s: 'solar', f: 'sad', t: "It'll stay the right answer." },
          { s: 'jungwon', f: 'neutral', t: "Okay." }
        ] }
      ] },
      { s: 'jungwon', f: 'neutral', t: "I should sleep. Maeumi's looking at me like I've betrayed him." },
      { s: 'jungwon', f: 'happy', t: "Goodnight, Sol. That one was for yesterday. This one's for today. Goodnight." },
      { n: "The line went quiet with the soft, careful click of a boy who'd hung up very slowly so it wouldn't make a sound, and she lay in the dark with the phone on her chest and Nana's chin on top of the phone, breathing his hot dog breath into her face, and she was smiling at the ceiling like an idiot, and there was nobody to see it but the dog." }
    ] },

    { id: 'epi-h-jungwon-late-2', title: 'flashcards', hint: "Jungwon is calling with a stack of flashcards and a timer, and he's whispering, so it's from the bathtub again.",
      after: '1/7', until: '1/8', slots: LATE, events: ['epi-h-new-year'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-home' },
      { n: "He called at 10:41, his minute, and the echo on the line told her where he was before he did: the dry bathtub in his en-suite, sitting in it fully clothed with his knees up, because it was the room in his house that was furthest from his parents' door, and because tile carried a whisper less than carpet did. He'd explained this to her once as if it were physics. It probably was." },
      { s: 'jungwon', f: 'neutral', t: "Are you ready." },
      { s: 'solar', f: 'neutral', t: "No." },
      { s: 'jungwon', f: 'happy', t: "Good. That's honest. We'll start there." },
      { n: "She was on her bed in her hoodie with the duvet round her shoulders like a cape and her calculus notes in a fan on her knees, and Nana was on the other half of the bed, which was most of the bed, upside down, his four silly legs folded in the air like a dead bug's, smiling at the ceiling in his sleep." },
      { ifEvent: 'epi-h-makeup', then: [
        { n: "One paper down. Two to go. Her hand still remembered the pencil snapping." },
        { s: 'jungwon', f: 'neutral', t: "How was it. Not the score. How was it." },
        { s: 'solar', f: 'neutral', t: "I showed my working." },
        { s: 'jungwon', f: 'happy', t: "Then it was good." },
        { n: "Neither of them said anything about the window. It sat on the line between them anyway, the snow going up past the glass for nine minutes, past her room and past his, down the hall with the AP kids, the whole school watching it in two separate rooms. She'd seen half of it through her own hand." },
        { s: 'solar', f: 'sad', t: "Won, during the—" },
        { s: 'jungwon', f: 'neutral', t: "I saw it." },
        { n: "That was all. Not *what happened to you*. Not *are you alright*. He'd seen it, and he was telling her he'd seen it so she wouldn't have to wonder, and then he left it there, on the edge of the bathtub, where she could pick it up later or not at all." },
        { s: 'jungwon', f: 'neutral', t: "Tomorrow's paper. Card one." }
      ], else: [
        { n: "Calculus at 8:30. Room 3-4 for her. Down the hall for him, with the AP kids, in a room she'd never see the inside of." },
        { s: 'jungwon', f: 'neutral', t: "Card one. A ladder five metres long is leaning against a wall. The bottom slides away at two metres per second. How fast is the top coming down when the bottom is three metres out." },
        { s: 'solar', f: 'serious', t: "Why is it always a ladder? Who is leaving all these ladders against walls?" },
        { s: 'jungwon', f: 'happy', t: "Pythagoras. Differentiate both sides. Go." },
        { n: "She went. She got it on the second try, with him breathing patiently down the line from a bathtub, and he said *good* the way he always said it, like setting a coin down on a counter, and she wrote LADDER at the top of her notes in capitals and circled it twice, out of spite." }
      ] },
      { n: "He did eleven more. She got seven. On the twelfth Nana woke up, rolled over, put his whole head on her notes, and took the top card off the stack with his front teeth as delicately as a man taking a canapé, and lay there with it in his mouth, smiling, not chewing, making eye contact." },
      { s: 'solar', f: 'surprised', t: "Nana's eating the chain rule." },
      { s: 'jungwon', f: 'neutral', t: "That's fine. He knows it now." },
      { s: 'solar', f: 'happy', t: "My turn. Things that aren't on any exam." },
      { s: 'jungwon', f: 'neutral', t: "That's not a subject." },
      { s: 'solar', f: 'happy', t: "It's my subject. Card one. What's my kimbap." },
      { s: 'jungwon', f: 'neutral', t: "Tuna mayo. The green wrapper. You open it right and I open it wrong and you've given up on me." },
      { s: 'solar', f: 'happy', t: "Card two. What did Nana do to your dog on the first day of school." },
      { s: 'jungwon', f: 'serious', t: "Assault." },
      { s: 'solar', f: 'happy', t: "He was *saying hello*." },
      { s: 'jungwon', f: 'serious', t: "He said hello with his whole body, Sol. Maeumi still talks about it." },
      { s: 'solar', f: 'happy', t: "Card three. What am I scared of." },
      { s: 'jungwon', f: 'neutral', t: "Needles. Calculus. Your mother when she says your full name. The haunted vending machine, although you'd say you aren't." },
      { n: "Then he stopped. Not because he'd run out. She could hear him not run out, the small sound of a boy deciding which answers to leave on the card, and down the line his finger was tapping on the side of the bath, small and steady, one tap after another, like counting under his breath without the breath. She almost said something. A name came up her throat, the way it did, warm and stupid and sure of itself, a person who'd have made this whole call unbearable and perfect, and she held it there behind her teeth until it went back down." },
      { s: 'jungwon', f: 'neutral', t: "That's four. Four's a good score." },
      { s: 'solar', f: 'sad', t: "Four's a good score." },
      { choose: [
        { t: "Your turn. Off the exam. What are you scared of?", stat: { kindness: 1 }, then: [
          { n: "The tapping stopped." },
          { s: 'jungwon', f: 'neutral', t: "Coming second." },
          { s: 'jungwon', f: 'sad', t: "Every time. Even when I can't. Even when there's nobody to come second to. I sit down at the paper and my hands already know what the drive home is going to sound like if I do." },
          { n: "He said it in his flattest voice, the weather-report one, sitting in an empty bathtub in a house where every room was too quiet. She lay there with a dog's head on her calculus and let it be said." },
          { s: 'solar', f: 'sad', t: "I'd still like you second." },
          { s: 'jungwon', f: 'flustered', t: "...That's not on any exam." },
          { s: 'solar', f: 'happy', t: "It's on mine." }
        ] },
        { t: "(Tell him to go to sleep, and hang up first. For once.)", stat: { courage: 1 }, then: [
          { s: 'solar', f: 'happy', t: "Go to sleep, Won. Get out of the bathtub. Goodnight." },
          { n: "She hung up before he could do it first, the way he always did it, gently, a minute early. Then she lay there and waited, and it took nine seconds." },
          { phone: [
            { from: 'jungwon', t: "you hung up first." },
            { from: 'solar', t: "go to SLEEP" },
            { from: 'jungwon', t: "i'm getting out of the bathtub." },
            { from: 'jungwon', t: "that was a good question set. four is a good score." }
          ], contact: 'Won' }
        ] }
      ] },
      { n: "She turned the lamp off. Nana had fallen asleep with the chain rule still in his mouth, and she didn't take it off him. He could keep it. One of them should know it in the morning." }
    ] }
  ]);

  /* ── Jihoon ── */
  add('jihoon', 'friend', [
    { id: 'epi-h-jihoon-late-1', title: 'proof of life', hint: "It's one in the morning, Nana is at the front door with his whole body wagging, and somebody is sitting on your step.",
      after: '12/22', until: '12/23', slots: LATE, events: ['epi-h-home'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Front Step', time: 'Late Night', scene: [
      { music: 'epi-h-jihoon' },
      { phone: [
        { from: 'jihoon', t: "send Proof Of Life" },
        { from: 'solar', t: "its 1am" },
        { from: 'jihoon', t: "thats not proof. anyone could type that. a ghost could type that" }
      ], contact: 'jihoney' },
      { n: "She didn't have to send anything. Nana had already gone, off the end of her bed and down the stairs in the dark, and by the time she got to the hall in her socks he was at the front door with his nose to the crack, not barking, never barking at this one, his whole back half going so hard his front half could barely stay on the floor, whining in the high thin voice he only had for one person in the world." },
      { n: "She opened the door. Cold came in like a held breath let go. And on the top step, in the snow, under the porch light, in a leather jacket that wasn't warm enough for any of it, Park Jihoon was sitting with a convenience-store bag in his lap like a man waiting for a very late bus." },
      { s: 'jihoon', f: 'happy', t: "Ah. There he is. My son. My beloved. Come to Father." },
      { cg: 'epi-h-proof-of-life' },
      { n: "Nana lost his entire mind. He hit Jihoon in the chest so hard Jihoon went over backwards into the snow, and lay there being trampled, hissing *shh, your grandparents are asleep, my son, have some dignity*, while Nana tried to fit his whole face into the leather collar and cried about it." },
      { s: 'solar', f: 'happy', t: "You're going to wake my mom." },
      { s: 'jihoon', f: 'neutral', t: "She'd make me soup. That's the risk I'm taking." },
      { cg: null },
      { n: "He sat back up on the step with all of the dog in his lap and opened the bag. Jerky sticks. A chew shaped like a toothbrush. Tiny bone-shaped biscuits in a pink packet clearly meant for a much smaller, much more fashionable dog, whose back he read out loud like a herald at court." },
      { s: 'jihoon', f: 'happy', t: "*Supports healthy teeth and a shiny coat.* Hear that? A shiny coat. Father Jihoon provides. Sit. Sit. Nana. Your Highness. *Sit.*" },
      { n: "Nana did not sit. Nana had never once in his life sat for anybody. Jihoon gave him the biscuit anyway." },
      { ifEvent: 'epi-h-study-plans', then: [
        { n: "Twelve hours ago he'd lain on her carpet with this exact dog on his chest and told Junkyu he got carsick at the mall. She didn't know which one was the lie. She thought it might be both." }
      ] },
      { n: "She sat down next to him. The step was so cold it went straight through her pajama pants, and she sucked in a breath, and he moved over without looking at her to give her the half that wasn't wet." },
      { n: "He was sober. She knew it the way she knew his doorbell ring, before she'd even thought the word. His eyes were the right size under the porch light. He was properly cold, red at the ears and the knuckles, the way you only got cold when there was nothing in you to keep it out. And his hands wouldn't stop." },
      { n: "He tore the jerky sticks into exact halves, lining the ends up before he tore, and fed them to Nana one at a time. When that ran out he folded the receipt in half, and in half again, until it was a hard little square the size of a fingernail, and tried to fold it once more, and couldn't, and kept trying." },
      { s: 'jihoon', f: 'neutral', t: "So. The temple." },
      { s: 'solar', f: 'neutral', t: "The temple?" },
      { s: 'jihoon', f: 'happy', t: "The temple, Sol. In Gangwon-do. That you went to. With your little council. I was home, obviously. I'm always home. I read about it on the forum like a peasant. So tell me. Was it very spiritual." },
      { n: "He was offering it to her, holding the story out like the bag of treats, a thing they could both stand on. Not the dorm, not the stairs, not the year she'd watched him live in a town that didn't exist. Just a temple and some bowing and a boy who'd been home the whole time." },
      { choose: [
        { t: "(Give him the temple. All of it.)", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'happy', t: "So spiritual. The bell went at four. Four, Jihoon. Rice porridge every morning. They took our phones at the gate. Sunoo cried. Heeseung says he didn't but he did. I swept a step for an hour." },
          { glitch: { strain: 1 } },
          { n: "It came out easy, and something at the back of her neck went thin and cold, a wire pulled from very far off, and she kept going anyway, because his hands had stopped. The receipt sat still between his fingers. He was listening the way he'd listened to her stories when they were six, in a blanket fort, mouth a little open, like it was all true." },
          { s: 'jihoon', f: 'happy', t: "Four. Disgusting. I would have died. I would have simply lain down in the snow and let the monks bury me." },
          { s: 'solar', f: 'happy', t: "You'd have been the worst monk." },
          { s: 'jihoon', f: 'happy', t: "I'd have been the *best* monk. The most handsome monk in Gangwon-do. They'd have put me on a postcard." }
        ] },
        { t: "(Don't answer. Take the bag and hold it for him.)", stat: { kindness: 1 }, then: [
          { n: "She didn't answer. She took the bag out of his lap and held it on her knees, open, so he could keep reaching into it, and he looked at her doing it for a long second, and then he did. Reached in. Tore a jerky stick in half. Held the halves up against each other in the porch light to check they matched." },
          { s: 'jihoon', f: 'neutral', t: "...That's rude. I asked you a question. About your spiritual journey." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "He fed Nana the half. He kept the other half in his fist for a while, like he'd forgotten it was there. Nana put his chin on Jihoon's knee and waited for it with enormous, smiling patience, the way he'd waited for things all his life." }
        ] }
      ] },
      { n: "The snow came down past the porch light and settled on Nana's back and didn't melt, because there was too much of Nana for it to get through. Jihoon looked down the long white road, and then, quickly, at her face, the way you look at a thing you'd put down somewhere and come back for, to check it was still where you left it." },
      { s: 'jihoon', f: 'neutral', t: "Okay. Good. That's proof." },
      { s: 'solar', f: 'sad', t: "Jihoon." },
      { s: 'jihoon', f: 'happy', t: "Go to bed, Skank. You're blue. My son needs his rest, he has a big day of being fat tomorrow." },
      { n: "He kissed Nana on top of his enormous head, left the bag on the step like a tribute, and went down the path with the little square of receipt still in his fist. He drove off with his headlights off all the way to the corner so they wouldn't sweep across her parents' window, the way he had since he got his licence." },
      { n: "Nana watched the corner for a long time after there was nothing to watch. Then he lay down across the doorway, facing out, and wouldn't come in until she sat in the cold next to him and waited too." }
    ] }
  ]);

  /* ── Cherry ── */
  add('cherry', 'friend', [
    { id: 'epi-h-cherry-late-1', title: 'boxing day', hint: "Cherry is back from her grandmother's with leftover japchae, a present that isn't from her, and gossip.",
      after: '12/26', until: '12/28', slots: ['after'], events: ['epi-h-christmas'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Cherry's Room", time: 'Daytime', scene: [
      { music: 'epi-h-goofy' },
      { n: "Cherry's room had Care Bears on every shelf. Not some shelves. Every shelf, three deep, in rainbow order, because Cherry Kim would threaten to put a teacher through a window and then go home and arrange her bears by colour, and anybody who pointed this out got hit. Grumpy had the place of honour on the windowsill, blue and furious, facing the street like a guard dog. The sun was out for once, flat and white and cold, and the snow from the weekend lay banked along the kerb below the window, gone grey at the edges." },
      { n: "Cherry was on the bed eating cold japchae out of her grandmother's plastic container with her fingers, in a giant sweatshirt, her hair up in a knot with a pencil through it." },
      { s: 'cherry', f: 'neutral', t: "Shoes off. Sit. Eat this. My grandma made enough for a wedding, and then she made me sleep over so she could watch me eat it. I've gained a whole person." },
      { s: 'solar', f: 'happy', t: "How was it?" },
      { s: 'cherry', f: 'neutral', t: "Loud. My uncle got drunk and sang. My cousin brought a boyfriend who called her *babe* at the table and my grandma looked at him until he left. It was beautiful. Here." },
      { n: "She reached under her pillow and threw a gift bag at Solar's head. Solar caught it mostly with her face." },
      { s: 'solar', f: 'surprised', t: "Cher, you already gave me one." },
      { s: 'cherry', f: 'serious', t: "That one's from me. This one's from my grandma. Don't look at me like that. She asked about you. She said, *where's the little one with the green eyes, she looked tired at the chuseok thing,* and I said you were at a temple, and she said *a temple won't fix that,* and she went upstairs and came back with this. So." },
      { n: "It was a Care Bear. It was always a Care Bear. The blue one, Bedtime Bear, curled up asleep with a little crescent moon and a star on his stomach, his eyes shut, very peaceful about it." },
      { n: "Solar looked at the moon on his stomach for a second longer than you needed to look at a bear." },
      { s: 'cherry', f: 'neutral', t: "She started all of these, you know. One every Christmas since I was four. That's how I ended up like this." },
      { n: "She waved her chopsticks at the shelves, the forty bears, the whole rainbow, like it was a medical condition. Then she looked at the bear in Solar's hands and her face did something small and quick and then went back to normal." },
      { s: 'cherry', f: 'neutral', t: "Mine better be on your pillow." },
      { s: 'solar', f: 'happy', t: "It's on my pillow." },
      { s: 'cherry', f: 'happy', t: "Correct answer. Okay. Gossip. I have so much gossip. You're not ready." },
      { n: "She got her phone out and held it up to Solar's face, very close, too close, like evidence in a trial." },
      { s: 'cherry', f: 'serious', t: "Midnight. Christmas. On the dot. *merry christmas cherry. soon. - s.* And then. One minute later. *that was sunghoon. - s.*" },
      { s: 'solar', f: 'happy', t: "He *corrected* it?" },
      { s: 'cherry', f: 'serious', t: "He clarified who sent it. In case I thought it was a *different* s. The first one's an eight. The second one's a two. Average, five. I've been staring at it for two days. I'm going to kill him. On Valentine's. So it's romantic." },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'cherry', f: 'neutral', t: "And you. Tell me about the preppy freak. Did he survive your dad?" },
        { n: "So she told her. The bow at the door, the bakery box held level all the way down. Four cups. The squares he'd cut his food into. Then the porch, and the scarf, and her father in the window with his plate of cake, and Jungwon bowing to him. Ninety degrees." },
        { s: 'cherry', f: 'surprised', t: "He *bowed* to the *window?* Oh, I'm going to throw up. I'm so happy. I'm going to throw up on a bear." }
      ], else: [
        { ifEpiRoute: 'jihoon', then: [
          { s: 'cherry', f: 'neutral', t: "And Park stayed. Didn't he. After the preppy freak left. He always stays." },
          { s: 'solar', f: 'neutral', t: "We did the steps. With the cocoa." },
          { n: "Cherry nodded slowly, like she was checking it off something. She'd stood on that front path on Christmas and looked at Jihoon's car for a second longer than a car needed looking at, and now Solar thought she knew what the second had been for." },
          { s: 'cherry', f: 'serious', t: "Did he keep his hands out of his pockets?" },
          { s: 'solar', f: 'sad', t: "Mostly." },
          { s: 'cherry', f: 'sad', t: "Mostly. Okay. Mostly's a word." }
        ], else: [
          { s: 'solar', f: 'happy', t: "The whole council came. They fell over on my step. In a heap. Niki was on the bottom." },
          { s: 'cherry', f: 'happy', t: "*Good.*" },
          { s: 'solar', f: 'happy', t: "And Sunghoon asked if you were coming." },
          { n: "Cherry put the japchae down. Cherry very slowly picked the japchae back up, and ate a mouthful, and chewed it for a long time, looking at the wall." },
          { s: 'cherry', f: 'neutral', t: "In what voice." },
          { s: 'solar', f: 'happy', t: "*Not that Sunghoon is asking.*" },
          { s: 'cherry', f: 'flustered', t: "I hate him. I hate him so much. That's a ten. Don't tell him it's a ten." }
        ] }
      ] },
      { n: "The radiator clanked. Cherry ate the last of the japchae and licked her fingers and then didn't say anything for a while, which for Cherry was a whole speech, and Solar watched her pick at the bobbles on her sweatshirt sleeve, and knew what was coming before it came." },
      { s: 'cherry', f: 'neutral', t: "Has Suk said anything. About me." },
      { choose: [
        { t: "He doesn't say your name, Cher.", stat: { courage: 1 }, then: [
          { n: "Cherry nodded. She'd known. She'd wanted somebody else to say it so she didn't have to be the one, which was a very Cherry thing to want, and a very Cherry thing never to admit." },
          { s: 'cherry', f: 'sad', t: "That's fair. That's so fair. I'd hate me too. I was going to homecoming with him and I was texting someone else every night, Sol. Every night. I'm a *bitch.*" },
          { s: 'solar', f: 'sad', t: "You're *my* bitch." },
          { s: 'cherry', f: 'sad', t: "...Yeah. Okay. That helps, weirdly." }
        ] },
        { t: "(Throw the Bedtime Bear at her.)", stat: { kindness: 1 }, then: [
          { n: "She threw it. It hit Cherry square in the forehead and bounced into the empty container, and Cherry stared at her with japchae on her chin and the whole of her face outraged." },
          { s: 'cherry', f: 'surprised', t: "Did you just throw my *grandma's bear* at me?" },
          { s: 'solar', f: 'happy', t: "Yes." },
          { n: "Cherry threw it back. Then Cheer Bear. Then four others, until the bed was a pile of bears and both of them were in it, and Cherry was laughing too hard to finish the sentence she'd started, which had been the point. The bit about Suk stayed on the floor where it had fallen. Neither of them picked it up." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "Take the bear home. Put it next to mine. Not on top. *Next to.* My grandma's going to ask." }
    ] },

    { id: 'epi-h-cherry-late-2', title: 'sleepover', hint: "Cherry is sleeping over with a toothbrush, two face masks and a full report on the party, and Nana has already taken the middle of the bed.",
      after: '12/30', until: '1/1', slots: LATE, events: ['epi-h-party'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { ifEvent: 'epi-h-new-year', then: [
        { n: "The hanbok was hanging on the wardrobe door where her mother had put it to air, navy and gold, like a third girl in the room who'd gone to bed early, and outside the snow had started again, small and steady, lit orange under the streetlight. Cherry had come back after dark with her toothbrush and two face masks and the curling iron still in her tote bag, because she'd done Solar's hair once today already and you never knew." }
      ], else: [
        { n: "The sky had been grey all day and stayed grey into the night, low and heavy and doing nothing, the old snow banked along the kerb under the streetlight. Cherry had turned up at ten with her toothbrush, two face masks and a family-size bag of shrimp crackers, and said *I'm sleeping here* the way other people said *hello*." }
      ] },
      { n: "Nana had taken the middle of the bed before either of them got into it. He did this with total confidence, like a man claiming a deckchair, lying long ways down the exact centre of the mattress with his head on Solar's pillow and his back legs on Cherry's, and when Cherry tried to shift him he went boneless, sixty pounds of white fluff gone liquid, smiling at her upside down." },
      { s: 'cherry', f: 'serious', t: "Your dog is a fascist." },
      { s: 'solar', f: 'happy', t: "He likes you." },
      { s: 'cherry', f: 'serious', t: "He likes my side of the bed. Okay. Face masks. Then the post-mortem. Then sleep. In that order." },
      { n: "They sat against the headboard in the sheet masks with Nana between them like a sandbag in a flood, eating shrimp crackers through the mouth holes, which was disgusting and which they'd been doing since they were thirteen." },
      { ifEpiRoute: 'jungwon', then: [
        { ifFlag: 'epi-h-party-flushed', then: [
          { s: 'cherry', f: 'happy', t: "You *flushed* it. I'm still thinking about it. His *face.* I'd pay money for that face. I'd frame it next to Grumpy." },
          { s: 'solar', f: 'sad', t: "He didn't come up the stairs after me. Not really. He just stood in the door." },
          { s: 'cherry', f: 'serious', t: "He stood in the door and *laughed,* Sol. That was the most honest I've seen him since we got back." }
        ], else: [
          { ifFlag: 'epi-h-party-left', then: [
            { s: 'cherry', f: 'neutral', t: "For the record. When you said *let's go*, I almost cried in front of a fruit plate. That's never leaving this room." },
            { s: 'solar', f: 'sad', t: "He yelled *love you* at my back." },
            { s: 'cherry', f: 'sad', t: "He always does when you leave. He did it at the end of every sleepover in middle school, out the car window. *Love you, bitch.* Every time." }
          ], else: [
            { s: 'cherry', f: 'neutral', t: "*No, Jihoon.* Two words. You said it like a teacher. I was so proud I nearly let go of your hand." },
            { s: 'solar', f: 'sad', t: "It didn't feel like anything." },
            { s: 'cherry', f: 'serious', t: "It's not supposed to feel like anything. It's supposed to be *no*. The feeling's for later. It's a whole separate bill." }
          ] }
        ] },
        { s: 'cherry', f: 'neutral', t: "And the preppy freak texted you *I believe you* with a full stop on it. I saw. I was right there. I'm never getting over it. Disgusting. I'm so happy for you I want to bite something." }
      ], else: [
        { ifEpiRoute: 'jihoon', then: [
          { s: 'cherry', f: 'serious', t: "So. You got in his car. I watched you get in his car. I stood at your window like a widow in a painting. Tell me everything. Start with the car." },
          { n: "So she told her. The heater that worked now because he'd paid a man. The fridge, the guy from sophomore year, the hand thing. The third stair. The sentence he didn't finish." },
          { ifFlag: 'epi-h-party-jh-flushed', then: [
            { s: 'solar', f: 'sad', t: "He gave it to me. He put it in my hand and closed my fingers on it and told me to flush it before he changed his mind." },
            { n: "Cherry didn't say anything at all. Behind the sheet mask her face had gone completely still, and she reached across Nana and found Solar's hand and held it, hard, the way she'd held it on the carpet at the séance." },
            { s: 'cherry', f: 'sad', t: "...He gave it to you?" },
            { s: 'solar', f: 'sad', t: "He gave it to me." }
          ], else: [
            { s: 'solar', f: 'sad', t: "I said take me home, and he did. He left the guy in the middle of a sentence. He had it on him the whole drive. He kept it in his jacket. But he took me home." },
            { s: 'cherry', f: 'sad', t: "He walked out. With it. With you." },
            { s: 'cherry', f: 'neutral', t: "That's not nothing. I hate that it's not nothing. I want it to be nothing so I can be mad at him properly." }
          ] },
          { s: 'solar', f: 'sad', t: "And Suk knocked him on the shoulder. On the step. Like after a game." },
          { n: "Cherry was quiet a long time after that one." }
        ], else: [
          { s: 'cherry', f: 'serious', t: "I hit two boys with my bag. I want that remembered. I want it in Heeseung's minutes." },
          { s: 'solar', f: 'happy', t: "Cher. Are you wearing his scarf?" },
          { n: "She was. Under the face mask, under the giant sweatshirt, wound twice round her neck in a bedroom with the heating on, a grey cashmere scarf that was very clearly not hers." },
          { s: 'cherry', f: 'flustered', t: "It's cold." },
          { s: 'solar', f: 'happy', t: "It's twenty-four degrees in here." },
          { s: 'cherry', f: 'flustered', t: "*I'm* cold. I have a condition. Shut up. He didn't even say anything, he just held it out, like a *butler,* and I took it, and now I can't give it back because then I'd have to *talk* to him." },
          { s: 'cherry', f: 'serious', t: "And Park. *Ask Sol about sophomore year.* In front of everyone. I'm going to hit him again. I'm saving it." }
        ] }
      ] },
      { n: "They peeled the masks off and threw them at the bin and missed. Solar turned off the lamp. The dark came in all at once, and then the streetlight came back through the curtain in a long orange stripe across the duvet, and Nana sighed between them, the long sigh of a dog who had been waiting all night for everybody to stop talking." },
      { n: "They didn't stop talking. They just got quieter. That was how it had always gone. The real stuff only ever came out with the lights off, when you couldn't see each other's faces and could pretend the other one might already be asleep." },
      { s: 'cherry', f: 'neutral', t: "Sol." },
      { s: 'solar', f: 'neutral', t: "Mm." },
      { s: 'cherry', f: 'sad', t: "If you could. Go back. Would you?" },
      { n: "She didn't say back where. She didn't have to. She'd seen it, the dorm and the station and the moon too big over the water, she'd stood in that lounge in her boots, and she was lying in the dark now with her face turned towards the ceiling so she wouldn't have to look and see what Solar's face did." },
      { choose: [
        { t: "No.", then: [
          { n: "It came out fast. Maybe too fast. Cherry heard that, she always heard that, and she let it go anyway, the way she let the lip balm go every time she stole it, which was by keeping it." },
          { s: 'cherry', f: 'neutral', t: "Okay. Good. Because I'd come and get you again. You know I would. And I'd be so annoying about it." }
        ] },
        { t: "I don't know.", stat: { courage: 1 }, flag: 'epi-h-cherry-dark-truth', then: [
          { n: "It was the true one. It sat in the dark between them on top of the dog. For a long time Cherry didn't say anything, and Solar thought maybe she'd made her cry, and then Cherry spoke, very steady, in the voice she used when she'd decided something." },
          { s: 'cherry', f: 'sad', t: "Okay. Thank you for not lying to me. You lie to everyone right now. I know you do. You have to. I just didn't want you to do it to me as well." },
          { s: 'cherry', f: 'serious', t: "So I'll just have to be really annoying. So you know there's a reason to stay. I'm going to be *so* annoying, Sol." }
        ] },
        { t: "(Don't answer. Find her hand under the covers.)", stat: { kindness: 1 }, then: [
          { n: "She found it, on the far side of Nana, under the duvet, where Cherry's hand had already been reaching, and they held on over the top of the dog like two people holding a rope across a river." },
          { s: 'cherry', f: 'sad', t: "...That's not an answer." },
          { s: 'solar', f: 'sad', t: "I know." },
          { s: 'cherry', f: 'neutral', t: "Okay. I'll take it. I'm keeping the hand, though. You don't get it back till morning." }
        ] }
      ] },
      { n: "Nana stretched in his sleep, all four silly legs at once, and shoved them both towards opposite edges of the bed, and neither of them let go. Cherry was asleep inside ten minutes, snoring in tiny furious puffs. Solar lay awake a while longer in the stripe of streetlight, with a dog's back rising and falling between them, and listened to both of them breathe." }
    ] },

    { id: 'epi-h-cherry-late-3', title: 'the night before', hint: "Cherry has let herself in with clear nail polish, a lint roller and a plan for tomorrow, and she has re-ironed a shirt your mom already ironed.",
      after: '1/10', until: '1/10', slots: LATE, events: ['epi-h-prom'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-snow' },
      { n: "Cherry had let herself in at half past ten with her key and a tote bag, and by eleven her whole room had been turned into a backstage. The uniform was laid out on the chair like a person who'd fainted: the blazer, the skirt, two pairs of tights in case one laddered, the white shirt Cherry had ironed again even though her mother had already ironed it, and on the blazer's lapel, exactly straight, the VP pin. Cherry had measured it. With a ruler. From the seam." },
      { s: 'cherry', f: 'neutral', t: "Hands. Give me your hands." },
      { s: 'solar', f: 'happy', t: "Cher, they ban polish." },
      { s: 'cherry', f: 'neutral', t: "It's *clear,* Sol. They can't ban clear. Clear is a human right. Hold still." },
      { n: "So she held still, sitting cross-legged on the bed with her hands flat on a magazine, while Cherry knelt on the floor and painted her nails one by one with the tip of her tongue between her teeth, very slowly, with the concentration of a bomb technician. Nana watched from the end of the bed with his chin on his paws and his eyes going from the bottle to Cherry's face and back, deeply suspicious of the smell." },
      { n: "On the desk sat the tote bag, unzipped. Cherry had packed it for tomorrow and then unpacked it to show her and then packed it again. Safety pins. Tissues, a whole packet. Plasters. A hair tie, three hair ties. The spare tights. A granola bar, *because the preppy freak gives you granola bars and you never eat them, I'm cutting out the middleman.* And a tiny glass bottle with a spray top that turned out to be Solar's own perfume, decanted, that Cherry had stolen off her dresser at some point in the last three days without saying." },
      { s: 'solar', f: 'surprised', t: "Is that *mine?*" },
      { s: 'cherry', f: 'neutral', t: "People know you by it. If you're going to stand in front of the whole school, you're going to smell like yourself while you do it. Other hand." },
      { ifFlag: 'epi-h-jw-gate', then: [
        { n: "The green scarf was folded on top of the blazer. Cherry had folded it, then looked at it, then unfolded it and folded it again worse on purpose." },
        { s: 'cherry', f: 'neutral', t: "The preppy freak's scarf goes on last. He's going to fix it at the gate anyway. I've seen him. He does it like he's defusing it." }
      ] },
      { n: "She did the left hand. She did the right hand. She did the left hand again, because the first coat was *patchy, Sol, it looks like you did it in a car.* And the whole time she talked, without stopping, about everything, about Sunghoon's text today, which was a three, about Asahi telling Junkyu the glitter on his sign would get him expelled, about whether you were allowed to bring popcorn to an impeachment, about anything at all, and her voice was perfectly normal, and she never once said the word *tomorrow*." },
      { ifGlitch: 3, then: [
        { n: "Behind her, past the gap in the curtains, the snow was going up. Not a lot of it. A slow drift of flakes lifting past the dark glass from the street towards the roofs, calm and unhurried, as though they had somewhere to be." },
        { n: "Cherry saw it in the mirror. Solar watched her see it. Her brush stopped for exactly one second over Solar's thumbnail. Then she put the brush back in the bottle, stood up, walked to the window, pulled the curtains shut so hard the rings rattled on the rail, came back, knelt down, and took the brush out again." },
        { s: 'cherry', f: 'neutral', t: "Draught." },
        { n: "There wasn't a draught. Neither of them said so." }
      ], else: [
        { n: "Every so often she looked at the window. Just a glance, over Solar's hands, at the gap in the curtains and the snow coming down in it, the normal way, like she was checking it was still doing that." }
      ] },
      { s: 'cherry', f: 'neutral', t: "Blow on them. Don't touch anything for ten minutes. If you touch anything I'll know." },
      { n: "Solar blew on her nails. Cherry sat back on her heels on the floor and looked at the chair with the uniform on it, and the bag, and the pin, all of it laid out in a row like you'd lay out things for somebody going on a long trip, and her face did nothing at all." },
      { s: 'cherry', f: 'sad', t: "I'm sitting where I can see you. Tomorrow. Front of the old table's row. I already told Kyu to move his sign." },
      { s: 'solar', f: 'neutral', t: "I know, Cher." },
      { s: 'cherry', f: 'serious', t: "Just so you know where to look. If you need somewhere to look." },
      { choose: [
        { t: "Stay tonight. Sleep here.", stat: { kindness: 1 }, then: [
          { n: "Cherry looked at her. For one second, before she could fix it, her face was fifteen and scared and so relieved it hurt to see." },
          { s: 'cherry', f: 'neutral', t: "...I mean. It's late. And my nails are wet too. Technically. Medically, I can't do up a coat." },
          { s: 'solar', f: 'happy', t: "You came in a coat." },
          { s: 'cherry', f: 'serious', t: "And I'm not doing it up tonight, Sol, am I, with *wet nails.*" },
          { n: "She slept on the floor beside the bed in Solar's spare blanket, refusing the bed on the grounds that Nana would only steal it, and Nana got down off the bed in the dark at some point in the night and lay down across her instead, and when Solar woke at three, Cherry's arm was over him and her hand was up on the mattress, holding on to the edge of Solar's duvet, like she'd fallen asleep making sure it stayed where it was." }
        ] },
        { t: "(Take the bottle. Paint her nails too. Black.)", stat: { charm: 1 }, then: [
          { s: 'solar', f: 'happy', t: "Give me your hands." },
          { s: 'cherry', f: 'surprised', t: "Yours are *wet.* You'll ruin them." },
          { s: 'solar', f: 'happy', t: "Then you'll do them again. Hands." },
          { n: "Cherry had black in the bag. Of course she did. Solar did her nails with her own still tacky, badly, worse than badly, black all over the edges of Cherry's fingers like she'd been fixing a car, and Cherry watched her do it and laughed so hard she had to put her forehead down on the mattress, and Nana barked, once, at the noise, and they both said *shh* to him in the same voice and laughed harder." },
          { s: 'cherry', f: 'happy', t: "They're going to ban me. I'm going to be the first girl in Hanlim history impeached for nails." },
          { s: 'solar', f: 'happy', t: "Then we'll go down together." },
          { n: "Cherry stopped laughing at that. Not all at once. She looked at her ruined black nails for a while, and then held them out flat in the lamplight next to Solar's clear ones, both of their hands side by side on the magazine, and didn't say anything, and didn't take hers back." }
        ] }
      ] },
      { n: "The lamp went off at midnight. The uniform sat on the chair in the dark, waiting, with the pin on it catching the last of the streetlight, and nobody in the room said *tomorrow*, and before she went, Cherry straightened the pin one more time with her thumb." }
    ] }
  ]);

  /* ── Junkyu ── */
  add('junkyu', 'friend', [
    { id: 'epi-h-junkyu-late-1', title: "can't sleep", hint: "Junkyu is calling at one in the morning, and he's been awake since the séance.",
      after: '12/28', until: '12/30', slots: LATE, events: ['epi-h-seance'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "It rang at 1:04. Not a text. A call, which nobody in the club ever did, which meant something had gone wrong or someone was drunk or it was Junkyu. She picked up in the dark with her face still half in the pillow." },
      { s: 'junkyu', f: 'sad', t: "Sol? Hi. Sorry. Hi. Were you asleep. You were asleep. I'm so sorry. I'll go." },
      { s: 'solar', f: 'neutral', t: "Kyu. Don't go. What's wrong?" },
      { s: 'junkyu', f: 'sad', t: "Nothing! Nothing's wrong. I just can't sleep. I haven't slept since the thing. The board. I keep shutting my eyes and the candles go green. It's the backs of my eyelids. My eyelids are haunted now." },
      { n: "He was whispering. His mom slept across the hall from him, and she was a knocker, and Junkyu had never once in his life been quiet on purpose without it costing him something. She could hear him moving around under something, a blanket over his head probably, the same way he'd sat at the séance with it over his head like a hood." },
      // Nov 11 2026 (Kat): searchers know
      { s: 'junkyu', f: 'sad', t: "It said *welcome home,* Sol. Asahi said that's what it means. And then it said *Iwatodai.* Like that's home. Like it was saying it to *you.* Like it knew we'd all been there." },
      { s: 'junkyu', f: 'serious', t: "I don't want it to come and get you again. That's all. That's the whole thing. I'm fine." },
      { n: "He was not fine. He started humming. Junkyu hummed when he forgot why he'd called, and he sang when he was nervous, and right now, at one in the morning under a blanket, he was so nervous he started singing to himself without noticing, soft, tuneless, made-up words about whatever was in front of him." },
      { s: 'junkyu', f: 'sad', t: "*My phone is at four percent, four percent, and my charger is downstairs, and downstairs is dark...*" },
      { s: 'solar', f: 'happy', t: "Kyu. You're singing." },
      { s: 'junkyu', f: 'flustered', t: "I'm not! I'm humming with words." },
      { n: "Nana, at the foot of the bed, chose this moment to start snoring. Not the polite kind. The full Samoyed snore, deep and rattling and wet at the end, like a very old car being started on a cold morning, every breath with a little whistle on the way back in." },
      { s: 'junkyu', f: 'surprised', t: "What is that. Sol. Is there a bear in your room?" },
      { s: 'solar', f: 'happy', t: "It's Nana." },
      { s: 'junkyu', f: 'happy', t: "He sounds like my dad's car. Hold the phone to him. Please. Please, Sol, hold the phone to him." },
      { n: "She held the phone to him. She crawled down the bed and held it next to Nana's big white face in the dark while he snored into it, oblivious, his lips flapping a little on each breath, and on the other end Junkyu went completely quiet, listening, like it was the radio." },
      { s: 'junkyu', f: 'happy', t: "...That's so nice. That's the nicest sound I've ever heard." },
      { choose: [
        { t: "Kazuha did it, Kyu. It was just Kazuha.", stat: { charm: 1 }, then: [
          { s: 'junkyu', f: 'neutral', t: "...You think?" },
          { s: 'solar', f: 'happy', t: "She knew where all the letters were. It's her board." },
          { n: "He wanted it so badly that she could hear him take it, the whole lie, in both hands, and hold it to his chest like the snack bag in her doorway. It was everybody's lie. They'd all agreed on it, round the candles, like a vote. It was a kind one. She told herself that." },
          { s: 'junkyu', f: 'happy', t: "Okay. Okay. Kazuha. I'm gonna say thank you to her. For being scary on purpose." }
        ] },
        { t: "I don't know what it was. But I'm not going anywhere tonight.", stat: { kindness: 1 }, flag: 'epi-h-trust-kyu', then: [
          { s: 'junkyu', f: 'sad', t: "...You don't know?" },
          { s: 'solar', f: 'neutral', t: "No. I'm in my bed. With a very loud dog. You can hear him. That's where I am." },
          { n: "He was quiet. Then he said *okay* very small, and she heard him take that instead, which was smaller and heavier and true, and put it somewhere he could keep it." },
          { s: 'junkyu', f: 'neutral', t: "Okay. Then I'll just listen to where you are." },
          { n: "In the morning there was a message in the old chat from him, sent at 4:12, to everyone: *if anybody says anything bad about solar this week tell me. i won't do anything. i'll just know.* Asahi had replied *ok*. So had Hyunsuk. That was the part she kept looking at." }
        ] },
        { t: "(Sing with him. Badly.)", stat: { courage: 1 }, then: [
          { s: 'solar', f: 'happy', t: "*And Nana is snoring, he's snoring so loud, and Kyu is a baby who's scared of a board...*" },
          { s: 'junkyu', f: 'surprised', t: "Hey!!" },
          { s: 'junkyu', f: 'happy', t: "*And Solar is mean, she's so mean to me, at one in the morning, in the dark...*" },
          { n: "They did four verses. None of them rhymed. Somewhere in the third his mom knocked on his door, once, and he went silent, and she heard him hold his breath under the blanket, and then he started the fourth verse in a whisper so small it was mostly air." }
        ] }
      ] },
      { n: "She stayed on. She lay back down with the phone on the pillow beside her and Nana's snoring filling up the room, and Junkyu talked for a while about nothing, his flashcards, Asahi's hood, the snack bag he'd carried into her room like a baby, and his voice got slower, and the words got further apart." },
      { n: "Then he was humming again, without words this time, almost asleep. And it took her a second to place it, and then her whole chest went still, because it was the music from the dorm. The tune that used to be on in the lounge every single morning when she came down the stairs, the leather couch and the dog asleep on the rug and somebody already arguing about breakfast. He'd been there. He'd heard it too. He didn't know he was humming it." },
      { n: "She didn't say anything. She lay there and let him hum it to her down the phone, half asleep, a few bars and then a few more, until it trailed off in the middle of a line and turned into breathing, slow and even, under a blanket, across town." },
      { n: "She didn't hang up. She lay in the dark with the phone on the pillow and listened to Junkyu sleep and Nana snore, one in each ear, and at some point, without deciding to, she did too." }
    ] }
  ]);
})();
