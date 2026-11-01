/* Phone contact cards and ordinary-day invites (2026-11-01), writer 4: ann, haru, kasumi, kuromi, mymelody, judy, aphrodite,
   kiriko, mercy, rohan, sebastian, widowmaker, rio, saori. Format: core.js FemcLife header (life.js). */
(() => {
  const C = (window.FEMC_GAME_CONTACTS ||= {});
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const inv = (id, o) => { (X[id] ||= {}).dayInvite = o; };

  C.ann = {
    food: 'Crepes, ranked strictly. Soggy loses a whole point.',
    learned: {
      2: 'Grew up as a coat hanger for designer parents. Hates being called "the face."',
      4: "Doesn't let things go anymore. Says it like a warning. It is one.",
      6: 'Calls her best friend every Friday at seven, whether it rings through or not.',
      8: 'Can spot a fake face from across a mall. Mine included.',
      10: 'Forty-one crepes in six months. Would rather come back every time than never leave.'
    }
  };
  inv('ann', {
    ask: ["SOLAR. free later?? fountain. i have opinions about a crepe", "r u busy today!! the mall is being cute at me again ♡", "come to the fountain later?? i'll buy. modeling money ✨"],
    ok:  ["YAY!! fountain ♡ don't be late", "omg yes. best. ur the best"],
    no:  ["nooo ok!! next time ♡", "boo. fine. i'll eat ur share"],
    sad: ["ok the pigeons and i have noticed a pattern. no pressure!! ♡", "it's fine!! i'm ranking crepes without u. it's going terribly"]
  });

  C.haru = {
    hobbies: 'Rooftop gardening. Roasting her own coffee beans.',
    learned: {
      2: "Answers her father's secretary on the second call. Always very polite.",
      4: 'Carries a ring on a chain, not her finger. Knows exactly what the difference means.',
      6: "Wants a café someday. Eight seats, nobody's name over the door.",
      8: 'Has practiced saying no in the mirror. Gets as far as "Father, I."',
      10: "Never hurry the part where it's deciding. Coffee, or anything else."
    }
  };
  inv('haru', {
    ask: ["Good morning! Are you free later? I'll be up on the roof with the tomatoes. 🌱", "I've roasted something new. Would you come up to the roof this afternoon? Fufu.", "The garden would love a visitor today. So would I. Only if you're free. 🌷"],
    ok:  ["Wonderful! I'll save you the good cup. 🌸", "Lovely. I'll pour yours the moment I hear the door."],
    no:  ["That's quite all right! Another day. 🌸", "Of course. The radishes and I will manage. Fufu."],
    sad: ["I seem to have made too much coffee again. Fufu. I'll keep a cup warm anyway.", "The tomatoes asked about you. I told them you're busy. They're very patient. So am I."]
  });

  C.kasumi = {
    hobbies: 'Rhythmic gymnastics. The ribbon is her favorite.',
    learned: {
      2: 'Her feet have known the same landing since she was nine.',
      4: 'Talks about Dr. Maruki, the school counselor, like he fixes everything.',
      6: 'Asks for honest scores, not nice ones. Can always tell which she got.',
      8: 'Thinks the ribbon is a mirror. Says it kindly, then means it.',
      10: "Built a routine out of what her body does when she isn't watching."
    }
  };
  inv('kasumi', {
    ask: ["Senpai! Are you free later? The light at the shrine is going to be perfect! 🎀", "Good morning, Senpai! Will you watch my routine today? Honestly, not nicely!", "Senpai, the stones are dry! Come to the shrine later? It's a sign! 🎀"],
    ok:  ["Yay! I'll save you the good step, Senpai! 🎀", "Thank you! I'll warm up so I'm ready when you get there!"],
    no:  ["That's okay! Next time, Senpai! 🎀", "No problem! I'll practice extra so it's better for you."],
    sad: ["Senpai, I've been practicing to an empty step. It's very quiet! I'm fine! 🎀", "The judge's seat is still free whenever you want it. I'm keeping it clean!"]
  });

  C.kuromi = {
    birthday: { t: '10/31', rank: 8 },
    hobbies: { t: 'Pranks, mostly on Junpei. Romance manga, strictly for research.', rank: 7 },
    learned: {
      2: 'Keeps a grudge notebook. Nobody is supposed to read it. Everybody does.',
      4: 'Reads shoujo manga "for evil research." Roots for the rival, not the heroine.',
      6: "Sits up at night outside My Melody's door. Never tells her.",
      8: "Her birthday falls on Halloween. Insists that means it doesn't count. It counts.",
      10: 'Would rather stand on the stage and lose than hide and never find out.'
    }
  };
  inv('kuromi', {
    ask: ["RIVAL. lounge. tonight. dont be late 🖤", "r u free tonight. i have a plan. its EVIL. its also snacks", "rival meeting later. downstairs. attendance is MANDATORY 💀"],
    ok:  ["heh. PERFECT 💀", "GOOD. bring snacks and ur worst ideas"],
    no:  ["UGH. fine. traitor", "boooo. ur in the notebook now"],
    sad: ["ok thats THREE. ur in the notebook. in pen. (its a small entry)", "whatever. the lounge is fine without u. its fine. its SO fine 🖤"]
  });

  C.mymelody = {
    hobbies: 'Baking, Wednesday evenings in the dorm kitchen.',
    learned: {
      2: 'Has never lost anything but one hair ribbon. It was in her pocket.',
      4: 'Always knows when Kuromi is listening behind the door. Never says so.',
      6: "Stops hearing compliments when they come too often. Says she hears all of mine.",
      8: "Everything she bakes is her mama's recipe. Wonders what hers would taste like.",
      10: 'Made something all her own. It was terrible first. Then it was okay.'
    }
  };
  inv('mymelody', {
    ask: ["Senpai! I'm baking tonight. Will you come to the kitchen? I'll save you the flakes!", "Good morning, Senpai! The butter is softening for this evening. Are you free?", "Senpai, would you come to the kitchen later? Koromaru-kun is already in charge of the floor."],
    ok:  ["Yay! I'll put the kettle on when it's nearly time!", "Oh, good! I'll make the butter extra soft for you."],
    no:  ["That's all right! There'll be a slice on the counter for you.", "Okay! You don't have to carry chairs tonight. Rest, Senpai."],
    sad: ["I've been leaving a slice on the counter. It's always gone by morning, so that's nice!", "You must be very busy carrying chairs. I'll keep baking. The kitchen light will be on."]
  });

  C.judy = {
    hobbies: 'Building braindance rigs from arcade parts. Diving.',
    learned: {
      2: 'Wants to make braindances that help people feel less alone.',
      4: 'Keeps thirty seconds of someone she lost. Has never once edited it.',
      6: 'Dives down to drowned places for the quiet. Two tugs means okay.',
      8: 'Thinks wanting to rest might be giving up. Is learning it might not be.',
      10: "Recorded this whole year when I wasn't looking. Didn't edit a single frame."
    }
  };
  inv('judy', {
    ask: ["hey. u free tonight? escapade's gonna be dead. come keep me company", "choom. later? got somethin to show u. its wired. mostly", "wanna hang tonight? jukebox needs yellin at and i need a witness"],
    ok:  ["preem. i'll be by the jukebox", "nice. door's open. kinda"],
    no:  ["no prob. rain check", "all good choom. another time"],
    sad: ["guess the jukebox and me are a thing now. it plays the same three songs. kinda like me", "no stress choom. i'm around. always got a stool open"]
  });

  C.aphrodite = {
    learned: {
      2: 'The most looked-at thing in any room. Nobody gets close enough to hold on.',
      4: 'Told Ares no for the first time in four thousand years. Hated that he left.',
      6: "Can't tell if anyone's ever liked her, or only the glow.",
      8: 'Says love is grabbing hold before you decide. Her hands know how now.',
      10: 'Would write "to the warmest" on the apple now. Not "the fairest."'
    }
  };
  inv('aphrodite', {
    ask: ["Little sun. Your goddess requests your presence later. The station. Be radiant.", "I am bored and beautiful. Come to the concourse later and fix the first one.", "Little sun. I require a witness today. To me, mostly. Are you free?"],
    ok:  ["Of course you said yes. I'll be by the ticket gates, being adored.", "Good. Hurry a little. Not too much. Arrive well."],
    no:  ["...No one says no to me. How novel. Again.", "Very well. I shall be adored by strangers. It is not the same."],
    sad: ["Three times, little sun. Now a goddess is counting. Look what you've done.", "Worshipped all week by strangers. Very dull. The bench misses you. I don't. A bit."]
  });

  C.kiriko = {
    food: { t: "Taiyaki, three at a time. Grandma's rule.", rank: 6 },
    hobbies: { t: 'Running the roofs at night. Drawing fortunes for everyone.', rank: 3 },
    learned: {
      2: 'A fox spirit came with her from Kanezaka. It only acts like that with her.',
      4: 'Can feel people far away who pick her. Likes falling asleep to it.',
      6: "Grandma's rule: taiyaki come in threes, or the fish gets lonely.",
      8: 'Draws a fortune for everyone. Even the people who scare her.',
      10: 'Decided I am her best friend in every world. The gods have been informed.'
    }
  };
  inv('kiriko', {
    ask: ["u free later?? shrine. snacks. fortune 🦊", "i drew ur fortune already. come get it this afternoon before it gets impatient", "steps later? i have two melon pan and one stomach. help"],
    ok:  ["yay 🦊 i'll save u the good step", "ok ok ok come up the stairs. all of them lol"],
    no:  ["boo. ok. ur fortune will wait", "fine 😔 i'm telling the foxes"],
    sad: ["ur fortune's been waiting so long it's turned into a small blessing. still urs 🦊", "the foxes keep asking where u are. i told them ur busy. they think ur dodging"]
  });

  C.mercy = {
    learned: {
      2: "Does the arithmetic of who to save. It doesn't help at three in the morning.",
      4: "Won't go down to talk until she has something to say that isn't an apology.",
      6: 'The last person to pack her lunch was her mother, in Switzerland.',
      8: 'Very, very stubborn. From a distance, she says, it looks like bravery.',
      10: '"Heroes never die" means nobody gets left behind. She checked.'
    }
  };
  inv('mercy', {
    ask: ["Free later? I have a break and no one to spend it on but the vending machine.", "Solar. The coffee here is still a crime. Come up later and commit it with me.", "Have you eaten today? Don't answer by text. Come up later and tell me in person."],
    ok:  ["Wunderbar. Third floor, then up.", "Good. I'll pretend I'm not waiting."],
    no:  ["Of course. Eat something. That is a medical opinion.", "Another time, then. Sleep, Liebling."],
    sad: ["Three missed appointments. As your doctor, I'm concerned. As myself, a little sulky.", "The vending machine and I are getting on very well. Don't let that worry you. Much."]
  });

  C.rohan = {
    learned: {
      2: 'Believes the last page is the only one that matters.',
      4: 'Can turn people into books. Asked me first anyway, and took "not yet."',
      6: 'Once licked a spider for a chapter. Reports it tasted like nothing.',
      8: "Couldn't read the most important page of his own life for fifteen years.",
      10: 'Has drawn me over a hundred times. Still finds something new every time.'
    }
  };
  inv('rohan', {
    ask: ["Are you free later? I need a reference model. Bookworms.", "Come to Bookworms later. The light at the back table is good. It's for research.", "I have new pages. You may look at them later. Don't be late."],
    ok:  ["Good. Back table. Don't make it a thing.", "Obviously."],
    no:  ["Unacceptable. ...Fine.", "Your loss. It was going to be a very good drawing."],
    sad: ["Three declines. I'm drawing you from memory. It's going perfectly. Don't flatter yourself.", "The chair at the back table is still yours. I've been told that's sentimental. I disagree."]
  });

  C.sebastian = {
    hobbies: 'Running a tabletop campaign. Writing code. Rescuing frogs.',
    learned: {
      2: 'Wrote a character called Solarion three years ago. Never wrote her ending.',
      4: 'Lives in a basement back home. Always says he could leave. Always could.',
      6: 'Rides until the road ends. Used to think turning around was losing.',
      8: 'Stands at the back of everything he loves, so nobody sees him like it.',
      10: 'Has about forty dice. Gave me the lucky one.'
    }
  };
  inv('sebastian', {
    ask: ["hey. you free later?", "game panic tonight? the cabinet in the back might be free", "got a campaign idea. want to hear it later. under the awning"],
    ok:  ["cool. see you there", "ok. ill save you the good stool"],
    no:  ["no worries", "ok. another time"],
    sad: ["its fine. the awning and me have an understanding", "ok. ill stop asking so much. still here though. if you want"]
  });

  C.widowmaker = {
    learned: {
      2: 'Sees everything through a scope. Says she is in none of it.',
      4: 'Her name was Amélie once. Nobody else may use it.',
      6: 'Her heart beats thirty a minute. Says snipers lie about their hearts.',
      8: 'Would rather be cut down than kept.',
      10: 'Has decided she is a weed. Calls it the most hopeful thing she has been.'
    }
  };
  inv('widowmaker', {
    ask: ["Come to the bridge tonight.", "Are you free this evening. The city is quiet. Come.", "I am bored. Come to the bridge later and fix it."],
    ok:  ["Bien.", "Good. I will see you before you see me."],
    no:  ["Hm. Another night, then.", "Fine."],
    sad: ["Three nights. I watched the walkway anyway. It was very empty. Hm.", "The bridge does not mind. Neither do I. I am telling you so you do not wonder."]
  });

  C.rio = {
    learned: {
      2: 'Comes to practice at seven. Everyone else comes at eight. She notices.',
      4: "Hears herself say the wrong thing and can't stop the sentence.",
      6: 'Wrote four practice schedules, color-coded. Every one of them started at seven.',
      8: 'Sat on a bench all tournament and called it the best day of her life.',
      10: 'Still right constantly. Says it slower now, and says thank you after.'
    }
  };
  inv('rio', {
    ask: ["senpai. courts later. are you free", "need someone to feed me balls today. that's you. be honest if you can't", "courts after? i'll buy you a drink. a cheap one"],
    ok:  ["good. bring water.", "ok. stretch first. i'll know if you didn't"],
    no:  ["fine. me and the backboard, then.", "ok. rest. you look like you need it"],
    sad: ["that's three. i'm not mad. i'm just keeping score. it's what i do", "the backboard's a terrible partner. it never says anything. just so you know"]
  });

  C.saori = {
    hobbies: { t: 'Writing stories, one line at a time.', rank: 4 },
    learned: {
      2: "Knows which books nobody's borrowed in eleven years. Just likes knowing.",
      4: "Flinches when a room goes quiet, not loud. Quiet means it's about her.",
      6: 'Writes at night with the window open. Read her first page to a cat.',
      8: "Nobody had ever asked what she wants. She'd like to have an answer.",
      10: 'Says a library keeps things in case somebody comes back for them.'
    }
  };
  inv('saori', {
    ask: ["Good morning. The library will be quiet later. Only if you're free. Sorry.", "Would you sit in the library with me this afternoon? We don't have to talk.", "I'm on the desk later. The window chair is free. I'm only describing the chair."],
    ok:  ["Oh! Good. I'll move my bag off the other chair.", "Thank you. I'll try not to watch the door."],
    no:  ["That's alright. Really. Another day.", "Of course. I'm sorry for asking. Oh. Not sorry. Okay."],
    sad: ["I've kept the chair by the window anyway. I always do. I just thought I'd say.", "Sorry. I'll ask less. I won't stop keeping the chair, though."]
  });
})();
