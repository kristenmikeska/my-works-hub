/* crush-triangle.js (2026-10-23, Kat's "honest and torn" ruling in the lore bible): Akihiko and Haechan and the household
   meet the triangle. Format: core.js "Crushes"; tracks, the other world lines and texts are in crush.js. Loaded after
   crush-haechan.js.
   Every moment is gated crush: { haechan: ASKED, akihiko: ASKED } and on a4-household-introductions (11/5, where they first
   meet), and branches inside on Akihiko's phase with `by(dating, building, friend)` (dating = his romance route; building
   = noticed..almost; friend = out / faded, which includes "she's on Haechan's romance route") and, where it matters, on
   Haechan's with `hc(dating, faded, pull)` (after his rank 8 on 12/18: romance → dating, friend → faded; before it, the
   pull). Nobody is a villain; if she's with Akihiko she stays with him and means it, and the pull is still there.
     Rivals (rivals to respect):
       cr-ah-pads          evening  11/8–12/4    the dorm roof, mitts: Akihiko wants to spar, Haechan won't
       cr-ah-railing       late     11/12–12/10  quiet; both already on the roof, two ends of a railing
       cr-ah-walk-home     evening  11/15–12/20  the station: both turn up to walk her back
       cr-ah-the-gap       late     12/6–1/12    tartarus, after a5-haechan-awakens: Akihiko covers her, Haechan sees it
       cr-ah-two-mugs      late     1/10–2/24    quiet, flag year-goes-on: the kitchen at one, overheard from the stairs
     Solar's talks:
       cr-ah-the-step      late     11/20–12/16  quiet; she talks to Haechan about Akihiko (before his rank 8)
       cr-ah-river         early    12/19–1/24   she talks to Akihiko about Haechan (after his rank 8; nothing in it
                                                 needs the solstice, so no flag gate)
     The household:
       cr-ah-notebook      evening  11/10–12/10  Junpei's pool, Yukari fake-disgusted
       cr-ah-sheet-masks   evening  11/12–12/20  Hyein nearly says it; Hanni stops her
       cr-ah-curry         evening  11/20–1/6    dinner: Aigis, Fuuka, Mitsuru, Ken, Koromaru, Yunjin
   World lines (both tracks gated) and four texts (sees, sisters) at the bottom. */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases, add = C.add;
  const A = ph => ({ akihiko: ph }), H = ph => ({ haechan: ph });
  const BOTH = { haechan: P.ASKED, akihiko: P.ASKED };
  const MET = ['a4-household-introductions'];
  // Akihiko: dating (his romance route) / still building / a friendship (out, or faded: said no, his friend route, or
  // she's on someone else's romance route).
  const by = (dating, building, friend) => ({ ifCrush: A('dating'), then: dating, else: [{ ifCrush: A(P.FRIEND), then: friend, else: building }] });
  // Haechan: dating (his rank 8, romance) / faded (his rank 8, friend) / still the pull (before 12/18).
  const hc = (dating, faded, pull) => ({ ifCrush: H('dating'), then: dating, else: [{ ifCrush: H(P.FRIEND), then: faded, else: pull }] });

  C.moments.push(
    /* ── 1. Sparring. The roof with pads, before he's ever been up the tower. ── */
    { id: 'cr-ah-pads', who: 'akihiko', crush: BOTH, slot: 'evening', after: '11/8', until: '12/4', events: MET,
      place: 'Iwatodai Dorm · Rooftop', time: 'Evening', bg: 'iwatodaidorm-roof-evening', scene: [
        { n: "The roof at six, the sun already gone behind Port Island and the sky over the bay the color of a bruise on its way out, and from the stairwell she could hear it before she saw it, the flat double smack of gloves on pads, and one voice she knew counting, and another voice she was only starting to know, not counting at all." },
        { n: "Akihiko was in the middle of the roof in a T-shirt in November, gloves on, bouncing. Across from him, in the black hoodie with the sleeves pushed up, holding a pair of focus mitts at chest height with the expression of a man who'd been handed somebody else's baby at a wedding, was Haechan." },
        { s: 'akihiko', f: 'happy', t: "Again. One-two, slip, two. You're dropping the left." },
        { s: 'haechan', f: 'neutral', t: "I'm not dropping it. I'm putting it where you're going to hit it. You're late on the two." },
        { s: 'akihiko', f: 'surprised', t: "...I'm not late on the two." },
        { s: 'haechan', f: 'neutral', t: "You're on the beat everywhere else. The two drags. Like a drummer thinking about lunch." },
        { n: "Akihiko threw it again. One-two, slip, two. The second two came in a hair behind, and she heard it too, now that somebody had said it out loud, and so did he, at the same moment, and he stopped dead with his glove still up and looked at the mitt as though it had said something about his mother." },
        { s: 'akihiko', f: 'serious', t: "Spar me. Gloves. Five minutes." },
        { s: 'haechan', f: 'neutral', t: "No." },
        { s: 'akihiko', f: 'serious', t: "Why not?" },
        { s: 'haechan', f: 'neutral', t: "Because I don't hit people I share a fridge with. And because you'd want a rematch every night for a year, Protein. I've seen your face at six in the morning. I'm not signing up for that." },
        by([
          { n: "Akihiko glanced at the stairwell door, at her, as if she'd come up to settle it, and his face did the thing it did now whenever she walked into a room, the lighting-up he'd stopped bothering to hide in September, and then, because Haechan was watching him do it, he tried to hide it anyway, badly, by hitting the left mitt very hard." },
          { s: 'akihiko', f: 'blushing', t: "...Tell him. I'm never late on the two." },
          { s: 'haechan', f: 'neutral', t: "She'll tell me you're late on the two. She's been hearing it since the third stair." }
        ], [
          { n: "Akihiko glanced at the stairwell door and saw her, and his ears went red, which might have been the cold, and he brought his gloves up an inch higher than they'd been, the way the boys in the club did when a girl walked past the window, which she had always thought was very stupid and found, tonight, that she didn't." },
          { s: 'akihiko', f: 'blushing', t: "How long have you been there?" },
          { s: 'solar', f: 'neutral', t: "Since the two started dragging." },
          { s: 'haechan', f: 'happy', t: "See. She hears it." }
        ], [
          { n: "Akihiko glanced at the stairwell door and lit up, all of him, the way he lit up for a new drill or a rival or a beef bowl, which was to say completely." },
          { s: 'akihiko', f: 'happy', t: "Solar! Tell him. He's wasted holding mitts. He reads a combination like a southpaw. I want him at the club." },
          { s: 'haechan', f: 'neutral', t: "I don't go to your school, Protein. I barely go to mine." }
        ]),
        { n: "Haechan didn't look round. He'd known she was there before Akihiko had, she was sure of it, the way he seemed to know where she was in every room of the building, and he kept his eyes on Akihiko's gloves and his mitts exactly where they'd been, and only his jaw moved, once, sideways." },
        { choose: [
          { t: "(Take the mitts off Haechan. Let Akihiko work on you.)", crush: { akihiko: 1 }, then: [
            { n: "She held her hands out. Haechan looked at them, and at her, and gave her the mitts without a word, still warm inside from his hands, and went and sat on the ledge of the water tank with his hood up to watch. Akihiko threw it at her for ten minutes, careful at first and then not, and somewhere in the fourth round she said *two* half a beat before his right came in, and it landed dead on time, and he stopped and stared at her." },
            { s: 'akihiko', f: 'surprised', t: "...That was on the beat." },
            { s: 'haechan', f: 'neutral', t: "That's because she counted it for you. Now do it without her." }
          ] },
          { t: "(Tell Haechan to throw one. Just one.)", crush: { haechan: 1 }, then: [
            { s: 'haechan', f: 'neutral', t: "...One." },
            { n: "Akihiko took the mitts off him so fast he nearly took the fingers with them and held one up, delighted. Haechan didn't bother with gloves. He threw one bare-handed, a straight right into the center of the mitt, no wind-up, flat and quick, a sound as clean as a door shutting, and put the hand back in his hoodie pocket as though it had never left." },
            { s: 'akihiko', f: 'surprised', t: "Where did you learn that?" },
            { s: 'haechan', f: 'neutral', t: "A kitchen." },
            { n: "He said it like a joke. She had the strangest feeling, standing there in the cold, that it wasn't one, and that somewhere, once, she'd been upstairs listening to it through the floor." }
          ] },
          { t: "(Sit on the water tank and keep time for both of them.)", then: [
            { n: "She sat and clapped it, one-two, slip, two, and both of them, without looking at each other, fell into it, Akihiko throwing and Haechan catching, and the two stopped dragging, and for ten minutes on a cold roof three people who barely knew how to be in the same room were exactly in time." }
          ] }
        ] },
        { n: "When the light went they packed up. Akihiko said *same time tomorrow* to the roof in general. Haechan said *no* to the roof in general. Both of them were up there the next night, and the night after, and neither of them ever admitted he'd come up for the other one." }
      ] },

    /* ── 2. The roof at night. Two ends of a railing. ── */
    { id: 'cr-ah-railing', who: 'haechan', crush: BOTH, slot: 'late', when: 'quiet', after: '11/12', until: '12/10', events: MET,
      place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', bg: 'iwatodaidorm-roof-night', scene: [
        { n: "Midnight had come and gone without turning anything green, and she went up to the roof because the house was asleep and her head wasn't, and pushed the door open onto the cold, and stopped." },
        { n: "Two people at the railing, one at each end. Akihiko at the east end by the water tank, running jacket, hood down, forearms on the rail. Haechan at the west end by the satellite dish, hood up, headphones round his neck, gum. Between them eleven meters of railing with nobody on it, and she knew it was eleven meters because it was exactly the kind of thing both of them would have measured." },
        { n: "Neither of them was looking at the other. Both of them knew to the centimeter where the other one was, the way you know where a strange dog is in a room." },
        { s: 'akihiko', f: 'neutral', t: "He was here when I came up." },
        { s: 'haechan', f: 'neutral', t: "He was here when I came up." },
        { s: 'akihiko', f: 'surprised', t: "I was not. I came up at eleven." },
        { s: 'haechan', f: 'neutral', t: "Ten fifty. I heard the door. It's got a squeak at the end. Like hers." },
        { n: "Akihiko opened his mouth and shut it, and looked at the door, and she watched him file away the fact that somebody else in this building knew the sound of her door, and put it somewhere he'd have to look at later." },
        by([
          { s: 'akihiko', f: 'blushing', t: "...I was waiting for you. That's why I'm up here. In case anybody was wondering." },
          { s: 'haechan', f: 'neutral', t: "I wasn't. I was just up here." },
          { s: 'haechan', f: 'neutral', t: "That's the difference, Protein. You wait for her. I'm just somewhere she comes." },
          { n: "It wasn't unkind. That was the worst of it. He said it like a fact about weather, and Akihiko heard it as one, and didn't have anything to throw back, and she stood in the doorway between the boy she was with and the boy she couldn't explain, and neither of them asked her to." }
        ], [
          { n: "It was his roof. It had been his roof since April, where he came to clear his head and then, all summer, not to, and a boy who'd lived here a week had taken the other end of it the way a rook takes a corner, and Akihiko didn't know why that bothered him, and it was all over his face that it did." },
          { s: 'akihiko', f: 'neutral', t: "It's a big roof." },
          { s: 'haechan', f: 'neutral', t: "It is." }
        ], [
          { n: "And then, because Akihiko had never in his life been able to stand a silence for long, he called down the eleven meters, *you box?*, and Haechan said *no*, and Akihiko said *you should*, and Haechan said *no*, and Akihiko laughed out loud, delighted, like a man who'd been handed a wall to run at." }
        ]),
        { choose: [
          { t: "(Stand at Akihiko's end.)", crush: { akihiko: 1 }, then: [
            { n: "She went to his end. He moved over without looking, the way he'd been moving over on ledges for her since spring, and their sleeves touched on the rail, and at the far end Haechan put his headphones on with both hands, slowly, like a man closing a door very quietly so as not to wake anybody." }
          ] },
          { t: "(Stand at Haechan's end.)", crush: { haechan: 1 }, then: [
            { n: "She went to his end. He didn't move over. He didn't have to; he'd left the space already, an exact coat's width, as though he'd known which end she'd pick before she came up the stairs. Eleven meters away Akihiko went on looking at the city with tremendous concentration, and she felt it on the back of her neck the whole time." },
            { ifCrush: A('dating'), then: [
              { n: "She stood there anyway, a coat's width from one of them and eleven meters from the other, who was hers. The honest thing, the only honest thing she had, was that she didn't know why her feet had picked this end, and that she'd walk back to the other one, and that both of those were true at once." }
            ] }
          ] },
          { t: "(Stand in the middle.)", then: [
            { n: "She went and stood in the exact middle, where the rail was coldest. After a minute Akihiko moved one step closer. After another minute Haechan did. After ten there were about four meters between all three of them, which by the standards of that roof was practically a hug." }
          ] }
        ] },
        { s: 'haechan', f: 'neutral', t: "Night, Protein." },
        { n: "He went first. He always went first, she'd learn. Akihiko waited until the stairwell door had sighed shut behind him." },
        { s: 'akihiko', f: 'neutral', t: "...He calls me that. To my face. Nobody's given me a new name since Shinji." },
        { s: 'solar', f: 'happy', t: "Do you mind?" },
        { s: 'akihiko', f: 'happy', t: "No. That's what's annoying." }
      ] },

    /* ── 3. Who walks her home. ── */
    { id: 'cr-ah-walk-home', who: 'akihiko', crush: BOTH, slot: 'evening', after: '11/15', until: '12/20', events: MET,
      place: 'Iwatodai Station', time: 'Evening', bg: 'iwatodai-station', scene: [
        { n: "Nine at night, and the last of the commuters were coming down the station stairs with their collars up, the ticket gates going off one after another like a flock of small mechanical birds, and she came through hers with her bag on her shoulder and her feet aching from the day, and stopped, because there were two of them." },
        { n: "Haechan was leaning on the pillar by the gates with his hands in his pockets as if he'd grown there. Akihiko was coming in through the street doors at a jog in his running gear, breathing steam, and saw her, and then saw the pillar, and dropped to a walk so suddenly that a salaryman nearly walked into the back of him." },
        by([
          { s: 'akihiko', f: 'neutral', t: "I said I'd come. I texted. ...You didn't see it." },
          { s: 'haechan', f: 'neutral', t: "I was buying gum." },
          { n: "The kiosk had been shut since eight. All three of them knew the kiosk had been shut since eight." }
        ], [
          { s: 'akihiko', f: 'neutral', t: "I was running. This way. The station's on my route." },
          { s: 'haechan', f: 'neutral', t: "Since when?" },
          { s: 'akihiko', f: 'blushing', t: "Since tonight. Routes change." },
          { s: 'haechan', f: 'neutral', t: "I was buying gum." }
        ], [
          { s: 'akihiko', f: 'happy', t: "Hey! I was running past. You walking? I'll walk. I'll run circles round you, I've got two kilometers left." },
          { s: 'haechan', f: 'neutral', t: "I was buying gum." },
          { s: 'akihiko', f: 'happy', t: "The kiosk's shut." },
          { s: 'haechan', f: 'neutral', t: "I know. That's why I'm still here." }
        ]),
        { n: "It was eight minutes to the dorm. Eight minutes of streetlights and the vending machine on the corner that hummed a note she could feel in her back teeth. She had walked it alone a hundred times." },
        { choose: [
          { t: "(Fall in beside Akihiko.)", crush: { akihiko: 1 }, then: [
            by([
              { n: "She took his hand, cold and damp from the run, and he put both of them in his jacket pocket, and they walked, and four careful steps behind them on the traffic side Haechan walked too, because that was where he lived, which was true, and which he didn't say, because he didn't need to." }
            ], [
              { n: "He matched her pace at once, shortening his stride the way he did on the river, and on her other side, a step back and on the traffic side, Haechan walked too, and neither boy said a word for a whole block. Then Akihiko said *nice night*, and Haechan said *it's four degrees*, and that was the conversation." }
            ], [
              { n: "Akihiko immediately began telling her about a first-year who had fainted at the sight of a skipping rope, and Haechan walked a step back on her other side, and somewhere around the vending machine she heard him laugh, once, under his breath, at the skipping rope, and Akihiko heard it too and told the rest of the story to him." }
            ])
          ] },
          { t: "(Fall in beside Haechan.)", crush: { haechan: 1 }, then: [
            { n: "He didn't take her bag. He didn't say anything. He just moved round to the traffic side without seeming to move at all." },
            by([
              { n: "And Akihiko walked on her other side, because she was his, and because he lived there, and because he'd sooner have run into the bay than walk behind, and she held his hand anyway, her right in his left, and walked between the two of them and felt the strangest thing, which was that neither of them was wrong to be there, and that she had no idea how she'd ever explain that to anybody, herself least of all." }
            ], [
              { n: "Akihiko walked on her other side, close enough that their sleeves brushed, looking straight ahead the whole way like a man in a race he hadn't entered, and twice he started to say something, and twice he didn't." }
            ], [
              { n: "Akihiko ran circles round both of them, literally, in the road, twice, shouting split times, and Haechan watched him go round with an expression of deep and total bafflement and said, low, *is he always like this*, and she said yes, and Haechan said *huh*, in a voice that was almost fond." }
            ])
          ] },
          { t: "(Walk between them. Make them both carry something.)", then: [
            { n: "She handed Akihiko her bag and Haechan her umbrella and walked between them with her hands free for the first time all day, and each of them carried what he'd been given like it was a job, and at the dorm door they both reached for the handle at once, and stopped, and she went in under both their arms." },
            { s: 'haechan', f: 'neutral', t: "...She does this." },
            { s: 'akihiko', f: 'neutral', t: "She does this." },
            { n: "They looked at each other for one second, two men who'd just learned the same thing about the same person, and it wasn't friendship, quite, but it lived in the same building." }
          ] }
        ] }
      ] },

    /* ── 4. The tower. One covers her; the other sees it. ── */
    { id: 'cr-ah-the-gap', who: 'akihiko', crush: BOTH, slot: 'late', when: 'tartarus', after: '12/6', until: '1/12', events: ['a4-household-introductions', 'a5-haechan-awakens'],
      place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Back from the tower, two in the morning, and the lounge had that after-the-tower hush where everybody was too tired to go up and too wired to sit still, and Solar was on the sofa with her boots still on, playing the thirty-eighth floor back behind her eyes." },
        { n: "It had come out of the wall on her blind side. She'd been mid-heal, half turned, and she'd heard it before she saw it, and before she'd even begun to turn Akihiko was already there, between her and it, fists up, taking the first blow across his forearms and the second across his ribs. And through the gap he'd left under his own left arm, a line of light, clean, from the far end of the corridor, that put the thing on the floor before it could swing a third time." },
        { n: "Now Akihiko was at the table with his shirt rucked up, taping his own ribs, badly, one-handed. Haechan came out of the kitchen with two things from the fridge, a can of coffee for himself and, for Akihiko, one of the protein shakes off the shelf nobody else was allowed to touch, and set it on the table in front of him without a word." },
        { s: 'akihiko', f: 'surprised', t: "...That's mine." },
        { s: 'haechan', f: 'neutral', t: "I know. Protein." },
        { n: "It wasn't a name this time. Or it was, and something else as well. Akihiko looked at the shake, and then at him." },
        { s: 'akihiko', f: 'neutral', t: "You took the shot. Through the gap." },
        { s: 'haechan', f: 'neutral', t: "You left one." },
        { s: 'akihiko', f: 'neutral', t: "I always leave one. Somebody's supposed to use it. Nobody ever does." },
        { s: 'haechan', f: 'serious', t: "You were in front of her before I saw the thing move. I was looking right at her." },
        { s: 'akihiko', f: 'neutral', t: "So was I. That's how." },
        by([
          { n: "He said it simply, the way he said everything true, and went back to the tape, and Haechan watched him for long enough that the not-saying became its own sentence." },
          { s: 'haechan', f: 'neutral', t: "...Good. Keep doing that." },
          { s: 'akihiko', f: 'serious', t: "I wasn't going to stop." },
          { s: 'haechan', f: 'neutral', t: "I know. I'm saying it so it's said." }
        ], [
          { n: "He said it, and then heard it, and went red from the collar up and taped faster, and Haechan let it go by, which was its own kind of courtesy, and looked over at the sofa only once, at her, very briefly, and then at the window." }
        ], [
          { s: 'akihiko', f: 'happy', t: "Next time I'll leave the gap on purpose. You take it. We'll practice." },
          { s: 'haechan', f: 'neutral', t: "We're not practicing." },
          { s: 'akihiko', f: 'happy', t: "We're practicing." }
        ]),
        { ifCrush: H('dating'), then: [
          { n: "Neither of them said whose she was. It sat on the table between the tape and the shake, and both of them left it exactly there, and it was the most polite thing she had ever watched two men do." }
        ] },
        { choose: [
          { t: "(Get up. Take the tape. Do his ribs properly.)", crush: { akihiko: 1 }, then: [
            { n: "She got up, boots and all, and took the tape out of Akihiko's hand, and he let her and lifted his arm, and she wrapped it the way he'd shown her in June, firm and flat, and Haechan reached over and held the loose end down with one finger at exactly the right moment, without being asked, and the three of them finished it together, and nobody said anything about that either." }
          ] },
          { t: "(Thank Haechan for the shot.)", crush: { haechan: 1 }, then: [
            { s: 'solar', f: 'neutral', t: "Thank you. For the shot." },
            { s: 'haechan', f: 'neutral', t: "Thank him. I only used the gap." },
            { n: "Akihiko didn't look up from the tape. The tips of his ears went pink. He drank half the shake in one go, which, she would learn, was how he said *you're welcome* to two people at once." }
          ] },
          { t: "(Stay where you are. Let them have it.)", then: [
            { n: "She stayed on the sofa with her eyes half shut and let them have it. After a while Haechan pulled out the chair across from Akihiko and sat down in it, and they drank, coffee and protein, in silence, two men at two in the morning who had looked at the same girl in the same second and moved, and had both, she thought, just found out that the other one would too." }
          ] }
        ] },
        { n: "When she went up, both cans were in the recycling, rinsed, side by side, and she stood looking at them for longer than anybody should look at recycling." }
      ] },

    /* ── 5. The late talk. January into February; she hears it from the stairs. ── */
    { id: 'cr-ah-two-mugs', who: 'haechan', crush: BOTH, slot: 'late', when: 'quiet', after: '1/10', until: '2/24', flags: ['year-goes-on'],
      events: ['a4-household-introductions', 'a5-haechan-awakens'],
      place: 'Iwatodai Dorm · Stairs', time: 'Late Night', bg: 'iwatodaidorm-hallway', scene: [
        { n: "One in the morning, and she came down the back stairs in her socks for water and stopped four steps from the bottom, because the kitchen light was on and there were two voices in it, low, and she knew both of them, and neither was talking the way he talked when she was in the room." },
        { n: "Through the gap in the door: Akihiko at the table in a hoodie, a mug. Haechan against the counter, a mug. The kettle still ticking as it cooled. Neither looking at the other. They had the air of two people who'd sat in silence for a long time and had only now started talking because the silence had got too heavy to hold." },
        { s: 'akihiko', f: 'neutral', t: "Can I ask you something. You don't have to answer." },
        { s: 'haechan', f: 'neutral', t: "You're going to ask anyway." },
        { s: 'akihiko', f: 'neutral', t: "What is she? To you." },
        { n: "The kettle ticked. Four steps up in the dark, she stopped breathing." },
        { n: "He answered in Korean first, low, to his mug, a short sentence she shouldn't have understood and did, and then heard himself, and said it again." },
        { s: 'haechan', f: 'neutral', t: "...The only reason I sleep. Either place. Don't ask me which one of me is translating." },
        { s: 'haechan', f: 'neutral', t: "You?" },
        { s: 'akihiko', f: 'neutral', t: "The reason I get up." },
        by([
          hc([
            { s: 'akihiko', f: 'sad-2', t: "She told me. Herself. Before I could see it on somebody's face." },
            { s: 'haechan', f: 'neutral', t: "Yeah. She would." },
            { s: 'akihiko', f: 'sad-2', t: "I keep waiting to be angry at you." },
            { s: 'haechan', f: 'sad', t: "Take your time. I've got a lot of it." },
            { s: 'akihiko', f: 'serious-3', t: "I'm not going anywhere." },
            { s: 'haechan', f: 'neutral', t: "I know. I'm not either. That's the whole thing, Protein. Neither of us is the problem." }
          ], [
            { s: 'akihiko', f: 'neutral', t: "You could've made it hard." },
            { s: 'haechan', f: 'neutral', t: "I could've." },
            { s: 'akihiko', f: 'neutral', t: "Why didn't you?" },
            { s: 'haechan', f: 'neutral', t: "She looks at you like you're the clock she sets everything else by. I'm not taking that off anybody." },
            { n: "Akihiko looked into his mug for a long time." },
            { s: 'akihiko', f: 'sad-2', t: "...You're still in the laundry room at three." },
            { s: 'haechan', f: 'neutral', t: "Somebody's got to fold her uniforms. You fold like a man who's been hit in the head. Which, to be fair." }
          ], [
            { s: 'haechan', f: 'neutral', t: "I'm not going to do anything about it." },
            { s: 'akihiko', f: 'sad-2', t: "I know. That's what makes it hard. If you did something, I'd know what to do." }
          ])
        ], [
          hc([
            { s: 'akihiko', f: 'sad-2', t: "I kept waiting for the right time. To say something to her." },
            { s: 'haechan', f: 'neutral', t: "There isn't one. You just say it." },
            { s: 'akihiko', f: 'neutral', t: "That what you did?" },
            { s: 'haechan', f: 'neutral', t: "No. She did." },
            { n: "Akihiko laughed, once, very quietly, the sound of a man taking a punch he'd watched coming since November and choosing to take it on the chin." },
            { s: 'akihiko', f: 'neutral', t: "...Good. That's like her." }
          ], [
            { s: 'haechan', f: 'neutral', t: "You should tell her." },
            { s: 'akihiko', f: 'blushing', t: "You should." },
            { s: 'haechan', f: 'neutral', t: "I did. My way. She stayed on her side of the dryer." },
            { s: 'akihiko', f: 'surprised', t: "...Oh." },
            { s: 'haechan', f: 'neutral', t: "Don't look at me like that. It's allowed. Your turn." }
          ], [
            { s: 'akihiko', f: 'neutral', t: "Are you going to say something to her?" },
            { s: 'haechan', f: 'neutral', t: "Are you?" },
            { n: "Neither of them answered. The kettle ticked." }
          ])
        ], [
          hc([
            { s: 'akihiko', f: 'serious', t: "If you ever," },
            { n: "He stopped. She watched him stop, through the gap in the door, the brake going on in him the way it had on a windy roof in September, and leave the sentence where it was." },
            { s: 'haechan', f: 'neutral', t: "Yeah. Me too. If I ever." },
            { s: 'akihiko', f: 'happy', t: "Good. Then we understand each other." }
          ], [
            { s: 'akihiko', f: 'happy', t: "So we're the two idiots who got the best friend job." },
            { s: 'haechan', f: 'neutral', t: "Speak for yourself. I've got it in two places." },
            { s: 'akihiko', f: 'neutral', t: "...Is it a good job?" },
            { s: 'haechan', f: 'neutral', t: "Best one I've ever had. Don't tell her." }
          ], [
            { s: 'akihiko', f: 'neutral', t: "Does she know?" },
            { s: 'haechan', f: 'neutral', t: "She knows. She's just not done knowing." },
            { s: 'akihiko', f: 'neutral', t: "...That's the most you've ever said to me." },
            { s: 'haechan', f: 'neutral', t: "Don't get used to it." }
          ])
        ]),
        { choose: [
          { t: "(Go back up. They'll never know.)", then: [
            { n: "She went back up one stair at a time, on the outside edges where they didn't creak, the way you learn to in a house full of people, and lay in bed with her heart going and no water. In the morning both of them said good morning to her at breakfast exactly the way they always did. Neither of them ever knew." }
          ] },
          { t: "(Put your weight on the step that creaks.)", then: [
            { n: "It creaked. In the kitchen both of them stopped at once, the way a song stops when somebody lifts the needle." },
            { s: 'akihiko', f: 'surprised', t: "...Solar?" },
            { s: 'haechan', f: 'neutral', t: "She wants water. Left cupboard." },
            { n: "She came down. Akihiko got a glass from the left cupboard and Haechan filled it at the sink and handed it to her, and neither of them asked how long she'd been on the stairs, and she didn't say, and the three of them stood in the kitchen at one in the morning and talked about the weather, and the weather had never meant so much." }
          ] }
        ] },
        { n: "In the morning there were two mugs on the drying rack, upside down, handles out, side by side, the way somebody had once taught one of them, and the other one had watched." }
      ] },

    /* ── 6. Solar talks to Haechan about Akihiko (before his rank 8). ── */
    { id: 'cr-ah-the-step', who: 'haechan', crush: BOTH, slot: 'late', when: 'quiet', after: '11/20', until: '12/16', events: MET,
      place: 'Iwatodai Dorm · Front', time: 'Late Night', bg: 'iwotodaidorm-outside', scene: [
        { n: "Past midnight, and the front step was the only place in the building you could be outside without being on the roof, and he was on it, black hoodie, elbows on his knees, unwrapping a stick of gum one-handed. Cinnamon. The silver paper folded small and tucked into his pocket the way he always did it, as though somebody might be keeping count." },
        { n: "She sat down. Not next to him; on the step above. He didn't turn round." },
        { s: 'haechan', f: 'neutral', t: "You've got something you want to say. You've been carrying it up and down the stairs all week. It's heavy. I can hear it." },
        by([
          { s: 'solar', f: 'serious', t: "I'm with Akihiko." },
          { s: 'haechan', f: 'neutral', t: "I know." },
          { s: 'solar', f: 'serious', t: "I know you know. I'm saying it because it's true, and because you're the only person in this building who never asks me anything, so I have to tell you things." },
          { n: "He folded the gum paper again, smaller." },
          { s: 'haechan', f: 'neutral', t: "He runs at five. He comes back at six and checks your shoes are on the rack before he takes his own off. Every day. I've watched him do it." },
          { s: 'haechan', f: 'neutral', t: "That's a good man, sweetheart. I don't have to like it to know it." },
          { s: 'solar', f: 'sad', t: "Then what is this?" },
          { s: 'haechan', f: 'neutral', t: "This is me sitting on a step. You can walk past it. People walk past steps all the time." },
          { n: "She didn't walk past it. That was the thing. She'd come down to tell him and she'd told him, and she was still sitting on the step above his, close enough to smell the cinnamon, and she couldn't have explained why to Akihiko or to herself or to anyone. She loved Akihiko. That wasn't the part that was in question. It had never been the part that was in question." }
        ], [
          { s: 'solar', f: 'neutral', t: "What do you think of Akihiko?" },
          { s: 'haechan', f: 'neutral', t: "Protein? He's waiting for you like a bus he knows the timetable for. He's been standing at the stop since spring." },
          { s: 'solar', f: 'flustered', t: "That's not what I," },
          { s: 'haechan', f: 'neutral', t: "You asked. Next you're going to ask what I think about you and him, and I'm not answering that one." },
          { s: 'solar', f: 'neutral', t: "Why not?" },
          { s: 'haechan', f: 'sad', t: "Because I'm not neutral. I'd be a bad referee." }
        ], [
          { s: 'solar', f: 'neutral', t: "Akihiko asked me if you're okay. He says you don't eat at the table." },
          { s: 'haechan', f: 'neutral', t: "He asked you. Not me." },
          { s: 'solar', f: 'happy', t: "He's scared of you." },
          { s: 'haechan', f: 'happy', t: "He's not scared of anything. He's scared of not being sure. Different." },
          { s: 'haechan', f: 'neutral', t: "He's the only one in there who doesn't look at me like a ghost. He looks at me like a heavy bag. It's restful." },
          { s: 'solar', f: 'neutral', t: "He's my best friend." },
          { s: 'haechan', f: 'neutral', t: "Yeah. I've seen you two. He'd fight a train for you and never once ask you to say thank you. Keep him." }
        ]),
        { choose: [
          { t: "(Stay on the step. Don't explain.)", crush: { haechan: 1 }, then: [
            { n: "She stayed. He didn't ask why. After a while he held the pack of gum up over his shoulder without turning round, and she took a piece, and they sat there chewing cinnamon in the cold with the dorm asleep behind them, and she didn't explain anything, and he let her not." }
          ] },
          { t: "I can't explain you. I've tried.", crush: { haechan: 1 }, then: [
            { s: 'haechan', f: 'neutral', t: "Don't. I can't explain me either. I've had two lives to try." },
            { n: "Then, almost too low to hear, he said something in Korean that meant *it's fine*, or *it isn't your fault*, or both, and she understood it, and didn't ask him to say it again in English." }
          ] },
          { t: "(Go in. Say goodnight from the door.)", crush: { akihiko: 1 }, then: [
            { n: "She got up. At the door she said goodnight and he said it back without turning round. Upstairs, at the end of the boys' corridor, a light was still on under a door, and she stood in the hall outside it for a second and didn't knock, and went to bed knowing exactly whose light it was." }
          ] }
        ] }
      ] },

    /* ── 7. Solar talks to Akihiko about Haechan (after Haechan's rank 8). Five a.m., the river. ── */
    { id: 'cr-ah-river', who: 'akihiko', crush: BOTH, slot: 'early', after: '12/19', until: '1/24', events: MET,
      place: 'Iwatodai · Riverside', time: 'Early Morning', bg: 'park-2', scene: [
        { n: "Five in the morning, the winter gone hard and blue, the river path white with frost and empty except for the two of them and a heron standing on one leg in the shallows like something left out overnight. They ran the first bridge without talking. At the second bridge she slowed, and he slowed a step after her, and looked across, his breath going up." },
        { s: 'akihiko', f: 'neutral', t: "You've been carrying something since last night. I can see it in your stride. ...You don't have to." },
        { s: 'solar', f: 'serious', t: "I want to." },
        { choose: [
          { t: "(Stop. Tell him to his face.)", crush: { akihiko: 1 }, then: [
            { n: "She stopped, and so did he. It was the only way she knew how to say anything to him, and in a way he'd taught it to her: some things you said with your face." }
          ] },
          { t: "(Keep running. Tell him at a pace, side by side.)", then: [
            { n: "She kept going, and he fell in beside her, and she said it to the path in front of them between breaths, because some things were easier to say at a pace, and he'd taught her that too." }
          ] }
        ] },
        by([
          hc([
            { s: 'solar', f: 'serious', t: "Something happened. With Haechan. In the laundry room. I said his name, and I didn't stay on my side of the room, and I'm telling you because you'd never ask me, and I won't have you find it out from somebody's face." },
            { n: "For a long time the only sound was the river going over the stones. She watched it go into him, all of it, the way a body shot goes in, and watched him not throw anything back." },
            { s: 'akihiko', f: 'sad-3', t: "...Did you mean it?" },
            { s: 'solar', f: 'sad', t: "Yes." },
            { s: 'solar', f: 'serious', t: "And I mean you. Both of those are true and I don't know how, and I'm not going to lie to you about either one." },
            { s: 'akihiko', f: 'sad-2', t: "Okay." },
            { s: 'akihiko', f: 'serious-3', t: "I'm not going to make you choose on a riverbank at five in the morning. I'm not that guy. I'm trying very hard not to be that guy." },
            { s: 'akihiko', f: 'sad-4', t: "But I'm going to run the rest by myself. Just today." },
            { n: "He went. She let him. At the third bridge, a long way ahead, she saw him stop and stand there and wait for her anyway, jogging on the spot with his back to her, not looking round, which was the most Akihiko thing she had ever seen and the thing she loved him most for." }
          ], [
            { s: 'solar', f: 'serious', t: "There's something with Haechan I can't explain. I'm with you. I chose that. I said his name and I stayed where I was. But it's there. It's always there, and I wanted you to hear it from me." },
            { s: 'akihiko', f: 'neutral', t: "I know. I've seen it. Since the first breakfast." },
            { s: 'solar', f: 'sad', t: "Are you angry?" },
            { s: 'akihiko', f: 'sad-2', t: "No. I'm scared. That's different." },
            { s: 'akihiko', f: 'neutral', t: "I'll be over it by the next bridge. Probably. Give me two bridges." },
            { n: "He held out his hand, and she took it, and they did the rest of the way like that, badly, out of step, the way they ran on the mornings one of them had given the other a glove." }
          ], [
            { s: 'solar', f: 'serious', t: "It's Haechan. There's something there I can't explain. I'm with you. I wanted you to hear the rest from me, before you heard it anywhere else." },
            { s: 'akihiko', f: 'neutral', t: "...Thanks for telling me first. Nobody ever tells me anything first." }
          ])
        ], [
          hc([
            { s: 'solar', f: 'serious', t: "I'm with Haechan. I wanted you to hear it from me, not from Junpei's notebook." },
            { n: "She watched it go into him like a body shot he'd seen coming since November and had decided to take." },
            { s: 'akihiko', f: 'neutral', t: "...Good. He'd better be good to you." },
            { s: 'akihiko', f: 'sad-2', t: "He is. I've seen it. That's the annoying part." },
            { s: 'akihiko', f: 'happy', t: "Five tomorrow. That doesn't change. Nothing changes about five." }
          ], [
            { s: 'solar', f: 'serious', t: "I told Haechan to stay on his side of the dryer. The surest thing I've ever felt, and I said no to it, and I don't know why." },
            { s: 'akihiko', f: 'surprised', t: "..." },
            { s: 'akihiko', f: 'neutral', t: "Do you want to know why?" },
            { n: "She looked at him. He looked at her. The heron lifted off the water, slow and enormous, like a decision being put off, and neither of them said the next thing." }
          ], [
            { s: 'solar', f: 'serious', t: "It's Haechan. I can't explain it." },
            { s: 'akihiko', f: 'neutral', t: "You don't have to explain it to me. I just run here." }
          ])
        ], [
          hc([
            { s: 'solar', f: 'serious', t: "I'm with Haechan." },
            { s: 'akihiko', f: 'happy', t: "I KNOW. Everybody knows. Junpei lost forty yen." },
            { s: 'akihiko', f: 'serious', t: "Is he good to you?" },
            { s: 'solar', f: 'happy', t: "He's good to me." },
            { s: 'akihiko', f: 'happy', t: "Then he can stay. Tell him I said so. Tell him I'm watching his left." }
          ], [
            { s: 'solar', f: 'serious', t: "I said his name, and I stayed where I was. And I keep thinking about it. I don't know if I did the right thing." },
            { s: 'akihiko', f: 'neutral', t: "You don't have to know yet. That's allowed. Remember?" },
            { s: 'akihiko', f: 'happy', t: "Twenty minutes on the shampoo." }
          ], [
            { s: 'solar', f: 'serious', t: "It's Haechan." },
            { s: 'akihiko', f: 'happy', t: "Yeah. I know. I've got eyes." }
          ])
        ]),
        { n: "The sun came up behind the station. The frost went off the benches in long dark stripes. Five tomorrow didn't change. Nothing about five ever changed." }
      ] },

    /* ── 8. Junpei and Yukari in the lounge. The pool. ── */
    { id: 'cr-ah-notebook', who: 'akihiko', crush: BOTH, slot: 'evening', after: '11/10', until: '12/10', events: MET,
      place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
        { n: "Junpei had a notebook. This was the first sign. Junpei did not own a notebook for school; he owned one for this, a small spiral one with a baseball on the cover, and he was perched on the arm of the sofa writing in it with the furious concentration of a man doing his taxes, while Yukari sat at the other end with a magazine and the face of a woman who had already been told what was in the notebook and wished she hadn't." },
        { s: 'junpei', f: 'happy', t: "Leader! Perfect timing. Okay. Hypothetically." },
        { s: 'yukari', f: 'serious', t: "Junpei, don't." },
        { s: 'junpei', f: 'happy', t: "Hypothetically. If two guys were on the roof at the same time three nights running, and neither of them would leave first, and one of them's doing push-ups and the other one's doing, like, nothing, aggressively," },
        by([
          { s: 'junpei', f: 'happy', t: "what are the odds senpai challenges him to a duel before Christmas? Not a fight! A duel. With rules. Senpai loves rules." },
          { s: 'yukari', f: 'serious', t: "It's disgusting. You're betting on your own senpai's relationship." },
          { s: 'junpei', f: 'happy', t: "I'm betting on his self-control. That's sports." },
          { s: 'yukari', f: 'neutral', t: "...I said the twelfth." }
        ], [
          { s: 'junpei', f: 'happy', t: "when does somebody say something? Not who. I'm not asking who. When. The pool's open. Fuuka put in a hundred yen and then apologized to the hundred yen." },
          { s: 'yukari', f: 'serious', t: "This is the grossest thing that has ever happened in this dorm, and a dog lives here." },
          { s: 'yukari', f: 'neutral', t: "...Put me down for after exams." }
        ], [
          { s: 'junpei', f: 'happy', t: "look, I'm not saying anything. I'm saying the new guy folds your laundry, leader. I've seen the pile. The corners. Nobody folds corners." },
          { s: 'yukari', f: 'serious', t: "Junpei, she can see you writing her name." },
          { s: 'junpei', f: 'happy', t: "I'm writing the DATE. The name's implied!" }
        ]),
        { n: "On the stairs somebody came down, stopped, and went back up again, hood up, without a word, and all three of them watched him go." },
        { s: 'junpei', f: 'surprised', t: "...He heard that." },
        { s: 'yukari', f: 'serious', t: "Of course he heard that. You were yelling." },
        { choose: [
          { t: "Put me down for never.", then: [
            { s: 'junpei', f: 'surprised', t: "That's not a category." },
            { s: 'yukari', f: 'neutral', t: "Write it down. It's a category now. ...Actually, put a hundred yen on never for me. Just so I can watch you lose." }
          ] },
          { t: "(Take the notebook. Read it.)", then: [
            { n: "She took it out of his hands. It was three pages. The first was a table. The second was a drawing of the roof with two stick figures at either end and a little heart in the middle with a question mark inside it. The third just said *SENPAI'S EARS*, with a list of dates." },
            { s: 'junpei', f: 'flustered', t: "...That's research." }
          ] },
          { t: "(Ask Yukari what she actually thinks.)", then: [
            { s: 'yukari', f: 'neutral', t: "Honestly?" },
            { n: "She put the magazine down, and for a second the disgust came off her face like a coat taken off indoors." },
            { s: 'yukari', f: 'neutral', t: "Honestly, I think everybody in this building wants something from you right now, and I think you're tired, and if either of them makes it harder for you I'll kill him. That's what I think." },
            { s: 'yukari', f: 'blushing', t: "...Also the push-ups are really loud. Tell senpai." }
          ] }
        ] },
        { n: "That night she found a hundred-yen coin on her pillow with a sticky note on it: *refund. sorry leader. J.* By lunch the next day it was back in the pool." }
      ] },

    /* ── 9. Hyein and Hanni. Hyein nearly says it. ── */
    { id: 'cr-ah-sheet-masks', who: 'haechan', crush: BOTH, slot: 'evening', after: '11/12', until: '12/20', events: MET,
      place: "Iwatodai Dorm · Solar's Room", time: 'Evening', bg: 'solar-dormroom-night', scene: [
        { n: "Hyein had come in with a box of sheet masks the size of a shoebox, bought at the drugstore on the strip with what Hanni called *the joy of a woman who has found her people*, and now the three of them were sitting on Solar's bed with wet paper faces like three small ghosts at a sleepover, and Hyein was talking through hers, which the box specifically said not to do." },
        { s: 'hyein', f: 'happy', t: "Okay, but the thing about this dorm is the boys are SO tall. Everyone's tall. Senpai's tall. Junpei's tall, which is honestly a waste." },
        { s: 'hanni', f: 'neutral', t: "Hyein." },
        { s: 'hyein', f: 'neutral', t: "I'm being objective. I'm a fashion major. Proportions are my job." },
        by([
          { s: 'hyein', f: 'happy', t: "And senpai looks at you like you're the last onigiri. Sol. He waits outside the bathroom with your towel. I saw it. He holds it like a flag." },
          { s: 'hanni', f: 'happy', t: "He's sweet. He's really sweet, Sol. You're different when he's in the room. You stand like you're not on guard." },
          { n: "Solar's face did something under the mask that the mask was very good at hiding." }
        ], [
          { s: 'hyein', f: 'happy', t: "And senpai, Sol. Senpai. He timed you on the stairs. With a stopwatch. That's a love language." },
          { s: 'hanni', f: 'neutral', t: "That's a boxing language." },
          { s: 'hyein', f: 'neutral', t: "Same thing!" }
        ], [
          { s: 'hyein', f: 'happy', t: "And senpai's like the dorm's golden retriever. I said I was hungry and he brought me a protein bar. Like a cat bringing you a bird." },
          { s: 'hanni', f: 'happy', t: "That's nice." },
          { s: 'hyein', f: 'neutral', t: "It tasted like a shoe." }
        ]),
        { s: 'hyein', f: 'neutral', t: "But honestly? Back home, if anybody saw you and Hae— if anybody had seen you two on Halloween, after what we literally did for you in that hallway," },
        { n: "Hanni peeled her own sheet mask off in one long wet motion and pressed it flat over the bottom half of Hyein's face, mouth and all, and held it there with her palm." },
        { n: "Hyein made a noise into the wet paper that in a cartoon would have been a row of little symbols." },
        { s: 'hanni', f: 'neutral', t: "She's going to stop talking now. Because she promised. On her sewing machine." },
        { s: 'hyein', f: 'flustered', t: "...Mmf." },
        { s: 'solar', f: 'neutral', t: "What hallway?" },
        { s: 'hanni', f: 'serious', t: "A hallway. There are a lot of them, back home." },
        { s: 'hanni', f: 'neutral', t: "Sol. Whatever you remember, you remember. Whatever you don't, you don't. We're not going to hand you a version of yourself. That one's yours to find." },
        { ifCrush: A('dating'), then: [
          { s: 'hanni', f: 'neutral', t: "And you love him. Senpai. Anybody can see it. That's real too. Two things can be true. It's allowed." },
          { n: "Hyein, under the mask, nodded so hard it slid off her chin." }
        ], else: [
          { s: 'hanni', f: 'neutral', t: "And whoever it turns out to be, here or there, you'll know. You always know before you say it. You just say it very, very late." }
        ] },
        { choose: [
          { t: "(Peel the mask off Hyein's mouth. Let her finish.)", crush: { haechan: 1 }, then: [
            { n: "She reached over and peeled it back. Hyein took a huge breath, opened her mouth, looked at Hanni, looked at Solar, and closed it again." },
            { s: 'hyein', f: 'sad', t: "...I can't. I promised. It's better if you get there yourself. It's SO much better. Ugh. I hate being a good person." }
          ] },
          { t: "(Slap your own mask onto Hanni's forehead. Fair's fair.)", then: [
            { n: "She peeled hers off and slapped it onto Hanni's forehead, and Hanni shrieked, and Hyein got free and laughed so hard she fell off the bed, and whatever she'd been about to say went under the bed with her, with the box of masks and one odd sock, and stayed there." }
          ] },
          { t: "Is it about Haechan?", crush: { haechan: 1 }, then: [
            { n: "Both of them went very still, two ghosts on a bed." },
            { s: 'hanni', f: 'neutral', t: "...Ask him." },
            { s: 'hyein', f: 'flustered', t: "Don't ask him. He'll do the face." },
            { s: 'hanni', f: 'neutral', t: "He'll do the face. Ask him anyway." }
          ] }
        ] },
        { n: "They left at eleven, still bickering down the corridor, and Solar lay back with her skin tingling and her heart doing something it had no business doing over a sheet mask, and thought about a hallway she couldn't see, and fell asleep before she'd decided whether she wanted to." }
      ] },

    /* ── 10. Dinner. The household notices. ── */
    { id: 'cr-ah-curry', who: 'akihiko', crush: BOTH, slot: 'evening', after: '11/20', until: '1/6', events: MET,
      place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom', scene: [
        { n: "Dinner was curry, because Fuuka had decided this autumn that a house this full needed one thing it could count on and the thing was curry, and the dining-room table had never been built for this many people. Elbows. Somebody's knee. Koromaru doing laps underneath, collecting." },
        { ifEvent: 'a5-haechan-awakens', then: [
          { n: "Akihiko was across from her. Haechan was at the end nearest the stairs, in the chair Fuuka had set for him every night for a month, which he sat in now, since the tower, as though the tower had been the argument and he'd lost it." }
        ], else: [
          { n: "Akihiko was across from her. Haechan was at the counter with his bowl, standing, a step behind her chair, where he ate every night, as though the counter were a seat with a better view." }
        ] },
        { s: 'aigis', f: 'neutral', t: "Solar-san. Akihiko-san has refilled your water four times since we sat down. You have taken two sips." },
        { s: 'akihiko', f: 'surprised', t: "It's a dry curry." },
        { s: 'aigis', f: 'neutral', t: "It is a wet curry. And Haechan-san moved the soy sauce to your side of the table before you sat down. He did not look at it while he did so. Or at you." },
        { s: 'haechan', f: 'neutral', t: "It was in the way." },
        { s: 'aigis', f: 'neutral', t: "It was not in the way. Two people are making small adjustments around you. I find it very interesting. It is like weather." },
        { s: 'fuuka', f: 'sad', t: "Aigis, maybe we don't... I'm sorry. I can't help it either. It's Lucia. When the house is this full I can hear everybody, it's like a choir, and there are two of them that skip a beat when you come in. I'm not saying whose! I'm not! I'm sorry!" },
        { s: 'yunjin', f: 'happy', t: "Where I'm from we'd call this a weekend drama. Two episodes. I'd watch it." },
        { s: 'ken', f: 'neutral', t: "Is this about sports? Is somebody playing a sport?" },
        { s: 'mitsuru', f: 'neutral', t: "Fuuka. Aigis. Eat." },
        { n: "That was all she said. She went back to her curry with the composure of a woman reading a balance sheet, and at the end of the meal she stood, without any fuss, picked up her plate, and sat back down in the empty chair between Akihiko's and the end of the table, between the two of them, and stayed there through the tea, and nobody said a word about that either." },
        by([
          { s: 'mitsuru', f: 'neutral', t: "Akihiko. I've moved Saturday's strategy meeting to the afternoon. I assumed you'd be at the library with Solar in the morning." },
          { s: 'akihiko', f: 'blushing', t: "...You moved a meeting?" },
          { s: 'mitsuru', f: 'neutral', t: "I moved a meeting." }
        ], [
          { n: "Mitsuru glanced once at Akihiko over her teacup, a glance like a pen tapped once on a desk, and he went red to the hairline and looked at his curry, and she looked away, satisfied, as if a column had added up." }
        ], [
          { n: "Mitsuru caught Solar's eye across the table, once, and something in her face said *I see it, and I won't say it, and if you need me to say it, I will*, and then she asked Ken about his homework." }
        ]),
        { n: "Koromaru came out from under the table and lay down across Solar's feet, heavily, with a sigh, like a dog who'd decided to take a side and had picked hers." },
        { choose: [
          { t: "(Drink the water. All of it.)", crush: { akihiko: 1 }, then: [
            { n: "She drank the whole glass in one go and put it down empty. Akihiko refilled it. Aigis said *five*. The whole table laughed, even Haechan, once, through his nose, into his bowl, and Akihiko laughed hardest, red to the ears, and didn't refill it again for the rest of the night, and kept looking at it." }
          ] },
          { t: "(Slide the soy sauce back toward Haechan.)", crush: { haechan: 1 }, then: [
            { n: "She slid it back down the table. He watched it arrive. Then, very slowly, without looking at her, he pushed it back. Two centimeters. Toward her side. Aigis said, with enormous satisfaction, *there*." }
          ] },
          { t: "Aigis. What does it mean, when people do that?", then: [
            { s: 'aigis', f: 'neutral', t: "I have been trying to determine that. I have three hypotheses." },
            { s: 'aigis', f: 'happy', t: "I am going to keep observing. I will let you know." },
            { s: 'ken', f: 'neutral', t: "Please don't." }
          ] }
        ] }
      ] }
  );

  /* ── The world reacts: both tracks. Lines for the spots she sees every day (core.js crushLine). ── */
  const NOV = { after: '11/8', until: '12/17' }, BUILD_OR_DATING = ['dating', ...P.BUILD];
  add('home', [
    { t: "Home. Two pairs of shoes by the door that hadn't been there in October: Haechan's, scuffed white at the toes and laced loose so he never had to bend, and right beside them, lined up very straight as if in competition, Akihiko's running shoes, which used to live at the other end of the rack.", crush: { akihiko: P.ASKED, haechan: P.BUILD }, ...NOV }
  ]);
  add('evening.sub', [
    { t: "Akihiko is doing push-ups on the lounge floor. Haechan is on the stairs above him with his headphones on, not watching. Every so often Akihiko does one more than he needed to. What now?", crush: { akihiko: P.ASKED, haechan: P.BUILD }, ...NOV },
    { t: "There's a spiral notebook with a baseball on the cover on the coffee table. Junpei closes it when you come in. Yukari opens it again to show you, then shuts it, disgusted, and goes on reading over his shoulder. What now?", crush: { akihiko: P.BUILD, haechan: P.BUILD }, after: '11/10', until: '12/17' }
  ]);
  add('late.battled', [
    { t: "Back from the tower. On the stairs Akihiko took the step below her and Haechan the step above, without anybody arranging it, and she went up the whole flight between them like something being carried carefully, and nobody said goodnight until the landing, and then both of them did, at once.", crush: { akihiko: P.ASKED, haechan: P.ASKED }, after: '12/6' },
    { t: "Back from the tower. Akihiko was asleep on the sofa with an ice pack on his ribs, and on the table beside him a can of coffee nobody had seen anybody leave, unopened, the way you'd leave a thing for somebody who'd done something you didn't have the words for.", crush: { akihiko: P.ASKED, haechan: P.ASKED }, after: '12/7' }
  ]);
  add('late.plain', [
    { t: "Two in the morning. Through the floor, very faint, the dryer started, and somewhere along the boys' corridor a door opened, listened, and closed again. She lay in the dark knowing exactly who had opened it and exactly what he'd heard, and that he wouldn't go down, and that the dryer would go on anyway.", crush: { akihiko: BUILD_OR_DATING, haechan: P.BUILD }, ...NOV },
    { t: "She lay awake. From the kitchen, two low voices and the tick of a kettle, too quiet to make out, and then a laugh she knew and, a second after it, a laugh she was still learning, and she fell asleep before she could decide which one had started it.", crush: { akihiko: P.ASKED, haechan: P.ASKED }, months: [1, 2] }
  ]);
  add('study', [
    { t: "She studied in the dining room. At ten a protein bar appeared at her left elbow, and a minute later a stick of cinnamon gum at her right, and neither boy was in the room by the time she looked up, and she sat there between the two offerings like a small roadside shrine.", crush: { akihiko: P.ASKED, haechan: P.BUILD }, ...NOV }
  ]);
  add('chatter.morning', [
    { t: "She came in with Sanada-senpai again. And the boy from her dorm walked them to the gate. The one who isn't a student. He just stood there till the bell.", crush: { akihiko: BUILD_OR_DATING, haechan: P.BUILD }, ...NOV },
    { t: "Is the boy at the gate her brother? He's not her brother. Nobody looks at a sister like that. Sanada-senpai saw him too. He ran a lap of the field about it.", crush: { akihiko: P.ASKED, haechan: P.BUILD }, after: '11/10', until: '12/17' }
  ]);
  add('chatter.lunch', [
    { t: "The fan club had an emergency meeting about 'the boy at the dorm.' Ōta says she isn't worried. She brought a whiteboard.", crush: { akihiko: BUILD_OR_DATING, haechan: P.BUILD }, after: '11/8', until: '12/20' },
    { t: "Everybody knows the transfer girl's with Sanada-senpai. So who's the boy with the headphones who waits at the station? Somebody's cousin? Nobody's cousin looks like that.", crush: { akihiko: 'dating', haechan: P.ASKED }, after: '11/10', months: [11, 12, 1] }
  ]);

  /* ── Texts: the dorm's group chat and the sisters. Solar texts S.E.E.S. lowercase. ── */
  const T = window.FEMC_GAME_TEXTS;
  if (!T) return;
  const J = t => ({ from: 'junpei', t }), Y = t => ({ from: 'yukari', t }), F = t => ({ from: 'fuuka', t });
  (T.ambient ||= []).push(
    { id: 'cr-tx-ah-agasshi', thread: 'sees', from: '11/12', to: '12/8', flag: 'arrived-haechan', crush: { akihiko: 'dating', haechan: P.BUILD }, msgs: [
      J("senpai just asked me what 'agasshi' means"), Y('why would YOU know'),
      F("i looked it up!! it's like 'miss'. like a polite young lady"), J("he said 'polite' and went to do push ups. we're on 80")
    ], reply: [
      { t: 'tell him its fine', crush: { akihiko: 1 }, then: [J('he says ok'), J("he's still doing them")] },
      { t: 'how many now', then: [Y('junpei stop counting'), J('112. FUUKA WRITE IT DOWN')] },
      { t: '(Leave it on read.)', silent: true, then: [F('sorry leader!! :(')] }
    ] },
    { id: 'cr-tx-ah-roofpool', thread: 'sees', from: '11/14', to: '12/10', flag: 'arrived-haechan', crush: { akihiko: P.BUILD, haechan: P.BUILD }, msgs: [
      J('POOL UPDATE. new category: the roof'), J('senpai and the new guy were BOTH up there at 1am. neither left first. i waited til 2'),
      Y('you waited til 2??? where. on the STAIRS??'), J('for SCIENCE'), F("maybe they both just like the roof...")
    ], reply: [
      { t: 'maybe they like the roof', then: [J('nobody likes a roof that much leader')] },
      { t: 'who left first', then: [J("the new guy. 2:10. he said 'night protein'"), Y('PROTEIN??'), J("i'm calling him that now"), Y('you are absolutely not')] }
    ] },
    { id: 'cr-tx-ah-door', thread: 'sisters', from: '11/16', to: '12/14', flag: 'arrived-haechan', crush: { akihiko: P.ASKED, haechan: P.BUILD }, msgs: [
      { from: 'hyein', t: 'hyein: senpai held the front door for u and hae' }, { from: 'hyein', t: 'hyein: and then HE held it for senpai' },
      { from: 'hanni', t: 'hanni: hyein' }, { from: 'hyein', t: 'hyein: im just saying there was a LOT of door holding' }
    ], reply: [
      { t: 'it was a door', then: [{ from: 'hyein', t: 'hyein: it was NOT just a door' }, { from: 'hanni', t: 'hanni: it was just a door sol. ignore her' }] },
      { t: 'who held it longer', crush: { haechan: 1 }, then: [{ from: 'hyein', t: 'hyein: HAECHAN. by like a whole second' }, { from: 'hanni', t: 'hanni: why are we timing this' }] },
      { t: '(Leave it on read.)', silent: true, then: [{ from: 'hanni', t: 'hanni: good. ignore her' }] }
    ] },
    { id: 'cr-tx-ah-handshake', thread: 'sees', from: '12/7', to: '12/20', flag: 'arrived-haechan', events: ['a5-haechan-awakens'], crush: { akihiko: P.ASKED, haechan: P.ASKED }, msgs: [
      J('the pool is CLOSED'), J('they shook hands'), Y('they did NOT shake hands'),
      J('senpai put a protein shake in front of him and he DRANK it. thats a handshake in boy'), F("i think that's really nice!!")
    ], reply: [
      { t: 'it was nice', then: [Y("fuuka's right. don't tell junpei i said that")] },
      { t: 'who won the pool', then: [J('nobody. its a draw'), Y("you can't have a draw in a pool junpei"), J('you can in THIS pool')] }
    ] }
  );
})();
