/* Secrets: runners2. Format in femc-social.js above secrets().
   Mark Lee crossover (Kat's novel Runners: Music major, Sigma Chi, the boy who found Solar on her first day and
   already knew who she was). He likes her, and he is counting. Both, always, at the same time.
   - A wrong-number DM thread from markylee: three texts, no date gate (unlock.after), so a late save still gets
     each of them, in order, one evening apart. The last one waits for the station piano (unlock.seen).
   - Moments: a station piano (11/18, evening) and, once Haechan's link has started, "Hyuck" (1/10, daytime).
   - The girls' chat (rn-gc, from runners.js) hears about the station piano the evening after.
   Nothing here moves Runners' plot. Stamps rn-marky and rn-hyuck live in achievements.js. */
FemcSocial.secrets({
  id: 'runners2',
  cast: { 'rn-mark': 'Mark', 'rn-hanni': '@hanni', 'rn-hyein': '@hyein' },
  threads: {
    'rn-mark': { name: '+1 (315) 555-0147', members: ['rn-mark'] }
  },
  texts: [
    /* ── 1: "sol". He thinks the phone is acting up ── */
    { id: 'rn-mark-1', thread: 'rn-mark', slot: 1, unlock: { after: '8/26' }, rename: 'markylee', msgs: [
      { from: 'rn-mark', t: "sol" },
      { from: 'rn-mark', t: "u get back ok?" },
      { from: 'rn-mark', t: "jaehyun said ur phone was acting up so idk if this is even going thru lol" },
      { ask: [
        { t: "Who is this?", then: [
          { from: 'rn-mark', t: "lmao ok" },
          { from: 'rn-mark', t: "its mark" },
          { from: 'rn-mark', t: "mark lee?? i gave u the whole tour of the extracurricular building and u spent the entire time staring at the gaming lab" },
          { from: 'rn-mark', t: "rude but fair" }
        ] },
        { t: "I got back okay.", then: [
          { from: 'rn-mark', t: "word" },
          { from: 'rn-mark', t: "good. just checking" },
          { from: 'rn-mark', t: "this place is a lot sometimes" }
        ] },
        { t: "Which Sol?", then: [
          { from: 'rn-mark', t: "??" },
          { from: 'rn-mark', t: "the one im texting" },
          { from: 'rn-mark', t: "is this a bit. ok im in. the cool one" }
        ] }
      ] },
      { from: 'rn-mark', t: "anyway if u ever need anything" },
      { from: 'rn-mark', t: "like anything" },
      { from: 'rn-mark', t: "bodyguard mark lee, reporting for duty" },
      { ask: [
        { t: "Thanks, Mark.", then: [
          { from: 'rn-mark', t: "ofc :)" },
          { from: 'rn-mark', t: "wait since when do u call me mark" },
          { from: 'rn-mark', t: "its marky. mark is for when im in trouble" },
          { from: 'rn-mark', t: "am i in trouble" }
        ] },
        { t: "I think you have the wrong number.", then: [
          { from: 'rn-mark', t: "lol" },
          { from: 'rn-mark', t: "ok sol" },
          { from: 'rn-mark', t: "goodnight sol :)" }
        ] }
      ] },
      { from: 'rn-mark', t: "oh and its markylee on insta. in case ur phone ate that too" }
    ] },

    /* ── 2: a voice memo with a gap where a voice goes ── */
    { id: 'rn-mark-2', thread: 'rn-mark', slot: 1, unlock: { after: '10/12' }, rename: 'markylee', msgs: [
      { from: 'rn-mark', t: "hey sol" },
      { from: 'rn-mark', t: "random q" },
      { from: 'rn-mark', t: "do u still sing" },
      { from: 'rn-mark', t: "like at all. shower counts" },
      { ask: [
        { t: "Sometimes. Why?", then: [
          { from: 'rn-mark', t: "ok dont laugh" },
          { sys: 'Voice memo · 0:48' },
          { from: 'rn-mark', t: "its rough. theres a gap in the middle where a voice goes" },
          { from: 'rn-mark', t: "i keep hearing u in it" }
        ] },
        { t: "Not really.", then: [
          { from: 'rn-mark', t: "u downplay too much" },
          { from: 'rn-mark', t: "i bet ur great" },
          { sys: 'Voice memo · 0:48' },
          { from: 'rn-mark', t: "theres a gap in this where a voice goes. just saying" }
        ] },
        { t: "Who's asking?", then: [
          { from: 'rn-mark', t: "lol still doing the bit" },
          { from: 'rn-mark', t: "the guy whos asking" },
          { sys: 'Voice memo · 0:48' },
          { from: 'rn-mark', t: "theres a gap in it. for a voice. u can tell me its bad" }
        ] }
      ] },
      { from: 'rn-mark', t: "also unrelated" },
      { from: 'rn-mark', t: "does ur dad still know like. everyone" },
      { from: 'rn-mark', t: "in music i mean" },
      { from: 'rn-mark', t: "jk" },
      { from: 'rn-mark', t: "kind of jk" },
      { ask: [
        { t: "My parents aren't around.", then: [
          { from: 'rn-mark', t: "oh" },
          { from: 'rn-mark', t: "wait" },
          { from: 'rn-mark', t: "sol ur dad is literally on the news every other week" },
          { from: 'rn-mark', t: "..." },
          { from: 'rn-mark', t: "ok forget the song. forget all of it" },
          { from: 'rn-mark', t: "are u ok?" },
          { from: 'rn-mark', t: "for real. its not on u to be ok either. just tell me" }
        ] },
        { t: "Why do you want to know?", then: [
          { from: 'rn-mark', t: "no reason!!" },
          { from: 'rn-mark', t: "just making convo. music nerd. u know me" },
          { from: 'rn-mark', t: "ok maybe a small reason" },
          { from: 'rn-mark', t: "but mostly i just wanted u to hear the song first" }
        ] },
        { t: "(Play the memo again instead of answering.)", then: [
          { from: 'rn-mark', t: "..." },
          { from: 'rn-mark', t: "ur listening to it again arent u" },
          { from: 'rn-mark', t: "i can see the little read thing" },
          { from: 'rn-mark', t: "thats ok. i like that u like it" }
        ] }
      ] },
      { from: 'rn-mark', t: "night sol" }
    ] },

    /* ── The girls' chat, the evening after the station piano ── */
    { id: 'rn-gc-mark', thread: 'rn-gc', slot: 1, unlock: { seen: ['rn-mark-piano'] }, msgs: [
      { from: 'rn-hyein', t: "OTHER SOLAR" },
      { from: 'rn-hyein', t: "question" },
      { from: 'rn-hyein', t: "have u been at a train station lately. with a piano in it" },
      { from: 'rn-hanni', t: "hyein you cant just ask people that!!" },
      { from: 'rn-hyein', t: "mark lee sat with us at dinner and would NOT stop talking about solar humming at a piano" },
      { from: 'rn-hyein', t: "at a TRAIN STATION. with SEAGULLS on it" },
      { from: 'rn-hyein', t: "and our solar was at practice. with like eight witnesses and a coach" },
      { from: 'rn-hanni', t: "he said it was perfect. the humming. he kept saying perfect" },
      { ask: [
        { t: "That was me.", then: [
          { from: 'rn-hyein', t: "I KNEW IT" },
          { from: 'rn-hanni', t: "he looked so happy about it" },
          { from: 'rn-hanni', t: "like. weirdly happy" },
          { from: 'rn-hyein', t: "mark is always happy when he finds something he likes" },
          { from: 'rn-hanni', t: "hyein" },
          { from: 'rn-hyein', t: "what!! its true!!" }
        ] },
        { t: "Who's Mark?", then: [
          { from: 'rn-hyein', t: "sigma boy. music major. caramel hair. very nice" },
          { from: 'rn-hanni', t: "very nice!!" },
          { from: 'rn-hyein', t: "we both said very nice. thats how u know" }
        ] },
        { t: "Was he nervous? He seemed nervous.", then: [
          { from: 'rn-hyein', t: "he did the neck thing like forty times" },
          { from: 'rn-hanni', t: "he rubs the back of his neck when hes nervous" },
          { from: 'rn-hyein', t: "or when hes about to say something he practiced" },
          { from: 'rn-hanni', t: "HYEIN" }
        ] }
      ] },
      { from: 'rn-hanni', t: "anyway if he texts you" },
      { from: 'rn-hanni', t: "you dont have to sing for anybody you dont want to!!" },
      { from: 'rn-hyein', t: "unless u want to. in which case invite us. we'll bring a sign" }
    ] },

    /* ── 3: he works it out. Late January, and only after the station ── */
    { id: 'rn-mark-3', thread: 'rn-mark', slot: 1, unlock: { seen: ['rn-mark-piano'], after: '1/20' }, rename: 'markylee', msgs: [
      { from: 'rn-mark', t: "sol" },
      { from: 'rn-mark', t: "weird q. dont make fun of me" },
      { from: 'rn-mark', t: "the station. the piano. that was u right" },
      { from: 'rn-mark', t: "bc i brought it up the next day and she looked at me like i had three heads" },
      { from: 'rn-mark', t: "and ur number is one digit off from hers. i checked. i put it in wrong on day one" },
      { from: 'rn-mark', t: "apparently hanni did the exact same thing which is insane" },
      { ask: [
        { t: "It was me.", then: [
          { from: 'rn-mark', t: "ok" },
          { from: 'rn-mark', t: "ok cool" },
          { from: 'rn-mark', t: "cool cool cool. totally normal" },
          { from: 'rn-mark', t: "so ur not her" }
        ] },
        { t: "Who did you think you were talking to?", then: [
          { from: 'rn-mark', t: "u" },
          { from: 'rn-mark', t: "her" },
          { from: 'rn-mark', t: "both maybe. idk anymore lol" }
        ] }
      ] },
      { from: 'rn-mark', t: "its ok honestly" },
      { from: 'rn-mark', t: "i kind of liked it" },
      { from: 'rn-mark', t: "w u i didnt have to have a plan" },
      { from: 'rn-mark', t: "...that came out weird. forget i said that" },
      { from: 'rn-mark', t: "i finished the song btw. ur four notes are in it" },
      { from: 'rn-mark', t: "credited. obviously" },
      { ask: [
        { t: "Tell her she can sing.", then: [
          { from: 'rn-mark', t: "i tell her all the time" },
          { from: 'rn-mark', t: "she never believes me" },
          { from: 'rn-mark', t: "maybe she'd believe it from u" }
        ] },
        { t: "Goodbye, Marky.", then: [
          { from: 'rn-mark', t: "..." },
          { from: 'rn-mark', t: "u even say it like her" },
          { from: 'rn-mark', t: "bye sol. the other one. take care of urself ok" }
        ] }
      ] }
    ] }
  ],

  moments: [
    /* A public piano in the station concourse. A boy who knows exactly who she is, almost. */
    { id: 'rn-mark-piano', date: '11/18', slot: 1, label: 'A station piano', title: 'four notes', place: 'Port Island Station · Central Concourse', music: 'mystery', stamp: 'rn-marky', scene: [
      { n: "Port Island Station at six in the evening was a river of wet umbrellas and tired uniforms, the whole concourse smelling like rain on concrete and the last sweet bread from the bakery by the east gate, and somewhere underneath the announcements, someone was playing the piano." },
      { n: "There had always been a piano there, an upright painted with fat cartoon seagulls and a laminated sign that said PLEASE PLAY in four languages, and in all the time she'd lived in this city she had only ever heard it play the same three songs, badly, by children. This wasn't that." },
      { n: "It was something she didn't know, warm and a little lopsided, a melody that kept climbing toward something and then stopping short on the same chord, like a person getting all the way to their front door and patting their pockets for keys. Twice. Three times. Every time it stopped, she found herself leaning toward the place it should have gone." },
      { n: "The boy on the bench had caramel hair that fell into his eyes every time he looked down at his hands, and a navy sweatshirt with two Greek letters across the chest that meant nothing to anybody in Port Island, and he played like he was talking to someone who hadn't shown up yet." },
      { n: "He stopped on the chord a fourth time. Before she could think better of it, the next four notes were already out of her, hummed under her breath, quiet as anything, the way you finish a stranger's sentence on the train without meaning to." },
      { n: "His hands came off the keys." },
      { s: 'rn-mark', f: 'surprised', t: "Wait, wait. Do that again, that's—" },
      { n: "Then he turned around, and his whole face did something complicated. A double take, the real kind, the kind people only do in cartoons and train stations, eyes on her and away and back on her again like his brain had sent the picture twice to be sure." },
      { s: 'rn-mark', f: 'surprised', t: "Sol?" },
      { s: 'rn-mark', f: 'flustered', t: "No, yeah, sorry. Hi. Uh. That's, I mean, hi. What are you doing in—" },
      { n: "He looked around at the concourse then, at the departure board and the vending machines and the rain sheeting down the skylights, like he was only now noticing he wasn't wherever he'd thought he was. Then he laughed, easy, too easy, and decided not to notice it at all." },
      { s: 'rn-mark', f: 'neutral', t: "Okay. Cool. This is totally normal. I'm being so normal right now." },
      { choose: [
        { t: "Do I know you?", then: [
          { s: 'rn-mark', f: 'neutral', t: "Funny. That's funny, Sol, you've got jokes today." },
          { n: "He scratched the back of his neck while he said it and kept his eyes on her a beat too long, like he was waiting for the punchline to arrive on its own." },
          { s: 'rn-mark', f: 'serious', t: "...It's Mark. Mark Lee? I gave you the whole tour on the first day and you spent the entire thing staring through the window of a gaming lab." }
        ] },
        { t: "How do you know my name?", then: [
          { s: 'rn-mark', f: 'flustered', t: "Everybody knows your name." },
          { n: "He said it lightly, and it should have been nothing, and something passed behind his eyes anyway, quick as an express train through a local stop, like he'd been asked this before and hadn't liked his answer then either." },
          { s: 'rn-mark', f: 'neutral', t: "I mean. You told me. Day one. You asked if I'd already heard it, and I said yeah, and you made me ask anyway." }
        ] },
        { t: "(Hum the four notes again.)", then: [
          { n: "She hummed them again, a little louder this time, and the rain on the skylights kept time for her, and a salaryman waiting by the pillar looked up from his phone." },
          { s: 'rn-mark', f: 'serious', t: "...Yeah. That's where it goes." },
          { n: "He played them under her, slow, and the chord he'd been stuck on finally gave, opening into the next one like a door somebody had been leaning on from the other side." }
        ] }
      ] },
      { n: "He played the whole thing through once more with her line in it, start to finish, and it was better, and they both knew it was better. When it was over he sat back on the bench and looked at her, and for one second, so fast she nearly missed it, he looked at her like a sum he was working out in his head." },
      { n: "Then it was gone, and he was just grinning, and the grin was real too. That was the strange part. Both of them were real." },
      { s: 'rn-mark', f: 'neutral', t: "You can sing. Like, actually. I've said it a hundred times, you downplay it, and you look at me like I'm being nice. I'm not being nice, Sol. You can really sing." },
      { choose: [
        { t: "I only hummed.", then: [
          { s: 'rn-mark', f: 'neutral', t: "Four notes, dead on, off a chord I hadn't even resolved. That's not only humming, that's a whole thing." },
          { s: 'rn-mark', f: 'serious', t: "You should do something with it. Seriously. You know the kind of people who'd want to hear that? Your dad knows exactly the kind of—" },
          { n: "He stopped himself, and rubbed the back of his neck, and laughed at nothing." },
          { s: 'rn-mark', f: 'flustered', t: "Sorry. Music nerd. I get carried away." }
        ] },
        { t: "Is it yours? The song.", then: [
          { s: 'rn-mark', f: 'neutral', t: "Yeah. Mine." },
          { n: "He said it fast, and then he said it again, slower, as if he was checking how it sounded out loud." },
          { s: 'rn-mark', f: 'sad', t: "...Mine. It's been stuck in that same spot for months. Every time I sit down, it stops right there." }
        ] }
      ] },
      { n: "The chime went for the 6:14 to Iwatodai, and he looked up at the board like it was a teacher who'd caught him passing notes." },
      { s: 'rn-mark', f: 'neutral', t: "Hold on. Sweet or not sweet?" },
      { n: "He was already up and halfway to the vending machines by the pillar, feeding in coins that were the wrong shape and frowning at them, and he came back with a can of hot milk tea and pressed it into her hands before she'd answered, warm enough to sting." },
      { n: "Somewhere in the back of her head, a room full of boys she'd never met was shouting BODYGUARD MARK LEE at a party she had never been to. She didn't say it. She was fairly sure he'd heard it before." },
      { s: 'rn-mark', f: 'neutral', t: "Text me when you get back, okay? I mean it. It gets dark so early now." },
      { n: "She looked down at the can. When she looked up, the bench was empty and the lid was down over the keys, the seagulls grinning their fat cartoon grins at nobody. On the music stand, where there hadn't been anything before, was a napkin folded once, with four notes pencilled across a staff someone had ruled freehand, and under it, in quick lowercase, for sol. ur part." },
      { n: "The can stayed warm the whole ride home. She didn't know what to do with the feeling that somebody, somewhere, had been very glad to see her, and had also been counting." }
    ] },

    /* Once Haechan's link has started: the name only one person ever used. */
    { id: 'rn-mark-hyuck', date: '1/10', slot: 0, unlock: { met: ['haechan'], seen: ['rn-mark-piano'] }, label: 'A familiar face', title: 'hyuck', place: 'Paulownia Mall · Central Atrium', music: 'mystery', stamp: 'rn-hyuck', scene: [
      { n: "January had turned the mall into a greenhouse, everybody inside it shedding scarves at the doors and the fountain in the atrium throwing its noise straight up into the glass roof, where it hit and came back down twice as loud and half a second late. Solar was cutting through on her way to the bookstore when she saw the caramel hair." },
      { n: "He was sitting on the lip of the fountain with one earbud in and a spiral notebook of staff paper open on his knee, pencil behind his ear, nodding at nothing, and when he looked up and saw her he dropped the pencil, picked it up, dropped it again, and then waved with it like that had been the plan." },
      { s: 'rn-mark', f: 'flustered', t: "Sol. Hey. Hi. Funny running into you, I was literally just, uh, sitting here. Like a guy. Sitting." },
      { s: 'rn-mark', f: 'neutral', t: "Don't mind the room, it's awful in here. Listen to that. The water hits the roof and comes back late. You can hear the slap." },
      { n: "She listened. She couldn't hear the slap. She could hear a lot of water and a lot of people and a child somewhere negotiating hard for a pretzel." },
      { s: 'rn-mark', f: 'neutral', t: "Yeah, I can't really either. Not properly. Hyuck would've had it in two seconds, he'd tell you exactly what's wrong with this room and how to fix it and why everyone who built it should be in jail." },
      { n: "He laughed, and the name sat there after the laugh was gone, heavy, like a word he'd bitten down on by accident and kept chewing anyway." },
      { choose: [
        { t: "Hyuck?", then: [
          { s: 'rn-mark', f: 'neutral', t: "Donghyuck. Haechan, to literally everyone else on earth." },
          { s: 'rn-mark', f: 'serious', t: "You probably know him. Everybody gets to know him eventually." }
        ] },
        { t: "(Say nothing. Let him keep talking.)", then: [
          { n: "She sat down on the fountain's edge, a careful arm's length away, and said nothing, and he filled the silence the way she'd guessed he would, the way people did when they'd been waiting a long time for someone to sit still long enough." },
          { s: 'rn-mark', f: 'serious', t: "My best friend. Was. Is. I don't actually know what the word is right now." }
        ] }
      ] },
      { n: "Haechan. In her world it belonged to a boy sitting on top of a dryer at an hour nobody does laundry, headphones on, looking up like he'd heard his name. She thought of him before she could stop herself, and Mark must have seen it land, because he went very still, the pencil tapping once against the paper and then not at all." },
      { choose: [
        { t: "I know a Haechan.", then: [
          { s: 'rn-mark', f: 'serious', t: "...Course you do." },
          { n: "It came out with a little edge on it, quick and bright as a paper cut, and for a second she saw something under the easy face she hadn't been shown at the station, something old and sore and keeping score. Then he looked down at the notebook." },
          { s: 'rn-mark', f: 'sad', t: "Is he okay?" },
          { n: "He asked it so quietly the fountain nearly took it. Then he heard himself, and shook his head, and smiled the smile back on." },
          { s: 'rn-mark', f: 'neutral', t: "Don't tell him I asked. He'd be insufferable about it for, like, a year." }
        ] },
        { t: "You sound like you miss him.", then: [
          { s: 'rn-mark', f: 'sad', t: "We used to make stuff. Together. All the time, since we were like thirteen. I'd play, he'd hear what it was missing." },
          { s: 'rn-mark', f: 'serious', t: "And then we didn't. And he gets to be mad about that forever, apparently, so." },
          { n: "He let the so hang there, unfinished, the same way the song at the station had stopped on its chord. She had the feeling that if she hummed the next part of this one, he wouldn't thank her for it." }
        ] }
      ] },
      { n: "His phone buzzed against the stone. He looked at it, and whatever was on the screen pulled every bit of the slump out of his shoulders at once, the way a coach's whistle straightens a whole team." },
      { s: 'rn-mark', f: 'flustered', t: "That's, uh. That's nothing. That's totally nothing. I gotta, yeah. Good seeing you, Sol. Really." },
      { n: "He tucked the notebook under his arm and went off toward the escalators at a pace that was trying very hard to be a stroll. She looked down at the fountain's edge where he'd been sitting. He'd left the pencil." },
      { place: 'Iwatodai Dorm · Laundry Room', time: 'Evening' },
      { n: "That night the laundry room light was doing its dying flicker, and Haechan was sitting on the dryer with his headphones around his neck instead of on, which was how she knew something was wrong before he said anything." },
      { s: 'haechan', f: 'neutral', t: "Weird day. Felt like someone was saying my name in another room. Not this one. The old one." },
      { choose: [
        { t: "Someone was.", then: [
          { s: 'haechan', f: 'serious', t: "...Yeah?" },
          { n: "He didn't ask who. He put the headphones on instead, turned up loud enough that she could hear the beat leaking out of them, thin and tinny, looping, and sat there not listening to it, very hard, for a long time." }
        ] },
        { t: "(Don't tell him.)", then: [
          { n: "She didn't. He looked at her for a while, like he could hear it on her anyway, the way he heard everything, and then he let it go, and moved over on the dryer so there was room." },
          { s: 'haechan', f: 'sad', t: "Whatever it was. Don't let it follow you up here." }
        ] }
      ] },
      { n: "The pencil was still in her coat pocket. It had teeth marks on the end, and somebody had written MARK down the side of it in tiny capitals, the way you only label the things you're afraid someone will take." }
    ] }
  ]
});
