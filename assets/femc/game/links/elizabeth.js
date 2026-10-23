/* Elizabeth · Velvet Room. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Hidden frame link: never on the map, no phone (invite: null), no hangouts. Every rank is forced, so each plays as story on its
   `after` date (all Sundays, Daytime) through core.js dueEvent, in the home slot ('after').
   Her personal requests take her out of the Velvet Room to read Solar "the long way", from the outside.
   The main story owns the Velvet Room beats (4/7 contract and blank page, 5/13, 6/5, 6/17, 8/7, 11/8, the 1/9 dorm visit, the 1/16 verso);
   these ranks sit between them, refer to them only after they've happened, and never name what is on the back of the page.
   Cast-only speakers: eliz-owner, eliz-attendant (no portraits); kurosawa is built in. afterMax: 2 scenes for after rank 10 (engine pass). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'elizabeth', name: 'Elizabeth', short: 'Elizabeth', arcana: 'Velvet Room', numeral: '', from: 'Persona 3',
  kind: 'frame',
  romance: null,
  starts: '4/7',
  hidden: true,
  forced: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  home: { area: 'Iwatodai Dorm', spot: 'Front', slot: 'after', days: [0, 1, 2, 3, 4, 5, 6],
          hint: 'Some Sundays, a card of blue paper under the door, and a woman in blue waiting at the gate.' },
  approach: "A woman in a blue dress and a little blue cap is standing very straight outside the dorm gate with an enormous book held against her chest, regarding the street with polite, intense interest.",
  cast: { 'eliz-owner': 'Hagakure Owner', 'eliz-attendant': 'Station Attendant' },
  invite: null,
  hangouts: [],
  ranks: [
    { after: '4/26', title: '1: the long way', place: 'Paulownia Mall · Central Atrium', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "On Sunday morning there was a card under her door. It was heavy blue paper, thick as a playing card, and it smelled faintly of old books and cold air, like something that had been kept a long time somewhere high up. The writing on it was silver, in a hand so upright and looping and correct that it looked engraved." },
      { n: "*Request. I should like to be shown a fountain that is not for drinking from. I shall be outside your dormitory at ten o'clock. Please do not be alarmed by anything. E.*" },
      { n: "Solar read it twice. It was the last sentence that was alarming. She had not, until the last sentence, been planning to be alarmed by anything." },
      { n: "At ten o'clock exactly Elizabeth was standing on the pavement outside the dorm gate in the blue dress and the little blue cap, exactly as she had stood in the elevator, very straight, with the enormous blue book held against her chest. A small dog on a balcony across the road was barking at her in a high, continuous, outraged way, and she was regarding it with deep and courteous interest, the way you'd listen to a speech in a language you were trying to learn." },
      { s: 'elizabeth', f: 'happy', t: "Good morning, Solar. Your dog is extremely upset with me." },
      { s: 'solar', f: 'neutral', t: "It's not my dog." },
      { s: 'elizabeth', f: 'happy', t: "Then it is upset with me on its own account. How independent of it." },
      { s: 'elizabeth', f: 'neutral', t: "You will have noticed that this is not one of the requests I post for the tower. Those are business. This one is personal." },
      { s: 'elizabeth', f: 'neutral', t: "I have never once needed to leave the Velvet Room to know a guest. The book does it for me. I open it, and there they are, all their reasons, in ink. Yours will not. So I have decided to read you the long way. From the outside. The way, I am told, people read one another." },
      { choose: [
        { t: "(Offer her your arm.)", notes: 3, then: [
          { n: "Elizabeth looked at the offered elbow for a long moment with tremendous interest, as though it were a door handle on a door she had never noticed in her own house, and then took it in one gloved hand, carefully, the way you'd take hold of a banister in the dark." },
          { s: 'elizabeth', f: 'happy', t: "Oh. Is this how it is done? How very convenient. You can steer." }
        ] },
        { t: "Is that allowed?", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "My master is away. That is very nearly the same thing." }
        ] },
        { t: "You could have just asked me questions.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "I could. And you would answer them, and I would learn what you believe you are. That is a different book entirely. I have a great many of those." }
        ] }
      ] },
      { place: 'Paulownia Mall · Central Atrium', time: 'Daytime' },
      { music: 'city' },
      { n: "She looked at every single person on the monorail. Not rudely, or not exactly. With total attention, one after another, a woman with shopping bags, two boys sharing earphones, an old man asleep with his mouth open, as if each of them were a page she had been handed and was expected to sign for." },
      { s: 'elizabeth', f: 'neutral', t: "None of these people are in my book. They were simply here already. Imagine. Nobody had to write them down." },
      { n: "Paulownia Mall on a Sunday morning was bright and loud and smelled of waffle batter and floor polish, and in the middle of the atrium the fountain was doing what it always did, throwing up a glittering column and letting it fall, and at the bottom of the basin, under the trembling water, there were coins, hundreds of them, copper and silver, scattered like scales. A little girl in a yellow raincoat ran up to the rim, shut her eyes, threw a coin in over her shoulder, and ran back to her mother." },
      { n: "Elizabeth's grip on Solar's arm tightened." },
      { s: 'elizabeth', f: 'serious', t: "She has thrown away money. A child. In broad daylight. Is this a tax?" },
      { n: "Before Solar could answer she had let go of Solar's arm and was at the rim of the basin, peeling off one blue glove, finger by finger, with the plain intention of fishing the coin out and running after the child to return it." },
      { choose: [
        { t: "(Catch her hand.) They're wishes. You throw a coin and make a wish.", notes: 3, then: [
          { n: "Elizabeth stopped with her bare hand a centimeter from the water and looked down at Solar's fingers around her wrist, and then at the fountain, and then at all the coins, all of them, with an entirely new expression." },
          { s: 'elizabeth', f: 'happy', t: "Wishes. All of these. The whole floor of it. How marvelous. How very untidy." }
        ] },
        { t: "It's for luck.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Luck. And the fountain dispenses it?" },
          { s: 'solar', f: 'neutral', t: "...Not really. You make a wish. That's the luck part." },
          { s: 'elizabeth', f: 'happy', t: "Ah. A wish. Now it makes a great deal more sense, and a great deal less." }
        ] },
        { t: "(Let her.)", notes: 1, then: [
          { n: "Elizabeth fished out a ten-yen coin with two fingers, dried it on her glove, and went after the yellow raincoat at a stately walk that somehow covered ground very fast. Solar watched the child's mother receive the coin, and the explanation, and a small bow, with the face of a woman who would be telling this story for years. Elizabeth came back looking satisfied." },
          { s: 'elizabeth', f: 'neutral', t: "She says it was a wish. She seemed to think I had stolen it. I explained that I had only returned it." },
          { s: 'elizabeth', f: 'happy', t: "She was very kind about it. I believe she was frightened." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "And the fountain keeps the coin. What does it do with it?" },
      { s: 'solar', f: 'neutral', t: "Nothing. Somebody cleans it out once a month, probably." },
      { s: 'elizabeth', f: 'happy', t: "Then it is a fountain that collects wishes and does nothing whatever about them. How restful for it." },
      { s: 'elizabeth', f: 'serious', t: "Please make one. I should like to see what a wish looks like from the outside. I have only ever read them." },
      { n: "She found a hundred-yen coin in her purse and held it out flat on her palm, and Elizabeth stood at her shoulder and watched her face from about twenty centimeters away with an attention so complete it was like standing in a draft. Solar held the coin over the water. She stood there a long time." },
      { choose: [
        { t: "(Wish to know what to wish for.)", notes: 3, then: [
          { n: "She threw it. It went in with a small plain sound and rocked down through the water and lay with the others, and Elizabeth let out a breath as though she'd been holding it." },
          { s: 'elizabeth', f: 'happy', t: "There. Your face did something. Just there, at the corner. I have never seen anyone's face do that from this side." }
        ] },
        { t: "(Throw it without wishing for anything in particular.)", notes: 2, then: [
          { n: "It went in with a small plain sound. Elizabeth watched it fall, and then looked at Solar, and narrowed her eyes slightly." },
          { s: 'elizabeth', f: 'neutral', t: "You wished for nothing. I could tell. Your face stayed exactly where it was. It is very good at that." }
        ] },
        { t: "(Give the coin to Elizabeth instead.)", notes: 1, stat: { kindness: 1 }, then: [
          { n: "Elizabeth looked down at the coin in her own palm as though Solar had handed her a live bird. She held it over the water for a long time, much longer than Solar had." },
          { s: 'elizabeth', f: 'sad', t: "...I find I cannot think of anything. I have never wanted anything. I have always been given what I needed before I needed it." },
          { n: "She closed her glove over the coin and did not throw it, and did not give it back either." }
        ] }
      ] },
      { n: "From a pocket somewhere in the blue dress she produced a small notebook, not the compendium, an ordinary little notebook with a cloth cover, and a pencil, and wrote something in it standing up." },
      { s: 'elizabeth', f: 'neutral', t: "The compendium only accepts what is true. This one accepts what I guess. I am going to need both." },
      { n: "She turned the notebook so Solar could read it. *Item. A person is what she wants.* And under it, after a moment's thought, in smaller writing, *S. does not know.*" },
      { s: 'elizabeth', f: 'happy', t: "So you are not yet a person, in this sense. Please do not be offended. Neither am I." },
      { n: "She walked Solar back to the dorm on her arm, and stopped at the gate as though the gate were the edge of something, and did not come any further. The dog across the road had gone inside." },
      { s: 'elizabeth', f: 'happy', t: "I have a list, you understand. Of requests. It is quite a long list. I do hope you aren't busy for the rest of the year." },
      { n: "Then she turned and walked off down the road toward the station, very upright, and turned a corner where Solar was almost sure there wasn't one, and was gone." }
    ] },

    { after: '5/24', title: '2: the usual', place: 'Iwatodai Strip · Hagakure', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to eat something that is famous. I am told there is a bowl on your street that is spoken of with reverence. Ten o'clock, the gate. E.*" },
      { n: "The midterms had ended on Thursday and the whole dorm had slept through most of Friday as if it had been shot, and Solar came down on Sunday with her head still full of formulas she no longer needed, and found Elizabeth at the gate, as before, upright, with the book, and a small red paper parasol she must have acquired since April, open, against a sky with no sun in it." },
      { s: 'elizabeth', f: 'happy', t: "Good morning. I was told that people carry these. Nobody told me when." },
      { n: "They walked toward the Strip. Elizabeth kept the parasol up the whole way and did not seem to mind that everyone looked at it, or at her, and Solar found, a little to her surprise, that she didn't mind either." },
      { s: 'elizabeth', f: 'neutral', t: "Three pages arrived in my book this month already full. In a hand I nearly know, from a Velvet Room that is not mine. And yours is as it was." },
      { s: 'elizabeth', f: 'neutral', t: "I have stopped trying inks on it. I have decided to try you instead." },
      { place: 'Iwatodai Strip · Hagakure', time: 'Daytime' },
      { music: 'joy' },
      { n: "Hagakure at eleven on a Sunday was all steam and the smell of pork bones that had been simmering since before anyone was awake, and a radio on the shelf playing a baseball game nobody was listening to, and three regulars along the counter hunched over their bowls like monks. Elizabeth stopped in the doorway and breathed in, slowly, with her eyes shut, the way people do at the sea." },
      { s: 'elizabeth', f: 'happy', t: "Oh. It smells *famous*." },
      { n: "She read the menu off the wall aloud, all of it, in order, as though it were a poem in a language she loved and spoke badly. The owner watched her from behind the counter with his arms folded and the expression of a man who had seen a great many people come through that door and was prepared, on balance, to add one more." },
      { s: 'elizabeth', f: 'serious', t: "I should like the famous one. And the secret ingredient, please, on the side." },
      { s: 'eliz-owner', t: "Secret ingredient stays a secret, miss." },
      { s: 'elizabeth', f: 'happy', t: "I could simply know it, you understand. It would take a moment. But it would be dreadfully rude, so I shan't." },
      { n: "The owner looked at her, and something in his folded arms decided not to find out whether that was a joke. He made two bowls." },
      { n: "They came steaming, enormous, glossy with fat, and Solar picked up her chopsticks and slurped the first mouthful of noodles the way everyone in the shop was slurping them, and Elizabeth turned on her stool and stared at her in plain alarm." },
      { s: 'elizabeth', f: 'serious', t: "Solar. Are you in distress?" },
      { choose: [
        { t: "It's polite. It means it's good.", notes: 3, then: [
          { s: 'elizabeth', f: 'happy', t: "Polite!" },
          { n: "Elizabeth picked up her chopsticks with great resolve and slurped. It was the loudest sound Solar had ever heard a person make on purpose. It went on for some time. The three regulars turned on their stools as one man, and the owner stopped wiping the counter, and when it was over the old man at the end set down his bowl and, very slowly, with total seriousness, began to applaud." }
        ] },
        { t: "(Just keep eating and let her figure it out.)", notes: 2, then: [
          { n: "Elizabeth watched her eat for a full minute, and then watched the regulars, and then picked up her own chopsticks and slurped, tentatively, like someone trying out a word, and looked around to see if anyone would object. Nobody did. She did it again, louder, and looked enormously pleased with herself." }
        ] },
        { t: "Maybe a little.", notes: 1, then: [
          { s: 'elizabeth', f: 'sad', t: "Then I shall eat quietly, out of sympathy." },
          { n: "She did, in perfect silence, and the owner watched her do it with a deep wounded frown, as though somebody had walked into his shop and whispered in it." }
        ] }
      ] },
      { n: "The owner came down the counter to refill the water, and stopped in front of Solar, and looked at her with his chin tucked in, considering, the way you look at someone you know from somewhere." },
      { s: 'eliz-owner', t: "Didn't do your usual today." },
      { n: "Solar's chopsticks stopped." },
      { s: 'solar', f: 'surprised', t: "My usual?" },
      { s: 'eliz-owner', t: "Pork. Extra scallion. Egg on the side so it doesn't go cold in the broth. Eat it like you're late for a train." },
      { n: "She had been in here, she thought. Once, she thought. With Junpei, maybe, or after a run, or. She couldn't remember ordering it. She couldn't remember sitting at this counter at all. But it was exactly what she would have ordered, every part of it, down to the egg on the side, and the knowledge of that went through her very quietly, like a draft." },
      { n: "Beside her Elizabeth had put her chopsticks down and turned all the way round on her stool, and was staring at the owner with an expression of naked, radiant delight." },
      { s: 'elizabeth', f: 'happy', t: "He has a page for you. In his head. In broth." },
      { choose: [
        { t: "(Order the usual. See if it's right.)", notes: 3, then: [
          { n: "It was right. It came with the egg on the side and the scallions heaped up, and it tasted exactly like she'd known it would before she tasted it, which was somehow worse, and she ate all of it, quickly, like she was late for something, while Elizabeth watched her the way you'd watch someone open a letter." }
        ] },
        { t: "I don't think I've been here before.", notes: 2, then: [
          { s: 'eliz-owner', t: "Huh. Could've sworn." },
          { n: "He shrugged and went back up the counter. A minute later a little dish with a boiled egg in it arrived at her elbow anyway, without comment, so it wouldn't go cold in the broth." }
        ] },
        { t: "(Order something completely different, out of spite.)", notes: 1, then: [
          { n: "She ordered the miso. It was very good. Halfway through it she wanted the pork, specifically and painfully, with extra scallion, and she knew Elizabeth could see her wanting it, and she finished the miso anyway, out of principle, with the egg he'd put down on the side without being asked." }
        ] }
      ] },
      { n: "Out on the Strip afterward Elizabeth opened her parasol against the overcast again and took out her notebook and wrote in it, walking." },
      { n: "*Item. A person is what others remember of her.* And under it, smaller, *S. is remembered by a man who makes soup. She does not remember him back. Investigate.*" },
      { s: 'elizabeth', f: 'neutral', t: "Does it trouble you? That I am reading you like this?" },
      { choose: [
        { t: "Read whatever you want. I don't mind.", notes: 3, then: [
          { s: 'elizabeth', f: 'happy', t: "That is the most generous thing a guest has ever said to me. Most of them only want to know what they're for." }
        ] },
        { t: "As long as you tell me what you find.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "That is fair. That is a contract. I am very fond of contracts." }
        ] },
        { t: "I'd rather you didn't.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Then I shall read very quietly. With the light off. You will hardly notice." },
          { n: "This was not reassuring, and Solar suspected it hadn't been meant to be." }
        ] }
      ] },
      { n: "At the gate Elizabeth closed the parasol with a snap and gave Solar a small formal bow, as though they'd concluded some business." },
      { s: 'elizabeth', f: 'happy', t: "So you are, at the very least, a person to a man who makes soup. It is a start. It was a very good soup." }
    ] },

    { after: '6/21', title: '3: curse', place: 'Naganaki Shrine', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to have my future told by a box. I understand there is a box for it. E.*" },
      { n: "The rainy season had settled over the city like a wet coat that wouldn't come off. It wasn't raining, exactly, when Solar came out, only hanging in the air in a fine gray mist that got into everything, and Elizabeth was at the gate under a lace parasol that was keeping out absolutely none of it, damp to the shoulders and perfectly content." },
      { s: 'elizabeth', f: 'happy', t: "I have been reading about weather. I had always assumed it was decorative." },
      { place: 'Naganaki Shrine', time: 'Daytime' },
      { music: 'tender' },
      { n: "The shrine steps were slick and dark and the trees over them dripped steadily, every leaf letting go of its water a drop at a time, and at the top the courtyard was empty except for a cat asleep under the offering box and the paper fortunes knotted along the wires by the gate, sagging in the wet like laundry left out by someone who'd forgotten it." },
      { n: "Elizabeth paid her hundred yen with great ceremony, shook the wooden box with both hands and her eyes closed, drew the stick, exchanged it at the window, unfolded the paper with her gloved fingertips, and read it. Her whole face lit up." },
      { s: 'elizabeth', f: 'happy', t: "*Great curse.*" },
      { s: 'elizabeth', f: 'happy', t: "Oh, listen. *What is lost will not be found. The traveler will not arrive. Wait for nothing, for nothing is coming.* Isn't it marvelous? Nobody has ever told me my future. Not once. And it is *dreadful*." },
      { n: "She read the rest of it aloud to the courtyard in a clear carrying voice, every line of misfortune, as though announcing guests at a ball. The cat under the offering box woke up, considered her, and left." },
      { choose: [
        { t: "You're supposed to tie the bad ones to the wire. To leave them behind.", notes: 3, then: [
          { s: 'elizabeth', f: 'sad', t: "Leave it? But it's mine. It's the first thing anyone has ever said about what happens to me." },
          { n: "She held it against her chest the way she held the book. Solar didn't push. After a while Elizabeth folded the curse very small and tucked it between two pages of the compendium, with care, as though pressing a flower." },
          { s: 'elizabeth', f: 'neutral', t: "There. It can do no harm in there. Or a very great deal. We shall find out." }
        ] },
        { t: "Draw again. Maybe it'll be better.", notes: 2, then: [
          { s: 'elizabeth', f: 'serious', t: "Better? Solar, I am not going to throw away a perfectly good curse in the hope of a mediocre blessing." }
        ] },
        { t: "It's just a piece of paper.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "So is a contract. So is a page." },
          { n: "She folded the curse very small and put it away inside the compendium, and patted the cover." }
        ] }
      ] },
      { n: "Solar drew one too, because it seemed rude not to. Hers said *Uncertain. Your path is still being written.* Elizabeth read it over her shoulder and made a small, disappointed sound, like someone who has been served the wrong cake." },
      { s: 'elizabeth', f: 'neutral', t: "Still being written. Yes. Well. We know that. That box is very poorly informed." },
      { n: "Past the shrine, down a path under the dripping trees, there was a small playground with a sandpit gone to mud and a red jungle gym, and Elizabeth saw it and went to it in a straight line, as though summoned, and climbed it in her blue dress and her heeled shoes with the compendium under one arm, rung by rung, unhurried, until she was sitting on the very top bar like a queen on a throne made of scaffolding. After a moment, because there was nothing else to do, Solar climbed up after her." },
      { n: "From up there you could see over the shrine wall to the roofs of Iwatodai going gray-blue into the mist, and the bay beyond them like pewter, and the tops of the trees moving." },
      { s: 'elizabeth', f: 'serious', t: "I told you that the pull catches those who are running from an ending. I have been thinking about it ever since. Rather a lot, for me." },
      { s: 'elizabeth', f: 'serious', t: "Which ending are you running from, Solar?" },
      { choose: [
        { t: "Which one are you running from?", notes: 3, then: [
          { n: "Elizabeth opened her mouth to answer, and then didn't, and then looked at the wet roofs for a long while with her gloved hands folded on top of the book." },
          { s: 'elizabeth', f: 'sad', t: "I have never had one. Attendants do not end. We are only... continued, from guest to guest." },
          { s: 'elizabeth', f: 'neutral', t: "I hadn't thought of that as strange until this moment. Thank you. I think." }
        ] },
        { t: "I don't know. I can't remember any endings.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "No. But they remember you, I suspect. Endings are patient. They wait in the hall with their hats on." }
        ] },
        { t: "I'm not running. I'm right here.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "You say that like somebody who has already counted the ways off this jungle gym." },
          { n: "Solar had. Four, if you counted the slide. She didn't say so. Elizabeth didn't seem to need her to." }
        ] }
      ] },
      { n: "The mist thickened into proper rain while they sat there, the drops loud on the plastic slide, and Elizabeth looked down at the ground with an expression Solar had not seen on her before, which was uncertainty." },
      { s: 'elizabeth', f: 'neutral', t: "How does one get down? I have never had to come down from anything. The room simply arrives." },
      { choose: [
        { t: "(Climb down first and hold your hands up for her.)", notes: 3, then: [
          { n: "Solar went down and stood at the bottom with her arms up, and Elizabeth looked at her for a long moment and then came down rung by rung into her hands, and stepped onto the mud, and looked at her own feet on the ground as if they'd done something clever." },
          { s: 'elizabeth', f: 'happy', t: "Oh. That is what it's for. Being helped down." }
        ] },
        { t: "(Jump.)", notes: 2, then: [
          { n: "Solar jumped and landed in the mud. Elizabeth jumped after her, dress and book and all, and landed with both feet together, perfectly, without a splash, as though the mud had made way for her out of respect." }
        ] },
        { t: "Just go down the way you came up.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "I went up because it was there. Down is not there. Down is merely implied." },
          { n: "She did get down eventually, backwards, slowly, with great dignity and a good deal of mud." }
        ] }
      ] },
      { n: "Under the shrine eaves, out of the rain, she took out the little notebook and wrote in it. *Item. A person is what she is running from.* And under it, *S., unknown. E., nothing. Is that better or worse?*" },
      { n: "She looked at it for a while. Then she crossed out the question, and wrote it again underneath, exactly the same." }
    ] },

    { after: '7/26', title: '4: the register', place: 'Gekkoukan High · Front Gate', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to see where you are written down. Not my book. Theirs. E.*" },
      { n: "It was the dead middle of summer break, a Sunday, the kind of white-hot morning that made the cicadas sound like something electrical about to fail. Elizabeth was at the gate in her blue dress, untouched by the heat in a way that seemed almost impolite, and looked at Solar's face with frank scientific interest." },
      { s: 'elizabeth', f: 'happy', t: "You have gone brown. On the nose, mostly. Was it an island?" },
      { s: 'solar', f: 'neutral', t: "...It was an island." },
      { s: 'elizabeth', f: 'happy', t: "How exotic. I have never been browned by anything." },
      { place: 'Gekkoukan High · Front Gate', time: 'Daytime' },
      { music: 'school' },
      { n: "Gekkoukan's gate was chained and padlocked for the holiday, a heavy padlock with rust in its keyhole. Elizabeth looked at it, and then put out one gloved finger and touched it, and it opened with a small, apologetic click and swung on its chain." },
      { s: 'elizabeth', f: 'neutral', t: "It was not very locked." },
      { n: "Inside, the school smelled of floor wax baking in the heat and dust lying undisturbed on long sunny corridors, and their footsteps came back at them from the far ends. Elizabeth looked around at all of it, at the shoe lockers and the noticeboards and the trophy case, slowly, with her head tilted." },
      { s: 'elizabeth', f: 'neutral', t: "I have only ever seen this building at night. It is a great deal smaller in the daytime. And much less inclined to rearrange itself." },
      { place: 'Gekkoukan High · Classroom', time: 'Daytime' },
      { n: "Solar's homeroom was hot and bright and silent, the chairs up on the desks, a forgotten gym bag on a hook at the back, the blackboard washed to a gray blank. Elizabeth went straight to the window row as if she'd been told which desk, and took a chair down, and sat in Solar's seat with her hands folded on the book, looking at the board, attentive, like a student on the first day." },
      { s: 'elizabeth', f: 'happy', t: "So this is where you sit and are taught things. Show me, please. I want to know what it is like to be in this seat." },
      { choose: [
        { t: "(Show her the initials someone carved in the desk.)", notes: 3, then: [
          { n: "Solar showed her. Two letters cut into the corner of the lid, very old, gone dark with years of hands and filled in with pencil by somebody bored, a K and an M, nobody she knew. Elizabeth traced them with one gloved fingertip, very slowly, the way you'd read Braille." },
          { s: 'elizabeth', f: 'happy', t: "Somebody else was here before you. And wanted it known. How gloriously rude of them." }
        ] },
        { t: "(Write something on the blackboard for her.)", notes: 2, then: [
          { n: "Solar found a stub of chalk on the ledge and wrote *Welcome, Elizabeth* in the middle of the board, in careful letters, and Elizabeth looked at it for a long time with her hands folded, as if it were a painting." }
        ] },
        { t: "There's nothing here, really.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "There is a great deal here. It is only very quiet about it." }
        ] }
      ] },
      { n: "The homeroom register was in the teacher's desk, in the top drawer, a long ledger bound in green cloth with the year stamped on the spine. Elizabeth took it out as if she did this every day and opened it on the desk, and turned the pages to the class list, and ran her finger down the printed names, slowly, one by one, and stopped at the bottom." },
      { n: "Below the last printed name, in blue ink, by hand, somebody had written *Solar*. And then a little gap. And then nothing at all where the surname should have been." },
      { s: 'elizabeth', f: 'serious', t: "Who wrote this?" },
      { s: 'solar', f: 'neutral', t: "I don't know. I asked once. My teacher said it was there when she got the book." },
      { n: "Elizabeth touched the ink with her fingertip. It stayed. She pressed a little harder. It stayed. She looked up at Solar with an expression that went past surprise into something that, on anybody else, Solar would have called hurt." },
      { s: 'elizabeth', f: 'serious', t: "It stays here. Somebody wrote you down by hand, in ordinary ink, in an ordinary book, and it stayed. And in mine it slides off like rain off a window." },
      { n: "She took her fountain pen from wherever she kept it and uncapped it and held it out to Solar, nib first, over the blank." },
      { choose: [
        { t: "(Take the pen. Hold it over the blank. Don't write.)", notes: 3, then: [
          { n: "Solar took it. She held the nib over the space where her name should end. Two shapes came up at once behind her teeth, the way they had on the floor of that green corridor in April, two different weights, both hers, and neither one would go first. She held the pen there until her hand started to ache. Then she capped it and gave it back." },
          { s: 'elizabeth', f: 'neutral', t: "Two of them. I saw it. Your hand went two ways at once and decided on neither." }
        ] },
        { t: "(Write a question mark.)", notes: 2, then: [
          { n: "She wrote a small neat question mark in the blank. It stayed. Elizabeth bent over it and looked at it from very close." },
          { s: 'elizabeth', f: 'happy', t: "A question mark is a kind of name. I have known guests who were nothing else." }
        ] },
        { t: "It's not mine to fill in.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Then whose is it?" },
          { s: 'solar', f: 'neutral', t: "I don't know." },
          { n: "Elizabeth capped the pen slowly and put it away, and looked at the blank for a while, and didn't argue." }
        ] }
      ] },
      { n: "Elizabeth turned the pages of the register back to the beginning, and through all the other classes, all six of them, reading every name, and closed it, and sat with her gloved hands flat on the green cloth cover." },
      { s: 'elizabeth', f: 'sad', t: "I am not in here. Of course I am not. I am not written down anywhere in this world. I had simply never thought to mind." },
      { choose: [
        { t: "(Open it again and write her name in the margin, small.)", notes: 3, then: [
          { n: "Solar opened the register to her own page, and in the margin beside the blank, in small careful letters in pencil, so it could be rubbed out if anyone ever minded, she wrote *Elizabeth*. Elizabeth looked at it for a very long time without saying anything at all." },
          { s: 'elizabeth', f: 'happy', t: "...Oh. Now I shall be absent from homeroom every single day. How dreadful. How wonderful." }
        ] },
        { t: "You're in my handbook.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Am I? What does it say?" },
          { s: 'solar', f: 'neutral', t: "Elizabeth. Velvet Room. Do not be alarmed." },
          { s: 'elizabeth', f: 'happy', t: "That is the most accurate thing anyone has ever written about me." }
        ] },
        { t: "Do you want to be?", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "I don't know. I am finding there are a great many things I do not know whether I want. You are a very bad influence." }
        ] }
      ] },
      { n: "On the way out through the gate she stopped and took her notebook out and wrote, standing in the heat, *Item. A person is where she is written down. By whom? Unknown.* And under it, after a pause, *Also E., now, in pencil.*" },
      { n: "Behind them, as they walked away down the white road, the padlock closed itself on the gate with a small, satisfied click." }
    ] },

    { after: '8/23', title: '5: timetable', place: 'Iwatodai Station · Platform', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to understand trains. All of them. E.*" },
      { n: "She was quieter at the gate this time. Still upright, still with the book, still in blue against the white August glare, but she didn't remark on the weather or the dog, and when Solar came down the steps she only nodded, the way you nod to someone at a funeral you're both attending for different reasons." },
      { s: 'elizabeth', f: 'sad', t: "Her page is still gone. The woman in the blue coat. I open the book to where it was, out of habit, every morning, and there is only that thin line of light down the gutter, and I close it again." },
      { s: 'elizabeth', f: 'serious', t: "The train came out of the same kind of gap as your page. I told you that. So I should like to understand trains." },
      { place: 'Iwatodai Station · Platform', time: 'Daytime' },
      { music: 'city' },
      { n: "At noon on a Sunday in August Iwatodai Station was nearly empty, the heat standing on the platform in a shimmer over the rails, the vending machines humming, a single pigeon walking up and down the yellow line as if it had a train to catch. Elizabeth stood in front of the timetable board for a long time, reading it top to bottom with her lips moving, as reverently as if it were scripture." },
      { s: 'elizabeth', f: 'happy', t: "They come when it says. To the minute. Every one of them keeps its word. Do you know how rare that is?" },
      { n: "There was a station attendant in a pale blue shirt by the gates, mopping his neck with a handkerchief, and before Solar could stop her Elizabeth had gone up to him and was asking, very politely, about the train with the lantern windows. The black-green one. The one that crosses where there are no rails." },
      { s: 'eliz-attendant', t: "...No lantern trains on this line, miss. Last one out's the eleven forty-eight." },
      { s: 'elizabeth', f: 'neutral', t: "And after the eleven forty-eight?" },
      { s: 'eliz-attendant', t: "After that, nothing. Nothing runs at midnight. Not till morning." },
      { s: 'elizabeth', f: 'neutral', t: "Nothing runs at midnight. No. Of course not. Thank you." },
      { n: "She came back to Solar, and they looked at each other, and neither of them said what they were both not saying, and the pigeon walked between them up the yellow line." },
      { n: "The ticket machine she treated as a notary. She read every word printed on its front, the fares and the warnings and the little instructions about change, and then turned to Solar and asked, quite seriously, where she was meant to sign." },
      { choose: [
        { t: "(Buy her a ticket, and hand it to her like a gift.)", notes: 3, then: [
          { n: "Solar fed the machine a coin and took the little card from the slot and gave it to her with both hands. Elizabeth held it as though it were a letter she'd waited years for, and read it, front and back, several times." },
          { s: 'elizabeth', f: 'happy', t: "It says where I may go, and when I must get off. How very kind of it to tell me in advance. Nobody ever tells me in advance." }
        ] },
        { t: "(Show her how the machine works.)", notes: 2, then: [
          { n: "Elizabeth watched the demonstration with great attention, then bought her own ticket, and then, because it had been so satisfying, a second one, and a third, and stood holding a small fan of tickets to a station four minutes away." }
        ] },
        { t: "It's just a ticket. You don't sign it.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Nothing that tells you where you may go is *just* anything, Solar." }
        ] }
      ] },
      { place: 'Iwatodai Station · Monorail', time: 'Daytime' },
      { n: "They rode one stop and back. That was all. Elizabeth stood the whole way with both hands on the pole and her face to the window, watching the bay go by below, bright as tinfoil, the cranes at the port, the white roofs, and the look on her face was something Solar didn't have a word for. Pure, private, uncomplicated joy." },
      { s: 'elizabeth', f: 'happy', t: "It moves and I do nothing. Usually I am the one who moves the room." },
      { n: "On the way back she sat down for the first time, next to Solar, with the book on her knees, and looked at her hands." },
      { s: 'elizabeth', f: 'sad', t: "You saw her. Twice. On the station steps. You told me." },
      { s: 'solar', f: 'sad', t: "I never stopped." },
      { s: 'elizabeth', f: 'serious', t: "Then tell me what she looked like. The book has forgotten her. I should like someone to remember her. I have discovered I cannot do it on my own." },
      { choose: [
        { t: "(Tell her everything you can remember.)", notes: 3, then: [
          { n: "Solar told her. A blue coat, too warm for the weather, buttoned to the throat. A big black instrument case, too big for a violin, held upright between her shoes like a child she was minding. Wet shoes, both times, as if she'd walked through puddles to get there and didn't mind. She'd been looking at the departures board as if she was waiting for one of them to change its mind." },
          { n: "Elizabeth listened with her eyes closed, her lips moving very slightly, the way she had read the timetable." },
          { s: 'elizabeth', f: 'sad', t: "Thank you. Now there are two of us who know about the shoes." }
        ] },
        { t: "I barely saw her.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Barely is more than the book has. Tell me barely." },
          { n: "So Solar told her barely. A blue coat. A case. Wet shoes. Elizabeth nodded at each one like a clerk entering it in a ledger." }
        ] },
        { t: "Why does it matter? She's gone.", notes: 1, then: [
          { s: 'elizabeth', f: 'serious', t: "Because she is not entirely gone. Not while somebody remembers the color of her coat." },
          { s: 'solar', f: 'sad', t: "...Blue. It was blue." },
          { s: 'elizabeth', f: 'neutral', t: "Yes. Good. Thank you." }
        ] }
      ] },
      { place: 'Iwatodai Station · Platform', time: 'Daytime' },
      { n: "Back on the platform, in the heat, Elizabeth stood on the yellow line where the pigeon had been and looked down the rails to where they bent away out of sight." },
      { s: 'elizabeth', f: 'neutral', t: "Where would you go, Solar? If you got on a train and nobody ever told you to get off?" },
      { choose: [
        { t: "I'd get off. Eventually. I think that's the point.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Is it? I had understood that the point was the arriving." },
          { s: 'solar', f: 'serious', t: "You can't arrive if you don't get off." },
          { n: "Elizabeth considered this for long enough that a train came in and went out again in front of them, and then she took out her notebook." }
        ] },
        { t: "I don't know.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "No. You don't seem to. I find that more reassuring than I expected." }
        ] },
        { t: "Somewhere nobody asks me that.", notes: 1, then: [
          { s: 'elizabeth', f: 'sad', t: "Yes. I imagine that is exactly where it goes." }
        ] }
      ] },
      { n: "*Item. A person is where she is going.* And under it, *S. would get off.* And then a long pause, the pencil not moving, and under that, in very small writing, *Probably.*" }
    ] },

    { after: '9/27', title: "6: someone else's words", place: 'Paulownia Mall · Karaoke', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to sing something I did not write. E.*" },
      { n: "September had broken the heat at last, and the morning was clear and mild and smelled faintly of somebody's bonfire, and Elizabeth at the gate was in such evident good spirits that she was very nearly bouncing on her heels, which on Elizabeth looked like a building swaying slightly in a breeze." },
      { s: 'elizabeth', f: 'happy', t: "My book has been very busy this month. There are new pages, and they arrive already knowing your name. Which I find rather presumptuous of them, given that I do not." },
      { n: "She said it brightly. Then she looked at Solar's face and said nothing else about it, and offered her arm, which she had evidently decided was simply how one began." },
      { place: 'Paulownia Mall · Karaoke', time: 'Daytime' },
      { music: 'joy' },
      { n: "The karaoke booth was small and windowless and smelled of old cigarettes and lemon cleaner, with a padded bench along two walls, a sticky table, two microphones in a basket, a tambourine nobody had ever loved, and a screen showing a looping video of a beach that had been filmed sometime in the late eighties. Elizabeth looked around it the way a cardinal might look around a cathedral." },
      { s: 'elizabeth', f: 'happy', t: "A confessional. With lighting." },
      { n: "The catalog was a book as thick as the compendium, and she held it with the same reverence, and flicked through it with growing distress at the sheer number of songs, all of them written by somebody, all of them waiting." },
      { s: 'elizabeth', f: 'serious', t: "There are too many. Choose for me. No. Don't. Yes. Choose." },
      { choose: [
        { t: "(Close her eyes for her and let her point.)", notes: 3, then: [
          { n: "Solar put her hand gently over Elizabeth's eyes, and Elizabeth went still with surprise, and then laughed, a real laugh, short and startled, and put her gloved finger down blind on the page. It landed on a power ballad about a woman who had been wronged by a man on a motorcycle." },
          { s: 'elizabeth', f: 'happy', t: "Fate. Fate has chosen. I have been wronged by a motorcyclist." }
        ] },
        { t: "(Pick her an old enka song about a lighthouse.)", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "A lighthouse. Something that stays where it is and is looked for. Yes. That will do very well." }
        ] },
        { t: "(Pick a children's song. Something easy.)", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "About a frog. I see. You think I am a beginner." },
          { s: 'elizabeth', f: 'happy', t: "You are correct. Let us begin with the frog." }
        ] }
      ] },
      { n: "The music started. The words came up white along the bottom of the screen and turned blue, syllable by syllable, as the song reached them. Elizabeth stared at them and forgot to sing the first line entirely." },
      { s: 'elizabeth', f: 'happy', t: "It writes itself while you sing it. And then it forgets. Look, look, it's forgetting, the blue is going on ahead and leaving the white behind. Solar, it is a page. It is a page that writes itself and lets go." },
      { n: "Then she found her place, and sang. It was not a voice made for a room this size. It was a voice made for an opera house in a city that had just won a war, enormous and pure and slightly too slow, and it filled the booth and pressed on the walls and made the tambourine on the table buzz faintly against the wood. Somebody in the next booth stopped singing to listen. When it was over the screen thought about it and announced, with a fanfare, *62 points*." },
      { s: 'elizabeth', f: 'serious', t: "It has judged me. On what authority?" },
      { choose: [
        { t: "(Tell her the machine is obviously broken.)", notes: 3, then: [
          { s: 'elizabeth', f: 'happy', t: "Broken. Yes. Thank you. Then I shall simply mend it." },
          { n: "She lifted one gloved hand toward the screen, very slightly, and the screen flickered, and the lights in the booth dipped, and the score rolled over like an odometer and settled on *100*, and the fanfare played again, louder, and kept playing. Solar decided not to ask." }
        ] },
        { t: "Sixty-two's good for a first time.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Is it? Then I shall frame it." },
          { n: "She copied the number carefully into her notebook, with the date." }
        ] },
        { t: "That's a fair score.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "You are a very honest person, Solar, and I shall remember it against you." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "Now you. Not from the book. The song you hum. I have heard you. You hum it when you think nobody is listening, and I am almost always listening." },
      { n: "They looked for it in the catalog, because Elizabeth insisted. They looked under every heading Solar could think of. It wasn't there. Solar didn't know its name, or who sang it, or where she'd heard it. She only knew how it went, the way you know how a staircase goes in your own house in the dark." },
      { choose: [
        { t: "(Hum it into the microphone.)", notes: 3, then: [
          { n: "She hummed it. It sounded strange, amplified, too big for itself, like a private thing said in a hall, and she nearly stopped, and didn't. The screen showed the beach video and nothing else. Elizabeth sat on the bench with her eyes closed and her hands folded on the book and didn't move until it was over." },
          { s: 'elizabeth', f: 'neutral', t: "That is not in any book I own. And I own all of them." }
        ] },
        { t: "(Sing a song from the catalog instead.)", notes: 2, then: [
          { n: "She picked something she half knew and sang it, not well, not badly, and got a 74, and Elizabeth looked at the score, and at her, with something like professional jealousy." },
          { s: 'elizabeth', f: 'neutral', t: "That is not the one, though. Someday you will sing me the one." }
        ] },
        { t: "I don't sing.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "You hum. Humming is only singing with the door closed." },
          { n: "Solar didn't open the door. Elizabeth didn't push it. She sang the lighthouse song again instead, to fill the time, and scored 71, and was very pleased." }
        ] }
      ] },
      { n: "Out in the bright mall afterward she wrote in her notebook against the glass of a shop window, *Item. A person is a song somebody else wrote, which she sings as herself.* And under it, *Or one nobody wrote, which she sings anyway, with the door closed.*" },
      { s: 'elizabeth', f: 'happy', t: "I should like to come back. Next time I shall bring my own tambourine. That one has no ambition." }
    ] },

    { after: '10/25', title: '7: the audience', place: 'Paulownia Mall · Screen Shot', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to watch a story in the dark with a great many strangers. E.*" },
      { n: "Autumn had come down properly, and the morning was cold and very clear, the kind of blue sky that looks like you could ring it, and Elizabeth at the gate had acquired, from somewhere, a long blue scarf, which she wore wound three times around her throat and with both ends tossed back over her shoulders like an aviator about to cross a continent." },
      { s: 'elizabeth', f: 'happy', t: "I am told it is the season for scarves. I have taken it very seriously." },
      { place: 'Paulownia Mall · Screen Shot', time: 'Daytime' },
      { music: 'night' },
      { n: "The matinee was a costume drama. A princess traveling in secret through the provinces, disguised as a maid, and a young lord who meets her at a ford and falls in love with the maid, and spends the whole film searching for the princess he's been promised to, not knowing he's already found her. Everyone in the theater knew from the first scene. The princess wore her hair the same way in both roles. It was not a subtle film." },
      { n: "Elizabeth sat bolt upright in the dark with the compendium on her knees and a carton of popcorn she hadn't touched, and watched with an intensity Solar could feel from the next seat, like heat off a stove. When the lord turned the maid away from his door for the second time, Elizabeth leaned forward." },
      { s: 'elizabeth', f: 'serious', t: "*It's her.*" },
      { n: "She said it at full volume. Several rows turned round. Somebody hissed. Elizabeth looked at them, shocked, and turned back to the screen and raised her voice, if anything, because clearly the lord hadn't heard." },
      { s: 'elizabeth', f: 'serious', t: "She is the princess. You have met her four times. Look at her *hair*." },
      { choose: [
        { t: "(Whisper that he can't hear her.)", notes: 3, then: [
          { n: "Elizabeth turned to her in the flickering dark, with the light from the screen moving across her face." },
          { s: 'elizabeth', f: 'sad', t: "None of them? Not even if I am very loud?" },
          { s: 'solar', f: 'neutral', t: "Not even then." },
          { s: 'elizabeth', f: 'sad', t: "...How lonely for them." }
        ] },
        { t: "(Pull her gently back into her seat.)", notes: 2, then: [
          { n: "Elizabeth let herself be pulled, and sat, and folded her hands on the book, and quivered with suppressed information for the next forty minutes like a kettle on a low flame." }
        ] },
        { t: "(Sink very low in your seat.)", notes: 1, then: [
          { n: "Solar slid down until her knees were against the seat in front, and Elizabeth glanced down at her with interest, and then, apparently concluding this was the custom, slid down too, and continued advising the lord from there." }
        ] }
      ] },
      { n: "He found out in the end, of course. There was a rainstorm and a bridge and a dropped hairpin, and the whole theater exhaled together, and Elizabeth wept openly and without embarrassment, large slow tears, and ate the entire carton of popcorn during the credits without seeming to notice she was doing it." },
      { n: "Solar didn't cry. She sat very still in the dark with her hands in her lap and watched the princess's face at the moment the lord said her real name, out loud, in the rain, and the princess's face didn't do anything at all for a second, and then did everything at once. Something in Solar's own chest went tight and stayed tight, the way it does when you hear your name called across a station and turn round before you've decided to. Nobody had called her. She checked anyway, in the dark, over her shoulder. There was only the projector light, and a hundred strangers, all facing the same way." },
      { place: 'Paulownia Mall', time: 'Daytime' },
      { music: 'city' },
      { n: "Outside in the bright mall she unwound the scarf one turn, and wound it back, and was quiet for longer than Solar had known her to be quiet in daylight." },
      { s: 'elizabeth', f: 'serious', t: "Is that what it is like for them? The people who have come looking for you. They know your story, and you do not. They sit in the dark and watch you not know it. They are not permitted to stand up and say, it's her, look at her hair." },
      { s: 'elizabeth', f: 'neutral', t: "Or they are permitted, and it doesn't help. I could not tell which, in the film." },
      { choose: [
        { t: "It's like being the only one who hasn't read the book.", notes: 3, then: [
          { s: 'elizabeth', f: 'sad', t: "Yes. I know that feeling now. I did not, before you. I had read every book." },
          { n: "They stood there together among the Sunday shoppers, two people who hadn't read the same book, and it was, Solar found, a little easier with two." }
        ] },
        { t: "They're kind about it. That's the worst part.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Kindness is often the worst part. I have noticed that about guests. They can bear anything except being handled gently." }
        ] },
        { t: "I don't want to talk about them.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Of course. Then I shall talk about the hairpin. It was a very good hairpin." },
          { n: "She did, at length, and Solar let her, and was grateful, and didn't say so." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "If you had been the princess, Solar. And someone had stood up in the dark and told you. What would you have wanted?" },
      { choose: [
        { t: "I'd want to find out myself. Even if it took longer.", notes: 3, then: [
          { s: 'elizabeth', f: 'neutral', t: "Yes. I thought you might say that. It is a very slow way to read." },
          { s: 'elizabeth', f: 'happy', t: "I approve of it entirely. It is how I have been reading you." }
        ] },
        { t: "I'd want them to tell me.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Even if it didn't help?" },
          { s: 'solar', f: 'neutral', t: "Especially then. At least I'd know they were trying." }
        ] },
        { t: "I'd keep the disguise.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Yes. I suspected you might. You wear it very well. That is not entirely a compliment." }
        ] }
      ] },
      { n: "*Item. A person is the story other people know about her.* She underlined it. And under it, *S. has not read it. Neither have I. We are the only two in the theater who don't know how it ends, and I find I would rather sit beside her than with the others.*" }
    ] },

    { after: '11/29', title: '8: found property', place: 'Paulownia Mall · Police Box', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I should like to see where lost things go. E.*" },
      { n: "November had stripped the trees along the road down to wire and left the sky the color of an old sink, and Elizabeth was at the gate with the scarf wound to her nose and the compendium held tighter than usual, both arms around it, the way you'd hold a child in a crowd." },
      { s: 'elizabeth', f: 'neutral', t: "Your page has three hands in it now. None of them yours. You know this. I showed you." },
      { s: 'elizabeth', f: 'neutral', t: "Some guests are written by the people who are looking for them. I have said that, too. I have been thinking, since, about things that are found. So I should like to see where lost things go, and who comes for them." },
      { place: 'Paulownia Mall · Police Box', time: 'Daytime' },
      { music: 'city' },
      { n: "The police box at Paulownia was small and overheated and smelled of instant coffee and gun oil, and Officer Kurosawa was behind the counter in his uniform with his reading glasses down his nose, doing paperwork with the slow, heavy patience of a man who expected paperwork to outlive him. He looked up at Solar, and nodded, and looked at Elizabeth, and kept looking." },
      { s: 'kurosawa', t: "...Can I help you." },
      { s: 'elizabeth', f: 'happy', t: "Your lost property, please. All of it. I should like to meet it." },
      { n: "Kurosawa considered this for a long moment. Then, apparently concluding that it was Sunday and he had seen stranger requests from stranger people, he got up and unlocked a door at the back, and showed them the shelves." },
      { n: "It was a narrow room lined floor to ceiling with gray metal shelving, and on the shelves, each with a paper tag tied on with string, was everything the mall had ever lost. Umbrellas, dozens of them, folded and furled. A single red mitten. A tower of school textbooks with a name in the front. Sunglasses in a shoebox. A child's plush rabbit with one ear chewed flat. A wedding album. A bag of oranges, gone soft. Elizabeth walked along the shelves slowly, reading every tag aloud under her breath." },
      { s: 'elizabeth', f: 'neutral', t: "*Found, west escalator, the fourth of October. Found, fountain rim. Found, women's restroom, second floor.* They are all written down. Where they were found, and when. But not whose." },
      { s: 'kurosawa', t: "Whose is the owner's job. They come in and describe it. If it matches, it goes home." },
      { s: 'elizabeth', f: 'neutral', t: "And if nobody comes?" },
      { s: 'kurosawa', t: "Three months. Then it's unclaimed." },
      { choose: [
        { t: "What happens to the unclaimed ones?", notes: 3, then: [
          { s: 'kurosawa', t: "Some get sold. Some get thrown out. The umbrellas, I give to people who come in wet." },
          { s: 'elizabeth', f: 'happy', t: "So they are found again by somebody else. Not the one who lost them. Somebody who needed them." },
          { s: 'kurosawa', f: 'happy', t: "...If you want to put it like that." },
          { s: 'elizabeth', f: 'happy', t: "I do want to put it like that. I want to put it exactly like that." }
        ] },
        { t: "(Pick up the plush rabbit.)", notes: 2, then: [
          { n: "Its tag said it had been found on the monorail platform in August. It was gray with love, the way only a very specific child's rabbit gets, the ear chewed flat by a very specific mouth. Somebody had stopped looking for it. Or somebody was still looking and hadn't thought to look here." },
          { s: 'elizabeth', f: 'sad', t: "Somebody will be very sorry about him, someday, very suddenly, years from now." }
        ] },
        { t: "Most of this stuff, nobody wants back.", notes: 1, then: [
          { s: 'kurosawa', f: 'sad', t: "You'd be surprised." },
          { n: "He said it shortly, the way he said everything, and pointed his chin at the wedding album on the top shelf, and didn't explain, and didn't need to." }
        ] }
      ] },
      { n: "Back at the counter Elizabeth set the compendium down on it with a solid thump and drew herself up very tall, and Solar had exactly enough time to see it coming and not enough time to stop it." },
      { s: 'elizabeth', f: 'serious', t: "I should like to report a found person." },
      { n: "Kurosawa took his glasses off. He looked at Elizabeth. He looked at Solar. He looked back at Elizabeth, and put his glasses on again, and pulled a form toward him with the air of a man whose day had just become a great deal longer." },
      { s: 'kurosawa', f: 'serious', t: "...Found where." },
      { s: 'elizabeth', f: 'neutral', t: "On the floor of a tower, in April. In a green hour. By a boy who was not supposed to be there." },
      { s: 'kurosawa', f: 'serious', t: "And the owner." },
      { s: 'elizabeth', f: 'serious', t: "Several have come forward. Their descriptions match. Some of them match a great deal better than I would like." },
      { choose: [
        { t: "(Take the pen and fill in the form yourself.)", notes: 3, then: [
          { n: "Solar took the pen from Kurosawa's hand, and he let her, and she filled it in. *Item, one girl. Found, Tartarus, the sixth of April, by A. Sanada.* She hesitated over *Owner*. Then she wrote *Pending*, and slid it back across the counter. Kurosawa read it, and his face did not move at all, and he stamped it, and filed it, in a drawer, very gently, as though it might break." }
        ] },
        { t: "She's joking. Sorry, officer.", notes: 2, then: [
          { s: 'kurosawa', t: "Uh-huh." },
          { n: "He didn't throw the form away. He folded it once and put it in his breast pocket, and Solar never found out why." }
        ] },
        { t: "I'm not lost property, Elizabeth.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "No. You are found property. That is my whole point. Nobody can decide what to do with you, and there is a three-month rule." }
        ] }
      ] },
      { n: "Kurosawa gave them, on the way out, an umbrella from the unclaimed shelf, because it had started to rain and they had come in dry and he seemed to think they were going to be wet, and Elizabeth accepted it with a deep bow, as if it were a knighthood." },
      { place: 'Paulownia Mall', time: 'Daytime' },
      { s: 'elizabeth', f: 'neutral', t: "Does it frighten you? That they have come forward, with descriptions that match?" },
      { choose: [
        { t: "A little. Mostly it makes me want to know what they're describing.", notes: 3, then: [
          { s: 'elizabeth', f: 'happy', t: "Yes. That is the most sensible thing anybody has ever said in a lost property office." }
        ] },
        { t: "No. They're kind.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Being looked for by kind people is still being looked for. I've begun to suspect it is harder." }
        ] },
        { t: "I'd rather not think about it.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Then I shall think about it for you. Quietly. In the other room." }
        ] }
      ] },
      { n: "Under the borrowed umbrella, in the rain, she wrote *Item. A person is what is found, and who comes for it.* And under it, *Several have come for S. She has not decided whether she is theirs. Neither has the three-month rule.*" }
    ] },

    { after: '12/27', title: '9: seeing the year off', place: 'Port Island · Pier', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "*Request. I am told the year leaves soon. I should like to see it off properly. Where does it leave from? E.*" },
      { n: "Solar read the card on the edge of her bed in the gray morning light, in the dead quiet of the winter break, and found that she didn't know the answer, and that she wanted very much to give one. In the end she took Elizabeth to the pier, because it was the farthest out she could think of. If a year was going to leave from anywhere, it would leave from there." },
      { place: 'Port Island · Pier', time: 'Daytime' },
      { music: 'tender' },
      { n: "The pier at the end of December was empty and enormous and bitterly cold, the wind coming straight in off the bay with nothing to stop it, smelling of salt and diesel and snow somewhere far off. The water was the color of slate, chopped white at the tops. A single fishing boat sat at the far end of the harbor with its lights on in the middle of the day. Gulls stood along the railing all facing the same way, into the wind, like commuters on a platform." },
      { n: "Elizabeth went to the very end and stood at the rail with the scarf whipping out behind her and the compendium under one arm, and from her other hand produced a white handkerchief, and lifted it, and held it up into the wind, and waved it, slowly, out toward the open water." },
      { s: 'elizabeth', f: 'happy', t: "Goodbye. Goodbye. You were very long and very strange and I have enjoyed you." },
      { n: "Then she set down at her feet, on the wet boards, a small square bundle wrapped in a blue cloth, and untied it. It was a bento box. Lacquered, two tiers, packed with a precision that was almost architectural and a selection of foods that suggested she had read about lunch in several different books from several different centuries." },
      { s: 'elizabeth', f: 'neutral', t: "For the year. It has a long way to go, I imagine. I did not want it to go hungry." },
      { choose: [
        { t: "(Sit down on the boards and eat some of the year's lunch with her.)", notes: 3, then: [
          { n: "Solar sat down on the cold pier with her back against a bollard, and after a moment of visible surprise Elizabeth sat down beside her, in the blue dress, on the wet wood, and they ate the year's lunch together out of the lacquer box with the wind trying to take the lids. The rice balls were shaped like small perfect stars. One of them had a pickled plum in it, and one a sweet chestnut, and one, inexplicably, a single grape." },
          { s: 'elizabeth', f: 'happy', t: "The year will understand. It would not have wanted to eat alone either." }
        ] },
        { t: "You can't feed a year, Elizabeth.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "Can't I? Then what have people been doing all these centuries, with their feasts?" },
          { n: "Solar didn't have an answer for that, and they ended up eating it themselves, which Elizabeth seemed to feel proved her point." }
        ] },
        { t: "Who made this?", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "I did. Badly, I suspect. I have never made anything for anyone before. The rice would not do as it was told." },
          { n: "It had done exactly as it was told. It was perfect. Solar ate three and said so." }
        ] }
      ] },
      { n: "When the box was empty they sat for a while on the boards with the cold coming up through them and watched the fishing boat not move. Elizabeth had stopped waving. She folded the handkerchief in her lap." },
      { s: 'elizabeth', f: 'neutral', t: "On the longest night, the book grew heavier in my hands. I did not open it. It seemed to me that what happened that night was yours and not mine to read." },
      { s: 'elizabeth', f: 'neutral', t: "I am not going to ask you. I want you to know that I am not asking. It is very difficult for me. I would like a little credit." },
      { s: 'elizabeth', f: 'neutral', t: "But I should like to know one thing instead. What will you keep? From this year. If it is leaving." },
      { choose: [
        { t: "The people. All of them. Even the ones I don't remember yet.", notes: 3, then: [
          { s: 'elizabeth', f: 'sad', t: "That is a great many people to carry." },
          { s: 'solar', f: 'neutral', t: "They're not heavy. That's the strange part." },
          { s: 'elizabeth', f: 'happy', t: "No. I have found that, too. I did not expect to find it." }
        ] },
        { t: "The small things. The ones nobody else would notice.", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "A grape in a rice ball, perhaps." },
          { s: 'solar', f: 'happy', t: "Definitely the grape." }
        ] },
        { t: "I'd rather not count.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "You count everything else. Exits. Stairs. Benches. I have watched you." },
          { s: 'solar', f: 'neutral', t: "That's why." },
          { n: "Elizabeth looked at her for a long time, and then nodded, slowly, and let it be." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "I am told that at the end of the year, people clean their houses and settle their debts and say goodbye properly, so the new one may come in clean. I have no house. I owe nothing. Nobody has ever said goodbye to me properly. Guests simply wake up." },
      { s: 'elizabeth', f: 'sad', t: "I wonder whether I should like it." },
      { choose: [
        { t: "(Take the handkerchief and wave it at her, the way she waved at the year.)", notes: 3, then: [
          { n: "Solar took the handkerchief out of her lap and stood up and stepped back along the pier, three steps, four, into the wind, and turned and held it up and waved it at Elizabeth, slowly, the way you'd see someone off from a platform." },
          { n: "Elizabeth sat on the boards and watched her do it, and her face did something at the corner, just there, that Solar had never seen it do from this side." },
          { s: 'elizabeth', f: 'happy', t: "...Oh. Yes. I think I should like it very much. Not yet, though. Put it away. Not yet." }
        ] },
        { t: "You'll find out. Someday.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Someday is a word I have not had much use for. I am beginning to." }
        ] },
        { t: "You're not going anywhere.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "No. I never do. That was rather my point." }
        ] }
      ] },
      { n: "The year did not leave in any way that could be seen. The boat stayed where it was. The gulls faced the wind. The sky over the bay went from slate to iron and the lamps came on along the pier one by one. Elizabeth stood and shook out the blue cloth and folded the empty bento into it and looked out at the water one more time." },
      { s: 'elizabeth', f: 'happy', t: "It has gone without saying goodbye. How very like a guest." },
      { n: "*Item. A person is what she keeps.* And under it, in the failing light, writing slowly with cold fingers, *And what she can bear to wave at.*" }
    ] },

    { after: '1/24', title: '10: an open request', place: 'Paulownia Mall · Velvet Door', time: 'Daytime', scene: [
      { place: 'Iwatodai Dorm · Front', time: 'Daytime' },
      { music: 'velvet' },
      { n: "The card was under her door on a Sunday late in January, and it was different from the others. The paper was the same heavy blue, the ink the same silver. But it was not a request." },
      { n: "*This time, I should like you to make a request of me. I shall be at the blue door. You know the one. E.*" },
      { n: "She did know the one. She had walked past it a hundred times at the back of Paulownia Mall without ever quite looking at it, the way you don't look at a door in a dream until it matters." },
      { place: 'Paulownia Mall · Velvet Door', time: 'Daytime' },
      { bg: 'paulownia-velvet-door' },
      { n: "It was cold in the alley behind the mall, and smelled of the bins and of the bakery's back step, and the blue door stood where it always stood, between a fire escape and a stack of crates, and nobody else could see it. Solar knew that now without knowing how she knew it. She put her hand flat on the paint. It was warm, the way a door is warm when there's a fire in the room on the other side." },
      { place: 'The Velvet Room', time: '' },
      { music: 'velvet' },
      { n: "Blue. The deep impossible blue, the long velvet seat, the hum, the numbers climbing too fast above the brass doors. Elizabeth was standing where she had stood the first time, very straight, the compendium held against her chest, and she was not smiling. She looked, Solar thought, like someone on a station platform who isn't sure the train is coming." },
      { s: 'elizabeth', f: 'neutral', t: "Good afternoon, Solar. Please sit down. I have made nine requests of you, and you have granted all of them, and some of them were very silly. It is your turn. Ask me for something." },
      { choose: [
        { t: "Tell me about you.", notes: 3, then: [
          { s: 'elizabeth', f: 'serious', t: "...Me." },
          { n: "She said it as though Solar had asked her for a book in a language she didn't own. Then she sat down, on the velvet seat, beside Solar, which she had never done in this room, and folded her hands on the compendium." },
          { s: 'elizabeth', f: 'neutral', t: "Very well. That is a proper request. I shall try to grant it." }
        ] },
        { t: "Show me something you love.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Something I love. Yes. I have only recently found out that I have any. Let me show you where I keep them." },
          { n: "She sat down beside Solar on the velvet seat, which she had never done in this room, and took out the small cloth notebook." }
        ] },
        { t: "Come for a walk. No reason.", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "No reason. How daring. Yes. Afterward. First, I find I have something to tell you, and I would like to tell it sitting down." },
          { n: "She sat beside Solar on the velvet seat, which she had never done in this room, and took out the small cloth notebook." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "I have no page, you know. Attendants are not in the compendium. We are the ones who hold it. I had never once in all my time thought that was odd. And then a guest walked in whose page was as empty as mine, and I looked at it, and for the first time I saw what I looked like." },
      { s: 'elizabeth', f: 'neutral', t: "So I went out to read you the long way. And it seems I have been read back." },
      { n: "She opened the little notebook and read from it, aloud, in order, the way she had read the timetable and the menu at Hagakure. *A person is what she wants. What others remember of her. What she is running from. Where she is written down. Where she is going. A song somebody else wrote. The story other people know. What is found, and who comes for it. What she keeps.*" },
      { s: 'elizabeth', f: 'happy', t: "I went out to find those things about you, and I have found them out about me instead. I like fountains. I like a man who knows how you take your egg. I like curses. I like timetables, and the dark in a cinema, and being helped down from a jungle gym, and umbrellas nobody claimed, and feeding a year. I did not know any of that in April. I did not know I was the sort of thing that could like." },
      { n: "She closed the notebook. Then she opened the compendium on her knees and turned it to Solar's page, the one with the fine blue border and the flourish at the corners and nothing inside, and they looked at it together. Neither of them turned it over. They both knew what was on the back of it, or knew that something was, in that writing neither of them had held up to a mirror, and neither of them reached for it." },
      { s: 'elizabeth', f: 'neutral', t: "It does not matter to me any more, what this says. Or doesn't. That is an extraordinary thing for me to say. I have checked it several times this week, and it is still true." },
      { choose: [
        { t: "(Touch the page.)", notes: 3, then: [
          { n: "Solar put two fingers on the blank, very lightly. It was warm, like the blue door had been. Not paper-warm. Skin-warm, as if something on the other side of it had been sitting very close for a long time, keeping still." },
          { s: 'elizabeth', f: 'sad', t: "Yes. I have felt that too. I don't know what it means. I have decided that I am allowed not to know." }
        ] },
        { t: "Maybe some pages are better blank.", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Perhaps. A blank page cannot be wrong about you. That is a kind of mercy. It is also a kind of insult. I go back and forth." }
        ] },
        { t: "I'm sorry I never gave you an answer.", notes: 1, then: [
          { s: 'elizabeth', f: 'happy', t: "You gave me nine Sundays. I find I prefer them. Answers are only one page long." }
        ] }
      ] },
      { n: "She closed the compendium. From inside its back cover she took out one last card, the same heavy blue, and held it out to Solar, and it was blank on the front. On the back there was nothing but a small silver *E.*, in the corner, like a signature at the foot of a contract nobody had written yet." },
      { s: 'elizabeth', f: 'neutral', t: "An open request. One. You may write on it whatever you like, whenever you know what it is. Anywhere. At any time. In any world you happen to be standing in. And I shall come." },
      { s: 'elizabeth', f: 'happy', t: "I may be late. I have never once been late in my life. I should like to try it." },
      { choose: [
        { t: "(Put it in your handbook, between the pages, where it'll stay flat.)", notes: 3, then: [
          { n: "Solar opened her handbook and laid the card inside, against the spine, flat, between two pages of things she had kept from this year, and closed it, and held it on her knees with both hands. Elizabeth watched her do it with the same attention she had given the first coin falling into the fountain." },
          { s: 'elizabeth', f: 'happy', t: "There. Now I am written down somewhere. In your book. By you." }
        ] },
        { t: "What if I never use it?", notes: 2, then: [
          { s: 'elizabeth', f: 'neutral', t: "Then you will have a card that says I would have come. That is also a gift. I have checked." }
        ] },
        { t: "I don't know what I'd ask for.", notes: 1, then: [
          { s: 'elizabeth', f: 'happy', t: "Good. Then there is still something left for you to want. I would hate for you to run out." }
        ] }
      ] },
      { n: "The numbers above the brass doors were slowing. Elizabeth stood, and Solar stood, and for a moment they were standing facing one another in the middle of the blue room as if neither of them was quite sure of the custom." },
      { s: 'elizabeth', f: 'neutral', t: "I believe that, at this point, people say something. I have read a great many of them. None of them seem right." },
      { n: "She didn't say any of them. She only lifted one gloved hand in the same small formal wave she had given Solar in April, the wave of a girl seeing someone off at a train station, except that this time she held it up a little longer, and this time she was the one who looked as if she had something she hadn't said." },
      { n: "Then the light went white at the edges, and Solar was standing in the alley behind Paulownia Mall in the cold with her handbook held against her chest, and there was no door between the fire escape and the crates at all." }
    ] }
  ],
  // After MAX (engine pass needed): Velvet Room or outing scenes that can play any time after rank 10 (1/24).
  afterMax: [
    { place: 'Paulownia Mall · Central Atrium', time: 'Daytime', scene: [
      { music: 'city' },
      { n: "There was no card. Elizabeth was simply at the gate one cold bright morning in the scarf and the blue dress, as if she'd been passing, which was not a thing that Elizabeth did, and said that she should like to see the fountain again, and that this was not a request, only a wish, and that she had been practicing the difference." },
      { n: "The mall was half empty, the January sales picked over, a man on a ladder taking down the last of the New Year decorations. The fountain was doing what it always did. Elizabeth stood at the rim and looked down at the coins under the trembling water for a long time, all those wishes nobody did anything about, lying there on the tiles like scales." },
      { n: "Then she took off one glove, finger by finger, and out of her palm, where it must have been all morning, she took a coin, old and dull and worn smooth at the edges." },
      { s: 'elizabeth', f: 'neutral', t: "I have been carrying this since April. I won't tell you where I came by it. You were there. You will work it out." },
      { s: 'elizabeth', f: 'serious', t: "I have thought of something. At last. It took me nine months and a great many Sundays." },
      { choose: [
        { t: "(Stand back and let her do it alone.)", notes: 3, then: [
          { n: "Solar took a step back, and then another, so there was nobody at Elizabeth's shoulder at all, nobody watching her face from twenty centimeters away. Elizabeth noticed. She turned her head very slightly, as if to thank her, and didn't, and turned back to the water." }
        ] },
        { t: "What are you going to wish for?", notes: 1, then: [
          { s: 'elizabeth', f: 'happy', t: "Absolutely not. You of all people should know better than to ask a woman that at a fountain." }
        ] },
        { t: "(Shut your eyes, so she can't see you watching.)", notes: 2, then: [
          { n: "Solar shut her eyes. She heard Elizabeth take a breath, a long one, and hold it, the way people hold their breath at the top of a jungle gym." }
        ] }
      ] },
      { n: "Elizabeth closed her eyes, and threw it in over her shoulder, the way the little girl in the yellow raincoat had done in April, a little too hard, a little crooked. It went in with a small plain sound and rocked down through the water and settled among the others, one more wish on the floor of a fountain that did nothing about any of them." },
      { n: "She opened her eyes. Her face, at the corner, just there, was doing something that Solar had first seen it do on a cold pier, and that she now knew the name of." },
      { s: 'elizabeth', f: 'happy', t: "There. That one is mine. Nobody gave it to me before I needed it." },
      { n: "On the walk back she didn't take Solar's arm, and Solar didn't offer it. They walked side by side instead, in step without trying, two people who had each found out one thing they wanted, and weren't going to say." }
    ] },
    { place: 'The Velvet Room', time: '', scene: [
      { music: 'velvet' },
      { n: "She came to it the way she had come to it the first time, without deciding to, between one breath of sleep and the next, and was sitting on the long velvet seat in the blue with her shoes on. But Elizabeth was not standing where she always stood. Elizabeth was sitting on the guest's side, across from her, very upright, with her gloved hands folded on her knees. The compendium was on the seat beside Solar." },
      { s: 'elizabeth', f: 'happy', t: "Welcome to the Velvet Room. No, wait. That's your line. Go on. I've always wanted to hear it from this side." },
      { choose: [
        { t: "(Stand, hold the book against your chest, and say it properly.)", notes: 3, then: [
          { n: "Solar stood up. She picked up the compendium, which was heavier than it looked and warm, and held it against her chest the way Elizabeth held it, and drew herself up very straight, and looked down at the attendant on the guest's seat." },
          { s: 'solar', f: 'happy', t: "Welcome to the Velvet Room." },
          { s: 'elizabeth', f: 'happy', t: "Oh. Oh, it's lovely from here. You look terribly mysterious. No wonder they all stare." }
        ] },
        { t: "Welcome to the Velvet Room, I guess.", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "*I guess.* Yes. That is exactly how it feels, the first few hundred years." }
        ] },
        { t: "I'm not doing that.", notes: 1, then: [
          { s: 'elizabeth', f: 'neutral', t: "No. You never do the thing the room expects. It is your most reliable quality." }
        ] }
      ] },
      { s: 'elizabeth', f: 'neutral', t: "Now. The guest must be written. You are the attendant, so you must write me. The book will not take it. I've tried. So we shall use mine." },
      { n: "She handed over the little cloth notebook, open to a clean page, and the pencil, and sat back, and waited, with the polite, slightly anxious face of somebody at the doctor's." },
      { n: "Solar wrote *Elizabeth* at the top. Then she sat and looked at the page for a long time, with the room humming around them and the numbers above the brass doors climbing and climbing and never arriving anywhere." },
      { choose: [
        { t: "(Write: Likes fountains, curses, timetables, and being helped down.)", notes: 3, then: [
          { n: "She wrote it. Then she kept going, the way you keep going once a pen has decided something. *Slurps loudly. Waves at years. Can open padlocks and won't say how. Was late once, on purpose, and enjoyed it.*" },
          { s: 'elizabeth', f: 'happy', t: "Read it to me. No. Don't. I want to read it myself, later, alone, the way people do with letters." }
        ] },
        { t: "(Write: Do not be alarmed.)", notes: 2, then: [
          { s: 'elizabeth', f: 'happy', t: "That is the whole of me, really, isn't it. Four words. You are a very economical attendant." }
        ] },
        { t: "(Write nothing under the name.)", notes: 1, then: [
          { n: "Elizabeth leaned across and looked at the page with her name on it and nothing underneath, and looked at it for a long time, and then laughed, softly, surprised at herself." },
          { s: 'elizabeth', f: 'neutral', t: "Ah. Yes. Now I see what it's like. It isn't as bad as I thought. There's room." }
        ] }
      ] },
      { n: "She took the notebook back and closed it and held it against her chest, the small one, the way she held the big one, and they sat for a while on either side of the room, both on the wrong side, the hum going on and on around them, saying nothing at all and finding it comfortable." },
      { s: 'elizabeth', f: 'neutral', t: "I'm told this is what people do at the end of things. They sit in a room together and don't say the important part. I had always thought it was a waste." },
      { s: 'elizabeth', f: 'happy', t: "It is not a waste. I was wrong. I shall write that down too." },
      { n: "The light went white at the edges. The last thing Solar saw was Elizabeth on the guest's seat with both notebooks on her knees, lifting one gloved hand, and this time not waving at all. Only holding it up, open, the way you'd hold a hand up to the glass of a train window from the inside, so that somebody on the platform could put theirs against it if they wanted." }
    ] }
  ]
});
