/* Secrets: hoax2. Format in femc-social.js above secrets().
   Source: Hoax (readers/hoax.html). The wrong-number group chat in person: Jihoon's crew (PARK JIHOON HATE CLUB, secrets/hoax.js)
   runs into the player at the Paulownia Mall arcade and is completely sure she's their Solar (Solar Kim), just being weird.
   Their in-jokes from the chat happen live (ice cream and hugs, Nana "ur son", be less obvious jihoon, remember who's
   really in 1st, the knockoff). Nobody works it out. Nothing here moves Hoax's plot.
   - Hidden place 'hx-hateclub': Go Out → Paulownia Mall, evenings, once she's in the wrong chat (stamp 'wrong-gc').
     Saturdays from late June (after the chat hears about the campaign, so Yang can come up), plus a run of late-January
     evenings so a late save still finds it before the year ends.
   - If Solar has met Jungwon (rank 1+), she can poke at the Jihoon/Jungwon rivalry; otherwise the crew explains him.
   - Ids: in person the crew are 'hxp-' (real names on the name tag, portraits by name: 'hxp-jihoon' → 'jihoon').
     'hx-' ids are their chat handles in hoax.js and stay that way. Jaehyuk has no portrait, so no face and two lines.
   Stamp 'hate-club' lives in achievements.js. */
FemcSocial.secrets({
  id: 'hoax2',
  cast: {
    'hxp-jihoon': 'Jihoon', 'hxp-cherry': 'Cherry', 'hxp-hyunsuk': 'Hyunsuk', 'hxp-asahi': 'Asahi',
    'hxp-junkyu': 'Junkyu', 'hxp-jaehyuk': 'Jaehyuk'
  },

  places: [
    // The crew finds "Solar." The arcade is theirs for one evening, and then it's the mall's again.
    { id: 'hx-hateclub', area: 'Paulownia Mall', title: 'An arcade that is too loud', label: 'A loud arcade',
      dates: ['6/27', '7/25', '8/29', '10/3', '11/14', '12/12', '1/16', '1/24', '1/26', '1/28', '1/30'], slot: 1,
      unlock: { stamps: ['wrong-gc'] },
      hint: 'the arcade is louder than it should be, and somebody inside keeps yelling your name.',
      place: 'Paulownia Mall · Arcade', stamp: 'hate-club', scene: [
      { n: "The arcade at Paulownia Mall was loud the way it always was in the evening, every cabinet shouting its own song over every other cabinet's song, the carpet printed with neon planets that had been walked flat years ago, the air thick with the particular smell of hot plastic and caramel corn and a hundred kids' worth of tokens warming in their pockets, and Solar had only come in because it was raining and the arcade was the shortest way to the station." },
      { n: "It was louder than that tonight. Under the cabinets there was a second noise, a knot of people all talking at once in a way that made it impossible to tell whether they were fighting or having the best night of their lives, and it was coming from the crane games by the back wall, and it stopped dead when she walked past." },
      { s: 'hxp-junkyu', f: 'surprised', t: "Sol?" },
      { s: 'hxp-junkyu', f: 'happy', t: "SOL! You came! Jihoon said you weren't answering, he said you were probably asleep with Nana on your face again!" },
      { n: "The boy who reached her first was small and brown-haired and moving at a speed that suggested he hadn't planned on stopping, and he hugged her around the middle before she could decide what to do with her hands, the way you'd hug somebody you hadn't seen in three whole hours." },
      { s: 'hxp-junkyu', f: 'happy', t: "Do you need some ice cream and hugs? I already did the hug. Jihoon has the ice cream money." },
      { n: "Behind him there were more of them, all in navy blazers from a school she didn't know, crowded around a crane game like it owed them money, and every one of them was looking at her like she was exactly who they'd been waiting for and also, somehow, late." },
      { s: 'hxp-cherry', f: 'serious', t: "You're late. You are never late. You're the one who yells at us for being late." },
      { n: "The girl who said it had blue eyes and her arms folded so tightly it looked structural, and she looked Solar up and down once, unhurried, the way a customs officer looks at a suitcase that's making a ticking noise." },
      { s: 'hxp-cherry', f: 'surprised', t: "And what are you wearing? Is that a costume? Did you lose a bet?" },
      { s: 'hxp-asahi', f: 'neutral', t: "She finally snapped. I called it. I said she'd crack before graduation and nobody took the bet." },
      { s: 'hxp-hyunsuk', f: 'neutral', t: "It's a uniform. Gekkoukan, it says so on the badge. She transferred to a whole other school and didn't tell us." },
      { s: 'hxp-hyunsuk', f: 'sad', t: "I'm actually hurt, Sol." },
      { n: "The last of them hadn't turned around at all. He was bent over the crane game with his forehead nearly on the glass and a paper cup of tokens in one hand, a car key on a lanyard swinging from his wrist, and he talked to her without looking, the way you talk to someone who has been in the room your whole life." },
      { s: 'hxp-jihoon', f: 'neutral', t: "Hi, Sol. Don't talk to me, I'm in the zone. I'm winning Nana a little brother." },
      { choose: [
        { t: "I think you have me confused with someone else.", notes: 0, then: [
          { s: 'hxp-asahi', f: 'happy', t: "Oh, she's doing the bit." },
          { s: 'hxp-asahi', f: 'happy', t: "She's doing the other Solar bit. In person. With a costume. Honestly? Commit to it. I respect it." },
          { s: 'hxp-cherry', f: 'serious', t: "The knockoff doesn't even live here. She lives by the sea with the haunted clocks." },
          { s: 'hxp-hyunsuk', f: 'neutral', t: "Which is exactly what the knockoff would say." },
          { n: "Nobody seemed to find any of this as alarming as Solar did, which was its own kind of answer." }
        ] },
        { t: "(Hug Junkyu back.)", notes: 0, then: [
          { n: "She hugged him back, because it seemed rude not to, and he made a small pleased noise into her shoulder and then pulled away, frowning, like a dog that has just been handed the wrong ball." },
          { s: 'hxp-junkyu', f: 'surprised', t: "You smell different. Did you change shampoo?" },
          { n: "Cherry leaned in and sniffed her hair with the gravity of a detective at a crime scene." },
          { s: 'hxp-cherry', f: 'serious', t: "...She did. Without consulting me." },
          { s: 'hxp-asahi', f: 'neutral', t: "Unforgivable. Honestly, Sol." }
        ] },
        { t: "Who's Nana?", notes: 0, then: [
          { n: "That got Jihoon to turn around." },
          { s: 'hxp-jihoon', f: 'surprised', t: "Your son? Your actual son? The dog who barks at my car every single morning?" },
          { s: 'hxp-hyunsuk', f: 'neutral', t: "Jihoon, he's literally not her son. He's a dog." },
          { s: 'hxp-jihoon', f: 'serious', t: "Sol. Look at me. Are you having a stroke. Blink twice." },
          { n: "She blinked once, mostly out of spite, and he looked so personally wounded by it that Asahi had to sit down on the end of the skee-ball ramp." }
        ] }
      ] },
      { n: "The thing in the crane game he wanted was a plush dog, brown, lopsided, one ear sewn on a little higher than the other, wedged nose-down in a pile of pastel rabbits like it had been trying to get away from them, and judging by the paper cup in his hand and the tower of empty ones stacked on top of the machine, he had been trying to rescue it for some time." },
      { s: 'hxp-hyunsuk', f: 'happy', t: "Forty tokens. I've been counting. It's for Nana, apparently." },
      { s: 'hxp-jihoon', f: 'serious', t: "It IS for Nana." },
      { s: 'hxp-hyunsuk', f: 'neutral', t: "Be less obvious, Jihoon." },
      { s: 'hxp-jihoon', f: 'serious', t: "Be less ugly, Hyunsuk." },
      { s: 'hxp-asahi', f: 'neutral', t: "Nana is a dog. Nana does not need a dog." },
      { n: "The claw came down, closed on the plush dog's ear, lifted it two whole inches into the air with what looked like real effort, and let go, and the dog dropped back into the rabbits exactly where it had started, and Jihoon made a sound like he'd been stabbed in a very personal place." },
      { n: "Cherry, apparently bored of watching him lose, hooked her arm through Solar's and steered her two machines over to a dance game with a scoreboard on top, where the same three letters sat in every slot from first to sixth. CHR. CHR. CHR. CHR. CHR. CHR." },
      { s: 'hxp-cherry', f: 'happy', t: "Remember who's really in first." },
      { n: "She said it like a line she'd been saying for years, and maybe she had, and she said it to Solar like Solar would know exactly what it meant, which was somehow worse than if it had been a threat." },
      { s: 'hxp-cherry', f: 'serious', t: "And don't even think about it. You know what happened last time." },
      { n: "Solar did not know what had happened last time. She decided, looking at Cherry's face, that she was better off not finding out." },
      { n: "Someone else came in out of the rain then, a boy in the same navy blazer with an umbrella folded very neatly under one arm and a folder held to his chest like it had been entrusted to him by the government, apologizing to the token machine as he edged past it." },
      { s: 'hxp-jaehyuk', f: 'sad', t: "Sorry I'm late. The committee meeting ran over. The president wanted to go through the budget again. Twice." },
      { s: 'hxp-jihoon', f: 'serious', t: "Of course he did. Yang would put the sun on an agenda if he could get somebody to second it." },
      { n: "He said the name the way some people step on a crack in the sidewalk, on purpose, with a little bit of satisfaction." },
      { ifRank: { jungwon: 1 }, then: [
        { n: "Yang. Solar thought, before she could stop herself, of a light left on in the student council room long after everyone else had gone home, a boy in a navy blazer under the bulletin board with a red pen, looking up at the door like he was expecting a vote. Something must have shown on her face, because Hyunsuk looked from her to Jihoon and back again like a man watching a tennis match he'd paid good money for." },
        { choose: [
          { t: "Did he eat dinner, at least?", notes: 0, then: [
            { n: "The whole corner went quiet, which in an arcade took real commitment." },
            { s: 'hxp-jihoon', f: 'surprised', t: "Did he... why would you care if he ATE?" },
            { s: 'hxp-cherry', f: 'surprised', t: "Oh my god." },
            { s: 'hxp-hyunsuk', f: 'happy', t: "She's worried about him. Jihoon. She's worried about him." },
            { n: "Jaehyuk, who was on the committee and therefore knew, looked down at his folder in a way that very clearly meant no." },
            { s: 'hxp-jihoon', f: 'serious', t: "He's your opponent, Sol. You're supposed to want him to starve." },
            { s: 'hxp-asahi', f: 'neutral', t: "That's not how elections work." },
            { s: 'hxp-junkyu', f: 'sad', t: "Somebody should bring him a croissant..." },
            { n: "Jihoon fed the machine another token with his jaw set, and the claw came down harder than it needed to, which Solar hadn't known a claw could do." }
          ] },
          { t: "He's not that bad.", notes: 0, then: [
            { s: 'hxp-jihoon', f: 'serious', t: "Take that back." },
            { s: 'hxp-asahi', f: 'happy', t: "This is the best night of my entire life." },
            { s: 'hxp-junkyu', f: 'happy', t: "He holds the door for me in the hallway! Every time!" },
            { s: 'hxp-jihoon', f: 'sad', t: "Traitors. I'm surrounded by traitors. In a mall." },
            { s: 'hxp-cherry', f: 'serious', t: "Sol. Blink twice if he has something on you." },
            { n: "She didn't blink at all, which Cherry seemed to take as a confession, and Jihoon seemed to take as a declaration of war, and Hyunsuk seemed to take as the best thing to happen to him all week." }
          ] }
        ] }
      ], else: [
        { s: 'solar', t: "Who's Yang?" },
        { s: 'hxp-asahi', f: 'happy', t: "She's still doing the bit. Incredible. Ten out of ten." },
        { s: 'hxp-hyunsuk', f: 'neutral', t: "Yang Jungwon. Student council president. Your sworn enemy. Dimples like craters, as you once put it in writing." },
        { s: 'hxp-jihoon', f: 'serious', t: "We don't say his name in this arcade." },
        { s: 'hxp-junkyu', f: 'neutral', t: "You said it first, though." },
        { s: 'hxp-jihoon', f: 'serious', t: "I'm allowed." }
      ] },
      { s: 'hxp-jaehyuk', f: 'happy', t: "...Good evening, Solar. You look very well rested." },
      { s: 'hxp-asahi', f: 'happy', t: "That's the scariest thing anyone's ever said to her." },
      { n: "It took Jihoon six more tries. On the sixth the claw caught the plush dog by its crooked ear and held on out of what looked like pure spite, and carried it all the way across, swaying, and dropped it down the chute, and the machine played a tinny little fanfare that nobody in the corner said anything over. He fished the dog out and shoved it at her without looking at her face." },
      { s: 'hxp-jihoon', f: 'neutral', t: "For Nana. Not for you. Don't make it weird." },
      { choose: [
        { t: "Thanks, Jihoon.", notes: 0, then: [
          { s: 'hxp-jihoon', f: 'surprised', t: "Since when do you say thanks?" },
          { n: "He looked at her then, properly, for the first time all night, and something went across his face too fast for her to read, like headlights across a ceiling, and then it was gone and he was shrugging it off the way you shrug off a draft." },
          { s: 'hxp-jihoon', f: 'neutral', t: "You're being so weird tonight. You always get weird when you're tired. Go to bed early for once in your life." }
        ] },
        { t: "Nana's going to destroy this by Monday.", notes: 0, then: [
          { s: 'hxp-jihoon', f: 'happy', t: "Yeah. That's the point. He loves the destroying part." },
          { s: 'hxp-jihoon', f: 'happy-2', t: "I'll win him another one. I'll win him a whole family." },
          { s: 'hxp-cherry', f: 'neutral', t: "With what tokens?" }
        ] },
        { t: "You could have just bought one.", notes: 0, then: [
          { s: 'hxp-asahi', f: 'neutral', t: "He's put forty-six tokens in that thing. I watched every one. It was beautiful." },
          { s: 'hxp-jihoon', f: 'serious', t: "That is not the POINT." },
          { s: 'hxp-hyunsuk', f: 'happy', t: "The point is being less obvious." },
          { s: 'hxp-jihoon', f: 'serious', t: "Hyunsuk, I will put you in the crane game." }
        ] }
      ] },
      { s: 'hxp-cherry', f: 'happy-2', t: "Photo booth. Now. It's tradition, and you're in the middle, because you're the reason we're even here." },
      { place: 'Paulownia Mall · Photo Booth' },
      { n: "There were seven of them in a booth built for two, which turned out to be possible if nobody valued their ribs. Junkyu ended up half on somebody's shoulders, Asahi ended up mostly outside the curtain, Jaehyuk held his folder flat over his head so it wouldn't bend, Hyunsuk got the spot next to Cherry and looked about as pleased about it as a boy can look while being elbowed in the ear, and they put Solar in the middle without discussing it, the way you put the candle in the middle of a cake." },
      { n: "The booth counted down in a bright cartoon voice. Three. Two. On one everybody yelled something different, and the flash went off white and hot right in her eyes, and then again, and again, and again." },
      { music: 'mystery' },
      { n: "When she could see again she was alone in the booth, the curtain hanging still, the bench warm on both sides like people had only just gotten up." },
      { n: "She stepped out. The arcade was just the arcade, every cabinet playing its own song over every other one the way they always did, and the crane game by the back wall was full of Jack Frost dolls grinning their identical grins, the same as it had been every time she'd walked past it since April. Nobody was standing at it. There was no tower of empty cups, no girl's initials on any scoreboard, nobody yelling her name like they'd been saying it their whole lives." },
      { n: "The photo strip slid out of the slot behind her, still warm. Four frames, seven faces in every one, mouths open, Junkyu a blur, Asahi half a forehead at the edge, and in the middle of all of them a girl in her uniform with her face, who everyone in the picture seemed very sure about. In the last frame they were all looking at the camera except Jihoon, who was looking at her." },
      { n: "The plush dog was still under her arm. Its ear was still crooked, and it smelled faintly of a car she had never been in, pine air freshener and old french fries, and she held onto it the whole way to the station like somebody might come back and ask for it." }
    ] }
  ]
});
