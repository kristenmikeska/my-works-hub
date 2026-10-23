/* Clubs (living world part 2, 2026-10-21): the scenes for places.js clubs (same ids). Picked like job shifts (core.js):
   join (the first practice), beats (one-time, in order), shifts (full sessions, never repeated), quiet + openers.
   Gates as job scenes (months, weather, days, after, until, met, flags, noFlags, ranks, prev, at) plus route: { link: 'romance' }.
   Continuity notes for writers:
   - Tennis: Solar plays on the back courts (Chiba's casual group); the team proper is on the front courts. Rio, Ryoko, Mori
     and Kawai appear only behind the rank that introduces them in links/rio.js (Ryoko r2, Kawai r4 and only until 7/9, Mori
     back at practice from r5). Rio's ankle: hurt at r7, cleared at r9, so Rio-on-court scenes are until 9/6 or behind r9.
   - Library: Solar is a volunteer and book-club member, never on the committee (links/saori.js r7). Saori's desk days are
     Mon/Wed/Fri; she turns up on Tue/Thu only behind her ranks. Omori has Thursday duty from Saori r7.
   - Band and gaming are cast-only clubs; drop-ins (Fuuka, Mark, Kiriko, Minji, Haechan) are gated by date and met. */
window.FEMC_GAME_CLUBS = {

  /* ── Tennis club (Mon / Wed / Fri) ── */
  'club-tennis': {
    cast: { chiba: 'Chiba', tsuji: 'Tsuji', nishi: 'Nishi', ryoko: 'Ryoko', mori: 'Mori', kawai: 'Kawai' },
    join: [
      { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
      { n: "The sign-up sheet had hung outside the gym for two weeks with the same eleven names on it, and Solar had written hers at the bottom in the gap between a first-year's careful kanji and somebody's doodle of a racket with a face, and that, apparently, was all it took, because by the next practice she was standing at the gate of the tennis courts in borrowed shorts with a borrowed racket and the distinct feeling of having signed something without reading the back." },
      { n: "The courts ran in two rows along the edge of the grounds. The front four were bright and busy behind the fence, where the team proper was running a drill to a voice that carried all the way to the gym, and the back two were tucked behind the clubhouse, older, the lines gone soft, a crack across one service box that somebody had filled with white tape. The back two were where the sheet had sent her." },
      { s: 'chiba', t: "You're the new one. Third-year, right? Same as me. Nobody joins in third year. I love it. Welcome to the back courts, which is where tennis comes to have a nice time." },
      { n: "Chiba was tall and unhurried, with her hair in a low knot and a cardigan over her whites that nobody had ever managed to make her take off, and she had the calm, faintly amused manner of someone who had quit the competitive team in her first year and never once regretted it. She said so in the first minute, cheerfully. She'd liked tennis more than she liked winning, and the front courts had found that very confusing." },
      { s: 'tsuji', t: "Chiba-senpai, you can't open with that, it sounds like a cult. Hi! Tsuji, second-year. I'm good, I'm not on the team, don't ask, it's political." },
      { s: 'nishi', t: "...Nishi. First-year. Sorry. Hello." },
      { n: "Nishi was the smallest person Solar had ever seen holding a racket, and she held it the way you'd hold a frying pan someone had handed you hot, and every time a stray ball came off the front courts and over the clubhouse roof she ducked, a full flinch from the shoulders, even when it landed nowhere near her." },
      { ifRank: { rio: 1 }, then: [
        { n: "Halfway through the warm-up a voice came over the clubhouse roof, very clearly. It said senpai, is that you back there, and then, a little higher, you signed the SHEET? Solar didn't turn around. She'd have known that voice from a moving bus." },
        { s: 'tsuji', t: "Did Iwasaki just yell at you? By name? On purpose? ...How do you know Iwasaki?" },
        { s: 'solar', f: 'neutral', t: "I throw balls back properly." }
      ], else: [
        { n: "Somewhere on the front courts a whistle went, and a girl's voice said split step, split step, the way a judge says guilty, and the three people on the back courts flinched together in a way that suggested long practice." }
      ] },
      { s: 'chiba', t: "First rule back here. Everybody learns to feed before they learn to hit. Bounce it up, waist height, nice and slow. If you can make somebody else's afternoon easy, you can do anything." },
      { choose: [
        { t: "(Feed Nishi. Slowly. Right where she can reach it.)", stat: { kindness: 1 }, then: [
          { n: "The first ball Nishi hit with her eyes shut. It came off the frame with a sound like a dropped plate and went sideways into the fence. So did the second. Solar fed the third at exactly the same height and the same pace as the first two, and the fourth, and somewhere around the sixth Nishi opened her eyes halfway, just to see, and the ball went over the net." },
          { s: 'nishi', t: "It went over. Did you see? Sorry. It went over." }
        ] },
        { t: "(Ask Chiba to feed you first. Learn it from the other end.)", stat: { proficiency: 1 }, then: [
          { n: "Chiba fed her twenty, every one landing in the same square meter like it had been placed there by hand, and Solar learned more about feeding from hitting them than she would have from any explanation, mostly that it was harder than it looked and that Chiba was much better at it than she let on." }
        ] },
        { t: "Is there a version where I just hit it really hard?", stat: { courage: 1 }, then: [
          { s: 'tsuji', t: "There is. It's called the front courts. We don't go there." },
          { s: 'chiba', t: "Hit it as hard as you like, Solar. Just hit it back here, where it can't hurt anyone's feelings." }
        ] }
      ] },
      { s: 'tsuji', t: "She's a natural. Chiba-senpai, she's a natural. I can always tell. I said the same thing about Nishi." },
      { s: 'nishi', t: "...You said I'd be dead by June." },
      { s: 'tsuji', t: "And you're not! I was wrong about one thing, and it was a good thing. That's a great record." },
      { n: "Practice ended at five. Chiba handed her the ball cart, a wire basket on four wheels, one of which shrieked and pulled hard to the left, and told her new people got the cart, it was tradition, and also nobody else wanted it." },
      { s: 'chiba', t: "It pulls left. Everything back here pulls a little left. You get used to it." },
      { n: "Solar pushed it across the back courts to the shed with the wheel screaming the whole way and the sun going down orange over the bay behind the fence, and her right arm already aching in a way that suggested it had opinions about the rest of the year. She got used to it by the gate." }
    ],
    shifts: [
      { id: 'tn-s-cart', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The drill was crosscourt forehands, which on the back courts meant a lot of balls in a lot of places they were not supposed to be, and by the end of it the whole of court six was a field of yellow, in the corners, in the net, wedged in the crack of the taped service box, three of them on the far side of the fence in a flowerbed." },
        { s: 'tsuji', t: "Okay, so, you know Ms. Toriumi? Second-floor, glasses, always tired? So apparently she plays an online game until four in the morning. Apparently she's famous in it. Apparently she has a different name and a whole other life." },
        { s: 'chiba', t: "Tsuji, where do you get these." },
        { s: 'tsuji', t: "Nowhere. Everywhere. People just tell me things. I have that face." },
        { n: "Solar steered the cart between them, the bad wheel shrieking, and picked up balls one at a time while Tsuji delivered a complete and unrequested account of every teacher's private life, half of which Solar was certain was invented and the other half of which she was afraid wasn't." },
        { choose: [
          { t: "(Race her to pick up the most balls. Loser carries the cart.)", stat: { courage: 1 }, then: [
            { n: "Tsuji took the challenge with a shriek louder than the wheel and talked the entire time, which slowed her down, and Solar won forty-one to thirty-six, and Tsuji pushed the cart to the shed with enormous drama, describing the injustice of it to Nishi, who had not asked." }
          ] },
          { t: "Is anything you just said true?", stat: { charm: 1 }, then: [
            { s: 'tsuji', t: "The Toriumi one. Swear to god. My cousin's in her guild." },
            { s: 'tsuji', t: "...The rest I made up on the way here. You have to keep people entertained, senpai, or they'll start talking about you instead." }
          ] }
        ] },
        { n: "Nishi climbed into the flowerbed for the last three balls without being asked and came out with petals in her hair and dirt on both knees, holding them up to Solar like eggs, and Solar took them and said thank you and meant it more than the situation strictly required." }
      ] },
      { id: 'tn-s-petals', months: [4, 5], scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The cherry trees along the fence had decided, overnight and all at once, to let go, and the back courts were pink from baseline to baseline, petals plastered to the wet lines and drifting in the corners and sticking to the balls so that every forehand came off the strings in a little pink puff, like a magic trick nobody had asked for." },
        { s: 'chiba', t: "We sweep before we play. If you slip on a petal and break your wrist I have to fill in a form, and I hate the form." },
        { n: "So they swept, the four of them in a line with the long push brooms from the shed, back and forth across court six while the trees went on dropping more onto the bit they'd just done, which Tsuji took as a personal insult and Nishi took as a kind of weather and Chiba didn't seem to notice at all." },
        { s: 'nishi', t: "My sister said the back courts were the prettiest in April. She said it's the only time anybody comes back here on purpose." },
        { choose: [
          { t: "(Stop sweeping for a second and just look at it.)", stat: { kindness: 1 }, then: [
            { n: "She leaned on the broom. The trees were bright against a white sky and the wind came off the bay and took a whole handful of petals off the branches at once and sent them over the court in a long slow spiral, and Nishi stopped too, and for about ten seconds nobody on the back courts was doing anything useful at all, and it was the best part of the afternoon." }
          ] },
          { t: "(Sweep faster than the trees can drop them.)", stat: { proficiency: 1 }, then: [
            { n: "It was not possible. She tried anyway, long straight rows, overlapping, the way you'd paint a wall, and got one service box completely clean for nearly a minute before the wind came round again, and Chiba applauded her slowly from the bench like she'd won something." }
          ] }
        ] },
        { n: "They played, eventually, with petals in their shoes and in their hair and in the ball cart, and when Solar got back to the dorm that night and took off her socks a single pink petal fell out of one of them onto the floor of her room, perfect and flat, and she left it there until morning for no reason she could have defended." }
      ] },
      { id: 'tn-s-rain', months: [6, 7], scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The rain had come in at lunch and showed no sign of leaving, so practice moved to the covered walkway between the gym and the clubhouse, a long concrete corridor that smelled of wet umbrellas and floor polish and had exactly enough room for four girls to do footwork drills if nobody swung anything." },
        { s: 'chiba', t: "Ladder drills. Feet only. Rackets stay in the bags. Tsuji, I'm looking at you." },
        { s: 'tsuji', t: "I wasn't going to swing it. I was going to hold it in a menacing way." },
        { n: "Chiba laid a rope ladder out on the concrete and they went through it one at a time, in and out, in and out, quick feet, the sound of their shoes on the wet floor like a small polite drum, and the rain hammered on the corrugated roof overhead so loudly that every instruction had to be shouted and every shout came out sounding like an argument." },
        { n: "Nishi was fast. Nobody had known. She went through the ladder like water through a pipe, without looking down, and came out the other end and looked up startled at the three of them staring at her." },
        { choose: [
          { t: "Nishi. Do that again. Faster.", stat: { courage: 1 }, then: [
            { n: "She did it again, faster, and then a third time, and on the third time she was grinning by the end of it, a small surprised grin she didn't seem to know what to do with, and Tsuji said ooh in a voice that made it sound like a threat and Nishi went red and did it a fourth time anyway." }
          ] },
          { t: "(Go through right behind her and try to keep up.)", stat: { proficiency: 1 }, then: [
            { n: "Solar went in right on her heels and was out of the ladder a full step behind, with one foot tangled in the last rung, and Nishi turned around and saw it and put both hands over her mouth, and laughed, and then apologized for laughing, and then laughed again." }
          ] }
        ] },
        { s: 'chiba', t: "Feet are most of it. Everybody thinks it's the arm. It's the feet. The arm just takes the credit." },
        { n: "By five the rain had settled into the long patient kind, and they sat on the clubhouse steps under the overhang with their legs stretched out and watched it bounce off the empty courts, the nets sagging, the lines running, and nobody went home for a while, because going home meant going out into it, and sitting here was nice." }
      ] },
      { id: 'tn-s-heat', months: [6, 7], until: '7/20', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "It was the first truly hot day, the kind that arrived without warning in the middle of the rainy season like a guest who'd let himself in, and by four the back courts were giving the heat back up through everyone's shoes, and the air over the far baseline had started to wobble." },
        { n: "Chiba came out of the clubhouse with a plastic bag full of hand towels she'd soaked and frozen in the staff-room freezer, which she'd been told twice not to use, and handed them round like medals." },
        { s: 'chiba', t: "Back of the neck. Not the face. The face is a waste. The neck is where it counts." },
        { s: 'tsuji', t: "Chiba-senpai, I'd die for you. I want you to know that. Today, in this heat, I'd die for you." },
        { n: "They did half a practice and spent the other half in the strip of shade behind the clubhouse with the frozen towels and the water jug, which emptied in about twenty minutes, and somebody had to take it to the tap by the gym." },
        { choose: [
          { t: "(Take the jug. Run.)", stat: { courage: 1 }, then: [
            { n: "She ran it, there and back, across the blazing grounds with the jug sloshing against her leg, and the four of them drank it so fast she had to do it again, and the second time Nishi ran with her without being asked, and they came back with the jug between them like something they'd won." }
          ] },
          { t: "(Rig a shade from two towels and the net.)", stat: { proficiency: 1 }, then: [
            { n: "It was a terrible shade. It was two damp towels clipped to the net cord with clothespins from the clubhouse, sagging, about the size of a small table, and all four of them crowded under it anyway, and Chiba said it was the best piece of engineering the back courts had ever seen, and took a photo of it on her phone." }
          ] }
        ] },
        { n: "At five the cicadas in the cherry trees were going at a pitch that felt less like noise than temperature, and Solar walked to the station with the towel still around her neck, thawed now and warm, and didn't take it off until she was on the monorail and somebody looked at her." }
      ] },
      { id: 'tn-s-doubles', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "Chiba decided it was time for a match, a real one, doubles, back-court rules, which meant no line judges, no arguing and a ten-minute break whenever anyone wanted one. Solar got Tsuji. Nishi got Chiba. Tsuji looked at the draw like she'd been handed a winning lottery ticket and a summons at the same time." },
        { s: 'tsuji', t: "Okay. Okay, partner. Here's the plan. I take everything. You stand there and look intimidating. You're good at that, you've got a very intimidating face when you're not paying attention." },
        { s: 'solar', f: 'neutral', t: "I'm always paying attention." },
        { s: 'tsuji', t: "That's what makes it intimidating." },
        { n: "Tsuji, it turned out, talked through every point, before it, during it and for a long time after it, a running commentary on her own forehand and the wind and Chiba's cardigan and the general state of the world, and it should have been distracting, and it was, but it was mostly distracting the other side, because Nishi kept laughing in the middle of her swing." },
        { n: "At four-all Chiba hit a lob, high and lazy and perfect, straight over Tsuji's head toward the back corner, and Tsuji turned and looked at Solar and said nothing at all, for the first time all afternoon." },
        { choose: [
          { t: "(Run it down. All the way.)", stat: { courage: 1 }, then: [
            { n: "She ran it down. She got there a half-second before it bounced twice and flicked it back over her shoulder without looking, more prayer than shot, and it dropped over the net and died on the line, and Tsuji screamed so loudly that somebody on the front courts yelled back over the clubhouse to ask if anyone was dead." }
          ] },
          { t: "Tsuji! Yours!", stat: { charm: 1 }, then: [
            { n: "Tsuji, who had been ready to take everything, was not ready to take this, and she went back for it with a howl and got a racket on it, somehow, and it went up even higher than Chiba's lob had, and came down out, by a meter, and she lay down on the court where she stood and said she was retiring from tennis forever." }
          ] }
        ] },
        { n: "They lost six games to four. Nobody kept score, officially, and everybody knew it, and on the way to the shed Tsuji explained to Solar in great detail how they'd actually won on a moral level, and Solar let her, because she had a feeling Tsuji had been explaining moral victories to herself for a long time and was very good at it." }
      ] },
      { id: 'tn-s-wind', months: [9, 10, 11], scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The wind had come round to blow straight off the bay, steady and cool and smelling of salt, and it took every ball that went above the fence line and moved it a meter east, politely, as if it were rearranging furniture, so that lobs landed in places that had nothing to do with where anyone had aimed them." },
        { s: 'chiba', t: "Lob practice. In this. On purpose. Because matches have wind, and if you can lob in this, you can lob in anything." },
        { s: 'tsuji', t: "Chiba-senpai, you sound like the front courts." },
        { s: 'chiba', t: "Take that back." },
        { n: "So they lobbed, and the wind took them, and for twenty minutes the back courts were four girls running backward with their rackets up and their heads tipped back, looking into a pale blue sky for a yellow ball that was never where it should have been, and laughing more than anyone on the front courts had in a month." },
        { choose: [
          { t: "(Aim into the wind. Let it bring the ball back.)", stat: { knowledge: 1 }, then: [
            { n: "She aimed two meters west of where she wanted it, high, and the wind did the rest, and the ball came down on the baseline like it had been carried there, and Chiba looked at the mark and then at her, slowly, the way you look at someone who has just solved a puzzle you were planning to explain." },
            { s: 'chiba', t: "Huh. Okay. You're doing the explaining next week." }
          ] },
          { t: "(Hit it flat and hard, under the wind.)", stat: { courage: 1 }, then: [
            { n: "She gave up on lobbing altogether and drove it low and flat, under the wind, and it went straight and fast and into the bottom of the net, and then the next one went in, deep, and Chiba said that wasn't a lob, and Solar said it was a lob that had changed its mind." }
          ] }
        ] },
        { n: "Nishi's last lob went so high and the wind took it so far that it cleared the fence entirely and sailed off over the path toward the gym, and they all watched it go, four heads turning together, and nobody said anything until it bounced once on the path and rolled into a drain, and then Tsuji said rest in peace, and they all lost it." }
      ] },
      { id: 'tn-s-festival', months: [10], scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The club had been given a booth for the culture festival, which was not something anyone on the back courts had asked for, and the front courts had decided it was a speed-serve challenge with a radar gun borrowed from the baseball club, and the back courts had been put in charge of making it look nice, which was a sentence Tsuji repeated several times in a tone of deep personal injury." },
        { s: 'tsuji', t: "Make it look nice. Make it look NICE. They get the radar gun and we get the poster paints." },
        { s: 'chiba', t: "Tsuji, you love poster paints." },
        { s: 'tsuji', t: "That's not the point. It's the principle. ...Pass me the yellow." },
        { n: "They painted the sign on the clubhouse floor with the door propped open and the late October light coming in long and gold across the boards, a banner three meters long that said HOW FAST IS YOUR SERVE? in letters Nishi drew in pencil first and the rest of them filled in, badly, with paint on their knees and their sleeves and in one case, Tsuji's, somehow, the back of her neck." },
        { choose: [
          { t: "(Paint a tiny tennis ball with a face in the corner.)", stat: { charm: 1 }, then: [
            { n: "She painted it small, in the bottom corner, a yellow ball with two dots and a determined little frown, and Nishi saw it and put a tiny racket in its hand, and Tsuji gave it a sweatband, and by the time Chiba noticed it had a whole backstory and a name and was by far the best thing on the banner." }
          ] },
          { t: "(Volunteer to test the radar gun.)", stat: { courage: 1 }, then: [
            { n: "The baseball club's radar gun clocked her best serve at eighty-one kilometers an hour, which the boy holding it informed her was about as fast as a decent pitcher's walk to the mound, and she made him do it again, and it said seventy-nine, and she decided to stop while she was behind." }
          ] }
        ] },
        { n: "They hung the banner over the clubhouse door to dry, and stood back on the court to look at it, four girls with paint on their hands in the cold blue end of the afternoon, and it was crooked and the S was backward and it was, Chiba said firmly, perfect, and nobody argued, because she was right." }
      ] },
      { id: 'tn-s-lights', months: [11, 12, 1], scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "It was getting dark by half past four now, and the court lights came on at a quarter to five on their timer, and the back courts had only two lamps and one of them flickered, so practice happened in a bright white box with one end of it stuttering like a bad film, and everyone's breath went up in little clouds the light caught and lost." },
        { s: 'tsuji', t: "This is a horror movie. This is exactly how a horror movie starts. Four girls, one flickering light, a tennis court. Someone's going to hear a noise behind the clubhouse." },
        { s: 'nishi', t: "Please don't." },
        { n: "They rallied in pairs, Solar with Nishi, and when the bad lamp went dark for a second the ball went out of sight in the middle of the court and came back into the light already halfway to you, which was terrifying and also, Solar found, very good for her reflexes." },
        { choose: [
          { t: "(Keep the rally going through the flicker. Don't stop.)", stat: { courage: 1 }, then: [
            { n: "She didn't stop, and Nishi, who had once ducked at balls coming over a roof, didn't either, and they kept it going through three flickers and a full blackout of nearly two seconds, hitting by sound and guesswork, and when the light came back the ball was still going, and Nishi looked across the net at her with an expression of pure astonishment." }
          ] },
          { t: "(Go and fix the lamp. Somebody has to.)", stat: { proficiency: 1 }, then: [
            { n: "It was a loose connection in the box at the bottom of the pole, which Solar found by opening the box, looking at it for a while and then hitting it, firmly, with the heel of her hand. The lamp came on and stayed on. Chiba said that was the most technical repair she'd ever seen and wrote fixed: hit it on the clubhouse whiteboard for posterity." }
          ] }
        ] },
        { n: "When the timer took the lights at six they packed up in the sudden dark by feel, the cart shrieking toward the shed, and the city across the bay was all lit up on the far side of the fence, and nobody said anything about it, and everybody looked." }
      ] },
      { id: 'tn-s-frost', months: [12, 1], scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The cold had got into everything. It was in the strings, which made every ball come off them with a dead little thunk, and in the balls, which bounced low and sulky and seemed to resent being asked, and in the concrete, which came up through the soles of their shoes so that within ten minutes nobody could feel their toes and everybody was hopping." },
        { s: 'chiba', t: "Warm-up's longer in winter. Twice as long. Your muscles are like cold mochi, they'll tear if you rush them." },
        { s: 'tsuji', t: "Can I be warm mochi? Is that an option? I'd like to apply." },
        { n: "Chiba had brought a thermos of barley tea, and it went round the bench in its little plastic cap between drills, everyone wrapping both hands around it for a few seconds before passing it on, and it was the best thing any of them had tasted all week, which said a great deal about the week." },
        { choose: [
          { t: "(Buy four hot cans from the machine by the gym.)", stat: { kindness: 1 }, then: [
            { n: "Corn soup, two of them, one hot cocoa and a milk tea, which was all the machine had left that was hot, and she came back across the frozen grounds with them stacked against her chest like a fire she was carrying, and Tsuji called her a saint, and Nishi held hers against her cheek for a full minute before she opened it." }
          ] },
          { t: "(Run the perimeter twice to warm up properly.)", stat: { courage: 1 }, then: [
            { n: "She ran it twice, around the outside of both rows of courts, breath steaming, and came back with her face burning and her hands finally hers again, and Nishi had run the second lap with her, and Tsuji had run half of one and come back to report that running was a scam." }
          ] }
        ] },
        { n: "They played for forty minutes in the end, which was about thirty more than anyone wanted, and the sky over the bay went from white to gray to the dark blue of a winter evening, and on the way out Chiba said, to nobody in particular, that the cold days were her favorite, because only the people who really wanted to be here came, and she said it looking at the three of them." }
      ] },
      { id: 'tn-s-strings', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "Solar's borrowed racket broke a string in the middle of a drill, with a sound like a guitar dying, and the ball went limply into the net and Chiba looked at the racket like a doctor looking at an X-ray and said, well, now you learn to string, and took her into the clubhouse." },
        { n: "The clubhouse was a long low room that smelled of rubber and old sweat and the citrus spray somebody used on the lockers, and in the back corner, under a calendar from 2006, was a stringing machine older than either of them, a clamp and a crank and a dial with half its numbers worn off." },
        { s: 'chiba', t: "Mains first, then crosses. Over, under, over, under. Same tension every pull. If you lose count you start again. Everyone loses count. That's the lesson." },
        { n: "It took an hour. It took an hour of over and under and over and under while the light changed in the little high window and the front courts went quiet one by one, Chiba sitting on an upturned crate beside her with her knitting, not helping, saying good, or no, or back two, in a voice like a metronome." },
        { choose: [
          { t: "(Count out loud, every single one.)", stat: { proficiency: 1 }, then: [
            { n: "She counted out loud. Eighteen mains, nineteen crosses, every pass, every pull, and by the end Chiba was counting with her under her breath, and they finished on the same number at the same time and looked at each other, and Chiba laughed." }
          ] },
          { t: "Why did you leave the team, Chiba? Really.", stat: { kindness: 1 }, then: [
            { s: 'chiba', t: "Really? I stopped liking the sound. Every ball on the front courts sounds like someone's going to be disappointed. Back here it just sounds like tennis." },
            { s: 'chiba', t: "Back two. You crossed wrong." }
          ] }
        ] },
        { n: "The racket came out of the clamp tight and even, the strings humming when she flicked them, and she held it up to the window, and it was the first thing she'd made in this city that would still be doing its job long after she'd stopped thinking about it. She didn't know why that felt like so much. It did." }
      ] },
      { id: 'tn-s-rio-forehand', ranks: { rio: 3 }, until: '9/6', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "On the water break someone came round the corner of the clubhouse from the front courts in tennis whites and a sweatband, walking fast, and Tsuji, who had been halfway through a story about the vice-principal's toupee, closed her mouth so quickly Solar heard her teeth click." },
        { s: 'rio', f: 'serious', t: "Senpai. Your forehand. I could see it from court three. Over the roof. Your elbow's doing something criminal." },
        { s: 'solar', f: 'neutral', t: "You can't see the back courts from court three." },
        { s: 'rio', f: 'neutral', t: "I can if I stand on the bench." },
        { n: "She took Solar's racket arm by the wrist and the elbow, without asking, and moved it, the way you'd move the hands of a clock, and stepped back and folded her arms and watched three forehands with her head on one side, and Chiba sat on the bench with her knitting and watched Rio watch, with the expression of someone enjoying a show." },
        { ifRank: { rio: 6 }, then: [
          { n: "There was an armband on her sleeve now, a faded red one with felt letters, and she kept touching it without noticing, and when Chiba fed the next ball to Solar without being asked Rio turned around and said thank you, to Chiba, stiffly, like reading a word off a card, and Tsuji's mouth fell open and stayed open." },
          { s: 'tsuji', t: "...Did the captain just say thank you to the back courts?" },
          { s: 'chiba', t: "Shh. Don't startle it." }
        ], else: [
          { s: 'chiba', t: "Iwasaki, you're on our court." },
          { s: 'rio', f: 'serious', t: "I'm on a court. They're all courts. Senpai, again. Turn your shoulders. You're hitting it with your arm like you're angry at it." }
        ] },
        { choose: [
          { t: "(Do it exactly how she said. Again. And again.)", stat: { proficiency: 1 }, then: [
            { n: "She did it again, and again, until the fourth one came off the strings with a sound she'd never made before, a clean deep pop like a cork, and Rio unfolded her arms, and said nothing, and nodded once, and that nod went through Solar like a drink of cold water." },
            { bond: { rio: 1 } }
          ] },
          { t: "Show me. Don't tell me. Show me.", stat: { courage: 1 }, then: [
            { n: "Rio took the racket out of her hand and hit one, right there on the back courts, and it went across the net so fast and so low that Nishi didn't even flinch, she just stared, and Rio handed the racket back and said like that, as if it were obvious, as if anybody could." },
            { bond: { rio: 1 } }
          ] }
        ] },
        { n: "A whistle went on the front courts. Rio turned, already running, and called over her shoulder that she'd be checking, she'd stand on the bench, and then she was gone round the clubhouse, and the back courts stayed quiet a moment longer than they needed to." },
        { s: 'tsuji', t: "Senpai. What did you DO to her?" }
      ] },
      { id: 'tn-s-rio-combined', ranks: { rio: 8 }, after: '10/2', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The captain had decided, without consulting anybody, that once a month the whole club would practice together, front courts and back, and so on a cold clear afternoon the back courts found themselves out on court one under the eyes of the entire team, Nishi trembling visibly, Tsuji muttering about politics, Chiba entirely calm with her cardigan buttoned to the chin." },
        { ifRank: { rio: 9 }, then: [
          { n: "Rio ran it from the baseline, on both feet, a long-sleeved shirt and a strip of white tape around her right ankle and her whistle in her teeth, and she was louder than ever and also, somehow, different, the way a song is different played slower, and when Nishi framed a ball into the next court Rio said, do it again, you had it, and Nishi did, and had it." },
          { s: 'rio', f: 'neutral', t: "Senpai. Far side. Feed for the first group. ...Please." },
          { n: "The please landed on court one like a dropped racket. Somebody on the team actually turned around. Rio's ears went red and she blew the whistle to cover it." },
          { ifRomance: 'rio', then: [
            { n: "On the water break she came and stood next to Solar at the fence, not close, just near, close enough that their sleeves were nearly touching on the wire, and looked straight ahead at the court with her water bottle, and said nothing, and didn't need to, because Solar could feel exactly where she was the whole time like a warm spot in cold water." },
            { s: 'rio', f: 'flustered', t: "Stop smiling. They'll see. ...They've already seen. Ryoko's been looking at us for ten minutes." }
          ], else: [
            { n: "On the water break she came and leaned on the fence beside Solar and bumped her shoulder, hard, the way she bumped Ryoko's after a good point, and left it there, and said the back courts weren't bad, actually, and that she'd deny it." }
          ] }
        ], else: [
          { n: "Rio ran it from a folding chair at the net post with her right foot up on a second chair in its brace, a clipboard on her knees and her whistle on a cord, and she was not allowed to stand, and she kept forgetting, and every time she forgot Ryoko said Rio without looking up and she sat back down." },
          { s: 'rio', f: 'serious', t: "Senpai. You're on the far side. You feed for the back courts. I can't get up, so you're my legs. That's an order. ...Please." },
          { n: "The please landed on court one like a dropped racket. Somebody on the team actually turned around." }
        ] },
        { choose: [
          { t: "(Feed Nishi into the middle of the team drill. She can do this.)", stat: { kindness: 1 }, then: [
            { n: "Nishi went into the drill between two second-years who were each a head taller than her, and Solar fed her one at the height she liked, and she hit it, and it went crosscourt clean into the corner, and two girls from the team said nice at the same time, and Nishi looked over at the back courts' bench as if checking that everyone had heard." },
            { bond: { rio: 1 } }
          ] },
          { t: "(Feed the captain's way. Exactly the height, exactly the pace.)", stat: { proficiency: 1 }, then: [
            { n: "She fed the way she'd been taught on a spring evening by a girl with a ball cart, the right height and the right pace, forever, and the drill ran faster than it had all term, and when it was over Rio looked across at her and gave one short nod, the kind she didn't give to anyone, in front of the whole team." },
            { bond: { rio: 1 } }
          ] }
        ] },
        { n: "When it ended the front courts and the back courts went to the shed together for the first time in anybody's memory, mixed up, talking, and Tsuji walked beside a second-year from the team the whole way, explaining the politics, and the second-year seemed fascinated, and Chiba watched them go and said to Solar, very quietly, well, that's new." }
      ] }
    ],
    beats: [
      { id: 'tn-arc-1', at: 2, after: '4/20', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "Nishi shut her eyes. Every ball. Solar had noticed it on the first day and assumed it would wear off, and it hadn't; it had got more precise, if anything, so that Nishi could time it exactly, eyes closing just as the ball came over the net and opening again just after it had gone past or hit the frame or, very occasionally and by what looked like divine intervention, the strings." },
        { s: 'chiba', t: "She's been doing that since April. I don't want to push. Pushing makes it worse. I've watched people push." },
        { n: "So on the water break Solar sat down on the bench next to Nishi, who was holding her water bottle with both hands and looking at the ground, and didn't say anything for a while, and then said it." },
        { s: 'solar', f: 'neutral', t: "You close your eyes." },
        { s: 'nishi', t: "...I know. Sorry. I know. I can't stop. It's like it's coming at my face. Even when it isn't. Especially when it isn't." },
        { s: 'nishi', t: "My sister was on the team. She was really good. She'd hit with me in the park and I'd close my eyes then too, and she'd laugh, and I joined because she said I'd grow out of it. I haven't grown out of anything. I'm a hundred and forty-six centimeters." },
        { choose: [
          { t: "(Stand at the net. Catch the balls with your hands. Show her they're slow.)", stat: { courage: 1 }, then: [
            { n: "Solar went to the net, and told Chiba to hit to her, and caught them. Bare-handed, one after another, the ball stinging her palm a little and then less, and after six of them she turned around and held one out to Nishi and said it was only a ball, it was barely moving, it was more scared of her than she was of it." },
            { n: "Nishi came to the net. She caught the first one against her chest, eyes shut. She caught the second one with her eyes open. She looked at it in her hands for a long time, like someone looking at a bird that had landed on them." }
          ] },
          { t: "Then don't hit it yet. Just watch it. All the way in.", stat: { knowledge: 1 }, then: [
            { n: "Chiba fed, and Nishi stood with her racket down at her side and watched the ball come over the net, bounce, come up, go past her, ten times, twenty, and somewhere around twenty she stopped flinching, and somewhere around thirty she lifted the racket a little, without being told, as if her arm had got bored of waiting." }
          ] }
        ] },
        { s: 'chiba', t: "Look at that. Look at her. Tsuji, don't say anything." },
        { s: 'tsuji', t: "I wasn't going to say anything! I was going to say something nice! ...Nishi, you're doing amazing, sweetie." },
        { n: "Nishi hit three with her eyes open before practice ended. Two went into the net and one went over and landed somewhere in the next postal district, and she didn't care about any of that, and at the gate she said thank you to Solar so quietly it was almost a breath, and ran." }
      ] },
      { id: 'tn-arc-2', at: 5, after: '6/1', prev: 'tn-arc-1', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The rain stopped at three, which on the back courts meant a whole hour of squeegeeing before anyone could play, the four of them pushing long rubber blades across the wet concrete in overlapping rows, and at the end of it Chiba sat everybody down on the clubhouse steps with the expression of someone about to announce a death in the family or a wedding." },
        { s: 'chiba', t: "I've been talking to the advisor. The back courts are having a tournament. In the autumn. A real one, with a bracket. The Back-Court Cup. Just us, and anyone else who wants to come round the clubhouse and lose." },
        { s: 'tsuji', t: "Is there a trophy? There has to be a trophy." },
        { s: 'chiba', t: "There's a trophy. I'm making it. It's going to be a ball in a jar." },
        { n: "Tsuji was already drawing the bracket on the back of her hand with a pen. Solar watched Nishi, who had gone very still at the word tournament, the way she used to go still at the sound of a ball coming over the roof." },
        { choose: [
          { t: "Nishi, you're in. I'll practice with you every week until then.", stat: { kindness: 1 }, then: [
            { s: 'nishi', t: "I... you can't just put me in." },
            { s: 'solar', f: 'happy', t: "I'm a third-year. I can do anything." },
            { n: "Nishi looked at her, and then, very slowly, held out her hand to Tsuji for the pen, and wrote her own name on the back of Tsuji's other hand, in tiny careful letters, under Tsuji's." }
          ] },
          { t: "(Write your name first. Let her see it's not scary.)", stat: { courage: 1 }, then: [
            { n: "Solar took Tsuji's pen and wrote SOLAR at the top of Tsuji's hand, big, and handed the pen on, and Nishi held it for a long time, long enough for the squeegee water to drip off the clubhouse roof four times, and then wrote hers underneath. Small. But all the way to the end." }
          ] }
        ] },
        { n: "The ball cart's bad wheel had picked up a strand of something in the wet and was screaming worse than usual, and on the way to the shed Nishi took the handle from Solar without asking, which she'd never done, and pushed it the whole way, leaning hard to the right to fight the pull, and didn't flinch once at the noise." },
        { s: 'chiba', t: "Four names. Four's a bracket. Four's a real tournament. I'm going to start on the jar." }
      ] },
      { id: 'tn-arc-3', at: 9, after: '9/14', prev: 'tn-arc-2', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The Back-Court Cup was held on a clear blue afternoon in late September, on court six, with a hand-drawn bracket taped to the clubhouse door and a trophy on the bench that was, as promised, a tennis ball in a jam jar, with CHAMPION written on the lid in Chiba's handwriting and a ribbon around the neck that had once been somebody's hair tie." },
        { n: "There were six entrants in the end, because two second-years from the front courts had heard about it and come round the clubhouse on their day off out of what they described as curiosity and Tsuji described as fear of missing out, and there was a small crowd, if four people on a bench counted as a crowd, which Chiba said it did." },
        { ifRank: { rio: 7 }, then: [
          { ifRank: { rio: 9 }, then: [
            { n: "Rio was one of the four, which nobody had expected, sitting on the end of the bench with her arms folded and a strip of tape around her ankle, watching every point like it was a final, and saying nothing, which for Rio was a form of respect." }
          ], else: [
            { n: "Rio was one of the four, which nobody had expected, her right foot up in its brace on the ball cart and a clipboard on her knee that she'd brought out of pure habit, watching every point like it was a final, and saying nothing, which for Rio was a form of respect." }
          ] }
        ] },
        { n: "Nishi drew Tsuji in the first round. Tsuji talked through the whole first game, and Nishi lost it, and the second, and in the third, at fifteen-forty, a ball came over the net hard and high and straight at her face, Tsuji's best, and Solar watched from the bench as Nishi's eyes stayed open." },
        { choose: [
          { t: "(Say nothing. Don't move. Let her have it.)", stat: { kindness: 1 }, then: [
            { n: "Solar didn't move a muscle. Nishi stepped in and took it on the rise and put it back past Tsuji down the line so fast that Tsuji, for the first time in recorded history, was speechless, and the bench made a sound like a kettle going off, and Nishi stood at the baseline with her racket still up, staring at where the ball had gone." }
          ] },
          { t: "(Shout.) Eyes open, Nishi!", stat: { courage: 1 }, then: [
            { n: "Nishi heard. Her eyes were already open; Solar saw her hear it anyway, saw it land somewhere and straighten her shoulders, and she stepped into the ball and put it down the line past Tsuji so fast that Tsuji, for the first time in recorded history, didn't have a single thing to say." }
          ] }
        ] },
        { n: "She lost the match. Six games to two, to Tsuji, who would go on to lose the final to Chiba, who would then present herself with the jar and give a speech of extraordinary length and false modesty. Nobody cared about any of it. They cared about the two games." },
        { s: 'tsuji', t: "Okay, everybody, I want it on record. She beat me. Twice. With her eyes open. I'm going to be telling this story at her wedding." },
        { s: 'nishi', t: "...Please don't." },
        { n: "But she was smiling, a real one, all the way up to her eyes, which stayed open the whole time, and at the end of the afternoon she stood with the rest of them in front of the bracket on the clubhouse door and touched her own name on it, in the first round, with one finger, as if checking that it was really there." }
      ] },
      { id: 'tn-arc-4', at: 13, after: '12/1', prev: 'tn-arc-3', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "It was Chiba's last practice before the entrance exams took her, and she'd known it was coming for months and said nothing about it until the morning, when she'd texted the three of them a single line that said last one today, bring snacks, nobody cry, and Tsuji had replied with eleven crying faces in a row." },
        { n: "It was cold and very clear and the bay past the fence was the color of a knife. They played a last round of doubles, back-court rules, and nobody kept score, and everybody knew it, and halfway through Chiba stopped in the middle of a point and just stood there at the net looking at the old cracked service box and its white tape and the ball cart with its bad wheel and the three of them, one at a time, like someone memorizing a room before they leave it." },
        { s: 'chiba', t: "I've got presents. Don't make a face, Tsuji. They're small. I'm a student." },
        { n: "For Tsuji, a whistle on a cord, because somebody had to run the back courts now, and Tsuji held it in both hands and for once in her life said nothing at all. For Nishi, a slip of paper with the name of the team's advisor on it and a time, Monday, seven-thirty, and the words she's expecting you." },
        { s: 'nishi', t: "...The front courts?" },
        { s: 'chiba', t: "Only on Mondays, to start. You'll still come back here. Everyone comes back here. It's the back courts. It's where tennis comes to have a nice time." },
        { n: "For Solar there was a small paper bag, and inside it was a wheel. A new one, rubber, the right size, with the price sticker still on it from the hardware shop by the station." },
        { s: 'chiba', t: "For the cart. I've been meaning to do it since first year. I never did, because then it wouldn't be the cart anymore. But you should get to push it straight. Just once." },
        { choose: [
          { t: "(Fix it now. All four of you, on the clubhouse floor.)", stat: { proficiency: 1 }, then: [
            { n: "They turned the cart upside down on the clubhouse floor, and Solar got the old wheel off with a screwdriver from the stringing machine drawer and Nishi held the bolt and Tsuji supervised and Chiba knitted, and when they turned it back over and pushed it, it went straight, perfectly straight, in silence, across the clubhouse and into the wall, and all four of them stood there and stared at it." },
            { s: 'tsuji', t: "...I hate it. I hate how quiet it is. Put the old one back." }
          ] },
          { t: "Keep the old wheel. It should stay.", stat: { kindness: 1 }, then: [
            { s: 'chiba', t: "You're sentimental. I didn't know that about you." },
            { s: 'solar', f: 'flustered', t: "I'm not. It's just the cart." },
            { n: "Chiba looked at her a long moment and then put the new wheel back in the bag and handed it to Nishi, for later, for whoever came after, and patted the old cart on its handle like an old dog, and it shrieked, and they all laughed, and Tsuji cried a little anyway." }
          ] }
        ] },
        { n: "They walked out together at five with the sky going dark over the bay and the city lighting up across the water, four of them in a line, and at the gate Chiba stopped and looked back at the back courts one more time, the two lamps, the taped crack, the empty net." },
        { s: 'chiba', t: "Look after it. It pulls a little left." },
        { n: "Solar said she would. It was an easy thing to say and she found she meant it, and that it reached further than she'd expected, past the courts and the cart and the spring, somewhere she couldn't see the end of yet." }
      ] },
      { id: 'tn-rio-love-1', at: 3, after: '11/2', route: { rio: 'romance' }, scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "Rio had started coming round the clubhouse. Not every practice. Often enough that Tsuji had stopped going quiet when she appeared and started keeping a tally instead, in pen, on the back of her hand, a little row of lines, and when Solar asked what it was for Tsuji only smiled in a way Solar didn't like at all." },
        { n: "Today Rio had come round to borrow Solar, she said, to feed for the first group, and then hadn't taken her anywhere. She'd stayed on the back courts instead and fixed Solar's backhand, which was apparently a crime of a different kind from the forehand, standing close behind her with one hand on Solar's wrist and the other flat between her shoulder blades to turn them." },
        { s: 'rio', f: 'serious', t: "Shoulders. Turn. Your whole back's doing it, not your arm. Feel that? There. That." },
        { n: "Solar felt it. She felt the hand between her shoulder blades a great deal more than she felt her backhand, and it stayed there for a second longer than the instruction needed, and then another, and neither of them moved, and the ball Chiba fed bounced past them both untouched and rolled away into the fence." },
        { s: 'rio', f: 'flustered', t: "...Elbow." },
        { n: "She said it far too loudly, and stepped back, and folded her arms, and looked at the net as if it had personally insulted her, and her ears were scarlet." },
        { choose: [
          { t: "(Fix the elbow. Don't look at her. Don't look at anyone.)", stat: { courage: 1 }, then: [
            { n: "Solar fixed the elbow and hit the next one, and it was a good backhand, a really good one, and she didn't look at Rio, and she could feel Rio not looking at her, and the two of them stood there at the baseline not looking at each other so hard it was practically a conversation." },
            { s: 'rio', f: 'flustered', t: "Good. That's... good." },
            { bond: { rio: 1 } }
          ] },
          { t: "You said elbow like it was a swear word.", stat: { charm: 1 }, then: [
            { s: 'rio', f: 'flustered', t: "It IS a swear word. Your elbow is a swear word. Hit the ball, senpai." },
            { n: "Solar hit the ball. She was smiling when she did it, and so was Rio, behind her, Solar could hear it in the next instruction, which came out a whole note higher than any instruction had a right to." },
            { bond: { rio: 1 } }
          ] }
        ] },
        { n: "When a whistle on the front courts finally took Rio away at a run, Tsuji held up her hand to Chiba with the row of little lines on it." },
        { s: 'tsuji', t: "Eleven. She said good to senpai eleven times in fifteen minutes. She says good to the team maybe twice a week. I've been counting since September." },
        { s: 'chiba', t: "Tsuji. Leave it." },
        { s: 'tsuji', t: "I'm leaving it! I'm leaving it alone. I'm just writing it down. For history." },
        { n: "Across the far side of the clubhouse, through the gap between the fence and the shed, Solar caught sight of a round-faced second-year with a racket full of colored dampeners, standing quite still on court two and looking straight at her with an expression of enormous, unbearable meaning. Then Ryoko turned away and served, and pretended she hadn't been looking at anything at all." }
      ] },
      { id: 'tn-rio-love-2', at: 3, after: '11/20', route: { rio: 'romance' }, prev: 'tn-rio-love-1', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The cold had come in properly, and the whole club practiced together under the lights now on the days the back courts' bad lamp wouldn't come on, and so it was that on a dark, sharp afternoon with breath going up in clouds all over court one, Mori, who had never in her life thought before speaking, asked the question in front of everybody." },
        { s: 'mori', t: "Captain, why do you always carry Solar-senpai's bag to the shed? Is it heavy? It doesn't look heavy." },
        { n: "The court went quiet in the particular way only a full court can go quiet. Rio had Solar's bag on one shoulder and her own on the other, and she looked down at it as if she'd never seen it before and couldn't imagine how it had got there." },
        { s: 'rio', f: 'flustered', t: "It's... it's a captain thing. Captains carry bags. It's leadership." },
        { s: 'mori', t: "You've never carried mine." },
        { n: "Behind Mori, Ryoko took her firmly by the hood of her jacket and towed her toward the gate, and said something low that made Mori go oh, OH, very loudly, and the team began, all at once and with great sudden urgency, to leave." },
        { ifRank: { rio: 10 }, then: [
          { n: "Tsuji, on her way out, stopped dead and pointed at the old racket in the faded blue cover over Solar's other shoulder, and opened her mouth, and Chiba put a hand over it from behind without breaking stride and steered her out of the gate like a shopping trolley." }
        ] },
        { n: "Then it was the two of them and the ball cart and the white box of light, and they picked up the last balls together, working toward each other from opposite baselines without having to discuss it, and met at the cart, and reached into it for the same ball at the same moment." },
        { s: 'rio', f: 'neutral', t: "Your hands are freezing." },
        { s: 'solar', f: 'flustered', t: "So are yours." },
        { s: 'rio', f: 'flustered', t: "Mine are always like this. Even in July. Ryoko says I've got the circulation of a lizard." },
        { choose: [
          { t: "(Don't let go. Hold the ball and her hand both.)", stat: { courage: 1 }, then: [
            { n: "Solar didn't let go, and neither did Rio, and they stood there with their hands in the ball cart holding one tennis ball between them like it was the only warm thing on the courts, and it wasn't, and both of them knew exactly what was, and neither of them said it, and the lamps hummed." },
            { bond: { rio: 1 } }
          ] },
          { t: "(Take off your scarf and put it round her neck instead.)", stat: { kindness: 1 }, then: [
            { n: "Solar unwound her scarf and put it round Rio's neck, and tucked the ends in, the way you'd do it for a child, and Rio stood perfectly still and let her, looking at a point somewhere over Solar's shoulder with her jaw set like she was at match point, and her ears went a color that had nothing to do with the cold." },
            { s: 'rio', f: 'flustered', t: "...Now you'll be cold." },
            { s: 'solar', f: 'happy', t: "I'll survive." },
            { bond: { rio: 1 } }
          ] }
        ] },
        { n: "She carried both bags to the shed in the end. Solar let her. It seemed important to Rio that she be allowed to, and Solar found, walking half a step behind her in the dark with her hands in her pockets and the cold on her face, that she didn't mind at all being carried for." }
      ] },
      { id: 'tn-rio-love-3', at: 3, after: '12/7', until: '12/23', route: { rio: 'romance' }, prev: 'tn-rio-love-2', scene: [
        { place: 'Gekkoukan High · Tennis Courts', time: 'After School' },
        { n: "The last practice before the break, and the team had been strange about it all afternoon, quiet and sly, with a lot of looking at each other and not at Solar, and at five on the dot every single one of them said they had somewhere to be, in unison, like a rehearsed play, and left, Ryoko herding the first-years out of the gate in front of her with both arms wide." },
        { s: 'tsuji', t: "We're going! We're absolutely going! Captain, we're gone! Solar-senpai, we were never here!" },
        { n: "Rio watched them go with the face of someone who knew she'd been organized and was deciding whether to be furious about it. Then she turned to Solar, and put a ball in her hand, and pointed at the baseline." },
        { s: 'rio', f: 'serious', t: "Serve. I've been watching your toss since April. It's still terrible. We're fixing it before the break if it kills us." },
        { n: "So Solar stood at the baseline under the one good lamp with the ball in her hand and the cold coming up off the concrete, and Rio stood close behind her, close enough that Solar could feel her breath stir the hair at the back of her neck, and reached round and put her own hand under Solar's tossing hand, palm to the back of it." },
        { s: 'rio', f: 'neutral', t: "Up. Not forward. Not sideways. Up. I'll go with you. Ready?" },
        { n: "Solar was not ready. She was very aware of being not ready. The body knows a lot of things before you do, and hers was busy knowing every one of them at once, the warmth all down her back where Rio wasn't quite touching, the fingers under hers, the small sound Rio made breathing in." },
        { choose: [
          { t: "(Toss. Let her hand go up with yours.)", stat: { proficiency: 1 }, then: [
            { n: "She tossed, and Rio's hand went up with hers, and the ball went straight up into the white lamplight and hung there against the dark sky above it for a second, perfectly still, and came straight down, and neither of them swung at it. It bounced once at their feet and rolled away. Neither of them watched it go." },
            { s: 'rio', f: 'flustered', t: "...That one. That was the one. You didn't even hit it." },
            { s: 'solar', f: 'happy', t: "You didn't tell me to." },
            { bond: { rio: 1 } }
          ] },
          { t: "Rio. I can't concentrate like this.", stat: { charm: 1 }, then: [
            { s: 'rio', f: 'flustered', t: "That's... that's your problem. That's a you problem. Focus." },
            { n: "But she didn't step back. She rested her forehead against the back of Solar's shoulder instead, for a second, two, and Solar felt her laugh through her coat, short and helpless, like something that had been stuck behind her ribs all term, and then she said, into the wool, fine, me neither, and the ball stayed in Solar's hand the whole time." },
            { bond: { rio: 1 } }
          ] }
        ] },
        { n: "They put the cart away together in the dark with its bad wheel screaming, and at the gate Rio stopped and looked back at the empty court with the last lamp still burning over the baseline where they'd stood, and then at Solar, and didn't say anything, and took her hand, and put both their hands in the pocket of her coat, and walked her to the station like that, the whole way, without once explaining it." }
      ] }
    ],
    quiet: [
      { id: 'tn-q-wheel', scene: [
        { n: "Solar spent the water break lying on the court beside the ball cart, trying to fix its bad wheel with a pencil, a hair tie and an enormous amount of optimism." },
        { n: "When she was done it pulled left slightly less, and shrieked slightly more, and Chiba declared it a draw." }
      ] },
      { id: 'tn-q-rumor', scene: [
        { s: 'tsuji', t: "So there's this rumor going around about a third-year who runs at five in the morning and never seems tired and has a really intimidating face. Apparently she's secretly a spy." },
        { s: 'solar', f: 'neutral', t: "Tsuji. That's me." },
        { s: 'tsuji', t: "I know. I started it. I wanted to see how far it'd get. It's on the second floor now." }
      ] },
      { id: 'tn-q-water', scene: [
        { n: "Halfway through the drill Nishi appeared at Solar's elbow with a cup of water from the jug, held out in both hands, without having been asked, and went straight back to her own court before Solar could thank her." },
        { n: "She did it again the next time, and the time after that, and Solar stopped trying to thank her and just drank it." }
      ] },
      { id: 'tn-q-knitting', scene: [
        { n: "Chiba knitted on the bench between drills, needles going without her looking, something long and gray that grew a few centimeters a week and that she refused to identify." },
        { s: 'chiba', t: "It'll be a scarf, or a sweatband for a giant. I'll know when it tells me." }
      ] },
      { id: 'tn-q-backboard', scene: [
        { n: "Everyone else was late, so Solar took a bucket to the green backboard at the end of the courts and hit against it alone, the wall thudding back at her in a slow, steady rhythm, until her arm stopped thinking and just went." },
        { n: "When the others came round the clubhouse she was at fifty-three, and she missed the next one on purpose so nobody would ask." }
      ] },
      { id: 'tn-q-tape', scene: [
        { n: "The tape in the cracked service box had come up again. Solar and Nishi knelt on the court and re-laid it, a strip at a time, pressing it flat with their thumbs from the middle out." },
        { s: 'nishi', t: "It's the only straight line on this whole court. Sorry. That's a strange thing to be proud of." },
        { choose: [
          { t: "It's a very good line.", stat: { kindness: 1 }, then: [
            { n: "Nishi looked at the line, and at her, and pressed it down one more time for luck." }
          ] }
        ] }
      ] },
      { id: 'tn-q-serve', scene: [
        { n: "Her serve went in three times in a row, clean, the toss straight up, the ball landing deep in the box with a sound like a door shutting." },
        { n: "Nobody saw. Tsuji was in the shed and Chiba was looking at her knitting and Nishi was tying a shoe. Solar decided that was fine, and that it counted anyway, and hit a fourth, which went into the net." }
      ] },
      { id: 'tn-q-roof', scene: [
        { n: "A ball went up onto the clubhouse roof and stayed there, wedged in the gutter, looking down at them." },
        { s: 'tsuji', t: "That's the eighth one this term. There's a whole colony up there. They've formed a society. They have a leader." },
        { n: "Solar got it down with the long broom from the shed while Tsuji narrated the rescue in the voice of a sports announcer, and the ball came down with three others, as if they'd been waiting for a ride." }
      ] },
      { id: 'tn-q-names', scene: [
        { n: "Tsuji had started naming the balls in the cart, which was impossible, because they all looked the same, and she insisted they didn't." },
        { s: 'tsuji', t: "That's Kenta. He's a troublemaker. He goes in the net on purpose. Don't feed Kenta to Nishi, she's not ready." }
      ] },
      { id: 'tn-q-stretch', scene: [
        { n: "They cooled down in a circle on the court the way Chiba liked, legs out, reaching for their toes while she counted slowly to twenty, and somewhere around fourteen everyone's count drifted, and nobody corrected it." },
        { n: "It was the stillest ten minutes of Solar's week. She didn't tell anyone that. She just made sure she was never late for it." }
      ] }
    ],
    openers: {
      4: "The cherry trees along the fence were letting go of their petals onto the back courts, where they stuck to the wet lines and the soles of everyone's shoes, and the ball cart squeaked through all of it with its bad wheel.",
      5: "May had come in bright and windy, and the back courts smelled of cut grass from the field next door and the hot rubber of new balls, and the bay glittered past the fence as if it were trying to distract everybody.",
      6: "The rainy season had soaked into everything, the nets heavy, the clubhouse smelling of damp towels, and practice happened in the gaps between showers with one eye always on the sky.",
      7: "July sat on the back courts like a lid, the concrete giving the heat back up through everyone's shoes, and the water jug was the most popular member of the club.",
      8: "Summer had emptied the school, and the back courts lay quiet behind the clubhouse with one forgotten ball baking in the corner of court six, waiting for September.",
      9: "September hadn't let go of the heat yet; the courts shimmered by four and Chiba had started freezing wet towels in the staff-room freezer again and handing them out like medals.",
      10: "October had turned the wind round to come off the bay, cooler and steadier, and it took every toss a little east and every lob somewhere nobody had intended.",
      11: "The light was going early now, the court lamps clicking on at a quarter to five on their timer, and everyone practiced in tracksuits with their breath starting to show.",
      12: "December left frost in the cracks of the back courts in the mornings, gone by afternoon, and the concrete stayed dark and cold, and the balls came off it slow and sulky.",
      1: "January, and the courts had been swept clean of the New Year, and the cold had got into the strings, and somebody's thermos of barley tea went round the bench like a rumor."
    }
  },

  /* ── Library committee and book club (Tue / Thu) ── */
  'club-library': {
    cast: { ozawa: 'Ms. Ozawa', kuga: 'Kuga', hoshino: 'Hoshino', tamura: 'Tamura', lbUeda: 'Ueda', omori: 'Ōmori' },
    join: [
      { place: 'Gekkoukan High · Library', time: 'After School' },
      { n: "The library on a Tuesday afternoon smelled of floor wax and warm radiators and the particular dust that comes off paper nobody has opened in a long time, and the light came in through the tall windows at a slant and lay across the long tables in pale stripes, and the only sound was the brass date stamp at the desk going down, and down, and down, like a slow and very polite heartbeat." },
      { n: "The woman behind the desk had reading glasses on a beaded chain and a cardigan the color of weak tea, and she looked at Solar over the top of the glasses for exactly as long as it took Solar to ask, and then took the glasses off, which seemed to be how she smiled." },
      { s: 'ozawa', t: "Committee seats are decided by homeroom in April, I'm afraid. Two to a class. And third-years are excused for their exams, so nobody ever asks." },
      { s: 'ozawa', t: "But I have never in my life turned away a volunteer. Volunteers get all the work and none of the armband. Is that alright?" },
      { n: "It was more than alright. It was, Solar realized as Ms. Ozawa wrote her name in a ledger in green ink, exactly what she'd wanted without knowing it: a place to be on Tuesdays and Thursdays that came with a job and didn't come with a title." },
      { s: 'kuga', t: "Kuga. 3-C. Committee chair. We use the Nippon Decimal Classification here. Do you know it? You don't. That's fine. Nobody does. They think it's just numbers. It isn't just numbers." },
      { n: "Kuga was a third-year in a gray cardigan buttoned all the way up, with a pencil behind each ear, which nobody ever explained, and the general bearing of someone who had read every nonfiction book in the building and found most of them lacking. He handed her the returns cart without further ceremony." },
      { s: 'hoshino', t: "Kuga-senpai, you're scaring her. Hi! Hoshino, first-year. I'm on the committee because nobody else in my class wanted it and I put my hand up too fast. Nine-thirteen is the best shelf. That's Japanese fiction. Don't tell Kuga-senpai I said best." },
      { s: 'kuga', t: "I'm standing right here." },
      { n: "At the big table by the radiator, a second-year boy was asleep with his cheek on an open paperback, one arm hanging off the edge of the table, breathing slowly and with great conviction." },
      { s: 'hoshino', t: "That's Tamura-senpai. He's in the book club. He's never finished a book. He comes for the heater. We love him." },
      { choose: [
        { t: "(Learn the numbers. Shelve the whole cart by them, slowly.)", stat: { knowledge: 1 }, then: [
          { n: "Kuga showed her once, a finger tracing the spine labels, 210 history of Japan, 489 mammals, 913 the novels, and she went down the stacks with the cart and put back every book exactly where its number said, and when she came back he checked three of them at random without telling her, and found them right, and said nothing, and the nothing sounded very much like approval." }
        ] },
        { t: "Hoshino, what are you reading?", stat: { charm: 1 }, then: [
          { s: 'hoshino', t: "A romance. A historical one. She's a princess and he's a ninja and they hate each other and it's AMAZING, senpai, it's so bad, it's the best bad book I've ever read." },
          { n: "She told Solar the entire plot across the next twenty minutes in a whisper so loud it was technically a voice, while they shelved, and Solar found she wanted to know how it ended, which was alarming." }
        ] },
        { t: "(Put your blazer over sleeping Tamura so he doesn't catch cold.)", stat: { kindness: 1 }, then: [
          { n: "Tamura did not wake up. He sighed, deeply, in the voice of a man who had been understood at last, and pulled the blazer up to his chin, and Hoshino put a hand over her mouth and made a small noise like a teakettle." }
        ] }
      ] },
      { s: 'ozawa', t: "The book club meets at the big table once the cart is done. You're welcome to stay. Kuga chooses the books. Please don't let him choose them all." },
      { n: "Kuga's choice that month was a thin novel about a lighthouse keeper, and he gave her a copy from the box under the desk with the solemnity of someone handing over a sacred text, and Tamura woke up just long enough to say he'd liked the cover, and went back to sleep." },
      { n: "She walked to the station with the lighthouse book in her bag and the wind off the bay at her back and the slow brass sound of the stamp still going somewhere in her head, and caught herself, at the platform, already thinking about Thursday." }
    ],
    shifts: [
      { id: 'lb-s-film', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "The new arrivals had come in two cardboard boxes that smelled of the warehouse and fresh glue, thirty books with their covers still sharp-cornered and stiff, and every one of them had to be stamped, labeled, carded and wrapped in clear plastic film before it was allowed anywhere near a student, which Kuga explained as if the students were a natural disaster." },
        { s: 'kuga', t: "The film goes on from the spine outward. Slowly. If you trap a bubble, it's there until the book dies. Every reader for twenty years will touch your bubble and think about you." },
        { s: 'hoshino', t: "Kuga-senpai, that's the most romantic thing you've ever said." },
        { s: 'kuga', t: "It's a warning." },
        { n: "They worked at the big table in a row, Kuga at one end with a ruler and a craft knife and the expression of a surgeon, Hoshino in the middle reading the first page of every book before she wrapped it, and Solar at the far end smoothing the film down with the flat of a plastic card while the radiator ticked and the light went long across the table." },
        { choose: [
          { t: "(Go slow. Spine outward. Not one bubble.)", stat: { proficiency: 1 }, then: [
            { n: "She did eleven without a bubble. On the twelfth there was one, tiny, in the bottom corner of a cookbook, and she looked at it for a long time, and Kuga leaned over and looked at it too, and said, quietly, that it was acceptable for a cookbook, people would be looking at the food." }
          ] },
          { t: "(Read the first page of every one, like Hoshino.)", stat: { knowledge: 1 }, then: [
            { n: "She did, and it slowed her down enormously, and by the end of the afternoon she'd started four different books and wanted to finish all of them, and Hoshino said that was the danger of new arrivals, they all looked at you like puppies in a window." }
          ] }
        ] },
        { n: "At five Kuga lined the finished books up on the cart in order, spines out, the film catching the light so that the whole row shone like they'd been glazed, and stood back to look at them with his hands behind his back, and didn't say anything, and Solar understood that this was his favorite part of the job and that he'd die before he admitted it." }
      ] },
      { id: 'lb-s-firstyears', months: [4, 5], scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "It was the week of the first-years' library orientation, which meant that every afternoon a new homeroom of thirty fifteen-year-olds came shuffling in through the double doors in their stiff new uniforms, looking at the shelves the way you'd look at the sea, and the committee had to show them where everything was without losing any of them in the stacks." },
        { s: 'hoshino', t: "I did this last year! I was so scared I hid in the six-hundreds for an hour. Agriculture. Nobody ever goes to agriculture. I read a whole book about rice." },
        { n: "Solar took the back of the group. One girl kept falling behind, a small first-year with her bag clutched to her front, reading the spine labels as she went, one after another, her lips moving, until the group had gone round a corner and she was alone in the 400s looking up at a whole wall of science with an expression of total, private wonder." },
        { choose: [
          { t: "(Wait with her. Let the group go on.)", stat: { kindness: 1 }, then: [
            { n: "Solar stood at the end of the aisle and didn't hurry her, and after a while the girl noticed her and went red and said sorry, and Solar said there was a book about the stars on the second shelf, the one with the blue spine, if she wanted it, and the girl took it down like it might be hot." }
          ] },
          { t: "Want to know a secret? You can borrow five at once.", stat: { charm: 1 }, then: [
            { n: "The girl stared at her as if she'd been told she could fly. She took five. She took five so fast it was like watching someone pick apples, and carried them to the desk in a stack up to her chin, and Ms. Ozawa stamped every one of them with an expression of deep and quiet satisfaction." }
          ] }
        ] },
        { s: 'kuga', t: "We lost one. The tour has twenty-nine. Where's the thirtieth?" },
        { s: 'solar', f: 'neutral', t: "She's at the desk. Borrowing." },
        { n: "Kuga looked over at the desk, and at the small girl with the stack of books up to her chin, and something in his face that Solar had never seen before went soft around the edges, briefly, and then he wrote something in his notebook, and she would have bet money it was the girl's name, filed under people to watch." }
      ] },
      { id: 'lb-s-wet', months: [6, 7], scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "The rainy season had been going for a week, and the returns slot by the front doors had begun to produce books in conditions that Kuga described as crimes, pages rippled, covers bloated, one paperback that had clearly been dropped into a puddle and then, for reasons nobody could explain, sat on." },
        { s: 'kuga', t: "Paper towels between every page. Every tenth page, if it's thick. Then the weight. Then you wait. Waiting is the hardest part. Most people can't do it." },
        { n: "They spread them across the big table like patients in a ward, each one fanned open with paper towels in its pages and a heavy dictionary on top, and the whole library smelled of wet paper and the radiator, which Ms. Ozawa had switched on in June out of pure pity for the books." },
        { s: 'hoshino', t: "The nurse's office has a hairdryer. I've seen it. I could just... go and borrow it." },
        { s: 'kuga', t: "Absolutely not. Heat warps the binding." },
        { choose: [
          { t: "(Borrow the hairdryer anyway. Low setting. Just for the worst one.)", stat: { courage: 1 }, then: [
            { n: "She borrowed it. The nurse asked what for, and Solar said a patient, and the nurse gave her a look and the hairdryer, and on the lowest setting held a hand's width away the puddle book came back to something like itself page by page, and Kuga stood over her the entire time with his arms folded, and at the end he said fine, once, in a voice that suggested it was the most painful word he'd ever spoken." }
          ] },
          { t: "(Do it his way. Towels and patience.)", stat: { knowledge: 1 }, then: [
            { n: "She did it his way, every tenth page, and by the end of the afternoon the table was a row of fat paper bricks under dictionaries, and on Thursday when they took the weights off the pages had gone flat and crinkled like old maps, and Kuga ran his thumb along one with real tenderness and said, see. Waiting." }
          ] }
        ] },
        { n: "The rain kept on past the windows, steady and patient, and the books lay on the big table drying under their dictionaries, and Tamura slept at the far end with his cheek on his arm, and Solar thought that this was a very good room to be in when it rained, and that she'd known that about libraries for a lot longer than she'd known anything else." }
      ] },
      { id: 'lb-s-crowd', months: [5, 7, 10, 12], scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "It was the week before exams, and the library had filled up the way it only did twice a term, every table taken and every chair, students bent over their notes with the grim glassy look of people being slowly crushed, and the air was thick with the sound of pencils and turning pages and, here and there, a whisper." },
        { n: "Kuga stood at the end of the reading room like a lighthouse, turning slowly, and whenever a whisper rose above a certain level he looked at it. Just looked. The whisper died. Solar had never seen anything like it. He did it fourteen times in an hour, and never once said a word." },
        { s: 'hoshino', t: "He practices. In the mirror. I asked him once and he said no, and then he said a little." },
        { n: "At the window table two boys from the baseball team had stopped studying altogether and were having a whispered argument about a girl, the kind of whisper that was really a shout wearing a disguise, and Kuga was on the far side of the room dealing with a dropped pencil case." },
        { choose: [
          { t: "(Try Kuga's look. Just look at them.)", stat: { courage: 1 }, then: [
            { n: "She looked at them. She did it the way Kuga did, no expression at all, just looking, and it took about four seconds longer than his did, and one of them kept talking for two of those seconds before he saw her, and then they both went quiet and bent over their textbooks so fast they nearly cracked their heads together." },
            { s: 'kuga', t: "Not bad. Your eyebrows moved. Next time, keep the eyebrows still." }
          ] },
          { t: "(Slide them a note: the answer to question four is on page 112.)", stat: { charm: 1 }, then: [
            { n: "She'd seen what they were meant to be studying, and the note was true, and they looked at it and at each other and at her, and opened the book to page 112 out of sheer curiosity, and then they were studying, mostly, and arguing about the question instead of the girl, which was quieter." }
          ] }
        ] },
        { n: "By six the room had emptied out into the dark, and Ms. Ozawa came round turning off the lamps over the tables one by one, and the committee pushed the chairs back in, all sixty of them, and Kuga stood in the middle of the empty reading room and breathed out slowly, like a man whose city had survived a storm." }
      ] },
      { id: 'lb-s-bookclub', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Book club met at the big table when the cart was done, with a pot of barley tea Ms. Ozawa made in the back office and pretended not to, and this month's book was a collection of short stories that Kuga had chosen because, he said, it was impossible to disagree about short stories, and in the first five minutes they had disagreed about all of them." },
        { s: 'hoshino', t: "The third one is a love story. It's OBVIOUSLY a love story. They share an umbrella for nine pages." },
        { s: 'kuga', t: "It's about the weather. The author was a meteorologist." },
        { s: 'tamura', t: "I liked the cover." },
        { n: "Everyone turned to look at Tamura, who had been asleep for most of the last meeting and the one before it, and who was now sitting up, blinking, with his copy of the book on the table in front of him, its spine unbroken." },
        { s: 'tamura', t: "The bird on it. On the cover. It's looking back over its shoulder like it forgot something. That's how I feel every morning." },
        { choose: [
          { t: "That's actually what the last story is about. Someone looking back.", stat: { knowledge: 1 }, then: [
            { s: 'tamura', t: "...Is it?" },
            { s: 'solar', f: 'neutral', t: "Read it. It's six pages." },
            { n: "He read it. Right there at the table, while they argued about the umbrella, slowly, mouthing some of the words, and when he finished he closed the book and looked at the bird on the cover for a long time and said huh, softly, and Hoshino had to leave the table for a minute because she was so happy." }
          ] },
          { t: "Tamura's right. The cover's the best part.", stat: { charm: 1 }, then: [
            { s: 'kuga', t: "You can't say that in a book club." },
            { s: 'solar', f: 'neutral', t: "I just did." },
            { n: "Tamura looked at her with an expression of enormous gratitude, like a man who'd found the only other person at the party who didn't know anyone, and Kuga wrote something in his notebook that Solar suspected was her name, underlined." }
          ] }
        ] },
        { n: "They didn't settle the umbrella. They never settled anything. Ms. Ozawa came out at half past five to collect the cups and stood at the end of the table for a moment listening to Hoshino and Kuga go round again, and smiled with her glasses off, and went back to her office, and left them to it." }
      ] },
      { id: 'lb-s-bookweek', months: [10, 11], scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "It was Reading Week, which in the rest of the school meant a poster in the corridor and a ten-minute speech in assembly, and in the library meant Ms. Ozawa had bought a stack of blank cards and asked every committee member to write one recommendation each, anonymously, to be clipped to the front of a book on the display table by the doors." },
        { s: 'ozawa', t: "Just one sentence. Why someone should read it. You don't sign it. That's the point. People listen better when they don't know who's talking." },
        { n: "Hoshino wrote six. Kuga wrote one, after forty minutes, and it was eleven words long and ruthlessly precise and he covered it with his hand when anyone came near. Tamura wrote one for the short stories that just said the bird on the cover knows something, and clipped it on, and looked very proud." },
        { n: "Solar sat with a blank card for a long time. She didn't have a favorite book. She didn't have a book from before, the way everyone else did, the one they'd read at twelve that had rearranged them. She only had this year's." },
        { choose: [
          { t: "(Write one for the lighthouse book from the first meeting.)", stat: { knowledge: 1 }, then: [
            { n: "She wrote: for anyone who keeps a light on for people they've never met. She clipped it to the lighthouse book and put it on the table, and Kuga, passing, read it, and stopped, and read it again, and walked on without a word, and the next morning the book was gone, borrowed, and nobody knew by whom." }
          ] },
          { t: "(Write one for the book Hoshino loves. The bad princess one.)", stat: { charm: 1 }, then: [
            { n: "She wrote: it's terrible and you won't be able to put it down, which is the best kind of terrible. She clipped it on, and Hoshino found it twenty minutes later, and read it, and looked around the room with narrowed eyes, and then at Solar, and Solar looked at the ceiling, and Hoshino said nothing and was in a fantastic mood for the rest of the week." }
          ] }
        ] },
        { n: "By Friday half the books on the display table had been borrowed, and Ms. Ozawa refilled it with the cards moved over to new books, and the library was busier than it had been all term, people drifting in to read the cards and going out with something under their arm they hadn't come in for, and the committee pretended very hard that they didn't care." }
      ] },
      { id: 'lb-s-winter', months: [12, 1], scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Winter had got into the library through the old window frames over the history shelves, so that the radiator under the big table roared and the stacks stayed cold, and you could walk from one season to another in about six steps, and everyone on the committee did their shelving in coats and came back to the table to thaw their hands like people coming in off a mountain." },
        { s: 'hoshino', t: "Okay, everyone. New Year's book fortune. You close your eyes, you pull a book off the shelf, you open it to any page, and the first line you see is your year. My grandmother does it with the dictionary." },
        { s: 'kuga', t: "That's not how fortunes work." },
        { s: 'hoshino', t: "Kuga-senpai, it's not how ANYTHING works. That's why it's fun." },
        { n: "Hoshino went first and got a line from a gardening manual about pruning back old growth, which she decided meant she'd get a haircut. Tamura got a dictionary entry for the word drowsy, and accepted it as fate. Kuga refused, and then, when nobody was looking, did it anyway, and read his line, and put the book back very quickly without telling anyone what it said." },
        { choose: [
          { t: "(Pull one from the fiction shelf. Eyes shut.)", stat: { courage: 1 }, then: [
            { n: "Her finger found a spine in the cold half of the room, and the page fell open somewhere in the middle, and the first line she saw said: she didn't know yet where she was going, only that the road kept going, and that was enough to walk on. She read it twice, and closed the book, and put it back, and didn't say it out loud, and Hoshino didn't make her." }
          ] },
          { t: "(Pull one from the science shelf. Hedge your bets.)", stat: { knowledge: 1 }, then: [
            { n: "She got a book about migratory birds and a line about the arctic tern, which flies from one end of the world to the other every year and back, and has seen more daylight than any other creature alive. Hoshino said that was a beautiful fortune. Solar thought it sounded exhausting, and also, privately, a little like her." }
          ] }
        ] },
        { n: "They put the books back in the cold stacks and came back to the radiator, and Ms. Ozawa brought out the barley tea, and the windows went dark early behind the frost at their edges, and nobody hurried, because outside it was cold and in here it was this." }
      ] },
      { id: 'lb-s-overdue', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Once a month the overdue notices went out, little pink slips that had to be hand-delivered to homerooms, and Kuga gave Solar the third-years' pile because, he said, third-years were frightening and she was one, so it evened out." },
        { n: "Most of them were easy. A girl in 3-A who'd forgotten. A boy in 3-D who swore the book was in his locker and then found it there and looked at it with real betrayal. And one, at the bottom of the pile, for a boy on the kendo team who had borrowed a book about the history of the katana in his first year and had not been seen with it since." },
        { n: "He was in the corridor outside the kendo hall, enormous, in his practice gear with his helmet under his arm, and he took the pink slip and read it and went, slowly, the color of a tomato." },
        { s: 'solar', f: 'neutral', t: "It's two years overdue." },
        { choose: [
          { t: "Kuga says there's an amnesty. If it's back by Thursday, no fine.", stat: { kindness: 1 }, then: [
            { n: "There was no amnesty. Solar had just invented it in the corridor. The boy stared at her as if she'd told him he'd been pardoned by the emperor, and brought the book back on Thursday in a paper bag, and bowed, deeply, to the desk, and Kuga looked at Solar with his eyes narrowed and said nothing, and later, on the overdue log, quietly crossed out the fine himself." }
          ] },
          { t: "The fine is about forty thousand yen.", stat: { courage: 1 }, then: [
            { n: "It wasn't. It was nowhere near that, and she let him believe it for three full seconds before she told him, and in those three seconds the largest boy on the kendo team appeared to see his whole life pass before his eyes, and the book was on the returns cart by five o'clock that same afternoon." }
          ] }
        ] },
        { n: "The katana book came back with a crease down the cover and a folded slip of paper inside it, a first-year's handwritten practice schedule from two years ago, every morning at six, and Solar put it back in the book where she'd found it, because somebody might want to know, someday, that somebody had tried that hard." }
      ] },
      { id: 'lb-s-catalog', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "The school had bought the library a computer. It sat on a desk by the back office, beige and humming and enormous, and on it was a program that was supposed to replace the card catalogue, and somebody had to type every card into it, all eleven thousand of them, and that somebody, Ms. Ozawa had decided, was the committee, a drawer at a time." },
        { s: 'kuga', t: "I want it on record that I object. The card catalogue has worked since 1961. It's never crashed. It's never needed an update. It's wood." },
        { s: 'hoshino', t: "Kuga-senpai, it's eleven thousand cards. It's taking up the entire wall." },
        { s: 'kuga', t: "It's a good wall." },
        { n: "So Solar typed, and Kuga read the cards out to her one at a time in the voice of a man reading names at a funeral, author, title, number, year, and the old drawer smelled of cedar and paper and seventy years of fingers, and every so often there was a card in someone's handwriting from decades ago with a note in the margin, lovely book or missing pg 40 or, once, just a small pencil drawing of a cat." },
        { choose: [
          { t: "(Type the margin notes in too. Somewhere. They should come with it.)", stat: { kindness: 1 }, then: [
            { n: "There was a field in the program called remarks that nobody used, and she put them all in there, the lovely books and the missing page forties and a description of the cat, and Kuga watched her do it over her shoulder for a while, and then, without a word, started reading the margins out too." }
          ] },
          { t: "(Go fast. Get the whole drawer done.)", stat: { proficiency: 1 }, then: [
            { n: "She did the whole drawer, two hundred and twelve cards, in a little over an hour, her fingers going faster than Kuga could read, so that by the end he was reading at a speed she'd never heard from him, and was slightly out of breath, and looked at the empty drawer with a respect that bordered on grief." }
          ] }
        ] },
        { n: "When she was done Kuga put the empty drawer back in the wall of drawers, carefully, in its slot, and pushed it shut, and it slid home with a soft wooden knock, and he stood with his hand flat on the front of it for a second, and then went back to the desk, and Solar did not mention it, then or ever." }
      ] },
      { id: 'lb-s-saori-thursday', ranks: { saori: 2 }, scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Saori had swapped a desk shift onto a Thursday, which she said was because a first-year on the committee had a dentist's appointment and was very afraid of dentists, and which Solar privately suspected was at least partly because it was a Thursday, and Saori was still at the desk at five, stamping cards that didn't need stamping, when the book club began to assemble at the big table." },
        { s: 'hoshino', t: "Hasegawa-senpai! Come and sit! It's the umbrella story again! Kuga-senpai says it's about the weather!" },
        { n: "Saori went very still at the desk, the practiced kind, eyes down, ears beginning to go pink, and Solar watched her weigh it, the long table, the three faces turned toward her, the empty chair." },
        { s: 'saori', f: 'flustered', t: "Oh. I couldn't. I'm sorry. I'm on the desk. I'd only be in the way." },
        { choose: [
          { t: "(Pull out the chair next to you. Don't say anything.)", stat: { kindness: 1 }, then: [
            { n: "Solar pulled it out, just a little, and went back to her tea, and didn't look at the desk, and after about a minute, which was a very long minute, there was the soft sound of the brass stamp being put down, and Saori came and sat in it with her hands in her lap, as if she'd only been passing." },
            { bond: { saori: 1 } }
          ] },
          { t: "It's not about the weather. Tell him.", stat: { charm: 1 }, then: [
            { s: 'saori', f: 'surprised', t: "...It isn't. It's about being walked somewhere. Sorry. I mean. That's only what I think." },
            { n: "She'd said it from the desk without meaning to, and the whole table turned to look at her, and Kuga, who had never in his life conceded a point about a short story, put his pencil down and said go on, and she came to the table, slowly, to go on." },
            { bond: { saori: 1 } }
          ] }
        ] },
        { s: 'kuga', t: "...That's a reasonable reading. I still think it's the weather." },
        { s: 'saori', f: 'happy', t: "It can be both. Sorry. It can be both." },
        { n: "She stayed until half past five and said sorry nine times, and Hoshino counted, out loud, under her breath, and Saori heard her and laughed, small and surprised, and Hoshino turned scarlet with joy, and when Saori went back to the desk to lock up she was smiling at the stamp as if it had told her a joke." }
      ] },
      { id: 'lb-s-saori-thursdays', ranks: { saori: 7 }, after: '9/17', days: [4], scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Ōmori had Thursdays now. Ms. Ozawa had given them to her at the duty meeting in a voice that ended the meeting, and she had come every week since, on time, with her glossy ponytail and her practiced smile, and shelved, which nobody on the committee had ever seen her do, badly, with the faint air of a duchess taking out the bins." },
        { n: "Today Saori had stayed late to finish an inventory list, and the two of them were in the same aisle, the 900s, Ōmori with a cart of novels and Saori with her clipboard, and the whole library seemed to be holding its breath, Hoshino at the desk with both hands over her mouth, Kuga very slowly turning a page he hadn't read." },
        { n: "Ōmori put a book in the wrong place. Then another. The 913s were alphabetized by author and she was doing it by color." },
        { choose: [
          { t: "(Stay at the big table. This one's Saori's.)", stat: { kindness: 1 }, then: [
            { n: "Solar stayed where she was, and watched the aisle without seeming to, and saw Saori lower her clipboard and step over and take the two books out of the wrong places and put them in the right ones, and say something, not loud, not quiet either, the level voice she used for due dates." },
            { bond: { saori: 1 } }
          ] },
          { t: "(Go and shelve the other end of the aisle. Be nearby. Be boring.)", stat: { courage: 1 }, then: [
            { n: "Solar took a few returns and went and shelved them at the far end of the 900s, slowly, boringly, close enough to be there and far enough not to be anything, and heard Saori say, in the level voice she used for due dates, that it was by author, not by color, and that it took everybody a while." },
            { bond: { saori: 1 } }
          ] }
        ] },
        { s: 'omori', t: "...Fine. By author." },
        { n: "That was all. Ōmori didn't thank her and Saori didn't wait to be thanked. She went back to her clipboard and Ōmori went back to the cart and put the next book in the right place, and the library let its breath out, and Hoshino made a sound at the desk like a balloon going down." },
        { n: "Later, at the shoe lockers, Saori said it hadn't felt like anything, really. She said it twice. Her hands, Solar noticed, were perfectly steady both times." }
      ] }
    ],
    beats: [
      { id: 'lb-arc-1', at: 2, after: '4/20', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Kuga came to the big table with a sheet of paper held flat in both hands like a man carrying a summons, and laid it down among the teacups, and everybody leaned in. It was the student council's form for registered circles, and it had five lines on it for members' names, and three of the lines were filled in." },
        { s: 'kuga', t: "The council reviews every circle in the autumn. Five names, or the book club stops existing. The big table becomes a study area. They'll put dividers on it. Little plastic walls." },
        { s: 'hoshino', t: "Little plastic walls! On the big table! Kuga-senpai, that's monstrous." },
        { n: "The three names were Kuga's, in a hand so tidy it looked typed, and Hoshino's, with a small star after it, and Tamura's, which Solar noticed was in Hoshino's handwriting." },
        { s: 'solar', f: 'neutral', t: "Does Tamura know he's on this?" },
        { s: 'hoshino', t: "He will. When he wakes up. I'm sure he'd want to be." },
        { choose: [
          { t: "(Take the pen. Write your name on line four.)", stat: { courage: 1 }, then: [
            { n: "She wrote it. SOLAR, on line four, and nothing after it, and Kuga looked at the space where a surname would usually go for exactly one second, and then didn't look at it again, and wrote volunteer, book club in small letters in the margin beside it, as though that answered everything a form could ask." }
          ] },
          { t: "Who else reads in here? Nobody's ever asked them.", stat: { knowledge: 1 }, then: [
            { n: "She wrote her own name first, on line four, and then turned the sheet over and started a list on the back of everyone she'd seen reading in the library more than twice, by description, since nobody knew their names: the boy with the bird book, the girl who reads standing up, the first-year in the 400s. Kuga read the list upside down and said it was the most organized thing anyone but him had ever done in this room." }
          ] }
        ] },
        { n: "Tamura woke up at half past four, and was told, and looked at the form, and at his own name in Hoshino's handwriting, and considered it slowly, the way he considered everything." },
        { s: 'tamura', t: "...Okay. Do I have to finish a book?" },
        { s: 'kuga', t: "It would be a first." },
        { s: 'tamura', t: "Then I'll try. For the table." },
        { n: "Four names. Kuga pinned the form to the corkboard behind the desk with four pins, one at each corner, very straight, and stood back, and looked at the empty fifth line for a while like someone looking at a chair at a dinner table that nobody had sat down in yet." }
      ] },
      { id: 'lb-arc-2', at: 5, after: '6/8', prev: 'lb-arc-1', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "Hoshino's idea was a blind date with a book. She'd seen it in a magazine. You wrapped books in brown paper so nobody could see the cover, and wrote one line about them on the front, and put them on a table by the doors, and people took them home without knowing what they were, and fell in love, and joined the book club." },
        { s: 'kuga', t: "That last step isn't in the magazine." },
        { s: 'hoshino', t: "It's implied." },
        { n: "So they spent the afternoon wrapping books at the big table while the rain ran down the tall windows, brown paper and string from the back office, and argued about every line, and Tamura, to everyone's astonishment, was very good at it. He held each book for a while and then wrote something short and strange on it in a slow careful hand, and the strange ones were the best." },
        { s: 'tamura', t: "This one's about a man who walks a long way to give somebody a letter. So I wrote, you will want to call someone after." },
        { s: 'hoshino', t: "Tamura-senpai. Did you READ that?" },
        { s: 'tamura', t: "...Half. On the train. It was a long train." },
        { choose: [
          { t: "(Wrap one for whoever keeps reading in the 400s. Something about stars.)", stat: { kindness: 1 }, then: [
            { n: "She wrapped the blue-spined astronomy book with a line that said for someone who looks up, and put it at the front of the table, and two days later it was gone, and Kuga, who noticed everything, said only that a first-year had taken it out holding it in both hands like a bird." }
          ] },
          { t: "(Write the lines like movie trailers. Make them loud.)", stat: { charm: 1 }, then: [
            { n: "IN A WORLD WITHOUT PUNCTUATION, she wrote, on a book of modern poetry, and ONE MAN, ONE CAT, ONE VERY LONG WINTER, on a novel Kuga swore was very serious, and Hoshino laughed so loudly that Ms. Ozawa came out of the back office, read them, and went back in without a word, and a minute later they heard her laughing through the door." }
          ] }
        ] },
        { n: "By the end of the week every book on the table had gone. Thirty-one blind dates, all taken. Nobody joined the book club. The fifth line on the form stayed empty on the corkboard behind the desk." },
        { n: "But on Thursday a quiet first-year boy who Solar had seen reading in the corner by the window since April, always alone, always the same chair, came to the desk to return his, and stood there for a second longer than returning a book required, looking at the corkboard. Then he went back to his chair. It was something. Kuga wrote it down." }
      ] },
      { id: 'lb-arc-3', at: 9, after: '9/22', prev: 'lb-arc-2', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "The council review was on Monday. Kuga had known it since April and had said nothing about it for a week, which was how Solar knew he was frightened, and today he sat at the head of the big table with the form in front of him, four names, one empty line, and tapped the empty line with the end of his pencil, slowly, like a clock." },
        { s: 'kuga', t: "I've drafted a letter of appeal. It's four pages. It cites the school charter." },
        { s: 'hoshino', t: "Kuga-senpai, nobody's going to read four pages." },
        { s: 'kuga', t: "Then they'll lose on a technicality. Which is how I'd prefer to lose." },
        { n: "The quiet first-year from the window chair was at the desk again, returning something, and Solar watched him do it, and watched him not leave, and watched him look at the corkboard and then at the big table and then at his own shoes, the way you stand at the edge of a pool deciding about the water." },
        { choose: [
          { t: "(Go over. Ask him what he thought of the blind date.)", stat: { charm: 1 }, then: [
            { s: 'lbUeda', t: "...It was about a man walking a long way with a letter. I didn't want to call anyone after. I wanted to write one. Is that wrong?" },
            { s: 'solar', f: 'neutral', t: "Tell Tamura. He wrote the label." },
            { n: "The boy looked at the big table, where Tamura was very nearly asleep, and back at her, and then walked over, all the way, and stood beside Tamura's chair until Tamura opened one eye, and said it. Tamura sat up. Nobody had ever told him his label had done anything. He looked like a man who'd been handed a medal." }
          ] },
          { t: "(Hold out the pen to him. Say nothing.)", stat: { courage: 1 }, then: [
            { n: "Solar picked up the pen from the big table and held it out across the desk toward him, not saying anything, just holding it, the way you'd hold out a hand to someone stepping off a boat, and he looked at it for a long time, and took it." }
          ] }
        ] },
        { s: 'lbUeda', t: "Ueda. First-year. I've been reading in the window chair since April. I didn't know you were allowed to just... sit at the big table." },
        { s: 'hoshino', t: "You're allowed! You're SO allowed! Kuga-senpai, tell him he's allowed!" },
        { s: 'kuga', t: "...You're allowed." },
        { n: "He wrote his name on the fifth line, small, and Kuga took the form and looked at it for a long time without speaking." },
        { ifRank: { saori: 3 }, then: [
          { n: "Then he turned it over, because there was something on the back, and frowned, and turned it so the table could see. Underneath the student council's small print, in small, round, careful handwriting, someone had written a sixth name, and beside it, very small, sorry, in case you needed one more." },
          { s: 'hoshino', t: "That's Hasegawa-senpai's handwriting. I'd know it anywhere. She labels the hospital box." },
          { n: "Six. Kuga looked at the six names for a long time, and then said, in a voice that wasn't quite his usual one, that they were now technically overstaffed, and that he'd have to revise the letter." }
        ], else: [
          { n: "Five. He pinned it back on the corkboard, and took the four-page letter of appeal out of his bag, and tore it neatly in half, and then in quarters, and dropped it in the bin by the desk, and Hoshino applauded, alone, and then everyone did, and Ms. Ozawa came out to see what the noise was and found the book club clapping for a wastepaper basket." }
        ] }
      ] },
      { id: 'lb-arc-4', at: 13, after: '12/1', prev: 'lb-arc-3', scene: [
        { place: 'Gekkoukan High · Library', time: 'After School' },
        { n: "It was the last book club of the year, and the last one of Kuga's, because the entrance exams were coming for him in January the way they were coming for every third-year, and he'd announced it at the start of the meeting in the voice he used for overdue notices, and then sat down very quickly and opened his notebook and didn't look up." },
        { n: "The windows had gone white at the edges with frost and the radiator under the big table was roaring, and Ms. Ozawa had made the barley tea in the good pot, the one with the chip in the lid that she said had been there since before Kuga was born, and everybody was there. Hoshino, Tamura, Ueda in his chair at the big table now, as if he'd always sat there." },
        { ifRank: { saori: 3 }, then: [
          { n: "Saori had come too, on a day that wasn't hers, and sat at the corner of the table with her hands around her cup and her shoulders up, and Hoshino had put a sign in front of her place that said MEMBER in large letters, and she kept looking at it and looking away." }
        ] },
        { s: 'kuga', t: "I had a speech. It was four pages. I've decided against it. Instead, everybody reads the first line of a book they love. Out loud. Then we go home. That's the meeting." },
        { n: "Hoshino read the first line of the princess and the ninja, and was so overcome she had to stop halfway. Tamura read the first line of the man with the letter, which he'd finished, all of it, on a long train, and nobody said anything about it because everybody knew if they did he'd never finish another. Ueda read a line about a window." },
        { ifRank: { saori: 3 }, then: [
          { n: "Saori read the first line of an old cloth-bound book of folktales, the one about a sister who climbed a rope into the sky, very softly, and then a little less softly, the second time, because Kuga said he hadn't heard, and he had." }
        ] },
        { n: "Then it was Solar's turn, and she didn't have a book from before. She had this year's. She took the thin lighthouse novel out of her bag, the first one Kuga had ever handed her, which she'd bought at Bookworms in the end because she hadn't wanted to give it back." },
        { choose: [
          { t: "(Read the first line. Then the last.)", stat: { knowledge: 1 }, then: [
            { n: "She read the first line, about a man climbing a hundred and twelve stairs at dusk to light a lamp for ships he'd never see, and then turned to the end and read the last, which was the same stairs, the same lamp, and a ship, finally, sounding its horn as it passed. Nobody said anything for a while. Kuga took off his glasses and cleaned them, for a long time, with the end of his cardigan." }
          ] },
          { t: "(Read the first line. Then hand the book to Kuga.)", stat: { kindness: 1 }, then: [
            { n: "She read the first line, about a man climbing a hundred and twelve stairs at dusk to light a lamp for ships he'd never see, and then closed the book and slid it down the table to Kuga, and said it was due back in the spring, after his exams, and he'd better not lose it. He looked at it for a long time. He put it in his bag, very carefully, between two textbooks, so the cover wouldn't bend." }
          ] }
        ] },
        { n: "At the end Kuga took the form down off the corkboard and crossed out his own name and wrote Hoshino's beside the word chair, and gave it to her, and Hoshino burst into tears, and Tamura patted her on the head like a large, kind dog, and the radiator roared, and outside the windows it had gone dark at half past four the way it did now, and the library was the brightest room in the school." },
        { s: 'kuga', t: "Five names. Keep it at five. Little plastic walls, Hoshino. Never forget." }
      ] }
    ],
    quiet: [
      { id: 'lb-q-stamp', scene: [
        { n: "Ms. Ozawa let Solar do the date stamp for an hour, rolling the little wheels with her thumb, pressing it down onto each card with a satisfying chunk." },
        { n: "By the end she was doing it in rhythm without thinking, and found that she'd started to look forward to it, which she suspected was how it got everyone." }
      ] },
      { id: 'lb-q-pencils', scene: [
        { s: 'solar', f: 'neutral', t: "Kuga. Why two pencils?" },
        { s: 'kuga', t: "One for writing. One for if someone asks to borrow a pencil." },
        { n: "He said it as though it were obvious, and lent the second one to a first-year ten minutes later, and never got it back, and had a new one behind his ear by Thursday." }
      ] },
      { id: 'lb-q-tamura-sleep', scene: [
        { n: "Tamura was asleep at the big table again, cheek on his arm, and someone had left a small paper sign propped against his elbow that said PLEASE DO NOT DISTURB: READING." },
        { n: "It was in Hoshino's handwriting. Solar added a small drawing of a pillow and left it there." }
      ] },
      { id: 'lb-q-hoshino-plot', scene: [
        { s: 'hoshino', t: "Senpai. The ninja. He was the princess's brother the whole time. Her BROTHER. I threw the book across my room. Then I picked it back up." },
        { choose: [
          { t: "Wait, then who was the masked swordsman?", stat: { charm: 1 }, then: [
            { s: 'hoshino', t: "THANK you. Nobody asks the right questions. Sit down. This is going to take a while." }
          ] }
        ] }
      ] },
      { id: 'lb-q-window', scene: [
        { n: "Solar shelved the 900s while the light came in through the tall windows in long pale bars, and every so often she stopped with a book in her hand and just stood in one of them for a second, warm on her face, the dust turning slowly around her like something underwater." },
        { n: "Then she put the book back where its number said, and moved on to the next bar of light." }
      ] },
      { id: 'lb-q-returns', scene: [
        { n: "Someone had returned a book with a pressed flower inside it, a small blue one, flat and papery, halfway through the last chapter." },
        { n: "Solar didn't take it out. She put the book back on the shelf with the flower where it was, so the next person would find it at the same page." }
      ] },
      { id: 'lb-q-ozawa-tea', scene: [
        { n: "Ms. Ozawa came out of the back office with two cups of barley tea and set one down by Solar's elbow without a word, and went back in, and closed the door." },
        { n: "It was exactly the right temperature. It always was. Nobody knew how she did it." }
      ] },
      { id: 'lb-q-ueda', scene: [
        { n: "The quiet first-year in the window chair had his nose in a book about ships again, and when Solar went past with the cart he lifted it a few centimeters off the table, cover out, without looking up, like a man showing a ticket." },
        { n: "She nodded at the cover. He put it back down. That was the whole conversation, and it was a good one." }
      ] },
      { id: 'lb-q-label', scene: [
        { n: "One of the spine labels on the 400s had peeled halfway off, and Solar printed a new one at the desk and pressed it on, straight, with her thumbnail, from the middle out." },
        { s: 'kuga', t: "That's the straightest label in the building. I measured." }
      ] },
      { id: 'lb-q-quiet', scene: [
        { n: "For a whole half hour nobody came in, nobody whispered, and the library was so quiet Solar could hear the radiator thinking about it and the clock over the desk deciding each second." },
        { n: "She didn't do anything with it. She just sat at the big table and let it be quiet, which she was starting to understand was one of the things a library was for." }
      ] }
    ],
    openers: {
      4: "The library still had the chill of the spring holidays in its back stacks, and the cherry trees outside the tall windows were throwing pink light across the long tables, and the returns cart was full of first-years' first borrowings.",
      5: "May had the windows propped open, and the sound of the baseball team cracking balls off the fence came in on a breeze that smelled of cut grass, and lifted the corners of every loose page on the big table.",
      6: "The rainy season had got into the paper; the whole library smelled faintly of wet wool and old glue, and the returns slot kept producing books that looked like they'd been swimming.",
      7: "The air conditioning had broken again, the way it broke every July, and a single fan turned slowly on the desk, lifting the edges of the overdue list every time it came round.",
      8: "Summer hours: the library kept its doors open for the committee and nobody else, and the light lay hot and gold on empty tables, and the dust turned in it all afternoon.",
      9: "September had brought everybody back with a tan and an excuse, and the returns cart was buried under summer reading that had very clearly not been read.",
      10: "October had come in cool and clear, and the light through the tall windows had gone thin and gold and slanting, and the radiator knocked twice for the first time since spring.",
      11: "November, and it was dark by half past four, and the green-shaded lamps on the reading tables came on early, and the library became a warm room floating on the dark.",
      12: "December had put frost in the corners of the windows over the history shelves, and the radiator under the big table roared, and the stacks stayed cold enough to see your breath.",
      1: "January, and the library smelled of radiators and the oranges somebody had been peeling at the big table, and the frost on the windows made the whole room glow white at the edges."
    }
  },

  /* ── Light music club (Tue / Fri) ── */
  'club-band': {
    cast: { aoi: 'Aoi', gen: 'Gen', mika: 'Mika', kousuke: 'Kousuke', brass: 'Wind ensemble girl' },
    join: [
      { place: 'Gekkoukan High · Music Room', time: 'After School' },
      { n: "The music room was on the third floor at the end of the corridor, a long bright room with a grand piano asleep under a dust sheet and rows of folding chairs stacked against one wall, and through the other wall, very clearly, the wind ensemble was rehearsing something with a lot of trumpets in it, and losing." },
      { n: "The light music club lived in the back corner. A drum kit with one cymbal held up by a music stand and a great deal of tape. Two guitars on stands. A battered black amp with a strip of masking tape across the top that said, in marker, KOUSUKE'S COUSIN'S. DO NOT TOUCH. DO NOT EVEN LOOK. And four people, who all stopped what they were doing and stared at the door when Solar came through it with her secondhand keyboard in its soft case, which had a broken zipper and had been held shut all the way from the dorm by her arm." },
      { s: 'aoi', t: "You came. You actually came. The poster said can you count to four. Four people answered it and three of them were joking." },
      { n: "Aoi was a second-year with a short ragged haircut she had very clearly done herself, and the inside of her left forearm was covered in ballpoint, lines of it, crossed out and rewritten, lyrics, Solar realized, an entire song's worth up to the elbow." },
      { s: 'kousuke', t: "Kousuke. Guitar. Rhythm, mostly. Don't touch the amp. It's not even a rule, it's a law. My cousin knows where I live." },
      { s: 'gen', t: "Gen. Bass." },
      { n: "Gen was a third-year, large and calm, sitting on an upturned crate with a bass across his knees and a melon bread in one hand, and that, it became clear over the following weeks, was about as long as his sentences got." },
      { s: 'mika', t: "Mika! First-year! Drums! I'm sorry in advance. Everyone says I'm too fast. I'm not too fast. Everyone else is too slow." },
      { s: 'aoi', t: "We need a keyboard because the song we want to play has a keyboard in it, and when we play it without one it sounds like a song with a hole in it. Can you play?" },
      { choose: [
        { t: "(Play the eight bars you've been practicing at your desk all week.)", stat: { proficiency: 1 }, then: [
          { n: "She set the keyboard up on two chairs and played them, the same eight bars she'd been playing into her headphones every night until her fingers stopped thinking about it, and halfway through Gen put down his melon bread, and at the end Kousuke said, quietly, oh, and Aoi looked down at her own arm as if checking that the song was still there." }
        ] },
        { t: "Play it for me first. With the hole. So I can hear where it goes.", stat: { knowledge: 1 }, then: [
          { n: "They played it with the hole. It was exactly as Aoi had said, a song walking with a limp, and Solar listened with her head on one side and heard where the missing part should be, the way you hear the step that isn't there at the bottom of a staircase, and when they finished she played it, just the gap, and it fit." }
        ] },
        { t: "I can count to four. That's the main thing, right?", stat: { charm: 1 }, then: [
          { s: 'aoi', t: "Honestly? Yes. That's ninety percent of it. Mika can't." },
          { s: 'mika', t: "I CAN. I just count to four faster than other people." }
        ] }
      ] },
      { n: "Mika counted them in, much too fast, and they fell into the song like four people falling down a flight of stairs together, and for six bars it was chaos, and then, somewhere in the seventh, Gen found the bottom of it with the bass and stayed there like a wall you could lean on, and everybody leaned on it, and for eight bars, nine, ten, it was a song." },
      { n: "Then the wind ensemble hit a high note through the wall and Mika jumped and dropped a stick, and it was over. Nobody minded. Kousuke was grinning. Aoi wrote something on her arm, below the elbow, where there was still room." },
      { s: 'aoi', t: "Okay. Okay. Welcome to the band. We don't have a name. That's a whole other problem. We'll get to it." },
      { n: "On the whiteboard behind the drum kit was a long column of names, every one of them crossed out, and as Solar packed up Kousuke added another to the bottom, and Gen crossed it out without looking, and she carried the keyboard back down three flights of stairs and across the grounds with her arm aching from the broken zipper and the ten good bars still going around and around in her head like a ball in a wheel." }
    ],
    shifts: [
      { id: 'bd-s-setlist', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "The argument had started before Solar got there and had evidently been going for some time, because Kousuke had drawn a line down the middle of the whiteboard and written COVERS on one side and ORIGINALS on the other, and under ORIGINALS there was one item, Aoi's arm, and under COVERS there were nine songs and a small angry drawing of Aoi." },
        { s: 'kousuke', t: "People like songs they know! You play a song they know, they sing along, they love you. You play a song they don't know, they go to the bathroom." },
        { s: 'aoi', t: "Then they can go to the bathroom! I'm not starting a band to be somebody else's song!" },
        { s: 'mika', t: "Can we play anything? Literally anything? I've been holding these sticks for twenty minutes." },
        { n: "Gen, on his crate, said nothing, and ate his melon bread, and then held out the bread toward Solar, which she was beginning to learn meant that he'd decided she was the tiebreaker, and that he'd like this to be over." },
        { choose: [
          { t: "Three covers they'll know. Then Aoi's song last. When they're already ours.", stat: { charm: 1 }, then: [
            { n: "There was a pause. Kousuke looked at Aoi. Aoi looked at her own arm. Then, slowly, Aoi took the marker and drew an arrow from her arm on the whiteboard to the very bottom of the COVERS list and wrote LAST, and underlined it, and Kousuke said fine, and Mika hit the crash cymbal in celebration, and the music stand holding it up fell over." }
          ] },
          { t: "Play one of each, right now. Whichever one sounds better, wins.", stat: { courage: 1 }, then: [
            { n: "They played a cover first, and it was fine, and then they played Aoi's half-finished song off her forearm with Solar reading the chords over Aoi's shoulder, and it fell apart twice and was much, much better, and everyone knew it by the end, even Kousuke, who sighed like a man watching his life's work burn and said okay, okay, but the cover's still going in." }
          ] }
        ] },
        { n: "When they'd gone Solar was the last one in the room, and she stood at the whiteboard for a while looking at the line Kousuke had drawn down the middle of it, covers and originals, the songs everyone knew and the one nobody did yet, and found she knew exactly which side of it she was standing on, and didn't know how she knew." }
      ] },
      { id: 'bd-s-brass', months: [4, 5], scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "The wind ensemble had a competition coming, and they had decided, without telling anybody, to rehearse for it at a volume that came through the wall like weather, forty brass and woodwind players working their way through a march so loud that the window in the music room hummed in its frame and Mika could feel it, she said, in her teeth." },
        { s: 'kousuke', t: "We can't hear ourselves. I can't hear my own amp. That's never happened. That amp could cut through a typhoon." },
        { s: 'aoi', t: "Then turn it up." },
        { s: 'kousuke', t: "It's my COUSIN'S." },
        { n: "So they turned it up, a little, and the wind ensemble got louder, and they turned it up again, and somewhere around the third escalation the door between the rooms opened and a girl with a trumpet under her arm and her hair in a very tight bun stood in it and looked at them all with an expression of great patience running out." },
        { s: 'brass', t: "Our conductor is asking, very politely, whether you could stop being a rock band for thirty minutes." },
        { choose: [
          { t: "Or you could play with us. Just once. Key of G.", stat: { courage: 1 }, then: [
            { n: "The trumpet girl stared at her. Then she looked back through the door at her conductor, who was eating a rice ball and had evidently given up for the day, and then she lifted the trumpet. They played the cover in G. She came in on the second chorus, loud and bright and completely uninvited, and it was the best the song had ever sounded, and she left immediately afterward without a word, red to the ears, and the march started up again through the wall, slightly less loud." }
          ] },
          { t: "(Offer a trade. Your half hour now for their half hour after.)", stat: { charm: 1 }, then: [
            { n: "She offered the trade, and the trumpet girl considered it with narrowed eyes and accepted with a short nod, like a general signing a treaty, and for thirty minutes the light music club sat in silence listening to the march through the wall, which was, Gen admitted later, in two words, actually good." }
          ] }
        ] },
        { n: "The window had petals stuck to the outside of it, from the trees in the courtyard, and they buzzed against the glass every time the brass hit a big note. Mika watched them do it, through the whole rest of practice, and kept time with them, and was, for once, not too fast." }
      ] },
      { id: 'bd-s-humid', months: [6, 7], scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "It was the rainy season, and the humidity had got into the guitars. Kousuke tuned his three times before they'd played a single song and it went flat again in the middle of the first chorus, and Aoi's was worse, and the room smelled of damp wood and the sweet chemical smell of the amp warming up, and out past the windows the rain hung in the air rather than falling, as if it couldn't be bothered." },
        { s: 'kousuke', t: "Wood breathes. It drinks the air. In June, a guitar is basically a sponge with strings on it." },
        { s: 'aoi', t: "Your keyboard doesn't go out of tune. That's so unfair. I hate it a little. I mean that with love." },
        { n: "Then the thunder came, a long low roll somewhere over the bay that rattled every window on the third floor, and Mika, who had been counting in, flinched so hard she landed the next beat dead on the thunder, and the band came in with it, and for one whole verse they were exactly in time with the weather." },
        { choose: [
          { t: "(Play the keyboard in the pauses between the thunder.)", stat: { proficiency: 1 }, then: [
            { n: "She played in the gaps the thunder left, a few soft chords each time the sky went quiet, and the band followed her lead without being told, and they made a whole song out of the storm, loud when it was loud and quiet when it wasn't, and when the thunder finally moved off east they all sat there for a second afterward as if somebody had taken away the fifth member." }
          ] },
          { t: "Mika. Count off the thunder. Count the seconds.", stat: { knowledge: 1 }, then: [
            { n: "Mika counted between the flash and the roll, one, two, three, four, five, and announced that the storm was a kilometer and a half away, and then two, and then three, and played a fill every time she finished a count, so the song got a little slower as the storm moved off, which was the first time in recorded history Mika had ever slowed down." }
          ] }
        ] },
        { n: "When they packed up the rain had finally started properly, and Gen stood at the window with his bass on his back looking out at it, and said, without turning round, good, which was one word, and seemed to cover everything." }
      ] },
      { id: 'bd-s-fuuka', after: '6/20', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "The amp had developed a hum. A low, constant, buzzing hum that sat under everything they played like an insect trapped in the room, and it got louder when Kousuke touched his strings and quieter when he didn't, and Kousuke had spent twenty minutes taking cables in and out with the face of a man defusing a bomb." },
        { s: 'kousuke', t: "If I've broken it, I'm dead. I want you all to know that. He knows where I live. He LIVES where I live." },
        { n: "Someone knocked on the open door. It was Fuuka, with her bag held in front of her in both hands, apologizing for interrupting before she'd even said hello, and explaining that she'd been walking past, and she'd heard, and she didn't mean to be rude, but that sounded a lot like a ground loop." },
        { s: 'fuuka', f: 'neutral', t: "Sorry. It's... it's when two pieces of equipment are plugged into different outlets and the electricity sort of argues about it. Can I look? I won't touch anything. Well, I'll touch one thing." },
        { choose: [
          { t: "Please. Kousuke's about to cry.", stat: { charm: 1 }, then: [
            { s: 'kousuke', t: "I'm not about to cry. I'm already crying. Inside." },
            { n: "Fuuka laughed, a small surprised laugh she covered with her hand, and knelt down behind the amp in her school skirt without hesitating for a second, and followed the cables back to the wall with one finger like someone reading a map." }
          ] },
          { t: "(Hand her the cable Kousuke's been fighting with.)", stat: { kindness: 1 }, then: [
            { n: "Fuuka took it in both hands, gently, as if it were something alive, and looked at it, and then knelt behind the amp and followed it back to the wall with one finger like someone reading a map." }
          ] }
        ] },
        { n: "She moved the amp's plug to the same power strip as the keyboard. That was all. The hum stopped as if somebody had shut a door on it, and the whole room went so quiet that they could hear the wind ensemble through the wall, and Kousuke put both hands over his face, and Aoi said Fuuka's name like it was a word in a prayer." },
        { s: 'fuuka', f: 'happy', t: "Oh, and the mixer. Your vocal channel's EQ is very... enthusiastic. If you turn the high end down a little, Aoi-san won't sound like she's singing through a tin can." },
        { n: "She stayed for one song, sitting on Gen's crate with her knees together and her hands in her lap, turning the knobs on the little mixer a millimeter at a time while they played, her head tilted, listening the way she seemed to listen to everything, as if there were more in it than anybody else could hear. When she left, Aoi wrote FUUKA on the whiteboard, under the band names, in a box, and nobody crossed it out." }
      ] },
      { id: 'bd-s-festival', months: [9, 10], until: '10/29', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "Stage times for the culture festival were given out by lottery, and the light music club had been told that the lottery would be drawn by one representative from each club, in person, from a box, in the student council room, and Aoi had decided after a sleepless night that the representative would not be her, because her hands were cursed." },
        { s: 'aoi', t: "Solar. You go. You've got lucky hands. I can tell. You play like someone with lucky hands." },
        { s: 'mika', t: "If we get the slot right after lunch, everyone will be asleep. If we get the last slot, everyone will be gone. There's like one good slot. ONE." },
        { n: "So Solar went, and stood in a line of club representatives in the student council room with the late sun coming in across the long table, and when her turn came she put her hand in the box, which was a cardboard tissue box with the top cut off, and felt the folded slips of paper move under her fingers like something breathing." },
        { choose: [
          { t: "(Take the first one your fingers touch.)", stat: { courage: 1 }, then: [
            { n: "She took the first one. It said Saturday, two-fifteen, which was the one good slot, the one Mika had meant, and when she came back up the stairs and held it up in the doorway of the music room Aoi screamed and Kousuke screamed and Mika hit every drum she owned at once, and Gen, on his crate, raised his melon bread in silent salute." }
          ] },
          { t: "(Feel for the one that's folded differently. Somebody always folds one differently.)", stat: { knowledge: 1 }, then: [
            { n: "One was folded in thirds instead of half. She took it. It said Sunday, eleven-forty, which was not the good slot, and she stood in the doorway of the music room holding it up, and Aoi looked at it for a long time, and then said, slowly, that morning was actually perfect, morning people were the kindest audience, and everyone agreed with her so fast it was clearly a lie, and they loved her for it." }
          ] }
        ] },
        { n: "They practiced the set twice through after that, every song, in order, and Aoi kept looking at the slip of paper taped to the wall above the drum kit like it might change if she stopped watching it, and on the walk to the gate she told Solar, very quietly, that it was the first time anything had ever been written down." }
      ] },
      { id: 'bd-s-original', months: [10, 11], scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "Aoi had run out of arm. The song had climbed past her elbow and up to her shoulder under her blazer, and Kousuke had suggested, delicately, that she might consider paper, and she had looked at him as though he'd suggested she might consider not breathing." },
        { s: 'aoi', t: "It doesn't work on paper. On paper I cross things out. On my arm I have to live with them." },
        { n: "Today she rolled her sleeve all the way up and held her arm out over the keyboard so Solar could read it, and the whole band crowded round, and the song went up the inside of her arm in ballpoint, verse and chorus and verse, with arrows and crossings-out and one word underlined three times, and then it stopped, just above the elbow, in the middle of a line." },
        { s: 'aoi', t: "That's the bridge. That's where it goes somewhere. I don't know where it goes. I've been stuck there for three weeks." },
        { choose: [
          { t: "(Play something under the last line. See where it wants to go.)", stat: { proficiency: 1 }, then: [
            { n: "Solar played the last chord, and then, without thinking about it, the one after, which wasn't the one anyone expected, a step down instead of up, a door that opened onto a different room, and Aoi went completely still, and then grabbed a pen off the music stand and wrote two words on her own arm, fast, and looked up, and her eyes were wet." }
          ] },
          { t: "What's the underlined word?", stat: { knowledge: 1 }, then: [
            { s: 'aoi', t: "...Stay. It's stay. The whole song's about whether to." },
            { n: "Solar played the chord that sounded most like that word, the one that hung there without resolving, waiting, and Aoi listened to it with her eyes shut and then wrote, under the last line, the next one, slowly, carefully, and the bridge went somewhere." }
          ] }
        ] },
        { s: 'gen', t: "Again." },
        { n: "They played it again, the whole thing, with the new bridge, Aoi singing it off her own arm, and Gen's bass was the floor and Mika, for the length of one song, was exactly on time, and when it was done nobody said anything for a long while, and outside the windows the sky had gone pink over the bay and nobody had noticed it happen." }
      ] },
      { id: 'bd-s-winter', months: [12, 1], scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "The heating in the music room worked on a schedule known only to itself, and today it had decided not to, so the band practiced in their coats with their breath going up in clouds over the instruments, Kousuke in fingerless gloves he'd cut down from a pair of his mother's, Mika in a hat with a pompom that bounced on every snare hit." },
        { s: 'kousuke', t: "I can't feel my fingers. This is how guitarists die. Frozen to the fretboard. They'll find me in spring." },
        { s: 'mika', t: "Let's play a Christmas song. As a joke. To keep warm." },
        { n: "So they played one, the most famous one, as a joke, fast and stupid, Mika doing sleigh bells on the hi-hat and Aoi singing it in a fake deep voice, and then, somewhere in the second verse, without anyone deciding to, it stopped being a joke. It slowed down. Aoi dropped the voice. The keyboard came in under it soft and warm, and it was just a song, in a cold room, sung properly, and Gen closed his eyes." },
        { choose: [
          { t: "(Keep it slow. Don't let anyone turn it back into a joke.)", stat: { charm: 1 }, then: [
            { n: "She kept it slow, held it there with the keyboard so nobody could speed it up, and nobody tried, and they played it all the way through to the end, and when the last chord faded there was a sound from the doorway, and it was a teacher with an armful of folders who'd stopped in the corridor to listen and was now pretending, badly, that she hadn't." }
          ] },
          { t: "(Pass round the hand warmers in your coat pocket.)", stat: { kindness: 1 }, then: [
            { n: "She'd bought a packet of them at the convenience store that morning, the kind you shake until they get hot, and she passed them round, one each, and Kousuke held his against his cheek and made a noise like a cat, and then they played the whole song again, properly this time, slowly, with warm hands." }
          ] }
        ] },
        { n: "When they'd finished it had started to snow outside, very lightly, flakes drifting past the dark window in the light from the room, and Mika pressed her face to the glass and said it was a sign, and Aoi said of what, and Mika said she didn't know yet, but it was definitely a sign, and nobody argued, because it might have been." }
      ] },
      { id: 'bd-s-tape', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "Kousuke had brought a recorder from home, a little silver one the size of a deck of cards, and set it on the piano under its dust sheet, and said they were going to record a full run-through and listen back, and it would be good for them, and everyone agreed to it with the cheerful ignorance of people who had never heard themselves on tape." },
        { n: "They played the set. It felt great. It felt like the best they'd ever played. Then Kousuke rewound it, and pressed play, and the five of them sat in a row on the folding chairs and listened, and nobody spoke, and the recorder played them back to themselves, small and tinny and merciless." },
        { s: 'mika', t: "Is that... is that what I sound like? Am I that fast? Why didn't anybody TELL me I was that fast?" },
        { s: 'aoi', t: "Everyone tells you. Every day. I'm not that flat, though. Am I? Tell me I'm not that flat." },
        { s: 'gen', t: "You're that flat." },
        { choose: [
          { t: "(Rewind it. Play the good part. There's always a good part.)", stat: { kindness: 1 }, then: [
            { n: "There was a good part. Twenty seconds in the third song where everyone landed together on the chorus and it sounded, even on the tinny little speaker, like a real band, and she found it and played it for them twice, and the second time Aoi was smiling, and the third time they all were." }
          ] },
          { t: "(Write down every single mistake. Then fix them, one at a time.)", stat: { proficiency: 1 }, then: [
            { n: "She wrote them on the whiteboard, under the crossed-out names, fourteen of them, by song and by bar, and they worked through the list one at a time for the rest of the afternoon, and crossed each one off when it was fixed, and by six they'd crossed off nine, and Kousuke said it was the most productive day the band had ever had and also the most humiliating." }
          ] }
        ] },
        { n: "Kousuke kept the tape. He said it was evidence. He labeled it with the date and the word BEFORE, in capitals, and put it in his bag, and said they'd record another one in a month and label it AFTER, and that someday, when they were famous, that tape would be worth a fortune, and nobody laughed as much as he expected them to." }
      ] },
      { id: 'bd-s-gen', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "Mika was late, which had never happened, and Aoi and Kousuke had gone to look for her, which left Solar and Gen alone in the music room, which had also never happened, and he sat on his crate with his bass and his melon bread and played something low and slow and complicated that Solar had never heard him play in practice, something with a lot of space in it." },
        { n: "She sat at the keyboard and didn't play anything, and listened, and he didn't stop, and didn't look at her, and the late sun came in across the floor and lit up the dust over the piano." },
        { choose: [
          { t: "(Find the key. Come in under him, very quietly.)", stat: { proficiency: 1 }, then: [
            { n: "It took her a minute to find it. When she did she came in under him so softly it was barely there, a few notes at a time, and he heard her and didn't stop, and they played like that for a long while, the two of them, bass and keys in the empty room, nothing written down, nothing they'd ever play again." },
            { s: 'gen', t: "...Good." }
          ] },
          { t: "Gen. What's that? You never play that.", stat: { kindness: 1 }, then: [
            { s: 'gen', t: "Mine." },
            { n: "He said it the way someone else would have said a whole paragraph, and kept playing, and Solar understood that she was the first person who had heard it, and that this was the only reason he'd answered at all." }
          ] }
        ] },
        { n: "The door banged open, and Mika came in out of breath and apologizing at full speed about a teacher and a lost gym bag, with Aoi and Kousuke behind her, and Gen stopped playing the moment the door moved, and put the bass down, and picked up his melon bread, and looked at Solar once, briefly, over the top of it." },
        { n: "She didn't say anything about it. She suspected that was the whole point, and that she'd passed something she hadn't known she was taking." }
      ] }
    ],
    beats: [
      { id: 'bd-arc-1', at: 2, after: '4/20', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "The column of crossed-out names on the whiteboard had reached the bottom of the board and started up again in a second column, and Aoi had decided that today, before they played a single note, the band was getting a name, and nobody was leaving the room until it had one." },
        { n: "The second column read: The Hole in the Song (crossed out), Melon Bread (crossed out by Gen, who had suggested it), Kousuke's Cousin's Amp (crossed out, firmly, by Kousuke), Too Fast (crossed out by Mika with a lot of feeling), Four Plus One (crossed out by nobody, just abandoned)." },
        { s: 'kousuke', t: "Every good band name has to mean something and nothing at the same time. Like a tattoo you'd still be okay with at forty." },
        { s: 'mika', t: "I'm fifteen. I'm not thinking about forty. I'm thinking about the drums." },
        { s: 'aoi', t: "Solar. You haven't suggested anything. You're the newest. Fresh eyes." },
        { choose: [
          { t: "(Write something on the board. Anything. Just to start.)", stat: { courage: 1 }, then: [
            { n: "She took the marker and wrote the first thing that came, which was Afterschool, one word, and they all looked at it, and Kousuke said it was too obvious, and Aoi said it was perfect, and Mika said it sounded like a cram school, and Gen, for once, didn't cross anything out, which nobody knew how to interpret." }
          ] },
          { t: "Maybe the name comes after the first song. You can't name something before you know what it is.", stat: { knowledge: 1 }, then: [
            { s: 'aoi', t: "...Okay. That's annoyingly wise. Fine. First song. All the way through without stopping. Then names." }
          ] }
        ] },
        { n: "They didn't get a name. What they got, after forty minutes of argument, was a decision to play the first song all the way through without stopping, no matter what happened, as practice for being a real band, which, Kousuke said, mostly meant not stopping when things went wrong." },
        { n: "Things went wrong almost immediately. Mika counted in too fast. Kousuke's string went out of tune in the second verse. Aoi forgot the words on her own arm. And nobody stopped. They kept going through every single mistake, faces red, eyes on each other, Gen's bass holding the bottom of it steady as a floor, and they got to the end, together, all five, on the last chord, a beat late, and stood there in the ringing silence after it." },
        { s: 'mika', t: "...We didn't stop. We didn't stop! That's a song! We played a SONG!" },
        { n: "Aoi went to the whiteboard and, under both columns of crossed-out names, wrote the date, and drew a box around it, and didn't write a name in it, just the date, and said that was enough for now, and nobody crossed it out." }
      ] },
      { id: 'bd-arc-2', at: 5, after: '6/10', prev: 'bd-arc-1', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "Kousuke came in with the face of someone carrying a death certificate, and laid his phone on top of the borrowed amp, and pointed at the screen, and everybody leaned in to read the message from his cousin, which said, in full: need the amp back by christmas. starting a band. lol." },
        { s: 'kousuke', t: "He's starting a BAND. He's twenty-six. He works in insurance. He's starting a band, and he needs my amp, which is HIS amp, which is the only amp we have." },
        { s: 'aoi', t: "How much is a new one?" },
        { n: "Kousuke named a number. Gen stopped chewing. Mika said a word Solar had never heard a first-year say, and then apologized for it, and then said it again, quietly, to the drums." },
        { n: "It was Aoi who found the flyer, crumpled in the bottom of her bag where it had apparently been for a week, a little printed sheet from Paulownia Mall that said the central atrium would have an open stage for local performers on certain evenings in late November, with a donation box, and a small prize for the act the shoppers liked best." },
        { s: 'aoi', t: "We could play. In the mall. In front of people. Real people. Who don't go to this school and don't have to be nice to us." },
        { s: 'mika', t: "That's the most terrifying thing anyone's ever said to me." },
        { choose: [
          { t: "(Fill out the application right now, before anyone can change their mind.)", stat: { courage: 1 }, then: [
            { n: "There was a form on the back of the flyer. Solar spread it on the piano and filled it in, every line, act type, number of members, equipment, and stopped at the line that said NAME OF ACT, and looked up, and four people looked back at her, and then at the whiteboard, and then at each other, and she left it blank, and wrote TBA, and signed it before anybody could breathe." }
          ] },
          { t: "We'd need to be good. Actually good. By November.", stat: { knowledge: 1 }, then: [
            { s: 'aoi', t: "We've got five months. We've never had five months of anything. We've never had a deadline." },
            { s: 'gen', t: "Now we do." },
            { n: "It was the longest anyone had heard Gen speak in weeks, and it settled it, somehow. Aoi filled in the form on top of the piano and left the name blank, and wrote TBA, and signed it." }
          ] }
        ] },
        { n: "Aoi pinned the flyer to the whiteboard next to the boxed date, and drew an arrow between them, and wrote under the arrow, in her smallest handwriting: the amp. They practiced harder that afternoon than they ever had, and nobody said why, and every time anybody looked up, the flyer was there." }
      ] },
      { id: 'bd-arc-3', at: 9, after: '9/20', prev: 'bd-arc-2', scene: [
        { place: 'Gekkoukan High · Music Room', time: 'After School' },
        { n: "Gen said it in the middle of practice, between songs, with his bass still on, in the flat calm way he said everything, and it took the room a moment to understand that it had been a whole sentence, and longer to understand what it meant." },
        { s: 'gen', t: "Mall's my last one. Exams after. My mother says." },
        { n: "Mika dropped a stick. Kousuke looked at the floor. Aoi stood very still with her guitar against her stomach and the song on her arm, and her face did something small and then nothing, and then she unplugged her guitar and walked out of the music room without a word and shut the door so softly it was worse than a slam." },
        { s: 'kousuke', t: "...She's going to the stairs. She always goes to the stairs." },
        { choose: [
          { t: "(Go after Aoi.)", stat: { kindness: 1 }, then: [
            { n: "Aoi was on the stairs between the third floor and the second, sitting halfway down with her arms around her knees, rubbing at the ballpoint on her forearm with her thumb as if she could rub the song off it. Solar sat down one step above her and didn't say anything for a while." },
            { s: 'aoi', t: "It's stupid. He's a third-year. Third-years leave. That's what they're for. I knew that. I just thought the song would be done first." },
            { s: 'solar', f: 'neutral', t: "It will be. The mall's in November. He'll play it." },
            { s: 'aoi', t: "...And then?" },
            { s: 'solar', f: 'neutral', t: "And then you'll have played it. Once. With him. That's not nothing." },
            { n: "Aoi looked at her own arm for a long time. Then she got up, and went back up the stairs, and Solar heard her through the door say Gen's name, and then something else, and then Gen's voice, one word, and then the sound of Mika crying, loudly and happily, and then the drums." }
          ] },
          { t: "(Stay with Gen.)", stat: { courage: 1 }, then: [
            { n: "Solar stayed. Gen sat on his crate looking at his hands on the bass strings, and after a while he said, to the strings, that he didn't want to, and that wasn't the point, and she said she knew, and he nodded once." },
            { s: 'gen', t: "Tell her I'll learn the bridge. Properly. Before." },
            { n: "Solar went to the stairs and told her. It was all it took. Aoi came back up and stood in the doorway and looked at Gen for a long time, and Gen looked back, and nobody said anything, and then Aoi plugged in and Mika counted them in, too fast, and they played the song with the bridge in it, all the way through, and Gen didn't miss a note." }
          ] }
        ] },
        { n: "When they left, Aoi wrote GEN on the whiteboard, above everything else, in a box, and drew a small melon bread next to it, and stood back to look at it, and her eyes were red, and she was smiling." }
      ] },
      { id: 'bd-arc-4', at: 13, after: '11/20', prev: 'bd-arc-3', scene: [
        { place: 'Paulownia Mall · Central Atrium', time: 'Evening' },
        { n: "The central atrium of Paulownia Mall at seven on a Friday was a bright echoing well of glass and tile and the smell of crepes and coffee and wet umbrellas, the fountain going, the shops lit up on three levels all the way round, and in the middle of it, on a low black stage the size of a large rug, five students from Gekkoukan stood in their school uniforms holding instruments, and looked out at a crowd of about forty people, most of whom had stopped on their way somewhere else." },
        { n: "Kousuke's cousin was in the front row in a suit, holding a can of coffee and grinning. Mika had been sick once in the bathroom and announced it to everyone as a good sign. Aoi's left sleeve was rolled all the way up and the whole song was on her arm, rewritten fresh that afternoon, in blue, from the wrist to the shoulder." },
        { s: 'aoi', t: "Hi. We're from Gekkoukan. We're... um. We're the band. We don't have a name. We've been trying since April. This is our first time. Please be nice." },
        { n: "Somebody laughed, kindly. Mika counted them in, too fast, and for the first two bars it was chaos, and then Gen found the bottom of it and stayed there, like a wall you could lean on, and everybody leaned, and it was a song." },
        { n: "They played the covers. People stopped. A woman with shopping bags stopped, and a pair of middle-school girls, and an old man who stood with his hands behind his back and nodded along to the bass, and by the third song the forty people were seventy, crowding the fountain's edge and leaning over the railings on the second floor, and Solar, at the keyboard, at the edge of the stage, felt the light and the eyes and the whole bright well of it come down on her, and her face did the thing it did, the pleasant closed bright thing, all on its own." },
        { ifMet: 'mark', then: [
          { n: "Up on the second floor, leaning on the railing with his elbows and a paper cup from the café in one hand, there was a boy she knew. Mark. He wasn't looking at the singer. He was looking at the keyboard, at her hands on it, with his head tipped a little to one side the way he listened to anything with notes in it, as if he could hear the parts nobody else was paying attention to." }
        ] },
        { n: "Then it was the last song. Aoi's. The one nobody knew. Aoi said its name into the microphone, and Solar didn't hear it, because she was looking at her hands, and then Mika counted in, slower than she ever had, exactly right, and Solar played the first chord, and the atrium went quiet." },
        { choose: [
          { t: "(Play the bridge. Step down, not up, the door into the other room.)", stat: { proficiency: 1 }, then: [
            { n: "She played it, the step down, the door opening onto a different room, and Aoi sang the word the whole song had been circling, stay, and held it, and Gen's bass went under it soft as a hand on a back, and somewhere up on the second floor somebody whistled, and the old man by the fountain had his eyes shut." }
          ] },
          { t: "(Stop performing. Look at the band, not the crowd.)", stat: { charm: 1 }, then: [
            { n: "She stopped looking at the crowd. She looked at Aoi's back and Gen's hands and Kousuke's frown of concentration and Mika's pompom bouncing, the four people she'd spent Tuesdays and Fridays with all year, and her face stopped doing the bright closed thing and did something else instead, and she didn't know what, and it didn't matter, because nobody was looking at her, they were looking at the song." }
          ] }
        ] },
        { n: "When it was over there was a second of silence, and then the atrium clapped, properly, warm and ragged and running on a beat too long, and Mika cried, and Kousuke's cousin stood up in his suit and whistled through his fingers, and later, when the mall's events lady announced the shoppers' favorite act, she read out Gekkoukan High School band, no name yet, and everybody laughed, and the five of them stood there on the little black stage and couldn't stop grinning at each other." },
        { s: 'kousuke', t: "He says we can keep it. The amp. He says he heard us and he's not starting a band anymore, he's going to be our fan. He says it's cheaper." },
        { ifMet: 'mark', then: [
          { n: "Mark found her by the fountain afterward while the others were packing up, rubbing the back of his neck the way he did when he was overplaying casual, holding out a second paper cup that had gone lukewarm." },
          { s: 'mark', f: 'neutral', t: "Sol. The bridge. In the last one. That was you, right? The step down?" },
          { s: 'mark', f: 'flustered', t: "...Okay, it was you. You've got the face. That was clean. That was really clean. I'm not being nice. I was up there thinking, who wrote that, and then I looked at your hands." }
        ] },
        { n: "Aoi went to the stage's little whiteboard sign, the one that said NEXT: GEKKOUKAN HIGH (TBA), and took a marker out of her pocket, and crossed out TBA, and stood there for a long moment with the marker in her hand. Then she turned around and held it out to Gen." },
        { s: 'gen', t: "...Stay." },
        { n: "He wrote it, in capitals, STAY, and nobody crossed it out, and they carried the amp out through the doors into the cold together with the city lit up all around them, five people and a borrowed amp that wasn't borrowed anymore, and Solar walked at the back with her keyboard under her arm and its broken zipper held shut against her ribs, and found she didn't mind at all being one of five." }
      ] }
    ],
    quiet: [
      { id: 'bd-q-zipper', scene: [
        { n: "Gen fixed her keyboard case without being asked. She came in and it was on the piano with a new zipper sewn in, slightly crooked, in thick black thread." },
        { s: 'gen', t: "Mother's machine." },
        { n: "That was all. She said thank you three times. He ate his melon bread through all three." }
      ] },
      { id: 'bd-q-names', scene: [
        { n: "Someone had added three new names to the whiteboard overnight: Port Island Noise Complaint, The Fifth Floor, and simply Help." },
        { n: "Gen crossed out all three without breaking stride on his way to the crate, and nobody ever found out who'd written them, though Mika looked very innocent all afternoon." }
      ] },
      { id: 'bd-q-arm', scene: [
        { n: "Aoi held out her arm without a word. There was a new verse on it, the ink still fresh." },
        { choose: [
          { t: "The second line's the best one.", stat: { charm: 1 }, then: [
            { n: "Aoi looked at the second line, and then at Solar, and then underlined it, once, with great care, and rolled her sleeve back down over it like a secret." }
          ] },
          { t: "(Read it twice. Then play the first chord.)", stat: { proficiency: 1 }, then: [
            { n: "It was the right chord. Aoi knew it before Solar did, and was already singing." }
          ] }
        ] }
      ] },
      { id: 'bd-q-mika', scene: [
        { n: "Mika practiced rudiments on a rubber pad on her knee during the break, sticks going so fast they blurred, counting under her breath, one-e-and-a, two-e-and-a." },
        { s: 'mika', t: "I'm not fast. The world is slow. I'm just the only one who's noticed." }
      ] },
      { id: 'bd-q-cables', scene: [
        { n: "Kousuke coiled the cables at the end of practice, over and under, every one exactly the same, and hung them on the hooks by the amp in order of length." },
        { s: 'kousuke', t: "A cable coiled wrong is a cable that betrays you on stage. Over, under. It's the only thing my cousin ever taught me." }
      ] },
      { id: 'bd-q-scales', scene: [
        { n: "Solar got there first, and sat at the keyboard with the headphones plugged in, playing scales in the empty music room, up and down, while the late light slid across the floor." },
        { n: "When the others came in she took the headphones off, and the room was suddenly full of their voices, and she realized she'd been waiting for exactly that sound." }
      ] },
      { id: 'bd-q-piano', scene: [
        { n: "During the break Solar lifted a corner of the dust sheet on the grand piano and played one note on it, low, and let it ring." },
        { n: "It went on for a long time, much longer than her keyboard ever did, and everyone in the room stopped talking to listen to it fade, and then went back to arguing, slightly quieter." }
      ] },
      { id: 'bd-q-brass-wave', scene: [
        { n: "The trumpet girl from the wind ensemble passed the open door with her case and, without stopping or looking in, played three quick notes of their cover song, perfectly, and kept walking." },
        { n: "Aoi stared at the door. Then she played the next three notes on her guitar. From somewhere down the corridor came three more. It went on all the way to the stairs." }
      ] },
      { id: 'bd-q-melonbread', scene: [
        { n: "Gen held out a melon bread to Solar, unopened, still in its wrapper." },
        { n: "She took it. It was, as far as she could tell, the highest honor the light music club could bestow, and she ate it slowly, and he nodded once, and that was that." }
      ] },
      { id: 'bd-q-tuning', scene: [
        { n: "Everyone tuned to Solar's keyboard, one string at a time, because the keyboard was the only thing in the room that never went out of tune." },
        { s: 'aoi', t: "You're our A. Our tuning fork. Our whole reference point. No pressure." }
      ] }
    ],
    openers: {
      4: "The music room windows were propped open, and the courtyard trees threw petals at the glass, and through the wall the wind ensemble was learning a new march, slowly, one wrong note at a time.",
      5: "May had the music room warm and bright by four, sun lying across the dust sheet on the grand piano, and the amp took a long time to hum awake as if it had been dozing.",
      6: "The rainy season had got into the guitars, and every practice started with ten minutes of tuning, and the room smelled of damp wood and the sweet warm smell of the amp.",
      7: "July made the third floor the hottest place in the school, and the band practiced with the windows wide and the cicadas from the courtyard coming in under every quiet chord.",
      8: "Summer break had locked the music room, and somewhere behind its door the drum kit sat under a sheet with one cymbal still held up by a music stand, waiting.",
      9: "September had the band back with tans and new songs on Aoi's arm, and the wind ensemble through the wall was rehearsing for the culture festival, loudly, already.",
      10: "October brought the light in low and gold across the music room floor by five, and the culture festival posters went up in the corridor, and everyone played a little faster.",
      11: "November darkened the windows by the end of practice, and the room's one heater clicked and ticked in the corner, and everyone's fingers were slow until the second song.",
      12: "December, and the music room's heating worked when it felt like it, and the band practiced in coats with their breath going up over the instruments in little clouds.",
      1: "January, and the music room still had a strand of tinsel taped above the drum kit from somebody's idea of a joke, and nobody had taken it down."
    }
  },

  /* ── Gaming club (Wed in the computer room / Sat scrims at Game Panic) ── */
  'club-gaming': {
    cast: { hayato: 'Hayato', yuzu: 'Yuzu', kenji: 'Kenji', counter: 'Counter man', lunchbox: 'Middle-schooler', sensei: 'Teacher' },
    join: [
      { place: 'Gekkoukan High · Computer Room', time: 'After School' },
      { n: "The computer room after hours was thirty beige machines in six humming rows under half-drawn blinds, and it smelled of warm plastic and dust burning slowly off the inside of things, and the only light was the gray-blue of the screens and a long slanting bar of afternoon coming through the one blind somebody had broken years ago and nobody had fixed." },
      { n: "Officially, according to the form on the door, this was the Computer Literacy Research Circle. Unofficially, according to the much smaller piece of paper taped underneath it, in a careful hand, it was the gaming club, and there were three of them, and they all turned around in their chairs at once when Solar came in, like owls." },
      { s: 'hayato', t: "Hayato. Third-year. President. You're the one who signed the sheet. I've calculated that there's a seventy percent chance you thought this was the actual computer club." },
      { n: "He was thin and very upright, with his tie loosened exactly two centimeters, and he had a black notebook open on the desk beside his keyboard full of numbers in tiny columns, frame data, he said, when she looked at it, as if that explained anything." },
      { s: 'yuzu', t: "Ignore him, he does percentages when he's nervous. Yuzu! Second-year. I do rhythm games. I have wrist problems. They're worth it." },
      { s: 'kenji', t: "Kenji. First-year. I'm mostly in Innocent Sin Online. My guild needs me. Sorry. I'm AFK in real life a lot." },
      { s: 'yuzu', t: "He means he's not here. Even when he's here. He's a healer in that game. He keeps forty people alive and he can't remember to eat lunch." },
      { n: "Hayato explained the system. On Wednesdays they had the computer room, because the actual computer club had dissolved two years ago and nobody had told the teachers. On the school machines, in a folder called Typing Practice, a president from 2004 had hidden an old castle-building strategy game that ran over the school network, and nobody had ever found it, and they would like that to stay true." },
      { s: 'hayato', t: "And Saturdays we scrim at Game Panic. In the mall. Anyone can wander in. People do. It's the only place I've ever been where losing in public is considered normal." },
      { s: 'yuzu', t: "He means we lose a lot. Like, a lot. There are middle-schoolers who know us by name." },
      { s: 'kenji', t: "They call us the free win. It's okay. In my guild we'd call that farming. We're being farmed." },
      { choose: [
        { t: "(Open Typing Practice. Build a castle.)", stat: { courage: 1 }, then: [
          { n: "The castle game was ancient and pixelated and enormous, and she built badly, and in the first ten minutes Yuzu's army knocked her walls down twice, and the third time Solar had put her walls somewhere strange and unwalled, in a ring around a hill with the gate facing the wrong way, and Yuzu's army walked straight past it looking for the gate and got lost, and Hayato wrote something in his notebook." }
        ] },
        { t: "(Take the typing test the circle is officially for. As a cover.)", stat: { proficiency: 1 }, then: [
          { n: "The typing software was older than Kenji and had a cartoon owl on it. She took the test. Ninety-four words a minute. The owl congratulated her. Hayato looked at the number and then at her and then wrote it down, and Yuzu said that was actually terrifying, and Kenji said in his guild that was called a sweat." }
        ] },
        { t: "What's in the notebook?", stat: { knowledge: 1 }, then: [
          { s: 'hayato', t: "Every move in the fighting game at Game Panic. How long it takes. How long it leaves you open. I've been writing it since first year. It's two hundred and eleven pages." },
          { s: 'hayato', t: "...I've never won a tournament. I want you to know that before you're impressed. All the numbers in the world and I freeze." }
        ] }
      ] },
      { n: "At six the vice-principal's footsteps came down the corridor, and in perfect silence and with the speed of long practice three people closed the castle game and opened the cartoon owl, and when he put his head round the door all he saw was four students typing, very diligently, about a quick brown fox, and he nodded and went away, and Yuzu laughed so hard she had to put her head on the keyboard." },
      { n: "Solar walked to the gate in the blue dusk with the hum of thirty computers still in her ears and her fingers remembering the castle, and thought that it had been a long time, or felt like a long time, since she'd been in a room where everybody was pretending to do one thing while doing another, and that it was nice, for once, when the other thing was this harmless." }
    ],
    shifts: [
      { id: 'gm-s-lan', days: [3], scene: [
        { place: 'Gekkoukan High · Computer Room', time: 'After School' },
        { n: "The castle game ran over the school network, which meant that four people in the computer room could play it together, and it also meant that it was slow, and that every so often the whole thing froze for three or four seconds while thirty computers thought about it, and in those seconds everybody in the room held their breath like they were underwater." },
        { s: 'yuzu', t: "Kenji. KENJI. Your wall's on fire. Your whole wall is on fire and you're building a fountain." },
        { s: 'kenji', t: "The fountain is for morale." },
        { n: "Then the door opened, and it wasn't the vice-principal. It was a teacher Solar didn't know well, a woman with glasses and the tired, pale look of someone who hadn't slept properly in years, carrying a stack of papers. Nobody had time to open the owl. She came over and stood behind Kenji's chair and looked at the screen for a long, long moment." },
        { s: 'sensei', t: "...Your left flank is open. They'll come through the forest." },
        { n: "She said it in a perfectly flat voice, and turned around, and left, and closed the door behind her. The four of them stared at the door. Then at each other. Then, as one, at the forest on Kenji's left flank." },
        { choose: [
          { t: "(Move everything to the forest. Trust the teacher.)", stat: { knowledge: 1 }, then: [
            { n: "Yuzu's army came through the forest about ninety seconds later, exactly where the teacher had said, and walked straight into everything Solar had moved there, and Yuzu screamed and called it a conspiracy, and Hayato wrote in his notebook, in tiny careful letters, she plays." }
          ] },
          { t: "(Follow her out. Ask what she plays.)", stat: { courage: 1 }, then: [
            { n: "Solar caught her at the end of the corridor and asked, and the teacher looked at her for a while over the top of her glasses with an expression that gave absolutely nothing away, and said, I have no idea what you mean, and then, as she turned the corner, very quietly, healer, mostly, and was gone." }
          ] }
        ] },
        { n: "They never found out who she was, or not officially. Kenji had a theory about a famous player in his game. Yuzu had a theory about a secret agent. Hayato had no theory and simply drew a small pair of glasses on the inside cover of his notebook, which was, he said, where he kept the people he respected." }
      ] },
      { id: 'gm-s-typing', days: [3], scene: [
        { place: 'Gekkoukan High · Computer Room', time: 'After School' },
        { n: "Once a term the Computer Literacy Research Circle had to submit evidence of computer literacy research to the student council, and once a term this meant an afternoon of genuine, desperate typing practice with the cartoon owl, so that Hayato could print out four certificates of achievement and hand them in looking tired and scholarly." },
        { s: 'hayato', t: "The owl is the only thing standing between us and the dissolution of this club. Respect the owl." },
        { s: 'yuzu', t: "I hate the owl. The owl knows what it did." },
        { n: "So they held a tournament. Four people, four machines, the owl's hardest test, a paragraph about the history of the fountain pen, and Kenji, who had been typing in the chat box of an online game since he was nine, put his fingers on the keys and went somewhere very far away." },
        { choose: [
          { t: "(Go all out. Beat Kenji.)", stat: { proficiency: 1 }, then: [
            { n: "She didn't beat Kenji. Nobody beat Kenji. He hit a hundred and twelve words a minute with his eyes half shut and the owl threw a little animated party and Kenji looked at it with total indifference and said in his guild that was just called talking. She came second, at ninety-eight, and the owl threw her a smaller party, and she was more pleased about it than she'd ever admit." }
          ] },
          { t: "(Type the paragraph perfectly. Slow, but not one mistake.)", stat: { knowledge: 1 }, then: [
            { n: "She typed it perfectly, every comma, every capital, at a stately seventy, and came last on speed and first on accuracy, the only perfect score of the afternoon, and Hayato said that in a fighting game that was what was called a defensive player, and wrote her name next to it in the notebook as if it were a compliment, which, coming from him, it was." }
          ] }
        ] },
        { n: "Hayato printed the certificates on the school printer, which jammed twice, and they stood around it waiting for the owl to come out on four sheets of slightly wrinkled paper, and Yuzu said that this was the most real club activity they'd ever done and that she felt sick about it." }
      ] },
      { id: 'gm-s-spring', days: [6], months: [4, 5], scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "Saturday, school out at noon, and the mall was full of students in uniform drifting between the crepe stand and the bookshop and the fountain with nowhere to be, and Game Panic was full of noise and colored light and the electric smell of hot circuit boards, and Game Panic had a new cabinet." },
        { s: 'yuzu', t: "They got the new drum game. The NEW one. It came in on Thursday. I saw the truck. I followed the truck. I followed it from the station." },
        { n: "There was a line for it. There was a line of middle-school boys and a salaryman with his tie over his shoulder and two high-school girls from another school, and Yuzu got in the back of it with her wristbands on and a cold, focused expression Solar had never seen on her before, like an athlete at a starting block." },
        { s: 'counter', t: "Gekkoukan kids. Your president's already in the back. He's been at the fighting cabinet since twelve-oh-four. He hasn't moved." },
        { choose: [
          { t: "(Stand in line with Yuzu. Keep her company.)", stat: { kindness: 1 }, then: [
            { n: "They stood in line for forty minutes, and Yuzu explained the entire scoring system of the drum game in exhaustive detail, and when she finally got to play she full-comboed the first song on the hardest difficulty with her eyes half shut, and the whole line behind her clapped, and she turned around with her face bright red and bowed to all of them like a concert pianist." }
          ] },
          { t: "(Go find Hayato and watch him play.)", stat: { knowledge: 1 }, then: [
            { n: "Hayato was at the fighting cabinet in the back with a line of challengers coming at him one after another, and he beat every one of them, quietly, efficiently, without any expression at all, glancing between rounds at his notebook on the cabinet ledge. He'd won twenty-two in a row when she got there. He lost the twenty-third the moment he noticed she was watching." }
          ] }
        ] },
        { n: "Kenji turned up at three, blinking in the arcade light as if he'd been underground, which he more or less had, and they went and stood by the window of the crane game for a while, the four of them, watching a little girl in a sun hat try for a stuffed rabbit, and when she got it the whole club cheered, and the little girl looked at them like they were insane." }
      ] },
      { id: 'gm-s-rain', days: [6], months: [6, 7], scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "It was raining, and when it rained on a Saturday every middle-schooler on Port Island came to Game Panic, which meant that the whole arcade was a wall of small loud bodies in damp school uniforms, every cabinet with a queue, the floor slick with umbrella drip, the air so thick with noise and wet wool that Kenji said it was like being inside a dog." },
        { n: "The club had their usual scrim on the four linked tank cabinets in the back, the ones called Iron Lotus, two pods against two pods, armored treads and turret fire and shouting. They were waiting for their turn behind a team of four middle-school boys who were, Hayato said after watching them for thirty seconds, better than them." },
        { s: 'hayato', t: "Eighty-five percent. That's my estimate. They're eighty-five percent likely to destroy us." },
        { s: 'lunchbox', t: "Hey. Gekkoukan. You want to play us? Loser buys the winner a juice." },
        { choose: [
          { t: "Yes. Absolutely. Right now.", stat: { courage: 1 }, then: [
            { n: "They lost. They lost so fast that Yuzu was still adjusting her seat when her tank exploded, and the middle-school boys high-fived each other with the brutal efficiency of the young and accepted four juices with great dignity, and one of them, the smallest, told Solar she had good positioning but bad aim, and she said thank you, and meant it." }
          ] },
          { t: "Let's watch them play someone else first. Learn their tricks.", stat: { knowledge: 1 }, then: [
            { n: "They watched them play two other teams, and Hayato filled a page and a half of his notebook, and then they played them, and still lost, but this time by much less, and one of them, the smallest, came over afterward and asked what Hayato had been writing, and Hayato showed him, and the boy's mouth fell open, and for twenty minutes the two of them talked about frame data like old men." }
          ] }
        ] },
        { n: "When they left the rain was coming down harder across the mall's glass roof, drumming, and the four of them stood at the doors for a while watching it with their umbrellas closed, nobody in a hurry to go out into it, and Yuzu said, apropos of nothing, that she'd rather lose to someone good than win against someone bad, and everyone agreed, and then Kenji said that was easy to say when you never won, and they all laughed and went out into the rain." }
      ] },
      { id: 'gm-s-heat', days: [3], months: [6, 7], until: '7/20', scene: [
        { place: 'Gekkoukan High · Computer Room', time: 'After School' },
        { n: "It was the first truly hot week of the year and the computer room had air conditioning, because the computers needed it, and nowhere else on the third floor did, which meant that by four o'clock every club in the building had discovered a sudden passionate interest in computer literacy." },
        { n: "The art club came first, with sketchbooks, and asked if they could draw the computers, for research. Then two members of the calligraphy club. Then a boy from the baseball team who didn't even pretend, who just came in and lay down on the floor under the air conditioning vent with his eyes shut and said, in the voice of a dying man, thank you." },
        { s: 'hayato', t: "This is a fire hazard. This is at least a sixty percent fire hazard." },
        { s: 'yuzu', t: "Hayato, nobody's on fire. That's the whole point. Everybody's finally NOT on fire." },
        { choose: [
          { t: "(Run the castle game for everyone. Teams. Clubs against clubs.)", stat: { charm: 1 }, then: [
            { n: "She set it up, art club against calligraphy against baseball against the gaming club, and it was chaos, it was beautiful chaos, the calligraphy girls building the neatest walls anybody had ever seen and the art club building something enormous and decorative and indefensible, and the baseball boy won, somehow, without ever getting off the floor, by playing with the keyboard on his chest." }
          ] },
          { t: "(Hang a sign on the door: CAPACITY REACHED. Keep the room quiet.)", stat: { proficiency: 1 }, then: [
            { n: "She wrote it on the back of a printout and taped it to the door, and it worked, mostly, and the room settled into a cool humming hush, twelve people from five clubs reading and drawing and typing and in one case sleeping, and Hayato looked around at it all and conceded, quietly, that it was a very nice fire hazard." }
          ] }
        ] },
        { n: "The cicadas were going outside the half-closed blinds like a saw through metal, and inside it was cool and blue and humming, and nobody went home until the vice-principal came round at six and turned off the air conditioning at the wall, and the whole room groaned at once like an audience at a bad ending." }
      ] },
      { id: 'gm-s-rhythm', days: [6], months: [9, 10, 11], scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "There was a song on the drum game that nobody had ever full-comboed at Game Panic. It was called something in English that none of them could pronounce, and it was two minutes and forty seconds long, and in the last twenty seconds the notes came down the screen so fast they looked like rain on a window, and Yuzu had been trying to beat it since the spring." },
        { s: 'yuzu', t: "Today. It's today. I can feel it. My wrists feel it. My wrists have never felt like this." },
        { s: 'kenji', t: "You said that last Saturday." },
        { s: 'yuzu', t: "And my wrists were LYING last Saturday." },
        { n: "She did it eleven times. Eleven times she got to the last twenty seconds and broke, on the same note every time, a quick double hit on the rim, and every time she broke she said nothing, put in another coin and started again, and a small crowd had begun to collect behind her, and on the twelfth try she stopped before she put the coin in and turned round to look at Solar." },
        { choose: [
          { t: "Don't look at the notes at the end. Listen to the song. You know the song.", stat: { knowledge: 1 }, then: [
            { n: "Yuzu looked at her for a second, and then shut her eyes, and put the coin in. She played the first two minutes with her eyes open and the last twenty seconds with them closed, listening, and Solar watched the rain of notes come down and every one of them land, and on the last note the cabinet exploded in light and sound and the words FULL COMBO, and Yuzu opened her eyes and just stood there with the sticks in her hands, and the crowd behind her went off like a firework." }
          ] },
          { t: "(Stand beside her and count the rhythm out loud on the double hit.)", stat: { kindness: 1 }, then: [
            { n: "Solar stood right beside the cabinet and counted it out loud, one-AND-two, on the double hit, quietly, just for Yuzu, and on the twelfth try Yuzu hit it, both halves, clean, and the rest of the song came down like it had been waiting for her, and on the last note the cabinet screamed FULL COMBO, and Yuzu threw both sticks straight up in the air and only caught one." }
          ] }
        ] },
        { s: 'counter', t: "First one in this building. I'll put it on the board. What name?" },
        { n: "Yuzu wrote it on the counter man's little whiteboard, big: GEKKOUKAN GAMING CLUB, and then, smaller, underneath, yuzu, and the counter man hung it by the door, where it stayed for the rest of the year, getting slowly sun-faded, and every Saturday when they came in Yuzu touched it on her way past, like a shrine." }
      ] },
      { id: 'gm-s-newyear', days: [6], months: [12, 1], scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "The mall had put up its decorations, and Game Panic had put up its own, which were a single string of tinsel taped around the token machine and a cardboard cutout of a cartoon cat in a Santa hat that somebody had then drawn a mustache on, and the arcade was packed with kids flush with holiday money, and the whole place smelled of hot plastic and cold air coming in through the doors." },
        { n: "Kenji had received his New Year's money from his grandmother early, in a small red envelope, and had already, by two o'clock, spent eighty percent of it, which Hayato had calculated precisely, on the crane game nearest the door, which contained a stuffed version of the mascot from Kenji's online game, a slightly lopsided blue blob with a crown." },
        { s: 'kenji', t: "I need it. My guild leader has one. Everybody in the guild has one except me. It's a matter of honor." },
        { s: 'hayato', t: "You've spent four thousand yen on a four-hundred-yen blob." },
        { s: 'kenji', t: "It's not a blob. It's the King." },
        { choose: [
          { t: "(Take the controls. Watch the claw first. Then go for it.)", stat: { proficiency: 1 }, then: [
            { n: "She watched the claw for five full drops without putting in a coin, how it swung, which way it slipped, how the prize sat against the glass, and then she put in one coin and dropped it on the King's crown, not his body, and the claw caught on the crown's points and lifted him, wobbling, all the way to the chute, and Kenji made a sound that turned three heads, and held the blob to his chest like a newborn." }
          ] },
          { t: "Kenji. Stop. Let's ask the counter man to move it.", stat: { charm: 1 }, then: [
            { n: "The counter man, who had watched Kenji feed his entire New Year into the machine with the expression of a man watching a slow tragedy, sighed, opened the glass, moved the King to the edge above the chute, and closed it again, and Kenji got it on the next try, and the counter man said happy new year in a voice that suggested he'd done this before and would do it again." }
          ] }
        ] },
        { n: "They went out into the cold of the mall afterward, the four of them, Kenji with the King under his arm, and stood by the fountain for a while with hot cans from the machine, watching people with shopping bags go by under the decorations, and Hayato said, to nobody, that it was his last winter at Gekkoukan, and nobody said anything back, and the fountain went on, and Kenji held out the King to him, silently, to hold for a while." }
      ] },
      { id: 'gm-s-mmo', days: [3], scene: [
        { place: 'Gekkoukan High · Computer Room', time: 'After School' },
        { n: "Kenji was not playing the castle game. Kenji was sitting at the end machine with his chin on his hands looking at a chat window on his phone, the message board from his online guild, and his face was the face of a man watching his country go to war." },
        { s: 'kenji', t: "My guild's splitting up. Two officers had a fight about who gets the rare sword from the raid. Now there's two guilds. Everyone has to pick a side. Both of them messaged me asking me to come. I'm the main healer. Whoever gets me wins." },
        { s: 'yuzu', t: "Kenji, it's a game." },
        { s: 'kenji', t: "It's not a game. It's forty people. I've known some of them for three years. I don't know any of their real names." },
        { choose: [
          { t: "Don't pick. Tell them you heal whoever's in the next raid.", stat: { kindness: 1 }, then: [
            { n: "Kenji looked at her for a long time. Then he typed it, slowly, with one thumb, and sent it to both guild boards at once, and put the phone face down on the desk and covered it with his hand, and by the end of practice the replies had started coming in, and one of them, Yuzu read out loud over his shoulder, said, okay, healer, you're right, we're idiots, let's do the next raid together and fight about the sword after." }
          ] },
          { t: "Which one's leader made sure you had what you needed when you were new?", stat: { knowledge: 1 }, then: [
            { s: 'kenji', t: "...Akagi-san. She gave me all my first gear. She stayed up till four once to help me through a dungeon. She said I'd be good one day." },
            { s: 'solar', f: 'neutral', t: "Then you already know." },
            { n: "He did. He typed it, and sent it, and put the phone down, and played the castle game for the rest of the afternoon and built nothing but fountains, for morale, and nobody told him to stop." }
          ] }
        ] },
        { n: "Hayato said nothing through all of it, writing in his notebook. But at the end, when they were packing up, he put a melon soda from the vending machine down on the desk next to Kenji's phone without a word, and Kenji looked at it, and said thanks, and Hayato said healers have to eat too, and they didn't talk about it again." }
      ] },
      { id: 'gm-s-kiriko', days: [6], met: ['kiriko'], after: '6/12', scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "The club was in the back on the Iron Lotus cabinets, losing, when a girl with a high ponytail streaked purple came weaving through the crowd toward them with a paper bag of melon pan in one hand and a paper cup full of tokens in the other, saying excuse me, sorry, excuse me to every single person she passed like she was announcing herself to the whole arcade." },
        { s: 'kiriko', f: 'happy', t: "Sol-chan! I KNEW it. I could feel you from the crepe stand. Is this your club? Are these your people? Hi, people! I'm Kiriko. I brought snacks. I bring snacks everywhere, it's a whole thing." },
        { s: 'yuzu', t: "Senpai. Who is this. Why is she so shiny." },
        { n: "Kiriko handed out melon pan to everybody, including the four middle-school boys on the other team, who took them with deep suspicion, and then she sat down cross-legged on top of the empty cabinet stool beside Solar's pod, which was not what it was for, and asked what the score was, and when she heard it she made a face of enormous sympathy." },
        { s: 'kiriko', f: 'serious', t: "Okay. Before the next round. Fortunes. Everybody. Shrine rules. You can't go into a fight without one, it's bad luck, I'm a professional." },
        { n: "She had a little bundle of folded paper slips in her jacket pocket, and she went round the whole club one at a time and had each of them draw one, and read each out in a voice of great ceremony. Hayato got middle blessing, which he said was statistically the most likely. Yuzu got great blessing and screamed. Kenji got small blessing, and Kiriko patted his head and said small is still a blessing, small is very underrated." },
        { choose: [
          { t: "(Draw yours last. Whatever it is, read it out loud.)", stat: { courage: 1 }, then: [
            { s: 'kiriko', f: 'surprised', t: "Bad luck. Ooh. Okay. Tie it to the cabinet. That counts as a tree. I'm deciding that it counts." },
            { n: "Solar tied it to the joystick on her pod in a small white knot, and Kiriko pressed her palms together at it and bowed, and the middle-school boys watched this with their melon pan halfway to their mouths, and then the next round started, and the club won it, by a hair, for the first time all afternoon, and Kiriko cheered so loud the counter man came to look." },
            { bond: { kiriko: 1 } }
          ] },
          { t: "Draw one for the other team too. It's only fair.", stat: { kindness: 1 }, then: [
            { s: 'kiriko', f: 'happy', t: "Oh, you're a good person. I knew it. Okay, enemy team, line up! Everybody gets a fortune! Fortunes for everyone!" },
            { n: "The middle-school boys lined up, deeply embarrassed, and drew their fortunes one at a time, and the smallest one got great blessing and went red to the ears and put it in his wallet very carefully, and they won the next round anyway, and nobody minded, and Kiriko said that was what fortunes were for, actually, and nobody was entirely sure what she meant." },
            { bond: { kiriko: 1 } }
          ] }
        ] },
        { n: "She left at four to go and sweep something, she said, waving her whole arm from the doors, and Yuzu turned to Solar with her eyes very wide and said, senpai, where do you FIND these people, and Solar said she didn't, they found her, and found that she was smiling about it all the way home." }
      ] },
      { id: 'gm-s-minji', days: [6], met: ['minji'], after: '9/27', scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "Minji was already there when the club came in, leaning on the change machine with her cap on forwards and an old camera hanging round her neck on a strap, talking to the counter man like they'd known each other for years, which, Solar had learned, was how Minji talked to everyone, and she saw Solar and lifted one hand off the machine." },
        { s: 'minji', f: 'happy', t: "Duo! Is this the club? You said you had a club. I didn't think it'd be real. Hi! I'm Minji. I'm only here for the vibes. And the tanks. Mostly the tanks." },
        { n: "She watched them play one round of Iron Lotus from behind Hayato's pod with her arms folded, not saying anything, her head tilted the way it tilted when she was looking at light, and when they lost, which they did, she waited until Hayato had climbed out before she spoke, carefully, like someone asking whether she could come in." },
        { s: 'minji', f: 'neutral', t: "Can I say something? You can say no. It's your club." },
        { s: 'hayato', t: "...Go ahead." },
        { s: 'minji', f: 'serious', t: "You're all good. Like, actually. You just keep fighting four separate fights. You need someone to call it. One voice. Doesn't matter who. Just one." },
        { choose: [
          { t: "Hayato calls it. He's got the numbers.", stat: { charm: 1 }, then: [
            { n: "Hayato went pale and said he couldn't, he froze, he'd always frozen, and Minji said that was okay, freezing was just thinking too loud, and that he didn't have to be right, only fast, and he climbed back into his pod looking like a man going to his own execution, and called the next round in a small strangled voice, and they won it." }
          ] },
          { t: "Show us. Play a round and call it for us.", stat: { knowledge: 1 }, then: [
            { n: "Minji turned her cap around backwards, and climbed into Kenji's pod, and for six minutes the gaming club heard what one voice sounded like, calm, fast and absolutely sure, left, wait, now, not you, him, and they won, and the middle-school team on the other side climbed out and stared at her, and she climbed out too and bowed to them, very politely, like it was a recital." }
          ] }
        ] },
        { s: 'minji', f: 'neutral', t: "Can I film you? Just the club. Just your hands on the controls and your faces when you win. For me. I won't put it anywhere. I'm asking." },
        { n: "They let her. Yuzu fixed her hair first. Minji filmed the next round through her old camera from the end of the row, quietly, not talking, and once Solar glanced over between rounds and found the lens not on the cabinets at all, but on her, and Minji lowered it at once, unhurried, and smiled, and didn't apologize, and Solar found she didn't want her to." },
        { bond: { minji: 1 } }
      ] },
      { id: 'gm-s-haechan', days: [6], met: ['haechan'], after: '11/5', scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "He'd come in for a can of coffee from the machine by the door. That was what he said afterward, anyway, and it might even have been true. But when the club looked up from the fighting cabinet in the back, where Hayato had been defending his title against all comers for an hour, Haechan was standing at the edge of the little crowd with the can unopened in one hand and the other in his hoodie pocket, watching the screen with an expression of profound, flat boredom." },
        { s: 'yuzu', t: "Senpai. Senpai. Who is THAT. Why does he look like that. Is he famous? He looks like he's famous and he's sad about it." },
        { s: 'solar', f: 'flustered', t: "He's a friend. He lives at my dorm." },
        { n: "Hayato won his eleventh in a row. The challenger slunk off. Hayato glanced up at the crowd for the next one, and nobody moved, and then Haechan, still holding his coffee, put a coin on the cabinet ledge without saying anything, and sat down." },
        { s: 'haechan', f: 'neutral', t: "I don't know this game. Just so you know. I'm going to lose." },
        { s: 'hayato', t: "...Understood." },
        { n: "He did not lose. He picked the character the cursor happened to be sitting on and played with the can of coffee still in his left hand, pressing buttons with his right in a pattern that appeared, to every trained eye in the gaming club, to be completely random, and Hayato, who had two hundred and eleven pages of frame data, had no page for this, and lost the first round with a look of dawning horror." },
        { choose: [
          { t: "Hayato. Stop reading the notebook. Read him.", stat: { knowledge: 1 }, then: [
            { n: "Hayato looked at her, and then closed the notebook on the ledge, and turned back to the screen, and for the second round he watched Haechan's hands instead of the numbers, and won it, just, and the crowd made a noise, and Haechan looked over at Solar for the first time with one eyebrow up, as though she'd told on him." },
            { s: 'haechan', f: 'neutral', t: "That's cheating. Coaching from the crowd. I'm going to remember that." }
          ] },
          { t: "(Say nothing. Watch him. Just this once let him have it.)", stat: { courage: 1 }, then: [
            { n: "She said nothing, and watched, and Haechan won the second round too with the can still in his hand and his face never changing once, and set the controls down, and stood up, and Hayato sat there looking at the screen that said YOU LOSE, and then at his notebook, and then, astonishingly, laughed, a real laugh, the first anyone in the club had ever heard from him." },
            { s: 'haechan', f: 'happy', t: "Beginner's luck. Write that down." }
          ] }
        ] },
        { n: "He opened his coffee at last, and drank half of it in one go, and looked down the row at the four of them, the president with his notebook and the rhythm girl in her wristbands and the first-year with his headphones round his neck, and at Solar among them, in the middle of it, as if he were checking which room she'd walked into this time." },
        { s: 'haechan', f: 'neutral', t: "...This is a good club. You picked a good club." },
        { n: "Then he left, the way he did, without saying goodbye, the arcade's colored lights sliding across his back as he went, and Hayato opened his notebook to a fresh page and wrote at the top of it in careful capitals UNKNOWN, and underlined it twice, and didn't write anything underneath, and looked at it for a long time." },
        { bond: { haechan: 1 } }
      ] }
    ],
    beats: [
      { id: 'gm-arc-1', at: 2, after: '4/20', days: [3], scene: [
        { place: 'Gekkoukan High · Computer Room', time: 'After School' },
        { n: "Hayato had pinned a flyer to the corkboard by the door, and stood next to it with his hands behind his back until everybody had read it, which took Kenji some time, because Kenji was also in a raid. It was from Game Panic. It said PANIC CUP in large jagged letters, and under that IRON LOTUS, 4 vs 4, TEAMS OF FOUR, and a date in September, and a prize, which was a trophy and a year's worth of free tokens." },
        { s: 'hayato', t: "This club has entered the Panic Cup every year since 2004. This club has never won a single match. Not one. I've checked. There's a log." },
        { s: 'yuzu', t: "Oh, good. Great speech. Very inspiring." },
        { s: 'hayato', t: "Last year we couldn't even enter. We were three. It's teams of four." },
        { n: "He turned, very slowly, and looked at Solar. Then Yuzu did. Then, after a delay, Kenji did, taking off one side of his headphones, which for Kenji was the equivalent of standing up." },
        { s: 'hayato', t: "It's my last year. I'd like to lose one match. Officially. With a team. That's all I'm asking. I've calculated our chances of winning one, and I'd rather not say the number out loud." },
        { choose: [
          { t: "I'm in. And we're winning one. At least one.", stat: { courage: 1 }, then: [
            { n: "Hayato stared at her as though she'd announced she could fly. Then he opened his notebook to a fresh page and wrote, at the top, PANIC CUP, and under it, slowly, four names, and under the names, after a long hesitation, the words: win one. He underlined it. His hand wasn't quite steady." }
          ] },
          { t: "What do we need to practice? Make me a list.", stat: { knowledge: 1 }, then: [
            { n: "He made her a list. It was three pages long and had subheadings, and the first item was positioning and the last item was do not panic at the Panic Cup, which he had underlined three times, and he handed it to her with both hands as if it were a diploma, and she put it in her bag, and he looked unreasonably moved." }
          ] }
        ] },
        { n: "They spent the rest of the afternoon playing the castle game as a team for the first time, all four on one side against the computer, which they had never once beaten, and they didn't beat it, but they lasted forty minutes, a club record, and when the last wall fell Yuzu put both her arms up and said that counted as practice and Hayato wrote it down." }
      ] },
      { id: 'gm-arc-2', at: 5, after: '6/10', days: [6], prev: 'gm-arc-1', scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "The middle-school team had a name. They were called Team Lunchbox, because, the smallest one explained with great seriousness, they all brought lunch from home and their mothers were friends, and they had won the Panic Cup the year before, at thirteen, and they had agreed to a proper scrim with the Gekkoukan gaming club, best of five, on the Iron Lotus cabinets, for practice." },
        { s: 'lunchbox', t: "We'll go easy on you. Just so you know. You're older. It's polite." },
        { s: 'hayato', t: "Please don't." },
        { n: "They didn't go easy. The first round lasted ninety seconds. The second lasted two minutes. In the third Hayato froze, completely, his tank sitting still in the middle of the map with its turret pointing at a wall, while Team Lunchbox rolled over everything around him, and when it was over he sat in his pod with his hands still on the controls and didn't climb out." },
        { s: 'yuzu', t: "...Hayato?" },
        { choose: [
          { t: "(Climb into the pod beside him. Sit there until he's ready.)", stat: { kindness: 1 }, then: [
            { n: "She climbed into the pod beside his and sat there, not playing, not talking, while the arcade went on shrieking around them, and after a while he took his hands off the controls and put them in his lap and looked at them." },
            { s: 'hayato', t: "Every time. Every tournament. I know every number, and the second it matters, the numbers just go. Like someone turned off a light." },
            { s: 'solar', f: 'serious', t: "Then don't use the numbers. Use us. Call one thing. Just one." }
          ] },
          { t: "Hayato. The numbers are in the notebook. You don't have to carry them.", stat: { knowledge: 1 }, then: [
            { n: "He looked at her. Then down at the notebook on the cabinet ledge beside him, where he'd left it, and she watched him understand, slowly, that it would still be there if he took his eyes off it, and he took a breath, and let it out, and nodded." }
          ] }
        ] },
        { n: "They lost the scrim four rounds to one. But the one was the fourth, and in the fourth Hayato said one word over the cabinet's noise, left, at exactly the right moment, and all four tanks went left, and Team Lunchbox didn't see it coming, and when the screen said VICTORY the smallest Lunchbox boy climbed out and came round and shook Hayato's hand very formally, like a diplomat." },
        { s: 'lunchbox', t: "See you in September. You'll be better by then. We'll be better too, though." }
      ] },
      { id: 'gm-arc-3', at: 9, after: '9/20', days: [6], prev: 'gm-arc-2', scene: [
        { place: 'Paulownia Mall · Game Panic', time: 'After School' },
        { n: "The Panic Cup took over the whole back half of Game Panic, eight teams on the Iron Lotus cabinets with a bracket drawn on a whiteboard by the counter man in three colors of marker, and a crowd of about sixty people along the rail, middle-schoolers and their parents and some university students and a woman with a baby asleep in a sling who watched every match with grim professional interest." },
        { n: "Hayato had not slept. He told them so, as a fact, at the door, and then went very pale and quiet and didn't say anything else for twenty minutes, and Yuzu held one of his hands and Kenji held the other, which nobody commented on, and they played their first match." },
        { n: "They won it. The whole arcade heard, because Yuzu screamed. The Gekkoukan gaming club's first match win since 2004, against a team of university students who were very good and also, it turned out, very hungover, and Hayato climbed out of his pod with an expression of pure shock, and wrote it down, and his handwriting shook." },
        { n: "They won the semifinal too, which nobody had calculated. And then it was the final, and on the other side of the cabinets, eating rice balls with total calm, was Team Lunchbox." },
        { s: 'lunchbox', t: "We told you you'd be better. We're glad. It's more fun if it's close." },
        { n: "It was close. It went to five rounds. In the fifth, with thirty seconds left and two tanks a side, Hayato called it, one word, clear, and Kenji's tank went down covering him, and it was Solar and one of them, the smallest, alone at opposite ends of the map with the clock running down." },
        { choose: [
          { t: "(Go straight at him. No tricks. Just go.)", stat: { courage: 1 }, then: [
            { n: "She went straight at him across the open middle of the map, and he went straight at her, and they met in the center with eleven seconds left, turrets firing, and it came down to a single shot, and his landed first, by a fraction of a second, and her tank went up in a burst of pixels, and the screen said DEFEAT, and the whole crowd along the rail made the same sound at once, a groan that turned halfway through into applause." }
          ] },
          { t: "(Hide. Make him come to you. Let the clock decide.)", stat: { knowledge: 1 }, then: [
            { n: "She hid, behind the broken wall at the edge of the map, and let the clock run, and made him come, and he came, carefully, the way he'd been taught by somebody's mother's friend's older brother, and found her with four seconds left, and they traded shots, and his landed first, by a fraction of a second, and the screen said DEFEAT, and the crowd along the rail groaned and then, halfway through the groan, started to clap." }
          ] }
        ] },
        { n: "They lost the final. Nobody minded. That wasn't true. Everybody minded for about thirty seconds. Then Team Lunchbox climbed out of their pods and lined up and bowed, all four, very low, and the Gekkoukan gaming club bowed back, and the counter man wrote SECOND PLACE: GEKKOUKAN next to their name on the bracket in the third color of marker, and Hayato stood in front of it for a very long time." },
        { s: 'hayato', t: "Three matches. Two wins. One final. I had calculated a four percent chance of any of this." },
        { s: 'yuzu', t: "Hayato. Are you crying." },
        { s: 'hayato', t: "...Statistically, yes." }
      ] },
      { id: 'gm-arc-4', at: 13, after: '12/1', days: [3], prev: 'gm-arc-3', scene: [
        { place: 'Gekkoukan High · Computer Room', time: 'After School' },
        { n: "It was Hayato's last Wednesday. After this the exams would take him, the way they took every third-year, and he had come in early to the computer room and set out four chairs in a row in front of the board, and turned all thirty computers on at once so the room filled up with their humming, and stood by the window with his hands behind his back, waiting for everyone to arrive." },
        { n: "The second-place certificate from the Panic Cup was pinned to the corkboard by the door, beside the original flyer. Somebody had laminated it. Everybody knew it was Hayato and nobody said so." },
        { s: 'hayato', t: "I have to give the notebook to someone. It's tradition. The president before me gave me his. It was forty pages. I've made it two hundred and eighty." },
        { n: "He held it out. Not to Yuzu, who'd be president, which they'd all known since September. To Kenji, who looked at it for a while like he didn't understand what it was, then took his headphones off entirely, both sides, and put them on the desk." },
        { s: 'kenji', t: "...Me? I'm a healer. I don't even play the fighting game." },
        { s: 'hayato', t: "That's why. You'll write different numbers. Better ones. About people." },
        { n: "Then he turned to Solar. He had something else, a single sheet torn neatly out of the back of the notebook, folded once, and he handed it to her and didn't watch her read it, and turned to look at the window instead." },
        { n: "It was a page of the notebook, the kind of page he'd filled two hundred and eighty of, columns of tiny careful numbers, but the numbers weren't frames. They were days. Every Wednesday and Saturday since April, a column for each of them, and in each one a single word in Hayato's tidy hand: castle, owl, rain, tanks, lunchbox, left, final. And at the top, underlined twice: the fourth player." },
        { choose: [
          { t: "(Fold it and put it in your blazer pocket. Say thank you.)", stat: { kindness: 1 }, then: [
            { n: "She put it in her pocket, over her heart, where she'd know where it was, and said thank you, and he nodded, still looking at the window, and said that statistically it was the best page in the notebook, and his ears had gone red." }
          ] },
          { t: "Hayato. Last game. Castle. All four of us against the computer.", stat: { courage: 1 }, then: [
            { n: "He turned from the window. They opened Typing Practice. All four of them on one side against the computer, which they had never once beaten, and with Yuzu building and Kenji healing the walls and Hayato calling it, out loud, every move, without freezing once, they beat it, at five fifty-eight, two minutes before the vice-principal's footsteps came down the corridor." }
          ] }
        ] },
        { n: "When the vice-principal put his head round the door he found four students typing very diligently about a quick brown fox, and nodded, and went away, and Hayato laughed, the second real laugh anyone in the club had ever heard from him, and turned off the thirty computers one by one by hand, until the room was quiet and dark and smelled of warm plastic, and they walked out into the cold together, four of them, and he didn't look back at the door, and Solar did, for him." }
      ] }
    ],
    quiet: [
      { id: 'gm-q-owl', scene: [
        { n: "Someone had changed the cartoon owl's greeting on the typing software. It used to say Let's practice! Now it said, in the same cheerful bubble, Have you slept?" },
        { n: "Nobody in the club admitted to it. Solar suspected it was nobody in the club, and that whoever it was had not." }
      ] },
      { id: 'gm-q-notebook', scene: [
        { n: "Hayato let Solar read a page of the notebook, any page she liked. She opened it in the middle. It was a list of every character in the fighting game, and under each one, beside the numbers, a single word in his tidy handwriting: brave, sneaky, lonely, show-off." },
        { s: 'hayato', t: "The numbers tell you what they do. The words tell you why. The words took longer." }
      ] },
      { id: 'gm-q-kenji-afk', scene: [
        { n: "Kenji had fallen asleep with his headphones on and his character standing in the middle of a town square in his online game, and a stranger's character had come up and sat down beside it on the bench." },
        { n: "They sat there together for twenty minutes, Kenji asleep and the stranger waiting, and when Kenji woke up the stranger waved once, and logged off, and Kenji looked at the screen for a long time." }
      ] },
      { id: 'gm-q-yuzu-wrists', scene: [
        { n: "Yuzu iced her wrists with two cans of cold tea from the vending machine, one on each, holding them there with her eyes closed like a boxer between rounds." },
        { choose: [
          { t: "(Buy her two more cans. Cold ones.)", stat: { kindness: 1 }, then: [
            { s: 'yuzu', t: "Senpai. You're a hero. I'm naming a high score after you." }
          ] }
        ] }
      ] },
      { id: 'gm-q-castle', scene: [
        { n: "Solar built a castle alone in the castle game while the others argued about something, a tiny one on an island, with one tower and a fountain, for morale." },
        { n: "Nobody attacked it. Nobody even found it. It was still there the next time she logged in, its little flag waving on its little island, which felt like more than it was." }
      ] },
      { id: 'gm-q-counter', scene: [
        { s: 'counter', t: "Gekkoukan. Your president's been at the fighting cabinet since it opened. I gave him a free token. Don't tell anyone. I've got a reputation." },
        { n: "Solar promised not to tell anyone. He gave her a free token too, and looked away while he did it, as if it had nothing to do with him." }
      ] },
      { id: 'gm-q-blinds', scene: [
        { n: "The one broken blind in the computer room let in a single bar of late light that fell across exactly one keyboard, and whoever sat there couldn't see their screen." },
        { n: "The club took turns. It was the worst seat in the room, and somehow everyone wanted it." }
      ] },
      { id: 'gm-q-tokens', scene: [
        { n: "The club kept a jar of leftover tokens on the windowsill of the computer room, the ones that had come home in somebody's pocket after a Saturday, and it was nearly full." },
        { s: 'hayato', t: "For emergencies. A tokens emergency. It's never happened. But if it does, we'll be ready." }
      ] },
      { id: 'gm-q-lunchbox', scene: [
        { n: "The smallest boy from the middle-school team waved at Solar from across the arcade, very formally, and then went back to his cabinet." },
        { n: "She waved back. They had, she realized, become rivals, which was a kind of friendship with better manners." }
      ] },
      { id: 'gm-q-hum', scene: [
        { n: "For a minute, between rounds, nobody in the club said anything, and the only sound was the hum of the machines, steady and warm, like something breathing in its sleep." },
        { n: "Solar found she'd stopped noticing it weeks ago, the way you stop noticing your own heartbeat, and only heard it now because she'd stopped to listen." }
      ] }
    ],
    openers: {
      4: "April had the computer room smelling of new dust off the blinds and the cherry trees showing pink through the one broken slat, and Game Panic had a sign up for a new cabinet, coming soon.",
      5: "May sun warmed the computer room by four so that the machines hummed a little louder, and on Saturdays the mall was full of students drifting between the fountain and the arcade with nowhere to be.",
      6: "The rainy season sent every middle-schooler on Port Island into Game Panic on Saturdays, and on Wednesdays the computer room's blinds stayed shut against a gray, dripping sky.",
      7: "July made the computer room the most popular room in the building, because it was the only one with air conditioning, and Game Panic's doors let out a gust of cold air every time they opened.",
      8: "Summer break had switched off the computer room's thirty machines, and somewhere in the mall the Iron Lotus cabinets went on blinking at whoever happened by.",
      9: "September brought the Panic Cup flyer up on the corkboard by the computer room door, and every Saturday the back of Game Panic was full of teams practicing for it.",
      10: "October light came in through the computer room's broken blind at a low gold slant, and the arcade at the mall had started selling hot drinks from the token counter.",
      11: "November darkened the computer room by the end of club, the screens the only light, and Game Panic on Saturdays smelled of wet coats and hot circuit boards.",
      12: "December put tinsel on Game Panic's token machine, and the computer room's heater clicked on at last, and everyone typed with their scarves still on.",
      1: "January, and the arcade was full of kids with New Year's money burning holes in their pockets, and the computer room hummed to itself in the cold like it was keeping warm."
    }
  }
};
