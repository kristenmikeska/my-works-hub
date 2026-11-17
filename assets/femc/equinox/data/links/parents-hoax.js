/* Persona 3: Equinox · Mr. & Mrs. Kim (Kim Jaeseok & Han Soyeon, Solar's HOAX parents) · Justice VIII. Couple link
   (femc-equinox-game.html). Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in
   assets/femc/game/scene.js. Shape: the stub fields from assets/femc/equinox/data/links.js (moved here; status / todo dropped).
   Written: ranks 1–3. Ranks 4–10 still to write (rank 9 is where they stop asking: Mrs. Kim gives her the car keys she'll
   never be able to use here).
   Speakers: 'kim-dad' and 'kim-mom' (config.js `faces`). She calls him Jaeseok, he calls her Soyeon / yeobo / honey; he calls
   Solar Solar-ya. Turns: rank 1 both (Mrs. Kim asks), rank 2 Mrs. Kim, rank 3 Mr. Kim. Mrs. Kim is taken on 9/23
   (story-act3.js eqx-equinox) and comes back on 11/22 (story-act4.js eqx-1122), so every rank that could be played late
   branches:
     ifEvent 'eqx-equinox'     she's gone: the rank plays a shorter version led by Mr. Kim
     ifEvent 'eqx-1122'        inside that, she's back (sleeps sitting up, can't go out after dark, doesn't remember the tale)
     ifEvent 'eqx-fathers-go'  (rank 3) he has stopped checking station exits (10/22: "I'm not checking any more exits")
     ifEvent 'eqx-1023'        (rank 3) he has been down the Well and seen the worn faces.
   Rank 1 (after 9/4, Saturday evening, Naganaki Shrine: Mom reading every sign with her planner, Dad reading none with a can of
     vending-machine coffee; two fortunes; Kubo at the torii; the car keys she came through holding). Records the couple's ask
     ("take her home"): tally asks.parents-hoax yes / no / choose (+ cakes / choose; "Stay. Please." adds asked + cakes and
     sets eqx-asked-parents-hoax; the choose option sets eqx-choose-parents-hoax). Reads dating() jihoon / jungwon.
     Late version: Mr. Kim alone reads the signs for her.
   Rank 2 (after 9/15, the shrine: a cat planner from the stationer, "so you can write down where you are", the second one
     she's given her; she walked up to the dorm in the red on Monday and found it empty; she waited twenty minutes outside the
     school and Mrs. Oka said waiting was good for her; Dad takes a photo of them on Solar's phone). Sets eqx-kimmom-told (Solar
     tells her about the Well, or writes it in the planner) and eqx-kim-photo (always: the photo exists). Late version: Mr. Kim
     brings the planner, filled in ahead in her hand up to *9/23 Moon. Park. Home by 9. I'll check.*
   Rank 3 (after 10/13, the shrine in October: Dad reads every sign now, aloud, for her; he writes an ema; on the rack, a new
     one in her blunt hand: *Rice in the cooker. Don't wait up. — Mom*; with eqx-kim-photo, the photo on Solar's phone has
     turned round and shows an apron's knot at the small of her back, which he doesn't see). Sets eqx-kim-ema-turned |
     eqx-kim-ema-kept | eqx-kim-ema-shown. Late version (after 11/22): she's back and asked him to hang an ema for her.
   Flags this file sets (all new, for flags.js): eqx-asked-parents-hoax (should join story-act4.js ASKED),
   eqx-choose-parents-hoax (should join MINE), eqx-kimmom-told, eqx-kim-photo, eqx-kim-ema-turned, eqx-kim-ema-kept,
   eqx-kim-ema-shown. Choice: asks.parents-hoax.
   HOAX fences: the triangle stays open (Jungwon is "ours"; Mrs. Kim's verdict on Jihoon is a look, not a ruling); Nana is at
   home and fine (nobody knows who's walking him, which is only a worry); the hearing and the VP named, nothing decided. */
{
  const KISS = {
    jungwon: ['eqx-jw-council-kiss', 'eqx-jw-summer-kiss', 'eqx-jw-room-four', 'eqx-jw-both-names'],
    jihoon: ['eqx-jihoon-roof', 'eqx-jihoon-booth-kiss', 'eqx-jihoon-canal-kiss', 'eqx-jihoon-dark-kiss', 'eqx-jihoon-room']
  };
  const dating = (id, then, els) => ({ ifRomance: id, then, else: [{ ifCount: { of: KISS[id], min: 1 }, then, else: els || [] }] });

(window.FEMC_GAME_LINKS ||= []).push({
  id: 'parents-hoax', name: 'Kim Jaeseok & Han Soyeon', short: 'Mom & Dad Kim', arcana: 'Justice', numeral: 'VIII', from: 'Hoax', kind: 'parent',
  world: 'H', romance: null, arrives: '8/25', starts: '8/26', lodging: 'boarding',
  members: ['kim-dad', 'kim-mom'], cast: { 'kim-dad': 'Mr. Kim', 'kim-mom': 'Mrs. Kim' },
  home: { area: 'shrine', spot: 'Grounds', slot: 'evening', days: [3, 6],
          hint: 'Wednesday and Saturday evenings, at Naganaki Shrine, Mom reading every sign and Dad reading none.' },
  ranks: [
    { after: '9/4', title: '1: every sign', place: 'Naganaki Shrine · Grounds', time: 'Evening', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      { ifEvent: 'eqx-equinox', then: [
        // Played late: Mrs. Kim is gone (or back, and kept indoors). Mr. Kim reads the signs for her.
        { n: "Her father was reading the signs." },
        { n: "All of them. At Naganaki Shrine in the evening, in his gray fleece, with his reading glasses on the end of his nose and a notebook open in one hand: the board at the bottom of the steps with the shrine's history on it, the little placard by the water basin that told you which hand to wash first, the rules for the fortunes, the rules for the wooden prayer plaques, the sign by the bell rope that said not to ring it too hard. He stood in front of each one for a long time, moving his lips, and then wrote in the notebook, slowly, in Korean." },
        { n: "Her father had never read a sign in his life. That was her mother's job. On every holiday in every life, her mother read every sign in every museum and temple and rest stop out loud, and her father stood behind her eating something, reading none." },
        { ifEvent: 'eqx-1122', then: [
          { s: 'kim-dad', f: 'neutral', t: "She can't come out after dark. Not yet. She sits up all night with the lamp on and I sit on the floor. She asked me to come and read them for her. She said, *somebody has to read the signs, Jaeseok, or we'll do it all wrong*." },
          { s: 'kim-dad', f: 'sad', t: "So I'm reading them. I'm very slow. I keep stopping to look at the trees." }
        ], else: [
          { s: 'kim-dad', f: 'neutral', t: "Solar-ya. Look. I'm reading the signs. Every one. She'd be amazed. She'd say, *who are you and what have you done with my husband*." },
          { s: 'kim-dad', f: 'neutral', t: "I'm writing them down. For when she's back. She'll want to know what they said. She hates missing a sign." }
        ] },
        { n: "He had her car keys in his other hand. The ones she'd come through holding. He turned them over without looking at them." },
        { s: 'kim-dad', f: 'neutral', t: "When she's back, I'm driving. All of us. Out of this town, the second there's a road out. I don't care where the road goes. I'll find a road." },
        { s: 'kim-dad', f: 'sad', t: "She'll get in and move the seat back. Every time. Like I've done something to it. And you'll sit behind her where she can see you in the mirror, and we'll go home. That's what she'd say. I'm only saying what she'd say. I'm not good at saying things. She does that." },
        { s: 'kim-dad', f: 'neutral', t: "...You'll get in the car. Won't you." },
        { choose: [
          { t: "I'll get in the car, Appa. I promise.", notes: 3, tally: { cakes: 1, 'asks.parents-hoax': 'yes' }, then: [
            { n: "He beamed. His whole face went at once, the way it did when Nana brought him the wrong slipper. He wrote it in the notebook under the rules for the fortunes, in Korean: *She'll get in the car.*" },
            { n: "Something small and warm went out of her as he wrote it, from under her ribs, into the evening. She didn't know where. The cicadas had stopped. She hadn't noticed when." }
          ] },
          { t: "Don't drive anywhere. Stay. When she's back, both of you stay. Please.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.parents-hoax': 'yes' }, flag: 'eqx-asked-parents-hoax', then: [
            { n: "He looked at her over his glasses for a long time. Then he put the keys in his pocket." },
            { s: 'kim-dad', f: 'sad', t: "...Okay, Solar-ya. Okay. If you want. I'll tell her you asked. She'll say yes. She can't ever say no to you. She just pretends." },
            { n: "Something small and warm went out of her as he said it, and was gone." }
          ] },
          { t: "When I get in a car, it'll be because I picked it. Not because anyone's driving.", notes: 2, tally: { choose: 1, 'asks.parents-hoax': 'choose' }, flag: 'eqx-choose-parents-hoax', then: [
            { s: 'kim-dad', f: 'neutral', t: "...That's her. That's exactly her. She said that to me in a parking lot in 1991." },
            { s: 'kim-dad', f: 'happy', t: "Then I'll just keep the engine running. In case you pick it. That's allowed. I'm allowed to keep the engine running." }
          ] },
          { t: "I'm not going back to being her, Appa. The vice president. The hearing.", notes: 2, tally: { 'asks.parents-hoax': 'no' }, then: [
            { s: 'kim-dad', f: 'sad', t: "...Oh, sweetheart." },
            { n: "That was all. He didn't argue. He'd never argued with anyone in his life; that was her mother's department too. He put his hand on her head, once, heavily, the way he'd pat a dog he'd been told not to feed, and went back to the signs, and stood in front of the next one for a long time without reading it." }
          ] }
        ] },
        { n: "He tied his fortune to the rack at the end, the way the sign said to, though it was a good one. He said she'd want it tied properly. Then he walked her down the steps, all of them, one at a time, slowly, and at the bottom he stopped and looked back up at the torii." },
        { s: 'kim-dad', f: 'neutral', t: "She'd have gone ahead. She'd be at the bottom already. *What took you so long.*" },
        { n: "There was nobody at the bottom of the steps. He knew. He said it anyway, cheerfully, to the empty gravel, and took Solar's arm, and walked her home." }
      ], else: [
        { n: "Her mother was reading every sign." },
        { n: "Naganaki Shrine on a Saturday evening in September, the heat finally coming off the stones, the trees full of the last cicadas grinding away like something left on, the lanterns along the path just lit. And Mrs. Kim going up the path from sign to sign with her planner open in one hand and a pen in the other, reading. The board at the bottom of the steps with the shrine's history on it. The little placard by the water basin that told you which hand to wash first. The rules for the fortunes. The rules for the wooden plaques. A laminated notice about not feeding the crows." },
        { n: "She read each one all the way through, frowning, and then wrote something in the planner, and moved on to the next, the way she'd moved through every museum and temple and rest stop on every holiday of Solar's life in the other one, reading every word on every wall out loud whether anyone was listening or not." },
        { n: "Her father was sitting on the shrine steps with a can of coffee from the vending machine at the bottom, reading none of them." },
        { s: 'kim-dad', f: 'happy', t: "Solar-ya! Come and sit. This is my favorite sign. Look. It says *vending machine*." },
        { n: "There was a man at the torii in a dark suit in the heat, with an earpiece he kept pushing back in. Kubo. He had a can of the same coffee in his hand, unopened, held at his side like a thing he'd been ordered not to drink and hadn't been able to refuse. Her father waved at him. Kubo bowed." },
        { s: 'kim-mom', f: 'neutral', t: "You're late." },
        { s: 'solar', f: 'neutral', t: "You didn't say a time." },
        { s: 'kim-mom', f: 'neutral', t: "I didn't need to say a time. You know what time I mean. I've meant the same time for eighteen years." },
        { n: "She closed the planner on her pen. She looked at her daughter the way she'd looked at her across the kitchen table on the first morning back after the retreat, in another December, in a steel-doored apartment on a hill, with her coat still on and the school's phone call still in her face. The crossword look. A woman who already had most of the letters and was waiting for you to give her the rest." },
        { s: 'kim-mom', f: 'serious', t: "Sit down. Not there. There, where I can see you." },
        { n: "Solar sat on the step. Her mother didn't. She stood over her on the gravel with the planner against her chest." },
        { s: 'kim-mom', f: 'serious', t: "Nine days. In exam week. A *council retreat*. Nobody signed a form. Your phone went to voicemail for nine days and then you walked in the front door on a Thursday morning thinner than when you left and told me it was a retreat." },
        { s: 'kim-mom', f: 'serious', t: "And then one night you went up to your room. And in the morning you weren't in it. The window shut. Your phone on the desk. Nana on your bed with his head on your pillow, waiting. He wouldn't get off. I tried with the broom." },
        { s: 'kim-mom', f: 'neutral', t: "This is where you were. The first time. Don't tell me it wasn't. I've been reading the signs." },
        { choose: [
          { t: "It was a retreat, Mom.", notes: 1, then: [
            { s: 'kim-mom', f: 'serious', t: "Mm." },
            { n: "One syllable. It had done more damage over the years than anything her mother had ever actually said. Her father, on the step, studied his coffee." },
            { s: 'kim-mom', f: 'neutral', t: "You've been lying to me since you could talk, Solar. I've never once minded. I mind when you do it badly." }
          ] },
          { t: "Yes. This is where I was.", notes: 3, then: [
            { n: "Her mother's face didn't change. That was the thing about her mother's face. But her hand on the planner tightened, and the pen inside it creaked." },
            { s: 'kim-mom', f: 'neutral', t: "...Thank you." },
            { s: 'kim-mom', f: 'serious', t: "That's the first true thing you've told me since the retreat. Don't think I'm not counting." }
          ] },
          { t: "(Don't say anything. Let her read it on your face.)", notes: 2, then: [
            { n: "She didn't say anything. She sat on the step and let her mother look, and her mother looked for a long time, and read it, all of it, the way she read the signs, every word to the end." },
            { s: 'kim-mom', f: 'neutral', t: "...Yes. I thought so." }
          ] }
        ] },
        { s: 'kim-dad', f: 'neutral', t: "Soyeon. She's here. We're here. Sit down. Have a coffee. It's a very good coffee. It's from a machine." },
        { s: 'kim-mom', f: 'neutral', t: "I'll sit down when I've read the fortunes." },
        { place: 'Naganaki Shrine · Grounds', time: 'Evening', bg: 'naganaki-amulet-stall', music: 'tender', soft: true },
        { n: "The fortunes were a hundred yen each, from a wooden box by the amulet stall, folded slips of paper you drew out by shaking a numbered stick through a hole and asking the old woman for the matching drawer. Her mother read the rules for doing it twice and then did it exactly as written. Her father shook the box like a can of paint." },
        { s: 'kim-dad', f: 'happy', t: "Read mine. Read mine first. I can't read it. It's all little boxes." },
        { n: "Solar unfolded it. She could read it. Here, everybody could read everything; nobody had ever explained why, and after April nobody asked." },
        { s: 'solar', f: 'neutral', t: "Great blessing. Health, good. Lost things, will be found. The person you're waiting for, will come." },
        { s: 'kim-dad', f: 'happy', t: "Great blessing! Soyeon. Great blessing. I've never had a great blessing in my life. *Lost things will be found*. That's the car keys. That's the time I lost the car keys at the reservoir." },
        { s: 'kim-mom', f: 'neutral', t: "You've still lost them. I've got them." },
        { s: 'kim-dad', f: 'happy', t: "And they've been found! By you. It's very accurate." },
        { n: "Her mother didn't hand hers over. She unfolded it herself and read it, all of it, the small print too, frowning, her lips moving, and then held it out to Solar without a word, the way she'd hold out a form for a signature she already knew she wasn't going to like." },
        { s: 'solar', f: 'neutral', t: "...Small blessing. Travel, don't go ahead of the others. The person you're waiting for—" },
        { n: "She stopped. She read it again. It said what it said." },
        { s: 'solar', f: 'neutral', t: "The person you're waiting for, don't turn back for them." },
        { s: 'kim-mom', f: 'neutral', t: "Rubbish." },
        { n: "Her mother took it back. She folded it once, sharply, along its crease. And then, because the sign said you did this with a bad one, she tied it to the rack of strings by the stall where the bad fortunes went, among hundreds of others, white paper knots like moths, in a hard double knot, the way you tie something you never want to have to untie." },
        { s: 'kim-mom', f: 'neutral', t: "I always go ahead. Twenty years. Your father's still parking. And I've never turned back for anyone in my life. I don't need a piece of paper to tell me." },
        { s: 'kim-dad', f: 'happy', t: "It's true. She doesn't. I have to catch her up. That's my whole marriage. Catching up." },
        { n: "Solar looked at the knot on the rack. It moved a little among the others in the warm air off the sea. She didn't know why she was looking at it. She made herself look at her mother instead." },
        { place: 'Naganaki Shrine · Grounds', time: 'Evening', bg: 'naganaki-shrine-night', music: 'night', soft: true },
        { n: "The lanterns had come up properly by the time her mother sat down. On the step, beside Solar, at last, with the planner on her knee and her father on the other side, so that Solar was in the middle the way she'd been in the middle of the back seat on every drive in that life, a parent in front of her on either side." },
        { n: "Her mother took the car keys out of her jacket pocket. She held them on her open palm. A plain ring, three keys, a little plastic tag from a car wash, a tiny enamel Samoyed with one ear chipped." },
        { s: 'kim-mom', f: 'neutral', t: "I had these in my hand. When I came through. I was going out. It was the middle of the night and I'd got my coat on and my bag and these, and I was going out to drive. I didn't know where. Your father was looking for his other shoe." },
        { s: 'kim-dad', f: 'sad', t: "It was under the bed." },
        { s: 'kim-mom', f: 'neutral', t: "I was going to drive until I found you. That was the whole plan. I didn't have a better one. I've never needed a better one." },
        { s: 'kim-mom', f: 'serious', t: "So here's what's going to happen. When there's a road out of this town, I'm driving you home. I don't care if it's a door, or a bridge, or a hole in the ground under that school. You get in the car. You sit in the back where I can see you in the mirror. You don't touch the radio." },
        { s: 'kim-dad', f: 'neutral', t: "She'll move the seat back first." },
        { s: 'kim-mom', f: 'neutral', t: "I'll move the seat back first. Because somebody always moves it forward." },
        { n: "She closed her hand on the keys. Solar watched the teeth of them come out between her knuckles, the way they had at the long table in the red, held like something she might have to use." },
        { s: 'kim-mom', f: 'neutral', t: "That's not a question. I don't ask you questions. You lie to questions. That's a plan. Tell me you heard it." },
        { n: "The cicadas had stopped. Solar hadn't noticed when. Down at the torii, Kubo had turned his back to them, politely, and was looking out at the road with the unopened coffee in his hand." },
        { n: "It was a question. They both knew it was a question. Her mother had never once in her life asked her for anything she thought Solar might say no to; she'd just told her, so that the no would have to be a fight. This was her asking." },
        { choose: [
          { t: "I heard it. I'll get in the car, Mom.", notes: 3, tally: { cakes: 1, 'asks.parents-hoax': 'yes' }, then: [
            { n: "Her mother didn't smile. She didn't need to. She put the keys back in her jacket pocket and zipped the pocket and patted it, once, flat, the way you'd pat a thing to make sure it was still there." },
            { s: 'kim-mom', f: 'neutral', t: "Good. In the back. Where I can see you." },
            { n: "Her father put his arm round Solar's shoulders and squeezed, hard, and said nothing at all, because her mother had said it." },
            { n: "And something small and warm went out of her. From under her ribs, out into the lantern light, up the steps, she couldn't have said where. Gone. She sat between her parents and felt lighter, and didn't know why lighter felt like that." }
          ] },
          { t: "Don't drive anywhere. Stay here. Both of you. With me. Please.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.parents-hoax': 'yes' }, flag: 'eqx-asked-parents-hoax', then: [
            { n: "Her mother turned her head and looked at her. Properly. The whole crossword at once." },
            { s: 'kim-mom', f: 'surprised', t: "...You've never asked me to stay anywhere. You've asked me to leave a hundred times. You've shut a hundred doors on me." },
            { s: 'solar', f: 'neutral', t: "I'm asking." },
            { n: "Her mother looked at the keys in her fist. Then she did something Solar had never seen her do, in any life: she put them down. On the step, between them, on the stone, and left her hand flat on top of them." },
            { s: 'kim-mom', f: 'neutral', t: "...Fine. Yes. Fine. If you're asking. Since you're asking." },
            { n: "And something small and warm went out of Solar as she said it, from under her ribs, out into the lantern light, gone. Her father, on the other side, had his hand over his mouth." }
          ] },
          { t: "When I get in a car, it'll be because I picked it. Not because anyone's driving.", notes: 2, tally: { choose: 1, 'asks.parents-hoax': 'choose' }, flag: 'eqx-choose-parents-hoax', then: [
            { s: 'kim-mom', f: 'serious', t: "...That's not an answer." },
            { s: 'solar', f: 'neutral', t: "It's mine." },
            { n: "Her mother looked at her for a long time. Then she let out a breath through her nose, short, the one that meant someone had beaten her at cards fairly." },
            { s: 'kim-dad', f: 'happy', t: "She said that to me. Soyeon. In the parking lot at the lake. In 1991. You said, *when I get in a car with you it'll be because I picked it*." },
            { s: 'kim-mom', f: 'neutral', t: "And I picked it. And look where it got me. A shrine in the middle of nowhere with a man who reads vending machines." },
            { s: 'kim-mom', f: 'neutral', t: "...Fine. Pick it, then. I'll keep the engine running." }
          ] },
          { t: "I'm not going back to being her, Mom. The vice president. The forum. The hearing.", notes: 2, tally: { 'asks.parents-hoax': 'no' }, then: [
            { n: "Her mother went very still on the step." },
            { s: 'kim-mom', f: 'serious', t: "Nobody asked you to be vice president, Solar. You did that yourself. You stood up in front of the whole school and asked for it." },
            { s: 'kim-mom', f: 'sad', t: "...I'm not asking you to go back to that. I'm asking you to go back to *us*." },
            { n: "She put the keys back in her pocket. She didn't zip it. Her father reached across Solar and put his hand on her mother's knee, and her mother let him, and none of them said anything for a long time." }
          ] }
        ] },
        dating('jihoon', [
          { s: 'kim-mom', f: 'neutral', t: "And Park Jihoon." },
          { n: "She said it to the lanterns. Not to Solar. Her father, on the other side, became extremely interested in the bottom of his can." },
          { s: 'kim-mom', f: 'serious', t: "I'm not going to say anything. I'm going to say it once, and then I'm never going to say it again. I've known that boy since he was in short trousers. Don't." },
          { s: 'kim-mom', f: 'neutral', t: "...That's it. That's all. Don't make me say it twice." }
        ]),
        dating('jungwon', [
          { s: 'kim-mom', f: 'neutral', t: "And Jungwon looks thin. Tell him to come to the house. The boarding house. Tell him I said." },
          { s: 'kim-dad', f: 'happy', t: "He'll come. He's ours. He's been ours since he fixed the router." }
        ]),
        { n: "They went down the steps together at the end, when the lanterns were the only light. Or her father and Solar did. Her mother went ahead. Of course she did; she was at the bottom before they'd done a third of it, under the last lantern by the torii, with her arms folded, beside Kubo, who'd straightened up so fast at her approach that his earpiece fell out." },
        { s: 'kim-dad', f: 'neutral', t: "You see? She goes ahead. Every time. Mall, airport, my mother's funeral. And then she waits at the bottom and gets annoyed I took so long." },
        { n: "He said it fondly. He took the steps one at a time with Solar's arm through his, slowly, on purpose, she thought, to give her mother something to be annoyed about." },
        { s: 'kim-mom', f: 'neutral', t: "What took you so long." },
        { s: 'kim-dad', f: 'happy', t: "I was reading the signs." },
        { s: 'kim-mom', f: 'neutral', t: "You've never read a sign in your life." },
        { n: "Kubo walked behind them along the road to the river. Her father offered him a Kit Kat from his fleece pocket, a purple one, and Kubo, who had been told very firmly not to accept anything from the families, took it, and ate it walking, and said *thank you, sir* with his mouth full." },
        { n: "Her mother dropped back. Solar saw her do it: the woman who always went ahead, falling back three steps to walk beside the young man in the dark suit. She looked up at him, at his round face and his slipping earpiece and the purple wrapper in his hand." },
        { s: 'kim-mom', f: 'neutral', t: "Does your mother know where you are?" },
        { n: "Kubo looked down at her, startled. Then he smiled, embarrassed, the way a boy smiles at a teacher. *She thinks I'm in insurance, ma'am. In Okayama. She thinks I sell insurance.*" },
        { s: 'kim-mom', f: 'serious', t: "Mm. Call her." },
        { n: "*Yes, ma'am.*" },
        { n: "He said it so readily, so exactly in the voice of a boy who would not call his mother, that Solar's father laughed out loud on the dark road, and her mother hit him on the arm without looking, and went ahead again, as she always did, toward the boarding house and its lamp and the persimmon tree over the wall. Kubo pushed his earpiece back in. Solar walked between her father and him the rest of the way and didn't say anything, and kept them both in the corner of her eye, the way you'd keep a candle in the corner of your eye in a room with the window open." }
      ] }
    ] },

    { after: '9/15', title: '2: where you are', place: 'Naganaki Shrine · Grounds', time: 'Evening', music: 'tender', scene: [
      { bg: 'naganaki-shrine-summer' },
      { ifEvent: 'eqx-equinox', then: [
        // Played late: the planner she bought, filled in ahead in her hand.
        { n: "Her father was on the shrine steps with a small planner on his knee. A Japanese one, from the stationer at the mall, with a cartoon cat on the cover, the kind sold to middle school girls." },
        { s: 'kim-dad', f: 'neutral', t: "It was in her jacket. The one on the hook at the boarding house. She bought it for you. On the fifteenth. It's got the receipt in it. One cat planner, six hundred yen. She kept the receipt. She keeps every receipt." },
        { n: "He held it out. Solar opened it. The first pages were empty, the way a planner is empty until somebody has a use for it. And then, from the middle of September, in her mother's blunt square hand, in pen, pressed hard, the days were already filled in." },
        { n: "*Thurs. School. Home by 6. I will check.* *Fri. School. Rota?? ASK.* *Sat. Shrine w/ us. 6.* And on, a line for every day, a week ahead, in her mother's handwriting, the way she'd filled in Solar's calendar on the fridge every Sunday night of her life in the other one so that there'd never be a day nobody knew about." },
        { n: "The last one was the twenty-third." },
        { n: "*Thurs. 23. Moon. Park. Home by 9. I'll check.*" },
        { n: "After that the pages were blank." },
        { ifEvent: 'eqx-1122', then: [
          { s: 'kim-dad', f: 'sad', t: "I showed it to her. Upstairs. She read her own writing very carefully. Twice. Then she asked me what moon. She doesn't remember the moon. She doesn't remember the park." },
          { s: 'kim-dad', f: 'neutral', t: "She took the pen and crossed out *I'll check* and wrote it again underneath. Bigger. Then she gave it back and asked me to give it to you." }
        ], else: [
          { s: 'kim-dad', f: 'neutral', t: "She'll want you to keep it going. She'll check it when she's back. She'll check every day you didn't write in and want to know where you were." }
        ] },
        { choose: [
          { t: "(Take the pen. Write tomorrow in.)", notes: 3, flag: 'eqx-kimmom-told', then: [
            { n: "She took the pen out of its loop. She turned to tomorrow, past all the blank days, and wrote it in, in her mother's format, because there wasn't any other: the day, the place, the time she'd be home. And then, because it was true and her mother would want the true one, the other place, the one at midnight, under the school. *The Well. Home by 2.*" },
            { n: "Her father watched her write it. He didn't read it. He looked at her hand." },
            { s: 'kim-dad', f: 'neutral', t: "...Good. That's good. She'll check." }
          ] },
          { t: "(Hold it shut. Keep it.)", notes: 2, then: [
            { n: "She held it shut on her knee with both hands, the cat face up. Her father nodded, as if that were also a way of filling it in." }
          ] }
        ] },
        { s: 'kim-dad', f: 'neutral', t: "Home by nine, Solar-ya. She wrote it. I'm only the messenger." },
        { n: "It was ten past seven. He walked her down anyway, slowly, and at the bottom of the steps looked back up the empty path for a moment, at the lanterns, the way you'd look back for someone who always went ahead." }
      ], else: [
        { n: "Her mother had bought her a planner." },
        { n: "She was holding it out at the top of the shrine steps when Solar came up them on Wednesday evening: a small Japanese planner, from the stationer at Paulownia Mall, with a cartoon cat on the cover, round-eyed, holding a pencil. The kind sold to middle school girls. The cicadas were almost gone now; there were only a few left in the trees over the path, slow and hoarse, like the end of a record." },
        { s: 'kim-mom', f: 'neutral', t: "It was the only one they had. Don't look at the cat. The cat's not the point." },
        { s: 'kim-mom', f: 'neutral', t: "You had one. I gave you one. At Christmas. A good one, leather. So you could write down where you are. Where is it?" },
        { s: 'solar', f: 'neutral', t: "At home." },
        { s: 'kim-mom', f: 'neutral', t: "Then you need one here." },
        { n: "She made her sit on the top step. She sat beside her with her own planner, the one she'd come through with in her handbag, black, fat with receipts, and opened the cat one on Solar's knee to the current week and put the pen in her hand, the way she'd put a pen in Solar's hand at the kitchen table to sign a permission slip she'd already read twice." },
        { s: 'kim-mom', f: 'neutral', t: "Tomorrow. Where are you." },
        { s: 'solar', f: 'neutral', t: "School." },
        { s: 'kim-mom', f: 'neutral', t: "Write it down. And after school." },
        { s: 'solar', f: 'neutral', t: "The dorm. Probably. Or—" },
        { s: 'kim-mom', f: 'serious', t: "*Or.* Write down the *or*." },
        { n: "So she wrote it down. Thursday. Friday. Her mother read over her shoulder, every word, the way she read the signs. And on Friday, when Solar's pen stopped at the evening and hovered, her mother put one finger on the page below it, on the bottom of the day, on the empty space after the last line." },
        { s: 'kim-mom', f: 'serious', t: "And at one in the morning. Where are you at one in the morning, Solar." },
        { n: "The pen stopped." },
        { s: 'kim-mom', f: 'serious', t: "I walked up to that dormitory on Monday night. At half past twelve. I couldn't sleep. Your father was asleep. I put my coat on and I walked up the hill because I wanted to see your window, I wanted to see the light in it, that's all, I wasn't going to knock." },
        { s: 'kim-mom', f: 'serious', t: "And the town went red." },
        { s: 'kim-mom', f: 'neutral', t: "Everything. The streetlights went off and the sky went the color of the inside of your eyelids, and there were boxes standing in the road where people had been, tall black boxes, and the door of that dormitory was locked, and every light in it was off, and you weren't in it. None of you were in it. I stood on the step in the red and knocked and nobody came." },
        { s: 'kim-mom', f: 'neutral', t: "So I'm asking you. Once. Where are you at one in the morning." },
        { n: "Solar sat on the top step of the shrine with the cat planner on her knee. Her mother's finger was still on the page. It wasn't shaking. Her mother's hands never shook; they went white instead, at the knuckles, and this one was white." },
        { n: "She thought of her mother on the dorm step in the red, alone, knocking. Of the rule Hanni had written on the board in April under Mitsuru's initials: *nobody opens a door in the red.* Of how many voices knocked at that door in the red that weren't the voices they sounded like. Her mother's real one, knocking on it. Nobody opening." },
        { choose: [
          { t: "(Tell her. The Well. Under the school. The red hour. All of it.)", notes: 3, flag: 'eqx-kimmom-told', then: [
            { n: "She told her. Not the worst of it; nobody could have told anyone the worst of it on a shrine step. But the shape. A well under the school that went down where a tower had gone up last year. The red hour that came every night that nobody else in the town was awake for. Going down in it, in twos and threes, with the others. Coming back up." },
            { n: "Her mother listened the way she listened to everything, to the end, without interrupting, her finger still on the page. When Solar stopped, she was quiet for a long time." },
            { s: 'kim-mom', f: 'neutral', t: "...Down. In the middle of the night. Under the school." },
            { s: 'kim-mom', f: 'serious', t: "I told you not to lean on that well. I said it the first week. I said, *I know you, you'll lean on it.*" },
            { s: 'solar', f: 'neutral', t: "I know, Mom." },
            { s: 'kim-mom', f: 'neutral', t: "...Write it down. All of it. Every night you go. What time you go down and what time you come up. I want it in the book." }
          ] },
          { t: "We go up on the roof. The dorm roof. We watch the sky.", notes: 1, then: [
            { s: 'kim-mom', f: 'serious', t: "Mm." },
            { n: "The one syllable. It sat on the step between them like a third person." },
            { s: 'kim-mom', f: 'neutral', t: "I looked at the roof, Solar. In the red. I looked at every window and I looked at the roof." },
            { s: 'kim-mom', f: 'neutral', t: "...Write down *roof*, then. If that's what you want in the book. I'll know what it means. I'll know every time I read it." }
          ] },
          { t: "(Don't say it. Write it. 12:00 — the Well. 2:00 — home.)", notes: 3, flag: 'eqx-kimmom-told', then: [
            { n: "She didn't say it. She put the pen to the bottom of Friday, under her mother's finger, and wrote it, small and neat, in the format of every line above it: the time, the place, the time home. *12:00. The Well (under school). 2:00, home.*" },
            { n: "Her mother read it. Twice. Her lips moved on the second time." },
            { s: 'kim-mom', f: 'neutral', t: "...The well." },
            { s: 'kim-mom', f: 'serious', t: "The one I told you not to lean on." },
            { s: 'solar', f: 'neutral', t: "It's not leaning, Mom. It's more like climbing." },
            { s: 'kim-mom', f: 'neutral', t: "...Don't be funny. Not now. Write it for every night. Every one. What time you go down and what time you come up." }
          ] }
        ] },
        { n: "Her mother took her finger off the page. She closed her own fat black planner on her knee and put both hands flat on top of it and looked out over the shrine at the town going dark, the river, the roofs, the dorm's light on its hill, and the far school with its courtyard nobody looked at." },
        { s: 'kim-mom', f: 'serious', t: "That girl with the sword told me no. When I asked. Miss Kirijo. I asked to see where you go and she said no, very politely, in three languages, and I've been told no by a nineteen-year-old in three languages, and I let her." },
        { s: 'kim-mom', f: 'neutral', t: "At home I know where you are. Even when I don't. Even when you're lying to me about a retreat, I know which lie it is. I know which friend's house. I know which boy's car. I know which window." },
        { s: 'kim-mom', f: 'sad', t: "Here everyone keeps you. That girl with the sword. The boy with the hat and his book. The tall one with the silver hair who stands at the door. They all know where you are at one in the morning. I'm your mother and I'm a guest. I don't even know what to be afraid of here." },
        { n: "She said it flat, the way she said everything, the way she'd say the price of something. Solar sat beside her and felt it land somewhere under her ribs and stay." },
        { choose: [
          { t: "Then be on the rota. I'll ask Hanni. She'll give you a night.", notes: 3, then: [
            { s: 'kim-mom', f: 'surprised', t: "...The rota." },
            { n: "Hanni's rota. Every door in the household, every night, in Hanni's round careful handwriting on a sheet of paper on the dorm fridge with Mitsuru's initials in the corner: who checked which latch at midnight, who walked who home, who sat up. Solar had watched her mother read it on the first morning, standing at the fridge with her coffee, frowning, the way she read the signs. She'd read it twice." },
            { s: 'solar', f: 'neutral', t: "Wednesdays. You'd get the boarding house door. You'd check it's locked at twelve and you don't open it for anybody, even if it's me. Especially if it's me." },
            { s: 'kim-mom', f: 'neutral', t: "...I don't open it for you." },
            { s: 'solar', f: 'neutral', t: "That's the rule. Nobody opens a door in the red." },
            { n: "Her mother thought about it. Solar watched her think about it: a woman who'd been told she was a guest, being handed a job. Her mouth did the thing at one corner." },
            { s: 'kim-mom', f: 'neutral', t: "Fine. Wednesdays. Tell the girl I'll want it in writing. And tell her I'll be checking the other doors too. Somebody should." }
          ] },
          { t: "(Write her number in the planner. The first page. In case.)", notes: 2, then: [
            { n: "She turned to the very front of the cat planner, the page for *In case of emergency* with a cartoon cat holding a little first-aid box, and wrote her mother's number in it, the number of the phone Mitsuru had given her, carefully, every digit." },
            { n: "Her mother watched her do it. She didn't say anything. She reached over and took the pen and wrote, under it, in her blunt square hand, her own home number. The one in the other life. The landline in the steel-doored apartment on the hill, which rang in a hallway on the other side of every world, which nobody here could ring." },
            { s: 'kim-mom', f: 'neutral', t: "...In case." }
          ] },
          { t: "I'm afraid too, Mom. All the time. You're not the only one who doesn't know.", notes: 3, then: [
            { n: "Her mother turned her head and looked at her. Properly. For a long time, in the last of the light, the way she'd looked at her across a kitchen table over a thermometer when she was eleven and had the flu and was pretending not to." },
            { s: 'kim-mom', f: 'neutral', t: "...Good." },
            { s: 'solar', f: 'surprised', t: "Good?" },
            { s: 'kim-mom', f: 'neutral', t: "You've told me the truth twice in one week. And you're afraid. Good. Then you'll be careful. The ones who aren't afraid lean on wells." },
            { n: "She put her hand on Solar's knee. Briefly; her mother was not a woman who left her hand anywhere for long. But she put it there, flat, heavy, and Solar felt the weight of it through her skirt for a long time after it had gone." }
          ] }
        ] },
        { place: 'Naganaki Shrine · Grounds', time: 'Evening', bg: 'naganaki-shrine-night', music: 'eerie', soft: true },
        { n: "The lanterns came on. Her mother watched them, one by one, all the way down the path." },
        { s: 'kim-mom', f: 'neutral', t: "I waited for you today. Outside the school. At the gate. I wanted to walk you home. You'd gone out the back with the girl with the headband." },
        { s: 'kim-mom', f: 'neutral', t: "Twenty minutes. I stood at that gate for twenty minutes." },
        { s: 'kim-mom', f: 'neutral', t: "I've never waited twenty minutes for anyone in my life. Not your father. Not the bank. Not a doctor. I'd have left at five and called you from the car to say I'd left." },
        { n: "She laughed. Short. At herself." },
        { s: 'kim-mom', f: 'neutral', t: "Mrs. Oka says it's good for me. Waiting. She says I should practice. She says a mother who never waits misses half of everything. She's probably right. She's annoyingly right about most things, that woman. She knew how I take my tea." },
        { n: "The back of Solar's neck went cold. All of it, at once, from the hairline down, the way it went cold on the dorm stairs when the hour came." },
        { n: "She didn't know why. It was a nice thing. A landlady telling a mother to slow down. It was the nicest thing in the world, and every hair on her arms had stood up, and she sat very still on the step so her mother wouldn't see them." },
        { s: 'kim-dad', f: 'happy', t: "There you are! Both of you! I've been up and down twice. Soyeon, you said the top. This isn't the top. There's a top above the top." },
        { n: "Her father came up the last steps out of breath, in his fleece, with two cans of vending-machine coffee and Solar's school bag, which she'd left at the dorm, which he'd fetched, for reasons he didn't explain. He gave everyone a coffee. He sat down on Solar's other side with a groan." },
        { s: 'kim-dad', f: 'happy', t: "Give me your phone, Solar-ya. The red one. The funny one. I want a picture. The two of you. On the step. With the lanterns." },
        { s: 'kim-mom', f: 'neutral', t: "No." },
        { s: 'kim-dad', f: 'happy', t: "Yes. One. I don't have the camcorder. I always have the camcorder. Every New Year. I've got eighteen New Years of the two of you on tape and you hate every one." },
        { n: "So Solar gave him the phone. The dark red flip phone she'd woken up holding in April, that nobody else in the household had, that took pictures through a lens the size of a lentil. Her father held it out at arm's length and squinted at the little screen and backed down two steps to get them both in, and her mother sat bolt upright beside her with the planner on her knee and refused, absolutely, to smile." },
        { s: 'kim-dad', f: 'neutral', t: "Soyeon. Smile." },
        { s: 'kim-mom', f: 'neutral', t: "I am smiling." },
        { s: 'kim-dad', f: 'neutral', t: "That's your bank face." },
        { n: "And at the very last second, as his thumb went down, her mother leaned in. Sideways. Her shoulder into Solar's shoulder, her head tipping an inch toward her daughter's, and her mouth went, despite everything, despite herself, at one corner." },
        { flag: 'eqx-kim-photo' },
        // CG: eqx-kim-step — a small dark-red flip phone's screen held up at the bottom of lantern-lit shrine steps at dusk, on it a girl and her mother sitting close on the top step, the mother upright with a planner on her knee, just beginning to lean in and smile.
        { n: "He brought the phone back up the steps and showed them. The little screen. The two of them on the top step in the lantern light, grainy, a little blurred at the edge from his hand: Solar looking at the camera, and her mother leaning in, beginning to smile, her face turned a little toward her daughter, both of them facing him." },
        { s: 'kim-dad', f: 'happy', t: "*Look* at that. Look at that. Great blessing." },
        { s: 'kim-mom', f: 'neutral', t: "Delete it." },
        { s: 'kim-dad', f: 'happy', t: "I will never delete it. I'll get it printed. I'll put it on the fridge at the boarding house." },
        { n: "Her mother took the cat planner off Solar's knee. She opened it to the twenty-third, a week ahead, a Thursday, and took the pen, and wrote in it herself, in her own blunt square hand, pressing hard, in the format of every line above it." },
        { n: "*Thurs. 23. Moon. Park. Home by 9. I'll check.*" },
        { n: "She gave the planner back. She closed Solar's fingers round it." },
        { s: 'kim-mom', f: 'neutral', t: "Home by nine. Not a minute after. I'll be standing at that door." },
        { n: "Solar held it. She looked at the date. She didn't know what she was looking for in it." },
        { s: 'solar', f: 'neutral', t: "...Nine. Okay, Mom." },
        { s: 'kim-mom', f: 'neutral', t: "Mm. Don't lose it. It was the only one with any pages left that wasn't a rabbit." },
        { n: "She stood up and went ahead down the steps, as she always did, into the lantern light, and at the bottom, under the torii, turned round, and folded her arms, and waited." }
      ] }
    ] },

    { after: '10/13', title: '3: don’t wait up', place: 'Naganaki Shrine · Grounds', time: 'Evening', music: 'tender', scene: [
      { bg: 'naganaki-shrine-autumn' },
      { ifEvent: 'eqx-1122', then: [
        // Played after the mothers are brought back: she asked him to hang a plaque for her.
        { n: "November at Naganaki Shrine, the maples bare over the path, frost on the water basin's lip in the evening. Her father was at the rack of wooden prayer plaques in his fleece and a scarf someone had wound round him twice, with two plaques in his hand." },
        { s: 'kim-dad', f: 'neutral', t: "She asked me to hang one for her. She can't come out after dark yet. She sits up in the lamp light with her back to the wall. I sit on the floor. We're very comfortable. She says I snore. I say I'm on guard." },
        { s: 'kim-dad', f: 'neutral', t: "She wrote it herself. She wouldn't let me read it. Then she gave it to me and turned it over so I could." },
        { n: "He turned it over now, for Solar. Her mother's blunt square hand, in marker, smaller than it used to be, as if she'd had to think about every stroke." },
        { n: "*Where was I.*" },
        { n: "No question mark. Her mother never used question marks on things she wanted answered." },
        { s: 'kim-dad', f: 'sad', t: "She doesn't remember. Any of it. The park. The bridge. The two months. She remembers the long table and then she remembers the hospital in Tatsumi, and a nurse with cold hands, and in between there's nothing, and she hates it, Solar-ya. She hates it more than anything that happened in it. She hates not having it written down." },
        { s: 'kim-dad', f: 'neutral', t: "And she doesn't remember the story. The tiger one. The one she did the voice for. She asked me if she ever told it to you. I said every night. She didn't believe me." },
        { choose: [
          { t: "(Hang it for her. Facing out.)", notes: 3, then: [
            { n: "She took it from him and hung it on the rack herself, on a hook at the front, facing out, the way her mother would have wanted it, where anybody walking past could read it and wonder." },
            { s: 'kim-dad', f: 'neutral', t: "...She'll ask me if it's facing out. I'll say yes. Good." }
          ] },
          { t: "(Write an answer on the back. The truth. Then hang it.)", notes: 3, then: [
            { n: "She took the marker from him. She turned the plaque over and wrote on the back, under nothing, in her own hand, in Korean, small: *With us. Underneath. We came and got you. Home by 9.*" },
            { n: "Her father read it upside down. He didn't say anything. He took the plaque from her, gently, and hung it on the rack with that side out, and stood looking at it for a long time with his hands in his fleece pockets." }
          ] },
          { t: "(Give it back to him. She should hang it herself, when she can.)", notes: 2, then: [
            { n: "She closed his fingers round it. He looked at it, and at her, and nodded, slowly, and put it inside his fleece against his chest, where it made a square shape over his heart." },
            { s: 'kim-dad', f: 'neutral', t: "When she can. Yes. She'll want to read all the other ones first anyway." }
          ] }
        ] },
        { s: 'kim-dad', f: 'neutral', t: "I'm writing one too. Can you read me the rules? I used to know them. She used to read them to me." },
        { n: "So she read him the rules, by the rack, in the frost, every word, and he wrote his plaque the way they said, and hung it beside her mother's, and wouldn't let Solar see it. On the way down he took the steps very slowly, and at the bottom he stopped under the torii and looked back up the path, and said, to nobody, cheerfully, *what took you so long*, and walked her home." }
      ], else: [
        { n: "Her father was reading every sign." },
        { n: "October had come down on Naganaki Shrine all at once. The maples over the path had gone red in a week and the wind off the sea was taking them, a few at a time, so that they came down through the lantern light as the lanterns came on, slowly, turning. The air smelled of cold stone and woodsmoke and something sweet from the amulet stall where the old woman was roasting gingko nuts in a pan." },
        { n: "And her father, in his gray fleece with the collar up, with his reading glasses on the end of his nose, was standing in front of the board at the bottom of the steps with the shrine's history on it, reading it. Out loud. Under his breath, in Korean, every word, his finger moving along under the lines." },
        { n: "He had never read a sign in his life. In every museum and temple and rest stop of every holiday in that life, her mother had read every sign, and her father had stood behind her eating something and reading none." },
        { n: "He finished the board. He moved to the water basin and read the placard about which hand to wash first. He washed them in the order it said. Then he saw Solar on the path, and his whole face went up at once, the way it did." },
        { s: 'kim-dad', f: 'happy', t: "Solar-ya! I'm doing the signs. Look at me. Every one. Your mother would faint." },
        { s: 'kim-dad', f: 'neutral', t: "I come Wednesdays and Saturdays. Her days. I do them all, top to bottom. I'm writing them down for her. So she doesn't have to do them again when she's back. She hates to miss a sign." },
        { n: "He had a notebook in his fleece pocket, a cheap one, the corners gone soft. Pages of it. The shrine's history, the rules for the fortunes, the laminated notice about the crows, copied out slowly in his round careful Korean, with notes in the margins. *She'd disagree with this.* *Ask her.*" },
        { n: "He had her car keys in his other hand. He hadn't put them down, Jungwon had told Solar, since the twenty-fourth. He turned them over and over without looking at them, the little enamel Samoyed with its chipped ear going round and round between his fingers." },
        { ifEvent: 'eqx-fathers-go', then: [
          { s: 'kim-dad', f: 'neutral', t: "I've stopped the stations. I told you. I'm done with exits. She's not ahead. She was never ahead." },
          { ifEvent: 'eqx-1023', then: [
            { s: 'kim-dad', f: 'serious', t: "I saw. On those steps. Going down. I saw the vest. I know whose vest. Your mother had that vest for eleven years, I bought it in a sale, she said it made her look like a mailbox." },
            { s: 'kim-dad', f: 'neutral', t: "So I come and read the signs. I don't know what else to do with Wednesdays. I'm not a man who knows what to do with a Wednesday. She always did that." }
          ] }
        ], else: [
          { s: 'kim-dad', f: 'neutral', t: "Nineteen stations so far. Today was nineteen. A little one, with a noodle stand by the exit. Jungwon keeps the list. I did the exits by day and now I do the signs by night. Very busy man." },
          { s: 'kim-dad', f: 'happy', t: "She'll be furious. She'll say a hundred and twelve stations, Jaeseok, honestly, and you've read the *crow* notice?" }
        ] },
        { choose: [
          { t: "Read me one, Appa. Your favorite.", notes: 3, then: [
            { s: 'kim-dad', f: 'happy', t: "My favorite!" },
            { n: "He flipped through the notebook. He found it. He cleared his throat, and read to her, in the lantern light, with enormous seriousness, the entire rule for the wooden prayer plaques: where to buy one, how much, which side to write on, not to write anything rude, to hang it with the string facing in." },
            { s: 'kim-dad', f: 'neutral', t: "...That's the one. *Nothing rude.* She'd like that. She thinks most things are rude." }
          ] },
          { t: "(Read the next one with him. Out loud. Together.)", notes: 3, then: [
            { n: "She came and stood beside him at the next sign, the rules for the fortunes, and read it aloud with him, in two languages at once, him in Korean, slow, and her in the Japanese on the board, a beat ahead, so that it came out of the two of them like a round, and the old woman at the gingko pan looked up and smiled with no teeth." }
          ] },
          { t: "You don't have to read them all, Appa.", notes: 2, then: [
            { s: 'kim-dad', f: 'neutral', t: "No. I know. Nobody makes me." },
            { s: 'kim-dad', f: 'sad', t: "That's what's wrong with it. Nobody's making me. She always made me. I'd stand behind her and complain. I liked it. I didn't know I liked it. I'm a very slow learner, Solar-ya." }
          ] }
        ] },
        { place: 'Naganaki Shrine · Grounds', time: 'Evening', bg: 'naganaki-amulet-stall', music: 'tender', soft: true },
        { n: "He wanted to write a plaque. That was why he'd been reading the rule so carefully. He bought one from the old woman at the stall, a small wooden board shaped like a house, with a horse painted on the front, five hundred yen, and a marker, and stood at the little writing shelf by the rack with the marker uncapped and his glasses on, looking at the blank side." },
        { s: 'kim-dad', f: 'neutral', t: "What do I write? For her. You're good with words. You're the vice president." },
        { s: 'kim-dad', f: 'flustered', t: "...Sorry. Sorry. You don't like that." },
        { choose: [
          { t: "Write: come home.", notes: 2, then: [
            { s: 'kim-dad', f: 'neutral', t: "Come home. Yes. Plain. She likes plain." },
            { n: "He wrote it. Slowly. In big round letters that took up the whole board. *Come home, Soyeon.* Then, after a second, smaller, in the corner, so she'd know who it was from: *(J.)*" }
          ] },
          { t: "Write what she'd say. What took you so long.", notes: 3, then: [
            { n: "He laughed. It came out of him so suddenly that the old woman at the stall dropped a gingko nut." },
            { s: 'kim-dad', f: 'happy', t: "*What took you so long.* Yes. Yes. That's it. Then when she reads it she'll be annoyed, and she'll say *that's my line*, and she'll be right." },
            { n: "He wrote it, in big round letters, grinning, and then sat looking at it for a while with the grin still on his face and something else underneath it, and didn't move to hang it." }
          ] },
          { t: "(Let him write it himself. Don't look.)", notes: 3, then: [
            { n: "She turned away and looked at the trees while he wrote. It took him a long time. She heard the marker squeak, and stop, and squeak. When he hung it on the rack he did it with the writing facing in, the way the rule said, so nobody would see." },
            { s: 'kim-dad', f: 'neutral', t: "...Private. Between me and her. And the gods, I suppose. They can read Korean, can they? Here?" },
            { s: 'solar', f: 'neutral', t: "Everybody reads everything here." },
            { s: 'kim-dad', f: 'neutral', t: "Good. Then they'll know what to do." }
          ] }
        ] },
        { place: 'Naganaki Shrine · The Plaque Rack', time: 'Evening', bg: 'naganaki-shrine-night', music: 'eerie', soft: true },
        // BG: naganaki-ema-rack-night — a wooden rack crowded with hundreds of small house-shaped prayer plaques at a shrine at night, red maple leaves caught among them, one paper lantern lighting them from below, the strings knocking softly in the wind.
        { n: "The rack was by the stall: a long wooden frame with hooks, and on the hooks hundreds of plaques, layered three and four deep, all the little wooden houses with their horses, knocking together softly in the wind off the sea with a sound like someone tapping a pencil on a desk. Wishes in every hand. Exams, babies, a job in Osaka, a cat that had got out. Red leaves caught between them." },
        { n: "Her father went along it looking for a hook. Solar went the other way, to help, holding the lantern the old woman had lent them, low, so its light came up from under the plaques." },
        { n: "That was how she saw it." },
        { n: "Halfway along. At the front, at eye height, on its own hook. New; the wood was pale, the string still white, not yet gone gray in the weather like the others. Facing out." },
        { n: "Korean. Black marker. A blunt square hand, pressed so hard into the soft wood that the letters had sunk." },
        { n: "*Rice in the cooker. Don't wait up. — Mom*" },
        { n: "Solar stood very still with the lantern in her hand." },
        { n: "She knew it. She'd read it before, on the other side of the world, on a sticky note on a steel door. On a Saturday night in June in the Well, at a door that was the Kims' front door, with the doorbell lit, she'd read it on a yellow square of paper stuck at eye height, and two boys behind her had both known that kitchen. She'd read it a hundred times on the real one at home. Her mother wrote it on every note she ever left, word for word, so often it had stopped being words." },
        { n: "The wood was pale. The marker hadn't faded. It hadn't rained since Tuesday." },
        { n: "Somebody had hung it this week." },
        { n: "Her father was ten plaques along with his own in his hand, holding it up to a hook, saying *here, this one's free, is this one facing the right way, Solar-ya, you'll have to tell me*, and he hadn't seen. He was looking at his own. In a second he'd look up and along the rack for her, the way he always looked for where she was." },
        { choose: [
          { t: "(Turn it to face the wall before he looks.)", notes: 2, flag: 'eqx-kim-ema-turned', then: [
            { n: "She reached out and turned it. Just turned it, on its string, so the blank side faced out and the words faced the rack, among the hundreds, where nobody would read them." },
            { n: "The wood was warm. Not lantern-warm. Warm the way a chair is warm. She took her hand away and wiped it on her skirt without meaning to, twice, and then once more." },
            { s: 'kim-dad', f: 'neutral', t: "Solar-ya? Is this facing the right way?" },
            { s: 'solar', f: 'neutral', t: "It's right, Appa. It's perfect." }
          ] },
          { t: "(Take it down. Put it in your pocket. Keep it.)", notes: 3, flag: 'eqx-kim-ema-kept', then: [
            { n: "She lifted it off the hook. It came off too easily, as if the string had only been waiting to be lifted. She put it in her coat pocket, against her hip, where she'd know if anything went near it." },
            { n: "It was warm through the lining. Not lantern-warm. It stayed warm all the way home. When she took it out that night in her room with the light on, it was cold, and the marker had gone gray, and the wood was weathered as if it had hung out there for years." },
            { s: 'kim-dad', f: 'neutral', t: "Solar-ya? Is this facing the right way?" },
            { s: 'solar', f: 'neutral', t: "It's right, Appa. It's perfect." }
          ] },
          { t: "Appa. Come and look.", notes: 2, flag: 'eqx-kim-ema-shown', then: [
            { n: "He came. He came along the rack with his own plaque still in his hand and stood beside her, and she held the lantern up, and he read it." },
            { n: "His face did everything at once. She'd never seen a face do that. It lit and fell and lit, like a bulb going." },
            { s: 'kim-dad', f: 'surprised', t: "...That's her. That's her hand. That's what she writes. That's what she always writes. *Rice in the cooker.* Every note for twenty years." },
            { ifEvent: 'eqx-1023', then: [
              { s: 'kim-dad', f: 'sad', t: "...But she can't have. She's— I saw. On the steps. She's underneath. She can't have come up here and hung—" },
              { n: "He stopped. He looked at it for a long time. He didn't touch it." },
              { s: 'kim-dad', f: 'neutral', t: "...Leave it. Leave it there. Facing out. She'd want it facing out. Whoever wrote it." }
            ], else: [
              { s: 'kim-dad', f: 'happy', t: "She's been here. She's been *here*, Solar-ya, she came this way, she's— she's ahead. I told you. She always goes ahead. And she leaves a note. *Don't wait up.* She always says don't wait up. I always wait up." },
              { n: "He put his hand on it, flat, on the words, the way you'd put your hand on a door to feel if anyone was behind it. Solar watched his hand. The wood was warm under it, she could see that it was, from the way his fingers curled; warm the way a chair is warm. He didn't notice. He was smiling with his whole face." },
              { s: 'kim-dad', f: 'neutral', t: "I'm going to wait up. She'll be so annoyed." }
            ] }
          ] }
        ] },
        { ifFlag: 'eqx-kim-photo', then: [
          { place: 'Naganaki Shrine · Grounds', time: 'Evening', bg: 'naganaki-shrine-night', music: 'night', soft: true },
          { n: "On the top step, afterward, with his plaque hung and the lanterns all lit, her father held out his hand." },
          { s: 'kim-dad', f: 'neutral', t: "Show me the picture. The one on the step. I want to see her face. I've been trying to remember it exactly and I keep getting the nose wrong." },
          { n: "Solar opened the phone. The dark red one, warm from her pocket. She went to the pictures. She knew it before she got there; her thumb knew, it didn't want to press." },
          { n: "The two of them on the top step in the lantern light. Grainy, blurred at the edge from his hand. Solar, looking at the camera." },
          { n: "And beside her, her mother. Turned round. Not leaning in; turned away, all the way, her back to the lens, as if at the last second she'd heard her name called from the trees behind them and twisted round on the step to look. Her face was gone. There was only the back of her: the blunt black hair, the navy vest she hadn't been wearing that night, and at the small of her back, tied over the vest, the strings of a white apron in a hard double knot." },
          { n: "The knot sat on a line. A thin dark line, straight down the vest from the collar. On a screen the size of a matchbox, in the grain, it could have been anything. A crease. A flaw in the lens." },
          { s: 'kim-dad', f: 'neutral', t: "...Oh. She turned round." },
          { s: 'kim-dad', f: 'happy', t: "She always does that. Every photo. The last second. Eighteen New Years and she turned round in every one. I never got her face. I always thought I'd get it the next year." },
          { n: "He didn't see the line. Solar watched him not see it. Or it wasn't there for him; she couldn't tell, and she would lie awake that night trying to decide which was worse." },
          { s: 'kim-dad', f: 'neutral', t: "Send it to me. On the funny phone. Can it send things? I'll keep it anyway. She'll hate it. That's how I'll know it's her." },
          // CG: eqx-turned-round — a dark-red flip phone's tiny screen in a man's large hand at night under shrine lanterns; on it a grainy photo of a girl on a step beside a woman turned completely away from the camera, a navy vest, white apron strings knotted at the small of her back over a thin dark line.
          { n: "She closed the phone. She said it wouldn't send. It was true; nothing ever sent from it but the things it chose. He nodded, unsurprised, as if that were how all phones worked for him." }
        ] },
        { place: 'Naganaki Shrine · Steps', time: 'Night', bg: 'naganaki-shrine-night', music: 'night', soft: true },
        { n: "He walked her down. Slowly. One step at a time, his hand on the rail and her arm through his, the leaves coming down past them through the lantern light." },
        { s: 'kim-dad', f: 'neutral', t: "I've still got it, you know. The paper. From when I met her." },
        { n: "He took his wallet out on the step, halfway down, and out of the wallet, from behind his ID card, a slip of paper so old it had gone soft as cloth. A receipt, from a coffee shop that had closed before Solar was born. On the back, in pencil, in a young man's round hand: *Han Soyeon.*" },
        { s: 'kim-dad', f: 'neutral', t: "She told me her name like a warning label. Like I should write it down. So I did. Right there at the table, on the receipt. She watched me do it. She said, *you're actually writing it down*. I said, you told me to." },
        { s: 'kim-dad', f: 'happy', t: "She said nobody had ever done what she told them before. I think that's why she married me. I'm very good at being told." },
        { n: "He put it back behind the ID card, carefully, the way you'd put a pressed flower back in a book." },
        { s: 'kim-dad', f: 'neutral', t: "...I'd like to be told something. Anything. I'd like her to tell me I parked wrong." },
        { n: "At the bottom of the steps he stopped, as he always stopped now, and turned, and looked back up the path at the lanterns and the falling leaves and the rack of plaques at the top knocking softly in the wind, the way you'd look back for someone who always went ahead and was always waiting at the bottom." },
        { n: "There was nobody at the bottom. He knew. He put his hands in his fleece pockets, the keys in one, and looked at the empty gravel under the torii where she'd have been standing with her arms folded." },
        { s: 'kim-dad', f: 'neutral', t: "Tell the dog I'm coming. That's what I always say. When I'm away. *Tell the dog I'm coming, he likes to know.*" },
        { s: 'kim-dad', f: 'sad', t: "I don't know who's walking him. I think about it every night. Her sister, maybe. Somebody. He'll be on your bed. He'll have counted." },
        { n: "He said it to the gravel. Then he took Solar's arm again, cheerfully, and walked her home along the river street, past the boarding house gate with its lamp and the persimmon tree heavy and orange over the wall, where someone in the kitchen was humming, and he didn't look at the gate, and she didn't either, all the way up the hill." }
      ] }
    ] }
  ]
});
}
