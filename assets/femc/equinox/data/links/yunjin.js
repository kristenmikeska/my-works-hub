/* Persona 3: Equinox · Huh Yunjin · Judgement. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–8 (from 4/13; her home is the Port Island harbor on Sunday, Monday, Wednesday and Friday afternoons,
   so 4/14 at the earliest). Ranks 9–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Yunjin link is shared memory (the seawall, two cans of the bad coffee, "Sol", "Jin", "I'm always up", "up" at
   every low tide, the light on at night); nothing reads Solstice link standing. strangers fences hold: nothing about home
   past "since winter", no names from home, no war, no dates. Texts lowercase, contact 'yunjin 🦋' as in Solstice.
   Flags this file sets: eqx-yunjin-light (rank 1: Solar says leave the light off). Reads eqx-oka-ricecake (story-opening
   4/9: Solar took a rice cake for Koromaru, and Yunjin ate it).
   Rank 2 (after 4/21): reads eqx-yunjin-light and ifAfter 4/29; sets eqx-yunjin-pulled (Solar hauls her back from the
   water). Nothing reads the new flag yet.
   Rank 3 (after 6/7, the harbor at high water, then Solar's room; branches on eqx-stage, eqx-second-hill,
   eqx-last-grain, eqx-hunted) records her ask: tally asks.yunjin (+ cakes / choose); cosmetic flag eqx-yunjin-dark.
   Rank 4 '4: the space on my left' (after 7/4, the harbor with the four girls on the slipway; reads asks.yunjin via
   ifChoice, eqx-oka-ricecake, eqx-tanabata; sets eqx-yunjin-left, eqx-yunjin-gate). Rank 5 '5: open return' (after 8/18,
   the end of the pier, summer, the fisherman's upside-down saucer; reads eqx-incheon, eqx-rehearsal, eqx-table-op; sets
   eqx-yunjin-ticket-held | -kept | -torn (an open-return hydrofoil ticket to Incheon), eqx-yunjin-swim). Rank 6 '6: where
   nobody dies' (after 9/29, the harbor in the first autumn rain, after the bridge; reads the ticket flags; sets
   eqx-floor-yunjin (her ask floor: a stretch of the Second Hill where the tide stands at twelve-forty and her own voice
   reads tide times), eqx-yunjin-table-kept | -mine | -held). Her ask is named aloud in rank 6 ("stay where nobody dies");
   no new tallies (asks.yunjin was spent at rank 3). Persona/awakening stays Act IV's 11/6.
   Ranks 7–8 (Nov 16, round 3; both always after her awakening, eqx-low-tide 11/6): rank 7 '7: bari' from 11/7, the harbor
   on a north-wind afternoon (she faces the town now, wears Haechan's old jacket; every light on; Bari's tale; a ballpoint
   tally of the dead inside her left wrist, "Bari counts"), then the Oka gate (before eqx-persimmon: Mrs. Oka's eyes on
   Yunjin's half-raised hand, Kazuha's rice saucer) or the guesthouse lobby (after). Reads asks.yunjin, dead.shinjiro,
   dead.aigis, the ticket flags, eqx-persimmon. Sets eqx-yunjin-ticket-back (held-path: she asks for the ticket back),
   eqx-yunjin-tell-them | -mine | -held (telling the girls about her Persona). Rank 8 '8: the bridge part' from 11/29,
   the harbor at dusk with ice on the mud (she carried Miseon up on 11/22 with Akihiko; Miseon counted her stitches to 104;
   yes-path: red sweet grit in the creases of her closed hand, a 1/20 sorghum clue; the practice-room dream, blue tape on
   her left with a name she can't read). Reads asks.yunjin, dead.aigis, eqx-persimmon, eqx-yunjin-left. Sets
   eqx-yunjin-wifey, eqx-yunjin-bridge (Solar learns the bridge part on her left). No route (romance: null). Her stay/go
   is deferred: "ask me in spring". */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yunjin', name: 'Huh Yunjin', short: 'Yunjin', arcana: 'Judgement', numeral: '', from: 'strangers', kind: 'searcher',
  world: 'S', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'port', spot: 'Harbor', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons down at the Port Island harbor, on the seawall, with two cans of vending-machine coffee.' },
  approach: "On the harbor seawall a girl in a yellow puffer is sitting with her legs hanging over the mud, two cans of vending-machine coffee beside her, singing something under her breath in a voice like gravel in a tin, and she holds one can out behind her without turning round.",
  cast: { kazuha: 'Kazuha', mrsoka: 'Mrs. Oka' },
  ranks: [
    { after: '4/13', title: '1: till it turns', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { bg: 'harbor' },
      { n: "The tide was going out at Port Island, the way it had gone out every afternoon of last autumn: the water pulling back off the mud in long slow sheets, the boats settling one by one onto their keels with small wooden complaints, everything smelling of salt and diesel and the green underside of things. The gulls were working the edge of it. The light was low and gold and came in sideways off the bay, so that the wet mud shone like a road somebody had just finished paving." },
      { n: "Yunjin was on the seawall. Same place. Same yellow puffer, unzipped over a hoodie, legs hanging down toward the mud, two cans of the vending-machine coffee beside her, the sweet canned kind she called coffee for taxi drivers. She was singing under her breath, something in English, wrecked and low. She didn't stop when Solar came down the steps. She held one can out behind her, without looking, the way you'd hold out a hand to somebody you knew would take it." },
      { s: 'yunjin', f: 'neutral', t: "You're late. The tide's been waiting. It's very rude to make a tide wait, Sol." },
      { choose: [
        { t: "(Take the can. Sit down, close.)", notes: 3, then: [
          { n: "She took the can and sat down close, shoulder to shoulder, legs over the drop. Yunjin knocked her can against Solar's without looking, a dull tin clink, and went on watching the mud." },
          { s: 'yunjin', f: 'happy', t: "There she is." }
        ] },
        { t: "Jin.", notes: 3, then: [
          { n: "Yunjin went still, for a second, the way she'd gone still on this wall when Solar said it the first time, as if her name were something that had to be caught in both hands." },
          { s: 'yunjin', f: 'happy', t: "...Every time. Every single time you say it I want to scream at a gull. Sit down." }
        ] },
        { t: "The tide doesn't care, Jin.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "The tide cares about me. Personally. We have a relationship. Sit down and drink your sad coffee." }
        ] }
      ] },
      { n: "The coffee was terrible. It was sweet and lukewarm and tasted of the can, and it was the best thing she'd had in her mouth all day. She drank half of it in one go, and Yunjin watched her do it out of the side of her eye with the satisfied expression of someone whose medicine was working." },
      { s: 'yunjin', f: 'neutral', t: "So I texted you." },
      { s: 'yunjin', f: 'neutral', t: "Every low tide. Like I said I would. *up.* That's all. Two letters. I did it at home, wherever home was, at three in the morning, sitting up in the kitchen like a crazy person, to a number that went nowhere." },
      { s: 'yunjin', f: 'serious', t: "And then I did it here, on Thursday, at six-forty, and your phone went off in your pocket at dinner, and Hanni said who's texting you at the table, and you looked at it, and you smiled." },
      { s: 'yunjin', f: 'serious', t: "I watched you smile at my text. From across the table. Do you understand. Do you understand what that does to a person." },
      { choose: [
        { t: "I'm up.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "...Don't. I'm not crying at a harbor again. I've cried at enough harbors. I have a reputation with the gulls." },
          { n: "She cried a little anyway, at the harbor, with her face turned to the mud so Solar could pretend not to see, and Solar pretended, and held her can, and waited." }
        ] },
        { t: "I got every one?", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "No. Just the one. The ones from home didn't come. Wherever they went." },
          { s: 'yunjin', f: 'serious', t: "It's fine. I'll send them again. I've got them memorized. They're all the same two letters, it's not hard." }
        ] },
        { t: "(Get your phone out. Text her back.)", notes: 2, then: [
          { n: "She got her phone out and typed with her thumbs and sent it, and beside her on the wall Yunjin's phone buzzed in her puffer pocket, and Yunjin took it out and looked at it and looked at Solar and put it back in her pocket very slowly with her mouth pressed into a line." },
          { s: 'yunjin', f: 'flustered', t: "...You sent me *up* back. You can't send it back. It's mine. That's like saying I love you too, it's cheating." }
        ] }
      ] },
      { n: "A gull landed three meters down the wall and looked at them with one flat yellow eye. Yunjin looked back at it until it left. Out on the mud the water had gone almost all the way out, a thin bright skin over everything, and the boats lay over on their sides like sleeping animals." },
      { s: 'yunjin', f: 'neutral', t: "Can I tell you a thing and you don't make it a thing." },
      { s: 'yunjin', f: 'neutral', t: "I slept with the light off last night." },
      { n: "She said it to the mud. Casual. Too casual, the way you'd mention you'd quit smoking, so nobody would see you were afraid you hadn't." },
      { s: 'yunjin', f: 'sad', t: "I haven't done that since winter. You know I haven't. I sleep with it on. I sleep with it on and I keep my phone on my chest and I wake up every hour to check it's still on. That's just how I sleep now. That's the deal." },
      { s: 'yunjin', f: 'neutral', t: "Last night I reached up to check it and I thought, why. Why am I checking. Nobody here's counting days. Nobody here's waiting for anything. Nobody's going to call at four in the morning. It's just a dorm and a dog and Hanni snoring in the hallway like a little motorbike." },
      { s: 'yunjin', f: 'neutral', t: "So I turned it off. And I slept. Like a baby. Like a dead person. Six hours. I haven't slept six hours since I was a different girl." },
      { choose: [
        { t: "Jin, that's good.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Is it? That's what I'm asking. That's the thing I'm not making a thing." },
          { s: 'yunjin', f: 'sad', t: "It felt so good I got scared of it. That's the stupid part. Nothing should feel that good unless it wants something." }
        ] },
        { t: "Leave it off, if you want. It's yours to choose.", notes: 3, flag: 'eqx-yunjin-light', then: [
          { s: 'yunjin', f: 'surprised', t: "...Huh." },
          { s: 'yunjin', f: 'neutral', t: "Mine to choose. Okay. Nobody's said that to me about a light switch before. Everybody's always got an opinion about my light switch." },
          { s: 'yunjin', f: 'neutral', t: "I'll think about it. On, off. Mine. Okay." }
        ] },
        { t: "(Don't make it a thing. Bump her shoulder.)", notes: 3, then: [
          { n: "She didn't make it a thing. She bumped Yunjin's shoulder with hers, once, and left it there, and after a while Yunjin leaned back into it, her whole weight, like Koromaru did, as if a shoulder were a wall that had decided to hold." }
        ] }
      ] },
      { s: 'yunjin', f: 'serious', t: "Except." },
      { n: "She turned the can round in her hands. Round, and round, the dented tin catching the light." },
      { s: 'yunjin', f: 'serious', t: "I woke up at three. In the dark. With the light off. And my hand was shut." },
      { s: 'yunjin', f: 'serious', t: "Like on the riverside. The first night. I woke up on the riverbank in the red with both hands closed round nothing so hard my nails were in my palms, and I was saying your name before I knew where I was. Remember? I didn't let go of nothing for like an hour." },
      { s: 'yunjin', f: 'sad', t: "Last night it was shut like that. And it was warm, Sol. The inside of my hand. Like somebody'd just been holding it. Like somebody'd just that second let go." },
      { n: "The wind came in off the bay and lifted the hair off Solar's neck and put it back, cold, and she felt the cold go all the way down, a single line, from the nape to the small of her back, and stay there." },
      { choose: [
        { t: "It was mine. Wherever I was, I was holding on too.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "...Yeah. Okay. Yeah. That's what I'm deciding it was." },
          { s: 'yunjin', f: 'neutral', t: "Don't tell me if you're lying. I'm keeping it." }
        ] },
        { t: "Sleep in my room tonight.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Oh my God. Is that an invitation. In front of the gulls. Wifey. I'm bringing my own pillow, yours are flat, I've slept on them, they're a tragedy." },
          { s: 'yunjin', f: 'neutral', t: "...Light on, though. If that's okay. Just tonight." }
        ] },
        { t: "Did you tell anyone?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Who would I tell? Hanni would put it on the rota. Mitsuru would write it down. Haechan would make it a song." },
          { s: 'yunjin', f: 'neutral', t: "I'm telling you. That's who I tell. That's always been who I tell. You're the only one who doesn't try to fix it, you just sit there with your stupid coffee." }
        ] }
      ] },
      { place: 'Port Island · Harbor', time: 'Evening', bg: 'harbor', soft: true },
      // BG: port-island-harbor-low-tide-evening — the Port Island harbor at dusk at dead low tide, the mud shining under the first sodium lamps along a concrete seawall, small boats lying over on their keels, the lit town across the water.
      { n: "The lamps came on along the seawall, sodium orange, one after another from the ferry terminal outward, and the mud went from gold to copper to the color of an old penny. Low tide. Dead low. The water out past the last of the moorings, flat and still, holding its breath before it turned." },
      { s: 'yunjin', f: 'neutral', t: "The tide here's very polite, you know. I've been watching it. Every day. I got the table off the man at the ferry office, he thinks I'm a marine biology student, I let him think it." },
      { s: 'yunjin', f: 'neutral', t: "It goes out when the table says. It comes in when the table says. To the minute. Like a good Japanese train." },
      { s: 'yunjin', f: 'serious', t: "Except at midnight." },
      { s: 'yunjin', f: 'serious', t: "I came down on Saturday. In the red. I know. Don't look at me like that. I didn't open any doors, I climbed out the laundry window, Hanni's rule is very specific." },
      { s: 'yunjin', f: 'serious', t: "It was going out. Halfway out. And at midnight it just stopped. Not slowed down. Stopped. Halfway down the mud, a line of water standing there, still, like a wall of glass, with the moon in it. For a whole hour. Like it was waiting for somebody to give it permission." },
      { s: 'yunjin', f: 'serious', t: "And then the hour ended and it just went on going out. Like nothing. Like it hadn't been standing there with its breath held." },
      // CG: eqx-standing-tide — a harbor at night in the red Dark Hour, the tide stopped halfway out across shining mud, a sharp still edge of water standing like a wall of glass with a red moon reflected in it; a small figure in a yellow puffer on the seawall above, looking at it.
      { n: "She said it in her murmuring voice, the gravel one, the one that came out when the loud one wasn't enough. Solar looked out at the water standing out past the moorings, flat and dark and very still, and for a second, just a second, it was hard to tell whether it was about to turn or about to stay exactly where it was forever." },
      { choose: [
        { t: "Don't go down to the water in the red again. Please.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "...You said please. You never say please. You must be really scared." },
          { s: 'yunjin', f: 'serious', t: "Okay. I won't. I'll be a good girl. I'll stay on the roof with the chips." }
        ] },
        { t: "Take me next time.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Oh, absolutely not, Mitsuru would have me deported. To where, I don't know. She'd find somewhere." },
          { s: 'yunjin', f: 'neutral', t: "...Okay. Maybe. If it does it again. You and me. Nobody lets go." }
        ] },
        { t: "(Watch the water until it turns.)", notes: 3, then: [
          { n: "She watched it. Yunjin watched it with her. Neither of them said anything for a long time, and the water lay out there flat under the lamps, and the gulls went quiet, and then, at last, so slowly you could only tell by the boats, it began to come back." },
          { s: 'yunjin', f: 'neutral', t: "...There. See. Polite. It turned. In the daytime it always turns." }
        ] }
      ] },
      { ifFlag: 'eqx-oka-ricecake', then: [
        { s: 'yunjin', f: 'neutral', t: "Also. Unrelated. I'm still thinking about that rice cake. The one the dog wouldn't eat. I think about it like twice a day. I walked past that house on Sunday just to see if she'd be at the gate." },
        { s: 'yunjin', f: 'neutral', t: "She wasn't. I was so disappointed. I'm a grown woman. It's embarrassing. Don't tell anyone." }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Okay. Home. I'm cold and I've emotionally overshared to a mudflat." },
      { n: "She stood and held a hand down, and pulled Solar up off the seawall, too hard, the way she did everything, and didn't let go of the hand right away. She looked at it. At their two hands. She opened hers, slowly, finger by finger, the way you'd check you still could." },
      { n: "Then she shoved both hands in her puffer pockets and walked off up the steps singing, loud this time, badly, on purpose, so the gulls would know." },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven fifty-four her phone went on her chest." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "(light on tonight)" },
        { from: 'yunjin', t: "(dont make it a thing)" }
      ], contact: 'yunjin 🦋' },
      { n: "Down the hall, through two doors, she heard the switch. Then, a long minute later, the switch again. Then nothing. Then the red came up through the window like something rising through water, and whatever Yunjin had decided, Solar couldn't tell, because in the red every light in the world was out." }
    ] },
    { after: '4/21', title: '2: the standing water', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { bg: 'harbor' },
      { n: "The tide was coming in this time. It came up over the mud in a long slow skin, gray under a gray sky, lifting the boats off their sides one at a time with small sucking sounds, and the harbor smelled the way it always smelled on the turn, salt and weed and diesel and something cold underneath that came in from a long way out. Yunjin was on the seawall. Same place. Two cans. She didn't hold one out this time. She'd put it down beside her, on Solar's side, already opened, and kept her hands in her puffer pockets." },
      { ifAfter: '4/29', then: [
        { n: "She didn't say anything when Solar sat down. She didn't sing. She looked at the water coming in and her jaw was set the way it had been set on the end of the couch on the twenty-eighth, watching the front door, and she'd been setting it like that ever since." },
        { s: 'yunjin', f: 'serious', t: "The light's back on. Since the twenty-eighth. Don't make it a thing." },
        { s: 'yunjin', f: 'sad', t: "I had it off for two weeks, Sol. Two weeks I slept. And then a man I said good evening to twice in the guesthouse lobby opened his door and somebody took his insides out through his back." },
        { s: 'yunjin', f: 'serious', t: "Somebody died. Here. That was the whole thing about here. That was the deal. Nobody's counting days, nobody's waiting for a phone call, nobody dies. I was so stupid. I bought it. I slept like a baby on it." },
        { n: "She said *stupid* like she was spitting it into the water. Then she picked up her own can and drank from it, a long pull, and put it down, and her hand was shaking, a fine fast tremor she didn't try to hide, and she looked at it as if it belonged to somebody she didn't like much." }
      ], else: [
        { ifFlag: 'eqx-yunjin-light', then: [
          { s: 'yunjin', f: 'neutral', t: "Off. Since you said. Every night. Mine to choose, so I chose." },
          { s: 'yunjin', f: 'happy', t: "Seven hours last night. Seven. I woke up and I didn't know who I was for a second. I thought I'd been kidnapped by a mattress company." }
        ], else: [
          { s: 'yunjin', f: 'neutral', t: "On, off, on, off. I've become one of those lights in a horror movie. Hanni thinks the switch is broken. Hanni's put it on the rota. *Yunjin's light, check.*" },
          { s: 'yunjin', f: 'neutral', t: "Mostly off. Mostly. I slept a lot. It's still scaring me how much." }
        ] },
        { s: 'yunjin', f: 'serious', t: "Hand's still doing it, though. Waking up shut. Warm. Every night now. I've started sleeping with it under my pillow like I'm hiding money." }
      ] },
      { choose: [
        { t: "(Drink the coffee. Sit closer.)", notes: 3, then: [
          { n: "She drank the coffee, which was cold now and worse than ever, and shifted along the wall until their hips were touching, and after a moment Yunjin took one hand out of her pocket and put it, closed, on Solar's knee, and left it there like a stone she'd found on a beach and wanted somebody to hold." }
        ] },
        { t: "Jin. Talk to me.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "I am talking to you. This is me talking. This is what it looks like. It's not pretty, it's a mudflat." }
        ] },
        { t: "It's not stupid to want somewhere safe.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "...It is if there isn't one. Then it's just wanting." },
          { n: "She laughed, short, at herself. It came out wrong, and she let it, and turned her face to the water." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "So. You said take you next time. Or you didn't. Either way I'm taking you." },
      { s: 'yunjin', f: 'serious', t: "Tonight. Midnight. The tide's going out at eleven-thirty. It'll be halfway when the red comes. I want you to see it stop. I want somebody else to see it so I know it's the water and not me." },
      { s: 'yunjin', f: 'neutral', t: "Laundry window. Hanni's rule is very specific. I've checked it. I've read it upside down." },
      { choose: [
        { t: "Okay. Nobody lets go.", notes: 3, then: [
          { s: 'yunjin', f: 'happy', t: "Nobody lets go. Shake on it. No, a real shake. Like a contract. Like a man selling you a car." },
          { n: "They shook on it, on the seawall, very seriously, like two men selling each other cars, and Yunjin didn't let go of the hand afterward for longer than a handshake needed." }
        ] },
        { t: "Only if we tell Hanni.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "If we tell Hanni she'll come, and if she comes Hyein comes, and if Hyein comes there's nobody across Hyein's door, and then I'm the one who did that." },
          { s: 'yunjin', f: 'neutral', t: "We'll tell her after. I'll take the yelling. I'm good at being yelled at. I've had a very full life." }
        ] },
        { t: "(Take her closed hand. Open it, finger by finger.)", notes: 3, then: [
          { n: "She took Yunjin's closed hand off her knee and opened it, finger by finger, gently, the way Yunjin had opened her own on the harbor steps the week before, checking she still could. The palm was red where the nails had been. Yunjin watched her do it and didn't breathe." },
          { s: 'yunjin', f: 'flustered', t: "...Okay. Yes. Midnight. Stop doing that, I'm going to fall in the harbor." }
        ] }
      ] },
      { place: 'Port Island · Harbor', time: 'Dark Hour', bg: 'harbor', soft: true },
      // BG: port-island-harbor-red-hour — the Port Island harbor in the red Dark Hour, the tide stopped halfway out across the mud in a sharp standing edge, the seawall lamps dead, a swollen red moon over the water, boats tilted on their keels and not moving.
      { n: "They went out through the laundry window at eleven-forty with their shoes in their hands, Yunjin first, then Solar, Haechan's tape recorder turning on the shelf above the dryer with its little red light on and Haechan himself asleep in the plastic chair beside it with his head against the wall, so that they had to climb past him, over the machines, holding their breath, and he didn't wake. They put their shoes on in the yard. They ran." },
      { n: "By midnight they were on the seawall. The tide was halfway out, exactly as Yunjin had said, a long smooth sheet of water drawing back down the mud under the lamps, and the lamps were humming, and the boats were settling, and Yunjin had both her hands round Solar's left arm, above the elbow, tight." },
      { n: "Then the red came." },
      { n: "It came the way it always came, up out of everything at once, but here it came up out of the water first, as if the harbor had been full of it all along and only now let it show. The lamps died. The gulls on the posts didn't fall; they stopped, mid-shift, wings half-open, and stayed there like gulls on a postcard. The moon came up over the island huge and swollen and the color of meat, and the water stopped." },
      { n: "It didn't slow. It stopped. Halfway down the mud, all along the harbor, the edge of the retreating tide simply stood still, and kept standing, a sharp straight line of water as high as a step, with its face toward them, smooth as glass. No ripple. No sound. The whole of the harbor held in one breath, and the red moon lying in it, perfectly, not even trembling." },
      { s: 'yunjin', f: 'serious', t: "...See. See. I'm not crazy. Tell me you see it." },
      { s: 'solar', f: 'neutral', t: "I see it." },
      { n: "They went down the slipway. Yunjin went first and Solar didn't stop her, and then didn't let go, and they went down together, step by step, in the red, onto the wet concrete at the bottom where the mud began, until they were standing a few meters from the edge of it. From the wall of water. Close enough to see into it." },
      { n: "It wasn't showing the harbor." },
      { n: "The reflection in the standing water should have been the seawall and the dead lamps and the two of them and the meat-colored moon. It was a harbor. It wasn't this one. Cranes against a night sky, enormous, orange-lit, standing over long rows of containers. A bridge far off across black water, strung end to end with white lights. The low striped awnings of a fish market, rolled down for the night. And it smelled different, all at once, the air around them, colder, a harder, older sea, with frost in it, and diesel, and somewhere very far off a ship's horn going, long and low." },
      // CG: eqx-standing-tide-home — two girls at the bottom of a harbor slipway in the red Dark Hour, holding on to each other, facing a smooth standing wall of seawater; in its glass surface, instead of their reflection, a different harbor at night: great orange-lit cranes, a long bridge strung with white lights.
      { s: 'yunjin', f: 'surprised', t: "...Oh." },
      { n: "She'd let go of Solar's arm. Solar didn't feel her do it. She just wasn't holding on anymore, and she'd taken a step, one, toward the water, onto the mud, with her face lit red from one side and something else from the other, something white and cold coming off the glass." },
      { s: 'yunjin', f: 'sad', t: "That's home. Sol. That's my home. That's the bridge. I can see the, there's the, I used to walk there—" },
      { n: "And in the reflection, low down, across the black water, a window. A small one, in a low building by the fish market, among a hundred dark windows. One light on. Yellow. The kind of light you leave on in a kitchen for somebody who's coming home late." },
      { s: 'yunjin', f: 'sad', t: "Somebody's left the light on." },
      { n: "She said it so softly. She took another step. The mud took her foot to the ankle and she didn't notice, and the hum, the low note under the note, was louder down here, much louder, coming up out of the mud and the water both, and under it, so faint it might have been the blood in Solar's own ears, someone humming along with it. Three up, two down. A long one." },
      { choose: [
        { t: "(Grab her. Pull her back. Hold on.)", notes: 3, flag: 'eqx-yunjin-pulled', then: [
          { n: "She grabbed her. Both arms, round her from behind, round her middle, and pulled, and Yunjin came back out of the mud with a sucking sound and they went down together on the concrete of the slipway, hard, Solar's elbow and Yunjin's hip, and Solar didn't let go. She held on with both arms and her face in the back of Yunjin's puffer, and Yunjin was breathing like someone who'd been under water, in great ragged pulls, and her hands came up and closed on Solar's wrists, and held them there." }
        ] },
        { t: "Jin. It's not real. It's not your harbor. Look at me.", notes: 3, then: [
          { n: "Yunjin didn't look at her. Yunjin's head turned a little, toward the voice, the way you turn toward a voice in a dream. Solar said it again, her name, *Jin*, louder, the way she'd said it on the seawall the first time, and Yunjin flinched as if she'd been touched, and looked round, and her eyes were wet and enormous and very far away and then, all at once, here." },
          { s: 'yunjin', f: 'sad', t: "...Sol. Sol. Okay. Okay. I'm here. I'm here, I'm here." }
        ] },
        { t: "(Step up beside her. Look at it with her.)", notes: 2, then: [
          { n: "She stepped down into the mud beside her. The cold of it came through her shoes at once, deep, wrong, a cold that didn't belong to April. She took Yunjin's hand, and Yunjin's hand closed on hers the way it closed in her sleep, hard, nails in, and they stood together and looked at the cranes and the bridge and the one lit window, and Solar felt the pull of it, not on her, on the hand she was holding, steady, patient, like a tide." },
          { n: "She didn't let go. She stood there in the mud and held on and didn't let go, and after a long time Yunjin's grip changed, from going to staying, and she let Solar walk her backward, one step, two, up onto the concrete." }
        ] }
      ] },
      { n: "And then the water knocked." },
      { n: "From inside. From behind the glass of it, from the other harbor, from somewhere in that cold reflected night, two knocks, soft and polite, *tock, tock*, the sound a knuckle makes on a window, and the whole face of the standing water shivered with each one, a ring going out across it like a pebble dropped from the wrong side." },
      { n: "Neither of them screamed. Solar would remember that afterward, that neither of them made any sound at all. They went up the slipway backward, holding each other, and up the steps onto the seawall, and didn't take their eyes off the water, and it didn't knock again. It stood there, glass and red, with somebody's home in it and one light on, and waited, very patiently, for the rest of the hour." },
      { n: "At one in the morning the red went out of everything like a tide going out, and the lamps buzzed back on, and a gull shook itself on its post and complained, and the water fell. All at once, the whole standing edge of it, with a long tired sound like a breath let go, and ran away down the mud toward the sea as if it had never been anywhere else." },
      { place: 'Port Island · Harbor', time: 'Late Night', bg: 'harbor', soft: true },
      { n: "They sat on the seawall under a lamp with their muddy shoes and didn't go home for a while." },
      { s: 'yunjin', f: 'serious', t: "It showed me home. And then it knocked." },
      { s: 'yunjin', f: 'serious', t: "I don't know which way that door goes, Sol. I don't know if it wanted me to go through it, or wanted me to open it so it could come through. I don't know which one's worse." },
      { s: 'yunjin', f: 'sad', t: "...I wanted to. That's the worst part. I'm supposed to want to stay here, everybody here's supposed to want to stay, and I saw that window and I wanted to walk into the sea." },
      { choose: [
        { t: "Both are allowed. Wanting to go, wanting to stay.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "Are they? Both? At the same time?" },
          { s: 'yunjin', f: 'neutral', t: "...Okay. I'll try that. Wanting both. I've done harder things. I've got a very full life." }
        ] },
        { t: "If you ever go home, you go through a real door. Not that one.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "A real door. In the daytime. With you there." },
          { s: 'yunjin', f: 'serious', t: "...Okay. That's the rule. I'm making it a rule. Hanni can put it on the rota." }
        ] },
        { t: "(Don't say anything. Lean your head on her shoulder.)", notes: 3, then: [
          { n: "She leaned her head on Yunjin's shoulder. The puffer crackled. Yunjin put her cheek down on top of Solar's head and they sat like that under the buzzing lamp, two girls with mud to the ankle, and below them the ordinary tide went out across the ordinary mud, taking its time, the way it did in the daytime." }
        ] }
      ] },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "They climbed back in over the dryers at a quarter to two. Haechan was awake. He was sitting in the plastic chair with the recorder in his lap and his headphones round his neck and his arms folded, and he looked at their shoes, and at their faces, and at the mud on Yunjin's jeans to the shin, and didn't say anything for a long moment." },
      { s: 'haechan', f: 'serious', t: "...I'm not asking. Wash your feet. Both of you. Hanni's on at two." },
      { n: "In bed, at two-twenty, her phone went." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "light on" },
        { from: 'yunjin', t: "my hand is open. i checked. i'm keeping it open" }
      ], contact: 'yunjin 🦋' },
      { n: "She lay in the dark and smelled the harbor on her own skin, two harbors, the salt and diesel of this one and, under it, faint and cold and fading as she breathed it, the frost of the other one. By morning it was gone. She checked. She checked twice." }
    ] },
    { after: '6/7', title: '3: two tables', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { bg: 'harbor' },
      // BG: port-island-harbor-high-tide-summer — the Port Island seawall in early summer at high water: gray-green sea right up to the concrete, wet bollards, gulls on the rail, a low sky, cranes on the far side.
      { n: "The tide was in. For the first time since April Solar came down to the harbor and there was no mud at all, nothing to hang your legs over, just the sea right up against the seawall, gray-green and thick and heaving very slightly, as if something under it were breathing in its sleep. The gulls had moved up onto the rail. They watched her come along the wall with the flat, unimpressed faces of people waiting for a bus." },
      { n: "Yunjin was at her place. Two cans of the bad coffee beside her on the concrete, one opened, one not. But she wasn't looking at the water. She was looking at her lap, where she had two pieces of paper spread out side by side and held down against the wind with a can on each, and she was writing on the back of her own left hand with a pen." },
      { s: 'yunjin', f: 'neutral', t: "Don't talk to me for one second. I'm doing maths. I hate maths. I'm doing it anyway, which tells you how serious this is." },
      { choose: [
        { t: "(Sit down and wait. Pick up the unopened can.)", notes: 3, then: [
          { n: "She sat. She picked up the can. Yunjin, without looking up, reached over and took the can back off her, cracked it open one-handed with her thumb, and handed it to her again, open, because that was the rule and had been since a different seawall in a different year." }
        ] },
        { t: "Is that a tide table?", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "It's two tide tables. That's the maths. One plus one. Except it isn't, because they don't add up, which is the whole problem." }
        ] },
        { t: "You're writing on your hand like it's an exam.", notes: 2, then: [
          { s: 'yunjin', f: 'flustered', t: "It's the only paper I can't lose. Sit down. You're blocking my light. You're blocking the gulls' light. They're very upset." }
        ] }
      ] },
      { n: "The two pieces of paper were tide tables. One was the printed one from the ferry office, the one she'd talked the man there out of in April, its little columns of times in neat Japanese numerals, already soft and furred along the folds. The other was handwritten. Pencil, in Korean, on a page torn out of something, very careful, the numbers formed the way a person forms numbers when they're writing them down from memory and want to be sure." },
      { n: "She'd copied a table from home. From memory. A whole month of it." },
      { s: 'yunjin', f: 'serious', t: "I worked it out. At the door. In the Well, you know. The gate." },
      { n: "She meant the night of the fifth. The Doorstep, and the stone wall, and the gate with the light over it, and the salt, and the smell of low tide coming off it, so strong that half of them had stopped walking. Yunjin had stood on the lip of it with her arms folded, quite still, and then said a time out loud, *twelve forty*, and Solar hadn't known until then that she was working anything out at all." },
      { s: 'yunjin', f: 'serious', t: "It was low tide there. At the gate. The water was right out. So I counted back from the last one I remember, and I worked out what night it would be at home for the water to be that far out at that time, and then I wrote the whole month down. Every tide. So I'd know." },
      { s: 'yunjin', f: 'neutral', t: "So I'd know what time it is there. Even if I can't know what day." },
      { n: "She held up her left hand. On the back of it, in blue ballpoint, small, were two times, one above the other, with a line between them like a fraction. *Here*, and the time of today's high water. *There*, and a time six hours off it, the low one, the empty one." },
      { s: 'yunjin', f: 'sad', t: "It's low there now. Right now. While we're sitting here with the water up to our feet. Somewhere it's all mud and the boats are on their sides and the kitchen's got its light on." },
      { n: "She put her hand down flat on the handwritten table, palm down, the way you'd put your hand on someone's chest to feel their heart." },
      { choose: [
        { t: "(Put your hand on top of hers.)", notes: 3, then: [
          { n: "She put her hand on top of Yunjin's. The ink on Yunjin's knuckles was still a little wet and came off on Solar's palm, a smudge of blue, the two times blurring into each other, and Yunjin looked at it and laughed, a short wet laugh, and didn't take her hand away." },
          { s: 'yunjin', f: 'neutral', t: "...Great. Now we're both on two clocks. Now there's two of us who can't tell the time." }
        ] },
        { t: "How long did it take you?", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Three nights. With the light on. I kept getting one wrong and having to start again from the top, because if one's wrong they're all wrong, that's how tides work. That's how everything works, actually." }
        ] },
        { t: "You don't have to know what time it is there, Jin.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "I know I don't. I want to. That's different. That's the most different thing there is." }
        ] }
      ] },
      { ifEvent: 'eqx-stage', then: [
        { n: "She folded the handwritten table along its old creases and put it inside her jacket, and her face changed, and became the other face, the new one, the one Solar had only seen since the night of the twenty-sixth." },
        { s: 'yunjin', f: 'happy', t: "The girls are rehearsing tonight. In the big tatami room. You should come. Chaewon's got us doing the bridge part six times and Kazuha does it right every time and it's making everybody insane." },
        { s: 'yunjin', f: 'neutral', t: "I keep standing on the wrong side, you know. In the formation. I keep leaving a space on my left. Chaewon keeps moving me and I keep drifting back, like there's supposed to be somebody there. Sakura said it's muscle memory. From what, I said. She didn't know. Nobody knows." },
        { s: 'yunjin', f: 'flustered', t: "...I called you something on the roof yesterday. You heard it. Don't pretend you didn't. Wifey. I don't even know where I got that. It just came out like I'd been saying it for years." },
        { n: "She shook her head, hard, as if there were water in her ear. Out on the harbor a ship's horn went, one long low note, and she flinched at it and then pretended she'd been about to stretch." }
      ] },
      { n: "She drank her coffee. It was terrible. She made the face she always made. Then she put the can down on the concrete beside her, very carefully, exactly in line with the other one, and looked out at the water, at all that high gray water with nothing under it you could see." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'yunjin', f: 'sad', t: "I sat next to him. At the long table. In June. The night it rained. He gave me his pickles because I said I liked them and he didn't. He said it was a fair trade. He said here was the best place to do anything." },
        { s: 'yunjin', f: 'sad', t: "Two, Sol. That's two now. Here. Where nobody's supposed to die." }
      ], else: [
        { s: 'yunjin', f: 'sad', t: "It's one. That's what I keep doing. Counting. One man. Here. I met him twice. I said good evening to him in a lobby and he said good evening back and did his crossword." },
        { s: 'yunjin', f: 'serious', t: "One. That's all I can think. One's so small. One's nothing." }
      ] },
      { s: 'yunjin', f: 'serious', t: "At home I count too. You know I do. I'm not going to say what. You know what. And you know it's not one." },
      { n: "She said it flat, and very quietly, and didn't look at Solar while she said it, and Solar didn't need her to. It was in the way she was sitting. It had been in the way she'd sat since a riverside in winter, upright, braced, like somebody on a bus that was always about to brake." },
      { ifEvent: 'eqx-second-hill', then: [
        { s: 'yunjin', f: 'neutral', t: "You told me what it said. Down there. The thing made of water with the calendar for a face. Shinjiro told me too, at breakfast, without looking up, like he was telling me the weather. Sit down, it said. Stay where nobody dies." },
        { s: 'yunjin', f: 'sad', t: "And I thought, that's the nicest thing anybody's said to me since winter. And it came out of a hole in the ground." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "At the gate it was so quiet. Down there. Like a whole town had sat down at once and stopped talking. I stood on the edge and I kept thinking, nobody dies somewhere this quiet. Nobody could. There's no room for it." },
        { s: 'yunjin', f: 'sad', t: "And then I thought, that's the nicest thing I've thought since winter. And I thought it standing on the edge of a hole in the ground." }
      ] },
      { n: "A gull walked along the rail toward them, stiff-legged, and stopped, and looked at the cans. Yunjin didn't shoo it. She looked at it, and it looked at her, and the sea breathed against the wall below their feet, in, and out, in, and didn't go anywhere." },
      { s: 'yunjin', f: 'neutral', t: "So I'm asking you. Not it. You. Because you're the only one who's been to both. You know what it's like here, and you know what it's like there, and you're not going to lie to me, because you never have, not even when I wanted you to." },
      { s: 'yunjin', f: 'serious', t: "Tell me I can stay. Tell me here's still better. Even with one. Even with whatever it is. Tell me it's still better than there, and I'll believe you, and I'll turn my light off, and I'll stop doing maths on my hand." },
      // CG: eqx-two-tables — a seawall at high water; two tide tables side by side on the concrete, one printed, one hand-copied in pencil, each weighed down by a coffee can; a girl's hand palm-down on the handwritten one, two times inked on the back of it.
      { n: "She'd held her left hand out, palm up, as she said it, between them, on the concrete, the two times on the back of it turned down and hidden. She didn't seem to know she'd done it. It was the shape her hand made in the night, Solar thought. Open. Waiting for something to be put in it, or taken out." },
      { choose: [
        { t: "Stay, Jin. Here's better. Turn your light off.", notes: 3, tally: { cakes: 1, 'asks.yunjin': 'yes' }, then: [
          { n: "Yunjin closed her eyes. She sat like that for a long moment, very still, with the wind pulling her hair across her face, and then she let out a breath, and her whole body let go with it, the shoulders, the braced back, all of it, the way a rope goes slack when somebody finally lets go of the other end." },
          { s: 'yunjin', f: 'happy', t: "...Okay. Okay. You said it. That's binding. You can't take it back, that's a contract, that's a man selling you a car." },
          { n: "She took her pen and, carefully, crossed out the lower of the two times on the back of her hand. *There.* One neat line. Then she licked her thumb and rubbed at it until it was a blue smear, and then until it was nothing, and held up her hand to show Solar, clean, with only the one time on it." },
          { s: 'yunjin', f: 'neutral', t: "One clock. See? Easy. I don't know why I didn't do that weeks ago." }
        ] },
        { t: "I'm not going to be the one who says, Jin. That's yours.", notes: 2, tally: { choose: 1, 'asks.yunjin': 'choose' }, then: [
          { s: 'yunjin', f: 'sad', t: "...You're doing the light switch thing. You did this in April. Mine to choose." },
          { s: 'solar', f: 'neutral', t: "It still is." },
          { s: 'yunjin', f: 'serious', t: "It's not a light switch, Sol. It's— it's everything. You can't hand me everything and say it's mine. That's not fair. That's the least fair thing you've ever done." },
          { n: "She took her hand back off the concrete. She didn't cry. She looked at the water with her jaw set, for a long time, the way she'd looked at the gate in the Well, and Solar sat beside her and didn't take anything back, and it was one of the hardest things she'd ever not done." },
          { s: 'yunjin', f: 'neutral', t: "...Fine. Mine. Then I'm keeping both clocks. I'll decide when I decide. You don't get a vote. You gave it away." }
        ] },
        { t: "I can't tell you that. Here isn't safe either. You've seen it isn't.", notes: 2, tally: { 'asks.yunjin': 'no' }, then: [
          { n: "Yunjin flinched as if the gull had gone for her. Then she nodded, short, once, and kept nodding, and pulled her hand in off the concrete and folded both arms across her chest, tight, structural." },
          { s: 'yunjin', f: 'sad', t: "...Yeah. Yeah. I knew you'd say that. That's why I asked you. I knew you wouldn't lie." },
          { s: 'yunjin', f: 'neutral', t: "I hate it. I hate that you're right. I'm going to go and be angry at a gull about it for a while." },
          { n: "She didn't go anywhere. She sat there with her arms folded and her shoulders up round her ears, and after a minute she leaned sideways, hard, against Solar's shoulder, and stayed, and didn't say anything else, and the light was going." }
        ] }
      ] },
      { n: "The sun went down behind the cranes on the far side, and the water went from green to gray to the color of a knife. The gulls lifted off the rail, all at once, the way they did, for no reason anybody had ever discovered, and wheeled out over the harbor and came back and settled again, a little further along." },
      { ifEvent: 'eqx-hunted', then: [
        { s: 'yunjin', f: 'neutral', t: "Come on. Twos. I'm walking the girls home after. They won't leave that house. Mitsuru boxed their names on the whiteboard like they're on a watch list. They are on a watch list. My watch list." }
      ], else: [
        { s: 'yunjin', f: 'neutral', t: "Come on. I'm walking back the long way. Past the shrine. Not the river. I don't do the river after dark anymore. I'm not saying why. I'm just a girl with a route." }
      ] },
      { place: 'Iwatodai Dorm · Solar\'s Room', time: 'Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven there was a knock at her door. Three soft ones, very fast, and then Yunjin's voice through the wood, *it's me, it's just me, it's the normal me*, which in this house in this year was its own kind of password." },
      { n: "She came in in a big T-shirt with her pillow under her arm and stood in the middle of the floor and looked at the ceiling light, and then at Solar, and then at the light again." },
      { s: 'yunjin', f: 'flustered', t: "Don't make it weird. I'm trying something. I want to see if I can do it with somebody in the room." },
      { choose: [
        { t: "(Turn the light off. Sit with her in the dark.)", notes: 3, flag: 'eqx-yunjin-dark', then: [
          { n: "She turned the light off. The room went black and then, slowly, gray, the streetlamp coming in round the edge of the curtain, the shape of the desk, the shape of the bed, Yunjin sitting on the end of it with her pillow in her lap, very straight, breathing like someone counting her breaths." },
          { n: "They sat like that for an hour. Not talking. At some point Yunjin's hand found Solar's in the dark and held it, and held it hard, and then, slowly, a finger at a time, held it less hard, until it was just resting there, open, on top of hers, warm, the way you'd rest your hand on a dog's side to feel it breathe." },
          { n: "At midnight the red came up through the floor like water rising in a glass, and Yunjin's hand closed on hers, once, all at once, and then opened again. On purpose. Solar felt her do it. She felt her decide." }
        ] },
        { t: "(Leave the light on. Make room on the bed.)", notes: 2, then: [
          { n: "She left the light on. She moved over. Yunjin lay down on top of the covers with her pillow and her back to the wall and her eyes on the bulb, and didn't say thank you, and didn't need to, and was asleep in twenty minutes with her hand under her cheek, closed, and Solar lay awake beside her and watched it, all through the red, and it didn't open, and it didn't close any tighter either." }
        ] }
      ] },
      { n: "In the morning Yunjin was gone, the pillow with her, and there was a text on her phone from five forty, from somewhere else in the house." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "slept. some" },
        { from: 'yunjin', t: "don't tell me what time it is. i want to guess" }
      ], contact: 'yunjin 🦋' }
    ] },
    { after: '7/4', title: '4: the space on my left', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { bg: 'harbor' },
      { n: "July had come in wet and stayed wet. Not raining, exactly; the rain had stopped for the afternoon, but the air hadn't been told, and it hung over the harbor so thick and warm you could feel it settle on your arms like a damp cloth, and the gulls sat on the rail with their feathers puffed out and their eyes half shut, too heavy to bother. The tide was halfway. Going out. The mud showing in long shining tongues between the moorings." },
      { n: "Yunjin was on the seawall with her legs over the drop. Two cans. But she wasn't alone." },
      { n: "There were four girls on the steps below her. Not on the wall; on the slipway steps going down to the mud, in a row, one to a step, the way birds sit on a wire. Chaewon with a notebook on her knees. Sakura flat on her back on the warm concrete with her arm over her eyes. Kazuha with her legs stretched out and her toes pointed, absently, as if her feet couldn't help it. Eunchae, on the lowest step, closest to the mud, with her phone up, filming the water." },
      { s: 'yunjin', f: 'happy', t: "Sol! Sol, come here, I brought the whole set. Look at them. Look at my girls on my steps. Aren't they disgusting." },
      { choose: [
        { t: "(Sit down on the wall next to her. Take the can.)", notes: 3, then: [
          { n: "She sat down next to her and took the can, and Yunjin bumped her shoulder hard enough to nearly put her over the edge, and below them Sakura lifted her arm off her eyes and looked up at the two of them and said *oh, it's her*, in a tone Solar couldn't place, and put her arm back." }
        ] },
        { t: "Your girls?", notes: 2, then: [
          { s: 'yunjin', f: 'flustered', t: "My girls. Ours. The girls. Shut up. It's a figure of speech. I don't own them, they're people, they'd never let me." },
          { s: 'yunjin', f: 'neutral', t: "...They feel like mine. I don't know why. Sit down." }
        ] },
        { t: "(Wave to the steps.)", notes: 2, then: [
          { n: "She waved. Eunchae waved back without lowering her phone. Kazuha bowed, sitting down, a small neat bow from the waist. Chaewon lifted her pen. Sakura, flat on her back, raised one hand without moving anything else, and dropped it." }
        ] }
      ] },
      { n: "They'd come through on the night of the eclipse. Solar had been in the atrium; she'd seen it. Four girls dancing in the red in a mall at midnight, in four different rooms' worth of clothes, to music that wasn't playing, and Yunjin pushing past Haechan to get to them, and then stopping, and standing very still in front of them with her hands at her sides, the way you stand in front of a photograph of yourself you don't remember being taken." },
      { n: "They'd known her. That was the thing. They'd known her the way you'd know a girl from your dance studio in Songdo, in one life. And they'd known each other in two more, where Yunjin wasn't." },
      { s: 'yunjin', f: 'neutral', t: "They live at the boarding house now. Mrs. Oka gave them the big room upstairs, all four of them, futons in a row like a sleepover. She makes them breakfast. She does their laundry. She puts a little flower on each of their pillows, I'm not even joking, a little flower from her garden, every night." },
      { s: 'yunjin', f: 'neutral', t: "I walk them home. Every night after practice. Down the river street. I get them to the gate, and she's always at the gate, every single time, like she can hear us coming from the bridge." },
      { s: 'yunjin', f: 'serious', t: "And I don't go in. I don't know why. She asks me in every night. *Come in, child, there's plenty.* I say I've got to get back. I've never once had to get back." },
      { ifFlag: 'eqx-oka-ricecake', then: [
        { s: 'yunjin', f: 'flustered', t: "Which is insane, by the way. Because I'm still thinking about that rice cake. From April. I think about it every time I'm at that gate. I stand there and my mouth waters like a dog's. And I still don't go in." }
      ] },
      { ifChoice: { 'asks.yunjin': 'yes' }, then: [
        { n: "She held up her left hand to push her hair back, and Solar saw the back of it. One time. Here. Blue ballpoint, freshly done today, the way she did it every morning now. Under it, where the other one had been, the skin was clean and a little pinker than the rest, as if she'd scrubbed at it for weeks after there was nothing left to scrub." },
        { s: 'yunjin', f: 'happy', t: "Light's off. Every night. Since you said. I sleep like I've been hit with a shovel." },
        { s: 'yunjin', f: 'neutral', t: "I don't even wake up for the red anymore. Hanni says I sleep straight through it. She checks on me. She says I look like a doll somebody put down." },
        { s: 'yunjin', f: 'neutral', t: "...My hand's still shut, though. When I wake up. I don't wake up in the night, I don't feel it close, I just wake up in the morning and it's already shut. Every morning. And I have to open it with the other one. Like it's not mine." },
        { n: "She said it lightly, the way she'd said *don't make it a thing* in April, and put her hand back in her lap, closed, without noticing she'd closed it." }
      ], else: [
        { n: "She held up her left hand to push her hair back, and Solar saw the back of it. Two times. Here, there. Freshly done, both, blue ballpoint, a line between them like a fraction, the way she'd done it every morning since June." },
        { ifChoice: { 'asks.yunjin': 'no' }, then: [
          { s: 'yunjin', f: 'neutral', t: "Light's on. Since you said. Not because you said. Because you were right. I hate that you were right. I'm still angry at a gull about it." },
          { s: 'yunjin', f: 'neutral', t: "I wake up at three most nights. Hand shut. I open it. I check the time at home on the back of it. Twelve-forty, one-ten, whatever it is. I go back to sleep. It's a system. Hanni would be proud." }
        ], else: [
          { s: 'yunjin', f: 'neutral', t: "Light's on, light's off. I decide every night. Fresh. It's exhausting. You did that to me. Thank you, I hate you." },
          { s: 'yunjin', f: 'neutral', t: "Some nights I turn it off and lie there and then I turn it on again because I want to, not because I'm scared. You know how different that is? You don't. Nobody does. I didn't." }
        ] }
      ] },
      { n: "Below them on the steps Chaewon said something in Korean to Kazuha about a count, and Kazuha answered in Japanese, and Chaewon answered that in English, without seeming to notice she'd changed, and Eunchae laughed at something on her screen, and Sakura said *shh* from under her arm, to nobody, and they were so easy with each other, the four of them, so finished, like a sentence that had always known where it was going." },
      { s: 'yunjin', f: 'neutral', t: "They've got three lives each. Did you know that? Three. Like you. They told me on the second night. Sakura's got one where she talks about video games on the internet for a living. Kazuha's got one where she's in a school with a council. They're all in each other's." },
      { s: 'yunjin', f: 'sad', t: "And I've got one. And a bit. My one, and here, and last year. I'm in one of theirs. One. The Songdo one. In the other two I'm just... not there. I asked. I made Chaewon think really hard. She said she was sorry. She said it really nicely, which was worse." },
      { s: 'yunjin', f: 'neutral', t: "So there's four girls who are all three girls, and me. And I'm the one who keeps standing in the wrong place." },
      { choose: [
        { t: "You're not in the wrong place. You're here.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "I'm literally in the wrong place, Sol. At rehearsal. Chaewon moves me. I drift back. Every time. I'll show you." }
        ] },
        { t: "One and a bit is a lot. I only started with one.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "...You started with one and ended up with three and a town. That's not a comfort, babe, that's a warning." },
          { n: "But she laughed, short, and her shoulder came up against Solar's and stayed there." }
        ] },
        { t: "(Don't say anything. Watch the girls with her.)", notes: 3, then: [
          { n: "She didn't say anything. She sat with Yunjin and watched the four of them on the steps, Kazuha's toes, Eunchae's phone, Sakura's arm, Chaewon's pen moving across the notebook in small neat counts, and after a while she felt Yunjin's breath go long beside her, the way breath goes when you stop holding it on purpose." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Come here. Stand up. I want to show you something. Don't laugh. If you laugh I'm pushing you in the harbor and I'll tell Mitsuru you slipped." },
      { n: "She stood up on the seawall. On the wall itself, the flat concrete top of it, a meter wide with the mud on one side and the walkway on the other, and she put her cans down and stood with her feet apart and her arms loose, and looked down at the steps, and said, in the counting voice, *five, six, seven, eight*, and below her, without a word, the four girls on the steps sat up, all of them, and started counting under their breath." },
      { n: "And Yunjin danced. Not all of it. A few bars. The part they called the bridge, the part she'd made up in a studio in Songdo in another life, a turn and a reach and a drop, small, careful, on a meter of concrete above the mud, her sneakers squeaking. And on the reach she turned to her left, every time, and her arm went out to the left, palm up, to the air beside her, for somebody to take." },
      { n: "There was nobody there. There was the air over the walkway and the gray sky and a gull on the rail looking unimpressed." },
      { s: 'yunjin', f: 'serious', t: "...See. Every time. My arm does that. Chaewon says it's a habit from Songdo. It's not. In Songdo I was at the end of the line. There was nobody on my left. There was a wall." },
      { s: 'yunjin', f: 'serious', t: "I dreamed it on Thursday. I was on a stage. A real one. Big, with the lights, the hot kind, the kind that make you go deaf. And I did this. And somebody took my hand. On my left. And it was you." },
      { s: 'yunjin', f: 'sad', t: "We were wearing the same clothes. Like a group. And I looked at you and said a word I don't know. I woke up saying it. Wifey. What is that. Where did I get that. I've never called anybody that in my life, and I said it in my sleep like I'd been saying it for years." },
      { n: "She said it fast, the way you'd say something you'd been holding in your mouth too long. Her arm was still a little out to the left. She hadn't noticed. Below them on the steps nobody was counting anymore, and Kazuha was looking up at the two of them with a very still face." },
      // CG: eqx-left-side — a girl in a yellow puffer dancing on top of a harbor seawall under a heavy gray sky, mid-turn, her left arm held out, palm up, to the empty air beside her; four girls sitting on the slipway steps below, looking up.
      { choose: [
        { t: "(Step up onto the wall. Stand on her left. Take her hand.)", notes: 3, flag: 'eqx-yunjin-left', then: [
          { n: "She stood up on the wall. On Yunjin's left. She didn't think about it; her feet went there, the way they'd go to the top stair in the dark. She put her hand in Yunjin's open one, and Yunjin's fingers closed on it at once, exactly, as if her hand had been shaped for that grip and had been waiting for it." },
          { n: "Neither of them moved for a second. The gull lifted off the rail. Down on the steps Eunchae, very slowly, lowered her phone." },
          { s: 'yunjin', f: 'surprised', t: "...Oh. Oh, that's— that's the right place. That's exactly the place." },
          { s: 'yunjin', f: 'flustered', t: "Get down. Get down, this is so weird, get down before I cry on a wall." },
          { n: "But she didn't let go of the hand. They stood on the seawall holding hands above the mud like two girls at the end of a show waiting for the curtain, and the curtain didn't come, and after a while she let go, finger by finger, the way she'd opened her hand on the harbor steps in April, checking she still could." }
        ] },
        { t: "Maybe it's somewhere you haven't been yet.", notes: 3, then: [
          { s: 'yunjin', f: 'serious', t: "...What, like the future? Don't. Don't say that. That's worse." },
          { s: 'yunjin', f: 'neutral', t: "Everybody else here's got memories. I've got a memory of something that hasn't happened. That's not a memory, Sol. That's a door." },
          { n: "She put her arm down. She looked at it as if it belonged to somebody else, and then shoved her hand in her puffer pocket, and kept it there." }
        ] },
        { t: "It's a dream, Jin. You've been rehearsing every day.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Yeah. Yeah, okay. A dream. I've been rehearsing a lot. My body's confused. That's all it is." },
          { n: "She sat back down on the wall, hard, and picked up her can, and didn't look at her left side again for the rest of the afternoon. Solar watched her not look. It took effort. You could see it in her neck." }
        ] }
      ] },
      { ifEvent: 'eqx-tanabata', then: [
        { s: 'yunjin', f: 'neutral', t: "Did you see the strips? At the shrine. After Tanabata. Every one of them, on the back. *Stay.* In that writing. The heavy one." },
        { s: 'yunjin', f: 'neutral', t: "I didn't write a wish on mine. I wrote a time. The tide at home, the morning after. Twelve-forty. I wanted to see if it'd still be the time I wrote when I came back." },
        { s: 'yunjin', f: 'serious', t: "It was. They didn't touch the front. Just the back. *Stay*, under my tide. Like somebody answering a question I didn't ask." }
      ] },
      { n: "The light went. Not the sun; the sun had never come out. The gray just got darker, all at once, the way it does under heavy cloud at the end of a summer day, and the lamps came on along the seawall, and down on the steps Chaewon closed her notebook and stood up and said, in English, *okay, girls, home*, and the others stood up too, all at once, the way they did everything." },
      { n: "Mrs. Oka would be at the gate. Solar knew it the way you know a step is there. A tray of barley tea, already poured, the ice not melted. *Come in, child.*" },
      { s: 'yunjin', f: 'neutral', t: "Walk them home with me. Please. I don't— I just like more of us at the gate. Twos. Fives. Sixes. Whatever. More." },
      { choose: [
        { t: "(Walk them all home. Go in when she asks.)", notes: 2, then: [
          { n: "She walked them home. Six of them down the river street in the lamp light, the four girls in front with their arms linked, and Mrs. Oka at the gate with the tray, exactly, the ice in the glasses not yet melted, as if she'd poured them as they turned the corner. *Come in, come in, there's plenty.*" },
          { n: "Solar went in. Just to the step. Just for a glass of barley tea in the hall, with the girls taking their shoes off round her and Mrs. Oka's gloved hand warm on her shoulder; and when she came out Yunjin was still at the gate, outside it, on the street side, with her hands in her pockets. She hadn't come in. She looked at Solar's glass, and then at Solar, and didn't say anything all the way home." }
        ] },
        { t: "(Walk them home. Stop at the gate with Yunjin. Don't go in.)", notes: 3, flag: 'eqx-yunjin-gate', then: [
          { n: "She walked them home, and stopped at the gate with Yunjin, outside it, on the street side, and Mrs. Oka held out the tray, and Solar said thank you, and that they'd got to get back, and Mrs. Oka smiled and said *of course, of course, another night*, and took the girls in, one by one, her gloved hand on each of their backs, and shut the gate." },
          { n: "Yunjin let out a breath. She took Solar's arm, above the elbow, the way she'd held it on the slipway in April, and they walked home under the lamps, and at the corner she looked back once, and Mrs. Oka was still at the gate, small and gray, waving, though there was nobody left on the street to wave at but them." }
        ] }
      ] },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven-fifty her phone went on her chest." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "the girls are home. i texted all four. all four said goodnight" },
        { from: 'yunjin', t: "i count them now too. don't tell anyone. 1 2 3 4" }
      ], contact: 'yunjin 🦋' }
    ] },
    { after: '8/18', title: '5: open return', place: 'Port Island · Pier', time: 'Daytime', music: 'tender', scene: [
      { bg: 'port-island-pier' },
      { n: "The heat had broken for one day. Nobody trusted it. A wind had come in off the bay in the night and blown the haze out to sea, and the morning was blue and hard and clean, the kind of late-August day that already smells faintly of the autumn behind it, and the water in the harbor was so clear you could see the green weed swaying on the pier's legs a meter down, and the small silver fish turning in it all at once, like a hand." },
      { n: "Yunjin wasn't on the seawall. Her text had said *pier. the end.* and nothing else, and Solar walked the length of it in the wind, past the bollards and the iron rings and the places where the old men's folding stools had worn pale squares into the boards, all the way out, to where there was nothing left but the rail and the sea." },
      { n: "She was sitting on the boards at the very end with her back against the last bollard and her knees up. Two cans. And beside her, on the bollard's flat iron top, a small white saucer, upside down." },
      { s: 'yunjin', f: 'neutral', t: "Don't touch that. I haven't. I've been sitting next to it for an hour not touching it. It's been very relaxing." },
      { choose: [
        { t: "(Sit down on her other side. Away from the saucer.)", notes: 3, then: [
          { n: "She went round and sat down on Yunjin's other side, so that Yunjin was between her and the bollard, and Yunjin noticed, and didn't say anything, and handed her a can, opened, without looking." }
        ] },
        { t: "Whose is it?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "The fisherman's. The last one. The one who said no." },
          { s: 'yunjin', f: 'neutral', t: "Akihiko-sunbae told me. He said it was here when we got back off the boat. He said the old man used to sit exactly here, every morning, and now there's this, upside down, and nobody's seen him." },
          { s: 'yunjin', f: 'serious', t: "Kazuha says upside down means it was accepted. She says it like she's reading off a sign. I asked her who told her that and she didn't know." }
        ] },
        { t: "(Pick the saucer up.)", notes: 1, then: [
          { n: "She reached past Yunjin for it, and Yunjin's hand shot out and closed on her wrist, hard, before her fingers were halfway there, and held." },
          { s: 'yunjin', f: 'serious', t: "No. Sit down. Sit down, Sol. I mean it." },
          { n: "She didn't let go of the wrist until Solar was sitting." }
        ] }
      ] },
      { n: "The saucer sat on the bollard with the blue sky behind it. White. Plain. The kind you'd find in any kitchen in town. There was a faint pale ring on the iron round its rim, like a ring of salt, or like the mark a glass leaves, and the wind came along the pier and didn't move it, and didn't move the ring either." },
      { ifEvent: 'eqx-incheon', then: [
        { s: 'yunjin', f: 'neutral', t: "We were gone four days. Four. When we left he was here. When we came back there was this. Nobody's said he's dead. Nobody's said anything. He's just not on his stool." },
        { s: 'yunjin', f: 'sad', t: "I slept with the light off both nights in Incheon. I told you. I slept like I'd been born there. And when I got off the boat I walked down the pier to say hello to him, I don't even know why, I'd never said hello to him in my life, and he wasn't here." }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Okay. Thing. Don't make it a thing." },
      { n: "She unzipped the chest pocket of her puffer, which she was wearing open over a T-shirt in August because she always was, and took out a folded piece of card and held it out between two fingers, not toward Solar, just out, in the wind, as if she wanted the air to see it first." },
      { n: "A ferry ticket. The Group's own line, the hydrofoil, Port Island to Incheon. One adult. Open return. In the space for the date, nothing at all." },
      { s: 'yunjin', f: 'neutral', t: "I bought it at the ferry office on Saturday. From my man. The marine biology man. He was so happy to see me. He thinks I'm doing fieldwork." },
      { s: 'yunjin', f: 'neutral', t: "Open return. You can go any day. It doesn't say which. It doesn't say when you come back. It just says you can." },
      { s: 'yunjin', f: 'serious', t: "I'm not asking you anything. I want that on the record, Jungwon-style. I learned. In June I asked you to tell me something and you wouldn't, or you did, and either way I learned. I'm not asking." },
      { s: 'yunjin', f: 'sad', t: "I'm just telling you I've got it. In my pocket. Every day. And some mornings I take it out and look at it and think about the water in Incheon at twelve-forty, the right water, and nobody in that whole city who's ever going to knock on my door." },
      { choose: [
        { t: "(Hold out your hand. Let her decide whether to put it in.)", notes: 3, flag: 'eqx-yunjin-ticket-held', then: [
          { n: "She held out her hand, palm up, between them, and didn't say anything. Yunjin looked at it for a long time. Then she put the ticket in it, carefully, and closed Solar's fingers over it with her own, one at a time." },
          { s: 'yunjin', f: 'neutral', t: "...Just hold it. Not keep. Hold. I'll ask for it back. When I want it. You give it back, whenever I ask, no questions. Deal?" },
          { s: 'solar', f: 'neutral', t: "Deal." },
          { s: 'yunjin', f: 'neutral', t: "Like a man selling you a car." },
          { n: "They shook on it, the ticket between their palms. It was warm from her pocket. Solar put it in her own, and felt it there for the rest of the day, a small flat square over her ribs, like a second heartbeat that didn't belong to her." }
        ] },
        { t: "It's yours. If you go, you go. I'll come and see you off.", notes: 2, flag: 'eqx-yunjin-ticket-kept', then: [
          { s: 'yunjin', f: 'serious', t: "...See me off. Wow. Okay. You'd do that." },
          { s: 'solar', f: 'neutral', t: "I'd hate it." },
          { s: 'yunjin', f: 'sad', t: "Yeah. Good. I want you to hate it. I'd want you to hate it a lot." },
          { n: "She folded the ticket back along its crease and put it in her chest pocket and zipped it, slowly, and kept her hand flat over the pocket for a while after, as if it might get out." }
        ] },
        { t: "(Take it out of her fingers and tear it in half.)", notes: 1, flag: 'eqx-yunjin-ticket-torn', then: [
          { n: "She took it out of Yunjin's fingers before she'd thought about it and tore it, once, across the blank where the date should have been. It made a small dry sound in the wind." },
          { n: "Yunjin didn't move. She looked at the two halves in Solar's hands for a long moment. Then she took them, gently, both, and put them back together on her knee, edge to edge, and held them there with her palm, the way you'd hold a cut shut." },
          { s: 'yunjin', f: 'sad', t: "...That was mine, Sol." },
          { s: 'yunjin', f: 'neutral', t: "It's okay. I'll tape it. My man'll give me another one, he likes me. That wasn't your call. I know why you did it. It still wasn't your call." }
        ] }
      ] },
      { ifEvent: 'eqx-rehearsal', then: [
        { s: 'yunjin', f: 'neutral', t: "She asked us. Did you hear? In the tatami room. *You'll stay together, won't you, girls.* And all four of them said *we will*. All at once. Like a choir. Like a door shutting." },
        { s: 'yunjin', f: 'serious', t: "I didn't say it. I stood there with my mouth shut. She looked at me after, at the gate, with this little sad face, like I'd forgotten to say thank you for a present." },
        { s: 'yunjin', f: 'neutral', t: "I want to stay together. I want it so badly I can taste it. I just didn't want to say it to her." }
      ] },
      { ifEvent: 'eqx-table-op', then: [
        { s: 'yunjin', f: 'neutral', t: "And now your mom's here. Your eomma. The one from the house. She looked at me at breakfast at the boarding house like she knew exactly who I was and exactly what I'd been doing at three in the morning for a year." },
        { s: 'yunjin', f: 'sad', t: "She put more rice in my bowl without asking. That's all. That's all she did. I had to go and stand in the garden." }
      ] },
      { n: "The wind dropped. It did that out here sometimes, all at once, as if somebody had shut a window. The harbor went flat and bright, and the fish on the pier's legs a meter down hung in the clear water, and the gulls on the far bollards stopped talking. The saucer sat on the iron in the sudden stillness and didn't move, and Solar realized she'd been waiting for it to." },
      { s: 'yunjin', f: 'neutral', t: "High tide's at two. It's one-forty." },
      { s: 'yunjin', f: 'neutral', t: "...I want to go in. The water. In the daytime. I haven't been in the sea since winter. Not since. You know. I haven't even had my feet in it, except that night on the slipway, and that doesn't count, that was the red." },
      { s: 'yunjin', f: 'serious', t: "In the daytime it always turns. I said that. I want to see if I believe it." },
      { choose: [
        { t: "(Kick your shoes off. Go in with her.)", notes: 3, flag: 'eqx-yunjin-swim', then: [
          { n: "They went in off the steps at the foot of the seawall, where the slipway ran down into the water at high tide and the concrete was green and slick and warm from the sun. Yunjin went first. She took the puffer off for the first time Solar had seen since April, and folded it, and put it on the top step like something she was leaving in someone's care, and went down the slipway in her T-shirt and shorts until the water was at her knees, and stopped." },
          { n: "It was cold. Clean, bright, shocking cold, the cold of a sea that had come in from a long way out overnight. Solar came down beside her and the cold went up through the soles of her feet and closed round her shins like two hands, and she gasped, and Yunjin laughed at her, a real laugh, loud, the gravel one." },
          { n: "Then Yunjin walked in. Not fast. Step after step, the way you'd walk into the sea in winter to fetch something you'd dropped, the water to her waist, to her ribs, her arms held up out of it at first and then not, and then she tipped her head back and went under, all the way, and the water closed over her, and for one second, two, three, there was nothing on the surface but light." },
          { n: "Solar didn't call her name. She stood in the water to her waist with her hands in fists and didn't call it, and counted, and on four Yunjin came up, gasping, her hair flat to her skull, her face screwed up against the cold, and shouted something at the sky in Korean that Solar was fairly sure was not suitable for gulls." },
          { s: 'yunjin', f: 'happy', t: "IT'S SO COLD. Sol. Sol, it's so cold, it's the worst thing I've ever felt, get in, get all the way in, I'm not being cold by myself—" },
          { n: "They swam out as far as the end of the pier and hung there in the clear water holding on to the iron ring at the base of the last bollard, under the saucer, without looking up at it, their legs going slowly beneath them, the fish turning round their ankles all at once like a hand. The tide came in round them, steady, and turned while they were in it. They felt it. A slackening, a hesitation, and then the pull going the other way, gentle, toward the open sea." },
          { s: 'yunjin', f: 'neutral', t: "...There. It turned. Did you feel it? In the daytime it always turns." },
          // CG: eqx-daytime-tide — two girls in the clear green water at the end of a pier on a bright August day, holding on to an iron ring at the base of a bollard, their hair wet, laughing; above them on the bollard's top, small and white against the blue sky, an upside-down saucer.
          { n: "She said it with her chin on her arm, on the iron ring, her lips gone a little blue, looking at Solar from about ten centimeters away with her eyes very bright, and her other hand under the water had found Solar's and was holding it, not hard, just holding, the way you'd hold a rope you weren't worried about." }
        ] },
        { t: "(Sit on the steps and hold her puffer. Watch her go in.)", notes: 3, then: [
          { n: "She sat on the top step with Yunjin's puffer in her lap, folded, warm from her, and watched her walk down the slipway in her T-shirt and into the sea, step after step, to her waist, to her ribs, and then go under, all the way, and the water close over her; and Solar held the puffer and counted, and didn't stand up, and it was the longest four seconds of the summer." },
          { n: "Yunjin came up shouting. Something in Korean, at the sky, at the cold, at the gulls. Then she turned in the water and looked back up the slipway at Solar on the step with her coat in her lap, and her face did something complicated, and she lifted one hand out of the water, and waved, like somebody on a boat." },
          { s: 'yunjin', f: 'happy', t: "IT TURNED. I felt it. It's turning. In the daytime it always turns!" }
        ] }
      ] },
      { place: 'Port Island · Pier', time: 'Evening', bg: 'port-island-pier', soft: true },
      { n: "They dried off on the boards at the end of the pier in the late sun, shivering, sharing the puffer, both of them inside it with it zipped halfway round their two backs like a tent. The saucer sat on the bollard above them. The pale ring round it on the iron had gone a little darker as the sun came round, the way a stain does when the light changes." },
      { s: 'yunjin', f: 'neutral', t: "...Can I say a thing and you don't make it a thing." },
      { s: 'yunjin', f: 'sad', t: "I've been wanting to go home so much I think it's started to want me back. I don't mean home home. I mean the empty one. The one in Incheon. The one with nobody in it." },
      { s: 'yunjin', f: 'serious', t: "I dream about it now. Not the red one, the slipway, the water with the window in it. The empty one. I walk round it in my sleep. It's so nice. Everything's in the right place. Nobody's ever been hurt there. Nobody's even been born there." },
      { n: "She stopped. She looked at her hands, both of them, open in her lap on the puffer's lining, wet still, wrinkled at the tips from the sea." },
      { s: 'yunjin', f: 'neutral', t: "That's a weird thing to want, isn't it. Somewhere nobody's ever been born." },
      { choose: [
        { t: "It's not weird. It's just tired.", notes: 3, then: [
          { s: 'yunjin', f: 'sad', t: "...Yeah. Tired. That's the word. I'm so tired, Sol. Of counting. I've been counting since winter." },
          { n: "She put her head on Solar's shoulder inside the puffer, wet hair cold against Solar's neck, and left it there, and the sun went down behind the cranes on the far side of the harbor, and neither of them said anything else, and the saucer on the bollard went from white to gold to gray." }
        ] },
        { t: "Nobody being born there means nobody to hold on to.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "...Oh." },
          { s: 'yunjin', f: 'neutral', t: "Oh, that's mean. That's so mean. You're right and it's mean." },
          { n: "But she said it slowly, as if turning it over in her hands, and she didn't let go of Solar's hand under the puffer, and when the lamps came on along the pier she looked at them coming on, one by one, toward the town, the way you'd count heads." }
        ] }
      ] },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven-fifty her phone went on her chest." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "i still smell like the sea. hanni says i smell like a fish market. good" },
        { from: 'yunjin', t: "the girls are home. 1 2 3 4. kazuha put her saucer out on the step again. she says goodnight to it. i didn't ask" }
      ], contact: 'yunjin 🦋' }
    ] },
    { after: '9/29', title: '6: where nobody dies', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      { bg: 'harbor' },
      // BG: port-island-harbor-autumn-rain — the Port Island seawall in a cold late-September rain, the tide out, the mud gray and pocked with rain, boats on their keels, gulls hunched on the rail, the far cranes lost in cloud.
      { n: "It was raining at the harbor, the first cold rain of the autumn, thin and slanted and steady, coming in off the bay in long gray sheets that you could watch cross the mud before they reached you. The tide was out. The rain pocked the mud all over in a fine shivering grain, like the skin on something cold, and the boats lay over on their keels with the water running off their sides, and the gulls had gone, all of them, somewhere Solar couldn't see." },
      { n: "Yunjin was on the seawall. Same place. No umbrella. Her hood was up and the puffer was dark with wet across the shoulders, and she had two cans beside her on the concrete, one opened and one not, the rain ticking off them, and she wasn't drinking either." },
      { n: "She didn't say *you're late*. She didn't say anything. She moved over a little, on the wet concrete, which was the same thing." },
      { choose: [
        { t: "(Sit down. Put your umbrella over both of you.)", notes: 3, then: [
          { n: "She sat down and put the umbrella over the two of them, and the rain went from on them to on it, loud, close, a drumming right over their heads, and the inside of the umbrella was a small gray room with the two of them in it and the harbor out past the edge, and Yunjin looked up at the underside of it for a while as if she'd forgotten what a roof was for." }
        ] },
        { t: "(Sit down in the rain with her. No umbrella.)", notes: 3, then: [
          { n: "She shut the umbrella and sat down beside her in the rain, and the cold of the wet concrete came straight through her skirt, and the rain ran down inside her collar in a single line, and Yunjin looked at her sideways, once, and then reached over and pulled Solar's hood up for her, without a word, and left her hand on it a second too long." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "...It's out. Look. Dead low. Right on the table." },
      { s: 'yunjin', f: 'neutral', t: "It doesn't care. That's what I keep sitting here looking at. Every day since. And it just goes out, and comes in, and goes out. Like nothing. Like a good Japanese train." },
      { n: "Solar had been counting too. Everybody had. The days since the bridge, and the moon over it as big as a room, and the hum, and the three men in their good suits who'd walked the mothers home, and what had been done to them on the walkway in front of everyone, slowly, by something nobody could see properly. The days since the shoes." },
      { s: 'yunjin', f: 'serious', t: "I was right behind her. Did you know that? On the bridge. Your eomma. Behind Ishida-san. I was holding Hanni's sleeve and I was right there, three meters, and he was talking to her, *look at me, ma'am, look at me*, and then he wasn't talking." },
      { s: 'yunjin', f: 'serious', t: "And then the voice. Like a little kid. *Eomma, carry this for me.* And her arms came up." },
      { s: 'yunjin', f: 'sad', t: "I know that voice, Sol. Not whose. What. I've heard a kid say that. At home. At three in the morning. That's what it used. It went into her and found the one thing she'd always say yes to and it asked her for it in that voice." },
      { n: "The rain came harder for a moment, a gust, across the mud and up over the seawall and against them, and went on past toward the town. Yunjin didn't move. She sat with her arms round her knees and the water running off the end of her hood in a thin steady line in front of her face like a bead curtain." },
      { s: 'yunjin', f: 'sad', t: "I heard Aigis. At Chuseok. In the kitchen. The reading. Forty. Warm. One of the four of them at the counter. I was right there in the door and I heard it and I looked at your eomma with her hands in the bowl and I didn't say anything." },
      { s: 'yunjin', f: 'serious', t: "I didn't say anything. I stood there. I thought if I said it out loud it'd be true. So I went and stood in the garden. And a day later." },
      { choose: [
        { t: "Nobody knew what it meant. Aigis didn't know.", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "I know nobody knew. I'm not stupid. I'm not saying I could've stopped it. I'm saying I didn't try. That's different. You know it's different." }
        ] },
        { t: "(Put your arm round her. Pull her in against you.)", notes: 3, then: [
          { n: "She put her arm round her and pulled her in, wet puffer and all, and Yunjin came, stiffly at first, the way a door comes when it's swollen in its frame, and then all at once, her whole weight, her face in Solar's shoulder, and she didn't cry. She shook. She shook for a long time without a sound, the way you shake after you've been in cold water too long, and Solar held on and looked out at the mud and the rain on it and didn't say anything." }
        ] },
        { t: "She'd have said yes to that voice whatever anybody did.", notes: 2, then: [
          { s: 'yunjin', f: 'sad', t: "...Yeah. She would. Wouldn't she. That's the worst part. It knew exactly what to ask." },
          { s: 'yunjin', f: 'serious', t: "It knows exactly what to ask everybody." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "I've been counting. I know. You know I count. Since winter." },
      { s: 'yunjin', f: 'neutral', t: "Here. Mr. Tanabe. Suemitsu-sunbae with his pickles. The fisherman, maybe; nobody's said. Ishida-san. Kubo-san. Sakai-san. And three women who aren't dead, everybody keeps saying, they're not dead, they're just gone, and their shoes are in a row in a hall with the toes pointing home." },
      { s: 'yunjin', f: 'serious', t: "That's here. That's the place where nobody dies." },
      { n: "She laughed. It wasn't a laugh. It came out of her like something coughed up out of water, and she put the back of her wrist against her mouth afterward as if to make sure nothing else came out with it." },
      { s: 'yunjin', f: 'serious', t: "It's been asking me since April, Sol. I worked it out on the bridge. It's been asking me the whole time. The tide stopping in the red. The light switch. The window with the light on in it. Incheon, the right water, nobody in the whole city who'll ever knock on my door. The garden in my dreams with nobody ever born in it." },
      { s: 'yunjin', f: 'serious', t: "*Stay where nobody dies.* That's what it says. That's the whole thing. Every time. In the water, in my sleep. It's not even lying, that's the bit that gets me. It means it. There is a place where nobody dies. It's just that nobody's there." },
      { n: "She said it flat, to the mud. Not a question. A thing she'd found and turned over and held up so Solar could see it, the way you'd hold up something you'd dug out of the sand that you didn't want to be holding: there, that's it, that's what it is." },
      // CG: eqx-where-nobody-dies — a girl in a soaked yellow puffer with her hood up on a seawall in cold autumn rain, her arms round her knees, looking out at a harbor at dead low tide where the mud shines gray under the rain; a closed umbrella and two coffee cans on the wet concrete beside her.
      { choose: [
        { t: "I know. I've heard it too. Not in those words. But I know the voice.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "...You've heard it?" },
          { s: 'solar', f: 'neutral', t: "It asks everybody. It asks me to be who everybody needs. All at once. Here." },
          { s: 'yunjin', f: 'sad', t: "Oh, babe. Oh, that's worse than mine. Mine's just a place." },
          { n: "She took Solar's hand off her knee and held it, wet fingers, cold, hard, the way she held it in her sleep, and they sat in the rain with the thing named between them like a stone on the concrete, and neither of them picked it up." }
        ] },
        { t: "(Don't say anything. Hold on to her hand.)", notes: 3, then: [
          { n: "She didn't say anything. There wasn't anything to say to it that it hadn't already said better. She took Yunjin's hand off her knee and held on, and Yunjin's fingers closed on hers the way they closed in the night, hard, nails in, and then, slowly, on purpose, let go a little, until they were just holding." }
        ] }
      ] },
      { ifFlag: 'eqx-yunjin-ticket-held', then: [
        { s: 'yunjin', f: 'neutral', t: "You've still got my ticket. Haven't you. In your pocket." },
        { s: 'solar', f: 'neutral', t: "I've still got it." },
        { s: 'yunjin', f: 'neutral', t: "...Good. Don't give it back. I mean, give it back if I ask. I'm not asking. I just wanted to know where it was. I wanted it to be somewhere I'd have to ask for it." }
      ] },
      { ifFlag: 'eqx-yunjin-ticket-kept', then: [
        { s: 'yunjin', f: 'serious', t: "I went to the ferry office on Saturday. With the ticket. I stood at the window. My man said *fieldwork again?* and I said yes and he stamped it. A date. Sunday. The seven o'clock." },
        { s: 'yunjin', f: 'serious', t: "I didn't go. I sat on the bollard at the end of the pier at seven and watched the boat go out without me. Then I walked the girls to practice." },
        { s: 'yunjin', f: 'neutral', t: "It's got a date on it now. Expired. I'm keeping it anyway. Proof I didn't." }
      ] },
      { ifFlag: 'eqx-yunjin-ticket-torn', then: [
        { s: 'yunjin', f: 'neutral', t: "I taped it. The ticket. You know that. It's in my pocket, in two halves with tape down the middle, like a scar." },
        { s: 'yunjin', f: 'serious', t: "I took it out on Friday night and nearly went to the office for a new one. Then I looked at the tape. You did that because you couldn't stand it. I keep it so I remember somebody couldn't stand it." }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Chenle came and found me. Last night. In the laundry room, at the dryers, with Fuuka-sunbae. Very serious. Both of them. Like they'd come to tell me I'd failed a test." },
      { s: 'yunjin', f: 'neutral', t: "He says there's a place down there now. On the Second Hill. On the mud, past where the walls stand. Since the equinox. He says on his screen the tide's stopped there at twelve-forty and it never moves, and there's a voice on it, and the voice is mine, reading out tide times. Over and over. Here and there." },
      { s: 'yunjin', f: 'serious', t: "He says it's mine. Fuuka-sunbae says the same. She says it's what I've been asked, made into a place, and that if I'm ever down there with you, maybe I can answer it myself." },
      { flag: 'eqx-floor-yunjin' },
      { s: 'yunjin', f: 'sad', t: "...I don't have a Persona, Sol. I don't have anything. I've got a tide table and a bad coffee habit and a space on my left." },
      { choose: [
        { t: "You've got me. On your left.", notes: 3, then: [
          { s: 'yunjin', f: 'flustered', t: "...Oh, don't. Don't say it like that. Not in the rain. I'm already wet." },
          { n: "But her shoulder came against Solar's on the left side, hard, and stayed, and she breathed out, long, the way you breathe out at the end of the bridge part when you've hit the drop." }
        ] },
        { t: "You walked into the mud in April and came back out. That's not nothing.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "You pulled me out. Or you stood in it with me. I forget which. It was the red. Everything's a mess in the red." },
          { s: 'yunjin', f: 'serious', t: "...I came back out, though. Okay. I'll count that. I'll put it on the hand." }
        ] },
        { t: "You don't have to go down there. Ever.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "I know I don't have to. That's what it'd say too. *You don't have to. Sit down. Stay.*" },
          { s: 'yunjin', f: 'serious', t: "...I'll go. Someday. When I've got something to say to it." }
        ] }
      ] },
      { n: "She unzipped her chest pocket, the one where the ticket had lived in August, and took out a folded square of paper, soft and gray at every crease and gone translucent at the corners from being folded and unfolded so many times; and Solar knew it before it was open. The tide table. The handwritten one. Home. A whole month, in pencil, from memory, the numbers formed the way you form numbers when you want to be sure." },
      { n: "She'd kept it going. Past the month. Down the margin, and on the back, and on a second sheet taped to the bottom of the first, every tide at home since June, worked out from the last, in the same careful pencil. It had the look of something a person had done in the middle of the night instead of sleeping." },
      { s: 'yunjin', f: 'neutral', t: "I want to throw it in. I keep thinking it. Just throw it out over the mud and let the tide take it out to wherever. Stop counting. Stop knowing what time it is there." },
      { s: 'yunjin', f: 'sad', t: "And then I think, if I don't know what time it is there, it's won. Hasn't it. Then there's only here." },
      { choose: [
        { t: "(Fold it back up. Put it in her pocket. Zip it.)", notes: 2, flag: 'eqx-yunjin-table-kept', then: [
          { n: "She took it out of Yunjin's hands and folded it back along its soft creases, carefully, the way you'd fold a letter you meant to keep, and put it in Yunjin's chest pocket, and zipped it, and put her hand flat over it for a second." },
          { s: 'yunjin', f: 'neutral', t: "...Okay. Okay. You've done it now. You've made it a thing." },
          { s: 'yunjin', f: 'neutral', t: "I'll keep counting. It's what I do. Somebody has to know what time it is at home." }
        ] },
        { t: "Throw it if you want. It's yours.", notes: 3, flag: 'eqx-yunjin-table-mine', then: [
          { s: 'yunjin', f: 'sad', t: "...The light switch again. You're always doing the light switch." },
          { n: "She held it out over the edge of the seawall in the rain, over the mud, at arm's length, between two fingers, and the wind pulled at it, and the rain darkened it, the pencil beginning to run. She held it there for a long time." },
          { n: "Then she pulled it back. She didn't fold it. She put it, wet, flat, inside her puffer against her chest, under the hood, and held it there with both arms crossed over it, the way you'd hold something small and cold that you'd decided to keep alive." },
          { s: 'yunjin', f: 'neutral', t: "Mine. I'm keeping it. Not because I'm scared to throw it. Because I want to know." }
        ] },
        { t: "(Hold her other hand while she decides. Don't look at the paper.)", notes: 3, flag: 'eqx-yunjin-table-held', then: [
          { n: "She took Yunjin's other hand, the one without the paper, and held it, and looked out at the mud, not at the table, not at Yunjin's face, so that whatever Yunjin did nobody would have watched her do it." },
          { n: "She heard the zip after a long time. Slowly. Tooth by tooth. When she looked back, the pocket was shut, and Yunjin was looking at the mud too, and her hand in Solar's was open, palm to palm, not holding hard." },
          { s: 'yunjin', f: 'neutral', t: "...Don't ask." },
          { s: 'solar', f: 'neutral', t: "I wasn't going to." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "The girls are still at the boarding house. Did you know? After. With the shoes in the hall. I begged them. I stood in the tatami room and begged, Sol. I'm not proud. Come to the dorm, sleep on our floor, Hanni'll make a rota, anything." },
      { s: 'yunjin', f: 'sad', t: "Chaewon said *we'll stay together*. Just like that. All four of them nodding. She said it exactly like *her*. The same little tune. I don't think she even heard herself." },
      { s: 'yunjin', f: 'neutral', t: "Go and see them. Will you. Kazuha, Eunchae, all of them. They'd like it. They like you. I like it when somebody else has been in that house and come back out and can tell me they're still all there." },
      { n: "The rain had thinned to almost nothing. The tide had turned while they sat, the way it always did in the daytime, so slowly you could only tell by the boats; one of them, out at the moorings, had lifted off its side and stood up straight in a few centimeters of new water, as if it had just woken." },
      { s: 'yunjin', f: 'neutral', t: "...There. It turned." },
      { s: 'yunjin', f: 'serious', t: "I'm going to keep coming here and watching it turn. Every day. Until I believe it again or until I don't. Come with me. Not every day. Just some." },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven-fifty her phone went on her chest." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "light on. not scared. just on" },
        { from: 'yunjin', t: "the girls are home. 1 2 3 4. i stood at the gate till their light went off. she waved at me from the kitchen window. i didn't wave back" }
      ], contact: 'yunjin 🦋' },
      { n: "She lay in the dark and listened to the rain start again, softly, on the dorm's roof, and thought about a girl standing at a gate on the river street at eleven at night with her hands in her pockets, not going in, counting to four; and about a woman in a lit kitchen window with her gloves on, waving, and waving, though there was nobody left on the street to wave at but her." }
    ] },
    { after: '11/7', title: '7: bari', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      // BG: port-island-harbor-november — the Port Island seawall on a clear cold November afternoon, the tide coming in fast under a north wind, whitecaps in the harbor, gulls hanging still on the wind over the moorings, the far cranes sharp against a hard blue sky.
      { bg: 'harbor' },
      { n: "The wind had come round in the night and was blowing from the north now, and the harbor was all edges. Whitecaps on the incoming tide, short and hard and slapping at the foot of the seawall; the gulls hanging on the wind over the moorings without moving their wings, as if somebody had pinned them there; the cranes on the far side so sharp against the hard blue sky that you could have counted the cables. Everything smelled of salt and cold iron. It was the first afternoon of the year that felt like winter, and the whole town had noticed, and put its coat on." },
      { n: "Yunjin was on the seawall. Same place. Two cans. But she was sitting the wrong way round, with her back to the water and her legs hanging down over the walkway side, facing the town, and she wasn't wearing the puffer. The puffer was on the dorm's laundry rack. It had been since the garden; the salt had got into it and it wouldn't go soft. She had Haechan's old jacket on instead, the brown one with the corduroy collar he'd given up on in March, zipped to the chin, the sleeves pulled down over her hands." },
      { s: 'yunjin', f: 'happy', t: "Sol! Sit. Sit, sit. This way. I'm facing the town now. I've decided. I've looked at that water enough for a whole life." },
      { choose: [
        { t: "(Sit down beside her. Facing the town.)", notes: 3, then: [
          { n: "She sat down beside her, facing the town. It was a strange thing to see from here. Roofs, and the monorail going over them on its long legs, and a balcony with a line of washing snapping in the wind, and a kid on a bike with a bag of shopping hung off each handlebar, wobbling. She'd sat on this wall since April and never once looked at the side of it with people on it." },
          { s: 'yunjin', f: 'neutral', t: "See? It's nice. It's all just people doing stuff. I never noticed. I was too busy watching a tide like it owed me money." }
        ] },
        { t: "You're wearing Haechan's jacket.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "He gave it to me on the stairs the morning after. He didn't say anything. He just held it out. The way you'd hold a towel out to a dog that's been in the river." },
          { s: 'yunjin', f: 'flustered', t: "...I'm keeping it. Don't tell him. He knows." }
        ] },
        { t: "How are you even sitting up?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Badly. Everything hurts. My hair hurts. Nobody told me it hurts. You all just get up in the morning after the Well and eat cereal like it doesn't hurt." },
          { s: 'yunjin', f: 'neutral', t: "Junpei says it stops hurting after about a month. Then he said *a year, tops*. Then he said *I'm kidding*. He wasn't." }
        ] }
      ] },
      { n: "She knocked her can against Solar's without looking, the dull tin clink, and drank, and made the face. Her hands round the can were scraped across the knuckles, three long pink lines on the back of the right one, the gravel of a garden on the Second Hill, and she didn't seem to have noticed them." },
      { s: 'yunjin', f: 'happy', t: "Every light. I slept with every light on. The first night, the second night, every night. The ceiling one and the desk one and the one in the hall and my phone torch, on, on the pillow, like an idiot." },
      { s: 'yunjin', f: 'happy', t: "Hanni came in at three on the second night to turn the ceiling one off. To save electricity. I screamed at her. Happily. She screamed back. Hyein came in and screamed because we were screaming. Koromaru barked. Mitsuru came up in her dressing gown and looked at us and went away again without saying anything. It was the best night of my life." },
      { s: 'yunjin', f: 'serious', t: "I'm scared, Sol. All the time. Since the garden. I'm so scared." },
      { s: 'yunjin', f: 'neutral', t: "It's the best I've felt since winter." },
      { ifChoice: { 'asks.yunjin': 'yes' }, then: [
        { n: "She held up her left hand, palm in, so Solar could see it. It was closed. Not tight. Just closed, the fingers folded down over the thumb, the way a hand closes in sleep." },
        { s: 'yunjin', f: 'neutral', t: "Still does it. When I wake up. Even with every light on. Even with her in me." },
        { s: 'yunjin', f: 'neutral', t: "I open it with the other one, like always. There's nothing in it. There's never anything in it. I don't know why I keep checking." },
        { n: "She opened it now, with the other hand, a finger at a time, and showed Solar the empty palm, and closed it again without seeming to notice she'd closed it." }
      ], else: [
        { n: "She held up her left hand, palm out, fingers spread, in the wind, so Solar could see it." },
        { s: 'yunjin', f: 'happy', t: "Open. Both mornings. Open like a hand. I lay there and looked at it like it was somebody else's baby." }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Bari. That's her name. I knew it the second I saw her. I didn't decide it. She just was it, the way you're Sol." },
      { s: 'yunjin', f: 'neutral', t: "Everybody at home knows Bari. The seventh daughter. The king and queen wanted a son and got a seventh girl, so they put her in a box and threw her in the river." },
      { s: 'yunjin', f: 'neutral', t: "And then they got sick. Both of them. Dying. And the only thing that could save them was water from the land of the dead, and none of their six good daughters would go and get it." },
      { s: 'yunjin', f: 'neutral', t: "So Bari went. The one they threw away. She walked all the way down to where the dead are, and worked for years for the man who kept the well down there, and walked all the way back up carrying the water. For them. For the two people who put her in a box." },
      { s: 'yunjin', f: 'serious', t: "I thought she was an idiot. When I was little. I thought, why would you go back for them? Let them die. They threw you in a river." },
      { s: 'yunjin', f: 'sad', t: "And then she came out of me. In a garden. While I was walking into the water after you." },
      { n: "The wind dropped for a moment, the way it did out here, all at once, as if a door had shut somewhere. In the quiet Solar could hear the tide behind them coming in against the wall, slap, and slap, and the creak of the boats lifting on their ropes. Yunjin didn't turn round to look at it. She kept her eyes on the town." },
      { choose: [
        { t: "She went where they were.", notes: 3, then: [
          { s: 'yunjin', f: 'surprised', t: "...Yeah." },
          { s: 'yunjin', f: 'neutral', t: "That's what I said. In the garden. *I'm going where they are.* I said it before I knew it was her line. She's been in me the whole time, Sol. Since I was a kid hating her. Waiting for me to say her line." }
        ] },
        { t: "You're not an idiot. You came back for me.", notes: 3, then: [
          { s: 'yunjin', f: 'flustered', t: "...Shut up. You were drowning. Anybody would've. Okay. Not anybody. Me. I would've. Clearly. I did." },
          { n: "She bumped Solar's shoulder with hers, hard, and left it there, and didn't look at her for a while." }
        ] },
        { t: "Did it hurt? When she came?", notes: 2, then: [
          { s: 'yunjin', f: 'serious', t: "Like a door being kicked in from the inside. Like a tooth coming out. Like— you know. Why are you asking me? You've done it a thousand times." },
          { s: 'yunjin', f: 'neutral', t: "...It hurt. And then I could breathe underwater. Not really. You know what I mean. I could breathe in a place where you can't." }
        ] }
      ] },
      { n: "She pushed back the cuff of Haechan's jacket. On the inside of her left wrist, where the sleeve had hidden it, there was a row of small blue ballpoint marks, upright, in fives, the way you'd tally anything, the way you'd count days on a wall." },
      { s: 'yunjin', f: 'neutral', t: "Bari counts. Did you know that? That's her job afterward. After she brings the water back. She walks the dead to wherever they're going. Fuuka-sunbae found me a book in the dorm library, an old one, with pictures. She stands at the edge with a lamp and counts them across." },
      { s: 'yunjin', f: 'serious', t: "So I'm allowed. It's not a sickness. It's not me being crazy at three in the morning. It's a job." },
      { ifFlag: 'dead.shinjiro', then: [
        { s: 'yunjin', f: 'sad', t: "I put Shinjiro-sunbae on. In October. I didn't tell you. I didn't know if I was allowed to count him, he'd have hated it, he'd have said *don't make it a thing*. That's my line. He'd have stolen it." }
      ] },
      { ifFlag: 'dead.aigis', then: [
        { s: 'yunjin', f: 'sad', t: "And Aigis. I was on that floor. I saw the water close. Mitsuru says she was a person. I'd have counted her anyway. She'd have wanted it done properly." }
      ] },
      { ifFlag: 'eqx-yunjin-ticket-held', then: [
        { s: 'yunjin', f: 'neutral', t: "Okay. Thing. I'm asking now. Give me my ticket back." },
        { n: "She held her hand out between them, palm up, without looking, the way she'd held out a can behind her on the first day in April. Solar had carried it since August, in her inside pocket, a small flat square over her ribs; it had gone soft at the corners, and warm, and she'd stopped noticing it was there, which was the thing that made her hesitate." },
        { choose: [
          { t: "(Give it back. Like you promised.)", notes: 3, flag: 'eqx-yunjin-ticket-back', then: [
            { n: "She took it out and put it in Yunjin's palm. Yunjin closed her fingers on it, and held it, and looked at the town." }
          ] },
          { t: "(Give it back. Hold her hand a second longer than the ticket.)", notes: 3, flag: 'eqx-yunjin-ticket-back', then: [
            { n: "She put it in Yunjin's palm and closed Yunjin's fingers over it with her own, one at a time, the way Yunjin had done to hers in August, and held on a second longer than a ticket needed. Yunjin let her. She didn't look round. Her ears went red, which could have been the wind." }
          ] }
        ] },
        { s: 'yunjin', f: 'neutral', t: "I'm not going. Not now. I just wanted to be the one holding it. I can carry things now. I've got somebody in me who carries things up hills." }
      ] },
      { ifFlag: 'eqx-yunjin-ticket-kept', then: [
        { s: 'yunjin', f: 'neutral', t: "I've still got the old one. The expired one. Sunday, the seven o'clock, the boat I didn't get on. I'm not buying another." },
        { s: 'yunjin', f: 'happy', t: "Bari didn't need a ferry. She walked." }
      ] },
      { ifFlag: 'eqx-yunjin-ticket-torn', then: [
        { s: 'yunjin', f: 'neutral', t: "The taped one's in his jacket now. The inside pocket. It fits exactly. Like he left a pocket the size of a ticket in there on purpose." }
      ] },
      { ifEvent: 'eqx-persimmon', then: [
        { place: 'Kirijo Guesthouse', time: 'Evening', bg: 'kirijo-guesthouse-lobby' },
        { n: "The girls were at the guesthouse now. Since the morning of the tree. Mitsuru had sent a van to the river street that same afternoon and nobody had argued, not even Chaewon, and now all four of them slept in a row on the guesthouse's second floor in a room with a heater that clanked, and Yunjin walked them home from practice the wrong way, away from the river, and said she loved it." },
        { n: "In the lobby Kazuha stopped at the foot of the stairs and turned round and came back to Yunjin, and looked at her, very seriously, the way she looked at a step in a routine she hadn't learned yet." },
        { s: 'kazuha', f: 'neutral', t: "Yunjin-san. You glow a little now. Did you know? Only a little. Like a lamp in the next room." },
        { s: 'kazuha', f: 'happy', t: "Goodnight. One, two, three, four. I count too, now. You taught me." },
        { n: "She went up. Yunjin stood at the bottom of the stairs with her hands in Haechan's pockets and didn't move until the fourth door shut." }
      ], else: [
        // BG: eqx-oka-gate-night-winter — (as eqx-oka-gate) the Oka boarding house's wooden gate on a cold November night, a lamp over it, the persimmon tree bare above the wall, the house's windows lit behind.
        { place: 'Iwatodai · River Street', time: 'Evening', bg: 'eqx-oka-gate' },
        { n: "They walked the girls home from practice at seven, down the river street, under the lamps. The four of them in front with their arms linked against the wind, Eunchae in the middle complaining about her calves; and Yunjin behind them with Solar, and for the first time since July she wasn't at the front of the line. She was at the back. Where you'd walk if you wanted to see the whole of it at once." },
        { n: "Mrs. Oka was at the gate. Of course she was. She'd changed her gloves; they were wool now, gray, for the winter. She had a tray with five cups of hot barley tea on it, steaming in the cold, already poured, as if she'd heard them turn the corner by the bridge." },
        { s: 'mrsoka', f: 'worried', t: "Yunjin-chan. Look at you. You've been in the sea, haven't you. I can smell it on you from here. You'll catch your death. Come in and get warm, child, just for a minute. There's plenty." },
        { n: "Yunjin's right hand moved. Solar saw it. Two fingers came up out of Haechan's pocket toward her temple, halfway, on their own, the way a hand goes up to shade your eyes before you've decided the light's too bright, and stopped there, in the air, and went back down." },
        { n: "Mrs. Oka saw it too. Her eyes went to the hand. Only for a second. The way your eyes go to a dish on a high shelf that you've been told, many times, very kindly, is not for you." },
        { s: 'yunjin', f: 'neutral', t: "No thank you, Oka-san. I'm going home." },
        { s: 'mrsoka', f: 'happy', t: "Of course, of course. Another night." },
        { n: "She smiled. She took the girls in, one at a time, a gloved hand on each of their backs, Chaewon, Sakura, Eunchae; and Kazuha last, who stopped on the step, and bent, and set a white saucer down on the stone beside the door, with a pinch of rice in it, carefully, the way she'd done every night since July, and said goodnight to it, under her breath, in Japanese." },
        { n: "Then she came back down the step to the gate, and looked at Yunjin, very seriously, the way she looked at a step in a routine she hadn't learned yet." },
        { s: 'kazuha', f: 'neutral', t: "Yunjin-san. You glow a little now. Did you know? Only a little. Like a lamp in the next room." },
        { s: 'kazuha', f: 'happy', t: "Goodnight. One, two, three, four. I count too, now. You taught me." },
        { n: "She went in. The gate closed. Behind it, in the lit doorway, the saucer sat on the step with its little heap of rice, very white; and Solar knew, the way you know a step is there in the dark, that in the morning it would be upside down, and empty, and nobody in that house would ever have heard anything in the night." }
      ] },
      { s: 'yunjin', f: 'serious', t: "They don't know. About the garden. About her. I haven't told them." },
      { s: 'yunjin', f: 'neutral', t: "If I tell them, they'll want to come down. Chaewon'll make a rota. Eunchae'll film it. Sakura'll read up on it overnight and know more about the Well than Mitsuru by Tuesday. And if I don't tell them they'll find out from Chenle, and they'll never forgive me, and they'll be right." },
      { choose: [
        { t: "Tell them. They'd want to know.", notes: 2, flag: 'eqx-yunjin-tell-them', then: [
          { s: 'yunjin', f: 'neutral', t: "...Yeah. Yeah. Tomorrow. On the stairs, after practice. All four. I'll make them sit down first." },
          { s: 'yunjin', f: 'sad', t: "I hate that you said it. I wanted you to say it. Both. I'm allowed both, you told me that, on the slipway." }
        ] },
        { t: "It's yours to tell, Jin. Whenever you've got the words.", notes: 3, flag: 'eqx-yunjin-tell-mine', then: [
          { s: 'yunjin', f: 'neutral', t: "The light switch. Again. You and your light switches." },
          { s: 'yunjin', f: 'neutral', t: "...Okay. Mine. I'll tell them when I've got the words. Bari took a long time to walk back up. Nobody rushed her." }
        ] },
        { t: "(Take her hand out of the jacket pocket. Hold it. Say nothing.)", notes: 3, flag: 'eqx-yunjin-tell-held', then: [
          { n: "She took Yunjin's hand out of Haechan's pocket, the scraped one, and held it, and said nothing, and they walked like that the rest of the way, along the lamps, with the wind behind them now, pushing, the way a hand pushes you gently in the small of the back toward a door." },
          { n: "At the dorm steps Yunjin stopped and looked at their hands." },
          { s: 'yunjin', f: 'neutral', t: "...I'll tell them. When I do, you're coming. You're sitting on my left. That's non-negotiable." }
        ] }
      ] },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven-fifty her phone went on her chest." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "every light on. still scared. still great" },
        { from: 'yunjin', t: "1 2 3 4. 5. i counted me" }
      ], contact: 'yunjin 🦋' },
      { n: "Under her door, from down the hall, there was a line of light. Gold. Steady. At midnight the red came up through the house and put it out, the way it put every light in the world out; and at one, when the red went, it came back, all at once, every one of them, and stayed on." }
    ] },
    { after: '11/29', title: '8: the bridge part', place: 'Port Island · Harbor', time: 'After School', music: 'tender', scene: [
      // BG: port-island-harbor-winter-dusk — the Port Island seawall at dusk in early winter, dead low tide, a thin skin of ice at the edges of the puddles on the mud, frost on the decks of the boats lying over on their keels, the sodium lamps coming on, breath-white air.
      { bg: 'harbor' },
      { n: "There was ice at the harbor. Not on the water. On the mud, at dead low tide, in the puddles the sea had left behind it in the ruts: a thin gray skin over every one of them, cracked at the edges where the gulls had tried it, so that the whole flat shone dull and broken under the low sun like a mirror somebody had dropped. There was frost on the decks of the boats lying over on their keels. Her breath went up in front of her and stood there." },
      { n: "Yunjin wasn't sitting. She was standing on top of the seawall, on the flat concrete a meter wide, in Haechan's jacket with her hands out of the sleeves for once, red with cold, her feet apart, counting under her breath. She turned, and reached, and dropped, and came up, and turned again, small and careful on the meter of concrete, her sneakers squeaking, and at the end of it she stood still with her chest going and her left arm out, palm up, to nobody." },
      { s: 'yunjin', f: 'serious', t: "Don't talk. Eight counts. I'm nearly— okay. There." },
      { s: 'yunjin', f: 'happy', t: "I've been doing it by myself for an hour. The gulls have seen it eleven times. They hate it. They've started leaving." },
      { choose: [
        { t: "(Climb up. Hand her the can you brought.)", notes: 3, then: [
          { n: "She'd brought them this time. Two cans, from the machine at the top of the steps, the sweet bad coffee, hot enough to hurt her palms through her gloves. She climbed up onto the wall and held one out, and Yunjin looked at it, and at her, and her face did something complicated, and she took it." },
          { s: 'yunjin', f: 'flustered', t: "...You brought them. You've never brought them. That's my job. You've taken my job." },
          { s: 'solar', f: 'neutral', t: "You were busy." },
          { s: 'yunjin', f: 'happy', t: "I was. I was very busy. Thank you. I hate it. Thank you." }
        ] },
        { t: "You'll fall in. It's ice.", notes: 2, then: [
          { s: 'yunjin', f: 'neutral', t: "Then I'll bounce. I'm very bouncy now. Ask Junpei. He threw a cushion at me in the lounge and I caught it with my face and didn't even fall over. That's Bari. That's a goddess." }
        ] }
      ] },
      { n: "They sat on the wall facing the water this time, because the sun was going down over it and there was nothing else to look at that was as good, and drank the coffee, and their two breaths went up together and mixed and went. Yunjin pulled her hands back up into her sleeves and held the can inside them like something alive." },
      { s: 'yunjin', f: 'neutral', t: "I carried your eomma. On the twenty-second. Up the road. With Akihiko-sunbae. He took the heavy end. He said he didn't. He did." },
      { s: 'yunjin', f: 'neutral', t: "She held my hand the whole way. Off the side of the stretcher. Not hard. She kept saying something. I thought she was saying a name. I leaned down." },
      { s: 'yunjin', f: 'sad', t: "She was counting. The stitches. Out loud, in a whisper. All the way up the road, in the red." },
      { s: 'yunjin', f: 'sad', t: "She got to a hundred and four and then she was asleep. I kept counting for her. I didn't know what else to do. I counted the steps. I counted Akihiko-sunbae's breaths. I counted all the way to the top so she wouldn't lose her place." },
      { n: "She said it to the ice on the mud. Plainly. The way she'd said *I slept with the light off* in April, as if it were a thing that had happened to somebody else that she happened to know about." },
      { choose: [
        { t: "Thank you. For carrying her.", notes: 3, then: [
          { s: 'yunjin', f: 'neutral', t: "Don't thank me. She's— I don't know what she is to me. She put more rice in my bowl in August. That's all she ever did. That's a lot, it turns out." },
          { s: 'yunjin', f: 'serious', t: "She's your eomma. In the house on the hill. I'd carry her up anything." }
        ] },
        { t: "(Put your gloved hand over hers on the can.)", notes: 3, then: [
          { n: "She put her hand over Yunjin's on the can. Through two layers of cold wool and the sleeve of Haechan's jacket she could feel Yunjin's fingers holding on, and the heat of the coffee coming through all of it, faint, steady, the way warmth comes up through a floor from a room below." }
        ] }
      ] },
      { ifFlag: 'dead.aigis', then: [
        { s: 'yunjin', f: 'sad', t: "I was on that floor. When the water opened. I saw Aigis go in. She didn't even look at us. She just went, like it was the one thing in the whole world she was sure about." },
        { s: 'yunjin', f: 'sad', t: "I counted her. On the wrist. Hyein sleeps in Hanni's bed now. With what's left of her coat. Hanni doesn't sleep. She sits on the end of the bed and keeps watch like a dog." }
      ], else: [
        { s: 'yunjin', f: 'happy', t: "Aigis asked me on the way up if I'd like to be asked first, if I ever fall into anything. I said yes. I said ask me first too. We shook on it. Like a man selling you a car. She didn't get it. She shook very seriously. She shook for like ten seconds." }
      ] },
      { ifEvent: 'eqx-persimmon', then: [
        { s: 'yunjin', f: 'serious', t: "The girls are out. Since the tree. Mitsuru moved them that afternoon, all four, to the guesthouse. Chaewon cried in the van. Not about leaving. About not wanting to leave. She said it was like being pulled out of a warm bath." },
        { s: 'yunjin', f: 'neutral', t: "I said, Chaewon, a man was hanging in the garden. She said *I know*. She said *I know, I know*, and she still didn't want to leave. That's what that house does. I don't know what it does. That's what it does." }
      ], else: [
        { s: 'yunjin', f: 'serious', t: "The girls are still there. In that house. I still walk them. She's started leaving the gate open for me. Every night. Just a little. Like a door left on the latch for somebody who's coming home late." },
        { s: 'yunjin', f: 'neutral', t: "I close it on my way out. Every night. I go back and I close it, and I hear it click, and I count to four." }
      ] },
      { ifChoice: { 'asks.yunjin': 'yes' }, then: [
        { n: "She took her left hand out of the sleeve and held it out over the mud, palm up, and opened it, slowly, with the other one, and held it so the last of the light fell into it." },
        { s: 'yunjin', f: 'neutral', t: "Still shuts. Every night. And this morning when I opened it, there was this." },
        { n: "In the creases of her palm, along the lines, deep in where they crossed, there was a fine grit. Reddish. Darker than rust, lighter than blood, the color of a broom made of something that grows in a field, the dust that comes off an old one when you knock it against a step. It had gone into the lines the way ink goes into the grain of wood." },
        { s: 'yunjin', f: 'serious', t: "I washed it. Twice. With the nail brush. It's in the lines. Like it grew there." },
        { s: 'yunjin', f: 'neutral', t: "It smells sweet. That's the stupid part. It smells like something somebody's baking." },
        { n: "She closed her hand on it again, and put it back in her sleeve, and looked at the ice, and didn't say anything else about it; and Solar didn't either, because there wasn't a word for it yet that either of them wanted to be the first to say." }
      ], else: [
        { s: 'yunjin', f: 'happy', t: "My hand's open. Every morning now. Since the garden. I wake up and it's lying on the pillow, open, like I'm waiting for somebody to put something in it. Nobody does. That's fine. It's open." }
      ] },
      { n: "The sun went down behind the cranes. The lamps came on along the seawall, sodium orange, one after another from the ferry terminal outward, and the ice on the mud went from gold to copper to the color of an old penny, and the cold came down all at once the way it does in December, as if it had been waiting just over the water for the light to go." },
      { s: 'yunjin', f: 'neutral', t: "The dream's clearer now. Since her. Since Bari. Like she's got better eyes than me." },
      { s: 'yunjin', f: 'neutral', t: "There's a room with mirrors. A practice room. Wooden floor, the shiny kind. Tape on the floor. Marks. Little crosses in different colors for where everybody stands." },
      { s: 'yunjin', f: 'serious', t: "And there's a cross on my left. Blue tape. And somebody's written on it. In marker. A name." },
      { s: 'yunjin', f: 'flustered', t: "I can't read it. Every time I bend down to read it I wake up. And if you say anything about what you think it says I'm pushing you in the harbor. It's ice. You'll bounce. You'll bounce all the way to Incheon." },
      { choose: [
        { t: "Wifey.", notes: 3, flag: 'eqx-yunjin-wifey', then: [
          { n: "Yunjin went still. The whole of her. The can halfway to her mouth, her breath stopped in front of her face, as if somebody had pinned her to the wind like the gulls." },
          { s: 'yunjin', f: 'flustered', t: "...Don't. Oh my God. Don't say it back, that's cheating, that's like sending *up* back, that's—" },
          { s: 'yunjin', f: 'sad', t: "...Say it again." },
          { n: "Solar said it again. Yunjin put her face down into the collar of Haechan's jacket and made a sound into it that might have been a laugh and might have been the other thing, and didn't lift her head for a while, and when she did her eyes were wet and furious and enormously happy." }
        ] },
        { t: "Maybe you'll read it when you get there.", notes: 3, then: [
          { s: 'yunjin', f: 'serious', t: "Get where?" },
          { s: 'solar', f: 'neutral', t: "Wherever the tape is." },
          { s: 'yunjin', f: 'neutral', t: "...That's a door again, Sol. You keep handing me doors." },
          { s: 'yunjin', f: 'neutral', t: "...It's a door you walk to, though. In the daytime. On your own feet. Okay. That one I like." }
        ] },
        { t: "(Don't say anything. Look at the water with her.)", notes: 2, then: [
          { n: "She didn't say anything. They looked at the water together, and Yunjin's shoulder came against hers, on her right side, Yunjin's left, and stayed there, and after a while Yunjin said, very quietly, *thank you for not guessing*, and drank her coffee." }
        ] }
      ] },
      { s: 'yunjin', f: 'neutral', t: "Okay. Get up. I'm teaching you the bridge part. Don't argue. It's eight counts. You've watched me do it on this wall a hundred times. You've watched me do it on a stage. Your body's seen it. Bodies remember." },
      { ifFlag: 'eqx-yunjin-left', then: [
        { s: 'yunjin', f: 'neutral', t: "And you know where to stand. You stood there in July. You didn't even think about it. I saw your feet." }
      ] },
      { choose: [
        { t: "(Get up on the wall. Stand on her left. Learn it.)", notes: 3, flag: 'eqx-yunjin-bridge', then: [
          { n: "She stood up on the wall, on Yunjin's left, on the meter of concrete above the mud with the ice on it shining copper under the lamps, and Yunjin counted her in, low, the gravel voice, *five, six, seven, eight*, and showed her. A turn. A reach. A drop. Small, careful, on a wall in the cold." },
          { n: "She got the turn wrong twice. The third time her feet did it before Yunjin showed it again, a half step back and round on the left foot and the arm going out, and she didn't know where her feet had learned it. Not in Iwatodai. Not in either of the other lives she knew about. It was as if her body had been somewhere ahead of her, in a room with mirrors and tape on the floor, and come back to tell her." },
          { n: "Yunjin saw. She stopped counting. She looked at Solar's feet, and then at Solar's face, for a long moment, under the lamp, with her breath going up white between them; and then she started counting again, from five, as if nothing had happened, a little louder than before." },
          { n: "On the reach Yunjin turned to her left, the way she always did, every time, her arm going out, palm up, for somebody to take. And Solar was there. Her hand was there, already, before she'd decided, the way you'd put your foot on the top stair in the dark; and Yunjin's fingers closed on it, exactly, and held." },
          // CG: eqx-bridge-part — two girls on top of a harbor seawall at dusk in winter, under sodium lamps, mid-dance, one turning to her left with her arm out and the other's hand already in hers; breath white between them; below, ice on the low-tide mud shining copper.
          { n: "They did it nine more times. Eleven. The gulls left. A man walking a dog along the walkway stopped and watched them for a whole eight counts and then walked on, smiling at nothing. On the twelfth time they got it right together, the turn, the reach, the drop, the hand, and came up out of the drop at the same moment, and stood on the wall breathing, and Yunjin didn't let go." },
          { s: 'yunjin', f: 'happy', t: "...There. That's it. That's the whole bridge. You've got it. Your body had it." },
          { s: 'yunjin', f: 'sad', t: "It's the right place, Sol. It's exactly the place. I don't know where it is yet. I know that's the place." }
        ] },
        { t: "(Sit on the wall. Count her in.)", notes: 2, then: [
          { n: "She sat on the wall with the cans beside her and counted Yunjin in, *five, six, seven, eight*, in her own voice, which wasn't gravel, which was just hers. And Yunjin danced the bridge part alone on the meter of concrete above the ice, turn, reach, drop, and on the reach she turned to her left and her arm went out, palm up, to nobody." },
          { n: "And this time she laughed at it. Out loud, in the cold. She left her arm out there a second longer than the count, palm up, in the lamplight, the way you'd leave a light on in a kitchen for somebody who was going to be late; and then brought it in, and finished, and bowed to the gulls, who had all gone." }
        ] }
      ] },
      { n: "They walked back along the walkway with the lamps on and the ice ticking on the mud as the cold got into it, the small dry sound of something tightening. At the top of the steps Yunjin stopped and looked back at the harbor, the way she'd looked back every evening since April, and Solar waited for her to say the tide, the time, here and there." },
      { s: 'yunjin', f: 'neutral', t: "...I'm not going to tell you what time it is at home. I know it. I always know it. I'm just not going to say it tonight." },
      { s: 'yunjin', f: 'neutral', t: "Ask me in spring. What I'm doing. Where I'm going. Ask me in spring and I'll tell you, and it'll be mine, and you'll hate it, probably, a little, and you'll come and see me off or you won't." },
      { s: 'yunjin', f: 'happy', t: "Until then I'm here. On purpose. Not because something asked. Because the girls are here and Hanni snores and your three dads argue about rice and I've got a goddess in me who walks people home. That's a lot of reasons. That's a whole wrist of reasons." },
      { place: 'Iwatodai Dorm', time: 'Late Night', bg: 'solar-dormroom-night', soft: true },
      { n: "At eleven-fifty her phone went on her chest." },
      { phone: [
        { from: 'yunjin', t: "up" },
        { from: 'yunjin', t: "my calves hate you. the bridge part hates you. i love it" },
        { from: 'yunjin', t: "the girls are home. 1 2 3 4. 5 me. 6 you. you're on the wrist now. the good side" }
      ], contact: 'yunjin 🦋' }
    ] }
  ]
});
