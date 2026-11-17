/* Persona 3: Equinox · Danielle Marsh · XV The Devil. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 (after 7/8: she came through on 7/6, but her arrival scene is story-act2 'eqx-tanabata', 7/7 evening, so
   the day after that; her home is the overpass above Iwatodai Station's ticket gates on Monday, Wednesday, Thursday and
   Saturday afternoons, so 7/8 itself). Ranks 4–10 still to write. Shape: the stub fields from
   assets/femc/equinox/data/links.js.
   Shared memory: Solstice's Danielle link (the overpass, "the best seat"; the disposable camera; IWATODAI NEWS; the
   guesthouse ledger; the long route to wherever Jaehyun is; rank 10 "unspent") and the Runners epilogue. Fence (plan §0 rule
   7): her leverage stays unspent and unsaid; she shows she still has it and never says what it is. She is not redeemed, never
   warm for longer than a second.
   The hook: she watches who comes and goes. Here she keeps a list of who goes down the river street for supper, and she is
   the one person in town who won't go in (the striped photos, 7/7).
   Reads: ifEvent eqx-last-grain (7/27 morning).
   Flags this file sets: eqx-danielle-list (Solar asks to see the list). Nothing reads it yet.
   Written: ranks 1–3 (Nov 16). Ranks 4–10 still to write.
   Rank 2 (after 8/19, summer break, a Thursday; the overpass by day, then the Port Island fishing pier, then the
   overpass's east end at dusk): Solar's tab (¥140 a coffee; ¥420 → ¥560); the festival arrows mean "went down the river
   street"; everyone goes now (flower-shop lady, the laid-off salaryman, the station-piano grandma, Junpei, Mark); ifRank
   jaehyun 4 (she stopped watching the steps) else (his 4:40); the seventh pier man (red cap) who never went in, gone since
   8/12 (story-act3's empty pier and upside-down saucer): "the one without an arrow is the one who's gone" (her list may be
   backwards; the true rule stays hidden). The saucer still clean on the last bollard. She starts a new note: "red cap.
   said no." Flag: eqx-danielle-saucer (Solar lifts it: a dry ring of flour underneath; Danielle: "put it back exactly").
   Rank 3 (after 10/7, a Thursday; post-equinox; the overpass floor, then the east end at dusk): she told Solar on 9/11 and
   it helped nobody; ifEvent eqx-1122 (she saw the mothers come back, how they walk); she skipped the moon-viewing and
   filmed Moonlight Bridge from the east end on 9/23 (12:40 of video, never watched past 2:10). Choice: watch it
   (eqx-danielle-video: forty-one lamps become sixty-plus as the bridge lengthens; at ~4:00 someone hums the lullaby, three
   up two down, right at her shoulder; she never heard it) | delete it (eqx-danielle-deleted) | send it to Mitsuru
   (eqx-danielle-sent). East end: ifEvent eqx-1221 (the lamp out, "Lamp, off.") else ifEvent eqx-empty-chair (nobody
   goes in; "Lamp, on.") else the three fathers go in at six, Mrs. Oka holds their hands at the gate. Her ask (§9 Runners,
   her version: "tell me I can stay broke"; the kept card shown as "the one I kept", never named): tally asks.danielle
   yes (+cakes) | hidden "Stay. Please." eqx-asked-danielle (+asked, +cakes, asks.danielle yes) | no | choose (+choose).
   The tab (¥700, "keep coming up here till you pay it off") is the keep-her hint. Nothing reads the new flags yet. */
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
    ] },
    { after: '8/19', title: '2: the seventh', place: 'Iwatodai Station · Overpass', time: 'Daytime', music: 'mystery', scene: [
      { bg: 'iwatodai-station-overpass' },
      { n: "In August the overpass was a greenhouse. The sun stood on the glass roof all afternoon and the heat collected under it, thick and still, with nowhere to go, and the air inside smelled of warm dust and hot steel and the sweetish plastic of the rubber matting, and the few people who crossed did it fast, heads down, as if they were walking through a sauna in their clothes." },
      { n: "Below, summer break had slowed the gates. *Pon. Pon.* Fewer commuters, more children, families with coolers and folding chairs heading for the beach line, a girl in a yukata a week too late for the festival, carrying her sandals in her hand." },
      { n: "Danielle was on the rail. Of course she was. She'd moved to the shady side, under the one strip of roof somebody had painted white, and she had a paper fan from the festival in one hand, pink, with a cartoon goldfish on it, and her phone in the other, and two iced coffees sweating on the steel beside her. Two. She'd been expecting company." },
      { s: 'danielle', f: 'neutral', t: "You're late. It's fine. The ice is still alive. Barely. Like everyone in this town." },
      { n: "She held one out without looking away from the gates." },
      { s: 'danielle', f: 'happy', t: "A hundred and forty. On your tab. Your tab is getting very healthy. I'm proud of it. It's the only thing in this town I'm proud of." },
      { choose: [
        { t: "How much do I owe you now?", notes: 2, then: [
          { n: "Danielle didn't even have to check. That was the thing. She didn't open a note or scroll back. She just knew, the way she knew the seven-fourteen." },
          { s: 'danielle', f: 'neutral', t: "Four hundred and twenty. Three coffees. I don't charge interest. I'm not a monster. I charge in other ways." }
        ] },
        { t: "(Take it and clink it against hers.)", notes: 3, then: [
          { n: "She clinked her cup against Danielle's. Plastic on plastic, a dull little *tok*, nothing. Danielle looked at the two cups touching for a second longer than she needed to, over the top of her sunglasses." },
          { s: 'danielle', f: 'neutral', t: "Cheers. To nothing. I'm not toasting anything. Don't read into it." }
        ] },
        { t: "You bought two. You were waiting for me.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "I was waiting for *someone*. You happened to be the one who came. If the konbini guy had come up here he'd be holding that coffee right now and we'd be having a very different conversation." },
          { n: "She fanned herself with the goldfish. She didn't look at Solar at all. Her ears had gone faintly pink under her hair, which might have been the heat." }
        ] }
      ] },
      { n: "She'd been at the festival. Not in it. Solar had seen her on the fourteenth outside the torii, under the lamppost, with her phone, and the list on the screen, and the arrows." },
      { s: 'solar', f: 'neutral', t: "The arrows on your list. At the festival. They all pointed the same way." },
      { n: "Danielle stopped fanning." },
      { s: 'danielle', f: 'neutral', t: "You looked. Rude. Good, though. Good eyes." },
      { s: 'danielle', f: 'neutral', t: "Toward the river. They point toward the river. That's all an arrow means on my list. *Went down the river street that night.* I'm not being artistic. I just ran out of ways to write it." },
      { n: "She turned the phone round and let Solar see it, just for a second, the way she'd let her see it in July. The list had grown. It had grown the way a list grows when somebody is writing it every single night: the column of dates down the left side longer than the screen, and the arrows down the right, small and neat and black, so many of them now that they'd stopped being arrows and become a texture, like hatching in a drawing, like rain." },
      { s: 'danielle', f: 'neutral', t: "Everyone goes now. It used to be the pier guys and the girls and the Monday tin. Now it's the flower-shop lady. The salaryman from the third carriage of the seven-fourteen who got laid off and still rides it. The grandma from the station piano with the little dinosaur boy. Your senpai with the hat and the betting book, twice. Mark, every other night. Mark always." },
      { ifRank: { jaehyun: 4 }, then: [
        { s: 'danielle', f: 'neutral', t: "Not your brother, though. I don't do the steps any more, before you ask. He's got a face when he's being looked at. I didn't like being the reason for it." },
        { n: "She said it fast, to the gates, and moved on before it could be a thing anyone had heard." }
      ], else: [
        { s: 'danielle', f: 'neutral', t: "Not your brother, though. He runs at four-forty and he goes home. Every day. He's the most boring man alive. I love that for him." }
      ] },
      { n: "Then she scrolled up. A long way. Back past the arrows to the top, to the first week of July, the first nights she'd ever stood up here, and put her finger on a line and held the screen out again." },
      { n: "*pier guys (6). +1 on the end, doesn't go.*" },
      { s: 'danielle', f: 'neutral', t: "I told you six. Six pier guys. That's what I said in July. I lied, a bit. Not lied. I simplified. There were seven." },
      { s: 'danielle', f: 'neutral', t: "Six of them went in for supper at four. Every day. Same six. And there was one more who didn't. Skinny old guy with a red cap. He just stayed out on the very end of the pier with his rod while the others went, and when they came back up the street at nine all heavy and slow he'd still be out there. In the dark. I could see the end of his cigarette from the east end. Like a little light at the end of a very long table." },
      { s: 'danielle', f: 'neutral', t: "I didn't put an arrow by him. Not once. Every single night, no arrow." },
      { s: 'danielle', f: 'serious', t: "You saw the pier. When we got off the boat. On the twelfth." },
      { n: "Solar had. Two in the afternoon, the heat coming off the concrete like something alive, and the pier empty all the way to the end. No rods, no stools. A saucer on the last bollard, upside down." },
      { s: 'danielle', f: 'serious', t: "I keep doing the maths. I'm good at maths. It's not even hard maths. Everyone with an arrow's still here. They're all fine. They're getting *fat*, Solar. They're getting fat and happy and slow." },
      { s: 'danielle', f: 'serious', t: "And the one without an arrow is the one who's gone." },
      { n: "She put the phone face down on the rail. Her hand stayed on it." },
      { s: 'danielle', f: 'neutral', t: "So either my list is backwards. Or I don't understand what it's a list of." },
      { s: 'danielle', f: 'neutral', t: "...I always understand what my lists are of. That's the whole point of me." },
      { choose: [
        { t: "Maybe he just stopped fishing.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Maybe. Maybe he went to live with his daughter in Nagoya. Maybe he took up golf. I've thought of eleven nice reasons. I wrote them down. That's my twelfth list." },
          { s: 'danielle', f: 'neutral', t: "None of them have a saucer in them." }
        ] },
        { t: "Have you told anyone else?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Who? Mitsuru? Mitsuru would make it a whiteboard. Then it's a fact. Then it's a fact *I* found. I know what happens to people who find facts. I've been the person who finds facts my whole life." },
          { s: 'danielle', f: 'neutral', t: "You're not anyone. You're you. It's different. Don't let it go to your head." }
        ] },
        { t: "Show me.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Obviously. Why do you think I bought two coffees. Nobody buys two coffees to sit still." }
        ] }
      ] },
      { n: "She slid off the rail, and picked up her cup, and her little white bag, and the goldfish fan, and pushed her sunglasses up into her hair and down again, the way some people crack their knuckles." },
      { s: 'danielle', f: 'neutral', t: "Come on, then. But I'm not going on the end. You can go on the end. I'm going to stand somewhere with good light and judge you." },

      { place: 'Port Island · Fishing Pier', time: 'Afternoon', bg: 'port-island-pier', music: 'badfeeling', soft: true },
      // BG: portisland-fishing-pier-afternoon — a long empty concrete fishing pier on Port Island on a hot August afternoon, rusted bollards, a forgotten bucket, the bay flat and white with glare, a small white saucer upside down on the last bollard.
      { n: "The pier was hotter than the overpass. There was nothing on it to make shade. The concrete went out a long way into the bay, white with glare and streaked with old fish scales gone to glitter, and the bollards stood along it at their even intervals, iron, crusted with rust like brown sugar, and the water on either side was flat and bright and slapping softly at the pilings with a sound like someone patting a baby's back." },
      { n: "Nobody was fishing. Nobody had been fishing for a week. A plastic bucket had blown against the railing halfway out and stayed there. The gulls were standing in a row along the rail facing out to sea, all of them, the same way, not making a sound." },
      { n: "Danielle stopped at the land end, as she'd said, in the one patch of shade under the harbor office's awning, and lifted her phone, and didn't photograph anything. She pointed with her chin." },
      { n: "Solar walked out. It was a long way. Her footsteps went out over the water and came back off it, flat. At the end of the pier the last bollard was taller than the others, older, and on its flat iron top, in the full sun, sat a small white saucer, upside down, the kind you'd put under a teacup." },
      { n: "It hadn't moved. In a week of sea wind and gulls it hadn't moved one centimeter. There wasn't a bird dropping on it. There wasn't a speck of salt on it. It was perfectly, domestically clean, like something just set down from a drying rack." },
      { choose: [
        { t: "(Lift the saucer.)", notes: 2, flag: 'eqx-danielle-saucer', then: [
          { n: "She lifted it. It came up easily, light, ordinary china, warm from the sun. Underneath it, on the iron, was a ring of white powder, perfectly round, the exact size of the saucer's foot, dry and fine and undisturbed, in a wind that was lifting the hair off her neck." },
          { n: "Not salt. Salt glittered. This didn't glitter. It just lay there, matte, soft, like the dust you'd find on the inside of a bread bin." },
          { n: "From the land end, Danielle's voice came out along the pier, not loud, very clear." },
          { s: 'danielle', f: 'serious', t: "Put it back. Put it back exactly. Exactly how it was." },
          { n: "She put it back. Exactly. The ring disappeared under the rim as if it had never been there, and she found her hand was shaking, a little, and she put it in her pocket so Danielle wouldn't see, and Danielle, who saw everything, saw." }
        ] },
        { t: "(Leave it exactly as it is.)", notes: 3, then: [
          { n: "She left it. She stood beside it with her hands at her sides for a while and looked at it, and at the bay, and at the gulls on the rail, who were all looking at the bay too, and found she didn't want to be the one to move anything out here. Not even a saucer. Especially not a saucer." }
        ] },
        { t: "(Turn round and look back at Danielle instead.)", notes: 3, then: [
          { n: "She turned her back on it and looked down the whole length of the pier to the land end. Danielle was there in the strip of shade, very small, white sundress, sunglasses, phone half up, half down. Watching her. Not the saucer. Her." },
          { n: "From this far away Danielle looked like what she was: a girl on her own at the end of something, keeping an eye on the only other person there." }
        ] }
      ] },
      { n: "When she walked back, Danielle had sat down. On the warm concrete, in the shade, with her legs out in front of her and her back against the harbor office wall, and the fan going, and the phone face down in her lap. She held out the second half of a coffee she'd bought somewhere on the way that Solar hadn't seen her buy." },
      { s: 'danielle', f: 'neutral', t: "Sit. Five hundred and sixty. I'm rounding up for emotional labor." },
      { n: "Solar sat. The wall was warm through her shirt. The gulls on the rail had all turned their heads and were looking at the two of them now, every one, without blinking." },
      { s: 'danielle', f: 'neutral', t: "Can I tell you something for free? That'll be twice in my life. Make a note." },
      { s: 'danielle', f: 'neutral', t: "At home I always knew what everyone was going to do. That's what knowing things is for. You know what someone did, you know what they'll do, you know what they'll pay so you don't say. It's very simple. It's math. Everybody's a little sum." },
      { s: 'danielle', f: 'serious', t: "I don't know what that old man did. I don't know what anybody here's going to do. I don't know what *she* wants. Everyone keeps saying *she's so nice* and I keep thinking, nice isn't a want. Nice is how you ask for it." },
      { s: 'danielle', f: 'neutral', t: "...I've never been scared of not knowing something before. I thought it'd feel like being broke. It doesn't. It feels like being little." },
      { n: "She didn't look at Solar when she said it. She looked at the end of the pier, where the saucer was too small to see from here, and her thumb found the volume button on the side of her phone and pressed it, down, down, down, though nothing was playing." },
      { choose: [
        { t: "(Lean your head against her shoulder.)", notes: 3, then: [
          { n: "She leaned her head against Danielle's shoulder. Danielle went stiff all over, every muscle, like a cat picked up by someone it hadn't decided about. Then, after a while, about one gull's worth of while, she didn't." },
          { s: 'danielle', f: 'neutral', t: "This is going on your tab too. This is extremely expensive. You have no idea." },
          { n: "She didn't move her shoulder." }
        ] },
        { t: "You're not little. You're the only one who's been counting.", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Counting's what little kids do. *One, two, three, I can see you.* Hide and seek." },
          { s: 'danielle', f: 'neutral', t: "...The counting part's never the scary part, though. The scary part's when you open your eyes." }
        ] },
        { t: "Then stop counting. For one afternoon.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "Okay. Fine. Starting now." },
          { n: "She lasted about forty seconds. Then a man came along the harbor road with a fishing rod over his shoulder, and her phone came up, and she photographed him, *click*, and lowered it, and looked at the picture, and Solar saw her look at the rod for a long time, and not say anything, and not delete it." }
        ] }
      ] },
      { n: "They went back on the five-fifty, which was very Danielle, and in the carriage she sat by the window and Solar sat on the aisle and neither of them said much. At Iwatodai, going up the stairs to the overpass, Danielle took her arm, lightly, the way she had in July, the party grip, and on the overpass she stopped at the east end, where you could see the river street, and the lamp at the boarding house gate already on in the daylight, a small yellow point." },
      { n: "On the street below it, the people were going in. Slowly, in ones and twos, in the long gold light. Danielle watched them without lifting her phone. She didn't write anyone down. Solar watched her not write them down for a long time." },
      { s: 'danielle', f: 'neutral', t: "Thursday's a light night. Thursdays only about thirty go." },
      { n: "Then she let go of Solar's arm, and took out the phone, and with her face perfectly empty typed something, one line, at the top of a brand-new note with no title, and turned it so Solar could see." },
      { n: "*red cap. said no.*" },
      { s: 'danielle', f: 'neutral', t: "Just him. Just so somebody's writing him down. Don't make it a whole thing." },
      { n: "She put the phone away, and took Solar's arm again, and walked them the long way home round by the shrine, away from the river, without saying that was what she was doing." }
    ] },
    { after: '10/7', title: '3: forty-one lamps', place: 'Iwatodai Station · Overpass', time: 'After School', music: 'mystery', scene: [
      { bg: 'iwatodai-station-overpass' },
      { n: "October had got into the glass. The overpass that had been a greenhouse in August was a cold box now in the afternoons, the sun coming in low and white and not warming anything, the rubber matting gritty with the first dead leaves blown up the stairs, and the gates below went *pon, pon* for people in jackets with their collars turned up and their hands in their pockets, walking fast." },
      { n: "Danielle wasn't on the rail." },
      { n: "Solar looked twice. The rail on the shady side, the painted strip of roof, the place where the coffee always sweated its ring. Empty. Then she saw her: further along, near the east end, sitting on the floor. On the gritty matting, with her back against the glass and her knees up and her arms round them, in a cardigan that wasn't hers, a Gekkoukan one again, buttoned wrong. Facing away from the river. Facing the wall." },
      { n: "There was no coffee. Her phone was on the floor beside her, face down. Solar had never once seen it face down on its own. It always had a hand on it." },
      { n: "Danielle looked up at her. She didn't have her sunglasses on. Without them, in that flat white light, her face had nothing arranged on it, and the skin under her eyes was the color of a bruise a week old." },
      { s: 'danielle', f: 'neutral', t: "Hi. Don't. I know. I look like a found-footage movie. Sit down, you're blocking my wall." },
      { choose: [
        { t: "(Sit down next to her on the floor.)", notes: 3, then: [
          { n: "She sat down on the matting beside her, back to the glass, knees up, the same shape. The cold came through the glass into her shoulder blades. Danielle didn't say anything. After a while she shifted, about a centimeter, so their arms touched." }
        ] },
        { t: "I'll get coffees. Two.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "No. Stay. I mean. Sit. I don't want one. I don't want to drink anything anybody in this town made." },
          { n: "She heard herself say it, and looked at her own knees, and laughed once, not a real laugh, a breath with a shape to it." },
          { s: 'danielle', f: 'neutral', t: "Listen to me. *I don't want to drink anything anybody in this town made.* I sound like your senpai with the beanie on a bad day." }
        ] },
        { t: "When did you last sleep?", notes: 3, then: [
          { s: 'danielle', f: 'neutral', t: "Define sleep. I lay down. My eyes did a thing. There was a ceiling. I'm counting it." },
          { s: 'danielle', f: 'neutral', t: "...Tuesday. Before that the twenty-second." }
        ] }
      ] },
      { s: 'danielle', f: 'neutral', t: "I told you. On the eleventh. Outside the window, across the street from that table, with everybody singing. I told you your mothers weren't on my list." },
      { s: 'danielle', f: 'neutral', t: "I wasn't being a bitch. For once. That was the one time in my entire life I said a thing to somebody purely as information. And it didn't help one single person. It didn't help anybody at all." },
      { n: "She said it very evenly. Her hands, round her knees, were holding each other by the wrists so hard the knuckles had gone yellow-white." },
      { ifEvent: 'eqx-1122', then: [
        { s: 'danielle', f: 'neutral', t: "And I know they came back. I know. I watched them come back, one at a time, with blankets on, like they'd been at sea. I watched how they walk now." },
        { s: 'danielle', f: 'neutral', t: "Don't tell me they came back like it's a happy ending. I've seen how your mom holds her back." }
      ] },
      { choose: [
        { t: "It wasn't your job to stop it.", notes: 2, then: [
          { s: 'danielle', f: 'neutral', t: "I know it wasn't my *job*. Nothing's my job. I'm a girl with a phone. That's the joke. I've been telling it for years and it was funny right up until it was true." }
        ] },
        { t: "It helped me. I knew.", notes: 3, then: [
          { n: "Danielle turned her head and looked at her, close, sideways, the scanner look, reading her line by line for the lie. She didn't find one. Her mouth went flat and tight, the way a mouth goes when it's stopping something." },
          { s: 'danielle', f: 'neutral', t: "...Knowing isn't the same as helping. I'm the world's leading expert in that. Trust me." }
        ] },
        { t: "(Don't argue. Hold her wrist.)", notes: 3, then: [
          { n: "She didn't argue. She reached over and put her hand on Danielle's two hands where they gripped each other, and held on, and didn't say anything. Danielle let her. That was the most frightening thing she'd done all year, Solar thought; she just let her." }
        ] }
      ] },

      { n: "Danielle picked up the phone off the floor. She turned it over. She didn't unlock it. She held it in both hands like a hot dish." },
      { s: 'danielle', f: 'neutral', t: "I didn't go. On the twenty-third. To the moon thing. She made a hundred dango, I heard. A hundred. Everybody kept saying it like it was charming." },
      { s: 'danielle', f: 'neutral', t: "So I came up here. To the east end. Because you can see the bridge from here if you know where to look. Way down the river, past the bend, a little string of lamps. And I thought, I'll watch them walk home. I'll count them over. Like I count everybody. That's what I do." },
      { s: 'danielle', f: 'serious', t: "I filmed it." },
      { n: "She let that sit." },
      { s: 'danielle', f: 'serious', t: "Twelve minutes and forty seconds. From before the red to after. It's all zoomed in, you can't see people, you can't see anything really, it's just lamps and the moon and a lot of shaking because my hands were." },
      { s: 'danielle', f: 'neutral', t: "I haven't watched it. I've watched every single thing I've ever filmed. I've watched things I filmed at parties a hundred times to see who was standing next to who. I haven't watched this." },
      { s: 'danielle', f: 'neutral', t: "...I tried once. Last night. I got to two minutes ten and I turned it off and put it under my pillow and lay on it like it was going to get out." },
      { choose: [
        { t: "(Watch it with her.)", notes: 3, flag: 'eqx-danielle-video', then: [
          { n: "Danielle looked at her for a long time. Then she unlocked the phone, and found it, and held it between them, one earbud for each of them, the wire hanging in a loop between their heads like a skipping rope." },
          // CG: eqx-danielle-video — two girls sitting on the floor of a glass station overpass on a cold October afternoon, shoulder to shoulder, sharing one pair of earbuds over a single phone whose screen glows red, the low sun behind them on the glass.
          { n: "The east end at dusk on the twenty-third. Her own breathing, close. The river street at the bottom of the frame, blurred. Then the camera swung and zoomed and the picture went soft and grainy and settled on it: the bridge, far down the river, a thin dark line with its lamps coming on, one by one, a string of small gold beads." },
          { n: "Danielle's voice on the video, under her breath, counting. *Thirty-eight. Thirty-nine. Forty. Forty-one.* Forty-one lamps. Then the moon came up out of the sea beyond the bridge, enormous, and red. Not orange. Red, the red of the inside of a mouth. And the light went." },
          { n: "Two minutes ten. On the video the whole picture flushed red at once, as if someone had laid a hand over the lens, and the gates below stopped going *pon*, and the overpass went silent around the phone, the silence of a hall full of coffins. Danielle beside her on the floor went rigid. She didn't stop it. Her hand was on Solar's knee and it was squeezing." },
          { n: "On the screen the lamps on the bridge kept coming. Danielle's voice, on the video, still counting, faster and thinner. *Forty-four. Forty-six. Fifty. That's not. Fifty-three.* The bridge was getting longer. It was laying itself out across the water, lamp after lamp after lamp, a long thin table being set for more and more people." },
          { n: "And then, at four minutes and some seconds, under Danielle's counting, closer than her counting, close to the microphone, as close as someone standing right at her shoulder on the overpass with their mouth by her ear, somebody started to hum." },
          { n: "Three notes up. Two down. A lullaby. Slow, warm, perfectly in tune, the way a mother hums over a cot when the child's nearly gone." },
          { n: "On the video Danielle hadn't heard it. You could tell. Her counting didn't change. *Sixty-one. Sixty-two.* She'd been alone on the overpass in the red with her phone up and something leaning in at her shoulder humming her to sleep, and she'd been counting lamps." },
          { n: "The real Danielle, on the floor, took the earbud out. Very carefully. She wound the wire round her finger. Her face was white to the lips and perfectly calm." },
          { s: 'danielle', f: 'serious', t: "...Okay. So that's what was at two-ten." },
          { s: 'danielle', f: 'neutral', t: "That's fine. That's fine. Now I know. I always feel better when I know." },
          { n: "She didn't look better. She looked like somebody who'd turned round in an empty house and found a chair pulled out that she hadn't pulled out." }
        ] },
        { t: "Delete it. You don't owe it anything.", notes: 2, flag: 'eqx-danielle-deleted', then: [
          { n: "Danielle looked at the phone for a long time. Then she unlocked it, and found it, and held her thumb over the little bin for so long that the screen dimmed, and she had to touch it awake, and held it again." },
          { s: 'danielle', f: 'neutral', t: "It's the only evidence. Of anything. In the whole town. Everything else gets washed." },
          { n: "She pressed it. *Delete this video?* She pressed it again. Then she went to the folder where deleted things went, and deleted it from there too, the way you'd go back and check a stove you know you turned off, and locked the phone, and put it face down on the matting, and took her hand off it." },
          { s: 'danielle', f: 'neutral', t: "...Second thing you've ever seen me delete. Don't tell anybody. I have a reputation." }
        ] },
        { t: "Send it to Mitsuru. She should have it.", notes: 3, flag: 'eqx-danielle-sent', then: [
          { s: 'danielle', f: 'neutral', t: "Mitsuru." },
          { s: 'danielle', f: 'neutral', t: "...Yeah. Okay. She's the only one in this town who'd watch it all the way through and then write it on a whiteboard in red and not cry until she was alone." },
          { n: "She sent it. The little bar went across, slow, on the one weak bar of signal, and filled, and the phone made its small sent sound, and Danielle looked at the screen until it went dark." },
          { s: 'danielle', f: 'neutral', t: "First time I've ever given anybody anything for free. Third, technically. You've had two. Don't let it go to your heads." }
        ] }
      ] },

      { place: 'Iwatodai Station · Overpass, East End', time: 'Evening', bg: 'iwatodai-station-overpass', music: 'eerie', soft: true },
      // BG: iwatodai-overpass-east-dusk — the far end of a glass station overpass at dusk, looking down over low rooftops toward a river and a narrow street lined with old houses, one lamp lit at a gate.
      { n: "The sun went down while they sat there. It went fast, the way it did now, and the glass went from white to gold to gray, and the cold came up through the floor, and at some point Danielle got up without saying anything and went to the east end and stood at the glass with her arms folded, looking down at the river street, and Solar went and stood beside her." },
      { ifEvent: 'eqx-1221', then: [
        { n: "The lamp at the boarding house gate was out. The whole house was dark, every window, the persimmon tree a black shape over the wall, and the street in front of it was empty all the way to the river." },
        { s: 'danielle', f: 'neutral', t: "First night it's been out since I got here, that was. The twenty-first. I stood here till one in the morning waiting for it to come back on. I don't know what I'd have done if it had." },
        { s: 'danielle', f: 'neutral', t: "I still write it down. *Lamp, off.* Every night. It's the only name left on the list." }
      ], else: [
      { n: "The lamp at the boarding house gate was lit. Of course it was. It was always lit." },
      { ifEvent: 'eqx-empty-chair', then: [
        { s: 'danielle', f: 'neutral', t: "Nobody goes in now. Not since they moved your dads out. Even the pier guys go home. She stands at the gate at six with her basket and says good evening to everybody who walks past, and everybody says good evening back, and nobody stops." },
        { s: 'danielle', f: 'neutral', t: "And the lamp's still on. Every night. For nobody. I've started writing the lamp down. *Lamp, on.* It's the only name left on the list." }
      ], else: [
        { s: 'danielle', f: 'neutral', t: "Three men go in at six. Your dad, the quiet one, and Mr. Kim. They come out at nine to look at the street and go back in. She walks them to the gate. She holds their hands at the gate, one at a time, with the gloves on, and they let her." },
        { s: 'danielle', f: 'neutral', t: "I've written them down every night since the twenty-fourth. With arrows. I didn't want to. I'm sorry. That's not information. That's just me being sorry. I've never been sorry on a list before." }
      ] }
      ] },
      { n: "Danielle unfolded her arms. She put one hand flat on the glass, the way you'd put a hand on the side of an aquarium, and looked at her own fingers against the dark." },
      { s: 'danielle', f: 'neutral', t: "Here's my thing. My little thing. You want my little thing?" },
      { s: 'danielle', f: 'neutral', t: "I've been the girl who knows things since I was twelve. It's the only thing I'm good at. And it works, at home. It's *currency*. You know a thing, you've got a thing. People are nice to you because of what's in your pocket. I've had a pocket full my whole life." },
      { s: 'danielle', f: 'serious', t: "And here I knew. I knew before anyone. I had it on a list in July. And it bought nothing. It bought nobody anything. It just sat there being true." },
      { s: 'danielle', f: 'neutral', t: "And I'm so tired, Solar. I'm so tired of being her." },
      { n: "She took her hand off the glass. On it, in the cold, was a print of her palm, fogged, five fingers, already fading at the edges." },
      { s: 'danielle', f: 'neutral', t: "If I go home I go back to being her. I walk off the plane and I've got my pocket and everybody's sums and the one I kept. Waiting. Exactly where I left it. I'll have to decide what to do with it. Someday. I'll have to *be* the girl who decides." },
      { s: 'danielle', f: 'neutral', t: "Here I'm broke. Here I'm a girl on an overpass with no coffee. Here nobody pays me anything and I don't have to decide anything and it's horrible and it's the most I've ever liked myself." },
      { n: "She turned. Her face in the gray light had nothing on it. No angle. No bright pleasant loaded look. Just a girl, tired, with her lip gloss worn off and a cardigan buttoned wrong, asking." },
      { s: 'danielle', f: 'neutral', t: "Tell me I can stay broke. Tell me I never have to go back and be her. You're the one person whose saying it I'd pay for. That's the most expensive thing I've ever said." },
      { choose: [
        { t: "Stay broke, then. Stay here. Be the girl on the overpass.", notes: 3, tally: { cakes: 1, 'asks.danielle': 'yes' }, then: [
          { n: "She said it. It came out easily, warm, exactly the right size for the hole Danielle had made for it, and she watched it fit." },
          { n: "Danielle breathed out. Her shoulders came down, all the way, for longer than a second, longer than Solar had ever seen them stay down, and she closed her eyes, and her mouth did a thing at one corner that was very nearly a smile and stayed there." },
          { s: 'danielle', f: 'happy', t: "...Okay. Broke. I can do broke. I'm so good at it already." },
          { n: "She took Solar's arm, and leaned on it, actually leaned, with her weight, and looked down at the river street, and Solar felt something settle in her own chest, heavy and sweet, like the last of a meal at someone else's table, and couldn't have said why the street below, all of a sudden, seemed a little warmer, as if somebody down there had opened a door." }
        ] },
        { t: "Stay. Please. Somebody has to be up here who sees.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.danielle': 'yes' }, flag: 'eqx-asked-danielle', then: [
          { n: "It came out before she'd decided, and it was more than Danielle had asked for. Danielle heard the difference. Of course she did. She looked at Solar with her eyebrows up, very slightly, the look of someone being handed a bill she hadn't ordered." },
          { s: 'danielle', f: 'surprised', t: "...You're *asking* me. Solar Lee. Asking me for something." },
          { s: 'danielle', f: 'neutral', t: "Okay. Fine. Yes. I'll stay. I'll be your lookout. Put it on my tab. God, I have a tab with *you* now. This is a disaster." },
          { n: "She said it lightly. She took Solar's hand, not her arm, her hand, and held it tight, and Solar felt the grip close and felt something small and warm go out of her as it did, out through her palm, and not come back, and she told herself it was the cold off the glass." }
        ] },
        { t: "You'll go back. You'll pick it all up. That's who you are.", notes: 2, tally: { 'asks.danielle': 'no' }, then: [
          { n: "Danielle looked at her. Then the look came back. The old one. Bright, pleasant, fully loaded, the hand of cards held close. It came back so fast and so smoothly that Solar understood it had never been far, only put down for a minute, and that she'd just handed it back." },
          { s: 'danielle', f: 'neutral', t: "Mm. Yeah. You're right. You're always so annoyingly right." },
          { s: 'danielle', f: 'neutral', t: "...Good to know what I cost, though. Thanks for the quote." },
          { n: "She put her sunglasses on. It was nearly dark." }
        ] },
        { t: "Whether you stay, or go, or spend it, or don't. That's yours. All of it.", notes: 2, tally: { choose: 1, 'asks.danielle': 'choose' }, then: [
          { n: "Danielle stared at her. For a long moment nothing moved in her face at all, and Solar watched it go in and land wrong, not the thing she'd paid for, and watched her pick it up anyway and turn it over like a coin she didn't recognize." },
          { s: 'danielle', f: 'neutral', t: "...You absolute menace. That's so much worse. You know that's so much worse." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { s: 'danielle', f: 'neutral', t: "*Yours.* Nobody's ever given me anything that was mine. People give me things that are theirs, so I'll keep quiet about them. That's the only kind of thing I've ever been handed." },
          { n: "She looked down at the river street for a while. Then she took the phone out, and opened the new note from August, the one with no title, the one with one line in it, and under *red cap. said no.* she typed, slowly, with her thumb, a second line, and didn't show it to Solar, and put it away." }
        ] }
      ] },
      { n: "They went down the stairs together in the dark, and at the bottom Danielle took her arm, and they walked the long way round by the shrine, away from the river, the way they always did. Halfway up the shrine road Danielle stopped under a streetlamp and looked at her phone and did a small calculation with her mouth." },
      { s: 'danielle', f: 'neutral', t: "Seven hundred. Your tab. Even. I rounded down because you were nice to me, which I'm never mentioning again." },
      { s: 'danielle', f: 'neutral', t: "You're not allowed to skip out on it, you know. You have to keep coming up here till you pay it off. Those are the rules. I'll know if you don't. I always know." },
      { n: "She said it to the phone, not to Solar. Then she put the phone in her pocket, and her hand in Solar's elbow, and they walked on up the hill under the lamps, and Solar didn't count them, and could feel Danielle beside her not counting them either, very carefully, all the way to the gate." }
    ] }
  ]
});
