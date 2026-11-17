/* Persona 3: Equinox · Minji Kim · The Moon. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–6 (rank 1 from 4/13, rank 2 from 4/30 so it always follows Mr. Tanabe, both Seaside Park after
   school). Ranks 7–15 still to write. Rank 3 (from 6/7, Seaside Park then the guesthouse roof; branches
   on eqx-bridge, eqx-hunted, eqx-last-grain) records her ask: tally asks.minji (+ cakes / choose), flags eqx-minji-on-tape,
   eqx-minji-turned. Rank 2 flags (nothing reads them yet): eqx-minji-nap, eqx-minji-filmed, eqx-minji-kiss.
   Rank 4 (from 6/22, Seaside Park in the rainy season, then her room at the guesthouse, then the walk home or the dorm
   steps at six): the morning-after talk, "I'm not going to ask you what this is" (honest / unsaid), the one-second file by
   asks.minji (yes: day nine's autofocus can't find Solar), making out in her room (cut away), Jaehyun's three knocks;
   stay (Haechan on the dorm steps at six gives Minji the second can) or Jaehyun walks Solar home. Rank 5 (from 8/1, summer:
   Seaside Park, her room overnight under "twos", the morning, the guesthouse kitchen): reads eqx-last-grain; waking up
   together (cut away before anything explicit); the sill camera: turned on the room (her doorknob turns a quarter at 0:40
   in the red, unseen by both) or on the street (the coffins turn toward her window); breakfast with Jaehyun and Cherry or
   slip out. Rank 6 (from 9/28, after the equinox; reads eqx-fireworks-minji, asks.minji, eqx-empty-chair, dead.shinjiro):
   she put the camera down for the moonrise on 9/23 and hasn't taken it out; the camera is how she holds on; tea for
   Jaehyun at the boarding-house gate ("Don't film her"); Solar holds the camera on the guesthouse roof; Chenle texts about a
   floor of lockers full of recording cameras on the Third Hill: her ask floor, flag eqx-floor-minji. No route is set.
   Rank 4 flags: eqx-minji-honest | eqx-minji-unsaid, eqx-minji-stayed | eqx-minji-walked. Rank 5 flags: eqx-minji-rolling |
   eqx-minji-street, eqx-minji-knob-seen, eqx-minji-breakfast | eqx-minji-slipped. Rank 6 flags: eqx-minji-camera-back,
   eqx-minji-held-it, eqx-floor-minji (hook: her ask floor in the Well, §8). No new tallies. Nothing reads them yet.
   Speakers: jaehyun, haechan (rank 4), chenle and minji texts.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Picks up her promise in the prologue's lounge (the footage of the night Solar went). Solstice's ranks are shared memory. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'minji', name: 'Minji Kim', short: 'Minji', arcana: 'Moon', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'guesthouse', cast: { chenle: 'Chenle' },
  home: { area: 'port', spot: 'Seaside Park', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons at Port Island Seaside Park, with a camera, filming whatever the light is doing.' },
  ranks: [
    { after: '4/13', title: '1: every frame', place: 'Port Island · Seaside Park', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "The light at Seaside Park in the middle of April did a thing in the late afternoon that Solar had never noticed in a whole year of walking past it: it came in low and sideways off the bay and caught on every small wave at once, so the water went from gray to hammered metal in about a minute, and then held there, shivering, like it was waiting to be told it could stop." },
      { n: "Minji had noticed. Minji was crouched at the edge of the boardwalk with the camera at her eye and her elbows locked against her knees, not moving, not breathing much, the strap wound twice round her wrist, filming the water do it." },
      { n: "Solar stopped a few meters back and didn't say anything, because you didn't, when Minji was rolling. She'd learned that last autumn the way you learn not to talk in a library. She stood with her bag against her legs and the wind pulling her hair across her face and waited for the light to finish." },
      { n: "It finished. Minji lowered the camera. She didn't look round. She'd known Solar was there the whole time; she always knew where everybody was in a frame, even the ones behind her." },
      { s: 'minji', f: 'neutral', t: "Hi. Sorry. It only does that for about ninety seconds and I've missed it three days running." },
      { s: 'minji', f: 'happy', t: "Can I? Just you. Just standing there. You don't have to do anything." },
      { n: "She asked. She always asked. She'd asked twenty times a day last autumn, before every shot, every single one, *can I, is that okay, you can say no*, until it stopped being a question and turned into something closer to a greeting. Solar had never once said no. Minji had never once stopped asking." },
      { choose: [
        { t: "You can.", notes: 3, then: [
          { n: "Minji lifted the camera. Solar stood there. That was all, for almost a minute, the wind and the water and the small red light, and she found she didn't mind being looked at like this, which surprised her every single time. It wasn't the SUnews flash or the stage lights or a father's hired photographer at a foundation dinner. It was a girl who'd asked." },
          { s: 'minji', f: 'happy', t: "...Got it. Thank you. The camera still loves you. That's annoying for everybody else." }
        ] },
        { t: "Only if I get to do you after.", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "Me? I'm not— nobody films the person filming. That's the rule. That's like the one rule." },
          { s: 'solar', f: 'neutral', t: "Reverse shot. You taught me that." },
          { s: 'minji', f: 'flustered', t: "...I did teach you that. I regret teaching you that." }
        ] },
        { t: "(Turn and look at the water instead.)", notes: 2, then: [
          { n: "She turned to look at the water, so she was in profile, so it was the bay and not her, and she heard Minji make a small, pleased noise behind the camera, the noise of somebody getting the shot they hadn't asked for and liked better." },
          { s: 'minji', f: 'neutral', t: "That's better. That's the real one. You're doing the face." }
        ] }
      ] },
      { n: "They sat on the low wall at the edge of the boardwalk with their feet hanging over the sand. Minji kept the camera in her lap, both hands on it, the lens cap off, the way you'd keep your hands on a dog that might bolt." },
      { s: 'minji', f: 'neutral', t: "I said I'd look at it. In the lounge. That first night. Every frame." },
      { s: 'minji', f: 'serious', t: "I looked." },
      { n: "Solar knew what she meant before she said it. The night she went. Minji's camera, running. Minji had been there, holding on, and her camera had been in her other hand doing what it always did, and it had caught whatever there was to catch." },
      { choose: [
        { t: "(Wait. Let her tell it.)", notes: 3, then: [
          { n: "She waited. Minji turned the camera over in her lap twice, and checked the lens with her thumb, and put it down, and picked it up, the small busy movements of someone who was much better at seeing things than saying them." }
        ] },
        { t: "You don't have to tell me what's on it.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "I know. That's why I'm going to. You'd never ask." }
        ] },
        { t: "Am I in it?", notes: 2, then: [
          { s: 'minji', f: 'sad', t: "...That's the thing." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "Fourteen thousand two hundred and six frames. From when I hit record to when the battery died. I went through all of them. One at a time. It took four nights." },
      { s: 'minji', f: 'neutral', t: "You're in fourteen thousand two hundred and five of them. Mostly a blur. Snow, and dark, and a smear of light that's you. But it's you. I'd know you as a smear." },
      { s: 'minji', f: 'serious', t: "And then you're not. There's no frame where you're going. No blur. Nothing half-there. One frame, you. The next frame, the place where you were. Like a cut. Like somebody cut you out with scissors between two frames, and the film doesn't even jump." },
      { n: "She said it in her editing-room voice, flat and careful, the voice for describing a problem with a shot, and her hands didn't move on the camera at all, and that was how Solar knew how much it had cost." },
      { s: 'minji', f: 'neutral', t: "I watched those two frames for about three hours. Back and forth. You, not you. You, not you. Like if I did it enough times I'd catch the bit in between." },
      { s: 'minji', f: 'sad', t: "...There isn't a bit in between. I checked. There's just the cut." },
      { ifFlag: 'eqx-from-runners-minji', then: [
        { s: 'minji', f: 'neutral', t: "And after the cut, the thread. Going up out of the top of the frame. Every frame after you. Like the camera knew where to look even when I didn't." }
      ] },
      { choose: [
        { t: "(Take her hand. The one that isn't on the camera.)", notes: 3, then: [
          { n: "She took Minji's free hand off the camera, which was harder than it sounded, and held it on the warm stone of the wall between them. Minji let her. She looked down at it as if she were framing it, two hands, the low sun on the knuckles, and Solar could see her deciding not to lift the camera with the other one." },
          { s: 'minji', f: 'neutral', t: "...Not filming this. For the record. Some things you just keep." }
        ] },
        { t: "Delete it.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "No." },
          { s: 'minji', f: 'serious', t: "I told you I wouldn't, and I won't. It's the last frame of you I've got from over there. Even if it's the wrong one." }
        ] },
        { t: "I'm here, Minji. This is a frame too.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { s: 'minji', f: 'happy', t: "...Yeah. Yeah, it is. Okay. Hold still. I'm keeping this one in my head." },
          { n: "She looked at Solar for a long moment without the camera at all, which Solar had seen her do maybe twice, ever, and it was much worse to be looked at like that, and much better." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "So I can't stop rolling now. That's the problem. I know it's a problem. Jaehyun says it's a problem. He says it very nicely while I'm filming him say it." },
      { s: 'minji', f: 'serious', t: "If I stop, I'm scared I'll miss it. The next one. The frame where you go again. And I won't have it, and I won't know which was the last one, and I'll spend the rest of my life going back and forth between two frames that aren't even the right ones." },
      { n: "She tried to laugh at herself at the end of it, a small breath through the nose. It didn't come off. She looked at the bay instead, at the metal light going out of it, and lifted the camera halfway to her eye, and put it down again, and lifted it again, like a hand going to a pocket for a phone that wasn't there." },
      { choose: [
        { t: "Then keep rolling. I don't mind.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "You say that now. Wait till I film you brushing your teeth." },
          { s: 'minji', f: 'sad', t: "...Thank you. I mean it. I'm going to try not to need it. I don't think I'm going to manage." }
        ] },
        { t: "Put it down for ten minutes. I'm not going anywhere.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "You can't promise that. You know you can't. You didn't know last time." },
          { s: 'solar', f: 'serious', t: "Ten minutes. I can promise ten minutes." },
          { n: "Minji looked at her a long time. Then she put the lens cap on, slowly, with a small click that sounded much louder than it was, and set the camera on the wall beside her, and folded her hands in her lap, and didn't look at it once for ten minutes, though Solar saw her fingers want to, twice." }
        ] },
        { t: "(Pick the camera up. Turn it round. Film her.)", notes: 3, then: [
          { n: "She picked the camera up off Minji's lap before Minji could stop her and turned it round and found the button by feel, the way she'd been shown, and pointed it at Minji, and the little red light came on." },
          { s: 'minji', f: 'flustered', t: "No. No no no. Solar. That's illegal. That's against the one rule." },
          { s: 'solar', f: 'happy', t: "Can I?" },
          { s: 'minji', f: 'flustered', t: "...You can't ask me that. That's my line. You can't use my line on me." },
          { s: 'minji', f: 'flustered', t: "...Fine. Yes. You can. Ten seconds. Don't look at me like that through it, it's going to come out looking like a—" },
          { n: "She didn't finish. She put her hand over her face. Through the little screen she looked exactly like what she was, a girl on a wall at sunset who'd been told she was worth a frame, and didn't know what to do with her hands." }
        ] }
      ] },
      { place: 'Port Island · Seaside Park', time: 'Evening', bg: 'port-island-seaside-park-sunset', soft: true },
      { n: "When the sun had nearly gone, Minji flipped the camera's little screen out and scrolled back. Not to the bay. Further. Days back, through clips Solar didn't recognize, the guesthouse kitchen, Cherry's feet on a coffee table, Jaehyun reading a curry packet, the lounge at two in the morning on the seventh. Then the screen went dark red." },
      { s: 'minji', f: 'neutral', t: "This is the first night. The sixth. My camera was still running when I woke up on the platform, and I didn't stop it, and Jaehyun and I walked to the guesthouse in it." },
      { s: 'minji', f: 'neutral', t: "And this is Friday. From the guesthouse window. And this is Saturday. And last night. I've been leaving it on the sill." },
      { n: "She turned the screen so Solar could see it. The street between the station and the guesthouse in the red, jolting with her walking, and then still, from a window. The color was wrong even on a little screen, clotted, the dark of something that has been left too long. The streetlights out. A car stopped in the road. And on the pavement, here and there, in doorways, at a bus stop, the coffins. People who'd been walking home at midnight, caught where they stood, tall and black and still, the way the hour had always taken them." },
      { s: 'minji', f: 'neutral', t: "Look which way they're facing." },
      { n: "Solar looked. The coffin at the bus stop. The two in the doorway of the closed bakery. The one in the middle of the crossing, which had been someone halfway over the road. Last year, coffins had stood however their people had been standing: facing each other, facing their phones, facing home." },
      { n: "These were all facing the same way. Every one. Turned, the whole lot of them, a few degrees off the way the street ran, all to the same point, out over the rooftops toward the water. Toward the island. Toward the school." },
      { s: 'minji', f: 'serious', t: "Every night. I checked every night. The ones in the beds too, you can see them through the windows across the road. Turned on the mattress. Toward it." },
      { s: 'minji', f: 'neutral', t: "Like sunflowers." },
      { n: "She said it in her shot-describing voice, flat and exact, and then heard it, and Solar watched the hair stand up on her forearms in the last of the light." },
      { choose: [
        { t: "Show Mitsuru.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "I will. Tomorrow. She'll ask for the files. She'll ask very politely and she'll mean *now*." },
          { s: 'minji', f: 'serious', t: "I wanted to show you first. You're the one it took. I thought you should get to see it before it's on a whiteboard." }
        ] },
        { t: "Shinjiro said the man in the next bed turned. Toward the window.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "...The hospital's that way. Toward the water." },
          { s: 'minji', f: 'neutral', t: "Okay. Okay, I'm going to need a map. And a very big piece of paper. And maybe not to sleep." }
        ] },
        { t: "(Shut the screen. Gently.)", notes: 3, then: [
          { n: "She reached over and folded the little screen shut against the camera body, gently, the way you'd close somebody's eyes. Minji didn't stop her. She sat with the closed camera in her lap and her shoulder against Solar's and they watched the very last of the light go off the water instead, which was what they'd come for." },
          { s: 'minji', f: 'neutral', t: "...Thanks. I've been looking at it alone every night. It's better with the lid shut and you here." }
        ] }
      ] },
      { n: "She walked Solar to the monorail, because the rule said someone walked everyone everywhere now, and because she'd have walked her anyway. At the gate she stopped and held up the camera and raised her eyebrows, a question, the same one, the first one." },
      { s: 'minji', f: 'neutral', t: "Can I? One more. Through the gate. Going." },
      { choose: [
        { t: "You can. I'll come back through it next time. Film that too.", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Going, then coming back. Okay. That's a good pair. That's a good cut." },
          { n: "She filmed Solar walking through the gate and up the steps and onto the platform, all the way, until the doors closed, and when Solar looked back through the window as the train pulled out, Minji was still standing there with the camera up, rolling, a small figure at the gate with a small red light, keeping the frame." }
        ] },
        { t: "Not this one. Just watch me go. Without it.", notes: 3, then: [
          { n: "Minji looked at her a long time. Then she lowered the camera, all the way down to her side, and stood at the gate with both hands empty, and watched Solar go with nothing between them at all." },
          { n: "Through the train window Solar saw her lift a hand. Not to wave. To her eye, the way she'd hold a viewfinder that wasn't there, thumb and finger making a small square, and look through it, and keep it." }
        ] }
      ] },
      { n: "That night, at the guesthouse, Minji set the camera on her windowsill facing the street, the way she had every night since the sixth, and pressed record, and lay down in her clothes on top of the futon to wait for twelve, to see which way they'd turn." }
    ] },
    { after: '4/30', title: '2: coverage', place: 'Port Island · Seaside Park', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "There were two cameras now. That was the first thing. The silver one round her neck on its strap, and a second, smaller, older one, the kind you'd find in a drawer at a parents' house, clamped to the arm of the bench with a little rubber tripod, pointing at the bench itself, at the empty half of it, at the place where somebody would sit." },
      { n: "Minji was on the grass in front of it, cross-legged, with the silver camera up, filming the sea. She didn't look round when Solar came down the path. She said her name to the viewfinder." },
      { s: 'minji', f: 'neutral', t: "Sit there. On the bench. That one's for you. It's been rolling since three." },
      { s: 'minji', f: 'neutral', t: "...I borrowed it off Jaehyun. He doesn't know. He thinks he lost it. He's been looking for it for two days, it's very sad, he keeps checking the same drawer." },
      { choose: [
        { t: "(Sit where the camera's pointing.)", notes: 3, then: [
          { n: "She sat down in the frame. The little red light on the old camera looked at her. She looked back at it, and then, because she didn't know what else to do, waved at it, small, the way you'd wave at a baby, and on the grass Minji made a sound that was half a laugh and half something else." }
        ] },
        { t: "Why is there a camera on the bench?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Coverage. If one's on the sea and one's on you, then I've got both. Then I don't have to choose." },
          { s: 'minji', f: 'sad', t: "I couldn't choose. I tried. I'd point at you and think, what if it's the sea. I'd point at the sea and think, what if it's you." }
        ] },
        { t: "(Sit down on the grass next to her instead. Out of its frame.)", notes: 2, then: [
          { n: "She sat down on the grass beside Minji instead, out of the old camera's eye, and Minji's whole body did a small hitch, as if a stair had moved under her, and then she swung the silver one round off the sea and onto Solar without lowering it, and held it there." },
          { s: 'minji', f: 'neutral', t: "...Okay. Okay. That's fine. I've got you on this one. That's fine." }
        ] }
      ] },
      { n: "She looked tired. Not tired the way Hanni looked tired, thin under the eyes. Tired the way something looks when it's been left on all night: warm, and a little too bright, and humming. Her hair was in a knot held up with a pencil. There was a mark on her cheek in the shape of a strap, as if she'd fallen asleep on the camera, which, Solar would find out, she had." },
      { s: 'minji', f: 'neutral', t: "I showed Mitsuru. The coffins. All of it, every night since the sixth, all of them turned toward the island. She watched it twice and wrote down the times and didn't say anything." },
      { s: 'minji', f: 'neutral', t: "...And I gave her the other one. The ten seconds. From Thursday." },
      { n: "She said it to the sea. Her thumb was moving on the camera's zoom rocker, out and in, out and in, not zooming, just moving." },
      { s: 'minji', f: 'sad', t: "She watched it with the sound off. Then she watched it again with the sound off. Then she said *thank you, Kim*, very formally, and put the card in an envelope and wrote on the envelope and locked it in her desk." },
      { s: 'minji', f: 'sad', t: "I haven't watched it. I filmed it and I gave it away and I've never watched it. I know every frame of the night you went and I've never once looked at those ten seconds." },
      { choose: [
        { t: "You don't have to. Ever.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "I know. Mitsuru said that too. In the same voice." },
          { s: 'minji', f: 'sad', t: "...It's the first footage I've ever had that I didn't want. I didn't know you could have footage you didn't want." }
        ] },
        { t: "You were sick after. That's allowed too.", notes: 2, then: [
          { s: 'minji', f: 'flustered', t: "In front of *everyone*. Jaehyun held my hair. Jaehyun. He was so gentle about it I wanted to die." },
          { s: 'minji', f: 'neutral', t: "...He's been bringing me ginger tea every morning since. He leaves it outside my door and knocks three times and says his name. He's so stupid. I drink all of it." }
        ] },
        { t: "(Take her hand off the zoom. Hold it.)", notes: 3, then: [
          { n: "She reached over and took Minji's thumb off the zoom rocker, and then the hand, and held it in the grass between them. Minji let the silver camera sag in her other hand until it was pointing at the ground, at the grass, at nothing, and didn't lift it again for nearly a whole minute, which for Minji was a kind of falling." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "Can I tell you the bad thing? You'll think it's worse than it is." },
      { s: 'minji', f: 'serious', t: "I can't stop rolling. Not just at night. At all. I stopped the camera on the windowsill on Thursday night because I couldn't stand it watching the street, and I lay there, and I couldn't sleep, because what if. What if that was the night. What if that's the frame." },
      { s: 'minji', f: 'serious', t: "So I turned it round. Onto me. I film myself sleeping now. Every night. In case I miss something. In case something comes in." },
      { s: 'minji', f: 'sad', t: "...In case it's me, next time. And nobody's got the frame." },
      { choose: [
        { t: "If it's you, I'll come and get you. Frame or no frame.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { n: "Minji looked at her with her mouth slightly open and the camera forgotten in her lap. Then she looked away, fast, at the sea, and her eyes were very bright, and her face did the thing it did when she was about to cry and had decided not to, which was to go perfectly, professionally blank, like a lens cap." },
          { s: 'minji', f: 'neutral', t: "...Okay. Okay. I'm going to need that on tape. Say it again later. For the record." }
        ] },
        { t: "What do you see? When you watch it back?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Me. Asleep. Seven hours of a girl in a T-shirt not moving. And then an hour in the middle where the picture goes red and I'm sitting up in it, wide awake, hugging my knees and watching the door, like everybody does now." },
          { s: 'minji', f: 'sad', t: "I fast-forward through that bit. It's the only bit I fast-forward." }
        ] },
        { t: "You could let somebody else watch for a night. Me.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "You can't watch me sleep, you're at the dorm. Mitsuru would put it on the whiteboard." },
          { s: 'minji', f: 'flustered', t: "...I mean you *could*. I'm just saying there'd be a whiteboard situation." }
        ] }
      ] },
      { n: "The sun was going down the sky toward the far shore. The park was busy the way it was on a fine evening in spring: two boys with a kite, a woman pushing a pram along the sea wall, joggers going by in pairs, an old couple on the next bench sharing a bag of something. The wind came off the water warm for once. Solar found her eyes were closing. She hadn't decided that either." },
      { s: 'minji', f: 'neutral', t: "...You can sleep. If you want. I'll film it. I'll film the sea and I'll film you and I'll have both." },
      { s: 'minji', f: 'neutral', t: "I won't do anything with it. I'll just know you were here for twenty minutes and nothing happened." },
      { choose: [
        { t: "(Lie down on the grass with your head in her lap.)", notes: 3, flag: 'eqx-minji-nap', then: [
          { n: "She lay down on the grass and put her head in Minji's lap, which she hadn't planned to do and couldn't have said when she'd decided to, and Minji went very still above her, and then one hand came down, slowly, and rested on her hair, not stroking, just there, the way you'd rest a hand on the top of a camera to keep the sun off the lens." },
          { n: "The last thing she saw was Minji's face upside down against the sky, looking at her, not through anything. The last thing she heard was the small click of the silver camera's record button, and the sea." }
        ] },
        { t: "(Close your eyes on the bench, in the old camera's frame.)", notes: 2, flag: 'eqx-minji-nap', then: [
          { n: "She leaned her head back on the bench and closed her eyes in the old camera's frame, and heard Minji get up off the grass and come and sit down beside her, close, and felt the silver camera's strap brush her arm as Minji lifted it, and heard it click." }
        ] }
      ] },

      { place: 'Port Island · Seaside Park', time: 'Evening', bg: 'port-island-seaside-park-sunset', soft: true },
      { n: "Twenty-six minutes. She knew because Minji told her, the second she opened her eyes, as if it were the score of something. The sun was on the water now, low and orange, and the old couple had gone, and the kite boys, and Minji had the silver camera turned round and was looking at its little screen with her thumb on the frame-step button, and her face had changed." },
      { s: 'minji', f: 'serious', t: "...Sol. Sit up. Look at this. Tell me what you see. Don't tell me what I want you to see. Tell me what's there." },
      { n: "She held the screen between them. It was the wide shot, over Solar asleep, out across the path and the sea wall to the water. The boys with the kite. The pram. The joggers. The old couple on the next bench. Ordinary. Golden. Minji let it play." },
      { n: "At eleven minutes and four seconds, the boy holding the kite string stopped running." },
      { n: "He didn't drop the string. The kite stayed up, tugging. He just stopped, in the middle of the grass, and turned round, and looked at the bench. So did the other boy. So did the woman with the pram, stopping dead on the sea wall with her hand on the handle. So did both joggers, mid-stride, the way you'd stop if someone had called your name from behind. So did the old couple on the next bench, together, turning their heads at exactly the same speed." },
      { n: "All of them. Every person in the frame. Turned, and stood, and looked at the place where Solar lay asleep beside Minji. Not at Minji. At her." },
      { n: "They looked for forty seconds. Minji had counted the frames: twelve hundred. Nobody moved. The kite pulled at its string. The pram's wheel turned a quarter turn in the wind and stopped. Their faces weren't anything. Not curious, not frightened, not kind. Just turned toward her, all of them, like flowers to a window." },
      { n: "Then, at eleven minutes and forty-four seconds, the boy with the kite went on running. The woman went on pushing. The joggers went on. The old man offered the old woman the bag. As if nothing. As if a film had been paused and started again." },
      // CG: eqx-everyone-turns — a small camera screen held in two hands at sunset, showing a sunny seaside park where every person in the shot, a boy with a kite, a woman with a pram, two joggers, an old couple on a bench, has stopped and turned to look the same way, toward the camera.
      { s: 'minji', f: 'serious', t: "I didn't see it. I was filming it and I didn't see it. I was looking at you." },
      { s: 'minji', f: 'neutral', t: "I asked the old man. After. When they were packing up. I asked if anything had happened. He looked at me like I was mad. He said it was a lovely evening. He said nothing had happened all day." },
      { choose: [
        { t: "It's daylight. It's not the red. It can't be anything.", notes: 1, then: [
          { s: 'minji', f: 'neutral', t: "That's what I said to myself. Out loud. Twice." },
          { s: 'minji', f: 'serious', t: "And then I went back to the start and I watched it again, frame by frame, and it's still there. Daylight doesn't make it not there. Daylight just makes it easier to see." }
        ] },
        { t: "They were looking at me.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "...Yeah." },
          { s: 'minji', f: 'serious', t: "Not at the bench. I thought it was the bench, the first time. I made a box round you in the frame and scrubbed it, and they track. When your head moves in your sleep their eyes move. Every one of them. A frame later." },
          { n: "Solar didn't say anything. She sat on the grass in the orange light with her arms round her knees and felt every person who'd walked past on the path that evening, all at once, behind her, looking." }
        ] },
        { t: "Delete it.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "No." },
          { s: 'minji', f: 'sad', t: "I don't delete. You know I don't. If I'd deleted the night you went, I'd never have known there's a gold thread in every frame after." },
          { s: 'minji', f: 'neutral', t: "...I'll keep it with the other one. The one I gave away. They can keep each other company." }
        ] }
      ] },
      { n: "Minji put the camera down. On the grass, face down, so the lens was against the earth, and Solar had never once in two lives seen her do that, and they sat side by side and watched the sun go into the sea with nothing between them and it." },
      { s: 'minji', f: 'neutral', t: "...You're not in it. When you go. The night you went. Frame fourteen thousand two hundred and five, you're in it, and two-oh-six you're not. There's no in-between." },
      { s: 'minji', f: 'sad', t: "I keep thinking if I'm rolling when it happens again I'll catch the in-between. But there isn't one. I know there isn't one. I've looked. I just can't stop looking for it." },
      { choose: [
        { t: "(Pick up her camera. Point it at her.)", notes: 3, flag: 'eqx-minji-filmed', then: [
          { n: "She picked up the silver camera off the grass and turned it round and pointed it at Minji, and pressed record, and Minji put both hands over her face at once like a celebrity outside a club." },
          { s: 'minji', f: 'flustered', t: "*No*. No no no. I'm not. I don't go on that side. That's not where I go." },
          { s: 'solar', f: 'neutral', t: "Somebody should have a frame of you." },
          { n: "Minji went still behind her hands. Then, slowly, she took them down. She looked at the lens, not at Solar, straight into it, with the sunset on half her face and her hair coming out of its pencil, and didn't smile, and didn't perform, and didn't do anything at all but let herself be filmed, for maybe ten seconds, which for Minji was a long, long time." },
          { s: 'minji', f: 'neutral', t: "...Okay. Cut. That's enough. That's a whole film. Give it back." }
        ] },
        { t: "(Kiss her. No camera.)", notes: 3, flag: 'eqx-minji-kiss', then: [
          { n: "She kissed her. Minji's camera was face down in the grass and both her hands were empty and she didn't know what to do with them for a second, and then she did; one went into Solar's hair and the other to her jaw, and she kissed back as if she were memorizing it, carefully, the way she'd frame something she'd only get one take of." },
          { n: "When they broke apart Minji kept her eyes closed a moment longer, and her lips moved a little, and Solar realized she was counting." },
          { s: 'minji', f: 'flustered', t: "...Don't ask what number. It's a lot of frames. I didn't get any of them. It's the first thing I've ever wanted and not got on tape and I don't care." }
        ] },
        { t: "Then stop looking for the in-between. Look at the frames I'm in.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "...There's a lot of those." },
          { s: 'solar', f: 'neutral', t: "There's going to be more." },
          { n: "Minji didn't answer that. She leaned her shoulder against Solar's and stayed there, and the sun finished going, and neither of them picked the camera up for a long time." }
        ] }
      ] },
      { n: "When they left, Minji unclamped the old camera from the bench and put it in her bag to give back to Jaehyun, who would find it in his drawer the next morning and be so relieved he'd tell everyone at breakfast. She did it without looking at its screen. Solar did, over her shoulder, by accident, in the second before it went dark." },
      { n: "The old camera had been pointed at the bench the whole time. Twenty-six minutes of a bench, and the evening going gold behind it. And on its little screen, frozen on the last frame, the bench, from the front, and behind it, on the path, a long way back, out of focus, the old couple from the next bench. Already packing up to go. Both of them looking at the camera." },
      { n: "Not at Solar. At the camera. As if they knew which one was watching." }
    ] },
    { after: '6/7', title: '3: one second a day', place: 'Port Island · Seaside Park', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "It had stopped raining for the first time in four days, and the whole park had come out to look at the sky as if it were a new building. Old men on benches with newspapers they weren't reading. A boy in a school uniform trying to get a kite up in no wind. Two women with a pram walking very slowly round the fountain, which had been off all week and had been switched back on for the occasion and was coughing." },
      { n: "Minji was on the grass by the sea wall with her silver camera on a little tripod no taller than a shoe, pointed at nothing, at the edge of the wall and the water and a bit of sky. She was lying on her stomach beside it with her chin on her fists, not looking through it. Just lying beside it, the way you'd lie beside a dog that was asleep." },
      { s: 'minji', f: 'happy', t: "Hi. Don't step in front of it. It's doing something important." },
      { s: 'solar', f: 'neutral', t: "It's filming a wall." },
      { s: 'minji', f: 'neutral', t: "It's filming the wall *drying*. There's a line. Where it's wet and where it's not. It moves about a centimeter every ten minutes. I'm going to speed it up and it's going to look like the tide going out on a stone." },
      { s: 'minji', f: 'flustered', t: "...That's not why. That's what I tell people. Sit down. Not there. There. Out of frame." },
      { choose: [
        { t: "(Lie down beside her on your stomach. Chin on your fists.)", notes: 3, then: [
          { n: "She lay down on the damp grass beside her, chin on her fists, the way Minji was, and Minji looked at her sideways with her cheek squashed up against her knuckles and didn't say anything, and her eyes went soft at the corners, and they lay there side by side like two kids watching a TV and watched a wall dry." }
        ] },
        { t: "(Sit cross-legged behind the tripod. Look through it.)", notes: 2, then: [
          { n: "She sat behind the tripod and looked through the little screen. It was a wall. Wet on the bottom, dry on the top, and the line between them very sharp, and the sea moving behind it, gray-green, and a gull going through the top of the frame once, fast, like a mistake." },
          { s: 'minji', f: 'neutral', t: "See? It's better on the screen. Everything is. That's the problem." }
        ] }
      ] },
      { n: "There was a second camera in her bag. Solar could see it in the open mouth of it, the old one, Jaehyun's, with a strip of masking tape across the top now that said, in Jaehyun's very neat English capitals, *PROPERTY OF JAEHYUN LEE. PLEASE ASK. (MINJI.)*" },
      { s: 'minji', f: 'happy', t: "He gave it to me. Officially. He made a whole thing of it. He knocked three times and handed it to me on a tea tray. He said, *if you're going to steal it you may as well have it.* Then he went red and left." },
      { s: 'minji', f: 'neutral', t: "He's very kind. He's very kind and he holds my hair when I'm sick and he never once asks what I'm filming. I don't know what to do with people like that. I keep trying to give him things back." },
      { n: "She rolled onto her side, facing Solar, with her head on her arm on the grass, and her hair came out of its pencil, the way it always did, and she didn't fix it." },
      { s: 'minji', f: 'neutral', t: "I stopped filming myself sleeping. You'll be proud. I did it for forty-one nights. You know what was on it? Me. Sleeping. For forty-one nights. Nothing came in. Nothing touched me. Nothing turned to look at me. I'm the most boring footage I've ever shot." },
      { s: 'minji', f: 'serious', t: "And that was somehow worse? Lying there every night knowing it was running and nothing would happen, and then in the morning watching nothing happen, at sixteen times speed, with my mouth open." },
      { choose: [
        { t: "That sounds like it was good for you to stop.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "It was. It was so good. I slept nine hours the first night. Jaehyun knocked three times at nine and I didn't hear any of them. He thought I'd died. He was very calm about it. He came in with the tea anyway." }
        ] },
        { t: "Did you keep the footage?", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "...Of course I kept the footage. Forty-one nights of me sleeping. I don't delete things. That's my whole problem." },
          { s: 'minji', f: 'happy', t: "I'm going to make it into an art film. Nobody's going to watch it. That's the art." }
        ] }
      ] },
      { ifEvent: 'eqx-bridge', then: [
        { n: "She didn't say anything about the bridge. She'd shown Solar once and Solar had gone out onto it in the red and said a name into the music, and the music had stopped. Minji still filmed it every night, from the guesthouse roof. Solar knew because the tripod had a second set of marks on its feet, the roof's grit, and because Minji's eyes, when the wind came off the sea from that direction, went to it and came back like a hand that touched a stove." }
      ], else: [
        { n: "She didn't say anything about the bridge. Solar knew she filmed it; everybody knew. A woman in a blue coat in the red, at the middle of Moonlight Bridge, every night since the first, with her back to the road, and no sound coming off her at all. Minji's eyes went to it whenever the wind came off the sea from that direction, and came back like a hand that touched a stove." }
      ] },
      { n: "The line on the wall had moved. Two centimeters, nearly three. The kite boy had given up and was sitting on his kite. The fountain had found its rhythm and was going up and coming down very evenly now, and the light on the water had turned from gray to a thin pale gold, the first sun anybody had seen in days, coming in low under the edge of the clouds." },
      { n: "Minji sat up. She turned the little tripod, slowly, by its feet, so that the lens came round off the wall and off the sea and onto Solar, where she lay on the grass with the gold on her, and Solar felt it the way you feel a hand come near your face in the dark." },
      { s: 'minji', f: 'neutral', t: "I want to ask you something. It's going to sound like a project. It's not a project. Well. It's a project." },
      { s: 'minji', f: 'neutral', t: "One second a day. Of you. Every day. That's all. Not following you around. Not *coverage*. Just one second, any time, wherever you are. You'd hardly notice. I'd put them all together at the end and it'd be however many days, in however many seconds." },
      { s: 'minji', f: 'sad', t: "...And if one day you go. The way you went. Frame two-oh-five and then two-oh-six. I'd have the day before. I'd have the second before. I'd have every day up to it, and I'd know which one was the last one, because it'd be the last one in the file." },
      { s: 'minji', f: 'serious', t: "That's the real reason. I'm telling you the real reason because you'd know anyway. I can't stop rolling, Solar. I've tried. I don't think I'm supposed to. I think if I'm rolling, I'll at least know. Let me keep the camera on you. Just say it's all right." },
      { n: "The red light on the front of the silver camera was on. It was already running. It had been running since she turned it, and she knew Solar knew, and she didn't apologize for it. She sat with her knees drawn up and her arms round them and the gold coming in under the clouds onto both of them, and waited, and the camera waited with her, patient, its little red eye on." },
      // CG: eqx-one-second — a seaside park in the first sun after rain, a girl sitting on damp grass with her arms round her knees beside a tiny tripod, the silver camera on it turned toward a second girl lying in the grass in low gold light, its red record light on.
      { choose: [
        { t: "Keep rolling. I won't go anywhere you can't see.", notes: 3, tally: { cakes: 1, 'asks.minji': 'yes' }, then: [
          { n: "Minji's whole face opened. She put her forehead down on her knees and laughed into them, short, wet, and lifted her head again with her eyes shining, and reached out and touched the top of the camera with two fingers, like you'd pat a dog that had done well." },
          { s: 'minji', f: 'happy', t: "...Okay. Okay. Day one. That's day one. That one's longer than a second. That one's like forty seconds. I'm keeping all forty. It's the pilot." },
          { n: "She didn't turn it off. It ran the whole rest of the afternoon, in the grass, on the tripod, pointed at Solar, and Minji glanced at it now and then the way you'd glance at a clock, and each time she did, something in her face settled a little further, like a house on its foundations." }
        ] },
        { t: "Turn it off. I'm right here. Look at me, not at it.", notes: 2, tally: { 'asks.minji': 'no' }, then: [
          { s: 'minji', f: 'sad', t: "...Right. Yeah." },
          { n: "She turned it off. She did it at once, with her thumb, not arguing, and the little red eye went out, and she looked at Solar the way Solar had asked her to, straight, no screen, and Solar watched her try to hold it, the looking, and watched how much it cost her, and how her hand stayed on the camera on the grass between them the whole time, flat, the way you'd keep a hand on the rail of a moving train." },
          { s: 'minji', f: 'neutral', t: "I'm looking. I'm looking at you. It's just. If I'm only looking, I'm only going to remember it. And I don't trust me." }
        ] },
        { t: "Film what you want. Where I go is mine. What you keep is yours.", notes: 2, tally: { choose: 1, 'asks.minji': 'choose' }, then: [
          { s: 'minji', f: 'neutral', t: "...That's not a yes." },
          { s: 'solar', f: 'neutral', t: "It's not a no either." },
          { n: "Minji looked at her for a long time over the top of the camera. Then she looked down at it. The red eye. She put her finger on the button and didn't press it, and didn't take her finger away, and Solar saw her understand that whichever she did now, it was going to be her doing it, and nobody else's, and that she'd have to remember which." },
          { s: 'minji', f: 'serious', t: "...You're really annoying. You know that. You're the most annoying person I've ever been in love with. That's a lot of people. That's a long list." },
          { n: "She left it running. Then, after a minute, she turned it off. Then she sat there with her hand on it, not knowing which one she'd meant, and Solar didn't tell her." }
        ] }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Later, packing up, she took the old camera out of her bag and flipped its screen out and held it so Solar could see, and didn't say anything, and didn't need to." },
        { n: "The guesthouse roof, the night of the twenty-seventh, from midnight. Across the street, in the bedrooms of the houses, in the red, the coffins. Every one of them, frame by frame, very slowly, all together, turning on their beds, a degree, two degrees, the way a crowd turns when somebody walks into a room. Away from the island. Toward the river." },
        { s: 'minji', f: 'neutral', t: "I watched it eleven times. Then I gave it to Mitsuru. She watched it once and put it in the drawer with the other one." },
        { s: 'minji', f: 'sad', t: "...She's going to need a bigger drawer." }
      ], else: [
        { ifEvent: 'eqx-last-grain', then: [
          { n: "Later, packing up, she said, without looking up from the tripod's feet, that she hadn't filmed it. The river street. The twenty-seventh. Jaehyun had stood in the guesthouse doorway with his arms out on both sides of the frame and said *no, Minji* in a voice she'd never heard him use, and she'd stopped, and it was the first thing in her life she'd ever not filmed because somebody asked her not to." },
          { s: 'minji', f: 'neutral', t: "Eunchae has the last photo. Of him. Saluting with his chopsticks. She showed me. I asked her to send it to me and then I asked her not to. I don't know which one I meant." }
        ] }
      ] },

      { place: 'Kirijo Guesthouse · Roof', time: 'Night', bg: 'kirijo-guesthouse-roof-night', music: 'night', soft: true },
      { n: "She walked Solar back via the guesthouse instead of the station, which was not on the way to anywhere, and nobody mentioned it, and at the guesthouse she took her up the back stairs to the roof, past the second floor where Jihoon was snoring through a door and Cherry was watching something loud on a laptop, out onto the flat gritty roof where the tripod marks were." },
      { n: "The night was warm and damp and smelled of the sea and wet concrete. Across the bay the bridge stood up out of the dark with all its lamps lit, a long white line, nobody on it. Not yet. It was only half past ten. Minji didn't set up the camera. She sat down on the low wall with her back to the bridge, on purpose, Solar thought, and patted the concrete beside her." },
      { s: 'minji', f: 'neutral', t: "I come up here every night at half eleven and set up and point it at the bridge and wait. Every night. Jaehyun brings the tea up at quarter to twelve and goes down again at five to. He won't stay for it. He says he doesn't want to see her. He says it like he's apologizing." },
      { s: 'minji', f: 'flustered', t: "It's half ten. I've got an hour. I've never had an hour up here without the camera before. I don't know what you do with your hands." },
      { choose: [
        { t: "(Take her hands. Show her.)", notes: 3, then: [
          { n: "She took Minji's hands, both of them, off the wall, where they'd been fidgeting with a loose bit of grit, and held them in her lap, and Minji looked down at them as if she'd never seen her own hands without something in them, which, Solar thought, she probably hadn't, not in years." },
          { s: 'minji', f: 'flustered', t: "...Oh. That's what you do with them. Okay. That's. Okay." }
        ] },
        { t: "You could always film me.", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "Shut up. Don't tempt me. It's in the bag. It's *right there* in the bag." }
        ] }
      ] },
      { n: "They sat like that. Below them the town hummed in the warm dark, summer coming; somebody's radio, a car door, the long low sound of the monorail going over the water on its last run, lit like a thread. Minji's shoulder was against hers. Her hair smelled of the grass from the park and the cheap guesthouse shampoo, which was green apple, and which Solar would think about for days, at the worst moments." },
      { n: "Then Minji reached into her bag, slowly, the way you'd reach into a bag with something asleep in it, and took out the silver camera. And set it on the wall between them. And pressed record, and the little red eye came on. And turned it, by its body, carefully, so that the lens was pointed at them. Both of them. Side by side on the wall, in the dark, with the town behind." },
      { s: 'minji', f: 'neutral', t: "...Day one. Second take. I'm in this one. Don't look at it." },
      { n: "Then she leaned in." },
      { choose: [
        { t: "(Kiss her. Let the camera have it.)", notes: 3, flag: 'eqx-minji-on-tape', then: [
          { n: "Solar kissed her, on the guesthouse roof with the red eye watching, and Minji made a small sound and her hands, which had never known what to do without something in them, knew exactly what to do now; one went flat at the small of Solar's back and pulled her in along the warm wall, and the other went into her hair, and she kissed the way she framed things, as if she'd only get the one take and was going to get it right." },
          { n: "It went on. The camera ran. At some point Solar's back was against the concrete of the roof and Minji was over her with her hair falling down round both their faces like a curtain, and the stars, the few the town let through, were somewhere past her shoulder, and Minji's mouth was at her throat, and the little red light on the wall above them went on watching, and neither of them looked at it, and neither of them turned it off." }
        ] },
        { t: "(Reach over and turn the camera away first. Then kiss her.)", notes: 3, flag: 'eqx-minji-turned', then: [
          { n: "Solar reached over and turned the camera, by its body, gently, until it was pointed at the bay and the town and the bridge and nothing else. Minji watched her do it. Her face did something complicated, something that started as protest and didn't get there." },
          { n: "Then Solar kissed her. And Minji kissed her back, and her hands, which had never known what to do without something in them, knew exactly what to do now: one went flat at the small of Solar's back and pulled her in along the warm wall, and the other went into her hair, and at some point Solar's back was against the concrete of the roof and Minji was over her with her hair falling down round both their faces like a curtain, and there was nobody on the bridge and nobody on the tape, and Minji, for once, didn't keep any of it." },
          { s: 'minji', f: 'flustered', t: "...That's the second thing I've ever wanted and not got on tape. I'm keeping count. Of the things I don't keep. It's a very short list. You're both of them." }
        ] }
      ] },
      { n: "At a quarter to twelve there were three knocks on the roof door, spaced, polite, the procedure. Jaehyun, with the tea. He opened the door one inch, and stopped, and they heard him stop." },
      { s: 'jaehyun', f: 'flustered', t: "...I'll leave it on the step." },
      { n: "He left it on the step. Two cups on a tray, not one. He'd brought two. He'd known, Solar realized, somehow, from the bottom of the stairs, or from the look on Minji's face at the door that afternoon, or from nothing at all, the way older brothers know things, about their sisters especially, and wish they didn't. He shut the door very quietly and they heard him go down the stairs, slowly, so they'd know he'd gone." },
      { n: "Minji lay on the roof with her head on Solar's arm and laughed at the sky until she cried, and then sat up, and set up the tripod, and pointed it at the bridge, and pressed record, at eleven fifty-four, because it was eleven fifty-four, and some things she was still going to do every night, whatever else changed. Then she lay back down beside Solar with the tea and her other hand empty, and waited for twelve with her, and didn't look through it once." }
    ] },
    { after: '6/22', title: '4: b-roll', place: 'Port Island · Seaside Park', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "It was raining on the sea. Not on the park, not yet; on the sea, out past the breakwater, a gray curtain of it hanging down from one low cloud and moving very slowly toward the shore over the flat water, and you could see the edge of it, a line where the sea went from pewter to pocked, coming in." },
      { n: "Minji was at the sea wall with the silver camera on the little shoe-high tripod, filming it come. She didn't look round. She said *hi* to the viewfinder, softly, the way you'd say hi to somebody across a sleeping baby, and lifted one hand off her knee and held it out behind her, palm up, without turning, and Solar took it and sat down on the damp wall beside her." },
      { n: "Neither of them said anything about the roof." },
      { n: "It sat between them on the wall like a third person. It had been sitting between them ever since, at breakfast at the dorm when Minji came over with Jaehyun's tea tray, in the lounge, on the monorail, across a konbini counter at noon with two onigiri and one bottle of tea between them. The roof. The gritty concrete and the curtain of her hair and the little red light on the wall above them, watching, or turned to the bay." },
      { s: 'minji', f: 'neutral', t: "...I made a list. Of things not to say about it. So I'd know which ones to avoid." },
      { s: 'minji', f: 'flustered', t: "It's long. It's a long list. I'm on item four and I've already said item one, which is *I made a list*." },
      { choose: [
        { t: "What's item two?", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "Item two is *I think about it about once every eleven minutes*. Which I measured. Which is item three." },
          { s: 'minji', f: 'neutral', t: "...Item four is the real one. I'm not saying item four." }
        ] },
        { t: "(Kiss her instead of answering.)", notes: 3, flag: 'eqx-minji-unsaid', then: [
          { n: "She leaned over on the wet wall and kissed her, short, at the corner of her mouth, and Minji went still the way she went still for a shot, and then leaned in after it when it ended, two centimeters, as if following focus." },
          { s: 'minji', f: 'neutral', t: "...That's not an answer. I'll take it as b-roll." }
        ] },
        { t: "You can say all of them. I'm not going anywhere.", notes: 2, then: [
          { s: 'minji', f: 'sad', t: "You can't promise that. You've never once been able to promise that." },
          { s: 'minji', f: 'neutral', t: "...But okay. Okay. I'll say one more. Item four. You asked." }
        ] }
      ] },
      { s: 'minji', f: 'serious', t: "Item four is: I'm not going to ask you what this is." },
      { s: 'minji', f: 'neutral', t: "I know there's Haechan. There's been Haechan since before I knew you. I know Akihiko-senpai runs past the dorm at six every morning like a metaphor. I know there's a guesthouse full of boys who came through a well for you. I'm not stupid and I'm not new." },
      { s: 'minji', f: 'serious', t: "I'm not asking. I'm just telling you I'm not. So you don't have to sit there waiting for me to." },
      { choose: [
        { t: "There's Haechan. There's a lot. I'm not going to lie to you about any of it.", notes: 3, flag: 'eqx-minji-honest', then: [
          { n: "Minji looked at her. Not through anything. Just looked, for a long time, with the rain coming in over the sea behind her face." },
          { s: 'minji', f: 'neutral', t: "...Thank you. That's the thing I actually wanted. Not an answer. Just you not doing the face." },
          { s: 'minji', f: 'serious', t: "One rule. Mine, not yours. Don't come to me to feel better about somewhere else. I won't be that. I'd rather be a friend with a camera forever than the place you go after." },
          { s: 'solar', f: 'neutral', t: "You're not somewhere after." },
          { s: 'minji', f: 'neutral', t: "...Okay. Okay. I'm writing that down. That's item five." }
        ] },
        { t: "I don't know what this is yet.", notes: 3, flag: 'eqx-minji-honest', then: [
          { s: 'minji', f: 'neutral', t: "...Good. Me either. That's the most honest thing anybody's said on this wall." },
          { s: 'minji', f: 'serious', t: "Just. One rule. Mine. Don't come to me to feel better about somewhere else. I'd rather point a camera at you forever than be the place you go after." }
        ] },
        { t: "(Don't say anything. Hold her hand tighter.)", notes: 2, flag: 'eqx-minji-unsaid', then: [
          { n: "She didn't say anything. She held Minji's hand tighter on the wall between them, and Minji looked down at the two hands, and Solar watched her frame it, and decide it was a good shot, and decide not to ask what it meant." },
          { s: 'minji', f: 'neutral', t: "...Okay. That's fine. That's a very good shot. I'll figure out the edit later." }
        ] }
      ] },
      { n: "The rain reached the breakwater. The line of it came over the last of the flat water and Minji leaned in to the viewfinder, very still, to get the moment it hit the wall; and it hit, a long hiss down the whole length of the sea wall at once, and both of them got wet, and Minji didn't move until the shot was done." },
      { ifChoice: { 'asks.minji': 'yes' }, then: [
        { n: "After, under the shelter by the vending machines with water running off the roof in a sheet, she showed Solar the file. She'd been doing it. Every day since the roof. One second. Sixteen of them now, in a row on the little screen, sixteen days of Solar." },
        { n: "Solar at breakfast with a spoon in her mouth. Solar on the monorail, asleep against the window. Solar turning round at the gate. Solar laughing at something off-screen, Junpei probably. Solar's hands round a can. Sixteen seconds, and Minji played them through once, and it went by so fast it was almost a single movement, a girl turning her head across sixteen days." },
        { s: 'minji', f: 'happy', t: "The pilot's still the longest. Forty seconds. I'm not cutting it. Directors' privilege." },
        { s: 'minji', f: 'neutral', t: "...Except. Look at day nine. I want you to look at day nine and tell me I'm crazy." },
        { n: "Day nine was the station. Solar on the platform at a quarter past eight in her blazer with the morning crowd round her. Everything in the frame was sharp: the yellow line, the lettering on the pillars, the pores on the cheek of the salaryman beside her. Solar wasn't. Solar was soft. Not blurred, not moving; soft, the way a lens is soft when it's looking for something and can't decide where it is." },
        { s: 'minji', f: 'serious', t: "The autofocus hunted. On you. For the whole second. It locked on the man beside you and the sign and the pillar and it couldn't find you. It went in and out, in and out, like it was looking for something it knew was there." },
        { s: 'minji', f: 'neutral', t: "It's never done that. Not once. Not in two years of you. The camera *loves* you, Sol. It's the one thing it's always known how to do." }
      ], else: [
        { ifChoice: { 'asks.minji': 'no' }, then: [
          { n: "After, under the shelter by the vending machines with water running off the roof in a sheet, she got out a notebook, not the camera. A small black one with squared paper. On every page, a little rectangle drawn in pencil with a ruler, the shape of a frame, and inside each rectangle, a drawing. Not good ones. Quick. Solar at breakfast, a spoon. Solar on the monorail, a slumped shape against a window. Solar at the gate." },
          { s: 'minji', f: 'flustered', t: "You said turn it off. So I turned it off. I haven't filmed you once since the roof. I film everything else. The sea, the cat at the guesthouse, Jihoon losing at the crane game." },
          { s: 'minji', f: 'neutral', t: "I'm not filming you. I'm drawing you. That's legal. You didn't say anything about drawing." },
          { s: 'minji', f: 'sad', t: "...They're bad. I can't draw. I keep doing your face from memory and getting it wrong. It's somehow worse than not having it." }
        ], else: [
          { n: "After, under the shelter by the vending machines with water running off the roof in a sheet, she showed Solar the file anyway. Not to prove anything. Just to show." },
          { n: "Nine seconds. Over sixteen days. Some days there, some days not, no pattern Solar could see, and Minji scrolled past the gaps without stopping, the way you'd walk past a doorway you'd decided not to look into." },
          { s: 'minji', f: 'neutral', t: "I filmed Tuesday. Then I deleted it. I don't delete things. Then Wednesday I filmed you twice and kept both. I don't know what I'm doing. You said it was mine and I believed you and now I have to decide every single day." },
          { s: 'minji', f: 'sad', t: "It's exhausting. It's the best thing anyone's ever done to me. I'm so mad at you." }
        ] }
      ] },
      { choose: [
        { t: "It's the rain. The light was bad.", notes: 1, then: [
          { s: 'minji', f: 'neutral', t: "Yeah. Sure. The rain." },
          { n: "She said it the way Hyein said *it's the phone*: once, kindly, to make it true for a minute. She put the camera in her bag and zipped the bag shut and kept her hand on the zip." }
        ] },
        { t: "Then keep looking. I'll stand still.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "...Okay. Okay. Stand still. Right there. Under the drip." },
          { n: "She stood still. Minji looked at her, without the camera, the way she'd only ever done a handful of times, and Solar felt it like warmth on her face, and stood in it, under the drip off the shelter's roof, and didn't do the face." }
        ] },
        { t: "(Take her hand off the camera.)", notes: 3, then: [
          { n: "She took Minji's hand off the camera, the way she'd done in April, and Minji let her, and looked at her own empty hand in Solar's, and laughed, short, through her nose." },
          { s: 'minji', f: 'neutral', t: "You keep doing that. Taking it off me. Like a gun." }
        ] }
      ] },

      { place: 'Kirijo Guesthouse · Minji’s Room', time: 'Evening', bg: 'kirijo-guesthouse-night', music: 'night', soft: true },
      // BG: kirijo-guesthouse-minji-room — a small plain tatami room in a company guesthouse at night, a futon on the floor, a camera on a mini tripod on the windowsill aimed at the street, film reels and memory cards in a shoebox, a strip of fairy lights.
      { n: "Her room at the guesthouse was the smallest one, at the end of the second floor, over the kitchen, so it smelled faintly of rice all evening. Six mats. A futon. A low table with three hard drives on it in a stack with tape labels in her small capitals, *APR*, *MAY*, *JUN*. A shoebox of memory cards. A strip of cheap fairy lights she'd bought at the hundred-yen shop and tacked round the window frame." },
      { n: "And on the windowsill, the camera. The old one, Jaehyun's, *PROPERTY OF JAEHYUN LEE. PLEASE ASK. (MINJI.)*, on its rubber tripod, pointed down at the street the way it had been pointed every night since the sixth of April, waiting for twelve." },
      { s: 'minji', f: 'neutral', t: "Don't look at the drives. It's three months of the street. I know. It's a lot of street." },
      { n: "It was raining again, against the window, the fairy lights doubled in the wet glass. Minji sat down on the futon with her back to the wall and Solar sat down beside her, and for a while they didn't do anything, just sat with their shoulders touching and listened to the rain and somebody downstairs, Cherry, laughing at something on a laptop." },
      { n: "Then Minji turned her head. Solar was already looking at her." },
      { n: "It wasn't like the roof. The roof had been an hour without the camera and a girl who didn't know what to do with her hands. This was slower. Minji kissed her like she was checking something, carefully, the corner of her mouth and then the middle and then the corner again, and her hand came up and held Solar's jaw with the thumb just under her ear the way you'd hold a lens to keep it steady, and Solar felt herself tip back against the wall, and then not against the wall, and the fairy lights went sideways." },
      { n: "At some point Minji sat up, with her hair coming down, and reached over Solar without looking and turned the camera on the sill round by its body until it faced the wall." },
      { s: 'minji', f: 'flustered', t: "...It's watched enough. It can watch the wall." },
      { n: "And then she came back down, and the rain went on against the glass, and Solar stopped noticing the rain." },
      { dark: true },
      { n: "Three knocks. Spaced. Polite. Quarter to twelve." },
      { s: 'jaehyun', f: 'neutral', t: "...Jaehyun. It's Jaehyun. I'm going to say my name, and then I'm going to put two cups down, and then I'm going to go away very quickly." },
      { n: "They heard the tray go down on the boards outside. They heard him go away, very quickly, down the stairs, missing one, and swearing under his breath in English at the bottom, quietly, in the voice of somebody who'd been raised not to." },
      { n: "Minji put her face in Solar's neck and laughed until she shook." },
      { choose: [
        { t: "(Stay. Sit up in the red with her.)", notes: 3, flag: 'eqx-minji-stayed', then: [
          { n: "She stayed. They drank Jaehyun's tea, lukewarm, sitting up against the wall in a blanket, and at twelve the red came through the window and the fairy lights went out and the hum came up through the floor, and Minji's hand found hers, and they sat in it the way everyone sat in it now, awake, with their backs to something solid." },
          { n: "The camera on the sill faced the wall. For the first time since April nobody filmed the street. Minji kept looking at it, in the red. Then she stopped." }
        ] },
        { t: "(Get up. Let her brother walk you home.)", notes: 3, flag: 'eqx-minji-walked', then: [
          { n: "She got up. Minji held on to her wrist for a second, and let go, and sat on the futon with the blanket round her and her hair down and watched her put her shoes on at the door, and said *text me from the gate*, and Solar said *I will*, and did." },
          { n: "Jaehyun was in the lobby with his jacket on already. He didn't say anything. He just held the door." }
        ] }
      ] },
      { ifFlag: 'eqx-minji-walked', then: [
        { place: 'Iwatodai · Street', time: 'Late Night', bg: 'iwatodai-riverside-night', music: 'night', soft: true },
        { n: "They walked back to the dorm under one umbrella, his, the expensive one he'd bought to replace the one the sea took at Golden Week, and he held it more over her than over himself and pretended he wasn't." },
        { s: 'jaehyun', f: 'neutral', t: "I'm not going to say anything." },
        { s: 'jaehyun', f: 'neutral', t: "...I'm going to say one thing. She's had a camera between her face and everything else for as long as I've known her. Tonight she put her own tray down on the stairs to pick up mine." },
        { s: 'jaehyun', f: 'flustered', t: "That's all. That's the one thing. Dad would've made it a speech. I'm making it a sentence." },
        { n: "At the gate he waited under the light while she went up the steps, the way he did for her every time, and only went when he saw her door, and Solar stood at her window and watched him go back down the hill toward the station with the umbrella over nobody." }
      ] },
      { ifFlag: 'eqx-minji-stayed', then: [
        { place: 'Iwatodai Dorm · Front Gate', time: 'Early Morning', bg: 'iwatodaidorm-front-night', music: 'tender', soft: true },
        { n: "Minji walked her back at six, because the rule said someone walked everyone everywhere, and because the rain had stopped and the street was steaming and neither of them wanted to say goodbye at a door. They didn't hold hands. Their knuckles touched every few steps, going up the hill, and neither of them moved away." },
        { n: "Haechan was on the dorm steps. Of course he was. Two cans of coffee from the machine at the bottom of the hill, one open, one not: his eleven o'clock habit, moved to six, which meant he hadn't gone to bed. He was sitting with his elbows on his knees and the closed can in his hand, and he looked at the two of them coming up the path in yesterday's clothes, and then at the can." },
        { n: "Solar felt her own face start to do something and stopped it. Not the SUnews face. Not any face. She just let him see whatever was there." },
        { s: 'haechan', f: 'neutral', t: "Morning." },
        { s: 'minji', f: 'neutral', t: "...Morning." },
        { n: "He held the closed can out. Not to Solar. To Minji. Minji looked at it, and at him, and took it, and he nodded once, as if something had been signed, and went back to his own can, and looked out over the wet street, and didn't ask anything. He never did. That was the thing about him, and Solar had never once in two lives been able to decide whether it was the kindest thing about him or the hardest." },
        { s: 'haechan', f: 'smirk', t: "It's the good kind. The one with the cat on it. Don't let her tell you the other one's better, she's wrong." },
        { n: "Minji stood at the gate with a can of coffee she hadn't bought and a boy she had every reason not to like being decent at her at six in the morning, and Solar watched her not know what to do with it, and then do the only thing she knew, which was to look at it properly, the whole frame, and keep it." },
        { s: 'minji', f: 'neutral', t: "...Thanks." },
        { n: "She went back down the hill with the can in both hands. Solar went up the steps and sat down on the one below Haechan's, and he moved his foot an inch so her shoulder had somewhere to go, and they watched the street steam together, and nobody said anything about anything until Junpei opened the door behind them in his pajamas and said *oh, no, no, no, not on the steps, the book doesn't have a column for the steps*." }
      ] },
      { n: "Later, much later, she'd think about the second on the platform. Day nine. Everything sharp but her. A lens going in and out, in and out, the way you'd feel along a wall in the dark for a light switch you were sure was there." }
    ] },
    { after: '8/1', title: '5: twos', place: 'Port Island · Seaside Park', time: 'Daytime', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "Summer had flattened Seaside Park. The grass had gone the color of straw, and the sea was so flat and so bright it looked solid, like you could walk out on it, and the only shade was under the three pines by the sea wall, where every old man on Port Island seemed to have brought his own folding stool." },
      { n: "Minji was under the furthest pine, cross-legged in the needles, filming nothing. The sea. The glare off it. Her hair was up off her neck in a knot with two pencils through it this time, and she had a towel round her shoulders against the sun, and she looked smaller than she had in June, and older, the way everybody had since the twenty-seventh." },
      { ifEvent: 'eqx-last-grain', then: [
        { n: "She'd told Solar about it, the morning after, in one sentence, on the phone: that Jaehyun had stood in the guesthouse doorway with his arms out across the frame and said *no, Minji*, and she'd stopped, and it was the first thing she'd ever not filmed because somebody asked. She hadn't said anything about it since. She'd been filming the sea ever since." }
      ] },
      { s: 'minji', f: 'neutral', t: "Hi. Sit in the shade. You'll burn. You burn in about four minutes, I've timed it." },
      { s: 'minji', f: 'neutral', t: "...I'm filming the sea because the sea doesn't do anything. It just stays. I needed something that just stays." },
      { choose: [
        { t: "(Sit behind her. Let her lean back on you.)", notes: 3, then: [
          { n: "She sat down in the pine needles behind her with her knees on either side of Minji's hips, and after a second Minji leaned back against her, all her weight, the camera still up, still rolling, the back of her head on Solar's collarbone and her hair smelling of sun and the green-apple shampoo." },
          { s: 'minji', f: 'neutral', t: "...Okay. That's better. Now the sea's got something to do. It's being looked at by two people." }
        ] },
        { t: "Ken's still not eating anything soft.", notes: 2, then: [
          { s: 'minji', f: 'sad', t: "I know. Shinjiro's making him toast and burning it on purpose. Everybody pretends not to notice it's on purpose." },
          { s: 'minji', f: 'neutral', t: "I'm not filming that either. I'm learning. Jaehyun says I'm learning. He says it like a dad at a recital." }
        ] },
        { t: "The sea's a good choice.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Right? It's the best actor I've ever worked with. Takes direction, never complains, does the same thing every take." }
        ] }
      ] },
      { n: "They sat there till the shade had moved off them and onto the old men. Minji filmed the sea. Solar watched her film it. Then Minji lowered the camera and said, not looking round, very casually, the way you'd mention the weather." },
      { s: 'minji', f: 'neutral', t: "So. Mitsuru's rule. Twos. Nobody alone after dark, nobody alone in a bed, all that." },
      { s: 'minji', f: 'neutral', t: "Jaehyun's on the boarding house tonight with Yunjin. Cherry's in the lounge with Jihoon's crew, they're doing some kind of tournament and nobody's going to bed. I'm a one." },
      { s: 'minji', f: 'flustered', t: "...That's against the rule. A one. I'm just pointing out that it's against the rule. Mitsuru would want it fixed. I'm being a good citizen." },
      { choose: [
        { t: "I'll fix it. For Mitsuru.", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "For Mitsuru. Very civic of you. I'll write her a thank-you note." }
        ] },
        { t: "Is that you asking me to stay over?", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "No. No, it's me *not* asking. Very loudly. In a park. That's different. That's a whole different genre." },
          { s: 'minji', f: 'neutral', t: "...Yes. It's me asking you to stay over. You can say no. You can always say no. I'll ask twenty times either way." }
        ] },
        { t: "(Take the camera off her. Film her saying it again.)", notes: 3, then: [
          { n: "She took the camera off her and turned it round and Minji put her hand over her face and said it again, through her fingers, *I'm a one*, and laughed, and took her hand away, and looked straight into the lens, and didn't look away this time." },
          { s: 'minji', f: 'neutral', t: "...Keep that. That's yours. Don't give it to me. I'll watch it." }
        ] }
      ] },

      { place: 'Kirijo Guesthouse · Minji’s Room', time: 'Night', bg: 'kirijo-guesthouse-night', music: 'night', soft: true },
      { n: "Her room in August was hot as the inside of a mouth. The window was open as far as it went, and the fan on the floor turned its head back and forth between them like somebody following a tennis match, and the fairy lights round the frame had been left on so long one of them had gone out, and somebody downstairs, Junkyu, was losing at something loudly." },
      { n: "The camera on the sill was pointed at the street again. Solar noticed. Minji saw her notice." },
      { s: 'minji', f: 'neutral', t: "Since the twenty-seventh. I need to see which way they turn. It's not for me. It's for Mitsuru's drawer." },
      { n: "And then she reached over and turned it, not to the wall this time, to the room. To the futon. To them." },
      { s: 'minji', f: 'serious', t: "...Is that okay? It's not for anyone. It's not even for me. I just need to know that if something comes in tonight, it's on a card somewhere. That you were here, that I was here. That we were." },
      { choose: [
        { t: "It's okay. Leave it on.", notes: 3, flag: 'eqx-minji-rolling', then: [
          { n: "She left it on. The little red eye on the sill, and the fan going back and forth under it, and Minji looked at it once, over Solar's shoulder, and then didn't again." }
        ] },
        { t: "(Turn it back to the street.)", notes: 3, flag: 'eqx-minji-street', then: [
          { n: "She reached up and turned it back to the street. Gently. Minji watched her do it with her lip between her teeth, and then let the breath out, and nodded, and pulled her down." },
          { s: 'minji', f: 'neutral', t: "...Okay. The street. The street needs it more." }
        ] }
      ] },
      { n: "It was too hot for blankets, too hot for anything, and they did it anyway; Minji's mouth on hers tasting of the barley tea from the vending machine, Minji's damp hair sticking to both their faces, her hands, which never knew what to do without something in them, knowing exactly. The fan turned its head away from them and back. Away and back. Somebody downstairs won something and the whole lounge cheered, and Minji laughed into Solar's shoulder and didn't stop what she was doing." },
      { n: "The window was open on the hot dark street, and the fairy lights, and the one that had gone out." },
      { dark: true },
      { n: "They were awake for the red. Everybody was, now. Sitting up on the futon against the wall in nothing but a sheet, shoulder to shoulder, Minji's hand in hers and her thumb moving on Solar's knuckles, the way it moved on a zoom rocker, out and in, not zooming." },
      { n: "Nothing happened. The hum came and went in the walls. The fan had stopped with the power, its head turned toward the door. Neither of them looked at the door. They were looking at each other, in the red, which made everything look like an old photograph left in the sun, and Minji was saying something about the color, how she'd never managed to get it right on a card, how it always came out too pink." },
      { n: "Then the lights, and the fan starting up again with a click, turning its head, and Minji asleep on her shoulder within a minute, the way people fell asleep after the red, all at once, like a light switched off." },

      { place: 'Kirijo Guesthouse · Minji’s Room', time: 'Morning', bg: 'kirijo-guesthouse-day', music: 'tender', soft: true },
      { n: "She woke to light. White, early, a quarter to six, coming in sideways through the open window over the street, and the fan still going, and Minji's hair in her mouth." },
      { n: "Minji was awake already. She was lying on her side with her head on her arm, looking at Solar from about twenty centimeters away. Not with anything. Just looking. As if she'd been doing it for a while." },
      { s: 'minji', f: 'neutral', t: "...Don't move. I'm not filming. I'm just. Don't move yet." },
      { choose: [
        { t: "(Don't move.)", notes: 3, then: [
          { n: "She didn't move. She lay there and let herself be looked at, in the white light, with her hair everywhere and the crease of the pillow on her cheek and no face on at all, and Minji looked, and looked, and then reached out one finger and touched the crease on her cheek, very lightly, the way you'd touch a mark on a lens." },
          { s: 'minji', f: 'neutral', t: "...Okay. Got it. That one's just in my head. That's the only copy." }
        ] },
        { t: "Good morning.", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "*Don't*. Don't say good morning like that. In that voice. I'm going to have to get up and walk into the sea." },
          { n: "She didn't get up. She put her face in the pillow and then turned it back out, red to the ears, and looked again." }
        ] },
        { t: "(Pull her back down. It's early.)", notes: 3, then: [
          { n: "She pulled her down by the wrist, and Minji came, laughing, into the crook of her shoulder, and they lay there tangled in the one sheet with the fan going and the street waking up outside, a bicycle bell, a shutter going up, and neither of them said anything for a long time." }
        ] }
      ] },
      { ifFlag: 'eqx-minji-rolling', then: [
        { n: "The camera on the sill was still going. Its little red eye. Minji looked at it over Solar's shoulder, and her face changed, and she sat up with the sheet round her and reached for it and stopped it and flipped its screen out, and scrubbed backward through the night with her thumb, fast, the red hour going by in a smear." },
        { n: "Then she stopped. And went back. And played it again." },
        { s: 'minji', f: 'serious', t: "...Sol. I want you to look at something. You don't have to. I want to ask first. Do you want to see it?" },
        { choose: [
          { t: "Show me.", notes: 3, flag: 'eqx-minji-knob-seen', then: [
            { n: "She showed her. The room in the red, from the sill, the color of an old photograph. The two of them sitting up against the wall in the sheet, small in the frame, looking at each other, Minji's mouth moving. The fan stopped, its head toward the door. The door." },
            { n: "At forty minutes past, the doorknob turned. Slowly. A quarter turn, the old brass knob going round in the red as if a hand on the other side were trying it, gently, the way you'd try a door you didn't want to wake anybody behind. It held there. Then it turned back. Then it was still." },
            { n: "In the frame, the two of them didn't look up. They were looking at each other. Minji was saying something about the color." },
            { s: 'minji', f: 'sad', t: "...I didn't see it. I was looking at you." },
            { s: 'minji', f: 'serious', t: "That's twice. That's twice now something's happened right in front of my camera and I didn't see it because I was looking at you." },
            { n: "She didn't say what the other time was. She didn't have to. A park, a kite, a woman with a pram, every face in the frame turned the same way. She said it like an accusation, and then she put the camera down on the futon and put her face in both hands, and Solar understood, slowly, that it wasn't an accusation. It was the most frightened thing she'd ever heard Minji say, and it was also a confession, and she couldn't tell which was bigger." }
          ] },
          { t: "No. Not this morning. Give it to Mitsuru.", notes: 2, then: [
            { s: 'minji', f: 'neutral', t: "...Okay. Okay. Mitsuru's drawer." },
            { n: "She took the card out and put it in an envelope from her bag, and wrote on it in her small capitals, and didn't show Solar what she wrote. Her hand was shaking. She didn't say anything about it. She lay back down with her back to the window and her face to Solar and held on, and Solar let her, and didn't ask." }
          ] }
        ] }
      ], else: [
        { n: "The camera on the sill was still going, pointed at the street. Minji got up and stopped it and flipped its screen out and scrubbed back through the night, the way she did every morning, the red hour going by in a smear, the coffins across the road on their beds. She frowned at it. She went back, and played a bit again." },
        { s: 'minji', f: 'neutral', t: "...They turned toward us. Last night. The ones across the road. Not toward the river. Toward this window. For about a minute. And then back." },
        { s: 'minji', f: 'neutral', t: "It's nothing. It's probably nothing. I'm putting it in the drawer." },
        { n: "She said it twice. Then she lay back down and put her face in Solar's neck and stayed there a long time, breathing, and didn't film anything else all morning." }
      ] },
      { ifChoice: { 'asks.minji': 'yes' }, then: [
        { n: "Before Solar went, Minji picked the silver camera up off the floor and pointed it at her, and Solar knew what it was before the red light came on. Today's second. Solar with her hair still a mess, pulling her shirt on, in the doorway of a hot little room, half turned to look back. One second. Minji checked it, and nodded, and put it down." },
        { s: 'minji', f: 'neutral', t: "Day sixty-something. I've stopped counting the number. I just count the seconds." }
      ] },
      { place: 'Kirijo Guesthouse · Kitchen', time: 'Morning', bg: 'kirijo-guesthouse-day', music: 'tender', soft: true },
      { n: "The guesthouse kitchen at half past six. Somebody had made coffee. Jaehyun had, back from the boarding house with his eyes red-rimmed from sitting up all night on the step with Yunjin, standing at the counter in yesterday's shirt with a mug in each hand." },
      { choose: [
        { t: "(Sit down. Have breakfast with them.)", notes: 3, flag: 'eqx-minji-breakfast', then: [
          { n: "She sat down at the table. Jaehyun put the second mug in front of her without a word, the one he'd been holding as if he'd known, and then, after a moment's thought, went and got a third one for Minji, and sat down across from them both, and read the back of the cereal box with enormous concentration." },
          { s: 'jaehyun', f: 'neutral', t: "...Good morning. I have nothing to say. This cereal has a very interesting history." },
          { n: "Cherry came in in a towel, saw the three of them, stopped, looked at Solar, looked at Minji, looked at Jaehyun reading the cereal box, said *oh, we're doing this, great*, poured herself a coffee and sat down too, and nobody said anything about anything, and it was the best breakfast Solar had had all summer." }
        ] },
        { t: "(Slip out the kitchen door before anyone else is up.)", notes: 2, flag: 'eqx-minji-slipped', then: [
          { n: "She slipped out the kitchen door. Jaehyun saw her go. He lifted his mug an inch in her direction, a toast, or a goodbye, or a brother's very small permission, and she lifted a hand back, and was out in the white morning with the street still wet from somebody's hose." },
          { n: "Her phone buzzed before she'd got to the corner." },
          { phone: [
            { from: 'minji', t: "u left ur hair tie" },
            { from: 'minji', t: "im keeping it" },
            { from: 'minji', t: "evidence ;]" }
          ], contact: 'minji' }
        ] }
      ] },
      { n: "Walking back along the river in the early heat, she found she was looking at doors. Every door on the street. Every brass knob, every latch, every handle on every shop just opening. She looked at them the way you'd look at somebody's hands." }
    ] },
    { after: '9/28', title: '6: the night I didn’t', place: 'Port Island · Seaside Park', time: 'After School', music: 'tender', scene: [
      { bg: 'port-island-seaside-park' },
      { n: "The wind had turned. It came off the sea now instead of over the island, cold, the first cold of the year, and it went through your blazer like it wasn't there, and the bay was gray and ridged and choppy, every wave with a little white cap on it like a row of lit matches going out." },
      { n: "Minji wasn't filming." },
      { n: "She was on the low wall at the edge of the boardwalk where they'd sat in April, with her bag on her knees and both arms round the bag, and the camera was in it. Solar could see the shape of it through the canvas. The lens cap on. The strap wound tight round the body the way you'd wind a lead round a dog's collar to keep it from running." },
      { n: "She'd been like that since the bridge. Everybody had noticed. Nobody had said. Minji without a camera was like Junpei without a joke; it was so wrong that it went round the dorm and the guesthouse in a whisper and came back to Solar from four directions, *have you seen Minji*, *Minji's not filming*, *is Minji okay*, and Solar had said *I'll go* to all four." },
      { s: 'minji', f: 'neutral', t: "Hi. I know. Everybody's sending you. Jaehyun sent you. He thinks I don't know he sent you." },
      { s: 'minji', f: 'sad', t: "...He's got his dad to look after. He shouldn't be looking after me too. Nobody should be looking after me. I'm fine. I just haven't got it out." },
      { choose: [
        { t: "(Sit down on the wall. Don't touch the bag.)", notes: 3, then: [
          { n: "She sat down on the wall beside her, close, but she didn't touch the bag, and didn't look at it, and after a while Minji's arms loosened round it, a little, the way a fist loosens when it forgets it's a fist." }
        ] },
        { t: "How's Jaehyun?", notes: 3, then: [
          { s: 'minji', f: 'sad', t: "...He sleeps on the floor outside his dad's door at the boarding house. On the boards. With his shoes on. He says it's because the futon's too short. It isn't." },
          { s: 'minji', f: 'neutral', t: "I take him tea now. At night. Three knocks. I say his name and then mine. He opens the door every time, before I've finished. Every time. Like he was standing right behind it." }
        ] },
        { t: "You don't have to be fine.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "I know. I know I don't. I'm still going to try. Somebody in this family has to be fine at the wall for ten minutes." },
          { n: "She said *this family* and didn't hear it, and Solar did, and let it go into her and sit there." }
        ] }
      ] },
      { n: "A ferry went across the mouth of the bay, white, lit already in the gray afternoon, slow. They watched it. Minji's hand went to the bag's zip, and stopped, and came back." },
      { s: 'minji', f: 'neutral', t: "Can I tell you a thing? And you don't fix it. You don't say it isn't true. You just let me say it out loud once, so it's not only inside." },
      { s: 'minji', f: 'serious', t: "On the twenty-third. At the park. When the moon came up." },
      { s: 'minji', f: 'serious', t: "I put the camera down." },
      { n: "She said it in her editing-room voice. Flat. Careful. The voice for describing a problem with a shot." },
      { s: 'minji', f: 'neutral', t: "I'd been rolling all afternoon. The blankets, the dango, your mom laughing at something Mrs. Kim said, your dad trying to sit on the grass in his suit trousers. And then it got near the time and I thought, I want to see this one. Not through anything. I want to see it like a person. Like I did the fireworks." },
      { ifFlag: 'eqx-fireworks-minji', then: [
        { s: 'minji', f: 'sad', t: "Like I did with you. On the step. In August. It was so good, Sol, it was the best thing I've ever not filmed, and I thought, I can do that again. I'm getting better. I can put it down." }
      ] },
      { s: 'minji', f: 'serious', t: "So I put it in my bag. Lens cap on. And I watched the moon come up out of the sea with my own eyes, and it was so beautiful I cried a bit, and I didn't take it out again. Not for the walk. Not for the bridge." },
      { s: 'minji', f: 'sad', t: "Fourteen thousand two hundred and six frames of the night you went, and I've got nothing of the night they did. Not one. The one night of my whole life I didn't roll." },
      { n: "The wind came off the water and took her hair across her face and she didn't move it." },
      { s: 'minji', f: 'serious', t: "I know it's not true. I know a camera doesn't. I know. I'm not stupid. I know it was something on the bridge and not the lens cap." },
      { s: 'minji', f: 'sad', t: "But I've rolled every night since April, Sol. Every night. On the sill, on the roof, on the bridge. And nobody I was filming got taken. Not once. And the night I stopped." },
      { s: 'minji', f: 'sad', t: "...That's what it is. The camera. It's not to catch the frame where you go. It's my hands. It's how I hold on to things without having to touch them. As long as it's rolling, I've got you, I've got all of you, nobody can take a thing that's on a card. That's what I really meant when I asked you. *Let me keep the camera on you.* I meant *let me keep holding on.*" },
      // CG: eqx-lens-cap — a girl sitting on a sea wall in the cold wind with both arms wrapped tight round a canvas bag on her knees, the outline of a camera inside it, her hair across her face, a gray choppy bay and a lit ferry behind her.
      { ifChoice: { 'asks.minji': 'yes' }, then: [
        { s: 'minji', f: 'sad', t: "I've got the second. The day's one. I took it at twenty to six, when the moon came up. You, between Haechan and Hanni, with the light on your face. It's the last one in the file before. It's the last second before." },
        { s: 'minji', f: 'sad', t: "I haven't watched it. I can't. I know exactly what it looks like and I can't." }
      ], else: [
        { ifChoice: { 'asks.minji': 'no' }, then: [
          { s: 'minji', f: 'sad', t: "You told me to turn it off. In June. And I did. And it was the best thing, Sol, it was so good for me, and I don't regret it, and that's what's so awful. Turning it off was the right thing to do. It was the right thing on the twenty-third too. It was still the night." }
        ], else: [
          { s: 'minji', f: 'sad', t: "You said what I keep was mine. And I kept a second of you at twenty to six, with the moon on your face. And then I turned it off. Me. Nobody asked. That was mine too. That's the part. That was mine." }
        ] }
      ] },
      { choose: [
        { t: "(Unzip the bag. Put the camera in her hands.)", notes: 3, flag: 'eqx-minji-camera-back', then: [
          { n: "She reached over and unzipped the bag, slowly, the way you'd reach into a bag with something asleep in it, and took the silver camera out, and unwound the strap from round its body, and put it in Minji's hands." },
          { n: "Minji looked down at it. She didn't lift it. She held it in her lap like something handed back to her at a hospital, and her thumb found the lens cap, and stayed there, and didn't take it off." },
          { s: 'minji', f: 'neutral', t: "...Not yet. But it's out. It's out of the bag. That's something. That's a shot." }
        ] },
        { t: "It wasn't the lens cap, Minji.", notes: 2, then: [
          { s: 'minji', f: 'serious', t: "I said don't fix it." },
          { s: 'solar', f: 'neutral', t: "I'm not fixing it. I'm just saying it once, out loud, so it's not only inside." },
          { n: "Minji looked at her for a long time. Then she laughed, short and wet, through her nose, at having her own words handed back to her, and put her forehead down on her bag." }
        ] },
        { t: "(Don't say anything. Put your arms round her, bag and all.)", notes: 3, then: [
          { n: "She didn't say anything. She put her arms round her, bag and camera and all, the whole hard-cornered armful of her, and held on, on the wall, in the wind, and Minji went stiff and then didn't, and put her face in Solar's shoulder, and cried there, quietly, the way she did everything that wasn't filming: carefully, and as if somebody might need the footage later." }
        ] }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "She hadn't filmed the morning after the Fathers' Hill either. Nobody had asked her not to. She'd just stood in the dorm dining room doorway with the bag on her shoulder and looked at the place at the table nearest the kitchen door, the empty one, and hadn't." }
      ] },

      { ifEvent: 'eqx-empty-chair', then: [
        { place: 'Iwatodai Dorm · Front Gate', time: 'Evening', bg: 'iwatodaidorm-front-night', music: 'night', soft: true },
        { n: "At seven she took a thermos up the hill to the dorm. The fathers were there now, out of that house; Jaehyun had a futon on the lounge floor at the foot of the couch where his father slept, and Minji stood at the gate under the light and knocked three times on the gatepost, and said his name, and then her own, the procedure, his procedure, in her voice." },
        { n: "He came down the steps before she'd finished. He took the thermos in both hands and looked at Solar over the top of it, his sister, and neither of them said anything about their mother, and both of them heard it not being said." },
        { s: 'jaehyun', f: 'neutral', t: "...She'd have liked this. Mom. Somebody bringing somebody tea at a gate. She'd have made it a whole thing." },
        { n: "He went back up the steps with the thermos held against his chest, and at the door he turned round and lifted it an inch, and Minji lifted her empty hand back, and Solar watched her not reach for the bag." }
      ], else: [
        { place: 'The Oka Boarding House · Gate', time: 'Evening', bg: 'eqx-oka-gate', music: 'eerie', soft: true },
        { n: "At seven she took a thermos down the river street to the boarding house, and Solar went with her, because twos, and because she wouldn't have let her go alone if there'd been no rule at all. The street was dark already. The persimmon over the wall had gone orange on one side, the fruit hanging heavy, and still no birds in it." },
        { n: "Minji didn't go through the gate. She stood outside it on the stones and knocked three times on the gatepost, and said his name, and then her own. Jaehyun's procedure, in her voice. Then she stood back under the streetlight where the house could see her, with the thermos held out in both hands, and waited." },
        { n: "He came down the path before she'd finished. He must have been sitting on the step inside the door. He was in his socks, and the shirt he'd had on yesterday, and he took the thermos in both hands across the top of the gate and held it against his chest, and looked at Solar over the top of it, his sister, and neither of them said anything about their mother, and both of them heard it not being said." },
        { s: 'jaehyun', f: 'neutral', t: "...She'd have liked this. Mom. Somebody bringing somebody tea at a gate. She'd have made it a whole thing. She'd have asked for a picture." },
        { s: 'minji', f: 'sad', t: "I know. I'm sorry. I haven't got it out." },
        { s: 'jaehyun', f: 'neutral', t: "No. Good. Don't. Not here." },
        { n: "Behind him, up the path, the kitchen window was lit, low and yellow, and in it Mrs. Oka stood at the sink with her back to them and her white gloves on, washing something slowly, a bowl, round and round. She lifted one gloved hand from the water without turning round. A wave. As if she'd seen them in the glass." },
        { n: "Minji's hand went to the zip of her bag. Solar watched it go. It went all on its own, the way Akihiko's hand closed on nothing, and stopped at the zip, and stayed there." },
        { s: 'jaehyun', f: 'serious', t: "...Don't film her. I don't know why. I've been sleeping in that house since the bridge, and she's been nothing but kind, she brings Dad his tea before he's even awake. Just don't. Not her. Please." },
        { n: "Minji took her hand off the zip. Jaehyun nodded, once, and went back up the path with the thermos, in his socks, and sat down on the step inside the door, facing out, and they saw him through the gap as the door swung to, a long shape on the boards with his back to the house." }
      ] },
      { place: 'Kirijo Guesthouse · Roof', time: 'Night', bg: 'kirijo-guesthouse-roof-night', music: 'night', soft: true },
      { n: "The roof at half past eleven. The tripod marks in the grit, the low wall, the town. She'd brought Solar up the back stairs without saying why, past the kitchen and Mark's door and the floor where Jihoon was asleep with the television on, and out into the cold." },
      { n: "Across the bay, the bridge. Lit end to end. A long white line on the black water. Nobody on it, nobody walking it, a few cars going over slow. Minji had set the tripod up facing it every night from April to September, and hadn't since." },
      { s: 'minji', f: 'neutral', t: "I'm going to ask you something. You can say no. You can always say no." },
      { s: 'minji', f: 'serious', t: "Will you hold it tonight? The camera. Point it at the bridge. Just for the hour. I can't be the one holding it. But I can't have nobody holding it either." },
      { n: "She held the camera out. Strap first. The way she'd once handed it over by the riverside in another year, *your turn*, and Solar remembered that and saw Minji remember it too." },
      { choose: [
        { t: "(Take it. Point it at the bridge.)", notes: 3, flag: 'eqx-minji-held-it', then: [
          { n: "She took it. She wound the strap twice round her wrist the way Minji did, and set it on the tripod, and turned it, and found the bridge in the little screen, the long white line, and pressed the button, and the red eye came on." },
          { n: "Minji let out a breath that seemed to go on for a whole minute. Then she sat down on the wall with her back to the bridge and her shoulder against Solar's leg, and didn't look at the screen, and didn't look at the bridge, and held on to Solar's ankle with one hand, through her sock, the way you'd hold a rail on a boat." }
        ] },
        { t: "(Take it. Point it at the two of you.)", notes: 3, flag: 'eqx-minji-held-it', then: [
          { n: "She took it. She set it on the low wall, the way Minji had in June, and turned it by its body until the lens looked at the two of them, side by side, in the cold, with the bridge behind them like a line drawn under something." },
          { s: 'solar', f: 'neutral', t: "Coverage. If it's on us, it's on the bridge too. You've got both." },
          { n: "Minji looked at the little red eye, and at the two of them in its frame, and at the bridge behind their heads in the frame, and something in her face that had been held shut since the bridge came open, a crack, the width of a door left on the latch." },
          { s: 'minji', f: 'neutral', t: "...Coverage. You stole my word." }
        ] }
      ] },
      { n: "They sat in the cold and waited for twelve. Minji's head was on Solar's shoulder. She talked, for a while, in a low voice, about nothing; about Jaehyun's tea, about his father asking her whether she was *the Kim girl with the camera* and then, when she said yes, asking whether she'd film the boarding house so he could see it later, every room, so he'd remember where everything had been. She'd said yes. She hadn't done it yet." },
      { dark: true },
      { music: 'mystery' },
      { n: "At twelve the red came over the bay from the bridge outward, the lamps going out along it like a fuse burning back, and the hum, and the camera on the wall went on rolling, its little eye the only light, the color of everything." },
      { n: "At twelve-oh-two Solar's phone buzzed. She didn't need to look to know it was Chenle; he texted everybody, now, from the command room, as if the household were a party he was navigating." },
      { phone: [
        { from: 'chenle', t: "u with minji?" },
        { from: 'chenle', t: "theres a floor on the third hill thats all lockers. every locker door is open" },
        { from: 'chenle', t: "theres a camera in every one. all recording. little red lights. hundreds" },
        { from: 'chenle', t: "and theyre all pointed at the same thing and fuuka cant tell what it is" },
        { from: 'chenle', t: "its hers right. thats a minji floor" }
      ], contact: 'chenle' },
      { flag: 'eqx-floor-minji' },
      { n: "Minji felt the phone go and lifted her head. Solar didn't show her. She turned it face down on her knee and put her hand over it, and Minji looked at the hand, and then at her, and didn't ask. She'd learned that from somebody, Solar thought. Asking twenty times, and then, once, not." },
      { s: 'minji', f: 'neutral', t: "...Is it bad?" },
      { s: 'solar', f: 'neutral', t: "It's a floor. In the Well. It's yours, Chenle thinks." },
      { s: 'minji', f: 'neutral', t: "Mine." },
      { s: 'minji', f: 'neutral', t: "...Okay. When we go down there, you hold the camera. Deal? And I'll hold you. And we'll see what's on it." },
      { n: "On the wall the camera rolled. On its little screen, if anybody had been looking, the two of them sitting in the red with the dark bridge behind them, very small, very still, the only things in the frame that weren't waiting for anything." },
      { n: "Neither of them looked. Solar would look in the morning. She'd look at all of it in the morning." }
    ] }
  ]
});
