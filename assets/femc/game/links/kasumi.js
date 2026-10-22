/* Kasumi Yoshizawa · Faith. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Persona-world cast (kind 'persona', Kat's ruling 2026-10-20): a first-year gymnast from Tokyo, down here this year for
   training, her school and her sister a train ride and a text away. Side romance (route choice at rank 9). No `closes`.
   P5R's third-semester twist is felt, never stated: she is never named anything but Kasumi. afterMax: 2 scenes; christmas:
   12/24. Holidays and reactive texts: data/living-persona.js. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kasumi', name: 'Kasumi Yoshizawa', short: 'Kasumi', arcana: 'Faith', numeral: '', from: 'Persona 5 Royal',
  kind: 'persona',
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
    ],
    [
      { n: "Kasumi had bought an ema from the shrine office, a small wooden plaque with a horse painted on one side, and was standing in front of the rack where the wishes hung with the marker cap between her teeth, glaring at the blank side like it had challenged her to something. She'd already written three wishes on it and crossed all three out." },
      { s: 'kasumi', f: 'serious', t: "It has to be exactly right, Senpai. You only get one per plaque. The gods are very busy." },
      { n: "Solar read the crossed-out ones over her shoulder. A gold medal. To land the walkover. And a third she'd crossed out so thoroughly, back and forth until the wood had gone dark and fuzzy, that there was nothing left of it at all but the first stroke of the first character, which could have been the start of almost anything." },
      { choose: [
        { t: "Wish for something that isn't about winning.", notes: 3, then: [
          { n: "Kasumi looked at the plaque for a long time with the marker hovering. Then she wrote, small, in the one clean corner left, and hung it up on the rack with the others before Solar could see, and then, when Solar didn't try to look, turned it around so she could." },
          { n: "It said, I want to like my own routine." },
          { s: 'kasumi', f: 'blushing', t: "Don't laugh. It's harder than a medal." }
        ] },
        { t: "(Buy one too, and write yours next to hers.)", notes: 2, then: [
          { n: "Solar bought one too, and stood in front of it with the marker for so long that Kasumi started to worry, and in the end wrote that she'd like to know what to wish for, and hung it up next to Kasumi's." },
          { s: 'kasumi', f: 'surprised', t: "Senpai, that's cheating!" },
          { s: 'kasumi', f: 'happy', t: "...That's the best one on the whole rack." }
        ] },
        { t: "Just wish for the medal.", notes: 1, then: [
          { s: 'kasumi', f: 'neutral', t: "...You're right. It's the sensible one." },
          { n: "She wrote it out again, very neatly, under the crossings-out, and hung it up, and then reached back and turned it to face the wall." }
        ] }
      ] },
      { n: "The wind came through the shrine trees and set every plaque on the rack knocking gently against the next, a soft wooden chatter like a lot of people talking quietly at once, all those wishes, and Kasumi stood and listened to it with her head on one side, the way you'd listen for your own name in a crowd." }
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
      { s: 'kasumi', f: 'happy', t: "Now I have a real coach, and a real gym, at school. Shujin Academy, in Aoyama. Have you heard of it? Everybody in Tokyo knows it. The gym has these huge windows. They sent me down here this year to train with a coach at the sports center by the bay. It's a very big honor. I cried in the office." },
      { s: 'solar', f: 'neutral', t: "Is it far?" },
      { s: 'kasumi', f: 'surprised', t: "Shujin? An hour, if you get the express. It's very old and very strict, and the cafeteria curry is terrible. Why?" },
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
      { n: "Bookworms kept a shelf of school guides by the register, fat paperback directories with glossy covers for parents deciding where to send their children. Solar told herself she only wanted to see the windows. Her feet turned at the door the way they'd turned at the shrine steps, and then she was standing at the shelf with last year's guide to private high schools in Tokyo open across her arm." },
      { n: "Aoyama had four. Shujin was the second, a half page in small gray type: founded long ago, uniform regulations strictly observed, a volleyball program and a gymnastics program both described, in the guarded language of school guides, as of national standing. There was a photograph of the gym, very small. The windows really were huge." },
      { n: "Solar stood at the shelf and read the half page twice, the founding year and the bus routes and the line about the cafeteria, which did not mention the curry, and found that she was pleased about it, quietly and out of all proportion, the way you'd be pleased to find a friend's name in a newspaper. It was a strange thing to have done. She couldn't have said what she'd expected. Only that she'd wanted to see the place a person came from, since she couldn't see her own." },
      { n: "The old woman behind the register asked, kindly, whether she was going to buy it. Solar put it back on the shelf with the spine straight and said no, and walked home along the river with the evening coming down blue and the slightly foolish feeling of having looked up a friend's school like somebody's mother." }
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

    { after: '6/2', title: '4: glasses', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'day' },
      { n: "June came in gray and heavy and humming, the sky low enough over the shrine to touch, the air so full of water it didn't need to rain to be wet, and the flat stones had the dark, sweating look they got before a storm. Kasumi was stretching under the eaves of the offering hall when Solar came up the steps, one leg straight up along a wooden pillar as if that were a thing legs did, chatting to the stone fox by the step about the weather." },
      { s: 'kasumi', f: 'happy', t: "Senpai! Perfect timing. Can you hold my ankle? Not pull. Just hold. I'm trying to get one more inch and my body's being very stubborn about it." },
      { choose: [
        { t: "(Hold her ankle exactly where she shows you.)", notes: 3, then: [
          { n: "Her ankle was narrow and very warm, and the tendon at the back of it was a taut cord under Solar's fingers. Kasumi breathed out slowly through her mouth and leaned, and Solar felt her give the inch, a tiny shift, like a drawer finally sliding shut." },
          { s: 'kasumi', f: 'happy', t: "There! You felt that, right? Senpai, you're a natural spotter." }
        ] },
        { t: "Is your leg supposed to go that way?", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "Mm-hm! Legs go every way if you ask them nicely for ten years." }
        ] },
        { t: "I'm going to break you.", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "You won't! ...Probably! Gymnasts are very hard to break. We're like cockroaches, but bendy." }
        ] }
      ] },
      { n: "The rain came while she was doing the other leg. Not a shower but the real thing, all at once, a roar on the roof of the offering hall and the stones going from dark to black to shining in the space of a breath, the water sheeting off the eaves a foot in front of them like a bead curtain. They were trapped, cheerfully, in a strip of dry wood a yard deep." },
      { n: "Kasumi sat down on the edge of the step beside her with her knees up and wiped the rain off her forehead with the back of her wrist, and then put two fingers to the bridge of her nose and pushed up, quick and absent, the way you'd push up a pair of glasses that had slipped." },
      { n: "There were no glasses. Solar looked at her bare face and the two fingers resting on nothing, and Kasumi looked at her own fingers as if they belonged to somebody else, and took them away." },
      { s: 'kasumi', f: 'happy', t: "Ha. Oops. I do that sometimes. Isn't that funny? I don't wear glasses." },
      { s: 'kasumi', f: 'neutral', t: "I've never worn glasses." },
      { n: "She said the second part a little slower than the first, like she was checking it as she went." },
      { choose: [
        { t: "You did it in May, too. On the steps.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...Did I?" },
          { s: 'kasumi', f: 'neutral', t: "I didn't notice. My hands do things sometimes, before I've decided. Do yours?" },
          { n: "Solar thought of her own hands in the bathroom mirror on her first morning, pinning up her hair before she'd decided to, and didn't answer, and Kasumi seemed to take that as a yes." }
        ] },
        { t: "(Say nothing. Watch the rain.)", notes: 2, then: [
          { n: "Solar watched the rain. Beside her she felt Kasumi let out a breath she'd been holding, very carefully, the way you'd set down something you'd been afraid of dropping." }
        ] },
        { t: "Maybe you need glasses.", notes: 1, then: [
          { s: 'kasumi', f: 'happy', t: "My eyes are perfect! I had them tested. Perfect, perfect, perfect." },
          { n: "Three times, like a rule she'd been made to copy out." }
        ] }
      ] },
      { n: "She talked, then, because Kasumi, trapped anywhere for more than a minute, talked. About Shujin, the old strict school with the big windows in the gym. About being the honor student there, the one everyone knew, the girl with the scholarship and the coach who'd come from a national team and the perfect record, never a practice missed, never a grade below the top ten. She said it all brightly and fast, like reading off a card, and Solar listened to the rain under it." },
      { s: 'kasumi', f: 'neutral', t: "And when it gets to be too much I talk to Dr. Maruki. He's the counselor at school. He's so kind, Senpai. He always says I never have to look back. That I can just be happy, and keep going forward, and never look back at all." },
      { s: 'kasumi', f: 'happy', t: "Isn't that a nice thing to tell someone?" },
      { n: "Something in it sat wrong with Solar, the way a stair sits wrong in the dark when you've miscounted. She couldn't have said what. Never look back. She'd have given a great deal, some nights, to have anything back there to look at." },
      { choose: [
        { t: "What if there's nothing back there to look at?", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "Senpai?" },
          { n: "So Solar told her, because it was raining and there was nowhere to go. Not much. That she didn't remember anything from before April. That she knew a song nobody else knew, and how to stand, and not a great deal else." },
          { s: 'kasumi', f: 'sad', t: "Nothing? Not anything?" },
          { s: 'kasumi', f: 'happy', t: "Then we'll make some. New ones. I'll make you so many you'll get sick of them, Senpai. I'm very thorough." },
          { n: "She meant it. Then she looked out at the rain for a while, and said, more quietly, that it sounded almost peaceful, not having anything back there, and then looked like she wished she hadn't said it." }
        ] },
        { t: "Who told you that again?", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "Dr. Maruki! He's wonderful. He fixes everything." },
          { s: 'kasumi', f: 'neutral', t: "...Well. He helps people fix things. That's what I meant." },
          { n: "She corrected herself fast, the way a foot catches a slip before the rest of you knows you've slipped." }
        ] },
        { t: "That's good advice.", notes: 1, then: [
          { s: 'kasumi', f: 'happy', t: "Right? I think so too." },
          { n: "She said it brightly, and then picked at the faint scar on her palm where the plaster had been in May, and didn't say anything else for a while." }
        ] }
      ] },
      { n: "The rain stopped the way it had started, all at once, like a tap turned off, and the light came back yellow and steaming through the trees. The stones were full of little puddles, every dip and crack holding a piece of sky. Kasumi went out barefoot to test whether they were too slippery and stopped over the biggest one to redo her ponytail, looking down into it like a mirror, tugging the red bow tight." },
      { n: "Solar, behind her, looked down into it too. For a second, in the brown water, with the light behind her, the girl in the puddle had her hair down, loose around her face, and no bow at all, and something across her eyes that caught the light the way lenses do." },
      { n: "Then a drop fell from the eaves and broke it, and the rings went out to the edges, and when the water stilled there was only Kasumi, bow tight, ponytail high, beaming up at her from the puddle." },
      { s: 'kasumi', f: 'happy', t: "Senpai? Are you okay? You look like you saw a ghost." },
      { n: "Solar said she was fine. She said it like she always did, easily, with her face arranged. On the way down the steps she counted them, all of them, twice, and it didn't help." }
    ] },

    { after: '6/23', title: '5: the light is good', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'tender' },
      { n: "The rainy season had settled in properly, a week of it, and today was only a pause, the sky the color of wet paper and the stones dry in patches like islands. Kasumi wasn't practicing. She was sitting on the shrine steps with her bag in her lap and her ribbon stick laid across her knees, not moving, which in two months Solar had never once seen her do." },
      { s: 'kasumi', f: 'neutral', t: "Senpai. Can I tell you something strange? You have to promise not to look at me like I'm strange." },
      { n: "Solar promised." },
      { s: 'kasumi', f: 'neutral', t: "On Sunday I wanted to go home. Just for a day, to see my sister. I went to the station and stood at the ticket machine, and I couldn't think which station was mine." },
      { s: 'kasumi', f: 'sad', t: "I've taken that train every day since I was twelve. I know every stop. And I stood there with the coins in my hand and there was nothing. Like a word on the tip of your tongue, except it was my whole house." },
      { n: "She laughed, small, not much like a laugh." },
      { s: 'kasumi', f: 'neutral', t: "So I came here and practiced until my arms hurt, and that helped. It always helps." },
      { n: "Solar didn't have a word for that part. She had a word for something else, though, and she'd been carrying it up these steps every Tuesday and Thursday since last week, since Mitsuru's table and Fuuka sitting with her eyes closed, listening to the city, and saying, quietly, that there was someone at the old shrine who didn't go into a coffin at midnight. She'd been setting it down at the top of the steps and picking it up again on the way down." },
      { choose: [
        { t: "(Tell her. All of it, plainly.)", notes: 3, then: [
          { n: "So Solar told her plainly, the way Mitsuru told things, because she couldn't think of a gentler way that wouldn't turn out worse. That there was an hour between one day and the next that most people slept through without knowing, sealed in coffins in the green. That a few people didn't. That Fuuka could hear the ones who didn't, and that Fuuka had heard her. Kasumi listened to all of it without interrupting once, which she had never done in her life, with both hands flat on her knees." }
        ] },
        { t: "(Tell her a piece at a time, watching her face.)", notes: 2, then: [
          { n: "Solar told it in pieces, the hour, the coffins, the few who stayed awake, Fuuka listening, stopping after each one to see if Kasumi wanted the next. Every time, Kasumi nodded, very small, the way you'd nod at a coach calling out the next element, and Solar went on." }
        ] },
        { t: "Maybe you're just homesick.", notes: 1, then: [
          { s: 'kasumi', f: 'neutral', t: "Maybe. ...Senpai, you're doing the face. The one where you're being very nice about being disappointed." },
          { n: "So Solar told her the rest. Kasumi listened to it with her hands flat on her knees." }
        ] }
      ] },
      { s: 'kasumi', f: 'surprised', t: "...A secret hour." },
      { s: 'kasumi', f: 'happy', t: "Okay! Okay. That's... okay. It's like an extra session. A really, really late extra session." },
      { s: 'kasumi', f: 'neutral', t: "I remember my first night now. Isn't that strange? I didn't, before. I came down on the last train in the rain, with my bag and my ribbon stick, and I was waiting on the platform for someone from the sports center, and I closed my eyes for one second because I was so tired." },
      { s: 'kasumi', f: 'neutral', t: "And when I opened them everything was green and quiet, and there was a girl on a bench. Small. In a coat much too big for her, with a cap. She told me there was a shrine that way. She said the light was good there in the afternoon." },
      { n: "The light's good here. Kasumi had said it to Solar the very first day, on these stones, as if it had been her own idea. The hairs on Solar's arms rose under her sleeves, slowly, one at a time, though the air was as warm and wet as bathwater." },
      { s: 'kasumi', f: 'serious', t: "Mitsuru-senpai asked me why I came all the way down here. I said for the training. That's true. Everything at home is perfect. My grades. My coach. My sister. Everything is exactly how I want it to be." },
      { s: 'kasumi', f: 'neutral', t: "So why did it feel like running?" },
      { choose: [
        { t: "Then why does going home scare you?", notes: 3, then: [
          { n: "Kasumi didn't answer for a long time. A crow walked across the stones in front of them, looked at them both, and walked off again." },
          { s: 'kasumi', f: 'sad', t: "...I don't know. Isn't that worse? I think that's worse." }
        ] },
        { t: "Perfect sounds tiring.", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "It is! It's so tiring!" },
          { s: 'kasumi', f: 'surprised', t: "...Don't tell anyone I said that." }
        ] },
        { t: "Maybe it was just the training.", notes: 1, then: [
          { s: 'kasumi', f: 'happy', t: "Maybe! That must be it!" },
          { n: "She said it brightly, and too fast, like landing a move a beat early so nobody would see you wobble." }
        ] }
      ] },
      { s: 'kasumi', f: 'neutral', t: "And Mitsuru-senpai said nobody should be awake in that hour on their own." },
      { n: "She put the ribbon stick down on the step and held out both hands, palms up, the way she had on the balance stone in May." },
      { s: 'kasumi', f: 'blushing', t: "Then hold on, Senpai. Like on the stone. Until I've got it." },
      { choose: [
        { t: "(Hold on.)", notes: 3, then: [
          { n: "Solar held on. Kasumi's hands were warm and chalk-dry, and she counted under her breath the way she had on the stone, one, two, three, and at eight she said okay, very quietly, and didn't let go, and neither did Solar." },
          { s: 'kasumi', f: 'blushing', t: "It works better than the stone." }
        ] },
        { t: "(Hold on, and count for her out loud.)", notes: 2, then: [
          { n: "Solar counted, out loud, which she had never done for anyone, in her flat low voice, and at seven Kasumi started laughing and couldn't stop, and at eight she said Solar sounded like a very tired referee, and held on harder." }
        ] },
        { t: "Mitsuru wants to meet you. You'll have the whole dorm.", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "Mitsuru-senpai? The student council president? Senpai, I'll have to iron something." },
          { s: 'kasumi', f: 'neutral', t: "...But I meant you." },
          { n: "She kept her hands out until Solar took them." }
        ] }
      ] },
      { n: "The rain came back at five, soft, almost apologetic. Kasumi walked her down to the gate under one umbrella and announced, with total seriousness, that she had decided to treat the green hour as part of the training camp, the hardest part, the one nobody puts on the schedule, and that she was going to come out of it better than she went in. Solar said that sounded like her. Kasumi beamed. Solar walked home in the rain thinking that it sounded exactly like her, and that that was the trouble." }
    ] },

    { after: '7/14', title: '6: always lands it', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'school' },
      { n: "Finals week, and the rainy season had ended overnight like someone had pulled a plug, and by four the shrine was white with sun and the cicadas had arrived all at once, a solid wall of noise in the trees that made the air itself seem to vibrate. Kasumi had made score cards. She had cut them out of a cereal box and written the numbers on the gray side in thick black marker, one through ten, and she handed the stack to Solar with the solemnity of a coronation." },
      { s: 'kasumi', f: 'serious', t: "You're the panel. All of the judges. Be harsh. Be honest, not nice. I mean it, Senpai." },
      { n: "She ran it. The whole routine, start to finish, on the hot flat stones, the ribbon going up red against the green and coming down half a second after her, and it was beautiful right up until the walkover into the turn into the catch, the one from May, where she came down half a beat late and her heel skidded and she went over sideways onto one hip." },
      { choose: [
        { t: "(Hold up a seven. Honestly.)", notes: 3, then: [
          { s: 'kasumi', f: 'serious', t: "...Thank you. Thank you for not giving me a nine." }
        ] },
        { t: "(Don't hold anything up. Ask if she's hurt.)", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "No! I'm fine. That's not a judge question, Senpai. Judges don't ask." }
        ] },
        { t: "(Hold up a ten.)", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "Senpai! That's nice, not honest!" }
        ] }
      ] },
      { s: 'kasumi', f: 'serious', t: "Again." },
      { n: "She ran it again. Same place, same skid. Again. The scrape on her knee opened and she didn't look at it. Again. The heat came up off the stones in waves, and her face had gone a dark, blotched red, and the bow in her hair had slipped sideways, and every time she got up she said again, flatter each time, like a machine that only had one word left." },
      { choose: [
        { t: "Kasumi. Stop.", notes: 3, then: [
          { s: 'kasumi', f: 'serious', t: "I can't stop!" }
        ] },
        { t: "(Go down onto the stones with her.)", notes: 2, then: [
          { n: "Solar went down onto the hot stone beside her and put a hand flat on her back, between the shoulder blades, and felt her breathing, fast and shallow and furious." }
        ] },
        { t: "(Keep holding up the cards.)", notes: 1, then: [
          { n: "Solar held up a six, and then a six, and then a five, because she'd asked for honest, and Kasumi looked at the five and something in her face cracked straight across." }
        ] }
      ] },
      { s: 'kasumi', f: 'serious', t: "I have to land it. Kasumi always lands it." },
      { n: "She heard it at the same moment Solar did. The name in her own mouth like it belonged to somebody standing a little to one side of her. She sat back on her heels on the hot stone with the ribbon wound around one ankle and her hands open in her lap, and looked at nothing." },
      { s: 'kasumi', f: 'surprised', t: "...Why did I say it like that?" },
      { choose: [
        { t: "(Don't explain it away.)", notes: 3, then: [
          { n: "Solar didn't. She sat down cross-legged beside her with the cereal box cards in her lap and let it be strange, and didn't hurry it, and after a while Kasumi looked at her as if that were the kindest thing anyone had done for her in a long time." },
          { s: 'kasumi', f: 'sad', t: "...Thank you for not saying it's nothing." }
        ] },
        { t: "People talk about themselves like that when they're tired.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "Do they? ...Yes. I'm just tired. That's all it is." },
          { n: "She took it gratefully, the way you'd take a hand up, and Solar watched her take it and wasn't sure she'd done her a kindness." }
        ] },
        { t: "Your name's Kasumi. It's fine.", notes: 1, then: [
          { s: 'kasumi', f: 'neutral', t: "...Right. Of course it is." },
          { n: "She smiled. It held. Only just, the way a stance holds at the very end of a long routine, when everything in you is shaking and the judges are still looking." }
        ] }
      ] },
      { n: "Later, when the shade from the big tree had come all the way across the stones, she did it one more time, just to cool down, she said, not trying. And it was different. Slower into the turn. A little pause at the top that wasn't a mistake at all, her arm coming round lower and softer, the ribbon following it like a sigh instead of a whip. She came down out of the walkover and caught the stick and stood, and didn't skid." },
      { n: "She didn't seem to notice she'd landed it." },
      { s: 'solar', f: 'neutral', t: "You landed it." },
      { s: 'kasumi', f: 'surprised', t: "I did? ...That wasn't the routine. That's not how it goes. I just did whatever my body wanted to do." },
      { s: 'kasumi', f: 'neutral', t: "Which one did you like better, Senpai? Honestly." },
      { choose: [
        { t: "The second one.", notes: 3, then: [
          { n: "Kasumi went very quiet. The cicadas filled the space where her answer should have been." },
          { s: 'kasumi', f: 'sad', t: "...Me too. I don't know why. It's not as good. It's not as hard. It just feels like... mine, kind of." }
        ] },
        { t: "They were both good.", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "That's nice, not honest. But I'll let you have it, because it's hot." }
        ] },
        { t: "The first one. It's harder.", notes: 1, then: [
          { s: 'kasumi', f: 'neutral', t: "Yes. It is. That's the right answer." },
          { n: "She said it like a line she'd memorized a long time ago, for a test, and passed." }
        ] }
      ] },
      { n: "She took the cereal box cards home in her bag, all of them, even the ones Solar hadn't used, and at the bottom of the steps she turned around and called up that she'd be back on Thursday, and that on Thursday she was going to do the second one first." }
    ] },

    { after: '8/18', title: '7: sparklers', place: 'Port Island · Pier', time: 'Evening', scene: [
      { phone: [
        { from: 'kasumi', t: "Senpai! I found sparklers at the convenience store. The little paper ones! 🎀" },
        { from: 'kasumi', t: "The pier at seven? I'll bring water. And a lighter. And snacks. Mostly snacks." }
      ], contact: 'Kasumi' },
      { music: 'tender' },
      { n: "The tail end of August, and the heat hadn't broken so much as tired out, lying over the bay in a warm damp blanket that didn't move. The pier was nearly empty at seven, an old couple at the far rail and a boy with a fishing rod he wasn't paying attention to, and the water had gone from silver to pewter to ink while Solar walked out along the boards. Kasumi was sitting cross-legged at the end with a convenience store bag, a paper cup of water, and a small flat packet of senko hanabi, the thin twisted-paper sparklers you hold hanging down, like something lit at the end of a thread." },
      { s: 'kasumi', f: 'happy', t: "Okay, rules. You hold it very still, hanging straight down. It makes a little ball of fire at the end, and then sparks, and then smaller sparks. Whoever's ball drops last wins." },
      { s: 'kasumi', f: 'neutral', t: "My sister and I did this every summer on our balcony. She always won. Every single year. I always moved too much. I always wanted to see it better, so I'd lean in, and it would drop." },
      { n: "Solar thought of the girl on the stone the size of a tray, in May, who hadn't wobbled once. She said nothing. She took the sparkler Kasumi held out and Kasumi lit them both off one flame, cupping it against the breeze off the water, and they sat facing each other on the boards with their arms out over the dark like two people fishing for something small." },
      { choose: [
        { t: "(Hold yours perfectly still.)", notes: 3, then: [
          { n: "Solar held it still. She'd been holding things still her whole life, apparently, without remembering learning how. The little ball of fire hung trembling at the end of the paper and threw off sparks like frost cracking, and Kasumi's dropped first, a tiny orange tear into the black water, and she gasped as if it were tragic." },
          { s: 'kasumi', f: 'happy', t: "Senpai! You're a natural! Is there anything you're not a natural at?" }
        ] },
        { t: "(Watch hers instead of your own.)", notes: 2, then: [
          { n: "Solar watched Kasumi's instead, the ball of fire and her face behind it, lit orange from below and absolutely intent, and her own dropped before she noticed." },
          { s: 'kasumi', f: 'surprised', t: "Senpai! You're supposed to look at yours!" }
        ] },
        { t: "(Lean in to see it better.)", notes: 1, then: [
          { n: "Solar leaned in to see the sparks properly, and her ball dropped straight into the bay with a tiny hiss." },
          { s: 'kasumi', f: 'happy', t: "You're like me! ...Like I was. When I was little." }
        ] }
      ] },
      { n: "They did the second pair. The third. The packet thinned. On the last one, Kasumi's didn't drop. It hung there at the end of the paper, trembling, spitting its little branches of light, and went on, and on, past Solar's, past the point where they always went, until it was the only light on the whole pier, and Kasumi was holding perfectly, perfectly still, and crying." },
      { n: "Not much. Not loudly. Her face didn't move at all. The tears just came down, one after the other, and caught the orange light, and she didn't wipe them, because wiping them would have meant moving." },
      { s: 'kasumi', f: 'sad', t: "It's never mine that lasts. It's never been mine." },
      { choose: [
        { t: "It's yours tonight.", notes: 3, then: [
          { n: "The ball of fire dropped, finally, a long slow orange fall into the water. Kasumi let out the breath she'd been holding." },
          { s: 'kasumi', f: 'sad', t: "...Tonight. Okay. Tonight's enough." }
        ] },
        { t: "(Light another one and put it in her hand.)", notes: 2, then: [
          { n: "There was one left in the packet. Solar lit it off the last of Kasumi's and closed her fingers around the paper, and Kasumi held it, and laughed, wet, and said that was cheating, and held it anyway until it dropped." }
        ] },
        { t: "Your sister would be proud.", notes: 1, then: [
          { s: 'kasumi', f: 'sad', t: "...Would she?" },
          { n: "She said it so quietly that the water against the pilings nearly took it, and Solar wasn't sure, afterwards, that she'd been meant to hear it at all." }
        ] }
      ] },
      { n: "They sat in the dark with the cup full of burnt wires between them. Out on the bay a ferry went by lit up like a birthday cake, and its wake came in a minute later and slapped under the boards." },
      { s: 'kasumi', f: 'neutral', t: "Senpai. Do you want your memories back? Even if... even if it turned out you were somebody else? Somebody you didn't like as much?" },
      { n: "Solar didn't know. She thought of the song she hummed that nobody knew, and the surnames that tried to come up two at a time, and her hands pinning her hair before she'd told them to. She had the strange, unprovable feeling sometimes, right at the edge of sleep, that whoever she'd been had been more than one girl at once, and that every one of them had been very tired." },
      { choose: [
        { t: "I want them. Even if I don't like her.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...You're so brave, Senpai." }
        ] },
        { t: "I don't know.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "Me neither. I'm glad it's not just me." }
        ] },
        { t: "No. This is enough.", notes: 1, then: [
          { s: 'kasumi', f: 'happy', t: "Yeah. Me too." },
          { n: "Too fast. Too bright. The two of them sat with it, the thing they'd both said too fast." }
        ] }
      ] },
      { s: 'kasumi', f: 'sad', t: "I think I don't want mine. Isn't that terrible? I think if I remembered everything, I'd have to be somebody sadder." },
      { n: "She took the last burnt wire out of the cup, the one that had lasted, and wrapped it carefully in a convenience store napkin, and put it in the pocket of her shorts, and didn't explain. They walked back along the pier in the dark without saying much, and at the end of it Kasumi took Solar's sleeve, just the sleeve, for the last few steps, and let go at the street." }
    ] },

    { after: '9/22', title: '8: higan', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'mystery' },
      { n: "It was the equinox week, the days and the nights the same length for a little while, and overnight, as if somebody had planted them in the dark, the red spider lilies had come up along the path to the shrine. Higanbana. Tall bare green stalks with no leaves at all and at the top of each one a burst of thin red petals curling back on themselves, like something caught in the moment of going off. They lined the steps on both sides. The whole shrine looked like it was on fire at the edges." },
      { s: 'kasumi', f: 'neutral', t: "My sister hates these. She says they look like they're burning." },
      { s: 'kasumi', f: 'happy', t: "I think they're beautiful. Okay! Ribbon toss today, Senpai. You're learning one thing. Just one. I promise it's easy." },
      { n: "It was not easy. The ribbon was six meters of red silk on a stick, and in Kasumi's hand it drew perfect spirals in the air, and in Solar's it did something closer to a dog chasing its own tail and then lying down in a heap." },
      { choose: [
        { t: "(Try again. And again. And again.)", notes: 3, then: [
          { n: "Solar tried again, and again, with her jaw set, while Kasumi called out corrections, wrist, Senpai, it's all wrist, and on the eleventh try the ribbon went up in one clean loop and came down in another, and hung there for a second like a drawn circle, and collapsed." },
          { s: 'kasumi', f: 'happy', t: "SENPAI! A circle! A real one! I'm going to cry." }
        ] },
        { t: "(Hand it back. Watch her do it instead.)", notes: 2, then: [
          { n: "Kasumi took it back and showed her, slowly, and then not slowly, and Solar watched the red line go up and over against the red flowers until it was hard to tell which was which." }
        ] },
        { t: "The ribbon hates me.", notes: 1, then: [
          { s: 'kasumi', f: 'serious', t: "The ribbon doesn't hate anyone. The ribbon is a mirror, Senpai." },
          { s: 'kasumi', f: 'happy', t: "...Which means you hate yourself a little, but we can fix that." }
        ] }
      ] },
      { n: "Solar's phone went off in her bag on the steps. It did that now. It had been doing it since the end of August, messages from numbers she didn't have, old ones, from people who seemed to know exactly who she was. She checked it, because she always did, and it was another one, nothing much, a single line from somebody asking if she'd eaten. It started with a name." },
      { n: "Kasumi had seen. She'd come to sit on the step below with the ribbon pooled in her lap, and she was looking at the little screen, not reading, just looking." },
      { s: 'kasumi', f: 'neutral', t: "Sol. Is that you?" },
      { s: 'solar', f: 'neutral', t: "I think so." },
      { s: 'kasumi', f: 'neutral', t: "When they call you that, do you turn around?" },
      { n: "It went into Solar the way a draft goes in under a door, low and cold and across the floor before you've noticed. She thought of the first time she'd read it, in her room, the phone open on her knee. How her whole body had turned toward it, before anything in her head had agreed to." },
      { s: 'solar', f: 'neutral', t: "...Yes. Before I've decided to." },
      { s: 'kasumi', f: 'sad', t: "Sometimes I dream somebody's calling me from a long way off. A name. And I turn around before I've decided to, and I wake up before I see who it is." },
      { choose: [
        { t: "(Don't ask what the name is.)", notes: 3, then: [
          { n: "Solar didn't ask. She knew what it was to have a question sitting just behind your teeth and to be grateful when nobody tried to pry it out. Kasumi looked up at her and seemed to understand exactly what she hadn't done." },
          { s: 'kasumi', f: 'sad', t: "...Thank you, Senpai." }
        ] },
        { t: "Maybe it's someone who misses you.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "...Maybe. That's a nice way to think about it." },
          { s: 'kasumi', f: 'sad', t: "That's a scary way to think about it." }
        ] },
        { t: "What's the name?", notes: 1, then: [
          { s: 'kasumi', f: 'happy', t: "I don't remember! Isn't that funny? I always forget it the second I wake up." },
          { n: "She said it too quickly, the way you'd snatch your hand back from a stove, and wound the ribbon around her fingers until they went white." }
        ] }
      ] },
      { n: "The light went orange and slanted, the way Kasumi liked it, and the lilies along the steps lit up like they'd been waiting for it. Kasumi reached out and touched one, very lightly, the curled red petals, and didn't pick it. You weren't supposed to pick them. Everybody knew that." },
      { s: 'kasumi', f: 'neutral', t: "Did you know they come up exactly at the equinox? Every year, the same week, like they can read a calendar. And they come up with no leaves. Just the flower. The leaves come later, after the flower's gone." },
      { s: 'kasumi', f: 'sad', t: "So the flower and the leaves never see each other. They're the same plant, and they never once meet." },
      { s: 'kasumi', f: 'neutral', t: "My sister told me that." },
      { n: "She said it to the flower, not to Solar. Her finger stayed on the red petals a moment longer, so lightly the flower didn't move." },
      { s: 'kasumi', f: 'sad', t: "Isn't that the saddest thing you've ever heard, Senpai?" },
      { choose: [
        { t: "Maybe they know about each other anyway. Underneath.", notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...Through the roots." },
          { s: 'kasumi', f: 'neutral', t: "Yes. Through the roots. The flower's using everything the leaves made last year. It wouldn't even be here without them." },
          { s: 'kasumi', f: 'happy', t: "I like that. I'm going to think that from now on. You can't take it back." }
        ] },
        { t: "(Look at the flowers with her for a while.)", notes: 2, then: [
          { n: "Solar looked. Up close the petals were finer than she'd thought, each one curled back on itself like a hand thrown up, and the long stamens stood out past them like sparks that had been stopped in the act. Kasumi didn't say anything else. She didn't seem to need to." }
        ] },
        { t: "It's just how they grow.", notes: 1, then: [
          { s: 'kasumi', f: 'neutral', t: "I know. That's what makes it sad. Nobody did it to them. It's just how they are." }
        ] }
      ] },
      { n: "Then she stood up and shook out the ribbon and said they still had twenty minutes of good light, and Solar should try one more circle, and Solar did, and it was terrible, and Kasumi clapped anyway, and on the way down the steps between the burning flowers neither of them said anything more about the leaves." }
    ] },

    { after: '10/20', title: '9: whoever you are', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'tender' },
      { bg: 'naganaki-shrine-autumn' },
      { n: "October, and the ginkgo by the offering hall had gone gold all at once, the way ginkgos do, every fan-shaped leaf at the same moment, and was dropping them now in a slow continuous shower so that the stones were half buried in yellow and the whole shrine smelled faintly, unfortunately, of the fruit. Kasumi was sweeping. She'd borrowed the broom from the shrine office. She was sweeping the flat stones clear so she could practice, and the tree was undoing it behind her, and she kept going anyway, with a kind of serene stubbornness Solar had come to recognize." },
      { s: 'kasumi', f: 'happy', t: "Senpai! Grab the other broom. If we both do it, we can beat the tree." },
      { choose: [
        { t: "(Grab the other broom.)", notes: 3, then: [
          { n: "They did not beat the tree. They swept for twenty minutes in silence, side by side, and the tree dropped leaves with perfect patience, and at the end of it they had a square of clear stone the size of a bed, and Kasumi stood in the middle of it with her hands on her hips like a general on a hill." },
          { s: 'kasumi', f: 'happy', t: "Victory. Small, but ours." }
        ] },
        { t: "You know it's going to win.", notes: 2, then: [
          { s: 'kasumi', f: 'happy', t: "I know! That's not the point. The point is the stones are clean for a minute." }
        ] },
        { t: "(Sit on the steps and watch the leaves fall on her.)", notes: 1, then: [
          { s: 'kasumi', f: 'surprised', t: "Senpai! You're on the tree's side!" }
        ] }
      ] },
      { n: "She didn't practice, in the end. She sat on the swept square cross-legged with the broom across her knees, and Solar sat on the step above her, and the leaves came down on both of them, and Kasumi started talking about the new people at the dorm without looking up." },
      { n: "There had been new faces all autumn. Solar knew that better than anyone. People who'd come through the green at midnight calling her Sol across rooms, across streets, and then stopped, stricken, when she didn't run to them. Kasumi had met some of them on the dorm steps and at dinner. She'd been very polite. She'd watched them the whole time." },
      { s: 'kasumi', f: 'neutral', t: "They look at you the way you'd look at a photo of someone. Like they're checking it against something. Like you're almost right." },
      { n: "Solar knew the look. She'd felt it land on her across the dining table, across the lounge, at the top of the stairs, a gaze going over her face feature by feature and coming up short somewhere she couldn't see, and every time, her body had wanted to be whatever it was they were checking for, and hadn't known how." },
      { s: 'kasumi', f: 'neutral', t: "They came for you. People who know exactly who you are. They crossed a whole... whatever it is. For you." },
      { s: 'kasumi', f: 'sad', t: "Nobody would come for me like that." },
      { s: 'kasumi', f: 'neutral', t: "I know that sounds sad. It isn't. Everyone at home knows exactly where I am. My sister writes. My coach calls on Sundays. Everything's perfect. And then I think, if I turned into somebody else, a little bit at a time, would anybody look at me like that? Checking? Or would they just say I was fine." },
      { s: 'kasumi', f: 'neutral', t: "Senpai. When they talk about the girl they know, is that you? Or is this you? The one on my steps?" },
      { choose: [
        { t: "Both. I think I'm both. I don't know how yet.", notes: 3, then: [
          { n: "It was the truest thing she'd said all year, and it came out sounding like a question, and Kasumi turned all the way around on the stones to look at her." },
          { s: 'kasumi', f: 'surprised', t: "Both." },
          { s: 'kasumi', f: 'sad', t: "...Then maybe I'm allowed to be both, too." }
        ] },
        { t: "This is me. This is the one I know.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "The one you know. That's a good answer. That's the one I'd pick too." },
          { s: 'kasumi', f: 'sad', t: "...Even if it isn't the whole answer." }
        ] },
        { t: "I don't know. They seem so sure.", notes: 1, then: [
          { s: 'kasumi', f: 'sad', t: "They do. They really do. I don't think I'd be sure about me." }
        ] }
      ] },
      { n: "A leaf landed in Kasumi's hair, right on the red bow, and stayed there. Solar reached down and took it off before she'd decided to, and Kasumi went very still under her hand, and then turned her face up." },
      { s: 'kasumi', f: 'blushing', t: "Senpai. I want to ask you something. And I want you to answer the girl in front of you. Not the one at Shujin. Not the one with the perfect record. This one. Whoever she is." },
      { s: 'kasumi', f: 'blushing', t: "What am I to you?" },
      { route: [
        { t: "I've fallen for you. Whoever you turn out to be.", route: 'romance', notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "..." },
          { s: 'kasumi', f: 'blushing', t: "Whoever? Even if I'm... even if I'm not exactly who I said?" },
          { s: 'solar', f: 'neutral', t: "Even then." },
          { n: "Kasumi made a sound that wasn't a word and came up off the stones and threw both arms around Solar's neck so hard they nearly went backwards up the steps, broom and all, and held on with her face pressed into Solar's shoulder, and Solar's hand found the back of her head, the warm hair under the bow, and stayed there." },
          { s: 'kasumi', f: 'blushing', t: "Me too, Senpai. Me too. Whoever I am. She does too." }
        ] },
        { t: "My friend. Whoever you turn out to be, I'm on your side.", route: 'friend', notes: 3, then: [
          { s: 'kasumi', f: 'surprised', t: "...Whoever. Even the real one?" },
          { s: 'solar', f: 'neutral', t: "Especially her." },
          { s: 'kasumi', f: 'happy', t: "Senpai. You're the best. You've always been the best. I'm going to cry on a broom." },
          { n: "She did, a little, laughing, with the broom held upright in both hands like a flag, and then she wiped her face on her wrist and said that was enough of that, and that they still had light, and that Solar was learning the circle again whether she liked it or not." }
        ] }
      ] },
      { n: "The ginkgo went on dropping its gold over the swept square, slowly, patiently, undoing everything, and neither of them minded." }
    ] },

    { after: '11/24', title: '10: her own routine', place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'tender' },
      { n: "Late November, and the cold had come in for good, the kind that got into the stones and stayed there, so that sitting on the shrine steps was like sitting on a block of ice with a cushion of good intentions. The trees were bare. The light came straight through them now, thin and silver and low. Kasumi had asked Solar to come at four exactly, and to sit in the middle of the steps, and not to say anything at all until the end." },
      { s: 'kasumi', f: 'serious', t: "The middle, Senpai. Exactly the middle. That's where the head judge sits." },
      { choose: [
        { t: "(Count the steps and sit on exactly the middle one.)", notes: 3, then: [
          { n: "Solar counted them without having to look, and sat on the middle one, and Kasumi watched her do it and nodded once, very seriously, the way you'd nod at a judge who'd taken her seat on time." }
        ] },
        { t: "(Sit one step off, on purpose.)", notes: 2, then: [
          { n: "Kasumi pointed at the correct step without a word and kept pointing until Solar moved, and then said thank you so politely that it was worse than being told off." }
        ] },
        { t: "(Raise an eyebrow at her. You were told not to talk.)", notes: 1, then: [
          { s: 'kasumi', f: 'neutral', t: "Because I want to know exactly where you are. The whole time. So I don't have to look for you." }
        ] }
      ] },
      { n: "She'd tied her hair differently. Low, at the nape, in a plain black band. The red bow wasn't in it. Solar couldn't see where it had gone." },
      { n: "Then she began." },
      { n: "It wasn't the routine. Not the one Solar had watched for six months, the hard bright perfect one with the walkover and the skid. It was the other one, the one from July that her body had done when she wasn't paying attention, but it had grown since then. It had been built out. It was slower, and softer, full of little pauses that turned out not to be hesitations at all but choices, places where she let the ribbon catch up and go past her and then followed it, like she was letting it lead. Her breath came out white. The ribbon went up red against the bare trees and came down without hurrying." },
      { n: "At the walkover she looked down. Solar saw her do it, the old hitch, eyes down and to the side, checking. And then she kept going. Whatever she was checking for was there. She came down through the turn and caught the stick and stood, and held it, arms up, breathing, on a stone the size of a tray, and didn't wobble at all." },
      { s: 'kasumi', f: 'happy', t: "That's me, Senpai. I think that's what I look like." },
      { s: 'kasumi', f: 'neutral', t: "I don't know whose routine it is. I made it this month, out of the parts my body kept doing when I wasn't watching. I looked down. I always look down. And this time I was there." },
      { s: 'kasumi', f: 'neutral', t: "I think one day soon I'm going to wake up. I don't know how I know. And I don't know who I'll be when I do. I think she might be sadder than me. But I wanted somebody to see her first. So somebody saw her." },
      { choose: [
        { t: "I saw her.", notes: 3, then: [
          { n: "Kasumi's face did something complicated and then simple. She came and sat on the step below Solar's, close, with her back against Solar's knees, the way you'd lean on a wall you trusted, and breathed out a long white breath into the cold." },
          { s: 'kasumi', f: 'sad', t: "...Okay. Okay. Then she's real." }
        ] },
        { t: "(Clap. Three times.)", notes: 2, then: [
          { n: "Solar clapped three times, which in the empty shrine, in the cold, sounded like a great deal more than three, exactly as it had in May. Kasumi curtsied. She very clearly hadn't planned to. This time she didn't look mortified about it at all." }
        ] },
        { t: "She was perfect.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "No. She wasn't. She looked down." },
          { s: 'kasumi', f: 'happy', t: "...That's why I like her." }
        ] }
      ] },
      { n: "She put her hand in the pocket of her track jacket and took out the red bow. It looked smaller off her head. Slightly crushed. Like something that had been worn every day for a long time by someone who'd needed it." },
      { ifRoute: 'romance', then: [
        { s: 'kasumi', f: 'blushing', t: "And I wanted the first person to be you. Because you held on. Every time I held out my hands you held on." },
        { choose: [
          { t: "(Kiss her.)", notes: 3, then: [
            { n: "Solar leaned down from the step and kissed her, in the cold, and Kasumi's nose was freezing against her cheek and her mouth was warm, and she made a small surprised sound and then didn't make any sound at all, and her hand came up and took hold of Solar's sleeve and held on, like on the stone." },
            { s: 'kasumi', f: 'blushing', t: "...Senpai. My nose is so cold. I don't care at all." }
          ] },
          { t: "Whoever wakes up, I'd still hold on.", notes: 3, then: [
            { s: 'kasumi', f: 'blushing', t: "You can't just say that. You can't. I'm going to remember that when I'm somebody else and it's going to be so embarrassing." },
            { n: "She pressed her forehead against Solar's knee and laughed into it, and it went on a long time, and it wasn't all laughing, and that was all right." }
          ] },
          { t: "(Take both her hands, like on the stone.)", notes: 2, then: [
            { n: "Solar took them. Cold, chalk-dry, holding back at once. Kasumi counted under her breath, out of habit, and at eight she stopped counting and didn't let go." }
          ] }
        ] },
        { n: "Then she tied the red bow around Solar's wrist, very neatly, a gymnast's knot, and tugged it once to check it." },
        { s: 'kasumi', f: 'blushing', t: "So you have something to hold on to. When I'm not here to hold out my hands." }
      ], else: [
        { s: 'kasumi', f: 'neutral', t: "I want you to have this. It was my sister's first. I think. I've been wearing it a long time. I want it to stay with someone who saw both of us." },
        { choose: [
          { t: "(Tie it in your hair, right now.)", notes: 3, then: [
            { n: "Solar took her hair down and tied it back up with the red bow, high, the way Kasumi wore it, and Kasumi looked at her and burst out laughing so hard she had to sit down on the cold stones." },
            { s: 'kasumi', f: 'happy', t: "It's so high! Senpai, you look like a first-year! You look like me!" },
            { s: 'kasumi', f: 'sad', t: "...You look like me. Okay. Okay, that's good. Keep it like that for a minute." }
          ] },
          { t: "I'll keep it safe.", notes: 3, then: [
            { s: 'kasumi', f: 'happy', t: "I know you will. That's why it's you." }
          ] },
          { t: "Are you sure?", notes: 2, then: [
            { s: 'kasumi', f: 'neutral', t: "No. That's how I know it's the right thing. The sure things are always the ones somebody else decided." }
          ] }
        ] }
      ] },
      { n: "The light went from silver to the soft gray that comes just before the streetlights, the way it had on the first day. Kasumi bowed to the offering hall, very properly, and then turned and bowed to Solar, properly this time too, all the way down." },
      { n: "On the way down the steps Solar realized she hadn't counted them. Not once. Not on the way up either. She couldn't have said how many there were, and for the first time since April, she didn't need to know." }
    ] }
  ],
  // After MAX: they play in order, then rotate, at the shrine. The second scene is set in late January.
  afterMax: [
    { place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'day' },
      { n: "December, and the stones were too cold to practice on barefoot, so Kasumi had moved to sneakers and complained about it bitterly and at length, the way some people complain about the weather and other people complain about a betrayal. She'd started wearing her hair down at the shrine now and then. It was warmer on her neck, she said, which was true, and which Solar didn't think was the reason." },
      { s: 'kasumi', f: 'happy', t: "Okay. Today you're doing a cartwheel. Don't make the face. Everyone can do a cartwheel. Small children can do a cartwheel." },
      { s: 'solar', f: 'neutral', t: "Small children are closer to the ground." },
      { s: 'kasumi', f: 'serious', t: "That's an excuse, Senpai, and I'm not accepting it." },
      { choose: [
        { t: "(Do the cartwheel. Badly. Commit to it.)", notes: 3, then: [
          { n: "Solar did the cartwheel. It was less of a wheel than a sort of collapsing triangle, legs bent, one hand landing a long time after the other, and she came out of it sideways onto the frozen gravel, and lay there looking at the white sky, and Kasumi stood over her with both hands over her mouth." },
          { s: 'kasumi', f: 'happy', t: "That was terrible. That was the bravest thing I've ever seen. Again!" }
        ] },
        { t: "(Make her spot you. Hands on your waist.)", notes: 2, then: [
          { n: "Kasumi spotted her, both hands at her waist, steering her over like a coach with a nervous first-year, and Solar went over and came round and landed on her feet, mostly, held up by Kasumi's grip, and Kasumi didn't let go right away." }
        ] },
        { t: "(Refuse, with dignity.)", notes: 1, then: [
          { s: 'kasumi', f: 'sad', t: "Senpai. Dignity is the enemy of progress." },
          { n: "She did three cartwheels in a row to make the point, hair flying, and landed the last one facing Solar with her arms up, smug, and her breath coming out white." }
        ] }
      ] },
      { n: "Afterwards they sat on the steps and shared a can of hot corn soup from the vending machine at the bottom, passing it back and forth, chasing the last kernels with their tongues, which Kasumi said was a known technique and not at all undignified." },
      { ifRoute: 'romance', then: [
        { n: "Her hands were freezing. She put one of them in the pocket of Solar's coat without asking, alongside Solar's own, and laced their fingers together in the dark of the pocket, and looked straight ahead at the bare trees as if nothing at all were happening in there, and her ears went pink in a way that had nothing to do with the cold." },
        { s: 'kasumi', f: 'blushing', t: "It's for warmth, Senpai. It's practical. Gymnasts are very practical." }
      ], else: [
        { n: "Her hands were freezing, and she'd forgotten her gloves again, so Solar gave her one of hers, and kept the other, and they sat with one gloved hand each and the other shoved in a pocket, which Kasumi declared was the most efficient possible arrangement of resources." },
        { s: 'kasumi', f: 'happy', t: "Half a glove each. That's what friends are, Senpai. Mathematically." }
      ] },
      { n: "When the light started to go she didn't hurry to put her hair back up. She just shook it out of her face, and picked up her bag, and walked down the steps beside Solar with it loose on her shoulders, and the wind took it, and she let it." }
    ] },
    { place: 'Naganaki Shrine', time: 'After School', scene: [
      { music: 'tender' },
      { n: "The last week of January, and there was frost on the flat stones in the mornings that didn't burn off until noon, white ferns of it in every crack, and the shrine had gone back to being the kind of place people walked past on the way to somewhere else. Kasumi was there anyway. She'd been there every day that week. She said she wanted to know the stones by heart, in case she ever had to find them in the dark." },
      { s: 'kasumi', f: 'neutral', t: "I keep dreaming about waking up, Senpai. Every night now. It's not scary anymore. Mostly." },
      { s: 'kasumi', f: 'neutral', t: "I can't see the room. I just know I'm in it. And somebody's going to say something to me when I open my eyes, and I'm going to have to answer." },
      { n: "She did the routine once, her own, the slow one, in sneakers on the frosted stone, carefully, and landed the walkover, and looked down, and was there. Then she did it again, just the first thirty seconds, the turn and the throw and the catch, over and over, the way she had on the very first day, and every time she landed she glanced down at the line of her shadow on the stones before she did anything else, checking her work. The shadow was very long. The sun was very low." },
      { s: 'kasumi', f: 'sad', t: "Senpai. If I wake up and I'm someone else. Someone sadder. Will you still..." },
      { n: "She didn't finish it. She didn't seem to know how it ended." },
      { choose: [
        { t: "I'll know you. Whatever you're called.", notes: 3, then: [
          { s: 'kasumi', f: 'sad', t: "...You can't promise that. You don't even remember your own name half the time." },
          { s: 'solar', f: 'neutral', t: "I turn around for it, though." },
          { n: "Kasumi stared at her. Then she laughed, really laughed, the sound bouncing off the offering hall and coming back, and wiped her eyes with the heel of her hand." },
          { s: 'kasumi', f: 'happy', t: "Okay. Okay. I'll turn around too." }
        ] },
        { t: "(Hold out your hands. Like on the stone.)", notes: 3, then: [
          { n: "Kasumi looked at Solar's hands, palms up, and her mouth went small and wobbly, and she put her own in them, and they stood on the frosted stones holding on and not counting anything at all." }
        ] },
        { t: "You'll still be you.", notes: 2, then: [
          { s: 'kasumi', f: 'neutral', t: "Will I? ...I think I might be more me. That's the scary part. That's the part I've been running from." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "Before they went down she stood on her toes on the top step and kissed Solar's forehead, very lightly, right at the hairline, the way you'd mark the place you meant to come back to." },
        { s: 'kasumi', f: 'blushing', t: "There. So I can find it." }
      ], else: [
        { n: "Before they went down she stood very straight on the top step and bowed to Solar, all the way, the formal bow, the one you give a senpai on the last day of the year, and came up from it grinning and red-eyed." },
        { s: 'kasumi', f: 'happy', t: "Thank you for everything, Senpai. I mean it. All the way down." }
      ] },
      { n: "On the steps going down she held the rail and counted them out loud, all of them, the way Solar used to, and at the bottom she said the number, and said she'd remember it, and Solar believed her." }
    ] }
  ],
  // Christmas Eve (engine need: romance route at MAX on 12/24). Romantic beats sit inside ifRoute so a friend-route play still holds.
  christmas: { place: 'Naganaki Shrine', time: 'Evening', scene: [
    { music: 'date' },
    { phone: [
      { from: 'kasumi', t: "Senpai! It's snowing!! Are you seeing this?! 🎀" },
      { from: 'kasumi', t: "The shrine. Now. Please. I have something. It's a surprise. It's in a box." }
    ], contact: 'Kasumi' },
    { n: "It had started at dusk, the first snow, fine and dry and slow, coming down out of an orange sky onto a city that had stopped to look at it. The dorm behind her had been loud, full to the walls with people who knew her name, and Solar had slipped out the front door with her coat half on and nobody but Koromaru noticing. By the time she reached the shrine steps the snow had settled on every one of them, untouched, and she climbed them leaving the first footprints, and felt, absurdly, like she ought to apologize to the steps." },
    { n: "Kasumi was under the eaves of the offering hall, where they'd sheltered from the rain in June, in a red scarf wound up to her nose and a knitted hat with a pompom, holding a white bakery box in both hands like an offering. The stone foxes had snow on their heads. So did she." },
    { s: 'kasumi', f: 'happy', t: "Merry Christmas, Senpai! Okay. Okay. Close your eyes. No. Open them. It's not that kind of surprise. Look." },
    { n: "Inside the box was a melon bread from the bakery by the station, shaped like a turtle, with a tiny Santa hat piped on its head in red icing, and a dot of white on the end of the hat, and a very determined expression in two chocolate chips." },
    { s: 'kasumi', f: 'blushing', t: "I asked the baker. He said nobody had ever asked for that before. He said it with a lot of feeling." },
    { choose: [
      { t: "It's perfect. I can't eat it.", notes: 3, then: [
        { s: 'kasumi', f: 'happy', t: "You have to eat it! That's the tragedy of baked goods, Senpai. You love them and then you have to eat them." },
        { n: "They ate it. Head first, by unanimous decision, because Kasumi said it would be crueler to make the turtle watch." }
      ] },
      { t: "(Take a picture of it before anything else.)", notes: 2, then: [
        { n: "Solar opened her phone and took a picture of the turtle in its hat, and then, because Kasumi was leaning into the frame to see, a picture of Kasumi with snow on her pompom looking at the turtle, which came out better." }
      ] },
      { t: "Why a turtle?", notes: 1, then: [
        { s: 'kasumi', f: 'surprised', t: "Why NOT a turtle, Senpai?" }
      ] }
    ] },
    { n: "She had a second thing. She held it out with her eyes shut, which seemed to be how she gave presents. A small flat packet in tissue paper. Inside was a hair ribbon, pale pink silk, long enough to tie twice." },
    { s: 'kasumi', f: 'blushing', t: "For when your hands do the thing. When they pin your hair up before you've decided. I've seen you. So they have something nice to do it with." },
    { n: "Solar's hands had already done the thing. They'd taken the ribbon out of the tissue and gone up to the back of her head while she was still looking at it, and wound her hair up, and tied it, twice, neat, and come down again, and Kasumi watched all of it with her mouth open." },
    { s: 'kasumi', f: 'happy', t: "Like that! Exactly like that! Senpai, your hands are so much more decisive than you are." },
    { choose: [
      { t: "(Give her the gloves you brought. Red, warm, a size too big.)", notes: 3, then: [
        { n: "Kasumi's hands were always cold. Chalk-dry and cold, every time Solar held them, in May and June and November. The gloves were red wool, lined, the warmest pair in the shop. Kasumi put them on and held her hands up in front of her face and flexed the fingers and didn't say anything for so long that Solar thought she'd gotten it wrong." },
        { s: 'kasumi', f: 'sad', t: "...Nobody ever gets me practical things. They get me trophies. Little gold people on top of things. You got me warm hands." }
      ] },
      { t: "I didn't know what to get you.", notes: 2, then: [
        { s: 'kasumi', f: 'happy', t: "You came up the steps in the snow. That's the present. I'm counting it. I'm counting it twice." }
      ] },
      { t: "(Give her the photograph, printed small.)", notes: 3, then: [
        { n: "In November Solar had asked to borrow the little silver camera for an afternoon, and taken it to the one-hour place by the station, and had one frame printed from May, from the day she'd held it still. Not the routine. The moment just after, when Kasumi had landed and glanced down at her shadow on the stones. Kasumi held it in both hands under the eaves and looked at it for a long time." },
        { s: 'kasumi', f: 'neutral', t: "She's good, isn't she." },
        { s: 'kasumi', f: 'happy', t: "...I mean me. I know. I meant me." }
      ] }
    ] },
    { n: "The snow had covered the flat stones completely by then, every one of them smooth and white and unbroken. Kasumi looked at them and then at Solar with an expression Solar had learned to fear." },
    { s: 'kasumi', f: 'serious', t: "Balance. On the stone. In the snow. It's tradition." },
    { s: 'solar', f: 'neutral', t: "Since when." },
    { s: 'kasumi', f: 'happy', t: "Since right now! Give me your hands, Senpai." },
    { n: "So Solar stood on one foot on a stone the size of a tray, in the snow, at night, in her good coat, with the pink ribbon in her hair, holding both of Kasumi's gloved hands, and Kasumi stood on the next stone holding hers, both of them wobbling, both of them laughing, their breath going up white between them and the snow coming down through it." },
    { s: 'kasumi', f: 'neutral', t: "Senpai. Will you say my name? Just my name. Not Yoshizawa, not anything. Like you'd say it if you'd know me anywhere." },
    { s: 'solar', f: 'neutral', t: "Kasumi." },
    { n: "Something went across Kasumi's face and was gone, too fast to read, like a bird across a window. She was still smiling. She held on harder." },
    { s: 'kasumi', f: 'sad', t: "...Again?" },
    { s: 'solar', f: 'neutral', t: "Kasumi." },
    { s: 'kasumi', f: 'sad', t: "Thank you. I think I needed to hear someone say it. While they still could." },
    { ifRoute: 'romance', then: [
      { choose: [
        { t: "(Step across onto her stone.)", notes: 3, then: [
          { n: "There wasn't room. That was the point. Solar stepped across onto Kasumi's stone and they stood on it together, both feet between them, holding each other up, wobbling, and Kasumi's face was very close and pink with cold, snow on her eyelashes, and she said, Senpai, we're going to fall, and Solar kissed her, and they didn't." },
          { s: 'kasumi', f: 'blushing', t: "...Okay. New tradition. That one's the tradition now." }
        ] },
        { t: "I'd say it any name you wanted.", notes: 3, then: [
          { s: 'kasumi', f: 'blushing', t: "Senpai..." },
          { n: "She leaned across the gap between the stones until their foreheads touched, hat to bare head, and stayed there, balanced against each other, the snow settling on both of them, and neither of them fell, because neither of them was standing on her own." }
        ] }
      ] }
    ], else: [
      { choose: [
        { t: "(Hold on until she's got it.)", notes: 3, then: [
          { n: "Solar held on. Kasumi counted, out loud this time, all the way to eight, and at eight they both let go at once and both stood, one foot each, on two white stones, perfectly still, arms out, for one whole second." },
          { s: 'kasumi', f: 'happy', t: "One second! Senpai! Personal best! For both of us!" }
        ] },
        { t: "Merry Christmas, Kasumi.", notes: 3, then: [
          { s: 'kasumi', f: 'happy', t: "Merry Christmas, Senpai. Best one I've had. In any year." }
        ] }
      ] }
    ] },
    { n: "They fell over, eventually, into the snow, both of them, sideways, laughing, and lay there on the white stones looking up at the snow coming out of the orange dark straight down at them, every flake turning once in the light from the offering hall before it landed. Kasumi's hand found Solar's and held it, red glove in bare fingers, between them in the snow." },
    { s: 'kasumi', f: 'neutral', t: "Senpai. Whatever happens. I'm glad it was this shrine. I'm glad the light was good here." },
    { n: "Solar didn't say anything. She lay in the snow with her hair tied up in pink, holding on, and watched it fall, and didn't count it, and for once didn't want to be anywhere else at all, which was its own kind of dangerous, and which she decided, tonight, to let be." }
  ] }
});
