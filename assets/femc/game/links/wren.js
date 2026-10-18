/* Wren · Jester. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Story link: rank dates are fixed. reversible: choices marked reverse: 1 count toward a reversal.
   Cast-only speaker: porter (no portrait, used before she gives her name). No phone, so invite is null.
   Ranks 4-10 are stubs. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'wren', name: 'Wren', short: 'Wren', arcana: 'Jester', numeral: '0', from: '???',
  kind: 'frame',
  romance: null,
  starts: '4/16',
  reversible: true,
  forced: [1, 2, 3],
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

    { todo: 'Rank 4 (see plot doc §11).' },
    { todo: 'Rank 5 (see plot doc §11).' },
    { todo: 'Rank 6 (see plot doc §11).' },
    { todo: 'Rank 7 (see plot doc §11).' },
    { todo: 'Rank 8 (see plot doc §11).' },
    { todo: 'Rank 9 (see plot doc §11).' },
    { todo: 'Rank 10 (see plot doc §11).' }
  ]
});
