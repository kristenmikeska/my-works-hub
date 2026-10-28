/* Act VI story events (end of the line, 12/22 → 3/6; the year runs to March since 2026-10-21). Revamp story data (femc-game.html). Same format as story-act1.js.
   Every event here is gated on flag 'year-goes-on' (set at the solstice on every route except the bad ending, which ends the
   year on the platform). Route flags from the solstice: route-R / route-S / route-H / route-stay / route-true.
   Re-paced after the solstice for the March calendar: Elizabeth's visit stays 1/9; the verso moved 1/16 → 2/20; the last
   week moved five weeks on, weekdays kept (snow 1/27 → 3/3, mirror 1/28 → 3/4, playdate 1/29 → 3/5, the last train
   1/30 → 3/6), so every 'Saturday' still means the night of the train. February is room for links' ranks 11-15.
   The finale (3/6) hands off Wren's Shadow in three segments (script 'finale'); the lock behaviour is in each segment's notes. */
(() => {
  const K = window.FEMC_STORY_KIT;
  // Short lines that change with the route, for scenes that are otherwise the same on every route.
  K.byRoute = (R, S, H, stay, tru) => [
    { ifFlag: 'route-R', then: R, else: [
      { ifFlag: 'route-S', then: S, else: [
        { ifFlag: 'route-H', then: H, else: [
          { ifFlag: 'route-true', then: tru, else: stay }
        ] }
      ] }
    ] }
  ];
})();

(window.FEMC_GAME_EVENTS ||= []).push(
  { id: 'a6-route-form', date: '12/22', slot: 'evening', flag: 'year-goes-on', title: 'what shines', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
    { music: 'night' },
    { n: "The closing ceremony was at ten in the morning and nobody heard a word of it. The whole third year sat in the gym in their coats with the heaters ticking, thinking about winter break, and Solar sat among them with her hands in her lap and felt it the whole time, under her ribs, where the charms lived. Something that had been ringing all year had stopped. Something else had started." },
    { n: "She went up to the roof after dinner, alone, and stood in the cold with the Evoker in her hand, and for the first time since April she didn't want to fight anything. She just wanted to see." },
    { n: "She raised it. The barrel against her temple, cold. Her arm steady. Her own choice, all the way down." },
    { music: 'awakening' },
    ...window.FEMC_STORY_KIT.byRoute([
      { summon: 'haenim-sunna' },
      { n: "Haenim came up out of her the way she always came, all light and silk, and the name on the card held still for the first time in eight months and then changed. The veil went bright as stage lights. The gold bell on her sash wasn't ringing. It was shining, steady, the way a spotlight shines, and the Persona that stood over the dorm roof in the cold was dressed for a stage, a runner under the lights, the whole world looking at her and her not looking away." },
      { n: "Sunna. The name came to her the way a song comes. She'd never heard it. It was hers." }
    ], [
      { summon: 'haenim-harbor' },
      { n: "Haenim came up out of her and changed as she came. The veil went the color of the sea at dusk. The jade ring on her sash wasn't ringing; it was shining, green and steady, like a harbor light seen from a boat. The Persona that stood over the dorm roof in the cold stood like someone on a quay at night, watching the water for the people who hadn't come home yet. She was afraid of the water. She stood over it anyway." },
      { n: "Mazu. The name came to her the way the tide comes. She'd never heard it. It was hers." }
    ], [
      { summon: 'haenim-nike' },
      { n: "Haenim came up out of her and opened. That was the only word. Wings, gold and white and enormous, unfolding over the dorm roof, and the star pin on her sash wasn't ringing, it was shining, bright as a camera flash that didn't stop. The Persona stood over the city with her chin up and her arms out like someone who'd been told to win and had decided, somewhere along the way, to want it." },
      { n: "Nike. The name came to her the way applause comes, all at once. She'd never heard it. It was hers." }
    ], [
      { summon: 'haenim' },
      { n: "Haenim came up out of her the way she always had. The veil. The crown of ribbons. The golden rope. The three charms on her sash hung dark and still, the bell and the jade and the star, not ringing, not shining. Just there. Like keepsakes on a shelf." },
      { n: "But the name held. HAENIM. It came up on the card and stayed, steady, not a flicker, not a glitch, not a single stray letter, for the first time since the floor of the tower in April. She was who she was. Here. That was all. That turned out to be enough to hold a name still." }
    ], [
      { summon: 'haenim' },
      { n: "Haenim came up out of her the way she always had, veiled, and the name on the card held still, and the three charms on her sash were doing something none of them had done before. They weren't ringing. They weren't shining. They were humming, very softly, all three at once, in tune, a chord, the way three people hum when they're waiting together for the same train." },
      { n: "Under the veil, for half a second, she thought she saw the Persona's eyes. She thought they looked tired. She thought they looked like they were waiting for someone." }
    ]),
    { n: "She stood on the roof in the cold for a long time after Haenim had gone back into her. Below, through the lounge window, the whole impossible household was arguing about which Christmas movie to watch. She went down and let them argue. She was, she noticed, humming." }
  ] },

  // The secret road only (route-H, "the unfated life"): the night after the route form, Haechan, who understands the pull
  // better than anyone, is the one who lets her choose. links/haechan.js rank 9 refers back to it ("on the roof").
  { id: 'a6-unfated', date: '12/22', slot: 'late', flag: 'route-H', title: 'the unfated life', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
    { music: 'night' },
    { n: "The roof door was propped open with a brick. She'd known it would be. She'd come up anyway, in her coat this time, because she'd learned, and because some conversations you only get to have once and it seemed rude to have this one shivering." },
    { n: "He was at the railing with his hood down. Below them the city had its Christmas lights on, red and gold and white all the way to the bay, and somewhere under the dorm somebody was losing an argument about a movie at a volume that carried. He didn't turn around. He never did. He knew her footsteps the way she knew the sound of the front door." },
    { s: 'haechan', f: 'neutral', t: "The star. Of all of them." },
    { n: "He said it flat, to the bay, not unkindly. Like a man reading out the score of a game he'd bet against and had, somewhere in the second half, started rooting for." },
    { s: 'haechan', f: 'neutral', t: "It wasn't even ringing. I was on the stairs. The other two were going off like fire alarms and that one was just sitting there, and you reached past both of them and picked it up." },
    { choose: [
      { t: "I'm sorry.", then: [
        { s: 'haechan', f: 'serious', t: "Don't. Don't do that. That's the one thing you're not allowed to do tonight." }
      ] },
      { t: "You heard it?", then: [
        { s: 'haechan', f: 'happy', t: "I hear everything. It's a condition. I heard you not pick me in two languages." },
        { n: "The corner of his mouth went up a quarter of an inch, which on him was a laugh you could have heard from the street." }
      ] },
      { t: "(Stand next to him. Wait.)", then: [
        { n: "She stood at the railing, half a step to the side, the way he always stood beside her. He let the quiet go on long enough to count as an answer, and then a little longer, because he was him." }
      ] }
    ] },
    { s: 'haechan', f: 'neutral', t: "Here's the thing nobody's going to say to you, so I will. Since I'm the expert." },
    { s: 'haechan', f: 'neutral', t: "I've been pulled at you my whole life. Twice. A roof in one place and a harbor in the other and every single time, the same girl, like the floor tilts toward you and I'm a marble. Nobody asked me. I didn't pick it. I'd have picked it, probably, but nobody asked." },
    { s: 'haechan', f: 'serious', t: "Fuuka calls it the pull. The dorm's full of it. That's why I'm in a room on the top floor of a building I don't belong in, three walls from yours, because something decided I would be." },
    { s: 'haechan', f: 'neutral', t: "Being pulled at somebody isn't the same as being tied to them. I didn't know that till about a week ago. I watched you work it out on a platform in front of everybody, in your pajamas, in about four seconds." },
    { n: "She didn't say anything. Her throat had done the thing it did, closed and hot, the body getting there before she could. He still wasn't looking at her. He was looking at the lights, and his hands, loose on the rail, were very still." },
    { s: 'haechan', f: 'neutral', t: "So I'm saying it out loud on a roof so it counts. Go somewhere nobody arranged for you. Go be loud in a gym. Go be mean to that tall idiot about his ice cream and let the president count the money twice." },
    { s: 'haechan', f: 'serious', t: "You're allowed. I'm the one person here who knows what it costs me to say that, so it's worth double." },
    { ifRomance: 'haechan', then: [
      { n: "Then, finally, he turned and looked at her. Not flat. Not anything with a fight in it. Just him, the way he'd looked at her in the laundry room on the first night, like she was a light somebody had left on in a house he used to live in." },
      { choose: [
        { t: "(Kiss him. Once. Like a goodbye you both agreed on.)", then: [
          { n: "She kissed him. Once, in the cold, with the city going on being Christmas underneath them. He held her face in both hands the way he had in the laundry room, and they weren't shaking this time. That was the worst part, and the best one. He'd already decided. He'd decided before she came up the stairs." },
          { s: 'haechan', f: 'sad', t: "...There you go." },
          { n: "Not *there you are*. She heard the difference. She'd hear it for the rest of her life." }
        ] },
        { t: "Donghyuck.", then: [
          { s: 'haechan', f: 'flustered', t: "That's cheating. You can't say that one tonight. That one's for staying." },
          { n: "But he closed his eyes when she said it, like he was putting it somewhere it wouldn't leak out, and when he opened them he was smiling, all the way, the whole loud warm house of it, and it didn't stop halfway down." }
        ] }
      ] }
    ], else: [
      { n: "Then, finally, he turned and looked at her, and his face did something she'd never seen it do, which was sulk." },
      { s: 'haechan', f: 'sad', t: "You understand this is the second time. In one week. You friend-zoned me in a laundry room on the eighteenth and now you're moving to a dimension I'm not in." },
      { s: 'haechan', f: 'neutral', t: "I want it on the record that I've been very mature about both." },
      { choose: [
        { t: "You've been extremely mature.", then: [
          { s: 'haechan', f: 'neutral', t: "Thank you. I'm telling Hyein you said that. She's been making a list of my injuries. Out loud. At breakfast." },
          { n: "He said it so gravely that she laughed, helpless, into the collar of her coat, and he watched her laugh with the expression of a man who had been aiming for exactly that and would deny it under oath." }
        ] },
        { t: "(Hand him a can of the bad coffee.)", then: [
          { n: "She'd brought two. Of course she had. He took one, cracked it, grimaced at the first sip like it had personally wronged him, and kept drinking." },
          { s: 'haechan', f: 'happy', t: "Yeah. This is the friendship. Bad coffee and you leaving. I'll take it. I'm taking it. Look at me taking it." }
        ] }
      ] }
    ] },
    { n: "They stayed until their fingers went stupid. Going down, he took the brick out of the door, and the door swung shut on the roof with its long iron sigh, and this time he didn't stand looking at it like he'd closed something he'd meant to keep open. He just put the brick by the wall, where the next person would find it, and went down the stairs ahead of her, humming, and the song ended where it ended now, and he didn't go on past it." }
  ] },

  { id: 'a6-remember', date: '12/23', slot: 'evening', flag: 'year-goes-on', title: 'remember the year', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
    { music: 'joy' },
    { n: "Junpei declared bounenkai standing on the coffee table, with the authority of a man who'd read about it in a magazine. A forget-the-year party. You ate and drank and yelled until you couldn't remember a single bad thing that had happened since January, which in his case, he said, was going to take a while, so everybody had better pace themselves." },
    { n: "It had snowed on and off all week. Somebody had strung lights across the lounge windows that sagged in the middle like a smile, and somebody else had added a second string, and somebody else a third, and the room glowed like the inside of a paper lantern and smelled of soy and steam and oranges. Mitsuru had stopped setting out extra bowls. She'd borrowed two more tables from somewhere she refused to name, and they ran end to end from the lounge through the doorway into the front hall, and every seat was taken." },
    { n: "S.E.E.S., all of them, Ken and Koromaru and Aigis at the end nearest the kitchen. Hanni and Hyein, sharing a chair because there weren't enough. Jihoon and Cherry, not sharing a chair, arguing about it. Junkyu and Asahi and Hyunsuk and Jaehyuk, all four talking at once. Minji with the camera in her lap, not filming. Yunjin in the red puffer, indoors, because she said she'd earned it. Jaehyun at the very end of the table, his back to the wall, watching the door. Jungwon with Sunoo and the others, taking minutes, unasked. Haechan on the stairs, above everyone, eating off a plate on his knees, not quite at the party and not quite not." },
    { ifRank: { kiriko: 1 }, then: [{ n: "Kiriko had brought fortunes, and made everybody draw, and read Solar's and folded it straight back up again and put it in her sleeve, again, and said, *middle blessing, super boring*, again, and this time Solar laughed instead of worrying." }] },
    { ifRank: { mercy: 1 }, then: [{ n: "Mercy came straight from somewhere she'd decided to be useful, ate half a bowl of rice, and fell asleep sitting up with her chopsticks in her hand, and Junpei put the couch blanket over her shoulders like a man repaying a debt and wouldn't let anyone on that end of the table talk above a murmur for an hour." }] },
    { ifRank: { aphrodite: 1 }, then: [{ n: "Aphrodite took the head of the table again without being offered it, and blessed Junpei again, at length, and he said *you said that in JULY*, and she said that was what made it a blessing and not a weather report." }] },
    { ifRank: { sebastian: 1 }, then: [{ n: "Sebastian stood against the wall by the stairs with one can of soda, the way he had in July. This time he finished it, and sat down at the table between Ken and Fuuka, and stayed there, and nobody made a fuss about it, which he would tell Solar later was the nicest thing that had happened to him in two worlds." }] },
    { ifRank: { rohan: 1 }, then: [{ n: "Rohan wouldn't eat. He was drawing the whole table from the stairs, one long sheet folded like a fan, and when Junpei asked to see himself Rohan turned it round without a word, and Junpei looked at it for a long time and then said, quietly, for him, *dude, that's really me*." }] },
    { ifRank: { widowmaker: 1 }, then: [{ n: "Widowmaker didn't come in. She sat on the roof of the bicycle shed across the street in the snow where she could see the window, and Akihiko took her out a bowl at nine and came back without it and with an expression nobody could read." }] },
    { n: "And at the end of the table, by the kitchen door, in a seat Mitsuru had put there herself, Wren." },
    { n: "She'd come in. For the first time. She'd stood on the step in the snow for a long time with her cap pulled low, and Solar had gone out and stood with her, and then Mitsuru had come out too and said, very simply, *there's a seat*, and Wren had looked at Mitsuru the way she'd looked at the sea in July, and come in. She sat very straight in her coat with a bowl in front of her and her sleeves pulled over her hands, and looked at all of it. The lights. The noise. Jihoon doing an impression of Mitsuru that Mitsuru was pretending not to hear." },
    { s: 'wren', f: 'neutral', t: "Why would anyone want to forget a year?" },
    { n: "She said it to nobody in particular. A few people heard. Junpei, mid-laugh, stopped." },
    { s: 'junpei', f: 'neutral', t: "...Huh. I mean. 'Cause bad stuff happened, I guess." },
    { s: 'wren', f: 'neutral', t: "But good stuff happened too. All of this happened. You'd lose all of this." },
    { n: "The table went quiet, the long table, from the kitchen end down to the front hall, the way a room goes quiet in a wave. Junpei looked at his bowl. Then he got up on his chair." },
    { s: 'junpei', f: 'happy', t: "Okay. New rule. Executive decision. This is a REMEMBER the year party." },
    { s: 'junpei', f: 'happy', t: "Everybody says one thing. One thing from this year you never want to forget. Go." },
    { n: "So they did. One by one, the whole long table. Fuuka said the night they came up the stairs for her. Ken said the dog. Hyein said the mall, and then cried, and then said it again, properly. Jihoon said *the ice cream that didn't melt*, and wouldn't explain. Yunjin said *standing on the bottom of the sea*. Akihiko said, very fast, looking at his bowl, *a floor in the tower, in April*, and nobody asked him which floor." },
    { n: "It came round to Solar." },
    { choose: [
      { t: "The bench at the station.", then: [
        { n: "Down at the end of the table, Wren went very still, and then put her sleeve over her mouth, and her eyes did something under the cap that Solar couldn't see and didn't need to." }
      ] },
      { t: "All of you. This. Right now.", then: [
        { n: "Junpei said that was cheating. Everyone else agreed with her. Hyein threw a mandarin at her. She caught it." }
      ] },
      { t: "Being found.", then: [
        { n: "Akihiko looked up. So did Hanni, and Jihoon, and Yunjin, and Jaehyun at the end of the table, and Haechan on the stairs, and Jungwon, and Minji, every one of them who had come looking for her, all at once, and then all of them looked away again, at the same moment, as if they'd been caught at something." }
      ] }
    ] },
    { music: 'mystery' },
    { dark: true },
    { n: "At midnight, in the middle of Junpei's toast, the green came up." },
    { n: "The lights went out. The television died. Every phone on the table went dark. And for one second the whole room held its breath, the way rooms did, waiting for the coffins. Waiting for half the table to go tall and dark and still." },
    { n: "Nobody did. Not one of them. Down the whole long table, from the kitchen to the front hall, every single person stayed exactly who they were, in the green, holding their chopsticks, mid-laugh, looking at each other. S.E.E.S. and searchers and visitors. People from four worlds and more, and a girl in a porter's coat at the end by the kitchen door. All awake. All here." },
    { s: 'junpei', f: 'surprised', t: "...Huh." },
    { s: 'junpei', f: 'happy', t: "...Anyway. Cheers." },
    { n: "Everyone said cheers. In the green, in the dark, in the hour, a whole table full of people who weren't supposed to be awake, clinking glasses, and the sound went round the room like bells." },
    { dark: false }
  ] },

  // The single Christmas Eve picker (core.js christmasOptions): the route partners' written beats below, then every other
  // link with its own `christmas` scene ({ christmasOptions: true } expands into those, see scene.js), then everyone.
  { id: 'a6-christmas-eve', date: '12/24', slot: 'evening', flag: 'year-goes-on', title: 'christmas eve', place: 'Iwatodai Dorm · Lounge', time: 'Evening', consumes: true, scene: [
    { music: 'date' },
    // Who fits this route (route partners on their romance route; Stay: Akihiko, or Shinjiro's bedside).
    ...window.FEMC_STORY_KIT.anyOf('rt-RS', [['route-R'], ['route-S'], ['route-true']]),
    ...window.FEMC_STORY_KIT.anyOf('rt-R', [['route-R'], ['route-true']]),
    ...window.FEMC_STORY_KIT.anyOf('rt-SH', [['route-S'], ['route-H'], ['route-true']]),
    ...window.FEMC_STORY_KIT.anyOf('rt-H', [['route-H'], ['route-true']]),
    ...window.FEMC_STORY_KIT.anyOf('rt-stay', [['route-stay'], ['route-true']]),
    { ifRomance: 'haechan', then: [{ ifFlag: 'rt-RS', then: [{ flag: { 'xc-haechan': true } }] }] },
    { ifRomance: 'minji', then: [{ ifFlag: 'rt-R', then: [{ flag: { 'xc-minji': true } }] }] },
    { ifRomance: 'jungwon', then: [{ ifFlag: 'rt-SH', then: [{ flag: { 'xc-jungwon': true } }] }] },
    { ifRomance: 'jihoon', then: [{ ifFlag: 'rt-H', then: [{ flag: { 'xc-jihoon': true } }] }] },
    { ifRomance: 'akihiko', then: [{ ifFlag: 'rt-stay', then: [{ flag: { 'xc-akihiko': true } }] }] },
    { ifRank: { shinjiro: 10 }, then: [{ ifFlag: 'route-stay', then: [{ flag: { 'xc-shinjiro': true } }] }] },
    { n: "It snowed on Christmas Eve. Properly, for once, big slow flakes coming down past the lounge windows out of an orange city sky, and by four o'clock the street outside the dorm was white and silent, and the dorm, for the first time all month, was emptying." },
    { n: "Everybody was going somewhere. Yukari had a thing she wouldn't describe. Junpei had a plan he described at length. The searchers were scattering across Iwatodai in twos and threes, Hanni and Hyein to the mall to look at the lights, Cherry dragging Junkyu somewhere loud, and in the front hall, by the shoes, people kept stopping, in their coats, to look at Solar, and not say anything, and go out." },
    { n: "It was the kind of evening you spend with one person. Everybody knew it. She stood in the lounge with her coat on, and her phone in her hand, and knew it too." },
    { choose: [
      { t: "(Text Haechan.)", ifFlag: 'xc-haechan', flag: { 'xmas-haechan': true }, tally: { xmas: 'haechan' }, then: [
        { place: 'Port Island Station', time: 'Evening', bg: 'portisland-christmas', music: 'date' },
        { n: "He didn't text back. He was already outside. Of course he was. Leaning on the wall by the dorm gate in the snow with his hands in his jacket pockets and his headphones around his neck, not looking at the door, looking at the street, the way he waited for everything, as if he'd been going to stand there whether she came out or not." },
        { n: "They took the train to Port Island. They didn't talk. The Christmas lights on the station plaza were absurd, a whole tree of them and garlands on every lamppost and a speaker playing the same three carols, and he walked beside her through all of it half a step behind and to the side, and at the edge of the plaza, where the lights stopped, he put something in her hand without looking at her." },
        { n: "One earbud. The other was in his ear. He pressed play on something in his pocket and the song came in, her song, the one with no words, and it went past the place where it had always stopped, and past the four bars he'd hummed in the laundry room, and kept going, all the way, to an ending." },
        { n: "It had an ending. He'd finished it." },
        { n: "She didn't say anything. She couldn't. She stood at the edge of the Christmas lights in the snow with half a song in her ear and the other half in his, and he looked at her sideways, flat, unreadable, and then not unreadable at all." },
        { s: 'haechan', f: 'neutral', t: "...Took me long enough." },
        { n: "That was all he said. It was the most he'd ever said. She leaned her head on his shoulder in the snow and he let her, and they stood there until the song ended, and then he played it again." }
      ] },
      { t: "(Text Minji.)", ifFlag: 'xc-minji', flag: { 'xmas-minji': true }, tally: { xmas: 'minji' }, then: [
        { place: 'Iwatodai · Riverside', time: 'Evening', music: 'date' },
        { n: "Minji met her at the lamppost by the river. The flickering one. It had snow on top of it like a hat, and it was doing its worst, on and off and on, and Minji was standing under it with her camera in her hands and her cap on frontwards." },
        { s: 'minji', f: 'neutral', t: "Can I? Just once tonight. I'll ask again after, if you want. I'll ask twenty times." },
        { n: "Solar stepped into the light. It held. For once, for a whole minute, the lamp held steady, the way it only ever did when she was under it, and Minji filmed her standing there in the snow with the flakes coming down through the amber, and then lowered the camera and just looked." },
        { s: 'minji', f: 'flustered', t: "You stopped. You always stop, for me. You never perform when I'm looking. I don't know if you know how much that..." },
        { n: "She didn't finish. Solar reached out and took the camera out of her hands, very gently, and turned it round, and pointed it at Minji, who had never once in her life been on the other side of it, and pressed record." },
        { s: 'minji', f: 'flustered', t: "Sol. Sol, no, I'm not... I don't..." },
        { s: 'solar', f: 'happy', t: "Ask me again. Twenty times." },
        { n: "Minji laughed, helpless, her face going red in the cold and the amber, and stood there under the lamp being looked at, and let herself be, and that was the whole evening, the two of them taking turns in the light, until the snow had covered the bench and neither of them could feel their hands." }
      ] },
      { t: "(Text Jungwon.)", ifFlag: 'xc-jungwon', flag: { 'xmas-jungwon': true }, tally: { xmas: 'jungwon' }, then: [
        // Hoax route: the HOAX Jungwon (Yeobo's, making a boy who skips meals eat). strangers / true keep the sea bream.
        { ifFlag: 'route-H', then: [
        { place: "Iwatodai Strip · Yeobo's Cafe", time: 'Evening', music: 'date' },
        { n: "He was at Yeobo's after closing, with the chairs up on every table but one. Sunoo had left him the key, and a tray, and a word on the counter in red icing, EAT, which he had covered with a napkin out of dignity." },
        { s: 'jungwon', f: 'happy', t: "Sunoo made them. I'm only supervising. Please sit. I've been informed I'm not allowed to watch you eat unless I'm eating. I was informed by a croissant." },
        { n: "Two croissants on two plates, a heart piped on each in red, the snow coming down past the gold-fogged window. He pushed hers across first, and then looked at his own like a form he'd been asked to sign without reading it." },
        { s: 'jungwon', f: 'neutral', t: "Maeumi would have come. He's very small. It's a lot of travel. He sends his regards." },
        { choose: [
          { t: "It's terrible.", then: [
            { n: "It came out of her like a line she'd been handed, and he looked up, startled, and then the dimples came, both of them, deep, and nothing about them was polite." },
            { s: 'jungwon', f: 'happy', t: "It's Sunoo's. I'm telling him. He'll cry." },
            { n: "Then he ate his. All of it, every flake, while she watched, and he let her watch, which was the present, and they both knew it." }
          ] },
          { t: "It's perfect.", then: [
            { s: 'jungwon', f: 'flustered', t: "It's a little burnt on the left. But thank you." },
            { n: "She pushed his plate an inch toward him and said *Won*, the way the name came out of her, unexplained, and he went still, and then he ate it, all of it, with his ears going red the whole way through." }
          ] }
        ] }
        ], else: [
        { place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'date' },
        { n: "He was already in the dorm kitchen. He'd asked Mitsuru, three days before, formally, in writing, whether he might use it on the twenty-fourth. He had an apron on. He had a fish." },
        { s: 'jungwon', f: 'happy', t: "Please sit. You're not to help. You'll only cut yourself, and then I'll have to watch you stitch it, and I won't be able to concentrate." },
        { n: "She sat on the counter and watched him cook. He was very good. He cooked the way he did everything, precisely, without wasted movement, the knife going through the fish like a sentence he'd planned, and he didn't talk, and she didn't, and the snow came down outside the window, and it was the most peaceful hour she'd spent all year." },
        { n: "Sea bream rice, in a pot he'd found somewhere. Two bowls. He served her first. He sat across from her and watched her eat the first mouthful with his face perfectly still, which she knew by now meant everything." },
        { choose: [
          { t: "It's terrible.", then: [
            { n: "It came out of her like a line she'd been handed. Saying it felt like the kindest thing she had ever said to anyone. His face went completely still. Then the dimples came, both of them, deep, and nothing about them was polite." },
            { s: 'jungwon', f: 'happy', t: "...Thank you. I'll make it again, then. Until it's worse." }
          ] },
          { t: "It's perfect.", then: [
            { s: 'jungwon', f: 'flustered', t: "It isn't. The rice is a little soft. But thank you." },
            { n: "He ate his own very slowly, not looking at her, and she watched his ears go red, all the way through the meal." }
          ] }
        ] }
        ] }
      ] },
      { t: "(Text Jihoon.)", ifFlag: 'xc-jihoon', flag: { 'xmas-jihoon': true }, tally: { xmas: 'jihoon' }, then: [
        { place: 'Paulownia Mall', time: 'Evening', music: 'date' },
        { n: "Jihoon texted back before she'd finished typing. *outside. obviously. ive been outside for an hour. its SNOWING sol. i have FROSTBITE*" },
        { n: "He had a large tub of ice cream. In the snow. He held it up when she came out like a cop holding up a badge, and she laughed so hard she had to hold the gate." },
        { s: 'jihoon', f: 'happy', t: "Merry Christmas. You're welcome. Nobody else in this dimension would stand in the snow for you. I checked. They're all inside. Weak. Every one of them." },
        { n: "His hands, when he passed her a spoon, weren't quite steady. He saw her see it, and put them in his pockets, and said it was the cold. It was mostly the cold." },
        { n: "They went to the mall and walked round the lights and ate the ice cream on a bench in front of the giant tree with two plastic spoons from the convenience store, freezing, both of them, and he complained the whole time, and she insulted him the whole time, and it was perfect. Then, about halfway down the tub, he went quiet. Jihoon quiet. A medical event." },
        { s: 'jihoon', f: 'neutral', t: "...I've been saying it for years, you know. Out loud. Constantly. The light of your disgusting life. Your favorite human being. Rightfully my job." },
        { s: 'jihoon', f: 'sad', t: "I thought if I said it loud enough it'd count as a joke. I didn't think you'd ever actually hear it." },
        { choose: [
          { t: "I always heard it.", then: [
            { n: "He looked at her. Then at the ice cream. Then he put his spoon down in the tub very carefully, like it might go off, and put his arm around her on the bench, and pulled her into his side, and didn't say anything, which was, Hyein would tell her later, a second medical event, and the first time in recorded history there'd been two in one day." }
          ] },
          { t: "Say it quieter, then.", then: [
            { n: "He tried. It came out loud anyway. It came out, *the light of your disgusting life*, at a volume that turned heads at the next bench, and his ears went red, and he said, *that was quiet for me*, and she said, *I know*, and leaned her head on his shoulder." }
          ] }
        ] }
      ] },
      { t: "(Text Akihiko.)", ifFlag: 'xc-akihiko', flag: { 'xmas-akihiko': true }, tally: { xmas: 'akihiko' }, then: [
        { place: 'Port Island Station', time: 'Evening', bg: 'portisland-christmas', music: 'date' },
        { n: "He asked her to meet him at the big tree on the Port Island plaza, which was not like him at all, and when she got there he was standing under it in his coat and a gray scarf with snow in his hair and a bandage on his eyebrow from something he wouldn't explain, holding a small red box with a gold ribbon like it was a grenade with the pin out." },
        { cg: 'romance-akihiko-christmas' },
        { n: "He held it out. He didn't say anything. He was looking at somewhere over her left shoulder with tremendous concentration." },
        { s: 'akihiko', f: 'blushing', t: "It's... it's not much. I didn't know what you'd want. I asked Yukari and she said I was hopeless, which, fine." },
        { n: "She put her hand over her mouth. She didn't mean to. It just went there. Inside the box, on white tissue, there was a small cheap picture frame from the convenience store, and inside the frame, instead of a picture, a strip of white tape gone gray at the edges from everybody's thumbs, in blunt square capitals: PINK, SOLAR AGREES." },
        { s: 'akihiko', f: 'blushing', t: "It was on the fridge. At the club. Since May. I took it off this morning. The first-years think somebody stole it. I'm letting them think that." },
        { s: 'akihiko', f: 'blushing', t: "It's the first time I wrote your name down. I wanted you to have something that... I don't know. That was from here. That's all." },
        { cg: null },
        { n: "She didn't say anything. She couldn't. She put her arms round his neck, under the tree, in the snow, in front of the whole plaza, and he went completely still, every muscle, and then, carefully, the way he'd stand in a ring when he'd decided not to block a punch, he let himself be held, and put his arms round her, and held on." }
      ] },
      { t: "(Go to the hospital.)", ifFlag: 'xc-shinjiro', flag: { 'xmas-shinjiro': true }, tally: { xmas: 'shinjiro' }, then: [
        { place: 'Tatsumi Memorial Hospital', time: 'Evening', music: 'tender' },
        { n: "Visiting hours ended at eight. She got there at six with a container of curry she'd made herself from the card he'd given her in September, the one she kept flat in her inside pocket, in handwriting she could read now without trying." },
        { n: "He was the same. He was always the same. Stable. The machines breathing for the room. The snow outside the window coming down past the parking lot lights. She sat in the chair by the bed and took the lid off the curry so the room would smell like the dorm kitchen at one in the morning, and talked to him. About everything. The year. The household. Who'd burned what. She told him about Ken, and the dog. She told him the curry wasn't as good as his. She told him she'd followed the card exactly and it still wasn't, and that she'd decided that was his fault." },
        { n: "Under her hand, on the blanket, his fingers moved. Once. Very slightly. Like someone turning over in their sleep to get comfortable." },
        { n: "She didn't call the nurse. She didn't move. She sat there with her hand under his until visiting hours were over, and then for a while after, because the nurse on duty had looked in, and seen them, and gone away again, and closed the door." }
      ] },
      { christmasOptions: true },
      { t: "(Spend it with everyone.)", flag: { 'xmas-friends': true }, tally: { xmas: 'friends' }, then: [
        { place: 'Paulownia Mall', time: 'Evening', music: 'joy' },
        { n: "She didn't text anyone. She went to the mall, where the lights were, and found them all anyway, the way you find people in a crowd when they've been looking for you. Hanni and Hyein first, by the big tree, arguing about whether you could wear white in winter. Then Jihoon and Cherry, arguing about nothing. Then Yunjin, who joined in on both sides. By nine there were fifteen of them, taking up an entire section of Chagall Café, being too loud, and the staff had given up." },
        { n: "Nobody paired off. Nobody needed to. Somewhere around ten, Junpei turned up with Yukari and Fuuka and a cake from the convenience store, and somebody started singing, badly, and everybody else joined in, worse, and Solar sat in the middle of all of it with frosting on her fingers, being loud, and thought that if she had to spend a Christmas with one person it would have been very hard to choose, and she was so glad she didn't have to." }
      ] }
    ] }
  ] },

  { id: 'a6-blue-moon', date: '12/31', slot: 'late', flag: 'year-goes-on', title: 'blue moon', place: 'Iwatodai Station · Platform', time: 'Night', scene: [
    { music: 'night' },
    { n: "New Year's Eve. A blue moon, the second full moon in a month, the radio said, very rare, and hung over the bay like something placed there on purpose. The dorm had been strange all day. Mitsuru on the phone with her door shut. Akihiko running laps of the block in the cold until Yukari went out and made him stop. Aigis at the window, watching the moon the way she'd watched the horizon on Yakushima. Nobody said anything about it. It wasn't Solar's story. She was learning to let some things not be." },
    { n: "She went to the station at eleven. Wren was on the bench. Of course she was." },
    { s: 'wren', f: 'neutral', t: "You came. On New Year's. You should be with your people. They've got soba. I could smell it from here." },
    { s: 'wren', f: 'sad', t: "I'm going to sit here all night, I think. Till the year's over. I'd like to see one end on purpose. Just one. To see what it's like." },
    { choose: [
      { t: "(Sit with her all night.)", flag: { 'sat-with-wren': true }, then: [
        { n: "She sat. Wren didn't say anything, and didn't need to, and leaned against her shoulder, and they watched the last trains of the year come in and go out, full of people in paper hats and people asleep and people kissing in the doorways, and at midnight, in the green, the station went still, and the hour came and went, and somewhere a temple bell started ringing out the old year, a hundred and eight times, far off over the city, and Wren counted every one of them under her breath." },
        { n: "At a hundred and eight she stopped counting." },
        { s: 'wren', f: 'neutral', t: "It ended. The year. It just... ended. And I'm still here. And so are you." },
        { s: 'wren', f: 'happy', t: "That wasn't so bad. Was it? That wasn't so bad at all." },
        { n: "They sat on the bench until the sky over the bay went gray, and then pink, the first morning of the year, and Wren watched it come up with her cap pushed back a little, a very little, as if she wanted to see it better." }
      ] },
      { t: "Come back with me. Come and have soba.", then: [
        { s: 'wren', f: 'neutral', t: "No. Thank you. I'd like to do this one by myself, I think. I'd like to find out if I can." },
        { n: "So Solar left her there, on the bench, under the blue moon, and went home to the soba and the noise, and stood at the lounge window at midnight watching the green come down over the city, and thought of a girl counting temple bells by herself on a platform, and didn't know if she'd done the kind thing or the easy one." }
      ] },
      { t: "(Sit for a while. Then go home.)", then: [
        { n: "She sat for an hour. They didn't say much. At a quarter to twelve Wren said, *go on, go home, they'll be counting heads*, and Solar went, and at the top of the stairs she looked back, and Wren lifted one long sleeve without turning around, the way she always did, as if she knew." }
      ] }
    ] }
  ] },

  { id: 'a6-new-year', date: '1/1', slot: 'after', flag: 'year-goes-on', title: 'a blank fortune', place: 'Naganaki Shrine', time: 'Daytime', scene: [
    { bg: 'naganaki-shrine-newyear' },
    { music: 'joy' },
    { n: "The whole impossible household went to Naganaki Shrine on New Year's Day, which meant a crowd of twenty-odd people in coats coming up the shrine steps at once, half of them in borrowed yukata over their sweaters because Hyein had found a rental shop, and the old women selling amazake by the gate stopping to stare." },
    { cg: 'holiday-new-year' },
    { n: "Minji filmed the whole climb and narrated it under her breath like a nature documentary. Hyein swung the rental shop's paper bag like a trophy. Koromaru wore a red-and-white rope collar somebody had tied on him at the gate and was very proud of it." },
    { ifMet: 'kiriko', then: [
      { n: "Kiriko, who had shrine duties nobody had given her, kept one hand on the bell rope and rang it for anyone who hesitated." }
    ], else: [
      { n: "A girl in a fox mask kept one hand on the bell rope and rang it for anyone who hesitated, as if it were her job. It might have been." }
    ] },
    { n: "Everyone threw coins. Everyone clapped twice. Jihoon threw a five-hundred-yen coin and announced it was an investment. Cherry said the gods could see through him. Junpei made a wish out loud by accident and then had to throw another coin to cancel it." },
    { n: "Solar stood in front of the offering box with her eyes closed and her hands together and found, like the first time, that she didn't know what to wish for. Not because there was nothing. Because there was too much, in too many directions, and every one of them had a face." },
    { n: "Haechan stood at her shoulder with his scarf up to his nose and didn't say anything, which for him was nearly a prayer." },
    { cg: null },
    { ifMet: 'kiriko', then: [
      { n: "Kiriko found her by the omikuji stand. She'd been sweeping the shrine since dawn because she couldn't help it, and she had a fortune folded small between two fingers, already drawn, and she held it out." },
      { s: 'kiriko', f: 'neutral', t: "Yours. I drew it this morning. Don't freak out." },
      { n: "Solar unfolded it. It was blank. Not a curse. Not a blessing. A slip of white paper with the shrine's stamp at the top, and nothing written under it at all." },
      { s: 'kiriko', f: 'happy', t: "Blank means it's not written yet. Kiriko's rules. Not bad, not good. Yours." },
      { s: 'kiriko', f: 'neutral', t: "...It's the only one I ever drew for you that I didn't hide. So." }
    ], else: [
      { n: "She drew a fortune at the omikuji stand. She unfolded it. It was blank. Not a curse. Not a blessing. A slip of white paper with the shrine's stamp at the top, and nothing written under it at all. The priest at the stand looked at it and frowned and offered her another, and she shook her head, and kept it." }
    ] },
    { n: "She folded it in half and put it in her student handbook, the one she carried everywhere, next to the things she'd kept this year without deciding to. A strip of photo-booth pictures, three left. A gum wrapper that smelled of cinnamon. A ticket stub from the monorail on the day she'd met two girls in a mall. Glitter that had never come off the inside cover." },
    { n: "A blank page, she thought. Not written yet. She was getting used to those." }
  ] },

  { id: 'a6-elizabeth-visits', date: '1/9', slot: 'after', flag: 'year-goes-on', title: 'a guest', place: 'Iwatodai Dorm · Lounge', time: 'Daytime', scene: [
    { music: 'dorm' },
    { n: "Elizabeth rang the doorbell twice. Nobody in the dorm ever rang the doorbell. It went through the building like an alarm, and five people came down the stairs at once to see what had happened, and found her standing on the step in her blue dress and her little blue hat with the book under one arm, in the snow, looking up at the building with frank, bright delight." },
    { s: 'elizabeth', f: 'happy', t: "Good afternoon. I've come to visit. I'm told this is a thing people do. I've brought a cake. I've never brought a cake. I'm not certain it survived the journey. It was a very strange journey." },
    { n: "The cake had not survived the journey. Nobody said so. Mitsuru, who had come down last and stopped dead on the stairs at the sight of a woman she had never seen in her life holding a crushed cake on her doorstep, recovered faster than anyone Solar had ever seen recover from anything, and said *please come in*, and Elizabeth said *how gracious*, and came in, and stood in the middle of the lounge turning slowly round, looking at everything." },
    { n: "She looked at the couch. She looked at the television, and touched it, and said *how warm*. She found the rice cooker in the kitchen and talked to it for some time, in a low, respectful voice, as though it were a small elderly relative, and when Junpei asked what she was doing she said she was being polite to it, since it so clearly did so much for everyone and nobody ever thanked it." },
    { n: "Koromaru came and lay down on her feet. She looked down at him with an expression of total wonder and didn't move for twenty minutes." },
    { s: 'elizabeth', f: 'neutral', t: "He's very heavy. Is this a gesture of affection or a form of arrest?" },
    { s: 'ken', f: 'neutral', t: "...Both, I think." },
    { n: "Later, when the others had drifted off to give them room, Elizabeth sat on the couch with the book on her knees and Koromaru still on her feet and looked at Solar for a long time." },
    { s: 'elizabeth', f: 'serious', t: "I came to tell you about the sixth of March. The full moon. The train will come into the station at midnight, and stop. It's been coming all year. On the sixth it will finally arrive." },
    { s: 'elizabeth', f: 'neutral', t: "When it's over, whatever over turns out to mean, I'll be there. On the platform. I'll open the doors. All of them. Every guest who came into this city will have a door home, and I'll hold it for them." },
    ...window.FEMC_STORY_KIT.byRoute([
      { s: 'elizabeth', f: 'neutral', t: "And yours. A door that smells of snow and a pink hallway. I've seen it in the margins. It's already ajar." }
    ], [
      { s: 'elizabeth', f: 'neutral', t: "And yours. A door that smells of salt and barley tea. I've seen it in the margins. It's already ajar." }
    ], [
      { s: 'elizabeth', f: 'neutral', t: "And yours. A door with a dog barking behind it. I've seen it in the margins. It's already ajar." }
    ], [
      { s: 'elizabeth', f: 'sad', t: "Except yours. You won't need one. You've chosen the room you're in. It's a very good room. It has a rice cooker." },
      { s: 'elizabeth', f: 'neutral', t: "I'll hold the others open for everyone who came for you. That will be the hard part, I think. Not for me." }
    ], [
      { s: 'elizabeth', f: 'serious', t: "And yours. Which is the strange part. I've looked, and your door isn't one door. It's three, side by side, and none of them will open alone. I don't know what that means. I suspect you'll have to find out on the platform." }
    ]),
    { s: 'elizabeth', f: 'neutral', t: "I wanted you to hear it in a room with a rice cooker in it. It seemed kinder than the elevator." },
    { choose: [
      { t: "Thank you for coming.", then: [
        { s: 'elizabeth', f: 'happy', t: "Thank you for having me. I've had a wonderful time. I've met a dog. I've ruined a cake." }
      ] },
      { t: "Will I see you again? After?", then: [
        { s: 'elizabeth', f: 'neutral', t: "I don't know. I so rarely don't know things. You've been very good for me that way." }
      ] }
    ] },
    { n: "She left at dusk. At the door she shook hands with everyone, very formally, including Koromaru, and said goodbye to the rice cooker on her way past the kitchen, and went down the steps into the snow with the book under her arm, and at the gate she lifted one gloved hand in a small formal wave, like a girl seeing someone off at a train station, and was gone." }
  ] },

  { id: 'a6-verso', date: '2/20', slot: 'after', flag: 'year-goes-on', title: 'the verso', place: 'The Velvet Room', time: '', scene: [
    { music: 'velvet' },
    { n: "Elizabeth was holding the book closed against her chest when the elevator doors opened, both arms around it, the way she'd held it on the very first morning. She didn't open it straight away. She looked at Solar for a long time." },
    { s: 'elizabeth', f: 'serious', t: "I've done something I don't do. I've looked at a thing twice." },
    { s: 'elizabeth', f: 'neutral', t: "In April I turned your page over and there was nothing on the back of it, and I didn't look again, because it felt like distrust. I've been thinking about Rohan. About the girl printed on the back of someone. About the smudges, pressing through from the other side, harder every time a line was written on the front." },
    { s: 'elizabeth', f: 'serious', t: "So this morning I turned it over again." },
    { bg: 'velvetroom-1' },
    { n: "She opened the book. She found the page, Solar's page, with its three hands of writing in the margins and its scatter of lines across the white. She lifted it by the corner, carefully, and turned it." },
    { n: "The back of the page was full." },
    { n: "Edge to edge. Small, dense, careful writing, every line filled, the way a page fills when someone has been writing on it very slowly for a very long time, alone, in the dark. And all of it backwards. Every letter reversed. Mirror writing, running right to left, the way you'd write if you were writing from the other side of the glass." },
    { n: "At the top, where a name would go, there was a name. Backwards. Four letters." },
    { n: "Solar didn't need a mirror to read it." },
    { s: 'elizabeth', f: 'neutral', t: "I can't read mirror writing. I've never been able to. My master usually does that part. He finds it terribly easy. He says it's simply a matter of standing on the right side." },
    { n: "There was a small hand mirror on the velvet seat beside her. Solar didn't know if it had always been there. Elizabeth looked at it. Solar looked at it. Neither of them picked it up." },
    { choose: [
      { t: "Don't read it.", then: [
        { s: 'elizabeth', f: 'neutral', t: "No. I wasn't going to. It isn't mine." },
        { s: 'elizabeth', f: 'serious', t: "And I don't think it was written to be read. I think it was written to be held up against something. To keep the front of the page from tearing." }
      ] },
      { t: "(Put your hand flat on the back of the page.)", then: [
        { n: "It was warm. The front had been warm in June, the way a page is warm when a hand has just been taken off it. The back was warmer. The back was warm the way a hand is warm. And under her palm, very faintly, she felt it press back." }
      ] },
      { t: "How long has it been there?", then: [
        { s: 'elizabeth', f: 'neutral', t: "Since April, I think. Since before. Since the beginning. I simply never turned it over." },
        { s: 'elizabeth', f: 'sad', t: "Someone has been writing on the back of you all year, Solar. Very quietly. So that you wouldn't notice. I believe it was the kindest thing they knew how to do." }
      ] }
    ] },
    { n: "Elizabeth turned the page back over, so the front faced up, and closed the book, gently, with both hands, the way you'd close a door on someone sleeping." },
    { s: 'elizabeth', f: 'neutral', t: "Two weeks. The sixth. Whatever's written on the back, I expect you'll have to read it on the platform. Not in here. Not in a mirror. Face to face." },
    { n: "On the way down she held the edge of the velvet seat with both hands. Not because the elevator was moving fast. Because her hands needed something to hold that wasn't a sleeve." }
  ] },

  { id: 'a6-snow', date: '3/3', slot: 'late', flag: 'year-goes-on', title: 'first snow', place: 'Iwatodai Dorm · Rooftop', time: 'Night', scene: [
    { music: 'night' },
    { n: "It started a little after nine, properly, big slow deliberate flakes coming down one at a time out of the orange city sky, as if each of them had been considered first, and by ten the rooftop railing had a white edge on it as thick as a finger. Hanni and Hyein had dragged her up there in coats over their pajamas because, Hanni said, first big snow, you had to be outside for it, it was a rule." },
    { s: 'hyein', f: 'happy', t: "The lake's doing it at home right now. I can feel it. Two feet. They'll cancel classes. I can feel it in my BONES." },
    { s: 'hanni', f: 'happy', t: "Make a wish. First big snow, you have to make a wish." },
    { n: "Solar didn't know if that was a real rule or a Hanni rule. She suspected there wasn't a difference." },
    { choose: [
      { t: "(Make a wish.)", then: [
        { n: "She closed her eyes and made one, and didn't let herself hear what it was, which was the only way she'd ever known how to keep one." }
      ] },
      { t: "(Catch a flake on your sleeve.)", then: [
        { n: "It landed on her coat sleeve, perfect, six-sided, and lasted about two seconds, and Hyein said *that's so you*, and refused to explain." }
      ] }
    ] },
    ...window.FEMC_STORY_KIT.byRoute([
      { s: 'hyein', f: 'happy', t: "Hanni's making you pancakes. When we get back. First snow day pancakes. She's been planning it since December." },
      { s: 'hanni', f: 'happy', t: "With the little chocolate chips. You always pick them out and then eat them separately. Like a psychopath." },
      { s: 'hyein', f: 'serious', t: "And THEN you're getting on a train to your parents' and you're texting us the whole time. Every stop. I want a picture of every single stop." },
      { n: "Solar laughed, and the snow came down, and for the first time it didn't feel like a promise somebody was making to someone else. It felt like hers. Saturday. Then home. Then pancakes, and a train, and a pink hallway, and a single on the second floor." }
    ], [
      { n: "Hanni was quiet for a while, watching it come down. Then she said, without looking at Solar, that she was going to save her the pancakes anyway. At home. On the counter. Just in case." },
      { s: 'hyein', f: 'sad', t: "We'll eat them. Obviously. But we'll make them." },
      { n: "Solar didn't say anything. She put one arm round each of them, and they stood there in the snow, the three of them, and none of them said goodbye, because it wasn't Saturday yet, and you don't say it before the platform." }
    ], [
      { n: "Hanni was quiet for a while, watching it come down. Then she said, without looking at Solar, that she was going to save her the pancakes anyway. At home. On the counter. Just in case." },
      { s: 'hyein', f: 'sad', t: "We'll eat them. Obviously. But we'll make them." },
      { n: "Solar didn't say anything. She put one arm round each of them, and they stood there in the snow, the three of them, and none of them said goodbye, because it wasn't Saturday yet, and you don't say it before the platform." }
    ], [
      { n: "Hyein went very quiet. Then, in a small voice, very unlike her, she asked if it snowed a lot here. If Solar would be cold. If someone would make sure she wore a proper coat." },
      { s: 'hanni', f: 'sad', t: "Somebody will. I've seen them. They'll make sure." },
      { n: "Solar put one arm round each of them. They stood there in the snow until Hyein's teeth were chattering. Nobody said goodbye. It wasn't Saturday yet." }
    ], [
      { s: 'hanni', f: 'neutral', t: "I don't know what happens on Saturday, Sol. Nobody does. You've got that look. Like you're going to do something nobody's ever done." },
      { s: 'hyein', f: 'happy', t: "Whatever it is, we'll make the pancakes. Just in case." },
      { n: "Solar put one arm round each of them, and they stood there in the snow until Hyein's teeth were chattering, and none of them said goodbye, because none of them knew yet if they'd need to." }
    ])
  ] },

  { id: 'a6-mirror', date: '3/4', slot: 'evening', flag: 'year-goes-on', title: 'the first thing people see', place: 'Iwatodai Dorm · Hallway', time: 'Evening', cast: { 'mirror-woman': 'A Woman in the Mirror' }, scene: [
    { music: 'mystery' },
    { n: "The clock over the lounge said ten to seven, and the dorm was making its evening noises, the television and the kettle and somebody losing at something upstairs. She was on her way to the stairs, and she glanced into the long mirror by the front door the way everybody did on their way past, and there was a woman standing behind her." },
    { n: "Not in the hall. In the mirror. Fifty, perhaps, and beautiful in the way that takes a great deal of work and never lets any of it show; a cream cardigan, a single strand of pearls, black hair pinned up in a chignon so smooth it looked lacquered. She wasn't looking at Solar's face. She was looking at Solar's hair." },
    { s: 'mirror-woman', t: "Hold still." },
    { n: "Solar held still. There are voices you obey before you've decided to, and this was one of them, cool and low and perfectly level, the voice of somebody who had never once in her life needed to raise it." },
    { n: "In the glass the woman's hands came up. Solar felt her hair tie go, felt cold quick fingers in her hair, twisting it, folding it up against the back of her head, and pins going in one after another from a cardigan pocket without the hands ever once looking for them. She knew the order of the pins. Her own hands had learned it from these." },
    { s: 'mirror-woman', t: "A Lee daughter's hair is the first thing people see." },
    { choose: [
      { t: "And the last thing they forget.", then: [
        { n: "It came out in her own voice, flat and a little bored, like the second half of a sentence she'd been finishing since she was small." },
        { s: 'mirror-woman', t: "Good. So you do listen." }
      ] },
      { t: "Eomma.", then: [
        { n: "The hands stopped. For one second, in the glass, the woman's face did something it had clearly been trained very hard never to do. Then the hands went on, and put in the last pin, a little too firmly." },
        { s: 'mirror-woman', t: "Don't. Not where people can see." }
      ] },
      { t: "(Watch her hands.)", then: [
        { n: "She watched. Ringless, except a plain band. Very steady. They didn't shake once. They were, she understood, the steadiest hands she had ever seen, and they belonged to someone who had decided a long time ago that shaking was something you did afterward, alone, with the door shut." }
      ] }
    ] },
    ...window.FEMC_STORY_KIT.byRoute([
      { n: "The woman stepped back and looked at the chignon from one side and then the other, the way you'd look at a painting you'd hung, and nodded, once, and was gone, and the mirror was just the dorm's mirror. Solar left the hair up all evening. She didn't know why. It felt like a goodbye she owed someone, and she paid it." }
    ], [
      { n: "The woman stepped back and looked at the chignon, and nodded, once. Then, just for a moment, before she went, she put one cool hand on the back of Solar's neck, under the pinned hair, and left it there." },
      { s: 'mirror-woman', t: "Come home. Your father hasn't slept." },
      { n: "Then the mirror was just the dorm's mirror, and Solar stood in front of it with her hair up and her mother's hand still cool on her neck, and didn't take the pins out, not that night, not to sleep. She'd be home on Sunday. She'd let her mother take them out herself." }
    ], [
      { n: "The woman stepped back and looked at the chignon from one side and then the other, and nodded, once, and was gone. Solar left the hair up all evening, and didn't know why, except that it felt like a goodbye she owed someone, and she paid it." }
    ], [
      { n: "The woman stepped back and looked at the chignon from one side and then the other, and nodded once, and her face, just at the end, just before she was gone, did something very small that could have been grief or could have been permission. Solar stood in front of the empty mirror for a long time. Then she took the pins out, one by one, in the same order they'd gone in, and let her hair down, and went into the lounge, where nobody had ever once cared what it looked like." }
    ], [
      { n: "The woman stepped back and looked, and nodded, once, and was gone. Solar left the hair up. She didn't know yet if it was a goodbye or a promise. She thought, on Saturday, she might find out it could be both." }
    ])
  ] },

  { id: 'a6-playdate', date: '3/5', slot: 'after', flag: 'year-goes-on', title: 'playdate', place: 'Naganaki Shrine', time: 'After School', cast: { jake: 'Jake' }, scene: [
    { music: 'day' },
    { n: "The cold had gotten into everything, the shrine gravel frozen into little ridges, the stone fox by the offering box wearing a cap of frost, and Koromaru was by the torii anyway, because Koromaru was always there, sitting with his breath going up in small white puffs like a very short dragon." },
    { n: "Jake was there too, crouched in front of him in a navy school coat with a scarf wound up to his nose, scratching Koromaru behind the ears with total devotion. He saw Solar and lit up like a porch light." },
    { s: 'jake', f: 'happy', t: "Solar! Hi! I come and see him every day. Is that weird? He's so good. He reminds me of Nana. He's nothing like Nana. He reminds me of Nana." },
    { s: 'jake', f: 'sad', t: "We were going to do the playdate. Layla and Nana. I kept saying it. I said it for months. It was going to be the cutest thing that ever happened in our whole town." },
    { s: 'jake', f: 'neutral', t: "And then you were gone, and we never did it." },
    { n: "Koromaru put his chin on Jake's knee and sighed, the deep heavy sigh of a dog who understands that something sad is being said and has decided to be underneath it." },
    { choose: [
      { t: "Tell me about Layla.", then: [
        { n: "So he told her. Small and brown and white, in a knitted sweater his mother made, very serious about sniffing things. Afraid of the vacuum. Brave about everything else. He told her for ten minutes without stopping, scratching Koromaru the whole time, and Solar listened to every word of it with her hands in her pockets, and somewhere in the middle of it, very clearly, she could feel the tug of a leash in her hand. A big dog with silly short legs. Wagging so hard his back half swung." }
      ] },
      { t: "(Crouch down and scratch Koromaru too.)", then: [
        { n: "Koromaru, faced with two people scratching him at once, lay down in the frozen gravel and rolled onto his back with all four paws in the air and his eyes closed, completely undone, and Jake laughed so hard he fell over." }
      ] }
    ] },
    ...window.FEMC_STORY_KIT.byRoute([
      { s: 'jake', f: 'neutral', t: "Tell Nana hi for me. If you... I mean. You know. If you see him." },
      { n: "She said she would. She didn't know if it was a lie. She hoped, very much, that somewhere it would turn out not to be." }
    ], [
      { s: 'jake', f: 'neutral', t: "Tell Nana hi for me. If you see him. I know you're not going to. I know. Just in case." },
      { n: "She said she would. She didn't know how to tell him that she'd be somewhere with no Nana at all, by the sea. She let him have the just in case." }
    ], [
      { s: 'jake', f: 'happy', t: "We'll do it when we're home. Okay? The playdate. Layla and Nana. You promised. You promised like a hundred times." },
      { n: "She hadn't. Not that she remembered. She said yes anyway. It felt, saying it, like a promise she'd been making for years." }
    ], [
      { s: 'jake', f: 'sad', t: "Tell Nana... no. I'll tell him. I'll tell him you said hi. He'll know. Dogs know." },
      { n: "She crouched down and put her face in Koromaru's fur, so Jake wouldn't see it, and Koromaru let her, and Jake very kindly looked at the frost on the stone fox for a while." }
    ], [
      { s: 'jake', f: 'happy', t: "We'll do it someday. I've decided. Somewhere. I don't know where. But we will." },
      { n: "She said yes. It was the only answer that had felt true all week." }
    ])
  ] },

  { id: 'a6-last-train', date: '3/6', slot: 'evening', flag: 'year-goes-on', title: 'the last train', place: 'Iwatodai Station · Platform', time: 'The Dark Hour', scene: [
    { music: 'night' },
    { n: "Everybody went. Nobody had to say so. At eleven o'clock on the sixth of March the whole impossible household put on its coats in the front hall of the dorm without a word, S.E.E.S. and searchers and every visitor who'd ever eaten at that long table, and walked to the station in the snow in a long untidy line, and nobody talked, and the snow came down on all of them the same." },
    { n: "Elizabeth was already on the platform. She stood under the handless clock with the book held against her chest in both arms, and when she saw them coming up the stairs she lifted one gloved hand, the small formal wave, like a girl seeing someone off at a train station." },
    { n: "And on the last bench, very straight, in a porter's coat cut for somebody twice her size, with a ticket held against her chest and a scrap of pink ribbon round her knuckles, Wren." },
    { n: "Solar went and sat down beside her. Everyone else stayed back by the stairs. They knew. Everybody knew by now. It was eleven fifty-nine." },
    { s: 'wren', f: 'neutral', t: "You came. I knew you would. I've been counting the minutes. I've never counted minutes before. They're very long." },
    { music: 'mystery' },
    { dark: true },
    { n: "The green came down. The snow stopped in the air, every flake of it, hanging over the platform like a held breath. And the horn sounded, so close it shook the frost off the benches, and the train came in." },
    { n: "Where there were no rails, there were rails. Black and green and gleaming, it came out of the dark at the end of the platform unhurried, its lantern windows lit gold, carriage after carriage of the kept asleep against the glass, and it slowed, and stopped, exactly in front of the bench, as if it had been aiming for them all year. The lead car had no lights at all. Three dark windows. A door opened in its side without anyone opening it." },
    { s: 'wren', f: 'sad', t: "We could just ride. It never has to arrive. That's the whole point of it. It never, ever has to arrive anywhere." },
    { n: "Wren stood up. She held out her hand, the one without the ticket, small and cold in a sleeve much too long for it." },
    { s: 'wren', f: 'sad', t: "Please. Please get on with me. I'm so tired. Aren't you tired? I've watched you all year. Three lives. Three of you. Everyone needing you to be someone. A daughter. A candidate. A sister. A bride. Somebody who's fine." },
    { s: 'wren', f: 'sad', t: "You don't have to be any of them in there. You don't have to be anybody. Please." },
    { choose: [
      { t: "(Hold your ground. Answer her.)", then: [
        { n: "She didn't take the hand. She didn't move away from it either. She stood up off the bench and faced her, and the Evoker stayed in its holster, and she said, *I know. I know I'm tired. I'm still not getting on.*" }
      ] },
      { t: "(Raise the Evoker.)", flag: { 'wren-struck-first': true }, then: [
        { n: "Her hand went to the holster. The Evoker came up to her temple, cold, and Wren looked at it, at the gun at Solar's head, and didn't flinch. Her face did something worse than flinching. It understood." }
      ] }
    ] },
    { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 1, title: 'Last Call', desc: 'Wren, on the platform, begging. She doesn’t attack. She asks.', notes: 'Phase 1 (talk battle). Wren never attacks; each turn she asks, and the ask lands as a status for one of the three lives’ pressures (Fear, Charm, Distress). Hold (guard and answer) is an action. Attacking her works and is never punished; it shortens the phase. The scene already recorded whether Solar raised the Evoker first (flag wren-struck-first; the story doesn’t gate on it). Ends when Wren’s resolve breaks (scripted interrupt is fine).', forced: true } },
    { music: 'fullmoon' },
    { n: "Wren stopped asking." },
    { n: "She stood very still in front of the open door of the lead car with her empty hand still held out, and the hand dropped, slowly, and her face went somewhere Solar couldn't follow. And behind her, the train moved. Not forward. Up." },
    { cg: 'story-facing-wrens-shadow' },
    { n: "It rose off the rails like something standing up out of water. The engine reared, and the carriages coiled up behind it, around and around, rails spiraling out of nothing to hold them, and out of the top of it, out of the smoke and the lantern light, a woman unfolded. Enormous. In a gown the color of midnight and tarnished silver, soaked like rain, a porter's coat around her shoulders like a shroud, a crown of signal lamps burning green. A black veil over her face, and where her face should have been, behind it, a station clock, cracked, with no hands." },
    { n: "On her sash, broken charms. A bell split down the middle. A jade ring in two pieces. A star pin bent double. A pair of headphones with the cord cut." },
    { n: "In her raised hands and hanging from her arms, three lanterns. And in each lantern, asleep, curled up small, a girl." },
    { n: "Solar. In a pink hallway's sweatshirt with her hair falling over her face. Solar, in a navy silk dress, her hair pinned, her hands folded over a jade ring. Solar, in a navy school blazer, asleep on a stack of worksheets. All three of them. All three of her, asleep in the lantern light, peaceful, the way the kept were peaceful. Nobody ever having to choose." },
    { n: "Behind her on the platform, the shadow the giant woman cast was not a woman's. It was a wolf. Black, and enormous, and very patient." },
    { s: 'fuuka', f: 'surprised', t: "Solar, it's... it's not a Shadow like the others. It's... it sounds like you. It sounds exactly like you, turned inside out. The moon to your sun." },
    { s: 'akihiko', f: 'serious', t: "Then we hit it until it sounds like nobody." },
    ...window.FEMC_STORY_KIT.byRoute([
      { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 2, title: 'No Stops', desc: 'The Last Train and the dark Haenim. Three lanterns, three sleeping girls. Only one of them can be reached tonight.', notes: 'Phase 2, route lock RUNNERS. Three lantern targets (Runners / strangers / Hoax). Only the Runners lantern (the bell) can be broken; the other two read “You can’t reach this one.” Breaking it wakes that life and weakens the train. The kept in the rear cars wake as the train weakens. Full party.', forced: true } }
    ], [
      { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 2, title: 'No Stops', desc: 'The Last Train and the dark Haenim. Three lanterns, three sleeping girls. Only one of them can be reached tonight.', notes: 'Phase 2, route lock STRANGERS. Three lantern targets (Runners / strangers / Hoax). Only the strangers lantern (the jade ring) can be broken; the other two read “You can’t reach this one.” Breaking it wakes that life and weakens the train. The kept in the rear cars wake as the train weakens. Full party.', forced: true } }
    ], [
      { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 2, title: 'No Stops', desc: 'The Last Train and the dark Haenim. Three lanterns, three sleeping girls. Only one of them can be reached tonight.', notes: 'Phase 2, route lock HOAX. Three lantern targets (Runners / strangers / Hoax). Only the Hoax lantern (the star pin) can be broken; the other two read “You can’t reach this one.” Breaking it wakes that life and weakens the train. The kept in the rear cars wake as the train weakens. Full party.', forced: true } }
    ], [
      { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 2, title: 'No Stops', desc: 'The Last Train and the dark Haenim. Three lanterns, three sleeping girls, and none of them can be reached. Beat the train itself.', notes: 'Phase 2, route lock STAY (hardest). None of the three lanterns can be broken (all read “You can’t reach this one”); the party must beat the train/Shadow body directly with no lantern weakening. The kept in the rear cars still wake as it weakens. Full party.', forced: true } }
    ], [
      { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 2, title: 'No Stops', desc: 'The Last Train and the dark Haenim. Three lanterns, three sleeping girls, and every one of them within reach.', notes: 'Phase 2, route TRUE (provisional). All three lanterns can be broken; each one wakes that life and weakens the train. The kept in the rear cars wake as the train weakens. Full party.', forced: true } }
    ]),
    { cg: null },
    { n: "It came down. Not into ash. The train came down out of the air carriage by carriage onto its rails, slow, heavy, groaning, and stopped, and stood there, steaming, all its windows lit. The giant woman came apart into rain. Real rain, cold, falling for one second through the green and then hanging there with all the frozen snow. And out of it, onto the platform, small, on her knees, in a porter's coat much too big for her, Wren." },
    { cg: 'story-wren-cap' },
    { n: "Her cap fell off." },
    { n: "It just fell. It slid off the back of her head and rolled once on the platform and lay there, and her hair came down. Long, and black, and falling over her shoulders and her face, exactly the length and the color and the weight of the hair Solar pinned up every morning without asking her hands to." },
    { n: "She looked up. Without the cap. Without anything over it. Solar's face. Softer. More tired. Frightened all the way through, the way it had been frightened on a floor in a tower in April, looking up at a girl in a corridor who said, *I'm sorry. It was supposed to be quiet here.*" },
    { n: "Solar's face. Her own. It had been her own the whole time." },
    { music: 'tender' },
    { n: "Behind her, the platform had gone quiet. When she looked round, the others were fading. Not leaving. Fading, the way people fade at the edges of a dream, Akihiko and Jihoon and Hyein and all of them, still there, still standing by the stairs, but very far away, as if the platform had grown a mile long between one breath and the next. It was just the two of them. A girl on her knees and a girl standing over her, under a clock with no hands." },
    { s: 'wren', f: 'sad', t: "...I'm sorry. I'm sorry. It was supposed to be quiet." },
    { s: 'wren', f: 'sad', t: "I took you out of all of them. All three. The night you couldn't bear it anymore, I heard you, and I took you somewhere nothing of yours ever had to end, and I made a room for you, and a uniform, and a bench, and I thought, if I'm very quiet, and very kind, and I never let her see my face, she'll stay. She'll stay and she'll never have to choose and she'll never have to be anybody." },
    { s: 'wren', f: 'sad', t: "I'm you. I'm the part of you that couldn't do it. I'm so sorry. I was so scared." },
    { n: "Solar stood over her on the platform. The Evoker was in her hand. She didn't remember drawing it." },
    { cg: null },
    // Final requirements for the true ending (checked here, on the true path only).
    ...window.FEMC_STORY_KIT.anyRank('d10-rN', ['minji', 'hanni', 'hyein', 'jaehyun'], 10),
    ...window.FEMC_STORY_KIT.anyRank('d10-sN', ['yunjin'], 10),
    ...window.FEMC_STORY_KIT.anyRank('d10-hN', ['jihoon', 'cherry'], 10),
    ...window.FEMC_STORY_KIT.anyRank('d10-hc', ['haechan'], 10),
    ...window.FEMC_STORY_KIT.anyRank('d10-jw', ['jungwon'], 10),
    ...window.FEMC_STORY_KIT.anyOf('dist10', [['d10-rN', 'd10-sN', 'd10-hN'], ['d10-rN', 'd10-sN', 'd10-jw'], ['d10-rN', 'd10-hc', 'd10-hN'], ['d10-rN', 'd10-jw', 'd10-hN'], ['d10-rN', 'd10-hc', 'd10-jw'], ['d10-hc', 'd10-sN', 'd10-hN'], ['d10-hc', 'd10-sN', 'd10-jw'], ['d10-hc', 'd10-jw', 'd10-hN']]),
    { ifFlag: 'route-true', then: [
      { ifRank: { wren: 10, akihiko: 10 }, then: [{ ifFlag: ['door-R9', 'door-S9', 'door-H9', 'dist10'], then: [{ flag: { 'true-final': true } }] }] },
      { ifFlag: 'true-final', else: [
        { flag: { 'true-fallback': true } },
        { ifFlag: 'elig-R', then: [{ flag: { 'fb-R': true } }] },
        { ifFlag: 'elig-S', then: [{ flag: { 'fb-S': true } }] },
        { ifFlag: 'elig-H', then: [{ flag: { 'fb-H': true } }] }
      ] }
    ] },
    ...window.FEMC_STORY_KIT.anyOf('normal-route', [['route-R'], ['route-S'], ['route-H'], ['route-stay']]),
    { choose: [
      { t: "(Take her hand.)", ifFlag: 'true-final', then: [] },
      { t: "(The bell.) Go home. To Syracuse.", ifFlag: 'fb-R', flag: { 'route-R': true, 'route-true': false }, tally: { solstice: 'R' }, then: [] },
      { t: "(The jade ring.) Go home. To the house by the sea.", ifFlag: 'fb-S', flag: { 'route-S': true, 'route-true': false }, tally: { solstice: 'S' }, then: [] },
      { t: "(The star pin.) Go home. To Hanlim.", ifFlag: 'fb-H', flag: { 'route-H': true, 'route-true': false }, tally: { solstice: 'H' }, then: [] },
      { t: "Stay. Here.", ifFlag: 'true-fallback', flag: { 'route-stay': true, 'route-true': false }, tally: { solstice: 'stay' }, then: [] },
      { t: "(Raise the Evoker.)", ifFlag: 'normal-route', then: [] }
    ] },
    { ifFlag: 'true-final', then: [
      { n: "She put the Evoker away." },
      { n: "She knelt down on the cold platform, in front of the girl in the coat, close, face to face, and reached out, and took her hand. It was cold. It was small. It was hers. It was exactly as cold as her own hands had been every morning since April, pinning her hair up for a world that had made a place for her." },
      { s: 'wren', f: 'surprised', t: "...What are you doing? You're supposed to... you're supposed to beat me. That's how it goes. You beat the part of you that can't, and you go home, and you're fine. You're always fine." },
      { s: 'solar', f: 'sad', t: "I'm not fine." },
      { n: "It came out of her in her own voice. Not the polite one. Not the presidential one. Not the one she used for a dinner over the sea, or a pink hallway, or a gym full of plastic chairs. The other one. The one she didn't use much." },
      { s: 'solar', f: 'sad', t: "I'm not fine. I'm scared of every ending. All of them. At once. I don't know how to choose. I've never known how." },
      { s: 'solar', f: 'serious', t: "So I'm not going to leave you here. You're not the part of me I have to beat. You're the part of me I have to bring." },
      { n: "Wren looked at their two hands. At her own face, looking back at her, without a cap, without a veil, without anything over it at all. And Solar watched her understand, the way you'd watch someone finally read the back of a page." },
      { s: 'wren', f: 'neutral', t: "...Thou art I." },
      { s: 'solar', f: 'serious', t: "And I am thou." },
      { n: "She held on. Wren held on back. And the girl in the porter's coat didn't fade, and didn't vanish, and didn't go anywhere at all. She came in. The way warmth comes into cold hands. Into Solar's palm, and up her arm, and into her chest, and settled there, small and frightened and hers, the way a bird settles into a hand that's been held out long enough." },
      { summon: 'haenim-unveiled' },
      { cg: 'story-haenim-unveiled' },
      { n: "And Haenim rose up out of her over the platform, gold and pink and enormous, and lifted her veil." },
      { n: "There was no blinding light. That was the thing. Everyone on that platform would remember it, afterward, for as long as they remembered anything. All year the Persona had shone so bright you couldn't look at her, a sun you had to look away from. Now she lifted the veil and the light that came out was warm and gold and bearable. A sun you could look at. A face under it. Tired, and kind, and frightened, and unhidden." },
      { n: "Her face. Solar's. Just hers." },
      { n: "On the sash, all three charms rang at once. Not over each other. Together. In tune. The bell and the jade and the star, the chord she'd heard at the solstice, and it went out over the platform and the city and the bay and further, much further, into three places at once, and in all three of them, somewhere, at the same moment, a girl asleep in a lantern opened her eyes." },
      { cg: null }
    ], else: [
      { n: "She raised the Evoker." },
      { n: "Wren didn't fight back. She knelt on the platform with her hair down and her face bare and looked up at the gun at Solar's temple without flinching, the way you'd look up at a train you'd finally decided to let leave without you." },
      { s: 'wren', f: 'sad', t: "...Then go." },
      { s: 'wren', f: 'neutral', t: "Go on. It's all right. Go and be what they need. You'll be wonderful at it. You always are." },
      { battle: { id: 'finale', op: 'finale', kind: 'scripted', script: 'finale', segment: 3, title: 'End of the Line', desc: 'Just the two of them on the platform. She doesn’t fight back.', notes: 'Phase 3, normal routes. Solar alone vs. Wren (cap off). Wren takes no actions. One or two turns; the route form of Haenim (Sunna / Mazu / Nike, or steady Haenim on Stay) should be the summon used. Cannot lose.', forced: true } },
      ...window.FEMC_STORY_KIT.byRoute([
        { summon: 'haenim-sunna' },
        { n: "Sunna came up over the platform under her own stage lights, the bell on her sash shining like a spotlight, and when the light had passed there was nobody on the platform in front of Solar at all. Just a porter's cap, lying where it had fallen." }
      ], [
        { summon: 'haenim-harbor' },
        { n: "Mazu came up over the platform like a harbor light seen from the sea, the jade on her sash shining steady and green, and when the light had passed there was nobody on the platform in front of Solar at all. Just a porter's cap, lying where it had fallen." }
      ], [
        { summon: 'haenim-nike' },
        { n: "Nike came up over the platform with her wings open, the star on her sash shining like a flashbulb that didn't stop, and when the light had passed there was nobody on the platform in front of Solar at all. Just a porter's cap, lying where it had fallen." }
      ], [
        { summon: 'haenim' },
        { n: "Haenim came up over the platform veiled and steady, her name holding still on the card, the three dark charms on her sash not ringing, and when the light had passed there was nobody on the platform in front of Solar at all. Just a porter's cap, lying where it had fallen." }
      ], [
        { summon: 'haenim' },
        { n: "Haenim came up over the platform, and when the light had passed there was nobody in front of Solar at all. Just a porter's cap, lying where it had fallen." }
      ]),
      { n: "Solar picked it up. It was warm. She held it for a long time. She would be very good at being what they needed, she thought. She'd always been. She had no idea why that felt, standing there, like the saddest thing she'd ever known about herself." }
    ] },
    { music: 'tender' },
    { n: "The train breathed out. One long sigh of steam, all down its length, like something going to sleep. And all down the platform, one after another, the doors of the carriages opened." },
    { n: "The kept woke up." },
    { n: "Slowly. The way people wake on a train at the end of the line, confused, stiff, patting their pockets, reaching for bags. A man in armor. A girl with a schoolbag. People from more worlds than Solar had words for, stepping down onto the platform in the frozen snow, blinking at the green, at each other, at the clock with no hands. And first, from the carriage nearest the bench, holding a long black case against her chest, a woman in a blue coat, buttoned to the throat." },
    { n: "Solar went to her. She didn't decide to. She walked down the platform through the waking people and stopped in front of her, and the woman looked at her with tired, puzzled, ordinary eyes, a stranger she'd walked past twice on the station steps and never stopped for." },
    { s: 'solar', f: 'neutral', t: "Hanne." },
    { n: "The woman's face changed. Just a little. The way a face changes when somebody, in a strange city at midnight, knows your name." },
    { n: "And Elizabeth, under the handless clock, opened the book." },
    { n: "She opened it wide, both arms, and held it up, and every page in it began to glow. Every page. Every guest. And all down the platform, in the green air, where there had only ever been the platform's edge and the dark, doors appeared. Ordinary doors. A wooden one. A metal one with a push bar. A shrine gate. A tavern door with a round top. A sliding glass door with rain on the far side of it. Dozens of them, standing on the platform in a long row, each one opening a crack, and through each crack, the smell of somewhere else." },
    { s: 'elizabeth', f: 'happy', t: "Everyone who came, may go. The doors are open. I'll hold them for as long as it takes. I've got all night. I've got, I believe, quite a lot longer than that." },
    { n: "The visitors went first. Every one of them who'd come to the long table. One by one, to their doors, and some of them hugged her, and some of them nodded, and some of them just looked at her once over their shoulder with the face you give someone you're going to tell stories about for the rest of your life, and went through, and the doors closed softly behind them, and were gone." },
    ...window.FEMC_STORY_KIT.byRoute([
      // Runners: the strangers and Hoax searchers go home without her.
      { n: "Then the others. The ones who'd come for her from places she wasn't going back to." },
      { n: "Yunjin stood at a door that smelled of salt and diesel, in the red puffer, with her arms crossed so tight it looked like it hurt. She didn't come and hug Solar. She said if she did, she'd never go through. She just looked at her across the platform, a long look, the whole year in it, and said *wifey*, once, not loud, and went." },
      { n: "Jihoon stood at a door with a dog barking behind it, and couldn't make himself open it, and Cherry opened it for him, and pushed him through by the back of his hoodie, and turned in the doorway and pointed at Solar and said, *I'm still number one. Don't you dare forget that.* Then she went too, and the crew after her, Junkyu crying, Asahi pretending not to." },
      { n: "The council went in a crowd, the way they'd come into Yeobo's: Sunoo crying into Heeseung's sleeve, Jake waving with both arms, Jay hauling Sunghoon away from a farewell speech, Niki already halfway through the door, yelling for Jay." },
      { n: "Jungwon was last. He stood at his door, very straight, and bowed to her. A real one. Formal, from the waist. When he came up, his face was completely still, which she knew now, which she'd learned like a language, meant everything. He touched his watch. It was running. He went through, and the door closed, and it didn't slam. It closed very, very quietly." },
      { n: "Haechan didn't go to any door. He came and stood beside her. Half a step behind, and to the side. And when she looked up at him, he was looking at a door at the far end of the platform, a door with snow on the far side of it and a pink hallway beyond, and he said, flat, *I'll wait*. And did." }
    ], [
      // strangers: the Runners and Hoax searchers go home without her.
      { n: "Then the others. The ones who'd come for her from places she wasn't going back to." },
      { n: "Hanni and Hyein stood at a door that smelled of sugar cookie, holding hands, and Hyein was crying so hard she couldn't speak, and Hanni spoke for both of them. *We'll make the pancakes,* she said. *Just in case.* And then, because she was Hanni, she checked Solar one last time against the list she kept, hands, face, the way she stood, and found every single thing present, and smiled, and took her sister through." },
      { n: "Minji didn't film it. She stood at her door with the camera in her hands and didn't lift it. She just looked, the whole time, without anything between them. *You're the same in the frame,* she said. *Even now.* Then she went." },
      { n: "Jaehyun went last of them. He didn't hug her. He stood in front of her for a long moment and read the field, all of it, the way he did, and arrived. *I remember enough for both of us,* he said. *I'll keep doing it.* And went through, and didn't look back, because he was the kind of person who'd decided a long time ago that looking back was a kindness you couldn't afford to show." },
      { n: "Then Jihoon, and Cherry, and the crew, through a door with a dog barking behind it. Cherry pointed at her from the doorway. *Still number one.* Jihoon couldn't look at her at all, and then did, at the last second, and mouthed something she didn't need to hear." },
      { n: "Then the council, his six, in a crowd: Sunoo crying into Heeseung's sleeve, Jake waving with both arms, Jay hauling Sunghoon off a farewell speech, Niki halfway through the door already. Every one of them looked back at Jungwon at the edge of the platform, and Sunoo mouthed *eat something*, and went." },
      { n: "Yunjin didn't go to any door. Neither did Haechan, or Jungwon, the two of them standing a careful distance apart at the edge of the platform, not looking at each other, both looking at a door that smelled of salt and barley tea, waiting for her the way you'd wait at the end of a pier for a boat you knew was coming in." }
    ], [
      // Hoax: the Runners and strangers searchers go home without her.
      { n: "Then the others. The ones who'd come for her from places she wasn't going back to." },
      { n: "Hanni and Hyein, at a door that smelled of sugar cookie. *We'll make the pancakes,* Hanni said. *Just in case.* Hyein couldn't speak at all. She just held Solar's face in both hands for a second, hard, like she was memorizing the shape of it, and let go." },
      { n: "Minji, at her door, not filming. Jaehyun, who didn't hug her, who stood and read the field and said *I remember enough for both of us*, and went through without looking back, because he'd decided long ago that it was a kindness he couldn't afford." },
      { n: "Yunjin, at a door that smelled of salt and diesel, who did hug her, so hard her ribs hurt, and said into her shoulder, *you'd better be happy. You'd better be so happy it's annoying*, and went." },
      { n: "And Haechan. His door was two doors, a pink hallway and a house by the sea, both at once, and he didn't go to it first. He came down the platform to her through the waking strangers with his hands in his pockets, and stopped half a step away, to the side, the way he'd stood next to her all winter." },
      { s: 'haechan', f: 'neutral', t: "Don't make the face. You picked the one nobody picked for you. Good. Somebody in this building had to." },
      { n: "He didn't hug her. He took one of her hands out of her coat pocket and put something in it, and closed her fingers round it with his own. A can. Pink and black, cold, a logo like claw marks. The last one in any world that wasn't his." },
      { s: 'haechan', f: 'sad', t: "Don't waste it." },
      { n: "Then he walked back up the platform to his door, and stood in it for a second, half in one life and half in the other, and looked at her down the whole length of the station, flat, and then not flat at all. He hummed something. She couldn't hear it from there. She knew which song. She knew it ended now. He went through, and the door that was two doors closed on both of them at once." },
      { n: "Jihoon didn't go to any door. Neither did Cherry, or the crew, or Jungwon, who stood a little apart from them with his hands behind his back and his watch running again, his whole council around him: Sunoo with a paper bag, Heeseung counting heads, Jake and Niki arguing, Jay and Sunghoon pretending to be above it. They stood in a loud untidy knot at the far end of the platform by a door with a dog barking behind it, arguing about nothing, the way you argue at a bus stop when the bus is coming, and every so often all of them looked over at her at once, to check she was still there." }
    ], [
      // Stay: every searcher goes home without her.
      { n: "Then the others. All of them. Every one who had come for her." },
      { n: "They stood at their doors in a long row down the platform, in the frozen snow, and she walked along it, the whole length of it, and stopped at every single one, because it was the only thing she could do for them, and it was nowhere near enough." },
      { n: "Hanni and Hyein, at a door that smelled of sugar cookie, holding each other up. *We'll make the pancakes,* Hanni said. *Every snow day. Forever. Just in case.* Hyein didn't say anything. Hyein put her arms round Solar's neck and held on so hard Hanni had to unpeel her, finger by finger, and walk her through backwards, still reaching." },
      { n: "Yunjin, at a door that smelled of salt and diesel. *Your appa,* she started, and couldn't finish. She hugged Solar instead. *I'll sit up with him,* she said into her hair. *Every low tide. I'll sit up with him so he's not by himself.* And went, with her shoulders very straight, in the red puffer, and didn't look back, because if she had, Solar knew, she would never have gone." },
      { n: "Jihoon, at a door with a dog barking behind it. He didn't joke. That was the worst part. For the first time in his life, Park Jihoon couldn't find a single joke. He stood there with his hands at his sides and looked at her and said, *it's really quiet without you being mean to me*, and then Cherry took his hand, and he let her, and they went through together, and the crew after them, Junkyu waving until the door shut." },
      { n: "Minji, who didn't film. Jaehyun, who stood in front of her for a long time and didn't read the field, for once, didn't arrive anywhere, just stood there being her brother, and then put his hand on her head, once, the way you would with a much younger sister, and went." },
      { n: "Jungwon. At his door. He bowed. Formal, from the waist, perfectly correct, and when he straightened up his face was so still it hurt to look at, and he said, very politely, *thank you for having been my opponent*, and then, so quietly she almost didn't hear it, one more word, in a register he had never once used with her, and went through before she could answer." },
      { n: "His council went after him in a crowd, because they'd never once let him go anywhere alone: Sunoo crying into Heeseung's sleeve, Jake waving with both arms, Jay hauling Sunghoon away from a farewell speech, Niki already halfway through the door, yelling for Jay." },
      { n: "Haechan was last. Of course he was. He stood at his door, which was two doors, a pink hallway and a house by the sea, both at once, and didn't go through either. He looked at her. He didn't ask her to come. He'd never asked her anything. He just looked, the whole year in it, flat, and not flat at all." },
      { n: "*Solar,* he said. Just that. Her name. Like a door left open a crack." },
      { n: "Then he went." },
      { n: "She stood on the platform in front of a long row of closed doors in the frozen snow, every one of them shut, every one of them somebody who'd crossed the whole world for her and gone home without her, and Akihiko came and stood beside her, not touching her, not saying anything, just there. Just letting her know where he was." }
    ], [
      // True (final or fallback handled by flags above): nobody leaves yet.
      { ifFlag: 'true-final', then: [
        { n: "Then it was the searchers' turn. And not one of them moved." },
        { n: "They stood at their doors in a long row, every one who had come for her, Hanni and Hyein and Yunjin and Jihoon and Cherry and Minji and Jaehyun and all of them, and the two boys who'd each crossed twice, and every one of them was looking at her, and none of them was going." },
        { s: 'hyein', f: 'happy', t: "We're not going without her. Obviously. Hello. We just got her BACK." },
        { n: "Three doors at the end of the platform, side by side, that Elizabeth hadn't opened. A pink hallway. A house by the sea. A front door with a dog barking behind it. They stood closed, waiting, with a thin line of light under each one, and Elizabeth looked at them and then at Solar, with the book open in her arms, and smiled the most delighted smile Solar had ever seen on her." },
        { s: 'elizabeth', f: 'happy', t: "Not yet. Tomorrow night. The last minutes of the last hour. I believe that's when doors like these open. They've waited all year. They can wait one more day." }
      ], else: [
        { n: "Then the others. The ones who'd come for her from places she'd chosen not to go back to, tonight. They went, one by one, at their doors, and she stood and watched each of them go, and it was as hard as it was always going to be." }
      ] }
    ]),
    { n: "At the end, when the doors had closed that were going to close, the train stood empty on its rails, every window dark now, even the lead car. Three windows, side by side, dark and clear and empty, as if something that had been sleeping in them all year had finally got up and gone home." },
    { ifFlag: 'true-final', then: [
      { n: "The bench was empty. The last bench, under the timetable. For the first time since April there was nobody on it. Solar looked at it for a long time, and didn't feel the drop she'd been afraid of, the empty-bench drop. Because she knew where Wren was. Wren was going home with her. All three homes. At once." }
    ], else: [
      { n: "The bench was empty. The last bench, under the timetable. For the first time since April there was nobody on it, and there was never going to be anybody on it again, and Solar stood with a porter's cap in her hands and looked at the empty bench until the green drained out of the sky and the snow began to fall again, and the station lights came on, white and ordinary, and buzzing, all the way down the platform." }
    ] },
    { dark: false }
  ] }
);
