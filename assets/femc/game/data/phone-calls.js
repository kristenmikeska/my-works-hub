/* Calls and messages from the phone's Contacts (2026-11-02, Kat-approved). Rules live in core.js "Phone reach" (phoneReach,
   phoneCall, phoneTopics, phoneMessage); the buttons are on ui.js's contact card. In short: a met link at rank 3+, not gone,
   reversed or away, once a game week each (Call, Message; the week starts on Sunday), no time spent, and +1 ♪ once a week per
   person whichever comes first (core.js bond: nothing at MAX or while rank 10+ waits). Calls aren't made in the late slot
   ("Asleep"). A Message waits while their thread has a text to answer.

   window.FEMC_GAME_PHONE = {
     generic: { calls, topics }      for anyone without their own entry; speaker 'them' = that person, {name} = their short name
     people: { <link id>: {
       noPhone: 'Short reason',      optional: never callable or textable (Koromaru); the card shows the reason greyed
       calls: [{ id ('pc-<id>-<n>', unique), min (rank, default 3), max, route ('romance' | 'friend'), place, time, music,
                 scene: [scene lines, scene.js format; choices carry no `notes`: the call's ♪ is the fixed bonus] }],
         every call that fits (min <= rank <= max, route) is in the pool; they play in turn (S.life.reach[id].calls counts them).
       topics: [{ id ('day' | 'plans' | 'own' …), label (Solar's button, <= 24 characters), v: [{ min, max, route, end, msgs }] }]
         exactly three; the LAST v entry that fits is used, so order them general → specific (rank bands 3 / 6 / 10, romance).
         msgs: [{ me: 'Solar' } | { them: 'their line' }], optional sticker: '<pack>-<n>' (them: their own pack; me: solar-*).
         end: 'invite': afterwards they may ask to hang out today, using the ordinary-day invite (core.js dayInviteSlot / their
         dayInvite.ask line, Yes / Can't today in the thread): only if they're free in a slot still ahead today and no other
         invite is open. Otherwise the exchange just ends.
     } }
   }
   People files: data/phone-calls-sees.js (S.E.E.S.), data/phone-calls-searchers.js (Haechan, Jungwon, Jihoon, Minji, Hanni,
   Hyein, Mark). To add someone: add('<id>', { calls, topics }) in either file (or a new one loaded after this). Check a file with
   the shape rules above (tests/femc_life.py --only phone checks every file). */
(() => {
  const P = (window.FEMC_GAME_PHONE ||= {});
  P.people ||= {};
  P.people.koromaru = { noPhone: 'He’s a dog' };
  P.generic = {
    calls: [
      { id: 'pc-generic-1', min: 3, scene: [
        { n: "Her phone lit up with {name}'s name. She let it ring once, because answering on the first ring looked like waiting, and then picked up." },
        { s: 'them', f: 'happy', t: "Hey. Is this a bad time? I didn't have a reason. I just thought I'd call." },
        { s: 'solar', f: 'neutral', t: "You don't need a reason." },
        { n: "They talked about nothing much: the weather, a teacher's tie, a shop that had changed its sign and was pretending it hadn't. Twice the conversation stopped, and twice neither of them hurried to fill it." },
        { s: 'them', f: 'neutral', t: "Okay. I'll let you go. This was nice." },
        { n: "It was. She put the phone face down on the desk and sat with that for a minute." }
      ] },
      { id: 'pc-generic-2', min: 3, scene: [
        { n: "{name} called while walking somewhere; she could hear traffic, and a crossing signal chirping, and their breath when they laughed." },
        { s: 'them', f: 'neutral', t: "I'm on my way home and the walk's boring. Talk to me till the next corner?" },
        { choose: [
          { t: "Which corner?", then: [ { s: 'them', f: 'happy', t: "I haven't decided. Depends how good you are." }, { n: "It turned out to be several corners." } ] },
          { t: "(Tell them about your day.)", then: [ { n: "She told them about her day, and they made the right noises in the right places, and somewhere in the middle she heard a door close and realised they'd got home and stayed on anyway." } ] }
        ] },
        { s: 'them', f: 'happy', t: "Okay. Home. Thanks for the company." }
      ] }
    ],
    topics: [
      { id: 'checkin', label: 'Checking in', v: [
        { min: 3, msgs: [ { me: 'hey. just checking in' }, { them: 'oh hi' }, { them: "i'm good. you?" }, { me: 'good. that’s all, carry on' }, { them: 'carrying on' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'hey. how are u actually' }, { them: 'actually? tired. but fine' }, { them: 'thanks for asking. people don’t' }, { me: 'i do' }, { them: 'yeah. you do' } ] }
      ] },
      { id: 'day', label: 'How was your day?', v: [
        { min: 3, msgs: [ { me: 'how was ur day' }, { them: 'long' }, { them: 'the good kind of long, mostly' }, { me: 'mostly?' }, { them: 'lunch was a tragedy. everything else fine' } ] }
      ] },
      { id: 'plans', label: 'Plans this weekend?', v: [
        { min: 3, msgs: [ { me: 'plans this weekend?' }, { them: 'sleep. then more sleep' }, { them: 'why, you have better ones?' }, { me: 'not yet' }, { them: 'tell me if you do' } ] },
        { min: 6, end: 'invite', msgs: [ { me: 'plans this weekend?' }, { them: 'nothing i can’t move' }, { me: 'interesting answer' }, { them: 'it was meant to be' } ] }
      ] }
    ]
  };
})();
