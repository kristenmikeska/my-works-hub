/* The HOAX epilogue, the expansion pass (Nov 5-6 2026): more texts and phone lines, mostly Nana (Kat: "more of Nana").
   Data only; loaded with the world after phone.js (epilogue.js WORLDS.hoax.files). Pushes onto R.texts (people.js's shapes)
   and the phone's contacts (phone.js's shapes); never replaces either, so load order doesn't matter (phone.js merges with
   Object.assign onto R.phone, so it must load first: it does in the game, where this file is listed after it, and in the
   checker, which loads alphabetically).
   Texts (dated: thread, date, slot · ambient: thread, window):
     epi-h-tx-mom-pillow     mom      12/22 after     Nana on her pillow, legs in the air; "I didn't put him there."
     epi-h-tx-jh-son         jihoon   12/26 evening   "how is my son"; proof of life, round two
     epi-h-tx-jw-maeumi      jungwon  12/27 evening   Maeumi at his front door since Christmas, waiting for Nana
     epi-h-tx-kyu-snow       junkyu   1/4 after       the snow day: is Nana okay in the snow
     epi-h-tx-dad-luck       dad      1/9 evening     good luck from her mother, and Nana lying by the door
     epi-h-tx-mom-japchae    mom      1/12 evening    the last ordinary evening: japchae, Nana not helping
     epi-h-am-niki-weigh     niki     12/28-1/3       "is it true ur dog weighs more than u"
     epi-h-am-cher-cloud     cherry   12/29-1/5       her grandmother asks after the cloud dog
     epi-h-am-sunoo-bone     sunoo    1/1-1/6         Halmeoni saved a soup bone for the big white dog
     epi-h-am-jake-rematch   jake     1/2-1/7         Layla wants a rematch (new thread 'jake', "jakeys")
   Phone (contacts): mom +1 known, +1 topic; dad +1 known (after the bath routine); jihoon +1 topic; jungwon +1 topic.
   Flags set: none. Gates: story events only (and the bath routine for Dad's card line, which `fits` allows).
   Inventions for Kat to confirm: Nana sleeps upside down on her pillow; Jihoon's "proof of life" bit (people-late.js has it
     first); Maeumi waiting at Jungwon's front door; Halmeoni's soup bone; Layla and Nana's "rematch" (after Jake's 'snow
     way' wrestle); Mom's japchae on 1/12; her grandmother calling Nana "the cloud dog". */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const T = (R.texts ||= {});
  T.threads = Object.assign(T.threads || {}, { jake: 'jakeys' });
  (T.texts ||= []).push(
    { id: 'epi-h-tx-mom-pillow', thread: 'mom', date: '12/22', slot: 'after', events: ['epi-h-home'], msgs: [
      { from: 'mom', t: '[Photo: Nana asleep on the floor of her room, upside down, all four legs in the air]', img: 'tp-hoax-mom-pillow' },
      { from: 'mom', t: "I didn't put him there. I want that on the record." }
    ], reply: [
      { t: "he did that the whole time i was gone didn't he", then: [{ from: 'mom', t: 'Every night.' }, { from: 'mom', t: "Come home before dinner. He's very boring without you." }] },
      { t: "MY ROOM", then: [{ from: 'mom', t: "It's his room now. He has squatter's rights." }] }
    ] },
    { id: 'epi-h-tx-jh-son', thread: 'jihoon', date: '12/26', slot: 'evening', events: ['epi-h-christmas'], msgs: [
      { from: 'jihoon', t: 'how is my son' },
      { from: 'jihoon', t: 'he has not called' },
      { from: 'jihoon', t: 'send Proof Of Life or i am coming over' }
    ], reply: [
      { t: "[Photo: Nana on the heated floor, one ear inside out]", img: 'tp-hoax-ear', then: [{ from: 'jihoon', t: 'his ear' }, { from: 'jihoon', t: 'fix his ear. this is a Hostage Situation. i want him treated with dignity' }] },
      { t: "he's asleep jihoon he's a dog", then: [{ from: 'jihoon', t: 'he is a prince' }, { from: 'jihoon', t: 'wake him and tell him Father says goodnight' }] }
    ] },
    { id: 'epi-h-tx-jw-maeumi', thread: 'jungwon', date: '12/27', slot: 'evening', events: ['epi-h-christmas'], msgs: [
      { from: 'jungwon', t: "maeumi has been sitting at the front door since christmas." },
      { from: 'jungwon', t: "my mother thinks he needs to go out. he doesn't. i took him out four times." },
      { from: 'jungwon', t: "i think he's waiting for nana. please don't tell nana. he'll be unbearable." }
    ], reply: [
      { t: "maeumi is in LOVE", then: [{ from: 'jungwon', t: "maeumi doesn't believe in love." }, { from: 'jungwon', t: "he's been sitting there for nine hours though." }] },
      { t: "nana says he's busy", then: [{ from: 'jungwon', t: "i'm not telling him that. he'll scream." }] }
    ] },
    { id: 'epi-h-tx-kyu-snow', thread: 'junkyu', date: '1/4', slot: 'after', msgs: [
      { from: 'junkyu', t: 'SOLAR!!! is nana ok in the snow!!!' },
      { from: 'junkyu', t: "it's SO much snow. can he even see. he's the same colour as it :(" }
    ], reply: [
      { t: "[Photo: a pair of black eyes and a black nose in a snowbank]", img: 'tp-hoax-snowbank', then: [{ from: 'junkyu', t: 'HE IS SO HAPPY' }, { from: 'junkyu', t: "i'm saving this forever!!!" }] },
      { t: "he's thriving kyu. he's in his element", then: [{ from: 'junkyu', t: 'ok good!!! tell him i said hi!!! :D' }] }
    ] },
    { id: 'epi-h-tx-dad-luck', thread: 'dad', date: '1/9', slot: 'evening', events: ['epi-h-makeup'], msgs: [
      { from: 'dad', t: 'Your mother says to tell you good luck tomorrow. I am telling you good luck.' },
      { from: 'dad', t: 'The dog is lying by the front door. I think he knows it is exam week.' }
    ], reply: [
      { t: "thanks dad. tell him i'm fine", then: [{ from: 'dad', t: 'I told him. He did not believe me either.' }] },
      { t: "(Send a thumbs up.)", then: [{ from: 'dad', t: 'Good.' }] }
    ] },
    { id: 'epi-h-tx-mom-japchae', thread: 'mom', date: '1/12', slot: 'evening', events: ['epi-h-results'], msgs: [
      { from: 'mom', t: "Your father told me about the 61." },
      { from: 'mom', t: "I'm making japchae. Nana is helping, which means he's lying across the kitchen doorway so nobody can get in or out." },
      { from: 'mom', t: 'Come home and eat, Solar.' }
    ], reply: [
      { t: "coming home mom", then: [{ from: 'mom', t: 'Good.' }] },
      { t: "save me the burnt bits", then: [{ from: 'mom', t: "There are no burnt bits. I don't burn things." }, { from: 'mom', t: "I'll save you the burnt bits." }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-h-am-niki-weigh', thread: 'niki', from: '12/28', to: '1/3', msgs: [
      { from: 'niki', t: 'is it true ur dog weighs more than u' },
      { from: 'niki', t: 'jake said. i have money on this' }
    ], reply: [
      { t: "he's sixty pounds niki", then: [{ from: 'niki', t: 'so yes' }, { from: 'niki', t: 'LMAOOO -skull-' }] },
      { t: "how much money", then: [{ from: 'niki', t: '5000 won and my dignity' }, { from: 'niki', t: "ok i've lost both" }] }
    ] },
    { id: 'epi-h-am-cher-cloud', thread: 'cherry', from: '12/29', to: '1/5', events: ['epi-h-christmas'], msgs: [
      { from: 'cherry', t: "my grandma called to ask if 'the cloud dog' is still alive" },
      { from: 'cherry', t: "she's asked every christmas since we were 9. she thinks he's a different dog every year bc he never gets old" }
    ], reply: [
      { t: "tell her he's immortal", then: [{ from: 'cherry', t: 'i told her that in 2019. she lit incense' }] },
      { t: "[Photo: Nana in the park, smiling]", img: 'tp-hoax-window', then: [{ from: 'cherry', t: "sent it to her. she's printing it" }, { from: 'cherry', t: 'she does not know how to print things. this is going to take all day' }] }
    ] },
    { id: 'epi-h-am-sunoo-bone', thread: 'sunoo', from: '1/1', to: '1/6', events: ['epi-h-sebae'], msgs: [
      { from: 'sunoo', t: 'halmeoni saved a bone from the new year soup for "the big white dog"' },
      { from: 'sunoo', t: "it's in the freezer with his name on it. she wrote his name on it. in marker!!!" }
    ], reply: [
      { t: "tell her nana says thank you", then: [{ from: 'sunoo', t: 'she says he can come in through the back. NOT the front. the front is for customers 🥺' }] },
      { t: "she's never even met him", then: [{ from: 'sunoo', t: "she's seen him through the window. she says that's enough. she says he has a good face" }] }
    ] },
    { id: 'epi-h-am-jake-rematch', thread: 'jake', from: '1/2', to: '1/7', events: ['epi-h-motion'], msgs: [
      { from: 'jake', t: 'layla is requesting a rematch' },
      { from: 'jake', t: "she's been thinking about the park. she has notes. she's not going to let it go, she's a pit-bull about it (she's a mutt)" }
    ], reply: [
      { t: "nana accepts. name the snowbank", then: [{ from: 'jake', t: 'the big one by the swings. bring treats. losers buy hotteok' }] },
      { t: "jake that was so bad", then: [{ from: 'jake', t: "i have a quota" }, { from: 'jake', t: "i'm at like four for the day. i'm behind" }] }
    ] }
  );

  // The phone's contacts (phone.js): a few more lines, merged into whatever phone.js has (or will have) for each person.
  const P = (R.phone ||= {}), C = (P.contacts ||= {});
  const more = (id, part, list) => { const c = (C[id] ||= {}); (c[part] ||= []).push(...list); };
  more('mom', 'known', [{ t: 'Sat in the front hall with Nana for most of the nine days. She has mentioned this once.', events: ['epi-h-rt-nana-mom'] }]);
  more('mom', 'topics', [
    { id: 'epi-h-tp-mom-nana', label: 'Ask how Nana is', after: '12/26', events: ['epi-h-christmas'], msgs: [
      { me: 'how is nana' },
      { them: 'He is on your bed.' }, { them: 'He is always on your bed. Why are you asking me, you can see your bed from where you are.' },
      { me: "i'm at yeobo's" }, { them: 'Then he is on your bed and you are at Yeobo’s. Come home before seven.' }
    ] }
  ]);
  more('dad', 'known', [{ t: 'Washes the dog the way he cleans a fish: carefully, from the head down, talking the whole time.', events: ['epi-h-rt-nana-bath'] }]);
  more('jihoon', 'topics', [
    { id: 'epi-h-tp-jihoon-nana', label: 'Send him a picture of Nana', after: '12/22', events: ['epi-h-home'], msgs: [
      { me: '[Photo: Nana letting her use him as a pillow]', img: 'tp-hoax-feet' },
      { them: 'MY SON' }, { them: 'my beloved' }, { them: 'he has gotten bigger in ur absence. Out Of Grief' },
      { me: 'he got bigger bc my mom fed him every time he looked sad' }, { them: 'same thing' }
    ] }
  ]);
  more('jungwon', 'topics', [
    { id: 'epi-h-tp-jungwon-maeumi', label: 'Ask how Maeumi is', after: '12/26', events: ['epi-h-christmas'], msgs: [
      { me: 'how is maeumi' },
      { them: "he barked at the radiator for twenty minutes." }, { them: "i don't know what the radiator did. he does." },
      { me: 'nana says hi' }, { them: "i'm not telling him that. he'll get ideas." }
    ] }
  ]);
})();
