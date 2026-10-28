/* Haechan, living world (texts and holidays, 2026-10-21). Loaded after living-texts.js and living-holidays.js; formats in
   core.js (afterRankTexts / textOk / holidayOf, and the header's `heading` note).
   - afterRank 2, 4, 6, 7, 9, 10 (1, 3, 5, 8 are in living-texts.js). They react to the rank scene, never to a choice in it.
     6 and 7 carry pre-solstice `variants` (R / S / H); 9 and 10 the locked route's (R / S / H / stay / true).
   - ambient `am-hc-*`: six everyday texts from him (thread 'haechan'; two only after his rank 8 turn, by `route`) and six
     reactions to story events (gated with `events`, a short window starting the day after). Some go to Yunjin's thread
     and the sisters' group, which write about him.
   - holidays 12/23, 12/31, 1/1, 1/11 (all after the solstice: every scene branches R / S / H / stay / true, and uses
     ifRomance where it matters; the friend route is played for laughs, Kat's ruling).
   His texting voice: lowercase, flat, few words, no emoji. Solar's in hers ("u", "omg"). */
(() => {
  const X = (window.FEMC_GAME_LINK_EXTRAS ||= {});
  const addRank = (id, rank) => { (X[id] ||= {}).afterRank = { ...((X[id] || {}).afterRank || {}), ...rank }; };
  const addHol = (id, days) => { (X[id] ||= {}).holidays = { ...((X[id] || {}).holidays || {}), ...days }; };
  const H = (t) => ({ from: 'haechan', t });
  const R = (t, notes, then) => ({ t, link: 'haechan', notes, then: then.map(H) });

  /* ── afterRank ── */
  const r7brick = { msgs: [H('put the brick back in the roof door'), H('in case')],
    reply: [R('in case what', 3, ['in case.']), R('mitsuru will notice', 2, ['she already did. she stepped over it', "that's a yes. i speak mitsuru now"])] };
  const r10reply = [R('its so good', 3, ['i know', '...thank you']), R('play it again', 2, ['three. laundry room'])];

  addRank('haechan', {
    // 11/11 roof: two places, two names.
    2: { slot: 'late', msgs: [H('roof door sticks after midnight'), H('kick it low. left side. it likes that')],
      reply: [R('how many times have u been up there', 2, ['every night', "it's the only place in this building that doesn't hum"]),
        R('which one of u is texting me rn', 3, ['both', "neither. ask me in person. it changes"])] },
    // 11/25 Game Panic: the duo queue.
    4: { slot: 'evening', msgs: [H("those kids are telling everyone we're professionals"), H('we have to go back and defend it')],
      reply: [R('omg we ARE professionals', 2, ['one of us is', 'you. obviously. i just shoot things']),
        R('u owe me a rematch', 3, ['not a rematch. we were on the same side', 'a re-duo. thursday. bring coins'])] },
    // 12/8 kitchen, three in the morning after the tower: ramen out of the pot, the dog on his feet, "Solar" at the stairs.
    6: { slot: 'late', msgs: [H("pot's still in the sink"), H('your turn')],
      reply: [R('omg ill do it tmrw', 2, ["it's fine. i did it", 'you dried it wrong last time anyway']), R('did u sleep', 3, ['no.', 'did you'])],
      variants: {
        R: { msgs: [H('boss slept on my feet till five'), H("couldn't feel them. didn't move. it was very important to him")],
          reply: [R('hes guarding u lol', 2, ['from what', '...yeah. ok. from that']), R('did u sleep', 3, ['no', 'yeah. a bit. after the dog. after you went up'])] },
        S: { msgs: [H('ken found the empty ramen packets'), H("he's made a chart. i'm on it now"), H('under the dog')],
          reply: [R('omg what does it say', 2, ['noodles. one. unauthorized. with a little stamp', "i've been on worse lists"]),
            R('did u sleep', 3, ['a bit. after you went up', "it's quieter in my head since. don't ask me why. you know why"])] },
        H: { msgs: [H('you went somewhere at the counter'), H('for a second. middle of the ramen'), H("it's fine. i know the look. i've had it in two places")],
          reply: [R('i was right there', 2, ['mostly', "mostly's good. i'll take mostly"]),
            R('where did i go', 3, ["somewhere i haven't been. somewhere with a lot of lights on late", "you don't have to bring me. i'm just saying i saw"])] }
      } },
    // 12/13 roof: full sun, the bad coffee, "I'm not the good one".
    7: { slot: 'evening', ...r7brick,
      variants: {
        R: r7brick,
        S: { msgs: [H('exam tomorrow'), H('eat breakfast. real breakfast. not the coffee from the machine. the coffee from the machine is a crime')],
          reply: [R('u drank the whole thing!!', 2, ["i'm allowed. i'm already ruined", "you're not. eat"]),
            R('what about u', 3, ["i don't have exams. i have you having exams. it's worse"])] },
        H: { msgs: [H('what i said on the roof'), H("it's still true if you end up somewhere i'm not"), H("you just won't have to look at it. that's not a threat. it's a kindness. i'm bad at those")],
          reply: [R('im not going anywhere', 2, ['you might', "that's allowed. i'll keep saying it till it sounds normal"]),
            R('u dont know where im going', 3, ['no', "i know you're going. you've started looking at the station lights like they owe you something"])] }
      } },
    // 1/9 roof: he dreamed one place (or both, or neither).
    9: { slot: 'late', msgs: [H('dreamed again'), H('tell you later')],
      reply: [R('tell me now', 2, ["no. later. it's better in person"]), R('good dream?', 3, ['yeah'])],
      variants: {
        R: { msgs: [H('snowed in the dream again'), H('woke up cold. checked the window. nothing. rude')],
          reply: [R('its gonna snow here soon', 2, ['not the same snow', "i'll take it though"]),
            R('what was i doing in it', 3, ['being awake at three', 'being annoyed about something. you were great at it'])] },
        S: { msgs: [H('had the car dream'), H('he sang the wrong words the whole way. i sang the right ones. woke up hoarse')],
          reply: [R('u sang in ur sleep omg', 2, ['junpei says yes. junpei is a liar', '...also yes']),
            R('which song', 3, ['you know which', 'you made the face just now. i can tell from here'])] },
        H: { msgs: [H('dreamed both again'), H("you weren't in either. you were somewhere with a lot of plastic chairs. you looked like you'd picked it")],
          reply: [R('u dont mind?', 3, ["drawn to isn't the same as tied to", "i'd know. i'm the expert"]),
            R('come with me', 2, ["can't. there's no door for me there. i checked", 'bring me back a story. a long one'])] },
        stay: { msgs: [H('dreamed both again'), H("you weren't in either. you were in the lounge here with the dog on your feet"), H("that one's real. i checked")],
          reply: [R('ill miss u', 3, ['yeah', "me too. it's allowed. both of those"]),
            R('come visit', 2, ['from where', "...ok. yeah. i'll find a way. i always do"])] },
        true: { msgs: [H('one dream. both places in it again'), H('the coffee was bad in both. some things are just true everywhere')],
          reply: [R('omg the coffee', 2, ['drop it.']),
            R('was i there', 3, ['you were the whole dream', "don't make me say that twice. i'll go flat for a week"])] }
      } },
    // 1/23 laundry room: the finished song; she went to bed with his headphones.
    10: { slot: 'late', msgs: [H('keep the headphones')], reply: r10reply,
      variants: {
        R: { msgs: [H('you took the headphones'), H("keep them. closed-back. you'll need them in a lab full of people screaming about ult charge")] },
        S: { msgs: [H('keep the headphones'), H("the discman stays with me. it's used to me. the headphones like you better")] },
        H: { msgs: [H('keep the headphones'), H("wherever you end up. some room i've never been in. put them on and it's me in the corner saying the fridge is flat")] },
        stay: { msgs: [H('keep the headphones'), H("you'll be here with the song. i'll be somewhere with it too. same four minutes. that counts as the same room")] },
        true: { msgs: [H('keep the headphones'), H("it's the same song in every place you go. i checked. i made sure")] }
      } }
  });

  /* ── Ambient ── */
  const T = window.FEMC_GAME_TEXTS;
  const YJ = (t) => ({ from: 'yunjin', t });
  const YR = (t, notes, then) => ({ t, link: 'yunjin', notes, then: then.map(YJ) });
  const AFTER = ['arrived-haechan', 'year-goes-on'];
  if (T) (T.ambient ||= []).push(
    // Everyday, from him.
    { id: 'am-hc-radiator', thread: 'haechan', from: '11/13', to: '12/4', flag: 'arrived-haechan',
      msgs: [H('the radiator in my room knocks'), H("four to the bar. it's in time with the dryer"), H("i'm not complaining. i'm reporting")],
      reply: [R('omg tell mitsuru', 1, ["she'll fix it. then it'll be quiet. then i'll have to hear myself"]),
        R('what tempo', 3, ['92', 'ish. it drags on the three. like you on the stairs'])],
      variants: {
        R: { msgs: [H('radiator in my room knocks'), H('on the two and the four. like a kick that wants to be a snare'), H('somebody should tell it about sidechain')],
          reply: [R('omg nerd', 3, ['drop it.']), R('u can hear that?', 2, ['i can hear everything. it never turns off', "this one's at least in time"])] },
        S: { msgs: [H('radiator in my room knocks'), H('like somebody at the door at five in the morning'), H('i got up and answered it twice. habit. there was nobody')],
          reply: [R('who knocks at 5am', 2, ['people with a job for me', "here, nobody. it's strange. i keep my shoes by the door anyway"]),
            R('come knock on mine instead', 3, ['...', "don't say things like that where jin can see your screen, agasshi"])] },
        H: { msgs: [H('radiator in my room knocks'), H("out of time. like it's listening for somebody in a different building")],
          reply: [R('what building', 2, ['by the station. the one with the lights on late', "you look at it a lot. it's fine. i would too"]),
            R('tell it to stop', 1, ["can't. it's not mine. nothing in here is"])] }
      } },
    { id: 'am-hc-shoes', thread: 'haechan', from: '11/15', to: '12/3', flag: 'arrived-haechan',
      msgs: [H('junpei put a note on my door'), H('it says WHERE DO YOU GO AT SIX AM. in capitals'), H("i'm not answering it")],
      reply: [R('where DO u go', 2, ['out', "the river. the station. anywhere the building isn't awake yet"]),
        R('answer it. hes gonna lose his mind', 3, ['i wrote one word under it. out', 'he wrote WHERE under that', "this is the most anyone's talked to me in a week"])] },
    { id: 'am-hc-machine', thread: 'haechan', from: '11/20', to: '12/12', flag: 'arrived-haechan',
      msgs: [H('the machine at the station restocked'), H('still not the right ones'), H('checked anyway')],
      reply: [R('u dont have to', 2, ['i know', 'i check anyway']), R('whats the right one called', 3, ["you'll remember it before i tell you", "i'm not ruining that"])],
      variants: {
        R: { msgs: [H('checked the station machine again'), H('still none of the pink ones'), H("i check every day. it's not hope. it's a habit")] },
        S: { msgs: [H('left the sweet coffee in your mailbox'), H('the canned one. the bad one'), H("you drink it with your whole face screwed up. in cars. don't ask which car")],
          reply: [R('omg it IS bad', 2, ['yeah. you love it']), R('which car', 3, ['told you not to ask', '...a black one. with a man in the front who sings'])] },
        H: { msgs: [H('the machine by the guesthouse has a new row'), H('cans with stars on them. some candy drink'), H("you'd like it. jihoon bought four and called it destiny. i'm not going near it")],
          reply: [R('omg buy me one', 2, ["no. you'll get it yourself. you go over there a lot", "that's fine. it's a good walk"]),
            R('u should try it', 1, ["it's not for me. it's very clearly not for me"])] }
      } },
    { id: 'am-hc-exam', thread: 'haechan', from: '12/14', to: '12/16', flag: 'arrived-haechan',
      msgs: [H('write the answer once'), H("don't go back and change it. you always change it")],
      reply: [R('how do u know i change them', 2, ['you chew the pen first. then you change it']), R('what if the first one is wrong', 1, ["it isn't. it never is. that's your whole problem"])],
      variants: {
        R: { msgs: [H('write it once. leave it'), H("you'll change it and then the first one'll be right and you'll be mad for a week"), H("i'm not doing that week again")],
          reply: [R('how do u know i change them', 2, ['you chew the pen first. then you change it. pen down, princess']),
            R('what if the first one is wrong', 1, ["it isn't. it never is. that's your whole problem"])] },
        S: { msgs: [H('agasshi'), H('eat breakfast. food. not the coffee'), H("then write it once and don't change it. you always change it")],
          reply: [R('i ate!!', 2, ['liar', "there's an egg in the pot. it's still warm. go"]),
            R('what if i fail', 2, ["then you fail. and somebody'll still make you breakfast tomorrow. eat"])] },
        H: { msgs: [H("jungwon said at dinner you're good at this. to the table. not to me"), H('i hate agreeing with him'), H("so i'm only saying it once. don't change your answers")],
          reply: [R('u agreed with jungwon??', 3, ["don't. it was a low moment"]), R('thank u', 2, ["mm. go. you're late"])] }
      } },
    // Only after the 12/18 turn: romance, then friend (Kat finds friend-zoning him hilarious).
    { id: 'am-hc-chairs', thread: 'haechan', from: '12/26', to: '1/16', flag: AFTER, route: { haechan: 'romance' },
      msgs: [H("there's a second chair in the laundry room"), H("mitsuru put it there. she didn't say anything. she just moved a chair in"), H("i'm never leaving that room")],
      reply: [R('omg she KNOWS', 2, ['she does the locks at three. she knows everything']),
        R('save me the chair', 3, ["it's yours. i've been on the dryer anyway. i'm a dryer person now"])],
      variants: {
        R: { msgs: [H('second chair in the laundry room'), H('mitsuru. no note. no speech. she moved it in and left'), H("i got read like a room by a woman in a dressing gown, princess. it's humbling")] },
        S: { msgs: [H('second chair in the laundry room'), H("mitsuru put it there. hoejangnim. she carried it down herself"), H("the other one would've made a speech and a toast. she just did it. i nearly cried. tell no one")] },
        H: { msgs: [H('second chair in the laundry room'), H('mitsuru put it there'), H("for now is a real amount of time. i'm sitting in it")],
          reply: [R('omg she KNOWS', 2, ['she does the locks at three. she knows everything']),
            R('save me the chair', 3, ["it's yours while there's a laundry room", "after that you'll have somewhere else to sit. that's fine. i mean it"])] },
        stay: { msgs: [H('second chair in the laundry room'), H('mitsuru put it there'), H("it'll still be here after. i took a picture of it. for the other side")] },
        true: { msgs: [H('second chair in the laundry room'), H('mitsuru put it there. i bowed to her. she bowed back'), H("nicest thing anyone's done for me in either place. don't tell her i said either place")] }
      } },
    { id: 'am-hc-friend', thread: 'haechan', from: '12/26', to: '1/16', flag: AFTER, route: { haechan: 'friend' },
      msgs: [H("junpei asked if we're dating"), H('i told him you friend-zoned me in a laundry room at three in the morning'), H('he laughed for six minutes. i timed it')],
      reply: [R('omg i did NOT', 2, ['you did. very kindly. with my name. it was devastating', "i'm framing it"]),
        R('u told JUNPEI??', 3, ["he asked. i don't lie to men in hats", "he bought me a can after. out of pity. best can i've had all week"])] },

    // Reactions to the story.
    // a4-sisters (11/21): the floor was the Sigma house, and Hanni stood in front of Hyein with nothing.
    { id: 'am-hc-sisters', thread: 'haechan', from: '11/22', to: '11/25', flag: 'arrived-haechan', events: ['a4-sisters'],
      msgs: [H('hyein told me what floor it was'), H('the house'), H("...you didn't go up the stairs. good")],
      reply: [R('whats at the top of the stairs', 2, ['a hallway', 'a door. bad lighting. a room that sounds wrong now', "don't go in that one without me"]),
        R('hanni stood in front of hyein. with nothing', 3, ['yeah. she does that', 'she did it to me once. in a hallway. in a costume. she was right to'])] },
    // a5-jungwon-awakens (11/28): he waited up on the stairs, light on, and turned it off when they came in.
    { id: 'am-hc-watch', thread: 'haechan', from: '11/29', to: '12/2', flag: 'arrived-haechan', events: ['a5-jungwon-awakens'],
      msgs: [H('light was on. i know'), H('i turned it off when i heard you on the stairs'), H("he's fine. he's always fine. that's the whole problem with him")],
      reply: [R('u waited up', 3, ['i was awake. different thing', '...yeah. i waited up']),
        R('be nice to him', 1, ['i was. i said four words to him', "that's a record. ask jin"])] },
    // a5-train (12/2): his first night near the tower; Yunjin waited in the lounge.
    { id: 'am-hc-train', thread: 'yunjin', from: '12/3', to: '12/6', flag: 'arrived-haechan', events: ['a5-train'],
      msgs: [YJ('babe. the delivery boy came back from ur tower and sat on the stairs for an hour'), YJ("he doesn't SIT. he lurks"), YJ('what did u people show him')],
      reply: [YR('a train', 2, ['a TRAIN??', "ok. i'm making him tea. he's going to hate it. he's going to drink it"]),
        YR('sit with him jin', 3, ["babe i AM. i'm on the step below him", 'like a guard dog for the guard dog', "he hasn't told me to go away. thats basically a hug"])] },
    // a5-call-runners (12/14): Hyein made him tell her to come home; "Not my call."
    { id: 'am-hc-notmycall', thread: 'sisters', from: '12/15', to: '12/18', flag: 'arrived-haechan', events: ['a5-call-runners'],
      msgs: [{ from: 'hyein', t: "hyein: i'm still mad at him" }, { from: 'hanni', t: "hanni: you're not mad. you're sad. it's different" },
        { from: 'hyein', t: 'hyein: there were two peach sodas outside our door this morning' }, { from: 'hyein', t: 'hyein: STILL MAD. drinking it though' }],
      reply: [{ t: 'hes right tho', then: [{ from: 'hyein', t: 'hyein: dont take his SIDE' }, { from: 'hanni', t: "hanni: she's not taking sides. she's taking a peach soda" }] },
        { t: '(Leave it on read.)', silent: true, then: [{ from: 'hanni', t: 'hanni: good luck on ur exam sol!!' }, { from: 'hyein', t: 'hyein: (still mad)' }] }] },
    // a5-solstice (12/21): he was on the stairs when the charms rang.
    { id: 'am-hc-solstice', thread: 'haechan', from: '12/22', to: '12/25', flag: AFTER, events: ['a5-solstice'],
      msgs: [H('i was on the stairs'), H('i heard it')],
      reply: [R('did u hear which one', 2, ['everybody heard. i heard which one']), R('are u ok', 3, ['yeah', "i'm good. eat something"])],
      variants: {
        R: { msgs: [H('the bell'), H('i heard it from the stairs. it sounded like three in the morning on a quad with nobody on it'), H('ours, then')],
          reply: [R('are u ok', 3, ["yeah. it's a good one", "it's going to be cold over there, princess. start practicing"]),
            R('u heard it?', 2, ['everybody heard. i heard which one', "i've been hearing it since november. it just got loud"])] },
        S: { msgs: [H('the jade'), H("i heard it on the stairs. sounded like somebody's glass against somebody's glass at a long table"), H("agasshi. i'm going to be unbearable about this")],
          reply: [R('u already are', 2, ["i know. it's going to get worse. there's going to be singing"]),
            R('are u ok', 3, ['better than ok', "you've got a tide to get used to. eat something"])] },
        H: { msgs: [H('the star'), H('heard it from the stairs. bright. not mine'), H("that's allowed. i said it before. i'll say it every day till the train if you need it")],
          reply: [R('im sorry', 3, ["don't. you picked something nobody arranged for you", "best sound i've heard all year. i mean that"]),
            R('will u still come down at 3', 2, ['every night', "i'm not going anywhere before you are"])] },
        stay: { msgs: [H('all three stopped'), H('i heard them stop. from the stairs'), H("here, then. ok. here's good. here has a dog")],
          reply: [R('u have to go home tho', 3, ["yeah. that's allowed", 'so is this. both things']),
            R('are u mad', 2, ["no. i'm a bit sad. it's different", "you'll learn the difference. i'll leave notes"])] },
        true: { msgs: [H('all three at once'), H('like a chord'), H("i've been trying to write that for two years and you did it on a train platform")],
          reply: [R('did it sound right', 2, ['in tune. every note', "i'm stealing it. you'll get credit. that matters to me"]),
            R('are u ok', 3, ["i'm both. it's great. it's very loud in here"])] }
      } },
    // a6-new-year (1/1): the whole household at the shrine; Yunjin watched him bow.
    { id: 'am-hc-newyear', thread: 'yunjin', from: '1/2', to: '1/5', flag: AFTER, events: ['a6-new-year'],
      msgs: [YJ('babe did u see the delivery boy at the shrine'), YJ('he clapped twice and bowed like a man at a funeral'), YJ('...i know who taught him that. never mind. happy new year')],
      reply: [YR('happy new year jin', 2, ['happy new year babe', "eat something with rice cakes in it. it doesn't count till u do"]),
        YR('what did u wish for', 3, ['not telling', "its about u. obviously. its always about u"])] }
  );

  /* ── Holidays (all after the solstice; Haechan's 11/23 is in living-holidays.js) ── */
  addHol('haechan', {
    // The Emperor's Birthday. The remember-the-year party (a6-remember) is this evening.
    '12/23': { rank: 7, flag: 'year-goes-on', slot: 'after', title: "the emperor's birthday", place: 'Paulownia Mall', time: 'Daytime', bg: 'paulownia-atrium-christmas', music: 'city',
      ask: "mitsuru gave me the list for tonight. two pages. i don't know why she gave it to me. come carry half", yes: 'omg yes. where r u', ok: 'fountain. 1. she underlined paper cups twice',
      sorry: 'cant today, im so sorry', no: "mm. i'll buy the wrong everything. tell her it was me",
      scene: [
        { n: "Two days before Christmas the mall had given up on taste entirely. Every pillar had tinsel wound round it, the fountain had a plastic tree standing in the middle of the water like it had waded in and changed its mind, and the speakers were playing the same four carols on a loop so tight that by the time she found him she could have sung the next one before it started." },
        { n: "He was at the edge of the fountain holding Mitsuru's list out in front of him with both hands, the way you'd hold a summons. Two pages, in her small exact handwriting, and at the top, underlined twice, *paper cups, not plastic.*" },
        { s: 'haechan', f: 'neutral', t: "Twenty-six people. Thirty, if Jihoon brings the ones who don't technically live anywhere. She's put a number next to the tangerines. The number is a hundred." },
        { ifHeading: 'R', then: [
          { n: "The party aisle on the second floor was a wall of color, streamers and paper crowns and plates with reindeer on them, and at the very end, stacked to the ceiling in sleeves of fifty, red plastic cups. He stopped in front of them. He looked at them long enough that a woman with a trolley went round him twice." },
          { n: "Solar looked at them too, and her stomach went somewhere low and sticky, a floor that held onto your shoes, a staircase with too many people on it, music so loud it had a shape, and she had to put a hand on the shelf." },
          { s: 'haechan', f: 'serious', t: "No. Not those. That house has enough of those for both of us." },
          { s: 'haechan', f: 'neutral', t: "She said paper. She's right. She's always right. It's horrible." },
          { n: "He took down three packets of plain white paper cups and dropped them into her basket without looking, and his hand stayed a second on the rim of the basket, close to hers, in a way it wouldn't have in November." }
        ], else: [{ ifHeading: 'S', then: [
          { n: "The tangerines were downstairs at the grocer's by the entrance, a whole pyramid of them in red net bags, and the old man behind the stall took one look at Haechan and started talking prices, and Haechan took one look at the old man and started talking back." },
          { n: "She didn't follow most of it. She didn't need to. He did it loud and cheerful and outrageous, hands going, the way you'd haggle at a harbor market at six in the morning if you'd been doing it since you were small enough to sit on the crates, and the old man was laughing by the end of it, and threw in a bag for free, and Haechan bowed to him, a short deep bow that made her own back want to answer it." },
          { s: 'haechan', f: 'happy', t: "You don't have a year-end without a box of these on the table. Somebody's housekeeper would come over here and beat me with a rug." },
          { n: "Over their heads the speakers changed from a carol to something old and swooping, a woman's voice over strings, and he sang one line of it under his breath without seeming to know he'd done it, perfectly, and carried the box to the escalator like a trophy." }
        ], else: [{ ifHeading: 'H', then: [
          { n: "She'd stopped in front of the decorations without meaning to. Paper stars, silver, folded, on strings, the kind you hang in a window, and her hand had already taken a packet down and was holding it, the way her hands reached for things lately, before the rest of her had been consulted." },
          { n: "He'd stopped beside her. He looked at the stars and not at her, the way he looked at a can on a railing when he was deciding what to say about it." },
          { s: 'haechan', f: 'neutral', t: "Get those. Jihoon will say they're about him. Let him. Jungwon will hang them dead straight and I'll hate it. Get them anyway." },
          { s: 'haechan', f: 'serious', t: "Your hands keep going for the stars. It's fine. I've been watching your hands a long time. I know when they've decided something." },
          { n: "He took the packet out of her fingers and laid it in the basket himself, on top, so nothing would crush it, and went back to reading Mitsuru's list out loud in his flat voice as if nothing had happened, which was a kindness, and the kind he was best at." }
        ], else: [{ ifHeading: 'stay', then: [
          { n: "He bought everything on the list in the order she'd written it, which nobody else alive would have done, and at the bottom of the second page, under *candles (unscented, for Akihiko)*, there was one more line in different handwriting. His. In pencil. *Two cans.*" },
          { s: 'solar', f: 'neutral', t: "That's not on her list." },
          { s: 'haechan', f: 'neutral', t: "It is now. I'm at the party. I get a line." },
          { s: 'haechan', f: 'sad', t: "Next year I'm somewhere else and you're at this fountain buying a hundred tangerines for a woman who writes like a lawyer. That's good. I just want to have been on one of the lists. That's all." },
          { n: "He said it like a weather report, which was how he said every single thing that mattered, and went to find the cups." }
        ], else: [
          { n: "He bought the paper cups, plain and white, standing in front of the red plastic ones with the face of a man turning down a drink, and then he went downstairs and haggled for the tangerines, loud and outrageous, until the old man at the stall laughed and threw in a bag for free." },
          { n: "Both, in the same twenty minutes. She'd stopped watching for the switch. There wasn't one anymore. He was dry about the cups and he sang a line of the old song on the escalator and it was the same boy the whole time, all of him at once, carrying a box of tangerines like a trophy." },
          { s: 'haechan', f: 'happy', t: "Don't look at me like that. I contain multitudes. Mitsuru said so. She meant it as a complaint." }
        ] }] }] }] },
        { choose: [
          { t: "(Take the heaviest bag before he can.)", notes: 3, stat: { kindness: 1 }, then: [
            { ifRomance: 'haechan', then: [
              { n: "He let her have it for three steps. Then he put his hand over hers on the handle, and didn't take the bag, and didn't take his hand back either, and they carried a hundred tangerines to the monorail like that, badly, both of them, his fingers cold over hers the whole way." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "Good. Friends carry the heavy bag. It's in the rules." },
              { s: 'solar', f: 'neutral', t: "There aren't any rules." },
              { s: 'haechan', f: 'happy', t: "There are now. I'm writing them. Rule one, you carry the tangerines. Rule two, nobody kisses anybody in a laundry room. You've been very good about rule two. Annoyingly good. Suspiciously good." }
            ] }
          ] },
          { t: "Why does Mitsuru want to remember the year?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "Because it happened. Most people get a year and lose it by March. She wants it written down. I get that." },
            { ifRomance: 'haechan', then: [
              { s: 'haechan', f: 'flustered', t: "...I'd remember it anyway. The laundry room part. In case you were wondering. You weren't. Forget it." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "The laundry room part I'm keeping either way. Friends can keep things. I've checked. I check a lot of things about what friends can do. It's a short list." }
            ] }
          ] }
        ] },
        { n: "They came home on the monorail with the tangerines between their feet. Mitsuru checked every item against her list with a pencil when they got in, and found nothing wrong, and looked very faintly disappointed about it, and said thank you to both of them as if she'd been told to by somebody she respected." }
      ] },

    // New Year's Eve: soba in the lounge, then the roof before she goes to the station at eleven (a6-blue-moon is late).
    '12/31': { rank: 8, flag: 'year-goes-on', slot: 'evening', title: "new year's eve", place: 'Iwatodai Dorm · Rooftop', time: 'Evening', music: 'night',
      ask: 'roof after the soba. i stole the big blanket. mitsuru knows', yes: 'omg ok. save me a spot', ok: "the spot's the whole roof. nobody else is that stupid. 8",
      sorry: 'not tonight. im sorry', no: 'mm. happy new year, then. eat all the soba',
      scene: [
        { n: "The soba had been Mitsuru's, bought that morning for twenty, and everyone had eaten it in the lounge with the big year-end singing show on, people in sequins singing to an audience in sequins, and Junpei had cried at a ballad and said it was the steam. By eight the lounge was a warm loud blur. The roof was neither." },
        { n: "He was against the water tank in the big guest blanket off the top shelf of the hall cupboard, and he lifted one side of it when she came through the door without looking up, the way you'd lift the flap of a tent for somebody you'd been expecting for a while." },
        { n: "The moon was already up over the bay. Full again, the second one this month, which the radio had been saying all day like a scandal, and it sat over the water enormous and pale and much too close, and she looked at it and felt the night it was going to be pressing gently at the back of her eyes." },
        { s: 'haechan', f: 'neutral', t: "Blue moon. It's not blue. I checked. I'm filing a complaint." },
        { ifHeading: 'R', then: [
          { s: 'haechan', f: 'neutral', t: "It's six in the morning over there. East coast. You'd be asleep. You'd be pretending to be asleep so nobody could make you go to a thing in a dress." },
          { n: "He took a cigarette out of his jacket and looked at it and put it back, because she was there, without either of them saying a word about it, the way she had a feeling he'd done once before on some other roof with a ladder up the side." },
          { s: 'haechan', f: 'neutral', t: "Next year I'm on a roof up there at midnight with snow on it, and you come up the ladder complaining about the ladder. I've already heard it. It's a good complaint. Very detailed." }
        ], else: [{ ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "At home they ring one big bell at midnight on the television. Thirty-three times. Everybody watches like they've never seen a bell. Here they do a hundred and eight. This country doesn't do anything halfway." },
          { s: 'haechan', f: 'happy', t: "And then soup in the morning, the one with rice cakes, and you're a year older. Doesn't count till you've eaten it. That's the rule. I don't make them." },
          { n: "He said it loud, too loud for a roof, with his breath going up white and his chin on his knees, like a man telling a story to a long table, and she laughed, and he looked pleased with himself in a way he'd stopped bothering to hide sometime around the solstice." }
        ], else: [{ ifHeading: 'H', then: [
          { s: 'haechan', f: 'neutral', t: "You're going to the station later." },
          { n: "She hadn't said so. She'd been planning not to. He didn't look at her when he said it. He looked at the moon, which was the color of a lamp in a window you hadn't been invited into." },
          { s: 'haechan', f: 'sad', t: "Go. I'm not asking where. I'm borrowing you till eleven. Then you go wherever your feet go. They've been going somewhere I'm not for about a month." },
          { s: 'haechan', f: 'sad', t: "That's not me being sad. I'm a bit sad. It's different. Being pulled at isn't the same as being tied. I'd know. I've been pulled at by you in two places, and I still got to choose to sit on this roof." }
        ], else: [{ ifHeading: 'stay', then: [
          { s: 'haechan', f: 'neutral', t: "Next year I'm somewhere else, looking at whatever moon they've got. You're here, on this roof. Same moon, probably. I haven't checked. Don't tell me." },
          { s: 'haechan', f: 'neutral', t: "I keep doing the math on that and it keeps coming out fine. That's the annoying part. I wanted it to come out worse so I could be dramatic." },
          { n: "He said it to the moon, flat, and then pulled more of the blanket over to her side without being asked, which was, she'd learned, the end of the sentence." }
        ], else: [
          { s: 'haechan', f: 'happy', t: "It's six in the morning on one coast, and in an hour they start the bells down the hill, and somewhere a man's about to sit up for the big one on the television. I've got three clocks going in my head. You did that." },
          { n: "He said it in both voices at once, flat and loud, a chord, and she'd mostly stopped being startled by that, the way you stop being startled by your own reflection in a dark window." }
        ] }] }] }] },
        { choose: [
          { t: "(Pull the blanket up over both your heads.)", notes: 3, then: [
            { n: "She pulled it up, and the roof went away, and the moon, and the city, and there was only the dark inside the blanket and the warmth of it and his breath, which had gone very careful." },
            { ifRomance: 'haechan', then: [
              { n: "He found her forehead with his own in the dark, the way you find a light switch in a house you've lived in a long time, and stayed there. Neither of them said happy new year. It wasn't the year yet. It was close enough." }
            ], else: [
              { s: 'haechan', f: 'flustered', t: "This is extremely ambiguous behavior. For a friend." },
              { s: 'haechan', f: 'neutral', t: "I'm going to need you to sign something. I'll draw it up. There'll be clauses." }
            ] }
          ] },
          { t: "What do you want from next year?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "Same as this one. Less tower." },
            { ifRomance: 'haechan', then: [
              { s: 'haechan', f: 'flustered', t: "...More of you saying my name in laundry rooms. That's it. That's the list. It's short. It's a good list." }
            ], else: [
              { s: 'haechan', f: 'happy', t: "And for you to be a worse friend. You're too good at it. I've got nothing to sulk about. I'm a professional sulker and I've been out of work since December." }
            ] }
          ] }
        ] },
        { n: "At a quarter to eleven she got up. He didn't ask. He held the door for her and said happy new year to her back on the stairs, early, in case, and when she looked up from the landing he was still in the doorway with the blanket round his shoulders and the blue moon behind him, like somebody keeping a light on." }
      ] },

    // New Year's Day, later: the shrine (a6-new-year) is the story's; this is the walk after it.
    '1/1': { rank: 8, flag: 'year-goes-on', slot: 'after', title: 'the first walk', place: 'Moonlight Bridge', time: 'Daytime', music: 'tender',
      ask: "after the shrine. when everybody's asleep on the floor. walk with me", yes: 'yes. where to', ok: "you'll see. front door. after",
      sorry: 'cant today im sorry', no: 'ok. happy new year. eat something',
      scene: [
        { n: "By four the whole impossible household had come back from the shrine and fallen asleep in heaps across the lounge, full of amazake and rice crackers, Junpei under the table, Hyein in her rented yukata with a sweater on underneath it and her mouth open, and Haechan was at the front door with his shoes already on, like he'd been waiting since the steps." },
        { n: "They walked. The streets had the stunned clean quiet of the first day of the year, every shop shuttered, pine and bamboo standing at every door like a guard, and the only sound was a kite somewhere overhead, cracking in the wind off the bay, and their own feet." },
        { n: "He walked her out to the middle of Moonlight Bridge and stopped at the rail, and looked down at the water, and back along the empty road, and at her." },
        { s: 'haechan', f: 'serious', t: "This is where I came out. November. Middle of the night, middle of the bridge, no cars, sky gone green. I walked until I heard a dryer." },
        { ifHeading: 'R', then: [
          { s: 'haechan', f: 'sad', t: "I had my headphones on when it happened. Nothing playing. I just wanted the room to stop. Then there wasn't a room." },
          { s: 'haechan', f: 'serious', t: "First thing I thought on this bridge wasn't where am I. It was, she's going to be cold, she's got the jacket at the bottom of a bag she can't open in front of anyone. That's the whole of me, probably. Don't spread it around." },
          { n: "He said it flat, the campus voice, every word handed over like it cost money, and leaned his forearms on the rail, and she leaned hers beside his, close enough this time that there wasn't any cold air between the sleeves at all." }
        ], else: [{ ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "I had gum in my mouth. Cinnamon. I came out on this bridge still chewing the same piece. I chewed it all the way to the dorm. It was the only thing I'd brought with me. Very dignified arrival." },
          { n: "He laughed, loud, and a woman walking a small dog on the far pavement looked over, and he waved at her like a neighbor, and she waved back, bewildered, and he was still grinning when he turned back to the water." },
          { s: 'haechan', f: 'happy', t: "Happy new year, agasshi. On the right day, for once. Somebody always has a calendar that disagrees." }
        ], else: [{ ifHeading: 'H', then: [
          { s: 'haechan', f: 'neutral', t: "I don't remember coming through. I remember thinking you'd be cold. Then I was here." },
          { s: 'haechan', f: 'serious', t: "You're going to go through somewhere else. Not a bridge. A door in a gym, probably, somewhere bright with a lot of folding chairs. I won't be on the other side of it. I came up here last week specially to make my peace with that. It's a good bridge for peace. Nobody uses it." },
          { n: "He said it plainly, without any weight on it, the way you'd tell someone their train was on platform two, and she understood that he'd practiced it until it came out like that, for her, so she wouldn't have to carry it." }
        ], else: [{ ifHeading: 'stay', then: [
          { s: 'haechan', f: 'sad', t: "When the hour ends I think I go back through here. Some version of here. And you stay on this side of the rail." },
          { s: 'haechan', f: 'neutral', t: "So I wanted to see it in daylight. So I'd know what I was leaving. It's a good bridge. You'll walk over it a lot. Think of me in a nice way when you do. Or a rude way. Either's fine." }
        ], else: [
          { s: 'haechan', f: 'happy', t: "I came through one place. You're going to go through all of them at once. I don't know what that looks like. I want to be standing on one of the bridges when you do it." },
          { n: "He said it in the flat voice and the loud one together, and the wind took it out over the water, and she found she was smiling at the sound of it the way you smile at a song that's in two keys and somehow works." }
        ] }] }] }] },
        { choose: [
          { t: "(Stand where he stood that night.)", notes: 3, then: [
            { n: "She stepped off the pavement into the middle of the empty road and stood on the white line with her coat open and the kite cracking somewhere over her head. Nothing happened. No green. Just cold, and the bay, and the whole year in front of her like a road with no cars on it. He watched her the way he listened to a room." },
            { ifRomance: 'haechan', then: [
              { n: "Then he came out and stood on the line with her and put his forehead against hers, and said happy new year, Solar, into the small space between them, plain, on the right day." }
            ], else: [
              { n: "Then he came out and stood on the line next to her, with a careful foot of air between them, and looked down at the foot of air, and then at her." },
              { s: 'haechan', f: 'neutral', t: "This is the most platonic I've ever stood on a bridge. I want that on record. I want a plaque." }
            ] }
          ] },
          { t: "What did you wish for at the shrine?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "Didn't. I never do. I clap and I bow and I don't ask for anything. Asking's how they find out what you want." },
            { ifRomance: 'haechan', then: [
              { s: 'haechan', f: 'flustered', t: "...This year I nearly did. Don't ask what. You were standing right next to me. Work it out." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "This year I nearly asked for you to be a little less nice to me. It's a real problem. I'd like to sulk and I've got no material." }
            ] }
          ] }
        ] },
        { n: "The kite came down somewhere on the Port Island side. They walked back the long way through the shuttered streets, and when they got in the lounge was still asleep, and he stepped over Junpei without looking down and went to put the kettle on for twenty-six people." }
      ] },

    // Coming of Age Day on the Strip.
    '1/11': { rank: 9, flag: 'year-goes-on', slot: 'after', title: 'coming of age day', place: 'Iwatodai Strip', time: 'Daytime', music: 'city',
      ask: "there's a hundred twenty-year-olds on the strip in suits that don't fit. it's a holiday about it. come look", yes: 'omg coming. dont laugh at them without me',
      ok: "i'm not laughing. i'm assessing. 1", sorry: 'cant today, sorry!!', no: "mm. i'll assess alone",
      scene: [
        { n: "Coming of Age Day had filled the Strip with twenty-year-olds. Girls in long-sleeved furisode in every color a kimono could be, sleeves to their knees and white fur round their necks, picking their way down the street in zori like birds on a wire, and boys in black suits bought for the day with the creases still in from the box, and parents everywhere, walking backward, taking pictures." },
        { n: "Haechan was leaning on the wall outside the bookshop with his hands in his jacket and the expression of a man at a party he'd been asked to rate out of ten." },
        { s: 'haechan', f: 'neutral', t: "That one's tie is wrong. That one's going to cry before two. That one's wearing her grandmother's whole savings and she knows it and she's walking like it. Good for her." },
        { ifHeading: 'R', then: [
          { s: 'haechan', f: 'neutral', t: "I used to do this. Stand at a door and watch a hundred people come in and know in four seconds which ones would last. It's a job over there. It's got a title. Don't laugh." },
          { n: "She didn't laugh. She could see it, suddenly, the way she'd seen the ladder: him at the top of some front steps with a red cup he wasn't drinking, reading a room like sheet music, bored, perfect at it, deciding who got in." },
          { s: 'haechan', f: 'serious', t: "Nobody ever made me an adult. I just got very good at deciding who else got to come in. That's not the same. You were the first one I couldn't rate. I'm still annoyed about it." }
        ], else: [{ ifHeading: 'S', then: [
          { s: 'haechan', f: 'happy', t: "Where I'm from nobody throws you a day. You're a man when somebody hands you a job you can't put down. Mine was a girl in a blouse on a pier in November. Keep her alive. That was the whole ceremony." },
          { n: "He said it laughing, like the best joke he knew, and then a boy went past with his tie strangled halfway round his neck, and Haechan pushed off the wall and caught him by the shoulder and fixed it in three quick movements, knot, dimple, collar, the way you'd fix a tie for a man about to walk into a room full of older men, and sent him off with a slap on the back. The boy's mother bowed to him. Twice." },
          { s: 'haechan', f: 'neutral', t: "A man who sings in cars taught me that knot. Don't tell him I remembered. He'll cry." }
        ], else: [{ ifHeading: 'H', then: [
          { s: 'haechan', f: 'neutral', t: "They get a day. Somebody says, now you're grown, now you pick. And then they go home and pick, mostly what their parents picked." },
          { s: 'haechan', f: 'serious', t: "You're doing it without a day. You're picking a door nobody arranged for you. I've been watching. It's the most grown-up thing I've seen anybody do. In either place." },
          { n: "He said it to the street, not to her, and a girl in a furisode the pale silver of a star went past them laughing with her friends, and he watched her go with his head a little on one side, as if he'd heard something in it he liked." }
        ], else: [{ ifHeading: 'stay', then: [
          { s: 'haechan', f: 'neutral', t: "You'll be twenty here. Two years. Mitsuru will make you stand in front of the shrine gate like the families do, and Akihiko will take the picture and cut your head off." },
          { s: 'haechan', f: 'sad', t: "I won't be there. I've decided I'm fine with that. Mostly. Don't send me the picture. I'll know what it looks like anyway. Your head will be cut off." }
        ], else: [
          { s: 'haechan', f: 'happy', t: "In one place I'd be at a door rating them. In the other I'd be fixing that idiot's tie. Watch. I'm going to do both." },
          { n: "He pushed off the wall and caught the boy with the strangled tie and fixed it in three quick movements, and stood back and looked at him the way he looked at everything that came through a door, and said, flat, seven, and then, loud, eight with the tie, and the boy went off grinning without understanding a word." }
        ] }] }] }] },
        { choose: [
          { t: "(Fix his collar while he's busy judging everyone.)", notes: 3, then: [
            { n: "His jacket collar was folded under on one side, the way it always was, apparently, everywhere. She reached up and turned it out. He stopped in the middle of a sentence about somebody's shoes." },
            { ifRomance: 'haechan', then: [
              { s: 'haechan', f: 'flustered', t: "...Don't do that in front of a hundred adults. They'll think I'm one." },
              { n: "He caught her hand on the way down and put it in his jacket pocket with his own, and kept it there, and went on rating strangers out of ten in the same flat voice as if nothing whatsoever was happening in his pocket." }
            ], else: [
              { s: 'haechan', f: 'neutral', t: "Friends fix collars. It's on the list. Under carrying the heavy bag, and above hand-holding, which is not on the list. I checked that one twice." },
              { n: "He said it with tremendous dignity, collar out, and then, when he thought she'd stopped looking, turned it back under himself, because apparently that was how he liked it." }
            ] }
          ] },
          { t: "When did you grow up?", notes: 2, then: [
            { s: 'haechan', f: 'neutral', t: "Haven't. I've just been tall for a long time and nobody's checked." },
            { s: 'haechan', f: 'neutral', t: "You either. You just carry more. Different thing. People mix them up." }
          ] }
        ] },
        { n: "They stayed until the crowd thinned and the light went long and gold down the Strip, and the last of the twenty-year-olds went off toward the station in their creased new suits and their grandmothers' silk, and he watched them go and said they'd be fine, most of them, which from him was a blessing." }
      ] }
  });
})();
