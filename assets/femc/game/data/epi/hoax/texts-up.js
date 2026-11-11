/* The HOAX epilogue: "who's up tonight" texts (Nov 6 2026, Kat's idea 4; epilogue.js upText documents the rules).
   On a quiet night where the late screen lists someone (lateOpen), one of these arrives as it opens, from one of the people
   listed (or the club / RETREAT FACTS chat they're in), so the phone says someone's awake before Sleep. One a night at most,
   each once, none on a story night (so 1/3, 1/7, 1/10, 1/11 and the big evenings never get one).
   { id, who: bond id | [ids], hang: hangout id(s) (only when that's the hangout the person is offering tonight), thread,
     msgs, events, after, until }
   Group chats carry their handles in the line, as people.js does (this world has no texts.handles): club = the old crew
   (jihoney, cherryblossoms, junkyute, asanoonecares, geniusuk, jaehyukkie), retreat = the council (heeheeseung, injangwon,
   jakeys, rikiniki, sunooshine). Hinted texts say no more than their hangout's own hint (Hyunsuk's are the hint's own words).
   Nothing of the temple, the motion or the year away; nobody's route is named. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const CLUB = ['jihoon', 'cherry', 'junkyu', 'hyunsuk', 'asahi', 'jaehyuk'], RETREAT = ['council', 'sunoo', 'heeseung', 'jake', 'jay', 'niki', 'sunghoon', 'jungwon'];
  (R.textsUp ||= []).push(
    // ── hinted: exactly the hangout on offer ──
    { id: 'epi-h-up-jw-1159', who: 'jungwon', hang: 'epi-h-jungwon-late-1', msgs: [
      { from: 'jungwon', t: "are you awake." },
      { from: 'jungwon', t: "don't answer. i'll call." }
    ] },
    { id: 'epi-h-up-jh-step', who: 'jihoon', hang: 'epi-h-jihoon-late-1', msgs: [
      { from: 'jihoon', t: 'are u awake' },
      { from: 'jihoon', t: 'asking for nana. he knows something' }
    ] },
    { id: 'epi-h-up-jh-swings', who: 'jihoon', hang: 'epi-h-jihoon-5', msgs: [
      { from: 'jihoon', t: 'the swings are free if anyone is looking for me' },
      { from: 'jihoon', t: 'nobody is. just information' }
    ] },
    { id: 'epi-h-up-suk-way', who: 'hyunsuk', hang: 'epi-h-hyunsuk-long-way', msgs: [
      { from: 'hyunsuk', t: "u up" },
      { from: 'hyunsuk', t: "im outside" }
    ] },
    { id: 'epi-h-up-sunoo', who: 'sunoo', hang: 'epi-h-sunoo-closing', msgs: [
      { from: 'sunoo', t: "are u awake!!!" },
      { from: 'sunoo', t: "halmeoni went to bed and i'm still mopping" },
      { from: 'sunoo', t: "i saved u something. don't tell her it was the last one" }
    ] },
    { id: 'epi-h-up-kyu', who: 'junkyu', hang: 'epi-h-junkyu-late-1', msgs: [
      { from: 'junkyu', t: "solar r u awake" },
      { from: 'junkyu', t: "i can't sleep :(" },
      { from: 'junkyu', t: "can i call. i'll be quiet. i won't be quiet" }
    ] },
    { id: 'epi-h-up-cherry', who: 'cherry', hang: 'epi-h-cherry-late-2', msgs: [
      { from: 'cherry', t: "unlock ur door" },
      { from: 'cherry', t: "i have face masks and opinions and i'm already on your street" }
    ] },
    { id: 'epi-h-up-council', who: 'council', hang: 'epi-h-council-call', thread: 'retreat', msgs: [
      { from: 'heeseung', t: 'heeheeseung: group call at midnight. attendance is mandatory.' },
      { from: 'jake', t: 'jakeys: are pajamas mandatory' },
      { from: 'heeseung', t: 'heeheeseung: pajamas are encouraged' }
    ] },
    { id: 'epi-h-up-eunchae', who: 'eunchae', hang: 'epi-h-eunchae-1', msgs: [
      { from: 'eunchae', t: "hi. not for the stream" },
      { from: 'eunchae', t: "are you up?" }
    ] },
    { id: 'epi-h-up-asahi', who: 'asahi', hang: 'epi-h-asahi-312', thread: 'club', msgs: [
      { from: 'asahi', t: 'asanoonecares: anyone awake' },
      { from: 'asahi', t: 'asanoonecares: no one cares. ok' }
    ] },
    { id: 'epi-h-up-jaehyuk', who: 'jaehyuk', hang: 'epi-h-jaehyuk-office', msgs: [
      { from: 'jaehyuk', t: "you up? i wrote the calculus paper out from memory." },
      { from: 'jaehyuk', t: "office hours, if you want them." }
    ] },
    // ── general: any night they're up ──
    { id: 'epi-h-up-jw-sleep', who: 'jungwon', msgs: [
      { from: 'jungwon', t: "it's late." },
      { from: 'jungwon', t: "go to sleep, sol." },
      { from: 'jungwon', t: "...are you asleep." }
    ] },
    { id: 'epi-h-up-jw-maeumi', who: 'jungwon', msgs: [
      { from: 'jungwon', t: "maeumi won't settle." },
      { from: 'jungwon', t: "i think he can hear nana from here." }
    ] },
    { id: 'epi-h-up-ch-nails', who: 'cherry', msgs: [
      { from: 'cherry', t: "r u up" },
      { from: 'cherry', t: "i'm doing my nails and i need a witness" }
    ] },
    { id: 'epi-h-up-jh-hoon', who: 'jihoon', msgs: [
      { from: 'jihoon', t: 'The Almighty Hoon Cannot Sleep' },
      { from: 'jihoon', t: 'this is ur problem now' }
    ] },
    // ── the group chats ──
    { id: 'epi-h-up-club-who', who: CLUB, thread: 'club', events: ['epi-h-home'], msgs: [
      { from: 'junkyu', t: "junkyute: who's awake!!!" },
      { from: 'asahi', t: 'asanoonecares: no one' },
      { from: 'jaehyuk', t: 'jaehyukkie: go to sleep, kyu' }
    ] },
    { id: 'epi-h-up-club-roll', who: CLUB, thread: 'club', events: ['epi-h-home'], msgs: [
      { from: 'jihoon', t: 'jihoney: roll call' },
      { from: 'cherry', t: 'cherryblossoms: here unfortunately' },
      { from: 'hyunsuk', t: 'geniusuk: here' },
      { from: 'jihoon', t: 'jihoney: solar is online and silent. Noted' }
    ] },
    { id: 'epi-h-up-ret-sleep', who: RETREAT, thread: 'retreat', events: ['epi-h-emergency'], msgs: [
      { from: 'sunoo', t: 'sunooshine: is anyone up' },
      { from: 'niki', t: 'rikiniki: always' },
      { from: 'heeseung', t: 'heeheeseung: go to sleep. all of you. this means you niki' }
    ] }
  );
})();
