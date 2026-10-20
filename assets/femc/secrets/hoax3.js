/* Secrets: hoax3. Format in femc-social.js above secrets().
   Source: Hoax (readers/hoax.html). More of Solar Kim's world leaking into Iwatodai: Hanlim people half-recognize the
   player as Solar Kim and never quite work it out. Nothing here decides the election, homecoming, or anyone's romance.
   - Texts (new threads only, so nothing wipes a reply in hx-gc / hx-dm / jw-gc):
       'hx3-ann'    the Hanlim council broadcast list. No questions until the last one, so its texts never wipe each other.
                    9/3 (pets), 9/24 (homecoming committee, the canon PA line), 10/22 (ladders), and an undated absentee
                    ballot the night before the count (after 1/24, never expires). The ballot never delivers.
       'hx3-sunoo'  Sunoo, who copied Solar Kim's "new number" from Junkyu (the wrong one). 7/7 poster drafts; then,
                    once Solar has met Jungwon, the night he went back for his notes (after 1/22, never expires).
       'hx3-cherry' Cherry DMs "sol" about homecoming (10/23), realizes halfway it's the knockoff. Needs 'wrong-gc'.
   - Moments: 10/16 Solar Kim's final speech over Gekkoukan's speakers (a VOTE SOLAR KIM button), 10/24 the Hanlim
     homecoming gym and its ladder, 12/2 the nurse's office behind a curtain, 1/28 Jake and Layla at the shrine.
     Moments fire late on a late save, so their text never names the day.
   - Places: Port Island Station (Heeseung and Jay, daytime), Paulownia Mall fountain (Niki, evening), a winter rink
     on the station plaza (Sunghoon, evening). Each has late-January dates.
   - Jungwon in person only behind ifRank { jungwon: 1 } (the PA, ladder and nurse moments); his friends speak of him
     either way. ifRank { jungwon: 10 } in the shrine scene knows he's decided to go home.
   - Ids: in person the boys use jungwon.js's 'hx-*' ids (real names); chats use handles ('jw-sunoo' sunooshine,
     'hx-cherry' cherryblossoms). New ids are 'hx3-*'. Stamps: hx-ballot, hx-ladder, hx-view, hx-playdate. */
FemcSocial.secrets({
  id: 'hoax3',
  cast: {
    'hx3-council': 'Hanlim Student Council', 'hx3-speaker': 'The speakers', 'hx3-girl': '???'
  },
  threads: {
    'hx3-ann': { name: 'HAMLIM STUDENT COUNCIL', members: ['hx3-council'] },
    'hx3-sunoo': { name: 'sunooshine', members: ['jw-sunoo'] },
    'hx3-cherry': { name: 'cherryblossoms', members: ['hx-cherry'] }
  },

  texts: [
    // The broadcast list. Jaehyuk copied the council's contact sheet from the group chat, wrong digit and all.
    { id: 'hx3-ann-1', thread: 'hx3-ann', date: '9/3', window: 10, msgs: [
      { sys: 'You were added to a broadcast list' },
      { from: 'hx3-council', t: "Welcome back, Hanlim! 🌸 The Student Council hopes everyone had a restful break." },
      { from: 'hx3-council', t: "Reminder that pets are not permitted on campus, in the faculty lot, or on the sidewalk in front of any council member's house before 7 AM." },
      { from: 'hx3-council', t: "This includes large dogs. Especially large dogs." },
      { from: 'hx3-council', t: "Council meetings are Tuesdays at lunch. Attendance is mandatory for officers. Eating lunch at lunch is also encouraged. — Sec. Kim Sunoo" }
    ] },
    { id: 'hx3-ann-2', thread: 'hx3-ann', date: '9/24', window: 10, msgs: [
      { from: 'hx3-council', t: "The student council is now accepting applicants for the homecoming committee! Please stop by the front office to pick up a sign up sheet by the end of the week." },
      { from: 'hx3-council', t: "Questions? Ask Jake or Sunoo! Please do not ask the President, he is busy. (He is always busy.)" },
      { from: 'hx3-council', t: "Correction from the President. You may ask the President. — J." }
    ] },
    { id: 'hx3-ann-3', thread: 'hx3-ann', date: '10/22', window: 10, msgs: [
      { from: 'hx3-council', t: "HOMECOMING IS THIS SATURDAY! 🎉 Theme is A Night Under the Stars. Silver and navy, please." },
      { from: 'hx3-council', t: "Effective immediately, gym ladders may only be used with a second person holding the base. No exceptions. This includes the President." },
      { from: 'hx3-council', t: "Especially the President." },
      { from: 'hx3-council', t: "Lost and found at the front office. One roll of medical tape, one Care Bear, and a great deal of glitter. Please come claim your glitter." }
    ] },
    // The night before the count. Undated so a late save still gets it; the ballot never goes through.
    { id: 'hx3-ann-4', thread: 'hx3-ann', slot: 1, unlock: { after: '1/24' }, stamp: 'hx-ballot', msgs: [
      { sys: 'Delivered late' },
      { from: 'hx3-council', t: "Thank you to both candidates for their final speeches today." },
      { from: 'hx3-council', t: "Ballots will be counted tomorrow morning at 8:00 in the auditorium. Results will be announced at the morning assembly." },
      { from: 'hx3-council', t: "Students who were absent may submit an absentee ballot by replying to this message. Reply 1 for YANG JUNGWON or 2 for SOLAR KIM." },
      { ask: [
        { t: "1. Yang Jungwon.", then: [
          { sys: 'Sending…' },
          { sys: 'Not delivered · retrying' },
          { sys: 'Not delivered · retrying' }
        ] },
        { t: "2. Solar Kim.", then: [
          { sys: 'Sending…' },
          { sys: 'Not delivered · retrying' },
          { sys: 'Not delivered · retrying' }
        ] },
        { t: "1 and 2. Two Solars, one vote each.", then: [
          { from: 'hx3-council', t: "Invalid ballot. Please reply 1 or 2." },
          { sys: 'Not delivered · retrying' }
        ] },
        { t: "(Don't vote. It isn't your school.)", then: [
          { sys: 'Notifications muted until morning' }
        ] }
      ] },
      { from: 'hx3-council', t: "Good luck to both candidates. Please get some sleep tonight, everyone. That includes the President. Especially the President. — Sec. Kim Sunoo" },
      { sys: 'Messages to this list may be delayed' }
    ] },

    // Sunoo got Solar Kim's "new number" from Junkyu. It's the same wrong number.
    { id: 'hx3-sunoo-1', thread: 'hx3-sunoo', date: '7/7', window: 14, slot: 1, msgs: [
      { from: 'jw-sunoo', t: "solar!!! hi it's sunoo" },
      { from: 'jw-sunoo', t: "junkyu gave me ur new number!! he didn't say why u changed it and i didn't ask bc i'm polite" },
      { from: 'jw-sunoo', t: "ok poster time. i made drafts" },
      { from: 'jw-sunoo', t: "📷 Photo" },
      { from: 'jw-sunoo', t: "📷 Photo" },
      { from: 'jw-sunoo', t: "be honest. which one" },
      { ask: [
        { t: "The first one. The sun with the face.", then: [
          { from: 'jw-sunoo', t: "YES" },
          { from: 'jw-sunoo', t: "i knew it. u always say the sun should have a face" },
          { from: 'jw-sunoo', t: "i'm adding glitter. don't fight me on the glitter" }
        ] },
        { t: "Sorry, who is this?", then: [
          { from: 'jw-sunoo', t: "it's sunoo!!! from the cafe!!! ur poster consultant!!!" },
          { from: 'jw-sunoo', t: "solar did u hit ur head again" },
          { from: 'jw-sunoo', t: "ok i'm picking the sun one. u always say the sun should have a face" }
        ] },
        { t: "Is this for the student council election?", then: [
          { from: 'jw-sunoo', t: "YES what else would it be" },
          { from: 'jw-sunoo', t: "ur running against jungwon!! the one who yelled at u about his dog!!" },
          { from: 'jw-sunoo', t: "i love him but he deserves a really good poster against him" },
          { from: 'jw-sunoo', t: "the sun one. obviously" }
        ] }
      ] },
      { from: 'jw-sunoo', t: "ok second question. what's ur slogan" },
      { from: 'jw-sunoo', t: "it can't be 'vote for me i guess' like u said yesterday" },
      { ask: [
        { t: "Somebody should ask you what you want, and then actually listen.", then: [
          { from: 'jw-sunoo', t: "oh" },
          { from: 'jw-sunoo', t: "OH" },
          { from: 'jw-sunoo', t: "solar that's actually really good" },
          { from: 'jw-sunoo', t: "why does it sound different when u type it. u type so differently on this number" },
          { from: 'jw-sunoo', t: "new phone new personality?? 😭 ok i'm writing it down" }
        ] },
        { t: "Vote Solar Kim.", then: [
          { from: 'jw-sunoo', t: "simple. classic. presidential" },
          { from: 'jw-sunoo', t: "junkyu wants it to say TEAM SOLAR!!! with three exclamation points" },
          { from: 'jw-sunoo', t: "i'm going to let him write it underneath. he'll be so happy" }
        ] },
        { t: "Make sure the president eats lunch.", then: [
          { from: 'jw-sunoo', t: "LMAO" },
          { from: 'jw-sunoo', t: "i can't put that on a poster" },
          { from: 'jw-sunoo', t: "...can i put that on a poster" },
          { from: 'jw-sunoo', t: "no. ok. but i'm thinking about it" }
        ] }
      ] },
      { from: 'jw-sunoo', t: "come by yeobo's this week!! i'll make u a croissant for being a good candidate" },
      { from: 'jw-sunoo', t: "the sun on the poster is smiling btw. like u 🌞" }
    ] },

    // The night Jungwon went back for his notes. Only once Solar knows him.
    { id: 'hx3-sunoo-2', thread: 'hx3-sunoo', slot: 1, unlock: { met: ['jungwon'], after: '1/22' }, msgs: [
      { sys: 'Delivered late' },
      { from: 'jw-sunoo', t: "solar sorry it's so late" },
      { from: 'jw-sunoo', t: "have u seen jungwon??" },
      { from: 'jw-sunoo', t: "he left yeobo's to get his notes from the council room and he never came back" },
      { from: 'jw-sunoo', t: "heeseung went and looked. the light was on. his bag was there. he wasn't" },
      { from: 'jw-sunoo', t: "u were the last one who talked to him today. after the speeches" },
      { ask: [
        { t: "He's okay. He's somewhere safe, and somebody's making sure he eats.", then: [
          { from: 'jw-sunoo', t: "how do u know that" },
          { from: 'jw-sunoo', t: "...ok" },
          { from: 'jw-sunoo', t: "i don't know why but i believe u. u never lie. it's ur worst quality" }
        ] },
        { t: "This isn't Solar Kim, Sunoo. But I know him. He's okay.", then: [
          { from: 'jw-sunoo', t: "wait" },
          { from: 'jw-sunoo', t: "wait wait" },
          { from: 'jw-sunoo', t: "this is the number in his phone. 'solar (not that one)'" },
          { from: 'jw-sunoo', t: "junkyu gave me the WRONG NUMBER in july?? i sent u eleven poster drafts" },
          { from: 'jw-sunoo', t: "...croissant girl??" },
          { from: 'jw-sunoo', t: "ok. ok. if u know him then u know. please make him eat" }
        ] },
        { t: "He's in a council room at a school called Gekkoukan. He has a key.", then: [
          { from: 'jw-sunoo', t: "gekko what" },
          { from: 'jw-sunoo', t: "solar ur scaring me a little" },
          { from: 'jw-sunoo', t: "ok. as long as it's a room with heat. he always finds the room with heat" }
        ] }
      ] },
      { from: 'jw-sunoo', t: "tell him the count's at 8" },
      { from: 'jw-sunoo', t: "tell him we're saving him a seat" },
      { from: 'jw-sunoo', t: "tell him i made croissants. that part's a lie but he doesn't need to know" },
      { sys: 'Messages to this number may be delayed' }
    ] },

    // Cherry meant to DM her best friend. The number saved as "sol" is the one Junkyu got wrong.
    { id: 'hx3-cherry-1', thread: 'hx3-cherry', date: '10/23', window: 10, slot: 1, unlock: { stamps: ['wrong-gc'] }, msgs: [
      { from: 'hx-cherry', t: "sol" },
      { from: 'hx-cherry', t: "sol r u up" },
      { from: 'hx-cherry', t: "ok don't scream" },
      { from: 'hx-cherry', t: "u know hyunsuk asked me to homecoming. u were holding one of the signs. with a CARE BEAR BOUQUET. how does he know i collect them. who told him" },
      { from: 'hx-cherry', t: "but what u DON'T know" },
      { from: 'hx-cherry', t: "is the flower boy gave me football tickets this morning. two. front row. he wrote 'why hello' on the envelope" },
      { from: 'hx-cherry', t: "the SAME DAY" },
      { from: 'hx-cherry', t: "i hate men. help" },
      { ask: [
        { t: "Hyunsuk knows what you collect. That's not nothing.", then: [
          { from: 'hx-cherry', t: "ok" },
          { from: 'hx-cherry', t: "ok yeah. it's not nothing" },
          { from: 'hx-cherry', t: "i already said yes btw. i just wanted someone to tell me i wasn't stupid" }
        ] },
        { t: "Go to the football game. Then go to homecoming with Hyunsuk.", then: [
          { from: 'hx-cherry', t: "LMAO ur so diplomatic. u sound like jaehyuk" },
          { from: 'hx-cherry', t: "...that's actually not a terrible plan" },
          { from: 'hx-cherry', t: "never tell anyone i said that" }
        ] },
        { t: "Who's the flower boy?", then: [
          { from: 'hx-cherry', t: "SUNGHOON. jungwon's friend. the one who bows at people like it's a threat" },
          { from: 'hx-cherry', t: "u literally met him. he pulled a flower out of a vase at u at yeobo's" }
        ] }
      ] },
      { from: 'hx-cherry', t: "wait" },
      { from: 'hx-cherry', t: "why are u typing like that" },
      { from: 'hx-cherry', t: "sol would've screamed by now. sol screams at EVERYTHING" },
      { from: 'hx-cherry', t: "oh my god" },
      { from: 'hx-cherry', t: "KNOCKOFF??" },
      { from: 'hx-cherry', t: "i saved u as sol in april. junkyu gave everyone the wrong number. i'm going to end him" },
      { ask: [
        { t: "Hi, Cherry.", then: [
          { from: 'hx-cherry', t: "don't hi cherry me" },
          { from: 'hx-cherry', t: "...hi" }
        ] },
        { t: "Your secret's safe. I literally can't tell anyone.", then: [
          { from: 'hx-cherry', t: "jihoon dmed u once didn't he. don't ask how i know. i know everything" },
          { from: 'hx-cherry', t: "fine. ur a vault. a creepy haunted clock vault" }
        ] },
        { t: "For what it's worth, I think you'll have fun.", then: [
          { from: 'hx-cherry', t: "i never have fun. i'm famous for it" },
          { from: 'hx-cherry', t: "...maybe a little fun" }
        ] }
      ] },
      { from: 'hx-cherry', t: "if this gets out i'll know it was u" },
      { from: 'hx-cherry', t: "remember who's really in 1st" }
    ] }
  ],

  moments: [
    // Solar Kim's final speech, over Gekkoukan's morning announcements. Jungwon helped her write it.
    { id: 'hx3-pa', date: '10/16', slot: 0, label: 'A strange announcement', title: 'final speeches', place: 'Gekkoukan High · Classroom', scene: [
      { n: "Morning announcements at Gekkoukan were the most reliably boring four minutes of any day, the speaker above the blackboard clicking on with a pop and a hiss, the vice principal reading the lunch menu and the club schedule and some reminder about bicycles in the same flat drone he used for everything, and Solar had long since perfected the art of not hearing a word of it while looking like she was." },
      { n: "This morning the speaker clicked on, and hissed, and then somebody tapped a microphone that was not the vice principal's microphone, three times, the way people do when they're nervous and want to make sure they exist." },
      { s: 'hx3-speaker', t: "Um. Hi. Is this... okay. Hi, everyone. I'm Solar Kim." },
      { n: "Her pen rolled off the desk." },
      { n: "It was a girl's voice, a little too close to the mic, a little thin with nerves, the kind of voice that was smiling on purpose to keep from doing something else, and it said her name like it belonged to it, which, Solar supposed, it did." },
      { s: 'hx3-speaker', t: "I know a lot of you are going to vote for the other candidate. That's okay. He works really hard. Harder than anyone I've ever met. Probably too hard." },
      { s: 'junpei', f: 'surprised', t: "Yo. Solar. Is that... are you running for something? Did you record that?" },
      { s: 'yukari', f: 'surprised', t: "That's not her voice. Is it? It's kind of her voice." },
      { choose: [
        { t: "That's not me.", then: [
          { s: 'junpei', f: 'neutral', t: "I mean. It's your name, though." },
          { s: 'yukari', f: 'serious', t: "There's no Kim in our year. ...Is there?" }
        ] },
        { t: "Shh. I want to hear the end.", then: [
          { n: "She didn't know why she said it. Junpei and Yukari both shut up at once, which was almost more alarming than the speaker." }
        ] }
      ] },
      { n: "Behind the voice there was a whole room, she could hear it, the scrape of plastic chairs on a gym floor, hundreds of people breathing at once, and somewhere near the front one girl yelling Solar's name at a volume that had to be a disciplinary issue." },
      { s: 'hx3-speaker', t: "I'm not the smartest person who's ever stood up here. I just think somebody should ask you what you actually want, and then actually listen. And maybe make sure the people who run things remember to eat lunch." },
      { s: 'hx3-speaker', t: "So. Um. That's it. That's my speech. Thank you." },
      { n: "The room on the other end applauded, a big, ragged, generous sound, and under it, so close to the mic it was almost in her ear, a boy's voice, dry and low and not meant for anyone but the girl it was talking to." },
      { s: 'hx-voice', t: "You presented well." },
      { s: 'hx-voice', t: "May the best candidate win." },
      { music: 'mystery' },
      { n: "Then the speaker popped, and hissed, and the vice principal came back mid-sentence about bicycles as if he had never left, and nobody else in the room seemed to remember anything had happened at all." },
      { n: "When she bent to pick up her pen there was a button on the floor beside it. Round, cheap, a safety pin on the back. VOTE SOLAR KIM in yellow on pink, and a little sun with a smiling face." },
      { ifRank: { jungwon: 1 }, then: [
        { place: 'Gekkoukan High · Student Council Room', time: 'After School' },
        { n: "She took the button to the council room after school, because she knew exactly one person who would know, and set it down on the long table between his budget binders without saying anything." },
        { n: "Jungwon looked at it for a long moment. He didn't pick it up. He put one finger on the edge of it, the way you'd touch a stove to make sure it was off." },
        { s: 'jungwon', f: 'neutral', t: "You heard it. This morning." },
        { s: 'solar', t: "So did you." },
        { s: 'jungwon', f: 'serious', t: "I heard it the day I left. I was standing three feet from her." },
        { s: 'jungwon', f: 'flustered', t: "The lunch part wasn't in the draft. She added it." },
        { choose: [
          { t: "You helped her write it?", then: [
            { s: 'jungwon', f: 'neutral', t: "Some of it. She asked. I told her it made no sense to help your opposition with their final speech." },
            { s: 'jungwon', f: 'flustered', t: "Then I helped her for three hours." }
          ] },
          { t: "The lunch part was about you.", then: [
            { s: 'jungwon', f: 'sad', t: "...I know." },
            { s: 'jungwon', f: 'neutral', t: "I know it was." }
          ] }
        ] },
        { n: "He slid the button back across the table to her with one finger, carefully, the way he handed back homework that had impressed him when he'd rather die than say so." },
        { s: 'jungwon', f: 'neutral', t: "Keep it. It was a good speech. Somebody here should have one of her buttons." }
      ], else: [
        { n: "She pinned it to the inside of her bag, where nobody would see it but her, and all day, every time she reached in for something, her fingers found it first, like it was trying to get her vote." }
      ] }
    ] },

    // Homecoming season in Hoax: Jungwon lets go of a ladder and Solar Kim falls. Here somebody holds on.
    { id: 'hx3-ladder', date: '10/24', slot: 1, label: 'A strange gym', title: 'two hands on the ladder', place: 'Gekkoukan High · Gym · After Hours', stamp: 'hx-ladder', scene: [
      { n: "She'd left her gym shoes in the locker room, which was the only reason she was at school this late at all, cutting across the dark gym with her phone for a flashlight, her footsteps doing that hollow echo on the hardwood that made every gym after hours feel like a church nobody went to anymore." },
      { n: "Halfway across, her light caught silver." },
      { n: "Somebody had been decorating. Strands of silver twine hung from the rafters in long, loose swoops, catching her light and throwing it back, and across the far wall a paper banner was half taped up, its last letters still curling off the brick, HAMLIM HOMECOMING in bubble letters filled in so carefully the marker had soaked through. Folding tables. A box of balloons nobody had blown up. And in the middle of the floor a ladder, ten feet of it, still swaying very slightly, like something had only just climbed down." },
      { n: "Over its top rung hung a sash, satin and a little crushed, HOMECOMING COMMITTEE in gold glitter letters that were already coming off on everything they touched." },
      { n: "There was one strand of twine left in the box at the ladder's feet, and one bare stretch of rafter above it. You could see exactly where it was supposed to go." },
      { choose: [
        { t: "(Climb up and finish it.)", then: [
          { n: "It was not her gym. It was not, as far as she could tell, anybody's gym. She took the twine anyway." }
        ] },
        { t: "(Leave it. It isn't your gym.)", then: [
          { n: "She turned to go, and behind her the ladder creaked, the particular creak of weight settling onto a bottom rung, as if somebody had stepped up to hold it for whoever climbed next and was prepared to wait all night." },
          { n: "She sighed, because she knew herself, and went back for the twine." }
        ] }
      ] },
      { n: "The ladder was worse up close. It had a bent leg and a sticker on the side telling her, in three languages, not to stand on the top step, and the top step was exactly where you'd have to stand." },
      { n: "She was nearly there, twine in one hand and the other flat on the rafter, when the whole thing shivered under her, a sick little lurch to the left that dropped her stomach straight through the floor." },
      { n: "And stopped." },
      { n: "Somebody had it. She felt it more than anything, the ladder going solid all at once under her feet, the way a car goes steady when someone with good hands takes the wheel, two hands clamped on the rails down at the bottom and not letting go." },
      { s: 'hx-voice', t: "I've got it." },
      { s: 'hx-voice', t: "I've got it. I'm not letting go. Finish it." },
      { ifRank: { jungwon: 1 }, then: [
        { n: "She knew the voice. She looked down, which you are never supposed to do on a ladder, and Jungwon was at the bottom of it in his navy blazer with both hands white on the rails, his face turned up to her, pale in her phone light and more frightened than she had ever seen him about anything, including math." },
        { s: 'jungwon', f: 'serious', t: "Finish it. Then come down. Slowly. Very slowly." },
        { n: "She finished it. She came down slowly. He didn't let go until both her feet were flat on the floor, and then he let go all at once, like his hands had been holding something a lot heavier than a ladder." },
        { choose: [
          { t: "What are you doing here?", then: [
            { s: 'jungwon', f: 'neutral', t: "I heard a ladder. From the council room. I don't know how, it's two buildings away." },
            { s: 'jungwon', f: 'sad', t: "I don't let go of ladders anymore. That's all. Don't ask me why." }
          ] },
          { t: "You were scared.", then: [
            { s: 'jungwon', f: 'flustered', t: "Of course I was scared. You were standing on the step that says not to stand on it in three languages." },
            { s: 'jungwon', f: 'serious', t: "I let go of one, once. I'm not doing that again. Not to anybody." }
          ] }
        ] },
        { n: "He looked up at the twine, at the banner, at HAMLIM curling off the brick, and something crossed his face too fast to read, homesickness or guilt or both at once, and he took the sash off the ladder and folded it in half and in half again, the way he folded everything." },
        { s: 'jungwon', f: 'neutral', t: "She's on the committee. She'd yell at whoever left this lying around." },
        { s: 'jungwon', f: 'flustered', t: "You keep it. Somebody on that committee should be someone who doesn't fall." }
      ], else: [
        { n: "She finished it, the last silver swoop, and it hung exactly right, and she came down rung by rung with her heart going, and the hands held on the whole way, steady, until her foot found the floor." },
        { music: 'mystery' },
        { n: "Then they were gone. Not gone like somebody walking off. Gone like they'd never been there, the ladder standing on its own in the middle of the gym, perfectly still now, and her phone light finding nothing around it but floorboards and the long shadows of the bleachers." },
        { s: 'solar', t: "...Thank you?" },
        { n: "The gym didn't answer. From very far off, it sounded like a boy telling somebody who couldn't hear him that he was sorry he'd let her fall like that, and then even that was gone, and she took the sash off the ladder because it seemed wrong to leave it there alone." }
      ] },
      { n: "When she came back the next day for the shoes she had, of course, forgotten again, the twine was gone, and the banner, and the ladder had gone back to wherever ladders lived, and the gym was just the gym, smelling of floor wax and old sneakers." },
      { n: "Only the sash was left, folded in her bag. HOMECOMING COMMITTEE, in gold glitter that came off on everything. She found it in her hair for a week." }
    ] },

    // The nurse's office after the ladder, in Hoax. Lines from the chapter come through the curtain.
    { id: 'hx3-nurse', date: '12/2', slot: 0, label: 'A strange infirmary', title: 'doctor', place: "Gekkoukan High · Nurse's Office", scene: [
      { n: "Her wrist had been bothering her for days, ever since a bad landing on a staircase that wasn't really a staircase, in a tower she was not about to explain to a school nurse, and by fourth period it had gone from an ache to a throb, and she gave up and went to the infirmary, where it was warm and dim and smelled like rubbing alcohol and the radiator, and nobody was at the desk." },
      { n: "A note on the desk said BACK SOON in handwriting that suggested otherwise. Two of the three beds were empty. The curtain around the third was drawn." },
      { n: "Behind it, somebody was talking." },
      { s: 'hx-voice', t: "It's gonna sting, okay? I just need to make sure it's not broken." },
      { s: 'hx3-girl', t: "Sure, doctor." },
      { n: "Solar stopped with her hand on the rail of the nearest bed. A boy's voice, low and gentler than it seemed used to being, the voice of somebody doing something very carefully because he was afraid of doing it wrong. A girl's voice, thin with pain and determined to be funny about it anyway." },
      { s: 'hx3-girl', t: "Ow. Ow, ow. Okay. You can stop being nice now, it's freaking me out." },
      { s: 'hx-voice', t: "Not broken. Definitely bruised. I'm going to tape it. Hold still." },
      { n: "The long sticky rip of medical tape coming off a roll. Through the gap at the bottom of the curtain she could see the legs of a chair, a pair of school shoes she didn't recognize, navy socks, and a bag slumped against the chair leg with a little gold pin on the strap that said PRESIDENT." },
      { choose: [
        { t: "(Pull back the curtain.)", then: [
          { n: "She pulled it back. The bed was empty. The sheet was wrinkled and still faintly warm, the pillow had a dent in it, and on the chair sat a roll of medical tape with the end folded over so the next person could find it, which was the single most considerate thing she had ever seen anybody do to a roll of tape." },
          { n: "She taped her own wrist with it, sitting on the edge of the warm bed. It came out a little crooked. She decided it counted." }
        ] },
        { t: "(Don't. Lie down and wait.)", then: [
          { n: "It seemed like the kind of conversation you didn't walk in on. She lay down on the empty bed by the window and listened to the two voices go back and forth, his patient, hers complaining, until they blurred into the hum of the radiator and she was asleep." },
          { n: "When she woke the curtain was open and the third bed was made, corners tucked tight. Her wrist was taped. Neatly, firmly, exactly level, the end folded over so she could find it." }
        ] }
      ] },
      { ifRank: { jungwon: 1 }, then: [
        { place: 'Gekkoukan High · Student Council Room', time: 'After School' },
        { n: "Jungwon looked up from his binders when she came in, saw the tape, and put his pen down, which he did for almost nothing." },
        { s: 'jungwon', f: 'serious', t: "What happened. Who did that?" },
        { choose: [
          { t: "Somebody behind a curtain. I didn't see him.", then: [
            { s: 'jungwon', f: 'neutral', t: "Hm." }
          ] },
          { t: "I fell. It's fine.", then: [
            { s: 'jungwon', f: 'serious', t: "Everybody says it's fine. I say it's fine. It is never fine." }
          ] }
        ] },
        { n: "He reached over without asking and took her wrist and turned it in the lamplight, slowly, the way you'd check something against a memory, and pressed the end of the tape flat with his thumb." },
        { s: 'jungwon', f: 'neutral', t: "It'll hold. Keep it dry." },
        { s: 'jungwon', f: 'flustered', t: "Did you eat? You can't heal on nothing. That's a fact. I read it somewhere." },
        { n: "He did not, she noticed, let go of her wrist until she said yes." }
      ], else: [
        { n: "She went back to class with her wrist taped and a warm feeling she couldn't account for, the feeling of having been looked after by somebody who wasn't there, and every time she flexed her hand that afternoon she half expected a voice to tell her to hold still." }
      ] },
      { n: "Mr. Edogawa, when she passed him in the hall, smelled of incense and told her nobody had used the third bed in a week, and then asked whether she'd ever considered that pain was simply a letter from a self she hadn't met yet, and she left before he could get any further into it." }
    ] },

    // The morning of the count, in Hoax. Jake is walking Layla and thinks Koromaru is Nana.
    { id: 'hx3-layla', date: '1/28', slot: 0, label: 'A strange morning', title: 'playdate', place: 'Naganaki Shrine', stamp: 'hx-playdate', scene: [
      { n: "The cold had gotten into everything, the shrine gravel frozen into little ridges, the stone fox by the offering box wearing a cap of frost, the sky over Iwatodai that thin bleached blue of a day that had no intention of warming up, and Koromaru was there anyway, because Koromaru was always there, sitting by the torii with his breath going up in small white puffs like a very short dragon." },
      { n: "He wasn't alone. A small brown-and-white dog in a knitted sweater was sniffing him all over with enormous seriousness, and at the other end of its leash was a boy in a navy school coat with a scarf wound up to his nose, who saw Solar and lit up like a porch light." },
      { s: 'hx-jake', f: 'happy', t: "Solar! Oh my gosh, finally! Layla, look, it's Solar!" },
      { n: "Layla did not look. Layla was busy." },
      { s: 'hx-jake', f: 'happy-2', t: "And you brought Nana! Nana! Buddy! Hi!" },
      { n: "He crouched down with his arms wide open, and Koromaru, who had never once in his life turned down open arms, went straight into them." },
      { s: 'hx-jake', f: 'surprised', t: "Wait. Did Nana get... smaller? Did you get him groomed? He looks so different. He looks amazing. He looks like a whole other dog." },
      { choose: [
        { t: "He is a whole other dog.", then: [
          { s: 'hx-jake', f: 'happy', t: "Ha! You're so funny. Sunoo always says you're funny and I always say, she is, she's so funny." },
          { n: "He went on scratching Koromaru behind the ears with total devotion, and Koromaru closed his eyes, and nobody seemed to be in any hurry to correct anything." }
        ] },
        { t: "This is Koromaru.", then: [
          { s: 'hx-jake', f: 'surprised', t: "You renamed Nana?" },
          { s: 'hx-jake', f: 'sad', t: "Does Jihoon know? Jihoon is going to be so upset. He's going to want joint custody." }
        ] },
        { t: "(Let Koromaru answer.)", then: [
          { s: 'koromaru', f: 'happy', t: "Woof!" },
          { s: 'hx-jake', f: 'happy', t: "See? He knows me! Nana always knew me." }
        ] }
      ] },
      { s: 'hx-jake', f: 'neutral', t: "We have to finally do the playdate. I've been saying it forever. Layla and Nana. It'll be the cutest thing that's ever happened in this town." },
      { n: "Layla, as if she'd heard her name, finished investigating Koromaru's ear and put both front paws up on his back, and Koromaru, gracious about it, lay down in the frozen gravel so she could climb all the way on, and the two of them looked up at the humans with the shared, smug expression of dogs who had held the playdate themselves without waiting for anybody's permission." },
      { s: 'hx-jake', f: 'happy-2', t: "Oh my gosh. Oh my gosh. Don't move. Nobody move." },
      { n: "He took eleven photos. She counted." },
      { ifRank: { jungwon: 1 }, then: [
        { n: "When he was done he stood and pulled his scarf down off his nose, and without the grin he looked older for a second, and tired, like somebody who had been up most of the night refreshing a phone." },
        { s: 'hx-jake', f: 'sad', t: "Hey. Can I ask you something weird? Have you seen Won? Since last night?" },
        { s: 'hx-jake', f: 'neutral', t: "He went back to the council room for his notes and he never came out. Heeseung went and looked. Sunoo's been texting him every ten minutes. I went and got Maeumi this morning so somebody would walk him, and he just sat by the door." },
        { ifRank: { jungwon: 10 }, then: [
          { choose: [
            { t: "He's coming home. He decided. He wants to hear the count.", then: [
              { s: 'hx-jake', f: 'surprised', t: "...He decided?" },
              { s: 'hx-jake', f: 'happy', t: "Won decided something for himself? Okay. I don't know how you know that. I'm choosing to believe it." },
              { s: 'hx-jake', f: 'happy-2', t: "We'll save him a seat. Front row. I'll sit on it until he gets there." }
            ] },
            { t: "He's okay. He ate lunch at twelve-thirty. On time.", then: [
              { s: 'hx-jake', f: 'surprised', t: "On time?" },
              { s: 'hx-jake', f: 'happy', t: "Okay, now I know you're making things up. But thank you. I really needed somebody to make something up." }
            ] }
          ] }
        ], else: [
          { choose: [
            { t: "He's okay. He's somewhere warm, and someone's making sure he eats.", then: [
              { s: 'hx-jake', f: 'sad', t: "...Yeah?" },
              { s: 'hx-jake', f: 'happy', t: "Yeah. Okay. If anybody could make him eat it'd be you. You're the only person he's scared of." }
            ] },
            { t: "He'll find his way back. He's good at lines.", then: [
              { s: 'hx-jake', f: 'neutral', t: "He is good at lines. He reorganized the lunch line once. Nobody asked him to." },
              { s: 'hx-jake', f: 'happy', t: "Okay. Okay. Thanks, Solar." }
            ] }
          ] }
        ] }
      ], else: [
        { s: 'hx-jake', f: 'neutral', t: "Next time you and Won should bring Maeumi. Then it's a real playdate. A peace treaty. Nana and Maeumi, all forgiven." },
        { s: 'solar', t: "Who's Won?" },
        { s: 'hx-jake', f: 'happy', t: "Ha! Okay, I walked into that. I'm telling him you said that, he'll love it." },
        { n: "He clearly would not love it. He was clearly going to tell him anyway." }
      ] },
      { n: "Layla's leash went tight, and Jake let himself be towed off down the shrine steps, waving with his whole arm, calling something back over his shoulder about Saturday and treats and Jihoon, and at the bottom of the steps where the road turned a gust came up off the bay and lifted the frost off the gravel in one bright sheet, and when it settled there was only the road, and the cold, and the long blue morning." },
      { n: "Koromaru sat up and looked at the empty steps for a long time. Then he looked at her and let out a big, put-upon sigh, the sigh of someone whose new best friend had left without saying goodbye." },
      { s: 'koromaru', f: 'sad', t: "Arf..." },
      { choose: [
        { t: "(Promise him a playdate.)", then: [
          { n: "She promised. She had no idea how she'd keep it. He seemed to feel that was her problem, and he was right." }
        ] },
        { t: "(Sit with him a while.)", then: [
          { n: "She sat down on the cold step beside him and he leaned his whole weight into her side, warm through her coat, and they watched the road together until the bell rang somewhere down the hill and she was late for something." }
        ] }
      ] },
      { n: "There was a dog hair on her coat sleeve that wasn't his, short and brown and very soft. She left it there all day." }
    ] }
  ],

  places: [
    // Heeseung and Jay, lost on the wrong line with lunch for a president who forgets.
    { id: 'hx3-station', area: 'Port Island Station', title: 'Two boys and a train map', label: 'A wrong platform',
      dates: ['5/16', '7/18', '9/19', '11/21', '1/26', '1/29'], slot: 0,
      hint: 'two boys in navy blazers are arguing with the route map. one of them is very tall.',
      place: 'Port Island Station · Central Concourse', scene: [
      { n: "Port Island Station after school was the same every day, the same pleasant recorded voice making the same announcements, the same smell of hot brakes and somebody's fried chicken drifting down from the stand by the stairs, the same crush of uniforms all moving in the same direction, and Solar had stopped noticing any of it months ago, which was exactly why she noticed the two boys standing completely still in the middle of it." },
      { n: "They were in navy blazers from a school that wasn't on this line or any other. One was tall, with a soft, patient face and a convenience store bag hanging from two fingers, and the other had a letterman jacket thrown on over his blazer like the blazer had personally offended him, and they were both staring up at the route map above the ticket machines with the particular betrayed look of people who had been reading it for a while." },
      { s: 'hx-jay', f: 'serious', t: "It's not on there. I'm telling you, it's not on there. There's no Hanlim stop. There's no Hanlim anything." },
      { s: 'hx-heeseung', f: 'neutral', t: "It has to be on there. We got on a train. Trains go places, Jay. That's the whole thing about trains." },
      { s: 'hx-jay', f: 'neutral', t: "Then where are we?" },
      { n: "The tall one turned to ask somebody, and the somebody happened to be her, and his whole face changed, the patience going out of it all at once in pure relief." },
      { s: 'hx-heeseung', f: 'happy', t: "Oh, thank god. Solar. Okay. Solar will know." },
      { choose: [
        { t: "Do I know you?", then: [
          { s: 'hx-jay', f: 'neutral', t: "Here we go." },
          { s: 'hx-heeseung', f: 'happy', t: "Funny. Very funny. You've been spending way too much time with Cherry." },
          { n: "He said it fondly, the way you'd talk about a dog that bites, and didn't seem to notice she hadn't laughed." }
        ] },
        { t: "You're lost. Where are you trying to go?", then: [
          { s: 'hx-heeseung', f: 'sad', t: "Back to school. We were supposed to be back before the council meeting, and he hasn't eaten since..." },
          { s: 'hx-jay', f: 'neutral', t: "Since the dawn of time." },
          { s: 'hx-heeseung', f: 'neutral', t: "Since breakfast. Allegedly." }
        ] },
        { t: "(Look in the bag.)", then: [
          { n: "Inside the bag was a sandwich, a carton of banana milk, a protein bar, and a second protein bar, which seemed less like lunch than like an intervention." },
          { s: 'hx-heeseung', f: 'flustered', t: "It's not for me. It's for somebody who forgets." }
        ] }
      ] },
      { s: 'hx-jay', f: 'surprised', t: "Wait. Since when do you wear red? And since when are you that tall? Did you get taller? Is that a thing that happens to people at eighteen?" },
      { s: 'hx-heeseung', f: 'neutral', t: "It's a different uniform. She's doing a thing. Don't make her explain the thing, she'll explain it for an hour." },
      { s: 'hx-heeseung', f: 'sad', t: "Anyway. Have you seen him? He skipped lunch again, and he isn't answering anybody." },
      { ifRank: { jungwon: 1 }, then: [
        { n: "There was something in the way the tall one said he, the careful worried weight he put on it, like a full cup being carried across a room, that made her think of a light left on in a council room long after everybody else had gone home." },
        { choose: [
          { t: "If you're looking for Jungwon, he ate today. Rice and an egg. I watched.", then: [
            { s: 'hx-heeseung', f: 'surprised', t: "How do you know what he..." },
            { s: 'hx-jay', f: 'surprised', t: "Rice and an egg? Both?" },
            { s: 'hx-heeseung', f: 'sad', t: "He hasn't answered any of us since last night. He just went back for his notes. Sunoo's been texting him every ten minutes." },
            { s: 'hx-heeseung', f: 'neutral', t: "If you see him, tell him his vice president says to sleep. That's an order. I'm allowed exactly one." }
          ] },
          { t: "He's okay. He's somewhere safe. He's just working late.", then: [
            { s: 'hx-jay', f: 'neutral', t: "That's every night, though." },
            { s: 'hx-heeseung', f: 'sad', t: "Yeah. That's the part that worries me." },
            { s: 'hx-heeseung', f: 'neutral', t: "...Thanks, Solar. I don't know why, but I believe you." }
          ] }
        ] }
      ], else: [
        { s: 'solar', t: "Who?" },
        { s: 'hx-jay', f: 'neutral', t: "Our president. You know. Your mortal enemy. Dimples, would rather die than eat a sandwich in front of witnesses." },
        { s: 'hx-heeseung', f: 'serious', t: "He's not her mortal enemy." },
        { s: 'hx-jay', f: 'neutral', t: "She ran against him with glitter, hyung. That's mortal." },
        { n: "Solar didn't know anybody with dimples who would rather die than eat a sandwich, and found, a little alarmingly, that she could picture him anyway, bent over a desk under a bad lamp with a red pen, the sandwich going stale at his elbow." }
      ] },
      { n: "A train pulled in on the far platform, doors chiming open, and the tall one looked at it and then at the map and then at the bag in his hand, and seemed to decide that this was the one, the way people decide things when they're tired of deciding." },
      { s: 'hx-heeseung', f: 'happy', t: "That's ours. I think that's ours. Come on, Jay." },
      { s: 'hx-jay', f: 'neutral', t: "You're not coming, Solar? Cherry's going to kill you. You're the one who's never late." },
      { choose: [
        { t: "Tell them I'm running late.", then: [
          { s: 'hx-jay', f: 'happy', t: "You? Late? Okay. I'm telling everyone. This is historic." }
        ] },
        { t: "Go. Somebody's waiting for that sandwich.", then: [
          { s: 'hx-heeseung', f: 'sad', t: "He's not, though. That's the problem. He never waits for anything. He just keeps going until somebody makes him stop." }
        ] }
      ] },
      { music: 'mystery' },
      { n: "They ran for it, the letterman jacket and the convenience store bag, and slipped in sideways just as the doors began to close, and through the glass the tall one lifted a hand to her, an easy wave, the wave of somebody who would see her tomorrow in the hallway like always." },
      { n: "The train pulled out. The far platform was empty, swept and quiet, and the sign hanging over it said NOT IN SERVICE, in letters faded from years of nobody needing it to say anything else." },
      { n: "On the bench beside her, where she was sure nobody had been sitting, there was a protein bar. The second one. Someone had written on the wrapper in black marker, in small square handwriting, EAT THIS. H." },
      { choose: [
        { t: "(Eat it.)", then: [
          { n: "It was peanut butter and a little crushed, and she ate it on the train home, which felt like following an order from the vice president of somewhere, and was, she had to admit, a pretty good order." }
        ] },
        { t: "(Keep it for someone who forgets.)", then: [
          { n: "She put it in the inside pocket of her bag, where she kept the things she might need, and the thought arrived fully formed and a little embarrassing, that somewhere somebody was going to need it more than she did." }
        ] }
      ] }
    ] },

    // Niki at the fountain, dancing for "noona", who never comes to watch.
    { id: 'hx3-fountain', area: 'Paulownia Mall', title: 'A crowd at the fountain', label: 'A crowd at the fountain',
      dates: ['5/30', '8/15', '10/10', '12/26', '1/27', '1/30'], slot: 1,
      hint: 'a crowd at the fountain is clapping for someone who keeps calling you noona.',
      place: 'Paulownia Mall · Fountain', scene: [
      { n: "There was a crowd around the fountain at Paulownia Mall, which there never was, the fountain being mostly a place people sat when they'd lost their friends and wanted to look like they hadn't, and the crowd was moving to music, a bright, punchy beat bouncing off the glass ceiling from a phone propped against the fountain's rim on a rolled-up navy blazer." },
      { n: "In the middle of it a boy was dancing. Long-limbed, uniform pants, white shirt untucked and sleeves shoved past the elbow, all of him moving like he'd been built for this specifically and knew it and found it a little funny, and when the song hit the drop he dropped with it so cleanly that the girl next to Solar actually gasped." },
      { n: "He came up out of the last move grinning and breathing hard, scanning the crowd for whoever he'd been showing off for, and found her, and pointed with his whole arm." },
      { s: 'hx-niki', f: 'happy', t: "Noona! You came! You never come!" },
      { n: "The crowd turned around to look at her with the polite collective interest of people who have just been told someone is important." },
      { s: 'hx-niki', f: 'happy-2', t: "Everybody, this is Solar Kim. She's running for president. Vote for her. She's going to destroy my hyung." },
      { choose: [
        { t: "I'm not...", then: [
          { s: 'hx-niki', f: 'neutral', t: "Running for president? You are, though. I saw the posters. There was glitter in my locker for a week." }
        ] },
        { t: "Destroy who?", then: [
          { s: 'hx-niki', f: 'happy', t: "Jungwon hyung! I want to watch him lose so bad. Not forever. Just once. It'd be good for him." }
        ] },
        { t: "(Clap.)", then: [
          { n: "She clapped. He bowed so low his hair brushed his knees and came back up looking pleased enough to do the whole thing again out of pure spite for gravity." }
        ] }
      ] },
      { s: 'hx-niki', f: 'happy', t: "Okay. Your turn. Come on, noona. Eight counts. I'll go slow." },
      { choose: [
        { t: "(Dance.)", then: [
          { n: "She was not a dancer. She was a girl who could run a long way and swing a naginata at things that deserved it, which turned out to translate into roughly eight counts of following him before it fell apart completely, and he laughed so hard he had to sit down on the rim of the fountain, which the crowd applauded too, apparently out of loyalty." },
          { s: 'hx-niki', f: 'happy-2', t: "That was so bad. That was so bad, noona. I'm posting it." }
        ] },
        { t: "Absolutely not.", then: [
          { s: 'hx-niki', f: 'neutral', t: "You did it at the bonfire." },
          { s: 'hx-niki', f: 'happy', t: "Okay, okay. I'll just tag you in mine. Jihoon hyung's going to lose his mind." }
        ] }
      ] },
      { s: 'hx-niki', f: 'neutral', t: "Is your boyfriend coming? The tall one. The one who does pilates and wants to fight everyone." },
      { choose: [
        { t: "He's not my boyfriend.", then: [
          { s: 'hx-niki', f: 'happy', t: "Sure. Might wanna see if he thinks that." },
          { n: "He said it with such cheerful, devastating confidence that Solar, who did not have a tall boyfriend who did pilates, felt a small, sincere pang for whoever did." }
        ] },
        { t: "Which tall one?", then: [
          { s: 'hx-niki', f: 'surprised', t: "There's more than one?" },
          { s: 'hx-niki', f: 'happy-2', t: "Noona. Noona. You have to tell me everything. I'll trade you. I know where Sunghoon hyung goes every Thursday." }
        ] }
      ] },
      { n: "He scooped up his phone to check the video and frowned at it, and frowned harder, and turned the screen around to show her." },
      { s: 'hx-niki', f: 'surprised', t: "Huh." },
      { n: "There was the whole thing, start to finish, him and the music and the fountain and the crowd, and beside him, where she had been standing, an empty patch of floor tile that the crowd kept on clapping for." },
      { s: 'hx-niki', f: 'serious', t: "My phone's broken. No. It's cursed. Jungwon hyung cursed it. He knows I comment on his posts." },
      { music: 'mystery' },
      { n: "The fountain's jets came up all at once on their timer, the way they did every hour, a wall of white water and noise, and when it fell back he was gone, and his phone, and the rolled-up blazer, and the crowd was drifting off the way crowds do, like there'd never been much of anything to watch." },
      { n: "Only the girl who'd gasped was still standing there. She looked at the wet tile, and then at Solar, and then walked away very fast." },
      { n: "Somewhere, Solar figured, a comment section was about to have a very confusing night." }
    ] },

    // Sunghoon, showing off on a winter rink, asking about Cherry without asking about Cherry.
    { id: 'hx3-rink', area: 'Port Island', title: 'A rink on the station plaza', label: 'A winter rink',
      dates: ['12/12', '12/19', '1/9', '1/23', '1/28', '1/31'], slot: 1,
      hint: 'in the cold months the plaza puts in a rink. someone on it is showing off.',
      place: 'Port Island Station · Plaza Rink', stamp: 'hx-view', scene: [
      { n: "Port Island put the rink in every winter on the plaza outside the station, a square of white ice under strings of bulbs, a rental hut that smelled of wet rubber and cocoa, a speaker playing the same six holiday songs well past the point anyone had asked it to, and most nights it was full of couples holding each other up and small children who didn't need holding." },
      { n: "Tonight there was one person on it who didn't belong to either group. He was alone in the middle of the ice in a navy blazer with the sleeves pushed up, and he wasn't skating so much as showing off, spinning so fast he blurred, landing jumps with a soft, careless scrape, as if the Olympics were something he'd considered once and politely turned down." },
      { n: "She watched longer than she meant to. Most of the plaza did." },
      { n: "He came off the ice at the gate right where she was standing, flicking shaved ice off his sleeve, and leaned on the rail beside her like the rail had been installed for that purpose." },
      { s: 'hx-sunghoon', f: 'flustered', t: "Well. Were you enjoying the view?" },
      { choose: [
        { t: "I'd have enjoyed it more if you fell.", then: [
          { s: 'hx-sunghoon', f: 'surprised', t: "Wow. Okay. You've been spending way too much time with Cherry." },
          { s: 'hx-sunghoon', f: 'neutral', t: "That's almost exactly what she said. Are you two sharing a script?" }
        ] },
        { t: "Yes, actually.", then: [
          { s: 'hx-sunghoon', f: 'surprised', t: "...Oh." },
          { n: "It seemed to throw him completely. He looked at her like somebody had handed him a compliment with no strings attached and he couldn't work out where to set it down." },
          { s: 'hx-sunghoon', f: 'flustered', t: "Nobody ever says yes. They say no and then they keep watching." }
        ] },
        { t: "Do you skate every night?", then: [
          { s: 'hx-sunghoon', f: 'neutral', t: "Only when I need to clear my head. It's an old hobby. Not my most masculine one, I've been told." }
        ] }
      ] },
      { n: "He looked at her properly then, for the first time, and something snagged, a small crease between his eyebrows like a word on the tip of his tongue." },
      { s: 'hx-sunghoon', f: 'neutral', t: "Hang on. Solar Kim? At a rink? You told me once ice was just water being dramatic." },
      { s: 'solar', t: "I've grown." },
      { s: 'hx-sunghoon', f: 'serious', t: "Is she here? Your friend. The mean one, with the eyes." },
      { s: 'hx-sunghoon', f: 'flustered', t: "Does she ever talk about me? You don't have to answer that. Answer it." },
      { choose: [
        { t: "Constantly. Mostly threats.", then: [
          { s: 'hx-sunghoon', f: 'flustered', t: "That's still talking about me." },
          { n: "He looked so genuinely pleased that she decided not to mention the threats had been specific." }
        ] },
        { t: "You should ask her yourself.", then: [
          { s: 'hx-sunghoon', f: 'sad', t: "Yeah. I know. I keep almost doing it. Then I go skating instead." },
          { s: 'hx-sunghoon', f: 'neutral', t: "Don't tell Jungwon. He'll put it on a schedule." }
        ] }
      ] },
      { n: "He reached past her into the planter by the rental hut, plucked out one of the plastic poinsettias the rink had wired into it for the season, and bowed so deeply it was almost a threat." },
      { s: 'hx-sunghoon', f: 'flustered', t: "Why hello." },
      { choose: [
        { t: "(Take it.)", then: [
          { n: "She took it. It was plastic and a little dusty and had a price sticker on the bottom of the pot, and he looked at it in her hand with the satisfaction of a man who had won a bet with himself." },
          { s: 'hx-sunghoon', f: 'neutral', t: "Give that to Cherry for me. Tell her it's from a secret admirer. Tell her the admirer is very tall." }
        ] },
        { t: "Pack it up already.", then: [
          { s: 'hx-sunghoon', f: 'surprised', t: "You sound exactly like Jay." },
          { s: 'hx-sunghoon', f: 'sad', t: "Everybody sounds like Jay lately. It's a whole conspiracy." },
          { n: "He stuck the poinsettia behind her ear anyway, very gently, and stepped back to admire his work like he'd hung a painting." }
        ] }
      ] },
      { music: 'mystery' },
      { n: "He pushed off backwards, still looking at her, and did one last lazy spin under the bulbs, and the speaker skipped, the same song stuttering on the same note three times, and when it caught again the middle of the ice was empty, just the long pale curves his blades had cut, already going soft at the edges." },
      { n: "The kid at the rental hut, when she asked, said nobody had rented skates in a blazer all night. He said it like he'd been asked before." },
      { n: "The poinsettia went on her windowsill. She did not know a Cherry, or not this one. She kept it anyway, in case one ever turned up asking." }
    ] }
  ]
});
