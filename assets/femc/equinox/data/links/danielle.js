/* Persona 3: Equinox · Danielle Marsh · XV The Devil. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 7/8: she came through on 7/6, but her arrival scene is story-act2 'eqx-tanabata', 7/7 evening, so
   the day after that; her home is the overpass above Iwatodai Station's ticket gates on Monday, Wednesday, Thursday and
   Saturday afternoons, so 7/8 itself). Ranks 2–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js.
   Shared memory: Solstice's Danielle link (the overpass, "the best seat"; the disposable camera; IWATODAI NEWS; the
   guesthouse ledger; the long route to wherever Jaehyun is; rank 10 "unspent") and the Runners epilogue. Fence (plan §0 rule
   7): her leverage stays unspent and unsaid; she shows she still has it and never says what it is. She is not redeemed, never
   warm for longer than a second.
   The hook: she watches who comes and goes. Here she keeps a list of who goes down the river street for supper, and she is
   the one person in town who won't go in (the striped photos, 7/7).
   Reads: ifEvent eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-danielle-list (Solar asks to see the list). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'danielle', name: 'Danielle Marsh', short: 'Danielle', arcana: 'Devil', numeral: 'XV', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, arrives: '7/6', starts: '7/7', lodging: 'guesthouse',
  home: { area: 'station', spot: 'The Overpass', slot: 'after', days: [1, 3, 4, 6],
          hint: 'Afternoons on the overpass above Iwatodai Station’s ticket gates. The best seat in town for watching who leaves.' },
  approach: "On the overpass above Iwatodai Station's ticket gates a girl in sunglasses is sitting on the rail with her ankles crossed and an iced coffee sweating beside her, photographing the crowd below one face at a time, and she lifts the coffee at you without lowering the phone.",
  ranks: [
    { after: '7/8', title: '1: the best seat, again', place: 'Iwatodai Station · Overpass', time: 'After School', music: 'mystery', scene: [
      { bg: 'iwatodai-station-overpass' },
      { n: "The overpass above Iwatodai Station was a long glass tube on legs, too hot by noon in summer, the glass greened at the edges and spotted with the ghosts of rain, and below it the ticket gates went *pon, pon, pon* all afternoon like a slow heartbeat, swallowing commuters and spitting them out the other side. Nobody stopped on it. It wasn't a place you stopped. It was a place you crossed." },
      { n: "Danielle had stopped on it. Of course she had." },
      { n: "She was sitting on the rail with her back against the glass and her ankles crossed, in big sunglasses and a borrowed Gekkoukan cardigan worn like a cape, an iced coffee from the konbini sweating a ring onto the steel beside her, and her phone up. She wasn't scrolling. She was photographing. One face at a time, down through the glass, with the small precise patience of somebody picking out fruit." },
      { s: 'danielle', f: 'happy', t: "Solar Lee. On the overpass. In her natural habitat, which is somewhere she shouldn't be. Hi." },
      { n: "She didn't lower the phone. She lifted the coffee." },
      { s: 'danielle', f: 'neutral', t: "Sit. It's still the best seat. It was the best seat last year and it's the best seat now. Some things are reliable." },
      { choose: [
        { t: "You remember last year.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "I remember every year. It's sort of my job. Somebody has to." },
          { s: 'danielle', f: 'happy', t: "You stood exactly there and told me you didn't want to be on my board. And then you were on my board. Three times. One of them was a really good angle." }
        ] },
        { t: "Still not my habitat.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Everywhere's your habitat. You're like a pigeon. You adapt. I say that with love. I say most things with love. It's how I get away with them." }
        ] },
        { t: "(Sit on the rail next to her.)", notes: 3, then: [
          { n: "She sat on the rail. The steel was hot through her skirt. Danielle glanced at her, sideways, over the top of the sunglasses, a quick look that took in the whole of her the way a scanner takes a page, and went back to the crowd." },
          { s: 'danielle', f: 'neutral', t: "Good posture. Bad shoes. Fine. You'll do." }
        ] }
      ] },
      { n: "Below them the gates went *pon, pon*. A train came in. Doors. People. A train went out. Danielle's thumb moved on the screen without her looking at it, *click*, *click*, a girl in a straw hat, a man with a fishing rod, a boy carrying a cake box with enormous care." },
      { s: 'danielle', f: 'neutral', t: "Here's what I've learned since I got here. Iwatodai has three trains people actually use. The seven-fourteen to the island, the one-ten everybody's grandma takes, and the five-fifty home. You could set your life by them. I have." },
      { s: 'danielle', f: 'neutral', t: "And the shrine steps get a runner at four-forty, every day except Tuesday. Not that I'm counting. I'm not counting. I just happen to be up here at four-forty and the steps happen to be visible from the east end." },
      { n: "She didn't say the runner's name. She didn't have to. She'd come through a hole in the world, and she'd found out which of the hundred and twelve steps Jaehyun stopped on to breathe within about a day and a half, and she wasn't going to say that either." },
      { choose: [
        { t: "Danielle.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "What? I said I'm not counting. I'm a girl on an overpass. Girls sit on overpasses. It's very European." }
        ] },
        { t: "Does he know you watch?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Everybody knows I watch. That's the trick. If everybody knows, nobody notices." },
          { n: "But she lowered the phone, for the first time, a little, and her mouth did something at one corner that wasn't a smile, and she looked at the east end of the overpass and not at Solar for a while." }
        ] },
        { t: "(Say nothing. Steal a sip of her coffee.)", notes: 3, then: [
          { n: "She took the coffee off the rail and drank from it. Danielle watched her do it with the bright, pleasant, fully loaded expression of someone adding a line item to a ledger." },
          { s: 'danielle', f: 'happy', t: "That's a hundred and forty yen. I'll put it on your tab. You have a tab now. Congratulations." }
        ] }
      ] },
      { n: "She talked for a while about home without being asked. The way people talked about her. *AI. Rehab. Cult.* Two thousand likes on the dorm-steps photo and climbing, and every comment more certain than the last that she'd finally lost it, and she read the best ones out in a newsreader's voice, delighted, and laughed at all of them." },
      { s: 'danielle', f: 'neutral', t: "You know what's funny? At home I know everything about everybody. Who's sleeping where. Who's pretending to be at the library. What everybody did last spring. It's the only currency I've got and I've got a lot of it." },
      { s: 'danielle', f: 'neutral', t: "And here nobody knows what anybody did. The night manager at the guesthouse doesn't know what I did. The konbini guy doesn't know. I could tell them and they'd go *ah, sou desu ka* and give me my change." },
      { s: 'danielle', f: 'happy', t: "I'm completely broke. In the only currency I've got. It's the most relaxing thing that's ever happened to me." },
      { n: "She tipped her head back against the glass and closed her eyes, and for about a second her face looked like a girl's face, nothing in it, nothing loaded, just tired and sunlit and young. Then she opened her eyes and it was gone, and the look was back, the old one, bright and pleasant, a hand of cards held close to the chest." },
      { s: 'danielle', f: 'neutral', t: "Mostly broke. I kept one. For emergencies. Don't worry about it." },
      { n: "She didn't say what. She never had. She knew one thing about Solar that Solar didn't. She'd carried it a long way already, and now she'd carried it through a hole in the world in a cardigan pocket with her lip gloss, and she still wasn't spending it. She just let you know it was there, warm, the way you'd let somebody see the outline of a key." },
      { choose: [
        { t: "Keep it. I'm not buying.", notes: 3, then: [
          { s: 'danielle', f: 'happy', t: "I know you're not. You never do. It's the most annoying thing about you." },
          { s: 'danielle', f: 'neutral', t: "...It's also the reason I keep it. If you ever tried to buy it I'd have to sell it. Professional ethics." }
        ] },
        { t: "One day you'll forget you have it.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "I don't forget anything, babe. That's the whole problem with me." }
        ] },
        { t: "(Don't react at all.)", notes: 3, then: [
          { n: "Solar didn't react. Didn't look, didn't ask, didn't shift on the rail. She watched the gates. And Danielle, beside her, after a while, made a small sound that might have been a laugh, very quiet, and something in the set of her shoulders said *fine. fine. respect*, which was as close as she came." }
        ] }
      ] },
      { place: 'Iwatodai Station · Overpass, East End', time: 'Evening', bg: 'iwatodai-station-overpass', music: 'eerie', soft: true },
      // BG: iwatodai-overpass-east-dusk — the far end of a glass station overpass at dusk, looking down over low rooftops toward a river and a narrow street lined with old houses, one lamp lit at a gate.
      { n: "At the east end, where the overpass looked out over the low roofs of the old town, you could see the river. And the river street. And, if you knew where to look, the boarding house gate, and the persimmon tree over the wall, and the lamp in the hall that was always lit." },
      { n: "Danielle didn't point her phone at it. Solar noticed that. She photographed everything else from up here, and when her eyes came round to the river street, the phone dipped, and stayed dipped, and came up again only when she'd looked past it." },
      { s: 'danielle', f: 'neutral', t: "I don't go there. In case you were going to invite me. Everyone invites me. It's very sweet. I don't go." },
      { s: 'solar', f: 'neutral', t: "Because of the photos." },
      { s: 'danielle', f: 'neutral', t: "I don't eat anywhere I can't get a decent picture of. It's a principle. I've had it for years. I've just never had to use it before." },
      { n: "She said it lightly. Her thumb, on the side of her phone, was pressing the volume button over and over, down, down, down, though nothing was playing." },
      { s: 'danielle', f: 'neutral', t: "But I watch who does go. I can't help it. It's what I do. From up here you can see the whole street at suppertime." },
      { s: 'danielle', f: 'neutral', t: "The old men from the pier at four. Six of them. Same six. Two of them came out on Tuesday walking like they'd been at sea for a year. The girls, your four, at six-thirty, holding hands across the street like kindergarten. Half your dorm on Mondays with the tin. Mark, twice this week, in the coat, which, I'm not saying anything about the coat." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'danielle', f: 'neutral', t: "And the boy. The round one, from the third year. Every night. Five fifty-five. In, and the gate shut behind him. I had him on the list every single night since I got here. I could've told you to the day how much weight he'd put on. I was going to put it in a caption. Something mean." },
        { n: "She stopped. She took the sunglasses off and folded them and held them in her lap, and looked at them." },
        { s: 'danielle', f: 'neutral', t: "...I never saw him come out. Not once. Not one night. I thought I just kept missing it." }
      ], else: [
        { s: 'danielle', f: 'neutral', t: "And the boy. The round one, from the third year, Suemitsu, with the stomach he's so proud of. Every night. Five fifty-five, on the dot. He goes in and the gate shuts behind him by itself." },
        { s: 'danielle', f: 'neutral', t: "I've had him on the list every single night since I got here. And here's my thing. Here's my little thing. I've never once seen him come out." },
        { s: 'danielle', f: 'happy', t: "I mean, obviously he does. He's in school. I've seen him at school. I just never catch it. He goes in, and the light's on, and then it's dark and I go home. Funny." }
      ] },
      { choose: [
        { t: "Show me the list.", notes: 3, flag: 'eqx-danielle-list', then: [
          { n: "Danielle looked at her for a long moment. Then she opened her notes app and turned the screen. Dates down the side, from the night she came. Times. Names where she had them, descriptions where she didn't: *pier guy, hat. pier guy, cane. the girls. HJ + KZ + SK + EC. mark (coat). tin (junpei + hyein). round boy.* Every row. Every night. A ledger." },
          { s: 'danielle', f: 'neutral', t: "You can look. You can't have it. Nobody gets my lists." },
          { n: "Solar read down the column of *round boy*, *round boy*, *round boy*, and the ink of the screen was cold and blue and very neat, and she couldn't have said why it made the back of her neck go tight, a long column of the same two words like a row of the same stitch." }
        ] },
        { t: "Why are you telling me this?", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Because you're the only person here who'd hear it as information and not as me being a bitch." },
          { s: 'danielle', f: 'happy', t: "It's also me being a bitch. It can be both. Most things are." }
        ] },
        { t: "Maybe you could stop watching. Just here.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Maybe. Maybe I could. Here." },
          { s: 'danielle', f: 'neutral', t: "...You know what, I've thought about it. Stopping. I think about it up here a lot. It'd be so easy. I'd just be a girl on an overpass with a coffee." },
          { n: "She lifted the phone. *Click.* A woman going through the gates below with a bag of groceries. She didn't seem to know she'd done it." }
        ] }
      ] },
      { n: "The five-fifty home came in under them, and went out. The gates went *pon, pon, pon*. The lamp at the boarding house gate came on all by itself, the way it did every evening, a small yellow point at the end of the river street, and Danielle looked at it without lifting her phone, and Solar watched her not lift it, for a long time." },
      { s: 'danielle', f: 'neutral', t: "Walk me back? Rule of twos. Mitsuru's very serious about it. I'm very serious about Mitsuru." },
      { n: "They went down the stairs together, and at the bottom, on the street, Danielle took Solar's arm, lightly, the way you'd take the arm of someone at a party you didn't fully trust and didn't want to lose in the crowd, and steered them the long way, round by the shrine, away from the river, without saying that was what she was doing." }
    ] }
  ]
});
