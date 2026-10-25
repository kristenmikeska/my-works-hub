/* Late nights with the canon romances (2026-10-21): FEMC_GAME_LINK_EXTRAS[link].lateNights (format: core.js lateNightDue).
   Haechan's are his own hangouts (links/haechan.js). Housing (data/living-world.js FEMC_GAME_LODGING): Akihiko lives in the
   dorm, so his are 'dorm' nights; Jungwon and Jihoon live at the guesthouse by the station, so theirs are visits that end
   tonight (the gate, the walk back) or calls. They vary by day (after a night in Tartarus, a quiet night) and by stage (rank;
   `route: 'romance'` only after the romance turn). Romance stays non-explicit. Each plays once.
   aki-ln-landing (he walks past her door, not knocking) skips a save where he already knocked (spice-akihiko.js sets
   'sp-aki-curfew'). */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const add = (id, list) => { (X[id] ||= {}).lateNights = [...((X[id] || {}).lateNights || []), ...list]; };

  add('akihiko', [
    { id: 'aki-ln-ice', kind: 'dorm', rank: 3, after: '5/11', until: '7/20', when: 'tartarus', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'night', scene: [
      { n: "One in the morning, back from the tower, and she couldn't sleep with her shoulder doing what it was doing, so she went down for ice, and he was already at the freezer with two bags of frozen peas, one in each hand, as if he'd been waiting for her to come down and decide which." },
      { s: 'akihiko', f: 'neutral', t: "Left shoulder. You dropped your guard on that side on the ninth floor. I saw it go." },
      { s: 'akihiko', f: 'neutral', t: "Sit. Peas, ten minutes. Then you show me your hands." },
      { choose: [
        { t: "(Sit. Hold out your hands.)", notes: 2, then: [
          { n: "He turned her hands over under the kitchen light, knuckles up, the way a trainer checks a fighter's hands after a round. A split on the right middle one. He cleaned it with the first-aid kit from under the sink and taped it, two neat turns, and his fingers were very careful and very warm, and he didn't say anything the whole time, and neither did she." }
        ] },
        { t: "You dropped yours on the ninth floor too.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: "...Did I?" },
          { s: 'solar', f: 'neutral', t: "Right side. When Junpei went down." },
          { n: "He was quiet for a second. Then he took the second bag of peas and put it on his own right shoulder and sat down across the table from her, and they iced their matching mistakes in the dark kitchen like two people at a very strange bar, and he laughed, eventually, at nothing, low." }
        ] }
      ] }
    ] },
    { id: 'aki-ln-summer-roof', kind: 'dorm', rank: 5, after: '7/24', until: '8/31', when: 'quiet', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'night', scene: [
      { n: "Too hot to sleep. The whole building was too hot to sleep, and she went up to the roof at one where it was a little less hot, and found him lying flat on his back on the concrete in a T-shirt with his arms out, like a man who'd fallen from a height and decided to stay." },
      { s: 'akihiko', f: 'neutral', t: "The concrete holds the cold from the night before. For about an hour. Then it's gone. Lie down. You'll see." },
      { choose: [
        { t: "(Lie down next to him.)", notes: 2, then: [
          { n: "She lay down. He was right. The concrete was cool under her shoulder blades, and the sky was dark orange over the city and black over the bay, and a plane went over, blinking, and he said *that's eleven*, and she said *you're counting planes?*, and he said *I'm counting planes*, and she counted with him, until thirty, until the concrete was warm again, until she was asleep, and woke at four with his folded towel under her head and him gone for his run." }
        ] },
        { t: "Can't sleep either?", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Never can, in August. Something about August." },
          { n: "He didn't say what. She didn't ask. She sat with her back against the water tank and he lay on the concrete and they listened to the cicadas go on into the dark, which they did, all night, as if they'd been paid to." }
        ] }
      ] }
    ] },
    { id: 'aki-ln-october', kind: 'dorm', rank: 8, after: '10/11', until: '10/31', place: 'Iwatodai Dorm · Lounge', time: 'Night · 2 AM', music: 'tender', scene: [
      { n: "The television in the lounge was on with nothing on it, the late-night static of a channel that had signed off, and its light was the only light in the room, gray and moving over the walls. He was on the sofa in his coat. He'd been to the hospital. She could tell from the coat, and from the visitor's sticker still on the lapel, and from the way he was sitting, with his elbows on his knees and his hands hanging, exactly the way he'd sat on the roof in August." },
      { s: 'akihiko', f: 'sad', t: "...You're up." },
      { s: 'akihiko', f: 'sad-2', t: "I keep thinking if I sit here long enough the phone'll ring. Stupid. Nobody's going to call at two in the morning to say anything good." },
      { choose: [
        { t: "(Sit down next to him. Don't say anything.)", notes: 2, then: [
          { n: "She sat. After a while his shoulder came to rest against hers, the whole weight of it, the way a building leans after an earthquake, slowly, and stays leaned. He fell asleep like that, sitting up, in his coat, around three. She didn't move. She turned the television off with her foot, which took four tries, and sat in the dark holding still for him until the windows went gray." }
        ] },
        { t: "(Get the blanket from the hall cupboard.)", notes: 2, then: [
          { n: "She put it over him, coat and all. He looked down at it like he didn't know where it had come from. Then he pulled one end of it over her too, without looking at her, and they sat under it and watched the static, and he said, once, very quietly, that Shinji would've told him he was being an idiot, and she said she'd tell him for Shinji, and he laughed, wet, and said *okay*." }
        ] }
      ] }
    ] },
    { id: 'aki-ln-friend', kind: 'dorm', rank: 9, route: 'friend', after: '11/3', until: '12/20', when: 'quiet', place: 'Iwatodai Dorm · Kitchen', time: 'Late Night', music: 'night', scene: [
      { n: "One in the morning and the blender was going, because nobody had ever won that argument since the summer and nobody was left in the house who'd fight it the way it used to be fought. He switched it off when she came in and poured her half without asking, as if it had always been for two." },
      { s: 'akihiko', f: 'neutral', t: "Chocolate. The pink one was gone. Junpei." },
      { s: 'akihiko', f: 'neutral', t: "Hey. Thanks. For what you said. At the club. It was the right answer. I needed somebody to give me the right answer for once instead of the one I wanted." },
      { choose: [
        { t: "You're my best friend. That's not a consolation prize.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "...I know. That's what I'm saying. I know." },
          { n: "He tapped his glass against hers. They drank the terrible chocolate shake standing at the counter in the dark, and he told her about a first-year who'd landed his first clean right hook that afternoon, at length, with demonstrations, and she let him, and it was the best part of her day." }
        ] },
        { t: "(Drink the shake. Make a face.)", notes: 1, then: [
          { n: "She made a face. He made the same one, at the same time, without meaning to, and they both saw it, and laughed so hard he had to put the glass down, and somebody upstairs banged on the floor, and they stood in the dark kitchen trying to stop, and failing, like they were twelve." }
        ] }
      ] }
    ] },
    { id: 'aki-ln-landing', kind: 'dorm', rank: 9, route: 'romance', after: '11/3', until: '12/20', when: 'quiet', noFlags: ['sp-aki-curfew'], place: 'Iwatodai Dorm · 2F Hallway', time: 'Late Night', music: 'romance', scene: [
      { n: "Midnight, and the hallway light on the landing had been flickering for a week and nobody had changed it, and he was standing under it at her door with his hand up to knock and not knocking, like a man who'd walked up the stairs on purpose and only just realized where he was." },
      { s: 'akihiko', f: 'blushing', t: "...I wasn't going to knock. I was just. Checking. That you were back. From wherever." },
      { s: 'solar', f: 'happy', t: "I live here, senpai." },
      { s: 'akihiko', f: 'blushing', t: "I know you live here. I know where you live. That's the problem. I keep walking past it." },
      { choose: [
        { t: "(Step out. Put your forehead against his chest.)", notes: 2, then: [
          { n: "She stepped out into the hallway in her socks and leaned her forehead on his chest, just that, and felt him stop breathing, and then start again, carefully, and his hand came up to the back of her head and stayed there, warm, the way it had stayed on the back of her coat on the roof." },
          { s: 'akihiko', f: 'neutral', t: "...Five. Tomorrow. I'll be out front." },
          { s: 'solar', f: 'flustered', t: "I know." },
          { n: "He went up the stairs to his floor slowly, looking back once from the turn. She stood under the flickering light until his door closed, and then a while longer, for no reason, and then went in and lay awake until four, smiling at the ceiling like an idiot." }
        ] },
        { t: "Goodnight, Akihiko.", notes: 2, then: [
          { n: "Just his name, nothing in front of it, in the dark hallway at midnight. He heard it. She watched him hear it, his whole face going still in the bad light and then going red, all the way to the ears, and he said goodnight back, her name, quietly, like it was a thing he'd been practicing, and went up the stairs two at a time and missed one." }
        ] }
      ] }
    ] },
    { id: 'aki-ln-snow', kind: 'dorm', rank: 9, route: 'romance', after: '12/26', until: '3/5', flag: 'year-goes-on', place: 'Iwatodai Dorm · Rooftop', time: 'Late Night', music: 'romance', scene: [
      { n: "It had snowed in the afternoon and stopped at dark, and the roof at midnight was white and untouched except for one line of footprints to the rail, big ones, and at the end of them, his back, in his coat, looking at the city under the snow like it was something he'd been asked to remember." },
      { n: "He heard her on the stairs. He didn't turn around. He opened one side of his coat instead, held it out, an invitation that didn't need to be said, and she walked the length of his footprints, in them, and stepped inside it." },
      { s: 'akihiko', f: 'neutral', t: "Whatever you decide. I meant that. I still mean it. I just wanted one more night up here first. With you in it." },
      { choose: [
        { t: "(Stay inside the coat. Don't say anything.)", notes: 2, then: [
          { n: "She stayed. The coat smelled of cold air and the gym and him. The snow on the rail didn't move. Below them a train crossed the bay all lit up, and he rested his chin on the top of her head, and they watched it go all the way across, and neither of them said a single word until it was gone, and after." }
        ] },
        { t: "One more night. And then another one after that.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "...That's not how one more works." },
          { s: 'solar', f: 'happy', t: "It's how I'm doing it." },
          { n: "He laughed into her hair, quietly, so the roof wouldn't hear, and pulled the coat tighter round both of them, and said fine, then, another one, and another one after that, and they stood there in the snow being two people who weren't doing the math." }
        ] }
      ] }
    ] }
  ]);

  add('jungwon', [
    { id: 'jw-ln-gate', kind: 'visit', rank: 2, after: '10/24', until: '11/25', when: 'quiet', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { n: "Tutoring had run long. It always ran long. It ran until Mitsuru appeared in the dining room doorway in her robe at ten fifty-five and said *Yang-san* in a tone that was not a question, and he stood up at once, and capped his pen, and bowed to her, and to the workbook, very nearly, and to Solar, and gathered his things." },
      { n: "She walked him to the gate. He tried to stop her at the door and then at the steps and then at the bottom of the path, each time with a smaller bow, and she kept walking, and at the gate he gave up." },
      { s: 'jungwon', f: 'neutral', t: "You'll be cold. You're in your socks. Go back inside. I can find a station. I found a different world." },
      { choose: [
        { t: "Text me when you're back.", notes: 2, then: [
          { s: 'jungwon', f: 'neutral', t: "...Yes. I'll text you when I'm back." },
          { n: "He went down the road toward the station in his navy blazer with his hands at his sides, very straight, and at the corner he turned around and bowed, once, from the street, a full proper bow to the girl in socks at the gate, and then went around the corner, and twenty-two minutes later her phone lit up on her pillow. *back. go to sleep.*" }
        ] },
        { t: "(Wait at the gate until he turns the corner.)", notes: 2, then: [
          { n: "She waited. He knew she was waiting; she could tell by the way he walked, carefully, like someone being watched by a teacher, and at the corner he stopped, and stood, and didn't turn around, and then lifted one hand over his shoulder without looking back, the way you'd tell somebody across a platform that you'd seen them, and was gone." }
        ] }
      ] }
    ] },
    { id: 'jw-ln-call', kind: 'call', rank: 4, after: '11/7', until: '12/12', when: 'quiet', place: "Iwatodai Dorm · Solar's Room", time: 'Night · 12 AM', music: 'night', scene: [
      { n: "Her phone rang at midnight. Not a text. A call. Nobody here called. She looked at the name for two full rings before she picked up." },
      { s: 'jungwon', f: 'flustered', t: "I'm sorry. It's late. I found an error. On your worksheet. Question nine. I corrected it wrong. I couldn't sleep knowing I'd corrected it wrong." },
      { n: "His voice down the line was very quiet, the guesthouse voice, the voice of someone in a room with thin walls, and behind it she could hear the trains going into the depot by the station, one and then another, slow." },
      { choose: [
        { t: "Read me the right answer, then.", notes: 2, then: [
          { n: "He read it to her. All of it, step by step, the way he did at the table, and she wrote it in the margin in the dark by the light of the phone, and when he was done neither of them hung up. He said, after a while, that the trains here were very punctual. She said she knew. They listened to two more. Then he said goodnight, formally, in full, and she said it back, and neither of them hung up for another minute, and then he did, and she lay there with the warm phone on her chest." }
        ] },
        { t: "Jungwon. Did you eat dinner?", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "...That's not relevant to question nine." },
          { s: 'solar', f: 'neutral', t: "Did you?" },
          { s: 'jungwon', f: 'neutral', t: "No." },
          { n: "She stayed on the line while he went down to the guesthouse kitchen, which the polite woman locked at nine, and found it locked, and went to the vending machine in the lobby instead, and bought a rice ball and ate it on the stairs while she listened to him eat it, and asked him what flavor, and he said salmon, and said it like a confession." }
        ] }
      ] }
    ] },
    { id: 'jw-ln-halfway', kind: 'visit', rank: 6, after: '11/21', until: '12/20', place: 'Iwatodai · Riverside', time: 'Late Night', music: 'night', scene: [
      { n: "She walked him halfway. That was the arrangement now, unspoken. Out of the dorm at curfew, down the hill, along the river to the bridge, where the lamp flickered and the guesthouse lights showed on the far side, and there he would stop and send her back, and she would go, and he would watch her go, and then he would go." },
      { n: "Tonight he stopped at the bridge and didn't send her back. He stood with his hand around the watch on his wrist, the one that had stopped, and looked at the water." },
      { s: 'jungwon', f: 'sad', t: "At home it's still the night before the exams. It's been the night before for six weeks. I keep thinking I'll walk into the morning and it'll all be waiting." },
      { s: 'jungwon', f: 'neutral', t: "I'm not in a hurry. I wanted you to know that. I'm not in any hurry at all." },
      { choose: [
        { t: "(Walk him the rest of the way.)", notes: 2, then: [
          { n: "She walked him the rest of the way, which broke the arrangement, and he let her, which broke it worse. At the guesthouse door he bowed, and then didn't go in, and walked her all the way back to the bridge, and then she walked him back to the guesthouse, and they did this twice before either of them noticed and stopped, laughing, him into his hand, in the middle of the road at midnight." }
        ] },
        { t: "Then don't hurry. Stay here a minute.", notes: 2, then: [
          { n: "They stood on the bridge a minute. Then ten. The lamp flickered. The river went on underneath them, black and slow. He didn't say anything else, and didn't need to, and when she finally turned back toward the dorm he said her name, very quietly, and very nearly a surname after it, and stopped himself, and said goodnight." }
        ] }
      ] }
    ] },
    { id: 'jw-ln-streetlight', kind: 'visit', rank: 8, route: 'romance', after: '12/10', until: '3/5', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'romance', scene: [
      { phone: [
        { from: 'jungwon', t: "i'm outside." },
        { from: 'jungwon', t: "not to come in. it's past curfew. i'm aware." },
        { from: 'jungwon', t: 'to say goodnight in person. that’s all. you can say no.' }
      ], contact: 'Jungwon' },
      { n: "He was under the streetlight at the bottom of the path in his coat with his hands in his pockets, and his breath going up white, and he didn't come any closer when she came down the steps. He waited for her to decide how close. That was the thing about him. He always waited for her to decide." },
      { s: 'jungwon', f: 'flustered', t: "Goodnight. That's what I came to say. I've said it. I'm going to go." },
      { choose: [
        { t: "(Put your forehead against his.)", notes: 2, then: [
          { n: "She stepped in and put her forehead against his. He went completely still, the way he did when he was actually pleased, the way she'd learned to read, and then, very slowly, as if asking permission with every millimeter, his hands came out of his pockets and found hers, and held them, cold, between them." },
          { s: 'jungwon', f: 'neutral', t: "...Goodnight." },
          { n: "He said it a third time at the corner, without turning around, loud enough to carry. It carried." }
        ] },
        { t: "Say it again. Slower.", notes: 2, then: [
          { s: 'jungwon', f: 'flustered', t: "...Goodnight, Solar." },
          { n: "Slower. Formal. Every syllable set down like something he'd carried a long way and was putting in her hands. Then the dimples, helpless, and he bowed, and fled, and walked into the gatepost, and said *I'm fine* to the gatepost, and she laughed so hard on the steps that Mitsuru's window opened." }
        ] }
      ] }
    ] }
  ]);

  add('jihoon', [
    { id: 'jh-ln-steps', kind: 'visit', rank: 2, after: '9/28', until: '10/31', when: 'quiet', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { phone: [{ from: 'jihoon', t: 'come outside' }, { from: 'jihoon', t: 'dont ask why. Just Come' }], contact: 'Jihoon' },
      { n: "He was on the dorm steps at eleven with a tub of ice cream and two spoons and his hood up, as if the ice cream were contraband and the hood were a disguise, and he held a spoon up without looking at her when the door opened." },
      { s: 'jihoon', f: 'neutral', t: "The ritual. Don't make it a thing. I bring it, you eat it, I insult you, I go home. That's how it works. That's how it's always worked." },
      { choose: [
        { t: "Okay. Insult me.", notes: 2, then: [
          { s: 'jihoon', f: 'happy', t: "Your pajamas have ducks on them. You're eighteen. Ducks, Sol." },
          { n: "They ate half the tub on the cold steps, him insulting her pajamas and her hair and the way she held a spoon, all of it in exactly the voice you'd use to say something else entirely, and at midnight he stood up and stretched and said that was the ritual, it was complete, and walked off down the hill toward the station with the tub under his arm, and didn't look back, and walked into the mailbox." }
        ] },
        { t: "(Eat it without saying anything. Lean on his shoulder.)", notes: 2, then: [
          { n: "She leaned. He went rigid. Then, very slowly, like a man moving near a sleeping animal, he relaxed, and took another spoonful, and didn't say anything for the rest of the tub, which was the longest Park Jihoon had been silent in her presence in any life, and they both knew it, and neither of them said so." }
        ] }
      ] }
    ] },
    { id: 'jh-ln-call', kind: 'call', rank: 4, after: '10/12', until: '11/15', when: 'quiet', place: "Iwatodai Dorm · Solar's Room", time: 'Night · 12 AM', music: 'night', scene: [
      { n: "Her phone rang at midnight. The name on it was *jihoney*, which she had not typed, and which had been in her phone when she checked it this morning, and which she was choosing not to investigate." },
      { s: 'jihoon', f: 'serious', t: "Sol. Emergency. Grave emergency. The guesthouse is too quiet. I can hear Asahi blinking. I'm going to die." },
      { choose: [
        { t: "(Talk to him until he falls asleep.)", notes: 2, then: [
          { n: "She talked. About nothing. The monorail, the vending machine, a teacher in a samurai helmet. He interrupted every third sentence to say that was boring, and then asked a follow-up question, and then, around twelve-forty, stopped interrupting, and then stopped answering, and then, unmistakably, started to snore." },
          { n: "She listened to it for a while. It was very loud and very familiar and she didn't know why. She whispered goodnight into it, and hung up, and in the morning there was a text, sent at 4 AM. *u hung up on me. #brocken. ty*" }
        ] },
        { t: "Go to sleep, Park Jihoon.", notes: 1, then: [
          { s: 'jihoon', f: 'happy', t: "FULL name. She full-named me. I'm going. I'm going. I'm already asleep. I'm dreaming about you being mean to me. Goodnight." },
          { n: "He hung up. Twelve seconds later he called back to say goodnight properly. Then he hung up again." }
        ] }
      ] }
    ] },
    { id: 'jh-ln-window', kind: 'visit', rank: 6, after: '11/2', events: ['a4-crew'], until: '11/30', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'night', scene: [
      { n: "Something hit her window. Then something else. Small. A pebble, then another, and she opened the curtain on a tall boy in a hoodie on the pavement below, holding up a sheet of poster board over his head with both arms." },
      { n: "It said, in Junkyu's highlighters, in enormous bubble letters, *U PASSED UR CHEM QUIZ. I CHECKED. THROUGH HANNI.*" },
      { phone: [{ from: 'jihoon', t: 'Congratulations On Being Smart. Once' }, { from: 'jihoon', t: 'curfew is in 4 minutes. i Must Flee' }], contact: 'Jihoon' },
      { choose: [
        { t: "(Open the window. Shout thank you.)", notes: 2, then: [
          { n: "She shouted it. Down the street a dog started barking. On the fourth floor another window opened, and Mitsuru's voice said *Park-san* into the night with tremendous calm, and Jihoon bowed to the fourth floor with the poster board still over his head and ran, in the dark, holding it like a sail, all the way down the hill." }
        ] },
        { t: "(Take a photo of him. Blackmail.)", notes: 2, then: [
          { n: "She took the photo. He saw her take it. He struck a pose, a terrible one, one leg up, the poster held like a trophy, and then the porch light came on, and he fled, and in the morning the photo was her phone's lock screen, and she couldn't remember setting it, and didn't change it." }
        ] }
      ] }
    ] },
    { id: 'jh-ln-romance', kind: 'visit', rank: 8, route: 'romance', after: '11/22', until: '3/5', place: 'Iwatodai Dorm · Front', time: 'Late Night', music: 'romance', scene: [
      { n: "He walked her back from the arcade at ten to eleven, which was ten minutes before curfew and therefore, by his math, the latest it was legally possible to keep her, and stopped at the bottom of the dorm steps, and didn't let go of her hand, which he'd been holding since the station and pretending he wasn't." },
      { s: 'jihoon', f: 'neutral', t: "I'm not doing a bit. Just so you know. I'm standing here not doing a bit. It's very hard. My whole body wants to do a bit." },
      { s: 'jihoon', f: 'serious', t: "It's not a bit, Sol. None of it was ever a bit. I'm just going to keep saying it now. Quietly. Like a normal person. It's going to be horrible." },
      { choose: [
        { t: "Say it again, then. Quietly.", notes: 2, then: [
          { n: "He said it again, quietly. Just her name, the short one, and the thing after it, and his ears went red under the hood, and he looked absolutely furious about it, and she laughed, and he said *see, horrible*, and she kissed his cheek before he could do a bit about it, and he stood there at the bottom of the steps with his hand on his face while she went in, and was still standing there when she looked out of her window ten minutes later." }
        ] },
        { t: "(Squeeze his hand. Go in without saying anything.)", notes: 2, then: [
          { n: "She squeezed it, once, hard, the way you'd squeeze someone's hand under a table, and let go, and went up the steps. At the top she looked back. He was looking at his hand as if she'd left something in it. Then he put it in his pocket, carefully, the whole hand, like he was saving it, and walked home." }
        ] }
      ] }
    ] }
  ]);
})();
