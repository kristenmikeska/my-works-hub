/* The strangers epilogue: the Yang house (Kat, Nov 11 2026: "we should add Jungwon's brother Seojun and Jungwon's parents...
   they should play bigger parts"). Data only; loaded with the world (epilogue.js WORLDS.strangers.files). Three story events,
   every route, plus the Yang parents' texts. Fences: the private plan §4 (DO-NOT-OPEN-epilogue-plan-private.md) still holds.
   Events (R.events):
     epi-s-yang-dinner   2/21 evening   barley tea: dinner at the Yang house for the girl who "had a fever"; Dokyun holds court,
                                        Madam Kang nearly silent; the far chair and its cup; the end slice; the bream cheek (consumes)
     epi-s-yang-karaoke  3/1 evening    everyone sings: karaoke Friday on the holiday; Tears of Mokpo, all six verses; Yunjin;
                                        the high part; a Seo Taiji song keyed in without the book (consumes)
     epi-s-camellias     3/9 after      for grief: jujube tea with Madam Kang in the garden room, in the dust (consumes)
   Seojun (Kat's ruling: presence only): never on the page, never a fate. He's the chair at the far end and the cup Dokyun
     pours for it, a framed photograph on the dining-room sideboard (laughing at somebody past the edge of the frame), the end
     slice off the rolled omelet, the bream cheek that goes into Donghyuck's bowl, the watch, the paper boats, a song. Nobody
     says dead, alive, gone or back; the narration never names his state; the one sentence about him that starts is cut off.
   Flags set: epi-s-yang-tea (dinner: she fills the far cup), epi-s-yang-high (karaoke: Jungwon sings the high part),
     epi-s-kang-true (camellias: she tells Madam Kang she wasn't ill). Read: epi-s-yang-tea (camellias), epi-s-yang-high (the
     dokyun phone card, the 3/2 text), epi-s-kang-true (the madamkang phone card). Gates: none beyond the dates (the trio,
     2/20, carries the invitation; story events always play).
   Glitches: { strain: 1 } when the fever lie holds at the dinner and in the garden room (by choice); { near: true } once
     (karaoke, the Japanese song, Riki). No glitch ids.
   Bonds: haechan (dinner, the car), jungwon (karaoke, the high part), each once at most.
   Texts (R.texts): epi-s-tx-dokyun-1 (2/22 early, after the dinner), epi-s-tx-dokyun-2 (3/2 early, after the karaoke),
     epi-s-tx-kang-1 (3/10 early, after the camellias). Threads 'dokyun' (he saved his own contact as 아버님 / Abeonim) and
     'madamkang'. Phone contacts in phone.js.
   Inventions for Kat to confirm (small): the photograph is a framed copy of the New Year 2005 picture, on the dining-room
     sideboard beside the Mokpo celadon; Jungwon does the rolled omelet for the dinner; Dokyun keeps a small taegukgi in his
     cardigan pocket on 3/1; the karaoke machine's songbook is held together with packing tape; Dokyun keys in the Seo Taiji
     and Boys song "Come Back Home" by number without looking (no lyric is quoted anywhere); Madam Kang sends a thermos of
     jujube tea home "for whoever is at your gate tonight"; Dokyun texts in capitals with too many exclamation marks; Madam
     Kang texts one line, signed.
   Fence calls: no injuries (Jungwon uses his right hand; Haechan lifts nothing); no Sunghoon; no guns, no business, no
     Liang, no Seo, no notebook, nothing after the sixth; the wedding is Dokyun's word ("April") and is never answered;
     Madam Kang's own interiority (what she believes) stays hers: she says only what a mother would say to a girl back from
     ten days nobody will name. Mrs. Park's piano stays off the page. */
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 2/21, evening: barley tea ─────────────────────────────
  { id: 'epi-s-yang-dinner', date: '2/21', slot: 'evening', consumes: true, title: 'barley tea', place: 'Incheon · The Car', time: 'Evening', scene: [
    { music: 'epi-s-house' },
    { n: "The invitation had come back across the water with the plate, the way everything did between the two houses now, and by Thursday it had grown in the telling, so that by the time Mrs. Bang was pinning Solar's hair at six it was no longer an invitation at all but a summons, and the Lee kitchen had an opinion about every part of it." },
    { s: 'mrsbang', f: 'serious', t: "You eat what they give you. All of it. You've been ill. If you leave rice in that house, his wife will think I don't feed you." },
    { s: 'solar', f: 'neutral', t: "Madam Kang doesn't think things like that." },
    { s: 'mrsbang', f: 'serious', t: "Every woman alive thinks things like that. The good ones don't say them. That's the only difference." },
    { n: "Haechan drove. Of course Haechan drove; her father had said she went nowhere after dark without him and had said it in the voice that made the house go quiet, and so the Rexton was at the gate at half past six with the heater roaring and the fog wiped off the inside of the windscreen in one long smear by somebody's sleeve." },
    { n: "He'd changed his shirt. That was the first thing she noticed, getting in. A black one, ironed, buttoned to the collar, the creases still in it from Mrs. Bang's ironing board, and the smell of the laundry room on him over the cold and the cinnamon gum. He'd changed it for the Yang house. He hadn't changed it for the quay that afternoon, where he'd pulled her back off the steps by her coat at ten to four and then not said a word to her for an hour." },
    { s: 'haechan', f: 'neutral', t: "Seatbelt, agasshi." },
    { s: 'solar', f: 'neutral', t: "You ironed." },
    { s: 'haechan', f: 'flustered', t: "Mrs. Bang ironed. I stood there while she did it so she'd have somebody to shout at." },
    { n: "The coast road. The cranes going by on the left with their red lights blinking on top, one after another. Across the water, the Yang house coming slowly round to meet them, every window lit, every single one, the whole long glass house glowing gold out of the dark like a paper lantern somebody had set down on the shore and forgotten to blow out." },
    { n: "Haechan looked at it once through the windscreen and then didn't look at it again. He found a trot tape in the door pocket without taking his eyes off the road and pushed it in, and then, two bars into the first song, pushed it out again, and drove the rest of the way in silence with his jaw working on the gum." },
    { n: "She knew why. She didn't say. That was one of the ways they did things now." },

    // The step.
    { place: 'Incheon · The Yang House', time: 'Evening' },
    { n: "Yang Dokyun was on the front step himself." },
    { n: "Not the guard from the gatehouse, not Mrs. Moon, not Jungwon: the Chairman, in a persimmon-coloured cardigan over a white shirt, in his house slippers, on the top step in the cold with his arms already open before the Rexton had stopped rolling, a big man going grey at the temples with a big man's voice, and he came down the steps to the car as if he meant to open her door himself, and did." },
    { s: 'dokyun', f: 'happy', t: "Daughter-in-law!" },
    { n: "He hugged her. He did it the way he did everything, completely and all at once and without asking, both arms, so that her face went into the soft persimmon wool of his shoulder and her pinned hair caught on a button, and he smelled of soju and aftershave and the cold, and under it, faintly, of the koi food in the silver bowl he fed them from every morning at seven." },
    { s: 'dokyun', f: 'sad', t: "Look at you. Look at her. Thin as a chopstick. A fever, over Seollal, ten days in bed, and nobody in that house thinks to telephone me. I hear it from my own kitchen. From the *plate*." },
    { s: 'solar', f: 'neutral', t: "It was only a fever, Father." },
    { s: 'dokyun', f: 'happy', t: "*Only.* She says only. A girl says only to a man who once had a fever on a fishing boat off Heuksando for six days with nothing but rice wine and a dead radio. Only. Come in, come in, it's cold, my wife's been sitting at that table since five." },
    { n: "Then he let her go and turned, and Haechan, who had got out of the car and come round it and stopped a careful two meters off with his hands at his sides, was in the arms too before he'd finished deciding where to stand." },
    { n: "It was a different hug. She watched it happen. The same arms, the same persimmon wool, but they went round Haechan's shoulders and stayed there, heavy as a yoke, and one big hand came up and cupped the back of his head and pressed it down against the cardigan the way you'd hold a boy's head who'd come home late from somewhere you'd told him not to go, and Dokyun said something into his ear that she couldn't hear, low, warm, not stopping, and Haechan stood inside it completely still, like a rabbit in a field when the hawk goes over." },
    { s: 'dokyun', f: 'happy', t: "Donghyuck-ah. You drove her. Of course you drove her. Sit at my table tonight. Don't argue with me. I'll put you in the pond." },
    { s: 'haechan', f: 'neutral', t: "...Hoejangnim." },
    { s: 'dokyun', f: 'happy', t: "*Hoejangnim*, he says. Like a bank." },
    { n: "He let go, finally, and slapped Haechan twice on the side of the face, lightly, fondly, the way you'd slap a fish to see if it was fresh, and went up the steps ahead of them in his slippers, talking, already talking, to the house, to the guard, to the night, about the wind off the water and the price of hairtail this winter, and they went up after him." },

    // The dining room.
    { place: 'Incheon · The Yang House · Dining Room', time: 'Evening' },
    { n: "The Yang dining room was the warmest room she had ever been in that wasn't a kitchen. Underfloor heat coming up through the pale boards into the soles of her stockinged feet, a long low table of black wood set for six, silver chopsticks laid on little porcelain fish, a scroll on the far wall in Jungwon's great-grandfather's brush, four characters, *water flows, mountain stays*, and the whole sea in the black glass behind it with the lights of the old city small and yellow on the other side." },
    { n: "Six places. Five chairs with somebody coming to them." },
    { n: "Madam Kang Hyesook was already seated, at her husband's right hand, very small and very straight, in black. She was always in black. A black wool dress with a high round collar, her hair pulled back so severely that it lifted the corners of her eyes, no jewellery at all but the thin gold band on her left hand, and in front of her an untouched cup of tea and a folded linen napkin and her own two hands resting either side of them, very still, as if she'd set them down there at five o'clock and not needed them since." },
    { n: "She looked up when Solar came in. The sad, kind eyes. They went over her once, from her pinned hair to her stockinged feet, slowly, all of her, the way Mrs. Bang went over a fish at the market before she'd pay for it." },
    { s: 'madamkang', f: 'neutral', t: "Sit, Solar-ssi." },
    { n: "That was all. Two words and a small movement of one hand toward the cushion on her right. Solar sat." },
    { n: "Jungwon came in from the kitchen a minute later with a plate in his right hand and the sleeves of a grey sweater pushed to the elbow, and stopped in the doorway when he saw Haechan standing against the wall by the sideboard with his hands folded in front of him, the way he stood in the Lee dining room, the way he'd stood behind other men's chairs since he was seventeen." },
    { s: 'jungwon', f: 'neutral', t: "Donghyuck. My father's set you a place." },
    { s: 'haechan', f: 'neutral', t: "I can see that." },
    { s: 'jungwon', f: 'happy', t: "Then I'm sure you'll want to sit in it before he notices you haven't. He's in a very good mood. It would be a shame to spend it on you." },
    { n: "The dimples, both, very polite. Haechan looked at him for a long second. Then he came off the wall and pulled out the chair across from Solar and sat in it like a man sitting down on a bench he suspects of being wet paint." },
    { n: "The plate in Jungwon's hand was rolled omelet. Gyeran-mari, a long golden log of it cut into slices, the layers showing in each one like the rings of a tree, and he set it down in the middle of the table and straightened it a centimeter with one finger, and Dokyun, coming in behind him, clapped both hands together so loudly that Solar's shoulders went up." },
    { s: 'dokyun', f: 'happy', t: "He did the eggs! Did you see? My son did the eggs. Look at that. Not a brown spot on it. You know what this boy's omelet was like when he was eight, daughter-in-law? Like a shoe. Like a burned shoe. He put six spoons of sugar in it—" },
    { s: 'jungwon', f: 'neutral', t: "Father." },
    { s: 'dokyun', f: 'happy', t: "What? She should know. A wife should know everything. Sit, sit. Eat. Eomma, the rice." },

    // The far chair.
    { n: "There was a sixth place." },
    { n: "At the far end of the table, the foot, where the black wood ran down toward the window and the sea: a cushion, a set of silver chopsticks on a porcelain fish, a bowl turned upside down, and a small celadon cup. Nobody went to it. Nobody looked at it. Mrs. Moon came in with the rice and served round the table from Dokyun to his wife to Solar to Jungwon to Haechan, and stopped, and went back to the kitchen without going to the end, and nobody said anything about that either." },
    { n: "On the long sideboard behind it, among the Mokpo celadon and a jade tree and a carriage clock that ticked too loud, there was a photograph in a plain silver frame." },
    { n: "Solar didn't let herself look at it for long. She'd learned that much in this house. A boy of twenty or so in a white shirt at somebody's New Year party, with his tie pulled loose and his hair falling in his eyes, head thrown back, laughing, open-mouthed, completely, at somebody just past the edge of the frame. He looked like the kind of boy who'd been told he was golden so many times he'd stopped hearing it. He looked like Dokyun, round the mouth. He looked like Jungwon nowhere at all, except in the hands." },
    { n: "She knew who he was laughing at. The somebody past the edge of the frame was sitting four places down from it, in an ironed black shirt, eating his rice, not looking up." },
    { n: "Dokyun filled the cups. He did it himself, from a big brown pot of barley tea, leaning over the table, his wife's and Solar's and his son's and Haechan's, talking the whole time, and then he got up off his cushion with a grunt and walked the length of the table in his slippers to the far end, and filled the celadon cup there too, to the brim, carefully, the way you'd fill a cup for an old man whose hands shook, and walked back and sat down and went on with his sentence where he'd left it." },
    { n: "Nobody at the table remarked on it. Nobody ever had. Solar picked up her chopsticks." },

    // Holding court.
    { music: 'epi-s-cover' },
    { n: "There was hairtail, braised the Mokpo way with radish in a red sauce that went into the rice and stained it, which was Madam Kang's mother's recipe and which Madam Kang had made herself, Jungwon said quietly, and which she didn't touch. There was a whole sea bream, grilled, its skin blistered and silver. There were seven side dishes and a soup and the rolled omelet in the middle of everything, and Dokyun ate the way he talked, with his whole body, and talked the way he ate, without stopping." },
    { n: "He told the story about coming to Incheon at nineteen off a Mokpo boat with two hundred thousand won of his father-in-law's money in his shoe, and how he'd slept for a month in a shipping container on the fourth quay that belonged, he said, pointing his chopsticks across the table at Solar, to *her grandfather*, and paid the rent in mackerel, and how her father, who was a skinny boy then with glasses held together with tape, used to come down at night and play baduk against him on an orange crate and beat him every time." },
    { s: 'dokyun', f: 'happy', t: "Every time! Not once did I win. Not once. I threw the crate in the sea. You know what your father did? He went and got another crate." },
    { s: 'solar', f: 'happy', t: "That sounds like him." },
    { s: 'dokyun', f: 'happy', t: "That *is* him. That's the whole man. Another crate. Eat. You're not eating. Eomma, she's not eating." },
    { n: "Madam Kang didn't say anything. She took the lid off the little dish of salted shrimp nearest her and moved it ten centimeters closer to Solar's bowl and put the lid down beside it, and folded her hands again." },
    { n: "Then Dokyun reached across the table with his chopsticks, still talking, and took the end slice off the rolled omelet." },
    { n: "Not a slice. The end. The rough, curled, slightly browner heel of it, the bit you were supposed to leave on the plate or eat yourself in the kitchen so the guests got the good ones, and he took it before anybody else had touched the plate at all and ate it in one bite, mid-sentence, with enormous satisfaction, like a man stealing a coin off his own dresser." },
    { n: "Madam Kang's chopsticks stopped. A centimeter above her rice. Just for a moment. Then went on." },
    { n: "Across from Solar, Haechan had put his own chopsticks down on their porcelain fish, very carefully, and was looking at the omelet plate. Jungwon had looked at his father and then at nothing, at the scroll, at the four characters on it, and touched the watch on his wrist with his thumb, and turned it a little on the bone." },
    { n: "Dokyun didn't notice any of it. Or he did, and didn't stop. She'd never been able to tell with him which, and she suspected that was the point of him." },
    { s: 'dokyun', f: 'neutral', t: "So. This fever." },
    { n: "He'd turned to her with his whole body. The big warm face, the wet eyes he always had a little after soju, the voice gone down from the room's voice to the one he used across a table, and she felt the table change under it, the way you feel a boat change under you before you've seen the wave." },
    { s: 'dokyun', f: 'serious', t: "How high? Your father says nothing. Your mother sends pears. Mrs. Bang tells my Mrs. Moon *it was very bad* and then won't say another word, like it's a state secret. Ten days. A girl in bed for ten days over Seollal. I'd have sent my doctor. How high, daughter-in-law?" },
    { n: "She felt it in her stomach first. The small cold drop, like a stone into a well, that she'd been feeling at the back of every lie for four days now. Across the table Haechan's jaw had stopped working on nothing. Beside her, she could feel Jungwon not move." },
    { choose: [
      { t: "Thirty-nine four. I couldn't keep rice down.", then: [
        { s: 'solar', f: 'sad', t: "Thirty-nine four. The second night. I couldn't keep rice down. Mrs. Bang sat up with me." },
        { n: "It came out perfectly. Yunjin's number, Yunjin's detail, Mrs. Bang in a chair by the bed with a basin, the whole picture, and she watched it go into his face and land there and be believed, and felt the cold thing in her stomach turn over once, heavily, the way it always did now." },
        { s: 'dokyun', f: 'sad', t: "Thirty-nine four. Aigo. Aigo, our girl." },
        { glitch: { strain: 1 } }
      ] },
      { t: "Ask Mrs. Bang. She counted every hour.", stat: { charm: 1 }, then: [
        { s: 'solar', f: 'happy', t: "You'd have to ask Mrs. Bang, Father. She counted every hour. I was asleep for most of them." },
        { s: 'dokyun', f: 'happy', t: "Ask Mrs. Bang! Ask Mrs. Bang, she says, like I'd get past the door of that kitchen alive." },
        { n: "He laughed, his big head going back, his wrist coming up to his mouth to catch it, the same gesture exactly, she saw, that his wife made and his son made, and the moment went past her like a car that had decided at the last second not to stop." }
      ] },
      { t: "(Say nothing. Eat the shrimp his wife moved.)", stat: { kindness: 1 }, then: [
        { n: "She didn't answer. She put a little of the salted shrimp on her rice with the tip of her chopsticks, and ate it, and looked down at her bowl." },
        { s: 'madamkang', f: 'neutral', t: "Leave her be, Dokyun-ah. She's eating." },
        { n: "Four words. The first thing Madam Kang had said since *sit*. Dokyun turned and looked at his wife, and something passed between them across thirty-one years that Solar couldn't read and wasn't meant to, and he laughed, and threw up both his hands." },
        { s: 'dokyun', f: 'happy', t: "She's eating! She's eating, she says. Good. Eat. I'll ask your father. He won't tell me either." }
      ] }
    ] },
    { n: "He let it go. He went back to the bream." },
    { n: "He turned it over on the plate with his chopsticks, the whole fish, so that the blistered side came up, and worked the tips in under the gill, carefully, still talking about the price of bream at Yeonan, and dug out the cheek. The best piece on the fish. The small sweet round of meat that every family she'd ever eaten with fought over or gave to the eldest or the guest." },
    { n: "He put it in Haechan's bowl." },
    { n: "He didn't look while he did it. He didn't break off what he was saying. His chopsticks went across the table and came back, and the cheek was sitting on top of Haechan's rice, white, steaming, and Dokyun was telling his son that the man at Yeonan was a thief and his father had been a thief and his father's father had stolen the boat." },
    { n: "Haechan looked down at it for a long time." },
    { n: "Then he picked it up and ate it. Slowly. As if it were very hot, though it couldn't have been, by then. And when he'd swallowed he said, to his bowl, very low, *thank you*, and Dokyun went on talking about the thief at Yeonan and didn't hear him, or did, and reached over without looking and patted the table twice in front of Haechan's bowl with his big flat hand, the way you'd pat a dog that had done something right." },

    // The cup.
    { n: "The barley tea came round again. Mrs. Moon brought a fresh pot, hot, and set it down by Solar's elbow because Solar was the guest and you started with the guest, and went away." },
    { n: "Solar filled Madam Kang's cup. She filled Dokyun's, and Jungwon's, and reached across for Haechan's, and he held it out to her without being asked. Then she put the pot down and looked along the table." },
    { n: "At the far end the celadon cup was still full. It had gone cold an hour ago. There was no steam off it at all, and the surface of the tea had gone very still and dark, the way still water goes dark at dusk, and the lamp over the table lay on it in a small gold coin." },
    { choose: [
      { t: "(Take the pot down the table. Fill the far cup.)", stat: { kindness: 1 }, then: [
        { n: "She got up. She didn't decide to. Her knees did it, and the pot was in her hands, and she was walking down the length of the black table in her stockinged feet on the warm boards, past the scroll, toward the window and the sea." },
        { n: "The room had gone quiet behind her. Even Dokyun." },
        { n: "She poured the cold tea out into the empty rice bowl turned upside down beside it, because there was nowhere else, which was wrong and she did it anyway, and filled the celadon cup again from the pot, hot, to the brim, carefully, the way he had, and set the pot down on the black wood and stood there for a second with her hand on the warm lid." },
        { n: "The photograph laughed at somebody past the edge of its frame." },
        { n: "When she came back to her cushion Dokyun was looking at her. His face was doing nothing, which she had never once seen it do, the big warm harbor of it gone completely closed, and his eyes were wet, wetter than the soju, and he didn't wipe them." },
        { s: 'dokyun', f: 'sad', t: "...Thank you, daughter-in-law." },
        { n: "That was all. Then he picked up his chopsticks and found the last of the bream and said it was a crime to leave a fish like that, a crime, and the room started again round him like a clock somebody had shaken." },
        { n: "Madam Kang hadn't said anything. She was folding her napkin." },
        { flag: 'epi-s-yang-tea' }
      ] },
      { t: "(Pass the pot to Madam Kang.)", then: [
        { n: "She passed the pot to Madam Kang, both hands, the way you passed things to someone's mother." },
        { n: "Madam Kang took it, and held it for a moment in her small hands, and looked down the length of the table at the cold cup at the far end. Then she set the pot down in the middle of the table, beside the omelet, where anyone could reach it, and folded her hands again, and that was an answer to something, though Solar couldn't have said what the question had been." }
      ] },
      { t: "(Leave it. It isn't yours to pour.)", then: [
        { n: "She left it. It wasn't hers. Some things in a house were only one person's to do, and she'd grown up in a house full of them, and knew better than to put her hand on one." },
        { n: "The cup went on being cold at the end of the table, with the lamp lying in it like a coin, and nobody looked at it, and everybody knew exactly where it was." }
      ] }
    ] },

    // The boat.
    { n: "By the fruit, Madam Kang's napkin wasn't a napkin anymore." },
    { n: "Solar didn't see her do it. Nobody ever did. It was a linen square on the table beside the untouched cup and then, somewhere between the bream and the pears, without Madam Kang ever looking down, it was a boat. A small white paper boat with a peaked sail and a flat bottom and creases so sharp you could have cut a finger on them, sitting on the black wood among the fruit knives." },
    { n: "Haechan was watching her hands. He'd been watching them since the fish. He looked at the boat now the way you'd look at a door in a house you used to live in." },
    { n: "Madam Kang picked it up, as if she'd only just found it there, and turned it once in her fingers, and then reached across and set it down beside Solar's bowl, facing nowhere in particular, and folded her hands." },
    { s: 'madamkang', f: 'neutral', t: "The camellias will be out in a week or two. Come for tea." },
    { s: 'solar', f: 'surprised', t: "I'd like that, Madam Kang." },
    { s: 'madamkang', f: 'neutral', t: "When it's dusty. Nobody comes when it's dusty. I'll send the car." },
    { n: "Riki came through the kitchen door at exactly that moment at exactly the wrong speed, with a banana in one hand and a message for Jungwon in his mouth about a truck, and saw the table, all of it, the five of them and the sixth place and Haechan sitting at it, and stopped so hard his trainers squeaked on the boards." },
    { s: 'niki', f: 'surprised', t: "Hyung, the truck— oh. Oh. Sorry. Evening, Chairman. Evening, Madam. Evening, noona. Evening—" },
    { n: "He'd got to Haechan. He looked at him sitting at the Chairman's table in an ironed shirt with a bowl in front of him, and his face did something very young and very complicated, and he bowed, deep, to the wrong person, and went straight back out the way he'd come." },
    { s: 'dokyun', f: 'happy', t: "That boy runs like a gate's on fire. *Riki-ya!* Eat something! He won't. He'll eat a banana in the yard like a monkey. Jungwon-ah, go and see about the truck. Go." },

    // The door.
    { place: 'Incheon · The Yang House', time: 'Evening', soft: true },
    { n: "At the door Dokyun held her coat for her himself, and then her scarf, and wound the scarf round her neck twice with his big hands as if she were six, and kissed the top of her pinned head, and said she was to eat, and sleep, and eat, and that Friday was karaoke and she wasn't to think of coming this Friday, his throat was ruined, but the Friday after the moon, the first of March, a holiday, a man had to sing on a holiday or what was the country for." },
    { s: 'dokyun', f: 'happy', t: "Everyone sings in this house. Everyone. Even my wife, once. Nineteen ninety-one. I have a witness." },
    { n: "Madam Kang, in the hall behind him with her hands folded, didn't say anything at all, but the corner of her mouth moved, very slightly, and stayed moved." },
    { n: "Then Dokyun turned to Haechan, who was already at the bottom of the steps with the Rexton's keys in his hand, and went down to him in his slippers on the cold stone, and hugged him again." },
    { n: "Solar was on the top step. She heard it this time. He'd meant her to." },
    { s: 'dokyun', f: 'happy', t: "Ten days she's ill and that house tells me nothing. Nothing. You hear me, Donghyuck-ah? Next time she so much as sneezes, you ring me. My number. Day or night." },
    { s: 'dokyun', f: 'serious', t: "Or I'll put you in the pond with the greedy one. And I'll stand on the bridge while I do it." },
    { n: "He kissed the side of Haechan's head, hard, and let him go, and slapped his cheek twice, and went back up the steps, laughing, wrist to mouth, and the door shut behind him and the whole lit house went on glowing over the water like nothing had been said in it at all." },

    // The car.
    { place: 'Incheon · The Car', time: 'Evening' },
    { music: 'epi-s-step' },
    { n: "Haechan drove the coast road at exactly the speed limit. He didn't put the tape back in. The heater roared and the cranes went by and the lights of the old city came up on the right, small and yellow, and among them somewhere her own window, which she'd left the lamp on in." },
    { n: "Halfway along the seawall he said it. To the windscreen." },
    { s: 'haechan', f: 'neutral', t: "He gave me the cheek." },
    { s: 'solar', f: 'neutral', t: "I saw." },
    { s: 'haechan', f: 'neutral', t: "He's never once given me the cheek. Not when I was fourteen. Not ever. Somebody used to fight him for it, every time, across the table, like two dogs, and then give it to me anyway. Every single time." },
    { n: "He didn't say who. He didn't have to. She thought of the photograph, the white shirt, the head thrown back, laughing past the edge of the frame at a skinny boy in a T-shirt with holes in it." },
    { choose: [
      { t: "(Put your hand on the back of his neck while he drives.)", then: [
        { n: "She reached across and put her hand on the back of his neck, under the collar of the ironed shirt, where the hair was short and warm, and left it there." },
        { n: "He didn't say anything. He didn't take his eyes off the road. But his head went back, a centimeter, into her palm, and stayed there, all the way along the seawall, and she felt him swallow." }
      ] },
      { t: "Did it taste the same?", then: [
        { s: 'solar', f: 'sad', t: "Did it taste the same?" },
        { n: "He was quiet for so long she thought he wasn't going to answer. A lorry went by the other way, its lights going over his face and off it again." },
        { s: 'haechan', f: 'sad', t: "No." },
        { s: 'haechan', f: 'neutral', t: "Better fish. Worse." }
      ] }
    ] },
    { bond: { haechan: 1 } },
    { n: "In her coat pocket, against her hip, the paper boat. She hadn't decided to take it either. She put her hand in and closed it round the boat very gently, so it wouldn't crush, and kept it there, the whole way home, the way you'd hold something that might still be warm." }
  ] },

  // ───────────────────────────── 3/1, evening: everyone sings ─────────────────────────────
  { id: 'epi-s-yang-karaoke', date: '3/1', slot: 'evening', consumes: true, title: 'everyone sings', place: 'Incheon · The Yang House · Living Room', time: 'Evening', scene: [
    { music: 'epi-s-yunjin' },
    { n: "The karaoke machine in the Yang living room was the size of a refrigerator and about as old as Solar, a great black cabinet with a screen set into the top of it and two microphones on curly cords and a songbook as thick as a telephone directory held together down the spine with brown packing tape, and when Dokyun switched it on, it hummed for a full minute and then played four bars of fanfare so loud that the koi in the courtyard pond went to the bottom." },
    { n: "It was the first of March. A holiday. There had been flags on every lamp post along the coast road and a man on the radio reading the declaration in a voice like a funeral, and Dokyun had a small paper taegukgi on a stick tucked into the breast pocket of his persimmon cardigan, upright, like a handkerchief, as if the country might check." },
    { s: 'dokyun', f: 'happy', t: "Ninety-four years! Ninety-four years ago today our grandfathers went out in the street and shouted at the Japanese, and what do we do? We sing. That's what they did it for. So a man could sing in his own house in his own language as badly as he wants. Sit! Everybody sit." },
    { n: "Everybody sat. The long room, the black leather sofas, the low glass table covered in dishes: Mrs. Moon's green-onion pancakes cut in squares, a mountain of fried chicken that Yunjin had brought in two plastic bags from the place on the corner, a plate of dried squid, three bottles of soju sweating on the glass, a bowl of mandarins. Riki on the floor with his back against the sofa and the songbook open across his knees. Jay leaning in the kitchen doorway with his arms folded and his cigarette behind his ear, having stated, at the door, that he was there for the chicken and was not, under any circumstances, singing." },
    { n: "Yunjin had come in the purple Veloster with the horn that played La Cucaracha, and played it all the way up the drive, and Dokyun had gone out onto the step in his slippers and laughed so hard at it he had to hold the door frame." },
    { s: 'yunjin', f: 'happy', t: "Abeonim. I brought chicken. I brought soju. I brought my voice, which is wrecked, so you'll sound better next to it." },
    { s: 'dokyun', f: 'happy', t: "This girl! This is the only girl in Incheon with any sense. Sit next to me. No, here. Move, Jungwon-ah." },
    { n: "Jungwon moved. He'd been put on the end of the middle sofa in a dark sweater with his back very straight and his right hand on his knee, and he moved down one cushion exactly, toward Solar, without a word, with the expression of a man who had attended this event every Friday of his life and had long ago stopped expecting to be consulted about the seating." },
    { n: "Haechan was against the wall by the window. He'd been told twice to sit and hadn't. He had a can of beer he wasn't drinking and the black jacket on, and behind him, through the glass, the courtyard with the little brass lamps along the edge of the pond and the red bridge over it, and the dark water with the big white koi turning slowly near the bottom, sulking." },
    { n: "And on the arm of the far sofa, in black, with her ankles crossed and her hands in her lap, Madam Kang." },
    { n: "She didn't sit on the sofa. She sat on its arm, very upright, a little apart, the way you'd sit if you might need to leave at any moment and wanted it understood that you were only there because someone had asked. There was a paper napkin on her knee. Her hands weren't doing anything with it yet." },

    // Tears of Mokpo.
    { n: "Dokyun went first. Dokyun always went first. Riki didn't even have to look it up: he called out a number and Dokyun keyed it in with one thick finger, and the screen went blue and then showed a fishing harbor at dusk, gulls, an old man mending nets, a girl in a hanbok looking out to sea, and the first long sobbing notes of *Tears of Mokpo* came out of the black cabinet like a ship's horn." },
    { n: "He sang all six verses." },
    { n: "He sang them standing up, with his feet planted and his eyes shut and the microphone held in both hands in front of his chest like a candle in church, and he sang them badly. Not a little badly. Thoroughly, generously, magnificently badly, flat on every long note and then sharp to make up for it, a half beat behind the words on the screen and then a half beat ahead, his big voice cracking on the high bits and going on straight through the crack as if it weren't there." },
    { n: "And he meant every word. That was the thing. That was what made it impossible to laugh at, though Yunjin was laughing, bent double on the sofa with a drumstick in her fist and tears running down her face. He meant it. A woman at a harbor, a ship that didn't come back, the long wait on the shore. His eyes stayed shut and his face went soft and wet and open, and by the fourth verse he wasn't singing it to the room at all." },
    { n: "Solar looked at Jungwon. Jungwon was looking at the glass table with great concentration. The tips of his ears had gone red." },
    { s: 'solar', f: 'happy', t: "*Every Friday?*" },
    { s: 'jungwon', f: 'neutral', t: "*Every Friday since nineteen ninety-four. Six verses. I've timed it. Four minutes and fifty seconds, without the applause.*" },
    { s: 'jungwon', f: 'neutral', t: "*There's always applause.*" },
    { n: "There was. Dokyun opened his eyes on the last note, wet, beaming, and Yunjin was on her feet screaming *abeonim* like he was a boy band, and Riki was hitting the floor with the flat of his hand, and even Jay in the doorway clapped, twice, ironically, with a chicken wing in his mouth. Madam Kang didn't clap. But she was looking at her husband, and her face, for a moment, was not a face Solar had ever seen on her." },
    { s: 'dokyun', f: 'happy', t: "Thank you! Thank you. Now. Now, the high part." },
    { n: "He turned. He was looking at his son." },
    { s: 'dokyun', f: 'happy', t: "This boy sang the high part of *Tears of Mokpo* at eleven years old in this room like an angel off a church roof, daughter-in-law. An angel. He stood right there on that rug. And then he cried, the whole of the last verse, cried like a baby, and his brother had to pick him up and put him on his shoulders and walk him round the room till he stopped—" },
    { n: "He stopped." },
    { n: "Only for a breath. The room heard it. Haechan by the window had put the can down on the sill. Madam Kang's hands had found the napkin on her knee. Then Dokyun laughed, too loud, and held out the second microphone on its curly cord across the glass table." },
    { s: 'dokyun', f: 'happy', t: "So. The high part. Jungwon-ah. For your father. On a holiday." },
    { s: 'jungwon', f: 'neutral', t: "Father, I don't sing." },
    { s: 'dokyun', f: 'happy', t: "He doesn't sing! He sings in the shower! I've heard him! Through the floor!" },
    { s: 'jungwon', f: 'flustered', t: "That's— Father. Please." },
    { n: "Jungwon had never in her hearing said *please* to his father in that voice. It was the politest voice he had, the one for customs officers and ministers, and it meant he would rather walk into the sea." },
    { choose: [
      { t: "(Take the microphone. Sing the high part yourself.)", stat: { courage: 1 }, then: [
        { n: "She took it. Out of Dokyun's hand, across the table, before Jungwon could. The cord was warm from his fingers." },
        { s: 'solar', f: 'happy', t: "He's out of practice, Father. I'll do it. Riki, the number." },
        { n: "She couldn't sing the high part. Nobody could who wasn't eleven and an angel. She sang it anyway, with Dokyun roaring the low line beside her a half beat behind, and her voice went up for the top note and simply didn't arrive there, cracked in half like a bureom walnut, and she laughed in the middle of the word and kept going through the laugh the way he did, because that seemed to be the rule in this room, and Dokyun put his free arm round her shoulders, heavy as a yoke, and sang the rest of the verse into the top of her head." },
        { n: "When she sat down Jungwon didn't look at her. He moved his right hand off his knee and put it on the cushion between them, palm down, a centimeter from hers, and left it there for the whole of the next song." }
      ] },
      { t: "*Please.* (To Jungwon. In Mandarin. Only to him.)", then: [
        { n: "She didn't say it to the room. She leaned a centimeter toward him on the sofa and said it in Mandarin, under the noise of the machine's fanfare, one word, in the voice she used for him and nobody else." },
        { s: 'solar', f: 'flustered', t: "*Please.*" },
        { n: "He looked at her. For a long moment. The ears, the stillness. Then he stood up, and took the microphone out of his father's hand, and nodded to Riki, and Riki, who had already found the number, keyed it in with his mouth open." },
        { n: "He sang the high part." },
        { n: "It came out of him clear and true and dark, a baritone that had been put away somewhere for years and had come out exactly as it went in, without a scratch on it, and it went up to the top note and arrived there, and stayed, and the whole long room went silent round it. Yunjin put her drumstick down. Jay took the chicken wing out of his mouth. Riki stopped breathing." },
        { n: "Dokyun didn't sing the low line. He'd forgotten to. He stood there with his hands at his sides and his mouth open and the tears running straight down into his collar, and didn't wipe them, and didn't sing." },
        { n: "Jungwon didn't cry. He sang it to the end with his face perfectly composed and his right hand at his side, and on the last note he looked, for one second, not at his father but at the far sofa, at the woman on its arm, and then he handed the microphone back to Dokyun, and sat down next to Solar, and picked up a mandarin, and began to peel it with great care." },
        { s: 'jungwon', f: 'neutral', t: "*I'm going to need you to not look at me for the rest of the evening.*" },
        { s: 'solar', f: 'happy', t: "*I'm not looking.*" },
        { s: 'jungwon', f: 'flustered', t: "*You're looking very loudly.*" },
        { flag: 'epi-s-yang-high' },
        { bond: { jungwon: 1 } }
      ] },
      { t: "(Hand the microphone to Yunjin.)", stat: { charm: 1 }, then: [
        { n: "She took the microphone off Dokyun and put it straight into Yunjin's hand, and Yunjin, who had been waiting her whole life for exactly this, stood up on the sofa." },
        { s: 'yunjin', f: 'happy', t: "Abeonim. I'm going to do the high part. I'm going to do it with this voice. You're going to regret every choice that brought you here." },
        { n: "She did the high part. In the voice she had now, the one that sounded like gravel being poured down a slide, a full octave below where it was written and with tremendous feeling, and Dokyun laughed so hard he had to sit down on the rug, and Jungwon, beside Solar, let out a breath that he'd apparently been holding since nineteen ninety-four." }
      ] }
    ] },

    // The middle of the night.
    { n: "After that it went the way those nights go." },
    { n: "Yunjin and Dokyun did a trot duet about a man and a woman meeting at a train station, both of them shouting, both of them doing the hand movements from the music video, Yunjin's off by a beat on purpose. Riki was talked into a Japanese song by everybody at once and sang it fast and very well, in a light clear voice, looking at the screen and nothing else, and when he got to the end Solar realized she'd been mouthing the words of the chorus without meaning to, in Japanese, the way you'd mouth the words of a song that played in a convenience store in another life every single afternoon at four." },
    { n: "Riki saw. His eyes came off the screen to her mouth and stayed there, and then he looked at the floor, and didn't say anything, and went bright red, and bowed to the room." },
    { glitch: { near: true } },
    { n: "Jay refused to sing four times and then, at half past ten, with no warning, keyed in an American song from the nineties about a girl and a car and sang the whole thing in flawless English in a dead flat voice without once changing his expression, and sat back down, and ate a chicken wing, and when Yunjin screamed at him he said only that the song had good structure." },
    { n: "Haechan didn't sing. Dokyun asked him four times and then stopped asking. He stayed by the window with the beer going warm on the sill, and every so often his eyes went to the far sofa and Madam Kang's hands on her knee, and then to the courtyard, and then to Solar, and away." },
    { n: "The napkin on Madam Kang's knee was a boat by eleven. Then another. She'd taken a second napkin off the table without anybody seeing her do it, and then a third, and there were three of them now on the arm of the sofa beside her, small and white and sharp, in a row." },

    // The song without the book.
    { n: "At ten past eleven Dokyun went to the machine." },
    { n: "He didn't ask Riki for a number. He didn't open the book. He stood in front of the black cabinet in his persimmon cardigan with the little paper flag still upright in the pocket, and keyed in four digits with his thick finger, slowly, one, two, three, four, the way you'd dial a telephone number you'd known by heart for a very long time and hadn't rung in years." },
    { music: 'epi-s-half' },
    { n: "The screen went black. Then a title came up in white letters. Seo Taiji and Boys. *Come Back Home.*" },
    { n: "The room changed." },
    { n: "She felt it go through all of them. Yunjin, who didn't know why, felt it anyway and put her soju down. Riki looked up from the book. Jay unfolded his arms in the doorway. Jungwon, beside her, went so still that she could hear his watch. By the window, Haechan's hand had gone to the pocket of the black jacket and stopped there, flat, over something square, and hadn't come out." },
    { n: "Madam Kang's hands had stopped folding." },
    { n: "It wasn't a ballad. That was the first terrible thing. It was the opposite of a ballad, a heavy grinding song from nineteen ninety-five with a guitar like a lorry changing gears and a beat you were supposed to shout over, and most of it wasn't even sung, it was rapped, fast and angry, the words coming in long hard runs. Dokyun couldn't rap. He had never in his life been able to rap. He stood in front of the screen with the words racing across it in white and sang them anyway, slowly, the way he'd sung *Tears of Mokpo*, every one of them, long and tender and flat, as if it were a ballad, a full bar behind, holding notes that weren't there, with his eyes open this time, on the screen, following the words like a man reading a letter." },
    { n: "It was the worst thing Solar had ever heard. She couldn't breathe." },
    { n: "Then Haechan came off the wall." },
    { n: "He crossed the room without looking at anybody, and picked up the second microphone off the glass table where Yunjin had left it, and stood next to Dokyun in front of the screen, a meter off, the way he stood next to her father, and on the next run of words he came in." },
    { n: "Not singing. Rapping. Flat, fast, exact, every word on the beat, in a voice gone low and hard and young, not performing it, just keeping time, putting the words down where they went one after another like stones on a board so that the old man next to him had somewhere to stand. He knew it all. He didn't look at the screen once. He knew it the way you know a song somebody played you so many times in a car with the windows down that it isn't a song anymore, it's the car." },
    { n: "Dokyun didn't look at him. He kept singing his slow wrong ballad over the top of it, and Haechan kept the beat under him, and the two of them stood side by side in front of the black cabinet in the long lit room and did it together, the whole song, all of it, the old man a bar behind and the boy dead on time, two halves of something that didn't fit and fit." },
    { n: "Nobody in the room moved." },
    { n: "On the arm of the far sofa Madam Kang sat with her hands open in her lap and three white boats in a row beside her, and watched her husband's back, and watched the boy beside him, and didn't move her face at all. Solar watched her. It was the only thing she could look at that didn't hurt." },
    { n: "When it ended the machine played its fanfare and a score came up, sixty-one, and a cartoon rabbit holding a sign that said *try harder!*" },
    { n: "Dokyun looked at the rabbit for a long moment. Then he laughed. His wrist came up to his mouth. He laughed into it until his shoulders shook, and wiped his eyes with the back of the same wrist, and turned, and took Haechan's face in one big hand, and shook it, gently, fondly, the way you'd shake a fish." },
    { s: 'dokyun', f: 'happy', t: "Terrible song. Terrible. Somebody played it in my car till the tape snapped." },
    { s: 'dokyun', f: 'happy', t: "*Try harder.* You hear that, Donghyuck-ah? The machine says try harder." },
    { s: 'haechan', f: 'neutral', t: "The machine's tone deaf, Hoejangnim." },
    { s: 'dokyun', f: 'happy', t: "The machine's tone deaf! He's right. Daughter-in-law. Your turn. Riki, give her the book. Something happy. A happy one, for God's sake, it's a holiday." },
    { choose: [
      { t: "(A trot song. Badly. On purpose.)", stat: { charm: 1 }, then: [
        { n: "She sang a trot song. The worst one she knew, about a man whose wife left him for a sailor, which she'd learned from the back seat of a Rexton. Badly, on purpose, with all the hand movements, and Yunjin did backing vocals from the sofa an octave down, and Dokyun sang along to the chorus and got the words wrong, and Riki laughed so hard he fell over sideways on the rug." },
        { n: "By the window, Haechan had picked his beer up off the sill again. He was looking at her like she'd done something he'd remember." }
      ] },
      { t: "(Give the microphone to Madam Kang.)", stat: { courage: 1 }, then: [
        { n: "She took the book and didn't open it. She crossed the room to the far sofa and held the microphone out, both hands, the way you'd hand something to someone's mother." },
        { s: 'solar', f: 'neutral', t: "Madam Kang. Nineteen ninety-one. Father says there was a witness." },
        { n: "The whole room held its breath. Dokyun's mouth opened." },
        { n: "Madam Kang looked at the microphone. Then at Solar. And then, very slightly, she shook her head, and the corner of her mouth moved, and stayed moved, the way it had in the hall, and she reached out and closed Solar's fingers back round the microphone with her own small cool hand, and held them there for a moment." },
        { s: 'madamkang', f: 'neutral', t: "Next year." },
        { n: "Two words. Dokyun let out a roar like a man whose team had scored, and Yunjin screamed, and Madam Kang folded her hands in her lap again as if nothing had happened, and Solar walked back across the room with the microphone and her fingers still cold where they'd been held." }
      ] }
    ] },

    // Leaving.
    { place: 'Incheon · The Yang House', time: 'Evening', soft: true },
    { music: 'epi-s-house' },
    { n: "At a quarter to twelve Jungwon looked at his watch and then at Haechan, and Haechan looked back, and the two of them stood up at the same moment from opposite ends of the room without a word to each other, which was the closest thing to an agreement Solar had ever seen them have in public." },
    { s: 'jungwon', f: 'neutral', t: "I'll see Solar-ssi home, Father." },
    { s: 'dokyun', f: 'happy', t: "Go! Go. A man sees a girl home. In my day we walked. Across the water. In the snow." },
    { s: 'jungwon', f: 'neutral', t: "There wasn't a bridge in your day, Father." },
    { s: 'dokyun', f: 'happy', t: "That's how far we walked!" },
    { n: "In the hall, Dokyun caught his son by the back of the neck." },
    { n: "Just his hand. Big and warm, at the nape, under the collar of the dark sweater, the way you'd take a puppy by the scruff, and he held on, and pulled Jungwon's head in toward his own, and put his forehead against his son's for a second, hard, both of them with their eyes shut, in the hall, in front of everyone." },
    { s: 'dokyun', f: 'sad', t: "You sang." },
    { n: "Jungwon said nothing. His ears had gone the colour of the persimmon cardigan. But he didn't pull away, and Dokyun didn't let go until he was ready to, and then let go all at once and slapped his son's shoulder and roared for Mrs. Moon to bring the girl's coat, the girl was going to freeze." },
    { n: "Madam Kang brought it instead. And a thermos, a tall one in green tartan, heavy and warm, which she put into Solar's hands with the coat over it." },
    { s: 'madamkang', f: 'neutral', t: "Jujube. For whoever is at your gate tonight." },
    { n: "Solar looked at her. Madam Kang looked back with the sad, kind eyes, steady, giving away nothing at all, and then reached up and turned Solar's collar out where it had folded under, and smoothed it, once, and stepped back." },
    { n: "She'd known about the gate. Of course she had. She'd known, Solar thought, going down the steps in the cold with the warm thermos against her chest and Jungwon a correct distance beside her and Haechan already at the Rexton with the engine running, about every door in two houses that anybody stood at after midnight, for a very long time." },
    { n: "Behind them the machine started up again. Dokyun, alone, in the long lit room. *Tears of Mokpo*. From the beginning. All six verses." }
  ] },

  // ───────────────────────────── 3/9, daytime: for grief ─────────────────────────────
  { id: 'epi-s-camellias', date: '3/9', slot: 'after', consumes: true, title: 'for grief', place: 'Incheon · The Car', time: 'Daytime', scene: [
    { music: 'epi-s-dust' },
    { n: "The car came at two. Not Mr. Oh's car and not the Rexton: a long black Equus, polished so deep the dust lay on it like a skin of pollen, with a driver in a dark suit and a paper mask who got out and bowed to the Lee gate and said, through the mask, that Madam asked whether Agasshi would take tea." },
    { n: "It was dusty. It had been dusty for five days. The whole city had gone the colour of weak tea, the harbor gone, the cranes gone, the far shore rubbed out, and people walking past the gate in masks with their eyes screwed up, and nobody could see anybody's face. Nobody comes when it's dusty, Madam Kang had said, across a table, three weeks ago. She'd remembered. She'd waited for it." },
    { n: "Haechan came out of the annex with his jacket half on when he heard the engine, and looked at the Equus, and at the driver, and at her, and then put the jacket the rest of the way on." },
    { s: 'haechan', f: 'neutral', t: "I'm coming." },
    { s: 'solar', f: 'neutral', t: "It's tea." },
    { s: 'haechan', f: 'neutral', t: "Then I'll sit in the courtyard. It's ten meters. I've sat in it before." },
    { n: "He said it in a voice that meant there was a whole other conversation under it that he wasn't going to have in front of the Yang driver, and she let him get into the back of the Equus beside her, and the driver looked at him in the mirror once with something in his face, and then drove." },

    // The garden room.
    { place: 'Incheon · The Yang House · Garden Room', time: 'Daytime' },
    { n: "The garden room was all glass." },
    { n: "Three walls and the roof of it, and the fourth wall black stone, and the dust outside on every side pressing up against the panes, yellow and soft and endless, so that the room seemed to be floating in it, a glass box set down in the middle of a cloud. The light came through it the colour of an old photograph. And inside, in big glazed pots, on the floor, on the shelves, on stands, in every corner: camellias. Red and white and a pink so pale it was nearly nothing. All of them out at once." },
    { n: "It smelled of them. Cool and faint and green. After five days of dust in her teeth and her eyes and her hair, the smell of a room where the air was clean was so strong she stopped in the doorway with her mask still in her hand and just breathed." },
    { n: "Madam Kang was at the low table in the middle of it, on a cushion, in black, pouring tea." },
    { n: "She didn't get up. She looked up, and the small tired smile came, real, and she moved one hand toward the cushion across from her." },
    { s: 'madamkang', f: 'neutral', t: "Sit, Solar-ssi. Donghyuck is in the courtyard. I saw him. He'll be cold. Mrs. Moon will take him something." },
    { n: "Through the glass to the left, ten meters off, half rubbed out by the dust, the courtyard: the pond, the little red bridge, and on the bridge, alone, with his hands in the pockets of his black jacket and a paper mask under his chin, Haechan, looking down at the water. Nobody's arm round his shoulders. Nobody talking in his ear. Just him and the koi, and the dust coming down between them." },
    { n: "Solar sat." },
    { n: "The tea was jujube. Dark red-brown, in a white celadon cup with cranes on it, and it smelled of dates and honey and something underneath that was older than either. There were dried persimmons on a plate, flattened and sugared, and pine nuts in a little dish, and a white linen napkin folded into a square beside the pot." },
    { s: 'madamkang', f: 'neutral', t: "For grief." },
    { n: "She said it as she set the cup down in front of Solar. As if she were saying what the tea was called." },
    { s: 'madamkang', f: 'neutral', t: "My mother-in-law said it was good for other things too. She was right. It's good for coughs. It's good for the dust. It's good for a girl who's been ill for ten days." },
    { n: "Solar picked up the cup. It was very hot. She held it in both hands and felt the heat go into her palms, into the old white scar across the left one, and didn't drink yet." },

    // Ten days.
    { ifFlag: 'epi-s-yang-tea', then: [
      { s: 'madamkang', f: 'neutral', t: "You poured his tea. At the table." },
      { n: "Solar's hands went still round the cup." },
      { s: 'madamkang', f: 'neutral', t: "Nobody does that but my husband. Not me. Not his brother. Not Mrs. Moon. Every meal, for a very long time, my husband gets up and walks down the table and pours it, and we all look at our rice." },
      { n: "She drank her own tea. Small sip. Put the cup down in its ring." },
      { s: 'madamkang', f: 'neutral', t: "He didn't sleep that night. He sat up in his study with the door open. In the morning he told me you have good hands." },
      { s: 'madamkang', f: 'neutral', t: "Thank you." }
    ] },
    { n: "They drank. Outside the dust moved past the glass so slowly you couldn't see it move, only that it had. On the bridge, Haechan crouched down and put his hand flat on the cold red rail and looked at something in the water. A big white shape came up under him, slowly, out of the dark, and turned, and went down again." },
    { n: "Madam Kang watched it too." },
    { s: 'madamkang', f: 'neutral', t: "The greedy one. He only comes up for my husband." },
    { s: 'madamkang', f: 'neutral', t: "And for Donghyuck, it seems." },
    { n: "She picked up the white linen napkin from beside the teapot. She didn't seem to notice she'd done it. Her small hands began, without her looking at them, to fold it. Corner to corner. A crease. Another. The thin gold band caught the yellow light and let it go." },
    { s: 'madamkang', f: 'neutral', t: "You weren't ill." },
    { n: "Not a question. She said it to the napkin, in the same soft level voice she'd used for the tea, for the koi, for the weather, and the camellias went on being red and white in their pots, and the dust went on pressing at the glass, and Solar's heart went down through the cushion and the floor into the cold under the house." },
    { s: 'madamkang', f: 'neutral', t: "I won't ask you where. I'm not going to ask. I want you to know I'm not." },
    { s: 'madamkang', f: 'neutral', t: "I only know what a house looks like when it's keeping a room. I watched yours from the car at Seollal. Every window lit. Your mother at the gate in her good coat, smiling at the relatives, and the curtains in your room never once opened. That's a house keeping a room." },
    { n: "The napkin turned in her hands. A fold. A tuck." },
    { s: 'madamkang', f: 'neutral', t: "I've kept one." },
    { n: "That was all she said about it. She didn't say for whom. She didn't need to. Solar thought of a door at the end of the east wing, and the thin wall beside it, and a boy of twenty in a silver frame laughing at somebody past the edge of the picture, and didn't let herself think the rest of it, any of it, in any direction, because there were some thoughts that weren't hers to have in this woman's room." },
    { choose: [
      { t: "No. I wasn't ill.", stat: { courage: 1 }, then: [
        { s: 'solar', f: 'sad', t: "No. I wasn't ill." },
        { n: "It came out very quietly. It was the first time she'd said it aloud to anyone who hadn't been there, to anyone outside the three of them and her father on the seventh stair, and she felt it leave her, and felt how light the place was where it had been." },
        { n: "Madam Kang nodded. Once. As if Solar had told her the time." },
        { s: 'madamkang', f: 'neutral', t: "Good. Don't tell me the rest. I've never been able to keep a thing from my husband in thirty-one years except my own two hands." },
        { n: "She turned her left hand over on the table, palm up, without looking at it. The thin white line across the meat of the palm, old, faint, almost exactly where Solar's own was. Then turned it back down and went on folding." },
        { flag: 'epi-s-kang-true' }
      ] },
      { t: "Thirty-nine four. The second night.", then: [
        { s: 'solar', f: 'neutral', t: "Thirty-nine four, Madam Kang. The second night. Mrs. Bang sat up with me." },
        { n: "Madam Kang looked up from the napkin. The sad, kind eyes rested on her face for a long moment, with nothing in them at all that Solar could fight, and then went back down to her hands." },
        { s: 'madamkang', f: 'neutral', t: "Mrs. Bang is a good woman. She'd sit up with anyone." },
        { n: "She didn't say anything else about it. She'd let the lie go by her the way you let a car go by on a narrow road, stepping into the hedge, and Solar sat there with it held up between them in both hands, perfectly whole, perfectly believed, and felt it weigh more than it had at any table in Incheon." },
        { glitch: { strain: 1 } }
      ] },
      { t: "(Say nothing. Drink the tea.)", stat: { kindness: 1 }, then: [
        { n: "She didn't answer. She drank the tea. It was very good, and very hot, and it went down into her and sat there, warm, the way it was supposed to." },
        { n: "Madam Kang didn't wait for an answer. She hadn't asked for one. She went on folding, and after a while she reached across and refilled Solar's cup without asking, to the brim, and that was all either of them said about it." }
      ] }
    ] },

    // The boat.
    { n: "The napkin was a boat. A small white boat with a peaked sail, sharp-creased, sitting on the pale wood between the persimmons and the pot." },
    { n: "Madam Kang looked at it as if she'd only just found it there. Then she took the second napkin, Solar's, off the table beside Solar's cup, and held it out across the table." },
    { s: 'madamkang', f: 'neutral', t: "Fold one." },
    { s: 'solar', f: 'surprised', t: "I don't know how." },
    { s: 'madamkang', f: 'neutral', t: "Everyone in my family can do it. You'll be in my family in five weeks, my husband says. So." },
    { n: "Five weeks. April. Dokyun's word, in his wife's mouth, set down on the table like the boat, without any weight put on it either way. Solar didn't pick it up. Madam Kang didn't wait for her to." },
    { n: "She taught her. Across the low table, in the yellow light, slowly, her own small hands doing each fold in the air a second ahead so that Solar could copy it. Corner to corner. Open. The other corners in to the line. Fold the bottom up. Again. Open it out from the middle, which was the part where the whole thing looked like it was ruined, a crumpled mess of linen, and then, if you held your nerve and kept pulling, wasn't." },
    { s: 'madamkang', f: 'neutral', t: "That's where everybody stops. In the middle, when it looks wrong. My younger son cried at that part every time. His brother used to tell him crying wouldn't make it float either, and make him start again." },
    { n: "Her hands stopped in the air." },
    { n: "Just for a moment. Halfway through a fold. Solar didn't breathe. On the bridge, through the glass, the dust had thickened, and Haechan was only a shape now, dark, crouched by the rail, half gone." },
    { s: 'madamkang', f: 'neutral', t: "My son—" },
    { n: "She didn't finish it." },
    { n: "She sat with her hands open over the table and the half-folded boat between them and looked out through the glass, at the courtyard, at the dust, at the shape on the bridge, for a long time. The camellias stood round her in their pots, red and white. One of the big red ones by the black stone wall, the oldest, the one in the corner that shared a wall with a room at the end of the east wing, dropped a flower. Whole. The way camellias did, not petal by petal like other flowers but all at once, the whole head of it, onto the stone floor with a small soft sound." },
    { n: "Madam Kang looked at it. Then she finished the fold." },
    { s: 'madamkang', f: 'neutral', t: "Pull. Don't stop because it looks wrong." },
    { n: "Solar pulled. The mess of linen opened out in her hands, and turned itself the right way round, and was a boat. Lopsided. One side of the sail higher than the other. A crease she'd got wrong at the bottom so that it listed a little to the left, like a boat with something heavy in its hold." },
    { n: "Madam Kang looked at it for a long moment. And then she laughed. Just once, very quietly, with her wrist to her mouth, the same gesture as her husband's and her son's, and her eyes went bright over the top of her wrist." },
    { s: 'madamkang', f: 'neutral', t: "It's terrible." },
    { s: 'solar', f: 'happy', t: "It floats?" },
    { s: 'madamkang', f: 'neutral', t: "We'll see." },

    // The door.
    { n: "When the tea was gone and the light through the glass had gone from yellow to the dull brass of four o'clock, Madam Kang walked her to the garden-room door, and stopped there with her hand on the frame, the way she had once before, months ago, when everything was different and nothing had happened yet." },
    { n: "She didn't touch Solar's hair this time. She looked at her. All of her, from the pins to the feet, the way she had at the table, the way Mrs. Bang looked at a fish. Then she put both her small cool hands round Solar's face, very lightly, for one second, the way you'd hold a cup to see if it was still warm." },
    { s: 'madamkang', f: 'neutral', t: "Whatever it is. Wherever it is." },
    { s: 'madamkang', f: 'neutral', t: "Eat first. Before you go anywhere. Every time. Promise me that, Solar-ssi. It's the only thing I've learned." },
    { s: 'solar', f: 'sad', t: "...I promise." },
    { n: "She let go. She went back to the low table and sat down on her cushion in her black and picked up the teapot and found it empty and held it anyway, both hands, and looked out at the dust." },
    { n: "In the courtyard Haechan straightened up from the rail when he saw Solar come out onto the boxwood path, and pulled his mask up over his mouth, and came to meet her across the little red bridge, and looked at her face once, quickly, all over, the way you'd check somebody had all their fingers." },
    { s: 'haechan', f: 'neutral', t: "You okay?" },
    { n: "She held up the lopsided boat. He looked at it." },
    { s: 'haechan', f: 'happy', t: "That's the worst boat I've ever seen in this house." },
    { s: 'solar', f: 'happy', t: "She said terrible." },
    { s: 'haechan', f: 'neutral', t: "She was being kind." },
    { n: "But he took it out of her hand very carefully, between two fingers, the way you'd pick up a moth, and put it in the inside pocket of his jacket, next to the square shape of something that hadn't played since two thousand and six, and buttoned the pocket, and walked her out through the dust to the car." }
  ]

  });

  /* ── Texts ── */
  const T = (R.texts ||= {});
  T.threads = Object.assign(T.threads || {}, { dokyun: '아버님', madamkang: 'Madam Kang' });
  const LEAVE = (then = []) => ({ t: '(Leave it on read.)', silent: true, then });
  (T.texts ||= []).push(
    { id: 'epi-s-tx-dokyun-1', thread: 'dokyun', date: '2/22', slot: 'early', events: ['epi-s-yang-dinner'], msgs: [
      { from: 'dokyun', t: "DAUGHTER-IN-LAW. GOOD MORNING!!" },
      { from: 'dokyun', t: "THIS IS YOUR FATHER. I PUT MY NUMBER IN YOUR TELEPHONE MYSELF WHILE YOU WERE PUTTING YOUR COAT ON. NOW YOU HAVE IT!!" },
      { from: 'dokyun', t: "DID YOU EAT BREAKFAST. EAT BREAKFAST. MY WIFE SAYS YOU ATE WELL LAST NIGHT. SHE NEVER SAYS ANYTHING SO THIS IS VERY IMPORTANT" }
    ], reply: [
      { t: "I ate, Father. Thank you for dinner.", then: [{ from: 'dokyun', t: "GOOD!!!!" }, { from: 'dokyun', t: "FRIDAY THE 1ST. KARAOKE. A HOLIDAY. EVERYONE SINGS" }] },
      { t: "Who taught you to text in capitals?", then: [{ from: 'dokyun', t: "MY SON. HE SAID IT IS EASIER TO READ" }, { from: 'dokyun', t: "HE WAS LYING. I KNOW HE WAS LYING. I DO IT ANYWAY" }] },
      LEAVE([{ from: 'dokyun', t: "SHE IS SLEEPING. GOOD. SLEEP" }])
    ] },
    { id: 'epi-s-tx-dokyun-2', thread: 'dokyun', date: '3/2', slot: 'early', events: ['epi-s-yang-karaoke'], msgs: [
      { from: 'dokyun', t: "SIXTY ONE!!! THE MACHINE IS A LIAR" },
      { from: 'dokyun', t: "THANK YOU FOR COMING. THANK YOUR FRIEND WITH THE HORN. SHE IS ALWAYS WELCOME. TELL HER" }
    ], reply: [
      { t: "You sang beautifully, Father.", then: [{ from: 'dokyun', t: "I KNOW" }, { from: 'dokyun', t: "NOBODY EVER SAYS IT. THANK YOU DAUGHTER-IN-LAW" }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-dokyun-3', thread: 'dokyun', date: '3/2', slot: 'after', events: ['epi-s-yang-karaoke'], flags: ['epi-s-yang-high'], msgs: [
      { from: 'dokyun', t: "HE SANG" },
      { from: 'dokyun', t: "HE HAS NOT SUNG IN THIS HOUSE SINCE HE WAS FIFTEEN. YOU KNOW THAT? FIFTEEN" },
      { from: 'dokyun', t: "I DON'T KNOW WHAT YOU SAID TO HIM. DON'T TELL ME. KEEP SAYING IT" }
    ], reply: [
      { t: "It was only one word.", then: [{ from: 'dokyun', t: "THE BEST THINGS ARE" }] },
      LEAVE()
    ] },
    { id: 'epi-s-tx-kang-1', thread: 'madamkang', date: '3/10', slot: 'early', events: ['epi-s-camellias'], msgs: [
      { from: 'madamkang', t: "It floated. In the pond, this morning, for as long as it took the koi to find it. Did you eat? Kang Hyesook." }
    ], reply: [
      { t: "I ate. First. Every time.", then: [{ from: 'madamkang', t: "Good." }] },
      { t: "Did you?", then: [{ from: 'madamkang', t: "Half." }, { from: 'madamkang', t: "Don't tell my husband. Kang Hyesook." }] },
      LEAVE()
    ] }
  );
})();
