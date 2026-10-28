/* Minji · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher, canon romance (Runners; one-sided in the book, here it can be returned, lore bible). Film major, DPS
   Grandmaster, honors dorm, asks permission twenty times and never posts a frame without it. Her romance is about being
   looked at without being watched (plot doc §9): she's the only searcher whose love doesn't ask Solar to be anyone.
   Her crossing (9/26, the riverside lamppost, camera up) is a story event; rank 1 is the first afternoon after it.
   She awakens on 10/31 (story); ranks 6+ come after. Her early-December footage is a story beat and isn't touched here.
   Canon echoes: "the camera already loves you", "I look like I'm starring in a sad movie" / "then you must not know
   yourself, Sol", "authenticity", "I always believe you, Sol". Her canon line that she won't be a coping mechanism is
   kept as her integrity at the route choice (rank 8), not as a scene from the book. Texting voice: @minji, u, 2, :] ;] (:
   She lives at the Kirijo guesthouse by the station (Kat's ruling): days at Game Panic, Seaside Park and the guesthouse
   window seat; texts Solar during school (r2, r7); the guesthouse hangout shows who she lives near (Jihoon, Mark, the desk
   lady). Haechan lives at the dorm (r7 meets him on its steps).
   Arcana: '?' (open question for Kat, plot doc §16.6). afterMax and christmas use v1's field shapes.
   Ranks 11-15 (maxRank 15; meter ranks, 2026-10-22 batch): 2/2 Seaside Park (the slate), 2/9 the dorm lounge (coverage;
   Junpei, Koromaru, Mitsuru), 2/16 Game Panic (the last match), 2/21 the guesthouse common room (selects), 2/25 the riverside
   lamp (the wrap). One film of the whole year, eleven minutes, finished 2/23 in Haechan's rank 14 (lounge): her ranks keep to
   his scene on every heading (who the film is for and how many copies). Each rank has one key passage branched by heading
   (H / S / R / stay / true) and an ending branched by romance / friendship; every path's best answers total 12 notes.
   stretchHangouts: three February hangouts for a meter a rank scene didn't fill. Living content for these ranks (afterRank
   11-15 texts, a late call, a breakfast routine): data/living-r15-minji.js. afterMax plays between rank 10 and 11 and after 15. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'minji', name: 'Minji Kim', short: 'Minji', arcana: 'Moon', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: 'canon', maxRank: 15,
  starts: '9/26', gate: { R: 4 },
  home: { area: 'port', spot: 'Seaside Park', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons at Port Island Seaside Park, with a camera, filming whatever the light is doing.' },
  approach: "A girl in a backwards cap is sitting on the seawall at Port Island with an old camera up to her eye, filming the light on the water, and she lowers it the second you come into the frame, like she's been waiting for you to walk into it.",
  cast: {},
  invite: {
    ask: ["hey duo. the light's doing a thing. come stand in it", "can i film u today? u can say no. im asking", "game panic has a new shooter. i need a support. u know which one", "r u free. i have snacks and a very good lamp", "the sunset's gonna be stupid tonight. dont make me watch it alone :]", "i found a bench with a perfect angle. it needs a person on it. a specific person"],
    ok: ["ok!! bring ur face", "yay. seawall. 10 min (:", "perfect. dont dress up. i mean it"],
    no: ["ok! next time :]", "thats ok duo. ill film the pigeons. theyre less fun", "no worries. the light'll be there tmrw. so will i"]
  },
  hangouts: [
    [
      { n: "The pigeons at Seaside Park were enormous and fearless and had clearly been fed by the same retired men for a decade, and Minji was lying on her stomach on the grass with the camera six inches from one of them, narrating in a low reverent voice like a nature documentary." },
      { s: 'minji', f: 'serious', t: "And here we see the Port Island pigeon. Notice the confidence. The total lack of shame. It has never paid rent in its life." },
      { choose: [
        { t: "(Lie down next to her and do the second voice.)", notes: 3, then: [
          { s: 'solar', f: 'happy', t: "The female watches from a safe distance. She is judging him. She has seen better pigeons." },
          { n: "Minji laughed so hard the camera shook and the pigeon left in disgust, and she kept the footage anyway, all of it, the shaking and the laugh and the empty grass." }
        ] },
        { t: "(Throw it a crumb so it does something.)", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "Oh, you're the producer now. Okay. Big budget. I respect it." }
        ] },
        { t: "(Sit on the bench and watch her film.)", notes: 2, then: [
          { n: "She sat on the bench and watched. After a while Minji rolled over onto her back and pointed the camera at her instead, upside down, from the grass, and asked, *can I?*, and waited for the answer before she pressed anything." }
        ] }
      ] }
    ],
    [
      { n: "Minji was teaching her the camera. It was old and heavy and had a real lens that turned, and a strap held together with gaffer tape, and Minji held it like it was a person who'd been through a lot with her." },
      { s: 'minji', f: 'neutral', t: "Okay. Don't look at the screen. Everyone looks at the screen. Look at the thing. The screen's just the thing, smaller and more nervous." },
      { choose: [
        { t: "(Film her, without warning.)", notes: 3, then: [
          { n: "She turned the camera on Minji, who went pink to the ears instantly and put a hand up in front of her face." },
          { s: 'minji', f: 'flustered', t: "Okay, no, I get it now, I get why people hate this, okay, this is horrible, give it back." },
          { s: 'solar', f: 'happy', t: "The camera already loves you." },
          { s: 'minji', f: 'surprised', t: "...Wow. Okay. You stole my line. You stole it right out of my mouth." }
        ] },
        { t: "(Film the water.)", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "Ooh. Good. You held it. Nobody holds it. They pan around like they're trying to find their keys." }
        ] }
      ] }
    ],
    [
      { n: "Game Panic had an old two-player shooter in the back corner, and Minji had her cap on backwards, which Solar had learned meant she was taking it seriously." },
      { s: 'minji', f: 'neutral', t: "You heal, I shoot. Don't let me die. I'm very fragile. Emotionally and in this game." },
      { choose: [
        { t: "(Keep her alive. All of it. Every round.)", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Nice. Nice. That's my support. That's my GM support." },
          { n: "She said *nice* the way some people say *thank you*. It went straight into Solar's chest like a heal landing." }
        ] },
        { t: "(Steal her kills on purpose.)", notes: 2, then: [
          { s: 'minji', f: 'surprised', t: "Sol. Sol. That was mine. I'm the DPS. You're the— oh my God, you're doing this on purpose. You did this all of September." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Station · Kirijo Guesthouse', time: 'After School', soft: true },
      { n: "The Kirijo guesthouse by the station was four narrow floors of tatami and floor polish and a front desk with a bell nobody rang, and on the ground floor there was a common room where everyone from home who didn't live at the dorm ended up whether they meant to or not. Minji had the window seat. She'd had it since September. There was a bowl of rice crackers on the sill beside her camera that the woman at the front desk refilled every afternoon without being asked, having decided, apparently, that Minji was too thin and that this was personally her problem." },
      { s: 'minji', f: 'neutral', t: "Welcome to the other house. It's the dorm, but nobody fights anything and the rice is too soft. Don't tell her. She stands there till I finish it." },
      { ifMet: ['jihoon'], then: [
        { n: "A boy came through the common room with a towel round his neck, slowed down exactly enough to check whether the camera was pointed at him, and stopped." },
        { s: 'jihoon', f: 'neutral', t: "If you're filming, it's my left side. Everybody knows that." },
        { s: 'minji', f: 'neutral', t: "I'm filming the light." },
        { s: 'jihoon', f: 'happy', t: "Then you're filming me. I'm standing in it. Same thing." },
        { n: "He went upstairs. Minji did not move the camera one degree toward the stairs, on principle, and told the window that he'd done that every afternoon for a week and that she was going to win." }
      ] },
      { ifMet: ['mark'], then: [
        { n: "In the corner, an upright piano with a lace runner on top was being played very softly, four notes over and over, and Minji sat with her back to it, carefully, the way you sit with your back to a television you've decided not to watch." },
        { s: 'minji', f: 'neutral', t: "He asked if I wanted to film him playing. I said I only film the light." },
        { s: 'minji', f: 'serious', t: "...I don't film people who look at the camera first. That's all. It's a rule. It's not about anybody." }
      ] },
      { choose: [
        { t: "(Sit in the window seat with her.)", notes: 3, then: [
          { n: "She sat. The window looked straight down on the tracks behind the station, and every few minutes a train came in under them, close enough that the glass hummed, and Minji filmed every one, and named them, the way you'd name the cows on a farm that wasn't yours." }
        ] },
        { t: "Do you like it here?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "I like my window. I can see every train to Port Island. If I lean all the way out I can see the dorm's roof, too." },
          { s: 'minji', f: 'flustered', t: "That's not a creepy sentence. That's a geography sentence." }
        ] },
        { t: "Film the desk lady.", notes: 3, then: [
          { n: "Minji asked her. Properly, with her phrasebook and a great deal of bowing. The woman at the desk said absolutely not, and then fixed her hair, and then stood very straight behind the bell for nine seconds while Minji filmed her, and then said absolutely not again and went to get more rice crackers." },
          { s: 'minji', f: 'happy', t: "Nine seconds. Best footage I've gotten all week. Don't tell Fuuka. Fuuka thinks she's my best subject." }
        ] }
      ] }
    ]
  ],
  stretchHangouts: [
    [
      { n: "It was too cold to film. Minji said so three times on the seawall, out loud, to nobody, and kept filming, with the camera inside a gray wool sock that had a hole cut in the toe for the lens, which she said was a professional technique and Solar was fairly sure was a sock." },
      { s: 'minji', f: 'neutral', t: "Breath. Look. Everybody's breath shows in February. You can see exactly how much everybody's talking. It's the most honest month of the year." },
      { choose: [
        { t: "(Breathe out one big cloud for the camera.)", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Perfect. Do it again. Do it sad. Okay, now do it like Junpei." },
          { n: "She did it like Junpei, with her whole chest and a great deal of unnecessary arm, and Minji laughed so hard the sock slid off the lens and she had to chase it along the wall in the wind, still rolling." }
        ] },
        { t: "(Take the loose end of her scarf and wind it round your own neck.)", notes: 2, then: [
          { s: 'minji', f: 'flustered', t: "That's my scarf. We're attached now. I can't film anything more than a meter away from you." },
          { n: "She filmed everything inside a meter for the rest of the afternoon, gulls that came close, the rail, the toe of Solar's boot, and complained about it the entire time, and didn't once reach up to untie the scarf." }
        ] },
        { t: "Won't the camera freeze?", notes: 1, then: [
          { s: 'minji', f: 'neutral', t: "It's been through worse. It's been through me." }
        ] }
      ] }
    ],
    [
      { place: 'Kirijo Guesthouse · Common Room', time: 'After School', soft: true },
      { n: "The window seat at the guesthouse had a roll of white tape on the sill now, and a marker, and Minji was labeling memory cards in their little plastic cases, a strip of tape across each one in her leaning capitals. *FEB. ROOF. COLD.* *FEB. KOROMARU. ASLEEP (AGAIN).* *FEB. SOL. ???*" },
      { s: 'minji', f: 'neutral', t: "The question marks are for when I don't know what it is yet. You get a lot of question marks. Don't take it personally. You're just hard to label." },
      { choose: [
        { t: "(Take the marker. Fill in one of your question marks.)", notes: 3, then: [
          { n: "She wrote *happy* under the question marks on the first one, small, so it fit, and Minji looked at it for a long time and didn't cross it out, and put that card at the very front of the box, where she'd find it first." }
        ] },
        { t: "(Label a blank one for her. *MINJI. ???*)", notes: 2, then: [
          { s: 'minji', f: 'flustered', t: "I'm not on any of them. I'm never on them. ...Okay. One. It's going at the back. Where nobody looks." }
        ] },
        { t: "Why not just write the dates?", notes: 1, then: [
          { s: 'minji', f: 'neutral', t: "Dates don't tell you anything. Everything happened on a date." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Station · Monorail', time: 'After School', soft: true },
      { n: "Minji wanted the monorail at the exact moment the sun went behind the bridge, which was, she said, one specific train, the 4:52, and they rode it twice, because the first time a businessman stood squarely in the shot and read his newspaper with a commitment she said she had to respect." },
      { s: 'minji', f: 'serious', t: "He's in it now. He's in the year. I'm not cutting him. He worked so hard." },
      { choose: [
        { t: "(Ask the businessman, very politely, to sign a release.)", notes: 3, then: [
          { n: "She asked him, in her most careful Japanese, and he looked at her, and at the camera, and at Minji pretending not to watch from behind it, and folded his newspaper, and signed the back of a receipt with enormous gravity, and got off at the next stop without a word." },
          { s: 'minji', f: 'happy', t: "That's the most professional thing that's happened to me all year. I'm framing the receipt." }
        ] },
        { t: "(Stand where the sun hits the window, so she gets the flare.)", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "Flare. Yes. Professionals hate a flare. I'm not a professional. I'm in love with a flare." }
        ] },
        { t: "Can't you just ride it again tomorrow?", notes: 1, then: [
          { s: 'minji', f: 'neutral', t: "Tomorrow the sun goes behind the bridge a minute later. It's never the same train twice." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/27', title: '1: permission', place: 'Iwatodai · Riverside', time: 'After School', music: 'tender', scene: [
      { n: "The lamppost at the bottom of the river path was flickering the way it always flickered, a tired, stuttering amber nobody from the city had ever come to fix, and Minji was sitting on the bench beside it with the camera in her lap and the lens cap on, which Solar already understood was the same thing as a white flag." },
      { n: "She'd come through right here, at midnight, with the camera up, filming the place where Solar had then stepped into the light. When she'd lowered it, she'd looked straight at Solar and understood, before anyone explained, that Solar didn't know her." },
      { n: "She'd watched the girl's face take that. It hadn't crumpled. It had gone very calm, the way still water goes calm when something big has gone under it." },
      { register: 'minji' },
      { s: 'minji', f: 'neutral', t: "Hi. You came back." },
      { s: 'minji', f: 'neutral', t: "I wasn't sure you would. I'd have understood. I'm the girl who filmed you in the dark like a creep." },
      { choose: [
        { t: "You didn't seem like a creep.", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "That's very generous of you. You don't know me. Yet. Give it a week." }
        ] },
        { t: "(Sit down on the bench.)", notes: 3, then: [
          { n: "She sat on the other end of the bench. Minji moved her bag to make room, unnecessarily, carefully, the way you'd clear a seat on a train for someone you'd been saving it for." }
        ] },
        { t: "I came back because I wanted to.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { s: 'minji', f: 'neutral', t: "Okay. Okay, good. That's the only reason that counts." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "They put me in a guesthouse by the station. Mitsuru's people. There's a lady at the front desk who calls me *the camera girl* and leaves rice balls outside my door like I'm a stray cat. I've been up since five filming the first trains go over the river." },
      { s: 'minji', f: 'neutral', t: "So I've had a lot of time to work out how to ask you this properly. In daylight. Not at midnight with my face doing that." },
      { n: "She took the lens cap off. She didn't lift the camera. She held it in both hands in her lap, pointed at the ground, and looked at Solar instead of through it." },
      { s: 'minji', f: 'serious', t: "Can I keep filming you?" },
      { s: 'minji', f: 'neutral', t: "Not all the time. Not when you don't want me to. I always ask. I ask like twenty times, it's a whole thing with me, people make fun of me for it. I never post a frame without asking either. Not one, ever." },
      { s: 'minji', f: 'neutral', t: "Everything here is lit wrong. The streetlights are the wrong color and the sun goes down on the wrong side of the water. You're the only thing in this whole city I already know how to shoot." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "...Thank you." },
          { n: "She said it so quietly it almost didn't make it across the bench. Then she lifted the camera, slowly, a question instead of a habit, and Solar let the question answer itself." }
        ] },
        { t: "Only if you're in some of it too.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "Me? I'm never in it. That's the whole— I'm the one holding it." },
          { s: 'minji', f: 'flustered', t: "...Okay. Okay, that's fair. Some. A little. Not my bad side." }
        ] },
        { t: "Not today. Ask me again.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Okay." },
          { n: "She put the lens cap back on. She didn't sulk. She didn't push. She just nodded, like Solar had given her the most reasonable answer in the world, and Solar found she trusted her more for it than she would have for anything else." },
          { s: 'minji', f: 'happy', t: "I'll ask you again. I'm very persistent. Politely." }
        ] }
      ] },
      { n: "The lamp stuttered. Somewhere across the water a train went by, all lit up and empty. Minji watched it go with her chin on her knees and then turned her head and said, to the river, not to Solar, that the lamp at home flickered too, outside the honors dorm, and that she used to think it was the most boring thing on campus until somebody stood under it." },
      { n: "She didn't say who. She didn't have to. She was looking at Solar the way you'd look at the place where a song you knew used to be, waiting, without much hope, for it to come back on the radio." }
    ] },

    { after: '10/3', title: '2: godgirlji', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { phone: [
        { from: 'minji', t: "what time does ur school let out" },
        { from: 'minji', t: "asking for a friend. the friend is me. ive been at game panic since it opened" },
        { from: 'minji', t: "the man at the counter says good morning to me now. we have a whole routine" },
        { from: 'solar', t: "why r u at an arcade at 10am" },
        { from: 'minji', t: "research. come after school. ill explain w my hands :]" }
      ], contact: 'minji' },
      { n: "Minji's cap was on backwards. Solar didn't know yet what that meant. She'd find out in about forty seconds." },
      { s: 'minji', f: 'serious', t: "Okay. They have a PC corner. Three machines behind a bead curtain, all sticky, nobody uses them. One of them has a game on it that's like, ninety percent the game we play. Ninety. The other ten percent is a crime against humanity, but it'll do." },
      { s: 'minji', f: 'neutral', t: "I'm logging in as a guest. You're logging in as a guest. We're a duo. Don't argue." },
      { n: "The game was strange and bright and full of people with powers, and when the character select came up Minji went straight for a woman with a rifle and a white hat and a very large opinion about herself, and Solar's cursor, without asking her, went past every single option to a girl in a fox mask and stopped there." },
      { s: 'minji', f: 'neutral', t: "...Yeah. That one. Obviously that one." },
      { s: 'minji', f: 'happy', t: "Hello, my very cool new support. Or star fox girl player, I should say, maybe." },
      { choose: [
        { t: "Don't flatter me. I just like to hit heads.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { n: "She turned all the way around in the sticky chair and looked at Solar with her mouth open." },
          { s: 'minji', f: 'flustered', t: "That's— you said that. You said that to me. Word for word. On the first day. Over text. I've got it screenshotted. Oh my God." }
        ] },
        { t: "I don't know how to play this.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "You do. Your hands do. Just don't watch them." },
          { s: 'minji', f: 'happy', t: "That's what I told you the first time too. You told me to shut up. Then you carried me." }
        ] },
        { t: "Are you good?", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "We both know I'm good enough to play with you." },
          { s: 'minji', f: 'neutral', t: "Higher than you, technically. By one tier. You hate it. You were enraged." }
        ] }
      ] },
      { n: "They played. Minji took the long shots, calm, unhurried, the way she held a camera, picking off the far end of the screen. Solar kept her alive. She didn't know how. She'd see Minji's little health bar dip and her hand would already be moving, already throwing a small bright spark across the map to land on her a half-second before she needed it, like a hand on a shoulder." },
      { ifEvent: 'a4-twelve', then: [
        { s: 'minji', f: 'neutral', t: "It's weird without the team. Even with Chenle here, it's not the team, it's two of us at an arcade. At home there's five. Chenle on tank, he talks about rotations like a professor. Olivia screams the entire time, especially when we're winning. Haerin's the other support. She giggles maybe once a semester. When she does, the whole lab goes quiet like church." }
      ], else: [
        { s: 'minji', f: 'neutral', t: "It's weird without the team. At home there's five of us. Chenle on tank, he talks about rotations like a professor. Olivia screams the entire time, even when we're winning, especially when we're winning. Haerin's the other support. She giggles maybe once a semester. When she does, the whole lab goes quiet like church." }
      ] },
      { s: 'minji', f: 'happy', t: "And Doyoung. Coach. Clipboard. Six years coaching. He said one of your plays was the best he's ever seen in person. He doesn't say that. He doesn't say anything." },
      { choose: [
        { t: "Which play?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "I'm not telling you. You'll make it again and it won't be the same. It was the same because you didn't know anyone was looking." }
        ] },
        { t: "I miss them. I don't know them and I miss them.", notes: 3, then: [
          { s: 'minji', f: 'sad', t: "...Yeah. That's the worst kind. I know. I've got it too. About you." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "Nice." },
      { s: 'minji', f: 'neutral', t: "...Nice. Nice. Sol, your timing is perfect. It's always perfect. It's so annoying." },
      { n: "She said *nice* the way other people said *thank you*. Solar felt it land somewhere under her ribs and stay, warm, like something she'd been waiting all day to be given." },
      { s: 'minji', f: 'neutral', t: "My name. On there. At home. It's *godgirlji.* Don't laugh." },
      { choose: [
        { t: "(Laugh.)", notes: 2, then: [
          { s: 'minji', f: 'flustered', t: "I SAID DON'T LAUGH. You said it would look funny on a professional roster. You were right. I kept it anyway. Out of spite. Out of spite for YOU." }
        ] },
        { t: "It's a good name.", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "...You said that too. After you finished laughing." },
          { s: 'minji', f: 'neutral', t: "You're doing all the same things. In a different order. It's like watching a film somebody recut." }
        ] }
      ] },
      { n: "When they came out from behind the bead curtain the arcade was dark and loud and full of middle schoolers, and Minji turned her cap around to the front again without thinking, the way you'd take off a jersey after a game." }
    ] },

    { after: '10/10', title: '3: a sad movie', place: 'Iwatodai · Riverside', time: 'Evening', music: 'night', scene: [
      { n: "She'd cut it. That was the thing she'd been nervous about all week, Solar could see it in the way she held her laptop, a borrowed one from the dorm's lounge, against her chest like a shield. Fifteen seconds. The night she came through. She'd been rolling the whole time." },
      { s: 'minji', f: 'neutral', t: "You can say no. I mean it. If you don't want to see it, I'll delete it. Not delete it. Hide it. In a folder. Inside another folder." },
      { choose: [
        { t: "Show me.", notes: 3, then: [] },
        { t: "Is there a folder? For me?", notes: 2, then: [
          { s: 'minji', f: 'flustered', t: "Don't ask about the folder. There's no folder. There's a folder. It's organized by month. Show you. Okay. Showing you." }
        ] }
      ] },
      { n: "They sat on the bench under the lamppost with the laptop balanced across both their knees. No music. Just the river turned up loud, and the hum of the lamp, and the green dark of the Dark Hour, and then, coming out of it into the amber, a girl, standing under the light with her head tipped back, looking at nothing, at the moths, at the sky, mouth a little parted like she was in the middle of saying something ridiculous to somebody who wasn't there." },
      { n: "It was her. She didn't look like herself. Or she looked exactly like herself, and had just never been caught at it before." },
      { s: 'solar', f: 'sad', t: "I look like I'm starring in a sad movie." },
      { n: "Minji went completely still. Her hand on the trackpad stopped. The clip ran out and went black and she didn't loop it." },
      { s: 'minji', f: 'neutral', t: "...That's exactly what you said." },
      { s: 'minji', f: 'neutral', t: "The first time. In my room. You sat on my bed and looked at it and said that. Exactly that." },
      { s: 'minji', f: 'happy', t: "Then you must not know yourself, Sol." },
      { n: "She said it like a line she'd said before and been proud of, and then heard it twice, once now and once somewhere else, and shook her head at herself, and laughed, quietly, into the collar of her sweatshirt." },
      { n: "Solar didn't laugh. She was looking at the black screen with her own reflection in it, faint, and the lamp behind her, flickering, and she could feel the edge of something. A room that smelled like printer paper and laundry. A girl falling back onto a bed beside her. A word. A project with a one-word name nobody understood, least of all the person making it." },
      { s: 'solar', f: 'surprised', t: "Authenticity." },
      { s: 'minji', f: 'surprised', t: "..." },
      { choose: [
        { t: "That's what it's about. The project.", notes: 3, then: [
          { s: 'minji', f: 'sad', t: "Yeah." },
          { s: 'minji', f: 'neutral', t: "I still don't really know what it means. The professor said it's the gap between a person in public and a person when nobody's looking. I said that's impossible to film. You can't film nobody looking. The second you look, it's gone." },
          { s: 'minji', f: 'serious', t: "And then I filmed you under a lamp and you didn't know, and it was the first time I ever caught it." }
        ] },
        { t: "Am I the best example of that?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "You asked that, too. You said, *I'm not sure I'm the best example of that.*" },
          { s: 'minji', f: 'happy', t: "You're the only example I've got. I've tried other people. They all look at the camera." }
        ] }
      ] },
      { n: "The lamp went out. All the way, a whole second of real dark, and then stuttered back on, and Minji was looking at her in the amber the way you look at someone you've waited a long time to see, and also like a stranger, both at once." },
      { s: 'minji', f: 'neutral', t: "Can I keep it? The clip. I'm asking properly." },
      { choose: [
        { t: "Keep it.", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Thank you. Seriously. It's going in the folder." }
        ] },
        { t: "Only if you never post it.", notes: 3, then: [
          { s: 'minji', f: 'serious', t: "I never post without asking. Not one frame. Ever." },
          { n: "She said it like a vow she'd made to someone else first, and then looked at Solar, and Solar understood with a lurch that the someone else had been her." }
        ] }
      ] }
    ] },

    { after: '10/17', title: '4: in the frame', place: 'Port Island · Seaside Park', time: 'After School', scene: [
      { n: "Minji had been filming everyone. Not just Solar. It was a slow, polite campaign, conducted entirely with permission, and by mid-October she had Junpei doing a fifteen-second monologue about the meaning of Hagakure, Yukari practicing with her bow on the dorm roof, Akihiko running the river path at a speed the camera kept losing, and Koromaru, extensively, from every angle, because Koromaru had never once asked her to stop." },
      { n: "Today it was Fuuka, on the seawall at Seaside Park, holding a cup of hot chocolate in both hands and talking about radio frequencies with her whole face lit up, and Minji filming her from a respectful distance with an expression of total, rapt attention." },
      { s: 'fuuka', f: 'happy', t: "—so it's like you're all stations a long way off, and I'm turning the dial, and sometimes I catch one clear for a second, and it's playing a song I've never heard but I know all the words to." },
      { s: 'minji', f: 'neutral', t: "That's beautiful. Can I use that? I'll credit you. I'll give you a credit in big letters." },
      { s: 'fuuka', f: 'happy', t: "Oh, you don't have to— okay. Yes. Big letters." },
      { n: "When Fuuka had gone back to the dorm, Minji sat on the seawall beside Solar and scrolled back through the footage with the sound off, and she slowed down on one clip, and played it twice." },
      { n: "She'd held the camera on Fuuka the whole time, steady, a respectful distance, and Fuuka had forgotten about it in about two minutes and talked with her whole face, and Solar, watching from the wall, had understood something about how Minji worked. She didn't hide the camera. She just waited, patiently, until you forgot it, and then she was very quiet, and very still, and took exactly what you'd given her and not a frame more." },
      { n: "It was the lounge. Last Sunday. Solar on the sofa between Junpei and Yukari, the TV on, Junpei saying something stupid with his hands, and Solar laughing. Not the polite one. The real one, the one that came out of her like something knocked off a shelf, her head tipped back against the cushion and her eyes shut." },
      { s: 'minji', f: 'neutral', t: "You look happy there." },
      { s: 'minji', f: 'neutral', t: "I wanted you to see it. You never see yourself like that. You only ever see yourself in mirrors, and in mirrors you're checking." },
      { choose: [
        { t: "That's not with you, though. That's here.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "I know." },
          { s: 'minji', f: 'neutral', t: "It doesn't have to be with me to be good. That's not how it works. You're allowed to be happy somewhere I'm not." },
          { n: "She said it so simply, so completely without hurt, that Solar had to look away at the water. It was the most generous thing anyone had said to her since April, and it had been said to the screen." }
        ] },
        { t: "Do you ever film yourself?", notes: 2, then: [
          { s: 'minji', f: 'surprised', t: "God, no. I'm a behind-the-camera person. I have a behind-the-camera face." },
          { s: 'minji', f: 'flustered', t: "Don't look at me like that. You've said that about me too. You said I'm the only person you know who looks better through a lens than in one." }
        ] }
      ] },
      { s: 'minji', f: 'serious', t: "Can I tell you something weird?" },
      { s: 'minji', f: 'neutral', t: "I check it. Every night. All of it. I go through every clip of you, from home, from here, to make sure you're still in them." },
      { s: 'minji', f: 'neutral', t: "Because the hour's weird. Fuuka says things fade here. People. I'm scared one night I'll open the folder and you'll be gone out of all of it. Just empty benches. Just the lamp." },
      { choose: [
        { t: "Am I still there?", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Every time." },
          { s: 'minji', f: 'neutral', t: "Every single time. You're very stubborn. Even on film." }
        ] },
        { t: "If I fade, keep filming anyway.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { s: 'minji', f: 'serious', t: "Don't say that. Okay? Don't say that to me like it's a plan." },
          { n: "She didn't say anything else for a while. She held the camera in her lap with both hands, and her knuckles were white, and Solar put her own hand over them until they weren't." }
        ] }
      ] }
    ] },

    { after: '10/24', title: '5: muse', place: 'Port Island · Pier', time: 'After School', scene: [
      { n: "It was windy on the pier, the kind of October wind that made the flags on the ferry office crack like whips and threw salt spray up over the railing in long cold sheets, and Minji had her cap pulled down tight and her camera inside her jacket, zipped up against her chest like a kitten." },
      { s: 'minji', f: 'neutral', t: "I'm not filming today. It's too windy. The audio's going to be all wind. I'd have to strip it out and put something in instead and then it's not real." },
      { s: 'minji', f: 'serious', t: "Also I wanted to just. Be here. Without it. For once." },
      { n: "They walked to the end of the pier, where the old men fished with their backs to the city and their buckets full of nothing, and leaned on the rail, and watched a container ship go out under the bridge so slowly it seemed to be standing still while the city moved." },
      { s: 'minji', f: 'neutral', t: "Do you know what I do, at home, when it's windy like this? I go up to the roof of the honors dorm and lie on my back and film the clouds going over. Upside down. It looks like the sky's falling the wrong way." },
      { s: 'minji', f: 'happy', t: "I showed you once. You said it made you seasick. You watched the whole thing anyway. Twice." },
      { s: 'solar', f: 'flustered', t: "Junpei said you called me your muse. When you first came. In the lounge." },
      { s: 'minji', f: 'flustered', t: "Junpei has a big mouth. I say one thing in the lounge and he gives you the whole report." },
      { s: 'minji', f: 'neutral', t: "...Yeah. I did. I posted it, once. At home. With a picture of you, with your permission. *Going to ace this project thanks to my new muse.* You liked it. You liked the post. I screenshotted the notification." },
      { choose: [
        { t: "What does it mean? Muse.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "It means I can't stop pointing the camera at you." },
          { s: 'minji', f: 'neutral', t: "It means I tell myself it's for art. And it is. It's also just that I like looking at you. Both. I've never been able to tell them apart." },
          { n: "She said it to the container ship, plainly, the way you'd say what time it was. Solar felt her face go hot in the cold wind and didn't look away from the ship either." }
        ] },
        { t: "Did I mind?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "No. You said the camera was nicer to you than people were." },
          { s: 'minji', f: 'sad', t: "I didn't like that you said it like a joke." }
        ] }
      ] },
      { s: 'minji', f: 'serious', t: "You're going to hear things about you. From the others. From the people who come. Everybody's got a version of you they want back." },
      { s: 'minji', f: 'neutral', t: "I'm not going to tell you mine. I don't want to give you another person to be. You've got enough of those. I can see it on you. You're carrying like four." },
      { s: 'minji', f: 'serious', t: "But if you ask, I'll tell you anything. Anything you ask. I'm done not telling you things." },
      { choose: [
        { t: "Three. I think it's three.", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { s: 'minji', f: 'neutral', t: "Okay. Three. And then this one. The one who doesn't remember any of them." },
          { s: 'minji', f: 'happy', t: "I like her too, for the record. She's very polite to pigeons." }
        ] },
        { t: "Then what do you want?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "I want to point a camera at you and have you not perform for it. Just once. Here. Where nobody's watching." },
          { s: 'minji', f: 'neutral', t: "That's the whole thing I want. It's very specific. It's very small. It's the hardest thing in the world." }
        ] }
      ] },
      { n: "The ship went under the bridge and out of sight. Minji unzipped her jacket a few centimeters and looked down at the camera nestled there against her sweatshirt, and then zipped it back up, and didn't take it out, and Solar understood that it had been offered and set aside on purpose, for her." }
    ] },

    { after: '11/2', title: '6: flash', place: 'Iwatodai · Riverside', time: 'Evening', music: 'tender', scene: [
      { n: "The week after Halloween Minji was sitting on the bench under the lamp with no camera at all, which Solar had never seen, and her hands in her lap with nothing in them, which she'd never seen either, and her hands kept moving anyway, small, closing on air, like they were looking for a strap." },
      { n: "Solar had been there. On the floor in the tower that looked like a party, with the bass coming up through the tiles and strangers' laughter from nowhere, when the thing at the top of the stairs had opened up into a thousand camera flashes all at once and every one of them had been pointed at Solar." },
      { n: "She'd frozen. Her whole body had done the thing it did, the smile coming up on its own, bright and empty and perfect, like a reflex, like a light switching on in a house nobody lived in. And Minji had stepped in front of her into all that light with her own camera up, and something had come up behind her out of the green, tall and still and quiet, like a woman who'd been keeping the archive for a thousand years, and every flash had gone dark at once." },
      { s: 'minji', f: 'neutral', t: "I hated them. All those flashes. They were all pointed at you and not one of them was asking." },
      { s: 'minji', f: 'serious', t: "That's the opposite of what I do. That's the opposite of everything I do. It made me so angry I couldn't see." },
      { choose: [
        { t: "You stood in front of me.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "Yeah. Somebody had to block the shot." },
          { s: 'minji', f: 'flustered', t: "That's a film joke. You don't get film jokes. You never got them. Ignore me." }
        ] },
        { t: "What did it say to you? Before.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "It said I could stop." },
          { s: 'minji', f: 'neutral', t: "It said I could delete the folder. All of it. Every clip. And I'd forget why I ever pointed a camera at anyone, and I'd sleep, and I'd go home and you'd just be a girl on my team who I used to have a crush on, once, a long time ago. It made it sound like a kindness." },
          { s: 'minji', f: 'serious', t: "I said I'd rather remember. I've got four hundred hours of you. I'm not deleting a single frame. Not for anybody. Not for a monster at the top of the stairs." }
        ] }
      ] },
      { n: "She held out her hands, palm up, between them on the bench, and looked at them like they belonged to somebody else." },
      { s: 'minji', f: 'sad', t: "They won't stop shaking. Fuuka says it's normal. After. Akihiko says it's normal. Junpei says it never stopped for him and he's fine, which is not reassuring." },
      { choose: [
        { t: "(Hold them.)", notes: 3, then: [
          { n: "Solar took both her hands and held them, and they were cold and small and shaking like a held note, and she didn't say anything, and after a long time the shaking went down into her own palms and stopped there." },
          { s: 'minji', f: 'neutral', t: "...You've done that before too." },
          { s: 'minji', f: 'neutral', t: "No, you haven't. I'm lying. You never have. I always wanted you to." }
        ] },
        { t: "Give me the camera. I'll hold it for you tonight.", notes: 3, then: [
          { n: "Minji looked at her for a long moment. Then she reached into her bag and took out the camera, heavy, the strap gaffer-taped, and put it in Solar's hands, and closed Solar's fingers around it, the way you'd close someone's hand around something you trusted them with more than you'd ever said." },
          { s: 'minji', f: 'neutral', t: "Don't film anything. Just hold it. I'll know where it is." }
        ] }
      ] },
      { n: "The lamp flickered on its own stubborn rhythm. Somewhere across the river, someone was setting off leftover Halloween fireworks, small and badly timed, and each one lit the water for a second and went out, and neither of them flinched at any of them." }
    ] },

    { after: '11/12', title: '7: what the lens sees', place: 'Port Island · Seaside Park', time: 'Night', scene: [
      { phone: [
        { from: 'minji', t: "r u out of school yet" },
        { from: 'minji', t: "im at the guesthouse. the desk lady made me eat two breakfasts and now its lunch and shes looking at me again" },
        { from: 'minji', t: "save me. come walk w me. i want to film u walking (ill ask properly in person)" }
      ], contact: 'minji' },
      { n: "By the time they reached the river path behind Seaside Park, the lamps were on and the water had gone dark between the long strips of light from the opposite bank. Minji stopped under one of the lamps and looked from it to Solar, and back again, very pleased with something she hadn't explained yet." },
      { n: "Minji had the camera up. She'd asked. She'd asked twice, actually, because the first time Solar had said *sure* without looking, and Minji had lowered it and waited until she did look, and asked again." },
      { s: 'minji', f: 'neutral', t: "Walk to the end of the wall and back. Don't do anything. Don't look at me. Pretend I'm a seagull." },
      { n: "Solar walked to the end of the wall and back. She did not pretend Minji was a seagull. She couldn't. She could feel the lens on her the whole way like the sun on the back of her neck, warm and patient, not grabbing at anything, just there." },
      { s: 'minji', f: 'neutral', t: "...Okay. You're doing it. You're performing. Your shoulders went up." },
      { choose: [
        { t: "I can't not. I don't know how.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "I know. It's okay." },
          { s: 'minji', f: 'neutral', t: "That's not a criticism, Sol. That's just information. I'll wait. I'm very good at waiting. I've waited in a lot of hallways." }
        ] },
        { t: "Then stop looking at me.", notes: 2, then: [
          { s: 'minji', f: 'happy', t: "Absolutely not. That's my whole job." }
        ] }
      ] },
      { n: "They sat on the seawall afterward while the last of the light went out of the sky, and Minji scrolled through the walk with the sound off, frame by frame, and stopped every few seconds to show Solar her own shoulders, up by her ears, her chin at the angle it went to when someone was taking a picture of her, her hand going to her hair." },
      { s: 'minji', f: 'neutral', t: "See? There. And there. You're checking. You check the camera like it's a mirror. You're making sure you're the right version." },
      { s: 'minji', f: 'serious', t: "I'm not saying it to be mean. I'm saying it because nobody's ever let you see it. You've been looked at your whole life and nobody's ever shown you the footage." },
      { choose: [
        { t: "Show me the rest.", notes: 3, then: [
          { n: "She showed her the rest. All four minutes of it. Solar watched herself perform for a lens for four minutes and felt sick, and then, at the very end, felt something else, small and clean, like a window cracked open in a hot room." }
        ] },
        { t: "I don't want to see it.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Okay." },
          { n: "She turned the screen off. She didn't argue. She put the camera in her lap and kept her hand on it, and they watched the water instead." }
        ] }
      ] },
      { place: 'Iwatodai Dorm · Front', time: 'Night', soft: true },
      { n: "Minji walked her home. It wasn't on her way. The guesthouse was the other side of the station, and she walked Solar to the dorm anyway, the long way, over the river, and on the front steps, sitting in the porch light with his headphones around his neck and a can of coffee he was glaring at, was Haechan. He looked up when they came through the gate. His eyes went to Solar, and stayed there, flat and unreadable and absolutely certain, and then went to Minji, and to the camera." },
      { n: "Minji nodded to him. Just a nod. Polite, small, the nod of one person to another across a crowded room at a party where they both knew the host. He nodded back. Neither of them said anything. Neither of them needed to." },
      { n: "He took the can and went in, and the door shut behind him, and Minji stood at the bottom of the steps looking at the door for a second longer than she looked at most things she wasn't filming." },
      { s: 'minji', f: 'neutral', t: "He looks at you like a song he's mixing." },
      { s: 'minji', f: 'neutral', t: "Like you're the only thing in the track and he's scared to touch the fader." },
      { choose: [
        { t: "How do you look at me?", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { s: 'minji', f: 'neutral', t: "Through a lens, mostly. It's safer." },
          { s: 'minji', f: 'flustered', t: "That's not a good answer. Ask me again on a day I've slept." }
        ] },
        { t: "Does that bother you?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "No." },
          { s: 'minji', f: 'neutral', t: "Yes. A little. Not the way you think. It's not jealousy. It's that I know what it's like, looking at you like that. It's a lot to hold." },
          { s: 'minji', f: 'neutral', t: "I know what it costs him to be careful with it." },
          { s: 'minji', f: 'happy', t: "I called you my muse first, though. I have the post. It's timestamped." }
        ] }
      ] },
      { cg: 'link-minji-camera-lamp' },
      { n: "Under the lamp by the gate, before she went back the way they'd come, toward the station and the guesthouse and the desk lady with her rice balls, Minji played back the walk along the wall one more time. Solar braced herself for her own shoulders, her own careful face. There was a second, near the end, where a gull had come down too close and Solar had flinched and laughed and forgotten, completely, that anyone was watching. Minji had kept that second. She'd slowed it down." },
      { s: 'minji', f: 'happy', t: "There. That's you. Two seconds. I'll take two seconds." },
      { cg: null }
    ] },

    { after: '11/26', title: '8: the thing you look at', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "The dorm roof at night in late November was cold enough to make your teeth ache, and the whole city was laid out under it in orange and black, and Minji had set up a tripod at the railing and pointed the camera at the bay and pressed record and then walked away from it, which Solar had never once seen her do." },
      { s: 'minji', f: 'neutral', t: "It's a fixed shot. It doesn't need me. I just wanted it running. I like knowing something's paying attention." },
      { n: "They sat on the cold concrete with their backs to the water tank. Minji had brought a thermos of something that tasted like hot chocolate somebody had heard about secondhand, and they passed the lid back and forth, and for a while there was only the hum of the city and the tiny red light of the camera at the railing, blinking." },
      { s: 'minji', f: 'neutral', t: "You know the lamppost at home? Outside the honors dorm? The one that flickers?" },
      { s: 'minji', f: 'neutral', t: "We walked home under it. A lot. After practice. In the dark. You'd stop under it every time, without noticing, and look up, like you were waiting for it to decide something." },
      { s: 'minji', f: 'sad', t: "Those were the easiest walks of my whole life. I'd have walked under that lamp with you every night forever and never said a single thing that mattered. I'd have been fine." },
      { s: 'minji', f: 'serious', t: "Can I say something? And you don't have to do anything with it?" },
      { s: 'minji', f: 'neutral', t: "At home I'm— I've been in love with you for a while. You know that. Over there, you know that. I told you. Not in those words. In a lot of other words, and some of them were bad ones, at bad times." },
      { s: 'minji', f: 'neutral', t: "And I decided a long time ago I'd rather be your friend and point a camera at you forever than be the thing you reach for when you're scared. I won't be that. I won't be somewhere you go to feel better about somewhere else." },
      { s: 'minji', f: 'neutral', t: "So I'm just telling you. So it's said. Here, where you don't have to carry any of it." },
      { n: "She took the thermos lid back and drank from it and looked at the camera's red light and not at Solar, and her hand on the lid was perfectly steady, which was, Solar knew now, how you could tell it was costing her everything." },
      { route: [
        { t: "I'm not scared. I'm looking at you.", route: 'romance', notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { n: "Minji turned her head. Solar was already looking at her. Not performing. Not checking. Just looking, the way you look at the one thing in a room you came there for, and she felt her own face do nothing at all, and let it." },
          { s: 'minji', f: 'neutral', t: "Are you sure?" },
          { s: 'minji', f: 'neutral', t: "I'm asking. I always ask. I'll ask twenty times. I need you to be sure it's me and not the hour and not the cold and not—" },
          { n: "Solar kissed her. Carefully, a question instead of an answer, and Minji held perfectly still for one second, like a camera waiting for focus, and then breathed out all at once and kissed her back, and her cold hand came up and held the side of Solar's face like it was the only frame she'd ever needed to get right." },
          { s: 'minji', f: 'flustered', t: "...Okay. Okay. That was— I'm going to need you to know that the camera is still running." },
          { s: 'solar', f: 'flustered', t: "It's pointed at the bay." },
          { s: 'minji', f: 'flustered', t: "I KNOW it's pointed at the bay. It's the best footage of the bay ever shot. I'm never deleting it." },
          // The crush batch (2026-10-23): a build-up she lived through.
          { ifCrushed: { minji: 'crush' }, then: [
            { n: "She thought of the dorm steps in the autumn, a silver sunshade in her hands that was supposed to light the dog and had ended up lighting Minji instead, and of how long ago, it turned out, she'd stopped minding which of them was being looked at." }
          ] }
        ] },
        { t: "You're my favorite person to be looked at by.", route: 'friend', notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { n: "Minji looked at her for a long time. Then she smiled, small and real and a little crooked, the way you'd smile at a call you'd seen coming and found you didn't mind." },
          { s: 'minji', f: 'happy', t: "Okay. Yeah. I'll take that. I'll take that forever. That's a credit in big letters." },
          { s: 'minji', f: 'neutral', t: "Duo." },
          { s: 'solar', f: 'neutral', t: "Duo." }
        ] }
      ] },
      { n: "When they packed up the tripod an hour later, before she carried it back along the river to the guesthouse over her shoulder like a fishing rod, Minji played back the fixed shot to check it. Forty minutes of the bay, the lights, a ferry going across, nothing. And at the very bottom of the frame, for the whole forty minutes, you could hear them. Not the words. Just two voices, and a laugh, and the thermos lid going back and forth." },
      { s: 'minji', f: 'neutral', t: "...Best audio I've ever recorded. And I didn't even point anything at it." }
    ] },

    { after: '12/28', title: '9: reverse shot', place: 'Iwatodai · Riverside', time: 'Afternoon', music: 'tender', scene: [
      { n: "It snowed between Christmas and New Year, not much, a fine dry powder that came down out of a white sky all afternoon and didn't settle so much as hang in the air, so the whole river path looked like it had been shot through a soft filter, and the lamppost stood at the bottom of it with a little cap of white on top." },
      { n: "Minji handed her the camera. Strap first." },
      { s: 'minji', f: 'neutral', t: "Your turn." },
      { s: 'solar', f: 'neutral', t: "My turn to what?" },
      { s: 'minji', f: 'serious', t: "I've never been in it. Any of it. Four hundred hours and I'm not in a single frame. I'm the girl holding the camera. I've been the girl holding the camera since I was twelve." },
      { s: 'minji', f: 'flustered', t: "So. Reverse shot. You film me. Under the lamp. I'm going to stand there and be terrible at it and you're going to keep it anyway." },
      { n: "She walked out into the snow and stood under the lamp, exactly where Solar had stood the night she came through, and put her hands in her pockets, and looked at the camera, and immediately looked away, and laughed, and looked back, and her shoulders went all the way up to her ears." },
      { choose: [
        { t: "(Wait. Don't say anything. Let her stop performing.)", notes: 3, then: [
          { n: "Solar waited. She held the camera still the way Minji had taught her, looking at the thing and not the screen, and said nothing, and the snow came down, and the lamp flickered, and somewhere around the second minute Minji forgot. She tipped her head back to look at the flakes coming down out of the light and her mouth fell a little open and she was, for eleven seconds, completely, unguardedly herself." },
          { n: "Solar got all eleven." }
        ] },
        { t: "Pretend I'm a seagull.", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Oh, you're HILARIOUS. Oh, you're a comedian now." },
          { n: "But she laughed, really laughed, the snow in her bangs, and for eleven seconds she forgot the camera was there at all, and Solar got all eleven." }
        ] }
      ] },
      { n: "They watched it back on the little screen with their heads together, the snow filling the frame like static, and the lamp, and Minji under it, looking up." },
      { s: 'minji', f: 'neutral', t: "...Wait. Go back. There." },
      { n: "She took the camera back and scrubbed through it frame by frame, and stopped on one. Near the end, when she'd laughed and tipped her head back, the camera had wobbled, just slightly, because Solar's hands had moved, because Solar had laughed too, and in the frame for one wobbling instant you could see the edge of Solar's sleeve, and her thumb on the lens, and the fact of someone holding the camera who loved what she was filming." },
      { s: 'minji', f: 'surprised', t: "...Oh. That's what it looks like. From the other side. When somebody's—" },
      { n: "She didn't finish. She didn't have to." },
      { s: 'minji', f: 'surprised', t: "...Oh." },
      { s: 'minji', f: 'neutral', t: "Is that what I look like?" },
      { s: 'solar', f: 'neutral', t: "When nobody's watching." },
      { s: 'minji', f: 'sad', t: "Somebody was watching." },
      { s: 'solar', f: 'neutral', t: "Then you must not know yourself." },
      { n: "Minji turned and looked at her, very close, the snow between them, and her eyes were wet, and she didn't do anything about it." },
      { ifRoute: 'romance', then: [
        { n: "She kissed Solar under the lamp in the snow, quickly, like someone stealing a frame, and then put her forehead on Solar's shoulder and said into the wool of her coat that she was keeping the clip, and it was going in the folder, and it was going in the folder at the very front." }
      ], else: [
        { n: "She leaned her head on Solar's shoulder in the snow and stayed there, and said into the wool of her coat that she was keeping the clip, and that it was going in the folder, at the very front, and that she was going to show it to nobody, and that it was the best thing in there." }
      ] }
    ] },

    { after: '1/23', title: '10: authenticity', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "She'd finished it. Four minutes. She'd been cutting it for a month on the lounge's ancient laptop with Fuuka's help and Junpei's opinions, and tonight she'd set it up on the TV with a cable Mitsuru had found in a drawer and looked at for a long time and then handed over without comment, and everyone in the dorm had found a reason to be somewhere else." },
      { n: "Except Solar. Minji had asked. Twenty times. Solar had said yes every time." },
      { s: 'minji', f: 'neutral', t: "It's called *authenticity.* I still don't know what that means. I think I'm closer." },
      { n: "No music. The river turned up loud. The lamp. A girl under it in the green, looking up. Then the gold light on the seawall, and the pier in the wind, and the arcade, and the lounge, Solar laughing on the sofa between Junpei and Yukari with her eyes shut. Solar flinching at a gull. Solar asleep on the roof against a water tank with the city coming up blue behind her. Solar in a dozen places doing nothing, being nobody, unaware, unarranged, and in every one of them she was the same." },
      { n: "And in the middle of it, eleven seconds of snow, and a girl under a lamp with her head tipped back. Minji had put herself in it. Right in the center. She'd kept all eleven." },
      { n: "And behind the four minutes, like a floor under a room, something else came up in Solar, slowly, the way a photograph comes up in a tray. A girl with braids and a backwards cap leaning back in a gaming chair. A practice room, RGB lights, the hum of a dozen computers. *Nice.* A walk home in the dark with a flickering lamp at the end of it and an honors dorm and a voice saying, very quietly, steady as a held shot, after everything, after the worst week, after Solar had handed her the whole messy chain of it and waited to be told she was being dramatic—" },
      { s: 'solar', f: 'surprised', t: "...*I always believe you, Sol.*" },
      { n: "The TV went black. The clip was over. Minji didn't move. She was sitting on the floor with her back against the sofa and the remote in her hand, and she'd gone so still that Solar could hear the laptop fan." },
      { s: 'minji', f: 'surprised', t: "..." },
      { s: 'minji', f: 'sad', t: "You remember that." },
      { s: 'minji', f: 'neutral', t: "Of everything. You remember that one." },
      { ifFlag: 'mem-camp', then: [
        { s: 'minji', f: 'serious', t: "I meant it. I also did something right after that I'm not proud of. You might remember that part too, by now. I'm still sorry." }
      ], else: [
        { s: 'minji', f: 'serious', t: "I meant it. I also did something right after that I'm not proud of. When you remember the rest, ask me. I'll tell you all of it." }
      ] },
      { choose: [
        { t: "I believe you too. Minji. I always will.", notes: 3, then: [
          { cg: 'link-minji-r10' },
          { n: "Minji put the remote down on the carpet very carefully, like it might break. Then she put her face in her hands, and her shoulders went, and Solar slid down off the sofa onto the floor beside her and put both arms around her and held on." },
          { cg: null }
        ] },
        { t: "You're in it. You put yourself in it.", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "Yeah. Well. You told me to. Somebody once told me some of it had to be me, too. On a bench. Like a condition." },
          { s: 'minji', f: 'neutral', t: "I listened. I always listen to you. That's my other problem." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'minji', f: 'neutral', t: "Can I ask you something? Twenty times?" },
        { s: 'solar', f: 'neutral', t: "Yes. Twenty times. Yes." },
        { s: 'minji', f: 'flustered', t: "I didn't even ask it yet." },
        { s: 'solar', f: 'flustered', t: "I know what it is." },
        { n: "She kissed her on the lounge floor with the TV dark and the laptop fan humming, slow, not stealing anything, not a frame, not a second, and Minji held onto the front of her sweater with both hands like she'd hold a camera on a moving train, and for once neither of them was watching anything at all." }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Duo?" },
        { s: 'solar', f: 'happy', t: "Duo. Always." },
        { n: "Minji laughed into Solar's shoulder, a wet, crooked, real laugh, and they sat on the lounge floor with the TV dark until Junpei came down for a snack at one and found them, and silently backed out, and went hungry." }
      ] },
      { s: 'minji', f: 'neutral', t: "...You're the same. In the frame. You were always the same." },
      { s: 'minji', f: 'happy', t: "I just never got to say it to your face." }
    ] },

    { after: '2/2', title: '11: slate', place: 'Port Island · Seaside Park', time: 'After School', scene: [
      { n: "February at Seaside Park was the color of a sink full of dishwater, the sky and the bay the same flat gray with a seam of white where they met, and the wind came off the water in one long steady push that found every gap in a coat and moved in. Minji was on the seawall anyway, in two hoodies and a scarf wound three times, with a small black slate on her knees, the kind with a striped clapper hinged on top, and a stub of chalk she kept breathing on to keep her fingers working." },
      { n: "She'd already written on it, in careful capitals that leaned to the right like they were walking into the wind. *THE YEAR. SC 1. TK 1.*" },
      { s: 'minji', f: 'neutral', t: "I found it at the stationery shop on the Strip. In a box of things nobody wanted. The man gave it to me for a hundred yen because he said it was bad luck to sell a slate to a girl who looked that serious about it." },
      { s: 'minji', f: 'serious', t: "I'm making one more. Not the project. The project's done. This is everything. Everything I shot here, since the lamp. All of it, cut into one thing." },
      { n: "There was a notebook under the slate, held flat against the wind with her elbow, and when she slid it out Solar saw that it was a list. Pages of it. Dates down the left side in the same leaning capitals, a few words beside each, *riverside, lamp*, *pier, wind, no camera (doesn't count)*, *lounge, laughing, Junpei's fault*, and beside each of those a small empty box drawn in pen." },
      { s: 'minji', f: 'neutral', t: "Every clip of you. Forty-one hours. I logged them all. There's a box next to each one." },
      { s: 'minji', f: 'flustered', t: "You tick it if I can use it. You don't if I can't. You don't have to say why. I know I already asked you for every one of these once. Putting it in something is a different ask. It's a whole different ask, Sol." },
      { choose: [
        { t: "(Tick every box without reading them.)", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "..." },
          { s: 'minji', f: 'serious', t: "No. Okay. No. Read them. I need you to read them, that's the entire point of the boxes." },
          { n: "So she read them, all of them, on a seawall in February with Minji holding each page down against the wind with the edge of the slate, and ticked every box anyway, slowly, one at a time, and Minji watched her do it the way you'd watch a fuse burn in exactly the direction you'd hoped." }
        ] },
        { t: "(Read every entry out loud before you tick it.)", notes: 3, then: [
          { n: "She read them out loud. *Station, sunset, didn't know.* *Game Panic, cap backwards, losing.* *Roof, asleep (asked after, she said fine).* Minji listened to her whole year come back to her in Solar's voice with her chin buried in the scarf, and didn't interrupt once, and when the last box was ticked she let out a breath she had clearly been holding since October." }
        ] },
        { t: "Forty-one? You told me four hundred.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Four hundred's everything. Home and here. Forty-one's here. Here's the one I'm cutting." },
          { s: 'minji', f: 'sad', t: "Home's already cut. I did that one before you went. I just didn't know that's what I was doing." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "Who's it for?" },
      { ifHeading: 'H', then: [
        { s: 'minji', f: 'neutral', t: "Us. The ones who aren't going where you're going. Which is, as far as I can tell, everybody I know." },
        { s: 'minji', f: 'neutral', t: "Jihoon says you're vice president of something over there. He said it like it was a crime he'd personally witnessed and had been asked not to discuss. So you'll be busy, and important, and we'll be at home with no support and a slate." },
        { choose: [
          { t: "Then make it for all of you.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "It is. I'm going to show it in the lab with the lights off. Olivia's going to scream at the first frame. Haerin's going to giggle once, at the very end, and the whole room's going to go quiet like church." }
          ] },
          { t: "(Take the chalk. Write your name on the slate under the title.)", notes: 3, then: [
            { n: "She wrote *SOL* under *THE YEAR* in her own round hand, and Minji looked at it and said that wasn't how slates worked, and then didn't wipe it off, and then, when Solar wasn't watching, went over the letters again so the wind wouldn't take them." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'minji', f: 'neutral', t: "Me." },
        { s: 'minji', f: 'neutral', t: "You're going somewhere I'm not. Yunjin told me a little. A big house, and people in it who've already decided things about you. I'm not going to be in that house. So I'm keeping this one. The you who lived here. I'm allowed one." },
        { choose: [
          { t: "(Draw one more box on the last page. Write *all of it* beside it. Tick it.)", notes: 3, then: [
            { n: "She drew it small, in pencil, at the bottom of the last page, and Minji looked at it for a long time, and then put the notebook inside her hoodie, flat against her chest, and zipped it up over it, the way she'd once carried the camera on a windy pier." }
          ] },
          { t: "You're allowed more than one.", notes: 3, then: [
            { s: 'minji', f: 'sad', t: "I'm not. I checked. I'm very strict with myself." },
            { s: 'minji', f: 'neutral', t: "...Two. If you insist. I'll think about two." }
          ] }
        ] }
      ], else: [{ ifHeading: 'R', then: [
        { s: 'minji', f: 'neutral', t: "Over there. It's for over there." },
        { s: 'minji', f: 'neutral', t: "For when I'm in the honors dorm at four in the morning with a VOD open and I can't remember what you looked like when you weren't doing it for somebody. You're going to be so busy when we're home. You're going to be busy with a lot of things." },
        { n: "She didn't say what things. She had been in a hallway once, at a party, for four seconds, with a camera up that she hadn't used, and she'd never told Solar which four seconds, and she wasn't going to start on a seawall in February." },
        { s: 'minji', f: 'serious', t: "I'm not keeping it from you. Not again. I just want you to get there first, this time." },
        { choose: [
          { t: "I'll want a copy over there too.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "You get the first one. Obviously. You're in it. That's how it works." }
          ] },
          { t: "Then put both our names on the slate.", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "That's not how— okay. Okay. Two names on the slate. I'm going to need more chalk." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'minji', f: 'neutral', t: "You." },
        { s: 'minji', f: 'neutral', t: "It's for you. To keep. Here. So when we've all gone home you've got proof we were in the building. That we were real, and not something the hour made up to keep you company." },
        { choose: [
          { t: "Put yourself in it too. Not just behind it.", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "I'm in it. Eleven seconds. I'm keeping the eleven seconds." },
            { s: 'minji', f: 'neutral', t: "That's enough of me. The rest is you. That's the part you're keeping." }
          ] },
          { t: "(Take her cold hand off the slate and hold it.)", notes: 3, then: [
            { n: "Her hand was freezing, chalk white to the knuckle, and she let Solar hold it without looking at her, and with her other hand drew a small square in the corner of the slate, and then a very small tick inside it." }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'happy', t: "Everywhere." },
        { s: 'minji', f: 'neutral', t: "Fuuka says you're going home to all of it at once. I don't understand that. Nobody does. So I'm putting it on everything. A disc, my phone, a laptop. If one of them doesn't make it through, the others will." },
        { s: 'minji', f: 'serious', t: "Somebody has to keep this one. The one with the lamp in it. In case it's the one that goes quiet." },
        { choose: [
          { t: "Then I'll watch it on every one of them.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "You'd better. I'm going to check. I always check." }
          ] },
          { t: "(Tick the last box twice.)", notes: 3, then: [
            { n: "She ticked it twice, the second tick on top of the first, and Minji looked at the doubled mark and laughed through her nose and said she was keeping that page as well, the notebook was evidence now." }
          ] }
        ] }
      ] }] }] }] },
      { s: 'minji', f: 'neutral', t: "Okay. Last thing. Every take starts with the slate. Somebody claps it so the sound lines up with the picture later. I've never had anybody to clap it. I've been doing it one-handed like a loser for six years." },
      { choose: [
        { t: "(Clap it.)", notes: 3, then: [
          { n: "She held the slate up in front of the lens, and Minji said *rolling*, quietly, and Solar brought the clapper down, and it went off over the seawall like a starter's pistol, and three gulls lifted off the railing in protest and settled again, further away, offended." },
          { s: 'minji', f: 'happy', t: "Perfect. You're so good at that. Why are you good at that." }
        ] },
        { t: "Call it first. *The year. Scene one. Take one.*", notes: 3, then: [
          { n: "Solar said it into the wind, and Minji's mouth did something it had clearly not been given permission to do, and she had to look away at the bay for a second before she nodded, and Solar clapped it, and the sound went out over the water and came back very faintly off something on the far side." }
        ] },
        { t: "What do I do after I clap it?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Nothing. That's the trick. You clap it and then you forget it's there." },
          { s: 'minji', f: 'neutral', t: "You're the only person I know who's ever managed it. Twice." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "When the take was over she didn't lower the camera right away. She kept it on Solar one second longer than the take needed, on the seawall, in the gray, and then she did lower it, and looked at her over the top of it without it, the way she'd started doing in January, as if she'd decided some things were only allowed to be seen with the naked eye." },
        { choose: [
          { t: "(Lean over and wipe the chalk off her cheek with your thumb.)", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "Was it there the whole time? Was it there for the whole take?" },
            { s: 'solar', f: 'neutral', t: "The whole take." },
            { s: 'minji', f: 'flustered', t: "...Okay. I'm keeping it. It's continuity now." }
          ] },
          { t: "(Kiss her cold cheek, once, where the chalk is.)", notes: 3, then: [
            { n: "Her cheek was cold and tasted faintly of chalk, and she went completely still, the way she held still waiting for focus, and then let out a laugh that fogged in the air between them and hung there." },
            { s: 'minji', f: 'happy', t: "That's not on the shot list. ...I'm adding it to the shot list." }
          ] }
        ] }
      ], else: [
        { n: "When the take was over, Minji lowered the camera and handed Solar the slate to hold while she packed the lens away, every piece in its own slot, and didn't ask for it back. Solar sat with it in her lap. It was warm where Minji's hands had been." },
        { choose: [
          { t: "Duo?", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Duo. Scene one, take one." },
            { s: 'minji', f: 'neutral', t: "Write it on the back. In chalk. So it gets all over your coat and you have to explain it to Mitsuru." }
          ] },
          { t: "(Draw a small sun on the back of the slate.)", notes: 3, then: [
            { n: "She drew it badly, a lopsided circle with uneven rays, and Minji looked at it and said it was the worst sun she'd ever seen in her life and that it was staying on the back of the slate until the slate fell apart." }
          ] }
        ] }
      ] },
      { n: "Before they left, Minji wrote *TK 2* under *TK 1*, though nothing else had been shot, and when Solar asked why, she said you always write the next take before you go home. That way you have to come back for it." }
    ] },

    { after: '2/9', title: '12: coverage', place: 'Iwatodai Dorm · Lounge', time: 'After School', music: 'joy', scene: [
      { n: "Minji had asked Mitsuru for permission to film the dorm for one whole afternoon, in writing, on a sheet of the dorm's own letterhead she'd had to ask for separately, and Mitsuru had read it twice at the breakfast table and signed it and dated it, and then, after a pause, initialed the margin, where Minji had written in small capitals *(this includes you)*." },
      { n: "By four the lounge looked like a set. The tripod by the television, the lamp off Fuuka's desk clamped to the back of the sofa with a scarf over it to soften it, and a list taped to the wall. *JUNPEI (chair). KOROMARU (kotatsu). FUUKA (radio). MITSURU (laugh?)*. The question mark had been gone over a lot of times." },
      { s: 'minji', f: 'serious', t: "Coverage. It means you shoot everything around the thing, so later you've got something to cut to. The thing is you. Everybody else is coverage." },
      { s: 'minji', f: 'flustered', t: "That came out wrong. They're not less. They're the room. You can't have the thing without the room. Write that down somewhere I can't see it." },
      { n: "Junpei had been in the deck chair by the window for an hour, being coverage, with the energy of a man auditioning for a part nobody would tell him the name of." },
      { s: 'junpei', f: 'happy', t: "Okay, okay, Minji, check this. Natural. Totally natural. Just a guy in a chair. Just a guy, livin' his life, in a totally normal—" },
      { n: "The deck chair, which had been folded and unfolded by four separate people since summer and had developed opinions about it, chose that moment. It went flat. Junpei went with it, all the way to the floor, in one long wooden collapse, and lay there among its slats with his cap over his face." },
      { s: 'minji', f: 'neutral', t: "...And cut." },
      { s: 'junpei', f: 'serious', t: "I'm gonna be famous for falling over. In another universe. That's my legacy. That's what they're gonna say about me over there." },
      { choose: [
        { t: "(Lie down on the floor next to him among the slats.)", notes: 3, then: [
          { n: "She lay down beside him, and Junpei said *see, she gets it*, and Minji got both of them from above, standing on the sofa with Mitsuru's permission slip in her back pocket for exactly this kind of emergency." }
        ] },
        { t: "(Hold one of the slats up to the lens like evidence.)", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Exhibit A. Hold it still. Okay, now look sad about it. Now look at Junpei. Now look at me like you're disappointed in all of us." },
          { n: "She looked disappointed in all of them. Junpei, from the floor, said it was a very good look on her and a very bad look on him." }
        ] },
        { t: "(Help him up.)", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "See, Minji? Sol's got the heart. She's the heart of the operation. You're just the eyes. Cold, cold eyes." }
        ] }
      ] },
      { n: "Koromaru took his part very seriously, which was to be asleep under the kotatsu with only his tail out, and he did it for forty minutes in a single take without being asked, and Minji said he was the most professional person she had ever worked with and lay down on her stomach to get the tail at its own level." },
      { n: "Mitsuru was the hard one. She came in from the council room at five in her coat and sat down at the long table with a stack of papers and a pen, and was perfectly polite to the camera, the way she was polite to a reporter, chin level, and Minji filmed her for three minutes and lowered it and looked at Solar with something close to despair." },
      { s: 'minji', f: 'sad', t: "She's doing it. The face. The checking face. She's like you. I need her to forget." },
      { choose: [
        { t: "(Tell Mitsuru about Junpei and the deck chair. In detail.)", notes: 3, then: [
          { n: "She told it the way it had happened, down to the sound the chair had made, and Junpei, from the sofa, supplied the sound again, with his whole chest. Mitsuru's mouth went. Her hand came up over it, too late, and her eyes shut, and her shoulders shook once, and then she was laughing, actually laughing, at the head of the long table with her hand over her mouth, and Minji had all of it before Mitsuru remembered the camera at all." },
          { s: 'mitsuru', f: 'surprised', t: "...You were filming that." },
          { s: 'minji', f: 'neutral', t: "I'll ask you twenty times if I can keep it." },
          { s: 'mitsuru', f: 'neutral', t: "Once will do. ...Yes." }
        ] },
        { t: "(Ask Mitsuru what she'll remember about this year.)", notes: 3, then: [
          { s: 'mitsuru', f: 'sad', t: "...The noise. This house used to be very quiet." },
          { n: "She said it looking at the lounge, at the deck chair in pieces, at the tail under the kotatsu, at the coats on the hooks by the door hung two deep since autumn, and for a moment she forgot to be polite to anybody, and Minji, very quietly, kept rolling." }
        ] },
        { t: "Leave her alone. You can't make somebody forget.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "You can. You just have to be more boring than whatever they're thinking about. I'll wait. I'm very boring. I'm a professional." }
        ] }
      ] },
      { n: "Afterward Minji sat at the long table with the camera in her lap, scrolling back through the afternoon with the sound off, and the dorm went on around them, Fuuka's radio upstairs, the kettle starting to tick, somebody's feet on the stairs." },
      { ifHeading: 'R', then: [
        { s: 'minji', f: 'neutral', t: "Hanni wants this exact shot at home. The kitchen at the house. Same angle, same time of day. She says you can put them side by side and they'll look like the same place with the furniture moved." },
        { s: 'minji', f: 'neutral', t: "They won't. The light's wrong there in a completely different way. I'm going to do it anyway. She's going to cry. Hyein's going to say she isn't crying while she's crying." },
        { choose: [
          { t: "Film me in both. Same chair.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "That's the plan. I'm going to need you sitting exactly like that. At home. On the counter where you're not allowed to sit." }
          ] },
          { t: "(Look at the table once more, properly, so you'll know it.)", notes: 3, then: [
            { n: "She looked at it. The rings left by a year of mugs. The place near the end where Junpei had carved something small and denied it. She didn't know she was framing it the way Minji framed things until Minji said *yeah, like that*, very quietly, beside her." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'minji', f: 'neutral', t: "Yunjin says the house you're going to is quiet at dinner. Like, nobody talks. Everybody's just very careful with their chopsticks." },
        { s: 'minji', f: 'serious', t: "So I'm putting the loudest table I've ever seen in it. On purpose. So you can watch it in that house with the sound all the way up." },
        { choose: [
          { t: "All the way up, then.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "All the way. Junpei's chair is going to sound like a building coming down." }
          ] },
          { t: "(Ask her to film the empty chairs at the end, too.)", notes: 3, then: [
            { n: "Minji filmed them one after another, the empty chairs at the far end of the long table, slowly, the way you'd take attendance, and didn't ask what they were for, and didn't need to." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'minji', f: 'neutral', t: "Jihoon says your table at that school is seven people and a lot of yelling and somebody always storming off. I said that sounds like ours. He said ours is worse. I said which one, and he walked away." },
        { s: 'minji', f: 'neutral', t: "This one's for us, though. When we're home and you're at that table, we've still got this one. The one you sat at with us." },
        { choose: [
          { t: "Save me a seat at yours.", notes: 3, then: [
            { s: 'minji', f: 'sad', t: "...I'll save it. I'll put my bag on it. People are going to hate me." }
          ] },
          { t: "(Ask Minji to get in the shot. Just once.)", notes: 3, then: [
            { n: "Minji set the timer and ran, and sat down beside her at the long table with her knee against Solar's, and they both looked at the lens, and then at each other, and then the little light went red on the two of them looking at each other." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'minji', f: 'neutral', t: "You're keeping the table. I'm taking the shot. That's fair, right? That feels fair." },
        { s: 'minji', f: 'sad', t: "I'm going to be so annoyed at home when nobody yells at me about my shoes in the hall." },
        { choose: [
          { t: "Leave your shoes in the hall, then. Every day till you go.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "That's sweet. That's also a threat. Mitsuru's going to kill me." }
          ] },
          { t: "(Promise to keep the deck chair.)", notes: 3, then: [
            { n: "Junpei, from the floor, said it was his chair. Solar said she was keeping it anyway, slats and all. Minji filmed the whole argument and said it was going in right after the fall, like a sequel nobody had asked for." }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Fuuka says when you go, everything here might go quiet. Like the hour does. Like a dream you only half keep." },
        { s: 'minji', f: 'serious', t: "So it's on three things. I told you. If this table goes quiet, I'll have it. I'll show it to you somewhere you can't remember sitting, and you'll know the chairs anyway." },
        { choose: [
          { t: "My hands will know them.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "Yeah. Your hands always know first. They knew the game before you did." }
          ] },
          { t: "(Put your palm flat on the table, so it remembers you back.)", notes: 3, then: [
            { n: "She laid her hand flat on the wood, and after a second Minji put the camera down and laid hers beside it, not touching, two hands on a long table in a lounge in February, and neither of them said it was silly, and neither of them took her hand away first." }
          ] }
        ] }
      ] }] }] }] },
      { n: "On her way out, at the bottom of the stairs, Minji stopped, and lifted the camera, and called her name, just *Sol*, the way you'd call somebody back for a thing they'd forgotten. Solar was halfway up. She turned round." },
      { ifRoute: 'romance', then: [
        { n: "She turned round mid-laugh, at something Junpei had said from the lounge, and Minji got it, all of it, the turn and the laugh and Solar's face finding hers at the bottom of the stairs and doing nothing about it. Not checking. Not arranging. Just pleased." },
        { choose: [
          { t: "(Come back down. All the way.)", notes: 3, then: [
            { n: "She came back down. Minji lowered the camera without stopping it, so the last of the take was the ceiling and the edge of a light fitting and the sound of two people being very quiet at the bottom of a staircase in a house full of people, and she kept that too." }
          ] },
          { t: "Did you get it?", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "I got it. I got it and I'm never, ever showing you. You'd only argue with it." },
            { s: 'minji', f: 'neutral', t: "...I'll show you. When it's done. You're first. You're always first." }
          ] }
        ] }
      ], else: [
        { n: "She turned round mid-laugh, at something Junpei had said from the lounge, and Minji got it, the turn, the laugh, Solar's face finding her at the bottom of the stairs, unarranged." },
        { choose: [
          { t: "Did you get it?", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Two seconds. Nice." }
          ] },
          { t: "(Pull a face. Ruin the shot on purpose.)", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Too late. I got the one before the face. I always get the one before the face." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/16', title: '13: last match', place: 'Paulownia Mall · Game Panic', time: 'After School', music: 'city', scene: [
      { n: "The PC corner behind the bead curtain had been there all year, three sticky machines nobody else used, and sometime in the winter the man at the counter had started leaving the one by the wall logged in on Minji's days, with a paper cup of melon soda beside the keyboard that he denied, every time, knowing anything about." },
      { n: "Today there were two cups. Minji's cap was on backwards." },
      { s: 'minji', f: 'serious', t: "Ranked. Best of three. If we lose, it's your fault. If we win, it's mine." },
      { s: 'minji', f: 'neutral', t: "And then I'm stopping. Here, I mean. This one. I want the last one to be a good one, and I want to know it's the last one while it's happening. Nobody ever gets to know that. I'm taking it." },
      { choose: [
        { t: "(Keep her alive. Every fight. Every second of every fight.)", notes: 3, then: [
          { n: "She kept her alive. The little health bar dipped and her hand was already moving, the spark already in the air, landing a half-second before it was needed, every time, the whole first match, like a hand on a shoulder in a crowd." },
          { s: 'minji', f: 'happy', t: "Nice. Nice. Nice. Okay, I'm going to stop saying it, it's losing all meaning. Nice." }
        ] },
        { t: "(Save the little bell for the exact moment she's sure she's dead.)", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "I was GONE. I was so gone. Do that again. No. Don't. Yes. Do it again." }
        ] },
        { t: "(Hang back and let her carry. Watch her play.)", notes: 2, then: [
          { n: "She hung back and watched her. Minji played the way she filmed, unhurried, patient, picking the one shot out of all the shots and taking it, and didn't notice she was being watched, which was, Solar thought, the closest she'd ever get to returning the favor." }
        ] }
      ] },
      { n: "Between the second match and the third Minji pushed her headphones down round her neck and sat back in the sticky chair and looked up at the ceiling tiles, where somebody years ago had thrown a pencil hard enough to make it stick." },
      { s: 'minji', f: 'neutral', t: "You know you heal me the same way in there? The tower. I didn't notice until January. Theia goes down on one knee and before I even know I'm hurt there's light on me. Same timing. To the frame." },
      { s: 'minji', f: 'neutral', t: "I used to think the game made you like that. It isn't the game. It's you. The game just found out first." },
      { choose: [
        { t: "Then I'm keeping it. Whatever the game found.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "Good. Keep it. It's yours. It was never the game's." }
        ] },
        { t: "You notice everything.", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "I notice you. That's different. Everything else I have to write down." }
        ] }
      ] },
      { ifHeading: 'R', then: [
        { s: 'minji', f: 'neutral', t: "If it's still November at home, we've got regionals in a few weeks. If it isn't, we missed them, and Doyoung is going to kill us both. Slowly. With the clipboard." },
        { s: 'minji', f: 'serious', t: "Nobody here can tell me what day it'll be over there. I asked Fuuka. She said it's like a radio. You can't tell from the song what time it is where they're playing it." },
        { s: 'minji', f: 'happy', t: "Either way you're playing. Your hands remember. I've been watching them all year." },
        { choose: [
          { t: "Then this isn't the last match. It's warm-up.", notes: 3, then: [
            { s: 'minji', f: 'surprised', t: "..." },
            { s: 'minji', f: 'happy', t: "Okay. Warm-up. I'm still stopping after today. I'll start again over there. With you. On the right chairs." }
          ] },
          { t: "(Promise her the first ranked queue the night you're home.)", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "First night. Ranked. I'm not saying it twice." },
            { s: 'minji', f: 'flustered', t: "I'm saying it twice. First night. Ranked." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'minji', f: 'neutral', t: "I asked Yunjin if they have games where you're going. She looked at me like I'd asked if they had dragons." },
        { s: 'minji', f: 'sad', t: "So this is it. The last time I get a support who knows where I'm going to be before I do. I'm going to be so bad without you. I'm going to die in every fight. Olivia's going to scream at my body." },
        { choose: [
          { t: "Teach me something to take with me, then.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "...Hold the angle. Don't chase. Let them come to you." },
            { s: 'minji', f: 'neutral', t: "That's not for the game. That's for over there. Hold the angle, Sol." }
          ] },
          { t: "(Play the last fight like it's a final.)", notes: 3, then: [
            { n: "She played it like a final. Minji felt the difference before the first engagement and sat up straighter, and they took it clean, and in the half-second of quiet after the last kill neither of them said anything at all, which in the lab at home, Minji said afterward, was the loudest thing you could say." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'minji', f: 'neutral', t: "Jihoon says you're vice president of the whole school over there. I've seen you run a team fight. I believe it. I'm scared for them." },
        { s: 'minji', f: 'serious', t: "He also says you're terrible at math, and that somebody tutors you, and then he made a face like the somebody personally owed him money. I didn't ask." },
        { s: 'minji', f: 'sad', t: "So I'm the last person who gets to be your DPS. I'm putting that in writing somewhere. I'm putting it on a disc." },
        { choose: [
          { t: "You'll always be my DPS. Every world.", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "Don't say every world to me like that, I'm in a public arcade." }
          ] },
          { t: "(Win the last fight for her. Not with her. For her.)", notes: 3, then: [
            { n: "She won it for her. She went in ahead of Minji, which no support ever did, and kept everyone alive who needed it and a few who didn't deserve it, and when it was over Minji pushed her cap round to the front without thinking, the way you'd take off a jersey after the last game of a season." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'minji', f: 'neutral', t: "We'll queue with somebody else at home. Doyoung will make us. We'll leave your slot open for a while first. Olivia's going to yell at the empty slot like it can hear her." },
        { s: 'minji', f: 'sad', t: "I hope it can. I hope you can hear her. All the way over here." },
        { choose: [
          { t: "I'll hear it.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "...Okay. Then I'll tell her to be loud enough. She won't need telling." }
          ] },
          { t: "(Ask her to leave the slot open for good.)", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "For good's a long time to have a hole in a team." },
            { s: 'minji', f: 'happy', t: "Okay. For good." }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Fuuka says you'll be home for all of it at once. Regionals and wherever else. You're going to be the only support in history playing three matches at the same time." },
        { s: 'minji', f: 'happy', t: "I'm going to win mine, just so you know. I'm going to carry. You've got two other ones to worry about." },
        { choose: [
          { t: "Carry, then. I'll be watching all three.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Watch mine first. Mine's the good one. Mine has me in it." }
          ] },
          { t: "(Play the last fight with your eyes on her, not the screen.)", notes: 3, then: [
            { n: "She played the last fight looking at Minji. She didn't miss a heal. Minji noticed halfway through and went red to the ears and didn't miss a shot either, out of spite, she said, out of spite for both of them." }
          ] }
        ] }
      ] }] }] }] },
      { n: "They won the third. Minji said it was her. Solar let her have it. On the way out, the old cabinet by the door, a shooter with a high-score table and a coin slot nobody had fed in years, was blinking at them, because somebody had left a credit in it and wandered off, and it was waiting for three letters. Minji stopped in front of it like it had said her name." },
      { ifRoute: 'romance', then: [
        { s: 'minji', f: 'neutral', t: "Three letters. Go." },
        { choose: [
          { t: "(Type SOL. Then make her type hers in the row underneath.)", notes: 3, then: [
            { n: "She typed it and stood aside, and Minji typed hers one letter at a time, slowly, M, I, N, as if it were a form she had to get exactly right, and there they were on the screen, one name on top of the other, and the cabinet played a tinny little tune about it." },
            { s: 'minji', f: 'flustered', t: "That's the worst song I've ever heard. That's our song now. ...That was a joke. I'm not taking it back." }
          ] },
          { t: "(Put your hand over hers on the joystick and spell it together.)", notes: 3, then: [
            { n: "Minji let her. Neither of them was spelling anything in particular. The letters came out wrong, and they left them wrong, three nonsense letters at the top of a table nobody would ever read, and Minji filmed the screen for nine seconds, and asked, after, whether she could keep it." }
          ] }
        ] }
      ], else: [
        { choose: [
          { t: "(Type DUO.)", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "DUO. Number one. That's going to be up there until they unplug it." }
          ] },
          { t: "(Type GGJ. For godgirlji.)", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "Don't. Okay. Fine. Number one, godgirlji. Out of spite. Out of spite for YOU." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/21', title: '14: selects', place: 'Kirijo Guesthouse · Common Room', time: 'After School', music: 'tender', scene: [
      { n: "The window seat in the guesthouse common room had turned into an editing suite somewhere around the second week of February, the way a desk turns into a bed for someone who's been sick: a borrowed laptop on a cushion, a nest of cables, a mug with a skin on it, and the desk lady's bowl of rice crackers, untouched, which the desk lady had plainly registered as a personal failing, because there were two bowls now, side by side, as if quantity might succeed where quality hadn't." },
      { s: 'minji', f: 'neutral', t: "Sit. Don't look at the screen yet. I have to ask you something first, and if you look at the screen you'll just say yes to make me feel better." },
      { n: "She had the timeline open. Solar knew what it was now without being told, a long strip of color along the bottom of the screen cut into pieces, every piece a moment, and above it, very small, a number. *11:00*." },
      { s: 'minji', f: 'neutral', t: "Eleven minutes. Forty-one hours and it's eleven minutes. I took out so much, Sol. I took out so much good stuff." },
      { s: 'minji', f: 'sad', t: "And it still needs sound. Not music. I've tried four songs. Every one of them turns it into a music video. I don't want a music video. I want it to sound like it sounded." },
      { choose: [
        { t: "Why eleven?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "You gave me eleven seconds. Under the lamp, in the snow. That was me. So eleven minutes is everyone." },
          { s: 'minji', f: 'flustered', t: "That's a very pretentious reason. I know. I'm a film major. It's in the contract." }
        ] },
        { t: "(Ask her to show you what she took out.)", notes: 3, then: [
          { n: "She showed her a few. Koromaru asleep on Akihiko's running shoes with Akihiko standing over him in his socks, not daring to move. Solar falling asleep in the middle of her own sentence in the lounge. Fuuka mouthing along to the radio with her eyes shut." },
          { s: 'minji', f: 'neutral', t: "Those are the best ones. That's why they're out. The best ones are mine." }
        ] },
        { t: "It'll sound right. You'll find it.", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Maybe it'll find me. Some things you don't go and get. You wait until somebody hands them to you." }
        ] }
      ] },
      { s: 'minji', f: 'serious', t: "Okay. Here's the ask. There's one clip I don't know about." },
      { n: "She found it on the timeline without looking, the way you find a light switch in your own house. It was short. The dorm roof, at night, in December, by the look of the coats. Solar on the concrete with her back against the water tank and her knees pulled up and her face down in them, and she wasn't asleep, and she wasn't laughing, and the city behind her was orange and very far away." },
      { s: 'minji', f: 'neutral', t: "You said I could film that night. You said, *I don't care, film whatever*, and I did, and I don't think you meant it, and I've been carrying it around in a folder for two months like a stone in my shoe." },
      { s: 'minji', f: 'serious', t: "It's the truest thing I've got. And I don't get to decide that. You do." },
      { choose: [
        { t: "Keep it in. That was me too.", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "Are you sure? I'm asking twice." },
          { s: 'solar', f: 'neutral', t: "I'm sure. Twice." },
          { n: "Minji nodded, slowly, and didn't move the clip, and didn't say anything for a while, and her hand on the trackpad was perfectly steady, which Solar had learned was how you could tell what something was costing her." }
        ] },
        { t: "(Take the trackpad. Cut it yourself.)", notes: 3, then: [
          { n: "She cut it. Minji didn't stop her. The timeline closed up over the gap like water over a dropped stone, and the number at the top went down by four seconds, and Minji looked at it and said *ten fifty-six*, and then, very quietly, *thank you for doing it yourself*, and then she put four seconds of the lamp, flickering, where the roof had been, so that it still came out to eleven." }
        ] },
        { t: "What do you want to do with it?", notes: 2, then: [
          { s: 'minji', f: 'sad', t: "I want you to have been okay that night. I can't fix that with a cut." },
          { s: 'minji', f: 'neutral', t: "...I'll keep it. Not in it. Just kept." }
        ] }
      ] },
      { ifHeading: 'R', then: [
        { s: 'minji', f: 'neutral', t: "One copy for the lab. I'm going to show it with the lights off, and Doyoung's going to pretend he isn't crying behind his clipboard." },
        { s: 'minji', f: 'serious', t: "Only if you say yes. I don't show anything without a yes. Not even to Doyoung. Especially not Doyoung. He'll want notes." },
        { choose: [
          { t: "Yes. Lights off.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Lights off. Olivia's going to scream at the very first frame. I'm counting on it. I timed a pause for it." }
          ] },
          { t: "Make one for the girls, too. For Hanni and Hyein.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Hyein already asked. She wants subtitles. I don't know what she thinks anybody says in it. I'm going to do them anyway. Just for her. They're going to say *nice*." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'minji', f: 'neutral', t: "One copy. Mine." },
        { s: 'minji', f: 'neutral', t: "You're going somewhere with a lot of things in it already. I'm not going to hand you one more thing to carry through a door. You can watch mine. Over my shoulder. Every day until the sixth." },
        { choose: [
          { t: "Make two.", notes: 3, then: [
            { s: 'minji', f: 'sad', t: "...I'll think about it. Somebody else will probably say it to me too, and then I'll have to." }
          ] },
          { t: "(Watch it over her shoulder, then. Every day till the sixth.)", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "Every day. I'll keep the window seat warm. The desk lady will make you eat rice crackers. That's the price of admission." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'minji', f: 'neutral', t: "Copies for us. Hanni wants one. Hyein wants one with subtitles, don't ask me what she thinks anybody says in it." },
        { s: 'minji', f: 'sad', t: "You'll have the real thing. Every day. In a different uniform, at a different table. You won't need eleven minutes of it." },
        { choose: [
          { t: "Make one for me too. For the days I miss you.", notes: 3, then: [
            { s: 'minji', f: 'sad', t: "...Okay. One for you. For those days." },
            { s: 'minji', f: 'neutral', t: "I hope there aren't many. I hope there are a few. Is that allowed? I'm asking." }
          ] },
          { t: "What happens to the slate?", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "It goes on the lab wall. Over your chair. Doyoung's going to hate it. He's going to leave it up." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'minji', f: 'neutral', t: "One copy. It stays here. With you." },
        { s: 'minji', f: 'sad', t: "I'll have the footage. All forty-one hours. You get the eleven minutes. That's the deal. You get the good part, I get the whole thing." },
        { choose: [
          { t: "That's a terrible deal for you.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "I know. I made it anyway. I'm very bad at deals. Ask the desk lady. I owe her about four thousand rice crackers." }
          ] },
          { t: "(Ask her to write the dorm's address on the sleeve.)", notes: 3, then: [
            { n: "She wrote it on the paper sleeve in pencil, in her leaning capitals, the whole address down to the room number, and then underneath it, smaller, *in case you forget where you live*, and then rubbed that part out, and then wrote it again." }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Three. A disc, my phone, a laptop. I told you." },
        { s: 'minji', f: 'serious', t: "If you wake up somewhere and you don't remember the lamp, I'll have one of them on me. I'll find you. I'll sit you down and make you watch it." },
        { choose: [
          { t: "And I'll cry.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "In all three places. I'm counting on it. I'm bringing tissues to three places." }
          ] },
          { t: "Promise you'll find me. All of me.", notes: 3, then: [
            { s: 'minji', f: 'serious', t: "All of you. Even the ones I've never seen. I'll ask for directions." },
            { s: 'minji', f: 'neutral', t: "I'm very persistent. Politely." }
          ] }
        ] }
      ] }] }] }] },
      { ifRoute: 'romance', then: [
        { n: "When Solar got up to go, Minji caught her sleeve. Not hard. Two fingers, the way she held a lens cap." },
        { s: 'minji', f: 'neutral', t: "Can I ask you something? You don't have to do anything with it." },
        { choose: [
          { t: "Yes.", notes: 3, then: [
            { s: 'minji', f: 'flustered', t: "I didn't even—" },
            { s: 'solar', f: 'flustered', t: "I know. Yes." },
            { n: "Minji kissed her in the window seat with the timeline still open behind them, eleven minutes paused on a frame of the lamp, quickly and carefully, like checking focus, and then pulled back and looked at her as if she were deciding whether to keep the take." },
            { s: 'minji', f: 'happy', t: "Keeping it." }
          ] },
          { t: "(Sit back down. Stay till the desk lady turns the lights off.)", notes: 3, then: [
            { n: "She sat back down, and stayed, and at nine the desk lady came through and turned off the common room lights one by one, and left the one over the window seat on, and went to bed without a word." },
            { s: 'minji', f: 'flustered', t: "That's the most romantic thing anyone's ever done for me, and it was a woman who disapproves of how I eat rice." }
          ] }
        ] }
      ], else: [
        { n: "When Solar got up to go, Minji stopped her with a hand up, the way she stopped people walking into a shot." },
        { s: 'minji', f: 'neutral', t: "Hey. Thank you for looking. You looked at the hard one. Nobody ever looks at the hard one." },
        { choose: [
          { t: "Thank you for asking.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "I'll always ask. Twenty times. You know that by now. You knew it before you knew me." }
          ] },
          { t: "(Take one rice cracker from the second bowl, so the desk lady wins one.)", notes: 3, then: [
            { n: "She took one and ate it in front of the desk, slowly, and the desk lady, passing with a stack of towels, saw, and nodded once, gravely, like a general receiving news of a victory at last." }
          ] }
        ] }
      ] }
    ] },

    { after: '2/25', title: '15: wrap', place: 'Iwatodai · Riverside', time: 'After School', music: 'tender', scene: [
      { n: "The lamp at the bottom of the river path was still flickering. Of course it was. It had flickered since September and it was going to go on flickering after all of them, in its tired stuttering amber, and Minji was standing under it with the slate in one hand and the camera in the other and no tripod, nothing to set up, nothing to plug in, which was how Solar knew before she said anything." },
      { s: 'minji', f: 'neutral', t: "It's done. Locked. Eleven minutes. I'm not touching it again. If I touch it again I'll never stop." },
      { s: 'minji', f: 'neutral', t: "So this isn't for anything. This is the wrap. On the last day of a shoot somebody claps the slate one more time and says that's a wrap, and everybody goes home." },
      { s: 'minji', f: 'sad', t: "I didn't want to do it on the last day. The last day's going to be terrible. I wanted to do it on a Thursday." },
      { n: "It was a Thursday. The river was high and brown with snowmelt from somewhere upstream nobody could see, and the wind had dropped, for once, and the air had the very first edge of something softer in it. Not warm. Just less." },
      { choose: [
        { t: "(Take the slate from her.)", notes: 3, then: [
          { n: "She took it. *TK 1* was still on it, from the seawall, and *TK 2* under it, and under that, in chalk that had been gone over more times than it needed, *TK 41*, for the hours. Then nothing. Room for one more line." }
        ] },
        { t: "Is the folder done too?", notes: 3, then: [
          { s: 'minji', f: 'neutral', t: "The folder's never done. The folder's the folder." },
          { s: 'minji', f: 'flustered', t: "I made a new one this morning. It's called *after*. It's empty. Don't ask me why I made it." }
        ] },
        { t: "Did you ever find the sound?", notes: 2, then: [
          { s: 'minji', f: 'neutral', t: "Yeah. It got handed to me." },
          { s: 'minji', f: 'happy', t: "I'll tell you sometime. It's a dumb story. It's the best story." }
        ] }
      ] },
      { ifHeading: 'R', then: [
        { s: 'minji', f: 'neutral', t: "Okay. Here's the thing I'm not going to say on the last day, so I'm saying it on a Thursday." },
        { s: 'minji', f: 'neutral', t: "At home there's a lamp outside the honors dorm that flickers just like this one. When we get back, I want one walk under it. One. After practice. Like before." },
        { s: 'minji', f: 'serious', t: "You've got a lot waiting for you over there. I know. I was in a hallway for four seconds once. I'm not asking you to put anything down. I'm asking for the walk." },
        { choose: [
          { t: "Every night, if you want.", notes: 3, then: [
            { s: 'minji', f: 'sad', t: "Don't say every night. Say one. I can carry one." },
            { s: 'solar', f: 'happy', t: "One. Then another one." },
            { s: 'minji', f: 'happy', t: "...Okay. Then another one." }
          ] },
          { t: "(Wait under the lamp for it to go out. Promise when it comes back on.)", notes: 3, then: [
            { n: "They waited. It took eleven seconds, which Minji said was a sign and Solar said was a lamp, and when it went out and came back on, Solar said *one walk*, and Minji said *noted*, and wrote it on the slate in the room left under *TK 41*." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'minji', f: 'neutral', t: "You're going where I can't film. That's okay. I've decided it's okay. I decided on the monorail. Twice." },
        { s: 'minji', f: 'sad', t: "I'm going to stand under the lamp at home and wait for it to do something, and it's going to be just a lamp. I know that. I'm going to stand there anyway." },
        { s: 'minji', f: 'serious', t: "And if anybody over there points anything at you that isn't asking, you look straight back at it. Like I showed you. Make them see they've been seen." },
        { choose: [
          { t: "I'll look straight at it.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "Good. That's the only thing I ever taught you that was mine and not yours first." }
          ] },
          { t: "(Write *asked* on the slate, in the room under her takes.)", notes: 3, then: [
            { n: "She wrote it small, in the round hand, and Minji read it upside down and nodded slowly, like a director accepting a note she'd been hoping somebody would give her." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'minji', f: 'neutral', t: "You're going to the school with the uniforms and the math and the boy with the dimples who forgets to eat. I'll go home, and you won't be on the team." },
        { s: 'minji', f: 'neutral', t: "I'm going to leave your slot empty for a while. Then Doyoung's going to make me fill it. I'm going to hate whoever it is for exactly one week, and then I'm going to teach them your timing." },
        { s: 'minji', f: 'serious', t: "I'm going to tell them about you. I won't show them. I'll just tell them. I'm allowed that." },
        { choose: [
          { t: "Show them. You've got my yes.", notes: 3, then: [
            { s: 'minji', f: 'surprised', t: "..." },
            { s: 'minji', f: 'neutral', t: "That's a big yes. I'm going to save it. I'm only going to use it once." }
          ] },
          { t: "Hate them for two weeks. I'm worth two.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Two weeks. You're so vain. ...Two weeks. Fine. You're worth two." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'minji', f: 'neutral', t: "You stay. We go. I keep thinking it should be the other way round, that the camera's the thing that stays put. It isn't. It's coming with me." },
        { s: 'minji', f: 'sad', t: "So I'm going to be the one who looks back on the last day. I'm telling you now so you're ready. I'm going to look back the whole way down the platform. I'm going to be so embarrassing." },
        { choose: [
          { t: "I'll be looking too.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "Then we'll both be embarrassing. Okay. Two people looking at each other. That's a two-shot." }
          ] },
          { t: "(Promise to stand under this lamp on the first cold night next winter.)", notes: 3, then: [
            { s: 'minji', f: 'sad', t: "...The first cold night. When the wind finds your collar." },
            { s: 'minji', f: 'neutral', t: "I'll be under mine. Same night. It won't be the same night. It will to me." }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'neutral', t: "You're going home to all of it. I'm one of the all of it. I keep having to remind myself. I'm going to see you over there. Technically, for me, this isn't even goodbye." },
        { s: 'minji', f: 'serious', t: "But this one's going to go quiet. The lamp. Fuuka said. The whole year might go soft, like a dream you keep for a morning and then don't." },
        { s: 'minji', f: 'neutral', t: "So I'm going to remember it for you. That's my job. That's the whole job. I hold the camera and I remember." },
        { choose: [
          { t: "Then show me. Over there. When I've forgotten.", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "First day. In the lab. Lights off. You won't know why you're crying. I'll know." }
          ] },
          { t: "(Stand under the lamp. Let her have one more shot.)", notes: 3, then: [
            { n: "She stood under it, and Minji lifted the camera, and asked, and Solar nodded, and for once she didn't do anything with her shoulders at all. She just stood in the light being remembered, and let it happen to her." }
          ] }
        ] }
      ] }] }] }] },
      { s: 'minji', f: 'neutral', t: "Okay. Last thing. For real this time." },
      { n: "She held the slate up in front of the lens and looked at Solar over the top of it." },
      { choose: [
        { t: "That's a wrap.", notes: 3, then: [
          { n: "Solar said it, and clapped it, and the sound went out across the river and came back off the far bank half a second later, small and late, like a second clap from somebody who'd been watching the whole time from the other side." }
        ] },
        { t: "(Make her say it. It's her shoot.)", notes: 3, then: [
          { s: 'minji', f: 'sad', t: "...That's a wrap." },
          { n: "She clapped it herself, one-handed, like a loser, she said, the way she'd been doing it for six years, and laughed, and her eyes were wet, and she didn't do anything about it." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "The lamp went out. A whole second of real dark, the way it did now and then, and in the dark Minji said *Sol*, very quietly, and asked, the way she always asked, and Solar said yes before the question was finished, and the light came back on with the two of them already in it." },
        { choose: [
          { t: "(Kiss her under the lamp. Let the camera hang off its strap and film the ground.)", notes: 3, then: [
            { n: "The camera swung on its strap against Minji's hip and filmed their shoes and the wet path and the stuttering light, and when she found it that night she texted that it was the best footage of shoes ever shot and that she was never deleting it, and that she'd watched it eleven times, which was a sign, and that Solar wasn't allowed to say it was a lamp." }
          ] },
          { t: "(Take the camera off her. Turn it on her. Ask.)", notes: 3, then: [
            { s: 'solar', f: 'flustered', t: "Can I?" },
            { s: 'minji', f: 'flustered', t: "...You're asking." },
            { s: 'solar', f: 'neutral', t: "I always ask. I learned it from somebody." },
            { n: "Minji stood under the lamp and let her, and didn't perform for a single frame, and looked at Solar instead of the lens the entire time, which meant the shot was technically ruined, and was the only shot of herself she ever framed." }
          ] }
        ] }
      ], else: [
        { n: "The lamp went out, a whole second of real dark, and came back on, and Minji was looking at her in the amber the way she had the very first afternoon, like someone she'd waited a long time to see, except that this time there wasn't any stranger left in it at all." },
        { choose: [
          { t: "Duo.", notes: 3, then: [
            { s: 'minji', f: 'happy', t: "Duo. Wrap. Go home." },
            { n: "Neither of them went home for another hour." }
          ] },
          { t: "(Hand her back the slate. Keep the chalk.)", notes: 3, then: [
            { s: 'minji', f: 'neutral', t: "That's my chalk." },
            { s: 'solar', f: 'neutral', t: "It's continuity." },
            { s: 'minji', f: 'happy', t: "...You were listening. You were listening to me all year." }
          ] }
        ] }
      ] },
      { n: "When they did go, Minji leaned the slate against the foot of the lamp for one minute, *TK 1* facing out, and filmed it, and then picked it up and put it in her bag beside the camera, every piece in its slot, and walked Solar home the long way, over the river, though it was nowhere near on her way. It never had been." }
    ] }
  ],

  afterMax: [
    { title: 'b-roll', place: 'Port Island · Seaside Park', time: 'After School', scene: [
      { n: "Minji was filming nothing. She called it b-roll. The seawall. A gull. The shadow of a lamppost moving across the grass at four in the afternoon. Solar's sleeve, at the edge of the frame, for three seconds." },
      { s: 'minji', f: 'neutral', t: "It's for later. For the parts in between. Nobody ever remembers the parts in between, and then you need them." },
      { choose: [
        { t: "(Sit in the parts in between with her.)", notes: 3, then: [
          { n: "They sat on the seawall in the parts in between for an hour, and Minji filmed eleven minutes of it, and none of it was of anything, and all of it was good." }
        ] },
        { t: "(Steal the camera and film her filming.)", notes: 3, then: [
          { s: 'minji', f: 'flustered', t: "Sol. SOL. Give it— okay, fine, that's a good angle, keep it." }
        ] }
      ] },
      { ifRomance: 'minji', then: [
        { n: "When the light went, she turned the camera off and put it in her bag and held Solar's hand the whole way to the station, and didn't film any of it, on purpose." }
      ], else: [
        { n: "When the light went, she turned the camera on Solar one last time and asked, and waited, and got a yes, and got two seconds, and said nice." }
      ] }
    ] },
    { title: 'last queue', place: 'Paulownia Mall · Game Panic', time: 'Evening', scene: [
      { n: "The sticky PC behind the bead curtain. The game that was ninety percent theirs. Cap backwards." },
      { s: 'minji', f: 'serious', t: "One more. Ranked. If we lose, it's your fault. If we win, it's mine. That's the deal. It's always been the deal." },
      { choose: [
        { t: "(Keep her alive. All of it.)", notes: 3, then: [
          { s: 'minji', f: 'happy', t: "Nice. Nice. Perfect timing. Always perfect timing. You're so annoying." }
        ] },
        { t: "(Throw the little bell at her exactly when she's sure she's going to die.)", notes: 3, then: [
          { s: 'minji', f: 'surprised', t: "I was DEAD. I was so dead. You— okay. Okay, that's the play. That's the play I'd put in a highlight reel." }
        ] }
      ] },
      { n: "They won. Minji said it was her. Solar let her have it." }
    ] }
  ],

  christmas: { place: 'Iwatodai · Riverside', time: 'Evening', scene: [
    { n: "Christmas Eve, and the river path was empty and blue with snow and the lamp at the bottom of it was flickering the way it always did, except Minji had wound a string of fairy lights around the post, which meant it now flickered in two different rhythms at once, like an argument." },
    { s: 'minji', f: 'flustered', t: "I know. I know. I wanted it to look nice and I made it worse. That's my whole year." },
    { s: 'minji', f: 'neutral', t: "I got you something. It's not wrapped. I don't wrap. It ruins the reveal." },
    { cg: 'romance-minji-christmas' },
    { n: "A photograph. A real one, printed at the photo shop on the strip, glossy, the size of a postcard. Solar on the roof in November with a thermos lid in her hand, laughing at something just out of frame, in the orange light of the whole city." },
    { s: 'minji', f: 'neutral', t: "You can't buy a print here of anything from home. So I made you one from here. So you have one." },
    { choose: [
      { t: "(Give her yours: a lens cloth with a tiny sun embroidered in the corner, badly, by you.)", notes: 3, then: [
        { s: 'minji', f: 'surprised', t: "Did you sew this? Did you sew this yourself?" },
        { s: 'minji', f: 'flustered', t: "It's terrible. I love it. I'm never cleaning a lens with it. It's going in a frame." }
      ] },
      { t: "(Ask her to stand under the lamp. Take her picture.)", notes: 3, then: [
        { n: "She stood under the lamp with the two rhythms of light going over her and didn't perform for a single second, and Solar took one picture, and it was the right one." }
      ] }
    ] },
    { s: 'minji', f: 'happy', t: "Merry Christmas, Sol. You're still in all of them. I checked." }
  ] }
});
