/* The HOAX epilogue (12/21/2023-1/12/2024): more time with the crew and the council. HOAX expansion pass (Nov 5-6 2026),
   writer 3. Data only; loaded with the world (epilogue.js WORLDS.hoax.files). Bonds go through add() so they merge with
   people.js and people-crew.js in any load order (each push lands at the end of that bond's list; none of these windows and
   slots overlap an existing hangout of the same bond, so the order doesn't change what's offered). Role 'friend' for all.

   Hangouts (the first unseen hangout whose gates fit is the one offered; late ones only on world.js lateOpen nights):
     hyunsuk  epi-h-hyunsuk-long-way  'the long way'    12/25-12/26 late, after epi-h-christmas
              "Hanlim · Hyunsuk's Car" (new place). "u up / im outside": he drives her nowhere with the heater on high; Cherry
              didn't come by his mom's this Christmas; "ditching us for those preppy losers"; Jihoon's house with every light on
              (the year never said); he drops her off and doesn't come in; Nana in her lap on the step. Branches: ifBefore 12/26
              (Christmas night: snow stopped an hour ago / the night after: clear, banked snow), ifEpiRoute (what he heard
              about Christmas at the Kims').
     sunoo    epi-h-sunoo-closing     'closing'         12/26-12/28 late, after epi-h-emergency
              "Hanlim · Yeobo's · After Closing". She walks Nana at eleven, Yeobo's lights are on: Sunoo mopping, chairs up,
              the croissant under the napkin, his grandmother asleep upstairs (not quite), the four clocks on the back wall all
              a little wrong and all going (they stop on 1/5, story-w3). He can't ask what he wants to ask. Reads
              epi-h-temple-goat (people-crew.js sunoo-1).
     asahi    epi-h-asahi-312         '3:12 a.m.'       1/3-1/4 late, after epi-h-motion
              'Hanlim · Home · Her Room'. The club chat at 3 a.m. with only the two of them in it, then a call "by accident" he
              stays on: Kazuha's forty-one-minute voice memo, the séance line he regrets, the president's periods. ifEvent
              epi-h-snowed-in (the 1/4 night: Jaehyuk's typo, the mirror).
     jaehyuk  epi-h-jaehyuk-office    'office hours'    1/8 late, after epi-h-makeup
              'Hanlim · Home · Her Room'. The calculus paper question by question (question one is the ladder from his sheet:
              she wrote feet), then the snow going up during the paper (ifGlitch 3); she almost tells him about her hand.
              Reads epi-h-jaehyuk-told (people-crew.js jaehyuk-2), ifEpiRoute jihoon (the eraser).
     council  epi-h-council-call      'group call'      12/30-1/1 late, after epi-h-party
              'Hanlim · Home · Her Room'. Heeseung's midnight call on RETREAT FACTS, all seven and her; New Year's resolutions;
              Jungwon whispering from under his duvet. ifEvent epi-h-new-year (the 1/1 night) and epi-h-livestream (the clip,
              the temple bus); ifEpiRoute + epi-h-party-scuffle (the party, by route).
              epi-h-council-tables    'two tables'      12/30-1/5 after / evening, after epi-h-party
              "Hanlim · Yeobo's". The old table at the window, the council at the big table at the back, a saved seat at each;
              she has to sit somewhere; Halmeoni referees with food. Written to read before or after the 1/4 snow day (ifEvent
              epi-h-snowed-in: the specials board) and the 1/2 motion (ifEvent epi-h-motion). Reads epi-h-suk-seat,
              epi-h-party-scuffle. One lie that holds the cover (strain).

   Flags set: epi-h-suk-seat (hyunsuk-long-way: she asks Hyunsuk to save her a seat at the window; read by council-tables).
     epi-h-tables-crew / epi-h-tables-council / epi-h-tables-pushed (council-tables: where she sat; nothing reads them yet,
     free for later files). epi-h-jaehyuk-told (an existing local flag from people-crew.js) is also set in jaehyuk-office
     when she tells him what her hand did.
   Flags read: epi-h-suk-seat, epi-h-temple-goat, epi-h-jaehyuk-told, epi-h-party-scuffle.
   Events read (gates and ifEvent): epi-h-christmas, -emergency, -motion, -makeup, -party, -new-year, -livestream, -snowed-in.
   Conditions: ifEpiRoute (hyunsuk-long-way, jaehyuk-office, council-call), ifGlitch 3 (jaehyuk-office: the snow going up
     during the paper, and once past her window), ifBefore '12/26' (hyunsuk-long-way, the weather; core.js branch).
   Glitches: no ids. { glitch: { strain: 1 } } once (council-tables, the first-year's "were you really at a temple").
   Nana: by the door and in her lap on the step (hyunsuk), on the late walk and by Yeobo's radiator (sunoo), across her feet
     snoring down the phone (asahi), asleep on her calculus notes (jaehyuk), on the call and lifting his head at Jungwon's
     voice (council-call). Not at Yeobo's in the afternoon (council-tables); Jake asks after him.

   Inventions for Kat to confirm
     - Hyunsuk's car: a small silver hatchback his mom stopped driving, a wiper stuck halfway up, a pine air freshener long
       dead, the seat pulled all the way forward (the heater only on high is phone.js's). Cherry stops by Hyunsuk's mom's for
       ten minutes every Christmas after her grandmother's lunch, since they were six; this year she texted his mom instead.
       Jihoon posted Jungwon's lined-up shoes in the club chat ("The Enemy Is Among Us"); Niki posted the council falling down
       her step (council route). Jihoon's house has had every light on since they got back (Hyunsuk drives past; the last
       time it was like that is never said). Over there Hyunsuk rode the monorail to the end of the line and back.
     - Yeobo's after closing: four clocks on the back wall, each a few minutes off on purpose ("a second opinion"); Halmeoni puts
       a fresh croissant under the same sticky note every morning and feeds yesterday's to the pigeons; she sleeps upstairs
       "like a bird" and hears everything. Sunoo saw Solar laugh in the dorm over there (no detail).
     - Asahi: Kazuha's voice memo (41 minutes, in Japanese; the ghost "was polite"; she wants another séance; she asked if
       Solar sleeps); she wrote his "it's not lonely, it's got us now" in her notebook; at the guesthouse a man snored through
       his wall every night and he misses it. Solar understands a few words of the memo and tells nobody (asahi-2 still has
       Asahi surprised she knows tadaima). His sign-off "bracket, I care, close bracket".
     - Jaehyuk sat the calculus paper in the library annex with the overflow (Jungwon down the hall with the AP kids, Solar in
       3-4 as story-w3 has it); question one was the ladder (story-w3), question five a box (she drew Nana in it); he timed
       the upward snow; English is Tuesday's paper; his quiet doc gets its first question mark.
     - The council call: Niki's alt ufo_hanlim (people-crew.js) on Instagram; Heeseung "secretary of resolutions"; Jungwon's
       resolution is to stop lying to his mother "starting in February"; Jay asks outright whether her mom believes the temple
       (she says no); Heeseung's own resolution ends "nobody going anywhere"; the call ends when someone says Jungwon's name
       outside his door.
     - Two tables: a laminated RESERVED: VICE PRESIDENT sign; Halmeoni's two identical plates (one huge plate on the seam if the
       tables are pushed together; the window table is two centimetres lower); a first-year at the counter asks about the
       temple. Cherry, Sunghoon, Jungwon and Jihoon are all elsewhere; nobody says where Cherry and Sunghoon are.
   Canon held: Jungwon is her boyfriend on every route; Haechan is never named or reached for here; nothing of sophomore year
     filled in (Hyunsuk only knows when the lights were last like that); nobody mentions Jihoon's parents; drugs not named
     on the page; the video and Danielle never come up; Cherry and Sunghoon stay "soon"; Hyunsuk is hurt over Cherry and the
     tables' rift is real from both sides; nobody calls an adult; kisses and holding at most (none here). */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).hoax ||= {});
  const B = (R.bonds ||= {});
  const add = (id, role, hs) => { const b = (B[id] ||= { id, role, hangouts: [] }); (b.hangouts ||= []).push(...hs); };
  const LATE = ['late'];
  const CLUB = "rip solar kim (she's fine probably)";
  const RETREAT = 'RETREAT FACTS (do not leave)';

  /* ── Hyunsuk ── */
  add('hyunsuk', 'friend', [
    { id: 'epi-h-hyunsuk-long-way', title: 'the long way', hint: "Hyunsuk has texted \"u up\" and then \"im outside\". His car is idling at the end of your drive with the heater roaring.",
      after: '12/25', until: '12/26', slots: LATE, events: ['epi-h-christmas'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Hyunsuk's Car", time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { phone: [
        { from: 'hyunsuk', t: "u up" },
        { from: 'hyunsuk', t: "im outside" }
      ], contact: 'geniusuk' },
      { ifBefore: '12/26', then: [
        { n: "Twenty to midnight on Christmas, her parents asleep in front of the movie they fell asleep in every year, and the snow had stopped an hour ago without telling anyone, the street white and new and orange under the lamps." }
      ], else: [
        { n: "Twenty to midnight the night after Christmas, the hard kind of clear that only came after a lot of snow, the sky scraped black and full of stars and the old snow shoved up grey along the kerbs." }
      ] },
      { n: "Nana was already sitting in the front door when she came down in her socks, facing her, not the door, like a bouncer, and he looked at her coat and then at her with the deep personal suspicion of a dog who had watched someone put a coat on once and not come back for a while." },
      { s: 'solar', f: 'happy', t: "It's just Hyunsuk. You love Hyunsuk." },
      { n: "Nana did not love Hyunsuk, who had sat on him by accident when they were thirteen. He let her past anyway, and went and stood on the back of the sofa where he wasn't allowed, a big white shape in the window, to watch her go." },
      { n: "The car was a small silver hatchback his mom had stopped driving, one wiper stuck halfway up the windshield like it had a question, and when she opened the door the heat came out at her like a sauna, the fan going so hard the dashboard rattled." },
      { s: 'hyunsuk', f: 'neutral', t: "Get in, man, you're letting the heat out." },
      { s: 'solar', f: 'surprised', t: "Why is it so *loud*?" },
      { s: 'hyunsuk', f: 'neutral', t: "It only does high. It's high or nothing. Nothing's worse." },
      { n: "He had a reindeer on his sweater that his mother had very obviously put on him and the seat pulled all the way forward, which you were not allowed to mention, and he pulled out without asking where she wanted to go. That was how she knew he didn't have anywhere." },
      { s: 'solar', f: 'neutral', t: "Where are we going?" },
      { s: 'hyunsuk', f: 'neutral', t: "Nowhere. The long way." },
      { n: "Past the dark school, past Yeobo's with its sign off, past the convenience store and the boy behind its counter asleep sitting up. The heater roared so loud that everything came out a little shouted, which made it easier, somehow, like nobody could be blamed for the volume." },
      { s: 'hyunsuk', f: 'neutral', t: "Hoon posted your hallway in the chat. The shoes." },
      { s: 'solar', f: 'flustered', t: "Oh my God." },
      { s: 'hyunsuk', f: 'happy', t: "Lined up. Like a hotel. Caption said *The Enemy Is Among Us.*" },
      { ifEpiRoute: 'jungwon', then: [
        { s: 'hyunsuk', f: 'neutral', t: "Also heard he bowed to your dad. Through a window." },
        { s: 'solar', f: 'flustered', t: "...He bowed to my dad through a window." },
        { s: 'hyunsuk', f: 'neutral', t: "Man." }
      ], else: [
        { ifEpiRoute: 'jihoon', then: [
          { s: 'hyunsuk', f: 'neutral', t: "Hoon says you did the step. With the cold cocoa." },
          { s: 'solar', f: 'neutral', t: "We did the step." },
          { n: "A whole block later, quieter, so the heater nearly took it," },
          { s: 'hyunsuk', f: 'sad', t: "Good. He needed the step." }
        ], else: [
          { s: 'hyunsuk', f: 'happy', t: "And Niki posted the whole council falling down your steps. Jay screams at second nine. I've watched it fifty times." }
        ] }
      ] },
      { n: "He stopped for a red light on an empty road and sat at it like there was traffic." },
      { s: 'hyunsuk', f: 'neutral', t: "My mom asked where Cherry was." },
      { s: 'hyunsuk', f: 'neutral', t: "She comes by after her grandma's. Every Christmas since we were six. Eats one rice cake, says it's too sweet, eats another, leaves. Like a tax." },
      { s: 'solar', f: 'sad', t: "She didn't come?" },
      { s: 'hyunsuk', f: 'neutral', t: "She texted my mom. *Merry Christmas, Auntie,* with a little tree. My mom showed me. Like it was a nice thing." },
      { n: "The light went green. He didn't go. The stuck wiper sat up there with its hand raised and nobody called on it." },
      { s: 'hyunsuk', f: 'serious', t: "Bet the prince sent her a whole paragraph. Signed it. Dash s." },
      { s: 'solar', f: 'sad', t: "Suk." },
      { s: 'hyunsuk', f: 'serious', t: "It's not even him. It's you both. One day we're the table, and the next you're over there with the laminator and the guy who irons his socks—" },
      { s: 'solar', f: 'happy', t: "He doesn't iron his socks." },
      { s: 'hyunsuk', f: 'serious', t: "He looks like he irons his socks, Sol. And we're just at the window. Ditching us for those preppy losers. That's what it looked like. From the window." },
      { n: "He'd tried to make the end of it a joke on the way out, and it hadn't come. It just sat there in the roar of the heater with nothing round it to make it smaller." },
      { choose: [
        { t: "\"I'm in your car, Suk.\"", stat: { kindness: 1 }, flag: 'epi-h-suk-seat', then: [
          { s: 'hyunsuk', f: 'neutral', t: "You sat at their table for a month." },
          { s: 'solar', f: 'neutral', t: "And now I'm in your car. Save me a seat at Yeobo's. The window. I'll sit in it." },
          { s: 'hyunsuk', f: 'neutral', t: "I'm not saving you anything." },
          { n: "Two streets on, without looking at her," },
          { s: 'hyunsuk', f: 'neutral', t: "...I'll put my coat on it." }
        ] },
        { t: "\"You stopped answering too.\"", stat: { courage: 1 }, then: [
          { n: "He turned the heater dial all the way down, hard, like that would end the conversation. The fan roared on exactly as before." },
          { s: 'solar', f: 'neutral', t: "It only does high." },
          { s: 'hyunsuk', f: 'sad', t: "I know it only does high." },
          { n: "He'd stopped answering anyone who'd crossed the cafeteria, a thumbs up here, never a word, and she watched him know it at a green light on an empty road." },
          { s: 'hyunsuk', f: 'sad', t: "Yeah. Okay. I know." }
        ] }
      ] },
      { n: "He took the turn onto Jihoon's street without saying he was going to. The big house at the end of it had every window lit, upstairs and down, at midnight, like it was expecting a lot of people." },
      { s: 'hyunsuk', f: 'serious', t: "Been like that since we got back. Every night." },
      { s: 'hyunsuk', f: 'serious', t: "Last time he did that was—" },
      { s: 'solar', f: 'serious', t: "I know when." },
      { s: 'hyunsuk', f: 'sad', t: "Yeah." },
      { n: "He slowed passing it, and didn't stop, and neither of them said the year out loud, because saying it wouldn't have put a single one of those lights out." },
      { s: 'hyunsuk', f: 'neutral', t: "Over there I used to ride the monorail to the end of the line and back when I couldn't sleep. I don't miss it. I miss the monorail. That's all I miss." },
            { s: 'hyunsuk', f: 'neutral', t: "Not coming in. Your mom'll feed me and then I'll have to talk about the temple." },
      { s: 'solar', f: 'happy', t: "You weren't even at the temple." },
      { s: 'hyunsuk', f: 'happy', t: "Nobody was at the temple, Sol. Lock the door." },
      { n: "She sat down on the front step instead, because the car wouldn't move until she was inside, and she wanted one more minute of being waited for. Behind her the door she never latched gave a click, and Nana shouldered it open and climbed into her lap, all sixty pounds of him, which hadn't fit since he was four months old and didn't care." },
      { n: "Hyunsuk flashed the headlights twice and drove off, the wiper still up like a question, and turned left at the end, which was the long way home. She sat there with the dog on her knees until the roar of his heater was gone, and there was only the cold and a very large, very warm weight that wasn't going anywhere, which was the whole point of him." }
    ] }
  ]);

  /* ── Sunoo ── */
  add('sunoo', 'friend', [
    { id: 'epi-h-sunoo-closing', title: 'closing', hint: "Yeobo's lights are on long after closing. Sunoo is mopping, and there's something under a napkin on the counter with your name on it.",
      after: '12/26', until: '12/28', slots: LATE, events: ['epi-h-emergency'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's · After Closing", time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "She couldn't sleep, and Nana was sitting by the front door with his leash in his mouth like a butler holding a coat, so at eleven she took him out. The street was clear and silent, the old snow banked grey and frozen along the kerbs, and the moon was nearly full, or just past it, and she didn't look at it for long." },
      { n: "Yeobo's lights were on. Every chair was up on the tables with its legs in the air like something that had died happy, and in the middle of the floor, in an apron and one rubber glove, Kim Sunoo was mopping, slowly, with his headphones round his neck and his mouth moving along to something." },
      { n: "He saw her through the glass and dropped the mop. It hit the floor like a gunshot. He grabbed it, looked straight up at the ceiling, waited, and then came and unlocked the door with the face of a boy defusing a bomb." },
      { s: 'sunoo', f: 'surprised', t: "Hi! Hi. Shh. Halmeoni's asleep upstairs. She sleeps like a bird. One floorboard and she's down here with a ladle." },
      { s: 'solar', f: 'happy', t: "Is he allowed in?" },
      { s: 'sunoo', f: 'happy', t: "No. Come in." },
      { n: "Nana would not cross the wet floor. He stood on the mat inside the door, considered the shining tiles as if they were a lake, and then went all the way round the edge of the room on the dry strip by the wall, very dignified, and lay down against the radiator with a groan like a man settling into a bath." },
      { n: "On the counter, next to the register, there was a plate with a napkin over it, and on the napkin a yellow sticky note in his grandmother's handwriting: *for the vice president*." },
      { s: 'solar', f: 'surprised', t: "She's kept it since Christmas Eve?" },
      { s: 'sunoo', f: 'happy', t: "No, it's a new one every morning. She gives yesterday's to the pigeons and puts a new one under. Same note. The note's been through a lot." },
      { n: "On the back wall the four clocks went on ticking. A black cat with a swinging tail, a plain white one like a classroom's, a wooden one with a little roof, and a gold one that had been somebody's wedding present, every one of them a few minutes off from the others, because Sunoo's grandmother liked it that way. *So you always have a second opinion,* she said, whenever anyone offered to fix them." },
      { s: 'sunoo', f: 'neutral', t: "Can I ask you something?" },
      { s: 'solar', f: 'neutral', t: "Yeah." },
      { s: 'sunoo', f: 'flustered', t: "...Do you want milk with it?" },
      { n: "She ate the croissant at the counter, and then because there was nothing else to do with her hands she started taking the last chairs down off the end table and putting them up on the next one, the wrong way, and he watched her do three before he came and showed her the right way, legs out, seat on the table, so the mop could go under." },
      { ifFlag: 'epi-h-temple-goat', then: [
        { s: 'sunoo', f: 'sad', t: "Halmeoni asked about the goat again. At breakfast. She asked what its name was." },
        { s: 'solar', f: 'happy', t: "What did you say?" },
        { s: 'sunoo', f: 'flustered', t: "I said Gyuri. That's my cousin's name. She's going to meet my cousin at Lunar New Year, Sol. She's going to *ask*." }
      ] },
      { s: 'sunoo', f: 'neutral', t: "Sol, can I ask—" },
      { s: 'sunoo', f: 'flustered', t: "Does Nana eat croissant?" },
      { s: 'solar', f: 'happy', t: "No." },
      { n: "By the radiator, at the word, one white ear came up." },
      { s: 'sunoo', f: 'happy', t: "He says yes." },
      { n: "He mopped the tile with the crack in it three times, and she could see him working up to it, the way he'd worked up to the croissant promposal and the equation hunt and every brave thing he'd ever done, quietly, behind a counter, where no one would look at him while he did it." },
      { s: 'sunoo', f: 'sad', t: "Over there. At the dorm, with all of them, at that big table." },
      { s: 'sunoo', f: 'sad', t: "You laughed different. Bigger. Like you didn't check first." },
      { s: 'sunoo', f: 'sad', t: "Were you— If you could— Would you ever—" },
      { n: "He stopped. He wrung the mop out into the bucket very hard, with both hands, like the mop had said it and not him." },
      { s: 'sunoo', f: 'flustered', t: "...Will you still come on Saturdays?" },
      { n: "That wasn't the question. They both heard that it wasn't. He looked at the crack in the tile like it might open up and take him, and the four clocks ticked in their four slightly different opinions on the wall." },
      { choose: [
        { t: "\"Every Saturday, Sunoo.\"", stat: { kindness: 1 }, then: [
          { n: "His whole face came undone with relief, all at once, the way his face did everything, and he laughed, too loud, and slapped his own hand over his mouth and looked at the ceiling." },
          { s: 'sunoo', f: 'happy', t: "Okay. Okay! Good. Halmeoni'll put two under the napkin." },
          { n: "She hadn't answered the other one. He knew she hadn't. He let her not, and went back to the floor, humming, and mopped the cracked tile one last time, gently, like he was tucking it in." }
        ] },
        { t: "(Answer the one he didn't ask.)", stat: { courage: 1 }, then: [
          { s: 'solar', f: 'sad', t: "I was happy there. I'm happy here. I don't know how you're supposed to be both." },
          { n: "He leaned on the mop. His eyes had gone wet the way Sunoo's eyes went wet about everything, and he wiped them with the back of the rubber glove, which was a mistake." },
          { s: 'sunoo', f: 'sad', t: "Halmeoni says you can have two homes. As long as you're rude to both of them equally." },
          { s: 'solar', f: 'happy', t: "That's not a real saying." },
          { s: 'sunoo', f: 'happy', t: "It's real in this house." }
        ] }
      ] },
      { n: "Upstairs, a floorboard creaked. They both froze, Sunoo with the mop in the air, Solar with a chair halfway to a table, Nana with his head up off the radiator. Then a voice came down the back stairs, not loud, not sleepy either." },
      { s: 'halmeoni', f: 'neutral', t: "Sunoo-ya. Give her the other croissant and send her home. And the dog." },
      { n: "Sunoo closed his eyes. *She's been awake the whole time,* he mouthed, and wrapped the second croissant in a paper bag, the top folded twice, and walked them to the door. The bell gave its little cough. Nana went out round the dry edge of the room, the way he'd come in." },
      { n: "From the end of the street she looked back. Sunoo was turning the lights off one by one, the back ones first, and through the dark glass the four clocks on the wall were still going, each of them a little wrong in its own direction, each of them still sure." }
    ] }
  ]);

  /* ── Asahi ── */
  add('asahi', 'friend', [
    { id: 'epi-h-asahi-312', title: '3:12 a.m.', hint: "It's 3:12 in the morning and the club chat says somebody is typing.",
      after: '1/3', until: '1/4', slots: LATE, events: ['epi-h-motion'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "3:12 a.m. Nana was across her feet like a fallen snowbank, snoring the deep wet snore of a dog with nothing on his conscience, and she was awake, the way she was awake most nights now, lying on her back with the ceiling and the radiator ticking and the window gone blue with snow." },
      { ifEvent: 'epi-h-snowed-in', then: [
        { n: "It had been snowing since eleven that morning and hadn't stopped for anything, not the plough, not the dark. She'd checked the hall mirror twice when she came in from Yeobo's, and once more since, at two, with the lamp on, standing very still, making sure the coats behind her stayed behind her." }
      ], else: [
        { n: "It was snowing again, the soft steady kind that made no noise at all, and the motion had a number of signatures under it she'd stopped checking at one a.m., because the number only went one way." }
      ] },
      { n: "Her phone lit up on the pillow." },
      { phone: [
        { from: 'asahi', t: "asanoonecares: is anyone awake" },
        { from: 'asahi', t: "asanoonecares: not asking for a reason. no one cares" },
        { from: 'solar', t: "solarsystem: me" },
        { from: 'asahi', t: "asanoonecares: why" },
        { from: 'solar', t: "solarsystem: why are U" },
        { from: 'asahi', t: "asanoonecares: kazuha sent me a voice memo. its 41 minutes. in japanese" },
        { from: 'asahi', t: "asanoonecares: im on minute 33" },
        { from: 'solar', t: "solarsystem: whats it about" },
        { from: 'asahi', t: "asanoonecares: the board mostly. she wants to do another one" },
        { from: 'asahi', t: "asanoonecares: and she asked about you" },
        { from: 'solar', t: "solarsystem: what about me" }
      ], contact: CLUB, group: true },
      { n: "*asanoonecares is typing.* Then not. Then typing. Then not, for long enough that she put the phone face down on her chest, and it rang." },
      { s: 'asahi', f: 'neutral', t: "I didn't call you." },
      { s: 'solar', f: 'happy', t: "You're calling me right now, Asahi." },
      { s: 'asahi', f: 'neutral', t: "My thumb called you. My thumb has its own life. No one cares." },
      { s: 'solar', f: 'happy', t: "So are you hanging up?" },
      { n: "A long rustle, a duvet being pulled up over somebody's head, the sound going close and muffled like he'd taken the phone under there with him." },
      { s: 'asahi', f: 'neutral', t: "...No." },
      { s: 'asahi', f: 'neutral', t: "She asked if you sleep. She said in the circle you looked like somebody who doesn't. She said it nicer. In Japanese everything she says sounds like a get-well card." },
      { s: 'solar', f: 'neutral', t: "What else?" },
      { s: 'asahi', f: 'neutral', t: "That the ghost was polite. It said welcome home. A rude ghost doesn't say welcome home, it says get out. So it's a good ghost. She wants to do another one. With snacks Junkyu doesn't sit in." },
      { s: 'asahi', f: 'sad', t: "And she wrote down the thing I said. *It's not lonely, it's got us now.* In her notebook. She reads it back to me in class. It's humiliating." },
      { s: 'solar', f: 'happy', t: "It was nice, though." },
      { s: 'asahi', f: 'neutral', t: "That's what's humiliating." },
      { n: "Nana chose that moment to sigh. A long one, from the bottom of all sixty pounds, the kind that rattled the bed frame and went straight down the phone." },
      { s: 'asahi', f: 'surprised', t: "Is there a man in your room." },
      { s: 'solar', f: 'happy', t: "It's Nana." },
      { s: 'asahi', f: 'neutral', t: "He sighs like a man. Like a divorced man." },
      { s: 'asahi', f: 'neutral', t: "I can't sleep either. Since we got back. My room's too quiet. At the guesthouse there was this guy through the wall. Some salaryman. Snored every night like a truck reversing. I hated him." },
      { s: 'asahi', f: 'sad', t: "I miss him. No one cares." },
      { ifEvent: 'epi-h-snowed-in', then: [
        { s: 'asahi', f: 'happy', t: "*Question three has a typo.*" },
        { n: "It was a perfect impression. The monotone, the page turning, the not looking up. He laughed at himself, a real one, muffled by duvet, the kind he only ever seemed to spend on one person." },
        { s: 'asahi', f: 'happy', t: "He didn't even look up, Sol. He just *knew*. I think about it and I have to lie down. I'm lying down now. That's why." }
      ] },
      { s: 'asahi', f: 'neutral', t: "Does the president know you're up?" },
      { s: 'solar', f: 'neutral', t: "No." },
      { s: 'asahi', f: 'neutral', t: "Text him. I want to see what he does. I want to see the period." },
      { choose: [
        { t: "(Text Jungwon.)", stat: { charm: 1 }, then: [
          { phone: [
            { from: 'solar', t: "are u awake" },
            { from: 'jungwon', t: "yes." },
            { from: 'jungwon', t: "why are you." },
            { from: 'jungwon', t: "go to sleep, sol." }
          ], contact: 'Won' },
          { n: "It took him eleven seconds. She read them out, one at a time, and on *yes, period* there was a noise down the phone like a kettle, and by *go to sleep, comma, sol, period* Asahi was gone, completely, laughing into his pillow with the duvet over his head so his mother wouldn't hear." },
          { s: 'asahi', f: 'happy', t: "He's awake at three in the morning to put a *period* on it. He's the funniest man in Korea. I'd die for him. Don't tell him." },
          { s: 'solar', f: 'happy', t: "I'm telling him." },
          { s: 'asahi', f: 'neutral', t: "I'll block you." }
        ] },
        { t: "(Let him sleep.)", stat: { kindness: 1 }, then: [
          { s: 'solar', f: 'neutral', t: "He sleeps like four hours a night. I'm not waking him up for your entertainment." },
          { n: "A pause. The duvet rustled." },
          { s: 'asahi', f: 'neutral', t: "...You're nice to him." },
          { s: 'solar', f: 'neutral', t: "I'm nice to everyone." },
          { s: 'asahi', f: 'neutral', t: "No. Like that. Specific. You used to be nice to us like that." },
          { n: "She didn't have anything for that. She lay there with it on her chest, heavier than the phone." },
          { s: 'asahi', f: 'neutral', t: "No one cares. It's fine. He's funny. I'd be nice to him too." }
        ] }
      ] },
      { s: 'asahi', f: 'neutral', t: "Don't hang up. I'm not asking. I'm just saying the option's not there." },
      { n: "So she didn't. They stopped talking, and the line stayed open, a soft hiss and his breathing and once a car going by outside his window in the snow, and on his end the voice memo was still playing, low, minute thirty-four, thirty-five, Kazuha's voice small and cheerful in Japanese, and Solar lay there and understood more of it than she should have. A word here. *Daijoubu.* A word there. *Okaeri.* She didn't tell anyone that. Not even the phone." },
      { n: "Somewhere past four his breathing went slow. She thought he was gone. Then, from very far down under the duvet, mostly asleep," },
      { s: 'asahi', f: 'neutral', t: "No one cares." },
      { s: 'asahi', f: 'neutral', t: "...Bracket. I care. Close bracket." },
      { n: "Then he was asleep, properly, and Nana was asleep on her feet, and the snow was coming down past the window the right way, and she lay in the dark with the call still going, two people not saying anything to each other across a whole town, and neither of them hung up." }
    ] }
  ]);

  /* ── Jaehyuk ── */
  add('jaehyuk', 'friend', [
    { id: 'epi-h-jaehyuk-office', title: 'office hours', hint: "Jaehyuk is calling at ten past eleven with a copy of the calculus paper he wrote out from memory. He says it's office hours.",
      after: '1/8', until: '1/8', slots: LATE, events: ['epi-h-makeup'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-late' },
      { n: "Her uniform skirt was over the back of the desk chair where she'd dropped it, the blazer on the floor under it with the VP pin still on, and on the desk, where she'd put them down when she came in and hadn't been able to throw them away, a sharpened pencil and an empty granola bar wrapper, folded small." },
      { ifEpiRoute: 'jihoon', then: [
        { n: "And beside them a white eraser, with *U DROPPED THIS. (U DIDN'T.)* on it in letters so tiny they had to have been done with the point of a compass. She'd put it in the pencil case. Then taken it back out. Then put it on the desk, where she could see it." }
      ] },
      { n: "Nana was on the bed on top of every one of her calculus notes, which he'd chosen out of all the soft places in the house, lying across them with his chin on chapter six like a paperweight that had opinions. Her phone rang at ten past eleven." },
      { s: 'jaehyuk', f: 'neutral', t: "Office hours. I wrote the paper out from memory. I'm going through it question by question. You don't have to. I'm doing it anyway. You can listen." },
      { s: 'solar', f: 'flustered', t: "Jae. It's done. I handed it in. It's gone." },
      { s: 'jaehyuk', f: 'neutral', t: "It's not gone. It's being marked. That's different." },
      { n: "He'd sat it in the library annex with the overflow, a courtyard away from her, and somehow walked out with the whole paper in his head, word for word, the way other people walk out of a movie with the songs." },
      { s: 'jaehyuk', f: 'neutral', t: "Question one." },
      { s: 'solar', f: 'neutral', t: "The ladder." },
      { s: 'jaehyuk', f: 'serious', t: "My ladder." },
      { n: "There was a small silence on the line, the silence of a boy who had been thinking about one ladder for four days." },
      { s: 'jaehyuk', f: 'serious', t: "Did you write feet." },
      { s: 'solar', f: 'happy', t: "I wrote feet." },
      { n: "He breathed out, long, like a man being let off a charge." },
      { s: 'jaehyuk', f: 'neutral', t: "So technically Jungwon got you that point." },
      { s: 'solar', f: 'happy', t: "Technically you made the sheet." },
      { s: 'jaehyuk', f: 'sad', t: "Technically I made the sheet wrong." },
      { n: "Question two was a limit, and she'd written it the way someone had told her once, over a council room table with a croissant between them, *where a function is going even if it never gets there,* and then the actual working under it, because Jaehyuk had spent two years teaching her that a nice sentence was not an answer. He said *good* in his circling-in-green voice. Question three was the chain rule, and she'd forgotten the inside." },
      { s: 'jaehyuk', f: 'neutral', t: "You always forget the inside." },
      { s: 'solar', f: 'sad', t: "I know." },
      { s: 'jaehyuk', f: 'neutral', t: "I think you forget the inside on purpose. To spite me personally." },
      { s: 'solar', f: 'happy', t: "Question four I showed my working. Ms. Miyawaki said partial credit is real. Even in life." },
      { s: 'jaehyuk', f: 'happy', t: "She's right. That's going in the quiet doc." },
      { s: 'jaehyuk', f: 'neutral', t: "Question five. The box." },
      { s: 'solar', f: 'neutral', t: "I drew a box." },
      { s: 'jaehyuk', f: 'neutral', t: "And?" },
      { s: 'solar', f: 'flustered', t: "And I drew Nana in it." },
      { n: "The line went quiet in the way it only did when Jaehyuk was deciding whether to be disappointed. On the bed Nana heard his name and sighed into her notes, a long sigh that lifted the corner of chapter six and set it down again." },
      { s: 'jaehyuk', f: 'neutral', t: "...Was he the right size for the box?" },
      { s: 'solar', f: 'happy', t: "He was too big for the box." },
      { s: 'jaehyuk', f: 'happy', t: "Then you understood the question." },
      { ifGlitch: 3, then: [
        { n: "Then he didn't say anything for a while. She could hear his desk lamp buzzing. When he spoke again it was in the other voice, the lower one, the one he'd used in the library over chapter five, the one for things that weren't on any paper." },
        { s: 'jaehyuk', f: 'serious', t: "From the annex you could see the whole courtyard. I timed it. Nine minutes." },
        { s: 'jaehyuk', f: 'serious', t: "I looked up inversions at lunch. It's not what an inversion does." },
        { s: 'solar', f: 'sad', t: "Ms. Miyawaki said that too. Under her breath." },
        { s: 'jaehyuk', f: 'neutral', t: "Then she knows. The whole school's got it on video anyway." },
        { n: "He didn't ask her anything. That was the thing about Jaehyuk. He left a space exactly the size of a question and then didn't put one in it, and waited, and the space just sat there on the line between them, and she could feel the edges of it." },
        { ifFlag: 'epi-h-jaehyuk-told', then: [
          { n: "He was the one she'd already told. The clocks, the can, the notes, the snow. His binder was still on her desk under the pencil, *(for Solar, who will be fine)* on the front, and she still didn't know if it was a prediction or an instruction." }
        ] },
        { choose: [
          { t: "(Tell him what your hand did.)", flag: 'epi-h-jaehyuk-told', stat: { courage: 1 }, then: [
            { s: 'solar', f: 'sad', t: "My hand went thin. During. While it was going up. I could see the desk through my knuckles. The pencil line went through my wrist." },
            { s: 'jaehyuk', f: 'neutral', t: "Okay." },
            { n: "Not *what*. Not *are you sure*. Just *okay*, and then the sound of a keyboard, a few keys, slow." },
            { s: 'jaehyuk', f: 'neutral', t: "I'm writing it down. Not in the shared one. One line. Not to do anything with. Just so it's somewhere that isn't only you." },
            { s: 'solar', f: 'sad', t: "What does it say?" },
            { s: 'jaehyuk', f: 'serious', t: "*Monday. Nine minutes. Solar's hand.* And a question mark. I don't put question marks in docs. That's the first one." }
          ] },
          { t: "(Tell him about the box again.)", stat: { charm: 1 }, then: [
            { s: 'solar', f: 'neutral', t: "He really was too big for the box, Jae. I gave him ears. They went off the edge of the page." },
            { n: "It wasn't what she'd been going to say. She'd been going to say *my hand*. He heard her not say it. She knew he did, because he waited one second longer than a joke needed, and then he let her have it." },
            { s: 'jaehyuk', f: 'happy', t: "The ears are probably worth a point. I'd give you a point for the ears." }
          ] }
        ] }
      ], else: [
        { n: "Then he didn't say anything for a while, and she could hear his desk lamp buzzing, and she nearly told him something, she wasn't even sure what, and he waited exactly as long as it would have taken her to start, and then let her not." }
      ] },
      { s: 'jaehyuk', f: 'neutral', t: "Go to sleep, Solar. English is tomorrow. It's mostly essays. You're good at essays. You just lie in them." },
      { s: 'solar', f: 'happy', t: "That's so mean." },
      { s: 'jaehyuk', f: 'happy', t: "It's accurate. Lie less on the essay. Goodnight." },
      { ifGlitch: 3, then: [
        { n: "When she put the phone down she looked at the window, she couldn't help it, and there was one flake out there against the black, just one, going up past the glass, slow, unhurried, like it had forgotten something upstairs. The phone buzzed on the bed." },
        { phone: [
          { from: 'jaehyuk', t: "one just went past mine." },
          { from: 'jaehyuk', t: "just the one. it's fine. go to sleep." }
        ], contact: 'jaehyukkie' },
        { n: "She turned the lamp off and lay down with her arm over Nana and her notes under both of them, and didn't look at the window again, and the snow, as far as she knew, came down." }
      ], else: [
        { n: "She turned the lamp off and lay down with her arm over Nana and her notes under both of them, and outside the snow came down the right way, slow and ordinary, and she watched it for a long while to make sure it stayed that way." }
      ] }
    ] }
  ]);

  /* ── The council ── */
  add('council', 'friend', [
    { id: 'epi-h-council-call', title: 'group call', hint: "RETREAT FACTS has started a group call at midnight. Heeseung has an agenda. Jungwon is whispering.",
      after: '12/30', until: '1/1', slots: LATE, events: ['epi-h-party'], noFlags: [], route: null, noRoute: null,
      place: 'Hanlim · Home · Her Room', time: 'Late Night', scene: [
      { music: 'epi-h-goofy' },
      { phone: [
        { from: 'heeseung', t: "heeheeseung: mandatory call. 12:00 exactly. agenda attached" },
        { from: 'niki', t: "rikiniki: theres no attachment" },
        { from: 'heeseung', t: "heeheeseung: the agenda is in my heart niki" },
        { from: 'jake', t: "jakeys: heeseung's heart is laminated" }
      ], contact: RETREAT, group: true },
      { n: "At midnight exactly her screen filled up with little squares. Heeseung at his desk under a lamp with an actual printed agenda and a pen behind his ear. Jake upside down on his bed with his feet up the wall. Jay, who was just a ceiling. Sunoo in a sheet mask, the white kind with eyeholes, waving. Niki eating cereal out of a mixing bowl. Sunghoon lit so beautifully he had clearly set up a lamp on purpose. And one black square that was Yang Jungwon, under his duvet, the phone making a little blue cave around half his face, whispering." },
      { s: 'jungwon', f: 'neutral', t: "Hi. I can't talk loud. Please don't anyone be loud." },
      { s: 'niki', f: 'happy', t: "HI WON." },
      { s: 'jungwon', f: 'serious', t: "Niki." },
      { n: "Nana had his head on her stomach and was already asleep, and the phone rose and fell with him." },
      { ifEvent: 'epi-h-new-year', then: [
        { s: 'heeseung', f: 'serious', t: "Item one. Resolutions. They're a day late, which is my fault, because I let Niki eat tteokguk until he fell asleep in it." },
        { s: 'niki', f: 'happy', t: "I'm a year older. I need my rest." }
      ], else: [
        { s: 'heeseung', f: 'serious', t: "Item one. Resolutions. We present them to Halmeoni on the first, at sebae. She asks. She remembers. Tonight is the draft." }
      ] },
      { s: 'jake', f: 'happy', t: "I resolve to make one pun a day. Minimum. It's a pun-damental right." },
      { s: 'heeseung', f: 'neutral', t: "Denied." },
      { s: 'jake', f: 'surprised', t: "You can't deny a resolution!" },
      { s: 'heeseung', f: 'neutral', t: "I'm secretary of resolutions." },
      { s: 'sunoo', f: 'surprised', t: "I'm the secretary!" },
      { s: 'heeseung', f: 'neutral', t: "Of resolutions, Sunoo. You're secretary of everything else." },
      { s: 'niki', f: 'happy', t: "Resolution. ufo_hanlim hits ten thousand followers." },
      { s: 'heeseung', f: 'serious', t: "That account is banned." },
      { s: 'niki', f: 'happy', t: "On the forum. Not on Instagram. Instagram is a free country." },
      { s: 'sunghoon', f: 'neutral', t: "Sunghoon resolves to remain exactly as he is. It would be selfish to change." },
      { s: 'jake', f: 'happy', t: "And *soon*?" },
      { s: 'sunghoon', f: 'neutral', t: "Soon is not a resolution, Jake. Soon is a promise. Sunghoon doesn't put promises on agendas." },
      { s: 'jay', f: 'neutral', t: "Mine's we get a better story. Nobody believes the temple, bro." },
      { s: 'heeseung', f: 'serious', t: "*Everybody* believes the temple." },
      { s: 'jay', f: 'neutral', t: "Her mom doesn't. Sol. Does your mom believe it?" },
      { n: "Every square went still at once, even Niki's spoon." },
      { s: 'solar', f: 'sad', t: "No." },
      { n: "Nobody said anything. On Sunoo's square the sheet mask had gone very still, two eyeholes and a mouth hole, and then, small," },
      { s: 'sunoo', f: 'sad', t: "My halmeoni doesn't either. She just likes us." },
      { s: 'sunoo', f: 'happy', t: "My resolution is Sol sleeps eight hours. And everybody drinks water. And Won eats lunch. Is three allowed?" },
      { s: 'heeseung', f: 'happy', t: "Three's allowed." },
      { s: 'jungwon', f: 'neutral', t: "Mine is to stop lying to my mother." },
      { n: "A pause, long enough that the whole call heard his duvet rustle." },
      { s: 'jungwon', f: 'neutral', t: "Starting in February." },
      { s: 'jake', f: 'happy', t: "Why February?" },
      { s: 'jungwon', f: 'neutral', t: "January's busy." },
      { s: 'heeseung', f: 'neutral', t: "Mine is that we get through January with the story straight and every won in the tin and nobody—" },
      { n: "He stopped, and looked down at his printed agenda like the rest of the sentence was on it and had smudged." },
      { s: 'heeseung', f: 'sad', t: "...And nobody going anywhere. That's all. Next item." },
      { ifEpiRoute: 'council', then: [
        { ifFlag: 'epi-h-party-scuffle', then: [
          { s: 'jake', f: 'happy', t: "Can I add one? My knuckle heals." },
          { s: 'jay', f: 'neutral', t: "Nobody punched anybody, bro." },
          { s: 'heeseung', f: 'serious', t: "Retreat fact nine." }
        ] }
      ], else: [
        { ifEpiRoute: 'jungwon', then: [
          { s: 'jungwon', f: 'neutral', t: "And for the record. At the party. You texted me from the curb, when you left." },
          { s: 'jungwon', f: 'happy', t: "That's the whole year, for me. That you keep doing that." },
          { s: 'niki', f: 'surprised', t: "WON. We are ALL HERE." },
          { s: 'jungwon', f: 'flustered', t: "I'm aware." }
        ], else: [
          { s: 'jay', f: 'neutral', t: "You went to the party with Park, though." },
          { s: 'solar', f: 'neutral', t: "He drove." },
          { s: 'jay', f: 'neutral', t: "Bro." },
          { s: 'jungwon', f: 'neutral', t: "Jay. She told me. It's fine." },
          { s: 'sunoo', f: 'sad', t: "...Was he okay, though? Jihoon?" },
          { n: "Out of all of them it would be Sunoo who asked that. It was always going to be Sunoo." },
          { s: 'solar', f: 'neutral', t: "He was okay, Sunoo." }
        ] }
      ] },
      { ifEvent: 'epi-h-livestream', then: [
        { s: 'heeseung', f: 'serious', t: "Item two. The clip. The gym door. Frame two-fourteen. Somebody in chat said *temple uniform* with two question marks." },
        { s: 'heeseung', f: 'neutral', t: "Retreat fact ten. The temple bus dropped us at school." },
        { s: 'jay', f: 'neutral', t: "There's no temple bus." },
        { s: 'heeseung', f: 'serious', t: "There is now, Jay." },
        { s: 'sunghoon', f: 'neutral', t: "Sunghoon resolves never to ride the temple bus again. It was cramped." }
      ], else: [
        { s: 'heeseung', f: 'serious', t: "Item two. The forum. Part five. The rehab comment has eighty-nine upvotes." },
        { s: 'niki', f: 'happy', t: "Ninety-one. I upvoted it twice. Keep your enemies close." }
      ] },
      { s: 'heeseung', f: 'neutral', t: "Vice President. You haven't given one." },
      { choose: [
        { t: "\"Keep the story straight.\"", stat: { charm: 1 }, then: [
          { s: 'heeseung', f: 'happy', t: "Thank you. Finally. A normal resolution. I'm putting a star next to it." },
          { n: "He did, on paper, on camera, a big one. Jay's ceiling didn't say anything. Jay's ceiling didn't have to. Her mom's face over the kitchen table sat in her chest where his question had put it, and stayed." }
        ] },
        { t: "\"Tell my mom one true thing.\"", stat: { courage: 1 }, then: [
          { n: "Silence, the whole grid of it, seven little lit rooms all holding their breath at once." },
          { s: 'heeseung', f: 'serious', t: "...Which thing." },
          { s: 'solar', f: 'sad', t: "I don't know yet." },
          { n: "In the black square, the blue cave shifted. Jungwon's voice came out of it very low." },
          { s: 'jungwon', f: 'neutral', t: "Pick a small one." },
          { s: 'solar', f: 'sad', t: "Like what?" },
          { s: 'jungwon', f: 'sad', t: "Like that you missed her." }
        ] },
        { t: "\"Sleep eight hours. Because Sunoo said.\"", stat: { kindness: 1 }, then: [
          { s: 'sunoo', f: 'happy', t: "YES!" },
          { n: "Six people said *shh* at him at once, and Jungwon said it twice, and somewhere off his square a door handle turned, and didn't open, and every single square on the call froze like deer." }
        ] }
      ] },
      { n: "Nana chose then to snore. Not a little one. The big one, the one from the bottom of the dog, which rattled the phone on her stomach and went out to every square on the call." },
      { s: 'niki', f: 'surprised', t: "Who's snoring. Is that Jay. Jay, are you asleep." },
      { s: 'jay', f: 'neutral', t: "I'm awake, bro. I'm a ceiling but I'm awake." },
      { s: 'solar', f: 'happy', t: "It's Nana." },
      { s: 'jake', f: 'happy', t: "NANA! Layla says hi! Layla says happy new year!" },
      { s: 'jungwon', f: 'happy', t: "Hi, Nana." },
      { n: "He said it so quietly. Barely a voice at all, out of a duvet a block away. Nana stopped snoring. One ear came up, and then his whole head, off her stomach, and he looked at the phone with total attention, the way he looked at the front door when he heard a particular car, like he knew exactly who that was." },
      { n: "It went on another forty minutes. Nobody could say afterwards what the rest of the agenda had been. Then the blue cave in Jungwon's square tipped sideways, and the call heard a door, and a woman's voice somewhere past it saying his name, the whole name, and his square went black without a goodbye." },
      { n: "One by one after that the others went, Niki mid-sentence, Jake with a pun nobody let him finish, Sunoo blowing kisses through the sheet mask. Heeseung was last. He looked at his agenda, and then at her, the last square left." },
      { s: 'heeseung', f: 'neutral', t: "Minutes closed. Goodnight, Vice President." },
      { n: "Then it was just her square, and the dog, and *1 person in call*, and she stayed on it anyway for a minute, alone on a call with nobody else in it, because it was still warm, and then she hung up." }
    ] },

    { id: 'epi-h-council-tables', title: 'two tables', hint: "Yeobo's is packed. The old table has the window, the council has the big table at the back, and both of them have saved you a seat.",
      after: '12/30', until: '1/5', slots: ['after', 'evening'], events: ['epi-h-party'], noFlags: [], route: null, noRoute: null,
      place: "Hanlim · Yeobo's", time: 'Daytime', scene: [
      { music: 'epi-h-goofy' },
      { n: "The bell over the door gave its little cough and every head in Yeobo's came up, and then, at two tables in particular, went very deliberately back down." },
      { n: "The windows had fogged white all the way up, so you couldn't tell what the sky was doing, and the room smelled like butter and wet wool and a radiator that had been going all day. At the window table, the old one: Hyunsuk, Asahi with his hood up, Jaehyuk, Junkyu. At the big table at the back, pushed together with the small one the way it always was now: Heeseung and the ledger, Jake, Jay, Niki, and Sunoo half in his apron, running between the table and the counter." },
      { n: "No Cherry. No Sunghoon either. Nobody at either table had said anything about that, loudly." },
      { ifEvent: 'epi-h-snowed-in', then: [
        { n: "Above the counter, under TODAY'S CROISSANTS, JAEHYUK WAS WRONG (1/4) ♡ was still on the specials board in pink chalk. Jaehyuk was sitting with his back to it." }
      ] },
      { ifFlag: 'epi-h-suk-seat', then: [
        { n: "At the window, the chair beside Hyunsuk had his coat on it. He'd saved it. She'd told him to, in his car, at midnight, and he'd said he wasn't saving her anything, and there was his coat, folded, like it had walked there on its own." }
      ], else: [
        { n: "At the window, the chair beside Junkyu had his scarf on it, and Junkyu had one hand on the scarf, patting it, like it was a seat on a bus he'd been told to hold." }
      ] },
      { n: "At the back, Niki had dragged the chair from the head of the table into the middle of the aisle, and on it, propped against the back, a laminated sign in Sunoo's round handwriting: RESERVED: VICE PRESIDENT." },
      { s: 'junkyu', f: 'happy', t: "SOL! Over here!" },
      { n: "He waved with both arms. Niki, at the back, immediately waved with both arms too, bigger, staring at Junkyu the whole time, like a duel." },
      { ifEvent: 'epi-h-motion', then: [
        { n: "The council table was a war room. Heeseung's ledger, a laptop open to the motion, a printout of the motion with things circled in three colours. The window table had the forum open on Jaehyuk's phone and was not reading it out loud, very pointedly." },
        { s: 'jay', f: 'neutral', t: "Tell your boy to stop commenting, bro. Forty-one times." },
        { s: 'hyunsuk', f: 'neutral', t: "Tell your president to stop being impeachable." },
        { s: 'jake', f: 'surprised', t: "Oof." },
        { s: 'jaehyuk', f: 'neutral', t: "Technically the motion's against all of them. Her too. She's an officer." },
        { n: "Hyunsuk's face did something. He hadn't thought about that. She watched him not have thought about it, and then think about it, and look at her, and look away." }
      ], else: [
        { s: 'niki', f: 'happy', t: "Part five has a new theory. We eloped. All eight of us. Group wedding." },
        { s: 'asahi', f: 'neutral', t: "No one cares." },
        { s: 'hyunsuk', f: 'neutral', t: "Some of us were at a temple, I hear." },
        { n: "He said it to the window, not to the back of the room. It got there anyway." }
      ] },
      { ifFlag: 'epi-h-party-scuffle', then: [
        { n: "Hyunsuk and Jay had not looked at each other since the kitchen at the party. In a café this size that took real commitment, and both of them were committed." }
      ] },
      { n: "A first-year at the counter, waiting on two hot chocolates, turned round with her eyes huge and her phone already half up." },
      { s: 'solar', f: 'happy', t: "Before you ask. Gangwon-do. Four a.m. bell. A hundred and eight bows. It was very spiritual." },
      { glitch: { strain: 1 } },
      { n: "The girl lowered the phone, satisfied and a little disappointed, and Solar felt the thin cold wire at the back of her neck go tight and then let go, and stood in the middle of the aisle in her coat between the window and the back of the room, with a saved seat at each end, and everybody very carefully not watching her decide." },
      { n: "Sunoo's grandmother came out from behind the counter with two plates. Identical. The same number of croissants on each, the same two pieces of hotteok, the same little pile of tangerines, she'd clearly counted, and she put one down at the window and one down at the back, and looked from one table to the other like a referee before a match." },
      { s: 'halmeoni', f: 'serious', t: "The same. So nobody says anything." },
      { n: "Then she looked at Solar, in the aisle, still in her coat." },
      { s: 'halmeoni', f: 'neutral', t: "Sit. You're blocking my aisle." },
      { choose: [
        { t: "(Sit at the window.)", stat: { kindness: 1 }, flag: 'epi-h-tables-crew', then: [
          { n: "Junkyu made a noise like a kettle. The saved chair was cleared before she got to it, without anybody looking at her, and she sat down in the old seat with her back to the window, the radiator warm against her calves the way it always had been, and Asahi slid the plate an inch towards her without comment." },
          { s: 'hyunsuk', f: 'neutral', t: "Took you long enough." },
          { s: 'niki', f: 'surprised', t: "TRAITOR. Heeseung, write it down." },
          { s: 'heeseung', f: 'neutral', t: "*Vice President, absent.* With an asterisk." },
          { s: 'jake', f: 'happy', t: "We still love you! Mostly! Ask Nana if Layla can come over Saturday!" },
          { n: "Sunoo came over anyway. He had the croissant from under the napkin, the sticky note still on the plate, and he put it down in front of her at the window table with the face of a boy being brave about something small." },
          { s: 'sunoo', f: 'happy', t: "It says vice president. It doesn't say which table." },
          { n: "He went back to the big table. He smiled the whole way. It was only at the back, sitting down, that it went, for a second, before he put it back. She saw it. So did Hyunsuk, who picked up his strawberry milk and drank it and said nothing, and pushed the second one across to her." }
        ] },
        { t: "(Sit at the big table.)", stat: { charm: 1 }, flag: 'epi-h-tables-council', then: [
          { n: "Niki cheered like a goal had gone in and pulled the chair out with the sign still on it, and she sat on the sign, which seemed to be the point, and Heeseung pushed the ledger towards her with one finger, and Jake said *the VP has entered the building* in a stadium voice." },
          { n: "At the window Junkyu's arms came down, slowly." },
          { s: 'asahi', f: 'neutral', t: "No one cares." },
          { n: "He said it too loud. Asahi never said anything too loud. Jaehyuk looked across the room at her and nodded, once, a nod that understood, the vice president, the motion, the job, and somehow that was worse than if he hadn't. Hyunsuk put his coat on. Not to leave. He just put it on, indoors, by the radiator, and sat in it." },
          { s: 'hyunsuk', f: 'neutral', t: "Cool. Cool cool cool." },
          { n: "Twenty minutes later the window table went. Junkyu waved at her from the door with one arm. Hyunsuk was last. He stopped by the counter to pay for the plate, which nobody had asked him to do, and the bell coughed behind him." },
          { n: "Halmeoni picked up the window table's plate, two croissants still on it, the tangerines not even touched, and brought it to the back and put it down in front of Solar." },
          { s: 'halmeoni', f: 'neutral', t: "They didn't eat. You eat it." }
        ] },
        { t: "(Push the tables together.)", stat: { courage: 1 }, flag: 'epi-h-tables-pushed', then: [
          { n: "She put her coat on the RESERVED sign, took hold of the window table and pulled. It moved four centimetres with a noise like a ship running aground, and both tables stared, and then Junkyu pushed from his side, and then Jake, and then Jay, because Jay could never watch somebody lift something badly." },
          { n: "Yeobo's tables did not match. The window one was two centimetres lower, so where they met there was a ridge right down the middle like a border on a map, and for a long second everybody sat on their own side of it and looked at it." },
          { n: "Sunoo's grandmother came back out with one plate. The big one, the one from the cake stand, with everything from both plates piled on it and more besides, and she set it down precisely on the ridge, half on each table, so it tilted." },
          { s: 'halmeoni', f: 'serious', t: "Whoever wants to eat, sits." },
          { n: "Everybody sat. It turned out the only seats left put Jay next to Hyunsuk. They sat shoulder to shoulder with the ridge under their elbows and looked straight ahead like two men on a bus." },
          { s: 'jake', f: 'happy', t: "So. Dogs." },
          { s: 'junkyu', f: 'happy', t: "I LOVE dogs!!" },
          { n: "That did it, a little. Junkyu and Jake did ten minutes on Layla and Nana like it was a drama they were both watching. Jaehyuk and Heeseung discovered they colour-coded in the same order and regarded each other with naked suspicion. Niki leaned across the ridge at Asahi." },
          { s: 'niki', f: 'happy', t: "I comment on all your posts." },
          { s: 'asahi', f: 'neutral', t: "I know. I block you." },
          { s: 'niki', f: 'happy', t: "I know. I make a new one." },
          { s: 'asahi', f: 'neutral', t: "...That's kind of funny. No one cares." },
          { n: "Jay reached for a tangerine at the same time Hyunsuk did. They both stopped." },
          { s: 'jay', f: 'neutral', t: "Your shove's weak, bro." },
          { s: 'hyunsuk', f: 'neutral', t: "Your face is weak." },
          { n: "A pause. Then Jay laughed, one short bark, surprised out of him, and Hyunsuk almost did, and caught it, and took the tangerine, and peeled it, and put half of it down on Jay's side of the ridge without looking." },
          { s: 'halmeoni', f: 'happy', t: "Good. Eat." },
          { n: "It wasn't fixed. The ridge was still under the plate, and tomorrow the tables would be back by the window and at the back with the aisle between them. But for an hour everybody ate off the border, and when she looked up the fog on the windows had gone gold with somebody's headlights passing, like the whole room had been lit from outside for a second, on purpose." }
        ] }
      ] }
    ] }
  ]);
})();
