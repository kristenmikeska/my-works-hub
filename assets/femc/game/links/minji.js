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
   Arcana: '?' (open question for Kat, plot doc §16.6). afterMax and christmas use v1's field shapes. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'minji', name: 'Minji Kim', short: 'Minji', arcana: 'Moon', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: 'canon',
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
          { s: 'solar', f: 'neutral', t: "The female watches from a safe distance. She is judging him. She has seen better pigeons." },
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
          { s: 'solar', f: 'neutral', t: "The camera already loves you." },
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
      { s: 'minji', f: 'neutral', t: "It's weird without the team. At home there's five of us. Chenle on tank, he talks about rotations like a professor. Olivia screams the entire time, even when we're winning, especially when we're winning. Haerin's the other support. She giggles maybe once a semester. When she does, the whole lab goes quiet like church." },
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
      { s: 'solar', f: 'neutral', t: "I look like I'm starring in a sad movie." },
      { n: "Minji went completely still. Her hand on the trackpad stopped. The clip ran out and went black and she didn't loop it." },
      { s: 'minji', f: 'neutral', t: "...That's exactly what you said." },
      { s: 'minji', f: 'neutral', t: "The first time. In my room. You sat on my bed and looked at it and said that. Exactly that." },
      { s: 'minji', f: 'happy', t: "Then you must not know yourself, Sol." },
      { n: "She said it like a line she'd said before and been proud of, and then heard it twice, once now and once somewhere else, and shook her head at herself, and laughed, quietly, into the collar of her sweatshirt." },
      { n: "Solar didn't laugh. She was looking at the black screen with her own reflection in it, faint, and the lamp behind her, flickering, and she could feel the edge of something. A room that smelled like printer paper and laundry. A girl falling back onto a bed beside her. A word. A project with a one-word name nobody understood, least of all the person making it." },
      { s: 'solar', f: 'neutral', t: "Authenticity." },
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
      { s: 'solar', f: 'neutral', t: "Junpei said you called me your muse. When you first came. In the lounge." },
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
          { s: 'minji', f: 'happy', t: "I hope he's careful with it. I called you my muse first, though. I have the post. It's timestamped." }
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
          { s: 'solar', f: 'neutral', t: "It's pointed at the bay." },
          { s: 'minji', f: 'flustered', t: "I KNOW it's pointed at the bay. It's the best footage of the bay ever shot. I'm never deleting it." }
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
      { s: 'solar', f: 'neutral', t: "...*I always believe you, Sol.*" },
      { n: "The TV went black. The clip was over. Minji didn't move. She was sitting on the floor with her back against the sofa and the remote in her hand, and she'd gone so still that Solar could hear the laptop fan." },
      { s: 'minji', f: 'surprised', t: "..." },
      { s: 'minji', f: 'sad', t: "You remember that." },
      { s: 'minji', f: 'neutral', t: "Of everything. You remember that one." },
      { choose: [
        { t: "I believe you too. Minji. I always will.", notes: 3, then: [
          { n: "Minji put the remote down on the carpet very carefully, like it might break. Then she put her face in her hands, and her shoulders went, and Solar slid down off the sofa onto the floor beside her and put both arms around her and held on." }
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
        { s: 'solar', f: 'neutral', t: "I know what it is." },
        { n: "She kissed her on the lounge floor with the TV dark and the laptop fan humming, slow, not stealing anything, not a frame, not a second, and Minji held onto the front of her sweater with both hands like she'd hold a camera on a moving train, and for once neither of them was watching anything at all." }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Duo?" },
        { s: 'solar', f: 'neutral', t: "Duo. Always." },
        { n: "Minji laughed into Solar's shoulder, a wet, crooked, real laugh, and they sat on the lounge floor with the TV dark until Junpei came down for a snack at one and found them, and silently backed out, and went hungry." }
      ] },
      { s: 'minji', f: 'neutral', t: "...You're the same. In the frame. You were always the same." },
      { s: 'minji', f: 'happy', t: "I just never got to say it to your face." }
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
