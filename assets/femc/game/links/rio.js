/* Rio Iwasaki · Chariot. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Cast-only speaker: ryoko (no portrait). Ranks 4-10 are stubs. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'rio', name: 'Rio Iwasaki', short: 'Rio', arcana: 'Chariot', numeral: 'VII', from: 'Persona 3 Portable',
  kind: 'native',
  romance: 'side',
  starts: '4/21',
  home: { area: 'Gekkoukan High', spot: 'Tennis Courts', slot: 'after', days: [1, 2, 4, 5],
          hint: 'After school on Mondays, Tuesdays, Thursdays and Fridays, at the tennis courts.' },
  approach: "Long after practice has ended, one girl is still on the far tennis court with a cart of balls, serving into an empty box and glaring at every one that clips the tape.",
  cast: { ryoko: 'Ryoko' },
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
          { s: 'solar', f: 'neutral', t: "I'm on my way home slowly." },
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
          { s: 'solar', f: 'neutral', t: "Start with one. You can work up to two." },
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

    { todo: 'Rank 4 (to be written).' },
    { todo: 'Rank 5 (to be written).' },
    { todo: 'Rank 6 (to be written).' },
    { todo: 'Rank 7 (to be written).' },
    { todo: 'Rank 8 (to be written).' },
    { todo: 'Rank 9 (to be written).' },
    { todo: 'Rank 10 (to be written).' }
  ]
});
