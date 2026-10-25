/* Kat & Ethan · XII Hanged Man. Revamp social link data (femc-game.html). Format: link fields in assets/femc/game/core.js,
   scene lines in scene.js. Living-world parts (the run-ins that find them, texts after ranks, the Koromaru walk):
   data/living-kat.js.
   Hidden couple link (2026-10-25). Kat and Ethan just moved to Port Island from the US with two Siberian Huskies, Cosmo
   (a boy, four, the diva; grey and white, navy bandana) and Wanda (a girl, one, the chaotic baby; black and white,
   paw-print bandana). Persona-world people (kind 'native'): no closes, no goodbye, nothing about other worlds, the Dark
   Hour or Solar's lives. They're friends, never a romance, and the link is never about them admiring Solar: they have
   their own year and their own goal, The List (become locals: find the best ramen on Port Island, get a konbini clerk to
   know their order, Ethan goes to the gym, the dogs sit at the pier for one photo).
   Kat: Digital Communications Manager and the editor of her company's newspaper; studied psychology and diagnoses anyone in
   minutes (rank 3 reads Solar's crush and romance state); writes, Fallout, the Sims, Sanrio, alt / e-girl clothes,
   Overwatch and Smite (rank 6 is Overwatch with Solar, whose hands play Kiriko like a Grandmaster). Swings from judgmental
   to the sweetest person alive (rank 7 shows it in how she acts and is never named). Says "oh brother", "oh nah", "oh hell
   nah", "is this guy being for real?", "lil pup" (an insult) and the odd SuperTF Twitch-chat line Solar doesn't get.
   Ethan: easygoing, nerdy underneath, random facts, gets on with everyone; high Diamond, almost Champ, at the car soccer
   game (rank 2: a rivalry with Junpei at Game Panic), Elden Ring, CS:GO, Dark Souls 3, Borderlands 2, Rick and Morty and
   the Big Lez Show; says he's going to the gym every rank and never does; a picky eater (rank 4, Hagakure); does what his
   girlfriend wants and babies her. They met on Tinder. A wink that they miss California (rank 4), never more.
   The max rank is quiet: Ethan kind of saved her when she was in a bad place. It ends on the dogs.
   Found: missable, in town (secret.via 'runin', data/living-kat.js): from 5/6, eight run-ins in different places where two
   huskies drag a couple past; stop for three of them (flags KAT_STOPS) and the third becomes the link. Walk past six and
   they stay strangers. Nothing in the game says who made it; the fourth wall stays shut (a Kiriko cosplay joke in rank 6 and Kuromi's name
   in a run-in are the closest it gets).
   Home: the Strip's riverside end, Tuesday, Friday and Sunday evenings (the dogs' walk); each rank is somewhere new.
   Perks (build.js PERKS): rank 3 Dog People (Sunday walk, weekly stats), rank 6 The Ramen List (Hagakure discount),
   rank 8 Pier Walks (the pier activity), rank 10 Pack Rush (max, the old Roundhouse hook).
   Speakers: kat, ethan, cosmo, wanda (portraits: neutral, happy, sad, serious, surprised, flustered), solar, junpei, clerk,
   hgMaster, bunkichi; kiriko only ifMet. Flags this link sets: kat-r1-* (rank 1's pick, read in rank 9). */
(window.FEMC_GAME_LINKS ||= []).push({
  id: 'kat', name: 'Kat & Ethan', short: 'Kat & Ethan', arcana: 'Hanged Man', numeral: 'XII', from: 'Port Island (new in town)',
  kind: 'native', romance: null,
  starts: '5/6',
  home: { area: 'strip', spot: 'Riverside end', slot: 'evening', days: [0, 2, 5],
          hint: 'Tuesday, Friday and Sunday evenings, at the riverside end of the Strip, being walked by two huskies.' },
  secret: {
    flag: 'found-kat', via: 'runin', gained: 2,
    count: { of: ['kat-stop-river', 'kat-stop-shrine', 'kat-stop-vending', 'kat-stop-pier', 'kat-stop-mall', 'kat-stop-portisland', 'kat-stop-strip', 'kat-stop-snow'], min: 3 }
  },
  approach: 'Two huskies, one grey and one black, are towing a couple along the riverside at a speed nobody agreed to.',
  cast: { kat: 'Kat', ethan: 'Ethan', cosmo: 'Cosmo', wanda: 'Wanda' },
  invite: {
    ask: [
      'we are at the riverside and wanda has found a crab. come help',
      'ethan says he knows a ramen place. ethan does not know a ramen place. come supervise',
      'r u free. cosmo is refusing to walk unless he sees u. i am not joking he sat down',
      'come walk w us pls. ethan is doing the voices again',
      'emergency. there is a new flavor at the konbini and we cant read it',
      'free?? we r by the river being dragged',
      'come outside. the dogs miss u. i also miss u but the dogs are louder about it'
    ],
    ok: ['YAY ok', 'ok cosmo says ok', 'come come come', 'ethan is getting u a drink', 'perfect. wanda is screaming with joy'],
    no: ['noooo ok', 'ok next time!!', 'cosmo will forgive u eventually', 'ok drink water', 'boo. ok love u']
  },
  hangouts: [
    [
      { n: "The dogs did the riverside the way they did everything, at full speed and in two directions, Wanda zigzagging between every lamppost like she was trying to braid the leash around the whole of Iwatodai, Cosmo walking dead straight down the middle of the path with his chin up as if the river had been put there for him and was running a little late." },
      { s: 'ethan', f: 'happy', t: "Fun fact. A group of pugs is called a grumble." },
      { s: 'kat', f: 'neutral', t: "Why are you telling us that. We have huskies." },
      { s: 'ethan', f: 'neutral', t: "It's on my mind. I can't control what's on my mind." },
      { choose: [
        { t: "What's a group of huskies called?", notes: 3, then: [
          { s: 'ethan', f: 'surprised', t: "...I don't know. That's a hole in my knowledge. That's going to keep me up." },
          { s: 'kat', f: 'happy', t: "A problem. A group of huskies is called a problem." }
        ] },
        { t: "(Take Wanda's leash.)", notes: 2, then: [
          { n: "Solar took Wanda's leash, and Wanda took Solar, about forty meters, toward a pigeon who had done nothing to anyone." }
        ] },
        { t: "(Just walk.)", notes: 1 }
      ] },
      { n: "By the bridge Cosmo sat down without warning, which meant the walk was over, and that was that. Nobody argued with him. Nobody had ever won." }
    ],
    [
      { n: "Kat had brought a bag of konbini snacks to the bench by the water and was ranking them out loud in order of how much she trusted them, which was a short list that kept getting shorter, while Ethan fed Wanda the corners of a rice cracker one at a time and called her a good girl every single time, like it was news." },
      { s: 'kat', f: 'serious', t: "This one is a lie. It says melon. It's not melon. It's the idea of melon." },
      { choose: [
        { t: "That's what melon flavor is everywhere.", notes: 2, then: [
          { s: 'kat', f: 'surprised', t: "Oh, that's so much worse. I've been lied to my whole life." }
        ] },
        { t: "(Try it and make a face.)", notes: 3, stat: { charm: 1 }, then: [
          { n: "She tried it and made a face, and Kat pointed at the face and said *thank you,* like a lawyer resting her case." }
        ] },
        { t: "(Give Cosmo the last one.)", notes: 1, then: [
          { s: 'cosmo', f: 'serious', t: "..." },
          { n: "Cosmo sniffed it and looked away, deeply insulted, and Wanda ate it out of the air before it hit the ground." }
        ] }
      ] }
    ],
    [
      { n: "It was one of those evenings where nothing happened and everyone seemed fine with that. Ethan threw a ball for Wanda, who brought it back about a third of the time and the rest of the time took it on a tour. Kat sat on the low wall with her knees up and her phone out, typing something with the total focus of someone being paid." },
      { s: 'kat', f: 'neutral', t: "Work. Don't look at me. The newsletter's due and our CEO used the word 'synergy' in a quote, so now I have to decide if I'm going to let him." },
      { choose: [
        { t: "Don't let him.", notes: 3, then: [
          { s: 'kat', f: 'happy', t: "See, this is why I keep you around." },
          { n: "She deleted it with one thumb, very satisfied, and wrote *working together* instead, and looked at it for a while like a gardener looking at a hedge." }
        ] },
        { t: "Let him. It's his funeral.", notes: 2, then: [
          { s: 'kat', f: 'serious', t: "It's my funeral. My name's on the masthead." }
        ] },
        { t: "(Watch Wanda.)", notes: 1 }
      ] }
    ]
  ],
  ranks: [
    { after: '5/8', title: '1: the list', place: 'Port Island · Convenience Store', time: 'Evening', music: 'city', scene: [
      { n: "The konbini at Port Island did the thing konbini did at night, which was glow, a white rectangle of light at the end of the street with its doors opening and closing on their own for nobody in particular. Kat had picked it, because, she'd said on the phone, it was the one where the guy at the register had looked at them like they were a weather event." },
      { n: "The dogs were tied up outside, by the umbrella stand. Wanda was trying to eat the umbrella stand. Cosmo was sitting very upright with his back to the street, facing the glass, watching them go in, like a mother at a school gate." },
      { s: 'kat', f: 'happy', t: "Okay. Welcome to the list." },
      { n: "She turned her phone around. It was a note titled BECOME LOCALS, in capitals, with a little house emoji, and under it a list that had clearly been written and rewritten across several nights." },
      { n: "*1. find the best ramen on port island (ethan is not allowed to just say the first one). 2. get a konbini guy to know our order. 3. ethan goes to the gym. 4. get cosmo and wanda to sit still at the pier for ONE photo.* There was a fifth line that just said *5. make a friend who isn't the dogs,* which had been crossed out, and then uncrossed, and then crossed out again." },
      { s: 'ethan', f: 'neutral', t: "Number three's in there as a joke." },
      { s: 'kat', f: 'serious', t: "Number three is in there because you said, and I quote, 'first thing Monday.'" },
      { s: 'ethan', f: 'happy', t: "And it'll be first thing on a Monday. That's still true. I didn't say which one." },
      { n: "He wandered off down the snack aisle with his hands in his pockets, perfectly unbothered, reading every package like it might have a secret on the back, and came back holding a bag of chips with a picture of a shrimp on it and a can of something blue." },
      { s: 'ethan', f: 'happy', t: "Fun fact. There are something like fifty-five thousand of these stores in this country. Fifty-five thousand. We've been in six." },
      { s: 'kat', f: 'serious', t: "Oh nah. Put the blue one back. I don't trust anything that blue that isn't a Gatorade." },
      { n: "He put the blue one back, without a word, and picked up the green tea she pointed at instead, and Solar understood a lot about the two of them right there in the drinks aisle, under the hum of the fridges." },
      { s: 'kat', f: 'neutral', t: "Okay, but for real. You live here. What do we get. What's the order. I want a local's order." },
      { choose: [
        { t: "(Hand her an onigiri with salmon.)", notes: 3, flag: 'kat-r1-salmon', stat: { kindness: 1 }, then: [
          { s: 'kat', f: 'surprised', t: "Oh, it's *good.* Why is it good. It's gas-station food. It's sitting under a light." },
          { s: 'ethan', f: 'neutral', t: "It's not a gas station." },
          { s: 'kat', f: 'happy', t: "Everything's a gas station if you believe in yourself." }
        ] },
        { t: "(Hand her the fried chicken from the hot case.)", notes: 3, flag: 'kat-r1-chicken', then: [
          { n: "She took one bite standing by the hot case, and then a second one, and then turned slowly to Ethan with the look of a woman who'd seen the face of God and it was a chicken thigh in a paper sleeve." },
          { s: 'ethan', f: 'happy', t: "I'm getting four." }
        ] },
        { t: "(Hand her the melon bread.)", notes: 2, flag: 'kat-r1-melon', then: [
          { s: 'kat', f: 'neutral', t: "There's no melon in this." },
          { s: 'solar', f: 'neutral', t: "There's never melon in it." },
          { s: 'kat', f: 'happy', t: "I love that. That's so confident. That's a bread with a dream." }
        ] }
      ] },
      { n: "The man at the register rang them up without looking at any of them, and said thank you to the counter, and Kat thanked him back in Japanese that was mostly vowels and very, very sincere. He did not look up. On the way out she drew a small sad face beside number two." },
      { n: "Outside, Cosmo stood up when he saw them, slowly, with his whole body, like he'd been waiting for them for a year, and Wanda had the umbrella stand on its side." },
      { s: 'cosmo', f: 'happy', t: "..." },
      { s: 'wanda', f: 'happy', t: "Awoo! Awoo-woo!" },
      { s: 'kat', f: 'happy', t: "Hi, baby. Hi. Yes. We came back. We always come back." }
    ] },
    { after: '5/20', title: '2: car soccer', place: 'Paulownia Mall · Game Panic', time: 'Evening', music: 'joy', scene: [
      { n: "Game Panic at night was the noise of a hundred machines all trying to win the same argument, and in the middle of it, at the car soccer cabinet with the two seats and the screen that had a crack in one corner, Junpei was losing his mind." },
      { s: 'junpei', f: 'surprised', t: "Dude. DUDE. How are you doing that. The car's upside down. Why is the car upside down and still scoring." },
      { s: 'ethan', f: 'neutral', t: "You can steer in the air." },
      { s: 'junpei', f: 'serious', t: "You can WHAT?" },
      { n: "Ethan was sitting in the other seat as relaxed as a man in a bath, one hand on the wheel and the other holding a soda, flipping a cartoon car end over end through the air above the goal and putting the ball in the corner with the very edge of his bumper. He didn't even look pleased about it. He looked like someone watering a plant." },
      { s: 'kat', f: 'happy', t: "He's high Diamond. Almost Champ. At home, on the real version. He's been almost Champ for a year and a half. It's his whole personality." },
      { s: 'ethan', f: 'neutral', t: "One of my personalities." },
      { n: "Kat had dragged Solar over by the sleeve the second she'd seen her come in, and now stood behind the cabinet with her arms crossed and the specific posture of a woman at her boyfriend's little league game, which she evidently found both humiliating and the best thing that had ever happened to her." },
      { s: 'junpei', f: 'serious', t: "Okay, okay, one more. Best of seven. I wasn't warmed up. My hands were cold. That's a real thing, that's science." },
      { s: 'kat', f: 'serious', t: "Oh brother. Sit down, lil pup. He's been warmed up since 2019." },
      { s: 'junpei', f: 'surprised', t: "LIL WHAT?" },
      { choose: [
        { t: "Junpei, you're doing great.", notes: 2, then: [
          { s: 'junpei', f: 'happy', t: "SEE? Solar gets it. Solar believes in me." },
          { n: "Ethan scored again. Junpei's face went through several stages of grief in the time it took the replay to finish." }
        ] },
        { t: "(Take the seat. Play Ethan yourself.)", notes: 3, stat: { courage: 1 }, then: [
          { n: "She took the seat, and her hands did something with the wheel she didn't know they knew, and for about forty seconds it was close, and then Ethan flipped over her like a man stepping over a puddle and put it in." },
          { s: 'ethan', f: 'happy', t: "Oh, you're good. You're actually good. Your hands know stuff." },
          { s: 'solar', f: 'neutral', t: "They do that." }
        ] },
        { t: "(Stand with Kat and judge everyone.)", notes: 3, then: [
          { s: 'kat', f: 'happy', t: "Yes. Thank you. Arms crossed. Like this. We're the parents now." }
        ] }
      ] },
      { n: "They talked about games while the boys played, the way you talk at a party when the music's too loud, leaning in. Kat played Overwatch, a lot, support mostly because, she said, somebody had to keep these idiots alive and it was never going to be the idiots, and Smite when she wanted to be mean to strangers on purpose, and Solar heard herself say *Kiriko* before she could think about it, the way you say the name of a street you grew up on." },
      { s: 'kat', f: 'surprised', t: "Wait. You play? You main Kiriko? Okay, you're coming to Respawn with me one day. That's not a question." },
      { s: 'junpei', f: 'sad', t: "Seven to one. Seven to ONE." },
      { s: 'ethan', f: 'happy', t: "Good games, man. Really. You've got it. You just have to stop driving at the ball like it owes you money." },
      { s: 'ethan', f: 'neutral', t: "Anyway. I'm hitting the gym after this." },
      { n: "Kat did not even dignify that. Junpei put another coin in." }
    ] },
    { after: '6/3', title: '3: the diagnosis', place: 'Iwatodai Strip · Bookworms', time: 'Evening', music: 'tender', scene: [
      { n: "Bookworms smelled like it always did, paper and dust and the cup of tea the old man kept forgetting on the counter, and Ethan had disappeared into the manga in the back with the intensity of a man who'd just discovered the shelves went all the way to the ceiling. Kat stayed at the front, in the little section of English paperbacks that had come to this street from God knew where, and pulled out a psychology textbook with a cracked spine and somebody else's notes in the margin." },
      { s: 'kat', f: 'happy', t: "Oh, this is my exact edition. From undergrad. I sold mine for pizza money. This is a sign." },
      { s: 'bunkichi', f: 'neutral', t: "Three hundred yen. It has writing in it." },
      { s: 'kat', f: 'happy', t: "That's the best part. I love when someone else was confused first." },
      { n: "She paid for it, and then she sat down on the little step stool by the shelf, and looked up at Solar with an expression Solar didn't like at all, the friendly, patient one, like a doctor with a clipboard." },
      { s: 'kat', f: 'neutral', t: "Okay. Sit. I studied psych. I can diagnose anyone in, like, five minutes. Four if they're nervous. You're a little nervous." },
      { s: 'solar', f: 'neutral', t: "I'm not nervous." },
      { s: 'kat', f: 'serious', t: "You just said that like a person who's nervous. Okay. Love life. Go." },
      { n: "Solar didn't say anything, which, apparently, was the point. Kat watched her not say anything for a while, chin in her hand, like it was a page she was reading." },
      { ifRomance: 'akihiko', then: [
        { ifRomance: 'haechan', then: [
          { s: 'kat', f: 'surprised', t: "Oh. Oh, there's two. There's two, and they both know, and you love both of them, and you hate that that's true, and you're being so careful with everybody that you forgot to be careful with you." },
          { s: 'kat', f: 'sad', t: "...That's not a diagnosis. That's just a hard year. I'm sorry. I'll be nice about it." }
        ], else: [
          { s: 'kat', f: 'happy', t: "You're seeing someone. It's new, and it's good, and he's the kind who shows up early. You smiled when I said 'love life,' and then you tried to un-smile it. Too late. I saw it." },
          { s: 'kat', f: 'neutral', t: "He's very steady and you don't trust steady yet. That's the only note. Let him be boring at you. Boring's the good stuff." }
        ] }
      ], else: [
        { ifRomance: 'haechan', then: [
          { s: 'kat', f: 'neutral', t: "You're with someone, and it feels older than it is. Like you've done this before and you can't remember where. You touch your phone like it's going to say your name." },
          { s: 'kat', f: 'happy', t: "That's not a symptom. That's just a crush that already won." }
        ], else: [
          { ifTaken: [], then: [
            { s: 'kat', f: 'happy', t: "You're seeing someone. You keep checking the time like you're late for something nice. Don't be weird about it. Be happy about it. It's allowed." }
          ], else: [
            { ifCrush: { akihiko: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
              { ifCrush: { shinjiro: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
                { s: 'kat', f: 'surprised', t: "Oh, no. Two. Two boys, and they know each other, and one of them is going to take it very well and one of them is going to take it very quietly. You lean one way. You know which. Don't make me say it." }
              ], else: [
                { s: 'kat', f: 'happy', t: "There's a boy. He's very physical, he's out the door before you're awake, and you've started being awake for it. You haven't done anything about it. You haven't even admitted it to the mirror. You're waiting for him to notice, and he's the kind who needs it written on his hand." },
                { s: 'kat', f: 'neutral', t: "Write it on his hand." }
              ] }
            ], else: [
              { ifCrush: { haechan: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
                { s: 'kat', f: 'serious', t: "Okay, this is weird. You're in love with someone you haven't met yet. Or someone you met and forgot. Don't look at me like that. I don't make the rules, I just read them off your face." }
              ], else: [
                { ifCrush: { shinjiro: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
                  { s: 'kat', f: 'neutral', t: "He's the quiet one. He does something nice and then leaves the room so nobody can say thank you. You've been trying to say thank you for weeks." }
                ], else: [
                  { ifCrush: { jungwon: ['noticed', 'crush', 'puppy', 'almost'] }, then: [
                    { s: 'kat', f: 'happy', t: "There's a very polite boy and he is not being polite about you. He's being polite *at* you. That's different. That's a boy holding a door so he has a reason to stand there." }
                  ], else: [
                    { s: 'kat', f: 'serious', t: "Nobody. You're not into anybody. You're into not being into anybody, which is a whole different diagnosis." },
                    { s: 'kat', f: 'neutral', t: "You're holding still. Like you're waiting to find out where you're supposed to be first. That's fine. That's allowed too. Just don't hold still forever." }
                  ] }
                ] }
              ] }
            ] }
          ] }
        ] }
      ] },
      { choose: [
        { t: "...How did you get that from nothing?", notes: 3, stat: { knowledge: 1 }, then: [
          { s: 'kat', f: 'happy', t: "You blinked twice when I said 'love life.' Everybody has a tell. Ethan's is he starts telling you facts about octopuses." },
          { s: 'ethan', f: 'neutral', t: "(from the back) Octopuses have three hearts." },
          { s: 'kat', f: 'serious', t: "See?" }
        ] },
        { t: "That's not even close.", notes: 1, then: [
          { s: 'kat', f: 'happy', t: "Mm-hm. Okay. You said that faster than you've said anything all night." }
        ] },
        { t: "(Pull a book off the shelf and hide behind it.)", notes: 2, then: [
          { n: "She pulled a book off the shelf at random and opened it in front of her face. It was upside down. It was also, Kat informed her kindly, a book about grief, which was not the subtle exit she'd been going for." }
        ] }
      ] },
      { n: "Ethan came up from the back with a stack of six manga volumes and a book called *Strength Training for Beginners,* which he put on the counter with real purpose and paid for, and which Solar would bet her whole life she'd never see open." }
    ] },
    { after: '6/17', title: '4: picky', place: 'Iwatodai Strip · Hagakure', time: 'Evening', music: 'joy', scene: [
      { n: "Number one on the list had a whole system now. Kat kept a spreadsheet. The spreadsheet had a column for the broth, a column for the noodles, a column for whether the chef had looked at them like a weather event, and a column called ETHAN'S FACE, which was the most important column, because Ethan ate four things." },
      { s: 'kat', f: 'serious', t: "He doesn't eat green onion. He doesn't eat egg unless it's scrambled and he can't see it. He doesn't eat fish cake, or seaweed, or anything that 'looks back at him,' or anything with bones, or mushrooms, or bamboo, or corn in soup, because corn 'goes on a cob.'" },
      { s: 'ethan', f: 'neutral', t: "It does go on a cob." },
      { s: 'kat', f: 'serious', t: "So we order him ramen and he eats the noodles and drinks some of the broth and then I eat everything else and that's our relationship." },
      { n: "Hagakure was warm and loud and smelled like pork bones that had been simmering since before Solar was born, and the Master looked at Ethan's order, which Kat had written out for him on a napkin in careful katakana she'd copied off her phone, for a very long time." },
      { s: 'hgMaster', f: 'neutral', t: "...No onion. No egg. No naruto. No nori. No menma." },
      { s: 'hgMaster', f: 'neutral', t: "So. Noodles. In water." },
      { s: 'ethan', f: 'happy', t: "In broth. The broth's the best part. I'm not an animal." },
      { n: "The Master made it. He made it with his whole chest, the way he made everything, and set it down in front of Ethan with nothing floating on it at all, a bowl so plain it looked like an apology, and then, after a moment, set a single slice of chashu on the very edge of the bowl, like a dare." },
      { choose: [
        { t: "(Watch Ethan eat the chashu.)", notes: 3, then: [
          { n: "Ethan looked at the chashu. The Master looked at Ethan. Kat looked at Solar. Ethan ate it, slowly, with the face of a man who had been sure about something for twenty-something years and had just been told otherwise." },
          { s: 'ethan', f: 'surprised', t: "...Oh, that's incredible. Okay. I eat that now. That's five things." },
          { s: 'kat', f: 'happy', t: "OH MY GOD. Write it down. Somebody write it down." }
        ] },
        { t: "(Eat his toppings with Kat.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "She and Kat split everything Ethan had refused in a little dish between them, the egg, the onion, the bamboo, and Kat said this was the actual secret to being with a picky eater, you got to eat twice." }
        ] },
        { t: "Is this the best ramen on Port Island?", notes: 2, then: [
          { s: 'kat', f: 'neutral', t: "It's top three. I don't want to peak this early. If you find the best one already, where do you go from there?" }
        ] }
      ] },
      { n: "Kat was quiet for a second, with the broth steaming up into her face and the noise of the kitchen around them, and then she said, to her bowl, that it was really good, and that they really missed California sometimes, and Ethan looked at her, and she looked at him, for exactly one second longer than the sentence needed." },
      { s: 'ethan', f: 'neutral', t: "Very strict country." },
      { s: 'kat', f: 'neutral', t: "Very strict." },
      { n: "That was the end of that. Ethan said he'd hit the gym tomorrow, since this was basically carb loading, and Kat wrote a score in the spreadsheet with a number she wouldn't let either of them see." }
    ] },
    { after: '7/1', title: '5: tinder', place: 'Iwatodai · Riverside', time: 'Evening', music: 'night', scene: [
      { n: "The river at night was black and slow, with the lights of the far bank laid across it in long gold strips that broke whenever a fish moved, and Wanda wanted to go in it. Wanda had wanted to go in it for four blocks. Wanda wanted to go in every body of water she'd ever seen, including, once, a puddle with a cat in it." },
      { s: 'wanda', f: 'surprised', t: "Awoo?!" },
      { s: 'ethan', f: 'neutral', t: "No, baby. That's not ours. That's Japan's." },
      { n: "Cosmo walked beside Solar with the stiff, regal stride of a dog who had decided she was acceptable, and every few steps he leaned his whole grey shoulder against her knee, as if to check she was still there and hadn't done anything embarrassing." },
      { s: 'kat', f: 'happy', t: "He likes you. He never does that. He doesn't even do that to Ethan." },
      { s: 'ethan', f: 'sad', t: "He does that to me sometimes." },
      { s: 'kat', f: 'neutral', t: "He does it when you have cheese." },
      { choose: [
        { t: "How did you two meet?", notes: 3, then: [
          { s: 'kat', f: 'flustered', t: "Tinder. Don't." },
          { s: 'ethan', f: 'happy', t: "She super-liked me." },
          { s: 'kat', f: 'serious', t: "I did NOT, my thumb SLIPPED, I've told you this, I was swiping and my thumb went up instead of sideways." },
          { s: 'ethan', f: 'happy', t: "For eleven minutes she messaged me about my dog in my third picture. Turned out it wasn't my dog. It was my friend's dog. She was very upset." },
          { s: 'kat', f: 'neutral', t: "I'm still upset. He let me believe in that dog for eleven minutes." }
        ] },
        { t: "(Let Cosmo lean.)", notes: 2, stat: { kindness: 1 }, then: [
          { n: "She let him lean. He leaned harder. By the bridge she was walking at an angle and he looked extremely satisfied about it." }
        ] },
        { t: "Why huskies?", notes: 2, then: [
          { s: 'ethan', f: 'neutral', t: "Fun fact, they were bred to run all day in the cold, pulling sleds. Sixty, seventy miles." },
          { s: 'kat', f: 'serious', t: "And now they live in an apartment in a port city and they think the air conditioner is God. Next question." }
        ] }
      ] },
      { n: "Ethan did a voice for a while, then, a voice from some cartoon about a sasquatch and two Australian guys that Solar had never seen and would apparently need to see, and Kat laughed so hard at it she had to stop walking, and he kept going, because she was laughing, which was clearly the only reason he'd ever done a voice in his life." },
      { s: 'ethan', f: 'neutral', t: "Anyway. This counts as cardio." }
    ] },
    { after: '7/22', title: '6: grandmaster', place: 'Port Island Station · Respawn', time: 'Evening', music: 'city', scene: [
      { n: "Respawn was dark and cold and blue, the way places full of computers always were, rows of monitors lighting up rows of faces, the hum of fans, somebody three rows back yelling a single English word at his screen over and over. Kat had booked two seats side by side with the confidence of a woman who'd been planning it since Game Panic, and one seat for Ethan on the end, who sat down and put on headphones and opened a game where a man in armor kept dying to the same tree." },
      { s: 'ethan', f: 'neutral', t: "This is fine. This boss is completely fair." },
      { s: 'kat', f: 'neutral', t: "He's been on that boss since Thursday." },
      { s: 'kat', f: 'happy', t: "Okay. Duo queue. I'll go Ana, you go Kiriko, and if you're bad I'm going to be so nice about it you'll never recover." },
      { n: "Solar put her hands on the keyboard. She didn't know what she was going to do with them. Her hands knew. They went to the keys the way you'd reach for the light switch in your own bedroom in the dark, without looking, already there, and the fox girl on the screen moved like she'd been waiting a long time for somebody who knew her to show up." },
      { n: "She threw the bell at the exact second their tank was about to die. She threw it again a fight later, a half second before a sniper took Kat's head off, and the sniper's shot went into nothing. She teleported to somebody across the map without thinking and cleansed a sleep that hadn't finished landing. Her body was having a much better time than she was." },
      { s: 'kat', f: 'surprised', t: "...Is this girl being for real?" },
      { s: 'kat', f: 'surprised', t: "Ethan. Ethan. Take your headphones off. She's cracked. She's actually cracked. W. W Kiriko. Chat, is this real?" },
      { s: 'solar', f: 'neutral', t: "Who's chat?" },
      { s: 'kat', f: 'happy', t: "It's a SuperTF thing. It's a streamer. Don't worry about it. W is good. You're getting Ws." },
      { ifMet: 'kiriko', then: [
        { s: 'kat', f: 'neutral', t: "There's a girl at the shrine who does a Kiriko cosplay so good it's honestly upsetting. The bells are real. I asked. She looked at me like I was the weird one." },
        { s: 'solar', f: 'neutral', t: "She's very committed." }
      ] },
      { choose: [
        { t: "(Play it off.) I'm alright.", notes: 2, then: [
          { s: 'kat', f: 'serious', t: "You're Grandmaster at minimum. Don't be humble at me. Humble's for people who are mid." }
        ] },
        { t: "(Throw a bell at Kat when she's at four HP, just to be mean.)", notes: 3, stat: { proficiency: 1 }, then: [
          { s: 'kat', f: 'happy', t: "You waited. You WAITED. You let me get scared first. Oh, that's evil. That's the most support thing I've ever seen in my life." }
        ] },
        { t: "I don't know where I learned this.", notes: 3, then: [
          { s: 'kat', f: 'neutral', t: "Hm." },
          { n: "Kat looked at her a second longer than usual, not the doctor look, a different one, and then said only that hands remember stuff the rest of you doesn't, that she'd read that somewhere, and queued them again." }
        ] }
      ] },
      { n: "They won six in a row and lost one, which Kat said didn't count because their tank had been, quote, a lil pup, and on the end of the row Ethan finally beat the tree, and took his headphones off, and said *oh, I need to go to the gym,* to nobody, with real feeling, and then opened the next area." }
    ] },
    { after: '8/12', title: '7: a day', place: 'Iwatodai Strip', time: 'Evening', music: 'rain', scene: [
      { n: "Kat was in a mood. Solar could tell from the other end of the street, from the way she was standing, arms folded tight, chin up, a black dress and boots and her eyeliner very sharp, as if she'd put her whole face on as armor and was daring the Strip to say something about it." },
      { s: 'kat', f: 'serious', t: "Don't. I know. I'm in a mood. Hi. Hi, I'm happy to see you, I'm just in a mood." },
      { n: "Everything was wrong, for the next twenty minutes, in detail. The man who'd let his umbrella drip on Cosmo was wrong. The ramen place with the line was wrong, for having a line, and the people in the line were wrong, for being in it. A boy on a bike rode through the middle of them on the pavement and she watched him go with an expression that could've cut glass." },
      { s: 'kat', f: 'serious', t: "Is this guy being for real? On the sidewalk? With his whole chest?" },
      { s: 'kat', f: 'serious', t: "And my boss sent an email that just said 'Thoughts?' One word. Thoughts. About a forty-page document. I have thoughts. I have so many thoughts. He's not ready for my thoughts." },
      { n: "Ethan didn't argue with any of it. He didn't try to fix it, either. He just stayed half a step beside her with both leashes in one hand, and agreed when agreeing was right, and didn't when it wasn't, and at the vending machine on the corner he bought her the peach water she liked without asking, and opened it, and handed it to her, and she took it without looking." },
      { choose: [
        { t: "(Let her be in a mood. Walk with her.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "Solar let her be in a mood. She didn't try to cheer her up, and she didn't take it personally, and she walked on Kat's other side, so that between her and Ethan there wasn't a lot of room for the Strip to get at her." }
        ] },
        { t: "The bike guy was being for real, though.", notes: 2, then: [
          { s: 'kat', f: 'serious', t: "I KNOW. Thank you. Finally a witness." }
        ] },
        { t: "You're being a lot right now.", notes: 1, then: [
          { s: 'kat', f: 'serious', t: "I'm aware, babe. I'm aware I'm being a lot. I'm the first to know. Being told doesn't help." },
          { n: "She didn't say it unkindly. She said it like somebody reading the weather report on her own life." }
        ] }
      ] },
      { n: "And then, at the corner, with no warning at all, it turned. Solar saw it go. Kat stopped walking and looked at her properly, as if she'd only just arrived, and her face did something soft and open and a little embarrassed, and she put her arms around her right there by the vending machine and held on." },
      { s: 'kat', f: 'sad', t: "I'm sorry. I was being so mean. Not at you. I'd never be mean at you. You came out to walk with us and I've just been complaining at the sky." },
      { s: 'kat', f: 'happy', t: "Have you eaten? You haven't eaten. You never eat. Ethan. She hasn't eaten. We're getting her something. Anything she wants. Wanda, give her a kiss." },
      { s: 'wanda', f: 'happy', t: "Awoo!" },
      { n: "Wanda gave her a kiss, which was mostly tongue and partly nose, and Ethan caught Solar's eye over the top of Kat's head and gave her a very small nod, not an apology, more like a thank you, the look of someone who'd been doing this a long time and didn't mind doing it, and had just found out he wasn't the only one." },
      { s: 'ethan', f: 'neutral', t: "She has days. We do days. It's fine. It's a whole thing, but it's fine." }
    ] },
    { after: '9/2', title: '8: the mall', place: 'Paulownia Mall', time: 'Evening', music: 'city', scene: [
      { n: "Kat had a shopping list for Solar and Solar was not on it, technically, Solar was the person the list was for. Kat walked through Paulownia like a general reviewing her troops, past the boutiques, past the shoe shop, straight to the one with the black lace and the platform boots and the plaid skirts and the little chains, where the girl at the counter had dyed her hair the color of a bruise and looked up at Kat like she'd finally met her people." },
      { s: 'kat', f: 'happy', t: "Okay, you're always in the uniform or in, like, a nice sweater. Nice sweaters are fine. I'm not going to make you goth. I'm going to make you goth for one evening." },
      { s: 'ethan', f: 'neutral', t: "I'm going to be over here. Holding things." },
      { n: "He was, in fact, holding everything already, her bag, her drink, both their jackets and a shopping bag from the Sanrio shop across the way, pink, with a little cartoon rabbit on it, which he carried with no embarrassment whatsoever, because she'd asked him to." },
      { choose: [
        { t: "(Let her dress you.)", notes: 3, stat: { charm: 1 }, then: [
          { n: "She let Kat dress her. A black mesh top over a camisole. A plaid skirt. A choker with a little silver star. Boots with a sole so thick Solar was taller than Ethan for the first time, and Kat stood back and put both hands over her mouth." },
          { s: 'kat', f: 'happy', t: "Oh, you're DANGEROUS. Oh, somebody's going to have a really bad day because of you. Ethan, look at her." },
          { s: 'ethan', f: 'happy', t: "Looks good. Real good. Dangerous. I agree with the dangerous thing." }
        ] },
        { t: "(Pick something for Kat instead.)", notes: 2, then: [
          { n: "She picked a jacket for Kat instead, a cropped black one with silver buckles down one side, and Kat held it up to herself in the mirror and went quiet, which Solar was learning was how she said yes." }
        ] },
        { t: "(Hide behind a rack.)", notes: 1, then: [
          { s: 'kat', f: 'serious', t: "I can see your shoes. You're wearing loafers. I can see your loafers, Solar." }
        ] }
      ] },
      { ifMet: 'kuromi', then: [
        { n: "On the way out they passed the Sanrio shop window, where a small army of plush rabbits and black-hooded jesters stared back at them, and Kat stopped dead, and pressed one finger to the glass, as if she'd just remembered something important." },
        { s: 'kat', f: 'neutral', t: "Wait. You said you live with a girl called Kuromi. Like. Kuromi. Like THAT Kuromi." },
        { s: 'solar', f: 'neutral', t: "She's heard it before." },
        { s: 'kat', f: 'happy', t: "Okay, I need to meet her. I need to meet her so bad. I'm going to be so normal. I'm going to be so normal it's scary." }
      ] },
      { n: "Ethan walked past the sports shop on the way to the exit, the one with the treadmills in the window, and slowed down, and looked in at the dumbbells for a long, meaningful moment, the way you look at a house you're thinking about buying, and kept walking." },
      { s: 'ethan', f: 'neutral', t: "Soon." }
    ] },
    { after: '9/23', title: '9: the usual', place: 'Port Island · Convenience Store', time: 'Evening', music: 'joy', scene: [
      { n: "It was the same konbini. The same white rectangle at the end of the street, the same doors opening for nobody, the same umbrella stand, which Wanda, who was older now and every bit as stupid, still went for every single time." },
      { n: "They went in. The man at the register looked up, for the first time in the history of the world, and saw Kat and Ethan, and saw the dogs outside the glass, and reached under the counter without a word, and put two things on it." },
      { ifFlag: 'kat-r1-salmon', then: [
        { n: "A salmon onigiri. A green tea." }
      ], else: [
        { ifFlag: 'kat-r1-chicken', then: [
          { n: "Four pieces of fried chicken from the hot case, in their paper sleeves. A green tea." }
        ], else: [
          { n: "A melon bread with no melon in it. A green tea." }
        ] }
      ] },
      { s: 'clerk', f: 'neutral', t: "...The usual?" },
      { n: "Kat made a noise Solar had never heard a human being make. It started somewhere very low and went up. She grabbed Ethan's arm with both hands and then grabbed Solar's with one, and held on to both of them, and said *yes* to the man at the register in perfect, careful Japanese, and then said *thank you* three times, and then, quietly, under her breath, *we're so back.*" },
      { s: 'ethan', f: 'happy', t: "Number two. That's number two. We did number two." },
      { s: 'kat', f: 'happy', t: "We're locals. We're LOCALS. He knows our order. I'm going to cry in a convenience store. That's the most local thing you can possibly do." },
      { choose: [
        { t: "Congratulations. Really.", notes: 3, stat: { kindness: 1 }, then: [
          { s: 'kat', f: 'happy', t: "You were there for the first one. You picked it. You're on the list now. You're a founding member." }
        ] },
        { t: "He probably knew your order months ago.", notes: 2, then: [
          { s: 'kat', f: 'surprised', t: "...Do you think? Do you think he knew and he was just waiting to see if we were serious? Oh, that's so much better. He was testing us." }
        ] },
        { t: "(Buy the man a coffee.)", notes: 2, then: [
          { n: "She bought a can of coffee and put it back on the counter and pushed it toward him. He looked at it, and at her, and nodded once, very slightly, and put it under the counter for later. That was, as far as Solar could tell, the whole conversation." }
        ] }
      ] },
      { n: "Ethan bought a protein bar on the way out. He held it up to Solar like it was evidence for the defense." },
      { s: 'ethan', f: 'neutral', t: "This is step one. You start with the bar. Then the gym is just where you go to eat the bar." }
    ] },
    { after: '10/14', title: '10: sit', place: 'Port Island · Pier', time: 'Evening', music: 'tender', scene: [
      { n: "Number four on the list had been there since the beginning and had never come close. *Get Cosmo and Wanda to sit still at the pier for ONE photo.* They'd tried in May, when Wanda had gone into the sea, sort of, up to her armpits, off the little steps by the bait shop. They'd tried in July, when Cosmo had sat beautifully and refused to face the camera, out of what Kat called artistic principle. They had tried, by her count, eleven times." },
      { n: "The pier at night was cold already, the wind coming off the water with salt in it, and the lights along the railing made little circles on the boards, and out on the black bay the ferries went by lit up like birthday cakes. Kat had treats in one pocket and her phone in the other. Ethan had the leashes. Solar had been given the job, in a very serious voice, of standing behind Kat and being calm." },
      { s: 'kat', f: 'neutral', t: "Okay. Okay. Cosmo. Sit." },
      { s: 'cosmo', f: 'serious', t: "..." },
      { n: "Cosmo looked at her for a long moment, the way a cat looks at you, and then sat, slowly, when he had decided it was his own idea. Wanda saw him sit and lay down flat on the boards with all four legs out like a rug, which was something, but it wasn't a sit." },
      { s: 'wanda', f: 'flustered', t: "Awoo..." },
      { n: "While they waited for Wanda to remember who she was, Kat sat down on the bench with the phone in her lap, and Solar sat with her, and for a while nobody said anything, and the water slapped at the pilings under them." },
      { s: 'kat', f: 'neutral', t: "Can I tell you something kind of stupid?" },
      { s: 'kat', f: 'neutral', t: "Before him I was in a really bad place. Like, not a sad week. A not-getting-up place. For a while. And he didn't fix it. He didn't try to, which I think is why it worked. He just kept showing up. With food. With dumb videos. He'd sit on the floor of my room and play his car game with the sound off so I wouldn't be by myself." },
      { s: 'kat', f: 'sad', t: "I don't know. He kind of saved me. Don't tell him I said 'saved.' He'll get weird about it and do a fact at me." },
      { n: "She wasn't looking at Solar while she said it. She was looking at Ethan, who was crouched on the boards with Wanda's whole face in his hands, telling her very seriously that she was the smartest girl in Japan." },
      { s: 'kat', f: 'neutral', t: "You've got that look sometimes. Like somebody who got found recently. I know that look. I had it for a year." },
      { choose: [
        { t: "...Yeah. I think I did.", notes: 3, then: [
          { s: 'kat', f: 'happy', t: "Good. Let them. That's all. That's the whole advice. Let them find you." },
          { n: "She bumped her shoulder against Solar's, once, the way Cosmo did with his whole body, to check she was still there." }
        ] },
        { t: "(Don't say anything. Lean on her shoulder.)", notes: 3, stat: { kindness: 1 }, then: [
          { n: "Solar didn't say anything. She leaned on Kat's shoulder instead, and Kat leaned back, and they sat there like that, two people on a bench on a pier in a city neither of them had been born in, being found." }
        ] },
        { t: "He's a good one.", notes: 2, then: [
          { s: 'kat', f: 'happy', t: "He's the best one. He's annoying. He's the best one." }
        ] }
      ] },
      { s: 'ethan', f: 'surprised', t: "Kat. KAT. Phone. Now. Now now now." },
      { n: "Wanda was sitting. Wanda was sitting upright, beside Cosmo, both of them on the boards in the circle of light from the lamp, two grey-and-black shapes with their ears up and the bay behind them, and Cosmo, for the first time in recorded history, was looking at the camera, and Kat was up off the bench so fast the bench moved." },
      { n: "She got the picture. One. Then Wanda sneezed, and fell over sideways onto Cosmo, and Cosmo got up with the profound dignity of a dog who had been betrayed by his family, and walked to the end of the leash and sat facing the sea, and would not turn around for the rest of the night." },
      { s: 'kat', f: 'happy', t: "Number four. NUMBER FOUR. Oh my God, look at them. Look at my children." },
      { s: 'cosmo', f: 'sad', t: "Hmph." },
      { s: 'wanda', f: 'happy', t: "Awoo-woo-woo!" }
    ] }
  ],
  afterMax: [
    { title: 'number one', place: 'Iwatodai Strip · Hagakure', time: 'Evening', scene: [
      { n: "The spreadsheet was finished, more or less. Kat had eaten in eleven ramen shops on Port Island and the far side of the river and was prepared, tonight, under protest, to announce a winner, which turned out, after a long and dramatic pause, to be the one they were sitting in." },
      { s: 'kat', f: 'happy', t: "It's here. It was always here. The first one we had with you. I'm furious about it." },
      { s: 'ethan', f: 'neutral', t: "I said it was the first one." },
      { s: 'kat', f: 'serious', t: "You're not allowed to be right by accident. That's why there's a rule." },
      { s: 'hgMaster', f: 'neutral', t: "No onion. No egg. One chashu." },
      { n: "The Master set Ethan's bowl down without being asked, with the single slice of pork balanced on the edge of it, and Ethan looked up at him with the face of a man being recognized by his own country." }
    ] },
    { title: 'the gym', place: 'Iwatodai Strip', time: 'Evening', scene: [
      { n: "Ethan was wearing gym clothes. Actual ones, a grey T-shirt and shorts and sneakers that had clearly been bought this week, standing outside Wild-Duck Burger with a bag from Wild-Duck Burger." },
      { s: 'ethan', f: 'neutral', t: "I went. I went in. I looked at it." },
      { s: 'kat', f: 'serious', t: "He signed up for a membership, did a tour, and then the guy asked him if he wanted to try the rowing machine and he said 'next time' and left." },
      { s: 'ethan', f: 'happy', t: "Next time. That's a commitment. That's me committing." },
      { choose: [
        { t: "That counts.", notes: 0, then: [
          { s: 'ethan', f: 'happy', t: "Thank you. See? Solar gets it. Number three's basically done." }
        ] },
        { t: "That doesn't count.", notes: 0, then: [
          { s: 'kat', f: 'happy', t: "Thank you. I've been saying that for an hour. He ate a burger in his gym clothes, Solar." }
        ] }
      ] }
    ] },
    { title: 'locals', place: 'Iwatodai · Riverside', time: 'Evening', scene: [
      { n: "The riverside on a weeknight, the dogs, the three of them, nothing to do. The old woman who fed the pigeons by the bridge knew the dogs' names now and said them in her own way, *Kosumo, Wanda-chan,* and Cosmo let her pat him, which he let nobody do, and Wanda tried to eat her bag." },
      { s: 'kat', f: 'happy', t: "She knows their names. Everybody knows their names. Nobody knows ours. That's fine. That's correct. They're the famous ones." },
      { s: 'ethan', f: 'neutral', t: "Fun fact. Sea otters hold hands when they sleep so they don't drift apart." },
      { s: 'kat', f: 'neutral', t: "Why." },
      { s: 'ethan', f: 'neutral', t: "No reason." },
      { n: "He took her hand. She let him. Cosmo leaned on Solar's knee. Wanda found a crab." }
    ] }
  ]
});
