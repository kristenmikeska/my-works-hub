/* My Melody · XVII Star. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Hidden link. A second-year from Mariland Girls' Academy on the Kirijo exchange, in the dorm room next to Kuromi's since early
   July. Invisible until found: from 7/15, on Wednesday evenings, the dorm's evening menu shows the kitchen light (`secret`);
   the discovery scene is her real first conversation with Solar, and the engine then sets found-mymelody and counts her met.
   Every rank is a Wednesday evening at the dorm. She has no idea the Dark Hour exists and never finds out.
   Perks this fits: rank 3 Almond Pound Cake, rank 6 Sweet Nature, rank 10 Melody Hug. Cast-only speakers: none. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'mymelody', name: 'My Melody', short: 'My Melody', arcana: 'Star', numeral: 'XVII', from: 'Mariland Girls’ Academy',
  kind: 'persona',
  romance: null,
  starts: '7/15',
  home: { area: 'dorm', spot: 'Kitchen', slot: 'evening', days: [3],
          hint: 'Wednesday evenings, in the dorm kitchen, baking.' },
  secret: {
    flag: 'found-mymelody', after: '7/15', days: [3],
    label: 'The kitchen light is on',
    sub: 'Something smells like almonds.',
    place: 'Iwatodai Dorm · Kitchen', time: 'Evening',
    scene: [
      { music: 'dorm' },
      { n: "Somebody had left the kitchen light on, which in this dorm was not unusual, and somebody was using the oven, which was. Solar smelled it from the stairs before she saw anything, warm and buttery with something faintly bitter at the back of it, like marzipan, like a bakery at seven in the morning, a smell with no business in a building where the most ambitious thing anyone cooked on a weeknight was instant ramen with an egg cracked into it." },
      { n: "The girl at the counter had her back to the door. A pink hood with two long rabbit ears hanging down behind, sleeves pushed up to the elbow, flour to the wrists. She was humming something with no particular tune that went up at the end like a question, and weighing sugar on a little kitchen scale with the total concentration of a chemist." },
      { n: "Solar knew who she was, in the way you know a person you've passed on the stairs forty times. My Melody. The second-year from the mountains, the other half of the exchange from somewhere called Mariland, the one in the room next to Kuromi's who said good morning to everybody in the hall, including, once, a coat on a hook. The whole dorm adored her already, from a slight distance, the way people adore a nice day. Solar had said maybe ten words to her since July. Most of them had been good morning." },
      { s: 'mymelody', f: 'surprised', t: "Oh! Hello! I didn't hear you come in. I never hear anybody. Kuromi says I'd sleep through a parade." },
      { s: 'mymelody', f: 'happy', t: "You're Solar-senpai. From upstairs. You always look like you're thinking about something very far away, so I never wanted to interrupt." },
      { n: "The oven timer went. She took out a loaf tin with both hands in a pair of oven mitts shaped like rabbits, and turned it out onto a rack, and the smell doubled, and the cake sat there golden and cracked down the middle the way a good pound cake cracks, with flaked almonds toasted brown across the top." },
      { s: 'mymelody', f: 'happy', t: "It's almond pound cake. It's my mama's recipe. On Wednesdays my mama bakes at home, at eight o'clock, every week, so I bake on Wednesdays too, at eight o'clock. Then it's like we're in the same kitchen." },
      { s: 'mymelody', f: 'neutral', t: "Even though we're not. I know it's a little bit silly." },
      { choose: [
        { t: "It isn't silly.", notes: 3, stat: { kindness: 1 }, then: [
          { s: 'mymelody', f: 'happy', t: "Thank you! You're the first person who's said that. Kuromi says it's the silliest thing she's ever heard." },
          { s: 'mymelody', f: 'neutral', t: "Then she eats two slices. So I don't think she means it all the way through." }
        ] },
        { t: "(Ask if you can stay.)", notes: 2, then: [
          { n: "She asked, a little awkwardly, standing in the doorway in her socks, whether it was all right if she stayed, and My Melody looked at her as if she'd asked whether it was all right to breathe the air." },
          { s: 'mymelody', f: 'happy', t: "Of course you can stay! Sit, sit. You can have the chair that doesn't wobble." }
        ] },
        { t: "Does it work?", notes: 1, then: [
          { s: 'mymelody', f: 'neutral', t: "A little. Not as much as I'd like. But a little is better than none, isn't it?" }
        ] }
      ] },
      { n: "She cut a slice before it had properly cooled, which Solar suspected was against the rules of her mama's recipe, and put it on a plate with a fork, and slid it across the counter. It was still warm in the middle. It tasted like the smell had promised and then a little more, soft and dense and sweet, with the almond coming in late like somebody arriving at a party and making it better." },
      { n: "My Melody watched her eat it with her chin on her hands. Then she said, in exactly the same voice she'd used for the oven temperature,", },
      { s: 'mymelody', f: 'neutral', t: "Kuromi told me you don't remember things. From before you came here. She told me not to say anything about it." },
      { n: "Solar's fork stopped halfway to her mouth. Something in her chest went small and careful, the way it always did, the way you hold still when a bee lands on your arm." },
      { s: 'mymelody', f: 'neutral', t: "I'm only saying it because I think it would be lonely, if everybody knew and nobody said. So now I've said. And now it isn't a secret thing. It's just a thing." },
      { n: "It was, Solar thought, the strangest kindness anyone had ever done her, and she had no idea what to do with it, so she ate the rest of the cake, which seemed to be the right answer, because My Melody beamed." },
      { s: 'solar', f: 'neutral', t: "...Kuromi talks about me?" },
      { s: 'mymelody', f: 'happy', t: "Kuromi talks about everybody. She has a notebook. You're on the good page. Please don't tell her I told you." },
      { n: "She wrapped two slices in wax paper and folded the ends under, neat as a present, and pressed them into Solar's hands." },
      { s: 'mymelody', f: 'happy', t: "Come next Wednesday. I always make too much. My mama bakes for six people, and there's only me." },
      { n: "On the way back through the lounge, Kuromi was lying on the couch with her headphones on and her boots on the armrest, and the end of the headphone cable was lying loose on the cushion beside her, plugged into nothing at all. She did not look up as Solar went past. She did not look up so hard that it was practically a sound." }
    ]
  },
  approach: "The kitchen light is on and the whole ground floor smells like almonds. Somebody is humming in there, a tune with no particular shape that goes up at the end like a question.",
  cast: {},
  invite: null,
  hangouts: [
    [
      { n: "Tonight it was cookies, because the oven was being temperamental and cookies, My Melody said, forgave you for things. She had a tin of cutters she'd brought all the way from Mariland wrapped in a dish towel, rabbits and stars and a tulip and one shaped like a teapot, and she cut out a whole tray of rabbits so identical they could have been printed, and then handed Solar the teapot." },
      { choose: [
        { t: "(Concentrate. Make one perfect teapot.)", notes: 3, then: [
          { n: "She made one perfect teapot, or very nearly, the spout only a little thin, and My Melody held it up to the light like a jeweler and pronounced it the best teapot that had ever been made in this kitchen, which Solar felt was a low bar, and was pleased about anyway." }
        ] },
        { t: "(Freehand a rabbit with a knife.)", notes: 2, then: [
          { s: 'mymelody', f: 'surprised', t: "Oh! It's a... it's very brave. Is it a rabbit or a cow?" },
          { n: "It came out of the oven looking like neither, and My Melody ate it first, before any of the perfect ones, because she said it had tried the hardest." }
        ] },
        { t: "(Eat the dough.)", notes: 1, then: [
          { s: 'mymelody', f: 'serious', t: "Senpai. My mama says that's how you get a tummy ache." },
          { n: "She said it very sternly, and then broke off a piece for herself." }
        ] }
      ] },
      { n: "They iced the rabbits pink, with two dots for eyes, and lined them up on the rack in rows, and the kitchen was warm and sweet and full of the specific quiet of two people concentrating on something small, and for an hour Solar didn't think about anything at all, which she was coming to understand was the whole point of Wednesdays." }
    ],
    [
      { n: "My Melody washed and Solar dried, because My Melody said she liked the bubbles and didn't trust anybody else with her mama's mixing bowl, which had come from Mariland too, in its own box, with a note on the lid that said FRAGILE in a round careful hand. The window over the sink was black and showed the two of them back to themselves, a pink hood and a tired face, side by side." },
      { s: 'mymelody', f: 'neutral', t: "Senpai. Do you like it here? In the dorm, I mean. Not Wednesdays. I know you like Wednesdays." },
      { choose: [
        { t: "I do. More than I thought I would.", notes: 3, then: [
          { s: 'mymelody', f: 'happy', t: "Me too. I didn't think I would at all. I thought I'd only like it because Kuromi was here. But I like the kitchen, and the stairs that creak, and you." },
          { n: "She said *and you* the way she'd said *the stairs that creak*, as a plain fact on a list, and handed her a bowl, and Solar dried it for much longer than it needed." }
        ] },
        { t: "It's home. For now.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "For now is still home. My mama always says, a home is anywhere somebody notices when you're late." }
        ] },
        { t: "How did you know I like Wednesdays?", notes: 1, then: [
          { s: 'mymelody', f: 'happy', t: "Because you come down the stairs faster." }
        ] }
      ] },
      { n: "The last bowl went in the rack. My Melody pulled the plug and watched the water go with great interest, as she watched everything, and Solar folded the towel over the oven handle and found she'd been smiling at the black window for a while without noticing." }
    ],
    [
      { n: "There was always one end piece left. My Melody wrapped it separately, in foil instead of wax paper, and wrote on the foil in marker, in big careful letters, NOT FOR KUROMI, and put it on the second shelf of the fridge at the front, where you could not open the door without seeing it." },
      { s: 'mymelody', f: 'happy', t: "If I write her name she won't eat it. If I write not her name, it's gone by morning." },
      { choose: [
        { t: "That's diabolical.", notes: 3, then: [
          { s: 'mymelody', f: 'surprised', t: "Is it? I thought it was just how Kuromi works." },
          { n: "From the lounge, there came a short furious silence, the kind with somebody inside it." }
        ] },
        { t: "Does she know you know?", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "No. I think if she knew, she'd have to stop. And she likes the end piece so much. She always has." }
        ] },
        { t: "(Write NOT FOR SOLAR on another one.)", notes: 1, then: [
          { n: "My Melody looked at the second packet for a long moment, very seriously, and then took the marker and crossed out NOT, and handed it to her." }
        ] }
      ] },
      { n: "In the morning the foil was in the kitchen bin, folded into a very small square, as if that would help, and the fridge shelf had a single black crumb on it, and Kuromi came down to breakfast and announced to nobody that she wasn't hungry." }
    ]
  ],
  ranks: [
    { after: '7/15', title: '1: almond', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { ifBefore: '7/17', then: [
        { n: "It was exam week, and the whole dorm had the gray, overwatered look of people who'd been reading the same page for an hour. Solar had come down for tea. She'd meant to go straight back up. Then the kitchen light was on again, and the smell came up the hall like a hand on her sleeve." }
      ], else: [
        { n: "The kitchen light was on again, a little before eight, and the smell came up the hall to meet her on the stairs like a hand on her sleeve. Solar had meant to go up to her room and do something responsible. She stood on the bottom step for a while, losing an argument with herself, and then went down." }
      ] },
      { s: 'mymelody', f: 'happy', t: "Senpai! You came! I made the butter soft for you. I mean, I made it soft for the cake. But I was thinking of you while it got soft." },
      { n: "There was an apron waiting on the back of a chair, pink, with a rabbit on the pocket, and a second bowl, and a little card propped against the sugar tin. The card was soft at the corners from being handled. The recipe on it was written in a round, looping, grown-up hand, with a coffee ring over the oven temperature and a tiny drawing of a rabbit in the corner." },
      { s: 'mymelody', f: 'neutral', t: "That's my mama's writing. I know it by heart, but I keep the card in my pocket anyway. It's nice to have something with her handwriting on it." },
      { s: 'mymelody', f: 'happy', t: "Butter first. It has to be soft like it's been sitting in the sun for a while thinking about things. Then sugar. Then you beat it until it goes pale, and that takes longer than you want it to, and that's the most important part." },
      { n: "It did take longer than she wanted it to. Solar beat the butter and sugar with a wooden spoon until her forearm burned, while My Melody weighed out ground almonds and talked, in the easy uninterrupted way of a person who has never once been told to stop, about Mariland." },
      { s: 'mymelody', f: 'happy', t: "It's up in the mountains. There's one bakery, and one sweet shop, and one school, and a hill with a meadow on it where everybody goes in spring. Everybody knows everybody. When you go away, the whole town knows you went." },
      { s: 'mymelody', f: 'neutral', t: "The lady at the sweet shop cried when I left. She gave me a bag of strawberry candies for the train. I still have six." },
      { s: 'mymelody', f: 'neutral', t: "Nobody cried when Kuromi left. She went a whole month before me. I think she was pleased about that, and also I think it hurt her feelings. Both." },
      { s: 'mymelody', f: 'happy', t: "You hold the spoon like you're cross with it. Are you cross?" },
      { choose: [
        { t: "I'm concentrating.", notes: 3, stat: { proficiency: 1 }, then: [
          { s: 'mymelody', f: 'happy', t: "Kuromi concentrates like that too. Everybody thinks she's cross. She's only trying very hard and doesn't want anybody to see." },
          { n: "Solar looked down at her own white knuckles on the spoon, and loosened them, and the butter went pale under her hand almost at once, as if it had been waiting for her to relax." }
        ] },
        { t: "A little. Not at you.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "That's all right. You can be cross at the butter. The butter doesn't mind. That's why baking is good." }
        ] },
        { t: "(Make your face friendlier.)", notes: 1, then: [
          { n: "She tried to arrange her face into something friendlier. My Melody studied the result with great care." },
          { s: 'mymelody', f: 'surprised', t: "Oh, no. Now you look like you're in a photograph. Go back to cross." }
        ] }
      ] },
      { n: "Eggs, one at a time. Then the almonds and the flour, folded, not stirred, My Melody's hand light over Solar's on the spatula for the first turn to show her, a soft cool hand that smelled of vanilla. Into the tin. Flaked almonds over the top, a whole handful, scattered with a little flourish of the wrist that was obviously her mother's, too." },
      { s: 'kuromi', f: 'serious', t: "Don't let her put the flakes on. The flakes are a LIE. They burn and then they're all over the plate." },
      { n: "Kuromi was in the doorway to the lounge. She was holding a glass of water she had clearly fetched as an alibi, and was looking very hard at the ceiling." },
      { s: 'kuromi', f: 'neutral', t: "I'm not listening, by the way. I'm hydrating. It's a free country." },
      { n: "She went back to the couch. My Melody watched her go, and leaned over to Solar, and said in a whisper loud enough to be heard on the roof," },
      { s: 'mymelody', f: 'happy', t: "She loves the flakes. She picks them off the plate after." },
      { s: 'kuromi', f: 'serious', t: "I DO NOT." },
      { n: "The cake went in. They sat on the two chairs by the oven for fifty minutes with the little window lit up gold, watching it rise like it was television, and My Melody told her the names of every cow in the field behind her school, and Solar, who couldn't have said the name of a single person from her own childhood, found that she didn't mind listening to a stranger's at all. It was like borrowing a coat. It wasn't hers. It was warm." }
    ] },

    { after: '8/5', title: '2: almond jelly', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'joy', scene: [
      { n: "It was too hot for the oven. Summer had settled over Iwatodai like a damp towel over a bowl, and the kitchen at eight o'clock was the temperature of the inside of a mouth, and My Melody, undefeated, had decided on almond jelly. Milk and sugar and almond essence and gelatin, poured into little glass cups and lined up in the fridge to set, which meant, she explained, that you had to wait, which was the best part of any recipe and nobody ever believed her." },
      { n: "Aigis was sitting at the kitchen table, upright, hands folded, watching them both with the polite total attention she gave to everything." },
      { s: 'aigis', f: 'neutral', t: "I do not eat. But I find the procedure very satisfying to observe. Please continue as though I am a chair." },
      { s: 'mymelody', f: 'happy', t: "You're a very nice chair, Aigis-san." },
      { s: 'aigis', f: 'happy', t: "Thank you. I will try to remain one." },
      { n: "While the jelly set they sat on the kitchen floor where the tiles were coolest, with their backs against the cupboards. My Melody had her hood pushed back for once, the ears flopped over her shoulders, and her face was pink from the heat and entirely untroubled." },
      { s: 'mymelody', f: 'neutral', t: "In Mariland there's a summer festival too. With a baking prize. I won it three years in a row." },
      { s: 'mymelody', f: 'neutral', t: "I put in the same cake every year. Mama's cake. Everybody claps. Kuromi puts in something different every year, and it's always very interesting, and one year it was on fire." },
      { s: 'mymelody', f: 'happy', t: "Not on purpose. Well. A little bit on purpose." },
      { s: 'mymelody', f: 'neutral', t: "Everybody always says, Melody, you're so lucky. And I think I am. But I've never found out what I'd do if I wasn't. Isn't that funny? I've never once found out." },
      { n: "She said it the way she said everything, as easily as the weather, and Solar felt it go into her and sit there, heavier than it had any right to be on a kitchen floor in August." },
      { choose: [
        { t: "Have you ever lost anything?", notes: 3, then: [
          { s: 'mymelody', f: 'neutral', t: "Once. A hair ribbon. When I was seven." },
          { s: 'mymelody', f: 'happy', t: "It was in my pocket." },
          { n: "She laughed at herself, and then stopped, and looked at her hands in her lap with a small puzzled frown, as if she'd heard the answer for the first time and found something odd at the bottom of it." }
        ] },
        { t: "Maybe they clap because it's good.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "It is good. It's Mama's. That's why it wins." },
          { n: "Solar opened her mouth to say *that isn't what I meant*, and realized it was, and closed it again." }
        ] },
        { t: "Sounds like a nice problem to have.", notes: 1, then: [
          { s: 'mymelody', f: 'happy', t: "It is! It's a very nice problem. Everybody says so." },
          { n: "She said *everybody says so* the way you'd say a prayer you'd been taught before you knew what the words meant." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "The jelly has reached a stable state. I have been monitoring it." },
      { s: 'mymelody', f: 'happy', t: "Thank you, Aigis-san! You're the best monitor I've ever had. At home it's just me opening the fridge every five minutes." },
      { s: 'aigis', f: 'neutral', t: "Opening the door raises the internal temperature and delays setting. I calculate you have cost yourself several hours over the course of your life." },
      { s: 'mymelody', f: 'surprised', t: "Oh, no." },
      { s: 'mymelody', f: 'happy', t: "I think they were nice hours, though." },
      { n: "Aigis considered this with her head slightly on one side, as if filing it somewhere she'd need it later." },
      { n: "It wobbled when you touched the cup, white and cold and faintly sweet, and tasted like the smell of the cake if the cake had gone swimming. My Melody ate hers with a tiny spoon, very slowly, eyes shut. She put one in the fridge on the shelf by the door with no label on it at all, and when Solar raised an eyebrow, she only smiled and put her finger to her lips, and Solar, after a moment, understood exactly whose it was." }
    ] },

    { after: '8/26', title: '3: a slice for later', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'dorm', scene: [
      { n: "Koromaru had learned what Wednesdays were. He'd only lived at the dorm a few weeks and he already knew, the way dogs know, the sound of the oven door and the particular rattle of the rabbit-shaped mitts coming off their hook, and he was lying across the kitchen doorway like a draught excluder when Solar came down, so that she had to step over him, and he thumped his tail once on the floor in what was either a greeting or a toll." },
      { s: 'mymelody', f: 'happy', t: "Koromaru-kun is helping. He's in charge of the floor. If anything falls on it, it's his." },
      { n: "Solar sat at the table while the cake baked and put her head down on her folded arms for a second, only a second, because the kitchen was warm and the light was low and it had been a long week, and longer nights. When she lifted it again My Melody was sitting across from her with her chin on her hands, studying her." },
      { s: 'mymelody', f: 'neutral', t: "Senpai. You always look tired. Not sleepy tired. The other kind." },
      { s: 'mymelody', f: 'neutral', t: "My mama looks like that at the end of festival week, when she's been carrying chairs for three days and smiling at everybody. Like she's been carrying chairs." },
      { s: 'solar', f: 'neutral', t: "...It's exams." },
      { s: 'mymelody', f: 'neutral', t: "It's the summer holidays." },
      { n: "There was no malice in it at all. That was the terrible thing. She just said it, the true thing, the way you'd point out that someone had their shirt on inside out, and waited, with her soft round face entirely open, for whatever Solar would say next." },
      { choose: [
        { t: "(Tell her the truth: you can't tell her.)", notes: 3, then: [
          { s: 'solar', f: 'serious', t: "It's something I can't talk about. I'm sorry." },
          { s: 'mymelody', f: 'happy', t: "That's all right! You don't have to tell me. I only wanted you to know that I can see it. So you're not carrying chairs where nobody's looking." }
        ] },
        { t: "I don't sleep very well.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "That's true. But it isn't all of it, is it?" },
          { n: "Solar didn't answer. My Melody nodded, as if she had, and let it go, gently, the way you'd put a bird back out of a window." }
        ] },
        { t: "(Change the subject. Ask about the cake.)", notes: 1, then: [
          { s: 'mymelody', f: 'happy', t: "Twelve more minutes! You're very good at changing the subject, Senpai. Kuromi's good at it too, but she does it louder." }
        ] }
      ] },
      { n: "When the cake came out she cut the first slice, the good one from the middle, wrapped it in wax paper, and wrote on the paper in pen, SOLAR-SENPAI, with a rabbit after it. Then she opened the fridge and put it on the top shelf at the back, behind the milk, where nobody would take it by accident." },
      { s: 'mymelody', f: 'happy', t: "From now on there'll be one there every Wednesday. Even if you can't come down. Even if you're very busy carrying chairs." },
      { s: 'mymelody', f: 'neutral', t: "Then I'll know at least you ate something. My mama always says, you can't help with what you can't see, but you can always help with dinner." },
      { choose: [
        { t: "You don't have to do that.", notes: 2, then: [
          { s: 'mymelody', f: 'happy', t: "I know! That's why it's nice." }
        ] },
        { t: "(Just say thank you.)", notes: 3, stat: { kindness: 1 }, then: [
          { s: 'solar', f: 'happy', t: "Thank you, Melody." },
          { n: "It came out quieter than she'd meant it to, and My Melody didn't make anything of that, which was its own kindness, only nodded, pleased, and went back to the cake." }
        ] }
      ] },
      { n: "Koromaru, who had been watching the whole transaction with his chin on his paws, sighed a long sigh through his nose at the fridge door. My Melody dropped a flaked almond on the floor for him, by accident, three times in a row." },
      { s: 'koromaru', f: 'happy', t: "Arf!" },
      { s: 'mymelody', f: 'surprised', t: "Oh! Clumsy me. Again." },
      { n: "Later, upstairs, much later, after a night that had been long in a way Solar couldn't have explained to anyone in that warm kitchen, she came down for water and opened the fridge, and the wax-paper parcel was there behind the milk with its little rabbit, exactly where it had been promised. She ate it standing up in the dark with the fridge door open, cold from the shelf and still soft, and went back to bed, and slept, for once, all the way through." }
    ] },

    { after: '9/16', title: '4: rival', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "Tonight it was something with apples, because September had come in cool at last and the greengrocer on the strip had a crate of them by the door, red and small and freckled. My Melody peeled them in one long curl each, round and round without the knife ever leaving the skin, and laid the peels out on the counter side by side like ribbons, and didn't seem to think there was anything remarkable about it." },
      { n: "The lounge door was open. Through it, Solar could see the back of the couch, and the top of a black jester hat with a pink skull on it, which had not moved in twenty minutes, and which was the most attentive hat she'd ever seen." },
      { s: 'mymelody', f: 'neutral', t: "Senpai. Do you know why Kuromi came here?" },
      { s: 'solar', f: 'neutral', t: "The exchange?" },
      { s: 'mymelody', f: 'neutral', t: "She signed up for the exchange so she could go somewhere nobody would say *Melody and Kuromi*. Like it's one word. Everybody in Mariland says it like it's one word. I heard her tell our teacher. She didn't know I was in the corridor." },
      { s: 'mymelody', f: 'neutral', t: "So then I signed up too." },
      { n: "The hat on the couch went very still, which was impressive, because it had already been still." },
      { s: 'mymelody', f: 'sad', t: "I know that was bad. I knew it was bad when I did it. I did it anyway. I didn't want to be in Mariland without her. It was the first time I ever did a bad thing on purpose." },
      { s: 'mymelody', f: 'neutral', t: "Everybody always says I'm so good. I don't think a good person follows somebody who's trying to get away. I think that's selfish. Isn't it?" },
      { choose: [
        { t: "Yes. It was a little selfish.", notes: 3, stat: { courage: 1 }, then: [
          { n: "My Melody looked at her for a long moment with the apple in one hand and the knife in the other, and then her whole face lit up, as if Solar had handed her something she'd been asking people for all her life and nobody had ever given her." },
          { s: 'mymelody', f: 'happy', t: "Thank you. Everybody else says no. It's very hard to be sorry for something when everybody says you didn't do it." }
        ] },
        { t: "I think she's glad you came.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "I think so too. But she's allowed to be glad and still wish I hadn't. People can be both. Mama says I'm too young to know that, but I know it." }
        ] },
        { t: "Why are you telling me?", notes: 1, then: [
          { s: 'mymelody', f: 'happy', t: "Because you're the person I tell things to on Wednesdays." },
          { n: "As if that settled it. As if that were simply what Wednesdays were for." }
        ] }
      ] },
      { n: "Kuromi appeared in the doorway. She had an empty cereal bowl in one hand and her other hand jammed in the pocket of her pink hoodie, and the bandage across her nose had a tiny drawn-on skull, freshly done, still shiny." },
      { s: 'kuromi', f: 'serious', t: "I'm not listening. I'm getting MILK. People are allowed to need milk." },
      { n: "She walked to the fridge. She opened it. She stood in the cold light of it for a long second, looking at nothing, at the eggs and the butter and the wax-paper parcel with a rabbit on it, and then she shut it again and walked back out to the lounge with the empty bowl." },
      { s: 'mymelody', f: 'happy', t: "She didn't get any milk." },
      { s: 'mymelody', f: 'neutral', t: "She's been standing behind the door since the apples. She thinks I don't know when she's listening. I always know. She breathes like she's annoyed with the air." },
      { choose: [
        { t: "Are you going to tell her you know?", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "No. If I told her, she'd stop listening. And then I'd have to say things right to her face, and she'd have to answer, and she isn't ready. She's very brave about everything except me." }
        ] },
        { t: "(Raise your voice a little.) The apple thing smells amazing.", notes: 3, then: [
          { n: "She said it loudly enough to carry. From the lounge came a pause, and then a creak of couch springs, and then, very grudgingly, at a volume calibrated to sound like it was addressed to the television," },
          { s: 'kuromi', f: 'neutral', t: "...it smells OKAY." },
          { s: 'mymelody', f: 'happy', t: "That's the nicest thing she's said about my baking since we were nine." }
        ] }
      ] },
      { n: "The apple cake came out dark gold and fragrant with cinnamon, and My Melody cut it into nine pieces and put eight on a plate on the counter for the dorm, and wrapped the ninth in foil and wrote NOT FOR KUROMI on it, and caught Solar's eye, and smiled the smallest, slyest smile Solar had ever seen on her, which was saying very little, and was still somehow a lot." }
    ] },

    { after: '10/7', title: '5: bread', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', music: 'tender', scene: [
      { n: "Since the start of October the dorm had been quiet in a way that had a shape to it. Doors shut softer. The TV stayed off. There was a coat that wasn't on its hook by the front door any more, and a place at the end of the dining table that nobody sat in and nobody moved the chair from, and the people who knew why walked around the outside of it like a hole in the floor, and the people who didn't could feel the draught." },
      { n: "On Wednesday night, the dining room table was covered in bread. Rolls, dozens of them, round and brown and shining with egg wash, on every plate the dorm owned and two baking trays and a chopping board, and the whole ground floor smelled warm and yeasty and alive in a way it hadn't for days. My Melody was sitting at the end of the table with flour up to her elbows and a dish towel over her shoulder, looking at what she'd done." },
      { s: 'mymelody', f: 'neutral', t: "I made too much. I knew I was making too much. I kept going anyway." },
      { s: 'mymelody', f: 'neutral', t: "Nobody's told me what happened. That's all right. I don't live here the way you all live here. Kuromi and I are just staying. You're the ones who belong to each other." },
      { s: 'mymelody', f: 'sad', t: "But I know what quiet sounds like. So I made bread. Bread takes a very long time, and you have to punch it, and you can't hurry it, and you can't help anybody while it rises, you can only wait. It seemed like the right thing." },
      { n: "Solar stood in the doorway. Her throat had done something without asking her, gone tight and hot, and she held on to the door frame for a moment, and was glad of the bread smell, because it gave her something to breathe that wasn't the other thing." },
      { choose: [
        { t: "(Sit down and eat one.)", notes: 3, then: [
          { n: "She sat down at the end of the table across from her and took a roll from the nearest plate and tore it open, and steam came out of the middle, and she ate it in small pieces without saying anything, and My Melody watched her the whole time and didn't say anything either, and it was the most comfortable silence Solar had been in all week." }
        ] },
        { t: "It was the right thing.", notes: 3, then: [
          { s: 'mymelody', f: 'neutral', t: "I hope so. I didn't know what else to do with my hands." },
          { s: 'solar', f: 'sad', t: "Nobody does." }
        ] },
        { t: "I'm sorry nobody told you.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "Don't be. Some things are only for the people they happened to. I'm not cross. I only wanted to be some use, from the outside." }
        ] }
      ] },
      { n: "People came, the way people come to a kitchen. Junpei first, drawn by the smell, who stood in the doorway with his cap in his hands and then sat down and ate three rolls and didn't make a single joke. Then Akihiko, still in his running clothes, who took two and stood by the window eating them and looking out at nothing. Fuuka, who cried a little, quietly, into a roll, and said it was very good bread." },
      { n: "Last of all, near ten, Mitsuru, who came down the stairs in her uniform still with a folder under her arm, and stopped in the doorway, and took in the table and the trays and the girl at the end of it with the flour on her sleeves." },
      { s: 'mitsuru', f: 'neutral', t: "...Did you make all of this, Melody?" },
      { s: 'mymelody', f: 'happy', t: "Yes! Please take some, Kirijo-senpai. You look like you've been carrying chairs." },
      { n: "Mitsuru looked at her for a moment with an expression Solar had never seen on her face and couldn't name. Then she took a roll, and held it in both hands, and said thank you, very quietly, and went back upstairs with it without eating it, and Solar was nearly sure she knew why." },
      { n: "Kuromi didn't come in. She stood in the hall at the bottom of the stairs with her hands jammed in her hoodie pocket for a long time, long enough that Solar could see the toes of her boots past the door frame, and then came in fast and took two rolls without looking at anybody and went back up, and they heard her door shut, and then, a minute later, the door next to it, Melody's, open and close again, very softly." },
      { s: 'mymelody', f: 'neutral', t: "She's put one on my pillow. She does that when she thinks I'm sad. She thinks I don't know it's her." },
      { s: 'mymelody', f: 'neutral', t: "I wasn't sad, really. I was only sorry. But I'll eat it anyway. It would be rude not to." },
      { s: 'mymelody', f: 'neutral', t: "Senpai. Are you all right? You don't have to say. I only want to have asked." },
      { choose: [
        { t: "No. Not really.", notes: 3, then: [
          { s: 'mymelody', f: 'neutral', t: "Okay." },
          { n: "That was all. She didn't ask anything else, didn't try to fix it, only pushed the nearest plate a little closer across the table to Solar's hand, the way you'd move a lamp nearer to someone reading, and left it there." }
        ] },
        { t: "I will be.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "I believe you. But you don't have to be yet. The bread will keep till Saturday." }
        ] }
      ] },
      { n: "Afterward they wrapped the leftovers in tea towels and filled the bread bin and half the fridge. There were still rolls on the counter on Saturday. Somebody kept eating them, one at a time, at odd hours. The dorm was still quiet. But it smelled like somebody lived there." }
    ] },

    { after: '10/28', title: '6: sweet nature', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'joy', scene: [
      { n: "The culture festival was in two days and the whole of Gekkoukan had gone mad in the usual ways, cardboard and paint and extension cords and somebody's class doing a maid café whether the faculty liked it or not. My Melody's class was doing a tea room. My Melody, it had been decided, unanimously and without consulting her, was doing the cakes." },
      { n: "She was on her fourth pound cake of the evening when Junpei came in. He came in the way he came into rooms when he wanted something, which was sideways, with his hands in his pockets and his cap at an angle that was meant to look accidental." },
      { s: 'junpei', f: 'happy', t: "Melody-chan. Melody-chaaan. Has anyone ever told you you're, like, an angel? Sent down from heaven? To bring cake to the people?" },
      { s: 'mymelody', f: 'neutral', t: "Yes. A lot. Every day, nearly." },
      { s: 'mymelody', f: 'neutral', t: "It doesn't mean anything any more, Junpei-senpai. It's like being told it's Wednesday." },
      { n: "Junpei stopped. His whole face did the thing a balloon does when you let go of it before you've tied it." },
      { s: 'junpei', f: 'surprised', t: "...Dude. That's cold." },
      { s: 'mymelody', f: 'surprised', t: "Is it? I didn't mean it to be. I only meant you don't have to say it. You can just ask." },
      { choose: [
        { t: "She's right, Junpei. Just ask.", notes: 2, then: [
          { s: 'junpei', f: 'flustered', t: "Okay. Okay! Fine. Can I please have a piece of cake. Our haunted house guys are starving and I'm their ambassador." },
          { s: 'mymelody', f: 'happy', t: "Of course! Take two." }
        ] },
        { t: "(Try not to laugh.)", notes: 3, then: [
          { n: "Solar didn't laugh. She was very proud of not laughing. She turned to the sink and ran the tap for no reason, with her shoulders going, and behind her she heard My Melody cut him a slice anyway, and Junpei say thank you in the small dignified voice of a man whose best material had died on the tiles." }
        ] },
        { t: "Tell her she's an angel again. Slower.", notes: 1, then: [
          { s: 'junpei', f: 'serious', t: "Not helping, Solar." }
        ] }
      ] },
      { n: "He took his cake and went, wounded, but chewing. My Melody went back to her batter. After a while she said, without looking up, in the thoughtful way she had when she was working something out as she said it," },
      { s: 'mymelody', f: 'neutral', t: "When everybody says nice things all the time, you stop being able to hear them. They're like rain on a roof. You only notice when it stops." },
      { s: 'mymelody', f: 'neutral', t: "I think that's why I like Kuromi so much. She never says anything nice. Not ever. So when she does, I can hear it." },
      { s: 'mymelody', f: 'happy', t: "She said my hair looked okay once, in the third year of elementary school. I remember the exact day. It was a Thursday." },
      { choose: [
        { t: "Do you hear it when I say something nice?", notes: 3, then: [
          { s: 'mymelody', f: 'neutral', t: "Yes. You don't say very many. You say them like you're putting something down on a table very carefully so it won't break." },
          { s: 'mymelody', f: 'happy', t: "So I hear all of them." }
        ] },
        { t: "That's a sad way to hear things.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "Is it? I don't think so. It just means the ones I hear are real." }
        ] }
      ] },
      { s: 'mymelody', f: 'neutral', t: "At home, everybody said I was the sweetest girl in Mariland. The sweet shop lady. The teachers. The man who drives the bus. I think it was true. But I think I'd like it if one person, just one, said I was something else." },
      { s: 'solar', f: 'neutral', t: "Like what?" },
      { s: 'mymelody', f: 'happy', t: "I don't know yet! That's the trouble. Nobody's ever had to look." },
      { n: "She slid the fourth cake into the oven next to the third and shut the door with her hip, and Solar, watching her, thought about how strange it must be to be loved like weather, everywhere and all the time and for nothing in particular, and how easy it would be, from the outside, to mistake that for being known." }
    ] },

    { after: '11/18', title: '7: the blanket', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'night', scene: [
      { n: "It was cold enough now that the cake had to wait. My Melody made cocoa instead, in the dorm's one saucepan that didn't stick, with real chocolate she'd grated by hand and a pinch of salt she said was a secret and then told Solar about immediately, and they carried two mugs up four flights of stairs and out onto the roof, because My Melody said you had to drink the first cocoa of winter somewhere you could see your breath." },
      { n: "You could. The city was a smear of lights all the way down to the water, and the wind came in off the bay with a bite in it, and their breath went up in two pale puffs side by side and vanished. My Melody had both hands around her mug and her hood up and her ears, the rabbit ones, blowing sideways." },
      { s: 'mymelody', f: 'neutral', t: "Senpai. Can I tell you a thing about Kuromi? You can't tell her. You have to promise." },
      { s: 'mymelody', f: 'neutral', t: "Some mornings, when I open my door, Kuromi's there. Asleep. Sitting up against it, outside, in the hall, with a pillow. Not every night. Only some." },
      { s: 'mymelody', f: 'neutral', t: "Always when the moon's very big. Isn't that funny? Like a werewolf, but backwards." },
      { n: "Solar's hands went still around the mug. The cocoa was very hot and she couldn't feel it at all. She kept her eyes on the bay, on the lights moving along the bridge, and made her face do nothing, the way she'd learned to make it do nothing, and was suddenly, sharply aware of what it must look like from the inside of a door, to wake up on the morning after a full moon and find somebody keeping watch over you from something you'd never know was there." },
      { s: 'mymelody', f: 'neutral', t: "The first time, I put my blanket on her. Then I went back to bed and pretended I'd never got up. When I came out properly she was gone, and the blanket was folded on my doorstep, very neatly. She never said anything. So I never said anything." },
      { s: 'mymelody', f: 'neutral', t: "I think she's guarding me from something. I don't know what. I don't ask. If I asked, she'd stop. And I don't want her to stop." },
      { choose: [
        { t: "(Say nothing about the moon.)", notes: 3, then: [
          { n: "She said nothing. It took everything she had and it didn't look like anything, and My Melody, who saw so much, looked sideways at her for a long moment over the rim of the mug and then looked back at the city, and didn't ask either." }
        ] },
        { t: "She'd do it whether you asked or not.", notes: 3, then: [
          { s: 'mymelody', f: 'happy', t: "I know. That's why it's Kuromi." }
        ] },
        { t: "Maybe she sleepwalks.", notes: 1, then: [
          { s: 'mymelody', f: 'neutral', t: "She doesn't. She brings a pillow, Senpai. And a flashlight. And a bag of chips." },
          { s: 'mymelody', f: 'happy', t: "Sleepwalkers don't pack." }
        ] }
      ] },
      { n: "Behind them the roof door creaked. Neither of them turned around. Somebody had come up the stairs, and was standing just inside the doorway out of the wind, and was breathing like they were annoyed with the air." },
      { s: 'mymelody', f: 'happy', t: "There's a third mug downstairs on the counter. It's got the most marshmallows. It isn't for anybody." },
      { n: "A pause. Then footsteps going back down, fast and loud, as if whoever it was wanted it on record that they were in no hurry at all." },
      { s: 'mymelody', f: 'neutral', t: "When we were small, in Mariland, I got lost on the hill above the meadow once. Just for an afternoon. The whole town came looking, everybody, with lanterns, calling my name, and it was so loud I got frightened and hid." },
      { s: 'mymelody', f: 'neutral', t: "Kuromi didn't call. She just sat down on the path near where I was hiding and waited, and didn't say anything, until I came out by myself. Then she said I was an idiot and walked me home." },
      { s: 'mymelody', f: 'happy', t: "She was seven. She'd brought a flashlight and a bag of chips that time too." },
      { choose: [
        { t: "She hasn't changed much.", notes: 2, then: [
          { s: 'mymelody', f: 'happy', t: "No. Nobody's ever noticed except me. I like being the only one." }
        ] },
        { t: "Have you ever told her you remember?", notes: 3, then: [
          { s: 'mymelody', f: 'neutral', t: "No. I think some things are better if you just keep them, like a candy in your pocket. If you take it out to show people, it gets fluff on it." }
        ] }
      ] },
      { s: 'mymelody', f: 'neutral', t: "You promised, Senpai. Remember." },
      { s: 'solar', f: 'neutral', t: "I remember." },
      { n: "They finished the cocoa. The wind dropped a little. My Melody leaned against her shoulder, lightly, the way you'd lean on a wall you trusted, and Solar thought about a girl with a pillow and a flashlight sitting up all night in a hallway against a door, and a girl on the other side of it who knew, and folded blankets, and never said, and how much love it took on both sides to keep a secret that neither of you understood." }
    ] },

    { after: '12/9', title: '8: mama', place: 'Iwatodai Dorm · Front', time: 'Evening', music: 'tender', scene: [
      { n: "My Melody wasn't in the kitchen. The light was off and the oven was cold and there was no smell at all in the hall, which was so wrong on a Wednesday that Solar stood at the bottom of the stairs for a moment as if she'd walked into the wrong building. She found her outside, on the front step, in the cold, in her coat and her hood, with her phone held to her ear in both hands." },
      { s: 'mymelody', f: 'happy', t: "Yes, Mama. Yes. I'm wearing the scarf. Yes, the pink one. ...Yes, I'm eating. I'm eating a lot. I'm baking every Wednesday, at eight o'clock, like you." },
      { s: 'mymelody', f: 'neutral', t: "...The spring festival? Oh. The almond pound cake, of course. What else would I put in?" },
      { s: 'mymelody', f: 'happy', t: "Yes, Mama. I love you too. Say hello to the lady at the sweet shop. Bye. Bye-bye." },
      { n: "She hung up. She didn't put the phone away. She sat on the step with it in her lap, looking at the dark screen, while the streetlamp at the end of the path buzzed and the wind went through the bare hedges with a dry papery sound, and her breath went up white and didn't come back." },
      { n: "Solar sat down next to her. The step was so cold it went straight through her skirt." },
      { s: 'mymelody', f: 'neutral', t: "Senpai. I've never made a cake that was mine." },
      { s: 'mymelody', f: 'neutral', t: "Everything I make is Mama's. The almond cake. The jelly. The bread is out of a book at the Mariland library, I copied it out by hand. I've won three prizes with a cake my mama made up before I was born, and everybody clapped, and I curtsied, and I've never once thought that was strange until right now, on this step." },
      { s: 'mymelody', f: 'sad', t: "If I made my own, it might be bad. I've never made anything bad. I don't know what that's like. I don't know if I'd be all right." },
      { choose: [
        { t: "Then find out.", notes: 3, stat: { courage: 1 }, then: [
          { s: 'mymelody', f: 'surprised', t: "Find out if I'd be all right?" },
          { s: 'solar', f: 'neutral', t: "Find out what you'd make. The bad part's just the cost of finding out." },
          { n: "My Melody looked at her for a long time with her mouth a little open, like someone who'd been handed a map of a town she'd lived in all her life and seen a street she'd never noticed." }
        ] },
        { t: "Your mama's cake is yours too. You learned it.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "That's true. I know it is." },
          { s: 'mymelody', f: 'neutral', t: "But I think I want to know what I'd make if nobody had shown me anything. Just once. Is that ungrateful?" },
          { s: 'solar', f: 'neutral', t: "No. It's just yours." }
        ] },
        { t: "(Put your arm around her and wait.)", notes: 2, then: [
          { n: "She put her arm around her, a little awkwardly, around the hood and the coat and the cold, and My Melody leaned into it all at once, the whole of her weight, the way a much smaller child leans, and they sat there, and the streetlamp buzzed, and neither of them said anything for a long time." }
        ] }
      ] },
      { s: 'mymelody', f: 'neutral', t: "Kuromi makes her own things. She always has. They're strange and sometimes they're on fire, and nobody claps, and she does it again the next year anyway." },
      { s: 'mymelody', f: 'neutral', t: "I used to feel sorry for her. Now I think maybe she was the brave one the whole time, and I was just the one who got clapped for." },
      { n: "She stood up and brushed off the back of her coat and looked up at the dorm, at the dark kitchen window, and then at Solar, and her face had something in it Solar hadn't seen there before, small and stubborn and new, the way the first green comes up through frost." },
      { s: 'mymelody', f: 'neutral', t: "Mama would be so surprised if I put in something different. She'd still clap. She'd clap the loudest." },
      { s: 'mymelody', f: 'sad', t: "That's almost the scary part. That she'd clap anyway, even if it was terrible, because it was me. I don't want to be clapped for anyway. Not this once." },
      { n: "Solar didn't have anything to say to that. She'd never been clapped for at all, that she knew of, and she understood it anyway, the shape of it, the way you can understand a language you don't speak from somebody's face." },
      { s: 'mymelody', f: 'happy', t: "I'm cold. Let's go in. I'll make cocoa. I'll make it my way. I don't know what my way is yet, so it might be strange." },
      { n: "It was strange. She put chili in it. It was also, Solar had to admit, around the second cup, sort of wonderful." }
    ] },

    { after: '1/13', title: '9: terrible', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'joy', scene: [
      { n: "The kitchen looked like a crime scene. There was flour on the ceiling, which Solar had not known was possible, and black sesame seeds on every surface like a fine dark sand, and a bowl of strawberries that had been mashed into something that looked frankly forensic. In the middle of the counter, on the rack, sat a cake. It had fallen in on itself in the middle like a sinkhole. It was the color of a storm." },
      { n: "My Melody was standing in front of it with her hands clasped and her hood pushed back and a look on her face Solar had never seen before, which was absolute, stunned, radiant horror." },
      { s: 'mymelody', f: 'surprised', t: "Senpai. Senpai, it's terrible. I made something terrible!" },
      { s: 'mymelody', f: 'happy', t: "I've never made anything terrible before in my whole life! Look at it! It's all sunk down! It tastes like a burnt pencil!" },
      { n: "She cut a slice and held it out, and Solar, out of loyalty and against every instinct she had, took a bite. It was dense in the wrong way and bitter in a way that wasn't the almond kind, and somewhere in the middle of it there was a pocket of strawberry that was, briefly, devastatingly good, before the pencil came back." },
      { choose: [
        { t: "It's terrible.", notes: 3, then: [
          { s: 'mymelody', f: 'happy', t: "It is! Thank you! Thank you for saying it!" },
          { n: "She seized Solar's floury hands in her floury hands and shook them up and down, delighted, as if Solar had given her a medal, and the both of them stood there in the wreckage laughing until My Melody had to sit down on the floor." }
        ] },
        { t: "The strawberry part is good.", notes: 2, then: [
          { s: 'mymelody', f: 'surprised', t: "Is it? Really? Not just nice-good. Good-good?" },
          { s: 'solar', f: 'neutral', t: "About a centimeter of it. Yes." },
          { s: 'mymelody', f: 'happy', t: "A centimeter! I'll take a centimeter!" }
        ] },
        { t: "(Chew very slowly and say nothing.)", notes: 1, then: [
          { s: 'mymelody', f: 'happy', t: "You're chewing like Koromaru-kun with a vitamin. That's how I know it's terrible." }
        ] }
      ] },
      { n: "Kuromi came in. She didn't pretend this time to be getting milk. She came straight in from the lounge with her arms folded, stopped in front of the counter, and looked at the cake with the cold professional eye of a rival who had, over the years, set at least one of her own entries on fire." },
      { s: 'kuromi', f: 'serious', t: "What is THAT." },
      { s: 'mymelody', f: 'happy', t: "It's mine! It's my own! It's terrible!" },
      { n: "Kuromi took the fork out of Solar's hand without asking and cut a piece off the end and put it in her mouth, and chewed, and her face went through several things very fast." },
      { s: 'kuromi', f: 'neutral', t: "...That's the worst thing I've ever eaten." },
      { n: "She cut another piece. She ate that one too. Then she put the fork down on the counter very precisely and walked out, and from the lounge, at a volume calibrated to sound like it was addressed to the television," },
      { s: 'kuromi', f: 'neutral', t: "Less sesame. And bake it LONGER, it's raw in the middle. Not that I care." },
      { n: "My Melody sat on the kitchen floor in the flour with her knees up and her hands over her mouth, and her eyes over the top of them were wet and shining, and she didn't look sad at all." },
      { s: 'mymelody', f: 'neutral', t: "She's never told me how to make anything better. Not ever. Because I always won. Nobody tells you how to do it better when you win." },
      { s: 'mymelody', f: 'serious', t: "Senpai. If Kuromi ever beats me at something, I want it to be real. I want her to really beat me. So I'll have to really try. I've never really tried at anything." },
      { choose: [
        { t: "Then you'd better learn to bake it longer.", notes: 3, then: [
          { s: 'mymelody', f: 'happy', t: "And less sesame! I'm writing it down." }
        ] },
        { t: "She'd hate it if you let her win.", notes: 2, then: [
          { s: 'mymelody', f: 'neutral', t: "I know. She'd never forgive me. That's the nicest thing about her." }
        ] }
      ] },
      { n: "She got up and found a notebook in her bag, a new one, plain, with nothing on the cover, and opened it to the first page, and wrote in pencil in her own small round hand: *less sesame, bake longer*. Then she looked at it for a while, and underlined *longer*, twice, and Solar realized it was the first thing she'd ever seen her write down that her mother hadn't told her." }
    ] },

    { after: '1/20', title: '10: my recipe', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', music: 'tender', scene: [
      { n: "The smell met her on the stairs, the way it had the very first time, except that it was different. Not almond. Something darker and warmer underneath, toasted, nutty, and over it something bright and sharp and sweet, like a window opened in winter. Solar stopped on the bottom step and breathed in, and didn't know what it was, and that was the point." },
      { n: "My Melody was standing at the counter with the oven mitts still on, both rabbits, and in front of her on the rack was a cake. It had risen evenly. It was dark at the edges, almost black, and through the middle where she'd cut into it ran a ribbon of pink, strawberry, set in swirls through the black sesame like a stripe of dawn through a night sky. It hadn't sunk at all." },
      { n: "Beside it the plain notebook lay open, and the first page wasn't the first page any more. There were six of them, crossed out and rewritten and crossed out again, notes in the margins, a coffee ring, a tiny drawing of a rabbit in the corner of the last one. At the top of the last page, in pencil, in her own small round hand, it said: *Melody's cake.*" },
      { s: 'mymelody', f: 'happy', t: "Senpai. It's the seventh one. Kuromi ate the other six. She said every single one was the worst thing she'd ever eaten." },
      { s: 'mymelody', f: 'neutral', t: "She said this one was okay." },
      { n: "She cut the first slice, the good one from the middle, and put it on a plate, and held it out in both hands. Solar took a bite. It was rich and nutty and a little bitter, the grown-up kind of bitter, and then the strawberry came through it all at once like somebody laughing in a quiet room, and it didn't taste like anybody's mother. It tasted like a girl standing in a kitchen who'd made something and wasn't sure, and was going to stand behind it anyway." },
      { choose: [
        { t: "It's wonderful, Melody.", notes: 3, then: [
          { n: "She said it carefully, putting it down on the table so it wouldn't break, and My Melody heard it, all of it. Solar watched her hear it." }
        ] },
        { t: "It tastes like you.", notes: 3, then: [
          { s: 'mymelody', f: 'surprised', t: "Does it? What do I taste like?" },
          { s: 'solar', f: 'happy', t: "Sweeter than it should be. Then honest about it." }
        ] },
        { t: "What does your mama say?", notes: 1, then: [
          { s: 'mymelody', f: 'neutral', t: "I haven't told her yet. I wanted it to be only mine for a little while first. Just a week. Then I'll tell her." }
        ] }
      ] },
      { s: 'mymelody', f: 'neutral', t: "Senpai, I think it's good." },
      { n: "She said it plainly, the way she said everything, and it took Solar a moment to hear what was missing from it. Not *my mama always says*. Not *everybody says*. *I think.* My Melody seemed to hear it a second later, too, because she put her mitt over her mouth, and her ears went pink to the tips." },
      { s: 'mymelody', f: 'flustered', t: "Oh. I said that like it was mine." },
      { s: 'solar', f: 'neutral', t: "It is yours." },
      { s: 'mymelody', f: 'neutral', t: "I'm going to put it in at the spring festival. Not Mama's. This one. It might lose. It might lose to something on fire." },
      { s: 'mymelody', f: 'happy', t: "I think I'd like that, a bit. To find out what it's like. I've waited my whole life to find out." },
      { n: "Then she took the oven mitts off, both rabbits, and put them down on the counter, and came around it, and hugged Solar without asking, the way she did everything, entirely and at once. It was a good hug. It smelled of sesame and sugar and the vanilla on her hands, and it was warm all the way through, the kind that doesn't have anything to prove, and it went on for a while, and Solar, who wasn't good at these, found that her own arms had come up without being told and stayed." },
      { s: 'mymelody', f: 'happy', t: "The exchange is over in March. I'll go home. But on Wednesdays, at eight o'clock, I'll be baking. Every week. So you should bake something too, Senpai. Wherever you are." },
      { s: 'mymelody', f: 'happy', t: "Then it'll be like we're in the same kitchen." },
      { choose: [
        { t: "Every Wednesday. I promise.", notes: 3, then: [
          { s: 'mymelody', f: 'happy', t: "Even if it's terrible?" },
          { s: 'solar', f: 'happy', t: "Especially if it's terrible." }
        ] },
        { t: "I'll need the recipe.", notes: 2, then: [
          { s: 'mymelody', f: 'happy', t: "No! You have to make your own. That's the whole thing. I'll lend you the notebook for the crossing-out part." }
        ] }
      ] },
      { n: "From the lounge, through the open door, came the sound of somebody blowing their nose very loudly, and then a voice, thick and furious, at a volume calibrated to sound like it was addressed to the television, saying that the TV was making her eyes water and somebody needed to dust it." },
      { n: "My Melody cut a slice and wrapped it in foil, and took the marker, and stood over it a moment, and then wrote, for the first time in all those Wednesdays, FOR KUROMI. And carried it out to her herself." }
    ] }
  ],
  afterMax: [
    { title: 'your recipe', place: 'Iwatodai Dorm · Kitchen', time: 'Evening', scene: [
      { n: "It was Solar's turn, My Melody had decided. She'd put the plain notebook on the counter open to a clean page, and a pencil on top of it, and folded her hands, and was waiting with the bright expectant patience of a teacher who already knows you haven't done the homework." },
      { s: 'mymelody', f: 'happy', t: "What do you like, Senpai? Not what's good. What do *you* like?" },
      { n: "Solar opened her mouth and nothing came. She stood in the warm kitchen with the pencil in her hand and realized she didn't know, that she'd been eating whatever was put in front of her for most of a year and liking it well enough, the way you like weather, and had never once stopped to ask. It was an odd thing to find a hole in yourself in a kitchen. It was odder that it didn't hurt." },
      { choose: [
        { t: "(Write down the first thing that comes to mind.)", notes: 0, then: [
          { n: "She wrote *plum*. She had no idea why. My Melody read it upside down and nodded seriously, as if this were exactly what she'd expected, and went to get the flour." }
        ] },
        { t: "I don't know.", notes: 0, then: [
          { s: 'mymelody', f: 'happy', t: "That's all right! Neither did I. We'll make something terrible and find out." }
        ] }
      ] },
      { n: "They made something terrible. Then they made it again, and it was a little less terrible, and Solar wrote *less* and *longer* in the margin in her own handwriting, and My Melody looked at the page for a long time afterward with her chin on her hands, smiling, as if it were a photograph of somebody she loved." }
    ] },
    { title: 'three plates', place: 'Iwatodai Dorm · Dining Room', time: 'Evening', scene: [
      { n: "There were three plates on the dining table now on Wednesdays. Nobody had decided it. My Melody just set three, and Kuromi just sat at the third one, with her hat on and her boots on the rung of the chair and her phone out to show that she was only there by coincidence, and ate whatever was on it in total silence, and then had seconds." },
      { s: 'kuromi', f: 'neutral', t: "It's fine. It's FINE. Stop looking at me like that. Both of you." },
      { s: 'mymelody', f: 'happy', t: "We're not looking, Kuromi. We're eating." },
      { choose: [
        { t: "(Keep looking.)", notes: 0, then: [
          { s: 'kuromi', f: 'serious', t: "I'm writing you down. Both of you. In the book. Page one." },
          { s: 'mymelody', f: 'happy', t: "Page one is the good page." },
          { s: 'kuromi', f: 'flustered', t: "IT IS NOT." }
        ] },
        { t: "(Pass her the last slice.)", notes: 0, then: [
          { n: "Kuromi looked at the slice, and at Solar, and at My Melody, and narrowed her eyes, and took it, and said nothing, which from her was a full paragraph." }
        ] }
      ] },
      { n: "Outside the window it was dark and cold and the glass had fogged at the corners. In here it was warm, and smelled of sugar, and the three of them sat at the end of the long table with the rest of the dorm's noise going on around them, and nobody was carrying any chairs." }
    ] }
  ]
});
