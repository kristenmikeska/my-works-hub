/* Saori Hasegawa · Hermit. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Cast-only speaker: classmate (no portrait). Ranks 4-10 are stubs. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'saori', name: 'Saori Hasegawa', short: 'Saori', arcana: 'Hermit', numeral: 'IX', from: 'Persona 3 Portable',
  kind: 'native',
  romance: 'side',
  starts: '4/28',
  home: { area: 'Gekkoukan High', spot: 'Library', slot: 'after', days: [1, 3, 5],
          hint: 'After school on Mondays, Wednesdays and Fridays, at the library desk.' },
  approach: "At the library desk, a second-year with a committee armband pinned on crooked is stamping due dates with great care, and lowering her eyes every time someone walks past and lowers their voice.",
  cast: { classmate: 'Classmate' },
  invite: {
    ask: [
      "Good afternoon. The returns cart is very full and I'm very slow. Only if you're free.",
      "I'm sorry to message out of nowhere. The library is quiet today. That's all. That's the whole message.",
      "Would you like to sit in the library with me for a while? We don't have to talk. I'm good at not talking.",
      "Someone donated a box of old paperbacks. I haven't opened it yet. I thought you might want to be there when I do.",
      "The window by the history shelves is open and you can hear the baseball team. I don't know why I'm telling you. Sorry."
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
          { s: 'solar', f: 'neutral', t: "Then save it for someone who likes them." },
          { n: "The girl's mouth stayed open a second longer than it needed to, and then she laughed, a little uncertainly, and went to find someone who did." }
        ] },
        { t: "Did you see her do it?", notes: 2, then: [
          { s: 'classmate', t: "Well, no. But everybody—" },
          { s: 'solar', f: 'neutral', t: "Then you don't know either." }
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

    { todo: 'Rank 4 (to be written).' },
    { todo: 'Rank 5 (to be written).' },
    { todo: 'Rank 6 (to be written).' },
    { todo: 'Rank 7 (to be written).' },
    { todo: 'Rank 8 (to be written).' },
    { todo: 'Rank 9 (to be written).' },
    { todo: 'Rank 10 (to be written).' }
  ]
});
