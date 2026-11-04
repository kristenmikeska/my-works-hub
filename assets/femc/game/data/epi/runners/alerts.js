/* The Runners epilogue: SUnews / SUanon alerts (Nov 3 2026, Kat's queued idea 3). Lock-screen-style banners that drop in
   between scenes (never mid-dialogue): epilogue.js newsTick, on the morning / Go Out / late screens, at most one a day, each
   once (S.epi.alerts). Tap opens the phone. No flag, closeness or outcome is touched; they only read.
   { id, from: 'sunews' | 'suanon', after: [event ids, all seen], date: 'M/D' (not before), img: a post id (its thumbnail
     when art/posts/index.js lists it, else text only), t }
   Only events every route plays are used as gates, and each alert talks only about what has already happened. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  (R.alerts ||= []).push(
    { id: 'epi-r-al-back', from: 'sunews', after: ['epi-r-cover'], t: "welcome back to the alpha phi girls and their mystery tans. the emergency vacation is over. the questions are not." },
    { id: 'epi-r-al-regionals', from: 'sunews', after: ['epi-r-five-days'], date: '12/2', img: 'post-r-1-team-photo', t: "SU overwatch heads downtown saturday for regionals. the roster says no visitors at practice. the roster has never met this campus." },
    { id: 'epi-r-al-opener', from: 'sunews', after: ['epi-r-friday'], img: 'post-r-3-stairs-sign', t: "sigma chi's december opener: red cups, a wall that says welcome, and not one SU overwatch player in sight. regionals tomorrow. respect, i guess." },
    { id: 'epi-r-al-stream', from: 'suanon', after: ['epi-r-regionals-2'], t: "not to be dramatic but i watched regionals day two on a stream with forty viewers and screamed at my laptop the whole time. SU overwatch you owe me a voice." },
    { id: 'epi-r-al-round-two', from: 'sunews', after: ['epi-r-sigma'], date: '12/13', img: 'post-r-6-party-wide', t: "sigma chi friday, round two. a packed living room, a speaker that never connected, and nobody home before two. finals start monday. sure." },
    { id: 'epi-r-al-quiet', from: 'sunews', after: ['epi-r-sunday'], t: "finals start tomorrow. SUnews is going quiet for the week out of respect for your GPA. (we're not. but it was a nice thought.)" },
    { id: 'epi-r-al-upward', from: 'suanon', after: ['epi-r-upward'], img: 'post-r-9-quad-snow', t: "six hours later and nobody can explain the snow. facilities says 'atmospheric event.' my meteorology major roommate has stopped answering texts." },
    { id: 'epi-r-al-library', from: 'sunews', after: ['epi-r-kitchen'], t: "finals week check-in: bird library at capacity, marshall street out of coffee, and someone at sigma chi cooked breakfast for a crowd. growth." },
    { id: 'epi-r-al-comments', from: 'sunews', after: ['epi-r-first-snow'], img: 'post-r-10-holiday-toast', t: "our holiday post is six hundred comments deep and every one of them asks who disappeared. we'll never tell. (we don't know.)" }
  );
})();
