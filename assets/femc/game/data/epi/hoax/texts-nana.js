/* The HOAX epilogue, second pass (Nov 6 2026): more texts and phone lines, mostly Nana and her parents (Kat: "We LOVE Nana.
   And so do the characters in Hoax!"; "a phone call from Solar's dad: details like this are what bring the realism to life").
   Data only; pushes onto R.texts and the phone's contacts like texts-more.js (phone.js must load first: it does in the game,
   where this file is listed after it, and in the checker, which loads alphabetically).
   Texts (dated: thread, date, slot · ambient: thread, window):
     epi-h-tx-mom-bed       mom      12/23 after     Dad bought Nana a dog bed; he has not used it
     epi-h-tx-jw-door       jungwon  1/10 after      Maeumi at the front door again; "i told him nana has exams"
     epi-h-am-sunoo-ask     sunoo    12/26-12/31     Halmeoni asks if the big white dog is eating enough
     epi-h-am-asahi-real    asahi    1/1-1/7         Kazuha wants proof Nana is real (new thread 'asahi')
     epi-h-am-suk-window    hyunsuk  1/2-1/7         Nana in her window gave him a look (new thread 'hyunsuk')
     epi-h-am-jake-tv       jake     12/26-12/31     Layla saw a Samoyed on television
   Phone (contacts): dad +2 calls (the ice on the reservoir; picking her up in the snow), +1 known (his name); mom +1 known
     (her name); jungwon +1 known (the dog date, after epi-h-jungwon-dogs).
   Flags set: none. Gates: story events, and one hangout (the dog date) for Jungwon's card line, which `fits` allows only for
     events and routines, so that line is gated on the date and epi-h-christmas instead and worded so it's true either way.
   Inventions for Kat to confirm: her parents' names, Kim Jaeseok and Han Soyeon (see story-nana.js); Dad's dog bed;
     Dad goes ice fishing at the reservoir in January (he only looks; it's never thick enough); the man in the green hat. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const T = (R.texts ||= {});
  T.threads = Object.assign(T.threads || {}, { asahi: 'asahi', hyunsuk: 'suk' });
  (T.texts ||= []).push(
    { id: 'epi-h-tx-mom-bed', thread: 'mom', date: '12/23', slot: 'after', events: ['epi-h-home'], msgs: [
      { from: 'mom', t: 'Your father bought Nana a dog bed. It is very expensive. It has memory foam.' },
      { from: 'mom', t: '[Photo: a large grey dog bed in the corner of the living room, untouched, and in the background, through the doorway, a white tail hanging off the end of a human bed]', img: 'tp-hoax-dog-bed' },
      { from: 'mom', t: 'He has not used it.' }
    ], reply: [
      { t: "he's never going to use it mom", then: [{ from: 'mom', t: 'I know. Your father is using it. He lies in it to show him how.' }, { from: 'mom', t: "It's not working." }] },
      { t: "let him have my bed. he earned it", then: [{ from: 'mom', t: 'He has had your bed since 2016, Solar.' }] }
    ] },
    { id: 'epi-h-tx-jw-door', thread: 'jungwon', date: '1/10', slot: 'after', events: ['epi-h-makeup'], msgs: [
      { from: 'jungwon', t: "maeumi is sitting by the front door again." },
      { from: 'jungwon', t: "i told him nana has exams." },
      { from: 'jungwon', t: "he didn't accept that." }
    ], reply: [
      { t: "tell him nana says good luck on his exams too", then: [{ from: 'jungwon', t: "he doesn't take exams. he takes offence." }] },
      { t: "[Photo: Nana lying across her bedroom doorway, looking at the camera]", img: 'tp-hoax-doorway', then: [{ from: 'jungwon', t: "i showed him." }, { from: 'jungwon', t: "he's been looking at my phone for five minutes. i can't get it back." }] }
    ] }
  );
  (T.ambient ||= []).push(
    { id: 'epi-h-am-sunoo-ask', thread: 'sunoo', from: '12/26', to: '12/31', events: ['epi-h-christmas'], msgs: [
      { from: 'sunoo', t: 'halmeoni asked me to ask u if the big white dog is eating enough' },
      { from: 'sunoo', t: "she's never met him. she just has a feeling. she has a lot of feelings about dogs she's never met 🥺" }
    ], reply: [
      { t: "tell her he ate a whole sweet potato off the counter yesterday", then: [{ from: 'sunoo', t: 'she says GOOD.' }, { from: 'sunoo', t: "she says that's a dog who knows what he wants" }] },
      { t: "[Photo: Nana asleep with his head in his food bowl]", img: 'tp-hoax-food-bowl', then: [{ from: 'sunoo', t: 'she laughed so hard she had to sit down!!!' }, { from: 'sunoo', t: 'she says bring him by the back door. NOT the front' }] }
    ] },
    { id: 'epi-h-am-asahi-real', thread: 'asahi', from: '1/1', to: '1/7', events: ['epi-h-seance'], msgs: [
      { from: 'asahi', t: "kazuha wants to know if your dog is real" },
      { from: 'asahi', t: "i said no one cares. she said that's not an answer" },
      { from: 'asahi', t: "send one picture so she leaves me alone" }
    ], reply: [
      { t: "[Photo: Nana sitting very straight in the snow, looking directly into the camera]", img: 'tp-hoax-snow-sit', then: [{ from: 'asahi', t: "she's crying" }, { from: 'asahi', t: "thanks. now she won't leave me alone for a different reason" }] },
      { t: "you have like eleven pictures of him asahi", then: [{ from: 'asahi', t: "that's private" }, { from: 'asahi', t: "it's twelve" }] }
    ] },
    { id: 'epi-h-am-suk-window', thread: 'hyunsuk', from: '1/2', to: '1/7', events: ['epi-h-motion'], msgs: [
      { from: 'hyunsuk', t: "drove past ur house" },
      { from: 'hyunsuk', t: "nana was in the window. he looked at me like i owed him money" },
      { from: 'hyunsuk', t: "do i owe him money" }
    ], reply: [
      { t: "you owe him a visit", then: [{ from: 'hyunsuk', t: "ok" }, { from: 'hyunsuk', t: "yeah. ok. fair" }] },
      { t: "he looks at everyone like that suk", then: [{ from: 'hyunsuk', t: "no he doesnt. he looks at jihoon like hes the sun" }, { from: 'hyunsuk', t: "whatever. tell him hi" }] }
    ] },
    { id: 'epi-h-am-jake-tv', thread: 'jake', from: '12/26', to: '12/31', events: ['epi-h-christmas'], msgs: [
      { from: 'jake', t: 'layla saw a samoyed on tv and lost her entire mind' },
      { from: 'jake', t: "she barked at the screen for ten minutes. she thinks it's nana. she thinks nana is IN the tv" },
      { from: 'jake', t: 'thought u should know. this is a pawblic service announcement' }
    ], reply: [
      { t: "jake no", then: [{ from: 'jake', t: 'jake yes' }, { from: 'jake', t: "that's two today. i'm on track" }] },
      { t: "tell her nana says hi from the tv", then: [{ from: 'jake', t: 'she accepted this. she is now waiting by the tv' }] }
    ] }
  );

  // The phone's contacts (phone.js): merged into what phone.js has for each person.
  const P = (R.phone ||= {}), C = (P.contacts ||= {});
  const more = (id, part, list) => { const c = (C[id] ||= {}); (c[part] ||= []).push(...list); };
  more('dad', 'known', [{ t: 'Kim Jaeseok. Hotel front desks call him Jaeseok-nim and he stands up straighter for a week.', events: ['epi-h-dad-call'] }]);
  more('mom', 'known', [{ t: 'Han Soyeon. She kept her own name, and Dad wrote it down the day she told him.', events: ['epi-h-dad-call'] }]);
  more('jungwon', 'known', [{ t: 'Calls the dogs’ walks errands, because errands are allowed. Maeumi has a knitted coat the colour of a traffic cone.', after: '12/31', events: ['epi-h-christmas'] }]);
  more('dad', 'calls', [
    { id: 'epi-h-call-dad-2', after: '1/1', events: ['epi-h-new-year'], scene: [
      { n: "He called from the reservoir. She could hear the wind going across the open water, or across the ice, she couldn't tell which, and the scrape of a boot." },
      { s: 'them', f: 'neutral', t: "It's frozen. Mostly. Not enough. I'm looking at it." },
      { s: 'solar', f: 'happy', t: "Dad, you drove an hour to look at ice?" },
      { s: 'them', f: 'happy', t: "I drove an hour to stand next to ice. It's different. The man with the green hat is here. He nodded at me. Nine years, Solar. He nodded." },
      { s: 'solar', f: 'happy', t: "That's huge, Dad." },
      { s: 'them', f: 'neutral', t: "It is. Don't tell your mother I called to tell you that. She'll say I need more friends." },
      { s: 'them', f: 'neutral', t: "...Take the dog out before lunch. He gets sad when the car goes and I'm in it." }
    ] },
    { id: 'epi-h-call-dad-3', after: '1/8', events: ['epi-h-makeup'], scene: [
      { n: "He picked up on the second ring and she could hear the car's indicator ticking." },
      { s: 'them', f: 'neutral', t: "I'm outside the school. Don't look. I'm parked by the stationery shop so nobody sees a father." },
      { s: 'solar', f: 'surprised', t: "Dad. It's snowing. I could walk." },
      { s: 'them', f: 'neutral', t: "It's coming down sideways. Your mother said let her walk. I said I'm already here. Get in the car." },
      { s: 'solar', f: 'sad', t: "...Okay." },
      { s: 'them', f: 'happy', t: "The dog is in the back. He insisted. He's put his face on the window. You'll know which car." }
    ] }
  ]);
})();
