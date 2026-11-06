/* The strangers epilogue, story-car.js: the two errands that put both boys in one car with her. The Nov 6 2026 pass (Kat's
   question 15: "make this one great and substantial"). Merges into FEMC_EPI_WORLDS.strangers (events, texts); never overwrites.

   Events (R.events)
     epi-s-sinpo  2/19 after, consumes   nuts: before the route locks. Eomma has the city see her well, out with her fiancé;
                                         Appa's crossword note puts Haechan at the wheel. Sinpo market for Mrs. Bang's
                                         Daeboreum list. Who sits where (a choice, a flag); the nut woman who gets the boys
                                         the wrong way round; the walnuts; the chicken box; the two of them alone at the car
                                         while she pays. Kitchen · Daytime, then The Car, Sinpo Market, The Car, Gate.
     epi-s-tank   3/12 after, consumes   the long way round: after the lock, in the dust. Appa's note: "Tank. Guwol-dong.
                                         Haechan drives. Jungwon goes. Both come back." A proper tank for Mr. and Mrs. Kim,
                                         oysters at Yeonan for Mrs. Moon, the Rexton dying in the pier car park, forty
                                         minutes in a cold car until Mr. Oh comes with the cables. The middle is written
                                         three times, one per route (haechan / jungwon / family), each its own scene of
                                         jealousy and heat; the opening and the coming home are shared.

   Texts (R.texts; ids epi-s-tx-car-*)
     epi-s-tx-car-yj       2/19 evening  yunjin   events epi-s-sinpo
     epi-s-tx-car-hc       2/20 early    haechan  events epi-s-sinpo
     epi-s-tx-car-jw       2/20 early    jungwon  events epi-s-sinpo
     epi-s-tx-car-tank     3/12 evening  yunjin   events epi-s-tank

   Flags set (local): epi-s-sinpo-front (she took the front seat) / epi-s-sinpo-back (the back, beside Jungwon) /
     epi-s-sinpo-jwfront (she put Jungwon in front); read only in epi-s-tank (one line each). epi-s-tank-coat-hc /
     epi-s-tank-coat-jw (whose coat, every route); nothing else reads them.
   Flags read: the three above. ifEpiRoute: epi-s-tank (the middle). ifEvent: epi-s-dinner (family middle, one line).
   Glitch lines: { near: true } once in each (the stall radio at Sinpo; the window in the pier car park); { strain: 1 } once in
     sinpo (the fever, to the nut woman). No glitch ids.
   Bonds: sinpo, one per choice set at most (haechan or jungwon; these count before the lock, as any hangout does); tank,
     one inside the route's warmest option.
   Music: epi-s-house (the kitchen), epi-s-day (the drive), epi-s-haechan / epi-s-jungwon / epi-s-half by route in the car park.

   Fences kept: no injury named or implied either way (Haechan doesn't carry: "I'm the driver"; Jungwon carries with his right
     hand only); no wedding talk beyond the word fiancé and the ring she wears; no Madam Kang, Dokyun, the brother, Seo, the
     business; the year is "over there". The book's both-known state: both boys know the other has been with her; nobody says it.

   Inventions for Kat to confirm (small, structural)
   - Eomma has Solar seen in Sinpo with her fiancé after the fever, so the market will carry it round the city by evening; the
     Yang house's driver drops Jungwon at the gate and is sent away.
   - The nut woman at Sinpo (Mrs. Gong) has sold the Lee house its Daeboreum nuts for thirty years and takes Haechan for the
     fiancé. Sinpo's sweet fried chicken in a paper box; Jungwon eats it with the toothpick, correctly.
   - Haechan has a rule that the driver doesn't carry ("it's in my contract"); Jungwon carries the five grains.
   - The tank: Yunjin orders a proper tank for the koi from a man in Guwol-dong, too big for the Veloster and, it turns out, for
     the kitchen door; it ends on the annex step under a tarp "until April". The oysters are from Mr. Choi's stall at Yeonan
     (the book's) for Mrs. Moon. The Rexton won't start in the Yeonan pier car park; Mr. Oh comes with the jump leads and
     barley candies.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 2/19, afternoon: nuts (before the lock) ─────────────────────────────
  { id: 'epi-s-sinpo', date: '2/19', slot: 'after', consumes: true, title: 'nuts', place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { n: "The note was under the salt. It was always under something, her father's notes, as if he didn't trust paper not to get up and leave, and this one was torn off the margin of yesterday's crossword in his small square blue ballpoint and folded once and left by her rice bowl where Mrs. Bang would have put her spoon." },
    { n: "*Mr. Oh is busy. Haechan drives.*" },
    { n: "That was all of it. She turned it over. On the back, somebody's answer to fourteen down, in the same pen. *Estuary.* She turned it back again." },
    { s: 'solar', f: 'neutral', t: "Drives where?" },
    { s: 'mrsbang', f: 'neutral', t: "Sinpo. Your mother's arranged it." },
    { n: "Mrs. Bang didn't turn round from the sink. She said *your mother's arranged it* in the voice she used for weather that was coming whether you liked it or not, and put a list down on the table on top of the note, on the back of a receipt from the rice shop, in pencil, in her big careful hand that pressed through the paper." },
    { n: "Walnuts, the list said. Peanuts. Chestnuts. Ginkgo, a small bag, nobody eats them, I don't care. Glutinous rice, millet, sorghum, black beans, red beans: five grains, from the Gong woman, NOT from the man with the radio. Then nine kinds of dried greens down the side, each with its price, and at the bottom, underlined twice: *Don't let her give you the old walnuts from the back.*" },
    { s: 'solar', f: 'neutral', t: "Mrs. Bang, I can't go to Sinpo. I had a fever. For ten days. The whole of Seollal." },
    { s: 'mrsbang', f: 'neutral', t: "That's why you're going." },
    { n: "Her mother came in then, as if she'd been waiting in the hall for her line, which she probably had. Cream cardigan, the pearls, her hair up and not one strand of it moving, a cup of tea in both hands that she'd carried from the sunroom and wasn't drinking. She stood in the kitchen doorway the way she stood in every doorway, as if the room were a ledger she was checking." },
    { s: 'eomma', f: 'neutral', t: "The Yang house sent word this morning. Jungwon-ssi will call at one, to see that you've recovered. He'll take you to Sinpo for the Daeboreum things." },
    { s: 'eomma', f: 'neutral', t: "Wear the cream scarf. Walk slowly at the stalls. Let the women look at you. By tonight half of Jung-gu will know the Lee girl is well and out with her fiancé buying nuts, and the other half will have it by breakfast." },
    { n: "She said it the way she'd have said *carry the two*. It was, Solar understood, a very good plan. A daughter missing in the week of the Seollal pay-out read as weakness; a daughter buying walnuts on the arm of the Yang heir read as nothing at all, which was the point. Her mother had thought of it before anyone, the way her mother thought of everything before anyone and let other people believe they had." },
    { s: 'solar', f: 'neutral', t: "And Appa sent Haechan." },
    { n: "Her mother looked at the note under the list. Something happened at the corner of her mouth and was put away." },
    { s: 'eomma', f: 'neutral', t: "Your father doesn't send you anywhere without Haechan. You know that." },
    { s: 'eomma', f: 'neutral', t: "The cream scarf, Solar. And the right hand." },
    { n: "She meant the ring. The jade on her right hand, where her mother had put it. Solar looked down at it on the table beside the rice and the list and her father's note, the three of them lying there like a hand of cards somebody had dealt her face up, and Mrs. Bang, at the sink, began to wash the same pot she had already washed." },

    // The gate.
    { place: 'Incheon · The Lee House · Gate', time: 'Daytime', soft: true },
    { music: 'epi-s-day' },
    { n: "At five to one the Rexton was at the gate with its engine running and both front windows down in February, which meant he'd been smoking and didn't want her to know, or hadn't been smoking and wanted her to think he had, and the trot tape was playing loud enough to reach the house, and he was leaning on the driver's door with his arms crossed and his gum going, watching the road." },
    { n: "At one exactly a long black car came up the hill, slowed, stopped below the gate. A driver in grey got out and opened the back door, and Yang Jungwon got out of it in a dark coat buttoned to the collar and a grey scarf, exactly the same as he got out of everything, as if the car had been built round him and was sorry to let him go." },
    { n: "He looked at the Rexton. He looked at Haechan leaning on it. He turned to his own driver and said something very short, and the driver bowed, got back in, and took the black car away down the hill, and that was that, the Yang heir standing on the Lee family's road with no car and both hands in his coat pockets, having made a decision." },
    { s: 'jungwon', f: 'happy', t: "Donghyuck. I didn't know you'd been lent to me." },
    { s: 'haechan', f: 'neutral', t: "I haven't been lent to you. I've been lent to her. You're a bag she's carrying." },
    { s: 'jungwon', f: 'happy', t: "I'll try to be a light one." },
    { n: "The dimples. Both of them, deep, which meant he was being polite, which meant he was furious, or delighted, or both, and she'd never in her life been able to tell which from this distance. Haechan spat his gum into its paper and put a fresh piece in, slowly, which on him meant exactly the same thing." },
    { n: "Then they both looked at her coming down the steps in the cream scarf with the rice-shop receipt in her glove, and she watched each of them do a quick private sum of the other one and arrive at a number neither liked, and she understood, standing on the last step, that the only thing in Incheon that could make these two stand within a meter of each other in daylight was her, and that this was going to be a very long afternoon." },
    { s: 'solar', f: 'neutral', t: "Good afternoon, Jungwon-ssi." },
    { s: 'jungwon', f: 'neutral', t: "Solar-ssi. You look well. I'm glad." },
    { s: 'haechan', f: 'happy', t: "She looks well. Doesn't she look well. Ten days with a fever and look at her. It's a miracle. Get in the car, agasshi, before the miracle wears off." },
    { n: "There were three doors on the side of the Rexton facing her, and two people waiting to see which one she'd open." },
    { choose: [
      { t: "(Take the front seat. It's yours; it always has been.)", flag: 'epi-s-sinpo-front', stat: { courage: 1 }, then: [
        { n: "She opened the front door and got in, because she'd been getting into the front of this car since it was Dal's and she was fourteen and nobody had ever once told her to sit in the back, and she wasn't going to start being told now." },
        { n: "Haechan didn't smile. He did something better than smile, which was nothing at all for one whole second, and then he went round the bonnet whistling." },
        { n: "Jungwon opened the back door for himself and got in behind her and sat in the middle of the back seat, exactly in the middle, like a client, with his hands folded on his knee, and met Haechan's eyes in the rear-view mirror with perfect courtesy." },
        { s: 'jungwon', f: 'happy', t: "Sinpo, please." },
        { s: 'haechan', f: 'serious', t: "Say please again and I'll put you out at the lights." },
        { bond: { haechan: 1 } }
      ] },
      { t: "(Get in the back, beside your fiancé. Let the street see.)", flag: 'epi-s-sinpo-back', stat: { charm: 1 }, then: [
        { n: "She opened the back door. Jungwon was there before she'd finished opening it, holding it for her, which she hadn't expected and should have, and she got in and moved over and he got in after her and shut it, and there they sat on the back seat of Dal's old car side by side with a careful twenty centimeters between them, like a couple in a photograph from the eighties." },
        { n: "Haechan got in the front. He looked at the two of them in the rear-view mirror for a long moment. Then he took his cap off the dashboard and put it on, pulled down low, a chauffeur's cap, a ridiculous one, from where she had no idea." },
        { s: 'haechan', f: 'happy', t: "Where to, sir? Madam? The young couple want the scenic route? The young couple want the radio on? Something romantic? I've got a song about a man whose wife leaves him for a sailor. It's very romantic. Everybody dies." },
        { s: 'jungwon', f: 'happy', t: "Whatever you'd like, Donghyuck. It's your car." },
        { s: 'haechan', f: 'neutral', t: "It's not my car. It's a dead man's car. Seatbelts." },
        { n: "He took the first corner so hard her shoulder went into Jungwon's, and stayed there for a second, and Jungwon didn't move it and didn't look at it, and in the mirror she watched Haechan watch neither of them." },
        { bond: { jungwon: 1 } }
      ] },
      { t: "(Hold the front door for Jungwon. Take the back alone.)", flag: 'epi-s-sinpo-jwfront', stat: { kindness: 1 }, then: [
        { n: "She opened the front passenger door and stood beside it and looked at Jungwon, very pleasantly, until he understood, and his eyebrows went up a millimeter, and he got in. Then she got in the back by herself and shut the door and put her seatbelt on and folded her hands." },
        { n: "So that was the view all the way to Sinpo: the backs of two heads a forearm apart, one black and neat, one brown and wind-wrecked, not turning toward each other, ever, not once, the way two dogs walk past each other on a narrow path." },
        { n: "Haechan put the trot tape up. Loud. A man wailing about a harbor." },
        { n: "Jungwon reached out, without a word, and turned it down. Exactly two notches. He put his hand back on his knee." },
        { n: "Haechan turned it up three. Jungwon turned it down three. Haechan turned it up four, and Jungwon looked at the dial, and at Haechan's hand still on it, and left it, and said, to the windscreen, with enormous politeness, that he hadn't known Donghyuck was hard of hearing, and that he was sorry." },
        { n: "She bit the inside of her cheek all the way to the expressway, and it was the happiest she'd been since she came back, and she couldn't have said why, and she didn't try." }
      ] }
    ] },

    // The drive.
    { place: 'Incheon · The Car', time: 'Daytime', soft: true },
    { n: "Grey sky, low, the color of a cold kettle. Old snow gone black along the curbs. The harbor road past the cranes and the container yards, gulls on the lamp posts, the smell of the sea coming in at Haechan's window, which he wouldn't wind up, and the heater on full against it, so that her feet were too hot and her face was too cold and she felt, in a way she couldn't have explained to anyone, completely at home." },
    { n: "Nobody spoke for the length of a song. Then it was the most natural thing in the world to Haechan to fill a silence, and the most natural thing in the world to Jungwon to let him, and she listened to Haechan talk at the windscreen about the traffic, and the price of diesel, and a man at the quay who'd lost a whole pallet of mandarins in the water on Monday, a whole pallet, agasshi, the gulls were drunk on vitamin C for a week, and Jungwon say nothing at all until there was a gap." },
    { s: 'jungwon', f: 'neutral', t: "You drive better here." },
    { n: "The car didn't slow. Nothing changed in it. But she felt the whole of it go very slightly still, the way a room goes still when somebody has said a name out loud." },
    { s: 'haechan', f: 'neutral', t: "Than where." },
    { s: 'jungwon', f: 'happy', t: "Than over there. You didn't have a license over there. You drove that delivery van as if it were stolen." },
    { s: 'haechan', f: 'happy', t: "It was stolen. Borrowed. It was borrowed by a man who'd fallen asleep in it." },
    { n: "Over there. The year. The dorm with its one kind of gum and the sea that came into the wrong side of the city. Three people in Incheon who remembered it, and all three of them in this car, and none of them looking at each other, and the trot singer on the tape going on about a harbor that wasn't any of theirs." },
    { glitch: { near: true } },
    { n: "For a second, at the lights by the old customs house, all three of them were quiet together. It wasn't the same as the other silences. It was the only thing in the world the three of them had that nobody else had, and it sat in the car with them like a fourth passenger, and then the lights went green and Haechan put his foot down and it was gone." },

    // Sinpo.
    { place: 'Incheon · Sinpo Market', time: 'Daytime', soft: true },
    { n: "Sinpo market was the old covered street off the main road, a long arcade under a patched roof with the daylight coming through it yellow, and it was full, because it was five days to the first full moon and every household in Jung-gu had sent somebody with a list. Steam off the mandu stalls. The sweet sticky smell of the fried chicken place at the corner, which had a queue round it, which it always had. Strings of dried radish leaves hanging like brown laundry. Women in quilted vests shouting prices over each other with their hands in their sleeves, and a radio somewhere playing the traffic, and everybody's breath." },
    { n: "Her mother had been right. The women looked. She felt them look, all down the first row of stalls, the quick glance and the second, longer one, the cream scarf, the jade on her right hand, the young man beside her in the good dark coat, and she felt the story go away from her down the arcade from stall to stall, faster than she could walk, the Lee girl, well, out, with him, and she walked slowly, the way her mother had said, and smiled at a woman she half knew, and let them look." },
    { n: "Jungwon walked on her right, half a step back, exactly where a fiancé walks in a market in a city that is watching. Haechan walked on her left, a full step back, exactly where a man walks who is there to stop anybody from walking any closer, chewing, hands in his jacket, eyes on everything. Between them she felt like a ship being brought into harbor by two tugs that hated each other." },
    { n: "Mrs. Gong's stall was at the end of the second row, where it had been for thirty years, under a hand-painted sign nobody could read any more, the nuts in open sacks with tin scoops in them, the five grains in their wooden boxes, and Mrs. Gong herself on an upturned crate behind them in four cardigans, cracking a peanut with her thumb." },
    { s: 'gong', f: 'neutral', t: "Haesong's girl! Aigoo. Look at you. I heard you were dead." },
    { n: "Mrs. Gong said it the way you'd say *I heard you'd been to Busan*. She said everything that way. Solar had been buying Mrs. Bang's walnuts from her since she was six, and in all that time Mrs. Gong had never once said anything quietly." },
    { s: 'solar', f: 'happy', t: "Only a fever, Mrs. Gong. Over Seollal." },
    { s: 'gong', f: 'neutral', t: "A fever. Ten days? The whole of Seollal? That's not a fever, that's a vacation. Let me see your face." },
    { n: "She leaned across the walnuts and took Solar's chin in a hand like a walnut itself, dry and hard and very warm, and turned it to the yellow light, left, right." },
    { s: 'gong', f: 'neutral', t: "Thin. Pale. Good bones. Your mother's bones. What was it, the stomach or the chest?" },
    { choose: [
      { t: "The chest. I coughed for a week.", then: [
        { s: 'gong', f: 'neutral', t: "Ginkgo. I'll put in extra ginkgo. Nobody eats them, but you will." },
        { glitch: { strain: 1 } },
        { n: "It held. Of course it held. It held so easily in the yellow light with a peanut shell under her boot that she felt, for one second, very far away from herself, as if she were watching a girl in a cream scarf tell a lie from the other end of the arcade." }
      ] },
      { t: "(Let Haechan answer for you.)", then: [
        { s: 'haechan', f: 'happy', t: "Both, auntie. Stomach and chest. Everything. She was disgusting. The whole house had to wear masks. I wasn't allowed in the kitchen, I had to eat my rice on the step like a dog." },
        { s: 'gong', f: 'happy', t: "You always eat on the step like a dog." },
        { s: 'haechan', f: 'happy', t: "Now I had a reason." },
        { glitch: { strain: 1 } },
        { n: "Mrs. Gong laughed, a big cracked laugh like a crate going over, and let go of Solar's chin, and the lie went past them both and away down the market with the rest of the story, and Solar didn't look at Haechan, and he didn't look at her, and his shoulder was a centimeter from hers." }
      ] }
    ] },
    { n: "Then Mrs. Gong looked past her, and up, at Haechan. A long, frank, delighted look, all the way from his boots to his wrecked hair, the look of a woman who'd been married forty years and had opinions." },
    { s: 'gong', f: 'happy', t: "So this is him. The Yang boy. Hm. Shoulders. Good. He'll carry the rice." },
    { n: "There was a pause in which nobody at the end of the second row breathed." },
    { n: "Haechan's face did something extraordinary. She watched it happen from about forty centimeters away. It went in about a second from shock, to a kind of wild, unholy joy, to a careful, enormous innocence, and he opened his mouth." },
    { s: 'jungwon', f: 'happy', t: "I'm Yang Jungwon, auntie. It's a pleasure." },
    { n: "He'd stepped forward before Haechan could say whatever he'd been going to say, and bowed to Mrs. Gong over the walnut sack, a proper bow, not too deep, the bow of a young man in a good coat to an older woman in four cardigans, and came up with the dimples showing, both of them, very deep." },
    { n: "Mrs. Gong looked at him. She looked at Haechan. She looked at Jungwon again, at the coat and the scarf and the hands, small and clean, and the watch, and back at Haechan's split knuckles on the edge of her stall, and her eyebrows went up and stayed up." },
    { s: 'gong', f: 'neutral', t: "Then what's he?" },
    { s: 'haechan', f: 'happy', t: "The help." },
    { s: 'gong', f: 'neutral', t: "Hm." },
    { n: "She went on looking at him for one more second than she needed to. Then she looked at Solar, and something passed across the old face that Solar didn't like at all, because it was the face of a woman who'd been married forty years and had seen a great deal across a sack of walnuts and had decided, this once, not to say it at the top of her voice." },
    { s: 'gong', f: 'neutral', t: "Well. The help can carry the rice, then." },
    { s: 'haechan', f: 'neutral', t: "The help doesn't carry, auntie. I'm the driver. It's in my contract." },
    { s: 'jungwon', f: 'happy', t: "I'll carry it." },
    { n: "He took the bag of five grains from Mrs. Gong in his right hand, and held it as if it were a briefcase, and Haechan looked at the Yang heir standing in Sinpo market holding three kilos of sorghum and millet and beans like a man holding a briefcase, and had to turn round and look at the chicken queue for a while." },

    // The walnuts.
    { n: "Mrs. Gong was weighing walnuts, and doing it, Solar noticed, from the front sacks, the new ones, without being asked, and she threw a handful on the board in front of the three of them as she always did, for luck, to test." },
    { s: 'gong', f: 'neutral', t: "Go on. First bite. Whoever cracks it gets a year without boils. Whoever can't, gets the boils." },
    { n: "Haechan took one before she'd finished saying it. Put it between his back teeth. Looked at Jungwon while he bit. It went with a crack like a knuckle, and he spat the shell into his palm and held up the meat, whole, perfect, and grinned with his mouth full." },
    { s: 'haechan', f: 'happy', t: "Boils, young master. A whole year of them. All over that face." },
    { n: "Jungwon didn't put a walnut in his mouth. Of course he didn't. He picked up two, and held them together in his right hand, one against the other, and closed his fingers, small fingers, a size small for his height, and there was a sharp neat sound and he opened his hand and one of the walnuts had opened along its seam, clean as a box, and the other one was untouched." },
    { s: 'jungwon', f: 'neutral', t: "It's about the angle. You don't need teeth." },
    { s: 'haechan', f: 'serious', t: "You don't need teeth. You've never needed teeth for anything in your life. You've had people." },
    { s: 'jungwon', f: 'happy', t: "I've had people. You had Dal. He cracked chestnuts in his teeth, I'm told. I'm told he broke one doing it." },
    { n: "Haechan went quiet. Not his ordinary quiet. The other one. And Jungwon looked at the walnut in his palm and didn't look at Haechan, and Solar saw, as she'd seen once or twice this winter, the dead come up between the two of them like a fish under ice, and look at her, and go down again." },
    { n: "Then both of them held out half a walnut. To her. At the same time. Without looking at each other. Mrs. Gong, on her crate, put her hands in her cardigan sleeves and watched with the face of a woman at a very good drama." },
    { choose: [
      { t: "(Take Haechan's.)", stat: { courage: 1 }, then: [
        { n: "She took it off his palm with her fingers, the warm half, a little wet from his teeth, and ate it, and didn't look at either of them while she did it." },
        { n: "Jungwon closed his hand over his own half. He put it in his coat pocket, very carefully, as if it were something he'd been given to keep and not to eat, and said that it was a good walnut, Mrs. Gong, a very good year, and Mrs. Gong said *hm*." },
        { bond: { haechan: 1 } }
      ] },
      { t: "(Take Jungwon's.)", stat: { charm: 1 }, then: [
        { n: "She took it out of his palm. His hand was cold and very still and he didn't close it after she'd gone, just let it lie open for a second in the yellow light, empty, as though he hadn't decided yet what it was for." },
        { n: "Haechan ate his own half. He ate it slowly and looked at the chicken queue and chewed with his whole jaw, and said, to the chicken queue, that a walnut was a walnut, it all went the same place, and Mrs. Gong said *hm*." },
        { bond: { jungwon: 1 } }
      ] },
      { t: "(Take a walnut off the board and crack your own.)", stat: { proficiency: 1 }, then: [
        { n: "She took a third walnut. She put it between her back teeth, and bit, and it didn't crack. It sat there like a stone. It was a Lee walnut. It didn't open for anybody before breakfast." },
        { n: "So she took it out, and took the tin scoop off the sack, and put the walnut on the board and brought the scoop's edge down on its seam, once, the way Auntie Song brought a cleaver down on a crab, and it went in two, and she picked the meat out with her nail and ate it, and the two of them stood there each holding out half a walnut to nobody." },
        { s: 'gong', f: 'happy', t: "Ha! There. That's Haesong's girl. Let them keep their walnuts." },
        { n: "Haechan laughed out loud. Jungwon didn't laugh. His face went completely still, which was the other thing, the rare one, and she saw it, and looked away, and felt it on the side of her face for the rest of the row." }
      ] }
    ] },

    // The stall radio.
    { n: "Mrs. Gong's radio was on the shelf behind her among the scoops and the abacus, a little red one with the aerial taped, and while she was counting out change it stopped doing the traffic." },
    { n: "Two seconds. A girl's voice, bright, quick, singing, in Japanese, over a beat that belonged to a shop she'd stood in one evening in a station she'd never been to in this life. Then a crackle, and the traffic again, a jam on the Gyeongin expressway, a lorry on its side." },
    { n: "Mrs. Gong smacked the radio without looking at it and went on counting." },
    { n: "Solar didn't move. On her left, Haechan had stopped chewing. On her right, she could feel Jungwon not looking at the radio with the whole of his body. None of them looked at each other. Mrs. Gong put the change in her glove and folded her fingers over it." },
    { s: 'gong', f: 'neutral', t: "Cheap radio. It's been doing that all winter. Picks up the boats." },

    // The chicken box, and the gap.
    { n: "They bought the nine greens from the woman two stalls down, and a little bag of ginkgo nobody would eat, and at the corner Haechan joined the chicken queue without consulting anybody, and came back eleven minutes later with a paper box of the sweet fried chicken, sticky and red and steaming, glazed with sesame and chopped peanut, with three wooden toothpicks stuck in the top like flags." },
    { s: 'haechan', f: 'happy', t: "Sinpo. You don't come to Sinpo and not. It's the law." },
    { n: "He held the box out to Jungwon first. Directly. Under his nose. It was a challenge and all three of them knew it was a challenge." },
    { n: "Jungwon looked at the box for a moment as though it were a document he'd been asked to sign. Then he took a toothpick, and chose a piece, and ate it in two exact bites with a handkerchief held under his chin so as not to drip on the coat, and wiped his mouth with it, and folded the handkerchief, and put it away." },
    { s: 'jungwon', f: 'happy', t: "Thank you, Donghyuck. It's very good." },
    { n: "Haechan watched him do all of this with an expression Solar had only ever seen on him once before, on a man at the harbor watching a cat cross a gangplank: disgust, and fascination, and something very close to a grudging respect that he'd die before admitting." },
    { s: 'haechan', f: 'serious', t: "You've never eaten out of a box in your life." },
    { s: 'jungwon', f: 'neutral', t: "I have now." },
    { n: "Then Solar went back to Mrs. Gong's alone, because she'd forgotten the chestnuts, which she hadn't, and because she wanted to see what they'd do." },
    { n: "From the stall, over the sacks, with her back half turned, she watched them. The two of them by the end of the arcade where the Rexton was parked half on the pavement, the paper box on the bonnet between them, a meter apart, not looking at each other. Jungwon with the bag of grains in his right hand. Haechan with a toothpick in his teeth. The grey light on both of them. They looked like two men from two different films that somebody had cut together by mistake." },
    { n: "Then Jungwon said something. Short. She couldn't hear it. Haechan didn't turn his head. He said something back, longer, to the road. Jungwon said one more thing. And Haechan turned and looked at him, really looked, for one second, the way he'd looked at the walnut, the way she'd only seen him look at a few men, and Jungwon looked back and didn't drop it, and neither of them moved, and the toothpick in Haechan's mouth didn't move either." },
    { s: 'gong', f: 'neutral', t: "Chestnuts. You've already got chestnuts. They're in the bag, girl. I put them in." },
    { s: 'solar', f: 'flustered', t: "So you did." },
    { s: 'gong', f: 'neutral', t: "Hm. Go on. Go and stand in between them before they set fire to my market." },
    { n: "When she got back to the car they were both looking at the road. The chicken box was empty. There was one piece left in it, which neither of them had taken, the way you leave the last piece for somebody who isn't there yet." },
    { s: 'solar', f: 'neutral', t: "What were you talking about?" },
    { s: 'haechan', f: 'neutral', t: "Diesel." },
    { s: 'jungwon', f: 'neutral', t: "The weather." },
    { n: "They said it at the same time. Then they both heard the other one say it, and Haechan swore, quietly, at the bonnet, and Jungwon's mouth did something she'd have called a smile on anybody else, and it went away." },
    { choose: [
      { t: "Liars. Both of you.", stat: { charm: 1 }, then: [
        { s: 'haechan', f: 'happy', t: "Agasshi. I'm hurt. I've never lied in my life. Ask anybody. Ask the help." },
        { s: 'jungwon', f: 'neutral', t: "We were talking about you, Solar-ssi. Briefly. We agreed about something. It won't happen again." },
        { n: "Haechan looked at him with real horror, as if he'd stood up in a church and taken his clothes off, and Jungwon took the last piece of chicken off the bonnet with the last toothpick, and held it out to her, very politely, and she ate it." }
      ] },
      { t: "(Don't ask. Eat the last piece.)", stat: { kindness: 1 }, then: [
        { n: "She didn't ask. She took the last piece out of the box with her fingers, no toothpick, and ate it standing on the pavement in Sinpo in her mother's cream scarf with sesame on her glove, and licked her thumb, and both of them watched her do it and then both of them found something on the road they needed to look at." },
        { n: "Whatever it had been, they'd keep it. She'd grown up in a house full of men who kept things. She knew how much a thing weighed by how carefully it was carried, and they were both carrying this one very carefully indeed." }
      ] }
    ] },

    // Home.
    { place: 'Incheon · The Car', time: 'Daytime', soft: true },
    { n: "The way home, the tape ran out. Nobody turned it over. The harbor road went by in the late grey light with the cranes standing over it, and the bag of five grains sat on somebody's knee, and the walnuts clicked in their bag at every corner like a slow abacus, and nobody spoke at all for ten minutes, which with Haechan in the car had never once happened in her life." },
    { n: "It wasn't a bad silence. That was what she'd remember. She sat in it with the two of them and the smell of fried chicken and diesel and the sea, and for ten minutes nobody in the car was performing anything for anyone, not even her, and she didn't know where to put her hands." },
    { n: "At the Lee gate Jungwon got out. He took the five grains up the steps himself, in his right hand, and gave them to Mrs. Bang at the door, who'd come out to receive them as if they were a delegation, and he bowed to her, and to Solar, and to the house, and then, at the bottom of the steps, after a pause that was almost too short to be one, to the Rexton." },
    { n: "Not to Haechan. To the car. It was the most diplomatic thing she'd ever seen anyone do." },
    { s: 'jungwon', f: 'neutral', t: "Thank you for the afternoon, Solar-ssi. I'll walk. It isn't far." },
    { s: 'haechan', f: 'neutral', t: "It's uphill and it's going to snow." },
    { s: 'jungwon', f: 'happy', t: "Then I'll walk quickly." },
    { n: "He went down the hill in the dark coat with his hands in his pockets, and one of those pockets, she knew, had half a walnut in it, or didn't, depending, and she stood at the gate and watched him go until he turned the corner by the onggi shop and didn't look back, because Jungwon never looked back, which was its own way of looking back." },
    { n: "Behind her the Rexton's engine was still running. Haechan hadn't got out. He was sitting with his wrists on the wheel looking at the gate in front of him, chewing, and when she came round to his window he didn't wind it down further than it already was." },
    { s: 'haechan', f: 'neutral', t: "He's good at it. The bowing." },
    { s: 'solar', f: 'neutral', t: "He's had practice." },
    { s: 'haechan', f: 'neutral', t: "Yeah." },
    { n: "He looked at the gate. She waited. He was building toward something, she could see it in his jaw, the way the gum had gone slow, and she'd known him long enough to know he'd either say it or make a joke instead, and that the joke would be the true one." },
    { s: 'haechan', f: 'happy', t: "Mrs. Gong thought it was me." },
    { s: 'solar', f: 'neutral', t: "Mrs. Gong is very old, Haechan." },
    { s: 'haechan', f: 'happy', t: "Mrs. Gong has eyes like a gull. Mrs. Gong saw a man with shoulders. Mrs. Gong will tell the whole of Sinpo tomorrow that the Lee girl's marrying a Yang with very small hands, and that it's a waste, and that the help is the best-looking man she's seen in that market since the war." },
    { s: 'solar', f: 'happy', t: "She will not say that." },
    { s: 'haechan', f: 'happy', t: "She'll say it louder than that." },
    { n: "Then the joke went out of his face, the way it did, all at once, and he looked at her through the half-open window in the grey light with snow beginning, a few flakes, one on his eyebrow on the scar." },
    { s: 'haechan', f: 'serious', t: "Go in, agasshi. You've been well enough for one day." },
    { n: "She went in. At the top of the steps she looked back, and the Rexton was still there with its engine running, and he was still looking at the gate, and she understood he'd wait till she was through the door, the way he always had, and that he'd sit there for a while afterwards too, where nobody could see him, and she went through the door and shut it, so he could." },

    { place: 'Incheon · The Lee House · Kitchen', time: 'Evening', soft: true },
    { n: "Mrs. Bang went through the bags on the kitchen table like a customs officer. The walnuts, the new ones, from the front: good. The peanuts: good. The chestnuts, which Solar hadn't bought and Mrs. Gong had: good. The ginkgo: nobody eats them. The five grains, still warm on the handle from somebody's hand." },
    { n: "At the bottom of the walnut bag there was a walnut already cracked. Opened along its seam, clean as a box, the two halves put back together so neatly you'd only know by the line." },
    { n: "Mrs. Bang held it up to the lamp. She looked at it, and at Solar, and at the back door, toward the garden, where the annex light had just come on, and back at the walnut in her fingers, and put it down on the windowsill over the sink, on its own, by the koi food." },
    { s: 'mrsbang', f: 'neutral', t: "Hm." },
    { n: "It was the only thing anybody said about the afternoon. In this house, it was a great deal." }
  ] },

  // ───────────────────────────── 3/12, afternoon: the long way round (after the lock) ─────────────────────────────
  { id: 'epi-s-tank', date: '3/12', slot: 'after', consumes: true, title: 'the long way round', place: 'Incheon · The Lee House · Kitchen', time: 'Daytime', scene: [
    { music: 'epi-s-house' },
    { n: "The dust was in again. It had come down the coast in the night from wherever it came from, the desert, the factories, the end of the world, and by noon the garden was the color of weak barley tea and the annex roof at the bottom of it was only a darker smudge in the yellow, and Mrs. Bang had the masks out on the kitchen table in a row with everybody's name on them in marker." },
    { n: "The note was under the salt." },
    { n: "*Tank. Guwol-dong. Haechan drives. Jungwon goes. Both come back.*" },
    { n: "She read it twice. The last three words were written smaller than the rest and pressed harder, the ballpoint gone almost through the paper, and she sat with it in her fingers at the kitchen table while Mrs. Bang wrote PYO on a mask so hard the marker squeaked." },
    { s: 'mrsbang', f: 'neutral', t: "The fish. Yunjin-ssi ordered a tank. A proper one, with a pump, for the garden, from a man in Guwol-dong. She rang him from the bath. She rang him three times." },
    { s: 'yunjin', f: 'happy', t: "Four times. The fourth time was to apologize for the third time." },
    { n: "Yunjin was in the doorway in the yellow puffer with her car keys round her finger and a mask already on, pushed up under her eyes so only the top of her face showed, the gold sunglasses on her head in March in the dust, which on anybody else would have been a mistake. She had the studio girls at two, Chaewon's mandatory, the committee was reconvening, there was a laminated agenda. She couldn't go to Guwol-dong. And the tank, the man had said on the fourth call, was a hundred and twenty centimeters long." },
    { s: 'yunjin', f: 'neutral', t: "The Veloster is a hundred and twenty centimeters long, wifey. Basically. It would be a tank with wheels. Mr. and Mrs. Kim deserve better." },
    { n: "Out by the back door the koi bucket sat on the step under its board, and under the board Mr. and Mrs. Kim went round in the dust-light, orange and white, slow, having lived in a bucket for three months with the patience of two people waiting for a bus that had been cancelled." },
    { s: 'solar', f: 'neutral', t: "And Jungwon-ssi?" },
    { s: 'mrsbang', f: 'neutral', t: "In the study. Baduk with your father. Since one." },
    { n: "As if on cue the study door opened down the hall, and her father's voice said something low and final, and footsteps came along to the kitchen, and Jungwon was in the doorway behind Yunjin, very upright, in the dark coat, with a mask in his hand, MR. YANG on it in Mrs. Bang's capitals, which Mrs. Bang had apparently written for him in advance, and an expression of very polite bewilderment." },
    { s: 'jungwon', f: 'neutral', t: "The Chairman has resigned the game. He was winning. He said the fish couldn't wait." },
    { s: 'yunjin', f: 'happy', t: "He's right. They can't. They're very old fish. Morally." },
    { n: "Then the back door went and the dust came in round Haechan, the Rexton's keys on his finger and his mask round his neck like a scarf, saying the man in Guwol-dong had better have a trolley, because he was the driver, and the driver didn't—" },
    { n: "He saw Jungwon. Jungwon saw him. The kitchen, which had been noisy, did the thing it did now when the two of them were in it, which was go on being noisy very carefully, the way people go on talking at a funeral." },
    { s: 'haechan', f: 'neutral', t: "No." },
    { s: 'jungwon', f: 'happy', t: "I'm afraid the Chairman says yes." },
    { n: "Haechan looked at the note in her fingers. He held out his hand for it, and she gave it to him, and he read it, and his face did nothing at all, and he read it again, the small hard last three words, and folded it once and put it in his jacket over his heart like a summons." },
    { s: 'haechan', f: 'neutral', t: "Masks on. Everybody. It's a hundred and sixty in Guwol-dong today. The air." },

    // ifFlag callbacks to the first errand
    { ifFlag: 'epi-s-sinpo-front', then: [
      { n: "At the car nobody discussed the seats. She'd taken the front at Sinpo and the front was hers, apparently, now, by law, and she opened the door and got in, and Jungwon got in behind her without a word, and sat in the middle, and the three of them were three weeks older than the last time and it felt like a year." }
    ], else: [
      { ifFlag: 'epi-s-sinpo-back', then: [
        { n: "At the car Jungwon held the back door for her again, the way he had at Sinpo, and she saw Haechan see him do it, and remember, and set his jaw, and get in." }
      ], else: [
        { ifFlag: 'epi-s-sinpo-jwfront', then: [
          { n: "At the car Jungwon stood by the front passenger door and looked at her with his eyebrows a millimeter up, as if to ask whether she'd be putting him there again, and Haechan said *don't even*, and got in, and slammed his door." }
        ] }
      ] }
    ] },

    // ───── The middle, by route ─────
    { ifEpiRoute: 'haechan', then: [
      { place: 'Incheon · The Car', time: 'Daytime', soft: true },
      { music: 'epi-s-day' },
      { n: "He'd put her in the front. Not with words. He'd opened the front door and stood there holding it until she got in, which he had never done in his life, and Jungwon had watched him do it, and got in the back without being asked." },
      { n: "The dust made the city into something underwater. The streetlamps were still on at two in the afternoon, wearing dirty yellow haloes, and the cars came out of the murk with their headlights on like fish coming up to the glass, and the harbor road had no harbor on it, only cranes standing in the yellow with their tops gone, and Haechan drove into it with both wrists on the wheel and the window down, because he always had the window down, mask round his neck, chewing." },
      { n: "It had been two weeks since the annex. Since the bolt on the steel door. She didn't think about it, which meant she thought about nothing else, and sitting next to him in the front of Dal's car with the dust going by she could feel the whole of the left side of her body the way you feel a stove you're standing too near." },
      { n: "And Jungwon was in the back. He was sitting directly behind Haechan, not in the middle this time, so that in the side mirror she could see a slice of him: the dark coat, the mask he'd put on correctly, over his nose, the eyes above it looking out of his window at the dust, very calm, not looking at the front of the car at all." },
      { n: "She knew he knew. He'd known before she'd decided. He'd known, probably, on the night of the moon, and he'd said nothing, and he'd go on saying nothing in that perfectly courteous voice until the day one of them died, and she didn't know if that was the kindest thing anyone had ever done for her or the cruelest, and she suspected he didn't either." },
      { n: "At the lights by Dongincheon station Haechan took his right hand off the gearstick." },
      { n: "He didn't look at her. He was looking at the light. His hand came over and lay on her knee, on the wool of her skirt, flat, warm, heavy, the way you'd put your hand on the bonnet of a car to feel whether the engine was still warm, and stayed there." },
      { n: "In the side mirror, Jungwon's eyes moved. Once. To the gap between the front seats. Then back to the dust." },
      { choose: [
        { t: "(Leave his hand where it is.)", stat: { courage: 1 }, then: [
          { n: "She didn't move. She looked straight ahead at the red light in the yellow air, and felt his thumb move on her knee, once, slowly, a few centimeters, and stop, and the heat of it go up through her like a held breath, and she let it, and didn't look in the mirror." },
          { n: "The light went green. He didn't move his hand. The car behind them hooted." },
          { s: 'jungwon', f: 'happy', t: "Donghyuck. The light." },
          { s: 'haechan', f: 'happy', t: "I know about the light, young master. I'm looking at it." },
          { n: "He changed gear with the wrong hand, reaching across himself, which was a terrible way to drive and he knew it, and drove through the junction with his eyes on the road and his thumb on the inside of her knee, slow, while behind them Jungwon looked out of the window at a city he couldn't see and said absolutely nothing at all, so loudly she could hear it over the engine." }
        ] },
        { t: "(Move it back to the gearstick. Not in front of him.)", stat: { kindness: 1 }, then: [
          { n: "She put her hand over his and lifted it, gently, and put it back on the gearstick, and left hers over it for one second longer than she needed to, and then took it back and put it in her lap." },
          { n: "He looked at her then. Just a glance. The corner of his mouth went, not a grin, something tighter, and she couldn't tell if it was hurt or respect or both." },
          { s: 'haechan', f: 'neutral', t: "Agasshi's got manners. Did you see that, young master? Somebody in this car has manners." },
          { s: 'jungwon', f: 'neutral', t: "I saw." },
          { n: "That was all he said. But in the mirror she saw him close his eyes for a moment, above the mask, the way you close them at something bright, and open them again on the dust, and she thought she'd never be sure, as long as she lived, whether she'd been kind to him or to herself." }
        ] },
        { t: "(Put your hand over his and hold it there.)", stat: { charm: 1 }, then: [
          { n: "She put her hand over his. On her own knee. Held it there, her fingers through his, the split knuckles under her palm, and looked at nothing, and felt him go still beside her, completely still, the way he went still for very few things." },
          { n: "The light went green. Neither of them moved. The car behind hooted, long, and kept hooting." },
          { s: 'jungwon', f: 'neutral', t: "I can drive, if you'd both like to hold hands properly." },
          { n: "Courteous. Quiet. Not a single gram of anything in it but courtesy, so much courtesy that it filled the whole car to the roof like the dust filled the street, and Haechan took his hand back, and put the car in gear, and drove, and didn't say anything for nearly a kilometer, which was a record." }
        ] }
      ] },
      { n: "Guwol-dong was a street of shops selling things for other things: bird cages, fish food, pumps, little plastic castles for the bottoms of tanks, a whole window of turtles in the yellow gloom. The man had the tank on a trolley outside, under a tarp, a hundred and twenty centimeters of glass with a black frame and a pump in a box taped to the top, and he took one look at Solar and Jungwon getting out of the car in their masks and decided, with the joy of a man who has sold a great many fish tanks to a great many couples, that they were married." },
      { s: 'tankman', f: 'neutral', t: "For the new house? Good. Fish in the house, money in the house. And the children like it. You'll have children? You look like a couple who'll have children." },
      { s: 'jungwon', f: 'neutral', t: "It's for two koi, sir." },
      { s: 'tankman', f: 'neutral', t: "Same thing. Same thing. Practice." },
      { n: "Behind her, at the car, she heard Haechan laugh. One short laugh, not a nice one, into his mask. The man looked past them at the big young man in the black jacket leaning on the Rexton with his arms crossed." },
      { s: 'tankman', f: 'neutral', t: "Your driver going to help me lift this or is he decorative?" },
      { s: 'haechan', f: 'happy', t: "Decorative, ajeossi. It's in my contract." },
      { n: "So the man lifted it, and Jungwon lifted it, with his right hand on the frame and his shoulder under the corner, and they slid it into the back of the Rexton with the seats down, a long glass coffin under a blue tarp, and Haechan supervised from the driver's door, chewing, offering comments, and when it was in Jungwon dusted his coat off with two fingers and looked at Haechan with the dimples showing above the mask, deep, a thing she wouldn't have thought possible." },
      { s: 'jungwon', f: 'happy', t: "Thank you for your help, Donghyuck." },
      { s: 'haechan', f: 'happy', t: "Any time, young master. I'm always here." },
      { n: "He meant it to land, and it did. It went across the yellow street between them and landed exactly where he'd thrown it, and Jungwon took it, and didn't flinch, and turned and got into the back of the car beside a fish tank." },

      // The car park.
      { place: 'Incheon · Harbor', time: 'Daytime', soft: true },
      { n: "Then Jungwon asked if they could stop at Yeonan on the way back, because Mrs. Moon wanted oysters from Mr. Choi's stall at the end of the market and nobody else's, and Haechan said it wasn't on the way back, and Jungwon said that was true, and Haechan said fine, fine, oysters, what else, does the young master want his shoes shined, and took the coast road." },
      { n: "Mr. Choi's oysters came in a plastic bag inside a plastic bag inside a paper bag, and went on the floor by Jungwon's feet, and then they were back in the pier car park with the sea somewhere beyond the wall, invisible, only a sound, and Haechan turned the key, and the Rexton coughed once and died." },
      { n: "He turned it again. Nothing. A click. The heater going off with a sigh like an old man giving up a seat." },
      { s: 'haechan', f: 'neutral', t: "Good girl. Come on. Come on, good girl." },
      { n: "Second try. Third. On the tenth he took his hands off the wheel and put them on his knees and sat there looking at the dust through the windscreen with his jaw working, and then he took out his phone and rang Mr. Oh, and said four words, and hung up." },
      { s: 'haechan', f: 'neutral', t: "Forty minutes. He's got cables. He says don't touch it." },
      { music: 'epi-s-haechan' },
      { n: "Forty minutes. Three people. One car with no heater in it, cooling, the dust pressing on the glass from outside so that the car was a small yellow room with nothing beyond it, and a fish tank, and a bag of oysters, and the smell of diesel and cinnamon and cold wool." },
      { n: "For the first five minutes nobody said anything. Then the cold got into her the way it always did, at the cuffs, at the ankles, and she put her hands under her arms, and both of them saw her do it at the same moment." },
      { n: "Haechan had his jacket off before she'd finished doing it. The black padded work jacket, warm from him, over her shoulders, the collar up round her ears, cinnamon and diesel and the sea, and he sat back in his shirt in the cold car with his arms crossed as if it was nothing, as if it were July." },
      { n: "And behind her, a second later, a second too late, she heard Jungwon's coat buttons. She turned her head. He was holding it, the dark coat, half off one shoulder, his right hand at the collar, and he'd seen the jacket already round her, and he stopped, with the coat half off, and looked at it." },
      { choose: [
        { t: "(Keep Haechan's jacket.)", flag: 'epi-s-tank-coat-hc', stat: { courage: 1 }, then: [
          { n: "She pulled Haechan's jacket tighter. She didn't say anything. She didn't need to." },
          { n: "Jungwon put his coat back on. He did up every button, one at a time, slowly, all the way to the collar, the way you'd close a book you'd finished and didn't intend to read again." },
          { s: 'jungwon', f: 'neutral', t: "Of course. It's warmer. It's had more practice." },
          { n: "He said it to the window. *It's had more practice.* She didn't know if he meant the jacket. In the driver's seat Haechan heard it too, and turned his head, and looked over his shoulder at Jungwon for a long second, and Jungwon looked back, and something went between them that wasn't contempt, for once, and wasn't anything she had a name for." },
          { bond: { haechan: 1 } }
        ] },
        { t: "(Take his coat too. Put it over your knees.)", flag: 'epi-s-tank-coat-jw', stat: { kindness: 1 }, then: [
          { n: "She held out her hand for it. He hesitated, which he never did, and then gave it to her, and she put it over her knees, the dark wool still warm from him and smelling of nothing, nothing at all, the strangest thing about him, and tucked it under her legs." },
          { n: "So she sat in the front of a dead car in the dust in Haechan's jacket and Jungwon's coat, the two of them on her like weather, and the two of them in their shirts in the cold, one in front and one behind, not looking at each other, both looking at her." },
          { s: 'haechan', f: 'happy', t: "Look at her. Like a cabbage. Layers." },
          { s: 'jungwon', f: 'happy', t: "She's warm, Donghyuck. That was the idea." },
          { n: "Neither of them said anything after that. But it was a different silence. It was the silence of two men who had both, for once, got what they wanted, and had to sit there knowing the other one had too." }
        ] }
      ] },
      { n: "The cold came on. The windows began to fog from the inside, all three of them breathing in a small closed car, and the dust outside went from yellow to a dirtier yellow as the afternoon went, and the sea went on somewhere beyond the wall." },
      { n: "Then Jungwon spoke. Into the fog on his window, as if to it." },
      { s: 'jungwon', f: 'neutral', t: "Your watch is Thursday. Mine is Friday. I'll take Thursday as well this week." },
      { s: 'haechan', f: 'serious', t: "Why." },
      { s: 'jungwon', f: 'neutral', t: "So you can sleep." },
      { n: "He didn't say where. He didn't say in whose bed. He didn't need to, and in the front seat Haechan went still, the real stillness, the frightened one, the one she'd learned this winter, and the car was so quiet she could hear the oysters shifting in their bags." },
      { s: 'haechan', f: 'serious', t: "I don't need you to do me favors, Yang." },
      { s: 'jungwon', f: 'neutral', t: "It isn't for you." },
      { n: "Then he looked at her. Directly. For the first time all afternoon. Over the mask, in the fogged cold car, with the coat off, his eyes very dark and very level." },
      { s: 'jungwon', f: 'neutral', t: "You've been sleeping, Solar-ssi. Since the moon. I can see it. You weren't before. I'd like you to go on." },
      { n: "She didn't know what to say. There wasn't anything to say. Her throat had closed on its own, and she sat in Haechan's jacket and looked at the man she was supposed to marry offer the other one his night so she could go on sleeping in it, and she understood that this was what Jungwon had instead of shouting, instead of swearing, instead of putting his fist through the window, and that it cost him more than all three." },
      { n: "Haechan put his forehead on the steering wheel. Just for a second. Then he lifted it, and said, to the windscreen, very quietly, in a voice with no joke in it anywhere, the one he used for maybe four things on this earth." },
      { s: 'haechan', f: 'serious', t: "Thursday. Fine. Thank you." },
      { s: 'jungwon', f: 'neutral', t: "You're welcome, Donghyuck." },
      { n: "And that was all. They didn't say anything else. They'd said more in four lines than in the whole of the winter, and they both knew it, and they both sat in the fog with their arms crossed looking out of their own windows like two men who'd just signed something and weren't going to read it again." },
      { n: "She found Haechan's hand on the seat between them, under the edge of his jacket, and held it, and he let her, and in the back seat Jungwon closed his eyes, and kept them closed, out of courtesy, until the headlights came through the dust." }
    ], else: [
      { ifEpiRoute: 'jungwon', then: [
        { place: 'Incheon · The Car', time: 'Daytime', soft: true },
        { music: 'epi-s-day' },
        { n: "Haechan didn't hold any doors. He got in the driver's side and started the engine and sat with his wrists on the wheel looking at the yellow garden through the windscreen, and she understood that wherever she sat it would be the wrong place, so she got in the back, beside Jungwon, and he moved over for her without a word, and Haechan's eyes came up into the rear-view mirror and went away again." },
        { n: "The dust made the city into something underwater. The streetlamps were still on at two in the afternoon, dirty yellow haloes, cars coming out of the murk with their lights on, the harbor road with no harbor on it and cranes standing up into nothing, and Haechan put the trot tape in and turned it up, loud, a man wailing about a woman who'd gone, and drove fast." },
        { n: "It had been two weeks since the tea in the study. Since the baduk, and his hand over hers on the board. Since the things she didn't let herself think about in daylight, Christmas, the grey sheets with their military corners, and how it had felt to watch him lose one of those corners, very slowly, and not mind." },
        { n: "And Haechan knew. Haechan had known before she did. He'd known, probably, from the step on the night before the moon, when she'd gone the other way along the garden. He'd said nothing about it, not one word, because Haechan didn't say the soft thing and he didn't say the hard thing either, he said a joke and drove too fast, and he was driving too fast now." },
        { n: "On the seat between her and Jungwon there was a gap the width of a hand. On the floor by her feet, his coat had fallen open where he'd sat down, and under its edge on the seat his right hand was lying palm up, very still, as if he'd forgotten it was there." },
        { n: "He hadn't forgotten. Jungwon didn't forget anything. It was, he'd told her once, a problem." },
        { choose: [
          { t: "(Put your hand in his, under the coat.)", stat: { courage: 1 }, then: [
            { n: "She put her hand in it. Under the edge of the coat, on the seat, where nobody in the front could see." },
            { n: "His fingers closed. Not hard. Exactly. The way he did everything, as if he'd measured the distance in advance and was only now permitted to cover it. His thumb found the inside of her wrist, the soft place where the pulse is, and stayed there, very lightly, reading it, and she felt her own pulse go up under his thumb like a fish coming up to a hand, and knew he could feel it, and felt him feel it." },
            { n: "His face didn't change. He was looking out of his window at the dust. But under the coat his thumb moved, a centimeter, slow, along the inside of her wrist toward her palm, and back, and she had to look out of her own window and breathe through her nose." },
            { n: "In the mirror, Haechan's eyes. Then the tape, louder." },
            { bond: { jungwon: 1 } }
          ] },
          { t: "(Leave the gap. Not in front of Haechan.)", stat: { kindness: 1 }, then: [
            { n: "She left it. She put her hands in her own lap and looked at the dust, and felt Jungwon notice, and not mind, or not show that he minded, which was the same thing with him and wasn't." },
            { n: "After a while, without moving his head, he said in Mandarin, very low, under the trot singer, so that only she would understand, that it was kind of her." },
            { s: 'jungwon', f: 'neutral', t: "*You're kind to him. I'd like you to keep being.*" },
            { n: "In the front, Haechan turned the tape up two notches. She didn't know if he understood Mandarin. She'd never known. She'd never asked, and suddenly, in the yellow car, she very much wanted to." }
          ] }
        ] },
        { n: "Guwol-dong was a street of shops selling things for other things: bird cages, fish food, pumps, little plastic castles, a whole window of turtles in the yellow gloom. The man had the tank on a trolley under a tarp, and he took one look at the two of them getting out of the back of the car together in their masks and decided, with the joy of a man who has sold many tanks to many couples, that they were married." },
        { s: 'tankman', f: 'neutral', t: "For the new house? Good. Fish in the house, money in the house. You'll have children? You look like a couple who'll have children." },
        { n: "Jungwon's face went completely still above the mask. The other thing. The rare one. She saw it, and he saw her see it, and neither of them said anything, and behind them at the car Haechan made a sound into his mask like a man who'd been hit very hard in the chest and was pretending it was a cough." },
        { s: 'jungwon', f: 'neutral', t: "It's for two koi, sir." },
        { s: 'tankman', f: 'neutral', t: "Same thing. Practice. Your driver going to help me lift this or is he decorative?" },
        { s: 'haechan', f: 'serious', t: "I'm decorative." },
        { n: "He said it flat, and got back in the car, and shut the door, and sat in it with the engine running, and the man looked at the shut door and at the two of them and said *hm* exactly the way Mrs. Gong had, the way the whole city said *hm* about the Lee house, and Jungwon took the corner of the tank in his right hand, and the man took the other, and they slid it into the back of the Rexton under its tarp like a long glass coffin." },

        { place: 'Incheon · Harbor', time: 'Daytime', soft: true },
        { n: "Oysters at Yeonan, for Mrs. Moon, from Mr. Choi and nobody else. Haechan said it wasn't on the way. Jungwon said that was true. Haechan took the coast road without another word and drove it at a hundred, the tank shifting behind them on every bend, and pulled into the pier car park so hard the oysters slid across the floor, and turned the engine off, and sat there, and when Jungwon came back from Mr. Choi's with the bags he turned the key and the Rexton coughed once and died." },
        { n: "He tried ten times. He talked to it. *Good girl. Come on, good girl.* On the tenth he took his hands off the wheel and rang Mr. Oh and said four words and hung up, and got out." },
        { s: 'haechan', f: 'neutral', t: "Forty minutes. Don't touch it. I'm going to look at the sea." },
        { s: 'solar', f: 'neutral', t: "You can't see the sea." },
        { s: 'haechan', f: 'happy', t: "Then I'll look at where it is." },
        { n: "He walked off into the dust with his hands in his jacket. Ten meters away he was a shape. Fifteen, a darker place in the yellow, standing by the sea wall with his back to the car. She saw a lighter flare, small, orange, once. Then nothing. Then, very faint, the flare again, and nothing." },
        { n: "He was quitting. He'd been quitting since Seollal. He'd quit four times." },
        { music: 'epi-s-jungwon' },
        { n: "So it was the two of them in the back of a dead car, cooling, with a fish tank and a bag of oysters and the dust pressing on every window so that there was nothing in the world outside the glass, and the heater gone off with a sigh, and his coat." },
        { n: "He put it round her. He didn't ask. He took it off and put it round her shoulders and did up the top button under her chin with his right hand, his knuckles brushing her throat, and didn't take the hand away at once." },
        { s: 'jungwon', f: 'neutral', t: "You're cold." },
        { s: 'solar', f: 'neutral', t: "You're in your shirt now. You'll be cold." },
        { s: 'jungwon', f: 'neutral', t: "I'm always cold. It's my condition. You've said so." },
        { n: "She had. In a different winter, at a different table, as an insult. He remembered. He remembered everything; it was a problem; and she looked at him so close in the yellow half-dark of the back seat, his hand still at her collar, and felt the whole of her body arrive at once at the place where his knuckles were." },
        { n: "The windows had begun to fog. Her breath and his. In a minute you wouldn't be able to see in at all." },
        { choose: [
          { t: "Jungwon-ah.", stat: { courage: 1 }, then: [
            { n: "Only that. The thing she never called him. The one with no formality in it at all, the one that put them on the same floor of the house." },
            { n: "He shut his eyes. She watched it go through him, a very small movement, everything in him being held very still and then not, all at once, the way a tide stands at the bottom and then goes." },
            { n: "He kissed her. Not the way he did at the gate, or the study, careful and complete, like a sentence he'd written out first. His hand went from her collar into her hair, into the pins, and found one, and pulled it, and her hair came down over his wrist and he made a sound she'd only heard from him once before, in the west wing, low, as if something had been taken out of his hands. She had his shirt in her fists. The coat slid off her shoulders onto the seat. His mouth went from hers to her jaw to the side of her neck under her ear, slow, very precise, as if he were learning where everything was so that he'd never have to ask again, and the car was so cold and he was so warm and she couldn't see anything through the windows at all." },
            { n: "He stopped himself. Of course he did. One hand flat on the seat beside her hip, the other in her hair, his forehead against her temple, breathing as though he'd come up a long stair." },
            { s: 'jungwon', f: 'flustered', t: "He's fifteen meters away." },
            { s: 'solar', f: 'flustered', t: "He can't see. Nobody can see anything." },
            { s: 'jungwon', f: 'neutral', t: "He doesn't need to see. He knows exactly how long forty minutes is." },
            { n: "He said it into her hair, and she laughed, helplessly, against his shoulder, and felt him laugh too, the rare one, the one he did with his wrist to his mouth, except there was no wrist free, so he did it into her hair instead, silently, his whole chest going with it." },
            { bond: { jungwon: 1 } }
          ] },
          { t: "(Put your hand over his at your throat, and keep it there.)", stat: { kindness: 1 }, then: [
            { n: "She put her hand over his. Kept it there, his knuckles against her throat, so that he could feel her pulse going, so that he'd know, without her having to say anything at all, what it was doing." },
            { n: "He knew. She watched him know. His face went still above the collar of his shirt, the rare stillness, and stayed that way, and his thumb moved, just once, along her jaw, very slow, to the corner of her mouth, and rested there." },
            { s: 'jungwon', f: 'neutral', t: "If I kiss you now, Solar-ssi, I won't stop for forty minutes." },
            { s: 'solar', f: 'neutral', t: "That's very precise." },
            { s: 'jungwon', f: 'happy', t: "I'm a precise man. I've measured it." },
            { n: "He didn't kiss her. He put his forehead against hers instead, in the cold back seat, and stayed there, breathing, her hand over his at her throat and his thumb at the corner of her mouth, and it was worse than if he had, and better, and they sat like that with their eyes shut in the fog until they heard boots on the gravel." }
          ] }
        ] },
        { n: "Haechan opened the driver's door and got in with the cold and the dust and the smell of a cigarette he'd tried to hide under fresh gum, and didn't look round. He sat with his hands on the wheel. The windows were fogged white. Her hair was down. Nobody said anything." },
        { n: "Then, to the windscreen, in the plain flat voice of somebody reading the weather, he said it. He'd aimed it. Every word of it. She knew by how slowly it came." },
        { s: 'haechan', f: 'serious', t: "She gets cold in the feet first, Yang. Not the hands. Everybody thinks the hands. It's the feet. Put the coat over her feet." },
        { n: "The back seat was silent. Then Jungwon, without a word, took the coat off the seat and folded it over her boots, and tucked it round her ankles with his right hand, carefully, the way you'd do a thing you'd been told how to do by someone who knew." },
        { s: 'jungwon', f: 'neutral', t: "Thank you, Donghyuck." },
        { s: 'haechan', f: 'neutral', t: "Don't." },
        { s: 'jungwon', f: 'neutral', t: "...Thank you, hyung." },
        { n: "Haechan's hands tightened on the wheel. He didn't turn round. He didn't say anything. He sat there in the fog with his jaw going very slowly on the gum and his eyes on the white windscreen, and after a long time he reached out and wiped a hole in the fog with the side of his fist, so that there was one clear place in all that white, and through it, far off, a pair of headlights coming through the dust very slowly, at exactly the speed limit." }
      ], else: [
        // family
        { place: 'Incheon · The Car', time: 'Daytime', soft: true },
        { music: 'epi-s-day' },
        { n: "Nobody fought about the seats. That was how she knew. On any other day of her life the two of them would have fought about the seats for ten minutes in the drive with the engine running, and today Haechan opened the front door for her and Jungwon got in the back and neither of them said a word, the way men don't fight in a hospital corridor." },
        { ifEvent: 'epi-s-dinner', then: [
          { n: "They'd both been at dinner last night. They'd both seen. Her hand on the tablecloth going, for one second, like a glass of water held up to the window, and her father's fork stopping halfway to his mouth. Neither of them had mentioned it. Neither of them had mentioned anything since. They'd simply started standing nearer to her, both of them, all the time, the way you stand near something on a high shelf in a train." }
        ] },
        { n: "The dust made the city into something underwater. Lamps on at two in the afternoon, dirty yellow haloes, cars coming up out of the murk with their lights on like fish to the glass. Haechan drove it carefully. That was the other thing. Haechan didn't drive anything carefully, ever, and he drove the harbor road at the speed limit with both hands on the wheel and the window up, and checked her in the corner of his eye every time they stopped, as if she might have got out at the lights." },
        { n: "In the side mirror, a slice of Jungwon. He was checking her too. Not her face. Her hands, in her lap." },
        { n: "She couldn't stand it. She'd stood a great deal this winter, and she couldn't stand this, the two of them being gentle with her in the same car, because they had never in their lives agreed about anything except that she was worth hating each other over, and if they'd stopped hating each other it could only mean they were frightened, and if they were both frightened, then it was true." },
        { choose: [
          { t: "Fight. Both of you. Please. Like normal.", stat: { courage: 1 }, then: [
            { n: "She said it to the windscreen. Neither of them answered for a second." },
            { s: 'haechan', f: 'surprised', t: "What?" },
            { s: 'solar', f: 'serious', t: "Fight. About anything. The radio. The road. Who carries the tank. You're being nice to each other and it's horrible. I'm asking you. Fight." },
            { n: "A silence. Then Jungwon, in the back, very politely, the way he'd ask for the salt." },
            { s: 'jungwon', f: 'happy', t: "Donghyuck, you've missed the turning." },
            { s: 'haechan', f: 'happy', t: "I haven't missed anything, young master. I'm taking the scenic route. Through the dust. Because I can see in the dust. Some of us were born here and didn't have to be told where the roads go by a man in a uniform." },
            { s: 'jungwon', f: 'happy', t: "Some of us can read a sign." },
            { s: 'haechan', f: 'happy', t: "Some of us need signs. Some of us need everything written down in a little notebook with a little pen." },
            { s: 'jungwon', f: 'happy', t: "It's a very good pen." },
            { s: 'haechan', f: 'serious', t: "It's an insult to pens." },
            { n: "And they were off, the two of them, all the way to Guwol-dong, the radio and the road and the lane discipline and the Chairman's baduk and whether a koi could recognize a face, Haechan loud and Jungwon quiet and both of them absolutely savage, and she sat in the front seat in the yellow light with her hands in her lap and laughed until she had to take her mask off, and they both stopped to look at her laughing, at the same moment, and then both, at the same moment, started again." },
            { bond: { haechan: 1 } }
          ] },
          { t: "(Hold your hands up to the window and look at them. Let them see you look.)", stat: { kindness: 1 }, then: [
            { n: "She held her hands up. Both of them, in front of her, against the yellow light in the windscreen, the jade on her right hand, the old white scar across the left palm. Solid. Ordinary. She turned them over, and looked at the backs, and then at the palms again." },
            { n: "In the driver's seat Haechan looked at them. In the back, Jungwon leaned forward between the seats and looked at them. Nobody said anything. All three of them looked at her hands for the length of a red light." },
            { s: 'haechan', f: 'neutral', t: "...They're hands, agasshi." },
            { s: 'solar', f: 'neutral', t: "They're hands." },
            { s: 'jungwon', f: 'neutral', t: "Ten fingers. I counted." },
            { s: 'haechan', f: 'serious', t: "Of course you counted." },
            { s: 'jungwon', f: 'neutral', t: "You counted too, Donghyuck. I saw your mouth move." },
            { n: "Haechan didn't deny it. The light went green, and he drove, and she put her hands back in her lap, and after a moment he reached over without looking and put his hand on top of them, both of them, heavy and warm, for one second, and took it back to the gearstick. And from the back seat, very lightly, Jungwon's hand on her shoulder, through the coat, one second, gone." }
          ] }
        ] },
        { n: "Guwol-dong: bird cages, fish food, pumps, little plastic castles, turtles in a yellow window. The man had the tank under a tarp on a trolley, and took one look at Solar and decided she was married, and then looked at the two young men either side of her and couldn't decide to which, and you could see it bother him, a man who liked to know who was married to whom." },
        { s: 'tankman', f: 'neutral', t: "For the new house? Which one's the— well. Good. Fish in the house, money in the house." },
        { s: 'haechan', f: 'happy', t: "It's for two koi, ajeossi. They're the married ones. We're just staff." },
        { n: "Jungwon lifted it with the man, his right hand on the frame, and Haechan stood by the door of the car, decorative, as was his contract, and they slid it into the back under its tarp, and the man scratched his head and watched the three of them get back into the car in the dust, and said *hm*." },

        { place: 'Incheon · Harbor', time: 'Daytime', soft: true },
        { n: "Oysters at Yeonan for Mrs. Moon. Haechan said it wasn't on the way, and took the coast road anyway, at the speed limit. In the pier car park he turned the key and the Rexton coughed once and died, and he tried ten times, talking to it, *good girl, come on, good girl,* and then sat back and rang Mr. Oh and said four words." },
        { music: 'epi-s-half' },
        { n: "Forty minutes. The heater gone with a sigh. The dust on every window so that the car was a small yellow room at the end of the world, and the sea a sound beyond the wall, coming in." },
        { n: "She was sitting with her hand flat on the cold glass of her window. She hadn't meant to. It was only cold, and she'd wanted to feel how cold, and the glass was so cold it burned, and she watched her own fingers on it in the yellow light." },
        { glitch: { near: true } },
        { n: "They went. Not all the way. Thin. The way the moon goes thin at the edge when there's cloud in front of it, so that she could see, through her own hand, faintly, the dust beyond the glass, and the shape of a lamp post, and a gull." },
        { n: "Two things happened at once." },
        { n: "From the driver's seat Haechan's hand came across and closed on her wrist, hard, the way you'd grab somebody at the edge of a quay. And from the back, between the seats, Jungwon's hand came over her shoulder and closed on her fingers, on the glass, pressing them flat, as if he could hold them there by holding them to the window." },
        { n: "Her hand was solid. It was solid under both of theirs, cold and ordinary, the jade, the scar, and it had been solid, perhaps, the whole time, and she'd only imagined it, and so had they, both of them, at exactly the same second." },
        { n: "Nobody moved. Haechan's hand on her wrist. Jungwon's on her fingers. Their two hands were touching. The side of Haechan's thumb against Jungwon's knuckles, on her, at the window. She saw both of them notice it." },
        { n: "Neither of them let go." },
        { s: 'haechan', f: 'serious', t: "Don't do that, agasshi." },
        { s: 'solar', f: 'sad', t: "I didn't do anything." },
        { s: 'jungwon', f: 'serious', t: "Then don't do nothing. Please. Not here. Not where we can't follow." },
        { n: "He said it in Korean and then, under his breath, the same thing again in Mandarin, so it would be said twice, and Haechan heard the Mandarin and didn't ask, and didn't take his hand off her wrist, and she sat in the cold car between them with her hand on the glass under both of theirs and couldn't speak at all." },
        { choose: [
          { t: "I'm here. Both of you. I'm here.", stat: { courage: 1 }, then: [
            { s: 'haechan', f: 'serious', t: "Say it again." },
            { s: 'solar', f: 'neutral', t: "I'm here." },
            { s: 'jungwon', f: 'neutral', t: "Again. For me. I'm slower." },
            { s: 'solar', f: 'happy', t: "You're not slower. You've never been slower at anything in your life." },
            { s: 'jungwon', f: 'neutral', t: "Again, Solar-ssi." },
            { s: 'solar', f: 'sad', t: "I'm here." },
            { n: "They let go, then. Both of them, at the same moment, as if they'd agreed it in advance, and sat back, and looked out of their own windows, and Haechan wiped his face with the back of his hand quickly as if there was dust on it, and there was dust on it, there was dust on everything." },
            { bond: { jungwon: 1 } }
          ] },
          { t: "(Turn your hand over under theirs and hold on to both.)", stat: { kindness: 1 }, then: [
            { n: "She turned her hand over. Under theirs, slowly, so that her palm was against Jungwon's fingers and her wrist turned in Haechan's grip, and she held on, to both, as much of both as one hand could hold, which wasn't much, and was enough." },
            { n: "They sat like that. Three people in a dead car in the dust with three hands in a knot against a window, and nobody said anything at all for a long time, and nobody needed to, and it was, she'd think later, the closest the two of them had ever stood to each other in their lives without one of them bleeding." }
          ] }
        ] },
        { n: "When the headlights came through the dust, at the speed limit, they let go. Haechan cleared his throat. Jungwon did up his top button. Neither of them looked at the other one, and she'd have given anything, anything at all, to hear them fight." }
      ] }
    ] },

    // ───── Shared: Mr. Oh, and home ─────
    { place: 'Incheon · Harbor', time: 'Daytime', soft: true },
    { n: "Mr. Oh got out of his car in the dust with a pair of jump leads coiled over one shoulder like a rope, and walked round the Rexton once, slowly, with his hands at his sides, and looked at it the way a doctor looks at a patient who was told not to do something and did it." },
    { n: "He didn't say anything to Haechan. He opened the bonnet and clipped the leads on, red and black, and went back to his own car and started it, and stood between the two cars with his arms folded, and after a minute nodded at Haechan, who turned the key, and the Rexton coughed and caught and roared, and the heater came on with a blast of hot dusty air that smelled of burning." },
    { n: "Then Mr. Oh came to her window. She wound it down. He reached into his coat and took out a barley candy in its twist of cellophane, the same kind he'd kept in his glove compartment since she was seven and stopped crying at red lights, and put it in her hand, and looked at the back seat, at the two of them, at the tank, at the oysters, and at her." },
    { s: 'mroh', f: 'neutral', t: "Home now." },
    { n: "That was all. It wasn't a question. It was never a question, with Mr. Oh. He went back to his car and pulled out in front of them and drove all the way home at exactly the speed limit through the dust with his hazard lights going, slowly, like a man leading a procession, and Haechan followed him the whole way and for once didn't overtake." },

    { place: 'Incheon · The Lee House · Garden', time: 'Daytime', soft: true },
    { music: 'epi-s-house' },
    { n: "The tank didn't fit through the kitchen door." },
    { n: "Mrs. Bang stood in the doorway with her arms folded and watched them try, Jungwon at one end and the man in the tank shop's instructions at the other, which was Haechan reading them aloud off the box and saying the driver didn't carry, and Pyo appearing from nowhere to take the other corner and nearly putting his head through it, and the long glass box going in at an angle and stopping, and coming out, and going in at another angle and stopping." },
    { s: 'mrsbang', f: 'neutral', t: "It's a door, not a theory. It doesn't get wider if you argue with it." },
    { n: "So it went on the annex step, in the end, at the bottom of the garden, under its blue tarp, until April, Mrs. Bang said, when the frost was gone for good and Mr. and Mrs. Kim could go out into the world like respectable fish. Until then they'd stay in the bucket. They seemed, going round in it, entirely unbothered. They'd been through worse." },
    { n: "Yunjin came home at six from the committee and stood in the garden in the dust in her yellow puffer looking at a hundred and twenty centimeters of empty glass on the annex step under a tarp, and put both hands over her mouth, and laughed so hard she had to sit down on the frozen gravel." },
    { n: "And when Solar looked up, at the top of the garden, the study window was lit, and her father was standing in it with his glasses in his hand, polishing them, slowly, looking down at the three of them on the terraces in the yellow light: one in a black jacket, one in a dark coat, and his daughter between them with her mask round her neck." },
    { n: "He put his glasses back on. He looked a moment longer. Then he went away from the window, and the study light went off, and on in the hall, and then off again, and she knew, the way you know a song by its first note, that he'd gone back to the crossword, and that somewhere in its margin, in small square blue ballpoint, he'd just ticked something." }
  ] }
  );

  // ───────────────────────────── texts ─────────────────────────────
  const T = (R.texts ||= {});
  const LEAVE = (then = []) => ({ t: '(Leave it on read.)', silent: true, then });
  (T.texts ||= []).push(
    { id: 'epi-s-tx-car-yj', thread: 'yunjin', date: '2/19', slot: 'evening', events: ['epi-s-sinpo'], msgs: [
      { from: 'yunjin', t: "SINPO??? with BOTH???" },
      { from: 'yunjin', t: "mrs bang told me. she told me with her face. she didnt use words" },
      { from: 'yunjin', t: "did anybody die. is the market standing" }
    ], reply: [
      { t: "the nut woman thought haechan was my fiancé", then: [{ from: 'yunjin', t: "STOP" }, { from: 'yunjin', t: "im screaming into the koi bucket" }, { from: 'yunjin', t: "mrs kim is looking at me like im insane" }] },
      { t: "everybody lived. they agreed about something", then: [{ from: 'yunjin', t: "they WHAT" }, { from: 'yunjin', t: "thats worse. thats so much worse than a death" }] },
      LEAVE([{ from: 'yunjin', t: "ok im coming over the wall in 5 min with snacks. that was not a question" }])
    ] },
    { id: 'epi-s-tx-car-hc', thread: 'haechan', date: '2/20', slot: 'early', events: ['epi-s-sinpo'], msgs: [
      { from: 'haechan', t: "mrs gong told the eel man" },
      { from: 'haechan', t: "the eel man told the ice man. the ice man told minseok" },
      { from: 'haechan', t: "according to the ice man im very handsome and its a waste" }
    ], reply: [
      { t: "the ice man is a liar", then: [{ from: 'haechan', t: "the ice man has never lied in his life agasshi. hes made of ice" }] },
      { t: "a waste of what", then: [{ from: 'haechan', t: "not on here" }, { from: 'haechan', t: "but you know" }] },
      LEAVE([{ from: 'haechan', t: "read at 6:02. awake early. thinking about my shoulders probably" }])
    ] },
    { id: 'epi-s-tx-car-jw', thread: 'jungwon', date: '2/20', slot: 'early', events: ['epi-s-sinpo'], msgs: [
      { from: 'jungwon', t: "Good morning. I hope the nuts were satisfactory to Mrs. Bang." },
      { from: 'jungwon', t: "It snowed on the way home. Donghyuck was right. Please don't tell him." }
    ], reply: [
      { t: "she found the walnut", then: [{ from: 'jungwon', t: "I don't know which walnut you mean." }, { from: 'jungwon', t: "Good morning, Solar-ssi." }] },
      { t: "i'll tell him. he'll be unbearable", then: [{ from: 'jungwon', t: "He's already unbearable. It would only be more of the same." }] },
      LEAVE([{ from: 'jungwon', t: "Thank you for yesterday." }])
    ] },
    { id: 'epi-s-tx-car-tank', thread: 'yunjin', date: '3/12', slot: 'evening', events: ['epi-s-tank'], msgs: [
      { from: 'yunjin', t: "[photo: a fish tank on a step under a tarp in the dust]" },
      { from: 'yunjin', t: "i asked for a tank and got a MONUMENT" },
      { from: 'yunjin', t: "mrs bang says april. april!!! mr and mrs kim are going to retire in a bucket" }
    ], reply: [
      { t: "it didn't fit through the door", then: [{ from: 'yunjin', t: "i KNOW. pyo told me. pyo re-enacted it" }, { from: 'yunjin', t: "with a tray" }] },
      { t: "it was a long afternoon", then: [{ from: 'yunjin', t: "u have dust in ur hair and a face like a drama" }, { from: 'yunjin', t: "ur telling me everything. tonight. bring the pickle face" }] },
      LEAVE([{ from: 'yunjin', t: "the committee says hi btw. chaewon added 'the tank' to the agenda" }])
    ] }
  );
})();
