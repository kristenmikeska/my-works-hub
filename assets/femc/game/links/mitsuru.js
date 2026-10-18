/* Mitsuru Kirijo · III The Empress. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mitsuru', name: 'Mitsuru Kirijo', short: 'Mitsuru', arcana: 'Empress', numeral: 'III', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '4/27',
  needs: { academics: 2 },
  home: { area: 'Gekkoukan High', spot: 'Student Council Room', slot: 'after', days: [2, 4],
          hint: 'After school on Tuesdays and Thursdays, in the student council room.' },
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
    { todo: 'Rank 4: to be written.' },
    { todo: 'Rank 5: to be written.' },
    { todo: 'Rank 6: to be written.' },
    { todo: 'Rank 7: to be written.' },
    { todo: 'Rank 8: to be written.' },
    { todo: 'Rank 9: to be written.' },
    { todo: 'Rank 10: to be written.' }
  ]
});
