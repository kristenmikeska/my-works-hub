/* The Stay epilogue: "who's up tonight" texts (Nov 6 2026, Kat's idea 4; epilogue.js upText documents the rules).
   On a quiet night where the late screen lists someone (lateOpen), one of these arrives as it opens, from one of the people
   listed (or the S.E.E.S. chat), so the phone says someone's awake before Sleep. One a night at most, each once, none on a
   story night (3/28 never gets one).
   { id, who: bond id | [ids], hang: hangout id(s) (only when that's the hangout the person is offering tonight), thread,
     msgs, events, after, until }
   Group lines go in 'sees' (handles from phone.js). Akihiko's only Late Night is asleep on the couch, so his text is the
   dorm's about him; Shinjiro's is a call from the hospital, so it has none. Light lines only; nothing of the dead threads. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).stay ||= {});
  (R.textsUp ||= []).push(
    // ── hinted: exactly the hangout on offer ──
    { id: 'epi-st-up-yukari-masks', who: 'yukari', hang: 'epi-st-yukari-masks', msgs: [
      { from: 'yukari', t: "you awake?" },
      { from: 'yukari', t: "don't answer. i'm about to knock. act surprised" }
    ] },
    { id: 'epi-st-up-junpei-cake', who: 'junpei', hang: 'epi-st-junpei-cake', msgs: [
      { from: 'junpei', t: "r u awake" },
      { from: 'junpei', t: "hypothetically. if there was something in the fridge. and it had nobody's name on it" },
      { from: 'junpei', t: "asking for a friend (me)" }
    ] },
    { id: 'epi-st-up-fuuka-book', who: 'fuuka', hang: 'epi-st-fuuka-phrase', msgs: [
      { from: 'fuuka', t: "senpai, are you awake? sorry!! you don't have to be" },
      { from: 'fuuka', t: "the lounge light is on. it's just me and a book with too many sticky tabs" }
    ] },
    { id: 'epi-st-up-aigis', who: 'aigis', hang: 'epi-st-aigis-watch', msgs: [
      { from: 'aigis', t: 'Solar-san. It is 2:04.' },
      { from: 'aigis', t: 'Your breathing is not the breathing of someone who is asleep.' }
    ] },
    { id: 'epi-st-up-aki-couch', who: 'akihiko', hang: 'epi-st-akihiko-couch', thread: 'sees', msgs: [
      { from: 'junpei', t: "akihiko senpai is asleep on the lounge couch. in his GLOVES" },
      { from: 'yukari', t: "leave him alone" },
      { from: 'mitsuru', t: 'Leave him.' }
    ] },
    // ── general: any night they're up ──
    { id: 'epi-st-up-yukari-wall', who: 'yukari', msgs: [
      { from: 'yukari', t: "are you up" },
      { from: 'yukari', t: "i can hear junpei's game through the wall. tell me you can hear it too" }
    ] },
    { id: 'epi-st-up-junpei-solar', who: 'junpei', msgs: [
      { from: 'junpei', t: "solar. SOLAR. u up" },
      { from: 'junpei', t: "ok cool me neither" }
    ] },
    { id: 'epi-st-up-fuuka-late', who: 'fuuka', msgs: [
      { from: 'fuuka', t: "senpai!! sorry, it's late!! are you still awake?" },
      { from: 'fuuka', t: "it's okay if not!! goodnight!! (if not)" }
    ] },
    // ── the S.E.E.S. chat ──
    { id: 'epi-st-up-sees-loud', who: ['yukari', 'junpei', 'fuuka'], thread: 'sees', msgs: [
      { from: 'junpei', t: "who's up" },
      { from: 'yukari', t: "everyone. because you're LOUD" },
      { from: 'fuuka', t: "i'm up!! sorry!!" }
    ] },
    { id: 'epi-st-up-sees-status', who: ['yukari', 'junpei', 'fuuka', 'aigis'], thread: 'sees', msgs: [
      { from: 'aigis', t: 'Status check. Who is awake.' },
      { from: 'junpei', t: "me" },
      { from: 'yukari', t: "aigis it's midnight" },
      { from: 'aigis', t: 'Yes. Status check.' }
    ] }
  );
})();
