/* The HOAX epilogue (12/21/2023-1/12/2024): the home bonds Jungwon, Jihoon, Cherry and the council (R.bonds) and all of
   the act's texts (R.texts). Writer E, epilogue batch 5. Data only; loaded with the world (epilogue.js WORLDS.hoax.files).
   Bonds go through add() so they merge with people-crew.js whichever loads first. Story events live in story-w1/w2/w3/end.js.

   Bonds (role 'friend'; the first unseen hangout whose gates fit is the one offered; Mon-Fri 1/8-1/12 After School is council
   duty, so week-3 hangouts are evenings):
     jungwon  epi-h-jungwon-1 'the list'           12/21-12/23 evening, after epi-h-home (an errand: the corner store, his mother's list)
              epi-h-jungwon-2 'quiet floor'        12/26-12/30, after epi-h-christmas (the town library; the song on the desk radio)
              epi-h-jungwon-3 'thirty minutes'     1/2-1/7, route jungwon, after epi-h-motion (the park, Nana and Maeumi; the leash)
              epi-h-jungwon-4 'opening statement'  1/8-1/9 evening, route jungwon, after epi-h-makeup (his mom's car, his speech)
     jihoon   epi-h-jihoon-1 'land of the living'  12/21-12/26, after epi-h-home (the hood of his car outside the convenience store)
              epi-h-jihoon-2 'couples'             12/28-1/3, after epi-h-seance (the Christmas lights; the party, before or after)
              epi-h-jihoon-3 'claw'                1/1-1/5, route jihoon (the arcade; a phone call he takes outside)
              epi-h-jihoon-4 'zero stars'          1/8-1/9 evening, route jihoon, after epi-h-porch + epi-h-makeup (the school roof)
              epi-h-jihoon-5 'fix it'              1/8-1/12 evening, noRoute jihoon, after epi-h-makeup (the park swings; meaner, further)
     cherry   epi-h-cherry-1 'care bears'          12/22-12/27, after epi-h-part-four (Yeobo's; Sunghoon's 'soon'; her coat pocket)
              epi-h-cherry-2 'backwards'           12/28-1/5 After School (the ice rink; her promise to Jungwon)
              epi-h-cherry-3 'practice hair'       1/8-1/9 evening, after epi-h-makeup (her room; a note behind the mirror)
     council  (cast name 'The council', world.js) epi-h-council-1 'congee' 12/22-12/24, after epi-h-emergency (Yeobo's, the drill)
              epi-h-council-2 'the count'          1/8-1/9 evening, route council, after epi-h-makeup (the council room, the tin)
   Flags set: epi-h-cherry-promise (Solar heard Cherry's promise to Jungwon out loud; read by epi-h-cherry-3).
   Flags read: epi-h-notes (jungwon-3, cherry-3, the 1/1 text), epi-h-party, epi-h-jihoon-chose (jihoon-2), epi-h-cherry-promise,
     epi-route-jungwon / -jihoon / -council (text flags), epi-h-jw-gate, epi-h-jihoon-speaks, epi-h-gym-done (1/10 texts).
     Events read (gates): epi-h-home, -part-four, -emergency, -karaoke, -eve, -christmas, -seance, -party, -motion, -makeup,
     -porch, -filed, -clocks, -hearing. Scene conditions: ifEpiRoute (jihoon-5), ifGlitch 3 (jungwon-4, council-2).
   ifYear read: xmas jungwon (jungwon-3, council-2), xmas jihoon (jihoon-1, jihoon-3).
   Glitches: none of the act's ids (those belong to the story events); only { glitch: { near: true } } where Jungwon is there and
     silent (jungwon-1, -2, -3) and { glitch: { strain: 1 } } after Solar holds the temple story to the advisor (council-1).
   Texts: groups club ('rip solar kim (she's fine probably)') and retreat ('RETREAT FACTS (do not leave)', from 12/22); 39 dated
     (12/21-1/12; nine route-dependent variants, one per route on 12/24, 12/29 and 1/10), 10 ambient. Chaewon writes from the school
     thread.
   Inventions for Kat to confirm: Jungwon's mother sends him out with a list on an envelope (and asks for stamps the store
     doesn't sell); the temple story's breakfast was rice porridge and the wake-up bell was four a.m. (Heeseung's flashcards);
     Chaewon's surname Kim on the hearing notice;
     the hearing is 'after lunch' Thursday; the make-up exams are 8:30 a.m. in Room 3-2 and the library annex; Jihoon's crane
     prize on 1/1-1/5 (a pink pig keyring) hangs from his mirror; Jihoon on Iwatodai: 'zero stars, the food was good'; the bake-
     sale tin's exact total is never stated (Jungwon's count matches Heeseung's ledger, nobody says the number); who put the tin
     in the ballot box is never said (Niki claims it, Heeseung says no). The vending-machine can, the séance words and the notes
     are referred to only as the story files stage them.
   Canon held: Jungwon is her boyfriend on every route; Jihoon's route never makes him one; Cherry and Sunghoon stay 'soon';
     the feud stays a feud; drugs named (a baggie, a pill bottle, a caller from sophomore year), never used on the page; nothing
     of sophomore year filled in; nobody mentions Jihoon's parents to him; the video and Danielle never come up; Haechan is
     never named here (the name is the 1/6 window's), only reached for. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const BOTH = ['after', 'evening'];

  /* ── Jungwon ── */
  add('jungwon', 'friend', [
    { id: 'epi-h-jungwon-1', title: 'the list', hint: "Jungwon is at the corner store with a shopping list in his mother's handwriting and a timer running on his watch.",
      after: '12/21', until: '12/23', slots: ['evening'], events: ['epi-h-home'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Winter Street', time: 'Evening', scene: [
      { music: 'epi-h-romance' },
      { n: "The convenience store on the corner had the kind of heat that hit you in the face at the door, radiator and fried-chicken warmer and the plastic smell of a hundred cup ramyeon stacked to the ceiling, and Yang Jungwon was standing in the middle of it in a long black coat, holding a red basket like it had personally wronged him." },
      { n: "He had a list. Of course he had a list. It was written on the back of an envelope in neat slanted handwriting that wasn't his, and he was going down it in order, which meant he was standing in front of the dish soap reading every single label like there would be a test at the end." },
      { s: 'solar', t: "Is this your forty minutes of freedom?" },
      { s: 'jungwon', f: 'neutral', t: "Thirty-five. I've used five." },
      { n: "He didn't look up from the soap. Then he did, and the dimples went off in front of the dish soap like they had no sense of occasion, and she had to look at the ramyeon for a second." },
      { s: 'jungwon', f: 'happy', t: "Hi." },
      { s: 'solar', t: "Your mom let you out for *soap*." },
      { s: 'jungwon', f: 'neutral', t: "And green onions. And her magazine. And stamps, which they don't sell here, which she knows. So I think the stamps are a test." },
      { s: 'solar', t: "Of what?" },
      { s: 'jungwon', f: 'serious', t: "Whether I come home without them, or whether I go to the post office. The post office closes at six." },
      { n: "They both looked at the clock above the register. It was ten past." },
      { s: 'solar', t: "So you fail either way." },
      { s: 'jungwon', f: 'neutral', t: "That's usually how it works." },
      { n: "He said it like a weather report and put the soap in the basket, and she decided right there, under the buzzing lights, that she wasn't going to ask about the rest of it, the *just wait till you get home* that had finally gotten home and sat down at the dinner table, because he'd tell her when he wanted to and he never wanted to, and because the girl at the register was watching them over the top of a manga and Solar didn't feel like giving the Hanlim forum part five." },
      { n: "So instead she started putting things in his basket. A strawberry milk. A bag of shrimp crackers. A triangle kimbap, tuna mayo, the one in the green wrapper." },
      { s: 'jungwon', f: 'neutral', t: "That's not on the list." },
      { s: 'solar', t: "It's on my list." },
      { s: 'jungwon', f: 'neutral', t: "You don't have a list." },
      { s: 'solar', t: "I have a list in my heart, Won. When did you last eat?" },
      { s: 'jungwon', f: 'neutral', t: "...Define eat." },
      { s: 'solar', t: "Food. That you chewed. With your teeth." },
      { s: 'jungwon', f: 'neutral', t: "I had coffee." },
      { s: 'solar', t: "Yang Jungwon." },
      { n: "Full name. He knew what that meant. He took the kimbap back out of the basket, opened it the wrong way so the seaweed tore down the middle, and ate it standing in the soap aisle in four bites with the face of a man doing his civic duty, while she stood there with her arms crossed like a mom at a recital." },
      { choose: [
        { t: "Good boy.", stat: { charm: 1 }, then: [
          { s: 'jungwon', f: 'flustered', t: "Don't— You can't say that in a— There are *people.*" },
          { n: "He went pink to the ears. The girl at the register turned a page so loudly it was practically a comment." }
        ] },
        { t: "(Pay for it before he can.)", stat: { kindness: 1 }, then: [
          { n: "Her card was on the counter before he'd even got his wallet out of his coat. He stared at it, then at her." },
          { s: 'jungwon', f: 'serious', t: "You're the vice president. That's a misuse of funds." },
          { s: 'solar', t: "It's *my* money, Won." },
          { s: 'jungwon', f: 'neutral', t: "...It's a misuse of your funds." }
        ] }
      ] },
      { n: "At the fridge by the door she took two banana milks out without thinking, the way you take two of something when there has always been somebody to hand the second one to, and then she stood there in the cold of the open door with one in each hand, and the second one just sat in her palm being heavy for no reason at all." },
      { n: "She put it back." },
      { n: "Jungwon, beside her, didn't say anything. He reached past her shoulder, took it back out, and put it in his basket with his mother's soap." },
      { glitch: { near: true } },
      { s: 'solar', t: "You hate banana milk." },
      { s: 'jungwon', f: 'neutral', t: "I'll learn." },
      { n: "His watch beeped. Four minutes. Outside the snow had started again, the slow fat kind that sat on your eyelashes, and he walked her to the end of the block with her hand stuffed in his coat pocket with his, which took exactly as long as the block took and not a second longer, because he'd timed it, because of course he had." },
      { s: 'jungwon', f: 'neutral', t: "I'm going to the post office." },
      { s: 'solar', t: "It's closed, Won." },
      { s: 'jungwon', f: 'serious', t: "I know. I'm going to stand outside it, so I can say I went." }
    ] },

    { id: 'epi-h-jungwon-2', title: 'quiet floor', hint: "Jungwon has claimed a table on the library's quiet floor with three textbooks, a timer and a chair saved with his scarf.",
      after: '12/26', until: '12/30', slots: BOTH, events: ['epi-h-christmas'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Library', time: 'Daytime', scene: [
      { music: 'epi-h-romance' },
      { n: "The town library's third floor was the quiet floor, which in practice meant a hundred people trying very hard not to breathe, a radiator that clanked like it was doing it on purpose, and Yang Jungwon at the table by the window with three textbooks open in a fan around him and a timer counting down on his phone, his scarf over the back of the chair beside him like a reservation." },
      { n: "He moved the scarf without looking up. That was hello." },
      { s: 'solar', t: "How long have you been here?" },
      { s: 'jungwon', f: 'neutral', t: "Since it opened. My mother approves of the library. It has no other boys in it." },
      { s: 'solar', t: "There's a boy right there." },
      { s: 'jungwon', f: 'neutral', t: "He's sixty. He's been asleep on the same atlas since ten." },
      { n: "She sat. He slid her calculus textbook across the table, which meant he had brought her calculus textbook, which meant he had gone to her house and asked her mother for it, which meant her mother had handed it over and said something about how *polite* he was, and Solar had a full second of picturing it and wanting to lie down on the floor." },
      { s: 'solar', t: "So. Christmas." },
      { s: 'jungwon', f: 'neutral', t: "Your father shook my hand twice." },
      { s: 'solar', t: "That's good. That means he likes you." },
      { s: 'jungwon', f: 'serious', t: "The second one felt like he was checking whether the first one was real." },
      { s: 'solar', t: "...Okay, that's also my dad." },
      { s: 'jungwon', f: 'neutral', t: "Your mother said his name eleven times." },
      { n: "He didn't have to say whose. He turned a page. The radiator clanked." },
      { s: 'solar', t: "You *counted?*" },
      { s: 'jungwon', f: 'neutral', t: "I count things. It's a hobby." },
      { s: 'jungwon', f: 'serious', t: "It's a problem." },
      { s: 'solar', t: "He brings cocoa every year, Won. Since we were like six. It's a tradition. He's basically their kid." },
      { s: 'jungwon', f: 'neutral', t: "I know. Your mother told me. Twice. Between the third and fourth time she said his name." },
      { s: 'solar', t: "Oh my God. You're jealous." },
      { s: 'jungwon', f: 'flustered', t: "I'm not jealous. I'm keeping records." },
      { n: "A woman at the next table shushed them both, and Jungwon apologized to her in a whisper so formal it sounded like a press release, and Solar had to put her face in the calculus to keep from laughing out loud on the quiet floor." },
      { n: "Then they worked. He was aiming for first in the make-ups, she knew that without him saying it, because his parents wanted first and he'd never once in his life given them anything less, and he did the problems the way other people breathed, small and even and without looking at them. She did hers the way other people drowned." },
      { choose: [
        { t: "(Try the next one on your own.)", stat: { knowledge: 1 }, then: [
          { n: "She did it on her own. It took nine minutes, two eraser holes and one whispered swear word, and when she slid it across he read it once and then again, and the dimples came out slow." },
          { s: 'jungwon', f: 'happy', t: "That's right." },
          { s: 'solar', t: "Don't sound so surprised." },
          { s: 'jungwon', f: 'happy', t: "I'm not surprised. I'm *proud.* It sounds the same on me." }
        ] },
        { t: "Do it for me? Pretty please?", stat: { charm: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "No." },
          { s: 'solar', t: "Won~." },
          { n: "He did the first line. Just the first line, very slowly, in her notebook, in his neat little numbers, and then put the pen down beside it like a dare. It was the most romantic thing anyone had ever done to her with a derivative." }
        ] }
      ] },
      { n: "Somewhere around three the librarian at the desk turned her radio on low, and a song came up out of it in English, something with a bassline she knew in her chest before she knew it in her head, and Solar was humming along before she'd decided to." },
      { s: 'solar', t: "He would've hated this song." },
      { n: "It was out before she could stop it. And then it was just there on the table between them, on the quiet floor, in front of a hundred people not breathing, and she didn't know where to put it." },
      { n: "Jungwon didn't look up. He didn't ask who. He finished the line he was writing, crossed a t, and turned the page." },
      { s: 'jungwon', f: 'neutral', t: "Probably." },
      { glitch: { near: true } },
      { n: "He pushed the next problem across to her. That was all. That was the whole thing. She looked at it for a long time, longer than the problem needed, and it was a while before she could read the numbers." },
      { n: "At five the lights flickered for closing. He wound his scarf around her neck without asking, twice, because hers was the thin one with the bobbles, and tucked the end in." },
      { s: 'solar', t: "It's like ten minutes to my house." },
      { s: 'jungwon', f: 'neutral', t: "Eleven. With the light at the crosswalk." }
    ] },

    { id: 'epi-h-jungwon-3', title: 'thirty minutes', hint: "Jungwon is at the park with Maeumi and exactly thirty minutes, and Nana has already seen him.",
      after: '1/2', until: '1/7', slots: BOTH, events: ['epi-h-motion'], noFlags: [], route: 'jungwon', noRoute: null,
      place: 'Hanlim · The Park', time: 'Daytime', scene: [
      { music: 'epi-h-romance' },
      { n: "Nana saw him first. Nana always saw him first, which was a betrayal she'd decided to stop taking personally, and he was off across the snow on his big silly legs before she could get the leash wrapped twice around her wrist, which meant she was off across the snow too, sort of, mostly on her heels." },
      { n: "Maeumi saw Nana coming and did what Maeumi had been doing since the first morning of the school year, which was scream. A very small scream, for a very small dog. Nana lay down directly on top of Jungwon's shoes and rolled over, and Maeumi stood on Nana's chest and kept screaming, and the whole thing came to rest like that, a pile, in the middle of the path." },
      { s: 'jungwon', f: 'neutral', t: "Good afternoon." },
      { s: 'solar', t: "Your dog is yelling at my dog." },
      { s: 'jungwon', f: 'neutral', t: "Your dog started it. Four months ago. In front of my house." },
      { s: 'solar', t: "Won, they're in love." },
      { s: 'jungwon', f: 'neutral', t: "Maeumi doesn't believe in love. He believes in yelling." },
      { n: "He had thirty minutes. Dog walks counted as an errand in the Yang house, apparently, as long as they were timed, and he'd set the timer the second his front door closed; she could see it running on his wrist." },
      { s: 'solar', t: "So. I hear we're getting impeached." },
      { s: 'jungwon', f: 'serious', t: "*I'm* getting impeached. You're collateral." },
      { s: 'solar', t: "I'm the vice president. I'm a co-defendant." },
      { s: 'jungwon', f: 'neutral', t: "That's not how impeachment works." },
      { s: 'solar', t: "Then how does it work?" },
      { n: "He opened his mouth. He closed it. Maeumi screamed at a pigeon." },
      { s: 'jungwon', f: 'neutral', t: "I don't know. Nobody's ever tried." },
      { s: 'jungwon', f: 'serious', t: "I've read the handbook three times. There's a section. It's one paragraph long and it was written in 2004 and it uses the word *thereof* four times." },
      { s: 'solar', t: "And the tin?" },
      { s: 'jungwon', f: 'serious', t: "Every won is in that tin." },
      { ifYear: { xmas: 'jungwon' }, then: [
        { s: 'jungwon', f: 'neutral', t: "I counted it twice." },
        { s: 'solar', t: "You lost count." },
        { s: 'jungwon', f: 'flustered', t: "*Once.* I lost count once. Somebody said my name." },
        { n: "She grinned at him until he had to look at the pigeon too." }
      ], else: [
        { s: 'jungwon', f: 'neutral', t: "Heeseung has a ledger. I've seen the ledger. I've *checked* the ledger. Twice." }
      ] },
      { ifFlag: 'epi-h-notes', then: [
        { n: "They walked. The dogs walked, more or less, Maeumi in a straight line and Nana in a series of loops around him. After a while Jungwon said, without looking at her," },
        { s: 'jungwon', f: 'neutral', t: "Any more notes?" },
        { n: "He meant the mirror. He'd seen one. He'd known what it was the second he saw it, she'd watched him know it, and he still hadn't asked her a single question about it, which was the most Jungwon thing she could think of." },
        { s: 'solar', t: "One. This morning. It said *walk Koromaru.*" },
        { s: 'jungwon', f: 'neutral', t: "Who's Koromaru?" },
        { s: 'solar', t: "A dog." },
        { s: 'jungwon', f: 'neutral', t: "...A good dog?" },
        { s: 'solar', t: "The best dog." },
        { n: "Jungwon looked down at Maeumi, who was eating snow with the focus of a professional." },
        { s: 'jungwon', f: 'serious', t: "Don't tell Maeumi." },
        { n: "Then, a few steps later, quieter, like it was nothing," },
        { s: 'jungwon', f: 'neutral', t: "Did you? Walk him?" },
        { s: 'solar', t: "I can't." }
      ], else: [
        { n: "They walked. The dogs walked, more or less, Maeumi in a straight line and Nana in a series of loops around him, and Solar told him about the forum's newest theory, that the council had been in witness protection, and he said that was the most flattering thing anyone had ever said about them." }
      ] },
      { glitch: { near: true } },
      { n: "He stopped walking. He held out Maeumi's leash, the thin red one, across the space between them." },
      { s: 'jungwon', f: 'neutral', t: "Walk this one." },
      { choose: [
        { t: "(Take the leash.)", stat: { kindness: 1 }, then: [
          { n: "She took it. Maeumi looked up at her, deeply suspicious, and then went back to eating snow. Jungwon took Nana's leash from her other hand, and Nana stopped looping and walked beside him like a gentleman for the first time in his entire life, and Solar didn't say anything for a while because there wasn't anything to say that wouldn't have come out wrong." }
        ] },
        { t: "Is that a promotion?", stat: { charm: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "It's a transfer of duties." },
          { s: 'solar', t: "You're so romantic." },
          { s: 'jungwon', f: 'flustered', t: "I'm extremely romantic. Take the leash." },
          { n: "She took it. He took Nana's. Nana walked beside him like a gentleman for the first time in his entire life." }
        ] }
      ] },
      { n: "His watch beeped. Thirty. He looked at it, and then he didn't move for one more full minute, standing in the snow with her dog's leash wrapped around his hand, while the light went blue behind the bare trees." },
      { s: 'jungwon', f: 'serious', t: "My mother's going to ask why it took thirty-one minutes." },
      { s: 'solar', t: "What'll you tell her?" },
      { s: 'jungwon', f: 'neutral', t: "That Maeumi had a lot of feelings." }
    ] },

    { id: 'epi-h-jungwon-4', title: 'opening statement', hint: "Jungwon's mom's car is idling outside your house with the heat on and a speech on the passenger seat.",
      after: '1/8', until: '1/9', slots: ['evening'], events: ['epi-h-makeup'], noFlags: [], route: 'jungwon', noRoute: null,
      place: "Hanlim · Jungwon's Car", time: 'Evening', scene: [
      { music: 'epi-h-romance' },
      { n: "His mom's car smelled like her, a clean expensive smell like a hotel lobby, and like him underneath it, and the heat was turned all the way up so the windows had fogged into a soft gray box with the two of them inside it and her street somewhere out there in the dark. He'd driven her home from the exam and then neither of them had opened a door." },
      { n: "There were three pages on the passenger seat. She had to pick them up to sit down. Typed, double-spaced, with notes in the margins in red pen." },
      { s: 'solar', t: "Is this the speech?" },
      { s: 'jungwon', f: 'neutral', t: "It's a draft." },
      { s: 'solar', t: "It's got footnotes, Won." },
      { s: 'jungwon', f: 'serious', t: "They're not footnotes. They're citations. Do the thing." },
      { s: 'solar', t: "What thing?" },
      { s: 'jungwon', f: 'neutral', t: "Be the gym." },
      { n: "So she was the gym. She sat back against the passenger door and folded her arms and made her face into four hundred bored students and one first-year with a livestream, and he cleared his throat, and then the voice came out, the big bright one he only ever used on a stage or the morning announcements, the one that had won him two elections and made every teacher at Hanlim believe he'd been born in a blazer." },
      { s: 'jungwon', f: 'serious', t: "Fellow students. I'd like to begin by addressing the question of the bake-sale tin—" },
      { s: 'solar', t: "Booo." },
      { s: 'jungwon', f: 'neutral', t: "You can't boo. Chaewon doesn't allow booing." },
      { s: 'solar', t: "I'm the gym. The gym boos." },
      { n: "He started again. He got all the way to the second page this time before she stopped him, and only because he'd said *thereof.*" },
      { choose: [
        { t: "Less news anchor. More you.", stat: { charm: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "This is me." },
          { s: 'solar', t: "This is you on the intercom. Talk like you talk to me." },
          { s: 'jungwon', f: 'flustered', t: "I can't talk to four hundred people like I talk to you. That would be extremely inappropriate." },
          { n: "But he tried it. Quietly. The first paragraph, in the flat honest voice, and it was better, and they both knew it, and he crossed out a whole page with one red line and didn't even look sad about it." }
        ] },
        { t: "(Fix the citations.)", stat: { knowledge: 1 }, then: [
          { n: "She took his red pen and went through it with him line by line, the dates, the handbook section, the ledger totals, and found one place where he'd written the bake sale was on a Thursday. It was a Friday. He stared at it for a long time." },
          { s: 'jungwon', f: 'surprised', t: "I've read this nine times." },
          { s: 'solar', t: "I was there, Won. I remember Friday." }
        ] }
      ] },
      { n: "The heater ticked. Outside, somebody's footsteps went past on the sidewalk and were gone." },
      { s: 'solar', t: "Everyone saw the snow today." },
      { s: 'jungwon', f: 'neutral', t: "Ms. Miyawaki said it was an inversion." },
      { s: 'solar', t: "Is that what it was?" },
      { s: 'jungwon', f: 'serious', t: "No." },
      { ifGlitch: 3, then: [
        { n: "The clock on the dashboard said 12:00. It had said 12:00 since the morning; she'd noticed it when he picked her up. He'd stopped resetting it." }
      ] },
      { n: "He took her hand off the speech and held it on the gearshift between them, his thumb going over her knuckles one by one and back again, like he was counting them, like if he kept the count going none of them could go anywhere." },
      { s: 'jungwon', f: 'serious', t: "If it happens again. Thursday. In front of everyone." },
      { s: 'solar', t: "Then what?" },
      { s: 'jungwon', f: 'neutral', t: "Then I'll keep talking until it stops." },
      { choose: [
        { t: "You'd filibuster for me?", stat: { charm: 1 }, then: [
          { s: 'jungwon', f: 'neutral', t: "I'd read the entire handbook out loud. Every *thereof.*" },
          { s: 'solar', t: "That's the most romantic thing anyone's ever said to me." },
          { s: 'jungwon', f: 'flustered', t: "I know. I planned it." }
        ] },
        { t: "(Hold on to his hand.)", stat: { kindness: 1 }, then: [
          { n: "She turned her hand over under his and held on. He stopped counting. Neither of them said anything for a long time, the windows fogged solid, the speech sliding slowly off her knee onto the floor of his mother's car, and neither of them picked it up." }
        ] }
      ] },
      { n: "Across the road, her porch light went off, then on, then off again. Her mother, at the window, with her hand on the switch." },
      { s: 'jungwon', f: 'neutral', t: "Your mother's signaling." },
      { s: 'solar', t: "She does that." },
      { s: 'jungwon', f: 'serious', t: "Mine would just come outside." }
    ] }
  ]);

  /* ── Jihoon ── */
  add('jihoon', 'friend', [
    { id: 'epi-h-jihoon-1', title: 'land of the living', hint: "Jihoon's car is parked half on the curb outside the convenience store, and he's sitting on the hood in the snow.",
      after: '12/21', until: '12/26', slots: BOTH, events: ['epi-h-home'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Winter Street', time: 'Evening', scene: [
      { music: 'epi-h-jihoon' },
      { n: "Park Jihoon was sitting on the hood of his car in December, in the snow, eating a cup of convenience-store tteokbokki with a toothpick, in a leather jacket that wasn't warm enough for any of it, like a man in a music video nobody had asked him to make." },
      { s: 'jihoon', f: 'happy', t: "Sol. Come. Witness me." },
      { s: 'solar', t: "You're going to get hypothermia on a Hyundai." },
      { s: 'jihoon', f: 'neutral', t: "I'm going to get hypothermia on a *beautiful* Hyundai. There's a difference. One of them's a tragedy." },
      { n: "His hair was doing the thing with the blonde streaks again, and the nose stud matched hers, and he looked exactly like he always looked, which was the problem. He looked like nothing had happened. He looked like the whole year she'd just lived, the dorm and the stairs and the moon too big in the window, had been a weird dream she'd had on his couch." },
      { s: 'solar', t: "So we're not talking about it." },
      { s: 'jihoon', f: 'neutral', t: "Talking about what." },
      { s: 'solar', t: "Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "What retreat. I was home. I'm always home. Ask Nana. Nana's my alibi." },
      { s: 'solar', t: "You renamed the chat." },
      { s: 'jihoon', f: 'happy', t: "Hacked." },
      { s: 'solar', t: "It says *jihoney renamed the chat.* The timestamp is the night I disappeared." },
      { s: 'jihoon', f: 'neutral', t: "Timestamps can be faked. That's Big Tech. Read the rest of it, though. *She's fine probably.* That's optimism. That's practically a get-well card. You're welcome." },
      { ifYear: { xmas: 'jihoon' }, then: [
        { s: 'jihoon', f: 'neutral', t: "Where's the dog." },
        { s: 'solar', t: "What dog?" },
        { s: 'jihoon', f: 'happy', t: "The dog. With Nana's face. It's in your bed." },
        { s: 'solar', t: "It's on my *shelf.*" },
        { s: 'jihoon', f: 'happy', t: "It's in your bed." },
        { n: "She didn't answer, which was an answer, and he knew it, and he ate a rice cake about it with enormous dignity." }
      ] },
      { n: "There was a little plastic baggie in the cupholder by the driver's window, she could see it through the windshield, and when he saw her see it he slid off the hood, opened the door, and moved it into his jacket in one easy motion, like a man putting away his keys." },
      { s: 'solar', t: "Jihoon." },
      { s: 'jihoon', f: 'neutral', t: "Breath mints." },
      { s: 'solar', t: "Don't." },
      { s: 'jihoon', f: 'serious', t: "Don't what? I'm eating. You're watching me eat. It's weird, Sol. Shouldn't you be with your boyfriend? Oh, wait." },
      { s: 'jihoon', f: 'happy', t: "He's grounded. At eighteen. In a *house.* Tragic. Give him my condolences." },
      { choose: [
        { t: "(Sit on the hood with him.)", stat: { kindness: 1 }, then: [
          { n: "She climbed up next to him. The hood was freezing through her coat and she yelped, and he laughed at her, the real laugh, the stupid honking one from when they were nine, and shoved over to give her room and handed her the second toothpick without being asked. They ate the rest of the cup between them in the snow, bumping elbows, the store's sign humming above them." }
        ] },
        { t: "(Take the cup out of his hand and eat the last one.)", stat: { courage: 1 }, then: [
          { n: "She took it right out of his hand and ate the last rice cake while he watched in real horror." },
          { s: 'jihoon', f: 'surprised', t: "Thief. *Criminal.* I'm telling your mother. She'll take my side. She always takes my side." },
          { s: 'solar', t: "She does not." },
          { s: 'jihoon', f: 'happy', t: "She made me cocoa first last year. Before you. I have *photos.*" }
        ] }
      ] },
      { n: "When she got up to leave he didn't look at her. He was looking at the store window, at the two of them reflected in it, warped and orange." },
      { s: 'jihoon', f: 'neutral', t: "Your uniform was ugly." },
      { n: "She stopped." },
      { s: 'solar', t: "...What uniform?" },
      { n: "For one second his face did nothing at all. Then he picked the empty cup back up and looked into it like there might be more." },
      { s: 'jihoon', f: 'neutral', t: "Your school one. Ours. Ugly. All of them. Whatever. Go home, Skank, you're letting the cold in." }
    ] },

    { id: 'epi-h-jihoon-2', title: 'couples', hint: "Jihoon is under the Christmas lights downtown, rating the couples walking past him out loud.",
      after: '12/28', until: '1/3', slots: BOTH, events: ['epi-h-seance'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Christmas Lights', time: 'Evening', scene: [
      { music: 'epi-h-jihoon' },
      { n: "The lights were still up on the main street, the whole tunnel of them, warm white and blinking blue, because Hanlim's town council took Christmas the way Hanlim's student council took everything, much too seriously and for much too long. Couples walked through it holding hands and taking photos. Park Jihoon was sitting on a bench in the middle of it like a judge." },
      { s: 'jihoon', f: 'neutral', t: "Four." },
      { n: "A couple in matching puffers walked past. He didn't lower his voice." },
      { s: 'jihoon', f: 'neutral', t: "She's carrying the whole relationship. Look at her. She's carrying his *bag.*" },
      { s: 'solar', t: "You can't just rate people." },
      { s: 'jihoon', f: 'happy', t: "I can, actually. It's a free country. Sit down. Seven, over there. The tall one keeps fixing her hat. That's love, Sol. That's what love looks like. Hat maintenance." },
      { n: "She sat down. She didn't mean to. That was always how it went with him." },
      { s: 'solar', t: "Cherry's going to kill you if she finds out I'm here." },
      { s: 'jihoon', f: 'neutral', t: "Cherry's going to kill me regardless. It's her love language. Two. Oh, that's a two. He's on his phone. On a *date.* Under the *lights.*" },
      { s: 'solar', t: "About the séance." },
      { s: 'jihoon', f: 'neutral', t: "Kazuha did it." },
      { s: 'solar', t: "Okay, the first word, maybe. You knew the other one." },
      { s: 'jihoon', f: 'neutral', t: "Which other one." },
      { s: 'solar', t: "Iwatodai." },
      { s: 'jihoon', f: 'neutral', t: "Never heard of her." },
      { s: 'solar', t: "It's a place." },
      { s: 'jihoon', f: 'neutral', t: "Never heard of it, then." },
      { n: "He didn't look at her. He was watching a little kid on her dad's shoulders reach up for the lights like she could pick one, and his jaw did something small and stopped." },
      { ifFlag: 'epi-h-party', then: [
        { s: 'solar', t: "And about Friday—" },
        { s: 'jihoon', f: 'neutral', t: "What about it." },
        { ifFlag: 'epi-h-jihoon-chose', then: [
          { s: 'solar', t: "You didn't—" },
          { s: 'jihoon', f: 'serious', t: "I know what I didn't. I was there. Don't make it a thing." },
          { n: "Then, because he couldn't help it," },
          { s: 'jihoon', f: 'happy', t: "You looked ugly, by the way. As requested." }
        ], else: [
          { s: 'jihoon', f: 'happy', t: "Nothing about it. You looked ugly. As requested. Next question." }
        ] }
      ], else: [
        { s: 'jihoon', f: 'happy', t: "Friday. Third-year's house, the one with the pool table. Parents are in Jeju. You're coming." },
        { s: 'solar', t: "Am I?" },
        { s: 'jihoon', f: 'happy', t: "Wear something ugly so I look better. That's not a joke. I need the contrast." }
      ] },
      { choose: [
        { t: "Rate me and Jungwon.", stat: { courage: 1 }, then: [
          { s: 'jihoon', f: 'neutral', t: "Four." },
          { s: 'solar', t: "*Four?!*" },
          { s: 'jihoon', f: 'neutral', t: "He's too short for you and you laugh too loud around him. Like a hyena. A hyena in love. It's upsetting for everyone." },
          { n: "She hit him in the arm, hard, the way you only hit someone you've known since preschool. He let her. Then, to the lights, not to her," },
          { s: 'jihoon', f: 'sad', t: "...Seven. Shut up. Seven." }
        ] },
        { t: "(Rate the next couple with him.)", stat: { charm: 1 }, then: [
          { n: "The next couple got an eight from her and a three from him, and the argument about it lasted longer than the couple did, and by the end of it they were both crying laughing on a bench in the cold and an old man walking his dog gave them, very clearly, a two." }
        ] }
      ] },
      { n: "When she stood up he stayed sitting, hands jammed in his jacket, the lights going blue and white over his face." },
      { s: 'jihoon', f: 'neutral', t: "Welcome home, by the way." },
      { n: "She turned. He didn't look up." },
      { s: 'jihoon', f: 'neutral', t: "From the retreat. Since nobody else said it. Go. You're blocking my view of a six." }
    ] },

    { id: 'epi-h-jihoon-3', title: 'claw', hint: "Jihoon is at the arcade feeding the crane game like it owes him money.",
      after: '1/1', until: '1/5', slots: BOTH, events: [], noFlags: [], route: 'jihoon', noRoute: null,
      place: 'Hanlim · Arcade', time: 'Evening', scene: [
      { music: 'epi-h-jihoon' },
      { n: "The arcade was all noise and cheap light, the rhythm game screaming in the corner and the claw machines lined up along the wall glowing pink like an aquarium, and Jihoon was standing at the third one from the end with a stack of thousand-won coins on the glass and the expression of a man who had lost to this machine many, many times and come back anyway out of spite." },
      { n: "There was a thermos sitting on top of the machine next to the coins. Of course there was." },
      { s: 'jihoon', f: 'happy', t: "Cocoa's on the machine. Don't drink it all. Don't drink it *fast,* either, you always burn your tongue and then you whine for an hour." },
      { s: 'solar', t: "I do not whine." },
      { s: 'jihoon', f: 'neutral', t: "You whine like a kettle." },
      { n: "She poured some into the lid and burned her tongue and didn't whine, out of principle, which he watched her do with deep satisfaction." },
      { ifYear: { xmas: 'jihoon' }, then: [
        { s: 'jihoon', f: 'neutral', t: "Do the thing." },
        { s: 'solar', t: "What thing?" },
        { s: 'jihoon', f: 'neutral', t: "The hand thing. Over my hand. You know the thing. It worked last time, it's science now." },
        { n: "So she did the thing. She put her hand over his on the button, and his hand was cold, and the claw came down and closed on a pink pig and lifted it all the way to the chute and dropped it a centimeter short, and he put his forehead on the glass and made a noise like a dying goose." }
      ], else: [
        { n: "He lost four times in a row with the claw coming down perfect on a pink pig and opening like a hand letting go of a balloon, and every time he said a different swear word, in order, like he was working through a list." }
      ] },
      { n: "His phone buzzed on the glass. She saw the name before he flipped it over. Not a name, really. A word and an emoji, the way you save someone you don't want your mom to see in your contacts, and she knew it, because she'd had that same contact once. Sophomore year. Everybody had." },
      { n: "He picked it up. He walked out the door to take it, and she watched him through the glass the whole time, out there in the snow under the sign with his shoulders up by his ears, talking fast, then not talking, then hanging up." },
      { n: "He came back in shaking snow off his hair." },
      { s: 'jihoon', f: 'neutral', t: "Wrong number." },
      { s: 'solar', t: "For four minutes?" },
      { s: 'jihoon', f: 'happy', t: "Very chatty wrong number. Lonely guy. I gave him some advice. Don't look at me like that." },
      { s: 'solar', t: "Like what?" },
      { s: 'jihoon', f: 'serious', t: "Like a golden retriever at a funeral." },
      { choose: [
        { t: "(Ask him about the call.)", stat: { courage: 1 }, then: [
          { s: 'solar', t: "Jihoon. Who was it." },
          { n: "He fed another coin in. He moved the claw. He didn't press the button." },
          { s: 'jihoon', f: 'sad', t: "The guy. You know the guy." },
          { s: 'jihoon', f: 'serious', t: "I said no." },
          { n: "She waited. He pressed the button. The claw came down." },
          { s: 'jihoon', f: 'neutral', t: "Today I said no. Don't clap. I'm not a seal." }
        ] },
        { t: "(Let it go. Win him the pig.)", stat: { proficiency: 1 }, then: [
          { n: "She took the joystick off him and fed in her own coin and lined it up from the side, the way Junkyu had taught them all in middle school, and the claw came down crooked on the pig's ear and held and carried it, swinging, all the way to the chute." },
          { s: 'jihoon', f: 'surprised', t: "You've been *holding out on me.*" },
          { n: "He hung the pig off the mirror in his car that night. She saw it the next day, and the day after, swinging every time he braked." }
        ] }
      ] },
      { n: "He watched her drink the rest of the cocoa, leaning on the machine, and for a second the arcade lights went over his face and he looked about nine years old, and very tired." },
      { s: 'jihoon', f: 'neutral', t: "You were better at this. Before." },
      { s: 'solar', t: "Before what?" },
      { n: "He blinked, like he'd heard himself." },
      { s: 'jihoon', f: 'happy', t: "Before you got old. Eighteen. Disgusting. Your reflexes are going. Soon it'll be your hips." }
    ] },

    { id: 'epi-h-jihoon-4', title: 'zero stars', hint: "Jihoon is up on the school roof after the exam, which is definitely not allowed.",
      after: '1/8', until: '1/9', slots: ['evening'], events: ['epi-h-porch', 'epi-h-makeup'], noFlags: [], route: 'jihoon', noRoute: null,
      place: 'Hanlim · School · Rooftop', time: 'Evening', scene: [
      { music: 'epi-h-jihoon' },
      { n: "The door to the roof was supposed to be locked. Jihoon had never once in four years treated that as information." },
      { n: "He was sitting with his back to the big gray vents, where the warm air came out and the snow didn't stick, with his knees up and two cans of hot coffee from the machine downstairs going cold beside him, and when she came through the door he held one up without turning around, like he'd known it would be her, because it was always going to be her." },
      { s: 'solar', t: "You slid me an eraser." },
      { s: 'jihoon', f: 'neutral', t: "You were erasing with your thumb. It was painful to witness. For both of us. For the whole room." },
      { s: 'solar', t: "Ms. Miyawaki saw you." },
      { s: 'jihoon', f: 'happy', t: "Ms. Miyawaki is a gamer. She respects a clutch play." },
      { n: "She sat down next to him by the vents. The warm air blew her hair into her mouth. He didn't say anything for a while, which for Park Jihoon was a whole speech." },
      { s: 'jihoon', f: 'serious', t: "You went see-through. In calculus. During *integration.* Do you know how hard it was for me not to make a joke about that? Integration? Sol. It was right there." },
      { s: 'solar', t: "You didn't pretend." },
      { s: 'jihoon', f: 'neutral', t: "I said I remember. On the porch. I'm not taking it back now just because it's embarrassing. I'm a man of my word. Sometimes. On porches." },
      { choose: [
        { t: "Tell me what you remember.", stat: { charm: 1 }, then: [
          { s: 'jihoon', f: 'neutral', t: "Worst vacation of my life. Zero stars." },
          { s: 'jihoon', f: 'neutral', t: "The food was good, though. The ramen place by the station. Ten out of ten. Would get emotionally destroyed in a haunted tower again for that ramen." },
          { s: 'jihoon', f: 'happy', t: "The dog was good. The boxing guy kept trying to make me drink a protein thing. The one with the hat called me dude for a whole year like it was my name." },
          { n: "He was smiling. Then he wasn't, all at once, like a light going out in another room." },
          { s: 'jihoon', f: 'sad', t: "You were happy there. That's what I remember. That's the part I'd delete if I could." }
        ] },
        { t: "(Just sit with him.)", stat: { kindness: 1 }, then: [
          { n: "So she just sat with him. Their shoulders touched. The vents breathed. Down in the yard the last of the exam kids were going out the gate in little dark knots, and somebody was throwing snowballs, and somebody was screaming about it, and the whole school sounded like any school on any night." }
        ] }
      ] },
      { s: 'solar', t: "How many days?" },
      { n: "He knew what she meant. He turned his coffee can around and around in his hands." },
      { s: 'jihoon', f: 'serious', t: "Some. More than last week." },
      { s: 'jihoon', f: 'neutral', t: "Don't clap." },
      { s: 'solar', t: "I wasn't going to clap." },
      { s: 'jihoon', f: 'neutral', t: "You were going to clap with your *face.*" },
      { n: "When she said the word *Thursday* he got very interested in the snow on his shoes, and changed the subject to Asahi's new eyeliner, and she let him, and wondered why." },
      { s: 'jihoon', f: 'sad', t: "I was hoping you didn't remember either. So we could both pretend. It's easier with two." },
      { n: "Then the wind came over the edge of the roof and he pulled his jacket tighter and got up, and held his hand down to pull her up too." },
      { s: 'jihoon', f: 'neutral', t: "Don't go see-through on Thursday. I'm not catching you in front of the whole school. I have a reputation." },
      { s: 'solar', t: "You'd catch me." },
      { s: 'jihoon', f: 'neutral', t: "...Yeah. Obviously. Shut up." }
    ] },

    { id: 'epi-h-jihoon-5', title: 'fix it', hint: "Jihoon is on the park swings in the dark, by himself, which is new.",
      after: '1/8', until: '1/12', slots: ['evening'], events: ['epi-h-makeup'], noFlags: [], route: null, noRoute: 'jihoon',
      place: 'Hanlim · The Park', time: 'Evening', scene: [
      { music: 'epi-h-jihoon' },
      { n: "The park at night was the swings and one working lamp and the snow gone blue under it, and Jihoon on the swing on the end, not swinging, just sitting with the chains wrapped around his fists and his boots dragging two long tracks in the snow." },
      { n: "He saw her coming. He didn't wave. With him that used to mean nothing. Lately it meant a lot." },
      { s: 'jihoon', f: 'neutral', t: "Shouldn't you be with your boyfriend." },
      { ifEpiRoute: 'council', then: [
        { s: 'jihoon', f: 'neutral', t: "Or your seven boyfriends. Do they take turns? Is there a rota? Does Heeseung keep the rota?" }
      ], else: [
        { s: 'jihoon', f: 'neutral', t: "Or did Mrs. Yang not sign his permission slip tonight." }
      ] },
      { s: 'solar', t: "Can I sit?" },
      { s: 'jihoon', f: 'neutral', t: "It's a public swing. I don't own it. Yet." },
      { n: "She sat. When he moved, something rattled in his jacket pocket, a small plastic sound she knew, like a maraca made of bad decisions, and he put his hand flat over the pocket and kept it there." },
      { s: 'solar', t: "You were behind me today. In the exam." },
      { s: 'jihoon', f: 'neutral', t: "Was I." },
      { s: 'solar', t: "You saw." },
      { s: 'jihoon', f: 'neutral', t: "I saw a girl who didn't study for calculus. Shocking. Truly a twist. Nobody could've seen it coming." },
      { s: 'solar', t: "Jihoon—" },
      { s: 'jihoon', f: 'serious', t: "Cherry's going to have my head. She pinky-promised your boyfriend. I watched her do it. She did the thumb kiss. It was disgusting." },
      { s: 'jihoon', f: 'serious', t: "So go." },
      { choose: [
        { t: "(Stay anyway.)", stat: { courage: 1 }, then: [
          { n: "She didn't go. She pushed off and swung, a little, high enough that her stomach dropped at the top, and after a while he pushed off too, and they swung out of time with each other in the dark and didn't talk, the chains squeaking, the lamp buzzing, for longer than either of them would ever say out loud. It was the closest he'd let her get all week. It wasn't very close." }
        ] },
        { t: "(Go.)", then: [
          { n: "She went. She got as far as the lamp before she looked back, and he was still sitting there, not swinging, with his hand over his pocket, watching her leave like he was making sure she did it properly." }
        ] }
      ] },
      { s: 'jihoon', f: 'neutral', t: "Hey." },
      { n: "He didn't look at her. He was looking at the tracks his boots had made." },
      { s: 'jihoon', f: 'neutral', t: "Your hair was weird. During the exam. For like a second." },
      { s: 'jihoon', f: 'serious', t: "Fix it." }
    ] }
  ]);

  /* ── Cherry ── */
  add('cherry', 'friend', [
    { id: 'epi-h-cherry-1', title: 'care bears', hint: "Cherry is at Yeobo's, already halfway through your drink.",
      after: '12/22', until: '12/27', slots: BOTH, events: ['epi-h-part-four'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's", time: 'Daytime', scene: [
      { music: 'epi-h-goofy' },
      { n: "Cherry had ordered for both of them, which was nice, and then drunk half of Solar's, which was Cherry. She was in the window seat at Yeobo's with her boots up on the other chair and a Care Bear keychain hanging off her phone, Grumpy, the blue one, which she said was a self-portrait." },
      { s: 'cherry', f: 'neutral', t: "It was getting cold. I was protecting it." },
      { s: 'solar', t: "From what?" },
      { s: 'cherry', f: 'happy', t: "From being cold. I'm a hero. Sit down, you look like shit. I love you. Your hair's doing a thing." },
      { s: 'solar', t: "You said that yesterday." },
      { s: 'cherry', f: 'neutral', t: "It was doing a thing yesterday too. It's doing a different thing today." },
      { n: "Her phone buzzed on the table. She looked at it. Her whole face did something complicated and then went very carefully blank, and she turned it face-down so fast she nearly knocked the drink over." },
      { s: 'solar', t: "Is that Sunghoon?" },
      { s: 'cherry', f: 'neutral', t: "No." },
      { s: 'solar', t: "Cher." },
      { n: "She turned it back over and shoved it across the table. One text. *the prince has returned from the temple. soon. - s*" },
      { s: 'cherry', f: 'serious', t: "He *signs* his *texts,* Sol. He signs them. Like a *letter.* Like I don't know who it is. His name is at the *top.*" },
      { s: 'solar', t: "Soon!" },
      { s: 'cherry', f: 'serious', t: "If he says soon one more time I'm going to commit a crime. A small one. Against his car." },
      { s: 'solar', t: "You're smiling." },
      { s: 'cherry', f: 'neutral', t: "I'm baring my teeth. It's a threat display. Look it up." },
      { n: "They split a croissant. Sunoo's grandmother brought out a second one nobody had ordered and set it down in front of Solar and patted her on the head, once, like a cat, and went back behind the counter without a word." },
      { s: 'cherry', f: 'neutral', t: "My parents think I was with you the whole time." },
      { s: 'solar', t: "You were with me the whole time." },
      { s: 'cherry', f: 'happy', t: "In, like, the broadest possible sense. In a *cosmic* sense. I'm not lying. I'm being spiritual." },
      { choose: [
        { t: "Do you miss it? Over there?", stat: { kindness: 1 }, then: [
          { s: 'cherry', f: 'neutral', t: "No." },
          { s: 'cherry', f: 'neutral', t: "The ramen place. Fine. The ramen place and the old guy who yelled at me for putting my feet on the stool." },
          { s: 'cherry', f: 'sad', t: "And you, there. Running around with your little armband. You were annoying there too, so. Consistent." }
        ] },
        { t: "Has Hyunsuk texted you?", stat: { courage: 1 }, then: [
          { n: "Cherry took a sip of the drink. It was Solar's drink. She didn't seem to notice." },
          { s: 'cherry', f: 'sad', t: "Suk hasn't texted me since we got back. He reacts to things. In the chat. He gave my Care Bear post a thumbs up." },
          { s: 'cherry', f: 'serious', t: "A *thumbs up,* Sol. Like I'm his dentist." }
        ] }
      ] },
      { n: "When they got up to go, Cherry went digging in Solar's coat pocket for the lip balm she always stole, the way she'd been doing since they were twelve, and her hand came out with the can instead. Pink and black. A logo like claw marks." },
      { n: "Cherry looked at it. Then at her. Solar didn't drink energy drinks; Solar said they tasted like batteries. Cherry knew that. Cherry knew everything." },
      { n: "For once in her entire life, Cherry Kim didn't say anything savage. She put the can back in the pocket, exactly where it had been, and zipped the pocket up, and patted it." },
      { s: 'cherry', f: 'neutral', t: "You're paying for my next drink." }
    ] },

    { id: 'epi-h-cherry-2', title: 'backwards', hint: "Cherry is at the ice rink doing backwards crossovers to show off to nobody in particular.",
      after: '12/28', until: '1/5', slots: ['after'], events: [], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Ice Rink', time: 'Daytime', scene: [
      { music: 'epi-h-goofy' },
      { n: "Cherry could skate. That was one of those facts about her that people forgot, because she wore boots like she was going to kick someone with them and smoked behind the gym and once threatened to put a teacher through a window, but put her on ice and she went backwards in long easy loops with her hands in her pockets, like the rink owed her." },
      { n: "Solar could not skate. Solar was holding the wall." },
      { s: 'cherry', f: 'happy', t: "Let go of the wall." },
      { s: 'solar', t: "The wall is my friend." },
      { s: 'cherry', f: 'neutral', t: "I'm your friend. The wall is a wall. Let go of it, you're embarrassing me in front of the Zamboni." },
      { n: "She let go of the wall. She made it four feet. Cherry caught her by both wrists and towed her the rest of the way around the end like a barge, laughing so hard she had to stop, which made them both stop, which made Solar fall, which made Cherry fall on top of her." },
      { n: "They lay on the ice. A small child skated past and looked down at them with open pity." },
      { s: 'solar', t: "You sat between me and Jihoon for three hours." },
      { s: 'cherry', f: 'neutral', t: "When?" },
      { s: 'solar', t: "At the séance. You moved the whole board to sit there. You made Kazuha switch places." },
      { s: 'cherry', f: 'neutral', t: "I like sitting." },
      { s: 'solar', t: "Cher." },
      { n: "Cherry looked at the ceiling of the rink for a while, the big lights, her breath going up in a cloud." },
      { s: 'cherry', f: 'serious', t: "Your preppy freak asked me to keep you off Jihoon. Before. Before we all went wherever we went. And I said yes." },
      { flag: 'epi-h-cherry-promise' },
      { s: 'cherry', f: 'serious', t: "I'd have said yes if he hadn't asked." },
      { choose: [
        { t: "That's not your job.", stat: { courage: 1 }, then: [
          { s: 'cherry', f: 'serious', t: "It's been my job since we were eight." },
          { n: "She sat up. She picked at the ice with one fingernail." },
          { s: 'cherry', f: 'sad', t: "There was one year I didn't do it. So." },
          { n: "She didn't say which year. She didn't have to." }
        ] },
        { t: "(Hug her. On the ice. Badly.)", stat: { kindness: 1 }, then: [
          { n: "She tried to hug her and they both slid, and Cherry swore, and the small child came back around to look at them again, and they ended up in a heap against the boards with Cherry's elbow in her ribs, and Cherry hugged her back so hard it hurt." },
          { s: 'cherry', f: 'neutral', t: "You're so stupid. You're the stupidest person I know. Don't tell anyone I said the promise thing. I have a brand." }
        ] }
      ] },
      { n: "They got up. Cherry kept checking the door by the skate rental, not like she was waiting for anyone, just like she happened to have very strong feelings about that particular door." },
      { s: 'solar', t: "Is he coming?" },
      { s: 'cherry', f: 'neutral', t: "He said *soon.*" },
      { s: 'solar', t: "Soon *today?*" },
      { s: 'cherry', f: 'serious', t: "Just *soon,* Sol. Soon with no qualifiers. Soon like a threat. I'm going to kill him. Gently. On ice." }
    ] },

    { id: 'epi-h-cherry-3', title: 'practice hair', hint: "Cherry has let herself into your room with a curling iron and a plan for Thursday.",
      after: '1/8', until: '1/9', slots: ['evening'], events: ['epi-h-makeup'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Evening', scene: [
      { music: 'epi-h-home' },
      { n: "Cherry had let herself in, which she'd been doing since they were eleven and Solar's mom had given her a key and then pretended not to remember doing it. By the time Solar got upstairs there was a curling iron heating on the desk, a bag of bobby pins tipped out over the calculus notes, and Nana on the bed with his head in Cherry's lap getting his ears done like he was the one going to the hearing." },
      { s: 'cherry', f: 'neutral', t: "Sit. Thursday you're getting impeached, and you're getting impeached *hot.*" },
      { s: 'solar', t: "Nobody's getting impeached." },
      { s: 'cherry', f: 'neutral', t: "Then you're getting *not* impeached hot. Sit." },
      { n: "She sat on the floor between Cherry's knees, the way she had for every school photo and every dance and every bad day since middle school, and Cherry started sectioning her hair with the end of a comb, quick and rough and gentle all at once, which was the only way Cherry knew how to do anything." },
      { ifFlag: 'epi-h-notes', then: [
        { n: "Halfway through the left side Cherry reached past her and pulled something out of the frame of the mirror, wedged in behind the glass where the light didn't reach. A yellow sticky note, curled at the corner. Solar's handwriting. *return Mitsuru's book.*" },
        { n: "Cherry read it. She didn't ask. She'd been there; she knew whose book." },
        { s: 'cherry', f: 'neutral', t: "Did you return it?" },
        { s: 'solar', t: "I can't." },
        { s: 'cherry', f: 'neutral', t: "Then she can come get it. She was terrifying. She'd find a way." },
        { s: 'solar', t: "Cher." },
        { n: "Cherry folded the note in half and put it in her own pocket, like that was a normal thing to do with someone else's ghost." },
        { s: 'cherry', f: 'neutral', t: "Your handwriting's ugly in every world. That's comforting, actually. Hold still." }
      ], else: [
        { n: "Halfway through the left side Cherry stopped and looked at them both in the mirror for a long second, Solar's face and her own above it, like she was checking they were both still there. Then she went back to the curl." }
      ] },
      { ifFlag: 'epi-h-cherry-promise', then: [
        { s: 'cherry', f: 'serious', t: "I'm still keeping it, by the way. The promise. Thursday I'm sitting where I can see you and him both. Don't be weird about it." }
      ] },
      { n: "The curling iron hissed. Nana sighed the long sigh of a dog who has been neglected for almost ninety seconds. Cherry's phone lit up on the bed with a photo of a single ice skate and one word underneath it, and she didn't even pick it up, she just looked at it, and her ears went red, and she curled the next piece of Solar's hair too tight." },
      { s: 'solar', t: "Soon?" },
      { s: 'cherry', f: 'neutral', t: "Soon." },
      { s: 'cherry', f: 'serious', t: "And if you're not here for the soon, Solar Kim, I'm going to be *so* pissed." },
      { n: "She said it into the back of Solar's head, very fast, like if she said it fast enough it would just be a joke." },
      { s: 'cherry', f: 'serious', t: "Say you'll be here." },
      { choose: [
        { t: "I'll be here.", stat: { kindness: 1 }, then: [
          { n: "Cherry's hands stopped. In the mirror her face did nothing, the way it did when she'd decided to believe you on purpose." },
          { s: 'cherry', f: 'neutral', t: "Good. You'd better. I already told him we're double dating and the preppy freak is paying." }
        ] },
        { t: "(Don't say anything. Let her finish the curl.)", stat: { courage: 1 }, then: [
          { n: "Solar didn't say anything. Cherry finished the curl. She let it go, and it bounced, perfect, and she pinned it, and pinned the next one, and the one after that, and didn't ask again, and didn't stop touching her hair the whole rest of the night." }
        ] }
      ] },
      { s: 'cherry', f: 'neutral', t: "...Ugly bitch. I love you. Turn your head." }
    ] }
  ]);

  /* ── The council (the group; cast name 'The council' in world.js) ── */
  add('council', 'friend', [
    { id: 'epi-h-council-1', title: 'congee', hint: "The council never really left Yeobo's. Heeseung has made flashcards.",
      after: '12/22', until: '12/24', slots: BOTH, events: ['epi-h-emergency'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's", time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "The big table at the back of Yeobo's had been pushed together with the little table next to it, and the council was arranged around both of them like a war cabinet, if the war cabinet were six boys in puffer jackets and one phone propped up against the napkin holder with Yang Jungwon's face on it, lit blue by his desk lamp, in his room, because he had a curfew and they had a story to get straight." },
      { n: "Heeseung had made flashcards. Laminated. He had a laminator. Nobody knew where he'd gotten a laminator at eight at night two days before Christmas." },
      { s: 'heeseung', f: 'serious', t: "Again. From the top. Sunoo. What time was the wake-up bell?" },
      { s: 'sunoo', f: 'happy', t: "Four a.m.!" },
      { s: 'heeseung', f: 'happy', t: "Good." },
      { s: 'sunoo', f: 'surprised', t: "Wait. Is that real? Do monks really get up at four? That's so sad. Do they get naps? Heeseung, do they get—" },
      { s: 'heeseung', f: 'serious', t: "*Sunoo.*" },
      { s: 'jake', f: 'happy', t: "We were very zen. Zen-sational. Zen-tirely at peace." },
      { s: 'jay', f: 'neutral', t: "Nobody's gonna ask, bro. Nobody cares about a temple." },
      { s: 'niki', f: 'happy', t: "I'm going to say I achieved enlightenment." },
      { s: 'heeseung', f: 'serious', t: "No." },
      { s: 'niki', f: 'happy', t: "I'm going to say I achieved it *first.*" },
      { s: 'sunghoon', f: 'neutral', t: "Sunghoon was the most disciplined of the group. The monks said so." },
      { s: 'jungwon', f: 'neutral', t: "Sunghoon. Our phones were collected at the gate. Nobody talked to the monks. That's the entire point of the story." },
      { s: 'sunghoon', f: 'neutral', t: "Exactly. No evidence." },
      { n: "Heeseung held up the next card. BREAKFAST. Sunoo opened his mouth. Six people said *rice porridge* at him at once, including Jungwon from inside the napkin holder, and Sunoo closed his mouth again and wrote RICE PORRIDGE on his hand in pen." },
      { n: "Then Heeseung's phone rang on the table, and the name on the screen was the advisor's, and every single boy at the table went rigid like a gazelle, and Heeseung picked it up and looked at it and looked at Solar, and held it out to her, very slowly, across the croissants." },
      { s: 'heeseung', f: 'surprised', t: "You're the vice president." },
      { s: 'solar', t: "*You* were the vice president!" },
      { s: 'heeseung', f: 'sad', t: "And then I was fired. For you. Answer it." },
      { s: 'advisor', t: "Kim Solar? Good. I want to hear it from you. Where exactly were the eight of you?" },
      { choose: [
        { t: "(The temple. Gangwon-do. Phones collected at the gate.)", stat: { charm: 1 }, then: [
          { s: 'solar', t: "A leadership temple stay. In Gangwon-do. They collected our phones at the gate, it's a rule, I'm so sorry nobody could reach us. The porridge was really good." },
          { glitch: { strain: 1 } },
          { s: 'advisor', t: "...The porridge." },
          { s: 'solar', t: "Really good porridge." },
          { s: 'advisor', t: "I see. We'll talk in January." },
          { n: "The line went dead. The whole table breathed out at once. Jake started a slow clap, and Jay hit his hand down, and on the phone against the napkin holder Jungwon was looking at her with his chin in his hand like she'd just won something." }
        ] },
        { t: "(Hand it to Sunoo.)", stat: { kindness: 1 }, then: [
          { n: "She handed it to Sunoo. Sunoo held the phone like it was a live grenade." },
          { s: 'sunoo', f: 'flustered', t: "Hello! Yes! We were at a temple and there was snow and they took our phones and I cried— I didn't cry! There was no crying! There was porridge! It says porridge on my hand—" },
          { n: "Heeseung took the phone back so fast he nearly took Sunoo's hand with it, and said *we'll explain everything at the meeting in January, thank you, goodnight,* in one breath and hung up, and put his face down on the laminated flashcards." },
          { s: 'jungwon', f: 'neutral', t: "That was a disaster." },
          { s: 'sunoo', f: 'sad', t: "I think it went okay?" }
        ] }
      ] },
      { n: "Sunoo's grandmother came out from behind the counter with a fresh tray and put it in the middle of the table. She looked around at all of them, at the flashcards, at the boy in the napkin holder, at Solar with Heeseung's phone still in her hand." },
      { s: 'halmeoni', t: "You children went to a temple." },
      { n: "Nobody breathed." },
      { s: 'halmeoni', t: "Mm. Very good. Eat." }
    ] },

    { id: 'epi-h-council-2', title: 'the count', hint: "The council is in the council room after hours, watching Jungwon count the tin. Again.",
      after: '1/8', until: '1/9', slots: ['evening'], events: ['epi-h-makeup'], noFlags: [], route: 'council', noRoute: null,
      place: 'Hanlim · School · Council Room', time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "The tin was on the table. The council was around the table. Jungwon was at the head of the table with his sleeves rolled up and every bill and coin from the bake sale laid out in front of him in little stacks, sorted by kind and facing the same way, like an army that had been told to stand up straight." },
      { n: "Heeseung had the ledger open beside him. Sunoo was laminating something in the corner because Sunoo laminated when he was nervous. Jake had his phone held up like a microphone." },
      { s: 'jake', f: 'happy', t: "And he's into the five-thousands now, folks, and the crowd is silent, you could hear a coin drop—" },
      { s: 'jungwon', f: 'serious', t: "Jake." },
      { s: 'jake', f: 'happy', t: "—and a coin *does* drop, and it's Yang Jungwon, cool as you like—" },
      { s: 'niki', f: 'neutral', t: "Forty-seven. Twelve. Six hundred." },
      { s: 'jungwon', f: 'serious', t: "Niki, if you say one more number I'm having you removed from the council." },
      { s: 'niki', f: 'happy', t: "You can't. I'm beloved." },
      { s: 'jay', f: 'neutral', t: "Just say it's all there, bro. Just say it at the hearing. Who's gonna check?" },
      { s: 'jungwon', f: 'serious', t: "I'm not going to *say* it's all there. I'm going to *know* it's all there." },
      { s: 'sunghoon', f: 'neutral', t: "Sunghoon would simply look at them until they believed him." },
      { s: 'heeseung', f: 'neutral', t: "That works for exactly one person, Sunghoon, and it's not the person who has to read the ledger out loud." },
      { s: 'solar', t: "Who even put it in the ballot box?" },
      { s: 'niki', f: 'happy', t: "Me." },
      { s: 'heeseung', f: 'serious', t: "It was not you." },
      { s: 'niki', f: 'happy', t: "It *could've* been me. Nobody knows. That's the beauty of it." },
      { choose: [
        { t: "(Count the second stack with him.)", stat: { knowledge: 1 }, then: [
          { n: "She pulled a chair up next to him and took the coins, and they counted together, him in his head and her moving her lips, and for ten whole minutes the only sound in the council room was money and Sunoo's laminator, and when she finished her stack he checked it against the ledger and it matched, and he nodded at her once, the way he nodded at the scoreboard after a math competition." }
        ] },
        { t: "(Keep Niki away from him.)", stat: { courage: 1 }, then: [
          { n: "She got Niki in a headlock. It wasn't a good headlock, he was a foot taller than her, but it was enthusiastic, and he was laughing too hard to fight it, and they went over sideways onto the beanbag in the corner, and Jake narrated the whole thing in a hushed golf voice while Jungwon counted on without looking up." }
        ] }
      ] },
      { n: "He was nearly at the bottom of the last stack. The whole room had gone quiet without deciding to." },
      { ifYear: { xmas: 'jungwon' }, then: [
        { n: "Solar couldn't help it. She'd never once in her life been able to help it." },
        { s: 'solar', t: "Won." },
        { n: "His hand stopped. He closed his eyes." },
        { s: 'jungwon', f: 'flustered', t: "Don't. *Say.* My name." },
        { n: "The whole council groaned at once, a long unified groan, like a choir. He swept the stack back together and started it over from the top, ears pink, while Jake fell off his chair." }
      ], else: [
        { s: 'jake', f: 'happy', t: "Every won accounted for. And every *Won.*" },
        { n: "Jungwon lost count. The whole council groaned at once, like a choir, and he swept the stack back together and started it over from the top while Heeseung threw a flashcard at Jake's head." }
      ] },
      { n: "When it was done he put his pen down. Heeseung read the number at the bottom of the ledger out loud, and Jungwon read the number he'd written on his hand, and they were the same number, and nobody cheered, which was somehow better." },
      { s: 'jungwon', f: 'neutral', t: "It matches." },
      { s: 'heeseung', f: 'happy', t: "It always matched." },
      { s: 'jungwon', f: 'serious', t: "Now I know it always matched." },
      { ifGlitch: 3, then: [
        { n: "Above the whiteboard, the council room clock said 12:00. It had said 12:00 since Monday. Heeseung had filled out a maintenance request in triplicate. Nobody had come. Nobody had looked at it for very long, either." }
      ] },
      { n: "They sat there for a minute, the eight of them, around the stacks of money in the room where Heeseung had been fired and she'd been hired and kissed and yelled at, with the radiator going and the snow at the window, and nobody said what everybody was thinking, which was that it wasn't really the tin they were worried about." },
      { s: 'jungwon', f: 'neutral', t: "Thursday." },
      { s: 'sunoo', f: 'happy', t: "I laminated our name tags!" }
    ] }
  ]);

  /* ── Texts ── */
  const T = (R.texts ||= {});
  (T.groups ||= []).push('club', 'retreat');
  T.threads = Object.assign(T.threads || {}, {
    club: "rip solar kim (she's fine probably)", retreat: 'RETREAT FACTS (do not leave)',
    jungwon: 'Won', jihoon: 'jihoney', cherry: 'cher', mom: 'Mom', dad: 'Dad', sunoo: 'sunoo', junkyu: 'kyu', niki: 'niki',
    eunchae: 'Hanlim Unfiltered', forum: 'Hanlim Forum', school: 'Hanlim High School'
  });
  (T.texts ||= []).push(
    // ── week 1 ──
    { id: 'epi-h-tx-mom-asking', thread: 'mom', date: '12/21', slot: 'evening', events: ['epi-h-home'], msgs: [
      { from: 'mom', t: "Your father says I'm 'interrogating' you. I'm asking. There's a difference." },
      { from: 'mom', t: "A retreat. In exam week. I'm still saying it out loud in the kitchen and it still sounds made up." }
    ], reply: [
      { t: "it was a council thing mom i promise", then: [{ from: 'mom', t: 'Mm.' }, { from: 'mom', t: "There's kimchi jjigae on the stove. That's not forgiveness. That's dinner." }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'mom', t: 'I can see that you read it, Solar.' }] }
    ] },
    { id: 'epi-h-tx-club-back', thread: 'club', date: '12/21', slot: 'late', events: ['epi-h-home'], msgs: [
      { from: 'jihoon', t: 'jihoney: Welcome Back To The Land Of The Living' },
      { from: 'cherry', t: 'cherryblossoms: shes been back one day and ur already like this' },
      { from: 'junkyu', t: "junkyute: SOLAR!!!!! i'm so glad ur ok!!!!" },
      { from: 'asahi', t: 'asanoonecares: who renamed the chat' },
      { from: 'jihoon', t: 'jihoney: Not Me' },
      { from: 'hyunsuk', t: 'geniusuk: it literally says jihoney renamed the chat' },
      { from: 'jihoon', t: 'jihoney: Hacked. Grave Sin. Very Sad For Me' }
    ], reply: [
      { t: "WHO RENAMED THE CHAT", then: [{ from: 'jihoon', t: 'jihoney: The Hacker' }, { from: 'jaehyuk', t: "jaehyukkie: it was jihoon. the timestamp's the night you went missing." }, { from: 'jihoon', t: 'jihoney: Snitch' }] },
      { t: "i missed u guys", then: [{ from: 'junkyu', t: 'junkyute: WE MISSED U MORE!!!' }, { from: 'asahi', t: 'asanoonecares: speak for yourself' }, { from: 'asahi', t: 'asanoonecares: (i missed you)' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'asahi', t: 'asanoonecares: she left us on read. iconic' }] }
    ] },
    { id: 'epi-h-tx-school-makeups', thread: 'school', date: '12/22', slot: 'evening', events: ['epi-h-emergency'], msgs: [
      { from: 'school', t: "Re: Make-up examinations (second semester finals). Students who were absent for any part of the examination period of 11-15 December will sit make-up examinations Monday 8 January through Wednesday 10 January, beginning 8:30 a.m., in Room 3-2 and the library annex." },
      { from: 'school', t: "Individual timetables will be posted to the student portal. Examinations will be proctored by Ms. Miyawaki (student teacher). Results will be posted Friday 12 January. Uniform regulations apply." }
    ], reply: [
      { t: "(Screenshot it for the chat.)", then: [] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-retreat-facts', thread: 'retreat', date: '12/22', slot: 'late', events: ['epi-h-emergency'], msgs: [
      { from: 'heeseung', t: 'heeheeseung: RETREAT FACTS. read them. learn them. do not leave this chat.' },
      { from: 'heeseung', t: 'heeheeseung: 1. leadership temple stay. gangwon-do. 2. phones collected at the gate (temple rules). 3. wake-up bell 4am. 4. breakfast was rice porridge. 5. nobody cried (sunoo)' },
      { from: 'sunoo', t: 'sunooshine: i would like to formally say i did not cry' },
      { from: 'jake', t: "jakeys: we were monks. we were MONKS heeseung" },
      { from: 'jay', t: 'jbird: nobody is gonna ask about the porridge' },
      { from: 'niki', t: 'rikiniki: im adding a fact. 6. niki achieved enlightenment' },
      { from: 'heeseung', t: 'heeheeseung: niki you are on your last straw' },
      { from: 'sunghoon', t: 'princehoon: 7. the prince meditated beautifully' },
      { from: 'jungwon', t: "injangwon: please stop adding facts. the facts are fine. go to sleep." }
    ], reply: [
      { t: "8. the vice president was there and it was very spiritual", then: [{ from: 'heeseung', t: 'heeheeseung: NO MORE FACTS' }, { from: 'jake', t: 'jakeys: fact 8 is my favorite fact' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'niki', t: 'rikiniki: she is meditating' }] }
    ] },
    { id: 'epi-h-tx-jw-radio', thread: 'jungwon', date: '12/22', slot: 'late', events: ['epi-h-emergency'], msgs: [
      { from: 'jungwon', t: 'home. 10:58. two minutes early.' },
      { from: 'jungwon', t: "i don't know what that station was. i left it on." }
    ], reply: [
      { t: "good. leave it on forever", then: [{ from: 'jungwon', t: "my mother's going to get in the car tomorrow and think she's been carjacked." }, { from: 'jungwon', t: 'goodnight, sol.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jungwon', t: 'goodnight.' }] }
    ] },
    { id: 'epi-h-tx-club-machine', thread: 'club', date: '12/23', slot: 'late', events: ['epi-h-karaoke'], msgs: [
      { from: 'cherry', t: "cherryblossoms: solar's vending machine is haunted and i have never been happier" },
      { from: 'hyunsuk', t: "geniusuk: it's a machine. it's broken. you press the button it gives you a can" },
      { from: 'jaehyuk', t: "jaehyukkie: it doesn't stock those, though. i checked the front. they aren't in it." },
      { from: 'junkyu', t: 'junkyute: are u ok solar!!! :(' },
      { from: 'asahi', t: 'asanoonecares: no one cares' },
      { from: 'asahi', t: 'asanoonecares: (it was weird though)' },
      { from: 'jihoon', t: 'jihoney: The Machine Has Chosen You. Accept Your Destiny' }
    ], reply: [
      { t: "IT'S NOT FUNNY", then: [{ from: 'cherry', t: "cherryblossoms: it's a little funny" }, { from: 'jihoon', t: 'jihoney: Its Extremely Funny. Goodnight Chosen One' }] },
      { t: "im fine kyu", then: [{ from: 'junkyu', t: 'junkyute: ok!!! drink water not haunted cans!!!' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'cherry', t: "cherryblossoms: she's scared. i love it here" }] }
    ] },
    { id: 'epi-h-tx-mom-polite', thread: 'mom', date: '12/24', slot: 'after', msgs: [
      { from: 'mom', t: 'Your father wants to know if the boy is coming tomorrow.' },
      { from: 'mom', t: "I said which boy. He said 'the polite one.' I said they're both polite. He said 'the one who isn't Jihoon.'" }
    ], reply: [
      { t: "his name is JUNGWON mom", then: [{ from: 'mom', t: 'I know his name, Solar. Your father is pretending not to. It makes him feel tall.' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'mom', t: "I'm buying the good fruit. Just in case." }] }
    ] },
    { id: 'epi-h-tx-eve-jw', thread: 'jungwon', date: '12/24', slot: 'late', flag: 'epi-route-jungwon', events: ['epi-h-eve'], msgs: [
      { from: 'jungwon', t: "i'm back inside. nobody noticed." },
      { from: 'jungwon', t: "i'm meeting your parents tomorrow. properly. i've written notes." },
      { from: 'jungwon', t: 'merry christmas eve, sol.' }
    ], reply: [
      { t: "you wrote NOTES??", then: [{ from: 'jungwon', t: "three pages. your father likes fishing. i've read about fishing." }] },
      { t: "merry christmas eve won", then: [{ from: 'jungwon', t: 'go to sleep. santa is watching. so is my mother.' }] }
    ] },
    { id: 'epi-h-tx-eve-jh', thread: 'jihoon', date: '12/24', slot: 'late', flag: 'epi-route-jihoon', events: ['epi-h-eve'], msgs: [
      { from: 'jihoon', t: 'Merry Christmas Eve Skank' },
      { from: 'jihoon', t: "Don't Get Used To It" },
      { from: 'jihoon', t: "Cocoa Tomorrow. Tell Your Mom Not To Buy Any, She Buys The Wrong Kind And Then Pretends It's Fine" }
    ], reply: [
      { t: "merry christmas eve ungrateful rug", then: [{ from: 'jihoon', t: 'Thats My Line. Thief' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jihoon', t: 'Rude. Sleep Well. I Mean That Normally' }] }
    ] },
    { id: 'epi-h-tx-eve-council', thread: 'retreat', date: '12/24', slot: 'late', flag: 'epi-route-council', events: ['epi-h-eve'], msgs: [
      { from: 'sunoo', t: 'sunooshine: we used SO much tinsel tonight' },
      { from: 'heeseung', t: 'heeheeseung: 412 pieces. i counted' },
      { from: 'jake', t: 'jakeys: merry christmas from the temple' },
      { from: 'niki', t: 'rikiniki: i still have tinsel in places' },
      { from: 'jay', t: 'jbird: dont tell us where' }
    ], reply: [
      { t: "merry christmas idiots", then: [{ from: 'sunghoon', t: 'princehoon: merry christmas. - s' }, { from: 'jungwon', t: "injangwon: you don't have to sign it in the group chat." }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'sunoo', t: 'sunooshine: merry christmas solar!!!!' }] }
    ] },
    { id: 'epi-h-tx-xmas-jh', thread: 'jihoon', date: '12/25', slot: 'evening', events: ['epi-h-christmas'], msgs: [
      { from: 'jihoon', t: "Your Boyfriend Said 'Merry Christmas, Jihoon' Like A Threat" },
      { from: 'jihoon', t: 'Love That For Him. Very Festive. Very Hostage Video' }
    ], reply: [
      { t: "he was being NICE", then: [{ from: 'jihoon', t: 'He Was Being Polite. Polite Is Different. Ask Your Mom, She Knows The Difference. She Likes Me' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jihoon', t: 'Cocoa Was Better This Year. Say It' }] }
    ] },
    { id: 'epi-h-tx-xmas-jw', thread: 'jungwon', date: '12/25', slot: 'late', events: ['epi-h-christmas'], msgs: [
      { from: 'jungwon', t: 'thank you for today.' },
      { from: 'jungwon', t: 'your mother gave me the leftovers in a container. i have to return the container. is that a test.' }
    ], reply: [
      { t: "its a test. you have to bring it back with something in it", then: [{ from: 'jungwon', t: 'understood.' }, { from: 'jungwon', t: "i'm going to need to learn to cook." }] },
      { t: "she likes you won", then: [{ from: 'jungwon', t: "she said his name eleven times." }, { from: 'jungwon', t: "but she gave me the container." }] }
    ] },
    { id: 'epi-h-tx-club-doc', thread: 'club', date: '12/26', slot: 'after', msgs: [
      { from: 'jaehyuk', t: "jaehyukkie: i made a doc for the make-ups. everything from the week we missed. it's shared." },
      { from: 'jaehyuk', t: 'jaehyukkie: please do not edit it, jihoon' },
      { from: 'jihoon', t: 'jihoney: Edited It' },
      { from: 'jaehyuk', t: 'jaehyukkie: you changed every heading to NANA' },
      { from: 'hyunsuk', t: "geniusuk: honestly it's easier to study now" }
    ], reply: [
      { t: "jaehyuk ur an angel", then: [{ from: 'jaehyuk', t: "jaehyukkie: do the calculus section first. i mean it." }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-forum-temple', thread: 'forum', date: '12/26', slot: 'evening', msgs: [
      { from: 'forum', t: "4 new replies in WHERE IS THE COUNCIL (part 4)" },
      { from: 'forum', t: "anon: they were at a temple / anon: which temple / anon: a TEMPLE temple / anon: name one monk" }
    ], reply: [
      { t: "(Close the app.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-eunchae-ask', thread: 'eunchae', date: '12/27', slot: 'after', msgs: [
      { from: 'eunchae', t: "hi!!! eunchae here from hanlim unfiltered (the forum's livestream!!)" },
      { from: 'eunchae', t: "would the vice president like to comment on the council retreat for our new year's eve special? totally on the record. very professional. i have a ring light now" }
    ], reply: [
      { t: "no comment", then: [{ from: 'eunchae', t: "ok!! 'the vice president declined to comment' is ALSO content. thank u!!" }] },
      { t: "it was very spiritual", then: [{ from: 'eunchae', t: 'omg. ok. that is going on screen in 72pt font' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'eunchae', t: "seen 2:14pm. i'll take it" }] }
    ] },
    { id: 'epi-h-tx-club-seance', thread: 'club', date: '12/28', slot: 'after', events: ['epi-h-seance'], msgs: [
      { from: 'asahi', t: 'asanoonecares: kazuha says thank you for having her and also that the board liked us' },
      { from: 'cherry', t: "cherryblossoms: kazuha did it. we all agree kazuha did it" },
      { from: 'junkyu', t: "junkyute: i didn't sleep :(" },
      { from: 'jihoon', t: 'jihoney: For The Record I Have Never Heard The Word Iwatodai In My Life' },
      { from: 'hyunsuk', t: 'geniusuk: nobody asked you' },
      { from: 'jihoon', t: 'jihoney: Just Getting Ahead Of It' }
    ], reply: [
      { t: "kazuha did it", then: [{ from: 'asahi', t: "asanoonecares: she's going to frame that sentence" }] },
      { t: "@jihoney sure jan", then: [{ from: 'jihoon', t: "jihoney: Who's Jan" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-retreat-rehab', thread: 'retreat', date: '12/28', slot: 'evening', msgs: [
      { from: 'niki', t: 'rikiniki: guys someone on the forum said we were in REHAB' },
      { from: 'heeseung', t: 'heeheeseung: do not reply' },
      { from: 'niki', t: 'rikiniki: replied' },
      { from: 'heeseung', t: 'heeheeseung: NIKI' },
      { from: 'niki', t: "rikiniki: i said 'the porridge was too good for rehab' -skull-" },
      { from: 'jungwon', t: 'injangwon: please delete that.' }
    ], reply: [
      { t: "niki im going to end u", then: [{ from: 'niki', t: 'rikiniki: LMAOOO u cant ur the vice president. thats a crime' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jake', t: 'jakeys: rehab-solutely not' }] }
    ] },
    { id: 'epi-h-tx-party-jw', thread: 'jungwon', date: '12/29', slot: 'late', flag: 'epi-route-jungwon', events: ['epi-h-party'], msgs: [
      { from: 'jungwon', t: 'are you home safe.' },
      { from: 'jungwon', t: "i'm not asking anything else. i just want to know you're home." }
    ], reply: [
      { t: "im home. cherry's here. im ok", then: [{ from: 'jungwon', t: 'okay.' }, { from: 'jungwon', t: 'tell cherry thank you. she knows what for.' }] },
      { t: "home. i love you", then: [{ from: 'jungwon', t: 'okay.' }, { from: 'jungwon', t: 'i love you. go to sleep.' }] }
    ] },
    { id: 'epi-h-tx-party-jh', thread: 'jihoon', date: '12/29', slot: 'late', flag: 'epi-route-jihoon', events: ['epi-h-party'], msgs: [
      { from: 'jihoon', t: 'Home?' }
    ], reply: [
      { t: "home", then: [{ from: 'jihoon', t: "Good. Don't Tell Anyone I Was Nice Tonight" }, { from: 'jihoon', t: 'I Have A Brand' }] },
      { t: "thank you jihoon", then: [{ from: 'jihoon', t: "Don't" }, { from: 'jihoon', t: 'Go To Sleep' }] }
    ] },
    { id: 'epi-h-tx-party-council', thread: 'retreat', date: '12/29', slot: 'late', flag: 'epi-route-council', events: ['epi-h-party'], msgs: [
      { from: 'jay', t: "jbird: rumor's dead" },
      { from: 'jake', t: 'jakeys: and so is my knuckle' },
      { from: 'heeseung', t: 'heeheeseung: nobody punched anybody. officially. for the record. RETREAT FACT 9' },
      { from: 'sunoo', t: 'sunooshine: i have ice packs at the cafe if anyone needs!!!' }
    ], reply: [
      { t: "that was the dumbest best night of my life", then: [{ from: 'niki', t: 'rikiniki: SAME' }, { from: 'jungwon', t: 'injangwon: ice. now. all of you.' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-mom-tteokguk', thread: 'mom', date: '12/30', slot: 'after', msgs: [
      { from: 'mom', t: "I'm making tteokguk on Monday." },
      { from: 'mom', t: 'You are eating two bowls. You owe me a year.' }
    ], reply: [
      { t: "thats not how it works", then: [{ from: 'mom', t: "It's how it works in this house." }] },
      { t: "ok mom", then: [{ from: 'mom', t: 'Good girl. Bring Jihoon if he wants. Bring the polite one if his mother lets him out.' }] }
    ] },
    { id: 'epi-h-tx-club-countdown', thread: 'club', date: '12/31', slot: 'after', msgs: [
      { from: 'junkyu', t: "junkyute: WHO'S WATCHING THE COUNTDOWN!!!" },
      { from: 'hyunsuk', t: "geniusuk: eunchae's doing a live about the council tonight lmao" },
      { from: 'cherry', t: 'cherryblossoms: oh i am WATCHING that' },
      { from: 'asahi', t: 'asanoonecares: i hate new years. i hate it here' },
      { from: 'jihoon', t: 'jihoney: Happy New Year To Everyone Except The Forum' }
    ], reply: [
      { t: "pls dont watch the live", then: [{ from: 'cherry', t: 'cherryblossoms: we are ALL watching the live' }, { from: 'junkyu', t: "junkyute: i'll watch with u solar!!! moral support!!!" }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    // ── week 2 into week 3 ──
    { id: 'epi-h-tx-dad-newyear', thread: 'dad', date: '1/1', slot: 'after', msgs: [
      { from: 'dad', t: 'Happy New Year.' },
      { from: 'dad', t: 'Your mother says I should text you, even though you are in the next room.' }
    ], reply: [
      { t: "happy new year dad", then: [{ from: 'dad', t: 'Thank you. Come get more tteokguk. Your mother is watching the pot like a hawk.' }] },
      { t: "(Go hug him instead.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-jw-stairs', thread: 'jungwon', date: '1/1', slot: 'late', flag: 'epi-h-notes', msgs: [
      { from: 'jungwon', t: "the note. the one that said heal before the stairs." },
      { from: 'jungwon', t: "i'm not going to ask what stairs." },
      { from: 'jungwon', t: 'but if there are stairs. heal before them.' }
    ], reply: [
      { t: "ok", then: [{ from: 'jungwon', t: 'okay.' }] },
      { t: "how do you always know", then: [{ from: 'jungwon', t: "i don't." }, { from: 'jungwon', t: 'i just know you.' }] }
    ] },
    { id: 'epi-h-tx-forum-motion', thread: 'forum', date: '1/2', slot: 'evening', events: ['epi-h-motion'], msgs: [
      { from: 'forum', t: "hanlim_accountability posted in Student Government: MOTION TO IMPEACH THE 2024 STUDENT COUNCIL (dereliction of duty, the bake-sale tin). Sign below for a hearing." },
      { from: 'forum', t: '142 signatures · trending' }
    ], reply: [
      { t: "(Close the app.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-retreat-ledger', thread: 'retreat', date: '1/3', slot: 'after', events: ['epi-h-motion'], msgs: [
      { from: 'heeseung', t: 'heeheeseung: everyone calm down. i have a ledger.' },
      { from: 'jake', t: "jakeys: im not saying it. im NOT saying impeach deez" },
      { from: 'jake', t: 'jakeys: i said it' },
      { from: 'niki', t: 'rikiniki: i made an alt to sign it so i can unsign it dramatically at the hearing' },
      { from: 'heeseung', t: 'heeheeseung: banned.' },
      { from: 'niki', t: 'rikiniki: which one' },
      { from: 'heeseung', t: 'heeheeseung: all of them.' },
      { from: 'jungwon', t: "injangwon: the tin is fine. every won is in it. nobody comment on anything." }
    ], reply: [
      { t: "jihoon already commented", then: [{ from: 'jungwon', t: 'injangwon: i saw.' }, { from: 'jungwon', t: "injangwon: i'm handling it." }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-club-democracy', thread: 'club', date: '1/3', slot: 'late', msgs: [
      { from: 'cherry', t: 'cherryblossoms: @jihoney stop commenting on the motion' },
      { from: 'jihoon', t: 'jihoney: I Am Engaging In Democracy' },
      { from: 'jaehyuk', t: "jaehyukkie: you wrote 'where's the tin, preppy' forty times" },
      { from: 'jihoon', t: 'jihoney: Forty One. Democracy Is A Marathon' },
      { from: 'hyunsuk', t: "geniusuk: bro it's literally your best friend's council" }
    ], reply: [
      { t: "PARK JIHOON", then: [{ from: 'jihoon', t: "jihoney: Full Name. She's Upset. Logging Off. (Not Logging Off)" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'asahi', t: 'asanoonecares: no one cares about the tin' }] }
    ] },
    { id: 'epi-h-tx-retreat-clocks', thread: 'retreat', date: '1/6', slot: 'after', events: ['epi-h-clocks'], msgs: [
      { from: 'sunoo', t: "sunooshine: halmeoni says the clocks are fine now. she says they were 'resting'" },
      { from: 'niki', t: 'rikiniki: -skull-' },
      { from: 'jay', t: "jbird: clocks don't rest bro" },
      { from: 'sunghoon', t: 'princehoon: everything rests. - s' },
      { from: 'jungwon', t: 'injangwon: sol. call me later.' }
    ], reply: [
      { t: "ok", then: [] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-kyu-playlist', thread: 'junkyu', date: '1/7', slot: 'after', msgs: [
      { from: 'junkyu', t: 'solar!!! i made u a study playlist for tomorrow!!!' },
      { from: 'junkyu', t: "it's four hours of rain sounds :(" },
      { from: 'junkyu', t: "the :( is bc i couldn't find any songs that weren't distracting. i tried!!!" }
    ], reply: [
      { t: "KYU ILY", then: [{ from: 'junkyu', t: 'ILY MORE!!! good luck!!! do the calculus first jaehyuk said!!!' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'junkyu', t: "it's ok if u don't listen to it :(" }] }
    ] },
    { id: 'epi-h-tx-school-reminder', thread: 'school', date: '1/7', slot: 'evening', msgs: [
      { from: 'school', t: 'Reminder: make-up examinations begin tomorrow, Monday 8 January, 8:30 a.m. Please arrive fifteen minutes early with your student ID.' },
      { from: 'school', t: 'Students are reminded that the uniform code applies in full during examinations. Facial piercings are not permitted.' }
    ], reply: [
      { t: "(Touch the nose stud. Leave it in.)", silent: true, then: [] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-school-hearing', thread: 'school', date: '1/8', slot: 'evening', events: ['epi-h-makeup'], msgs: [
      { from: 'school', t: 'NOTICE OF HEARING. A student motion concerning the conduct of the Student Council (petition filed 8 January) will be heard at a special assembly on Thursday 11 January, after lunch, in the gymnasium.' },
      { from: 'school', t: 'The hearing will be moderated by Kim Chaewon (Debate Society). Attendance is expected of all students. Recording is at the discretion of the moderator.' }
    ], reply: [
      { t: "(Screenshot it for the council.)", then: [] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-chaewon', thread: 'school', date: '1/8', slot: 'late', events: ['epi-h-makeup'], msgs: [
      { from: 'chaewon', t: "This is Chaewon. I'm moderating Thursday." },
      { from: 'chaewon', t: "Ground rules tomorrow, in writing, to both sides. Please don't contact me about the motion before then. I'm saying the same thing to everyone. — C" }
    ], reply: [
      { t: "understood. thank you chaewon", then: [{ from: 'chaewon', t: 'Thank you. Get some sleep. You have an exam.' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-gate-jw', thread: 'jungwon', date: '1/10', slot: 'late', flag: 'epi-h-jw-gate', msgs: [
      { from: 'jungwon', t: 'i fixed your scarf in front of my mother.' },
      { from: 'jungwon', t: "she didn't say anything in the car. for eleven minutes." },
      { from: 'jungwon', t: "that's a record." }
    ], reply: [
      { t: "is that good or bad", then: [{ from: 'jungwon', t: "i don't know yet." }, { from: 'jungwon', t: "i'd do it again." }] },
      { t: "my scarf has never looked better", then: [{ from: 'jungwon', t: 'it was crooked. it was bothering me.' }, { from: 'jungwon', t: "that's not the only reason." }] }
    ] },
    { id: 'epi-h-tx-witness-jh', thread: 'jihoon', date: '1/10', slot: 'late', flag: 'epi-h-jihoon-speaks', msgs: [
      { from: 'jihoon', t: "I'm Wearing A Tie Tomorrow" },
      { from: 'jihoon', t: 'Do Not Make It A Thing' }
    ], reply: [
      { t: "do you even own a tie", then: [{ from: 'jihoon', t: "It's Your Dad's. Your Mom Gave It To Me. Years Ago. Don't Make That A Thing Either" }] },
      { t: "thank you jihoon", then: [{ from: 'jihoon', t: 'I Said Do Not Make It A Thing' }, { from: 'jihoon', t: 'Night Sol' }] }
    ] },
    { id: 'epi-h-tx-gym-council', thread: 'retreat', date: '1/10', slot: 'late', flag: 'epi-h-gym-done', msgs: [
      { from: 'heeseung', t: 'heeheeseung: the gym is done. go to sleep. all of you.' },
      { from: 'sunoo', t: 'sunooshine: it looks SO pretty' },
      { from: 'jake', t: "jakeys: we're balloon professionals now" },
      { from: 'niki', t: 'rikiniki: i popped one on purpose and blamed jay' },
      { from: 'jay', t: 'jbird: i know' }
    ], reply: [
      { t: "it's perfect. goodnight", then: [{ from: 'jungwon', t: 'injangwon: goodnight. thank you. all of you.' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-forum-ghost', thread: 'forum', date: '1/11', slot: 'evening', events: ['epi-h-hearing'], msgs: [
      { from: 'forum', t: "New thread in General: GHOST VP?? (clip from today's hearing)" },
      { from: 'forum', t: 'anon: CGI / anon: eunchae did NOT edit that, i was there / anon: frame 214 again??' }
    ], reply: [
      { t: "(Close the app.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-eunchae-clip', thread: 'eunchae', date: '1/11', slot: 'late', events: ['epi-h-hearing'], msgs: [
      { from: 'eunchae', t: "hi. it's eunchae. i swear i didn't edit it" },
      { from: 'eunchae', t: "i can take it down if you want. i mean it. i know i'm annoying but i'm not like that" }
    ], reply: [
      { t: "take it down. please", then: [{ from: 'eunchae', t: "done. it's down. people already saved it. i'm sorry" }] },
      { t: "leave it. nobody'll believe it anyway", then: [{ from: 'eunchae', t: "ok. for what it's worth i believe it" }, { from: 'eunchae', t: "that came out weird. goodnight!!" }] }
    ] },
    { id: 'epi-h-tx-school-results', thread: 'school', date: '1/12', slot: 'after', msgs: [
      { from: 'school', t: 'Make-up examination results have been posted to the student portal. Ranks for the semester will be updated by end of day.' },
      { from: 'school', t: 'Winter vacation resumes Saturday. Have a safe and restful break.' }
    ], reply: [
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-tx-club-tomorrow', thread: 'club', date: '1/12', slot: 'evening', msgs: [
      { from: 'junkyu', t: 'junkyute: ice cream and hugs tomorrow!!! solar u owe us a hangout!!!' },
      { from: 'cherry', t: "cherryblossoms: come over tomorrow. i mean it. i'm not asking" },
      { from: 'asahi', t: "asanoonecares: i'll be there. not because i care" },
      { from: 'hyunsuk', t: "geniusuk: i'll drive" },
      { from: 'jaehyuk', t: 'jaehyukkie: congrats on calculus, by the way. i saw.' },
      { from: 'jihoon', t: 'jihoney: Tomorrow. All Of Us. Nobody Is Allowed To Be Weird Or Vanish' }
    ], reply: [
      { t: "tomorrow. i promise", then: [{ from: 'cherry', t: "cherryblossoms: screenshotted. that's legally binding" }, { from: 'junkyu', t: 'junkyute: YAYYYY!!!' }] },
      { t: "i love you guys", then: [{ from: 'asahi', t: 'asanoonecares: gross' }, { from: 'asahi', t: 'asanoonecares: (same)' }, { from: 'jihoon', t: "jihoney: Why Does That Sound Like A Goodbye. Stop It" }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-h-am-kyu-eat', thread: 'junkyu', from: '12/21', to: '12/24', msgs: [
      { from: 'junkyu', t: 'did u eat today!!! :(' },
      { from: 'junkyu', t: 'i cried when i saw u btw. in the gym. i want u to know that' }
    ], reply: [
      { t: "i ate kyu. i saw u cry. ily", then: [{ from: 'junkyu', t: "ok!!! i'm going to cry again now but it's a good one!!!" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'junkyu', t: 'ok :( eat something!!!' }] }
    ] },
    { id: 'epi-h-am-retreat-quiz', thread: 'retreat', from: '12/23', to: '12/30', msgs: [
      { from: 'heeseung', t: 'heeheeseung: pop quiz. what time was the wake-up bell' },
      { from: 'sunoo', t: 'sunooshine: 4am!!!' },
      { from: 'jake', t: 'jakeys: monk oclock' },
      { from: 'heeseung', t: 'heeheeseung: sunoo gets a gold star. jake gets nothing' }
    ], reply: [
      { t: "4am. rice porridge. phones at the gate", then: [{ from: 'heeseung', t: 'heeheeseung: perfect. you get a gold star too' }, { from: 'niki', t: 'rikiniki: teachers pet' }] },
      { t: "(Leave it on read.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-am-niki-meme', thread: 'niki', from: '12/26', to: '1/2', msgs: [
      { from: 'niki', t: "LMAOOO did u see jake's meme about the forum" },
      { from: 'niki', t: "it's jungwon's yearbook photo with 'where is the council' photoshopped on it like a missing poster -skull-" },
      { from: 'niki', t: 'he hasnt seen it yet. dont tell him' }
    ], reply: [
      { t: "send it to me", then: [{ from: 'niki', t: "[image]" }, { from: 'niki', t: 'u didnt get this from me' }] },
      { t: "im telling him", then: [{ from: 'niki', t: 'snitch. traitor. vice president behavior' }] }
    ] },
    { id: 'epi-h-am-sunoo-eat', thread: 'sunoo', from: '12/26', to: '1/3', msgs: [
      { from: 'sunoo', t: 'halmeoni asked if you are eating. i said yes' },
      { from: 'sunoo', t: 'are you eating?? stay hydrated!!!!' }
    ], reply: [
      { t: "yes sunoo! tell her thank you", then: [{ from: 'sunoo', t: "she says come get a croissant. she's saving you one. she's very serious about it" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'sunoo', t: "i'm going to tell her yes anyway!!" }] }
    ] },
    { id: 'epi-h-am-cher-skate', thread: 'cherry', from: '12/28', to: '1/7', msgs: [
      { from: 'cherry', t: "he sent me a picture of a skate and the word soon" },
      { from: 'cherry', t: 'a SKATE. one skate. what does it MEAN sol' }
    ], reply: [
      { t: "it means soon", then: [{ from: 'cherry', t: "i'm going to throw my phone into the han river" }, { from: 'cherry', t: "i'm not. i'm going to look at it again" }] },
      { t: "AHHHH", then: [{ from: 'cherry', t: 'DONT ahhh me' }, { from: 'cherry', t: '(ahhh)' }] }
    ] },
    { id: 'epi-h-am-forum-car', thread: 'forum', from: '12/28', to: '1/1', msgs: [
      { from: 'forum', t: 'Trending: WHERE IS THE COUNCIL (part 5)' },
      { from: 'forum', t: "anon: someone says they saw yang jungwon's mom's car outside a temple in gangwon-do?? / anon: that's every car" }
    ], reply: [
      { t: "(Close the app.)", silent: true, then: [] }
    ] },
    { id: 'epi-h-am-mom-book', thread: 'mom', from: '1/3', to: '1/7', msgs: [
      { from: 'mom', t: "Your calculus book is on the kitchen table. I put it there." },
      { from: 'mom', t: "It's not decoration." }
    ], reply: [
      { t: "i KNOW mom", then: [{ from: 'mom', t: "Then it shouldn't still be there tomorrow." }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'mom', t: "It's still there, Solar." }] }
    ] },
    { id: 'epi-h-am-eunchae-motion', thread: 'eunchae', from: '1/4', to: '1/10', msgs: [
      { from: 'eunchae', t: 'hi again!! any comment on the motion?? (pls)' },
      { from: 'eunchae', t: "even one word. i'll take a word. i'll take an emoji" }
    ], reply: [
      { t: "🙂", then: [{ from: 'eunchae', t: "THANK YOU. 'the vice president remains calm.' amazing" }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'eunchae', t: 'respect. i will be at the hearing. front row. ring light' }] }
    ] },
    { id: 'epi-h-am-jw-study-group', thread: 'jungwon', from: '1/4', to: '1/7', flag: 'epi-route-jungwon', msgs: [
      { from: 'jungwon', t: 'my mother asked who i was texting. i said a study group.' },
      { from: 'jungwon', t: "you're the study group." }
    ], reply: [
      { t: "im a great study group", then: [{ from: 'jungwon', t: "you're a terrible study group. you're my favorite one." }] },
      { t: "what are we studying", then: [{ from: 'jungwon', t: 'chapter six.' }, { from: 'jungwon', t: "and you. mostly you. don't tell my mother." }] }
    ] },
    { id: 'epi-h-am-jh-awake', thread: 'jihoon', from: '1/4', to: '1/10', flag: 'epi-route-jihoon', msgs: [
      { from: 'jihoon', t: 'Are You Awake' },
      { from: 'jihoon', t: 'Never Mind. Go To Sleep. That Was A Test' }
    ], reply: [
      { t: "im awake. are you ok", then: [{ from: 'jihoon', t: "I'm Fine. I'm Watering Plants. In January. Don't Ask" }, { from: 'jihoon', t: 'Night Sol' }] },
      { t: "(Leave it on read.)", silent: true, then: [{ from: 'jihoon', t: 'Passed The Test. Proud Of You. Sleep' }] }
    ] }
  );
})();
