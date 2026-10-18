/* Aigis · Aeon. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js, scene lines in scene.js.
   Friendship link (no romance). She joins at Yakushima (story, ≈7/21–25); the link starts 7/27.
   She's a small uncanny lens: she seems to believe the world made a place for Solar before Solar arrived. It is never explained.
   P3 background stays offstage: 10/4 is felt in rank 6, 11/4 in rank 8, and her late-year damage only as a newer hand in rank 9.
   afterMax is data for a later engine pass. */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'aigis', name: 'Aigis', short: 'Aigis', arcana: 'Aeon', numeral: '', from: 'Persona 3',
  kind: 'sees',
  romance: null,
  starts: '7/27',
  home: { area: 'Iwatodai Dorm', spot: 'Rooftop', slot: 'evening', days: [0, 2, 4, 6],
          hint: 'Evenings on Sunday, Tuesday, Thursday and Saturday, on the dorm roof.' },
  approach: "Aigis is standing at the rail of the dorm roof in the last of the light, perfectly still, facing nothing in particular. She turns her head the moment the stairwell door opens, as if she had known exactly when it would.",
  cast: { kid: 'Little Girl' },
  invite: {
    ask: ["I am on the roof. The sky is performing well this evening. Will you come?", "Solar-san. I have located a convenience store that sells eleven kinds of rice ball. I require a second opinion.", "Are you available? I would like to practice something called hanging out. I have read the definition.", "There is a cat on the wall behind the dorm. I do not know what to do about it. Please advise.", "My maintenance cycle finished early. I would like to spend the remaining time with you, if that is acceptable.", "The pier is quiet tonight. I have checked."],
    ok: ["Understood. I will wait at the front door.", "Affirmative. I will be there in four minutes.", "Thank you. I am pleased. I believe that is the word."],
    no: ["Understood. I will remain on standby.", "That is all right. I will ask again at a more efficient time.", "Affirmative. Please rest. You have been awake for seventeen hours."]
  },
  hangouts: [
    [
      { n: "The roof at night was cold enough now that the concrete held none of the day, and Aigis was at the rail with her head tipped back, her lips moving very slightly, the way Solar's moved when she didn't know they were." },
      { s: 'aigis', f: 'neutral', t: "Two hundred and twelve." },
      { s: 'solar', f: 'surprised', t: "Two hundred and twelve what?" },
      { s: 'aigis', f: 'neutral', t: "Stars visible from this position, excluding aircraft. There are also four ships in the bay and nine lit windows on the third floor of the building opposite." },
      { n: "Solar had counted the ships on the way up. She had gotten four. She had not told anyone she did that, ever, and she stood there feeling caught at something, like a girl found doing a dance alone in her room." },
      { choose: [
        { t: "I count things too.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "Is that so?" },
          { s: 'aigis', f: 'happy', t: "Then we may compare totals. I will start with the stairwell. Fourteen steps between the third floor and the roof." },
          { s: 'solar', f: 'neutral', t: "Fifteen. You missed the little one at the top." },
          { n: "Aigis went and looked. She came back with an expression of deep and silent respect." }
        ] },
        { t: "Why do you count them?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "So that if one of them changes, I will know." },
          { n: "It was such a good answer that Solar didn't say anything for a while, and then, without meaning to, started counting the stars too." }
        ] },
        { t: "You're missing one. There, by the water tower.", notes: 2, then: [
          { s: 'aigis', f: 'serious', t: "That is a satellite." },
          { s: 'aigis', f: 'neutral', t: "...But I will allow it. Two hundred and thirteen." }
        ] }
      ] },
      { n: "They stood there until the ninth window on the third floor of the building opposite went dark, and Aigis said eight, quietly, as if she were sorry about it, and they went in." }
    ],
    [
      { n: "Solar found her own laundry already folded on the dryer in the laundry room, which was alarming, because she had left it in the machine, damp and tangled, twenty minutes ago." },
      { n: "It wasn't just folded. It had been folded to a standard, every shirt the same width, every sock paired and turned into itself, the stack squared off at the edges with a precision usually reserved for bricks. On top, folded into a perfect small rectangle, was the black hoodie she slept in." },
      { s: 'aigis', f: 'neutral', t: "I was passing. Your laundry was in a state of disorder." },
      { choose: [
        { t: "Thank you. Will you show me how?", notes: 3, then: [
          { s: 'aigis', f: 'happy', t: "Affirmative." },
          { n: "She showed her. It took forty minutes and involved a great deal of measuring by eye and the word *again*, and at the end Solar could fold a T-shirt to a width Aigis described as acceptable, which Aigis said in a tone that suggested it was the highest mark she gave." }
        ] },
        { t: "You didn't have to do that.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I know. Nobody ordered it." },
          { s: 'aigis', f: 'neutral', t: "...I wanted to see whether I would do it anyway. I did." }
        ] },
        { t: "Please don't touch my underwear.", notes: 1, then: [
          { s: 'aigis', f: 'flustered', t: "...Understood. I have logged it." },
          { n: "She had, however, already folded it. Into thirds. It was the neatest underwear had ever been, and Solar would never be able to look at it again." }
        ] }
      ] },
      { n: "When she carried the stack upstairs, the hoodie was still on top. She hadn't noticed Aigis put it there. It was where she would have put it herself, which she was beginning to find was true of most things Aigis did." }
    ],
    [
      { n: "The vending machine by the dorm's front steps had nine kinds of drink in it, and Aigis had been standing in front of it for a while when Solar came out, with a coin held between two fingers like a chess piece." },
      { s: 'aigis', f: 'serious', t: "I cannot drink any of these." },
      { s: 'solar', f: 'neutral', t: "Then why are you buying one?" },
      { s: 'aigis', f: 'neutral', t: "I would like to know what it is like to choose something for no reason." },
      { choose: [
        { t: "Pick the one with the best can.", notes: 3, then: [
          { n: "Aigis studied the cans with the seriousness of a jeweler, and in the end chose a peach soda with a drawing of a cat on it, wearing sunglasses. She held it in both hands. She looked at it for a long time." },
          { s: 'aigis', f: 'happy', t: "I like the cat." },
          { s: 'aigis', f: 'surprised', t: "...I like the cat. I have not liked something before without a reason. This is very inefficient." }
        ] },
        { t: "Close your eyes and press anything.", notes: 2, then: [
          { n: "She closed her eyes. She pressed a button. A can of corn soup fell into the tray, hot, and she opened her eyes and looked at it with an expression of mild betrayal." },
          { s: 'aigis', f: 'neutral', t: "I did not choose this. Chance chose it. I would like to try again." }
        ] },
        { t: "Buy me one and watch me drink it.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "That is a sound plan. I will observe." },
          { n: "She observed. It was the most attentively anyone had ever watched Solar drink a canned coffee, and she got about halfway down it before she started laughing and couldn't stop." }
        ] }
      ] },
      { n: "Later Solar saw the can on the windowsill of Aigis's room on the third floor, unopened, turned so the drawing faced out. It stayed there for weeks. Nobody asked about it, and it never got moved." }
    ]
  ],
  ranks: [
    { after: '7/27', title: '1: priority', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { n: "Aigis had been at the dorm since Yakushima, and in all that time she had not, as far as anybody could tell, sat down. She stood in the lounge while the others sat in the lounge. She stood in the kitchen doorway at dinner, not eating, with her hands folded in front of her, watching everyone chew with polite and total interest, like a guest at a ceremony from a religion she had read about. Junpei had started eating faster. Yukari had started eating slower, to make a point to nobody in particular." },
      { n: "Mitsuru had introduced her, on the ferry home, as an anti-Shadow weapon developed by the Kirijo Group, in exactly the voice you'd use for a cousin who was visiting for the summer. Nobody had known what to say to that. Aigis had said, helpfully, that she weighed a great deal and did not require a bed." },
      { n: "Solar found her on the roof at sunset. It was the hour when the heat finally let go of the day and the whole bay went the color of the inside of a peach, and Aigis was at the rail with her back very straight and the wind moving her hair, which was blonde and cut as neat as if someone had used a ruler, which, Solar supposed, someone might have." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. Good evening. Sunset is at eighteen fifty-one. You are four minutes early." },
      { choose: [
        { t: "Were you waiting for me?", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Affirmative." },
          { s: 'aigis', f: 'neutral', t: "I did not know whether you would come. I waited anyway. Is that strange?" },
          { n: "She asked it the way you'd ask somebody to check a sum, without embarrassment, genuinely curious about the answer, and Solar found she didn't know what it was." }
        ] },
        { t: "How long have you been up here?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Since sixteen hundred. The sightlines are optimal." },
          { s: 'solar', f: 'neutral', t: "Sightlines to what?" },
          { s: 'aigis', f: 'neutral', t: "Everything." }
        ] },
        { t: "Do you ever sit down?", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "I do not require it." },
          { s: 'aigis', f: 'surprised', t: "...Is it customary? Should I be sitting down?" }
        ] }
      ] },
      { register: 'aigis' },
      { n: "Solar came and stood at the rail beside her. Up close Aigis made a sound, very faint, under the wind, a hum like a refrigerator in another room, and when she turned her head the blue of her eyes refocused with a small soft click, the way a camera does." },
      { s: 'solar', f: 'neutral', t: "On the beach. You said something to me." },
      { s: 'aigis', f: 'neutral', t: "I said, I have been looking for someone. I believe it is you. I do not know why I believe it." },
      { n: "Word for word, in the same voice, as if she had pressed play on it. Solar had heard it once on a beach with sand in her shoes and Junpei yelling somewhere behind them, and it had gone into her then like cold water into a cut, and it went into her again now, exactly as cold." },
      { s: 'aigis', f: 'neutral', t: "I have reviewed my logs since. The belief has not changed. The reason has not appeared." },
      { n: "It was a strange thing to be told, for a girl who didn't know who she was, that she was somebody's answer. She didn't know what the question had been. Neither, apparently, did Aigis, and they stood there side by side not knowing it together, while the sun went down into the bay a little at a time." },
      { s: 'aigis', f: 'neutral', t: "Mitsuru-san told me your room was already prepared when you arrived. Sheets. A lamp. A towel folded on the end of the bed. Nobody had requested it." },
      { s: 'aigis', f: 'neutral', t: "She was troubled by this. I am not troubled by it." },
      { s: 'solar', f: 'neutral', t: "Why not?" },
      { s: 'aigis', f: 'neutral', t: "Because it was correct." },
      { s: 'solar', f: 'neutral', t: "Correct how?" },
      { s: 'aigis', f: 'neutral', t: "I do not know." },
      { choose: [
        { t: "Okay. Then we don't know together.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "...Together." },
          { s: 'aigis', f: 'neutral', t: "Is that permitted?" },
          { s: 'solar', f: 'neutral', t: "It is now." },
          { s: 'aigis', f: 'happy', t: "Affirmative." }
        ] },
        { t: "That's the creepiest thing anyone has said to me this year.", notes: 2, then: [
          { s: 'aigis', f: 'flustered', t: "I apologize. I will adjust my phrasing." },
          { s: 'aigis', f: 'neutral', t: "...You have only been here since April. The sample size is small." },
          { n: "Which was, Solar had to admit, a fair point, and also a joke, possibly the first one Aigis had ever made, and Aigis didn't seem to know it." }
        ] },
        { t: "Maybe your programming's wrong.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "That is possible. I have run diagnostics forty-one times." },
          { s: 'aigis', f: 'sad', t: "I do not want it to be wrong. I do not know why I want that either." }
        ] }
      ] },
      { n: "Aigis lifted one hand and set it on the rail, and her sleeve rode back, and at the wrist there was a seam. Not a scar. A joint, smooth and pale and exact, where one piece of her met the next, like the joints of a very good doll." },
      { n: "Solar looked at it a beat too long. She had seen joints like that before. Not on a doll. On a woman made of light, rising up behind her out of a green floor, in pink and gold, with a veil over her face and a little sun where her eyes should be. Smooth seams at the wrists where the silk fell away." },
      { n: "She didn't say anything. It was a coincidence. She was getting very good at coincidences." },
      { s: 'aigis', f: 'neutral', t: "May I ask something? It is not an order. Mitsuru-san has said I am not to give you orders. I am asking." },
      { s: 'aigis', f: 'neutral', t: "May I remain within twenty meters of you?" },
      { choose: [
        { t: "Make it fifty. I need to shower sometime.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Fifty. Affirmative." },
          { n: "A pause, of about the length it takes a sentence to arrive somewhere and be unpacked." },
          { s: 'aigis', f: 'surprised', t: "...That was a joke. I detected it late. I will improve." }
        ] },
        { t: "Why?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "So that if something happens, I will already be there." },
          { s: 'aigis', f: 'neutral', t: "I would like to already be there. For once." },
          { n: "She didn't explain the *for once*. Solar didn't think she knew she'd said it." }
        ] },
        { t: "No.", notes: 1, then: [
          { s: 'aigis', f: 'sad', t: "...Understood." },
          { n: "Her face didn't change at all, and Solar felt it anyway, something small closing, like a book left on a train seat, and wished she'd said anything else." }
        ] }
      ] },
      { n: "The sun touched the water and went under, all at once, the way it does when you've been watching it, and the bay went gray and then blue, and the lights came on along the far shore." },
      { s: 'aigis', f: 'neutral', t: "Eighteen fifty-one. It was on time." },
      { s: 'solar', f: 'neutral', t: "Do you like sunsets?" },
      { s: 'aigis', f: 'neutral', t: "I do not know what I like yet. I would like to find out. Will you tell me if I am doing it correctly?" },
      { s: 'solar', f: 'neutral', t: "Nobody does it correctly." },
      { s: 'aigis', f: 'surprised', t: "Is that so?" },
      { n: "She looked genuinely relieved. Solar went down to bed and lay there in the room nobody had asked for, with the towel that had been folded at the end of the bed long since used and washed and folded again by her own hands, and above her, on the roof, she was almost sure, somebody stood very still at a rail and didn't sit down." },
      { n: "Later she counted windows from the street and worked out where on the roof Aigis had been standing. It was directly above her room. She found she didn't mind that as much as she probably should have." }
    ] },

    { after: '8/5', title: '2: dead weight', place: 'Port Island · Pier', time: 'Evening', scene: [
      { n: "The pier at the end of the day was the only place in the city with a breeze, so everybody was on it, families and couples and old men with fishing rods they weren't paying attention to, and the boards were still warm under her sandals, and the whole bay smelled of salt and diesel and somebody's grilled squid on a stick." },
      { n: "Aigis walked half a step behind her and slightly to the left, which Solar had worked out by now was where you walked if you were guarding somebody, and which was also, she'd noticed in Tartarus, exactly where she herself walked, without thinking, behind whoever was in front. It was like being followed by her own habit." },
      { n: "At the end of the pier Aigis stopped and looked down at the water for a long time. It was green and slow and slapped against the pilings with a hollow sound, and a plastic bottle bobbed in it, going nowhere." },
      { s: 'aigis', f: 'neutral', t: "On Yakushima, everybody swam except me." },
      { s: 'aigis', f: 'neutral', t: "My density is approximately three point four times that of water. I would sink. I stood in the shallows and observed Junpei-san drowning. He said he was doing the butterfly." },
      { choose: [
        { t: "I'd sink too, I think.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "Your density is within the normal human range." },
          { s: 'solar', f: 'neutral', t: "I'd still sink." },
          { n: "She didn't know how she knew. She looked at the green water and her body simply informed her, the way it informed her about stairs in the dark, flat and absolute. Deep water was not a place she went. Somebody, somewhere, had always been the one to go in after things." },
          { s: 'aigis', f: 'neutral', t: "...Then we are both dead weight." },
          { s: 'aigis', f: 'happy', t: "I find that I like this." }
        ] },
        { t: "Did you want to swim?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I did not have a want about it. I noted that everyone looked happy." },
          { s: 'aigis', f: 'neutral', t: "...Perhaps that was a want. I am not yet able to tell them apart from observations." }
        ] },
        { t: "He was not doing the butterfly.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "No. I looked it up afterward. He was not doing any recognized stroke." },
          { s: 'aigis', f: 'serious', t: "I did not tell him. I believed it would hurt him. I do not know when I learned to do that." }
        ] }
      ] },
      { n: "They leaned on the rail. Behind them a little boy of maybe four was crying about something, an ice cream or the end of the day or the general injustice of being four, and his father picked him up and swung him up onto his shoulders in one easy movement, and the crying stopped as if somebody had turned a tap." },
      { n: "Aigis turned her whole head to watch them go up the pier, the boy's hands in the father's hair, the father holding both his ankles." },
      { s: 'aigis', f: 'neutral', t: "He is carrying a person who is able to walk." },
      { s: 'aigis', f: 'neutral', t: "Why?" },
      { choose: [
        { t: "Because the kid's tired. Or because he likes it. Probably both.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Both." },
          { s: 'aigis', f: 'serious', t: "I would like to understand which part is which." },
          { s: 'solar', f: 'neutral', t: "I don't think anybody knows that." },
          { s: 'aigis', f: 'surprised', t: "...Is that so?" }
        ] },
        { t: "So the kid can see over everyone.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "That is logical. The sightlines are improved." },
          { n: "She sounded satisfied, and then, a moment later, as the boy laughed at something up there that nobody below could see, slightly less so, as if the answer had been correct and had still left something out." }
        ] },
        { t: "Because that's what dads do.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "Did yours?" },
          { n: "Solar opened her mouth and there was nothing in it. Not a face, not a pair of shoulders, not a single thing. Aigis watched the nothing happen and, to her credit, did not ask again." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "Solar-san. I could carry you." },
      { s: 'solar', f: 'surprised', t: "What?" },
      { s: 'aigis', f: 'neutral', t: "My maximum load is considerably more than you weigh. I would like to understand what he understands. It is research." },
      { choose: [
        { t: "(Let her. Just to the end of the pier.)", notes: 3, then: [
          { n: "It was the stupidest thing she had done all summer, and that was including Yakushima. Aigis crouched, and Solar climbed onto her back, and Aigis stood up as if Solar were a coat, and walked the length of the pier with her, past the fishermen and the couples and the squid stand, at a steady regulation pace, while people stared and a teenage girl took a photo with her phone." },
          { n: "From up there the bay looked bigger. Solar could see over everybody. Aigis's shoulders were hard and cool under her hands and hummed faintly, and Solar held on and laughed until her ribs hurt, into the back of Aigis's neat ruler-cut hair." },
          { s: 'aigis', f: 'happy', t: "I understand now. It is not because you are tired." }
        ] },
        { t: "I can walk.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I know. That is the point of the research." },
          { s: 'aigis', f: 'sad', t: "...But I respect your decision. I will find another subject." },
          { n: "She sounded so faintly disappointed that Solar almost changed her mind, and was annoyed with herself all the way home for not doing it." }
        ] },
        { t: "Carry Junpei instead. He'd love it.", notes: 1, then: [
          { s: 'aigis', f: 'serious', t: "Junpei-san would talk the whole time." },
          { n: "It was not a no. Solar filed it away for later, for the good of everyone." }
        ] }
      ] },
      { n: "On the monorail home Aigis stood, of course, holding no strap, perfectly balanced, and looked out at the bay going dark, and after a while she said, without turning around, that she had recorded the walk on the pier and would like to keep the file, if that was acceptable." },
      { n: "Solar said it was acceptable. She didn't ask what a file of it would look like. She had the strange feeling that it would look a lot like a memory, and that Aigis had more of hers than she did." }
    ] },

    { after: '8/18', title: '3: butterfly', place: 'Naganaki Shrine', time: 'Evening', scene: [
      { n: "The cicadas at Naganaki had reached the stage of August where they no longer sounded like insects but like a single huge machine running somewhere under the trees, and the shrine grounds smelled of hot cedar and dust and the sweet rot of fallen persimmons nobody had swept up. The little playground by the steps was full of children making the most of the light." },
      { n: "Aigis had stopped moving forty minutes ago." },
      { n: "She was standing by the stone basin with one hand held out at shoulder height, palm up, as still as the lanterns, and on the tips of her fingers sat a butterfly. A big black swallowtail, its wings edged with blue that looked painted on, opening and closing very slowly, as if it were breathing through them." },
      { s: 'aigis', f: 'neutral', t: "Please do not move suddenly. It landed. I did not ask it to." },
      { choose: [
        { t: "(Sit on the steps and wait with her.)", notes: 3, then: [
          { n: "Solar sat on the warm stone step and waited. It was easy, in the end. The cicadas did the talking. The butterfly opened and closed, and Aigis held perfectly still, and Solar watched the two of them the way you watch somebody else's candle in a power cut, quietly, so as not to be the one who breathes on it." }
        ] },
        { t: "You know you can just move. It'll fly away.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I know. That is why I am not moving." },
          { n: "It was such a simple answer, and so obviously true, that Solar sat down on the steps without arguing." }
        ] },
        { t: "Forty minutes? Your arm must be killing you.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "My arm does not experience fatigue." },
          { s: 'aigis', f: 'neutral', t: "...You are thinking of your own arm. That is kind. Please sit down." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "The adult lifespan of this species is approximately two weeks." },
      { s: 'aigis', f: 'neutral', t: "It has been sitting on my hand for forty-three minutes. That is a significant percentage of its life." },
      { s: 'aigis', f: 'serious', t: "Why does it not hurry?" },
      { choose: [
        { t: "Maybe it isn't counting.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "..." },
          { n: "Aigis looked at the butterfly for a long time, with her eyes making their small soft clicks, as if the idea had to be loaded from somewhere very far away." },
          { s: 'aigis', f: 'neutral', t: "I am always counting." },
          { s: 'solar', f: 'neutral', t: "So am I." },
          { s: 'aigis', f: 'neutral', t: "Then perhaps neither of us should be the one to answer." }
        ] },
        { t: "Your hand's warm. That's worth stopping for.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "My hand is the temperature of the air. I have checked." },
          { s: 'aigis', f: 'sad', t: "...Then it chose me for no reason. I do not know what to do with that." }
        ] },
        { t: "It doesn't know it's only got two weeks.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "That seems unfair to it." },
          { s: 'aigis', f: 'neutral', t: "Or fair. I cannot decide. I am not equipped to decide what is fair." }
        ] }
      ] },
      { n: "A little girl came over from the playground, maybe five, in a sunhat with an elastic under the chin, and stood in front of Aigis with her hands behind her back and her stomach stuck out, the way small children stand when they are about to ask something enormous." },
      { s: 'kid', t: "Onee-chan. Are you a robot?" },
      { s: 'aigis', f: 'neutral', t: "Affirmative." },
      { s: 'kid', t: "Cool." },
      { n: "She accepted this completely and moved on to the more important matter, which was the butterfly. She held out her own hand, small and sticky, beside Aigis's, palm up, and waited." },
      { n: "Aigis looked at the little hand. Then at the butterfly. Then at Solar, and for the first time since Yakushima, she looked like a person who didn't know what to do." },
      { s: 'aigis', f: 'flustered', t: "Solar-san. If I move my hand toward hers, it may leave. If I do not, she will be disappointed. I cannot do both." },
      { choose: [
        { t: "Don't do anything. Let the butterfly choose.", notes: 3, then: [
          { n: "Aigis didn't do anything. For a long moment nobody did anything, a robot and a five-year-old with their hands out side by side, and then the swallowtail opened its wings all the way, as if it had been thinking about it the whole time, and lifted, and went three hand-widths to the left and settled on the sticky little palm like it had always meant to." },
          { n: "The girl did not breathe. Aigis did not need to." },
          { s: 'aigis', f: 'happy', t: "...It chose." }
        ] },
        { t: "Move slowly. It might stay.", notes: 2, then: [
          { n: "Aigis moved her hand toward the girl's at a speed that could only be measured by instruments, and the butterfly rode it most of the way, and then, a few centimeters short, lifted off and went up into the cedar branches, and the girl watched it go with her whole face and then shrugged and ran back to the swings." },
          { s: 'aigis', f: 'sad', t: "I was too slow. Or too fast. I do not know which." }
        ] },
        { t: "She'll get over it.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "That is not the variable I am trying to protect." },
          { n: "She didn't move her hand, and the girl got bored and left, and the butterfly stayed, and Aigis looked, somehow, as if she had lost anyway." }
        ] }
      ] },
      { n: "The light went orange and then went. The children were called home one by one by name from the bottom of the steps, and the cicadas stopped as suddenly as if someone had found the switch." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. I was made to last a very long time." },
      { s: 'aigis', f: 'neutral', t: "Today, for forty-three minutes, I would have traded some of it." },
      { n: "She said it plainly, as a finding, the way you'd read out a temperature. Then she lowered her hand at last, and flexed the fingers that didn't get tired, and they walked down the steps together into the blue evening, and neither of them said anything else, and Solar thought about two weeks the whole way home." }
    ] },

    { after: '8/31', title: '4: standby', place: 'Iwatodai Dorm · Lounge', time: 'Night', scene: [
      { n: "Solar woke at two for no reason, the way she sometimes did, with her heart already going as if it had heard something she hadn't, and lay there in the dark listening to the dorm. The fridge. A pipe. Junpei snoring through a wall like someone sawing very slowly through a log. Nothing else." },
      { n: "She went down for water. The lounge was dark except for the streetlight coming through the front windows in long pale bars, and halfway across it she nearly walked into somebody standing in the middle of the floor, and stopped so hard her heel skidded on the boards." },
      { n: "It was Aigis. She was standing upright beside the couch with her hands folded in front of her and her eyes open, and the eyes were dark. Not shut. Dark. The blue had gone out of them like a television after the power's cut, and she wasn't humming." },
      { n: "For one long second Solar's whole body did the math it had done in the alley and the tower and every room she'd ever walked into. Then the blue came back, slowly, from the center outward, like a lamp warming, and the hum started again, very soft." },
      { s: 'aigis', f: 'surprised', t: "Solar-san. I was in standby. I apologize if I startled you." },
      { choose: [
        { t: "You didn't startle me. You terrified me.", notes: 2, then: [
          { s: 'aigis', f: 'flustered', t: "I will find a less central location for standby." },
          { s: 'aigis', f: 'neutral', t: "...Junpei-san said the same thing on Tuesday. He used a word I have not been able to locate in a dictionary." }
        ] },
        { t: "Is this where you sleep?", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "I do not sleep. I enter standby. My room has the maintenance equipment. Here, I can hear the front door and the stairs." },
          { s: 'aigis', f: 'neutral', t: "And your floor." },
          { n: "She said it without any weight at all, as if it were simply one of the three things you could hear from the lounge." }
        ] },
        { t: "(Get your water first. Then deal with this.)", notes: 1, then: [
          { n: "She got her water first. Her hand shook a little on the glass. When she turned around Aigis was exactly where she'd been, watching her drink, with the polite interest she brought to everything that went into anybody's mouth." }
        ] }
      ] },
      { n: "On the door to the hall, hanging from a hook in a dry-cleaning bag, was a Gekkoukan uniform. Mitsuru had had it made. It was the girls' winter uniform, a little long in the sleeves, and somebody, Yukari, had pinned a red ribbon to the collar through the plastic." },
      { s: 'aigis', f: 'neutral', t: "It is called a uniform. Everyone wears the same thing." },
      { s: 'aigis', f: 'happy', t: "I find this reassuring." },
      { n: "They sat on the couch, or Solar sat on the couch and Aigis, after visibly consulting something internal, sat down beside her, carefully, the way you'd lower a piano. It was the first time Solar had ever seen her sit. The couch made a noise about it." },
      { s: 'solar', f: 'neutral', t: "When you're in standby. Do you dream?" },
      { s: 'aigis', f: 'neutral', t: "I do not dream. I am not built to." },
      { s: 'aigis', f: 'neutral', t: "...But there are images in standby that I did not record. I do not know where they are stored. I have looked." },
      { s: 'solar', f: 'neutral', t: "What are they of?" },
      { s: 'aigis', f: 'neutral', t: "Mostly the ceiling of the laboratory." },
      { s: 'aigis', f: 'neutral', t: "And since Yakushima, a room. A made bed. A lamp. A towel folded on the end of the bed. Nobody in it." },
      { n: "The streetlight lay across the floor in its bars. Somewhere outside a car went by, very slowly, the way cars go at two in the morning, as if they were embarrassed to be up." },
      { s: 'solar', f: 'neutral', t: "That's my room." },
      { s: 'aigis', f: 'neutral', t: "I know." },
      { s: 'aigis', f: 'neutral', t: "I have never been inside it." },
      { n: "The cold started at the back of Solar's neck and went down, one vertebra at a time. She held the glass of water against her chest in both hands. She thought of the room on her first night, made up, waiting, the lamp on, the corner of the sheet turned down for somebody, and of Mitsuru counting Evokers in a black case and getting five where there should have been four." },
      { choose: [
        { t: "Okay. That's okay.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "Is it?" },
          { s: 'solar', f: 'neutral', t: "No. But I don't know what else to do with it. So it's okay." },
          { s: 'aigis', f: 'neutral', t: "...That is a very human method." },
          { s: 'aigis', f: 'happy', t: "I will try it." }
        ] },
        { t: "Do you know why?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "No." },
          { s: 'aigis', f: 'sad', t: "I would tell you if I did. I would like you to know that. I would not keep it." }
        ] },
        { t: "Please stop seeing my room.", notes: 1, then: [
          { s: 'aigis', f: 'sad', t: "I do not choose it." },
          { s: 'aigis', f: 'neutral', t: "...But I will not look closely. That much I can do." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "Your heart rate is elevated. You will not sleep at this rate." },
      { s: 'solar', f: 'neutral', t: "I don't sleep great anyway." },
      { s: 'aigis', f: 'neutral', t: "Then go upstairs and lie down. I will return to standby here." },
      { s: 'aigis', f: 'neutral', t: "If anything comes up the stairs, it will have to go past me first." },
      { n: "She said it the way you'd say the bus stopped outside, a plain description of how things were going to be. Solar went up. She lay down in the room that had been ready for her, under the lamp nobody had asked for, and listened, and heard nothing, nothing at all, and slept until the alarm, for the first time in weeks." }
    ] },

    { after: '9/14', title: '5: is that so', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { n: "Aigis had been a student at Gekkoukan for two weeks, and the school had not recovered." },
      { n: "On her first morning she had stood at the front of the classroom, Solar's homeroom, by an arrangement Mitsuru described as administrative and everybody else described as Mitsuru, and introduced herself to thirty-four third-years in a clear, carrying voice as Aigis, whose priority was to remain at Solar-san's side. Then she had bowed, at precisely forty-five degrees, and walked down the aisle and stood beside Solar's desk until the teacher, very gently, found her a chair." },
      { n: "By lunch it was all over the school. By the end of the week there were three theories, two of which were about Solar, and a first-year had asked Solar in the shoe lockers, shaking, whether it was true she was secretly a princess and Aigis was her bodyguard. Solar had said yes. She regretted nothing." },
      { n: "Tonight Aigis came into the lounge holding a pale blue envelope out in front of her in both hands, at arm's length, the way you'd carry something that might go off." },
      { s: 'aigis', f: 'serious', t: "Solar-san. Please analyze this." },
      { n: "It was a letter. It had a sticker of a cartoon bear on the flap. Inside, on lined paper, in the careful handwriting of a boy who had done several drafts, a boy from 3-C asked whether Aigis would meet him on the school roof after classes tomorrow, as he had something important to say." },
      { s: 'aigis', f: 'neutral', t: "He requests my answer. I do not know what the question is." },
      { n: "From the armchair, Junpei made a noise like a balloon being let go." },
      { s: 'junpei', f: 'happy', t: "Dude. Dude! Aigis got a love letter!" },
      { s: 'aigis', f: 'surprised', t: "Is that so?" },
      { choose: [
        { t: "It means he likes you. He wants to know if you like him back.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "I see." },
          { n: "She looked at the bear sticker for a long time." },
          { s: 'aigis', f: 'neutral', t: "I have spoken to him twice. Once to say good morning and once to tell him his shoelace was untied. That is a very small data set from which to like someone." },
          { s: 'solar', f: 'neutral', t: "People do it on less." },
          { s: 'aigis', f: 'surprised', t: "...That is very brave of them." }
        ] },
        { t: "Junpei, explain it to her. In detail.", notes: 2, then: [
          { s: 'junpei', f: 'flustered', t: "What? Me? No, no, no. That's a girl thing. That's a whole girl thing." },
          { s: 'aigis', f: 'neutral', t: "Junpei-san. You have received love letters?" },
          { s: 'junpei', f: 'sad', t: "...That's not the point, Aigis." },
          { n: "It was, everyone in the room silently agreed, exactly the point." }
        ] },
        { t: "It's a challenge to a duel. Bring your arm cannon.", notes: 1, then: [
          { s: 'aigis', f: 'serious', t: "Understood." },
          { n: "She had already turned for the stairs when Solar caught her sleeve, and it took ten minutes and Junpei crying with laughter on the floor to walk it back." }
        ] }
      ] },
      { n: "Aigis sat down on the couch next to her. She did it more easily now, after two weeks of classroom chairs; the couch hardly complained. She held the letter in her lap and turned it over and over, front, back, front, the way Solar had once watched a man turn a ruler end to end in the light of a gym window." },
      { s: 'aigis', f: 'neutral', t: "Do you receive letters, Solar-san?" },
      { n: "Her phone was in her pocket. She didn't take it out. She didn't need to; she could feel it there, the way you feel a stone in your shoe, the little stack of messages from numbers she didn't know, from people who wrote to her as if she'd only stepped out of the room for a minute." },
      { s: 'solar', f: 'neutral', t: "Sort of." },
      { s: 'aigis', f: 'neutral', t: "When you read them, your heart rate increases by eleven beats per minute." },
      { s: 'solar', f: 'surprised', t: "Don't tell me that." },
      { s: 'aigis', f: 'neutral', t: "Understood. I will not tell you that." },
      { s: 'aigis', f: 'flustered', t: "...I have already told you that. I apologize. The order of operations was incorrect." },
      { choose: [
        { t: "It's fine. It's actually kind of nice that somebody notices.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "I notice everything about you. Is that also nice?" },
          { s: 'solar', f: 'neutral', t: "Mostly." },
          { s: 'aigis', f: 'happy', t: "Mostly. I will take mostly." }
        ] },
        { t: "I don't know who they're from. They know me.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Then they have been looking for you." },
          { s: 'aigis', f: 'neutral', t: "...As I was. I would like to meet them. I would like to compare notes." },
          { n: "Solar laughed, because the alternative was something else." }
        ] },
        { t: "Can you turn the heart monitor off?", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "No." },
          { s: 'aigis', f: 'neutral', t: "I can stop reporting it. That is not the same as not knowing." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "What should I tell him?" },
      { choose: [
        { t: "Tell him the truth. You don't know yet.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "I do not know yet." },
          { s: 'aigis', f: 'neutral', t: "...That is an answer people are allowed to give?" },
          { s: 'solar', f: 'neutral', t: "It's the only one I give." },
          { s: 'aigis', f: 'happy', t: "Then I will give it too. We will match." }
        ] },
        { t: "Tell him thank you. That's the important part.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Thank you for what?" },
          { s: 'solar', f: 'neutral', t: "For being brave on a very small data set." },
          { s: 'aigis', f: 'happy', t: "...Affirmative. I will thank him for that specifically." }
        ] },
        { t: "Tell him you're a weapon.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "He already knows. I told the class on the third day. He wrote the letter after that." },
          { n: "Solar didn't have anything to say to that. Neither, it turned out, did Junpei." }
        ] }
      ] },
      { n: "She went to the roof the next afternoon. Solar didn't follow her, which took more self-control than anything Solar had done in Tartarus that month. Aigis came back down with the bear sticker stuck to the back of her hand, where the boy had apparently put it, and when Junpei asked how it went, she said, after some consideration, that it had gone *correctly*, and would not be drawn further, and looked at the sticker for the rest of the evening whenever she thought nobody was watching." }
    ] },

    { after: '10/7', title: '6: the calculation', place: 'Iwatodai Dorm · Rooftop', time: 'Night', music: 'tender', scene: [
      { n: "The dorm had been very quiet since the fourth. Not silent. People still talked. Junpei still made noise. But it was the quiet of a house where somebody is sick upstairs, where everybody lowers their voice on the stairs without being asked to and nobody uses the good pot, and Koromaru had started sleeping in the front hall facing the door, and no one had the heart to move him." },
      { n: "Aigis was on the roof. She was standing at the rail in the cold with her hands at her sides and her lips moving very slightly, the way they moved when she was counting, and she didn't turn when the stairwell door opened, which she always did, and that was how Solar knew." },
      { s: 'aigis', f: 'neutral', t: "Forty-one meters." },
      { s: 'aigis', f: 'neutral', t: "My maximum speed over forty-one meters, from a standing start, is four point two seconds. The interval was shorter than that." },
      { s: 'aigis', f: 'neutral', t: "I could not have reached him in time." },
      { n: "She didn't say who. She didn't say in time for what. She said it to the city the way you read back a figure to make sure you've written it down right, and then her lips started moving again, and Solar understood that she was doing it over. The same sum. From the top." },
      { choose: [
        { t: "(Stand next to her. Don't interrupt the count.)", notes: 3, then: [
          { n: "She stood at the rail beside her and didn't say anything. Aigis's lips moved. Solar counted with her, not the meters, she didn't know the meters, but the times, under her breath, one, two, three, and on the seventh time through Aigis stopped, and looked down at the rail, and her hands closed on it, and the metal made a small sound, like somebody stepping on ice." }
        ] },
        { t: "Aigis. Stop. You've done it already.", notes: 2, then: [
          { s: 'aigis', f: 'sad', t: "I know. I have done it three hundred and twelve times." },
          { s: 'aigis', f: 'sad', t: "The result does not change. I keep doing it. I do not understand why I keep doing it." }
        ] },
        { t: "Nobody could have.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "That is correct. I have proved it." },
          { s: 'aigis', f: 'sad', t: "The proof does not help. I did not know a correct proof could fail to help." }
        ] }
      ] },
      { s: 'aigis', f: 'sad', t: "I recorded everything. I can replay it at any speed. I have not replayed it." },
      { s: 'aigis', f: 'sad', t: "I do not want to. I did not know there could be a file I did not want to open." },
      { n: "The wind came over the bay with winter already in it. Down in the street a scooter went by, and then it was quiet, and the city's windows were lit all the way out to the water, all those people who had slept through the fourth like any other Sunday and would never know there had been anything to sleep through." },
      { s: 'solar', f: 'neutral', t: "That's what it's like." },
      { s: 'aigis', f: 'neutral', t: "What is?" },
      { s: 'solar', f: 'neutral', t: "When you lose something. You do the sum again. You know the answer. You do it again anyway." },
      { s: 'aigis', f: 'surprised', t: "...Is that what this is?" },
      { choose: [
        { t: "Yeah. I think that's what this is.", notes: 3, then: [
          { s: 'aigis', f: 'sad', t: "Then I would like it to stop." },
          { s: 'aigis', f: 'neutral', t: "...And I would not like it to stop. Both. At the same time. That is not logically possible." },
          { s: 'solar', f: 'neutral', t: "No. It isn't." },
          { s: 'aigis', f: 'neutral', t: "But it is happening." },
          { n: "Solar didn't answer. There wasn't one. They let it be not logically possible together, which was the only thing on offer." }
        ] },
        { t: "It's called regret. People have it all the time.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "All the time?" },
          { s: 'aigis', f: 'sad', t: "...That seems like a very heavy thing to give people as standard equipment." }
        ] },
        { t: "You're a machine. Maybe it's a glitch.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "I ran a diagnostic. There is nothing wrong with me." },
          { s: 'aigis', f: 'sad', t: "That is what I find frightening." }
        ] }
      ] },
      { ifRomance: 'shinjiro', then: [
        { s: 'aigis', f: 'neutral', t: "Solar-san. When anybody says his name at dinner, your heart rate stops increasing. It drops." },
        { s: 'aigis', f: 'sad', t: "I have not told anyone. I wanted to tell you that I have not told anyone." },
        { n: "Solar looked at the rail. There was a beanie folded in her coat pocket that she had slept in since the third. She didn't say anything about it, and Aigis, who certainly knew, didn't either." }
      ], else: [
        { s: 'aigis', f: 'neutral', t: "Ken-san has not spoken at dinner since the fourth. He says thank you for the food and goodnight. Nothing between." },
        { s: 'aigis', f: 'sad', t: "I have been standing near his door at night. Not inside. Near. I did not know what else to do." },
        { n: "Solar thought of a ten-year-old lying awake on the other side of a door with a robot standing guard in the hall, not knowing what to do, and doing it anyway, all night. It was, she thought, the most human thing anybody in the dorm had done all week." }
      ] },
      { n: "Aigis took her hands off the rail. There were two shallow dents in the metal where she'd held it, very neat, finger-width. She looked at them as if somebody else had made them." },
      { s: 'aigis', f: 'neutral', t: "I will go to Tatsumi Memorial tomorrow. Visiting hours are fifteen hundred to nineteen hundred. I would like you to come." },
      { s: 'aigis', f: 'neutral', t: "...I do not need you to. I would like you to. I am learning the difference." },
      { n: "Solar said she would. They stood there a while longer, because neither of them wanted to be the first to go in, and then Koromaru came up the stairs, slowly, the way he did everything that week, and sat between their feet facing the stairwell door, and they went down for him." }
    ] },

    { after: '10/28', title: '7: a place shaped like you', place: 'Iwatodai Dorm · Lounge', time: 'Evening', scene: [
      { n: "The dorm had too many people in it now. That was how Junpei put it, not unkindly, standing at the bottom of the stairs with a towel round his neck waiting for a bathroom that had been occupied for twenty minutes by somebody he hadn't met in August. There were more shoes at the door than there were feet in S.E.E.S. There were more chopsticks in the drawer than anyone could account for. Dinner happened in shifts, and was loud, and sometimes, in the middle of it, somebody new would look up from their bowl at Solar with an expression she didn't have a name for and couldn't look at for long." },
      { n: "They had come through at midnight, one after another, out of the green, people who knew her. Who called her by a short name nobody here used, and by surnames she didn't own, and touched her arm in passing as if checking she was solid. She was polite to them. She didn't know them. That was the worst thing about this autumn, and there was no competition." },
      { n: "Aigis had watched all of it from the kitchen doorway, standing, the way she had stood in July, with her hands folded, saying nothing. Tonight, when the second shift of dinner had gone upstairs, she came and sat beside Solar on the couch, and folded her hands in her lap, and didn't say anything for a while longer, which was how Solar knew it was something." },
      { s: 'aigis', f: 'neutral', t: "They call you by other names." },
      { s: 'solar', f: 'neutral', t: "They do." },
      { s: 'aigis', f: 'neutral', t: "I do not have those names on file. I only have Solar." },
      { choose: [
        { t: "Solar's the one I have too.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "...Then we have the same file." },
          { n: "She sounded so relieved that Solar had to look at the television, which was off, for a while." }
        ] },
        { t: "Do you want to know them?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I want to know whether I should." },
          { s: 'aigis', f: 'neutral', t: "...You have not answered to them yet. I have been listening. So I will wait." }
        ] },
        { t: "They're not my names. Not yet.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Not yet." },
          { s: 'aigis', f: 'neutral', t: "I have noted the *yet*." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "May I tell you something I have not told Mitsuru-san? It is not a malfunction. I have checked." },
      { s: 'solar', f: 'neutral', t: "Go on." },
      { s: 'aigis', f: 'neutral', t: "Before I met you, there was a place in my priorities. An empty one. Shaped like a person. No name. No face. When I saw you on the beach, you fit it." },
      { s: 'aigis', f: 'neutral', t: "I believe the people who came through at midnight have the same place. I have watched them look at you. You fit theirs too." },
      { s: 'aigis', f: 'sad', t: "Theirs is older." },
      { n: "The lounge lamp hummed. Upstairs somebody laughed, a girl, one of the new ones, bright and sudden, and Solar's whole chest went toward the sound before she could stop it, the way a plant goes toward a window, and then she sat very still and made it come back." },
      { s: 'aigis', f: 'sad', t: "Is mine wrong, then? Because it is newer?" },
      { n: "She asked it the way she asked everything, plainly, wanting the answer. But her hands had come unfolded in her lap. One of them had closed on her skirt, the way a child holds onto the edge of a coat in a crowd." },
      { choose: [
        { t: "No. It's not wrong. It's yours.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "Mine." },
          { s: 'aigis', f: 'neutral', t: "I was not aware I was permitted to own one." },
          { s: 'solar', f: 'neutral', t: "You are. I'm in it. I'm not going to argue with it." },
          { s: 'aigis', f: 'happy', t: "...Affirmative." },
          { n: "The hand on her skirt let go. She smoothed the fabric out flat afterwards, very precisely, as though putting something back the way she'd found it." }
        ] },
        { t: "Newer doesn't mean less. I'm newer than all of them.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "You have been here since April." },
          { s: 'solar', f: 'neutral', t: "That's what I mean. Everything I've got is from April. Is any of it worth less?" },
          { s: 'aigis', f: 'neutral', t: "..." },
          { s: 'aigis', f: 'happy', t: "No. None of it. I have reviewed it." }
        ] },
        { t: "I don't know.", notes: 1, then: [
          { s: 'aigis', f: 'sad', t: "...That is an honest answer. I asked for one." },
          { n: "She folded her hands again, carefully, and didn't ask anything else, and Solar sat with the not-knowing and found it was heavier on the couch than it had ever been on the roof." }
        ] }
      ] },
      { s: 'solar', f: 'neutral', t: "Aigis. Who made it? The place." },
      { s: 'aigis', f: 'neutral', t: "I do not know." },
      { s: 'aigis', f: 'neutral', t: "The room was ready. The place was ready. You arrived and fit both. I do not know who prepares a world for somebody." },
      { s: 'aigis', f: 'neutral', t: "...But I am glad that someone did. I would not have known where to look." },
      { n: "She said it and sat back. That was the whole of it. No explanation came after, and Solar realized, sitting there with the lamp humming and the new girl laughing again upstairs, that none was going to, ever, from anyone, and that Aigis had known that before she started talking and had told her anyway, because she'd decided Solar should have whatever there was." },
      { choose: [
        { t: "(Lean your shoulder against hers.)", notes: 3, then: [
          { n: "She leaned. Aigis's shoulder was hard and cool and didn't give at all, like leaning on a wall in summer, and it hummed faintly, and after a moment Aigis leaned back, a very small and very exact amount, as if she had calculated precisely how much weight a person could take without being pushed over." }
        ] },
        { t: "Thank you for telling me.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "You are welcome. It was difficult. I did not know things could be difficult to say if they were true." }
        ] },
        { t: "Don't tell the others.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "I was not going to. It is not theirs." }
        ] }
      ] },
      { n: "When Solar went up, Aigis stayed on the couch. Not in standby. Sitting. Looking at the stairs. Solar could see her through the banisters from the landing, a straight small shape in the lamplight, waiting for nothing in particular, like a person." }
    ] },

    { after: '11/16', title: '8: no new orders', place: 'Iwatodai Dorm · Command Room', time: 'Evening', scene: [
      { n: "The command room on the fourth floor was cold, because nobody had remembered to turn the heating on in it since the start of the month. Mitsuru used to come up here every evening. She hadn't, lately. She had been very quiet since the fourth, and wore black to school, and nobody asked her anything, and she thanked everybody who didn't." },
      { n: "Aigis was sitting at the long table in the dark with her hands flat on it, looking at the bank of dead monitors on the wall as if waiting for one of them to say something." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. I have received no new orders in twelve days." },
      { s: 'aigis', f: 'neutral', t: "Before that, my orders came from the Group, through Mitsuru-san. Now Mitsuru-san does not come up here. I have been checking. I check every evening at twenty hundred." },
      { choose: [
        { t: "Give her time. She'll come back up.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "I will give her time. I have a great deal of it." },
          { s: 'aigis', f: 'sad', t: "...I would give her some of mine, if that were possible. I have checked. It is not." }
        ] },
        { t: "Do you need orders?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I did. I was made with them. Like a person is made with lungs." },
          { s: 'aigis', f: 'neutral', t: "...I am finding out whether I still do. It is like holding your breath and waiting to see what happens." }
        ] },
        { t: "I could give you some.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "You are field leader. Your orders would be valid." },
          { s: 'aigis', f: 'sad', t: "...But I do not think that is what I am missing. I am sorry. I do not know what I am missing." }
        ] }
      ] },
      { n: "Solar sat down across the table from her. The chair was cold through her skirt. One of the dead monitors had a sticky note on the frame in Fuuka's handwriting, a reminder about a cable, and it had curled at the corners from being there since summer." },
      { s: 'aigis', f: 'neutral', t: "Here is what I do not understand." },
      { s: 'aigis', f: 'neutral', t: "For twelve days, I have had no orders. In those twelve days I have stood near your door at night. I have walked half a step behind you to school. In Tartarus I have stood in front of you four times when something came. Nobody told me to." },
      { s: 'aigis', f: 'serious', t: "So who decided?" },
      { n: "She asked it of Solar, but she was looking at her own hands on the table, flat and still and pale, as if she expected them to answer, as if they might have been doing it on their own." },
      { choose: [
        { t: "You did.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "..." },
          { s: 'aigis', f: 'surprised', t: "I did?" },
          { s: 'solar', f: 'neutral', t: "Nobody else was here." },
          { n: "Aigis looked at her hands for a long time. Then she turned one of them over, palm up, the way she'd held it out for the butterfly in August, and looked at that, too." },
          { s: 'aigis', f: 'neutral', t: "...That is a very large thing to find out on a Monday." }
        ] },
        { t: "Maybe it was always in you. The orders just got there first.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Like the place shaped like you. Before I knew your name." },
          { s: 'aigis', f: 'neutral', t: "...I do not know if that is comforting or frightening. I will decide later. I am allowed to decide later now, I think." }
        ] },
        { t: "Habit. You'll stop eventually.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "I have run the numbers. If it were habit, it would be decreasing." },
          { s: 'aigis', f: 'serious', t: "It is increasing." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "I was built to protect. I have always assumed that meant I did not have a choice." },
      { s: 'aigis', f: 'neutral', t: "If I have a choice, then I could stop. If I could stop and I do not, then it is mine. I am not sure I was prepared to own something so heavy." },
      { n: "Solar thought of a girl in a beanie on a kitchen counter, of a boy with a ruler, of everybody in this building who had picked something up that nobody told them to carry and hadn't put it down. She thought, too, of the messages on her phone, people on the far side of something asking her to come home, and of how badly she wanted, every day, for somebody to just tell her what to do, so that it wouldn't be hers." },
      { ifRomance: 'shinjiro', else: [] },
      { choose: [
        { t: "That's what everybody here carries. You're not doing it alone.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Is that so?" },
          { s: 'aigis', f: 'happy', t: "...Then I will carry it. I have excellent load capacity." },
          { n: "It was a joke. She had detected it herself, early, and delivered it on purpose, and looked at Solar afterwards to see if it had landed, with the faintly anxious face of somebody bringing a dish they made to a party. It had landed." }
        ] },
        { t: "I'm still learning it too.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "You?" },
          { s: 'solar', f: 'neutral', t: "Every day. Mostly I'm bad at it." },
          { s: 'aigis', f: 'neutral', t: "...Then we will be bad at it together. That is the arrangement. You said so in July." }
        ] },
        { t: "You could always just follow me. I'll decide.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "I could." },
          { s: 'aigis', f: 'sad', t: "...You do not want that. Your heart rate went up when you said it. I am not reporting it. I am simply noting it." }
        ] }
      ] },
      { n: "Aigis got up and went to the wall and found the switch for the heating, which Solar could have sworn she had known about all along, and turned it on. The old vents ticked and groaned and began, very slowly, to breathe warm air into the room." },
      { s: 'aigis', f: 'neutral', t: "I decided to do that. Nobody ordered it." },
      { s: 'aigis', f: 'happy', t: "Mitsuru-san will be warmer when she comes back up." },
      { n: "They left it on. Two evenings later Solar passed the fourth-floor landing and saw the light on under the command room door and heard Mitsuru's voice inside, low, saying something to Aigis, and Aigis's voice answering, and she went on up the stairs without stopping, so as not to be the thing that interrupted it." }
    ] },

    { after: '12/7', title: '9: the new hand', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { n: "December had come in cold and clear, the kind of cold that made the stars look sharper and the city look further away, and the roof of the dorm was the coldest place in Iwatodai, and Aigis was on it, which was how Solar knew she was back." },
      { n: "She had been away at the Kirijo labs for a while. Nobody had said much about why, and Mitsuru had said less, and the dorm had gone on with a gap in it at the dinner table where a girl used to stand and watch everybody eat. Now the gap was on the roof, at the rail, in a Gekkoukan coat with the collar up, flexing one hand in the starlight." },
      { n: "It was a new hand. You could see it if you knew what the old one had looked like, and Solar did. The seams at the wrist were sharper. The finish was whiter, unmarked, without the faint scuff along the side of the index finger that had come from holding a rail too hard in October. It looked like something that had just been taken out of a box." },
      { s: 'aigis', f: 'neutral', t: "Solar-san. Good evening. I have returned." },
      { choose: [
        { t: "(Hug her.)", notes: 3, then: [
          { n: "She hugged her. It was like hugging a lamppost in winter, cold and hard and humming faintly, and Aigis's arms stayed down at her sides for a full three seconds, the way they had the first time anybody had done it, and then came up, slowly, carefully, as if she had to remember the procedure, and closed, and held on." },
          { s: 'aigis', f: 'happy', t: "...I have missed this. I did not have a file for it until now." }
        ] },
        { t: "Are you okay?", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I am fully operational." },
          { s: 'aigis', f: 'sad', t: "...That is a different question. I am still working on the other one." }
        ] },
        { t: "Nice hand.", notes: 1, then: [
          { s: 'aigis', f: 'neutral', t: "Thank you. It is a very good hand. It is not mine yet." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "The hand that held the rail on the twenty-seventh of July is not mine anymore. It is in a drawer, in a building on the other side of the bay. I asked to keep it. I was told it was not a reasonable request." },
      { s: 'aigis', f: 'sad', t: "I miss it. That is irrational. I would like to miss it anyway." },
      { n: "She flexed the new fingers. They made no sound. The old ones had made a small sound, Solar realized, a faint whisper like a page turning, and she had never once noticed it until it wasn't there." },
      { choose: [
        { t: "(Take the new hand. It's cold. Hold it until it isn't.)", notes: 3, then: [
          { n: "She took it in both of hers. It was cold the way metal is cold in December, all the way through, and it didn't need warming, and Aigis said so, and Solar said she knew, and held it anyway, the way you'd hold the hand of somebody coming out of anesthesia, and after a while it was the same temperature as her own, which was not warm, exactly, but was the same." },
          { s: 'aigis', f: 'neutral', t: "It is the same temperature as you now." },
          { s: 'aigis', f: 'happy', t: "...That is the first thing it has done that is mine." }
        ] },
        { t: "It'll get scuffed. Give it a couple of months.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "That is a sound plan. I will hold the rail too hard." },
          { s: 'aigis', f: 'happy', t: "...I am joking. I think. I will see." }
        ] },
        { t: "It's just a hand.", notes: 1, then: [
          { s: 'aigis', f: 'sad', t: "Yes." },
          { n: "She put it in her coat pocket, and kept it there for the rest of the evening, the way you put away a thing somebody has called ugly." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "May I tell you something about while I was away?" },
      { s: 'aigis', f: 'neutral', t: "I will not tell you what happened. Mitsuru-san would prefer that I did not. I would also prefer it." },
      { s: 'aigis', f: 'sad', t: "But at one point, I was afraid. I have no record of having been afraid before. I checked. I checked very thoroughly." },
      { n: "The wind came over the rail and lifted her hair and put it down again. Below them the whole city was strung with lights for the season, white and gold along the strip, a tree the size of a building outside Paulownia Mall, and none of it reached up here except as a glow." },
      { s: 'solar', f: 'neutral', t: "What were you afraid of?" },
      { s: 'aigis', f: 'neutral', t: "That I would not come back up these stairs." },
      { s: 'aigis', f: 'neutral', t: "...Not that I would stop. That I would not come back up these stairs. Those were different. I did not know they were different." },
      { choose: [
        { t: "You came back up them.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "I did." },
          { s: 'aigis', f: 'happy', t: "Fifteen steps. Including the little one at the top." }
        ] },
        { t: "That's the most human thing you've ever said.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Is it a compliment?" },
          { s: 'solar', f: 'neutral', t: "I don't know. I think it's just true." },
          { s: 'aigis', f: 'neutral', t: "...Then I will keep it either way." }
        ] },
        { t: "I'd have come and got you.", notes: 2, then: [
          { s: 'aigis', f: 'surprised', t: "You do not know where the building is." },
          { s: 'solar', f: 'neutral', t: "I'd have found it." },
          { s: 'aigis', f: 'neutral', t: "...Yes. I believe you would. I believe it without a reason. I am getting used to that." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "The people who came through at midnight want you to go home. I hear them in the hallway. They are careful. They speak quietly. My hearing is very good." },
      { s: 'solar', f: 'neutral', t: "...Do you want me to go?" },
      { s: 'aigis', f: 'neutral', t: "I am not permitted to want that." },
      { s: 'solar', f: 'neutral', t: "Who says?" },
      { n: "Aigis opened her mouth to answer, and closed it, and Solar watched her go looking through whatever she kept instead of memories for the name of whoever it was who said, and come back empty. It was, she thought, the same face she herself made at roll call when a teacher said a surname." },
      { s: 'aigis', f: 'neutral', t: "...I will think about it." },
      { s: 'aigis', f: 'neutral', t: "I have decided I am allowed to think about it. That is all I have decided tonight. It is enough for one night. I believe that is also a human method." },
      { n: "They went down together. On the stairs, Aigis counted under her breath, fifteen, including the little one, and at the bottom she stopped and looked back up at the roof door as if she had promised it something." }
    ] },

    { after: '1/12', title: '10: aeon', place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'tender', scene: [
      { n: "It had snowed in the afternoon and stopped, and the roof was white and untouched except for one set of footprints from the stairwell door to the rail, very even, exactly the same distance apart, and at the end of them, Aigis, with snow on her shoulders, as if she'd been there long enough to collect it on purpose." },
      { n: "The new year had come and gone. The whole impossible household had gone to the shrine on the first in borrowed coats, more of them than anybody could count, and Aigis had drawn a fortune and read it and folded it into a perfect square and kept it in her pocket ever since and refused to tell anybody what it said. School had started again. The cold had settled in for good. Solar's breath went up white in front of her as she came across the roof, and Aigis's didn't, and she'd stopped noticing that sometime in the autumn and noticed it again now." },
      { s: 'aigis', f: 'neutral', t: "Good evening." },
      { n: "Not *Solar-san*. Just good evening, and then a small pause where the name should have been, as if she were holding the door for it." },
      { choose: [
        { t: "You've been up here a while.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "Since sixteen hundred. The sightlines are optimal." },
          { s: 'aigis', f: 'happy', t: "...That was a callback. I have learned what a callback is. Junpei-san explained it. He explained it for forty minutes." }
        ] },
        { t: "(Brush the snow off her shoulders.)", notes: 3, then: [
          { n: "She brushed the snow off Aigis's shoulders with the side of her glove, both sides, the way you'd do for somebody coming in from outside, and Aigis stood perfectly still for it and looked, somehow, enormously pleased, the way a cat looks pleased without appearing to move a single muscle." }
        ] },
        { t: "You didn't say my name.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "No. I am getting to that. Please wait." },
          { s: 'aigis', f: 'flustered', t: "...I have practiced this. You are interrupting the order of operations." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "I went back to the shrine on Sunday. To the stone basin." },
      { s: 'aigis', f: 'neutral', t: "There are no butterflies in January. I was told they come back in spring." },
      { s: 'aigis', f: 'sad', t: "Not the same ones. Different ones. The ones from August are gone. Two weeks, as I calculated." },
      { s: 'aigis', f: 'neutral', t: "I stood there anyway for forty-three minutes. I wanted to see what it was like without one." },
      { s: 'solar', f: 'neutral', t: "What was it like?" },
      { s: 'aigis', f: 'neutral', t: "Cold. And I still did not want to move." },
      { n: "Solar didn't say anything. She came and stood at the rail beside her, close, so their sleeves touched, and they looked out at the bay together, gray and still under the snow-light, with the monorail going across it in its slow silver line the way it had every night since April." },
      { s: 'aigis', f: 'neutral', t: "The name of my arcana is *Aeon*. Mitsuru-san told me. It means a very long time. An age. Longer than people." },
      { s: 'aigis', f: 'neutral', t: "I was made to last a very long time. I was made to protect. Those were the two things on my list, in July." },
      { s: 'aigis', f: 'neutral', t: "I have made a third one. Nobody ordered it." },
      { choose: [
        { t: "What's the third one?", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "I will tell you. Please do not move suddenly." },
          { n: "She said it the way she'd said it at the stone basin with the swallowtail on her fingers, and Solar, who understood, held still." }
        ] },
        { t: "(Wait. Don't make her rush it.)", notes: 3, then: [
          { n: "She waited. The snow-light lay on everything. Aigis's lips moved, very slightly, counting something, and then stopped, and Solar understood she had stopped on purpose, at an unfinished number, the way you put a bookmark into the middle of a sentence." }
        ] },
        { t: "You don't have to tell me.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I know. That is why I am going to." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "I was built to protect you. I believe that was true before I knew who you were. I still do not know why." },
      { s: 'aigis', f: 'neutral', t: "But I am choosing to be your friend. That is a different thing. Nobody built me for it. I checked." },
      { s: 'aigis', f: 'happy', t: "If both are possible, I will do both. I have excellent load capacity." },
      { n: "Solar's throat did something it hadn't asked permission for. She looked at the bay very hard until it stopped. It didn't quite stop." },
      { s: 'aigis', f: 'neutral', t: "And I have decided to remove the honorific." },
      { s: 'aigis', f: 'neutral', t: "Is that permitted?" },
      { choose: [
        { t: "It's permitted.", notes: 3, then: [
          { s: 'aigis', f: 'neutral', t: "Thank you." },
          { s: 'aigis', f: 'happy', t: "...Solar." },
          { n: "She said it slowly, like trying a step on new ice, and then again, faster, testing whether it would hold, and it held." },
          { s: 'aigis', f: 'happy', t: "Solar. It is a very good name. It is the one I have on file." }
        ] },
        { t: "You never needed permission.", notes: 3, then: [
          { s: 'aigis', f: 'surprised', t: "Is that so?" },
          { s: 'aigis', f: 'neutral', t: "...Then I will not ask next time. That will be the first time I do not ask." },
          { s: 'aigis', f: 'happy', t: "Solar." }
        ] },
        { t: "I'll miss the -san a little.", notes: 2, then: [
          { s: 'aigis', f: 'neutral', t: "I will keep a copy of it. In case you need it on a bad day." },
          { s: 'aigis', f: 'happy', t: "But not today. Today you are Solar." }
        ] }
      ] },
      { s: 'aigis', f: 'neutral', t: "One more thing. Then I will stop. I have been speaking for a long time, for me." },
      { s: 'aigis', f: 'neutral', t: "The place shaped like you. I checked it while you were not here. Over winter break. On the night you went to the station and did not come back until two." },
      { s: 'aigis', f: 'neutral', t: "It did not get smaller." },
      { s: 'aigis', f: 'neutral', t: "Whatever you do. Wherever you go, or do not go. It will still be here. I do not lose things." },
      { n: "It went into her somewhere below the ribs and stayed, the way the stopwatch had gone into her pocket in April and the card had gone into her blazer in September, a small solid thing that was hers now whether she'd asked for it or not." },
      { n: "She didn't say anything. She took Aigis's hand on the rail, the new one, which was not new anymore, which had a faint scuff along the side of the index finger now, from holding a rail too hard on a roof in December, and it was cold, and it went the same temperature as hers after a while, and they stood like that until the monorail had gone across the bay and back twice, and Aigis counted it, both times, out loud, so Solar wouldn't have to." }
    ] }
  ],

  // After MAX (engine need): late-January texture. No fragments.
  afterMax: [
    { place: 'Iwatodai Dorm · Rooftop', time: 'Evening', scene: [
      { n: "Koromaru had come up the roof stairs on his own, which he had only recently started doing again, and was sitting in the snow by the rail with his nose pointed at the bay and his ears up, and Aigis was crouched beside him with one hand resting on his back, both of them perfectly still, like a monument to a dog and his robot." },
      { s: 'koromaru', f: 'neutral', t: "Woof." },
      { s: 'aigis', f: 'neutral', t: "He says the snow smells like the shrine in the year he was very young. He says it is a good smell. He says you are late." },
      { s: 'solar', f: 'neutral', t: "He did not say I was late." },
      { s: 'aigis', f: 'neutral', t: "He implied it. Some of his statements are implied." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { s: 'aigis', f: 'happy', t: "...He says he forgives you." },
      { n: "Solar sat down in the snow on Koromaru's other side, which was a mistake she'd regret in about four minutes, and he leaned on her at once, the whole warm weight of him, the way he'd leaned on her at the top of the shrine steps a long time ago, in May, before any of this, when he'd still been waiting for someone." },
      { choose: [
        { t: "Ask him what he's looking at.", notes: 3, then: [
          { s: 'koromaru', f: 'neutral', t: "...Woof." },
          { s: 'aigis', f: 'neutral', t: "He says he is not looking. He is waiting. He says there is a difference." },
          { s: 'aigis', f: 'neutral', t: "...He says it is not much of one." },
          { n: "Solar looked at the dog. She had heard that before, word for word, in a kitchen, from somebody else, in a voice much lower than Aigis's, and from the way Koromaru's ears moved, so had he." }
        ] },
        { t: "Are you making all of this up?", notes: 2, then: [
          { s: 'aigis', f: 'serious', t: "I am not equipped to make things up." },
          { s: 'aigis', f: 'neutral', t: "...I am, however, equipped to round up. Slightly. When it is kind." }
        ] },
        { t: "(Just scratch his ears.)", notes: 2, then: [
          { n: "She scratched him behind the ears, and he closed his eyes and groaned like an old man lowering himself into a bath, and Aigis watched the two of them with the attentiveness she brought to everything that she couldn't feel herself, and then, very carefully, scratched the other ear." }
        ] }
      ] },
      { n: "Down in the street the lights came on along the strip. A train went over the bridge. Somebody in the dorm below opened a window and the sound of Junpei and somebody new arguing about a card game came up through the cold, loud and happy and completely ordinary, and then the window shut." },
      { s: 'aigis', f: 'neutral', t: "He asks whether you will be here in the spring." },
      { n: "Solar looked at Aigis. Aigis looked at the bay. Koromaru looked at nobody, which was to say at the stairs." },
      { s: 'solar', f: 'neutral', t: "Did he really ask that?" },
      { s: 'aigis', f: 'neutral', t: "...I rounded up." },
      { n: "Solar didn't answer. Aigis didn't press her. She'd learned that from somebody too, and Solar thought she knew who. They sat in the snow, the three of them, until Solar's skirt was soaked through and she had to go in, and Aigis carried Koromaru down the stairs in her arms like a parcel, which he permitted, and which he would not have permitted from anybody else." }
    ] },
    { place: 'Iwatodai Station · Photo Booth', time: 'Evening', scene: [
      { n: "There was a photo booth at Iwatodai Station by the ticket gates, an old one with a striped curtain and a sun-faded sample sheet of a couple from about 1998 making peace signs at the camera, and Aigis had been standing in front of it for some time when Solar came back from the convenience store with two hot cans of milk tea, one of which was for holding." },
      { s: 'aigis', f: 'neutral', t: "My memory does not lose things." },
      { s: 'aigis', f: 'neutral', t: "But I would like to own something I could lose by accident. I believe that is part of it. The owning." },
      { n: "So they went in. It was very small inside, and the stool was meant for one, and Aigis sat on it very upright and Solar crouched beside her with her chin by Aigis's shoulder, and the machine said something cheerful in a recorded voice and began to count down." },
      { s: 'aigis', f: 'flustered', t: "I do not know what to do with my face." },
      { choose: [
        { t: "Copy me.", notes: 3, then: [
          { n: "Solar smiled at the camera, the real one, not the one she used for teachers, and in the little screen she watched Aigis look sideways at her and study it, and then, very carefully, put one on too, slightly late and slightly too wide, like somebody singing a song they'd only heard once. The flash went off. It was the best photograph either of them would ever be in." }
        ] },
        { t: "Do the peace sign. Like the couple from 1998.", notes: 2, then: [
          { n: "Aigis did the peace sign with military precision, two fingers exactly vertical, held at exactly the correct height, and kept her face entirely neutral, and the flash went off, and the result was so funny that Solar had to put her forehead on Aigis's shoulder for the next two frames." }
        ] },
        { t: "Don't do anything. Just look.", notes: 2, then: [
          { n: "So Aigis just looked. Straight into the lens, her blue eyes making their small soft refocusing click, the way she'd looked at Solar on the beach in July, as if checking a face against something she'd carried a long time. The flash went off." }
        ] }
      ] },
      { n: "Four frames came out of the slot in a damp strip, still warm. In one of them Aigis was smiling. In one Solar was laughing too hard to have a face. In one they were both looking at each other instead of the camera, which neither of them remembered doing. In the last one Aigis had her hand up, the new one, against the glass, palm out, the way you'd put your hand on a window to say hello to somebody on the platform as the train pulled out." },
      { s: 'aigis', f: 'neutral', t: "We will cut it. Two for you. Two for me." },
      { s: 'solar', f: 'neutral', t: "Which two do you want?" },
      { s: 'aigis', f: 'neutral', t: "The one where we are looking at each other." },
      { s: 'aigis', f: 'neutral', t: "...And the one with my hand. You may have the one with my hand if you want it. I would understand." },
      { n: "Solar took the one with the laughing and the one with the smile. She didn't say why. Aigis didn't ask. She put her two frames in the inside pocket of her coat, flat, where they wouldn't bend, the way somebody else had once put a card, and then she put her new hand over the pocket, briefly, as if checking it was there." },
      { n: "On the platform the train came in with its doors already opening and its windows full of tired people going home, and Aigis stood half a step behind her and slightly to the left, and they got on, and the doors closed, and the station went away behind them into the dark, and that was all. It was a photo booth. Solar was being ridiculous. She kept her two frames in her phone case for the rest of her life, wherever that turned out to be." }
    ] }
  ]
});
