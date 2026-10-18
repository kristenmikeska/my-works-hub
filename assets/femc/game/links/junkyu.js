/* Junkyu · ? Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Searcher (Hoax), friendship. Kim Junkyu of Solar's friend group (PARK JIHOON HATE CLUB): small, round-faced, the hugger,
   the one who always asks first if she's okay and whether she needs ice cream and hugs, "#teamsolar", keeps count of how many
   times she's thanked him. He crossed with Jihoon's crew (Asahi, Hyunsuk, Jaehyuk) through the too-loud arcade on 10/31
   (plot doc §4, a story event); rank 1 is the next evening. The rest of the crew are cameos here: Asahi says the meanest
   thing quietly, Hyunsuk laughs at it, Jaehyuk types and talks with capitals and periods. Canon echoes: "are u ok solar!!!
   do u need some ice cream and hugs!!!", "team solar!!!", "i wish u would invite me sol i miss nana!!", "i wonder if
   jihoon is ok". Nothing here decides Hoax's plot. Texting voice: junkyute, lowercase, "!!!", "omg", ":(".
   Arcana: '?' (open question, plot doc §16.6). afterMax uses v1's field shape. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'junkyu', name: 'Kim Junkyu', short: 'Junkyu', arcana: '?', numeral: '', from: 'Hoax',
  kind: 'searcher', world: 'H', romance: null,
  starts: '10/31', gate: { H: 5 },
  home: { area: 'mall', spot: 'Arcade', slot: 'evening', days: [0, 2, 5, 6],
          hint: 'Evenings in the arcade at Paulownia Mall, losing at everything, happily.' },
  approach: "There's a small, round-faced boy in a navy blazer in the arcade at Paulownia Mall, losing at a dance game to a ten-year-old and cheering for the ten-year-old louder than anyone, and he spots you and waves with both arms like you're coming in to land.",
  cast: {},
  invite: {
    ask: ["SOL!!! r u ok!!! do u need ice cream and hugs!!!", "arcade? i saved u a token!! only one. i spent the rest. sorry!!", "hiiii :) r u free? i miss u and i saw u at breakfast", "i'm at the mall and i found a gachapon with a little sun in it!! come help me win it!!", "asahi is being mean to me. come be nice to me so i feel better!!", "do u want to walk koromaru with me!! ken said yes!! he said 'supervised'!!"],
    ok: ["YAY!!!!! ok!! i'm by the dance game!!", "omg ok!!! see u soon!!! :)", "!!!!! i'm so happy"],
    no: ["ok!! that's ok!! drink water!!", "aw ok :( next time!!!", "that's ok sol!! i support u in whatever!!"]
  },
  hangouts: [
    [
      { n: "Junkyu had discovered gachapon. The capsule machines at the back of the mall, two rows of them, a hundred yen a turn for a plastic egg with a tiny toy inside, and he was standing in front of one with a fistful of coins and the face of a man at a casino who'd forgotten he was losing." },
      { s: 'junkyu', f: 'happy', t: "There's a little sun in this one! A little sun with a face! I'm getting it for you! I've had nine turns! I've got four cats!" },
      { choose: [
        { t: "(Take a turn yourself.)", notes: 3, then: [
          { n: "She turned the handle. The egg dropped. It was the sun. Of course it was the sun. Junkyu screamed so loud a security guard looked over." },
          { s: 'junkyu', f: 'happy', t: "FIRST TRY. Oh my God. Oh my God, the universe loves you. I KNEW it loved you." }
        ] },
        { t: "I like the cats.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "You do?! Here! Have them! Have all four! They're a family!" }
        ] }
      ] }
    ],
    [
      { n: "Asahi was sitting on the back of a bench in the mall with his hood up, eating a pretzel very slowly and watching Junkyu try to win a stuffed bear at the ring toss, and every time Junkyu missed, Asahi said something, very quietly, like a sports commentator who hated the sport." },
      { s: 'asahi', f: 'neutral', t: "And he misses. Again. The crowd is silent. Nobody is surprised." },
      { s: 'junkyu', f: 'sad', t: "Asahi, you're being mean!" },
      { s: 'asahi', f: 'neutral', t: "I'm being accurate. It's different. Ask Sol. Sol, am I being mean?" },
      { choose: [
        { t: "You're being mean.", notes: 3, then: [
          { s: 'asahi', f: 'surprised', t: "...Wow. Okay. She picked a side." },
          { s: 'junkyu', f: 'happy', t: "SHE PICKED ME." },
          { n: "Asahi bought Junkyu three more rings with his own money, without a word, and looked away while he threw them." }
        ] },
        { t: "You're being accurate.", notes: 2, then: [
          { s: 'asahi', f: 'neutral', t: "Thank you. Finally. A fair and impartial judge." },
          { s: 'junkyu', f: 'sad', t: "Sol!!!" }
        ] }
      ] }
    ],
    [
      { n: "Junkyu was walking Koromaru. Supervised, by Ken, who walked three steps behind them with his hands behind his back like a very small parole officer. Koromaru was walking Junkyu, more accurately, in whatever direction Koromaru preferred." },
      { s: 'junkyu', f: 'happy', t: "He's so good! He's so good, Sol! He's like Nana but smaller and he listens!" },
      { choose: [
        { t: "(Take the leash for a block.)", notes: 3, then: [
          { n: "She took the leash. Koromaru immediately walked perfectly, at heel, looking up at her. Junkyu looked betrayed. Ken looked smug." }
        ] },
        { t: "Nana doesn't listen?", notes: 2, then: [
          { s: 'junkyu', f: 'happy', t: "Nana listens to YOU. He doesn't listen to anybody else. Not even Jihoon, and Jihoon's his dad. Apparently." }
        ] }
      ] }
    ]
  ],
  ranks: [
    { after: '11/1', title: '1: ice cream and hugs', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'joy', scene: [
      { n: "He'd come through the arcade last night in the middle of the Dark Hour with three of his friends behind him, all four of them in navy blazers, all four of them talking at once, so loud that Fuuka had heard them over the whole city like a radio somebody had left on in another room. And the first thing he'd done, when Solar came through the arcade's doors with S.E.E.S. at her back, before anybody could say anything at all, was run at her and hug her around the middle so hard they both nearly went over." },
      { n: "He hadn't let go when she said she didn't know him. He'd just said *oh,* very small, into her shoulder. And then *that's okay,* and kept hugging." },
      { n: "He was back in the arcade tonight, losing to a ten-year-old at a dance game and cheering for the ten-year-old, and when he saw Solar come in he jumped off the platform mid-song and the machine booed him and he didn't care." },
      { register: 'junkyu' },
      { s: 'junkyu', f: 'happy', t: "SOL! Sol, hi! Are you okay? Do you need ice cream and hugs?" },
      { n: "He said it all at once, like a single word. *Icecreamandhugs.* Like a spell he'd said so many times the spaces had worn off." },
      { s: 'junkyu', f: 'happy', t: "I already did the hug. Last night. I'm doing another one. Is that okay? I'm asking. I'm asking first this time." },
      { choose: [
        { t: "Yes. Hug.", notes: 3, then: [
          { n: "He hugged her. Around the middle, his cheek against her shoulder, arms tight, the whole of him warm and solid and not letting go, and she stood in the middle of the arcade being hugged by a boy she didn't know and felt her shoulders come down for the first time all day." },
          { s: 'junkyu', f: 'happy', t: "Okay. Okay! That's the hug. Now ice cream." }
        ] },
        { t: "Ice cream first.", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "ICE CREAM FIRST. Okay. Okay. That's so you. You always negotiate the order." }
        ] },
        { t: "I'm okay, thank you.", notes: 1, then: [
          { s: 'junkyu', f: 'sad', t: "...Oh. Okay." },
          { s: 'junkyu', f: 'happy', t: "You're never okay when you say okay like that. That's okay! I'm getting the ice cream anyway. You can have it later." }
        ] }
      ] },
      { n: "He didn't have money. He found this out at the ice cream stand by the fountain, patting every pocket in his blazer twice with growing horror, and then turned around and yelled across the atrium for Hyunsuk, who came over, and sighed, and paid, and told him he owed him, and then bought himself one too." },
      { s: 'hyunsuk', f: 'happy', t: "He does this every time. He offers to buy everyone everything. He's never had money in his life." },
      { s: 'junkyu', f: 'happy', t: "It's the thought that counts!" },
      { s: 'hyunsuk', f: 'neutral', t: "The thought owes me six hundred yen." },
      { n: "They ate it on the rim of the fountain. Cookies and cream, because he'd known without asking, and he watched her eat it with his chin on his fist and his own ice cream melting down his wrist, forgotten." },
      { s: 'junkyu', f: 'neutral', t: "I'm not going to make you remember. Jihoon said that's the rule. He made a speech about it. In the guesthouse. Standing on a chair." },
      { s: 'junkyu', f: 'happy', t: "I'm just going to be really nice to you until you go *oh, it's Junkyu, he's so nice.* And then we're back!" },
      { choose: [
        { t: "You're already really nice.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "Oh no. I'm going to cry. That's so nice. You've only been back one day and you're already being nice to me." }
        ] },
        { t: "Your ice cream's melting.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "OH NO." },
          { n: "He licked his wrist. Hyunsuk looked at him with the weary love of a man who'd been doing this for years, and handed him a napkin." }
        ] }
      ] }
    ] },

    { after: '11/8', title: '2: team solar', place: "Iwatodai Dorm · Solar's Room", time: 'Evening', scene: [
      { n: "There was a sign on her door when she came home. A big piece of poster board, cut slightly crooked, taped up with too much tape, and on it, in enormous bubble letters colored in with three different highlighters because he'd run out of the first two, #TEAMSOLAR." },
      { n: "Under it, smaller, in very careful handwriting: *for whatever ur running for!!!*" },
      { n: "Junkyu was sitting on the hallway floor next to it with the highlighters in his lap, the caps all off, waiting." },
      { s: 'junkyu', f: 'happy', t: "Do you like it? I made one at home. For the election. I held it at the assembly. Cherry made a heart with her hands and I blew you a kiss." },
      { s: 'junkyu', f: 'neutral', t: "And then I thought, you're not running for anything here. But you're probably running for something. Everybody always is. So I left it open." },
      { choose: [
        { t: "I love it.", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "YOU DO? Okay. Okay okay okay. I'm making another one. For the lounge. For the roof. For your other door." },
          { s: 'solar', f: 'neutral', t: "I only have one door." },
          { s: 'junkyu', f: 'happy', t: "For your other door when you get one!" }
        ] },
        { t: "What am I running for?", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "I don't know! That's the best part! You don't have to know! I'm on your team anyway!" },
          { s: 'junkyu', f: 'serious', t: "That's what team means. I'm on your team before you know what the game is." }
        ] },
        { t: "You spelled *your* wrong.", notes: 2, then: [
          { s: 'junkyu', f: 'surprised', t: "Ur is how you spell it! In the chat! That's the official spelling!" }
        ] }
      ] },
      { n: "Junpei came up the stairs and saw the sign and stopped and read it and put his hand on his chest." },
      { s: 'junpei', f: 'happy', t: "Dude. Dude, I want one. Can I get one? Team Junpei?" },
      { s: 'junkyu', f: 'happy', t: "YES! Absolutely! What are you running for?" },
      { s: 'junpei', f: 'neutral', t: "...Uh. Lunch?" },
      { s: 'junkyu', f: 'happy', t: "#TEAMLUNCH. I'm on it." },
      { n: "By the end of the week every door on the second floor had a sign. Yukari's said #TEAMYUKARI (FOR ARCHERY!!!). Mitsuru's said #TEAMMITSURU (FOR EVERYTHING!!!) and Mitsuru had looked at it for a long time in the hallway and not taken it down. Akihiko's said #TEAMAKIHIKO (FOR PROTEIN) and he'd added, in his own blunt capitals underneath, AND RUNNING." }
    ] },

    { after: '11/15', title: '3: the crew', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'city', scene: [
      { n: "Junkyu was explaining his friends. He did it the way you'd explain a family to someone who'd married into it, at length, with love, with a running commentary on everyone's flaws, while the friends in question sat within earshot pretending not to listen." },
      { s: 'junkyu', f: 'happy', t: "Okay. Asahi. He's mean. He's the meanest. He called you a dumb bitch in the group chat on the first day this year. He's never once missed hanging out after school. Not once." },
      { s: 'asahi', f: 'neutral', t: "I can hear you." },
      { s: 'junkyu', f: 'happy', t: "He can hear me! Hyunsuk. He's the smart one. He's also mean, but funnier. He laughs at everything Asahi says. Even when it's about him." },
      { s: 'hyunsuk', f: 'happy', t: "It's a talent." },
      { s: 'junkyu', f: 'neutral', t: "Jaehyuk. He's the nice one. Not like me nice. Polite nice. He uses capital letters. In the chat. Full stops. Everyone's scared of him a little." },
      { s: 'jaehyuk', f: 'neutral', t: "Nobody is scared of me, Junkyu." },
      { s: 'asahi', f: 'neutral', t: "I'm scared of you." },
      { s: 'hyunsuk', f: 'happy', t: "LMAO." },
      { s: 'jaehyuk', f: 'neutral', t: "Please don't say that out loud, Hyunsuk." },
      { choose: [
        { t: "And you?", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Me?" },
          { s: 'junkyu', f: 'neutral', t: "I'm the one who asks if you're okay. That's my job. Everyone has a job. I'm the one who checks." },
          { s: 'asahi', f: 'neutral', t: "He's the heart. Don't tell him I said that." },
          { s: 'junkyu', f: 'happy', t: "ASAHI. I HEARD THAT." }
        ] },
        { t: "What was my job?", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "You were the one who made everyone hang out! You'd go, *we can literally all hang out after school??* And then we would!" },
          { s: 'junkyu', f: 'sad', t: "...You never invited us on walks, though. With Nana. Just Jihoon. I always wanted to come." }
        ] }
      ] },
      { n: "Asahi had come down off the back of his bench while they talked. He stood next to Solar at the crane game, hood up, hands in his pockets, and didn't look at her, and said, at a volume so low only she could hear, that it was really bad, actually, having her not know them, and that he was going to keep being mean to her, because if he stopped being mean it'd be weird and then she'd know something was wrong." },
      { s: 'asahi', f: 'neutral', t: "So. You look stupid in that uniform. Welcome back." },
      { choose: [
        { t: "Thank you, Asahi.", notes: 3, then: [
          { s: 'asahi', f: 'surprised', t: "..." },
          { s: 'asahi', f: 'neutral', t: "...Don't thank me. Gross. Junkyu, she thanked me. Count it." },
          { s: 'junkyu', f: 'happy', t: "That doesn't count! She has to thank ME!" }
        ] },
        { t: "You look stupid in that hood.", notes: 3, then: [
          { s: 'asahi', f: 'neutral', t: "...Okay. There she is. That's the one." },
          { n: "He went back to his bench. He looked, for one second, very pleased, and then very carefully didn't." }
        ] }
      ] }
    ] },

    { after: '11/22', title: '4: the count', place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
      { n: "Junkyu had a list. It was on his phone, in the notes app, and he showed it to her on the rim of the fountain with the solemnity of a man showing a historian a primary document." },
      { n: "It was a list of dates. Three of them. Next to each, a short note. *thanked me for the umbrella. thanked me for the birthday card. thanked me for the ice cream (the big one).*" },
      { s: 'junkyu', f: 'neutral', t: "Those are the times you've said thank you to me. Out loud. Ever. Since middle school." },
      { s: 'junkyu', f: 'happy', t: "Three! That's a lot for you! You don't thank people. You just do stuff for them back. Jihoon says that's how you say it. I know. I still count." },
      { choose: [
        { t: "What was the umbrella?", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "It rained and you didn't have one. You never have one. I gave you mine and walked home wet." },
          { s: 'junkyu', f: 'happy', t: "You said thank you so quietly I almost missed it. I didn't miss it. I wrote it down." }
        ] },
        { t: "Thank you, Junkyu.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'neutral', t: "For what?" },
          { s: 'solar', f: 'neutral', t: "For counting." },
          { n: "He looked at her for a long moment with his mouth slightly open. Then he looked down at his phone, and very carefully, with one finger, added a fourth line. *thanked me for counting.* His eyes were wet. He didn't do anything about it." },
          { s: 'junkyu', f: 'happy', t: "...Four. Four! Oh no. I'm going to cry in the mall." }
        ] }
      ] },
      { s: 'junkyu', f: 'sad', t: "I counted because I thought if I kept count, I'd know you were still my friend. Like, if the number went up, you were still there." },
      { s: 'junkyu', f: 'neutral', t: "And then you weren't there. And the number stopped. And I didn't know what to count." },
      { choose: [
        { t: "Count the hugs instead.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "THAT'S SO MANY MORE. Oh my God. Okay. That's a new list. Starting now." },
          { n: "He hugged her. He held up one finger over her shoulder. One." }
        ] },
        { t: "I'm here now.", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "You're here now! Okay. Okay. That counts. That counts the most." }
        ] }
      ] }
    ] },

    { after: '11/29', title: "5: i wonder if jihoon is ok", place: 'Iwatodai Dorm · Lounge', time: 'Night', music: 'tender', scene: [
      { n: "Junkyu was waiting in the lounge when S.E.E.S. came back from Tartarus at one in the morning. He'd been waiting there every night they went up, Mitsuru said. On the sofa with a blanket, very upright, not sleeping, the way you'd wait at an airport for a flight that kept getting delayed." },
      { n: "He stood up when they came in. He counted them. Solar saw him do it, his lips moving, his eyes going from face to face. He got to Jihoon and stopped, and his whole body loosened, and then he saw the bandage on Jihoon's arm and tightened again." },
      { s: 'junkyu', f: 'sad', t: "Jihoon! Your arm!" },
      { s: 'jihoon', f: 'neutral', t: "It's nothing. It's a scratch. It's a big scratch. I'm fine. I'm going to bed. Light of all your lives. Goodnight." },
      { n: "He went up. Junkyu watched him go up the stairs with his hands pressed together in front of his mouth, and then turned to Solar, still in her armband, still smelling of the tower." },
      { s: 'junkyu', f: 'sad', t: "Is he okay? Really? He won't tell me. He never tells me. He tells you." },
      { choose: [
        { t: "He's okay. He was brave.", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "He's always brave. That's the problem. He's brave and he's loud and he doesn't stop." },
          { s: 'junkyu', f: 'sad', t: "I wonder if he's okay. I always wonder that. Even at home. Even when he's being the worst." }
        ] },
        { t: "You should ask him yourself.", notes: 2, then: [
          { s: 'junkyu', f: 'neutral', t: "I do. He says *i'm fine.* Like you do. You two say it the same way. It's so annoying." }
        ] }
      ] },
      { s: 'junkyu', f: 'sad', t: "I can't go up there. I'm not— the thing didn't happen to me. The light thing. I just wait. Every night. On the sofa. I'm useless." },
      { n: "He said it plainly, to the blanket in his hands. Not looking for comfort. Just stating a fact, like the time." },
      { choose: [
        { t: "You counted us. When we came in.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "...You saw that?" },
          { s: 'solar', f: 'neutral', t: "Somebody needs to be here to count. So we know we all came back. That's a job." },
          { s: 'junkyu', f: 'sad', t: "..." },
          { s: 'junkyu', f: 'happy', t: "...Okay. Okay. That's my job. I'm the counter. I'll be here every night. I'll count everybody." }
        ] },
        { t: "(Sit down on the sofa. Share the blanket.)", notes: 3, then: [
          { n: "She sat down beside him. He held up the edge of the blanket without a word. They sat under it, her still in her armband, him in his navy blazer, and he leaned his head on her shoulder, and was asleep in about four minutes, like he'd been waiting for permission all night." }
        ] }
      ] }
    ] },

    { after: '12/6', title: '6: six-thirty', place: 'Iwatodai · Riverside', time: 'Early Morning', music: 'sun', scene: [
      { n: "She'd invited him. That was the whole event. At six-fifteen on Sunday morning she'd knocked on the door of the guesthouse room he shared with Hyunsuk, and when he opened it in pajamas covered in cartoon dogs with his hair flat on one side, she'd said, *Walk? With Koromaru?* and he'd stared at her like she'd handed him a winning lottery ticket." },
      { s: 'junkyu', f: 'happy', t: "You never invite me! You NEVER invite me! You always just go with Jihoon at six-thirty! Oh my God! Let me get my shoes! Let me get my— I don't have shoes. I have shoes. Wait." },
      { n: "So now they were on the river path in the early cold, the sky going from black to gray to a thin pale gold over the bay, Koromaru out in front with his tail going like a flag, and the birds coming up out of the reeds by the water in small loud groups, and Junkyu was walking with his face turned up to them like a kid at a fireworks show." },
      { s: 'junkyu', f: 'happy', t: "The birds! Sol, the birds are so loud! Is it always like this? Is this why you go? Is this the secret?" },
      { choose: [
        { t: "That's the secret. I like the birds.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "You said it! You SAID it! Jihoon told me that's why, and you always said it was for the exercise, and you just SAID it!" }
        ] },
        { t: "(Throw the ball for Koromaru.)", notes: 2, then: [
          { n: "Koromaru brought it back. Junkyu threw it next, badly, into the river. Koromaru looked at the river and then at Junkyu with enormous disappointment, and Junkyu apologized to him for a full minute." }
        ] }
      ] },
      { s: 'junkyu', f: 'neutral', t: "I miss Nana. I miss him so much. He's so big and so stupid and he sits on everybody. He sat on me once for an hour and I didn't move because he looked so comfortable." },
      { s: 'junkyu', f: 'sad', t: "I always wanted to come on the walks. I never asked. I thought you'd say no. I thought it was a Jihoon thing." },
      { choose: [
        { t: "When we're home, come every Sunday.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'happy', t: "EVERY Sunday? Really? Okay. Okay okay okay. I'm going to set an alarm. I'm going to set nine alarms." },
          { n: "He didn't ask *if* they went home. He said it like it was already true. She noticed, and let him." }
        ] },
        { t: "It was never a Jihoon thing. I just didn't ask.", notes: 3, then: [
          { s: 'junkyu', f: 'sad', t: "...Yeah. You don't ask people for things. Even nice things. Even walks." },
          { s: 'junkyu', f: 'happy', t: "Okay! Then I'll ask! I'm good at asking! Can I come on the walk next Sunday?" },
          { s: 'solar', f: 'neutral', t: "Yes." },
          { s: 'junkyu', f: 'happy', t: "YAY." }
        ] }
      ] }
    ] },

    { after: '12/13', title: '7: cards', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', music: 'joy', scene: [
      { n: "Junkyu was making Christmas cards for everyone in the dorm. And the guesthouse. And Yeobo's. And the old man who swept the shrine. And Ken's teacher, whom he had never met. The dining table was covered in construction paper and glitter glue and stickers from the hundred-yen shop, and Junkyu was in the middle of it with glitter on his face, working with the focus of a monk illuminating a manuscript." },
      { s: 'junkyu', f: 'happy', t: "Sol! Help! I need someone who can draw! I can't draw! Look at this reindeer!" },
      { n: "The reindeer looked like a chair with a grudge." },
      { choose: [
        { t: "(Fix the reindeer.)", notes: 3, then: [
          { n: "She fixed it. Two lines. A nose. It still looked like a chair, but now it looked like a chair that was happy, and Junkyu looked at it like she'd raised it from the dead." },
          { s: 'junkyu', f: 'happy', t: "You're a GENIUS. That's for Mitsuru. Mitsuru gets the best reindeer." }
        ] },
        { t: "It's perfect. Don't change it.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Really?" },
          { s: 'solar', f: 'neutral', t: "It looks like you made it. That's the point." },
          { s: 'junkyu', f: 'happy', t: "...Okay. Okay! That's for Akihiko-sunbae. He'll understand." }
        ] }
      ] },
      { n: "They worked through the evening. Fuuka came and helped and turned out to be a genius with the glitter glue. Junpei came and helped and turned out to be a menace with the glitter glue. Koromaru came and lay under the table and ended the night faintly gold." },
      { n: "At the end Junkyu stacked them all, forty-one cards, and went through them one more time, checking every name, and there was one left at the bottom that he hadn't written a name on, with a little sun drawn on the front, very carefully, with a face, and two pink cheeks." },
      { s: 'junkyu', f: 'neutral', t: "That one's for you. I don't know what to write in it yet." },
      { s: 'junkyu', f: 'sad', t: "Everything I want to write is *please come home.* And I don't want to write that. Because then it's a card about me." },
      { choose: [
        { t: "Write it anyway.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "..." },
          { s: 'junkyu', f: 'sad', t: "...Okay." },
          { n: "He wrote it. Small. In the corner. *please come home.* And then, underneath, bigger, *(but only if u want to!!!) (i support u in whatever!!!) #teamsolar.*" }
        ] },
        { t: "Write what you'd write at home.", notes: 3, then: [
          { s: 'junkyu', f: 'neutral', t: "At home I'd write *merry christmas sol!!! ice cream and hugs!!!*" },
          { s: 'junkyu', f: 'happy', t: "...Okay. That's what I'll write. That's still true here. That's true everywhere." }
        ] }
      ] }
    ] },

    { after: '12/27', title: '8: asahi', place: 'Paulownia Mall · Arcade', time: 'Evening', scene: [
      { n: "The arcade between Christmas and New Year was nearly empty, half its machines switched off for maintenance, the carpet's neon planets dull under the work lights, and Asahi was sitting alone at the rhythm game in the corner, not playing it, with his hood up, and Junkyu had stopped just inside the door to look at him." },
      { s: 'junkyu', f: 'sad', t: "He's been like that all day. He won't talk to anybody. Not even Hyunsuk. Hyunsuk's worried. Hyunsuk never worries." },
      { s: 'junkyu', f: 'neutral', t: "Can you— can you go sit with him? He likes you. He'd never say. He's mean to you because he likes you. That's his system." },
      { choose: [
        { t: "Come with me.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "Me? He's mean to me the most!" },
          { s: 'solar', f: 'neutral', t: "That means he likes you the most." },
          { s: 'junkyu', f: 'sad', t: "...Oh. Oh no. Okay." }
        ] },
        { t: "(Go sit with Asahi.)", notes: 2, then: [] }
      ] },
      { n: "She sat down next to Asahi at the dead rhythm game. After a minute, Junkyu sat down on Asahi's other side, very quietly, which for Junkyu was a feat of enormous discipline." },
      { s: 'asahi', f: 'neutral', t: "...What." },
      { s: 'junkyu', f: 'neutral', t: "Nothing. We're sitting." },
      { s: 'asahi', f: 'neutral', t: "Sit somewhere else." },
      { s: 'junkyu', f: 'happy', t: "No!" },
      { n: "They sat. The work lights buzzed. After a long time Asahi said, to the dead screen, that his mom would be up by now. If it was morning there. If it was anything there. She got up at five. She'd be making tea. She'd be looking at his door." },
      { s: 'asahi', f: 'sad', t: "I didn't tell her I was going out that night. I just went. Because Jihoon texted in caps. I didn't even leave a note." },
      { choose: [
        { t: "It's still the same night there.", notes: 3, then: [
          { s: 'asahi', f: 'neutral', t: "You don't know that." },
          { s: 'solar', f: 'neutral', t: "No. But your phone says so. Everyone's does. Let's believe the phones." },
          { s: 'asahi', f: 'neutral', t: "...Fine. We believe the phones. That's stupid. Fine." }
        ] },
        { t: "(Put a coin in the game. Make him play.)", notes: 3, then: [
          { n: "She found a coin and put it in. The machine woke up, lights and noise. Asahi looked at it, and at her, and sighed through his nose, and played. Badly. Then not badly. Junkyu cheered so loud that a maintenance man came out of the back to see what had happened." }
        ] }
      ] },
      { n: "Walking out, Junkyu held both their sleeves, one in each hand, like a kid crossing a street between two parents, and Asahi let him, and didn't say anything mean the whole way to the station, which Junkyu said afterward was a Christmas miracle." }
    ] },

    { after: '1/10', title: "9: i'm scared", place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'night', scene: [
      { n: "He'd come up to the roof to cry. He told her that later. He'd come up because it was the only place in the dorm where nobody would hear, and he hadn't counted on her already being up there, at the railing, in the cold, in Hyein's coat, and by the time he'd seen her it was too late, he was already crying, so he just kept going." },
      { s: 'junkyu', f: 'sad', t: "Sorry. Sorry. I'm fine. I'm totally fine. It's the wind." },
      { s: 'solar', f: 'neutral', t: "There isn't any wind." },
      { s: 'junkyu', f: 'sad', t: "...It's a little wind." },
      { n: "He came and stood next to her at the railing and cried, and she let him, and didn't say anything, and after a while he wiped his face on his blazer sleeve and took a big shaky breath like a kid at the end of a tantrum." },
      { s: 'junkyu', f: 'sad', t: "Everyone's asking you to come home. I heard Jihoon. At the arcade. And Cherry, she yelled. And Jungwon's friends keep asking Sunoo to ask you." },
      { s: 'junkyu', f: 'sad', t: "And I'm scared. I'm so scared. I'm scared you'll come home and you'll be sad. And I'm scared you won't come home and I'll be sad. And I'm scared I'll go home and wake up and I won't remember any of this and I won't know why I'm sad." },
      { s: 'junkyu', f: 'neutral', t: "I'm not asking you. I'm not. I said I'd never ask. I'm just scared. Out loud. I don't know what to do with it." },
      { choose: [
        { t: "Be scared with me. I'm scared too.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "You are?" },
          { s: 'solar', f: 'neutral', t: "All the time." },
          { s: 'junkyu', f: 'sad', t: "...Okay. Okay. Then we're both scared. Together. That's better. That's a little better." }
        ] },
        { t: "(Hug him. Ask first.)", notes: 3, then: [
          { s: 'solar', f: 'neutral', t: "Can I hug you? I'm asking." },
          { s: 'junkyu', f: 'sad', t: "..." },
          { n: "He made a sound that was half a laugh and half a sob and threw his arms around her so hard they both bumped into the railing, and held on, and she held on back, and over his shoulder the city glittered on in the cold like it didn't know anything." },
          { s: 'junkyu', f: 'happy', t: "...That's my line. Asking first. You stole my line. Count it. Count it as a hug. Number two hundred." }
        ] }
      ] },
      { s: 'junkyu', f: 'neutral', t: "Whatever you pick. I'm on your team. I made the sign. It's binding." }
    ] },

    { after: '1/24', title: '10: icecreamandhugs', place: 'Paulownia Mall · Arcade', time: 'Evening', music: 'tender', scene: [
      { n: "The arcade was loud again. All its machines back on, every cabinet shouting its own song over every other cabinet's song, the neon planets on the carpet bright, and Junkyu was at the dance game, losing to a ten-year-old, cheering for the ten-year-old, exactly the way he'd been the night after he came through." },
      { n: "He saw her come in and jumped off the platform mid-song, and the machine booed him, and he didn't care, and he was already running." },
      { n: "And she knew him." },
      { n: "A group chat at six in the morning, all capitals. A boy in a blazer at the next desk who'd lent her a pencil on the first day of the first year and then never asked for it back, and then, the next day, lent her another one. An umbrella handed over in the rain. A poster board at an assembly with too much tape on it. And a message, every time, every single time anything at all went wrong, before anyone else had even finished reading, arriving first, all in lowercase with too many exclamation points." },
      { n: "She said it before he reached her. She said it first. For once." },
      { s: 'solar', f: 'neutral', t: "Are you okay, Junkyu? Do you need ice cream and hugs?" },
      { n: "He stopped. In the middle of the arcade, a meter from her, arms already out. He stopped so suddenly that a boy behind him with a cup of tokens nearly ran into his back." },
      { s: 'junkyu', f: 'surprised', t: "..." },
      { s: 'junkyu', f: 'sad', t: "That's my line." },
      { s: 'junkyu', f: 'sad', t: "That's my line, Sol. That's mine. I say that. I always say that. You never say that. You just say *YES that is exactly what i need* in capitals." },
      { s: 'solar', f: 'neutral', t: "I know. I remember. It's your turn." },
      { n: "He burst into tears. In the middle of the arcade, under the lights, with his arms still out, and then he was hugging her, around the middle, his cheek against her shoulder, the whole of him warm and solid and shaking and not letting go, and she held on back and didn't let go either, and somewhere behind them Asahi said, very quietly, *oh my God,* and Hyunsuk laughed, wet, and Jaehyuk said nothing at all, and Jihoon, by the crane game, put his forehead against the glass and stayed there." },
      { choose: [
        { t: "Ice cream first or hugs first?", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "HUGS. Hugs first. I'm already doing the hugs. Then ice cream. Then more hugs. That's the order. That's always been the order." }
        ] },
        { t: "Thank you, Junkyu.", notes: 3, then: [
          { s: 'junkyu', f: 'sad', t: "...Five." },
          { s: 'junkyu', f: 'happy', t: "That's five. I'm counting it. I'm counting it forever." }
        ] }
      ] },
      { n: "He didn't have money for the ice cream. He found this out at the stand by the fountain, patting every pocket twice, and turned around and yelled across the atrium for Hyunsuk, who came over, and sighed, and paid, and bought one for everyone, and didn't say anything about the six hundred yen at all." }
    ] }
  ],

  afterMax: [
    { title: 'hug count', place: 'Paulownia Mall · Central Atrium', time: 'Evening', scene: [
      { n: "Junkyu showed her the list on his phone. Not thank-yous anymore. Hugs. Dated. Two hundred and forty-one." },
      { s: 'junkyu', f: 'happy', t: "I'm going for three hundred before the end of the month! Can I have one? I'm asking!" },
      { choose: [
        { t: "(Two. For efficiency.)", notes: 3, then: [
          { s: 'junkyu', f: 'happy', t: "TWO! Two hundred and forty-three! You're the best! You're the most efficient hugger I know!" }
        ] },
        { t: "Only if you buy the ice cream. With your own money.", notes: 3, then: [
          { s: 'junkyu', f: 'surprised', t: "...I have money! I have two hundred yen! I've been saving! Since Tuesday!" },
          { n: "It bought one cone. They split it." }
        ] }
      ] }
    ] },
    { title: 'sunday walk', place: 'Iwatodai · Riverside', time: 'Early Morning', scene: [
      { n: "Six-thirty. The river path. Koromaru out in front. The birds coming up loud out of the reeds. He'd set nine alarms and been ready at six." },
      { s: 'junkyu', f: 'happy', t: "The birds! The birds again! They're so loud! Every Sunday they're so loud!" },
      { choose: [
        { t: "(Throw the ball. Let him throw the next one.)", notes: 3, then: [
          { n: "He threw it into the river again. Koromaru looked at him. He apologized. It was, she was coming to understand, the best part of the walk." }
        ] },
        { t: "(Just walk. Listen to the birds with him.)", notes: 3, then: [
          { n: "They just walked. He didn't say anything for nearly a whole minute, which was a record, and then said *this is the best,* very quietly, and then didn't say anything for another one." }
        ] }
      ] }
    ] }
  ]
});
