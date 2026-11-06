/* The HOAX epilogue: Hanlim Forum alerts (Nov 6 2026, Kat's idea 3 from GOOD-MORNING-NOV-6). The same lock-screen banner as
   Runners' SUnews alerts (epilogue.js alertDue / newsTick, ui.js newsAlert): it drops in between scenes (never mid-dialogue)
   on the morning / Go Out / late screens, at most one a day, each once (S.epi.alerts). Tap opens the phone. No flag, closeness
   or outcome is touched; they only read.
   { id, from: 'forum' (ui.js names it from texts.threads: "Hanlim Forum"; no picture of its own, so the "?" mark),
     after: [event ids, all seen], date: 'M/D' (not before), t }
   Every gate is an event every route plays (story-w1/w2/w3/days, none of the route events), and each alert is a NEW thread
   about something public that has already happened. None repeats a forum text already in the phone (people.js: the temple
   replies 12/26, the motion 1/2, part 5 trending, the hearing clip 1/11), and nothing after the hearing is used.
   Inventions: the thread titles and the posters' handles (anon, a mod); the forum's sections General, Gossip, Student
   Government and Hanlim Unfiltered (the last is Eunchae's stream board). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  (R.alerts ||= []).push(
    { id: 'epi-h-al-sighting', from: 'forum', after: ['epi-h-emergency'], t: "new thread in General: COUNCIL SIGHTING AT YEOBO'S. all eight. alive. ordering congee like nothing happened. part 4 is still open, take your theories there" },
    { id: 'epi-h-al-noraebang', from: 'forum', after: ['epi-h-karaoke'], t: "new thread in Gossip: the vp is back and she was at the noraebang on the corner last night. witnesses say room six. witnesses would like to know where she's been" },
    { id: 'epi-h-al-lights', from: 'forum', after: ['epi-h-christmas'], date: '12/26', t: "new thread in General: rate the christmas lights downtown. the town never takes them down so this thread is technically permanent. the bank angel is an 8, don't argue" },
    { id: 'epi-h-al-party', from: 'forum', after: ['epi-h-party'], date: '12/30', t: "new thread in Gossip: friday's party megathread. post your blurry photos. the swim team's nana channel is now public, you're welcome" },
    { id: 'epi-h-al-stream', from: 'forum', after: ['epi-h-livestream'], t: "new thread in Hanlim Unfiltered: NYE stream rewatch. timestamps in the comments. everyone stop pausing it at 214, the mods are begging you" },
    { id: 'epi-h-al-who', from: 'forum', after: ['epi-h-motion'], date: '1/3', t: "new thread in Student Government: who is hanlim_accountability. theories only. no doxxing. i'm serious this time" },
    { id: 'epi-h-al-snow', from: 'forum', after: ['epi-h-snowed-in'], t: "new thread in General: SNOW DAY. post your street. also someone wrote JAEHYUK WAS WRONG on the yeobo's specials board and i need context immediately" },
    { id: 'epi-h-al-clocks', from: 'forum', after: ['epi-h-clocks'], date: '1/6', t: "new thread in General: every clock in yeobo's says 12:00?? all of them. since last night. sunoo's grandmother says leave them alone. we are leaving them alone" },
    { id: 'epi-h-al-rules', from: 'forum', after: ['epi-h-prom'], t: "new thread in Student Government: thursday's hearing rules are up outside the gym. one speaker a side. no phones raised. eunchae streams from the back row. bring snacks? (no.)" }
  );
})();
