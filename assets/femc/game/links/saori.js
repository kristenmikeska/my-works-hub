/* Saori Hasegawa · Hermit. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Cast-only speakers: classmate, omori, ozawa (no portraits). Side romance: route choice at rank 9; rank 10, afterMax and christmas branch on it.
   P3P has her thinking of leaving; here she is offered a transfer (rank 8) and chooses to stay (rank 10), so she is still at Gekkoukan in every ending. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'saori', name: 'Saori Hasegawa', short: 'Saori', arcana: 'Hermit', numeral: 'IX', from: 'Persona 3 Portable',
  kind: 'native',
  romance: 'side',
  starts: '4/28',
  home: { area: 'Gekkoukan High', spot: 'Library', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Mondays, Wednesdays and Fridays, at the library desk.' },
  approach: "At the library desk, a second-year with a committee armband pinned on crooked is stamping due dates with great care, and lowering her eyes every time someone walks past and lowers their voice.",
  cast: { classmate: 'Classmate', omori: 'Ōmori', ozawa: 'Ms. Ozawa' },
  invite: {
    ask: [
      "Good afternoon. The returns cart is very full and I'm very slow. Only if you're free.",
      "I'm sorry to message out of nowhere. The library is quiet today. That's all. That's the whole message.",
      "Would you like to sit in the library with me for a while? We don't have to talk. I'm good at not talking.",
      "Someone donated a box of old paperbacks. I haven't opened it yet. I thought you might want to be there when I do.",
      "The window by the history shelves is open and you can hear the baseball team. I don't know why I'm telling you. Sorry.",
      "Ms. Ozawa went home early and I'm alone with the returns. I'm not asking you to come. I'm only describing the returns."
    ],
    ok: ["Oh! Good. I'll be at the desk.", "Thank you. I'll try not to watch the door.", "Okay. I'll move my bag off the other chair."],
    no: ["That's alright. Really. Another day.", "Of course. I'm sorry for asking. Oh. I said sorry again.", "Okay. I hope your day is gentle."]
  },
  hangouts: [
    [
      { n: "There was a box under the desk marked HOSPITAL in Saori's round handwriting, and inside it were the books that had come back hurt, spines cracked, covers hanging by a thread, a picture book that someone's little brother had very clearly bitten." },
      { n: "She laid them out on the desk like patients and handed Solar a roll of clear tape and a bone folder, and showed her once, slowly, how to smooth a torn page flat so the tear disappeared into the paper instead of sitting on top of it." },
      { s: 'saori', f: 'neutral', t: "You go from the middle out. Otherwise you trap a bubble and it's there forever. Sorry. That sounds very serious. It's just tape." },
      { choose: [
        { t: "(Go slow. Middle out. Exactly like she showed you.)", notes: 3, then: [
          { n: "She went slow. The tear went flat under her thumb and vanished, more or less, into the page, and Saori leaned over to look and was quiet for so long that Solar thought she'd done it wrong." },
          { s: 'saori', f: 'happy', t: "...That's better than mine. Don't tell anyone. I'll be fired from the hospital." }
        ] },
        { t: "Do you name them?", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "No! ...Only the ones that come back more than once." },
          { s: 'saori', f: 'neutral', t: "That one's Mr. Tanaka. He's a dictionary. He's been in four times." }
        ] },
        { t: "(Tape it fast and move on.)", notes: 1, then: [
          { n: "She taped it fast. There was a bubble. Saori looked at the bubble, and at Solar, and said nothing, and took the book back very gently at the end of the hour and redid it when she thought Solar wasn't looking." }
        ] }
      ] },
      { n: "By five the box was empty and the desk was covered in little curls of tape backing, and the late sun had come around to the window and lay across the mended books in a long yellow bar, and Saori stacked them up and patted the top one, once, like you'd pat a dog that had been good at the vet." }
    ],
    [
      { n: "The lost-and-found at Gekkoukan lived in a cardboard box behind the library desk, because nobody else wanted it, and Saori had been quietly in charge of it since first year. Once a month she emptied it out across a reading table to see what the school had forgotten." },
      { n: "One glove. Three umbrellas. A calculator with a name scratched off. A keychain of a small, worried-looking cat. A single, very clean sock, folded, which raised more questions than it answered." },
      { s: 'saori', f: 'neutral', t: "I like guessing who they belong to. Not their names. Just... the kind of person. Is that strange? It's probably strange." },
      { choose: [
        { t: "The sock belongs to someone who folds their socks. That narrows it down.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "A first-year. Very organized. Lost it in gym and is too embarrassed to ask." },
          { s: 'solar', f: 'neutral', t: "Has a mother who irons." },
          { s: 'saori', f: 'happy', t: "Has a mother who irons the socks. Oh, that's sad. We have to find them." }
        ] },
        { t: "Who does the cat belong to?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Someone who worries a lot and thinks nobody notices." },
          { n: "She turned it over in her fingers and didn't look up, and Solar thought she might have been describing someone she knew quite well." }
        ] },
        { t: "Why not just throw it all out?", notes: 0, then: [
          { s: 'saori', f: 'sad', t: "Because then nobody would ever come back for them. Somebody should be waiting. Sorry. It's only a glove." }
        ] }
      ] },
      { n: "Nobody came for anything. They put it all back in the box in the order they'd guessed it, the sock on top, and Saori wrote today's date on the side under all the other dates, a long neat column of them going back two years, and slid it under the desk." }
    ],
    [
      { n: "The returns cart was full, and Saori had a system, and the system was that before she put a book back on its shelf she opened it and read the first line. Not the blurb. Not the back. The first line, under her breath, and then she shelved it. She said it was like saying hello to someone on their way home, so they'd know somebody had noticed them come in." },
      { n: "The library was nearly empty. Somebody's pencil was scratching away in the reference corner, and the radiator ticked, and the afternoon came in long and yellow through the windows over the 900s and lay across the cart in stripes." },
      { s: 'saori', f: 'neutral', t: "\"The kettle had been boiling for an hour before anyone noticed.\" ...Oh. I like that one. It's a cookbook. Sorry. I always forget to check what they are first." },
      { choose: [
        { t: "(Take a book off the cart and read her its first line. Very seriously.)", notes: 3, then: [
          { n: "It was a chemistry textbook. The first line was about the definition of matter. Solar read it with enormous gravity, with the careful, respectful voice of someone reading a poem at a funeral, and Saori had to put her forehead down on the cart for a second." },
          { s: 'saori', f: 'happy', t: "...Hello, chemistry. Welcome home. You're on the second floor. Don't tell anyone I laughed at you." }
        ] },
        { t: "Doesn't that take forever?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Yes. That's the nice part. Nobody's ever in a hurry in a library except people who shouldn't be in one." }
        ] },
        { t: "(Shelve them as fast as you can.)", notes: 1, then: [
          { n: "She shelved six books in a minute. Saori watched with the polite, pained expression of someone watching strangers walk past each other in a station without a word, and said nothing, and went along behind her quietly opening each one." }
        ] }
      ] },
      { n: "They got through the cart by five. Saori knew the first line of every book on it. Solar knew the first lines of about four, and one of them was the chemistry one, and she had a strong suspicion she would know it for the rest of her life, wherever that turned out to be, and that whenever it surfaced she would hear it in Saori's voice, saying welcome home." }
    ]
  ],
  ranks: [
    { after: '4/28', title: '1: the sun and the moon', place: 'Gekkoukan High · Library', scene: [
      { music: 'tender' },
      { n: "The library smelled of floor wax and warm radiators and the particular dust that comes off paper nobody has opened in a long time, and at half past four on the day before a holiday it was nearly empty, which was the point. Outside, the wind was pushing the last of the cherry petals across the courtyard in tired pink drifts, and the windows rattled a little in their frames, and the room didn't notice." },
      { n: "Solar had come for a story. The one Elizabeth had told her, the first morning, about a tiger and some rice cakes and two children climbing a rope into the sky, and a sister who was so afraid of being looked at that she turned herself into the sun. She'd thought about it for three weeks. In class, on the monorail, at five in the morning on the riverside with Akihiko's back getting smaller ahead of her. She wanted to see it written down, to check if it said the same thing on paper, and she couldn't have explained why to anyone in this building without being sent to the nurse." },
      { n: "She'd tried the folklore shelves. There were a lot of foxes and a lot of cranes and no tigers at all. So she went to the desk, where a girl was stamping due-date cards with enormous care, a second-year with her hair tucked behind one ear and escaping, and a committee armband pinned on her sleeve a little crooked. It said LIBRARY. Solar had an armband now too. It was in her bag, and it said something else, and she noticed the comparison and put it away." },
      { s: 'solar', f: 'neutral', t: "I'm looking for a folktale. A brother and a sister, and a tiger. They climb a rope into the sky." },
      { s: 'saori', f: 'surprised', t: "Oh! The sun and the moon!" },
      { s: 'saori', f: 'flustered', t: "I'm sorry. I didn't mean to say it so loud. It's... I know that one. It's from Korea, I think. I'm sorry, I only think." },
      { n: "She led Solar to the very back of the stacks, where the light from the windows didn't quite reach, and knelt down on the carpet in her skirt without a second's thought, and ran one finger along the bottom shelf, and pulled out a cloth-bound book with a cracked green spine. Folk Tales of East Asia. The card in the pocket at the back had four stamps on it. The last one was from 1998." },
      { s: 'saori', f: 'neutral', t: "Nobody's borrowed it in eleven years. Sorry. That isn't your fault. I just like knowing those things." },
      { choose: [
        { t: "Then it's been waiting for me.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "...That's a nice way to say it. I'm going to steal that. Sorry. Thank you." }
        ] },
        { t: "Is that sad?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "A little. I don't think books mind, though. They're very patient." }
        ] },
        { t: "(Hold out your hand for it.)", notes: 1, then: [
          { n: "She held out her hand, and the girl gave her the book quickly, like she'd been caught holding something that wasn't hers." }
        ] }
      ] },
      { n: "Back at the desk, while the girl was writing up the card, two second-years by the magazine rack put their heads together. Solar didn't catch the words. She caught the shape of them, the rise and the dip and the little pleased hush at the end, and the way both pairs of eyes went to the desk and away again, quick, like they were passing a sweet back and forth under a table." },
      { n: "The girl at the desk went very still. Not frozen. Practiced. She kept writing with her eyes down, and the tips of her ears went pink, and she kept writing." },
      { n: "And the strange thing, the thing Solar would turn over that night lying on top of her covers, was that the back of her own neck went hot. It wasn't even her they were talking about. Her shoulders squared anyway, and her chin came up a fraction, and her face arranged itself into something pleasant and closed, all on its own, the way you'd put a hand up against a glare. Like her body had stood in a lot of rooms where people talked about her, and had learned what to do about it, and had never once asked her permission." },
      { s: 'saori', f: 'sad', t: "I'm sorry. It's me, not you. You should probably go before they decide it's you too." },
      { choose: [
        { t: "(Lean on the desk with your back to them. Stay.)", notes: 3, then: [
          { n: "Solar leaned on the desk on both forearms, with her back square to the magazine rack, and looked at nothing but the card being written, and after a while the whispering behind her ran out of air the way a fire does with nothing to burn." },
          { s: 'saori', f: 'surprised', t: "...You didn't have to do that." },
          { s: 'solar', f: 'neutral', t: "I'm waiting for my book." }
        ] },
        { t: "Who are they?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Nobody. Second-years. They aren't bad people. There's just a story about me, and everybody's heard it, and it's more interesting than I am." }
        ] },
        { t: "Do they do that a lot?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "Only when I'm in the room." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "Name, please. For the card." },
      { s: 'solar', f: 'neutral', t: "Solar." },
      { n: "The girl wrote it, and her pen paused where the rest of it should have gone, and waited. Solar didn't give her the rest. After a second the pen lifted, and the girl left a small, careful space on the card, and didn't ask. It was, Solar thought, the kindest thing anyone had done for her in a week." },
      { s: 'saori', f: 'neutral', t: "I'm Saori. Hasegawa. Library committee, as you can see. It's due on the twelfth." },
      { register: 'saori' },
      { s: 'saori', f: 'neutral', t: "The sister in that story. She was so afraid of people looking at her that she made herself too bright to look at. I always thought that was very brave." },
      { s: 'saori', f: 'flustered', t: "I would have just hidden behind a cloud. Sorry. That's a silly thing to say about a folktale." },
      { s: 'solar', f: 'neutral', t: "She was hiding too. She just did it by shining." },
      { n: "Saori looked up from the card, properly, for the first time, and her eyes were dark and startled and much steadier than the rest of her, and she looked at Solar for a long second as if Solar had said something that wasn't about the folktale at all. Solar wasn't sure it had been." },
      { s: 'saori', f: 'happy', t: "...Oh. I hadn't thought of it like that." },
      { n: "Solar left with the book under her arm and the wind pushing at her back all the way to the gate, and on the monorail she opened it to the card in the back, and there was her name, in someone else's careful round hand, with a polite space beside it where a surname should go. Kept. Not filled in. Just kept." }
    ] },

    { after: '5/7', title: '2: the story', place: 'Gekkoukan High · Shoe Lockers', scene: [
      { n: "Golden Week had come and gone and left everyone sunburned and sullen, and the first warm rain of the year was coming down outside the shoe lockers in a soft gray sheet, and the whole entrance smelled of wet umbrellas and rubber soles. Solar was changing her shoes when a girl from her class leaned on the locker beside hers with the bright, conspiratorial face of someone carrying something heavy she'd love to put down on you." },
      { s: 'classmate', t: "You were in the library with Hasegawa last week, right? Did you know about her? Because, okay, so apparently she—" },
      { choose: [
        { t: "I don't want to know.", notes: 3, then: [
          { s: 'classmate', t: "...Seriously? It's a good one." },
          { s: 'solar', f: 'serious', t: "Then save it for someone who likes them." },
          { n: "The girl's mouth stayed open a second longer than it needed to, and then she laughed, a little uncertainly, and went to find someone who did." }
        ] },
        { t: "Did you see her do it?", notes: 2, then: [
          { s: 'classmate', t: "Well, no. But everybody—" },
          { s: 'solar', f: 'serious', t: "Then you don't know either." }
        ] },
        { t: "(Close your locker and walk off mid-sentence.)", notes: 1, then: [
          { n: "She shut the locker, not hard, and walked off while the girl was still on the word apparently, and felt the look between her shoulder blades all the way to the stairs." }
        ] }
      ] },
      { place: 'Gekkoukan High · Library', time: 'After School' },
      { n: "She'd finished the book over the holiday. The tiger and the rice cakes and the rope, and the sister who traded with her brother because she was afraid of the dark and then found out she was more afraid of being seen, and it had said the same thing on paper that it said in a blue room in a dream, which was either comforting or not, and she'd decided not to decide." },
      { n: "Saori wasn't at the desk. Solar found her in the back stacks again, sitting on the carpet with a library book open on her knees and a white eraser in her hand, rubbing at the margin of a page with small, patient, furious strokes." },
      { n: "There was pencil in the margin. Somebody's handwriting, slanted and hurried, and Saori's name in it. Solar didn't read the rest. She didn't have to. She knew the shape of a sentence written about you by someone who wanted you to find it. It looked the same from any distance." },
      { s: 'saori', f: 'surprised', t: "Oh! No, don't. Please don't look. I'm sorry. You shouldn't have to see this." },
      { choose: [
        { t: "(Take the eraser from the desk cup and start from the back of the book.)", notes: 3, then: [
          { n: "Solar went and got the other eraser from the cup on the desk and came back and sat down on the carpet across from her, and took the book gently by its back cover, and started from the last page. Saori watched her for a long moment. Then she went back to her margin, and they met somewhere in the middle, an hour later, with their knees almost touching and the carpet between them full of gray crumbs." }
        ] },
        { t: "You should tell a teacher.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "I did. Last year. Then there was a story about me telling teachers." },
          { n: "She went back to erasing. After a while, Solar sat down and helped." }
        ] },
        { t: "Who wrote it?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "It doesn't matter. It's never the same person, and it's always the same sentence." },
          { n: "Solar sat down across from her and took half the book." }
        ] }
      ] },
      { s: 'saori', f: 'sad', t: "Someone's already told you, haven't they. It's alright. Everyone gets told eventually." },
      { s: 'solar', f: 'neutral', t: "Someone tried." },
      { s: 'saori', f: 'surprised', t: "What did you..." },
      { s: 'solar', f: 'neutral', t: "I didn't let her finish." },
      { n: "Saori put the eraser down on the carpet. She put both hands over her face, sleeves and all, for one second, two, and when she took them away her eyes were bright and wet at the rims and she was laughing, a little, without any sound, the way people laugh when it's that or the other thing." },
      { s: 'saori', f: 'sad', t: "It isn't all lies. That's the problem. There's one true thing in the middle of it, and that's what makes it stick. If it were all lies it would have washed off by now." },
      { choose: [
        { t: "Then tell me the true thing. When you want to. Not before.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "...When I want to?" },
          { s: 'solar', f: 'neutral', t: "Or never. I'm not in a hurry." },
          { n: "Saori looked at her like she'd been handed something heavy and been told she didn't have to carry it yet, and didn't know where to put her hands." }
        ] },
        { t: "I know what it's like.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Do you? How?" },
          { n: "Solar opened her mouth, and nothing came, because there was nothing there to bring. Just the heat at the back of her neck and the chin coming up on its own, a reflex without a memory behind it, like flinching at a sound you've never heard." },
          { s: 'saori', f: 'happy', t: "It's alright. You don't have to have a reason. I believe you anyway." }
        ] },
        { t: "People get bored eventually.", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "They do. Then someone new transfers in, and they tell it all over again." },
          { n: "She glanced at Solar, and then away, and said sorry, she didn't mean anything by it, and Solar thought she might have meant a little." }
        ] }
      ] },
      { n: "When they were done Saori swept the eraser crumbs off the carpet into her cupped palm, every last one, and tipped them into the bin by the desk, and dusted her hands off against each other like she'd buried something. Solar held out the folktale book to return it." },
      { s: 'saori', f: 'neutral', t: "Oh. Actually, I already renewed it. In case you wanted to read it twice." },
      { s: 'saori', f: 'flustered', t: "Sorry. I mean, you're welcome. I'm practicing that one." }
    ] },

    { after: '5/19', title: '3: eleven', place: 'Gekkoukan High · Library', scene: [
      { n: "Midterm week, and the library was the busiest it ever got, every table full of students bent over their notes with the grim, glassy look of people being slowly crushed, and by six it was empty again except for the two of them and the rain. The rain had been coming for two days. It came down now in long silver ropes past the window, steady and patient, the kind of rain that had plans to stay." },
      { n: "Saori was helping her with classical Japanese, which Solar was bad at in a way that felt almost personal, as if the old verbs had taken one look at her and decided against her. Saori explained auxiliary verbs with her finger under each line and her voice so soft that Solar had to lean in." },
      { s: 'saori', f: 'neutral', t: "No, that's alright, it's my fault, I explained it badly. Sorry. Let me try again. Sorry, I know I said that already." },
      { choose: [
        { t: "New rule. One hour, no sorries.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "One hour? I'm sor... oh no." },
          { n: "Solar took a sticky note from the desk and drew a single line on it, and stuck it to the table between them, and Saori looked at the line with the expression of a person who has just been handed a lifetime sentence." }
        ] },
        { t: "It's not your fault I'm bad at this.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "Somebody's fault is easier. I volunteer. Sorry. Oh, I did it again." },
          { n: "Solar started counting after that. She didn't say so. Saori noticed anyway." }
        ] },
        { t: "(Let it go and look at the next line.)", notes: 1, then: [
          { n: "Solar let it go. Saori said sorry four more times in the next ten minutes, once to a chair, and Solar started counting under her breath, and Saori heard her and went pink." }
        ] }
      ] },
      { n: "By the end of the hour the sticky note had eleven lines on it. Four of them were for the textbook. One was for the rain. One was for a pencil that rolled off the table on its own and that Saori apologized to directly, and then put both hands over her mouth, and then, behind her hands, started to laugh, really laugh, so hard she had to put her forehead down on the classical Japanese." },
      { s: 'saori', f: 'happy', t: "I can't. I can't do it. It just comes out. It's like a hiccup." },
      { s: 'solar', f: 'neutral', t: "Why do you do it?" },
      { n: "The laughing went out of her slowly, like water out of a basin. She sat up and pulled her sleeves down over her hands and looked at the eleven lines." },
      { s: 'saori', f: 'neutral', t: "If I say sorry first, there's nothing left for anyone to say to me. It's like paying the fine before they write the ticket. Then they can't be angry. I already did it for them." },
      { s: 'saori', f: 'sad', t: "It sounds very stupid, out loud." },
      { choose: [
        { t: "I do the same thing. Just with my face.", notes: 3, then: [
          { n: "Saori looked at her. Not at the textbook, not at the window. At her face, carefully, the way she looked at a torn page, and Solar sat through it and felt every muscle in her cheeks know it was being read." },
          { s: 'saori', f: 'neutral', t: "...You do, a little. You smile before anybody can decide anything about you. I noticed the first day. Sorry. That's twelve." },
          { n: "Solar didn't know what to do with that, so she drew the twelfth line, and her hand wasn't quite steady, and Saori pretended not to see that either." }
        ] },
        { t: "It's not working, though. Is it?", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "No. But it's mine. It's the only thing in it that's mine." }
        ] },
        { t: "That's kind of sad, Saori.", notes: 0, then: [
          { s: 'saori', f: 'sad', t: "...Sorry." },
          { n: "Solar drew the twelfth line without saying anything, and wished she'd said something else." }
        ] }
      ] },
      { place: 'Gekkoukan High · Shoe Lockers', time: 'Evening' },
      { n: "The entrance was dark except for the light over the door, and the rain was loud on the glass, and the whole long rank of shoe lockers smelled of damp canvas. Saori opened hers, and stopped." },
      { n: "On top of her outdoor shoes there was a piece of notebook paper, folded small and tight, the way you fold something you want to look like a secret." },
      { n: "She didn't touch it. She stood there with one hand on the little metal door and looked at it the way you look at a wasp on a windowsill, very still, deciding, and Solar watched her face do the practiced thing, go smooth and pleasant and far away, and recognized it the way you recognize your own coat on somebody else." },
      { choose: [
        { t: "(Reach past her, take it, and drop it in the bin unread.)", notes: 3, then: [
          { n: "Solar reached past her shoulder and picked the note up between two fingers and walked it to the bin by the umbrella stand and dropped it in without unfolding it, and came back, and that was all." },
          { s: 'saori', f: 'surprised', t: "You didn't even read it." },
          { s: 'solar', f: 'neutral', t: "It wasn't to me." }
        ] },
        { t: "Do you want me to read it first?", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "No. Yes. ...No." },
          { n: "So Solar didn't, and threw it away folded, and Saori let out a breath she seemed to have been holding since the stairs." }
        ] },
        { t: "Leave it there. Don't give them anything.", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "Then it'll be there tomorrow." },
          { n: "She took it out and put it in her blazer pocket without opening it, and Solar thought she'd carry it all the way home and look at it at midnight, and couldn't stop her." }
        ] }
      ] },
      { n: "They changed their shoes. Saori took the sticky note out of her textbook, where she'd put it when they packed up, and smoothed it flat with her thumb, from the middle out, so there were no bubbles, and looked at the twelve little lines." },
      { s: 'saori', f: 'happy', t: "Tomorrow, eleven. Then ten. I think I can get down to ten." },
      { s: 'saori', f: 'neutral', t: "Thank you for staying, Solar. Not sorry. Thank you." },
      { n: "She said it carefully, like a word in a language she was only beginning to learn, and then she put up her umbrella and went out into the rain, and Solar stood in the doorway under the light and watched her go, small and straight-backed, all the way to the gate, and didn't look away until she was gone." }
    ] },

    { after: '6/3', title: '4: the notebook', place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "The rainy season had come in over the weekend and settled on Port Island like a guest who'd brought luggage, and the library windows were running with it, gray light and gray water and the soft continuous hush of it on the glass, so that the whole room felt like the inside of a shell held up to an ear. Saori was at the desk. She wasn't stamping anything. She was writing, in pencil, in a plain gray notebook, bent so low over it that her hair had come loose from behind her ear and hung down like a curtain." },
      { n: "Solar had been coming to the library for a month now, on the days Saori had the desk, and had noticed a number of things without meaning to, the way you notice the furniture in a room you keep sitting in. The radiator knocked twice before it came on. The third stair was loud. And Saori didn't flinch at loud things. The baseball team could crack a ball off the fence outside and the door could bang and a first-year could drop a whole atlas, and Saori would only look up, mildly, the way you'd look up at weather." },
      { n: "She flinched when voices went down." },
      { n: "At the reference table two girls had their heads together, a second-year with a glossy ponytail and a laugh she was keeping in her throat, and a friend, and their voices dropped, the way voices do when they reach the good part. Saori's hand jerked. The notebook slid off the edge of the desk and landed face down on the floor between them, open, its spine bent back." },
      { choose: [
        { t: "(Pick it up and close it without turning it over.)", notes: 3, then: [
          { n: "Solar picked it up by the covers, still face down, and closed it like that, and handed it back across the desk without once looking at the inside, and Saori took it in both hands and held it against her chest and let out a breath that seemed to have come from somewhere very far down." }
        ] },
        { t: "Is this yours or the library's?", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "Mine. Very mine. Sorry." },
          { n: "She took it back fast, and then slower, as if she'd remembered halfway through that Solar wasn't the kind of person you had to snatch things from." }
        ] },
        { t: "(Hand it back open, the way it fell.)", notes: 1, then: [
          { n: "Solar handed it back the way it had fallen, open, and Saori closed it so fast the pages cracked, and went pink, and said thank you to the desk." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "Thank you. Sorry. Thank you. That's one sorry, I know. I'm counting." },
      { s: 'saori', f: 'neutral', t: "I used to write. Stories. Little ones. I stopped for two years. I started again after the sticky note. It seemed like if I could get down to eleven sorries, maybe I could get to one page." },
      { s: 'saori', f: 'sad', t: "I'm not at one page. I'm at one line. I've been writing the same first line for a week." },
      { n: "At the reference table the voices dipped again and something about them, the rise and the little hush, made Saori's shoulders come up toward her ears and stay there." },
      { s: 'saori', f: 'neutral', t: "That's Ōmori-san. We went to the same middle school. She's on the committee. She's never shelved anything." },
      { choose: [
        { t: "You flinch when people get quiet. Not when they get loud.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { s: 'saori', f: 'neutral', t: "Nobody's ever noticed it that way round. They think I'm jumpy. I'm not jumpy. Loud is just loud." },
          { s: 'saori', f: 'sad', t: "Quiet means it's about you." }
        ] },
        { t: "What's the first line?", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "Later. Maybe. If I keep it. Sorry. That's two." }
        ] },
        { t: "Want me to go tell them to be quiet?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "They are being quiet. That's the problem." }
        ] }
      ] },
      { n: "The girl with the ponytail got up after a while and came to the desk with a magazine she hadn't read and laid it down to be checked out, and smiled at Saori, a good smile, a smile that had been practiced in a mirror and knew exactly what it was for, and her eyes went to the gray notebook under Saori's hand and rested there." },
      { s: 'omori', t: "Still writing, Hasegawa-san? That's so brave of you." },
      { n: "Saori went still. Not frozen. The practiced kind, the one Solar had seen in April, eyes down, ears going pink, hand flat on the cover of the notebook like you'd hold down a page in the wind." },
      { choose: [
        { t: "(Take the stamp and check the magazine out yourself, very carefully, and say nothing.)", notes: 3, then: [
          { n: "Solar reached across, took the brass stamp, rolled the date wheels with her thumb, stamped the card with enormous care, the way she'd watched Saori do it a hundred times, slid the magazine back across the desk, and looked at Ōmori with nothing on her face at all. Ōmori waited for something. Nothing came. She took the magazine and went, and at the door she glanced back, uncertain, which Solar suspected didn't happen to her much." }
        ] },
        { t: "She is brave. Thanks for noticing.", notes: 2, then: [
          { s: 'omori', t: "...Sure. Anytime, senpai." },
          { n: "She took the magazine herself. The smile stayed on her face all the way to the door, a little too long, like a light left on in an empty room." }
        ] },
        { t: "What's that supposed to mean?", notes: 1, then: [
          { s: 'omori', t: "Ask her." },
          { n: "She said it pleasantly and left, and Solar understood a second too late that a question was exactly what she'd come to the desk to be handed." }
        ] }
      ] },
      { n: "When the door had closed behind her Saori sat for a moment with her hand still flat on the notebook. Then she opened it, not toward Solar, just open, on the desk between them, and turned it a little, about ten degrees, which Solar was beginning to understand was a very large distance for Saori." },
      { s: 'saori', f: 'neutral', t: "Just the first line. That's how you say hello to a book. You don't have to say anything back." },
      { n: "It was written in pencil, in her small round hand, and gone over so many times it shone. *The sister had never wanted to be the sun; she had only wanted to be somewhere nobody could point.*" },
      { n: "Solar read it twice. Something in the back of her neck went warm and still, the way it had in April at this same desk, like the line had been written about someone standing just behind her." },
      { s: 'solar', f: 'neutral', t: "What happens next?" },
      { s: 'saori', f: 'sad', t: "I don't know yet. That's the part I stopped being able to do. The next part." },
      { n: "But she picked up the pencil anyway, while Solar was still there, and bent over the page with her arm curled around it like a girl shielding a test, and wrote a second line. Solar looked at the rain so she wouldn't see it. The rain went on, patient, on the glass. When Saori closed the notebook there were two lines in it, and she said nothing about it, and neither did Solar, and it was, she thought, one of the louder things that had happened in that room all year." }
    ] },

    { after: '6/29', title: '5: the true thing', place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "It had rained for nine days. Not hard. The rainy season didn't do hard; it did forever, a fine gray steadiness that got into the wood of the shelves and the pages of the books and made the whole library smell faintly of mushrooms and wet wool. By half past five the room was empty and the windows had gone the color of dishwater, and Saori had shelved the last cart and come back to the desk, and was standing beside it with her hands folded in front of her like a girl about to give a recitation." },
      { s: 'saori', f: 'neutral', t: "In May you said I could tell you the true thing. When I wanted to. Not before." },
      { s: 'saori', f: 'flustered', t: "I want to. I think. I want to the way you want to jump into cold water. You want to have done it." },
      { choose: [
        { t: "(Put your pen down and turn your chair to face her.)", notes: 3, then: [
          { n: "Solar put her pen down, and turned her chair around so that it faced the desk, and folded her hands in her lap the same way Saori had folded hers, and waited, and Saori looked at the folded hands and laughed once, very softly, at herself, and then sat down." }
        ] },
        { t: "You don't have to.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "I know. That's why I can." }
        ] },
        { t: "Is it bad?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "It's small. That's the bad part. It was always so small." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "In my second year of middle school I forgot my umbrella. It was raining like this. And a boy in my class walked me home under his. Kudō-kun. He wasn't anything to me. He was just kind, and he had a very big umbrella." },
      { s: 'saori', f: 'neutral', t: "That night I wrote a story about it. Not about him. About being walked home. About the sound rain makes on an umbrella when you're underneath it, how it sounds like being inside something. It was two pages. It was the best thing I'd ever written." },
      { s: 'saori', f: 'sad', t: "Kudō-kun had a girlfriend. It was Ōmori-san. She found the notebook in my desk. And at lunch she read it to the whole class." },
      { n: "She stopped. The rain filled the gap, very politely, the way rain does." },
      { s: 'saori', f: 'sad', t: "Not loud. That's the thing. She read it quiet. In that voice. The one people use for things they're not supposed to be reading. And everyone leaned in, and they laughed in all the right places, and by the end of the week I'd tried to steal him. By the end of the month I'd tried to steal other people's. By the summer it was worse things. Things I won't say in a library." },
      { s: 'saori', f: 'sad', t: "My mother had to come in. A teacher called it inappropriate material. Two pages about an umbrella. I came here because it was far away. And on the first day, in the entrance hall, there was Ōmori-san. She'd come here too. She smiled at me." },
      { choose: [
        { t: "It wasn't hers to read out. It was yours to write.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { n: "Saori looked at her for a long moment with her mouth slightly open, as if Solar had read something back to her that she'd written a long time ago and forgotten she'd meant." },
          { s: 'saori', f: 'neutral', t: "...Nobody's ever put those two things apart. They always come stuck together. Like pages that got wet." }
        ] },
        { t: "Ōmori. From the committee. Of course.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "She still has it, I think. The notebook. She never gave it back. Sometimes I think about it in a drawer in her room and I can't breathe properly for a minute." }
        ] },
        { t: "Did you like him?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "Everyone asks that. That's the only thing anyone has ever asked me about it." },
          { n: "Solar wished, immediately and completely, that she'd asked anything else." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "So that's the true thing. He did walk me home. And I did write it down. It was the nicest thing that happened to me that year, and I wrote it down, and they read it out in that voice. Everything else grew out of that like mold on bread." },
      { s: 'saori', f: 'sad', t: "And now I can't hear anyone lower their voice without hearing my own sentences in it." },
      { place: 'Gekkoukan High · Front Gate', time: 'Evening' },
      { n: "The rain hadn't let up. The gate lamps were on, and the light came down through the rain in long slanted threads, and the puddles on the walk were shivering, and Saori stood under the overhang with her umbrella closed in her hand, a pale blue one with a wooden handle, and didn't open it." },
      { s: 'saori', f: 'flustered', t: "Could you walk me to the station? I have an umbrella. I know I have an umbrella. It's not about the umbrella." },
      { s: 'saori', f: 'neutral', t: "I'd like a new version. Of that walk. One that's mine. That nobody gets to read." },
      { choose: [
        { t: "(Open your umbrella over both of you. Walk slow.)", notes: 3, then: [
          { n: "Solar opened hers, which was black and plain and from the convenience store, and held it over both of them, and they walked to the station slower than either of them had ever walked anywhere, shoulder to shoulder because the umbrella wasn't big, with the rain drumming on the nylon a few inches above their heads, and it did sound like being inside something. It sounded exactly like that. Saori didn't say a word the whole way. Neither did Solar. It was the best conversation they'd had." }
        ] },
        { t: "Then let's use yours.", notes: 2, then: [
          { n: "Saori opened the blue one with a click, and held it up, and since she was shorter it kept bumping Solar's head, and after the third time she started apologizing and the apology turned into a laugh halfway through and never came back out." }
        ] },
        { t: "It's only rain. Let's run for it.", notes: 1, then: [
          { n: "They ran, and got soaked, and it was fun, and Saori laughed the whole way, and at the station she looked down at her wet sleeves and said it was a good version, and Solar thought it was a different one than she'd asked for." }
        ] }
      ] },
      { n: "At the ticket gates Saori turned and looked up at her, with her hair damp at the edges and her eyes very steady, steadier than the rest of her, the way they'd been the first day over a library card." },
      { s: 'saori', f: 'happy', t: "I'm going to write this one down too." },
      { s: 'solar', f: 'neutral', t: "Will anyone read it?" },
      { s: 'saori', f: 'flustered', t: "...One person. If she wants to." }
    ] },

    { after: '7/15', title: '6: one page', place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "The term was over, near enough, and the library had gone into its summer hours, which meant the committee and the desk and the inventory and nobody else. The air conditioning had broken in the second week of July in the way it apparently broke every July, and Ms. Ozawa had brought in an electric fan from home that turned its head slowly back and forth across the room like an old dog that had heard something, lifting the corners of every loose page it passed." },
      { n: "Saori was doing inventory with a clipboard and her sleeves pushed up, which Solar had never seen before, the soft insides of her wrists pale against the cardigan. There was a white envelope on the desk. It had nothing written on it. Saori kept not looking at it." },
      { s: 'saori', f: 'neutral', t: "I finished something. It's one page. It's the sister. From the first line." },
      { s: 'saori', f: 'flustered', t: "It's in the envelope. It's for you. Not to keep. To read. I mean you can keep it. I mean I don't know what I mean. It's very hot in here." },
      { choose: [
        { t: "(Read it here, at the desk, while she watches.)", notes: 3, then: [
          { n: "Solar opened the envelope at the desk. Saori lasted about four seconds and then went to shelve something in the 400s that didn't need shelving, and came back, and went again, and came back, three times, like a moth with a conscience." }
        ] },
        { t: "Can I take it home?", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "No. Yes. ...Please read it here. If you take it home I'll die by Tuesday." },
          { n: "So Solar read it at the desk." }
        ] },
        { t: "Read it to me?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "I can't. Not out loud. Not yet. That's the whole thing." },
          { n: "So Solar read it herself, and Saori went very carefully to the far end of the room and stood with her back to it." }
        ] }
      ] },
      { n: "It was one page, handwritten, both sides. The sister climbed the golden rope and stood in the sky and made herself so bright that nobody could look at her, and it worked, and she was safe up there, and lonely in a way that made Solar's throat do something before her head had caught up. Every day the people below shaded their eyes when they looked up, and every day she thought, there, they're turning away from me, good. And on the very last line, written smaller, as if it had been hard to get out, she found out what they were doing." },
      { n: "*They were squinting,* it said, *so that they could keep looking.*" },
      { n: "Solar put the page down on the desk, very flat, and kept her hand on it. The fan came round and lifted the corner under her fingers and let it go. She didn't know why her eyes stung. She knew exactly why. She didn't know which of those was true." },
      { choose: [
        { t: "\"So that they could keep looking.\"", notes: 3, then: [
          { n: "She said it back, just that, the last line, quietly, the way you'd say the name of a place you'd been to." },
          { s: 'saori', f: 'surprised', t: "...You picked the line I almost cut." },
          { s: 'saori', f: 'happy', t: "I'm not going to cut it now." }
        ] },
        { t: "It's really good, Saori.", notes: 2, then: [
          { s: 'saori', f: 'flustered', t: "Good how? Sorry. I'm not fishing. I'm fishing a little." }
        ] },
        { t: "Is the sister you?", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "Everybody in a story is the person who wrote it. That's the embarrassing thing about stories." }
        ] }
      ] },
      { s: 'saori', f: 'flustered', t: "She's a little you, too. Sorry. In April you said she was hiding by shining, and I couldn't stop thinking about it. I've been thinking about it for three months. You did that." },
      { n: "Solar didn't know what to say to that, so she didn't say anything, and Saori seemed to think that was the right answer, and went back to the inventory, and her ears stayed pink for twenty minutes." },
      { s: 'saori', f: 'neutral', t: "I wrote most of it at night. With the window open. There's a cat on our street who sits on the wall and watches me, and I'd read each line to the cat. Very quietly. The cat didn't mind any of it. The cat was a very good first reader." },
      { s: 'saori', f: 'flustered', t: "You're the second. You were always going to be the second. I just had to practice on a cat first. That sounds terrible. I mean it nicely." },
      { n: "Solar thought of her at a window in the dark, whispering a page to a cat on a wall, a girl who couldn't stand to hear a lowered voice using her own lowered voice to say the bravest thing she had, very carefully, to the only listener she was sure wouldn't repeat it. She folded the page back along its crease and put it in the envelope and held the envelope on her knee and didn't give it back yet." },
      { s: 'saori', f: 'neutral', t: "There's a prize. Prefectural. For students. The deadline is in September. Ms. Ozawa put the flyer on the desk. She's put it on the desk three times. I keep putting it in the drawer." },
      { choose: [
        { t: "Enter it. Under your own name.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "My own name?" },
          { s: 'solar', f: 'neutral', t: "It's a good name. It's been on every due-date card in this building. It can go on one more thing." },
          { s: 'saori', f: 'sad', t: "...That's a very frightening thing to say kindly." }
        ] },
        { t: "You don't have to decide today.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "I know. I'm very good at not deciding today. I've been not deciding today since April." }
        ] },
        { t: "What if Ōmori finds out?", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "Then she'll read it in that voice." },
          { s: 'saori', f: 'neutral', t: "...She'd have to read it in that voice to the whole prefecture, though. That's a lot of voice." }
        ] }
      ] },
      { n: "When Solar left, the flyer was not in the drawer. It was on the desk under the brass stamp, held down against the fan, and Saori was not looking at it in a way that was entirely different from the way she had not been looking at it before." },
      { s: 'saori', f: 'flustered', t: "I'm on the desk on Tuesdays all summer. Nobody comes. You could not come too. With me. We could not come together." }
    ] },

    { after: '9/16', title: '7: the committee', place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "The second-term duty meeting was held at the long table in the middle of the library, eight committee members and Ms. Ozawa at the head with her clipboard and her reading glasses on a chain, and Solar wasn't on the committee and was there anyway, in the chair by the window that had somehow become hers, with a book open on her knee that she wasn't reading. September had come in hot and stayed hot. The windows were open and the cicadas outside were down to a few hoarse holdouts, and the baseball team was shouting at each other in the distance like seabirds." },
      { n: "Saori sat at the far end with her hands folded on the table. She'd told Solar at the gate that morning, in a whisper, that she'd mailed it. The sister. On Monday. To the prefecture. She'd said it like a confession and then run up the stairs before Solar could answer." },
      { s: 'ozawa', t: "Evening desk, Mondays and Wednesdays. Hasegawa-san, you'd be good for that." },
      { s: 'omori', t: "Are you sure? What will she be writing at the desk this time? The last thing she wrote was very educational." },
      { n: "Somebody laughed. Not everybody. Enough. Saori's folded hands went white across the knuckles, and her mouth started, very slightly, to shape the word sorry, to pay the fine before anyone wrote the ticket." },
      { choose: [
        { t: "(Stand up and walk to Saori's end of the table.)", notes: 3, then: [
          { n: "Solar stood up. The chair scraped. She walked the length of the table, past six people who suddenly found their clipboards fascinating, and stood behind Saori's chair with one hand on the back of it, and didn't say anything, and didn't have to." }
        ] },
        { t: "Say that again. Slower. So everybody hears how it sounds.", notes: 2, then: [
          { n: "The table went silent. Ōmori turned in her chair. She had not, apparently, noticed Solar by the window until now, and she looked at her the way you'd look at a dog that had been lying in the corner the whole time and turned out to bite." }
        ] },
        { t: "Ms. Ozawa, are you going to let her say that?", notes: 1, then: [
          { s: 'ozawa', t: "Ōmori-san. That's enough." },
          { n: "It wasn't, though. Everybody at the table could tell it wasn't." }
        ] }
      ] },
      { s: 'omori', t: "Oh, and you'd know all about educational, wouldn't you, senpai? The transfer from the dorm full of boys. My friend lives on your street. She says you come home at one in the morning. What do you even do out there?" },
      { n: "Solar had a dozen answers. All of them dry, all of them ready, all of them true in a way nobody at this table would ever be able to check, and she opened her mouth to pick one, and never got to." },
      { s: 'saori', f: 'serious', t: "Don't." },
      { n: "Saori was standing. Solar hadn't seen her stand. Her voice wasn't loud. It was just completely, frighteningly level, the voice she used for due dates, and it went all the way to the back of the room and didn't come back." },
      { s: 'saori', f: 'serious', t: "You can say whatever you want about me. You've been saying it since I was thirteen. You read my notebook to forty people and I never once asked you to stop." },
      { s: 'saori', f: 'serious', t: "But you don't get to talk about her. She's the only person in this school who sat down. You don't get to touch that. Not ever." },
      { n: "Nobody laughed. Ōmori's mouth was open. Ms. Ozawa, after a long moment, took her glasses off and wrote something on her clipboard and said Ōmori-san, Thursdays, I think, in a voice that ended the meeting." },
      { place: 'Gekkoukan High · Stairwell', time: 'After School' },
      { n: "Afterward Saori sat on the stairs outside the library with her hands in her lap, and they were shaking, both of them, hard, like she'd come in from the cold, though it was nearly thirty degrees in the stairwell and smelled of floor polish and somebody's orange peel." },
      { s: 'saori', f: 'surprised', t: "I've never done that. I've never done that in my whole life. My hands won't stop." },
      { s: 'saori', f: 'sad', t: "I'm sorry. She was talking about you, and something just... I didn't decide. It happened. Was that alright? Was that too much?" },
      { choose: [
        { t: "(Take her hands until they stop shaking.)", notes: 3, then: [
          { n: "Solar sat one step below and took both of Saori's hands in hers, and they were cold and trembling like a bird's heart, and she held them until they were warm and still. It took a long time. Neither of them said anything about how long it took." },
          { s: 'saori', f: 'happy', t: "...Oh. That's better." }
        ] },
        { t: "That was the bravest thing I've seen all year.", notes: 2, then: [
          { s: 'saori', f: 'surprised', t: "Braver than you? You come home at one in the morning. Apparently." },
          { s: 'solar', f: 'happy', t: "That's not brave. That's just a bad commute." },
          { n: "Saori laughed, wet and wobbly, and wiped her eyes on her sleeve." }
        ] },
        { t: "You didn't have to defend me.", notes: 1, then: [
          { s: 'saori', f: 'serious', t: "Yes, I did. You don't get to decide that part." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "I mailed it. On Monday. I said so this morning, but I said it too fast, so I'm saying it again. The sister. To the prefecture. With my name on it. My whole name." },
      { choose: [
        { t: "Hasegawa Saori. In front of the whole prefecture.", notes: 3, then: [
          { s: 'saori', f: 'flustered', t: "Don't say it like that. It sounds like a sports announcement." },
          { s: 'saori', f: 'happy', t: "...Say it again, though." }
        ] },
        { t: "I knew you would.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "You didn't. I didn't. I stood at the post box for twenty minutes. A man asked if I needed help." }
        ] },
        { t: "What if you don't win?", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "Then I'll have lost under my own name. That's new too." }
        ] }
      ] },
      { n: "Saori didn't ask, then or ever, what Solar did at one in the morning. Solar noticed that. She noticed it the way you notice that somebody has left the porch light on for you, without making a thing of it, and gone to bed." }
    ] },

    { after: '10/14', title: '8: a fresh start', place: 'Gekkoukan High · Library', time: 'Evening', scene: [
      { n: "Saori had the evening desk now, Mondays and Wednesdays, and the evening desk had a lamp on it with a green glass shade that threw a small warm circle onto the blotter and left the rest of the library to the dark. October had been a bad month. Solar couldn't have explained it to anyone in this building, the shape of it, the way it sat in her chest at night and was still there in the morning, the way the dorm had gone quiet in certain rooms. So she came here, on the evening-desk days, to sit in the chair by the window and be somewhere where the worst thing that could happen was a late fee." },
      { n: "Saori hadn't turned a page of her book in twenty minutes. Solar knew the look by now. Rehearsed. Worn smooth from handling." },
      { n: "Outside the windows it had gone fully dark, and the glass gave the room back to itself, the long empty tables, the stacks going off into shadow, the little green island of the desk with the two of them on it, so that Solar could see Saori twice, once across the desk and once in the black window behind her, smaller and fainter, looking at the same unturned page. The radiator knocked twice and came on. Somewhere in the stacks a book settled against its neighbor with a sound like a sigh. Saori closed hers on her finger and kept her finger in it, as if she might need to go back." },
      { s: 'saori', f: 'sad', t: "Ōmori-san's mother complained. About the meeting. Mr. Ekoda called me to the faculty office and said I'd been disruptive. And unbecoming. He said unbecoming twice, like he'd just learned it." },
      { s: 'saori', f: 'sad', t: "My mother had to come in. Again. She sat in the faculty office in her work clothes with her bag on her knees. And on the train home she said, we could do it again. A new school. Your aunt's in Sendai. January. Nobody there would know you." },
      { s: 'saori', f: 'neutral', t: "She wasn't angry. She was tired. She's been tired since I was thirteen. She said it like it was a present." },
      { s: 'saori', f: 'sad', t: "And I wanted it. That's the worst part. For a whole night I wanted it so much I couldn't sleep. A school where nobody has ever lowered their voice about me. I lay there and wanted it like you'd want water." },
      { choose: [
        { t: "What do you want? Not last night. Now.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "..." },
          { s: 'saori', f: 'neutral', t: "Nobody's ever asked me that. They ask what happened. They ask who started it. Nobody asks what I want." },
          { s: 'saori', f: 'sad', t: "...I don't know. I'm sorry. That's not an answer. I'd like to have one." }
        ] },
        { t: "Sendai's very far.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "Four hours on the shinkansen. I looked it up. Then I looked it up again in case it had changed." }
        ] },
        { t: "You can't go.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "Please don't. Everybody tells me what I can and can't. I thought you'd be the one who didn't." },
          { n: "Solar heard it land, and wished she could reach across the desk and take it back, and couldn't, because it had been the truest thing in her mouth and also the wrong one." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "Have you ever done it? Run. Started over somewhere nobody knew you. You transferred. In April. Nobody knew you here." },
      { n: "The radiator ticked. Solar's hands, in her lap, went cold, the way they did sometimes for no reason she could find, as if someone had opened a window in another room. She had woken up in this city knowing nobody, and nobody knowing her. She didn't know if she'd run here. She didn't know if she'd been pushed, or fallen, or gone looking. She only knew that there were nights she lay awake and felt, very faintly, like someone who'd left a door open behind her somewhere and couldn't remember where the house was." },
      { choose: [
        { t: "I think I might have. I don't remember.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "You don't remember?" },
          { s: 'solar', f: 'sad', t: "Not really. It's a long story. It's mostly blank pages." },
          { s: 'saori', f: 'neutral', t: "...Was it better? Here? Where nobody knew you?" },
          { s: 'solar', f: 'neutral', t: "It was quieter. I don't know if that's the same thing." },
          { n: "Saori looked at her across the green lamp for a long time, the way she looked at a torn page, and didn't ask anything else, and Solar was more grateful for that than for anything anybody had said to her in weeks." }
        ] },
        { t: "Everyone runs from something.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "That's what people say when they don't want to tell you what theirs is. Sorry. I'm not pushing. I noticed, that's all." }
        ] },
        { t: "No. Never.", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "Oh. Okay." },
          { n: "She said it gently, the way you'd let someone keep a book past its due date, and Solar had the uncomfortable sense of having been very kindly not believed." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "I told my mother I'd decide by December. So I'm going to keep coming to the desk until then. Mondays and Wednesdays. Whatever happens." },
      { s: 'saori', f: 'flustered', t: "Will you keep coming? You don't have to. You can say no. I'd just like to know which chair to keep." },
      { choose: [
        { t: "Every Monday. Every Wednesday. Keep the one by the window.", notes: 3, then: [
          { s: 'saori', f: 'happy', t: "I always keep the one by the window. I've kept it since May. I just never said." }
        ] },
        { t: "Whatever you decide, I'll walk you to the gate after.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Thank you. That helps. It helps to know where the end of the day is." }
        ] },
        { t: "Sendai has libraries too.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "...It does. That's the problem. It isn't the libraries." }
        ] }
      ] },
      { n: "They stayed until Ms. Ozawa came out of the back office and turned off the lights in the stacks one row at a time, gently, the way you let someone know a party is ending. Saori turned off the green lamp last. For a second, before her eyes adjusted, the whole library was gone, and there was only the rain-gray window and the shape of Saori beside it, and the sound of her locking the drawer, and then the key sticking the way it always stuck, and her small laugh at it, the way you'd laugh at an old friend." }
    ] },

    { after: '11/11', title: '9: two endings', place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "There was a letter pinned to the board behind the desk. Ms. Ozawa had pinned it there herself, at an angle, with four pins, one at each corner, as though it might otherwise try to escape. It was from the prefectural board of education and it said, in the stiff important language of letters like that, that a story called *The Sister Who Became the Sun* by Hasegawa Saori, Gekkoukan High School, second year, had received an honorable mention and would be printed in the spring anthology." },
      { n: "Saori had not looked directly at it all week. She kept stamping due dates with her back to it, the way you'd stand with your back to a fire." },
      { s: 'saori', f: 'flustered', t: "Please don't read it out loud. I know what it says. I've read it eleven times. I read it once standing on a chair." },
      { choose: [
        { t: "(Read it out loud anyway. Quietly. Just to her.)", notes: 3, then: [
          { n: "Solar read it, quietly, all of it, even the part about the board of education, and when she got to Hasegawa Saori she said it slowly, like it was worth something, which it was, and Saori put her face down on the returns cart and made a sound like a kettle a long way off." }
        ] },
        { t: "Honorable mention. Saori.", notes: 2, then: [
          { s: 'saori', f: 'happy', t: "I know. I know. In print. With my name, where anyone can read it." },
          { s: 'saori', f: 'sad', t: "...Where anyone can read it." }
        ] },
        { t: "Why didn't you tell me?", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "I was going to. I was waiting until it stopped feeling like a mistake somebody would correct." }
        ] }
      ] },
      { n: "She looked at Solar properly, then, for the first time that afternoon, and her face changed, the way it did when she found a torn page." },
      { s: 'saori', f: 'neutral', t: "You look like you haven't slept in a week. Sorry. That's rude. It's true, though." },
      { n: "The dorm had been very quiet for a while now. Solar couldn't have said why the library felt like the only warm room in the city lately, or why she'd started counting the days between Mondays and Wednesdays, only that it did and she had." },
      { choose: [
        { t: "I haven't. Not really.", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "Then sit in your chair. I'll wake you when it's time to close. I won't ask anything. I'm very good at not asking." },
          { n: "She didn't. Solar didn't sleep, but she sat, and the radiator knocked twice and came on, and that was nearly as good." }
        ] },
        { t: "It's been a strange week at home.", notes: 2, then: [
          { s: 'saori', f: 'sad', t: "I'm sorry. You don't have to tell me. I just wanted you to know I noticed. People should know when they've been noticed." }
        ] },
        { t: "I'm fine.", notes: 1, then: [
          { s: 'saori', f: 'neutral', t: "You smiled before you said that. You do that. I told you in May." }
        ] }
      ] },
      { n: "At five, when the room had emptied, she took a folded sheaf of paper out of the back of her gray notebook. Three pages, handwritten. She held them out across the desk with both hands, like a cup of tea that was too full." },
      { s: 'saori', f: 'flustered', t: "It's a new one. It's two girls in a library. It's not us. It's a little bit us. It has two endings, because I couldn't decide, and I've never not been able to decide an ending before." },
      { s: 'saori', f: 'flustered', t: "In the first one they stay friends, and one of them keeps a chair by the window for the other one forever. In the second one, one of them says something. I want you to pick which one I keep. Please don't look at me while you pick. Look at the window." },
      { route: [
        { t: "The second one.", route: 'romance', notes: 3, then: [
          { n: "Solar turned to the last page. The handwriting got smaller toward the end, the way it did when Saori was frightened, and in the middle of the last paragraph one word was crossed out so hard the pencil had nearly gone through." },
          { n: "It said, *I think I have been in love with you since the day you leaned on my desk with your back to the whole library.* It said, *I know that isn't a thing people say in libraries.* It said, *I kept waiting for something to go wrong, and it didn't, and I've stopped waiting.* At the very bottom, smaller still, it said, *You don't have to answer. You can just return it.*" },
          { s: 'saori', f: 'flustered', t: "...You're still reading it. Why are you still reading it? I can see your eyes at the bottom." },
          { n: "Solar took the pencil out of Saori's blazer pocket, and wrote two words under the last line, and folded the pages, and handed them back across the desk. Returned, with a note of its own. *Me too.*" },
          { n: "Saori read it. Folded it. Unfolded it and read it again. Then she put her forehead down on the desk, on the blotter, in the circle of afternoon light, and stayed there, and her ears went scarlet, and she reached out blindly across the desk without lifting her head until she found Solar's hand, and held on." }
        ] },
        { t: "The first one. Keep the chair.", route: 'friend', notes: 3, then: [
          { n: "Solar turned back to the first ending. It was short. One girl keeps a chair by the window for the other, every day, with a book on it, and never says why, and the other girl always comes, and never asks, and the last line said, *Some things are more true for not being said out loud in a library.*" },
          { s: 'saori', f: 'surprised', t: "...You picked the first one." },
          { s: 'solar', f: 'neutral', t: "It's the one I already knew was true. I wanted to see it written down." },
          { s: 'saori', f: 'happy', t: "It's true. It's been true since the umbrella. I just had to write it down to believe it." },
          { n: "She took the other ending, the last page, and without looking at it folded it very small and put it in her own pocket, and patted the pocket once, and that was all, and they didn't talk about it. They didn't need to. Some things, as she'd written, were more true for not being said." }
        ] }
      ] }
    ] },

    { after: '12/9', title: '10: due date', place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "The anthology wasn't due until spring, but the board of education had sent proofs, a thin stapled booklet on gray paper, and Ms. Ozawa had made eight copies on the library photocopier and announced at the committee's last meeting of the year that Hasegawa-san would read her piece aloud before the duty roster for January. She announced it without asking. Solar suspected that was on purpose. Ms. Ozawa did very little that wasn't." },
      { n: "December had come in cold and clear, and the windows were white at the edges with the beginnings of frost, and the radiator had been roaring since lunch. Eight committee members around the long table. Ms. Ozawa at the head. Ōmori halfway down, looking at her nails. And Saori standing at the end with the gray booklet in both hands, and her hands were shaking so badly the pages made a sound." },
      { choose: [
        { t: "(Sit at the end of the table, where she can see you without turning her head.)", notes: 3, then: [
          { n: "Solar took the chair at the very end, opposite her, where Saori could look up from the page and find her without moving anything but her eyes. Saori looked up once, before she started. Found her. Looked back down. The pages stopped making a sound." }
        ] },
        { t: "(Stand at the back by the door, out of the way.)", notes: 2, then: [
          { n: "Solar stood by the door. Saori looked for her, a little anxiously, and found her, and Solar nodded, and that was enough, mostly." }
        ] },
        { t: "(Stay in your chair by the window.)", notes: 1, then: [
          { n: "Solar stayed in her chair by the window, which was where she always was, and was too far, she realized, as soon as Saori looked up and had to turn her whole head to find her." }
        ] }
      ] },
      { n: "Saori read. Not loud. Not quiet, either, not lowered, not that voice. She read it in the voice she used for due dates, level and clear and a little formal, the voice that had gone all the way to the back of the room in September, and it went there again. The sister and the rope and the sky and the people below shading their eyes, and the last line, *so that they could keep looking*, which she didn't rush, and didn't swallow, and didn't apologize for." },
      { n: "Nobody said anything when she finished. Then a first-year at the far end, a small girl with a cardigan buttoned wrong, clapped, alone, and went red, and kept clapping, and then the girl next to her did, and then Ms. Ozawa, and then the table. Ōmori didn't clap. She looked at her hands on the table for a long time. When the meeting was over she was the first to leave, and she left something on the corner of the desk on her way out, without a word, without looking at anyone." },
      { n: "It was a notebook. Gray, faded, the corners soft, a middle-school notebook with a name on the cover in a thirteen-year-old's round careful handwriting." },
      { n: "Saori stood very still and looked at it. She didn't touch it for a whole minute. Then she picked it up and held it, closed, against her chest, the way she'd held the other one in June when it fell off the desk." },
      { s: 'saori', f: 'surprised', t: "...She kept it. All this time. She kept it." },
      { s: 'saori', f: 'neutral', t: "I told my mother no. Last night. I'm staying. I ran once. I'm not running from a sentence again." },
      { choose: [
        { t: "Was it hard? Saying no?", notes: 3, then: [
          { s: 'saori', f: 'neutral', t: "No. That was the strange part. I thought it would be the hardest thing I ever said. It was just true. True things are very easy to say once you know they're true. It's the knowing that takes forever." }
        ] },
        { t: "I'm glad. I'm really glad.", notes: 2, then: [
          { s: 'saori', f: 'happy', t: "So am I. I didn't do it for you. I want you to know that. I did it for me. You just made it easier to find out what for me was." }
        ] },
        { t: "What will you do with the notebook?", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Put it somewhere it belongs." }
        ] }
      ] },
      { n: "She walked to the back of the stacks, where the light from the windows didn't quite reach, and knelt on the carpet, and found the place on the bottom shelf beside a cloth-bound book with a cracked green spine, the one that had waited eleven years for a girl to come asking about a tiger, and slid the old gray notebook in next to it, spine out, between the foxes and the cranes." },
      { s: 'saori', f: 'neutral', t: "A library is where you keep things nobody's borrowed in a long time. In case somebody comes back for them." },
      { ifRoute: 'romance', then: [
        { n: "The committee had gone. Ms. Ozawa was in the back office with the door closed and the radio on low. The light coming in sideways between the shelves was blue and thin and going, and Saori stood up from the carpet and didn't go back to the desk. She stood between the shelves with her back to the literature and her face pink and her hands, for once, not in her sleeves." },
        { s: 'saori', f: 'flustered', t: "I've read about this so many times. I always skipped ahead. I wanted to know how it went before it went." },
        { s: 'saori', f: 'neutral', t: "I'm not skipping ahead this time." },
        { choose: [
          { t: "(Kiss her.)", notes: 3, then: [
            { n: "It smelled of old paper and floor wax and the radiator and her shampoo, which was something with peaches in it. She went very still, the way she always did, and then she didn't. Her hand came up and caught in the front of Solar's blazer and held on, the way it had held the notebook against her chest." },
            { n: "When they broke apart she put her forehead against Solar's shoulder and laughed, small and astonished, into the wool, like a girl reading the last line of a book she'd been afraid to finish and finding it was kind." }
          ] },
          { t: "Then don't.", notes: 3, then: [
            { n: "Saori kissed her. Carefully, the way she handled the old books, like it might come apart in her hands. It didn't. It held. She pulled back half an inch and looked at Solar with enormous eyes." },
            { s: 'saori', f: 'surprised', t: "...Nothing went wrong." },
            { s: 'solar', f: 'happy', t: "Nothing went wrong." }
          ] },
          { t: "(Take her hand first, so she sees it coming.)", notes: 2, then: [
            { n: "Solar took her hand, slowly, and Saori looked down at it and then up, and kissed her, once, quickly, on the corner of the mouth, and then hid her whole face in Solar's shoulder and stayed there and said sorry into the wool, and then, very firmly, not sorry." }
          ] }
        ] }
      ], else: [
        { n: "She stood up and brushed the carpet off her knees and went back to the desk, and took something out of the drawer and slid it across to Solar face down. Her library card, laminated, the corner worn white. On the back, in very small handwriting, there were call numbers. Twenty-six of them." },
        { s: 'saori', f: 'neutral', t: "My favorites. Every quiet book on every shelf that nobody else checks out. If nobody borrows a book for a year, it gets sent to the basement. So somebody has to keep borrowing them." },
        { s: 'saori', f: 'flustered', t: "I'll be here to stamp them. That's the point. I'll be here. I wanted you to have something that says so." },
        { choose: [
          { t: "Not one of them goes to the basement. I promise.", notes: 3, then: [
            { s: 'saori', f: 'happy', t: "And you'll tell me what you think? Every one? Even the sad ones?" },
            { s: 'solar', f: 'neutral', t: "Especially the sad ones." },
            { s: 'saori', f: 'happy', t: "...Then I'll keep the chair. That's my half." }
          ] },
          { t: "Starting with the one about the lighthouse.", notes: 3, then: [
            { s: 'saori', f: 'surprised', t: "How did you know there's one about a lighthouse?" },
            { s: 'solar', f: 'happy', t: "There's always one about a lighthouse, with you." },
            { s: 'saori', f: 'happy', t: "...There's three. Sorry. You've got a lot of reading." }
          ] },
          { t: "Twenty-six is a lot of books.", notes: 2, then: [
            { s: 'saori', f: 'neutral', t: "It's a year. One every two weeks. I did the math. I always do the math." }
          ] }
        ] },
        { n: "She locked the library door at six and the key stuck, and she laughed at it, and didn't cry, and then did, a little, on the steps, holding Solar's arm, for no reason either of them could have named except that it had been a year, and she was still here, and she'd decided to be." }
      ] }
    ] }
  ],
  // After MAX: "you can still hang out" scenes (data for a later engine pass; they play after rank 10).
  afterMax: [
    { place: 'Gekkoukan High · Library', time: 'After School', scene: [
      { n: "Winter had got into the library in the way it did every year, Saori said, through the old window frames over the 900s, so that the radiator roared and the desk was warm and the stacks were cold, and you could walk from one season to the other in about four steps. The chair by the window had a book on it. It always had a book on it now. Saori moved it, every time, with an apologetic little face, as if surprised to find it there." },
      { s: 'saori', f: 'neutral', t: "Someone came in last week asking for you. Not by name, exactly. She asked if a girl with long black hair ever came in here and sat by the window. I said yes. She sat in your chair for an hour and didn't read anything." },
      { s: 'saori', f: 'flustered', t: "I didn't ask who she was. I thought you'd want to be the one to decide what I knew. Sorry. Was that right?" },
      { n: "Solar looked at the chair. She could picture it, someone sitting there in the cold light with her hands in her lap, looking at the door, and she didn't know which of them it had been, and found that it didn't matter which, and that her throat had gone tight anyway." },
      { s: 'solar', f: 'neutral', t: "It was right." },
      { s: 'saori', f: 'neutral', t: "You never talk about before April. I noticed in May. I've been not asking since May. I'm very good at it. But I wondered." },
      { s: 'saori', f: 'flustered', t: "If there isn't one you can tell, I could write you one. A before. A made-up one. You don't have to. I'd just like to give you something that goes in that space, the way you gave me a chair." },
      { choose: [
        { t: "Write me one.", notes: 3, then: [
          { n: "She wrote for twenty minutes at the desk with her arm curled around the page, and then turned the notebook ninety degrees, which for Saori was a very great distance, and let Solar read the first line." },
          { n: "*Before she came here, she lived somewhere with a great deal of weather, and everybody who knew her was a little bit in love with how she stood in it.*" },
          { s: 'saori', f: 'flustered', t: "It's wrong, probably. It's made up. I can change it." },
          { s: 'solar', f: 'neutral', t: "Don't change it." },
          { n: "It was wrong, probably. It was also, in a way Solar couldn't have explained, not wrong at all, and she sat with it in the cold half of the room for a long time and didn't explain it to anyone." }
        ] },
        { t: "There isn't much to tell. Honestly.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "That's alright. A lot of very good books start in the middle." }
        ] },
        { t: "Please don't. Not yet.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "Okay. Then I'll keep the space. That's what I'm best at anyway." },
          { n: "She said it without any hurt in it at all, and moved the book off the chair, and that was all." }
        ] }
      ] },
      { ifRoute: 'romance', then: [
        { n: "When it got dark she turned on the green lamp, and in its small circle of light she put her hand flat on the desk, palm up, without looking, the way you'd leave a door unlocked, and went on reading. Solar put hers in it. Saori turned a page with the other hand. Neither of them said a thing for the rest of the hour." }
      ], else: [
        { n: "When it got dark she turned on the green lamp and slid the returns cart over between them, and they shelved it together, Saori reading every first line under her breath, Solar reading every third one out loud on purpose, badly, until the cart was empty and Saori was laughing too hard to stamp anything." }
      ] }
    ] },
    { place: 'Iwatodai Strip · Bookworms', time: 'After School', scene: [
      { n: "Bookworms was the secondhand shop on the Strip with the bell over the door and the old couple behind the counter, the husband asleep in a chair with a newspaper over his chest and the wife reading with her glasses on the end of her nose, and it smelled of dust and paper and the kerosene heater ticking in the back. Saori came here, she said, the way other people went to the shrine. Solar had come with her because she'd been asked, and because it was cold out, and because she'd stopped needing reasons." },
      { n: "They'd been there an hour. Saori had found a lighthouse book and a book about the history of umbrellas, which she said was a sign, and was standing in the poetry aisle with both of them held against her chest when she went very quiet, and stayed quiet, and Solar turned around." },
      { s: 'saori', f: 'sad', t: "You're a third-year." },
      { s: 'solar', f: 'sad', t: "...I've been a third-year all year." },
      { s: 'saori', f: 'sad', t: "I know. I knew. I just didn't do the math. I always do the math. I didn't do it on purpose. Third-years leave in March. You'll graduate and the chair will just be a chair." },
      { n: "The heater ticked. The old man behind the counter turned a page in his sleep. Solar looked at Saori in the narrow aisle with the books held against her like a shield, and thought about March, and about everything between here and March that she couldn't see the far side of, and didn't know what to say that would be true." },
      { choose: [
        { t: "Keep the chair anyway.", notes: 3, then: [
          { s: 'saori', f: 'surprised', t: "Anyway?" },
          { s: 'solar', f: 'neutral', t: "In case. People come back for things. You told me that." },
          { n: "Saori looked at her for a long moment, the way she looked at a torn page before she decided it could be mended, and nodded, very small, and didn't ask in case of what." }
        ] },
        { t: "March is a long way off.", notes: 2, then: [
          { s: 'saori', f: 'neutral', t: "It isn't, though. I'm sorry. I counted the Mondays. There aren't very many Mondays." }
        ] },
        { t: "You'll be fine without me.", notes: 1, then: [
          { s: 'saori', f: 'sad', t: "I know I'll be fine. That isn't the same thing as wanting to be." }
        ] }
      ] },
      { s: 'saori', f: 'neutral', t: "Wherever you go after. Will you write? Not texts. Letters. With stamps. I'll write back the same day. I'm told I'm very reliable." },
      { n: "Solar said yes. She said it before she'd checked whether it was a thing she could promise, which was not a thing she did, and she felt it go out of her and stay out, in the warm dusty air of the shop, and didn't try to take it back." },
      { ifRoute: 'romance', then: [
        { s: 'saori', f: 'flustered', t: "Good. Then I'm going to buy the umbrella book. For you. So you'll have something to write to me about." },
        { n: "She paid for it with exact change from a little coin purse shaped like a frog, and at the door, under the bell, she stopped and stood on her toes and kissed Solar on the cheek, quickly, while the wife behind the counter very politely turned a page." }
      ], else: [
        { s: 'saori', f: 'happy', t: "Good. Then I'm going to buy the umbrella book. For you. So you'll have something to write to me about." },
        { n: "She paid for it with exact change from a little coin purse shaped like a frog, and at the door, under the bell, she tucked her arm through Solar's, firmly, the way you'd hold on to someone on ice, and kept it there all the way down the Strip." }
      ] }
    ] }
  ],
  // Christmas Eve on the romance route at MAX (12/24, snow).
  christmas: { place: 'Iwatodai Strip · Bookworms', time: 'Evening', scene: [
    { music: 'tender' },
    { n: "The old couple at Bookworms closed early on Christmas Eve, the wife said, because her husband liked to be asleep by eight on holidays and asleep in his own bed, not behind the counter. But she left the light on. She left the heater on. She set the key on the counter beside a plate with two small Christmas cakes on it, strawberries on top, and said lock up when you're done, girls, and went upstairs, and her husband followed her, waving, half asleep already." },
    { n: "So they had it to themselves. The whole small shop, the narrow aisles going back into the warm dark, old paper and dust and the kerosene heater ticking, the bell over the door that had rung once when Saori shut it and then gone quiet. Outside the front window it was snowing on the Strip, big slow flakes coming down through the shop lights and the paper lanterns somebody had strung along the street, settling on the awnings, on the bicycles, on the shoulders of the last few people hurrying home." },
    { s: 'saori', f: 'flustered', t: "I asked her if we could. I've never asked anyone for anything like that. She said she'd been waiting all year for one of us to ask." },
    { n: "They sat at the little table at the back by the art books. Saori had a parcel in brown paper on the table in front of her and kept laying her hand flat on top of it as if to keep it warm." },
    { s: 'saori', f: 'neutral', t: "I want to give you yours first, before I lose my nerve. I have very little nerve. I've been using all of it this month." },
    { n: "It was a notebook. Gray, plain, cloth-covered, the same kind as hers, and on the first page, in her small round hand, she'd written only a date, today's, and under it nothing at all." },
    { s: 'saori', f: 'flustered', t: "It's for your before. Or your after. Whichever you find first. I didn't write anything in it. I wanted to, very badly. But it's yours. Somebody else's words don't get to go first in it." },
    { choose: [
      { t: "(Give her an umbrella. A big one. For two.)", notes: 3, then: [
        { n: "It was enormous. Navy blue, with a wooden handle, and when Saori put it up in the narrow aisle it filled the aisle from shelf to shelf and she had to duck under the art books." },
        { s: 'saori', f: 'happy', t: "It fits two people. It fits four people. Solar, it's bad luck to open an umbrella indoors." },
        { s: 'solar', f: 'happy', t: "Nothing's going to go wrong." },
        { s: 'saori', f: 'happy', t: "...No. I don't think it is." }
      ] },
      { t: "(Give her a fountain pen. Dark green, like the desk lamp.)", notes: 3, then: [
        { n: "Saori opened the narrow box and went very still, and then lifted the pen out and held it up to the shop light, and turned it, and the green caught the light the way the evening-desk lamp did." },
        { s: 'saori', f: 'surprised', t: "This is far too nice. I'll be frightened to use it. I'll use it every single day." },
        { s: 'saori', f: 'flustered', t: "The first thing I write with it is going to be your name. On something. I don't know what yet. Something that lasts." }
      ] },
      { t: "(Give her a bookmark. A pressed cherry blossom from April.)", notes: 2, then: [
        { s: 'saori', f: 'surprised', t: "From April? You kept it since April?" },
        { s: 'solar', f: 'neutral', t: "It was in the folktale book. I found it when I returned it." },
        { s: 'saori', f: 'flustered', t: "...I put it there. I'd forgotten. I put it there for whoever came next." }
      ] }
    ] },
    { s: 'saori', f: 'neutral', t: "I wrote something. For tonight. It's one page. I'd like to read it to you. Out loud. In my own voice. I've been practicing my own voice." },
    { choose: [
      { t: "Read it to me.", notes: 3, then: [
        { n: "She read it. Her voice was low and steady and only shook once, on a word in the middle that Solar didn't catch and didn't need to. It was about a girl at a desk who spent a whole year keeping a chair for someone without knowing who, and how one day somebody sat in it, and how the library didn't get any less quiet afterward, only less empty." },
        { n: "She folded it when she'd finished, and didn't look up, and her ears were scarlet, and when Solar laid a hand over hers on the table Saori turned her palm up underneath it and held on." }
      ] },
      { t: "Don't read it. Tell me.", notes: 3, then: [
        { s: 'saori', f: 'surprised', t: "...Tell you?" },
        { s: 'solar', f: 'neutral', t: "Like it's yours. Without the page." },
        { n: "So Saori put the page face down on the table and told it, looking at Solar across the little table instead of at the paper, and it came out different, shorter and plainer and much braver, and she stopped twice and started again, and didn't apologize either time." }
      ] },
      { t: "Can I keep it instead? And read it later?", notes: 2, then: [
        { s: 'saori', f: 'neutral', t: "...Okay. Yes. But not too much later. It's a very short page. It'll get lonely." }
      ] }
    ] },
    { s: 'saori', f: 'sad', t: "This year I thought I was writing to nobody. For so long. Sitting at the desk, waiting for someone to come, and nobody coming. And then somebody asked for a story about a tiger." },
    { s: 'saori', f: 'flustered', t: "Wherever you are next year, I'm going to keep a chair. By a window. With a book on it. Wherever I live, for the rest of my life, there'll be a chair that's yours. That's a promise. I don't make many. I'm told I'm very good at keeping them." },
    { n: "Solar thought about next year, which she couldn't see, and about the chair, which she could, very clearly, in a hundred rooms she'd never be in, waiting, with a book on it. She didn't know where she'd be. She knew, with a certainty that sat under her ribs like something warm she'd swallowed, that the chair would be there anyway. It was the first thing about the future she'd been sure of all year." },
    { cg: 'romance-saori-christmas' },
    { n: "Saori kissed her at the back of Bookworms, between the art books and the window, with the snow coming down outside on the paper lanterns and the heater ticking and the two little cakes forgotten on the counter. Her hand caught in the front of Solar's coat and held on. When they broke apart she rested her forehead against Solar's and laughed, small and astonished, like a girl reading the last line of a book she'd been afraid to finish and finding out it was kind." },
    { s: 'saori', f: 'happy', t: "Merry Christmas. Nothing went wrong." },
    { s: 'solar', f: 'happy', t: "Merry Christmas, Saori. Nothing went wrong." },
    { cg: null },
    { n: "They ate the cakes. They locked up, and the key didn't stick, which Saori said was a Christmas miracle, and outside she put up the enormous navy umbrella, or her own small blue one, it didn't matter which, and held it over both of them, and they walked down the Strip in the snow under it, slowly, listening to the snow land on it from underneath, which sounded exactly like being inside something." }
  ] }
});
