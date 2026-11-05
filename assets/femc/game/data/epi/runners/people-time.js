/* The Runners epilogue, the time pass: hangouts (Nov 5 2026, Kat's "build the more time changes and the rest of the story
   gaps"; FEMC-RUNNERS-EPI-EXPANSION Section B, C1 and C2). Data only; loaded with the world after story-time (epilogue.js
   WORLDS.runners.files). Three parts, one per writer, each pushing onto the bonds like people-w3.js (its own `add`):
     - the girls and the team (Hanni, Hyein, and the new bond `olivia`, shown as "The team": Olivia, Haerin, Doyoung)
     - Haechan, Minji, Chenle
     - Mark, Danielle, Jaemin
   Late Night hangouts (`slots: ['late']`) show only on world.js lateOpen nights (epilogue.js late()); the 12/20 goodbyes
   (evening, after epi-r-porch) follow Jaehyun's porch scene, which no longer spends the evening. Each part's header lists its
   hangouts, windows, flags read and inventions. Flag set here: epi-r-porchrail-seen (porch rail; people.js's ambient porch text
   then stays away). */

/* The Runners epilogue, the time pass: eight more hangouts for Hanni, Hyein and the team (Nov 5 2026, hangout writer "girls").
   Data only; loaded with the world after people.js / people-w3.js. Pushes onto existing bonds with people-w3.js's `add`
   (copied verbatim), so load order doesn't matter. `olivia` is the new bond, "the team" (the lead adds the display name).

   Hangouts (window · slot · gates):
     hanni   epi-r-hanni-strawberries  'strawberries'     12/3 · late · events epi-r-confession (her room; she doesn't tell)
             epi-r-hanni-source        'his source'       12/8-12/15 · late · events epi-r-regionals-2 (her room; Mark's gestures)
             epi-r-hanni-suitcases     'two suitcases'    12/20 · evening · events epi-r-porch (goodbye; the hallway between rooms)
     hyein   epi-r-hyein-foxsign       'the fox sign'     12/3 · late · events epi-r-confession (Hanni and Hyein's room; KIRIKO DIFF)
             epi-r-hyein-artist        'for the artist'   12/9-12/13 · late (Sigma living room; measuring Jaemin)
             epi-r-hyein-lookbook      'lookbook'         12/20 · evening · events epi-r-porch (goodbye; the stairs, the dress)
     olivia  epi-r-team-advance        'we advance'       12/8-12/10 · late · events epi-r-regionals-2 (the lab, the trophy)
             epi-r-team-haerin         "haerin's laugh"   12/10-12/14 · after/evening · events epi-r-regionals-2 (Marshall Street café)
   Flags set: none. Flags read: epi-r-told-girls / epi-r-lied-girls (suitcases, lookbook; set 12/18 in story-w3 epi-r-clocks;
     on the lied branch the lines stay true even if she told them that evening in epi-r-what-tells, which sets no flag),
     epi-r-travel-yes / epi-r-travel-no (suitcases). ifEpiRoute: haechan / minji / cover (source, suitcases, lookbook).
   Canon held: Hanni, Hyein and Jaemin don't learn about the recording (strawberries: she doesn't tell; the night is "hers");
     Haechan never asks anyone about her (Hanni says so, as something she noticed, his route); the jacket stays in the bag;
     the track stays untitled; nobody explains a glitch and none is scheduled here; on the cover route the girls know only
     that they're going up to "a roof" with her tonight (story-w3 epi-r-first-snow), nobody knows what happens there;
     Chenle is not in "haerin's laugh" (its evenings include a Thursday); the KIRIKO DIFF sign, the orange scarves, the fox
     that looks like a dog and Haechan holding the other end are story-w1 12/6 (Hyein only hints she's "got someone").
   Small inventions (Kat may change any): the movie in "strawberries" (a meteor film that is mostly about a divorce, on
     Hanni's laptop); the orange scarves knitted/cut from a fleece blanket from the Target on Erie Blvd; Hyein's line that
     the sign is "for the cameras, so you know where to look"; Jaemin measured at 12:40 a.m. in the Sigma living room because
     it's "the only hour he isn't at brunch", Jeno reading the numbers back wrong on purpose, Hyein's measuring notebook
     (a green Moleskine, "MEASUREMENTS - DO NOT SIT ON"); the peonies and "the playlist" among Mark's fall gestures; Jaemin and the city councilman's block party; the lab door code Olivia knows (Doyoung's birthday) and Doyoung
     asleep on the couch in the lab's back office; Haerin's notebook on everyone ("LEE, S."), its entry "lies about being
     fine. badly."; Hanni's train home Sunday at 11:40 from the Regional Transportation Center; Hyein's spring portfolio
     review ("lookbook" photos for it); the second landing's sconce being the last light left on in the stairwell.
   Art ideas (one line each; the lead decides):
     - strawberries: Hanni and Solar under one duvet on Solar's bed, laptop glow, strawberry pajamas, Solar's coat still zipped.
     - the fox sign: Hyein on the floor in glitter to the elbows, the KIRIKO DIFF board, a fox that is plainly a dog.
     - for the artist: Jaemin on a coffee table with his arms out in a T, Hyein's tape measure, Solar holding the notebook.
     - haerin's laugh: Haerin with her head back laughing, Olivia frozen mid-reach for her phone, two cups on the café table.
     - lookbook: Solar in the wine-red silk on the first flight of the Alpha stairs, the second landing empty and lit above her.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  const B = (R.bonds ||= {});
  // people.js assigns B.<id> = {...} outright. If it hasn't loaded yet (the checker loads files alphabetically, so this one
  // comes first), hold the bond on an accessor that merges this week's hangouts into whatever people.js assigns later.
  const add = (id, role, list) => {
    if (B[id]) { (B[id].hangouts ||= []).push(...list); return; }
    let v = { id, role, hangouts: [...list] };
    Object.defineProperty(B, id, { enumerable: true, configurable: true, get: () => v,
      set: o => { (o.hangouts ||= []).push(...v.hangouts); v = o; } }); // everything merged so far (the time pass: several files can hold one bond)
  };
  const BOTH = ['after', 'evening'];

  /* ── Hanni ── */
  add('hanni', 'friend', [
    { id: 'epi-r-hanni-strawberries', title: 'strawberries', hint: "There's a knock on your door at eleven. You didn't text anyone.",
      after: '12/3', until: '12/3', slots: ['late'], events: ['epi-r-confession'],
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { n: "She'd been home for an hour and she still had her coat on. Zipped. All the way to her chin, the way she'd zipped it standing up from a table across campus, and she was sitting on the end of her bed with her boots still on too, melting two small gray puddles into the rug, and she knew she should take them off, and she didn't, and that was where she was." },
      { n: "Her phone was face down on the desk. It had buzzed once, a little after ten, and she knew who it was from the length of the buzz, which was insane, which was true. She hadn't turned it over. She hadn't texted anyone. And somehow at five past eleven there was a knock anyway." },
      { n: "Not a knock, exactly. Two knuckles, soft, and then the door opening before she'd said anything, and Hanni, in the strawberry pajamas, with a laptop under one arm and a bag of the good popcorn, the white cheddar one she hid in the pantry behind the oat milk, under the other." },
      { s: 'hanni', f: 'neutral', t: "Scoot." },
      { n: "That was it. That was the whole explanation. Hanni didn't look at the coat, or the boots, or the puddles, or the phone face down on the desk. She looked at all of them at once, in one sweep, the way you'd look at a room you were about to clean, and then she sat down on the bed and opened the laptop on her knees and started scrolling like it was any Wednesday." },
      { s: 'hanni', f: 'happy', t: "Okay. I found the worst movie on the whole internet. It's about a meteor. Except it's not about the meteor, it's about a divorce, and the meteor is just sort of... there. In the background. Being a metaphor." },
      { s: 'solar', f: 'neutral', t: "That sounds terrible." },
      { s: 'hanni', f: 'happy', t: "It has a two percent. Two. I've never seen a two before. I want to know what a two feels like." },
      { choose: [
        { t: "(Take the coat off.)", then: [
          { n: "She unzipped it. It took two tries; her fingers had forgotten how. She shrugged it off her shoulders and let it fall behind her on the bed, and then she bent and undid the boots, one and then the other, and put them on the mat by the door like a person who lived here, and Hanni didn't say anything about any of it, just lifted the duvet on her side so there'd be somewhere to get in." },
          { bond: { hanni: 1 } }
        ] },
        { t: "(Leave it on.)", then: [
          { n: "She left it on. Hanni didn't comment. She just reached over, very matter-of-fact, and pulled the duvet up over both of them, coat and all, the way you'd tuck in a kid who'd fallen asleep in the car, and pressed play." }
        ] }
      ] },
      { n: "The movie was every bit as bad as promised. The meteor arrived in the first eight minutes and then nobody mentioned it for an hour while a man in a quarter-zip argued with his ex-wife about a lake house. A child actor delivered the line *Daddy, is the sky angry?* with the conviction of someone reading a cereal box." },
      { s: 'hanni', f: 'surprised', t: "Is the SKY angry?" },
      { s: 'solar', f: 'happy', t: "The sky's been angry since minute eight." },
      { s: 'hanni', f: 'happy', t: "The sky's been angry since minute eight and NOBODY in this family has looked up." },
      { n: "Solar laughed. It surprised her. It came out of her short and rough, like something with a corner on it, and Hanni heard the corner and didn't look at her, just pushed the popcorn an inch closer and kept her eyes on the screen." },
      { n: "She could have told her. That was the thing sitting in her chest the whole first hour, heavy and warm, like something swallowed too fast. She could have said it, right there, to the side of Hanni's face lit blue by a divorce and a meteor. *He recorded me. That night, in his room. He told me tonight.* Hanni would have held both her hands and said exactly the right thing and then, some time next week, out of love, told Hyein, because Hanni told Hyein everything the way other people breathed." },
      { n: "And then it would be a story. She'd watched what happened to stories on this campus. This one was still a file somewhere, and a drink on a table, and a boy with his hands flat on the wood. It was still hers. She held on to that and ate the popcorn." },
      { s: 'hanni', f: 'neutral', t: "You can tell me it's nothing, by the way." },
      { s: 'solar', f: 'serious', t: "...What?" },
      { s: 'hanni', f: 'neutral', t: "If you want. You can say it's nothing and I'll say okay. I'm just telling you the option's there. I'm not using it." },
      { n: "She still didn't look over. She said it to the man in the quarter-zip, who was crying in a canoe now. And Solar understood, slowly, that this was the question. That Hanni had walked down the hall at eleven at night in strawberry pajamas with the good popcorn specifically so she wouldn't have to ask one, and had built the whole thing around not asking it, and this was as close as she was going to let herself come." },
      { s: 'solar', f: 'sad', t: "It's not nothing." },
      { s: 'hanni', f: 'neutral', t: "Okay." },
      { n: "That was all. *Okay.* Not *what happened*, not *is it him*, not *do I need to kill someone.* Hanni nodded, once, at the screen, and reached over without looking and found Solar's hand on top of the duvet and held it, and they watched the meteor finally hit the lake house at one-forty in the morning, to swelling strings, while the whole family stood on the dock and looked, at last, up." },
      { n: "Neither of them said anything about the ending. Hanni fell asleep before the credits finished, sitting up, her head tipped against the wall, the laptop warm on both their knees. Solar didn't move it. She sat in the dark with the screen saver drifting colors across the ceiling and her hand still held, and somewhere across campus there was a file nobody had heard, and it was still hers, and so, apparently, was this." }
    ] },

    { id: 'epi-r-hanni-source', title: 'his source', hint: "Hanni is sitting on your floor at midnight with the face she makes before she apologizes for something.",
      after: '12/8', until: '12/15', slots: ['late'], events: ['epi-r-regionals-2'],
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-r-sisters' },
      { n: "Hanni was on the floor with her back against Solar's bed and her knees up and a mug of something gone cold between her socks, and she'd been there for twenty minutes saying things about the formal and the weather and Jaemin's run of show, and none of it was why she'd come in. Solar could tell from the mug. Hanni didn't make herself a drink to sit with when she meant to stay five minutes." },
      { s: 'hanni', f: 'neutral', t: "He hasn't asked me anything." },
      { s: 'solar', f: 'neutral', t: "Who?" },
      { s: 'hanni', f: 'serious', t: "Mark. Since we got back. Not one thing. He said hi to me in the dining hall on Monday and asked how my finals were looking and then he took his tray and went and sat with Jisung. That's it. That's the whole conversation." },
      { n: "She turned the mug around in her hands, a full circle, and then another." },
      { s: 'hanni', f: 'sad', t: "All fall he asked me things. Like, every day. What you drink at night. If you were outdoorsy. What color you'd pick if you had to pick a color. What you were like when you were sad. I thought it was cute, Sol. I thought, look at him, he's doing homework on her. I used to tell Hyein about it like it was a show we were watching." },
      { s: 'hanni', f: 'sad', t: "And now he doesn't ask me anything. And that's how I know. Every single question was for that. The flowers were mine. The refreshers were mine. That thing with the playlist was mine. He'd come and get something from me in the morning and give it to you in the afternoon with a bow on it." },
      { n: "Solar remembered the flowers. Peonies, in November, which nobody could get in November, and she'd stood in the Alpha kitchen holding them and thinking *how did he know,* with her whole chest warm, and that warm had been Hanni's. Borrowed off her at breakfast. Returned with interest." },
      { s: 'hanni', f: 'serious', t: "So I'm sorry. I need to say it properly. I'm sorry I gave him you." },
      { n: "It came out finished, like she'd been practicing it on the walk down the hall. She looked up at Solar from the floor with her chin set, ready to be told off, almost hoping for it, the way you'd hold your hand out for a ruler." },
      { choose: [
        { t: "You're apologizing for the wrong thing.", then: [
          { s: 'hanni', f: 'surprised', t: "...What's the right thing?" },
          { s: 'solar', f: 'neutral', t: "There isn't one. Not for you. You told someone who said he liked me what I like. That's not a crime, Hanni. That's being my friend out loud." }
        ] },
        { t: "(Get down on the floor with her first.)", then: [
          { n: "She slid off the bed and sat down next to her, shoulder to shoulder against the frame, so Hanni wouldn't have to look up at her to hear it." },
          { s: 'solar', f: 'neutral', t: "That's the wrong apology. You know that, right? You're saying sorry for the one part that was actually nice." },
          { bond: { hanni: 1 } }
        ] }
      ] },
      { s: 'hanni', f: 'sad', t: "It wasn't nice, though. He used it." },
      { s: 'solar', f: 'serious', t: "He used it. You didn't. Those are two different people." },
      { n: "She knew this shape. She'd been raised inside it. Her father had a way of making the people around him carry the weight of what he'd decided, so smoothly that by the end of a dinner some junior partner would be apologizing for the very thing that had been done to him. You didn't notice it happening. That was the point of it. You just went home holding something that wasn't yours and wondered why your arms hurt." },
      { s: 'solar', f: 'neutral', t: "And you didn't make me like him. I want that on the record. I liked him on the first day. In August. He had a coffee and a whole easy afternoon and he hadn't asked you a single thing yet. That part was mine." },
      { n: "Hanni looked at her for a long moment. Something went across her face, relief and then something smaller and sadder underneath the relief, because Solar had just taken the one thing Hanni had come down the hall to put down and put it back in her own hands, and Hanni could see exactly what it weighed." },
      { s: 'hanni', f: 'sad', t: "That's worse, kind of." },
      { s: 'solar', f: 'neutral', t: "Yeah. It's mine, though." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'hanni', f: 'neutral', t: "You know he's never asked me one thing about you? Haechan. Not once. Not your drink, not your color, nothing. I used to think it meant he didn't care." },
        { s: 'hanni', f: 'happy', t: "Now I think it means he just already knows, and it's so much more annoying." },
        { n: "Solar didn't answer that. She didn't have to. Her face did something, apparently, because Hanni looked at it and laughed into her mug, the first real laugh of the night." }
      ], else: [{ ifEpiRoute: 'minji', then: [
        { s: 'hanni', f: 'neutral', t: "Minji asks you. That's the thing I noticed. If she wants to know something about you she just asks you, to your face, and then she waits for the answer. It's so weird. It's so nice." }
      ], else: [
        { s: 'hanni', f: 'serious', t: "No more boys getting their homework off me. New rule. If anyone wants to know what you drink, they can ask you, and you can lie to them yourself." },
        { s: 'solar', f: 'happy', t: "I'm a very good liar." },
        { s: 'hanni', f: 'neutral', t: "I know you are, babe. That's why it should be you." }
      ] }] },
      { n: "They stayed on the floor until the radiator gave up for the night, which in that house was about one. Hanni's mug was empty, though Solar never saw her drink from it. At the door she stopped with her hand on the frame." },
      { s: 'hanni', f: 'neutral', t: "He said sorry to you. At Regionals. Didn't he. I saw him at the back." },
      { s: 'solar', f: 'neutral', t: "He did." },
      { s: 'hanni', f: 'serious', t: "Good. Then he can carry it. I've been carrying it since October and I'm tired, Sol. My arms hurt." },
      { n: "She went. Solar sat on the floor a while longer with her back against the bed, looking at the place on the rug where the mug had been, and thought that Hanni had never once in her life used a sentence like that without meaning every part of it, and that this was what made her so easy to borrow from, and so impossible to replace." }
    ] },

    { id: 'epi-r-hanni-suitcases', title: 'two suitcases', hint: "Hanni's suitcase is open in the hall between your doors, and she's sitting on it.",
      after: '12/20', until: '12/20', slots: ['evening'], events: ['epi-r-porch'],
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Evening', scene: [
      { music: 'epi-r-sisters' },
      { n: "Hanni's suitcase was open in the hall, halfway between their two doors, because she said it packed better on neutral ground, and she was sitting on the lid of it trying to make it close while it argued back. Solar's was open on her own bed behind her, half full and very neat, every corner folded the way her mother had taught her to fold things for a car that somebody else had booked. The house had gone quiet around them in the way it only went quiet at the end of a term, doors left open on stripped beds, somebody's forgotten shower caddy in the bathroom, snow coming down past every window at once." },
      { s: 'hanni', f: 'serious', t: "Okay. Last run. Before I'm in my mom's kitchen with no backup." },
      { s: 'solar', f: 'neutral', t: "Go." },
      { s: 'hanni', f: 'serious', t: "The cabin was in the Adirondacks. It belonged to Hyein's cousin's friend's uncle, Mr. Gerald Lodge, One Lake Road. There was no signal and no heat after ten. Hyein cried twice. We played a lot of cards. Ask me something." },
      { s: 'solar', f: 'neutral', t: "What kind of cards?" },
      { s: 'hanni', f: 'flustered', t: "...Cards! The normal ones! With the... hearts!" },
      { n: "She put her face in her hands on top of the suitcase. Solar sat down on her own doorframe and looked at her, and felt the thing come up in her that always came up, the part of her that knew exactly how this was done, that had grown up at tables where lies were set like silverware." },
      { choose: [
        { t: "Don't explain. Liars explain. Say \"cards\" and pass her the salt.", then: [
          { s: 'hanni', f: 'surprised', t: "Pass her the salt?" },
          { s: 'solar', f: 'neutral', t: "Give her hands something to do. The more you say, the more there is to check. You say *cards*, you pass the salt, you ask about her sister. She'll forget she asked." },
          { n: "Hanni stared at her with a kind of awed horror, and then got her phone out and wrote *SALT* in her notes, in capitals, and Solar watched her do it and felt it land somewhere under her sternum, warm and heavy, the way it always did when she was good at this." },
          { stat: { charm: 1 } }
        ] },
        { t: "If it gets too hard, tell her you can't talk about it. That one's true.", then: [
          { s: 'hanni', f: 'sad', t: "She'll think something bad happened." },
          { s: 'solar', f: 'neutral', t: "Something did. Just not to you, and not the kind she'd think." },
          { n: "Hanni looked at her for a long second over the lid of the suitcase. Then she nodded, slowly, like someone filing a thing she'd take out later and look at properly, in a kitchen, at the end of a long day." },
          { bond: { hanni: 1 } }
        ] }
      ] },
      { ifFlag: 'epi-r-travel-yes', then: [
        { s: 'hanni', f: 'neutral', t: "Your car's at nine?" },
        { s: 'solar', f: 'neutral', t: "Nine. You?" },
        { s: 'hanni', f: 'neutral', t: "Train's eleven-forty. So I'll be up. I'll wave. I'll wave so hard. Your brother's going to think I'm unwell." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "Did you ever tell Ms. Han about the car?" },
        { s: 'solar', f: 'neutral', t: "Jaehyun did. Sort of." },
        { s: 'hanni', f: 'happy', t: "Your brother lied to your dad's assistant? For you? Oh, I'm putting that in the group chat. Not now. In like a year." }
      ] },
      { n: "The suitcase finally closed. Hanni sat on it a while longer anyway, like it might reconsider, and looked down the hall at the window at the end, the snow in it, the dark coming down early over Walnut." },
      { ifEpiRoute: 'cover', then: [
        { n: "Her boots were already by her door. Hyein's were next to them. Three pairs, Solar's included, lined up on the mat in the hall like they were waiting for a bus, because at some point this afternoon Hanni had decided where everyone's boots lived tonight and nobody had argued." },
        { s: 'hanni', f: 'neutral', t: "So. Your roof. We're coming. I've decided I like roofs now." },
        { s: 'solar', f: 'happy', t: "You hate heights." },
        { s: 'hanni', f: 'serious', t: "I hate heights a normal amount. See you up there." }
      ] },
      { ifFlag: 'epi-r-told-girls', then: [
        { n: "Hyein's arm, the list on it, had been washed off in the shower and then written back on, in the same order, in Hanni's small careful capitals. Solar had seen it at breakfast. *1. nobody alone at midnight.* Nobody had said a word about it." }
      ], else: [{ ifFlag: 'epi-r-lied-girls', then: [
        { n: "*You knock,* Hanni had said, on Thursday night, at her door. *You don't text, you knock.* She hadn't said it again since. She hadn't needed to." }
      ] }] },
      { n: "Hanni stood up. She looked at Solar in the doorframe, and her mouth started to make a shape, and Solar watched it. She knew the shape. It was the first word of *be careful tonight*, the *b* already there on her lip, and she watched Hanni catch it and hold it, the way you'd catch a glass going off a counter, and set it down very carefully, somewhere out of sight." },
      { s: 'hanni', f: 'happy', t: "Text me when you get home tomorrow." },
      { s: 'solar', f: 'neutral', t: "I will." },
      { s: 'hanni', f: 'serious', t: "Like, the second the car stops. Before you even say hi to your mom. I don't care. I'll know if you didn't." },
      { s: 'solar', f: 'happy', t: "You won't know." },
      { s: 'hanni', f: 'serious', t: "I always know." },
      { n: "She hugged her then, hard, over the closed suitcase, so that Solar had to lean, and held on a beat longer than a hug before a train needed to be, and said absolutely nothing at all, so loudly that Solar heard every word of it." }
    ] }
  ]);

  /* ── Hyein ── */
  add('hyein', 'friend', [
    { id: 'epi-r-hyein-foxsign', title: 'the fox sign', hint: "Hyein's light is still on. There's glitter under the door.",
      after: '12/3', until: '12/3', slots: ['late'], events: ['epi-r-confession'],
      place: "Syracuse · Alpha Phi House · Hanni and Hyein's Room", time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { n: "There was glitter under Hyein's door. Actual glitter, orange, a thin bright tide of it pushing out into the hall carpet, and Solar stood there with her coat still zipped and her hands in her pockets and looked at it for a while, because it was the first thing since seven o'clock that had made any sense." },
      { n: "She knocked. She hadn't meant to. Her hand did it." },
      { s: 'hyein', f: 'surprised', t: "Come in, don't step on the K." },
      { n: "Hyein was on the floor in the middle of the room on her knees on a trash bag, glitter to the elbows, a sheet of white poster board in front of her the size of a coffee table. Hanni was asleep in the far bed with her back to the lamp and a pillow over her head, the sleep of a woman who had given up on this hours ago. On the poster board, in enormous careful letters still wet with glue, it said *KIRIKO DI*, and Hyein was holding the second *F* in a pair of tweezers like a surgeon." },
      { s: 'hyein', f: 'serious', t: "It says KIRIKO DIFF. Do you know what that means? I didn't know what that means. Chenle had to explain it to me. He made a diagram." },
      { s: 'solar', f: 'neutral', t: "It means I'm better than their Kiriko." },
      { s: 'hyein', f: 'happy', t: "It means you're better than their Kiriko. In glitter. For four hours. On a livestream." },
      { n: "Solar sat down on the edge of Hyein's bed, still in her coat, and nobody asked her why she was still in her coat. Hyein just pushed a jar of orange glitter across the floor toward her with one sticky foot, which was an invitation and a job at the same time." },
      { n: "In the corner of the board, in pencil, there was an animal." },
      { s: 'solar', f: 'neutral', t: "What's that?" },
      { s: 'hyein', f: 'serious', t: "That's the fox." },
      { s: 'solar', f: 'neutral', t: "...Okay." },
      { s: 'hyein', f: 'serious', t: "It's Kiriko's fox. The spirit one. I've drawn it nine times. That's the best one. Don't look at it like that. I can see you looking at it like that." },
      { choose: [
        { t: "It's a great fox.", then: [
          { s: 'hyein', f: 'sad', t: "You're lying. You're doing your dad's voice. I've heard you do your dad's voice on the phone with Ms. Han." },
          { s: 'solar', f: 'happy', t: "It's a great... animal." },
          { s: 'hyein', f: 'happy', t: "THANK you. It's an animal. Nobody can take that away from it." }
        ] },
        { t: "(Pick up a pencil and fix the ears.)", then: [
          { n: "She got down on the trash bag next to her, coat and all, and took the pencil and made the ears a little taller and a little sharper, carefully, and sat back, and they both looked at it." },
          { s: 'hyein', f: 'neutral', t: "...Now it's a taller dog." },
          { s: 'solar', f: 'happy', t: "It's a taller dog." },
          { n: "Hyein laughed so hard she had to put her forehead down on the clean part of the board, and Hanni said *I will kill you both* from under her pillow, and Solar laughed too, the first time all night, and it came out wrong and cracked and then, after a second, right." },
          { bond: { hyein: 1 } }
        ] }
      ] },
      { n: "They glittered for an hour. Hyein did the letters, Solar did the edges, which was a job you couldn't get wrong, which was why Hyein gave it to her. On the desk under the lamp were three scarves Hyein had cut and hemmed out of an orange fleece blanket from the Target on Erie Boulevard, one each, in the program's exact shade, matched against a photo of the jersey on her phone." },
      { s: 'solar', f: 'neutral', t: "You know it doesn't change anything. The sign. It's a really good sign. But it doesn't change the match." },
      { n: "Hyein stopped. She put the tweezers down. She looked at Solar across the board with glitter on her eyelid, very serious, the way she got serious about fabric and almost nothing else." },
      { s: 'hyein', f: 'serious', t: "The match is yours. I can't do anything about the match. I can't heal people, I can't throw the little... the cleanse thing. You go up on that stage and it's just you and four headsets and I sit there." },
      { s: 'hyein', f: 'serious', t: "The sign's ours. It's so you know where to look. You're going to be up there and it's going to be loud and bright and you're going to look out into all those people, and you're going to see a giant orange KIRIKO DIFF with a dog on it, and you're going to know exactly where we are. The whole time. Even if you lose. Especially if you lose." },
      { s: 'hyein', f: 'happy', t: "That's what a sign is for. It's not for the match. It's for the looking." },
      { n: "Solar didn't say anything for a while. She held the glitter jar in both hands and felt something come up in her throat, hot and sudden, from wherever she'd been keeping the whole evening, and she pushed it back down where it lived, and it went, mostly." },
      { n: "She hadn't told Hyein anything. She wasn't going to. Hyein hadn't asked. Hyein, who asked everything, had looked at the coat and the zip and the face above it and decided, somewhere around the second F, that tonight was a glitter night and not a questions night, and Solar had never once in her life been so grateful to be handed a jar of something." },
      { s: 'hyein', f: 'neutral', t: "Also I need someone to hold the other end. It's huge. I've got someone." },
      { s: 'solar', f: 'neutral', t: "Who?" },
      { s: 'hyein', f: 'happy', t: "Don't ask. It's a surprise. He doesn't know yet either." },
      { n: "At one, Hyein shook the last loose glitter off onto the trash bag and held the board up to the lamp, and the whole thing lit at once, orange and ridiculous and enormous, the fox in the corner looking up out of it with its taller ears and its kind, stupid, unmistakably canine face." },
      { s: 'hyein', f: 'happy', t: "There. Now you'll find us." }
    ] },

    { id: 'epi-r-hyein-artist', title: 'for the artist', hint: "Hyein has a tape measure, a notebook and an appointment at Sigma at 12:40 a.m. She needs an assistant.",
      after: '12/9', until: '12/13', slots: ['late'],
      place: 'Syracuse · Sigma Chi House · Living Room', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { n: "Jaemin had told her twelve-forty because, he said, it was the only hour of the day he wasn't at brunch, and Hyein had written *12:40 AM* in her phone and then on her hand and then, to be sure, on a sticky note on Solar's door, with *bring a pen* underneath it, underlined." },
      { n: "The Sigma living room at that hour was a room recovering from itself. Cups on the mantel. A sock on the lampshade that nobody claimed. Jeno was in the kitchen doorway eating cereal out of the box. Renjun was on the stairs with a cigarette he wasn't allowed to light inside, holding it like a pen, watching with the expression of a man who'd been promised a show." },
      { n: "And Jaemin was standing on the coffee table, because Hyein had told him to, in a T-shirt and sweatpants, his arms out in a T, looking delighted." },
      { s: 'jaemin', f: 'happy', t: "This is the most important I've ever felt. I'm being measured by an artist." },
      { s: 'hyein', f: 'neutral', t: "Arms down. Relaxed. Like a person." },
      { n: "Solar had been expecting the usual Hyein. The Hyein who talked through dentist appointments and fire drills, who'd narrate the tape measure, who'd stick him with a pin on purpose and say *structural.* That wasn't who climbed onto the arm of the couch with the tape around her neck. That Hyein went quiet. Not sad quiet; working quiet. She put the tape across his shoulders, point to point, and read the number without looking at Solar, and said it the way a nurse says your blood pressure." },
      { s: 'hyein', f: 'neutral', t: "Shoulder, eighteen and a quarter. Write it." },
      { n: "Solar wrote it. The notebook was green and small and had *MEASUREMENTS - DO NOT SIT ON* across the cover in silver marker, and the first page already had his name at the top and a column of words down the side in Hyein's handwriting: chest, waist, seat, sleeve, back length, nape to waist, bicep, wrist. Everything in a fixed order. A system. She'd never seen Hyein have a system." },
      { s: 'hyein', f: 'neutral', t: "Chest. Breathe normally. You're holding it." },
      { s: 'jaemin', f: 'flustered', t: "I'm not holding it." },
      { s: 'hyein', f: 'neutral', t: "You're holding it. You want a bigger number. I'm going to make you a jacket for the chest you have, not the chest you want." },
      { n: "Renjun made a small sound on the stairs that might have been the start of a laugh, and covered it. Jeno read the number off over Hyein's shoulder, wrong, on purpose, *forty-six,* and Hyein said *forty-one* without turning round, and Jeno put his hand on his heart like he'd been shot." },
      { s: 'jeno', f: 'happy', t: "She didn't even look." },
      { s: 'hyein', f: 'neutral', t: "I don't have to look. I have a tape." },
      { s: 'jaemin', f: 'happy', t: "Okay, small note. For the collar. I'm thinking higher. Like, dramatic. Like a vampire who went to business school." },
      { n: "Hyein stopped. She looked up at him from the arm of the couch, and Solar watched her not do the thing, the Hyein thing, the *oh my GOD Jaemin*, and do something else instead." },
      { s: 'hyein', f: 'neutral', t: "We can go higher. That's a change from the quote. Twenty percent on the collar work. I'll put it on the invoice." },
      { s: 'jaemin', f: 'surprised', t: "...You have an invoice?" },
      { s: 'hyein', f: 'neutral', t: "I have an invoice." },
      { choose: [
        { t: "(Write CHANGE: COLLAR, +20% in the notebook, very neatly.)", then: [
          { n: "She wrote it. Very neat, the thank-you-card handwriting, the one she'd been taught to use on people who could do things for her father, and turned the notebook so Jaemin could see it from the coffee table. He read it, upside down, and looked at her, and looked at Hyein, and put his hands up." },
          { s: 'jaemin', f: 'sad', t: "It's a cartel. I'm being shaken down by a cartel at one in the morning in my own living room." },
          { s: 'hyein', f: 'neutral', t: "Sleeve. Arm out." },
          { stat: { proficiency: 1 } }
        ] },
        { t: "(Don't say anything. Watch her.)", then: [
          { n: "She didn't say anything. She held the pen and watched Hyein run the tape down the length of his arm, shoulder point to wrist bone, with the elbow bent, the way you were apparently supposed to, and pinch the end of it flat with one thumb and read it, and she thought that she had known Hyein for a whole semester and a whole other year and had never once seen her like this. Sure. Not loud-sure. Quiet-sure. A person in her own country." },
          { bond: { hyein: 1 } }
        ] }
      ] },
      { s: 'jaemin', f: 'neutral', t: "Okay. Fine. Higher collar, plus twenty. What do I get for twenty percent?" },
      { s: 'hyein', f: 'neutral', t: "You get it right the first time." },
      { n: "That was the end of the negotiation. Jaemin, who'd once talked a Syracuse city councilman into letting Sigma close a street for a block party, opened his mouth and found he had nothing, and closed it, and stood on his coffee table in his socks and let her measure his wrist." },
      { n: "It took forty minutes. Twenty-two numbers. At the end Hyein took the notebook back from Solar and read every one of them back in order, out loud, and Solar checked them against what she'd written, and they matched, and Hyein closed it and put it in the inside pocket of her coat and zipped the pocket, like a key." },
      { n: "Then, on the porch, in the cold, with the door shut behind them and the Sigma house's one porch light buzzing over their heads, she turned round and grabbed Solar by both arms and screamed, completely silently, with her whole face, for about five seconds." },
      { s: 'hyein', f: 'happy', t: "I have an INVOICE." },
      { s: 'solar', f: 'happy', t: "You have an invoice." },
      { s: 'hyein', f: 'flustered', t: "I made it at four o'clock today in a template. It has a LOGO, Sol. It's a needle. I drew it. It looks like a dog." },
      { n: "They walked home through the snow with their arms linked, and Hyein talked the whole way, about the velvet and the lining and whether you could charge a man extra for being tall, all of it pouring out at once like it had been backed up behind a dam for forty minutes, and Solar let it pour, and didn't say the thing she was thinking, which was that she'd just watched her best friend be good at her job, and it had been one of the nicest things she'd ever seen anybody do in a room." }
    ] },

    { id: 'epi-r-hyein-lookbook', title: 'lookbook', hint: "Hyein has the wine-red dress over her arm and her camera round her neck. She missed golden hour.",
      after: '12/20', until: '12/20', slots: ['evening'], events: ['epi-r-porch'],
      place: 'Syracuse · Alpha Phi House · Stairs', time: 'Evening', scene: [
      { music: 'epi-r-snow' },
      { n: "Hyein had wanted golden hour. Golden hour in Syracuse in December was about four-fifteen and lasted eleven minutes, and she'd spent it sitting on her own suitcase while it fought her, and by the time it closed the window at the end of the hall was blue and then black and full of snow. So she'd turned off every light on the stairs except one." },
      { s: 'hyein', f: 'serious', t: "It's not golden hour. It's sconce hour. Sconce hour is very in. Put it on." },
      { n: "*It* was the dress. The wine-red silk, bias-cut, the sleeves, the back that was mostly not there, back on its hanger and steamed since last night as if last night had never touched it. Hyein had her camera round her neck, the real one, borrowed from the department with a form that said *portfolio review, spring,* and she'd already decided everything: the angle from the hall below, the banister as a line, the one lit sconce up on the second landing throwing its warm small light down the stairs like a hand." },
      { ifEpiRoute: 'haechan', then: [
        { s: 'hyein', f: 'happy', t: "Before you go up. Did he undo the top button. Yes or no. You don't have to say anything else. I'm asking as the designer." },
        { s: 'solar', f: 'flustered', t: "Hyein." },
        { s: 'hyein', f: 'happy', t: "That's a yes. That's a yes with a face. I'm putting it in my artist's statement." }
      ], else: [{ ifEpiRoute: 'minji', then: [
        { s: 'hyein', f: 'neutral', t: "Minji already has you in it. In motion. At midnight. I'm not competing with that. I just want it standing still for once." }
      ], else: [
        { s: 'hyein', f: 'happy', t: "Then all three of us after. On the stairs. In wine. Hanni's setting the timer. Hanni doesn't know how to set the timer. It's going to be a disaster." }
      ] }] },
      { n: "Solar changed in her room and came back out barefoot, because Hyein said shoes would ruin the line, and the cold of the hall floor came straight up through her soles. The silk was cold too and then not cold. She stood at the bottom of the stairs with her hand on the newel post and looked up at the light." },
      { s: 'hyein', f: 'neutral', t: "Okay. Go up to the landing. Second one. Stand under the sconce, turn your back to me, look over your shoulder. That's the shot. The back's the whole dress." },
      { n: "She went up. One flight. The first landing, the photo wall, the stair that talked. She got to the bottom of the second flight and her foot stopped on the first step of it." },
      { n: "It didn't ask her. It just stopped. Above her, under the warm small light, was the second landing, the place where the house turned on itself, the banister she'd had her hand on on Tuesday night at midnight with an empty glass when it had kept going. Up past where the house had a roof. Green coming down from nowhere, and four people and a dog on the stairs, fighting, and nobody able to see her." },
      { n: "It was just a landing. Danielle's door at the end of it, shut, a line of light under it. A radiator. A framed composite from 2019. There were exactly as many stairs as there had always been. She'd counted." },
      { ifFlag: 'epi-r-told-girls', then: [
        { n: "Hyein saw. Of course Hyein saw; she was looking through a lens at her, which was the only time Hyein ever fully stopped talking. She lowered the camera. She didn't ask what was wrong. She knew. She'd heard all of it on Thursday night, with a chair under the door handle, *past the second landing into somewhere green,* and she'd written it down in her head the way she wrote down twenty-two numbers." },
        { s: 'hyein', f: 'neutral', t: "Actually, it's better from there. Stay where you are. The light reaches. I was wrong about the landing. I'm never wrong, so remember this." }
      ], else: [
        { n: "Hyein saw. Of course Hyein saw; she was looking at her through a lens, which was the only time Hyein ever fully stopped talking. Whatever she knew, or guessed, or had decided on Thursday morning at the bottom of these same stairs, she didn't put it into a question. Hyein, who asked eleven questions a night. She lowered the camera an inch and looked at the step where Solar's foot had stopped, and then at Solar, and back." },
        { s: 'hyein', f: 'neutral', t: "...You know what, it's better from there. Stay. The light reaches. I'm changing my whole concept and I'm not taking questions." }
      ] },
      { choose: [
        { t: "(Stay on the step. Turn your back to her and look over your shoulder.)", then: [
          { n: "She stayed. She turned, one hand on the banister, and looked back down the stairs at Hyein over her own bare shoulder, and the sconce caught the silk from above and the whole back of the dress went the color of wine held up to a lamp, and the camera clicked, and clicked, and Hyein said *don't move, don't move, oh my god, don't move* in a whisper, like she was trying not to wake something." },
          { bond: { hyein: 1 } }
        ] },
        { t: "(Go up anyway. Stand under the light.)", then: [
          { n: "She went up. Three steps, four, the landing, the light. Her hand was very tight on the banister and the banister stayed exactly where a banister should be, and ended exactly where it should end, and she turned round under the sconce and looked down at Hyein over her shoulder, and she must have looked like what she was, a girl standing very still on purpose, because Hyein didn't take the picture for a long second. Then she did." },
          { n: "She took it twice more and then said *okay, come down, that's the one,* faster than she needed to, and came halfway up the stairs to meet her, and took her hand for the last few steps like it was part of the dress." },
          { stat: { courage: 1 } }
        ] }
      ] },
      { n: "Afterward they sat on the bottom step, Solar in the silk and Hyein's hoodie over it, Hyein scrolling back through the shots on the camera's little screen with her knees pulled up. In every one of them, the second landing was there at the top of the frame, empty and lit, a warm small square of nothing." },
      { s: 'hyein', f: 'happy', t: "I'm calling the series *last light.* Because it was literally the last light I had on. Deep, right? The reviewers are going to think I'm deep." },
      { s: 'solar', f: 'neutral', t: "You are deep." },
      { s: 'hyein', f: 'serious', t: "I know. I just don't like people finding out." },
      { ifEpiRoute: 'cover', then: [
        { s: 'hyein', f: 'happy', t: "Okay. Boots on at eleven-thirty. Your roof. I'm bringing the camera. Not for the portfolio. For us." }
      ] },
      { n: "She put the lens cap back on, and leaned her head on Solar's shoulder, just for a second, and said nothing else, and the snow came down past the window at the end of the hall, and the light on the landing stayed on above them, because neither of them had gone up to turn it off." }
    ] }
  ]);

  /* ── The team (new bond; display name "The team") ── */
  add('olivia', 'friend', [
    { id: 'epi-r-team-advance', title: 'we advance', hint: "The team chat says WE ADVANCE forty times. Olivia says the lab door code still works.",
      after: '12/8', until: '12/10', slots: ['late'], events: ['epi-r-regionals-2'],
      place: 'Syracuse · eSports Lab', time: 'Late Night', scene: [
      { music: 'epi-r-team' },
      { phone: [
        { from: 'olivia', t: 'LAB. NOW. bring snacks' },
        { from: 'olivia', t: 'doyoung said do not open the game. i am not opening the game. i am opening the VOD' },
        { from: 'chenle', t: "that's the game" },
        { from: 'olivia', t: 'the code is his birthday. he will never change it. he loves his birthday' }
      ], contact: 'the team' },
      { n: "The Extracurricular Building at midnight was dark on every floor but one, and the one was the lab, and the lab was loud. Olivia had found the projector. Nobody had ever found the projector; it lived on a cart in the back office under a box of spare mousepads, and Olivia had found it and wheeled it out and aimed it at the long white wall, and on the wall, eight feet tall, was the final. Third map. Paused on the moment before the Rush." },
      { n: "The trophy was on the desk in front of the wall in a nest of Olivia's scarf, the way you'd put down something that might get cold." },
      { s: 'olivia', f: 'happy', t: "SHE'S HERE. The woman. The Kiriko. Sit. Sit in the chair of honor. It's the one that doesn't squeak." },
      { s: 'haerin', f: 'neutral', t: "They all squeak." },
      { s: 'olivia', f: 'serious', t: "It squeaks LESS, Haerin." },
      { n: "Chenle was at his own station with a notebook, because of course he was, and a bag of the dried mango he ate when he was trying not to eat something worse. Minji was on the floor against the wall under the projector beam, half in it, with her cap on frontwards and her camera in her lap with the lens cap on, not filming, just there, the light of the paused final across her knees. Haerin had a hoodie pulled down over both hands and a cup of tea from somewhere that wasn't the lab." },
      { s: 'olivia', f: 'happy', t: "Okay. Okay okay okay. I'm going to play it. And nobody talks. Except me. I'm doing commentary." },
      { n: "She played it. She did commentary. It was the worst commentary in the history of the sport, mostly screaming, occasionally *LOOK AT HER,* once just a long high noise as the payload rolled the last six meters with her own character standing on it, and Chenle, in the background, very quietly, kept correcting her." },
      { s: 'chenle', f: 'neutral', t: "That wasn't a flank. That was a rotation. A flank implies they didn't see it coming. They saw it coming. They just couldn't do anything about it." },
      { s: 'olivia', f: 'happy', t: "THAT'S WORSE FOR THEM, CHENLE." },
      { s: 'chenle', f: 'happy', t: "Yes. That's the point. I'm agreeing with you more precisely." },
      { n: "On the wall, eight feet tall, Solar watched herself throw the Rush. She hadn't seen it like this. The fox-fire corridor opening across the whole white wall, and the five of them going down it, and the little nameplate in the corner of the broadcast that said her name and nothing else. It looked like somebody who knew exactly what she was doing. She didn't know how she felt about that. She sat in the chair that squeaked less and felt it anyway." },
      { s: 'olivia', f: 'happy', t: "Speech." },
      { s: 'solar', f: 'surprised', t: "What?" },
      { s: 'olivia', f: 'happy', t: "SPEECH. You didn't do one. At the thing. You just stood there and looked at your shoes and then you went and talked to a boy at the back. We advance, Solar. We go to NATIONALS. In the SPRING. People give speeches." },
      { choose: [
        { t: "(Stand up and give one.)", then: [
          { n: "She stood up. Into the projector beam, by accident, so that the frozen final went across her face and her shirt and her whole front, a wash of orange and blue and the broadcast's corner graphic sitting on her shoulder like a badge." },
          { s: 'solar', f: 'happy', t: "Thank you to Doyoung, who's going to kill us. Thank you to Chenle, who called every rotation. Thank you to Haerin, who tracked the beat for six hours and said eleven words. Thank you to Minji." },
          { n: "She stopped there. Minji, on the floor, looked up at her, under the light, and didn't say anything, and then looked down at her camera and smiled at the lens cap." },
          { s: 'solar', f: 'happy', t: "And thank you to Olivia, who stood on the payload screaming, and who has taken our trophy to Econ." },
          { s: 'olivia', f: 'sad', t: "Three times. You only know about one." },
          { bond: { olivia: 1 } }
        ] },
        { t: "Haerin should give it.", then: [
          { n: "Every head turned to Haerin. Haerin, in the hoodie, with the tea, looked back at all of them with the level face she gave a support ultimate she'd just seen come up." },
          { s: 'haerin', f: 'neutral', t: "We won." },
          { n: "She took a sip of tea." },
          { s: 'haerin', f: 'neutral', t: "End of speech." },
          { n: "Olivia screamed like she'd been handed a live animal, and Chenle wrote it down in his notebook, *HAERIN: we won. 12/9* or whatever the night was, and Solar laughed so hard the chair squeaked, which proved Haerin right about the chairs, which Haerin also noted." },
          { stat: { charm: 1 } }
        ] }
      ] },
      { n: "At twenty to one the back office door opened, and Doyoung stood in it in yesterday's hoodie with his hair flat on one side and a crease from a couch cushion down his face, and every one of them froze where they were, in the light of a final he'd told them in writing not to open." },
      { n: "He looked at the wall. He looked at the trophy in its scarf. He looked at the five of them." },
      { s: 'doyoung', f: 'serious', t: "Back it up. Twelve seconds." },
      { n: "Olivia, with shaking hands, backed it up twelve seconds. Doyoung came and stood behind Solar's chair with his arms folded and watched the Rush go out across the wall one more time, and didn't say anything at all until it was over, and then, still without saying anything, he went back into the office and shut the door." },
      { n: "Thirty seconds later the light under the door went off. Haerin looked at it, and then at the rest of them." },
      { s: 'haerin', f: 'neutral', t: "He sleeps here." },
      { s: 'olivia', f: 'surprised', t: "He SLEEPS here?" },
      { s: 'chenle', f: 'neutral', t: "Since October. There's a toothbrush." },
      { n: "They watched it four more times, quietly, so as not to wake him, Olivia doing her commentary in a whisper that was somehow louder than her talking voice, and at some point Solar realized she hadn't checked the time once since she sat down, and didn't, and the trophy sat warm in its scarf on the desk in front of the long white wall, and the five of them sat in the light of the best day of their lives, eight feet tall, on a loop." }
    ] },

    { id: 'epi-r-team-haerin', title: "haerin's laugh", hint: "Olivia and Haerin have the window table on Marshall Street. Haerin has a notebook you've never seen her open.",
      after: '12/10', until: '12/14', slots: BOTH, events: ['epi-r-regionals-2'],
      place: 'Syracuse · Marshall Street · Café', time: 'Evening', scene: [
      { music: 'epi-r-team' },
      { n: "The window table at the café on Marshall Street had been Olivia's since about four, and by the time Solar came in out of the snow it looked like it: a sea of napkins, two textbooks, a plate with the ghost of a scone on it, and Olivia's coat taking up a whole chair by itself. Haerin was across from her with her hands inside her sleeves around a cup of something with steam coming off it. And on the table in front of her, open, was a notebook." },
      { n: "Solar had never seen the notebook open. She'd seen it closed, often: small, black, an elastic round it, in Haerin's lap on the van, under her keyboard at practice. *I keep notes on everyone,* Haerin had said at Regionals, wet-faced, with confetti in her hair. *Olivia's are mostly crying.* Solar had assumed it was a joke. Haerin didn't really make jokes, so she'd assumed it was the one." },
      { s: 'olivia', f: 'happy', t: "SOL. Sit. She's reading me my file. She keeps a FILE. On ALL of us." },
      { s: 'haerin', f: 'neutral', t: "It's not a file. It's notes." },
      { s: 'olivia', f: 'happy', t: "Read the one from October again. Read it." },
      { s: 'haerin', f: 'neutral', t: "\"Ten-fourteen. Cried at a Lucio highlight. Not ours. A different team's Lucio.\"" },
      { s: 'olivia', f: 'sad', t: "It was a very beautiful Lucio." },
      { n: "Solar sat. She'd come in for a coffee she wasn't going to drink after three, and she ordered a refresher instead, and by the time she got back to the table Olivia had moved her coat so there was a chair, which for Olivia was practically a red carpet." },
      { s: 'olivia', f: 'happy', t: "Do Sol's." },
      { s: 'haerin', f: 'neutral', t: "No." },
      { s: 'olivia', f: 'serious', t: "Do SOL'S, Haerin, it's a gift, it's Christmas." },
      { n: "Haerin looked at Solar across the table. A level look, the one she gave a support ultimate she'd just seen come up, deciding whether it was worth a call. Then she turned some pages. Not many. Solar's name was near the front, in Haerin's tiny perfect handwriting, the same handwriting that had labeled every cable for Regionals: *LEE, S.* Under it, a list of dates." },
      { s: 'haerin', f: 'neutral', t: "\"Nine-twelve. Kiriko. Good. Better than she plays in scrims.\" \"Ten-two. Late on suzu by a quarter second when Minji's in the room.\" \"Ten-twenty-seven. Absent. Didn't say why.\"" },
      { n: "She turned one more line down with her finger, and stopped." },
      { s: 'haerin', f: 'neutral', t: "\"Lies about being fine.\"" },
      { s: 'haerin', f: 'neutral', t: "\"Badly.\"" },
      { n: "Olivia made a noise like a kettle. Solar sat very still in her chair with her refresher in her hand and felt the old reflex come up, the polished one, the one she'd worn to her father's dinners and to a chapter meeting and to a whole kitchen of girls asking how the cabin was, and she heard herself use it, perfectly level, in exactly the voice Haerin used on everyone." },
      { choose: [
        { t: "I lie extremely well, actually.", then: [
          { n: "Haerin looked at her." },
          { n: "And then Haerin laughed." },
          { n: "Not a giggle. Not the small sudden thing that went off at a pizza joke and was gone before you could turn your head. A laugh. Her head went back. Her hands came out of her sleeves. It came out of her loud and high and helpless, a real, ugly, wonderful noise that went right across the café and made the barista look up and a man in the corner take one earbud out. She put a hand flat on the table and kept going. She couldn't stop. Every time she tried to stop she looked at Solar's face and it started again." },
          { bond: { olivia: 1 } }
        ] },
        { t: "(Say nothing. Drink your refresher.)", then: [
          { n: "She said nothing. She took a long sip through the straw, with great dignity, looking out the window at the snow on Marshall Street like a woman with nothing to declare, and held it, and held it, and the straw made a small wet sound at the bottom of the cup." },
          { n: "Haerin laughed." },
          { n: "Not a giggle. Not the small sudden thing that went off at a pizza joke and was gone before you could turn your head. A laugh. Her head went back. Her hands came out of her sleeves. It came out of her loud and high and helpless, a real, ugly, wonderful noise that went right across the café and made the barista look up and a man in the corner take one earbud out, and every time she tried to stop she looked at the straw and it started again." },
          { stat: { charm: 1 } }
        ] }
      ] },
      { n: "Olivia was frozen. She had one hand halfway to her phone, which was on the far side of the scone plate, and she was looking at Haerin with an expression Solar had only ever seen on people watching a total eclipse." },
      { s: 'olivia', f: 'surprised', t: "...Do it again." },
      { s: 'haerin', f: 'happy', t: "No." },
      { s: 'olivia', f: 'sad', t: "Haerin. HAERIN. Since SEPTEMBER. I've done BITS. I did a forty-minute bit in the van." },
      { s: 'haerin', f: 'happy', t: "I know. It was very long." },
      { n: "She wiped her eyes on the back of her sleeve, still breathing like she'd run up stairs, and picked up her pen, and wrote something under Solar's last line in the notebook, small, with the date. Solar read it upside down. She was good at reading things upside down; she'd learned it across a desk from her father." },
      { n: "*12-whatever. Says she lies extremely well. True. Just not to us.*" },
      { n: "Haerin closed the notebook and put the elastic back around it and slid it into her coat, and looked at Solar one more time across the table, level again, the laugh gone back wherever she kept it, but not all the way. Some of it stayed at the corners." },
      { s: 'haerin', f: 'neutral', t: "You were gone nine days. You came back and you were better. And you lie to everyone except people who keep notes." },
      { s: 'haerin', f: 'neutral', t: "I'm not going to ask. I'm just writing it down." },
      { s: 'solar', f: 'neutral', t: "That's fair." },
      { s: 'haerin', f: 'happy', t: "It's notes. Notes are always fair." },
      { n: "Olivia, recovered, launched immediately into a theory of what she'd have to do to make it happen again, which involved a whiteboard and possibly Doyoung, and Haerin went back into her sleeves, and Solar sat there with her empty cup and the snow coming down on Marshall Street, and found she was smiling at a girl who'd caught her out in one word and laughed about it, and decided, quietly, that she didn't mind being in somebody's notes at all." }
    ] }
  ]);
})();


/* The Runners epilogue, the time pass (Nov 5 2026): seven more hangouts for Haechan, Minji and Chenle. Data only; pushed onto
   the existing bonds like people-w3.js (same `add` helper, so load order doesn't matter). Appended at the END of each bond's list.

   Hangouts:
     haechan  epi-r-haechan-porchrail 'porch rail'        12/9-12/13 late, route haechan (the ambient epi-r-am-hc-porch made a scene:
                                                          the bag on the frozen rail, him already down Walnut; call after him or not)
              epi-r-haechan-thursday  'thursday'          12/19 after, route haechan, after epi-r-last-final (gap 13: the walk from
                                                          Archbold; his four sentences, after the second Thursday, as low tide promised)
              epi-r-haechan-duo       'duo queue, again'  12/8-12/13 late, noRoute haechan (1 a.m., three games; the one callout differs
                                                          by route: minji / cover)
     minji    epi-r-minji-halfspeed   'half speed'        12/8-12/13 late, after epi-r-regionals-2, every route (the lab at 1 a.m.; the
                                                          semifinal comms at half speed; ifEpiRoute minji carries more)
              epi-r-minji-lookback    'the shot where she looks back'  12/15-12/17 late, route minji, after epi-r-upward (Her Room;
                                                          which ending: the walk away or the take where she turns round)
              epi-r-minji-goodbye     'room tone'         12/20 evening, after epi-r-porch, every route (the honors dorm, Minji striking
                                                          her room for break; thirty seconds of silence on the recorder; per route)
     chenle   epi-r-chenle-pointfour  'point four seconds' 12/8-12/12 late, after epi-r-regionals-2 (the lab; the graph from his 12/8 text,
                                                          five minutes and eleven seconds of talking)
   Flags set: none. Flags read: epi-r-stem-hers / epi-r-stem-cleared (porch rail; set in story-w2.js epi-r-studio), epi-r-reel-yes /
     epi-r-reel-cut / epi-r-reel-think (lookback; yes / cut checked first, as people-w3.js's header asks), epi-r-read-3 (pointfour,
     halfspeed: the Lucio read in the final). ifEpiRoute: minji, cover (duo), minji (halfspeed, goodbye), haechan (goodbye).
   Canon held: the track stays untitled; the valley promise unpaid; the jacket stays in the bag; he never asks anyone about her (the
     porch rail goes unexplained); nobody knows what happens on the roof (Minji's route: she knows only that she's coming up to shoot
     the snow, from epi-r-first-snow); Thursdays named only in Haechan's own four sentences, no diagnosis beyond them; Chenle
     doesn't say what Thursday is; the reel: lookback never treats permission as given when only epi-r-reel-think is set, and the
     12/19 "can I keep you in it" text stays the ask; no glitch scheduled or explained.
   Inventions (texture only): the late Korean place on Marshall Street and a yellow banana (porch rail; the valley's rotten banana is
     the canon it answers); Sigma to Alpha is four minutes and "doesn't count as anywhere" (covers the 12/11 "not going anywhere"
     check-in); Thursday is a meeting "in a church basement past Erie Boulevard", and he's booked someone at the counseling center
     for January (his four sentences); Doyoung records team comms for VOD review (halfspeed); a second take of the walk-away shot,
     shot on Sunday 12/14 outside the café, where Solar turned round on her own (lookback); Minji records thirty seconds of room tone
     in every room she leaves for a break (goodbye); Chenle's graph is "time from committed ability to Suzu", 212 instances, his
     method checked three times, and he timed his own talking at five minutes eleven seconds (pointfour).
   Art ideas (one line each, the lead decides):
     - porch rail: the takeout bag steaming on a rail furred with ice, a hooded figure small under a streetlight far down Walnut.
     - half speed: two girls in the dark lab, one shared headset split between them, the semifinal frozen on the screen.
     - room tone: Minji's stripped room, the little recorder on the bare desk between them, both of them very still, snow at the window.
   Canon question for the lead: the 12/19 Thursday walk sits after the hoodie morning (he may or may not have the hoodie back), so
     the scene never mentions it. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  const B = (R.bonds ||= {});
  // people.js assigns B.<id> = {...} outright. If it hasn't loaded yet (the checker loads files alphabetically, so this one
  // comes first), hold the bond on an accessor that merges this week's hangouts into whatever people.js assigns later.
  const add = (id, role, list) => {
    if (B[id]) { (B[id].hangouts ||= []).push(...list); return; }
    let v = { id, role, hangouts: [...list] };
    Object.defineProperty(B, id, { enumerable: true, configurable: true, get: () => v,
      set: o => { (o.hangouts ||= []).push(...v.hangouts); v = o; } }); // everything merged so far (the time pass: several files can hold one bond)
  };

  /* ── Haechan ── */
  add('haechan', 'friend', [
    { id: 'epi-r-haechan-porchrail', title: 'porch rail', hint: 'Your phone lights up at midnight. Two words, then three.',
      after: '12/9', until: '12/13', slots: ['late'], route: 'haechan',
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { flag: 'epi-r-porchrail-seen' },
      { n: "She'd meant to eat. She'd meant to eat at six, and then at eight, and somewhere around ten she'd stopped meaning anything and just sat at her desk with the Statistics review open and a granola bar wrapper she'd already emptied twice, checking it as if it might have refilled itself. The radiator knocked. The house had gone quiet in pieces the way it did, a shower, a door, Hyein singing through two walls and then not." },
      { phone: [{ from: 'haechan', t: 'u didnt eat' }, { from: 'haechan', t: 'porch rail. before it freezes' }], contact: 'haechanah' },
      { n: "She read it twice. She hadn't told anybody she hadn't eaten. She hadn't told herself, really, not in words. Her stomach answered for her anyway, low and embarrassing, and she put her phone face down as if it could hear." },
      { place: 'Syracuse · Alpha Phi House · Porch', time: 'Late Night' },
      { n: "She went down in her socks. The stairs were dark and the front door stuck the way it always stuck in the cold, and when she got it open the air came in so clean and total it took her breath, eleven degrees and no wind, the kind of cold that didn't blow at you so much as wait." },
      { n: "The porch rail was furred white with ice, and on it, pressed down into the snow so it wouldn't tip, was a paper bag folded over twice at the top. It was steaming. Actually steaming, two thin threads of it going up into the porch light, which meant it had been there about a minute, which meant—" },
      { n: "She looked up. Walnut Avenue ran away from the house empty and orange under the streetlights, and halfway down it, a block and a half, there was a figure with his hood up and his hands in his pockets, walking at the exact unhurried pace of somebody who had not just left something on a porch. He didn't look back. He wasn't going to look back. She knew that the way she knew the stairs." },
      { n: "Inside the bag: a rice bowl from the late Korean place on Marshall Street, the one that stayed open until two for exactly this kind of person, the sauce in its own little cup because she didn't like it poured on. Chopsticks. Two napkins. And a banana." },
      { n: "Perfectly yellow. Not a single brown spot on it. Insultingly, deliberately yellow, the yellow of somebody who had stood at a register and gone through the whole bunch to find it, and she stood on the frozen porch in her socks and laughed out loud, once, at nobody, because the last banana he'd ever given her had been nearly rotten, in a valley, at two in the morning, and he'd said *it was by the register,* and that had been a lie, and this was the correction." },
      { ifFlag: 'epi-r-stem-hers', then: [
        { n: "Her coat was on the hook inside the door, and in its inside pocket, zipped, was a small drive with one file on it that nobody opened but her. She thought about that, holding the warm bag. About a boy who'd taken something from her once without asking, and now left things on rails and walked away before she could thank him. She didn't know yet if it evened out. She wasn't sure it was supposed to." }
      ], else: [
        { ifFlag: 'epi-r-stem-cleared', then: [
          { n: "She thought about five files going into the trash one at a time, in 4B, with the folder open so she could watch each one go. He hadn't sighed. He hadn't made it a point. He'd done it the way he was doing this, she thought: put it back where it belonged and left before anyone could make it a scene." }
        ], else: [
          { n: "She thought about a gap on a timeline, a clean rectangle of nothing where her voice had been, and him rolling his chair aside so she could see it. He'd never once made it a speech. He did it the way he was doing this, she thought: put it back where it belonged and left before anyone could make it a scene." }
        ] }
      ] },
      { choose: [
        { t: "(Call after him.)", then: [
          { s: 'solar', f: 'serious', t: "Donghyuck!" },
          { n: "It went down the street louder than she'd meant it to, bounced off the parked cars, and somewhere a dog answered. He stopped under a streetlight. He didn't turn all the way round. Just his head, enough that she could see the side of his face in the orange light, and then he lifted one hand out of his pocket, palm flat, and pushed it down toward the ground twice, slowly. *Eat.* Then the hand went back in the pocket and he kept walking." },
          { n: "She stood there until he turned the corner toward Sigma. Four minutes, door to door. He'd tell her later, in a voice like a man reading her the fine print, that four minutes didn't count as going anywhere, and that the rule was the rule." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(Let him go. Text him from the stairs.)", then: [
          { n: "She let him go. That was what he wanted, she was nearly sure of it; he'd timed it so she'd find the bag and not him, and if she yelled his name down Walnut at midnight half the street would know by breakfast. She took the bag in and ate on the stairs in the dark with the bowl on her knees, and it was still hot, and it was exactly right, and she texted with sauce on her thumb." },
          { phone: [{ from: 'solar', t: 'the banana is yellow' }, { from: 'haechan', t: 'i have standards' }, { from: 'haechan', t: 'eat the rice first. the banana is dessert' }], contact: 'haechanah' },
          { stat: { kindness: 1 } }
        ] }
      ] },
      { n: "She didn't ask him how he'd known. She'd asked once, in a valley, and gotten nothing. He didn't know things about her because he asked someone. He just knew them, and then he left them on a rail in the cold, and went home, and let her find out." }
    ] },

    { id: 'epi-r-haechan-thursday', title: 'thursday', hint: "Somebody is standing at the bottom of the Archbold steps, not waiting for anyone.",
      after: '12/19', until: '12/19', slots: ['after'], route: 'haechan', events: ['epi-r-last-final'],
      place: 'Syracuse · The Quad', time: 'Afternoon', scene: [
      { music: 'epi-r-snow' },
      { n: "He was at the bottom of the Archbold steps, off to one side by the bike rack, where the crowd thinned out, hood up and hands in his pockets and his headphones round his neck, looking at the sky like it had a scoreboard on it. Four hundred people came out of the gym around him laughing and shouting and already playing music off phones, and he stood in the middle of them like a rock in a stream and didn't look for her once. Which was how she knew he'd been there since before four." },
      { n: "She came down the steps. He fell in beside her without a word, a foot of air between them, the careful foot, because the party was in four hours and they'd agreed on careful, and the two of them walked out across the quad in the snow, not touching, the way two people from the same class might walk if they happened to be going the same way." },
      { s: 'haechan', f: 'neutral', t: "How was it." },
      { s: 'solar', f: 'neutral', t: "Clear." },
      { s: 'haechan', f: 'happy', t: "Is that a grade or a weather report." },
      { s: 'solar', f: 'happy', t: "Both." },
      { n: "They went past the bell tower, and she didn't look up at it, and she felt him notice her not looking. The paths were salted gray through the white and the light was going already, the thin December gold that didn't warm anything, and the cold got into her lungs and stayed there, clean, and for a while there was only the sound of their boots and somebody's dog on the far side of the quad losing its mind about the snow." },
      { n: "At the corner of Hall of Languages he stopped. Not dramatically. He just stopped walking, and she went two steps further before she noticed, and turned round, and he was standing there with his hands in his pockets looking at a point somewhere past her left shoulder." },
      { s: 'haechan', f: 'neutral', t: "I said I'd tell you when I'd been more than once. Last night was twice." },
      { n: "She went very still. She didn't step closer. She had the feeling, the way you get it with a skittish animal, that if she moved he'd stop." },
      { s: 'haechan', f: 'serious', t: "It's a meeting, Thursdays, seven to nine, in a church basement past Erie Boulevard, for people who use and are trying not to. Chenle drives because I asked him to, and I asked him because I know what I'm like when the only person deciding is me. I've got an appointment at the counseling center the second week of January, and I'm going to keep it. That's all of it, and you don't have to do anything with it." },
      { n: "Four sentences. Flat, in order, like a man reading back a receipt. He'd practiced them. She could tell he'd practiced them, because there wasn't one extra word anywhere in it, and Haechan, who could make *yeah* mean eleven different things, didn't waste words on anything he hadn't decided about first." },
      { n: "She felt the whole speech rise up in her, the one anybody would have made. *I'm so proud of you. I'll come with you. You can call me, any hour, I'll be there.* It came up her throat with its shoes on and she let it stand there and didn't open the door for it. It wasn't hers. None of this was hers. That was the point of a basement past Erie Boulevard, that it wasn't hers, that it would still be there on a Thursday when she wasn't." },
      { choose: [
        { t: "Okay.", then: [
          { s: 'solar', f: 'neutral', t: "Okay." },
          { s: 'haechan', f: 'surprised', t: "...Okay?" },
          { s: 'solar', f: 'neutral', t: "Okay. Thank you for telling me." },
          { s: 'haechan', f: 'neutral', t: "Don't thank me. It's the rule." },
          { n: "But his shoulders came down. An inch, maybe less. She watched it happen, the hood settling, the hands in the pockets unclenching, and understood that he'd braced the whole walk across the quad for her to make it a thing, and she hadn't, and he was so relieved he didn't know where to put it." }
        ] },
        { t: "Does it help?", then: [
          { s: 'solar', f: 'serious', t: "Does it help?" },
          { n: "He thought about it. Actually thought, which she could see on him, the jaw and the eyes going somewhere else for a second, like he was listening to a mix." },
          { s: 'haechan', f: 'neutral', t: "I don't know yet. Ask me in March." },
          { s: 'haechan', f: 'neutral', t: "The coffee doesn't." },
          { n: "She laughed, and he looked at the laugh the way he always did, like it was the right answer to a question he hadn't asked, and his shoulders came down an inch." }
        ] }
      ] },
      { s: 'haechan', f: 'serious', t: "It's not for you. I want that clear. You're why I went the first time. You're not why I went last night." },
      { s: 'solar', f: 'neutral', t: "Good." },
      { s: 'haechan', f: 'neutral', t: "Yeah?" },
      { s: 'solar', f: 'neutral', t: "Yeah. I'd be a terrible reason. I don't even eat." },
      { n: "That got him. A real one, short, out of the side of his mouth, the flat laugh that scraped against nothing for once. He started walking again, and she fell in beside him, the careful foot of air between them, and they went down the hill toward Walnut in the snow like two people from the same class going the same way." },
      { n: "At the corner where he'd turn for Sigma he didn't say goodbye. He said *eight,* and she said *eight,* and he said, to the street, *I'm going to be so careful tonight it'll be boring,* and went. She watched him go. He didn't look back. She was learning that it didn't mean what it used to." },
      { bond: { haechan: 1 } }
    ] },

    { id: 'epi-r-haechan-duo', title: 'duo queue, again', hint: 'It is one in the morning. His invite has been sitting in her client for ten minutes.',
      after: '12/8', until: '12/13', slots: ['late'], noRoute: 'haechan',
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { n: "One in the morning, and the invite had been sitting there since ten to. *haechanah has invited you to a group.* No text. No *u up.* Just the invite, patient as a cat at a door, and her desk lamp the only light in her room, and the radiator going through its whole repertoire of knocks." },
      { n: "She looked at it for a long time. Then she put her headset on and accepted, and his name came up in the corner of her screen next to hers, the little green ring around it, and neither of them said hello, which was the most natural thing in the world, and then the queue popped." },
      { s: 'haechan', f: 'neutral', t: "Widow." },
      { s: 'solar', f: 'neutral', t: "Kiriko." },
      { n: "That was the whole conversation for the first game. Two Grandmasters on a stack of strangers at one in the morning, a Rein who typed in all caps and a Lucio who kept speed-boosting into the enemy spawn, and the two of them under it, quiet, from opposite ends of the map. He played the way he always played, far back and silent and perfect, and every so often she'd hear him breathe in before a shot, a little intake like a held note, and then the kill feed would light up on the right of her screen with his name in it." },
      { n: "They won the first one. They won the second one, too, which was harder, because the Lucio had stopped being funny around the second point. She didn't ask how he was. He didn't ask about her week. Nobody said the word *Regionals,* or the word *Sunday,* or the name of anybody who wasn't on the screen. It was a rule nobody had made. They both just kept it, which was the way most of the rules between them had always worked." },
      { n: "Third game. Junkertown, the long first point, the sun on the map so bright it made the room around her feel darker. On the second fight she caught herself doing it: drifting back. Away from her tank, away from the push, toward the high ground where his Widow was perched, her Suzu held in reserve for a dive on him that hadn't come and might not, watching his health bar instead of her own team's like it was the only number that mattered." },
      { ifEpiRoute: 'minji', then: [
        { s: 'haechan', f: 'neutral', t: "Don't peel back for me. I'm where I'm supposed to be." },
        { n: "Flat. A callout. *Don't peel.* The kind of thing you'd say to any support who'd wandered. But he didn't say it the way he said callouts; there was no *your left* in it, no number, and she heard the pause before it, the length of a held breath, and knew it wasn't about Junkertown." },
        { n: "She thought about a loading dock that smelled like cardboard and snow, and a girl turning a cap round and round by the brim. She thought about him at the end of a stage rail with his hands in his pockets, watching her walk away from him across a whole hall, and not moving. He'd chosen where to stand. He was telling her he'd keep standing there, and that she didn't have to keep checking." }
      ], else: [
        { s: 'haechan', f: 'neutral', t: "Stop watching my health. I've got a Mercy." },
        { n: "Flat. A callout. They did have a Mercy, a quiet one, on the far side of the map, who'd had him the whole game. But he didn't say it the way he said callouts; there was no *your left* in it, and she heard the half second before it, and knew it wasn't about Junkertown." },
        { n: "He had people. Chenle, always somewhere within ten feet of him without ever seeming to be, and whatever else there was that he hadn't told her and didn't owe her. He'd gone and gotten people, on purpose, people whose job it was to keep him alive, and she wasn't one of them, and he was telling her, kindly, in the only language he'd say it in, that she could stop trying to be." }
      ] },
      { choose: [
        { t: "(Go back to the tank.)", then: [
          { n: "She went back to the tank. She put herself where she was supposed to be, between the Rein and everything that wanted him dead, and threw her Suzu on the Rein a half second before the enemy Ana's sleep would have landed, and the Rein lived and typed *TY KIRIKO* in all caps, and from the far end of the map, very quietly, she heard Haechan say *there you go.*" },
          { stat: { proficiency: 1 } }
        ] },
        { t: "Copy.", then: [
          { s: 'solar', f: 'neutral', t: "Copy." },
          { n: "One word back, flat as his. It was the most either of them had said all night. She went back to her tank. He killed the Ana who'd been lining up a sleep on her, without a callout, without a word, which was the same thing as saying it back." },
          { stat: { kindness: 1 } }
        ] }
      ] },
      { n: "They won the third. The end screen came up gold, three wins, two Grandmasters who'd never once said what any of it was about, and he left the group without saying goodnight. She sat with the headset on in the quiet for a minute, the fan of her PC going down like a tide, and then the phone buzzed once on the desk." },
      { phone: [{ from: 'haechan', t: 'gg' }, { from: 'haechan', t: 'go to sleep' }], contact: 'haechanah' },
      { n: "She did. That was the strange part. She lay down and went straight to sleep, the heavy kind, for the first time all week." }
    ] }
  ]);

  /* ── Minji ── */
  add('minji', 'friend', [
    { id: 'epi-r-minji-halfspeed', title: 'half speed', hint: "The lab's one light is on at one in the morning. Minji has the semifinal up, and a second headset.",
      after: '12/8', until: '12/13', slots: ['late'], events: ['epi-r-regionals-2'],
      place: 'Syracuse · eSports Lab', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { n: "The building was empty in the way it only ever was after midnight, the hallway lights on their motion sensors clicking on ahead of her and off behind, and the lab door unlocked with her key, and inside, one monitor was on. Minji, at her station, cap frontwards, a hoodie with the sleeves over her hands, the semifinal paused on King's Row. A second headset on the desk at the next station, plugged in, waiting." },
      { s: 'minji', f: 'neutral', t: "Doyoung records comms. For review. He sent the files tonight. I haven't listened yet. I didn't want to do it alone." },
      { s: 'minji', f: 'neutral', t: "You can say no." },
      { n: "Solar sat down and put the headset on. Minji reached over and set the playback to half speed, the little dropdown, 0.5x, and pressed play." },
      { n: "At half speed the game went underwater. The Genji came over the wall behind Minji's sightline like something swimming, slow and graceful and wrong, and in their ears the comms came out of the dark dragged long and low, their own voices stretched into something almost like singing. Olivia's laugh, a full second before anyone else's, turned into a long slow bell. Chenle saying *rotate* became a word with three rooms in it." },
      { n: "And then Minji's voice, half speed, a whole octave lower than it was, steady, calm, exact." },
      { s: 'minji', f: 'neutral', t: "*I'm fine. I've got him. Stay with tank.*" },
      { n: "Minji, beside her, in the real room, didn't move. On the screen, slowly, a small blue fox-fire blink: Solar's Kiriko stepping across the map to her. In their ears, stretched out like taffy, her own voice, laughing, saying *you said it like me.*" },
      { n: "Neither of them said anything. That was the whole of it, for a long time. Two girls in the blue light with one VOD going at half speed and the hum of thirty dead PCs around them, listening to themselves from Sunday, and every time the comms went quiet on the recording the lab went quiet too, so that it was hard to tell which silence was which. Solar realized after a while that Minji had turned her own mic on. So had she. Neither of them had said a word into it. They were just there, in each other's ears, breathing, the way they'd been on a stage with three hundred people screaming." },
      { ifEpiRoute: 'minji', then: [
        { n: "When the map ended Minji paused it on the scoreboard and didn't take the headset off. She spoke into the mic, quietly, so that it came to Solar not from the next chair but from inside her own ears, which was a different kind of close." },
        { s: 'minji', f: 'sad', t: "You heard me. Under it. Nobody else did." },
        { s: 'solar', f: 'neutral', t: "I say it like that. I'd know it anywhere." },
        { s: 'minji', f: 'serious', t: "I know. That's the thing I can't stop listening to. Not that you came. That you knew." },
        { choose: [
          { t: "(Put your hand on the desk, near hers.)", then: [
            { n: "She put her hand flat on the desk between their keyboards. Not on Minji's. Near it. Minji looked at it for a long moment, and then, without looking up, moved her own hand an inch, until the sides of their little fingers were touching, and left it there, and pressed play on the next map." },
            { bond: { minji: 1 } }
          ] },
          { t: "I'll always know.", then: [
            { s: 'solar', f: 'serious', t: "I'll always know." },
            { n: "Minji closed her eyes. Just for a second. Then she opened them and pressed play on the next map, and didn't say anything, and Solar watched her not say it, and knew she'd heard." },
            { bond: { minji: 1 } }
          ] }
        ] }
      ], else: [
        { n: "When the map ended Minji paused it on the scoreboard and took the headset off and hung it round her neck, and looked at the screen instead of at Solar, which was how Solar knew it was going to be true." },
        { s: 'minji', f: 'neutral', t: "I listened to the dock, too. In my head. Like, forty times. I'm fine about it. I'm actually fine." },
        { s: 'minji', f: 'happy', t: "I just wanted to hear the part where we were good. Before all that. I wanted to know it was real too." },
        { s: 'solar', f: 'happy', t: "It was real. You hit the Winston twice in the head." },
        { s: 'minji', f: 'happy', t: "Twice in the head. At half speed it looks even better." },
        { choose: [
          { t: "Play the final. Busan too.", then: [
            { s: 'minji', f: 'serious', t: "Busan? We lost all three rounds on Busan." },
            { s: 'solar', f: 'neutral', t: "I know. I want to hear where we split up." },
            { n: "Minji looked at her, and then nodded slowly, like Solar had said something good about a lens, and pulled up the final, and they listened to themselves fall apart at half speed for three rounds, and then come back together, and it was the most useful hour of VOD review either of them had ever done." },
            { stat: { proficiency: 1 } }
          ] },
          { t: "(Just sit here a while.)", then: [
            { n: "They sat. Minji left the scoreboard up, the orange and the white, and the two of them sat in front of it at one in the morning with the headsets round their necks, not talking, and it wasn't awkward, and it wasn't anything, and it was the first time since the dock that it wasn't anything, and they both noticed and neither of them said so." },
            { bond: { minji: 1 } }
          ] }
        ] }
      ] },
      { n: "At two Minji turned the monitor off with the button on the front, and they walked out together into the cold. The hallway lights clicked on ahead of them, one by one, and off behind them. At the door Minji held it, and didn't look at her while she held it, and said *same time never,* and Solar said *same time never,* and they both laughed, because it was the first joke they'd had in a week." }
    ] },

    { id: 'epi-r-minji-lookback', title: 'the shot where she looks back', hint: 'Minji texts at 11:40. *are you up. i have two endings and i can only keep one.*',
      after: '12/15', until: '12/17', slots: ['late'], route: 'minji', events: ['epi-r-upward'],
      place: 'Syracuse · Alpha Phi House · Her Room', time: 'Late Night', scene: [
      { music: 'epi-r-closure' },
      { n: "Minji came up the Alpha stairs at a quarter to midnight with her laptop held flat against her chest like a tray of drinks and snow melting in her hair, and stopped on the second landing, and looked at Danielle's door, and then at Solar on the landing above, and made a face so perfectly neutral that Solar had to bite the inside of her cheek." },
      { n: "In Solar's room she sat on the end of the bed with her boots still on and opened the laptop on her knees and didn't press anything. Two clips on the timeline, side by side, the same length. Both of them paused on the same frame: the back of Solar's coat, Sunday, outside the café on Marshall Street, the snow coming down fat and slow and the right way, and Solar walking away down the block toward the corner." },
      { ifFlag: 'epi-r-reel-yes', then: [
        { s: 'minji', f: 'serious', t: "You said yes. All of it. I'm still asking about this, because it's the ending, and the ending's different." }
      ], else: [
        { ifFlag: 'epi-r-reel-cut', then: [
          { s: 'minji', f: 'serious', t: "You said yes, without the green frame. This isn't the green frame. I'm asking anyway, because it's the ending, and the ending's different." }
        ], else: [
          { s: 'minji', f: 'serious', t: "This isn't a yes. I know it isn't. The nineteenth still says ask, and I'm going to ask. I'm cutting it in case, that's all. If the answer's no I'll delete both of these and you can watch me do it." }
        ] }
      ] },
      { s: 'minji', f: 'neutral', t: "Take one." },
      { n: "She pressed play. On the screen Solar walked away down Marshall Street with her hands in her pockets and her hood half up, past the bookstore, past a man scraping his windshield, getting smaller, and didn't look back, and turned the corner, and was gone, and the shot held on the empty corner and the snow for three more seconds, and cut to black." },
      { s: 'minji', f: 'neutral', t: "That's the one I said was the end. You know where you're going. You don't have to look." },
      { s: 'minji', f: 'flustered', t: "Take two." },
      { n: "The same walk. The same block, the same snow, the man with the windshield again, a little further along with it. And then, three steps before the corner, Solar on the screen stopped. Nobody had told her to. She remembered now; she hadn't remembered until this second. She'd stopped, and turned round, and looked straight back down the whole length of the block into the lens, and smiled. Not a big one. The small one, the one she didn't know she had, the one that happened to her face when she wasn't building it." },
      { n: "Then she turned and went round the corner, and the shot held, and cut to black." },
      { n: "Solar sat very still on her own bed. She'd never seen her face do that from the outside. She looked like a person checking that somebody was still there. She looked like a person who already knew they would be." },
      { s: 'minji', f: 'serious', t: "Hyein said make her look back. On Sunday. I said you didn't have to. I meant it. But you did anyway, on take two, and I didn't tell you to, and I've watched it maybe two hundred times." },
      { s: 'minji', f: 'serious', t: "It changes what the film's about. One of them's about you leaving. The other one's about you leaving and checking that someone's still there. I don't get to pick that. It's your face." },
      { s: 'minji', f: 'neutral', t: "Which one. You can say neither. You can say not yet." },
      { choose: [
        { t: "Keep the one where I look back.", then: [
          { n: "Minji didn't smile right away. She looked at the frozen frame, Solar's face at the end of the block, and then at the real one beside her, as if she were checking the two against each other for continuity." },
          { s: 'minji', f: 'happy', t: "Okay. Then it's about checking." },
          { s: 'minji', f: 'flustered', t: "Hyein's going to be unbearable." },
          { bond: { minji: 1 } }
        ] },
        { t: "Keep the one where I don't.", then: [
          { s: 'minji', f: 'neutral', t: "Okay." },
          { n: "She didn't argue. She didn't ask why. She dragged take two out of the timeline into a folder with the date on it and nothing else, and closed it, and Solar watched her do it and understood she wasn't going to delete it, and that she wasn't going to use it either. She was just going to keep it somewhere, the way you keep a letter." },
          { s: 'minji', f: 'happy', t: "It was a good walk. Both times." },
          { stat: { courage: 1 } }
        ] },
        { t: "You choose. You're the director.", then: [
          { s: 'minji', f: 'serious', t: "No." },
          { s: 'minji', f: 'serious', t: "I'm the director of everything except your face. That was the deal. I made it with myself in September." },
          { n: "She closed the laptop gently, both clips still on the timeline, side by side. It was the first time Solar had ever seen her refuse something she wanted that badly." },
          { s: 'minji', f: 'happy', t: "Tell me on the nineteenth. With the other thing. I'll put it on the card." },
          { bond: { minji: 1 } }
        ] }
      ] },
      { n: "At the door, coat on, laptop against her chest again, Minji stopped with her hand on the frame. She didn't turn round. Then she did, halfway, over her shoulder, the way somebody on a screen had at the end of a block on Sunday, and looked at Solar, and the look was so exactly the same that they both heard it at once and laughed, and Minji said *don't,* and went." }
    ] },

    { id: 'epi-r-minji-goodbye', title: 'room tone', hint: "Minji's room is half in boxes. She texts: *come help me be sad about it. 20 min max.*",
      after: '12/20', until: '12/20', slots: ['evening'], events: ['epi-r-porch'],
      place: 'Syracuse · Honors Dorm', time: 'Evening', scene: [
      { music: 'epi-r-snow' },
      { n: "The honors dorm was already mostly gone. Doors propped open down the whole hall on bare rooms, a mattress stripped to its plastic, a mini fridge unplugged in a corridor with its door open like a mouth, somebody's dad carrying a lamp down the stairs and apologizing to the lamp every time it hit the rail. The snow had kept coming all day, and the window at the end of the hall was a solid square of white." },
      { n: "Minji's room was half in boxes. The corkboard was bare, every index card taken down and rubber-banded in color-coded stacks. The hard drive tower was in a crate with a towel over it like a birdcage. Only the succulent on the sill was where it had always been, still refusing to die, about to be left with the RA again." },
      { s: 'minji', f: 'happy', t: "Twenty minutes. I said twenty minutes. I'm holding myself to it." },
      { s: 'solar', f: 'happy', t: "You never hold yourself to anything except asking." },
      { s: 'minji', f: 'happy', t: "That's not true. I hold myself to frame rate." },
      { n: "They taped the last two boxes. Minji wrote on them in marker, FILM THEORY and FILM THEORY (OTHER), and Solar held the flaps down and didn't say anything about the second box, and Minji saw her not say it and threw the marker at her, and missed." },
      { n: "Then Minji took a small black recorder out of her coat pocket, the size of a phone, with a little furred windscreen on it like a sleeping animal, and set it on the bare desk." },
      { s: 'minji', f: 'neutral', t: "Every room I leave for a break, I record thirty seconds of it. Room tone. Nobody talking, just the room. You do it on set so the edit doesn't jump, but I started doing it with rooms I lived in. So I can come back to how it sounded." },
      { s: 'minji', f: 'serious', t: "Can you stay for it? You'd have to not say anything for thirty seconds. I know that's a lot to ask." },
      { s: 'solar', f: 'happy', t: "I can be quiet." },
      { s: 'minji', f: 'happy', t: "I've met you." },
      { n: "She pressed the button. The little red light came on. And they stood in the half-empty room and didn't say anything." },
      { n: "Thirty seconds was long. Solar had forgotten how long it was. The radiator ticked. Somebody down the hall laughed and a door shut. The snow touched the window so softly it was almost not a sound, a page being turned very slowly, everywhere at once. Her own breath. Minji's. She looked at the red light and thought, with a clarity that went through her like the cold on the porch had, that this would still be on Minji's drive in a year, and in ten, thirty seconds of a room on the twentieth of December with her in it, and that whatever happened tonight, it would have happened after this. That this part was already safe." },
      { n: "Her throat did something. She didn't let it make a sound. That was the whole job." },
      { n: "The light went off. Minji let out a breath that steamed a little in the cold of a room with the window cracked." },
      { s: 'minji', f: 'happy', t: "Got it. That's the room." },
      { ifEpiRoute: 'minji', then: [
        { s: 'minji', f: 'neutral', t: "Eleven-thirty? I'll bring the wide lens. And the good gloves, the ones I can work the dials in." },
        { s: 'solar', f: 'neutral', t: "Bring something warm. It's going to be cold up there." },
        { s: 'minji', f: 'happy', t: "I'm going to ask you if I can film. Up there. I'm warning you now so it's not a surprise." },
        { s: 'solar', f: 'happy', t: "I know you are." },
        { choose: [
          { t: "(Hug her.)", then: [
            { n: "She hugged her. It wasn't a goodbye hug; it couldn't be, they'd see each other in a few hours, and they both knew it, and Minji held on anyway a beat longer than a few hours needed, with her chin on Solar's shoulder and her hands in the back of Solar's coat, and didn't ask why, and didn't let go first." },
            { bond: { minji: 1 } }
          ] },
          { t: "Ask me now.", then: [
            { s: 'minji', f: 'surprised', t: "Now? We're not up there yet." },
            { s: 'solar', f: 'serious', t: "Ask me now too. Then ask me again up there." },
            { n: "Minji looked at her for a long second, the way she looked at a frame she was deciding whether to keep, all the way through. She didn't ask what that meant. She just said it, quietly, in the empty room." },
            { s: 'minji', f: 'serious', t: "Can I keep you in it? You can say no." },
            { s: 'solar', f: 'neutral', t: "Keep me in it." },
            { bond: { minji: 1 } }
          ] }
        ] }
      ], else: [
        { s: 'minji', f: 'neutral', t: "Text me from the city. Or don't. I'll know either way. Olivia will post your whole Christmas for you." },
        { s: 'solar', f: 'happy', t: "She doesn't know where I live." },
        { s: 'minji', f: 'happy', t: "She'll find out. She's Olivia." },
        { ifEpiRoute: 'haechan', then: [
          { n: "Minji glanced, once, at the tote bag on Solar's shoulder. She didn't ask what was in it. She just looked at the way Solar was holding it, the hand flat on the canvas, and then looked away, out the window at the snow, and said, to the window," },
          { s: 'minji', f: 'neutral', t: "He better be warm to you. That's all I'm going to say. That's my whole speech." }
        ], else: [
          { n: "Minji looked at her a second too long, the old way, and then caught herself doing it and laughed, not unkindly, at herself." },
          { s: 'minji', f: 'neutral', t: "Spring. Nationals. I'm going to make you so tired of my Ashe." }
        ] },
        { choose: [
          { t: "(Hug her.)", then: [
            { n: "She hugged her. Minji made a small surprised sound and then hugged her back properly, the camera-bag-on-both-shoulders kind of hug, and they stood like that in the middle of FILM THEORY and FILM THEORY (OTHER) and it didn't mean anything it hadn't meant before. It meant exactly that much. It was enough." },
            { bond: { minji: 1 } }
          ] },
          { t: "See you in January.", then: [
            { s: 'solar', f: 'happy', t: "See you in January." },
            { s: 'minji', f: 'happy', t: "January. Same time never." },
            { n: "It was a joke about a lab at two in the morning, and it landed, and Solar let it, and didn't say the other thing that was sitting in her mouth. Minji would have heard it. Minji heard everything." },
            { stat: { kindness: 1 } }
          ] }
        ] }
      ] },
      { n: "On the stairs going down Solar stopped on the landing, the one with the window, and looked back up at Minji's door. It was open. Minji was in it, recorder in one hand, watching her go. She lifted the recorder an inch, like a toast. Solar lifted her hand. Then she went down into the snow, and didn't look back again, and knew where she was going." }
    ] }
  ]);

  /* ── Chenle ── */
  add('chenle', 'friend', [
    { id: 'epi-r-chenle-pointfour', title: 'point four seconds', hint: "Chenle's corner light is on in the lab. He made a graph. He said he wouldn't send it unless you asked.",
      after: '12/8', until: '12/12', slots: ['late'], events: ['epi-r-regionals-2'],
      place: 'Syracuse · eSports Lab', time: 'Late Night', scene: [
      { music: 'epi-r-team' },
      { n: "Midnight, and the lab dark except for his corner, where both monitors were going and he was sitting the way he always sat, very straight, very still, one hand on the mouse like it was a pulse he was taking. He looked up when she came in. He didn't say hi. He moved his bag off the second chair." },
      { s: 'solar', f: 'neutral', t: "You said you made a graph." },
      { s: 'chenle', f: 'neutral', t: "I said I wouldn't send it unless you asked." },
      { s: 'solar', f: 'happy', t: "I'm asking." },
      { n: "Something happened behind his face. Not a smile. Something in the general area of a smile that had been given permission to exist and wasn't sure what to do with it yet. He turned the right monitor toward her." },
      { n: "It was a scatter plot. Dots, hundreds of them, a gray cloud and an orange cloud, and running through each a line, and the orange line sat clearly, cleanly lower than the gray." },
      { s: 'chenle', f: 'serious', t: "Okay. So." },
      { n: "And then he talked." },
      { s: 'chenle', f: 'serious', t: "Every dot is a Suzu. The x-axis is the match clock, the y-axis is the time from the enemy's ability being committed, the frame the animation starts, not the frame it hits, to the frame your Suzu lands on the target. Gray is every scrim and match in November. Two hundred and twelve of them. Orange is Regionals. Day one and day two. Sixty-one." },
      { s: 'chenle', f: 'serious', t: "November average, point nine one seconds. Which is good. That's a Grandmaster number. Regionals, point five one. That's the point four. I checked my method three times. I clipped every one by hand, because the auto-tagger thinks Kiriko's teleport is a Suzu half the time and I don't trust it, and then I had Haerin clip twenty at random without telling her why, and she was within a frame of me on nineteen. The twentieth she said was a misclick. She was right. I took it out." },
      { s: 'chenle', f: 'neutral', t: "Here's the part that doesn't make sense." },
      { n: "He moved the cursor. A dashed red line, splitting the orange cloud in half. Day one on the left, day two on the right." },
      { s: 'chenle', f: 'serious', t: "You got faster on day two. You'd slept five hours. You'd played eight maps the day before. People don't get faster on day two. Reaction times go up when you're tired, that's not opinion, that's every study, I read four of them on Monday. Olivia got slower. Haerin got slower, a little. I got slower. You got faster. Your last ten Suzus of the final average point four four." },
      { s: 'chenle', f: 'neutral', t: "And it's not that you're reacting faster. I looked at that. Your hands aren't quicker. You're throwing it before the thing happens. You're throwing on the wind-up. You're reading the player, not the ability. Look." },
      { n: "He clicked a dot. A clip opened, Numbani, the enemy Ana raising her rifle, and before the sleep dart had even left the barrel, the little white bell was already in the air, already on its way, already there." },
      { s: 'chenle', f: 'serious', t: "That's not a Suzu that's fast. That's a Suzu that knew. I don't have a column for knew." },
      { ifFlag: 'epi-r-read-3', then: [
        { s: 'chenle', f: 'neutral', t: "And on the last point you didn't throw anything. You waited on the Lucio. The waiting isn't on the graph. The waiting was the best number of the whole weekend and I can't plot it. That's my fault, not yours." }
      ], else: [
        { s: 'chenle', f: 'neutral', t: "And on the fourth map you went first on the Rush, and it didn't work, and on the fifth you didn't do it again. That's not on the graph either. It's the most important line on it. I just can't draw it." }
      ] },
      { s: 'chenle', f: 'serious', t: "Your November numbers and your December numbers look like two different players. Both good. Different. I've been trying to figure out what happened in the middle, in the data, and there's nothing in the middle. There's November, and then there's you." },
      { n: "He stopped. Not trailing off. Stopped, like a song that had been written to end exactly there. He looked at the timer on his phone, which she hadn't noticed was running." },
      { s: 'chenle', f: 'flustered', t: "Five minutes eleven. I timed it. I don't, usually." },
      { s: 'chenle', f: 'flustered', t: "That's the longest I've talked since, I think, eighth grade. There was a science fair." },
      { choose: [
        { t: "Show me the day-two clips. All of them.", then: [
          { n: "His whole face changed. It was almost alarming. He pulled the chair closer without seeming to notice he'd done it and opened a folder with sixty-one clips in it, named by timestamp, and they went through them one at a time, and he didn't talk for five minutes again, but he talked a lot, and twice he said *criminally* and once he said *okay, this one's actually beautiful,* and then looked mortified, and didn't take it back." },
          { stat: { proficiency: 1 } }
        ] },
        { t: "Why tell me? You said nobody else would notice.", then: [
          { n: "He thought about it. She could see him thinking, choosing which of the true things was his to give." },
          { s: 'chenle', f: 'neutral', t: "Because everyone's going to tell you that you won. Doyoung, Olivia, SUesports, your brother probably. That's true. It's not the interesting part." },
          { s: 'chenle', f: 'serious', t: "Somebody should tell you that you got better. Not lucky. Better. In a way I can measure. I can't measure most things about people. I can measure this. So I thought I should." },
          { n: "It went into her somewhere under the ribs and stayed there. She didn't say *thank you,* because he'd hate it, and he'd already said more than he meant to. She said *okay,* and he nodded, and that was enough." },
          { bond: { chenle: 1 } }
        ] }
      ] },
      { n: "When she left at one he was still there, the graph still up, the orange line still sitting low and clean under the gray. At the door she looked back and he'd added a new column to the spreadsheet. She couldn't read it from the door. She thought it might say *KNEW (Y/N).* She didn't ask. Some things you let a person keep." }
    ] }
  ]);
})();


/* The Runners epilogue, the time pass (Nov 5 2026): five more hangouts for Danielle, Mark and Jaemin. Data only; pushed onto
   the existing bonds with people-w3.js's `add` helper (copied verbatim), so load order doesn't matter.

   Hangouts:
     danielle  epi-r-danielle-liability 'a liability'   12/8-12/13 late (Alpha dining room, the chapter budget, the grandfather
                                                        clock's line item; one true sentence about Jaehyun, then she's gone)
               epi-r-danielle-checkout  'checkout'      12/20 evening goodbye, after epi-r-porch (the second landing; her suitcase;
                                                        "I'll be here when you get back. I always am." read three ways)
     mark      epi-r-mark-jisung        'jisung asked'  12/16-12/17 late, after epi-r-kitchen (Sigma kitchen, one in the morning;
                                                        Solar in the front hall; Jisung asks if he ever actually liked her)
               epi-r-mark-backdoor      'the back door' 12/20 evening goodbye, after epi-r-porch (Sigma's back steps; he's leaving
                                                        tonight; a car four minutes out)
     jaemin    epi-r-jaemin-eleven      'eleven minutes' 12/15-12/17 late (the quad at half past midnight; the toast speech; she
                                                        cuts it to nine, he keeps eleven)
   Flags set: none. Gates: no new route gates.
   Flags read: epi-r-danielle-print (liability), epi-r-footage-file / -sent / -kept (checkout; set in story-w3 epi-r-footage,
     exactly one per playthrough; the else falls through to kept), epi-r-mark-door / -closed (backdoor). ifEvent epi-r-kitchen
     (jaemin-eleven: whether she knows why Mark's name is plain on the card). ifYear: noFlag arrived-mark (backdoor).
   Canon held: the clocks don't stop until 12/18 (liability is before it and only foreshadows); the grandfather clock stands at
     the foot of the stairs, seen through the dining-room arch; Danielle's "liability" line is the budget meeting the clocks
     scene remembers; she shows no footage and says nothing of what she did with it, the narration reads her line by the flag;
     Jaehyun's right shoulder; nobody knows about the roof; Mark gets no clean making-up and never asks anything; Jaemin knows
     nothing about the recording; his speech runs eleven minutes at nine, as the party says; Mark arrives at ten, so he misses
     his own name (unstated here). Nobody explains a glitch.
   Inventions (small): the clock's line forty-one, $340 a year, a man from Liverpool (the one in New York) who services it;
     Danielle working in pencil; Jaehyun's text about the charger Solar left at Tuesday's breakfast (contact 'big bro', as
     story-w1); Jisung's biology final; Danielle leaving Saturday night in a car her father sends; the hand warmers from the
     CVS on Marshall Street; Mark's rideshare to the bus station Saturday night; Jaemin's notecards with every name on both
     lists, one line each.
   Art ideas (for the lead; no cg lines here):
     - Danielle at the long dining table at midnight in one lamp's light, pencil in hand, the grandfather clock through the arch.
     - Jaemin on a snowy quad bench at half past midnight, notecards up, phone timer glowing, the bell tower behind him.
     - Mark on Sigma's back steps with a duffel and a keyboard case, porch light, snow, a phone showing a car four minutes out. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {});
  const B = (R.bonds ||= {});
  // people.js assigns B.<id> = {...} outright. If it hasn't loaded yet (the checker loads files alphabetically, so this one
  // comes first), hold the bond on an accessor that merges this week's hangouts into whatever people.js assigns later.
  const add = (id, role, list) => {
    if (B[id]) { (B[id].hangouts ||= []).push(...list); return; }
    let v = { id, role, hangouts: [...list] };
    Object.defineProperty(B, id, { enumerable: true, configurable: true, get: () => v,
      set: o => { (o.hangouts ||= []).push(...v.hangouts); v = o; } }); // everything merged so far (the time pass: several files can hold one bond)
  };

  /* ── Danielle (rival) ── */
  add('danielle', 'rival', [
    { id: 'epi-r-danielle-liability', title: 'a liability', hint: "The dining room light is on at midnight, and so is Danielle.",
      after: '12/8', until: '12/13', slots: ['late'],
      place: 'Syracuse · Alpha Phi House · Dining Room', time: 'Late Night', scene: [
      { music: 'epi-r-danielle' },
      { n: "The house had gone quiet in pieces the way it always did, a shower, a door, somebody's laugh through a ceiling and then nothing, and at a quarter to midnight Solar came down for a glass of water she didn't actually want, because her room had gotten too small around eleven, the way it did most nights now. The kitchen was dark. The dining room wasn't." },
      { n: "One lamp, the brass one from the sideboard, dragged to the end of the long table nobody ate at. A binder open under it, the chapter budget for spring, and a mug of tea that had stopped steaming a long time ago, and Danielle, in a cardigan buttoned all the way up, writing in pencil. In pencil, for once. Which meant nothing on that page was final yet, which was somehow worse." },
      { n: "Through the arch, at the foot of the stairs, the grandfather clock was doing the only thing it did. It was the one clock in the house you could hear from every room if the house was quiet enough, and the house was always quiet enough at this hour, and Solar had never once noticed it until she was standing in a doorway with Danielle Marsh not looking up at her." },
      { s: 'danielle', f: 'neutral', t: "Sit, or don't. You're not in my light either way." },
      { n: "She sat. She'd ask herself why later, on the stairs, and not get a good answer. Danielle turned the binder a quarter turn toward her, one finger, and tapped a line." },
      { s: 'danielle', f: 'neutral', t: "Line forty-one. Maintenance, grandfather clock, annual. Three hundred and forty dollars. A man drives in from Liverpool, the one in New York, not the real one, and oils it, and tells the house mother it's a treasure, and she tips him out of the petty cash, which I also pay for." },
      { s: 'danielle', f: 'neutral', t: "It's insured for more than our emergency fund. One woman winds it, on Sundays. If she ever gets sick, every person in this house who sets her day by it will be late, and nobody will be able to say by how much." },
      { s: 'danielle', f: 'happy', t: "That's a liability." },
      { s: 'solar', f: 'serious', t: "It's a clock." },
      { s: 'danielle', f: 'happy', t: "Everything's a clock, if you're doing the books right." },
      { ifFlag: 'epi-r-danielle-print', then: [
        { n: "The pharmacy envelope wasn't on the table. Solar looked for it anyway, under the receipts, under the binder's cover, the way you check a stove you know you turned off, and Danielle watched her look and let her finish, and didn't say a word about green." }
      ] },
      { s: 'danielle', f: 'neutral', t: "You're a member in good standing. Mostly. Vote. Strike it or keep it." },
      { choose: [
        { t: "Keep it.", then: [
          { s: 'danielle', f: 'happy', t: "Sentimental. I'll write down that you said so." },
          { n: "She did. A small neat note in the margin, in pencil, S.L. and a word Solar couldn't read upside down, and she blew the eraser crumbs off the page as if the note were finished, which it was, Solar understood, in every way that mattered to Danielle." }
        ] },
        { t: "Strike it.", then: [
          { s: 'danielle', f: 'neutral', t: "I can't. Chungha cried at the last meeting. It's in the minutes." },
          { n: "She drew a line through it anyway, slow, one clean stroke, and looked at it for a second the way you'd look at someone you'd just told a secret. Then she turned the pencil over and erased it, every grain, and the line was back the way it had been, three hundred and forty dollars, a treasure." },
          { s: 'danielle', f: 'happy', t: "I just like to see what it'd look like." }
        ] }
      ] },
      { n: "Out in the hall the clock struck the hour. All twelve, slow, the sound going up the stairwell and coming back down a little changed, and Danielle counted them under her breath without moving her lips, and Solar realized she was counting too and made herself stop at seven." },
      { n: "Danielle closed the binder on the pencil to keep her place. She stood, the mug and the binder and the lamp's cord gathered in one practiced motion, and stopped in the arch with the clock's face behind her shoulder, the way she always stopped in doorways, and Solar's stomach went tight before a single word came, because her body had learned this part before the rest of her had." },
      { s: 'danielle', f: 'serious', t: "Your brother takes every staircase left foot first now, and he's so good at making it look like a choice that the only two people on this campus who've noticed are sitting in this room." },
      { n: "Then she went. Past the clock, up the stairs, third step from the top silent under her as always, a door, the soft click, and Solar was left at the long table with her mouth already open on an answer and nobody to give it to." },
      { n: "Left foot first. She could see it the second it was said, the careful step down, his right arm kept close like something borrowed, a thing she'd half seen and been very careful not to add up. It was true. That was what Danielle did with the truth; she didn't tell you anything you didn't know, she just set it down in front of you with her own hand on it, so that you'd have to know she'd been watching him closely enough to see it, too." },
      { n: "The clock went on ticking in the hall, perfectly on time, the way it would be for a few more days yet. Solar sat there until her water was warm, and didn't drink it, and listened to it keep going." },
      { bond: { danielle: 1 } }
    ] },

    { id: 'epi-r-danielle-checkout', title: 'checkout', hint: "There's a suitcase coming down the Alpha stairs one step at a time, and Danielle is attached to it.",
      after: '12/20', until: '12/20', slots: ['evening'], events: ['epi-r-porch'],
      place: 'Syracuse · Alpha Phi House · Stairs', time: 'Evening', scene: [
      { music: 'epi-r-snow' },
      { n: "The house was emptying the way a bathtub empties, slowly and then all at once, and by seven the stairs had turned into a freight route. Girls going down with laundry bags and girls going down with duffels and somebody's mother in the front hall holding a casserole dish she'd clearly been told to return, and the whole staircase smelling of cold air every time the front door opened, and the front door opening every forty seconds." },
      { n: "Solar was going up. That was all. She'd hung the gray coat by the door, where it would be ready, and she was going up to sit on her bed for a while with her hands in her lap and not think about midnight, and at the second landing she met Danielle coming down." },
      { n: "A hard-shell suitcase, cream, the kind with a monogram somebody else had paid for. A garment bag over her arm. Her long black coat already on and buttoned to the collar, her hair up, a car somewhere outside with its engine running, Solar would have bet her life on it. Danielle was doing the stairs one at a time, the suitcase bumping down behind her on each step with a hollow, expensive sound." },
      { n: "Third step from the top. Danielle had never once let it talk. Tonight, with the weight of the case on it, it groaned, loud and long, the whole length of the stairwell, and both of them heard it, and Danielle's mouth went thin as a pencil line." },
      { s: 'danielle', f: 'neutral', t: "My father sends a car. He likes me home before the Thruway closes. He says it like the Thruway's his." },
      { s: 'danielle', f: 'happy', t: "You're leaving tomorrow. Nine. I saw the booking. I see most bookings." },
      { choose: [
        { t: "(Take the other end of the suitcase.)", then: [
          { n: "She took it without asking. The bottom handle, the one nobody uses. Danielle looked at her hand on it the way she'd look at a line item she hadn't approved, and then, after a second that seemed to cost something, let her." },
          { n: "They carried it down together. Six steps. Neither of them said a word, and the suitcase didn't touch a single stair, and at the bottom of the flight Danielle took it back, both handles, as if she were collecting a receipt." },
          { s: 'danielle', f: 'neutral', t: "That wasn't necessary." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { bond: { danielle: 1 } }
        ] },
        { t: "(Step aside and let her pass.)", then: [
          { n: "She stood back against the landing wall. Danielle came down past her, one step, then the next, close enough that Solar could smell the cold already on her coat and her perfume under it, something white and expensive and very sure of itself, and she didn't look at Solar once on the way, which was its own kind of looking." }
        ] }
      ] },
      { n: "At the bottom of the flight, under the landing window, with the snow going past it in the porch light, Danielle stopped. Of course she stopped. She turned, one hand on the suitcase handle, and looked back up at Solar, and Solar braced, because this was the doorway and doorways were where Danielle kept her best material." },
      { s: 'danielle', f: 'neutral', t: "I'll be here when you get back. I always am." },
      { ifFlag: 'epi-r-footage-file', then: [
        { n: "It should have sounded like a threat. It always had. But Solar had watched her delete it, every copy, the cloud too, one tap at a time with the screen turned so she could see, and there was nothing in that suitcase or that coat pocket or that phone that had Solar in it anymore. So it was only a sentence. A girl who lived in this house saying she'd be in it in January." },
        { n: "It was the strangest thing Danielle had ever said to her. It might have been the only plain one." }
      ], else: [{ ifFlag: 'epi-r-footage-sent', then: [
        { n: "Her brother had stood at the bottom of the front steps an hour ago for twenty minutes, in the snow, and said *car's at nine,* and said *nothing, we eat,* and said not one word about forty-one seconds of video that a girl had sent to someone with her last name. *We'll talk in it.* Danielle knew he had it. Danielle didn't know what he'd say in the car." },
        { n: "So that was what it meant. Whatever he said, on the Thruway, for four hours, she'd be here when it was over. And so would what she'd sent him. She didn't need to say that part. She never did." }
      ], else: [
        { n: "Her phone was in her coat pocket. Solar could see the shape of it through the black wool, square and small, and inside it, somewhere, forty-one seconds of a staircase and a timestamp turning over and a girl who wasn't there. *I haven't decided what it's for yet.*" },
        { n: "So that was what it meant. She'd be here. So would it. It would wait in her pocket all through Christmas the way she'd waited on the stairs all semester, patient, perfectly on time, and in January she'd still be deciding." }
      ] }] },
      { n: "*When you get back.* Solar's hand found the banister. She held on to it, lightly, the way you'd hold on to something only to know where it was. There was a roof six hours from now, and a ten-minute walk to it, and she had no idea, none at all, what *back* was going to mean by morning." },
      { n: "Danielle didn't wait for an answer. She never had. She turned the suitcase on its wheels and went down the last flight and through the front hall past somebody's mother and her casserole dish, and the front door opened on the cold and the snow and a black car idling on Walnut with its wipers going, and shut, and the stairwell was just a stairwell again, full of other people's luggage." },
      { n: "The third step from the top was quiet the whole way up. Solar tested it with her weight. It didn't say a thing." }
    ] }
  ]);

  /* ── Mark ── */
  add('mark', 'friend', [
    { id: 'epi-r-mark-jisung', title: 'jisung asked', hint: "Jaehyun says she left her charger at Sigma on Tuesday. The kitchen light is still on.",
      after: '12/16', until: '12/17', slots: ['late'], events: ['epi-r-kitchen'],
      place: 'Syracuse · Sigma Chi House · Kitchen', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { phone: [
        { from: 'jaehyun', t: 'your charger. you left it tuesday' },
        { from: 'jaehyun', t: 'hall table. front door is open. dont knock, people are sleeping' }
      ], contact: 'big bro' },
      { n: "Sigma at ten to one in the morning in finals week was a house holding its breath. The living room dark, a blanket over somebody on the couch who turned out to be a pile of coats, the stairs going up into nothing. Her charger was exactly where he'd said, on the hall table, coiled with the precision of a man who'd been told a hundred times to wrap his own cables and never had to be told about anyone else's." },
      { n: "The kitchen light was on. The door to it was half shut, and through the gap came the smell of toast and the sound of a kettle starting to tick, and two voices, low, and she knew both of them before she knew she was standing still." },
      { n: "Jisung at the island, she could see a slice of him, a hoodie and a stack of flashcards bound with a hair tie and a highlighter behind his ear. And Mark at the counter with his back to the door, buttering toast with great care, as if it were the last thing in the world he was still allowed to do correctly." },
      { s: 'jisung', f: 'neutral', t: "Can I ask you something?" },
      { s: 'mark', f: 'neutral', t: "You're going to anyway." },
      { s: 'jisung', f: 'serious', t: "Did you ever actually like her? Solar. Like for real. Or was it a thing. Jeno said it was a thing." },
      { n: "The knife stopped. Her hand stopped on the charger. Somewhere upstairs a radiator knocked twice and gave up, and in the gap after it she could hear her own heart, very stupidly, very loud." },
      { n: "She waited for it. The laugh, the warm useless deflection, the *come on, Jisungie,* the thing the old Mark would have reached for without even looking, the way you reach for a light switch in your own house. She'd heard him do it to a hundred people. She'd heard him do it to her." },
      { s: 'mark', f: 'serious', t: "Both." },
      { s: 'mark', f: 'serious', t: "I liked her the first day. Before I had any reason to. She was funny and she didn't let me get away with anything, and nobody'd done that in a while." },
      { s: 'mark', f: 'sad', t: "And I knew whose sister she was before I walked up to her. And I walked up to her because of it. Both of those are true at the same time. I used to only say the first one." },
      { s: 'jisung', f: 'surprised', t: "...Which one's more true?" },
      { n: "A long pause. The kettle got louder and clicked off, and he didn't move to pour it." },
      { s: 'mark', f: 'sad', t: "I don't know. That's the honest answer, and it's a bad one. If I knew, I'd have picked. I never figured out how to want one without the other." },
      { s: 'jisung', f: 'sad', t: "Are you going to be okay?" },
      { s: 'mark', f: 'neutral', t: "No. Not for a while." },
      { s: 'mark', f: 'neutral', t: "That's fine. That's supposed to happen. Eat the toast, you've been on the Krebs cycle since ten." },
      { n: "He slid the plate across the island. Jisung took it. Neither of them said anything for a while, and the silence was not the kind Sigma usually made, the loud nothing that had a shape. It was just two people in a kitchen at one in the morning with a true thing between them that neither of them was going to make nicer." },
      { n: "Solar stood in the dark hall with the charger in her fist and her face very hot, which was absurd, because nothing she'd heard was news, not really. Some part of her had known since September and had been very careful not to say so. It was only that she'd never heard it in his voice, plain, to someone who couldn't do a single thing for him, with no idea at all that she was ten feet away." },
      { choose: [
        { t: "(Step into the doorway.)", then: [
          { n: "She pushed the door the rest of the way. Mark turned. He saw the charger in her hand and her face and knew, all of it, in the time it took his shoulders to come down, and he didn't take a word of it back. She watched him not take it back. That was how she knew it had been true." },
          { s: 'mark', f: 'neutral', t: "...Hey." },
          { s: 'solar', f: 'neutral', t: "Charger." },
          { n: "She held it up. He nodded, like that was a complete explanation, and it was." },
          { s: 'jisung', f: 'happy', t: "Hi, Solar. Do you want toast? He makes it really even." },
          { s: 'solar', f: 'happy', t: "I'm good, Jisung. Good luck on the Krebs cycle." },
          { n: "Mark didn't say her name. He looked at the counter while she went, and she was almost sure it took him something not to." }
        ] },
        { t: "(Take the charger and go.)", then: [
          { n: "She went the way she'd come, past the coats on the couch, the front door, the cold. Behind her, through the house, she heard Jisung say something she couldn't make out and Mark laugh at it, short, surprised, a real one, the first she'd heard from him in a month. Then the door shut on it." },
          { n: "He'd never know she'd been there. She decided, halfway down the steps, that she wasn't going to tell him. Not to punish him. It just wasn't the kind of thing that would mean anything if she handed it back." }
        ] }
      ] },
      { n: "Walnut Avenue was white and empty all the way to the Alpha porch. She walked it with the charger in her coat pocket and *both* going round in her head like a song she hadn't asked for, and it didn't resolve, the way his music never used to, and it didn't hurt the way she'd expected. It just sat there being true. She thought that was probably what it was supposed to do." },
      { stat: { kindness: 1 } }
    ] },

    { id: 'epi-r-mark-backdoor', title: 'the back door', hint: "There's a duffel bag on Sigma's back steps, and Mark sitting next to it like he's waiting for a bus.",
      after: '12/20', until: '12/20', slots: ['evening'], events: ['epi-r-porch'],
      place: 'Syracuse · Sigma Chi House · Back Porch', time: 'Evening', scene: [
      { music: 'epi-r-verdict' },
      { n: "She'd gone out for hand warmers. That was the reason she'd have given anyone who asked, and nobody did, not the girl at the CVS register on Marshall Street, not the snow, so she carried the bag back with ten packets in it and the reason folded up small inside her where it belonged. She'd left the gray coat on its hook. She'd gone out in the old puffer instead, because the gray coat was for later." },
      { n: "She took the alley behind Walnut because it was shorter and nobody shoveled it and she didn't want to walk past any front porches tonight. Halfway down it Sigma's back light was on, the yellow one over the steps, and under it, on the top step, with a duffel bag beside him and a keyboard case leaned against the railing like a second person, was Mark." },
      { n: "He wasn't on his phone. He was just sitting, his elbows on his knees, watching the snow come down into the yard where the beer cans had been frozen into the drifts all December and were now, finally, buried. He saw her at the gate. He didn't get up." },
      { s: 'mark', f: 'surprised', t: "Oh. Hey." },
      { s: 'mark', f: 'neutral', t: "I'm going tonight. Everybody goes tomorrow. I figured I'd save the house the part where it has to decide whether to say bye to me." },
      { n: "He turned his phone around so she could see it. A little car on a map, crawling up Euclid. *4 min.*" },
      { s: 'mark', f: 'happy', t: "Four minutes. I'm not going to make it ten. I've used up my tens." },
      { choose: [
        { t: "(Sit on the step beside him.)", then: [
          { n: "She came through the gate and up the steps and sat, not close, the duffel between them like a chaperone. The step was cold through her jeans. He looked at the space she'd left and didn't try to make it any smaller, and that was new enough that she noticed it all over again." }
        ] },
        { t: "(Stay at the bottom of the steps.)", then: [
          { n: "She stayed where she was, at the bottom, with the snow landing on her hood. He looked down at her from the top step and nodded once, like that was the right distance and he'd been about to suggest it." }
        ] }
      ] },
      { ifFlag: 'epi-r-mark-door', then: [
        { s: 'solar', f: 'neutral', t: "How many bars now." },
        { s: 'mark', f: 'flustered', t: "Don't." },
        { s: 'mark', f: 'serious', t: "If I tell you, I'll start writing them so I've got a better number for you next time. I can feel it. It's like a muscle." },
        { s: 'mark', f: 'neutral', t: "It's coming home with me. That's all I'll say about it." },
        { n: "He put his hand on the keyboard case, flat, the way you'd put a hand on a dog to keep it from getting up." }
      ], else: [
        { n: "She looked at the keyboard case. He saw her look at it, and didn't say anything about what was in it, and she didn't ask. She'd given him nothing in that kitchen to carry home. He was carrying it anyway. It wasn't her business, and he seemed to understand that it wasn't, and that was almost the whole conversation." }
      ] },
      { ifYear: { noFlag: 'arrived-mark' }, then: [
        { s: 'mark', f: 'sad', t: "I left over there without telling anybody, too. You didn't notice. That was probably—" },
        { n: "He stopped. She watched him hear the end of the sentence coming, the one he'd said to her more than once now, and close his mouth on it." },
        { s: 'mark', f: 'neutral', t: "No. I'm retiring that one. It was starting to sound like I wanted credit for it." }
      ], else: [
        { s: 'mark', f: 'sad', t: "Over there you let me stand by the window. Now I'm on the back steps. That's further out. I know it is. I'm not complaining. I'm just saying I can tell." }
      ] },
      { n: "His eyes went to the CVS bag in her hand. Ten hand warmers, the orange packets pressed against the thin plastic, at eight o'clock on the last Saturday before break, on a night nobody had anywhere to be. She watched him see them. She watched him almost ask, the question rising up in him the way it used to, easy, warm, *what are those for,* the coin sitting right there in his mouth." },
      { n: "He didn't ask. He looked at the bag for exactly one second too long and then looked at the yard instead, and that was the thing she'd remember, later, of all the things he did that December. Not the envelope. Not the bars. The not-asking." },
      { s: 'mark', f: 'neutral', t: "Get inside, okay? It's cold." },
      { n: "Headlights swung across the end of the alley. The little car on his phone had arrived and was sitting there, hazards going, in the snow. He stood, the duffel over one shoulder and the keyboard case in his other hand, and came down the steps, and stopped at the bottom of them a person's width from her, the way he'd stood by a fireplace last night." },
      { n: "There were a lot of things he could have said. She watched him go through them, all the sentences that would have bought something, *take care of yourself, Sol, I'm proud of you, I'll text you Christmas,* and put each one back. He'd never been any good at leaving a room without taking something out of it. He was trying." },
      { s: 'mark', f: 'happy', t: "See you, Sol." },
      { n: "Not goodbye. He'd never once said goodbye to her. She wasn't sure, standing in the alley with the snow coming down between them, whether that was because he didn't think it was one, or because he did." },
      { n: "He went down the alley toward the headlights with the keyboard case knocking gently against his leg, and got in, and the car pulled away up Euclid, and the back light over Sigma's steps stayed on behind him for nobody. She didn't wave. He didn't look back to see if she would. She stood there until the hand warmers in the bag had gone cold in the cold, and then she went home the long way after all." },
      { bond: { mark: 1 } }
    ] }
  ]);

  /* ── Jaemin ── */
  add('jaemin', 'friend', [
    { id: 'epi-r-jaemin-eleven', title: 'eleven minutes', hint: "Someone on the quad is giving a speech to the bell tower. It's Jaemin. He has notecards.",
      after: '12/15', until: '12/17', slots: ['late'],
      place: 'Syracuse · The Quad', time: 'Late Night', scene: [
      { music: 'epi-r-late' },
      { n: "Half past midnight, the quad empty and blue under the lamps, the snow on it so flat and so new that the only tracks across the whole thing were one set of boots going out to the middle and stopping. At the end of them, on a bench he'd cleared with his sleeve, in a camel coat with the collar up, Jaemin was addressing the bell tower." },
      { s: 'jaemin', f: 'happy', t: "—and to Alpha Phi, who are here, and who are beautiful, and who are not allowed in the kitchen after eleven, because of what happened in October, which we don't—" },
      { n: "He saw her. He didn't stop. He just pointed at the other end of the bench with a notecard, like an usher, and kept going, and she found that she was sitting down before she'd agreed to." },
      { n: "He had the cards in a stack as thick as a sandwich, held together with a hair tie that was very clearly Hyein's, and a phone on his knee with a timer running, and he gave her the whole thing. The welcome. A bit about the run of show that ended with *and there will be a slide here,* and when she asked of what, he said *the fridge,* in a voice that made it clear the question was beneath them both. A section on Jeno and the Pink Punch. And then the emergency vacation." },
      { s: 'jaemin', f: 'happy', t: "Some of us went on an emergency vacation. Some of us were not invited. Some of us are still not over it. I'm some of us." },
      { s: 'jaemin', f: 'happy', t: "Pause for laugh. It's a big pause. You'll laugh like it's the first time." },
      { n: "She laughed. It came out mostly real, which surprised her. A lodge that didn't exist, a trip nobody took, the best joke on campus, and the man telling it had no idea it was a joke at all." },
      { n: "Then the names. Every single one. Both lists, Sigma's and Alpha's, one card at a time, a line for each, *Renjun, who did the decorations under protest and did them beautifully, and who will deny both,* *Olivia, who is the loudest person I've ever loved,* *Chenle, who is driving you home, so be nice to Chenle,* and on and on, through Johnny and Yuta and Jisung and Yerim and Chungha, until the timer on his knee said 11:04 and he looked up at her, breathless and enormously pleased." },
      { s: 'jaemin', f: 'happy', t: "Well?" },
      { s: 'solar', f: 'neutral', t: "The run of show says three minutes." },
      { s: 'jaemin', f: 'serious', t: "The run of show is a guide. It's a living document. Somebody wrote *lol* on it in pencil and I respected that." },
      { s: 'solar', f: 'neutral', t: "Give me the cards." },
      { n: "He gave her the cards. She went through them on her knee under the lamp the way she'd go through a deck for a class presentation, the way she'd been taught at a dinner table to go through anything, fast, pitiless, looking for what a room would actually hold on to and what it would forgive you for cutting." },
      { choose: [
        { t: "Cut the names. Nobody listens to a list.", then: [
          { s: 'jaemin', f: 'serious', t: "Everybody listens to their own name." },
          { n: "He said it so simply that she looked up. He wasn't joking. For once in his life Na Jaemin wasn't performing anything at all." }
        ] },
        { t: "Cut the emergency vacation bit.", then: [
          { s: 'jaemin', f: 'surprised', t: "Absolutely not. It's the only joke I've got that the whole room's in on." },
          { n: "She didn't say anything to that. There was nothing to say to that that wouldn't take a year to explain." }
        ] }
      ] },
      { n: "She cut it anyway. Jeno's third near-death, the bit about the snowflakes, two of the four jokes about the fridge, a long tangent about the velvet. Jaemin ran it. The timer said 9:02. He looked at it for a while." },
      { s: 'jaemin', f: 'happy', t: "That's very good. You're very good. That's a nine-minute speech a person could actually give." },
      { s: 'jaemin', f: 'neutral', t: "I'm doing eleven." },
      { s: 'solar', f: 'surprised', t: "Then why did you let me cut it?" },
      { s: 'jaemin', f: 'neutral', t: "So I'd know what I was keeping." },
      { n: "He took the cards back and found one near the bottom and held it out to her, and didn't say anything, which on Jaemin was a whole paragraph. *Mark.* That was all that was on it. There'd been a line after the name once; it was crossed out, so hard the pen had gone through the card, and what was left was just the name, in purple, on its own, the way you'd write a name on a coffee cup." },
      { ifEvent: 'epi-r-kitchen', then: [
        { n: "She knew why it was crossed out. A drive in an envelope, a letter to a Dean, a VP with a blue ballpoint. She knew more than Jaemin did, probably, and less than he'd guessed." }
      ], else: [
        { n: "She didn't know why. She only knew that this was a house that had decided something about Mark Lee without telling her, and that Jaemin had decided something too, on his own, in purple, and it wasn't the same thing." }
      ] },
      { s: 'jaemin', f: 'neutral', t: "Once a year everybody in that house gets their name said out loud by somebody who means it. For some of them it's the only time all year anybody does." },
      { s: 'jaemin', f: 'neutral', t: "He might not even be there at nine. Doesn't matter. It gets said." },
      { n: "The bell tower struck one, a single note, very far away in the cold. Jaemin put the hair tie back round the cards and the cards in his coat, and the timer back to zero, and stood, and brushed the snow off his shoulders like a man stepping offstage." },
      { s: 'jaemin', f: 'happy', t: "Eleven minutes. Nobody's ever going to remember a single word of it. That's how you know it was the right length." },
      { n: "He walked her as far as Walnut without asking if she wanted him to, narrating the party that hadn't happened yet to the empty street, and she let him, and somewhere around the corner she realized she'd been saying the names along with him under her breath, all of them, in order, and hadn't noticed when she'd started." },
      { bond: { jaemin: 1 } },
      { stat: { kindness: 1 } }
    ] }
  ]);
})();

// The team is one bond with a name of its own (epilogue.js bondName).
(() => { const B = ((window.FEMC_EPI_WORLDS ||= {}).runners ||= {}).bonds || {}; if (B.olivia) B.olivia.name = 'The team'; })();
