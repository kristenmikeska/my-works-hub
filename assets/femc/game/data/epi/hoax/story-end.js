/* HOAX epilogue, story-end.js (writer D): 1/10-1/12, the act's last three days and the final.

   Events
     epi-h-last-paper   1/10 evening (consumes; route jungwon)  his last make-up paper; Mrs. Yang's car at the gate; he fixes her scarf in front of his mother
     epi-h-witness      1/10 evening (consumes; route jihoon)   the arcade; Jihoon admits his joke comment started the tin question and offers to stand up
     epi-h-gym-lights   1/10 evening (consumes; route council)  the council finishes decorating the gym; the tin goes back in the ballot box
     epi-h-hearing      1/11 after (consumes)                   the impeachment hearing in the gym; Chaewon moderates; Do Hayoon; the stat checks; "(Evoke.)"; she flickers in front of everyone
     epi-h-after        1/11 late                               the clip goes round; Mom ("Is this you?"); the pull close; the can goes in her coat pocket
     epi-h-results      1/12 early (consumes)                   results; Jungwon first, Mrs. Yang's one-word text; Solar passes calculus by one point; the last ordinary day
     epi-h-gym          1/12 late (ends: true)                  the final: the gym at midnight, fight 4 (One Second), the pull, Haechan's voice through the bleed, Jungwon holds on

   Flags set
     epi-h-jw-gate (last-paper) · epi-h-jihoon-speaks (witness) · epi-h-gym-done (gym-lights) ·
     epi-h-hearing-charm / -courage / -knowledge / -plain, epi-h-flickered, epi-h-motion-failed (hearing) · epi-h-held (gym)
     local: epi-h-mom-lights / epi-h-mom-truth (after: what she told her mom), epi-h-ask-hold / epi-h-ask-letgo / epi-h-ask-nine
     (gym: what she asked Jungwon before midnight; read later in the same scene)
   Flags read
     epi-route-jungwon / -jihoon / -council (event gates, ifEpiRoute) · epi-h-gym-done · epi-h-jihoon-speaks · epi-h-jw-gate ·
     epi-h-said-name · epi-h-jihoon-remembers · epi-h-jihoon-chose · epi-h-flickered · epi-h-ask-*
   ifYear read
     { xmas: 'jihoon' } (witness: the plush dog) · { rank: { sunoo: 7 } }, { rank: { jay: 7 } }, { rank: { cherry: 7 } } (hearing backing)
   Glitches used
     epi-h-g-evoke (right before the hearing's choice), epi-h-g-hearing + { glitch: { stage: 4 } } (hearing), epi-h-g-gym (before
     fight 4), epi-h-g-pull (the pull); { glitch: { stage: 4 } } at the top of the final; { glitch: { strain: 1 } } after lies that
     hold the cover (hearing charm option, after's "the lights"); { glitch: { near: true } } at the hearing; { ifGlitch } in gym-lights.
   Fight: epi-hoax-4 'One Second' (placeholder, notes from the brief).

   Inventions for Kat to confirm
     - The tin's total: 812,400 won (Heeseung's ledger, Jungwon's count). Sunoo is the one who put it in the ballot box ("it had a lock").
     - Jihoon's comment that started the tin question: in Eunchae's New Year's Eve stream chat, from his alt h_almighty (story-w2.js
       seeds it), "Did They Take The Bake Sale Money To The Temple Too". Do Hayoon picked it up.
     - Do Hayoon: class 2-3, sits two seats behind Sunghoon in the library every lunch since March (he never noticed); she withdraws the motion after the
       flicker ("I wanted something to happen. Something happened.").
     - The charter (knowledge option): Article 4 suspends council business in exam week; Article 9 removes an officer only for a
       council duty missed. Article numbers invented.
     - Make-up results: Jungwon first; Mrs. Yang texts "Good."; Solar's calculus is 61 (a pass by one point).
     - The gym's decorations were "for" nothing anyone remembers; on the council route they re-vote them "for the hearing".
     - The final: Cherry isn't told (Solar couldn't watch her hands go through); Jungwon leaves a note on the kitchen counter saying
       where he went ("not lying about this one"); everyone's hands go through her except Jungwon's, which don't go all the way
       (unexplained); on Jihoon's route Jihoon holds on to Jungwon's coat instead; Jungwon says "…Donghyuck." then "Hyung.";
       Haechan's voice offers to catch her if Jungwon lets go, then, when Jungwon says she picked here, "Then hold on."
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  (R.events ||= []).push(

  // ───────────────────────────────── 1/10, Jungwon's route ─────────────────────────────────
  { id: 'epi-h-last-paper', date: '1/10', slot: 'evening', consumes: true, flag: 'epi-route-jungwon', title: 'the scarf', place: 'Hanlim · School', time: 'Evening', scene: [
    { music: 'epi-h-snow' },
    { n: "The last make-up paper let out at twenty to six, and it was already dark, the kind of January dark that came down at five like somebody had dropped a sheet over the school, and Solar had been sitting on the bench by the shoe lockers for forty minutes with a convenience-store kimbap going cold in her coat pocket, because she'd finished her own last paper at three and had absolutely nowhere better to be." },
    { n: "Outside the glass doors the snow was doing the thing it did now. It came down, perfectly normally, and then about a metre above the front steps it seemed to lose interest and drift back up the way it came, and the first-years had stopped filming it on Tuesday, which was somehow worse than when they'd been filming it." },
    { n: "The exam-room door opened and the third-years came out in ones and twos, gray in the face, and Yang Jungwon came out last, with his pencil case and his coat folded over his arm, with the particular look of a person who'd been aiming at one number all week and had just put the pencil down." },
    { s: 'jungwon', f: 'surprised', t: "You waited." },
    { s: 'solar', t: "You said you'd walk me to the gate. I'm holding you to it. I'm extremely petty." },
    { s: 'jungwon', f: 'neutral', t: "I said that on Monday." },
    { s: 'solar', t: "And I wrote it down. Heeseung's rubbing off on me. How was it?" },
    { s: 'jungwon', f: 'serious', t: "Question nine had a typo in it." },
    { s: 'solar', t: "Did you tell them?" },
    { s: 'jungwon', f: 'neutral', t: "I wrote the correction in the margin and answered both versions." },
    { n: "Of course he had. She looked at him, at the eye bags and the hair falling in his eyes and the way he was holding his coat instead of wearing it, like putting it on was one more task he hadn't gotten to, and she held out the kimbap." },
    { s: 'solar', t: "Did you eat." },
    { s: 'jungwon', f: 'neutral', t: "There was a granola bar." },
    { s: 'solar', t: "Was there, or did you look at one." },
    { s: 'jungwon', f: 'flustered', t: "...I looked at one." },
    { n: "He took the kimbap. He ate it walking, which he disapproved of, in small careful bites, and she made him put the coat on in between them, and they went down the front steps together through the snow that was coming down and the snow that was going back up, and neither of them said anything about it, because it was Wednesday and they'd run out of things to say about it on Monday." },
    { s: 'solar', t: "Did you write your speech? For tomorrow?" },
    { s: 'jungwon', f: 'neutral', t: "I wrote three." },
    { s: 'solar', t: "Of course you did." },
    { s: 'jungwon', f: 'serious', t: "Did you write yours?" },
    { s: 'solar', t: "I'm going to wing it." },
    { n: "He stopped walking. Right there on the path, in the snow, like she'd told him she was going to wing a kidney transplant." },
    { s: 'jungwon', f: 'serious', t: "Sol." },
    { s: 'solar', t: "I'm KIDDING. I have bullet points. I have— I have a bullet point. Singular. It's a strong one." },
    { s: 'jungwon', f: 'neutral', t: "What does it say." },
    { s: 'solar', t: "It says *don't cry*." },
    { n: "The dimple came, just the one, and went again, which was how she knew she'd won." },
    { n: "The car was at the gate." },
    { n: "It was a long dark sedan with its engine running and its headlights on, turning the snow in front of it into static, and Solar knew it the way you know a teacher's footsteps in a hallway. His mom's car. The one he drove, when he was allowed to drive it. Tonight he wasn't driving it." },
    { n: "Jungwon slowed down. Not a lot. Just enough that she felt it, the way you feel a song change key." },
    { s: 'jungwon', f: 'neutral', t: "That's my mother." },
    { n: "The passenger window came down an inch. Not enough to see a face. Enough to let a voice out." },
    { s: 'jwmom', t: "Jungwon." },
    { n: "Just his name, said once, like a bell at the end of a period. The last time Solar had been this close to Mrs. Yang, it had been the bake sale, and his mother had wanted to speak to her, and he'd taken Solar's hand and run." },
    { s: 'jungwon', f: 'neutral', t: "One minute, Mom." },
    { choose: [
      { t: "(Step back. Don't make it worse for him.)", stat: { kindness: 1 }, then: [
        { n: "She took a step back, toward the wall, out of the headlights, to make it easy, to make herself the size of nothing, the way she'd have done for anybody's mom who looked at her like that." },
        { n: "He watched her do it. Something went across his face, quick, and he shook his head at her, very slightly, the way he corrected people." }
      ] },
      { t: "Good evening, Mrs. Yang.", stat: { courage: 1 }, then: [
        { n: "She said it clearly, in the voice she'd use on a principal, and bowed, properly, at the inch of open window, and her heart was going like a rabbit's." },
        { n: "The window didn't answer. It didn't close, either. Jungwon looked at her like she'd just answered both versions of question nine." }
      ] },
      { t: "(Stay exactly where you are.)", then: [
        { n: "She didn't move. She didn't step back, and she didn't step forward, she just stood there in the snow with her scarf coming undone and let Mrs. Yang's headlights look at her, because she was his girlfriend, and girlfriends were allowed to stand on public pavements." }
      ] }
    ] },
    { n: "Her scarf had come loose. One end of it had slid off her shoulder on the steps and was hanging down her front, trailing, the way it always did, because she'd never once in her life tied a scarf that stayed tied." },
    { n: "Jungwon turned around, his back to the car, in the full white light of his mother's headlights, and took his gloves off, and fixed it." },
    { n: "He lifted the loose end and laid it back across, and tucked it, and folded the edge down flat against her collar with two fingers, carefully, the way he'd fold a note he meant to keep, and smoothed it once, and it took four seconds, maybe five, and the engine ran the whole time, and the inch of window stayed open the whole time, and he didn't hurry." },
    { s: 'jungwon', f: 'neutral', t: "It's cold." },
    { n: "That was the whole explanation. That was the only one he gave anybody, then or later." },
    { flag: 'epi-h-jw-gate' },
    { n: "Then he put his gloves back on, and walked to the car, and got in the back, and the window went up, and through the windscreen Mrs. Yang looked at Solar for one long second with a face she couldn't read at all, and then the car pulled away from the gate, slow, the way people drive when they're very angry and very careful." },
    { n: "He didn't turn around in the back seat. She understood that it was so his mother wouldn't see his face in the mirror." },
    { n: "At the corner, he turned around." },
    { phone: [
      { from: 'jungwon', t: "she asked who taught me to tie a scarf like that." },
      { from: 'solar', t: "WHAT DID U SAY" },
      { from: 'jungwon', t: "no one. which is true. i learned it from a diagram." },
      { from: 'solar', t: "ur so romantic i could throw up" },
      { from: 'jungwon', t: "i'm aware." },
      { from: 'jungwon', t: "goodnight, vice president. eat something. i'll know." },
      { from: 'solar', t: "goodnight won~ HSKDJFHSK" }
    ], contact: 'jungwon' }
  ] },

  // ───────────────────────────────── 1/10, Jihoon's route ─────────────────────────────────
  { id: 'epi-h-witness', date: '1/10', slot: 'evening', consumes: true, flag: 'epi-route-jihoon', title: 'concerned citizen', place: 'Hanlim · Arcade', time: 'Evening', scene: [
    { music: 'epi-h-jihoon' },
    { phone: [
      { from: 'jihoon', t: "Arcade. Now. I Have Something Of Grave Importance To Confess" },
      { from: 'jihoon', t: "Also I Need Tokens" },
      { from: 'solar', t: "which one is the real reason" },
      { from: 'jihoon', t: "Both. Bring Cash" }
    ], contact: 'jihoon' },
    { n: "He was at the crane game, of course he was, the one in the back by the broken air-hockey table, feeding it coins with the focus of a man defusing a bomb, in his black coat with his beanie pushed back and his chains clinking every time he slapped the button, and the claw was going down, and the claw was closing, and the claw was opening again an inch above a plush hamburger like it had just remembered something important." },
    { s: 'jihoon', f: 'neutral', t: "Rigged. This Machine Is A Grave Sin. I'm Reporting It To The Forum." },
    { s: 'solar', t: "You'd love that. You love the forum." },
    { ifYear: { xmas: 'jihoon' }, then: [
      { n: "The plush dog with Nana's face was clipped to her bag. He looked at it, the way he'd looked at it every day for three weeks, like it was a thing he'd done once and couldn't believe had worked, and then he looked back at the claw." },
      { s: 'jihoon', f: 'happy', t: "It held for you. Once. You're like a saint to this machine." }
    ] },
    { s: 'solar', t: "Okay. Grave importance. Go." },
    { s: 'jihoon', f: 'neutral', t: "You know the tin thing." },
    { s: 'solar', t: "The tin thing that's getting us impeached tomorrow? I've heard of it, yeah." },
    { s: 'jihoon', f: 'neutral', t: "*Us* is strong. Them. Yang. You're the VP, you're like— collateral. You're a side character in your own impeachment, honestly it's very you." },
    { s: 'solar', t: "Park Jihoon." },
    { n: "He fed the machine another coin. He didn't look at her. The claw went down." },
    { s: 'jihoon', f: 'neutral', t: "That Was Me." },
    { s: 'solar', t: "...What was you." },
    { s: 'jihoon', f: 'happy', t: "New Year's Eve. Eunchae's stream. I have an alt. h_almighty. *Did They Take The Bake Sale Money To The Temple Too.* The whole chat spammed it for ten minutes, Sol. Four hundred people. I've never been so respected." },
    { s: 'jihoon', f: 'neutral', t: "And then some girl I have literally never spoken to in my life made it a whole motion. With *counts*. She did formatting. I was being funny and she did formatting." },
    { n: "He laughed. It was his real laugh, the big stupid one that used to get them kicked out of the library in middle school, and she laughed too, because it was funny, it was extremely funny, it was the funniest thing that had happened since they got back." },
    { n: "Then he stopped." },
    { s: 'jihoon', f: 'sad', t: "And now Yang's going to stand up in front of the whole school and count eight hundred thousand won out loud like a little bank teller, and you're going to have to stand next to him and hold the tin, and that's my fault. That one's actually mine." },
    { s: 'jihoon', f: 'neutral', t: "So I'll stand up tomorrow. I'll say it was me. I'll say I'm a menace to society and a danger to the student body. It's on brand. People will clap." },
    { choose: [
      { t: "You'd do that?", then: [
        { s: 'jihoon', f: 'neutral', t: "Don't say it like that. Like I'm a dog that learned a trick." },
        { s: 'solar', t: "You ARE a dog that learned a trick." },
        { s: 'jihoon', f: 'happy', t: "...Okay, fair, but I'm a very handsome one." }
      ] },
      { t: "They'll eat you alive.", stat: { kindness: 1 }, then: [
        { s: 'jihoon', f: 'neutral', t: "Sol. They've been eating me alive since sophomore year. I'm mostly gristle at this point." },
        { n: "He said it lightly. She heard the floor go out of it anyway, and she didn't say anything, and he didn't make her." }
      ] },
      { t: "(Take the coin out of his hand.)", then: [
        { n: "She took the coin out of his fingers before it reached the slot. He let her. His hand stayed open where the coin had been, for a second longer than it needed to." },
        { s: 'jihoon', f: 'surprised', t: "Thief. Common thief. In a public arcade." }
      ] }
    ] },
    { ifFlag: 'epi-h-jihoon-remembers', then: [
      { s: 'jihoon', f: 'serious', t: "Look. Over there I had a goblin with a club. A big one. It was sick, you saw it. Here I've got a forum account and a big mouth." },
      { s: 'jihoon', f: 'serious', t: "So let me use the big mouth. For once. For something." }
    ], else: [
      { s: 'jihoon', f: 'serious', t: "Look. I've got a forum account and a big mouth. Let me use the big mouth. For once. For something." }
    ] },
    { ifFlag: 'epi-h-jihoon-chose', then: [
      { s: 'jihoon', f: 'neutral', t: "And— the drawer's still a drawer. I'm just saying. I'm not saying a number. I'll say a number when it's one I like." },
      { n: "She didn't ask. He'd tell her when it was a number he liked. That was how they did things, and it had always been how they did things, and it was the first time in a long time it felt like it might work." }
    ] },
    { s: 'solar', t: "Okay." },
    { s: 'jihoon', f: 'surprised', t: "Okay?" },
    { s: 'solar', t: "Okay. Stand up. Be a menace. If Chaewon throws you out I'm not coming with you." },
    { s: 'jihoon', f: 'happy', t: "You would, though." },
    { s: 'solar', t: "...I would, though." },
    { flag: 'epi-h-jihoon-speaks' },
    { n: "He put her coin in the machine. The claw went down over the plush hamburger, and closed, and lifted it, and carried it, wobbling, all the way to the chute, and dropped it a centimetre short, where it sat on the lip of the hole like it was thinking about it." },
    { s: 'jihoon', f: 'neutral', t: "...Yeah. That's about right." }
  ] },

  // ───────────────────────────────── 1/10, the council's route ─────────────────────────────────
  { id: 'epi-h-gym-lights', date: '1/10', slot: 'evening', consumes: true, flag: 'epi-route-council', title: 'for the hearing', place: 'Hanlim · School · Gym', time: 'Evening', scene: [
    { music: 'epi-h-goofy' },
    { n: "Heeseung had gotten the gym key off the advisor by promising, in writing, that she would never again have to hear the word *retreat*, and the advisor had signed it, and handed him the key, and gone home at four-thirty looking like a woman who'd won something." },
    { n: "The balloons were still up from the night they came back. Three weeks old now, blue and silver, gone soft and wrinkled and sagging at half height against the ceiling like they'd given up on being balloons, and somebody, Niki, had drawn a face on one in Sharpie that had faded into an expression of total despair. Half the string lights were out. The ballot box sat on its folding table in front of the stage where somebody had left it, because nobody had ever finished anything in this room." },
    { s: 'jake', f: 'neutral', t: "Okay but genuinely, what was this for. Like originally. Was it the winter formal?" },
    { s: 'heeseung', f: 'serious', t: "There's no winter formal." },
    { s: 'sunoo', f: 'neutral', t: "It was the end-of-term thing!" },
    { s: 'jay', f: 'neutral', t: "What end-of-term thing." },
    { s: 'jungwon', f: 'neutral', t: "It was for announcing the bake sale total." },
    { n: "Nobody believed him. He didn't seem to believe himself. Heeseung flipped back through his clipboard, eleven pages, then twelve, with the expression of a man reading his own handwriting in a language he no longer spoke." },
    { s: 'heeseung', f: 'serious', t: "...It says *gym, decor, TBD*. I underlined TBD twice." },
    { s: 'niki', f: 'happy', t: "So we voted to decorate for nothing. Iconic. Peak council." },
    { s: 'jungwon', f: 'neutral', t: "Then we'll vote again. All in favour of decorating the gym for tomorrow's hearing." },
    { s: 'jake', f: 'happy', t: "We're decorating for our own impeachment?" },
    { s: 'solar', t: "We're decorating for our own *acquittal*, Jake, be positive." },
    { s: 'jake', f: 'happy', t: "Oh, that's so much better. That's a party. Hands up for the acquittal party." },
    { n: "Eight hands went up. Niki put up both, and then one of Sunghoon's, who let him." },
    { place: 'Hanlim · School · Gym', time: 'Evening', soft: true },
    { n: "It took three hours. Jay did the string lights from the top of the tall ladder because Jay was the only one of them who could stand on the top of the tall ladder without making a sound like a kettle, and Sunghoon was supposed to hold the bottom of it and instead stood near it with his hands in his pockets." },
    { s: 'jay', f: 'neutral', t: "Hoon. Hold the ladder." },
    { s: 'sunghoon', f: 'neutral', t: "These hands are insured." },
    { s: 'jay', f: 'neutral', t: "By who." },
    { s: 'sunghoon', f: 'serious', t: "By Park Sunghoon." },
    { n: "Solar held the ladder. Sunghoon told her she had beautiful ladder-holding form, sincerely, and she believed him, which was the problem with Sunghoon." },
    { n: "Niki found the helium tank and read the forum out loud in a voice like a cartoon chipmunk until Heeseung took the tank, and then Niki read it in his own voice, which was somehow more annoying, and Heeseung took his phone, and Niki produced a second phone, and Heeseung looked at the ceiling like he was asking it for strength." },
    { s: 'niki', f: 'happy', t: "*hanlim_accountability has a point tho* — that's an alt. That's an alt of Hayoon's. I can smell it." },
    { s: 'heeseung', f: 'serious', t: "You also have alts." },
    { s: 'niki', f: 'neutral', t: "Mine are for good." },
    { n: "Sunoo had made posters. They were very beautiful posters, hand-lettered, with little drawings of a mountain and a temple and eight small round people with phones in a basket, and they said THE COUNCIL WAS AT A TEMPLE STAY, and under that, smaller, *(it was very nice!!)*" },
    { s: 'heeseung', f: 'serious', t: "Lose the parenthetical." },
    { s: 'sunoo', f: 'sad', t: "But it WAS very nice—" },
    { s: 'heeseung', f: 'serious', t: "Sunoo." },
    { s: 'sunoo', f: 'sad', t: "...Losing the parenthetical." },
    { n: "Jake blew up the new balloons and named every single one of them after a pun he'd been saving, *bal-loon-atics*, *inflation nation*, *pop the question*, until Jay threatened to pop him, and Solar laughed so hard on the floor of the gym that she had to lie down in a pile of silver ribbon and stay there for a while looking up at the lights." },
    { n: "At the end of it Jungwon took out the tin." },
    { n: "Not out of his bag, out of the ballot box: he opened it with the little key he'd kept on his own key ring since the bake sale, and lifted out the dented green tin that had sat in there through exam week and the nine days and the three weeks since, untouched, and set it on the folding table, and counted it, out loud, once, all of it, eight hundred and twelve thousand four hundred won, and Heeseung followed along in the ledger with his finger and nodded at the end, and Jungwon put the tin back in the ballot box and locked it." },
    { s: 'jungwon', f: 'serious', t: "This is where it was. This is where it stays until tomorrow." },
    { s: 'jake', f: 'neutral', t: "Who even put it in the ballot box in the first place?" },
    { n: "Everyone looked at each other. Nobody said anything. Everyone, slowly, looked at Sunoo, and Sunoo looked at the ceiling with the face of a boy who had never lied successfully in his life and was not going to start tonight." },
    { s: 'sunoo', f: 'flustered', t: "...It had a *lock*." },
    { n: "Jay plugged the string lights in." },
    { ifGlitch: 3, then: [
      { n: "For one second every bulb along the bleachers came on green, a flat hard green like a hospital corridor, and the whole gym went quiet, eight people standing in it with their hands full of tape. Then they went gold. Ordinary gold. Christmas gold." },
      { s: 'niki', f: 'neutral', t: "...We're not talking about that." },
      { s: 'heeseung', f: 'serious', t: "We're not talking about that." }
    ] },
    { n: "It looked like it was supposed to. That was the strange part. The lights swung in long gold loops from the rafters to the bleachers and back, and the new balloons hung in blue and silver clusters at the corners, fat and shining, and the old dead ones had been let go in the parking lot by Sunoo with a short speech, and the ballot box sat on its table in the middle of all of it like a little altar, and for a minute nobody did anything except stand in it." },
    { n: "Solar sat down on the bottom row of the bleachers. Jungwon sat down next to her, cross-legged, leaning on his elbows, the way he always sat when he thought nobody was watching, and the gold came down on both of them." },
    { s: 'jungwon', f: 'neutral', t: "It looks finished." },
    { s: 'solar', t: "He would've hated the balloons—" },
    { n: "She stopped. Jungwon didn't look at her. He looked at the lights, and after a while he said what she'd known he'd say, because he always said it." },
    { s: 'jungwon', f: 'neutral', t: "It's alright." },
    { flag: 'epi-h-gym-done' },
    { n: "Up in the rafters one of the new balloons came loose and drifted, very slowly, toward the high dark windows, where the snow outside was going up too." }
  ] },

  // ───────────────────────────────── 1/11, the hearing ─────────────────────────────────
  { id: 'epi-h-hearing', date: '1/11', slot: 'after', consumes: true, title: 'the hearing', place: 'Hanlim · School · Gym', time: 'After School', scene: [
    { music: 'epi-h-hearing' },
    { n: "Hanlim had never had an impeachment hearing before, which was the first thing Chaewon said into the microphone, and the second thing was that it would therefore be run properly, and the third thing, when the bleachers didn't quiet down, was nothing at all. She just stood at the podium with her hands folded on her index cards and waited, perfectly still, until every single person in the gym was a little bit afraid of her, which took about eleven seconds." },
    { s: 'chaewon', t: "Thank you." },
    { ifFlag: 'epi-h-gym-done', then: [
      { n: "The gym looked finished. Gold lights in long loops from the rafters, blue and silver balloons in the corners, Sunoo's posters on the wall without the parenthetical, and the ballot box on its own table in front of the stage like an exhibit in a museum, with the whole school looking at it." }
    ], else: [
      { n: "The decorations from the night they came back were still up, three weeks dead, the blue and silver balloons gone soft and hanging at half height, half the string lights out, one balloon with a Sharpie face that had faded into despair, and the ballot box on its folding table in front of the stage, where somebody had left it, because nobody ever finished anything in here." }
    ] },
    { n: "The whole school was in the bleachers. The first-years at the top, the third-years at the bottom where they could leave first, teachers along the walls with their arms crossed and their faces arranged into neutrality, the principal by the doors pretending to be on her phone. The folding chairs from assembly were out in rows on the floor, and every one of them was taken." },
    { n: "Up on the wall above the scoreboard the gym clock said 12:00. It had said 12:00 since that morning. Facilities had been told. Nobody looked at it anymore." },
    { n: "Front row center, with her phone on a little gimbal and a ring light clipped to it that was technically against at least three rules, Eunchae was live." },
    { s: 'eunchae', t: "We are LIVE, chat. We are so back. Chaewon has index cards. *Chaewon has index cards.* This is the most important day in Hanlim history and I'm wearing my lucky socks." },
    { s: 'stream', t: "chaewon would impeach god" },
    { s: 'stream', t: "WHERE IS THE TIN" },
    { s: 'stream', t: "frame 214 truthers we RISE" },
    { n: "The council sat at a long table on the left side of the floor. Solar sat in the middle of it because she was the vice president and the vice president sat in the middle, between Jungwon with his folder of three speeches and Heeseung with his ledger open to a page he'd tabbed in four colours. Sunoo already had a tissue. Jake had a bag of chips until Heeseung took it. Jay had his arms crossed, which was his whole statement. Niki was waving at people in the bleachers. Sunghoon was winking at people in the bleachers, which was how about a third of the bleachers had come." },
    { n: "Over at the old table's end of the bleachers, the crew had taken a whole row. Cherry with her boots up on the seat in front, Asahi with his hood up, Junkyu holding a sign that said #TEAMSOLAR in glitter, Jaehyuk holding the other end of it because Junkyu had asked, Hyunsuk not holding anything. And Jihoon, sitting dead center like a man at the theatre who'd paid for the good seats." },
    { ifFlag: 'epi-h-jw-gate', then: [
      { n: "Under the table, Jungwon's knee was against hers. He'd fixed her scarf again that morning at the gate, without a word, like it was a thing he did now. She could still feel where he'd folded it." }
    ] },
    { glitch: { near: true } },
    { s: 'chaewon', t: "This hearing is on the motion filed Monday by the forum account hanlim_accountability. Would the filer please come forward." },
    { n: "Nobody moved. The whole gym looked around. Somebody at the top of the bleachers yelled *it's Niki*, and Niki stood up and bowed, and Heeseung pulled him back down by his blazer." },
    { n: "Then a girl in the fourth row of the second-years stood up. She was small and neat, with her blazer buttoned all the way and a lanyard of pens around her neck like a necklace, and she walked down the steps and across the gym floor and sat in the single chair on the right side of the floor, opposite the council table, and opened a plastic folder, and looked up." },
    { n: "Nobody at the council table knew who she was. You could watch it go down the table, face by face, like a wave at a ballgame. Sunghoon, who knew every girl in school, looked at her the way a man looks at a step that isn't where it was yesterday." },
    { s: 'sunghoon', f: 'surprised', t: "...Who." },
    { s: 'hayoon', t: "Do Hayoon. 2-3. I sit two seats behind you in the library. Every lunch." },
    { s: 'sunghoon', f: 'surprised', t: "Since *when*?" },
    { s: 'hayoon', t: "March." },
    { n: "From the bleachers came a laugh Solar would have known in any world, big and stupid and delighted, the laugh of Park Jihoon having the time of his life." },
    { s: 'jihoon', f: 'happy', t: "I LOVE her." },
    { s: 'chaewon', t: "Park Jihoon, you are not a party to this hearing." },
    { s: 'jihoon', f: 'happy', t: "I'm a party to every hearing. Spiritually." },
    { s: 'chaewon', t: "Then spiritually be quiet." },
    { n: "He was quiet. He was grinning like a dog with a sock, but he was quiet. Chaewon nodded at Hayoon, and Hayoon stood, and read from her folder in a clear flat voice that didn't shake at all." },
    { s: 'hayoon', t: "A motion to remove the student council president, Yang Jungwon, and the student council vice president, Kim Solar, from office." },
    { s: 'hayoon', t: "Count one. Dereliction. In exam week the council left school, on a retreat that was never approved, during the most important week of the term, and for nine days nobody could reach any of them." },
    { s: 'hayoon', t: "Count two." },
    { n: "She took a breath. You could hear the whole gym take one with her." },
    { s: 'hayoon', t: "Where is the bake-sale tin." },
    { n: "The gym lost its mind. Somebody started chanting *WHERE IS THE TIN*, and it caught, and the first-years stamped it on the bleachers, and Eunchae turned her phone on herself and screamed silently into it, and Chaewon stood at the podium with her hands folded on her index cards and waited. Eleven seconds." },
    { s: 'chaewon', t: "Thank you. We'll take count two first, since it's the one with a number in it. Mr. President." },
    { n: "Jungwon stood up." },
    { n: "And his voice changed. She'd forgotten, a little, over there, how it did that, how the boy who talked like a grandmother and typed in full sentences and said *Did you eat* like it was a question on an exam could stand up in front of a room and turn into somebody bright and booming and easy, somebody you'd vote for. It was like watching somebody switch on the lights in a house." },
    { s: 'jungwon', f: 'happy', t: "Thank you, Chaewon. And thank you, Hayoon. It's a good question. It's the right question. If I'd been in the bleachers, I'd have asked it too." },
    { n: "He nodded at Heeseung. Heeseung stood up with the ledger. Jungwon walked across the gym floor, past the folding chairs and the whole school, to the ballot box on its table, and took a small key out of his blazer pocket, and unlocked it, and lifted out a dented green cash tin with a strip of masking tape on the lid that said BAKE SALE in Sunoo's handwriting, and carried it back and set it down on the council table, in front of Solar." },
    { s: 'jungwon', f: 'neutral', t: "The bake sale raised eight hundred and twelve thousand, four hundred won." },
    { s: 'heeseung', f: 'serious', t: "Eight hundred and twelve thousand, four hundred won." },
    { n: "And Yang Jungwon counted it. In front of everybody. Out loud." },
    { n: "It took a long time. Ten-thousand notes, then thousands, then the coins, stacked, in rows, on the council table, his voice carrying every number to the back of the gym, and about a minute in Niki started drumming softly on the council table under the count, and Jake joined him, and then the first-years did, until the whole gym was a drumroll and Jungwon was counting over it in his speech voice like a game-show host, and Eunchae was whispering into her phone like a golf commentator, and Solar had her hand over her mouth." },
    { s: 'jungwon', f: 'happy', t: "...Eight hundred and twelve thousand, four hundred." },
    { s: 'heeseung', f: 'happy', t: "Matches." },
    { s: 'jungwon', f: 'neutral', t: "Every won. It was in the ballot box. In this gym. The whole time." },
    { s: 'hayoon', t: "...Who put it in a *ballot box*?" },
    { n: "Every member of the council looked at every other member of the council. The bleachers held their breath. Slowly, with the face of a boy walking to his own execution, Sunoo raised his hand." },
    { s: 'sunoo', f: 'flustered', t: "It had a lock." },
    { n: "The gym fell apart laughing. Even Chaewon's mouth did something at one corner, briefly, before she put it back." },
    { s: 'chaewon', t: "Count two is answered. Count one." },
    { s: 'chaewon', t: "Dereliction. The council left during exam week. Madam Vice President, you left first. You'll answer it." },
    { n: "Every head in the gym turned to her." },
    { n: "Solar looked down at her index card. It had one bullet point on it, and it said *don't cry*, and under that, in Jungwon's handwriting, very small, from when she'd left it on his desk last week, *you'll be fine. eat breakfast.*" },
    { n: "She stood up. Her chair made a terrible noise on the gym floor. The gold lights hummed. Above the scoreboard the clock said 12:00, the way it had all day, and she looked at it, and something at the edge of her eyes went faintly, faintly green, like a television left on in another room." },
    { cg: 'epi-h-hearing' },
    { glitch: 'epi-h-g-evoke' },
    { choose: [
      { t: "Make them laugh. Tell them about the temple.", needs: { charm: 3 }, flag: 'epi-h-hearing-charm', then: [
        { s: 'solar', t: "Okay. Okay. You want to know where we were? You want the truth? You want *part five*?" },
        { n: "The gym roared. She let it. She was good at this. She'd always been good at this, at a room, at a stage, at making two hundred people feel like they were in on something with her." },
        { s: 'solar', t: "A temple. In Gangwon-do. They take your phone at the gate in a little basket, it's very spiritual. Niki had two phones. They took both. He cried. There's a bell at four in the morning. FOUR. The food is radish. Every meal. Radish in a bowl. Radish in soup. Jake bowed to a statue for five minutes and it turned out to be a monk." },
        { s: 'jake', f: 'happy', t: "He had a very still face!" },
        { s: 'stream', t: "MONK JAKE" },
        { s: 'stream', t: "radish arc" },
        { glitch: { strain: 1 } },
        { n: "The lie sat in her mouth like a coin. She kept smiling around it." },
        { s: 'solar', t: "And it wasn't approved. That part's true. That's on us. But we came back, and we're sitting every exam we missed, and I'm going to fail calculus in front of all of you on Friday, so honestly, haven't I suffered enough?" },
        { n: "They laughed. They clapped. Somewhere in the bleachers somebody yelled *VP FOR PRESIDENT*, and Jungwon, beside her, looked at the table with the dimple out, the deep one, the one he couldn't help." },
        { s: 'chaewon', t: "...The council's attendance isn't disputed. Whether it was approved is. But it's noted." }
      ] },
      { t: "Take it. All of it.", needs: { courage: 3 }, flag: 'epi-h-hearing-courage', then: [
        { s: 'solar', t: "It was me." },
        { n: "The gym quieted. Not all at once. In waves, from the floor up." },
        { s: 'solar', t: "I went first. Everybody knows I went first. Monday, in exam week, I was gone, and everyone at this table came after me, because that's what they do. They come after people. That's the whole council. That's all it's ever been." },
        { s: 'solar', t: "So if you want someone off the council for exam week, take me. Leave him. He's never missed anything in his life. He missed this because of me." },
        { n: "Beside her Jungwon had gone very, very still, the stillness of a boy who'd just watched someone step in front of a car." },
        { s: 'chaewon', t: "That isn't how motions work, Kim Solar." },
        { s: 'solar', t: "Then amend it." },
        { n: "Hayoon looked at her for a long time across the gym floor. It was the first time anyone on the council had looked back at her, and Solar watched her notice it." }
      ] },
      { t: "Read them the charter.", needs: { knowledge: 3 }, flag: 'epi-h-hearing-knowledge', then: [
        { n: "She'd read it. All of it. Tuesday at two in the morning, in bed, with Nana on her feet and Jungwon's yellow highlighter, which she'd stolen, because if she was going to get impeached she was going to get impeached *correctly*." },
        { s: 'solar', t: "Student council charter. Article nine. An officer may be removed for failure to perform the duties of their office. The duties are in article nine, section one. Exams aren't on the list." },
        { s: 'solar', t: "Article four. Council business is suspended during exam week. There were no council duties in exam week. There was nothing for us to fail to do. We missed exams, and we're sitting every one of them, and Jungwon's going to come first, and I'm going to pass calculus by the skin of my teeth, but none of that is the council." },
        { s: 'solar', t: "The motion's out of order." },
        { n: "Chaewon turned over an index card. She had a copy of the charter under it, of course she did, and she read it with one finger moving down the page, and the whole gym watched her finger." },
        { s: 'chaewon', t: "...She's right." },
        { n: "Jungwon looked up at Solar from his chair with an expression she'd only ever seen on him at math competitions, right before he won one. Under the table his hand found her wrist and squeezed, once, hard." }
      ] },
      { t: "We were gone. We came back. That's what I've got.", flag: 'epi-h-hearing-plain', then: [
        { s: 'solar', t: "I don't have a speech. He has three. I have—" },
        { n: "She looked at the bleachers. At two hundred faces. At the row of her friends, and the glitter sign." },
        { s: 'solar', t: "We were gone. And we came back. And we're here, and we're sitting the exams, and the tin was in the box. That's it. That's what I've got." },
        { n: "It landed small. She felt it land small, like a coin dropped in a big room. Chaewon wrote something on an index card." },
        { s: 'chaewon', t: "Noted." },
        { n: "Then somebody in the bleachers clapped. Just one person, slow and loud and alone. It was Junkyu, standing up with half the glitter sign, and then Jaehyuk with the other half, and then Cherry, and then all of them, the whole old table on its feet, clapping for the smallest speech in Hanlim history like it was the Gettysburg Address." }
      ] }
    ] },
    { ifYear: { rank: { sunoo: 7 } }, then: [
      { n: "Sunoo stood up. Nobody had asked him to. He stood with the tissue crushed in one hand and his face already pink, and the whole council turned to look at him in horror, because Kim Sunoo had never in his life told a lie that held." },
      { s: 'sunoo', f: 'sad', t: "She was with us. The whole time. Every day she was gone, she was— we were with her. Every day." },
      { n: "His voice cracked on the last word. The gym went quiet. Everybody at Hanlim knew Sunoo couldn't lie, which meant that whatever that had been, it read like the truest thing anyone had said all day. It was." }
    ], else: [
      { n: "Sunoo nodded very hard at everything she said, with the tissue at his nose, like a boy at a wedding." }
    ] },
    { ifYear: { rank: { jay: 7 } }, then: [
      { s: 'jay', f: 'neutral', t: "Football team. Stand up." },
      { n: "Half the bleachers stood up, mostly confused, a lot of them still holding their phones." },
      { s: 'jay', f: 'neutral', t: "That's who's voting no." },
      { s: 'chaewon', t: "There's no vote from the bleachers, Park Jay." },
      { s: 'jay', f: 'neutral', t: "There is now." }
    ], else: [
      { s: 'jay', f: 'neutral', t: "Yeah. What she said." }
    ] },
    { ifYear: { rank: { cherry: 7 } }, then: [
      { s: 'cherry', f: 'serious', t: "IF ANYONE VOTES YES I WILL FIND YOU." },
      { s: 'chaewon', t: "Kim Cherry." },
      { s: 'cherry', f: 'neutral', t: "Sorry. If anyone votes yes I will find you, *respectfully*." }
    ] },
    { ifEpiRoute: 'jihoon', then: [
      { ifFlag: 'epi-h-jihoon-speaks', then: [
        { s: 'jihoon', f: 'neutral', t: "Point of order." },
        { s: 'chaewon', t: "You don't have a—" },
        { s: 'jihoon', f: 'neutral', t: "I started it." },
        { n: "He came down the bleachers two at a time with his chains clinking, onto the gym floor, into the space between the council table and Hayoon's chair, and stood there in the gold lights in his black coat in front of the entire school, and spread his arms like a man presenting himself for arrest." },
        { s: 'jihoon', f: 'happy', t: "The tin thing. That Was Me. h_almighty, New Year's Eve, *Did They Take The Bake Sale Money To The Temple Too.* I Was Being Funny. I'm Very Funny. And Hayoon here is the only person in eighteen years who's ever taken me seriously, and frankly, Hayoon, I'm moved." },
        { s: 'hayoon', t: "...You're welcome?" },
        { n: "The gym laughed. He let it. Then he turned around, away from the bleachers, and looked at Solar, and the joke went out of his face like a light off." },
        { s: 'jihoon', f: 'serious', t: "She didn't skip anything. She was somewhere none of you would've lasted a day, and she came back. For this. For a fucking *gym*. Respect it." },
        { s: 'chaewon', t: "Language." },
        { s: 'jihoon', f: 'neutral', t: "Respect it, *please*." },
        { n: "He went back up the bleachers. Solar's throat had closed up so tight she couldn't have said a word if Chaewon had paid her. Beside her, Jungwon was watching Jihoon climb, with the face of a boy reassessing a problem he'd thought he'd already solved." }
      ] }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Jungwon stood up again. He left the folder on the table. None of the three speeches in it were the one he gave." },
      { s: 'jungwon', f: 'serious', t: "I've been president for two years. I've never missed a meeting. Or a competition. Or a deadline. I missed exam week." },
      { s: 'jungwon', f: 'serious', t: "I'd do it again." },
      { s: 'hayoon', t: "Why?" },
      { s: 'jungwon', f: 'neutral', t: "Because where she was, I went. That's the whole retreat." },
      { n: "The gym made a noise like a stadium when a ball goes over a fence, a long rising *ooooh*, and somebody at the top of the bleachers screamed, and Jake, at the end of the table, cupped his hands around his mouth." },
      { s: 'jake', f: 'happy', t: "JOLAR!!!" },
      { s: 'chaewon', t: "Jake." },
      { n: "Jungwon sat down. His ears had gone red all the way to the tips. He didn't look at her. Under the table he held her hand, in front of nobody, very hard." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "Heeseung stood up first, with the ledger under his arm, and came around behind her chair and stood there. Then Jake. Then Jay, arms still crossed. Then Niki, who stopped waving. Then Sunghoon, who stopped winking. Then Sunoo, with the tissue. Then Jungwon, last, at her shoulder." },
      { n: "Seven of them, standing behind the vice president's chair, not saying anything, in the gym they'd finished themselves, under lights they'd hung from a ladder Sunghoon refused to hold. Nobody had planned it. Nobody needed to. It was the council, and the council was all it had ever been." }
    ] },
    { s: 'chaewon', t: "Does the filer wish to proceed to a vote?" },
    { n: "Hayoon opened her mouth." },
    { glitch: { stage: 4 } },
    { cg: null },
    { glitch: 'epi-h-g-hearing' },
    { music: 'epi-h-dread' },
    { n: "It started in her hands." },
    { n: "She was still standing, and she looked down, and she could see the table through her fingers. The grain of it. The masking tape on the tin. And then every bulb in the gym dropped a shade, all at once, the gold going thin and green like light through a bottle, and above the scoreboard the clock that said 12:00 blazed suddenly bright, and Solar Kim went thin in front of the entire school." },
    { n: "Two seconds. Maybe three. Two hundred people watched the bleachers through her. They watched the ballot box through her. They watched the outline of a girl held in a flat green light like a photograph left in the sun, and behind her, inside her, faint as a reflection in a window at night, a long hallway that wasn't Hanlim's, and a moon in it far too large." },
    { n: "Then she was back. Solid. Standing at the council table with her index card in her hand, and her hand was a hand again, and the lights were gold." },
    { n: "Nobody in the gym made a sound." },
    { n: "Eunchae's phone was pointed straight at her." },
    { s: 'stream', t: "WHAT" },
    { s: 'stream', t: "WHAT WAS THAT" },
    { s: 'stream', t: "frame 214 IRL" },
    { s: 'stream', t: "CGI?? on a LIVE??" },
    { s: 'stream', t: "ghost vp ghost vp ghost vp" },
    { flag: 'epi-h-flickered' },
    { n: "Jungwon's hand was around her wrist. She didn't know when he'd taken it. He was holding it the way you'd hold someone at the edge of a platform." },
    { n: "Up in the crew's row, Jihoon was looking straight at her." },
    { ifEpiRoute: 'jihoon', then: [
      { n: "He didn't look away. He didn't pretend. He just sat there in the front of the crew's row with his whole face open, and she watched him decide not to pretend, and she watched what it cost him." }
    ], else: [
      { n: "Then he looked at the ceiling, at the balloons, at anything, with the bored face of a boy who hadn't seen a thing in his life, and she knew him well enough to know what the bored face was for." }
    ] },
    { n: "Chaewon stood at the podium in the silence for a long time. Then she said, in the most adult voice anyone had ever heard come out of a student," },
    { s: 'chaewon', t: "...Facilities will look at the lights." },
    { n: "Hayoon was still standing. She'd been standing the whole time. She looked at her folder, and then at Solar, and she had a strange, almost peaceful look on her face, like a girl who'd thrown a coin in a fountain and watched the fountain throw it back." },
    { s: 'hayoon', t: "I withdraw the motion." },
    { s: 'chaewon', t: "On what grounds?" },
    { s: 'hayoon', t: "I wanted something to happen." },
    { n: "She looked at Solar." },
    { s: 'hayoon', t: "Something happened." },
    { n: "She sat down." },
    { flag: 'epi-h-motion-failed' },
    { s: 'chaewon', t: "The motion is withdrawn. The tin is accounted for. This hearing is closed. Please leave the gym in an orderly fashion." },
    { s: 'chaewon', t: "...You won't." },
    { music: 'epi-h-goofy' },
    { n: "They didn't. The bleachers came down onto the floor like a wave breaking, and the council table was gone under it, and Solar was gone under it, and Cherry came through the crowd like a girl clearing a dance floor with her boots and got both arms around Solar's neck from behind and hung there." },
    { s: 'cherry', f: 'serious', t: "You stupid bitch. You stupid, stupid— in front of EVERYONE? I'm going to kill you. I love you. I'm going to kill you." },
    { s: 'asahi', f: 'neutral', t: "You literally glitched. No one cares." },
    { s: 'junkyu', f: 'sad', t: "Asahi CARES." },
    { s: 'asahi', f: 'neutral', t: "...I care a little." },
    { ifEpiRoute: 'jihoon', then: [
      { s: 'jihoon', f: 'serious', t: "Sol. Hey. Hey. Look at me. You're here. You're— okay. You're here." }
    ], else: [
      { s: 'jihoon', f: 'happy', t: "That Was Sick. Do It Again. For The Fans." }
    ] },
    { s: 'kazuha', t: "I told you. I told *everyone*. Nobody listens to me about ghosts." },
    { s: 'eunchae', t: "Sunbae— Solar-sunbae, can I just get a quick statement for the—" },
    { s: 'heeseung', f: 'serious', t: "No statements." },
    { n: "Through all of it Jungwon didn't let go of her wrist. Not when Cherry hugged her, not when the crowd pushed, not when Jake tried to lift her onto his shoulders and Heeseung stopped him. He held on until the gym was empty, and the principal had gone, and the lights hummed gold over the folding chairs, and the clock above the scoreboard said 12:00, and it was just the two of them standing by the ballot box." },
    { s: 'jungwon', f: 'serious', t: "It's getting worse." },
    { s: 'solar', t: "I know." },
    { s: 'jungwon', f: 'serious', t: "...Tomorrow?" },
    { n: "She didn't answer. That was the answer. He knew it was, and he didn't make her say it, the way he never made her say anything, and he stood there holding her wrist in the empty gym like the floor might go out from under it." }
  ] },

  // ───────────────────────────────── 1/11 late ─────────────────────────────────
  { id: 'epi-h-after', date: '1/11', slot: 'late', title: 'ghost vp', place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
    { music: 'epi-h-dread' },
    { n: "By nine o'clock the clip had a hundred thousand views. By ten somebody had slowed it down and put reverb on it. By eleven there was a version with the vine boom and a slow zoom on her face, and a version stitched next to frame 214 from Eunchae's New Year's stream, side by side, the same green, and a version set to a sad piano song that had made at least one first-year cry in the comments." },
    { s: 'forum', t: "[Hanlim Forum] THE VP GLITCHED ON LIVE (part 1) · 2,412 replies" },
    { s: 'stream', t: "its CGI. eunchae has a filter. its obviously CGI" },
    { s: 'stream', t: "eunchae literally cannot edit she uses capcut on her phone" },
    { s: 'stream', t: "ghost vp i would die for u" },
    { s: 'stream', t: "the council was NOT at a temple" },
    { n: "Solar lay on her back in bed with her phone held over her face and Nana's whole weight on her feet, scrolling, with her thumb, past herself going thin over and over and over, from every angle, like a girl watching footage of a car crash she'd walked away from." },
    { n: "There was a knock on her door. Two knocks. Her mom's knock." },
    { n: "Her mom came in without waiting, in her robe, with her own phone in her hand, and sat down on the edge of the bed, and held it out. It was paused. It was paused on the exact frame, the one everybody had screenshotted, where you could see the gym bleachers through her daughter's chest." },
    { s: 'mom', t: "Is this you?" },
    { choose: [
      { t: "It's the lights. Facilities is looking at them.", flag: 'epi-h-mom-lights', then: [
        { s: 'mom', t: "Facilities." },
        { s: 'solar', t: "That's what Chaewon said. The debate captain. She's very— she's basically an adult." },
        { glitch: { strain: 1 } },
        { n: "Her mom looked at her for a long time. The same look as the night she came home. *A retreat? In exam week?*" },
        { s: 'dad', t: "It's a filter. The kids use filters." },
        { n: "Her dad, from the hallway, where he'd clearly been standing the whole time." },
        { s: 'mom', t: "It's not a filter." },
        { n: "But she didn't say anything else. She put the phone face down on the duvet, and smoothed Solar's hair back off her forehead the way she used to when Solar was little and had a fever, and her hand stayed there." }
      ] },
      { t: "...Yeah. It's me.", flag: 'epi-h-mom-truth', stat: { courage: 1 }, then: [
        { n: "Her mom didn't say anything. She put the phone face down on the duvet, and put her hand flat on Solar's cheek, the way she used to check for a fever, and held it there." },
        { s: 'mom', t: "You're warm." },
        { s: 'solar', t: "I'm warm." },
        { s: 'mom', t: "Okay." },
        { n: "That was all. Okay. Her mom, who never once in her life had let anything go, who had asked about the retreat four times and was going to ask a fifth, sat there with her hand on her daughter's face and didn't ask." },
        { s: 'mom', t: "Then you tell me when you can tell me." }
      ] },
      { t: "Mom. Have you seen how many views I have.", then: [
        { s: 'mom', t: "Solar." },
        { s: 'solar', t: "A hundred thousand. I'm famous. I'm a ghost and I'm famous." },
        { n: "Her mom didn't laugh. She put the phone face down on the duvet and looked at Solar until Solar stopped smiling, which didn't take long, and then she just sat there, which was worse than any question." }
      ] }
    ] },
    { n: "When her mom had gone, and the hall light under the door had gone, she picked the phone back up." },
    { ifEpiRoute: 'jungwon', then: [
      { n: "He called at eleven-forty, which he wasn't allowed to do. His phone was supposed to be on the kitchen counter by ten. He was whispering." },
      { s: 'jungwon', f: 'serious', t: "Did you see it?" },
      { s: 'solar', t: "Everyone saw it. My *mom* saw it." },
      { s: 'jungwon', f: 'serious', t: "I meant— did you see it. From the inside." },
      { n: "She was quiet for a while." },
      { s: 'solar', t: "...There was a hallway. And a moon. Too big." },
      { n: "He didn't say anything. She could hear him breathing, and a clock somewhere in his very quiet house, and then the clock stopped, and they both heard it stop." },
      { s: 'jungwon', f: 'neutral', t: "Stay on the phone." },
      { s: 'solar', t: "You'll get caught." },
      { s: 'jungwon', f: 'neutral', t: "Stay on the phone, Sol." }
    ] },
    { ifEpiRoute: 'jihoon', then: [
      { phone: [
        { from: 'jihoon', t: "Saw It" },
        { from: 'jihoon', t: "Was Not Surprised" },
        { from: 'jihoon', t: "Am Outside" },
        { from: 'solar', t: "come UP" },
        { from: 'jihoon', t: "No. Your Mom Will Make Me Eat Something And I Will Cry Into It" },
        { from: 'jihoon', t: "Go To Sleep. I'll Leave When Your Light's Off" }
      ], contact: 'jihoon' },
      { n: "She went to the window. His car was parked at the curb under the streetlight with its headlights off, the snow going up past it, and he was in the driver's seat with his beanie on, and when he saw her at the glass he lifted one hand off the steering wheel, two fingers, and didn't do anything else." },
      { n: "She turned the light off. The car didn't leave. She watched it not leave for a long time." }
    ] },
    { ifEpiRoute: 'council', then: [
      { phone: [
        { from: 'sunoo', t: "are you ok??? halmeoni says to put salt in your shoes" },
        { from: 'sunoo', t: "i dont know why. please put salt in your shoes" },
        { from: 'solar', t: "sunoo its 11pm" },
        { from: 'sunoo', t: "SALT. SHOES." }
      ], contact: 'sunoo' },
      { phone: [
        { from: 'niki', t: "ghost vp is trending LMAOOO" },
        { from: 'niki', t: "fr tho r u ok" },
        { from: 'niki', t: "-skull-" },
        { from: 'niki', t: "heeseung says we're not discussing it in writing. so i'm discussing it in writing" }
      ], contact: 'niki' },
      { phone: [
        { from: 'jungwon', t: "tomorrow." },
        { from: 'solar', t: "i know." },
        { from: 'jungwon', t: "we'll all be there." }
      ], contact: 'jungwon' }
    ] },
    { n: "She got up to close the curtains." },
    { n: "Outside the snow was going up. All of it now, not just above the steps; the whole sky of it streaming upward past the streetlight, slow and steady and silent, like the world was being poured back into the bottle it came from. She put her hand on the windowsill." },
    { n: "She could see the wood grain through her knuckles." },
    { n: "Only for a second. Then it was her hand again, and she took it off the sill and held it against her chest and stood there until her heart stopped going so fast, and then she turned around, and the can was on her desk." },
    { n: "Pink and black. The logo like claw marks. Cold, always cold, no matter how long it sat in a warm room, which she'd stopped thinking about weeks ago. She picked it up without deciding to. She put it in the left pocket of her coat on the back of the door, without deciding to, and zipped the pocket, and stood there with her hand on it." },
    { n: "Then she got back into bed. Nana climbed up after her, all of him, and lay down across her legs like a sandbag, and put his big head on her stomach, and whined, very softly, at the empty air above the bed, where there was nothing at all." }
  ] },

  // ───────────────────────────────── 1/12 morning ─────────────────────────────────
  { id: 'epi-h-results', date: '1/12', slot: 'early', consumes: true, title: 'sixty-one', place: 'Hanlim · School', time: 'Morning', scene: [
    { music: 'epi-h-exam' },
    { n: "They put the make-up results up on the board outside the staff room at eight, a list taped to the corkboard by student number, and by five past there was a crowd in front of it six deep, all the kids who'd missed exam week for flu and funerals and family trips and one leadership temple stay in Gangwon-do, all of them pushing, and Solar couldn't see a thing because she was the height she was." },
    { n: "The hallway clock above the board said 12:00. They'd all stopped mentioning it. Outside the windows the snow was going up, all of it, steadily, and a first-year by the stairs had her face pressed to the glass watching it with her mouth open, and nobody told her to move." },
    { s: 'jaehyuk', f: 'neutral', t: "You passed." },
    { n: "Jaehyuk, already at the front of the crowd, because Jaehyuk was always already at the front, turning around with his finger still on the list." },
    { s: 'solar', t: "I *passed*?" },
    { s: 'jaehyuk', f: 'neutral', t: "Calculus. Sixty-one." },
    { s: 'solar', t: "Is that good?" },
    { s: 'jaehyuk', f: 'neutral', t: "It's sixty-one." },
    { s: 'junkyu', f: 'happy', t: "SHE PASSED!!! SOLAR PASSED!!!" },
    { n: "Junkyu picked her up. Entirely. Off the floor, around the middle, and spun her once in the hallway like a girl at the end of a movie, and put her down facing the wrong way, directly in front of Ms. Miyawaki, who was coming out of the staff room with a coffee and a stack of papers." },
    { s: 'sakura', t: "Kim Solar. Sixty-one." },
    { s: 'solar', t: "...Yes, miss." },
    { s: 'sakura', t: "I watched you guess on question four. You looked at the ceiling for a full minute and then you just went for it." },
    { s: 'sakura', t: "Clutch." },
    { n: "She walked off down the hallway, sipping her coffee. Solar watched her go with something like love." },
    { n: "Jungwon was standing at the side of the crowd, not pushing, reading the list the way he'd read a weather report. His name was at the top of the other sheet. The overall one. It just said *1. YANG JUNGWON*, in the same font as everyone else, like it was nothing." },
    { s: 'solar', t: "Won. Won. You're FIRST." },
    { s: 'jungwon', f: 'neutral', t: "I know." },
    { n: "His phone buzzed in his hand. He looked at it. She saw the name. *Mom.* She saw the message, because he didn't angle the phone away, which she understood, later, was on purpose." },
    { n: "It said *Good.* With the period." },
    { n: "He put the phone in his blazer pocket. His face didn't do anything at all." },
    { s: 'solar', t: "That's it?" },
    { s: 'jungwon', f: 'neutral', t: "That's a lot, for her." },
    { choose: [
      { t: "I'm so proud of you, Won.", stat: { kindness: 1 }, then: [
        { n: "He looked at her. The dimple came, the deep one, and stayed, and his ears went pink, in the middle of the hallway, in front of the whole make-up list." },
        { s: 'jungwon', f: 'flustered', t: "...Thank you. Thank you, Sol." }
      ] },
      { t: "(Put your hand in his blazer pocket, over the phone.)", then: [
        { n: "She put her hand in his blazer pocket, over the phone, over the one word, and left it there. He didn't move. After a while he put his hand in the pocket too, on top of hers." }
      ] },
      { t: "Sixty-one, baby.", stat: { charm: 1 }, then: [
        { s: 'jungwon', f: 'neutral', t: "You got question four wrong." },
        { s: 'solar', t: "How do you KNOW that?" },
        { s: 'jungwon', f: 'happy', t: "Because I know which one you'd guess." }
      ] }
    ] },
    { place: 'Hanlim · School', time: 'Daytime', soft: true },
    { n: "It was the last ordinary day. Nobody said so. Everybody knew." },
    { n: "Everybody was careful with her. That was how she could tell. Kazuha left a little paper dish of salt on the corner of her desk in homeroom and bowed to it before she sat down. Hyunsuk, who hadn't shared a lunch with anyone since September, sat down across from her in the cafeteria and pushed half his kimbap across the table without saying a word, and went back to his phone, and didn't look up." },
    { s: 'asahi', f: 'neutral', t: "You're very see-through today." },
    { s: 'solar', t: "Am I?" },
    { s: 'asahi', f: 'neutral', t: "No. I'm being a dick. No one cares." },
    { s: 'asahi', f: 'sad', t: "...Eat your kimbap." },
    { n: "Cherry didn't let go of her sleeve all day. Not in the hallway, not on the stairs, not in the bathroom, where Cherry stood outside the stall holding a corner of Solar's blazer through the gap under the door and talking the whole time, about Sunghoon, about how *soon* was not a date, about how she was going to break his balls if *soon* wasn't by Valentine's, about nothing, just so there'd be a voice." },
    { ifEpiRoute: 'jihoon', then: [
      { n: "At lunch, Jihoon picked up the end of the old table and dragged it, screeching, across the cafeteria floor, until it hit the end of the council's table with a bang, and sat down at the join, and put his tray down, and looked at Jungwon." },
      { s: 'jihoon', f: 'neutral', t: "Don't make it weird, Yang." },
      { s: 'jungwon', f: 'neutral', t: "You made it weird. You made it weird with the table." },
      { n: "But he didn't move. Nobody moved. The two tables stayed pushed together through all of lunch, the old table and the other table, thirteen people and her, eating, and the whole cafeteria watched like it was a nature documentary." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "The council ate lunch in the council room, all eight of them on the floor because there weren't enough chairs, and Heeseung brought a thermos of soup from home and poured it into eight paper cups, and Jake made a pun about it that was so bad Jay left the room and came back, and nobody talked about tonight, and nobody looked at the window, where the snow was going up." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { n: "Jungwon ate lunch. All of it. A whole tray, at the council table, without being told, while she watched, and he didn't say anything about it, and when he was done he showed her the empty tray like a report card." }
    ] },
    { ifEpiRoute: 'jihoon', else: [
      { n: "Across the cafeteria, at the old table, Jihoon looked over once. Just once. Then he looked away, with the bored face." }
    ] },
    { n: "At the last bell nobody went home. They walked her to the gate, all of them, the old table and the council in one long untidy line through the snow going up, Niki on Jay's back, Junkyu holding her hand, Cherry holding her sleeve, and at the gate they all stopped, and stood there, like people waiting for a train that hadn't been announced." },
    { s: 'solar', t: "...It's a gate. I go home through it every day." },
    { s: 'cherry', f: 'neutral', t: "Yeah. And we're watching you do it. Go. Walk. We're watching." },
    { n: "She walked. She could feel them watching her all the way down the street, until the corner, and at the corner she turned around, and they were all still there." }
  ] },

  // ───────────────────────────────── 1/12, the final ─────────────────────────────────
  { id: 'epi-h-gym', date: '1/12', slot: 'late', ends: true, title: 'hold on', place: 'Hanlim · School · Gym at Midnight', time: 'Late Night', scene: [
    { music: 'world-hoax' },
    { n: "She woke up at eleven-forty knowing. Not dreaming it, not fearing it, just knowing, the way you know there's a test in the morning before you remember which one; it was tonight, and it was the gym, because the gym was where the door had opened, and doors, she'd learned, liked to be used both ways." },
    { n: "She got dressed in the dark. Jeans, two sweaters, her coat off the back of the door, the left pocket heavy. Nana watched her from the bed and didn't follow her to the door, which he always did, and she stood in the doorway and looked at him for a long time, and he thumped his tail on the duvet, once, and put his head down." },
    { n: "She didn't tell Cherry. Cherry would have come. Cherry would have stood in the middle of a gym at midnight with her hands out, and Solar didn't think she could watch Cherry's hands go through her. That was the only reason. It was a good enough one." },
    { glitch: { stage: 4 } },

    // ── Jungwon ──
    { ifEpiRoute: 'jungwon', then: [
      { n: "Jungwon picked her up at the end of her street at eleven-fifty in his mom's car, which he had taken without asking, which he told her about in the car in the tone of a boy reporting a crime he had personally witnessed." },
      { s: 'jungwon', f: 'serious', t: "I left a note on the kitchen counter. It says where I am." },
      { s: 'solar', t: "Won. Your *parents*—" },
      { s: 'jungwon', f: 'serious', t: "I'm not lying about this one." },
      { n: "The gym's side door had the broken latch everybody at Hanlim knew about and nobody reported. Inside it was dark and enormous and smelled like floor polish and old balloons, and the exit signs made two small red islands at either end, and their footsteps came back to them off the bleachers a beat late, like someone else walking." },
      { ifFlag: 'epi-h-said-name', then: [
        { n: "They sat on the bottom row of the bleachers in their coats. For a while they didn't say anything. Then he did." },
        { s: 'jungwon', f: 'serious', t: "If it's him." },
        { s: 'solar', t: "It won't be. He said he wouldn't come looking. He promised." },
        { s: 'jungwon', f: 'neutral', t: "Do you believe him?" },
        { s: 'solar', t: "...He's never lied to me. Not once. In any of it. In any of them." },
        { n: "Jungwon was quiet for a long time. She'd said the name out loud in his street six nights ago, and the world hadn't ended, and it sat between them now like a third person on the bleachers, not unwelcome." },
        { s: 'jungwon', f: 'neutral', t: "Then it isn't him." }
      ], else: [
        { n: "They sat on the bottom row of the bleachers in their coats. For a while they didn't say anything. She started to say something, and it started with a sound like *Hae—*, and she stopped." },
        { n: "He didn't ask. He took her hand, inside his coat pocket, and kept it there." }
      ] }
    ] },

    // ── Jihoon ──
    { ifEpiRoute: 'jihoon', then: [
      { n: "Jihoon was already there." },
      { n: "He was sitting on the folding table next to the ballot box, in the dark, swinging his legs, with two convenience-store hot cocoas beside him with the lids on, steaming, like a boy waiting for a bus he'd been told would come." },
      { s: 'jihoon', f: 'neutral', t: "Took you long enough." },
      { s: 'solar', t: "How did you know?" },
      { s: 'jihoon', f: 'neutral', t: "Sol. I've known you since you ate glue. You think I don't know when you're about to do something stupid at midnight?" },
      { ifFlag: 'epi-h-jihoon-remembers', then: [
        { s: 'jihoon', f: 'sad', t: "...And I remember. I told you. All of it. I know what midnight is." }
      ] },
      { n: "He held out a cocoa. She took it. It was too hot to drink, and she held it in both hands, and it was the warmest thing in the gym." },
      { n: "The side door banged. Somebody came in fast out of the snow, out of breath, coat open, snow on his shoulders and in his hair, and stopped dead at the sight of the two of them." },
      { s: 'jungwon', f: 'serious', t: "Park." },
      { s: 'jihoon', f: 'neutral', t: "Oh, great. The hall monitor." },
      { s: 'jungwon', f: 'serious', t: "Did you bring her here?" },
      { s: 'jihoon', f: 'neutral', t: "She brought herself. She's a grown woman. She's eighteen. She can vote." },
      { n: "Jungwon walked straight to her. Jihoon slid off the table into his way, shoulder first, not hard, the way boys do when they want to see if you'll move. Jungwon didn't move. They stood there chest to chest in the dark gym, Jihoon a head taller and Jungwon not caring, two boys who'd fought in a hallway and a parking lot and on a forum and would do it again." },
      { s: 'solar', t: "If you two do this tonight, I will haunt you. Both of you. Literally. I'm halfway there already." },
      { n: "A long second. Then Jihoon stepped back, and picked up the other cocoa, the one that was his, and held it out to Jungwon without looking at him." },
      { s: 'jungwon', f: 'surprised', t: "...I'm not drinking after you." },
      { s: 'jihoon', f: 'neutral', t: "It's not *after* me, I didn't touch it, it's a gesture. Take the gesture, Yang." },
      { n: "Jungwon took the gesture. He held it. He didn't drink it. Neither of them said anything else, and it was the nicest thing that had ever happened between them." }
    ] },

    // ── The council ──
    { ifEpiRoute: 'council', then: [
      { n: "The gym was lit. Of course it was. Heeseung had never given the key back, and they'd come in through the front doors like they owned the building, and somebody had plugged in the string lights, and the gold came down in long loops over the bleachers and the folding chairs and the ballot box on its table, and the balloons shone in the corners, and it looked, at midnight, exactly the way it had looked when they finished it." },
      { n: "They were all there. Sunoo with a paper bag of croissants from Yeobo's that his grandmother had pressed on him at the door *for the retreat*, which was apparently what she called it now. Jake lying flat on his back on the bleachers. Jay at the door with his arms crossed like a bouncer. Niki doing slow loops of the gym floor on somebody's scooter, which was absolutely not allowed. Sunghoon lying on the floor in the middle of the court, looking up at the lights. Heeseung with the clipboard, because of course." },
      { s: 'heeseung', f: 'serious', t: "Attendance. Kim Solar." },
      { s: 'solar', t: "...Here." },
      { s: 'heeseung', f: 'serious', t: "Good. Stay that way." },
      { n: "Jungwon came in last, through the side door, out of breath, snow on his shoulders, coat open." },
      { s: 'jake', f: 'surprised', t: "You got OUT? How'd you get out?" },
      { s: 'jungwon', f: 'neutral', t: "I left a note on the kitchen counter. It says where I am." },
      { s: 'niki', f: 'surprised', t: "You WHAT." },
      { s: 'jay', f: 'neutral', t: "He's dead. He's a dead man. Rest in peace." },
      { s: 'niki', f: 'happy', t: "He's so brave. He's like a soldier. He's like a soldier who's also a dead man." },
      { s: 'jungwon', f: 'neutral', t: "I'm not lying about this one." }
    ] },

    { n: "Ten to midnight. She ended up on the bottom row of the bleachers with Jungwon beside her, the way she always seemed to end up there, and the gym was so quiet she could hear the snow going up past the high windows, which shouldn't have been possible, which made a sound like a page turning, over and over." },
    { choose: [
      { t: "If it takes me— hold on. Okay? Just hold on.", flag: 'epi-h-ask-hold', then: [
        { s: 'jungwon', f: 'neutral', t: "Okay." },
        { s: 'solar', t: "That's it? *Okay*?" },
        { s: 'jungwon', f: 'neutral', t: "I was always going to. You asking doesn't change anything. It's nice that you asked." }
      ] },
      { t: "If it hurts you— let go. Promise me.", flag: 'epi-h-ask-letgo', stat: { kindness: 1 }, then: [
        { n: "He looked at her for a long time. He didn't promise. He was the only person she knew who wouldn't promise a thing he didn't mean." },
        { s: 'jungwon', f: 'serious', t: "I heard you." }
      ] },
      { t: "Tell me about question nine.", flag: 'epi-h-ask-nine', then: [
        { s: 'jungwon', f: 'neutral', t: "The derivative was printed with a sign error. Plus where it should've been minus. If you solved it as written you got a function that didn't exist." },
        { s: 'solar', t: "And you answered both." },
        { s: 'jungwon', f: 'neutral', t: "I answered both. The one that was asked, and the one they meant." },
        { n: "She put her head on his shoulder. He kept talking about question nine, very quietly, all the way through, until it was midnight." }
      ] }
    ] },

    { n: "Above the scoreboard the gym clock had said 12:00 all day. At midnight, it started to blink." },
    { glitch: 'epi-h-g-gym' },
    { music: 'epi-h-half' },
    { n: "The light went green. Not a tint this time. All of it, every inch of the gym, like the whole room had been dropped into a fish tank, flat and hard and humming, and the shadows went the wrong colour and the wrong length, and the folding chairs in their rows on the floor from yesterday's hearing went long and dark and lidded, and where the chairs had been there were coffins, rows and rows of them, standing upright, facing the stage." },
    { n: "Up in the high windows the moon was too big. Much too big. It filled the glass like a face pressed against it." },
    { n: "Everyone could see it. She could tell by the silence. Nobody screamed. It was the kind of quiet you only get when a room full of people all stop breathing together." },
    { n: "And then she wasn't in the gym." },
    { n: "Stone underfoot, and a stair, and a long corridor going up into green, and a smell like cold metal, and voices, so close, *so close*, and Fuuka's voice in her ear the way it used to be, not a crackle, not a ghost, clear as a bell— *I've got her— I've GOT her, she's HERE—*" },
    { n: "And Akihiko, turning, with his fists up, turning *right at her*, his eyes landing on her face and staying there, not sliding off, not looking through, *seeing* her—" },
    { n: "*Sol.*" },
    { n: "Not a question this time." },
    { battle: { id: 'epi-hoax-4', kind: 'scripted', script: 'epi-hoax-4', title: 'One Second', forced: true,
      desc: 'Hanlim’s gym at midnight, and Tartarus inside it. For one second, they can all see her.',
      notes: 'Half-present fight 4 (FEMC-EPILOGUE-PLAN 2.4): banner ONE SECOND; for exactly one round (contactRound) allies obey Direct and she can use a Bond skill with Akihiko or an All-Out; then she is pulled away (interrupt after the contact round). Cannot be lost.' } },
    { n: "One second. It was exactly one second, and it was enough. Her hand was in his. Her voice reached all of them, every one of them, Junpei's *WHOA* and Yukari's gasp and Mitsuru's order cutting across it and Koromaru barking and barking, and they *moved when she said move*, for one second, all of them at once, like they'd never stopped, like she'd never left, like the year had never ended at all—" },
    { n: "—and then it took her back." },
    { n: "Not to them. Away from them. She felt Akihiko's hand close on nothing. She heard Fuuka say her name and lose it halfway." },
    { n: "She was on her knees on the gym floor at Hanlim, in the green, with her friends' voices still in her ears and her hand still shaped like someone was holding it." },
    { glitch: 'epi-h-g-pull' },
    { dark: true },
    { n: "And then the pull." },
    { n: "It wasn't a door, this time. It wasn't a knock. It was a tide going out, and she was the shore. She felt it in her hands first, the green light coming off her fingers like steam off a cup, and then her wrists, and then everywhere, every part of her coming loose into light, fine and green and gold, and going *up*, the way the snow went up, every flake of her going home to a place that wasn't home." },
    { n: "Above the center court the air split like a seam. Through it, so close she could have touched it, a tower. A moon the wrong colour. A city where every clock had stopped at the same minute." },
    { n: "It wanted her back. She could feel it want her. It wasn't cruel. It was patient. It had been patient for a long time." },
    { s: 'solar', t: "No— no, I picked— I *picked* this, I picked here, I—" },

    { ifEpiRoute: 'jihoon', then: [
      { n: "Jihoon got to her first. He always had. He came across the floor and grabbed for her with both hands, the way he'd grabbed her out of a hundred bad situations since preschool, by the arms, by the coat, by whatever he could reach, and his hands went through her." },
      { s: 'jihoon', f: 'sad', t: "No— no, no, Sol, I can't— I can't GET you, I can't get a hold of you, I can't—" },
      { n: "He tried again. And again. His fingers closing on light, on nothing, on light. He was swearing, a long steady stream of it, and his face was wet." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "They all came. All seven, across the gym floor, from the bleachers and the door and the floor of the court, and they all reached for her at once, and all their hands went through her." },
      { n: "Heeseung was saying her name over and over in a flat steady voice like he was taking attendance and refused to mark her absent. Sunoo was crying so hard he couldn't make words. Jake, who had a joke for everything, didn't have one. Niki had stopped moving entirely." },
      { n: "Jay and Niki and Sunghoon, for one second, looked at each other, over her head, the three of them, the way people look at each other when they've all heard the same song somewhere none of the others have been. Nobody said anything." }
    ] },

    { n: "And Jungwon held on." },
    { n: "Both arms. Around her, from in front, pulling her in so hard the breath went out of her, his whole weight leaning back against the pull like a boy bracing a door against a storm, one hand flat between her shoulder blades and the other cupped at the back of her head, and everyone else's hands had gone through her, she'd watched them go through her—" },
    { n: "His didn't. Not all the way." },
    { n: "She didn't know why. He didn't either. His arms went into the light and closed, and something in the light closed back, like it recognized something in him, some other place he'd had to hold on to a thing without dropping it." },
    { ifEpiRoute: 'jihoon', then: [
      { n: "Jihoon saw it. She saw him see it, saw the exact second he understood that he couldn't hold her and Yang could, and saw what that did to his face." },
      { n: "Then he grabbed Jungwon's coat instead. Both fists in the back of it, his feet braced on the gym floor, leaning back with everything he had, holding the one who was holding her." },
      { s: 'jihoon', f: 'serious', t: "Don't you dare let go, Yang. Don't you fucking DARE." }
    ] },
    { ifEpiRoute: 'council', then: [
      { n: "So they held him. Heeseung's hand on his shoulder, then Jay's arm across his back, then all of them, Sunoo and Jake and Niki and Sunghoon, every hand that couldn't hold her holding on to the one boy who could, seven people braced on a gym floor under string lights, leaning back against the sky." }
    ] },

    { music: 'world-hoax' },
    { dark: false },
    { n: "Then the gold came." },
    { n: "Through the green. Not from the seam. From somewhere else, from behind it, from beside it, warm, the colour of a hallway light someone had left on for you, and it came through the bleed in the air like light under a door, and with it, so faint she thought for a second she'd made it up, a voice." },
    { s: 'bleed', t: "Sol." },
    { n: "She knew it before the second word. Every part of her that was going knew it, and turned toward it, the way a plant turns." },
    { s: 'bleed', t: "I said I wouldn't come looking. That was if you picked. You didn't pick this." },
    { n: "Jungwon went very still." },
    { n: "Not loose. Still. The way he went still over a problem when he'd seen the answer before he'd finished reading the question. She felt it go through his whole body, his arms, his chest against her, his breath stopping." },
    { s: 'jungwon', f: 'surprised', t: "...Donghyuck." },
    { n: "He said it like a name he'd said a thousand times somewhere none of them had ever been. Flat. Certain. Like the date in his head he couldn't stop counting toward." },
    { n: "The gold went quiet for a second. Then it laughed, very softly. She'd have known the laugh in any world." },
    { s: 'hcvoice', t: "Hey, Jungwon." },
    { s: 'hcvoice', t: "Let go and I've got her. I'm right here. I'm right on the other side of this. You let go, I catch her. That's all. That's the whole thing." },
    { s: 'solar', t: "Hae— Haechan—" },
    { n: "And Jungwon understood. She felt him understand it, all of it, at once, the way he understood everything: that holding on meant holding her in a world that was pulling her apart at the seams, and letting go meant handing her to the boy who'd sworn not to come and had come anyway, because it wasn't her choice, because he'd only ever come if it wasn't her choice. He understood exactly who was on the other side of the light. He understood exactly what she'd be going to." },
    { n: "He had never lost a count in his life. He had never lost anything he'd decided to keep." },
    { ifFlag: 'epi-h-ask-letgo', then: [
      { s: 'solar', t: "Won— you can— if it hurts, you can—" },
      { s: 'jungwon', f: 'serious', t: "You told me to let go if it hurt." },
      { s: 'jungwon', f: 'serious', t: "It hurts." },
      { n: "He held on." }
    ] },
    { ifFlag: 'epi-h-ask-hold', then: [
      { n: "*Hold on,* she'd said. *Just hold on.* He'd said he was always going to." }
    ] },
    { s: 'jungwon', f: 'serious', t: "Hyung." },
    { s: 'jungwon', f: 'serious', t: "She picked here." },
    { n: "The gold was quiet for a long time. Long enough that she thought it had gone. Long enough that the green started to win." },
    { s: 'hcvoice', t: "...Yeah. She did." },
    { s: 'hcvoice', t: "Then hold on." },
    { flag: 'epi-h-held' },
    { n: "He held on." },
    { cg: 'epi-h-held' },
    { n: "His hand slid down her back, bracing, to her waist, to the pocket of her blazer, and found the can." },
    { n: "She felt him find it. Felt his fingers stop on the shape of it through the fabric, the cold of it, the ridge at the top, and stay there. Then he took it out, slowly, and held it between them. Pink and black, a logo like claw marks, never opened. He knew it. She didn't know how he knew it. He didn't say, and she didn't ask, and that was the most Jungwon thing that had ever happened." },
    { n: "He put it in her hand, and closed his own over hers, over the can, and held that too." },
    { n: "Up in the high windows the moon was too big. Above the scoreboard the clock said 12:00. The light came off her like snow off a roof, green and gold, going up, and the seam in the air waited, very patient, and the gold on the other side of it waited too, and didn't leave, and the gym hummed, and his arms were around her, and every hand that could reach was holding on to someone who was holding on to her—" },
    { n: "—and Yang Jungwon, who had counted every won in the tin twice, and every day toward a date he'd never told her about, and every one of her breaths since she'd come home, held on, and for the first time in his whole life, he didn't count anything at all." }
  ] }

  );
})();
