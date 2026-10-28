/* The HOAX epilogue (12/21/2023-1/12/2024): the crew's and the council's home bonds (R.bonds), two hangouts each.
   Writer F, epilogue batch 5. Data only; loaded with the world (epilogue.js). Bonds go through add() so they merge with
   people.js (Writer E: jungwon, jihoon, cherry, council) in either load order. Role 'friend' for all.

   Bonds (the first unseen hangout whose gates fit is the one offered):
     sunoo     epi-h-sunoo-1     'four croissants'          12/23-12/31 after, after epi-h-emergency (Yeobo's, his grandmother, the temple)
               epi-h-sunoo-2     'a real one'               1/3-1/7 evening, after epi-h-motion (posters at Yeobo's)
     junkyu    epi-h-junkyu-1    'ice cream and hugs'       12/26-12/31 evening, after epi-h-karaoke (outside the convenience store)
               epi-h-junkyu-2    'full combo'               1/2-1/7 evening, after epi-h-motion (the arcade's rhythm machine)
     hyunsuk   epi-h-hyunsuk-1   'two of everything'        12/23-12/31 after, after epi-h-study-plans (the bench outside the store)
               epi-h-hyunsuk-2   'page four'                1/4-1/7 after (the town library)
     jaehyuk   epi-h-jaehyuk-1   'colour-coded'             12/26-12/31 after, after epi-h-study-plans (the town library)
               epi-h-jaehyuk-2   'procedure'                1/3-1/7 after, after epi-h-motion (her room, the handbook, Mom)
     asahi     epi-h-asahi-1     'full sentences'           12/21-12/26 evening, after epi-h-home (the Christmas lights)
               epi-h-asahi-2     'tadaima'                  1/8-1/10 after, after epi-h-seance + epi-h-livestream + epi-h-makeup (his classroom, Kazuha)
     heeseung  epi-h-heeseung-1  'retreat facts'            12/23-12/31 after, after epi-h-emergency (Jungwon's street, a lunchbox)
               epi-h-heeseung-2  'every won'                1/8-1/10 evening, after epi-h-makeup (the council room, the ledger)
     jake      epi-h-jake-1      'snow way'                 12/26-12/31 after, after epi-h-christmas (the park, Layla and Nana)
               epi-h-jake-2      'meme review'              1/3-1/7 after, after epi-h-motion (outside the convenience store)
     sunghoon  epi-h-sunghoon-1  'soon'                     12/26-12/31 after, after epi-h-home (the ice rink)
               epi-h-sunghoon-2  'the most impressive thing' 1/1-1/7 evening, after epi-h-new-year (the Christmas lights)
     jay       epi-h-jay-1       'kick like'                12/26-12/31 evening, after epi-h-emergency (the park under the lamps)
               epi-h-jay-2       'mutuals'                  1/3-1/7 evening, after epi-h-motion (walking her home)
     niki      epi-h-niki-1      'part five'                12/22-12/31 evening, after epi-h-part-four (the arcade)
               epi-h-niki-2      'make-ups'                 1/8-1/10 after, after epi-h-makeup (the hallway outside the exam room)

   Flags set (local, nothing else needs to read them): epi-h-temple-goat (Sunoo told his grandmother about the goat),
     epi-h-poster-real-one (Sunoo's poster keeps "(a real one)"), epi-h-jaehyuk-told (she told Jaehyuk about the glitches),
     epi-h-tadaima (she answered Kazuha's okaeri), epi-h-jay-fight (she told Jay she'll fight the motion),
     epi-h-niki-alt (she wrote one of Niki's alt-account comments).
   Flags read: epi-route-* (via ifEpiRoute: council in jake-1 / heeseung-2, jihoon in hyunsuk-2, jungwon in hyunsuk-2).
   ifYear read: rank sunoo 7 (sunoo-1), rank junkyu 10 (junkyu-1).
   ifGlitch 3 (week-3 residue everyone sees: stopped clocks, snow going up) in sunoo-2, junkyu-2, hyunsuk-2, jaehyuk-2,
     asahi-2, heeseung-2, jake-2, jay-2, niki-2. Glitch lines: strain in sunoo-1 and jaehyuk-2 (lies that hold the cover),
     near in heeseung-1 (Jungwon at his window, silent). No scheduled glitch ids used.
   Oblique strangers looks, one each: Jay (jay-1, "you kick like—"), Niki (niki-1, her aim), Sunghoon (sunghoon-1, holding her up).
   Inventions for Kat to confirm: the RETREAT FACTS answers (wake-up at four, rice and doenjang soup, Sunoo's temple goat that
     Heeseung bans); Asahi was at the Christmas lights guarding a spot for his family's photo and agreed to Kazuha's séance
     there; Jake walked Layla past Solar's house while she was gone; Hyunsuk buys two of everything out of a Cherry habit;
     Niki's alt accounts (ufo_hanlim, councilwasabducted); Jaehyuk's line to Mom ("I was studying"); Kazuha checked maps for
     Iwatodai and found none; Sunghoon's crossed-out promposal list (skywriting, a flash mob, an ice show); the town leaves
     its Christmas lights up into January; Sakura teases Niki about his Tekken scores. Nothing about the sophomore year is
     filled in (Hyunsuk's "I know what comes after it" only); the video and Danielle are never mentioned. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const AFTER = ['after'];
  const EVE = ['evening'];

  /* ── Sunoo ── */
  add('sunoo', 'friend', [
    { id: 'epi-h-sunoo-1', title: 'four croissants', hint: "Sunoo is behind the counter at Yeobo's, and his grandmother is already waving you in.",
      after: '12/23', until: '12/31', slots: AFTER, events: ['epi-h-emergency'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's", time: 'Daytime', scene: [
      { music: 'epi-h-home' },
      { n: "Yeobo's smelled the way it always had, butter and burnt sugar and the radiator's dusty first-week-of-winter smell, the bell over the door giving its little cough, and Sunoo's grandmother was out from behind the counter before it had finished, wiping her hands on her apron, small and quick and exactly as tall as Solar remembered, which was not very." },
      { s: 'halmeoni', t: "There she is. Sit. You're thin." },
      { s: 'solar', t: "I've been back like three days." },
      { s: 'halmeoni', t: "Three days is nothing. Sunoo-ya. The good ones." },
      { n: "Sunoo is already plating croissants, four of them on a plate meant for one, his ears pink to the tips, and he sets them down in front of her and slides into the other side of the booth and folds his hands and stares at her like she might evaporate if he blinks." },
      { s: 'sunoo', f: 'happy', t: "Hi." },
      { s: 'solar', t: "Hi, Sunoo." },
      { s: 'sunoo', f: 'flustered', t: "Sorry. I'm being weird. It's just, you're in the booth. The normal booth. With the crack in the tile." },
      { n: "Over there there'd been a Yeobo's too, the same name over a different door, a different woman behind a different counter, and Solar had gone in exactly once, early, months before anyone came looking for her, and stood in the doorway long enough for the woman to ask if she was lost. She'd said no. She'd left without buying anything. This one had the crack in the third tile from the door, and she'd stepped over it coming in without looking down." },
      { ifYear: { rank: { sunoo: 7 } }, then: [
        { n: "Over there, at the end, he'd been the one who knew her order before she did. He pushed the plate an inch closer to her now without thinking about it. He still did." }
      ] },
      { s: 'halmeoni', t: "So. The temple. Sunoo says there were monks." },
      { s: 'sunoo', f: 'surprised', t: "Halmeoni—" },
      { s: 'halmeoni', t: "Did they feed you? Monks don't believe in butter. I've read about it." },
      { choose: [
        { t: "Rice. So much rice. And soup at four in the morning.", stat: { charm: 1 }, then: [
          { s: 'halmeoni', t: "Hm. Barbaric." },
          { glitch: { strain: 1 } },
          { n: "She went back to the register satisfied, and Sunoo deflated across the table like someone had let the air out of him." },
          { s: 'sunoo', f: 'sad', t: "You're so good at that. It's scary. I told her the monks had a goat." },
          { s: 'solar', t: "Why would the monks have a goat." },
          { s: 'sunoo', f: 'flustered', t: "I panicked, Sol!" }
        ] },
        { t: "(Let Sunoo take this one.)", flag: 'epi-h-temple-goat', then: [
          { s: 'sunoo', f: 'flustered', t: "They had a goat!" },
          { s: 'halmeoni', t: "A goat." },
          { s: 'sunoo', f: 'flustered', t: "A temple goat. For... peace. It was very peaceful. The goat." },
          { n: "His grandmother looked at him for a long moment, and then at Solar, and then back at him, with the face of a woman who had raised one boy already and was not about to be outwitted by his son." },
          { s: 'halmeoni', t: "Eat your croissant, Solar." },
          { n: "Which, in this house, meant the matter was closed. It also meant she knew. Sunoo put his forehead on the table." }
        ] }
      ] },
      { n: "Before she left his grandmother pressed a paper bag into her hands, still warm through the bottom, the top folded twice." },
      { s: 'halmeoni', t: "For the president. His mother doesn't feed him." },
      { s: 'solar', t: "He's not allowed out." },
      { s: 'halmeoni', t: "Then it goes through a window. You're young. Figure it out." },
      { s: 'sunoo', f: 'sad', t: "I cried for like an hour when we got back. In the walk-in. She thought I failed something." },
      { s: 'solar', t: "Did you tell her—" },
      { s: 'sunoo', f: 'neutral', t: "- I told her I failed something." },
      { n: "He'd crossed a whole world to come and get her and then come home and let his grandmother think he'd flunked a test, because that was easier to say than the other thing, and he was smiling at her now like none of it cost anything. She ate all four croissants." }
    ] },

    { id: 'epi-h-sunoo-2', title: 'a real one', hint: "Sunoo is at Yeobo's after the rush, surrounded by poster board and glitter pens.",
      after: '1/3', until: '1/7', slots: EVE, events: ['epi-h-motion'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's", time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "The chairs were already up on half the tables and Sunoo had taken over the other half, poster board laid out end to end, a cup of glitter pens, a cup of normal pens for when the glitter pens were too much, which was apparently never, and a sheet of draft slogans with most of them crossed out in his neat round hand." },
      { s: 'sunoo', f: 'happy', t: "Okay. Okay okay okay. Be honest. Which one." },
      { n: "SAVE OUR COUNCIL. THE TIN IS FINE. And, in the biggest letters, in pink, outlined twice: WE WERE AT A TEMPLE (a real one)." },
      { s: 'solar', t: "Sunoo. You can't write *a real one*." },
      { s: 'sunoo', f: 'neutral', t: "It makes it more believable." },
      { s: 'solar', t: "It makes it so much less believable." },
      { s: 'halmeoni', t: "I read the forum. This hanlim accountability person. Their spelling is good. I'll give them that." },
      { s: 'sunoo', f: 'surprised', t: "Halmeoni, you're not supposed to be on the forum!" },
      { s: 'halmeoni', t: "I'm on everything. Who do you think taught you to lie badly?" },
      { ifGlitch: 3, then: [
        { n: "Outside the window the snow stopped. Not slowed, stopped, every flake on the street hanging where it was like somebody had paused the town, and then all of it went up, gently, past the streetlight and the sign and the second-floor windows, for one long breath, before it remembered itself and came back down." },
        { n: "Sunoo's glitter pen had stopped too, mid-letter. Behind the counter his grandmother set a cup down very carefully." },
        { s: 'sunoo', f: 'serious', t: "Did you—" },
        { s: 'solar', t: "Yeah." },
        { s: 'sunoo', f: 'neutral', t: "Okay." },
        { n: "He didn't ask. He put the cap back on the pen and took it off again, and his hand was shaking a little, and he drew a very careful heart in the corner of the poster, like that was a thing that could hold something in place." }
      ] },
      { s: 'sunoo', f: 'serious', t: "I never ran for anything because I didn't want anyone looking at me. I still don't. But if they make you stand up in the gym in front of everybody, I'll stand behind you. Holding this." },
      { choose: [
        { t: "Keep *a real one*.", stat: { kindness: 1 }, flag: 'epi-h-poster-real-one', then: [
          { s: 'sunoo', f: 'happy', t: "YES. Halmeoni, she said keep it!" },
          { s: 'halmeoni', t: "Then you're both going to be impeached." }
        ] },
        { t: "Cross it out. Lovingly.", stat: { charm: 1 }, then: [
          { n: "She took the pen from him and drew one small line through it, and he watched like she was putting down a pet." },
          { s: 'sunoo', f: 'sad', t: "It was a real one, though." }
        ] }
      ] },
      { n: "She stayed till the last pen ran out of glitter, which was late, and he walked her to the door with the bell coughing behind them and the snow outside falling the right way, for now, the way snow was supposed to." }
    ] }
  ]);

  /* ── Junkyu ── */
  add('junkyu', 'friend', [
    { id: 'epi-h-junkyu-1', title: 'ice cream and hugs', hint: "Junkyu is outside the convenience store in the snow, holding two ice creams.",
      after: '12/26', until: '12/31', slots: EVE, events: ['epi-h-karaoke'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Winter Street', time: 'Evening', scene: [
      { music: 'epi-h-snow' },
      { n: "He was standing as far from the vending machines as the sidewalk allowed, which was not very far, a cone in each mittened hand, snow collecting on his beanie and his shoulders and the little paper sleeves of both ice creams, and when he saw her coming his whole face did the thing it did, all at once, no part of it held back." },
      { s: 'junkyu', f: 'happy', t: "SOLAR! I got you strawberry! I owe you ice cream. I decided." },
      { s: 'solar', t: "It's minus four, Kyu." },
      { s: 'junkyu', f: 'neutral', t: "That's why it's not melting. It's smart, actually." },
      { s: 'solar', t: "Why are you standing over here." },
      { s: 'junkyu', f: 'serious', t: "Because that machine is haunted and it knows you. I'm not going near it. I don't want a pink can. I want my life." },
      { n: "She took the strawberry. It was a brick. She ate it anyway, because he was watching her do it with his whole chest, and they sat on the step under the store's awning with the fluorescent light buzzing over them and the street going blue." },
      { s: 'junkyu', f: 'neutral', t: "I'm not gonna cry today. I cried Saturday. Asahi filmed it. He says it's going in a folder." },
      { s: 'junkyu', f: 'sad', t: "Was it scary? Over there? Before we found you?" },
      { choose: [
        { t: "Sometimes. At night.", stat: { kindness: 1 }, then: [
          { n: "He didn't say anything to that. He shuffled over on the step until their shoulders were touching through two coats, and stayed there, and kept eating, which was the most Kim Junkyu way there was of saying he'd heard." }
        ] },
        { t: "No. They were nice to me.", then: [
          { s: 'junkyu', f: 'happy', t: "The dog liked me. Koromaru. He liked me better than Asahi. I think about that a lot." },
          { s: 'solar', t: "Everyone likes you better than Asahi." },
          { s: 'junkyu', f: 'happy', t: "That's true but it's nice when a dog says it." }
        ] }
      ] },
      { ifYear: { rank: { junkyu: 10 } }, then: [
        { n: "She knew him better now than she had a year ago, which was a strange thing to know about a boy she'd sat beside since first year, but she did. She knew how his voice went right before he was about to be brave." }
      ] },
      { s: 'solar', t: "Kyu." },
      { s: 'junkyu', f: 'neutral', t: "Mm." },
      { s: 'solar', t: "Thanks for coming to get me." },
      { n: "He said he wasn't going to cry today, and then he hugged her sideways with one arm, the cone held carefully out of the way of her coat, his beanie knocked crooked against her temple. He did, a little." }
    ] },

    { id: 'epi-h-junkyu-2', title: 'full combo', hint: "Junkyu is at the arcade's rhythm machine with flashcards tucked up his sleeve.",
      after: '1/2', until: '1/7', slots: EVE, events: ['epi-h-motion'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Arcade', time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "He was playing a song on the hardest difficulty and losing it on purpose, or at least that was what he'd tell anyone who asked, a stack of flashcards rubber-banded in his sleeve and pulled out between every song so he could read one, mouth the answer, get it wrong, and put it back." },
      { s: 'junkyu', f: 'sad', t: "The make-ups are in five days and I only know the dates of things that happened to me." },
      { s: 'solar', t: "That's not on the exam." },
      { s: 'junkyu', f: 'sad', t: "It should be. I'd get a hundred." },
      { choose: [
        { t: "Play the next song with him.", stat: { proficiency: 1 }, then: [
          { n: "She took the second set of pads, and her hands remembered a rhythm from somewhere else, from a year of a different arcade in a different town, and she full-combo'd a song she'd never seen while Junkyu stood next to her with his mouth open and a flashcard hanging out of his sleeve." },
          { s: 'junkyu', f: 'surprised', t: "EXCUSE ME?" }
        ] },
        { t: "Quiz him.", stat: { knowledge: 1 }, then: [
          { n: "She took the cards. He got four in a row, which was a record, and did a little dance about it that made a middle schooler at the next machine film him." },
          { s: 'junkyu', f: 'happy', t: "I'm a genius. Don't tell Hyunsuk. It'll go to his head and he'll say it's his." }
        ] }
      ] },
      { ifGlitch: 3, then: [
        { n: "Then every screen in the arcade froze. Not the power, the screens, all of them on the same frame at the same time, the racing games and the shooters and the crane game's little jingle cut off in the middle of a note, and the clock on the change machine read 12:00 in green, and for a breath the only sound in the room was the heating." },
        { n: "A kid by the air hockey table said *whoa*. Then everything came back at once, louder than before." },
        { s: 'junkyu', f: 'serious', t: "Sol. Is that... yours?" },
        { n: "She didn't know what to say to that, and he watched her not know, and then he nodded, like she'd answered." },
        { s: 'junkyu', f: 'neutral', t: "Okay. Then I'm just gonna stand right here." }
      ], else: [
        { n: "He missed a note looking at her and didn't seem to mind." },
        { s: 'junkyu', f: 'neutral', t: "You looked sad for a sec. Just then." },
        { s: 'solar', t: "I'm not sad." },
        { s: 'junkyu', f: 'neutral', t: "Okay. I'm still gonna stand here." }
      ] },
      { s: 'junkyu', f: 'happy', t: "Also I signed the anti-petition. Niki made one. It has forty names and twelve of them are Niki." },
      { n: "He stood next to her for the rest of the night, close enough that their elbows knocked every time either of them hit a note, and every time they did he said *sorry* and didn't move an inch." }
    ] }
  ]);

  /* ── Hyunsuk ── */
  add('hyunsuk', 'friend', [
    { id: 'epi-h-hyunsuk-1', title: 'two of everything', hint: "Hyunsuk is on the bench outside the convenience store, hood up, pretending to read something hard.",
      after: '12/23', until: '12/31', slots: AFTER, events: ['epi-h-study-plans'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Winter Street', time: 'Daytime', scene: [
      { n: "The book was a library copy of something with *Theory* in the title, open across his knee to page four, where it had very clearly been for a while, because the snow had started to collect in the gutter of it and he hadn't noticed. Choi Hyunsuk, geniusuk, the self-appointed smartest boy at Hanlim, reading in public in a place where people could see him do it." },
      { s: 'solar', t: "How's the theory." },
      { s: 'hyunsuk', f: 'neutral', t: "Dense, man. You wouldn't get it." },
      { n: "There were two strawberry milks on the bench beside him. He handed her one without looking up, which was its own sentence." },
      { s: 'hyunsuk', f: 'serious', t: "Don't make it a thing. I buy two of everything. It's a habit. I'm breaking it." },
      { n: "She knew whose habit it was. Everybody knew. Cherry drank strawberry milk with a straw she chewed flat, and Hyunsuk had bought her one every morning from this exact store since they were twelve, and now he was buying two and drinking both and sitting outside in the cold with a book he wasn't reading." },
      { s: 'hyunsuk', f: 'neutral', t: "Has he said it yet? Prince Charming. The soon thing." },
      { s: 'solar', t: "Still soon." },
      { s: 'hyunsuk', f: 'neutral', t: "Soon's not a date. I looked it up." },
      { n: "Then he closed the book, finally, and turned the milk around in his hand, and his voice went somewhere lower." },
      { s: 'hyunsuk', f: 'serious', t: "Jihoon's being weird with you. The whole *what retreat, I was home* thing." },
      { s: 'solar', t: "He's pretending." },
      { s: 'hyunsuk', f: 'serious', t: "I know what pretending looks like on him. I've known since we were eleven. If he starts doing the thing where he's funny for six hours straight, you call me. Not Cherry. Me." },
      { s: 'solar', t: "Why you." },
      { s: 'hyunsuk', f: 'sad', t: "Because I know what comes after it." },
      { n: "She'd said something to him once, months ago, in a different winter, *yeah, you would know*, and watched it land on him like a slap, and neither of them had ever picked it back up off the floor. It was still there. She could see it from here." },
      { choose: [
        { t: "Hyunsuk. How do you know?", then: [
          { n: "He looked at her for a second too long, and then he did what all of them did, what she did, and routed it straight into a joke." },
          { s: 'hyunsuk', f: 'happy', t: "I'm a genius, Sol. I know everything. It's in my username." }
        ] },
        { t: "(Leave it on the floor where it is.)", stat: { kindness: 1 }, then: [
          { n: "She didn't ask. She drank the milk. After a minute he bumped her shoulder with his, once, not hard." },
          { s: 'hyunsuk', f: 'neutral', t: "Thanks." }
        ] }
      ] },
      { s: 'hyunsuk', f: 'neutral', t: "Don't tell Cherry I bought two." },
      { n: "He opened the book again. Page four. He'd be on page four for the rest of the winter, probably, and he'd tell anyone who asked that it was a very hard page." }
    ] },

    { id: 'epi-h-hyunsuk-2', title: 'page four', hint: "Hyunsuk is at the town library, sitting very visibly near the reference section.",
      after: '1/4', until: '1/7', slots: AFTER, events: [], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Library', time: 'Daytime', scene: [
      { n: "He'd picked the table by the window, where the whole reading room could see him, and spread out enough textbooks for three people, and he was actually studying, which was the alarming part, his pen moving and his lips moving and a highlighter uncapped behind his ear." },
      { s: 'hyunsuk', f: 'serious', t: "I'm going to beat Jaehyuk on the make-ups." },
      { s: 'solar', t: "Jaehyuk's never gotten below a ninety-six in his life." },
      { s: 'hyunsuk', f: 'serious', t: "Which is why it'll mean something when I do it." },
      { n: "He made her quiz him. He got half of them, and argued the other half, and on the one he got right he leaned back in his chair and put both hands behind his head like he'd won something on television." },
      { s: 'hyunsuk', f: 'neutral', t: "Saw them at the rink. Cherry and the prince. She was laughing at something he said." },
      { s: 'hyunsuk', f: 'neutral', t: "He's not funny. I've heard him. He talks about himself in third person." },
      { choose: [
        { t: "You're allowed to be sad about it, Suk.", stat: { kindness: 1 }, then: [
          { s: 'hyunsuk', f: 'sad', t: "I'm not sad. I'm studying." },
          { n: "He uncapped the highlighter and highlighted an entire paragraph, every word of it, which was not how highlighters worked." }
        ] },
        { t: "He's kind of funny, though.", stat: { courage: 1 }, then: [
          { s: 'hyunsuk', f: 'surprised', t: "Get out of my library." },
          { s: 'solar', t: "It's the town's library." },
          { s: 'hyunsuk', f: 'neutral', t: "Get out of my table." }
        ] }
      ] },
      { ifEpiRoute: 'jihoon', then: [
        { s: 'hyunsuk', f: 'serious', t: "You've been at Jihoon's a lot again." },
        { s: 'hyunsuk', f: 'neutral', t: "I'm not saying anything. I'm just saying I live four minutes away. In case." }
      ] },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'hyunsuk', f: 'neutral', t: "Your boyfriend's mom drove past twice while I was walking here. Slowly. Like a shark." }
      ] },
      { ifGlitch: 3, then: [
        { n: "The clock over the reference desk had stopped at twelve. The librarian tapped it, and then tapped it again, and then wrote OUT OF ORDER on a sticky note and stuck it to the glass with the air of someone who'd done this several times this week." },
        { s: 'hyunsuk', f: 'neutral', t: "That's been happening everywhere. My mom's microwave. The bus stop." },
        { s: 'hyunsuk', f: 'serious', t: "It's not normal, is it." },
        { s: 'solar', t: "No." },
        { s: 'hyunsuk', f: 'neutral', t: "Cool. Cool cool cool." }
      ] },
      { n: "He went back to his book. Not page four. Page sixty-one, and he was on it for real, and she sat across from him and pretended to study calculus while the window went white and he read every line twice, slowly, like he was memorizing the way back to something." }
    ] }
  ]);

  /* ── Jaehyuk ── */
  add('jaehyuk', 'friend', [
    { id: 'epi-h-jaehyuk-1', title: 'colour-coded', hint: "Jaehyuk is at the town library with three highlighters and a seat saved for you.",
      after: '12/26', until: '12/31', slots: AFTER, events: ['epi-h-study-plans'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Library', time: 'Daytime', scene: [
      { music: 'epi-h-home' },
      { n: "He'd saved her the chair by the radiator, which she hadn't asked for and which was the only warm chair in the building, and in front of it was a folder with her name on the tab in his neat square print, and inside the folder were notes. Real notes. Calculus, chapters four through seven, colour-coded, with the places she always got lost marked in a soft orange that she was fairly sure he'd chosen on purpose because red would have been mean." },
      { s: 'jaehyuk', f: 'neutral', t: "You copied my homework for two years. I know exactly where you fall off." },
      { s: 'solar', t: "That's so humiliating." },
      { s: 'jaehyuk', f: 'happy', t: "It's useful. Sit." },
      { n: "They worked. Or he worked, and she worked near him, and every so often he slid a problem across the table and waited, calm and patient and not looking at her while she did it, which was the only reason she could. Solar almost forgot he was there sometimes. It was the nicest thing about him." },
      { n: "Then, somewhere in chapter five, she put the pencil down." },
      { s: 'solar', t: "I keep waking up at midnight. On the dot. Like I've got somewhere to be." },
      { s: 'jaehyuk', f: 'serious', t: "Do you?" },
      { s: 'solar', t: "Not here." },
      { n: "He didn't laugh, and he didn't tell her it was jet lag, and he didn't say anything at all for long enough that she knew he was taking it the way she'd meant it. He was the one she'd told the truth to last time, about Jihoon and the thing she'd almost done. He was the one people told things to, because he never did anything with them except keep them." },
      { s: 'jaehyuk', f: 'neutral', t: "I keep reaching for a window on the left side of my bed. There's a wall there. There's always been a wall there." },
      { choose: [
        { t: "(Pick the pencil back up.)", stat: { knowledge: 1 }, then: [
          { n: "She picked it back up. He slid her the next problem. They didn't talk about it again, and that was a kind of talking about it too." }
        ] },
        { t: "I miss it. Is that bad?", stat: { kindness: 1 }, then: [
          { s: 'jaehyuk', f: 'neutral', t: "You can miss something you didn't pick." },
          { s: 'jaehyuk', f: 'serious', t: "It doesn't un-pick here." },
          { n: "He said it like a fact out of a textbook, flat and true, and went back to his highlighters, and she sat with it in the radiator heat for a while." }
        ] }
      ] },
      { n: "She got the last problem right. He circled it in green, which he'd never once used before on any of her work, and said *see*, and that was all, and it was enough." }
    ] },

    { id: 'epi-h-jaehyuk-2', title: 'procedure', hint: "Jaehyuk texts that he's outside your house with a binder labelled ROBERT'S RULES.",
      after: '1/3', until: '1/7', slots: AFTER, events: ['epi-h-motion'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Daytime', scene: [
      { n: "Nana loved Jaehyuk the way Nana loved anyone who held still, which was completely and with his entire weight, and so Jaehyuk sat on her bedroom floor with a large white dog lying across both his legs and a two-inch binder open on the carpet, tabbed, a sticky note on every tab." },
      { s: 'jaehyuk', f: 'serious', t: "It's not a trial. It's a hearing. That matters. They need a petition, then it's filed, then there's a moderator, then a vote. Article nine of the handbook. Nobody's read article nine since it was written." },
      { s: 'solar', t: "You've read article nine." },
      { s: 'jaehyuk', f: 'neutral', t: "I'm on the committee. I've read article nine four times." },
      { n: "There was a knock, and her mother's head came round the door with a plate of cut pears, which was what her mother did when she wanted to stand in a room and look at things." },
      { s: 'mom', t: "Jaehyuk-ah. You weren't on this retreat?" },
      { s: 'jaehyuk', f: 'flustered', t: "I was... studying." },
      { n: "Which was true. He had been. In another world, for most of a year, at a desk by a window he kept reaching for. Jaehyuk didn't lie, ever, and Solar watched him find the one sentence that wasn't a lie and hold onto it with both hands." },
      { s: 'mom', t: "And there really were monks." },
      { s: 'solar', t: "Mom. There were monks." },
      { glitch: { strain: 1 } },
      { s: 'mom', t: "Hm. Eat the pears." },
      { ifGlitch: 3, then: [
        { n: "When the door closed she looked at the clock on her desk, which had said 12:00 since breakfast and which she'd turned face down twice, and it was face up again." },
        { choose: [
          { t: "Tell him about the clocks. And the rest.", flag: 'epi-h-jaehyuk-told', stat: { courage: 1 }, then: [
            { n: "She told him. Not all of it. Enough. The alarm clock, the can, the notes, the snow, the way she sometimes looked down at her own hand and it seemed like it was happening a second later than it should. He listened the whole way through without moving, Nana snoring on his shins." },
            { s: 'jaehyuk', f: 'serious', t: "Okay." },
            { n: "He uncapped a pen and wrote something very small in the binder's margin, and she leaned over to see it, and it said *noted*, and for some reason that was the thing that nearly undid her." },
            { s: 'jaehyuk', f: 'neutral', t: "Then let's do the part we can do. Article nine." }
          ] },
          { t: "(Turn the clock back over. Do article nine.)", stat: { knowledge: 1 }, then: [
            { n: "She turned it face down a third time. Jaehyuk watched her do it and didn't ask, and flipped to the next tab." }
          ] }
        ] }
      ], else: [
        { choose: [
          { t: "Walk me through article nine.", stat: { knowledge: 1 }, then: [
            { n: "He did, clause by clause, with the patience of someone explaining a recipe to a toddler, and by the end she understood more about student impeachment than anyone at Hanlim except him." }
          ] },
          { t: "Can we just pet Nana for ten minutes.", stat: { kindness: 1 }, then: [
            { s: 'jaehyuk', f: 'happy', t: "Five. Then article nine." }
          ] }
        ] }
      ] },
      { n: "He left the binder with her. On the front, under ROBERT'S RULES, he'd added in smaller letters *(for Solar, who will be fine)*, and she didn't know if it was a prediction or an instruction, and she kept it on her desk either way." }
    ] }
  ]);

  /* ── Asahi ── */
  add('asahi', 'friend', [
    { id: 'epi-h-asahi-1', title: 'full sentences', hint: "Asahi is at the Christmas lights, looking like he's been brought there against his will.",
      after: '12/21', until: '12/26', slots: EVE, events: ['epi-h-home'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Christmas Lights', time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "He was the only black thing in the whole square, black coat, black scarf, black beanie, standing under an arch of white and gold lights with his hands in his pockets and the expression of a man at his own sentencing." },
      { s: 'asahi', f: 'neutral', t: "My mom wants a family photo. They went to get hotteok. I'm guarding the spot." },
      { s: 'solar', t: "You're guarding a spot." },
      { s: 'asahi', f: 'neutral', t: "It's a good spot. No one cares. Stand there, you're blocking the light." },
      { n: "Her phone buzzed. She knew who it was before she looked, because only one person in her life texted at this hour like he was filing a report." },
      { phone: [
        { from: 'jungwon', t: "are you warm enough." },
        { from: 'jungwon', t: "it's going to be minus six tonight." },
        { from: 'jungwon', t: "wear the scarf." }
      ], contact: 'jungwon' },
      { n: "Asahi was reading over her shoulder, which he'd never once apologized for in his life." },
      { s: 'asahi', f: 'happy', t: "He put a period after scarf." },
      { s: 'solar', t: "He always does that." },
      { s: 'asahi', f: 'happy', t: "He texts like a letter home from a war. That's so funny. That's the funniest man alive." },
      { s: 'solar', t: "You don't even like people." },
      { s: 'asahi', f: 'neutral', t: "No one cares. He's funny." },
      { choose: [
        { t: "(Text back: wearing it.)", then: [
          { phone: [
            { from: 'solar', t: "WEARING IT" },
            { from: 'jungwon', t: "good." }
          ], contact: 'jungwon' },
          { s: 'asahi', f: 'happy', t: "Good period. Unbelievable." }
        ] },
        { t: "(Send him a photo of Asahi.)", stat: { charm: 1 }, then: [
          { phone: [
            { from: 'solar', t: "[a photo of Asahi under the lights, glaring]" },
            { from: 'jungwon', t: "is he alright." },
            { from: 'jungwon', t: "tell him merry christmas." }
          ], contact: 'jungwon' },
          { n: "Asahi read it twice. Something happened at the corner of his mouth that on anybody else would have been a smile." },
          { s: 'asahi', f: 'happy', t: "...He's so funny." }
        ] }
      ] },
      { s: 'asahi', f: 'neutral', t: "There's a girl in my class. Kazuha. Exchange student. She says Hanlim's haunted and she wants to do a séance and she asked me to come." },
      { s: 'asahi', f: 'neutral', t: "Which, no." },
      { s: 'asahi', f: 'neutral', t: "...I'm going to say yes." },
      { s: 'solar', t: "Why?" },
      { s: 'asahi', f: 'sad', t: "She asked nicely. No one asks me anything nicely." },
      { n: "His family came back with the hotteok, and he stood in his good spot and didn't smile for the photo, and when it was done he looked over at her, still under the arch, and said it to the lights instead of to her." },
      { s: 'asahi', f: 'neutral', t: "I didn't like it over there. Everyone was so bright. But you were okay there. I could tell." },
      { s: 'asahi', f: 'neutral', t: "So I'm glad you came back anyway. No one cares." }
    ] },

    { id: 'epi-h-asahi-2', title: 'tadaima', hint: "Asahi and Kazuha are in his empty classroom after the exam, with the blinds down and a phone propped on a desk.",
      after: '1/8', until: '1/10', slots: AFTER, events: ['epi-h-seance', 'epi-h-livestream', 'epi-h-makeup'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · School · Classroom', time: 'After School', scene: [
      { n: "The blinds were down and the lights were off and Kazuha was crouched on a chair with her knees up, Eunchae's livestream paused on her phone at frame 214, the green one, zoomed in so far it was mostly squares, and Asahi was sitting on the next desk over with his headphones round his neck and the face of a man who'd been here since the bell." },
      { s: 'kazuha', t: "Solar-senpai! Come, come. Look." },
      { s: 'asahi', f: 'neutral', t: "She's been looking for an hour. I've been here for the hour. No one cares about my hour." },
      { s: 'kazuha', t: "This is you. In the door. The green. And this is you, again, a little bit not there." },
      { s: 'kazuha', t: "Solar-senpai. You are a ghost?" },
      { s: 'asahi', f: 'neutral', t: "She's asking if you're a ghost." },
      { s: 'solar', t: "I heard her, Asahi." },
      { s: 'kazuha', t: "A happy ghost. It's okay. Ghosts can have a boyfriend. I have read about it." },
      { n: "She said it with such complete good cheer, such delight, that Solar couldn't even be offended, and then Kazuha leaned in and said the next part more quietly, in Japanese, to Asahi, and Asahi's face changed." },
      { s: 'asahi', f: 'serious', t: "She says the board at the séance was pointing at you. Not at the room. At you. She watched where it went." },
      { s: 'kazuha', t: "And Iwatodai. I checked the maps. Four maps. There is no Iwatodai." },
      { s: 'asahi', f: 'neutral', t: "She checked four. I watched her check four." },
      { ifGlitch: 3, then: [
        { n: "The clock over the blackboard had stopped at twelve. Kazuha saw it at the same time Solar did and clapped her hands together, once, softly, like someone at a shrine." },
        { s: 'kazuha', t: "Ah. Again. It likes you." }
      ] },
      { n: "When Solar picked up her bag to go, Kazuha hopped down off the chair and bowed, a real one, and said it the way you'd say it to someone coming in out of the cold." },
      { s: 'kazuha', t: "Okaeri, Solar-senpai." },
      { s: 'asahi', f: 'neutral', t: "She says welcome h—" },
      { choose: [
        { t: "Tadaima.", flag: 'epi-h-tadaima', stat: { charm: 1 }, then: [
          { n: "It came out before she'd thought about it, the right answer, the one you say back, the one she'd said every night for a year coming through a dorm door to a lounge full of people and a dog. Kazuha lit up like a lamp." },
          { s: 'kazuha', t: "She knows! Asahi-kun, she knows it!" },
          { s: 'asahi', f: 'surprised', t: "Where'd you learn that." },
          { s: 'solar', t: "Around." },
          { n: "He looked at her for a long time in the dark classroom, and didn't ask again, and didn't say no one cares, which with Asahi was the loudest thing he could have said." }
        ] },
        { t: "Thanks, Kazuha.", then: [
          { n: "Kazuha beamed anyway, like thanks was close enough, and Asahi finished the translation under his breath to nobody, *welcome home*, and looked at the floor while he did it." }
        ] }
      ] }
    ] }
  ]);

  /* ── Heeseung ── */
  add('heeseung', 'friend', [
    { id: 'epi-h-heeseung-1', title: 'retreat facts', hint: "Heeseung is on Jungwon's street with a clipboard and a lunchbox, looking up at a window.",
      after: '12/23', until: '12/31', slots: AFTER, events: ['epi-h-emergency'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Jungwon's Street", time: 'Daytime', scene: [
      { n: "He was standing on the pavement opposite the Yangs' gate in a long coat with a clipboard under one arm and a three-tier lunchbox in the other hand, wrapped in a cloth, knotted at the top, looking up at the second floor with the patience of a man who'd done this before and would do it again." },
      { s: 'heeseung', f: 'neutral', t: "He hasn't eaten properly since we got back. His mom watches the fridge." },
      { s: 'solar', t: "So you're going to throw him a lunchbox." },
      { s: 'heeseung', f: 'serious', t: "I'm going to leave it by the gate and text him. Like a professional." },
      { n: "Up in the second-floor window a curtain moved, and there he was, Yang Jungwon in a grey hoodie behind the glass, hair in his eyes, looking down at the two of them on his street. He didn't open the window. He couldn't, probably. He lifted one hand." },
      { glitch: { near: true } },
      { n: "Then he disappeared, and came back with a sheet of printer paper, and pressed it flat to the glass. DID YOU EAT. In marker. Underlined." },
      { n: "Heeseung, without a word, unwrapped one tier of the lunchbox and handed Solar a roll of kimbap, and she held it up over her head at the window like a trophy, and the paper in the window came down, and for a second she could see the dimple, even from here." },
      { s: 'heeseung', f: 'neutral', t: "Good. Now. Retreat facts. Which province." },
      { s: 'solar', t: "Gangwon-do." },
      { s: 'heeseung', f: 'neutral', t: "What time was wake-up." },
      { s: 'solar', t: "...Four?" },
      { s: 'heeseung', f: 'serious', t: "Three-thirty. It's in the chat. It's pinned. What did they serve at breakfast." },
      { choose: [
        { t: "Rice and doenjang soup. No goat.", stat: { knowledge: 1 }, then: [
          { s: 'heeseung', f: 'happy', t: "No goat. Thank you. Somebody in this council reads." }
        ] },
        { t: "Can I just say I don't remember?", then: [
          { s: 'heeseung', f: 'serious', t: "Amnesia is for the forum. Not for your mother." }
        ] }
      ] },
      { s: 'heeseung', f: 'sad', t: "You know he fired me so you could have VP. Still breaks my heart." },
      { s: 'heeseung', f: 'neutral', t: "You're a better vice president than I was. I'm a better liar. We each have a gift." },
      { n: "He set the lunchbox on the stone ledge of the gatepost and typed something short on his phone, and up in the window the curtain moved again, and Heeseung tucked his clipboard under his arm and nodded at it, once, like he'd delivered a report to a superior officer, which, in a way, he had." }
    ] },

    { id: 'epi-h-heeseung-2', title: 'every won', hint: "Heeseung is in the council room after the exams with the ledger and every receipt from the bake sale.",
      after: '1/8', until: '1/10', slots: EVE, events: ['epi-h-makeup'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · School · Council Room', time: 'Evening', scene: [
      { music: 'epi-h-forum' },
      { n: "The ledger was open on the long table under the lamp, a real ledger, green cloth, ruled columns, the kind nobody had bought since the nineties, and around it Heeseung had laid out every receipt from the bake sale in rows, flattened and dated and paper-clipped by booth, the way other people laid out a hand of cards." },
      { s: 'heeseung', f: 'neutral', t: "Every won. Jungwon counted the tin twice. I counted it three times. I win." },
      { s: 'solar', t: "It's not a competition." },
      { s: 'heeseung', f: 'serious', t: "Everything with Yang Jungwon is a competition. He just doesn't know he's entered." },
      { n: "He'd made her a summary, one page, highlighted, the totals at the bottom in a box, so that on Thursday she'd only have to hold up one sheet of paper. He pushed it across the table to her. Then, because he was Heeseung, he pushed a cup of instant noodles across after it, made with the kettle that was banned from the council room under rule six, which he had written." },
      { s: 'heeseung', f: 'neutral', t: "Eat. You look like him." },
      { ifGlitch: 3, then: [
        { n: "The council-room clock said 12:00, and had since the morning, the second hand quivering on the twelve like it was trying to get past something. In the ledger's margin, in Heeseung's small neat hand, there was a new line: *clock (broken, 12:00) — 0 won*." },
        { s: 'solar', t: "You logged the clock." },
        { s: 'heeseung', f: 'serious', t: "Everything in this room gets logged. Even the weird stuff. Especially the weird stuff." }
      ] },
      { s: 'heeseung', f: 'sad', t: "When he fired me I wanted to set this room on fire. Then I watched you run the bake sale." },
      { s: 'heeseung', f: 'neutral', t: "If I didn't know you, I'd have signed that motion. Dereliction's a fair word. It's just the wrong one." },
      { ifEpiRoute: 'council', then: [
        { s: 'heeseung', f: 'happy', t: "And we finish the gym Wednesday. I have a schedule. Niki's on balloons. God help us." }
      ] },
      { choose: [
        { t: "Thank you, Heeseung. Really.", stat: { kindness: 1 }, then: [
          { s: 'heeseung', f: 'flustered', t: "Don't. I'll cry on the receipts. They're laminated, but still." }
        ] },
        { t: "You'd have made a good VP again.", stat: { charm: 1 }, then: [
          { s: 'heeseung', f: 'neutral', t: "I know. Eat your noodles." }
        ] }
      ] },
      { n: "She ate. He checked the totals one more time, his pen moving down the column the way a hand moves down a sleeping dog's back, slow and sure, and the radiator ticked, and outside the dark came down on the empty school." }
    ] }
  ]);

  /* ── Jake ── */
  add('jake', 'friend', [
    { id: 'epi-h-jake-1', title: 'snow way', hint: "Jake is at the park with Layla, who has spotted Nana and is losing her mind.",
      after: '12/26', until: '12/31', slots: AFTER, events: ['epi-h-christmas'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · The Park', time: 'Daytime', scene: [
      { music: 'epi-h-goofy' },
      { n: "Layla saw Nana from the far end of the path and simply left, the leash zipping out of Jake's hand, a brown blur cutting across the snow at full speed, and Nana, big and white and slow-legged, planted himself like a snowbank and let her crash into him and then fell over on purpose." },
      { s: 'jake', f: 'happy', t: "LAYLA. That's so un-fur-tunate. Sorry. Sorry. It's a ruff situation." },
      { s: 'solar', t: "That's two." },
      { s: 'jake', f: 'happy', t: "I've got a list. Snow way am I stopping." },
      { ifEpiRoute: 'council', then: [
        { s: 'jake', f: 'neutral', t: "Second date. The first one went great. She hasn't stopped talking about it." }
      ], else: [
        { s: 'jake', f: 'happy', t: "The famous date. Finally. I've been promising this since October. Layla's been very patient. She's a lady." }
      ] },
      { n: "They sat on a bench with the snow soaking through their jeans and watched the dogs roll each other down the slope, and Jake, who never stopped talking, stopped talking." },
      { s: 'jake', f: 'sad', t: "When you were gone. Before we went through. I walked her past your house every day." },
      { s: 'jake', f: 'sad', t: "Nana was at the window every time. Your mom asked me if I'd heard from you. I said you were on a retreat. That was before we even had a retreat." },
      { choose: [
        { t: "You started the cover story?", stat: { charm: 1 }, then: [
          { s: 'jake', f: 'happy', t: "I'm a visionary, Sol. Heeseung just wrote it down." }
        ] },
        { t: "Thanks for checking on him.", stat: { kindness: 1 }, then: [
          { s: 'jake', f: 'neutral', t: "He's family. Layla says so. She's never wrong about people. Or dogs." }
        ] }
      ] },
      { s: 'jake', f: 'neutral', t: "Do you miss it? Over there?" },
      { s: 'solar', t: "Some of it." },
      { s: 'jake', f: 'happy', t: "I miss the little white dog. Koromaru. Layla, don't listen." },
      { s: 'jake', f: 'happy', t: "Also, jolar's still going strong. I made a fan account. It has eleven followers. One of them is your boyfriend's dog." },
      { n: "Down the slope Nana and Layla had stopped wrestling and were lying side by side in the snow, panting, noses an inch apart, completely content, and Solar thought the dogs had probably worked out something that none of the rest of them had." }
    ] },

    { id: 'epi-h-jake-2', title: 'meme review', hint: "Jake is outside the convenience store with Layla, a bag of dog treats and a phone full of memes.",
      after: '1/3', until: '1/7', slots: AFTER, events: ['epi-h-motion'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Winter Street', time: 'Daytime', scene: [
      { n: "Layla sat at his feet with her ears flat, growling softly and steadily at the vending machines, and Jake had his phone out and held it toward Solar like a waiter presenting a wine." },
      { s: 'jake', f: 'happy', t: "Meme review. Counter-offensive. Option one." },
      { n: "The bake-sale tin photoshopped into the Mona Lisa's hands, captioned *she knows where it is*. Option two, Heeseung's ledger as a holographic trading card, attack power 9000. Option three, hanlim_accountability's profile picture with a tiny clown nose added very precisely." },
      { s: 'solar', t: "Jake. Heeseung's going to kill you." },
      { s: 'jake', f: 'neutral', t: "He already banned me from the chat for an hour. I used the hour to make option three." },
      { s: 'jake', f: 'serious', t: "And she hates that machine. Look at her. Even Layla knows." },
      { ifGlitch: 3, then: [
        { n: "Then the snow went up. All of it, the whole street's worth, lifting off the awning and the cars and the tops of the bins like somebody had reversed the weather, rising in a slow white sheet past the store sign, and Layla stood and barked at the sky, three times, sharp, and then it all came back down as if it had only been resting." },
        { n: "Jake looked at the sky for a long time. Then at Solar." },
        { s: 'jake', f: 'serious', t: "...I've got nothing." },
        { s: 'solar', t: "No pun?" },
        { s: 'jake', f: 'serious', t: "There's no pun for that, Sol." },
        { s: 'jake', f: 'neutral', t: "Is that you? Like, are you doing that?" },
        { s: 'solar', t: "I don't know." },
        { s: 'jake', f: 'neutral', t: "Okay. Then it's a team thing. We'll figure it out as a team. Layla's on the team." }
      ] },
      { choose: [
        { t: "Post the Mona Lisa.", stat: { charm: 1 }, then: [
          { s: 'jake', f: 'happy', t: "Posted. It already has a comment. It's Niki. It says LMAOOO. We're winning." }
        ] },
        { t: "Run it past Heeseung first.", stat: { knowledge: 1 }, then: [
          { s: 'jake', f: 'sad', t: "Fine. He's going to make me fill out a form. There's going to be a form for memes now." }
        ] }
      ] },
      { n: "He gave Layla a treat for bravery and Solar one too, out of the same bag, without thinking, and she ate it before she realized, and he laughed so hard he had to sit down on the curb." }
    ] }
  ]);

  /* ── Sunghoon ── */
  add('sunghoon', 'friend', [
    { id: 'epi-h-sunghoon-1', title: 'soon', hint: "Sunghoon is alone on the ice at the rink, pretending he didn't see you come in.",
      after: '12/26', until: '12/31', slots: AFTER, events: ['epi-h-home'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Ice Rink', time: 'Daytime', scene: [
      { music: 'epi-h-snow' },
      { n: "The rink was empty except for him, and he was not doing what anybody at Hanlim thought Park Sunghoon did with his free time, he was skating, really skating, long clean arcs that hissed on the ice, and as she watched he gathered himself on one foot and went up and turned twice in the air and came down on a blade and held it, arms out, perfectly still, for no one." },
      { n: "Then he saw her. He did not fall over, which was a credit to him." },
      { s: 'sunghoon', f: 'flustered', t: "Park Sunghoon would like it noted that he landed that." },
      { s: 'solar', t: "Noted." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon would also like it noted that you didn't see it. Lace up." },
      { n: "She laced up. She stepped onto the ice. Her feet went in two different directions and she grabbed the wall and then the air and then, finally, Sunghoon, who caught her by both elbows and held her upright with a sigh that suggested he did this for a living." },
      { n: "For a second, holding her up, he looked at her the way you'd look at someone you'd passed once on a different street, in a different winter, somewhere colder, and it was there and gone before she could even name it, and then he was complaining about her ankles." },
      { s: 'sunghoon', f: 'neutral', t: "Your ankles are a tragedy. Bend your knees. Has she said anything about me?" },
      { s: 'solar', t: "That's two different conversations." },
      { s: 'sunghoon', f: 'serious', t: "Park Sunghoon can hold two conversations. Has she." },
      { choose: [
        { t: "She calls you the prince. In a voice.", stat: { charm: 1 }, then: [
          { s: 'sunghoon', f: 'flustered', t: "Is it a nice voice." },
          { s: 'solar', t: "It's a Cherry voice." },
          { s: 'sunghoon', f: 'serious', t: "So it's a nice voice." }
        ] },
        { t: "Ask her yourself.", stat: { courage: 1 }, then: [
          { s: 'sunghoon', f: 'surprised', t: "I'm going to. Soon." }
        ] }
      ] },
      { s: 'solar', t: "When's soon." },
      { s: 'sunghoon', f: 'neutral', t: "Soon is soon. It's a promise. Soon is a Park Sunghoon promise." },
      { s: 'solar', t: "That is not a date." },
      { n: "She made it one full lap without the wall, which he said was the worst lap he'd ever seen and also very brave, and when she was unlacing her skates on the bench he dropped a piece of paper into her lap, folded small into a triangle, the way kids passed notes in middle school." },
      { n: "*Tell her soon means soon. - s*" }
    ] },

    { id: 'epi-h-sunghoon-2', title: 'the most impressive thing', hint: "Sunghoon is under the Christmas lights the town never takes down, with a notebook full of crossed-out ideas.",
      after: '1/1', until: '1/7', slots: EVE, events: ['epi-h-new-year'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Christmas Lights', time: 'Evening', scene: [
      { n: "The town left its lights up till February every year, out of laziness or love, and by January they had a tired, crooked look, half the bulbs on the arch gone dark, and under them Park Sunghoon sat on the rim of the empty fountain with a notebook open on his knee and a pen in his mouth, frowning at a page that was almost entirely crossed out." },
      { s: 'sunghoon', f: 'serious', t: "Good. You're here. I need a consultant." },
      { n: "He handed her the notebook. *PROM (CONFIDENTIAL).* Underneath, struck through one after another: skywriting. A flash mob. An ice show, with lighting. A horse." },
      { s: 'solar', t: "A horse, Sunghoon." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon has access to a horse." },
      { s: 'sunghoon', f: 'sad', t: "Care Bears are taken. By a man I respect. Sort of." },
      { n: "He tapped the pen against the page for a while. Then, without looking at her, in a different voice, the one that wasn't for anyone else." },
      { s: 'sunghoon', f: 'serious', t: "Is Hyunsuk okay?" },
      { n: "She hadn't expected that. She looked at him, the woman killer, the reincarnated prince, the boy who knew every girl in school, sitting on a dry fountain in the cold worrying about the boy who'd had Cherry first." },
      { s: 'sunghoon', f: 'neutral', t: "Park Sunghoon isn't a monster. He just wins sometimes." },
      { choose: [
        { t: "Do something only she'd get.", stat: { charm: 1 }, then: [
          { n: "He wrote it down. He underlined it twice, and then, after a second, a third time." },
          { s: 'sunghoon', f: 'neutral', t: "This is why you're the vice president." }
        ] },
        { t: "Honestly? The horse.", stat: { courage: 1 }, then: [
          { s: 'sunghoon', f: 'surprised', t: "Finally. Someone with vision." },
          { n: "He un-crossed the horse. Then, looking at it, crossed it back out, slower, like it hurt." }
        ] }
      ] },
      { s: 'solar', t: "So when." },
      { s: 'sunghoon', f: 'neutral', t: "Soon." },
      { n: "He took the notebook back and closed it and sat with it on his knees under the half-dark arch, and she sat with him until her feet went numb, and neither of them said the obvious thing, which was that soon had been soon for a long time now, and that he'd meant it every single time." }
    ] }
  ]);

  /* ── Jay ── */
  add('jay', 'friend', [
    { id: 'epi-h-jay-1', title: 'kick like', hint: "Jay is at the park under the lamps, kicking a football against the wall in the snow.",
      after: '12/26', until: '12/31', slots: EVE, events: ['epi-h-emergency'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · The Park', time: 'Evening', scene: [
      { n: "The sound reached her before she saw him, the flat thump of a ball against brick and the scuff of a shoe on packed snow, over and over, steady as a clock, and then there he was under the lamp by the toilet block, breath smoking, hood down, putting the ball into the same square of wall again and again like the wall owed him money." },
      { s: 'jay', f: 'neutral', t: "Coach sent a winter schedule. I'm on the schedule." },
      { s: 'solar', t: "It's the holidays." },
      { s: 'jay', f: 'neutral', t: "Scholarship doesn't do holidays. I did push-ups in a hallway for a year over there so I wouldn't lose it. I'm not losing it now." },
      { n: "He caught the ball on his foot, looked at her properly, the way Jay looked at things, straight on and without any kind of padding." },
      { s: 'jay', f: 'serious', t: "You look different." },
      { s: 'solar', t: "Thanks, Jay." },
      { s: 'jay', f: 'neutral', t: "Not bad. Older. Like you've been somewhere." },
      { n: "He rolled the ball to her. She kicked it back and it went sideways into a bush, and he watched it go, and opened his mouth." },
      { s: 'jay', f: 'neutral', t: "You kick like—" },
      { n: "He stopped. Something went across his face that didn't belong to the park or the snow or anything in this town, there and gone, and he swallowed whatever it was, and went to get the ball out of the bush." },
      { s: 'jay', f: 'neutral', t: "Like a vice president." },
      { s: 'jay', f: 'serious', t: "The temple thing. You good with it?" },
      { choose: [
        { t: "I can lie to my mom. I'm good at it.", stat: { courage: 1 }, then: [
          { s: 'jay', f: 'neutral', t: "Yeah. That's what worries me, bro." }
        ] },
        { t: "I hate it.", stat: { kindness: 1 }, then: [
          { s: 'jay', f: 'sad', t: "Me too. My mom cried. I told her about the monks. She cried more. She thinks I found God." }
        ] }
      ] },
      { n: "Then he passed her the ball again, softer this time, right to her foot, so slow and so easy that she couldn't miss, and she didn't, and it hit the square on the wall dead center with a thump that sounded like it meant something." },
      { s: 'jay', f: 'happy', t: "There you go." }
    ] },

    { id: 'epi-h-jay-2', title: 'mutuals', hint: "Jay is coming down the hill your way, scrolling the forum with the face of a man who's been personally insulted.",
      after: '1/3', until: '1/7', slots: EVE, events: ['epi-h-motion'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim', time: 'Evening', scene: [
      { music: 'epi-h-forum' },
      { s: 'jay', f: 'serious', t: "I'm mutuals with the whole school. Everyone. The lunch ladies. The guy who fixes the vending machines. I don't know this account." },
      { s: 'solar', t: "Hi, Jay." },
      { s: 'jay', f: 'serious', t: "Hanlim underscore accountability. Zero posts before this. Zero followers. Follows the school and a cat." },
      { n: "He fell into step beside her without asking, which was how Jay walked anybody home, phone still out, his thumb scrolling the motion's comments, the snow ticking off his hood, and every few metres he made a small offended noise, the noise of a boy who'd built his whole social life on knowing who everyone was." },
      { s: 'jay', f: 'neutral', t: "Okay. Real question. Where is the tin." },
      { s: 'solar', t: "Safe." },
      { s: 'jay', f: 'neutral', t: "Where." },
      { s: 'solar', t: "In the ballot box. In the gym." },
      { s: 'jay', f: 'surprised', t: "Why's it in the ballot box." },
      { s: 'solar', t: "Somebody decided it was safest." },
      { s: 'jay', f: 'neutral', t: "That's the dumbest safest I've ever heard. Bro." },
      { ifGlitch: 3, then: [
        { n: "Every streetlight on the hill went out at once, all the way down to the main road, and the dark was so total that for a second there was only the sound of the snow, and then they came back, all together, the same instant, humming." },
        { s: 'jay', f: 'neutral', t: "...Power cut." },
        { s: 'solar', t: "Sure." },
        { s: 'jay', f: 'serious', t: "It's a power cut, Sol." },
        { n: "He said it twice, which was once more than Jay ever said anything." }
      ] },
      { s: 'jay', f: 'serious', t: "Are you gonna fight it?" },
      { choose: [
        { t: "Yes.", flag: 'epi-h-jay-fight', stat: { courage: 1 }, then: [
          { s: 'jay', f: 'happy', t: "Good. I'll sit in the front row and look scary." },
          { s: 'solar', t: "You always look scary." },
          { s: 'jay', f: 'neutral', t: "I'll look scarier. On purpose." }
        ] },
        { t: "I don't know if I'll even be here.", then: [
          { n: "He stopped walking. Right there, in the middle of the pavement, the snow coming down between them under the light." },
          { s: 'jay', f: 'serious', t: "Where else would you be." },
          { n: "She didn't answer. He looked at her for a long time, blunt as he always was, and then not blunt at all." },
          { s: 'jay', f: 'sad', t: "Don't say stuff like that, Sol." }
        ] }
      ] },
      { n: "He walked her the rest of the way to her gate and waited, like he always did, till her door closed, and she watched him through the window from the hallway, still standing there under the streetlight, scrolling, scowling at a stranger's handle like he could make it tell him its name." }
    ] }
  ]);

  /* ── Niki ── */
  add('niki', 'friend', [
    { id: 'epi-h-niki-1', title: 'part five', hint: "Niki is at the arcade with his phone in one hand and a joystick in the other, typing something evil.",
      after: '12/22', until: '12/31', slots: EVE, events: ['epi-h-part-four'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Arcade', time: 'Evening', scene: [
      { music: 'epi-h-goofy' },
      { n: "He was playing a fighting game one-handed and losing to a ten-year-old, which he didn't seem to have noticed, because the other hand was holding his phone an inch from his face, thumb going, the forum's front page open on WHERE IS THE COUNCIL (part 4) and its six hundred comments." },
      { s: 'niki', f: 'happy', t: "Sol. Sol. Look what I did." },
      { s: 'forum', t: "ufo_hanlim: they were abducted. i was there. the aliens were mid tbh" },
      { s: 'forum', t: "councilwasabducted: the vp came back with a tan. explain that." },
      { s: 'solar', t: "Niki. Those are both you." },
      { s: 'niki', f: 'neutral', t: "It's misinformation, Sol. It's so wrong it protects the truth. It's strategy." },
      { s: 'solar', t: "Heeseung's going to kill you." },
      { s: 'niki', f: 'happy', t: "Heeseung doesn't know about ufo_hanlim. Heeseung knows about the other four." },
      { choose: [
        { t: "Give me the phone. I'm writing one.", flag: 'epi-h-niki-alt', stat: { charm: 1 }, then: [
          { s: 'forum', t: "ufo_hanlim: update. the aliens sent them back because the president kept correcting their grammar" },
          { s: 'niki', f: 'surprised', t: "LMAOOOO. Sol. That's the best one. I'm pinning it. I can't pin it. I'm gonna pin it anyway." }
        ] },
        { t: "(Take the phone. Keep the phone.)", stat: { courage: 1 }, then: [
          { s: 'niki', f: 'sad', t: "Give it BACK. I'm literally a child. You're stealing from a child." },
          { n: "She put it in her coat pocket next to the can, which she'd stopped noticing she carried, and he lost the fighting game to the ten-year-old in protest." }
        ] }
      ] },
      { n: "He dragged her to the shooting game after, the one with the plastic guns on cables, and she took the second gun, and something in her hands remembered a year of a different kind of night, the weight, the breath, where to look, and she cleared the whole first stage without him." },
      { n: "Niki stopped shooting. He looked at her, really looked, the youngest, for one second not the youngest at all, like someone who'd seen people aim for real somewhere a long way from here and knew the difference, and then it was gone." },
      { s: 'niki', f: 'happy', t: "LMAOOO. Where'd you learn that. You're so scary. I'm telling Jungwon you're a hitman." },
      { s: 'solar', t: "Please don't." },
      { s: 'niki', f: 'happy', t: "-skull- too late. I'm typing." }
    ] },

    { id: 'epi-h-niki-2', title: 'make-ups', hint: "Niki is lying on the hallway floor outside the make-up exam room like he's been shot.",
      after: '1/8', until: '1/10', slots: AFTER, events: ['epi-h-makeup'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · School', time: 'After School', scene: [
      { n: "He was flat on his back on the linoleum, arms out, his exam paper folded into a crown on his forehead, and the second-years coming out of the room behind him had to step over his legs, and he let them." },
      { s: 'niki', f: 'sad', t: "I'm literally a child. They made a child take geography twice." },
      { s: 'solar', t: "You took it once. You missed the first one." },
      { s: 'niki', f: 'sad', t: "Spiritually twice." },
      { n: "Ms. Miyawaki came out of the exam room with the stack of papers under her arm and looked down at him with no expression at all." },
      { s: 'sakura', t: "You're blocking a fire exit." },
      { s: 'niki', f: 'neutral', t: "I'm grieving." },
      { s: 'sakura', t: "Grieve standing up. Also, I've seen your scores on the Tekken machine at the arcade. You should grieve those." },
      { n: "She walked off down the hall. Niki stared after her with his mouth open, the betrayal of it, and then sat up." },
      { s: 'niki', f: 'serious', t: "Okay but I'm gonna find hanlim_accountability. I've got alts in every thread. I'm gonna make them so tired." },
      { ifGlitch: 3, then: [
        { n: "Over the door the hallway clock said 12:00. Below it a first-year was holding her phone up to film it, and so was the boy beside her, and down the corridor somebody laughed too loudly, the way people laugh when they want it to be a joke." },
        { s: 'niki', f: 'happy', t: "That's so sick. That's content." },
        { s: 'niki', f: 'neutral', t: "...That's been happening a lot, huh." }
      ] },
      { s: 'niki', f: 'sad', t: "If they kick you off council it's gonna be so boring, Sol. Jungwon's gonna start telling me about agendas. Directly. To my face." },
      { choose: [
        { t: "I'm not going anywhere.", stat: { courage: 1 }, then: [
          { s: 'niki', f: 'happy', t: "-skull- you said that like a villain." },
          { n: "She'd meant it. That was the trouble with meaning things this week. He took the crown off his forehead and put it on hers." }
        ] },
        { t: "(Lie down on the floor next to him.)", stat: { kindness: 1 }, then: [
          { n: "She lay down. The linoleum was freezing. He put his crown on her forehead without a word, and they lay there looking at the ceiling tiles while the second-years stepped over both of them now." },
          { s: 'sakura', t: "Both of you." },
          { s: 'niki', f: 'happy', t: "We're grieving!" }
        ] }
      ] }
    ] }
  ]);
})();
