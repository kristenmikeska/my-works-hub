/* The HOAX epilogue, week 2 (12/29-1/3) plus eight routines across the act. Batch 5, Writer B (2026-10-28).
   Merges into FEMC_EPI_WORLDS.hoax (events, routines); never overwrites.

   Events
     epi-h-party          12/29 Fri  evening, consumes   the winter-break party (a swim-team third-year's house); by route
     epi-h-livestream     12/31 Sun  evening, consumes   Eunchae's New Year's Eve stream: the gym-door clip, frame 214, the Yunjin cut
     epi-h-notes          12/31      late                midnight; sticky notes on her mirror in her own hand; Jungwon knows
     epi-h-new-year       1/1 Mon    early, consumes     tteokguk, Mom softer ("Was it nice, at least?"), the study plan by route
     epi-h-motion         1/2 Tue    after, consumes     hanlim_accountability posts the motion; RETREAT FACTS explodes; Jihoon comments
     epi-h-alone          1/2        late                fight 1 (epi-hoax-1): the council room at midnight, half Tartarus
     epi-h-study-jw       1/3 Wed    evening, consumes   route jungwon: the town library, chapter six, the kimbap, the blister
     epi-h-study-jh       1/3        evening, consumes   route jihoon: "studying" at his house; the drawer; a crack
     epi-h-study-council  1/3        evening, consumes   route council: study + the first war council at Yeobo's; the ledger
   Routines (once each)
     epi-h-rt-nana            early  12/22-12/27  Nana's morning; she almost calls him by another dog's name (ifYear xmas)
     epi-h-rt-doomscroll      late   12/22-12/28  the forum's theories (rehab, eloping, "a different dimension lol")
     epi-h-rt-mom-breakfast   early  12/26-12/30  Mom's breakfast interrogation about the temple (strain)
     epi-h-rt-calculus        after  1/3-1/7      calculus alone; the pencil case that isn't there
     epi-h-rt-walk            early  1/9-1/11     the walk to school past Jungwon's street; Maeumi at the window
     epi-h-rt-jw-call         late   12/26-1/5    route jungwon: derivatives in a whisper; "He would've made fun of both of us."
     epi-h-rt-jh-icecream     late   12/26-1/7    route jihoon: "Come Outside."; melon bars on the step in the snow
     epi-h-rt-council-facts   early  12/26-1/7    route council: Heeseung's 8 a.m. retreat-facts drill (strain)

   Flags set: epi-h-party (always), epi-h-jihoon-chose (jihoon route), epi-h-notes, epi-h-motion, epi-h-alone.
     Local: epi-h-party-refused / -flushed / -left (jungwon route choice), epi-h-party-jh-flushed / -jh-walked (jihoon route),
     epi-h-party-scuffle (council route), epi-h-notes-kept (she left the notes up / kept them; jungwon route or call).
   Flags read: the locked route via ifEpiRoute and the route events' flag gate (epi-route-jungwon / -jihoon / -council).
   Events read (routine gates): epi-h-home, epi-h-part-four, epi-h-christmas, epi-h-new-year, epi-h-makeup.
   ifYear read: { xmas: 'jungwon' } / { xmas: 'jihoon' } (Nana routine; the tin count in epi-h-motion).
   Glitches: epi-h-g-party, -frame, -yunjin, -notes, -alone (once each); { stage: 3 } in epi-h-alone; { strain: 1 } after cover
     lies (new-year, mom-breakfast, council-facts); { near: true } in epi-h-notes and epi-h-study-jw.

   Inventions for Kat to confirm
   - The party's host is an unnamed third-year on the swim team (parents in Jeju "until the fourth"); "the guy from sophomore
     year" is there, unnamed, never described past the back of his head.
   - The gym-door clip was sent to Eunchae by an anonymous girl who'd gone back for her gym bag at eleven at night; in it Solar
     is visibly in a different uniform with an armband (chat: "temple uniform??"). RETREAT FACTS addendum: "the bus dropped us
     at school" (Heeseung invents "the temple bus").
   - SEED for story-end.js (epi-h-witness): the tin question first appears as a Capitalized-Random-Words comment in Eunchae's
     stream chat from the alt handle **h_almighty** ("Did They Take The Bake Sale Money To The Temple Too"); on the jihoon route
     she sees him typing and angling his phone away. The motion's post cites "as asked on Hanlim Unfiltered". Jihoon's own
     forum comments under the motion are under **jihoney**.
   - The motion text: impeach "the 2024 Student Council" (president, vice president, officers who went), dereliction + the tin,
     a petition for a hearing "under the student constitution (page 41 of the handbook)"; 142 signatures by dinner on 1/2.
     Nobody is accused but Heeseung (by Jake, as a joke); Heeseung is IN the motion.
   - The mark after fight 1: a blister across her right palm where a naginata's haft sits; Jungwon bandages it on 1/3.
   - The notes on the mirror: walk Koromaru (7am), heal BEFORE the stairs, return Mitsuru's book (the red one), curfew 11,
     Junpei owes me 500 yen, tell Fuuka thank you, and one that reads "H — roof, after. don't be late (he will be)".
   - Jungwon snuck out on NYE (jungwon route) and is in her room for the midnight minute; he leaves by 12:20, front door.
     On the other routes she is home by 11:30 (Mom's one condition for New Year's Eve).
   - Jungwon's line in the jw-call routine, "He would've made fun of both of us." (no name; the name is 1/6, writer C).
   - The one allowed vague line about the unfinished Monday is used here, in epi-h-alone (the council room).
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});

  (R.events ||= []).push(

    // 12/29 — the winter-break party ----------------------------------------------------------------------------------------
    { id: 'epi-h-party', date: '12/29', slot: 'evening', consumes: true, title: 'the party', place: 'Hanlim · The Party', time: 'Evening', scene: [
      { music: 'epi-h-party' },
      { flag: 'epi-h-party' },
      { n: "The house belonged to some third-year on the swim team whose parents were in Jeju until the fourth, and by nine o'clock it belonged to everyone else, shoes heaped in the entryway like a landslide, a speaker on the kitchen island doing something violent to the bass, green bottles lined up along the windowsill catching the streetlight, and the rest of the island buried under convenience-store chips and somebody's mother's good fruit plate, which nobody had touched." },
      { n: "She hadn't been to one of these since sophomore year. She didn't finish that sentence, even in her own head." },
      { n: "People noticed her. That was the first thing. A girl she half knew from chemistry grabbed her friend's sleeve by the shoe pile and whispered *temple*, and somebody on the stairs said *retreat* in the voice you'd use for *witness protection*, and a boy holding two cans at once looked at her like she'd come back from the dead, which, to be fair to him, was closer than he knew." },
      { glitch: 'epi-h-g-party' },
      { n: "And under the bass, for two seconds, something else. A piano, a clean bright line of it, and a voice she knew, the music that used to be playing in a lounge with a leather couch and a dog asleep on the rug every single morning she came down the stairs." },
      { n: "Then it was gone, and the speaker on the island was playing the song it had been playing all along, and nobody had looked up. Not one person. Somebody laughed in the kitchen at something that wasn't her." },
      { n: "Oh God." },

      { ifEpiRoute: 'jungwon', then: [
        { phone: [
          { from: 'jungwon', t: "are you there yet." },
          { from: 'solar', t: "yes!! cher is holding my hand like im 5" },
          { from: 'jungwon', t: "good. please let her." },
          { from: 'jungwon', t: "i'm sorry i can't come. my mom is watching a drama in the living room with the door open. i think it's a strategy." },
          { from: 'solar', t: "a tactical drama" },
          { from: 'jungwon', t: "text me when you leave. and if anything happens. i'm not trying to be controlling. i just can't be there." }
        ], contact: 'Won' },
        { s: 'cherry', f: 'surprised', t: "'I'm not trying to be controlling.' Oh my God. He put a period after controlling. Is he being held hostage? Blink twice, Yang." },
        { s: 'solar', t: "He's kept home, Cher. He's basically a princess in a tower." },
        { s: 'cherry', f: 'serious', t: "A princess in a tower who made me pinky swear in the Yeobo's bathroom, so you know what that means. You're not going within ten feet of the kitchen. I will physically sit on you." },
        { n: "The kitchen was where Jihoon was. Of course it was. He was up on the counter in a black jacket and the beanie Cherry had once chosen for him as a joke and he'd kept as a personality, holding court over a ring of people who laughed a half second before he finished anything, and beside him, leaning on the fridge, was the guy from sophomore year." },
        { n: "She hadn't seen him in two years. She recognized him from the back of his head, which was its own kind of answer." },
        { n: "Jihoon saw her across the room and lit up like a slot machine. He slid off the counter, and Cherry stepped directly into his path like a bouncer with a grudge." },
        { s: 'jihoon', f: 'happy', t: "Sol. The Prodigal Monk Returns. Did They Shave Your Head? Turn Around, Let Me See." },
        { s: 'cherry', f: 'serious', t: "Ten feet, Park." },
        { s: 'jihoon', f: 'neutral', t: "Cherry, Light Of My Life, Thorn In My Side, I Am Simply Greeting My Oldest Friend. Where's Your Little President, Sol? Does He Have A Bedtime?" },
        { s: 'solar', t: "He has a curfew." },
        { s: 'jihoon', f: 'happy', t: "Hilarious. Incredible. Write That On His Tombstone." },
        { n: "Then he tapped the inside of his jacket, twice, lightly, the way you'd check for your keys, and a corner of a small plastic bag showed above the pocket's edge and went back down. The guy from sophomore year was watching them over the rim of his cup." },
        { s: 'jihoon', f: 'neutral', t: "He Says It's The Good Stuff. Like Old Times. I'm Only Telling You Because I'm Generous." },
        { n: "Cherry's grip on her hand went white at the knuckles. The speaker on the island thumped. Somewhere very far behind her ribs something old and patient lifted its head, and she knew it by name, and it was still there." },
        { choose: [
          { t: "No, Jihoon.", flag: 'epi-h-party-refused', stat: { courage: 1 }, then: [
            { s: 'jihoon', f: 'neutral', t: "Suit Yourself." },
            { s: 'solar', t: "You always say that." },
            { s: 'jihoon', f: 'happy', t: "Because It Always Fits." },
            { n: "He went back to the counter. She watched him go, the back of the black jacket, the beanie, the shoulders that had carried her home on a piggyback in the seventh grade when she twisted her ankle at the river, and she didn't follow him, and that was the whole fight. It didn't feel like winning anything." }
          ] },
          { t: "(Hold out your hand. Take it. Don't open it.)", flag: 'epi-h-party-flushed', stat: { courage: 1 }, then: [
            { n: "He looked at her open palm like she'd done a magic trick. Then, because he was Park Jihoon and he could never stand not knowing how a trick ended, he put the bag in it." },
            { n: "She closed her fist, turned around and walked straight up the stairs past the red cups into the bathroom at the end of the hall, and flushed it, and stood there with her hand on the lever until the tank stopped running." },
            { s: 'jihoon', f: 'surprised', t: "Did You Just— Sol. That Was Not Yours To Flush." },
            { s: 'solar', t: "Now it's nobody's." },
            { n: "He was leaning in the bathroom doorway with his mouth open. Then he laughed, one ugly bark of it, and pressed the heel of his hand against his eye like it hurt." },
            { s: 'jihoon', f: 'neutral', t: "You're A Menace. You Know That? A Grave Sin. I'm Telling Everyone." },
            { n: "He didn't tell anyone. He went back downstairs and talked to the guy by the fridge with his back to her for the rest of the night, and she knew what that meant too." }
          ] },
          { t: "(Find Cherry's other hand. Leave.)", flag: 'epi-h-party-left', stat: { kindness: 1 }, then: [
            { s: 'solar', t: "Cher. Let's go." },
            { s: 'cherry', f: 'happy', t: "Oh, thank God, I was about to commit a crime in front of a fruit plate." },
            { n: "They went. Jihoon called after them over the music, \"Bye, Bitch! Love You! Tell The Princess I Said Hi!\", and half the room laughed, and she didn't turn around, because if she turned around she'd see his face, and his face was the whole problem." }
          ] }
        ] },
        { place: 'Hanlim · The Party · Outside', time: 'Evening', soft: true },
        { n: "Outside it was snowing in the slow, fat way that made streetlights look like they were being lowered on strings. Cherry lit a cigarette and held it away from Solar's face out of courtesy, and they stood on the curb in a fog of cold and smoke and somebody else's bass." },
        { n: "She typed *jihoon was there* and deleted it. Typed *im fine* and deleted that too, because she knew exactly how he'd read it. Then she typed the truth and sent it before she could think." },
        { phone: [
          { from: 'solar', t: "leaving now. jihoon was there. im ok. i promise" },
          { from: 'jungwon', t: "okay. i believe you." },
          { from: 'jungwon', t: "thank you for telling me." },
          { from: 'jungwon', t: "please text me when you're inside your house. i'll be awake." }
        ], contact: 'Won' },
        { s: 'cherry', f: 'neutral', t: "He texts like a hostage negotiator. I love that for you. Genuinely. Disgusting." },
        { bond: { cherry: 1 } },
        { n: "She put the phone back in her coat pocket. Her fingers brushed the can, cold and unopened, the one she carried everywhere and never opened. She didn't think about the two seconds of music. She thought about it the whole way home." }
      ], else: [

        { ifEpiRoute: 'jihoon', then: [
          { flag: 'epi-h-jihoon-chose' },
          { n: "Jihoon had picked her up at eight-thirty without asking whether she wanted to go, honking twice outside her house until her mom came to the window and waved at him like he was the paperboy in an old movie, and he'd waved back with his whole arm, the traitor." },
          { s: 'jihoon', f: 'happy', t: "Your Chariot, Ungrateful Rug. Get In. The Heat Works Now. I Paid A Man." },
          { n: "Inside, he was in his element and she wasn't, and he knew it and liked it. He did a lap of the kitchen like a mayor, Hyunsuk trailing after him with his hands in his pockets and the face of someone who'd already decided to be disappointed and was just waiting for the paperwork. Then the guy from sophomore year by the fridge lifted his chin at Jihoon, and Jihoon lifted his back." },
          { s: 'hyunsuk', f: 'serious', t: "You came with him? Man. Sol." },
          { s: 'solar', t: "I know." },
          { s: 'hyunsuk', f: 'sad', t: "Do you, though." },
          { n: "She didn't answer that. She sat on the third stair with her coat still on and watched Jihoon talk to the guy by the fridge, the little hand thing they used to do, the laugh that came too early. When he came back across the room his hand was already in his jacket." },
          { s: 'jihoon', f: 'neutral', t: "Sol. You Want—" },
          { n: "He stopped." },
          { n: "She watched him stop. He was looking at her, at the snow melting into the shoulders of her coat, at whatever was on her face, and for once in his whole life Park Jihoon didn't finish a sentence just to see where it went. His hand stayed in his pocket. The music thumped on. Behind him Hyunsuk had gone very still with a cup halfway to his mouth." },
          { s: 'jihoon', f: 'serious', t: "...Forget It. Forget I Said Anything. You Look Like Shit In This Lighting." },
          { choose: [
            { t: "(Hold out your hand.)", flag: 'epi-h-party-jh-flushed', stat: { courage: 1 }, then: [
              { n: "He looked at her palm for a long time. Long enough that she thought he'd laugh and slap it and call her dramatic. Then he took the bag out of his jacket and put it in her hand and closed her fingers over it with his own, roughly, like he was getting rid of something hot." },
              { s: 'jihoon', f: 'neutral', t: "Flush It Before I Change My Mind. Quickly. I'm Very Changeable. It's Part Of My Charm." },
              { n: "She went up the stairs two at a time and flushed it in the bathroom at the end of the hall, and when she turned around he was in the doorway with his arms crossed, watching the water like it had personally insulted him." },
              { s: 'jihoon', f: 'sad', t: "That Was A Grave Sin. Against Me, Specifically. I Want That On Record." },
              { s: 'solar', t: "Noted." }
            ] },
            { t: "Take me home, Jihoon.", flag: 'epi-h-party-jh-walked', stat: { kindness: 1 }, then: [
              { n: "He turned around and left the guy from sophomore year mid-sentence, a hand still raised in the middle of a story, and walked her out through the shoe landslide with his palm flat on the back of her coat, steering, the way he'd steered her through every crowd since they were four and she was the smallest person at every party." },
              { n: "Behind them somebody said *Jihoon?* and he didn't look back." }
            ] }
          ] },
          { place: 'Hanlim · The Party · Outside', time: 'Evening', soft: true },
          { n: "Hyunsuk followed them out onto the step without his coat and stood there in the snow with his arms wrapped around himself, looking at Jihoon like he was a word in a language he used to speak." },
          { s: 'hyunsuk', f: 'surprised', t: "Dude." },
          { s: 'jihoon', f: 'serious', t: "Don't." },
          { s: 'hyunsuk', f: 'neutral', t: "I didn't say anything, man." },
          { s: 'jihoon', f: 'neutral', t: "You Said It With Your Face. Your Face Is Very Loud, Suk. Go Inside Before You Die Of Exposure, I'm Not Carrying You." },
          { n: "In the car the heater roared and the windshield fogged and he drove with one hand at the top of the wheel, talking the whole way about nothing, the party, the fruit plate, the swim-team guy's tragic haircut, and he didn't look at her once." },
          { s: 'jihoon', f: 'neutral', t: "Do Not Make This A Thing. If You Make This A Thing I Will Do Twice As Much Tomorrow To Make A Point. I'm Petty Like That." },
          { s: 'solar', t: "I'm not making it a thing." },
          { s: 'jihoon', f: 'sad', t: "Good. Because You'd Only Been Back A Week, And I Just—" },
          { n: "The wipers went across once. Twice." },
          { s: 'jihoon', f: 'happy', t: "—Wanted To See If You'd Gotten Uglier. You Have. Congratulations." },
          { bond: { jihoon: 1 } },
          { n: "She looked out the window so he wouldn't have to see her face, and he turned the radio up so she wouldn't have to hear his, and they drove the rest of the way like that, both of them pretending, the snow coming down on the hood like something being decided very slowly." }
        ], else: [

          { n: "The council's plan was Heeseung's, which meant it had a laminated agenda, a stated objective, and a name, which was Jake's." },
          { n: "The objective: kill the rumour. Part 4 of WHERE IS THE COUNCIL had grown a part 5 overnight, and part 5's top comment, eighty-nine upvotes and climbing, said the retreat had been *rehab*, all eight of them, *a group rate*, and the only thing Heeseung hated more than a lie was a lie that wasn't his." },
          { s: 'jake', f: 'happy', t: "Operation Normal Teenagers. We go in, we're normal, we're visible, we're hydrated. Nobody does rehab and then comes to a party with a crate of bottled water." },
          { s: 'jay', f: 'neutral', t: "Bro, that's exactly what people who did rehab would do." },
          { s: 'jake', f: 'surprised', t: "...Okay, nobody say that inside." },
          { n: "Jungwon was not there, because Jungwon had a curfew and a mother. Jungwon was on speakerphone in Heeseung's breast pocket, a small square glow over his heart, contributing." },
          { s: 'jungwon', f: 'neutral', t: "Heeseung. Turn me around. I'm facing your shirt." },
          { s: 'heeseung', f: 'serious', t: "You're facing the objective." },
          { n: "So they went in. Sunoo carried the crate of water like a ring bearer and gave a bottle to everyone who looked at him, which was everyone. Jay knew every single person in the house and said *bro* to all of them in a slightly different key. Niki vanished into the crowd in under eight seconds and was later seen on a bannister. Sunghoon, who hadn't looked at another girl since Cherry, spread the word exclusively to boys, using exactly the same smile, to deeply confusing effect." },
          { n: "Then the kitchen. Then Jihoon, on the counter, the guy from sophomore year at his shoulder, a corner of a bag showing at the lip of his jacket and going back down when he saw who'd come in." },
          { s: 'jihoon', f: 'happy', t: "Oh, Look. The Temple Kids. Did You Bring Incense? Is This A Field Trip?" },
          { s: 'heeseung', f: 'neutral', t: "Water?" },
          { s: 'jihoon', f: 'happy', t: "Everyone Keeps Saying You Lot Went To Rehab. It's Insulting. To Rehab. You'd Be There Two Days Before You Ran For President Of It." },
          { n: "Half the kitchen laughed. Solar almost did, which was the worst part, because he was funny, he was always funny, it was the thing about him that made everything else so much harder to put down." },
          { s: 'jihoon', f: 'neutral', t: "Ask Sol About Sophomore Year, Though. She Loves That Story. Don't You, Sol?" },
          { n: "The kitchen went quiet in a ring around them, the way a pond does." },
          { n: "Jay put the water bottle down on the counter very gently and shoved Jihoon off it with one hand, flat in the chest, not hard, just enough that Jihoon's feet hit the floor and he had to take a step. Hyunsuk, from nowhere, shoved Jay. Jake got between them with both arms out like a crossing guard saying *guys, guys, guys*. Sunghoon caught Jihoon's elbow. Cherry hit Jihoon in the arm with her bag, then hit Jay with it too for good measure, then looked around for anyone else who deserved it." },
          { s: 'jungwon', f: 'serious', t: "Heeseung. What is that noise. Is someone hitting someone." },
          { s: 'heeseung', f: 'flustered', t: "Define hitting." },
          { choose: [
            { t: "(Get between them.)", stat: { courage: 1 }, then: [
              { n: "She was the smallest person in the kitchen by a head, and she planted herself in the exact middle of it anyway, one hand flat on Jay's chest and the other on Jihoon's." },
              { s: 'solar', t: "Park Jihoon." },
              { n: "The full name did what it always did. He stopped. He looked down at her hand on his jacket, right over the pocket, and something went across his face too fast to read, and then he put both his hands up like a man in a film." },
              { s: 'jihoon', f: 'neutral', t: "Fine. Fine. Go Be Hydrated, Temple Girl." }
            ] },
            { t: "(Take the phone out of Heeseung's pocket.)", stat: { kindness: 1 }, then: [
              { n: "She plucked the phone out of Heeseung's pocket like a pen and walked straight out of the kitchen with it held to her ear." },
              { s: 'jungwon', f: 'neutral', t: "Sol." },
              { s: 'solar', t: "Hi." },
              { s: 'jungwon', f: 'neutral', t: "Walk outside. Tell me what the snow looks like." },
              { n: "She did. By the time she'd described the snow, badly, twice, the shouting behind her had stopped, which she suspected had been the point." }
            ] }
          ] },
          { flag: 'epi-h-party-scuffle' },
          { place: 'Hanlim · The Party · Outside', time: 'Evening', soft: true },
          { n: "Afterwards they stood in a row on the curb, the whole council and her, steaming in the cold like horses. Jay's knuckles were fine. Jake's dignity was not. Sunoo still had four bottles of water and gave one to a stranger walking a dog." },
          { s: 'niki', f: 'happy', t: "I posted Sunoo handing out water. Top comment already says 'rehab kids dont hand out evian.' We won." },
          { s: 'heeseung', f: 'neutral', t: "Objective... partially achieved." },
          { s: 'sunghoon', f: 'neutral', t: "Sunghoon was magnificent in there, for the record. Nobody said it, so Sunghoon is saying it." },
          { s: 'jungwon', f: 'neutral', t: "Is everyone alright. Sol. Are you alright." },
          { s: 'solar', t: "I'm alright, Won." },
          { bond: { council: 1 } },
          { n: "Through the front window she could see the kitchen, Jihoon back up on the counter, laughing at something, the guy by the fridge, the bag still in the jacket. Nobody had won anything. They'd just been loud about it." }
        ] }
      ] }
    ] },

    // 12/31 — New Year's Eve: Hanlim Unfiltered ----------------------------------------------------------------------------
    { id: 'epi-h-livestream', date: '12/31', slot: 'evening', consumes: true, title: 'unfiltered', place: 'Hanlim · Home · Her Room', time: 'Evening', scene: [
      { music: 'epi-h-newyear' },
      { ifEpiRoute: 'jungwon', then: [
        { n: "New Year's Eve, and her boyfriend was on her pillow. On FaceTime, propped against her stuffed rabbit, lit from one side by his desk lamp, a textbook open under his chin, because his parents had allowed him New Year's Eve in the sense that they hadn't technically forbidden it." },
        { s: 'jungwon', f: 'neutral', t: "Are you watching it." },
        { s: 'solar', t: "Obviously I'm watching it, the whole school's watching it. Are YOU watching it?" },
        { s: 'jungwon', f: 'neutral', t: "I have it open in another tab. For research." }
      ], else: [
        { ifEpiRoute: 'jihoon', then: [
          { place: "Hanlim · Jihoon's House", time: 'Evening', soft: true },
          { n: "New Year's Eve at Jihoon's was the old club in its natural habitat: the big couch, the bad lamp, Junkyu on the floor with a bowl of shrimp chips in his lap like a cat, Asahi in the armchair in a hoodie with the hood up indoors, Jaehyuk with an actual flashcard ring he was pretending not to be using, Cherry's boots on the coffee table, Hyunsuk on the far end of the couch as far from Cherry as the couch allowed. Jihoon in the middle of all of it with the remote, like a king with a scepter, casting the stream to the TV." },
          { s: 'jihoon', f: 'happy', t: "Silence, Peasants. Journalism Is Happening." }
        ], else: [
          { place: "Hanlim · Yeobo's", time: 'Evening', soft: true },
          { n: "Sunoo's grandmother had closed Yeobo's at six and then let eight teenagers back in at seven, because Sunoo had asked, and because, she said, somebody had to watch them. She was watching a different show on her tablet behind the counter with the volume all the way up." },
          { n: "They had the stream on Heeseung's laptop on the big table, all seven of them and her crowded around it like a campfire. Jungwon was there for one hour, by special parental arrangement, and had already checked his watch four times." },
          { s: 'heeseung', f: 'serious', t: "Nobody comment. I mean it. Niki." },
          { s: 'niki', f: 'neutral', t: "I literally haven't done anything." },
          { s: 'heeseung', f: 'serious', t: "Yet." }
        ] }
      ] },

      { n: "Hanlim Unfiltered went live at nine sharp. Eunchae filmed from her bedroom with fairy lights behind her and a ring light that turned her into a small earnest moon, and she had a slide deck, because of course she did." },
      { s: 'eunchae', t: "Hiii Hanlim, happy almost new year, it's your girl, it's Hanlim Unfiltered, and tonight we are doing journalism." },
      { s: 'eunchae', t: "WHERE WAS THE COUNCIL. The evidence. Part one of one, because I'm sleepy and my mom says I have to go to bed at twelve-ten." },
      { s: 'stream', t: "hanlim_gremlin: SHE HAS A SLIDE DECK" },
      { s: 'stream', t: "sophomoreslay: journalism queen" },
      { n: "The evidence was a clip. Eunchae explained, with real ceremony, that it had been sent to her by a source who wished to remain anonymous and also wished it known that she'd only been at school at eleven at night on the twentieth because she'd forgotten her gym bag, which, Eunchae said, was valid." },
      { n: "The clip was shot through the narrow window in the gym door. Dark. String lights. Balloons nobody had finished hanging. The camera shaking because the girl holding it was shaking, and then a shape tearing across the gym floor at a dead run that was unmistakably, even blurred, even at that resolution, Cherry Kim." },
      { n: "And then the rest of them. All of them, the whole council and the crew and Jihoon, coming out of the far end of the gym where there was no door at all, and in the middle of them a small brunette in a uniform that was very clearly not Hanlim's, with a band on her arm." },
      { s: 'stream', t: "anon_2213: why is the VP in a DIFFERENT UNIFORM" },
      { s: 'stream', t: "hanlim_gremlin: temple uniform??" },
      { s: 'stream', t: "bbangbbang: is that an ARMBAND" },
      { s: 'stream', t: "sophomoreslay: is the secretary CRYING" },
      { s: 'eunchae', t: "Okay, I'm gonna go frame by frame, because I'm a professional." },
      { n: "She did. Clicked through it one frame at a time with her tongue between her teeth, the gym jerking forward in little stamps. Frame 211. 212. 213." },
      { glitch: 'epi-h-g-frame' },
      { n: "Frame 214 was green." },
      { n: "Not a tint, not a filter. The whole gym, for one frame, gone the color of a swimming pool at night, the color of a sky she'd spent a year under, and the scoreboard over the bleachers, which had been dark in every other frame, reading 12:00 in numbers that weren't the scoreboard's font." },
      { n: "Then 215, and it was a dark gym again with Cherry running across it." },
      { s: 'stream', t: "anon_2213: frame 214??" },
      { s: 'stream', t: "bbangbbang: GO BACK GO BACK" },
      { s: 'stream', t: "hanlim_gremlin: ghost council" },
      { s: 'stream', t: "sophomoreslay: thats just compression" },
      { s: 'stream', t: "anon_2213: compression doesnt DO that" },
      { s: 'eunchae', t: "Okay, chat. Okay. It's compression. Probably. ...I'm putting it in the thumbnail." },
      { glitch: 'epi-h-g-yunjin' },
      { n: "And then the stream wasn't Eunchae's." },
      { n: "For one second it was a girl in a yellow puffer jacket sitting on the edge of a bed in a room Solar had never seen, a radiator under a window, somebody else's weather pressed white against the glass. She was looking straight out of the screen. Not at the camera. At Solar, the way you look at someone across a crowded platform when you've known them your whole life and they haven't noticed you yet, her mouth just starting to open around something that might have been a name." },
      { n: "Then it was Eunchae again, mid-sentence, talking about the scoreboard. She hadn't noticed. The chat hadn't noticed. The chat was talking about the armband." },
      { s: 'stream', t: "h_almighty: Did They Take The Bake Sale Money To The Temple Too" },
      { s: 'stream', t: "hanlim_gremlin: LMAOOO" },
      { s: 'stream', t: "bbangbbang: WHERE IS THE TIN" },
      { s: 'stream', t: "sophomoreslay: free the tin" },
      { s: 'eunchae', t: "Oooh. Okay. Chat's asking about the tin. Noted. I'll look into the tin. Happy new year, Hanlim, stay unfiltered, byeee." },

      { ifEpiRoute: 'jungwon', then: [
        { n: "On her pillow, Jungwon had stopped pretending to study. He was looking at her through the phone, not at the stream." },
        { s: 'jungwon', f: 'neutral', t: "You looked nice in it. The uniform." },
        { s: 'solar', t: "Won. I'm on the forum in a costume." },
        { s: 'jungwon', f: 'serious', t: "What did you see. Just now. Your face did something." },
        { s: 'solar', t: "Nothing. Compression." },
        { n: "He didn't believe her. She watched him not believe her, his eyes on hers through two screens and four streets, and then decide not to say so, which was somehow worse and also the kindest thing anyone had done for her all week." },
        { s: 'jungwon', f: 'neutral', t: "Okay." },
        { n: "A knock somewhere on his side, two knuckles on a door. His eyes went to it and came back." },
        { s: 'jungwon', f: 'sad', t: "I have to go. Happy new year, Sol. In case I don't—" },
        { s: 'solar', t: "You'll call at midnight." },
        { s: 'jungwon', f: 'neutral', t: "...I'll try." },
        { bond: { jungwon: 1 } }
      ], else: [
        { ifEpiRoute: 'jihoon', then: [
          { n: "Jihoon had been typing on his phone with both thumbs through the whole tin part, grinning at the screen like it had told him a secret, and when she looked over he angled it away from her without even looking up, smooth as anything." },
          { s: 'solar', t: "What are you doing." },
          { s: 'jihoon', f: 'happy', t: "Texting My Many Admirers. Mind Your Business." },
          { s: 'junkyu', f: 'happy', t: "Sol, you looked so pretty in the clip!!! Even blurry!!!" },
          { s: 'asahi', f: 'neutral', t: "The temple. Sure. Temples famously have armbands." },
          { s: 'cherry', f: 'serious', t: "Asahi, I will put this boot in your mouth." },
          { s: 'jihoon', f: 'neutral', t: "What Uniform? I Saw No Uniform. I Wasn't In That Video. I Was Home. I'm Always Home." },
          { n: "Hyunsuk looked at him from the far end of the couch, for a long second, and didn't say anything, and Jihoon didn't look back, and the TV played Eunchae's outro music into the room like nothing at all had happened." },
          { n: "She was home by eleven-thirty. It was Mom's one condition for New Year's Eve, and Jihoon drove her, and honked twice, and her mom waved from the window like he was the paperboy." },
          { bond: { jihoon: 1 } }
        ], else: [
          { s: 'heeseung', f: 'serious', t: "Addendum to RETREAT FACTS. The bus dropped us at school. That's why we were in the gym." },
          { s: 'jake', f: 'surprised', t: "What bus?" },
          { s: 'heeseung', f: 'neutral', t: "The temple bus." },
          { s: 'sunoo', f: 'surprised', t: "Was there a temple bus??" },
          { s: 'heeseung', f: 'serious', t: "There is now. Write it down." },
          { s: 'jay', f: 'neutral', t: "The armband though, bro." },
          { s: 'sunghoon', f: 'neutral', t: "I thought she looked regal. The prince approves of the armband." },
          { s: 'niki', f: 'happy', t: "I commented 'ghost council is real' on my alt. It has forty likes." },
          { s: 'heeseung', f: 'serious', t: "NIKI." },
          { n: "Jungwon didn't say anything. He'd been watching her, not the laptop, since frame 214, and when she finally looked at him he looked down at his watch and stood up, because his hour was up, and on his way past her chair he put his hand on the top of her head, briefly, the way you'd check a pot was still warm." },
          { n: "She was home by eleven-thirty. Mom's one condition." },
          { bond: { council: 1 } }
        ] }
      ] }
    ] },

    // 12/31 late — the notes -----------------------------------------------------------------------------------------------
    { id: 'epi-h-notes', date: '12/31', slot: 'late', title: 'notes to self', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-dread' },
      { ifEpiRoute: 'jungwon', then: [
        { phone: [
          { from: 'jungwon', t: "are you awake." },
          { from: 'solar', t: "obviously its 11:57" },
          { from: 'jungwon', t: "come downstairs. quietly. i'm on your step." },
          { from: 'solar', t: "WON???" },
          { from: 'jungwon', t: "i told them i was asleep. which i will be. in about thirty minutes." }
        ], contact: 'Won' },
        { n: "He was on her front step in his coat with no hat, snow in his hair, his mom's car keys in his fist like he'd been squeezing them the whole way. Her dad was asleep in the armchair in front of the countdown on TV and her mom was asleep upstairs and Nana was asleep across the bottom stair like a draft excluder, and Jungwon stepped over him with enormous care, and Nana opened one eye, saw who it was, and closed it again, which was the highest honor Nana gave anyone." },
        { n: "They went up to her room because the TV was too loud and her father snored like a man being chased. 11:59. Fireworks starting somewhere toward the river, small and far away, like someone popping bubble wrap in another apartment." },
        { s: 'jungwon', f: 'flustered', t: "I've never snuck out before. Of anything. I think my heart is in my teeth." },
        { s: 'solar', t: "Won~. My little criminal." },
        { n: "At midnight he kissed her, carefully, like he'd planned it, which he probably had, and then not carefully at all, and then she reached past him and turned on her desk lamp." }
      ], else: [
        { n: "Home at eleven-thirty. Her dad asleep in the armchair in front of the countdown on TV with his reading glasses pushed up into his hair, her mom upstairs already, Nana asleep across the bottom stair. She stepped over him. He grumbled at her in his sleep." },
        { n: "At midnight she was in her room, in pajama pants and her hoodie, listening to the fireworks start up toward the river, small and far away. She reached over and turned on her desk lamp to text happy new year to everyone at once like a normal person." }
      ] },
      { glitch: 'epi-h-g-notes' },
      { n: "The mirror over her desk was covered in sticky notes." },
      { n: "Yellow ones. From the pad in her top drawer, the one she'd bought at the stationery store in October for her calculus formulas and never used. A dozen of them at least, stuck in crooked rows across the glass so that her own face in the mirror was just a gap between them, and every one of them in her handwriting. Her actual handwriting. The S with the little hook at the top. The way she crossed her sevens because Jihoon had made fun of her sevens in the fifth grade." },
      { n: "*walk Koromaru, 7am!! he WILL wait at the door*" },
      { n: "*heal BEFORE the stairs*" },
      { n: "*return Mitsuru's book (the red one, DON'T bend it)*" },
      { n: "*curfew 11 — Mitsuru checks. she CHECKS*" },
      { n: "*Junpei owes me 500 yen*" },
      { n: "*tell Fuuka thank you (for everything)*" },
      { n: "*H — roof, after. don't be late (he will be)*" },
      { n: "She hadn't written them. She knew she hadn't, the way you know you haven't been in a room. She'd written lists exactly like them every night for a year, on a desk in a dorm on the other side of something that wasn't a city, and she'd left all of them there." },

      { ifEpiRoute: 'jungwon', then: [
        { n: "Jungwon was standing behind her. She saw him in the gaps between the notes, his face in pieces, reading over her shoulder the way he read everything, all of it, once, carefully." },
        { s: 'jungwon', f: 'serious', t: "Heal before the stairs." },
        { n: "He said it the way you'd say a word in a language you'd studied for a year and never expected to hear again, at home, in a girl's bedroom, on New Year's." },
        { s: 'jungwon', f: 'serious', t: "That's the floor before the guardian. You always said it. Every time. Even when nobody was hurt." },
        { s: 'solar', t: "I didn't write these, Won." },
        { s: 'jungwon', f: 'neutral', t: "I know you didn't." },
        { n: "He knew. He knew what all of them were, Koromaru and the red book and the curfew, he'd been there for some of them, she'd forgotten that for one stupid second, that he'd been there. Then his eyes got to the last one, the H, the roof, *he will be*, and stopped on it, and stayed." },
        { glitch: { near: true } },
        { n: "He didn't say anything. He didn't ask. He just looked at it for as long as it took, and then looked at her in the mirror, in the gap, and his face did the thing it did when he decided not to make her say something." },
        { s: 'jungwon', f: 'neutral', t: "Do you want me to take them down." },
        { choose: [
          { t: "Take them down.", stat: { kindness: 1 }, then: [
            { n: "He did. One at a time, by the corners, so they wouldn't curl. He stacked them in order, smoothed the stack with his thumb, and then he opened her top drawer and put them in it. Not the trash. The drawer. She noticed that. She noticed it for a long time afterwards." }
          ] },
          { t: "Leave them.", flag: 'epi-h-notes-kept', stat: { courage: 1 }, then: [
            { s: 'jungwon', f: 'neutral', t: "Okay." },
            { n: "He sat on the edge of her desk and read every one of them again, slowly, like homework, like he was memorizing them in case they were on a test, and she sat on her bed and watched him do it and didn't say anything at all." }
          ] }
        ] },
        { n: "He left at twelve-twenty, the front door, so quietly she didn't hear it close. On the step he turned around and looked up at her window, and she put her hand flat on the glass, and he put his hand up, and then he went to get in trouble, probably, for her." },
        { s: 'jungwon', f: 'happy', t: "Happy new year, Sol." },
        { bond: { jungwon: 1 } }
      ], else: [
        { n: "She took a picture of the mirror. Her hands were steady. She noticed that, distantly, that they were steady, that a year of the Dark Hour had done that to her hands. She sent it to him with no caption." },
        { n: "He called in eleven seconds." },
        { s: 'jungwon', f: 'serious', t: "Is that your handwriting." },
        { s: 'solar', t: "Yes." },
        { s: 'jungwon', f: 'serious', t: "Did you write them." },
        { s: 'solar', t: "No." },
        { n: "A pause on the line, his breath, a door somewhere on his side, his voice dropping to the low flat thing he used in his room at night so his parents wouldn't hear." },
        { s: 'jungwon', f: 'serious', t: "Heal before the stairs." },
        { s: 'solar', t: "...Yeah." },
        { s: 'jungwon', f: 'neutral', t: "Sol. I know what that is." },
        { s: 'solar', t: "I know you do." },
        { s: 'jungwon', f: 'neutral', t: "Do you want me to come over." },
        { s: 'solar', t: "Your mom would kill you." },
        { s: 'jungwon', f: 'neutral', t: "Yes." },
        { n: "He said it like that settled it, like it was only a fact on a list, and she laughed for the first time since the lamp went on." },
        { choose: [
          { t: "Stay on the phone. That's enough.", stat: { kindness: 1 }, then: [
            { n: "He stayed on the phone. She read him the notes one by one, because it was easier with someone listening, Koromaru and the red book and Junpei's five hundred yen, and he made a small sound at each one like he was checking it off. Then she got to the last one and read *H, roof, after*, and stopped." },
            { s: 'jungwon', f: 'neutral', t: "You don't have to read me that one." }
          ] },
          { t: "(Pull them off the mirror while he listens.)", flag: 'epi-h-notes-kept', stat: { courage: 1 }, then: [
            { n: "She peeled them off one at a time with the phone pinched between her ear and her shoulder, and he listened to the little sticky sound of each one like it was a heartbeat on a monitor, and didn't say anything until she'd stacked them all and put them in her drawer. Not the trash. She noticed that about herself." },
            { s: 'jungwon', f: 'neutral', t: "Good. Keep them. You'll want them." }
          ] }
        ] },
        { s: 'jungwon', f: 'neutral', t: "Happy new year, Sol." },
        { bond: { jungwon: 1 } }
      ] },
      { flag: 'epi-h-notes' },
      { n: "When she turned off the lamp the mirror was just a mirror, and her face was in it, whole, and she looked at it for a while, the girl in it, and couldn't have told you which year she was in." }
    ] },

    // 1/1 — New Year's Day -------------------------------------------------------------------------------------------------
    { id: 'epi-h-new-year', date: '1/1', slot: 'early', consumes: true, title: 'tteokguk', place: 'Hanlim · Home · Kitchen', time: 'Morning', scene: [
      { music: 'epi-h-home' },
      { n: "Her mother had been up since six making tteokguk, which meant the whole house smelled of anchovy broth and sesame oil and the faint scorch of egg strips, and her father was at the table in his good cardigan reading the news on his tablet at arm's length, and Nana was under the table with his chin on her father's slipper, waiting for a miracle." },
      { s: 'dad', t: "Eat. You're a year older." },
      { s: 'solar', t: "I refuse. I'm staying eighteen. I'll have half a bowl." },
      { s: 'mom', t: "Half a bowl, half a year. Sit." },
      { n: "She sat. The rice cakes were thin coins in the broth, the way she liked them. Her mother sat across from her and didn't eat, just held her own bowl in both hands to warm them and watched her, and Solar knew that look. It was the look that came before a question her mother had been holding since the twentieth." },
      { s: 'mom', t: "So." },
      { s: 'mom', t: "The temple. Was it nice, at least?" },
      { n: "It was softer than the last time. That was the worst part. The last time had been *A retreat? In exam week?* at full volume in a doorway, and this was just her mom, at the kitchen table, with a bowl in her hands, wanting it to have been nice." },
      { choose: [
        { t: "It was so nice. We woke up at four and swept things.", stat: { charm: 1 }, then: [
          { s: 'solar', t: "We woke up at four every morning and swept things. Leaves. Steps. I swept a step for an hour once. There was a monk who never said anything, he just pointed at stuff. It was very peaceful. Bad food, though." },
          { glitch: { strain: 1 } },
          { s: 'mom', t: "You swept? You? You don't sweep here." },
          { s: 'solar', t: "It was a spiritual broom, Mom." },
          { n: "Her mom laughed despite herself, and it was easy, and it was a lie, and somewhere under her ribs something small and patient pressed its thumb against the place where the lie had gone in." }
        ] },
        { t: "It was... I missed you guys.", stat: { kindness: 1 }, then: [
          { s: 'solar', t: "It was okay. I missed you guys. I missed this. I missed the soup." },
          { n: "It wasn't the temple's answer. It was the true one, a year's worth of true, and her mom heard something in it she couldn't have named and reached across the table and pushed Solar's bangs out of her eyes the way she used to when Solar was small." },
          { s: 'mom', t: "Next time I'll pack you soup." }
        ] }
      ] },
      { s: 'dad', t: "Your mother called the school four times." },
      { s: 'mom', t: "Five." },
      { s: 'dad', t: "Five times. And the office said *a council retreat* five times, like a recording." },
      { s: 'dad', t: "Next time you go somewhere with no phones, you tell us yourself. Before. Not the office." },
      { s: 'solar', t: "I will. I promise." },
      { n: "Her dad nodded once and went back to his tablet, and that was all he was going to say, and it was a lot, for him. Nana sighed under the table like the miracle had been postponed again." },
      { n: "Her phone buzzed against the table. Her mother looked at it, and then pointedly didn't." },
      { ifEpiRoute: 'jungwon', then: [
        { phone: [
          { from: 'jungwon', t: "happy new year. i made you a study schedule for the make-ups. it's color coded. please don't be mad." },
          { from: 'jungwon', t: "wednesday: the library, 6pm. my parents approved it. they think you're a study group." },
          { from: 'solar', t: "i AM a study group. im a group of one" },
          { from: 'jungwon', t: "a very small group." },
          { from: 'jungwon', t: "did you eat." }
        ], contact: 'Won' }
      ], else: [
        { ifEpiRoute: 'jihoon', then: [
          { phone: [
            { from: 'jihoon', t: "Happy New Year To Me, The Best Thing That Happened To You" },
            { from: 'jihoon', t: "Study Session At Mine Wednesday. Bring Snacks. Do Not Bring Books, Books Are For The Weak" },
            { from: 'solar', t: "jihoon its a STUDY session" },
            { from: 'jihoon', t: "Correct. We Will Be Studying The Snacks" }
          ], contact: 'jihoney' }
        ], else: [
          { phone: [
            { from: 'heeseung', t: "heeheeseung: Happy new year. Wednesday, Yeobo's, 6pm. Make-up study. Attendance is mandatory." },
            { from: 'niki', t: "rikiniki: its a holiday hyung" },
            { from: 'heeseung', t: "heeheeseung: Today is a holiday. Wednesday is Wednesday." },
            { from: 'jake', t: "jakeys: new year new me (same me but studying)" }
          ], contact: 'RETREAT FACTS (do not leave)' }
        ] }
      ] },
      { s: 'mom', t: "Eat your soup before it gets cold, a year older." }
    ] },

    // 1/2 — the motion -----------------------------------------------------------------------------------------------------
    { id: 'epi-h-motion', date: '1/2', slot: 'after', consumes: true, title: 'the motion', place: 'Hanlim · Home · Her Room', time: 'Daytime', scene: [
      { music: 'epi-h-forum' },
      { n: "She was doing calculus. Genuinely. The textbook open on the bed, chapter five, a highlighter uncapped in her hand, Nana asleep across her feet like a weighted blanket with opinions, and she had done two whole problems and gotten one of them right, which was a personal best for the break, when the forum notification came in." },
      { s: 'forum', t: "NEW THREAD · Student Government · MOTION TO IMPEACH THE 2024 STUDENT COUNCIL (petition for a hearing)" },
      { s: 'forum', t: "posted by hanlim_accountability · 1 minute ago" },
      { n: "*The 2024 Student Council (President Yang Jungwon, Vice President Kim Solar, and every officer who went on the so-called retreat) left Hanlim during exam week on a trip no one approved. (We asked the office. The office said \"a council retreat\" and hung up.) That is dereliction of duty. In addition, as asked on Hanlim Unfiltered, WHERE IS THE BAKE-SALE TIN? The money raised by students has not been seen since. We, the undersigned, petition for a hearing when school opens, under the student constitution (yes, we have one, it's page 41 of the handbook).*" },
      { n: "Under it, a little counter. *Signatures: 17.* She refreshed. *Signatures: 23.*" },
      { n: "Oh God." },
      { phone: [
        { from: 'heeseung', t: "heeheeseung: Nobody respond to the thread." },
        { from: 'niki', t: "rikiniki: i responded" },
        { from: 'heeseung', t: "heeheeseung: Niki." },
        { from: 'niki', t: "rikiniki: on my alt" },
        { from: 'heeseung', t: "heeheeseung: NIKI." },
        { from: 'jake', t: "jakeys: does anyone else think hanlim_accountability sounds like heeseung" },
        { from: 'heeseung', t: "heeheeseung: I am IN the motion, Jake." },
        { from: 'jake', t: "jakeys: thats exactly what heeseung would say" },
        { from: 'sunoo', t: "sunooshine: guys the tin is fine right?? the tin is in the gym?? its in the ballot box???" },
        { from: 'jay', t: "jbird: who even put it in the ballot box" },
        { from: 'sunghoon', t: "princehoon: Sunghoon did not put it in the ballot box. Sunghoon would never." },
        { from: 'jay', t: "jbird: nobody asked u specifically bro" },
        { from: 'jungwon', t: "injangwon: the tin is all there. i counted it twice on the twentieth." }
      ], contact: 'RETREAT FACTS (do not leave)' },
      { ifYear: { xmas: 'jungwon' }, then: [
        { phone: [
          { from: 'jungwon', t: "injangwon: i lost count the second time. but i recounted. it's all there." },
          { from: 'jake', t: "jakeys: why did u lose count" },
          { from: 'jungwon', t: "injangwon: unrelated." }
        ], contact: 'RETREAT FACTS (do not leave)' },
        { n: "She put her face in Nana's fur for a second." }
      ] },
      { phone: [
        { from: 'jungwon', t: "injangwon: please, nobody comment." }
      ], contact: 'RETREAT FACTS (do not leave)' },
      { n: "She refreshed the thread. There was a comment." },
      { s: 'forum', t: "jihoney commented: Signed. Twice. Accountability Is The Backbone Of Any Healthy Democracy." },
      { s: 'forum', t: "jihoney commented: Where Is The Tin, Jungwon. The People Are Hungry. The People Want Brownies." },
      { s: 'forum', t: "jihoney commented: I Was Home The Whole Time By The Way. Unlike Some People. Just Putting That Out There." },
      { phone: [
        { from: 'solar', t: "solarsystem: JIHOON" },
        { from: 'solar', t: "solarsystem: PARK JIHOON DELETE IT" },
        { from: 'jihoon', t: "jihoney: I Am A Concerned Citizen Exercising My Civic Duty" },
        { from: 'cherry', t: "cherryblossoms: ur a concerned dumbass. delete it or i delete u" },
        { from: 'asahi', t: "asanoonecares: no one cares. except everyone. this time" },
        { from: 'junkyu', t: "junkyute: i didnt sign it!!! i would never!!! :(" },
        { from: 'hyunsuk', t: "geniusuk: bro." },
        { from: 'jaehyuk', t: "jaehyukkie: The handbook does say that. Page 41. I checked. Sorry." },
        { from: 'jihoon', t: "jihoney: Astonishing!!!! Democracy!!!!" }
      ], contact: "rip solar kim (she's fine probably)" },
      { n: "*Signatures: 64.* Nana rolled over onto his back and presented his stomach to the ceiling like none of this was any of his business, which it wasn't." },
      { choose: [
        { t: "(Reply to Jihoon's comment. Publicly.)", stat: { courage: 1 }, then: [
          { s: 'forum', t: "solarkim commented: @jihoney go touch grass" },
          { s: 'forum', t: "jihoney commented: @solarkim It's Winter, Sol. The Grass Is Dead. Like Your Campaign." },
          { n: "Forty people liked his reply in under a minute. Heeseung sent her a single period in a private message, which was somehow worse than a paragraph." }
        ] },
        { t: "(Put the phone face down. Chapter five.)", stat: { knowledge: 1 }, then: [
          { n: "She turned the phone over on the duvet and stared at problem three until the numbers stopped swimming, and she did it, she actually did it, and the phone buzzed under her hand the whole time like something trapped." }
        ] }
      ] },
      { ifEpiRoute: 'council', then: [
        { phone: [
          { from: 'heeseung', t: "heeheeseung: Update. Wednesday is now a war council. Bring your textbooks AND your brains." },
          { from: 'niki', t: "rikiniki: WAR COUNCIL" },
          { from: 'jake', t: "jakeys: i'll bring the snacks of war" }
        ], contact: 'RETREAT FACTS (do not leave)' }
      ] },
      { flag: 'epi-h-motion' },
      { n: "By dinner it had a hundred and forty-two signatures. She hadn't known a hundred and forty-two people at Hanlim knew her name. It turned out the fastest way to find out was to disappear for nine days and come back in somebody else's uniform." }
    ] },

    // 1/2 late — fight 1: alone --------------------------------------------------------------------------------------------
    { id: 'epi-h-alone', date: '1/2', slot: 'late', title: 'alone', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-half' },
      { n: "She fell asleep over chapter five. She didn't mean to. One minute it was eleven-forty and she was reading the same sentence about limits for the fourth time with the desk lamp on and Nana snoring on the rug, and the next minute the sentence was gone, and so was the lamp." },
      { glitch: { stage: 3 } },
      { glitch: 'epi-h-g-alone' },
      { place: 'Hanlim · School · Council Room', time: 'Late Night' },
      { dark: true },
      { n: "She was standing in the council room." },
      { n: "Socks. Her pajama pants with the clouds on them. The long table, the whiteboard with half of somebody's agenda still on it in blue marker, the window over the courtyard, Jungwon's chair at the end with his cardigan still hanging on the back of it where he'd left it before the break. Everything exactly where it had been, and every single thing in it gone the color of a pool at night." },
      { n: "The chairs weren't chairs. They were coffins, upright, tall and black and patient, one at every place around the table, and she knew without looking which one was in Jungwon's spot. The moon in the window was too big. It hung over the courtyard like somebody had pulled it in on a string to have a better look at her." },
      { n: "The last time she'd stood in this room it had been a Monday, two lunches on the table going cold, something left unfinished that she still hadn't let herself finish thinking about. Then the world had come apart, and she'd been gone a year." },
      { n: "Past the whiteboard, where the wall should have been, the floor kept going. Black and gold tile, a long corridor of it, the light at the end the particular wrong gold she knew the way you know your own handwriting." },
      { n: "Tartarus. Coming through Hanlim's council room like water through a ceiling." },
      { n: "Her hand went to her hip, where there was nothing. Then there was something, the long smooth haft of it, cold and exactly the right weight, the blade end tipping past her shoulder, and she didn't look at it, because if she looked at it she'd have to decide what it meant that it was here." },
      { n: "Something came out of the gold end of the corridor, low and too wide, dragging itself along on hands." },
      { n: "Haenim. She called it the way you'd say your own name in the dark to prove you still had one, and something answered, far away and fizzing, the name coming apart in her mouth like a radio between stations, *Hae-, Haen-, H—*, and the light came anyway. Not all of it. Enough." },
      { battle: { id: 'epi-hoax-1', kind: 'scripted', script: 'epi-hoax-1', title: 'Alone', forced: true,
        desc: 'Hanlim’s council room at midnight, half turned into Tartarus. Solar, by herself.',
        notes: 'Half-present fight 1 (FEMC-EPILOGUE-PLAN 2.4): solo, no escape, Haenim answers but her name glitches. After a few rounds or a hard hit she is pulled back mid-fight (interrupt, turn 4, half HP). Cannot be lost: an empty HP bar fades her home instead.' } },
      { dark: false },
      { place: 'Hanlim · Home · Her Room', time: 'Late Night', soft: true },
      { n: "Then she was on her bedroom floor." },
      { n: "On her knees on the rug, breathing like she'd run up every stair in the school, her palms flat on the carpet and her hair stuck to the back of her neck. Nothing in her hands. The desk lamp on. The textbook still open to chapter five, the same sentence about limits, the highlighter rolled off the edge of the desk and onto the floor by her knee." },
      { n: "Nana was standing over her. Not barking. Nana never barked. He was just standing there with his silly legs planted and his whole body pressed against her side, hard, holding her up, the way he did when there was a storm." },
      { n: "Her clock said 12:01. It had said 12:00 a second ago. She knew it had." },
      { n: "There was a blister across her right palm. A long one, raised and angry and already filling, exactly where the haft of a naginata sits when you've been gripping it too hard for too long. She hadn't had one of those since the Dark Hour. She'd had one every week of the Dark Hour." },
      { n: "She looked at it under the lamp for a long time. Then she got up and ran it under cold water in the bathroom with the light off so she wouldn't have to see her own face, and came back, and lay down on the floor next to Nana because the bed felt too far away, and put her other hand in his fur, and stayed there until the lamp was the only light on the street." },
      { flag: 'epi-h-alone' }
    ] },

    // 1/3 — studying, by route ---------------------------------------------------------------------------------------------
    { id: 'epi-h-study-jw', date: '1/3', slot: 'evening', consumes: true, flag: 'epi-route-jungwon', title: 'chapter six', place: 'Hanlim · Library', time: 'Evening', scene: [
      { music: 'epi-h-romance' },
      { n: "The town library's second floor in January was radiators clanking under the windows, an old man asleep over a newspaper at the end table with his reading glasses in his hand, the smell of carpet and dust and somebody's orange peel, and Jungwon at the corner table by the window with chapter six open and two pencils already sharpened and lined up beside it like scalpels." },
      { n: "His parents had approved it as a study group. She was the group. She'd decided not to bring that up." },
      { s: 'jungwon', f: 'happy', t: "You came." },
      { s: 'solar', t: "You color-coded me a schedule, Won. I was scared not to." },
      { n: "He pulled her chair out for her without getting up, just a hand reaching over and dragging it back across the carpet, and she sat in it, and he slid the book between them and tapped problem one." },
      { n: "He was good at this. He was good at it in a way that went past math, patient in a way that didn't look like patience, just a boy who'd decided she was going to understand chain rule if it took all night, writing each step under the last in his tiny neat print and then turning the pencil around to her and waiting. And when he was concentrating, when she got something almost right and he was looking for exactly where it went wrong, his dimples came out, both of them, deep enough to lose a pencil in, and he had no idea." },
      { n: "She got problem four right on her own. He looked up. The dimples didn't go anywhere." },
      { s: 'jungwon', f: 'happy', t: "That's correct." },
      { s: 'solar', t: "Say it again." },
      { s: 'jungwon', f: 'flustered', t: "...That's correct, Sol." },
      { n: "Then he rubbed his temple with two fingers, which he did when he thought she wasn't looking, and she was always looking." },
      { s: 'solar', t: "When did you last eat." },
      { s: 'jungwon', f: 'neutral', t: "That's not on the schedule." },
      { s: 'solar', t: "Won." },
      { s: 'jungwon', f: 'neutral', t: "Lunch. Probably. There was a lunch-shaped event." },
      { n: "She'd come prepared. She reached into her coat pocket, past the cold unopened can she always kept there, and came out with a triangle kimbap from the convenience store, tuna mayo, slightly squashed." },
      { s: 'jungwon', f: 'surprised', t: "There's no food in the library. There's a sign." },
      { choose: [
        { t: "Eat it or I'll scream. I'll scream so loud that man wakes up.", stat: { charm: 1 }, then: [
          { n: "He looked at the old man asleep over the newspaper. He looked at her. He knew she would. He took the kimbap and peeled it, sides first, the right way, the way most people get wrong, and ate it hunched behind the textbook like a fugitive." },
          { s: 'jungwon', f: 'flustered', t: "This is your fault if we get banned." },
          { s: 'solar', t: "We'll go to a different library. I'll follow you anywhere. Chew." }
        ] },
        { t: "(Unwrap it for him and hold it out.)", stat: { kindness: 1 }, then: [
          { n: "She peeled it for him, sides first, without the seaweed tearing, and held it out across chapter six, and didn't say anything at all." },
          { n: "He took it. He ate the whole thing in four bites with his eyes on her the entire time and his ears going slowly pink, and then he folded the wrapper into a perfect little square and put it in his pocket so the library would never know." }
        ] }
      ] },
      { n: "When she turned the page, he saw her hand." },
      { n: "He didn't say anything. He just reached across and took her right wrist, gently, and turned her hand over on the table between them, palm up under the lamp, and looked at the blister across it, the long raised line of it, exactly where something with a haft would sit." },
      { glitch: { near: true } },
      { n: "His thumb went along the edge of it, not touching it, the way you'd trace a word on a page." },
      { s: 'jungwon', f: 'serious', t: "You were holding something." },
      { s: 'solar', t: "...Yeah." },
      { n: "He didn't ask what. He didn't ask where. He opened his pencil case, because of course Yang Jungwon carried bandages in his pencil case, and took one out, and put it across her palm, smoothing the edges down with his thumb one at a time." },
      { s: 'jungwon', f: 'neutral', t: "Problem five." },
      { n: "His phone lit up on the table. *Mom: 9:00.* Nothing else. Just the time, like a sentence." },
      { s: 'jungwon', f: 'neutral', t: "I have forty minutes. Chapter six has forty minutes of problems left." },
      { s: 'solar', t: "Won." },
      { s: 'jungwon', f: 'happy', t: "Thirty-nine." },
      { stat: { knowledge: 1 } },
      { bond: { jungwon: 1 } },
      { n: "They did thirty-nine minutes of chapter six. She didn't let go of his sleeve for most of it, and he turned the pages one-handed so she wouldn't have to." }
    ] },

    { id: 'epi-h-study-jh', date: '1/3', slot: 'evening', consumes: true, flag: 'epi-route-jihoon', title: 'wrong drawer', place: "Hanlim · Jihoon's House", time: 'Evening', scene: [
      { music: 'epi-h-jihoon' },
      { n: "Jihoon's idea of a study session turned out to be four bags of chips, two family-size bottles of soda, the TV on a racing game paused mid-crash, and her calculus textbook sitting on the coffee table under his can, being used, very specifically, as a coaster." },
      { s: 'solar', t: "That's my textbook." },
      { s: 'jihoon', f: 'happy', t: "And It Has Never Been More Useful. Look At It. Serving A Purpose. Unlike You." },
      { s: 'solar', t: "Jihoon, I have make-ups on Monday. I'm actually going to fail. Like, for real." },
      { s: 'jihoon', f: 'neutral', t: "And Whose Fault Is That? Who Went To A Temple In Exam Week? Not Me. I Was Home. I'm Always Home." },
      { n: "He said it every time now, *I was home*, like a password, like if he said it enough times the year he'd spent on the other side of a door in a dorm with a dog and a redhead with a rapier would fold itself up and fit back in the drawer of things that hadn't happened. She'd stopped arguing. Arguing just made him say it louder." },
      { s: 'solar', t: "You were not home. You were in the gym. You're in Eunchae's video, you idiot. You're the tall blur." },
      { s: 'jihoon', f: 'happy', t: "Many Tall Blurs In This World, Sol. Pass Me The Shrimp Ones." },
      { n: "She went looking for a pen instead, because one of them should at least look like they were studying, and opened the little drawer in the coffee table where he kept pens and takeout menus and dead batteries." },
      { n: "There was a pen. There was also a small plastic bag tucked against the side of the drawer, folded over twice, and a lighter, and a receipt from a pharmacy, and she looked at it for exactly as long as it took him to put his foot against the drawer and push it shut." },
      { s: 'jihoon', f: 'neutral', t: "Wrong Drawer." },
      { n: "He didn't look at her. He picked up the controller and unpaused the game, and the little car on the screen finished crashing into the wall it had been crashing into all evening." },
      { choose: [
        { t: "Jihoon. The drawer.", stat: { courage: 1 }, then: [
          { s: 'jihoon', f: 'neutral', t: "Is This An Intervention? Should I Call Hyunsuk? He Loves A Circle. He'll Bring A Talking Stick." },
          { s: 'solar', t: "I'm serious." },
          { s: 'jihoon', f: 'serious', t: "So Am I. Don't Look At Me Like That, Sol. It's Unflattering. For Both Of Us." },
          { n: "He didn't open the drawer. He didn't promise anything either. But he moved his foot, after a minute, off the front of it, like it cost him something to leave it there and something more to take it away." }
        ] },
        { t: "(Say nothing. Hand him the other controller.)", stat: { kindness: 1 }, then: [
          { n: "She held out the second controller instead. He looked at it, and then at her, for a second too long, like she'd said something he didn't have a joke ready for." },
          { s: 'jihoon', f: 'happy', t: "You're So Bad At This Game. It's Embarrassing. I Accept." },
          { n: "She was bad at it. He won eleven times in a row and narrated every win like a sports announcer, and the drawer stayed shut, and neither of them looked at it again, which wasn't the same as it not being there." }
        ] }
      ] },
      { n: "Somewhere around ten she fell asleep sideways on his couch with her cheek on chapter six, because she'd barely slept since the night with the council room, and the blister on her palm throbbed in time with the racing game's engine noise, and the couch smelled like his cologne and old popcorn." },
      { n: "She wasn't all the way under. She was in that place just above it, where you can still hear a room. She heard the game go quiet. She heard him put the controller down. She heard him not move for a long time." },
      { s: 'jihoon', f: 'sad', t: "...Don't Do That Again. Okay? Just— Stay Where I Can See You." },
      { n: "His voice was so low she almost didn't catch it. It wasn't any voice she'd heard him use since sophomore year." },
      { n: "She opened her eyes. He was looking at her. Then he wasn't." },
      { s: 'jihoon', f: 'happy', t: "You Drool. Did You Know That? It's Disgusting. I'm Telling Cherry. I'm Telling The Whole Chat. I'm Putting It On The Forum." },
      { s: 'solar', t: "Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "What. I Didn't Say Anything. You Were Dreaming. Go Back To Sleep, I'll Drive You Home In Twenty." },
      { bond: { jihoon: 1 } },
      { n: "She didn't go back to sleep. She lay there with her eyes closed anyway, so he could have it, and listened to him start the race over from the beginning, and crash into the same wall, and start it over again." }
    ] },

    { id: 'epi-h-study-council', date: '1/3', slot: 'evening', consumes: true, flag: 'epi-route-council', title: 'the ledger', place: "Hanlim · Yeobo's", time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "The first war council of the impeachment met at the big table in the back of Yeobo's at six o'clock, with eight textbooks, one laptop, a plate of day-old croissants Sunoo's grandmother had set down without comment, and a ledger." },
      { n: "A real one. Green, cloth-bound, with columns, from the stationery store by the station, and Heeseung opened it like a priest opening a Bible, and every single person at the table went quiet the way people do in church." },
      { s: 'heeseung', f: 'serious', t: "Every transaction from the bake sale. Every booth. Every won. Dated. Initialed. Sunoo initialed the lemon bars twice, I fixed it." },
      { s: 'sunoo', f: 'flustered', t: "They were really good lemon bars." },
      { s: 'jake', f: 'happy', t: "Okay, I'm calling us the Tin Men. Because of the tin. And because we have no hearts. Because they've been broken by democracy." },
      { s: 'jay', f: 'neutral', t: "Bro, nobody's calling us that." },
      { s: 'niki', f: 'happy', t: "I'm calling us that." },
      { s: 'jungwon', f: 'neutral', t: "The count matches the ledger. To the won. I'd like that noted before anyone says anything stupid." },
      { s: 'niki', f: 'neutral', t: "Okay but who IS hanlim_accountability. I can find out. Give me one night and Jay's mutuals." },
      { s: 'heeseung', f: 'serious', t: "No. Absolutely not. We are not doxxing a student. We are the student council." },
      { s: 'jay', f: 'neutral', t: "My mutuals say second-year. That's all I'm saying. I'm not doxxing. I'm just saying second-year." },
      { s: 'sunghoon', f: 'neutral', t: "Sunghoon could charm it out of them. In a day. Two at most." },
      { s: 'sunoo', f: 'surprised', t: "What if we just... told the truth?" },
      { n: "Everyone at the table turned to look at him at once. Sunoo went pink from his collar to his hair." },
      { s: 'sunoo', f: 'flustered', t: "About the TIN! Just the tin! The tin is fine! Oh my God, stop looking at me, I'm a terrible liar, you all know I'm a terrible liar, that's why Heeseung wrote it down!" },
      { s: 'heeseung', f: 'neutral', t: "That is why I wrote it down." },
      { n: "So the question was where the tin actually was. And the answer was the gym. In the old ballot box, on the table, under the balloons nobody had finished hanging, where on the night they came back somebody had decided it would be safest. Nobody could agree who. Jake was sure it was Jay. Jay was sure it was Sunghoon. Sunghoon reminded everyone that Sunghoon would never. The gym was locked until the eighth." },
      { s: 'heeseung', f: 'serious', t: "Then on the eighth we go and get it. In front of witnesses. And on the eleventh we put it on a table in front of the whole school and Jungwon counts it out loud." },
      { s: 'jungwon', f: 'neutral', t: "I can do that." },
      { s: 'jake', f: 'happy', t: "He's gonna love that. Look at his face. That's his happy face." },
      { s: 'jungwon', f: 'neutral', t: "This is my face." },
      { n: "Between agenda items Jungwon had her calculus open on the corner of the ledger and was walking her through chain rule in a murmur, one step at a time, without looking up from Heeseung's columns, which should have been impossible and wasn't, for him." },
      { s: 'heeseung', f: 'neutral', t: "Solar. Vice President. Your thoughts." },
      { choose: [
        { t: "We show them every won. Ledger, tin, count. Boring wins.", stat: { knowledge: 1 }, then: [
          { s: 'heeseung', f: 'happy', t: "Boring wins. I'm writing that on the front." },
          { n: "He actually did. In the inside cover of the ledger, in block capitals, BORING WINS, and underlined it twice, and Jungwon nodded like a judge." }
        ] },
        { t: "We make them like us first. Then the tin.", stat: { charm: 1 }, then: [
          { s: 'sunghoon', f: 'flustered', t: "Finally. Someone who understands Sunghoon's methods." },
          { s: 'jake', f: 'happy', t: "Memes. I'm making memes. Tin memes. Heartless tin memes." },
          { s: 'heeseung', f: 'serious', t: "Every meme goes through me." }
        ] },
        { t: "We pass the make-ups first. They can't impeach people who aced their finals.", stat: { courage: 1 }, then: [
          { s: 'jungwon', f: 'happy', t: "That's correct." },
          { s: 'niki', f: 'neutral', t: "You're literally failing calculus, noona." },
          { s: 'solar', t: "THAT'S WHY I SAID IT OUT LOUD, NIKI." }
        ] }
      ] },
      { n: "Sunoo's grandmother came by with more croissants and put a hand on Sunoo's head as she passed and said something to him in a low voice that made him go even pinker, and Jay laughed so hard he had to put his forehead on his textbook." },
      { s: 'halmeoni', t: "Eat. War is long." },
      { bond: { council: 1 } },
      { n: "It was the most normal she'd felt since the twentieth. Eight people and a ledger, croissants, chain rule, Niki threatening crimes, Heeseung refusing them. The window behind Jungwon was black and the snow came down past it the right way, down, and she watched it do that for a long time before she let herself believe it." }
    ] }
  );

  // Routines: everyday life across the act, once each (one every other day at most) ------------------------------------------
  (R.routines ||= []).push(

    { id: 'epi-h-rt-nana', slot: 'early', after: '12/22', until: '12/27', events: ['epi-h-home'], place: 'Hanlim · Home · Her Room', time: 'Morning', scene: [
      { n: "Nana woke her at six the way he always had, by lying on her. All of her. All of him, a hundred pounds of white fluff and silly legs arranged across her body like a fallen cloud, his nose an inch from her ear, breathing hot dog breath into it with total devotion." },
      { n: "For a year she'd woken up to a different dog. A smaller, sharper, white one with a red collar who sat by the bed in perfect silence until she opened her eyes, then went to the door, and waited." },
      { s: 'solar', t: "Koro— ...Nana. Nana. Good morning. Get off me, you giant." },
      { n: "Nana didn't know who Koro was. Nana didn't care. Nana licked the side of her face in a long, slow, offended stripe." },
      { ifYear: { xmas: 'jihoon' }, then: [
        { n: "Then he noticed the plush on her pillow, the little dog from the crane game with his exact face, and growled at it, low and betrayed, like he'd caught her with another man." }
      ], else: [
        { ifYear: { xmas: 'jungwon' }, then: [
          { n: "Then he sniffed her coat over the chair, the pocket where the croissant had been, for a long, suspicious time, like he was building a case." }
        ] }
      ] },
      { choose: [
        { t: "(Take him out in the snow before anyone's up.)", stat: { kindness: 1 }, then: [
          { n: "She took him out in her pajamas and her coat and her mom's boots, the street blue and silent and new, and Nana ran in circles in the snow on the little lawn like he'd never seen it before, every single time, and she laughed out loud at nothing on an empty street at six in the morning." }
        ] },
        { t: "(Five more minutes.)", then: [
          { n: "She put her arm around him and pulled him in and he let her, heavy and warm and absolutely sure of everything, and she slept for five more minutes, and then forty more, and nobody came to the door to wait for her." }
        ] }
      ] }
    ] },

    { id: 'epi-h-rt-doomscroll', slot: 'late', after: '12/22', until: '12/28', events: ['epi-h-part-four'], place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { n: "One in the morning, under the duvet, phone at six percent brightness, reading WHERE IS THE COUNCIL (part 4) from the top like a horror story she was in." },
      { s: 'forum', t: "theory: rehab. all eight of them. group rate. (61 upvotes)" },
      { s: 'forum', t: "theory: jungwon and the VP eloped and the council went as witnesses (54 upvotes)" },
      { s: 'forum', t: "theory: cult. specifically a math cult. hear me out (31 upvotes)" },
      { s: 'forum', t: "theory: witness protection, they saw something at the bake sale (12 upvotes)" },
      { s: 'forum', t: "theory: they went to a different dimension lol (1 upvote)" },
      { n: "She looked at the last one for a long time. The *lol* on the end of it like a hand waving from very far away." },
      { choose: [
        { t: "(Upvote the dimension one.)", stat: { charm: 1 }, then: [
          { n: "Two upvotes. It sat at the bottom of the thread with its two upvotes, one of them hers, the only true thing on the whole page, and she turned the phone over on her chest and lay there in the dark feeling like she'd signed something." }
        ] },
        { t: "(Close the app. Sleep.)", stat: { knowledge: 1 }, then: [
          { n: "She closed it. She didn't sleep. But she lay in the dark not reading the forum, which was a different thing from sleeping and, at one in the morning, about as good." }
        ] }
      ] }
    ] },

    { id: 'epi-h-rt-mom-breakfast', slot: 'early', after: '12/26', until: '12/30', events: ['epi-h-christmas'], place: 'Hanlim · Home · Kitchen', time: 'Morning', scene: [
      { n: "Breakfast was rice and leftover galbi from Christmas and an interrogation, served in that order, her mother across the table in her robe with her coffee held like a gavel." },
      { s: 'mom', t: "What did they feed you at the temple?" },
      { s: 'solar', t: "Rice. Soup. ...Silence." },
      { s: 'mom', t: "Which temple?" },
      { s: 'solar', t: "The one in Gangwon-do." },
      { s: 'mom', t: "There are a hundred temples in Gangwon-do, Solar." },
      { s: 'dad', t: "Let her eat." },
      { choose: [
        { t: "(Describe it. Make it so boring she stops asking.)", stat: { charm: 1 }, then: [
          { s: 'solar', t: "It was on a mountain. There were a lot of steps. There was a bell. They rang it at four. Then we sat. Then we sat more. Then lunch, which was the soup. Then, and this is my favorite part, we sat." },
          { glitch: { strain: 1 } },
          { s: 'mom', t: "...Eat your rice." },
          { n: "It worked. It worked so well that her mother's face went soft around the edges, and that sat in her stomach next to the galbi for the rest of the morning." }
        ] },
        { t: "(Ask Dad about his tie.)", then: [
          { s: 'solar', t: "Dad, is that a new tie? It's a holiday. Why are you wearing a tie?" },
          { s: 'dad', t: "...Your mother bought it." },
          { s: 'mom', t: "Don't think I don't know what you're doing." },
          { n: "She did know. She let it go anyway, for now, and Solar could feel the question folded up and put away in her mother's robe pocket for later, like a receipt." }
        ] }
      ] }
    ] },

    { id: 'epi-h-rt-calculus', slot: 'after', after: '1/3', until: '1/7', events: ['epi-h-new-year'], place: 'Hanlim · Home · Her Room', time: 'Daytime', scene: [
      { n: "Calculus, alone, the afternoon light going gray across her desk, the textbook open to a page with Jungwon's tiny neat handwriting in the margins from November, little arrows and *you've got this* and once, under a problem she'd gotten badly wrong, a very small drawing of a dog that was either Nana or Maeumi." },
      { n: "She reached across the desk for her pencil case without looking, and her hand went to the wrong place. To the left side, where a different desk in a different room had kept a different pencil case, a plain navy one with a school crest, for a year." },
      { n: "Her hand closed on nothing. She looked at it for a second, open on the desk, the bandage across the palm." },
      { choose: [
        { t: "(Find the right pencil case. Do the problems.)", stat: { knowledge: 1 }, then: [
          { n: "It was on the right, where it had always been. She did six problems. She got four of them right. She texted Jungwon a picture of the page with *4/6!!!!!* and he replied *that's a passing grade. i'm very proud of you.* with a period, and she stuck the phone to her forehead for a while." }
        ] },
        { t: "(Put your head down on the textbook.)", then: [
          { n: "She put her head down on chapter six and closed her eyes and let the radiator tick for a while, and didn't do any problems, and didn't reach for anything else, in case her hand went somewhere it shouldn't again." }
        ] }
      ] }
    ] },

    { id: 'epi-h-rt-walk', slot: 'early', after: '1/9', until: '1/11', events: ['epi-h-makeup'], place: "Hanlim · Jungwon's Street", time: 'Morning', scene: [
      { n: "She walked to school the long way, which was the only way that went past the end of Jungwon's street, which was not, she told herself, a coincidence, because it was a lie and she'd been telling enough of those already this month." },
      { n: "His house sat back from the road behind a low wall, neat and pale and quiet, the kind of quiet a house has when the people in it are very careful. His mom's car was in the drive with frost on the windshield. Upstairs, his curtains were open an inch." },
      { n: "In the downstairs window, a tiny dog was losing its entire mind at her. Maeumi, standing on the back of a sofa, barking with his whole body, outraged, delighted, both." },
      { phone: [
        { from: 'jungwon', t: "i can see you from my window." },
        { from: 'jungwon', t: "keep walking, my mom's in the kitchen." },
        { from: 'jungwon', t: "good luck today. you know it. i've seen you know it." }
      ], contact: 'Won' },
      { choose: [
        { t: "(Wave at the window anyway.)", stat: { courage: 1 }, then: [
          { n: "She waved, big, both arms, like a person on a dock. The inch in the curtains went still. Then a hand came up in it, small, quick, gone, and Maeumi barked so hard he fell off the sofa." }
        ] },
        { t: "(Keep walking. Wave at Maeumi instead.)", stat: { kindness: 1 }, then: [
          { n: "She waved at the dog. The dog lost his mind further. Upstairs, she was almost sure, somebody behind the inch in the curtains laughed, once, and covered it." }
        ] }
      ] }
    ] },

    { id: 'epi-h-rt-jw-call', slot: 'late', after: '12/26', until: '1/5', flags: ['epi-route-jungwon'], place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { n: "He called at eleven-thirty in the whisper he used from the floor of his room, his back against the door so he'd feel it if anyone tried to open it, and quizzed her on derivatives in the dark like a radio host on the world's worst late-night show." },
      { s: 'jungwon', f: 'neutral', t: "x squared." },
      { s: 'solar', t: "Two x." },
      { s: 'jungwon', f: 'neutral', t: "Good. Sine x." },
      { s: 'solar', t: "Cosine x." },
      { s: 'jungwon', f: 'happy', t: "Good. You're better at this lying down." },
      { n: "Then she didn't say anything for a while, and he let her not, and she lay there with the phone on the pillow listening to him breathe on the floor of a room four streets away." },
      { s: 'solar', t: "He would've hated this. Calculus. He would've—" },
      { n: "She stopped. She heard herself stop. On the other end of the line, Jungwon didn't ask who." },
      { s: 'jungwon', f: 'neutral', t: "He would've made fun of both of us." },
      { n: "She laughed into her pillow so her parents wouldn't hear, and her eyes went hot, and he read her the next one, *cosine x*, and waited, and she said *minus sine x*, and he said *good*, like nothing had happened, which was how she knew that it had." },
      { bond: { jungwon: 1 } }
    ] },

    { id: 'epi-h-rt-jh-icecream', slot: 'late', after: '12/26', until: '1/7', flags: ['epi-route-jihoon'], place: 'Hanlim · Home', time: 'Late Night', scene: [
      { phone: [
        { from: 'jihoon', t: "Come Outside" },
        { from: 'solar', t: "its 1am" },
        { from: 'jihoon', t: "Correct. Come Outside. I Have A Gift For You. It's Melting" }
      ], contact: 'jihoney' },
      { n: "He was on her front step in the snow with two melon bars from the convenience store, the green ones she liked, in January, at one in the morning, because he was insane and also because she'd once, years ago, at the top of her lungs in a group chat, demanded to know where the fuck her ice cream was, and he had never once let it go." },
      { s: 'jihoon', f: 'happy', t: "Your Ice Cream, Madam. As Is Tradition. Eat It Quickly, It's Cold Out Here And I'm Fragile." },
      { s: 'solar', t: "It's literally colder than the ice cream out here, Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "Then It'll Last Longer. Science. Sit." },
      { n: "They sat on the step with their knees up eating melon bars in the snow, and he talked about nothing, the party, the forum, a video of a cat he'd seen, and then he stopped talking with the stick in his mouth and looked at the street." },
      { s: 'jihoon', f: 'neutral', t: "Nine Days. Without Me. Must Have Been Hell." },
      { s: 'jihoon', f: 'sad', t: "...For You, I Mean. For You. Obviously." },
      { n: "She bumped his shoulder with hers. He bumped back, too hard, so she almost fell off the step, and he caught her by the hood of her coat, and didn't let go of it for a second longer than he needed to." },
      { bond: { jihoon: 1 } }
    ] },

    { id: 'epi-h-rt-council-facts', slot: 'early', after: '12/26', until: '1/7', flags: ['epi-route-council'], place: 'Hanlim · Home · Her Room', time: 'Morning', scene: [
      { n: "Heeseung called at eight in the morning on a holiday, a conference call, three faces in little boxes on her phone and her own face in the corner looking like it had been dug up." },
      { s: 'heeseung', f: 'serious', t: "Retreat facts. Pop quiz. What did we eat on day three." },
      { s: 'solar', t: "Rice?" },
      { s: 'heeseung', f: 'serious', t: "Rice AND radish. Sunoo. What time was the bell." },
      { s: 'sunoo', f: 'flustered', t: "Uh! Four! Four-ish! Was it four? I think there was a bell— Heeseung, I wasn't AT the— I mean I was, I was at the bell, I love that bell—" },
      { s: 'jake', f: 'surprised', t: "Is this a pop quiz on a lie? Is that what's happening right now?" },
      { s: 'heeseung', f: 'serious', t: "Solar. Your mother asks you which temple." },
      { choose: [
        { t: "A small one. On a mountain. You wouldn't know it. No sign.", stat: { charm: 1 }, then: [
          { s: 'heeseung', f: 'happy', t: "Perfect. Unfalsifiable. Ten points." },
          { glitch: { strain: 1 } },
          { n: "Sunoo clapped in his little box. She felt the lie settle into place somewhere under her sternum, neat and square and perfectly unfalsifiable, and sit there." }
        ] },
        { t: "I tell her it's none of her business, I'm eighteen.", stat: { courage: 1 }, then: [
          { s: 'heeseung', f: 'surprised', t: "Zero points. You will be grounded until prom." },
          { s: 'jake', f: 'happy', t: "Respect though." }
        ] }
      ] },
      { bond: { council: 1 } }
    ] }
  );
})();
