/* Kasumi Yoshizawa · Faith. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Ranks 4-10 are stubs. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kasumi', name: 'Kasumi Yoshizawa', short: 'Kasumi', arcana: 'Faith', numeral: '', from: 'Persona 5 Royal',
  kind: 'visitor',
  romance: 'side',
  starts: '5/1',
  home: { area: 'Naganaki Shrine', spot: 'Flat Stones', slot: 'after', days: [0, 2, 4, 6],
          hint: 'After school on Tuesdays, Thursdays and Saturdays, and daytime on Sundays, on the flat stones at Naganaki Shrine.' },
  approach: "A red-haired girl is running the same thirty seconds of a ribbon routine over and over on the flat stones at Naganaki Shrine, and the late light keeps catching on it.",
  invite: {
    ask: [
      "Senpai! The light at the shrine is perfect today. Are you free? 🎀",
      "Senpai, are you busy? I need someone to tell me if my arms are straight. Honestly, not nicely!",
      "I found a bakery by the station that makes melon bread shaped like a turtle. Senpai. A turtle.",
      "Good afternoon, Senpai! Would you watch my routine today? You don't have to clap. ...You can clap.",
      "Are you free? I promise I'll only stretch you a little bit. 🎀",
      "The stones are dry and nobody's at the shrine. It's a sign, Senpai!"
    ],
    ok: ["Yay! I'll warm up while you walk over!", "Senpai! I'll save you the good step! 🎀", "Thank you! I'll be at the shrine!"],
    no: ["That's okay! Next time! 🎀", "No problem, Senpai! I'll practice extra hard so it's better next time.", "Okay! Rest well, Senpai!"]
  },
  hangouts: [
    [
      { n: "Kasumi had decided, with no input from Solar whatsoever, that today Solar was learning to balance, which meant Solar was standing on one foot on a shrine stone the size of a dinner tray with her arms out like a scarecrow, wobbling, while a pigeon on the offering box watched her with open contempt." },
      { s: 'kasumi', f: 'serious', t: "Don't look at your foot, Senpai. Look at something far away that isn't moving. Your body goes where your eyes go." },
      { choose: [
        { t: "(Find the far torii gate and stare it down.)", notes: 3, then: [
          { n: "Solar found the gate, red and faded at the bottom of the steps, and stared at it the way she'd stare at someone across a room she needed to outlast, and her foot stopped arguing with the stone, and she stood there, perfectly still, for what Kasumi announced was eleven whole seconds." },
          { s: 'kasumi', f: 'happy', t: "Eleven! Senpai! That's a personal best! It's your only best, but it's personal!" }
        ] },
        { t: "The pigeon is judging me.", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "Then show the pigeon! Use it, Senpai!" },
          { n: "Solar showed the pigeon. The pigeon left, which they both decided counted as a win." }
        ] },
        { t: "(Step off and sit on the stone instead.)", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "Senpai! Sitting isn't balancing!" },
          { n: "It was, a little, if you did it on a very small stone. Kasumi sat on the next one over in solidarity and they watched the shadows of the trees move across the gravel." }
        ] }
      ] },
      { n: "The afternoon had that early-summer heaviness to it, warm and green and smelling faintly of incense from the box by the hall, and by the end of it Solar's ankle hurt in a way she suspected was going to be a whole conversation tomorrow, and she found she didn't mind." }
    ],
    [
      { n: "After practice Kasumi ate like it was a second event, sitting on the shrine steps with a paper bag from the bakery by the station in her lap, working through a melon bread, a cream bun and a small, apologetic carton of strawberry milk, in that order, with total focus." },
      { n: "Halfway through the cream bun a white dog came up the steps, a scar over one eye and a very dignified walk, and sat down two steps below them and looked at the bag." },
      { s: 'kasumi', f: 'surprised', t: "Oh! Senpai, there's a dog. He's looking at me like I owe him money." },
      { choose: [
        { t: "(Hold out your hand and let him decide.)", notes: 3, then: [
          { n: "Solar held out her hand, palm down, and didn't move it. The dog considered her for a long, serious moment, the way you'd consider a contract, and then leaned his whole head into her fingers, and Kasumi made a sound so high only he could have heard it properly." },
          { s: 'kasumi', f: 'happy', t: "He likes you! Senpai, he chose you!" }
        ] },
        { t: "Don't give him the cream bun. It's bad for dogs.", notes: 2, then: [
          { s: 'kasumi', f: 'serious', t: "I would never. This cream bun is mine. He can have the corner of the bag." },
          { n: "He took the corner of the bag, politely, and then sat there with it like he was doing them a favor." }
        ] },
        { t: "He's not looking at you. He's looking at the bread.", notes: 1, then: [
          { s: 'kasumi', f: 'sad', t: "...That's worse, somehow." }
        ] }
      ] },
      { n: "He stayed until the bag was empty, and then he got up and trotted off around the back of the shrine like he had somewhere to be, and Kasumi folded the bag into a neat little square, because even her trash had good form." }
    ]
  ],
  ranks: [
    { after: '5/1', title: '1: good light', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'joy' },
      { n: "Naganaki Shrine was the kind of place Solar walked past on the way to somewhere else, a short flight of worn stone steps off the main road, a red gate gone soft and pink with weather, a pair of stone foxes with moss in their ears, and in the long gold hour after school at the start of May it smelled like cut grass and incense and somebody's dinner frying two streets over." },
      { n: "She'd only gone up because the steps were there, and because Akihiko had told her that morning, with complete sincerity and a protein shake in his hand, that stairs were a gift. She was planning exactly how to tell him he was wrong when she reached the top and stopped." },
      { n: "There was a girl on the flat stones in front of the offering hall, alone, in a leotard and track shorts, with a ribbon in her hand. Long red hair in a high ponytail with a big red bow holding it there, and the ribbon was red too, a long silk line that went up and around her and came down again half a second after she did, like it was following her on purpose and having to hurry. She leapt and turned and landed on a stone no bigger than a tray and didn't wobble, not once, and the light came through the trees sideways and caught all of it, the ribbon and the hair and the dust she kicked up, and turned it gold." },
      { n: "Solar had never thought about gymnastics in her life. She stood at the top of the steps with her bag sliding off her shoulder and didn't think about anything at all." },
      { n: "The girl landed the last turn with her arms up and the ribbon spiraling down around her to settle at her feet, held it, breathed, and then noticed she had an audience and went red to the roots of her hair." },
      { s: 'kasumi', f: 'surprised', t: "Oh! I'm so sorry! I didn't know anyone was up here! Are you here to pray? I can move. I'm moving!" },
      { choose: [
        { t: "Don't move. That was beautiful.", notes: 3, then: [
          { s: 'kasumi', f: 'blushing', t: "...Really? You think so?" },
          { s: 'kasumi', f: 'happy', t: "Thank you! It isn't perfect yet. The second turn is late. But it will be!" }
        ] },
        { t: "(Clap.)", notes: 2, then: [
          { n: "Solar clapped, three times, which in an empty shrine sounded like a great deal more than three. The girl curtsied, which she very clearly hadn't planned to do, and then looked mortified about the curtsy." }
        ] },
        { t: "You're in the god's way.", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "I'm...!" },
          { n: "She looked at the offering hall, and then at Solar, and then at the offering hall again, with the stricken face of someone working out the etiquette of having insulted a deity, until the corner of Solar's mouth gave her away." },
          { s: 'kasumi', f: 'happy', t: "Oh, you're teasing! Okay. Okay, good." }
        ] }
      ] },
      { s: 'kasumi', f: 'happy', t: "I'm Kasumi Yoshizawa! First-year. I do rhythmic gymnastics. Well, all gymnastics, really, but the ribbon is my favorite." },
      { n: "She looked Solar over, the uniform and the bag and the way she was standing, and seemed to decide something, and brightened like she'd remembered a word she'd been trying to think of." },
      { s: 'kasumi', f: 'happy', t: "You're a third-year, aren't you? I can always tell. You stand like a senpai." },
      { s: 'solar', f: 'neutral', t: "How does a senpai stand?" },
      { s: 'kasumi', f: 'serious', t: "Like you're about to be disappointed in someone, but you'll be very nice about it." },
      { choose: [
        { t: "...That's fair.", notes: 3, then: [
          { s: 'kasumi', f: 'happy', t: "Can I call you Senpai? I'd really like to." },
          { n: "She asked it so earnestly, up on her toes, that Solar couldn't have said no if she'd tried. She did try, a little, privately, and found she didn't want to." }
        ] },
        { t: "I'm Solar. Just Solar is fine.", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "Solar-senpai, then! I'm sorry, I can't help it. You're very senpai." }
        ] },
        { t: "That's not how I stand.", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "It's a compliment! Mostly!" }
        ] }
      ] },
      { register: 'kasumi' },
      { n: "Solar asked, because it seemed like the thing to ask, why a gymnast was practicing on a shrine instead of in a gym." },
      { s: 'kasumi', f: 'neutral', t: "The light's good here. In the afternoon it comes through the trees sideways, and you can see your shadow on the stones, the whole line of it. Inside, the lights come from everywhere at once, and you can never see what shape you're making." },
      { s: 'kasumi', f: 'happy', t: "Also nobody yells at you about the floor. The stones don't mind." },
      { n: "She practiced for another hour, and Solar sat on the shrine steps with her bag in her lap and watched all of it, which was not what she'd climbed the stairs to do. The light went from gold to orange to the soft gray that comes just before the streetlights, and Kasumi ran the same thirty seconds over and over, the turn and the throw and the catch, and every time she landed she glanced down at the line of her shadow on the stones before she did anything else, checking her work." },
      { n: "At the end she bowed to the offering hall, very properly, and then to Solar, much less properly, and asked if Solar would come back. Solar said she might. On the way down the steps she noticed the back of her neck was warm from the sun, and that somewhere around the second routine she'd stopped counting the exits and hadn't started again." }
    ] },

    { after: '5/12', title: '2: the landing', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'school' },
      { n: "It had rained all morning, a warm gray rain that came straight down and didn't seem to be in any hurry to go anywhere, and by the time school let out the sky had rinsed itself to a pale washed blue and the shrine stones were dark and shining and steaming faintly in the sun, and Kasumi was looking at them the way you'd look at a dog that had bitten you." },
      { s: 'kasumi', f: 'serious', t: "They're slippery, Senpai. I tested. With my whole body." },
      { n: "There was a grass stain on her hip to prove it, and a scrape across one palm that she kept closing her hand over so Solar wouldn't see." },
      { s: 'kasumi', f: 'neutral', t: "There's a landing I can't get. A walkover into a turn, into the catch. My feet know it. My feet have known it since I was nine. And then I get there, and something in my head goes, wait, and I come down half a beat late. Every single time." },
      { choose: [
        { t: "Show me where it goes wrong.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...You'd watch for it? Really carefully?" },
          { n: "Solar said she would. Kasumi ran it on the one dry stone, and at the turn, exactly where she'd said, there was a hitch, almost nothing, a breath held a fraction too long, her eyes flicking down and to the side for a moment as if she'd stopped to check something." },
          { s: 'solar', f: 'neutral', t: "You look down. Right before. Like you're making sure." },
          { s: 'kasumi', f: 'surprised', t: "...I do?" },
          { s: 'kasumi', f: 'happy', t: "Senpai! You're a real judge!" }
        ] },
        { t: "Then don't do it on wet stone. Try again Thursday.", notes: 2, then: [
          { s: 'kasumi', f: 'sad', t: "I know. That's the sensible thing." },
          { s: 'kasumi', f: 'serious', t: "I'm going to do it one more time." },
          { n: "She did it four more times. Solar had suspected she might." }
        ] },
        { t: "You're going to hurt yourself.", notes: 1, then: [
          { s: 'kasumi', f: 'serious', t: "Gymnasts are always a little hurt, Senpai. It's in the contract." }
        ] }
      ] },
      { n: "They sat on the dry end of the steps afterwards while the stones finished steaming, and Kasumi let Solar put a plaster on her palm, holding her hand out flat and very still like a patient at the dentist, and talked, because Kasumi, once she'd decided you were safe, talked the way water runs downhill." },
      { s: 'kasumi', f: 'neutral', t: "My sister and I used to practice in the park by our house until the streetlights came on. She'd count for me. She has a better sense of rhythm than I do. She just doesn't think so." },
      { s: 'kasumi', f: 'happy', t: "Now I have a real coach, and a real gym, at school. Shujin Academy, in Aoyama. Have you heard of it? Everybody in Tokyo knows it. The gym has these huge windows." },
      { s: 'solar', f: 'neutral', t: "Is it new?" },
      { s: 'kasumi', f: 'surprised', t: "Shujin? No, it's been there forever. It's very old and very strict, and the cafeteria curry is terrible. Why?" },
      { choose: [
        { t: "I'd like to see you compete there someday.", notes: 3, then: [
          { s: 'kasumi', f: 'blushing', t: "...You would? Senpai, you can't just say things like that. I'll hold you to it." },
          { n: "She looked away when she said it, at the trees, and her ears were pink, and she didn't let go of the hand Solar had just finished bandaging until it was very obviously finished." }
        ] },
        { t: "No reason. It sounds nice.", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "It is nice! Mostly! You'd like the windows." }
        ] }
      ] },
      { place: 'Iwatodai Strip · Bookworms', time: 'Evening' },
      { n: "Bookworms kept a shelf of school guides by the register, fat paperback directories with glossy covers for parents deciding where to send their children. Solar didn't know why she went in. Her feet turned at the door the way they'd turned at the shrine steps, and then she was standing at the shelf with last year's guide to private high schools in Tokyo open across her arm." },
      { n: "Aoyama had four. None of them was Shujin. She checked the index, and then the index again, and then the pages on either side of where it should have been, in case it had been filed under an old name or a sister school or a typo." },
      { n: "There was nothing. Not a torn-out page, not a misprint. Only the schools that were there, in order, closing up neatly over the place where an old, strict school with terrible curry should have been, as if nobody had ever thought to leave room for it." },
      { n: "It was last year's edition. Kasumi might have said the name wrong, or Solar might have heard it wrong, or it was the kind of school too proud to put itself in a book for parents. There were a dozen explanations, and every single one of them was perfectly reasonable." },
      { n: "The old woman behind the register asked, kindly, whether she was going to buy it. Solar put it back on the shelf with the spine straight and said no, and walked home along the river with the evening coming down blue and the strange, itchy feeling of having been told about something too early." }
    ] },

    { after: '5/23', title: '3: which one', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'tender' },
      { n: "Exams were over, and the whole town seemed to have exhaled at once, and Saturday came in hot and sticky, the first day that felt like it was already thinking about summer, the air under the shrine trees thick and green and loud with something that wasn't quite cicadas yet. Kasumi had borrowed a camera." },
      { n: "It was a small silver digital one, her coach's, she said, with a screen that flipped out on a hinge, no bigger than a matchbox, and she pressed it into Solar's hands with the solemnity of someone handing over a newborn." },
      { s: 'kasumi', f: 'serious', t: "All you have to do is hold it still. Don't follow me with it. Just let me go in and out of the frame. I need to see what the judges see." },
      { n: "Solar held it still. Kasumi went in and out of the frame, a red flicker, then the ribbon, then her, then the ribbon again, and Solar watched the whole routine on the tiny screen instead of in front of her, which was a strange thing to do with a person standing ten feet away, and which made the girl on the screen feel very far off, like someone on television in another room." },
      { n: "Afterwards they sat on the steps with their heads together and played it back. Kasumi watched it three times without saying anything. On the fourth she spoke very quietly, to the screen, not to Solar." },
      { s: 'kasumi', f: 'neutral', t: "She's good, isn't she." },
      { s: 'solar', f: 'neutral', t: "She?" },
      { s: 'kasumi', f: 'surprised', t: "Me. I meant me. Sorry." },
      { s: 'kasumi', f: 'sad', t: "I always do that with these. I watch, and I think, she's good, she's doing everything right, I wonder how she does it. And then I remember it's me, and it's like... like coming back into a room and not being sure I'm the one who left it." },
      { s: 'kasumi', f: 'neutral', t: "Do you ever feel that, Senpai? Like there's the one on the screen, and the one watching, and you don't know which version of you is the real one?" },
      { n: "Something went cold at the back of Solar's neck, under her pinned-up hair, though the afternoon was as warm as it had been all week. She thought of the bathroom mirror on her first morning in the dorm, and the girl in it who had looked back at her like someone across a room she couldn't quite place." },
      { choose: [
        { t: "The one watching. She's the one who cares.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "..." },
          { s: 'kasumi', f: 'blushing', t: "Senpai, that's... that's a really nice thing to say. I'm going to think about that all night. I'm warning you now." }
        ] },
        { t: "Both. You don't have to pick.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "Don't I? Judges pick. That's their whole job." },
          { n: "She smiled, but she kept looking at the little screen a moment longer than the smile lasted." }
        ] },
        { t: "You're overthinking it. It's a camera.", notes: 1, then: [
          { s: 'kasumi', f: 'happy', t: "You sound like my sister." },
          { n: "She laughed and snapped the screen shut, and the subject closed with it." }
        ] }
      ] },
      { n: "Solar almost said it. That she didn't know which one she was either, that some mornings she pinned her hair up before she'd decided to and wondered whose hands those were. It sat right behind her teeth, next to the surnames she hadn't said in April, and she kept it there, like she always did, and asked Kasumi to show her the balance thing again instead." },
      { s: 'kasumi', f: 'happy', t: "Okay! Up on the stone. Give me your hands, Senpai. I'll hold on until you've got it." },
      { choose: [
        { t: "(Hold on.)", notes: 3, then: [
          { n: "Solar held on. Kasumi's hands were warm and a little rough at the palms, chalk-dry, the plaster from the other week long gone, and she held on with total seriousness, counting under her breath, and somewhere around eight Solar stopped wobbling and realized she was looking at Kasumi's face instead of anything far away and not moving, and that it was working anyway." },
          { s: 'kasumi', f: 'blushing', t: "...Okay. You've got it. You can let go now." },
          { n: "Neither of them did, for a second. Then Kasumi did, all at once, and said something very fast about water breaks, and went to get some." }
        ] },
        { t: "(Let go and try it alone.)", notes: 2, then: [
          { n: "Solar let go. She lasted four seconds, which was three more than last time, and then tipped, and Kasumi caught her by both elbows without seeming to think about it at all, the way you'd catch something you'd been expecting to fall." },
          { s: 'kasumi', f: 'happy', t: "Four! That's progress! Again!" }
        ] }
      ] },
      { n: "The light went orange in the trees. Kasumi made her promise to come back next Saturday, hand on her heart, as if it were a very serious oath, and Solar promised, and went down the steps with the warm, slightly unsteady feeling of having stood on one foot for longer than she should have, and didn't look too closely at the rest of it." }
    ] },

    { todo: 'Rank 4 (see plot doc §5).' },
    { todo: 'Rank 5 (see plot doc §5).' },
    { todo: 'Rank 6 (see plot doc §5).' },
    { todo: 'Rank 7 (see plot doc §5).' },
    { todo: 'Rank 8 (see plot doc §5).' },
    { todo: 'Rank 9 (see plot doc §5).' },
    { todo: 'Rank 10 (see plot doc §5).' }
  ]
});
