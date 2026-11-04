/* The HOAX epilogue's phone (Nov 3 2026, Kat's notes after the Runners epilogue): the Contacts app's people (card lines,
   calls, message topics). Data only (epilogue.js "The phone" documents the rules). No T.handles here: every group-chat line in
   this world (people.js texts and the scenes' { phone } lines) already starts with the sender's own `handle: ` prefix
   (jihoney, cherryblossoms, injangwon, heeheeseung ...), so they're attributable as written.
   Gates: only the story events (story-w1/w2/w3/end.js) and the dates; nothing route-only, nothing from a hangout, nothing past
   the hearing except the results morning. Calls and topics stay on the everyday surface the player has already seen (the
   retreat story, the make-ups, Christmas at the Kims', the motion, the hearing notice); none of the week-3 strangeness.
   Inventions: Jungwon calls at the same minute past the hour; Jihoon keeps a cocoa-stand loyalty card; Cherry rates
   Sunghoon's texts out of ten; Dad phones from the supermarket for the tangerine count; Heeseung's flashcards are numbered;
   Jake has a pun quota; Sunoo's grandmother keeps a croissant under a napkin "for the vice president"; Junkyu sings when he's
   nervous on the phone; Asahi only calls by accident (pocket dial); Hyunsuk's car heater only works on high; Jaehyuk keeps a
   second, quieter doc; Niki answers every call with "LMAOOO" before anyone says anything; Jay's only call is the walk-home
   check; Sunghoon leaves voicemails in the third person. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  R.phone = Object.assign(R.phone || {}, {
    order: ['jungwon', 'jihoon', 'cherry', 'mom', 'dad', 'sunoo', 'heeseung', 'jake', 'jay', 'sunghoon', 'niki',
      'junkyu', 'hyunsuk', 'jaehyuk', 'asahi', 'eunchae', 'chaewon'],
    contacts: {
      /* ── the three ── */
      jungwon: {
        rel: 'Won · the student council president, her boyfriend',
        known: [
          { t: 'President of the student council. She is his vice president, and the pin is on her cardigan.' },
          { t: 'He texts in lowercase with a full stop at the end of everything, like each message is signing off.' },
          { t: 'Grounded since he got home: out only for studying and errands, in his mother’s car, nothing after nine. She checks every forty minutes. He has until 11:20.', events: ['epi-h-curfew'] },
          { t: 'He met her parents properly on Christmas. Her mother sent him home with leftovers in a container he has to bring back.', events: ['epi-h-christmas'] },
          { t: 'Every won is in the bake-sale tin. He says it the way other people say good morning.', events: ['epi-h-motion'] }
        ],
        calls: [
          { id: 'epi-h-call-jungwon-1', after: '12/22', events: ['epi-h-emergency'], scene: [
            { n: "He picked up on the first ring and didn't say hello. He said the time, very quietly, like a password." },
            { s: 'them', f: 'neutral', t: "10:40. She checked at ten. I have forty minutes." },
            { s: 'solar', f: 'happy', t: "You budget me." },
            { s: 'them', f: 'neutral', t: "I budget everything. You're the line item I don't cut." },
            { s: 'solar', f: 'flustered', t: "Won. That's the most romantic thing anyone's ever said using accounting." },
            { s: 'them', f: 'happy', t: "Heeseung would be proud of me." },
            { n: "Down the line, a drawer opened and shut. Flashcards, she'd bet money. RETREAT FACTS, numbered, in his handwriting." },
            { choose: [
              { t: "\"Quiz me.\"", then: [
                { s: 'them', f: 'serious', t: "What time was the wake-up bell." },
                { s: 'solar', f: 'neutral', t: "Four. Rice porridge. Phones at the gate." },
                { s: 'them', f: 'happy', t: "Good. You'd make a very convincing monk." }
              ] },
              { t: "\"Talk about anything except the retreat.\"", then: [
                { s: 'them', f: 'neutral', t: "...Okay." },
                { n: "And then he told her about the stamps his mother wanted that the corner store didn't sell, in enormous, careful detail, until she was laughing into her pillow." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Goodnight, Sol. Two minutes early." }
          ] },
          { id: 'epi-h-call-jungwon-2', after: '1/3', events: ['epi-h-motion'], scene: [
            { n: "11:01. He'd waited for the minute to change again." },
            { s: 'them', f: 'neutral', t: "Are you reading the forum." },
            { s: 'solar', f: 'neutral', t: "...No." },
            { s: 'them', f: 'neutral', t: "You paused." },
            { s: 'solar', f: 'sad', t: "A hundred and forty-two signatures, Won." },
            { s: 'them', f: 'serious', t: "Petitions aren't evidence. The tin is evidence. The tin is fine." },
            { s: 'solar', f: 'neutral', t: "And if they ask where we were?" },
            { s: 'them', f: 'neutral', t: "Then we were at a temple in Gangwon-do, and the bell was at four, and we're going to say it the same way every time." },
            { s: 'them', f: 'happy', t: "Put the phone face down. Open chapter six. I'll stay on till you've done three problems." },
            { s: 'solar', f: 'happy', t: "That's not a date, that's a proctor." },
            { s: 'them', f: 'happy', t: "It's both. It can be both." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-jungwon-1', label: 'Ask if his mother noticed the radio station', after: '12/23', events: ['epi-h-emergency'], msgs: [
            { me: 'did ur mom get in the car yet' },
            { them: 'she did.' }, { them: 'she sat there for a full minute. then she drove to the store with it on.' },
            { me: 'WON' }, { them: "i'm not saying anything. neither is she. it's a ceasefire." }
          ] },
          { id: 'epi-h-tp-jungwon-2', label: 'The container', after: '12/26', events: ['epi-h-christmas'], msgs: [
            { me: 'have u figured out what ur putting in my moms container' },
            { them: 'i have a shortlist.' }, { them: "it's mandarins. the shortlist is mandarins." },
            { me: 'she will respect that' }, { them: "good. i'm going to arrange them." }
          ] },
          { id: 'epi-h-tp-jungwon-3', label: 'Good luck on the hearing speech', after: '1/9', events: ['epi-h-makeup'], msgs: [
            { me: 'thursday. are u nervous' },
            { them: 'no.' }, { them: 'yes.' }, { them: "i've rewritten the opening four times. it keeps saying 'fellow students.'" },
            { me: 'thats what they are' }, { them: "i know. it's the way i say it." }
          ] }
        ]
      },
      jihoon: {
        rel: 'jihoney · her oldest friend',
        known: [
          { t: 'Her oldest friend. He has been in her mother’s kitchen since before either of them could reach the counter.' },
          { t: 'He texts With Every Word Capitalised, which he says is a brand.' },
          { t: 'He and Jungwon do not get along. "Preppy" is the nicest thing he calls him.' },
          { t: 'Christmas cocoa from the same stand, every year since they were small. He brought it again this year.', events: ['epi-h-christmas'] },
          { t: 'Her mother likes him. He brings this up a lot.', events: ['epi-h-christmas'] }
        ],
        calls: [
          { id: 'epi-h-call-jihoon-1', after: '12/26', events: ['epi-h-christmas'], scene: [
            { n: "He let it ring out once, then called her back, so it would look like her idea." },
            { s: 'them', f: 'neutral', t: "You called me. Sad. Needy. What." },
            { s: 'solar', f: 'happy', t: "You called *me,* Jihoon." },
            { s: 'them', f: 'neutral', t: "Phones lie, Sol. Look it up." },
            { s: 'them', f: 'happy', t: "The cocoa lady gave me a stamp card. One more stamp and I get a free cup. I'm going to be insufferable." },
            { s: 'solar', f: 'neutral', t: "You're already insufferable." },
            { s: 'them', f: 'happy', t: "Insufferable with *free cocoa.* Different tier. Your mom's going to frame it." },
            { choose: [
              { t: "\"She'd frame it.\"", then: [
                { s: 'them', f: 'happy', t: "She would. She likes me. Ask anyone. Ask your dad, he's scared of it." }
              ] },
              { t: "\"Thank you for the cocoa. Really.\"", then: [
                { s: 'them', f: 'neutral', t: "...Don't." },
                { s: 'them', f: 'neutral', t: "Don't do the voice. Drink it slower next year, you burnt your tongue again." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Okay. Bye. You're welcome. Don't call me." }
          ] },
          { id: 'epi-h-call-jihoon-2', after: '1/4', events: ['epi-h-motion'], scene: [
            { s: 'solar', f: 'serious', t: "Forty-one comments, Jihoon." },
            { s: 'them', f: 'neutral', t: "Forty-two. I did one in the bath." },
            { s: 'solar', f: 'serious', t: "It's *my* council." },
            { s: 'them', f: 'neutral', t: "It's his council. You're the nice part of it. I've never said anything about the nice part." },
            { n: "A pause. On his end, the television was on and nobody was watching it." },
            { s: 'them', f: 'neutral', t: "...Fine. I'll stop. Not because he asked. He didn't ask. He sent Heeseung, which is worse." },
            { s: 'solar', f: 'surprised', t: "Heeseung messaged you?" },
            { s: 'them', f: 'happy', t: "He sent a numbered list. Item three was 'please.' I respected item three." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-jihoon-1', label: 'Who renamed the chat', after: '12/21', events: ['epi-h-home'], msgs: [
            { me: 'i know it was u' },
            { them: 'I Have No Idea What You Mean' }, { them: 'Respectfully' }, { them: 'Welcome Home' }
          ] },
          { id: 'epi-h-tp-jihoon-2', label: "Send him a picture of Nana in the snow", after: '12/26', msgs: [
            { me: '[photo]' },
            { them: 'Better Looking Than You' }, { them: 'Save That. Send It To Me Again Tomorrow In Case I Lose It' }
          ] },
          { id: 'epi-h-tp-jihoon-3', label: 'Calculus panic', after: '1/6', msgs: [
            { me: 'i dont understand derivatives and the exam is monday' },
            { them: 'Nobody Understands Derivatives. They Just Do Them' }, { them: 'Do Five. Text Me After Each One. I Will Insult Every One Personally' },
            { me: 'thats not help' }, { them: 'Its The Only Help I Have. Five' }
          ] }
        ]
      },
      cherry: {
        rel: 'cherryblossoms · her best friend',
        known: [
          { t: 'Her best friend. Says "I love you" and "you look like shit" in the same breath and means both.' },
          { t: 'Part of the club chat, which Jihoon renamed the night she went missing.', events: ['epi-h-home'] },
          { t: 'Sunghoon has been saying "soon" to her. Just soon. Cherry is not coping.', events: ['epi-h-part-four'] }
        ],
        calls: [
          { id: 'epi-h-call-cherry-1', after: '12/22', events: ['epi-h-part-four'], scene: [
            { s: 'them', f: 'serious', t: "Okay. Okay okay okay. Don't talk. Listen." },
            { s: 'solar', f: 'happy', t: "I haven't said anything." },
            { s: 'them', f: 'serious', t: "He texted me 'goodnight. - s.' Dash. S. Like I don't know. Like I have *other* Sunghoons." },
            { s: 'solar', f: 'happy', t: "Out of ten?" },
            { s: 'them', f: 'neutral', t: "Six. It was punctual. Points off for the dash." },
            { s: 'solar', f: 'neutral', t: "Did you reply?" },
            { s: 'them', f: 'flustered', t: "I replied 'ok.' Lowercase. Like a *psychopath.* I've been staring at it for an hour, Sol." },
            { choose: [
              { t: "\"Text him a heart.\"", then: [
                { s: 'them', f: 'surprised', t: "Absolutely not. A heart is a commitment. A heart is a *contract.*" }
              ] },
              { t: "\"Make him wait. Soon.\"", then: [
                { s: 'them', f: 'happy', t: "...Oh, you're evil. I love you. Soon. Yes. I'm saying soon back." }
              ] }
            ] },
            { s: 'them', f: 'neutral', t: "Go to sleep. You still look tired. I can hear it." }
          ] },
          { id: 'epi-h-call-cherry-2', after: '1/2', events: ['epi-h-new-year'], scene: [
            { s: 'them', f: 'neutral', t: "Are you sitting down? Sit down. I'm burning my hair." },
            { s: 'solar', f: 'surprised', t: "*Why?*" },
            { s: 'them', f: 'neutral', t: "Practice. The curling iron and I are in a relationship and it's toxic." },
            { s: 'solar', f: 'happy', t: "Did you eat tteokguk at least?" },
            { s: 'them', f: 'happy', t: "Three bowls. I'm basically twenty-one now. I can rent a car." },
            { s: 'them', f: 'neutral', t: "Your mom looked happy at sebae. Like, actually happy. I'm just saying. I noticed." },
            { s: 'solar', f: 'sad', t: "...Yeah. She did." },
            { s: 'them', f: 'serious', t: "Okay. That's all. Hanging up before it gets emotional. Ow. *Ow.* The iron again. Bye." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-cherry-1', label: "Rate Sunghoon's latest text", after: '12/23', events: ['epi-h-part-four'], msgs: [
            { me: 'what did he send today' },
            { them: "'have a nice day. - s'" }, { them: 'a NICE DAY. sol. a nice day' }, { them: 'four out of ten. no. five. i had a nice day' }
          ] },
          { id: 'epi-h-tp-cherry-2', label: 'The haunted vending machine', after: '12/24', events: ['epi-h-karaoke'], msgs: [
            { me: 'i walked past the machine today and it HUMMED at me' },
            { them: 'it hums at everyone' }, { them: "it doesn't hum at me like that though. it likes you" }, { me: 'i hate it here' },
            { them: 'ur fine. text me when ur home' }
          ] },
          { id: 'epi-h-tp-cherry-3', label: 'Make-up exams', after: '1/8', events: ['epi-h-makeup'], msgs: [
            { me: 'calculus is a war crime' },
            { them: 'did u at least write ur name' }, { me: 'i wrote my name very well' },
            { them: "proud of u. that's like five points" }
          ] }
        ]
      },

      /* ── family ── */
      mom: {
        rel: 'Mom',
        noCall: "She's downstairs. She'd just come up.",
        known: [
          { t: 'She does not believe the retreat. She has not said so. She has said everything else.', events: ['epi-h-home'] },
          { t: 'Calls Jungwon "the polite one" when she wants to annoy Dad.', events: ['epi-h-christmas'] }
        ],
        topics: [
          { id: 'epi-h-tp-mom-1', label: 'Ask what’s for dinner', after: '12/22', msgs: [
            { me: 'whats for dinner' },
            { them: "Whatever you'd like, if you'd told me where you were for nine days." }, { them: 'Kimchi jjigae.' }
          ] },
          { id: 'epi-h-tp-mom-2', label: 'Thank her for Christmas', after: '12/26', events: ['epi-h-christmas'], msgs: [
            { me: 'thank u for being nice to jungwon yesterday' },
            { them: 'I am always nice.' }, { them: 'Tell him the container is the blue one. Not the green one. The green one is mine.' }
          ] }
        ]
      },
      dad: {
        rel: 'Dad',
        known: [
          { t: 'Quiet. Makes eggs when the kitchen gets loud.' },
          { t: 'Likes fishing, and will talk about it to anyone who stands still.' }
        ],
        calls: [
          { id: 'epi-h-call-dad-1', after: '12/27', events: ['epi-h-christmas'], scene: [
            { n: "He called from the supermarket. She could hear the till beeping behind him." },
            { s: 'them', f: 'neutral', t: "Your mother says tangerines. How many is tangerines." },
            { s: 'solar', f: 'happy', t: "Dad, it's a box. It's always a box." },
            { s: 'them', f: 'neutral', t: "A box. Good. I'll say I knew." },
            { s: 'them', f: 'neutral', t: "...The boy. The polite one. He asked me about fishing at lunch." },
            { s: 'solar', f: 'surprised', t: "He did?" },
            { s: 'them', f: 'happy', t: "He knew what a spinning reel was. Don't tell your mother I was impressed. It ruins her fun." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-dad-1', label: 'Ask him to bring snacks home', after: '12/28', msgs: [
            { me: 'dad can u get the shrimp crackers' },
            { them: 'Yes.' }, { them: "Don't tell your mother. She thinks I'm only buying tangerines." }
          ] }
        ]
      },

      /* ── the council ── */
      sunoo: {
        rel: "sunooshine · the council; his grandmother runs Yeobo's",
        known: [
          { t: "His grandmother runs Yeobo's, and treats every table as a personal responsibility." },
          { t: 'The council’s worst liar. He knows. He practises.', events: ['epi-h-emergency'] }
        ],
        calls: [
          { id: 'epi-h-call-sunoo-1', after: '12/24', events: ['epi-h-emergency'], scene: [
            { s: 'them', f: 'flustered', t: "Solar! Okay. Emergency. Small one. Medium. Halmeoni asked me what the monks ate." },
            { s: 'solar', f: 'neutral', t: "Rice porridge." },
            { s: 'them', f: 'sad', t: "I said croissants. *Again.* It's the only food my mouth knows under pressure." },
            { s: 'solar', f: 'happy', t: "Sunoo. They don't have croissants at a temple." },
            { s: 'them', f: 'happy', t: "She said 'how modern.' I think she's on our side? Or she's playing a very long game." },
            { s: 'them', f: 'neutral', t: "She saved you one, by the way. Under a napkin. It says 'for the vice president' on a sticky note. Come get it before Niki finds it." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-sunoo-1', label: 'Ask about the croissant under the napkin', after: '12/26', msgs: [
            { me: 'is my croissant still there' },
            { them: "YES!!! halmeoni guards it like it's the crown jewels" }, { them: 'niki tried. he got swatted. with a menu' }
          ] },
          { id: 'epi-h-tp-sunoo-2', label: 'Tell him to stay hydrated', after: '1/3', events: ['epi-h-motion'], msgs: [
            { me: 'drink water sunoo. dont read the motion thread' },
            { them: 'ok!!! drinking!!! not reading!!!' }, { them: '(reading a little)' }, { them: '(drinking more to make up for it)' }
          ] }
        ]
      },
      heeseung: {
        rel: 'heeheeseung · the council; keeper of the ledger',
        known: [
          { t: 'Keeps the ledger, the receipts and the drills. The receipts are laminated.', events: ['epi-h-emergency'] },
          { t: 'Wrote RETREAT FACTS and will quiz anyone on it at any hour.', events: ['epi-h-emergency'] }
        ],
        calls: [
          { id: 'epi-h-call-heeseung-1', after: '12/23', events: ['epi-h-emergency'], scene: [
            { s: 'them', f: 'serious', t: "Kim Solar. Card fourteen. Who drove you to the temple?" },
            { s: 'solar', f: 'surprised', t: "There's a card fourteen?" },
            { s: 'them', f: 'serious', t: "There are twenty-two cards. Who drove." },
            { s: 'solar', f: 'neutral', t: "...A bus? A temple bus?" },
            { s: 'them', f: 'neutral', t: "A coach. Chartered. From the school gate. Good enough. You get partial credit." },
            { s: 'them', f: 'happy', t: "Sorry. It's late. I just sleep better when I've heard everybody say it once." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-heeseung-1', label: 'Ask how many flashcards there are now', after: '12/27', events: ['epi-h-emergency'], msgs: [
            { me: 'how many cards are we at' },
            { them: 'twenty-six.' }, { them: 'card twenty-six is "do not mention the goat." there is no goat. learn it anyway' }
          ] },
          { id: 'epi-h-tp-heeseung-2', label: 'Ask about the ledger', after: '1/3', events: ['epi-h-motion'], msgs: [
            { me: 'is the ledger ok' },
            { them: "the ledger is perfect. the ledger has never been more perfect." }, { them: 'sleep. that’s an order from the person with the receipts.' }
          ] }
        ]
      },
      jake: {
        rel: 'jakeys · the council; memes, puns, Layla',
        known: [
          { t: 'Owns a dog named Layla and an endless supply of puns.' },
          { t: 'Will make a meme about anything within the hour, including the forum.', events: ['epi-h-part-four'] }
        ],
        calls: [
          { id: 'epi-h-call-jake-1', after: '12/28', events: ['epi-h-christmas'], scene: [
            { s: 'them', f: 'happy', t: "Sol! Quick question. Scale of one to ten, how snow-tired are you?" },
            { s: 'solar', f: 'neutral', t: "Jake. No." },
            { s: 'them', f: 'happy', t: "I have a quota. Three puns a call. That was one." },
            { s: 'solar', f: 'happy', t: "What's the actual question?" },
            { s: 'them', f: 'neutral', t: "Layla wants to know if Nana's free Thursday. She's been sitting by the door with her leash in her mouth. I can't say no to that face." },
            { s: 'solar', f: 'happy', t: "Nana's free. Nana's always free. Nana has no job." },
            { s: 'them', f: 'happy', t: "Paw-some. That's two. I'll save the third for when you least expect it." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-jake-1', label: 'Ask for the newest meme', after: '12/27', events: ['epi-h-part-four'], msgs: [
            { me: 'send the newest meme' },
            { them: '[image]' }, { them: "it's heeseung's flashcards but they're the ten commandments" }, { them: "he hasn't seen it. he has. he liked it" }
          ] },
          { id: 'epi-h-tp-jake-2', label: 'No puns about the motion', after: '1/3', events: ['epi-h-motion'], msgs: [
            { me: 'jake i swear if u make one more impeach pun' },
            { them: "i would never" }, { them: "that's im-peach-able behavior" }, { them: 'ok that was the last one. peach out' }
          ] }
        ]
      },
      jay: {
        rel: 'jbird · the council',
        known: [
          { t: 'Says "bro" like it is a whole sentence. Usually it is.' },
          { t: 'Knows everyone at Hanlim. Says so.', events: ['epi-h-emergency'] }
        ],
        calls: [
          { id: 'epi-h-call-jay-1', after: '12/27', events: ['epi-h-emergency'], scene: [
            { n: "He didn't say hello. He never did." },
            { s: 'them', f: 'neutral', t: "You home?" },
            { s: 'solar', f: 'neutral', t: "Home. Why?" },
            { s: 'them', f: 'neutral', t: "Saw your light on from the bus. Checking." },
            { s: 'solar', f: 'happy', t: "Jay. That's sweet." },
            { s: 'them', f: 'serious', t: "It's not sweet. It's a check. Lock your door, bro." },
            { s: 'them', f: 'neutral', t: "Okay. Night." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-jay-1', label: 'Ask who hanlim_accountability is', after: '1/3', events: ['epi-h-motion'], msgs: [
            { me: 'do u know who runs that account' },
            { them: 'no' }, { them: "that's the problem. i know everybody" }, { them: 'working on it' }
          ] },
          { id: 'epi-h-tp-jay-2', label: 'Thank him for the walk-home checks', after: '1/5', msgs: [
            { me: 'thanks for checking on me jay' },
            { them: 'bro' }, { them: "it's nothing. keep the light on so i know" }
          ] }
        ]
      },
      sunghoon: {
        rel: 'princehoon · the council',
        known: [
          { t: 'Signs his texts. "- s." Even in the group chat.' },
          { t: 'Refers to himself in the third person when he is feeling something.' },
          { t: 'Has said "soon" to Cherry, and nothing else, with enormous confidence.', events: ['epi-h-part-four'] }
        ],
        calls: [
          { id: 'epi-h-call-sunghoon-1', after: '12/26', events: ['epi-h-part-four'], scene: [
            { n: "It went to voicemail on her end, somehow. The voicemail was from him, about him, to her." },
            { s: 'them', f: 'neutral', t: "Hello. This is Sunghoon. Sunghoon is calling to ask a question for a friend." },
            { s: 'them', f: 'neutral', t: "The friend is Sunghoon." },
            { s: 'them', f: 'flustered', t: "Does Cherry like ice skating, in general, as a concept. Not specifically. Just. As an activity a person might be asked to do. Soon." },
            { s: 'them', f: 'neutral', t: "Don't tell her I called. Sunghoon will deny it. - s." },
            { n: "He'd said the dash out loud. She played it twice." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-sunghoon-1', label: 'Tell him Cherry says soon back', after: '12/27', events: ['epi-h-part-four'], msgs: [
            { me: 'cherry says soon' },
            { them: 'soon what' }, { me: 'just soon' }, { them: 'sunghoon has never been so terrified. thank you. - s' }
          ] },
          { id: 'epi-h-tp-sunghoon-2', label: 'Ask him to stop signing texts', after: '1/2', msgs: [
            { me: 'u dont have to sign every text' },
            { them: "it's elegant." }, { them: '- s' }
          ] }
        ]
      },
      niki: {
        rel: 'rikiniki · the council; the youngest',
        known: [
          { t: 'The council’s youngest and its most confident liar, which worries everyone.' },
          { t: 'Answers the forum when he has been told, in writing, not to.', events: ['epi-h-part-four'] }
        ],
        calls: [
          { id: 'epi-h-call-niki-1', after: '12/29', events: ['epi-h-emergency'], scene: [
            { s: 'them', f: 'happy', t: "LMAOOO." },
            { s: 'solar', f: 'neutral', t: "I haven't said anything yet." },
            { s: 'them', f: 'happy', t: "I'm getting ahead of it. Okay. Don't be mad. I posted something." },
            { s: 'solar', f: 'serious', t: "Niki." },
            { s: 'them', f: 'neutral', t: "It's nice! It's a picture of a temple. A real one. From the internet. With the caption 'miss it here.'" },
            { s: 'solar', f: 'surprised', t: "That's... actually not terrible?" },
            { s: 'them', f: 'happy', t: "Right?? Heeseung said the same thing and then he said 'delete it' anyway. I'm keeping it up for one more hour. For the culture." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-niki-1', label: "Ask what he's done now", after: '12/28', events: ['epi-h-emergency'], msgs: [
            { me: 'what did u do' },
            { them: 'nothing' }, { them: 'something' }, { them: 'dont open the forum for like an hour -skull-' }
          ] },
          { id: 'epi-h-tp-niki-2', label: 'Good luck on make-ups', after: '1/8', events: ['epi-h-makeup'], msgs: [
            { me: 'good luck on geography' },
            { them: "they're making a CHILD take it twice" }, { them: 'ty tho. ur the only one who said good luck. heeseung said "focus"' }
          ] }
        ]
      },

      /* ── the club ── */
      junkyu: {
        rel: 'junkyute · the club',
        known: [
          { t: 'The softest person in the club chat. Communicates mainly in exclamation marks.' },
          { t: 'Cried when he saw her in the gym, and told her so.', events: ['epi-h-home'] }
        ],
        calls: [
          { id: 'epi-h-call-junkyu-1', after: '12/24', events: ['epi-h-karaoke'], scene: [
            { s: 'them', f: 'happy', t: "SOLAR!!! Hi!!! Sorry. Hi. I'm calling because. Hm." },
            { n: "He hummed. He always hummed when he forgot why he'd called." },
            { s: 'them', f: 'happy', t: "Oh! Karaoke! You sang the emo one *so* good. I've had it in my head for a day. I sang it in the shower and my mom knocked." },
            { s: 'solar', f: 'happy', t: "Kyu. Did she knock because it was bad?" },
            { s: 'them', f: 'sad', t: "...She knocked because it was *loud.* That's different. :(" },
            { s: 'them', f: 'happy', t: "Okay that's all!!! Drink water!!! Not machine water!!!" }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-junkyu-1', label: 'Tell him you ate', after: '12/22', msgs: [
            { me: 'kyu i ate. two meals. a whole two' },
            { them: 'TWO!!!!!' }, { them: "i'm so proud!!! i told asahi and he said 'ok' but he smiled" }
          ] },
          { id: 'epi-h-tp-junkyu-2', label: 'The rain-sounds playlist', after: '1/8', events: ['epi-h-makeup'], msgs: [
            { me: 'the rain playlist actually worked' },
            { them: 'REALLY!!!' }, { them: 'i made a part two. its thunder. for the hard questions' }
          ] }
        ]
      },
      hyunsuk: {
        rel: 'geniusuk · the club; the one who drives',
        known: [
          { t: 'The club’s driver. Says "man" and "bro" interchangeably.' },
          { t: 'Has known Jihoon a long time and is not impressed by him, which is its own kind of loyalty.' }
        ],
        calls: [
          { id: 'epi-h-call-hyunsuk-1', after: '12/30', events: ['epi-h-study-plans'], scene: [
            { n: "Road noise. A heater roaring. He was driving with her on speaker." },
            { s: 'them', f: 'neutral', t: "Need a ride anywhere? I'm out anyway." },
            { s: 'solar', f: 'neutral', t: "Why's it so loud?" },
            { s: 'them', f: 'neutral', t: "Heater only does high. It's either this or frostbite, man." },
            { s: 'solar', f: 'happy', t: "I'm good. Thanks, Hyunsuk." },
            { s: 'them', f: 'neutral', t: "Cool. Offer stands. Always does. Tell Jihoon to text me back, he's ignoring me again." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-hyunsuk-1', label: 'Ask for a ride to the make-ups', after: '1/6', msgs: [
            { me: 'can u drive me monday morning' },
            { them: "yeah. 7:50. i'm not waiting, i'm honking" }
          ] }
        ]
      },
      jaehyuk: {
        rel: 'jaehyukkie · the club; the one with the doc',
        known: [
          { t: 'Sensible to a fault. The one who tells everyone to go to sleep at 4 a.m.' },
          { t: 'Made a shared doc of everything they missed for the make-ups. Jihoon renamed every heading NANA.', events: ['epi-h-study-plans'] },
          { t: 'Read out her calculus result off the board: sixty-one.', events: ['epi-h-results'] }
        ],
        calls: [
          { id: 'epi-h-call-jaehyuk-1', after: '1/5', events: ['epi-h-study-plans'], scene: [
            { s: 'them', f: 'neutral', t: "Have you done the calculus section." },
            { s: 'solar', f: 'flustered', t: "I've *opened* the calculus section." },
            { s: 'them', f: 'neutral', t: "That's a start. Okay. I made a second doc. Just for you. It's shorter. It doesn't have jokes in it." },
            { s: 'solar', f: 'surprised', t: "Jaehyuk." },
            { s: 'them', f: 'serious', t: "Jihoon doesn't have edit access. Nobody does. It's safe." },
            { s: 'solar', f: 'happy', t: "You're an angel." },
            { s: 'them', f: 'neutral', t: "I'm a person with a spreadsheet. Do problem one tonight. Just one." }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-jaehyuk-1', label: 'Ask which section to do first', after: '12/26', msgs: [
            { me: 'which section first' },
            { them: 'calculus.' }, { them: "it's always going to be calculus, solar" }
          ] },
          { id: 'epi-h-tp-jaehyuk-2', label: 'Sixty-one', after: '1/12', events: ['epi-h-results'], msgs: [
            { me: 'SIXTY ONE' },
            { them: "it's sixty-one." }, { them: "...it's a good sixty-one. i'm proud of you." }
          ] }
        ]
      },
      asahi: {
        rel: 'asanoonecares · the club',
        known: [
          { t: 'No one cares. Asahi says so. Then, in brackets, he cares.' },
          { t: 'Brought Kazuha, an exchange student from his class, to the club’s séance.', events: ['epi-h-seance'] }
        ],
        calls: [
          { id: 'epi-h-call-asahi-1', after: '12/23', events: ['epi-h-home'], scene: [
            { n: "Rustling. Muffled voices. A long, deep crunch, like snow under boots." },
            { s: 'solar', f: 'neutral', t: "Asahi? Hello?" },
            { n: "More crunching. Somebody, possibly his mother, said something about the photo spot." },
            { s: 'them', f: 'surprised', t: "...Why are you in my pocket." },
            { s: 'solar', f: 'happy', t: "You called *me.*" },
            { s: 'them', f: 'neutral', t: "No one cares." },
            { s: 'them', f: 'neutral', t: "...You okay, though?" }
          ] }
        ],
        topics: [
          { id: 'epi-h-tp-asahi-1', label: 'Ask how Kazuha is', after: '12/28', events: ['epi-h-seance'], msgs: [
            { me: 'is kazuha ok after the seance' },
            { them: "she's fine. she wants to do another one" }, { them: 'no one is doing another one' }, { them: '(i might do another one)' }
          ] }
        ]
      },

      /* ── school ── */
      eunchae: {
        rel: 'Hanlim Unfiltered · the forum’s livestream',
        noCall: "She'd put it on the stream.",
        known: [
          { t: 'Runs Hanlim Unfiltered, the forum’s livestream. Owns a ring light.', events: ['epi-h-part-four'] }
        ],
        topics: [
          { id: 'epi-h-tp-eunchae-1', label: 'Ask her to stop asking for comment', after: '12/28', msgs: [
            { me: 'pls stop asking me for comment' },
            { them: "ok!!! noted!!! 'the vice president asks for privacy.'" }, { them: "that's a comment btw. thank u" }
          ] }
        ]
      },
      chaewon: {
        rel: 'Chaewon · Debate Society; moderating the hearing',
        after: '1/8', events: ['epi-h-makeup'],
        noCall: "She asked everyone not to.",
        known: [
          { t: 'Moderating Thursday’s hearing. Writes to both sides the same way, and signs with a dash.', events: ['epi-h-makeup'] }
        ],
        topics: [
          { id: 'epi-h-tp-chaewon-1', label: 'Thank her for moderating', after: '1/11', events: ['epi-h-hearing'], msgs: [
            { me: 'thank you for being fair today' },
            { them: "That's the job. Thank you for not contacting me before it. You'd be surprised how few people managed. — C" }
          ] }
        ]
      }
    }
  });
})();
