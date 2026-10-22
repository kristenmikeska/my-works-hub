/* Hyein · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Runners), friendship. Solar's sorority sister: the Fashion major, the tallest of the girls, excitable, says
   what she thinks louder than she should. Her canon gift (Runners Ch 65): when something is off with Solar she becomes the
   center of attention, so the room looks at her instead. Here that is her whole arc: the loud one who shines so Solar
   doesn't have to (Haenim's own myth, the girl who hides by shining, turned inside out), learning she can stop.
   A separate link from Hanni (Kat's ruling); they appear in each other's scenes. No Persona (Kat's ruling). Her crossing
   with Hanni (9/12), "names, then" (9/13), the Halloween wall (10/31), the first-party floor (11/21, Hanni stands in front
   of her) and "come home, sol" (12/14) are story events; the ranks sit around them. She lives on the dorm's second floor
   (a4-names), sews on a machine Mitsuru found in a storeroom, and dries her hair at three in the morning (plot doc §14).
   Canon echoes (Runners_text): the Winx chat (UR GONNA BE STELLA / LTRLY THE FAIRY OF THE SUN AND MOON / ITS UR NAME THIS
   WAS PREDESTINED FR / small wings?! :) / ..fine), the bathroom full of steam and four costume bags, "you're literally
   Stella" / "Please don't start calling me that." / "I won't, Stella.", the Sigma costume contest (the appropriate price;
   "my rates have gone up, but this is proof of my legacy"), the girl who DM'd her about prices, coats over costumes as a
   personal attack, "I hear criticism and choose to ignore her", "chillax", Solar's long black coat her mother bought her.
   Nothing from home moves Runners' plot; nobody's secrets are told.
   Flags this link sets (all its own): hyein-menace (r1, Solar says "ur so annoying"), hyein-stella (r3, she asks for the
   costume again), hyein-yelled (r4), hyein-shop (r6, commissions in Iwatodai), hyein-dress-run / -pockets / -red (r9, what
   Solar picks). They pay off in later ranks and afterMax. Reads the story flag call-R (12/14) in rank 10.
   Kat's playtest notes 42/43/45: rank 1 answers the choice Solar actually made (no shared "why are you talking like that");
   rank 2 notices Akihiko (and, before 10/4, Shinjiro) by their link ranks; rank 6 nearly tells a Halloween secret and stops.
   Texting voice: lowercase, caps when excited, ur, ltrly, fr, ofc. Arcana: '?' (open question, plot doc §16.6).
   Ranks 11-15 (maxRank 15; meter ranks, 2026-10-22 batch): 2/4 the shop window on the second floor of the mall (she dresses
   it), 2/11 the lounge on the holiday (she has no voice), 2/18 the workroom at the end of the second-floor hall (labels), 2/23
   the strip and the old woman's fabric shop (the question from rank 9), 2/27 the shop windows (Solar dresses her). The route
   is locked by then: each rank has one key passage branched by heading (H / S / R / stay / true; 13 and 15 share one
   passage between S and H with a line of their own each). Friendship link: no ifRoute. Every path's best answers total 12
   notes. Rank 15 sets hyein-r15 (nothing reads it yet). stretchHangouts: three February hangouts for a meter a rank scene
   didn't fill. afterMax plays between rank 10 and rank 11 and after 15 (its five entries all read right in late February).
   Living content for these ranks (afterRank 11-15 texts, a routine, a late night): data/living-r15-hyein.js.
   Haechan's ranks 11+ have her making Solar a second coat (the charcoal one); rank 13 labels it and reads his afterRank
   11 texts (the paper label on stay, "the everything coat" on true). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hyein', name: 'Hyein Lee', short: 'Hyein', arcana: 'Lovers', numeral: '', from: 'Runners',
  kind: 'searcher', world: 'R', romance: null, maxRank: 15,
  starts: '9/12', gate: { R: 3 },
  home: { area: 'mall', spot: 'Shop Windows', slot: 'after', days: [0, 2, 4, 6],
          hint: 'Afternoons along the shop windows in Paulownia Mall, judging every mannequin out loud.' },
  approach: "A very tall girl with very long, very straight hair is standing in front of a shop window in Paulownia Mall telling a mannequin, out loud, exactly what's wrong with its jacket, and she spots you in the glass and turns around already pointing.",
  cast: {},
  invite: {
    ask: [
      "SOL. come to the mall. i need a body",
      "r u busy. dont be busy. i made u something",
      "EMERGENCY. fashion emergency. come now",
      "the shop on the second floor got new coats and i need to touch them with a witness",
      "hanni says im being too much today. come be too much with me",
      "ok i need ur opinion and then im going to ignore it. come",
      "my beloved solar. my sun and moon. come hold pins",
      "theres a mannequin here wearing a belt UNDER a cardigan. i cant do this alone",
      "the fabric lady has a new bolt and she did the gasp. u know what that means",
      "come stand in front of a mirror for me. its for science. its for fashion. same thing",
      "im being normal today i promise. come see me be normal",
      "ok real question. how do people here wear THIS MUCH beige. come help me understand"
    ],
    ok: ["YAY. shop windows. 10 min", "ok!!!! dont dress up. i'll fix u", "OK. bring ur whole self", "YESSS. hurry. the mannequin is winning", "ok ok ok. wear the coat. u know which coat", "perfect. ur my favorite. dont tell hanni"],
    no: ["ok but ur missing a LOOK", "fine. drink water. ttyl", "ok!! tmrw then. i'll still be here being right", "boo. ok. i'll describe it to u later in detail. so much detail", "fine. chillax. go do ur midnight thing", "ok 😔 the mannequin and i will be fine. probably"]
  },
  hangouts: [
    [
      { place: 'Iwatodai Strip', time: 'After School', soft: true },
      { n: "Hyein had found a fabric shop on the strip run by an old woman who spoke no English and needed none, and the two of them had developed a whole language made of pointing and gasping, and Solar was now standing in the doorway with the bell still going over her head, watching it happen, which was a little like watching two birds who had found out they were the same kind of bird." },
      { n: "The shop smelled of dust and starch and the radiator, and every wall was bolts of cloth stacked to the ceiling in an order only the old woman understood, and Hyein was in the middle of it with both arms out, like the room was a song she knew the words to." },
      { s: 'hyein', f: 'happy', t: "She has VELVET. Sol. She has a velvet in a color I have never seen. It's like if wine was sad." },
      { choose: [
        { t: "(Touch the velvet.)", notes: 3, then: [
          { n: "She touched it. It was very soft, and it went darker under her fingers and lighter when she lifted them, like grass does when the wind goes over it. The old woman watched her touch it and said something approving, and Hyein translated it, wrongly and confidently, as *your friend has taste.*" },
          { s: 'hyein', f: 'serious', t: "She's never said that to me. All the times I've been in here. Not once. You walk in and get *taste* on the first day." }
        ] },
        { t: "What would you make with it?", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "A coat. Long. For you. Obviously. You'd look like a villain in a period drama. You'd look like you were about to inherit something." },
          { s: 'hyein', f: 'neutral', t: "...Which you are. Which is why you'd hate it. Which is why I'd make it anyway." }
        ] },
        { t: "Do you have money for velvet?", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "No. Mitsuru gave me an envelope. I'm being responsible. I'm just going to look at it. With my hands." }
        ] }
      ] },
      { n: "She bought half a meter of it anyway, with her own coins, counting them out onto the counter one at a time while the old woman watched with the patience of someone who had seen a lot of girls fall in love with a lot of cloth, and she carried it home under her arm like a cat." },
      { ifRank: { hyein: 6 }, then: [
        { s: 'hyein', f: 'happy', t: "She gave me a discount. Did you see? She does that now. We have a relationship." }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Front', time: 'After School', soft: true },
      { n: "Hyein was sketching on the dorm's front steps with her knees up and her sketchbook propped on them, drawing the people walking past on the street below, and every single one of them was wearing something better than what they were actually wearing." },
      { s: 'hyein', f: 'neutral', t: "That man. Look at that man. He's wearing a beige jacket. I've given him a camel coat. He deserves it. He's had a hard day. Look at his face." },
      { n: "Yukari came up the steps behind them with her bag over one shoulder and a pink cardigan buttoned exactly once at the top, and Hyein's pencil stopped mid-line, and she turned all the way around on the step to watch her go in, the way you'd turn to watch a car you liked." },
      { s: 'yukari', f: 'surprised', t: "...What? Is something on me?" },
      { s: 'hyein', f: 'serious', t: "No. Nothing. You're a pink cardigan girl. I respect it. One button. Very brave. Carry on." },
      { s: 'yukari', f: 'neutral', t: "...Thanks? I think?" },
      { n: "The door shut behind her. Hyein drew her in from memory in about nine seconds, and didn't change a single thing about her, and showed Solar the page with the air of a woman presenting evidence." },
      { choose: [
        { t: "Do me.", notes: 3, then: [
          { n: "She drew Solar in four quick lines. Not in a coat. In the Gekkoukan uniform, exactly as she was, with the armband, with her hair falling in her face. Then she looked at it and frowned and didn't change anything." },
          { s: 'hyein', f: 'neutral', t: "...Huh. I don't want to fix you. That's new. Don't let it go to your head." }
        ] },
        { t: "Give that kid a cape.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "A CAPE. Yes. He's earned it. He's been holding his mom's bag for twenty minutes." }
        ] },
        { t: "You didn't fix Yukari either.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Some people are already doing it on purpose. You can tell. You leave them alone. It's a professional courtesy." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', soft: true },
      { n: "Hyein had decided Koromaru needed a scarf. Ken had decided Koromaru did not need a scarf. The two of them were in the lounge negotiating it like a treaty, while Koromaru sat between them looking from one to the other with the patient dignity of a dog who could hear his name." },
      { s: 'ken', f: 'neutral', t: "He doesn't get cold. He's a Shiba. It's in the breed." },
      { s: 'hyein', f: 'serious', t: "Everyone gets cold, Ken. Everyone. It's in the breed of being alive." },
      { choose: [
        { t: "(Side with Ken.)", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "BETRAYAL. In my own home. Which isn't my home." },
          { s: 'ken', f: 'happy', t: "Thank you, Solar-san. Someone in this building is reasonable." },
          { n: "Koromaru, who had been following the vote closely, got up, walked over to Hyein, and lay down across her feet, which settled nothing and was, Ken admitted, very unfair." }
        ] },
        { t: "(Side with Hyein.)", notes: 3, then: [
          { n: "Ken looked at the two of them, outnumbered, and sighed like a man three times his age, and permitted one scarf, red, on a trial basis. Koromaru wore it with enormous pride for the rest of the evening and refused to let anyone take it off." }
        ] },
        { t: "Ask Koromaru.", notes: 3, then: [
          { s: 'koromaru', f: 'happy', t: "Woof!" },
          { s: 'hyein', f: 'happy', t: "He said yes. You heard him. Ken, you heard him." },
          { s: 'ken', f: 'serious', t: "He says that about everything." },
          { s: 'hyein', f: 'neutral', t: "So do I. It's a valid lifestyle." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', soft: true },
      { n: "Hyein had Aigis on a dining chair in the middle of the lounge, which was not a sentence anyone in the dorm had expected to hear, in a cream sweater three sizes too big that Hyein had found at the back of the lost property box at the station and washed twice, and was circling her slowly with a pin in her teeth, the way a sculptor circles a block of marble she has decided is hiding a horse." },
      { s: 'aigis', f: 'neutral', t: "This garment provides no tactical advantage." },
      { s: 'hyein', f: 'neutral', t: "Neither do I. Hold still." },
      { s: 'aigis', f: 'flustered', t: "I am always still. I am the stillest person in this building." },
      { s: 'hyein', f: 'serious', t: "You're still like a mannequin. I need you still like a girl on a Saturday. It's different. It's in the shoulders. Drop them. More. Like you just remembered there's no school tomorrow." },
      { n: "Aigis looked at Solar over Hyein's head, very calmly, in the way she did when she wanted a second opinion and didn't know that was what she wanted." },
      { choose: [
        { t: "Like you're waiting for someone you like.", notes: 3, then: [
          { n: "Aigis's shoulders came down. Not all the way. About an inch. Her hands, which had been flat on her knees, turned over a little, so the backs of them lay against the cloth instead." },
          { s: 'hyein', f: 'surprised', t: "...Oh. Oh, okay. Nobody move. Sol, look at her. She looks like she's about to go get a coffee with someone." },
          { s: 'aigis', f: 'happy', t: "I do not drink coffee." },
          { s: 'hyein', f: 'happy', t: "You don't have to. That's the trick. You just have to look like you might." }
        ] },
        { t: "She looks good, Hyein.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "She looks *great.* She looks like she's holding her breath. Those aren't the same." }
        ] },
        { t: "(Sit on the floor and watch.)", notes: 2, then: [
          { n: "Solar sat on the rug with her back against the sofa and watched Hyein work, and it was, she found, the kind of thing you could watch for a long time, somebody very good at something doing it in a room full of people who'd stopped noticing they were watching." }
        ] }
      ] },
      { n: "When it was done the sweater fell right, soft at the neck and loose at the wrists, and Aigis stood and looked at herself in the dark glass of the television for a long moment, turning her arm over, and then said, to nobody, that it was warm, as though she were reporting a fact she hadn't been told to look for." }
    ],
    [
      { place: 'Paulownia Mall · Karaoke', time: 'After School', soft: true },
      { n: "Mandragora's song list was a binder. An actual binder, laminated, the pages soft with use, and Hyein had been through it twice in the back booth with her finger running down every column and her face getting more and more stricken, like someone reading a list of the dead and not finding a name she was hoping to find." },
      { s: 'hyein', f: 'sad', t: "It's not in here. My song. My actual favorite song in the world. It's not in here. It's not anywhere. It doesn't EXIST yet, Sol. It's going to come out in, like, fifteen years. I'm going to have to wait fifteen years to hear my favorite song." },
      { s: 'hyein', f: 'serious', t: "So I'm doing it a cappella. Get up." },
      { n: "She did it a cappella, standing on the booth's seat in her socks, and it had arm motions, letters, big ones, the kind you did with your whole body at a party at one in the morning when the room had decided to be one person, and the third time she did them Solar's arms went up on their own and made the shapes a half beat before Hyein's did." },
      { s: 'hyein', f: 'surprised', t: "...SOL." },
      { choose: [
        { t: "(Keep going. Louder.)", notes: 3, then: [
          { n: "She kept going. She had no idea what the words were and her arms knew every letter, and Hyein screamed and jumped off the seat and did them with her, facing her, in the little booth with the disco light turning, until a boy came in from the corridor to ask if everything was okay and Hyein made him do the letters too." }
        ] },
        { t: "I don't know this song.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "Your ELBOWS know this song. Your elbows have been to more parties than you have." }
        ] },
        { t: "(Put your arms down, embarrassed.)", notes: 1, then: [
          { n: "She put them down. Hyein looked at her for a second, and then did the next letter twice as big, so that anyone who looked in through the glass would only ever see the tall girl on the seat, and Solar laughed, and her arms went back up." }
        ] }
      ] },
      { s: 'hyein', f: 'happy', t: "Okay. Fifteen years. I can wait fifteen years. I'll just do it myself every day until then." }
    ]
  ],
  stretchHangouts: [
    [
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening', soft: true },
      { n: "Hyein's hands had gone to pieces in February. The cold, and the needles, and the dorm's hot water, which she ran too hot on purpose, and the fingertips of her right hand were cracked across the pads in thin red lines, so that she held the needle that week with a small wince every time, the way you'd step on a sore foot and pretend you hadn't." },
      { n: "She was under the lounge kotatsu with her legs in up to the waist and a hem on the tabletop, sewing anyway, and the tube of hand cream Fuuka had left out for her sat at her elbow, unopened, because it was, she said, for people who weren't busy." },
      { choose: [
        { t: "(Take the needle off her. Hold out your hand for hers.)", notes: 3, then: [
          { n: "She held her hand out and waited, and Hyein looked at it for a long time, and then put hers in it, palm up, like a kid at the nurse's, and Solar did the cream the slow way, into every cracked fingertip, while Hyein sat very still under the kotatsu with her face doing something it didn't usually do, which was nothing." },
          { s: 'hyein', f: 'flustered', t: "...Okay. That's nice. That's so nice. Don't tell anyone I let you." }
        ] },
        { t: "(Do the hem for her. Badly.)", notes: 2, then: [
          { n: "She did it badly. Hyein watched every stitch with her cracked hands tucked in her armpits and her mouth twitching, and didn't take it back, and at the end said it was the ugliest hem in Japan and that she was keeping it exactly like that." }
        ] },
        { t: "Hyein. Use the cream.", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "Later. After this hem. After the next hem. The hems are endless, Sol. That's the tragedy of hems." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Strip', time: 'After School', soft: true },
      { n: "There was a hundred-yen shop on the strip with a whole wall of buttons in little plastic bags, and Hyein needed six matching ones, and the wall had five. Five of the exact gray horn ones she wanted, and a gap on the hook where the sixth bag should have been, and she'd been standing in front of that gap for some time when Solar found her, looking at it the way you'd look at a missing tooth." },
      { s: 'hyein', f: 'sad', t: "Five. FIVE. Who buys one bag of buttons. Who does that. Who needs one button that badly." },
      { choose: [
        { t: "Put a different one on the bottom. Make it on purpose.", notes: 3, then: [
          { n: "Hyein went still, and then turned to the wall and went down it with one finger, and came up with a single red button, bright as a berry, and held it up next to the five gray ones, and her face went from grief to genius without stopping anywhere in between." },
          { s: 'hyein', f: 'happy', t: "On purpose. It's on purpose. Everyone who sees it will think I meant it. I DID mean it. I mean it now." }
        ] },
        { t: "(Check the back of the shop. Ask the clerk.)", notes: 2, then: [
          { n: "The clerk had none. The clerk, very kindly, offered a button off his own cardigan, and Hyein was so moved she couldn't take it, and bought five, and a red one, and a pack of gum for the clerk, which confused everyone." }
        ] },
        { t: "Nobody's going to count the buttons.", notes: 1, then: [
          { s: 'hyein', f: 'serious', t: "I'M going to count the buttons. I count everybody's buttons. I counted yours this morning. You've got one loose. Give me your coat." }
        ] }
      ] }
    ],
    [
      { place: 'Iwatodai Station', time: 'After School', soft: true },
      { n: "Hyein had a lost scarf. Not hers. Somebody's, a child's, striped, left on a bench on the platform with a hole worn through one end, and she'd been carrying it around in her coat pocket all morning trying to decide whether it was stealing to mend a thing before you handed it in." },
      { s: 'hyein', f: 'neutral', t: "The lost property box is where I found Aigis's sweater. Things go in there and come out better. That's my whole relationship with that box. I'm giving back to the box." },
      { choose: [
        { t: "It's not stealing. It's a repair. Sit.", notes: 3, then: [
          { n: "They sat on the bench where the scarf had been left, and Hyein darned the hole with gray thread out of the little kit she carried everywhere now, in neat close rows like a tiny piece of weaving, and handed it in at the window, and the station man looked at it and at her and wrote something on the tag that she said, very confidently, was *thank you*, and that Solar was fairly sure was the date." }
        ] },
        { t: "(Write a note to pin to it. *Fixed. Sorry for the wait.*)", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "*Sorry for the wait.* That's my line to my client. You stole it. I love it. It's going on the scarf." }
        ] },
        { t: "The kid's mom will wonder.", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "Good. Let her wonder. Let her think the station has elves. Somebody should think that about somewhere." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '9/15', title: '1: things lie on hangers', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { n: "Hyein had been at the mall for two hours. Solar found her at the same row of windows on the second floor, staring at a mannequin with her arms folded, like a woman who'd lost a fight with it and was waiting for a rematch." },
      { n: "She was wearing a pink cardigan that was very much not from this decade, cropped short, the buttons the size of coins, over a borrowed Gekkoukan blouse and her own jeans, and three different people walking past had slowed down to look at her, which she either didn't notice or noticed and considered correct." },
      { register: 'hyein' },
      { s: 'hyein', f: 'happy', t: "SOLAR. Oh my God, perfect, come here, I need a body." },
      { n: "Solar looked behind her. There was nobody behind her but a man walking a very small dog, who looked back at her, with the dog, in what felt like solidarity." },
      { s: 'hyein', f: 'serious', t: "Not him. You. Come here. Stand here. Don't move. Things lie on hangers. I need to see this on a person." },
      { s: 'hyein', f: 'neutral', t: "Also, real quick, before you say anything polite. Everything in this whole mall is low-rise. Everything. I walked in here and it was like walking into my mom's photo albums. I've been in this building for two hours having a spiritual experience." },
      { n: "The jacket was cropped and structured, dark wool, nothing like anything Solar owned, which was nothing, and Hyein had it off the rack and onto Solar's shoulders before she'd finished walking over, tugging the hem, frowning at the sleeves with her whole face, a pin held in the corner of her mouth that Solar had not seen her take out of anywhere." },
      { s: 'hyein', f: 'serious', t: "Okay. So this is either giving, or it's not giving, and I genuinely can't tell." },
      { choose: [
        { t: "It's giving.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "It IS giving. Thank you. This is why I keep you. You have no taste in anything you buy for yourself and perfect taste in everything I make you try on." },
          { s: 'hyein', f: 'neutral', t: "Hanni's going to be so jealous. She's been trying to get you into anything with a shoulder since the first week of school." }
        ] },
        { t: "The sleeves are too long.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "THANK you. Finally somebody in this friend group has EYES." },
          { n: "She pinned them on the spot, two neat tucks, without asking, and stepped back with her head on one side, and something passed over her face that was not about sleeves at all." }
        ] },
        { t: "I don't usually wear things like this.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "You wear things like this every single day, Sol." },
          { s: 'hyein', f: 'sad', t: "...Don't you?" }
        ] }
      ] },
      { n: "In the shop glass the two of them stood side by side, the tall girl with her long hair over one shoulder and her hands still on the hem, and the shorter one in a jacket that wasn't hers yet, looking at herself with the careful, slightly suspicious face she used on mirrors, as though checking a room for something that had been moved." },
      { n: "Hyein watched her do it in the reflection. She didn't say anything about it. She went very busy with a button that was already done up." },
      { n: "Hanni came out of the shop next door with a paper bag and her face lit up at the sight of the two of them, and then lit up more, and then went soft at the edges, the way it did, all of it out loud." },
      { s: 'hanni', f: 'happy', t: "Oh! She's in a jacket! Hyein, you got her in a jacket!" },
      { s: 'hyein', f: 'neutral', t: "I got her in a jacket. Look at the shoulders. That's the right shape. I've been trying to tell the mannequin." },
      { n: "And then, because one jacket had never once in her life been enough for Hyein, there was a scarf off the next rack, and a beret off the next mannequin over, and the pin out of her mouth and into a hem, and all of it narrated at a volume meant for the entire second floor, to Hanni, to the shop girl, to a woman with a stroller who had not asked, while Hyein turned Solar by the shoulders toward the glass and away from it and toward it again, like a girl adjusting a lamp." },
      { choose: [
        { t: "(Stand still. Let her.)", notes: 3, then: [
          { n: "Solar stood still and let her. She didn't sigh. She didn't touch the beret. She didn't do any of the things her body seemed to be waiting, faintly, to do, and halfway through the scarf Hyein's hands slowed down, and stopped, and stayed where they were on the knot." },
          { s: 'hyein', f: 'sad', t: "...You'd have taken the beret off by now. At home. You'd have taken it off and put it on my head and walked away." },
          { n: "Her voice did a thing at the end, a little crack, like a seam letting go. She took the beret off Solar herself and put it on her own head, crooked, and went back to the scarf, louder." }
        ] },
        { t: "Hanni. Help.", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "Oh, no. No, I'm not getting involved. I've never once gotten involved." },
          { s: 'hyein', f: 'neutral', t: "She's lying. She's always involved. She just does it with her face." },
          { s: 'hanni', f: 'flustered', t: "My face isn't doing anything!" },
          { n: "Her face was, very obviously, involved. Hyein put the beret on Hanni instead, and Hanni wore it the rest of the afternoon, and kept touching it to check it was still there." }
        ] },
        { t: "ur so annoying.", notes: 3, flag: 'hyein-menace', then: [
          { n: "It came out of her flat and bored and perfect, every letter lowercase even out loud, and she had no idea where it had come from, and Hyein's eyes went huge in the mirror, and then she spun around and grabbed Solar by both shoulders, the pin still in her mouth." },
          { s: 'hyein', f: 'happy', t: "I'm keeping that. Hanni, get your phone. For evidence. Hanni, your phone doesn't work, get it anyway." },
          { s: 'hanni', f: 'happy', t: "It says twelve oh one! It's said twelve oh one since the mall!" },
          { s: 'hyein', f: 'serious', t: "Then I'll remember it. I have a great memory. I remember everything you've ever been mean to me about. It's a whole archive." }
        ] }
      ] },
      { n: "At the register Hyein stood in front of the little screen with her whole body so Solar couldn't see the number, and paid with the envelope Mitsuru had given them for clothes, counting the unfamiliar notes twice, like someone learning a new alphabet." },
      { choose: [
        { t: "(Look at the price anyway.)", notes: 1, then: [
          { n: "Solar leaned around her. Hyein leaned with her, without looking, smoothly, the way a goalkeeper leans, and kept leaning, until the two of them were tilted at the register at an angle the clerk was visibly concerned about." },
          { s: 'hyein', f: 'serious', t: "Don't. It's rude. You're being rude to a gift." }
        ] },
        { t: "(Let her.)", notes: 3, then: [
          { n: "Solar let her. She stood a step back with her hands in the new pockets, and found that it was easy, which surprised her. It felt like a thing she'd done before. Standing behind somebody tall while they decided something for her, and not minding, because it was this somebody." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "It's a loan. From me to you. You pay me back by wearing it. That's the rate. My rates are very reasonable for family." },
      { n: "Solar wore it home on the monorail, with the sleeves pinned, and Hyein sat across the aisle and talked the whole way, about the mall and the low-rise and a girl she'd seen wearing socks with sandals like it was a political position, and every so often stopped talking in the middle of a sentence to watch Solar's reflection in the dark train window, like she was making sure it stayed." }
    ] },

    { after: '9/24', title: '2: measurements', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { phone: [
        { from: 'hyein', t: "come down to the lounge" },
        { from: 'hyein', t: "bring ur body. bring ur WHOLE body" },
        { from: 'hyein', t: "i found something" }
      ], contact: 'hyein' },
      { n: "Hyein had found a tape measure. Nobody knew where. She'd come down to dinner with it around her neck like a doctor's stethoscope, and by the end of dinner she had measured everyone at the table, with permission, more or less, and was writing the numbers down in her sketchbook with the expression of a scientist who had discovered several new species." },
      { s: 'hyein', f: 'serious', t: "Junpei. Your inseam is a tragedy. Who made those trousers? Who hurt you?" },
      { s: 'junpei', f: 'flustered', t: "They're school trousers! Everyone's are like this!" },
      { s: 'hyein', f: 'neutral', t: "Everyone's are a tragedy. Yours are a tragedy specifically." },
      { n: "Akihiko had volunteered for measuring with a readiness that suggested he had misunderstood the exercise, and stood in the middle of the lounge with his arms out, flexing very slightly, until Hyein told him that she was measuring his shoulders for a jacket and not judging a competition, and he lowered his arms looking, for one second, very slightly disappointed." },
      { s: 'akihiko', f: 'neutral', t: "...What jacket?" },
      { s: 'hyein', f: 'neutral', t: "Hypothetical jacket. A jacket in my mind. Don't worry about it. Lift your chin." },
      { n: "Aigis offered her measurements before she was asked, all of them, to the millimeter, in a pleasant level voice, and Hyein wrote down the first three and then put the pencil behind her ear and said she was going to need to check those herself, sorry, nothing personal, she just didn't trust a number she hadn't touched." },
      { s: 'aigis', f: 'surprised', t: "My figures are on file with the Kirijo Group." },
      { s: 'hyein', f: 'serious', t: "I don't want the file. I want the truth. Arms out." },
      { n: "Yukari said no, flatly, from the armchair, without looking up from her phone, and Hyein said *respect*, and meant it, and didn't ask again, which made Yukari look up after all, slightly thrown, like someone who'd braced against a door that turned out to be open." },
      { s: 'hyein', f: 'happy', t: "Mitsuru-senpai. Can I measure you? You can say no. You're going to say no." },
      { s: 'mitsuru', f: 'neutral', t: "...What would it be for?" },
      { s: 'hyein', f: 'serious', t: "Nothing. Yet. I just want to know. You stand like you've been fitted since you were a baby. I want to know if I'm right." },
      { n: "Mitsuru looked at her for a long moment over the top of a teacup. Then she set it down, and stood, and held out her arms, and the whole lounge went silent like a church." },
      { s: 'hyein', f: 'surprised', t: "...Oh my God. Okay. Okay. Nobody breathe." },
      { n: "Hyein measured her the way you'd handle something in a museum, the tape held lightly, her lips moving, and wrote every number down and then looked at them, and then at Mitsuru, with an expression of the most profound professional respect." },
      { s: 'hyein', f: 'neutral', t: "I was right. You've been fitted since you were a baby. Your left shoulder's a little lower. From carrying something. Don't tell me what." },
      { s: 'mitsuru', f: 'surprised', t: "..." },
      { n: "Mitsuru sat down again, and picked up her tea, and didn't drink it for a while." },
      { n: "When she got to Solar, she didn't take the tape off her neck. She looked at Solar for a second, up and down, the way a tailor looks at someone across a room, and then wrote four numbers in her sketchbook without measuring anything at all." },
      { s: 'solar', f: 'surprised', t: "You didn't measure me." },
      { s: 'hyein', f: 'neutral', t: "Don't need to. I know yours. I did your makeup the morning your dad's car came for you, and I built you a tailgate fit you never got to wear, and I've hemmed two of your skirts in the middle of the night because you only tell me things need hemming at one in the morning. I know your measurements better than whoever your dad pays to know them." },
      { choose: [
        { t: "Check. Measure me anyway.", notes: 3, then: [
          { n: "Hyein measured her. Shoulders. Waist. Arm, shoulder to wrist. Every number was the same as the one in the sketchbook, to the half centimeter, and Hyein didn't look triumphant about it. She looked at the tape around Solar's wrist and went quiet." },
          { s: 'hyein', f: 'sad', t: "...Same. You're exactly the same. You haven't eaten enough. But you're the same." }
        ] },
        { t: "My tailgate fit?", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Matching sets. All three of us. School colors. They would have photographed SO well in the sunlight. I had them laid out on my bed and everything." },
          { s: 'hyein', f: 'sad', t: "And then your dad called, and you had to go get styled and walk around on his arm all day, and that was that. So we did your face instead. Forty-five minutes before the car. You never asked me to. You just sat still. That's how you say thank you. You sit still." },
          { n: "Solar didn't say anything. Something had moved, low down, a long way back, like the bottom step of a staircase in a house she'd been carried out of in her sleep. Orange and navy laid out across somebody's bed, three of everything. Somebody's hands, quick and sure, at the corner of her eye while she sat very still and pretended to be annoyed about it." }
        ] },
        { t: "That's a little scary.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "It's a LOT scary. It's my gift. I'll know your measurements when I'm ninety." }
        ] }
      ] },
      { s: 'junpei', f: 'neutral', t: "Wait, so are you actually gonna make stuff? Like, for us? 'Cause I'd wear a jacket. I'd wear a jacket so hard." },
      { s: 'hyein', f: 'neutral', t: "I'm going to make stuff for people who let me fix their trousers, Junpei." },
      { s: 'junpei', f: 'sad', t: "...That's fair. That's really fair." },
      { ifRank: { akihiko: 4 }, then: [
        { n: "Akihiko hadn't gone back to the television with everyone else. He was still on the arm of the sofa where he'd lowered his arms, and he'd watched the whole business of Solar's four numbers with the face of a man reading a scoreboard he had money on, and when Solar looked up, he looked, very quickly, at the window." },
        { ifBefore: '10/4', then: [
          { ifRank: { shinjiro: 5 }, then: [
            { n: "In the kitchen doorway Shinjiro, who had refused to be measured with a single flat *no* that Hyein had accepted with enormous professional respect, hadn't left either. He was leaning on the frame with his hands in his coat pockets, looking at nobody, and nobody, for most of the evening, happened to be standing exactly where Solar was." }
          ] }
        ] },
        { s: 'hyein', f: 'neutral', t: "Hm." },
        { s: 'solar', f: 'neutral', t: "What." },
        { s: 'hyein', f: 'neutral', t: "Nothing. Your senpai just looked at your measurements like they were a phone number somebody finally gave him." },
        { ifBefore: '10/4', then: [
          { ifRank: { shinjiro: 5 }, then: [
            { s: 'hyein', f: 'serious', t: "And the one in the beanie said no to me and then stood in that doorway the entire time you weren't getting measured. I'm a professional. I notice where people stand." }
          ] }
        ] },
        { choose: [
          { t: "He's my senpai. That's all.", notes: 2, then: [
            { s: 'hyein', f: 'happy', t: "He's Junpei's senpai too. He did not look at Junpei's inseam like that. Nobody in history has looked at Junpei's inseam like that." }
          ] },
          { t: "(Say nothing. Feel your ears go hot.)", notes: 3, then: [
            { n: "She said nothing. Her ears said it for her. Hyein watched them go, and made a small delighted sound like a kettle starting, and wrote something in the margin of the sketchbook that she turned the page on before Solar could read it." }
          ] },
          { t: "There's nothing to notice, Hyein.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "Okay. There's nothing. There's nothing so loud I can hear it from over here." },
            { s: 'hyein', f: 'happy', t: "I'm telling Hanni. Not tonight. Later. When it's funnier." }
          ] }
        ] }
      ] },
      { n: "Later, when everyone had gone up, Solar came back down for a glass of water and found her sitting alone on the lounge floor with the sketchbook open in her lap to a page with nothing on it but four numbers, Solar's, written very neatly, and underlined, and Hyein was looking at them the way other people look at a photograph." },
      { choose: [
        { t: "(Sit down next to her.)", notes: 2, then: [
          { n: "Solar sat down on the floor beside her with the water, close enough that their shoulders touched. Hyein didn't close the sketchbook. She tilted it a little, so Solar could see too, and the two of them looked at four numbers on a page for a while, which was a stupid thing to do, and neither of them said so." }
        ] },
        { t: "(Go back upstairs before she sees you.)", notes: 1, then: [
          { n: "Solar went back up the stairs without the water. Behind her, she heard the page turn, finally, and a pencil start, quick and sure, drawing something, and she didn't go back down to see what." }
        ] }
      ] }
    ] },

    { after: '10/3', title: '3: small wings', place: 'Paulownia Mall · Central Atrium', time: 'After School', music: 'day', scene: [
      { n: "The fountain in the atrium was throwing its water up at the glass roof, and Hyein had her sketchbook open on her knees on the fountain's rim, and her phone face up beside her on the wet stone, which she never let near water, which was how Solar knew before she sat down that this was going to be one of those afternoons." },
      { s: 'hyein', f: 'neutral', t: "Okay. Sit. I'm going to show you something and you're not allowed to be weird about it, and I'm going to be weird about it, and that's the deal." },
      { n: "The phone still said twelve oh one. It had said twelve oh one since she'd arrived. It got no signal and it would not send anything to anyone, but everything that had been on it was still on it, and Hyein had scrolled up through the girls' chat with her thumb, a long way, past things she went past too fast for Solar to read, and stopped, and turned it round." },
      { phone: [
        { from: 'hyein', t: "@hyein: we are gonna be... DRUM ROLL" },
        { from: 'hanni', t: "@hanni: drum roll!" },
        { from: 'hyein', t: "@hyein: winx CLUBBBB" },
        { from: 'solar', t: "@solar: i never even agreed" },
        { from: 'hyein', t: "@hyein: UR GONNA BE STELLA" },
        { from: 'hyein', t: "@hyein: LTRLY THE FAIRY OF THE SUN AND MOON" },
        { from: 'hyein', t: "@hyein: ITS UR NAME THIS WAS PREDESTINED FR" },
        { from: 'solar', t: "@solar: my parents did NOT name me after winx club" },
        { from: 'hyein', t: "@hyein: we dont know that for certain!!!!" }
      ], contact: 'hanni, hyein 🩷' },
      { n: "She read it twice. The second time slower. It was her name at the top of the messages on the right-hand side, *@solar*, and they were in her voice, a voice she'd never once used out loud in this city, lowercase and flat and completely unbothered, the voice of a girl who had been sitting somewhere warm with her phone under a desk and her friends on the other end of it, and wasn't afraid of a single thing in the world except, apparently, wings." },
      { choose: [
        { t: "I type like that?", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "You type like a cat walking on a keyboard that's mad at you. It's the best thing about you. Top three." },
          { s: 'hyein', f: 'sad', t: "...And I keep opening this chat like you're going to put something new in it. Look at the dates. It's embarrassing. I almost threw my phone in a fountain. This fountain. I almost threw it in this fountain." }
        ] },
        { t: "(Scroll down. Read the rest.)", notes: 3, then: [
          { phone: [
            { from: 'solar', t: "@solar: and im not wearing giant wings btw" },
            { from: 'hyein', t: "@hyein: We'll DISCUSS it" },
            { from: 'solar', t: "@solar: not going then" },
            { from: 'hyein', t: "@hyein: small wings?! :)" },
            { from: 'solar', t: "@solar: ..fine" }
          ], contact: 'hanni, hyein 🩷' },
          { s: 'hyein', f: 'happy', t: "Under five minutes. You went from *not going* to negotiating wing dimensions in under five minutes. I've never been so proud of anything I've done." }
        ] },
        { t: "My parents did NOT name me after Winx Club.", notes: 2, then: [
          { s: 'hyein', f: 'happy', t: "WE DON'T KNOW THAT FOR CERTAIN." },
          { n: "She said it so fast, so instantly, in capitals you could hear, that for a second the atrium tipped, and Solar was somewhere else with a phone hot in her hand, and then it tipped back. Hyein put the pencil in her mouth and bit it and looked away at the fountain." }
        ] }
      ] },
      { n: "Hyein turned the phone face down. Then she turned the sketchbook round instead, and it was fairies. Four of them, each a different color, each with a different kind of wings, every line quick and sure and a little too much." },
      { s: 'hyein', f: 'happy', t: "So that's us. Me, Bloom, red hair, fire, obviously, she's the main character. Hanni, Flora, nature, the nice one. Minji, Musa, music, she made me promise to protect her cargo pants, which, to be clear, I did. I'm a woman of my word." },
      { n: "She turned the page. A fourth fairy in orange and gold, a satin top and a green skirt that was, Solar couldn't help noticing, very short, and a gold cuff around one arm, and very small wings." },
      { s: 'hyein', f: 'serious', t: "And you. Stella. The fairy of the sun and the moon." },
      { s: 'solar', f: 'neutral', t: "...That skirt is short." },
      { s: 'hyein', f: 'happy', t: "You said that! You said *if I bend over, the entire house is going to learn things about me,* and I said *don't bend over, simple.* Word for word. You just did the first half. Do you want to do the second half? I'll do mine." },
      { choose: [
        { t: "Fantastic solution.", notes: 3, then: [
          { n: "It came out dry and sarcastic and exactly on the beat, like the second half of a joke she'd heard a hundred times, and Hyein screamed so loud that a mother pushing a stroller past the fountain turned the stroller around." },
          { s: 'hyein', f: 'happy', t: "THAT'S what you said. That's EXACTLY what you said. With the face. You did the face." }
        ] },
        { t: "I don't remember that.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "That's okay. I do. I'll remember it until you do. I'm very good at holding things. I have big hands." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "When you looked at yourself in the mirror in it. At home. In the bathroom, with the steam, and the curling irons going. You went really quiet." },
      { s: 'hyein', f: 'neutral', t: "You look in mirrors like you're checking for damage. Like someone's going to post you. That night you didn't. You just looked. Like you liked her." },
      { s: 'hyein', f: 'happy', t: "And then I said *oh my God, you're literally Stella,* and you said *please don't start calling me that,* and I said *I won't, Stella.*" },
      { s: 'hyein', f: 'neutral', t: "Do they do Halloween here? Properly? With costumes?" },
      { s: 'solar', f: 'neutral', t: "Junpei has a Superman costume." },
      { s: 'hyein', f: 'serious', t: "That's not Halloween. That's a cry for help." },
      { n: "She went quiet for a moment, drawing, and the fairy in orange got a little more detail, a line along the hem, a pattern on the sleeve, small suns all the way down, and the skirt, Solar noticed, about two inches longer than it had been a minute ago, which Hyein did without comment and without looking up." },
      { choose: [
        { t: "Make it again. Here.", notes: 3, flag: 'hyein-stella', then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'hyein', f: 'happy', t: "Are you serious? Are you SERIOUS? Okay. Okay okay okay. Don't take it back. I'm already measuring you with my eyes." },
          { s: 'hyein', f: 'serious', t: "You've never asked me to make you anything. Ever. You just let me. This is the first time you've asked. I'm going to remember the exact time. What time is it. It's ten past four. Okay." }
        ] },
        { t: "Draw yourself in it too. Bloom.", notes: 2, then: [
          { n: "She drew Bloom next to Stella, quick, red and fire, with her arm around the smaller fairy's neck, the way Hyein would, and then drew a little heart between them, and then scribbled it out, and then drew it back." }
        ] },
        { t: "Nobody's going to post me here.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "No. Nobody here even knows who you are. I checked. I asked a guy at the arcade if he knew Solar Lee and he asked if that was a band." },
          { s: 'hyein', f: 'sad', t: "...I don't know if that's the best thing about this place or the worst one." }
        ] }
      ] },
      { n: "The fountain went on throwing its water at the roof. Hyein closed the sketchbook over the fairies and kept her hand flat on the cover, as if they might get out." }
    ] },

    { after: '10/13', title: '4: louder', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { n: "Hyein was yelling at the river." },
      { n: "Not at anyone. At the river. She was standing at the railing on the path below the dorm in the cold with her hands around her mouth, yelling, in a long ragged furious stream, everything, at the water, which took it and went on being a river." },
      { s: 'hyein', f: 'serious', t: "—AND I DON'T EVEN KNOW WHAT DAY IT IS. I DON'T KNOW IF IT'S BEEN AN HOUR OR A MONTH. MY PHONE SAYS IT'S THE SAME NIGHT. MY BODY SAYS I'VE HAD FORTY BREAKFASTS. AND I CAN'T FIND A SINGLE GOOD PAIR OF TIGHTS IN THIS ENTIRE COUNTRY—" },
      { n: "She ran out of breath. She stood there with her hands on the railing, panting, her long hair blown across her face, and then turned around and saw Solar standing on the path, and didn't look embarrassed at all." },
      { s: 'hyein', f: 'neutral', t: "Hi. I'm yelling. Do you want to yell?" },
      { choose: [
        { t: "(Yell at the river.)", notes: 3, flag: 'hyein-yelled', then: [
          { n: "She didn't know what she was going to yell until she was doing it. It came out of her raw and enormous and wordless, a sound she didn't know she'd been keeping since April, since a checkerboard floor and a green moon and a gun beside her hand, and the river took it, and Hyein stood beside her and yelled with her, wordless too, louder, like a harmony." },
          { n: "When it was over they were both laughing. A man walking his dog on the other bank had stopped and was looking at them with real concern." }
        ] },
        { t: "What's wrong?", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "Everything. Nothing. The tights." }
        ] },
        { t: "(Stand next to her and say nothing.)", notes: 2, then: [
          { n: "She stood next to her. Hyein looked at her sideways, and the anger went out of her shoulders, slowly, like air out of a tire." }
        ] }
      ] },
      { n: "Somebody came along the path at a run, the steady flat slap of shoes on concrete, and slowed, and it was Akihiko, in a gray hoodie with the hood down and his breath going up white, and he looked at the two of them at the railing, and at Hyein's face, and at Solar's, and the dog walker across the water, and did a small rapid calculation that went all the way across his face and came out the other side as nothing at all." },
      { s: 'akihiko', f: 'neutral', t: "...Evening." },
      { n: "He kept running. Four minutes later he came back the other way, not running, with two cans of hot milk tea from the vending machine by the bridge, and handed one to each of them without a word, and left again at a jog, and didn't look back once." },
      { s: 'hyein', f: 'surprised', t: "...Is he always like that?" },
      { choose: [
        { t: "Yes.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Huh. Okay. Noted. Filed. I have a file on him now." }
        ] },
        { t: "Only when he's worried.", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "So always. Got it." },
          { n: "She held the can against her cheek, both hands around it, and looked down the path where he'd gone, with an expression Solar couldn't read and didn't try to." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "I'm not mad at you. Okay? I want to say that out loud before you think it. You think everything's your fault. I'm not mad at you." },
      { s: 'hyein', f: 'serious', t: "I'm mad at the sky. I'm mad at whatever this is. I'm mad that you say my name like it's a question and I'm mad that you laugh at Junpei's jokes, which are bad, and I'm mad that you look—" },
      { n: "She stopped. Her mouth was working. She pressed her lips together like she was holding a pin there." },
      { s: 'hyein', f: 'sad', t: "...That you look like you like it here. That's the worst one. I'm so mad about that one. And I'm so happy about it. And I hate both." },
      { choose: [
        { t: "I do like it here.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "I know." },
          { s: 'hyein', f: 'neutral', t: "Okay. Okay. You're allowed. I'm allowed to be mad. We're both allowed. Mitsuru can put it on the fridge with the chore chart." }
        ] },
        { t: "I'd like it more with you here.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { n: "She looked at Solar for a long second. Then her face crumpled, all at once, the way it did, excitement and grief arriving in the same muscles, and she threw both arms around Solar's neck so hard they both nearly went over the railing, and the milk tea went everywhere." },
          { s: 'hyein', f: 'sad', t: "That's such a cheat. That's such a cheat thing to say. I love you. Never say it in front of Hanni, she'll put it on a mug." }
        ] },
        { t: "You're allowed to be mad at me too.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "I know I'm allowed. I'm choosing not to. It's very mature of me. Write it down." },
          { s: 'hyein', f: 'sad', t: "...I'm a little mad at you. Like two percent. Like a rounding error." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Okay. New rule. You tell me when I'm being annoying. Right then. Not after you've thought of a nice way to say it. You used to. I want that back." },
      { n: "Walking back, Hyein held her hand, swinging it, like two kids on the way home from somewhere, and kept asking whether she was being annoying yet, every ten steps, until Solar finally stopped walking and told her she was, *so* annoying, and Hyein looked happier about that than about anything else that day." }
    ] },

    { after: '10/22', title: '5: the armband', place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "The armband had torn in Tartarus. Something with too many hands had caught it on the way past and ripped it nearly in half, and Solar had come home with the red fabric hanging off her sleeve by a few threads and S.E.E.S. barely legible, and had put it on her desk, and had stared at it for an hour without knowing why it made her want to sit on the floor." },
      { n: "Hyein had found it there the next morning. She hadn't asked. She'd taken it downstairs, and now it was night, and she was sitting on the lounge floor under the lamp with the armband across her knees and a needle in her mouth and Mitsuru's sewing kit open beside her, every thread in it sorted by color, which Hyein had remarked on with the respect of one professional for another." },
      { s: 'hyein', f: 'neutral', t: "Sit. I'm almost done. Don't look yet. It's rude to look at someone's work before it's done." },
      { n: "Solar sat on the sofa. Hyein's hands moved fast and small and certain. She was humming under her breath, off-key, some song from home, and every few stitches she held the armband up to the lamp and squinted at it like it had said something rude." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you a thing? Don't make it a thing." },
      { s: 'hyein', f: 'neutral', t: "I don't sleep when you go out. At midnight. Hanni does, she's a great sleeper, she sleeps like she's been told to. I don't. I sit at the top of the stairs. The green comes, and everything goes off, and I just sit there in the green with everybody's clocks stopped and count." },
      { s: 'hyein', f: 'serious', t: "You came back at one twelve last night. I know because I counted. There's no clock in the green, so I counted. Out loud. Like a crazy person. At the clock in the hall. It doesn't move. I counted at a clock that doesn't move." },
      { choose: [
        { t: "You don't have to wait up.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I know I don't *have* to. That's the whole point. Nobody makes me. I do it because I'm awake anyway and I'd rather be awake on the stairs." }
        ] },
        { t: "What number did you get to?", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Four thousand and something. I lost count a couple of times. I had to start over at a thousand. It was very humbling." },
          { s: 'hyein', f: 'happy', t: "And then the door opened and you came in with your sleeve hanging off and I stopped counting and went straight to bed so you wouldn't see me. Very smooth. Very cool. You didn't see me." },
          { s: 'solar', f: 'neutral', t: "I saw you." },
          { s: 'hyein', f: 'flustered', t: "You did NOT." }
        ] },
        { t: "(Don't say anything. Let her sew.)", notes: 2, then: [
          { n: "Solar didn't say anything, and Hyein, who had braced for something, unbraced slowly, and went on sewing, and the needle went in and out under the lamp with a sound so small it was barely a sound at all." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "What is it? This thing. Everyone in the dorm has one. Junpei wears his like a sports jersey. Mitsuru wears hers like a crown. Akihiko wears his like he forgot it was there." },
      { s: 'hyein', f: 'serious', t: "You wear yours like it's the only thing you own." },
      { choose: [
        { t: "It's the first thing anyone gave me here that I chose.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'solar', f: 'neutral', t: "They asked. They asked if I wanted it. There was a contract. It said *free will.* I stopped on that line for a long time." },
          { n: "Hyein's needle stopped. She looked down at the armband, the torn red fabric, the stitches she was putting into it one at a time, and didn't say anything for a while." },
          { s: 'hyein', f: 'sad', t: "...Nobody ever asks you. At home. They just hand you the dress." }
        ] },
        { t: "It means I fight. At midnight.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "I know. I hate it. I hate that you come home with your sleeve ripped off. Hanni cried. I didn't cry. I did cry. Don't tell her." }
        ] },
        { t: "It means I'm one of them.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Yeah. I figured." },
          { s: 'hyein', f: 'sad', t: "...You were one of us first. That's all. I'm not saying anything. I'm just saying the order." }
        ] }
      ] },
      { n: "She tied off the thread and bit it and held the armband up to the light, and it was whole again, the tear closed with stitches so small and even they were nearly invisible from the outside." },
      { s: 'hyein', f: 'happy', t: "Okay. Now look inside." },
      { n: "Inside, on the underside of the band, where it would sit against her arm and nobody would ever see it, Hyein had embroidered a tiny sun. Gold thread. Seven rays. A little lopsided, on purpose. And beside it, smaller still, in pink, a crescent moon." },
      { choose: [
        { t: "Stella.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Fairy of the sun and the moon. Predestined." },
          { s: 'hyein', f: 'neutral', t: "So whatever you do with your free will, you've got something on you that's from us. Even if it's where nobody can see. Especially where nobody can see." }
        ] },
        { t: "(Put it on. Right now.)", notes: 3, then: [
          { n: "She put it on, right there, over her pajamas, and the little sun sat warm against the inside of her arm, and Hyein watched her do it with her chin in her hands and her eyes very bright." },
          { s: 'hyein', f: 'happy', t: "Yeah. That's giving. That's so giving." }
        ] },
        { t: "Why lopsided?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Because a perfect one looks like a logo. A crooked one looks like someone made it. I want it to look like someone made it." }
        ] }
      ] },
      { n: "Mitsuru came down for her late tea while they were still sitting there, and stopped in the doorway, and looked at the armband on Solar's sleeve, and then at her own open sewing kit on the floor with every thread exactly where it had been, and something in her face went very slightly warm, and she said only that she was glad the kit had been of use, and went into the kitchen, and could be heard, a moment later, setting out three cups instead of one." }
    ] },

    { after: '11/2', title: '6: proof of my legacy', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'joy', scene: [
      { n: "Halloween in Iwatodai had lasted about four hours. Hyein had spent the first eleven minutes of it refitting Junpei's discount Superman costume on his body while he stood on the coffee table with his arms out, sewing the peeling S back down and letting out a cape that had been made, she said, for a child, or a very small, very sad man, and she had been halfway through telling him he was welcome when the bass came through the lounge wall." },
      { n: "After that it had stopped being Halloween. It had been a song all of them knew coming through brick that had a parking lot on the other side of it, and a hallway in the tower full of red cups and camera flashes, and Minji walking out of the green with a Persona, and nobody, in the end, wearing anything Hyein had made at all. The costumes she'd spent the week on were still in their bags on the second floor. She hadn't opened them since." },
      { n: "The lounge still had candy wrappers down the back of the sofa cushions and a paper bat hanging by one wing over the television, and Hyein was lying upside down on the armchair with her legs over the back and her hair on the floor, recovering, she said, like an athlete." },
      { s: 'hyein', f: 'neutral', t: "Don't talk to me. I'm grieving. I'm grieving a holiday." },
      { s: 'hyein', f: 'serious', t: "It was RIGHT there, Sol. Through the wall. The Sigma playlist. The actual playlist, in order, the song Jeno does the thing to, the whole thing. Home was on the other side of that wall, and I went outside and checked, and it was a parking lot. I stood in a parking lot in my socks." },
      { s: 'hyein', f: 'neutral', t: "And the one after it is the song that was on when we sent you upstairs to the bathroom, which, okay, there was never actually a line for any— " },
      { n: "She stopped. She put the back of her hand against her mouth, upside down, like she was checking it was still there." },
      { s: 'hyein', f: 'serious', t: "Nope. Not mine. That one's not mine to tell. Hanni would kill me. Hanni would kill me with a mandarin and then cry about it." },
      { s: 'hyein', f: 'sad', t: "And then Minji got a monster. Which, good. Great for her. She deserves a monster. And I got to hold the sewing kit." },
      { choose: [
        { t: "You fixed Junpei's cape.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I fixed Junpei's cape in eleven minutes with the wrong color thread. That's my contribution to the war effort. They're going to put it on a plaque." }
        ] },
        { t: "I'm glad you were holding the sewing kit and not standing in that hallway.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'hyein', f: 'neutral', t: "...Okay, that's a nice thing to say upside down. All the blood went to my face. I can't tell if I'm crying or if it's gravity." }
        ] },
        { t: "(Lie down upside down on the sofa next to her.)", notes: 3, then: [
          { n: "Solar lay down on the sofa with her legs over the back and her head hanging off the cushion, and the lounge turned over, the paper bat standing on its wing, the ceiling a white floor nobody had ever walked on, and Hyein looked at her sideways, upside down, from the next chair, and laughed so hard she slid off it." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "We won, you know. At home. Best costume. At Sigma. Me and Hanni, anyway, you'd already gone home by then. Jaemin was standing on a chair doing the worst accent I've ever heard in my life, and the award was so ugly, Sol, it was so poorly made, I held it up like it was a trophy at the Olympics." },
      { s: 'hyein', f: 'happy', t: "I told the mic my rates had gone up, but this was proof of my legacy. And Hanni leaned in and went *um, she means thank you!* You missed my best line. You missed it by two minutes." },
      { n: "And Solar could see something. Not that. Earlier. A living room full of people in costumes, a hundred of them, the floor sticky, purple bulbs screwed into every light, and a tall girl with red extensions clipped into her brown hair talking into a microphone for much, much too long about how hard she'd worked and how you couldn't find these anywhere else, and Solar herself coming down off a makeshift stage in orange satin and small gold wings, trying to push the tall girl off her, and failing, and laughing." },
      { s: 'solar', f: 'neutral', t: "...*So long as you paid the appropriate price.*" },
      { s: 'hyein', f: 'surprised', t: "..." },
      { n: "She swung her legs down off the back of the chair and sat up so fast her hair whipped over her face, and pushed it back with both hands, and stared." },
      { s: 'hyein', f: 'surprised', t: "I DID say that. Before the judging. On the stage. You were RIGHT there, you were trying to get away from me." },
      { s: 'solar', f: 'neutral', t: "You wouldn't get off me." },
      { s: 'hyein', f: 'happy', t: "I would NOT get off you. Oh my God. You remember me being amazing. Of all the things. You remember me being amazing." },
      { n: "She got her phone out of her back pocket. It still said twelve oh one. She went into her messages, past the girls' chat, into a little folder of requests from people she didn't follow, and held it out, and it was a single message from a girl with a profile picture too small to see." },
      { n: "*hiii are u taking commissions?? how much for a set like ur winx ones.* And under it, Hyein's answer, typed out and never sent, with a tiny clock beside it where the delivered mark should be. *yes!!! omg. dm me ur measurements and*" },
      { s: 'hyein', f: 'sad', t: "She sent that the morning after. I was typing back in the dining hall, and somebody said something, and I put my phone down, and I never picked the sentence back up. And then you were gone, and then we were here. *And.* And what. I don't even know what I was going to say." },
      { s: 'hyein', f: 'sad', t: "My first real client and I left her on *and.* She's been waiting on *and* for however long this is. Forty breakfasts." },
      { s: 'hyein', f: 'neutral', t: "And Jaemin. Jaemin Na asked me for a December piece. Festive, but not ugly festive, he refuses to look like a department store. I said deposit up front and no friend discount, because he called my wings a hazard." },
      { ifEvent: 'a4-twelve', then: [
        { s: 'hyein', f: 'serious', t: "I never got the deposit. He's at the guesthouse now. Two streets away. He waves at me. He still hasn't paid. That's my career right now: one girl on *and* and one boy who owes me money from across the street." }
      ], else: [
        { s: 'hyein', f: 'sad', t: "I never got the deposit. That's my career right now. One girl on *and* and one boy who owes me money in another universe." }
      ] },
      { choose: [
        { t: "Answer her. Finish it.", notes: 3, then: [
          { n: "Hyein looked at her, and then at the phone, and then, slowly, she typed. *and we'll talk prices. sorry for the wait. it's been a weird week.* She pressed send. The little clock came up beside it, next to the other little clock, and stayed there, patient, turning, the way it would turn forever in a city where her phone couldn't reach anyone." },
          { s: 'hyein', f: 'neutral', t: "...Okay. It's in the queue. When it goes, it goes. It's very professional. Very *we'll get back to you.*" },
          { s: 'hyein', f: 'happy', t: "Thank you. That was stupid. Thank you." }
        ] },
        { t: "Take commissions here, then.", notes: 3, flag: 'hyein-shop', then: [
          { s: 'hyein', f: 'surprised', t: "Here? In 2009? In a dorm full of people who think a hoodie is an outfit?" },
          { s: 'solar', f: 'neutral', t: "Junpei needs a second Superman costume. For washing. He hasn't taken that one off in two days." },
          { s: 'hyein', f: 'serious', t: "...He does. He really does. It's a public health issue." },
          { n: "She flipped the sketchbook to a clean page and wrote, across the top, in capitals, *COMMISSIONS · IWATODAI*, and underlined it twice, and under it, *1. Junpei. Superman (washing). Price: TBD.* Then she sat back and looked at it the way you'd look at a shop sign with your name on it." }
        ] },
        { t: "You'll answer her when you get home.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "When." },
          { n: "She didn't say anything else. She put the phone face down on her knee, and kept her hand on it, and looked at the paper bat." }
        ] }
      ] },
      { n: "Junpei came down the stairs in his Superman costume, which he had apparently not taken off in two days, with a bowl of cereal, and Hyein looked at him and then at Solar and said, quite seriously, that she was going to need to make him a second one, for washing." },
      { s: 'junpei', f: 'happy', t: "You'd do that? For me?" },
      { s: 'hyein', f: 'neutral', t: "For the appropriate price." },
      { s: 'junpei', f: 'surprised', t: "...What's the appropriate price?" },
      { s: 'hyein', f: 'serious', t: "You take that one off tonight and let me wash it. That's the price. That's the whole price. Non-negotiable." },
      { n: "Junpei looked down at himself, at the S she'd sewn back on with the wrong thread, and held his cereal bowl a little closer to his chest, like a man being asked to give up a pet." }
    ] },

    { after: '11/14', title: '7: the coat', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'tender', scene: [
      { n: "November had gotten cold all at once, the way it did in Iwatodai, the wind coming off the bay overnight and staying, and Solar had been going around in her blazer and a scarf Fuuka had lent her, because she owned nothing else, and because, Hyein said, with total contempt, she would rather freeze on a pier in a blouse than admit she was cold." },
      { s: 'hyein', f: 'serious', t: "So I made you a coat." },
      { n: "She'd made it on the second floor, in the empty room at the end of the hall nobody used, on a sewing machine Mitsuru had found in a storeroom and had carried upstairs herself without a word, out of the half meter of sad-wine velvet from the old woman's shop on the strip and a great deal of dark wool, and it was long, and it was the color of the river at night, and it had a velvet collar you could turn up against the wind, and the lining, when Hyein turned it out to show her, was the exact pink of the inside of a shell." },
      { s: 'hyein', f: 'neutral', t: "You have a long black coat at home. Your mom bought it for you last winter. It's fine. It's a coat a mom buys. It's very correct. It's a coat for standing next to people at things and not getting photographed badly." },
      { s: 'hyein', f: 'serious', t: "This one's not correct. This one's yours." },
      { s: 'hyein', f: 'neutral', t: "Put it on. Don't argue. You always argue and then you wear it. Skip the arguing. We don't have time." },
      { choose: [
        { t: "(Put it on without arguing.)", notes: 3, then: [
          { n: "It fit like it had been poured. The shoulders were exactly her shoulders. The sleeves stopped exactly where her wrists began. She turned in front of the shop window and the girl in the glass looked like somebody she'd have been nervous to talk to on a train." },
          { s: 'hyein', f: 'happy', t: "You didn't argue. I'm so proud of you. Hanni's going to lose her mind." }
        ] },
        { t: "(Argue first. A little. For tradition.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "I don't need a coat." },
          { s: 'hyein', f: 'happy', t: "THANK you. Okay. Done. Put it on." },
          { n: "She put it on. It fit like it had been poured. Hyein clapped once, delighted, like a woman who'd watched a play go exactly as rehearsed." }
        ] },
        { t: "How much do I owe you?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "For the appropriate price." },
          { s: 'solar', f: 'neutral', t: "Which is?" },
          { s: 'hyein', f: 'serious', t: "You wear it home. Wherever that is. That's the price. Put it on." },
          { n: "She put it on. It fit like it had been poured, which Hyein had clearly known it would, and she watched Solar find that out in the glass with an expression of enormous, barely contained smugness." }
        ] }
      ] },
      { ifFlag: 'hyein-shop', then: [
        { s: 'hyein', f: 'neutral', t: "Also, I'm doing very well. Professionally. Junpei paid me in yakisoba bread. Akihiko paid me in protein bars, which I told him is not currency, and he looked at me like I'd said the sky was not a color." },
        { s: 'hyein', f: 'happy', t: "Fuuka paid me in a casserole. A full casserole. I'm basically a small business. I'm basically employed." }
      ] },
      { s: 'hyein', f: 'neutral', t: "It's going to snow. Here. Mitsuru said. And you go out at midnight in a blazer and a skirt and come back with your sleeve ripped off, and I can't come with you, and I can't do anything about the monster part. I checked. I asked." },
      { s: 'hyein', f: 'serious', t: "So I did the part I can do. That's all this is. That's the whole thing." },
      { n: "She turned the collar up for Solar herself, both sides, smoothing them with her thumbs, and then stood back, and looked at her own work with her arms folded and her mouth pressed flat, like a girl trying very hard to be professional about a coat." },
      { s: 'hyein', f: 'sad', t: "Take it with you. Wherever. If you go home, wear it home. If you don't—" },
      { s: 'hyein', f: 'neutral', t: "If you don't, wear it here. Wear it in the snow. Wear it to whatever you do at midnight. Just. Something warm from me, wherever you are." },
      { choose: [
        { t: "I'll wear it everywhere.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Good. Correct answer. Gold star." },
          { s: 'hyein', f: 'serious', t: "Not in the bath, though. It's wool. Be smart. Be a smart girl with a coat." }
        ] },
        { t: "(Hug her, coat and all.)", notes: 3, then: [
          { n: "She hugged her in the middle of the shop windows, coat and all, and Hyein, who was taller by half a head, put her chin on top of Solar's hair and said, muffled, that the shoulders were perfect, she could feel it, she was a genius." }
        ] },
        { t: "Why is the lining pink?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Because the outside's for everybody. The inside's for you. Nobody sees it but you. And me. I see it. I made it." },
          { s: 'hyein', f: 'happy', t: "It's the color of our hallway. At home. Don't make it weird. I'm already making it weird." }
        ] }
      ] },
      { n: "On the way out of the mall a girl from Solar's class stopped dead by the fountain to look at the coat, actually stop, actually look, and Solar felt it the way she always felt being looked at, a small cold drop down the back of her neck, and reached for her collar to turn it down. Hyein got there first. She stepped half a pace ahead, and said very loudly, to no one, that the fountain was spitting on her, *was it spitting on anyone else, it was SPITTING*, and the girl looked at Hyein instead, and so did everyone else, and Solar walked on through the middle of it with her collar up and nobody looking at her at all." }
    ] },

    { after: '11/28', title: '8: three in the morning', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'night', scene: [
      { n: "Something was buzzing in the hallway at three in the morning. A long, steady, rising whine, like a small engine or a very angry insect, coming from the bathroom at the end of the second floor." },
      { n: "Solar knew the sound before she was awake. She was sitting up in bed with her heart going before she'd decided to be, because she knew it, she knew it so well that for one second she wasn't in Iwatodai at all. She was in a narrow single room with pink curtains and a wall so thin you could hear everything on the other side of it, and someone was drying their hair at three in the morning, the way they did every single night, and it was the most annoying sound in the world and it was the sound that meant she wasn't alone in the building." },
      { ifFlag: 'hyein-menace', then: [
        { n: "Her fist was on the wall before she'd thought about it. Two bangs. Flat, sleepy, completely sincere, the way you'd do a thing you'd done a hundred times without once getting tired of it. On the other side of the wall the hairdryer cut off mid-whine, and there was a silence like a held breath, and then, very faintly, somebody laughing into a towel." }
      ], else: [
        { n: "She sat there in the dark with her hand flat against the wall, as though she'd been about to do something with it, and didn't know what. Then she got up." }
      ] },
      { n: "She went down the hall in her socks. The bathroom door was open. Hyein was sitting on the closed lid of the toilet in her pajamas with a hairdryer in her lap, pointed at nothing, running, on high." },
      { s: 'hyein', f: 'surprised', t: "...Oh no. Did I wake you? I woke you. I'm sorry. Mitsuru lent it to me. I couldn't sleep." },
      { s: 'hyein', f: 'sad', t: "I can't sleep without it. At home I dry my hair at three every night and you bang on the wall and tell me I'm a menace. And then I can sleep. I can't sleep without someone telling me I'm a menace." },
      { choose: [
        { t: "You're a menace.", notes: 3, then: [
          { n: "She said it flat, sleepy, completely sincerely, and banged twice on the bathroom doorframe with her fist for good measure, and Hyein stared at her, and then started laughing so hard she nearly dropped the hairdryer into the sink." },
          { s: 'hyein', f: 'happy', t: "THANK you. Thank you. Oh my God. I'm going to sleep so well." }
        ] },
        { t: "I remember the sound.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "..." },
          { s: 'solar', f: 'neutral', t: "Through the wall. Every night. I used to put my pillow over my head." },
          { s: 'hyein', f: 'sad', t: "You did. You did that. You said it was like sleeping next to an airport." },
          { n: "She turned the hairdryer off. The silence after it was enormous. She held it in her lap like something alive." }
        ] },
        { t: "(Take the hairdryer and dry her hair for her.)", notes: 3, then: [
          { n: "Solar took it out of her hands, and turned it down to low, and stood behind her and dried her hair, the long straight brown weight of it, the way someone must have done it for her once, lifting it in sections, and Hyein sat very still on the toilet lid with her eyes shut and her hands in her lap, like a little kid at a barber's, and didn't say a single word, which was, Solar thought, the first time she'd ever heard her not say one." }
        ] }
      ] },
      { n: "They sat on the bathroom floor with their backs against the tub because neither of them wanted to go back to bed yet, and Hyein turned the hairdryer on low and pointed it at their feet, which was, she said, a luxury, and their socks went warm." },
      { s: 'hyein', f: 'neutral', t: "Can I tell you something? It's three in the morning. Nothing said at three in the morning counts." },
      { s: 'hyein', f: 'serious', t: "I'm loud because I'm scared. That's all I am. I'm a scared person who's very loud about it." },
      { s: 'hyein', f: 'neutral', t: "In the tower. The party floor. When that thing reached for me. Hanni just stood there. In front of me. With her arms out. With nothing. No monster. No gun. Her sneakers stuck to the floor." },
      { s: 'hyein', f: 'sad', t: "And I was behind her holding the back of her shirt. That's what I did. I held the shirt." },
      { s: 'hyein', f: 'neutral', t: "Hanni's the brave one. She just cries first. And you're the brave one who never cries. And I'm the loud one. And it works. It's always worked. At home, when somebody's looking at you wrong, when you get that face, I get louder, so they look at me instead. That's my job. I'm very good at it." },
      { s: 'hyein', f: 'sad', t: "And here, you're doing something else, with a gun, at midnight. And Hanni stands in front of monsters now. And I don't know what my part is." },
      { choose: [
        { t: "Your part is the hairdryer at three in the morning.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay, I can do that. I'm very good at that. I'm the best at that." }
        ] },
        { t: "Your part is telling me the sleeves are too long.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "They ARE always too long. You buy everything a size up so you can hide in it. I've been telling you for months." }
        ] },
        { t: "You held on. That counts.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...It does?" },
          { s: 'solar', f: 'neutral', t: "Somebody has to make sure the person standing in front doesn't get pulled away." },
          { n: "Hyein looked at her for a long time, with the hairdryer humming at their feet. Then she put her head on Solar's shoulder, heavily, all at once, the way she dropped her shopping bags on a bed at the end of a long day, and left it there." }
        ] }
      ] },
      { n: "They fell asleep there, eventually, against the tub, with the hairdryer off and their feet warm. Mitsuru found them at five, on her rounds, and did not wake them, and when they came down to breakfast there was a second hairdryer on the lounge table with a note on it in very precise handwriting that said only, *For the second floor.*" }
    ] },

    { after: '12/11', title: '9: something you chose', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { ifBefore: '12/23', then: [
        { n: "There was going to be a party on the twenty-third. Nobody had exactly decided it. It had started being true the way things did in that dorm, Mitsuru borrowing tables from somewhere she refused to name, Fuuka counting bowls, Junpei telling anyone who'd listen that he had a speech, and Hyein had decided, the second she heard, that for this one, Solar was going to be dressed by her and nobody else, from the ground up, and had dragged her to the fabric shop and then the shoe shop and then the shop windows to look at mannequins as research." }
      ], else: [
        { n: "The year was nearly over, and nobody knew what came after it, and Hyein had decided that whatever it was, Solar was going to be dressed for it by her and nobody else, from the ground up, and had dragged her to the fabric shop and then the shoe shop and then the shop windows to look at mannequins as research." }
      ] },
      { s: 'hyein', f: 'serious', t: "Okay. Tell me what you want." },
      { s: 'solar', f: 'neutral', t: "You're the one with the opinions." },
      { s: 'hyein', f: 'serious', t: "I have so many opinions. I'm not using any of them. This time you tell me." },
      { n: "She said it fiercely, standing in front of a window full of evening dresses with her arms folded and her chin up, and Solar realized she'd planned this, rehearsed it, maybe, on the monorail, the way you'd rehearse a speech for a teacher." },
      { s: 'hyein', f: 'neutral', t: "At home, everything you wear to anything that matters gets picked for you. Your mom. Somebody from your dad's office sends an email. You put it on and you stand there and you look amazing and you look like somebody else's idea." },
      { s: 'hyein', f: 'neutral', t: "And I don't even do better. I picked your Halloween before you'd said yes. I bought the skirt without asking. You said it was too short and I said don't bend over. That's on me. I know that's on me." },
      { s: 'hyein', f: 'sad', t: "I've never once dressed you for something you picked. So. This is something you picked. Tell me what you want to wear to it." },
      { choose: [
        { t: "Something I can run in.", notes: 3, flag: 'hyein-dress-run', then: [
          { s: 'hyein', f: 'surprised', t: "Run?" },
          { s: 'solar', f: 'neutral', t: "I run. Here. At five in the morning. I like it. I want to be able to run if I want to." },
          { s: 'hyein', f: 'happy', t: "...Okay. Okay! Flat shoes. A skirt with room. Something that moves. Oh, I can do something that MOVES." }
        ] },
        { t: "Something with pockets.", notes: 3, flag: 'hyein-dress-pockets', then: [
          { s: 'hyein', f: 'happy', t: "POCKETS. Yes. A dress with pockets is a dress with opinions. I respect that so much." },
          { s: 'solar', f: 'neutral', t: "So I have somewhere to put my hands." },
          { s: 'hyein', f: 'neutral', t: "...Yeah. You always need somewhere to put your hands. Okay. Deep ones." }
        ] },
        { t: "Something red. Like the armband.", notes: 3, flag: 'hyein-dress-red', then: [
          { s: 'hyein', f: 'surprised', t: "Red? You never wear red. You said it was too loud." },
          { s: 'solar', f: 'neutral', t: "I'm louder here." },
          { s: 'hyein', f: 'happy', t: "...You are. You ARE. Okay. Red. Oh, I'm going to make you so loud." }
        ] }
      ] },
      { place: 'Iwatodai Strip', time: 'After School', soft: true },
      { n: "They spent the rest of the afternoon in the fabric shop with the old woman, all three of them pointing and gasping at bolts of cloth, and Solar picked every single thing, the color, the length, the shape of the neckline, and Hyein wrote it all down in her sketchbook without changing a word, only, once, very quietly, adding a pocket." },
      { n: "The old woman measured out the cloth on a brass rule set into the counter, and cut it with scissors as long as her forearm, in one pass, without looking, and folded it into brown paper, and then, before she handed it over, reached across and patted Solar's hand twice where it rested on the counter, and said something to Hyein, and Hyein didn't translate it." },
      { choose: [
        { t: "What did she say?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "I don't know. I don't speak Japanese. I made up everything I ever told you she said." },
          { s: 'hyein', f: 'sad', t: "...It sounded like *look after her.* That's what it sounded like. I don't know. It sounded like that." }
        ] },
        { t: "(Bow to the old woman.)", notes: 3, then: [
          { n: "Solar bowed, properly, the way she'd watched Mitsuru do it at the door to every shop in Paulownia Mall, and the old woman bowed back, a little lower, which nobody had ever done for her in this city, and Hyein, not knowing the rules, bowed too, much too low and much too fast, and nearly hit her head on the counter, and the old woman laughed for the first time in three months of Hyein coming into her shop." }
        ] }
      ] },
      { n: "Outside the light had gone and the strip was lit up and cold, and they walked back with the parcel between them, each holding one end of the string, which was unnecessary and which neither of them suggested changing." },
      { s: 'hyein', f: 'neutral', t: "Sol. Can I ask you a thing. And you don't have to—" },
      { n: "She stopped walking. She looked at the parcel, and at the string in her hand, and at Solar, and Solar watched her get all the way up to the edge of something, close enough to see over it, and then step back." },
      { s: 'hyein', f: 'happy', t: "...Do you want the pocket on the left or the right. That was it. That's the whole question. Left or right." },
      { choose: [
        { t: "Both.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Both. Obviously. Both. You're so greedy. I love that for you." }
        ] },
        { t: "That wasn't the question.", notes: 2, then: [
          { s: 'hyein', f: 'sad', t: "...No. It wasn't." },
          { s: 'hyein', f: 'neutral', t: "Ask me again later. Not today. Today we bought fabric. Today's a good day. I'm not putting the other thing on a good day." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "It's going to be the best thing I've ever made." },
      { s: 'hyein', f: 'happy', t: "Because you made it. I'm just sewing it." }
    ] },

    { after: '1/19', title: '10: literally stella', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'tender', scene: [
      { n: "Hyein had dragged the long mirror from the second-floor bathroom up the stairs to the roof, by herself, which nobody had asked her to do and nobody could have stopped her from doing, and propped it against the water tank, and now she was standing behind it in the January wind holding something over her arm under a sheet and refusing to explain." },
      { n: "It was so cold the railing hurt to look at. The city below was all hard white lights and black water, and the wind came straight off the bay with nothing in its way, and Solar stood in the middle of the roof in the coat with the collar up and her hands in the pockets, waiting, the way she'd learned to wait for Hyein, which was patiently and with very low expectations of being told anything in advance." },
      { s: 'hyein', f: 'serious', t: "Close your eyes. Don't argue. You can argue after." },
      { n: "Solar closed her eyes. She felt the coat lifted off her shoulders and something else settled there instead, light and cold and slippery, and Hyein's quick hands at her collar, at her sleeves, tucking and smoothing, a pin, two pins, something light and stiff fastened between her shoulder blades, and then a cold metal circle settled on her head, careful, over her hair." },
      { s: 'hyein', f: 'neutral', t: "Okay. Coat back on. Over it. Coats over costumes. I know. I know. It's a personal attack. I'm attacking myself. Arms." },
      { s: 'hyein', f: 'happy', t: "Okay. Open." },
      { n: "Orange and gold. The costume from the sketchbook, finished. Orange satin with small suns stitched all the way down the hem, a skirt that came, she noticed, a sensible two inches lower than the one in the drawing at the fountain, a gold cuff around one arm under the open coat. A thin gold band in her hair with a little sun on it, and a moon. And on her back, she could see them over her shoulder in the mirror, sticking out from under the coat at an angle, two wings. Small ones. Barely bigger than her hands." },
      { s: 'hyein', f: 'neutral', t: "As negotiated." },
      { choose: [
        { t: "(Turn so she can see the wings.)", notes: 3, then: [
          { n: "She turned slowly, keeping one hand on the coat so it wouldn't slip, and Hyein crouched to check the hem, stood, crouched again, and finally put both hands flat against her own thighs like she was physically stopping herself from making one more adjustment." },
          { s: 'hyein', f: 'flustered', t: "Okay. That's it. I'm done. If I touch it again you have to stop me." }
        ] },
        { t: "You remembered the small wings.", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "Small wings were in the contract. You were very difficult about the wings." },
          { n: "She reached around Solar to straighten one of them anyway, carefully, with two fingers, and her hand stayed on Solar's shoulder when she was finished." }
        ] },
        { t: "How many times did you redo this?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "That is private information between me and the sewing machine." },
          { s: 'hyein', f: 'flustered', t: "...The skirt, twice. Don't look at me like that. It was worth doing twice." }
        ] }
      ] },
      { ifFlag: 'hyein-dress-run', then: [
        { s: 'hyein', f: 'neutral', t: "Flat shoes. Look down. You can run in these. You said you wanted to be able to run. I don't forget things you want." }
      ] },
      { ifFlag: 'hyein-dress-pockets', then: [
        { s: 'hyein', f: 'neutral', t: "Pockets. Both sides. Stella doesn't have pockets. Stella's wrong. Put your hands in. Somewhere to put your hands." }
      ] },
      { ifFlag: 'hyein-dress-red', then: [
        { s: 'hyein', f: 'neutral', t: "And there's red in the lining. Like the armband. Don't tell the show. The show would be furious." }
      ] },
      { ifFlag: 'hyein-stella', then: [
        { s: 'hyein', f: 'serious', t: "You asked me. At the fountain. Ten past four. *Make it again. Here.* You've never asked me to make you anything in your life, and you asked for this. So I made it again. Here." }
      ], else: [
        { s: 'hyein', f: 'serious', t: "Nobody asked me to. I know. I did it anyway. I've been doing it since October in the room at the end of the hall. Hanni kept watch. She's a terrible lookout. She kept coming in to tell me she was keeping watch." }
      ] },
      { n: "And she knew. All at once, the way the cold came up off the roof. A different mirror, in a bathroom full of steam and four girls and two curling irons going and costume bags hanging off the shower rod, and this exact face looking back at her, and for once not checking itself for damage, and a voice behind her, loud, delighted, too much, in her ear." },
      { s: 'solar', f: 'neutral', t: "...Oh my God. I'm literally Stella." },
      { n: "Hyein made a sound she had never made before. It wasn't a scream. It was smaller and worse than a scream. She put both hands over her mouth and stood behind the mirror shaking." },
      { s: 'hyein', f: 'sad', t: "That's my line. That's MY line. You stole my line. You never say my line. You always tell me to stop saying it." },
      { s: 'solar', f: 'neutral', t: "Please don't start calling me that." },
      { s: 'hyein', f: 'sad', t: "...I won't, Stella." },
      { n: "Hyein laughed through the sound she'd been making, wet, from behind both hands, and Solar didn't check her face afterward to see whether any of it had been all right. She knew it had. That was new, too." },
      { choose: [
        { t: "Stop crying. You'll ruin your own makeup work.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "I'M NOT WEARING ANY. I'M CRYING ON PURPOSE. Let me have this." },
          { n: "She came around the mirror and hugged her so hard the wings bent, and then she shrieked about the wings, and then she fixed them, crying, with Solar still inside the hug, which was a skill, honestly, Solar told her so." }
        ] },
        { t: "ur so annoying.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "..." },
          { s: 'hyein', f: 'happy', t: "I KNOW. I know I am. I've been waiting since September for somebody to tell me." },
          { n: "She came around the mirror and hugged her so hard the wings bent, and didn't let go even to fix them." }
        ] },
        { t: "You made the skirt longer.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "...I hear criticism and I choose to ignore her. Except sometimes. Sometimes I hear her and I go home and take the hem down two inches at one in the morning and never tell anybody." },
          { n: "She came around the mirror and hugged her, carefully this time, with her arms around the outside of the coat so the wings wouldn't bend, which was, for Hyein, an act of enormous restraint, and lasted about four seconds, and then the wings bent anyway." }
        ] }
      ] },
      { ifFlag: 'call-R', then: [
        { s: 'hyein', f: 'neutral', t: "You said you think you want to. On the roof. In December. With the cans. I'm not holding you to it." },
        { s: 'hyein', f: 'sad', t: "...I'm holding you to it a little. With two fingers. The way you hold a hem before you pin it." }
      ], else: [
        { s: 'hyein', f: 'neutral', t: "You didn't say yes. On the roof. In December. That's okay. Hanni says not saying yes isn't saying no. I said it's rude. She said it's yours." }
      ] },
      { n: "Hanni came up a minute later, because she'd heard the sound Hyein made from three floors down, and stopped in the stairwell door with her cardigan sleeves pulled down over her fists and her chin already going, and the three of them stood on the roof in the cold in front of a bathroom mirror, one of them dressed as a fairy under a long dark coat, and none of them said anything for a long time, and the wind took the edge of the orange skirt and lifted it and set it down again." },
      { s: 'hyein', f: 'neutral', t: "Okay. It's cold. Inside. Drink water. Ttyl." },
      { s: 'hyein', f: 'sad', t: "...I'm not going anywhere, I just always say that. I'm going to stand here for five more minutes. Don't look at me." },
      { n: "Solar didn't look at her. She stood beside her instead, looking at the city, in the coat and the wings, and after a while Hanni came and stood on Hyein's other side, and Hyein, who was the tallest, put an arm around each of them, and the three of them stood there and were looked at by nobody at all." }
    ] },

    { after: '2/4', title: '11: window dressing', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { n: "February had turned every window in Paulownia Mall red and pink and gold, hearts on string and chocolate in towers and a paper cupid over the escalator that somebody had hung slightly crooked so he looked like he was falling, and the only window on the second floor without a single heart in it was the one with Hyein standing inside it." },
      { n: "Inside it. Behind the glass, in her socks, on the little raised floor where the mannequins lived, with three of them undressed around her like guests who'd arrived too early, a roll of brown paper under one arm and a mouthful of pins, and her coat in a heap in the corner, because she'd been in there, Solar found out later, since ten in the morning." },
      { n: "The shop had asked her. That was the thing. The same shop whose scarves she'd been glaring at since the autumn, whose mannequins she'd rated out of ten at a volume the whole floor could hear. The manager had come out on Tuesday and asked, through Fuuka, who had translated with her ears going pink, whether the tall girl who kept looking at their windows like they'd personally hurt her would like to do the one for March. For graduation. For the third-years." },
      { s: 'hyein', f: 'happy', t: "SOL. Don't come in. Yes, come in. Through the back, past the till. Mind the bald one, he's fragile, he's lost an arm before." },
      { n: "There was a little door at the back of the window, the size of a cupboard's, and Solar ducked through it and straightened up and was on display. That was what a shop window was, it turned out, from the inside. A bright box with the whole second floor going past it, slowing, looking in, and the light was very white and very close, and something went cold and quick down the back of her neck, the way it always did, before she'd decided anything about it." },
      { s: 'hyein', f: 'neutral', t: "They said I can do whatever I want. Whatever I want. Nobody's ever said that to me in my life without a budget attached. I've been in here five hours. I've done nothing. I put one sock on the bald one." },
      { s: 'hyein', f: 'sad', t: "Everything I've made here was for somebody. I knew whose shoulders. Junpei's sad inseam. Your four numbers. This is for people walking past. I don't know their shoulders, Sol. I don't know anybody's shoulders out there." },
      { choose: [
        { t: "Then make it for one of them. Pick someone walking past.", notes: 3, then: [
          { n: "Hyein looked at her, and then out through the glass, properly, the way she looked at a room, and it took her about a minute. A girl going by toward the escalator in a Gekkoukan coat a size too big, with her hands pulled up into the sleeves and a tube of rolled paper under her arm that could only be a certificate, walking fast, looking at nobody." },
          { s: 'hyein', f: 'serious', t: "Her. She's done. She's finished school and nobody's told her what to wear to the rest of it." },
          { n: "And then her hands were moving, and they didn't stop for an hour." }
        ] },
        { t: "(Stand where the mannequin goes. Be the shoulders.)", notes: 3, then: [
          { n: "She stepped onto the empty mark in the middle of the window and stood there, in the white light, with the second floor going past, and a boy with a skateboard under his arm stopped and stared at her through the glass, openly, and she let him. She didn't reach for her collar. She didn't turn her face. She'd have liked to know when that had stopped being the first thing her hands did." },
          { s: 'hyein', f: 'surprised', t: "...You're standing in a WINDOW. In front of PEOPLE. On PURPOSE." },
          { s: 'hyein', f: 'happy', t: "Okay. Don't move. Don't you dare move. Now I know the shoulders." }
        ] },
        { t: "Do what you'd do at home.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "At home I'd make it louder. Louder and louder until nobody looked at anything else in the mall." },
          { s: 'hyein', f: 'serious', t: "That's not a window. That's just me in a box." }
        ] }
      ] },
      { s: 'hyein', f: 'serious', t: "Belt or no belt. Quick. Don't think. If you think you'll say something polite." },
      { choose: [
        { t: "No belt.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "No belt. Correct. Belts are for people who don't trust the cut. I trust the cut." }
        ] },
        { t: "(Hand her the belt anyway, without a word.)", notes: 3, then: [
          { n: "Hyein took it, and looked at it, and put it on the bald one, and stood back, and took it off again, and handed it back to Solar with a nod of total respect, as if the point had been to make her look at it, and it had." }
        ] },
        { t: "Whatever you think.", notes: 1, then: [
          { s: 'hyein', f: 'neutral', t: "That's what everybody says. I'm asking YOU. ...No belt. I decided while you were being polite." }
        ] }
      ] },
      { n: "By three the brown paper was on the floor in long cut shapes, and the bald one had both socks and a coat, and Hyein was standing back against the glass with her arms folded, looking at what she'd started, and Solar could see her see what it was before she said it, the way you'd see somebody read the end of a letter first." },
      { ifHeading: 'H', then: [
        { n: "It was a blazer. Navy, borrowed from somewhere, with the sleeves pinned to a girl's length, and a pleated skirt under it, and on the lapel, where a school badge would go, a small gold pin Hyein had made out of a button and a lot of glue, in the shape of a star." },
        { s: 'hyein', f: 'neutral', t: "Jihoon says over there you have a title. He wouldn't tell me what. He said if he told me I'd make it a sash." },
        { s: 'hyein', f: 'serious', t: "I would make it a sash. I'd make it the best sash in the world. And then you'd go to school in it and be the most important person in some room I'll never see, and I wouldn't even get to say it was me." },
        { choose: [
          { t: "(Straighten the star on the lapel.)", notes: 3, then: [
            { n: "She moved it a few millimeters, so it sat level, the way a hand of hers in another place did every morning at a mirror without being asked, and Hyein watched her do it, and didn't say anything about how she'd known exactly where it went." }
          ] },
          { t: "I'll tell them. Whoever asks.", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "You won't. You'll say *oh, this, a friend made it.* You always say a friend made it." },
            { s: 'solar', f: 'neutral', t: "I'll say Hyein made it." },
            { s: 'hyein', f: 'happy', t: "...Full name. Lee Hyein. Spell it for them. Twice." }
          ] },
          { t: "It's a lot of blazer.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "It's the right amount of blazer. You just haven't been the right amount of person in it yet. You will be. I can tell from the sleeves." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { n: "It was a coat over a dress. A good dress, a correct one, dark and plain and expensive-looking, the kind of thing you'd wear to stand beside someone at a dinner, and over it a coat with the collar turned up so high the bald one's whole jaw had gone into it, and Hyein had turned him to face the back of the window. Away from the street. Toward the little door." },
        { s: 'hyein', f: 'neutral', t: "That's the other house. Where they hand you the dress. Yunjin told me about it in the laundry room like it was the weather." },
        { s: 'hyein', f: 'serious', t: "So I can't fix the dress. Fine. I'm not invited to fix the dress. But nobody said anything about the coat. The coat's mine. The coat's going to have opinions." },
        { choose: [
          { t: "Turn him back around. Let him look at the street.", notes: 3, then: [
            { n: "Hyein looked at her for a long second, and then took the bald one by both shoulders and turned him, slowly, to face the glass, collar still up, and stepped back, and he looked like somebody who'd been about to leave a room and changed his mind." },
            { s: 'hyein', f: 'sad', t: "...Okay. Okay. That's better. I hate that that's better." }
          ] },
          { t: "(Turn the collar up higher.)", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "Higher. Yes. Somewhere to put your chin when you're angry. Somebody told me that once. I'm not saying who. He was on a dryer." }
          ] },
          { t: "It's a little sad, Hyein.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "It's a LOT sad. It's a window, Sol, it's allowed to be sad. Half the windows in this mall are sad, they're just wearing hearts about it." }
          ] }
        ] }
      ], else: [{ ifHeading: 'R', then: [
        { n: "It was orange and navy. Of course it was. A scarf in one and a sweater in the other, and a skirt with room in it, and boots, and on the floor at the bald one's feet, propped against his ankle, a tiny paper pennant Hyein had cut out and colored in with a marker she'd borrowed from the till." },
        { s: 'hyein', f: 'happy', t: "The tailgate fit. The one you never got to wear. It was on my bed at home, all three of them, and then your dad called. So I'm doing it here first. Practice." },
        { s: 'hyein', f: 'serious', t: "And when we get back you're wearing it. To the next one. I don't care if it's snowing. I don't care who's on whose arm. You're standing next to me and Hanni in school colors and somebody is taking a picture we actually like." },
        { choose: [
          { t: "Somebody's taking the picture. Deal.", notes: 3, then: [
            { s: 'hyein', f: 'surprised', t: "You said deal. You never say deal. You say *we'll see* and then you get a migraine." },
            { s: 'hyein', f: 'happy', t: "I'm writing it on the pennant. Look. *DEAL.* It's binding. It's in a shop window." }
          ] },
          { t: "(Pick up the pennant. Hold it up for the glass.)", notes: 3, then: [
            { n: "She held it up, a little paper triangle in orange marker, at the glass, at the second floor, at a man with a stroller who looked at it and then at her and gave her a very uncertain thumbs up, and Hyein laughed so hard she had to sit down on the window's edge between the bald one's boots." }
          ] },
          { t: "It'll be cold.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "It'll be freezing. You'll have a coat. You have two coats now. You're the best-coated girl in New York State and you don't even know it yet." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { n: "It was two mannequins in coats, holding suitcases, turned toward the little door at the back. And a third one, the bald one, in the middle, with nothing in his hands, and nothing on, and Hyein had dressed him four times since lunch and taken it all off again four times." },
        { s: 'hyein', f: 'sad', t: "I keep dressing him for staying. And then I look at it, and it's good, it's so good, Sol, and I take it off. Because if I leave it on then it's true, and it's in a window, and everybody in this mall walks past it every day after I'm gone." },
        { choose: [
          { t: "Leave it on. Let them walk past it.", notes: 3, then: [
            { n: "She dressed him a fifth time, slowly, a soft sweater and the scarf and a coat with nothing to carry, and stepped back, and didn't take it off. Her hands hung at her sides. She didn't know what to do with them, Solar saw. They kept reaching for a hem." },
            { s: 'hyein', f: 'sad', t: "...He looks happy. That's so rude of him." }
          ] },
          { t: "(Put one of the suitcases in his hand. Just for now.)", notes: 3, then: [
            { s: 'hyein', f: 'surprised', t: "..." },
            { s: 'hyein', f: 'sad', t: "Just for now. Okay. Just for the window. Just so I can stand to look at it. Thank you. That's cheating. Thank you." }
          ] },
          { t: "You don't have to make a window about it.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "I don't know how to not make things about it. That's my whole problem. I'm a person who makes things about it." }
          ] }
        ] }
      ], else: [
        { n: "It was everything at once. A navy blazer, and over it a long dark coat with the collar up, and under both of them a sweater in orange, and a scarf in a color that went with none of it, and the bald one wore all of it at the same time like a man who'd been told to get dressed in the dark in three different houses." },
        { s: 'hyein', f: 'serious', t: "It's ugly. It shouldn't work. Look at it, though. Look at it from over here. It works. I don't know why it works. I've been staring at it for an hour trying to work out why it works." },
        { s: 'hyein', f: 'sad', t: "Hanni says you're going everywhere at once. I said she can't even pick a smoothie. Hanni said *that's why.*" },
        { choose: [
          { t: "It works because you made all of it.", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "...No. I didn't make the blazer. I didn't make the coat, either. I made the sweater. I made one third." },
            { s: 'hyein', f: 'happy', t: "The best third. Obviously. The orange third. Look how it holds the other two together." }
          ] },
          { t: "(Take the scarf off. Let it breathe.)", notes: 3, then: [
            { s: 'hyein', f: 'surprised', t: "Oh. Oh, that's it. That's what was wrong. Everything else gets to stay. One thing has to go." },
            { n: "She folded the scarf over her own arm and didn't say anything else about it, and kept it there for the rest of the afternoon, as if she'd been handed something to hold for someone." }
          ] },
          { t: "It looks like Junpei got dressed.", notes: 2, then: [
            { s: 'hyein', f: 'serious', t: "Do NOT. Do not compare my art to Junpei. Junpei wears a jersey over a hoodie over a jersey." },
            { s: 'hyein', f: 'sad', t: "...Okay, it's a little Junpei. It's a tasteful Junpei." }
          ] }
        ] }
      ] }] }] }] },
      { n: "By five there were people stopping. Not at Hyein. Not at Solar, crouched in the corner pinning a hem with the light on the back of her neck. At the window. A woman with shopping bags stopped and looked, and then a pair of first-years, and the boy with the skateboard came back past and stopped again, and Hyein went still beside her, the whole length of her, and Solar knew that stillness. It was the half second before Hyein got loud. Before she said something enormous about a fountain spitting on her, so they'd look at her instead." },
      { n: "She didn't. She stood there in her socks with a pin in her mouth and her hands open at her sides, and watched people look at what she'd made, and her face did something Solar had never seen it do, a thing with no volume in it at all." },
      { choose: [
        { t: "(Tap the glass beside the work. Point at it, not at her.)", notes: 3, then: [
          { n: "She tapped the glass twice beside the bald one's sleeve, and the woman with the bags looked where she was pointing, and nodded, slowly, at the sleeve, and said something to her friend, and Hyein made a sound into her own pin like a balloon letting go." }
        ] },
        { t: "They're looking at what you made.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "I know. I KNOW. Don't say it out loud. If you say it out loud I'll have to do something about it." },
          { s: 'hyein', f: 'sad', t: "...Tell me later. When there's nobody looking. I want to hear it twice." }
        ] },
        { t: "(Duck out of sight behind the bald one.)", notes: 2, then: [
          { n: "She ducked behind him, and Hyein, without looking down, put one socked foot out and nudged her back into the light with it, firmly, like a cat being pushed off a counter." },
          { s: 'hyein', f: 'neutral', t: "No. You're staff. Staff gets seen. Hold the hem." }
        ] }
      ] },
      { n: "Before they left she wrote a card for the corner of the window, the little white kind the shop used for prices, and propped it against the bald one's boot facing out. It didn't have a price on it. It said, in small careful capitals that Solar had never once seen her use, *dressed by H.*" }
    ] },

    { after: '2/11', title: '12: no voice', place: 'Iwatodai Dorm · Lounge', time: 'Afternoon', music: 'tender', scene: [
      { n: "The window had been drafty. Nobody had thought about that, least of all Hyein, who had stood in it in her socks for six days running with the shop doors opening and shutting on the February air every time somebody went in for a scarf, and on the morning of the holiday she came down the stairs in her pink fleece with the hood up and a towel round her neck and opened her mouth to say good morning and nothing came out at all." },
      { n: "Not a croak. Not a whisper. A little rush of air, like a door opening on an empty room. She stood at the bottom of the stairs with her mouth open and her eyes getting bigger and bigger, and then she went and got the sketchbook." },
      { n: "*I HAVE NO VOICE,* it said, when she turned it round. *THIS IS A NIGHTMARE. THIS IS MY WORST NIGHTMARE. DON'T LAUGH.*" },
      { n: "Hanni had gone to Aohige for honey and lozenges and a kind of yuzu tea Fuuka swore by, and would be gone, she'd said, *ten minutes, Hyein, don't talk,* which had been forty minutes ago, and the lounge was full in the way it was on a holiday, Junpei on the sofa with a manga, Ken and Koromaru on the rug, Yukari in the armchair painting her nails, Fuuka at the dining table with a laptop, and every single one of them had noticed that the loudest person in the building had stopped." },
      { s: 'junpei', f: 'surprised', t: "Whoa. It's so quiet. Is this what it's like? Is this what it's always like for everybody else?" },
      { n: "Hyein wrote something on the sketchbook, fast, and underlined it three times, and held it up, not at Junpei. At Solar." },
      { choose: [
        { t: "(Read it out. In her voice. Exactly.)", notes: 3, then: [
          { n: "*JUNPEI I WILL HEM YOUR TROUSERS SHUT,* it said, and Solar read it out in Hyein's voice, the whole voice, the volume and the outrage and the little climb at the end like a siren, and it came out of her so easily that for a second the lounge went quiet in a completely different way." },
          { s: 'yukari', f: 'surprised', t: "...Oh my God. That was HER. You just did her." },
          { s: 'junpei', f: 'flustered', t: "That's so much scarier coming out of you! Why is it scarier coming out of you?" },
          { n: "Hyein, on the bottom stair with the towel round her neck, put her face in the sketchbook and shook with no sound at all." }
        ] },
        { t: "(Make her the yuzu tea. Hanni's not coming back any time soon.)", notes: 3, then: [
          { n: "There was a jar of it already in the cupboard, it turned out, behind the rice, Fuuka's, with a label in Fuuka's tidy hand that said *for throats*, and Solar made it the way the jar said, a big spoonful and the water just off the boil, and brought it over in both hands, and Hyein wrote *I LOVE YOU* on the sketchbook and then, after a moment, *DON'T TELL ANYONE I CRIED ABOUT A JAR.*" }
        ] },
        { t: "Can't you just rest?", notes: 2, then: [
          { n: "Hyein wrote *NO* in letters so large they took the whole page, and then turned to a fresh one and wrote, smaller, *if I stop moving I'll think,* and then tore the page out and folded it into a very small square and put it in her pocket." }
        ] }
      ] },
      { n: "So Solar was her voice. That was what the afternoon turned into. Hyein wrote and Solar said it, all of it, out loud to whoever it was for, and the dorm came and went through the lounge and was spoken to by Hyein through Solar, which everybody seemed to find either very funny or very unsettling depending on where they were standing." },
      { n: "Mitsuru came down with a humidifier she'd found somewhere and set it on the table with the gravity of someone placing a wreath, and Hyein wrote three full sentences of thanks on the sketchbook and held them out, and Solar read them, and got to the end, and stopped." },
      { s: 'mitsuru', f: 'neutral', t: "...Is there more?" },
      { n: "There was more. Under the thanks, smaller, Hyein had written *your left shoulder is still lower. you're carrying it again. put it down sometimes.*" },
      { choose: [
        { t: "(Read it. All of it.)", notes: 3, then: [
          { n: "She read it. Mitsuru stood very still by the humidifier, and then, without a word, rolled her left shoulder back, once, slowly, as though trying it, and looked at Hyein over the top of the machine for a long moment with something in her face that didn't have a word in either language they were all using." },
          { s: 'mitsuru', f: 'neutral', t: "...Get well, Hyein. That's an instruction." }
        ] },
        { t: "(Hand Mitsuru the sketchbook instead. Let her read it herself.)", notes: 3, then: [
          { n: "Mitsuru took it, and read it, and handed it back, and said only *thank you* in a voice so quiet it was nearly Hyein's, and went back upstairs, and Solar would have sworn she was walking a little differently on the stairs." }
        ] },
        { t: "That's all.", notes: 2, then: [
          { n: "Hyein looked at her, betrayed, from inside the hood, and then let it go, and closed the sketchbook over it, and patted the cover twice the way you'd pat a dog to say good, stay." }
        ] }
      ] },
      { n: "Later, with the lounge emptied out and the humidifier hissing on the table and the light going blue in the windows, the two of them were on the floor with their backs against the sofa, and Hyein had the sketchbook on her knees and wasn't writing anything, which for Hyein was its own kind of shouting." },
      { n: "Then she wrote, and turned it, and her face was already braced for it." },
      { ifHeading: 'R', then: [
        { n: "*WHEN WE GET BACK,* it said, and it was a list. *1. you let me dress you for the first thing. whatever it is. 2. you say no to your dad one time where i can see it. one time. i want to watch. 3. hanni will cry. budget for it.* And then, after a gap, as if the pen had stood at the edge of something and decided to jump, *4. the recruitment chair. i'm not asking. i'm WRITING. writing isn't asking.*" },
        { choose: [
          { t: "(Take the pen. Write *yes* next to four.)", notes: 3, then: [
            { n: "She wrote it small. Hyein looked at it, and then at her, and then took the pen back and drew a tiny heart next to it, and then scribbled the heart out, and then, the way she had once at a fountain in October, drew it back." }
          ] },
          { t: "(Write *it's complicated* next to four.)", notes: 3, then: [
            { n: "Hyein read it, and nodded, slowly, like a doctor who'd expected exactly this result, and wrote underneath it, *everything good is complicated. the coat was complicated. the WINDOW was complicated,* and then underlined *good* twice and didn't explain which part she meant." }
          ] },
          { t: "Writing is asking, Hyein.", notes: 2, then: [
            { n: "She wrote *IT'S A LOOPHOLE* and held it up very close to Solar's face, and then lowered it, and let it go, the way she'd let it go on the strip in December, with the string of a parcel in her hand." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { n: "*yunjin says over there you're engaged,* it said, in lowercase, which Hyein never wrote in. *i said ENGAGED?? she said babe it's complicated. i said everything's complicated. she said not like this.* And under that, after a long gap, *is he nice to you. that's all. you don't have to say who. is he nice.*" },
        { choose: [
          { t: "(Write *he's trying.*)", notes: 3, then: [
            { n: "Hyein read it for a long time. Then she wrote *ok* and drew a box around it, the way she boxed a measurement she'd checked twice and was going to trust." }
          ] },
          { t: "(Write *I don't know yet.*)", notes: 3, then: [
            { n: "She read it, and her mouth pressed flat, and she wrote *then you'll find out. and if he isn't, you'll leave in a good coat,* and underlined *good coat*, because of course she did." }
          ] },
          { t: "It's not like that.", notes: 2, then: [
            { n: "Hyein wrote *everyone says that,* and then, *hanni said that about a boy in the eighth grade and they're still pen pals,* and then put the pen down, and leaned her hooded head against Solar's shoulder, and left the page open." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { n: "*jihoon says you're a VICE president,* it said. *VICE. i said she can't be vice anything, she can't be awake before nine. he said exactly. he said it like it was a compliment.* And under it, smaller, *also he made a face about a boy. like a cat that ate a different cat. who's the boy. you don't have to say. i already know there's a boy. there's always a boy with you and you always say there isn't.*" },
        { choose: [
          { t: "(Write *there's a boy.*)", notes: 3, then: [
            { n: "Hyein read it and threw both arms up in total silence, a whole cheer with no sound in it, like a television on mute in a sports bar, and then put them down and wrote *IS HE NICE* in letters that took up half the page." }
          ] },
          { t: "(Write *he's very polite. it's a problem.*)", notes: 3, then: [
            { n: "She read it twice, and wrote *polite is a red flag or a green flag, no in between,* and then, *i'll allow it. tell him hyein allows it,* and drew a very small crown next to her own name." }
          ] },
          { t: "Jihoon talks too much.", notes: 2, then: [
            { n: "Hyein wrote *JIHOON IS MY BEST SOURCE,* and then, under it, *he's also kind of sad lately. keep an eye on him. i'm saying it because i can't say it,* and Solar looked at that line for a while after the page turned." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { n: "*i'm going home without you,* it said. Lowercase. No underlining. *i wrote it so i wouldn't have to say it. i can't say it anyway. so that's convenient.* And under that, *i'm not mad. i'm two percent mad. a rounding error.*" },
        { choose: [
          { t: "(Write *I'm sorry.*)", notes: 3, then: [
            { n: "Hyein read it and crossed it out. Neatly, one line, the way she crossed out a measurement that was wrong. Then she wrote above it, *don't be sorry. be warm. be fed. be loud sometimes,* and handed the pen back so Solar could cross that out too, if she wanted. She didn't." }
          ] },
          { t: "(Write *two percent is a lot from you.*)", notes: 3, then: [
            { n: "That one got a laugh. No sound, just her shoulders, and the hood falling back off her hair, and Hyein wrote *IT'S A LOT FROM ME* and then *it's the most i've ever been mad at you* and then, very small, *it's also the most i've ever been proud of you. same two percent. don't ask me how.*" }
          ] },
          { t: "Say it out loud when your voice comes back.", notes: 2, then: [
            { n: "She shook her head, slowly, and wrote *no. this one stays written,* and folded the page down at the corner so she'd be able to find it again." }
          ] }
        ] }
      ], else: [
        { n: "*hanni says you're going everywhere,* it said. *all at once. i said that's not a place. she said it is now.* And under it, smaller, *will i know. if you're there. at home. will i be able to tell it's you and not the old you. i'm scared i won't be able to tell.*" },
        { choose: [
          { t: "(Write *I'll tell you I'm a menace. You'll know.*)", notes: 3, then: [
            { n: "Hyein read it and pressed the sketchbook flat against her chest with both arms, and rocked a little, silently, from side to side, which was, Solar had learned, what she did instead of screaming when she couldn't scream." }
          ] },
          { t: "(Write *you'll know. you always know my measurements.*)", notes: 3, then: [
            { n: "She read it twice, and then put her hand round Solar's wrist, the way she had with a tape measure in September, thumb and finger, checking a number she already knew, and held it, and nodded." }
          ] },
          { t: "I don't know.", notes: 2, then: [
            { n: "Hyein looked at her for a long time from inside the hood, and then wrote *ok. then i'll guess. i'm a great guesser,* and underlined *great*, and didn't look at it again." }
          ] }
        ] }
      ] }] }] }] },
      { n: "Hanni came back at last with a carrier bag of everything Aohige sold for throats and two things it didn't, and stopped in the lounge doorway, because the two of them were on the floor in the blue light with a sketchbook between them and not a sound in the room but the humidifier, and Hanni, who'd had a whole speech about the pharmacist ready, didn't make it." },
      { n: "Hyein looked up at her, and then at Solar, and opened her mouth, and something came out. One word, cracked down the middle, hardly there." },
      { s: 'hyein', f: 'sad', t: "...Menace." },
      { choose: [
        { t: "(Laugh. It's the first thing she's said all day.)", notes: 3, then: [
          { n: "Solar laughed, and Hanni dropped the carrier bag and laughed too, and Hyein put her face in her hood, and the humidifier hissed, and that was the first word, and nobody let her say a second one for the rest of the night." }
        ] },
        { t: "You're not allowed to talk. Write it.", notes: 3, then: [
          { n: "Hyein wrote *MENACE* in enormous capitals, and held it up, and Hanni took a lozenge out of the bag and put it in Hyein's mouth like posting a letter, and said *shh,* very kindly, to both of them." }
        ] },
        { t: "(Bang twice on the floor. The way you would on a wall.)", notes: 3, then: [
          { n: "Two knocks on the floorboards. Flat, sleepy, sincere. Hyein looked at the floor, and at her, and put a hand flat over her own mouth like she was holding a pin there, and Hanni, in the doorway, said *what? what was that? what does that mean?* and neither of them told her." }
        ] }
      ] }
    ] },

    { after: '2/18', title: '13: labels', place: 'Iwatodai Dorm · 2F Hallway', time: 'After School', music: 'joy', scene: [
      { n: "The room at the end of the second-floor hall had been empty in September. By February it was a workroom in everything but name, the sewing machine Mitsuru had carried up from the storeroom under the window, a clothes rail Hyein had made out of a curtain pole and two chairs, scraps in a box, scraps on the floor, a tomato-shaped pincushion on the sill, and taped to the door, at eye height, a sheet of sketchbook paper that said *STUDIO · KNOCK · (or don't, I'm busy, come in)*." },
      { n: "Today the door was open and there was a queue in the hall." },
      { n: "Hyein had her voice back, mostly, a lower, rougher version of it that she said made her sound like a jazz singer and that everyone else said made her sound like a jazz singer with a cold, and she was at the machine with a reel of pink ribbon and a pair of very small scissors, cutting labels. Little ones. Pink, the width of a finger, and on each of them, in white thread, very small and very straight, *HYEIN · IWATODAI*." },
      { s: 'hyein', f: 'neutral', t: "Everything I've made here's going in a label. Everything. I should have been doing it since September. At home I do it with everything. Nobody's walking around in something I made without my name in it. That's how you get stolen." },
      { n: "So the dorm had come up, one by one, carrying the things. Junpei with the Superman cape over his arm like a waiter's towel. Ken with a small red scarf, Koromaru's, Koromaru at his heels with his head tilted, watching his scarf leave without him. Fuuka with an apron she held out in both hands. Aigis, at the very back, standing perfectly still holding the cream sweater folded into a precise square." },
      { s: 'hyein', f: 'happy', t: "Sol. Good. You're staff. Pins. Labels. Hand them to me in order. Don't let Junpei cut the line, he's been cutting the line since he got here." },
      { s: 'junpei', f: 'flustered', t: "I've been here the longest! I have seniority!" },
      { choose: [
        { t: "(Hand her labels in order. Be the assistant.)", notes: 3, then: [
          { n: "She stood at Hyein's elbow and fed her labels one at a time, and Hyein's hands went in and out without stopping, a label on the inside of the cape's collar, a tiny one on the end of Koromaru's scarf, which Koromaru inspected afterward with enormous care, a label in the apron's pocket where Fuuka would find it every time she reached for a ladle, and it was like watching somebody sign a stack of letters, quick and sure and all the same and every one of them meant." }
        ] },
        { t: "(Let Junpei cut the line. He's holding the cape like it's a baby.)", notes: 3, then: [
          { n: "Junpei went first, triumphant, and stood over the machine while Hyein sewed the label into the cape's collar, and when she handed it back he held the collar open and read the little pink tag out loud, *Hyein, Iwatodai,* like the name of a famous tailor in a city he'd always wanted to visit, and said, quite seriously, that he was never washing it, and Hyein said that was the opposite of the point and he didn't care." }
        ] },
        { t: "Why now, though?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Because they're staying. They're staying here and I'm not. So the clothes have to say who made them. Somebody has to." }
        ] }
      ] },
      { n: "Aigis came last. She held the sweater out, and then didn't let go of it when Hyein took it, so for a second they were both holding it, across the machine." },
      { s: 'aigis', f: 'neutral', t: "Inside. Not on the collar, where it is customary. Inside, on the left. Against the place where a heart would be, if one had been fitted." },
      { s: 'hyein', f: 'surprised', t: "..." },
      { choose: [
        { t: "(Hold the sweater open for her, inside out, so she can reach.)", notes: 3, then: [
          { n: "She turned it inside out over her own hands and held it at the machine, the left side flat, and Aigis watched the needle go in where she'd pointed with an attention so complete it was nearly a kind of prayer." }
        ] },
        { t: "That's a good place, Aigis.", notes: 3, then: [
          { s: 'aigis', f: 'happy', t: "I have considered several. That is the one I would choose, if asked. I was asked." }
        ] },
        { t: "(Say nothing. Let Hyein decide.)", notes: 2, then: [
          { n: "Hyein didn't need to decide. She'd already turned the sweater inside out." }
        ] }
      ] },
      { n: "Hyein sewed it there. Inside, on the left, very small. Aigis took the sweater back and put it on at once, over her uniform, and stood in the hall with one hand flat against her own chest, over the label, as if checking it was where she'd asked for it, and then thanked Hyein in a voice so ordinary and so pleased that Ken looked at her twice." },
      { n: "When the hall had emptied there was one thing left on Hyein's clothes rail, and it was the long charcoal coat. The one she'd been finishing in the laundry room at night, the one with the hem. It hung there on its own with its sleeves still, and the label she'd cut for it lay on top of the machine. Blank. Pink ribbon, nothing on it yet." },
      { s: 'hyein', f: 'neutral', t: "I don't know what to put on yours. That's the problem. Everybody else's says *Iwatodai* because they're staying in Iwatodai. Yours doesn't know where it's staying." },
      { ifHeading: 'R', then: [
        { s: 'hyein', f: 'happy', t: "...No. That's a lie. I know exactly what to put. It's coming home. Things I make at home don't get a place on them. They just say *Hyein*. Because everybody already knows where." },
        { n: "She threaded the white cotton and sewed it, five letters, and turned the ribbon to show her, and it was the plainest label she'd made all afternoon. Just the name. As if there were nothing else to say." },
        { choose: [
          { t: "Put *Iwatodai* on the back. Small. So it remembers.", notes: 3, then: [
            { n: "Hyein looked at her, and turned the ribbon over, and on the back of it, where only someone unpicking the coat would ever find it, she sewed *IWATODAI* in letters so tiny they were nearly dots. Then she sewed the label in, the name facing out, the place facing in, against the wool." },
            { s: 'hyein', f: 'sad', t: "Okay. Now it remembers. Now it's a coat that knows something. Don't tell the other coat." }
          ] },
          { t: "(Sew it in yourself. One button's worth of stitches.)", notes: 3, then: [
            { n: "She did it badly, and slowly, and Hyein let her, which was the first time all afternoon she'd let anybody else near the needle, and when it was done the label sat a tiny bit crooked inside the collar, and Hyein looked at it with her head on one side." },
            { s: 'hyein', f: 'happy', t: "Crooked. Good. Now it looks like somebody made it." }
          ] },
          { t: "Everybody already knows where.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "Everybody at home does. You didn't. Not when you got here. Now you do. That's the whole difference between September and now." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'hyein', f: 'sad', t: "...No, it does. It knows. It's staying here. With you. And I'm the one going." },
        { n: "It already had a label, of a kind. A scrap of sketchbook paper safety-pinned inside the collar, in her round capitals, *WEAR ME NEXT JANUARY*. She unpinned it and put it in her own pocket, and cut a ribbon." },
        { n: "She sewed *HYEIN · IWATODAI* like all the others, quick and straight, and then held the ribbon a moment longer, and threaded the needle again, and added a line under it, smaller, crooked, in pink on pink so you could only read it if you tipped it to the light. *come home sometimes.*" },
        { choose: [
          { t: "Which home?", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "Any of them. I don't care. Mine. Hanni's. A dream. Come in a dream. I'll make you something in it." }
          ] },
          { t: "(Take the needle. Add *you too.*)", notes: 3, then: [
            { n: "She added it, badly, two words in white on the very edge of the ribbon, and Hyein read it, and put the label in the coat herself, inside the collar, where it would sit against the back of Solar's neck every time she turned the collar up." }
          ] },
          { t: "You'll be fine, Hyein.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "I know I'll be fine. I'm always fine. Fine's easy. Fine's a beige jacket. I want something better than fine for both of us, that's all." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'hyein', f: 'neutral', t: "The everything coat. That's its name. Your quiet one on the dryer says it's a bad name. So I'm doing three labels. One for every thing." },
        { n: "She cut three. One she sewed with her name and nothing else, for home. One she sewed with her name and *Iwatodai*. The third she held for a long time with the needle hovering over it and in the end didn't sew anything on at all, and then put all three in, one in each pocket and the blank one inside the collar." },
        { s: 'hyein', f: 'sad', t: "The blank one's for wherever I can't see. You fill it in. With whatever's there." },
        { choose: [
          { t: "(Put your hand in each pocket. Check they're there.)", notes: 3, then: [
            { n: "One pocket, a ribbon. The other, a ribbon. Hyein watched her hands go into them the way she'd watched them go into the first coat in November, and said, very roughly, in her cold voice, that she'd made the pockets deep on purpose, deep enough for three lives' worth of hands." }
          ] },
          { t: "I'll write your name on the blank one.", notes: 3, then: [
            { s: 'hyein', f: 'flustered', t: "You can't write on ribbon. It bleeds." },
            { s: 'solar', f: 'neutral', t: "Then I'll sew it. Badly." },
            { s: 'hyein', f: 'sad', t: "...Badly. Yes. Do it badly. I'll know it's you." }
          ] },
          { t: "Three's a lot of labels.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "You're a lot of girl. I'm labelling to scale." }
          ] }
        ] }
      ], else: [
        { s: 'hyein', f: 'sad', t: "It's going somewhere I'm not. Somewhere I'll never see it on you. So I'm putting where it's from. So when somebody over there touches the collar and says *where did you get this,* it tells them before you can say *oh, a friend made it.*" },
        { n: "She sewed *HYEIN · IWATODAI* like all the rest, and then, after a moment, a third word under it, smaller. *LOUD*. Just that. In capitals, in white, on pink." },
        { ifHeading: 'S', then: [
          { s: 'hyein', f: 'neutral', t: "For the other house. Where everyone's so quiet. It's a warning label. *Caution, this coat was made by someone loud. Contents may yell.*" }
        ], else: [
          { s: 'hyein', f: 'neutral', t: "For the star place. With the uniforms and the rules. It's a warning label. *Caution, this coat was made by someone loud. Contents may yell at a vice principal.*" }
        ] },
        { choose: [
          { t: "I'll let it yell.", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "Good. Let it yell. Let it yell at dinner. Let it yell at whoever needs it." },
            { s: 'hyein', f: 'sad', t: "...Let it yell when I can't." }
          ] },
          { t: "(Sew one more word in. *Mine.*)", notes: 3, then: [
            { n: "She sewed it herself, under *LOUD*, four letters in a stitch so crooked Hyein winced at every one of them, and then, at the end, didn't say a single thing about the stitching. She just pressed the label flat with her thumb, twice, the way you'd press a stamp onto a letter to make it stick." }
          ] },
          { t: "Nobody's going to read the label.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "You are. Every time you take it off. That's who it's for. It was always for you." }
          ] }
        ] }
      ] }] }] },
      { n: "Hanni came up at the end with three cups of yuzu tea balanced on one of the dorm's trays and knocked on the sign that said not to knock, and looked at the coat on the rail with its label in, and then at Hyein, and her chin went, the way it did, and Hyein pointed at her with the tiny scissors and said, in the jazz-singer voice, *don't,* and Hanni said *I'm not,* and was." },
      { s: 'hanni', f: 'happy', t: "Did you do one for yourself? You always forget to do one for yourself." },
      { s: 'hyein', f: 'surprised', t: "...I didn't." },
      { choose: [
        { t: "(Cut a label. Sew *HYEIN · STAFF* and pin it on her sleeve.)", notes: 3, then: [
          { n: "It was the worst label anyone had ever sewn, the letters lurching up and down the ribbon like a heartbeat on a monitor, and Hyein looked at it on her own sleeve, pinned crookedly over the pink fleece, and laughed, and coughed, and laughed, and wouldn't let anybody take it off for the rest of the day." }
        ] },
        { t: "You're the one thing here you didn't make.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...That's not true. I made a lot of me here. I made a version of me that doesn't get loud when people look at you. That one's new. I made her in a window." },
          { s: 'hanni', f: 'happy', t: "She's very good. She's my favorite one. Don't tell the old one." }
        ] },
        { t: "Hanni, you do it.", notes: 2, then: [
          { n: "Hanni did it, with her tongue between her teeth and the needle held like a pencil, and it took her ten minutes, and the label said *HYENI*, and Hyein looked at it and said that it was perfect and that nobody was ever to fix it." }
        ] }
      ] }
    ] },

    { after: '2/23', title: '14: the question', place: 'Iwatodai Strip', time: 'After School', music: 'tender', scene: [
      { n: "The old woman's shop on the strip had its paraffin heater going so hard in February that the windows ran on the inside, and the bolts of cloth stacked to the ceiling smelled warm, like bread, and the old woman herself was in a cardigan with another cardigan over it, behind the counter with the brass rule set into the wood, watching Hyein come in with the expression of someone watching a regular weather front arrive." },
      { n: "Hyein had come to buy nothing. She said so at the door. She'd come, she said, to say thank you, and she'd practiced it in Japanese on the walk over with Fuuka's help, three words, and when she got to the counter she said all three of them too loudly and in the wrong order, and the old woman listened very seriously, and then nodded, and reached under the counter, and came up with something wrapped in brown paper and string." },
      { s: 'hyein', f: 'surprised', t: "No. No no no. I came to give YOU something. That's backwards. Sol. Tell her it's backwards." },
      { choose: [
        { t: "(Bow, and take it for her. Some things you let people give you.)", notes: 3, then: [
          { n: "Solar bowed and took the parcel in both hands and gave it to Hyein, who stood there holding it as if somebody had handed her a baby in a supermarket, and the old woman said something short and dry, and Solar didn't need it translated. It sounded exactly like *you're welcome, now go away, I'm busy*, which in this shop was the same as a hug." }
        ] },
        { t: "Open it. She wants you to.", notes: 3, then: [
          { n: "Hyein opened it at the counter with her hands not quite steady, and it was the rest of the velvet. The sad-wine velvet from the autumn, the bolt Hyein had bought half a meter of with her own coins and carried home under her arm like a cat. The whole rest of the bolt, folded in brown paper." },
          { s: 'hyein', f: 'sad', t: "...She remembered. She remembered which one. I only touched it like nine hundred times." }
        ] },
        { t: "It's not backwards. It's a trade.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "A trade's when both people get something. I only gave her three words and two of them were wrong." },
          { s: 'solar', f: 'neutral', t: "She got nine hundred visits." },
          { s: 'hyein', f: 'sad', t: "...She did get a lot of visits." }
        ] }
      ] },
      { n: "Outside the light was already going, blue and cold down the length of the strip, and they walked back with the parcel between them, each holding one end of the string, which was unnecessary, and which neither of them had suggested changing since December." },
      { n: "Halfway up the street Hyein stopped walking. She stopped the way she had in December, at the same place, near enough, by the bike rack outside the bathhouse, and looked at the string in her hand, and at Solar, and Solar watched her come all the way up to the edge of the thing again. This time she didn't step back." },
      { choose: [
        { t: "(Wait. Let her get there.)", notes: 3, then: [
          { n: "She waited. A bicycle bell went somewhere down the strip. Hyein wound the string once round her finger, and unwound it, and looked up." }
        ] },
        { t: "Ask it.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...I'm getting there. Don't rush me. I've been getting there since December." }
        ] },
        { t: "It can wait.", notes: 1, then: [
          { s: 'hyein', f: 'sad', t: "It can't. That's the thing about February. Nothing can wait in February. It's the shortest month. It's rude like that." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "You said ask you later. Not on a good day. It's not a bad day. It's not a good day either. It's a Tuesday. I think a Tuesday's allowed." },
      { s: 'hyein', f: 'serious', t: "The sixth. Wherever you're going. Did you pick it? Or did somebody hand you the dress?" },
      { ifHeading: 'R', then: [
        { s: 'solar', f: 'neutral', t: "I picked it." },
        { s: 'hyein', f: 'surprised', t: "...You did?" },
        { s: 'solar', f: 'neutral', t: "I picked Syracuse. I picked it before. I picked it when I said no to the other school. I'm picking it again." },
        { n: "It came out of her plain and certain, and she didn't know where the second sentence had come from, only that it was true, a door she'd once walked through with her whole family looking at her back, and Hyein's face did something complicated and enormous and then went very still, which was how Solar knew it had landed." },
        { s: 'hyein', f: 'serious', t: "Okay. Then when we get there, and the email comes from your dad's office about what to wear to some dinner, you still picked. You picked first. Say it to me now so I can remind you later." },
        { choose: [
          { t: "I picked it. Remind me.", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "I'm going to remind you SO much. Every week. In the group chat. I'll make it the chat name." }
          ] },
          { t: "(Pull the string so she has to walk closer.)", notes: 3, then: [
            { n: "She pulled. Hyein came, a step, two, until the parcel was squashed between them and the string had gone slack, and then she put her chin down on top of Solar's head, the way she did, heavily, and said into her hair that she was holding her to it with two fingers, like a hem before you pin it." }
          ] },
          { t: "You'll have to remind me a lot.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "I know. I've budgeted for it. Hanni's going to make a chart." }
          ] }
        ] }
      ], else: [{ ifHeading: 'S', then: [
        { s: 'solar', f: 'neutral', t: "I picked the house where everything's already decided." },
        { n: "She heard how it sounded the second it was out. Hyein didn't say anything for a long time. A man came out of the bathhouse in a cloud of steam with a towel round his neck and walked between them and the bike rack, and the string went taut over his head, and he ducked it without looking up." },
        { s: 'hyein', f: 'sad', t: "...Then you picked the dress. That's allowed. People pick the dress. I'd never have picked it for you. But you're allowed." },
        { s: 'hyein', f: 'serious', t: "Pick the coat, too, though. Promise me. Whatever they hand you, the coat's yours. The coat you pick." },
        { choose: [
          { t: "The coat's mine. I promise.", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "Okay. Then I can stand it. I can stand anything if you're warm in something I made." }
          ] },
          { t: "(Tell her it was the first thing in a long time you picked yourself.)", notes: 3, then: [
            { s: 'hyein', f: 'surprised', t: "...Picking the place where they pick everything for you?" },
            { s: 'solar', f: 'neutral', t: "Yes." },
            { s: 'hyein', f: 'sad', t: "...That's the most complicated thing anyone's ever said to me on a Tuesday. Okay. I believe you. I hate that I believe you." }
          ] },
          { t: "Don't be angry.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "I'm not angry. I'm two percent. I'm always two percent. It's my natural resting state." }
          ] }
        ] }
      ], else: [{ ifHeading: 'H', then: [
        { s: 'solar', f: 'neutral', t: "I picked the one where none of you are." },
        { n: "It came out quiet. Hyein looked at her for a long moment in the blue light with the string in her hand, and Solar braced, and then watched something go across her face she hadn't expected at all. Not hurt. Something that looked a lot more like being impressed against her will." },
        { s: 'hyein', f: 'serious', t: "...Good." },
        { s: 'hyein', f: 'sad', t: "No, I mean it. That's the most *you* thing you've ever done. Picking the one nobody saw coming. Picking it on purpose. At home you'd never. At home you pick whatever makes the fewest people look at you." },
        { s: 'hyein', f: 'neutral', t: "Everyone's going to look at you over there. Vice president. I know. Jihoon told me. Let them." },
        { choose: [
          { t: "I'll let them look.", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "And when they do, you're wearing the coat. And somebody says nice coat. And you say thank you. You don't say *oh, this.* You say thank you." }
          ] },
          { t: "(Hug her, parcel and all.)", notes: 3, then: [
            { n: "She hugged her round the parcel, which crushed between them with a crackle of brown paper, and Hyein held on with one arm and kept the string in her other hand, carefully, as if letting go of it would count for something." }
          ] },
          { t: "You're not upset?", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "I'm devastated. I'm also proud. I contain multitudes. It's a fashion term." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'solar', f: 'neutral', t: "I picked here." },
        { s: 'hyein', f: 'serious', t: "I know. I wanted to hear you say it. I wanted to know you didn't just get left here like a coat on a chair." },
        { s: 'solar', f: 'neutral', t: "I picked it." },
        { s: 'hyein', f: 'sad', t: "Okay. Okay. Then it's yours. Then I can go home and tell everybody you picked it. That you weren't taken. That you weren't lost. That you picked." },
        { choose: [
          { t: "Tell them I picked it. All of them.", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "I'll tell them so loud. I'll tell them in the dining hall. I'll stand on a chair. Jaemin did it, I can do it." }
          ] },
          { t: "(Take her end of the string, too. Hold both.)", notes: 3, then: [
            { n: "She took the other end out of Hyein's fingers so she was holding both, and the parcel hung between her hands, and Hyein looked at her empty hand for a second as if she'd lost something, and then put it in Solar's coat pocket, the one she'd made, and kept it there all the way back." }
          ] },
          { t: "You can tell them I'm a menace.", notes: 2, then: [
            { s: 'hyein', f: 'happy', t: "Everybody already knows you're a menace. That's not news. That's the weather." }
          ] }
        ] }
      ], else: [
        { s: 'solar', f: 'neutral', t: "All of it." },
        { s: 'hyein', f: 'surprised', t: "...All of it?" },
        { s: 'solar', f: 'neutral', t: "I picked all of it. Every one." },
        { s: 'hyein', f: 'happy', t: "Greedy. You're so greedy. I love that for you." },
        { n: "She said it the way she'd said it in December about the pockets, *both, you're so greedy*, and then heard herself, and looked down at the string, and Solar could see her doing a sum in her head that didn't come out." },
        { s: 'hyein', f: 'sad', t: "Does all of it have room in it? For here? For the window and the jar and the label that says *HYENI*?" },
        { choose: [
          { t: "I'll make room.", notes: 3, then: [
            { s: 'hyein', f: 'neutral', t: "Make it deep. Like a pocket. Deep enough for a lot." }
          ] },
          { t: "(Say nothing. Hold the string tighter.)", notes: 3, then: [
            { n: "She held it tighter. Hyein felt it, on her end, a small pull, like somebody checking a line was still tied to something, and pulled back, once, gently, to say it was." }
          ] },
          { t: "I don't know.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "Okay. Then I'll guess yes. I'm a great guesser. I guessed your measurements." }
          ] }
        ] }
      ] }] }] }] },
      { n: "They walked the rest of the way without saying much, which was new, and the strip lit itself up around them a window at a time, and at the dorm steps Hyein stopped, and looked at the parcel, and at Solar." },
      { s: 'hyein', f: 'neutral', t: "I'm making you something out of it. The velvet. I don't know what yet. Don't ask. You'll get it when you get it." },
      { choose: [
        { t: "Make yourself something out of it.", notes: 3, then: [
          { s: 'hyein', f: 'surprised', t: "...Me?" },
          { s: 'solar', f: 'neutral', t: "You. For once. Something you picked." },
          { s: 'hyein', f: 'sad', t: "...Okay. Okay. Something I picked. I don't know what I'd pick. I've never had to know. Give me a week." }
        ] },
        { t: "(Promise not to ask.)", notes: 3, then: [
          { n: "She promised. Hyein looked at her suspiciously, the way you'd look at a cat that had promised not to knock a glass off a table, and went up the steps with the parcel against her chest and didn't look back, and Solar heard the sewing machine start on the second floor before she'd got her shoes off." }
        ] },
        { t: "What if there's no time?", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "There's always time. I made a Superman cape in eleven minutes. I can make anything in eleven minutes if I'm angry enough." }
        ] }
      ] }
    ] },

    { after: '2/27', title: '15: hold still', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'sun', scene: [
      { flag: 'hyein-r15' },
      { n: "The last Saturday in February was the first warm one, a soft wet warmth coming off the bay that made the mall's doors stand open and the paper cupid over the escalator turn slowly on his string, and Hyein was waiting in front of the shop window, her window, with her coat over her arm for once instead of on her, and something folded in brown paper under the other arm." },
      { n: "The window had been changed. The shop had kept hers up for two weeks and then put March in, white and green and graduation bouquets, and the little card that said *dressed by H.* was gone, and Hyein stood in front of the glass and looked at the new mannequins with her head on one side and said, after a long time, that it was fine. It was very fine. It was a beige jacket of a window. And then didn't say anything else about it, which was how Solar knew she minded." },
      { s: 'hyein', f: 'neutral', t: "Okay. Last fitting. I've got one thing left and I need a body. Stand there. Don't move." },
      { s: 'solar', f: 'neutral', t: "No." },
      { s: 'hyein', f: 'surprised', t: "...No?" },
      { s: 'solar', f: 'neutral', t: "Your turn. You stand there. You hold still." },
      { choose: [
        { t: "(Take the parcel off her. Point at the mark in front of the mirror.)", notes: 3, then: [
          { n: "Hyein looked at the mark on the floor in front of the shop's long mirror as if it were the edge of a diving board. Then she stood on it. She stood on it like a mannequin, rigid, chin up, hands at her sides, and Solar said *like a girl on a Saturday*, in Hyein's own voice, and Hyein's shoulders came down an inch, and she laughed, and was furious about laughing." }
        ] },
        { t: "You've dressed me since September. I'm picking for you.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "You don't KNOW my measurements." },
          { s: 'solar', f: 'neutral', t: "Tallest of the girls. Long arms. You buy everything a size up so you have somewhere to put your hands." },
          { s: 'hyein', f: 'surprised', t: "...That's MY line about YOU." },
          { s: 'solar', f: 'neutral', t: "It's true about you, too." }
        ] },
        { t: "Just this once.", notes: 2, then: [
          { s: 'hyein', f: 'neutral', t: "Just this once. Fine. I'm only doing this because it's warm and I'm in a good mood and I've lost my mind." }
        ] }
      ] },
      { n: "So Solar dressed her. Off the racks of the shop that had let Hyein do its window, while the clerk who'd once refused to let her fix a scarf watched from behind the till with an expression of slowly dawning delight. Not a coat. Hyein always went to coats. A soft blouse in a color that meant nothing, a color like a Sunday, and a long cardigan over it, and nothing on top, nothing loud, nothing that asked anybody to look." },
      { n: "And the hard part wasn't the clothes. The hard part was that Hyein had to stand there and not say anything about it. Not narrate. Not fix the hem. Not turn and tell the woman with the stroller what was wrong with the sleeve. Solar watched her try, every few seconds, watched her mouth open and close, her hands rise toward a button and drop again, and in the long mirror the tallest girl in the mall stood in a Sunday-colored blouse being looked at, quietly, by one person, for something she hadn't made." },
      { s: 'hyein', f: 'sad', t: "...This is the hardest thing I've ever done. Harder than the window. Harder than no voice. Can I say one thing about the cuffs." },
      { s: 'solar', f: 'neutral', t: "No." },
      { ifHeading: 'R', then: [
        { s: 'hyein', f: 'neutral', t: "...You're going to do this at home, aren't you. Now that you know how. You're going to stand me in front of a mirror in the house and tell me to hold still and I'm going to have to." },
        { s: 'hyein', f: 'happy', t: "Hanni's going to be unbearable about it. She's going to take a picture. And this time the picture's going to work, because the phones are going to work, because we're going to be home." },
        { choose: [
          { t: "Every Saturday. At home. You hold still.", notes: 3, then: [
            { s: 'hyein', f: 'surprised', t: "EVERY Saturday?" },
            { s: 'solar', f: 'neutral', t: "Standing order." },
            { n: "Hyein's face went through four things at once in the mirror, and settled on the one with her mouth pressed flat and her eyes very bright, the one she'd had on the roof in January." }
          ] },
          { t: "(Tell her she looks like herself.)", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "...I always look like myself." },
            { s: 'solar', f: 'neutral', t: "You look like yourself when nobody's looking at you. You never let anybody see that one." },
            { n: "Hyein didn't answer. She looked at the girl in the mirror for a long time without fixing anything." }
          ] },
          { t: "Hanni can take the picture.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "Hanni takes terrible pictures. Her thumb's in all of them. Every picture of us at home has a pink thumb in the corner. I'll miss the thumb, here. I didn't know that till now." }
          ] }
        ] }
      ], else: [{ ifHeading: 'stay', then: [
        { s: 'hyein', f: 'sad', t: "You did this so I'd know how. Didn't you. So I'd know how to hold still when you're not there to make me be loud." },
        { s: 'hyein', f: 'neutral', t: "At home there's nobody to get loud for. You'll be here. Nobody'll be looking at you wrong in the dining hall, because you won't be in the dining hall. I don't know what I'm for, at home, without you to stand in front of." },
        { choose: [
          { t: "You're for you.", notes: 3, then: [
            { s: 'hyein', f: 'sad', t: "...That's so cheesy. That's the cheesiest thing anyone's ever said to me in front of a mannequin." },
            { s: 'hyein', f: 'neutral', t: "Slower. One more time. I want to write it on a label." }
          ] },
          { t: "(Fix her collar. Once, and leave it.)", notes: 3, then: [
            { n: "She turned the cardigan's collar down, one side and then the other, smoothing it with her thumbs the way Hyein had done hers in November, and stepped back, and left it, and Hyein stood very still and let it be fixed by somebody else and didn't touch it, and that was all, and it was a lot." }
          ] },
          { t: "You'll find someone else to dress.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "I'll find a hundred people to dress. I'm going to be famous. It's still not the same. You know it's not the same." }
          ] }
        ] }
      ], else: [{ ifHeading: 'true', then: [
        { s: 'hyein', f: 'neutral', t: "If you're everywhere, after. If you're at home and somewhere else at the same time. Will you still do this? At home? Will you know how?" },
        { s: 'hyein', f: 'sad', t: "Because I'm scared you'll come home and it'll be the you from before. The one who checks the mirror for damage. And this you, the one who just told me *no*, will be somewhere I can't get to." },
        { choose: [
          { t: "I'll tell you no at home. First day.", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "First day. Promise. To my face. Something small. Like *no, Hyein, I'm not wearing that.* I'll scream." },
            { s: 'hyein', f: 'sad', t: "...I'll know it's you. That's how I'll know." }
          ] },
          { t: "(Stand behind her in the mirror. Both of you in it.)", notes: 3, then: [
            { n: "She stepped up behind her so they were both in the glass, the tall girl in a Sunday blouse and the shorter one in a coat Hyein had made, and for a second it was every mirror at once, steam and curling irons and a shop on the second floor and a roof in January with the wind coming off the bay, and Hyein looked at the two of them in it and didn't say anything at all." }
          ] },
          { t: "I don't know what I'll remember.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "Then I'll remember it for both of us. I'm good at holding things. I have big hands. I've told you that." }
          ] }
        ] }
      ], else: [
        { s: 'hyein', f: 'sad', t: "You're going somewhere I can't come. You know that. I know that. I'm saying it out loud because I'm not allowed to talk about the cuffs." },
        { s: 'hyein', f: 'neutral', t: "And over there nobody knows I'm the loud one. Nobody's going to get loud for you. So you'll have to do it yourself. When somebody looks at you wrong. You'll have to be the loud one." },
        { ifHeading: 'S', then: [
          { s: 'hyein', f: 'serious', t: "At dinners. In the other house. Where everyone's quiet and correct. Be loud once. For me. Knock something over. A glass. A small glass." }
        ], else: [
          { s: 'hyein', f: 'serious', t: "At that school. With the pins and the rules. Be loud once. For me. In a meeting. Make the polite boy put his pen down." }
        ] },
        { choose: [
          { t: "Once. For you.", notes: 3, then: [
            { s: 'hyein', f: 'happy', t: "Once is enough. Once and they'll never forget it. That's the whole secret. I've only ever needed once." }
          ] },
          { t: "(Get loud now. In the shop. Tell the whole floor who made your coat.)", notes: 3, then: [
            { n: "She turned round to the second floor, the shoppers and the clerk and the woman with the stroller and a boy holding a heart-shaped balloon left over from the fourteenth, and said, at a volume she had never once used in this city, that her coat was made by Lee Hyein, of the second floor of the Iwatodai dorm, and that she took commissions, and her rates had gone up." },
            { n: "Hyein, in the Sunday blouse, in front of the mirror, put both hands over her face, and didn't move from the mark, and didn't say a single word, and shook." }
          ] },
          { t: "I'm not loud.", notes: 2, then: [
            { s: 'hyein', f: 'neutral', t: "You are. You hid it. You hid it under a coat your mom bought. I made you a different coat. That was the whole plan." }
          ] }
        ] }
      ] }] }] },
      { n: "They bought the blouse. Hyein tried to pay and Solar stood in front of the little screen with her whole body, the way Hyein had in September, and leaned when Hyein leaned, smoothly, like a goalkeeper, until the two of them were tilted at the register at an angle the clerk was visibly concerned about." },
      { s: 'hyein', f: 'flustered', t: "That's MY move. You can't use my move. I invented the move." },
      { choose: [
        { t: "You stole it from a goalkeeper.", notes: 3, then: [
          { s: 'hyein', f: 'serious', t: "I ADAPTED it from a goalkeeper. That's called influence. Everyone in fashion steals from sport. Look at a tracksuit." }
        ] },
        { t: "(Keep leaning until she gives up.)", notes: 3, then: [
          { n: "She kept leaning. Hyein kept leaning. The clerk put her hand flat on the counter, as though the whole shop might tip, and in the end Hyein straightened up and put her purse away and said, with tremendous dignity, that she was letting her win, which was a lie, and both of them knew it, and the clerk laughed." }
        ] },
        { t: "(Let her pay. It's her blouse.)", notes: 1, then: [
          { n: "She stepped aside. Hyein paid, triumphant, and then looked at the receipt and went quiet, and folded it very small, the way she folded things she didn't want to think about." }
        ] }
      ] },
      { n: "Outside the shop she gave Solar the parcel she'd been carrying under her arm all afternoon, and didn't say what it was, and stood there with her hands open at her sides, not fixing anything, while Solar opened it." },
      { n: "It was the velvet. Not a coat. Not a dress. A scarf, long and soft, in the sad-wine color that went darker under your fingers and lighter when you lifted them, and at one end, on a pink label the width of a finger, in white thread, two words and no place. *Love, H.*" },
      { choose: [
        { t: "(Put it on. Right now. Once and loose and one end long.)", notes: 3, then: [
          { n: "She put it on the way Hyein had taught her, once round and loose and one end long, in front of the glass, and Hyein watched her do it right without being told, and her mouth went, and she pressed it flat, and said, in a voice with nothing loud in it at all, *that's giving.*" }
        ] },
        { t: "You didn't put Iwatodai on it.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "No. That one's not from here. That one's from me. I'm not a place." },
          { s: 'hyein', f: 'neutral', t: "...I'm a little bit of a place. Don't tell anyone." }
        ] },
        { t: "(Wrap the other end round her neck too. Make her share it.)", notes: 3, then: [
          { n: "It was long enough. Hyein had, it turned out, made it long enough for exactly that, which she denied, loudly, all the way to the fountain, wrapped up in the other end of it with her chin in the velvet and her cheeks gone red, walking much too close because she had no choice, and not minding." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Okay. Drink water. Ttyl." },
      { s: 'hyein', f: 'sad', t: "...I'm not going anywhere. I just always say that. I'm going to stand here for five more minutes." },
      { n: "She stood there. Solar stood beside her, in the coat and the velvet, and neither of them said anything, and the March window went on being beige behind them, and for five whole minutes in the busiest mall on Port Island, the loudest girl in it held perfectly, happily still." }
    ] }
  ],

  // After MAX: rotate in order at her usual spot (Hyein doesn't close; the searchers stay until the last week).
  afterMax: [
    { title: 'the books', place: 'Paulownia Mall · Shop Windows', time: 'After School', music: 'city', scene: [
      { ifFlag: 'hyein-shop', then: [
        { n: "The sketchbook had a second sketchbook now. It had been bought for the purpose, at the stationery shop by the escalators, a plain black one with an elastic band, and across the first page in capitals it said *COMMISSIONS · IWATODAI*, and the list under it had gone over onto a second page and was threatening a third." }
      ], else: [
        { n: "Hyein had started taking commissions. Nobody had told her to. Junpei had asked for a second cape, and then Ken had asked, very formally, whether a scarf could be made for a dog in a color that would not embarrass the dog, and somewhere in there she'd bought a plain black notebook with an elastic band at the stationery shop by the escalators and written *COMMISSIONS · IWATODAI* across the first page in capitals, and now the list under it had gone over onto a second." }
      ] },
      { n: "She had it open against the shop window like a clipboard, and was going down it with her pen, reading aloud, while Solar stood beside her in the coat holding two paper cups of something hot and being, Hyein had announced, her business manager, a job that so far consisted of holding the cups." },
      { s: 'hyein', f: 'serious', t: "Junpei. Superman, second. Delivered. Paid. Ken, scarf for Koromaru, red, trial basis, made permanent. Paid in a very formal thank-you note. I'm keeping the note. It's the nicest thing anyone's ever written me." },
      { s: 'hyein', f: 'neutral', t: "Fuuka. Apron. With a pocket for a ladle. She asked if that was too much to ask. I said *Fuuka, that's the least anyone has ever asked me for anything.* She cried. I don't know why. I think it was a happy cry." },
      { s: 'hyein', f: 'flustered', t: "And Akihiko. Jacket. From the measurements. In September. He came and found me last week and said, and I'm quoting, *you said hypothetical.* He's been carrying that around for four months. He wants the hypothetical jacket." },
      { choose: [
        { t: "Charge him double.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "DOUBLE. Yes. Double protein bars. He'll do it. He'll pay in protein bars and he'll be so serious about it." },
          { s: 'hyein', f: 'serious', t: "You're a great business manager. You're ruthless. I knew you had it in you. You get it from your father." },
          { n: "She said it as a joke, and then heard it, and looked at Solar quickly to see how it had landed. It had landed fine. Solar laughed, and it was a real one, and Hyein let go of a breath she'd been holding without telling anyone." }
        ] },
        { t: "Make it for free.", notes: 2, then: [
          { s: 'hyein', f: 'surprised', t: "FREE? I'm a professional. I have rates. My rates have gone UP." },
          { s: 'hyein', f: 'neutral', t: "...I was going to make it for free. Don't tell him. He'll try to pay me anyway and it'll be a whole thing." }
        ] },
        { t: "What's Mitsuru's commission?", notes: 3, then: [
          { s: 'hyein', f: 'neutral', t: "Nothing. She hasn't asked. She won't ask." },
          { s: 'hyein', f: 'serious', t: "So I'm making her something anyway. A scarf. A soft one. Not red. Everything she owns is a color that means business. This one's going to be a color that means nothing. That means *Sunday.*" },
          { s: 'hyein', f: 'happy', t: "Don't tell her. She'll find out when it's on her neck." }
        ] }
      ] },
      { n: "At the bottom of the second page, under the dorm's names, under Aigis's sweater and Yukari's single button and somebody's very long list of trouser alterations, there was a last line in smaller handwriting, and Solar read it upside down before Hyein could turn the page. *Solar. Everything. Forever. No charge.*" },
      { s: 'hyein', f: 'neutral', t: "That's a standing order. Don't read my books. It's private financial information." }
    ] },

    { title: 'fitting', place: 'Paulownia Mall · Shop Windows', time: 'After School', scene: [
      { n: "Hyein had a new mannequin to fight. She'd been fighting it since Thursday. It was wearing a scarf wrong, wrapped twice and tucked under itself like a bandage, and she'd asked the shop to let her fix it, very politely, through Fuuka, who had translated with her face going slowly pinker, and they'd said no, and she was taking it personally." },
      { s: 'hyein', f: 'serious', t: "Stand in front of it. Look like you're wearing it right. It needs to see." },
      { s: 'solar', f: 'neutral', t: "I'm not wearing a scarf." },
      { s: 'hyein', f: 'neutral', t: "You're wearing a coat I made with the collar up. That's a scarf in spirit. Stand there. Be correct at it." },
      { choose: [
        { t: "(Stand in front of it and look smug.)", notes: 3, then: [
          { n: "Solar stood in front of the window with her hands in her pockets and her chin up and looked at the mannequin the way she'd look at a support who'd forgotten to heal, and in the glass she could see her own face doing it, a face she hadn't known she owned, cool and bored and entirely sure of itself." },
          { s: 'hyein', f: 'happy', t: "YES. Look at it. It's ashamed. It knows." },
          { s: 'hyein', f: 'neutral', t: "That face. That's your Sigma face. You used to do that face at boys who said *hey, aren't you Jaehyun's sister.* I haven't seen it in five months. Welcome back, face." }
        ] },
        { t: "(Fix the scarf on the mannequin when the clerk isn't looking.)", notes: 3, stat: { proficiency: 1 }, then: [
          { s: 'hyein', f: 'surprised', t: "SOL. That's CRIME." },
          { s: 'hyein', f: 'happy', t: "...That's so much better. You did it right. Once and loose and one end long. I taught you that. I'm so proud of my criminal." },
          { n: "The clerk came back, and looked at the mannequin, and looked at it again, and then at the two girls standing in front of the window being very interested in the price of a belt, and then, after a long moment, went and got a second scarf and did the other mannequin the same way." }
        ] },
        { t: "Leave it. It's doing its best.", notes: 2, then: [
          { s: 'hyein', f: 'sad', t: "Its best is a bandage, Sol. Its best is a cry for help." },
          { s: 'hyein', f: 'neutral', t: "...Fine. It's doing its best. I'll respect its journey. From over here. With my arms crossed." }
        ] }
      ] },
      { n: "They walked the whole row of windows after that, all twelve of them, the way they apparently used to do the shops along the main street at home on Sunday afternoons, Hyein rating every mannequin out of ten in a voice the whole second floor could hear and Solar disagreeing with every rating on principle, until they got to the end and Hyein turned around and said that it was a tie, which it wasn't, and that they'd have to come back and do it again, which they would." }
    ] },

    { title: 'menace', place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'night', scene: [
      { n: "Three a.m. The hairdryer, through the bathroom door, on high." },
      { ifFlag: 'hyein-menace', then: [
        { n: "Solar banged twice on the wall without getting out of bed, without opening her eyes, without being in any real sense awake, the way she'd breathe." }
      ], else: [
        { n: "Solar lay there for a second with her eyes shut, deciding, and then reached up and banged twice on the wall without getting out of bed. It felt like the most natural thing she'd ever done. It felt like putting her foot on a stair in the dark and finding it there." }
      ] },
      { n: "The hairdryer went off. A pause. Then two bangs back, and Hyein's voice, muffled, very pleased." },
      { s: 'hyein', f: 'happy', t: "THANK YOU. GOODNIGHT." },
      { choose: [
        { t: "(Bang once more. For good measure.)", notes: 3, then: [
          { n: "One more bang came back, and then silence, and then, very faintly, Hyein laughing into her pillow, and then, a long time later, when Solar was almost asleep, one more, very soft, the knock of someone checking that you're still there." }
        ] },
        { t: "(Go and sit on the bathroom floor with her anyway.)", notes: 3, then: [
          { n: "Warm socks. The tub at their backs. The second hairdryer, the one with Mitsuru's note still taped to the handle, on low, pointed at their feet. Hyein talked about a coat she was going to make someday for someone famous, a coat so good it would end up in a museum with a little card next to it with her name on, and Solar fell asleep halfway through the buttons." }
        ] },
        { t: "(Text her.)", notes: 2, then: [
          { phone: [
            { from: 'solar', t: "ur a menace" },
            { from: 'hyein', t: "I KNOW" },
            { from: 'hyein', t: "gn sol" },
            { from: 'hyein', t: "drink water. ttyl" }
          ], contact: 'hyein' },
          { n: "Solar looked at it for a while in the dark. Drink water. She got up and drank a glass at the bathroom sink on the way past, because somebody had told her to, and on the other side of the door the hairdryer started up again, low, for about four seconds, and stopped, like a laugh." }
        ] }
      ] }
    ] },

    { title: 'the river, again', place: 'Iwatodai · Riverside', time: 'After School', music: 'day', scene: [
      { n: "It was Hyein's idea to go back to the river, and Solar knew why before they got there, because Hyein had been quiet the whole walk down from the dorm, quiet for her, which meant she'd only talked about three things instead of nine." },
      { n: "The railing was cold enough to sting through gloves. The water was low and slow and gray, and there were ducks on it now that hadn't been there in October, paddling in a line against the current and getting nowhere, very calmly, like they'd decided that was the point." },
      { ifFlag: 'hyein-yelled', then: [
        { s: 'hyein', f: 'neutral', t: "Okay. Last time we yelled bad things. Today we yell good things. That's the rule. I just made it. Rules are binding if you make them at a river." }
      ], else: [
        { s: 'hyein', f: 'neutral', t: "Okay. Last time I yelled and you stood there. Today you yell. Good things. That's the rule. I just made it. Rules are binding if you make them at a river." }
      ] },
      { s: 'hyein', f: 'happy', t: "I'll go first. To show you how." },
      { n: "She put her hands around her mouth, and filled her whole chest, and yelled at the river that she'd made a coat. That she'd made a coat in another world on a sewing machine from a storeroom and it fit perfectly. That Mitsuru Kirijo had let her measure her. That she had clients. That the fabric lady had laughed. That she'd found the best pair of tights in this entire country, finally, at the very back of a drugstore, on the bottom shelf, in January." },
      { n: "The ducks went on paddling. On the far bank a man walking a very small dog stopped, and looked across at them, and Solar was almost sure it was the same man and the same dog, and that both of them recognized her." },
      { s: 'hyein', f: 'happy', t: "Your turn. Good things. Go." },
      { choose: [
        { t: "(Yell that she's being annoying.)", notes: 3, then: [
          { n: "She yelled it, *Hyein, you're being so annoying,* at the top of her voice, at a river in a city on the other side of the world from the first time she'd said it, and Hyein made a noise like she'd been punched in the stomach by something wonderful and grabbed the railing with both hands." },
          { s: 'hyein', f: 'sad', t: "That's cheating. That's cheating. You can't yell my name at a river. Now the river knows. Now the ducks know." }
        ] },
        { t: "(Yell that the coat is warm.)", notes: 3, then: [
          { n: "She yelled it. *The coat is warm.* It sounded stupid and small in all that open cold air, four words, and Hyein went completely silent beside her, and then put her face in her own scarf, and stayed there, and said, from inside the scarf, that it was the best review she'd ever gotten." }
        ] },
        { t: "(Yell everyone's names. All of them.)", notes: 3, then: [
          { n: "She yelled all of them. Hanni. Hyein. Minji. Every name she'd learned since September and every name she'd had since April, S.E.E.S. and searchers and a dog, in no order, as loud as she could, and somewhere around Koromaru Hyein started yelling them with her, and they ran out of breath at the same time on Junpei, which felt correct." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "That was good. You're good at it. You're a natural yeller. You hid it for years. You hid it under a very expensive coat your mom bought you." },
      { s: 'hyein', f: 'serious', t: "Don't hide it under mine. Mine's for wearing loud." },
      { n: "On the way back up the path she didn't hold Solar's hand and swing it, the way she had in October. She just walked very close, close enough that their sleeves touched every step, the velvet collar against the wool, and talked about nine things again, and Solar let her." }
    ] },

    { title: 'pins', place: 'Iwatodai Dorm · Lounge', time: 'Evening', music: 'tender', scene: [
      { n: "Hyein had decided Solar was going to learn to sew. Not much. Not properly. A button and a hem, she said, the way you'd say a fire exit and a phone number, two things every person should know where to find in the dark." },
      { n: "She'd set it up on the lounge table like a surgery, a square of scrap wool, a card of black buttons, Mitsuru's kit open with every thread in its place, and a pincushion shaped like a tomato that she had, she said, owned since high school and carried across a whole universe in her bag without knowing it, which she found very moving and Solar found very funny." },
      { s: 'hyein', f: 'serious', t: "Needle. Thread. Don't lick the thread. Okay, lick the thread. Everyone licks the thread. It's not in any book but everyone does it." },
      { n: "Solar's first button went on crooked and sideways and wouldn't come undone. Her second went on through the wrong layer and sewed the wool to the tablecloth. The third went on straight, and stayed, and Hyein picked the square of wool up and tugged the button hard, twice, like a dentist, and it held." },
      { s: 'hyein', f: 'surprised', t: "...Huh. Okay. Okay, you're good at this. Why are you good at this? You've never sewn anything in your life. You made me hem your skirts at one in the morning." },
      { choose: [
        { t: "I've watched you do it a hundred times.", notes: 3, then: [
          { s: 'hyein', f: 'sad', t: "...Yeah. I guess you have." },
          { n: "She didn't say anything else for a moment. She turned the little square of wool over in her hands, and looked at the back of the button, where the thread crossed itself four times, neat, the way she did it, exactly the way she did it." }
        ] },
        { t: "Beginner's luck.", notes: 2, then: [
          { s: 'hyein', f: 'serious', t: "There's no such thing as beginner's luck. There's just people who were secretly paying attention. You were secretly paying attention." }
        ] },
        { t: "I had a good teacher.", notes: 3, then: [
          { s: 'hyein', f: 'flustered', t: "Okay, stop. Don't. I'm holding a needle. I'm going to cry on a needle. That's dangerous." }
        ] }
      ] },
      { s: 'hyein', f: 'neutral', t: "Hems now. If a hem goes, you fold it like this, you pin it, you go in and out small, small, smaller than that, so it doesn't show from the outside. Nobody should ever know it went." },
      { s: 'hyein', f: 'neutral', t: "That's the whole thing, really. That's all I know. You make it so nobody can tell from the outside." },
      { n: "She didn't say why this, why now. She didn't have to. It sat in the room with them, polite and enormous, in the space between a girl who'd come a very long way to fix things for someone and the someone, learning to fix them herself." },
      { choose: [
        { t: "I'll still need you.", notes: 3, then: [
          { s: 'hyein', f: 'happy', t: "Obviously. You can do a button. You can't do a coat. Don't get cocky." },
          { s: 'hyein', f: 'sad', t: "...Thank you. I know that's what you meant. I heard it." }
        ] },
        { t: "(Sew a crooked little sun on the scrap of wool.)", notes: 3, stat: { proficiency: 1 }, then: [
          { n: "Solar picked up the gold thread without asking and sewed a sun on the corner of the scrap, seven rays, uneven, lopsided, the worst sun anyone had ever sewn, and held it out." },
          { s: 'hyein', f: 'neutral', t: "...It looks like someone made it." },
          { n: "She folded the square of wool in half, very carefully, and put it in the back of her sketchbook, between the pages with the four numbers on them, and closed it, and kept her hand flat on the cover." }
        ] }
      ] },
      { s: 'hyein', f: 'happy', t: "Okay. Lesson over. You passed. You're certified. I'm going to make you a little certificate. It's going to be so ugly. It's going to be the ugliest award ever made." },
      { s: 'hyein', f: 'neutral', t: "That's how you know it's real." }
    ] }
  ]
});
