/* Persona 3: Equinox · Hanni Pham (Councillor). Link data for femc-equinox-game.html; replaces her stub in ../links.js (same id).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Written: ranks 1-8. Rank 1 opens 4/13 (her home days put it on 4/14 at the earliest); rank 2 opens 4/30, after The Knock,
   and moves to the shrine's amulet stall and the dorm's second floor. Rank 3 (from 6/6, Chagall Café then the dorm roof;
   branches on eqx-first-hill, eqx-snow-again, eqx-hunted and her rank-2 flags) records her ask: tally asks.hanni
   (+ cakes / choose / asked), flags eqx-asked-hanni (hidden "Stay. Please."), eqx-hanni-slept (cosmetic).
   Rank 4 (from 6/30, Chagall Café in the rainy season, then the dorm's second floor at night): the tenth stamp, her name
   on a cup; lives with asks.hanni (ifChoice yes / no / else choose; eqx-asked-hanni); the four boarding-house girls
   (ifEvent eqx-rehearsal); the back of the rota grid, bell nights vs nights Solar is in the building (the "time with
   her matters" hint); ifEvent eqx-hunted (twos). Rank 5 (from 8/3, summer break: the mall's photo booth, the canal,
   the dorm gate): "mō ichimai, sono mama de", the strip (eqx-home-R2's green marker), letters to her mom by asks.hanni,
   ifEvent eqx-last-grain (she counted everyone), "I count better when I've seen you". Rank 6 (from 9/6; branches hard on
   eqx-equinox, also eqx-pencil and dead.shinjiro): the handover notebook with no page for her, why (the picture at
   fourteen), Solar writes her page; Chenle texts that a door has opened on the Third Hill: her ask floor, flag
   eqx-floor-hanni. She's on §14's Aigis condition (Hanni or Hyein at rank 6 by 11/22): rank 6 is reachable by ~10/10.
   Rank 7 (from 11/1, Chagall Café, the dorm lounge at eleven, the roof; reads dead.shinjiro (the count comes out one less),
   eqx-fathers-moved (Mr. Kim's stations on her rota), eqx-1122 (if played late she can go down now)): the second stamp card;
   the Hanlim dream growing (7:40 alarm = first bell; *114*, *2F machine*, *KIM SOLAR* in the rota margin in her own pencil);
   Solar tells her about her door (told / half / kept); "Wait for—": she catches herself on the bridge's ask and takes it back;
   in her sleep in the Red Hour she calls Solar *sunbae* and knows where she dropped her council armband (HOAX strand).
   Rank 8 (from 12/1, after 11/22: she has her Persona (named only as "the mountain woman" here; act4 PERSONA holds the name);
   Chagall with the stretcher bruises, then her door on the Third Hill in the Red Hour (their Syracuse room, the phone
   reading her out loud, WHERE IS HANNI on the inside whiteboard; she knocks first, turns the phone face down, "Let them
   talk"), then the 2-4 a.m. rota with Mrs. Kim (who half-remembers her at a HOAX council dinner, then says she's muddled);
   reads dead.aigis (Hyein on the floor with the ribbon; the empty 2-4 box) / else Aigis's 2-4 shifts, eqx-held-too-long,
   eqx-hanni-door-promise): she gives Solar the stuffed rabbit from the room.
   Rank 7 flags: eqx-hanni-margin, eqx-hanni-door-told | -half | -kept, eqx-hanni-door-promise | -hers, eqx-hanni-woke.
   Rank 8 flags: eqx-hanni-board-here | -hers | -wiped, eqx-hanni-floor-cleared (hook: ask floor cleared with her), eqx-hanni-shift,
   eqx-hanni-told-dream. No new tallies. Nothing reads them yet. Left for 9-10: stay.hanni, the third strand's answer.
   Rank 2 flags: eqx-hanni-two-bells, eqx-hanni-floor | eqx-hanni-split. Rank 4 flags: eqx-hanni-said-name, eqx-hanni-cocoa,
   eqx-hanni-girls-rota, eqx-hanni-more-nights. Rank 5 flags: eqx-hanni-looked, eqx-hanni-strip-date | -mine | -more,
   eqx-hanni-count-me. Rank 6 flags: eqx-hanni-page-laugh | -looked | -blank, eqx-floor-hanni (hook: her ask floor in the
   Well, §8). No new tallies. Nothing reads the cosmetic ones yet. Speakers without a portrait: stallkeeper; chenle texts.
   Solstice's Hanni (assets/femc/game/links/hanni.js) is shared memory here: everyone remembers that year.
   Flags this file sets: eqx-hanni-slot (rank 1: Solar takes Hanni's midnight shift on the rota). Nothing reads it yet. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'hanni', name: 'Hanni Pham', short: 'Hanni', arcana: 'Councillor', numeral: '', from: 'Runners', kind: 'searcher',
  world: 'R', romance: null, starts: '4/8', lodging: 'dorm',
  home: { area: 'mall', spot: 'Chagall Café', slot: 'after', days: [0, 1, 3, 5],
          hint: 'Afternoons at Chagall Café in Paulownia Mall, at the window table, with two drinks already ordered.' },
  approach: "Hanni is at the window table in Chagall Café with two iced coffees in front of her, one straw in its paper, and a pencil behind her ear, and she waves at you through the glass with her whole arm, from the shoulder.",
  cast: { stallkeeper: 'Stall Keeper', chenle: 'Chenle', 'kim-dad': 'Mr. Kim', 'kim-mom': 'Mrs. Kim' },
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
    ] },
    { after: '6/30', title: '4: ten stamps', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { n: "The rainy season had sat down on Port Island at the start of the month and showed no sign of getting up. It rained in the mornings, gray and fine, and in the afternoons it rained harder, warm, straight down, so the mall's glass roof sounded like a pan of something left on the stove, and everybody who came in through the doors stood for a second on the mat shaking themselves like dogs." },
      { n: "Hanni had the card out already. Of course she did. Flat on the table between the two iced coffees, squared to the edge of the wood, nine little red cups in nine of the ten circles, and the tenth circle empty and very white, and Hanni sitting in front of it with her hands folded on the table like somebody waiting for exam results." },
      { s: 'hanni', f: 'happy', t: "Nine. Sol. *Nine.* I came in yesterday and he stamped it and I nearly hugged him across the counter. I had to hold onto my own elbows." },
      { s: 'hanni', f: 'neutral', t: "Today's ten. I haven't ordered yet. I was waiting for you. I wasn't going to fill it without a witness." },
      { n: "She'd put the stamp card where she used to put the rota. Solar noticed that before she noticed anything else. For two months the grid had lived under Hanni's elbow at this table, gone gray with rubbing out, and today it was folded in her cardigan pocket with only a corner of it showing, and the card was in the middle of the table where everybody could see." },
      { n: "They ordered. The owner rang it up and took the card out of Hanni's fingers before she could hold it out to him, the way he'd done since the second stamp, and pressed the tenth cup into the tenth circle very carefully, straight for once, and handed it back. Then he looked at the empty paper cup he'd taken down for her free drink, and at the black marker by the till, and back at her." },
      { n: "He asked her name. For the cup. The way they did at the coffee places at home, which this place had never once done, not for anybody, in all the months of Hanni coming here; he'd never needed a name, there were six tables." },
      { n: "Hanni stood at the counter with the card in both hands and didn't say anything at all." },
      { choose: [
        { t: "(Let her say it herself.)", notes: 3, flag: 'eqx-hanni-said-name', then: [
          { n: "Solar didn't say anything. She stood a step behind Hanni and looked at the pastries and let the second go on, and then another one, and felt Hanni find the word somewhere down in herself and bring it up, careful, like something carried in two hands." },
          { s: 'hanni', f: 'neutral', t: "...Hanni. Ha. Ni." },
          { n: "He wrote it on the cup in katakana, square and slow, two characters, and showed it to her before he filled it to check he had it right, and she nodded, and he nodded, and it was the most formal thing Solar had ever seen happen over a coffee." }
        ] },
        { t: "(Say it for her.)", notes: 2, then: [
          { s: 'solar', f: 'neutral', t: "Hanni. Her name's Hanni." },
          { n: "He wrote it on the cup, square and slow. Hanni turned round and looked at Solar with her mouth open, outraged and grateful in about equal parts." },
          { s: 'hanni', f: 'flustered', t: "I was *getting* there. I was building up to it. It was going to be a moment." }
        ] },
        { t: "Tell him she's a regular.", notes: 2, then: [
          { s: 'solar', f: 'neutral', t: "She's a regular. Sunday, Monday, Wednesday, Friday." },
          { n: "He looked at Hanni over the counter as if that were a fact he'd already filed somewhere and only now found the folder for. Then he wrote her name on the cup anyway, when she managed it, square and slow, and underlined it." }
        ] }
      ] },
      { n: "She ordered hot chocolate. In June. In a rainy season so warm the windows were steamed on the inside, she ordered a hot chocolate with the skin on it, and carried it back to the window table in both hands with the name turned toward her, and sat, and didn't drink it, and looked at the two characters for a long time." },
      { s: 'hanni', f: 'sad', t: "...I've never ordered this. Ever. In my life. At home I'm iced coffee in the day and the pink drink at night and sparkling water if it's a morning thing. I've got a whole map. Everybody knows my map." },
      { s: 'hanni', f: 'neutral', t: "I don't even know if I like hot chocolate. Isn't that crazy? I've been alive this long and I never found out." },
      { ifChoice: { 'asks.hanni': 'yes' }, then: [
        { n: "She looked well. That was the first thing and the hardest one. Since the roof she'd been sleeping, properly, all night, on her futon across Hyein's door with both legs out of the blanket the way she slept at home, and the blue had gone out from under her eyes, and her dimples arrived on time." },
        { ifFlag: 'eqx-asked-hanni', then: [
          { s: 'hanni', f: 'happy', t: "You need me. I keep thinking it. In the shower, on the stairs. Nobody's ever said that to me out loud before, Sol. They just let me do the things." }
        ] },
        { s: 'hanni', f: 'happy', t: "I haven't checked anything in two weeks. Not the account, not the bar at seven. I just let it go off in my bag. Isn't that so healthy? Hyein says I'm unrecognizable." },
        { s: 'hanni', f: 'neutral', t: "...Funny thing, though. I went to look at my phone on Sunday. The home one. Just to see the lock screen. And I couldn't get in." },
        { s: 'hanni', f: 'neutral', t: "Six numbers. I've had the same six since I was fifteen. I put them in four times and it locked me out for an hour, and I sat on the bed and I couldn't think what they *were*, and I laughed. I laughed so hard Hyein came in." },
        { n: "She laughed now, telling it, and it was the light one, the easy one, and Solar laughed too because it was expected, and felt something under her breastbone go very still, the way an animal goes still in long grass." }
      ], else: [
        { ifChoice: { 'asks.hanni': 'no' }, then: [
          { n: "She looked like she'd been sleeping in the café again, which meant she hadn't been sleeping anywhere else. Since the roof she'd kept her word: she'd picked it back up. Every night at seven, when the bar came, she sat on the end of her futon with the phone from home and waited for the one notification it would let her see." },
          { s: 'hanni', f: 'neutral', t: "One a night. That's all it gives me. One preview, five or six words, and then the bar goes and it's dark again. Last night was *someone check on her mom*." },
          { s: 'hanni', f: 'sad', t: "I don't know if that's my mom. I don't know whose mom. I read it about forty times." },
          { s: 'hanni', f: 'neutral', t: "...It's fine. You were right. We go back. I'd rather know what I'm going back to than get there and find out it was waiting for me the whole time." }
        ], else: [
          { n: "There was a cactus on the windowsill beside her. A small one, round, in a pot the size of an egg cup, with a white flower on the top of it that looked stuck on and wasn't. She'd bought it at the flower shop on the first floor and brought it here, and asked the owner in her careful Japanese whether it could live on his sill, and he'd said yes as if people asked him that every week." },
          { s: 'hanni', f: 'flustered', t: "It's mine. It's my cactus. It's called Dorothy. Don't laugh. I've never had a thing that was just mine and alive at the same time." },
          { s: 'hanni', f: 'neutral', t: "The notification's still there. I haven't opened it. I haven't deleted it. I sort of visit it. Some nights I sleep and some nights I don't, and I can't tell which nights are going to be which until I'm in them, and I think. I think that's what it's like. When things are yours." }
        ] }
      ] },
      { choose: [
        { t: "Drink it. Find out.", notes: 3, flag: 'eqx-hanni-cocoa', then: [
          { n: "Hanni looked at the cup, and at her, and picked it up in both hands, and drank, carefully, with her eyes shut, through the skin, the way you'd take the first step into the sea." },
          { s: 'hanni', f: 'surprised', t: "...Oh. Oh no. I love it. I *love* it. I've wasted my whole life." }
        ] },
        { t: "You don't have to like it. You just have to have ordered it.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "...Yeah. Yeah, that's the part. The ordering." },
          { n: "She drank some anyway, to be polite to it, and made a face, and drank some more, and by the bottom of the cup she'd stopped making the face, and didn't say anything about having stopped." }
        ] },
        { t: "(Swap cups with her. Take the hot one.)", notes: 2, then: [
          { n: "Solar slid her iced coffee across and took the hot chocolate, and Hanni grabbed it back so fast the skin on top folded over like a little blanket." },
          { s: 'hanni', f: 'serious', t: "No! No, no. It's got my name on it. Get your own name." }
        ] }
      ] },
      { ifEvent: 'eqx-rehearsal', then: [
        { n: "She'd been at the boarding house since nine that morning. She was on it every day now: Mitsuru had given her the rota after the twenty-seventh and Hanni had given herself the house, and she sat in the doorway of the tatami room while the girls rehearsed and watched the stairs and the room and the hall all at once, and came away with her shoulders up round her ears." },
        { s: 'hanni', f: 'serious', t: "She brought them noodles again. Cold ones. She stood in the door and watched them eat every bite. I watched her watching. Somebody has to." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "Can I tell you a thing that's been bugging me? The four new girls. At the boarding house." },
        { s: 'hanni', f: 'serious', t: "Nobody's got them on a rota. Mitsuru says the house isn't ours, the Group leased it, Mrs. Oka's the landlady, it's not our business. Four girls who woke up on a stage in the red with three lives each, Sol, and nobody's business." },
        { s: 'hanni', f: 'sad', t: "I walked past the gate on Monday. Twice. Just to look. Mrs. Oka was in the garden in her gloves and she waved at me, so nicely, and I didn't wave back. I just kept walking. And then I felt so bad I nearly went back and said sorry." },
        { s: 'hanni', f: 'neutral', t: "...I didn't, though. I don't know why. My feet didn't want to." },
        { choose: [
          { t: "Then put them on the rota anyway.", notes: 3, flag: 'eqx-hanni-girls-rota', then: [
            { s: 'hanni', f: 'happy', t: "*Thank* you. That's what I said. Out loud, to the corkboard, at two in the morning. Everybody's ours. That's the whole point of a rota." },
            { n: "She took the grid out of her pocket and unfolded it on the table, gray and soft as cloth, and wrote four letters along the bottom in pencil, very small, *C, S, K, E*, and a little house next to them, and looked at the little house for a while." }
          ] },
          { t: "Your feet might know something.", notes: 2, then: [
            { s: 'hanni', f: 'neutral', t: "My feet don't know anything. My feet walked me into a frat house in heels in a blizzard." },
            { s: 'hanni', f: 'sad', t: "...But yeah. Maybe. Don't tell Mitsuru I said that. She'll make a column for it." }
          ] },
          { t: "(Ask her what Mrs. Oka was doing in the garden.)", notes: 2, then: [
            { s: 'hanni', f: 'neutral', t: "Nothing. That's the thing. She was standing by the well with a watering can. Not watering anything. Just standing there with it." },
            { s: 'hanni', f: 'neutral', t: "And then she saw me and waved, and it was the nicest wave. Like I was the one person she'd been waiting all day to see." }
          ] }
        ] }
      ] },
      { n: "The owner turned the television down without being asked. It was the horse racing again, and then it wasn't; Hanni looked up at it, and her shoulders came down, but she didn't fall asleep this time. She sat with her chin in her hand and her hot chocolate going cold and watched the rain on the glass with Solar, both of them quiet, and at some point the owner came and took the empty cups and left the one with her name on it, because she'd put her hand over it when he reached." },

      { place: 'Iwatodai Dorm · Second Floor', time: 'Night', bg: 'iwatodaidorm-hallway', music: 'night', soft: true },
      { n: "She showed Solar the other thing that night. At eleven, in the corridor, on her futon across Hyein's door, with the hall light off and the torch on and the grid open on her knees." },
      { n: "It wasn't the grid. It was the back of the grid. Solar had never turned it over. Down the back, in two columns, in Hanni's small fast pencil, dates. Every night since the moon in April. And beside each one a tick, or a small bell drawn in a circle, and beside some of the bells, *0:40*." },
      { s: 'hanni', f: 'neutral', t: "The bell. On her door. I've been keeping track. I'm not crazy. I'm a scientist." },
      { s: 'hanni', f: 'serious', t: "Look at the nights it rings. Then look at the nights you were up here. On the floor with me, or on the roof with your door open, or just in the building and not in the Well." },
      { n: "Solar looked. She didn't need long. Down the left-hand column, every night with an *S* pencilled small beside the date had a tick. Every night without one, more of them than she would've liked, had a bell in a circle." },
      { s: 'hanni', f: 'neutral', t: "It's a coincidence. Obviously. I know it's a coincidence. It's a bell on a string. It doesn't know who's in the building." },
      { s: 'hanni', f: 'sad', t: "...She sleeps, when you're here. Properly. I can hear the difference through the door. When you're in the Well she lies there and does the breathing where you're pretending, all night, and at forty past it rings." },
      { ifFlag: 'eqx-hanni-two-bells', then: [
        { n: "The bell on Hanni's own wrist moved when she turned the page, and rang, small, and she put her hand over it without looking, the way you'd hush a dog in the night." }
      ] },
      { choose: [
        { t: "Then put me on more nights.", notes: 3, flag: 'eqx-hanni-more-nights', then: [
          { s: 'hanni', f: 'serious', t: "No. Not every night. I'm not doing to you what I did to me. That was a mistake. I had a whole month of being a mistake." },
          { n: "But she took the pencil out from behind her ear, and turned the grid over, and wrote *S* in two more boxes for next week, a Wednesday and a Saturday, and then, after a second, a third one, the Sunday, very small, as if it might not count if it was small enough." }
        ] },
        { t: "It's a coincidence, Hanni.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "I know. I said that. I said it first." },
          { s: 'hanni', f: 'sad', t: "...I wrote it down anyway. That's what you do with a coincidence. You write it down till it isn't one." }
        ] },
        { t: "(Take the pencil. Write your initial in tonight's box.)", notes: 3, flag: 'eqx-hanni-more-nights', then: [
          { n: "She took the pencil out of Hanni's fingers and turned the grid over and wrote *S* beside tonight's date, small, under Hanni's *H*, the way she'd done in April at the café table, and Hanni watched her do it and didn't take the pencil back." },
          { s: 'hanni', f: 'flustered', t: "That's tonight. You're *already* here. That's just writing down a thing that's true." },
          { s: 'solar', f: 'neutral', t: "You're a scientist. Write down the true things." }
        ] }
      ] },
      { ifEvent: 'eqx-hunted', then: [
        { n: "Every box had two names now. Twos. Mitsuru's rule since the night of the tape. Hanni had written them all herself, and she'd still left her own *H* in the margin beside every single night, small, the way she'd done in April, as if the rule were for everybody else and the margin were for her." }
      ] },
      { dark: true },
      { music: 'mystery' },
      { n: "The red came up through the end window at twelve, the way it always did, like something poured, and the bulbs went out together, and the hum started in the walls, and Hanni's hand found Solar's on the blanket and held it the way you'd hold a rail." },
      { n: "At thirty-nine minutes past, Hanni stopped breathing. Solar felt her do it. Not a gasp. Just stopping, the whole of her, holding still, and waiting." },
      { n: "Forty. The bell hung on its red cord on the inside of the door against the wood." },
      { n: "Nothing. Forty-one. Nothing. Behind the door Hyein turned over in her sleep, and they heard her, the long rough breath of somebody actually under, and the rustle of the blanket, and then nothing again." },
      { n: "Hanni let the breath out. All of it. She leaned sideways until her head was on Solar's shoulder, and said *see* into her sleeve, and nothing else, and was asleep before the hour ended." },
      { n: "Solar didn't sleep. She sat with Hanni's weight on her shoulder and the little bell still on its cord in the red and did the sum Hanni had done, the one down the back of the grid in two columns, and then the other sum, the one Hanni hadn't written anywhere: all the nights to come that she'd be in the Well. All the nights she wouldn't be on this floor." },
      { n: "She didn't finish it. She decided she'd finish it in the morning, and in the morning she didn't." }
    ] },
    { after: '8/3', title: '5: one more', place: 'Paulownia Mall · Photo Booth', time: 'Daytime', music: 'city', scene: [
      { bg: 'paulownia-mall' },
      { n: "August came in hot enough to soften the tar on the road outside the station, and the mall was full of it, of summer: kids out of school in packs with ice creams going down their wrists, a woman handing out paper fans with a phone company's name on them, the fountain in the atrium crowded with small children taking their shoes off and being told not to." },
      { n: "Hanni was sunburnt. A thin pink stripe along the part in her hair, where she'd sat in the boarding house's doorway every morning for a week with the sun coming in over the garden wall and hadn't moved, because moving meant not watching the stairs. She'd put a little of Yunjin's aloe on it and it shone." },
      { s: 'hanni', f: 'neutral', t: "Don't look at my head. I know. I've got a stripe. I look like a road." },
      { s: 'hanni', f: 'serious', t: "Okay. Okay. I want to do something. It's stupid, and you have to say yes before I tell you what it is." },
      { choose: [
        { t: "Yes.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "Yes! Okay. No backsies. You've signed." }
        ] },
        { t: "Is it legal?", notes: 2, then: [
          { s: 'hanni', f: 'flustered', t: "It's *so* legal. It's the most legal thing. Children do it. Say yes." },
          { s: 'solar', f: 'neutral', t: "...Yes." }
        ] },
        { t: "(Hold out your hand. Let her lead.)", notes: 3, then: [
          { n: "She held out her hand, palm up, and Hanni looked at it, and then took it with her whole face lit up and towed her across the second floor like a tugboat with a much bigger ship." }
        ] }
      ] },
      { n: "It was the photo booth. The big one in the corner by the arcade, the white plastic cave with the curtain and the pink lights and the screen of cartoon frames, the one the schoolgirls queued for in fours with their skirts rolled up at the waist." },
      { s: 'hanni', f: 'neutral', t: "I want a picture. Of us. One I picked." },
      { s: 'hanni', f: 'sad', t: "I don't do pictures. You know I don't. Not since I was fourteen. Every picture of me at home is somebody else's, somebody else's angle, somebody else's caption, and I'm in the corner laughing with my eyes shut. I've got none that are mine." },
      { s: 'hanni', f: 'neutral', t: "Nobody's going to see this one. Nobody. There's nobody here to see it. That's the whole point. It can just be a picture." },
      { place: 'Paulownia Mall · Photo Booth', time: 'Daytime', bg: 'paulownia-photo-booth', soft: true },
      { n: "Inside it was hot, and very bright, and smelled of plastic and other people's perfume, and the screen spoke to them in the bright, fast, singsong voice of a girl who'd been recorded in a studio years ago being as happy as she possibly could. Hanni picked the frame. It took her four minutes. She picked a pink one with stars and changed it and changed it back." },
      { n: "The voice counted down. Three, two, one, a flash white enough to see through your own eyelids. Hanni flinched at the first one. Solar felt it through her shoulder, the whole small body jerking like a hand off a stove. At the second one she didn't flinch. At the third she was laughing." },
      { choose: [
        { t: "(Pull a stupid face for the next one.)", notes: 3, then: [
          { n: "She crossed her eyes and pushed her nose up with one finger, and Hanni looked sideways at her at exactly the wrong moment and burst out laughing, the real one, the one that went up at the end, and the flash went." }
        ] },
        { t: "(Put your arm round her. Look at the camera.)", notes: 2, then: [
          { n: "She put her arm round Hanni's shoulders and looked straight into the little black lens, the way she'd learned to look into lenses a long time ago, and then, because it was Hanni, she let the face go, and was just a girl in a hot box with her friend, and the flash went." }
        ] },
        { t: "(Look at Hanni instead of the camera.)", notes: 3, flag: 'eqx-hanni-looked', then: [
          { n: "She didn't look at the camera. She looked at Hanni, at the sunburnt stripe and the dimples and the way her whole face was working at being in a picture, and the flash went while she was still looking." }
        ] }
      ] },
      { n: "Then the voice said the thing it said at the end of every set, the thing it must have said ten thousand times a day to ten thousand schoolgirls, bright and fast and singsong." },
      { n: "*Mō ichimai! Sono mama de!*" },
      { n: "One more. Stay just like that." },
      { n: "Hanni's Japanese was a year of Fuuka's flashcards and a café. She didn't know *sono mama*. She knew the shape of the voice, though, and she turned her head toward the screen at the last word as if somebody had said her name, and the flash went with her looking at it." },
      { s: 'hanni', f: 'neutral', t: "...What did she say? At the end?" },
      { choose: [
        { t: "One more.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Oh. Okay. Just one more." },
          { n: "She said it lightly. She didn't look at the screen again for the whole of the decorating part, and she wrote on the pictures with the little plastic pen pressed so hard the screen squeaked." }
        ] },
        { t: "Stay just like that.", notes: 2, then: [
          { n: "Hanni didn't say anything for a second. The fan in the booth's ceiling went round. Somebody outside the curtain laughed, a long way off." },
          { s: 'hanni', f: 'neutral', t: "...Course she did." },
          { s: 'hanni', f: 'flustered', t: "It's a machine. It's a *machine*, Sol. It says it to everybody. It said it to the schoolgirls. Okay. I'm fine. Pass me the pen." }
        ] },
        { t: "(Don't translate it. Hand her the pen.)", notes: 3, then: [
          { n: "She didn't translate it. She handed Hanni the little plastic pen, and Hanni looked at her for a moment as if she'd noticed the not-translating, and then decided she hadn't, and bent over the screen to draw stars." }
        ] }
      ] },
      { n: "The strip came out of the slot warm, still damp at the edges, four frames in a column. Hanni flinching. Hanni laughing. Hanni laughing harder." },
      { n: "And the fourth. The one more. Hanni turned toward the screen with her eyes shut, all the way shut, the soft lids and the lashes on her cheeks, exactly the way she'd said, exactly the picture she'd been afraid of since she was fourteen; and beside her, Solar, not looking at the camera at all. Looking at Hanni. The way you'd look at somebody you were counting." },
      // CG: eqx-one-more — a narrow photo-booth strip of four frames held between two girls' fingers in a bright mall corridor, the last frame showing one girl with her eyes shut and the other turned to watch her.
      { s: 'hanni', f: 'sad', t: "...Of course. My eyes. Even here." },
      { s: 'hanni', f: 'neutral', t: "No, it's fine. It's actually fine. It's mine. I've got a picture of me with my eyes shut that I picked. That's completely different." },
      { ifFlag: 'eqx-home-R2', then: [
        { n: "She found a pen in her bag to write on the back with, and what came out was the green marker. The one Solar had put on the corkboard in July. Hanni's green one, from Syracuse, from December. She'd been carrying it since. She looked at it in her hand for a second, then uncapped it." }
      ], else: [
        { n: "She dug a pen out of her bag to write on the back with, a fat green one from the dorm's whiteboard that she'd taken and never put back." }
      ] },
      { s: 'hanni', f: 'neutral', t: "What do I write? You write. No, I'll write, you tell me. Quick, before I get sentimental and write a paragraph." },
      { choose: [
        { t: "Write the date. Just the date.", notes: 2, flag: 'eqx-hanni-strip-date', then: [
          { n: "She wrote the date. Then, because she couldn't help it, a tiny sun next to it, and a tiny moon, and a heart, and Solar watched her stop herself from writing anything else by putting the cap back on with a click." }
        ] },
        { t: "Write *mine*.", notes: 3, flag: 'eqx-hanni-strip-mine', then: [
          { n: "She wrote it. One word, small, in the corner of the back of the strip, in the green that had been to Syracuse and back, and then sat looking at it with the pen in her hand as if she'd signed something." }
        ] },
        { t: "Write *one more*.", notes: 2, flag: 'eqx-hanni-strip-more', then: [
          { s: 'hanni', f: 'neutral', t: "Like she said? The machine?" },
          { s: 'solar', f: 'neutral', t: "Like we'll come back and do one more." },
          { n: "Hanni wrote it, slowly. She looked at it, and at Solar, and something in her face that had gone tight in the booth let go a notch." }
        ] }
      ] },
      { n: "She tore the strip down the middle, between the second frame and the third, careful, along the perforation, and gave Solar the bottom half. The laughing-harder. The eyes shut. She kept the flinch and the first laugh for herself." },
      { s: 'hanni', f: 'neutral', t: "You get the good ones. I'm keeping the before. I want to remember I flinched." },

      { place: 'Paulownia Mall · Canal', time: 'Evening', bg: 'paulownia-canal', music: 'tender', soft: true },
      { n: "They walked the long way home, along the canal, in the gold end of the day with the heat finally going out of the stones. The cicadas had started up in the trees along the water like a hundred tiny machines all trying to start at once. Hanni walked on the inside, nearest the water, because she always did; she said it was so that if anyone fell in it'd be her, and Solar had never been able to work out if that was a joke." },
      { s: 'hanni', f: 'neutral', t: "I write to my mom. Did you know that? Every night. In my notebook. Not texts, they don't go anywhere. Letters. *Dear Mom, today Junpei set fire to a tea towel.*" },
      { ifChoice: { 'asks.hanni': 'yes' }, then: [
        { s: 'hanni', f: 'neutral', t: "...I didn't, last week. I forgot. Four nights in a row. I picked the notebook up on Saturday and the last one was Tuesday and I sat there going, what did I do Wednesday? And I couldn't remember. It was like a whole Wednesday fell in the canal." },
        { s: 'hanni', f: 'happy', t: "Which is good, right? That's what you said. I don't have to go back to it. I'm putting things down. I'm just putting down more things than I meant to." },
        { n: "She swung Solar's hand as they walked, the way little kids do, and laughed, and Solar laughed, and the cicadas went on, and Solar thought about a whole Wednesday sinking slowly to the bottom of the canal with the light going out of it, and held on a little harder." }
      ], else: [
        { ifChoice: { 'asks.hanni': 'no' }, then: [
          { s: 'hanni', f: 'neutral', t: "I write her every single night. I've got it down to a system. What I ate, who's okay, who isn't, what the hour was, whether the bell rang. Like a ship's log." },
          { s: 'hanni', f: 'sad', t: "So when we go back I can just hand her the notebook. So she doesn't have to ask. I don't think I could do the asking part. I'd just cry in her kitchen for a week." }
        ], else: [
          { s: 'hanni', f: 'neutral', t: "Some nights I write her and some nights I write me. *Dear Hanni.* Is that crazy? I've never written myself a letter in my life. I didn't even know what I like to be called." },
          { s: 'hanni', f: 'happy', t: "I like Hanni, it turns out. On the cup. In his writing. I like that one." }
        ] }
      ] },
      { s: 'hanni', f: 'serious', t: "Can I say a thing and you just let me say it? It's not about me. It's about the twenty-seventh." },
      { ifEvent: 'eqx-last-grain', then: [
        { s: 'hanni', f: 'sad', t: "That morning. When Ken came back with the dog and couldn't talk. I counted everybody. I went room to room in my socks with the rota and I counted, out loud, every name, like a teacher at a fire drill. I did the guesthouse on the phone. I did Shinjiro." },
        { s: 'hanni', f: 'sad', t: "And you were in the shower, and I stood outside the bathroom door, and I couldn't count you, because I couldn't see you, and I nearly broke it down. Hyein had to pull me off the handle." },
        { s: 'hanni', f: 'neutral', t: "...So just come by. That's all. On the days you're not in the Well. Come to the café. I count better when I've seen you." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "It's just. When you're down there, in the Well, I count. Everybody. The whole house, room to room, like a fire drill. And you're the only one I can't count, because you're not there to see." },
        { s: 'hanni', f: 'neutral', t: "...So come by. On the days you're not down there. I count better when I've seen you." }
      ] },
      { choose: [
        { t: "I'll come by. Count me.", notes: 3, flag: 'eqx-hanni-count-me', then: [
          { s: 'hanni', f: 'happy', t: "One. There. Counted. Done for today." },
          { n: "She tapped Solar once on the shoulder with two fingers, like a tag in a game, and walked on looking extremely pleased with herself, and Solar walked beside her with the place on her shoulder warm." }
        ] },
        { t: "Who counts you?", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...Me? I don't need counting. I'm the one with the list." },
          { s: 'hanni', f: 'neutral', t: "...Hyein does, I think. When she thinks I'm asleep. I've heard her stand in the hall and go *one* under her breath, and then go back to bed." }
        ] },
        { t: "(Stop walking. Hug her by the water.)", notes: 3, then: [
          { n: "She stopped on the path and hugged her, there by the canal with the cicadas going and an old man on a bicycle ringing his bell to get past them, and Hanni hugged back so hard she lifted Solar's heels off the ground an inch, which for somebody that short should have been impossible." }
        ] }
      ] },
      { n: "At the dorm gate Hanni stopped and got her half of the strip out of her bag and held it up to the porch light to look at it again, the flinch and the first laugh, and then put it inside her phone case, the home one, behind the phone, where the screen would cover it." },
      { s: 'hanni', f: 'neutral', t: "There. Now when I go to look at the lock screen, I'll have to look at me first." },
      { n: "Upstairs that night Solar held her own half up to the lamp. The laughing. The eyes shut. Her own face, turned, watching Hanni, and she looked at that face for a long time, because she didn't remember making it. It was a face she'd seen before on somebody else. Hanni's, in the café, in April, looking at a grid with *H: 12–1* down every margin." },
      { n: "She put it in the back of the drawer with the PENDING stamp, and didn't look at it again, and knew exactly where it was." }
    ] },
    { after: '9/6', title: '6: a page for everyone', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { ifEvent: 'eqx-equinox', then: [
        { n: "It had turned cold all at once, the way it does by the sea, one week the windows open and the next everybody in a jacket with their hands in their sleeves. Chagall had its door shut for the first time since spring. The window table was free. It always was. Hanni was at it with a notebook and no drinks, which Solar had never once seen in two lives, and when she looked up her face did everything at once and nothing went on top of it, because she didn't have the strength to put anything on top." },
        { ifEvent: 'eqx-pencil', then: [
          { n: "The owner had a new habit. He looked up every time the door opened. Not long; a glance, past whoever came in, at the street behind them, and then back down at his cup. Since the Monday he'd turned his own sign to CLOSED for two soaked strangers and gone into the back for a long time. He didn't remember Solar. He looked past her at the street when she came in, all the same." }
        ] },
        { n: "Hanni got up without a word and went to the counter and came back with two drinks, an iced coffee for Solar out of habit, and for herself a hot chocolate, and set them down, and sat, and looked at the iced coffee, and said *no, sorry, it's cold out, I'll get you a hot one*, and didn't move." },
        { s: 'hanni', f: 'sad', t: "...Hi. Sorry. I'm doing everything slow this week. I keep standing up and forgetting what for." },
        { n: "She had the bell. Solar saw it when she reached for her cup. The little brass one on its red cord, the one from Hyein's door; she'd taken it off the handle at noon on the twenty-third when it rang by itself with nobody near, and put it in her pocket, and she'd had it in her pocket every day since. Her hand went to it now through the cardigan, the way it used to go to her wrist." }
      ], else: [
        { n: "September had come in still and gold and the summer hadn't noticed yet. School was back. The mall had changed its windows overnight from beach towels to cardigans, though nobody in Iwatodai would need a cardigan for a month, and the window table at Chagall had the late sun on it, slanting in low and warm across the wood." },
        { n: "Hanni was at it with a notebook and no drinks, which Solar had never once seen in two lives. She was writing. Fast, small, bent so close to the page her bangs were on it, and when the door went she covered the page with her forearm before she looked up, and then saw who it was, and didn't uncover it." },
        { s: 'hanni', f: 'flustered', t: "Hi! Sit. I'll order in a sec. I'm in the middle of a thing. I'm almost done with the thing." }
      ] },
      { n: "It was the yellow notebook. The one with the bear. Solar knew it from the other year, from a café across an ocean and a hundred lists; she hadn't seen it once since April. She'd assumed it was gone, *in another year*, like Akihiko's stopwatch. It wasn't. It was here, soft at the corners, the bear's face rubbed half away by a thumb." },
      { choose: [
        { t: "(Wait. Let her finish.)", notes: 3, then: [
          { n: "She waited. She sat back in her chair and looked out at the mall and didn't look at the notebook, and after a minute Hanni's arm came off the page by itself, slowly, and she went on writing with Solar right there, not hiding it, as if she'd decided something." }
        ] },
        { t: "You still have the bear.", notes: 3, then: [
          { s: 'hanni', f: 'surprised', t: "...You remember the bear?" },
          { s: 'solar', f: 'neutral', t: "I remember everything about that bear." },
          { s: 'hanni', f: 'sad', t: "It was in my coat. On the steps. New Year's. I had the bear in my pocket and I held on to you with the other hand. It's the only thing I came with that I wanted." }
        ] },
        { t: "What are you writing?", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "Nothing. Everything. You'll see. I was going to show you anyway. I just wanted it finished first, so you couldn't say it was too much while it was still too little." }
        ] }
      ] },
      { n: "She turned the notebook round and pushed it across the table." },
      { n: "It was a handover. That was the only word for it. A page for every person in the dorm, each one headed with a name in capitals and underlined twice, and under each name, in Hanni's small fast pencil, everything. *JUNPEI. Says he's fine. Isn't. Check the window latch, he won't. Eats when someone's watching.* *KEN. Ask about the dog first, then him. Never the hospital.* *AKIHIKO. Hand closes by itself at night. Don't mention it. Tape is in the drawer under the TV.* *YUNJIN. Light off = good night. Light on = go and sit.* *HAECHAN. Will say he's fine and actually be fine. Check anyway.*" },
      { n: "And so on. The guesthouse too, at the back. Mark. The four girls, a page each, *likes the window side*, *won't eat the rice cakes, good*. Mrs. Arai on the corner, whose saucer was always empty." },
      { ifEvent: 'eqx-equinox', then: [
        { n: "And three new pages near the back, in a different pencil, softer, pressed harder. *MR. LEE (JAESANG). Won't eat breakfast. Will eat if Jaehyun eats first.* *MR. LEE (TAEJOON). Sits on the stairs. Bring a blanket, don't say why.* *MR. KIM. Ask him the stations. He likes being asked.*" }
      ] },
      { n: "*HYEIN* had four pages. Solar turned them. *Latch twice. Aigis does a third. Don't tell her you know. Eats if it's in her hand. Holds the phone when she can't sleep. Phone warm at full moon.* And then, near the end, underlined, *If she goes quiet, go and get her. Don't wait to be asked. She'll never ask.*" },
      { s: 'hanni', f: 'neutral', t: "It's a handover. Like when you leave a job. So the next person knows where everything is." },
      { ifChoice: { 'asks.hanni': 'yes' }, then: [
        { s: 'hanni', f: 'neutral', t: "Not because I'm going anywhere. I'm not. I'm staying, you know I'm staying. It's just. In case. In case I'm on the floor in the hall and can't get up for a night. Somebody should know where the tape is." }
      ], else: [
        { ifChoice: { 'asks.hanni': 'no' }, then: [
          { s: 'hanni', f: 'neutral', t: "For when we go back. So they've got it, so they know how to look after each other when the three of us aren't across the hall. Somebody should know where the tape is." }
        ], else: [
          { s: 'hanni', f: 'neutral', t: "I don't know what it's for. That's the honest answer. Staying, or going, or something else. I just knew I had to write it down before something happened that meant I couldn't." }
        ] }
      ] },
      { n: "Solar turned the last page. There was nothing after it. The inside of the back cover, blank, and the bear on the outside." },
      { n: "She turned back through it, slowly, all of it, the whole house, every name in capitals. She knew before she got to the end that she was looking for one, and that it wasn't there." },
      { s: 'solar', f: 'neutral', t: "...There's no page for you." },
      { n: "Hanni looked at the notebook as if it had said it, not Solar. As if she hadn't noticed. And then Solar watched her decide not to pretend she hadn't." },
      { s: 'hanni', f: 'sad', t: "...No. I know. I started one. Three times. I wrote *HANNI* and underlined it and then I sat there." },
      { s: 'hanni', f: 'neutral', t: "I didn't know what to put. What do you put? *Short. Fine. Does the rota.* That's not a person. That's a job description." },

      { place: 'Iwatodai Dorm · Roof', time: 'Late Night', bg: 'iwatodaidorm-roof-night', music: 'night', soft: true },
      { ifEvent: 'eqx-equinox', then: [
        { n: "The roof at a quarter to twelve, and cold. The town below them had its lights on the same as always, the bridge strung out across the black water, and neither of them looked at the bridge. They'd both stopped looking at it the same night. Hanni sat with her back to it and the bell in her fist in her cardigan pocket." }
      ], else: [
        { n: "The roof at a quarter to twelve, and warm still, the concrete giving back the day's heat through the blanket. The town below them had its lights on, the bridge strung out across the black water, and down by the river the boarding house's one lit upstairs window, where it always was." }
      ] },
      { n: "Hanni had brought the notebook up. It was on her knees, shut, with both hands flat on the bear." },
      { s: 'hanni', f: 'neutral', t: "Can I tell you the actual thing? Not the thing I tell people. The thing under it." },
      { s: 'hanni', f: 'neutral', t: "When I was fourteen a picture of me went round. At school. It wasn't even a bad one. I wasn't doing anything. I was laughing. At lunch, at something my friend said, the real way, the one that goes up at the end, with my head back and my eyes shut and my mouth all the way open." },
      { s: 'hanni', f: 'sad', t: "And everybody had something to say about it. About how I laugh. For like a month. Somebody did an impression of it in the hall every morning. A girl I didn't even know sent it to my mom." },
      { s: 'hanni', f: 'neutral', t: "So I stopped. Laughing like that. In front of people. I got a different one, a nice one, a cute one, that fits in a picture. And I got really, really good at being the one who's useful. Because if you're the one with the list and the tea and the rota, people look at the list. Not at you." },
      { n: "She said it quite steadily. She'd practised it, Solar thought; not out loud, but in the dark on a futon across a doorway, the way you practise a sentence in a language you've only half learned." },
      { s: 'hanni', f: 'sad', t: "Here, nobody's looking. I can laugh how I want. I fell asleep in a café. And I made myself everybody's job so hard I forgot to be anybody. I'm in the corner of every page in that book. I'm just not *on* one." },
      { s: 'hanni', f: 'neutral', t: "That's why I don't want to go back to it, Sol. Not because of the account. Because over there, if I'm not useful, I'm *the short one, always with her*. *The two.* And here I could just be. And I don't know how. I don't know how to be anyone that isn't a list." },
      // CG: eqx-a-page — two girls on a dorm rooftop at night under one blanket, one holding a worn yellow notebook with a cartoon bear on the cover open on her knees to a blank page, the other holding a pencil out to her, the town's lights and a long bridge behind them.
      { n: "She opened the notebook. To the back. To the blank inside of the cover. And held the pencil out." },
      { s: 'hanni', f: 'neutral', t: "You do it. You write mine. You know me better than I do. I'll read it later. Not now. I'll cry on the roof and Mitsuru will hear it through the ceiling." },
      { choose: [
        { t: "(Write: *HANNI. Laughs the real way. Make her.*)", notes: 3, flag: 'eqx-hanni-page-laugh', then: [
          { n: "She wrote it in capitals, the name, and underlined it twice, the way Hanni did every name; and under it, small, *Laughs the real way. Head back, eyes shut. Make her. Don't take a picture.* And then, because there was room, *Gets there first. Let somebody else, sometimes.*" },
          { n: "Hanni didn't read it. She'd said she wouldn't. She took the notebook back and shut it with her hand flat on the bear and held it against her chest, and sat like that, and Solar saw her lips move, once, without a sound, the way they'd move on a word she was trying out." }
        ] },
        { t: "(Write: *HANNI. Let somebody look after her.*)", notes: 3, flag: 'eqx-hanni-page-looked', then: [
          { n: "She wrote the name in capitals and underlined it twice, and under it, *Let somebody look after her. She'll say no. Do it anyway. Tea, the blanket, the floor. She'll pretend she's asleep so she doesn't have to say thank you. Let her.*" },
          { n: "Hanni didn't read it. She took the notebook back and shut it and held it against her chest with both arms like something warm, and leaned her shoulder on Solar's, and after a while, without any warning, her eyes shut, and she was asleep, sitting up, on the roof, before the red." }
        ] },
        { t: "(Write only her name. Give the pencil back.)", notes: 3, flag: 'eqx-hanni-page-blank', then: [
          { n: "She wrote *HANNI* in capitals and underlined it twice, and nothing under it, and put the pencil back in Hanni's hand, and closed Hanni's fingers on it." },
          { s: 'solar', f: 'neutral', t: "You start it. I'll add things. As long as it takes." },
          { n: "Hanni looked down at her own name with nothing under it for a long time. Then, very slowly, she wrote one word. Solar didn't look. She heard the pencil go, five letters, and stop, and the notebook close." }
        ] }
      ] },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "There was a page in the book with nobody in the house to give it to. Solar had seen it in the café and turned past it fast. *SHINJIRO. Says he isn't hungry. Is. Leave it by his door.* Hanni hadn't crossed it out. She wasn't going to." }
      ] },
      { dark: true },
      { music: 'mystery' },
      { n: "At twelve the red came over the town from the river up, the lights going out in a single breath, and the hum came up through the concrete, and Solar's phone buzzed once in her lap with its screen gone the color of something left too long." },
      { n: "Chenle. From the command room, where he sat beside Fuuka every night with his hand-drawn map of the Well and a can of melon soda going warm." },
      { phone: [
        { from: 'chenle', t: "sol r u up" },
        { from: 'chenle', t: "something new on the third hill. off the main stairs. wasnt there yesterday" },
        { from: 'chenle', t: "its a door. like a dorm room door. whiteboard on it" },
        { from: 'chenle', t: "it says HANNI. KNOCK FIRST" },
        { from: 'chenle', t: "behind it its just people talking. like a hundred people. all at once. about her" },
        { from: 'chenle', t: "fuuka says dont tell her yet. im telling u" }
      ], contact: 'chenle' },
      { flag: 'eqx-floor-hanni' },
      { n: "Hanni was asleep against her shoulder, or pretending, with the notebook against her chest and her name inside the back cover. Solar turned the phone face down on the blanket." },
      { n: "She didn't wake her. She sat in the red with Hanni's weight on her and thought about a door with a whiteboard on it at the bottom of a well, and a hundred people behind it talking, and that she'd have to go down and knock on it, and that when she did she wanted Hanni there beside her. Not behind her. For once not the one who got there first." },
      { n: "She'd ask her in the morning. She'd find the right way to say it in the morning." }
    ] },
    { after: '11/1', title: '7: knock first', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { n: "November came into the mall on a Monday with the heating, all at once, so the glass roof sweated and the escalators smelled of warm dust, and somebody had already put up the first of the Christmas lights along the second floor, early, on a timer, so they came on at four in the gray afternoon and nobody was looking." },
      { n: "The window table. Two drinks. A hot one with the skin on it for Hanni and a hot one for Solar, because it was cold out and Hanni had learned that in September and never once forgotten since; and between them, flat, squared to the edge of the wood, a stamp card. Not the first one. The first one was in her phone case behind the photo strip. This was the second, and it had eight cups on it, and Hanni was looking at it with the face of a woman reading the last page of a long book." },
      { s: 'hanni', f: 'happy', t: "Eight. Second card. I'm a *regular*, Sol. He doesn't even ask any more. He sees me through the window and he starts the milk." },
      { s: 'hanni', f: 'neutral', t: "...Sit. Drink it while it's got skin. The skin's the best part. I've decided that. I've decided a lot of things about hot chocolate this autumn." },
      { n: "She looked tired. Not the April tired, thin and blue under the eyes and her hand going to a bruise. This was different. This was somebody who slept and woke up wrong, who came up out of a dream every morning into the wrong room and had to look round to find out where she was." },
      { ifFlag: 'dead.shinjiro', then: [
        { n: "She'd done the count that morning. Solar had heard her through the floor at six, going room to room in her socks, the names under her breath. She did it every morning now. She'd always done it. It was only that since the twenty-third she got to the end of it and stopped, and stood in the hall, and started again from the top, as if she'd made a mistake, as if the number would come out different the second time. It never did. One less. She went on doing it anyway." }
      ] },
      { choose: [
        { t: "(Drink it with the skin. Tell her she's right.)", notes: 3, then: [
          { n: "She drank it with the skin, which folded against her lip like a little blanket, and it was right, it was the best part, and she said so, and Hanni put both fists up on the table very quietly, the way she'd put them up in April after the straw paper." }
        ] },
        { t: "You're not sleeping.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "I'm *sleeping*. I'm sleeping loads. I'm a champion sleeper now. I sleep and then I wake up." },
          { s: 'hanni', f: 'sad', t: "...It's the waking up. That's the bit. I'll tell you. Drink your thing first." }
        ] },
        { t: "Does he write your name on it still?", notes: 2, then: [
          { s: 'hanni', f: 'happy', t: "Every time. In katakana. He's got really good at the *ni*. Look. Look how good that *ni* is." },
          { n: "She turned the cup to show her. Two characters, square and careful. Hanni ran her thumb under them the way you'd run it under a word you were learning." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "So. The dream. The one I told you on the roof. At the festival." },
      { s: 'hanni', f: 'neutral', t: "It's getting more. Not longer. More. Like the picture's getting better. I know the lunch lady's name now. I know the gym smells like the floor polish they use on Thursdays. I know there's a boy in my class who takes his shoes off under the desk and everybody hates it." },
      { s: 'hanni', f: 'sad', t: "And I woke up on Saturday and my alarm went at seven-forty. I didn't set it. I don't set alarms, Sol, I've got Hyein. Seven-forty, and I was out of bed and halfway into my socks before I knew why." },
      { s: 'hanni', f: 'sad', t: "It's the first bell. That's when the first bell goes. At a school I've never been to. I was scared I'd be late." },
      { n: "She took the rota out of her cardigan pocket. The grid. Soft as cloth now, gray, the folds worn white. She turned it over to the back, to the two columns of dates and ticks and little circled bells, and put her finger on the margin." },
      { n: "In the margin, in her small fast pencil, in a corner where there'd been nothing, three things. *114.* *2F machine, use 10s not 100s.* And a name, in capitals, the way she wrote every name she meant to keep track of. *KIM SOLAR.*" },
      { s: 'hanni', f: 'neutral', t: "That's my handwriting. That's my pencil. I keep it behind my ear, it doesn't leave my ear. I didn't write that. I'd remember writing that." },
      { s: 'hanni', f: 'sad', t: "...It's my locker number. Isn't it. I know it is. I can see the door." },
      { choose: [
        { t: "It's reaching. It isn't you. You're right here, at your table.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "At my table." },
          { n: "She put her hand flat on the wood, by the stamp card, the way you'd put your hand on a wall in a dark room to know where it was." },
          { s: 'hanni', f: 'neutral', t: "...Okay. My table. Second card. Eight cups. Okay. Say *Hanni* again, though. Just once. I like hearing which one you mean." }
        ] },
        { t: "What's she like? The vice president.", notes: 2, then: [
          { s: 'hanni', f: 'surprised', t: "...Like you. Obviously. That's the worst part. Everybody's scared of her and everybody wants to sit near her at lunch. She walks down the hall like she's late for something and she's never late." },
          { s: 'hanni', f: 'sad', t: "And I don't know her. In the dream. I'm just some girl in her year who knows her name. I'm in the corner of the picture. I'm in the corner of the picture in *every* life, Sol. Even the ones I haven't got yet." }
        ] },
        { t: "(Take the pencil from behind her ear. Write *HANNI* in the margin. Under the other name.)", notes: 3, flag: 'eqx-hanni-margin', then: [
          { n: "She reached over and took the pencil from behind Hanni's ear, and Hanni let her, and she wrote it in the margin, in capitals, under *KIM SOLAR*, the same size, and underlined it twice, the way Hanni underlined everybody else." },
          { s: 'hanni', f: 'neutral', t: "...What's that for?" },
          { s: 'solar', f: 'neutral', t: "So if you're keeping track of me there, I'm keeping track of you here." },
          { n: "Hanni looked at the two names, one on top of the other, for a long time, and didn't say anything, and put the pencil back behind her own ear herself." }
        ] }
      ] },
      { n: "She folded the grid. She didn't put it away. She kept it in her hand on the table like a ticket she'd have to show somebody, and looked out at the mall, at the early lights on their timer, at a little girl in a red coat being towed past the window by her mother, looking back over her shoulder at the café and its six tables as if it were the most interesting place in the world." },
      { s: 'hanni', f: 'neutral', t: "...There's a door. Isn't there. With my name on it. Down there." },
      { s: 'hanni', f: 'neutral', t: "Chenle can't whisper. He thinks he can. He whispers in the command room like a boy at the back of a church. I was on the stairs." },
      { choose: [
        { t: "There's a door. A dorm door, with your whiteboard. *KNOCK FIRST.* A hundred people behind it, talking about you.", notes: 3, flag: 'eqx-hanni-door-told', then: [
          { n: "Hanni closed her eyes. Not long. The way you'd close them on a train going into a tunnel, to let your ears catch up." },
          { s: 'hanni', f: 'neutral', t: "...Okay. Thank you. That's the whole thing. That's what I wanted. Not nice. Just all of it." },
          { s: 'hanni', f: 'sad', t: "A hundred. That sounds right. That sounds like the dining hall on a Monday." }
        ] },
        { t: "There's a door. I haven't opened it. I haven't listened.", notes: 2, flag: 'eqx-hanni-door-half', then: [
          { s: 'hanni', f: 'neutral', t: "...You've listened. You've got the face. You've got the face you had in April with the bruise." },
          { s: 'hanni', f: 'neutral', t: "That's okay. You don't have to tell me what it said. I know what it said. I could write it." }
        ] },
        { t: "There's a door. I'm not going to tell you what's behind it until you can see it yourself.", notes: 3, flag: 'eqx-hanni-door-kept', then: [
          { s: 'hanni', f: 'flustered', t: "That's so annoying. That's so *you*. That's the thing you do where you hand me something that's mine and I have to carry it." },
          { s: 'hanni', f: 'neutral', t: "...Okay. Fine. Mine. I'll see it. I'll see it with my own eyes, like a person." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "It's got my rule on it. *Knock first.* Do you know where that's from? Freshman year. My door. Hyein never once knocked, not once, she came in like a weather system. So I wrote it on the whiteboard, and she knocked once, on the whiteboard, with the marker, and walked in." },
      { s: 'hanni', f: 'sad', t: "That's my door. It's got my rule on it. And it's down there with a hundred people behind it." },
      { ifEvent: 'eqx-1122', then: [
        { s: 'hanni', f: 'serious', t: "I can go now. That's the thing. I've got her. The mountain lady. I can stand in front of it with my own feet on the floor and knock on my own door." },
        { s: 'hanni', f: 'neutral', t: "...Not yet. I'm not ready. But I can. Nobody's going to stop me at the top of the well with a clipboard any more." }
      ], else: [
        { s: 'hanni', f: 'serious', t: "And I can't go. I asked Mitsuru. On Saturday. I stood in the command room in my socks and asked, very professionally, with the rota, and she said no before I'd finished. She said *you can't fight, Pham, and I won't send down anybody who can't fight*. She said it so kindly I wanted to bite her." },
        { s: 'hanni', f: 'sad', t: "So it's down there. My door. And I'm up here. And you'll go past it. On your nights." }
      ] },
      { n: "She turned her cup round on the table so the name faced her. Two characters. She looked at it, and Solar watched her mouth start to make the shape of something, small, and stop." },
      { s: 'hanni', f: 'neutral', t: "Don't open it without me. Wait for—" },
      { n: "She stopped. Solar saw it go across her face, the thing she'd just said, and where she'd heard it last. The bridge. The equinox. Mrs. Kim with her shoes in a row, and a voice asking her, as kindly as anything, the smallest thing you can ask a person." },
      { s: 'hanni', f: 'serious', t: "No. Sorry. No. I'm not saying that. I take it back. Don't wait for anybody, Sol. Not for me, not for anyone. Nobody waits for anybody. That's a new rule. I'm putting it on the corkboard." },
      { s: 'hanni', f: 'sad', t: "...God. Listen to me. I nearly asked you to *wait*." },
      { choose: [
        { t: "You didn't ask. I'm offering. I won't open it without you.", notes: 3, flag: 'eqx-hanni-door-promise', then: [
          { s: 'hanni', f: 'neutral', t: "...That's different. Isn't it. That's different." },
          { s: 'solar', f: 'neutral', t: "That's different." },
          { n: "Hanni nodded, slowly, like somebody checking a sum, and then again, faster, as if it had come out right. She didn't say thank you. She tapped Solar once on the back of the hand with two fingers, like a tag. Counted." }
        ] },
        { t: "When you can come, come. When you're ready. It's your door.", notes: 3, flag: 'eqx-hanni-door-hers', then: [
          { s: 'hanni', f: 'neutral', t: "My door." },
          { s: 'hanni', f: 'flustered', t: "...I hate how good you are at that. Handing it back. You should do it professionally. You'd put therapists out of work." },
          { n: "But her shoulders came down. Solar watched them come down under the cardigan, a centimeter, and stay there." }
        ] },
        { t: "(Don't answer. Put your hand over hers on the cup.)", notes: 2, then: [
          { n: "She didn't answer it. She put her hand over Hanni's, round the warm cup, over the name, and Hanni looked down at the two hands and let out a breath, and left it, and neither of them said anything about waiting, or doors, for the rest of the hot chocolate." }
        ] }
      ] },
      { n: "When they left the owner was turning the sign. He turned it to CLOSED, and then looked at Hanni through the glass, and turned it back to OPEN, and nodded at her once, and went into the back. Hanni stood on the mall floor and looked at the sign. She didn't say anything about it. She put her hand on the glass, flat, for a second, on the way past." },

      { place: 'Iwatodai Dorm · Lounge', time: 'Night', bg: 'iwatodaidorm-livingroom-night-autumn', music: 'night', soft: true },
      { ifFlag: 'eqx-fathers-moved', then: [
        { n: "Eleven o'clock, and the lounge belonged to the fathers now. They'd had rooms on the third floor since the twenty-sixth, and they didn't sleep in them much; they were down here, near the door, Jaesang on the couch with his shoes on the floor beside it lined up neat, and Taejoon on the stairs, and Mr. Kim in the armchair by the window with the timetable book open on his knee." },
        { n: "Hanni had put them on the rota. Of course she had. Three new rows at the bottom of the grid in the soft pencil. Nobody had asked her to. She went round them at eleven with tea, the way she went round everybody, and Solar went with her, because she'd asked to and Hanni had let her." },
        { n: "Mr. Kim was awake. He was always awake. He looked up from the timetable and smiled at Hanni the way you smile at a nurse you've come to like." },
        { s: 'kim-dad', f: 'neutral', t: "Hanni-ssi. Thank you. Ask me. Go on. You're the only one who asks." },
        { s: 'hanni', f: 'neutral', t: "How many today, Mr. Kim?" },
        { s: 'kim-dad', f: 'neutral', t: "Four more. Shin-Kobe, the south exit. Sannomiya, both clocks. A little one on the Hankyu line whose name I can't say. Twenty-six. Twenty-six of a hundred and twelve." },
        { s: 'kim-dad', f: 'neutral', t: "She'll be under one of them. She'll be cross. She'll say what took you so long. You'll see." },
        { n: "Hanni wrote it down. Twenty-six. On the rota, in his row. She didn't have to. He watched her do it, and something in his face sat down." }
      ], else: [
        { n: "Eleven o'clock, and the lounge was full of people pretending to be about to go to bed. Hanni went round them with tea, the way she went round everybody, and Solar went with her, because she'd asked to and Hanni had let her." }
      ] },

      { place: 'Iwatodai Dorm · Roof', time: 'Late Night', bg: 'iwatodaidorm-roof-night', soft: true },
      { n: "The roof at a quarter to twelve, and properly cold, the kind of cold that got into the blanket from underneath, through the concrete. The town below had its winter lights now, harder and whiter, and the bridge across the black water, and down by the river the one window." },
      { n: "Hanni had her knees up and her chin on them and the rota in her fist in her pocket, and she was asleep before the red. She didn't mean to be. She was halfway through a sentence about Mr. Kim's stations and then she wasn't, her head going down onto Solar's shoulder by itself, heavy all at once, the way it never used to." },
      { dark: true },
      { music: 'mystery' },
      { n: "At twelve the red came, the lights going out from the river up, and the hum. Hanni didn't wake. She slept through it now, sometimes. She said it was because Solar was there. Solar thought it might be because she was somewhere else." },
      { n: "At twenty past, she talked." },
      { n: "Not loud. In the voice people use in their sleep, thick, a little cross, as if somebody had nudged her in a lesson. And not to Solar. Past her. To someone a desk ahead." },
      { s: 'hanni', f: 'neutral', t: "...Sunbae. Sunbae, you dropped your armband. By the machine. The one that eats coins." },
      { n: "Solar went still all over. Under the blanket, in the red, with Hanni's weight on her shoulder and the town gone dark below them and the hum in the concrete, she felt the cold come up through the roof into the bones at the bottom of her spine and sit there." },
      { n: "*Sunbae.* Not *Sol*. Not *Solar*. The word a younger girl at Hanlim would use for a third-year she didn't really know. And the armband. The council armband, with the stitching coming loose on the left side, that she'd dropped by the second-floor machine on a Tuesday in another life and had never told anybody about, because nobody had picked it up, because nobody had been there." },
      { choose: [
        { t: "(Wake her. Gently. Say her name.)", notes: 3, flag: 'eqx-hanni-woke', then: [
          { n: "She said her name. *Hanni.* Quietly, close to her ear, the way you'd say it to someone on a train who'd missed their stop. And again. And Hanni came up out of it slowly, from the bottom, blinking at the red town as if she'd never seen it, and then at Solar, and Solar watched her find the right room." },
          { s: 'hanni', f: 'surprised', t: "...Was I talking? I was talking. What did I say? Don't tell me. Tell me. No. Tell me tomorrow." },
          { n: "She put her head back down on Solar's shoulder, awake now, and held on to her arm, and said *Hanni* to herself once, under her breath, the way she'd said *mine* in June." }
        ] },
        { t: "(Answer her. *Thanks. I'll get it.*)", notes: 2, then: [
          { n: "She said it. *Thanks. I'll get it.* Into the red, to a girl a desk behind her in a school in the snow." },
          { n: "Hanni, asleep, smiled. A small, shy, sideways smile Solar had never seen on her, a younger girl's, pleased to have been noticed by somebody she'd only ever watched; and turned her face into Solar's shoulder and went quiet; and Solar sat in the red with that smile against her coat and wished, very much, that she hadn't said anything at all." }
        ] },
        { t: "(Let her sleep. Hold her a little tighter.)", notes: 2, then: [
          { n: "She didn't wake her. She put her arm round her under the blanket and held on, a little harder than she meant to, as if somebody might come up the stairs and take her by the other arm, and Hanni murmured something else, a number, a room, and then nothing, and slept." }
        ] }
      ] },
      { n: "At forty minutes past, down through the roof and the floor, from the second floor, nothing rang. Hyein's door had no bell on it now. Hanni had the bell in her pocket since September. Solar felt it there, through the blanket, against her hip, small and cold and still." },
      { n: "When the lights came back Hanni sat up and looked at the town and said, very clearly, *one*, to nobody, and then, after a moment, *two*, and looked at Solar, and stopped there, satisfied, as if that was everybody." },
      { n: "Solar didn't tell her about the armband. Not that night. She'd tell her when she'd worked out how to say it without it being worse. She sat on the roof after Hanni went down and looked at the river and the one lit window, and worked at it, and didn't get anywhere." }
    ] },
    { after: '12/1', title: '8: let them talk', place: 'Paulownia Mall · Chagall Café', time: 'After School', music: 'tender', scene: [
      { bg: 'chagall-cafe-inside' },
      { n: "December in the mall was a full-time job. The second floor had gone gold and green overnight, the fountain in the atrium had a tree in it, a real one, roped to the stone, and the speakers played the same four Christmas songs in a rotation so tight you could tell the time by them. Chagall had a paper star in the window. The owner had put it up crooked and left it." },
      { n: "Hanni had her arms on the table in front of her, palms up, like somebody waiting for a nurse to take blood." },
      { n: "The insides of both forearms were bruised. Not one bruise. A ladder of them, yellow going to green, from the wrist halfway to the elbow, in pairs, where the handles of a stretcher had sat across them all the way up a rope with someone's whole weight on the other end." },
      { s: 'hanni', f: 'neutral', t: "Don't. I know. They look so much worse than they are. It's like when you lean on a table too long and it leaves the grain. That's all it is. Table grain." },
      { s: 'hanni', f: 'neutral', t: "...Your mom weighs nothing. Did you know that? I kept thinking that, the whole way up. Hanni, this woman weighs nothing. Why does she weigh nothing." },
      { ifFlag: 'dead.aigis', then: [
        { n: "Under that, the other thing. It was in all of them; Solar could see it in Hanni the way you see weather in a window. Hyein had been on the floor of their room every night since. Not the futon. The floor. With the ribbon on her wrist and her face to the wall and her coat over her, the coat with the square gone out of the back, and Hanni lay beside her on the boards, every night, and didn't sleep, and counted her breathing until the light." },
        { s: 'hanni', f: 'sad', t: "She talks to it. The ribbon. In the night. Not words. Just. She tells it *okay* and *I know* and *sorry*. I lie there and I don't let her hear me hear her." },
        { s: 'hanni', f: 'sad', t: "I counted Aigis. Going up the rope. I always count everybody up the rope. I got to her and there was nothing to count and I said it anyway. Out loud. Her name. Hyein heard me." }
      ], else: [
        { s: 'hanni', f: 'neutral', t: "Aigis asked to be on my rota. Did you hear? She came to the corkboard with a pencil. She said *I would like to be asked whether I'd like a shift*. So I asked. She said yes. She's got two to four. She doesn't need to sleep, it's not even fair, I've given her every two to four till March." },
        { s: 'hanni', f: 'happy', t: "She sits up with Mrs. Kim. They watch the shopping channel with the sound off and Aigis reads her the prices. Mrs. Kim says she's the only one in the building with any sense." }
      ] },
      { choose: [
        { t: "(Turn her arms over. Gently. Hold her hands instead.)", notes: 3, then: [
          { n: "She turned Hanni's arms over on the table, slowly, bruises down, and took her hands, and held them on the wood between the two cups, and Hanni let her, and looked down at it, and laughed, a little, through her nose." },
          { s: 'hanni', f: 'neutral', t: "...You're hiding my table grain. That's very considerate. The owner's going to think we're proposing." }
        ] },
        { t: "You carried her all the way up.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "I carried her all the way up. Me and Haechan. He wanted to switch at the halfway and I said no." },
          { s: 'hanni', f: 'sad', t: "...I've carried everybody's everything for a year. Teacups and futons and rotas and Hyein's phone. And then I carried your mom up a rope out of the dark with her back sewn shut and she said *thank you, sweetheart* at the top. She didn't know my name. She called me sweetheart. I've never been prouder of anything." }
        ] },
        { t: "You stood in front of her. At the tree.", notes: 3, then: [
          { s: 'hanni', f: 'neutral', t: "...I didn't decide that. I want you to know. I didn't stand there and think *I'm going to be brave now*. My feet went." },
          { s: 'hanni', f: 'happy', t: "My feet. The same ones that walked me into a frat house in heels in a blizzard. They've redeemed themselves. I'm going to buy them something." }
        ] }
      ] },
      { s: 'hanni', f: 'neutral', t: "And the thing. The mountain lady. With the birds in her hair." },
      { s: 'hanni', f: 'neutral', t: "I can feel her now. All the time. Not like a person. Like when you've got your hand on a rope and someone's on the other end. I can feel everybody on the other end of her. I can feel you, right now, across the table. It's like a tug." },
      { s: 'hanni', f: 'sad', t: "...It's the rota, Sol. That's what she is. She's the rota with a body. I spent a year keeping track of everybody on a piece of paper and something down there looked at it and went, *oh, that's what you are*." },
      { ifEvent: 'eqx-held-too-long', then: [
        { n: "Solar didn't say anything. She thought about the Velvet Room, the other night, and Elizabeth on the blue velvet with her hands in her lap, and the sentence she'd said about Hanni without being asked. *That's what's happening to your Hanni in her sleep. It's making rope out of people.* Three strands to a person." },
        { n: "She looked at Hanni across the table, holding everybody, on the other end of every cord, and didn't say it, and felt the not-saying sit in her chest like something swallowed wrong." }
      ] },
      { s: 'hanni', f: 'serious', t: "Tonight. My door. I'm ready. I want to knock on it." },
      { ifFlag: 'eqx-hanni-door-promise', then: [
        { s: 'hanni', f: 'neutral', t: "You didn't open it without me. Chenle told me. You went past it four times and you didn't once. He said you looked at it every time." }
      ] },
      { choose: [
        { t: "Then let's go knock.", notes: 3, then: [
          { s: 'hanni', f: 'happy', t: "*Okay.* Okay. No backsies. You've signed." }
        ] },
        { t: "You don't have to. You know what's behind it.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "I know what's behind it. I've known since I was fourteen. That's why." },
          { s: 'hanni', f: 'serious', t: "I'm not going down there to find out. I'm going down there to be the one who knocks." }
        ] }
      ] },

      { place: 'The Well · The Third Hill', time: 'The Red Hour', bg: 'eq-well-5', music: 'eerie' },
      { n: "It was off the main stairs, where Chenle had said. A side corridor that hadn't been there in October and was there now, the way things were in the Well, as if it had always been and you'd only failed to notice. Lockers, and static on the walls, and at the end, where the corridor should have turned, a door." },
      { n: "A dorm door. Pale wood-effect laminate, a scuff at kick height, a brass number plate with the number taken off and the screw holes left. And on it, at eye level, a little whiteboard in a plastic frame with a marker on a string, and on the whiteboard, in green, in a hand Solar knew, *HANNI. KNOCK FIRST.*" },
      { n: "And behind it, the noise." },
      { n: "A hundred people. More. All talking at once, low, the way a dining hall talks on a Monday, the way a comment section would sound if you could hear it. You couldn't pick out words, at first. Only the shape. Then you could. *Did you see.* *Always with her.* *Short one.* *The two.* *Cry for help.* *Her laugh, though.* *Do the laugh.* And under it, newer, in a language Solar's ear knew from another life before her head did, from a hallway in the snow: *transfer girl*, *the quiet one in 2-3*, *she's always looking at the vice president*." },
      { n: "Hanni stood in front of it with her arms bruised under her coat and her hands at her sides, and listened, and Solar watched her hear the new ones. The ones in a language she didn't speak. Watched her understand every word." },
      { s: 'hanni', f: 'sad', t: "...They're doing me in Korean now. That's new. They've added a language. That's so much work. I'm almost flattered." },
      { s: 'chenle', f: 'neutral', t: "Hanni. It's asking. I can hear it under them. It's the same thing over and over. *Stay here. Nobody here will say anything. Be small. Be quiet. Stay where nobody looks.*" },
      { s: 'hanni', f: 'neutral', t: "Yeah. I know. I've had that one memorized since I was fourteen." },
      { n: "She lifted her hand. Made a fist. And knocked. Three times. Spaced. Polite. The procedure." },
      { n: "The voices behind the door stopped. All of them. All at once, the way a room stops when someone walks in who everyone was just talking about." },
      { n: "Then the door opened by itself, inward, an inch, onto a dark room. And from inside, very kindly, in Solar's own voice, warm and low and certain, the voice Hanni had asked on a roof in June to say the thing she needed: *You don't have to go back. Come in. Stay. Nobody will ever look at you again.*" },
      { n: "Hanni's face did nothing. For one second, nothing at all. Then she pushed the door open the rest of the way with the flat of her hand and walked in." },
      { place: 'The Well · Hanni’s Door', time: 'The Red Hour', bg: 'epi-r-hanni-hyein-room', music: 'mystery', soft: true },
      // BG: eqx-well-hanni-room — a small college dorm room for two at night drained to deep red, two narrow beds, one made perfectly and one unmade, a phone face up on a pillow glowing, a little whiteboard on the inside of the door covered top to bottom in the same three words.
      { n: "Their room. Hanni and Hyein's, at Syracuse, the way it had been the night they went: Hyein's bed unmade, the quilt half on the floor, the fruity candle on the sill burnt down to a puddle; Hanni's bed made, tight, the corners tucked, and on the pillow a stuffed rabbit with one ear sewn back on in Hyein's tiny stitches. In the red it looked like a photograph left in the sun." },
      { n: "On Hanni's pillow, beside the rabbit, a phone. Face up. Lit. Scrolling by itself, slowly, the way a phone scrolls when somebody's thumb is on it, and every post that went past was a picture of Hanni with her eyes shut, laughing, and every comment under every picture was being read out loud, quietly, by the room." },
      { n: "And the whiteboard on the back of the door, the inside one, the one only the girls in the room could see, was covered. Top to bottom, edge to edge, in a hundred hands, three words written over and over until the white was gone. *WHERE IS HANNI.*" },
      { n: "Hanni stood in the middle of the room and looked at it. All of it. The bed she'd made. The rabbit. The phone reading her out loud." },
      { s: 'hanni', f: 'neutral', t: "...I made that bed the morning of New Year's. Before we went. I always make it. Hyein says it's psychotic." },
      { n: "She went to the pillow and picked up the phone. Its screen was warm. A picture of her at fourteen, at a lunch table, head back, mouth open, eyes shut, the real laugh, the one that goes up at the end. Under it, a hundred comments, and the room reading them, softly, kindly, all at once." },
      { n: "Hanni looked at it for a long time." },
      { n: "Then she turned it face down. On the pillow. The way Solar had turned her phone face down on a café table in June. And put her hand flat on the back of it." },
      { s: 'hanni', f: 'serious', t: "Let them talk." },
      { n: "The mountain came up behind her." },
      { n: "Not out of anything. Out of the red, out of the room, the way mist stands up off a lake at dawn: the woman, vast and gentle, cloud and green, her shoulders the slope of a hill and her hair full of small dark birds, filling the little room and going up through its ceiling into the dark. And from her open hands the cords ran out, gold, warm, a hundred of them; and they didn't go to the voices. They went to the door, and through it, and down the corridor, and up the stairs, and away up the Well toward the town, and Solar felt one go round her own wrist, light as a thread, not tight. Holding." },
      { s: 'hanni', f: 'serious', t: "Let them talk about me. Let them say the short one, the two, the cry for help. Let them do the laugh in the hallway every morning for a month. I'll laugh it back at them. The real one. With my head back." },
      { s: 'hanni', f: 'serious', t: "I'm not staying where nobody looks. I'm going home, or I'm staying here, and either way it's going to be loud, and I'm going to be in the middle of the picture with my eyes shut and my mouth open, and somebody's going to post it, and I don't *care*." },
      { n: "The phone under her hand went dark. The voices didn't come back. The room was only a room, red, quiet, with a candle puddle on the sill and a rabbit on a pillow." },
      { n: "Hanni stood in it, breathing hard, with the cords still running out of the woman's hands behind her to everybody she'd ever counted; and then she turned round to the whiteboard on the inside of the door, *WHERE IS HANNI* a hundred times, and looked at Solar, and held out the marker on its string." },
      // CG: eqx-let-them-talk — a small red-lit college dorm room, a short girl standing with her palm flat on a phone turned face down on a made bed, behind her a vast gentle woman of mist and green with birds in her hair, golden cords running from her open hands out through the open door.
      { choose: [
        { t: "(Write *HERE* under all of it. Big.)", notes: 3, flag: 'eqx-hanni-board-here', then: [
          { n: "She took the marker and wrote it under the hundred questions, in capitals, as big as the bottom of the board would take: *HERE.* And underlined it twice, the way Hanni underlined every name." },
          { n: "Hanni looked at it and laughed. The real one. Head back, eyes shut, mouth open, in the middle of a red room at the bottom of a well, and it went up at the end, and Solar watched every one of the hundred questions on the board above it fade, slowly, the way marker fades on a board that's been left in the sun, until there was only the one word left." }
        ] },
        { t: "(Hand the marker back. It's her board.)", notes: 3, flag: 'eqx-hanni-board-hers', then: [
          { n: "She closed Hanni's fingers on it instead. Hanni looked at the marker in her own hand and at the board, and Solar watched her think about it, the way she thought about stamp cards and hot chocolate and things that were hers." },
          { n: "Then she wiped a space clear with the side of her fist, in the middle, a smear through the hundred questions, and wrote, small, in her own fast hand, *at the café. ask for the window table.* And capped the marker, and let it drop on its string." },
          { s: 'hanni', f: 'neutral', t: "...That's where I am. If anybody wants to know. They can come and sit with me. They can bring a straw." }
        ] },
        { t: "(Wipe the whole board clean with your sleeve.)", notes: 2, flag: 'eqx-hanni-board-wiped', then: [
          { n: "She wiped it. The whole board, with her coat sleeve, edge to edge, until her sleeve was green and the board was white and empty and shining, and nothing on it at all." },
          { s: 'hanni', f: 'neutral', t: "...Clean board. Like the start of a term." },
          { s: 'hanni', f: 'sad', t: "I don't know what to put on it, though. That's the thing. Every time somebody wipes it, I stand there with the marker." }
        ] }
      ] },
      { flag: 'eqx-hanni-floor-cleared' },
      { n: "On the way out she picked the rabbit up off the pillow. She didn't say anything about it. She put it inside her coat, against her chest, where the bruises were, and zipped the coat up over it." },

      { place: 'Iwatodai Dorm · Lounge', time: 'Late Night', bg: 'iwatodaidorm-livingroom-night-winter', music: 'night', soft: true },
      { n: "Two in the morning, and the lounge was blue with the television, the shopping channel with the sound down, a woman holding up a set of knives with enormous sincerity. The mothers were home. They'd come from the ward on the first, and the dorm had rearranged itself round them in a day, the way a hand closes round something that might break." },
      { n: "Mrs. Kim was in the armchair. Sitting up. A blanket over her knees and her eyes open in the blue light, and Mr. Kim on the floor at her feet, asleep, with his head against her slippers." },
      { s: 'kim-mom', f: 'neutral', t: "...Go to bed. I'm not tired. I'm watching the knives." },
      { s: 'hanni', f: 'neutral', t: "I'm on the rota, Mrs. Kim. Two to four. I have to sit here. It's the law." },
      { ifFlag: 'dead.aigis', then: [
        { n: "Two to four had been Aigis's. Hanni had given it to her till March. Nobody had taken it since the twenty-second; Hanni had left it blank on the grid, the box empty, and sat it herself every night, and hadn't written her own name in it." }
      ] },
      { n: "She sat down on the end of the couch with the rabbit still inside her coat, and Solar sat beside her, and Mrs. Kim looked at the two of them in the blue light for a long time, the way she looked at everything, as if she were about to find out it had been overcharged." },
      { s: 'kim-mom', f: 'neutral', t: "...You. The short one. I know you." },
      { s: 'hanni', f: 'neutral', t: "I carried you up, Mrs. Kim. Halfway. Then Haechan." },
      { s: 'kim-mom', f: 'neutral', t: "No. Before. You came to the house. With the council children. You sat at the end of the table and didn't eat the japchae and Solar didn't talk to you once all night. I remember. I thought, that girl's going to be somebody, and nobody's looking at her." },
      { n: "Hanni went very still beside her on the couch. Solar felt it through the cushion." },
      { n: "Mrs. Kim frowned. She put her hand back, behind her, toward her own spine, the way the mothers did now, without thinking, when the cold got into the seams. She held it there." },
      { s: 'kim-mom', f: 'neutral', t: "...No. That was somebody else. I'm muddled. It's the medicine. Who comes to dinner and doesn't eat the japchae." },
      { s: 'kim-mom', f: 'neutral', t: "Go to bed, both of you. I'm not tired." },
      { choose: [
        { t: "(Stay. Sit the shift with her.)", notes: 3, flag: 'eqx-hanni-shift', then: [
          { n: "She stayed. They sat the shift together, the two of them on the couch and Mrs. Kim upright in her chair and Mr. Kim asleep at her feet, and watched a woman sell knives and then a man sell a blender and then the knives again, and at some point Hanni's head came down on Solar's shoulder, and she didn't sleep, and Solar could feel her not sleeping, all through her, like a held note." }
        ] },
        { t: "(Take Hanni's hand. Squeeze it once.)", notes: 3, then: [
          { n: "She took Hanni's hand on the couch between them and squeezed it once, and Hanni squeezed back, twice, hard, and didn't let go, and they sat like that with the knives going round on the screen until four, when Hanni got up and wrote the time on the rota, and her hand shook, a little, on the pencil, and Solar pretended not to see." }
        ] }
      ] },
      { n: "At four Hanni went up to her room. Solar went with her as far as the door. Hyein was asleep inside, Solar could hear her, and Hanni stood outside it on the boards in her socks with the rabbit inside her coat and didn't go in." },
      { s: 'hanni', f: 'neutral', t: "...Sol. Do I talk? In my sleep. You've been on the roof with me. Do I talk?" },
      { choose: [
        { t: "You do. You called me sunbae. You knew where I dropped my armband.", notes: 3, flag: 'eqx-hanni-told-dream', then: [
          { n: "Hanni closed her eyes. She stood there with them closed for a long time." },
          { s: 'hanni', f: 'neutral', t: "...Thank you. That's the whole thing. Not nice. All of it." },
          { s: 'hanni', f: 'sad', t: "I don't want a third one. I want you to know that. I don't want to be the girl in the corner in one more life. I've got two. I've got enough to carry." }
        ] },
        { t: "Sometimes. Mostly you count.", notes: 2, then: [
          { s: 'hanni', f: 'neutral', t: "...That sounds like me. Counting." },
          { n: "She looked at Solar's face for a moment, and Solar saw her see it, the face from April with the bruise, and decide not to ask for the rest. Not tonight." }
        ] }
      ] },
      { n: "She took the rabbit out of her coat and looked at it in the dark of the corridor. One ear, sewn back on. Hyein had done it in their first week, at Syracuse, without being asked, and given it back without a word. Then she gave it to Solar." },
      { s: 'hanni', f: 'neutral', t: "Keep him for me. Not because I'm going anywhere. Because I keep keeping everybody's things and nobody's got anything of mine. You can have the rabbit. That's a start." },
      { ifFlag: 'dead.aigis', then: [
        { n: "She went in, and lay down on the boards beside Hyein, the way she did every night now, and Solar heard the long breath she let out when she did." }
      ], else: [
        { n: "She didn't go in. She lay down on the futon across Hyein's door, where she'd slept since April, and let out a long breath, the kind you let out when you put something heavy down." }
      ] },
      { n: "Solar stood in the corridor with a stuffed rabbit from a dorm room at the bottom of a well, its fur warm from Hanni's coat, and the gold thread round her wrist that she couldn't see and could feel, tugging, very lightly, every time Hanni breathed." }
    ] }
  ]
});
