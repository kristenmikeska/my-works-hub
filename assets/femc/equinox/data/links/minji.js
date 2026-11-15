/* Persona 3: Equinox · Minji Kim · The Moon. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: rank 1 only (from 4/13, Port Island Seaside Park, after school). Ranks 2–15 still to write.
   Shape: the stub fields from assets/femc/equinox/data/links.js (this file wins over the stub, core.js indexLinks).
   Picks up her promise in the prologue's lounge (the footage of the night Solar went). Solstice's ranks are shared memory. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'minji', name: 'Minji Kim', short: 'Minji', arcana: 'Moon', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: 'canon', maxRank: 15, starts: '4/8', lodging: 'guesthouse',
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
    ] }
  ]
});
