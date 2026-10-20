/* Small, once-per-playthrough routines. Arrival events, not optional link ranks, establish who is here.
   These replace a normal morning/lunch beat or precede the evening menu; they do not spend free time. */
window.FEMC_GAME_DAILY_LIFE = [
  { id: 'girls-school-gate', after: '9/14', slot: 'early', schoolOnly: true, events: ['a4-names'],
    place: 'Gekkoukan High · Gate', time: 'Morning', bg: 'outside-school', scene: [
      { n: "Hanni carried Solar's bag all the way from the monorail, despite being asked twice to give it back, and Hyein walked on the other side picking a loose thread out of her cuff. At the school gate Hanni handed it over. Neither girl followed her through." },
      { s: 'hanni', f: 'happy', t: "Okay! You go learn things. We're going to the bakery. I found one that sells the soft rolls." },
      { s: 'hyein', f: 'neutral', t: "And then the fabric shop. Hanni's coming to supervise my budget. She's very strict. She let me buy one button yesterday." },
      { choose: [
        { t: "Meet me here after school?", then: [{ s: 'hanni', f: 'happy', t: "Yes! What time? Write it down. We have nothing but time and I still don't trust us." }] },
        { t: "You know the way back?", then: [{ s: 'hyein', f: 'serious', t: "Three turns and the vending machine that ate my money. I've got landmarks." }] }
      ] },
      { n: "Hanni waved until Solar went inside. From the shoe lockers she could still see them at the gate, bent over the same scrap of paper, Hyein pointing one way and Hanni gently turning the paper around." }
    ] },
  { id: 'hanni-packed-lunch', after: '9/16', slot: 'lunch', schoolOnly: true, events: ['a4-names'],
    place: 'Gekkoukan High · Classroom', time: 'Lunch', bg: 'gekkoukan-classroom-day', scene: [
      { n: "There was a container in Solar's bag that hadn't been there when she'd packed it. Hanni's handwriting on a strip of tape said *lunch, not a snack,* and underneath, in different handwriting, *i checked. there's no weird fruit strings. ur welcome.*" },
      { s: 'yukari', f: 'neutral', t: "You have a whole catering service now." },
      { choose: [
        { t: "Apparently I need supervision.", then: [{ s: 'yukari', f: 'happy', t: "You'd call a canned coffee lunch if we let you. I'm taking their side." }] },
        { t: "Want some?", then: [{ s: 'yukari', f: 'happy', t: "If there's enough. Oh. There's enough for six people. Yeah, okay." }] }
      ] },
      { n: "There was a folded shopping list under the lid too, bread and eggs and something crossed out so thoroughly she couldn't read it. Hanni must have put it in by mistake. Solar tucked it into her pencil case to take home." }
    ] },
  { id: 'hyein-dorm-offcuts', after: '9/18', slot: 'evening', events: ['a4-names'],
    place: 'Iwatodai Dorm · Lounge', time: 'Evening', bg: 'iwatodaidorm-livingroom-night', scene: [
      { n: "Hyein had come back from the shops with a paper bag full of offcuts and was spreading them across yesterday's newspaper on the lounge table. Upstairs, her room had acquired a row of little bags hanging from the wardrobe handles. Hanni's door, beside it, had a shopping list taped to it. Solar had started checking that list before she went out." },
      { s: 'hyein', f: 'serious', t: "The small pieces are cheaper. You just have to know what they're going to be. This one's a pocket." },
      { s: 'solar', f: 'neutral', t: "For what?" },
      { s: 'hyein', f: 'neutral', t: "Haven't decided. But it's going to have an excellent pocket." },
      { n: "Hanni came down with a basket of clean towels and asked which pile was for keeping. Hyein looked at every pile, then at Hanni. Hanni sighed and set the towels on the stairs. Solar moved the television remote out from under the newspaper and sat down." }
    ] },
  { id: 'jihoon-morning-route', after: '9/21', slot: 'early', schoolOnly: true, events: ['a4-ice-cream'],
    place: 'Iwatodai Station', time: 'Morning', bg: '0d489c888283c69d5c7848eb84174bc6', scene: [
      { n: "Jihoon came downstairs when Solar did, with a folded street map in his pocket and two different socks on. He'd put his spare-room key on a ring Mitsuru had found in a drawer. It made a small noise against his coins all the way to the station." },
      { s: 'jihoon', f: 'happy', t: "I'm learning the city today. Very independent of me. You're welcome." },
      { s: 'solar', f: 'neutral', t: "Where are you going?" },
      { s: 'jihoon', f: 'neutral', t: "Arcade. Then I'm finding somewhere that sells normal ice cream in a normal-sized tub. These are both essential errands." },
      { choose: [
        { t: "Try not to get lost.", then: [{ s: 'jihoon', f: 'happy', t: "I got to a different universe. I can find a shop, Sol." }] },
        { t: "Bring something back for everyone.", then: [{ s: 'jihoon', f: 'serious', t: "Everyone? That's a household budget, not an errand. Fine. If Junpei complains about the flavor, he's out." }] }
      ] },
      { n: "He stopped outside the ticket gates and stepped aside to let her through. By the time Solar looked back he had the map open with both hands, held very close to his face, and was pretending not to hear the station attendant offering to help." }
    ] },
  { id: 'jihoon-dorm-errands', after: '9/23', slot: 'evening', events: ['a4-names', 'a4-ice-cream'],
    place: 'Iwatodai Dorm · Kitchen', time: 'Evening', bg: 'iwatodaidorm-kitchen', scene: [
      { n: "Jihoon was unpacking a grocery bag on the kitchen counter when Solar got home. Two cartons of milk, eggs, a bag of chips. He set a receipt on the fridge under a magnet, then took it down and flattened it against his leg before putting it back." },
      { s: 'jihoon', f: 'neutral', t: "Mitsuru gave me a list. I did the list. I'm contributing to society." },
      { s: 'hanni', f: 'happy', t: "You got everything! Thank you!" },
      { s: 'jihoon', f: 'serious', t: "Don't sound so surprised. I can read." },
      { n: "Hyein looked up from the table to point out that chips weren't on the list. Jihoon pointed at Junpei, who had arrived in the doorway at exactly the sound of the bag opening, and informed her that he'd anticipated demand. Solar put the milk away while they argued. His map was on the table beside Hyein's fabric, with the route home drawn in pen." }
    ] }
];
