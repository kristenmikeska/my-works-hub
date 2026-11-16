/* Persona 3: Equinox · Huh Yunjin · Judgement. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13; her home is the Port Island harbor on Sunday, Monday, Wednesday and Friday afternoons,
   so 4/14 at the earliest). Ranks 2–10 still to write. Shape: the stub fields from assets/femc/equinox/data/links.js.
   Solstice's Yunjin link is shared memory (the seawall, two cans of the bad coffee, "Sol", "Jin", "I'm always up", "up" at
   every low tide, the light on at night); nothing reads Solstice link standing. strangers fences hold: nothing about home
   past "since winter", no names from home, no war, no dates. Texts lowercase, contact 'yunjin 🦋' as in Solstice.
   Flags this file sets: eqx-yunjin-light (rank 1: Solar says leave the light off). Reads eqx-oka-ricecake (story-opening
   4/9: Solar took a rice cake for Koromaru, and Yunjin ate it). */
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
    ] }
  ]
});
