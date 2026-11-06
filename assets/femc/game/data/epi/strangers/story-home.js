/* The strangers epilogue, story-home.js: three house story events and their texts. The Nov 5-6 2026 expansion pass, writer 1.
   Merges into FEMC_EPI_WORLDS.strangers (events, texts); never overwrites. Route colour is { ifEpiRoute } inside shared scenes.

   Events (R.events)
     epi-s-jammed   2/28 early, consumes    jammed: the kitchen the morning after the market; the story has three versions; no
                                            word for it in Mrs. Bang's kitchen; the Saturday plant. Kitchen · Morning.
     epi-s-twenty   3/2  evening, consumes  twenty: Pyo's birthday table in the Lee kitchen; the whole house, Riki over the wall,
                                            Jungwon on time; the karaoke app; one song from Appa; the envelope; a late beat by
                                            route (the back step / the gate / the seventh stair). Kitchen · Evening.
     epi-s-salt     3/6  after, consumes    salt: the bath Mrs. Bang ran, Yunjin on the lid with the drama; the bowl from Auntie
                                            Song. Her Room · Daytime.

   Texts (R.texts; ids epi-s-tx-*)
     epi-s-tx-hc-sat        3/1  evening  haechan  events epi-s-jammed
     epi-s-tx-jw-pyo        3/1  late     jungwon  events epi-s-jammed
     epi-s-tx-yj-storeroom  3/2  early    yunjin   events epi-s-jammed
     epi-s-tx-jay-tin       3/3  after    jay      events epi-s-twenty
     epi-s-tx-yj-masks      3/5  after    yunjin   events epi-s-dust
     epi-s-tx-yj-pickle     3/6  late     yunjin   events epi-s-salt
     epi-s-tx-eomma-dust    3/7  early    eomma    events epi-s-salt
     epi-s-tx-niki-banana   3/12 after    niki     events epi-s-twenty

   Flags set (local; nobody else needs them): epi-s-twenty-told (twenty: she translates Auntie Song truthfully) /
     epi-s-twenty-covered (twenty: she covers for Pyo).
   Flags read: none. ifEpiRoute read: jammed (who comes in for coffee; the lacquer box), twenty (the late beat and its bond).
   Nov 6 pass edit: twenty gains the committee's voice message at eight (Chaewon, the four girls by phone).
   Glitch lines: { strain: 1 } once in twenty (the fever to Mrs. Park); { near: true } once in twenty (a silent beat, both boys).
     No glitch ids.
   Bonds: twenty, by route (haechan / jungwon / appa), one per scene; salt, yunjin +1 (one option).
   Music: epi-s-house (jammed), epi-s-evening (twenty), then epi-s-step / epi-s-jungwon / epi-s-family by route at the late
     beat; epi-s-yunjin (salt).

   Inventions for Kat to confirm (small, structural)
   - The three versions of the market story: Chinatown's (a jealous husband, a gun from Qingdao), the petrol station's on the
     harbor road (a drunk with a starter pistol from a school sports day), Pyo's (he meant to throw the crate). Mrs. Bang bans
     the word from her kitchen ("Leave it on the step with your boots"); everyone says "the thing".
   - On the jungwon route a two-tier black lacquer box of yakgwa comes up from the Yang kitchen with a card to Mrs. Bang in
     Jungwon's hand; she keeps the card in her apron pocket. Mrs. Bang invites him because he bowed to her at the market; the
     invitation goes through Minseok at the gate.
   - Pyo's birthday is Saturday 3/2; he told only Auntie Song; she gives it away herself in three words of Korean.
   - Gifts: Jungwon a Japanese kitchen knife in a dark bojagi, and the coin back (Pyo pays a hundred won); Haechan a lottery
     ticket; Yunjin a cat-shaped night-light (for the storeroom); Solar a pair of good rubber boots like Auntie Song's; Mr. Oh
     a tie on himself; Minseok a phone strap. Auntie Song's longevity noodles, unbroken. Jay's cake (a plain sponge with
     strawberries, in Mrs. Moon's good tin, which has to go back); Jay's note on a strip of order pad.
   - Pyo buys one flounder every Saturday from the flounder woman's daughter (the freezer is full of flounder); Auntie Song
     outs it in Mandarin. Pyo went back to the market alone that morning.
   - Yunjin's karaoke app scores out of a hundred: Haechan 97 (he does too much on purpose), Jungwon 100 (a girl-group song,
     no hand movements). Appa comes down for one song with Haechan (the hometown-station trot from fam-trot, unnamed).
   - Riki says "omedetou" before he can stop himself.
   - Eomma's envelope: his name on the front in her hand; nobody sees inside.
   - Salt: Mrs. Bang throws a fistful of coarse grey kimchi salt into the bath (salt for bad luck); the drama is the one from
     fam-yunjin (the blind heiress, the con man brother). Auntie Song sends up ginger boiled with brown sugar; Pyo carries it
     and won't come past the door.
*/
(() => {
  const R = ((window.FEMC_EPI_WORLDS ||= {}).strangers ||= {});
  (R.events ||= []).push(

  // ───────────────────────────── 2/28, morning: jammed ─────────────────────────────
  { id: 'epi-s-jammed', date: '2/28', slot: 'early', consumes: true, title: 'jammed', place: 'Incheon · The Lee House · Kitchen', time: 'Morning', scene: [
    { music: 'epi-s-house' },
    { n: "The frost had come down hard in the night, the clear kind that came with no wind at all and left every surface in the garden furred white and the gravel on the terraces frozen into one piece, and when Solar came down the back stairs at seven the window over the sink had grown ferns up the inside of the glass and Mrs. Bang was out on the back step in her coat over her apron, breaking the ice on the koi bucket with the handle of a wooden spoon." },
    { n: "Three blows. It was always three. The ice went in a star and Mr. and Mrs. Kim came up under it slowly, orange and white, and looked at the spoon as if it owed them money, and Mrs. Bang said something to them in the voice she never used on people and came back in and shut the door with her hip. The calendar by the rice cooker said 44 in red pen in the corner of the square. Somebody had turned it already." },
    { n: "The kitchen was full. That was the first wrong thing, at seven on a Thursday. The second was what it was full of, which was a story, the story from the fish market, the one she'd heard settling round the eel tanks yesterday afternoon like silt, and it had come back up the hill in the night and let itself in and grown." },
    { n: "Pyo was at the long table in yesterday's sweater with his hair flat on one side, and he hadn't slept. She could see it in the skin under his eyes, gone the color of a bruised pear, and in his hands round a cup of barley tea he wasn't drinking, and in the way he was talking to Minseok, who'd come in off the gate with his coat on and frost on his shoulders and only wanted rice." },
    { s: 'pyo', f: 'serious', t: "He looked right at me, hyung. Right at me. And I thought, if he turns round, I'm throwing it. The whole crate. Eleven kilos of flounder, in the face." },
    { s: 'minseok', f: 'neutral', t: "You dropped it." },
    { s: 'pyo', f: 'flustered', t: "I *deployed* it." },
    { n: "Minseok ate a mouthful of rice standing up and looked at him with enormous patience, the way you'd look at a dog explaining that it had meant to fall in the pond." },
    { s: 'pyo', f: 'serious', t: "And then when he pulled the g—" },
    { s: 'mrsbang', f: 'serious', t: "Pyo." },
    { n: "Mrs. Bang hadn't turned round from the stove. She didn't have to. The ladle in her hand stopped over the pot and stayed there, and the whole kitchen heard it stop." },
    { s: 'mrsbang', f: 'serious', t: "Not in my kitchen. That word doesn't come past the door. You leave it on the step with your boots." },
    { s: 'pyo', f: 'sad', t: "...When he pulled the thing." },
    { s: 'mrsbang', f: 'neutral', t: "Thank you. Eat." },
    { n: "She put a bowl in front of him. Soybean paste soup, rice, a fried egg with the edges gone to lace, the way she made them for people she'd been frightened for. She put one in front of Minseok, who sat down, finally, because you didn't eat Mrs. Bang's egg standing. She put one in front of Solar without a word, and her hand went past Solar's shoulder on its way back to the stove and stopped there for half a second, flat, warm, through the cardigan, and went on." },
    { n: "Solar ate the egg. She didn't say anything. She'd been there. There was nothing in the room she could add to it that the room would want." },

    // Auntie Song, the first bus.
    { n: "The back door went at a quarter past and the cold came in round five feet of Auntie Song in rubber boots, off the first bus from Chinatown with a plastic bag of something in each hand and her mouth already open." },
    { s: 'auntie', f: 'serious', t: "*In Chinatown it was a husband.*" },
    { n: "She said it to the room in Mandarin, as if the room had asked, and put the bags on the prep table and began to unpack them without taking her coat off, spring onions, a block of tofu in a bag of water, a newspaper parcel that smelled of dried shrimp." },
    { s: 'auntie', f: 'serious', t: "*A jealous husband. The flounder woman's. He came for the eel man, everyone knows about the eel man, and the gun was from Qingdao, my cousin's neighbor's boy sells them off a boat, they're junk, every one, they jam if you look at them. The whole of Chinatown knew by nine o'clock. The man at the bakery knew before I did. The man at the bakery.*" },
    { s: 'mrsbang', f: 'neutral', t: "What's she saying." },
    { n: "Everybody looked at Solar. They always did, when Auntie Song talked. She'd been the house's interpreter since she was nine years old and standing on a crate at the old woman's elbow, and she put her spoon down." },
    { s: 'solar', f: 'neutral', t: "Chinatown has it as a jealous husband. The flounder woman's." },
    { n: "Pyo's ears went red." },
    { n: "Not his face. Just his ears, both of them, slowly, from the lobes up, the way a stove ring goes red, and he looked down into his soup as if there might be something written in it. Auntie Song saw. Auntie Song saw everything that happened within three meters of a stove. She didn't say anything about it, which from Auntie Song was a long speech, and filed it, Solar could see her file it, somewhere behind the tofu." },
    { n: "Mr. Oh had come in behind her. Nobody had heard him; nobody ever did. He was at the far corner of the table with his instant coffee held in both hands at ten and two, and his menthol aftershave had come in with him and was sitting over the dried shrimp like a cold front." },
    { s: 'mroh', f: 'neutral', t: "The petrol station on the harbor road says it was a starter pistol." },
    { n: "Everybody turned. Mr. Oh did not, as a rule, report." },
    { s: 'mroh', f: 'neutral', t: "From a school sports day. The man was drunk." },
    { s: 'minseok', f: 'surprised', t: "It was ten in the morning." },
    { s: 'mroh', f: 'neutral', t: "That's what I said. They said, so he was very drunk." },
    { n: "He drank his coffee. That seemed to be the end of his contribution, and he looked out of the window at the frost on the persimmon tree as if he'd said too much and would be a week recovering." },
    { n: "Three versions, then. A husband, a sports day, a boy with eleven kilos of fish and a plan. By tonight there'd be a fourth, and by Sunday the market would have a man with a cheap gun who'd been unlucky, and that would be that, the whole harbor agreeing on it the way a beach agrees on the shape of the tide line. It jammed. Lucky." },
    { n: "Solar sat with her hands round her cup and let it be built round her. The hammer had gone all the way down. She'd watched it. She'd watched a gull hang in the air over a stack of squid boxes with its wings open, not falling, and she'd counted twelve men who weren't moving and two who were, and she drank her barley tea, and it was very hot, and she didn't say a single word about any of it, because there were three people in Incheon who knew it hadn't jammed and two of them weren't in this kitchen yet." },

    // The coffee.
    { ifEpiRoute: ['haechan', 'family'], then: [
      { n: "At half past seven Haechan came in for coffee." },
      { n: "He came in the back way with frost on the collar of the black jacket and his hair wrecked flat on one side by the annex pillow, and he came in loud, already talking, the door still open behind him and the cold pouring in round his boots." },
      { s: 'haechan', f: 'happy', t: "Did you hear? Did everybody hear? Out of the whole fish market, Mrs. Bang. Three hundred men. Two hundred eels. And he walks past all of them and picks *me*. That's taste. You can't teach that." },
      { s: 'mrsbang', f: 'serious', t: "Shut the door." },
      { s: 'haechan', f: 'happy', t: "I was so scared I swallowed my gum. Whole. It's still in there. They say seven years. I'll be dead before the wedding, and the last thing I'll have eaten is cinnamon." },
      { n: "The kitchen laughed. Minseok laughed into his rice. Pyo laughed much too hard, the way you laugh when you've been let off something, and Haechan pointed at him with the coffee cup and said Pyo was the real hero, Pyo had thrown a whole crate of fish at a man, and Pyo went red to the collar and didn't correct him." },
      { n: "He kept going. That was the thing. He did the man's sneakers. He did his own face, looking at the eels. He did four minutes on what the flounder woman had screamed and how long she'd been holding the note, and he did all of it at the top of his voice, standing by the stove with the coffee, never once sitting down, never once looking at the end of the table where she was." },
      { n: "She knew him. She'd known him since she was fourteen. He talked more when he was lying, and the louder he got the bigger the lie was, and he'd never been this loud at seven in the morning in his life. That was how she knew. Not from anything he said. From how much of it there was, and how none of it came anywhere near her." }
    ], else: [
      { n: "At half past seven Haechan came in for coffee." },
      { n: "He came in the back way with frost on the collar of the black jacket and poured himself a cup from the pot without asking and stood at the window with it, looking up the garden at the gate, where there was nobody, and for a moment the kitchen waited for him to start, because he always started." },
      { s: 'haechan', f: 'neutral', t: "Shame about the heir." },
      { n: "He said it to the window. Not loud." },
      { s: 'haechan', f: 'neutral', t: "First useful thing anybody's tried to do to him in years, and it jams." },
      { s: 'mrsbang', f: 'serious', t: "Haechan." },
      { n: "He didn't say anything else. That was the wrong part. He didn't say anything else at all, not a joke, not a song, not a word about Pyo or the eels, he stood at the window with the coffee going cold in his hand and looked at the gate, and his jaw moved on gum that wasn't there." },
      { n: "Minseok came back in from the gate at a quarter to eight with a lacquer box." },
      { n: "Two tiers, black, a band of red round the lid, the kind of box you saw at Seollal and at funerals and not otherwise, and he carried it in front of him in both hands like something that might go off. Yakgwa, when Mrs. Bang lifted the lid. Honey and ginger and sesame, laid in rows. And on top of the rows, a card, cream, folded once, with her name on the outside in a hand so neat it looked printed." },
      { n: "Mrs. Bang read it. Then she read it again. Then she folded it and put it in the pocket of her apron, and patted the pocket, and didn't tell anybody what it said, and Solar didn't need her to. She'd have bet the jade ring it began with *Mrs. Bang* and ended with his full name, and had *thank you* in the middle of it, and *I'm sorry you were frightened*, and not one word about himself." },
      { n: "Haechan didn't turn round from the window. He didn't look at the box. He didn't need to look at it to know exactly whose kitchen it had come from and who had written on the card." }
    ] },
    { s: 'mrsbang', f: 'neutral', t: "That boy bowed to me." },
    { n: "She said it to the stove, mostly. The whole kitchen heard." },
    { s: 'mrsbang', f: 'neutral', t: "In a fish market. With the whole place screaming and fish all over the floor. He walked the whole length of it and he bowed to me, from here, properly, and asked was I hurt. Nobody's bowed to me in a fish market in my life." },
    { n: "Nobody answered that. It sat on the table among the bowls. Then Pyo, who had been quiet for almost two minutes, which was a record for the morning, put his spoon down and took a breath." },
    { s: 'pyo', f: 'serious', t: "And then I stepped in front of Mrs. Bang—" },
    { s: 'mrsbang', f: 'serious', t: "You stepped on my foot." },
    { s: 'pyo', f: 'flustered', t: "In *front* of it, though. Agasshi. Agasshi, you were there. Tell them." },
    { n: "Everybody looked at her again. Mrs. Bang hadn't sat down. She hadn't, Solar realized, sat down since the market; not at dinner, not after, not now, she'd been at the stove and the sink and the step and the stove, and her hands were very busy, and they'd been very busy for eighteen hours." },
    { choose: [
      { t: "He was going to throw it. I saw.", stat: { charm: 1 }, then: [
        { s: 'solar', f: 'neutral', t: "He was going to throw it. I saw him get his grip." },
        { n: "Pyo looked at her as if she'd hung a medal on him. He sat up so straight in his chair it creaked." },
        { s: 'pyo', f: 'happy', t: "*Thank* you." },
        { n: "Mrs. Bang looked at her for a long moment over the pot. She knew. Of course she knew, she'd been standing right there with her hand in the air. Then she looked at Pyo's face, which had a little color in it for the first time since yesterday, and turned back to the stove, and let it stand." }
      ] },
      { t: "You did fine. Dropping it was right.", stat: { courage: 1 }, then: [
        { s: 'solar', f: 'neutral', t: "You did fine, Pyo. You dropped it. That was right." },
        { s: 'pyo', f: 'surprised', t: "...It was?" },
        { s: 'solar', f: 'neutral', t: "Everybody who didn't drop something was standing still." },
        { n: "He thought about that. She watched him think about it, the bruised skin under his eyes and the cup in his hands, and something in his shoulders came down half an inch, the first time it had come down since the eels." },
        { s: 'pyo', f: 'sad', t: "I still didn't sleep." },
        { s: 'solar', f: 'neutral', t: "Nobody slept." }
      ] },
      { t: "(Take the spoon and go out and feed the koi, so Mrs. Bang can sit.)", stat: { kindness: 1 }, then: [
        { n: "She got up and took the tin of fish food off the shelf and the wooden spoon off the counter and went out onto the back step in her socks, into the cold, and knelt by the bucket, and broke the new skin of ice the way Mrs. Bang did, three times, and fed Mr. and Mrs. Kim a pinch each and then a second pinch, which they'd tell nobody about." },
        { n: "When she came back in Mrs. Bang was sitting down. At the end of the long table, in her coat, with a cup of barley tea. Her hands were on the table round the cup, and they were shaking, very slightly, both of them, and when she saw Solar see it she put them under the table, in her lap, and kept them there." },
        { s: 'mrsbang', f: 'neutral', t: "Two pinches. I saw that." },
        { s: 'solar', f: 'happy', t: "They'll tell nobody." }
      ] }
    ] },

    // The plant.
    { n: "Auntie Song came round the end of the table with the tofu on a board and stopped by Solar's chair and bent, under the noise, the way she bent to taste a stock." },
    { s: 'auntie', f: 'neutral', t: "*Leave him his story, little moon. He's twenty on Saturday. A boy needs a good story to be twenty with.*" },
    { s: 'solar', f: 'surprised', t: "*Saturday?*" },
    { s: 'auntie', f: 'serious', t: "*He told me. Only me. Nobody's supposed to know. Don't you dare.*" },
    { n: "Then she straightened up, put the tofu down on the prep table, turned round to Mrs. Bang, and held up two fingers." },
    { s: 'auntie', f: 'serious', t: "Saturday. Pyo. Twenty." },
    { n: "Three words of Korean. From Auntie Song, in a kitchen, it was practically a sermon, and it went through the room like a dropped tray. Auntie Song had never in nineteen years kept a secret that was good news. She didn't believe in it. Good news kept, in her opinion, about as well as fish." },
    { s: 'pyo', f: 'surprised', t: "Auntie!" },
    { n: "He'd understood his own name and the word for twenty, and that was all he'd needed. He stood up so fast his chair went over." },
    { s: 'pyo', f: 'flustered', t: "Mrs. Bang, no, please. Nobody has to. I don't want anything. I don't even like birthdays, I've never liked them, I'm not a birthday person—" },
    { s: 'mrsbang', f: 'serious', t: "Seaweed soup." },
    { n: "Mrs. Bang hadn't got up. She was sitting at the end of the table with her cup, and she said it the way she said thirty-nine point four, to the whole room, so that the whole room would know it and say it the same way." },
    { s: 'mrsbang', f: 'serious', t: "Seaweed soup, Saturday morning, at your place, before you've got your shoes on. And Saturday night a table. A proper one. In here. Seven o'clock." },
    { s: 'pyo', f: 'sad', t: "I don't want a table." },
    { s: 'mrsbang', f: 'neutral', t: "Good. Then it'll be a surprise." },
    { n: "Pyo picked his chair up off the floor and sat back down in it and put his face in his hands. Minseok patted him twice on the back, hard, the way you'd burp something. Mr. Oh lifted his coffee half an inch off the table, both hands, ten and two, which from Mr. Oh was a toast." },
    { n: "Solar looked at the calendar. Forty-four, in red. Saturday was two squares along, blank, waiting for its number. Outside the window the frost on the persimmon tree had begun to smoke in the first of the sun, every branch giving off a thin white breath, and down the garden the annex door was shut, and up at the gate there was nobody, and there wouldn't be anybody till eleven." },
    { n: "Pyo lifted his face out of his hands and looked at Mr. Oh, who hadn't heard it yet, and took a breath." },
    { s: 'pyo', f: 'serious', t: "So he looked right at me—" },
    { n: "She let him tell it. She sat at the end of the table and finished her tea and let it jam, again, for Mr. Oh, the whole way through, and she'd tell somebody what really happened later, maybe, on a step, in the dark, in a language nobody in this kitchen spoke. Not now. Now there was soup to plan." }
  ] },

  // ───────────────────────────── 3/2, evening: twenty ─────────────────────────────
  { id: 'epi-s-twenty', date: '3/2', slot: 'evening', consumes: true, title: 'twenty', place: 'Incheon · The Lee House · Kitchen', time: 'Evening', scene: [
    { music: 'epi-s-evening' },
    { n: "The seaweed soup had been the ambush. Pyo had come down the back stairs at six in the morning in his socks, the way he did every morning, and found the kitchen lit and Mrs. Bang at the stove and a bowl at his place at the long table, steaming, dark green, with the beef in it and the sesame oil on the top in coins, before he'd even got his shoes on. He'd stood in the doorway and looked at it. Then he'd sat down and eaten it with his head down, very fast, all of it, without saying a word, and gone out to the step to put his shoes on, and stayed out there a while." },
    { n: "Tonight was the table." },
    { n: "The day had stayed grey from end to end, a low lid of cloud over the whole harbor that never once lifted, and by six it had come down so low the cranes on the fourth quay had their tops in it and their red lights blinking somewhere inside, soft, like something breathing in its sleep. It wasn't cold enough for frost. It was cold enough for the window over the sink to steam from the inside and run, and Mrs. Bang had given up wiping it at half past five." },
    { n: "She'd had the leaf brought through from the dining room. The long table had never been longer. Minseok had carried it, because Haechan had offered and Mrs. Bang had looked at him and said Minseok would do it, and Haechan had said fine, and stood in the doorway giving directions nobody needed, and that had been the first argument of the evening." },
    { n: "Auntie Song had come on the four o'clock bus with a pot of noodles wrapped in a towel inside a bag inside another bag, and she'd unwrapped them on the prep table as if they were a baby. Longevity noodles. One noodle, she'd told Solar in Mandarin, the whole pot, one long one, she'd pulled it herself this morning, and if anybody in this kitchen bit through it before it was in their mouth she would know, and she would remember, and that person would not be getting dumplings on Sunday." },
    { s: 'auntie', f: 'serious', t: "*Tell them.*" },
    { s: 'solar', f: 'neutral', t: "Auntie says don't bite the noodles." },
    { s: 'auntie', f: 'serious', t: "*That's not what I said. Tell them all of it.*" },
    { s: 'solar', f: 'neutral', t: "Auntie says don't bite the noodles or you'll die young and she'll be glad." },
    { s: 'auntie', f: 'happy', t: "*Better.*" },
    { n: "Then the old woman bent, without anybody watching her but Solar, and reached under the prep table, and came up with the cooking soju, the green bottle with the label half gone that had lived under there for as long as Solar had been tall enough to see under there, and put it on the long table in the middle, between the kimchi and the japchae, as if it had always been on the guest list." },

    // The room fills.
    { n: "They came in one at a time, and every one of them made the room louder." },
    { n: "Mr. Oh came in a tie." },
    { n: "Navy, with a small diamond pattern, knotted very tight, very straight, under the collar of the same gray jacket he'd worn to drive her for fourteen years, and he walked in and sat down in his corner of the long table with his hands folded on it and looked at nobody, and the entire kitchen stopped what it was doing and looked at the tie." },
    { s: 'auntie', f: 'happy', t: "*He wore it for the bridge.*" },
    { s: 'yunjin', f: 'surprised', t: "What. What did she say. Sol, what did she say, she's *smiling*, she never smiles, what did she say about Mr. Oh." },
    { s: 'solar', f: 'happy', t: "She says he wore the tie for the woman in the toll booth on the bridge." },
    { s: 'mroh', f: 'neutral', t: "It's a birthday." },
    { s: 'auntie', f: 'happy', t: "*It's a Saturday. She works Saturdays.*" },
    { n: "Solar didn't translate that one. She didn't have to. Mr. Oh's ears had already done it for her, and he reached for the barley tea and poured himself a cup at ten and two and drank it looking at the steamed window, and the kitchen let him have that, out of mercy, for about eight seconds." },
    { n: "Yunjin had appointed herself host. Nobody had asked her. She'd come down the back stairs at six in a sequined top under the Yankees sweatshirt with a pair of steel chopsticks in her fist, and she'd been using one of them as a microphone ever since, holding it under people's chins, narrating, introducing every person who came through the door to a studio audience of the koi." },
    { s: 'yunjin', f: 'happy', t: "And from the gate, ladies and gentlemen, coming in at a lean six foot, coat still on, he's never once taken that coat off, I don't think he can, I think it's structural— Minseok!" },
    { s: 'minseok', f: 'neutral', t: "I'm going back out in ten minutes." },
    { s: 'yunjin', f: 'happy', t: "He's going back out in ten minutes, folks. Give it up." },
    { n: "Minseok put a small packet on the table by Pyo's place, a phone strap, a little plastic fish on a cord, and stood by the back door eating japchae off a saucer with the cold coming in round him every time it moved, and didn't go back out in ten minutes, or twenty." },
    { n: "Yunjin's mother had come down behind her and taken the chair nearest the stove, next to Auntie Song's armchair, and sat in it the way she sat everywhere, very straight and very small and slightly to one side, as if leaving room for someone. She'd brought a box of good tangerines and put it on the counter without a word. Solar had heard her say perhaps eleven sentences since November. She was a piano teacher, and when Yunjin talked she tapped the edge of the table with one finger, lightly, in time, and the time was always perfect." },

    // Haechan.
    { n: "Haechan was already there. He'd been there since five, in the good shirt under the black jacket, eating things off plates before they reached the table and being hit for it, and he'd put a lottery ticket by Pyo's place, one, folded in half." },
    { s: 'haechan', f: 'happy', t: "You're twenty. You're a man now. You're legally allowed to lose money like the rest of us." },
    { s: 'pyo', f: 'flustered', t: "What if I win?" },
    { s: 'haechan', f: 'happy', t: "Then you owe me half, and I'll buy a boat, and you'll never see me again. Either way, happy birthday." },
    { n: "Pyo himself was in a clean shirt Mrs. Bang had ironed for him, at the head of the table, where he'd been put, and he looked like a boy who had been put at the head of a table. He kept trying to get up and help. Every time he got up somebody pushed him back down by the shoulder. Yunjin had pushed him down four times. Auntie Song had done it with a wooden spoon." },
    { n: "Solar's present was a pair of rubber boots. Good ones, black, from the shop in Chinatown where Auntie Song bought hers. She'd put them under his chair in a bag, and he'd looked in the bag and then at Auntie Song's boots and then at her, and his mouth had done something, and he'd put the bag between his feet and held it there with his ankles for the rest of the night as if somebody might take it." },

    // Seven o'clock.
    { n: "At seven o'clock exactly, by the kitchen clock, the clock over the door that had never in its life been right to the minute, Minseok's phone buzzed in his coat, and he looked at it and went out, and came back in through the back door, and stood aside." },
    { n: "Jungwon came in behind him." },
    { n: "The dark coat, buttoned to the collar. Dark suit under it. His hair neat in a way that suggested it had been neat since the morning and intended to remain so. In his right hand, held level in front of him the way you'd carry a cake, a parcel wrapped in dark blue silk, bojagi, the corners knotted on top in a perfect flat bow." },
    { n: "He stopped inside the door and bowed. To the room. From the waist. Deep enough that the whole kitchen, which had been very loud, went entirely silent, and in the silence the rice cooker clicked over to warm." },
    { s: 'jungwon', f: 'neutral', t: "Good evening. Thank you for having me. I hope I'm not late." },
    { n: "Nobody said anything for a second. Then Haechan, by the stove, with a pancake halfway to his mouth, looked up at the clock over the door, which said seven, and down at Jungwon, and up at the clock again." },
    { s: 'haechan', f: 'surprised', t: "Did you wait outside?" },
    { s: 'jungwon', f: 'neutral', t: "For four minutes. At the gate. Minseok was very kind." },
    { s: 'haechan', f: 'surprised', t: "You stood at the gate for four minutes so you could come in *on* seven." },
    { s: 'jungwon', f: 'happy', t: "Mrs. Bang said seven." },
    { n: "The dimples. Both of them, deep and sweet, the most courteous thing in Incheon. And something went through the kitchen then that started in Yunjin, a small high noise at the back of her throat, and went to Minseok, who turned to face the door, and went to Pyo, who put his hand over his mouth, and went, eventually, to Mrs. Bang herself, at the stove, whose shoulders began, very slightly, to shake." },
    { n: "It was the funniest thing any of them had ever seen. Solar knew it while it was happening. A Yang, in the Lee kitchen, on a Saturday night, in a suit, having waited four minutes in the cold at their gate so as not to be early to a cook's birthday, holding a present wrapped in silk, and bowing. She bit the inside of her cheek. It didn't help." },
    { s: 'mrsbang', f: 'happy', t: "Come in, come in. Aigoo. Take your coat off. Sit. Pyo, this is the young man who bowed to me." },
    { n: "Jungwon took his coat off. Haechan watched him do it with the expression of a man watching another man take his coat off in his own house. Mrs. Bang took it from him and hung it on the hook by the back door, on top of Haechan's black jacket, and Haechan watched her do that too." },
    { n: "Jungwon went to the head of the table and held the parcel out to Pyo. In his right hand. Pyo stood up so fast his chair went over again; it was the second time that week." },
    { s: 'jungwon', f: 'neutral', t: "Happy birthday, Pyo-ssi. It's a small thing." },
    { n: "It was a knife. Pyo untied the bojagi with fingers that didn't work and there it was in a long box of pale wood, lying on a fold of paper, a Japanese kitchen knife with a plain handle and a blade with a faint watered pattern in the steel like the surface of a pond, and every person in the kitchen who'd ever held a knife for a living, which was most of them, leaned in at once to look at it." },
    { s: 'auntie', f: 'surprised', t: "*Aiya.*" },
    { s: 'haechan', f: 'neutral', t: "He brought a knife. To a birthday." },
    { s: 'jungwon', f: 'neutral', t: "He's a cook, Donghyuck." },
    { s: 'haechan', f: 'neutral', t: "I'm aware what he is. I've known him longer than you've known where our kitchen is." },
    { s: 'jungwon', f: 'happy', t: "It's customary, when you're given a knife, to give a coin back. So that it doesn't cut anything between you. Any coin. It's only a formality." },
    { n: "Pyo looked at him in terror. Then he went through every pocket he had, the shirt, the trousers, the back pocket, and came up with a single hundred-won coin, and held it out, and Jungwon took it from him on the flat of his right palm, and looked at it, and closed his hand over it, and bowed." },
    { s: 'jungwon', f: 'neutral', t: "Thank you. Now we're square." },
    { s: 'haechan', f: 'neutral', t: "A hundred won. He sold you a knife for a hundred won. Pyo. Pyo, you've been robbed." },
    { s: 'pyo', f: 'flustered', t: "I don't feel robbed, hyung." },
    { s: 'haechan', f: 'neutral', t: "That's how they do it." },
    { n: "Mrs. Bang put Jungwon in the chair directly across the long table from Haechan. Solar watched her do it and understood that it was deliberate, that Mrs. Bang had thought about it, possibly in church, and that she found it extremely funny." },

    // The table.
    { n: "And then it was the table, for a long time, and the table was loud." },
    { n: "It went in every direction at once, the way the kitchen did on Sundays, but more, the japchae going down one side and the pancakes coming up the other and the kimchi going round the middle and Auntie Song serving the noodle, the one noodle, with a pair of long chopsticks into everybody's bowl in a single unbroken rope, watching each person take it into their mouth with an expression of grave suspicion." },
    { n: "Haechan reached for the soy sauce. Jungwon passed it to him before his hand got there. Haechan looked at it. Then at him." },
    { s: 'haechan', f: 'neutral', t: "I didn't want it." },
    { s: 'jungwon', f: 'happy', t: "You were reaching for it." },
    { s: 'haechan', f: 'neutral', t: "I was stretching. A man can stretch." },
    { n: "Four minutes later Haechan reached for the kimchi and Jungwon moved it six inches toward him. Haechan put his hand on the table instead and drummed his fingers on it and ate rice without anything on it at all, out of principle, until Yunjin held the chopstick microphone under his chin and asked him for a few words on his decision, and the whole table lost it, and he had to put his spoon down." },
    { s: 'yunjin', f: 'happy', t: "Ladies and gentlemen, the man is eating plain rice to make a point. Ten years of beef, and tonight, at a birthday, plain rice. What's the point, sir? What's the point you're making?" },
    { s: 'haechan', f: 'happy', t: "The point is he can't pass me things." },
    { s: 'jungwon', f: 'neutral', t: "I'll stop, then." },
    { n: "He passed Haechan the kimchi. Haechan took it. Mrs. Bang, at the stove, made a small noise and turned the extractor fan up to cover it." },
    { n: "Somewhere under it, Mrs. Park leaned toward Solar along the bench. She did it so quietly that for a moment Solar didn't understand anybody was talking to her." },
    { s: 'mrspark', f: 'neutral', t: "Are you quite well now? Yunjin said you were very ill. Over Seollal." },
    { n: "Her voice was very low and very kind, a voice that had said *again, from the top* to children for thirty years without ever once making one cry, and she'd asked it the way you'd ask about the weather, so that it could be answered the way you'd answer about the weather. Down the table, very briefly, Yunjin's chopstick stopped moving." },
    { s: 'solar', f: 'neutral', t: "Much better, thank you. It was thirty-nine point four. I don't remember most of it." },
    { s: 'mrspark', f: 'happy', t: "Good. Good. You're still too thin." },
    { glitch: { strain: 1 } },
    { n: "It held. It always held, now; the whole house held it for her, and Mrs. Park nodded and went back to her noodle and tapped the table with one finger, in time, to nothing. And Solar sat there with the fever on her tongue like the taste of a coin and felt it pull, somewhere under her ribs, the way a line goes tight before you see the fish. She was a little thinner after it. She didn't know how she knew that. She took a pancake, and ate it, because it was there and so was she." },

    // Riki.
    { n: "At half past seven something came over the garden wall." },
    { n: "They heard it before they saw it, a scrape on the top of the bricks and a soft heavy landing in the frozen bed under the persimmon, and Minseok, by the back door, didn't even turn round." },
    { s: 'minseok', f: 'neutral', t: "The gate's open." },
    { n: "He said it to the garden. He'd said it before. He'd say it again, presumably, every time, for the rest of his life." },
    { n: "Riki came up the path in the silver puffer with his big headphones round his neck and a cake tin held in front of him in both arms, a round tin, old, cream and blue, with roses on the lid, and he came in through the back door into the noise and the steam and stopped dead, because he'd been expecting a kitchen and he'd got a party." },
    { s: 'niki', f: 'surprised', t: "Oh. There's a lot of people." },
    { s: 'yunjin', f: 'happy', t: "And over the wall, folks, in the silver jacket, he's been here before, he'll be here again, he has never once used a door— it's the banana kid!" },
    { s: 'niki', f: 'flustered', t: "I don't— that's not my name." },
    { n: "He put the tin down on the table by Pyo. On the lid, held down by a strip of tape, a slip of paper torn off an order pad, and on it, in small slanting capitals in blue pen, a note. Solar read it upside down. *Happy birthday Pyo. Mrs. Moon says this is from her. It's from me. The tin comes back. Jay.*" },
    { n: "Pyo lifted the lid. A sponge, plain, high, cut through the middle and filled with cream and strawberries, and more strawberries round the top in a ring, very neat, the kind of cake a man makes when he has opinions about cake and the patience to have them properly. Somebody had put candles in already. Two big ones. No little ones." },
    { s: 'niki', f: 'neutral', t: "He said two because you're two tens. He said that's how you do it." },
    { s: 'pyo', f: 'surprised', t: "Jay-ssi made me a cake?" },
    { s: 'niki', f: 'neutral', t: "He made it at five this morning. He said if you didn't like it to tell Mrs. Moon." },
    { n: "Riki stood there by the table in his puffer, looking at Pyo, who was looking at the cake, and his face went soft without his permission, the way a kid's face goes, and he said, before he could stop himself, quick and bright and in the wrong language entirely—" },
    { s: 'niki', f: 'happy', t: "*Omedetou.*" },
    { n: "Then he heard himself. She watched it hit him, a blink, a flush going up from his collar." },
    { s: 'niki', f: 'flustered', t: "Happy birthday. I mean. Happy birthday, hyung." },
    { n: "Nobody at the table noticed. Yunjin was already announcing the cake. Auntie Song was already looking for a knife, and finding a better one than she'd expected, in a box of pale wood. Pyo was saying *thank you, thank you* to the cake itself." },
    { n: "But across the table Haechan had gone still with his cup halfway up. And Jungwon, opposite him, had gone still with his chopsticks laid down, and his right hand had gone, slowly, to his watch, and stayed there. Neither of them looked at Riki. Neither of them looked at her. They looked at the table between them, at the same patch of it, the way two men look at the same spot on a road where something happened once, and neither of them said a word." },
    { glitch: { near: true } },
    { n: "Then Haechan put his cup down and looked at Riki, and couldn't, quite. He got about a second of it. A boy in a silver jacket by the back door with his headphones round his neck and a banana he'd already taken out of the fruit bowl without asking, peeling it, folding the peel back down the sides in neat strips. Haechan looked at him for one second and looked away, at the window, at the steam running down it, and when he spoke his voice was perfectly ordinary." },
    { s: 'haechan', f: 'neutral', t: "Take a slice back for your Jay. Tell him it's dry." },
    { s: 'niki', f: 'surprised', t: "Is it dry?" },
    { s: 'haechan', f: 'neutral', t: "Tell him anyway." },
    { n: "Riki took a slice, wrapped in a paper napkin, in his free hand, and the folded banana peel in the other, and went out of the back door and down the garden and over the wall beside the open gate, and Minseok, by the door, sighed once through his nose." },

    // The candles, and the app.
    { cg: 'epi-s-twenty' },
    { n: "They sang to Pyo. All of them, badly, at different speeds, Mrs. Park tapping the time on the table and nobody following it, Auntie Song in Mandarin and louder than anyone, and Pyo sat at the head of the table with his hands in his lap and the two candles lit in front of him and his face doing the thing faces do when they have never once been sung to by a whole room, and he blew, and both candles went out, and the smoke went up in two straight lines in the steam." },
    // The committee's voice message (the Nov 6 pass: the girls in every universe).
    { n: "At eight o'clock exactly, while the smoke was still going up, Yunjin's phone buzzed on the table by the japchae, and buzzed again, and went on buzzing, and she looked at it and put both hands over her mouth and said *oh no, they actually did it,* and turned it face up, and pressed play, and held it out over the table toward Pyo at arm's length like a torch." },
    { s: 'chaewon', f: 'neutral', t: "This is a message from the Daeboreum committee. The committee is permanent. Item one. Pyo-ssi, happy birthday. Item two. Eunchae, go." },
    { n: "And four girls on a phone in a Songdo apartment somewhere sang happy birthday to a cook they had never met, terribly, at four different speeds, Eunchae conducting so loudly you could hear her counting under it, Kazuha a third above everybody in a sweet wobbly harmony that went into Japanese halfway, *otanjoubi omedetou,* and then back, and a fourth voice, flat and dry and exactly in tune, that didn't sing the last line at all but said it." },
    { s: 'sakura', f: 'neutral', t: "Happy birthday. The storeroom ghost is probably fine. Respect." },
    { s: 'kazuha', f: 'happy', t: "Say good morning to it! It's polite!" },
    { s: 'eunchae', f: 'happy', t: "That's forty-one seconds. Chaewon said forty. We went over. Sorry, Pyo-ssi. Happy birthday." },
    { n: "Pyo didn't say anything. He took the phone out of Yunjin's hand very carefully, the way he'd taken the knife box, and held it in both of his, and pressed play again, and listened to the whole forty-one seconds a second time with his head bent over it at the head of the table, and nobody laughed at him, not even Haechan, and when it finished he gave the phone back and said, to the tablecloth, that he'd never been sung to by girls before, and Auntie Song, who didn't understand a word of it, put another noodle on his plate." },
    { n: "Then Yunjin took out her phone." },
    { s: 'yunjin', f: 'happy', t: "Okay. Okay okay okay. House rules. Everybody sings. Everybody. It's an app, it's got everything, it gives you a score out of a hundred and the score is final, the score is God. Lowest score does the dishes." },
    { s: 'mrsbang', f: 'neutral', t: "I do the dishes." },
    { s: 'yunjin', f: 'happy', t: "Not tonight you don't, Mrs. Bang. Tonight the score does the dishes." },
    { n: "Mr. Oh said no. He said it once, and Yunjin looked at him and at the tie and decided, visibly, that she'd won enough off Mr. Oh for one night, and moved on. Minseok said he was on the gate. Pyo, as birthday boy, was exempt, and as birthday boy was made to go first anyway, and sang a ballad about a first love in a voice that cracked on every high note, and scored sixty-one, and was delighted with it." },
    { n: "Haechan went next because he'd got up before he was asked." },
    { n: "He sang trot. Of course he did. An old one, a woman waiting on a pier for a boat, the kind of song a man's grandfather sang at weddings, and he sang it very well and on purpose and with every single one of the turns in it and some it didn't have, standing on the kitchen floor in his socks with a ladle for a microphone, one hand out to Mrs. Bang, then to Auntie Song, then to Mrs. Park, who went pink to the hairline, and the whole kitchen clapped on the beat except Jungwon, who didn't clap, and watched him with polite and total attention, as if he were a weather report." },
    { n: "Ninety-seven." },
    { s: 'haechan', f: 'surprised', t: "Ninety-*seven*? Where's the three? Where did it take the three?" },
    { s: 'yunjin', f: 'happy', t: "It says *excessive vibrato*, babe. It's a machine. It doesn't know what feelings are." },
    { s: 'haechan', f: 'happy', t: "The feelings are the point." },
    { n: "Then Yunjin turned round, slowly, with the phone, like a host on a quiz show turning to the last contestant, and held the chopstick out across the table." },
    { s: 'yunjin', f: 'happy', t: "Yang Jungwon-ssi." },
    { s: 'jungwon', f: 'neutral', t: "I don't sing." },
    { s: 'yunjin', f: 'happy', t: "The score is God, Jungwon-ssi." },
    { s: 'jungwon', f: 'neutral', t: "I'd be glad to do the dishes." },
    { s: 'mrsbang', f: 'serious', t: "Guests don't do dishes in my kitchen." },
    { n: "Jungwon looked at Mrs. Bang. Mrs. Bang looked at him. It was the first argument he'd lost in the Lee house, Solar thought, and he knew it, and he inclined his head to her an inch, very gracefully, and stood up and buttoned his jacket." },
    { s: 'yunjin', f: 'happy', t: "Random. Random song. The app picks. Nobody touch it. Here we go, here we go—" },
    { n: "The app picked a girl-group song. The one from four winters ago. The one every person in Korea under the age of fifty knew all the hand movements to, the little bouncing ones, the ones with the fingers, and the kitchen saw the title come up on Yunjin's screen and made a noise like a wave coming over a wall." },
    { n: "Jungwon sang it." },
    { n: "He stood at his place with his hands at his sides and his jacket buttoned and sang the whole thing, every word, perfectly, every note exactly where it was supposed to be, at exactly the right length, in a clear light voice with nothing in it, nothing at all, not a smile, not a flicker, not one single hand movement, while round him a kitchen full of grown adults slowly lost the ability to breathe. Minseok had to go outside. Auntie Song didn't know the song and laughed anyway, harder than anyone, with her face in her apron. Mrs. Bang turned the extractor fan up as far as it went and it did nothing. Yunjin was on the floor. Actually on the floor, on the tiles, with the phone held up over her face so it could still hear him." },
    { n: "Haechan did not laugh. Haechan sat across the table and watched him with an expression of the purest, deepest hatred Solar had ever seen on a human face, and she'd seen him look at men who'd hurt people." },
    { n: "A hundred." },
    { s: 'haechan', f: 'serious', t: "It's broken." },
    { s: 'jungwon', f: 'happy', t: "The score is God, Donghyuck." },
    { s: 'haechan', f: 'serious', t: "He didn't do the hands. You can't get a hundred without the hands. It's in the rules. Agasshi. Tell her it's in the rules." },
    { s: 'solar', f: 'happy', t: "It's not in the rules." },
    { s: 'haechan', f: 'serious', t: "It's in *my* rules." },
    { n: "Jungwon sat back down and unbuttoned his jacket and picked up his chopsticks and went on with his noodle, the one noodle, without having bitten through it once, and Auntie Song looked at him with something like respect." },

    // Appa.
    { cg: null },
    { n: "Somewhere in the middle of Yunjin trying to make Mrs. Bang sing a hymn, the seventh stair creaked." },
    { n: "The kitchen didn't go quiet, exactly. It went careful. The way it went careful for her mother, except warmer, the way a room straightens up for somebody it isn't afraid of. Pyo stood up. Minseok, who'd come back in, stood up straighter by the door. Jungwon was on his feet before anybody else, and bowed, and her father lifted a hand to him from the doorway, palm down, *sit, sit*, and he sat." },
    { n: "Her father was in his cardigan and his slippers, with his reading glasses on their cord and the crossword folded in his other hand, as if he'd come down for something else and got lost. He looked at the kitchen. All of it. The long table with the leaf in it, the pot, the cake, the cooking soju, Mr. Oh's tie, Yunjin on the floor, the boy at the head of the table in his ironed shirt with a bag of rubber boots between his feet." },
    { s: 'appa', f: 'neutral', t: "Happy birthday, Pyo." },
    { s: 'pyo', f: 'surprised', t: "Thank you, Chairman. Thank you. You didn't have to—" },
    { s: 'appa', f: 'neutral', t: "One song." },
    { n: "He said it to Haechan. He didn't say which. He didn't have to. Haechan was already up, and he looked at Yunjin, and Yunjin, for once in her life, didn't say anything at all, and found it on the app and held the phone up, and the first bars of it came out of the little speaker thin and tinny across the kitchen, the old song, the one about a hometown station, the one they sang in the car on the coast road." },
    { n: "Her father didn't look at the phone. He didn't need the words. He stood in the kitchen doorway with the crossword in his hand and sang it with Haechan, low, a little flat, the way he hummed it on the stairs, and Haechan sang it with him and for once didn't do anything to it, no turns, no vibrato, nothing extra, just sang it straight under her father's voice to hold it up, the way you'd hold a ladder." },
    { n: "Nobody clapped on the beat. Nobody did anything. Mrs. Bang stood at the stove with the ladle in her hand. Auntie Song had her eyes shut. Mr. Oh looked at the table. Solar sat at the end of it with her hands round her cup and watched the two of them, the old man and the one he called son, singing in a doorway, and she didn't look at anything else, because she wanted it, the whole thing, every second of it, and she knew already that she'd want it again." },
    { n: "When it finished her father nodded, once, to Haechan, and to the room, and didn't wait for the score." },
    { s: 'appa', f: 'neutral', t: "Don't keep him up too late. He's working tomorrow." },
    { s: 'mrsbang', f: 'neutral', t: "He's not working tomorrow. It's Sunday." },
    { s: 'appa', f: 'happy', t: "Then keep him up as late as you like." },
    { n: "And he went back up. They heard him on the stairs. They heard the seventh one. They heard him stop on it, a moment, and go on." },
    { n: "Yunjin looked at the phone. She didn't read out the score. She turned it face down on the table, and Haechan sat down, and drank something, and for a little while nobody performed anything." },

    // The flounder woman's daughter.
    { n: "It was Auntie Song who broke it. It was always going to be. She'd been at the cooking soju, and her cheeks had gone the color of the persimmons on the calendar, and she leaned across the corner of the table to Solar with the bottle still in her hand." },
    { s: 'auntie', f: 'happy', t: "*Do you know why that freezer is full of flounder?*" },
    { n: "Solar did not know why the freezer was full of flounder. She'd noticed it. Everybody had noticed it. Mrs. Bang had opened it on Wednesday and said *aigoo* at it." },
    { s: 'auntie', f: 'happy', t: "*Every Saturday since the autumn. Every Saturday he goes to the market. No list. Nobody sends him. He buys one flounder. One. From the girl. The flounder woman's girl, the one with the red hair tie who wraps them. One flounder, every Saturday, and he comes back with his ears like that and puts it in the freezer and says nothing.*" },
    { s: 'auntie', f: 'happy', t: "*He went this morning. Alone. After Wednesday. After all of it, the screaming, the thing. He went back down there alone this morning for one flounder. Your father said no market. He went.*" },
    { s: 'auntie', f: 'serious', t: "*That's not bravery, little moon. That's worse.*" },
    { n: "At the head of the table Pyo had heard his name. His own name in Mandarin, the only word of it he knew, and he'd heard it twice, and he'd gone white, and then red, starting with the ears." },
    { s: 'pyo', f: 'surprised', t: "What did she say. Agasshi. What did she say about me." },
    { s: 'yunjin', f: 'happy', t: "Oh, she said *something*. Look at her face. Sol. Translate. Translate, that's an order from the score." },
    { n: "The whole table looked at her. They always did. She'd been translating all night; the noodles, the tie, the toll booth, all of it, and every time she had, the room had laughed. It would laugh now. She could see it already, how it would go, Yunjin up on her feet with the chopstick, Haechan delighted beyond all reason, a song about first love put on the app for him by force, and Pyo at the head of the table in his ironed shirt dying, gladly or not, in front of everyone he'd ever worked with and a Yang." },
    { n: "Auntie Song was watching her. Not Pyo. Her. The old woman's face over the green bottle had gone sly and patient and curious, the way it went when she'd given Solar a fish at eleven and wanted to see what she'd do with the knife." },
    { choose: [
      { t: "(Translate it. All of it.)", stat: { charm: 1 }, flag: 'epi-s-twenty-told', then: [
        { s: 'solar', f: 'happy', t: "She says the freezer's full of flounder because every Saturday since autumn Pyo goes down to the market on his own and buys one fish from the flounder woman's daughter. The one with the red hair tie. And he went this morning. Alone. After Wednesday." },
        { n: "The kitchen exploded." },
        { n: "It went up all at once, everybody at once, Yunjin on her feet with the chopstick shrieking *the red hair tie*, Minseok turning round to face the door again, Mrs. Bang saying *aigoo, aigoo, my freezer* with her hand on her chest, and Haechan, across the table, leaning back so far in his chair it came off two legs, pointing at Pyo with both hands." },
        { s: 'haechan', f: 'happy', t: "*One fish.* Every week. That's not romance, Pyo, that's a subscription." },
        { s: 'pyo', f: 'flustered', t: "It's not— she's— I *like* flounder—" },
        { s: 'mrsbang', f: 'serious', t: "Nobody likes flounder that much." },
        { n: "And it was terrible, and he was purple, and he put his face down on the table next to his cake. But under all the noise Solar saw his shoulders, and they were shaking, and not only from that. Somebody had said it out loud. A whole room knew there was a girl, and nobody had laughed at the girl. They'd laughed at him for going back. He'd gone back. Everybody knew it now. Across the table Jungwon, very gravely, lifted his cup of barley tea an inch toward the head of the table, and Pyo saw it, through his fingers, and made a sound." },
        { n: "Auntie Song sat back in her chair and drank from the green bottle and looked, for a moment, extremely satisfied with her little moon." }
      ] },
      { t: "(Cover for him.) She says he's getting fat.", stat: { kindness: 1 }, flag: 'epi-s-twenty-covered', then: [
        { s: 'solar', f: 'neutral', t: "She says he's getting fat. She says it's Mrs. Bang's eggs." },
        { s: 'mrsbang', f: 'serious', t: "My eggs never made anybody fat." },
        { s: 'yunjin', f: 'surprised', t: "That's it? That's *it*? She talked for a whole minute. She did a whole face." },
        { s: 'solar', f: 'neutral', t: "She has a lot of feelings about the eggs." },
        { n: "Yunjin narrowed her eyes. Haechan narrowed his. Two people at the table had known her too long to believe a word of it, and both of them let it go, which was its own kind of present. The kitchen grumbled and moved on, to the cake, to Mrs. Bang's eggs, which were now being defended at length." },
        { n: "Pyo hadn't moved on. He was looking at her down the long table. He didn't know what Auntie Song had said. He knew what she hadn't. He'd watched the old woman's face and then Solar's, and he wasn't stupid, he was only frightened, mostly, of most things, and he looked at her for a long moment with his ears still red and nodded, very small, once." },
        { n: "Auntie Song leaned back across the corner of the table with the bottle." },
        { s: 'auntie', f: 'happy', t: "*Liar. Good girl.*" }
      ] }
    ] },

    // The envelope.
    { n: "Mrs. Bang came round the table at nine with something in her hand, held flat against her apron, and put it down in front of Pyo between the cake and the bag of boots." },
    { s: 'mrsbang', f: 'neutral', t: "From the sunroom." },
    { n: "An envelope. Cream, heavy, the good kind from the box in the sunroom desk that came out for weddings and condolences and the New Year. And on the front, in black ink, his name." },
    { n: "Just his name. In her mother's hand. Solar would have known it anywhere, from across any room; she'd been taught her own letters from that hand. The strokes of it long and even and perfectly weighted, every line exactly the thickness it was meant to be, the way she'd write a name on a card for a minister or an ambassador's wife. *Pyo.* As if it were somebody's name who mattered. As if it had been written slowly." },
    { n: "She didn't come down. Nobody had expected her to. Nobody said so." },
    { n: "Pyo opened it with the edge of his thumb, carefully, so as not to tear the front, and took out a card, and read whatever was on it. Solar didn't see. Nobody saw. He read it twice. Then he put it back in the envelope, and put the envelope flat on the table under his hand, and his face went, very slowly, the way a window goes when the steam runs down it, and he cried. Not much. Not loudly. Just a little, at the head of the table, in his ironed shirt, with his hand flat on top of her mother's handwriting, and the whole kitchen found something else to look at, all at once, the window, the clock, the koi, the cake, because that was the kind of kitchen it was." },
    { n: "Auntie Song put another length of the noodle in his bowl without being asked. Mrs. Bang went back to the stove. Haechan, across the table, began very loudly to complain about the score again, and kept it up for a long time, until Pyo laughed, wetly, at nothing he'd said." },

    // The late beat, by route.
    { ifEpiRoute: 'haechan', then: [
      { place: 'Incheon · The Lee House · Garden', time: 'Late Night', soft: true },
      { music: 'epi-s-step' },
      { n: "At eleven the dishes were still going on. Yunjin had lost the score in the end, on a technicality she was still disputing, and she was at the sink in the sequined top with her sleeves pushed up, washing, while Minseok dried and Mrs. Park stacked, and Auntie Song's armchair by the stove stood empty with her shape still in the cushion. She'd missed the last bus on purpose and slept through half an hour of the dishes in it, and at half past ten Mr. Oh had driven her down the hill to Chinatown, and Pyo with her, in the back seat, holding the boots, the envelope and the knife box on his knees like a boy carrying his whole life." },
      { n: "Solar went out onto the back step." },
      { n: "He was there already. Of course he was. It was his night; it had been his night since the market, every other one, and he was sitting on the step by the koi bucket with his forearms on his knees and the black jacket back on, the collar up, chewing. The cloud had come down almost to the garden. The air was wet and cold and smelled of the harbor, and the light from the kitchen window lay out across the gravel in a long yellow shape with his shadow in it." },
      { n: "She sat down next to him. On the cold half. He moved over so she got the warm half, which he always did, and she pretended not to notice, which she always did." },
      { s: 'haechan', f: 'neutral', t: "Gum?" },
      { s: 'solar', f: 'neutral', t: "You're quitting." },
      { s: 'haechan', f: 'neutral', t: "I'm always quitting. That's why there's gum." },
      { n: "She took a stick. Cinnamon. It burned. Behind them through the door Yunjin was singing at the sink, badly, without the app, the girl-group song, doing all the hand movements with a sponge, and Minseok was telling her to stop, and she wasn't stopping." },
      { s: 'haechan', f: 'neutral', t: "Ninety-seven." },
      { s: 'solar', f: 'happy', t: "Excessive vibrato." },
      { s: 'haechan', f: 'neutral', t: "I sang it with the Chairman after. That one didn't get a score." },
      { s: 'solar', f: 'neutral', t: "Yunjin turned it over." },
      { s: 'haechan', f: 'neutral', t: "I know. I saw." },
      { n: "He chewed for a while. The koi went round in the bucket under a skin of almost-ice, slow, orange and white, the two of them, as if there were nothing in the world but the next lap." },
      { s: 'haechan', f: 'neutral', t: "He sang it flat. The Chairman. The second verse. He always sings it flat on the second verse." },
      { s: 'haechan', f: 'neutral', t: "I go flat with him. On purpose. So he's not on his own up there." },
      { n: "He said it to the koi. He said it the way he'd say the wind at Baengnyeong, the way he'd tell her the Rexton needed diesel, and she knew he'd aimed it, every word, because he never said anything like that by accident, not once in his life, and it went into her under the ribs and stayed there." },
      { n: "She put her shoulder against his. Just that. The black jacket was cold on the outside and warm underneath." },
      { bond: { haechan: 1 } },
      { s: 'haechan', f: 'neutral', t: "Go in, agasshi. It's my night." },
      { s: 'solar', f: 'happy', t: "It's not midnight." },
      { s: 'haechan', f: 'neutral', t: "It will be." },
      { n: "She didn't go in. Not yet. Behind them in the kitchen the dishes went on, and Yunjin went on, and the cloud sat down over the garden like a lid, and somewhere in it the cranes blinked their slow red lights, and she sat on the warm half of the step and chewed his gum and waited to see which of them would say something next. Neither of them did. It got later." }
    ] },
    { ifEpiRoute: 'jungwon', then: [
      { place: 'Incheon · The Lee House · Gate', time: 'Late Night', soft: true },
      { music: 'epi-s-jungwon' },
      { n: "At half past ten he thanked Mrs. Bang for the evening, and bowed to her, and to Auntie Song, asleep in her armchair in her coat with her boots on, waiting for Mr. Oh to take her down the hill, and to Pyo, who bowed back so deep he hit his head on the table, and Solar saw him out." },
      { n: "Up the side of the house on the path, in the wet dark, the cloud so low over the garden that the gate lamp had a ring round it like a moon. His coat buttoned to the collar again. His shoes very quiet on the gravel. The kitchen behind them going on without them, the sink running, Yunjin singing the girl-group song at it with all of the hand movements, as a protest." },
      { n: "At the gate he stopped under the lamp. Minseok's gatehouse light was on, the little window, a television going inside it. He didn't open the gate. He turned round and stood with his back to it." },
      { s: 'jungwon', f: 'neutral', t: "Thank you for tonight, Solar-ssi." },
      { s: 'solar', f: 'neutral', t: "You're not going home." },
      { s: 'jungwon', f: 'neutral', t: "It's my night. I'm only going as far as the other side of this." },
      { n: "He touched the gate with two fingers. Then his watch. He looked at it, the old one, the link taken out, lifting his wrist into the lamp: ten thirty-four. An hour and twenty-six minutes until it was a watch and not a party." },
      { n: "She asked him in Mandarin. It came out before she'd decided, the way it always did with him." },
      { s: 'solar', f: 'happy', t: "*Did you have a good time?*" },
      { s: 'jungwon', f: 'neutral', t: "*I sang a song about a girl in love, with no hands, in front of Donghyuck, for a score out of a hundred.*" },
      { s: 'solar', f: 'happy', t: "*That's not an answer.*" },
      { s: 'jungwon', f: 'neutral', t: "*It was a perfect score.*" },
      { n: "The stillness came over his face then. The real one, the one that wasn't the dimples, the one most people took for nothing at all. She'd learned to read him backwards months ago. That was a yes. That was more of a yes than she'd ever had out of him about anything that wasn't her." },
      { s: 'jungwon', f: 'neutral', t: "*In my house a birthday is in the dining room. With speeches. Nobody sings. I didn't know I'd—*" },
      { n: "He stopped. He looked at his watch again, as if it might have moved on without him." },
      { s: 'jungwon', f: 'neutral', t: "Mrs. Bang said I was to come back on Sunday for dumplings. I don't think it was an invitation." },
      { s: 'solar', f: 'happy', t: "It wasn't." },
      { s: 'jungwon', f: 'happy', t: "Then I'll be at the gate at four minutes to." },
      { n: "She laughed. Not much. In the cold, under the lamp, with her breath going up in it. He watched her do it with his hand on his watch, very still, and didn't say anything else, and didn't need to." },
      { bond: { jungwon: 1 } },
      { n: "He bowed. Exactly as deep as he'd bowed in the kitchen at seven o'clock, to show that nothing had changed the angle. Then Minseok came out and opened the gate for him, and he went through it, and turned, and stood on the other side of it under the lamp in the dark coat with his hands at his sides, and the gate shut between them. She went back down the path. She didn't look round until the kitchen door. He was still there. He'd be there at four." }
    ] },
    { ifEpiRoute: 'family', then: [
      { place: 'Incheon · The Lee House · Stairs', time: 'Late Night', soft: true },
      { music: 'epi-s-family' },
      { n: "At half past eleven she went up. The kitchen was still going, quieter, the dishes and the radio and, out on the drive, Mr. Oh's car coming back up the hill at exactly the speed limit, having taken Auntie Song and Pyo home. She went up the main stairs in her socks with a slice of Jay's cake on a saucer for the morning, and on the seventh stair, coming down, was her father." },
      { n: "Not coming down. Standing. His slippers and his cardigan and his glasses on their cord, one hand on the banister, on his way to bed, and stopped there, where he always stopped, on the one that creaked, the way he'd stopped on it her whole life. Humming." },
      { n: "The song. The hometown station. Low and flat and a little behind the beat, the second verse, where he always went flat. He stopped humming when he saw her, and then, when she didn't say anything, he went on with it, to the end of the line, as if it would have been rude to the song to stop." },
      { s: 'appa', f: 'neutral', t: "Was it a good party." },
      { s: 'solar', f: 'happy', t: "Pyo cried." },
      { s: 'appa', f: 'neutral', t: "Good. A man should cry at his twentieth. I did. My mother made me a soup and I cried into it. Nobody's to know that." },
      { s: 'solar', f: 'happy', t: "Nobody will." },
      { n: "He looked at the saucer in her hand. At the cake. At her, for a long moment, on the stair below him, the way he looked at the shipping notices, with his lips very slightly moving, as if he were reading her and didn't want to lose his place." },
      { s: 'appa', f: 'neutral', t: "He sang it straight, tonight. Haechan. For me. He never sings anything straight." },
      { s: 'solar', f: 'neutral', t: "I know." },
      { s: 'appa', f: 'neutral', t: "Mm." },
      { n: "He took a pinch of the strawberry off the top of her cake, delicately, between his finger and thumb, the way he took a stick of Haechan's gum, and ate it." },
      { bond: { appa: 1 } },
      { s: 'appa', f: 'happy', t: "Dry." },
      { s: 'solar', f: 'happy', t: "Haechan says so too." },
      { s: 'appa', f: 'neutral', t: "Then it's not. Goodnight, Sol-ah." },
      { n: "He went on up. The seventh stair let him go with its long low complaint, and he went along the landing humming the song again, the second verse, flat, and shut the study door, and the light under it stayed on. She stood on the stairs with the cake for a while, listening to the kitchen underneath her and the hum above her, and didn't go up, and didn't go down, and the tide, a long way under the house, was coming in." }
    ] }
  ] },

  // ───────────────────────────── 3/6, daytime: salt ─────────────────────────────
  { id: 'epi-s-salt', date: '3/6', slot: 'after', consumes: true, title: 'salt', place: 'Incheon · The Lee House · Her Room', time: 'Daytime', scene: [
    { music: 'epi-s-yunjin' },
    { n: "By two in the afternoon the dust had got into everything. It lay on the sill outside her bathroom window in a yellow film you could have written your name in, and it had come in round the frame and lay on the sill inside too, finer, like pollen, and the light that came through the frosted glass was the color of weak tea, and there were no edges on anything out there at all; the garden, the wall, the harbor, gone into one long soft yellow nothing, as if the whole world had been rubbed out by somebody who was going to draw it again later, differently." },
    { n: "Mrs. Bang had run her a bath." },
    { n: "She'd done it without asking, the way she'd done everything since half past five that morning, the blanket, the basin for her feet, the second pair of socks and the third. She'd run it hot, so hot the mirror had gone in a minute, and then she'd gone downstairs and come back up with the jar of coarse grey salt from the kimchi shelf, and stood over the bath, and taken out a whole fistful in her bare hand, and thrown it in. Not sprinkled. Thrown, overarm, hard, the way you'd throw it after a funeral guest at the door." },
    { s: 'mrsbang', f: 'serious', t: "For the bad luck. Get in. Stay in until it's cold." },
    { n: "She hadn't said what bad luck. She'd crossed herself on the way out, too, which she didn't usually do upstairs, and shut the door." },
    { n: "Yunjin was sitting on the closed lid of the toilet in her father's grey hoodie with the sleeves pulled down over her hands and her feet up on the edge of the radiator, and she'd been talking since she came in. She hadn't stopped. She'd come in with two cans of vending-machine coffee and put one on the side of the bath and sat down and started, and it was the drama, the one with the blind heiress and the con man pretending to be her long-lost brother, and she was on episode eleven, and she had a great deal to say about episode eleven." },
    { s: 'yunjin', f: 'serious', t: "So he's standing in the rain. Obviously. It's always raining, I think it's in his contract. And she can't see him, because she's blind, which, again, the most useful blind woman in the history of television, she can tell what you had for lunch from your footsteps, but she can't tell he's a *fraud*—" },
    { n: "Solar took her clothes off. The jeans were gone already; Mrs. Bang had taken them away at six, stiff to the knee with grey mud, and the jumper, her father's old fishing jumper, and nobody had brought them back. She stood on the bathmat in the steam in her skin with her hair down her back, and looked at the water." },
    { n: "It was only a bath. She knew that. The same bath she'd had all her life. White, deep, old, with the brass taps her grandmother had chosen and a crack in the enamel at the far end shaped like the coast of somewhere. The water was clear and still and a little cloudy at the bottom where the salt hadn't gone yet, a few grey crystals lying on the enamel, slowly going smaller." },
    { n: "She put one foot in." },
    { n: "Her body knew before she did. It went cold. In a bath that hot. The cold came up from the sole of her foot through the bone of her shin and into the backs of her knees, and she stood there on one leg with the other in the water to the ankle and her hand on the wall, and for a moment it was mud, it was the cold sucking pull of it, it was the sound of a whole sea dragging itself home across the flats behind her, and she could see the plastic bottle standing upright in the face of the water, perfectly still, like a fly in amber." },
    { s: 'yunjin', f: 'serious', t: "—and his friend, the friend's the best one, the friend's this little guy who's in debt to everyone, he's like, hyung, she's going to find out, and he's like, *she won't find out*, in the rain, in the coat, and I'm like, sir. Sir. She can hear your heartbeat from across the room. She's going to find out." },
    { n: "Yunjin didn't look at her. That was the kind thing. She looked at the radiator, at her own feet in their socks on the edge of it, and talked to them, and didn't stop, and the sound of it filled the bathroom up like the steam did, a wall of it, so there wasn't any room left in there for anything else." },
    { n: "She put the other foot in." },
    { n: "She sat down. She did it the way you'd go down a ladder in the dark, one rung at a time, her hands on the sides of the bath, the water coming up her calves and her thighs and then the heat of it closing round her hips all at once and taking her breath, and she sat, and the water came up to her waist and moved, and settled, and she held on to both sides of the bath with both hands and didn't let go." },
    { n: "It smelled of the sea. That was the salt. A whole fistful of it, in hot water, and the steam coming up off it smelled exactly like the flats at low water in summer, warm and grey and alive, and she breathed it in before she could stop herself and her hands tightened on the enamel until the knuckles went." },
    { n: "Downstairs the television was on. She could hear it through the floor, the news, a man's voice, smooth and level, the way they read things that had already been decided." },
    { s: 'radio', t: "...describing as an unusual weather event on the tidal flats south of the harbor this morning..." },
    { n: "Then somebody turned it down. Mrs. Bang. She'd know the footsteps anywhere; she didn't need to be a blind heiress. The voice went to a murmur and then to nothing, and then, a minute later, crept back up a notch, because somebody else down there wanted to hear it, and then went down again." },
    { s: 'yunjin', f: 'happy', t: "—and Sol, I swear to God, in episode ten, she touches his face. To *see* him. Like, she reads his face with her hands. And he's got this look like a dog that's eaten a shoe. And she goes, very softly, *you have kind eyes*. And I threw a pillow at my laptop. I threw a pillow at a two-million-won laptop because of a man's eyes." },
    { n: "She leaned back. A little. Her shoulders against the cold slope of the enamel at the head of the bath, the water coming up her ribs to her chest, over her breasts, to her collarbone, warm, moving with her breathing, and she lay there with her hair floating out round her on the surface in a dark slow fan, and she was all right. She was all right to the collarbone." },
    { n: "Her hair needed washing. There was mud in it. She could feel it at the back, at the nape, gritty, dried in, the flats still in her. All she had to do was go back. Lean back, put her head back under, the way she'd done it every night of her life before this, and come up, and that was all, that was a bath." },
    { n: "She leaned back. The water came up her neck. Her jaw. It touched the corners of her mouth, salt, hot, and went into the corner of her lips, and her whole body stopped." },
    { n: "Not shaking. She didn't shake. She got still, the way she always did, the way she had on the mud with the grey line coming, completely, her breath held, her hands on the sides of the bath, her chin on the surface of the water, and she couldn't go any further. She couldn't. There was a line in her the width of a hair and the water was on it, and every part of her that wasn't thinking was saying, very calmly, that if she put her face under she would not come up, that it would close over her like a door in a stone house and there'd be nobody on the steps." },
    { n: "She stayed like that. She didn't know how long. The drip from the hot tap. The steam. Yunjin's voice going on, and on, about the con man's friend, the little one, who owed everybody money." },
    { n: "Then a hand on the edge of the bath." },
    { n: "Yunjin's. It had come out of the grey sleeve and was holding the rim of the tub, by Solar's shoulder, not touching her. Just there. On the enamel. Cold; Yunjin's hands were always cold, even in summer, even in a bathroom full of steam. Yunjin hadn't looked round. She hadn't stopped talking. She'd just put her hand there, on the edge, where Solar could see it, the way you'd put a hand on the side of a boat." },
    { s: 'yunjin', f: 'neutral', t: "—and the thing is, the thing is, I think he does love her. I think that's the joke. He came to rob her and he's going to end up staying, and it's going to ruin his whole life, and he's going to let it." },
    { n: "Solar sat up. Slowly. The water came off her face, her chin, her neck. She breathed. She breathed again. Then she put her own hand on the edge of the bath, next to Yunjin's, not on it, and they sat like that, two hands on the white enamel, one wet, one cold." },
    { n: "Yunjin reached over without looking and took the toothbrush mug off the sink and tipped the toothbrushes out of it into the basin, and filled it from the bath." },
    { s: 'yunjin', f: 'neutral', t: "Head back. Eyes shut. I've got your face." },
    { n: "She put her other hand flat across Solar's forehead, along the hairline, like a peak of a cap, and tipped Solar's head back against it, and poured the water from the mug over the back of her hair, slowly, so that it ran down behind and not a drop came forward onto her face. Again. Again. Her hand never moved. Her voice didn't stop. The con man had a mother, it turned out, in episode eleven. A terrible one. Yunjin had opinions about the mother. Solar sat with her eyes shut and her head back against her best friend's cold hand and let the salt water run through her hair and out of it, grit and all, and for the first time since half past five that morning her hands let go of the sides of the bath." },
    { choose: [
      { t: "I wanted to look at it. Out there. Just once.", stat: { courage: 1 }, then: [
        { n: "She said it with her eyes still shut. She didn't know she was going to say it until it was said, and then it was in the steam, and it was true, and she couldn't take it back." },
        { s: 'solar', f: 'sad', t: "I've been scared of it my whole life. And it stood still. And I wanted to look at it. Just once." },
        { n: "The mug stopped. Then went on. Yunjin poured the next one very slowly, slower than the others, and didn't say anything for the length of it, which from Yunjin was the loudest thing Solar had ever heard." },
        { s: 'yunjin', f: 'neutral', t: "Okay." },
        { s: 'yunjin', f: 'neutral', t: "Next time you want to look at something, you take me. I'll hold your coat. I'll hold your whole body. I'll stand on your feet." },
        { s: 'solar', f: 'happy', t: "You'd sink." },
        { s: 'yunjin', f: 'neutral', t: "I'm from *New York*, Sol. I can do anything out of spite." },
        { bond: { yunjin: 1 } }
      ] },
      { t: "Finish it. Tell me how it ends.", stat: { charm: 1 }, then: [
        { s: 'solar', f: 'neutral', t: "Finish it. The drama. Tell me how it ends." },
        { s: 'yunjin', f: 'surprised', t: "It hasn't *ended*, it's on episode eleven, it's still airing, I'm not a *prophet*—" },
        { s: 'solar', f: 'neutral', t: "Then make it up." },
        { n: "Yunjin made it up. All of it. The rest of the series, in order, episode by episode, in the steam, with her hand on Solar's forehead, and the con man came clean in the rain in episode fourteen and the blind heiress hit him with her cane, very hard, twice, and then kissed him, and the little friend paid off all his debts by winning a ssireum tournament, and the terrible mother was arrested on a yacht, and in the very last scene the heiress got her sight back and looked at the con man for the first time and said he was shorter than she'd imagined, and Solar laughed with her eyes shut, out loud, in the bath, and her hands were in the water and she hadn't noticed when they'd gone there." }
      ] },
      { t: "Stay. After. While I sleep.", stat: { kindness: 1 }, then: [
        { s: 'solar', f: 'sad', t: "Will you stay. After. While I sleep." },
        { s: 'yunjin', f: 'neutral', t: "Babe." },
        { s: 'yunjin', f: 'neutral', t: "I live on the other side of your wall. I'm always staying. I've been staying all winter." },
        { s: 'solar', f: 'sad', t: "In the room, Jin." },
        { n: "The mug stopped for a second. Then went on." },
        { s: 'yunjin', f: 'neutral', t: "Yeah. In the room. I'll bring the laptop. Sound off. You can sleep through episode twelve, it's filler anyway, it's all the mother." }
      ] }
    ] },
    { n: "She stayed in until it was cold. Mrs. Bang had said to. And when she came out, wrapped in two towels with her hair in a third, the dust at the window had thinned a little, the way it did some afternoons, so that you could almost see the shape of the persimmon tree in it, and almost the wall, and then the wall went again." },
    { place: 'Incheon · The Lee House · Her Room', time: 'Daytime', soft: true },
    { n: "There was a knock at her bedroom door at four. Not Mrs. Bang's. Mrs. Bang knocked once and came in. This was three small knocks, frightened ones, and nobody came in." },
    { n: "Yunjin opened it. Pyo was on the landing with a tray held out in front of him at the end of both arms, as far from his body as it would go, as if the tray were the one being delivered and he were only incidentally attached to it. He did not look into the room. He looked at the ceiling of the landing with great concentration." },
    { s: 'pyo', f: 'flustered', t: "From Auntie Song. She says drink it hot. She says— she said a lot of things. I don't know what any of them were. She hit me with a spoon." },
    { n: "A bowl, with a saucer on top for a lid. Yunjin took the tray. Pyo bowed to the ceiling and went back down the stairs very fast, and they heard him go past the seventh one, and they heard him not stop on it." },
    { n: "Under the saucer, ginger. Sliced thin and boiled for a long time with brown sugar until the water had gone the color of the dust outside, dark and sweet and so hot it stung, the thing Auntie Song had made her every winter since she was small enough to need the bowl held, for the cold that got into your bones off the water and wouldn't come out on its own." },
    { n: "Solar sat up in the bed with her hair still damp in its towel and held the bowl in both hands. Yunjin was on the floor with the laptop. Downstairs the television had been turned off altogether, finally, by somebody who'd won." },
    { n: "She drank it. It went down into her like a lamp being carried down a stair. She didn't say anything about the water, or the morning, or the bottle standing upright in the face of the tide; nobody had asked her, and nobody would, and she held the empty bowl in her lap with the ginger at the bottom of it and the taste of salt still somewhere at the corner of her mouth, and thought she'd tell someone, maybe, one day, what it had looked like. Not today. Today Yunjin had found episode twelve." }
  ] }
  );

  // ───────────────────────────── texts ─────────────────────────────
  const T = (R.texts ||= {});
  const LEAVE = (then = []) => ({ t: '(Leave it on read.)', silent: true, then });
  (T.texts ||= []).push(
    { id: 'epi-s-tx-hc-sat', thread: 'haechan', date: '3/1', slot: 'evening', events: ['epi-s-jammed'], msgs: [
      { from: 'haechan', t: "pyos birthday sat" },
      { from: 'haechan', t: "act surprised" },
      { from: 'haechan', t: "hes going to cry. hes been crying since wednesday anyway so nobodyll notice" }
    ], reply: [
      { t: "what are you getting him", then: [{ from: 'haechan', t: "something a man needs" }, { from: 'haechan', t: "dont ask" }, { from: 'haechan', t: "its legal" }] },
      LEAVE([{ from: 'haechan', t: "surprised agasshi. practise ur face" }])
    ] },
    { id: 'epi-s-tx-jw-pyo', thread: 'jungwon', date: '3/1', slot: 'late', events: ['epi-s-jammed'], msgs: [
      { from: 'jungwon', t: "Good evening. Minseok gave me a message at the gate tonight. Mrs. Bang expects me on Saturday at seven." },
      { from: 'jungwon', t: "I've accepted. I wasn't sure I was being asked." },
      { from: 'jungwon', t: "Could you tell me what Pyo-ssi would like? I would prefer not to get it wrong." }
    ], reply: [
      { t: "he's a cook", then: [{ from: 'jungwon', t: "Then I know what to bring. Thank you." }] },
      { t: "honestly? not to be noticed", then: [{ from: 'jungwon', t: "That's harder. I'll do my best to be unremarkable." }] },
      LEAVE([{ from: 'jungwon', t: "I'll think of something correct." }])
    ] },
    { id: 'epi-s-tx-yj-storeroom', thread: 'yunjin', date: '3/2', slot: 'early', events: ['epi-s-jammed'], msgs: [
      { from: 'yunjin', t: "emergency" },
      { from: 'yunjin', t: "what do u get a boy whos scared of a storeroom" },
      { from: 'yunjin', t: "a priest?? is that a gift" }
    ], reply: [
      { t: "a night-light", then: [{ from: 'yunjin', t: "GENIUS. a cat one. it's happening. ur going halves" }] },
      { t: "a flashlight", then: [{ from: 'yunjin', t: "too practical. hes 20 not 50" }, { from: 'yunjin', t: "getting him a night-light shaped like a cat. ur going halves" }] },
      LEAVE([{ from: 'yunjin', t: "ok cat night-light. ur going halves. no further questions" }])
    ] },
    { id: 'epi-s-tx-jay-tin', thread: 'jay', date: '3/3', slot: 'after', events: ['epi-s-twenty'], msgs: [
      { from: 'jay', t: "the tin" },
      { from: 'jay', t: "mrs moon wants it back. it's her good tin. it's older than me and she likes it more" },
      { from: 'jay', t: "also did he like it. don't tell me if he didn't. riki says it was dry. riki says someone told him to say that" }
    ], reply: [
      { t: "he cried", then: [{ from: 'jay', t: "from the cake or from something else" }, { from: 'jay', t: "it matters. professionally" }] },
      { t: "it wasn't dry", then: [{ from: 'jay', t: "i know it wasn't dry" }, { from: 'jay', t: "tin. please. before she makes me go over your wall for it" }] },
      LEAVE([{ from: 'jay', t: "tin, solar" }])
    ] },
    { id: 'epi-s-tx-yj-masks', thread: 'yunjin', date: '3/5', slot: 'after', events: ['epi-s-dust'], msgs: [
      { from: 'yunjin', t: "dust. masks. chaewon laminated a mask schedule. there is a column for COLOR" },
      { from: 'yunjin', t: "karaoke still happening btw. the dust doesnt get a vote" },
      { from: 'yunjin', t: "i will sing at the dust personally" }
    ], reply: [
      { t: "masks on in the room too?", then: [{ from: 'yunjin', t: "absolutely not. im not singing a ballad through a filter. i have standards" }] },
      LEAVE([{ from: 'yunjin', t: "7pm. mask. ur doing the duet. no further questions" }])
    ] },
    { id: 'epi-s-tx-yj-pickle', thread: 'yunjin', date: '3/6', slot: 'late', events: ['epi-s-salt'], msgs: [
      { from: 'yunjin', t: "u smell like a pickle" },
      { from: 'yunjin', t: "i love u" },
      { from: 'yunjin', t: "knock twice if ur asleep (that doesnt make sense. do it anyway)" }
    ], reply: [
      { t: "(Knock twice on the wall.)", silent: true, then: [{ from: 'yunjin', t: "good. sleeping pickle. night" }] },
      { t: "i love you too", then: [{ from: 'yunjin', t: "obviously" }, { from: 'yunjin', t: "go to sleep pickle" }] }
    ] },
    { id: 'epi-s-tx-eomma-dust', thread: 'eomma', date: '3/7', slot: 'early', events: ['epi-s-salt'], msgs: [
      { from: 'eomma', t: "The dust is heavier today. Wear the grey scarf over your mask, and keep it over your mouth." }
    ], reply: [
      { t: "i will", then: [{ from: 'eomma', t: "Thank you." }] },
      LEAVE([{ from: 'eomma', t: "Over your mouth, Solar." }])
    ] },
    { id: 'epi-s-tx-niki-banana', thread: 'niki', date: '3/12', slot: 'after', events: ['epi-s-twenty'], msgs: [
      { from: 'niki', t: "🍌" },
      { from: 'niki', t: "the tin came back full. jay says your house never sends anything back empty" },
      { from: 'niki', t: "your wall is easier than ours. nvm. forget i said that" }
    ], reply: [
      { t: "use the gate riki", then: [{ from: 'niki', t: "minseok always says that" }, { from: 'niki', t: "no" }] },
      LEAVE([{ from: 'niki', t: "🍌" }])
    ] }
  );
})();
