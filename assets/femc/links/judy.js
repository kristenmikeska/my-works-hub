/* Judy Alvarez · XI Justice. Arrives on the 8/6 full moon. Evenings. Format notes are at the top of akihiko.js.
   Evelyn's story is handled carefully and without detail. */
FemcSocial.define({
  id: 'judy', name: 'Judy Alvarez', short: 'Judy', arcana: 'Justice', numeral: 'XI', from: 'Cyberpunk 2077',
  arrives: '8/6',
  home: { place: 'Paulownia Mall · Club Escapade', slot: 1, days: [3, 5, 6], hint: 'Evenings on Wednesdays, Fridays and Saturdays, at Club Escapade.' },
  romance: true,
  cast: { mitsuru: 'Mitsuru', evelyn: 'Evelyn', panam: 'Panam' },
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
      { s: 'judy', t: "Huh. Your face is way too detailed for a background extra. Who wrote you?" },
      { choose: [
        { t: "Wrote me?", notes: 2, then: [{ s: 'judy', t: "Yeah. This is a braindance, right? Somebody's recording. Gotta be. Nothing's this weird in real life. Not even in Night City." }] },
        { t: "You're fixing the jukebox.", notes: 3, then: [
          { s: 'judy', t: "Upgrading it. It was playing the same twelve songs. Criminal. Now it's going to play my twelve songs." },
          { n: "She said it with total seriousness. Solar decided she liked her immediately." }
        ] }
      ] },
      { s: 'judy', t: "Judy Alvarez. BD tech. Editor. I make memories into something you can step inside." },
      { s: 'judy', t: "Fell asleep in my workshop in Night City, woke up in a green nightmare full of coffins, and now I'm here. Gotta be a BD. Some gonk's idea of a horror flick." },
      { choose: [
        { t: "It's not a BD. It's real.", notes: 3, then: [
          { s: 'judy', t: '...' },
          { s: 'judy', t: "Yeah. Yeah, I was afraid you'd say that. Too many little details. The smell's wrong for a BD." },
          { n: "She looked around the club like it had betrayed her. Then she went back to the jukebox, faster, like having something to fix was the only thing holding her together." }
        ] },
        { t: "If it's a BD, what am I?", notes: 2, then: [{ s: 'judy', t: "An NPC. A really good one. Better dialogue than most. I'd hire your writer." }] }
      ] },
      { n: "When she finished, the jukebox played something loud and angry and wonderful that nobody in Iwatodai had ever heard. Half the club went quiet. Then the other half started dancing. Judy leaned back against the bar and watched them with her arms crossed and something almost like a smile." }
    ] },

    { after: '8/22', title: '2: the rig', place: 'Iwatodai · Junkyard', scene: [
      { n: "There was a junkyard out past the port, behind a chain-link fence with a hole in it, and Judy had claimed it the way other people claimed a favorite café." },
      { n: "She'd built a workbench out of a door and two oil drums. On it was a tangle of salvaged circuit boards and old game console parts and a bicycle helmet with wires glued all over it." },
      { s: 'judy', t: "Braindance rig. Or the start of one. Your tech here is ancient, choom. Like, fossil-level. I'm doing it with spit and stubbornness." },
      { choose: [
        { t: "Can I help?", notes: 3, then: [
          { s: 'judy', t: "...Seriously? Okay. Hold this. Don't let it touch that." },
          { n: "She handed Solar a soldering iron and a circuit board and a lot of very fast instructions, and for three hours they worked side by side in the junkyard in the August heat, saying almost nothing, and it was one of the best afternoons Solar had had all summer." }
        ] },
        { t: "What does it do?", notes: 2, then: [{ s: 'judy', t: "Records what you feel. Not just what you see. Everything. And lets someone else feel it too. Like stepping into a memory." }] }
      ] },
      { s: 'judy', t: "Back home, BDs are mostly garbage. Corpo propaganda and people getting hurt for views. I wanted to make something different. Something that made you feel less alone." },
      { n: "She said it fast, not looking up from the circuit board. Like she'd said it to herself so many times it had worn grooves." },
      { n: "When they finished, she tested it on the stray cat that lived in the junkyard. The cat was fine. Judy put the helmet on afterward and lay flat on the ground for ten minutes saying \"fish\" quietly, over and over." }
    ] },

    { after: '9/5', title: '3: corpo', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "Judy had found out who owned the dorm." },
      { s: 'judy', t: "Kirijo Group. KIRIJO. As in, the giant megacorp with its name on half the buildings in this city. You live in a CORPO dorm, choom." },
      { n: "She'd come straight to the lounge to say this, in her overalls, still holding a wrench, and was now standing in front of the couch where Mitsuru Kirijo was quietly reading, staring at her like she was a bomb." },
      { register: 'mitsuru' },
      { s: 'mitsuru', f: 'neutral', t: "...I'm aware of who owns the dorm. I'm the daughter of the man who owns it." },
      { s: 'judy', t: "Oh, PERFECT." },
      { choose: [
        { t: "Judy, Mitsuru's not like that.", notes: 3, then: [{ s: 'judy', t: "They're ALL like that. Every corpo kid I ever met thought they were the good one." }] },
        { t: "(Let them have it out.)", notes: 2, then: [{ n: "Solar sat down and let them have it out. It was a long conversation. It was a loud conversation, on one side." }] }
      ] },
      { s: 'mitsuru', f: 'sad', t: "You're not wrong to be suspicious. My family's company has done terrible things. Some of them are why this dorm exists. Why we fight." },
      { s: 'mitsuru', f: 'neutral', t: "I can't undo them. I can only try to make sure they're never done again. With what I have." },
      { n: "Judy stared at her for a long time. The wrench went down, slowly." },
      { s: 'judy', t: "...Huh. A corpo who admits it. That's new." },
      { s: 'judy', t: "Still don't trust you. But I'll watch. I'm good at watching." },
      { s: 'mitsuru', f: 'neutral', t: "That's fair. I'd expect nothing less." },
      { n: "They didn't shake hands. But the next week, when the dorm's ancient hot water heater broke, Judy fixed it for free, and Mitsuru left a thank-you note on her workbench in perfect handwriting. Judy kept it." }
    ] },

    { after: '9/19', title: '4: evelyn', place: 'Iwatodai · Junkyard', scene: [
      { n: "Judy had been quiet all week. Not the focused quiet of building something. A heavier one. She'd stopped coming to Club Escapade. She'd stopped fixing things." },
      { n: "Solar found her at the junkyard at dusk, sitting on the hood of a rusted car with the BD helmet in her lap, not wearing it. Just holding it." },
      { s: 'judy', t: "There was someone. Back home. Evelyn." },
      { register: 'evelyn' },
      { s: 'judy', t: "Smart. Beautiful. Always three moves ahead. I'd have followed her anywhere." },
      { s: 'judy', t: "Some people hurt her. Badly. And afterward she... she couldn't find her way back. And I couldn't reach her in time." },
      { n: "That was all she said about it. She didn't need to say more. Solar sat down on the hood of the rusted car beside her, close enough that their shoulders touched, and didn't ask a single question." },
      { choose: [
        { t: "(Stay quiet beside her.)", notes: 3, then: [
          { n: "They sat there until it was fully dark. The junkyard cat came and curled up in Judy's lap, on top of the helmet. She let it. She put her hand on its back and finally, very quietly, started to cry." }
        ] },
        { t: "I'm so sorry, Judy.", notes: 2, then: [{ s: 'judy', t: "...Yeah. Me too. Every single day." }] }
      ] },
      { s: 'judy', t: "Thanks for not saying anything stupid. Most people say something stupid." },
      { n: "She put the helmet back on the workbench. She didn't build anything that night. But the next day she came back to Club Escapade, and the day after that she started on the rig again, and Solar decided that counted as something." }
    ] },

    { after: '10/3', title: '5: panam', place: 'Port Island · Coastal Road', scene: [
      { n: "The car came through the green hour at a hundred and forty kilometers an hour, landed on the coastal road in a shower of sparks, spun twice, and stopped dead in front of the junkyard with its engine roaring." },
      { register: 'panam' },
      { n: "A woman climbed out. Long dark hair, nomad leathers, tattoos, and an expression of absolute fury, which changed instantly when she saw Judy." },
      { s: 'panam', t: "Judy? JUDY? What the hell are you doing in... wherever this is?" },
      { s: 'judy', t: "Panam! Oh, thank god, a face I know!" },
      { n: "Panam Palmer, it turned out, had been driving across the Badlands at night and had driven straight into a wall of green light. She was extremely annoyed about it. She was even more annoyed that her car had a cracked axle." },
      { s: 'panam', t: "And who's this? You make a friend, Judy?" },
      { choose: [
        { t: "Solar. Nice car.", notes: 3, then: [{ s: 'panam', t: "...She knows cars. Alright. You're alright." }] },
        { t: "I'm her friend. Want help with the axle?", notes: 3, then: [{ s: 'panam', t: "Judy, I like this one. Keep her." }] }
      ] },
      { n: "They fixed the axle together, all three of them, in the junkyard at night with headlamps. Then Panam drove them up and down the coastal road at speeds that made Solar grip the door handle and Judy shriek with laughter. The car smelled like engine oil and dust. The radio played something Panam's people sang around fires." },
      { n: "Panam faded at dawn, the way the visitors did. Before she went, she told Judy, gruffly, \"Don't you dare give up on that rig,\" and told Solar, more gruffly, \"Look after her. She cares too hard.\" Then she got back in her car and drove into the sunrise and was gone." }
    ] },

    { after: '10/24', title: '6: the dive', place: 'Port Island · Harbor', scene: [
      { n: "Judy had found scuba gear. Solar wasn't sure how. She didn't ask." },
      { s: 'judy', t: "Where I grew up, there was a town called Laguna Bend. They built a dam and flooded the whole thing. Houses, streets, the church. My grandma's house." },
      { s: 'judy', t: "I used to dive down to it. See it all under the water. Like a memory you can swim through." },
      { s: 'judy', t: "There's a sunken pier here. Off the old harbor. Dive with me?" },
      { choose: [
        { t: "I've never dived before.", notes: 3, then: [{ s: 'judy', t: "I'll teach you. Stay close. Don't panic. Breathe slow. That's basically it." }] },
        { t: "(Start putting on the gear.)", notes: 3, then: [{ s: 'judy', t: "...Yeah? Alright. Preem. Let me check your seals." }] }
      ] },
      { n: "Underwater, everything was blue and green and silent. The old pier went down into the dark, crusted with barnacles, and fish moved through it in silver clouds. Judy swam ahead, slow and sure, then turned and waited, every time, until Solar caught up." },
      { n: "At the bottom there was an old bicycle, half-buried, tangled in weed. Judy touched the handlebars gently, like it was something she'd known once. Then she looked at Solar through her mask, and even underwater, even through the bubbles, Solar could see she was smiling." },
      { n: "On the dock afterward, wrapped in towels, shivering, Judy lay on her back and looked at the sky." },
      { s: 'judy', t: "...First time I've felt like myself since I got here. Since a long time before that, actually." },
      { s: 'judy', t: "Thanks for coming down with me, Solar." }
    ] },

    { after: '11/7', title: '7: braindance', place: 'Iwatodai Dorm · Rooftop · The Dark Hour', scene: [
      { n: "The rig was finished. Judy brought it up to the dorm roof at midnight, during the green hour, with the city frozen and the moon huge and green over the bay." },
      { s: 'judy', t: "I want to record this. The green hour. Nobody's ever recorded it. I want to feel it properly." },
      { s: 'judy', t: "And I want you in it. Not as a background extra. As the main character." },
      { choose: [
        { t: "Okay. What do I do?", notes: 3, then: [{ s: 'judy', t: "Nothing. Just be here. Look at the sky. Feel whatever you feel. The rig'll catch it." }] },
        { t: "Why me?", notes: 3, then: [{ s: 'judy', t: "Because you're the realest thing in this whole fake-looking world. That's why." }] }
      ] },
      { n: "She put the helmet on Solar's head, careful, adjusting the straps. Then she stood back and pressed a button, and Solar felt the world sharpen, every sense turned up, the cold of the roof and the green of the moon and the silence and the sound of Judy breathing beside her." },
      { n: "She looked at the sky. She thought about the roof, the first night, the moon, the cold weight at her temple. She thought about the people she'd met this year, from worlds that didn't exist. She thought about Judy, beside her, who'd made this out of junk and grief and stubbornness, so other people would feel less alone." },
      { n: "When the green faded, Judy took the helmet off her and looked at the tiny chip that came out of it like it was the most precious thing she'd ever held." },
      { s: 'judy', t: "...That's the best BD I've ever made. And I didn't edit a single frame." }
    ] },

    { after: '11/21', title: '8: change the world', place: 'Iwatodai · Junkyard', scene: [
      { n: "The end of November. The junkyard was cold, and Judy had a space heater running off a car battery, and they sat around it on overturned crates while she talked, faster than usual, the way she did when something was eating at her." },
      { s: 'judy', t: "Elizabeth says the green hour's gonna close. End of January. Everybody goes home." },
      { s: 'judy', t: "Back home, there's so much to fix. The Mox. The girls at Clouds. All the people the corps chew up. I always said I'd fight for them." },
      { s: 'judy', t: "And part of me just wants to stay here. With you. In a junkyard. Where nobody needs me to save them." },
      { s: 'judy', t: "Is that giving up? Is that what giving up feels like?" },
      { choose: [
        { t: "Leaving isn't giving up. It's choosing where to fight from.", notes: 3, then: [
          { s: 'judy', t: '...' },
          { s: 'judy', t: "...Choosing where to fight from. Huh." },
          { n: "She sat with that for a long time. The space heater ticked. The junkyard cat came and sat in Solar's lap instead of Judy's, for once." }
        ] },
        { t: "You can want to rest. That's allowed.", notes: 3, then: [{ s: 'judy', t: "...Nobody's ever told me that. Not once." }] }
      ] },
      { s: 'judy', t: "You're really good at this, you know. Saying the thing I need to hear." },
      { s: 'judy', t: "It's kind of annoying. In a good way." }
    ] },

    { after: '12/5', title: '9: hey you', place: 'Paulownia Mall · Club Escapade', scene: [
      { n: "Club Escapade, after closing. The jukebox, still playing Judy's twelve songs. The lights down low. Judy behind the bar, where she was very much not supposed to be, making two drinks that were mostly fruit juice." },
      { s: 'judy', t: "Okay. I'm gonna say something. I'm bad at saying things that aren't about wiring." },
      { s: 'judy', t: "Since Ev, I haven't let anyone close. It was easier. Safer. You can't lose what you don't have." },
      { s: 'judy', t: "And then this girl walks up to a jukebox I'm taking apart and tells me it's all real. And I can't stop thinking about her." },
      { s: 'judy', t: "So. What is this, choom?" },
      { route: [
        { t: "I'm falling for you, Judy.", route: 'romance', notes: 3, then: [
          { s: 'judy', t: '...' },
          { s: 'judy', t: "...Yeah? Okay. Okay. Me too. Since the jukebox, honestly." },
          { n: "She came around the bar. She kissed her in the empty club with the jukebox playing something loud and angry and wonderful, and the strobe light, which she'd forgotten to turn off, flickered over both of them." },
          { s: 'judy', t: "...Hey you." }
        ] },
        { t: "You're my best friend. My best choom.", route: 'friend', notes: 3, then: [
          { s: 'judy', t: "...Best choom. Yeah. Yeah, I like that." },
          { n: "She pushed one of the drinks across the bar and clinked her glass against it." },
          { s: 'judy', t: "To best chooms. In every dimension." }
        ] }
      ] }
    ] },

    { after: '12/26', title: '10: somewhere new', place: 'Iwatodai · Junkyard', scene: [
      { n: "The week after Christmas. Snow in the junkyard, on the rusted cars and the old workbench and the space heater, which was off. Judy was waiting with something small in her hand." },
      { n: "A chip. The BD chip from the roof, from the green hour. And a second one, newer, labeled in her messy handwriting: US." },
      { s: 'judy', t: "I've been recording. Little bits. The arcade. The dive. The junkyard. Game night. You eating that terrible protein shake your boxing friend gave you." },
      { s: 'judy', t: "It's everything. This whole year. So you can step back inside it whenever you want. And so I can, back home." },
      { ifRoute: 'friend', then: [
        { choose: [
          { t: "I'll watch it every time I miss you.", notes: 3, then: [{ s: 'judy', t: "So, like, every day. Good. That's the right answer." }] },
          { t: "You made something that makes people feel less alone.", notes: 3, then: [{ s: 'judy', t: "...Yeah. I did. Took me a whole other universe to figure out how." }] }
        ] },
        { n: "They sat in the snowy junkyard and watched the city lights come on. Judy had a plan, she said, for when she got home. A new kind of BD studio. One that told the truth. She was going to call it Sunburst. She didn't say why. She didn't need to." }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'judy', t: "Back home, I always said I wanted to leave. Go somewhere new. Start over with someone." },
        { s: 'judy', t: "Turns out somewhere new was here. And someone was you." },
        { choose: [
          { t: "Wherever you go, I'm in that chip.", notes: 3, then: [
            { s: 'judy', t: "...Yeah. You are. Every frame." },
            { n: "She kissed her in the snow, and the junkyard cat yowled at them, offended, and they both laughed against each other's mouths." }
          ] },
          { t: '(Kiss her.)', notes: 3, then: [
            { s: 'judy', t: '...' },
            { s: 'judy', t: "...Recording that one too. Don't care. Making it the last frame." }
          ] }
        ] },
        { n: "When she put the chip in Solar's hand, she closed Solar's fingers over it with both of hers and held them there for a long time, warm, in the cold, like she was trying to record that too." }
      ] }
    ] }
  ]
});
