/* Job scenes, more (living world part 2, 2026-10-21): bookworms, tutor, flowers. Format: data/job-scenes-more files merge into
   data/job-scenes.js by job id (core.js shiftScene): shifts (full scenes, never repeated), beats (a one-time story with the
   regulars, in order), quiet (short moments once the full scenes have played), openers (a line per month for quiet shifts).
   Quiet moments carry no place line: they follow the month's opener inside the job's own place. */
Object.assign((window.FEMC_GAME_JOB_SCENES_MORE ||= {}), {
  /* ── Bookworms (Iwatodai Strip). Regulars: Bunkichi and Mitsuko; Mr. Hirata, the retired conductor who reads the
     timetables by the window; Shiori, a Gekkoukan first-year who reads mysteries one volume a week; Mr. Tsukada, who brings
     boxes from house clearances; Daifuku, the cat who sleeps in the window (no lines). Arc: the persimmon diary. ── */
  bookworms: {
    cast: { bunkichi: 'Bunkichi', mitsuko: 'Mitsuko', boy: 'Middle-schooler', hirata: 'Mr. Hirata', shiori: 'Shiori', tsukada: 'Mr. Tsukada', bwkid: 'Boy on the floor', bwman: 'Customer' },
    shifts: [
      { id: 'bw-s-first-years', months: [4, 5], scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "April at Bookworms meant first-years, who came in by twos and threes with their new uniforms still creased from the packet, looking for the textbooks some upperclassman had promised they could get here for half price, and Mitsuko had put a sign about it in the window in brush lettering she had very clearly enjoyed doing much more than was strictly necessary." },
        { s: 'mitsuko', t: "Second-hand, dear. Half the price, and somebody has already underlined the important parts. Usually the wrong parts. But it's the thought." },
        { n: "One of them didn't want textbooks. She was small and extremely upright, with bangs cut in a line so straight it looked like policy, and she went to the mystery shelf as if she'd been given directions in a dream and stood in front of it running one finger along the spines, getting quietly and visibly more upset." },
        { s: 'shiori', t: "Volume seven. You have one through six. You have eight through twelve. Where is seven." },
        { s: 'shiori', t: "Seven is where he finds out about the twin. You can't just not have seven." },
        { s: 'bunkichi', t: "Ah. I think I may have taken seven home." },
        { s: 'mitsuko', t: "Of course you did." },
        { choose: [
          { t: "(Go and look for it in the back room anyway.)", stat: { proficiency: 1 }, then: [
            { n: "The back room was where books went to wait for a second chance, stacked in towers that leaned toward each other like old men sharing a secret, and she found a seven, not his, under a pile of gardening magazines from the seventies and a biscuit tin full of buttons, with a bus ticket from 1991 marking page forty. Somebody else had stopped right there and never come back for the twin." },
            { s: 'shiori', t: "Thank you. I'm Shiori. I'm going to come here every week now. I'm telling you so you can be ready." }
          ] },
          { t: "I bet the twin did it.", stat: { charm: 1 }, then: [
            { s: 'shiori', t: "Don't. You don't know that." },
            { s: 'shiori', t: "...Do you know that?" },
            { s: 'solar', f: 'neutral', t: "I know nothing. I've never read a single one." },
            { n: "Shiori looked at her for a long, measuring second, the way you'd look at a dog that had just walked across a piano, and then bought volume eight out of what was obviously spite, announcing that she would read it out of order and suffer and that it would be on Solar's conscience." }
          ] }
        ] },
        { n: "She paid in coins from an envelope with ALLOWANCE written on it in letters as straight as her bangs, and left with the book already open, reading as she walked out into the strip, and Solar watched her get all the way to the corner without walking into a single person, which seemed like a skill." }
      ] },
      { id: 'bw-s-the-412', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Mr. Hirata came in a little after three, the way, Mitsuko said, he had come in a little after three for six years, and sat on the stool by the front window with a railway timetable from 1968 open on his knees, reading it the way other people read novels, slowly, with his lips moving slightly over the good parts." },
        { n: "He'd been a conductor for forty-one years. He said so the first time she dusted near him, by way of introduction, and then said nothing else for an hour and a half, turning a page every ten minutes, while the light in the window moved across his shoulders." },
        { s: 'hirata', t: "The 4:12. It ran four minutes late every Tuesday for eleven years. The company sent three inspectors. Nobody ever found out why." },
        { s: 'hirata', t: "I knew why." },
        { choose: [
          { t: "Are you going to tell me?", stat: { knowledge: 1 }, then: [
            { s: 'hirata', t: "The driver's mother lived beside the level crossing at the edge of town. Every Tuesday he slowed down so she could wave at him from the garden. Every Tuesday she waved." },
            { s: 'hirata', t: "They put the monorail over that line in the eighties. The crossing's a parking lot now. I checked." },
            { n: "He turned the page. She went back to the shelf she was supposed to be dusting and dusted the same three books for a while without really seeing them." }
          ] },
          { t: "(Bring him a cup of tea and leave him to it.)", stat: { kindness: 1 }, then: [
            { n: "He took it without looking up and said thank you, miss, in the warm, automatic voice of a man who had said tickets please some several hundred thousand times, and a little later, without being asked, he told her about the driver's mother by the level crossing, who had waved from her garden every Tuesday for eleven years, and then he went back to 1968." }
          ] }
        ] },
        { s: 'mitsuko', t: "He hasn't bought a book in six years, you know." },
        { s: 'bunkichi', t: "He doesn't come for the books. He comes for the window." },
        { n: "From the window, if you leaned, you could see a slice of the monorail track over the roofs of the strip, and every time a train went across it Mr. Hirata's eyes went up and followed it all the way out of sight, and then went down to his wristwatch, and then, satisfied or not, back to the page." }
      ] },
      { id: 'bw-s-the-leak', months: [6, 7], weather: ['rain'], scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "The rainy season found the hole in the roof on a Wednesday, the way it apparently found it every single year, and by the time Solar came in out of the downpour there was a dark patch spreading on the ceiling above the poetry section and a steady, almost musical drip landing on a collected Bashō." },
        { s: 'bunkichi', t: "It's always poetry. Never cookbooks, never the encyclopedias. The roof has opinions." },
        { s: 'mitsuko', t: "The roof has a hole, dear. We've had this conversation since 1974." },
        { n: "There were buckets, eventually, three of them, each pinging at a different pitch so that the whole corner of the shop sounded like someone practicing scales very badly, and there was the question of the books." },
        { choose: [
          { t: "(Save the poetry first, a shelf at a time.)", stat: { proficiency: 1 }, then: [
            { n: "She moved them by the armful to the dry end of the counter, wiping each one with a clean tea towel and standing the wet ones open on their ends like little tents, and when she got to the bottom shelf she found that the damp hadn't reached it at all, which made her feel like she'd beaten the weather at something." }
          ] },
          { t: "(Get the stepladder and look at the hole.)", stat: { courage: 1 }, then: [
            { n: "Mitsuko said absolutely not and Bunkichi said oh, let her look, and Solar was already up the ladder with her head in the gap between two ceiling boards, getting rained on from a direction rain should not have been able to come from, stuffing it with a folded plastic shopping bag until the drip went from a song to a thought to nothing at all." },
            { s: 'mitsuko', t: "You're soaked. You're completely soaked. Bunkichi, get her a towel. Not that towel." }
          ] }
        ] },
        { n: "By closing they had damp books open on every flat surface in the shop, the counter, the stools, the tops of the low shelves, all of them propped with their pages fanned to dry, and with the lights low and the rain still going outside the whole place looked like a field of pale moths that had come down to rest." },
        { n: "Bunkichi stood in the middle of it with his hands behind his back, looking pleased, as if he'd arranged it." }
      ] },
      { id: 'bw-s-the-fan', months: [7, 8], scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "The shop had one electric fan, older than Solar by a comfortable margin, that turned its head from side to side across the room with the slow disapproval of a schoolteacher, and in the summer heat everyone in Bookworms arranged themselves around its route." },
        { n: "Daifuku, the neighborhood cat, a heavy white thing with one gray ear, had taken the windowsill. Bunkichi had taken the chair behind the counter and was resting his eyes. And on the floor in the manga corner, a boy of about nine had been reading the same long series for two hours straight, cross-legged, sweating, turning pages at a speed that suggested he was not going to buy any of them." },
        { s: 'bwkid', t: "Do you have twenty-three? This stops at twenty-two." },
        { choose: [
          { t: "(Let him read. It's summer.)", stat: { kindness: 1 }, then: [
            { n: "She found him twenty-three and twenty-four and a cup of barley tea from Mitsuko's flask, and he said thank you without looking up and went back in, and the fan came round and lifted his hair and went away again, and he didn't notice that either." }
          ] },
          { t: "Read one real novel and I'll give you twenty-three for free.", stat: { charm: 1 }, then: [
            { n: "He narrowed his eyes at her like a man being offered a contract by the devil, and then took the thinnest book she could find off the children's shelf, something about a dog and a lighthouse, and read it in forty minutes flat, frowning, and at the end he sat very still for a second before he asked if there was a second one." },
            { s: 'mitsuko', t: "Well. That's how they get you, dear. That's how they got all of us." }
          ] }
        ] },
        { n: "At five Bunkichi opened his eyes and looked around as though he'd only blinked." },
        { s: 'bunkichi', t: "I was only resting my eyes." },
        { s: 'mitsuko', t: "For an hour and ten minutes, dear. The cat timed you." }
      ] },
      { id: 'bw-s-the-teacher', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Mr. Tsukada drove a small blue truck for a house-clearance company and treated books the way a fisherman treats a catch he didn't ask for, and that afternoon he backed it up to the curb, set four boxes inside the door, said the word “teacher,” and left before anyone could give him tea." },
        { s: 'mitsuko', t: "He means the house belonged to a teacher. He's very efficient with words. He was like that as a little boy too." },
        { n: "They were good books, all of them, novels and essays and a whole run of a literary magazine, and every one had been corrected. Not annotated. Corrected. In neat red pen, in the margins of famous authors, the dead teacher had fixed their grammar, circled their repeated words, and in one case written *you can do better than this* beside the closing paragraph of a book that had won a major prize." },
        { choose: [
          { t: "(Read the corrections out loud to Bunkichi.)", stat: { charm: 1 }, then: [
            { n: "She did all of them she could find, in her best stern-teacher voice, and Bunkichi laughed until he had to sit down on the stepladder, and then he asked to see the prizewinner, and read the last paragraph, and then the comment, and said, very seriously, that the teacher had a point." }
          ] },
          { t: "(Price them carefully. Somebody will want these.)", stat: { proficiency: 1 }, then: [
            { n: "She went through all four boxes with the pencil, a little higher than usual on the ones with the most red in them, because it seemed to her that the corrections were the most valuable part, and Mitsuko looked over her figures and changed none of them, which was the first time that had happened." }
          ] }
        ] },
        { s: 'bunkichi', t: "A teacher never stops, you know. Not even with the great ones. Especially not with the great ones." },
        { n: "Mitsuko glanced at him over the top of her glasses, a short look, nothing in it you could have pointed to, and then went back to the ledger." },
        { n: "They put the red-pen books all together on one shelf near the front, under a card in Bunkichi's handwriting that said only GRADED, and Solar noticed over the next few weeks that people who picked one up almost never put it back." }
      ] },
      { id: 'bw-s-akihiko', met: ['akihiko'], after: '5/20', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Akihiko came in with his school bag over one shoulder and the focused expression of someone hunting, and stopped dead in the doorway when he saw her behind the counter, as if a punching bag had turned around and said hello." },
        { s: 'akihiko', f: 'surprised', t: "You work here? Huh. Good. Then you can help me. There's supposed to be a training manual. Hungarian, from the sixties, translated. A guy at the gym swears it exists." },
        { s: 'akihiko', f: 'neutral', t: "Whole chapter on footwork drills you can do in a hallway. I need that chapter." },
        { n: "Before she could answer, Mitsuko had come round the counter and was looking up at him, all the way up, with the expression of a grandmother confronting a famine." },
        { s: 'mitsuko', t: "Young man. When did you last eat a vegetable." },
        { choose: [
          { t: "(Find him the sports shelf before Mitsuko finds out about the protein.)", stat: { proficiency: 1 }, then: [
            { n: "The sports shelf was mostly golf and one very confident book about mahjong, but behind the golf, in a cardboard slipcase, there was a translated Hungarian manual with diagrams of little men stepping in circles, and Akihiko held it in both hands like a trophy." },
            { s: 'akihiko', f: 'happy', t: "This is it. This is actually it. I owe you one." }
          ] },
          { t: "He has three protein shakes a day. Does that count?", stat: { charm: 1 }, then: [
            { n: "Mitsuko's face did something terrible, and Akihiko looked at Solar with genuine betrayal, and for the next fifteen minutes he was walked up and down the cookbook shelf with a small, firm hand on his elbow while she explained spinach to him in great detail." },
            { s: 'akihiko', f: 'serious', t: "...Spinach does have iron. She's not wrong." }
          ] }
        ] },
        { n: "He left with the manual and also, somehow, a cookbook called *Simple Home Vegetables* that Mitsuko had wrapped and paid for herself and put in his bag while he was still saying no thank you." },
        { s: 'bunkichi', t: "Nice boy. Very straight back. He'll do well." },
        { s: 'mitsuko', t: "He'll do well if he eats something green." }
      ] },
      { id: 'bw-s-fuuka', met: ['fuuka'], after: '6/20', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Fuuka came in quietly, the way she did everything, and spent ten minutes in front of the cookbook shelf pretending to read the spines while she worked up to asking, and Solar let her, because she knew that look from the dorm kitchen." },
        { s: 'fuuka', f: 'neutral', t: "Um. Do you have anything for beginners? Real beginners. The kind of beginner who... maybe shouldn't be trusted with the oven yet." },
        { s: 'bunkichi', t: "I have exactly the thing." },
        { n: "The thing was a cookbook for children, with a cartoon rice ball on the cover giving a thumbs-up and instructions that began, on page one, with how to wash your hands." },
        { choose: [
          { t: "Honestly? Start with the rice ball.", stat: { charm: 1 }, then: [
            { s: 'fuuka', f: 'surprised', t: "...Okay. Okay. Everybody has to start somewhere, right? Even if somewhere is page one." },
            { n: "She bought it, and read the first two pages at the counter while Mitsuko wrapped it, nodding along as if washing her hands were a new and important technique, and Solar did not laugh, at all, out loud." }
          ] },
          { t: "(Show her the old computer manuals in the back.)", stat: { knowledge: 1 }, then: [
            { n: "There was a box of them from the early eighties, spiral-bound, the pages gone the yellow of old teeth, full of programs you were supposed to type in by hand, and Fuuka knelt down beside it on the floor and stopped being shy entirely." },
            { s: 'fuuka', f: 'happy', t: "This one makes a little dog walk across the screen. In eleven lines. Eleven! Solar, look at this." }
          ] }
        ] },
        { n: "She left with both, the rice ball and the dog, pressed together under her arm as though they belonged to the same project, and Solar thought that in a way they probably did." }
      ] },
      { id: 'bw-s-reading-week', months: [10, 11], scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "For Reading Week Mitsuko cleared the table by the door and covered it with a cloth and announced that everyone who worked at Bookworms would choose one book to put on it, with a card underneath explaining why, and that this year everyone included the girl on the stepladder." },
        { s: 'bunkichi', t: "Mine is the same as every year. It's a very good book. It hasn't gotten any worse." },
        { n: "Solar went up and down the shelves for half the afternoon and in the end picked a thin collection of poems because of one line on page twelve, something about a window left open for someone who might come back, which she had read standing on the ladder and then had to stand there for a moment with the book against her chest, not reading anything." },
        { n: "Shiori arrived at four, for her weekly volume, and inspected the table with the air of a judge at a dog show." },
        { s: 'shiori', t: "Which one's yours? What does your card say? I'm going to read your card." },
        { choose: [
          { t: "(Write the honest card. “I only read one page. It was a very good page.”)", stat: { charm: 1 }, then: [
            { s: 'shiori', t: "That's not a review. That's barely a sentence." },
            { n: "And then she bought the book, stood at the counter flipping to page twelve, read the line, and said nothing at all about it, which from Shiori was a standing ovation." }
          ] },
          { t: "(Write a proper card, with reasons.)", stat: { knowledge: 1 }, then: [
            { n: "It took four drafts and Mitsuko's good pen, and it was very good, with a quote and a reason and a recommendation for people who liked quiet things, and Shiori read it and nodded and said it was adequate, and then copied the quote into the back of her notebook when she thought nobody could see." }
          ] }
        ] },
        { n: "By Sunday all three books on the table were gone and Mitsuko had to put out three more, and Bunkichi put out the same one again, which apparently he did every year, and which apparently somebody bought every year too." }
      ] },
      { id: 'bw-s-new-year-exam', months: [12, 1], scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Mitsuko had put a small pine branch and a plate of mikan on the counter for the season, and the shop smelled of citrus peel and paper and the paraffin heater ticking in the corner, and the boy came in out of the cold with his scarf up to his eyes and the entrance-exam book under his arm." },
        { n: "She knew him at once. Him and the book. It had gotten a lot thicker since the spring, swollen with his own pencil, sticky notes in four colors fringing the edges like feathers." },
        { s: 'boy', t: "The exam is in February. I did every problem. Twice. Some of them three times." },
        { s: 'boy', t: "Can you give me one more? A hard one. I want to know if I can do one I haven't seen." },
        { choose: [
          { t: "(Write him a problem on the back of a receipt.)", stat: { knowledge: 1 }, then: [
            { n: "She made one up on the spot, a triangle inside a circle inside a worse triangle, in honor of the one from last spring, and he stood at the counter with his gloves still on and worked it in silence while Bunkichi peeled a mikan very slowly beside him, like a referee, and got it right on the second try, and went pink." }
          ] },
          { t: "Forget problems. Here's what exam day is actually like.", stat: { kindness: 1 }, then: [
            { n: "Get there early. Bring three pencils, because one breaks and one rolls away. Eat something even if you think you'll throw up. If you get stuck, skip it and come back. She said it all with the confidence of someone who had done it, and it struck her halfway through that she didn't remember her own exam at all, not the room or the weather or a single question, and she kept going in the same voice anyway." },
            { s: 'boy', t: "Three pencils. Okay. Three." }
          ] }
        ] },
        { s: 'mitsuko', t: "Take a mikan, dear. Take two. Brains run on sugar." },
        { s: 'boy', t: "Thank you. I'm going to pass. Definitely." },
        { s: 'boy', t: "...Probably." },
        { n: "He went back out into the dark with a mikan in each coat pocket and the book held against his chest, and Solar watched him go, and found she minded much more than she expected about how February was going to turn out for a boy whose name she didn't know." }
      ] },
      { id: 'bw-s-stocktake', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "Stocktaking at Bookworms happened once a year, whenever Mitsuko decided it did, and involved Solar, a clipboard, and the discovery that Bunkichi's filing system existed nowhere in the physical world except inside his head." },
        { s: 'bunkichi', t: "That shelf is books that are good to read when it's raining. That one's for people who've just moved. The one under it is for when you're angry with someone and want to be angry with them properly." },
        { s: 'mitsuko', t: "He means it. He'll find any book in this shop in under a minute. Nobody else alive could find a thing." },
        { choose: [
          { t: "(Alphabetize one shelf. Just one. As an experiment.)", stat: { proficiency: 1 }, then: [
            { n: "She did the shelf for people who had just moved, author by author, tidy as teeth, and Bunkichi came and stood in front of it afterward with his hands behind his back for a long time, like a man looking at a house that had been painted a new color, and then said it was very nice, and that he would never be able to find anything on it again." }
          ] },
          { t: "(Ask him to teach you the system instead.)", stat: { kindness: 1 }, then: [
            { n: "He took her round the whole shop shelf by shelf, explaining, and it never once made sense and it was all completely consistent, and by the end of the afternoon she could find the angry shelf and the rainy shelf with her eyes closed and had no idea what letter anything started with." }
          ] }
        ] },
        { n: "The count came out at four thousand two hundred and something, which Mitsuko wrote in the ledger with great ceremony beside last year's, which was also four thousand two hundred and something." },
        { s: 'mitsuko', t: "Same as always. Books come in, books go out. It all evens out, like the tide." }
      ] },
      { id: 'bw-s-blue-cover', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "A man in a raincoat came in and asked for a book, and when Solar asked which one he said he didn't remember the title, or the author, or what happened in it, but that it had been blue, and that there had been a woman on the cover, or possibly a horse." },
        { s: 'bwman', t: "I read it on a train, about twenty years ago. I've thought about it every few months since. It was blue. I'm fairly sure it was blue." },
        { n: "Bookworms had, at a guess, four hundred blue books, at least thirty of them with women on the cover and two with horses, and Bunkichi, who might have known, had gone to the bank." },
        { choose: [
          { t: "(Go through every blue spine in the shop.)", stat: { proficiency: 1 }, then: [
            { n: "It took most of an hour and the stepladder and a system she invented halfway through and was quite proud of, pulling every blue book with a woman or a horse and stacking them on the counter, and he went through the stack one at a time, shaking his head, and then stopped at one, which was green, with a woman standing next to a horse." }
          ] },
          { t: "Forget the cover. Tell me how it made you feel.", stat: { charm: 1 }, then: [
            { n: "He thought about it for a long time, and then said it had made him want to get off the train at a station he'd never been to, and she went straight to the rainy-day shelf, because Bunkichi had once told her that was where the books about leaving lived, and the third one she pulled out was green, with a woman and a horse, and he made a noise like a man stepping on a stair that wasn't there." }
          ] }
        ] },
        { s: 'bwman', t: "It was green. Twenty years. I could have sworn it was blue." },
        { n: "He bought it and stood under the awning outside reading the first page before he'd even put his umbrella up, and Solar went back to the counter with the strange, light, useful feeling of having handed someone back a piece of himself he'd misfiled." }
      ] }
    ],
    beats: [
      { id: 'bw-arc-1', at: 2, after: '4/15', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "At closing, while Mitsuko counted the till, Bunkichi beckoned Solar over to the counter with the furtive air of a man about to sell her something stolen and put down a small notebook with a gray cloth cover, the kind they sold at the stationery shop on the corner for a hundred yen." },
        { s: 'bunkichi', t: "You walk past the persimmon tree. At school. You said so." },
        { s: 'bunkichi', t: "I'd like you to keep a record. Of what it does. Whatever it does. Leaves, birds, weather. Anything." },
        { s: 'mitsuko', t: "He's been wanting to ask someone that for years, you know. You're the first one with the right uniform and the right sort of face." },
        { n: "Solar didn't know what the right sort of face was, or whether she had it, and she turned the notebook over in her hands, the cover soft under her thumb, while outside the strip was turning blue and the lights were coming on in the window of the ramen shop across the way." },
        { choose: [
          { t: "I'll take it seriously. Every week.", stat: { kindness: 1 }, then: [
            { s: 'bunkichi', t: "Good. Good, good. Seriously is the only way to watch a tree. They know when you're not paying attention." }
          ] },
          { t: "What am I looking for, exactly?", stat: { knowledge: 1 }, then: [
            { s: 'bunkichi', t: "Persimmons are slow. You have to watch one for a whole year before it does anything worth writing down. That's the trick of it. You write down the nothing, so that when the something comes, you'll know." }
          ] }
        ] },
        { n: "On her way home she went round the back of the school, where nobody went unless they were skipping class, and stood in front of the tree in the last of the light with the notebook open on her bag, feeling ridiculous and then, slowly, less so." },
        { n: "The tree was mostly bare, a few new leaves coming in small and bright and folded, like hands that hadn't decided yet whether to open, and a single sparrow sat on the lowest branch looking at her with frank suspicion." },
        { n: "She wrote the date. She wrote *Leaves: small. Birds: one, unimpressed.* She thought about it, and then added *Still leaning. Looks like it's listening for something.*" },
        { n: "It was not, she decided, putting the notebook away, the strangest thing anybody had asked her to do since she'd woken up in this city. It was the first one she was looking forward to." }
      ] },
      { id: 'bw-arc-2', at: 5, after: '7/1', prev: 'bw-arc-1', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "By July the gray notebook had gone soft at the corners from living in her bag, and it had eleven entries in it, most of which said some version of *leaves, bigger*, one of which said *a first-year was crying under it, I didn't write down why because it's not my business*, and the last of which Bunkichi had been waiting for her to read out loud since she walked in." },
        { n: "He sat on the stool by the counter with his hands folded on his knees. Mitsuko had stopped pretending to do the ledger." },
        { s: 'solar', f: 'happy', t: "“June. Flowers. Little pale ones, yellow-white, four petals, hiding under the leaves. You'd miss them if you weren't looking. I almost did.”" },
        { s: 'solar', f: 'neutral', t: "“July. Fruit. Small and green and hard, like marbles. I counted nineteen. Then a crow came, and I counted eighteen.”" },
        { n: "Bunkichi didn't say anything. He took off his glasses and polished them on the front of his cardigan, very thoroughly, for longer than glasses have ever needed to be polished, and put them back on." },
        { s: 'bunkichi', t: "Eighteen. Well. The crow's entitled to one. He was there first." },
        { s: 'mitsuko', t: "Our son used to bring them to us, you know. Every autumn. A whole bag, more than anybody could eat, and I'd peel them and hang them in the window to dry, and we'd have hoshigaki all winter. The whole shop smelled of them." },
        { s: 'mitsuko', t: "I haven't made them in years. There didn't seem much point, just for two." },
        { n: "She said it in the light, practical way she said everything, the way you'd mention a recipe you'd lost, and smoothed a page of the ledger flat that was already perfectly flat." },
        { choose: [
          { t: "Make them this year. I'll get you the persimmons.", stat: { courage: 1 }, then: [
            { s: 'mitsuko', t: "Will you, now." },
            { s: 'mitsuko', t: "...Well. We'll see what the tree says. Trees don't like being promised for." }
          ] },
          { t: "(Say nothing. Write tomorrow's date in the notebook, ready.)", stat: { kindness: 1 }, then: [
            { n: "She did it at the counter, small, in pencil, and Mitsuko watched her do it over the top of her glasses and didn't say anything either, and after a moment she reached over and straightened the notebook so it sat square with the edge of the counter, which in Mitsuko's language was a great deal." }
          ] }
        ] },
        { s: 'bunkichi', t: "Eighteen. Hah. My knees told me. My knees are never wrong about persimmons." },
        { s: 'mitsuko', t: "Your knees, dear. Yes." },
        { n: "But she was smiling at the ledger, and she didn't stop for the rest of the afternoon, and when Solar left she called after her to mind the crows." }
      ] },
      { id: 'bw-arc-3', at: 9, after: '10/26', prev: 'bw-arc-2', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "The caretaker at Gekkoukan said she could take the ones she could reach as long as she didn't climb anything and didn't tell anybody he'd said so, and so she came in to Bookworms that afternoon with a plastic bag in each hand, heavy, the handles cutting lines into her fingers, and set them down on the counter, and the whole shop went orange." },
        { n: "Sixteen persimmons. The crows had taken two more over the summer, which she'd recorded with appropriate bitterness. The last entry in the notebook said *October. Orange. All of them at once, overnight, like somebody flipped a switch.*" },
        { n: "Bunkichi picked one up and held it in his palm the way you'd hold a bird, as if it might decide to leave, turning it slowly so the light from the window went round its skin." },
        { s: 'bunkichi', t: "Well. There you are, then. There you are." },
        { n: "Solar, who had carried them all the way from school with her mouth watering, took one, polished it on her sleeve, and bit into it, and her whole mouth turned instantly to felt, dry as chalk and twice as offended, and she made a noise she would not have made in front of anybody she wasn't fond of." },
        { s: 'mitsuko', t: "Oh, dear. Oh, no, those are the bitter kind, you can't eat them like that. That's why you dry them." },
        { s: 'bunkichi', t: "Every year. Every single year, the boy did exactly that. Every year." },
        { n: "He was laughing, properly, with his whole chest, holding on to the counter, and Mitsuko was laughing too, and Solar stood there with her tongue gone to sandpaper and found that she didn't mind being the joke, not even a little, not if it was that one." },
        { n: "Mitsuko got out a peeler from somewhere in the back and a ball of string and three stools, and they sat in a row behind the counter and peeled, leaving the little stem on each fruit to tie the string to, the peel coming off in long curls that fell into a bowl at their feet." },
        { choose: [
          { t: "(Peel yours in one perfect unbroken ribbon.)", stat: { proficiency: 1 }, then: [
            { n: "She managed it on the fourth try and held it up, a long orange spiral swinging from her fingers, and Mitsuko said that was how she used to do it too, before her hands got slow, and took it from her and laid it carefully in the bowl like it was something to keep." }
          ] },
          { t: "(Let Bunkichi show you how, even though he's worse at it.)", stat: { kindness: 1 }, then: [
            { n: "He was much worse at it, hacking off great slabs of fruit with the peel, explaining all the while, and she copied him exactly, slab for slab, and Mitsuko watched the two of them ruin two persimmons between them with the patience of a woman who had watched a great many things be ruined lovingly." }
          ] }
        ] },
        { n: "They hung them in the front window on two lengths of string, sixteen small orange suns in a row, turning gently whenever the door opened, and the light coming through them threw warm smudges across the floorboards." },
        { s: 'mitsuko', t: "Five weeks. Maybe six. We'll squeeze them every few days so the middles go soft. You'll help." },
        { n: "It wasn't a question. Solar wrote it in the notebook anyway, under the orange, in case anybody ever needed to know: *Hung in the window. Five weeks. Maybe six. I'll help.*" }
      ] },
      { id: 'bw-arc-4', at: 13, after: '1/5', prev: 'bw-arc-3', scene: [
        { place: 'Iwatodai Strip · Bookworms' },
        { n: "The persimmons came down from the window in the first week of January, dark and wrinkled and frosted all over with a fine white bloom of their own sugar, sixteen small shrunken things that looked, Solar thought, like nothing much, and smelled like the whole of autumn folded down into something you could hold." },
        { n: "Mitsuko wrapped six of them in brown paper and tied the parcel with string, the way she'd taught Solar to tie books, and put it into her hands." },
        { s: 'mitsuko', t: "For your friends at that dormitory. Don't let them eat them all at once. And don't let the tall thin one have more than one, he'll make himself sick." },
        { n: "Solar didn't ask how Mitsuko knew who lived at the dorm. Mitsuko knew things. It was one of the conditions of employment." },
        { n: "She ate one of the others at the counter with them, small bites, and it was sweet all the way through, dense and dark and jammy, nothing like the felt-mouth disaster of October, and she must have made a face about that too, because Bunkichi pointed at her and said there, you see, there, that's the face he used to make, the second one." },
        { n: "Then he held out his hand for the gray notebook. She gave it to him. He turned to the last page, uncapped Mitsuko's good pen, and wrote in his small, shaky, careful hand, while the two of them watched." },
        { n: "*Fruited. Dried. Eaten. With help.*" },
        { n: "And the year, underlined twice." },
        { choose: [
          { t: "(Ask if he wants to keep it.)", stat: { kindness: 1 }, then: [
            { s: 'bunkichi', t: "Oh, no. It's not mine, it's the shop's. It's a history book now." }
          ] },
          { t: "You know what shelf that goes on.", stat: { charm: 1 }, then: [
            { s: 'bunkichi', t: "I do. I absolutely do. Bring the ladder." }
          ] }
        ] },
        { n: "He put it on the top shelf, in history, which was where she'd started on her very first afternoon with a feather duster, and slid it in between two fat volumes on the Tokugawa shogunate, where nobody would ever find it unless they were looking, and where it would be safe until they were." },
        { s: 'mitsuko', t: "Same again next year, then. The tree. The book. All of it." },
        { n: "Something caught under Solar's ribs, small and sharp, the way it did sometimes when anyone said next year, because next year was a country she didn't have a map for. She held the parcel of persimmons against her chest. The paper crackled. It was warm from Mitsuko's hands." },
        { s: 'solar', f: 'happy', t: "Same again next year." },
        { n: "She said it like she always said things she meant to keep, lightly, so nobody would hear how much, and Mitsuko nodded once, as if a contract had been signed, and Bunkichi climbed down the ladder very slowly, one rung at a time, humming something old." }
      ] }
    ],
    quiet: [
      { id: 'bw-q-cat', scene: [
        { n: "Daifuku had gone to sleep on the open ledger again, the whole heavy white length of him, with one paw over the column where the day's sales went." },
        { n: "Mitsuko didn't move him. She wrote the figures in the margin around him, small and neat, and when he finally got up to leave there was a perfect cat-shaped blank in the middle of the page." }
      ] },
      { id: 'bw-q-sentence', scene: [
        { n: "Bunkichi read a single sentence aloud from the book in his lap, to nobody in particular, and then closed the book on his finger and sat looking at the shelves for a while." },
        { s: 'bunkichi', t: "That's the one. That's the whole book, really. The rest is only getting you there." },
        { n: "Solar didn't ask which book. She thought about the sentence for the rest of the shift instead, which she suspected was the point." }
      ] },
      { id: 'bw-q-crackers', scene: [
        { n: "Mitsuko kept a tin of rice crackers under the counter, rationed by a system Solar slowly understood was based on merit." },
        { s: 'mitsuko', t: "Two today, dear. You did the high shelves without being asked." },
        { n: "Bunkichi, who had not done the high shelves, was given half of one. He accepted it with great dignity." }
      ] },
      { id: 'bw-q-hirata-watch', scene: [
        { n: "A monorail went across the slice of track you could see from the window, and Mr. Hirata looked up from his timetable, followed it out of sight, and checked his wristwatch." },
        { s: 'hirata', t: "Forty seconds early. They're always early now. Nobody waves at anything anymore." },
        { n: "He went back to 1968, where everyone, apparently, had." }
      ] },
      { id: 'bw-q-shiori-guess', scene: [
        { n: "Shiori brought back the volume she'd bought last week and laid it on the counter like evidence." },
        { s: 'shiori', t: "I knew it was the gardener on page thirty. Page thirty. I want you to write that down somewhere." },
        { choose: [
          { t: "(Write it on a sticky note and put it on the register.)", stat: { charm: 1 }, then: [
            { n: "SHIORI: PAGE 30. GARDENER. She looked at it for a long moment, then nodded, satisfied, and went to the shelf for the next one." }
          ] },
          { t: "Was it actually the gardener?", then: [
            { n: "Shiori looked away and said it was the gardener's brother, which was basically the gardener, and that this was not up for discussion." }
          ] }
        ] }
      ] },
      { id: 'bw-q-tsukada', scene: [
        { n: "Mr. Tsukada put one box down inside the door, considered the room, and said a single word." },
        { s: 'tsukada', t: "Dictionaries." },
        { n: "Then he left. There were eleven of them, all the same edition. Bunkichi said that was how you knew somebody had really, truly loved words, or had been very bad at remembering where they'd put the first one." }
      ] },
      { id: 'bw-q-ticket', scene: [
        { n: "Inside a paperback she was pricing she found a monorail ticket from ten years ago, Iwatodai to Port Island, punched, holding someone's place at the start of chapter six." },
        { n: "She put it back exactly where it had been. It didn't seem like her place to lose it for them." }
      ] },
      { id: 'bw-q-wrapping', scene: [
        { n: "Mitsuko showed her how to wrap a book in brown paper with one sheet and no tape at all, just folds, the corners tucked like a hospital bed." },
        { choose: [
          { t: "(Practice on the dictionaries until it's right.)", stat: { proficiency: 1 }, then: [
            { n: "By the sixth one the corners were sharp enough that Mitsuko picked it up, turned it over, and put it down again without comment, which was a gold medal." }
          ] },
          { t: "(Watch her do it one more time first.)", then: [
            { n: "She did it again, slower, without being asked twice, and her old hands went through the folds like they were saying a prayer they'd said a thousand times." }
          ] }
        ] }
      ] },
      { id: 'bw-q-doze', scene: [
        { n: "Bunkichi fell asleep sitting up in the chair behind the counter, his glasses sliding slowly down his nose, his hands still folded on top of an open book." },
        { s: 'mitsuko', t: "Leave him. He's earned it. He was up at five worrying about whether the gutters are a metaphor." }
      ] },
      { id: 'bw-q-one-page', scene: [
        { n: "Reshelving, she opened a book to check the price and read the page it fell open to instead, and then the next one, standing on the ladder with the duster tucked under her arm." },
        { n: "When she looked up ten minutes later Mitsuko was watching her from the counter, not annoyed at all. That was what the ladder was for, she said. Everyone who'd ever worked here had read half the shop from the top of it." }
      ] },
      { id: 'bw-q-pencil', scene: [
        { n: "The pricing pencil had worn down to a stub barely longer than her thumbnail, and when she asked for a new one Mitsuko looked genuinely hurt." },
        { s: 'mitsuko', t: "That pencil has priced a great many books, dear. It has at least another hundred in it. Hold it at the very end." }
      ] },
      { id: 'bw-q-reader', scene: [
        { n: "A very small girl sat on the floor in the children's corner sounding out the words of a picture book, one syllable at a time, with her finger under each, while her mother browsed cookbooks." },
        { n: "Every time she finished a page she looked up to check that somebody had noticed. Solar made sure that somebody had, every time." }
      ] }
    ],
    openers: {
      4: "In April the door of Bookworms stood propped open with a dictionary nobody had bought in twenty years, and the smell of the cherry trees along the strip drifted in and mixed with the smell of paper.",
      5: "In May the light through the front window turned green and gold from the new leaves outside, and the shop was full of students looking for cheap textbooks and finding, instead, everything else.",
      6: "In June the rainy season got into everything, and Bookworms smelled of damp paper and Mitsuko's tea, and the pages of the oldest books went soft and wavy as if they were breathing.",
      7: "In July the old fan turned its head back and forth across the shop, and the strip outside shimmered with heat, and nobody hurried, least of all the books.",
      8: "In August the strip went quiet and half the shops pulled their shutters down for the holidays, but Bookworms stayed open, dim and cool and smelling of dust, with Daifuku asleep in the window.",
      9: "In September the light came in lower and longer, and the summer-reading crowd vanished overnight, and Bunkichi put the books about going back to things on the table by the door.",
      10: "In October the evenings came early, and the lamp over the counter went on before closing, and the shop had the warm, sleepy smell of paper that has spent a whole summer in the sun.",
      11: "In November the strip smelled of roasted sweet potatoes from the cart outside, and the paraffin heater came out of the back room, ticking, and people lingered longer between the shelves.",
      12: "In December the windows fogged at the edges, and Mitsuko put a pine branch on the counter, and people came in looking for books to give, which Bunkichi said was the best reason there was to buy one.",
      1: "In January the shop was cold until noon and the heater ticked all day, and the strip outside was gray and bright and full of people in their good coats on the way back from the shrine."
    }
  },
  /* ── Tutoring (the Sakamoto apartment by the river). Regulars: Kenta; Mrs. Sakamoto, who works evenings; Hana, the
     eight-year-old from next door who is sent over on Wednesdays; Daichi, Kenta's friend, who keeps needing an eraser.
     Arc: the English recitation contest. ── */
  tutor: {
    cast: { kenta: 'Kenta', sakamoto: 'Mrs. Sakamoto', hana: 'Hana', daichi: 'Daichi' },
    shifts: [
      { id: 'tu-s-book-covers', months: [4, 5], scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The new school year had come home in a stack on the low table, a dozen fresh textbooks with their spines still stiff, and beside them Mrs. Sakamoto had left last year's wall calendar, a pair of scissors, a roll of tape, and a note that said *Covers please!! He will say he doesn't need them. He needs them.*" },
        { s: 'kenta', t: "I don't need them." },
        { s: 'kenta', t: "Nobody covers their books anymore. It's a mom thing. It's a thing moms invented to feel like the year started." },
        { n: "The calendar was the kind banks gave away, twelve months of famous Japanese gardens, and March was a moss garden so green it almost glowed, and it was, as far as Solar was concerned, going on the math book." },
        { choose: [
          { t: "(Cover every book neatly, corners folded the proper way.)", stat: { proficiency: 1 }, then: [
            { n: "She did all twelve while he did the first page of homework, folding the corners into crisp little triangles the way Mitsuko at the bookstore wrapped parcels, and by the end he had stopped pretending not to watch and was holding the history book up to the lamp, turning it to see the clean edges." },
            { s: 'kenta', t: "...It's fine. It's whatever. The moss one's okay." }
          ] },
          { t: "(Cover them, then let him draw whatever he wants on the backs.)", stat: { charm: 1 }, then: [
            { n: "By eight o'clock every textbook had a robot on the back of it, each robot more heavily armed than the last, the English book's robot shooting at a large letter K, and Kenta had done two pages of math in between robots without seeming to notice he was doing them." }
          ] }
        ] },
        { n: "Outside the balcony door the river was running high and fast with the spring rain from upriver, and the cherry trees on the far bank had gone past their best and were letting the petals go onto the water, where they drifted down toward the bay in long pale rafts." },
        { s: 'kenta', t: "Don't tell her I said the moss one's okay." }
      ] },
      { id: 'tu-s-hana', days: [3], scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "On Wednesdays, it turned out, the girl from next door came over, because her mother worked the same evening shift as Mrs. Sakamoto, and Mrs. Sakamoto had agreed to this arrangement at some point without mentioning it to anybody, least of all Kenta." },
        { n: "Hana was eight, wore her hair in two high bunches that bounced when she talked, which was always, and arrived with a pencil case shaped like a strawberry and a sheet of homework that turned out on inspection to be a drawing of a horse." },
        { s: 'hana', t: "Teacher, what's a quadratic. Kenta-nii said it's a monster that eats children." },
        { s: 'kenta', t: "It is. It's going to eat you. Go home." },
        { choose: [
          { t: "(Give Hana her own math problem, a real one, her size.)", stat: { kindness: 1 }, then: [
            { n: "It was about sharing twelve strawberries between three horses, and she solved it with her tongue between her teeth and drew all twelve strawberries and all three horses to prove it, and then demanded a harder one, and then one harder than that, until she was doing the same kind of problem as the first page of Kenta's old workbook and Kenta had gone very quiet." },
            { s: 'kenta', t: "...She's not that good. She's average. She's an average eight." }
          ] },
          { t: "Kenta, explain it to her. If you can.", stat: { charm: 1 }, then: [
            { n: "He was outraged and then, slowly, interested, and the explanation he gave Hana was wrong in two places and right in the place that mattered, and she listened to the whole thing with enormous seriousness and then asked whether the monster had a name." },
            { s: 'kenta', t: "...X. The monster's called X. You find out how big it is and then it can't eat you." },
            { n: "Which was, Solar thought, honestly better than how her own teacher had put it." }
          ] }
        ] },
        { n: "Hana's mother came for her at half past eight, apologizing in the doorway, and Hana bounced out still talking about X, and the apartment was suddenly so quiet that you could hear the refrigerator and the river." },
        { s: 'kenta', t: "She's so loud. Every week." },
        { n: "He'd kept the strawberry problem, though. She saw him slide it into the back of his workbook, next to where he used to hide the tests." }
      ] },
      { id: 'tu-s-blackout', months: [6, 7, 8, 9], weather: ['rain'], scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The storm had been building over the bay all afternoon, the sky going the color of a bruise, and twenty minutes into fractions a fork of lightning came down somewhere across the river so close that the thunder arrived at the same moment, and every light in the building went out at once." },
        { n: "In the dark, the rain was suddenly enormous, roaring on the balcony rail. Somewhere above them someone's baby started crying. Across the table, very calmly, Kenta said that he was not scared, and that he had simply decided to sit closer to the table." },
        { s: 'kenta', t: "There's a flashlight. Somewhere. In a drawer. One of the drawers." },
        { n: "There was, in the third drawer, along with a box of birthday candles and a screwdriver and a single chopstick, and she propped it on the table pointing at the ceiling so the room filled with a dim gray light, and they looked at each other across the fractions like two people in a cave." },
        { choose: [
          { t: "(Count the seconds between flash and thunder. Work out how far away it is.)", stat: { knowledge: 1 }, then: [
            { n: "Three seconds. One kilometer. Six seconds, two. She showed him how, and he got very serious about it, counting out loud under his breath with his eyes on the balcony door, and as the gaps got longer he relaxed by visible degrees, as if the storm were a dog backing away from him, and by the time it was eleven seconds he was doing the math in his head faster than she was." }
          ] },
          { t: "(Tell him a ghost story by flashlight. A stupid one.)", stat: { courage: 1 }, then: [
            { n: "She did one about a ghost who haunted a school and was mostly upset about the state of the bathrooms, with a lot of dramatic pauses timed against the thunder, and he said it was the worst ghost story he had ever heard, and then said what happened next, and then made her tell it again from the start when the lights didn't come back." }
          ] }
        ] },
        { n: "The power came back at quarter past eight with a hum and a click and the refrigerator shuddering awake, and the room was suddenly too bright, and they both squinted at the fractions as if they'd never seen them before." },
        { s: 'kenta', t: "If you tell anybody I sat closer to the table I'll fail every test on purpose." }
      ] },
      { id: 'tu-s-summer-project', months: [7, 8], scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The summer homework packet was the thickness of a phone book and Kenta had done none of it, but he did have a jar on the windowsill full of river water, brown and faintly gold, with a layer of silt settling at the bottom, and he announced that it was his independent research project and that it was going to be the best one in the class." },
        { s: 'kenta', t: "Why is the river brown. That's the question. Everyone thinks it's dirty, but I don't think it's dirty. I think it's something else." },
        { s: 'kenta', t: "I don't know what else. That's why it's research." },
        { choose: [
          { t: "(Help him design an actual experiment with three jars.)", stat: { knowledge: 1 }, then: [
            { n: "Three jars, three places along the bank, labeled with tape, shaken and left to settle and measured with a ruler every night, and he wrote it all out in a table so neat she wondered who'd swapped him, and by the end of the evening they had a hypothesis about mud from the hills upstream that he was prepared to defend to the death." }
          ] },
          { t: "(Take the jar out on the balcony and look at it in the last of the light.)", stat: { kindness: 1 }, then: [
            { n: "They stood out there with it held up between them, the sun going down behind the far bank, and the light came through the jar and turned the water the color of strong tea, with tiny bright flecks turning slowly in it, and he said quietly that it looked like a snow globe, and then looked at her to make sure she wasn't going to laugh, and she wasn't." }
          ] }
        ] },
        { n: "Down on the river path the evening joggers went by, and a man was flying a kite in the hot wind off the water, and the cicadas in the trees along the bank were so loud the whole riverbank seemed to be ringing." },
        { s: 'kenta', t: "Don't tell her about the packet. I'm going to do the packet. After the river." }
      ] },
      { id: 'tu-s-daichi-eraser', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "At ten past seven the doorbell rang, and it was a boy Kenta's age with a buzz cut and a baseball cap on backwards, standing on the walkway outside with the air of someone who had rehearsed a sentence on the way up the stairs." },
        { s: 'daichi', t: "Hi. I'm Daichi. I'm in Kenta's class. I need to borrow an eraser. Mine's broken." },
        { s: 'kenta', t: "He has like nine erasers. He collects them. He has one shaped like a pork cutlet." },
        { n: "Daichi was, within five minutes, sitting at the low table. Within ten he had his own workbook open. Within fifteen it had become extremely clear that the reason he had come was that he was much, much worse at math than Kenta, and knew it, and had heard about the tutor." },
        { choose: [
          { t: "Kenta. You explain number four to him.", stat: { kindness: 1 }, then: [
            { n: "Kenta did it with the long-suffering contempt of a great professor forced to teach a village school, and Daichi didn't mind at all, and somewhere in the middle of it Kenta started being patient without noticing, saying it again a different way when it didn't land, and Solar sat back with her tea and let them have it." }
          ] },
          { t: "(Turn the rest of the hour into a competition. Loser washes the cups.)", stat: { charm: 1 }, then: [
            { n: "It got very loud. Daichi lost, but only by one, and only because he spent four minutes arguing that his seven was a one, and Kenta was so pleased with himself he washed the cups anyway, which Solar suspected was the first time in his life he had washed a cup without being asked." }
          ] }
        ] },
        { s: 'daichi', t: "Can I come next time too? I'll bring my own eraser." },
        { s: 'kenta', t: "No. ...Maybe. Ask her, it's her job." },
        { n: "He didn't give the eraser back, Solar noticed. He didn't give back the one he borrowed the next week, either." }
      ] },
      { id: 'tu-s-my-hero', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The English assignment was an essay of one hundred words, title: *My Hero*, and Kenta had written the title and his name and then, below it, a great deal of nothing, which he had been staring at for twenty minutes with his chin on his fist." },
        { s: 'kenta', t: "Can I do a baseball player. Everybody's doing a baseball player. I'll do a baseball player." },
        { n: "He wrote two sentences about a baseball player. Then he crossed them out. Then he wrote something else, quickly, with his arm curled around the page so she couldn't see it, the way kids in her own class hid their answers on a test, and he kept going, longer than one hundred words, longer than two, the pencil going hard enough she could hear it." },
        { choose: [
          { t: "(Don't look. Wait until he shows you.)", stat: { kindness: 1 }, then: [
            { n: "He didn't show her. At the end of the hour he folded the essay in half and put it in his bag and said he'd do the grammar himself. She found out weeks later, from a note on the refrigerator in Mrs. Sakamoto's handwriting, that it had gotten a sticker and a comment, and that the comment said *Your mother must be very proud*, and that Mrs. Sakamoto had underlined it three times." }
          ] },
          { t: "I'll only check the grammar. I won't read it.", stat: { knowledge: 1 }, then: [
            { n: "He gave it to her with his face turned to the window, and she fixed eleven mistakes without reading a single sentence, which was very difficult and which she did anyway, except that the first line slipped in through the side of her eye before she could stop it, *My hero works at night*, and she kept her face perfectly still and fixed the spelling of *hospital*." }
          ] }
        ] },
        { s: 'kenta', t: "It's just homework. It's not about anything." },
        { n: "Outside the river was black and the far bank was all lit windows, every one of them someone's kitchen, and she said, of course it isn't, and he said, good, and they did fractions." }
      ] },
      { id: 'tu-s-curry', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "There was curry in a pot on the stove with a note taped to the lid, *For both of you. 5 minutes low heat. STIR.*, and Kenta, who had decided he was in charge of dinner, turned the heat all the way up, walked away, and came back to a smell like a building on fire." },
        { s: 'kenta', t: "It's fine. It's only the bottom. The bottom doesn't count." },
        { n: "The bottom counted. They opened the balcony door to let the smoke out and stood scraping what could be saved into two bowls, and it was roughly two-thirds of the curry, maybe three-fifths, which was how, standing by the stove with the wooden spoon, they ended up doing fractions." },
        { choose: [
          { t: "(Make him calculate exactly how much curry he burned.)", stat: { knowledge: 1 }, then: [
            { n: "He worked it out on the back of the note, in grams, using the scale from the kitchen drawer and an amount of spite that bordered on the academic, and it came out at thirty-eight percent, and he was so pleased with the precision of it that he forgot to be embarrassed about the fire." }
          ] },
          { t: "(Show him how to save the rest. Rice, egg, low heat.)", stat: { proficiency: 1 }, then: [
            { n: "She showed him how to stretch it, a bit of water, an egg cracked in at the end, a lot of rice, and stood beside him while he stirred, actually stirred, with his whole arm, and it came out fine, better than fine, and he ate two bowls and said it was because of his technique." }
          ] }
        ] },
        { s: 'kenta', t: "Don't tell her about the pot." },
        { s: 'solar', f: 'neutral', t: "She's going to smell it from the elevator." },
        { s: 'kenta', t: "...Then tell her it was you." }
      ] },
      { id: 'tu-s-sports-day', months: [9, 10], scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "It had been sports day at Kenta's school, and he came to the table moving like a man of ninety, lowering himself onto the cushion one joint at a time, with a large bandage on one knee and the particular silence of somebody who did not want to be asked how the relay went." },
        { n: "Mrs. Sakamoto had left a note: *He fell. Do not ask about the relay.* and then, underneath, smaller: *He was very fast before he fell.*" },
        { s: 'kenta', t: "We were winning. I was going to pass Daichi's brother. I was right there. And then the ground just. Moved." },
        { choose: [
          { t: "Show me. On paper. Where everyone was when you fell.", stat: { knowledge: 1 }, then: [
            { n: "He drew the track and the runners and himself and the exact spot, and then, because she asked, the distances and the times, and they worked out his speed from the times on the program, and it turned out that for one leg of one relay he had been, in a strictly mathematical sense, the fastest boy in his year, right up until the moment he wasn't." },
            { s: 'kenta', t: "...Fastest in my year. Write that down. Underline it." }
          ] },
          { t: "(Tell him about the worst fall you ever had. Make it up if you have to.)", stat: { charm: 1 }, then: [
            { n: "She didn't have to make it up. There had been a staircase at Gekkoukan, the first week, and an armful of handouts, and a great many first-years watching, and by the time she got to the part where the handouts went down the stairwell like a flock of birds he'd forgotten about his knee entirely." }
          ] }
        ] },
        { n: "When she left he walked her to the door, limping heroically, and stood in the doorway in the yellow light of the hall, a boy with a bandaged knee and his hair sticking up at the back." },
        { s: 'kenta', t: "Next year I'm not falling." }
      ] },
      { id: 'tu-s-kotatsu', months: [12, 1], scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The low table had become a kotatsu for the winter, the heavy quilt spread over it and the heater humming underneath, and there was a bowl of mikan in the middle and a stack of New Year's postcards Kenta was supposed to be writing to his teachers, and the whole apartment smelled of orange peel and warm cloth." },
        { n: "Getting any work done at a kotatsu was, Solar had come to understand, like getting work done in a bath. The heat came up from the legs and settled into the spine and made the whole idea of verbs seem very far away." },
        { s: 'kenta', t: "What do you even write. Thank you for this year, please look after me next year. That's what everybody writes. They must get a hundred of the same one." },
        { choose: [
          { t: "(Help him write one true sentence to each teacher.)", stat: { kindness: 1 }, then: [
            { n: "It took a long time, and two mikan each, and he crossed out a lot, but in the end the math teacher got *Thank you for not giving up on number seven*, and the English teacher got *I still think the K in knight is fake but I can spell it now*, and the homeroom teacher got a robot." }
          ] },
          { t: "(Write them in your best calligraphy while he dictates.)", stat: { proficiency: 1 }, then: [
            { n: "Her brush-pen handwriting turned out to be much better than she'd expected, which was a strange thing to learn about yourself at a kotatsu, and he dictated in a lordly voice, as if to a court secretary, and they did nine postcards in forty minutes and he said it was the most efficient New Year in the history of his family." }
          ] }
        ] },
        { n: "By eight he had fallen asleep with his cheek on the table and a mikan in his hand, mouth open, the postcards in a neat stack by his elbow, and she sat there with the quilt over her knees listening to the heater hum and the river outside, too warm to move, until she heard Mrs. Sakamoto's key in the lock." },
        { s: 'sakamoto', t: "Oh, look at him. Don't wake him. Have a mikan. Have three, we have far too many. Everybody gave us mikan this year." }
      ] },
      { id: 'tu-s-mrs-sakamoto', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "Mrs. Sakamoto came home an hour early, which had never happened, and stood in the doorway with her shoes still on and her coat half off, looking at the two of them at the table as though she'd forgotten what her own living room looked like with the lights on." },
        { s: 'sakamoto', t: "They sent me home. The ward was quiet. I don't know what to do with myself. Don't stop, don't stop, pretend I'm not here." },
        { n: "She sat at the far end of the table with a cup of tea she didn't drink and watched Kenta do his English, chin on her hand, and Kenta, who could feel her watching, did his English better than he had done it all year, sitting up very straight, saying the words out loud the way Solar had taught him, every *knight* with a careful silent *K*." },
        { n: "By the end of the hour Mrs. Sakamoto had fallen asleep where she sat, her head tipped against the wall, her tea gone cold, her hospital lanyard still around her neck." },
        { choose: [
          { t: "(Get the blanket from the sofa and put it over her.)", stat: { kindness: 1 }, then: [
            { n: "Kenta watched her do it, and didn't say anything, and when she sat back down he moved his workbook a little further from his mother so the pages wouldn't rustle so much, and did the last two problems in the smallest handwriting she had ever seen." }
          ] },
          { t: "(Finish the lesson in whispers so she can sleep.)", stat: { proficiency: 1 }, then: [
            { n: "They did the whole last page in whispers, heads together over the table, which made every answer feel like a secret, and Kenta got so into it that when he got the last one right he punched the air in total silence, and nearly knocked over his mother's tea, and caught it, and they both froze, and she slept on." }
          ] }
        ] },
        { s: 'kenta', t: "She's always tired. She's always tired and she still makes the curry." },
        { n: "He said it to his workbook, very low, not to Solar at all. She let it be that way. At the door, leaving, she looked back, and he was sitting very still at the table beside his mother, keeping watch, as if the blanket might need him." }
      ] },
      { id: 'tu-s-emergency', scene: [
        { place: 'Iwatodai · Riverside', time: 'Evening' },
        { phone: [
          { from: 'kenta', t: "can you come early" },
          { from: 'kenta', t: "its an emergency" },
          { from: 'solar', t: "what happened. are you ok" },
          { from: 'kenta', t: "theres a thing in the kitchen" },
          { from: 'kenta', t: "its looking at me" }
        ], contact: 'Kenta' },
        { n: "She was already on the river path, ten minutes early, and she ran the rest of the way." },
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "She took the stairs two at a time and found him standing on a dining chair in the middle of the living room, holding a rolled-up magazine and a can of insect spray, his eyes fixed on the kitchen doorway with the grim focus of a samurai at the end of a long film." },
        { s: 'kenta', t: "It's under the fridge. It went under the fridge. It's big. It's the size of a mouse. It might be a mouse." },
        { n: "It was not a mouse. It came out from under the refrigerator as she walked in, glossy and brown and moving with the unhurried confidence of something that had lived on this planet a great deal longer than people, and Kenta made a noise she had not known a human boy could make." },
        { choose: [
          { t: "(Deal with it. Calmly. With the magazine.)", stat: { courage: 1 }, then: [
            { n: "It took one swing and some chasing and a slightly undignified moment on her knees by the rice cooker, and then it was over, and she carried it out to the walkway wrapped in a sheet of newspaper while Kenta stood on the chair and said nothing, with enormous respect." }
          ] },
          { t: "(Catch it under a cup and put it outside.)", stat: { kindness: 1 }, then: [
            { n: "One cup, one postcard slid underneath, and a long walk to the stairwell with the cup held out in front of her at arm's length while Kenta followed six steps behind narrating, and it went off down the stairs into the evening as though nothing had happened, which for it, she supposed, was true." },
            { s: 'kenta', t: "It's going to come back. It knows where we live now." }
          ] }
        ] },
        { s: 'kenta', t: "You can't tell Daichi. You can't tell Hana. You can't tell her." },
        { n: "They did forty minutes of English after that, and every time the refrigerator hummed louder for a second he lifted both feet off the floor." }
      ] }
    ],
    beats: [
      { id: 'tu-arc-1', at: 2, after: '4/20', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "Mrs. Sakamoto was home, for once, still in her work clothes at the kitchen counter cutting a cabbage, and she was glowing about something, and Kenta was at the low table with his face in his arms, and those two facts were, Solar understood at once, the same fact." },
        { s: 'sakamoto', t: "Tell her. Kenta. Tell her what your teacher said." },
        { s: 'kenta', t: "No." },
        { s: 'sakamoto', t: "His English teacher put his name forward for the recitation contest. In the autumn. One student from each class. They picked him." },
        { s: 'kenta', t: "She didn't pick me, she picked the person who wasn't paying attention when she asked for volunteers. That's different. That's a trap." },
        { n: "He lifted his head long enough to give Solar a look of total betrayal, as if she had personally arranged it, and she understood that in a sense she had, because three months ago he had refused to read a single sentence out loud in English and now, apparently, somebody at school had heard him do it." },
        { s: 'kenta', t: "You have to get me out of it. You're the tutor. Say I'm not ready. Say I'm sick. Say I have a condition." },
        { choose: [
          { t: "You read that whole passage in the rain. You're ready enough.", stat: { courage: 1 }, then: [
            { s: 'kenta', t: "That was in my house. Nobody was there. That was you." },
            { s: 'solar', f: 'serious', t: "Then we practice until it's like I'm the only one there." },
            { n: "He put his face back in his arms. But he didn't say no, and from the counter, chopping, Mrs. Sakamoto made a small, careful, delighted sound she pretended was a cough." }
          ] },
          { t: "(Ask him what he'd want to say, if he had to say something.)", stat: { kindness: 1 }, then: [
            { s: 'kenta', t: "...It doesn't work like that. You don't get to choose. They give you a passage. Or you write a speech. Two to three minutes." },
            { s: 'kenta', t: "I'm not writing a speech. What would I even write a speech about." },
            { n: "But he said it slower than he said things he meant, and his eyes went, for just a second, to the balcony door and the river beyond it, and then back to the table." }
          ] }
        ] },
        { n: "Mrs. Sakamoto put the cabbage in the pan and the room filled with sizzling and steam, and she said Solar was staying for dinner, it was decided, she had made too much, and she always made too much, and that was a rule of the house." },
        { n: "Kenta said nothing all through the first bowl. Halfway through the second he asked, without looking up, how long two minutes was in English, in words, roughly. Solar told him. He nodded, and went back to his rice, and that was the whole conversation, and his mother had to get up and do something at the sink for quite a while." }
      ] },
      { id: 'tu-arc-2', at: 5, after: '7/1', prev: 'tu-arc-1', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "He had written a speech. He told her this at the door, before she was inside, in the voice of someone admitting to a crime, and then added that it was bad and that she wasn't allowed to say anything about it, and then handed her three sheets of lined paper folded into sixteenths." },
        { n: "It was called *My River*. It was about the river outside the balcony, which he had watched every evening of his life, and which went brown after rain and gold at sunset and black at night, and which ran past the station and the school and under the Moonlight Bridge and into the bay and then into the sea, and which, he had written, *does not care about tests*." },
        { n: "It was two minutes and forty seconds long, read slowly. The grammar was a war zone. It was, Solar thought, standing in the genkan with her shoes half off, one of the best things she had ever read." },
        { s: 'kenta', t: "Say it's bad. Say it's bad so I can do a passage from the book instead." },
        { choose: [
          { t: "It's good. We're fixing the grammar and keeping every single idea.", stat: { knowledge: 1 }, then: [
            { n: "They spent the whole evening on it, line by line, her pencil and his eraser, and he fought for every word she tried to change, and won about half the fights, and she let him win a few he should have lost, because they were his words and it was his river." }
          ] },
          { t: "(Take it out on the balcony and read it to the river.)", stat: { courage: 1 }, then: [
            { n: "She read it out loud, the whole thing, in the hot evening air with the cicadas going and a man fishing off the bank below, and when she got to *does not care about tests* she heard Kenta, behind her in the doorway, laugh once, very short, surprised, the way you laugh at something you didn't know was funny until you heard someone else say it." },
            { s: 'kenta', t: "...Okay. My turn. Move." }
          ] }
        ] },
        { s: 'kenta', t: "Don't tell her yet. My mom. Not till it's good. If she reads it now she'll cry, and then I'll have to watch her cry about grammar." },
        { s: 'solar', f: 'neutral', t: "My lips are sealed. Do the second paragraph again." },
        { n: "He groaned like the floor had opened under him, and did the second paragraph again, and then a third time without being asked, a little louder each time, his eyes on the water." },
        { n: "He practiced it on the balcony after that, every night she came, and she gathered from the downstairs neighbor, who stopped her once on the stairs, that he practiced on the nights she didn't come too, to the river, out loud, with his hands on the rail." },
        { n: "The neighbor said she didn't understand a word of it. She said it sounded very important. She said she'd started leaving her own window open, to listen." }
      ] },
      { id: 'tu-arc-3', at: 9, after: '10/23', prev: 'tu-arc-2', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The class rounds had been on Thursday. Kenta had won his. Then the school round had been on Friday morning, in the gym, in front of the whole school, and he had won that too, which meant that in January he would be going to the city contest at the civic hall in Port Island, with a microphone, and judges, and a stage, and other people's parents, and he had not said a single word about any of it since." },
        { n: "Mrs. Sakamoto had told her all this on the phone, very fast, and then said, *He's being strange. Be normal. Please be normal.*" },
        { n: "Solar arrived to find an audience. Hana was sitting cross-legged on the floor in front of the balcony door with her strawberry pencil case in her lap. Daichi was on the sofa with his cap on backwards, eating crackers. Mrs. Sakamoto had taken the night off. They were all looking at her." },
        { s: 'hana', t: "We're the judges. Kenta-nii said it doesn't count unless there are judges." },
        { s: 'kenta', t: "I didn't say that. I said it's different with people. I didn't say get people." },
        { n: "He stood in front of the balcony door with the dark river behind him and three sheets of paper he didn't need anymore in his hand, and opened his mouth, and nothing came out. Nothing at all. She watched it happen, the color going out of his face, his eyes fixed on a point just above Daichi's head, and Daichi stopped chewing." },
        { choose: [
          { t: "(Stand up and do the first line yourself, in your worst accent.)", stat: { courage: 1 }, then: [
            { n: "*Zis is my liver.* Daichi choked on a cracker. Hana screamed with laughter. Mrs. Sakamoto put her hand over her mouth. And Kenta looked at her with an expression of such total disgust that the color came straight back into his face, and he said, *It's RIVER*, very loudly, and then, because he was already talking, he kept going." }
          ] },
          { t: "(Go and stand on the balcony, behind him, where he can't see the others.)", stat: { kindness: 1 }, then: [
            { n: "She slid the door open and stepped out into the cold and stood at the rail with her back to the room, looking at the water, and after a long second she heard him start behind her, quietly, talking to the river the way he'd done it all summer, and his voice got louder sentence by sentence until it filled the whole apartment and spilled out over her into the dark." }
          ] }
        ] },
        { n: "Two minutes and forty-one seconds. When he got to *does not care about tests* Daichi said *yeah!* out loud, involuntarily, like at a ballgame. When he finished there was a silence, and then Hana stood up and clapped with her whole body, and then everyone did." },
        { s: 'kenta', t: "It was bad. I said *the* wrong twice." },
        { s: 'sakamoto', t: "It was perfect. It was perfect. I'm going to make tea. Nobody look at me." },
        { n: "Daichi asked if he could be in the audience at the civic hall, and Hana said she was coming whether anybody liked it or not, and Kenta said fine, whatever, everyone can come, it doesn't matter, and then looked at Solar, and didn't ask, and didn't have to." }
      ] },
      { id: 'tu-arc-4', at: 13, after: '1/25', prev: 'tu-arc-3', scene: [
        { place: 'Tutor · The Sakamoto Apartment', time: 'Evening' },
        { n: "The certificate was on the refrigerator, held up by four magnets so it couldn't possibly fall, right in the middle where you'd see it before you saw anything else in the kitchen, and it said, in very formal brush lettering, *Special Award for Spirit*." },
        { n: "He hadn't won. A girl from a private school with a recitation about the moon landing had won, and a boy who'd lived in Canada had come second, and Kenta had come out on the stage at the civic hall in a borrowed blazer two sizes too large and said every word of *My River* exactly the way he'd practiced it on the balcony, with only one wrong *the*, and the judges had made up a special award on the spot, or at least nobody had heard of it before." },
        { s: 'kenta', t: "It's a made-up award. They felt sorry for me because my blazer was big." },
        { s: 'sakamoto', t: "One of the judges came and found me afterward. She asked me where the river was. She said she wanted to go and look at it." },
        { n: "Kenta went red to the ears and became very busy with his math workbook, which had a new robot on the cover." },
        { n: "Mrs. Sakamoto had made curry, without burning any of it, and they ate it at the low table with Hana, who had invited herself, and Daichi, who had come for an eraser, and when the plates were cleared Kenta tore a page out of the back of his sketchbook, folded it in half, and pushed it across the table at Solar without looking at her." },
        { n: "It was the robot. The same robot as always, the one he'd been drawing in the margins since the first night she came. But it wasn't shooting the lighthouse anymore. It was standing in front of it, on the rocks, with its arms out, between the lighthouse and a very large, very angry wave." },
        { choose: [
          { t: "(Say thank you. Only that.)", stat: { kindness: 1 }, then: [
            { s: 'kenta', t: "It's not a big deal. It's just a robot. I had extra paper." }
          ] },
          { t: "Good job.", stat: { charm: 1 }, then: [
            { s: 'kenta', t: "I told you. If you say good job I'll never do it again." },
            { s: 'solar', f: 'happy', t: "You already did it." },
            { s: 'kenta', t: "...Still." }
          ] }
        ] },
        { n: "She put it in the back of her own notebook, carefully, flat, and said she'd see him Wednesday, and he said whatever, see you Wednesday, and at the door he said, *Careful on the stairs, they're icy*, in his mother's exact voice and with her exact frown, without seeming to notice he'd done it." },
        { n: "Outside, the river was running dark and steady under the winter stars, past the station and the school and under the bridge toward the bay, not caring about anything at all, and Solar walked home along it with her hands in her pockets and the folded robot against her ribs, warm the whole way." }
      ] }
    ],
    quiet: [
      { id: 'tu-q-robot', scene: [
        { n: "Tonight's robot, in the margin of the English workbook, had a cape." },
        { s: 'kenta', t: "It's not a cape. It's a heat shield. Capes are stupid." },
        { n: "It was a cape." }
      ] },
      { id: 'tu-q-river', scene: [
        { n: "Kenta stopped in the middle of a problem and looked out at the river." },
        { s: 'kenta', t: "How long do you think it takes the water to get from here to the sea?" },
        { choose: [
          { t: "(Work it out with him. Speed, distance, time.)", stat: { knowledge: 1 }, then: [
            { n: "They used the map on his phone and a leaf they watched from the balcony, timed against the bridge supports, and decided on about four hours, and he said that was a lot less than he thought, and seemed both pleased and a little sad about it." }
          ] },
          { t: "Longer than this problem. Do the problem.", then: [
            { s: 'kenta', t: "That's not an answer. That's a threat." }
          ] }
        ] }
      ] },
      { id: 'tu-q-fridge-note', scene: [
        { n: "There was a note for her on the refrigerator in Mrs. Sakamoto's round handwriting." },
        { n: "*Tea in the blue tin. The rice crackers are Kenta's, but he will offer you one. If he doesn't offer, take two. Thank you for everything.*" },
        { n: "He offered. She took two anyway." }
      ] },
      { id: 'tu-q-wall-quiz', scene: [
        { n: "Through the wall, the neighbor's television was playing a quiz show, loud enough that every question came through clear." },
        { n: "Kenta answered three of them out loud before the contestants did, all correct, and then went back to his own homework with the face of a man who has made his point and does not need to discuss it." }
      ] },
      { id: 'tu-q-hana-drawing', scene: [
        { s: 'hana', t: "I drew you. That's you. That's your hair." },
        { n: "The drawing showed a tall figure with an enormous head of scribbled hair standing next to a smaller figure with a frown so big it took up the whole face. The smaller one was labeled KENTA-NII (ANGRY)." },
        { s: 'kenta', t: "That's not even what I look like." }
      ] },
      { id: 'tu-q-daichi-text', scene: [
        { n: "Kenta's phone buzzed on the table. He read it and turned it face down." },
        { s: 'kenta', t: "Daichi wants the answer to number four. Should I tell him?" },
        { choose: [
          { t: "Tell him how to get it. Not the answer.", stat: { kindness: 1 }, then: [
            { n: "He typed a very long text with a lot of steps and one drawing made of letters. A minute later the reply came back: *bro what*." }
          ] },
          { t: "Your call.", then: [
            { n: "He thought about it and texted back a single word. She didn't ask what it was. He looked very pleased with it." }
          ] }
        ] }
      ] },
      { id: 'tu-q-flashcards', scene: [
        { n: "They did the kanji flashcards at speed, Solar holding them up, Kenta calling them out, until he got eleven in a row and she accidentally held one up upside down." },
        { s: 'kenta', t: "That's cheating. That's cheating against me. Eleven still counts." }
      ] },
      { id: 'tu-q-eraser', scene: [
        { n: "His eraser was shaped like a pork cutlet and he refused to use it." },
        { s: 'kenta', t: "It's Daichi's. You don't use a guy's cutlet. That's a rule." },
        { n: "He erased with the end of his pencil instead, until it was down to the metal, and then sighed, and used the cutlet very gently on the corner only." }
      ] },
      { id: 'tu-q-word', scene: [
        { s: 'kenta', t: "What's the English word for the feeling when you're at the top of the stairs and you think there's one more step but there isn't." },
        { n: "Solar thought about it for a long time and admitted that she didn't think English had one. He seemed delighted. He wrote *English: no word* in the back of his workbook, under a growing list." }
      ] },
      { id: 'tu-q-clock', scene: [
        { n: "The clock over the television ticked toward the end of the hour." },
        { s: 'kenta', t: "Four minutes. Three minutes fifty. You can't give me a new problem with under four minutes. It's in the rules." },
        { n: "She gave him a new problem. He did it in two minutes, out of pure offense." }
      ] },
      { id: 'tu-q-tea', scene: [
        { n: "Halfway through the hour Kenta got up without a word, went to the kitchen, and came back with two cups of tea." },
        { n: "He put one down by her elbow and went back to his workbook as if nothing had happened. It was much too strong. She drank every drop of it." }
      ] },
      { id: 'tu-q-door', scene: [
        { n: "At the end of the hour he walked her to the door, as always, and stood holding it open with one sock on the walkway." },
        { s: 'kenta', t: "Same time next time." },
        { n: "He always said it like he'd thought of it himself. She always let him." }
      ] }
    ],
    openers: {
      4: "In April the river outside the Sakamotos' balcony ran high and quick with spring rain from upriver, and the cherry trees on the far bank let their petals go onto the water.",
      5: "In May the balcony door stood open in the evenings, and the smell of the river and somebody's grilled fish from downstairs came in over the low table and the workbooks.",
      6: "In June the rainy season fogged the balcony glass every evening, and the apartment smelled of damp umbrellas in the stand outside the door and the green tea Mrs. Sakamoto left in the pot.",
      7: "In July the cicadas along the riverbank were loud enough to hear over the electric fan, and the evenings stayed light until almost eight, gold on the water.",
      8: "In August the apartment was hot even after dark, and the fan turned back and forth over the low table, lifting the corners of the workbook pages one by one.",
      9: "In September the evenings started getting cool, and the river went dark a little earlier every week, and the lights of the far bank came on while they were still on the first page.",
      10: "In October the balcony door stayed shut, and the river smelled of fallen leaves when anyone opened it, and the light over the low table felt warmer than it had all summer.",
      11: "In November the apartment smelled of the kerosene heater, and the river was black by six, and Mrs. Sakamoto's coat hung on the hook by the door longer each evening before she left.",
      12: "In December the low table became a kotatsu, with a heavy quilt and a bowl of mikan in the middle, and the windows fogged so thickly the river was only a smear of lights.",
      1: "In January the stairwell of the building was icy and the walkway lamps buzzed in the cold, and inside the apartment the kotatsu hummed and the mikan bowl never seemed to empty."
    }
  },
  /* ── Flower stall (Paulownia Mall, by the fountain). Regulars: Mrs. Okada; Mr. Doi from the shoe shop next door, her
     neighbor and adversary of thirty-one years; Mr. Kume, who buys one stem every Thursday for his wife to name; Aya, an
     office worker who buys flowers for herself on payday. Arc: the tape measure. ── */
  flowers: {
    cast: { okada: 'Mrs. Okada', doi: 'Mr. Doi', kume: 'Mr. Kume', aya: 'Aya', flson: 'Customer', flgirl: 'Granddaughter', flgran: 'Old woman', flkid: 'Eldest', flguy: 'Young man', fllost: 'Little boy' },
    shifts: [
      { id: 'fl-s-mothers-day', months: [5], scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "The week before Mother's Day the stall turned red and pink from one end to the other, carnations in every bucket, carnations in the spare buckets borrowed from the shoe shop's back room without asking, and the line of customers wound around the fountain and back again like a queue for a ride." },
        { s: 'okada', t: "Carnations, carnations, carnations. Red for living, white for remembering. Don't mix them up. Ask if you're not sure. People don't mind being asked. They mind getting it wrong." },
        { n: "Most of the line was children, holding coins in hot fists, and most of the rest was grown sons in suits who had remembered that morning, and one man near the front was buying two bunches, which he explained, unprompted and at length, were for his mother and for his wife's mother, who needed to like him a great deal more than she currently did." },
        { s: 'flson', t: "Make hers bigger. No. The same. If hers is bigger my mother will find out. They talk. Make them exactly the same." },
        { choose: [
          { t: "(Count the stems out to the exact same number, and wrap them fast.)", stat: { proficiency: 1 }, then: [
            { n: "Fourteen and fourteen, identical paper, identical ribbon, done in under a minute while he watched with the eyes of a man watching a bomb defused, and then she did the next forty customers in the same rhythm, snip, wrap, tie, next, until Mrs. Okada stopped watching her hands and started watching the line." }
          ] },
          { t: "(Slow down for the kids. Let each one choose their own stem.)", stat: { kindness: 1 }, then: [
            { n: "It made the line twice as long. Every child stood in front of the bucket choosing one carnation from a hundred identical carnations with the gravity of a jeweler, and every one of them, when they'd chosen, held it up and showed her, and she said yes, that one, definitely, every time, and Mrs. Okada didn't hurry her once." }
          ] }
        ] },
        { n: "By four they had sold every red carnation in the stall and most of the pink, and Mrs. Okada sat on her stool with her eyes closed and her scissors in her lap, and said, without opening them, that she had now been somebody's mother approximately four hundred times today and she was exhausted." },
        { s: 'okada', t: "Go and buy yourself a juice. From the machine. My treat. Mothers buy juice." }
      ] },
      { id: 'fl-s-hydrangeas', months: [6, 7], weather: ['rain'], scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "Rain came down on the mall's glass roof all afternoon with a sound like gravel being poured very slowly, and almost nobody came, and the fountain went on splashing to itself in the empty plaza, and the stall was full of hydrangeas, great heavy heads of them in blue and violet and a pink so soft it was almost gray." },
        { s: 'okada', t: "The rainy-season flower. They're happiest when everyone else is miserable. I've always admired that in a flower." },
        { s: 'okada', t: "Do you know why some are blue and some are pink? It's the ground. Same plant, different dirt. Put a blue one in sweet soil and in two years it's pink. They become wherever they're planted." },
        { n: "Solar looked at the blue ones for a while after that, longer than she meant to, with the rain going over and the wet smell of stems rising out of the buckets." },
        { choose: [
          { t: "(Ask her to teach you the names of everything in the stall.)", stat: { knowledge: 1 }, then: [
            { n: "It took the rest of the afternoon, bucket by bucket, the common names and the formal ones and the ones Mrs. Okada had made up herself for flowers she had decided were rude, and by closing Solar could name all nineteen buckets, and Mrs. Okada tested her twice, and she got them all, and Mrs. Okada said it was beginner's luck in a tone that meant it wasn't." }
          ] },
          { t: "(Make a small arrangement of the gray-pink ones, just to see.)", stat: { proficiency: 1 }, then: [
            { n: "She did three stems in a jam jar with one stalk of something green and spiky to keep them honest, and put it on the corner of the counter, and it wasn't for sale and wasn't for anyone, and Mrs. Okada looked at it for a long time and then moved it four centimeters to the left, into the light, and said that was better." }
          ] }
        ] },
        { n: "At five a man came running in out of the rain with his jacket over his head and bought every blue one they had left, and said they were for his daughter's room, she was in bed with a cold, and she liked the color, and Mrs. Okada charged him for half." }
      ] },
      { id: 'fl-s-obon', months: [7, 8], scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "In the week of Obon the stall was white and yellow and pale purple, chrysanthemums and gentians and little bundles of bush clover, the flowers you took to the family altar or the grave, and the heat in the mall was heavy and slow, and the fountain was full of children sitting on the edge with their feet in the water." },
        { n: "An old woman came to the counter with a girl of about six hanging off her hand, and asked for the usual arrangement, white and yellow, for her husband's altar, and the little girl, tugging, said no, said Grandpa liked sunflowers, said he grew them on the balcony, said loudly that he would hate white ones." },
        { s: 'flgran', t: "Sunflowers aren't for Obon, sweetheart. There are rules about these things." },
        { s: 'flgirl', t: "Grandpa didn't care about rules. Grandpa ate ice cream for breakfast." },
        { choose: [
          { t: "(Make the proper arrangement, and tuck one small sunflower in the middle.)", stat: { kindness: 1 }, then: [
            { n: "Just one, a small one, its face no bigger than her palm, right in the center of the white and yellow, and the old woman looked at it for a long moment with her lips pressed together, and the girl looked at it and nodded once, firmly, like a foreman approving a job." },
            { s: 'flgran', t: "...He did eat ice cream for breakfast. Every Sunday. For forty years." }
          ] },
          { t: "(Make a proper one for the altar, and a separate sunflower for the girl.)", stat: { proficiency: 1 }, then: [
            { n: "A correct arrangement, white and yellow and gentian, tied the traditional way, and then a single tall sunflower wrapped in its own paper for the girl to carry, and the girl took it in both arms like a flag and announced that she would put it next to the other ones, where Grandpa could see it from the side." }
          ] }
        ] },
        { s: 'okada', t: "The dead have earned sunflowers if they want them. Who's going to argue? The rules? The rules never grew anything on a balcony." },
        { n: "The two of them went off across the plaza, the old woman slow and the girl tugging, and the sunflower bobbed above the crowd all the way to the escalator, and Solar watched it until it was gone, and only then noticed her throat was tight, and drank some water, and went back to the buckets." }
      ] },
      { id: 'fl-s-grandparents', months: [9, 10], scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "The cosmos had come in, pink and white and wine-red on long thin stems that moved at the slightest breath of air, so that the whole front of the stall seemed to be gently waving at people, and for Respect for the Aged Day three siblings arrived with a coin purse between them and an argument already in progress." },
        { s: 'flkid', t: "Grandma likes pink. I'm the oldest so I know. It's pink." },
        { n: "The middle one said red. The youngest, a boy of perhaps five, said nothing and pointed, with total silent conviction, at a bucket of orange marigolds that were not even for sale, they were for Mrs. Okada's own balcony." },
        { choose: [
          { t: "(Let each of them pick one stem. Three colors, one bunch.)", stat: { kindness: 1 }, then: [
            { n: "One pink cosmos, one red cosmos, one orange marigold that Mrs. Okada handed over the counter without a word, all tied together with a ribbon, and it looked, frankly, insane, and all three of them looked at it as if it were the most beautiful thing ever assembled by human hands." }
          ] },
          { t: "(Negotiate. You're very good at negotiating.)", stat: { charm: 1 }, then: [
            { n: "It took ten minutes and a written list and a vote that the youngest abstained from by sitting on the floor, but they settled on pink with red at the edges, a compromise the eldest described as basically pink, and the middle one described as basically red, and both of them went away certain they had won." }
          ] }
        ] },
        { s: 'okada', t: "My grandchildren live in Osaka. They send me a card. It has a printed photo of them on it and a printed message inside. Printed." },
        { s: 'okada', t: "I'd take a marigold from the floor over a printed card. Don't tell them I said that." },
        { n: "She went back to her stool and sat for a minute with her hands in her lap, and then got up again and started trimming stems that didn't need trimming, and Solar left her to it." }
      ] },
      { id: 'fl-s-new-year-pine', months: [12, 1], scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "For the New Year the stall smelled of pine instead of flowers, sharp and green and clean, with branches of it standing in the buckets beside red-berried nanten, bare plum branches with their buds just showing pink, and bundles of willow sprayed gold that Mrs. Okada said were vulgar and sold more of than anything else." },
        { s: 'okada', t: "Pine for long life. Plum for courage, because it blooms in the cold. Nanten because the name sounds like turning trouble around. Gold willow because people like gold." },
        { n: "She showed Solar how to make a small New Year arrangement for a front door, one pine branch, one plum, a sprig of nanten, a twist of red and white cord, and Solar's first one looked like a bird's nest that had been in an accident." },
        { choose: [
          { t: "(Make twenty more until they're right.)", stat: { proficiency: 1 }, then: [
            { n: "By the eighth they looked like something. By the fifteenth they looked like Mrs. Okada's. By the twentieth people were buying them out of her hands before she'd finished tying the cord, and her fingers smelled of resin for two days." }
          ] },
          { t: "(Make one slowly, for the dorm's front door.)", stat: { kindness: 1 }, then: [
            { n: "She took her time, pine and plum and nanten, getting it right, thinking about the dorm's front door, the heavy one that stuck in the cold, and Mrs. Okada watched and didn't charge her for it, and said she wanted a report on whether it had brought anyone any luck." }
          ] }
        ] },
        { n: "Next door, Mr. Doi had put a single pine branch in a vase in the shoe shop's window, which he had never done before, and which Mrs. Okada examined from her stool for a long, critical moment." },
        { s: 'okada', t: "That's my pine. He bought it from me last Thursday. He'd better not say he got it anywhere else." }
      ] },
      { id: 'fl-s-kume', days: [4], scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "Mr. Kume came on Thursdays at half past four, in a cardigan and a flat cap regardless of the season, and bought one stem, only ever one, a different flower every week, which he took home to his wife, who had to guess its name." },
        { s: 'kume', t: "She's never once been wrong. Eleven years. I've tried everything. I brought her a weed from the station once and she knew what the weed was called." },
        { s: 'kume', t: "You pick this week. Mrs. Okada's picked the last four. My wife knows Mrs. Okada's taste now. She says she can smell it." },
        { choose: [
          { t: "(Pick the strangest thing in the stall. Something even you can't name.)", stat: { knowledge: 1 }, then: [
            { n: "There was one stem of something in the back bucket that had come in with the order by accident, papery and purple and shaped like a firework, and Mrs. Okada had to look it up in her book to tell Solar what it was, and Mr. Kume took it away under his arm like a smuggler." }
          ] },
          { t: "(Pick the one you'd want, if someone were bringing you one.)", stat: { kindness: 1 }, then: [
            { n: "She took longer than she meant to and picked a single white cosmos, which wasn't hard to name at all, because it seemed to her the point wasn't really the guessing, and Mr. Kume looked at it and then at her for a moment and said that was a good one, that was a very good one, and paid in exact change." }
          ] }
        ] },
        { n: "He came back the next Thursday, and stood in front of the counter, and touched his cap." },
        { s: 'kume', t: "She got it. Of course she got it. But she asked who chose it. She said it wasn't Okada's sort of choice. She wants to know who you are." },
        { n: "He said it like a man passing on a message from very far away, and Solar didn't know what to say, and said thank you, and he nodded as if that answered his wife's question perfectly, and took that week's stem home." }
      ] },
      { id: 'fl-s-aya-payday', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "On payday Aya came to the stall at quarter past six in a gray office suit and sensible shoes and a face that had spent all day being polite on the phone, and stood in front of the buckets for a full five minutes without saying anything, breathing, like someone standing at the edge of the sea." },
        { s: 'okada', t: "Aya-chan. Payday. Take your time. Take all the time you want." },
        { s: 'aya', t: "These are for me. Just me. I know nobody does that. Mrs. Okada says I'm the only other one." },
        { s: 'aya', t: "Everything else I buy is for something. Rent. Shoes for work. A gift for my boss's retirement. This is the only thing I buy that doesn't want anything from me." },
        { choose: [
          { t: "(Make her something ridiculous and enormous and beautiful.)", stat: { charm: 1 }, then: [
            { n: "Lilies and peonies and three stems of something wild and blue, much too big for any apartment Aya could afford, and she laughed out loud for the first time since she arrived, a real laugh, and carried it off toward the station like a bride, people turning to watch her go." }
          ] },
          { t: "(Ask her what kind of day it was, and build from that.)", stat: { kindness: 1 }, then: [
            { n: "A long one, it turned out, a long gray one with a printer that ate a contract and a man who called her by the wrong name four times, so Solar made something soft and yellow and quiet, with nothing sharp in it anywhere, and Aya held it under her chin for a second with her eyes closed before she paid." }
          ] }
        ] },
        { s: 'aya', t: "Same time next month. If I survive." },
        { s: 'okada', t: "You'll survive. Flowers are very good at making people survive. It's most of what they're for." }
      ] },
      { id: 'fl-s-haru', met: ['haru'], after: '5/10', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "Haru stopped at the stall on her way through the mall and did not leave for an hour and ten minutes, crouched in front of the buckets with her skirt tucked under her knees, asking Mrs. Okada questions about her suppliers, her water, the temperature of her water, and what she put in it, in a voice of such gentle, devastating expertise that Mrs. Okada slowly sat up straighter on her stool." },
        { s: 'haru', f: 'happy', t: "Sugar and a little vinegar? Oh, that's clever. I've always used a copper coin, but that's only for tulips." },
        { s: 'okada', t: "Young lady. Where did you learn this." },
        { s: 'haru', f: 'neutral', t: "Mostly from getting it wrong, I think. Fufu. I kill a great many things before I understand them." },
        { choose: [
          { t: "(Leave them to it and run the stall alone for a while.)", stat: { proficiency: 1 }, then: [
            { n: "She did the next eleven customers by herself, wrapping and ringing up and answering questions, while behind her the two of them went deeper and deeper into soil acidity and stem rot and the precise moral failings of a particular brand of fertilizer, and nobody noticed she was doing the whole job, which she took as a compliment." }
          ] },
          { t: "(Crouch down with them and learn something.)", stat: { knowledge: 1 }, then: [
            { n: "She learned about cutting stems underwater so the air can't get in, and about why lilies have their pollen pulled out, and about a flower called a bleeding heart that Haru described so tenderly it sounded like a person, and by the end of it her knees ached from crouching and her head was full of Latin." }
          ] }
        ] },
        { n: "When Haru finally stood up, Mrs. Okada went into the back of the stall and came out with three cuttings from her own balcony geraniums wrapped in damp newspaper, which she had never once offered to anyone, and pressed them into Haru's hands." },
        { s: 'haru', f: 'happy', t: "Oh, I'll take very good care of them. I promise. I'll write and tell you how they're doing." },
        { s: 'okada', t: "Write? Come back. Come back and tell me. Nobody writes anymore. They print." }
      ] },
      { id: 'fl-s-mitsuru', met: ['mitsuru'], after: '5/1', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "Mitsuru came across the plaza in her school uniform with the stride of someone who had never in her life had to wait in a line, and stopped in front of the stall, and looked at the nineteen buckets with the composed attention of a general surveying a map." },
        { s: 'mitsuru', f: 'neutral', t: "Solar. Good. There's a reception at the group's offices on Port Island tomorrow evening and the florist has had a family emergency. I require arrangements for twelve tables and the entrance hall." },
        { s: 'mitsuru', f: 'neutral', t: "I'll take all of it." },
        { n: "Mrs. Okada, on her stool, looked at Mitsuru over her glasses for a long, unhurried moment, the look of a woman who had been in business beside a fountain since before this girl was born." },
        { s: 'okada', t: "All of it. Hm. And what do the people coming to this reception like, young lady?" },
        { s: 'mitsuru', f: 'surprised', t: "...Like? They're executives. I don't think they... I'm not sure that's relevant." },
        { choose: [
          { t: "(Translate. Ask Mitsuru what the evening is for, not who's coming.)", stat: { charm: 1 }, then: [
            { n: "It was a retirement, it turned out, for a woman who had worked for the group for thirty-eight years and had, Mitsuru remembered, after a pause, kept a pot of violets on her desk the whole time. Mrs. Okada nodded slowly, as though Mitsuru had finally passed an oral exam, and they built the whole order around violets, and Mitsuru wrote it all down in a small leather notebook, very seriously, the word *violets* underlined." }
          ] },
          { t: "(Work out the order properly: twelve tables, one hall, the right quantities.)", stat: { proficiency: 1 }, then: [
            { n: "She did it on the back of an order slip, tables and stems and vases and how much water each would need overnight, and Mitsuru read it over her shoulder and corrected nothing, and said, in a tone of faint surprise, that it was more organized than the original florist's quote." }
          ] }
        ] },
        { n: "When it came time to pay, Mitsuru held out a card. The stall had a cash box. It had always had a cash box. There was a long silence beside the fountain." },
        { s: 'mitsuru', f: 'neutral', t: "...I see. I'll have someone bring it by this evening." },
        { s: 'okada', t: "You'll bring it yourself. And you'll tell me how the violets went." },
        { n: "And Mitsuru, astonishingly, said that she would, and did, the following week, in person, with the cash in an envelope and a report on the violets delivered as formally as a quarterly earnings statement, and Mrs. Okada talked about it for a month." }
      ] },
      { id: 'fl-s-proposal', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "The young man had been walking past the stall for twenty minutes, back and forth along the same twenty meters of plaza, glancing at the roses every time and then walking on, and on the sixth pass Mrs. Okada lifted a single finger from her stool, and he came over like a dog called by name." },
        { s: 'flguy', t: "I'm going to propose. Tonight. At the restaurant on the top floor. I have the ring. I don't have flowers. I don't have the words. I had the words this morning and now I don't." },
        { s: 'flguy', t: "Could you— would you stand there. Just stand there and be her. For a second. So I can hear what it sounds like." },
        { n: "Next door, Mr. Doi had come out to the doorway of his shoe shop and was watching with his arms folded and an expression of deep, professional interest." },
        { choose: [
          { t: "(Stand there and be her. Play it absolutely straight.)", stat: { courage: 1 }, then: [
            { n: "She stood by the fountain with her hands folded and a perfectly neutral face, and he got down on one knee on the tiles, right there in the plaza, in front of the shoe shop and three passing schoolgirls and a security guard, and said it, all of it, stumbling and then not stumbling, and somewhere in the middle he forgot to be practicing, and when he finished the schoolgirls were clapping." },
            { s: 'solar', f: 'happy', t: "She's going to say yes. I'm not her and I almost said yes." }
          ] },
          { t: "(Get the flowers right first. The words will come.)", stat: { proficiency: 1 }, then: [
            { n: "She made him tell her about the girlfriend while she worked, and he forgot to be nervous telling her, and by the time the bouquet was done, red ranunculus and white sweet peas, nothing too big for a restaurant table, he had said everything he needed to say about her without noticing he'd said any of it, and she pointed that out, and he went very quiet and then said, oh." }
          ] }
        ] },
        { s: 'doi', t: "Check her shoe size when she says yes. Women always say yes to something in a good pair of shoes. I'll give you a discount." },
        { s: 'okada', t: "Ignore him. He's been saying that for thirty years and he's never sold anybody a single wedding shoe." },
        { n: "The young man walked away toward the escalator holding the flowers in both hands, and at the bottom he turned round and bowed to the stall, and to the shoe shop too, to be safe." }
      ] },
      { id: 'fl-s-lost-boy', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "The boy was about four, in a dinosaur raincoat, and he was standing perfectly still at the edge of the fountain with his face screwed up in the particular way of a child who has just turned around and found that everybody he knows has vanished from the earth." },
        { n: "He didn't cry. That was the worst part. He just stood there with his hands balled at his sides, not crying, with tremendous effort, while the crowds went past him on both sides like water round a rock." },
        { s: 'fllost', t: "I'm not lost. My mom is lost." },
        { choose: [
          { t: "(Bring him behind the stall and give him a job.)", stat: { kindness: 1 }, then: [
            { n: "She sat him on an upturned bucket and gave him a pile of stems to strip the bottom leaves from, very important, a real job, and he did it with intense concentration, tongue out, leaf by leaf, while Mrs. Okada called the information desk on the stall's ancient phone, and he was so absorbed when his mother came running across the plaza that he told her to wait, he was almost finished." }
          ] },
          { t: "(Take his hand and walk him to the police box. Stay with him.)", stat: { courage: 1 }, then: [
            { n: "They walked together across the mall to the police box, him holding two of her fingers in a grip like a vice, and the officer there was kind and gave him a sticker, and his mother arrived seven minutes later in a state of total collapse, and he told her very sternly not to wander off again." }
          ] }
        ] },
        { s: 'okada', t: "We had four lost ones last year. The fountain's a magnet. Children look at the water and the whole rest of the world goes away." },
        { n: "His mother came back to the stall afterward, still pale, and bought a bunch of tulips she very clearly didn't want, out of gratitude, and the boy waved to them all the way across the plaza, walking backwards, and nearly lost her again." }
      ] }
    ],
    beats: [
      { id: 'fl-arc-1', at: 2, after: '4/18', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "At ten past four Mrs. Okada took a cloth tape measure out of her apron pocket, the yellow kind tailors use, and held it out to Solar with the grave formality of someone handing over a sealed letter." },
        { s: 'okada', t: "Next door. His display stand. From the edge of it to the line on the tiles where my buckets start. Measure it. Write it down. Don't let him see you do it." },
        { n: "The shoe shop next door was narrow and dim and smelled of leather and polish, and the display stand outside it was a wooden rack of slippers and sensible walking shoes, and its back edge was, Solar estimated before she even unrolled the tape, a good handspan closer to the flower buckets than looked entirely accidental." },
        { n: "Mr. Doi was in the doorway before she'd got the tape to the floor. He was small and neat and bald as an egg, with a pencil behind each ear, and he looked down at her crouched with the tape on his doormat, and sighed the sigh of a man who had been here before." },
        { s: 'doi', t: "She sent you. Of course she sent you. She's been sending people since 1978." },
        { s: 'doi', t: "Since you're down there, tell her her buckets drip on my mat. Every single day. Thirty-one years of wet feet." },
        { n: "It was, in fairness, a wet mat. It was also eleven centimeters past the line." },
        { choose: [
          { t: "(Report back exactly. Eleven centimeters, and a wet mat.)", stat: { courage: 1 }, then: [
            { s: 'okada', t: "Eleven. He was at seven in March. He's creeping. He thinks I don't notice. I notice everything." },
            { s: 'okada', t: "...The mat is wet, you say? Hm. It's a cheap mat. That's not my fault." }
          ] },
          { t: "(Round both numbers in everybody's favor.)", stat: { charm: 1 }, then: [
            { n: "She told Mrs. Okada it was about ten, give or take, hard to say with the tiles, and told Mr. Doi on the way past that the dripping was really only one bucket, the lilies, and could probably be fixed, and both of them looked at her with exactly the same narrow suspicion, as if they'd practiced it together." }
          ] }
        ] },
        { s: 'okada', t: "Thirty-one years he's been doing that. Moving his rack a centimeter a week. Then I complain, and he moves it back. Then he starts again." },
        { s: 'okada', t: "Write it down somewhere, the eleven. We'll want a record." },
        { n: "Solar wrote it on the back of an order slip and pinned it to the corkboard behind the stool, where she noticed, once she was looking, there were already a great many order slips with numbers on them, going back years, in Mrs. Okada's handwriting and in several others, yellowed at the edges, all of them measurements." }
      ] },
      { id: 'fl-arc-2', at: 5, after: '6/20', prev: 'fl-arc-1', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "It happened on the fourth bucket. Mrs. Okada insisted on doing the water herself that day, because Solar had come straight from school and was, she said, looking peaky, and she bent and lifted and something in her knee went with a sound Solar heard from three meters away, and the bucket went down and so, very nearly, did Mrs. Okada." },
        { n: "She caught the edge of the counter. She didn't make a sound. She just stood there holding on, her face gone the color of the white carnations, breathing through her nose, while water spread across the tiles toward the shoe shop." },
        { s: 'okada', t: "I'm fine. It's the weather. Go and get a cloth. I'm fine." },
        { n: "Solar got her onto the stool instead, which took some arguing, and when she turned round to deal with the water and the other fifteen buckets, Mr. Doi was already there." },
        { n: "He didn't say anything. He took off his jacket and folded it over the slipper rack and rolled up his sleeves, and he picked up the fallen bucket and took it to the tap by the fountain and filled it, and brought it back, and set it down, and went for the next one, and the next, all fifteen, without asking which was which or where they went." },
        { n: "He filled every one of them exactly to the line. Not near it. To it. As if he'd been watching her do it every afternoon for thirty-one years. As if he had." },
        { choose: [
          { t: "(Thank him for her, since she won't.)", stat: { kindness: 1 }, then: [
            { s: 'doi', t: "Don't thank me. Tell her the floor's wet. Tell her it's a hazard. Tell her a customer will slip on it and sue her." },
            { n: "He said it loud enough for her to hear it from the stool. She heard it. She sat very still with her hands on her knee and her mouth pressed into a line, and her eyes followed him, bucket by bucket, all the way through." }
          ] },
          { t: "How did you know where the line was?", stat: { charm: 1 }, then: [
            { s: 'doi', t: "It's a flower stall. You put the water to the line. Everyone knows that." },
            { n: "Nobody knew that. Solar hadn't known it until her first afternoon. He set the last bucket down, wiped his hands on his trousers, collected his jacket from the slipper rack, and went back into his shop without looking at the stool even once, which was, she was beginning to understand, the most attentive way it was possible to not look at something." }
          ] }
        ] },
        { n: "For the rest of the afternoon Mrs. Okada didn't say a word about Mr. Doi. At five, though, she sent Solar next door with a single stem of lily, the pollen pulled out so it wouldn't stain, and a message, which was that it was to put in his window, since his window was so ugly." },
        { n: "He put it in his window. It was still there two weeks later, long after it should have been thrown away, gone papery and brown, and Mrs. Okada never mentioned it, and neither did he." }
      ] },
      { id: 'fl-arc-3', at: 9, after: '10/10', prev: 'fl-arc-2', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "Mrs. Okada was quieter than usual all afternoon, wrapping and trimming and saying almost nothing, and at the end of the day, when the mall lights had come on and the fountain went gold under them, she said it to the buckets rather than to Solar, in the same flat voice she used for prices." },
        { s: 'okada', t: "The doctor says no more lifting. Not one bucket. Not ever, if I want to keep walking on it." },
        { s: 'okada', t: "I'm thinking of giving up the stall after the New Year. There's a boy from the agency who wants the spot for phone cases." },
        { n: "Solar's hands stopped on the ribbon she was cutting. Something went cold and heavy in her stomach and sat there, the way it did when she came home and found the dorm lounge empty, and she found she had nothing to say, nothing, and stood with the scissors open." },
        { s: 'okada', t: "Thirty-one years. I took this spot the same spring he opened that shop. Nineteen seventy-eight. That autumn he asked me to dinner." },
        { s: 'okada', t: "I said ask me again when your shop's doing better. I was being clever. I was twenty-nine and I thought I was being terribly clever." },
        { s: 'okada', t: "His shop did better. He never asked again. He just started moving that rack." },
        { n: "She laughed, a short dry sound, and pulled a dead leaf off a chrysanthemum and dropped it in the bin." },
        { choose: [
          { t: "Have you told Mr. Doi? About the stall?", stat: { courage: 1 }, then: [
            { s: 'okada', t: "Certainly not. And neither will you. He'd only be insufferable about getting the extra eleven centimeters." },
            { n: "She said it fast and sharp and didn't look at the shoe shop, and Solar, looking at the shoe shop for her, saw that the door was propped open, the way it always was, and that the doorway was very close, and that a wall that thin between two shops would hide very little." }
          ] },
          { t: "(Don't argue. Take the scissors and do the rest of closing yourself.)", stat: { kindness: 1 }, then: [
            { n: "She did the buckets and the cash box and the shutters while Mrs. Okada sat on her stool with her hands on her bad knee, and neither of them said anything else, and when Solar finished she found that the old woman had been watching her the whole time with an expression she couldn't read, tired and fond and something else underneath, the look of someone memorizing a room before they leave it." }
          ] }
        ] },
        { n: "When Solar went to put the tape measure back in the drawer it wasn't there. She looked for it everywhere. Mrs. Okada said she must have dropped it, and it didn't matter, and it was only a tape measure." },
        { n: "Next door, very late, long after the mall had emptied, there was a light on at the back of the shoe shop, and the sound of a saw." }
      ] },
      { id: 'fl-arc-4', at: 13, after: '1/9', prev: 'fl-arc-3', scene: [
        { place: 'Paulownia Mall · Flower Stall' },
        { n: "The first thing Solar saw when she came across the plaza was that the slipper rack had moved. It had gone back. Not to the line. Behind it. A good thirty centimeters behind it, right up against Mr. Doi's own window, so that half the slippers were now in shadow and nobody could possibly see them." },
        { n: "The second thing she saw was what was in the space it had left." },
        { n: "It was a low wooden platform on four small rubber wheels, varnished and neat, made to fit exactly between the stall and the shoe shop, with nineteen round holes cut in the top, each the precise size of one of Mrs. Okada's buckets, so that the buckets sat in it at the height of a hand, and could be filled with a hose from the fountain tap and rolled out and back without anybody having to lift anything, ever again." },
        { n: "Mrs. Okada was sitting on her stool in front of it with a cane across her lap and an expression on her face that Solar had never seen there before and could not, for a moment, identify. Then she could. It was being caught off guard." },
        { s: 'okada', t: "He measured. With my tape. He's had it since October. The thief." },
        { s: 'okada', t: "Nineteen holes. Every one the right size. He must have measured every bucket while I was at the clinic. The man's insane." },
        { n: "From the shoe shop doorway Mr. Doi, a pencil behind each ear, called out that the varnish was still curing and nobody should put anything wet on it until Thursday, and that the agency boy with the phone cases could go and sell them somewhere else, and that he had told him so personally." },
        { n: "Mrs. Okada didn't answer him. She got up off the stool, slowly, leaning on the cane, and went along the buckets and chose stems, one from here and one from there, sweet peas and narcissus and a single branch of plum, and made a small round bunch, and wrapped it, and tied it, and held it out to Solar." },
        { s: 'okada', t: "Next door. Go on." },
        { choose: [
          { t: "Shouldn't you take it yourself?", stat: { courage: 1 }, then: [
            { s: 'okada', t: "With this knee? Ten whole meters? You'd make an old woman walk?" },
            { n: "She took it herself. Ten whole meters, slowly, with the cane, the flowers held up in her other hand like a torch, and Solar stood in the stall and did not watch, very obviously, from behind a bucket of tulips." }
          ] },
          { t: "(Take it. Walk slowly, so she can change her mind.)", stat: { kindness: 1 }, then: [
            { n: "She didn't change her mind. Solar walked the ten meters as slowly as she'd ever walked anywhere, and Mr. Doi took the flowers from her in the doorway without a word and stood holding them with both hands, looking past her at the stall, at the old woman on her stool, who was looking very hard at something on the far side of the fountain." }
          ] }
        ] },
        { s: 'doi', t: "...Is this the asking? After thirty-one years? Is that what this is?" },
        { s: 'okada', t: "It's a thank you. The asking was your job. You're thirty-one years late with it. I've been very patient." },
        { n: "Mr. Doi went back into his shop. He came out again with his good coat on. They went to dinner, the two of them, that evening, at the tempura place on the second floor, Mrs. Okada on her cane and Mr. Doi a careful half-step behind her, and Solar locked up the stall alone for the first time, the buckets rolling smoothly into place on their nineteen holes." },
        { n: "She found the tape measure on the stool, where somebody had left it for her to find, rolled up tight, and she put it in the drawer, in the back, under the order book, where it could stay." }
      ] }
    ],
    quiet: [
      { id: 'fl-q-fountain', scene: [
        { n: "A child threw a coin into the fountain and wished out loud for a horse." },
        { s: 'okada', t: "That fountain has more money in it than my cash box. Every single day. I've done the sums." }
      ] },
      { id: 'fl-q-scissors', scene: [
        { n: "Mrs. Okada's scissors hung on their faded ribbon around her neck, and she trimmed stems without looking down, talking to customers the whole time, each cut exactly where it should be." },
        { n: "Solar had tried it once with her own. She'd cut a carnation in half and a bit of ribbon she was wearing." }
      ] },
      { id: 'fl-q-doi-sweep', scene: [
        { n: "Mr. Doi came out and swept his doorway, right up to the line on the tiles and not one centimeter past it, and went back in." },
        { n: "Mrs. Okada watched the whole thing over her glasses and said nothing at all, and then swept her side of the line, to the line, exactly." }
      ] },
      { id: 'fl-q-aya-wave', scene: [
        { n: "Aya went by on her way to the station, not on a payday, and waved from across the plaza without stopping." },
        { s: 'okada', t: "Eleven days to go. She looks like it, poor thing. Wave back. Make it a good one." }
      ] },
      { id: 'fl-q-hurt', scene: [
        { n: "A little girl watched Solar trim a stem and asked, very worried, if it hurt the flower." },
        { choose: [
          { t: "(Tell her the truth: it helps them drink.)", stat: { knowledge: 1 }, then: [
            { n: "She explained about the angle and the water, and the girl listened with her whole face, and then asked if it would help her drink too if she cut her straw. Solar said no. She seemed disappointed." }
          ] },
          { t: "It tickles.", then: [
            { n: "The girl considered this, accepted it, and asked for one so she could tickle it herself." }
          ] }
        ] }
      ] },
      { id: 'fl-q-lunch', scene: [
        { n: "Mrs. Okada unwrapped a rice ball from her bag, broke it carefully in half, and held out the bigger half to Solar without looking, still talking to a customer." },
        { n: "Pickled plum. It always was. Solar had never once seen her eat the bigger half." }
      ] },
      { id: 'fl-q-card', scene: [
        { n: "A man asked Solar to write the little card for him because his own handwriting was bad, and dictated it with great care." },
        { n: "It said *Sorry about the thing.* Just that. He seemed to think it covered everything, and from his face, it probably did." }
      ] },
      { id: 'fl-q-kume-cap', days: [4], scene: [
        { n: "Mr. Kume came at half past four, touched his cap, and stood in front of the buckets for a long time before choosing." },
        { s: 'kume', t: "She got last week's. Took her ten seconds. She's getting faster. I'm getting worried." }
      ] },
      { id: 'fl-q-water-line', scene: [
        { n: "Solar did the buckets, all nineteen, each one exactly to the line, and Mrs. Okada didn't check a single one." },
        { n: "It had taken months for her to stop checking. Solar noticed the day it happened. She didn't say anything about it, and neither did Mrs. Okada." }
      ] },
      { id: 'fl-q-paper', scene: [
        { n: "A customer couldn't decide between the brown paper and the white." },
        { choose: [
          { t: "(Brown. Flowers look braver in brown.)", stat: { charm: 1 }, then: [
            { n: "He chose brown. Mrs. Okada said under her breath that she'd been saying that for thirty years and nobody had ever once listened to her." }
          ] },
          { t: "(Hold both up next to the flowers so he can see.)", then: [
            { n: "He chose white, then brown, then white, and in the end both, one inside the other, which looked surprisingly good." }
          ] }
        ] }
      ] },
      { id: 'fl-q-quiz', scene: [
        { s: 'okada', t: "That one. Quickly. Don't think." },
        { n: "Solar named it. And the next. And the one after that. Mrs. Okada grunted, which was as close as she came to applause, and pointed at a fourth that Solar had never seen before, purely to win." }
      ] },
      { id: 'fl-q-petal', scene: [
        { n: "When she took off her apron at the end of the shift there was a single pink petal stuck to her sleeve." },
        { n: "She found it again at the dorm, stuck to her blazer, and for reasons she didn't look at too closely, put it in her notebook instead of throwing it away." }
      ] }
    ],
    openers: {
      4: "In April the stall was full of tulips and sweet peas and the last of the cherry branches, and the fountain sparkled under the mall's glass roof, and everyone walking past seemed to be on their way to start something.",
      5: "In May the stall turned red and pink with carnations, and the mall was warm and bright in the afternoons, and the fountain was busy with children who had just discovered it was warm enough to put their hands in.",
      6: "In June the rainy season drummed on the mall's glass roof, and the stall was full of hydrangeas in blue and violet, and the air around the buckets was cool and wet and green.",
      7: "In July the sunflowers came in, and the plaza was hot and loud with summer crowds, and Mrs. Okada changed the bucket water twice a day and still said the lilies were sulking.",
      8: "In August the mall was thick with heat and the fountain was full of children's feet, and the stall smelled of chrysanthemum and gentian for the season of the dead.",
      9: "In September the cosmos came in on long thin stems that waved at the slightest breath, and the evenings in the plaza turned gold earlier, and the summer crowds thinned out all at once.",
      10: "In October the stall was full of chrysanthemums in every color, and the mall had its autumn decorations up, paper maple leaves strung over the fountain, and the light came in low and amber through the glass.",
      11: "In November the stall smelled of cold air from the doors and dried flowers and bittersweet, and people bought bunches to take home rather than to give, as if they needed something alive in the house.",
      12: "In December the stall smelled of pine instead of flowers, and the plaza glittered with Christmas lights strung over the fountain, and the poinsettias sold out every Saturday by four.",
      1: "In January the mall was quiet after the New Year rush, and the stall had plum branches and narcissus, and the cold came in through the doors every time they opened, and the buckets were freezing to the touch."
    }
  }
});
