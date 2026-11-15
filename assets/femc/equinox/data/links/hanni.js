/* Persona 3: Equinox · Hanni Pham (Councillor). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written so far: rank 1 (opens 4/13; her home days put it on 4/14 at the earliest). Ranks 2-10 to come.
   Solstice's Hanni (assets/femc/game/links/hanni.js) is shared memory here: everyone remembers that year.
   Flags this file sets: eqx-hanni-slot (rank 1: Solar takes Hanni's midnight shift on the rota). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hanni', name: 'Hanni Pham', short: 'Hanni', arcana: 'Councillor', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'mall', spot: 'Chagall Café', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons at Chagall Café in Paulownia Mall, at the window table, with two drinks already ordered.' },
  approach: "Hanni is at the window table in Chagall Café with two iced coffees in front of her, one straw in its paper, and a pencil behind her ear, and she waves at you through the glass with her whole arm, from the shoulder.",
  cast: {},
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
    ] }
  ]
});
