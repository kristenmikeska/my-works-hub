/* Akihiko Sanada · XVII The Star. Social link data for femc-social.js.
   Format: each rank has `after` (earliest in-game date, M/D), `title` (chapter card, "1: rookie"), `place`, and `scene`, a list of lines:
     { s: speakerId, f: face, t: text }   a line (face = a portrait file name: neutral, happy, sad-2...)
     { n: text }                           narration (close third person, past tense, Kat's voice)
     { s: 'solar', t: text }               Solar speaks (chosen dialogue options are spoken automatically)
     { place, time }                       a scene break: new location banner
     { phone: [{ from, t }], contact }     a text conversation on Solar's phone
     { choose: [{ t, notes, then: [...] }] }   a dialogue choice; notes = ♪ earned (0–3)
     { route: [{ t, route: 'romance'|'friend', notes, then }] }  the friendship/romance turn
     { ifRoute: 'romance'|'friend', then: [...] }   lines only on that route
     { register: id }                      "Registered to the Compendium"
   {name} becomes "Solar". */
FemcSocial.define({
  id: 'akihiko', name: 'Akihiko Sanada', short: 'Akihiko', arcana: 'Star', numeral: 'XVII', from: 'Persona 3',
  home: { place: 'Gekkoukan High · Boxing Club', slot: 0, days: [1, 2, 3, 4, 5, 6], hint: 'After school, Monday to Saturday, at the boxing club.' },
  romance: true,
  music: 'assets/femc/music/tender-feeling.mp3',
  cast: { junpei: 'Junpei', mitsuru: 'Mitsuru', yukari: 'Yukari' },
  stamps: { 1: ['senpai'], 10: ['max-rank'] },
  threads: {
    sees: { name: 'dorm squad 🔥', members: ['junpei', 'yukari', 'mitsuru', 'akihiko'] },
    yukari: { name: 'Yukari Takeba', members: ['yukari'] }
  },
  // Texts between hangouts. rank = Akihiko's rank when it can arrive; days = days after reaching it; slot 1 = evening.
  texts: [
    { id: 'aki-2a', rank: 2, days: 1, slot: 1, msgs: [
      { from: 'akihiko', t: 'you were slow today' },
      { from: 'akihiko', t: 'good though' },
      { from: 'akihiko', t: 'slow but good' }
    ], reply: [
      { t: "I'll be faster tomorrow.", notes: 3, then: [{ from: 'akihiko', t: "that's the spirit" }] },
      { t: "I'll be asleep tomorrow.", notes: 2, then: [{ from: 'akihiko', t: "no you won't" }, { from: 'akihiko', t: '5:12' }] }
    ] },
    { id: 'sees-2b', thread: 'sees', rank: 2, days: 2, msgs: [
      { sys: 'Junpei added you to "dorm squad 🔥"' },
      { from: 'junpei', t: 'ok welcome to the squad' },
      { from: 'yukari', t: 'why am i in this' },
      { from: 'junpei', t: 'cuz ur the squad yuka-tan' },
      { from: 'akihiko', t: 'is this for training schedules' },
      { from: 'junpei', t: 'NO' },
      { from: 'mitsuru', t: 'I would appreciate it if this channel were reserved for official communication.' },
      { from: 'junpei', t: 'she found it' },
      { from: 'junpei', t: 'how did she find it' }
    ], reply: [
      { t: 'lol', then: [{ from: 'junpei', t: 'SOLAR GETS IT' }] },
      { t: 'Who added Mitsuru-senpai?', then: [{ from: 'junpei', t: 'NOT ME' }, { from: 'yukari', t: 'it was literally you' }, { from: 'mitsuru', t: 'It was Iori.' }] }
    ] },
    { id: 'sees-2c', thread: 'sees', rank: 2, days: 4, rename: 'S.E.E.S.', msgs: [
      { sys: 'Mitsuru Kirijo renamed the group "S.E.E.S."' },
      { from: 'junpei', t: 'noooooo' },
      { from: 'junpei', t: 'my beautiful group name' },
      { from: 'akihiko', t: 'this one is better' }
    ] },
    { id: 'yuk-3a', thread: 'yukari', rank: 3, days: 1, msgs: [
      { from: 'yukari', t: 'ok so is the coffee table thing a regular occurrence' },
      { from: 'yukari', t: 'asking for my sanity' }
    ], reply: [
      { t: 'Every day.', then: [{ from: 'yukari', t: "i'm moving out" }] },
      { t: 'Only when something is bothering him.', then: [{ from: 'yukari', t: '...oh' }, { from: 'yukari', t: "ok that's actually kind of sad" }, { from: 'yukari', t: "i'll buy him a yoga mat or something" }] }
    ] },
    { id: 'aki-3b', rank: 3, days: 2, slot: 1, msgs: [
      { from: 'akihiko', t: 'hey' },
      { from: 'akihiko', t: 'thanks for the other day' },
      { from: 'akihiko', t: 'for listening' }
    ], reply: [
      { t: 'Anytime.', notes: 3, then: [{ from: 'akihiko', t: 'careful' }, { from: 'akihiko', t: "i'm going to hold you to that" }] },
      { t: 'You owe me ramen.', notes: 2, then: [{ from: 'akihiko', t: 'deal' }, { from: 'akihiko', t: 'extra egg' }] }
    ] },
    { id: 'sees-3c', thread: 'sees', rank: 3, days: 4, msgs: [
      { from: 'junpei', t: 'who ate my cup ramen' },
      { from: 'akihiko', t: 'it had protein in it' },
      { from: 'junpei', t: 'IT WAS RAMEN' },
      { from: 'yukari', t: "senpai it says 'beef flavor' that's not protein" },
      { from: 'akihiko', t: "it's protein adjacent" },
      { from: 'mitsuru', t: 'Please stop.' }
    ], reply: [
      { t: '🍜', then: [{ from: 'junpei', t: 'SOLAR' }, { from: 'junpei', t: 'how could you' }] },
      { t: "I'll buy you a new one, Junpei.", then: [{ from: 'junpei', t: 'finally someone with a heart in this dorm' }] }
    ] }
  ],
  ranks: [
    { after: '4/20', title: '1: rookie', place: 'Gekkoukan High · 2F Hallway', scene: [
      { n: "April in Iwatodai didn't know what it wanted to be. It had rained at lunch, a thin, undecided drizzle that gave up halfway through fifth period, and now the light coming through the second-floor windows was the washed-out gold of something trying to make up for it." },
      { n: 'Solar had her headphones around her neck and her bag over one shoulder and the specific posture of a transfer student who had done this enough times to know that the first two weeks were a performance, and that the trick was to keep the performance boring.' },
      { n: 'Polite. Present. Unremarkable. Nobody asked the unremarkable girl where her parents were.' },
      { n: "The hallway emptied the way hallways always did after the bell, loud and then all at once not loud, and she had almost made it to the stairs when she noticed the cluster of girls by the window." },
      { n: 'They were standing in the careful, casual formation of people pretending not to look at something, and the something was leaning against the window frame with one arm folded across his ribs, like he was holding himself together by hand.' },
      { n: "Silver hair. A bandage stuck to his forehead at an angle that suggested he'd put it there himself without a mirror. A red vest that on anyone else would have been a uniform violation, and on him looked like the uniform's idea." },
      { n: "Akihiko Sanada. Third year. Captain of the boxing club. Resident of the dorm's second floor, which meant she'd heard him leave every morning at an hour no reasonable person was awake." },
      { n: "She hadn't technically been introduced to him. She'd seen him on the night she arrived, and again on the night she would rather not think about, the one with the roof and the moon and the cold weight of something pressed against her temple. He had been bleeding a little, then. It hadn't seemed like the moment for introductions." },
      { s: 'akihiko', f: 'neutral', t: 'Hey.' },
      { n: 'It took her a second to realize he was talking to her. It took the girls by the window considerably less.' },
      { s: 'akihiko', f: 'neutral', t: "You're the transfer student. The one who moved into the dorm." },
      { choose: [
        { t: "That's me.", notes: 1, then: [
          { s: 'akihiko', f: 'neutral', t: "Thought so. Mitsuru said you'd be easy to spot." },
          { n: 'Solar decided not to ask what that meant.' }
        ] },
        { t: "Depends who's asking.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...Huh.' },
          { s: 'akihiko', f: 'happy', t: "Fair enough. Akihiko Sanada. I'm on the second floor." },
          { n: "She knew. She didn't say she knew." }
        ] },
        { t: '(Nod, and keep walking.)', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: 'Hey, hold on a second.' },
          { n: 'She held on a second. The girls by the window held on with her.' }
        ] }
      ] },
      { n: 'He pushed himself off the window frame and immediately regretted it. She watched the regret travel across his face, from his ribs up to his jaw, and then watched him decide it was not happening.' },
      { s: 'akihiko', f: 'serious', t: "Sorry. I'm not usually this... stationary. Cracked a couple of ribs a few weeks back. Doctor says nothing fun until they heal." },
      { choose: [
        { t: 'Does it hurt?', notes: 1, then: [{ s: 'akihiko', f: 'happy', t: 'Only when I laugh. Or breathe. Or think about the gym.' }] },
        { t: "You don't look like you sit still very well.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! You've known me thirty seconds and you've already figured that out." },
          { n: 'His laugh turned into a wince halfway through, but he committed to the laugh. She respected that, a little.' }
        ] },
        { t: 'You should probably go home and rest.', notes: 0, then: [{ s: 'akihiko', f: 'sad-2', t: '...You sound like my doctor. And Mitsuru. And every single person in that dorm.' }] }
      ] },
      { n: 'Behind him, one of the girls whispered something to another, and the other girl looked at Solar with the particular expression of someone memorizing a face for later.' },
      { n: "Great. Day eleven at a new school, and she'd already been entered into a ledger she hadn't known existed." },
      { s: 'akihiko', f: 'neutral', t: 'Mitsuru told me about the roof. Your first night. Most people freeze up, the first time.' },
      { n: "The roof. So they were going to talk about it, then, in a school hallway at four in the afternoon, like it was a club meeting." },
      { n: 'Her hand found the strap of her bag and tightened there, which was a thing it did on its own sometimes. She let it.' },
      { choose: [
        { t: "I didn't really have time to freeze.", notes: 3, then: [
          { s: 'akihiko', f: 'serious-3', t: "No. That's what I heard." },
          { n: "He said it like a compliment. She wasn't sure it was one." }
        ] },
        { t: "I'd rather not talk about it.", notes: 2, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Yeah. Okay. That's fair." },
          { n: "He didn't push. She hadn't expected him not to push, and it threw her more than pushing would have." }
        ] },
        { t: 'It was nothing.', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: "It wasn't nothing." },
          { n: 'He said it flatly, and for a second the hallway was very quiet.' }
        ] }
      ] },
      { s: 'akihiko', f: 'serious-3', t: 'Anyway. I want to see what you can do. Once these heal, come run with me.' },
      { s: 'akihiko', f: 'neutral', t: "Early mornings, along the river. Best way to start a day. Clears your head before anything else gets into it." },
      { n: 'Solar had a head that very much did not want to be cleared, especially before sunrise. She also had the distinct sense that saying so would be taken as a challenge.' },
      { choose: [
        { t: "I'll try to keep up.", notes: 3, then: [
          { s: 'akihiko', f: 'serious', t: "Don't try. Do it." },
          { n: "He grinned when he said it, though, so she decided it wasn't an order, per se." }
        ] },
        { t: 'How early is early?', notes: 1, then: [
          { s: 'akihiko', f: 'happy', t: 'Five-thirty.' },
          { s: 'akihiko', f: 'neutral', t: "...You'll get used to it." },
          { n: 'She would not get used to it. She already knew that about herself.' }
        ] },
        { t: 'Absolutely not.', notes: 1, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I'll ask you again next week." },
          { n: 'He would, too. She could tell.' }
        ] }
      ] },
      { n: 'He walked with her as far as the shoe lockers, which was further than either of them needed to go. He moved carefully, one hand never far from his side, and talked the entire way about a boxing match he had watched on television the night before, round by round, in more detail than she would have thought a human memory could hold.' },
      { n: "She didn't follow all of it. She found that she didn't mind." },
      { n: 'At the lockers he stopped and looked at her the way people look at a new opponent, which was to say like she was a question he fully intended to answer.' },
      { s: 'akihiko', f: 'happy', t: "Good. Then it's settled, Rookie." },
      { n: 'Rookie. He said it like the nickname had already been decided, and the worst part was that it probably had.' },
      { place: 'Iwatodai Dorm · Lounge', time: 'Evening' },
      { n: 'That night the dorm smelled like instant ramen and the lemon cleaner someone used on the kitchen counters whenever they were stressed. Solar sat at the far end of the couch with a textbook open on her knees that she had not turned a page of in twenty minutes.' },
      { n: 'Akihiko came down the stairs at nine, very slowly, holding a carton of milk.' },
      { s: 'akihiko', f: 'happy', t: 'Rookie.' },
      { n: 'He lifted the carton at her in a small salute and went back up the stairs just as slowly as he had come down.' },
      { n: "It was nothing. It was a guy with a carton of milk. She turned the page anyway, and didn't remember a word of it." }
    ] },

    { after: '5/10', title: '2: five-thirty', place: 'Iwatodai Dorm · Front Door', scene: [
      { phone: [
        { from: 'akihiko', t: 'you up' },
        { from: 'akihiko', t: 'ribs are cleared' },
        { from: 'akihiko', t: 'running in 15. front door' },
        { from: 'solar', t: 'how do you have this number' },
        { from: 'akihiko', t: 'mitsuru' },
        { from: 'akihiko', t: '14 now' }
      ], contact: 'Akihiko Sanada · 5:12 AM', handle: 'akihiko', me: 'solar' },
      { n: 'It was five twenty-nine in the morning when she pushed the front door open, and the air outside was the kind of cold that got into your teeth.' },
      { n: 'The sky over the bay was the color of skim milk. A single gull complained somewhere above the water. Akihiko was stretching against the railing in a gray hoodie with the sleeves shoved up, looking like a man who had been awake for an hour and enjoyed every minute of it.' },
      { s: 'akihiko', f: 'happy', t: 'You came.' },
      { choose: [
        { t: "You didn't leave me much of a choice.", notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "There's always a choice. You made the right one." }] },
        { t: 'Barely.', notes: 3, then: [{ s: 'akihiko', f: 'happy', t: 'Barely still counts.' }] }
      ] },
      { n: "The first kilometer was fine. The second was less fine. By the third, Solar had stopped thinking in kilometers and started thinking in streetlights, each one a small personal goal, each one somehow further away than the last." },
      { n: "He ran beside her instead of ahead of her, which she noticed, and which she suspected cost him something, the way he kept glancing at the path in front of them like it was calling his name." },
      { s: 'akihiko', f: 'serious', t: "Breathe from your stomach, not your chest. You're running like you're trying to get away from something." },
      { n: "She almost laughed. She didn't have the air for it." },
      { choose: [
        { t: 'Maybe I am.', notes: 3, then: [
          { s: 'akihiko', f: 'neutral', t: '...Yeah?' },
          { n: "He looked at her for a step longer than a person running should look at anything." },
          { s: 'akihiko', f: 'serious-3', t: "Then let's go faster." },
          { n: 'She hated him a little. She went faster.' }
        ] },
        { t: "I'm running like someone who's dying.", notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "You're not dying. Dying is a lot quieter." },
          { n: 'That was, she felt, not the comfort he thought it was.' }
        ] }
      ] },
      { n: 'They stopped on the bridge as the sun came up. It happened all at once, the way it does over water, the bay going from gray to silver to something almost too bright to look at, and her legs were shaking, and her lungs were on fire, and she did not want to be anywhere else.' },
      { n: 'Akihiko handed her a bottle of water without saying anything and leaned on the railing next to her, close enough that she could feel the heat coming off his arm.' },
      { s: 'akihiko', f: 'neutral', t: "I like this part. Before anyone's awake." },
      { s: 'akihiko', f: 'neutral', t: "Nobody needs anything from you yet." },
      { n: 'She understood that more than she wanted to. She drank her water instead of saying so.' },
      { place: 'Hagakure Ramen', time: 'After School' },
      { n: "By the afternoon her legs had filed a formal complaint, and the rain had come back, soft and steady against the window of the ramen shop. Hagakure smelled like pork broth and wet umbrellas and the deep fryer in the back that had clearly been running since before she was born." },
      { s: 'akihiko', f: 'happy', t: "Best ramen in Iwatodai. I'm not exaggerating. I've done the research." },
      { s: 'junpei', t: "\"The research.\" He means he's eaten here like four hundred times." },
      { register: 'junpei' },
      { n: 'Junpei Iori had attached himself to them at the school gates with the confidence of a man who had never once in his life waited to be invited, and was now sliding into the booth next to Solar with his cap on backwards and a grin like a dare.' },
      { s: 'akihiko', f: 'neutral', t: 'Junpei. Nobody invited you.' },
      { s: 'junpei', t: "Bro, I invite myself. It's a gift. Yo, Solar, did he give you the protein speech yet? It's like forty minutes." },
      { s: 'akihiko', f: 'serious', t: "It's not a speech. It's information." },
      { choose: [
        { t: "I'd like to hear it.", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...Really?' },
          { s: 'akihiko', f: 'happy', t: 'Okay. So. Muscle recovery depends on three things, and the first one is—' },
          { s: 'junpei', t: "Oh no. Oh no, you've done it now." },
          { n: "It was, in fact, about forty minutes. She found out more about amino acids than she had ever planned to know, and Akihiko's whole face changed while he explained it, like a light had come on somewhere behind it." }
        ] },
        { t: 'Maybe the short version.', notes: 2, then: [
          { s: 'akihiko', f: 'happy', t: "Eat more meat. Sleep. Don't skip leg day. That's the short version." },
          { s: 'junpei', t: "Honestly that's the long version too." }
        ] },
        { t: 'Pass.', notes: 0, then: [
          { s: 'akihiko', f: 'sad-2', t: '...Fine. Your loss.' },
          { n: 'He sulked for exactly as long as it took the ramen to arrive, which was not very long.' }
        ] }
      ] },
      { s: 'junpei', t: 'Hey, speaking of weird. Anyone else seen the girl up at Naganaki Shrine? Fox ears? Sweeping like she owns the place?' },
      { s: 'akihiko', f: 'neutral', t: 'Fox ears.' },
      { s: 'junpei', t: "I'm just sayin'! Iwatodai's been getting weird lately. You feel it, right, Solar?" },
      { n: "She thought about the roof, and the green light that came at midnight, and the coffins standing in the street where people should have been. Weird was one word for it." },
      { s: 'akihiko', f: 'serious-3', t: '...Weirder than usual, you mean.' },
      { n: "He ordered a second bowl with extra pork without looking at the menu, and when it came he pushed the egg from it into Solar's bowl without asking, like it was the most obvious thing in the world." },
      { n: 'Junpei looked at the egg, and then at Akihiko, and then at Solar, and said nothing, which for Junpei was its own sentence.' },
      { place: 'Iwatodai Dorm · Front Door', time: 'Evening' },
      { n: 'The rain had thinned to almost nothing by the time they walked back. At the dorm door Akihiko stopped and shook the water out of his hair like a dog, completely unbothered by the fact that most of it landed on her.' },
      { s: 'akihiko', f: 'happy', t: 'Same time tomorrow, Rookie?' },
      { choose: [
        { t: 'See you at five-thirty.', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha! I knew you'd come around." },
          { n: 'She had not come around. She had simply given up. There was a difference, and she intended to explain it to him at some point when her legs worked again.' }
        ] },
        { t: 'Ask me again tomorrow.', notes: 2, then: [
          { s: 'akihiko', f: 'serious', t: "Oh, I will. At five-twelve." },
          { n: 'He would. She knew that about him already.' }
        ] }
      ] },
      { n: 'She set her alarm for five-fifteen anyway.' }
    ] },

    { after: '6/1', title: '3: the coffee table', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: "June brought the rainy season with it, and the rain came down on Iwatodai like it had something to prove. It drummed on the dorm windows and dripped from the awning and turned the walk from the station into a gauntlet of puddles, and by the time Solar got back she was damp in places she hadn't known could get damp." },
      { n: "The lounge was empty except for Akihiko, who was sitting on the couch and very obviously pretending to read a boxing magazine. He had been on the same page since she walked in. She could tell, because it was an advertisement for gloves." },
      { s: 'akihiko', f: 'neutral', t: 'Hey, Rookie. Sit down a second.' },
      { n: "She sat. He closed the magazine and set it on the coffee table and then picked it up again, as if he wasn't sure what his hands were for." },
      { s: 'akihiko', f: 'sad-2', t: "Can I ask you something? You've moved around a lot, right? Different towns. Different schools." },
      { n: "There it was, the question underneath the question. Usually people got to it on the second or third conversation, the careful way, and usually she had an answer ready that was short enough to end it." },
      { choose: [
        { t: "More than I'd like.", notes: 2, then: [
          { s: 'akihiko', f: 'sad', t: 'Yeah. I figured.' },
          { n: "He didn't ask why. He didn't ask where her parents were. She noticed the not-asking the way you notice a missing step." }
        ] },
        { t: 'Why do you ask?', notes: 1, then: [{ s: 'akihiko', f: 'sad-2', t: 'No reason. ...Okay. A reason.' }] },
        { t: "That's a heavy question for a Tuesday.", notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Ha. Yeah, it is." },
          { n: 'The laugh went out of him slower than it came in.' }
        ] }
      ] },
      { s: 'akihiko', f: 'sad-3', t: "There's a guy I grew up with. Shinjiro. He used to live here. He was part of all of this." },
      { n: "He said all of this the way the others did, with a small tilt of the head toward the ceiling, toward the roof, toward the hour that came at midnight and wasn't on any clock." },
      { s: 'akihiko', f: 'sad', t: "He walked away two years ago. Doesn't answer when I knock. Doesn't come back." },
      { choose: [
        { t: "You still go see him, don't you?", notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: "...How'd you know that?" },
          { n: "Because he'd gone out last Sunday in the rain without an umbrella and come back an hour later looking like he'd lost a fight he hadn't been allowed to throw a punch in. She didn't say that either." },
          { s: 'akihiko', f: 'sad-2', t: "Every couple of weeks. He's usually in the back alley by the station. He tells me to get lost. I go anyway." }
        ] },
        { t: 'Do you know why he left?', notes: 1, then: [{ s: 'akihiko', f: 'sad-4', t: "I know why. I just don't know how to fix it." }] },
        { t: 'Maybe he needs space.', notes: 0, then: [
          { s: 'akihiko', f: 'serious-3', t: 'Two years is a lot of space.' },
          { n: "He didn't say it unkindly. That almost made it worse." }
        ] }
      ] },
      { n: "The rain filled the quiet for a while. Solar watched a drop chase another down the window until they met and kept going together, heavier and faster, and she thought, not for the first time, that she was very bad at this part. The part where someone handed you something that mattered to them and waited to see what you'd do with it." },
      { s: 'akihiko', f: 'sad-3', t: 'He used to cook, you know. When we were kids. Nobody taught him. He just decided somebody had to.' },
      { s: 'akihiko', f: 'neutral', t: "...Sorry. That got heavy. You're easy to talk to, that's all." },
      { choose: [
        { t: "I don't mind heavy.", notes: 3, then: [
          { s: 'akihiko', f: 'blushing', t: '...Yeah?' },
          { n: "He looked at her like he was recalculating something, and then looked away fast, like he'd been caught at it." }
        ] },
        { t: 'You can talk to me whenever.', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "Careful. I might take you up on that." }] }
      ] },
      { s: 'akihiko', f: 'serious', t: 'Okay. I need to move. If I sit here any longer I am going to lose my mind.' },
      { n: "What he meant by move, it turned out, was push-ups. On the coffee table. He set his feet on the edge of it and his hands on the floor and started counting under his breath, and the table creaked in a way that suggested it had not signed up for this." },
      { n: 'Solar did not stop him. Solar, if she was honest, was curious how far he would get.' },
      { n: 'He got to forty-one before the front door opened.' },
      { s: 'yukari', f: 'surprised', t: '...Senpai. Is that the coffee table?' },
      { register: 'yukari' },
      { n: 'Yukari Takeba stood in the doorway with her umbrella still dripping and a convenience store bag on her wrist and the expression of a girl who had come home from a long day and found a third-year using the furniture as gym equipment.' },
      { s: 'akihiko', f: 'serious', t: "It's sturdy." },
      { s: 'yukari', f: 'serious', t: "It's from a catalog." },
      { s: 'yukari', f: 'neutral', t: 'And you. Solar. You just watched him do this?' },
      { choose: [
        { t: 'I was keeping count. Forty-one.', notes: 3, then: [
          { s: 'yukari', f: 'surprised', t: "Oh my god. You're both like this." },
          { s: 'akihiko', f: 'happy', t: 'Forty-two.' }
        ] },
        { t: 'I tried to stop him.', notes: 1, then: [
          { s: 'yukari', f: 'neutral', t: "No you didn't." },
          { n: "No, she hadn't. Yukari, it turned out, was very hard to lie to, which Solar filed away for later." }
        ] }
      ] },
      { n: "Yukari stepped around them both with enormous dignity and went to put her groceries away, muttering something about boys and furniture and the general state of the dorm, and Akihiko finished his set in silence and sat back on his heels, breathing hard, grinning at the ceiling." },
      { n: "He didn't look like someone who had just been talking about the friend he couldn't get back. He looked fine. He looked the way he looked every morning on the bridge, bright and certain and already halfway to the next thing." },
      { n: "She recognized it, which was the problem. She'd been doing the same thing for years." }
    ] },

    { after: '6/22', title: '4: the heavy bag', place: 'Gekkoukan High · Boxing Club', scene: [
      { n: 'The gym smells like tape and sweat. Akihiko is working the heavy bag like it insulted his family.' },
      { s: 'akihiko', f: 'serious-3', t: "Summer tournament's in three weeks. I've won the last two. I'm not losing the third." },
      { s: 'akihiko', f: 'neutral', t: 'Hold the bag for me?' },
      { choose: [
        { t: 'Sure.', notes: 2, then: [
          { n: "Every punch rattles your teeth. He doesn't hold back, and you don't let go." },
          { s: 'akihiko', f: 'happy', t: 'Not bad. Most people step back by now.' }
        ] },
        { t: 'Only if you go easy.', notes: 0, then: [
          { s: 'akihiko', f: 'serious', t: "I don't do easy." },
          { n: "He doesn't. Your arms ache for two days." }
        ] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Akihiko. I thought I'd find you here." },
      { register: 'mitsuru' },
      { s: 'mitsuru', f: 'neutral', t: "You missed the meeting. Again. It's been on the schedule for a week." },
      { s: 'akihiko', f: 'sad-2', t: '...Was that today?' },
      { s: 'mitsuru', f: 'neutral', t: "And you're our newest member. I hope he isn't teaching you to ignore every responsibility that doesn't involve punching." },
      { choose: [
        { t: "He's teaching me to hold a bag.", notes: 2, then: [
          { s: 'mitsuru', f: 'neutral', t: 'A practical skill, at least.' },
          { s: 'akihiko', f: 'happy', t: 'See? Practical.' }
        ] },
        { t: "I'll make sure he's at the next one.", notes: 3, then: [
          { s: 'mitsuru', f: 'surprised', t: "...I'd appreciate that." },
          { s: 'akihiko', f: 'surprised', t: 'Hey. Whose side are you on?' }
        ] }
      ] },
      { n: 'Mitsuru leaves. Akihiko watches the door for a moment after she has gone.' },
      { s: 'akihiko', f: 'neutral', t: "She's been carrying all of this since we were kids. The Dark Hour. Her family. I don't know how she does it." },
      { s: 'akihiko', f: 'serious-3', t: "That's why I train. So I'm one less thing she has to worry about." }
    ] },

    { after: '7/21', title: '5: stone steps', place: 'Naganaki Shrine · Stone Steps', scene: [
      { n: "Summer vacation. Akihiko has discovered that the shrine's stone steps are \"perfect for intervals.\" You have discovered that you can hate stairs." },
      { s: 'akihiko', f: 'happy', t: "That's ten. Take a break. You earned it." },
      { n: 'You sit on the top step. Your headphones are around your neck, still playing.' },
      { s: 'akihiko', f: 'neutral', t: 'You always have those on. What are you listening to?' },
      { n: 'You hand them over. He holds them to one ear, a little awkwardly.' },
      { s: 'akihiko', f: 'surprised', t: "...Huh. I've never heard this before. It sounds like it's from somewhere else entirely." },
      { choose: [
        { t: "It's from a world far away.", notes: 3, then: [{ s: 'akihiko', f: 'neutral', t: 'Yeah? It suits you. It sounds like a story.' }] },
        { t: 'Do you like it?', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: "It's not what I'd train to. ...But I'd listen to it again." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: 'Can I tell you why I really fight?' },
      { s: 'akihiko', f: 'sad', t: "When I was a kid, I couldn't protect anyone. I was too small. Too slow. I promised myself that would never happen again." },
      { s: 'akihiko', f: 'serious-3', t: "So I keep getting stronger. Every day. Even when it doesn't make sense to anyone else." },
      { choose: [
        { t: 'It makes sense to me.', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'happy', t: 'Thanks. {name}.' }
        ] },
        { t: "Who couldn't you protect?", notes: 1, then: [
          { s: 'akihiko', f: 'sad-2', t: "...Another time. I promise." },
          { s: 'akihiko', f: 'happy', t: 'Come on, {name}. Ten more.' }
        ] }
      ] },
      { n: "It's the first time he's used your name instead of \"Rookie.\" He doesn't seem to notice. You do." }
    ] },

    { after: '8/10', title: '6: miki', place: 'Iwatodai Dorm · Rooftop', scene: [
      { n: 'The sun is going down over the bay. Akihiko has been quiet all afternoon.' },
      { s: 'akihiko', f: 'sad-2', t: 'Shinji came back. To S.E.E.S. Did you hear?' },
      { choose: [
        { t: "That's good, isn't it?", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "It should be. I've wanted this for two years. So why does it feel like something's wrong?" }] },
        { t: "You don't seem happy.", notes: 3, then: [{ s: 'akihiko', f: 'sad-3', t: "...You notice everything, don't you." }] }
      ] },
      { s: 'akihiko', f: 'sad', t: "I told you there was someone I couldn't protect. Her name was Miki. My little sister." },
      { s: 'akihiko', f: 'sad-4', t: 'We grew up in an orphanage, Shinji and Miki and me. There was a fire. I was a kid.' },
      { s: 'akihiko', f: 'sad-3', t: "I couldn't get to her. I could hear her, and I couldn't get to her." },
      { n: "He doesn't say anything for a long time. Neither do you." },
      { choose: [
        { t: '(Stay quiet beside him.)', notes: 3, then: [
          { n: 'You stay. It seems to be the right answer.' },
          { s: 'akihiko', f: 'sad-4', t: "Thanks. For not telling me it wasn't my fault. Everyone tells me that." }
        ] },
        { t: "It wasn't your fault.", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "I know. I know that. I just don't believe it yet." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: "Shinji pulled me out of there. That's why I can't let him go now." },
      { s: 'akihiko', f: 'serious-3', t: "Whatever's wrong with him, I'm going to find out." }
    ] },

    { after: '9/1', title: '7: the roof', place: 'Gekkoukan High · Rooftop', scene: [
      { n: 'September. The air is still hot, but the school roof catches the wind.' },
      { s: 'akihiko', f: 'neutral', t: 'Funny. I used to come up here to clear my head. Now I come up here hoping you\'ll show up.' },
      { choose: [
        { t: "Then I'll keep showing up.", notes: 3, then: [{ s: 'akihiko', f: 'blushing', t: "...Good. That's... good." }] },
        { t: 'You could just ask, you know.', notes: 2, then: [{ s: 'akihiko', f: 'happy', t: 'Yeah, well. Asking is harder than running ten kilometers.' }] }
      ] },
      { s: 'akihiko', f: 'sad-2', t: "Shinji's been different since he came back. Tired. He hides it, but he's taking something. Pills." },
      { s: 'akihiko', f: 'serious-3', t: "He won't tell me what they are. He gets this look like he's already decided something, and he isn't going to let me talk him out of it." },
      { choose: [
        { t: 'Ask him straight out.', notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "I did. He told me to mind my own business. Then he made me dinner. That's Shinji." }] },
        { t: 'Maybe he needs you to trust him.', notes: 2, then: [{ s: 'akihiko', f: 'sad-3', t: "...Maybe. I don't know how to trust him and worry at the same time." }] }
      ] },
      { s: 'akihiko', f: 'neutral', t: 'Hey. If something happens. If I go running off somewhere stupid with my head down...' },
      { s: 'akihiko', f: 'sad-2', t: 'Pull me back. Okay?' },
      { n: "You promise. He looks relieved, like he's been carrying the question for weeks." }
    ] },

    { after: '10/10', title: '8: october', place: 'Paulownia Mall', scene: [
      { n: "October. It's been a little over a week since that night. Akihiko asked you to come to the mall, and then hasn't bought anything." },
      { s: 'akihiko', f: 'neutral', t: "Sorry. I just didn't want to be in the dorm." },
      { s: 'akihiko', f: 'sad-4', t: "I keep going back to that night. Running it over and over. Every version where I'm faster." },
      { choose: [
        { t: 'Tell me about him.', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "He couldn't cook when we were kids. He taught himself. For Miki and me." },
          { s: 'akihiko', f: 'sad-2', t: 'Burned everything for a year straight. We ate it anyway.' }
        ] },
        { t: "You couldn't have changed it.", notes: 1, then: [{ s: 'akihiko', f: 'sad', t: "That's what I keep telling myself. It's not working yet." }] }
      ] },
      { s: 'akihiko', f: 'sad', t: "I've been training so hard I can barely stand. Mitsuru made me stop. I yelled at her. I've never yelled at her." },
      { s: 'akihiko', f: 'sad-2', t: "I don't know what to do with this if I can't hit it." },
      { choose: [
        { t: "You don't have to be strong all the time.", notes: 3, then: [
          { s: 'akihiko', f: 'sad-4', t: '...' },
          { s: 'akihiko', f: 'sad-3', t: "Funny. That's exactly what Shinji would have said." }
        ] },
        { t: "Then let's go hit something.", notes: 2, then: [
          { s: 'akihiko', f: 'surprised', t: '...Ha.' },
          { s: 'akihiko', f: 'happy', t: "Okay. Okay, yeah. Batting cages. You're on." }
        ] }
      ] },
      { n: "Neither of you buys anything. On the walk home, he tells you it's the best afternoon he's had in weeks." }
    ] },

    { after: '11/2', title: '9: what am i to you', place: 'Iwatodai Station', scene: [
      { n: "November. The station is crowded, and Akihiko keeps checking his watch even though you aren't going anywhere." },
      { s: 'akihiko', f: 'neutral', t: "Can I say something? It's going to come out wrong." },
      { s: 'akihiko', f: 'sad-2', t: 'I spent my whole life getting stronger so I would never lose anyone again. And this year I lost someone anyway.' },
      { s: 'akihiko', f: 'serious-3', t: 'But you kept showing up. Every run. Every stupid bowl of ramen. You pulled me back, like you promised.' },
      { s: 'akihiko', f: 'blushing', t: 'So I want to know. What am I to you?' },
      { route: [
        { t: "Someone I've fallen for.", route: 'romance', notes: 3, then: [
          { s: 'akihiko', f: 'surprised', t: '...' },
          { s: 'akihiko', f: 'blushing', t: 'Oh. Okay. I... okay.' },
          { s: 'akihiko', f: 'blushing', t: "I think I fell first. Somewhere on the shrine steps. I just didn't have a word for it." },
          { n: "He laughs, embarrassed, and doesn't let go of your hand the rest of the way home." }
        ] },
        { t: 'My best friend.', route: 'friend', notes: 3, then: [
          { s: 'akihiko', f: 'happy', t: "Yeah. Yeah, that's it exactly." },
          { s: 'akihiko', f: 'happy', t: "Best friend. I haven't had one of those since Shinji. ...He'd have liked you." },
          { n: "He bumps your shoulder with his, hard enough to make you stumble. It's the most Akihiko thing he could possibly do." }
        ] }
      ] }
    ] },

    { after: '12/1', title: '10: red gloves', place: 'Iwatodai Dorm · Lounge', scene: [
      { n: 'December. Someone has strung lights across the lounge windows. Akihiko is sitting on the arm of the couch, holding something badly wrapped in newspaper.' },
      { s: 'akihiko', f: 'neutral', t: "I'm not good at this, so I'm just going to hand it to you." },
      { n: "Inside are his first boxing gloves. Red, worn soft, his name written in the cuff in a kid's handwriting." },
      { ifRoute: 'friend', then: [
        { s: 'akihiko', f: 'happy', t: 'First pair I ever owned. I want you to have them. For when I\'m not around.' },
        { s: 'akihiko', f: 'serious', t: "Not that I'm planning on going anywhere. But you'd know how to use them now." },
        { choose: [
          { t: "I'll take care of them.", notes: 3, then: [{ s: 'akihiko', f: 'happy', t: 'I know you will. You take care of everything, {name}.' }] },
          { t: 'Only if you keep training me.', notes: 3, then: [{ s: 'akihiko', f: 'serious', t: "Deal. Five-thirty. Don't be late." }] }
        ] },
        { n: 'Outside, it starts to snow. He calls it perfect running weather. You throw a pillow at him.' }
      ] },
      { ifRoute: 'romance', then: [
        { s: 'akihiko', f: 'neutral', t: 'I used to think getting stronger meant needing no one.' },
        { s: 'akihiko', f: 'blushing', t: "I was wrong. I'm going to keep getting stronger, {name}. But this time it's so I can stay next to you." },
        { choose: [
          { t: 'Then stay.', notes: 3, then: [{ n: "He does. You sit by the window until the lights are the only thing on, and he doesn't let go of your hand once." }] },
          { t: '(Kiss him.)', notes: 3, then: [
            { s: 'akihiko', f: 'surprised', t: '...!' },
            { s: 'akihiko', f: 'blushing', t: "...I've wanted to do that since the shrine." },
            { n: "Outside, it starts to snow. Neither of you notices for a while." }
          ] }
        ] }
      ] }
    ] }
  ]
});
