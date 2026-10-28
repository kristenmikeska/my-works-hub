/* Texts from Solar's parents (2026-10-22, Kat's ruling: "Solar's parents maybe as texts", approved). Loaded after
   living-texts.js; dated texts in core.js deliverTexts' format (FEMC_GAME_TEXTS.texts), sent the night of their date
   (up to two days late, then dropped). The parents never appear in person and have no portraits: their threads show
   the initial (ui.js threadPic falls back to the name's first letter).
   How they fit the lore (FEMC-REVAMP-LORE.md, "Texts from home"):
   - They come down the same crack as everything else from home: her old number in each world, after that world's first
     contact (a4-first-text for Runners, a4-wifey for strangers, a4-hate-club for Hoax). Like the other home texts they
     arrive late at night, and most are old: sent before she went missing, arriving out of order and months late (her
     June birthday lands in September). A few are fresh, after that world's "come home" call. Solar's thumbs answer them
     the way she always did; nothing comes back. Time back home stays unclear.
   - Each thread is named by what the sender is to her (the phone has no contacts from home); the names differ by world
     so the six threads never blur: Father / Mother (Runners), Appa / Eomma (strangers), Mom / Dad (Hoax).
   - Voices follow each novel's current canon: Runners (the state at about 11/22, heading home for Thanksgiving: the
     Foundation Dinner is Monday 11/24, so its text is the last ordinary one, on 11/21, and 11/27 is a text into silence), the Lee parents of Upper East Side, a father who isn't
     a talker and runs things through his office, a mother who says "dear" and dresses her for photographs; strangers
     (Ch 65), the Lee house in Incheon, Taejoon soft and plain ("Sol-ah" is his; Yunjin says "Sol" constantly) and Miseon in full sentences with
     her rules about hair and the jade; Hoax (Ch 99), the Kims, always at work or on the road, a warm mother who loves
     Jihoon ("honey", "alrighty") and a dad the book barely shows (his few lines here are the game's own).
   - Nothing here touches either novel's plot: dinners, dresses, soup, takeout money, holidays, exams.
   - At graduation (3/5) the world Solar's route is going home to sends one more; the true ending gets all three. */
(() => {
  const T = (window.FEMC_GAME_TEXTS ||= { texts: [], threads: {} });
  Object.assign(T.threads, {
    'home-father': 'Father', 'home-mother': 'Mother',
    'home-appa': 'Appa', 'home-eomma': 'Eomma',
    'home-mom': 'Mom', 'home-dad': 'Dad'
  });
  const R = ['a4-first-text'], S = ['a4-wifey'], H = ['a4-hate-club'];
  const m = (from, ...lines) => lines.map(t => ({ from, t }));

  T.texts.push(
    /* ── Runners: Father and Mother ── */
    { id: 'home-r-coat', thread: 'home-mother', date: '9/3', slot: 'late', events: R,
      msgs: m('home-mother', 'Solar, dear, did the coat arrive?', 'The long black one. Please wear it somewhere people can see it.', 'And call your brother back. He worries and then he calls me.'),
      reply: [{ t: 'mom?' }, { t: 'it came. its warm. thank u' }, { t: '(Leave it on read.)', silent: true }] },
    { id: 'home-r-birthday', thread: 'home-father', date: '9/17', slot: 'late', events: R,
      msgs: m('home-father', 'Happy birthday, Solar.', 'My office has booked dinner for Saturday at eight. Your mother has chosen the dress.', 'Eighteen. We will talk about the summer at dinner.'),
      reply: [{ t: 'thank u dad' }, { t: 'its september' }, { t: '(Leave it on read.)', silent: true }] },
    { id: 'home-r-foundation', thread: 'home-mother', date: '11/21', slot: 'late', events: R,
      msgs: m('home-mother', 'Three dresses go up to the penthouse on Monday. The navy is the one, dear.', 'Your father wants you beside him for the photographs.', 'Smile like you mean it. It’s a charity. Text me from the train.'),
      reply: [{ t: 'i know where to stand' }, { t: 'can i wear the black one' }] },
    { id: 'home-r-thanksgiving', thread: 'home-mother', date: '11/27', slot: 'late', events: R,
      msgs: m('home-mother', 'The table is set for four, dear.', 'Your place is where it always is.', 'Your father asked Ms. Han to call the school again.'),
      reply: [{ t: 'mom' }, { t: '(Hold the phone. Don’t answer.)', silent: true }] },
    { id: 'home-r-call', thread: 'home-father', date: '12/15', slot: 'late', events: ['a5-call-runners'],
      msgs: m('home-father', 'Solar.', 'Your mother hasn’t slept.', 'Call the house.'),
      reply: [{ t: 'dad?' }, { t: 'im sorry' }, { t: '(Hold the phone. Don’t answer.)', silent: true }] },
    { id: 'home-r-christmas', thread: 'home-mother', date: '12/25', slot: 'late', flag: 'year-goes-on', events: R,
      msgs: m('home-mother', 'Merry Christmas, dear. The tree went up in the front room.', 'Your stocking is on the end, where it always is.', 'Your father hung it himself. Don’t tell him I told you.'),
      reply: [{ t: 'merry christmas mom' }, { t: 'he did?' }] },
    { id: 'home-r-graduation', thread: 'home-mother', date: '3/5', slot: 'after', flag: 'year-goes-on', heading: ['R', 'true'], events: R,
      msgs: m('home-mother', 'Your father asked me today what you like to eat. For when you’re home.', 'I didn’t know what to tell him, dear.', 'You’ll have to tell him yourself.'),
      reply: [{ t: 'ill tell him' }, { t: 'tell him anything. ill eat it' }] },

    /* ── strangers: Appa and Eomma ── */
    { id: 'home-s-fitting', thread: 'home-eomma', date: '9/11', slot: 'late', events: S,
      msgs: m('home-eomma', 'Solar. The fitting has moved to Thursday at three.', 'Wear your hair up. The seamstress needs to see the line of your neck.', 'Not the jade.'),
      reply: [{ t: 'yes eomma' }, { t: 'which dress' }, { t: '(Leave it on read.)', silent: true }] },
    { id: 'home-s-birthday', thread: 'home-appa', date: '9/24', slot: 'late', events: S,
      msgs: m('home-appa', 'sol', 'happy birthday', 'you came at 4am. bottom of the tide. appa remembers', 'appa made the seaweed soup himself. mrs bang says too much garlic', 'come down and eat it anyway. im in the kitchen'),
      reply: [{ t: 'coming appa' }, { t: 'save me some' }] },
    { id: 'home-s-call', thread: 'home-appa', date: '12/17', slot: 'late', events: ['a5-call-strangers'],
      msgs: m('home-appa', 'sol', 'its late', 'mr oh can come and get you. anywhere', 'just tell appa where'),
      reply: [{ t: 'im here appa' }, { t: '(Hold the phone. Don’t answer.)', silent: true }] },
    // An old one, sent before she went missing (strangers sync, 2026-10-27): it names the day instead of saying "tomorrow".
    { id: 'home-s-seollal', thread: 'home-eomma', date: '2/9', slot: 'late', flag: 'year-goes-on', events: S,
      msgs: m('home-eomma', 'Seollal is Sunday. Your hanbok is pressed and hanging in your room.', 'Hair up for the bows. Your father will want you beside him.', 'Your grandmother’s ring, Solar. The right hand.'),
      reply: [{ t: 'right hand. i know' }, { t: 'yes eomma' }] },
    { id: 'home-s-graduation', thread: 'home-appa', date: '3/5', slot: 'evening', flag: 'year-goes-on', heading: ['S', 'true'], events: S,
      msgs: m('home-appa', 'tides out tonight', 'appas up', 'i left the kitchen light on'),
      reply: [{ t: 'leave it on' }, { t: 'make ramyun. too much water' }] },

    /* ── Hoax: Mom and Dad ── */
    { id: 'home-h-takeout', thread: 'home-mom', date: '9/6', slot: 'late', events: H,
      msgs: m('home-mom', 'honey!! stuck at the office again, home super late', 'theres money on the counter for takeout. feed nana!!', 'and if jihoon’s over theres leftovers in the fridge for him, alrighty?'),
      reply: [{ t: 'OKAYYY' }, { t: 'HES ALWAYS OVER MOM' }] },
    { id: 'home-h-birthday', thread: 'home-mom', date: '10/7', slot: 'late', events: H,
      msgs: m('home-mom', 'HAPPY BIRTHDAY TO MY FAVORITE GIRL', 'im so sorry we’re on the road honey. cake the second we’re home i promise', 'a real one. not the gas station one again'),
      reply: [{ t: 'ITS OKAY MOM!!!!' }, { t: 'chocolate pls :D' }] },
    { id: 'home-h-birthday-dad', thread: 'home-dad', date: '10/8', slot: 'evening', events: H,
      msgs: m('home-dad', 'Happy birthday kiddo.', 'Your mom says I have to say more than happy birthday.', 'Proud of you.'),
      reply: [{ t: 'DAD' }, { t: '-salute-' }] },
    { id: 'home-h-exams', thread: 'home-mom', date: '12/12', slot: 'late', events: H,
      msgs: m('home-mom', 'exams next week right??', 'study hard honey, eat something, and don’t let jihoon keep you up too late!!', 'our vice president!!! dad told everyone at work'),
      reply: [{ t: 'I WILL I PROMISE' }, { t: 'i love u mom' }] },
    { id: 'home-h-call', thread: 'home-mom', date: '12/19', slot: 'late', events: ['a5-call-hoax'],
      msgs: m('home-mom', 'the school says it’s a council retreat??', 'since when does the council go on a retreat in exam week', 'honey please call me back', 'nana’s been on the porch all night. he won’t come in', 'dad’s out driving around. just call, alrighty?'),
      reply: [{ t: 'MOM' }, { t: '(Hold the phone. Don’t answer.)', silent: true }] },
    { id: 'home-h-graduation', thread: 'home-dad', date: '3/5', slot: 'afternoon', flag: 'year-goes-on', heading: ['H', 'true'], events: H,
      msgs: m('home-dad', 'Mom and I are both home this weekend.', 'Both of us. The whole weekend.', 'Bring Nana’s leash.'),
      reply: [{ t: 'BOTH OF U???' }, { t: 'ok dad. ok' }] }
  );
})();
