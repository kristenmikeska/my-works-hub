/* Judy Alvarez · VIII Justice. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Visitor (Cyberpunk 2077), third wave (8/6). Light side romance, P5R-style (route choice at rank 9; romantic beats sit inside
   ifRoute so a friend route plays clean). The ending she runs from: Evelyn, and leaving Night City. Evelyn is handled with care,
   without detail. Panam comes through on the 9/5 moon (rank 5). Rank 6: the dive (Solar's body is terrified of deep water and
   doesn't know why). Rank 7: Judy's braindance of Solar reads like three people's feelings in one head (a fair three-lives clue).
   Cast-only speakers: none (panam and evelyn have portraits). afterMax: 2 scenes; christmas: 12/24 (engine need, as kasumi.js). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'judy', name: 'Judy Alvarez', short: 'Judy', arcana: 'Justice', numeral: 'VIII', from: 'Cyberpunk 2077',
  kind: 'visitor',
  romance: 'side',
  starts: '8/8',
  home: { area: 'mall', spot: 'Club Escapade', slot: 'evening', days: [3, 5, 6],
          hint: 'Evenings on Wednesdays, Fridays and Saturdays, at Club Escapade in Paulownia Mall, usually inside a piece of equipment.' },
  approach: "At the end of the bar in Club Escapade, a woman with dyed hair and a headlamp is half inside the jukebox, swearing at it under her breath in two languages.",
  cast: {},
  invite: {
    ask: [
      "hey. you free? could use a hand",
      "wanna hang? got somethin cool to show you",
      "escapade's dead tonight. come keep me company?",
      "jukebox is actin up again. wanna watch me yell at it",
      "need a second pair of hands. steady ones",
      "choom. u free? its a preem night for doin nothin"
    ],
    ok: ["nice. see ya in a bit", "preem. i'll be by the jukebox", "hell yeah. door's open. kinda"],
    no: ["no prob. another time", "all good choom. rain check", "np. i'll bug u tomorrow then"]
  },
  hangouts: [
    [
      { n: "Club Escapade at seven on a weeknight was empty and too bright, the cleaners just gone and the floor still tacky, and Judy was sitting cross-legged on the bar with the back panel off the light rig, sorting resistors into an ice cube tray by color." },
      { s: 'judy', f: 'neutral', t: "Hey. Grab a stool. Hand me the little red ones when I point. Don't ask what they do. I'm not totally sure either. Your tech's like a museum." },
      { choose: [
        { t: "(Hand her the red ones when she points.)", notes: 3, then: [
          { n: "Solar handed her the red ones. Then the blue ones. Then, without being pointed at, a yellow one, because Judy's hand had been about to go there, and Judy looked at the resistor, and at her, and grinned with one side of her mouth." },
          { s: 'judy', f: 'happy', t: "Okay, you're hired. Pay's terrible. Benefits include me." }
        ] },
        { t: "What are you building?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "Nothing. Fixing. The strobe's been firing off-beat for a week. Drives me nuts. Nobody else notices. Everybody else is drunk." }
        ] },
        { t: "Is this allowed?", notes: 1, then: [
          { s: 'judy', f: 'neutral', t: "Owner gave me a key. Said, quote, \"whatever you're doing, keep doing it.\" So. Allowed-ish." }
        ] }
      ] },
      { n: "When the club opened at nine the strobe fired dead on the beat for the first time in a year, and nobody noticed, and Judy stood at the end of the bar with her arms folded watching it with the private satisfaction of someone who'd hung a picture straight in an empty house." }
    ],
    [
      { n: "The junkyard cat had decided it lived in Judy's toolbox now, which was a problem, because she needed the toolbox. It lay in the top tray across her screwdrivers with its eyes half shut and its paws tucked under, like a loaf of bread that had opinions." },
      { s: 'judy', f: 'serious', t: "Look at him. Look at this little gonk. I need a Phillips head and he's sleeping on it out of spite." },
      { choose: [
        { t: "(Lift the cat out very gently.)", notes: 2, then: [
          { n: "Solar lifted him out. He went entirely limp in her hands, like a bag of warm sand, and when she set him on the workbench he poured himself straight back into the toolbox the second she let go." },
          { s: 'judy', f: 'happy', t: "Yeah. Yeah, he does that. He's got a lot of conviction for a guy with one ear." }
        ] },
        { t: "Use a different screwdriver.", notes: 3, then: [
          { s: 'judy', f: 'neutral', t: "...Okay, yeah. That's what I've been doing for a week. I just wanted somebody to agree it was an injustice." }
        ] }
      ] },
      { n: "She worked around him for the rest of the evening. Every time she reached into the toolbox she scratched him under the chin first, without looking, like paying a toll." }
    ]
  ],
  ranks: [
    { after: '8/8', title: '1: npc', place: 'Paulownia Mall · Club Escapade', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Club Escapade was the only real nightclub on Port Island, all strobe lights and bass you could feel in your back teeth and a crowd of university students pretending they weren't from the suburbs. It was ten o'clock on a Saturday. Junpei had dragged half the dorm there on the grounds that summer was ending and they had all almost died on a bridge two nights ago and deserved it, and nobody had been able to argue with either part." },
      { n: "The woman at the end of the bar was taking apart the jukebox." },
      { n: "Not breaking it. Taking it apart, carefully, with a tiny screwdriver and a headlamp and a look of total focus, as if the jukebox were a patient and she were the only surgeon in the building. She had hair shaved at one side and dyed at the other, and tattoos down both arms, and a pair of overalls with one strap undone, and nobody at the bar was stopping her, because nobody at the bar could quite tell whether she worked there." },
      { n: "She looked up when Solar got close. Squinted. Tapped the side of her own head, twice, like someone checking a radio for a signal." },
      { s: 'judy', f: 'neutral', t: "Huh. Your face is way too detailed for a background extra. Who wrote you?" },
      { choose: [
        { t: "Wrote me?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "Yeah. This is a braindance, right? Somebody's recording. Gotta be. Nothing's this weird in real life. The phones fold. The music's from a museum. Everybody turns into a coffin at midnight." }
        ] },
        { t: "You're fixing the jukebox.", notes: 3, then: [
          { s: 'judy', f: 'serious', t: "Upgrading it. It was playing the same twelve songs. Criminal. Now it's gonna play my twelve songs. Totally different crime." },
          { n: "She said it with total seriousness. Solar decided she liked her immediately." }
        ] },
        { t: "Are you supposed to be doing that?", notes: 1, then: [
          { s: 'judy', f: 'neutral', t: "Nobody's said no. Around here that seems to be how stuff works." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "Judy Alvarez. BD tech. Editor. I take memories and make them into something you can step inside. Feel what somebody else felt. It's a whole thing where I'm from." },
      { register: 'judy' },
      { s: 'judy', f: 'neutral', t: "Fell asleep in my workshop in Night City with a rig on my head, woke up in a green nightmare full of coffins, and figured, okay, somebody slipped me a bad chip. Then the green went away and the coffins were people and I was standing outside a pharmacy." },
      { s: 'judy', f: 'neutral', t: "Only other person awake out there was a kid. Little. In a porter's coat, like out of an old movie, way too big. She pointed at this place and said, \"There's music down there. You'll want something to fix.\"" },
      { s: 'judy', f: 'neutral', t: "And then she said sorry. Kinda broke my heart, honestly. Like she'd been saying it so long she didn't hear herself anymore. Then I blinked and she was gone. Good editing. Real clean cut." },
      { ifMet: ['wren'], then: [
        { n: "Solar thought of the bench at Iwatodai Station and the way Wren apologized to pigeons, and to the rain, and once to a vending machine that had eaten her coin. She didn't say anything. Judy was already back inside the jukebox." }
      ] },
      { choose: [
        { t: "It's not a braindance. It's real.", notes: 3, then: [
          { s: 'judy', f: 'sad', t: "Yeah. Yeah, I was afraid you'd say that. Too many little details. The smell's wrong for a BD. BDs never get the smell right. This place smells like beer and floor cleaner and somebody's really bad cologne." },
          { n: "She looked around the club as if it had personally betrayed her. Then she went back to the jukebox, faster, like a person who copes by having something in her hands." }
        ] },
        { t: "If it's a braindance, what am I?", notes: 2, then: [
          { s: 'judy', f: 'happy', t: "An NPC. A really good one. Better dialogue than most. I'd hire your writer." }
        ] }
      ] },
      { n: "When she finished, the jukebox played something loud and angry and wonderful that nobody in Iwatodai had ever heard, a woman's voice over guitars like broken glass, and the university students stopped dancing for a full four seconds to stare at the machine as if it had spoken, and then started again, harder." },
      { s: 'judy', f: 'happy', t: "There. That's better. Now it sounds like somewhere." },
      { n: "She held out her hand, palm up, oily, without looking at Solar, the way you'd hold out a hand for a tool, and it took Solar a second to understand she meant the phone, and Judy typed her own number into it with two quick thumbs, frowning at the keys, and handed it back. The contact said JUDY (NOT AN NPC). Then, in brackets: (probably)." }
    ] },

    { after: '8/22', title: '2: the rig', place: 'Port Island · Junkyard', time: 'Evening', scene: [
      { place: 'Port Island · Junkyard', time: 'Evening', bg: 'junkyard-scene' },
      { music: 'night' },
      { n: "There was a junkyard out past the port, behind a chain-link fence with a hole in it the size of a person, and Judy had moved in. Not to live. To work. She'd built a workbench out of a door and two oil drums, and strung a work light off the battery of a car with no wheels, and in the middle of all of it, on the door, there was a tangle of salvaged circuit boards and wires and a motorcycle helmet with the visor off." },
      { s: 'judy', f: 'neutral', t: "Braindance rig. Or the start of one. Your tech here's ancient, choom. Like, fossil-level. I've been stripping arcade machines for parts. Don't tell the arcade." },
      { s: 'judy', f: 'neutral', t: "The redhead with the big house came by. Kirijo. Told me I'm \"faint,\" which, rude, and that I need somebody here. I said I got a cat. She didn't think the cat counted." },
      { choose: [
        { t: "Can I help?", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "...Seriously? Okay. Okay. Hold this. Don't let it touch that." },
          { n: "She handed Solar a soldering iron and a circuit board and a stream of very fast instructions, and for two hours they worked in the junkyard under the work light with the smell of hot solder and old oil and the harbor, and Solar didn't understand any of it, and her hands were steady anyway, steadier than Judy's, which Judy noticed, and said nothing about, and started handing her the small jobs." }
        ] },
        { t: "What does it do?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "Records what you feel. Not just what you see. Everything. And lets someone else feel it too. Exactly how you felt it." }
        ] },
        { t: "The cat counts.", notes: 2, then: [
          { s: 'judy', f: 'happy', t: "RIGHT? That's what I said. He's very present. He's the most present guy I know." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "Back home, BDs are mostly garbage. Corpo propaganda. People getting hurt for views. Rich gonks paying to feel what it's like to be poor for twenty minutes." },
      { s: 'judy', f: 'neutral', t: "I want to make the other kind. The kind that makes people feel less alone. Like, you put it on and for ten minutes you're not just you, you're with somebody. That's the whole dream. That's all I ever wanted to make." },
      { n: "She said it fast, not looking up from the circuit board, like she'd said it to herself so many times in the dark that saying it out loud to someone else had become a kind of dare." },
      { choose: [
        { t: "That's a good dream.", notes: 3, then: [
          { s: 'judy', f: 'neutral', t: "...Yeah. It is. Thanks. People usually tell me it's naive." },
          { s: 'solar', f: 'neutral', t: "It is naive." },
          { s: 'judy', f: 'happy', t: "HA. Okay. Okay, I like you. You're the first person who said both." }
        ] },
        { t: "What's it like? Being inside someone else's feelings?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "Loud. Then quiet. Then you take the rig off and your own head feels real small for a while. Like coming back to an apartment after somebody's moved out." }
        ] }
      ] },
      { n: "When they finished, she tested it on the cat. The cat was put into a box of shredded paper with the helmet balanced on top of it, and the little light on the side blinked green for thirty seconds, and then Judy put the helmet on her own head and sat very still on an oil drum with her eyes closed." },
      { s: 'judy', f: 'happy', t: "...Warm. Content. Mildly annoyed about the helmet. Kinda hungry." },
      { s: 'judy', f: 'happy', t: "It works. It actually works. Solar. It works." },
      { n: "She took it off and looked at Solar across the workbench, hair flattened, grinning like a kid on the last day of school, and the cat climbed out of the box and walked away with total dignity, and Solar laughed so hard she had to sit down on a tire." }
    ] },

    { after: '9/5', title: '3: corpo', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { music: 'dorm' },
      { n: "Judy had found out who owned the dorm." },
      { s: 'judy', f: 'serious', t: "Kirijo Group. KIRIJO. As in, the giant megacorp with its name on half the buildings in this city. The hospital. The labs. The flat they gave me. My PHONE, Solar. The phone in my pocket has a corpo logo on the back." },
      { n: "She'd come straight to the lounge to say this, in her overalls, still holding a wrench, and she was standing in the middle of the room the way you'd stand in the middle of a room you'd just realized was bugged. Junpei had taken one look at her and left with his snacks." },
      { n: "Mitsuru was in the armchair by the window with a book. She closed it. She did it slowly, with one finger marking the page, and looked up at Judy with the polite, level, terrifying patience of someone who has been waiting for exactly this conversation for a long time." },
      { s: 'mitsuru', f: 'neutral', t: "I'm aware of who owns the dorm. I'm the daughter of the man who owns it." },
      { s: 'judy', f: 'serious', t: "Oh, PERFECT." },
      { choose: [
        { t: "Judy. Mitsuru's not like that.", notes: 1, then: [
          { s: 'judy', f: 'serious', t: "They're ALL like that. Every corpo kid I ever met thought they were the good one. Every single one. Right up until it cost them something." }
        ] },
        { t: "(Sit down and let them have it out.)", notes: 3, then: [
          { n: "Solar sat down on the stairs and let them have it out. It was a long conversation. It was a loud conversation, on one side. Judy shouted about labs and kids and people who disappear and paper that makes it legal. Mitsuru didn't shout once. She answered every question. She didn't defend anything. That was what made Judy slow down, eventually. You can't fight a wall that keeps agreeing with you." }
        ] },
        { t: "What would you have her do, Judy?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "...I don't know. Burn it down? Quit? Something?" },
          { s: 'mitsuru', f: 'neutral', t: "I've considered both. Seriously. Neither would undo anything. Burning it would only free the people who'd rebuild it worse." }
        ] }
      ] },
      { s: 'mitsuru', f: 'sad', t: "You're not wrong to be suspicious. My family's company has done terrible things. Some of them I only learned about recently. Some of them are the reason this dorm exists." },
      { s: 'mitsuru', f: 'neutral', t: "I can't undo them. I can only try to make sure they're never done again. With what I have, which is a great deal, and the name, which is worse than nothing." },
      { n: "Judy stared at her for a long time. The wrench went down, slowly, until it hung at her side." },
      { s: 'judy', f: 'neutral', t: "...Huh. A corpo who admits it. That's new. That's actually never happened." },
      { s: 'judy', f: 'serious', t: "Still don't trust you. But I'll watch. I'm real good at watching." },
      { s: 'mitsuru', f: 'neutral', t: "That's fair. I'd expect nothing less. I'd think less of you for less." },
      { n: "They didn't shake hands. But the next week, when the dorm's ancient water heater broke on the coldest night of September and everyone had to shower at the bathhouse, it was fixed by morning, and Mitsuru found a note taped to it in a scrawl of oily marker: DON'T THANK ME. NOT FOR YOU. FOR THE KID WITH THE DOG. And under it, smaller, as if added after a long argument with herself: ok a little for you." },
      { choose: [
        { t: "(Tell Judy about the note Mitsuru kept.)", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "She KEPT it? Like, kept kept it?" },
          { s: 'solar', f: 'neutral', t: "In the inside cover of her planner." },
          { s: 'judy', f: 'flustered', t: "...Okay. Okay, that's. Don't tell me stuff like that. I'm trying to stay mad at a corpo here, choom. You're making it real hard." }
        ] },
        { t: "(Don't tell her. Let Mitsuru have it.)", notes: 2, then: [
          { n: "Solar didn't tell her. Some things were Mitsuru's. She'd seen the note once, by accident, folded small inside the cover of the planner Mitsuru carried everywhere, and had looked away, and kept it, the way you keep anything somebody didn't mean you to see." }
        ] }
      ] }
    ] },

    { after: '9/19', title: '4: evelyn', place: 'Port Island · Junkyard', time: 'Evening', scene: [
      { place: 'Port Island · Junkyard', time: 'Evening', bg: 'junkyard-scene' },
      { music: 'tender' },
      { n: "Judy had been quiet all week. Not the focused quiet of building something. A heavier one, the kind that sits on a person's shoulders like a wet coat. She'd stopped texting. The jukebox at Escapade had started skipping again and she hadn't come to fix it." },
      { n: "Solar found her at the junkyard at dusk, sitting on the hood of a rusted car with the BD helmet in her lap, not working on it, just holding it, the way you'd hold something of somebody's after they were gone." },
      { s: 'judy', f: 'sad', t: "There was someone. Back home. Evelyn." },
      { s: 'judy', f: 'sad', t: "Smart. Beautiful. Always three moves ahead of everybody in the room. I'd have followed her anywhere. I kinda did." },
      { s: 'judy', f: 'sad', t: "Some people hurt her. Bad. And afterward she couldn't find her way back. And I couldn't find her either. I tried. I tried every way I knew." },
      { n: "That was all she said about it. She didn't need to say more, and Solar didn't need her to, and the not-saying sat there between them on the warm hood of the car, enormous, like a third person." },
      { choose: [
        { t: "(Stay quiet beside her.)", notes: 3, then: [
          { n: "Solar climbed up onto the hood and sat beside her and didn't say anything, and they stayed there until it was fully dark and the harbor lights came on across the water. The junkyard cat came and climbed into Judy's lap on top of the helmet and lay there, and she put her hand on it, and left it, and after a long time her breathing changed, the way breathing changes when somebody has stopped holding something up and let it sit on the ground for a while." }
        ] },
        { t: "I'm so sorry, Judy.", notes: 2, then: [
          { s: 'judy', f: 'sad', t: "...Yeah. Me too. Every single day." },
          { s: 'judy', f: 'neutral', t: "Thanks for not saying anything stupid. Most people say something stupid. They say she's in a better place. There's no better place in Night City. She's just not here." }
        ] },
        { t: "What was she like? When she laughed?", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "..." },
          { s: 'judy', f: 'sad', t: "...Nobody's ever asked me that. They ask what happened. Nobody asks what she was like." },
          { n: "So she told her. Not what happened. What Evelyn was like. The way she'd tilt her head before she lied, so you'd know she was lying and like her for it. The way she drank her coffee black and stole everyone else's sugar. The way she laughed, once, at something Judy had said on a rooftop, so suddenly she'd spilled her drink over the edge, and they'd both leaned over to watch it fall eight floors." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "I've got a BD of her. Just one. Thirty seconds. I never edited it. I can't." },
      { s: 'judy', f: 'neutral', t: "Do you have anybody like that? Somebody you'd keep thirty seconds of, if that's all you got?" },
      { choose: [
        { t: "I think so. I don't remember who.", notes: 3, then: [
          { s: 'judy', f: 'sad', t: "...That's worse, choom. That's so much worse. Having the thirty seconds and not the face." },
          { s: 'solar', f: 'neutral', t: "I have the feeling. Sometimes. Like a song I can't place." },
          { s: 'judy', f: 'neutral', t: "Then keep the feeling. Feelings are the real recording. Everything else is just pictures." }
        ] },
        { t: "I'd keep this. Tonight.", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "...Yeah? A sad girl on a car with a cat?" },
          { s: 'solar', f: 'neutral', t: "And the harbor lights." },
          { s: 'judy', f: 'happy', t: "Okay. Fair. The harbor lights are good. I'd keep those too." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "I'm not gonna show you. It's hers. But I wanted you to know it exists. That I didn't lose all of her. Just most." },
      { s: 'judy', f: 'sad', t: "The night I fell through, I was sitting in my workshop with it in the slot. Finger on the button. Deciding whether to watch it one more time or wipe it and pack a bag and leave the city for good. Both felt like killing her. And I couldn't do either. And then green." },
      { n: "She put the helmet down on the workbench very carefully, both hands, like setting down a sleeping child. She didn't build anything that night. But the next time Solar came to the junkyard, there was a small square of tape on the side of the helmet, and on the tape, in tiny careful capitals, the letters E.P., and Judy didn't mention it, and neither did Solar." }
    ] },

    { after: '10/3', title: '5: panam', place: 'Port Island · Junkyard', time: 'Evening', scene: [
      { place: 'Port Island · Junkyard', time: 'Evening', bg: 'junkyard-scene' },
      { music: 'joy' },
      { n: "The car had come through on the full moon in early September at a hundred and forty kilometers an hour, according to Fuuka, who'd heard it on her readings as a sound like \"a very angry comet,\" and landed on the coast road outside Port Island, and taken out a guardrail, two traffic cones and a vending machine, and the vending machine had been the only casualty." },
      { n: "By October it was in the junkyard. So was the woman who'd been driving it. Long dark hair, leathers, tattoos, and an expression of absolute fury at the universe for having interrupted her drive. She was under the car. She'd been under the car, Judy said, for three weeks." },
      { s: 'panam', f: 'serious', t: "Judy. Tell your friend if she's gonna stand there she can hand me the twelve-mil." },
      { s: 'judy', f: 'happy', t: "Panam, Solar. Solar, Panam. She drove through a hole in the sky and her first question was whether anybody had seen her spare tire." },
      { s: 'panam', f: 'neutral', t: "It was a good tire." },
      { choose: [
        { t: "(Hand her the twelve-mil.)", notes: 3, then: [
          { n: "Solar found it in the tray without asking which one, and held it out under the car, and a hand came out and took it and stopped." },
          { s: 'panam', f: 'neutral', t: "...She knows wrenches. Alright. You're alright." }
        ] },
        { t: "Nice car.", notes: 2, then: [
          { s: 'panam', f: 'happy', t: "She's a beast. She's ugly as hell and she's never once let me down. Better than most people." }
        ] }
      ] },
      { s: 'panam', f: 'neutral', t: "I was driving out of the Badlands, middle of the night. Running, I guess. From a fight with my family. Same fight we always have. Whether we stay or go, and where, and who gets to decide." },
      { s: 'panam', f: 'neutral', t: "Road went green. Kid in a porter's coat standing in the middle of it, I nearly ran her down. She didn't even flinch. She pointed at the shoulder and said, \"Pull over here. There's somebody you know.\" Then she said sorry. I said, sorry for WHAT, you're the one I nearly hit. And she was gone." },
      { s: 'panam', f: 'happy', t: "And the somebody I knew turned out to be this one. Living in a junkyard. With a cat. Of course." },
      { n: "They fixed the axle together, all three of them, in the junkyard at night with headlamps, with the radio playing something from Judy's twelve songs and the cat supervising from the roof of a dead sedan. Panam swore at the car with enormous affection. Judy swore at Panam. Solar held the light and handed things and said almost nothing, and was happier than she had been in weeks." },
      { s: 'panam', f: 'neutral', t: "You know she talks about you? Judy. When you're not here." },
      { s: 'judy', f: 'flustered', t: "Panam." },
      { s: 'panam', f: 'happy', t: "\"Solar says.\" \"Solar thinks.\" \"Solar held the board steadier than me.\" Three weeks of it. I know a thing when I see it, Alvarez." },
      { choose: [
        { t: "She talks about you too.", notes: 2, then: [
          { s: 'panam', f: 'happy', t: "Yeah? Good things?" },
          { s: 'solar', f: 'neutral', t: "That you'd drive into a wall for somebody you like." },
          { s: 'panam', f: 'neutral', t: "...Fair. I have. Twice. Once on purpose." }
        ] },
        { t: "(Look at Judy.)", notes: 3, then: [
          { n: "Solar looked at Judy. Judy was very busy with a bolt that didn't need doing up. Her ears had gone a color under the headlamp that didn't match her hair." }
        ] }
      ] },
      { n: "When the axle was done Panam slid out from under the car, wiped her hands on her jeans, and looked at the two of them in the headlamp light for a long moment, the way you look at a couple of kids you're leaving in charge of something." },
      { s: 'panam', f: 'neutral', t: "When we get home, Alvarez, you should come out to the Badlands. Get out of that city. It's eating you. I've watched it eat you for a year." },
      { s: 'judy', f: 'sad', t: "...Yeah. Maybe. I don't know. Ask me again when we're home." }
    ] },

    { after: '10/24', title: '6: the dive', place: 'Port Island · Harbor', time: 'Daytime', scene: [
      { music: 'tender' },
      { n: "Judy had found scuba gear. Solar wasn't sure how, and didn't ask, and noticed that a dive shop on the harbor had a new and very sophisticated alarm system on its back door that it hadn't had the week before." },
      { s: 'judy', f: 'neutral', t: "Where I grew up there was a town called Laguna Bend. Little place. They built a dam and flooded the whole valley. Houses, church, the gas station. All of it, under the water." },
      { s: 'judy', f: 'neutral', t: "I used to dive down to it. See it all down there. The street I lived on. Like a memory you can swim through. Quiet. Nobody else around." },
      { s: 'judy', f: 'happy', t: "There's a sunken pier off the old harbor here. Fishermen say it's been under since a storm forty years ago. Dive with me?" },
      { n: "Solar looked at the water. Gray-green, choppy, the sun on it in broken pieces. And something happened to her that she had no explanation for at all. Her legs went heavy and cold from the knees down. Her hands found the rail on their own and held it. Her breath went high and short in her chest, and she was standing a full meter back from the edge of the dock and she didn't remember stepping back." },
      { n: "She'd been in Tartarus. She'd faced things made of hands and masks and teeth. She'd been on Moonlight Bridge in the green with something enormous coming down the cable. She had never been as frightened in her life as she was, right now, of a harbor on a sunny afternoon." },
      { s: 'judy', f: 'surprised', t: "...Hey. Hey. Solar. You okay? You went white. Like, paper white." },
      { choose: [
        { t: "I don't know why. I'm scared of the water.", notes: 3, then: [
          { s: 'judy', f: 'neutral', t: "Okay. Okay, that's okay. Lotta people are. You don't have to go in." },
          { s: 'solar', f: 'neutral', t: "I don't even know if I can swim." },
          { s: 'judy', f: 'neutral', t: "Then you definitely don't have to go in." }
        ] },
        { t: "I'm fine. Show me how.", notes: 1, then: [
          { s: 'judy', f: 'serious', t: "Nope. You're not. I edit people's feelings for a living, choom. I know what fine looks like. That's not it." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "Here. New plan. You hold the line. There's a rope on my belt, it comes up to the dock. Two tugs, I'm okay. Three tugs, pull. That's it. That's the whole job. You're my lifeline. Most important job on any dive." },
      { choose: [
        { t: "(Hold the line.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "Solar held the line. Judy went over the side backwards, with a thumbs-up, and was gone, and the rope went down into the gray-green after her and kept going, and Solar sat on the dock with it wrapped twice around her wrist and both hands on it and watched the place where it went under like she was watching a fuse." },
          { n: "Two tugs. Two tugs. Two tugs. Every minute, regular as a heartbeat, from somewhere far down where Solar couldn't see. She counted every one. She was always counting. For once she knew exactly why." }
        ] },
        { t: "(Hold her hand and go in, just to the first rung.)", notes: 2, then: [
          { n: "She went down the ladder as far as the first rung under the surface, with Judy's hand in hers and Judy treading water beside her, and the cold came up through her shoes and her ankles and her shins, and she held on to the ladder so hard her knuckles went white, and stayed there, one rung, for a full minute, while Judy talked to her about absolutely nothing in a very calm voice." },
          { s: 'judy', f: 'happy', t: "One rung. That's a whole dive, for you. That counts. I'm logging it." },
          { n: "Then Solar climbed out, shaking, and took the line, and Judy went down alone." }
        ] }
      ] },
      { n: "She came up twenty minutes later with her mask pushed up and her face doing something Solar hadn't seen it do before. She climbed onto the dock and lay down flat on her back on the hot boards in the sun, dripping, and didn't take the gear off, and didn't say anything for a while." },
      { s: 'judy', f: 'neutral', t: "There's an old bicycle down there. On the pier. Half buried. Some kid's. Forty years under." },
      { s: 'judy', f: 'neutral', t: "...First time I've felt like myself since I got here. Since a long time before that, actually." },
      { s: 'judy', f: 'happy', t: "And every time I tugged, the rope tugged back. You didn't have to do that. That's not how lines work. You just did it." },
      { s: 'judy', f: 'neutral', t: "Thanks for holding the line, Solar." },
      { n: "Solar hadn't known she'd been tugging back. She looked down at her hands. There were red marks across both palms from the rope. She'd been holding it so hard. She'd been holding it the whole time like it was the only thing keeping someone out of the dark water, and she'd never, as far as she knew, held a rope like that before in her life, and her hands knew exactly how." }
    ] },

    { after: '11/7', title: '7: braindance', place: 'Iwatodai Dorm · Rooftop', time: 'The Dark Hour', scene: [
      { place: 'Iwatodai Dorm · Rooftop · The Dark Hour', time: 'The Dark Hour' },
      { dark: true },
      { music: 'mystery' },
      { n: "The rig was finished. Judy brought it up to the dorm roof at five to midnight in a gym bag, with Mitsuru's permission, which she had asked for, formally, by knocking on the fourth-floor door, which Mitsuru had appeared to find more alarming than a fight." },
      { s: 'judy', f: 'neutral', t: "I want to record this. The green. Nobody's ever recorded it. I want to feel it proper. Once. Before it goes." },
      { s: 'judy', f: 'neutral', t: "And I want you in it. Not as a background extra. As the main character. You're the one who lives here." },
      { choose: [
        { t: "Okay. What do I do?", notes: 3, then: [
          { s: 'judy', f: 'neutral', t: "Nothing. Just be here. Look at the sky. Feel whatever you feel. The rig'll catch it. Don't perform for it. It always knows." }
        ] },
        { t: "Why me?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "Because you're the realest thing in this whole fake-looking world. That's why. Everything else here looks like a set. You look like somebody who got lost on the way to one." }
        ] }
      ] },
      { n: "She put the helmet on Solar's head, careful, adjusting the straps, her fingers cold and quick at Solar's jaw. Then she stood back and switched it on, and the little light went green, and at the same moment the sky did too." },
      { n: "Solar looked up. The moon, sick and huge. The city below gone to coffins, every window dark. The cold weight of the Evoker on her hip. And everything she felt went into the helmet: the fear, and under the fear the strange calm, and under the calm something she could never name, a homesickness for nowhere, for three nowheres at once, a song she half knew and a smell of salt and a smell of cold campus grass and a smell of floor wax in a school that wasn't this one, all of it at once, all of it leaning on her, like three people standing very close in a crowd." },
      { n: "When the green faded, Judy took the helmet off her and slid out the tiny chip and put it into the playback slot on her own rig and put the rig on and sat down on the roof and closed her eyes." },
      { n: "She was quiet a long time. Then she took it off. She was looking at Solar very strangely." },
      { s: 'judy', f: 'neutral', t: "...That's the best BD I've ever made. And I didn't edit a single frame." },
      { s: 'judy', f: 'serious', t: "Solar. Can I tell you something weird? Tech weird?" },
      { s: 'judy', f: 'serious', t: "When you record somebody, there's one emotional track. One person. One set of feelings. That's how heads work. I've recorded a hundred people." },
      { s: 'judy', f: 'serious', t: "Yours has three. Three tracks. Layered, all running at once, slightly out of sync. Like three people feeling the same thing in three different rooms. I've never seen that. I didn't know it was possible." },
      { choose: [
        { t: "...That sounds right.", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "That SOUNDS right? Choom, that sounds insane." },
          { s: 'solar', f: 'neutral', t: "I know. It still sounds right." },
          { n: "Judy looked at her for a long time. Then she didn't ask anything else. She just held out the chip, between two fingers, the way you'd hand someone a key." },
          { s: 'judy', f: 'neutral', t: "Then it's yours. All three of you. Don't let anybody edit it." }
        ] },
        { t: "Maybe the rig's broken.", notes: 1, then: [
          { s: 'judy', f: 'serious', t: "My rigs don't break. I've tested it on a cat. The cat had one track. Very simple track. Mostly lunch." }
        ] },
        { t: "Which one was loudest?", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "None of them. That's the thing. They kept trading. Like none of them wanted to be first. Like they were being polite to each other." },
          { s: 'judy', f: 'neutral', t: "...And there was a fourth thing, maybe. Way down. Real quiet. Scared. I couldn't get it to resolve. Probably interference." }
        ] }
      ] }
    ] },

    { after: '11/21', title: '8: where to fight from', place: 'Port Island · Junkyard', time: 'Evening', scene: [
      { place: 'Port Island · Junkyard', time: 'Evening', bg: 'junkyard-scene' },
      { music: 'tender' },
      { n: "The end of November. The junkyard was cold, and Judy had a space heater running off the battery of the wheelless car, glowing orange on the ground between two oil drums, and the cat sitting so close to it Solar was worried for his whiskers." },
      { s: 'judy', f: 'neutral', t: "Elizabeth came by. Lady with the book. She talked to the cat for ten minutes first. He liked her. He doesn't like anybody." },
      { s: 'judy', f: 'neutral', t: "She said the green's gonna close. End of January. Doors open, everybody goes home." },
      { s: 'judy', f: 'sad', t: "Back home there's so much to fix. The Mox. The girls at Clouds. All the people the corps chew up and spit out and make BDs of. Somebody's gotta stand between them and that. That was supposed to be Ev and me. Now it's just me." },
      { s: 'judy', f: 'sad', t: "And part of me just wants to stay here. In a junkyard. With a cat. Where nobody needs me to be anything. Where it's never gonna be the night I have to choose." },
      { s: 'judy', f: 'sad', t: "Is that giving up? Is that what giving up feels like? Because it feels kinda nice." },
      { choose: [
        { t: "Leaving isn't giving up. It's choosing where to fight from.", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "...Choosing where to fight from. Huh." },
          { n: "She sat with that for a long time. The space heater ticked. The cat climbed off the warm patch and into her lap, which he had never once done, and turned around twice, and lay down, and she looked at him as though he'd delivered a message." }
        ] },
        { t: "You can want to rest. That's allowed.", notes: 3, then: [
          { s: 'judy', f: 'sad', t: "...Nobody's ever told me that. Not once. In my whole life." },
          { s: 'judy', f: 'neutral', t: "You're real good at this, you know. Saying the thing I need to hear. It's kind of annoying. In a good way." }
        ] },
        { t: "It feels nice because it's a trap.", notes: 2, then: [
          { s: 'judy', f: 'neutral', t: "...Yeah. I know. I've seen the train too. Out on the bridge. All those lit-up windows, people sleeping in them, real peaceful." },
          { s: 'judy', f: 'serious', t: "I'm not getting on a train. I'm just saying I get why people do." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "Panam's going back to the Badlands. She says come with her. Leave Night City. Start over somewhere with sky in it. I always said that's what I wanted. Somewhere new." },
      { s: 'judy', f: 'neutral', t: "But I think I'm gonna stay in the city a little while longer first. Fix one thing. One. For Ev. And then go. On my terms. Not running. Driving." },
      { choose: [
        { t: "That sounds like a plan.", notes: 2, then: [
          { s: 'judy', f: 'happy', t: "It's a terrible plan. It's the first one I've had in a year. I'm keeping it." }
        ] },
        { t: "Panam will wait.", notes: 3, then: [
          { s: 'judy', f: 'neutral', t: "Yeah. She will. She'll complain the whole time. She'll be under a car." },
          { s: 'judy', f: 'happy', t: "...She'll keep the passenger seat clear, though. She always does." }
        ] }
      ] },
      { n: "They sat by the heater until it got too cold even for that, and when Solar got up to go, Judy caught her wrist, lightly, and held it a second, and let it go, and didn't say what that was, and Solar didn't ask, and walked home through the port with her wrist warm in the cold like she'd held it to the heater." }
    ] },

    { after: '12/5', title: '9: hey you', place: 'Paulownia Mall · Club Escapade', time: 'Evening', scene: [
      { music: 'night' },
      { n: "Club Escapade, after closing. The jukebox still playing Judy's twelve songs, low. The lights dimmed down to the one blue strip over the bar. Judy behind it, where she didn't work, with two glasses of something she'd mixed herself that was mostly juice and a little bit of something that was also juice, she swore, she'd checked the label." },
      { s: 'judy', f: 'neutral', t: "First, though. Drink. It's a toast. I'm toasting the jukebox. It's the only machine in this city that's never once let me down." },
      { choose: [
        { t: "To the jukebox.", notes: 3, then: [
          { n: "They clinked glasses. The jukebox, as if it had heard, skipped to the next song on its own, the angry woman with the guitars like broken glass, the first one Judy had ever made it play, and Judy laughed and pointed at it like it had proved something." }
        ] },
        { t: "And to whoever fixed it.", notes: 3, then: [
          { s: 'judy', f: 'flustered', t: "...Okay, smooth. That was smooth. Drink your juice." }
        ] },
        { t: "Is this actually juice?", notes: 1, then: [
          { s: 'judy', f: 'serious', t: "It's juice. I swear on the cat. Mitsuru would kill me. She'd do it politely." }
        ] }
      ] },
      { n: "The club was very quiet between songs. The kind of quiet where you can hear the ice settle in a glass and the fridge behind the bar and the person beside you deciding to say something." },
      { s: 'judy', f: 'neutral', t: "Okay. I'm gonna say something. I'm bad at saying things that aren't about wiring. So you gotta let me finish. No talking. Not even with your face." },
      { s: 'judy', f: 'sad', t: "Since Ev, I haven't let anybody close. It was easier. Safer. You can't lose what you don't hold on to. I had a whole system. It was a good system. Real efficient." },
      { s: 'judy', f: 'neutral', t: "And then this girl walks up to a jukebox I'm taking apart and tells me it's all real. And then she holds the line. And then she tugs back." },
      { s: 'judy', f: 'neutral', t: "So. Solar. What is this, choom? Because I need to know before I go home. I'm not leaving a dimension with something unlabeled." },
      { route: [
        { t: "I'm falling for you, Judy.", route: 'romance', notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "...Yeah?" },
          { s: 'judy', f: 'flustered', t: "Okay. Okay. Me too. Since the jukebox, honestly. Since \"it's real.\" I thought, oh no. Oh no, she's gonna be a problem." },
          { n: "She came around the end of the bar. She stood in front of Solar for a second with her hands at her sides, like somebody about to take a dive off a high board, checking the water one last time. Then she took Solar's face in both oily hands and kissed her, once, quick and careful, in the empty club, with the jukebox playing something soft from another world." },
          { s: 'judy', f: 'happy', t: "...Hey you." }
        ] },
        { t: "You're my best friend. My best choom.", route: 'friend', notes: 3, then: [
          { s: 'judy', f: 'neutral', t: "...Best choom." },
          { s: 'judy', f: 'happy', t: "Yeah. Yeah, I like that. That's a real label. That's a label I can print." },
          { n: "She pushed one of the drinks across the bar and clinked her own glass against it, hard enough to slop, and grinned with one side of her mouth, and her eyes were wet, and she didn't seem to mind." },
          { s: 'judy', f: 'happy', t: "To best chooms. In every dimension. Including the dumb ones with flip phones." }
        ] }
      ] },
      { n: "They stayed at the bar until the owner came in at two to lock up and found them there, and looked at them, and looked at the jukebox, and said only that the jukebox had never sounded better, and left them the key." }
    ] },

    { after: '12/26', title: '10: somewhere new', place: 'Port Island · Junkyard', time: 'Evening', scene: [
      { place: 'Port Island · Junkyard', time: 'Evening', bg: 'junkyard-scene' },
      { music: 'tender' },
      { n: "The week after Christmas. Snow in the junkyard, on the rusted cars and the old workbench and the door that was a table and the oil drums, a thin clean layer over everything that made the whole place look, for one evening, like somewhere somebody might have chosen to be. The cat had a sweater. Judy had knitted it. It was very bad. He wore it with contempt." },
      { n: "Judy was waiting by the workbench with something in her hand. A chip. The BD chip from the roof, from the green. And a second one, newer, labeled in her tiny careful capitals: ONE YEAR. NO EDITS." },
      { s: 'judy', f: 'neutral', t: "I've been recording. Little bits. Whenever you weren't looking. The arcade. The dive, from the dock. The junkyard. Game night at the dorm. You eating ramen. Panam yelling at the car. The roof." },
      { s: 'judy', f: 'neutral', t: "It's everything. This whole year. So you can step back inside it whenever you want. Feel it exactly like it was. And so can I. I made two." },
      { choose: [
        { t: "You made something that makes people feel less alone.", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "..." },
          { s: 'judy', f: 'happy', t: "...Yeah. I did. That's the dream. Took me a whole other universe to figure out how. Turns out you just point the camera at somebody you love and don't cut anything." }
        ] },
        { t: "I'll watch it every time I miss you.", notes: 3, then: [
          { s: 'judy', f: 'happy', t: "So, like, every day. Good. That's the right answer." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "I'm going home. I'm gonna fix one thing for Ev. And then I'm gonna get in Panam's car and drive out of that city with the windows down. Not running. Going." },
      { s: 'judy', f: 'neutral', t: "Back home I always said I wanted to leave. Go somewhere new. Start over with somebody." },
      { ifRoute: 'romance', then: [
        { s: 'judy', f: 'happy', t: "Turns out somewhere new was a junkyard in a city that doesn't exist. And somebody was you." },
        { choose: [
          { t: "Wherever you go, I'm in that chip.", notes: 3, then: [
            { s: 'judy', f: 'neutral', t: "...Yeah. You are. Every frame." },
            { n: "She kissed her in the snow, under the work light, with the flakes coming down through the yellow beam, and the cat in his terrible sweater yowled at them, deeply offended, from the roof of the dead sedan, and they both started laughing in the middle of it and couldn't stop." },
            { s: 'judy', f: 'happy', t: "...Recording that one too. Don't care. Making it the last frame." }
          ] },
          { t: "(Take her hand. Don't say anything.)", notes: 3, then: [
            { n: "Solar took her hand. Oily, cold, a burn scar across the knuckle from a soldering iron. Judy laced their fingers together and held on and looked at the snow, and didn't say anything either, and it was the most either of them had ever said." }
          ] }
        ] }
      ], else: [
        { s: 'judy', f: 'happy', t: "Turns out somewhere new was a junkyard in a city that doesn't exist. And the somebody was my best choom. Who knew." },
        { choose: [
          { t: "Wherever you go, I'm in that chip.", notes: 3, then: [
            { s: 'judy', f: 'neutral', t: "Every frame, choom. Even the ones where you're eating." },
            { n: "She hugged her, hard, in the snow, one arm, the other hand still holding the chips up out of the wet as if they were the most precious things in the junkyard, which they were, and the cat yowled at them from the roof of the sedan, offended in his terrible sweater, and they both started laughing and couldn't stop." }
          ] },
          { t: "Panam better let you drive.", notes: 2, then: [
            { s: 'judy', f: 'happy', t: "Panam's never let anybody drive. I'm gonna make her. I'm gonna say my best choom said I could. She'll be so mad." }
          ] }
        ] }
      ] },
      { n: "When she put the chip in Solar's hand, she closed Solar's fingers over it with both of hers, and held them closed, a long time, the way you'd hold someone's hand over a wound to keep the pressure on." }
    ] }
  ],
  afterMax: [
    { title: 'no retakes', place: 'Paulownia Mall · Club Escapade', scene: [
      { music: 'night' },
      { n: "Judy had rigged the club's old karaoke machine to the jukebox to the light board, so that when you sang, the lights did whatever your voice did, and she wanted to test it, and she wasn't going to sing, obviously, so." },
      { s: 'judy', f: 'happy', t: "One song. No retakes. Whatever you sing, it's in the system forever. That's the rule of the booth." },
      { choose: [
        { t: "(Sing. Properly.)", notes: 3, then: [
          { n: "Solar sang. She didn't mean to sing properly. It came out of her properly anyway, from somewhere low down and old, a voice she didn't use, trained once, by someone, and the lights went gold and stayed gold and swelled, and Judy stood at the board with her hand over her mouth, and when it was over the empty club was so quiet Solar could hear the jukebox fan." },
          { s: 'judy', f: 'surprised', t: "...Choom. Where did THAT come from." },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { s: 'judy', f: 'neutral', t: "Okay. Okay. I'm not editing it. That's in the year chip. Uncut." }
        ] },
        { t: "(Sing badly on purpose.)", notes: 2, then: [
          { n: "Solar sang so badly the lights strobed red like an alarm, and Judy laughed so hard she sat down on the floor behind the board, and the cat, from his box, put his one ear flat." }
        ] }
      ] }
    ] },
    { title: 'thirty kilometers', place: 'Port Island · Harbor', scene: [
      { music: 'tender' },
      { n: "Panam had left the car with Judy, technically, for safekeeping, and Judy had decided safekeeping included driving it thirty kilometers down the coast road at midnight with the windows down and Solar in the passenger seat, because Panam had said the passenger seat was for people who mattered, and Judy said that meant Solar, and didn't elaborate." },
      { s: 'judy', f: 'neutral', t: "This is what I'm gonna do. When I'm home. When I've fixed the one thing. Just this. Drive until there's sky." },
      { choose: [
        { t: "(Put your hand out the window into the wind.)", notes: 3, then: [
          { n: "Solar put her hand out of the window into the cold rushing dark, flat, and let it ride up and down on the wind like a wing, the way children do, and Judy looked over and laughed and did it too, one hand on the wheel and one out in the night, and neither of them said anything for thirty kilometers." }
        ] },
        { t: "Bring the cat.", notes: 2, then: [
          { s: 'judy', f: 'happy', t: "Obviously I'm bringing the cat. He's coming to Night City. He'll run the place in a week." }
        ] }
      ] }
    ] }
  ],
  // Christmas Eve (engine need: romance route at MAX on 12/24). Romantic beats sit inside ifRoute so a friend-route play still holds.
  christmas: { place: 'Paulownia Mall · Club Escapade', time: 'Evening', scene: [
    { music: 'date' },
    { phone: [
      { from: 'judy', t: "hey you. escapade's closed for xmas. i have the key" },
      { from: 'judy', t: "i built u something. its dumb. come see it before i lose my nerve" }
    ], contact: 'Judy' },
    { n: "It had started snowing at dusk, the real kind, and the mall was all lights and couples and the same three carols on a loop from the speakers by the escalators, and Club Escapade's shutter was down with a hand-lettered sign taped to it that said CLOSED FOR THE HOLIDAY, GO HOME, LOVE YOU, and the shutter came up exactly far enough for one person to duck under when Solar knocked." },
    { n: "Inside it was dark except for the jukebox. Judy had wired something into the ceiling. Hundreds of tiny white lights, strung across the whole dance floor on fishing line, and when the jukebox played, they moved, slowly, one at a time, like snow falling up." },
    { s: 'judy', f: 'flustered', t: "It's dumb. I told you. It's indoor snow. I didn't know if it'd snow out there so I made a backup." },
    { choose: [
      { t: "It's not dumb. It's beautiful.", notes: 3, then: [
        { s: 'judy', f: 'happy', t: "...Yeah? Okay. Good. It took four days and I electrocuted myself twice. Merry Christmas." }
      ] },
      { t: "It's snowing outside, though.", notes: 2, then: [
        { s: 'judy', f: 'neutral', t: "I KNOW. I saw. On the way back from buying more fishing line. I stood in the street and swore at the sky for like a minute." }
      ] }
    ] },
    { n: "She'd brought food. Convenience store fried chicken in a bucket and a cake from the bakery by the station with a strawberry on top, and they ate it on the edge of the stage with their feet hanging over the dance floor and the lights falling up all around them, and the jukebox played all twelve of Judy's songs, twice, and somewhere in the second time round Judy stopped talking about wiring." },
    { s: 'judy', f: 'neutral', t: "Last Christmas I spent in the workshop. Alone. Editing. I didn't even notice it was Christmas till the guy downstairs knocked to give me a beer." },
    { ifRoute: 'romance', then: [
      { s: 'judy', f: 'neutral', t: "This one I noticed. This one I'm gonna notice for the rest of my life." },
      { choose: [
        { t: "(Lean your head on her shoulder.)", notes: 3, then: [
          { n: "Solar leaned her head on her shoulder. Judy went still, and then put her cheek against Solar's hair, and they sat like that on the edge of the stage while the lights went up and up around them, and Judy said, very quietly, into her hair, \"hey you,\" like it was the whole sentence, like it always had been." }
        ] },
        { t: "Merry Christmas, Judy.", notes: 3, then: [
          { n: "Judy turned and kissed her, softly, tasting of strawberries and fried chicken, which she said afterward was the least romantic combination in any dimension, and did it again anyway." }
        ] }
      ] }
    ], else: [
      { s: 'judy', f: 'happy', t: "This one I noticed. Best choom Christmas. Gonna be hard to beat. I'll have to build something bigger next year in another universe." },
      { choose: [
        { t: "(Clink your soda can against hers.)", notes: 3, then: [
          { n: "They clinked cans. The lights went on falling up. Judy leaned her shoulder against Solar's and left it there, and they watched her indoor snow until the jukebox ran out of songs." }
        ] },
        { t: "Merry Christmas, choom.", notes: 3, then: [
          { s: 'judy', f: 'happy', t: "Merry Christmas, choom. Don't tell anybody I cried at a jukebox." }
        ] }
      ] }
    ] }
  ] }
});
