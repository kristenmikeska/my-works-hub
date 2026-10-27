/* Jungwon's crush track (2026-10-23, the multi-romance batch): the moments, his world lines and his texts. The track itself
   is in crush.js (opt-in 10/15-12/5; crush after 10/24, puppy after 11/6, almost after 11/20; his rank 8 on 12/9 is the
   romance turn; another link's romance settles it into 'faded'). Format: core.js "Crushes".
   The engine: he knows her completely and she doesn't know him. He asks her things he already knows the answers to, so
   she gets to answer them herself; he catches himself in the habits of somebody who's allowed, and apologizes. He is her
   boyfriend in one life (since a bake sale, the Friday before exam week) and her fiancé in the other (a date she didn't pick), and here
   he holds himself back because she doesn't remember, and is polite about it, which is how you can tell it's killing him.
   What Solar knows when: the vice presidency from his ranks (2, 6); the arranged one from his awakening (11/28, he says it
   out loud in the tower); the chosen one only from Jihoon at the crane game (12/16, a5-call-hoax). His friends know and
   have been asked not to say.
   Opt-in: 'cr-jw-optin' (free: only while she isn't with anyone), the council room after school, 10/16-12/5.
   Build-up (Oct-Dec): library (Junpei), station, the dorm dining room (shared), the shrine playground, the guesthouse
   lobby with his friends (shared), a Tartarus night after his awakening (shared), the council room in the cold (almost).
   After 12/16: 'cr-jw-boyfriend' (shared; dating / building / friend / out, and ifTaken). January (year-goes-on): two
   shared moments. Shared moments gate on ASKED and branch with `by()`; `taken()` is the gracious branch when she's with
   someone else. He and Haechan are never friends. Nothing here changes his link. */
(() => {
  const C = window.FEMC_GAME_CRUSH, P = C.phases, add = C.add;
  const J = ph => ({ jungwon: ph }), WARM = n => ({ jungwon: n });
  // dating (his romance route) · still building · a friendship (faded, or said no / missed it)
  const by = (dating, building, friend) => ({ ifCrush: J('dating'), then: dating, else: [{ ifCrush: J(P.FRIEND), then: friend, else: building }] });
  // she's with someone else (some other link's romance route)
  const taken = (yes, no) => ({ ifTaken: 'jungwon', then: yes, else: no });

  C.moments.push(
    /* ── The opt-in: tea in the council room. He asks how she takes it. He already knows. ── */
    { id: 'cr-jw-optin', who: 'jungwon', optIn: 'jungwon', free: true, slot: 'after', after: '10/16', until: '12/5', schoolOnly: true,
      events: ['a4-council-room'], place: 'Gekkoukan High · Student Council Room', time: 'After School', bg: 'gekkoukan-student-council', scene: [
        { n: "The council room after school had become, without anyone deciding it, the place her feet went when the last bell rang. It wasn't a decision, per se. It was the stairs. The stairs went up, and the council room was at the top of them, and the light in it was always on, long after Mitsuru's meetings had ended and the corridor had emptied out and gone cold." },
        { n: "He was at the window end of the long table with the kettle going, the terrible kettle, which ticked and muttered on its base like an old man reading a newspaper, and two cups set out on two saucers that didn't match, because the council room owned eleven saucers and no two of them had ever been introduced." },
        { s: 'jungwon', f: 'neutral', t: "Good afternoon. I've boiled too much water. Would you like some tea?" },
        { n: "He'd boiled exactly enough water for two cups. She could see the line through the side of the kettle." },
        { s: 'jungwon', f: 'neutral', t: "How do you take it?" },
        { n: "He asked it the way he asked everything, courteously, his head inclined one degree toward her, and then he waited, with the sugar bowl in one hand and the little spoon in the other, and the kettle clicked off, and he went on waiting, and it came to her slowly, the way you notice a clock has stopped, that he already knew." },
        { n: "He knew. It was in the spoon, already tipped toward a second sugar it hadn't been asked for. He knew, and he was asking anyway, and he was going to stand there with the spoon in the air until she told him herself, because she didn't know him, and a girl who didn't know him had the right to be asked." },
        { choose: [
          { t: "(Tell him. Then watch what his hand does.)", crush: J('in'), then: [
            { s: 'solar', f: 'neutral', t: "Two. No, one. ...Two." },
            { n: "He put in one and a half. A level spoon and then half of one, without a word, and stirred it exactly three times, and set it on her saucer with the handle turned toward her right hand, and she drank it, and it was right. It was so precisely right that she put the cup down and looked at it as though it had said her name." },
            { s: 'solar', f: 'surprised', t: "...You knew." },
            { s: 'jungwon', f: 'happy', t: "I asked." }
          ] },
          { t: "(Ask him how you take it. See what he does.)", crush: J('in'), then: [
            { s: 'solar', f: 'neutral', t: "You tell me." },
            { s: 'jungwon', f: 'surprised', t: "..." },
            { n: "The spoon stopped. For a second his whole face went still, the stillness she was starting to understand was the opposite of calm, and then the dimples came up over it like a blind being drawn." },
            { s: 'jungwon', f: 'happy', t: "I couldn't possibly. We've only just met." },
            { n: "He put in one and a half sugars anyway, looking at the window while he did it. It was perfect, and he knew it was perfect, and he stood there being polite about it with his back very straight, and she had the strangest feeling she'd just watched somebody carry something very heavy past her in a corridor and say *excuse me.*" }
          ] },
          { t: "(Two sugars. Drink it. He's being kind to someone new.)", crush: J('out'), then: [
            { n: "She said two, and he put in two. Exactly what she asked for and nothing else, and set the cup down, and went back to the budget, and she drank it at the long table while the light went orange, and it was a little too sweet, and she didn't mind, and she didn't think about it again." }
          ] }
        ] },
        { ifCrush: J(P.BUILD), then: [
          { n: "She stayed until the sky over the courtyard went from gold to the cold blue of the first lamps. He worked. She pretended to read. Every time she set the cup down he looked up at the saucer, only the saucer, and then back at his page, as though he were keeping count of something on her behalf." },
          { n: "On the stairs going down she realized she'd learned three things about him in an hour and he'd learned nothing at all about her, because he didn't need to, and it made her want, unreasonably, specifically, to go back up and be asked something else." }
        ], else: [
          { n: "She stayed until the lamps came on, because the room was warm and the tea was fine, and when she left he stood, and bowed, and thanked her for coming, as if she'd been a guest at something. She supposed she had." }
        ] }
      ] },

    /* ── Noticed / crush: the library, Junpei's quiz, and a preview. ── */
    { id: 'cr-jw-preview', who: 'jungwon', crush: J(P.BUILD), slot: 'after', after: '10/20', until: '11/22', schoolOnly: true,
      place: 'Gekkoukan High · Library', time: 'After School', bg: 'school-library', scene: [
        { n: "Junpei had failed a math quiz so completely that the teacher had handed it back to him folded, the way you'd hand a letter to the family, and by Thursday he'd done the unthinkable and asked the student council boy for help, in the corridor, loudly, holding his cap in both hands." },
        { n: "So the library at four was Junpei and Jungwon at the table by the window with the quiz between them, and Solar at the same table with her own homework, because it was the table with the window, and that was the only reason, and she'd have said so to anyone who asked, and nobody asked." },
        { s: 'jungwon', f: 'neutral', t: "Iori-san. This isn't a two." },
        { s: 'junpei', f: 'neutral', t: "It's a two if you squint." },
        { s: 'jungwon', f: 'happy', t: "I don't squint. It's a seven. You've built an entire answer on a seven that's pretending to be a two. That isn't mathematics. That's fraud." },
        { n: "Forty minutes later Junpei sat back in his chair with the stunned, betrayed face of a man who'd been tricked into learning something." },
        { s: 'junpei', f: 'surprised', t: "Wait. I get it. Dude. I GET it. I hate that I get it." },
        { n: "Solar had been stuck on the same problem for twenty of those minutes. She hadn't said so. Jungwon hadn't looked at her page once, not once in forty minutes, which for a boy who corrected the dress code of people walking past open doors took visible effort; she could see it taking effort, the way his eyes went everywhere on the table except the left side of it." },
        { n: "Then he slid a sheet across to Junpei. A worked example in his neat slanted print, and one line of it circled in red, a sign flipped and flipped back, with a tiny arrow beside it." },
        { s: 'junpei', f: 'neutral', t: "That's not my mistake. I didn't even get that far." },
        { s: 'jungwon', f: 'neutral', t: "Then it's a preview." },
        { n: "Junpei looked at the sheet. He looked at Solar's page. He looked at Jungwon, who was studying the window with great interest, and Junpei's whole face went slow and delighted, like a sunrise over something stupid." },
        { choose: [
          { t: "(Ask him properly. Out loud. In front of Junpei.)", crush: WARM(1), then: [
            { s: 'solar', f: 'flustered', t: "Can you show me? Number six." },
            { n: "He went still for a second, the way he did, and then he came round the table and sat beside her, not too close, and took her page, and talked her through it in a low even voice while Junpei watched them like a man watching a nature program." },
            { s: 'junpei', f: 'happy', t: "Oh, she gets the side-by-side. I got across-the-table." },
            { s: 'jungwon', f: 'neutral', t: "You get what you've earned, Iori-san." }
          ] },
          { t: "(Fix the sign on your own page. Slide it back without a word.)", crush: WARM(1), then: [
            { n: "She fixed it and slid her page across, and he looked down at it at last, and his pen hovered, and he didn't make a mark, and then, very small, he did. A tick in the margin. Exactly as big as it needed to be." },
            { s: 'jungwon', f: 'neutral', t: "That's very good. That's Iori-san's preview. He'll want it back." }
          ] },
          { t: "(Take the sheet and thank Junpei for it.)", then: [
            { s: 'solar', f: 'happy', t: "Thanks, Junpei." },
            { s: 'junpei', f: 'surprised', t: "I didn't DO anything." },
            { s: 'jungwon', f: 'happy', t: "He did very little. He should be proud of it." }
          ] }
        ] },
        { n: "On the way out Junpei walked beside her and said nothing for a whole corridor, which for Junpei was a medical event, and at the shoe lockers he leaned on the door of his and looked at her." },
        { s: 'junpei', f: 'neutral', t: "He didn't look at your page once, you know. Not one time. I was watching him not look. It was like watching a guy not look at a cake." }
      ] },

    /* ── Crush: the station at seven. A corner by a mailbox, somewhere else. ── */
    { id: 'cr-jw-station', who: 'jungwon', crush: J(P.UP), slot: 'early', after: '10/27', until: '11/30', schoolOnly: true,
      place: 'Iwatodai Station', time: 'Early Morning', bg: 'iwatodai-station', scene: [
        { n: "Ten past seven, and the station had the clean cold smell of the first hour of the day, the shutters going up on the shops underneath it and the salarymen going through the ticket gates in a long gray tide, and by the vending machines, in a navy blazer that wasn't anyone's here, stood Jungwon, with a can of hot coffee in each hand, like a man who'd been asked to hold them by someone who was coming back." },
        { s: 'jungwon', f: 'neutral', t: "Good morning. I'm conducting a study." },
        { s: 'solar', f: 'neutral', t: "Of what?" },
        { s: 'jungwon', f: 'neutral', t: "The trains. They leave on the second. I've been timing them since six. It's very restful. Nothing at home leaves on the second." },
        { n: "He held out one of the cans. The guesthouse was a block away, and Gekkoukan didn't want him until four, and there was no reason in the world for him to be standing in the station at seven in the morning with two coffees unless the reason was the girl he'd just handed one to." },
        { s: 'jungwon', f: 'neutral', t: "At home you walk. Your road meets mine at a corner with a mailbox on it. I'm there at seven-forty. You're there at seven fifty-two, and annoyed, and you say *you don't have to wait for me*, and I say I'm not waiting, I'm standing." },
        { n: "He stopped. He looked at the can in his own hand as though it had spoken out of turn in a meeting." },
        { s: 'jungwon', f: 'flustered', t: "I'm sorry. That's a great deal of information about a mailbox." },
        { ifEvent: 'a4-ice-cream', then: [
          { n: "Jihoon came through the ticket gates the other way with his hood up and his earbuds in and a convenience-store bag swinging from one finger, wearing the face of a man who had not slept wherever he was supposed to, and saw them, and didn't stop walking." },
          { s: 'jihoon', f: 'neutral', t: "Yang. It's seven in the morning. Get a hobby." },
          { s: 'jungwon', f: 'happy', t: "This is my hobby." },
          { s: 'jihoon', f: 'serious', t: "Yeah. That's what worries me." },
          { n: "He went off toward the guesthouse. The dimples stayed out a while after he'd gone, and went, slowly, from sweet to tired." }
        ] },
        { choose: [
          { t: "You don't have to wait for me.", crush: WARM(1), then: [
            { n: "It came out before she'd decided to say it, in exactly the tone he'd described, a little annoyed, a little fond, and he went so still that a man with a briefcase had to step around him." },
            { s: 'jungwon', f: 'neutral', t: "I'm not waiting. I'm standing." },
            { n: "He said it on cue, word for word, and heard himself say it, and so did she, and for a second they were two people at a corner neither of them could see, and the second went on a good deal longer than seconds are meant to." }
          ] },
          { t: "(Walk to the gates with him. Drink the coffee on the way.)", crush: WARM(1), then: [
            { n: "They walked to the ticket gates together through the gray tide, not talking, and he stopped at the barrier the way he stopped at the dorm gate, exactly at the line and not one step past it, and bowed, and she went through, and when she looked back from the platform stairs he was still standing there, timing nothing at all." }
          ] },
          { t: "(Thank him for the coffee. Catch the 7:16.)", then: [
            { n: "She thanked him and caught the 7:16, which left on the second. Through the window, as it pulled out, she could see him at the machines with his watch held up to the departures board, conducting his study, and he didn't look at the train once, very carefully." }
          ] }
        ] },
        { n: "On the monorail she held the can until it went cold, and then went on holding it across the whole bay, with no idea why, and at Gekkoukan she put it in her bag instead of the bin." }
      ] },

    /* ── Shared (November into December): tutoring night in the dorm, and the sweet-potato truck. ── */
    { id: 'cr-jw-yakiimo', who: 'jungwon', crush: J(P.ASKED), slot: 'evening', after: '11/8', until: '12/12', events: ['a4-household-introductions'],
      place: 'Iwatodai Dorm · Dining Room', time: 'Evening', bg: 'iwatodaidorm-diningroom', scene: [
        { n: "Tutoring nights had a shape by now. He arrived at seven with a bag of workbooks, said good evening to whoever was in the lounge by name and by title, set up at the end of the dining table nearest the radiator, and did not take off his blazer, because, he said, it wasn't his house." },
        { n: "At half past eight the sweet-potato truck came down the hill outside playing its song, the long wavering recorded call, *yaaaki-imo*, and Jungwon put his pen down in the middle of a sentence and listened to it the way you'd listen to somebody say your name from another room." },
        { s: 'jungwon', f: 'neutral', t: "Excuse me. I'll be four minutes." },
        { n: "He was six. He came back with his cheeks red from the cold and a paper bag held against his chest, steaming, and took out the sweet potatoes one at a time, each in its twist of newspaper, and set them in a row on the table. Eight. Nine. He'd counted the dorm. He'd counted it properly, Koromaru included, who got a small one, unwrapped, on a saucer, cooling." },
        { n: "He took Solar's and broke it in half without asking, so the steam came up gold, and set both halves on a napkin by her hand to cool, and then he looked at what his hands had done, and they stopped." },
        { s: 'jungwon', f: 'flustered', t: "I'm sorry. I did that without asking. That's a habit. From somewhere else. I'll ask, in future." },
        { ifEvent: 'a4-there-you-are', then: [
          { n: "Haechan came down the stairs, looked at the row of newspaper parcels, took the one at the end without breaking stride, and kept going toward the kitchen." },
          { s: 'jungwon', f: 'neutral', t: "Those were counted." },
          { s: 'haechan', f: 'neutral', t: "Count again." },
          { n: "Jungwon counted again. He got nine. He'd bought nine. He looked at the doorway Haechan had gone through with the expression of a man who had done a kindness for someone he'd sooner not have done one for, and been found out by arithmetic." }
        ] },
        by([
          { s: 'solar', f: 'happy', t: "You don't have to ask. You know that." },
          { s: 'jungwon', f: 'flustered', t: "...Noted." },
          { n: "She gave him the other half, because otherwise he wouldn't eat, and he ate it, and they finished it with their shoulders touching at the end of the table over a page of integrals, and when Junpei came through and said *aw* very loudly, Jungwon said *good evening, Iori-san* and didn't move away by a centimeter." },
          { choose: [
            { t: "(Steal the last bite off his napkin.)", then: [
              { s: 'jungwon', f: 'happy', t: "That was mine. That was the best part. You knew that." },
              { n: "She had known that. She didn't know how. He didn't seem to mind at all." }
            ] },
            { t: "(Write *you knew this* in his margin.)", then: [
              { n: "He looked at it for a long time, his own words in her messier hand, and then underlined them, twice, very neatly, as though they'd been entered into the record." }
            ] }
          ] }
        ], [
          { choose: [
            { t: "Don't ask. Keep doing it.", crush: WARM(2), then: [
              { s: 'jungwon', f: 'surprised', t: "..." },
              { s: 'jungwon', f: 'flustered', t: "...Noted. I'll. Yes. That's... noted." },
              { n: "He picked his pen up and wrote something in the wrong margin, and crossed it out, and his ears had gone red to the tips, and he didn't look up again until the integral was finished, and it took him a very long time for a boy who'd never lost a math competition." }
            ] },
            { t: "(Give him the other half. He hasn't eaten.)", crush: WARM(1), then: [
              { n: "He looked at the half she was holding out to him. Then he took it, carefully, the way you'd accept a document." },
              { s: 'jungwon', f: 'neutral', t: "You did that at home. Every time." },
              { s: 'jungwon', f: 'sad', t: "...Somebody did. Thank you." }
            ] },
            { t: "How did you know I like it split?", crush: WARM(1), then: [
              { s: 'jungwon', f: 'happy', t: "A lucky guess." },
              { s: 'solar', f: 'neutral', t: "You don't guess." },
              { s: 'jungwon', f: 'neutral', t: "No. I don't." }
            ] }
          ] }
        ], [
          taken([
            { n: "He took the second half and wrapped it back up in its newspaper, neatly, corners folded in, and set it by her elbow." },
            { s: 'jungwon', f: 'neutral', t: "Take that one upstairs with you, after. Someone will want it. It's the good end." },
            { n: "He said it kindly, and evenly, and then turned back to the integral and gave it his whole attention, more of it than an integral needs, and she understood that he'd decided where the habit was allowed to go, and that it hadn't been easy, and that he'd never once tell her so." },
            { choose: [
              { t: "Thank you, Jungwon.", then: [
                { s: 'jungwon', f: 'happy', t: "It's only a potato. Question eleven." }
              ] },
              { t: "(Eat yours. Let him have the quiet.)", then: [
                { n: "She ate hers. He worked. The radiator ticked. It was, she thought, the politest silence she'd ever sat in, and he'd built every inch of it himself." }
              ] }
            ] }
          ], [
            { s: 'junpei', f: 'happy', t: "He does that to mine too, you know. Splits it. Like I'm five." },
            { s: 'jungwon', f: 'neutral', t: "I've never touched yours, Iori-san." },
            { s: 'junpei', f: 'neutral', t: "...Okay, but it's the THOUGHT." },
            { choose: [
              { t: "(Split Junpei's for him. Like he's five.)", then: [
                { n: "She split Junpei's in half for him, and Junpei put a hand on his heart, and Jungwon laughed into his sleeve, the real one, and the three of them ate them at the end of the table over a page of integrals, like a committee nobody had elected." }
              ] },
              { t: "Question eleven, Jungwon.", then: [
                { s: 'jungwon', f: 'happy', t: "Question eleven. Thank you. Somebody in this house has to keep me on the agenda." }
              ] }
            ] }
          ])
        ])
      ] },

    /* ── Puppy love: the playground behind the shrine. A thing that's only theirs here. ── */
    { id: 'cr-jw-swings', who: 'jungwon', crush: J(P.PUP), slot: 'after', after: '11/14', until: '12/14', weather: ['clear', 'cloudy'],
      place: 'Naganaki Shrine', time: 'After School', bg: 'outside-shrine-day', scene: [
        { n: "There was a playground behind Naganaki, a small tired one with a slide gone pale from the sun and two swings on chains that sang a little when the wind went through them, and she'd only taken him that way because it was the short way down to the station, and he stopped." },
        { s: 'jungwon', f: 'neutral', t: "I've never been on one." },
        { s: 'solar', f: 'surprised', t: "A swing? Ever?" },
        { s: 'jungwon', f: 'neutral', t: "My parents considered playgrounds a liability. I believe there was a form. I was never told what was on it." },
        { n: "He sat down on the left-hand swing the way he sat down at the head of a table. Blazer buttoned. Feet flat on the ground. Both hands on the chains at precisely the same height, as if the swing were about to call the meeting to order." },
        { choose: [
          { t: "(Push him. Higher than he'd ever allow.)", crush: WARM(1), then: [
            { n: "She pushed. He held on with complete dignity for three pushes, his face composed, his knees together, and at the top of the fourth something came out of him all at once, the real laugh, the helpless one, up into the cold, and he said *that's enough, that's quite enough, that's*, and then, at the top of the fifth, *higher*." }
          ] },
          { t: "(Take the other swing. Race him to the top.)", crush: WARM(1), then: [
            { n: "She took the other swing and kicked off, and he watched her for one full arc, studying it, and then he did it, exactly, and caught her up, and for a while they went out of step, and then, because he timed everything, into it, side by side, the chains singing, the whole town tilting up and down behind the trees." },
            { s: 'jungwon', f: 'happy', t: "We're in phase. That's very satisfying. Nobody told me it would be satisfying." }
          ] },
          { t: "(Show him how. Legs out, lean back. Legs in.)", crush: WARM(1), then: [
            { n: "She stood in front of the swing and showed him with her hands, out and back, in and forward, and he listened the way he listened to budget reports, with his whole face, and then did it once, perfectly, and went sailing up past her with a look of total astonishment." },
            { s: 'jungwon', f: 'surprised', t: "That's all it is? That's elegant. Somebody should have told me it was only that." }
          ] }
        ] },
        { s: 'solar', f: 'neutral', t: "Did we do this? At home?" },
        { n: "He let the swing run down. He was quiet for the time it took, the arcs getting smaller, the chains going from singing to creaking, until his shoes scraped the dirt and he was still." },
        { s: 'jungwon', f: 'neutral', t: "No." },
        { s: 'jungwon', f: 'happy', t: "This one's new. I'd like to keep it, if that's all right. Somewhere neither of the others can get at it." },
        { n: "Afterward he walked her to the station with his hair blown sideways and didn't fix it, which she had never once seen, and she kept looking at it, at the one piece standing straight up at the back, and wanting to fix it for him the way you'd want to straighten a picture in somebody else's house, and not doing it, and wanting to, and not." }
      ] },

    /* ── Shared (November into December): the guesthouse lobby, and the committee. Sunoo nearly says it. ── */
    { id: 'cr-jw-committee', who: 'jungwon', crush: J(P.ASKED), slot: 'evening', after: '11/9', until: '12/20', events: ['a4-yeobos'],
      place: 'Kirijo Guesthouse', time: 'Evening', bg: 'kirijo-guesthouse-lobby', cast: { niki: 'Niki' }, scene: [
        { n: "Mitsuru had given her an envelope for *Yang-san*, forms to sign, and the guesthouse lobby at eight was warm and smelled of floor polish and somebody's instant noodles, and at the low table under the lamp there was a card game going that had clearly stopped being about the cards some time ago." },
        { s: 'sunoo', f: 'happy', t: "Solar! He's upstairs. He's ironing. He irons on Thursdays." },
        { s: 'niki', t: "He irons every day. On Thursdays he irons the stuff he already ironed on Monday." },
        { s: 'sunoo', f: 'happy', t: "Sit, sit! He'll be down in a minute. Niki, put your phone away." },
        { n: "Niki did not put his phone away. He turned it round and held it up to her face with the solemnity of a man presenting evidence." },
        { phone: [
          { from: 'niki', t: "rikiniki changed the group name to \"jungwon is POLITE (concerning)\"" },
          { from: 'sunoo', t: "sunshinesunoo: niki change it back" },
          { from: 'niki', t: "rikiniki: no. its a public health issue" }
        ], contact: 'jungwon is POLITE (concerning)' },
        { s: 'sunoo', f: 'sad', t: "He's being so polite to you. He was never polite to you. He yelled at you about your dog on the first day of school. In the street. Niki has a whole bit about it. And now he's all *good evening, would you care for a chair.* It's so sad. You two used to—" },
        { ifEvent: 'a4-ice-cream', then: [
          { s: 'jihoon', f: 'neutral', t: "Sunoo. Rule one." },
          { n: "Jihoon was lying on the lobby sofa with an arm over his eyes, and hadn't moved, and didn't move now." },
          { s: 'jihoon', f: 'happy', t: "Yang made us all promise. Not literally. Basically literally. He'd have made us sign something if he'd thought of it in time. It's honestly the most pathetic thing I've ever seen, and I've watched him eat soup." }
        ], else: [
          { n: "Sunoo stopped. He put his cards face down, very carefully, and looked at the stairs, the way you'd look at a teacher's door." }
        ] },
        { ifEvent: 'a4-cherry', then: [
          { s: 'cherry', f: 'serious', t: "Is the preppy freak still doing the bowing? He bowed to me in the hallway. I had a face mask on. A green one, Sol. He BOWED." }
        ] },
        { n: "Then the stairs creaked, and everyone at the low table became extremely interested in their cards." },
        { s: 'jungwon', f: 'neutral', t: "Good evening. I see you've met the committee." },
        { s: 'niki', t: "We're not a committee." },
        { s: 'jungwon', f: 'happy', t: "You keep minutes in the group chat and you have a president. It's Sunoo. He's very bad at it." },
        by([
          { n: "He took the envelope, and signed the forms on his knee, and then, instead of going back upstairs, sat down on the tatami beside her, close, his shoulder against hers, and the whole table groaned at once like a choir." },
          { s: 'niki', t: "Ugh. They're doing it. Even here. Even in the lobby." },
          { s: 'jungwon', f: 'happy', t: "Deal me in, please. The committee may note it." },
          { choose: [
            { t: "(Hold his hand under the table. Play one-handed.)", then: [
              { n: "She played one-handed and lost every hand, and so did he, and Sunoo won the whole pot and said it was the best night of his life, and meant it, she thought, for reasons that had very little to do with cards." }
            ] },
            { t: "(Read his cards out loud to the table.)", then: [
              { s: 'jungwon', f: 'flustered', t: "That's sabotage. That's a constitutional crisis." },
              { s: 'sunoo', f: 'happy', t: "That's what she always DOES!" }
            ] }
          ] }
        ], [
          { choose: [
            { t: "Sunoo said we used to. Used to what?", crush: WARM(1), then: [
              { n: "Sunoo looked at Jungwon. Jungwon looked at the envelope. Somewhere on the sofa, Jihoon laughed, once, into his arm." },
              { s: 'jungwon', f: 'happy', t: "Play cards. You used to beat me at cards, every time. Sunoo was going to tell you that." },
              { s: 'sunoo', f: 'flustered', t: "...Yes. Cards. That's exactly what I was going to say." },
              { n: "He was a terrible liar to people he liked. She'd been told that. She hadn't known until now that it was the nicest thing about him." }
            ] },
            { t: "(Deal yourself in. Leave him the seat beside you.)", crush: WARM(1), then: [
              { n: "She sat down at the low table and picked up a hand, and moved over, and left a space on the rug beside her exactly one person wide, and didn't look at it, and Jungwon looked at it for a long moment from the bottom of the stairs, and then came and sat in it, very straight, as though he'd been called to the front of a room." },
              { s: 'sunoo', f: 'happy', t: "Oh, I'm going to cry. Somebody deal. I'm going to cry and somebody has to deal." }
            ] },
            { t: "(Give him the envelope. Say goodnight.)", then: [
              { s: 'jungwon', f: 'neutral', t: "Thank you. Please tell Kirijo-san they're signed. I'll walk you to the corner." },
              { s: 'niki', t: "He'll walk you to the corner. He's never walked ME to the corner." }
            ] }
          ] }
        ], [
          taken([
            { n: "He took the envelope, and signed it standing, on the wall, and the table had gone quiet in a way it hadn't been a minute ago. Sunoo wasn't looking at her. Sunoo was looking at Jungwon, the way you'd look at somebody carrying a tray of glasses down a staircase." },
            { s: 'jungwon', f: 'happy', t: "Thank you for bringing it all this way. Sunoo, deal her in, if she'd like. She has somewhere to be after. I'm glad you're well, Solar. I mean that." },
            { choose: [
              { t: "(Play one hand. Then go.)", then: [
                { n: "She played one hand. Jungwon stood at the bottom of the stairs and watched it like a referee, pleasant and upright, and when she stood to go he bowed, and then went upstairs before she reached the door, and Sunoo walked her out instead, and on the step said only *he's okay. He's always okay. That's the problem with him,* and went back in." }
              ] },
              { t: "Goodnight, everyone.", then: [
                { s: 'niki', t: "Night. Come back. Seriously. He'll pretend he doesn't care. Come back anyway." }
              ] }
            ] }
          ], [
            { n: "He took the envelope, and signed it, and sat down at the table on the far side from her, and the cards came round, and he lost twice and won once and said the once was skill, and Niki said it was luck, and it was easy, the way it's easy with people who've already decided to like you." },
            { choose: [
              { t: "(Beat him. Twice.)", then: [
                { s: 'jungwon', f: 'flustered', t: "You're reading me. You've always— You're very good at this." },
                { s: 'niki', t: "She's our friend now. Shut up. She was already our friend. Deal." }
              ] },
              { t: "(Ask Niki how to get the group name changed.)", then: [
                { s: 'niki', t: "Two hundred yen and a croissant. Nonnegotiable." },
                { s: 'jungwon', f: 'neutral', t: "I'll pay it. I'll pay it twice." }
              ] }
            ] }
          ])
        ])
      ] },

    /* ── Shared (after his awakening): the incident report, at the gate, after the tower. ── */
    { id: 'cr-jw-incident', who: 'jungwon', crush: J(P.ASKED), slot: 'late', when: 'tartarus', after: '11/29', until: '12/20', events: ['a5-jungwon-awakens'],
      place: 'Iwatodai Dorm · Front', time: 'Late Night', bg: 'iwotodaidorm-outside', scene: [
        { n: "He'd taken to writing it down. Every night they came back from the tower, at the dorm gate, before he'd turn and walk back to the guesthouse alone, he took a small notebook out of his coat and went down the line in the porch light, one by one, like a teacher taking the register at the end of a school trip. He called it the incident report. Nobody had asked for one. Everybody stood still for it." },
        { s: 'jungwon', f: 'neutral', t: "Iori-san. Two bruises." },
        { s: 'junpei', f: 'neutral', t: "One of 'em I did to myself on the stairs. Don't write that." },
        { s: 'jungwon', f: 'happy', t: "I've written that." },
        { s: 'jungwon', f: 'neutral', t: "Solar. Are you hurt?" },
        { s: 'solar', f: 'neutral', t: "No." },
        { n: "He wrote *no*. Then he looked at her right wrist, which she'd been holding against her coat since the fourteenth floor without noticing, and didn't write anything else. He'd been on her left all night, the way he'd said he would be. It was her right." },
        by([
          { n: "He closed the notebook and took her wrist in both hands, very carefully, and turned it to the porch light, and pressed with two cold fingers until she winced, and then didn't let go." },
          { s: 'jungwon', f: 'serious', t: "This goes in the report. Under my name. Responsible party." },
          { s: 'solar', f: 'neutral', t: "You weren't responsible." },
          { s: 'jungwon', f: 'sad', t: "I was on your left. It was your right. I failed by the width of one person." },
          { choose: [
            { t: "(Put your forehead against his shoulder.)", then: [
              { n: "She leaned in and put her forehead against his shoulder, there at the gate, in front of the whole squad going up the steps, and he stood very still and let her, and somebody behind them, Junpei, said *aw* and got hit with a bag." }
            ] },
            { t: "Then stand on my right next time.", then: [
              { s: 'jungwon', f: 'flustered', t: "...I'll stand on both. I'll work out how. I've done harder things." }
            ] }
          ] }
        ], [
          { choose: [
            { t: "(Let him look at it.)", crush: WARM(1), then: [
              { s: 'jungwon', f: 'neutral', t: "May I?" },
              { n: "She nodded. He took her wrist the way you'd take something on loan from a museum, and turned it to the light, and pressed, gently, with two cold fingers, and then took a handkerchief out of his coat pocket, pressed and folded, of course it was pressed, and wrapped it round her wrist and tied it off with a knot that was a great deal more competent than it needed to be." },
              { s: 'jungwon', f: 'neutral', t: "Sprained. Not badly. I'll want that back, washed and ironed." },
              { s: 'jungwon', f: 'happy', t: "I'm joking. Keep it. I've got several. I've got a great many handkerchiefs and nobody to give them to." }
            ] },
            { t: "It's nothing. Write *no*.", crush: WARM(1), then: [
              { n: "He'd already written no. He looked at it on the page. Then, under it, smaller, he wrote something else, and closed the book before she could read it, and said goodnight to everyone, separately, and went." },
              { n: "In the morning there was a pharmacy bag hanging from the dorm's front door handle with a wrist support in it, her size, and a sticky note on the box in neat slanted print that said *no.*" }
            ] },
            { t: "(Go inside. Yukari will see to it.)", then: [
              { s: 'jungwon', f: 'neutral', t: "Yes. Takeba-san is better at it than I am." },
              { n: "He wrote *seen to* beside her name and underlined it, and then, as she went up the steps, he said *Solar*, and when she turned round he'd forgotten what he'd been going to say, or decided not to, and bowed instead." }
            ] }
          ] }
        ], [
          taken([
            { n: "He wrote *right wrist* under her name, and looked at it, and then closed the notebook on it with his thumb still in the page." },
            { s: 'jungwon', f: 'neutral', t: "Have someone look at that tonight. Someone who's allowed to fuss. I'd only make a report of it." },
            { n: "He said it pleasantly. Then he said goodnight to everyone, separately, in order, and went down the road toward the station, and at the corner, under the streetlight, she saw him stop and take the watch off his wrist and wind it, though it didn't run, the way you'd do something with your hands so you didn't have to do anything else with them." },
            { choose: [
              { t: "Goodnight, Jungwon!", then: [
                { n: "He lifted one hand over his shoulder without turning round. It looked, from the porch, almost exactly like somebody who was fine." }
              ] },
              { t: "(Go in. Let him have the corner.)", then: [
                { n: "She went in. The porch light clicked off on its timer behind her, and the street went dark, and she didn't look to see how long he stood there." }
              ] }
            ] }
          ], [
            { n: "He wrote *right wrist, minor* under her name, and Yukari took her inside to see to it, and Junpei leaned over Jungwon's shoulder and read the whole report out loud to the porch." },
            { s: 'junpei', f: 'happy', t: "*Takeba-san: nothing. Says she's fine. Is fine. Very annoying about it.* Dude. You wrote *very annoying.*" },
            { s: 'jungwon', f: 'neutral', t: "It's an accurate record." },
            { choose: [
              { t: "What did you write about me?", then: [
                { s: 'jungwon', f: 'happy', t: "*No. Lying.*" },
                { s: 'solar', f: 'neutral', t: "That's two words." },
                { s: 'jungwon', f: 'happy', t: "It's an accurate record." }
              ] },
              { t: "(Ask him to start a page for himself.)", then: [
                { s: 'jungwon', f: 'surprised', t: "...For me?" },
                { s: 'solar', f: 'neutral', t: "You've got a cut on your hand. Write it down." },
                { n: "He looked at his hand as though it belonged to someone who'd been very careless, and wrote it down, *Yang: hand*, in the smallest letters he owned." }
              ] }
            ] }
          ])
        ])
      ] },

    /* ── Almost: the council room in the cold. His blazer, her poster, and one syllable. ── */
    { id: 'cr-jw-blazer', who: 'jungwon', crush: J(['almost']), slot: 'after', after: '11/21', until: '12/20', schoolOnly: true,
      place: 'Gekkoukan High · Student Council Room', time: 'After School', bg: 'gekkoukan-student-council', scene: [
        { n: "The council room radiator had died on a Tuesday. Jungwon had filed a maintenance request, in triplicate, with a diagram, and the school had responded by sending nobody at all, and by Thursday the room was so cold that the tea went from scalding to tepid between one budget line and the next, and she'd been sitting with her hands up her own sleeves for twenty minutes." },
        { n: "He stood up, and took off his blazer, the navy one with the crest that wasn't anyone's here, and held it out to her without looking at her, the way he did things that cost him something." },
        { n: "It came down to her knuckles. It smelled of almost nothing, of pressed cotton and the terrible council-room tea, as though he'd been careful not to leave anything of himself in it, and it was very warm, and on the cabinet above her, propped where Mitsuru had left it in October, was the poster. VOTE SOLAR KIM. Glitter and a yellow sun and her own practiced smile, looking down at her sitting there in his school's crest." },
        { n: "He looked at her. Then he looked at the poster. Then at her again, and something happened to his face that she'd never seen happen to it, something with no courtesy in it at all, and he stood up so fast his chair scraped." },
        { s: 'jungwon', f: 'flustered', t: "Excuse me. I need to see to the kettle." },
        { n: "The kettle was on the table in front of him. He saw to it anyway, with great care, and then sat down and opened the minutes book and uncapped the red pen, because when he didn't know what to do with his hands he took minutes." },
        { s: 'jungwon', f: 'neutral', t: "Item four. The vice president is cold." },
        { s: 'solar', f: 'neutral', t: "I'm not your vice president." },
        { s: 'jungwon', f: 'neutral', t: "No." },
        { n: "He crossed it out. Neatly, one line, so it could still be read." },
        { s: 'jungwon', f: 'neutral', t: "Item four. A guest is cold." },
        { choose: [
          { t: "(Say his name. The short one. You don't know where you got it.)", crush: WARM(2), then: [
            { s: 'solar', f: 'neutral', t: "Won." },
            { n: "It came out of her without permission, one syllable, a name nobody in this world had ever used for him, and she had no idea where she'd learned it, and the red pen stopped in the middle of a letter." },
            { n: "He didn't look up. His face went completely still, the stillness she'd learned to read backward, and his hand on the page went white at the knuckles, and for a moment she thought he wasn't going to say anything at all." },
            { s: 'jungwon', f: 'sad', t: "Say it ag—" },
            { s: 'jungwon', f: 'neutral', t: "No. I'm sorry. Don't. Not until you know why you're saying it." },
            { s: 'jungwon', f: 'flustered', t: "I'm going to need a minute. I'm going to stand by the window and have it, if that's all right." },
            { n: "He stood by the window for a good deal longer than a minute, with his back to her and his hands folded behind him, very straight, looking at the courtyard, and she sat in his blazer under her own poster and didn't say it again, and it was the hardest thing she'd done all week." }
          ] },
          { t: "(Pull the blazer tighter. Don't offer it back.)", crush: WARM(1), then: [
            { n: "She pulled it tighter. He watched her do it out of the corner of his eye and wrote something down, and crossed it out, and wrote it again." },
            { s: 'jungwon', f: 'neutral', t: "Keep it until the radiator's fixed." },
            { s: 'solar', f: 'neutral', t: "That could be weeks." },
            { s: 'jungwon', f: 'neutral', t: "I've withdrawn the maintenance request." }
          ] },
          { t: "(Give it back. He'll be cold.)", crush: WARM(1), then: [
            { s: 'jungwon', f: 'neutral', t: "I'm from a cold place. Both of them are cold." },
            { n: "But he took it, and put it on, and it was warm from her, and she watched him notice that it was warm from her, halfway into the second sleeve, and go red, slowly, from the collar up, and button it to the top as if that would help." }
          ] }
        ] },
        { n: "She very nearly asked him then. What she was to him. What the word was that he kept not saying, the one that lived just behind every *excuse me*. She could feel it in the room like the cold coming through the glass. She didn't. He didn't. The kettle clicked off between them, and he poured, one and a half sugars, and they let it be another afternoon." }
      ] },

    /* ── After 12/16 (Jihoon at the crane game): what it's like once she knows. ── */
    { id: 'cr-jw-boyfriend', who: 'jungwon', crush: J(P.ASKED), slot: 'evening', after: '12/17', until: '1/8', events: ['a5-call-hoax'],
      place: 'Iwatodai Dorm · Front', time: 'Evening', bg: 'iwotodaidorm-outside', scene: [
        { n: "Jihoon had told her at the crane game, between one coin and the next, like a man dropping something off a bridge to see how long it took to land. *Your boyfriend.* It had landed. It had gone on landing for days." },
        { n: "And now Jungwon was at the bottom of the dorm steps in his coat, not ringing the bell, not texting, just standing there under the porch light with his hands at his sides, the way you'd stand outside an office where you knew the results had been posted." },
        { s: 'jungwon', f: 'neutral', t: "Good evening. Jihoon told you." },
        { s: 'jungwon', f: 'neutral', t: "The whole corridor heard him come back and tell me he'd told you. He was very pleased with himself. He was also crying. He's able to do both." },
        { n: "He'd said the other one out loud, in the tower, in front of everyone, like a line in a budget. The son who was to marry her in spring because two families had shaken hands. He'd said that one easily. This one he'd carried about for two months and never said once." },
        { s: 'solar', f: 'neutral', t: "Why didn't you tell me?" },
        { s: 'jungwon', f: 'neutral', t: "The other one, somebody decided for both of us. I could tell you that. It wasn't asking anything of you. It was only true." },
        { s: 'jungwon', f: 'sad', t: "This one you decided. At a bake sale, on a Friday, in front of everyone. If I'd told you, I'd have been telling you what you'd decided. I didn't want to decide it for you a second time." },
        by([
          { s: 'solar', f: 'happy', t: "Jihoon says you're my boyfriend." },
          { s: 'jungwon', f: 'neutral', t: "Yes. I'm aware. I was there for it." },
          { s: 'solar', f: 'happy', t: "At home, I mean." },
          { s: 'jungwon', f: 'flustered', t: "I was also there for that." },
          { n: "She came down the steps. He let her decide how close, the way he always did, and she decided all the way, and put her cold hands inside his coat, and he made a small undignified sound and didn't move." },
          { s: 'jungwon', f: 'happy', t: "You've said yes to me twice now. In two worlds. The second time without any idea of the first. I've been trying to work out what that means. I'm told I'm not allowed to make it a motion." },
          { choose: [
            { t: "Make it a motion.", then: [
              { s: 'jungwon', f: 'happy', t: "The motion is that the vice president has very cold hands. Seconded. Carried. Leave them there." }
            ] },
            { t: "Three times. If you count the other one.", then: [
              { s: 'jungwon', f: 'neutral', t: "I don't count that one. Nobody asked you that one." },
              { s: 'jungwon', f: 'neutral', t: "That's the whole trouble with it. This one, you asked to hear." }
            ] }
          ] }
        ], [
          { choose: [
            { t: "Were we happy?", crush: WARM(1), then: [
              { s: 'jungwon', f: 'neutral', t: "Yes." },
              { s: 'jungwon', f: 'happy', t: "For one weekend, and most of a Monday. It was a very good weekend. Then it was exams, and then it was here." },
              { n: "He said it with the dimples, as if it were funny, and it was funny, and she laughed, and then she stopped laughing, because one weekend was nothing, and he'd crossed a world on the strength of it." }
            ] },
            { t: "Ask me, then. Here. Now.", crush: WARM(2), then: [
              { s: 'jungwon', f: 'surprised', t: "..." },
              { s: 'jungwon', f: 'neutral', t: "No." },
              { s: 'jungwon', f: 'neutral', t: "Not because I don't want to. I want to so much I've had to stop walking past this house. Because I'd be asking a girl who's been told. I'd like to ask one who knows." },
              { n: "Then he held out his hand, palm up, at the bottom of the steps, under the porch light, the way you'd hold out your hand to help someone down from a height." },
              { s: 'jungwon', f: 'flustered', t: "I'll settle for this. For now. If that's all right." },
              { n: "She came down the steps and took it. His hand was cold and very still once she had it, as if all it had needed was somewhere to go." }
            ] },
            { t: "I don't know what to do with that.", then: [
              { s: 'jungwon', f: 'neutral', t: "You don't have to do anything with it. I've been carrying it fine. I'm told I'm very good at carrying things." },
              { s: 'jungwon', f: 'sad', t: "I only came to say I'm sorry you heard it from him. You should have heard it from somebody who'd say it properly. That was me. I didn't." }
            ] }
          ] }
        ], [
          taken([
            { s: 'jungwon', f: 'neutral', t: "It's true. I'd rather you'd heard it from me. And it doesn't oblige you to anything here. Nothing about it does." },
            { s: 'jungwon', f: 'happy', t: "You look happy. Lately. I wanted to say that, as well, while I was here. I'm glad of it. I mean that." },
            { n: "It was the most polite thing she'd ever heard him say. She'd learned by now what that meant." },
            { choose: [
              { t: "Does it hurt?", then: [
                { s: 'jungwon', f: 'neutral', t: "Yes. It's allowed to. I'll do it quietly." },
                { s: 'jungwon', f: 'happy', t: "Goodnight, Solar. Go in. You're in your socks." }
              ] },
              { t: "Thank you for telling me yourself.", then: [
                { s: 'jungwon', f: 'neutral', t: "Jihoon told you. I only confirmed it. I'm going to put it in the minutes as a joint statement. He'll hate that." }
              ] }
            ] }
          ], [
            { ifCrush: J('out'), then: [
              { s: 'jungwon', f: 'neutral', t: "It's true. That's all it is, here. A true thing about somewhere else. I'm not asking you for anything with it." },
              { s: 'jungwon', f: 'happy', t: "You can still have me as a tutor. I'm told I'm a very good one. Iori-san is passing everything. It's unsettling." }
            ], else: [
              { s: 'jungwon', f: 'neutral', t: "It's true. And it's all right that it's different here. I'd rather have you as a friend who knows than as a girl who's never been told. I've thought about it. I've had some time." }
            ] },
            { choose: [
              { t: "(Sit on the step. Make him sit too.)", then: [
                { n: "She sat down on the cold step and pointed at the space beside her, and he looked at it with the deep suspicion of a man who'd been told the dorm wasn't his house, and then sat, very straight, and they looked at the road together for a while, and it was, she thought, a good deal easier than she'd been afraid of." }
              ] },
              { t: "You should have told me.", then: [
                { s: 'jungwon', f: 'neutral', t: "Yes. I should have. I'm a coward about exactly one thing, and I've crossed a world to keep being one." },
                { s: 'jungwon', f: 'happy', t: "Don't tell Sunoo. He thinks I'm brave. It's the only thing keeping him from adopting me." }
              ] }
            ] }
          ])
        ])
      ] },

    /* ── January (year-goes-on), lighter, true to where it went: lunch for two. ── */
    { id: 'cr-jw-lunch-for-two', who: 'jungwon', crush: J(P.ASKED), slot: 'lunch', after: '1/9', until: '2/1', schoolOnly: true, flags: ['year-goes-on'],
      place: 'Gekkoukan High · Student Council Room', time: 'Lunch', bg: 'gekkoukan-student-council', scene: [
        { n: "The third term came in hard and clear and freezing, the bay flat as a sheet of tin under a white sky, and on the second week of it Solar found herself climbing the stairs to the council room at lunch with two bento from the school store, one more than she could eat, the second one chosen with a care she'd have been embarrassed to explain to anyone." },
        { n: "He was at the long table, of course, with the minutes book open and a pencil, and no lunch, of course, and he looked up when she came in and then at the two boxes in her hands, and didn't say anything for a moment." },
        by([
          { s: 'jungwon', f: 'neutral', t: "You used to do this. Lunch for two. You'd pretend the second one was a mistake." },
          { s: 'solar', f: 'happy', t: "It's not a mistake." },
          { s: 'jungwon', f: 'happy', t: "No. I know. I've known for some time." },
          { n: "He closed the minutes book and put it on the chair behind him, out of reach, which she had never once seen him do, and they ate at the long table with the heater ticking, their knees together under it, and he finished all of his, and then a little of hers, which he called an audit." },
          { choose: [
            { t: "(Let him audit it.)", then: [
              { s: 'jungwon', f: 'happy', t: "Your rolled egg is in excellent order. I'll recommend it to the committee." }
            ] },
            { t: "No minutes at lunch. New rule.", then: [
              { s: 'jungwon', f: 'neutral', t: "That's a very significant amendment. I'll need to think about it." },
              { s: 'jungwon', f: 'happy', t: "...Carried. I'm not writing it down. That's the point. I understand the point." }
            ] }
          ] }
        ], [
          { n: "He looked at the second bento for a long time, the way he'd looked at the croissant the first week, the way he looked at anything given to him without a form." },
          { s: 'jungwon', f: 'neutral', t: "You've done this before." },
          { s: 'solar', f: 'neutral', t: "Have I?" },
          { s: 'jungwon', f: 'sad', t: "...Somebody has. Thank you. I'll eat it. All of it. You can watch me, if you need to. Everybody seems to." },
          { choose: [
            { t: "(Watch him. All of it.)", crush: WARM(1), then: [
              { n: "She watched him eat all of it, and he knew she was watching, and ate it with the steady formal concentration of a man taking an oral exam, and at the end he set his chopsticks down parallel to the edge of the box and looked at her, and she gave it a tick in the air with one finger, and he laughed into his hand." }
            ] },
            { t: "(Eat yours. Talk about anything else.)", crush: WARM(1), then: [
              { n: "She talked about Junpei's new haircut and the cafeteria's war on melon pan and the second-year who'd fallen asleep in assembly, and he listened and ate, and somewhere in the middle of the melon pan he laughed, and it occurred to her that he'd eaten a whole lunch without noticing, which was, she suspected, the only way he ever would." }
            ] }
          ] }
        ], [
          taken([
            { s: 'solar', f: 'neutral', t: "Sunoo asked me to make sure you eat something. He was very specific." },
            { s: 'jungwon', f: 'happy', t: "He would be. He sends me a text at twelve every day. It says *EAT* in capital letters. Nothing else." },
            { n: "He took the bento with a small formal bow of the head, and ate it, and she ate hers across the table from him, and they talked about the third term and the cold and nothing at all, the way two people talk when one of them has decided exactly where the edges of a thing are and is keeping to them, kindly, without ever letting the other one see the effort." },
            { choose: [
              { t: "(Text Sunoo a photo of the empty box.)", then: [
                { s: 'jungwon', f: 'flustered', t: "That's surveillance." },
                { s: 'jungwon', f: 'happy', t: "...Send it. He'll cry. He likes to." }
              ] },
              { t: "Same time tomorrow?", then: [
                { s: 'jungwon', f: 'neutral', t: "I'll be here. I'm always here. That isn't a yes. It's just where I'll be." }
              ] }
            ] }
          ], [
            { ifEvent: 'a4-ice-cream', then: [
              { n: "Jihoon came in about four minutes later without knocking, smelled food, and sat down on the table itself, and took the lid off Jungwon's box and ate one of his rice balls before anyone could stop him." },
              { s: 'jihoon', f: 'happy', t: "Lunch for three. The almighty Hoon is a gracious guest." },
              { s: 'jungwon', f: 'neutral', t: "You're sitting on the budget." },
              { s: 'jihoon', f: 'neutral', t: "The budget's never been happier." }
            ] },
            { choose: [
              { t: "(Make Jungwon eat before anybody else touches it.)", then: [
                { n: "She put the box in front of him and her hand flat on the lid of the minutes book, and he looked at her hand, and the box, and said *that's coercion*, and ate it, and it was, she thought, the friendliest lunch she'd had in weeks." }
              ] },
              { t: "(Split it three ways.)", then: [
                { n: "She split it three ways, with her chopsticks, carefully, and both boys watched the division with the identical narrow attention of men who'd been raised to suspect a fair share, and for one moment, over a rice ball, they nearly agreed about something." }
              ] }
            ] }
          ])
        ])
      ] },

    /* ── January (year-goes-on): Bookworms. He haggles the way he gets angry: more and more politely. ── */
    { id: 'cr-jw-workbooks', who: 'jungwon', crush: J(P.ASKED), slot: 'after', after: '1/10', until: '2/1', flags: ['year-goes-on'],
      place: 'Iwatodai Strip · Bookworms', time: 'After School', bg: 'bookworms-inside', scene: [
        { n: "Bookworms in January was the warmest shop on the strip, a narrow cave of paper and paraffin heater with the old couple behind the counter under a blanket each, and Jungwon had been standing in front of the shelf of used study guides for eleven minutes with two calculus workbooks, one in each hand, weighing them like fruit." },
        { s: 'jungwon', f: 'neutral', t: "This one has the better problems. This one has the better margins. You write in the margins. It's a real dilemma." },
        { n: "He took them both to the counter, and the old man said a price, and Jungwon said, very politely, that the spine on the second one was cracked and the previous owner had done problems one through nine in pen, and that he'd be grateful for any consideration, and the old man said a lower price, and Jungwon thanked him, warmly, and said that problem twelve was also in pen, and the old woman under the second blanket began to laugh and couldn't stop." },
        by([
          { n: "He bought both. On the pavement outside, in the cold, he took the cap off a pen with his teeth and wrote on the inside cover of the second one, small, and handed it to her, and she read it under the streetlight. *You knew this.* And under it, smaller, *I knew you.*" },
          { choose: [
            { t: "(Write back in his. Same page.)", then: [
              { n: "She took his pen and his workbook and wrote on his inside cover, much larger, *EAT LUNCH*, with a heart she'd regret in the morning and wouldn't, and he read it, and put the workbook inside his coat, against his chest, the way you'd carry a letter." }
            ] },
            { t: "You're going to make me do every problem.", then: [
              { s: 'jungwon', f: 'happy', t: "Every problem. I'll be in the second row. I'll clap first." }
            ] }
          ] }
        ], [
          { n: "He bought both, and stood outside on the pavement holding them, and then held one out to her, the one with the better margins, and kept the other one himself, and she looked at it in his hand." },
          { s: 'solar', f: 'neutral', t: "What's that one for?" },
          { s: 'jungwon', f: 'neutral', t: "For me. So I'll know which page you're on. I'll do them alongside you. It's easier to check if I've done them too." },
          { choose: [
            { t: "That's the nicest thing anyone's ever said about calculus.", crush: WARM(1), then: [
              { s: 'jungwon', f: 'flustered', t: "It wasn't about calculus." },
              { s: 'jungwon', f: 'flustered', t: "...It was a little about calculus." }
            ] },
            { t: "(Write your name in his copy too. First name only.)", crush: WARM(1), then: [
              { n: "She took it and wrote *Solar* on the inside cover of his, first name only, in the box for the owner, and gave it back, and he looked at the name for a long time under the streetlight." },
              { s: 'jungwon', f: 'neutral', t: "That's the only part anyone ever gets wrong. You got it right." }
            ] }
          ] }
        ], [
          taken([
            { n: "He bought one. The good one. He put it in her hands and then, very deliberately, put his own hands in his coat pockets." },
            { s: 'jungwon', f: 'happy', t: "I've stopped doing the problems alongside you. I'm practicing. It's the only thing I've ever been bad at, stopping. Do one through ten by Friday and nobody will need to check them." },
            { choose: [
              { t: "Thank you, Jungwon.", then: [
                { s: 'jungwon', f: 'happy', t: "Thank the old man. He gave me forty percent off for being unbearable." }
              ] },
              { t: "You can still check them.", then: [
                { s: 'jungwon', f: 'neutral', t: "...If you ask. Only if you ask. I'm keeping that rule. It's a good rule." }
              ] }
            ] }
          ], [
            { n: "He bought both, and then went back in for a third, a thin one with a cartoon owl on the cover, *Math for Beginners (Fun!)*, and paid full price for it without a word." },
            { s: 'jungwon', f: 'neutral', t: "That one's for Iori-san. Don't tell him it's from me. He'll think it's a joke. It's not a joke. It's a strategy." },
            { choose: [
              { t: "(Give Junpei the owl at dinner. Say it's from you.)", then: [
                { n: "She gave Junpei the owl at dinner and said it was from her, and Junpei hugged it, and the next afternoon he was in the council room asking Jungwon about chapter two, and Jungwon looked at her across the table with a face of absolute innocence, which on him was the most suspicious face in the world." }
              ] },
              { t: "You're a good friend, you know.", then: [
                { s: 'jungwon', f: 'flustered', t: "I'm an adequate one. I'm working at it. I've had very little practice. At home I mostly had a committee." }
              ] }
            ] }
          ])
        ])
      ] }
  );

  /* ── The world reacts: the Gekkoukan buzz about the boy from another school in the council room, the dorm, her nights. ── */
  const AUT = { months: [10, 11, 12] }, LATE = { months: [12, 1, 2] };
  add('chatter.lunch', [
    { t: "There's a boy in the student council room after school who doesn't go here. Different blazer. Kirijo-senpai lets him use her desk. HER desk.", crush: J(P.BUILD), ...AUT },
    { t: "He told the kendo captain their armor budget was 'aspirational.' The kendo captain thanked him. Nobody knows why.", crush: J(P.UP), ...AUT },
    { t: "The transfer girl goes up to the council room every single day after school. Is she on the council now? Is HE?", crush: J(P.PUP), months: [11, 12] },
    { t: "The council-room boy carried both their bags out of the gate yesterday. Both bags. He bowed to the security guard.", crush: J('dating'), ...LATE },
    { t: "The boy from the council room bowed to the vending machine on the third floor. I saw him. He said thank you to it.", crush: J(P.ASKED), months: [11, 12, 1] }
  ]);
  add('home', [
    { t: "She went straight home. On the dorm steps somebody had left a paper bag from the bakery by the station with two croissants in it and a note in very neat print that said *one is not for you. eat both.*", crush: J(P.UP), months: [11, 12] }
  ]);
  add('evening.sub', [
    { t: "There are three math workbooks on the dining table with your name on a sticky note, in handwriting that makes a sticky note look like a legal document. What now?", crush: J(P.BUILD), ...AUT },
    { t: "Junpei says the student council guy rang the bell, asked if you'd eaten, and left before anybody could answer him. What now?", crush: J(P.PUP), months: [11, 12] }
  ]);
  add('late.plain', [
    { t: "Her phone lit up on the pillow at eleven fifty-eight. *goodnight.* Full stop and all, and nothing else. She lay there with it on her chest for a long time, as though a full stop could be warm.", crush: J(P.UP), months: [11, 12, 1] }
  ]);
  add('study', [
    { t: "She studied at the dining table and got stuck on the same problem three times, and on the third, from nowhere, she heard a low even voice say *you knew this*, and she did, and she was furious about it.", crush: J(P.BUILD), months: [10, 11, 12, 1] }
  ]);

  /* ── Texts: his voice is lowercase with apostrophes and full stops; Solar answers him in her Hoax caps without knowing why. ── */
  const T = window.FEMC_GAME_TEXTS;
  if (!T) return;
  const jw = t => ({ from: 'jungwon', t });
  (T.ambient ||= []).push(
    { id: 'cr-tx-jw-finished', thread: 'jungwon', from: '10/17', to: '11/12', slot: 'evening', flag: 'arrived-jungwon', crush: J(['noticed', 'crush']), msgs: [
      jw("you've finished the worksheet."), jw("i'm not going to ask how you did. i'm going to wait."), jw("i'm still waiting.")
    ], reply: [
      { t: 'I GOT 4 RIGHT :D', crush: WARM(1), then: [jw('i know.'), jw("i mean. good. i didn't know."), jw('i knew.')] },
      { t: 'how did u know i finished it', crush: WARM(1), then: [jw("you text faster when you've finished something."), jw("that's not a thing i should know. please disregard it.")] },
      { t: 'mind ur business mr president', then: [jw('this is my business.'), jw("it's the only business i have here.")] }
    ] },
    { id: 'cr-tx-jw-coat', thread: 'jungwon', from: '11/15', to: '12/10', slot: 'late', flag: 'arrived-jungwon', crush: J(P.PUP), msgs: [
      jw("it's going to be four degrees tomorrow."), jw("i'm not telling you what to wear."), jw('the grey coat. not the short one.')
    ], reply: [
      { t: 'how do u know i have a grey coat', crush: WARM(1), then: [jw('you wore it on tuesday.'), jw('i noticed on tuesday.'), jw("i'm going to stop typing now.")] },
      { t: '-salute- yes mr president', crush: WARM(1), then: [jw("don't."), jw('...and the scarf.')] }
    ] },
    { id: 'cr-tx-jw-item-four', thread: 'jungwon', from: '11/22', to: '12/12', slot: 'late', flag: 'arrived-jungwon', crush: J(['almost']), msgs: [
      jw("i've written up today's minutes."), jw('item four is you.'), jw("i'm not going to tell you what it says.")
    ], reply: [
      { t: 'READ IT TO ME', crush: WARM(2), then: [jw('item four. the guest laughed at something i said and i forgot item five.'), jw("that's all. that's the whole item.")] },
      { t: 'what was item five', crush: WARM(1), then: [jw('i still don\'t know.'), jw("i've left it blank. it'll come back to me. it hasn't.")] }
    ] },
    { id: 'cr-tx-jw-heard', thread: 'jungwon', from: '12/17', to: '12/20', slot: 'late', flag: 'arrived-jungwon', crush: J([...P.UP, 'dating']), msgs: [
      jw('jihoon says he told you.'), jw("i'd rather you'd heard it from me. now you've heard it from jihoon, which is the exact opposite of that."), jw("i'm not going to say anything else about it by text. goodnight.")
    ], reply: [
      { t: 'WON', crush: WARM(1), then: [jw('...'), jw("goodnight, solar."), jw("that's all i'm saying. i'm saying it in full.")] },
      { t: 'tomorrow. in person.', crush: WARM(1), then: [jw('yes.'), jw("i'll be the one standing at the bottom of your steps. i'll try to look like i'm not waiting.")] }
    ] },
    { id: 'cr-tx-jw-timetable', thread: 'jungwon', from: '1/5', to: '1/20', slot: 'evening', flag: 'arrived-jungwon', crush: J('dating'), msgs: [
      jw('third term starts friday.'), jw("i've made a timetable."), jw("there's a gap at 12:30. it's labeled lunch. it's also labeled solar. it's the same gap.")
    ], reply: [
      { t: 'WON~ :D', then: [jw('...'), jw("i'm putting that in the timetable too.")] },
      { t: 'what if i have plans', then: [jw("then i'll move it to 12:31."), jw("i'm not moving it. that was a joke. i'm learning those.")] }
    ] },
    { id: 'cr-tx-jw-tutor', thread: 'jungwon', from: '11/20', to: '1/25', slot: 'evening', flag: 'arrived-jungwon', crush: J(P.FRIEND), msgs: [
      jw("iori-san has asked me to tutor him again. he says you recommended me."), jw("i'm taking that as a formal reference."), jw('thank you.')
    ], reply: [
      { t: 'ur the best tutor in 2 worlds', then: [jw("i'm the only tutor in one of them."), jw("but thank you. i'll put it on my record.")] },
      { t: 'make him eat lunch too', then: [jw("he eats lunch three times a day. it's the one thing i can't teach him anything about.")] }
    ] }
  );
})();
