/* Persona 3: Equinox · Huh Yunjin · Judgement. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (from 4/13; her home is the Port Island harbor on Sunday, Monday, Wednesday and Friday afternoons,
   so 4/14 at the earliest). Ranks 3–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Yunjin link is shared memory (the seawall, two cans of the bad coffee, "Sol", "Jin", "I'm always up", "up" at
   every low tide, the light on at night); nothing reads Solstice link standing. strangers fences hold: nothing about home
   past "since winter", no names from home, no war, no dates. Texts lowercase, contact 'yunjin 🦋' as in Solstice.
   Flags this file sets: eqx-yunjin-light (rank 1: Solar says leave the light off). Reads eqx-oka-ricecake (story-opening
   4/9: Solar took a rice cake for Koromaru, and Yunjin ate it).
   Rank 2 (after 4/21): reads eqx-yunjin-light and ifAfter 4/29; sets eqx-yunjin-pulled (Solar hauls her back from the
   water). Nothing reads the new flag yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'yunjin', name: 'Huh Yunjin', short: 'Yunjin', arcana: 'Judgement', numeral: '', from: 'strangers', kind: 'searcher',
  world: 'S', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'port', spot: 'Harbor', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons down at the Port Island harbor, on the seawall, with two cans of vending-machine coffee.' },
  approach: "On the harbor seawall a girl in a yellow puffer is sitting with her legs hanging over the mud, two cans of vending-machine coffee beside her, singing something under her breath in a voice like gravel in a tin, and she holds one can out behind her without turning round.",
  cast: {},
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
    ] }
  ]
});
