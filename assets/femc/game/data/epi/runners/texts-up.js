/* The Runners epilogue: "who's up tonight" texts (Nov 6 2026, Kat's idea 4; epilogue.js upText documents the rules).
   On a quiet night where the late screen lists someone (lateOpen), one of these arrives as it opens, from one of the people
   listed (or the girls' / team chat), so the phone says someone's awake before Sleep. One a night at most, each once, none on
   a story night (the evenings that consume: 12/3, 12/9-12/12, 12/17, 12/22, 12/25 never get one).
   { id, who: bond id | [ids], hang: hangout id(s) (only when that's the hangout the person is offering tonight), thread,
     msgs, events, after, until }
   Where a hangout's hint already quotes a text (Haechan's 1:52, Minji's 11:40), that text is the one sent, word for word;
   the porch rail's "two words, then three" is two words, then three. Hinted texts say no more than their hint. Group lines go
   in 'girls' / 'team' (handles from phone.js). Danielle and Mark have no text (her thread doesn't exist; his night falls on
   a story night). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.textsUp ||= []).push(
    // ── hinted: exactly the hangout on offer ──
    { id: 'epi-r-up-hc-porch', who: 'haechan', hang: 'epi-r-haechan-porchrail', msgs: [
      { from: 'haechan', t: "you awake" },
      { from: 'haechan', t: "look out front" }
    ] },
    { id: 'epi-r-up-hc-duo', who: 'haechan', hang: 'epi-r-haechan-duo', msgs: [
      { from: 'haechan', t: "duo?" },
      { from: 'haechan', t: "invite's been sitting there ten minutes. i look like a loser. accept it" }
    ] },
    { id: 'epi-r-up-hc-coat', who: 'haechan', hang: 'epi-r-nyc-haechan-2am', msgs: [
      { from: 'haechan', t: "up" },
      { from: 'haechan', t: "come down. bring the good coat" }
    ] },
    { id: 'epi-r-up-hanni-door', who: 'hanni', hang: 'epi-r-hanni-source', msgs: [
      { from: 'hanni', t: "are you awake" },
      { from: 'hanni', t: "can i come in. i'm kind of already outside your door" }
    ] },
    { id: 'epi-r-up-hanni-ft', who: 'hanni', hang: 'epi-r-nyc-hanni-facetime', msgs: [
      { from: 'hanni', t: "pick up pick up pick up" },
      { from: 'hanni', t: "hyein's in a sheet mask and i need a witness" }
    ] },
    { id: 'epi-r-up-hyein-artist', who: 'hyein', hang: 'epi-r-hyein-artist', msgs: [
      { from: 'hyein', t: "are you up. i need an assistant" },
      { from: 'hyein', t: "bring a pen. it's for art. it's legal. mostly" }
    ] },
    { id: 'epi-r-up-minji-lab', who: 'minji', hang: 'epi-r-minji-halfspeed', msgs: [
      { from: 'minji', t: "lab's open" },
      { from: 'minji', t: "second headset's yours if you want it" }
    ] },
    { id: 'epi-r-up-minji-endings', who: 'minji', hang: 'epi-r-minji-lookback', msgs: [
      { from: 'minji', t: "are you up. i have two endings and i can only keep one." }
    ] },
    { id: 'epi-r-up-minji-call', who: 'minji', hang: 'epi-r-nyc-minji-call', msgs: [
      { from: 'minji', t: "you up? calling you" },
      { from: 'minji', t: "answer it, my hands are full" }
    ] },
    { id: 'epi-r-up-chenle-graph', who: 'chenle', hang: 'epi-r-chenle-pointfour', msgs: [
      { from: 'chenle', t: "i made a graph" },
      { from: 'chenle', t: "i'm not sending it unless you ask" }
    ] },
    { id: 'epi-r-up-jaemin-quad', who: 'jaemin', hang: 'epi-r-jaemin-eleven', msgs: [
      { from: 'jaemin', t: "if you hear someone on the quad giving a speech it's not me" },
      { from: 'jaemin', t: "it's me" }
    ] },
    { id: 'epi-r-up-team-code', who: 'olivia', hang: 'epi-r-team-advance', thread: 'team', msgs: [
      { from: 'olivia', t: "WE ADVANCE" },
      { from: 'chenle', t: "WE ADVANCE" },
      { from: 'olivia', t: "also the lab door code still works. just saying" }
    ] },
    // ── general: any night they're up ──
    { id: 'epi-r-up-hc-dumb', who: 'haechan', msgs: [
      { from: 'haechan', t: "you up" },
      { from: 'haechan', t: "dumb question. you're always up" }
    ] },
    { id: 'epi-r-up-hanni-snore', who: 'hanni', msgs: [
      { from: 'hanni', t: "r u up" },
      { from: 'hanni', t: "hyein is snoring. i'm recording it. for evidence" }
    ] },
    { id: 'epi-r-up-minji-sleep', who: 'minji', msgs: [
      { from: 'minji', t: "are you still up" },
      { from: 'minji', t: "same. don't tell anyone" }
    ] },
    // ── the girls' chat ──
    { id: 'epi-r-up-girls-who', who: ['hanni', 'hyein'], thread: 'girls', msgs: [
      { from: 'hanni', t: "who's up" },
      { from: 'hyein', t: "me unfortunately" },
      { from: 'hanni', t: "solar's online. solar is up" },
      { from: 'hyein', t: "solar go to sleep. (don't)" }
    ] },
    { id: 'epi-r-up-girls-snack', who: ['hanni', 'hyein'], thread: 'girls', msgs: [
      { from: 'hyein', t: "kitchen run. who wants what" },
      { from: 'hanni', t: "everything" },
      { from: 'hyein', t: "solar's read it. solar wants everything too" }
    ] }
  );
})();
