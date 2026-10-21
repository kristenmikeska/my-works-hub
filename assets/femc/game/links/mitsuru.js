/* Mitsuru Kirijo · III The Empress. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mitsuru', name: 'Mitsuru Kirijo', short: 'Mitsuru', arcana: 'Empress', numeral: 'III', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '4/27',
  needs: { knowledge: 2 },
  home: { area: 'Gekkoukan High', spot: 'Student Council Room', slot: 'after', days: [2, 4],
          hint: 'After school on Tuesdays and Thursdays, in the student council room.' },
  cast: { 'mk-vp': 'Vice President' },
  approach: "The student council room door is open an inch, and through the gap you can see a curtain of red hair bent over a stack of paper that looks, from here, like it's losing.",
  invite: {
    ask: ["Are you free this afternoon? There's a matter I'd value your opinion on.", "The council room has two chairs, and only one of them is occupied. If you're nearby.", "I've been told there is a crêpe stand at Paulownia Mall. I would like to verify this. Would you accompany me?", "Solar. If you have an hour, I would appreciate the company. This is not an order.", "I have tea, and far too much of it. Join me?"],
    ok: ["Excellent. I'll see you shortly.", "Thank you. Truly.", "Good. I'll have a cup poured."],
    no: ["Of course. Another time.", "Understood. Rest, then.", "Not at all. I'll manage. I usually do."]
  },
  hangouts: [
    [
      { n: "Mitsuru made tea in the student council room with the seriousness other people reserved for surgery, from a lacquered thermos she brought from home and a pair of cups that were very obviously not from the school cafeteria. The window was open a crack. The afternoon came in through it smelling of cut grass and the tennis courts, and the stacks of paper on the long table stirred at their corners like they were thinking about leaving." },
      { s: 'mitsuru', f: 'neutral', t: "The culture committee has requested a budget for 'atmosphere.' I've asked them to define atmosphere. They've sent me a drawing." },
      { choose: [
        { t: "(Look at the drawing very seriously.)", notes: 3, then: [
          { n: "Solar studied it for a long, grave moment, turning it a quarter turn, then another, and at the edge of her vision Mitsuru's mouth did something it clearly hadn't been told it was allowed to do." },
          { s: 'mitsuru', f: 'neutral', t: "Your verdict?" },
          { n: "Solar said it was either a lantern or a jellyfish, and that either way it was worth four thousand yen. Mitsuru approved it with a stamp, very firmly, as if she had been looking for an excuse." }
        ] },
        { t: "Approve it. Atmosphere matters.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Does it? I've never been sure. I'll take your word for it." }
        ] },
        { t: "Deny it.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Ruthless. I had the same instinct. I find I'm less certain now that someone else has said it out loud." }
        ] }
      ] },
      { n: "They worked through the rest of the stack without talking much. It was the good kind of quiet, the kind where two people are doing the same thing at the same pace, and the tea went cold, and neither of them got up to make more, because getting up would have meant ending it." }
    ],
    [
      { n: "There was a vending machine at the end of the second-floor hallway, humming to itself in a patch of late sun, and Mitsuru Kirijo was standing in front of it with a ten-thousand-yen note held out in two fingers, and a look on her face like it had insulted her family." },
      { s: 'mitsuru', f: 'surprised', t: "It won't accept it. I've tried three times. It keeps pushing it back out at me." },
      { s: 'mitsuru', f: 'neutral', t: "Is there a person I should speak to?" },
      { choose: [
        { t: "(Buy her a drink with your coins.)", notes: 3, then: [
          { n: "Solar fed it two coins and pressed the button for the canned milk tea, and the can thunked down into the tray, and Mitsuru looked at it the way you'd look at a magician who had just pulled a coin from behind your ear." },
          { s: 'mitsuru', f: 'neutral', t: "...Thank you. I'll repay you." },
          { n: "She did, the next day, with a ten-thousand-yen note in an envelope. Solar gave it back. They went around like that for most of a week." }
        ] },
        { t: "It only takes coins and small bills.", notes: 2, then: [
          { s: 'mitsuru', f: 'surprised', t: "Small bills. I see. I don't believe I've ever had a small bill." },
          { n: "She said it without a trace of irony, which was the funniest part, and Solar kept her face perfectly still out of respect." }
        ] },
        { t: "You could buy the machine.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "I could. I'd still have no idea how to make it work." }
        ] }
      ] },
      { n: "They drank by the window. The milk tea was too sweet. Mitsuru finished all of it, slowly, like she was memorizing it, and then held the empty can for a while, as if she wasn't sure you were allowed to throw away something you'd liked." }
    ],
    [
      { n: "Mitsuru had her phone open on the council table in front of her, the clamshell propped up like a tiny laptop, and was regarding it with the expression she usually saved for the treasurer's arithmetic. She'd been regarding it, Solar gathered, for some time." },
      { s: 'mitsuru', f: 'neutral', t: "Iori informs me that my messages read like legal notices. Takeba agreed with him, which is unprecedented. I'd like a second opinion before I accept a verdict from those two." },
      { n: "She turned the phone around. The draft on the screen was addressed to Akihiko. It said, in full, Akihiko. Your protein powder is in the refrigerator. It does not belong in the refrigerator. Please remove it at your earliest convenience. Regards, Mitsuru Kirijo." },
      { choose: [
        { t: "Drop the 'Regards.'", notes: 3, then: [
          { n: "Mitsuru deleted it, one letter at a time, with visible pain, like someone taking off a coat in the snow. Then, after a long moment, she deleted Mitsuru Kirijo as well, and sat back, and looked at the bare end of the message as if it might catch cold." },
          { s: 'mitsuru', f: 'surprised', t: "He'll know it's from me?" },
          { s: 'solar', f: 'neutral', t: "It's about protein powder. He'll know." }
        ] },
        { t: "Add a smiley face.", notes: 2, then: [
          { n: "She found the symbol menu after some searching and studied the options for an alarming length of time, and finally chose one that was either a smiling face or a cat, and added it, and looked at it with deep suspicion, and left it there." }
        ] },
        { t: "It's perfect. Send it.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "That's what I thought. I'm glad someone in this dormitory has standards." },
          { n: "She sent it. Solar didn't have the heart, and didn't want to." }
        ] }
      ] },
      { n: "The reply came forty seconds later. Mitsuru opened it and read it and then held the phone out at arm's length and read it again. It said ok." },
      { s: 'mitsuru', f: 'surprised', t: "That's all? Two letters? Is he angry with me?" },
      { s: 'solar', f: 'neutral', t: "That's how he texts." },
      { s: 'mitsuru', f: 'neutral', t: "Extraordinary. He writes the way he punches." },
      { n: "She closed the phone. She looked very satisfied, the way she looked when a budget balanced, and that evening, when Solar got home, the protein powder was out of the refrigerator and there was a note on the shelf where it had been, in Akihiko's square capitals, that said SORRY, and underneath, in small neat handwriting, someone had added a smiling face, or possibly a cat." }
    ]
  ],
  ranks: [
    { after: '4/27', title: '1: the empty box', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { music: 'school' },
      { n: "The note had been in her shoe locker that morning, folded once, on heavy cream paper in neat angled handwriting she recognized from the desk in her room on the first day. Student council room. After school. It concerns your records. M.K. There was no please on it. There didn't need to be. The paper did that part." },
      { n: "The student council room was at the end of the third floor where the hallway went quiet, a long table and a whiteboard and a window full of the bay, and the late April light came in low and gold across all of it and caught in Mitsuru's hair so that, for a second in the doorway, she looked like something on fire sitting very still. She had a folder open in front of her. Solar knew the folder. She had seen the inside of it on a coffee table, with her own unsmiling face clipped to the corner." },
      { s: 'mitsuru', f: 'neutral', t: "Thank you for coming. Sit, please. This isn't a disciplinary matter." },
      { s: 'mitsuru', f: 'neutral', t: "The faculty office has noticed that your enrollment record is incomplete. They've asked the student council president to resolve it, since I'm apparently the only one in the building they believe can resolve anything." },
      { n: "She turned the form around. The white box sat there with its line under it, waiting, exactly as empty as it had been on the seventh." },
      { s: 'mitsuru', f: 'neutral', t: "I told them I would. I didn't tell them how." },
      { s: 'mitsuru', f: 'neutral', t: "So. What would you like it to say?" },
      { choose: [
        { t: "Leave it blank.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Good. That was my preference as well." },
          { n: "She took a stamp from the drawer, inked it, and pressed it into the corner of the form with one clean, deliberate motion. PENDING. Then she closed the folder like she was closing a door on someone's foot." },
          { s: 'mitsuru', f: 'neutral', t: "That should keep them occupied until graduation." }
        ] },
        { t: "Write 'Kirijo.' It'd save time.", notes: 2, then: [
          { s: 'mitsuru', f: 'surprised', t: "..." },
          { n: "For a moment she just looked at Solar, and something passed over her face so fast it might have been a laugh if it had been allowed to finish. It wasn't. She pressed her lips together very firmly until it went away." },
          { s: 'mitsuru', f: 'neutral', t: "I think one of us is quite enough. I'll mark it pending." }
        ] },
        { t: "Whatever's easiest for you.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "It isn't about what's easiest for me. It's your name." },
          { n: "She said it without any edge, but she said it firmly, like a correction in a margin, and marked the box pending, and Solar sat with the strange feeling of having been handed something back that she hadn't noticed she'd given away." }
        ] }
      ] },
      { n: "That should have been the end of it. Solar was halfway to standing when Mitsuru's eyes went, very briefly, to the stack of paper on the far end of the table, which was taller than it had any right to be, and came back, and Solar, who was learning that Mitsuru never looked at anything by accident, sat down again." },
      { s: 'mitsuru', f: 'neutral', t: "Club budget requests. Thirty-one of them. The treasurer has mono. The vice president has decided, quite independently, that this is the year he'll become a musician." },
      { s: 'mitsuru', f: 'neutral', t: "Your marks are good. I checked. I could use another pair of eyes for an hour, if you have one to spare. It isn't an order." },
      { n: "She said that last part the same way she'd said it in the lounge, carefully, as if it were the most important sentence in the room. Solar took the top half of the stack." },
      { choose: [
        { t: "(Sort them by which clubs are lying.)", notes: 3, then: [
          { n: "It took her about ten minutes to sort them into two piles, honest and creative, and another five to explain the creative pile. The photography club wanted a darkroom for a camera they didn't own. The go club had requested a refrigerator, which no game of go had ever required." },
          { s: 'mitsuru', f: 'surprised', t: "...That's very efficient. And a little alarming." },
          { s: 'mitsuru', f: 'neutral', t: "Brilliant. Do the other half." }
        ] },
        { t: "(Do exactly what she asks, neatly.)", notes: 2, then: [
          { n: "She checked the figures, initialed the corners, and squared the edges of each finished request against the edge of the table, and Mitsuru glanced at the neat stack once and didn't say anything, which from Mitsuru seemed to count as praise." }
        ] }
      ] },
      { n: "The light moved across the table while they worked and turned from gold to the color of weak tea. Somewhere below, the tennis club was losing a long rally, the pock of the ball going back and forth and back and then stopping. At some point Mitsuru said her name, to ask for the stapler, and paused on it, half a breath, like a word in a language she was practicing." },
      { s: 'mitsuru', f: 'neutral', t: "Forgive me. I call everyone by their family name. Takeba. Iori. You're the first person I've had to call by their given name since I was a child, other than Akihiko, and that was his doing." },
      { s: 'mitsuru', f: 'neutral', t: "It sounds very familiar in my mouth. I'll get used to it." },
      { n: "Solar handed her the stapler and said she didn't mind. She found, a little to her own surprise, that she meant it." }
    ] },
    { after: '5/8', title: '2: hagakure', place: 'Iwatodai Strip · Hagakure', time: 'After School', scene: [
      { music: 'joy' },
      { n: "Mitsuru had asked her in the hallway between third and fourth period, with her voice lowered, in the tone of someone arranging a transfer of state secrets. Did Solar know Hagakure. The ramen shop. Had she been. Would she, perhaps, be willing to go, this afternoon, with Mitsuru, and was it the sort of establishment that took reservations." },
      { n: "It was not the sort of establishment that took reservations. It was a narrow counter on the strip with steam on the windows and a cook who shouted at everyone, lovingly, and it smelled like pork bones and sesame and the inside of a warm coat, and when Mitsuru stepped through the curtain in her uniform with her back perfectly straight, three salarymen at the counter visibly reconsidered their lives." },
      { s: 'mitsuru', f: 'neutral', t: "Akihiko speaks about this place as though it were a temple. Iori as well. I've never been able to ask either of them what one actually does here." },
      { s: 'mitsuru', f: 'neutral', t: "I would rather die than ask either of them." },
      { n: "She sat on the stool like it was a throne someone had shrunk, and studied the menu on the wall for a long time, and then turned to Solar with total seriousness and asked whether the special came as a set course, and if so, how many." },
      { n: "Two bowls came. Mitsuru broke her chopsticks apart cleanly, laid them across the rim, lifted a few noodles with the precision of a woman picking up a contact lens, and ate them in perfect silence, and around her the whole shop slurped like a drain." },
      { s: 'mitsuru', f: 'surprised', t: "Is it... customary? The noise?" },
      { choose: [
        { t: "(Slurp, loudly, as a demonstration.)", notes: 3, then: [
          { n: "Solar slurped. Loudly. On purpose. It was, she thought, possibly the least composed thing she had done since waking up on a tiled floor, and the cook behind the counter gave her a thumbs-up with a ladle." },
          { n: "Mitsuru watched her the way you'd watch someone step off a high board. Then, slowly, with her eyes half closed as if she were about to sign something she couldn't take back, she tried it." },
          { s: 'mitsuru', f: 'surprised', t: "...Oh." },
          { s: 'mitsuru', f: 'neutral', t: "It's much better that way. Why didn't anyone tell me it was much better that way?" }
        ] },
        { t: "It's a compliment to the cook.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "A compliment. I see. Then it would be rude not to." },
          { n: "She tried it, very quietly, a sort of polite inhale, and looked so pleased with herself afterward that Solar had to look at the menu for a while." }
        ] },
        { t: "Only if you're enjoying it.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Then I should be making a great deal of noise. I'll work up to it." }
        ] }
      ] },
      { n: "Halfway through the bowl, Mitsuru set her chopsticks down and folded her hands on the counter, which was how she began most sentences that mattered, and looked at the steam on the window instead of at Solar." },
      { s: 'mitsuru', f: 'neutral', t: "I'm told I'm difficult to approach. By the council, by the fencing team. By my father's staff, though they're paid not to say it." },
      { s: 'mitsuru', f: 'sad', t: "I've never been sure what I'm meant to do about it. I don't know how to be approached. I was taught how to receive people." },
      { choose: [
        { t: "You're not difficult. You just look like you don't need anything.", notes: 3, then: [
          { n: "Mitsuru turned her head and looked at her, properly, the way she had in the lounge on the first night when Solar had counted the exits, a long level look that went in and kept going." },
          { s: 'mitsuru', f: 'neutral', t: "That's a very precise observation." },
          { s: 'mitsuru', f: 'neutral', t: "It takes one to make it, I suspect." },
          { n: "Solar picked up her chopsticks and found something very interesting at the bottom of her bowl. Neither of them said anything else about it. Neither of them needed to." }
        ] },
        { t: "You approached me. That's a start.", notes: 2, then: [
          { s: 'mitsuru', f: 'surprised', t: "I suppose I did. In a hallway. Whispering. Like a spy." },
          { s: 'mitsuru', f: 'neutral', t: "It's a start." }
        ] },
        { t: "(Change the subject to the noodles.)", notes: 1, then: [
          { n: "Solar asked whether she wanted extra pork, and Mitsuru blinked, and then said yes, and the moment folded itself up and went somewhere neither of them would have to look at it." }
        ] }
      ] },
      { n: "Mitsuru paid, over Solar's objections, with a card the cook had to go into the back to find a machine for. On the pavement outside the evening was coming in blue and the strip's signs were flickering on one by one, and Mitsuru turned up the collar of her coat against the breeze off the water and looked, for a second, entirely like a girl who'd just had ramen with a friend." },
      { s: 'mitsuru', f: 'neutral', t: "If you tell Akihiko about this, I'll have you executed." },
      { s: 'mitsuru', f: 'neutral', t: "...I'd like to come back. Next week, perhaps. If you're free." }
    ] },
    { after: '5/20', title: '3: four ways out', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { music: 'tender' },
      { n: "The midterm rankings had gone up in the main hallway that morning, and the crowd around them had the hot, crushed, slightly hysterical energy of a train platform at rush hour. Mitsuru's name was at the top of the third-year list, where it had apparently been every term since she enrolled. Solar's was in the top ten, with no surname after it, which looked like a typo and which three separate people had already pointed out to her, as if she might not have noticed." },
      { n: "By the afternoon the rain had come back, a steady gray rinse that turned the window of the council room into a smeared watercolor of the bay, and Mitsuru was sitting very straight at the head of the long table with her phone held to her ear, and she raised one finger when Solar came in. Wait. So Solar waited, by the door, and tried not to listen, and listened." },
      { s: 'mitsuru', f: 'neutral', t: "Yes, Father. First. Yes." },
      { s: 'mitsuru', f: 'neutral', t: "No, there's nothing to report. The operations are proceeding as planned." },
      { s: 'mitsuru', f: 'neutral', t: "...Yes. I understand. Thank you, Father." },
      { n: "She ended the call. She didn't put the phone down. She sat holding it against the table under her palm with her back exactly as straight as before, every line of her composed, and her thumb moving very slightly back and forth over the edge of the screen, back and forth, the only part of her that hadn't been told to stop." },
      { n: "Solar recognized it. On her first night in the dorm she had lain on top of the covers with the door shut and let her whole body do that, quietly, where nobody could see, and she had a feeling Mitsuru had been doing it in rooms like this one for a great deal longer." },
      { choose: [
        { t: "You can put the phone down now.", notes: 3, then: [
          { n: "Mitsuru looked down at her own hand as if it belonged to somebody else. Then she set the phone on the table, face down, very gently, the way you'd set down something that might go off." },
          { s: 'mitsuru', f: 'sad', t: "...Thank you. I hadn't noticed." }
        ] },
        { t: "(Pretend you didn't hear any of it.)", notes: 2, then: [
          { n: "Solar crossed to the window and looked out at the rain with great interest, and gave her the minute, and when she turned back the phone was face down on the table and Mitsuru's hands were folded on top of it, still." }
        ] },
        { t: "Is he always like that?", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Like what? He's a very busy man. He called to congratulate me." },
          { n: "She said it smoothly, a sentence she had clearly said many times before, and it was a good sentence, and it closed like a door." }
        ] }
      ] },
      { n: "They worked. The rain worked too, steadily, against the glass. After a while Mitsuru spoke without looking up from the page in front of her, in the same tone she used for budget figures." },
      { s: 'mitsuru', f: 'neutral', t: "You count the exits when you come into a room. I noticed the first night. You did it in the lounge. You did it again just now." },
      { s: 'solar', f: 'neutral', t: "I know you noticed. You didn't say anything." },
      { s: 'mitsuru', f: 'neutral', t: "It wasn't mine to say. And I didn't need to ask why. I do it too." },
      { s: 'mitsuru', f: 'sad', t: "I was eight. There was a man from the Group's security staff who walked me through the house and made me point to every door and every window, in every room, until I could do it with my eyes shut. In case someone came for the heir." },
      { s: 'mitsuru', f: 'neutral', t: "I've never once stopped. I don't suppose you remember who taught you." },
      { choose: [
        { t: "(Count them out loud.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "The door." },
          { n: "Mitsuru looked up. For a second she didn't move. Then she set down her pen." },
          { s: 'mitsuru', f: 'neutral', t: "The window. It opens onto the gutter. I've never tried it." },
          { s: 'solar', f: 'neutral', t: "The door to the supply closet. It connects to the next classroom." },
          { s: 'mitsuru', f: 'surprised', t: "...You checked." },
          { n: "Solar had checked. On the first day. Mitsuru stared at her, and then something in her face came apart very slightly at one corner, and she laughed, quiet and short and real, like it had been startled out of her." },
          { s: 'mitsuru', f: 'neutral', t: "Four, then. Four ways out." }
        ] },
        { t: "No. But it helps.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Yes. It does. That's the worst part, I think. It always helps." },
          { n: "They sat with that for a moment, two girls with very good posture in a room with very few ways out of it, and neither of them looked at the door." }
        ] },
        { t: "In case I need to leave.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "And do you? Need to leave?" },
          { n: "Solar didn't answer. Mitsuru didn't ask again. She went back to her page, and after a moment so did Solar, and it was a while before either of them turned one." }
        ] }
      ] },
      { n: "It was dark by the time they locked up. The rain had thinned to almost nothing, a fine mist hanging in the light from the school gate, and in the staff lot, alone under a lamp, there was a motorcycle that cost more than most of the cars on Port Island, red and black and beaded with water." },
      { s: 'mitsuru', f: 'neutral', t: "I'll drive you back to the dorm. There's a spare helmet. Don't tell Akihiko, he'll want one too." },
      { n: "Solar got on behind her. The city went by in long wet streaks of light, and Mitsuru drove the way she did everything, precisely and much too fast, and at the first red light she said, without turning around, that the top ten was very respectable, and that next term she expected to see Solar's name considerably higher, and that this was, for the record, an order." }
    ] },
    { after: '6/18', title: '4: à la carte', place: 'Iwatodai Strip · Wild-Duck Burger', time: 'After School', scene: [
      { music: 'joy' },
      { n: "Mitsuru had a list. Solar found out about the list on a wet Thursday in June, when the council meeting let out at five and Mitsuru came down the stairs with her umbrella already open indoors, and said, in the voice of someone confirming an appointment, that the next item was fast food." },
      { n: "Hagakure had been item one. There were, she admitted on the walk down the strip, rather a lot of items. She'd kept them for years in the back of her council planner, in very small handwriting, on a page with no heading at all, as if giving it a title would have made it something she was allowed to want." },
      { n: "Wild-Duck at five on a rainy weekday was steam on the windows and fryer oil and a baseball team and a radio, and a girl behind the counter in a paper hat with the thousand-yard stare of someone in the last hour of a shift. Mitsuru stood in front of the menu board with her hands folded and read it the way she read budget requests, top to bottom, twice, and then stepped up to the counter." },
      { s: 'mitsuru', f: 'neutral', t: "Good evening. I'll have the Wild-Duck. Is the duck seasonal?" },
      { s: 'clerk', t: "...It's a burger." },
      { choose: [
        { t: "(Order for both of you, fast, before she asks about wine.)", notes: 3, then: [
          { n: "Solar ordered two sets, large, the Mystery Burger, two colas, in one breath, and slid the money across, and the girl in the paper hat looked at her with something like love." },
          { s: 'mitsuru', f: 'surprised', t: "You did that very quickly." },
          { s: 'solar', f: 'neutral', t: "You have to, here." },
          { s: 'mitsuru', f: 'neutral', t: "Like a call in the field. I see. I'll study your technique." }
        ] },
        { t: "The duck's just the name.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Then the name is misleading. I'll have one regardless. I admire its confidence." }
        ] },
        { t: "(Let her figure it out.)", notes: 1, then: [
          { n: "Mitsuru figured it out, eventually, by way of four questions about portion sizes and one about the provenance of the pickles, while the baseball team behind them made a noise like a tire going flat. She ordered the Mystery Burger in the end, because, she said, she disliked not knowing things." }
        ] }
      ] },
      { n: "There was no cutlery. Mitsuru looked for it, under the tray liner and in the paper bag and briefly, with real hope, in the napkin dispenser, and then accepted the situation with the expression of a general accepting terms, and picked the burger up in both hands as if it were a document she'd been asked to sign." },
      { n: "She took a bite. She chewed it for a long time. A drop of something orange landed on her cuff and she didn't notice." },
      { s: 'mitsuru', f: 'surprised', t: "...Brilliant." },
      { n: "She said it the way she said it to Solar in Tartarus, after a clean call, and the girl in the paper hat, wiping the next table, looked over and very nearly smiled." },
      { s: 'mitsuru', f: 'neutral', t: "I sent my report to the Group this morning. I send one every month. Operations, figures, anomalies. Yamagishi's recruitment. The readings from the tower. All of it." },
      { s: 'mitsuru', f: 'neutral', t: "I've written them since I was fifteen. My father reads every one. He used to correct my grammar in red ink and send them back." },
      { s: 'mitsuru', f: 'sad', t: "I left out the people." },
      { n: "She meant the ones who had started turning up since the night Fuuka came home. Awake in the green hour, when everyone else in the city was a coffin. People who didn't belong to this city and had nowhere else to stand. Mitsuru turned the burger a quarter turn in her hands and didn't eat it." },
      { s: 'mitsuru', f: 'neutral', t: "I was taught that an omission is a lie in better clothes. I've never left anything out of a report in my life." },
      { s: 'mitsuru', f: 'neutral', t: "And I keep waiting to feel that I've lied. I don't. I feel as though I've left a box blank." },
      { choose: [
        { t: "You marked it pending.", notes: 3, then: [
          { n: "Mitsuru went very still. Then she looked at Solar across the little plastic table, over the fries, for a long moment, the level look that went in and kept going." },
          { s: 'mitsuru', f: 'neutral', t: "...Yes. I suppose I did. You're a terrible influence." },
          { s: 'solar', f: 'neutral', t: "You stamped mine first." },
          { s: 'mitsuru', f: 'neutral', t: "So I did. Then I've no one to blame but myself. I find that I don't mind." }
        ] },
        { t: "Why did you leave them out?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Because the Group would send people with clipboards. And I think they've been looked at by enough people with clipboards. I think you have, too." }
        ] },
        { t: "Your father will find out.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Very likely. He finds out most things. I'd like him to find out from me, when I've decided what it is." }
        ] }
      ] },
      { n: "She picked up a fry. She held it up between two fingers, like a pen she wasn't sure was hers, and looked at it, and then at Solar, and then at the fry again." },
      { s: 'mitsuru', f: 'neutral', t: "And these. How does one approach these?" },
      { choose: [
        { t: "(Eat one with your fingers. Show her.)", notes: 3, then: [
          { n: "Solar ate one. Mitsuru watched carefully and then did the same, precisely, and her eyes widened." },
          { s: 'mitsuru', f: 'surprised', t: "It's very hot." },
          { s: 'solar', f: 'neutral', t: "It's supposed to be." },
          { s: 'mitsuru', f: 'neutral', t: "Everything here is exactly what it's supposed to be. I find that very restful." }
        ] },
        { t: "One at a time. Left to right.", notes: 2, then: [
          { n: "Mitsuru ate them one at a time, left to right, methodically, and when Solar laughed she asked what was funny and Solar said nothing, and Mitsuru said that was the second time she'd been lied to today, and the first had been by herself." }
        ] },
        { t: "With ketchup.", notes: 2, then: [
          { n: "She examined the little packet from several angles, located what she judged to be the correct corner, and squeezed. It went on her other cuff. She looked at both cuffs, orange and red, with something like pride." },
          { s: 'mitsuru', f: 'neutral', t: "Evidence. Good." }
        ] }
      ] },
      { n: "Before they left she took out the planner and opened it to the page at the back with no heading, and drew one neat line through the second item. Solar couldn't read the rest upside down. She could see that it went on for a while." },
      { s: 'mitsuru', f: 'neutral', t: "Item three is a crêpe stand. I'll require a second opinion. Not this week. I'd like to have something to look forward to." },
      { n: "She put her umbrella up outside, under the awning, which was bad luck, and Solar didn't mention it. Some things it seemed kinder to let a person find out for themselves." }
    ] },

    { after: '7/9', title: '5: customary', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { music: 'school' },
      { n: "Finals were the next week, and the heat had come in early and stayed, and the council room had every window open and two electric fans going on the long table, turning their faces slowly back and forth like bored spectators at a tennis match. The cicadas outside had reached the volume of a machine. Every piece of paper in the room was weighted down with something, a stapler, a tape dispenser, Mitsuru's teacup." },
      { n: "The vice president came in at four with a guitar case on his back and a request in a plastic sleeve. It was, he explained, not a band. It was a movement. The movement would require a stage at the culture festival, an amplifier, and a smoke machine." },
      { s: 'mk-vp', t: "It's not about the smoke, Kirijo-san. It's about what the smoke means." },
      { s: 'mitsuru', f: 'neutral', t: "What does the smoke mean?" },
      { s: 'mk-vp', t: "...Freedom?" },
      { s: 'mitsuru', f: 'neutral', t: "Solar. Your assessment." },
      { choose: [
        { t: "Approve the smoke machine. Deny the movement.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Brilliant." },
          { n: "She stamped it. The vice president left with a smoke machine and no stage to put it on and a look of deep, slow confusion that lasted all the way down the hall, and Mitsuru watched him go and, for a second, pressed the back of her wrist against her mouth." }
        ] },
        { t: "Deny it. Kindly.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "You heard her. Kindly. Denied." },
          { n: "He took it surprisingly well. Mitsuru said afterward that it was the kindly that did it, and that she'd have to try it sometime." }
        ] },
        { t: "Let him play.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "...I'll take that under advisement." },
          { n: "She did not, Solar learned later, take it under advisement. She took it under the stapler." }
        ] }
      ] },
      { n: "Through the open window, from somewhere below, came the clatter and stamp of the fencing club drilling in the gym, a sound Mitsuru turned her head toward without seeming to notice, the way you'd turn toward your own name. She'd stopped going to practice in June. Too much paper, she'd said. Solar had seen her, twice, in the corridor outside the gym, standing very still with her bag on her shoulder, listening." },
      { n: "When he'd gone, Mitsuru picked up the next thing on the pile, which wasn't a budget request. It was an envelope of heavy cream paper with a crest pressed into the flap, the same paper, Solar realized, as the note that had been in her own shoe locker in April. Mitsuru slit it with a letter opener, read it once, and set it down on the table with its edge squared exactly against the edge of the wood." },
      { s: 'mitsuru', f: 'neutral', t: "The board has arranged an introduction. In August. A dinner." },
      { s: 'mitsuru', f: 'neutral', t: "It's customary. The heir is introduced to a suitable family's son. The families dine. In a year or two, there's an announcement. My father was introduced to my mother that way. It's very efficient." },
      { n: "She said it in exactly the voice she'd used for thirty-one budget requests and a treasurer with mono. The fans turned their faces toward her and away. The letter lay on the table between them, perfectly square, perfectly still." },
      { choose: [
        { t: "Do you want to?", notes: 3, then: [
          { n: "Mitsuru opened her mouth, and closed it. It took her a long time to answer. The fan went all the way across the room and back." },
          { s: 'mitsuru', f: 'surprised', t: "Want." },
          { s: 'mitsuru', f: 'neutral', t: "I'm not sure the word applies. I don't believe anyone has ever used it in a sentence with my name in it. Not about this." }
        ] },
        { t: "(Wait for her to say more.)", notes: 2, then: [
          { n: "Solar waited. Mitsuru, who was not used to being waited for, filled the silence the only way she knew how, with figures." },
          { s: 'mitsuru', f: 'neutral', t: "He's twenty-four. He was at school in Switzerland. He rides. I know his blood type. It was in the file." }
        ] },
        { t: "Congratulations?", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Thank you. I think. I'm not certain it's that sort of news." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "I was born knowing where I'd end. The head of the table. I've never minded. I've been proud of it. I am proud of it." },
      { s: 'mitsuru', f: 'sad', t: "I simply hadn't understood that the chair came with someone already seated beside it." },
      { s: 'mitsuru', f: 'neutral', t: "Do you think me cold? For reading it like a budget?" },
      { choose: [
        { t: "I think you read everything like a budget. It keeps it from touching you.", notes: 3, then: [
          { s: 'mitsuru', f: 'surprised', t: "...Does it?" },
          { s: 'solar', f: 'neutral', t: "It works for a while." },
          { n: "Mitsuru looked at the letter. Then, deliberately, she turned it face down." },
          { s: 'mitsuru', f: 'neutral', t: "You read rooms the same way. I've watched you do it. Doors, then people, then whatever's left." },
          { s: 'mitsuru', f: 'neutral', t: "It's a terrible habit. I'd recommend it to anyone." }
        ] },
        { t: "No.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "That's kind. I'm not certain it's accurate. But it's kind." }
        ] },
        { t: "A little.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Honest. Good. I'd rather that than kind." },
          { n: "She said it as if she meant it, and Solar could see that she almost did." }
        ] }
      ] },
      { n: "She put the letter in the top drawer, in with the PENDING stamp. Then she took the stamp back out and held it, and looked at it, and the fans turned toward her and away, and she put it back in the drawer, beside the letter, and shut the drawer, and picked up her pen." },
      { s: 'mitsuru', f: 'neutral', t: "Now. Finals. Name the three causes of the Ōnin War. Quickly." },
      { n: "Solar named two. Mitsuru gave her the third, and then a fourth that wasn't in the textbook, and then quizzed her all the way down three flights of stairs and across the courtyard and to the gate, relentlessly, one question after another, as though if she kept asking questions there would be no room left in the afternoon for anyone to ask her one." }
    ] },

    { after: '8/13', title: '6: the long way', place: 'Iwatodai Dorm · Front', time: 'Night', scene: [
      { music: 'night' },
      { phone: [
        { from: 'mitsuru', t: "Are you awake? I'm outside the front door. I've brought the spare helmet. This is not an order." },
        { from: 'solar', t: "Two minutes." }
      ], contact: 'Mitsuru' },
      { n: "It was ten at night and still hot enough that the air felt like something you had to push through. The motorcycle was idling at the curb in front of the dorm, red and black under the streetlight, and Mitsuru was standing beside it in a leather jacket that was much too warm for August, with her hair tied back and the spare helmet held out at arm's length, as if Solar might bite." },
      { n: "The introduction had been in the first week of August. Nobody in the dorm had mentioned it. Mitsuru had come home from it late, in a dress nobody had seen her wear before or since, and gone straight up to the fourth floor, and her light had been on until the Dark Hour put it out." },
      { place: 'Port Island · Pier', time: 'Night' },
      { n: "She drove the way she always drove, precisely and much too fast, across the bridge with the whole bay lit up on either side of them, and the wind came off the water at last, hot and then not, and took the city's breath out of Solar's lungs and gave her the sea's instead. Mitsuru didn't say where they were going. She parked at the end of the Port Island pier, where it was dark, and there was nobody but a fisherman asleep in a folding chair, and took off her helmet, and leaned on the rail." },
      { s: 'mitsuru', f: 'neutral', t: "It went very well. Everyone said so. My father said so in the car, afterward. It went very well." },
      { choose: [
        { t: "And you? What did you say?", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "In the car? Nothing. He didn't ask." },
          { s: 'mitsuru', f: 'sad', t: "No one asked at the table, either. I'm only now noticing." }
        ] },
        { t: "What's he like?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Kind. Punctual. Very well briefed. He asked whether I liked horses." },
          { s: 'mitsuru', f: 'neutral', t: "I said yes. I've no idea whether I like horses. No one's ever asked me before." }
        ] },
        { t: "(Lean on the rail beside her and wait.)", notes: 2, then: [
          { n: "Solar leaned on the rail beside her. The metal was still warm from the day. Mitsuru looked at the water for a while, and then went on, as if she'd only paused for breath." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "It was a private room in a hotel. Very good fish. His father and mine at the ends of the table, and the two of us in the middle, across from one another, like the two halves of a contract." },
      { s: 'mitsuru', f: 'neutral', t: "They spoke about the spring after my graduation the way you'd speak about the weather. Whether it would be a good spring. Whether March was too soon. Across me. Over my plate." },
      { n: "Solar's hands had gone cold." },
      { n: "It was August. It was twenty-nine degrees at ten at night and the rail under her palms was still warm from the sun, and her hands had gone cold anyway, from the fingertips in, the way they'd gone cold on the tiles the first night, and she found that her right thumb had gone looking for something at the base of her left ring finger and was pressing there, against the bare skin, as if checking whether something was or wasn't there. She didn't know which. A date somebody else had circled. A table set for two families. It didn't come as a picture. It came as a temperature, and then it was gone, and she was standing on a pier with a fisherman snoring behind her and her hand flat on the rail to make it stop." },
      { s: 'mitsuru', f: 'surprised', t: "Solar? You've gone white." },
      { choose: [
        { t: "I don't know. It felt familiar.", notes: 3, then: [
          { n: "Mitsuru looked at her for a long time. She didn't ask what. She seemed to understand that there wasn't a what, not yet, only the shape where one would go." },
          { s: 'mitsuru', f: 'sad', t: "Then I'm sorry. For whoever it was familiar to." }
        ] },
        { t: "(Put your hand in your pocket.)", notes: 2, then: [
          { n: "She put her hand in her pocket. Mitsuru watched her do it and didn't say anything, and after a moment put her own hand in her jacket pocket too, which might have been a coincidence, and wasn't." }
        ] },
        { t: "Just the wind.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "It's twenty-nine degrees." },
          { s: 'mitsuru', f: 'neutral', t: "...But all right. The wind." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "What would you do? In my place. I'm asking. I'd like to know what someone does who wasn't raised to do the expected thing." },
      { choose: [
        { t: "I don't know. But I'd want to be the one who decided.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Even if you decided the same thing they'd have decided for you?" },
          { s: 'solar', f: 'neutral', t: "Especially then." },
          { n: "Mitsuru turned that over. Solar could see her do it, the way she turned a budget figure over, looking for the place it didn't add up, and not finding it." }
        ] },
        { t: "Run.", notes: 2, then: [
          { n: "Mitsuru laughed, short and startled, out over the water." },
          { s: 'mitsuru', f: 'neutral', t: "I have a motorcycle and a full tank. Don't tempt me." }
        ] },
        { t: "Whatever's expected.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Yes. That's what I'd say too. I find I'm less fond of it in someone else's voice." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Shall we take the long way back?" },
      { n: "She said it as if it were a phrase from a foreign language she'd read about and never had occasion to use. They took the long way. They took it twice, all the way around Port Island and back along the bay road, past the dark harbor and the lit-up hotels and the bridge strung with lights like a necklace somebody had dropped, and at the last red light before the dorm, with the engine ticking under them, Mitsuru said, without turning her head, thank you for not telling me what to do." },
      { s: 'mitsuru', f: 'neutral', t: "Everyone else has. You're the first person who didn't." }
    ] },

    { after: '9/15', title: '7: verification', place: 'Paulownia Mall · Central Atrium', time: 'After School', scene: [
      { music: 'city' },
      { n: "The crêpe stand was a little striped cart beside the atrium fountain, with a hand-painted menu and a griddle and a woman in an apron who had been making crêpes in that exact spot, she told Mitsuru, when Mitsuru asked, for eleven years. Mitsuru received this information with the gravity of someone being told the age of a cathedral." },
      { s: 'mitsuru', f: 'neutral', t: "I was told there was a crêpe stand here. I wished to verify it. I see it's been verified for some time." },
      { n: "She ordered the most complicated thing on the menu, strawberries and cream and custard and a wafer stuck in the top like a flag, and held it in its paper cone, and then stood very still beside the fountain, as if waiting for a chair to appear." },
      { s: 'solar', f: 'neutral', t: "You eat it walking." },
      { s: 'mitsuru', f: 'surprised', t: "Walking? While moving? Is that permitted?" },
      { n: "It was permitted. They walked. Mitsuru ate the crêpe the way she did everything new, with total concentration, and the September light came down through the skylights in long dusty columns, and by the time they'd passed the bookshop and the police box she had a small, perfect dab of cream on the end of her nose and no idea at all." },
      { choose: [
        { t: "(Reach over and wipe it off with your thumb.)", notes: 3, then: [
          { n: "Solar reached over and wiped it off with her thumb. Mitsuru stopped walking." },
          { s: 'mitsuru', f: 'surprised', t: "..." },
          { s: 'mitsuru', f: 'neutral', t: "Thank you. No one's done that since I was very small. My mother, I think. I'd forgotten it was a thing people did." }
        ] },
        { t: "You have cream on your nose.", notes: 2, then: [
          { s: 'mitsuru', f: 'surprised', t: "I have what?" },
          { n: "She went pink, which was something Solar had never seen her do, from the collar up, and dealt with it with a napkin and enormous dignity, and then, a few steps later, quietly, laughed at herself." }
        ] },
        { t: "(Say nothing. It's too good.)", notes: 1, then: [
          { n: "Mitsuru discovered it herself, five minutes later, reflected in the window of Be Blue V." },
          { s: 'mitsuru', f: 'neutral', t: "You let me walk past an entire jewelry store." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "He writes to me. Every week. Good letters. On good paper. He asked about my fencing and remembered my answer the following week." },
      { s: 'mitsuru', f: 'sad', t: "I keep waiting to dislike him. It would be so much simpler. I have nothing against him at all except that I didn't choose him, and I'm told that isn't a reason." },
      { n: "Around them the mall went on being a mall. A toddler sat down in the middle of the walkway in protest of something and would not be moved. Two girls in another school's uniform shared one pair of earphones on the bench by the fountain, heads together, one bud each, nodding at the same moment. Mitsuru watched them for a long time, the way she'd watched the man at Hagakure slurp, the way she watched everything on the list, as if somewhere in it there were instructions." },
      { s: 'mitsuru', f: 'neutral', t: "They're not doing anything. They're just sitting there. How do they know how to do that?" },
      { n: "They sat on the edge of the fountain. Mitsuru finished the crêpe, all of it, including the paper cone's last soggy corner, which Solar had never seen anyone do, and folded the paper into a small square, and held it. Then she looked at Solar's bag, where the phone was, and Solar knew what she was going to say a second before she said it." },
      { s: 'mitsuru', f: 'neutral', t: "You've been receiving messages. Since August. I've seen your face when the phone goes." },
      { s: 'mitsuru', f: 'neutral', t: "The Group could trace the numbers in an afternoon. I'd see to it personally. No one else would read a word." },
      { choose: [
        { t: "No. They're mine.", notes: 3, then: [
          { s: 'mitsuru', f: 'neutral', t: "Of course." },
          { s: 'mitsuru', f: 'sad', t: "Forgive me. Of course they are. I told you that myself, once, about a box on a form. I ought to listen to myself more often." }
        ] },
        { t: "Not yet.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Then it's pending. I'll keep the offer on file. I won't raise it again." },
          { n: "And she didn't, ever, which Solar would only later understand had cost her something." }
        ] },
        { t: "Would it even work?", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "I'd like to say yes." },
          { s: 'mitsuru', f: 'neutral', t: "I suspect not. I suspect they aren't coming from anywhere the Group keeps an office." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "May I ask you something unrelated? You needn't answer." },
      { s: 'mitsuru', f: 'neutral', t: "Have you ever wanted something you weren't allowed to want?" },
      { choose: [
        { t: "I don't remember. But my body acts like I have.", notes: 3, then: [
          { n: "Mitsuru looked at her for a long moment, at her hands, at the way she was sitting on the edge of the fountain with her weight forward, ready to stand." },
          { s: 'mitsuru', f: 'sad', t: "...Yes. Mine too." }
        ] },
        { t: "Have you?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I've just eaten one. While walking. In public." },
          { s: 'mitsuru', f: 'neutral', t: "I'm working my way up." }
        ] },
        { t: "This crêpe.", notes: 2, then: [
          { n: "Mitsuru stood up without a word, went back to the striped cart, and returned with a second crêpe, identical to her own, wafer and all, and handed it over like a diploma." },
          { s: 'mitsuru', f: 'neutral', t: "Granted." }
        ] }
      ] },
      { n: "Before they left she took out the planner and drew a line through item three, and then, after a moment, wrote something small in the margin beside it that Solar couldn't read and Mitsuru didn't offer to show her. Later Solar thought it might have been the woman's name, from the cart. Eleven years. It seemed like the kind of thing Mitsuru would want on file." }
    ] },

    { after: '10/13', title: '8: execution', place: 'Paulownia Mall · Game Panic', time: 'After School', scene: [
      { music: 'city' },
      { n: "It had been a bad fortnight. Nobody said so. Since the bridge, the dorm had been quiet in a new way, a careful way, people closing doors softly and finishing their sentences early, and Mitsuru had been working, as far as Solar could tell, all the time, in the council room and the command room and at the kitchen table at three in the morning with a pen in her hand and her tea gone cold beside her." },
      { n: "Akihiko had told her, apparently, that she needed to hit something. She'd said she'd rather it was a puck. Item six on the list was an arcade." },
      { n: "Game Panic was dark and loud and smelled of carpet and hot electronics and somebody's melon soda, and the machines flashed and sang and shouted at nobody, and Mitsuru walked through it with her school bag held in front of her in both hands, like someone wading into the sea, until she got to the air hockey table, and set the bag down, and took off her blazer, and rolled up her sleeves." },
      { n: "She held the striker like a foil. She stood like a fencer, side-on, weight on the balls of her feet. She looked across the table at Solar with an expression Solar had only ever seen on her in the command room, on the full-moon nights, and said, quite quietly, first to seven." },
      { choose: [
        { t: "(Play to win. She'd know if you didn't.)", notes: 3, then: [
          { n: "Solar played to win. It was close. It was so close that a small crowd gathered, two middle-schoolers and a man in a suit with his tie loosened and a girl from the prize counter, and nobody breathed at six to six, and then Mitsuru feinted left with her whole body and went right with her wrist, and the puck went into Solar's goal with a sound like a door slamming." }
        ] },
        { t: "(Let her win.)", notes: 1, then: [
          { n: "Solar let her score. Mitsuru stopped dead, the striker raised, and looked at her across the table with real, cold offense." },
          { s: 'mitsuru', f: 'neutral', t: "You let that in. Don't ever do that again." },
          { n: "They started over. Solar didn't let anything in. It went to six to six anyway, and then Mitsuru feinted left with her whole body and went right with her wrist, and the puck went home with a sound like a door slamming." }
        ] },
        { t: "(Play like Akihiko would. All offense.)", notes: 2, then: [
          { n: "Solar played like Akihiko, all offense, no guard, and Mitsuru, who had spent years watching Akihiko play like Akihiko, read every shot before it left the striker. It still went to six to six. Then she feinted left with her whole body and went right with her wrist, and the puck went home with a sound like a door slamming." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Execution." },
      { n: "She said it out loud. Clearly. In the voice she used on the radio. The two middle-schoolers looked at each other. The man in the suit took a small step back. Mitsuru heard herself a second later, and her face went through several things very fast, and she set the striker down on the table with great care, the way you'd set down a weapon at a checkpoint." },
      { s: 'mitsuru', f: 'surprised', t: "...I don't know why I said that." },
      { n: "One of the middle-schoolers began, uncertainly, to applaud. Then the other one did. Then the girl from the prize counter. Mitsuru stood in the middle of Game Panic in her shirtsleeves, being applauded for an air hockey game by strangers, and Solar watched her not know what to do with her hands, and then, slowly, incline her head, once, like a duelist, and that was somehow the best thing that had happened all month." },
      { place: 'Paulownia Mall · Central Atrium', time: 'Evening' },
      { n: "Afterward they sat on a bench outside with two cans from the vending machine, which Mitsuru paid for with coins she'd started carrying in a small leather purse for that purpose, and the atrium went blue with evening above them." },
      { s: 'mitsuru', f: 'neutral', t: "I told my father. On the telephone. That I won't marry him." },
      { s: 'mitsuru', f: 'neutral', t: "He was quiet for so long I thought the line had dropped. Then he said, I see. And that he'd think about how to speak to the board." },
      { s: 'mitsuru', f: 'sad', t: "I've been trying ever since to decide what I see means." },
      { choose: [
        { t: "It means he heard you.", notes: 3, then: [
          { s: 'mitsuru', f: 'surprised', t: "..." },
          { s: 'mitsuru', f: 'neutral', t: "Perhaps. He's never said it to me before. He usually says understood, and then does what he'd already planned." },
          { s: 'mitsuru', f: 'sad', t: "I'd like very much for you to be right." }
        ] },
        { t: "What do you want it to mean?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "That word again. Want. You keep handing it to me as if I'll know what to do with it." },
          { s: 'mitsuru', f: 'neutral', t: "...I want it to mean he's proud of me. There. That was unpleasant." }
        ] },
        { t: "Does it matter? You said it.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "It matters. But you're right that I said it. I keep forgetting that part. I said it out loud, to him, and the line held." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "It's been a difficult few weeks. For Akihiko especially. I make lists when things are bad. I've made a great many lists." },
      { choose: [
        { t: "(Put a coin in her hand. Rematch.)", notes: 3, then: [
          { n: "Solar took a coin out of her pocket and put it in Mitsuru's palm and closed her fingers over it." },
          { s: 'mitsuru', f: 'neutral', t: "I accept." },
          { n: "She lost the rematch. She lost the one after that. She won the third, and didn't say anything at all this time, only looked at Solar across the table with her hair coming loose and her sleeves rolled up and her face open in a way it never was on the fourth floor, and that was louder." }
        ] },
        { t: "You don't have to be fine at me.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I know. That's what's so disorienting about you." }
        ] },
        { t: "He'll be okay.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "I hope so. I'd like it in writing." }
        ] }
      ] },
      { n: "On the walk to the station she took out the planner and crossed out item six, and then, on a new line underneath, in the same small hand, wrote something and underlined it twice, and when Solar looked, she let her. It said air hockey, again, soon, and then, smaller, she cheats with her wrist, which was Solar's line, about Mitsuru, from the second game, written down by Mitsuru, as a note to herself." }
    ] },

    { after: '11/17', title: '9: black ribbon', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { music: 'tender' },
      { n: "Mitsuru hadn't come to council for a week. The stacks on the long table had grown, the first few days, and then, somewhat mysteriously, stopped growing, and then begun to shrink, a little every lunchtime, and anyone who'd asked the faculty office would have been told that the transfer student had a key." },
      { n: "This afternoon the door at the end of the third floor was open an inch again, and through the gap there was a curtain of red hair, bent over a stack of paper, very still. She was in uniform. There was a black ribbon tied in her hair where there had never been one, and her stockings were black, and she was sitting exactly as straight as she always sat, and her pen wasn't moving." },
      { s: 'mitsuru', f: 'neutral', t: "Thank you. For the stacks. Don't deny it. You square the edges against the table. No one else on the council does." },
      { choose: [
        { t: "(Shrug, and hand her the next folder.)", notes: 3, then: [
          { n: "Solar shrugged, and sat down in the other chair, and slid the next folder across. Mitsuru looked at it, and at her, and took it, and opened it." },
          { s: 'mitsuru', f: 'neutral', t: "Yes. Quite right. Thank you." }
        ] },
        { t: "Somebody had to.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "No one had to. Several people didn't. You did." }
        ] },
        { t: "You'd have done it for me.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Without hesitation. That isn't the point. It's still a kindness when it's owed." }
        ] }
      ] },
      { n: "They worked. The window was full of a low white November sky and the bay under it the color of a knife. The radiator ticked. After a while Mitsuru put down her pen, and folded her hands on the table, which was how she began every sentence that mattered, and looked at the window instead of at Solar." },
      { s: 'mitsuru', f: 'neutral', t: "The board met while I was away. They'd like the engagement announced in the new year. For stability. That was their word." },
      { s: 'mitsuru', f: 'sad', t: "My father said he'd speak to them. He didn't have the time." },
      { n: "She said it to the window. The radiator ticked. On the table in front of her, under her palm, her phone lay face down, and her thumb was moving very slightly back and forth across its edge, back and forth, the only part of her that hadn't been told to stop." },
      { choose: [
        { t: "(Say nothing. Stay.)", notes: 3, then: [
          { n: "Solar said nothing. She stayed. She sat in the other chair with her hands in her lap and let the room be quiet, and after a long time Mitsuru's thumb slowed, and stopped, and lay still on the edge of the phone, and Mitsuru breathed out, once, all the way to the bottom." }
        ] },
        { t: "I'm sorry.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Yes. Everyone is. It's very kind of everyone." },
          { n: "She didn't say it unkindly. She said it like someone who'd been handed the same flower a hundred times and was still, somehow, grateful for each one." }
        ] },
        { t: "Do you want to talk about him?", notes: 1, then: [
          { s: 'mitsuru', f: 'sad', t: "Not yet. Perhaps not for a long time." },
          { s: 'mitsuru', f: 'neutral', t: "But thank you for using the present tense. Most people have stopped." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "So I went myself. On Saturday. To the board." },
      { s: 'mitsuru', f: 'neutral', t: "I sat at the end of the table, where he used to sit, which no one had told me I could. And I told twelve men that I'll choose who stands beside me, and when, and whether. And that I'll be standing at the head of the table when I do." },
      { s: 'mitsuru', f: 'neutral', t: "One of them laughed. I let him finish. Then I told him, to the yen, what his division lost in the second quarter, and why." },
      { s: 'mitsuru', f: 'neutral', t: "The engagement is off. I wrote to the young man myself. He was very gracious about it. I'm told my father would have been proud. I'm told a great many things this month." },
      { n: "Something in Solar's chest let go when she said it, something Solar hadn't known was clenched, a fist she'd been carrying since a pier in August without noticing, and that made no sense at all, because it wasn't hers. It wasn't her engagement. She let it go anyway, and didn't look at why." },
      { choose: [
        { t: "Execution.", notes: 3, then: [
          { n: "Mitsuru looked at her. And then, for the first time since the door had opened an inch, something came apart at one corner of her face, and she laughed, very quietly, a sound with a crack in it, and put the back of her wrist against her mouth until it passed." },
          { s: 'mitsuru', f: 'neutral', t: "...Yes. I suppose it was." }
        ] },
        { t: "Were you scared?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Terribly. My hands were freezing the entire time. I held the edge of the table so they wouldn't see." },
          { s: 'mitsuru', f: 'neutral', t: "I count the exits. You know that. I didn't count a single one." }
        ] },
        { t: "What happens now?", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Now I'm the head of the table. Which I always was going to be. I simply thought I'd have longer to practice." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Takeba came. On the Friday. I don't know if she told you. She sat beside me for three hours and didn't say a single word." },
      { s: 'mitsuru', f: 'sad', t: "I've never been so grateful for silence in my life. I didn't know she could be quiet. I don't believe she knew either." },
      { n: "Then she unfolded her hands and picked up her pen and the next request from the stack, and squared it against the table's edge, and Solar saw that she'd learned that from her, too." },
      { s: 'mitsuru', f: 'neutral', t: "Now. The culture committee has written to me again about atmosphere. I'd value your opinion." }
    ] },

    { after: '12/10', title: '10: the spare helmet', place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { music: 'sun' },
      { n: "The last council meeting before finals ended at five, and everyone else left fast, into the cold, scarves up, and Mitsuru stayed at the head of the table and opened her planner to the page at the back with no heading and turned it around so that it faced Solar, and slid it across the wood, the way she'd slid an enrollment form across it in April." },
      { n: "It was the list. Solar had never seen the whole thing. It was in small, neat, slightly smaller-every-year handwriting, and nearly every line had been crossed through with a single straight stroke. Hagakure. Fast food. A crêpe stand. A vending machine. The long way. An arcade. And then, added later in a slightly different ink, to slurp, and air hockey, again, soon. There was one line left at the bottom, with nothing written on it at all." },
      { s: 'mitsuru', f: 'neutral', t: "I left the last one blank. I've learned from you that it's sometimes the correct thing to do with a box." },
      { s: 'mitsuru', f: 'neutral', t: "Would you fill it in? Or not. It's yours either way." },
      { choose: [
        { t: "(Write it in. Something hot from a convenience store, eaten outside, in the cold.)", notes: 3, then: [
          { n: "Solar wrote it in, in her own handwriting, under Mitsuru's, which looked very large and untidy next to it. Mitsuru read it upside down and her eyes went bright." },
          { s: 'mitsuru', f: 'neutral', t: "Outside. In December. That's barbaric. Get your coat." }
        ] },
        { t: "(Hand the pen back. It's her list.)", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Hm. Very well." },
          { n: "She wrote something, quickly, and shut the planner before Solar could see it, and stood, and said get your coat, in the tone of someone who had just made a decision she intended to enjoy." }
        ] },
        { t: "(Leave it blank.)", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Pending. Of course it is." },
          { n: "She looked at the empty line for a moment, and then took the pen and wrote something on it anyway, fast, and capped the pen, and said, get your coat, I've decided, and you're not to argue." }
        ] }
      ] },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening' },
      { n: "The motorcycle was in the staff lot under its lamp, the way it had been in May, beaded now with cold instead of rain. Mitsuru took the spare helmet from the back of it and held it out at arm's length, the way she always did, as if it might bite." },
      { n: "Then she didn't let go of it right away. She held it a moment longer, with Solar's hands on it too." },
      { s: 'mitsuru', f: 'neutral', t: "It's yours. It has been since May. I simply hadn't said so." },
      { s: 'mitsuru', f: 'neutral', t: "Whatever happens. Wherever you are, when you're done here. It's yours. That isn't a figure of speech. I had it engraved." },
      { n: "Solar turned it over. On the inside of the shell, small and neat, where nobody but the person wearing it would ever see, someone had engraved a single word. Not a surname. Just Solar." },
      { choose: [
        { t: "(Put it on.)", notes: 3, then: [
          { n: "She put it on. It fit. It had always fit. Mitsuru reached over and tightened the strap under her chin with two quick tugs, the way you'd straighten someone's collar before a photograph, and stepped back, and looked at her, and nodded once, satisfied." }
        ] },
        { t: "Akihiko's going to be furious.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "Yes. I'm looking forward to it enormously." }
        ] },
        { t: "I can't take this.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "You can. It's a helmet. It isn't a kidney." }
        ] }
      ] },
      { place: 'Port Island · Convenience Store', time: 'Evening' },
      { n: "The last item, whoever's handwriting it had ended up in, turned out to be nikuman. Two of them, from the steamer by the register of a convenience store on Port Island, the same store, Solar realized as they walked in, where a boy in a baseball cap had once hidden behind the magazine rack in the green dark, a lifetime ago in April. The clerk said welcome without looking up. Mitsuru said good evening back, which startled him badly." },
      { n: "They ate them outside, standing up, in the cold, beside the motorcycle, with the paper wrappers burning their fingers and their breath and the steam going up together into the orange light of the sign. Mitsuru bit into hers and closed her eyes." },
      { s: 'mitsuru', f: 'neutral', t: "Oh. That's the best one. That's the best item on the list. I should have started here." },
      { s: 'mitsuru', f: 'neutral', t: "Your name, by the way. I said in April I'd get used to it. It doesn't sound strange in my mouth anymore. I'm not sure when that happened." },
      { s: 'mitsuru', f: 'neutral', t: "And the other offer stands. The surname. I'd stamp it myself." },
      { choose: [
        { t: "Pending.", notes: 3, then: [
          { n: "Mitsuru laughed. Properly, out loud, in a convenience-store parking lot on Port Island in December, with steam coming off the nikuman in her hand, the laugh that had been pressed flat against the inside of her lips since April, finally allowed to finish." },
          { s: 'mitsuru', f: 'neutral', t: "Brilliant. Then I'll keep it on file." }
        ] },
        { t: "I think one of us is quite enough.", notes: 2, then: [
          { s: 'mitsuru', f: 'surprised', t: "...That's my line." },
          { s: 'mitsuru', f: 'neutral', t: "You've been saving it for eight months, haven't you. I'm almost impressed." }
        ] },
        { t: "Thank you, Mitsuru.", notes: 2, then: [
          { n: "Mitsuru looked at her for a moment, at the plain thank you and the plain name, and didn't say anything, and didn't need to. She just finished her nikuman, and folded the wrapper into a small square, and held it, as if she wasn't sure you were allowed to throw away something you'd liked." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "I was born knowing where I'd end. You were given nothing to go on at all. For a long time I thought yours was the crueler of the two." },
      { s: 'mitsuru', f: 'neutral', t: "I'm no longer sure. I think you may have been given the only thing I ever wanted. Which is the choosing." },
      { n: "She swung her leg over the motorcycle and pulled on her own helmet and sat there, waiting, the engine ticking in the cold. Solar put on hers, the one with her name inside it, and got on behind her, and Mitsuru asked over her shoulder, the way she'd asked once on a pier in August, whether they should take the long way." },
      { n: "They took the long way. They'd always, Solar thought, holding on, been going to take the long way." }
    ] }
  ],
  afterMax: [
    { place: 'Iwatodai Dorm · Lounge', time: 'Night', scene: [
      { n: "At three in the morning the dorm had more people in it than it had beds, and Mitsuru was in the lounge in a dressing gown with a ledger open on the coffee table, a real one, cloth-bound, with columns ruled in by hand, and a pot of tea, and the expression of a general who had been asked to run a hotel and had decided to win at it." },
      { s: 'mitsuru', f: 'neutral', t: "Rice. We are going through rice at a rate the Group's own cafeteria would find alarming. And futons. Someone has been sleeping in the laundry room. I'd like to know who, so I can give them a pillow." },
      { n: "Solar sat down on the other end of the couch, because she couldn't sleep either, and because it seemed like the kind of night where you sat down. The house creaked above them. Somebody on the second floor was snoring like a motorboat. Somebody else, further away, was laughing at something in their sleep. Mitsuru poured a second cup without asking and pushed it across." },
      { choose: [
        { t: "(Take the ledger and do the rice column.)", notes: 3, then: [
          { n: "Solar took the ledger. Mitsuru let her, which was something she'd never once done with anyone, and sat back with her tea and watched Solar add up rice, and said, after a while, that it was very strange to watch someone else do her sums, and that she thought she could get used to it, and that she wouldn't." }
        ] },
        { t: "You don't have to feed everyone.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "I know. I'm aware. It's my favorite thing I've done all year." }
        ] },
        { t: "Go to bed, Mitsuru.", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "After the futons. Then bed. Possibly." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "They're very loud, your people. I don't mean that unkindly. I grew up in a house where you could hear a clock from three rooms away." },
      { s: 'mitsuru', f: 'neutral', t: "I find I like a house where you can't hear the clock." },
      { n: "She said it plainly, the way she said everything, and then looked down into her tea as if she'd surprised herself. It was, Solar thought, the closest thing to a confession she'd ever heard her make, and it was about noise, and about rice, and about a building full of strangers she had decided, one by one, without being asked, to feed." },
      { n: "The tea was good. The lamp was low. Outside, the street was empty and wet, and the city was doing whatever it did at three in the morning when the green hour had come and gone and nobody had turned into anything. They sat with the ledger between them until the tea went cold, and then Mitsuru stood, and closed it, and went to find a pillow for the laundry room, and Solar heard her on the stairs, very softly, humming, which she had never once heard her do." }
    ] },
    { place: 'Gekkoukan High · Student Council Room', time: 'After School', scene: [
      { n: "The third term had a different light in it. Thin and white and early, the sun gone from the council room window by four, and the radiator ticking against the cold. Mitsuru was clearing out the desk. She'd be president until March, she said, but she liked to be ahead of things, and she'd never in her life been behind on anything, and she didn't intend to start with a desk." },
      { n: "There were three years of things in it. Pens, a fencing club schedule from her first year, a pressed flower she looked at for a long moment and put back, a stack of reports with red ink in the margins that she didn't look at at all and put in her bag, carefully, at the very bottom. And in the top drawer, at the back, a small wooden stamp." },
      { s: 'mitsuru', f: 'neutral', t: "Ah. There you are." },
      { n: "She inked it on the pad and pressed it once on a scrap of paper to check it. PENDING, in neat red capitals. Then she wiped it clean on a tissue and held it out across the table." },
      { s: 'mitsuru', f: 'neutral', t: "Take it. Whoever comes after me won't need it. They'll stamp everything approved or denied, the way I was taught to. That's correct. It's how one runs a council." },
      { s: 'mitsuru', f: 'neutral', t: "But you might. For anything that isn't decided yet." },
      { choose: [
        { t: "(Stamp her hand with it.)", notes: 3, then: [
          { n: "Solar inked it and took Mitsuru's hand and stamped the back of it before she could object. PENDING, in red, just above the knuckles. Mitsuru looked at it with an expression of total, genuine shock." },
          { s: 'mitsuru', f: 'surprised', t: "You can't stamp a person." },
          { n: "She didn't wash it off. It was still there, faintly, at dinner, and Akihiko asked about it, and she said it was a council matter, and Solar watched her rub her thumb over it, once, under the table, the way you'd touch something to check it was still there." }
        ] },
        { t: "I'll use it carefully.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: "No. Use it often. Use it on everything. I never did, and look at me." }
        ] },
        { t: "Are you sure?", notes: 1, then: [
          { s: 'mitsuru', f: 'neutral', t: "Entirely. It's the only thing in this drawer I'm sure about." }
        ] }
      ] },
      { n: "Solar put the stamp in her bag, next to her student handbook. They worked until the window went dark, side by side, in the quiet, Mitsuru squaring her finished pages against the edge of the table, Solar squaring hers, and when they locked up Mitsuru stood a moment in the doorway and looked back at the long table and the dark window and the empty chair at the head of it, the way you look at a room you're going to miss, and didn't say so, and turned off the light." }
    ] }
  ]
});
