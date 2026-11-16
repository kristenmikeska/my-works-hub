/* Persona 3: Equinox · Hanni Pham (Councillor). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: ranks 1-2 (rank 1 opens 4/13, her home days put it on 4/14 at the earliest; rank 2 opens 4/30, after
   The Knock, and moves to the shrine's amulet stall and the dorm's second floor). Rank 3 (from 6/6, Chagall
   Café then the dorm roof; branches on eqx-first-hill, eqx-snow-again, eqx-hunted and her rank-2 flags) records her ask:
   tally asks.hanni (+ cakes / choose / asked), flags eqx-asked-hanni (hidden "Stay. Please."), eqx-hanni-slept (cosmetic).
   Ranks 4-10 to come.
   Rank 2 flags: eqx-hanni-two-bells, eqx-hanni-floor | eqx-hanni-split. Nothing reads them yet. Speaker without a
   portrait: stallkeeper.
   Solstice's Hanni (assets/femc/game/links/hanni.js) is shared memory here: everyone remembers that year.
   Flags this file sets: eqx-hanni-slot (rank 1: Solar takes Hanni's midnight shift on the rota). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hanni', name: 'Hanni Pham', short: 'Hanni', arcana: 'Councillor', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'mall', spot: 'Chagall Café', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons at Chagall Café in Paulownia Mall, at the window table, with two drinks already ordered.' },
  approach: "Hanni is at the window table in Chagall Café with two iced coffees in front of her, one straw in its paper, and a pencil behind her ear, and she waves at you through the glass with her whole arm, from the shoulder.",
  cast: { stallkeeper: 'Stall Keeper' },
  ranks: [
    { after: '4/13', title: '1: same table', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { n: "The window table was free. Of course it was. Hanni had been sitting at it since a quarter past three, which Solar knew because Hanni had texted *im at the table!!!* at a quarter past three, and then *its the same table!!!!*, and then a photo of two iced coffees sweating rings onto the wood, one straw in, one straw still in its paper, laid beside the cup at a careful angle like a knife at a place setting." },
      { n: "It was the same table as the first time. Solar had walked up to this window last September not knowing whose face that was behind the glass, and been waved at anyway, from the shoulder, like a ship. She remembered all of it now. The tissue paper round Hanni's feet in the mall. The list. *She puts her own straw in.* The way Hanni's face had done everything at once and then smiled on top of it, for Solar's sake." },
      { n: "She came through the door and Hanni's face did everything at once again, and there was nothing on top of it this time. Just all of it, out loud." },
      { s: 'hanni', f: 'happy', t: "Sol! Sit, sit. I ordered. I didn't ask. I'm not sorry this time, I know what you want, I've known forever, I'm allowed." },
      { choose: [
        { t: "(Unwrap the straw and blow the paper at her.)", notes: 3, then: [
          { n: "She tore the end off and aimed and blew, and Hanni, who had been waiting for it since a quarter past three, ducked, and the paper sailed over her head and hit the window and slid down the glass, and Hanni came back up with both fists in the air like she'd won something." },
          { s: 'hanni', f: 'happy', t: "I KNEW it! I knew you'd do it! All this time and I still knew! Okay. Okay, that's still the same. Good. That's one thing." }
        ] },
        { t: "You put the straw in the paper.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "You put your own straw in. It's number one. It's always been number one." },
          { s: 'hanni', f: 'flustered', t: "I didn't need the list this time. I didn't even bring it. I mean. I brought a different list. Don't look at it." }
        ] },
        { t: "You were here at three-fifteen.", notes: 2, then: [
          { s: 'hanni', f: 'flustered', t: "Three-twelve. I texted at three-fifteen because I didn't want to look like I'd run." },
          { s: 'hanni', f: 'neutral', t: "I ran." }
        ] }
      ] },
      { n: "The different list was on the table by her elbow, under her hand. Not the yellow notebook with the bear. A sheet of squared paper torn out of somebody's maths book and folded in four, and when Hanni moved her hand to pick up her coffee Solar saw it was the grid. The one from the whiteboard. Seven nights across the top, every name in the dorm down the side, every midnight split into pairs and threes in Hanni's small fast pencil, and rubbed out, and redone, and rubbed out, until the squares had gone gray and soft with it." },
      { n: "And under the grid, down the margin, the same thing over and over, in smaller writing. *H: 12–1.* *H: 12–1.* *H: 12–1.* Every night. Every single one." },
      { n: "Solar looked up from it at Hanni's face, properly, for the first time since she'd sat down, and saw what she'd walked past every morning at breakfast for a week. The skin under her eyes gone thin and bluish, like milk. Her bangs pushed back with a clip, which she only did when she couldn't be bothered with them. Her dimples arriving a beat late, as if they'd had to come a long way." },
      { choose: [
        { t: "Hanni. When did you last sleep through?", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "I sleep! I sleep in the day. In bits. Fuuka showed me this thing where you sleep twenty minutes and then you're fine, it's for astronauts." },
          { s: 'solar', f: 'neutral', t: "You're not an astronaut." },
          { s: 'hanni', f: 'sad', t: "...No. I'm not an astronaut." }
        ] },
        { t: "(Turn the grid round and read it.)", notes: 2, then: [
          { n: "She turned the paper round and read it all, the way she'd read Junpei's arrows at breakfast, and Hanni let her, and didn't put her hand over it, and went a slow even pink from the collar up." },
          { s: 'hanni', f: 'flustered', t: "It's not a big deal. Somebody has to float. Somebody always has to be the extra one, in case someone's sick, or late, or— in case. That's me. I'm the in case." }
        ] },
        { t: "You're on every night.", notes: 2, then: [
          { s: 'hanni', f: 'serious', t: "I'm on every night because I *wrote* it. That's how rules work. You don't make a rule and then go to bed." }
        ] }
      ] },
      { n: "The owner came by with a cloth to wipe the next table. The same man. The same apron, the same receipts curling out of its pocket, the same way of drying a cup that made it look like he had something personal against it. Hanni watched him come the whole way across the café, and her face went bright and hopeful, and she sat up straight." },
      { n: "In March, on her last day here, before the year ended and everyone went home, she'd stood at the counter and thanked him in Japanese, a whole sentence, the one Fuuka had written out for her that she'd practiced for two weeks until she stopped sounding like a robot ordering soup. Solar had been there. He'd gone pink to the ears and said something gruff and put two of the crooked biscuits on the saucer for free." },
      { n: "He wiped the next table. He looked at the two of them, pleasantly, the way you look at customers, and said *please take your time*, and went back behind his counter." },
      { n: "Hanni went on sitting up straight for a second after he'd gone. Then she didn't." },
      { s: 'hanni', f: 'neutral', t: "He doesn't know me." },
      { s: 'hanni', f: 'neutral', t: "I came in on Thursday and I said it again, the whole thing, and he said you're welcome, and asked if I wanted a stamp card. A *stamp card*, Sol. I had a stamp card. I filled it. He gave me a free drink and drew a cat on the cup." },
      { s: 'hanni', f: 'sad', t: "...It's fine. It's so fine. Nobody here remembers anybody. It's not about me. The konbini lady doesn't know you either. I know that. I just thought. Him." },
      { choose: [
        { t: "(Go to the counter and order the crooked biscuits.)", notes: 3, then: [
          { n: "She went to the counter and asked for two of the biscuits that had come out wrong, the ones he kept in a jar by the till for himself. He looked at her in surprise, and then over her shoulder at Hanni at the window, and then back, and something went across his face that wasn't remembering, exactly. Just a man noticing a thing he couldn't account for." },
          { n: "He put three in a paper bag. He didn't charge her. When she brought them back to the table Hanni looked at the bag and then at the counter, where he was drying a cup with great concentration and not looking at them at all, and put her hand flat on her chest." }
        ] },
        { t: "He still turned the TV up for you. Last year. Before he knew you.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...He did. Oh. He did, didn't he. The first week. Before the thank you, before anything. He just did it." },
          { s: 'hanni', f: 'happy', t: "So he's just like that. He's just a person who turns it up. That's better, actually. That's so much better than remembering." }
        ] },
        { t: "I remember. That has to count for something.", notes: 2, then: [
          { s: 'hanni', f: 'flustered', t: "It counts for everything. Don't say things like that in public, I'll cry into the coffee and he'll think it's the coffee." }
        ] }
      ] },
      { n: "Outside the glass Paulownia Mall went by the way it went by, a mother with a stroller, two girls in a different school's uniform sharing a crepe, a man asleep on the bench by the fountain with his hat over his face. Nobody looked in. Hanni watched them all with her chin in her hand." },
      { s: 'hanni', f: 'neutral', t: "Can I tell you something bad? It's a little bad." },
      { s: 'hanni', f: 'neutral', t: "Nobody here has an opinion about us. At all. Nobody's posting. Nobody's saying, oh, that's the girl who, or that's her friend, the short one, the one who's always with her. Nobody's watching who you sit with at lunch so they can tell somebody else." },
      { s: 'hanni', f: 'sad', t: "I didn't know how loud it was until it stopped. At home. I used to check my phone in the shower, Sol. In case. In case something was up about you and I needed to get there first." },
      { s: 'hanni', f: 'neutral', t: "And here I just. Sit. And nobody's looking. It's so quiet I feel guilty. Is that bad?" },
      { choose: [
        { t: "It's not bad. You're allowed to like it.", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "Okay. Okay. I'm allowed. I'm writing that down." },
          { n: "She didn't write it down. She leaned back in her chair instead, and looked at the ceiling for a while, the way people look at a clear sky." }
        ] },
        { t: "You got there first every time. I noticed.", notes: 3, then: [
          { s: 'hanni', f: 'flustered', t: "You *weren't* supposed to notice. That was the whole point of getting there first." },
          { n: "But she was smiling, both dimples, all the way, and she pushed the iced coffee an inch closer to Solar's hand, which was its own sentence." }
        ] },
        { t: "(Don't answer. Watch the mall with her.)", notes: 2, then: [
          { n: "She didn't answer. She put her chin in her hand too and watched the mall, the stroller, the crepe, the sleeping man, and after a while Hanni stopped waiting for an answer and they just watched it together, two girls nobody was looking at, which neither of them had been in a very long time." }
        ] }
      ] },
      { n: "Then Hanni turned her cup round on the table, by the base, a quarter turn and back, which was what she did when she was coming to the thing she'd actually come here to say." },
      { s: 'hanni', f: 'serious', t: "Hyein's been sleeping with her door open." },
      { s: 'hanni', f: 'neutral', t: "Since the roof. Since the knock. I shut it when I go past at night, and in the morning it's open again. Not wide. Just a bit. Like she's listening for something." },
      { s: 'hanni', f: 'sad', t: "She said it sounded nice. On the roof. *It sounded like it was being nice.* I can't stop thinking about her saying that." },
      { s: 'hanni', f: 'flustered', t: "So I moved my futon. Across her door. On the inside of the hall, on the floor, like Koromaru does downstairs. Don't tell her that's why. I told her it's because my room's cold." },
      { choose: [
        { t: "Is your room cold?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "No. It's lovely. It's the warmest room in the dorm. It's by the boiler." },
          { s: 'hanni', f: 'sad', t: "I miss it a lot." }
        ] },
        { t: "I'll keep an eye on her too.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "Thank you. Don't make it obvious. She hates being looked after. She thinks it's my whole personality and she's trying to stop me." },
          { s: 'hanni', f: 'happy', t: "It is my whole personality. She's not going to win." }
        ] },
        { t: "Have you told her you're worried?", notes: 1, then: [
          { s: 'hanni', f: 'serious', t: "Have you ever told Hyein you're worried about her? She makes it a bit. She does a whole bit about it, for an hour, and you end up worried about the bit." },
          { s: 'hanni', f: 'neutral', t: "No. I'll just be on the floor. It's easier." }
        ] }
      ] },
      { n: "On the little shelf behind the counter the owner had the television on low for the afternoon lull, and somewhere in the middle of the horse racing it went to an old American rerun, colors gone soft, four women round a kitchen table, all dubbed into very serious Japanese. Solar watched Hanni see it. She didn't say *it's the ladies* this time. She just turned her chair a little toward it, and her shoulders came down, and her eyes went heavy, the way a little kid's go in the back seat of a car once the road gets smooth." },
      { n: "She was asleep inside four minutes. Upright, at the window table, with her chin in her hand and the grid under her elbow, breathing slow and even through her nose, a week of midnights going out of her all at once like water from a tipped glass." },
      { n: "Behind the counter, the owner looked over. He looked at Hanni for a moment, at the clip in her bangs and the shadows under her eyes. Then he reached up without a word and turned the television down two notches, and went back to drying his cup." },
      { choose: [
        { t: "(Let her sleep. Take her pencil, and put your own name in her midnight tonight.)", notes: 3, flag: 'eqx-hanni-slot', then: [
          { n: "She slid the grid out from under Hanni's elbow, a millimeter at a time, the way you'd take a book from somebody asleep on a train. She found tonight. She rubbed out *H: 12–1* with the end of the pencil, gently, so it wouldn't wake her, and wrote her own initial in instead, and under it, very small, *(she's sleeping. — S)*, so Mitsuru would see it before Hanni did and back her up." },
          { n: "She put the grid back under the elbow. Hanni didn't move. Solar drank her coffee and watched the four women on the television argue in a language none of them spoke, and laughed at one of the jokes, a beat late, and didn't care that she didn't know why." }
        ] },
        { t: "(Let her sleep. Text Hyein to come and sit with you.)", notes: 2, then: [
          { n: "*hanni's asleep at chagall. come sit. be quiet,* she typed, and fourteen minutes later Hyein came through the door like a gust of wind with her finger already on her lips, and sat down on Hanni's other side, and was quiet, almost the whole time, which for Hyein was a kind of love so loud it practically had a sound." }
        ] },
        { t: "(Wake her gently. Walk her home before it gets dark.)", notes: 1, then: [
          { n: "She touched Hanni's wrist. Hanni came up out of it all at once, blinking, embarrassed, already saying *I wasn't asleep*, and Solar said *you were* and Hanni said *I was resting my eyes in a very committed way*, and they walked back to the dorm with their arms linked, and Hanni leaned on her more than she would have admitted, all the way." }
        ] }
      ] },
      { n: "When she did wake, it was gone six and the mall's lights had come on behind the glass, and she sat up with a jolt and grabbed for the grid and stopped, looking at it, at tonight, at the small pencil letter where her own had been." },
      { ifFlag: 'eqx-hanni-slot', then: [
        { s: 'hanni', f: 'serious', t: "...Sol. That's my shift." },
        { s: 'solar', f: 'neutral', t: "Not tonight." },
        { n: "Hanni looked at her for a long time across the table. Then she folded the grid in four, and put it in her pocket, and didn't rub the letter out." },
        { s: 'hanni', f: 'flustered', t: "Course, girlie." }
      ], else: [
        { s: 'hanni', f: 'flustered', t: "Oh no. Oh, I fell asleep in *public*. In front of *him*. He's going to think I'm a girl who falls asleep in cafés." },
        { s: 'solar', f: 'neutral', t: "You are a girl who falls asleep in cafés." },
        { s: 'hanni', f: 'happy', t: "Not *here*, though. Here I'm new. I was going to be so mysterious." }
      ] },
      { n: "On the way out she stacked both cups and carried them to the counter, the way she always did, and thanked him, in Japanese, the whole sentence, with all the words in the right places. He blinked at her, and said she was welcome, and then, after a second, as if he'd surprised himself, asked if she'd like a stamp card." },
      { n: "She said yes. She said it like it was the best thing anyone had offered her all week. Solar stood by the door and watched her take it in both hands, and thought, *she'll fill it again*, and knew it the way you know the end of a song you've heard a hundred times." }
    ] },
    { after: '4/30', title: '2: the in case', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { n: "Two stamps. Hanni had the card out on the table before Solar had sat down, flat under her palm, and lifted her palm off it like a magician, and there they were, two little red coffee cups in the first two of ten circles, slightly crooked, pressed by a man who didn't remember her." },
      { s: 'hanni', f: 'happy', t: "Two. He did the second one himself. I didn't even have to hold it out. He just took it out of my hand and stamped it. Like a regular." },
      { s: 'hanni', f: 'neutral', t: "Don't say anything nice about it. I'll cry. I've cried a normal amount this week, I'm trying to stay in budget." },
      { n: "She was wearing a cardigan. It was warm in the café, warm outside, the first properly warm week of the year, the kind of afternoon where everybody in the mall had their sleeves pushed up, and Hanni was wearing a long-sleeved cardigan buttoned to the throat with the cuffs pulled down over her hands, and holding her iced coffee through the cuff, like a kid in winter." },
      { choose: [
        { t: "Aren't you hot?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "I'm cold. I'm always cold. You know I'm cold. It's a well-known Hanni fact." },
          { n: "It was not a well-known Hanni fact. Hanni ran hot. Hanni slept with one leg out of the covers and complained about the radiator in December." }
        ] },
        { t: "(Reach over and push her sleeve up.)", notes: 3, then: [
          { n: "She reached across and took Hanni's wrist, gently, and pushed the cuff back. Hanni let her. She didn't pull away. She just shut her eyes, briefly, the way you'd shut them when a nurse is about to put the needle in." }
        ] },
        { t: "(Don't ask. Just notice.)", notes: 2, then: [
          { n: "She didn't ask. She noticed, and drank her coffee, and waited, and after a while Hanni pushed her own sleeve up without being asked, as if it had been too hot all along and she'd only just admitted it." }
        ] }
      ] },
      { n: "Her forearm was scratched from the wrist to the elbow. Four long lines and a lot of short ones, healing, scabbed brown, the skin round them still pink and puffy. And on the inside of her wrist, round the bone, a bruise like a bracelet, going yellow at the edges, in the clear shape of somebody's fingers." },
      { s: 'hanni', f: 'neutral', t: "She didn't mean it." },
      { s: 'hanni', f: 'neutral', t: "She doesn't know she did it. Don't tell her. She thinks I got it on the floor. I did get it on the floor. That's true. It's just not the whole thing." },
      { s: 'hanni', f: 'sad', t: "She was so *strong*, Sol. She's never been strong. She can't open jars. I had all my weight on her and she nearly dragged us both to the door. Like something had her by the other arm." },
      { choose: [
        { t: "You held on.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "I held on." },
          { s: 'hanni', f: 'serious', t: "That's my whole thing now, apparently. Holding on. I held on to you and it brought me here. I held on to her and it kept her here. I don't know if it's a good thing to be good at." }
        ] },
        { t: "Does it hurt?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Only when I think about it." },
          { s: 'hanni', f: 'flustered', t: "That's a lie. It hurts when I bend my arm. I've just been not bending it. I've been eating with my left hand. Junpei thinks I've taken up a hobby." }
        ] },
        { t: "(Put your hand over the bruise.)", notes: 3, then: [
          { n: "She put her hand round Hanni's wrist, over the bruise, where the fingers had been. Not tight. Just covering it, so it was her hand there instead. Hanni looked down at it and her mouth did something complicated and then went still." },
          { s: 'hanni', f: 'sad', t: "...Okay. Yeah. That's better. That's a better hand to have there." }
        ] }
      ] },
      { n: "The owner came by with the cloth. He wiped the next table. He looked at Hanni's arm, at the scratches, and away, politely, the way a man looks away from something that isn't his business, and then, at the counter, without saying a word, he put two of the crooked biscuits on a saucer and came back and set the saucer down in front of her, and went away again." },
      { n: "Hanni looked at the biscuits. She didn't eat them. She put one in her cardigan pocket, very carefully, for later, for someone else." },
      { s: 'hanni', f: 'neutral', t: "That's for Hyein. She hasn't been eating. She eats if I put it in her hand. Not if I put it in front of her. If it's in front of her she just looks at it." },
      { s: 'hanni', f: 'neutral', t: "...Come with me somewhere. I need to buy a thing and I don't want to buy it on my own. It's a dumb thing. You'll see." },

      { place: 'Naganaki Shrine · Amulet Stall', time: 'After School', bg: 'naganaki-amulet-stall', soft: true },
      { n: "The dumb thing was a bell." },
      { n: "The amulet stall at the shrine had a whole row of them on a red string, little brass bells the size of a fingertip, each on its own braided cord, the kind people tied to bags and keys and the zips of school pencil cases, and Hanni stood in front of the row with her hands behind her back like someone choosing a puppy." },
      { s: 'hanni', f: 'serious', t: "For her door handle. Her actual door. The one I'm sleeping across. If it opens, it rings. If it rings, I'm up." },
      { s: 'hanni', f: 'neutral', t: "I'm a light sleeper. I'm such a light sleeper now. I wake up if the boiler thinks about anything. But I can't be on the floor every second. I have to pee. I have to go to *school*." },
      { choose: [
        { t: "This one. It's got the loudest little voice.", notes: 3, then: [
          { n: "She picked one and shook it by its cord, and it rang, high and clear and surprisingly loud for something so small, like a kitten that had found out it could yell. Hanni laughed. It was the first time Solar had heard her laugh properly since before the moon." },
          { s: 'hanni', f: 'happy', t: "That one. That's the one. That's so her. That's a bell that won't shut up." }
        ] },
        { t: "Get two. One for her door, one for yours.", notes: 3, flag: 'eqx-hanni-two-bells', then: [
          { s: 'hanni', f: 'surprised', t: "...Mine? Nobody's knocking on mine." },
          { s: 'solar', f: 'neutral', t: "Everybody's door knocked, Hanni." },
          { n: "Hanni looked at her for a long moment. Then she looked at the row of bells, and took two down, and held them in her fist so they couldn't ring." }
        ] },
        { t: "You know a bell won't stop it.", notes: 1, then: [
          { s: 'hanni', f: 'serious', t: "I know. I know. It's not supposed to stop it. It's supposed to stop *her*. It's supposed to make one second of noise so I can get there first." },
          { s: 'hanni', f: 'neutral', t: "That's all I need. One second. I've always just needed one second more than everyone else." }
        ] }
      ] },
      { n: "The woman at the stall was old, with a white headscarf and quick brown hands, and she wrapped the bell in a twist of paper as if it were something precious, and asked, the way you'd ask about the weather, whether it was for a house." },
      { s: 'stallkeeper', t: "Bells for the doors. Everybody wants them this month. The house charms too. I've sold out twice. All the river side." },
      { s: 'stallkeeper', t: "Nobody says why. They just come up the steps in the afternoon and buy them, and tie them on the doors, and go home before dark. Thirty years I've had this stall. I've never seen April like it." },
      { n: "Hanni had gone still beside her, the paper twist in her hand." },
      { s: 'hanni', f: 'neutral', t: "Does it work? The bell?" },
      { n: "The old woman thought about it. She wasn't the kind of person who sold you something by lying to you about it; you could see that in how long she took." },
      { s: 'stallkeeper', t: "A bell tells you somebody's come in, dear. It doesn't tell you who." },

      { place: 'Iwatodai Dorm · Second Floor', time: 'Night', bg: 'iwatodaidorm-hallway', soft: true },
      { n: "They tied it on that night, at half past ten, with the hall light on and Hyein downstairs in the lounge pretending to watch television with Yunjin. Hanni did the knot. She did it four times before she was happy with it, on the inside handle of Hyein's door, so that the bell hung down against the wood on its red cord, and every time she pulled the knot tight it rang, a tiny furious sound in the quiet corridor." },
      { n: "Her futon was already laid across the doorway. A pillow, a blanket, the rota grid folded under the pillow with a pencil through it, a bottle of water, a torch. The whole of Hanni's life arranged on a strip of floor a meter wide." },
      { s: 'hanni', f: 'neutral', t: "There. Now if she goes, the door tells me. Now I don't have to be awake for every second. Only for the second that rings." },
      { s: 'hanni', f: 'sad', t: "...God, I want to sleep. I want to sleep so much, Sol. I want to sleep in my own bed by the boiler with both legs out and not wake up till Junpei burns the toast." },
      { choose: [
        { t: "Then sleep in your bed tonight. I'll take the floor.", notes: 3, flag: 'eqx-hanni-floor', then: [
          { s: 'hanni', f: 'serious', t: "No. No. It's my job." },
          { s: 'solar', f: 'neutral', t: "It's a rota, Hanni. You wrote it. Rotas rotate." },
          { n: "Hanni opened her mouth, and closed it, and looked at the futon, and at her own door down the hall, the one by the boiler, and her whole body leaned toward it like a plant toward a window." },
          { s: 'hanni', f: 'sad', t: "...Just tonight. Just one. Wake me if the bell even *thinks* about it." },
          { s: 'solar', f: 'neutral', t: "I will." },
          { s: 'hanni', f: 'flustered', t: "Promise. Not a normal promise. A Hanni promise. With the pinky and the thumb." },
          { n: "They did the Hanni promise in the corridor, pinky and thumb, and Hanni went down the hall to her own room and stopped at the door and looked back, twice, and went in, and didn't shut it all the way." }
        ] },
        { t: "Then let's split it. You till two. Me after.", notes: 3, flag: 'eqx-hanni-split', then: [
          { s: 'hanni', f: 'neutral', t: "...Two's after the red." },
          { s: 'solar', f: 'neutral', t: "That's the point. You do the red, because you'll do it anyway. Then you sleep." },
          { n: "Hanni thought about arguing. Solar watched her think about it, and decide she was too tired, and nod, and get the grid out from under the pillow and write it in, in pencil, *H 12–2 / S 2–7*, small, in the margin, where Mitsuru wouldn't see it till morning." }
        ] },
        { t: "You can't do this every night forever.", notes: 1, then: [
          { s: 'hanni', f: 'serious', t: "Watch me." },
          { s: 'hanni', f: 'neutral', t: "...I know. I *know*. I'll stop when she's okay. She's not okay. When she's okay I'll sleep for a week and you can all step over me." }
        ] }
      ] },
      { n: "Before she went, Hanni stood by the door with the little bell hanging on its cord and said, not quite to Solar, the thing she'd been carrying since the café." },
      { s: 'hanni', f: 'neutral', t: "At home, do you think they're talking about it? Us. The night we went. Girls just gone, in the middle of a New Year's party." },
      { s: 'hanni', f: 'sad', t: "Can you imagine what they're posting. Can you imagine the anon account. The theories. Somebody's mom on the news. Pictures of us from our own profiles, the bad ones, with a red circle." },
      { s: 'hanni', f: 'neutral', t: "...And I don't have to see any of it. Here. I can't. My phone won't load anything. I keep thinking I should feel worse about that." },
      { s: 'hanni', f: 'neutral', t: "I don't, though. I feel like I put something heavy down and nobody's told me to pick it back up yet." },
      { choose: [
        { t: "Someone's going to tell you to pick it up one day.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Yeah. I know. I'll pick it up. I always pick it up." },
          { s: 'hanni', f: 'sad', t: "...I'm just saying it's nice not holding it. For a bit. Don't tell anyone I said nice." }
        ] },
        { t: "It's yours. Put it down as long as you want.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...Mine?" },
          { s: 'hanni', f: 'neutral', t: "Huh. Okay. I didn't know it was mine. I thought it was everybody's and I was just carrying it for them." }
        ] },
        { t: "(Hug her. Mind the arm.)", notes: 3, then: [
          { n: "She hugged her, minding the arm, and Hanni put her face in Solar's shoulder in the middle of the corridor under the hall light and stayed there, breathing, for a long time, and when she pulled back her eyes were wet and she was laughing at herself." },
          { s: 'hanni', f: 'happy', t: "Budget. I'm so over budget." }
        ] }
      ] },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came at twelve the way it always came now, up through the end window like something poured, and lay along the corridor, and the hum came with it, and every bulb in the hall went dark at once." },
      { ifFlag: 'eqx-hanni-floor', then: [
        { n: "Hanni had come back at ten to twelve. Of course she had. Solar heard her door, and her bare feet on the boards, and then she was there in the corridor with her pillow under her arm and her face set, and she sat down on the futon without a word, and Solar moved over without a word, and that was the Hanni promise, apparently: you could take her shift, but you couldn't take her off the floor." }
      ], else: [
        { n: "Neither of them had gone anywhere in the end, whatever the grid said. They were side by side on the futon with the blanket round both their shoulders, their backs against the wood, awake." }
      ] },
      { n: "Behind them, through the door, Hyein, awake on her futon in the red and pretending not to be; they could hear her breathing, too even, the way you breathe when you're listening. Behind that, nothing, a window, the dark." },
      { n: "Nothing knocked. The hour went by. The little bell hung on its cord on the inside of the door against the wood, and didn't move, and didn't move." },
      { n: "At forty minutes past, it rang." },
      { n: "Once. Very small. A single bright note in the red, the sound of a fingertip touching it, and then nothing, and the cord swinging, slowly, and stopping." },
      { n: "The door hadn't opened. Neither of them had moved. Hyein was behind the door, on her futon, where she'd been all hour; they'd heard her breathing through the wood the whole time. Nobody was in the corridor. The windows were shut. There was no draught. There was no air in the red at all; everything was stopped, the way everything stopped; there was nothing in the whole building that could move a bell." },
      { n: "Hanni's hand found Solar's on the blanket and closed on it so hard the bruise on her own wrist must have screamed. Neither of them said anything. They sat with their backs against the door until the lights came on, and then for a long while after, and in the morning, when Hyein came out of her room yawning in Fuuka's cardigan and stepped over them both and said *oh my God, are you two having a sleepover without me*, Hanni laughed so hard she had to lie down." }
    ] },
    { after: '6/6', title: '3: something heavy', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { n: "Hanni was asleep." },
      { n: "Solar saw it through the glass before she'd got to the door: the window table, the two iced coffees sweating their rings onto the wood, one straw in, one in its paper laid at its careful angle, and Hanni with her head down on her folded arms between them, her hair fallen over her face, one hand still curled round her cup as if she'd only meant to rest her eyes for a second between sips and the second had got away from her." },
      // CG: eqx-forty-minutes — a café window table on a rainy afternoon, a girl asleep with her head on her folded arms between two iced coffees, one straw still in its paper, a stamp card under her elbow, rain on the glass.
      { n: "The owner was behind the counter. He saw Solar come in and lifted one finger to his lips, without a word, and reached up and turned the little television on the shelf all the way down, until the baseball was only men running in silence, and went back to drying cups." },
      { n: "He'd done that last September. For a girl he didn't remember now, at a table she didn't remember either. He was doing it again." },
      { choose: [
        { t: "(Sit down quietly. Let her sleep.)", notes: 3, flag: 'eqx-hanni-slept', then: [
          { n: "She sat down without pulling the chair, lifting it instead, and put her bag on the floor, and didn't touch the coffee, and let her sleep. The rain ran down the window beside them. The baseball went on in silence. Hanni breathed slow and deep with her mouth a little open, the way she used to sleep on the couch at home with one leg hanging off the cushions and the television still talking to her, the last way Solar could remember her sleeping like she meant it." }
        ] },
        { t: "(Take off your blazer. Put it round her shoulders.)", notes: 3, flag: 'eqx-hanni-slept', then: [
          { n: "She took off her blazer and put it round Hanni's shoulders, carefully, the way you'd put a coat on a sleeping child on a train. Hanni didn't wake. She made a small sound and pulled the blazer closer with the hand that wasn't on the cup, and turned her face further into her own arm, and went on sleeping." }
        ] },
        { t: "(Touch her shoulder.)", notes: 1, then: [
          { n: "She touched her shoulder, lightly. Hanni came up out of it all at once, the way she came up every time now, eyes open before she was awake, already half out of the chair, her hand going to the place on her wrist where the bruise had been, saying *what, what is it, is it Hyein*, and then seeing where she was, and the café, and Solar, and sitting back down very slowly with her hand on her chest." },
          { s: 'hanni', f: 'flustered', t: "...God. Sorry. Hi. I'm fine. That was a nap. I took a nap. I'm a person who naps now." }
        ] }
      ] },
      { ifFlag: 'eqx-hanni-slept', then: [
        { n: "She slept forty minutes. Solar watched the clock over the counter. When she woke it was slowly, from the bottom up, the way people wake when they've been allowed to, and she lifted her head off her arms with a red crease across her cheek from her sleeve and looked at Solar for a long moment as if trying to place her in a dream, and then smiled, all of it, nothing on top." },
        { s: 'hanni', f: 'happy', t: "...How long?" },
        { s: 'solar', f: 'neutral', t: "Forty minutes." },
        { s: 'hanni', f: 'surprised', t: "*Forty?* That's my record. That's my record since April. Sol. I slept *forty minutes in a row*. In public. In a café. With my mouth open, I bet. Don't tell me." },
        { n: "The owner came over with the cloth and wiped the next table, and on his way back, without looking at her, set down a saucer with two crooked biscuits on it, and went away again." }
      ] },
      { n: "The stamp card was on the table under her elbow. Seven red coffee cups now, crooked, in seven of the ten circles. She pushed it across to show Solar without saying anything, the way you'd show someone a report card." },
      { s: 'hanni', f: 'neutral', t: "Three more and I get a free one. I've been doing the math. If I come every Sunday and Wednesday I'll have it by the end of the month. And then I'll start a new card. And then I'll fill that one." },
      { s: 'hanni', f: 'neutral', t: "...You know what I realized? I've never filled a stamp card in my life. Not one. At home I've got nine in my wallet with like, two stamps on each. Because I never went anywhere twice. There was always somewhere new to be seen at." },
      { ifFlag: 'eqx-hanni-two-bells', then: [
        { n: "She had a red cord round her wrist. Solar saw it when she reached for the card: the second bell, from the shrine, the one Hanni had said nobody would knock on. She'd tied it to herself instead of her own door. It lay against the place where the bruise had been, and when she moved her hand it rang, small and furious, and she put her other hand over it to keep it quiet." },
        { s: 'hanni', f: 'flustered', t: "Don't look at it. It's so if I go anywhere in my sleep, I hear myself go. Same principle. Shut up." }
      ] },
      { ifEvent: 'eqx-first-hill', then: [
        { s: 'hanni', f: 'neutral', t: "Yunjin told me something. I made her tell me. About the night you all went down. The twenty-eighth." },
        { s: 'hanni', f: 'sad', t: "I was at the top of the well. Against orders. I know. I couldn't not be. And while I was there, at twelve-forty, Yunjin heard the bell on Hyein's door. Twice. She was in the hall getting water and she heard it ring twice and she stood there in the red and the door didn't open, and Hyein was asleep, and nobody was there." },
        { s: 'hanni', f: 'sad', t: "Nobody was there. I wasn't there. I was at the well, holding on to the wrong thing." }
      ] },

      { place: 'Paulownia Mall · Chagall Café', time: 'Evening', bg: 'chagall-cafe-inside', soft: true },
      { n: "They stayed till seven because it was raining and because neither of them wanted to be the one to say let's go. At seven the phones came back." },
      { n: "They'd been doing it since May: one bar, seven till half past eleven, every night, the arrivals' phones from home waking up in their pockets like something remembering it was alive. Hanni's buzzed on the table between them. Once. She looked at it." },
      { n: "A notification. The preview of it, on the lock screen, under the frozen clock that still said a minute past midnight on New Year's. An account Solar knew, because everybody at Syracuse knew it, the anonymous one that knew everything first and said it worst. Five words and a cut, the rest of the sentence hidden behind the little gray dots." },
      { n: "*still no word on the two*" },
      { n: "Hanni didn't touch it. She didn't open it. She sat and looked at the five words while the screen stayed lit, and then the screen went dark by itself, and she went on looking at the dark screen as if the words were still on it." },
      { s: 'hanni', f: 'neutral', t: "...The two. That's us. That's Hyein and me. We're *the two* now." },
      { s: 'hanni', f: 'neutral', t: "I knew it. I told you, I knew they'd be talking. I just didn't know it would be so, like. Short. Five words. That's what I am at home. Half a sentence and a dot dot dot." },
      { choose: [
        { t: "You don't know what the rest of it says.", notes: 2, then: [
          { s: 'hanni', f: 'serious', t: "I know exactly what it says. I've read that account every day for two years, Sol. I could write the rest of it. I could write the comments. I could tell you which girl from my floor says she always knew something was off about us." },
          { s: 'hanni', f: 'neutral', t: "...Somebody's going to say it was a cry for help. Somebody's going to post the photo from the formal where I've got my eyes shut." }
        ] },
        { t: "(Turn her phone face down.)", notes: 3, then: [
          { n: "She reached over and turned it face down on the table. Hanni watched her hand do it. She didn't turn it back. She put her own hand flat on top of Solar's, on the back of the phone, and they sat like that, two hands on a phone, while the rain came down the glass." },
          { s: 'hanni', f: 'sad', t: "Thanks. I wasn't going to open it. I just needed somebody else to be the one who didn't." }
        ] },
        { t: "Let them talk. You're here.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "I'm here." },
          { s: 'hanni', f: 'sad', t: "That's the thing, though. That's the thing I can't say to anyone but you. I'm *so* here. I've never been so here. I'm filling a stamp card." }
        ] }
      ] },
      { ifEvent: 'eqx-snow-again', then: [
        { s: 'hanni', f: 'neutral', t: "Akihiko-senpai told me about the door. The one you saw. With our whiteboard on it. KNOCK FIRST." },
        { s: 'hanni', f: 'sad', t: "He said you could hear us laughing behind it. Both of us. Me laughing the real way." },
        { s: 'hanni', f: 'neutral', t: "...I keep thinking, what were we laughing at? In that room. Without you. Because that's the room. That's the room we go back to. And I can't think of anything in it funny enough." }
      ] },

      { place: 'Iwatodai Dorm · Roof', time: 'Late Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { ifEvent: 'eqx-hunted', then: [
        { n: "The roof at a quarter to twelve. The rota said *H + S*, two names in every box now, Mitsuru's rule, and Hanni had written them both herself, and then underlined the S." },
        { s: 'hanni', f: 'sad', t: "She threw up for an hour, that night. The tape night. I held her hair. She couldn't tell me why. She said it was the sound, and she didn't know what about the sound, and then she said sorry, sorry, sorry, like I was mad at her. Like I've ever been mad at her once in my life." }
      ], else: [
        { n: "The roof at a quarter to twelve. The rota said *H* in the box, and Solar had come up anyway, and Hanni had pretended to be annoyed about it for exactly as long as it took to hand her half the blanket." }
      ] },
      { n: "The rain had stopped. The town below them was washed and dripping and every light in it looked new, the bridge strung out across the black water, the station, the shrine on its hill, and down the hill the river, which you couldn't see from here, only the place where the lights stopped." },
      { n: "Hanni had her knees up under the blanket and her chin on them. She'd been quiet for a long time, which on Hanni was a weather event." },
      { s: 'hanni', f: 'neutral', t: "Can I tell you a thing I've never said. Out loud. To anybody. Even Hyein." },
      { s: 'hanni', f: 'neutral', t: "I hate it. Home. Not home home. Not my mom. I mean being looked at. I've hated it since I was fourteen. Every party, every class, every time I walk into the dining hall I'm doing the math of who's looking and what they'll say and what the picture will look like. I'm so good at it. I'm the best at it. I can make a room love me in four minutes flat." },
      { s: 'hanni', f: 'sad', t: "And I've been doing it for you, too. For years. Watching the account so I'd know what they were saying about you before you did. Getting there first." },
      { s: 'hanni', f: 'sad', t: "...Here nobody's looking. Here I fell asleep in a café with my mouth open and a man turned the TV down for me. Nobody took a picture. Nobody's ever going to know." },
      { n: "She turned her head on her knees and looked at Solar. In the light from the stairwell her face was very young and very tired and completely bare, nothing arranged on it at all, and she looked at Solar the way you look at the one person who can sign a form for you." },
      { s: 'hanni', f: 'neutral', t: "Tell me I don't have to go back to it. Just say it. *You don't have to go back.* You're the only one I'd believe. If you say it, I'll believe it, and I'll put it down, and I'll sleep." },
      { choose: [
        { t: "You don't have to go back. Stay. Here, with all of us.", notes: 3, tally: { cakes: 1, 'asks.hanni': 'yes' }, then: [
          { n: "She said it. It was easy. It was what Hanni needed, exactly, and she watched it land: Hanni's shoulders came down under the blanket, all the way down, the way they hadn't come down since the first night of April, and her eyes shut, and she let out a breath that seemed to go on for a whole minute." },
          { s: 'hanni', f: 'happy', t: "...Okay. Okay. I don't have to go back." },
          { n: "She put her head on Solar's shoulder and was asleep before the red. Solar sat very still with her shoulder going numb and watched the town go red at twelve, the lights going out in a single breath from the river up the hill, and she felt something she couldn't name sit down heavy in her chest, warm, like a meal she hadn't been hungry for, and she didn't know why it was there, and Hanni slept through the whole hour against her, smiling a little, as if somebody had told her a secret." }
        ] },
        { t: "Stay. Please. I need you here.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.hanni': 'yes' }, flag: 'eqx-asked-hanni', then: [
          { n: "It came out of her before she'd decided to say it, and it wasn't the thing Hanni had asked for. It was bigger. It was hers. Hanni lifted her head off her knees and looked at her, startled, and then her whole face did everything at once." },
          { s: 'hanni', f: 'sad', t: "...You need me?" },
          { s: 'hanni', f: 'happy', t: "Oh my God. Okay. Okay, then that's that. That's decided. I'm staying. Try and get rid of me." },
          { n: "She said it laughing, and crying a little, and wrapped both arms round Solar's arm under the blanket and held on, and Solar felt the grip close, warm and certain, the way it had closed at New Year's a minute after midnight, and she felt something else too, something small that went out of her as Hanni's arms came round, and didn't come back, and she told herself it was only the cold." }
        ] },
        { t: "We go back, Hanni. We always go back. That's what we do.", notes: 2, tally: { 'asks.hanni': 'no' }, then: [
          { n: "Hanni looked at her. Then she nodded, slowly, and turned her face back to the town, and put her chin back on her knees." },
          { s: 'hanni', f: 'neutral', t: "...Yeah. I know. I know we do. I just wanted to hear what it sounded like if you said the other thing." },
          { s: 'hanni', f: 'sad', t: "It's fine. I'm fine. I'll pick it up. I always pick it up." },
          { n: "She didn't sleep. She sat up all hour, through the red, very straight, with the blanket round her shoulders and her eyes on the stairwell door, and when the lights came back she said *okay* to nobody and went down to check Hyein's bell." }
        ] },
        { t: "That's yours to put down, or pick back up. Not mine to tell you.", notes: 2, tally: { choose: 1, 'asks.hanni': 'choose' }, then: [
          { n: "Hanni didn't say anything for a long time. Solar watched the words go in, and not be what she'd wanted, and watched her turn them over anyway, the way she'd turned over *mine* in the corridor in April." },
          { s: 'hanni', f: 'neutral', t: "...You keep doing that. You keep handing me things and saying they're mine. I don't know where to put them all. I've never had this many things that were mine." },
          { s: 'hanni', f: 'sad', t: "It's so much harder than if you'd just said it. You know that, right? It would've been so easy if you'd just said it." },
          { s: 'solar', f: 'neutral', t: "I know." },
          { n: "Hanni laughed, wet, and wiped her nose on the blanket, and leaned over until her shoulder was against Solar's, not her head, her shoulder, and stayed there, awake, through the red, and at some point in the hour, very quietly, so quietly Solar wasn't sure it was meant to be heard, she said *mine*, once, to the town, the way you'd try a word in a new language." }
        ] }
      ] },
      { n: "At forty minutes past, down through the roof and the floor and the stairwell, from the second floor, small and bright and very far away, a bell rang. Once." },
      { n: "Neither of them moved. Then Hanni was up, blanket and all, and down the stairs, and Solar after her, and in the corridor the little brass bell hung on its red cord on the inside of Hyein's door, still, the cord not swinging, and behind the door Hyein was asleep. They could hear her. Deep and slow and real, the breathing of somebody actually asleep, for the first time in weeks." },
      { n: "Hanni sat down on her futon across the doorway without a word. Solar sat down next to her. They didn't talk about it. In the morning Hyein stepped over them both and said *again?* and Hanni, for once, didn't laugh." }
    ] }
  ]
});
