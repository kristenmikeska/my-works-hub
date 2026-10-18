/* Act II story events (déjà vu, 5/10 → 6/8). Revamp story data (femc-game.html). Same format as story-act1.js.
   The small kit below builds plain scene lines (it holds no state). The main story files after this one use it too. */
window.FEMC_STORY_KIT ||= (() => {
  const set = f => ({ flag: { [f]: true } });
  // Sets flag f if any of the links is at rank r or higher.
  const anyRank = (f, ids, r) => ids.map(id => ({ ifRank: { [id]: r }, then: [set(f)] }));
  // Sets flag f if any of the links has been met.
  const anyMet = (f, ids) => ids.map(id => ({ ifMet: id, then: [set(f)] }));
  // Sets flag f if every flag in one of the groups is set (an OR of ANDs).
  const anyOf = (f, groups) => groups.map(g => ({ ifFlag: g, then: [set(f)] }));
  const VISITORS = ['kiriko', 'kuromi', 'mercy', 'sebastian', 'aphrodite', 'astarion', 'cloud', 'judy', 'noctis', 'shadowheart', 'leon', 'rohan', 'widowmaker'];
  return { set, anyRank, anyMet, anyOf, VISITORS };
})();

(window.FEMC_GAME_EVENTS ||= []).push(
  { id: 'a2-full-pages', date: '5/13', slot: 'after', title: 'full pages', place: 'The Velvet Room', time: '', scene: [
    { music: 'velvet' },
    { n: "The blue door was where it always was, at the dead end of the service corridor behind Paulownia Mall, between a stack of flattened cardboard and a fire extinguisher nobody had inspected since the nineties, and nobody else ever seemed to see it. Solar had stopped finding that strange somewhere around the second week. She found a great many things not strange now, which she suspected was its own kind of strange, and she had decided not to think about it until she had time, which was never." },
    { n: "The elevator hummed its long climbing hum. The numbers over the brass doors ran past too fast to read. Elizabeth was waiting with the book already open in her arms, and she was practically vibrating, which on Elizabeth looked like standing slightly straighter than usual and holding very still." },
    { s: 'elizabeth', f: 'happy', t: "Oh, good. You came. I would have had to come and fetch you, and I'm told that alarms people." },
    { s: 'elizabeth', f: 'neutral', t: "Look at this. No, don't touch. Look." },
    { bg: 'velvetroom-1' },
    { n: "She turned the book around. Three pages, one after another, and every one of them was full." },
    { n: "Not filling. Full. Faces drawn in fine blue ink, so exact they looked like they might blink. Names, and under the names small careful paragraphs, line after line, all the way to the bottom border and tucked into the corners where there wasn't room. A girl with two high blonde tails and a red jacket. A girl with a red ribbon in her hair, mid-leap, like she'd been drawn from a photograph taken a hundredth of a second before she landed. A girl with soft brown curls and gardening gloves and a smile so polite it was almost a wall." },
    { ifMet: 'ann', then: [
      { n: "She knew the first one. Ann, who bought crepes like it was a moral position and said Just Solar like it was a whole name. Seeing her in ink was like seeing a friend's face on the side of a bus." }
    ], else: [
      { n: "She knew the first one. The girl at the end of the platform, in the green, with the phone that was too thin. Seeing her in ink, perfectly still, was worse than seeing her move." }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "Everyone who comes into this world gets a page. It writes itself after they arrive, slowly, the way a photograph comes up in the tray. A line on the first day. A line the next. I have watched it happen a thousand times." },
    { s: 'elizabeth', f: 'serious', t: "These three came in finished. They were full the moment they appeared. Every line. As if someone had done the arriving for them, somewhere else, and simply sent the paperwork on ahead." },
    { choose: [
      { t: "Who wrote them?", then: [
        { s: 'elizabeth', f: 'neutral', t: "Someone with a very good nib and a very tidy mind. I almost know the hand. It's like hearing a voice through a wall and thinking, that sounds like my aunt, when you have no aunt." },
        { s: 'elizabeth', f: 'happy', t: "I believe it was someone who keeps a room like this one. In a city with more trains in it, and more rain." }
      ] },
      { t: "Are they in danger?", then: [
        { s: 'elizabeth', f: 'neutral', t: "Not from the book. A full page is the safest thing in the world. It's very hard to lose someone who has been written down that thoroughly." },
        { n: "She said it lightly. Then she looked at the page in front of her, the one under her thumb, and didn't say anything else for a moment." }
      ] },
      { t: "(Look for your own page.)", then: [
        { n: "She didn't have to ask. Elizabeth turned to it already, like she'd known that was where Solar's eyes would go." }
      ] }
    ] },
    { n: "Her page was where she'd left it. The fine blue border. The little flourishes at the corners. And inside them, nothing at all, a white so clean it looked like a held breath." },
    { s: 'elizabeth', f: 'serious', t: "I tried again. Three inks, this time. Iron gall, which has been used for royal charters. India ink, which has never once failed me. And a third that I will not describe to you, because you would ask where I got it." },
    { s: 'elizabeth', f: 'neutral', t: "The first two ran off. The third sat on the paper for nearly a minute. Then it simply went back into the pen." },
    { s: 'elizabeth', f: 'happy', t: "The pen was quite upset about it." },
    { choose: [
      { t: "Maybe there's nothing to write.", then: [
        { s: 'elizabeth', f: 'neutral', t: "There is always something to write. Even a stone has a page. Rather a short one." },
        { s: 'elizabeth', f: 'serious', t: "No. This isn't nothing. Nothing would take the ink. This is a page that won't let anything in." }
      ] },
      { t: "Keep trying. Please.", then: [
        { s: 'elizabeth', f: 'happy', t: "Oh, I intend to. I have a list. Squid ink is next. I'm told it's very persuasive." },
        { n: "It shouldn't have helped. It helped." }
      ] },
      { t: "(Say nothing.)", then: [
        { n: "She didn't say anything. She looked at the three full pages and the one empty one and felt it in her stomach first, before she'd thought it, the cold small drop of being the only person at a party who hadn't been told the dress code." }
      ] }
    ] },
    { s: 'elizabeth', f: 'neutral', t: "They came in already written, as though someone loved them enough to do it ahead of time. You came in with nothing at all." },
    { s: 'elizabeth', f: 'happy', t: "I genuinely cannot tell you which of those is stranger. Isn't it marvellous?" },
    { n: "The light went white at the edges. On the walk back through the mall the fountain was on, and a group of girls from another school were taking a picture in front of it, all of them leaning in at once, and Solar caught herself counting them, and then counting the exits behind them, and then walking a little faster, like she was late for something nobody had told her about." }
  ] },

  { id: 'a2-pier', date: '5/16', slot: 'after', title: 'low water', place: 'Port Island · Pier', time: 'Afternoon', consumes: true, scene: [
    { music: 'tender' },
    { n: "She went to the pier because Akihiko had said the run along the water was good for breathing and she wanted to see if that was true without him there timing it. It was a Saturday, gray and mild, the cloud sitting low over the bay like a lid somebody had put on a pot, and the whole of Port Island smelled the way it always did when the wind came round from the south. Salt and diesel. Wet rope. Somebody frying something cheap and wonderful in a stall at the end of the boardwalk." },
    { n: "She stopped walking about four meters from the edge. She didn't decide to. Her feet did it, and the rest of her caught up a second later and noticed that she was standing exactly as far from the water as you could stand and still be on the pier, like someone keeping a polite distance from a dog she'd been told was friendly." },
    { n: "Across the bay the cranes at the container port stood with their arms up, very still, orange against the gray. A ferry sounded somewhere out past the breakwater, one long low note that went right through the boards and into her shins. And under the pier, around the pilings, the water had started to move." },
    { n: "Not much. You'd have to know to look. A slackness, and then a pull, the green-brown water sliding back off the barnacles a centimeter at a time, the weed on the pilings lying down flat in the direction of the sea. The tide was turning. She knew it before it happened. She'd known it, she realized, for about ten minutes, the way you know someone is about to say your name." },
    { choose: [
      { t: "(Step up to the edge and look down.)", then: [
        { n: "She got as far as two meters. Her stomach dropped out from under her like a stair that wasn't there, and her hand found the rail without asking, and held on, white at the knuckles, while the dark water went on sliding away beneath her feet as if it had somewhere very important to be." },
        { n: "She stepped back. She wasn't proud of it. She wasn't ashamed of it either, which was interesting." }
      ] },
      { t: "(Stay where you are.)", then: [
        { n: "She stayed. Four meters. It felt like the right number, the way a chair you've sat in a thousand times feels like the right height." }
      ] },
      { t: "(Count the pilings.)", then: [
        { n: "Twenty-two on the near side. The third from the end had a crack in it, shored up with an iron band gone orange with rust. She had no idea why she needed to know that. She needed to know that." }
      ] }
    ] },
    { n: "Low water would be a little before four. The number was just there in her, like her shoe size. Low water at three forty-one, and the next high a little after ten, and the spring tides in a week, when the sea went out so far you could walk on the bottom of it." },
    { n: "And under the number, the way a smell sits under a room, something else. Sodium lights on wet concrete. A man's voice, low and tuneless, humming along with an old song on a car radio, the kind of song only fathers know the words to. A cup of something hot and roasted and faintly bitter, barley, held in both hands at an hour when nobody else was awake. The tide going out. Not being able to sleep when the tide went out." },
    { n: "Somebody calling her in off the cold. *Sol-ah.*" },
    { n: "She turned around to answer it." },
    { n: "There was an old man on an upturned crate with a fishing rod and a radio playing baseball, and a couple of kids feeding a seagull a whole melon bun, and a woman jogging with a stroller. Nobody had called anyone. The man with the rod looked at her, and then at the water, and nodded at it, like the tide was a mutual acquaintance." },
    { fragment: 'strangers-harbor' },
    { n: "She walked the rest of the pier with her hands in her blazer pockets and her eyes on the boards, and when she got to the end she didn't go back the way she'd come. She took the long way, around by the road, where you couldn't see the water at all. It was the first time she'd been glad of a wall." },
    { n: "That night, or some night soon after, she raised the Evoker in the tower and Haenim came the way she always came, all light and veil and glitching name, and under the crack of the summon there was a second sound, small and green and cold, like a ring tapping once against a glass. It came from somewhere on the Persona's sash. Junpei didn't hear it. Yukari didn't. Mitsuru, on the radio, said nothing at all." },
    { n: "Solar heard it. She went on hearing it for a long time after the fight was over, the way you go on feeling a hand on your shoulder after someone's taken it away." }
  ] },

  { id: 'a2-croissant', date: '5/21', slot: 'after', title: 'between two things', place: 'Paulownia Mall · Chagall Café', time: 'After School', scene: [
    { music: 'city' },
    { n: "The last midterm ended at half past twelve on Thursday, and by one o'clock the entire third year had poured out of the gate like water out of a burst pipe, loud and loose and a little unhinged, and Junpei had decided that the three of them were going to Chagall to celebrate, despite the fact that he had, by his own count, failed chemistry in four separate and creative ways." },
    { s: 'junpei', f: 'happy', t: "It's not about the grade. It's about the journey. And the journey was me writing photosynthesis on a chemistry test." },
    { s: 'yukari', f: 'neutral', t: "That's not even the right subject, Junpei." },
    { s: 'junpei', f: 'happy', t: "And yet I felt very strongly about it." },
    { n: "The café was warm and smelled like burnt sugar and steamed milk, all dark wood and little round tables too close together, and the girl at the counter had the glassy, patient look of someone who had served four hundred exhausted students since noon. Yukari ordered tea. Junpei ordered the biggest thing on the menu without reading it. Solar opened her mouth to say a coffee, please, and what came out was something else." },
    { s: 'solar', f: 'neutral', t: "A croissant. Please." },
    { n: "She hadn't looked at the menu. She hadn't looked at the case. There was a croissant in it, as it turned out, one, sitting on a paper doily at the back like it had been waiting for her specifically, golden and flaking and enormous, and the girl at the counter put it on a plate and slid it across without a second glance, and Solar stood there holding it and feeling like she'd said a password." },
    { n: "She ate it at the table by the window. She meant to eat it slowly. She didn't. She ate it fast, tearing it apart with her fingers, flakes going everywhere, on the table and her skirt and the front of her blazer, half of it gone before Yukari had finished stirring her tea, with her eyes going to the door and back and to the door again, the way you eat when you're standing up between two things you're already late for." },
    { n: "There was a feeling in her body that had nothing to do with the café. A building with too many people in it. A hallway. Somewhere she was supposed to be by a certain time, and somewhere else she was supposed to be right after, and a bag over her shoulder that was too heavy, and a door with a little bell over it that went *ding* when you pushed it, and a warm voice from behind a counter, saying the croissants were big and the regulars loved them." },
    { n: "The bell over Chagall's door didn't ding. Chagall's door didn't have a bell." },
    { s: 'junpei', f: 'surprised', t: "Dude. You inhaled that." },
    { s: 'yukari', f: 'neutral', t: "Are you late for something?" },
    { choose: [
      { t: "No.", then: [
        { n: "It was the truth. It felt like a lie anyway, the way true things sometimes do when your body has decided something different." }
      ] },
      { t: "I think I was. Somewhere.", then: [
        { s: 'yukari', f: 'neutral', t: "...Okay. Well. You're here now. You can be late here. Nobody's keeping track." },
        { n: "It was such a Yukari thing to say, practical and a little embarrassed about being kind, that Solar almost laughed." }
      ] },
      { t: "(Brush the flakes off your skirt.)", then: [
        { n: "She brushed them off one at a time, very carefully, and didn't answer, and Yukari watched her do it and then decided, visibly, to let it go." }
      ] }
    ] },
    { fragment: 'hoax-croissant' },
    { n: "She looked at her phone for the time. She didn't need the time. She had nowhere to be. She looked at it anyway, and the screen said 1:24, and she felt, very faintly, under her ribs, like she'd already missed it." },
    { s: 'junpei', f: 'happy', t: "You know what, you've got the right idea. I'm getting one too. Exam victory croissants. It's a tradition now." },
    { s: 'yukari', f: 'neutral', t: "That was the last one." },
    { s: 'junpei', f: 'sad', t: "...Exam defeat everything, then. As usual." }
  ] },

  { id: 'a2-login', date: '5/23', slot: 'after', title: 'a password', place: 'Paulownia Mall · Game Panic', time: 'Afternoon', scene: [
    { music: 'city' },
    { n: "Junpei owed Game Panic, by his own reckoning, about forty thousand yen of his childhood, and he went back every Saturday like a man visiting a grave he'd also robbed. He dragged Solar with him this time because, he said, she had the face of someone who would be good at games, and he needed somebody to lose to who wouldn't tell Yukari." },
    { n: "The arcade was all noise and no air. Every cabinet yelled over every other cabinet, the carpet was a pattern specifically designed to hide whatever had been spilled on it, and there was a smell of hot plastic and old pennies and a cleaning product that was losing. Junpei made straight for a fighting game and lost a hundred yen to a middle schooler in under a minute and put in another hundred yen with the face of a man going back into a burning building." },
    { n: "Solar drifted. At the back, behind a curtain of plastic beads, there were three computers on a long sticky desk that nobody ever used, because the cabinets out front were louder and the computers were always somehow damp. The middle one was on. A login screen glowed blue in the dim. A cursor blinked in the empty box that said USER." },
    { n: "She sat down. She didn't mean to type anything. Her hands came up onto the keys the way a pianist's do, lightly, already curved, and started without her." },
    { n: "*s. o. l.*" },
    { n: "And stopped. Her fingers hovered. They wanted two different things, very badly, at the same time, and she could feel both of them in her knuckles the way you feel two songs playing in two rooms, and neither was louder." },
    { choose: [
      { t: "(Let them finish it the short way.)", tally: { 'lean.R': 1 }, then: [
        { n: "*system.* No space. All lowercase. Her hands did it fast and certain and a little smug, the way you type something you've typed at two in the morning a thousand times, and for one second she could smell a room she'd never been in. Energy drink and warm electronics and a fan running too hard. The glow of a monitor on somebody's face." }
      ] },
      { t: "(Let them finish it the long way.)", tally: { 'lean.H': 1 }, then: [
        { n: "*arsystem.* The whole word. A joke, she understood, the way you understand a joke in a dream, a pun somebody had made once and been so pleased with that it stuck. Her phone, for no reason, felt heavy in her pocket, like it was full of a hundred people talking at once in capital letters." }
      ] },
      { t: "(Take your hands off the keys.)", then: [
        { n: "She took them off and put them in her lap and held them there, and the cursor went on blinking after the *l*, patient, like it had all the time in the world for her to remember." }
      ] }
    ] },
    { n: "She pressed enter, or the machine did. It thought about it. A little hourglass turned over and over." },
    { n: "USER NOT FOUND." },
    { n: "Of course not. She sat there feeling oddly stung, like she'd knocked on the door of a house she'd grown up in and a stranger had answered, and then she got up and let the beads fall shut behind her and went to find Junpei." },
    { n: "On the way she passed the vending machine by the door, the big humming one with the lit-up rows of cans, and her feet stopped in front of it before she'd asked them to." },
    { n: "Bottom row, far right, between a melon soda and a canned coffee with a cartoon bear on it, there was a can that didn't belong. Tall, black, with a slash of hot pink down the side and a clawed green letter she'd never seen before and knew perfectly well. Pink Punch. It wasn't a thing that was sold here. She was almost certain it wasn't a thing that was sold anywhere, yet." },
    { n: "She put in her coins. It fell with a heavy, satisfying clunk. It was so cold it hurt her fingers." },
    { s: 'junpei', f: 'surprised', t: "Whoa, what's that? I've never seen that before. Is that, like, an import?" },
    { n: "She cracked it open. It hissed, sharp and loud. It tasted like candy and battery acid and a lot of sugar pretending to be fruit, much too sweet and much too fizzy and much too much caffeine, and it was the best thing she'd tasted since April, and she drank half of it standing in front of the machine with her eyes closed." },
    { n: "Someone used to hand her these. Before things. Without asking what she wanted, because he already knew, and without ever saying how. A can held out sideways, not looking at her, cold against her knuckles. *Here.*" },
    { fragment: 'runners-energy-drink' },
    { s: 'junpei', f: 'happy', t: "Can I try?" },
    { choose: [
      { t: "(Give him the can.)", then: [
        { n: "He took one sip and made a face like he'd been struck by lightning and handed it back at arm's length." },
        { s: 'junpei', f: 'surprised', t: "That's not a drink, that's a dare. How are you not vibrating right now?" }
      ] },
      { t: "No.", then: [
        { s: 'junpei', f: 'sad', t: "Wow. Okay. Cold. That's fine. I'll just stand here and smell it." }
      ] }
    ] },
    { n: "When she looked back at the machine on the way out, the bottom row was melon soda and canned coffee with a bear on it and nothing in between. She held the can she had all the way to the station. She didn't throw it away when it was empty. She put it on the windowsill in her room, where it looked absurd, black and pink among the dorm's beige, like it had walked in from somebody else's life and decided to stay." }
  ] },

  { id: 'a2-fuuka', date: '6/3', slot: 'lunch', title: 'absent', place: 'Gekkoukan High · Classroom', time: 'Lunchtime', scene: [
    { music: 'school' },
    { n: "It had been raining for three days, the gray warm rain of early June that got into everything and stayed, and the classroom windows were fogged at the corners and the whole room smelled of wet socks and somebody's microwaved curry. At lunch the girls by the window were talking with their heads very close together, which was how you knew it was worth listening to." },
    { n: "A second-year. Class E. Quiet, they said, the kind of girl you forgot was in the room until the teacher called her name. She hadn't been in school since last week. Her parents said she was away. Somebody's cousin said she'd run away. Somebody else said no, it was worse than that, she'd been locked in the gym one night, as a joke, a stupid joke, and when they came back in the morning to let her out the gym had been empty." },
    { n: "Ghost stories, Junpei said, loudly, and went on eating, and his chopsticks stopped once halfway to his mouth and then kept going." },
    { s: 'yukari', f: 'serious', t: "Yamagishi. Fuuka Yamagishi. I don't really know her. She's in the cooking club. She's..." },
    { s: 'yukari', f: 'sad', t: "She's nice. That's the whole thing anybody ever says about her. She's nice." },
    { n: "Then Mitsuru was in the doorway, which made the whole room go quiet in the particular way rooms did when a student council president appeared at lunch, the way a pond goes quiet when a heron lands. She found Solar with her eyes and tilted her head a few degrees toward the hall." },
    { place: 'Gekkoukan High · 2F Hallway', time: 'Lunchtime', soft: true },
    { s: 'mitsuru', f: 'neutral', t: "You've heard." },
    { s: 'mitsuru', f: 'neutral', t: "Her homeroom teacher filed nothing. Her parents are abroad, and the school took their word for it on the telephone. A girl has been missing for a week, and the only people who've noticed are the ones telling ghost stories." },
    { s: 'mitsuru', f: 'sad', t: "There's a reading at the school at night that I don't like. It's faint. It's been faint for days. I've been telling myself it was the rain." },
    { choose: [
      { t: "We'll find her.", then: [
        { s: 'mitsuru', f: 'neutral', t: "Yes. We will. I wanted to hear somebody else say it before I said it to the Chairman." }
      ] },
      { t: "What do you need me to do?", then: [
        { s: 'mitsuru', f: 'neutral', t: "Be rested. On the eighth the moon is full. If she's where I think she is, we'll have one night to bring her home." }
      ] },
      { t: "Why didn't anyone look?", then: [
        { s: 'mitsuru', f: 'sad', t: "Because she was quiet. Because it's easier to believe a quiet person has gone somewhere on purpose." },
        { n: "She said it to the rain on the window. Solar didn't think she was only talking about Fuuka Yamagishi." }
      ] }
    ] },
    { n: "Mitsuru went back to the council room. Solar stood in the hallway for a while with the rain coming down the glass in long uneven lines and the noise of lunch behind her, and she waited for it, the thing that had been happening to her every other day for a month now. The tug. The smell of somewhere else. The word on the tip of her tongue." },
    { n: "It didn't come. A missing girl, a locked gym, a city that didn't notice. None of it was familiar. All of it belonged to here, and only to here." },
    { n: "It was almost a relief. She felt bad about that, all the way through fifth period." }
  ] },

  { id: 'a2-smudge', date: '6/5', slot: 'after', title: 'the other side', place: 'The Velvet Room', time: '', scene: [
    { music: 'velvet' },
    { n: "Elizabeth didn't say good afternoon. She had the book open on her forearm and her face very close to it, closer than Solar had ever seen her hold anything, and she spoke without looking up, the way a doctor speaks to you while she's reading an x-ray." },
    { s: 'elizabeth', f: 'serious', t: "Come here. Tell me if you see it, or if I've finally been in this elevator too long." },
    { bg: 'velvetroom-1' },
    { n: "The page was still blank. That was the first thing. The second thing took a moment, and then she couldn't stop seeing it." },
    { n: "There were marks on it. Not ink. Not anything you could point to. Three places on the white where the paper had gone very slightly gray and very slightly soft, a smudge, the way a sheet goes when somebody has rested a damp thumb on it, or when the page underneath was pressed too hard and the shape came through. One near the top. One in the middle. One toward the bottom, larger than the others, like whoever was pressing had leaned in." },
    { s: 'elizabeth', f: 'neutral', t: "The first appeared on the sixteenth. The second on the twenty-first. The third on the twenty-third. I wrote the dates down. I'm not in the habit of writing down dates. I found I wanted to." },
    { n: "The pier. The café. The can in the vending machine, cold enough to hurt. Solar didn't say any of it. Her hands said it for her, closing slowly at her sides, and Elizabeth glanced at them and then back up at her face, and missed nothing, and asked nothing, which was rare enough that Solar noticed it." },
    { n: "Elizabeth lifted the book toward the lamp in the ceiling and tipped it, so the light came through the paper from behind. They both looked. The blue light came through clean and even, white and unbroken, and the smudges, held up to it, were just smudges, three soft gray places where nothing was." },
    { s: 'elizabeth', f: 'neutral', t: "Nothing. The paper is the paper." },
    { s: 'elizabeth', f: 'serious', t: "And yet this is exactly the look of a page when something on the other side is pressed against it. I've seen it a hundred times, when a guest writes something very hard on the next leaf and it comes through." },
    { choose: [
      { t: "Is there another side?", then: [
        { s: 'elizabeth', f: 'neutral', t: "There's always another side to a page. That is rather the nature of pages." },
        { s: 'elizabeth', f: 'neutral', t: "I looked at the back of yours in April. It was blank. I am not, as a rule, in the habit of looking at a thing twice. It feels like distrust." }
      ] },
      { t: "Can you make it stop?", then: [
        { s: 'elizabeth', f: 'serious', t: "Stop? Why on earth would I want it to stop? It is the first thing your page has done in two months." },
        { s: 'elizabeth', f: 'neutral', t: "...Ah. You don't like it. I'm sorry. I forget that the things I find fascinating are sometimes happening to people." }
      ] },
      { t: "(Touch the largest smudge.)", then: [
        { n: "Elizabeth let her, which was its own surprise. The paper was warm. Not warm like paper in a warm room. Warm like a hand had just been taken away from it." }
      ] }
    ] },
    { s: 'elizabeth', f: 'happy', t: "Whatever is leaning on your page, it is leaning harder each time. That is all I can tell you. I would recommend, for no reason I can name, that you pay attention to what you happen to be doing when you feel faint." },
    { s: 'elizabeth', f: 'neutral', t: "And eat something. You are always paler when you come up here than when you go down." },
    { n: "The light took her at the edges. In the service corridor behind the mall it was raining through a broken gutter onto the flattened cardboard, a steady pattering like fingers on a table, and she stood under it a moment longer than she needed to before she pulled her blazer up over her head and ran for the station." }
  ] },

  { id: 'a2-empress', date: '6/8', slot: 'evening', title: 'the people who are awake', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
    { music: 'mystery' },
    { n: "It rained all day and stopped at nine, all at once, like somebody had turned off a tap, and by eleven the clouds had pulled apart over the bay and the moon came up through them full and close and heavy, and the wet streets shone with it." },
    { n: "Nobody had eaten dinner. Akihiko had his gloves on before ten, which meant he'd been ready since four. Junpei was bouncing his knee hard enough to shake the table. Yukari sat with her bow across her lap, running her thumb along the string, back and forth, like it was a rosary." },
    { s: 'mitsuru', f: 'neutral', t: "The reading at the school has changed. It isn't faint anymore. There are two large ones at the entrance to the tower, and one very small one somewhere inside it, behind them." },
    { s: 'mitsuru', f: 'sad', t: "The small one is a person. I'm nearly certain. She's been in there for a week, alone, at night." },
    { s: 'junpei', f: 'serious', t: "A week? In that place? How is she even..." },
    { s: 'yukari', f: 'serious', t: "Junpei." },
    { s: 'junpei', f: 'neutral', t: "...Yeah. Okay. Doesn't matter how. We go get her." },
    { place: 'Gekkoukan High · Front Gate', time: 'The Dark Hour', bg: 'darkhour-gekkoukan-gate' },
    { dark: true },
    { music: 'fullmoon' },
    { n: "At midnight the school stopped being a school. She had seen it happen before and it was worse every time, the way the building drew itself up out of the ground, floor on floor, twisting, black and green and shot through with that sick yellow light, the gate she walked through every morning standing open at the foot of it like a mouth that had forgotten how to close. Somewhere very high up, a bell she'd never heard in daylight was ringing and ringing." },
    { n: "The two shapes at the entrance were waiting for them. A woman of mask and silk lounging on a throne of nothing, and a king made of the same dark, and between them, like a promise, the faint pulse of a girl's heartbeat somewhere in the tower behind." },
    { battle: { id: 'empress', op: 'empress', title: 'Empress & Emperor', desc: 'Two Shadows at the foot of the tower, and behind them, a girl who has been waiting a week for someone to come.', forced: true, kind: 'operation' } },
    { music: 'tender' },
    { n: "They found her on the second floor, sitting with her back to a wall with her knees pulled up and her arms around them, in her school uniform, small and dusty and blinking at the light from Yukari's phone like it was the first light she had seen in days, which it was. She had a smear of something dark on her cheek. She was not crying. She had, Solar thought, probably finished crying about four days ago, and had been sitting there ever since being very quiet and very brave and listening." },
    { s: 'fuuka', f: 'surprised', t: "Oh. Oh, you're real. I wasn't sure. I've been hearing you for an hour. I could hear you coming up the stairs, all of you, like... like a radio." },
    { s: 'fuuka', f: 'sad', t: "I'm sorry. I'm so sorry you had to come in here. I'm Fuuka. I'm, um. I'm sorry." },
    { n: "Akihiko crouched down in front of her. He didn't say anything comforting. He turned around and offered his back, the way you'd offer it to a kid who'd skinned both knees, and after a long second Fuuka put her arms around his neck and let him lift her, and laid her cheek between his shoulder blades, and shut her eyes." },
    { place: 'Iwatodai · The Dark Hour', time: 'The Dark Hour', bg: 'darkhour-iwatodai-street' },
    { music: 'mystery' },
    { n: "They walked home. The hour still had forty minutes left in it, and the city lay under the green like a photograph of a city, every window dark, every streetlight dead, coffins standing upright at the bus stop and outside the convenience store and in the doorway of the bakery like a queue for something that would never open." },
    { n: "Solar walked a step behind the others, the way she always did, and counted, the way she always did. Coffin. Coffin. Lamppost. Coffin. A puddle full of the moon. Coffin." },
    { n: "Then something that wasn't." },
    { n: "On the steps of the little shrine on the corner, where there was only ever stone and moss, a fox was sitting. A fox made of light, gold and soft-edged, with more tails than a fox should have, flicking, and its head turned to watch them pass, and it was the only thing on that whole street that was moving in color." },
    { n: "Further on, a woman in white was kneeling on the pavement beside somebody who had fallen, her hand on their back, talking to them low and steady, and Solar could have sworn that for a moment there was light behind the woman's shoulders in the shape of something folded. A boy in a black hoodie stood under the awning of a closed electronics shop with his hands jammed in his pockets, looking up at the green rain still dripping off the edge of it with the face of somebody whose day had been bad for a long time before this. And high up, on the roof of a pachinko parlor, a small figure in a jester's hat was standing on the very edge with her fists on her hips, glaring down at the whole city like it had personally been rude to her." },
    { n: "Not coffins. Awake. In the hour, where nobody was awake but them." },
    { n: "Solar stopped walking. Nobody else did. Junpei was saying something to Yukari about pizza, and Yukari was saying no, and Mitsuru was on the radio to nobody, out of habit, and Akihiko was carrying Fuuka very carefully over a cracked bit of pavement, and none of them looked up." },
    { n: "And at the very end of the street, where it met the main road, so small and far away she nearly missed it, there was a girl in a coat too big for her, standing on the corner, pointing. Pointing the boy in the hoodie down a side street, patiently, the way you'd give directions to a tourist. He nodded and went. When Solar looked back, the corner was empty." },
    { s: 'fuuka', f: 'sad', t: "...There are people out there." },
    { n: "She said it into Akihiko's back, half asleep, her eyes still shut. He stopped." },
    { s: 'fuuka', f: 'neutral', t: "Lots of them. I can hear them. Like voices in the next room. They aren't... they aren't coffins. They're awake. They're all so far from home." },
    { s: 'akihiko', f: 'serious', t: "She's delirious. She's been in there a week." },
    { s: 'mitsuru', f: 'neutral', t: "...Perhaps." },
    { n: "Mitsuru looked down the empty street for a long time. Then she looked at Solar, who was still looking at the corner. Then she started walking again, and didn't say anything, and Solar knew with total certainty that she'd heard it too, somewhere in the static of her radio, and was filing it under things to be dealt with tomorrow, and would deal with it, tomorrow, with a pen." },
    { dark: false },
    { place: 'Iwatodai Dorm · Rooftop', time: 'Night · 2 AM' },
    { music: 'night' },
    { n: "She couldn't sleep. Two in the morning, the dorm finally quiet, Fuuka asleep on the couch under three blankets because nobody wanted her to be alone upstairs, and Solar had gone up to the roof in her socks and sat down against the water tank with her knees up, the concrete still damp and cold through her pajamas, and watched the city be ordinary again." },
    { n: "Lights in the windows. A taxi on the main road. The monorail, empty, sliding home along the bay. All of it so normal it made her eyes sting." },
    { n: "The roof door opened behind her. She knew who it was by the way it opened, all at once, like a man who had never in his life opened a door slowly. Akihiko had a towel around his neck and two cans of something from the machine downstairs, and he held one out to her without asking and sat down a careful meter away, which for Akihiko was practically across the room." },
    { s: 'akihiko', f: 'neutral', t: "Couldn't sleep either. It's always like this after. You come home and your body's still in there." },
    { n: "They drank. It was some kind of sports drink, salty and blue. He didn't look at her. He looked at the bay, the way he did on runs, like it was a finish line he was working out how to cross." },
    { s: 'akihiko', f: 'serious', t: "Can I ask you something?" },
    { s: 'akihiko', f: 'serious', t: "You could've run tonight. You've got no reason to be here. No family here, nobody waiting, nobody who'd come after you. You could walk out of this city any night you wanted and none of us could stop you." },
    { s: 'akihiko', f: 'neutral', t: "And you went into that place for a girl you'd never spoken to. You were first up the stairs. I saw." },
    { s: 'akihiko', f: 'neutral', t: "Why didn't you run?" },
    { choose: [
      { t: "I'm here.", tally: { here: 1 }, flag: { 'here-1': true }, then: [
        { n: "It came out simpler than she meant it to. It came out like a fact about where she was sitting." },
        { n: "He turned and looked at her then, properly, the way he'd looked at her on the tiles the first night, like two pieces of something had clicked together somewhere behind his eyes. Then he nodded, once, and looked back at the bay." },
        { s: 'akihiko', f: 'happy', t: "Yeah. You are." },
        { n: "He said it like he was writing it down." }
      ] },
      { t: "I didn't think about it.", then: [
        { s: 'akihiko', f: 'neutral', t: "...Yeah. That's what scares me a little. I don't think about it either." },
        { s: 'akihiko', f: 'serious', t: "Somebody should, though. Somebody should think about you before you go running up the stairs." }
      ] },
      { t: "Where would I go?", then: [
        { n: "He didn't answer right away. He turned the can in his hands, around and around, the way Junpei turned his cap when he didn't know what to say." },
        { s: 'akihiko', f: 'sad', t: "I don't know. That's the thing. I keep thinking one day you'll know, and you'll go." },
        { n: "He said it to the bay. She didn't think he'd meant to say it out loud." }
      ] }
    ] },
    { n: "They stayed until the sky over the water started going the color of dishwater, and then the color of a bruise healing, and then the color of nothing in particular, which was morning. Neither of them said much. On the way down the stairs he held the roof door for her, the way he always did, and she went through it, and something about the ordinary weight of that, a door held by somebody who expected you to walk through it, sat in her chest all the next day like a stone in a pocket." },
    { act: { numeral: 'III', title: 'guests' } }
  ] }
);
