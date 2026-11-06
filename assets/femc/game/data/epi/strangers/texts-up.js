/* The strangers epilogue: "who's up tonight" texts (Nov 6 2026, Kat's idea 4; epilogue.js upText documents the rules).
   On a quiet night where the late screen lists someone (lateOpen), one of these arrives as it opens, from one of the people
   listed, so the phone says someone's awake before Sleep. One a night at most, each once, none on a story night.
   { id, who: bond id | [ids], hang: hangout id(s) (only when that's the hangout the person is offering tonight), thread,
     msgs, events, after, until }
   The phones in this world are listened to, so every text stays on the surface (the tide, the lamp, the thermos, the
   kitchen). Hinted texts say no more than their hangout's own hint. The girls' group lines go in the committee chat
   ('girls'; handles from phone.js); it exists from 2/22 (people.js), so those wait for epi-s-girls.
   Sunghoon and the house ('the last bus') have no text: no thread for the house, and Sunghoon has no Late Night. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.textsUp ||= []).push(
    // ── hinted: exactly the hangout on offer ──
    { id: 'epi-s-up-hc-islands', who: 'haechan', hang: 'epi-s-haechan-islands', msgs: [
      { from: 'haechan', t: "tides going out" },
      { from: 'haechan', t: "annex lights on. thats all" }
    ] },
    { id: 'epi-s-up-hc-odd', who: 'haechan', hang: 'epi-s-haechan-oddnight', msgs: [
      { from: 'haechan', t: "my night on the step" },
      { from: 'haechan', t: "mrs bang left the thermos. its too much tea for one person agasshi" }
    ] },
    { id: 'epi-s-up-hc-dawn', who: 'haechan', hang: 'epi-s-haechan-dawn', msgs: [
      { from: 'haechan', t: "night off" },
      { from: 'haechan', t: "lights out. thats not the same as asleep" }
    ] },
    { id: 'epi-s-up-hc-stair', who: 'haechan', hang: 'epi-s-haechan-stair', msgs: [
      { from: 'haechan', t: "u awake" },
      { from: 'haechan', t: "dont text back" }
    ] },
    { id: 'epi-s-up-jw-gate', who: 'jungwon', hang: 'epi-s-jungwon-gatelamp', msgs: [
      { from: 'jungwon', t: "Good evening. I have the gate tonight, until one." },
      { from: 'jungwon', t: "The lamp is on. I'm only mentioning it." }
    ] },
    { id: 'epi-s-up-jw-latch', who: 'jungwon', hang: 'epi-s-jungwon-latch', msgs: [
      { from: 'jungwon', t: "It's my night." },
      { from: 'jungwon', t: "Mrs. Bang says the kitchen door sticks in the cold. It doesn't tonight. I thought you should know, in case you hear it." }
    ] },
    { id: 'epi-s-up-yj-socks', who: 'yunjin', hang: 'epi-s-yunjin-socks', msgs: [
      { from: 'yunjin', t: "r u up" },
      { from: 'yunjin', t: "dont answer im already in the hall" },
      { from: 'yunjin', t: "rabbit socks. silent mode. ur welcome" }
    ] },
    { id: 'epi-s-up-appa', who: 'appa', hang: 'epi-s-appa-forecast', msgs: [
      { from: 'appa', t: "sol" },
      { from: 'appa', t: "you up" },
      { from: 'appa', t: "radio says calm seas" }
    ] },
    { id: 'epi-s-up-eomma', who: 'eomma', hang: 'epi-s-eomma-sunroom', msgs: [
      { from: 'eomma', t: "If you're going down for water, wear your slippers. The floors are cold at this hour." },
      { from: 'eomma', t: "I would know." }
    ] },
    { id: 'epi-s-up-jay', who: 'jay', hang: 'epi-s-jay-sugar', thread: 'niki', msgs: [
      { from: 'niki', t: "noona jay hyung says if ur up the yang kitchen is open" },
      { from: 'niki', t: "hes doing chemistry" },
      { from: 'niki', t: "he says the legit kind. he made me say that" }
    ] },
    { id: 'epi-s-up-niki', who: 'niki', hang: 'epi-s-niki-wall', msgs: [
      { from: 'niki', t: "dont look out ur window" },
      { from: 'niki', t: "ok look" },
      { from: 'niki', t: "dont tell minseok" }
    ] },
    { id: 'epi-s-up-mroh', who: 'mroh', hang: 'epi-s-mroh-engine', msgs: [
      { from: 'mroh', t: "Engine's on." },
      { from: 'mroh', t: "Not going anywhere." }
    ] },
    // ── general: any night they're up ──
    { id: 'epi-s-up-hc-awake', who: 'haechan', msgs: [
      { from: 'haechan', t: "awake?" },
      { from: 'haechan', t: "same" }
    ] },
    { id: 'epi-s-up-jw-asleep', who: 'jungwon', msgs: [
      { from: 'jungwon', t: "I hope you're asleep. If you aren't, I'm not either. That's all this message is." }
    ] },
    { id: 'epi-s-up-yj-boiler', who: 'yunjin', msgs: [
      { from: 'yunjin', t: "babe r u awake" },
      { from: 'yunjin', t: "the house is making noises" },
      { from: 'yunjin', t: "its the boiler. i KNOW its the boiler. talk to me anyway" }
    ] },
    // ── the committee chat (Yunjin up) ──
    { id: 'epi-s-up-gc-anyone', who: 'yunjin', thread: 'girls', events: ['epi-s-girls'], msgs: [
      { from: 'yunjin', t: "anyone up" },
      { from: 'sakura', t: "no" },
      { from: 'yunjin', t: "sakura ur literally typing" },
      { from: 'sakura', t: "i'm typing no" }
    ] },
    { id: 'epi-s-up-gc-closed', who: 'yunjin', thread: 'girls', events: ['epi-s-girls'], after: '2/23', msgs: [
      { from: 'chaewon', t: "it's past midnight. this chat is closed until nine" },
      { from: 'eunchae', t: "chaewon has her read receipts on. she's awake" },
      { from: 'yunjin', t: "wifey is online too i can SEE u" }
    ] },
    { id: 'epi-s-up-gc-moon', who: 'yunjin', thread: 'girls', events: ['epi-s-girls'], msgs: [
      { from: 'kazuha', t: "is everyone awake? the night is very loud tonight" },
      { from: 'eunchae', t: "kazuha it's one in the morning" },
      { from: 'kazuha', t: "yes. that's when it's loudest" }
    ] },
    { id: 'epi-s-up-gc-count', who: 'yunjin', thread: 'girls', events: ['epi-s-girls'], msgs: [
      { from: 'eunchae', t: "solar has been online for six minutes and typed nothing" },
      { from: 'eunchae', t: "a personal best" },
      { from: 'yunjin', t: "thats her love language leave her alone" }
    ] }
  );
})();
