/* Persona 3: Equinox · Taejoon & Miseon ("Appa & Eomma") · Temperance XIV. Link data for femc-equinox-game.html; replaces
   their stub in ../links.js (same id). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js. Speakers: taesang-strangers (Taejoon), miyeon-strangers (Miseon), goto (the bathhouse's owner,
   no portrait), haechan, mrsoka.
   Written: ranks 1–3. Ranks 4–10 still to write (rank 9 is where each of them stops asking; see the private plan).
   The whole file is wrapped in an IIFE so its helpers (mom / three) don't collide with other scripts' globals.
   Every rank can be played late, so each one follows where the mothers are (story events, not dates):
     before eqx-equinox (9/23)            both here, the boarding house, Ishida ten paces behind (state A)
     eqx-equinox, not yet eqx-1122        Miseon taken; Taejoon alone (state B); rank 3 also splits on eqx-1023
                                          (after The Fathers' Hill he knows "something is wearing my wife")
     eqx-1122                             Miseon back, seamed, flinches at gloves (state C)
   Rank 1 (after 8/31, Tue evening, last night of summer break; the Strip, the bathhouse bench, the river walk home):
     Taejoon's coffee milk, Miseon's cabbages and the sweet kimchi; the ask, "take her home", in their mouths (Taejoon, who
     never asks, asks). Records tally asks.parents-strangers yes / no / choose (+ cakes / choose). Choice before it sets
     eqx-ps-told-r | eqx-ps-told-h | eqx-ps-told-same (what she tells them about her other kitchens; cosmetic).
     State B: Taejoon alone on the bench, the same ask. State C: both, after the field; the same ask.
   Rank 2 (after 9/14, Tue evening; the bathhouse, women's side; Miseon leads): the scrub towels from the Korean grocer,
     her back and Solar's, the hot pool, the pins. Reads asks.parents-strangers. Sets eqx-ps-pinned (Solar pins her hair)
     | eqx-ps-hair-asked (Solar asks her to leave it down; she doesn't: rank 9's beat) | nothing.
     State B: Taejoon gives her the towel Miseon bought her; she goes in alone; sets eqx-ps-scrubbed (lets an old woman do
     her back) or nothing. State C: Miseon's seamed back; sets eqx-ps-seam (Solar washes round it) or nothing.
   Rank 3 (after 10/12, Tue evening in rain; Taejoon leads; the bathhouse lounge, baduk with Mr. Goto, then Solar):
     two eyes. Reads asks.parents-strangers, eqx-1023, eqx-1122, dead.shinjiro. Pre-10/23: Mrs. Oka's rice cakes in his
     handkerchief (eqx-ps-ate-cake | eqx-ps-river-cakes | nothing) and "how deep does it go" (eqx-ps-told-deep |
     eqx-ps-lied-deep | nothing). After 10/23: he says no to Mrs. Oka's supper through Goto. After 11/22: Miseon home,
     not coming to the bath; she doesn't remember telling the tale; he does.
   New choice key: asks.parents-strangers (yes / no / choose). New cosmetic flags (nothing reads them yet): eqx-ps-told-r,
   eqx-ps-told-h, eqx-ps-told-same, eqx-ps-pinned, eqx-ps-hair-asked, eqx-ps-scrubbed, eqx-ps-seam, eqx-ps-ate-cake,
   eqx-ps-river-cakes, eqx-ps-told-deep, eqx-ps-lied-deep.
   Invented here: Mr. Goto (the bathhouse's old owner, a widower, plays go in the front room; says yes to Mrs. Oka's
   supper before 10/23); a Korean grocer by Port Island Station (a zainichi grandmother); the boarding house's bath is a
   tub you can't sit in, so Taejoon found the sento on 8/27; the coffee-milk ritual; Taejoon counting days since the bridge
   in the go club's notebook. The strangers fences hold (DO-NOT-OPEN-epilogue-plan-private.md §4): no war, no numbers,
   no coats of hers, nothing after home; "Sol-ah" is his; Miseon only her care and her silence. Speakers without a
   portrait: goto. */
(() => {
  // Where the mothers are when the rank plays: A before the bridge, B taken, C brought back.
  const three = (a, b, c) => ({ ifEvent: 'eqx-1122', then: c, else: [{ ifEvent: 'eqx-equinox', then: b, else: a }] });
  const ASK = 'asks.parents-strangers';

  (window.FEMC_GAME_LINKS ||= []).push({
    id: 'parents-strangers', name: 'Taejoon & Miseon', short: 'Appa & Eomma', arcana: 'Temperance', numeral: 'XIV', from: 'strangers', kind: 'parent',
    world: 'S', romance: null, arrives: '8/25', starts: '8/26', lodging: 'boarding',
    members: ['taesang-strangers', 'miyeon-strangers'], cast: { 'taesang-strangers': 'Taejoon', 'miyeon-strangers': 'Miseon', goto: 'Mr. Goto' },
    home: { area: 'strip', spot: 'Bathhouse', slot: 'evening', days: [2, 5],
            hint: 'Tuesday and Friday evenings, on the Strip by the bathhouse, finding out what everything in the konbini is.' },
    approach: "On the bench outside the bathhouse on the Strip there is a woman sitting very straight with a man's clean shirt folded on her knees, watching the door the men's side lets out of, the way you'd watch a pot.",
    ranks: [

      // ───────────────────────── Rank 1 ─────────────────────────
      { after: '8/31', title: '1: coffee milk', place: 'Iwatodai Strip · Bathhouse', time: 'Evening', music: 'tender', scene: [
        { bg: 'iwatodai-bathhouse' },
        three([
          // ── A: both of them, the last night of summer ──
          { n: "The last evening of summer break was so hot the Strip had given up on it. The shutters on the pachinko parlor were half down, the man at the takoyaki stand was fanning himself with a menu instead of turning anything, and the cicadas in the one tree outside the bathhouse were going at it like they'd been paid by the hour, a sound so thick you could have leaned on it." },
          { n: "Her mother was sitting on the bench under the tree." },
          { n: "Very straight, the way she sat on every bench and every chair and the edge of every bed, knees together, ankles crossed, as if somebody important might come round the corner at any moment and she'd prefer them to find her ready. A man's shirt was folded on her lap, white, pressed, folded into a square so exact it could have been sold in a shop. Beside her on the bench was a plastic carrier bag, and sticking out of the top of the carrier bag were two napa cabbages, enormous, pale green, their outer leaves flopping over the handles like the ears of a dog." },
          { n: "Solar stopped on the pavement and looked at the cabbages for a long moment." },
          { s: 'solar', f: 'surprised', t: "...Eomma. Where did you get those." },
          { n: "Her mother looked up. Her eyes went over Solar once, top to bottom and back up, fast, the way they had gone over her every evening of her life in a doorway: shoes, hem, hands, face, has she eaten, has she slept, has she been crying. Then they settled, and her mother moved the carrier bag off the bench onto the ground at her feet, which was the invitation, and Solar sat down in its place." },
          { s: 'miyeon-strangers', f: 'neutral', t: "There's a woman by the big station. Across the water. Down a street with a laundry. She has a shop the size of a cupboard and she's from Osaka and her grandmother was from Jeju, and she sells gochugaru from a sack with a scoop." },
          { s: 'miyeon-strangers', f: 'neutral', t: "I found her on Saturday. Mr. Ishida found the street. I found the shop." },
          { n: "She said it the way she'd have said she found a lost earring. Solar looked past her shoulder and there he was, Ishida, ten paces down the Strip at the vending machine, in his dark suit in the heat, with his hands folded in front of him, studying the drinks as if the choice were very difficult and might take him all evening. He saw her see him. He bowed his head a centimeter and went back to the drinks." },
          { s: 'solar', f: 'neutral', t: "You're making kimchi. Here." },
          { s: 'miyeon-strangers', f: 'serious', t: "Somebody has to." },
          { n: "She folded her hands on top of the shirt. She was quiet for a moment, in the particular way she was quiet before she said something unkind about someone she liked, which was the only way she ever said anything unkind." },
          { s: 'miyeon-strangers', f: 'serious', t: "It's sweet. The kimchi at that table. Somebody has put sugar in it. A great deal of sugar." },
          { s: 'miyeon-strangers', f: 'neutral', t: "She's a kind woman. She has been very kind to us. Somebody should tell her. It won't be me." },
          { n: "Solar laughed. It came out of her before she could do anything about it, a real one, startled, loud enough that the man at the takoyaki stand looked over; and her mother didn't laugh, of course, her mother didn't do that in public, but her mouth did something at one corner and then put itself carefully back, and she looked at the bathhouse door and not at Solar, which was where she kept it." },
          { n: "The bathhouse was old. Wooden front, a blue cloth curtain over each door with the character for *man* on one and *woman* on the other, a tall brick chimney behind with a thread of steam coming off the top into the white sky. It had been there in Solstice. Solar had walked past it a hundred times. She had never once been in." },
          { s: 'solar', f: 'neutral', t: "Appa's in there?" },
          { s: 'miyeon-strangers', f: 'neutral', t: "Since six. Tuesdays and Fridays. He found it on Friday. The bath at the boarding house is a box you can't sit down in. He came out of it the first night and stood in the hall and said, *that's not a bath, that's a bucket with opinions*, and went out, and walked until he found this." },
          { s: 'miyeon-strangers', f: 'neutral', t: "He's very happy. Don't tell him I told you. He doesn't know he looks happy. He thinks it's the steam." },
          { place: 'Iwatodai Strip · Bathhouse', time: 'Evening', bg: 'iwatodai-bathhouse', soft: true },
          { n: "He came out at a quarter to seven." },
          { n: "Pink. That was the first thing. Her father, who in every memory she had of him was the same grave even color as the stairs he sat on, came out through the blue curtain pink to the ears, his hair wet and combed straight back, a small white towel round his neck, his reading glasses fogged solid so that he had to stop on the step and take them off and wipe them on the towel, blind, squinting at the Strip like a man who'd just come up out of the sea." },
          { n: "He had a bottle in his other hand. Small, glass, the old-fashioned kind with a paper cap, full of something pale brown." },
          { n: "He put his glasses back on. He saw Solar. Something went across his face, quick, glad, and was put away, the way everything was put away on his face, but not quite fast enough, because it was the steam." },
          { s: 'taesang-strangers', f: 'neutral', t: "Sol-ah." },
          { s: 'solar', f: 'happy', t: "Appa. What's that." },
          { s: 'taesang-strangers', f: 'neutral', t: "Coffee milk." },
          { n: "He said it with tremendous seriousness, as if he'd been asked to name a ship. Then he stood on the step of the bathhouse in the heat, in his undershirt and his good trousers, and put his left hand on his hip, and tipped his head back, and drank the whole bottle in one long go without stopping, his throat working, the way a little old man in a cap was doing it right behind him in the doorway, hand on hip, in exactly the same posture, at exactly the same angle." },
          { n: "He lowered the bottle. He breathed out. The old man in the cap breathed out too, and bowed to him, and went off down the Strip with his towel." },
          { n: "Solar looked at her mother. Her mother looked at the cabbages." },
          { s: 'miyeon-strangers', f: 'neutral', t: "He's done that every time. Mr. Goto showed him. The old man who owns it. You put your hand on your hip and drink it all at once or it doesn't count." },
          { s: 'miyeon-strangers', f: 'neutral', t: "He thinks nobody saw him the first time. I was sitting right here." },
          { s: 'taesang-strangers', f: 'neutral', t: "I can hear you, yeobo." },
          { s: 'miyeon-strangers', f: 'neutral', t: "I know you can. Put your shirt on, there are children." },
          { n: "He put his shirt on. The pressed one, off her lap, which she held up for him without standing so that he only had to turn round and put his arms back into it, the way she'd held up a hundred coats for him in a hundred halls; and he did up the buttons himself, slowly, from the bottom, and she reached up without looking and did the top one, which he never did, and then took her hand back and folded it on her other hand." },
          { n: "Then he sat down on the other side of Solar. And for a while the three of them sat on a bench on the Strip in a town in Japan with two cabbages and an empty milk bottle and said nothing at all, and the cicadas did the talking." },
          { n: "Solar didn't know what to do with her hands. That was the strange thing. She sat between them with her hands in her lap and kept moving them, and stopping, and moving them, because she couldn't remember ever sitting like this, the three of them in a row, out of doors, with nowhere to be. At home somebody was always on their way somewhere. At home there was a car at the gate and a man at the car. At home her father sat at the bottom of the stairs and her mother sat at the top and she came in through the door between them, late, and walked up past one and down past the other, and nobody ever sat on the same step." },
          { n: "Here there was a bench. It was very hot. Her father smelled of cheap soap and her mother smelled of the same perfume she'd always worn, which had no business existing in this town and existed anyway, because her mother had arrived wearing it." },
          { s: 'taesang-strangers', f: 'neutral', t: "...It's the only place here nobody asks me anything." },
          { n: "He said it to the Strip. Not to either of them." },
          { s: 'taesang-strangers', f: 'neutral', t: "The old men don't talk. You sit in the water and they sit in the water and nobody says a word for an hour. Then the owner comes out and beats me at baduk in the front room and doesn't say anything about that either." },
          { s: 'taesang-strangers', f: 'neutral', t: "They call it go. Same stones. Same board. He's eighty-one and he plays like a man trying to catch a train." },
          { s: 'solar', f: 'happy', t: "He beats you?" },
          { s: 'taesang-strangers', f: 'neutral', t: "Every time." },
          { s: 'miyeon-strangers', f: 'neutral', t: "He lets him. He thinks I don't know that either." },
          { n: "Her father didn't answer. He turned the empty bottle round in his fingers, the paper cap tucked into his breast pocket, and Solar watched him not answer and understood that her mother was right, and that he'd been letting an old man win at a game for four evenings running in a bathhouse in a town where nobody knew who he was, and that he'd never in his life done anything like it, and that he liked it." },
          { place: 'Iwatodai Strip · Bench', time: 'Evening', bg: 'iwatodai-strip-night', soft: true },
          // CG: eqx-coffee-milk — a wooden bench outside an old Japanese bathhouse on a summer evening, a gray-templed man with wet hair and a towel round his neck holding an empty glass milk bottle, a woman sitting very straight with two huge napa cabbages in a bag at her feet, a girl between them, blue curtains on the bathhouse doors and steam off the chimney.
          { n: "The sky went from white to apricot to the color of weak tea. The takoyaki man started turning things again. Her mother, who did not ask things, asked a thing." },
          { s: 'miyeon-strangers', f: 'neutral', t: "The American one does your egg whites. In the morning. And coffee. Black." },
          { s: 'miyeon-strangers', f: 'neutral', t: "And the other one puts ketchup on rice." },
          { n: "She said *ketchup* the way you'd say *arson*. Solar laughed again, but her mother was looking at her now, properly, not at the door or the cabbages; and her father had gone still on the other side of her in the way that meant he was listening with all of himself; and Solar understood that this wasn't a joke, or not only one. That her mother had sat at a breakfast table six days ago and watched two other women know her daughter. And had said nothing about it for six days. And had been carrying it about in her like a stone in her shoe." },
          { s: 'miyeon-strangers', f: 'neutral', t: "Tell me what it's like. Their kitchens." },
          { choose: [
            { t: "(Tell her about the marble counter on Seventy-Fourth Street.)", notes: 2, flag: 'eqx-ps-told-r', then: [
              { n: "So she told her. The kitchen on the Upper East Side with the island in the middle like a ship, and her other father reading the paper behind it on Sundays and saying *you two are spoiled* without looking up, and her other mother on her toes reaching for the good glasses, laughing at herself. Standing up to eat. Never sitting. Her bag on her shoulder. The elevator." },
              { n: "Her mother listened to all of it with her hands folded on her knee and her face doing nothing. When it was finished she was quiet for a while." },
              { s: 'miyeon-strangers', f: 'neutral', t: "...Standing up." },
              { s: 'solar', f: 'neutral', t: "Every morning." },
              { s: 'miyeon-strangers', f: 'serious', t: "No wonder you're cold by eleven." }
            ] },
            { t: "(Tell her about the Kims' apartment and the pan.)", notes: 2, flag: 'eqx-ps-told-h', then: [
              { n: "So she told her. The apartment in Seoul with the steel door and the shoes in a heap inside it, and the egg in the pan with the yolk soft and the ketchup in a spiral, eaten out of the pan with her phone in the other hand, before school, standing at the stove, and the other mother shouting about a sheet from the balcony, and her other father asleep on the couch with the remote on his chest." },
              { n: "Her mother listened with her face doing nothing at all. When Solar got to *out of the pan*, one of her eyebrows went up, by about a millimeter, and stayed up." },
              { s: 'miyeon-strangers', f: 'neutral', t: "...Out of the pan." },
              { s: 'solar', f: 'flustered', t: "It saves a plate." },
              { s: 'miyeon-strangers', f: 'serious', t: "She lets you." },
              { n: "It wasn't a question. It wasn't quite disapproval either. It was something more complicated, that sat on her mother's face for a second like a woman reading a recipe in a language she half knew and finding it, against every expectation, edible." }
            ] },
            { t: "It's the same me. In all of them. I promise.", notes: 3, flag: 'eqx-ps-told-same', then: [
              { n: "Her mother looked at her for a long time. Solar held it. She'd learned to hold her mother's look on the stairs at home, at fifteen, at sixteen, coming in at two in the morning with her shoes in her hand; she could hold it now, here, on a bench, in the heat." },
              { s: 'miyeon-strangers', f: 'neutral', t: "No. It isn't." },
              { s: 'miyeon-strangers', f: 'neutral', t: "You laughed just now. Loud. In the street. You didn't learn that in my house." },
              { n: "She said it without any reproach at all. She said it the way she'd have said a dress had been taken in somewhere she hadn't taken it in herself, and was a better fit, and she'd like to know who did it." }
            ] }
          ] },
          { n: "Her father put the empty bottle down on the bench beside him, very carefully, so it wouldn't roll." },
          { s: 'taesang-strangers', f: 'neutral', t: "The American one. Lee. The father." },
          { s: 'solar', f: 'neutral', t: "Jaesang." },
          { s: 'taesang-strangers', f: 'neutral', t: "He has a plan. For you. I can see it on him. He walks into every room with it under his arm." },
          { s: 'taesang-strangers', f: 'neutral', t: "...The other one, Kim, has a remote control." },
          { n: "That was all he said about it. But he'd said it, and he'd said it to her, and Solar sat between her parents on the bench and understood that the two of them had been doing what she'd been doing since the twenty-fifth: watching. Sitting at the long table, passing the pickles, being very polite, and watching five other people love their daughter in ways they had never seen and couldn't have invented, and saying nothing, very loudly, every night." },

          { place: 'Iwatodai · River Street', time: 'Evening', bg: 'iwatodai-riverside-night', music: 'night' },
          { n: "They walked her home along the river because it was getting dark and because Mitsuru's rule was twos and three was more than two, her father said, as if it were a sum, and her mother carried nothing because her father had taken the cabbages without a word the moment she stood up, one under each arm, like a man carrying two very large babies out of a burning building." },
          { n: "Ishida came behind. Ten paces. On the river side, between her mother and the water, Solar noticed, the whole way, without ever seeming to change his step to keep there." },
          { n: "Halfway down the river street her mother stopped, and turned round, and waited for him. He stopped too, surprised, ten paces off. She went back to him. She took a can of cold barley tea out of the pocket of her cardigan, where she'd had it all along, apparently, since the vending machine, and put it in his hand, and closed his fingers round it with hers, and went back up the street to her husband, and walked on." },
          { n: "Ishida stood holding the can for a second in the evening. Then he bowed over it, low, the way he'd bowed over a cup of tea at breakfast on the twenty-sixth, and followed." },
          { n: "Solar looked back at him. Gray at the temples, the closed-door face, the kind eyes. She couldn't have said why she looked. She only knew that she wanted to know what he looked like walking behind her mother on a summer evening with a can of tea in his hand, and that she wanted to remember it, and that the wanting was strange, and sat in her chest like a hand." },
          { n: "The river went by. The water was very low and very still and the color of a mirror nobody had cleaned. Up ahead, at the bend, the boarding house's lamp was on in the front window, yellow, and the persimmon tree over the wall was a shape against the last of the light, its fruit still small and green, and very hard, waiting." },
          { n: "Her mother stopped again. Not to go back. She stopped on the path by the water and stood, and turned the ring on her right hand, once, all the way round, with her thumb." },
          { s: 'miyeon-strangers', f: 'neutral', t: "The landlady said a thing. At breakfast. The first morning." },
          { s: 'miyeon-strangers', f: 'neutral', t: "*You'll want to take her home, of course. Every mother does.*" },
          { n: "She said it in the landlady's Japanese, perfectly, with the landlady's softness on it, and then didn't say anything for a moment, looking at the water. Solar's skin did something at the back of her neck that she didn't let reach her face." },
          { s: 'miyeon-strangers', f: 'neutral', t: "I thought, what a thing to say to a stranger. And then I thought about it all night. And all the next night." },
          { n: "Her father had stopped too. He stood with a cabbage under each arm and his back to the river and looked at Solar, and she watched him look at her, and something was wrong with it, and it took her a long moment to see what." },
          { n: "He was going to ask her something." },
          { n: "She knew it before he opened his mouth, the way you know a step is missing in the dark. In eighteen years, in a house where everything was known and nothing was said, her father had never once asked her anything that mattered. Not where she'd been. Not who with. Not what she'd done, or why her shoes were wet, or what the boy at the bottom of the garden was to her, or whether. He waited. He sat at the bottom of the stairs and waited, and whatever she told him he took, and whatever she didn't he let be, and that was how she'd known, her whole life, that she was loved, in that house: by what wasn't asked." },
          { n: "His jaw worked. He looked very tired, suddenly, and very much older than he'd looked pink on the bathhouse step." },
          { s: 'taesang-strangers', f: 'neutral', t: "...Sol-ah. When this is finished. When we go home." },
          { s: 'taesang-strangers', f: 'neutral', t: "You come with us." },
          { n: "And then, after it, as if it had cost him something to get it out and he had to pay a second time to make it real, he did the thing he never did. He made it a question." },
          { s: 'taesang-strangers', f: 'neutral', t: "...Will you." },
          { n: "Her mother didn't say anything. She didn't need to. She stood beside him by the water with her hands folded and her eyes on Solar's face, and her eyes said it too, plainer than any word she had, the way they'd said *eat* and *sleep* and *your father hasn't slept* across a thousand mornings: *come home.*" },
          { n: "The cicadas had stopped. Solar couldn't remember when. There was only the river, and the lamp at the bend, and the two of them, waiting." },
          { choose: [
            { t: "I'll come home, Appa. When you go, I'll come.", notes: 3, tally: { cakes: 1, [ASK]: 'yes' }, then: [
              { n: "It was the easiest thing she'd ever said. It came out whole, warm, in the right voice, the daughter's voice, the one that made rooms breathe out; and she watched it land on both of them at once." },
              { n: "Her mother's hands came apart. Just slightly. Her father let out a breath through his nose, long, and nodded, once, the way he nodded when a figure came out right, and then he said a word he almost never said." },
              { s: 'taesang-strangers', f: 'neutral', t: "Good." },
              { n: "It sounded strange in his mouth. Satisfied. Full. As if it had been waiting for her at the end of the street, with the table set." },
              { n: "Her mother came and put her hand on Solar's hair. Small and dry and careful, the ring cold against her scalp, not stroking, just resting there; and under it Solar felt the small warm thing come loose from under her ribs and go, out, into the evening, toward the bend in the river, toward the lamp; and the air off the water smelled suddenly of something sweet, like rice steaming, like a kitchen just round a corner. She didn't know why her eyes stung. She told herself it was the heat." }
            ] },
            { t: "Don't ask me that. You never ask me anything. Don't start now.", notes: 2, tally: { [ASK]: 'no' }, then: [
              { n: "It came out harder than she meant. It came out in the voice from the stairs at home, the two-in-the-morning voice, the one with the door already shut in it." },
              { n: "Her father looked at her for a long moment. Then his face did the thing it did, the closing, the drawer pushed in." },
              { s: 'taesang-strangers', f: 'neutral', t: "...No. I don't." },
              { s: 'taesang-strangers', f: 'neutral', t: "I don't know what I'm doing, in this place. I'm doing things." },
              { n: "He turned and walked on, with the cabbages. Her mother didn't. She stood beside Solar for a moment longer by the water, not touching her, and then reached across, and turned Solar's collar down where it had folded under, with two fingers, and smoothed it flat, and walked on after him. She didn't say anything at all. She said it very carefully." }
            ] },
            { t: "When I come home, it'll be because I decided to. You're the ones who taught me that.", notes: 2, tally: { choose: 1, [ASK]: 'choose' }, then: [
              { n: "It cost something. She felt exactly what, as she said it: the yes she could have given them, warm and easy, sitting in her mouth like a sweet she wasn't allowed, and her own teeth closing on it." },
              { n: "Her father looked at her a long time. In the last of the light his face was very plain." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Did we." },
              { s: 'solar', f: 'neutral', t: "You never asked me where I'd been. Not once. You let me decide what to tell you. I thought that was the whole point of you." },
              { n: "Her father didn't answer. He looked down at the cabbages under his arms as if he'd forgotten he was holding them. And her mother, beside him, made a small sound Solar had never heard her make, not a laugh, close to one, and put her hand on her husband's arm." },
              { s: 'miyeon-strangers', f: 'neutral', t: "She's right. She's your daughter. You can't ask her and you can't make her. You never could." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Mm." },
              { n: "But he didn't say *good*. And he didn't say *all right*. And all the way along the rest of the river street Solar could feel the question walking beside them, the one he'd asked, asked now and not taken back, between the three of them on the path like a fourth person, keeping step." }
            ] }
          ] },
          { place: 'The Oka Boarding House · Gate', time: 'Evening', bg: 'eqx-oka-gate', music: 'eerie', soft: true },
          { n: "At the gate the lamp was on in the front window and somebody was laughing inside, one of the girls, and the kitchen smelled of something with ginger in it, and Mrs. Oka's voice came through the screen, *is that you? Come in, come in, there's plenty*; and her mother took the cabbages from her father, one and then the other, and stood holding them both against her chest at the gate like something she'd carried a long way." },
          { s: 'miyeon-strangers', f: 'neutral', t: "Friday. Bring nothing. I'll have made it properly." },
          { ifFlag: 'eqx-from-strangers-family', then: [
            { n: "Her father went in first. At the door he stopped, with his hand on the frame, and looked back at her where she stood at the gate in the dark." },
            { s: 'taesang-strangers', f: 'neutral', t: "...I'll leave the light on. On the stairs." },
            { n: "There was no light on the stairs. The boarding house stairs had one bare bulb at the top that the girls switched off to save Mrs. Oka's money. He knew that. He went in anyway, and a minute later, through the little high window on the landing, she watched it come on." }
          ], else: [
            { n: "Her father went in first. At the door he stopped, with his hand on the frame, and looked back at her where she stood at the gate in the dark, and didn't say anything, and then said her name, the short way, *Sol-ah*, as if checking it still fit; and went in." }
          ] },
          { n: "Ishida walked her up the hill to the dorm. She hadn't asked him to. He walked ten paces behind her all the way to the gate, and bowed when she reached it, and turned round and went back down into the dark toward the river, toward her mother's house, at exactly the same pace, and she stood at the dorm gate and watched him go until she couldn't." }
        ], [
          // ── B: Miseon taken; Taejoon alone ──
          { n: "The bench outside the bathhouse was wet. It had rained in the afternoon and the Strip was still dripping, the gutters running, the one tree over the bench shedding drops onto the wood in a slow irregular tap, and her father was sitting on the far end of it, the right end, with a small towel round his neck and his hair wet and combed back, and an unopened bottle of coffee milk in his hand." },
          { n: "He wasn't pink. He'd been in the water an hour, the old man at the counter told her later, and come out the same gray he went in." },
          { n: "The left end of the bench was empty. He hadn't sat in it. There was a dry patch there the size of a woman, where nobody had sat in the rain, because he'd put his own jacket down over it before the rain came and taken it up again after, and was holding it now, folded, on his knee." },
          { n: "Solar sat down in the middle. There was no Ishida ten paces off at the vending machine. There wouldn't be again." },
          { s: 'taesang-strangers', f: 'neutral', t: "...Sol-ah." },
          { s: 'solar', f: 'neutral', t: "You didn't drink it." },
          { n: "He looked at the bottle as if he'd forgotten it. Then he gave it to her. She took the paper cap off with her thumbnail and held it out back to him and he shook his head, so she drank it, standing up, hand on hip, the whole thing in one go, the way the old men did, and put the empty bottle down on the bench beside him; and he looked at the bottle, and at her, and something in his face moved for the first time since the bridge, a centimeter, and was put back." },
          { s: 'taesang-strangers', f: 'neutral', t: "She sat there. Every time. With my shirt. Tuesdays and Fridays." },
          { s: 'taesang-strangers', f: 'neutral', t: "I've been coming. In case." },
          { n: "He didn't say in case of what. He didn't need to. He folded his hands on the jacket on his knee, and they sat, and the tree dripped, and somewhere down the Strip somebody was frying something in a lot of oil, and the sky over the bathhouse chimney was the color of a bruise going yellow." },
          { s: 'taesang-strangers', f: 'neutral', t: "She bought cabbages. Before. Two. She found a woman with a shop. They're in the landlady's cold room. I can't make it. I never learned. I stood in front of them for an hour on Sunday." },
          { n: "Then, without looking at her, very low, to the empty end of the bench:" },
          { s: 'taesang-strangers', f: 'neutral', t: "When she's back. When this is done. When we go home. You come with us." },
          { s: 'taesang-strangers', f: 'neutral', t: "...Will you." },
          { n: "He'd never once asked her anything. Not in eighteen years. She heard it go into the evening, a question, from him, and it was the wrongest thing she'd heard since the bridge, and the most human, and she didn't know which frightened her more." },
          { choose: [
            { t: "I'll come home, Appa. When she's back, we'll all go.", notes: 3, tally: { cakes: 1, [ASK]: 'yes' }, then: [
              { n: "He let out a breath. It went on a long time. He nodded, once, the way a figure comes right." },
              { s: 'taesang-strangers', f: 'neutral', t: "Good." },
              { n: "It sounded full. Satisfied, like a man after supper. Under her ribs something small and warm came loose and went, out into the wet evening, toward the river; and down the Strip, for a second, the frying smelled sweet, like rice steaming, like a kitchen round a corner. She didn't know why her eyes stung." }
            ] },
            { t: "Don't, Appa. You never ask me things. Don't start now.", notes: 2, tally: { [ASK]: 'no' }, then: [
              { n: "He didn't look at her. His face closed, the drawer pushed in, quietly." },
              { s: 'taesang-strangers', f: 'neutral', t: "...No. I don't know what I'm doing here. I'm doing things." },
              { n: "He sat on with his hands on the jacket. She sat beside him. After a while she put her hand on his arm, and he let it stay, and neither of them said anything for a long time, which was, in their house, a kind of apology both ways." }
            ] },
            { t: "When I go home, it'll be because I decided. You taught me that. You and Eomma.", notes: 2, tally: { choose: 1, [ASK]: 'choose' }, then: [
              { n: "It cost something. The yes was right there in her mouth, warm and easy, and she closed her teeth on it." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Did we." },
              { s: 'solar', f: 'neutral', t: "You never asked me where I'd been. You let me decide what to tell you." },
              { n: "He looked at the empty end of the bench a long time." },
              { s: 'taesang-strangers', f: 'neutral', t: "She'd say you're right. She'd say it in that voice." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Mm." },
              { n: "But he didn't take the question back. It sat on the bench between them where the dry patch was, keeping her place." }
            ] }
          ] },
          { n: "He walked her to the corner. At the corner he stopped and looked down the river street toward the bend, where the boarding house lamp was on, yellow, and the kitchen window under it was lit too, and somebody was moving in the kitchen, back and forth, at the sink." },
          { n: "He looked at it for a long time. Solar looked at his face so she wouldn't have to look at the window." },
          { s: 'taesang-strangers', f: 'neutral', t: "...The landlady keeps it warm. Supper. Every night. As if." },
          { n: "He didn't finish. He went down the street toward it with his jacket over his arm. She stood on the corner and watched him go until the gate shut behind him, and then a while longer, and the kitchen light stayed on." }
        ], [
          // ── C: Miseon back, after the field ──
          { n: "It was cold on the Strip, the real cold, the kind that came up off the paving through the soles of your shoes, and the steam off the bathhouse chimney went straight up into a hard white sky and stopped there, and the bench under the bare tree had frost in the grain of the wood." },
          { n: "Her mother was sitting on it anyway. Very straight. A man's clean shirt folded on her knees, pressed, square. She had a scarf on, wound high, all the way up to her jaw, and gloves on her lap she wasn't wearing, wool ones, Mitsuru's, which she'd been given and couldn't put on; her hands were bare and red with cold and folded on top of the shirt." },
          { n: "She sat with her back a hand's width off the back of the bench. Not touching it. She sat like that everywhere now." },
          { n: "Solar sat down beside her. Her mother's eyes went over her once, top to bottom and back, fast, shoes, hem, hands, face, and settled. That hadn't changed. That was the first thing that had come back, in the ward, before her voice." },
          { s: 'miyeon-strangers', f: 'neutral', t: "You've not been wearing a hat." },
          { s: 'solar', f: 'neutral', t: "Eomma. It's freezing. You should be inside." },
          { s: 'miyeon-strangers', f: 'neutral', t: "He goes in at six. Tuesdays and Fridays. I sit here. I've always sat here." },
          { n: "She'd sat there for nine days in August and September. *Always.* Solar didn't correct her. Her mother looked at the blue curtain over the men's door the way you'd look at a pot, and Solar sat beside her with her shoulder not quite touching her mother's shoulder, because her mother couldn't be touched from behind and Solar had learned, these last two weeks, to come at her from the front, in her eyeline, slowly, like you'd come up to a horse." },
          { n: "He came out at a quarter to seven. Pink to the ears, his glasses fogged, a towel round his neck, a bottle of coffee milk in his hand. He stood on the step and wiped his glasses and put them on and saw the two of them on the bench, together, and stood there a moment longer than he needed to." },
          { n: "Then he put his hand on his hip and drank it all at once, the way Mr. Goto had taught him. Her mother watched him do it with her face doing nothing at all, and Solar saw her eyes go wet and stay that way, and not spill." },
          { s: 'miyeon-strangers', f: 'neutral', t: "...He thinks nobody saw him the first time." },
          { n: "He held his shirt out for her to hold up for him. She held it up. He turned round and put his arms back into it, and she did the top button, reaching up, without standing, and took her hand back. They had done that in a hundred halls. They did it on the Strip in the cold as if they'd never once been interrupted." },
          { n: "They walked her up the hill, not along the river. They never went along the river now. At the dorm gate her mother stopped, and turned the ring on her right hand once, all the way round, and her father stood with his hands at his sides, and Solar watched the same thing happen to his face that she'd heard happen in her mother's voice: something being asked, from inside them, that neither of them had chosen." },
          { s: 'taesang-strangers', f: 'neutral', t: "...Sol-ah. When this is over. When we go home. You come with us." },
          { s: 'taesang-strangers', f: 'neutral', t: "Will you." },
          { s: 'miyeon-strangers', f: 'neutral', t: "Come home. Please." },
          { n: "*Please.* From her mother. Solar had never heard her mother say it in her life. Not to her. Not to anybody. It sat in the cold air between them like a thing dropped and broken." },
          { choose: [
            { t: "I'll come home. I promise. All of us, together.", notes: 3, tally: { cakes: 1, [ASK]: 'yes' }, then: [
              { n: "Her mother's shoulders came down. Her father nodded, once." },
              { s: 'taesang-strangers', f: 'neutral', t: "Good." },
              { n: "It sounded full, like a man after supper. Under Solar's ribs something small and warm came loose and went, and the cold air at the gate smelled, for one breath, of rice steaming; and her mother, who flinched at gloves and couldn't be touched on the back, reached out and put her bare red hand on Solar's hair, and left it there." }
            ] },
            { t: "Don't. Neither of you asks me things. That's how I know it's you.", notes: 2, tally: { [ASK]: 'no' }, then: [
              { n: "Her mother looked at her for a long time. Then she looked down at her own hands, as if they'd done something without her." },
              { s: 'miyeon-strangers', f: 'sad', t: "...No. I don't. I don't know why I said it." },
              { s: 'taesang-strangers', f: 'neutral', t: "Mm." },
              { n: "He took his wife's arm, from the front, the way they'd all learned to, and they went back down the hill together, slowly, and didn't look back, and Solar stood at the gate with the frost coming up through her shoes." }
            ] },
            { t: "When I go home, it'll be because I chose to. You taught me that. Both of you.", notes: 2, tally: { choose: 1, [ASK]: 'choose' }, then: [
              { n: "It cost something. She felt the yes sit in her mouth, warm, and closed her teeth on it." },
              { n: "Her mother looked at her for a long moment with her eyes still wet. Then, very slightly, so that only Solar would have seen it, she nodded." },
              { s: 'miyeon-strangers', f: 'neutral', t: "...Then choose. Not for us." },
              { s: 'taesang-strangers', f: 'neutral', t: "Mm." },
              { n: "But he didn't take it back, his question. He took it down the hill with him, with his wife on his arm." }
            ] }
          ] }
        ])
      ] },

      // ───────────────────────── Rank 2 ─────────────────────────
      { after: '9/14', title: '2: the scrub', place: 'Iwatodai Strip · Bathhouse', time: 'Evening', music: 'tender', scene: [
        { bg: 'iwatodai-bathhouse' },
        three([
          // ── A: Miseon leads ──
          { n: "Haechan brought the message, which was how messages from her mother had always come to her, in one life: through somebody else's mouth, so that nobody had to be seen to have asked." },
          { n: "He found her at her shoe locker on Tuesday after school, leaned on the next one with his arms folded, and said it in Korean, flat, word for word, the way you deliver a thing you've been told to deliver exactly." },
          { s: 'haechan', f: 'neutral', t: "*Tuesday. Six. The bathhouse. Bring nothing. I have everything.*" },
          { s: 'haechan', f: 'neutral', t: "That's from your mother. She said it to me in the garden with a cabbage in each hand and then she looked at me until I said it back to her. Twice." },
          { s: 'haechan', f: 'happy', t: "She's taking you to the baths, agasshi. You're getting scrubbed. Godspeed. I'll say a few words." },
          { place: 'Iwatodai Strip · Bathhouse', time: 'Evening', bg: 'iwatodai-bathhouse', soft: true },
          { n: "It was the first evening that felt like September. A wind had come up off the bay in the afternoon and was going down the Strip in gusts, picking up the paper lanterns outside the izakaya and dropping them, turning the blue curtains over the bathhouse doors inside out and back. Typhoon somewhere, the radio said. Not here. Somewhere south, going past." },
          { n: "Her mother was on the bench with a plastic basket on her knees." },
          { n: "In the basket, in order: two small towels, folded. A bar of soap in a dish. A comb. Two bottles of shampoo from the konbini, which she'd clearly read every word on the back of. And on top, two scrub mitts, green, the rough nylon ones, the ones every Korean mother on earth owned, the ones Solar had last seen hanging off a tap at the mogyoktang at the bottom of the hill road when she was thirteen, and had hated with her whole body." },
          { n: "She looked at the mitts. Her mother looked at her looking at them." },
          { s: 'miyeon-strangers', f: 'neutral', t: "The woman with the shop had them. Behind the counter. In a box. She said nobody here buys them. The Japanese don't scrub. They just sit in the water." },
          { s: 'miyeon-strangers', f: 'serious', t: "They just sit in it, Solar." },
          { n: "She said it as if describing a moral failing in a whole nation. Solar sat down on the bench and put her face in her hands and laughed into them, and her mother waited for her to stop with tremendous patience, and then handed her a mitt." },
          { s: 'miyeon-strangers', f: 'neutral', t: "Your father went in at six. He knows we're here. He'll take his time. He's been warned." },
          { place: 'Iwatodai Strip · Bathhouse · Women\'s Side', time: 'Evening', bg: 'bathhouse-night', music: 'tender' },
          // BG: eqx-sento-women — the women's side of an old neighborhood bathhouse in Japan, tiled walls with a faded mural of a mountain and the sea, low stools and taps along one wall, a big steaming pool, a few old women in the water, steam softening everything.
          { n: "The women's side was nearly empty. Three old women in the big pool with their towels folded on their heads, a girl of about four being washed by her grandmother on a stool at the far tap, and on the back wall, enormous, faded, a painted mountain with snow on top and a blue sea at its feet, peeling at one corner where the steam had got under it for fifty years." },
          { n: "Her mother undressed the way she did everything. Without hurry and without any embarrassment at all, folding each thing as it came off into the locker basket in a neat stack, cardigan, blouse, skirt, all of it square, as if she'd be inspected. Solar, who had stood in front of two thousand people in three lives and not blinked, stood with her back to the lockers and took her shirt off as if somebody were going to photograph it." },
          { s: 'miyeon-strangers', f: 'neutral', t: "You're thirteen again. You did that at thirteen. Turned round. As if I hadn't bathed you every day for five years." },
          { s: 'solar', f: 'flustered', t: "I'm not thirteen." },
          { s: 'miyeon-strangers', f: 'neutral', t: "No. You're not." },
          { n: "Then her mother put her hair up. She'd had it up already, in its knot, low at the nape, the way she wore it every day; she took the long pin out of it, and Solar had a second, one second, of seeing it come down her mother's back, long and black, a thing she couldn't remember ever having seen; and then her mother caught it in one hand and twisted it and lifted it and pinned it higher, on top of her head, out of the water's way, every pin going in at the same angle, seven, and the long one through the middle, and it was up again, and it had only been down for the length of a breath." },
          { n: "Solar realized she'd been holding hers." },
          { place: 'Iwatodai Strip · Bathhouse · Women\'s Side', time: 'Evening', bg: 'bathhouse-night', soft: true },
          { n: "They washed first, on the low stools, at the taps, side by side, the way you were supposed to. Then her mother turned her stool round to face Solar's back, and put the green mitt on her right hand, over the ring, and said one word, the word every Korean daughter has heard on a stool in a bathhouse with her knees up and her arms round them." },
          { s: 'miyeon-strangers', f: 'neutral', t: "Turn." },
          { n: "Solar turned." },
          { n: "And her mother scrubbed her back." },
          { n: "Hard. Harder than Solar remembered, which was hard. Long strokes, shoulder to hip, the rough mitt going over her skin like a cat's tongue the size of a hand, and the heat of the tap water, and her mother's other hand flat between her shoulder blades to hold her still, the ring cold, the only cold thing in the room. It hurt. It hurt the way it had always hurt, at thirteen, the good hurt, the kind that ended in being clean. Solar put her forehead down on her own knees and shut her eyes." },
          { s: 'miyeon-strangers', f: 'serious', t: "...Look at that." },
          { s: 'miyeon-strangers', f: 'serious', t: "Where have you been. Look at that. Nobody's done this. In a year. In two. Has nobody done this for you?" },
          { n: "Nobody had. Not in one life or the other two. Solji had spas and a woman named Margit who did her face; Mrs. Kim had a shower with a broken head and opinions about long baths. Solar hadn't been scrubbed since the hill road. She hadn't known she'd missed it. She sat on the stool with her eyes shut and her back going red under her mother's hand and felt something she didn't have a name for come up through her chest from very low down, warm and humiliating, like crying, and not crying." },
          { n: "At the far tap the grandmother had stopped washing the little girl. Both of them were watching. The grandmother said something in Japanese to the little girl, low, and the little girl said *eh?*, and the grandmother said it again, and Solar caught it: *that's how they do it, over there. That's love, over there.*" },
          { n: "Her mother talked while she scrubbed. That was the other thing. Her mother never talked; in the kitchen at home, at the table, in the sunroom with the orchids, she said one thing and let it stand. But her hands were busy and her daughter's face was turned away, and that, it turned out, was the whole of what she'd needed, for eighteen years, to say more than one thing at a time." },
          { s: 'miyeon-strangers', f: 'neutral', t: "The American one laughs. All the time. With her whole face. She laughed at the songpyeon she hasn't made yet, on Sunday, when we talked about it. She laughed at herself for not knowing how." },
          { s: 'miyeon-strangers', f: 'neutral', t: "I can't do that. I never could. My mother couldn't." },
          { s: 'miyeon-strangers', f: 'neutral', t: "The Kim one looks at you as if you were a sum she's already checked. Twice. She looks at you the way I look at the house accounts. I liked her immediately." },
          { s: 'miyeon-strangers', f: 'neutral', t: "And you let them. Both of them. You let them see you. Different. You let the American one see you tired and the Kim one see you greedy, and you let me see you—" },
          { n: "She stopped. The mitt stopped, between Solar's shoulder blades, and stayed there." },
          { s: 'miyeon-strangers', f: 'neutral', t: "...Turn round. Other way. Your arms." },
          { ifChoice: { [ASK]: 'yes' }, then: [
            { n: "She did Solar's arms. Shoulder to wrist, one and then the other, and she was quicker now, lighter, almost cheerful, if her mother could be said to be cheerful, which was a word Solar would only ever have used about her mother's handwriting." },
            { s: 'miyeon-strangers', f: 'neutral', t: "Your father sleeps. Since the river. Four hours. Five. He sleeps like a man who's put something down." },
            { s: 'miyeon-strangers', f: 'neutral', t: "When we're home I'll take you to the one on the hill road. On a Sunday. Mrs. Bang will come. She'll cry. She cries in the hot pool, it's very embarrassing." },
            { n: "She said *when we're home* as if it were a date already written on a calendar, in ink, and Solar, with her arm in her mother's hands, felt the place under her ribs where she'd given it to them, on the river path, and it was warm, and it was empty." }
          ], else: [ { ifChoice: { [ASK]: 'no' }, then: [
            { n: "She did Solar's arms. Shoulder to wrist, one and then the other, harder than she needed to, without a word, and Solar let her, and understood it was the only way her mother was ever going to say anything about the river." },
            { s: 'miyeon-strangers', f: 'neutral', t: "Your father hasn't slept." },
            { n: "She said it to Solar's elbow. It wasn't a reproach. It never had been. It was set down in front of her the way you set down a cup, to be picked up or not." }
          ], else: [
            { n: "She did Solar's arms. Shoulder to wrist, one and then the other, slowly, as if she were thinking about something else and her hands were doing the thinking." },
            { s: 'miyeon-strangers', f: 'neutral', t: "He sat on the stairs with it. What you said. *Because I decided.* He sat on the boarding house stairs with it for two nights. On the seventh one. It creaks, that one. Like ours." },
            { s: 'miyeon-strangers', f: 'neutral', t: "I sat at the top. Neither of us said anything." },
            { s: 'miyeon-strangers', f: 'neutral', t: "...You're right. I told him you were right. It made him very unhappy. Then he went to sleep." }
          ] } ] },
          { n: "When she'd finished she held the mitt out. Green, wet, in her palm, across the space between the two stools." },
          { n: "Solar looked at it. Then she took it, and put it on, and her mother turned her own stool round without a word and gave her daughter her back." },
          { n: "Solar had never done this. Not once, in either direction. At thirteen she'd sat on the stool and been scrubbed and been sullen about it and gone and sat in the hot pool alone, and her mother had scrubbed herself, reaching round, the way women did who'd come alone. She didn't know how hard. She started too softly." },
          { s: 'miyeon-strangers', f: 'serious', t: "Harder. You scrub like your father." },
          { s: 'solar', f: 'surprised', t: "When has Appa ever—" },
          { s: 'miyeon-strangers', f: 'neutral', t: "Once. In nineteen eighty-nine. Never again. Harder." },
          { n: "She scrubbed harder. Shoulder to hip, the long strokes, the way her mother had done it, and her mother's back went red and her mother sighed, once, low, the sound of somebody being looked after for the first time in a long time and not wanting to be caught at it." },
          { n: "It was a small back. Smaller than Solar had thought. Smooth, pale, a little brown mole under the left shoulder blade that Solar remembered, suddenly, from being very small, from being carried, her cheek on her mother's shoulder and her eyes on that mole through a thin summer blouse. The knobs of the spine in a long straight line down the middle, from the nape, where the hair was pinned up, to the small of the back." },
          { n: "Her hand stopped." },
          { n: "She didn't know why. It just stopped, the mitt resting on the line of her mother's spine, halfway down, and something went through her, cold, in all that steam, from the back of her own neck down, the way you go cold on a stair in the dark when a step isn't where it should be. She was looking at the spine. The straight line of it. Top to bottom. Like a seam. Like the line down the back of a dress, where you'd check that the stitching held." },
          { n: "Without deciding to, she ran the mitt down it. Once. Slowly. Nape to waist, along the bone, the way you'd run your thumb down a hem to find the place where it's coming loose." },
          { n: "It held. It was a back. It was her mother's back, whole, red from the scrubbing, with a mole under the shoulder blade." },
          { s: 'miyeon-strangers', f: 'neutral', t: "...What is it." },
          { s: 'solar', f: 'neutral', t: "Nothing. Nothing, Eomma. I lost my place." },
          { s: 'miyeon-strangers', f: 'neutral', t: "Then find it." },
          { n: "She found it. She scrubbed her mother's back until her own arm ached, and the cold went out of her bit by bit in the heat, and she didn't think about why it had come, because there was nothing to think about. It was a back. It was whole." },
          // CG: eqx-the-scrub — two women on low wooden stools at a bathhouse tap seen from behind at shoulder height through steam, the younger one scrubbing the older one's back with a green mitt, the older one's black hair pinned up high, a faded painted mountain on the tiled wall beyond.
          { place: 'Iwatodai Strip · Bathhouse · Women\'s Side', time: 'Evening', bg: 'bathhouse-night', soft: true },
          { n: "They sat in the hot pool afterward, up to their chins, side by side, not talking, with their towels folded on their heads like the three old women, who had moved down the pool to make room and were now openly listening, in the way of old women who don't speak a word of what they're listening to and are enjoying it enormously." },
          { n: "Her mother had her hands folded under the water. Her face was pink, finally, all of it, even the place at the jaw that never went any color. The pins were all still in." },
          { n: "When they got out, at the lockers, wrapped in towels, her mother sat on the bench in front of the little mirror and began to take the pins out, to do it again, properly, low at the nape, for the street. The dish of them on the bench beside her. Seven, and the long one." },
          { choose: [
            { t: "(Take the comb out of her hand. Do it for her. Seven.)", notes: 3, flag: 'eqx-ps-pinned', then: [
              { n: "She took the comb. Her mother let her. That was the astonishing thing; she let go of it, and sat with her hands in her lap in front of the mirror, and Solar stood behind her and combed out her mother's wet hair, all of it, the whole long black weight, the way her mother had combed out hers, from the crown, working the knots with her fingers, and twisted it, and lifted it, and pinned it low at the nape, one pin, two, every one at the same angle, the way she'd been shown at a dressing table in a house on a hill." },
              { n: "Seven. And the long one through the middle." },
              { n: "Her mother turned her head in the little mirror, this way and that, and looked at it for a long time." },
              { s: 'miyeon-strangers', f: 'neutral', t: "...You know two ways." },
              { s: 'solar', f: 'neutral', t: "You showed me." },
              { s: 'miyeon-strangers', f: 'neutral', t: "I know I showed you. I didn't think you were listening." }
            ] },
            { t: "Leave it down, Eomma. Just to walk home. Nobody here knows you.", notes: 2, flag: 'eqx-ps-hair-asked', then: [
              { n: "Her mother looked at her in the little mirror for a long moment. Her hands, with the first pin in them, had stopped." },
              { s: 'miyeon-strangers', f: 'neutral', t: "...Somebody always knows you." },
              { n: "And she put it up. Seven, and the long one, fast, faster than Solar had ever seen her do it, as if she'd been asked to take off something she'd forgotten she was wearing, and had to put it back on before anyone saw. When it was done she sat with her hands on her knees and looked at it in the glass, and didn't look at Solar at all." },
              { s: 'miyeon-strangers', f: 'neutral', t: "Not in public. Not yet." },
              { n: "*Not yet.* Solar heard it. She didn't know what it meant. She didn't think her mother did either." }
            ] },
            { t: "(Hand her the pins one at a time, the way you used to.)", notes: 2, then: [
              { n: "She sat on the bench beside her and held the dish and handed them up one at a time, the way she'd done at four, at five, standing on a stool in the bathroom at home holding the dish with both hands while her mother did her hair for a dinner, and her mother took each one without looking, and slid it home." },
              { n: "Seven. Then the long one. Her mother held her hand out for it and Solar put it in her palm, and her mother's fingers closed round it and round Solar's fingers too, for a second, and let go." }
            ] }
          ] },
          { place: 'Iwatodai Strip · Bench', time: 'Evening', bg: 'iwatodai-strip-night', music: 'night' },
          { n: "Her father was on the bench outside with three bottles of coffee milk, unopened, lined up beside him, and the wind going down the Strip and lifting his wet hair, and he'd been there forty minutes, the old man at the counter told them, sitting up straight, watching the women's curtain like a man waiting outside a delivery room." },
          { s: 'taesang-strangers', f: 'neutral', t: "...You took your time." },
          { s: 'miyeon-strangers', f: 'neutral', t: "You were warned." },
          { n: "He handed them each a bottle. Her mother looked at hers. Then she stood up off the bench, and put her left hand on her hip, and drank it in one go, the whole bottle, her throat working, her chin up, in the middle of the Strip, in front of the izakaya and the takoyaki man and God; and put the empty bottle down on the bench, and sat, and folded her hands." },
          { n: "Her father stared at her. Solar stared at her." },
          { s: 'miyeon-strangers', f: 'neutral', t: "It doesn't count otherwise. Mr. Goto said." },
          { n: "Ishida was at the vending machine. He walked them home ten paces behind, on the river side, and at the boarding house gate her mother turned round, the way she'd turned on the river path, and held out the third bottle of coffee milk to him, the one Solar hadn't drunk, and he took it and bowed and her mother said something to him in careful Japanese, three words, that made him look at the ground." },
          { n: "The moon over the river was getting fat. Nine days off full. Mrs. Oka was on the porch with the lamp behind her, in her gray kimono, her gloved hands folded, waiting, the way she always seemed to be waiting when anyone came up the path, as if she'd heard them from the bend." },
          { s: 'mrsoka', f: 'happy', t: "There you are. Look at you both. Clean as babies." },
          { s: 'mrsoka', f: 'neutral', t: "You should have said, dear. I'd have done your back." },
          { n: "She said it to her mother. Kindly. Her mother bowed and said *thank you* and went in past her, and Mrs. Oka's gloved hand rose, as she passed, and rested for a moment between her shoulder blades, light, on the cardigan, on the spine; and Solar, at the gate, felt her own back go cold again, all the way down, in the warm September wind, and stood there until her father touched her elbow and said *Sol-ah, go home, the hour*; and went." }
        ], [
          // ── B: Miseon taken ──
          { n: "Her father was on the bench outside the bathhouse with a plastic basket on his knees." },
          { n: "He didn't explain it. He held it out to her when she sat down, and she took it, and looked in it. Two small towels, folded. A bar of soap. A comb. And two green scrub mitts, the rough nylon ones, still in their cellophane, one of them with a slip of paper tucked into the band in her mother's handwriting, one character, the one for her name." },
          { s: 'taesang-strangers', f: 'neutral', t: "She bought them before. From the woman with the shop. She said, Tuesday. She was going to bring you." },
          { s: 'taesang-strangers', f: 'neutral', t: "I can't take you in there. It's the other side." },
          { n: "He looked at the blue curtain with *woman* on it as if it were a door in a house he'd never been allowed into, which, Solar supposed, in one life, it always had been." },
          { place: 'Iwatodai Strip · Bathhouse · Women\'s Side', time: 'Evening', bg: 'bathhouse-night', music: 'tender' },
          // BG: eqx-sento-women — the women's side of an old neighborhood bathhouse in Japan, tiled walls with a faded mural of a mountain and the sea, low stools and taps along one wall, a big steaming pool, a few old women in the water, steam softening everything.
          { n: "She went in alone. She washed on a low stool at a tap under a painted mountain, alone, with three old women in the pool watching her with mild interest, and then she put the mitt on and tried to do her own back." },
          { n: "You couldn't. That was the thing about it. You could do your arms and your legs and your front and your neck, and you could reach round and do the top of your shoulders and the small of your back, but there was a place in the middle, between the shoulder blades, a long strip down the spine, that nobody could reach on themselves. That was the whole point. That was why you went with somebody. She sat on the stool with her arm bent behind her and the mitt not reaching and felt something come up her throat that she sat on, hard, with her teeth." },
          { n: "One of the old women got out of the pool. Small, brown, a towel on her head. She came and stood beside Solar's stool, dripping, and held out her hand, palm up, for the mitt, and said something in Japanese, kind and impatient, the way you'd speak to a child struggling with a shoelace." },
          { choose: [
            { t: "(Give her the mitt. Turn round.)", notes: 3, flag: 'eqx-ps-scrubbed', then: [
              { n: "She gave her the mitt. She turned round. And a stranger, an old woman whose name she never learned, scrubbed her back in a bathhouse in a town in Japan, not hard enough, not the way her mother did it, gently and thoroughly and without a word, and Solar put her forehead on her knees and let the tears go into the steam where nobody could tell them from anything else." },
              { n: "When it was done the old woman patted her twice between the shoulder blades, the way you'd pat a horse, and went back to the pool." }
            ] },
            { t: "(Thank her. Shake your head. Keep the place for Eomma.)", notes: 2, then: [
              { n: "She shook her head, and thanked her, and the old woman looked at her a moment, and at the second mitt in its cellophane on the edge of the basket, and seemed to understand something, and nodded, and went back to the pool." },
              { n: "Solar left the strip down the middle of her back unscrubbed. It was a stupid thing to do. She did it anyway. She'd keep it for her." }
            ] }
          ] },
          { place: 'Iwatodai Strip · Bench', time: 'Evening', bg: 'iwatodai-strip-night', music: 'night' },
          { n: "Her father was still on the bench, with two bottles of coffee milk. He gave her one. They drank them sitting down, which didn't count, and neither of them cared." },
          { ifChoice: { [ASK]: 'yes' }, then: [
            { s: 'taesang-strangers', f: 'neutral', t: "You said you'd come home. When we go. She heard you." },
            { s: 'taesang-strangers', f: 'neutral', t: "...Hold to it. It's the one thing I've got that's finished." }
          ], else: [
            { n: "He didn't say anything about the river. He didn't say anything at all for a long time." }
          ] },
          { n: "When she gave him back the basket he gave her back the second mitt, the one with her mother's character on the band, still in its cellophane." },
          { s: 'taesang-strangers', f: 'neutral', t: "Keep it. For when she's back. She'll want to do it herself. She'll say you've let yourself go." },
          { n: "She put it in her blazer pocket. It stayed there, every day, through October." }
        ], [
          // ── C: Miseon back, the seam ──
          { n: "Her mother wanted to go to the baths." },
          { n: "Her father told Solar that, at the dorm, on the stairs, in the voice of a man reporting something he'd tried to stop and couldn't. Tuesdays and Fridays. She'd always gone. She was going." },
          { n: "So they went, the three of them, along the hill and not the river, in the cold, and at the blue curtains her father stood back and let them go in, and stood there a moment longer than he needed to with his hands at his sides, watching the curtain fall shut behind his wife." },
          { place: 'Iwatodai Strip · Bathhouse · Women\'s Side', time: 'Evening', bg: 'bathhouse-night', music: 'tender' },
          // BG: eqx-sento-women — the women's side of an old neighborhood bathhouse in Japan, tiled walls with a faded mural of a mountain and the sea, low stools and taps along one wall, a big steaming pool, a few old women in the water, steam softening everything.
          { n: "She undressed with her back to the lockers. Flat against them, almost. For the first time in Solar's life, her mother took her clothes off as if somebody were going to see, slowly, folding each thing into the basket, and then stood with the small towel held behind her, in both hands, against her own spine, and walked to the stools backward along the wall." },
          { n: "The old women in the pool looked away. All of them, at once, the way people do who've lived long enough to know when to." },
          { n: "She sat. She washed. Then she turned her stool to face Solar's back and put the green mitt on her hand, over the ring, and said *turn*, and Solar turned, and her mother scrubbed her back, hard, harder than ever, as if she could put everything she had into the one thing she still knew exactly how to do." },
          { n: "When she'd finished she held the mitt out. Then she didn't let go of it." },
          { s: 'miyeon-strangers', f: 'neutral', t: "...Not tonight." },
          { n: "Solar waited. Her mother sat on the stool with the mitt in her hand and her back to the wall, and the steam went up between them, and the painted mountain stood over them both with its snow peeling at the corner." },
          { s: 'miyeon-strangers', f: 'neutral', t: "...Do it. Gently." },
          { n: "She turned round." },
          { n: "The seam ran from the nape to the small of her back. Straight down the spine, where Solar had run the mitt in September, along the bone, checking for the place where it was coming loose. It had come loose. It had been opened, and closed again with split stalk, and the stalk was out now, the ward had taken it out, and what was left was a long raised line, red, lumpy, puckered where the stitches had been, healed wrong and still healing, like the seam down the back of a dress sewn by somebody in a hurry, in the dark." },
          { n: "The mole was still there, under the left shoulder blade. A centimeter from the line." },
          { choose: [
            { t: "(Wash round it. Not over it. Slowly.)", notes: 3, flag: 'eqx-ps-seam', then: [
              { n: "She took the mitt off. She used her hand, and the soap, and warm water from the tap in the little plastic bowl, and she washed her mother's back the way you'd wash something you'd been lent and would have to give back. Round the line. Never over it. Shoulder to hip on the left, and then the right. Her mother sat completely still with her hands on her knees, and her breath went in and out, short at first, then longer." },
              { n: "At the end, without deciding to, Solar put her palm flat on the mole, under the shoulder blade, where her cheek had lain when she was carried. Her mother's breath stopped. Then it went out of her in one long sound, low, the sound of somebody set down after being carried a very long way." }
            ] },
            { t: "(Put the mitt down. Just put your hand on her shoulder, from the front.)", notes: 2, then: [
              { n: "She put the mitt down on the tiles. She came round the stool, slowly, into her mother's eyeline, the way they'd all learned, and crouched, and put her hand on her mother's shoulder from the front, and left it there." },
              { n: "Her mother looked at her. Then down at the hand. Then she put her own hand over it, the ring cold, and they stayed like that, on a stool and the wet tiles, in the steam, until the old women got out of the pool." }
            ] }
          ] },
          { n: "In the hot pool afterward her mother sat with her back a hand's width off the tiles, not touching, up to her chin, her hair pinned high, seven and the long one. Her face went pink. All of it." },
          { s: 'miyeon-strangers', f: 'neutral', t: "...Don't tell your father." },
          { s: 'solar', f: 'neutral', t: "Tell him what?" },
          { s: 'miyeon-strangers', f: 'neutral', t: "That I asked you. He'd sit on the stairs with it." }
        ])
      ] },

      // ───────────────────────── Rank 3 ─────────────────────────
      { after: '10/12', title: '3: two eyes', place: 'Iwatodai Strip · Bathhouse', time: 'Evening', music: 'night', scene: [
        { bg: 'iwatodai-strip-rain' },
        { n: "It had rained since lunch. Not hard, not a storm, the long gray patient rain of October that didn't fall so much as hang in the air and wait for you to walk into it, and the Strip under it was all reflections, the pachinko lights lying in the puddles in long red smears and the takoyaki stand shut with a tarp over it and a cat under the tarp." },
        { n: "The bench outside the bathhouse was empty and soaked. Nobody had sat on it all day. Somebody had put a folded newspaper down on the left end of it, the end by the tree, and the rain had turned the newspaper to gray pulp, and nobody had taken it away." },
        three([
          { n: "She knew who'd put it there. He'd put it there every Tuesday and Friday since the bridge, Haechan said. Before he went in. On her end. So it would be dry." }
        ], [
          { n: "She knew who'd put it there. He'd put it there every Tuesday and Friday since the bridge, Haechan said. Before he went in. On her end. So it would be dry." }
        ], [
          { n: "She knew who'd put it there. He'd put it there every Tuesday and Friday since the bridge, Haechan said, and kept putting it there after the ward, after the dorm, after his wife came home and couldn't sit with her back to anything; on her end, so it would be dry, in case she came." }
        ]),
        { place: 'Iwatodai Strip · Bathhouse · Front Room', time: 'Evening', bg: 'bathhouse-night', music: 'night' },
        // BG: eqx-sento-front — the front room of an old Japanese bathhouse at night, a raised wooden counter by the door, a massage chair, a small television, a low table with a go board on it, two men on cushions playing, rain on the window.
        { n: "The front room of the bathhouse was where the men sat after, the ones who didn't want to go home yet. A raised wooden counter by the door where the owner took your coins. A massage chair that had been broken since the Showa era, by the look of it, with a sign on it in marker saying so. A television in a corner on a high shelf with the sound off and a baseball game going on in silence. A fridge with a glass door full of coffee milk. And a low table by the window with a go board on it, the old thick kind on legs, and two men on cushions either side of it." },
        { n: "One of them was Mr. Goto. Eighty-one, Solar knew now, because her father had told her, which was itself a thing. Bald, brown, small, in a padded jacket over his yukata, with enormous ears and enormous hands and a way of putting a stone down on the board that was like a man knocking on a door he expected to be opened." },
        { n: "The other was her father. In his shirtsleeves, his hair still wet, his reading glasses on their cord, his elbows on his knees, looking at the board the way he looked at everything, as if it might at any moment try something." },
        { n: "Neither of them looked up when she came in. Mr. Goto held up one hand, palm out, without taking his eyes off the stones: *wait*. She waited. She stood by the counter with her wet umbrella dripping on the boards and watched her father lose." },
        { n: "He lost slowly. Beautifully, almost. He let the old man take one corner, and then the other, and then cut off a group of his in the middle that Solar could see, even from the door, even knowing almost nothing, he could have saved two moves ago. When it was done Mr. Goto counted it out, fast, sweeping the stones into the bowls with the side of his hand, and laughed, a short dry bark, and said something in Japanese, slapping his knee." },
        { s: 'goto', f: 'neutral', t: "Again! Again you lose. You play like a man with a boat to catch, Lee-san. Every week. Where is this boat." },
        { n: "Her father bowed his head over the board, the way you bow to a man who's beaten you fairly, and said, in very careful Japanese, the words Haechan had taught him in the konbini in August, Solar would have bet her life on it:" },
        { s: 'taesang-strangers', f: 'neutral', t: "...Next time, sensei." },
        { s: 'goto', f: 'neutral', t: "Next time, next time. Ha. This one. Your daughter? Sit, sit. Sit, girl. Your father's a terrible player. You can't be worse." },
        three([
          // ── Before the bridge can't happen here (window opens 9/24); A reads as B. ──
          { n: "He got up, the old man, with a hand on the table and a hand on his own knee and a long sigh of joints, and went off through the curtain behind the counter to see to the boiler, saying over his shoulder that the fire wouldn't stoke itself, that nothing in this world stoked itself, and that he'd be back, and not to cheat." }
        ], [
          { n: "He got up, the old man, with a hand on the table and a hand on his knee and a long sigh of joints, and then stopped, halfway up, and leaned down to her father, and said something low, pleased, the way you'd tell a friend a bit of good news." },
          { s: 'goto', f: 'neutral', t: "I'm going to supper on Thursday. At the house by the river. The landlady asked me. She said a man my age shouldn't eat alone, every night, with the radio. She's right. Isn't she right. My wife would say she's right." },
          { s: 'goto', f: 'neutral', t: "She said I could stay as long as I like. Isn't that kind." },
          { ifEvent: 'eqx-1023', then: [
            { n: "Her father looked up at him. For a long moment. And Solar watched him do a thing she'd never seen him do in any room in either life: he put his hand out, across the board, and took hold of the old man's sleeve." },
            { s: 'taesang-strangers', f: 'neutral', t: "...No." },
            { s: 'goto', f: 'neutral', t: "Eh?" },
            { s: 'taesang-strangers', f: 'neutral', t: "Don't go. Thursday. Come here. We play. I lose." },
            { n: "It was the most Japanese he'd ever put together in a row. The old man looked down at the hand on his sleeve, puzzled, then laughed, the dry bark, and patted it." },
            { s: 'goto', f: 'neutral', t: "Ha. All right, all right. You want to lose on a Thursday too. Greedy. Thursday, then. I'll tell her another time." },
            { n: "*Another time.* He went off through the curtain to the boiler. Her father sat with his hand still out where the sleeve had been, and then took it back, and put it on his knee, and looked at it." }
          ], else: [
            { n: "Her father looked up at him. He didn't say anything. He nodded, once, the polite nod, and the old man beamed and went off through the curtain behind the counter to see to the boiler, saying over his shoulder that the fire wouldn't stoke itself; and her father sat looking at the curtain after he'd gone, with his face doing nothing, for a long time." },
            { s: 'taesang-strangers', f: 'neutral', t: "...She asks everybody. That woman. To stay." },
            { s: 'taesang-strangers', f: 'neutral', t: "She asked me. Every night. *Stay, Lee-san, stay a while, you shouldn't sit on those stairs alone.* I said yes. Every night. Where else would I go." }
          ] }
        ], [
          { n: "He got up, the old man, with a hand on the table and a hand on his own knee and a long sigh of joints, and went off through the curtain behind the counter to see to the boiler, saying over his shoulder that the fire wouldn't stoke itself; and her father watched the curtain fall behind him the way he watched every door now, until it was still." }
        ]),
        { n: "Solar sat down on the old man's cushion. It was warm. Her father swept the last stones into the bowls with the side of his hand, black and white, and pushed the black bowl across the board to her." },
        { s: 'taesang-strangers', f: 'neutral', t: "You take black. So you'll have the advantage." },
        { s: 'solar', f: 'neutral', t: "I've never once been able to use it." },
        { s: 'taesang-strangers', f: 'neutral', t: "I know. I keep giving it to you anyway." },
        { n: "The notebook was on the table by the board. The go club's notebook, a fat old exercise book with a cardboard cover gone soft at the corners, where the men wrote their games, the date and the two names and who won, column after column of it in different hands going back further than Solar could see. The last fifty lines or so were all the same two names. *Goto. Lee.* And who won, which was Goto, every time." },
        { n: "And beside every one of the recent ones, in the margin, in small square blue figures, in a ballpoint pen she'd have known anywhere, a number." },
        { n: "*3. 6. 10. 13. 17.* Going up. One a game. Tuesdays and Fridays." },
        { n: "She knew what it was before she counted back. Days. Days since the bridge. Since the twenty-third. He'd been writing it down beside every game he lost, the way at home he wrote the date under every game he won against her, in the margin of the crossword. Counting." },
        { n: "He saw her see it. He didn't close the book. He uncapped the blue pen and wrote today's under the last one, without hurrying." },
        three([ { n: "*19.*" } ], [ { ifEvent: 'eqx-1023', then: [
          { n: "The numbers went up to thirty and stopped. After thirty there was nothing in the margin for a while, and then, beside every game since, the same short line in the same blue, very small: a single stroke, flat, the way you'd rule off a column you weren't going to add up again." }
        ], else: [ { n: "*19.*" } ] } ], [
          { n: "The numbers went up to sixty and stopped. After sixty there was nothing in the margin at all for a week, and then, beside the last three games, in the small square blue, a single character, the same each time, the one for *home*, as in *she's home*." }
        ]),
        { n: "He capped the pen. He put a stone down. White. In the corner. The opening move he'd made against her at a desk under a lamp since she was six and her feet didn't reach the floor." },
        { s: 'taesang-strangers', f: 'neutral', t: "Play." },
        { place: 'Iwatodai Strip · Bathhouse · Front Room', time: 'Evening', bg: 'bathhouse-night', soft: true },
        { n: "They played. The rain came down the window beside the board in long crooked lines. The baseball went on in silence on its shelf; somebody hit a home run and nobody in the front room knew. The fridge hummed. Behind the curtain, somewhere deep in the building, the old man was banging at the boiler with something iron, and the pipes knocked back." },
        three([
          { n: "Partway through, her father reached into his breast pocket and took out a handkerchief, folded, and put it on the edge of the table by her bowl of stones, and unfolded it." }
        ], [ { ifEvent: 'eqx-1023', then: [
          { n: "He didn't eat at the boarding house now. None of the fathers did; Mitsuru had moved them up the hill, and Mrs. Oka had stood at the gate as they went and knocked twice on the gatepost, softly, as if it were a door. Partway through the game Solar noticed that her father had brought nothing to eat at all, and that his hands on the stones were thinner than they'd been in August, and that every time a gust threw rain against the window he looked at it, and then at the door." },
          { ifFlag: 'dead.shinjiro', then: [
            { s: 'taesang-strangers', f: 'neutral', t: "...The boy in the coat. He took the tin away. In August. At breakfast. I saw him." },
            { s: 'taesang-strangers', f: 'neutral', t: "I never thanked him. I thought there'd be a time." },
            { n: "He put a stone down. He didn't say anything else. He didn't need to. On the steps going down the Well, in the red, Solar had watched him stand over a boy in a coat with his hands open at his sides and nothing in them to do." }
          ] }
        ], else: [
          { n: "Partway through, her father reached into his breast pocket and took out a handkerchief, folded, and put it on the edge of the table by her bowl of stones, and unfolded it." }
        ] } ], [
          { n: "Partway through, he talked about the field. He didn't call it that. He didn't call it anything. He said only that his wife couldn't remember telling her the story. The one with the rope." },
          { s: 'taesang-strangers', f: 'neutral', t: "She doesn't remember it. Any of it. Not one night. She asked me, yesterday, did I ever tell you a story at bedtime. She thought it was me." },
          { s: 'taesang-strangers', f: 'neutral', t: "I remember it. I was on the stairs. Every night. The door open a hand's width. *And then heaven let down a rope. And that's enough for tonight.* I could do it in her voice." },
          { s: 'taesang-strangers', f: 'neutral', t: "...I'm not going to. It's hers. When she wants it back I'll give it her." }
        ]),
        three([
          { n: "Two rice cakes. Round, pale, dusted white, the soft kind, a little flattened from his pocket. Mrs. Oka's." },
          { s: 'taesang-strangers', f: 'neutral', t: "The landlady sent them. For you. She said you're not eating. She said, *give these to the girl, she likes them, she won't say so*." },
          { s: 'taesang-strangers', f: 'neutral', t: "...She's right. You're too thin. Your mother would say." },
          { n: "He didn't take one. Solar saw the flour on the handkerchief, fine, white, in the creases; and on his fingers, where he'd unfolded it; and she saw, under the fine white, that his hands were thinner than they'd been in August, and understood that he'd been eating these and nothing else since the twenty-fourth, because they were what was put in front of him, by a kind woman, every morning, and his wife wasn't there to put anything else." },
          { n: "The smell came up off them. Sweet. Sweet at the back. Her mouth filled with water and her stomach turned over once, slowly, like something rolling over in its sleep." },
          { choose: [
            { t: "(Eat one. Let him see you eat.)", notes: 2, flag: 'eqx-ps-ate-cake', then: [
              { n: "She ate one. For him. Because his eyes were on her the way her mother's were, at every table, waiting to see her finish; because he had nothing else in his hands to give her. It was the best thing she'd ever eaten. It tasted like being forgiven for something." },
              { n: "He watched her swallow. Something in his shoulders let go a centimeter." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Good." },
              { n: "He ate the other. In two bites, with his eyes shut, like medicine, like Mr. Kim. Solar watched it go and felt her whole skin go tight and couldn't have said why." }
            ] },
            { t: "(Wrap them back up. Say later, you've just eaten.)", notes: 1, then: [
              { n: "She folded the handkerchief back over them, corner by corner, and said *later, Appa, I just ate*, and put it in her own pocket. He looked at the pocket. He didn't say anything. He'd never once asked her whether she'd eaten something she said she had." },
              { n: "She threw them in the river on the walk home. They didn't float. They went down as if something had been waiting underneath." }
            ] },
            { t: "(Take both. And his breakfast ones tomorrow. Tell him you'll eat them all.)", notes: 3, flag: 'eqx-ps-river-cakes', then: [
              { n: "She took both. She folded the handkerchief round them and put it in her pocket, and then held out her hand, flat, on the board, palm up." },
              { s: 'solar', f: 'neutral', t: "And tomorrow's. Whatever she gives you in the morning. Bring them to me. I'll eat them." },
              { n: "It wasn't asking. She was careful. She said it the way you'd say you were taking the bins out. He looked at her hand on the board for a long time." },
              { s: 'taesang-strangers', f: 'neutral', t: "...You'll eat them all." },
              { s: 'solar', f: 'neutral', t: "All of them. I'm too thin. You said." },
              { n: "He knew she was lying. She watched him know it. He let it be, the way he'd let every lie she'd ever told him at the bottom of the stairs be, and nodded once, and the next morning there were four rice cakes in a handkerchief in her shoe locker at school, and the morning after, three, and she fed every one of them to the river, and he got thinner anyway, and ate Shinjiro's stew when she brought it, and didn't ask." }
            ] }
          ] }
        ], [ { ifEvent: 'eqx-1023', then: [], else: [
          { n: "Two rice cakes. Round, pale, dusted white, the soft kind, a little flattened from his pocket. Mrs. Oka's." },
          { s: 'taesang-strangers', f: 'neutral', t: "The landlady sent them. For you. She said you're not eating. She said, *give these to the girl, she likes them, she won't say so*." },
          { s: 'taesang-strangers', f: 'neutral', t: "...She's right. You're too thin. Your mother would say." },
          { n: "He didn't take one. Solar saw the flour on the handkerchief, fine, white, in the creases; and on his fingers, where he'd unfolded it; and she saw, under the fine white, that his hands were thinner than they'd been in August, and understood that he'd been eating these and nothing else since the twenty-fourth, because they were what was put in front of him, by a kind woman, every morning, and his wife wasn't there to put anything else." },
          { n: "The smell came up off them. Sweet. Sweet at the back. Her mouth filled with water and her stomach turned over once, slowly, like something rolling over in its sleep." },
          { choose: [
            { t: "(Eat one. Let him see you eat.)", notes: 2, flag: 'eqx-ps-ate-cake', then: [
              { n: "She ate one. For him. Because his eyes were on her the way her mother's were, at every table, waiting to see her finish; because he had nothing else in his hands to give her. It was the best thing she'd ever eaten. It tasted like being forgiven for something." },
              { n: "He watched her swallow. Something in his shoulders let go a centimeter." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Good." },
              { n: "He ate the other. In two bites, with his eyes shut, like medicine, like Mr. Kim. Solar watched it go and felt her whole skin go tight and couldn't have said why." }
            ] },
            { t: "(Wrap them back up. Say later, you've just eaten.)", notes: 1, then: [
              { n: "She folded the handkerchief back over them, corner by corner, and said *later, Appa, I just ate*, and put it in her own pocket. He looked at the pocket. He didn't say anything. He'd never once asked her whether she'd eaten something she said she had." },
              { n: "She threw them in the river on the walk home. They didn't float. They went down as if something had been waiting underneath." }
            ] },
            { t: "(Take both. And his breakfast ones tomorrow. Tell him you'll eat them all.)", notes: 3, flag: 'eqx-ps-river-cakes', then: [
              { n: "She took both. She folded the handkerchief round them and put it in her pocket, and then held out her hand, flat, on the board, palm up." },
              { s: 'solar', f: 'neutral', t: "And tomorrow's. Whatever she gives you in the morning. Bring them to me. I'll eat them." },
              { n: "It wasn't asking. She was careful. She said it the way you'd say you were taking the bins out. He looked at her hand on the board for a long time." },
              { s: 'taesang-strangers', f: 'neutral', t: "...You'll eat them all." },
              { s: 'solar', f: 'neutral', t: "All of them. I'm too thin. You said." },
              { n: "He knew she was lying. She watched him know it. He let it be, the way he'd let every lie she'd ever told him at the bottom of the stairs be, and nodded once, and the next morning there were four rice cakes in a handkerchief in her shoe locker at school, and the morning after, three, and she fed every one of them to the river, and he got thinner anyway, and ate Shinjiro's stew when she brought it, and didn't ask." }
            ] }
          ] }
        ] } ], []),

        { place: 'Iwatodai Strip · Bathhouse · Front Room', time: 'Evening', bg: 'bathhouse-night', soft: true },
        { n: "She was losing. Of course she was losing. Her stones were all over the board in little anxious clumps, the way they always were, and his were long calm walls going round them, and in the middle there was a group of hers, a big one, twenty stones, that he'd been circling for ten moves without closing, the way a man walks round a house at night checking the windows." },
        { n: "He stopped. He took his glasses off and held them and looked at the board without them, which he did when he was going to say something, and which she'd seen him do at a desk under a lamp perhaps five times in her life." },
        { s: 'taesang-strangers', f: 'neutral', t: "That one's dead." },
        { s: 'solar', f: 'neutral', t: "It's not dead. It's got a hole in it. Look. There. I've got that space. You can't go there." },
        { s: 'taesang-strangers', f: 'neutral', t: "One. It's got one." },
        { n: "He put a stone down, white, on the outside of it, quietly, closing a gap she hadn't seen. Then he reached over with one finger and touched the empty point in the middle of her group, the hole, her space, the one place inside it he couldn't play." },
        { s: 'taesang-strangers', f: 'neutral', t: "One eye. A group with one eye, I can fill all round it. All round. Every side. Take my time. And at the end I put a stone in the eye, and the whole thing's mine, and it comes off the board." },
        { s: 'taesang-strangers', f: 'neutral', t: "A group needs two. Two places nobody else can go. Then nobody can take it. Not me. Not anybody. You could play against it for a hundred years." },
        { n: "He sat back. He put his glasses on." },
        { s: 'taesang-strangers', f: 'neutral', t: "Every Lee boy learns that before he's ten. I never taught you. Your mother would have said I was making you into a gangster. She'd have been right." },
        { n: "He almost never said that word. Not about himself. Not about the house. It went past in the front room of a bathhouse in Japan with the baseball on in silence and he didn't look at it as it went, and Solar didn't either; she looked at the board." },
        { n: "At her group. Twenty stones and one eye, and his white wall round it." },
        { s: 'taesang-strangers', f: 'neutral', t: "Make two. If you can. There's a way. There's one move. Count first." },
        { n: "She counted. She'd counted at a desk since she was six and never trusted the count. She counted now, with the rain on the window and his eyes on her and not on the board, which was where he kept them when he wanted her to think he wasn't looking; and she found it, or thought she did, a point at the edge, on the second line, where if she played, the hole split in two." },
        { n: "She put the stone down. Black. It clicked on the old wood." },
        { n: "Her father looked at it for a long time." },
        { s: 'taesang-strangers', f: 'neutral', t: "...There. That one lives." },
        { s: 'taesang-strangers', f: 'neutral', t: "Two eyes. Nobody can take it now." },
        { n: "He said it to the board. And then, very low, so low she nearly didn't hear it over the rain, to the board still, the most he'd said about anything since the bridge:" },
        { s: 'taesang-strangers', f: 'neutral', t: "You've got three. That's what they tell me. Three houses. Three of us at a table, every one sure what you eat." },
        { s: 'taesang-strangers', f: 'neutral', t: "...Greedy." },
        // CG: eqx-two-eyes — a thick old go board on legs by a rain-streaked window in a bathhouse's front room at night, a big group of black stones with two small empty spaces inside it surrounded by a wall of white, a gray-templed man's finger resting at the board's edge and a girl's hand just lifting from the last black stone.
        { ifChoice: { [ASK]: 'yes' }, then: [
          { s: 'taesang-strangers', f: 'neutral', t: "You said you'd come home. On the river. She heard you." },
          { s: 'taesang-strangers', f: 'neutral', t: "I hold on to that. In the night. It's the one thing I've got that's finished." },
          { n: "He said it the way a man says he has one stone left in the bowl. Solar looked at her group with its two eyes and felt the place under her ribs where she'd given him that, and it was warm, and it was a hole, and she didn't know which; and she didn't say anything, because there was nothing she could say that wouldn't take it off him." }
        ], else: [ { ifChoice: { [ASK]: 'no' }, then: [
          { s: 'taesang-strangers', f: 'neutral', t: "You told me not to ask you. On the river. I haven't." },
          { s: 'taesang-strangers', f: 'neutral', t: "...I've wanted to. Every day. That's new. I don't like it. It's like having a stone in your shoe you can't stop and take out." }
        ], else: [
          { s: 'taesang-strangers', f: 'neutral', t: "You said it was yours. Going home. On the river. That you'd decide." },
          { s: 'taesang-strangers', f: 'neutral', t: "I've been sitting with it. On the stairs. I hate it. Your mother told me you were right. I hate that more." },
          { s: 'taesang-strangers', f: 'neutral', t: "...It's still yours. I haven't taken it back. I'm only telling you I hate it." }
        ] } ] },
        three([], [ { ifEvent: 'eqx-1023', then: [], else: [
          { n: "He put his hands on his knees. He looked at the window, at the rain, at the lit sign of the pachinko parlor across the Strip running red down the glass." },
          { s: 'taesang-strangers', f: 'neutral', t: "...The well. In the landlady's garden. And the other one. At your school. Where you go at night." },
          { s: 'taesang-strangers', f: 'neutral', t: "How deep does it go." },
          { n: "He asked it the way he asked nothing. Flat. As if it were a question about a tide table. She understood, with her whole body, before her mind caught up, that he wasn't asking about depth." },
          { choose: [
            { t: "It doesn't have a bottom, Appa. Not that we've found.", notes: 2, flag: 'eqx-ps-told-deep', then: [
              { n: "He nodded. Slowly. As if a figure had come out wrong, and it was the figure he'd expected." },
              { s: 'taesang-strangers', f: 'neutral', t: "Good. Then she's somewhere in it." },
              { n: "*Good.* She didn't understand it until much later, on a step in the red with his hand on a rope. Then she did." }
            ] },
            { t: "Not far. We'll find her. You don't have to think about it.", notes: 1, flag: 'eqx-ps-lied-deep', then: [
              { n: "He looked at her over his glasses for a long moment, the way he'd looked at her on the stairs at home at two in the morning, every time, when she told him she'd been at Yunjin's." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Mm." },
              { n: "He let it be. He always let it be. She'd never once in her life hated it before." }
            ] },
            { t: "(Don't answer. Put another stone down.)", notes: 2, then: [
              { n: "She put a stone down. Anywhere. A wasted move, in a corner that didn't matter. He looked at it, and at her, and understood it exactly." },
              { s: 'taesang-strangers', f: 'neutral', t: "...Frightened people pay attention." },
              { s: 'taesang-strangers', f: 'neutral', t: "Pay attention, then. Down there. For me." }
            ] }
          ] }
        ] } ], []),
        { place: 'Iwatodai Strip · Bench', time: 'Evening', bg: 'iwatodai-strip-rain', music: 'night' },
        { n: "Mr. Goto came back through the curtain with soot on his face and looked at the board and at the two eyes in the middle of it and barked his laugh and slapped her father's shoulder." },
        { s: 'goto', f: 'neutral', t: "Ha! She's better than you. She's better than you already, Lee-san. Write it in the book. Write it in. Your daughter." },
        { n: "Her father wrote it in. The date, and *Lee*, and *Lee*, and who won, which was a line he left blank, and in the margin, small, square, blue, nothing at all." },
        { n: "Haechan was on the bench outside when they came out, under a konbini umbrella, sitting on the wet end, the right end, not the newspaper end. He'd been there an hour, apparently. Twos." },
        { s: 'haechan', f: 'neutral', t: "Abeonim. Agasshi. It's ten to. The hour's coming." },
        { n: "Her father put his hand on Haechan's head on the way past, heavy, wet, the way he'd done on the seventh stair. Haechan didn't move under it. Then the three of them walked up the Strip under two umbrellas, her father in the middle, saying nothing, very loudly, and the rain came down on everything they'd ever left at home and everything they hadn't." },
        three([], [ { ifEvent: 'eqx-1023', then: [
          { n: "At the dorm gate he stopped and looked down the hill, toward the river, toward the bend, where the boarding house kitchen window was lit, yellow, in the rain, the only lit window on the street." },
          { n: "He looked at it for a long time. He knew, now, what stood at that sink some nights. He'd seen a face on the steps. He didn't go down the hill. He stood at the gate with his hand on it." },
          { s: 'taesang-strangers', f: 'neutral', t: "...Two eyes. She's one. You're the other." },
          { s: 'taesang-strangers', f: 'neutral', t: "Go in, Sol-ah." }
        ], else: [
          { n: "At the corner of the river street he stopped and looked down it, toward the bend, where the boarding house kitchen window was lit, yellow, in the rain, and somebody was moving at the sink, back and forth." },
          { s: 'taesang-strangers', f: 'neutral', t: "...The landlady. Keeping it warm." },
          { n: "Solar didn't look at the window. She looked at his face. She held her own perfectly still, the way she'd held it on the landing on the sixth with Haechan's eyes on her, and Haechan, on her other side under his umbrella, put his shoulder against hers, hard, and kept it there." },
          { s: 'taesang-strangers', f: 'neutral', t: "Go home, both of you. I'll go and sit." },
          { n: "He went down the river street toward the lit window with his umbrella and his hands at his sides. They stood on the corner in the rain and watched him reach the gate, and go in, and they didn't move, either of them, until the hour came down red over everything and took the window with it." }
        ] } ], [
          { n: "At the dorm her mother was at the top of the stairs. Sitting on the landing, against the wall, so nothing could be behind her, in her house cardigan, with the light on. Waiting, and not saying she was waiting." },
          { n: "Her father looked up at her from the bottom. She looked down at him. Neither of them said anything at all." },
          { n: "Then he sat down on the bottom stair, and Solar went up past him, and past her mother, and at the top she looked back, and they were both still there, one at the top and one at the bottom, the way they'd been in every house, for thirty years, and the light was on." }
        ])
      ] },

      { todo: 'Rank 4.' },
      { todo: 'Rank 5.' },
      { todo: 'Rank 6.' },
      { todo: 'Rank 7.' },
      { todo: 'Rank 8.' },
      { todo: 'Rank 9 (each of them stops asking).' },
      { todo: 'Rank 10.' }
    ]
  });
})();
