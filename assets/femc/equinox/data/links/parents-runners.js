/* Persona 3: Equinox · Jaesang & Solji Lee (Solar's Runners parents) · Hanged Man XII. Couple link (femc-equinox-game.html).
   Format: link fields in assets/femc/game/core.js ("Links" header), scene lines in assets/femc/game/scene.js.
   Shape: the stub fields from assets/femc/equinox/data/links.js (moved here; status / todo dropped).
   Written: ranks 1–3. Ranks 4–10 still to write (rank 9 is where they stop asking: Jaesang hands her the plan and doesn't
   take it back when she puts it down).
   Speakers: 'jaesang-runners' and 'solji-runners' (config.js `faces` gives them their Equinox faces). Turns: rank 1 both
   (Solji asks, Jaesang states), rank 2 Solji, rank 3 Jaesang. Solji is taken on 9/23 (story-act3.js eqx-equinox) and comes
   back on 11/22 (story-act4.js eqx-1122), so every rank that could be played late branches:
     ifEvent 'eqx-equinox'  the mothers are gone: a rank written for both / for Solji plays a shorter version led by Jaesang
     ifEvent 'eqx-1122'     inside that, she's back (the seams, can't be touched on the back, doesn't remember the tale)
     ifEvent 'eqx-1023'     Jaesang has been down the Well and seen her worn face on the steps (rank 3);
                            ifFlag 'dead.shinjiro' inside it.
   Rank 1 (after 8/29, Sunday evening, the fountain at Paulownia Mall: Solji's after-dinner walk, round and round; Jaesang's
     plan in a graph-paper notebook he hates; item three is MARCH; Ishida ten steps behind; Mrs. Oka at the boarding house gate).
     Records the couple's ask ("take her home"): tally asks.parents-runners yes / no / choose (+ cakes / choose; the
     "Stay. Please." option adds asked + cakes and sets eqx-asked-parents-runners; the choose option sets
     eqx-choose-parents-runners). Reads ifEvent eqx-three-dads (the declined card). Late version: Jaesang alone walks her loop.
   Rank 2 (after 9/12, Sunday: her ten o'clock call from eight hundred meters away; the evening at a Paulownia Mall boutique, a
     three-way mirror, a dress for the moon-viewing on the 23rd; Solji is hungry all the time and says yes to everything).
     Reads ifEvent eqx-moon-ask, the romance standing (dating(): haechan / minji / akihiko, else a nobody line).
     Sets eqx-solji-dress-green | eqx-solji-dress-own (cosmetic), eqx-solji-cakes-taken (she takes the rice cake out of her
     mother's handbag; nothing reads it yet). Late version (after 9/23): Jaesang brings the dress Solji bought on the 15th, a
     note in her pencil; sets eqx-solji-dress-late if Solar puts it on.
   Rank 3 (after 10/11, the fountain in October; nobody ten steps behind him now; he walks Solji's loop at her pace, her
     reading glasses in his breast pocket; the plan says only *1. Find your mother.*; he calls her number at 7:15 in the evening
     too, and Solar, only Solar, hears a phone ring once across the atrium; he asks to be told the bedtime story he was never
     home for). Sets eqx-heard-solji-phone (always), eqx-jaesang-tale-skipped | eqx-jaesang-tale-whole (or nothing).
     Shinjiro caught him by the collar on a stair (fair groundwork for 10/23, never marked). Its ending branches on ifEvent
     eqx-empty-chair (the fathers live at the dorm from 10/26). Late version (after 11/22): she's back and he walks the loop
     for her.
   Flags this file sets (all new, for flags.js): eqx-asked-parents-runners (should join story-act4.js ASKED),
   eqx-choose-parents-runners (should join MINE), eqx-solji-dress-green, eqx-solji-dress-own, eqx-solji-dress-late,
   eqx-solji-cakes-taken, eqx-heard-solji-phone, eqx-jaesang-tale-skipped, eqx-jaesang-tale-whole. Choice: asks.parents-runners.
   Runners fences: parents only as the book has them (the plan, the Foundation Dinner, Sunday at ten, the place card); nothing
   about Haechan past what Jaesang's "file" already says in Act III; Jaehyun's own story stays his link's. */
{
  // Same kiss flags as story-act3.js: dating(id) = the link's romance route, or a kiss this year.
  const KISS = {
    haechan: ['eqx-hc-roof-kiss', 'eqx-hc-stayed-night'],
    minji: ['eqx-minji-kiss'],
    akihiko: ['eqx-aki-lamp-kiss', 'eqx-aki-gate-kiss', 'eqx-aki-shallows-kiss', 'eqx-aki-room-kiss', 'eqx-aki-woke']
  };
  const dating = (id, then, els) => ({ ifRomance: id, then, else: [{ ifCount: { of: KISS[id], min: 1 }, then, else: els || [] }] });

(window.FEMC_GAME_LINKS ||= []).push({
  id: 'parents-runners', name: 'Jaesang & Solji Lee', short: 'Jaesang & Solji', arcana: 'Hanged Man', numeral: 'XII', from: 'Runners', kind: 'parent',
  world: 'R', romance: null, arrives: '8/25', starts: '8/26', lodging: 'boarding',
  members: ['jaesang-runners', 'solji-runners'], cast: { 'jaesang-runners': 'Jaesang', 'solji-runners': 'Solji', mrsoka: 'Mrs. Oka' },
  home: { area: 'mall', spot: 'Fountain', slot: 'evening', days: [0, 1, 4],
          hint: 'Sunday, Monday and Thursday evenings, by the fountain at Paulownia Mall, out for a walk after dinner.' },
  ranks: [
    { after: '8/29', title: '1: item three', place: 'Paulownia Mall · Fountain', time: 'Evening', music: 'tender', scene: [
      { bg: 'paulownia-mall-night' },
      { ifEvent: 'eqx-equinox', then: [
        // Played late: the mothers are gone (or back, and not themselves). Jaesang walks her loop alone.
        { n: "The fountain at Paulownia Mall was going in the evening the way it always went, three tiers of water falling into a round basin full of coins, and the shops round it lit up and half empty, and a man was walking round it, slowly, on his own." },
        { n: "Not walking. Going round. At a pace that wasn't his. Her father walked the way he did everything, toward something, already late for the next thing; this was a slower walk, a stopping walk, a walk that paused at every window as if someone on his arm had wanted to look. His left arm was crooked a little at the elbow. There was nobody in it." },
        { n: "Solar knew whose walk it was before she let herself know. Her mother's. Round the block on the Upper East Side every night after dinner when she was small, *to settle the stomach*, her father on the phone the whole way and her mother stopping at every window on the avenue to look at shoes she would never buy." },
        { ifEvent: 'eqx-1122', then: [
          { n: "Her mother was at the dorm now, upstairs, in a room with the light on all night. She couldn't walk far yet. She couldn't be touched on the back. She'd asked him, he said later, to do the walk for her, because somebody should, and he had said *of course*, and had been doing it every night since, round and round, with his arm crooked for no one." }
        ], else: [
          { n: "Her mother had been gone since the bridge. Her shoes were in a row in a front hall facing the door. And her father was walking her walk." }
        ] },
        { s: 'jaesang-runners', f: 'neutral', t: "...Solar." },
        { s: 'jaesang-runners', f: 'neutral', t: "Walk with me. I've got two more. She always did three." },
        { n: "She fell in beside him. On the right. He looked at her there, and at the empty crook of his left arm, and didn't say anything about either." },
        { n: "He had a notebook. Graph paper, a Japanese one from the stationer, squares where there should have been lines, which he'd always said was a paper for engineers and children. He opened it on the second lap without breaking pace and held it so she could read the page. Her own name at the top in his hand, and her brother's under it, and her mother's under that, and his own last. And under the names, a list, numbered, and most of it crossed out with one clean line each, the way he'd cross out a clause he'd already won." },
        { n: "The first line wasn't crossed out. *1. Find your mother.*" },
        { s: 'jaesang-runners', f: 'neutral', t: "There used to be a plan. It had a date in it. March. Miss Kirijo was very precise about March." },
        { s: 'jaesang-runners', f: 'serious', t: "It's still a plan. It's a shorter plan. When we have her, we are going home. All four of us. Through whatever door that girl finds. I'm not asking you, Solar. I'm telling you what the plan is, so you know where to stand." },
        { n: "He said it to the fountain. And then, because he'd never once in his life been able to leave a sentence alone, he said the other half, quieter." },
        { s: 'jaesang-runners', f: 'sad', t: "She'd have asked. That was the difference between us. She'd have asked you, and meant it as a question." },
        { choose: [
          { t: "When there's a door, I'll come home with you. I promise.", notes: 3, tally: { cakes: 1, 'asks.parents-runners': 'yes' }, then: [
            { n: "He stopped walking. He looked at her for a long moment, at her face, as if checking it for a clause he'd missed, and then wrote something beside the first line in small square letters, and she didn't have to read it to know it was *Agreed*." },
            { n: "Something small and warm went out of her as he wrote it. She didn't know where. Into the water, maybe. The fountain kept falling." }
          ] },
          { t: "Then stay here when you find her. Both of you. With me. Please.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.parents-runners': 'yes' }, flag: 'eqx-asked-parents-runners', then: [
            { s: 'jaesang-runners', f: 'surprised', t: "...You've never asked me for anything. Not a ride. Not a dollar. Not once since you were twelve." },
            { s: 'jaesang-runners', f: 'neutral', t: "Yes. All right. Yes." },
            { n: "He said it before he'd thought about it, which she had never seen him do. Something small and warm went out of her as he said it, out under her ribs and into the evening, and was gone." }
          ] },
          { t: "When I go anywhere, it'll be because I chose to. And where you go is yours.", notes: 2, tally: { choose: 1, 'asks.parents-runners': 'choose' }, flag: 'eqx-choose-parents-runners', then: [
            { s: 'jaesang-runners', f: 'neutral', t: "That isn't an answer." },
            { s: 'solar', f: 'neutral', t: "It's mine." },
            { n: "He looked at the notebook. He didn't cross anything out. He wrote, beside the first line, one word, and she read it upside down: *Pending.* It was the word he used for things he hadn't lost yet." }
          ] },
          { t: "I'm not going back to that house, Dad. Not to the plan.", notes: 2, tally: { 'asks.parents-runners': 'no' }, then: [
            { s: 'jaesang-runners', f: 'neutral', t: "...Noted." },
            { n: "It was Jaehyun's word. She'd never known it was his first. He closed the notebook and put it in his inside pocket and finished the lap with his arm still crooked for nobody, and didn't look at her again until the end of it." }
          ] }
        ] },
        { n: "At the end of the third lap he took a coin out of his trouser pocket, a hundred yen, and looked at it, and threw it into the basin underhand, badly, the way a man throws something he's only ever watched someone else throw." },
        { s: 'jaesang-runners', f: 'neutral', t: "She'd say I did that wrong." },
        { s: 'jaesang-runners', f: 'neutral', t: "...Go home. Twos. I know the rule. I'm going to do one more." },
        { n: "She left him there. At the escalator she looked back, and he was going round again, slower, stopping at the shoe shop window, his left arm crooked, his head turned a little to the side the way you turn your head to listen to someone telling you about shoes." }
      ], else: [
        { n: "The end of August didn't cool down at night in this town; it just got darker. The heat came back up out of the paving at Paulownia Mall as if the stones had been saving it all day, and the fountain in the middle of the concourse ran over its three tiers into a round basin full of coins, and the shops were lit and half empty, and a pair of middle school girls were sitting on the rim with their shoes off and their feet in the water, which was forbidden, which a security guard was pretending not to see." },
        { n: "And round the fountain, slowly, arm in arm, her parents were walking." },
        { n: "Solar stopped at the top of the escalator and watched them go round once before they saw her. She couldn't help it. She'd seen this from a stroller. Every night, when she was small, round the block on the Upper East Side after dinner, *to settle the stomach*: her mother's arm through her father's, her mother stopping at every lit window on the avenue to look at shoes she would never buy, her father on the phone the whole way round, saying *mm* into it, letting himself be steered." },
        { n: "He wasn't on the phone. He had it in his hand. It didn't work here, it hadn't worked since the long table, and he carried it anyway, the way you'd carry a watch that had stopped, and every few steps his thumb moved over the dark screen, and her mother steered him round the fountain past the shoe shop and the stationer and the flower stall, and stopped at the shoe shop, and looked." },
        { n: "Ten steps behind them, by the flower stall, a man in a dark suit was examining a bucket of chrysanthemums with total seriousness. Ishida. He saw Solar on the escalator and inclined his head, a quarter of an inch, and went back to the chrysanthemums." },
        { s: 'solji-runners', f: 'happy', t: "There she is! Jaesang. There she is. Sweetheart. Come and walk with us. Your father's being impossible." },
        { choose: [
          { t: "What's he done?", notes: 2, then: [
            { s: 'solji-runners', f: 'happy', t: "He's been writing since six. He wrote through dinner. The landlady put a bowl of rice on his notebook to make him stop, and he ate round it." },
            { s: 'jaesang-runners', f: 'neutral', t: "I ate the rice." },
            { s: 'solji-runners', f: 'happy', t: "You ate *round* the rice. There's a difference. She noticed. She notices everything, that woman." }
          ] },
          { t: "(Take Mom's other arm.)", notes: 3, then: [
            { n: "She came down off the escalator and took her mother's free arm without a word, and her mother looked down at the hand on her sleeve and then up at her, and her whole face did what it did on the first day of every holiday, when the car pulled up at the curb and the door opened." },
            { s: 'solji-runners', f: 'happy', t: "...Well. Look at us. We're a chain." }
          ] },
          { t: "Dad. Your phone doesn't work here.", notes: 2, then: [
            { s: 'jaesang-runners', f: 'neutral', t: "I'm aware." },
            { n: "He put it in his pocket. Four steps later it was in his hand again. He didn't seem to know he'd taken it out." }
          ] }
        ] },
        { n: "So they walked. Round the fountain, the three of them, at her mother's pace, which was the pace of a woman who'd never once in her life been in a hurry to get anywhere that didn't have a window on the way." },
        { n: "Her father had the notebook under his arm. A Japanese one from the stationer by the escalators, soft-covered, gray. On the second lap he took it out and opened it and held it at an angle so she could see, the way he'd hold a contract across a desk so the other side could read the part he wanted them to read." },
        { s: 'jaesang-runners', f: 'neutral', t: "Graph paper. They don't sell a legal pad in this entire town. I asked in four shops. I've been made to plan your future on paper for engineers and children." },
        { n: "It was a plan. Of course it was a plan. Numbered, in his small square capitals, every line ruled off with the side of his pen. Her name at the top. Her brother's under it. Her mother's. His own last, the way he signed the bottom of anything." },
        { n: "*1. Establish the mechanism of arrival.* Crossed through, neatly, and beside it: *Unknown. Miss K. doesn't know either. Believe her.* *2. Establish whether anyone has ever left.* Not crossed through. Beside it, underlined: *YES. Last year. All of them. Doors.*" },
        { s: 'jaesang-runners', f: 'neutral', t: "I interviewed Miss Kirijo. Twice. The boy with the silver hair. The girl who listens to things. I asked them all the same four questions in a different order. They went home, Solar. Last year. Everybody who came here went home. In March. Through doors. One each." },
        { s: 'jaesang-runners', f: 'neutral', t: "Miss Kirijo was very precise about the doors and very vague about everything else, which in my experience means the doors are the only part she understands." },
        { n: "*3.* Under that, nothing but a word, written once and gone over twice, the pen pressed so hard the paper had a ridge in it." },
        { n: "*MARCH.*" },
        { s: 'jaesang-runners', f: 'neutral', t: "So there's precedent. There's a date. I can work with a date. I've worked with worse." },
        { n: "Solar looked at the word. At the ridge in the paper, which she could have felt with her thumb from the back of the page. She'd been on a page like this before. Not this one; others. Her whole life had been on a page like this, in that square hand: the school, the other school, the summer program, the internship he'd arranged before she'd known what an internship was, the Foundation Dinner, the table, the seat at the table, the man she'd be seated beside. Every plan he had ever made for her had been a door he'd held open with one hand and pointed through with the other. And she'd run, every time, in every way she could find, and he'd made a new one, and held that open too." },
        { n: "Now he was holding one open on graph paper in a town that wasn't on any map he owned. Pointing home." },
        { ifEvent: 'eqx-three-dads', then: [
          { s: 'jaesang-runners', f: 'neutral', t: "I was handed my card back yesterday. By a boy with orange hair at a shop that never closes. I've had that card since before you were born. It doesn't exist here." },
          { s: 'jaesang-runners', f: 'neutral', t: "I don't exist here, as far as I can tell. The only things of mine that exist in this town are your mother and you and your brother. So I'd like to keep track of all three." }
        ] },
        { n: "Her mother had stopped at the fountain's rim. She had a little white envelope from her handbag, the kind the Group had given each of the parents on the first morning with a stack of yen in it and Mitsuru's handwriting on the front, and she was picking a coin out of it with her nails." },
        { s: 'solji-runners', f: 'happy', t: "Hold this." },
        { n: "She gave Jaesang the envelope. She held the coin up between two fingers, in the light from the shoe shop, and closed her eyes, and threw it, overhand, too hard, so that it went all the way across the basin and hit the far tier and dropped in with a sound like a tooth in a glass." },
        { s: 'jaesang-runners', f: 'neutral', t: "You don't believe in that." },
        { s: 'solji-runners', f: 'neutral', t: "I've had a very strange week, Jaesang. I'm keeping my options open." },
        { n: "She opened her eyes. She looked at Solar. And the light from the fountain moved on her face, which was fifty and lovely and very tired under the makeup she'd put on for a walk round a shopping mall, because she'd never once in her life gone out of the house without it." },
        { s: 'solji-runners', f: 'neutral', t: "Do you want to know what I wished?" },
        { s: 'solar', f: 'neutral', t: "You're not supposed to say." },
        { s: 'solji-runners', f: 'neutral', t: "I'm going to say. I'm your mother. The rules are different." },
        { s: 'solji-runners', f: 'sad', t: "I wished that when there's a door, you walk through it with us. That's all. I'm not going to make a speech about it. Your father makes the speeches." },
        { s: 'jaesang-runners', f: 'neutral', t: "It isn't a wish. It's item three." },
        { s: 'solji-runners', f: 'serious', t: "I'm *asking* her, Jaesang." },
        { n: "He stopped. Her mother didn't raise her voice, ever; she hadn't now. She'd just put a little weight on the word, the way she put a little weight on the brake." },
        { s: 'solji-runners', f: 'sad', t: "I've never once asked her. In eighteen years. I just set the table and hoped she'd sit down. I set her place every night after she went, sweetheart. Every night. The card and the good glass. Your father let me." },
        { s: 'solji-runners', f: 'neutral', t: "So I'm asking. Come home with us. When there's a door. Please." },
        { n: "The fountain fell. The middle school girls had gone. The security guard was looking at his watch. Ten steps off, by the chrysanthemums, Ishida had turned his back very slightly, to give them the room, the way a man turns his back at a wedding when the father of the bride's voice goes." },
        { n: "Solar stood between her parents with the coin her mother had thrown somewhere at the bottom of the basin under all the others, and felt the question sit on her chest like a hand, and her body went very quiet, the way it went quiet in the red, listening for something on the other side of a door." },
        { choose: [
          { t: "When there's a door, I'll come home with you. I promise.", notes: 3, tally: { cakes: 1, 'asks.parents-runners': 'yes' }, then: [
            { n: "Her mother's face. She'd remember it. It didn't break, or light up; it settled, the way a house settles when the last person comes in and shuts the door, and her mother put her hand flat on Solar's cheek for a second and took it away." },
            { s: 'solji-runners', f: 'happy', t: "Good. That's all. That's all I wanted. Now I'll stop." },
            { n: "Her father uncapped his pen. He wrote beside *MARCH*, small, square, and she didn't have to read it to know what it said. *Agreed.* He dated it. He always dated things." },
            { n: "And something small and warm went out of her as he wrote. From under her ribs, out into the lit concourse, into the water, she couldn't have said where. Gone. She stood there with her parents on either side of her and felt lighter, and didn't know why lighter felt like that." }
          ] },
          { t: "Don't go back. Stay here when it's March. Both of you. With me. Please.", notes: 3, tally: { asked: 1, cakes: 1, 'asks.parents-runners': 'yes' }, flag: 'eqx-asked-parents-runners', then: [
            { n: "It came out of her before she knew it was in there. Her mother's mouth opened. Her father, with the pen uncapped over the page, went completely still." },
            { s: 'jaesang-runners', f: 'surprised', t: "...You've never asked me for anything. Not a ride. Not a dollar. Not once since you were twelve." },
            { s: 'solar', f: 'neutral', t: "I'm asking." },
            { n: "Her mother put both arms round her. Right there, by the fountain, in front of the shoe shop and the stationer and Ishida, the way she hadn't since Solar was small enough to be picked up, and held on, and said into her hair, in a voice Solar had never heard her use, *yes, of course, of course we will, sweetheart, yes*." },
            { n: "Over her mother's shoulder Solar watched her father look at the page. At *MARCH*. He didn't cross it out. He drew a small question mark beside it, very neatly, the first she'd ever seen him put on paper." },
            { n: "And something small and warm went out of her, from under her ribs, into the concourse, into the falling water. Gone. She stood in her mother's arms and felt lighter, and didn't know why lighter felt like that." }
          ] },
          { t: "When I go anywhere, it'll be because I chose to. Whether you go is yours.", notes: 2, tally: { choose: 1, 'asks.parents-runners': 'choose' }, flag: 'eqx-choose-parents-runners', then: [
            { n: "Her mother looked at her. It took her a long moment. Then her mouth did something small and rueful at the corner, the face she made when a waiter told her the dish she wanted was off." },
            { s: 'solji-runners', f: 'sad', t: "...That's not yes." },
            { s: 'solar', f: 'neutral', t: "It's not no either, Mom." },
            { s: 'jaesang-runners', f: 'neutral', t: "It isn't an answer." },
            { s: 'solar', f: 'neutral', t: "It's mine." },
            { n: "Her father looked at her over the notebook. The look from across the island on Sunday mornings when she'd said something he hadn't expected and he was deciding whether to be annoyed or impressed and hadn't got there yet." },
            { s: 'solji-runners', f: 'neutral', t: "...She's right. Jaesang. Write that down." },
            { n: "He did. Beside *MARCH*, in small square capitals, a word she read upside down: *PENDING.* It was the word he used for deals he hadn't lost yet." }
          ] },
          { t: "I'm not going back to that house. Not to the plan. Not to the table.", notes: 2, tally: { 'asks.parents-runners': 'no' }, then: [
            { n: "She felt her mother's hand go out of the crook of her arm. Not snatched away. Just gone, as if it had forgotten it was there." },
            { s: 'jaesang-runners', f: 'neutral', t: "...Noted." },
            { n: "Jaehyun's word. She'd never known it was his first. Her father capped the pen and closed the notebook and put it in his inside pocket, and stood there with nothing left in his hands, and looked at the fountain." },
            { s: 'solji-runners', f: 'sad', t: "...The table's just a table, sweetheart. It doesn't have to be the table. It could just be dinner." },
            { n: "She said it so gently. It was worse than anything her father could have said. Solar didn't answer, and her mother didn't make her, and after a while they walked on, the three of them, not arm in arm, round the fountain once more in silence, her mother stopping at the shoe shop, looking at nothing." }
          ] }
        ] },
        { n: "They did one more lap. Her mother's rule was three. Her mother went ahead, the way she always did on the last lap, a few steps in front, drifting from window to window, and Solar and her father walked behind her side by side, not touching, the way they'd walked behind her through every department store in Manhattan." },
        { n: "He didn't say anything for most of it. Then, at the flower stall, low, so her mother wouldn't hear, he said it." },
        { s: 'jaesang-runners', f: 'neutral', t: "I don't know how long it's been. At home. My phone says one thing. The calendar in that boarding house says another. Your mother counts on her fingers when she thinks I'm not looking." },
        { s: 'jaesang-runners', f: 'sad', t: "She set your place every night after New Year's. I stopped asking her not to. I'd sit across from it. I got very good at not looking at it." },
        { s: 'jaesang-runners', f: 'neutral', t: "...I'm telling you so you know what she's like. In case you didn't. I'm not sure I did." },
        { place: 'Iwatodai · River Street', time: 'Night', bg: 'iwatodai-riverside-night', music: 'night', soft: true },
        { n: "They walked her mother home. Or her mother walked them; she had the route, along the river street under the lamps, past the third house at the bottom of the hill where an old woman sat in the window every night with a saucer of milk on the sill for a cat that never came. Ishida behind them, ten steps, his hands clasped behind his back." },
        { n: "Mrs. Oka was at the gate of the boarding house with a paper lantern. In her gray kimono and her white gloves, as if she'd been standing there since dinner for exactly this." },
        { s: 'mrsoka', f: 'happy', t: "There you are! I kept your plates warm. Solar-chan brought you home. Isn't that nice. Everyone home." },
        { n: "She put her gloved hand on Solji's shoulder as Solji went past her through the gate, and Solar watched her mother lean into it, just slightly, the way you'd lean into the hand of somebody you'd known all your life." },
        { s: 'solji-runners', f: 'happy', t: "Mrs. Oka's teaching me to do the rice tomorrow. Properly. In the pot. I've only ever done it in the machine." },
        { s: 'mrsoka', f: 'happy', t: "She's a natural. She has the hands for it." },
        { n: "Her father stopped at the gate. He looked at Mrs. Oka's gloves in the lantern light, at the flour on the cuffs at half past nine at night, and Solar saw him do it: the file face, the one he wore across a table from a man whose numbers came out too clean. It lasted a second. Then he inclined his head, politely, and went in after his wife." },
        { n: "Ishida walked Solar up the hill to the dorm. Twos; that was the rule, and the Group's men counted. He didn't say anything for most of the way. At the corner by the post office, where the dorm's light came into view, he stopped, the way the household all stopped there now." },
        { n: "*Your mother asked me if I had children,* he said. In careful English. *I said two daughters. Fourteen and nine. She said, then you know.*" },
        { n: "He bowed. Lower than a guard bowed to a girl he was paid to walk home. Then he went back down the hill toward the river and the lantern at the gate, and she stood at the corner and watched him go, a man in a dark suit in the heat with his hands behind his back, until the dark took him." }
      ] }
    ] },

    { after: '9/12', title: '2: three ways', place: 'Paulownia Mall · Fountain', time: 'Evening', music: 'tender', scene: [
      { bg: 'paulownia-mall-night' },
      { ifEvent: 'eqx-equinox', then: [
        // Played late: the dress Solji bought for the 23rd, brought by Jaesang.
        { n: "Her father was sitting on the rim of the fountain with a shopping bag between his feet. Stiff paper, a boutique's name on the side in silver, ribbon handles. He was sitting the way he'd never sat on anything in public, elbows on his knees, his good trousers on the wet stone, and he didn't get up when she came." },
        { s: 'jaesang-runners', f: 'neutral', t: "It was in the wardrobe. At the back. Behind my shirts. I didn't know it was there till this morning." },
        { n: "He lifted the bag onto his knee. Inside, folded in tissue the way only one woman Solar knew folded tissue, a dress. Green. Not velvet; it was September. A soft deep green with a narrow belt, the kind of thing that would stand out on a lawn. And on top of the tissue a receipt, dated the fifteenth, a Wednesday, and a card from the shop with a line on the back in pencil, small and slanted, a little crooked, as if written standing at a counter." },
        { n: "*For S. For the 23rd. It photographs.*" },
        { ifEvent: 'eqx-1122', then: [
          { s: 'jaesang-runners', f: 'sad', t: "I showed it to her. Upstairs. I thought it might— I thought she'd like to give it to you herself." },
          { s: 'jaesang-runners', f: 'sad', t: "She didn't remember buying it. She looked at her own handwriting for a long time. Then she asked me to take it away, and turned the light up, and I sat outside the door until she was asleep. Sitting up. She sleeps sitting up now." }
        ], else: [
          { s: 'jaesang-runners', f: 'sad', t: "She was going to give it to you on the morning. She'd have made you try it on in the hall and turned you round three times. I'd have said it was fine. She'd have said *fine* isn't a word." }
        ] },
        { s: 'jaesang-runners', f: 'neutral', t: "I don't know what to do with it. I've been sitting here two hours deciding. I'm not good at things I can't decide in under a minute." },
        { choose: [
          { t: "(Take it. Go and put it on. Show him.)", notes: 3, flag: 'eqx-solji-dress-late', then: [
            { n: "She took it to the restroom by the escalators and changed in a stall with her elbows hitting the walls, and came back across the concourse in it, in the green, barefoot because her sneakers were wrong with it, carrying them." },
            { n: "Her father stood up. He looked at her. He looked for a long time, the way he'd looked at Jaehyun at the bottom of a hundred and twelve stairs." },
            { s: 'jaesang-runners', f: 'neutral', t: "...Turn round." },
            { n: "She turned round. Once, twice, three times, by the fountain, in front of the shoe shop, in her mother's dress. He watched all three." },
            { s: 'jaesang-runners', f: 'sad', t: "It photographs. She was right. She's always right about that. I never once told her." }
          ] },
          { t: "(Hold the bag. Don't open it any further.)", notes: 2, then: [
            { n: "She took the bag onto her own knee and held it, closed, the tissue folded back the way her mother had folded it, and sat beside him on the rim of the fountain without opening it any further. He nodded, as if that were an answer. Maybe it was." }
          ] },
          { t: "Keep it, Dad. Give it to me when she can.", notes: 2, then: [
            { n: "He looked at her. Then he folded the tissue back over the dress, exactly, the way it had been, and put the card on top, and closed the bag, and held it on his knee with both hands." },
            { s: 'jaesang-runners', f: 'neutral', t: "...When she can. All right. I'll put that in the plan." }
          ] }
        ] },
        { n: "He called her mother's number at seven fifteen. In the evening. He did it without looking at his watch, the phone already in his hand, and held it to his ear while the fountain fell, and it didn't connect, and he put it away." },
        { s: 'jaesang-runners', f: 'neutral', t: "Go home. Twos. Eat something." },
        { n: "It was her mother's sign-off. He'd never once in her life used it. He heard himself use it, and she watched him hear it, and neither of them said anything about that." }
      ], else: [
        { n: "Her mother called at ten." },
        { n: "Sunday morning, ten o'clock exactly, on the phone Mitsuru had given each of the parents, to the phone Solar had woken up holding in April. From the boarding house to the dorm. Eight hundred meters, Solar had worked out once, walking it; you could see the persimmon tree in the garden from the dorm roof." },
        { s: 'solji-runners', f: 'happy', t: "There you are, dear." },
        { s: 'solar', f: 'neutral', t: "Mom. You're down the road." },
        { s: 'solji-runners', f: 'neutral', t: "It's Sunday at ten. I'm not stopping just because you're down the road. I've done this every week since August of last year. I'm not breaking a streak for geography." },
        { s: 'solji-runners', f: 'happy', t: "Six o'clock. The fountain. Wear something you don't mind taking off. That came out wrong. You know what I mean. We're shopping." },
        { n: "She hung up the way she always did, quickly, before anyone could say anything that would need answering, and Solar lay in bed with the phone on her chest and the window open and the cicadas going, and smiled at the ceiling for a long time without deciding to." },
        { place: 'Paulownia Mall · Fountain', time: 'Evening', bg: 'paulownia-mall-night', music: 'city', soft: true },
        { n: "Her mother was at the fountain at six with three shopping bags already, and Ishida carrying two more, at a respectful distance, with the face of a man who had been in the Group's night unit and had seen things in the green no one should see and had never once, before this afternoon, been asked his opinion on a sandal." },
        { s: 'solji-runners', f: 'happy', t: "Mr. Ishida has excellent taste. I didn't expect it. He has daughters, that's why. He knows what a girl will actually wear and what she'll leave in the bag with the tags on." },
        { n: "Ishida bowed, slightly, over the bags. Solar thought she saw the corner of his mouth move." },
        { ifEvent: 'eqx-moon-ask', then: [
          { s: 'solji-runners', f: 'happy', t: "It's for the twenty-third. The moon-viewing. Mrs. Oka's doing a hundred dango and we're all going down to the sea in the evening, everybody, the whole house, and I said to myself, Solji, you haven't dressed that girl for a party in two years. You haven't dressed her for anything." }
        ], else: [
          { s: 'solji-runners', f: 'happy', t: "Mrs. Oka says there's a moon coming. A big one. On the equinox. She says we'll all go down to the sea for it. I said to myself, Solji, you haven't dressed that girl for anything in two years." }
        ] },
        { s: 'solji-runners', f: 'neutral', t: "So. There's a shop on the second floor with a three-way mirror and a woman who doesn't speak to you until you speak to her, which is the only kind of shop worth going into on any continent. Come on." },
        { place: 'Paulownia Mall · Boutique', time: 'Evening', bg: 'inside-mall', music: 'tender', soft: true },
        // BG: paulownia-boutique-fitting-room — a small upscale boutique fitting area in a Japanese mall at evening, a curtained cubicle and a tall three-panel mirror, soft warm light, a velvet stool with a shopping bag on it.
        { n: "The shop was small and cool and smelled of new fabric and the kind of candle that cost more than the dresses. The woman at the counter bowed and said nothing, as promised. Her mother went along the rails the way she went along the rails at Bergdorf's, touching everything with two fingers and taking nothing, until she took something, and that was the one." },
        { n: "It was green. Of course it was green. A deep soft green with a narrow belt, a little longer than Solar would ever have picked, the kind of dress you could see from across a lawn." },
        { s: 'solji-runners', f: 'happy', t: "Green. You always look well in green. Christmas, the velvet one, I had it taken in. You never got to—" },
        { n: "She stopped. Something went over her face and was folded away, neatly, the way she folded tissue. She held the dress out." },
        { s: 'solji-runners', f: 'neutral', t: "Go on." },
        { n: "So Solar went into the cubicle and changed, and came out in it, and stood in front of the three-way mirror with her mother behind her doing up the belt." },
        { n: "Three of her. That was the thing about a three-way mirror; she'd always hated them. Three girls in a green dress, the middle one facing her and the other two turned a little away, toward the walls, showing the side of her face she never saw, the back of her neck, the place where her hair parted. Three of her, from three angles, and her mother's hands at the waist of every one." },
        { n: "Her mother stopped doing up the belt. She was looking in the mirror too. Not at the dress. At the three of them." },
        { s: 'solji-runners', f: 'neutral', t: "...Which one's mine?" },
        { n: "She said it lightly. A joke; the voice for a joke. And then she heard it, Solar saw her hear it, the same words Mr. Kim had said at the long table in the red with a remote in his hand, and her mother's hands went still at Solar's waist." },
        { s: 'solji-runners', f: 'sad', t: "...She knew about the soup. Miseon. The first morning. She knew you'd be cold by eleven if you didn't eat something warm. I didn't know you ever ate soup. In my whole life I've never seen you eat soup in the morning." },
        { s: 'solji-runners', f: 'sad', t: "And Mrs. Kim. The ketchup. She says you've eaten it every day since you were seven. You don't like ketchup. You've never liked ketchup. You pick it off things." },
        { s: 'solji-runners', f: 'neutral', t: "And you sleep with the light off there. Miseon told me that too. In the kitchen. She didn't mean anything by it. You've slept with the hall light on since you were four, sweetheart. I've left it on every night for fourteen years." },
        { n: "In the mirror, three of Solar looked at three of her mother. Behind her mother, in the side panels, the shop went on and on, folding back into itself, rail after rail, the counter, the woman who didn't speak, a door, the dark concourse past the glass." },
        { s: 'solji-runners', f: 'neutral', t: "Tell me something. About them. About you, there. I don't want to be the one who doesn't know." },
        { choose: [
          { t: "(Tell her about the house on the hill. The sea. Miseon's soup.)", notes: 3, then: [
            { n: "She told her. Not everything. Nothing she couldn't. A house on a hill over a harbor where the tide went out so far you could walk on the bottom of the sea. A kitchen with a low table. A woman who said almost nothing and watched you eat until you'd finished, every time, every bowl. A dark bedroom with the window open on the salt." },
            { n: "Her mother listened with her hands on Solar's waist and her face in the mirror very still, the way she listened to the radio in the kitchen to the music she'd never once known the name of." },
            { s: 'solji-runners', f: 'neutral', t: "...She loves you very much. I could see that the first night. The way she put her hand on your hair. Like checking it was solid." },
            { s: 'solji-runners', f: 'sad', t: "I'm glad. I'm glad somebody watched you finish your soup. I was always on the phone." }
          ] },
          { t: "(Tell her about the apartment with the steel door. The ketchup. The dog.)", notes: 3, then: [
            { n: "She told her. A steel apartment door with a lit doorbell. A dog the size of a sofa who slept on her legs. A woman who opened her bedroom door at eleven o'clock exactly to make sure she was behind it, and who didn't believe a single thing she said, ever, and was right not to." },
            { s: 'solji-runners', f: 'happy', t: "A dog! We never had a dog. Your father said a dog in the city was cruelty. He meant to the furniture." },
            { s: 'solji-runners', f: 'neutral', t: "...She doesn't believe you. Mrs. Kim. I can see that. She looks at you like a woman doing a crossword." },
            { s: 'solji-runners', f: 'sad', t: "I always believed you. Every time. Even when I knew. I thought that was what you wanted. I'm not sure now it was the kinder thing." }
          ] },
          { t: "It's all me, Mom. Every one. I like soup. I eat the ketchup. I'm yours.", notes: 2, then: [
            { n: "Her mother laughed. Not much. A little breath of a laugh in the mirror, three times." },
            { s: 'solji-runners', f: 'neutral', t: "That's the most diplomatic thing you've ever said to me. Your father would hire you." },
            { s: 'solji-runners', f: 'sad', t: "...I'm only one of the ones you're, though. Aren't I. That's all right. I'm learning. I'm a very slow learner and a very fast shopper." }
          ] }
        ] },
        dating('haechan', [
          { s: 'solji-runners', f: 'neutral', t: "And the boy. Don't make the face. You've got the face. The one with the Greek letters, your father says. The one Mr. Lee from the other house calls *son*." },
          { s: 'solji-runners', f: 'happy', t: "Two families have had him to dinner, sweetheart. I'd like to be the third. I'd like to see what he does with a fish knife." }
        ], [
          dating('minji', [
            { s: 'solji-runners', f: 'neutral', t: "And Minji Kim. Don't make the face. She came to Thanksgiving with a camera once and filmed my soup." },
            { s: 'solji-runners', f: 'happy', t: "She keeps it off at the table here. I noticed. Nobody thinks I notice anything. I noticed that." }
          ], [
            dating('akihiko', [
              { s: 'solji-runners', f: 'neutral', t: "And the tall boy. With the tape on his hands. He stands up when I sit down. Every time. Even at breakfast, with his mouth full." },
              { s: 'solji-runners', f: 'happy', t: "Your father says *good posture*. That's the nicest thing your father has said about a boy in eighteen years." }
            ], [
              { s: 'solji-runners', f: 'neutral', t: "And there's nobody. Your father checked the funny boy's book. Three times. He's very relieved. I'm a little disappointed. Somebody should be bringing you things." }
            ])
          ])
        ]),
        { s: 'solji-runners', f: 'neutral', t: "Well? Is it the one? You can say no. I'll know if you say yes and mean no. I'll know anyway." },
        { choose: [
          { t: "(It's the one. Wear the green, for her.)", notes: 3, flag: 'eqx-solji-dress-green', then: [
            { n: "She turned in front of the mirror. Three girls in green turned with her. Her mother made her do it again, and again, three times, the way she had in the front hall before every party Solar had ever been walked into." },
            { s: 'solji-runners', f: 'happy', t: "It photographs. I knew it would. Mr. Ishida! Isn't it the one?" },
            { n: "Ishida, by the door, with the bags, looked at the girl in the green dress for a polite half second and bowed his head, gravely, as if he'd been asked to confirm a signature. Her mother was delighted." }
          ] },
          { t: "(Pick your own off the rail. Show her.)", notes: 3, flag: 'eqx-solji-dress-own', then: [
            { n: "She went back out to the rails. She didn't go along them the way her mother did; she went straight to the one she'd seen coming in, short and dark and a little strange, with sleeves her mother would call *a choice*, and took it into the cubicle, and came out in that instead." },
            { n: "Her mother looked at the three of her in the mirror for a long time." },
            { s: 'solji-runners', f: 'surprised', t: "...Oh." },
            { s: 'solji-runners', f: 'neutral', t: "Oh, that's you. Isn't it. That's who you are when I'm not dressing you." },
            { n: "She didn't say she liked it. She took the green one off the stool and hung it back on the rail herself, smoothing it on the hanger, and paid for the dark one at the counter with Mitsuru's yen, counting them out carefully, and didn't say anything about it on the escalator, and at the bottom said *it photographs, actually*, as if the words had been dragged out of her, and Solar laughed so hard the escalator man looked round." }
          ] },
          { t: "You pick, Mom. I like it when you pick.", notes: 2, then: [
            { n: "Her mother looked at her in the mirror with an expression Solar had never seen and couldn't name. Then she picked. The green. Of course. And did up the belt one notch tighter than it needed, and patted it, and said *there*, and Solar let her." }
          ] }
        ] },
        { place: 'Paulownia Mall · Fountain', time: 'Evening', bg: 'paulownia-mall-night', music: 'eerie', soft: true },
        { n: "They sat on the rim of the fountain afterward with the bags round their feet, and her mother opened her handbag and took out a napkin folded into a little square, and unfolded it on her knee." },
        { n: "A rice cake. White, soft, a little dusted. One of the ones from the tin with the cranes on it." },
        { s: 'solji-runners', f: 'flustered', t: "Don't look at me like that. Mrs. Oka packs me one. Every time I go out. Like a schoolgirl. *For later, dear, in case.*" },
        { s: 'solji-runners', f: 'neutral', t: "I've never been this hungry in my life, sweetheart. Never. I've put on two kilos since August. Your father pretends not to see. Mrs. Oka says it's the sea air." },
        { n: "She laughed. She broke a piece off the rice cake. And then, still holding it, she said the other thing, lightly, looking at the water, the way she said things at the kitchen island that she'd been thinking about for a week." },
        { s: 'solji-runners', f: 'neutral', t: "She asked us to stay for the moon. All of us. Mrs. Oka. And I said yes before she'd finished asking. I don't think I've said no to anything since I got here. Not to her. Not to anyone. It's lovely. It's like being on holiday from myself." },
        { n: "There was a phone on a screen, in Solar's head, under a lamp on a hot pavement. A short list of names. Danielle's voice, flat as a ruler. *Your mothers aren't on it. None of them. Not once.*" },
        { n: "The fountain fell. Her mother lifted the piece of rice cake toward her mouth." },
        { choose: [
          { t: "(Take it out of her fingers. Take the rest out of her bag.)", notes: 2, flag: 'eqx-solji-cakes-taken', then: [
            { n: "She took it. Out of her mother's fingers, and the rest off the napkin, and folded the napkin round all of it and put it in her own pocket, with her brightest face, the one from Foundation dinners, *I'm starving, you can't eat in front of me, it's cruelty*." },
            { s: 'solji-runners', f: 'surprised', t: "...You don't even like sweet things." },
            { s: 'solar', f: 'neutral', t: "I do here." },
            { n: "Her mother looked at her for a second too long, the crossword look Solar had just told her about in somebody else's face. Then she laughed and let it go and licked the white dust off her fingers, absently, the way you would, and Solar watched her do it and couldn't stop it." },
            { n: "She dropped the napkin in the canal on the way out. It didn't float." }
          ] },
          { t: "You could say no to her, Mom. Once. Just to see what it's like.", notes: 3, then: [
            { s: 'solji-runners', f: 'happy', t: "To what? To dinner? To a hundred dango?" },
            { s: 'solar', f: 'neutral', t: "To anything. One thing." },
            { n: "Her mother looked at her, amused, and then, slowly, less amused, the piece of rice cake still in her fingers. She looked at it. She put it back on the napkin." },
            { s: 'solji-runners', f: 'neutral', t: "...I'll practice. On your father. He could stand to hear it." },
            { n: "She folded the napkin back up round it and put it in her handbag, and closed the bag, and kept her hand on the clasp. Solar watched her hand stay there. It stayed there a long time." }
          ] },
          { t: "(Let her eat it. Say nothing.)", notes: 1, then: [
            { n: "She let her. Her mother ate the rice cake in three small bites on the rim of the fountain with her eyes closed, and made the sound she made over a good dessert at a restaurant she'd book again, and licked the white dust off her fingers, absently, the way you would." }
          ] }
        ] },
        { n: "Her father came at half past seven to carry the bags. Ishida had called him, apparently; or he'd simply come, the way he came to the end of things to collect them. He took all five bags off Ishida without asking, which was the closest he could get to thanking a man, and Ishida let him, which was the closest he could get to being thanked." },
        { s: 'jaesang-runners', f: 'neutral', t: "How much of your mother's money did she spend." },
        { s: 'solji-runners', f: 'happy', t: "Miss Kirijo's money. All of it. Every yen. It was a very good evening." },
        { n: "Her mother took Solar's arm on the way to the escalator. The bags went on ahead with her father. On the escalator going down, standing one step below, her mother turned round and looked up at her and did the thing with the hair, tucking it behind her ear on one side, the way she'd done it in the front hall before every party." },
        { s: 'solji-runners', f: 'happy', t: "Sunday at ten. Next week too. Don't think I won't." },
        { s: 'solji-runners', f: 'happy', t: "Love you. Eat something." },
        { n: "She turned round again before Solar could answer, quickly, the way she hung up the phone, and rode the rest of the way down facing forward with her hand on the rail, in her cream cardigan, her hair coming loose from its clip at the side." },
        { n: "Next Sunday was the nineteenth. Solar thought it, on the escalator, for no reason at all: the nineteenth, ten o'clock. She'd pick up on the first ring. She thought it so clearly that she could feel the phone in her hand, and didn't know why her hand had gone cold." }
      ] }
    ] },

    { after: '10/11', title: '3: her pace', place: 'Paulownia Mall · Fountain', time: 'Evening', music: 'tender', scene: [
      { bg: 'paulownia-mall-night' },
      { ifEvent: 'eqx-1122', then: [
        // Played after the mothers are brought back: he walks the loop for her.
        { n: "November had come in hard off the sea, and the concourse at Paulownia Mall had its doors shut against it and the fountain going in a lit hush, and her father was walking round it at her mother's pace, slowly, stopping at the windows, his left arm crooked for no one." },
        { n: "Her mother was at the dorm. Upstairs, in a room with the light on all night, sitting up. Nobody could touch her back. She flinched at the sound of a kettle. She had looked at Solar on the first morning, in the ward in Tatsumi, for a long time, with the expression of someone trying to remember the name of a song." },
        { s: 'jaesang-runners', f: 'neutral', t: "She asked me to do the walk. She said, somebody should. So I do it. Three laps. Shoe shop, stationer, flowers. Her order." },
        { s: 'jaesang-runners', f: 'sad', t: "She doesn't remember the story. The one about the sun and the moon. She told it to you every night for a year, she told the other two mothers so at Chuseok. She doesn't remember telling it to anyone. She asked me if she ever did." },
        { s: 'jaesang-runners', f: 'sad', t: "I wasn't home at bedtime. Not once. I couldn't tell her." },
        { s: 'jaesang-runners', f: 'neutral', t: "...You were there. Tell it to me. The way she did it. Then I'll go up and tell it to her. Somebody in that house should know it in her voice." },
        { choose: [
          { t: "(Tell it the way she did. Skip the tiger.)", notes: 3, flag: 'eqx-jaesang-tale-skipped', then: [
            { n: "She told it walking. The mother going home over the hills with a basket of rice cakes, and then, the way her mother had always done it, a little breath, and *then the children climbed up and up and up*, and the golden rope, and the sun and the moon. No tiger. No door. Her father walked beside her and listened with his head on one side, the way he listened to a pitch, and at the end he didn't say anything for most of a lap." },
            { s: 'jaesang-runners', f: 'neutral', t: "...That's very short." },
            { s: 'solar', f: 'neutral', t: "She made it short. She made it short on purpose." },
            { s: 'jaesang-runners', f: 'sad', t: "Yes. That sounds like her. She always cut the part that would keep you up." }
          ] },
          { t: "(Tell all of it. The tiger and the door too.)", notes: 2, flag: 'eqx-jaesang-tale-whole', then: [
            { n: "She told all of it. The rice cakes on every hill. The tiger. The clothes. The knock. *Open the door, it's only me.* Her voice went strange on that line and she let it; she didn't do the voice." },
            { n: "Her father had stopped walking. He stood by the shoe shop window with his arm still crooked and his face very still, the face from the steps on the night of the fathers, and she watched him put it together, slowly, the way he read a contract, and get to the end, and not be able to go back to the beginning." },
            { s: 'jaesang-runners', f: 'neutral', t: "...I'll tell her the short one." }
          ] },
          { t: "I can't, Dad. Not tonight.", notes: 2, then: [
            { s: 'jaesang-runners', f: 'neutral', t: "No. All right. Another night." },
            { n: "He said it the way he'd say it about a meeting. Then he walked on, and she walked with him, and on the third lap at the flower stall he said, to the flowers, *I'll learn it somewhere*, and she believed him." }
          ] }
        ] },
        { n: "He finished the third lap. He didn't throw a coin. He looked at the fountain for a while, and then at his daughter, and then at the crook of his own arm, as if surprised to find it still bent." },
        { s: 'jaesang-runners', f: 'neutral', t: "Go home. Twos. I'll be up after. I sit outside her door till she's asleep. Your brother takes the second half." }
      ], else: [
        { n: "October had come in off the sea in the last week, all at once, the way it did here, and the concourse at Paulownia Mall had its big glass doors shut against it for the first time since spring. Inside, the air was warm and dry and smelled of roasted chestnuts from a cart by the escalators. The fountain went over its three tiers in the lit hush. Somebody had put up paper maple leaves in the shop windows." },
        { n: "Her father was walking round the fountain at her mother's pace." },
        { n: "Solar saw it from the top of the escalator and stopped, and stood there, and let people go past her down the moving stairs, because she couldn't make her feet go on. A slow walk. A stopping walk. He paused at the shoe shop window and stood looking into it, for as long as it would take somebody to look at every pair. Then the stationer. Then the flower stall. His left arm was crooked a little at the elbow, and held a little away from his side, the way you'd hold it if someone had their arm through it." },
        { n: "There was nobody in it." },
        { n: "And nobody ten steps behind him. That was the other thing. She looked for the dark suit by the chrysanthemums before she knew she was looking, and there was only the woman from the flower stall, who ate at the long table, putting her buckets in for the night." },
        { n: "She went down. She came up beside him at the stationer, on his right, and he didn't startle; he'd known she was there, the way he'd always known." },
        { s: 'jaesang-runners', f: 'neutral', t: "Shoe shop. Stationer. Flowers. In that order. Three times. She never went the other way round. I asked her once why not and she said, *Jaesang, it's a fountain, it doesn't have another way round*." },
        { s: 'jaesang-runners', f: 'neutral', t: "...Walk with me. I've done one." },
        { choose: [
          { t: "(Take his arm. The way she did.)", notes: 3, then: [
            { n: "She put her arm through the crook of his. It was the wrong height; her mother was shorter. He felt it be the wrong height. He didn't say anything. He adjusted, a little, lowering the elbow, the way you'd adjust a chair someone else had been sitting in, and they walked." }
          ] },
          { t: "Dad. Have you eaten?", notes: 2, then: [
            { s: 'jaesang-runners', f: 'neutral', t: "Your brother took the bones out of a fish for me. At six. Again. He's very thorough. I ate it so he'd stop looking at me." },
            { s: 'jaesang-runners', f: 'neutral', t: "...The boy with the coat brings things. Stew. Rice. He doesn't knock. He just puts it down in front of me and sits where he can see me until I've finished. Like a man on a shift." }
          ] },
          { t: "(Walk on his other side. Leave her side empty.)", notes: 2, then: [
            { n: "She walked on his right. She left the left for nobody. He glanced at her once, at which side she'd taken, and his mouth did something brief, and he walked on with his arm crooked for a woman who wasn't there and his daughter on the other side, and the two of them went round the fountain in a row of three with a gap in it." }
          ] }
        ] },
        { n: "They went round. He stopped at the shoe shop. She stopped with him. He looked at the shoes for exactly as long as her mother would have, and she found she could time it too, she'd been timing it since she was in a stroller." },
        { s: 'jaesang-runners', f: 'neutral', t: "Every night. Since the twenty-fifth. I came the first night because I didn't know where else to go, and I found I was walking it, and I couldn't stop till I'd done three." },
        { s: 'jaesang-runners', f: 'neutral', t: "It's a terrible walk. It doesn't go anywhere. It took me twenty years to notice that it wasn't supposed to." },
        { n: "He had the notebook. Of course he did. Graph paper, gray cover, soft now at the corners from his breast pocket. He took it out at the stationer, where she'd seen it bought, and opened it, and held it so she could read, the way he'd held it in August." },
        { n: "Her name at the top. Her brother's. Her mother's. His. And under them, every line she remembered, *establish the mechanism*, *establish whether anyone has ever left*, *MARCH* gone over twice so hard it had ridged the paper; every one of them crossed out. Not one clean line each, the way he'd cross out a clause he'd won. Over and over, back and forth, until the paper had worn through in places." },
        { n: "And above them all, at the very top, squeezed in above her own name in smaller capitals, as if he'd gone back and added it to a page that hadn't had room, one line." },
        { n: "*1. Find your mother.*" },
        { s: 'jaesang-runners', f: 'neutral', t: "I crossed out March." },
        { s: 'jaesang-runners', f: 'serious', t: "I go to Miss Kirijo every morning after I call. I ask her to let me go down there. Under the school. Wherever you go at midnight. I've asked her eighteen mornings. She says no in a different way every morning. She's very good. She'd do well in my business." },
        { s: 'jaesang-runners', f: 'neutral', t: "I've never been very good at no. Your mother was the only person who could say it to me. And she said it so rarely that I always did what she said." },
        { ifEvent: 'eqx-1023', then: [
          { n: "He stopped by the flower stall. He put his hand flat on the cold rim of the fountain, the way you'd steady yourself on a rail." },
          { s: 'jaesang-runners', f: 'serious', t: "...I saw her. On those steps. Coming up. I know what I saw. It was wearing her face. It had her clip in its hair." },
          { s: 'jaesang-runners', f: 'neutral', t: "I still walk her walk. I don't know what that makes me. Your mother would know. She'd say something unbearable and correct." },
          { ifFlag: 'dead.shinjiro', then: [
            { s: 'jaesang-runners', f: 'sad', t: "And that boy. With the coat. He stepped in front of me. I was behind. I'd stopped on the step because it said my name in her voice. He stepped in front of me and it— and he—" },
            { n: "He didn't finish. He looked at the flowers. White chrysanthemums, in a bucket, the last one not yet taken in." },
            { s: 'jaesang-runners', f: 'sad', t: "He asked me if I'd eaten. At the end. On the steps. That was the last thing he said to me. I'd like someone to tell me what I'm supposed to do with that." }
          ], else: [
            { s: 'jaesang-runners', f: 'neutral', t: "That boy. With the coat. He took me by the collar on the steps when I'd stopped. When it said my name. He took me by the collar and pulled, and something went past where I'd been standing, and his coat came apart in three pieces." },
            { s: 'jaesang-runners', f: 'neutral', t: "He hasn't said a word about it since. He put a bowl in front of me the next morning and sat where he could see me. I've tried to thank him four times. He walks out of the room." }
          ] }
        ], else: [
          { s: 'jaesang-runners', f: 'neutral', t: "The boy with the coat caught me on the stairs on Tuesday. At the boarding house. I'd missed a step in the dark; that staircase has one too many, I swear it does. He had me by the collar before I'd started to fall. With the bad hand." },
          { s: 'jaesang-runners', f: 'neutral', t: "He didn't say anything. He put me back on the step like a coat on a hook and went on down. I've had bodyguards for twenty years. None of them ever did that without being paid." }
        ] },
        { place: 'Paulownia Mall · Fountain', time: 'Evening', bg: 'paulownia-mall-night', music: 'eerie', soft: true },
        { n: "At seven fifteen he took out his phone." },
        { n: "He didn't look at his watch. He didn't have to. The phone was in his hand and his thumb was on the name before Solar had registered what he was doing, and he held it to his ear and stood still by the fountain, facing the water, and waited." },
        { s: 'jaesang-runners', f: 'neutral', t: "...Mornings and evenings now. Twice. Your brother doesn't know about the evenings. Don't tell him. He sets an alarm for the mornings so he's awake when it doesn't connect. I don't want him setting another." },
        { n: "It didn't connect. She could hear that from where she stood: not ringing, not a voice, not anything, the dead flat silence of a number that went nowhere. He held it to his ear anyway. The fountain fell." },
        { n: "And across the concourse, from the far end, where the stationer had its shutter half down for the night and the lights were off and the floor went dark under the paper maple leaves, a phone began to ring." },
        { n: "Faint. One phone. A ringtone. Strings, a few bars of something old and swooping, the kind of thing that played on a kitchen radio on a Sunday morning, a piece her mother had loved her whole life and never once known the name of, and had set as her ringtone the year Solar was born, and never changed." },
        { n: "It rang four times." },
        { n: "Solar couldn't move. The skin on her arms had gone tight from the wrist up. She looked at her father. He was standing with the phone at his ear, facing the water, his eyes on the falling fountain, and his face didn't change. He hadn't heard it. The fountain was between him and the dark end, and the fountain was loud, and he was listening so hard to the silence in his own phone that there was no room in him to hear anything else." },
        { n: "He lowered the phone. Across the concourse the ringing stopped, mid-bar, in the dark, as if a hand had closed on it." },
        { flag: 'eqx-heard-solji-phone' },
        { s: 'jaesang-runners', f: 'neutral', t: "...Nothing. It's always nothing. I don't know why I expect a different nothing." },
        { choose: [
          { t: "(Say nothing. Stay with him. Don't look at the dark end.)", notes: 3, then: [
            { n: "She didn't look. She kept her eyes on her father's face and her body between him and the far end of the concourse, the way Hanni stood between Hyein and a door, and she didn't look, not once, though the back of her neck wanted it so badly that it ached." }
          ] },
          { t: "Dad. Call again.", notes: 2, then: [
            { s: 'jaesang-runners', f: 'surprised', t: "...What?" },
            { s: 'solar', f: 'neutral', t: "Just once more. Humor me." },
            { n: "He looked at her strangely. Then he did it. He held the phone to his ear again, and the dead flat silence came out of it, and Solar stood with her whole body turned toward the dark end of the concourse, and listened, and listened, and nothing rang. Nothing at all. The fountain fell." },
            { s: 'jaesang-runners', f: 'neutral', t: "...Nothing. What did you think it would do?" },
            { s: 'solar', f: 'neutral', t: "Nothing. I don't know. Sorry." }
          ] },
          { t: "(Walk to the dark end. Look.)", notes: 2, then: [
            { n: "She said *one second* and walked across the concourse before she could think, past the fountain, past the chestnut cart, into the dark end under the paper leaves where the stationer's shutter was half down and the floor was the color of the river at night." },
            { n: "There was nothing there. A bench. A bin. The shutter. Under the shutter's lip, on the floor, where you'd set your handbag down if you'd been sitting on the bench to wait for someone, a faint pale dust, very fine, in a neat oblong, the shape of something that had been there and wasn't." },
            { n: "And the bench was warm. The way a chair is warm when somebody's just got up out of it." },
            { n: "She went back. She didn't run. Her father was where she'd left him, by the fountain, with his phone in his hand, and he looked at her face when she came back into the light and didn't ask, which was the most frightening thing he'd done all evening." }
          ] }
        ] },
        { place: 'Paulownia Mall · Fountain', time: 'Evening', bg: 'paulownia-mall-night', music: 'tender', soft: true },
        { n: "They did the third lap. He walked it at her mother's pace and Solar walked it with him, and on the far side, by the flower stall, he said the thing he'd been holding since she came down the escalator. She could tell; he said it the way he said the real number at the end of a negotiation, as if it had only just occurred to him." },
        { s: 'jaesang-runners', f: 'neutral', t: "At Chuseok. In that kitchen. Your mother told the other two mothers that she told you a story every night for a year. When you were four. The sun and the moon. With the rope." },
        { s: 'jaesang-runners', f: 'sad', t: "I didn't know. Twenty-four years, and I didn't know she told you stories. I was never home at bedtime. Not once that year. I was in Hong Kong for most of it. I was in a room with much better lighting, being told no." },
        { s: 'jaesang-runners', f: 'neutral', t: "...Tell it to me. The way she did. I'd like to have heard it once." },
        { choose: [
          { t: "(Tell it the way she did. Skip the tiger.)", notes: 3, flag: 'eqx-jaesang-tale-skipped', then: [
            { n: "She told it walking, round the fountain, in the warm dry air, under the paper leaves. In English, with the Korean names left in, the way her mother had. Haenim and Dalnim. The mother going home over the hills with her basket of rice cakes. And then her mother's little breath, the one Solar could still hear, the skip; and *then the children climbed up and up and up*." },
            { n: "The golden rope. The sky. The brother who was the moon and the sister who was the sun, and how the sister was frightened of being looked at in the dark, so her brother gave her the day." },
            { n: "No tiger. No hills eaten one by one. No door." },
            { n: "Her father listened the way he listened to a pitch, his head a little on one side, his eyes on the floor ahead of him, and at the end he didn't say anything for most of a lap." },
            { s: 'jaesang-runners', f: 'neutral', t: "...That's very short." },
            { s: 'solar', f: 'neutral', t: "She made it short. On purpose. She always stopped before the bad part." },
            { s: 'jaesang-runners', f: 'sad', t: "Yes. That sounds like her. She always cut the part that would keep you up." },
            { s: 'jaesang-runners', f: 'neutral', t: "I used to think that was a weakness. In a negotiation. Leaving the bad part out." }
          ] },
          { t: "(Tell all of it. The tiger and the door too.)", notes: 2, flag: 'eqx-jaesang-tale-whole', then: [
            { n: "She told all of it. She didn't know why. In English, with the Korean names left in, walking. The mother on the hills with the basket. The tiger on the first hill, asking for one rice cake, and getting it. On the second. On every hill, one more, until there were none left and it ate her too. And put on her clothes. And went down to the little house where the children were waiting, and knocked, twice." },
            { n: "*Open the door. It's only me.*" },
            { n: "She didn't do the voice. Her own voice did something on the line and she let it." },
            { n: "Her father had stopped walking. He was standing by the shoe shop window with his arm still crooked for nobody, and his face had gone very still, the way it went still when somebody at the other end of a table said a number he hadn't modeled." },
            { s: 'jaesang-runners', f: 'neutral', t: "...She left that out. All year. Every night." },
            { s: 'solar', f: 'neutral', t: "Every night." },
            { s: 'jaesang-runners', f: 'neutral', t: "And you knew it anyway. You knew the whole time what she was leaving out." },
            { n: "He looked at the shoe shop window for a long time. At his own reflection in it, and hers beside him, and the space on his left where nobody stood." },
            { s: 'jaesang-runners', f: 'neutral', t: "...I'd have told you the whole thing. At four. I'd have thought you should know how it ends. That's the difference between us. She was right and I'd have been right and you'd have been frightened either way." }
          ] },
          { t: "I can't, Dad. Not tonight.", notes: 2, then: [
            { s: 'jaesang-runners', f: 'neutral', t: "No. All right. Another night. When she can tell it herself. That's better. That's the better plan." },
            { n: "He wrote it in the notebook. She saw him do it, at the flower stall, in small square capitals under *1. Find your mother*: *2. The story. Ask her.*" }
          ] }
        ] },
        { n: "At the flower stall the woman was taking the last bucket in. White chrysanthemums. Her father stopped her with one raised hand, the way he'd stop a waiter, and bought one. A single white chrysanthemum on a long stem, with Mitsuru's yen, counted out exactly." },
        { s: 'jaesang-runners', f: 'neutral', t: "For the front hall. By her shoes. They're very plain, those shoes, standing there. She'd want something by them." },
        { n: "Solar knew what a white chrysanthemum was, here. Every funeral in this town had a wall of them. The woman from the flower stall knew too; Solar watched her know it, watched her hand go still on the paper she was wrapping it in, and look up at the foreign man in the good coat, and decide, kindly, not to say." },
        { choose: [
          { t: "(Don't tell him what it means. Let him have it.)", notes: 2, then: [
            { n: "She didn't tell him. He carried it out of the mall held upright in front of him like a candle, the way he'd never once in his life carried flowers, and she walked beside him and said nothing, all the way out into the cold." }
          ] },
          { t: "Dad. Get the yellow one instead. She likes yellow.", notes: 3, then: [
            { n: "He looked at her. Then at the white flower in his hand. Then at the flower woman, who was looking at the floor." },
            { s: 'jaesang-runners', f: 'neutral', t: "...She does like yellow. She has a yellow coat she's never worn because I said it was loud." },
            { n: "He gave the white one back. He bought a yellow one, a small bright yellow chrysanthemum, the last in the bucket, and the flower woman wrapped it very fast and bowed very low, and he carried it home upright in front of him like a candle." }
          ] }
        ] },
        { ifEvent: 'eqx-empty-chair', then: [
          { n: "They walked up the hill together. They lived under one roof now; the fathers had come out of that house with their bags on the twenty-sixth, and the dorm had made room the way it made room for everyone, and her father slept two doors down from Akihiko on a futon beside her brother's, and called her mother's number at seven fifteen from the dorm's front step so as not to wake anyone." },
          { n: "In the hall he found a glass, and filled it at the kitchen tap, and put the flower in it, and stood it on the little table by the dorm's front door, under the rota, where everybody coming in would pass it." },
          { s: 'jaesang-runners', f: 'neutral', t: "I'll take it down to her shoes in the morning. In daylight. Your brother will come with me. We don't go to that gate after dark now. Miss Kirijo's letter was very clear." },
          { s: 'jaesang-runners', f: 'neutral', t: "...Go up. Somebody's waiting for you; somebody's always waiting for you in this building. I've noticed that. I've been taking notes. Eat something." },
          { n: "She went up. On the landing she looked back down the stairs, and he was still in the hall, in his coat, standing beside the flower in its glass by the front door with his left arm a little away from his side, looking at the door, the way you'd stand at the door of a house waiting for the last person to come home, so you could lock it." }
        ], else: [
          { n: "He walked her to the corner by the post office. Nobody was paid to anymore. At the corner he stopped, where the whole household stopped now, and looked up at the dorm's lit windows, and then back down the hill toward the river and the persimmon tree black against the last light and the long table under its lamp, where Mrs. Oka would have kept his supper warm." },
          { s: 'jaesang-runners', f: 'neutral', t: "Go up. Twos. Somebody's waiting for you; somebody's always waiting for you in that building. I've noticed that. I've been taking notes." },
          { s: 'jaesang-runners', f: 'neutral', t: "...Eat something." },
          { n: "He went back down the hill with the flower held up in front of him. He walked at his own pace now, she saw, the fast one, toward something, already late for the next thing. Then halfway down he slowed. And stopped. And stood on the hill a moment with his left arm a little away from his side." },
          { n: "Then he went on at her mother's pace, all the way to the gate." }
        ] },
      ] }
    ] }
  ]
});
}
