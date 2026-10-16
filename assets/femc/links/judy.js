/* Judy Alvarez · XI Justice. Arrives on the 8/6 full moon. Evenings. Format notes are at the top of akihiko.js.
   Evelyn's story is handled carefully and without detail. */
FemcSocial.define({
  id: 'judy', name: 'Judy Alvarez', short: 'Judy', arcana: 'Justice', numeral: 'XI', from: 'Cyberpunk 2077',
  arrives: '8/6',
  home: { place: 'Paulownia Mall · Club Escapade', slot: 1, days: [3, 5, 6], hint: 'Evenings on Wednesdays, Fridays and Saturdays, at Club Escapade.' },
  approach: "A woman with dyed hair and a toolkit is half inside the club's sound system, swearing at it under her breath.",
  invite: {
    ask: ["hey. you free? could use a hand", "wanna hang? got somethin cool to show you", "come by? i'm bored outta my skull", "escapade's dead tonight. come keep me company?", "jukebox is actin up again. wanna watch me yell at it", "need a second pair of hands. steady ones", "choom. u free? its a preem night for doin nothin", "got two drinks n nobody for the second one. its juice. u in?"],
    ok: ["nice. see ya in a bit", "preem. i'll be by the jukebox", "hell yeah. door's open. kinda"],
    no: ["no prob. another time", "all good choom. rain check", "np. i'll bug u tomorrow then"]
  },
  hangouts: [
    [
      { n: "Club Escapade on a slow night, half the tables empty, the bass turned down to something you only felt in your knees. Judy was up a ladder behind the DJ booth with a screwdriver in her teeth, and the strobe over the dance floor was blinking about half a second behind the music, which was apparently a crime." },
      { s: 'judy', f: 'serious', t: "Choom. Get on the floor. Tell me when it hits on the beat. Can't see it from up here." },
      { choose: [
        { t: "(Dance, badly, for science.)", notes: 3, then: [
          { n: "Solar danced. It was not good dancing. Two salarymen at the bar applauded anyway. Up on the ladder, Judy laughed so hard she had to grab the rail, and the screwdriver fell out of her mouth." },
          { s: 'judy', f: 'happy', t: "Okay. Okay, that's on the beat. Or you are. Can't tell. Keep going." }
        ] },
        { t: "Now. It's on the beat now.", notes: 2, then: [{ s: 'judy', f: 'happy', t: "Preem. Locking it in." }] },
        { t: "My eyes hurt.", notes: 1, then: [{ s: 'judy', f: 'neutral', t: "Yeah, that's strobes. That's kinda the whole point of 'em." }] }
      ] },
      { n: "When she climbed down, the light pulsed in perfect time over an empty floor, and she stood under it with her arms crossed and watched it for a full minute, satisfied, the way other people watched sunsets." }
    ],
    [
      { n: "Judy had bought a phone from a pawn shop on the strip, a scratched silver flip phone a few years old, and she'd opened it up on the bar like a frog in biology class, its tiny guts laid out on a napkin." },
      { s: 'judy', f: 'surprised', t: "There's nothing in here. Like, nothing. Where's the rest of it? How does this thing even know where you are?" },
      { choose: [
        { t: "Can you make it better?", notes: 3, then: [
          { s: 'judy', f: 'happy', t: "Can I. Choom. Gimme a week and this thing'll make toast." },
          { n: "She started immediately, rewiring something with a pair of tweezers and a concentration so total that the bartender set a glass of water by her elbow and she drank the whole thing without noticing it was there." }
        ] },
        { t: "It doesn't. That's kind of nice.", notes: 2, then: [{ s: 'judy', f: 'neutral', t: "...Huh. Back home everything knows where you are. Never thought of not bein' findable as a feature." }] },
        { t: "That's a pretty new phone, actually.", notes: 1, then: [{ s: 'judy', f: 'surprised', t: "This is NEW? Oh, you poor things." }] }
      ] },
      { n: "By closing time she'd put it back together, and when she flipped it open it played the first three seconds of one of her twelve jukebox songs, tinny and furious, and then crashed. She called it a win." }
    ],
    [
      { n: "Late, the club winding down, and Judy was sitting on the edge of the stage with her boots swinging and a glass of something orange, watching the last few dancers the way she watched everything, like she was framing a shot." },
      { s: 'judy', f: 'neutral', t: "Occupational hazard. Every time something's good, I think, I could record that. Cut the boring bits. Keep it forever." },
      { s: 'judy', f: 'neutral', t: "So. You. One moment you could step back into whenever you want. What's the one?" },
      { choose: [
        { t: "Ramen on a rainy night. Hot bowl, cold hands.", notes: 3, then: [
          { s: 'judy', f: 'happy', t: "Ohh. Yeah. That's a good one. That's sensory. That's real. You'd make a decent editor." },
          { n: "She closed her eyes for a second like she was trying it on. Then she opened them and announced that she was starving now, and that it was Solar's fault." }
        ] },
        { t: "I'd rather not keep it. I'd rather it just happen.", notes: 2, then: [{ s: 'judy', f: 'neutral', t: "...Huh. A purist. Can't argue with that. Some stuff's better raw." }] },
        { t: "Junpei falling off the couch last week.", notes: 2, then: [{ s: 'judy', f: 'happy', t: "Ha! Okay, that's a comedy BD. I'd watch it. I'd watch it twice." }] }
      ] },
      { n: "The jukebox rolled over to one of her songs, and she set her glass down and tapped the beat out on the edge of the stage and didn't say anything else for a while, which, with Judy, meant she was having a good time." }
    ],
    [
      { n: "Judy had never had a Japanese convenience-store snack, which Solar found out by accident and could not, in good conscience, leave alone. She came back from the konbini with a plastic bag full of them and tipped it out across the bar like a heist haul." },
      { s: 'judy', f: 'happy', t: "Okay. Okay. Walk me through it. What's first?" },
      { choose: [
        { t: "(Hand her a melon pan.)", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "...Where's the melon? There's no melon. Why's it so good if there's no melon?" },
          { n: "She ate it in five bites and then looked at the empty wrapper with deep suspicion, like it had lied to her and she respected it for that." }
        ] },
        { t: "(Hand her the wasabi peas.)", notes: 2, then: [
          { s: 'judy', f: 'surprised', t: "Oh, that's... oh, that's in my nose. That's IN my NOSE." },
          { s: 'judy', f: 'happy', t: "...Gimme another one." }
        ] },
        { t: "(Hand her a rice ball, wrapper and all.)", notes: 1, then: [{ s: 'judy', f: 'serious', t: "How do I open this? There's numbers on it. Why are there numbers. Solar. SOLAR." }] }
      ] },
      { n: "By the end of the night there was a ranking on a napkin in her messy capitals, wasabi peas at the top, the rice ball at the bottom with a note that said GOOD. HOSTILE PACKAGING. She folded it up and put it in the chest pocket of her overalls like a schematic." }
    ],
    [
      { n: "A Friday, the club packed, too loud to talk unless you leaned in. Judy had found the one quiet spot, a booth by the fire exit where the speakers didn't reach, and she was people-watching with the focus of someone reading a circuit diagram." },
      { s: 'judy', f: 'neutral', t: "Game. Pick somebody. Gimme their whole story. Editor's rules: no boring bits." },
      { n: "She nodded at a salaryman alone at the end of the bar, tie loosened, nursing a beer like it was the last one in the world." },
      { choose: [
        { t: "Retired assassin. That's his first beer in thirty years.", notes: 3, then: [
          { s: 'judy', f: 'happy', t: "YES. And the bartender's his old handler. Look at 'em. They haven't made eye contact once. That's on purpose." },
          { n: "It went on for an hour. By the end, half the club had secret identities, the DJ was a defector from a rival club, and the salaryman was still at the bar, entirely unaware that he was the hero of a three-act thriller." }
        ] },
        { t: "He just got dumped. He's working up to calling her.", notes: 2, then: [{ s: 'judy', f: 'neutral', t: "Oof. Yeah. Look at him check that phone. You're cold, choom. Accurate. But cold." }] },
        { t: "He's just tired.", notes: 1, then: [{ s: 'judy', f: 'neutral', t: "Boo. Too real. That's a documentary. Nobody watches documentaries." }] }
      ] },
      { n: "When they finally left, Judy saluted the salaryman on the way past, two fingers off her brow, very solemn. He looked deeply confused, and saluted back." }
    ]
  ],
  romance: true,
  cast: { mitsuru: 'Mitsuru', evelyn: 'Evelyn', panam: 'Panam' },
  threads: { nomads: { name: 'nomad net 🤘', members: ['judy', 'panam'] } },
  texts: [
    { id: 'judy-1a', rank: 1, days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'hey choom. its judy' },
      { from: 'judy', t: 'still not 100% convinced ur not an npc' },
      { from: 'judy', t: 'but ur the most interesting npc i ever met so' }
    ], reply: [
      { t: "I'm extremely real.", notes: 3, then: [{ from: 'judy', t: 'thats what a well written npc would say' }, { from: 'judy', t: 'jk. mostly' }] },
      { t: 'What does choom mean?', notes: 2, then: [{ from: 'judy', t: 'friend. buddy. pal' }, { from: 'judy', t: 'u in the circle now' }] }
    ] },
    { id: 'judy-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'rig works. kinda. tested it on a cat' },
      { from: 'judy', t: 'the cat was fine. i was not. cat dreams are WEIRD' }
    ], reply: [
      { t: 'What do cats dream about?', notes: 3, then: [{ from: 'judy', t: 'fish. revenge. more fish' }] },
      { t: 'Please do not test it on me.', notes: 2, then: [{ from: 'judy', t: 'no promises. ur dreams would be preem' }] }
    ] },
    { id: 'judy-3a', rank: 3, days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'ok so ur ice queen friend isnt as bad as i thought' },
      { from: 'judy', t: 'still a corpo tho' },
      { from: 'judy', t: 'a corpo with a conscience. thats new' }
    ], reply: [
      { t: "Mitsuru's one of the best people I know.", notes: 3, then: [{ from: 'judy', t: 'yeah. i can see that. dont tell her i said so' }] },
      { t: 'Give her a chance.', notes: 2, then: [{ from: 'judy', t: 'giving her one. ONE' }] }
    ] },
    { id: 'judy-4a', rank: 4, days: 1, slot: 1, msgs: [
      { from: 'judy', t: "thanks for not saying anything stupid tonight" },
      { from: 'judy', t: "about ev. most people say something stupid" }
    ], reply: [
      { t: "I'm here whenever you want to talk about her.", notes: 3, then: [{ from: 'judy', t: '...yeah. ok. maybe sometime' }] },
      { t: "She sounds like she was amazing.", notes: 3, then: [{ from: 'judy', t: 'she was. she really was' }] }
    ] },
    { id: 'judy-5a', rank: 5, days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'panam says ur "alright"' },
      { from: 'judy', t: 'from panam thats basically a marriage proposal' }
    ], reply: [
      { t: 'Tell her I said she\'s alright too.', notes: 3, then: [{ from: 'judy', t: 'lol she already faded. ill tell her in my dreams' }] },
      { t: 'She drives terrifyingly.', notes: 2, then: [{ from: 'judy', t: 'thats how u know she likes u. she drives faster' }] }
    ] },
    { id: 'nomads-5', thread: 'nomads', rank: 5, before: 8, days: 2, slot: 1, msgs: [
      { sys: 'Judy added you to "nomad net 🤘"' },
      { from: 'judy', t: 'ok it WORKS' },
      { from: 'judy', t: 'rigged a relay off panams car radio. dont ask how. its mostly gum' },
      { from: 'panam', t: 'Judy. Why is my radio beeping at me.' },
      { from: 'judy', t: 'its not beeping its TEXTING' },
      { from: 'panam', t: 'It beeps every time while I drive.' },
      { from: 'judy', t: 'so stop driving' },
      { from: 'panam', t: 'No.' },
      { from: 'panam', t: 'Is the girl from the junkyard in here.' },
      { ask: [
        { t: "Hi, Panam. How's the axle?", notes: 3, then: [
          { from: 'panam', t: 'Holding. Because you tightened the bolt Judy forgot.' },
          { from: 'judy', t: 'i did NOT forget it' },
          { from: 'panam', t: 'You forgot it.' }
        ] },
        { t: "I'm here. My hands still hurt from that drive.", notes: 2, then: [
          { from: 'panam', t: 'That was me going slow.' },
          { from: 'judy', t: 'she was NOT goin slow' },
          { from: 'judy', t: 'i saw god on the second curve' }
        ] },
        { t: 'Hi. Please only text while parked.', notes: 1, then: [
          { from: 'panam', t: 'I always text while parked.' },
          { from: 'panam', t: 'Except now.' }
        ] }
      ] },
      { from: 'panam', t: 'Good. I have a job for you.' },
      { from: 'panam', t: 'Report. Is she eating.' },
      { from: 'judy', t: 'panam' },
      { from: 'panam', t: 'Is she sleeping.' },
      { from: 'judy', t: 'PANAM' },
      { from: 'judy', t: 'im a grown woman. i have a fridge. kinda' },
      { ask: [
        { t: 'She ate a whole melon pan yesterday.', notes: 3, then: [
          { from: 'panam', t: 'What is a melon pan.' },
          { from: 'judy', t: 'bread. but sweet. and theres no melon in it' },
          { from: 'panam', t: 'This world is insane.' },
          { from: 'panam', t: 'Good. Keep feeding her.' }
        ] },
        { t: 'She lives on vending machine coffee.', notes: 2, then: [
          { from: 'panam', t: 'Thought so.' },
          { from: 'judy', t: 'SNITCH' },
          { from: 'judy', t: 'u get ONE snitch. that was it' }
        ] },
        { t: "I'm not a spy, Panam.", notes: 1, then: [
          { from: 'panam', t: 'Everyone is a spy. Some are just bad at it.' }
        ] }
      ] },
      { sys: 'Panam renamed the group "aldecaldos (honorary)"' },
      { from: 'judy', t: 'HONORARY?? we fixed ur AXLE' },
      { from: 'panam', t: 'That is why you are honorary. Otherwise you would be nothing.' },
      { from: 'panam', t: 'Solar. Pick a song. My radio plays whatever your phone sends it now. Judy built it wrong.' },
      { from: 'judy', t: 'i built it PERFECT' },
      { ask: [
        { t: 'Something loud and angry.', notes: 3, then: [
          { from: 'judy', t: 'THATS MY CHOOM. sendin one of my twelve' },
          { from: 'panam', t: 'Fine.' },
          { from: 'panam', t: '...This is good. Do not tell her I said it.' },
          { from: 'judy', t: 'im IN the CHAT' }
        ] },
        { t: 'Whatever your people sing around the fire.', notes: 2, then: [
          { from: 'panam', t: '...' },
          { from: 'panam', t: 'You remember that.' },
          { from: 'panam', t: 'Alright. Alright.' }
        ] },
        { t: 'Something calm. For the road.', notes: 1, then: [
          { from: 'panam', t: 'Calm is for people who are not driving.' },
          { from: 'judy', t: 'lol' }
        ] }
      ] },
      { from: 'panam', t: 'Going dark. Road gets rough here.' },
      { from: 'judy', t: 'drive safe. or at least drive' }
    ] },
    { id: 'judy-6a', rank: 6, days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'still feel like im underwater' },
      { from: 'judy', t: 'in a good way' },
      { from: 'judy', t: 'thanks for diving with me' }
    ], reply: [
      { t: "Let's go again next summer.", notes: 3, then: [{ from: 'judy', t: '...if i\'m still here. yeah. id like that' }] },
      { t: 'You looked happy down there.', notes: 3, then: [{ from: 'judy', t: 'i was. first time in a while' }] }
    ] },
    { id: 'judy-8a', rank: 8, days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'cant stop thinking about what u said' },
      { from: 'judy', t: 'that leaving isnt giving up. that its choosing somewhere to fight from' }
    ], reply: [
      { t: 'I meant it.', notes: 3, then: [{ from: 'judy', t: 'i know. thats what scares me' }] },
      { t: "You'll fight wherever you go.", notes: 3, then: [{ from: 'judy', t: 'yeah. i will. damn right i will' }] }
    ] },
    { id: 'judy-9r', rank: 9, route: 'romance', days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'hey. you' },
      { from: 'judy', t: 'just wanted to say it' },
      { from: 'judy', t: 'hey you' }
    ], reply: [
      { t: 'Hey you.', notes: 3, then: [{ from: 'judy', t: '💙' }] },
      { t: "Come over. I'll make tea.", notes: 3, then: [{ from: 'judy', t: 'on my way. bringing the rig. kidding. mostly' }] }
    ] },
    { id: 'judy-9f', rank: 9, route: 'friend', days: 1, slot: 1, msgs: [
      { from: 'judy', t: 'best choom' },
      { from: 'judy', t: 'official. i made a badge. its ugly. ur wearing it' }
    ], reply: [
      { t: 'I will wear the ugly badge.', notes: 3, then: [{ from: 'judy', t: 'thats the spirit' }] },
      { t: 'Best choom.', notes: 3, then: [{ from: 'judy', t: 'preem 🤘' }] }
    ] }
  ],
  ranks: [
    { after: '8/8', title: '1: npc', place: 'Paulownia Mall · Club Escapade', scene: [
      { n: "Club Escapade was the only real nightclub on Port Island, all strobe lights and bass you could feel in your teeth, and Solar was only there because Junpei had lost a bet and dragged half the dorm with him to make it less humiliating." },
      { n: "The woman at the end of the bar was taking apart the jukebox." },
      { n: "Not breaking it. Taking it apart, carefully, with a tiny screwdriver and a headlamp and total focus, the back panel off and propped against the wall, wires spilling out like guts. Undercut, dyed teal and pink at the ends. Tattoos down both arms. Orange work overalls over a black tank top. Nobody was stopping her. The bartender had apparently decided she worked there." },
      { n: "She looked up when Solar got close. Squinted. Tapped the side of her own head, like checking something." },
      { s: 'judy', f: 'surprised', t: "Huh. Your face is way too detailed for a background extra. Who wrote you?" },
      { choose: [
        { t: "Wrote me?", notes: 2, then: [{ s: 'judy', f: 'neutral', t: "Yeah. This is a braindance, right? Somebody's recording. Gotta be. Nothing's this weird in real life. Not even in Night City." }] },
        { t: "You're fixing the jukebox.", notes: 3, then: [
          { s: 'judy', f: 'serious', t: "Upgrading it. It was playing the same twelve songs. Criminal. Now it's going to play my twelve songs." },
          { n: "She said it with total seriousness. Solar decided she liked her immediately." }
        ] }
      ] },
      { s: 'judy', f: 'neutral', t: "Judy Alvarez. BD tech. Editor. I make memories into something you can step inside." },
      { s: 'judy', f: 'neutral', t: "Fell asleep in my workshop in Night City, woke up in a green nightmare full of coffins, and now I'm here. Gotta be a BD. Some gonk's idea of a horror flick." },
      { choose: [
        { t: "It's not a BD. It's real.", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: '...' },
          { s: 'judy', f: 'sad', t: "Yeah. Yeah, I was afraid you'd say that. Too many little details. The smell's wrong for a BD." },
          { n: "She looked around the club like it had betrayed her. Then she went back to the jukebox, faster, like having something to fix was the only thing holding her together." }
        ] },
        { t: "If it's a BD, what am I?", notes: 2, then: [{ s: 'judy', f: 'happy', t: "An NPC. A really good one. Better dialogue than most. I'd hire your writer." }] }
      ] },
      { n: "When she finished, the jukebox played something loud and angry and wonderful that nobody in Iwatodai had ever heard. Half the club went quiet. Then the other half started dancing. Judy leaned back against the bar and watched them with her arms crossed and something almost like a smile." }
    ] },

    { after: '8/22', title: '2: the rig', place: 'Iwatodai · Junkyard', scene: [
      { n: "There was a junkyard out past the port, behind a chain-link fence with a hole in it, and Judy had claimed it the way other people claimed a favorite café." },
      { n: "She'd built a workbench out of a door and two oil drums. On it was a tangle of salvaged circuit boards and old game console parts and a bicycle helmet with wires glued all over it." },
      { s: 'judy', f: 'happy', t: "Braindance rig. Or the start of one. Your tech here is ancient, choom. Like, fossil-level. I'm doing it with spit and stubbornness." },
      { choose: [
        { t: "Can I help?", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: "...Seriously? Okay. Hold this. Don't let it touch that." },
          { n: "She handed Solar a soldering iron and a circuit board and a lot of very fast instructions, and for three hours they worked side by side in the junkyard in the August heat, saying almost nothing, and it was one of the best afternoons Solar had had all summer." }
        ] },
        { t: "What does it do?", notes: 2, then: [{ s: 'judy', f: 'neutral', t: "Records what you feel. Not just what you see. Everything. And lets someone else feel it too. Like stepping into a memory." }] }
      ] },
      { s: 'judy', f: 'serious', t: "Back home, BDs are mostly garbage. Corpo propaganda and people getting hurt for views. I wanted to make something different. Something that made you feel less alone." },
      { n: "She said it fast, not looking up from the circuit board. Like she'd said it to herself so many times it had worn grooves." },
      { n: "When they finished, she tested it on the stray cat that lived in the junkyard. The cat was fine. Judy put the helmet on afterward and lay flat on the ground for ten minutes saying \"fish\" quietly, over and over." }
    ] },

    { after: '9/5', title: '3: corpo', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Judy had found out who owned the dorm." },
      { s: 'judy', f: 'serious', t: "Kirijo Group. KIRIJO. As in, the giant megacorp with its name on half the buildings in this city. You live in a CORPO dorm, choom." },
      { n: "She'd come straight to the lounge to say this, in her overalls, still holding a wrench, and was now standing in front of the couch where Mitsuru Kirijo was quietly reading, staring at her like she was a bomb." },
      { register: 'mitsuru' },
      { s: 'mitsuru', f: 'neutral', t: "...I'm aware of who owns the dorm. I'm the daughter of the man who owns it." },
      { s: 'judy', f: 'serious', t: "Oh, PERFECT." },
      { choose: [
        { t: "Judy, Mitsuru's not like that.", notes: 3, then: [{ s: 'judy', f: 'serious', t: "They're ALL like that. Every corpo kid I ever met thought they were the good one." }] },
        { t: "(Let them have it out.)", notes: 2, then: [{ n: "Solar sat down and let them have it out. It was a long conversation. It was a loud conversation, on one side." }] }
      ] },
      { s: 'mitsuru', f: 'sad', t: "You're not wrong to be suspicious. My family's company has done terrible things. Some of them are why this dorm exists. Why we fight." },
      { s: 'mitsuru', f: 'neutral', t: "I can't undo them. I can only try to make sure they're never done again. With what I have." },
      { n: "Judy stared at her for a long time. The wrench went down, slowly." },
      { s: 'judy', f: 'surprised', t: "...Huh. A corpo who admits it. That's new." },
      { s: 'judy', f: 'neutral', t: "Still don't trust you. But I'll watch. I'm good at watching." },
      { s: 'mitsuru', f: 'neutral', t: "That's fair. I'd expect nothing less." },
      { n: "They didn't shake hands. But the next week, when the dorm's ancient hot water heater broke, Judy fixed it for free, and Mitsuru left a thank-you note on her workbench in perfect handwriting. Judy kept it." }
    ] },

    { after: '9/19', title: '4: evelyn', music: 'tender', place: 'Iwatodai · Junkyard', scene: [
      { n: "Judy had been quiet all week. Not the focused quiet of building something. A heavier one. She'd stopped coming to Club Escapade. She'd stopped fixing things." },
      { n: "Solar found her at the junkyard at dusk, sitting on the hood of a rusted car with the BD helmet in her lap, not wearing it. Just holding it." },
      { s: 'judy', f: 'sad', t: "There was someone. Back home. Evelyn." },
      { register: 'evelyn' },
      { s: 'judy', f: 'sad', t: "Smart. Beautiful. Always three moves ahead. I'd have followed her anywhere." },
      { s: 'judy', f: 'sad', t: "Some people hurt her. Badly. And afterward she... she couldn't find her way back. And I couldn't reach her in time." },
      { n: "That was all she said about it. She didn't need to say more. Solar sat down on the hood of the rusted car beside her, close enough that their shoulders touched, and didn't ask a single question." },
      { choose: [
        { t: "(Stay quiet beside her.)", notes: 3, then: [
          { n: "They sat there until it was fully dark. The junkyard cat came and curled up in Judy's lap, on top of the helmet. She let it. She put her hand on its back and finally, very quietly, started to cry." }
        ] },
        { t: "I'm so sorry, Judy.", notes: 2, then: [{ s: 'judy', f: 'sad', t: "...Yeah. Me too. Every single day." }] }
      ] },
      { s: 'judy', f: 'neutral', t: "Thanks for not saying anything stupid. Most people say something stupid." },
      { n: "She put the helmet back on the workbench. She didn't build anything that night. But the next day she came back to Club Escapade, and the day after that she started on the rig again, and Solar decided that counted as something." }
    ] },

    { after: '10/3', title: '5: panam', music: 'sun', place: 'Port Island · Coastal Road', scene: [
      { n: "The car came through the green hour at a hundred and forty kilometers an hour, landed on the coastal road in a shower of sparks, spun twice, and stopped dead in front of the junkyard with its engine roaring." },
      { register: 'panam' },
      { n: "A woman climbed out. Long dark hair, nomad leathers, tattoos, and an expression of absolute fury, which changed instantly when she saw Judy." },
      { s: 'panam', t: "Judy? JUDY? What the hell are you doing in... wherever this is?" },
      { s: 'judy', f: 'happy', t: "Panam! Oh, thank god, a face I know!" },
      { n: "Panam Palmer, it turned out, had been driving across the Badlands at night and had driven straight into a wall of green light. She was extremely annoyed about it. She was even more annoyed that her car had a cracked axle." },
      { s: 'panam', t: "And who's this? You make a friend, Judy?" },
      { choose: [
        { t: "Solar. Nice car.", notes: 3, then: [{ s: 'panam', t: "...She knows cars. Alright. You're alright." }] },
        { t: "I'm her friend. Want help with the axle?", notes: 3, then: [{ s: 'panam', t: "Judy, I like this one. Keep her." }] }
      ] },
      { n: "They fixed the axle together, all three of them, in the junkyard at night with headlamps. Then Panam drove them up and down the coastal road at speeds that made Solar grip the door handle and Judy shriek with laughter. The car smelled like engine oil and dust. The radio played something Panam's people sang around fires." },
      { n: "Panam faded at dawn, the way the visitors did. Before she went, she told Judy, gruffly, \"Don't you dare give up on that rig,\" and told Solar, more gruffly, \"Look after her. She cares too hard.\" Then she got back in her car and drove into the sunrise and was gone." }
    ] },

    { after: '10/24', title: '6: the dive', music: 'tender', place: 'Port Island · Harbor', scene: [
      { n: "Judy had found scuba gear. Solar wasn't sure how. She didn't ask." },
      { s: 'judy', f: 'sad', t: "Where I grew up, there was a town called Laguna Bend. They built a dam and flooded the whole thing. Houses, streets, the church. My grandma's house." },
      { s: 'judy', f: 'neutral', t: "I used to dive down to it. See it all under the water. Like a memory you can swim through." },
      { s: 'judy', f: 'happy', t: "There's a sunken pier here. Off the old harbor. Dive with me?" },
      { choose: [
        { t: "I've never dived before.", notes: 3, then: [{ s: 'judy', f: 'happy', t: "I'll teach you. Stay close. Don't panic. Breathe slow. That's basically it." }] },
        { t: "(Start putting on the gear.)", notes: 3, then: [{ s: 'judy', f: 'happy', t: "...Yeah? Alright. Preem. Let me check your seals." }] }
      ] },
      { n: "Underwater, everything was blue and green and silent. The old pier went down into the dark, crusted with barnacles, and fish moved through it in silver clouds. Judy swam ahead, slow and sure, then turned and waited, every time, until Solar caught up." },
      { n: "At the bottom there was an old bicycle, half-buried, tangled in weed. Judy touched the handlebars gently, like it was something she'd known once. Then she looked at Solar through her mask, and even underwater, even through the bubbles, Solar could see she was smiling." },
      { n: "On the dock afterward, wrapped in towels, shivering, Judy lay on her back and looked at the sky." },
      { s: 'judy', f: 'happy', t: "...First time I've felt like myself since I got here. Since a long time before that, actually." },
      { s: 'judy', f: 'flustered', t: "Thanks for coming down with me, Solar." }
    ] },

    { after: '11/7', title: '7: braindance', place: 'Iwatodai Dorm · Rooftop · The Dark Hour', scene: [
      { n: "The rig was finished. Judy brought it up to the dorm roof at midnight, during the green hour, with the city frozen and the moon huge and green over the bay." },
      { s: 'judy', f: 'serious', t: "I want to record this. The green hour. Nobody's ever recorded it. I want to feel it properly." },
      { s: 'judy', f: 'flustered', t: "And I want you in it. Not as a background extra. As the main character." },
      { choose: [
        { t: "Okay. What do I do?", notes: 3, then: [{ s: 'judy', f: 'neutral', t: "Nothing. Just be here. Look at the sky. Feel whatever you feel. The rig'll catch it." }] },
        { t: "Why me?", notes: 3, then: [{ s: 'judy', f: 'flustered', t: "Because you're the realest thing in this whole fake-looking world. That's why." }] }
      ] },
      { n: "She put the helmet on Solar's head, careful, adjusting the straps. Then she stood back and pressed a button, and Solar felt the world sharpen, every sense turned up, the cold of the roof and the green of the moon and the silence and the sound of Judy breathing beside her." },
      { n: "She looked at the sky. She thought about the roof, the first night, the moon, the cold weight at her temple. She thought about the people she'd met this year, from worlds that didn't exist. She thought about Judy, beside her, who'd made this out of junk and grief and stubbornness, so other people would feel less alone." },
      { n: "When the green faded, Judy took the helmet off her and looked at the tiny chip that came out of it like it was the most precious thing she'd ever held." },
      { s: 'judy', f: 'happy', t: "...That's the best BD I've ever made. And I didn't edit a single frame." }
    ] },

    { after: '11/21', title: '8: change the world', place: 'Iwatodai · Junkyard', scene: [
      { n: "The end of November. The junkyard was cold, and Judy had a space heater running off a car battery, and they sat around it on overturned crates while she talked, faster than usual, the way she did when something was eating at her." },
      { s: 'judy', f: 'neutral', t: "Elizabeth says the green hour's gonna close. End of January. Everybody goes home." },
      { s: 'judy', f: 'serious', t: "Back home, there's so much to fix. The Mox. The girls at Clouds. All the people the corps chew up. I always said I'd fight for them." },
      { s: 'judy', f: 'sad', t: "And part of me just wants to stay here. With you. In a junkyard. Where nobody needs me to save them." },
      { s: 'judy', f: 'sad', t: "Is that giving up? Is that what giving up feels like?" },
      { choose: [
        { t: "Leaving isn't giving up. It's choosing where to fight from.", notes: 3, then: [
          { s: 'judy', f: 'surprised', t: '...' },
          { s: 'judy', f: 'neutral', t: "...Choosing where to fight from. Huh." },
          { n: "She sat with that for a long time. The space heater ticked. The junkyard cat came and sat in Solar's lap instead of Judy's, for once." }
        ] },
        { t: "You can want to rest. That's allowed.", notes: 3, then: [{ s: 'judy', f: 'sad', t: "...Nobody's ever told me that. Not once." }] }
      ] },
      { s: 'judy', f: 'flustered', t: "You're really good at this, you know. Saying the thing I need to hear." },
      { s: 'judy', f: 'happy', t: "It's kind of annoying. In a good way." }
    ] },

    { after: '12/5', title: '9: hey you', place: 'Paulownia Mall · Club Escapade', scene: [
      { n: "Club Escapade, after closing. The jukebox, still playing Judy's twelve songs. The lights down low. Judy behind the bar, where she was very much not supposed to be, making two drinks that were mostly fruit juice." },
      { s: 'judy', f: 'flustered', t: "Okay. I'm gonna say something. I'm bad at saying things that aren't about wiring." },
      { s: 'judy', f: 'sad', t: "Since Ev, I haven't let anyone close. It was easier. Safer. You can't lose what you don't have." },
      { s: 'judy', f: 'flustered', t: "And then this girl walks up to a jukebox I'm taking apart and tells me it's all real. And I can't stop thinking about her." },
      { s: 'judy', f: 'serious', t: "So. What is this, choom?" },
      { route: [
        { t: "I'm falling for you, Judy.", route: 'romance', notes: 3, then: [
          { s: 'judy', f: 'surprised', t: '...' },
          { s: 'judy', f: 'flustered', t: "...Yeah? Okay. Okay. Me too. Since the jukebox, honestly." },
          { n: "She came around the bar. She kissed her in the empty club with the jukebox playing something loud and angry and wonderful, and the strobe light, which she'd forgotten to turn off, flickered over both of them." },
          { s: 'judy', f: 'happy', t: "...Hey you." }
        ] },
        { t: "You're my best friend. My best choom.", route: 'friend', notes: 3, then: [
          { s: 'judy', f: 'happy', t: "...Best choom. Yeah. Yeah, I like that." },
          { n: "She pushed one of the drinks across the bar and clinked her glass against it." },
          { s: 'judy', f: 'happy', t: "To best chooms. In every dimension." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: somewhere new', place: 'Iwatodai · Junkyard', scene: [
      { n: "The week after Christmas. Snow in the junkyard, on the rusted cars and the old workbench and the space heater, which was off. Judy was waiting with something small in her hand." },
      { n: "A chip. The BD chip from the roof, from the green hour. And a second one, newer, labeled in her messy handwriting: US." },
      { s: 'judy', f: 'happy', t: "I've been recording. Little bits. The arcade. The dive. The junkyard. Game night. You eating that terrible protein shake your boxing friend gave you." },
      { s: 'judy', f: 'sad', t: "It's everything. This whole year. So you can step back inside it whenever you want. And so I can, back home." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll watch it every time I miss you.", notes: 3, then: [{ s: 'judy', f: 'happy', t: "So, like, every day. Good. That's the right answer." }] },
          { t: "You made something that makes people feel less alone.", notes: 3, then: [{ s: 'judy', f: 'neutral', t: "...Yeah. I did. Took me a whole other universe to figure out how." }] }
        ] },
        { n: "They sat in the snowy junkyard and watched the city lights come on. Judy had a plan, she said, for when she got home. A new kind of BD studio. One that told the truth. She was going to call it Sunburst. She didn't say why. She didn't need to." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'judy', f: 'neutral', t: "Back home, I always said I wanted to leave. Go somewhere new. Start over with someone." },
        { s: 'judy', f: 'flustered', t: "Turns out somewhere new was here. And someone was you." },
        { choose: [
          { t: "Wherever you go, I'm in that chip.", notes: 3, then: [
            { s: 'judy', f: 'happy', t: "...Yeah. You are. Every frame." },
            { n: "She kissed her in the snow, and the junkyard cat yowled at them, offended, and they both laughed against each other's mouths." }
          ] },
          { t: '(Kiss her.)', notes: 3, then: [
            { s: 'judy', f: 'flustered', t: '...' },
            { s: 'judy', f: 'happy', t: "...Recording that one too. Don't care. Making it the last frame." }
          ] }
        ] },
        { n: "When she put the chip in Solar's hand, she closed Solar's fingers over it with both of hers and held them there for a long time, warm, in the cold, like she was trying to record that too." }
      ] }
    ] }
  ]
});
