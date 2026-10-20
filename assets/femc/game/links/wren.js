/* Wren · Jester. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Story link: rank dates are fixed. reversible: choices marked reverse: 1 count toward a reversal.
   Cast-only speaker: porter (no portrait, used before she gives her name). No phone, so invite is null.
   All ten ranks are story ranks that play on their dates (forced). Ranks 7, 8 and 10 carry `gate` (memory fragments the
   plot doc wants first; the engine doesn't read per-rank gates yet). `repair` holds Wren's own make-up scenes for a reversed
   link (the engine still plays its generic repair line; see the report). The 12/21 rank leads into the solstice event in
   data/story-act5.js, which asks the question again if this rank was missed. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'wren', name: 'Wren', short: 'Wren', arcana: 'Jester', numeral: '0', from: '???',
  kind: 'frame',
  storyOnly: true,
  romance: null,
  starts: '4/16',
  reversible: true,
  forced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  home: { area: 'Iwatodai Station', spot: 'Bench', slot: 'evening', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Evenings, any day, on the last bench at Iwatodai Station.' },
  approach: "There's a girl in a porter's coat on the last bench at Iwatodai Station, watching the trains come and go without getting on any of them.",
  cast: { porter: "Girl in a Porter's Coat" },
  invite: null,
  hangouts: [
    [
      { n: "The evening rush had thinned to the stragglers, salarymen with their ties loosened and students with their bags dragging, and the platform lights had come on one by one in that hesitant way they had, as if each one were checking the others were going first. Wren had invented a game." },
      { s: 'wren', f: 'happy', t: "That man. The one with the umbrella and no rain. He's going home to tell his wife he's been promoted, and he hasn't been, and she's going to know, and she's going to let him have it anyway." },
      { s: 'wren', f: 'happy', t: "Your turn. The girl with the cake box." },
      { choose: [
        { t: "It's her own birthday cake. She bought it herself. She's going to eat the whole thing on the train.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Oh, good for her. Good for her! I hope it's chocolate. I hope there's writing on it." },
          { n: "The girl with the cake box got on the 8:10 and sat down very carefully with it on her knees, and Wren watched her go with her whole face, like she was seeing someone off." }
        ] },
        { t: "She's delivering it to a rival. It's poisoned.", notes: 2, then: [
          { s: 'wren', f: 'flustered', t: "Solar! She looks so nice!" },
          { s: 'wren', f: 'happy', t: "...Which is exactly what a poisoner would want. Oh, you're good at this." }
        ] },
        { t: "It's just a cake, Wren.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "Nothing's just a cake. Somebody chose it." }
        ] }
      ] },
      { n: "They did eleven more people. Wren's were all kind and Solar's were all slightly criminal, and by the end Wren was laughing into the collar of her coat so she wouldn't be too loud, which on an almost empty platform was a lost cause." }
    ],
    [
      { n: "It was a soft evening, mild and still, the sky over the tracks going the deep clean blue it only went for about ten minutes a night, and Wren asked, the way she always eventually asked, what Solar had done today." },
      { s: 'wren', f: 'neutral', t: "All of it. Start at the beginning. Don't skip the boring parts. I like the boring parts best." },
      { choose: [
        { t: "(Tell her all of it, including the pudding incident.)", notes: 3, then: [
          { n: "So Solar told her. The run at five. The quiz she'd guessed on. Junpei's pudding, which had gone missing from the dorm fridge, and the full inquiry Junpei had conducted in the lounge, and the fact that Solar had eaten it, and the fact that she hadn't confessed and wasn't going to." },
          { s: 'wren', f: 'happy', t: "You didn't. You absolutely did. Oh, he's going to find out. He's going to find out and it's going to be the worst day of his life." },
          { s: 'wren', f: 'happy', t: "That was a very good day. Thank you for bringing it." }
        ] },
        { t: "Nothing happened. School, mostly.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "That's not nothing. That's a whole school." },
          { n: "She made Solar tell her about it anyway, period by period, and asked what everyone had for lunch." }
        ] },
        { t: "You first. What did you do today?", notes: 2, then: [
          { s: 'wren', f: 'flustered', t: "Oh. Sat here, mostly. I watched a pigeon try to get on a train. It nearly managed." },
          { s: 'wren', f: 'happy', t: "Now you. You've got far more in your day than I've got in mine." }
        ] }
      ] },
      { n: "The blue went out of the sky the way it always did, quickly and all at once, and the platform lights took over. Wren pulled her sleeves down over her hands and settled back on the bench, looking pleased in a quiet, private way, like someone who'd been handed something warm to hold." }
    ],
    [
      { n: "The trains were running late, a signal fault somewhere down the line, and the platform had filled up with people looking at their watches in the particular way that doesn't make anything faster. Wren was delighted. Late trains, she said, were the best kind, because everyone had to stand still together and nobody could pretend they had anywhere better to be." },
      { s: 'wren', f: 'happy', t: "Count with me. How many people are going to sigh before it comes? I say forty." },
      { choose: [
        { t: "Fifty. That man in the gray suit alone is good for ten.", notes: 3, then: [
          { n: "He did eleven. Wren counted every one of them under her breath with her eyes shining, and when the train finally came and he got on it with a sigh so enormous it fogged the window, she had to put her whole face in her collar." }
        ] },
        { t: "You're terrible.", notes: 2, then: [
          { s: 'wren', f: 'happy', t: "I'm a porter. We're allowed. It's in the handbook." }
        ] },
        { t: "Why do you count everything?", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "Do I? I suppose I do. It makes things stay put. If you know how many there are, you'll know if one goes missing." },
          { n: "She said it like it was obvious. Solar, who had counted four exits on the way up the stairs, didn't argue." }
        ] }
      ] },
      { n: "Thirty-eight, in the end. Wren made her shake on it, very formally, with one sleeve-covered hand, and declared it a draw." }
    ],
    [
      { n: "It was raining, the soft kind that hangs in the light around the lamps, and Wren had a paper cup of something from the machine that she wasn't drinking, only holding, the way she held everything, with both hands, like it might get away." },
      { s: 'wren', f: 'neutral', t: "Tell me one thing that happened today that you haven't told anybody else. It doesn't have to be important. It's better if it isn't." },
      { choose: [
        { t: "(Tell her about the cat that sat on your desk through all of third period.)", notes: 3, then: [
          { n: "It had come in through the window and sat on her open textbook like it was paying tuition, and the teacher had looked at it and looked at her and decided, visibly, that it was not worth the conversation. Wren laughed until she had to set the cup down." },
          { s: 'wren', f: 'happy', t: "Now it's mine too. Thank you. I'll keep it somewhere safe." }
        ] },
        { t: "(Tell her you hummed the song in the shower and someone hummed back through the wall.)", notes: 2, then: [
          { s: 'wren', f: 'surprised', t: "Who?" },
          { s: 'solar', f: 'neutral', t: "I don't know. Nobody owned up." },
          { n: "Wren looked at her for a long moment, and then down at her cup, and said that it must have been a nice someone, to know the tune, and didn't ask anything else." }
        ] },
        { t: "Nothing happened today.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "Something always happens. You just didn't catch it. Next time catch one for me." }
        ] }
      ] },
      { n: "The rain kept on. Somewhere down the line a train sounded its ordinary horn, short and bright, and Wren listened to it go with her head tilted, the way you'd listen to a stranger's voice to check it wasn't someone you knew." }
    ]
  ],
  // Reversal: Wren's own make-up scenes, one picked per repair (the engine plays its generic repair line until it reads these).
  repair: [
    [
      { music: 'tender' },
      { n: "Wren was on the bench. She saw Solar at the top of the stairs and looked away, at the tracks, the way you look away from someone across a room when you're not sure yet if you're speaking." },
      { n: "Solar sat down at the far end. Not close. She'd brought two cans of hot milk tea from the machine, and she put one on the bench halfway between them, on the slats, and left it there, and drank her own, and didn't say anything for one whole train." },
      { n: "On the second train Wren picked up the can and held it in both sleeves, not opening it, just holding it for the warmth." },
      { choose: [
        { t: "I'm sorry. I pushed. I do that when I'm scared.", notes: 3, then: [
          { s: 'wren', f: 'sad', t: "...I know. So do I. I just do it the other way. I go very small, and you go very loud." },
          { s: 'wren', f: 'neutral', t: "We're a terrible pair. Sit closer. The tea's getting cold." }
        ] },
        { t: "(Just stay.)", notes: 3, then: [
          { n: "She stayed. Three trains. Four. On the fifth Wren slid along the bench, a few centimeters at a time, as if the bench were moving and not her, until their shoulders were touching, and then she let out a breath that seemed to go on for a long time." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "Next time. Same bench?" },
      { n: "It was the nicest thing anyone had said to Solar all week." }
    ],
    [
      { music: 'tender' },
      { n: "It took Solar three evenings to find her. Not on the bench. On the footbridge over the tracks, at the very middle, with her elbows on the rail and her cap pulled down, watching the trains go underneath her like somebody watching fish in a river." },
      { s: 'wren', f: 'sad', t: "I didn't think you'd look up here. Nobody looks up." },
      { s: 'solar', f: 'neutral', t: "I looked everywhere." },
      { s: 'wren', f: 'surprised', t: "...Everywhere?" },
      { n: "Solar told her. The bench, the far end of the platform, the photo booth, the ticket office, the vending machines on the other side, the taxi stand, the stairs down to the underpass. Three evenings. She'd counted. Wren listened to the whole list with her face doing something very complicated under the brim of her cap." },
      { s: 'wren', f: 'happy', t: "Nobody's ever looked for me before. I didn't know it felt like this. It's awful. It's lovely." },
      { choose: [
        { t: "I'll always look.", notes: 3, then: [
          { s: 'wren', f: 'neutral', t: "Don't say always. Say until you stop. It's more honest." },
          { s: 'wren', f: 'happy', t: "...But thank you for saying always." }
        ] },
        { t: "Come back down. It's cold.", notes: 2, then: [
          { n: "She came. On the stairs she took Solar's sleeve, just the end of it, between two fingers, like a child crossing a road." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '4/16', title: '1: the last train', place: 'Iwatodai Station · Bench', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "Solar had gone to the station because she didn't want to go back to the dorm yet, which she didn't examine. It was a Thursday, ten days into a life that still felt like a coat she'd borrowed off a hook, and the evening had come in cool and damp off the water. The cherry blossoms were long since knocked off the trees and trodden into a pale brown paste along the gutters, and the platform smelled like rain that hadn't fallen yet and the hot metal breath of the trains pulling in and out." },
      { n: "She'd counted the exits on the way up the stairs. Four, if you counted the one marked staff only, which she did." },
      { n: "At the far end of the platform, on the last bench, past the vending machines and the timetable board and the yellow line nobody was supposed to stand past, a girl was sitting very straight with something held in both hands against her chest." },
      { n: "She was small inside a navy coat that was much too big for her, heavy wool with brass buttons, the collar turned up against her jaw and the sleeves swallowing her hands to the knuckles, and a porter's cap pulled so low that all Solar could see of her face was a mouth and a chin. Between her fingers was a ticket, thick cream card, with a little scrap of pink ribbon tied through one corner." },
      { n: "Solar's whole body stopped before she'd decided anything at all." },
      { n: "The corridor. The green. A girl at the far end where it bent, in a coat like that, holding something like that, sorry that Solar was awake." },
      { n: "A train came in and sighed open, and people got off and people got on, and the girl on the bench watched the doors the entire time with her hands tight on the ticket and didn't move, and the doors closed, and the train pulled out. She let go of a breath like she'd been holding it since the one before." },
      { choose: [
        { t: "(Sit down at the other end of the bench.)", notes: 3, then: [
          { n: "The girl glanced over, quick, from under the cap, and then shifted a polite inch further along, as if the bench were very crowded." },
          { s: 'porter', t: "Oh. Sorry. Was this yours? I've been sitting here so long I've started to think of it as mine, which is very rude of me." }
        ] },
        { t: "You missed it.", notes: 2, then: [
          { s: 'porter', t: "I know. I'm very good at it. I've missed every single one today." },
          { s: 'porter', t: "...That's a joke. Mostly." }
        ] },
        { t: "Hey. Do I know you?", notes: 1, then: [
          { n: "The girl went very still, the way a bird goes still on a branch while it decides whether you're a cat." },
          { s: 'porter', t: "I don't think so. I think I'd remember. Not many people come all the way down to this end." }
        ] }
      ] },
      { s: 'porter', t: "I'm waiting for the last train. I keep meaning to get on it. And then it comes in, and the doors open, and I think, but where does it go? And then the doors close, and I'm still sitting here." },
      { s: 'porter', t: "It's silly. I know it's silly. I'm frightened of a train." },
      { n: "Solar looked at the coat, and the cap, and the ticket, and her mouth asked before the rest of her had agreed to it." },
      { s: 'solar', f: 'serious', t: "Were you in Tartarus? About ten days ago. At night." },
      { n: "The girl turned the word over. She tried it out loud, slowly, in pieces, the way you'd try a word in a language you'd only ever seen written down." },
      { s: 'porter', t: "Tar... tarus." },
      { s: 'porter', t: "Is it a station?" },
      { n: "She asked it so simply, with so little behind it, that Solar felt the certainty go out of her like air out of a tire. A coat. A cap. A ticket. It had been dark in there, and green, and she'd just woken up on a floor with no idea who she was, and she'd seen the girl in the corridor for maybe four seconds. There were probably a thousand girls in this city in coats too big for them." },
      { choose: [
        { t: "Sort of. It's a place where trains don't go.", notes: 3, then: [
          { s: 'porter', t: "Then I'd hate it. I'd have nothing to miss." },
          { n: "It was such a quick, dry little joke that Solar laughed before she meant to, one short surprised sound, and the girl looked so pleased with herself that she had to hide it in her collar." }
        ] },
        { t: "It's a building. Never mind.", notes: 2, then: [
          { s: 'porter', t: "Oh, good. I was worried it was a station and I'd missed that one too." }
        ] },
        { t: "Don't lie to me. You were there.", notes: 0, reverse: 1, then: [
          { n: "The girl shrank down into the coat until the collar was up to her ears, and her hands closed on the ticket hard enough to bend it." },
          { s: 'porter', t: "I'm sorry. I don't know where that is. I'm sorry." },
          { n: "She said it the way people say sorry when they've been saying it their whole lives, automatically, to doors and furniture, and Solar had the sudden nasty feeling of having kicked something small." }
        ] }
      ] },
      { s: 'porter', t: "I'm being rude. You've sat through a whole train with me and I haven't even said." },
      { s: 'wren', f: 'flustered', t: "Wren. I'm Wren." },
      { register: 'wren' },
      { s: 'solar', f: 'neutral', t: "Like the bird." },
      { s: 'wren', f: 'happy', t: "Like the bird. A very small brown one that's mostly noise. That's my whole personality, really." },
      { n: "Solar told her her name. Wren repeated it under her breath, once, carefully, as if she were writing it down somewhere she meant to keep." },
      { n: "Another train came and went. In between, while they waited, Solar heard Wren murmuring something, low and steady, and it took her a moment to understand what it was. She was counting the benches. Down the platform, every one of them, all the way to the stairs, and when she got to the end she started again from the near one, the way you'd go over something to make sure it was all still there. She didn't seem to know she was doing it. Solar, who had counted four exits on the way up, didn't say anything." },
      { s: 'wren', f: 'neutral', t: "Can I ask you something odd?" },
      { s: 'wren', f: 'sad', t: "What happens to people who stay somewhere they don't belong?" },
      { choose: [
        { t: "I think they start to belong. Slowly.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Slowly. Yes. I'd like slowly." },
          { n: "She didn't sound convinced. She sounded like someone trying a word on to see if it fit." }
        ] },
        { t: "I'll let you know when I find out.", notes: 2, then: [
          { s: 'wren', f: 'surprised', t: "Oh. You too?" },
          { s: 'wren', f: 'happy', t: "Then we're both new. That's a comfort, actually. Isn't that awful? It's a comfort." }
        ] },
        { t: "You're being silly. Just get on the train.", notes: 0, reverse: 1, then: [
          { s: 'wren', f: 'sad', t: "...Yes. I know. I am." },
          { n: "She smiled at the tracks, and pulled her sleeves down over her hands, and didn't say anything else for a long time, and Solar had the uncomfortable feeling of having shut a door on somebody's fingers." }
        ] }
      ] },
      { n: "It got later. The commuters thinned out and the wind picked up, damp and smelling of the bay, and the moths found the platform lights. Wren told her she should go home before people wondered where she was, and then said, a little shyly, that it must be nice, having people who wondered." },
      { n: "At the top of the stairs Solar looked back. Wren was still on the last bench with the ticket held against her chest, small and very straight in the big coat, watching the dark where the tracks went. She lifted one sleeve-covered hand in a tiny wave without turning her head, as if she'd known Solar would look." },
      { n: "Solar went home. She didn't tell anyone. It still felt like the girl's to tell, and anyway, she'd deal with it tomorrow." }
    ] },

    { after: '5/30', title: '2: remembering forward', place: 'Iwatodai Station · Bench', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "It had been raining since lunch, the soft, fine, endless kind that the weather report kept calling the early edge of the rainy season, as if the season were a cliff and the whole city was standing on it, and the station roof drummed with it and the gutters ran with it and every train that pulled in came out of the dark wearing it in long silver streaks down the windows." },
      { n: "Wren was on the bench. Wren was always on the bench. Solar had stopped asking whether she'd missed the last train, because the answer was always yes, and Wren always looked so apologetic about it, like it was a bad habit she was trying very hard to quit." },
      { n: "It had been a strange couple of weeks. Things kept arriving in Solar already finished, the way a song is already finished when you walk in halfway through it, a smell, a taste, a word that turned up in her fingers before she'd thought of it, small and stupid and much too familiar, and she hadn't told anyone, because she couldn't think of a way to say it that didn't sound like she'd hit her head." },
      { n: "She sat down. She didn't notice she was humming until she was most of the way through it, the low unfinished thing that lived in her mouth, the one with no words, that went somewhere and then stopped." },
      { n: "She stopped where it always stopped." },
      { n: "And beside her, quietly, looking out at the rain, Wren hummed the next bar." },
      { n: "It was nearly right. It went where the song wanted to go and then took one small step off to the side, a note a little flat, a little wrong, the way you'd sing something you'd only ever heard through a wall. Then Wren stopped too, in the same place, as if that were where it ended for her as well." },
      { n: "The skin along both of Solar's arms went tight." },
      { s: 'solar', f: 'surprised', t: "Where did you learn that?" },
      { s: 'wren', f: 'surprised', t: "What do you mean? I thought you taught it to me." },
      { n: "Had she? Probably she had. Yukari said she hummed it all the time without noticing, in the kitchen, on the stairs, brushing her teeth. Probably she'd sat on this exact bench a dozen evenings humming it at the trains, and Wren had been sitting right there, and that was all, and it was nothing." },
      { choose: [
        { t: "Maybe I did. I do it without noticing.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "You do. You do it when you're thinking, and when you're tired, and once when you were reading the back of a vending machine." },
          { s: 'wren', f: 'flustered', t: "Sorry. That's a lot of noticing. I don't have much else to do here." }
        ] },
        { t: "I don't remember teaching you anything.", notes: 2, then: [
          { s: 'wren', f: 'neutral', t: "Then maybe I just picked it up. Things get stuck to me. I'm a bit like a coat that way." }
        ] },
        { t: "Stop it. Where did you really hear it?", notes: 0, reverse: 1, then: [
          { s: 'wren', f: 'sad', t: "I... here. With you. I thought." },
          { n: "She pulled the collar of her coat up to her ears, and her hands found the ticket in her lap and held on, and she looked so suddenly and sincerely frightened that Solar felt like she'd raised her voice at a child in a supermarket." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "Everything's been like that lately. Like I already know how things go, before they've happened." },
      { s: 'wren', f: 'neutral', t: "Maybe you're remembering forward." },
      { s: 'solar', f: 'neutral', t: "That's not a thing." },
      { s: 'wren', f: 'happy', t: "It is where I'm from. It's when you know the way somewhere before you've been. Everybody does it a little. You just don't notice, usually, because you're busy walking." },
      { n: "She said it so easily, with so little worry in it, like it was a fact about weather, that something in Solar's chest which had been clenched for two weeks let go by about a centimeter." },
      { choose: [
        { t: "(Hum it again. Both of you, this time.)", notes: 3, then: [
          { n: "So they did. Solar went first, and Wren came in beside her half a step behind, a little off in the same place as before, and the two of them hummed it at the rain while a train came in and went out again without either of them, and stopped where it stopped, and sat there in the place where it stopped, which was not as bad, it turned out, with somebody else in it." }
        ] },
        { t: "That's the nicest way anyone's ever told me I'm losing it.", notes: 2, then: [
          { s: 'wren', f: 'happy', t: "You're not losing it. You're just early." }
        ] },
        { t: "Where you're from. Where is that, exactly?", notes: 0, reverse: 1, then: [
          { s: 'wren', f: 'neutral', t: "...Somewhere with stations. And a great deal of rain." },
          { n: "She said it to the tracks, very lightly, and her fingers found the pink ribbon on her ticket and wound it once around a knuckle, tight enough to turn the knuckle white, and she didn't look at Solar again until the next train had come and gone." }
        ] }
      ] },
      { n: "The announcement for the last train came and went, a tired recorded voice under the rain. Wren didn't move. Solar didn't ask. When she finally got up to go, her shoes squelching, Wren said next time, the way she always did, as if it were the name of a place they'd agreed to meet." }
    ] },

    { after: '6/27', title: '3: the photo booth', place: 'Iwatodai Station · Photo Booth', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "June had settled into the rainy season like it meant to stay, warm gray rain day after day that got into your shoes and your hair and the soft pages at the back of your textbooks, and the station smelled of wet umbrellas and wet concrete and the burnt-sugar warmth of the vending machines. By the ticket gates, the ID photo booth glowed behind its little curtain like a lit window in a dark house." },
      { n: "Solar needed a photo for her commuter pass, which was the reason she gave. The real reason was smaller and more embarrassing, and it was that as far as she knew there was exactly one photograph of her in the world, stapled to an enrollment form, hair down, not smiling, and she didn't remember it being taken. She wanted one she'd been there for." },
      { n: "Wren had come with her as far as the booth, which was further than Wren usually came from the bench, and was now standing a careful distance away from it with her hands in her sleeves, looking at it the way you'd look at a dog you'd been told was friendly." },
      { s: 'solar', f: 'happy', t: "Get in with me. There's room. Two for one." },
      { s: 'wren', f: 'flustered', t: "Oh, no. No, no, no. I'd break it. There's a sign, look. Very small writing. No porters." },
      { n: "There was no sign. Solar got her phone out instead and held it up, and Wren put her whole sleeve over her face like a vampire in an old film." },
      { s: 'wren', f: 'flustered', t: "Not that one either! Your phone's far too nice. It would be embarrassed for me." },
      { choose: [
        { t: "Okay. Then hold the curtain for me.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "That I can do. I'm a professional. Porters are very good at holding things." },
          { n: "She held it, very seriously, with both hands, like a stagehand on opening night." }
        ] },
        { t: "Why don't you like cameras?", notes: 2, then: [
          { s: 'wren', f: 'happy', t: "Who says I don't like them? I love them. From a distance. Like volcanoes." }
        ] },
        { t: "Come on, it's one photo. You're being silly.", notes: 0, reverse: 1, then: [
          { s: 'wren', f: 'sad', t: "I know. I am. I'm sorry." },
          { n: "She stepped back from the booth, and then back again, until she was out of the spill of yellow light, and stood there with her sleeves pulled over her hands, smiling in a way that was mostly apology, and Solar felt like she'd tugged on something that was sewn on." }
        ] }
      ] },
      { n: "Solar ducked in and sat on the little stool and fed in her coins, and the screen told her to look at the lens and not to blink. She looked at the lens. Her hands, while she was busy with that, went up and pinned her hair, quick and neat, without asking her." },
      { n: "The flash went off, white and enormous in the small space, and spilled out under the curtain and across the wet floor of the station, and outside, Wren flinched." },
      { n: "When Solar pushed the curtain back, Wren was standing with one sleeve up against her eyes, squinting at the glow of the booth as if it were much brighter than it was." },
      { s: 'wren', f: 'neutral', t: "Sorry. It's the light. It's so bright in there." },
      { s: 'wren', f: 'sad', t: "It's like it's looking back." },
      { n: "She laughed after she said it, a small embarrassed laugh, and lowered the sleeve, and was fine. The booth hummed to itself and thought for a moment and pushed out a strip of four photos into the slot, still warm and a little damp at the edges. In all four of them Solar had her hair pinned up and the same smile, pleasant and closed, the exact amount, the smile you give a room you need to like you and don't need to know you." },
      { s: 'wren', f: 'neutral', t: "Is that what you look like when you're being looked at?" },
      { choose: [
        { t: "(Tear one off and give it to her.)", notes: 3, then: [
          { s: 'wren', f: 'surprised', t: "For me? To keep?" },
          { n: "She held it by the very edges, like it might bruise, and looked at it for a long moment, and then tucked it inside her coat, somewhere near the ticket." },
          { s: 'wren', f: 'happy', t: "There. Now you'll be on the bench even when you've gone home." }
        ] },
        { t: "Apparently. I look like a hostage.", notes: 2, then: [
          { s: 'wren', f: 'happy', t: "You look like someone being very, very polite to a camera." }
        ] },
        { t: "One day I'm getting you in one of these.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "One day." },
          { n: "She agreed to it the way people agree to things that are a very long way off, pleasantly, and with no intention of being there when they arrive." }
        ] }
      ] },
      { n: "They walked back down the platform to the bench together, Wren a little ahead with her hands in her sleeves and her face turned away from the lights, and the rain kept on, steady and soft, on the roof and the tracks and the dark beyond them. Solar put the rest of the strip in her pocket. She didn't look at it again until she was home, and then she looked at it for a long time." }
    ] },

    { after: '7/30', title: '4: the sea', place: 'Port Island · Seaside Park', time: 'Evening', scene: [
      { music: 'sun' },
      { n: "Wren had never seen the sea. She said so on the platform on Thursday evening, very casually, the way you'd admit you'd never seen a famous film, and then she looked so startled at herself for saying it that Solar bought two tickets to Port Island before either of them could think better of it." },
      { n: "She rode the train standing up, one hand on the strap and the other flat against the window, counting the stops under her breath. She read each name aloud as it came up on the board, quietly, as if she were checking it against a list she kept somewhere. When the doors opened at the right one she let go of a breath Solar hadn't noticed she was holding." },
      { s: 'wren', f: 'happy', t: "It arrived. Exactly where it said it would." },
      { n: "She said it the way other people said it was a miracle." },
      { n: "The beach at the bottom of Seaside Park was long and pale and emptying, the families packing up their umbrellas and the boys from the volleyball net drifting off toward the convenience store, the sun going down fat and orange over the bay and laying a road of light across the water straight to their feet. The sand was still hot on top and cool underneath. Gulls argued over a dropped bag of shrimp crackers. And Wren, in a heavy navy wool porter's coat with brass buttons, at the end of July, stood at the top of the steps with her cap pulled low and looked at all of it like it might be taken away if she blinked." },
      { choose: [
        { t: "You're going to die in that coat.", notes: 2, then: [
          { s: 'wren', f: 'serious', t: "Porters don't take off their coats. It's a whole thing. There's a rule." },
          { n: "She rolled the sleeves up to the elbow four minutes later, very carefully, the way you'd fold a flag, and looked at her own thin wrists in the evening light with mild surprise, like she'd forgotten they were in there." }
        ] },
        { t: "(Take her hand and pull her down the steps.)", notes: 3, then: [
          { n: "Her hand was cool and light in hers and held on hard. She came down the steps two at a time with a small breathless laugh, like someone going down a slide she'd been told was too big for her, and didn't let go until her shoes hit sand." }
        ] },
        { t: "Take the cap off at least. Nobody's looking.", notes: 0, reverse: 1, then: [
          { n: "Wren's hand went up to the brim and held it, fast, the knuckles white." },
          { s: 'wren', f: 'sad', t: "Everybody's looking. Everybody's always looking. You just don't notice, because you're used to it." },
          { n: "She said it gently, as if she were explaining something to a child. Solar didn't know what she'd said wrong, only that she had, the way you know you've stepped on something soft in the dark." }
        ] }
      ] },
      { n: "She walked down to the waterline and stopped there, right at the edge of the wet sand, toes on the line where the last wave had reached, the way you'd stop at the yellow line on a platform." },
      { s: 'wren', f: 'neutral', t: "Where I'm from, the line doesn't go to the sea. Nothing does. I always thought it must be because the sea is where the land runs out, so it's where the line would have to run out too." },
      { s: 'wren', f: 'neutral', t: "There's a story people tell, about the last train. That it goes to the end of the line. The real end, past all the stations you know, to somewhere nobody ever has to get off." },
      { s: 'wren', f: 'sad', t: "I used to think that sounded like the sea. Somewhere so big and quiet that nothing ever has to happen again." },
      { n: "A wave came in, bigger than the others, and ran up over her shoes, and she yelped, a real yelp, high and outraged, and jumped back, and then stood there looking down at her soaked shoes with her mouth open." },
      { s: 'wren', f: 'surprised', t: "It isn't quiet at all. It's so loud. Why didn't anybody tell me it was so loud?" },
      { choose: [
        { t: "Do you want to go in?", notes: 3, then: [
          { s: 'wren', f: 'flustered', t: "...Yes. I think so. Stay close?" },
          { n: "She went in to her ankles, and then to her shins, holding her coat up in both fists like a skirt, the waves breaking around her legs and pulling back and dragging the sand out from under her heels so she sank a little every time and laughed every time, like it was a trick being played just on her." }
        ] },
        { t: "It's just water.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "It's a great deal of water. For just water." },
          { n: "She went in anyway, to her ankles, and stood there with her arms out for balance, gravely, like a girl on a tightrope." }
        ] },
        { t: "Where is it you're from, Wren? Really.", notes: 0, reverse: 1, then: [
          { n: "She didn't turn around. The water went out around her ankles and came back." },
          { s: 'wren', f: 'neutral', t: "Somewhere with stations. And rain. I told you." },
          { n: "She went in to her knees after that, fast, further than she wanted to, Solar could tell, like someone walking away from a conversation the only direction available." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "If you had a ticket. If there were a last train, and it was yours. Would you get on?" },
      { choose: [
        { t: "Not yet.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Not yet. That's a good answer. I think that's the best answer there is." }
        ] },
        { t: "I'd want somebody to see me off.", notes: 2, then: [
          { s: 'wren', f: 'happy', t: "I'd see you off. I'd wave so hard. You'd be mortified." },
          { n: "She said it lightly. Neither of them laughed." }
        ] },
        { t: "There's no such thing as a last train.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "...No. Of course not. It's only a story." },
          { n: "She looked out at the water while she said it, at the place where the road of light ran out, and her hand went into her coat pocket, where the ticket was, and stayed there." }
        ] }
      ] },
      { n: "The sun went down. The water went from gold to pink to the gray-blue of a pigeon's wing, and the first lights came on along the far shore, and Wren came out of the sea with her coat dripping at the hem and her nose going pink, delighted and appalled, because she said she had never once in her life been in enough sun to burn." },
      { n: "On the walk back up the beach Solar looked behind them, the way she always looked behind her, to count. One line of footprints went along the wet sand from the water to the steps. Her own, she thought, deep and even. Wren must have been walking in them, the way kids do, stepping exactly where the person in front stepped. It was the kind of thing Wren would do." },
      { n: "The tide came in behind them and filled the prints one by one with water, and took them." }
    ] },

    { after: '8/8', title: '5: it came for me', place: 'Iwatodai Station · Bench', time: 'Evening', scene: [
      { music: 'mystery' },
      { n: "It was still hot at eight o'clock, the kind of August night that sat on your skin like a wet towel, and the platform lights had a halo of moths around every one of them, and Wren was on the bench, and she was shaking." },
      { n: "Not a lot. Solar saw it from the top of the stairs anyway. A fine hard tremor, in her shoulders and her hands, the ticket in her fingers trembling like a leaf in a draft, in thirty-one degrees, in that coat, with the collar pulled up so high it was nearly over her mouth." },
      { s: 'wren', f: 'sad', t: "Oh. It's you. Good. Sit down. Sit here. Close." },
      { n: "Solar sat. Wren leaned into her shoulder at once, all of her weight, which was hardly any, and stayed there, and her hair under the cap smelled like rain, which made no sense, because it hadn't rained in eleven days." },
      { s: 'wren', f: 'sad', t: "Did you see it? On the bridge? Two nights ago?" },
      { choose: [
        { t: "I saw it.", notes: 3, then: [
          { n: "Wren let out a long breath against her shoulder, like someone who's been told they aren't the only one who heard the noise downstairs." }
        ] },
        { t: "How do you know about the bridge?", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "I heard it. Everybody who's ever waited on a platform heard it. You can't not hear it." },
          { n: "She said it fast, and pressed her face harder into Solar's shoulder, as if to stop any more questions from getting out of either of them." }
        ] }
      ] },
      { s: 'wren', f: 'sad', t: "It came for me." },
      { n: "It went into Solar like a splinter. She felt it in her hands first, which closed." },
      { s: 'wren', f: 'sad', t: "It stopped at the far tower and opened a door and waited. I could feel it waiting. I felt it from here, all the way across the water. It was waiting for me. It's been waiting for me for a long time, and I keep missing it, on purpose, and it's getting tired of being missed." },
      { s: 'wren', f: 'neutral', t: "And then somebody else got on instead. And it left." },
      { choose: [
        { t: "It took a woman called Hanne.", notes: 2, then: [
          { s: 'wren', f: 'sad', t: "Hanne." },
          { n: "Wren said the name very carefully, once, the way she'd said Solar's on the first night, like writing it down somewhere she meant to keep. Then her face crumpled, just for a second, and she put it away again." },
          { s: 'wren', f: 'sad', t: "I'm sorry. I'm so sorry. That should have been... I'm sorry." }
        ] },
        { t: "It's not going to get you. I won't let it.", notes: 3, then: [
          { s: 'wren', f: 'neutral', t: "...You say that like you'd know how to stop a train." },
          { s: 'wren', f: 'happy', t: "I believe you, though. Isn't that silly? I believe you completely." }
        ] },
        { t: "Why would it want you?", notes: 1, then: [
          { n: "Wren didn't answer for a long time. A train came in on the far platform and went out again." },
          { s: 'wren', f: 'neutral', t: "Because I've got a ticket. That's all. That's what tickets are for." }
        ] }
      ] },
      { n: "It wasn't true. Solar didn't know how she knew it wasn't true. Something about the way Wren said it for me, a beat too quick, too sure, the way you'd say a thing you'd been practicing in the mirror. Something about the way, as she said it, Wren's eyes went not to the tracks but to Solar's face, and stayed there, and then flinched away." },
      { s: 'wren', f: 'serious', t: "Will you promise me something? Just one thing. It's a small one." },
      { s: 'wren', f: 'serious', t: "Don't go looking for where I'm from. Please. Not on a map, not in the tower, not anywhere. Don't follow me home." },
      { choose: [
        { t: "I promise.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Thank you." },
          { n: "She said it with her whole body, every bit of the shaking going out of her at once, like a kite coming down. Solar felt the promise settle into her like a stone into a pocket, and knew, without knowing why, that she would break it, and that Wren knew too, and that neither of them would say so." }
        ] },
        { t: "Why? What's there?", notes: 1, then: [
          { s: 'wren', f: 'sad', t: "Nothing. Nothing's there. That's the whole problem." },
          { s: 'wren', f: 'neutral', t: "Promise anyway. Please. You don't have to mean it. I'd just like to hear it." },
          { n: "Solar said it. She didn't know if she meant it. Wren didn't seem to need her to." }
        ] },
        { t: "If you're in trouble, I'm going to find out. Whether you like it or not.", notes: 0, reverse: 1, then: [
          { n: "Wren sat up, away from her shoulder, and the warm place where she'd been went cold at once." },
          { s: 'wren', f: 'serious', t: "That's what everyone says. Right before they decide what's good for you." },
          { n: "It was the most unkind thing Solar had ever heard her say, and she said it so quietly, and so much like she already knew how it felt to hear it, that Solar couldn't even be angry. She sat there on her own half of the bench with her face hot, and Wren sat on hers, and the moths went round and round the lights." }
        ] }
      ] },
      { n: "The last train came in at eleven-forty. Its doors opened. Its windows were bright and ordinary and full of salarymen asleep on each other's shoulders. Wren held the ticket against her chest with both hands and didn't move, and the doors closed, and it left." },
      { n: "She was still trembling a little when Solar left her. At the top of the stairs Solar looked back, and Wren lifted one long sleeve without turning her head, the way she always did, and Solar went home and lay awake listening for a horn." }
    ] },

    { after: '9/13', title: "6: don't read them", place: 'Iwatodai Station · Bench', time: 'Evening', scene: [
      { music: 'tender' },
      { n: "September had come in wet and gray and cooler, finally, and the platform smelled like rain and hot vending-machine coffee and the first roasted chestnuts from the cart at the bottom of the stairs, and Solar's phone would not stop buzzing." },
      { n: "It had been doing it for three weeks now. Messages from numbers she didn't know, from people she didn't know, who knew her. Old ones, mostly, things that felt like they'd been sent a long time ago and taken the long way round. And now, since last night, two girls sleeping in the empty rooms on the second floor of the dorm who had looked at her across a mall and screamed her name." },
      { n: "Wren watched her take the phone out of her pocket, look at the screen, and put it away again without reading it, three times in five minutes. On the fourth time, she put out one long sleeve and laid it gently over the phone, and over Solar's hand." },
      { s: 'wren', f: 'neutral', t: "They're the ones from the mall. Aren't they. The girls who know you." },
      { s: 'solar', f: 'neutral', t: "Hanni and Hyein. They say they're my sisters. Not my real sisters. My... they say it like it's more than that." },
      { s: 'wren', f: 'sad', t: "I saw them. On the way here. They were walking up from the dorm with their arms linked, talking over each other, and the tall one was crying a little and pretending she wasn't." },
      { s: 'wren', f: 'neutral', t: "They looked at me. When I passed. The one with the long hair looked at me and stopped talking, and then said something about the food, and they walked on." },
      { n: "Wren took her sleeve back. She held the ticket in both hands in her lap and looked at it." },
      { s: 'wren', f: 'sad', t: "They'll take you home." },
      { choose: [
        { t: "Is that bad?", notes: 3, then: [
          { s: 'wren', f: 'neutral', t: "I don't know. I don't know what home is. I've never had one long enough to find out." },
          { s: 'wren', f: 'sad', t: "I only know that when people go home, they stop coming to the bench." }
        ] },
        { t: "I don't even remember home.", notes: 2, then: [
          { s: 'wren', f: 'neutral', t: "No. But they do. That's worse, in a way. They'll remember it for you, out loud, until you do too." }
        ] }
      ] },
      { s: 'wren', f: 'serious', t: "Can I ask you not to read them? The messages. Not forever. Just... not yet. Not all at once." },
      { s: 'wren', f: 'sad', t: "Every time you read one, you go a little further away. I can see it. You look at the screen and for a second you're not on this bench, you're somewhere else, somewhere with people in it, and I can't follow you there. Nobody can." },
      { choose: [
        { t: "Okay. Not all at once. I promise.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Thank you. Thank you. I know it's a selfish thing to ask." },
          { n: "She looked so relieved that Solar felt it in her own chest, a loosening, as if she'd been the one who asked. She took the phone out of her pocket and turned it off, right there, and the screen went black, and they both looked at the black screen for a while like it was a window onto a quiet street." }
        ] },
        { t: "I have to read them, Wren. They're mine.", notes: 2, then: [
          { s: 'wren', f: 'sad', t: "...Yes. They are, aren't they. I forget that. I keep thinking of you as mine, which is very rude of me." },
          { s: 'wren', f: 'neutral', t: "Read them, then. Just come back after. Come back to the bench and tell me about them, and I'll be less frightened of them if I know their names." }
        ] },
        { t: "(Read one out loud to her, to show her there's nothing to be scared of.)", notes: 0, reverse: 1, then: [
          { n: "She opened the thread with Hyein's name at the top and read the newest one aloud, a long run of capital letters about a chicken shop in a city called Syracuse, and Wren listened to the first line with her face very still and then got up off the bench." },
          { s: 'wren', f: 'sad', t: "Please don't. Please. I asked you." },
          { n: "She went and stood at the far end of the platform, past the vending machines, with her back turned, and stayed there until the next train had come and gone, and when Solar came to stand beside her, she didn't move away, but she didn't lean in either. It felt worse than if she'd left." }
        ] }
      ] },
      { n: "They sat with it for a while. The chestnut cart packed up. A boy in a soccer uniform ran for a train and made it and pumped his fist at nobody in the window." },
      { s: 'wren', f: 'neutral', t: "What's their favorite thing about you? The girls. Did they say?" },
      { s: 'solar', f: 'neutral', t: "Hyein said I'm never polite before noon. Hanni said I always say I'm fine." },
      { s: 'wren', f: 'happy', t: "Oh, that's true. You do. You said it to me twice tonight already." },
      { s: 'wren', f: 'neutral', t: "...I'm glad somebody knows that about you. Somebody besides me." },
      { n: "She said it softly, to the ticket. Solar had the strange, dizzy feeling, sitting there, of being looked at from two directions at once, the girls from the mall at one end of her and the girl on the bench at the other, both of them holding on, and none of them pulling, exactly. Not yet." }
    ] },

    { after: '10/20', title: '7: you look like someone', place: 'Iwatodai Station · Bench', time: 'Evening', gate: { total: 12 }, scene: [
      { music: 'mystery' },
      { n: "It was the second day of midterms and Solar's brain had the texture of wet bread, and Jungwon had insisted on walking her to the station, on the grounds that she had answered a question about logarithms that afternoon in a way he described, politely, as alarming. He'd been here six days. He already had opinions about her study habits. He'd apparently always had them." },
      { n: "Minji had come too, because Minji came everywhere now, a little behind, camera in her hands, filming the platform lights coming on one by one against the October dark. She'd asked first. She always asked first. Solar had said yes so many times this week that Minji had started asking with her eyebrows instead." },
      { n: "Wren was on the bench. She looked up as they came along the platform, and her face did the thing it did when she was glad, a small private brightening, and then she saw the other two and it went politely, carefully blank, like a shop pulling its shutters halfway down." },
      { s: 'wren', f: 'flustered', t: "Oh. You brought people. Hello, people." },
      { n: "Jungwon stopped. He did it the way he did everything, precisely, his feet together, his hands at his sides, and he looked at Wren for a long moment with no expression at all, and Solar watched one hand drift up to the watch on his other wrist and touch it, the way it did when he was thinking very hard about something he didn't intend to say." },
      { s: 'jungwon', f: 'neutral', t: "Sorry." },
      { s: 'jungwon', f: 'neutral', t: "You look like someone." },
      { n: "He bowed, very slightly, the polite bow of a stranger apologizing for staring, and didn't say who. Wren laughed. It was a lovely laugh, bright and easy and pitched just right, and Solar had heard her laugh a hundred times on this bench and never once like that." },
      { s: 'wren', f: 'happy', t: "Oh, everyone says that. I have one of those faces. Very common. You can buy them at the station, two for a hundred yen." },
      { n: "Minji had lifted the camera. Not at Wren. At the bench, at the two of them, the girl in the coat and the girl in the uniform side by side under the timetable, because it was a good shot, Solar could see Minji see it, the way her whole posture leaned into it. She looked at the little screen. She frowned at it. She looked up at the bench, and down at the screen, and up again." },
      { s: 'minji', f: 'neutral', t: "Hang on. The light's doing something. Sol, can you lean a bit to your left? No. Your other left." },
      { s: 'minji', f: 'serious', t: "...It's not focusing. It keeps hunting. It keeps sliding off something and going to the wall behind you." },
      { s: 'wren', f: 'happy', t: "That'll be me. Cameras hate me. I have a gift." },
      { choose: [
        { t: "(Laugh with her.)", notes: 3, then: [
          { n: "She laughed, and Wren laughed again, louder, and Minji lowered the camera and smiled at the two of them in a way that didn't quite reach the rest of her face, and said okay, fine, she'd get them another time. Jungwon said nothing. He was still touching his watch." }
        ] },
        { t: "Let me see the screen.", notes: 1, then: [
          { n: "Minji turned it round. On the little screen there was the bench, and the timetable, and the wall, and Solar, in her uniform, sitting slightly to one side of the seat with her face turned toward an empty space, mid-sentence, as if she were talking to the air. The picture shivered and pulled focus and pulled it again, hunting, like an eye trying to find a word on a page." },
          { n: "Then Wren leaned over and put one long sleeve across the lens, laughing, and said no peeking, it was rude to look at a lady's bad angle, and Minji took the camera back and didn't say anything else, and didn't look at the screen again." }
        ] },
        { t: "Jungwon. Who does she look like?", notes: 0, reverse: 1, then: [
          { n: "Jungwon's eyes went to her, and then, very briefly, to Wren, and his face did nothing at all, which on Jungwon was the loudest thing a face could do." },
          { s: 'jungwon', f: 'neutral', t: "I'm sure I was mistaken." },
          { n: "Beside her, Wren had gone very still, and her hands on the ticket had gone white at the knuckles, and when Solar turned to her she was smiling at the tracks like the smile had been nailed on." }
        ] }
      ] },
      { n: "Jungwon left first. He said goodnight to Wren with his formal little bow and goodnight to Solar with something underneath it that she couldn't read, and reminded her, in a perfectly courteous voice, that the exam on Thursday was mathematics, and that he would be at the dorm at seven. Minji went with him, walking backward for the first few steps, filming the platform, the lights, the long empty curve of the rails. Not the bench." },
      { s: 'wren', f: 'neutral', t: "They're nice. Your people. They look at you like you're the last train home." },
      { s: 'wren', f: 'sad', t: "...He looked at me like he'd seen a ghost. Didn't he. I'm not a ghost. I'm sure I'm not." },
      { choose: [
        { t: "You're not a ghost.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "No. I'm a porter. It's much less glamorous." },
          { n: "She bumped Solar's shoulder with hers, lightly, and her shoulder was solid and warm and real, and Solar held onto that for the rest of the night like a handrail." }
        ] },
        { t: "He's like that with everyone.", notes: 2, then: [
          { s: 'wren', f: 'neutral', t: "No he's not. He's like that with you. He was just like that with me for a second, by accident." }
        ] }
      ] },
      { n: "The last train came. Wren didn't get on it. Solar didn't ask. On the walk home she found she was holding her own wrist, the way Jungwon held his, her thumb on the place where a pulse was, counting." }
    ] },

    { after: '11/24', title: '8: the ticket', place: 'Iwatodai Station · Bench', time: 'Evening', gate: { total: 18 }, scene: [
      { music: 'tender' },
      { n: "November had gone cold all at once, the way it did here, one day sweaters and the next day breath, and the platform had that hard bright winter smell of cold metal and the oden stall at the top of the stairs. The bench was crowded. That was new. For seven months it had been Solar's bench and Wren's bench and nobody else's. Now there were people on it." },
      { n: "Hanni had come because she'd heard Solar went to the station every evening and wanted to know why. Yunjin had come because Hanni was going and Yunjin had decided, about four days after crossing, that she was not going to let Solar out of her sight in any situation that involved public transport. Jihoon had come because he'd been told not to." },
      { s: 'jihoon', f: 'happy', t: "So this is it. The famous bench. I'm gonna be honest with you, Sol, I expected more. A plaque. A little roof." },
      { s: 'yunjin', f: 'happy', t: "It's a public bench, babe. It belongs to the people. I'm the people. Scoot." },
      { n: "Wren had made herself very small at the far end, the coat pulled round her knees, her face turned half away under the cap, smiling at everyone in the bright careful way she'd smiled at Jungwon, and every so often Hanni glanced at her and away and rubbed her own arm like she was cold, and said it was the oden, the smell of it, it was making her feel weird." },
      { n: "It was Jihoon who saw the ticket. Of course it was Jihoon. Jihoon had never in his life seen a thing he didn't want to pick up." },
      { s: 'jihoon', f: 'neutral', t: "Oh, cute ribbon. Where's that for?" },
      { n: "Wren's hands closed on it. But Jihoon had already leaned over to read it, the way he leaned over everybody's everything, and he read it, and his whole face changed. Went soft and stunned and young, like a kid who's seen his own house on the news." },
      { s: 'jihoon', f: 'surprised', t: "...Hanlim. It says Hanlim." },
      { s: 'jihoon', f: 'sad', t: "That's home. That's literally where we live. Sol, it's a ticket home, where did she..." },
      { s: 'hanni', f: 'surprised', t: "What? No it doesn't. It says Syracuse. Look, it's right there. It's in English." },
      { s: 'yunjin', f: 'serious', t: "Are you both high? It says Incheon. It's printed. Incheon. With the little ferry stamp in the corner." },
      { n: "The three of them looked at each other. Then all three of them looked at the ticket. Then, one by one, all three of them looked at Solar." },
      { n: "Solar looked at it. Thick cream card, worn soft at the corners, a scrap of pink ribbon tied through the hole. Where the destination should be printed there was a box with a thin line under it." },
      { n: "It was blank." },
      { choose: [
        { t: "It doesn't say anything.", notes: 3, then: [
          { n: "Nobody said a word. Hanni put her hand over her mouth. Yunjin, very slowly, sat back on the bench, as if her legs had decided to without her." }
        ] },
        { t: "(Say nothing. Look at Wren.)", notes: 2, then: [
          { n: "Wren was already looking at her. For one second, under the cap, her face was naked, all of it, scared and sorry and something else Solar didn't have a name for, and then she put it away." }
        ] },
        { t: "Wren, where did you get this? Tell me the truth.", notes: 0, reverse: 1, then: [
          { s: 'wren', f: 'sad', t: "I've always had it. I've always had it. Please don't ask me like that, in front of everybody, like I've stolen it." },
          { n: "Her voice cracked on the last word, and Yunjin looked at Solar with an expression that said, very clearly, babe, read the room, and Solar felt the heat go up her neck and stay there." }
        ] }
      ] },
      { n: "Wren tucked the ticket away inside her coat, fast, with both hands, the way you'd put away a photograph somebody had caught you looking at, and stood up." },
      { s: 'wren', f: 'happy', t: "It's a very old ticket. The printing's worn. It probably says something different in every light. Don't you think? Like those pictures that change when you tilt them." },
      { s: 'wren', f: 'neutral', t: "I should let you all go home. It's cold. You should all go home." },
      { n: "She said home the way you'd step around a hole in the pavement. Then she bowed to the bench, to all four of them at once, a funny old-fashioned porter's bow, and went off down the platform to the far end, and stood there by herself in the cold with her hands in her sleeves, and didn't look back." },
      { n: "Nobody spoke on the way to the dorm. At the gate Yunjin caught Solar's arm, and held it, and opened her mouth, and closed it again, which in two months Solar had never once seen Yunjin do." },
      { s: 'yunjin', f: 'serious', t: "Not tonight. But soon, babe. I'm going to say something soon and you're going to hate it." },
      { n: "Solar went upstairs. She didn't turn the light on. She sat on the end of her bed in the dark with her coat still on, and thought about a box with a line under it, waiting, like a surname nobody had filled in." }
    ] },

    { after: '12/21', title: '9: solstice', place: 'Iwatodai Station · Platform', time: 'Evening', scene: [
      { music: 'night' },
      { n: "The twenty-first of December was the shortest day of the year, and it felt it. The sun had come up late and gone down early and in between it had barely bothered, and by five the sky over the station was already the deep clean black of somewhere very far north, and the cold had teeth. The platform was strung with somebody's idea of Christmas, plastic holly and a sad little tree by the ticket gate with one string of lights that blinked out of time with itself." },
      { n: "Wren was not on the bench. For the first time since April, the last bench was empty." },
      { n: "Solar's stomach dropped out from under her so fast and so far that she had to put a hand on the vending machine. Then she saw her. Further down, at the very end of the platform, under the big station clock that hung on its iron arm over the tracks, standing very straight with her hands in her sleeves and her head tipped back, looking up." },
      { n: "The clock had no hands. Solar didn't know how long it had been like that. Maybe always. Maybe she'd never looked up. The face was white and round and numbered, I to XII in black, and in the middle, where the hands should meet, there was a small brass pin, and nothing else." },
      { s: 'wren', f: 'neutral', t: "They came off this morning. I watched them. The big one first, then the little one. They just slid off and fell onto the tracks, very gently, like leaves." },
      { s: 'wren', f: 'neutral', t: "Nobody noticed. People looked up to check the time and saw it wasn't there and looked at their phones instead. Isn't that funny? Nobody minded at all." },
      { choose: [
        { t: "Are you all right?", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "I'm cold. That's new. I don't think I've ever been cold before. I don't mind it. It's like being told something true." }
        ] },
        { t: "What time is it, then?", notes: 2, then: [
          { s: 'wren', f: 'neutral', t: "Late. Early. It's the longest night of the year. I think tonight it's whatever time it wants to be." }
        ] }
      ] },
      { n: "They sat down on the edge of the platform bench nearest the clock, the cold of the seat coming straight through Solar's coat, and watched the trains come and go. Wren had taken off one glove, which Solar had never seen her wear, and was holding the ticket in her bare hand, turning it over and over, so the pink ribbon went round and round her knuckles." },
      { s: 'wren', f: 'neutral', t: "Do you know what solstice means? The fox girl told me. The one at the shrine. She said it means the sun stands still." },
      { s: 'wren', f: 'sad', t: "I liked that. The sun, standing still. Not going anywhere. Not having to choose which way to go down." },
      { s: 'wren', f: 'serious', t: "But it doesn't, does it. It only looks like it does, for a day. And then it has to go one way or the other." },
      { n: "She turned the ticket over once more and held it still, face down, against her knee." },
      { s: 'wren', f: 'serious', t: "I'm going to ask you something tonight. Not now. When the hour comes. I'd like to ask it in the dark, where it counts." },
      { s: 'wren', f: 'sad', t: "Will you stay with me until then? You don't have to say yes. You can go home. Everybody goes home." },
      { choose: [
        { t: "I'll stay.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Thank you." },
          { n: "She leaned her head against Solar's shoulder, the cap pushed a little crooked by it, and Solar didn't move to straighten it, and they stayed like that while the trains thinned out to one every half hour and then one every hour, and the plastic holly frosted over, and the little tree by the gate blinked on and off, out of time with itself, all the way to midnight." }
        ] },
        { t: "Ask me now.", notes: 1, then: [
          { s: 'wren', f: 'neutral', t: "No. Not in the light. In the light you'll answer the way they need you to. I'd like to hear what you say when nobody's watching." },
          { n: "So Solar stayed. She hadn't really been going to go anywhere. She didn't think Wren had really thought she would." }
        ] }
      ] },
      { n: "Somewhere far away, far past the end of the platform, past the city, past the bay, the horn sounded. Long and low. Closer than it had ever been." }
    ] },

    { after: '1/26', title: '10: the girl on the bench', place: 'Iwatodai Dorm · Rooftop', time: 'Night', gate: { total: 24 }, scene: [
      { music: 'tender' },
      { n: "Wren knocked on her door at eleven. Solar knew it was Wren before she opened it. Nobody else in the building knocked like that, two small careful taps, like someone checking whether a melon was ripe. Nobody else in the building had ever needed to be let in." },
      { s: 'wren', f: 'neutral', t: "Will you come up to the roof? I want to ask you something, and I'd like to be somewhere with a lot of sky." },
      { n: "The roof in the last week of January was the coldest place in Iwatodai. The water tank had a skin of ice down one side. The city was all lights below them, the bay black, the monorail sliding across it like a bead on a string, and over at the station, small and bright, the platform where everything had started." },
      { n: "Wren sat down with her back against the water tank and pulled her coat around her knees and looked at the station lights for a while before she said anything. The cap was on. It was always on. Solar had stopped noticing, the way you stop noticing a ring someone always wears, until the night you see them without it." },
      { s: 'wren', f: 'neutral', t: "Tell me about her. The girl on the bench. From the beginning. You're the only one who was there." },
      { n: "So Solar told her." },
      { n: "She told her about April. A girl on the last bench at Iwatodai Station, very straight, hands in her lap, in a porter's coat cut for somebody twice her size, holding a ticket like it might be taken from her. Frightened of a train. Joking about it. Counting the benches under her breath without knowing she was doing it. What happens to people who stay somewhere they don't belong." },
      { n: "She told her about the song, and the next bar sung a little flat. About the photo booth, and the sleeve over the face, and the light that looked back. The streetlight in July. The sea, and the yelp, and the pink nose. The shaking in August. The phone turned off on the bench so the screen went black like a window. The ticket that said nothing. The handless clock." },
      { n: "Wren listened to all of it with her head tipped back against the tank and her eyes on the station, the way you'd listen to a story about someone you'd sat next to on a long trip once and lost touch with." },
      { s: 'wren', f: 'neutral', t: "Did she like you?" },
      { choose: [
        { t: "I think so.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "I think so too. You can hear it in how you tell it." }
        ] },
        { t: "She said she'd wave so hard I'd be mortified.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Oh, that's awful." },
          { s: 'wren', f: 'surprised', t: "...That sounds like her. That sounds like me. Doesn't it." }
        ] },
        { t: "You tell me. You were there.", notes: 1, reverse: 1, then: [
          { n: "Wren flinched, a small one, the shoulders, as if a door had banged somewhere in the building." },
          { s: 'wren', f: 'sad', t: "I asked you to tell it. I wanted to hear it from outside. Just once. Is that so much?" },
          { n: "Solar said sorry. She meant it. It took Wren a long time to look at her again." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "I like her. She was frightened all the time, and she kept coming back to the bench anyway." },
      { s: 'wren', f: 'neutral', t: "I've been thinking about it since the clock. Properly. What it is I've been so scared of, all this time. I thought it was the train. It isn't the train." },
      { s: 'wren', f: 'sad', t: "I've been scared of every ending. All of them. At once." },
      { s: 'wren', f: 'sad', t: "Every door that closes on one thing closes on another, and I couldn't stand it. I couldn't stand choosing which one. So I sat on the bench and I didn't get on anything, and I thought, if I never get on, nothing ever has to end. And it worked. For a while. Nothing ended. Nothing started, either." },
      { n: "Solar's body heard it first. Her hands, which had been cold for an hour, went hot. Her throat closed up. Her eyes did something she had to look at the bay about." },
      { choose: [
        { t: "(Take her hand.)", notes: 3, then: [
          { n: "It was cold. Solar held it anyway, the way you'd hold a hand that needed warming, and Wren let her, and looked down at their two hands in her lap like they were a puzzle she was nearly finished with." }
        ] },
        { t: "I know. I know exactly what that feels like.", notes: 3, then: [
          { s: 'wren', f: 'neutral', t: "Yes. You do, don't you." },
          { s: 'wren', f: 'sad', t: "You've always known. That's why you kept coming back." }
        ] },
        { t: "You're being silly. Endings are just endings.", notes: 0, reverse: 1, then: [
          { s: 'wren', f: 'sad', t: "...Yes. I know. I am." },
          { n: "She smiled at the station lights, and pulled her sleeves down over her hands, and didn't say anything for a long time, and Solar had the uncomfortable feeling of having shut a door on somebody's fingers, a feeling she'd had once before, in April, on a bench, and had sworn she wouldn't have again." }
        ] }
      ] },
      { s: 'wren', f: 'neutral', t: "Will you be on the platform? On Saturday. When it comes." },
      { choose: [
        { t: "I'll be there.", notes: 3, then: [
          { s: 'wren', f: 'happy', t: "Good. I'd like you to be. Whatever happens. I'd like it to be you." }
        ] },
        { t: "(Nod. You can't say it.)", notes: 3, then: [
          { n: "She nodded. Wren watched her nod, reading her face the way she'd said she always did, and nodded back, solemnly, like two people agreeing on the time of a train." }
        ] }
      ] },
      { n: "They stayed until the cold drove them in, which took a long time, because neither of them wanted to be the one to say so. On the stairs down Wren stopped, one hand on the rail, and looked back up at the square of black sky in the roof door, full of stars." },
      { s: 'wren', f: 'neutral', t: "Four days. I counted. I always count. I think I got that from you." },
      { n: "She went down the stairs and out of the front door, and Solar stood at the top of the stairs with her hand still warm from holding Wren's, which had been cold, and thought about that for a long time, and couldn't make it come out right." }
    ] }
  ]
});
