/* Secrets: hoax. Format in femc-social.js above secrets().
   Source: Hoax (readers/hoax.html), Kat's group-chat school story. Its Solar is Solar Kim of Hamlim High, a different Solar.
   - Wrong group chat: Junkyu adds Solar's "new number" to PARK JIHOON HATE CLUB and gets a digit wrong. Six chats from
     April to January (4/21, 5/12, 6/17, 9/15, 10/27, 12/21, 1/12) plus one late-night DM from Jihoon (7/22). The friends
     figure out she's "other solar", the real Solar Kim gets added in September, the group is renamed in December, and
     the line slowly stretches. Handles and many lines are from the published chats (Ch. 1, 3, 4, 7).
   - Moments: 9/1 (first morning of term, a little dog and a voice at the shrine), 10/13 (a campaign poster at Gekkoukan).
   - Hidden place: Yeobo's Cafe on the strip, open 6/26, 9/25, 11/20 in the evening.
   Haechan isn't part of Hoax and isn't mentioned here. */
FemcSocial.secrets({
  id: 'hoax',
  cast: {
    'hx-jihoon': 'jihoney', 'hx-cherry': 'cherryblossoms', 'hx-hyunsuk': 'geniusuk', 'hx-asahi': 'asanoonecares',
    'hx-jaehyuk': 'jaehyukkie', 'hx-junkyu': 'junkyute', 'hx-solar': 'solarsystem',
    'hx-voice': '???', 'hx-sunoo': 'Sunoo', 'hx-flower': 'Boy with a flower', 'hx-jacket': 'Boy in a letterman jacket',
    'hx-tall': 'Tall boy', 'hx-jungwon': 'Jungwon',
    mitsuru: 'Mitsuru', koromaru: 'Koromaru'
  },
  threads: {
    'hx-gc': { name: 'PARK JIHOON HATE CLUB', members: ['hx-jihoon', 'hx-cherry', 'hx-hyunsuk', 'hx-asahi', 'hx-jaehyuk', 'hx-junkyu', 'hx-solar'] },
    'hx-dm': { name: 'jihoney', members: ['hx-jihoon'] }
  },

  texts: [
    // 1 · Added by mistake.
    { id: 'hx-gc-1', thread: 'hx-gc', date: '4/21', window: 10, slot: 1, stamp: 'wrong-gc', msgs: [
      { sys: 'junkyute added you to "PARK JIHOON HATE CLUB"' },
      { from: 'hx-junkyu', t: "SOL!!! i added ur new number!!!" },
      { from: 'hx-junkyu', t: "welcome back to the gc!!! we missed u for like 3 whole hours!!!" },
      { from: 'hx-asahi', t: "oh goodie just what i needed" },
      { from: 'hx-cherry', t: "remember who's really in 1st mf" },
      { from: 'hx-jihoon', t: "solar come outside im in front of ur house" },
      { from: 'hx-jihoon', t: "nana is barking at my car again" },
      { ask: [
        { t: "Hi? I think you have the wrong number.", then: [
          { from: 'hx-jihoon', t: "ok funny" },
          { from: 'hx-jihoon', t: "open the door" },
          { from: 'hx-asahi', t: "LMAO she's ignoring u. finally a smart decision" }
        ] },
        { t: "Who's Nana?", then: [
          { from: 'hx-jihoon', t: "????????" },
          { from: 'hx-jihoon', t: "UR SON????" },
          { from: 'hx-hyunsuk', t: "jihoon he's ltrly not her son. he's a dog" },
          { from: 'hx-jihoon', t: "solar r u having a stroke" }
        ] },
        { t: "...Who is outside my house?", then: [
          { from: 'hx-jihoon', t: "me. ur favorite human being to ever grace the earth" },
          { from: 'hx-jihoon', t: "who else would it be" },
          { from: 'hx-hyunsuk', t: "be less obvious jihoon ❤" }
        ] }
      ] },
      { from: 'hx-jihoon', t: "wait" },
      { from: 'hx-jihoon', t: "solar just opened her door" },
      { from: 'hx-jihoon', t: "she's in her pajamas holding her phone and she is NOT typing" },
      { from: 'hx-hyunsuk', t: "oh" },
      { from: 'hx-asahi', t: "junkyu who did u add" },
      { from: 'hx-junkyu', t: "SOLAR!!!! i added solar!!!!" },
      { from: 'hx-jaehyuk', t: "Junkyu, I think you got one of the digits wrong." },
      { from: 'hx-junkyu', t: "oh no" },
      { from: 'hx-junkyu', t: "OH NO" },
      { ask: [
        { t: "Sorry. My name actually is Solar. Just not your Solar.", then: [
          { from: 'hx-cherry', t: "a different solar??" },
          { from: 'hx-cherry', t: "like a knockoff" },
          { from: 'hx-hyunsuk', t: "there's TWO?" },
          { from: 'hx-asahi', t: "god help us all" }
        ] },
        { t: "I'll leave you guys alone.", then: [
          { from: 'hx-junkyu', t: "no wait!!! ur so polite!!! the real one would never!!!" },
          { from: 'hx-jihoon', t: "facts" }
        ] },
        { t: "(Mute the chat.)", then: [
          { sys: 'Notifications muted for 1 hour' },
          { from: 'hx-junkyu', t: "hello??? other solar??? r u ok!!!" },
          { from: 'hx-junkyu', t: "do u need some ice cream and hugs!!!" }
        ] }
      ] },
      { from: 'hx-jaehyuk', t: "Someone remove her, please. This is an invasion of her privacy." },
      { from: 'hx-junkyu', t: "i don't know how!!!" },
      { from: 'hx-jihoon', t: "leave her. she's quieter than the real one" }
    ] },

    // 2 · The security question.
    { id: 'hx-gc-2', thread: 'hx-gc', date: '5/12', window: 12, unlock: { stamps: ['wrong-gc'] }, msgs: [
      { from: 'hx-cherry', t: "ok other solar. security question" },
      { from: 'hx-cherry', t: "we need to know ur not a cop" },
      { from: 'hx-cherry', t: "what's ur dog's name" },
      { ask: [
        { t: "I don't have a dog.", then: [
          { from: 'hx-jihoon', t: "a solar without a dog" },
          { from: 'hx-jihoon', t: "thats not a solar thats a stranger" },
          { from: 'hx-asahi', t: "she IS a stranger dumbass" }
        ] },
        { t: "There's a dog at the shrine near my dorm. Koromaru. He's not mine, though.", then: [
          { from: 'hx-jihoon', t: "koromaru" },
          { from: 'hx-jihoon', t: "is he ok" },
          { from: 'hx-jihoon', t: "tell me immediately" },
          { from: 'hx-cherry', t: "jihoon u r ltrly not his dad" },
          { from: 'hx-jihoon', t: "did he tell u that himself? No i Did Not Think So" }
        ] },
        { t: "Is this how you treat every Solar?", then: [
          { from: 'hx-asahi', t: "yes" },
          { from: 'hx-hyunsuk', t: "this is actually nicer" }
        ] }
      ] },
      { from: 'hx-jaehyuk', t: "Where are you from, if you don't mind me asking?" },
      { ask: [
        { t: "Iwatodai. I'm a third-year at Gekkoukan.", then: [
          { from: 'hx-jaehyuk', t: "I've never heard of it." },
          { from: 'hx-hyunsuk', t: "sounds made up" },
          { from: 'hx-junkyu', t: "sounds pretty!!!" }
        ] },
        { t: "A dorm by the sea. The clocks do something weird at midnight.", then: [
          { from: 'hx-asahi', t: "ok thats actually creepy" },
          { from: 'hx-asahi', t: "i like her now" },
          { from: 'hx-junkyu', t: "r u safe!!!" }
        ] }
      ] },
      { from: 'hx-jihoon', t: "ok well other solar since ur here" },
      { from: 'hx-jihoon', t: "weigh in" },
      { from: 'hx-jihoon', t: "is SIX IN THE MORNING too early to pick someone up for starbucks" },
      { from: 'hx-jihoon', t: "I DO NOT WANT TO BE AWAEK AT SIX AM" },
      { ask: [
        { t: "Yes.", then: [
          { from: 'hx-jihoon', t: "THANK U" },
          { from: 'hx-cherry', t: "traitor" }
        ] },
        { t: "Depends. Does he have a car?", then: [
          { from: 'hx-asahi', t: "LMAO she gets it" },
          { from: 'hx-hyunsuk', t: "lol jihoon getting used" }
        ] },
        { t: "I get up at five to run, so no.", then: [
          { from: 'hx-jihoon', t: "FIVE??" },
          { from: 'hx-jihoon', t: "who hurt u" },
          { from: 'hx-junkyu', t: "that's so healthy!!!" }
        ] }
      ] }
    ] },

    // 3 · The campaign.
    { id: 'hx-gc-3', thread: 'hx-gc', date: '6/17', window: 12, unlock: { stamps: ['wrong-gc'] }, msgs: [
      { from: 'hx-cherry', t: "emergency meeting" },
      { from: 'hx-cherry', t: "solar is running for pres" },
      { from: 'hx-cherry', t: "the REAL solar. not u other solar. ur fine" },
      { from: 'hx-asahi', t: "girl wants to watch her best friend get humiliated LMAO I DIG IT" },
      { from: 'hx-junkyu', t: "team solar!!!" },
      { from: 'hx-hyunsuk', t: "other solar whats the pres at ur school like" },
      { ask: [
        { t: "She's a third-year. Red hair. Terrifying. Everyone would follow her into a fire.", then: [
          { from: 'hx-hyunsuk', t: "so same as ours except replace terrifying with snobby" },
          { from: 'hx-cherry', t: "and apparently he has dimples" },
          { from: 'hx-jihoon', t: "quote. LIKE DEEP FKIN CRATER DIMPOLES" },
          { from: 'hx-jihoon', t: "she typed that. i have screenshots" }
        ] },
        { t: "She once threatened to execute someone. I think it was a joke.", then: [
          { from: 'hx-asahi', t: "finally a pres i would vote for" },
          { from: 'hx-jaehyuk', t: "Please don't encourage him." }
        ] },
        { t: "You should all vote for your friend.", then: [
          { from: 'hx-jaehyuk', t: "I'm on the council committee, I have to stay neutral." },
          { from: 'hx-jaehyuk', t: "...But yes." }
        ] }
      ] },
      { from: 'hx-jihoon', t: "if solar was pres she would choose ME as her vice pres, sorry not sorry" },
      { from: 'hx-junkyu', t: "something tells me you might not be the best fit for a vice pres jihoon" },
      { from: 'hx-jaehyuk', t: "I feel like we all know who she would realistically choose" },
      { from: 'hx-hyunsuk', t: "me" },
      { from: 'hx-asahi', t: "nope" },
      { ask: [
        { t: "Tell her good luck from me.", then: [
          { from: 'hx-cherry', t: "other solar is a better best friend than jihoon" },
          { from: 'hx-jihoon', t: "excuse me" },
          { from: 'hx-jihoon', t: "i have her back the MOST" },
          { from: 'hx-jihoon', t: "my 4lifer" }
        ] },
        { t: "Can I vote from another school?", then: [
          { from: 'hx-jaehyuk', t: "No." },
          { from: 'hx-junkyu', t: "yes!!!!" },
          { from: 'hx-jaehyuk', t: "Junkyu." }
        ] }
      ] }
    ] },

    // 4 · A DM, late. Jihoon, to the one Solar who can't tell anybody.
    { id: 'hx-dm-1', thread: 'hx-dm', date: '7/22', window: 14, slot: 1, unlock: { stamps: ['wrong-gc'] }, msgs: [
      { from: 'hx-jihoon', t: "hey" },
      { from: 'hx-jihoon', t: "other solar" },
      { from: 'hx-jihoon', t: "ur up right" },
      { ask: [
        { t: "I'm up.", then: [{ from: 'hx-jihoon', t: "cool" }] },
        { t: "It's almost midnight. You should be asleep before then. Trust me.", then: [
          { from: 'hx-jihoon', t: "why" },
          { from: 'hx-jihoon', t: "nvm i dont want to know. ur lore is creepy" }
        ] }
      ] },
      { from: 'hx-jihoon', t: "can i ask u smth since ur not her" },
      { from: 'hx-jihoon', t: "and u cant tell her bc u literally cant" },
      { from: 'hx-jihoon', t: "how do u tell ur best friend something without ruining like. everything" },
      { from: 'hx-jihoon', t: "we've been best friends since we were kids" },
      { ask: [
        { t: "You just tell her. Before someone else gets there first.", then: [
          { from: 'hx-jihoon', t: "easy for u to say" },
          { from: 'hx-jihoon', t: "nobody's getting there first" },
          { from: 'hx-jihoon', t: "...right?" }
        ] },
        { t: "Maybe you don't have to say it. Maybe you just show up with ice cream.", then: [
          { from: 'hx-jihoon', t: "i always show up with ice cream" },
          { from: 'hx-jihoon', t: "thats the problem" },
          { from: 'hx-jihoon', t: "she thinks thats just what i do" }
        ] },
        { t: "Is this about the Solar I think it's about?", then: [
          { from: 'hx-jihoon', t: "there's only one solar" },
          { from: 'hx-jihoon', t: "no offense" },
          { from: 'hx-jihoon', t: "ok some offense" }
        ] }
      ] },
      { from: 'hx-jihoon', t: "forget it" },
      { from: 'hx-jihoon', t: "dont tell the gc" },
      { from: 'hx-jihoon', t: "especially cherry. she'll put it on a poster" },
      { ask: [
        { t: "I won't tell anyone.", then: [
          { from: 'hx-jihoon', t: "thanks other solar" },
          { from: 'hx-jihoon', t: "ur alright" }
        ] },
        { t: "Goodnight, Jihoon.", then: [
          { from: 'hx-jihoon', t: "night" },
          { from: 'hx-jihoon', t: "dont be weird about it tmrw" },
          { from: 'hx-jihoon', t: "oh wait. u cant. nice" }
        ] }
      ] }
    ] },

    // 5 · The real Solar Kim joins her own group chat.
    { id: 'hx-gc-4', thread: 'hx-gc', date: '9/15', window: 12, unlock: { stamps: ['wrong-gc'] }, msgs: [
      { sys: 'jihoney added solarsystem' },
      { from: 'hx-solar', t: "FINALLY. hello my loyal subjects" },
      { from: 'hx-solar', t: "wait" },
      { from: 'hx-solar', t: "why is there another me in here" },
      { from: 'hx-solar', t: "WHO IS THIS WOMAN" },
      { from: 'hx-junkyu', t: "that's other solar!!! she's been here since april!!!" },
      { from: 'hx-solar', t: "APRIL???" },
      { from: 'hx-solar', t: "jihoon is this ur new best friend???? r u REPLACING ME" },
      { from: 'hx-jihoon', t: "she's quieter than u and she doesnt spam the gc at six am" },
      { from: 'hx-solar', t: "i hate my life so much everyone" },
      { ask: [
        { t: "Hi. I'm the other one.", then: [
          { from: 'hx-solar', t: "hi other one!!!!" },
          { from: 'hx-solar', t: "ok wait ur polite. i'm keeping u" }
        ] },
        { t: "Your friends have been very nice to me. Mostly.", then: [
          { from: 'hx-solar', t: "NICE??" },
          { from: 'hx-solar', t: "they have never been nice to me a day in my life" },
          { from: 'hx-asahi', t: "correct" }
        ] },
        { t: "I've heard a lot about Nana.", then: [
          { from: 'hx-solar', t: "omg ur a nana fan" },
          { from: 'hx-solar', t: "ok ur in. ur so in" }
        ] }
      ] },
      { from: 'hx-solar', t: "ok other solar real question" },
      { from: 'hx-solar', t: "do u have a jihoon" },
      { from: 'hx-jihoon', t: "everyone has a jihoon. not everyone deserves one" },
      { ask: [
        { t: "No. I have a senpai who texts me \"5:12\" and expects me to know what it means.", then: [
          { from: 'hx-solar', t: "that's so much worse" },
          { from: 'hx-hyunsuk', t: "id rather have a jihoon and i hate jihoon" },
          { from: 'hx-jihoon', t: "thank u?" }
        ] },
        { t: "I have a dorm full of people who don't sleep.", then: [
          { from: 'hx-solar', t: "that's literally us" },
          { from: 'hx-cherry', t: "speak for urself" }
        ] },
        { t: "I'm not telling you.", then: [
          { from: 'hx-solar', t: "OMG SHE HAS A MAN" },
          { from: 'hx-jihoon', t: "leave her alone" },
          { from: 'hx-solar', t: "jihoon DEFENDING her???? i'm going to throw up" }
        ] }
      ] }
    ] },

    // 6 · Homecoming, and a line she shouldn't know.
    { id: 'hx-gc-5', thread: 'hx-gc', date: '10/27', window: 12, unlock: { stamps: ['wrong-gc'] }, msgs: [
      { from: 'hx-cherry', t: "OTHER SOLAR. emergency. rate" },
      { from: 'hx-cherry', t: "📷 Photo" },
      { from: 'hx-jihoon', t: "isn't this too much" },
      { from: 'hx-cherry', t: "it's homecoming jihoon nothing is too much" },
      { from: 'hx-solar', t: "HE LOOKS LIKE A WAITER" },
      { ask: [
        { t: "He looks great.", then: [
          { from: 'hx-jihoon', t: "see. other solar has taste" },
          { from: 'hx-solar', t: "other solar is LYING to protect ur feelings" }
        ] },
        { t: "He looks like a waiter.", then: [
          { from: 'hx-solar', t: "TWO SOLARS AGREE" },
          { sys: 'jihoney left the group' },
          { sys: 'cherryblossoms added jihoney' },
          { from: 'hx-jihoon', t: "i didnt ask to come back" },
          { from: 'hx-cherry', t: "and yet" }
        ] },
        { t: "What's homecoming?", then: [
          { from: 'hx-hyunsuk', t: "a dance where everyone pretends theyre in a movie" },
          { from: 'hx-asahi', t: "a dance where everyone is miserable but in nicer clothes" },
          { from: 'hx-junkyu', t: "it's so fun!!!" }
        ] }
      ] },
      { from: 'hx-solar', t: "ok wish me luck other solar" },
      { from: 'hx-solar', t: "election stuff is so close and i think i'm gonna throw up" },
      { ask: [
        { t: "Good luck, Solar Kim.", then: [
          { from: 'hx-solar', t: "omg u used my last name. so formal. i'm crying" },
          { from: 'hx-junkyu', t: "team solar!!! both of them!!!" }
        ] },
        { t: "May the best candidate win.", then: [
          { from: 'hx-solar', t: "WHY DO U SOUND LIKE HIM" },
          { from: 'hx-solar', t: "that's literally what he" },
          { from: 'hx-solar', t: "never mind" },
          { from: 'hx-cherry', t: "what's literally what WHO" },
          { from: 'hx-solar', t: "NOTHING" }
        ] }
      ] }
    ] },

    // 7 · Winter break. Everyone says their thing before the line gets too long. (finale)
    { id: 'hx-gc-6', thread: 'hx-gc', date: '12/21', window: 14, slot: 1, unlock: { stamps: ['wrong-gc'] }, rename: 'SOLAR SYSTEM', stamp: 'solar-system', msgs: [
      { from: 'hx-solar', t: "other solar!!!! it's almost winter break here" },
      { from: 'hx-solar', t: "exams were a prison. hamlim is a prison" },
      { from: 'hx-junkyu', t: "we wanted to say merry christmas early!!! just in case!!!" },
      { from: 'hx-jaehyuk', t: "In case of what?" },
      { from: 'hx-junkyu', t: "idk!!! my messages to her keep taking forever!!!" },
      { from: 'hx-hyunsuk', t: "it says delivered like a whole day later sometimes" },
      { from: 'hx-asahi', t: "creepy. love that for her" },
      { ask: [
        { t: "It's like that on my end too. Like the line's getting longer.", then: [
          { from: 'hx-solar', t: "NO" },
          { from: 'hx-solar', t: "ok then fast. everyone say ur thing" }
        ] },
        { t: "Merry Christmas, everyone.", then: [
          { from: 'hx-junkyu', t: "MERRY CHRISTMAS OTHER SOLAR!!!" },
          { from: 'hx-solar', t: "ok quick everyone say ur thing" }
        ] }
      ] },
      { from: 'hx-cherry', t: "ur alright for a knockoff" },
      { from: 'hx-asahi', t: "u were the least annoying member of this gc. not a compliment. a fact" },
      { from: 'hx-hyunsuk', t: "stay weird about midnight" },
      { from: 'hx-jaehyuk', t: "Please get some sleep. Whatever your clocks are doing." },
      { from: 'hx-junkyu', t: "do u need some ice cream and hugs!!! for the road!!!" },
      { from: 'hx-jihoon', t: "other solar" },
      { from: 'hx-jihoon', t: "thanks for not telling" },
      { from: 'hx-solar', t: "telling WHAT" },
      { from: 'hx-jihoon', t: "nothing" },
      { sys: 'cherryblossoms renamed the group "SOLAR SYSTEM"' },
      { from: 'hx-hyunsuk', t: "two solars. it's a system. i'm a genius" },
      { from: 'hx-solar', t: "that's MY USERNAME u thief" },
      { ask: [
        { t: "Take care of each other.", then: [
          { from: 'hx-solar', t: "we will" },
          { from: 'hx-solar', t: "well. we'll try. jihoon is jihoon" }
        ] },
        { t: "Tell Nana he's a good boy.", then: [
          { from: 'hx-solar', t: "he knows" },
          { from: 'hx-solar', t: "but i'll tell him it's from u" }
        ] },
        { t: "Bye, Solar.", then: [
          { from: 'hx-solar', t: "bye solar" },
          { from: 'hx-solar', t: "whoever u are. u better be happy over there" }
        ] }
      ] },
      { from: 'hx-solar', t: "ok wait one more thing" },
      { from: 'hx-solar', t: "if u ever get a dog name it something stupid" },
      { sys: 'Messages to this group may be delayed' }
    ] },

    // 8 · One of them stays in touch.
    { id: 'hx-gc-7', thread: 'hx-gc', date: '1/12', window: 12, unlock: { stamps: ['solar-system'] }, msgs: [
      { sys: 'Delivered 9 days late' },
      { from: 'hx-junkyu', t: "other solar!!! happy new year!!!" },
      { from: 'hx-junkyu', t: "nana says hi" },
      { from: 'hx-junkyu', t: "he didn't actually say hi he's a dog" },
      { from: 'hx-junkyu', t: "but he would!!!" },
      { ask: [
        { t: "Happy new year, Junkyu.", then: [
          { from: 'hx-junkyu', t: "IT WORKED!!!!" },
          { from: 'hx-junkyu', t: "i'm telling everyone" },
          { from: 'hx-junkyu', t: "they said u were gone but i KNEW" }
        ] },
        { t: "Tell Nana hi back.", then: [
          { from: 'hx-junkyu', t: "he wagged!!! i'm counting it!!!" }
        ] }
      ] },
      { sys: 'Messages to this group may be delayed' }
    ] }
  ],

  moments: [
    // The first morning of the new term: in Hoax, the first day of school starts with Nana, a ball, and a stranger's dog.
    { id: 'hx-maeumi', date: '9/1', slot: 0, label: 'A strange morning', title: "someone else's dog", place: 'Naganaki Shrine', stamp: 'maeumi', scene: [
      { n: "Solar cut through the shrine on the first morning of the new term because she was early, earlier than she had any right to be, the sky still the washed-out blue of something that hadn't decided what kind of day it was, and because Koromaru was usually there." },
      { n: "He was. He had a tennis ball, old and gray and soft with use, and the expression of a dog who had been waiting for exactly her." },
      { s: 'koromaru', f: 'happy', t: "Woof!" },
      { n: "She threw it. It went farther than she meant, past the playground and off the stone path into the hedge, and something came out of the hedge with it in its mouth that was not Koromaru. A tiny dog. Brown eyes. A tail going so hard its whole back half swung along with it." },
      { n: "Koromaru decided at once that they were friends, and decided it with his entire body, and the little dog went over with a squeak." },
      { choose: [
        { t: "Koromaru! Gentle.", then: [
          { s: 'koromaru', f: 'sad', t: "Arf..." },
          { n: "He sat at once, ears flat, looking enormously sorry, which was more than most people managed." }
        ] },
        { t: "(Scoop up the little dog.)", then: [
          { n: "It weighed nothing. It licked her chin twice, very fast, like it was in a hurry to get that done, and squirmed to be put down." }
        ] }
      ] },
      { s: 'hx-voice', t: "Maeumi!" },
      { n: "The voice came from somewhere past the torii, a boy's voice, scared and furious at the same time, the way people sound when they love something small." },
      { s: 'hx-voice', t: "You should learn how to better control your dog." },
      { choose: [
        { t: "He's not my dog.", then: [{ n: "It was true. It didn't feel like much of a defense." }] },
        { t: "Sorry! He was just trying to play.", then: [{ n: "She said it to the gate, mostly. The gate didn't argue." }] }
      ] },
      { n: "She turned around. There was nobody there. Just the gravel, and the gate, and the long shadow of the shrine roof, and when she looked back down, the little dog was gone too, and the ball was sitting at Koromaru's feet like it had never left." },
      { s: 'koromaru', f: 'neutral', t: "Woof." },
      { n: "She thought about the voice all through homeroom. It had sounded like a boy who would yell at a stranger at six in the morning and then go home and feel bad about it all day. Somewhere, she thought, some girl was getting yelled at over a dog." },
      { n: "She hoped that girl yelled back." }
    ] },

    // Election season: in Hoax, Solar spends a whole weekend designing her campaign posters.
    { id: 'hx-poster', date: '10/13', slot: 0, label: 'A strange poster', title: 'vote solar kim', place: 'Gekkoukan High · 2F Hallway', stamp: 'vote-solar-kim', scene: [
      { n: "The poster was on the bulletin board outside the student council room, between a lost-and-found notice and a recruitment flyer for the kendo club, and it had absolutely no business being there." },
      { n: "Somebody had spent a whole weekend on it. You could tell. A sun in yellow marker with a little smiling face, glitter that had gotten everywhere, bubble letters filled in so carefully the marker had soaked through: VOTE SOLAR KIM." },
      { n: "Underneath, in different handwriting, someone had added TEAM SOLAR!!! with three exclamation points. And under that, in a third, smaller, meaner hand: (no she wont)." },
      { choose: [
        { t: "(Touch the glitter.)", then: [{ n: "It came off on her fingertips, pink and gold, and stayed there no matter how she rubbed them on her skirt." }] },
        { t: "(Look for the name of the school.)", then: [{ n: "Bottom corner, small print, a crest she didn't know. Hamlim. She'd never heard of it. She was fairly sure nobody in Iwatodai had." }] }
      ] },
      { s: 'mitsuru', f: 'neutral', t: "Is something the matter?" },
      { n: "Mitsuru-senpai had come out of the council room with a stack of folders, and she stopped beside Solar and read the poster with the same total attention she gave budget reports and Shadows." },
      { s: 'mitsuru', f: 'surprised', t: "Kim? There's no candidate by that name. I would know." },
      { choose: [
        { t: "Maybe it's somebody's joke.", then: [
          { s: 'mitsuru', f: 'neutral', t: "A remarkably sincere one, then. Whoever made this meant every letter." }
        ] },
        { t: "I think she's going to win.", then: [
          { s: 'mitsuru', f: 'neutral', t: "Oh? You sound very sure." },
          { s: 'solar', t: "She has good friends. Loud ones." },
          { s: 'mitsuru', f: 'neutral', t: "...Then she has an advantage I didn't have, my first year." }
        ] }
      ] },
      { n: "Mitsuru reached up and took it down, very carefully, a thumbtack at a time, the way you handle something that belongs to someone else." },
      { s: 'mitsuru', f: 'neutral', t: "I'll keep it in the council room. In case its owner comes looking." },
      { n: "The glitter stayed on Solar's fingers all through third period. It was, she decided, the most aggressively hopeful thing she had ever touched." }
    ] }
  ],

  places: [
    // Yeobo's Cafe: where Sunoo works, and where Solar Kim met the other friend group.
    { id: 'hx-yeobos', area: 'Iwatodai Strip', title: "Yeobo's Cafe", label: "Yeobo's Cafe", dates: ['6/26', '9/25', '11/20'], slot: 1,
      hint: 'a bell rings on the strip, over a door that was not there yesterday.',
      place: "Iwatodai Strip · Yeobo's Cafe", stamp: 'yeobos-cafe', scene: [
      { n: "There was a cafe on the strip that had not been there yesterday, wedged between the shuttered pachinko place and the ramen shop like it had always been there and resented being asked. Warm windows. A hand-lettered sign. YEOBO'S." },
      { n: "The bell above the door dinged when she pushed it open, and inside it smelled like butter and espresso and somebody's homework, and it was so cozy it was almost rude about it." },
      { s: 'hx-sunoo', f: 'happy', t: "Hello, welcome to the cafe!" },
      { n: "The boy behind the counter had soft hair falling in his eyes and a smile that seemed to cost him nothing at all. SUNOO, said his nametag, with a star drawn next to it in gel pen." },
      { s: 'hx-sunoo', f: 'neutral', t: "What can I get you?" },
      { choose: [
        { t: "What do you recommend?", then: [
          { s: 'hx-sunoo', f: 'happy', t: "The croissants! If my friends haven't eaten them all. They do that." }
        ] },
        { t: "Just a coffee, please.", then: [
          { s: 'hx-sunoo', f: 'happy', t: "Just a coffee! Okay. I'm putting a croissant on the tray anyway. You look like you've had a day." }
        ] }
      ] },
      { n: "A booth in the back was full of boys in two different kinds of uniform, all talking at once. One of them got up as she passed, plucked a flower out of the vase on the table, and bowed so deeply it was almost a threat." },
      { s: 'hx-flower', f: 'flustered', t: "Why hello." },
      { s: 'hx-jacket', f: 'serious', t: "Dude. Pack it up already." },
      { s: 'hx-tall', f: 'neutral', t: "Please leave the girl alone, Sunghoon." },
      { n: "The bell dinged again. A boy came in fast, books under one arm, tie loosened like he'd been fighting it all day and had only just won, and Sunoo lit up." },
      { s: 'hx-sunoo', f: 'surprised', t: "Jungwon! Did you ever eat lunch?" },
      { s: 'hx-jungwon', f: 'neutral', t: "When would I have had time to do that." },
      { choose: [
        { t: "(Offer him your croissant.)", then: [
          { n: "He looked at it, and then at her, like a deer in headlights, like nobody had ever just handed him something before without wanting a vote for it." },
          { s: 'hx-jungwon', f: 'flustered', t: "Oh, that's... really nice. Thank you." }
        ] },
        { t: "(Mind your own business.)", then: [
          { n: "She minded her own business. Sunoo didn't. He put a croissant in front of the boy and folded his arms and stood there until he took a bite." }
        ] }
      ] },
      { n: "He glanced at her then, properly, and two deep dimples showed for half a second and went away again." },
      { s: 'hx-jungwon', f: 'surprised', t: "Sorry. You look like someone." },
      { s: 'solar', t: "I get that a lot." },
      { n: "When she left, the bell dinged behind her, and she turned to say goodnight and the strip was just the strip, a dark shopfront, a gap where warm light had been." },
      { n: "There was a receipt in her pocket. One croissant, one coffee, a smiley face in gel pen and come back soon!!! in Sunoo's handwriting. The date at the top was in a year that hadn't happened yet." }
    ] }
  ]
});
