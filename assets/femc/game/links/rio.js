/* Rio Iwasaki · Chariot. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Cast-only speakers: ryoko, mori, kawai, nurse (no portraits). Side romance: route choice at rank 9; rank 10, afterMax and christmas branch on it. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'rio', name: 'Rio Iwasaki', short: 'Rio', arcana: 'Chariot', numeral: 'VII', from: 'Persona 3 Portable',
  kind: 'native',
  romance: 'side',
  starts: '4/21',
  home: { area: 'Gekkoukan High', spot: 'Tennis Courts', slot: 'after', days: [1, 2, 4, 5],
          hint: 'After school on Mondays, Tuesdays, Thursdays and Fridays, at the tennis courts.' },
  approach: "Long after practice has ended, one girl is still on the far tennis court with a cart of balls, serving into an empty box and glaring at every one that clips the tape.",
  cast: { ryoko: 'Ryoko', mori: 'Mori', kawai: 'Kawai', nurse: 'Nurse' },
  invite: {
    ask: [
      "senpai. courts. are you free",
      "the team left at five again. feed me balls?",
      "i need someone to hit with who won't complain. that's you",
      "are you busy. be honest",
      "come watch me serve. i'll buy you a drink after. a cheap one",
      "ryoko bailed. you're up."
    ],
    ok: ["good. bring water.", "ok. stretch first. i'll know if you didn't", "finally. courts."],
    no: ["fine. me and the backboard, then.", "ok. next time you're doing extra.", "rest, then. you look like you need it"]
  },
  hangouts: [
    [
      { n: "Rio had decided that today Solar was learning to serve, which meant Solar stood at the baseline with a racket that felt like a borrowed arm and a ball in her other hand, and Rio stood beside her with her arms folded like a girl supervising a demolition." },
      { s: 'rio', f: 'serious', t: "The toss is everything. Everyone thinks it's the swing. It's the toss. Straight up. Not forward, not sideways. Up." },
      { n: "Solar tossed it up. It went forward and sideways, and a little behind her, somehow, which Rio watched with the expression of someone witnessing a crime against physics." },
      { choose: [
        { t: "(Toss again. And again. Until one goes straight.)", notes: 3, then: [
          { n: "It took eleven tries. On the twelfth the ball went straight up into the white afternoon and hung there for a second against the sky, and came straight down into her open palm, and Rio made a short, involuntary sound, like a door being kicked." },
          { s: 'rio', f: 'happy', t: "THAT. That one. Do that forever." }
        ] },
        { t: "Can't I just hit it from the ground?", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "That's called a drop serve, and you're a third-year, and I refuse." },
          { n: "She showed her anyway, later, when she thought Solar wasn't paying attention, and pretended it was an accident." }
        ] },
        { t: "The ball hates me.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "The ball doesn't have feelings, senpai. You have feelings. That's the problem." }
        ] }
      ] },
      { n: "By the end the wind had picked up off the bay and was pushing every toss a little east, and Rio said that was good, actually, matches had wind, and made her do twenty more. Solar did twenty more. She didn't know why she kept saying yes to this girl, except that Rio asked like it had never occurred to her that anyone might say no." }
    ],
    [
      { n: "Rio ran the perimeter of the courts at the end of every practice, four laps, alone, because the team had voted it down in March and she had decided the vote didn't apply to her. Today she had looked at Solar on the bench and said, you run, right, with Sanada-senpai, and that was how it started." },
      { n: "It was not a race. Rio said so twice. On the second lap she sped up by a hair, and Solar's legs, which had been dragged up and down the riverside at five every morning for weeks now, matched her without being asked." },
      { s: 'rio', f: 'surprised', t: "...Okay. Okay, that's annoying." },
      { choose: [
        { t: "(Hang half a step behind her. Let her lead.)", notes: 2, then: [
          { n: "She hung back, half a step, and Rio noticed in about four strides and turned her head and glared, red in the face, breathing hard." },
          { s: 'rio', f: 'serious', t: "Don't you dare let me win. I'll know. I'll know forever." }
        ] },
        { t: "(Pass her on the last corner.)", notes: 3, then: [
          { n: "She passed her on the last corner, by a shoulder, and Rio made a noise of pure outrage and found something in her legs that hadn't been there a second ago, and they hit the gate together, shoulder to shoulder, rattling the whole fence." },
          { s: 'rio', f: 'happy', t: "Again. Tomorrow. I'm winning tomorrow." }
        ] },
        { t: "Is this how you make friends?", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "No. I don't make friends. This is how I find out who keeps up." }
        ] }
      ] },
      { n: "Afterward they lay on the warm concrete outside the fence with their arms flung out like they'd been dropped there from a height, and the sky over them was the soft washed blue of the end of the afternoon, and Rio said, without looking over, that Sanada-senpai was a bad influence on Solar's lungs and a good one on her legs, and that she'd allow it." }
    ],
    [
      { n: "The backboard stood at the far end of the courts, a green wooden wall with a white line painted across it at net height and a thousand gray ball-marks fading into the paint, and Rio said it was the only opponent in the whole school who never complained, never got tired and never told her she was too much. She said it like a compliment to the wall." },
      { n: "Today she wanted a rally. Not with Solar. With the wall, the two of them, taking turns: Rio hit, the wall returned it, Solar hit, the wall returned it, Rio hit, and the rule was that whoever let the ball bounce twice bought the drinks." },
      { s: 'rio', f: 'serious', t: "The record's forty-three. Me and Ryoko, first year. She dropped it on purpose because she wanted a melon soda. I've never forgiven her." },
      { n: "They got to nine. Then fourteen. Then, somehow, on the fifth try, with the wall thudding back at them in a rhythm like a slow heart and the late sun coming flat across the courts, they were at thirty-one, and thirty-two, and Rio had stopped breathing through her nose, and Solar's arm had gone past tired into a sort of humming nowhere." },
      { choose: [
        { t: "(Keep going. Don't look at her. Don't look at the count.)", notes: 3, then: [
          { n: "She didn't look at her. She looked at the ball and the wall and the white line, and her body did the rest, and somewhere around forty Rio started counting out loud in a whisper like a prayer, and at forty-four she let out a sound that sent a crow off the fence, and the ball bounced twice at Solar's feet, and neither of them cared." },
          { s: 'rio', f: 'happy', t: "FORTY-FOUR. I'm calling Ryoko. I'm calling her right now." }
        ] },
        { t: "(Miss on purpose at forty. Let her keep the record clean.)", notes: 1, then: [
          { n: "She let it go by at forty. Rio looked at the ball, and at her, with total betrayal." },
          { s: 'rio', f: 'serious', t: "You did that on purpose. You're Ryoko. You've become Ryoko. Melon soda, senpai. Two of them." }
        ] },
        { t: "How are we at thirty-two?", notes: 2, then: [
          { n: "Saying it broke it, the way saying things did. The next ball came back off the wall a little high and Solar swung under it, and they both stood there watching it roll toward the fence." },
          { s: 'rio', f: 'neutral', t: "Never ask how. Ever. That's the first rule of anything good." }
        ] }
      ] },
      { n: "They drank the drinks sitting with their backs against the wall itself, which was still warm from the whole afternoon, and Rio rolled the cold can across the back of her neck and said, to the sky, that the wall was still her favorite opponent, and then, a while later, that it was maybe second now, and didn't explain, and didn't need to." }
    ]
  ],
  ranks: [
    { after: '4/21', title: '1: the ball cart', place: 'Gekkoukan High · Tennis Courts', scene: [
      { music: 'school' },
      { n: "The tennis courts sat at the far edge of the grounds behind a tall chain-link fence that hummed a little whenever the wind came off the bay, and by half past five on a Tuesday they should have been empty, the nets sagging, the lines going pink in the low sun. They weren't, quite." },
      { n: "One girl was left on the far court with a wire cart of balls at her hip, serving into the empty box across the net one after another with the steady, punishing rhythm of someone hammering a nail she had a personal grudge against. The ball went in. She took another. The ball went in. She took another, and it clipped the tape and dropped back on her own side, and she looked at it the way you'd look at a dog that had just bitten you." },
      { n: "Solar had been on her way to the gate. She had been on her way to the gate for about four minutes now, standing at the fence with her bag over her shoulder, which was a strange way of being on your way somewhere." },
      { n: "The next serve went long, smacked into the chain-link a foot from her face hard enough to make the whole fence ring, and dropped at her feet." },
      { s: 'rio', f: 'serious', t: "Sorry. Can you throw that back?" },
      { choose: [
        { t: "(Throw it back. Properly.)", notes: 3, then: [
          { n: "She lobbed it over the fence underhand, an easy arc that came down into the girl's open hand without her having to move a step, and the girl looked at the ball and then at Solar with a short, sharp reassessment, like a coach watching a walk-on do something right by accident." },
          { s: 'rio', f: 'neutral', t: "...Thanks. Nobody throws them back right. They throw them at me." }
        ] },
        { t: "That one was long, by the way.", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "I know it was long. I was there." },
          { s: 'rio', f: 'neutral', t: "...It was really long, though. Wasn't it." }
        ] },
        { t: "(Roll it under the fence.)", notes: 1, then: [
          { n: "She rolled it under the fence. It trickled a meter onto the court and stopped in a crack, and the girl walked all the way over to fetch it without a word, which somehow felt worse than a word would have." }
        ] }
      ] },
      { n: "Up close she was a second-year in the white of the tennis team, with a sweatband pushed up on one wrist and sneakers worn gray at the toes from dragging, and a face that looked like someone had once told it to relax and it had taken that as an insult. The bag slung on the bench behind her said IWASAKI in marker, underlined twice." },
      { s: 'rio', f: 'neutral', t: "You're the transfer. Third-year. The one who runs with Sanada-senpai in the mornings." },
      { s: 'solar', f: 'neutral', t: "Is that what I'm known for?" },
      { s: 'rio', f: 'serious', t: "That, and half the girls in my homeroom want you dead. I don't care either way. Rio Iwasaki. Second-year. Tennis." },
      { register: 'rio' },
      { s: 'rio', f: 'neutral', t: "Do you have somewhere to be?" },
      { choose: [
        { t: "Not really.", notes: 3, then: [
          { s: 'rio', f: 'happy', t: "Good. Feed me balls." },
          { n: "She said it like she'd been waiting all afternoon for someone to say not really, and maybe she had." }
        ] },
        { t: "I'm on my way home.", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "You've been standing at that fence for five minutes." },
          { s: 'solar', f: 'flustered', t: "I'm on my way home slowly." },
          { s: 'rio', f: 'neutral', t: "Then feed me balls for twenty minutes and go home slowly after." }
        ] },
        { t: "Where's the rest of your team?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Home. Practice ends at five." },
          { s: 'rio', f: 'sad', t: "Practice ends at five because that's when they want it to end. So. Do you have somewhere to be or not?" }
        ] }
      ] },
      { n: "Feeding balls, it turned out, meant standing by the net post with the cart and bouncing them up to her one at a time, at the right height, at the right pace, and Rio told her the right height and the right pace exactly once and then expected it forever. Solar got it wrong for six balls and right for the next forty. Rio ripped forehands into the far corner until the corner was a little cloud of yellow fuzz, and the light went from gold to pink, and the fence hummed, and the monorail slid by over the water in the distance like something being pulled on a string." },
      { n: "Solar noticed, somewhere around ball thirty, that she had set herself up with the gate at her back and the whole court in front of her. She noticed it the way she noticed most things about herself lately, after the fact, and filed it." },
      { s: 'rio', f: 'neutral', t: "Everyone says I'm too much. My friend Ryoko says I'm too much. She says it nicely, which is worse." },
      { choose: [
        { t: "Too much what?", notes: 3, then: [
          { s: 'rio', f: 'serious', t: "Everything. Too loud. Too serious. Too early. I come at seven and they come at eight, and then I'm too much about it." },
          { s: 'rio', f: 'sad', t: "...I just want to win. I don't get why that's such a weird thing to want." }
        ] },
        { t: "Are you?", notes: 2, then: [
          { s: 'rio', f: 'surprised', t: "...Probably. Yeah." },
          { s: 'rio', f: 'neutral', t: "At least you asked. Everyone else just tells me." }
        ] },
        { t: "Maybe go a little easier on them.", notes: 0, then: [
          { s: 'rio', f: 'serious', t: "If I go easier on them, we lose. And then I'm the one standing there at the end watching it happen." }
        ] }
      ] },
      { n: "When the cart was empty Rio collected every ball herself, all of them, walking the court in long straight lines with the hopper, and wouldn't let Solar help, and at the gate she shouldered her bag and looked back at Solar with the sun behind her and her face still flushed." },
      { s: 'rio', f: 'neutral', t: "Same time Thursday." },
      { n: "It wasn't a question. Solar walked to the station with her right arm aching from the shoulder down and the distinct feeling of having been recruited into something nobody had asked her about, which she was beginning to suspect was going to be the shape of this whole year." }
    ] },

    { after: '4/30', title: '2: the team', place: 'Gekkoukan High · Tennis Courts', scene: [
      { n: "The holiday had left the courts damp and the air heavy with the smell of cut grass from the field next door, and the whole tennis team was out this time, a dozen girls in white scattered across three courts doing a drill that Rio was running from the service line in a voice that carried to the gym." },
      { s: 'rio', f: 'serious', t: "Split step! Split step, Mori, you're flat-footed, you're a statue, statues don't win!" },
      { n: "The first-year she was yelling at went red to the ears and missed the next ball by a meter, and Rio said nothing at all, which was louder." },
      { n: "Solar had been told to be there to stand on the far side and feed for the second group, so she stood on the far side and fed for the second group, and was looked at with polite, careful curiosity by girls who seemed to be wondering what she'd done to deserve this." },
      { n: "On the water break, one of them drifted over to the fence beside her. She was a second-year too, round-faced and soft-voiced, with her racket strings stuffed full of a dozen little rubber dampeners in different colors, like a girl who couldn't choose and didn't want to." },
      { s: 'ryoko', t: "You're the senpai who feeds her balls. She talks about you." },
      { s: 'ryoko', t: "Well. She said \"the transfer throws properly.\" That's talking, for Rio." },
      { s: 'ryoko', t: "I'm Ryoko. We've been on the same team since we were twelve. She was like this then, too. She just used to laugh more in between." },
      { choose: [
        { t: "What changed?", notes: 3, then: [
          { s: 'ryoko', t: "The third-years are leaving after summer. Somebody has to hold this together after. She thinks it has to be her, and she thinks nobody wants it to be her." },
          { s: 'ryoko', t: "She's half right. I'm not telling you which half." }
        ] },
        { t: "You could tell her to tone it down.", notes: 1, then: [
          { s: 'ryoko', t: "I do. Every week. She hears \"you're doing it wrong,\" and then she does it harder." }
        ] },
        { t: "(Just listen.)", notes: 2, then: [
          { n: "Solar said nothing, and Ryoko seemed to take that as permission, and talked for a while about middle school and a cracked racket and a tournament in the rain, until Rio's whistle went and she flinched and ran." }
        ] }
      ] },
      { n: "When practice ended at five the team went the way water goes down a drain, all at once and in a hurry, bags and voices and a little knot of first-years walking close together and murmuring with their heads down. Solar heard the name they had for Rio before she heard the rest of it. It wasn't a nice one." },
      { n: "Rio was on the bench, re-taping the grip of her racket. She was winding it so tight her knuckles had gone white, round and round, and she did not look up, and Solar knew with total certainty that she had heard every word." },
      { choose: [
        { t: "(Sit down next to her. Hold the end of the tape.)", notes: 3, then: [
          { n: "Solar sat and took the loose end of the tape between two fingers and held it, so Rio could wind against it, and Rio's hands stopped for a second, and then started again, slower." }
        ] },
        { t: "You made Mori cry, you know.", notes: 2, then: [
          { s: 'rio', f: 'sad', t: "I know." },
          { s: 'rio', f: 'serious', t: "If she doesn't come back, that's on me. I know that too. I'm not stupid. I'm just bad at it." }
        ] },
        { t: "They'll get used to you.", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "They won't. That's the thing about getting used to something. You have to want to." }
        ] }
      ] },
      { s: 'rio', f: 'sad', t: "Ryoko should be the one. Everyone likes Ryoko. Ryoko would say good job and mean it." },
      { s: 'solar', f: 'neutral', t: "Do you want her to be the one?" },
      { n: "Rio's hands stopped on the tape. A gull went over, low, crying about something, and the wind lifted the net on court two and let it fall." },
      { s: 'rio', f: 'serious', t: "...No." },
      { choose: [
        { t: "Then lead them. Just say thank you once in a while.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "Thank you for what? They did it wrong." },
          { s: 'solar', f: 'neutral', t: "For showing up at eight." },
          { n: "Rio looked at her for a long moment, like Solar had served her something she hadn't seen coming and she was still deciding whether it was in." },
          { s: 'rio', f: 'flustered', t: "...Fine. Once. As an experiment." }
        ] },
        { t: "Being liked isn't the job.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Tell them that. They think it's the whole job." }
        ] },
        { t: "Have you told Ryoko that?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "No. And you won't either." }
        ] }
      ] },
      { n: "She tore the tape with her teeth and pressed the end down with her thumb, hard, and held the finished grip up to the low sun like she was checking it for flaws. There weren't any. There never were, Solar suspected, with anything Rio was allowed to do alone." },
      { s: 'rio', f: 'neutral', t: "Thursday. And next week. You're on the far side again." }
    ] },

    { after: '5/9', title: '3: doubles', place: 'Gekkoukan High · Tennis Courts', scene: [
      { n: "Saturday, and school let out at noon, and by two o'clock the courts were full of a visiting team from across the bay in navy track jackets, and a little crowd of parents and bored friends along the fence, and the kind of bright, hard May sunlight that made the white lines hurt to look at." },
      { n: "Rio won her singles six games to two. She won it the way she did everything, without a single wasted step, without smiling, and when it was over she shook her opponent's hand once, briskly, like closing a drawer, and went straight to the bench to drink water and watch everyone else." },
      { n: "Then came doubles. Rio and Ryoko, on court one." },
      { n: "Solar didn't know much about tennis, but she knew about two people trying to share a space, and it took her about four points to see it. Every ball that came down the middle, Rio took. Every lob, Rio ran back for. Twice she cut across in front of Ryoko for a ball that was Ryoko's by a mile and won the point anyway, and the second time Ryoko just stopped, in the middle of the court, with her racket down at her side, and watched it happen." },
      { n: "They lost the set. Ryoko shook the other team's hands and smiled at them, kindly, and then walked off court without looking at Rio, and on her way past the fence Solar heard her say it, not loud, not to anyone." },
      { s: 'ryoko', t: "You don't need a partner, Rio. You need a wall." },
      { n: "Afterward, when the visitors had gone and the crowd had gone and the team had gone, Rio was walking the courts alone with the hopper, picking up balls that nobody had asked her to pick up. There weren't many. She was going very slowly to make it take longer." },
      { choose: [
        { t: "(Grab the other hopper and start from the far end.)", notes: 3, then: [
          { n: "Solar took the second hopper from the shed and started from the far baseline, and they worked toward each other without speaking, the only sound the soft clack of the wire cages and the gulls, until they met at the net with nothing left to pick up." }
        ] },
        { t: "You took every one of her shots.", notes: 2, then: [
          { s: 'rio', f: 'sad', t: "I know." },
          { s: 'rio', f: 'serious', t: "I knew while I was doing it. I couldn't stop. It's like my legs don't trust anybody." }
        ] },
        { t: "You won your singles, at least.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Singles doesn't count today." }
        ] }
      ] },
      { n: "Rio sat down on the court with her back against the net post and her legs straight out in front of her, which Solar had never seen her do, because sitting on the court was, Rio had told her twice, disrespectful to the court. Solar sat down beside her. The concrete was warm from the whole afternoon." },
      { s: 'rio', f: 'sad', t: "She's been my friend since we were twelve. She taught me how to hold a racket. I don't know how to be her friend and be... this. At the same time." },
      { s: 'rio', f: 'neutral', t: "Every time I try to be nicer it comes out wrong. Like I'm wearing somebody else's shoes." },
      { n: "Solar knew that one. She didn't know how she knew it, only that her body did, the particular tight-heeled discomfort of being the version of yourself a room needs. She looked at her own hands in her lap and didn't say so." },
      { choose: [
        { t: "Don't be nicer. Tell her you trust her. Then let her hit one.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...Just one?" },
          { s: 'solar', f: 'happy', t: "Start with one. You can work up to two." },
          { s: 'rio', f: 'happy', t: "Ha." },
          { n: "It came out of her short and rough and surprised, like it had been stuck behind something all afternoon, and she put the back of her wrist over her mouth like she could catch it." }
        ] },
        { t: "Apologize first. It's faster.", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "I'm bad at apologizing. I sound like I'm reading a contract." },
          { s: 'solar', f: 'neutral', t: "Then read it. She'll know what you mean." }
        ] },
        { t: "Maybe you don't need a partner.", notes: 0, then: [
          { n: "Rio flinched. It was small, a fraction of a second, but Solar saw it, and wished immediately she could reach out and take the sentence back off the court like a ball." },
          { s: 'rio', f: 'sad', t: "...That's what she said." }
        ] }
      ] },
      { n: "Rio took out her phone. It was scuffed and had a little tennis-ball charm on the strap that had lost most of its fuzz, and she flipped it open and typed something with her thumb, and deleted it, and typed it again, and deleted it, and on the fourth try she turned the screen toward Solar without a word." },
      { n: "It said: sorry about today. next time the middle's yours." },
      { s: 'rio', f: 'flustered', t: "Is that okay? Is that too short? It's too short." },
      { s: 'solar', f: 'happy', t: "It's perfect. Send it before you fix it." },
      { n: "She sent it. She snapped the phone shut like it might bite her, and then they sat there, the two of them, against the net post on the empty court, while the sun went down behind the city, and on the other side of the sky, over the water, the moon came up to meet it, enormous and round and pale as a coin someone had pressed into the evening and forgotten to spend." },
      { n: "The phone buzzed in Rio's lap. She looked at it. Her whole face changed, quietly, like a fist opening." },
      { s: 'rio', f: 'happy', t: "She said okay. And then she said dummy. Two separate messages." },
      { s: 'rio', f: 'neutral', t: "...Thank you, senpai. That's my once. Don't get used to it." }
    ] },

    { after: '5/27', title: '4: the walkout', place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "The prefectural qualifiers were two weeks off, and the third-years had arranged a practice match against Tatsumi Port Girls' Academy to sharpen up for them, and Rio had been preparing for it since the week after the holiday the way some people prepared for a wedding. She had a notebook. The notebook had the Tatsumi lineup in it, copied out from somebody's cousin's memory, with arrows. The arrows had been erased and redrawn so many times that the paper had gone soft as cloth." },
      { n: "The visitors came at four in a minibus, a dozen girls in navy track jackets who stretched along the fence in a tidy line and talked to each other in low, easy voices, like a team that had never once been told it was too much. Solar was on the bench with the water jug, which was the job she'd been given. She'd been given it by Rio, so she was taking it seriously." },
      { n: "Mori came at twenty past." },
      { n: "She came through the gate at a run with her bag banging against her hip and her hair half out of its tie, saying sorry, sorry, sorry before she'd reached the bench, and she changed in about forty seconds and went straight out to the near court to warm up, and double-faulted. Then she did it again. The second one went into the bottom of the net and rolled all the way back to her feet, and along the fence the Tatsumi girls watched it roll." },
      { s: 'rio', f: 'serious', t: "Twenty minutes. You're twenty minutes late to the only match that matters this month, and you can't get a ball over the net." },
      { s: 'mori', t: "I know, I'm sorry, I had to..." },
      { s: 'rio', f: 'serious', t: "If you don't want to be here, go home. Give your spot to somebody who does. Honestly, nobody would even notice." },
      { n: "The courts went quiet in the particular way only a full court can go quiet, all at once, a dozen balls stopping mid-bounce. Even the Tatsumi girls stopped talking. Mori stood at the service line with the ball in her hand and her face did something small, and then nothing at all, and then she walked to the bench and laid her racket down on it, face up, carefully, the way you'd put down something you weren't coming back for." },
      { choose: [
        { t: "(Get up and walk Mori to the gate.)", notes: 3, then: [
          { n: "Solar got up and walked beside her to the gate without saying anything, because there wasn't anything to say, and at the gate Mori said thank you to the ground and went. When Solar turned around Rio was watching her, with the face of someone who'd been slapped and was still working out by whom." }
        ] },
        { t: "Rio. Stop.", notes: 2, then: [
          { n: "Rio rounded on her with her mouth already open, and saw something in Solar's face, and shut it. It was too late by then. It was the kind of too late you could hear, the gate clanging shut at the far end of the courts." }
        ] },
        { t: "(Stay on the bench. It isn't your team.)", notes: 1, then: [
          { n: "Solar stayed where she was with the water jug between her feet and told herself it wasn't her team, and the sentence didn't feel any better for being true." }
        ] }
      ] },
      { s: 'ryoko', t: "Rio. That's enough." },
      { s: 'rio', f: 'serious', t: "Ryoko, you saw her, she..." },
      { n: "The captain, a tall third-year called Kawai who wore her visor backward and spoke so rarely that the first-years treated it like weather, walked over from the far court and stood in front of Rio and looked at her for a while." },
      { s: 'kawai', t: "Sit this one out, Iwasaki." },
      { n: "That was all. She said it the way you'd tell someone their shoelace was undone. Rio's mouth opened and closed, and then she sat down on the end of the bench next to Mori's racket with her own racket across her knees and watched Gekkoukan lose to Tatsumi Port five matches to two, and didn't say one word through any of it, which Solar thought was the cruelest thing anyone could have designed for her, and suspected Kawai knew it." },
      { place: 'Gekkoukan High · Tennis Courts', time: 'Evening', music: 'tender' },
      { n: "Solar came back at seven. She hadn't gone far, only to the vending machines by the gym and then the steps outside it, where she'd sat and listened to the minibus leave and the team leave and the gate rattle shut, and then the nothing after that, which went on for a long time." },
      { n: "Rio was sitting on the court itself, which was disrespectful to the court, with her back against the net post and her knees pulled up and the notebook closed beside her. The sky over the bay had gone the bruised blue that comes right before the streetlights, and the wind was picking at the net, and her eyes were completely dry, which was somehow worse." },
      { s: 'rio', f: 'sad', t: "I heard it. When I said nobody would notice. I heard it come out of my mouth and I couldn't stop the rest of the sentence." },
      { s: 'rio', f: 'sad', t: "Is it wrong? Wanting to win this much? Is that just what I am? The girl who wants it so hard nobody can stand next to her?" },
      { choose: [
        { t: "Wanting to win isn't wrong. What you said to Mori was.", notes: 3, then: [
          { s: 'rio', f: 'sad', t: "...I know." },
          { s: 'rio', f: 'neutral', t: "Those are two different things. I keep making them the same thing." }
        ] },
        { t: "(Sit down on the other side of the post.)", notes: 2, then: [
          { n: "She sat down on the far side of the post, back to back with Rio through the net, and the net sagged a little between them, and after a while Rio's head tipped back against the post and stayed there." }
        ] },
        { t: "Mori will get over it.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "She shouldn't. I wouldn't." }
        ] }
      ] },
      { s: 'rio', f: 'sad', t: "Ryoko told me after. Why she was late. She failed the math midterm, and they kept her for the make-up, and she ran here from the third floor. The whole way." },
      { s: 'rio', f: 'sad', t: "She ran. And the first thing I said to her was twenty minutes." },
      { s: 'solar', f: 'neutral', t: "What could the first thing have been?" },
      { n: "Rio looked at her. Then she looked at the court, the near one, where the double fault had rolled back, and Solar watched her actually think about it, which took a while, because it was clearly not a muscle she'd been asked to use." },
      { s: 'rio', f: 'neutral', t: "...You came. Warm up on two." },
      { s: 'rio', f: 'surprised', t: "That's it? That's so short." },
      { s: 'solar', f: 'neutral', t: "Short's good. You're good at short. You just pick the wrong short." },
      { choose: [
        { t: "Tell her that. Tomorrow. Before she decides she's done.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "Tomorrow? She won't want to see me." },
          { s: 'solar', f: 'serious', t: "Probably not. Go anyway." },
          { s: 'rio', f: 'serious', t: "...You're very annoying when you're right." }
        ] },
        { t: "Kawai benched you on purpose, you know.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "I know. Worst afternoon of my life. It was smart, though. I'd have done the same thing to me." }
        ] },
        { t: "Maybe leave her alone for a while.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "If I leave her alone she quits. That's what alone does to people. I'd know." }
        ] }
      ] },
      { n: "She opened the notebook, and turned past the Tatsumi lineup and all its soft gray arrows to a clean page, and wrote MORI at the top in her hard square capitals, and under it, after a long time, one line, which she covered with her whole hand the second Solar leaned over to look." },
      { s: 'rio', f: 'flustered', t: "Don't. It's a draft." },
      { n: "The streetlights came on along the road behind the fence all at once, the way they did, as if someone had been waiting for permission. Rio got up off the court, and brushed off the back of her skirt, and then, under her breath, so quietly Solar almost missed it, apologized to the court. Solar decided that counted as a start." }
    ] },

    { after: '6/18', title: '5: the rehearsal', place: 'Gekkoukan High · Rooftop', time: 'After School', scene: [
      { n: "Rio found her on the roof after the last bell, which she had never done before, and stood in front of the bench with her bag held out in both hands like a diploma and her jaw set. The roof was still wet from the morning, the rainy season doing what it did, and the puddles in the low corners held a flat white sky, and every so often the wind shook a few drops off the fence onto both of them, and neither of them moved." },
      { s: 'rio', f: 'serious', t: "I need you to be Mori." },
      { s: 'solar', f: 'surprised', t: "...Sorry?" },
      { s: 'rio', f: 'serious', t: "She hasn't come back. It's been three weeks. The qualifiers came and went and she wasn't there, and we lost in the second round, and Kawai cried on the bus and then told me to look after the first-years, and I said yes, and then I remembered I'd chased one of them off a court." },
      { s: 'rio', f: 'serious', t: "I'm going to apologize to her. Tonight. I need to practice first. You're the only one I can practice on. She's shorter than you, so slouch." },
      { choose: [
        { t: "(Slouch. Do your best Mori.)", notes: 3, then: [
          { n: "Solar slouched, hugged an imaginary racket to her chest, and said sorry, sorry, sorry very fast at the ground." },
          { s: 'rio', f: 'happy', t: "Stop. Stop it, that's too good, I can't do this if you're that good." }
        ] },
        { t: "Are you sure you need to rehearse?", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "Yes. If I go in without a plan I say something stupid. That's the whole problem. That's always been the whole problem." }
        ] },
        { t: "Why me and not Ryoko?", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "Because Ryoko would cry before I got to the end. Then I'd cry. Then it's just two people crying on a roof." }
        ] }
      ] },
      { n: "The first draft was a scouting report. Rio stood with her feet shoulder-width apart and explained, in three clear points, the error she had made, its impact on team cohesion and the corrective measures she would take going forward. She had, Solar was nearly certain, written it on an index card, and the index card was in her blazer pocket, and she touched the pocket twice." },
      { s: 'solar', f: 'happy', t: "That's a match report." },
      { s: 'rio', f: 'flustered', t: "...It's organized." },
      { n: "The second draft was shorter. Rio took a breath and shut her eyes and said I'M SORRY, OKAY, so loudly that a pigeon left the railing and two first-years by the stairwell door turned around to stare." },
      { s: 'rio', f: 'flustered', t: "That came out wrong. That came out like a serve." },
      { n: "For the third draft she bowed. She bowed so fast and so deep that Solar had to step back to keep from being headbutted, and caught her by the elbows on the way down, and Rio caught hers back, and they stood there holding on to each other in a wet wind on the roof of the school to keep from going over, both of them laughing, Rio scarlet to the ears." },
      { choose: [
        { t: "Tell her what you told me on the court. That you heard yourself.", notes: 3, then: [
          { s: 'rio', f: 'sad', t: "That's not a speech, though. That's just the truth." },
          { s: 'solar', f: 'neutral', t: "Yeah. That's the one." }
        ] },
        { t: "Draft three. Slower. Less concussion.", notes: 2, then: [
          { s: 'rio', f: 'happy', t: "Less concussion. Got it." }
        ] },
        { t: "Bring her something? A present?", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "Like what. A ball?" },
          { s: 'rio', f: 'sad', t: "...No. That's exactly the kind of thing I'd say. Forget it." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Bathhouse', time: 'Evening' },
      { n: "The Moris ran the bathhouse at the quiet end of the Strip, the old one with the cypress sign and the tall brick chimney, and at seven the entrance was a warm mouth of steam and lantern light that smelled of soap and cedar and wet stone. Mori was out front in an apron and rubber sandals with a hose, washing down the entrance tiles, sleeves rolled to the elbow, and she didn't see them until they were almost at the curtain." },
      { n: "Solar stopped at the corner of the building. Rio kept walking. Solar watched her shoulders go up, and then, on purpose, come down." },
      { s: 'rio', f: 'sad', t: "Mori. What I said. I heard it while I was saying it, and I knew it was wrong, and I finished the sentence anyway. That's the part I can't stand." },
      { s: 'rio', f: 'sad', t: "You ran from the third floor. Ryoko told me. You ran the whole way and I said twenty minutes." },
      { s: 'rio', f: 'neutral', t: "And I'd notice. I have noticed. Every practice for three weeks. Your spot on court two is just empty. It's the loudest thing on the whole court." },
      { s: 'rio', f: 'flustered', t: "That's all. I don't have a conclusion. I had three drafts and none of them had a conclusion." },
      { n: "Mori stood there with the hose running onto the tiles and the water spreading in a bright sheet around her sandals, and looked at Rio for a long moment with an expression Solar couldn't read from the corner, and then she turned the hose off at the tap without looking at it." },
      { s: 'mori', t: "...Ryoko said you'd come. She said if you came you'd mean it, and if you meant it you'd say it twice." },
      { s: 'rio', f: 'surprised', t: "Twice?" },
      { s: 'mori', t: "In front of everybody. On the court. Not just me." },
      { choose: [
        { t: "(Pick up the deck brush by the door and start on the tiles.)", notes: 3, then: [
          { n: "Solar picked up the deck brush leaning by the door and started on the far end of the entrance, and after a second Rio took the other one, and Mori looked at the two of them, the senpai who threw balls properly and the senpai who yelled, scrubbing her family's front step at seven at night, and laughed. It came out of her high and startled, like a door blown open." }
        ] },
        { t: "She means it. She practiced on me for an hour.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "Senpai." },
          { s: 'mori', t: "...You practiced? Like, out loud?" },
          { n: "Something in Mori's face gave a little, at that, the way ice gives before it goes." }
        ] },
        { t: "(Stay at the corner. This one is Rio's.)", notes: 1, then: [
          { n: "Solar stayed at the corner, which was right, she thought, and also meant she was too far away to hear what Mori said next, and only saw Rio's head come up fast, like someone who'd been handed something she hadn't expected to be allowed to hold." }
        ] }
      ] },
      { s: 'mori', t: "I'll come back Thursday. If you teach me the toss. Properly. Nobody ever has time for the toss." },
      { s: 'rio', f: 'happy', t: "I have time. I have so much time. The toss is everything." },
      { s: 'mori', t: "I know. Everyone knows. You say it every single day." },
      { n: "They did the whole entrance. Then Mori's mother came out to see what the noise was, and stood with her hands on her hips looking at two girls in Gekkoukan uniforms scrubbing her tiles, and went back in without a word and came out again with three bottles of coffee milk, cold from the case, beaded with water. Rio drank hers in one go standing up, like match point, and said thank you to Mrs. Mori twice. Solar counted. It was one more than anyone had asked for." }
    ] },

    { after: '7/9', title: '6: the armband', place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "The third-years had played their last match in June and had come back only once since, all together, for this. Summer had settled on the courts like a lid. The concrete gave the heat back up through the soles of everyone's shoes, and the cicadas in the cherry trees along the fence were going at a pitch that felt less like a sound than a temperature, and the team stood in a ragged half circle at the end of practice with their rackets hanging from their hands, squinting." },
      { n: "Kawai held the captain's armband. It was old, a faded red band with the word CAPTAIN on it in white felt letters that had been sewn on by someone a long time ago and resewn by several someones since, and a safety pin through one end." },
      { s: 'kawai', t: "Iwasaki." },
      { n: "There was applause. Solar, on the bench with the water jug, heard it the way she was beginning to hear most things here, with some part of her that had been listening for a long time before she arrived. It was polite. It was the sound of a room clapping for someone it hadn't voted for, a little too even, finishing a little too soon, and she knew that sound in her shoulders, knew it the way she knew her own handwriting, and couldn't have told anyone where she'd learned it." },
      { n: "Then Kawai said Ryoko's name for vice-captain, and the applause for that was different, warm and ragged and running on a beat too long, with Mori whooping, and Solar watched Rio hear the difference. She didn't move. She just heard it." },
      { s: 'kawai', t: "You never missed a practice in two years. Not one. That's why." },
      { n: "Then Kawai leaned down, because she was a head taller, and said something else, low, for Rio only. Solar was close enough. She didn't try to be, and she was anyway." },
      { s: 'kawai', t: "Being right isn't the same as being followed. Figure out the difference before October." },
      { n: "Afterward Rio sat on the bench beside her holding the armband in both hands like it was hot from an oven and she'd been told not to drop it." },
      { s: 'rio', f: 'neutral', t: "There were two different claps. Did you hear? One for me and one for Ryoko." },
      { choose: [
        { t: "I heard it.", notes: 3, then: [
          { s: 'rio', f: 'sad', t: "...Thank you for not pretending." },
          { n: "She said it to the armband, and her thumbs moved over the felt letters, C and then A, like she was reading them in the dark." }
        ] },
        { t: "They'll clap properly in October.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Only if we win. That's how it works with me. I'm worth clapping for if we win." }
        ] },
        { t: "Maybe you imagined it.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "I didn't. I've been listening to people clap for other people my whole life. I know what it sounds like." }
        ] }
      ] },
      { s: 'rio', f: 'serious', t: "She picked me because I come at seven. That's attendance. That's not leading. Leading is when they come because you're there, not in spite of it." },
      { n: "Solar thought about the armband in her own bag, which didn't say CAPTAIN and didn't say anything she could explain on a bench in daylight. She thought about a room on the fourth floor of a dorm and a red-haired upperclassman telling her she'd been in there more recently than anyone, as if that were a reason. It had been, a little. It hadn't been enough of one. It still wasn't, most nights." },
      { s: 'solar', f: 'neutral', t: "I got put in charge of some people this year. Not tennis. A club. It meets late." },
      { s: 'rio', f: 'surprised', t: "What kind of club meets late?" },
      { s: 'solar', f: 'neutral', t: "The kind you don't ask about." },
      { s: 'rio', f: 'serious', t: "...Fine. Do they listen to you?" },
      { s: 'solar', f: 'serious', t: "When it matters. Not because I'm right. I'm wrong all the time. They listen because I go first." },
      { n: "Rio turned that over. Solar could see her do it, could practically see her turn it over like a ball in her hand, checking the seams." },
      { choose: [
        { t: "So go first. Ask them what time practice should start.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "Ask them? They'll say nine. They'll say never." },
          { s: 'solar', f: 'neutral', t: "Then you'll know where you're starting from." }
        ] },
        { t: "Write them a schedule. You're good at schedules.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "I already wrote it. Four versions. Color-coded." },
          { s: 'rio', f: 'sad', t: "...They're all seven o'clock. Every single one. I just did them in different colors." }
        ] },
        { t: "Let Ryoko do the talking for a while.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "No. If I hide behind Ryoko I'm not the captain. I'm the girl standing behind the captain with a whistle." }
        ] }
      ] },
      { n: "She got up. She walked over to the knot of second-years and first-years by the gate, Ryoko and Mori and the rest, and Solar watched from the bench and couldn't hear a word, and could see that Rio didn't fold her arms. That was all Solar could tell from there. Rio didn't fold her arms, and her hands didn't know what to do instead, and she talked with them anyway, badly, like someone signing in a language she'd learned from a book." },
      { n: "Mori said something. Someone laughed, and for once it didn't sound like it was at anybody. Rio's ears went red." },
      { s: 'rio', f: 'flustered', t: "Seven-thirty. We compromised. I've never compromised in my life. It felt like losing a point on purpose." },
      { s: 'rio', f: 'neutral', t: "...It didn't feel terrible. Don't tell anyone." },
      { n: "She tried to pin the armband to her sleeve, and the pin was stiff, and her fingers, which could put a ball on a line from twenty meters, couldn't get it through the felt." },
      { choose: [
        { t: "(Pin it for her.)", notes: 3, then: [
          { n: "Solar took it and pinned it, and her hands knew how, steady and quick, as if they'd pinned an armband before onto a sleeve that wasn't sure it wanted one." },
          { s: 'rio', f: 'surprised', t: "You've done that before." },
          { s: 'solar', f: 'neutral', t: "Once." }
        ] },
        { t: "It's crooked. Leave it. It suits you.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "It does not suit me. ...Does it?" }
        ] },
        { t: "Do you even want it?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Yes. That's the problem. I want it more than anybody. I just don't know if wanting it is the same as being any good at it." }
        ] }
      ] },
      { n: "On the way out she stopped at the clubhouse and looked at herself in its dark window with the armband on, the way you'd look at a stranger who'd sat down beside you on a train, and straightened it, and straightened it again." },
      { s: 'rio', f: 'neutral', t: "Seven-thirty tomorrow. You're on the far side. Captain's orders." },
      { s: 'rio', f: 'flustered', t: "...That's going to take some getting used to." }
    ] },

    { after: '9/7', title: '7: the ankle', place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "September hadn't been told that summer was over. The heat still came up off the courts in a shimmer by four, and the cicadas had thinned out to a few stubborn ones, and the team was doing the drill Rio called the ladder and everyone else called something worse: short ball, deep ball, short ball, deep ball, until your legs stopped being legs and turned into a rumor." },
      { n: "Mori fed. Rio ran. It was Rio's turn, and she never let anyone else go first on the ladder, because the captain ran first, which was a rule she'd made in July and kept every single day since." },
      { n: "Mori fed a drop shot, a good one, low and spinning back toward the net, and Rio went for it the way she went for everything, as if it had insulted her family. She planted her right foot on the line to stop. The line was still slick from somebody's spilled water. Solar heard it from the bench, a short wet sound like a green stick going, and then Rio was down." },
      { choose: [
        { t: "(Get to her before she tries to stand.)", notes: 3, then: [
          { n: "Solar was over the bench and across the court before she'd decided to be, and got there as Rio was already pushing herself up, because of course she was, and put one hand flat on her shoulder and kept it there." },
          { s: 'solar', f: 'serious', t: "Don't. Stay down." },
          { n: "Rio looked at her with white lips. Then, for the first time in Solar's memory, she did as she was told." }
        ] },
        { t: "Ryoko! Ice!", notes: 2, then: [
          { n: "Ryoko was already running for the cooler. She'd gone before Solar finished the word, and Solar understood that Ryoko had been waiting her whole life for this exact thing to happen and had decided long ago what she'd do." }
        ] },
        { t: "Can you walk it off?", notes: 0, then: [
          { n: "Rio tried. That was the wrong thing to have asked her, because she would always try, and she got halfway up and went gray and sat back down hard, and Solar wished she could have the question back." }
        ] }
      ] },
      { place: 'Tatsumi Memorial Hospital', time: 'Evening', music: 'tender' },
      { n: "The ward on the third floor smelled of disinfectant and steamed fish, and the window at the end of it was going orange. Rio was in the bed by that window with her right ankle up on two pillows, wrapped and braced and enormous, and a cup of hospital pudding on the tray in front of her that she was looking at with complete contempt." },
      { s: 'rio', f: 'neutral', t: "Partial tear. A ligament. They're keeping me overnight because apparently I tried to walk on it in the X-ray room, and that was, quote, unwise." },
      { s: 'rio', f: 'neutral', t: "Six weeks. The tournament's in five." },
      { n: "She said it flatly, like a score called across a net." },
      { choose: [
        { t: "(Sit on the edge of the bed, away from the ankle.)", notes: 3, then: [
          { n: "Solar sat on the edge of the bed, carefully, on the side away from the ankle. Rio watched her do it. After a moment she slid the pudding across the tray toward her, which Solar understood was a gesture of enormous trust." }
        ] },
        { t: "Does it hurt?", notes: 2, then: [
          { s: 'rio', f: 'serious', t: "Yes. That's not the problem." }
        ] },
        { t: "Five weeks is basically six.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "It's literally not. That's literally the whole problem." }
        ] }
      ] },
      { s: 'rio', f: 'sad', t: "Do you know what I am if I can't play? I've been lying here working it out all afternoon. There's not much else to do. The ceiling has forty-one tiles." },
      { s: 'rio', f: 'sad', t: "I'm the captain who yells. That's all. They put up with it because I win my match. If I'm not winning my match, I'm just..." },
      { n: "She stopped. She looked at the window. One corner of her mouth did something small and terrible and then she pressed it flat again, hard, the way she pressed down the end of a grip tape." },
      { s: 'rio', f: 'sad', t: "In middle school I sat on the bench for a whole year. I was too small. There was a tournament in the rain, and Ryoko played, and I held the umbrella over the coach. That's what I did. I held the umbrella." },
      { s: 'rio', f: 'sad', t: "I swore I'd never sit on a bench again. And now I'm going to sit there in October with my hands in my lap and watch." },
      { choose: [
        { t: "Ryoko ran for the ice before anyone told her. Mori carried your bag here. She's in the lobby.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...Mori's here?" },
          { s: 'solar', f: 'neutral', t: "She won't come up. She says she'll cry, and you'll tell her crying is a waste of water." },
          { s: 'rio', f: 'sad', t: "I did say that once. In June." },
          { s: 'rio', f: 'sad', t: "...That's not what you do for someone you put up with. Is it." }
        ] },
        { t: "You're more than your forehand, Rio.", notes: 2, then: [
          { s: 'rio', f: 'sad', t: "Everyone says that. Nobody ever says what the more is." }
        ] },
        { t: "You could coach them from the bench.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "From a chair? Nobody listens to a chair." },
          { n: "She said it too fast, the way people say things they've already been thinking and don't want to be caught thinking." }
        ] }
      ] },
      { n: "Visiting hours ended at eight. At five to, a nurse put her head around the curtain and gave Solar a look, the kind of look nurses must practice, and Solar started to get up, and Rio's hand shot out and caught her sleeve. Not her hand. The hem of her sleeve, between two fingers, like it had happened without asking anyone." },
      { s: 'nurse', t: "Five minutes, girls." },
      { s: 'rio', f: 'flustered', t: "...Five more minutes. That's all. You don't have to talk." },
      { choose: [
        { t: "(Sit back down. Don't talk.)", notes: 3, then: [
          { n: "Solar sat back down. They didn't talk. Outside the window the lights of Port Island came on one by one, block by block, down toward the water, and Rio's fingers stayed curled in her sleeve the whole time, and when she finally let go Solar could still feel exactly where they'd been, all the way down the stairs and out through the lobby, where Mori was asleep in a plastic chair with Rio's bag in her arms." }
        ] },
        { t: "I'll come tomorrow. Right after class.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "They're letting me out at ten." },
          { s: 'solar', f: 'happy', t: "Then I'll come to your house and bring you pudding you won't eat." },
          { s: 'rio', f: 'flustered', t: "...Okay. Fine. Bring the good kind." }
        ] },
        { t: "You'll be fine, Rio.", notes: 1, then: [
          { s: 'rio', f: 'sad', t: "You don't know that." },
          { n: "She let go of the sleeve. She didn't mean anything by it. It was just that there'd been a promise in the air and Solar had answered with a weather report." }
        ] }
      ] }
    ] },

    { after: '10/1', title: '8: from the bench', place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "The autumn tournament came to Gekkoukan that year, because Gekkoukan had six courts and a parking lot, and by the time Solar got there the whole place was a noise: the pop of fifty balls at once, whistles, four schools' worth of parents along the fence with thermoses, a first-year from somewhere crying cheerfully into a towel. And at the Gekkoukan bench, in a brace and a team jacket, with a clipboard on her knees and a pencil she'd already chewed flat, sat Rio Iwasaki." },
      { n: "Yukari had come with her. She'd been asked as a favor and had said she'd stay for one match, and was on her second paper cup of corn soup and showed no sign of leaving." },
      { s: 'yukari', f: 'surprised', t: "Okay, I get it now. Archery is so quiet. Why is everybody screaming? I'm so stressed. I love it." },
      { n: "Rio saw them at the fence and went through three expressions in a second, relief and embarrassment and something Solar didn't have a name for yet, and settled on a scowl, which was the one she trusted." },
      { s: 'rio', f: 'serious', t: "You came. You don't have to stay all day. It's going to be all day." },
      { choose: [
        { t: "I brought Yukari. And onigiri for the whole team.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "For the whole team?" },
          { s: 'yukari', f: 'neutral', t: "She made forty. In our kitchen. At six in the morning. Geez. There's rice in my hair." },
          { n: "Rio looked at the bag of onigiri like it was a trophy somebody had handed her by mistake." }
        ] },
        { t: "I'm staying all day.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "...Good. Sit where I can see you." }
        ] },
        { t: "I might have to leave after the first match.", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "That's fine. That's normal. People have things." },
          { n: "She went back to the clipboard and didn't look up again for a long while." }
        ] }
      ] },
      { n: "Before the first match Ryoko went down the line of the team with a roll of white overgrip, Rio's overgrip, the kind she bought in bulk and rewound every week, and wrapped a strip of it around every girl's wrist, and wrote a small R on each one in marker. Then she knelt in front of the bench and wrapped Rio's wrist too, and wrote the R, and pressed the end down with her thumb." },
      { s: 'ryoko', t: "You're playing. You're just playing from there today." },
      { n: "Rio didn't say anything. She looked at her wrist for a long time, and pressed her own thumb over the R like she was checking it was real." },
      { n: "The second round was Tatsumi Port. The same navy jackets, the same tidy line along the fence. Rio had put Ryoko and Mori together at doubles, which had taken her two weeks and a notebook to decide and which half the team had thought was a mistake, and by the middle of the first set they were down three games to five, and Mori had double-faulted twice, and at the changeover they came to the bench with their heads down." },
      { n: "Ninety seconds. Rio had ninety seconds and a clipboard, and she was on her feet on one leg, gripping the clipboard so hard it bent, and she looked up, past them, into the crowd along the fence, and found Solar. Her face asked something." },
      { choose: [
        { t: "(Put a hand flat on your chest. Breathe out, slow.)", notes: 3, then: [
          { n: "Solar put her hand on her chest and breathed out, big and slow, exaggerated, the way you'd show a child. Rio stared at her. Then she breathed out too, and sat down, and turned to her team, and instead of the list Solar could see on the clipboard she said one thing, quietly, only to Mori. Mori laughed. Ryoko nodded. They went back out loose." }
        ] },
        { t: "(Shout.) Tell them what you see, Rio!", notes: 2, then: [
          { n: "Rio heard. She turned and talked fast and low, pointing at the clipboard, and Solar watched the two of them lean in toward her like plants toward a window." }
        ] },
        { t: "(Look away so she doesn't feel watched.)", notes: 1, then: [
          { n: "Solar looked down at her shoes. When she looked up the changeover was over, and she had no idea what had been said, and wished she did." }
        ] }
      ] },
      { s: 'yukari', f: 'neutral', t: "What did she say to them?" },
      { n: "Solar didn't know. She found out later, from Mori, who told it to everyone who would listen for a week. Rio had said, your toss is perfect today. I'm not just saying it. I don't just say things." },
      { n: "They won the set seven games to five. At five-all Mori stepped up to serve, and tossed, and the ball went straight up into the white October sky and hung there against it for a second, and came straight down, and she hit it, and it went in, and it went in again, and the third one wasn't returned at all." },
      { n: "The courts exploded. Yukari screamed and threw her corn soup, mostly away from people. Gekkoukan took the round two matches to one, and the whole team ran, not to the middle of the court, but to the bench, and piled onto Rio, careful of the ankle and careful of nothing else, Ryoko sobbing, Mori at the bottom of it somehow with her face blank and her arms locked around Rio's neck. And Rio, in the middle of all of it, was crying. Openly. Loudly. Like she'd forgotten how not to." },
      { s: 'yukari', f: 'surprised', t: "Oh my god. I'm crying. Why am I crying? I don't even know these people." },
      { place: 'Gekkoukan High · Tennis Courts', time: 'Evening' },
      { n: "They lost the quarterfinal that afternoon in straight sets, to the school that would go on to win the whole thing. Nobody seemed to mind very much. By evening the courts were empty and the lines were chalk-blurred from a hundred feet, and Rio sat on the bench with the tape still around her wrist, and Solar sat beside her, and Yukari had gone home with an empty onigiri bag and a voice like gravel." },
      { s: 'rio', f: 'sad', t: "I sat on a bench and watched. Hands in my lap. Just like middle school." },
      { s: 'rio', f: 'happy', t: "And it was the best day of my whole life." },
      { s: 'rio', f: 'neutral', t: "They didn't need me out there. I thought that would feel like being erased. It didn't. It felt like they're mine, and I'm theirs, and that doesn't stop when I'm not the one hitting." },
      { choose: [
        { t: "Kawai said figure out the difference before October. It's October.", notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "...It is October." },
          { s: 'rio', f: 'happy', t: "I figured it out on a bench. With one leg. That's so stupid. That's so completely me." }
        ] },
        { t: "They played for you, Rio.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "Don't. If you say it like that I'll cry again, and I've already cried in front of four schools today." }
        ] },
        { t: "You'll be back on court soon anyway.", notes: 1, then: [
          { s: 'rio', f: 'neutral', t: "I know. That's not the part that matters anymore. It was the only part this morning. That's so weird." }
        ] }
      ] },
      { n: "She unwound the tape from her wrist slowly, the whole strip in one piece, and smoothed it flat on her knee, and looked at the R for a while, and then folded it into her notebook, between the page with the Tatsumi arrows and the page that said MORI at the top, and shut it." }
    ] },

    { after: '10/29', title: '9: what are we', place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "The wind had come round to the north and brought the first real cold with it, the kind that got into the cuffs of your blazer and found your wrists, and the cherry trees along the fence had gone rust-colored and were letting go of their leaves one at a time onto the courts, where they skidded along the baselines like they were late for something. The doctor had cleared Rio to run that morning. She'd texted Solar a single word in the middle of second period, CLEARED, in capitals, and nothing else, and Solar had read it under her desk and smiled at it in a way that had made the boy at the next desk ask who died." },
      { n: "Now practice was over and the team was gone and Rio stood at the baseline in a long-sleeved shirt with her racket, rolling her right ankle in a slow, careful circle, testing it the way you'd test ice on a pond." },
      { s: 'rio', f: 'neutral', t: "Feed me. Like the first time." },
      { choose: [
        { t: "(Feed one a little short. For old times' sake.)", notes: 3, then: [
          { n: "She bounced it a little short, the way she had on the very first night, around ball four. Rio saw it go and laughed out loud and went for it anyway, and got there, and got there easily, and hit it clean into the far corner, and turned around with her whole face lit up." },
          { s: 'rio', f: 'happy', t: "You did that on purpose." },
          { s: 'solar', f: 'happy', t: "Absolutely." }
        ] },
        { t: "(Feed it perfectly.)", notes: 2, then: [
          { n: "It came up right where Rio liked it, and she stepped into it and hit it, and came down on the right foot and stood there a second making sure the court was still the court." },
          { s: 'rio', f: 'happy', t: "...It held." }
        ] },
        { t: "Are you sure you should be running?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "The doctor said yes. You don't outrank the doctor. Feed." }
        ] }
      ] },
      { n: "They did forty. The ankle held for all forty. Afterward Rio sat down on the court with her back against the net post, which she had decided sometime this year was allowed if you apologized to the court afterward, and patted the concrete beside her, and Solar sat. It was cold through her skirt. The sky over the bay was going the color of a pearl." },
      { n: "For a while Rio didn't say anything at all, which was rare enough that Solar noticed it the way you notice a clock has stopped. She pulled at a loose thread on the cuff of her sleeve. She looked at the far baseline, where Mori had left a ball in the corner, small and yellow and forgotten, and didn't get up to fetch it, which was rarer still. The fence hummed. A leaf came skating across the court on the wind and fetched up against Solar's shoe and stayed there, as if it had been looking for her specifically." },
      { s: 'rio', f: 'neutral', t: "Ryoko asked me yesterday if I was okay. Because I said good job to the first-years three times in one practice. She thought I had a fever." },
      { s: 'solar', f: 'neutral', t: "Do you?" },
      { s: 'rio', f: 'flustered', t: "...Sort of. Not the kind you take a pill for." },
      { s: 'rio', f: 'serious', t: "I'm going to say something. Don't interrupt. If you interrupt I'll lose my nerve and I'll have to wait until tomorrow, and I can't wait until tomorrow." },
      { choose: [
        { t: "Take your time.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "I don't have time. I have a speech. I've had it since September. I wrote it on the back of the hospital menu." }
        ] },
        { t: "You're shaking.", notes: 2, then: [
          { s: 'rio', f: 'flustered', t: "It's cold." },
          { s: 'rio', f: 'flustered', t: "...It's not the cold." }
        ] },
        { t: "Can it wait until you've stretched?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "No. Stretching is how I talk myself out of things. I've stretched for a month." }
        ] }
      ] },
      { s: 'rio', f: 'flustered', t: "Nobody ever just showed up before. For me. Not for the team, not for the points. You showed up for the cart. For the bathhouse. For the pudding I didn't eat. For a bench." },
      { s: 'rio', f: 'flustered', t: "So I need to know what this is. What we are. I need to know what to call it, because I'm bad at things I don't have a name for. You know that. I'm bad at things I can't keep score of." },
      { route: [
        { t: "I think you already know what I'd call it.", route: 'romance', notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "..." },
          { s: 'rio', f: 'flustered', t: "Okay. Okay, then I'll say it. I like you. Like that. I've liked you since the cart, maybe before the cart, I wasn't paying attention, I was serving." },
          { s: 'rio', f: 'flustered', t: "You throw balls back properly and you never quit and you laugh at me when I'm being ridiculous, and nobody laughs at me, they're all a little scared of me, and you're not, and I think about you during drills, which is completely unacceptable for a captain, and when you sat on the hospital bed I didn't breathe right for a whole minute, and..." },
          { s: 'solar', f: 'happy', t: "Rio." },
          { s: 'rio', f: 'flustered', t: "...Too fast?" },
          { s: 'solar', f: 'happy', t: "Way too fast. I like you too." },
          { n: "Rio put both hands over her face. From behind them came a sound that was half a laugh and half something else entirely, and her ears went the brightest red Solar had ever seen on a human being, and her shoulder pressed into Solar's against the cold and stayed there, and stayed there." }
        ] },
        { t: "You're my doubles partner, Rio. The one who gets the middle.", route: 'friend', notes: 3, then: [
          { s: 'rio', f: 'surprised', t: "..." },
          { s: 'rio', f: 'happy', t: "...Partner. Doubles partner." },
          { s: 'rio', f: 'flustered', t: "That's the highest thing I've got, so don't make it weird. I've never given anybody the middle. Not even Ryoko. Ryoko had to fight me for it in a text message." },
          { n: "She bumped Solar's shoulder with hers, hard, the way she bumped Ryoko's after a good point, and then left it there against the cold, and they sat under the net post until the court lights came on by themselves on their timer and made them both jump." }
        ] }
      ] },
      { n: "Later, at the gate, with her bag on one shoulder and her racket in the other hand, Rio stopped, and turned around, and looked back at the court with the lights still on over it, white and humming and empty, and then at Solar, as if she were checking both of them were still there." },
      { s: 'rio', f: 'neutral', t: "Thursday. Seven-thirty. You're on the far side." },
      { s: 'rio', f: 'happy', t: "...And Friday. And the one after that. I'm just telling you now so it's official." },
      { n: "Then she went, fast, before Solar could answer, the way she left the court after a match she'd won, without looking back, and Solar stood at the gate with her hands in her pockets and the lights humming over the empty court behind her, and found that she was smiling at nothing, at the cold, at a single yellow ball in the far corner that nobody had picked up, and that she didn't want to stop." }
    ] },

    { after: '11/26', title: '10: the middle', place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "It was dark by five now. The court lights came on at a quarter to, on their timer, and turned the whole fenced square into a bright white box hanging in the blue evening, with the cold coming up off the concrete and everyone's breath going up in little clouds that the lights caught and lost. Practice ended at six. The team went the way it always went, all at once, bags and voices, except that now it went past Rio on the way out instead of around her." },
      { s: 'mori', t: "Bye, Captain! Bye, Solar-senpai!" },
      { n: "Mori said it without any irony at all, waving her whole arm, and Rio froze for a second like she'd been hit with a ball she didn't see coming, and then lifted one hand and waved back, stiffly. Ryoko, behind Mori, gave Solar a look of enormous, unbearable meaning, and took Mori by the hood of her jacket, and towed her away." },
      { n: "Then it was the two of them, and the white box of light, and the ball cart, and the hum of the lamps. Rio had a long, thin bag with her, an old racket cover faded from blue to the color of a vein, and she'd been looking at it all practice." },
      { s: 'rio', f: 'neutral', t: "This was my first racket. Ryoko gave it to me when we were twelve, because mine was from a supermarket and she said it was embarrassing her. It's been in every tournament I ever lost." },
      { cg: 'link-rio-r10' },
      { n: "She pushed it into Solar's arms, cover and all, and then leaned on the ball cart as though she needed something to hold instead." },
      { s: 'rio', f: 'flustered', t: "I had it restrung. It's yours. So you stop using the club's. The club's are terrible. And this one's been unlucky long enough. It's time it was lucky for somebody." },
      { cg: null },
      { choose: [
        { t: "(Take a swing with it. Right now.)", notes: 3, then: [
          { n: "Solar took it out of the cover and swung it, once, at nothing, and it was lighter than the club's, and the grip was worn smooth in two places exactly the shape of a twelve-year-old's hand, and it moved through the cold air like it had been waiting to." },
          { s: 'rio', f: 'happy', t: "Your elbow's wrong. ...It looks right on you anyway. That's annoying." }
        ] },
        { t: "Are you sure? Ryoko gave it to you.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "I asked her. She said it was about time somebody else got yelled at while holding it. She meant it nicely. I think." }
        ] },
        { t: "I'm going to be terrible with it.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "Obviously. It doesn't care. It had me." }
        ] }
      ] },
      { s: 'rio', f: 'neutral', t: "I was right in April. Did you know that? I was right about everything. Mori's toss. Tatsumi's lefty. What time practice should start. I was right about all of it, and nobody came." },
      { s: 'rio', f: 'neutral', t: "Now I'm wrong twice a week in front of everybody, and they come at seven-thirty. Mori comes at seven. Nobody asked her to. She just comes." },
      { choose: [
        { t: "Being right was never the job.", notes: 3, then: [
          { s: 'rio', f: 'neutral', t: "Kawai said that. You said that. Ryoko's been saying it since we were twelve. I'm slow." },
          { s: 'solar', f: 'happy', t: "You're not slow. You just don't like being told." },
          { s: 'rio', f: 'happy', t: "...That's fair. That's extremely fair." }
        ] },
        { t: "You're still right a lot.", notes: 2, then: [
          { s: 'rio', f: 'happy', t: "I am. I'm right constantly. I just say it slower now, and I say thank you after." }
        ] },
        { t: "So you're nice now?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "I'm not nice. I'm the same. I just say thank you. It turns out that's most of it, which is honestly insulting." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "The lamps clicked over on their timer, and the bank over the far courts went out, and then the next, until there was only the one light over this net and the two of them under it, and the long shadows of the posts lying across the concrete like the hands of a clock." },
        { s: 'rio', f: 'flustered', t: "I've been trying to work out how to do the next part slowly. I promised myself I'd do things slower. Say things slower." },
        { s: 'rio', f: 'flustered', t: "I don't think I'm going to manage it." },
        { choose: [
          { t: "Then don't.", notes: 3, then: [
            { n: "She didn't. She kissed Solar the way she played, all at once, no wasted motion, one hand fisted in the front of Solar's coat, and then, after a second, much more slowly, like she'd remembered the promise halfway through and decided she'd keep it after all." },
            { n: "When she pulled back she was laughing under her breath, red to the ears, and she put her forehead against Solar's and said, very quietly, a thing she would never have said in daylight, which was that she'd wanted to do that since the hospital, and had been furious about it for two months." }
          ] },
          { t: "(Take her hand first. Slowly.)", notes: 3, then: [
            { n: "Solar took her hand, slowly, so she'd see it coming. Rio's hand was cold and calloused across the palm from two years of grip tape, and it turned over in Solar's and held on hard, the way she held a racket at match point." },
            { s: 'rio', f: 'surprised', t: "...Oh. Like that." },
            { n: "Then she kissed her, under the last light, carefully, like something she'd been practicing alone for a very long time against an empty box and had finally got someone to play it with." }
          ] },
          { t: "Rio. Breathe.", notes: 2, then: [
            { n: "Rio breathed, in and out, big and exaggerated, the way Solar had shown her from the fence in October, and it came out of her as a laugh, and the laugh was what made it easy. She leaned in and kissed Solar quickly, on the mouth, and leaned back, and looked astonished at herself." },
            { s: 'rio', f: 'flustered', t: "...That was fast. Next one's slower. I promise." }
          ] }
        ] },
        { n: "The timer took the last light. Neither of them moved for a while. Somewhere in the dark a ball rolled off the cart and bounced, once, twice, and Rio said, without letting go of anything, that it could wait until spring." }
      ], else: [
        { s: 'rio', f: 'neutral', t: "Spring. The qualifiers. My last real year. I want you in the stands, and if you learn a real serve by then, I'll put you in a practice match myself. On the far side. With that racket." },
        { choose: [
          { t: "Deal. I'll serve into the net with your racket.", notes: 3, then: [
            { s: 'rio', f: 'happy', t: "I'll hit it back over anyway. I always do." },
            { n: "They shook on it under the lights, very formally, like rival captains at the net. Then Rio pulled her into a hug that lifted her clean off her feet and spun her a quarter turn, and this time neither of them pretended it was about form." }
          ] },
          { t: "Only if you promise to stop when your ankle says so.", notes: 3, then: [
            { s: 'rio', f: 'serious', t: "...Fine. I promise. You're worse than the doctor." },
            { s: 'rio', f: 'happy', t: "Partner. Obviously. That's what partners are for. Being worse than the doctor." }
          ] },
          { t: "Spring's a long way off.", notes: 2, then: [
            { s: 'rio', f: 'neutral', t: "It isn't. Nothing is. That's the one thing I learned this year that wasn't about tennis." }
          ] }
        ] },
        { n: "They walked to the station together with the old racket over Solar's shoulder in its faded cover, and Rio talked the whole way about next year, the draw and the lineup and Tatsumi's lefty, and somewhere around the third streetlight she ran out of plans and just walked, and Solar thought that was the most Rio had ever said." }
      ] }
    ] }
  ],
  // After MAX: "you can still hang out" scenes (data for a later engine pass; they play after rank 10).
  afterMax: [
    { place: 'Port Island · Seaside Park', time: 'Evening', scene: [
      { n: "The courts were closed for the winter inspection, which Rio took personally, and so on a gray winter afternoon she'd dragged Solar across the bay to Seaside Park, where there was nothing to practice on at all, and they sat on the seawall with their legs hanging over the rocks and two cans of hot corn soup from the machine at the park gate, unopened, held in their gloves for the warmth." },
      { n: "The bay was the color of a nickel. A ferry went out slowly toward the far side with all its windows lit, though it was barely four. The wind came in off the water with nothing in its way and went straight through everybody's coat." },
      { s: 'rio', f: 'neutral', t: "I come out here sometimes in winter. When there's nothing to hit. It's the only time I ever stop." },
      { s: 'rio', f: 'neutral', t: "...I walked past your dorm on Sunday. There were people on the steps I've never seen in my life. Like five of them. One of them asked me if I was a friend of yours." },
      { s: 'rio', f: 'surprised', t: "And when I said yes she looked so relieved. Like she'd been worried about you for a really long time and I was the first good news all week." },
      { n: "Solar held the can of soup and felt the heat of it through her gloves, and didn't know which of them it had been, and found that she could picture all of them on those steps anyway, very clearly, looking for her in the faces of strangers, and had to look at the ferry for a while." },
      { choose: [
        { t: "They're... old friends. It's complicated.", notes: 2, then: [
          { s: 'rio', f: 'neutral', t: "Everything about you is complicated. You know that? You're the most complicated person I've ever fed balls to." },
          { s: 'rio', f: 'happy', t: "I don't mind. I like a hard draw." }
        ] },
        { t: "I'm glad she met you. You're good news.", notes: 3, then: [
          { s: 'rio', f: 'flustered', t: "I'm not news. I'm a tennis captain." },
          { s: 'rio', f: 'flustered', t: "...I'm a little bit news. Fine." }
        ] },
        { t: "Did you tell her anything about me?", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "I told her you can't serve. She laughed. She said that sounded right." },
          { n: "Solar didn't know what to do with that, so she opened her soup." }
        ] }
      ] },
      { s: 'rio', f: 'sad', t: "You're graduating in March. I did the math in class yesterday. I got so mad I broke my pencil, and the teacher asked if I was alright, and I said I hated fractions." },
      { s: 'rio', f: 'neutral', t: "Where are you going? After. University? Work? You never say. You never say anything about after. You never say anything about before, either." },
      { n: "Solar didn't know. She didn't know in a way she couldn't have explained to anybody on this side of the bay, and she sat there on the cold seawall with the question in her lap like the unopened can, and the not-knowing was very loud, and Rio, for once in her life, waited." },
      { s: 'solar', f: 'sad', t: "I don't know yet." },
      { s: 'rio', f: 'neutral', t: "...Okay. You don't have to. I'm bad at not knowing. You're allowed to be good at it." },
      { ifRoute: 'romance', then: [
        { n: "Her hands were cold. They were always cold, even in July. She looked at them, and then, without asking, pulled off her gloves and pushed both bare hands into the pockets of Solar's coat, where Solar's own hands already were, and held on, staring straight ahead at the bay with her face set like she was serving at match point." },
        { s: 'rio', f: 'flustered', t: "Don't make it a thing." },
        { s: 'solar', f: 'happy', t: "It's not a thing." },
        { s: 'rio', f: 'flustered', t: "...It's a little bit a thing." }
      ], else: [
        { n: "She opened her own can, finally, and then took Solar's and opened that too and handed it back, so both of them had something hot, and bumped Solar's shoulder with hers, hard, and left it there against the wind." },
        { s: 'rio', f: 'neutral', t: "Wherever it is. I'm coming to watch. That's what partners do. They come to the away matches." }
      ] },
      { n: "They stayed until the soup was cold and the lights had come on along the far shore one by one, and the ferry came back across the dark water lit up like a lantern somebody was carrying home, and neither of them said anything else about March, which was, Solar thought, its own kind of promise." }
    ] },
    { place: 'Gekkoukan High · Tennis Courts', time: 'After School', scene: [
      { n: "It had snowed in the night, a thin wet snow that had given up by morning and lay on the courts in a gray slush with the white lines showing through it like the bones of something, and Rio was out there anyway with a squeegee on a long pole, pushing the slush toward the drain in long, straight, furious rows." },
      { s: 'rio', f: 'serious', t: "Don't just stand there. There's another one in the shed. Overlap your rows. If you leave a streak, somebody slips on it in spring and it's your fault forever." },
      { n: "Solar got the other squeegee. They worked toward each other from opposite baselines, the only sounds the hiss of the rubber blades on wet concrete and the drip from the fence and their own breathing, and the sky over the bay was low and white and close, and every so often a few flakes came down out of it, halfhearted, as if checking whether they were still wanted." },
      { s: 'rio', f: 'neutral', t: "Spring qualifiers are in May. My last ones. Our first match is probably Tatsumi again. It's always Tatsumi." },
      { s: 'rio', f: 'neutral', t: "You'll come. Right? Front row. I already told Mori to save you a seat. She's going to make a sign. I told her not to make a sign. She's making a sign." },
      { n: "Solar pushed her squeegee to the end of its row and stopped. May was a long way off. May was on the other side of something she couldn't see the shape of yet, the way you can't see the far side of a bridge in fog, only feel that the road keeps going." },
      { choose: [
        { t: "I'll try.", notes: 3, then: [
          { n: "Rio stopped pushing. She looked across the court at Solar, through the thin falling snow, for a long time." },
          { s: 'rio', f: 'surprised', t: "You never say try. You say yes or you say no. Since April. I've counted." },
          { s: 'solar', f: 'serious', t: "I'm saying try." },
          { s: 'rio', f: 'neutral', t: "...Okay. Then try hard. Try like it's match point." },
          { n: "She didn't ask why. That was the thing about Rio, Solar thought, that nobody on the team had understood in April. She'd push you through a wall, but she never once pushed you through a door." }
        ] },
        { t: "Front row. With a bigger sign than Mori's.", notes: 2, then: [
          { s: 'rio', f: 'happy', t: "Good. No. Not good. Don't make a sign. ...Make a small one." },
          { n: "Solar said it lightly, the way you'd say anything, and felt it land somewhere under her ribs and stay there, heavier than it had any right to be." }
        ] },
        { t: "Tell Mori no sign.", notes: 1, then: [
          { s: 'rio', f: 'serious', t: "I've told her six times. She's a first-year. They don't listen to anything except the toss." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "They met at the net with nothing left to push. Rio leaned her squeegee against the post and, very deliberately, the way she did a thing she'd decided on in advance, pressed her cold nose to Solar's cheek, just under the eye, and held it there for a second." },
        { s: 'rio', f: 'flustered', t: "That's for luck. It's cold. It's a cold-weather thing. Don't look at me like that." }
      ], else: [
        { n: "They met at the net with nothing left to push. Rio leaned her squeegee against the post, scooped up a handful of the last clean snow from the top of the net cord and packed it, and threw it at Solar from about a meter away, and missed, which was the first time Solar had ever seen her miss anything she was aiming at." },
        { s: 'rio', f: 'happy', t: "That was on purpose. Obviously. I'm being a good captain. I'm letting you have one." }
      ] },
      { n: "The court was clean. It shone wet and black under the white sky, every line crisp, ready for nobody, and Rio stood in the gate with her hands on her hips looking at it the way other people looked at sunsets, and Solar stood next to her and looked at it too, and tried, very hard, to keep it." }
    ] }
  ],
  // Christmas Eve on the romance route at MAX (12/24, snow).
  christmas: { place: 'Port Island Station', time: 'Evening', scene: [
    { music: 'date' },
    { n: "Port Island Station had put up its illuminations, a tunnel of white lights running the whole length of the plaza, and every couple in the city seemed to be walking through it slowly, arm in arm, stopping every three steps for a picture, while the snow came down through the lights in big, soft, unhurried flakes and melted on everybody's shoulders. Christmas Eve was a date night. Everybody knew that. Rio had looked it up anyway, in case there were rules." },
    { n: "She was waiting at the near end of the tunnel in a big navy coat and a knitted hat with a pompom that somebody, almost certainly Ryoko, had made her wear, scowling at the lights like they'd been put up to inconvenience her personally, with a shoebox under one arm, and when she saw Solar she stopped scowling so fast it was nearly a sound." },
    { s: 'rio', f: 'flustered', t: "You're late. You're not late. I'm early. I've been here since six. It's fine. Merry Christmas." },
    { s: 'rio', f: 'serious', t: "I'm going to be honest. I don't care about the lights. I've never cared about lights. I care about whether you're cold." },
    { s: 'solar', f: 'happy', t: "I'm a little cold." },
    { s: 'rio', f: 'serious', t: "Then we're walking fast." },
    { n: "They did not walk fast. They walked through the whole tunnel slower than any couple in it, because halfway through Rio took Solar's hand and put it, with her own, into the pocket of her coat, and then seemed to forget entirely how walking worked." },
    { place: 'Port Island · Pier', time: 'Night', music: 'tender' },
    { n: "Past the station, past the lights, the walkway ran along the water in the dark, and the snow was coming in off the bay in long slants under the lamps, fine and steady, and nobody else was out here. The water below the rail was black and loud, and the far shore was a smear of gold, and the cold made everything very clear and very close, the way cold does." },
    { cg: 'romance-rio-christmas' },
    { n: "Rio stopped at a bench under a lamp, brushed the snow off it with her glove, sat, waited for Solar to sit beside her, and held out the shoebox in both hands, stiffly, the way she'd once held out a bag to a girl on a roof." },
    { s: 'rio', f: 'flustered', t: "Open it. Don't say anything until you've opened it." },
    { n: "Tennis shoes. White, with a navy stripe, the good brand, the one the whole team wore, in exactly her size." },
    { s: 'rio', f: 'flustered', t: "You've been playing in your gym shoes since April. They're terrible. They have no grip. Your feet deserve better than that." },
    { s: 'rio', f: 'flustered', t: "...I checked your shoe locker for the size. That sounds bad. Ryoko said it sounded bad. I did it anyway." },
    { cg: null },
    { choose: [
      { t: "(Give her a photo in a frame. The team at the bench in October, every wrist taped.)", notes: 3, then: [
        { n: "Yukari had taken it from the fence without telling anyone, and Solar had found it on her camera in November and had it printed at the shop by the station. The whole Gekkoukan team in a heap at the bench, crying, laughing, every wrist wrapped in white tape with a smudged R, and in the middle of all of it, crushed and soaked and grinning, Rio." },
        { s: 'rio', f: 'surprised', t: "..." },
        { n: "Rio looked at it under the lamp for a long time. Snow landed on the glass. She wiped it off with her sleeve, carefully, and then held the frame against her chest with both arms and didn't say anything, because, Solar understood, she couldn't." }
      ] },
      { t: "(Give her a sweatband with CAPTAIN stitched on it. Crookedly. By hand.)", notes: 3, then: [
        { s: 'rio', f: 'neutral', t: "You sewed this." },
        { s: 'solar', f: 'flustered', t: "Mitsuru-senpai's sewing kit. Badly. The P is upside down." },
        { s: 'rio', f: 'happy', t: "It's not upside down. It's... it's a little upside down. I love it. I'm wearing it in May. I'm wearing it every match until it falls apart." },
        { n: "She pulled it on right there over her glove, in the snow, and looked at it on her wrist the way she'd looked at the R in October." }
      ] },
      { t: "(Give her a roll of overgrip. Fifty meters. White.)", notes: 2, then: [
        { s: 'rio', f: 'surprised', t: "Fifty meters? That's... that's six months. That's a whole season." },
        { s: 'rio', f: 'happy', t: "That's the most practical present anyone's ever given me. I'm going to cry about grip tape. On Christmas." }
      ] }
    ] },
    { s: 'rio', f: 'neutral', t: "In April I was alone on a court with a cart. I thought that was what it took. Being alone with it. Wanting it more than everyone, so nobody could take it away." },
    { s: 'rio', f: 'neutral', t: "Then you threw a ball back. Properly. You didn't even think about it." },
    { s: 'rio', f: 'flustered', t: "This whole year started with you throwing a ball back, and I don't know how to say what that did, so I'm going to try, and you're not allowed to interrupt. I said I'd say things slower. So." },
    { n: "She took a breath. Solar watched her take it, watched her square her shoulders the way she did at the baseline, the toss and the step, and then, for once in her life, not rush the swing." },
    { s: 'rio', f: 'flustered', t: "I. Love. You." },
    { s: 'rio', f: 'flustered', t: "...That was slow. That was very slow. That counts as slow." },
    { choose: [
      { t: "I love you too. Fast, slow, any speed.", notes: 3, then: [
        { s: 'rio', f: 'surprised', t: "...Any speed." },
        { s: 'rio', f: 'happy', t: "Okay. Good. Good. Okay." }
      ] },
      { t: "Say it again. Faster. Like you mean it.", notes: 3, then: [
        { s: 'rio', f: 'flustered', t: "IloveyouIloveyouIloveyou. Happy?" },
        { s: 'solar', f: 'happy', t: "Very." }
      ] },
      { t: "(Kiss her instead of answering.)", notes: 2, then: [
        { n: "Solar didn't answer. She leaned in and kissed her instead, and Rio made a short outraged sound against her mouth, the sound of a girl who'd prepared a whole speech for the other side of this and been robbed of it, and then stopped minding." }
      ] }
    ] },
    { n: "Rio kissed her under the lamp, in the snow, all at once, no wasted motion, the way she did everything, and then pulled back half an inch and did it again, slower, like she was correcting her own form. Snow was melting in the wool of her hat. Her nose was freezing against Solar's cheek. Out on the bay a ship went by, lit up, and its horn sounded once, long and low across the water, and Rio didn't even look." },
    { s: 'rio', f: 'neutral', t: "Next year. Every match. I want you in the stands in those shoes." },
    { s: 'rio', f: 'happy', t: "And before every match you feed me ten. A little short. For luck." },
    { n: "Solar said yes. She meant it with everything she had, and she didn't know if it was true, and the two things sat side by side in her chest under the snow like two people on a bench, not touching, keeping each other warm anyway." },
    { s: 'solar', f: 'happy', t: "For luck." },
    { n: "They walked the long way back along the water with the shoebox under Solar's arm, and Rio talked the whole way about the spring draw and the lineup and Tatsumi's lefty, and somewhere around the third lamp she stopped talking and just held Solar's hand in her pocket, and that, Solar thought, was the most Rio had ever said." }
  ] }
});
