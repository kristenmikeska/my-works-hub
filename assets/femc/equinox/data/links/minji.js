/* Persona 3: Equinox · Minji Kim · The Moon. Link data (femc-equinox-game.html). Format: link fields in
   assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1–2 (rank 1 from 4/13, rank 2 from 4/30 so it always follows Mr. Tanabe, both Seaside Park after
   school). Ranks 3–15 still to write. Rank 2 flags (nothing reads them yet): eqx-minji-nap, eqx-minji-filmed, eqx-minji-kiss.
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
    ] }
  ]
});
