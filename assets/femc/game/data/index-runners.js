/* Persona 3: Solstice · the Index: Syracuse (the Runners epilogue, world 'runners'). Format and unlock rules:
   assets/femc/game/index.js header. Listed only once she's been to Syracuse. Spoiler-safe as of each unlock; nothing past
   what the epilogue shows. Sources: data/epi/runners/world.js (places, cast, faces) and its people / story files. */
(() => {
  const W = 'runners', A = (window.FEMC_INDEX ||= []);
  const add = (kind, id, name, short, text, unlock, extra) => A.push(Object.assign({ id: `${W}-${id}`, kind, world: W, name, short, text, unlock }, extra || {}));
  const P = (id, name, short, text, unlock, face) => add('person', id, name, short, text, unlock || [`heard:${id}`, `met:${id}`], { face: face === undefined ? `${id}-runners` : face });
  const L = (id, name, short, text, unlock, bg) => add('place', id, name, short, text, unlock, bg ? { bg } : null);
  const T = (id, name, short, text, unlock, bg) => add('term', id, name, short, text, unlock, bg ? { bg } : null);

  /* ── People ── */
  P('haechan', 'Haechan', 'Sigma Chi · a producer', 'Headphones, a studio key and a laugh that carries across the quad. He makes music at hours nobody else is awake, and he notices everything about her.');
  P('hanni', 'Hanni Pham', 'Alpha Phi · one of her girls', 'Small, loud with love, and always ordering a second drink in case Solar shows up. Rooms with Hyein down the hall.');
  P('hyein', 'Hyein Lee', 'Alpha Phi · one of her girls', 'Tall, exacting about clothes and fierce about her people. Sheet masks, strong opinions and a door that\'s always open.');
  P('minji', 'Minji Kim', 'SU eSports · the honors dorm', 'Solar\'s teammate, with a camera never far away. She calls targets in the headset and sees more than she says.');
  P('mark', 'Mark Lee', 'Sigma Chi', 'A piano player with a gentle voice and too many apologies he hasn\'t said yet. He still calls her Sol.');
  P('jaehyun', 'Jaehyun Lee', 'The football team', 'Steady, disciplined, the one who doesn\'t ask and just shows up. Practice at the football complex runs his days.');
  P('jaemin', 'Na Jaemin', 'Sigma Chi', 'All charm and bad accents, the friend who can talk his way into anywhere and usually brings snacks.');
  P('chenle', 'Zhong Chenle', 'SU eSports', 'A teammate who lives in the eSports lab, sets his soda down at a measured angle, and almost never loses a fight he takes seriously.');
  P('danielle', 'Danielle Marsh', 'Alpha Phi', 'A sister with a folder, a long memory, and a way of being on the stairs exactly when you\'d rather she wasn\'t.');
  P('olivia', 'Olivia', 'SU eSports', 'The team\'s laugh, a full second before anyone else\'s. She\'ll put a sticker on anything, including the coach.');
  P('haerin', 'Haerin', 'SU eSports', 'Quiet in the lab and flat and exact in the headset. She keeps a notebook on everyone.');
  P('doyoung', 'Doyoung', 'SU eSports · the clipboard', 'He runs the team: a stopwatch in one hand, a clipboard in the other, and a voice that goes flat on the third mistake, which is worse than shouting.');
  P('jeno', 'Jeno', 'One of the boys', 'Easygoing, broad-shouldered and famously allergic to restraint. Usually somewhere near Jaemin.');
  P('mom', 'Mom', 'Manhattan', 'Solar\'s mother, of the Upper East Side apartment, the dinners and the dresses. She texts like the dinner is already planned, because it is.', ['heard:mom', 'met:mom'], 'solji-runners');
  P('dad', 'Dad', 'Manhattan · the Lee Foundation', 'Solar\'s father: a study, a schedule, and expectations that arrived before she did.', ['heard:dad', 'met:dad'], 'jaesang-runners');
  P('han', 'Ms. Han', 'Her father\'s assistant', 'Calendars, cars and reminders, sent on her father\'s behalf. Efficient, polite and never off the clock.', ['heard:han'], null);
  P('mrsoh', 'Mrs. Oh', 'The apartment\'s housekeeper', 'She does the kitchen last and leaves at eight. After eight, the kitchen is anyone\'s.', ['heard:mrsoh'], null);
  P('marco', 'Marco', 'The family\'s events', 'He keeps the lists for the Lee family\'s big evenings: who\'s coming, where they sit, what they eat. He has opinions about all three.');

  /* ── Places ── */
  L('alpha', 'The Alpha Phi house', 'Syracuse · her sorority', 'The big house with the porch where Solar lives with her girls: her room upstairs, Hanni and Hyein\'s down the hall, a kitchen that\'s never empty.', ['at:Syracuse · Alpha Phi House'], 'epi-r-alpha-porch');
  L('sigma', 'The Sigma Chi house', 'Syracuse · the boys\' house', 'Loud on weekends, louder at the holidays. A kitchen, a back porch, and rooms she knows the way to.', ['at:Syracuse · Sigma Chi House'], 'epi-r-sigma-living');
  L('quad', 'The Quad', 'Syracuse University', 'The heart of campus, crossed a thousand times a day, white for most of December.', ['at:Syracuse · The Quad'], 'epi-r-quad-day');
  L('valley', 'The valley', 'Syracuse', 'By daylight just grass under snow, crossed and recrossed by people on their way somewhere.', ['at:Syracuse · The Valley', 'did:epi-r-valley'], 'epi-r-valley');
  L('marshall', 'Marshall Street', 'Syracuse', 'The street off campus: coffee, a used bookstore that smells of radiator heat, and corner tables made for staying too long.', ['at:Syracuse · Marshall Street', 'did:epi-r-coffee', 'did:epi-r-books'], 'epi-r-marshall-st');
  L('bird', 'Bird Library', 'Syracuse University', 'Carrels, quiet floors and a syllabus that kept going without her.', ['at:Syracuse · Bird Library', 'did:epi-r-library'], 'epi-r-bird-library');
  L('lab', 'The eSports lab', 'Syracuse University', 'Headphones, the hum of machines, and the team\'s VODs at quarter speed. Home, for a certain kind of night.', ['at:Syracuse · eSports Lab', 'did:epi-r-vod'], 'epi-r-esports-lab');
  L('studio', 'Studio 4B', 'Syracuse', 'A recording studio up a narrow stairwell, where the music gets made after everyone else is asleep.', ['at:Syracuse · Studio 4B'], 'epi-r-studio-4b');
  L('rooftop', 'The Language Arts rooftop', 'Syracuse', 'A roof above campus that people aren\'t really supposed to be on. The view is worth it, especially in snow.', ['at:Syracuse · Language Arts Rooftop'], 'epi-r-rooftop-night');
  L('football', 'The football complex', 'Syracuse University', 'Turf, floodlights and early practice, rain or snow.', ['at:Syracuse · Football Complex'], 'epi-r-football');
  L('honors', 'The honors dorm', 'Syracuse University', 'Minji\'s building: quiet halls, a desk under a window, camera gear everywhere.', ['at:Syracuse · Honors Dorm'], 'epi-r-minji-room');
  L('dining', 'The dining hall', 'Syracuse University', 'A tray, a table by the window, and a freshman who sits down across from you because every other seat is taken.', ['at:Syracuse · Dining Hall', 'did:epi-r-dining'], 'epi-r-dining-hall');
  L('hall', 'Hall of Languages', 'Syracuse University', 'The old stone building on the hill, with a music room that\'s usually empty in the evening.', ['at:Syracuse · Hall of Languages'], 'epi-r-music-room');
  L('regionals', 'Regionals', 'The tournament', 'A convention hall full of screens and noise, a green room, a loading dock and a van. Where the team finds out what it\'s worth.', ['at:Syracuse · Regionals'], 'epi-r-regionals');
  L('apartment', 'The Lee apartment', 'Manhattan · Upper East Side', 'Her family\'s home: a hall of photographs, a study, a dining room set for more than it seats, and her old room, exactly as she left it.', ['at:Manhattan · The Lee Apartment'], 'epi-r-nyc-living');
  L('building', 'The building', 'Manhattan', 'A lobby with a doorman, an elevator that opens straight onto the family\'s floor, and a service elevator for when you\'d rather not be seen.', ['at:Manhattan · The Building'], 'epi-r-nyc-lobby');
  L('ues', 'The Upper East Side', 'Manhattan', 'Doormen, quiet streets, and a bookstore on Lexington with a cat and a radiator.', ['at:Manhattan · Upper East Side', 'at:Manhattan', 'did:epi-r-nyc-books'], 'epi-r-nyc-street');
  L('park', 'Central Park', 'Manhattan', 'Bare branches in late December, and joggers who\'ve made it a personality.', ['at:Manhattan · Central Park', 'did:epi-r-nyc-park'], 'epi-r-nyc-park');
  L('madison', 'Madison Avenue', 'Manhattan', 'A café where a latte costs nine dollars and comes with a cookie nobody asked for.', ['at:Manhattan · Madison Avenue', 'did:epi-r-nyc-coffee'], 'epi-r-nyc-cafe');
  L('penn', 'Penn Station', 'Manhattan', 'Departure boards, rushing crowds, and the train between Manhattan and Syracuse.', ['at:Manhattan · Penn Station'], 'epi-r-nyc-penn');
  L('subway', 'The subway', 'Manhattan', 'The 6 downtown and back, for no reason, because she was never once allowed to ride it alone as a kid.', ['at:Manhattan · Subway', 'did:epi-r-nyc-subway'], 'epi-r-nyc-subway');
  L('school', 'Her old school', 'Manhattan', 'The school she grew up in, exactly as she remembers it, which is the strange part.', ['at:Manhattan · Her Old School'], 'epi-r-nyc-school');

  /* ── Terms ── */
  T('su', 'Syracuse University', 'Upstate New York', 'Solar\'s university, buried in lake-effect snow by December. The place she chose for herself.', 'always', 'epi-r-quad-day');
  T('esports', 'SU eSports', 'The team', 'Syracuse\'s Overwatch team: five players, a coach with a clipboard and a lab that\'s never really closed. Solar is its support.', ['heard:doyoung', 'heard:olivia', 'heard:haerin', 'at:Syracuse · eSports Lab']);
  T('kiriko', 'Kiriko', 'Her hero', 'Solar\'s main in Overwatch: kunai, healing ofuda and a cleanse saved for exactly the right second. Her hands know the hero by heart.', ['heard:doyoung', 'at:Syracuse · eSports Lab', 'did:epi-r-vod']);
  T('greek', 'Greek life', 'Alpha Phi and Sigma Chi', 'The sorority and fraternity houses that run Syracuse\'s social calendar: parties, formals, rivalries and very long group chats.', ['at:Syracuse · Alpha Phi House', 'at:Syracuse · Sigma Chi House']);
  T('sugram', 'SUgram', 'The app', 'The campus\'s favorite photo app. Everyone posts, everyone looks, and nothing posted stays private for long.', 'always');
  T('foundation', 'The Lee Foundation', 'Her father\'s', 'The family\'s foundation, its name on galas, donations and receptions. Being a Lee means showing up to them.', ['at:Manhattan · Lee Foundation', 'heard:dad', 'heard:han']);
  T('finals', 'Finals week', 'December', 'Exams, all-nighters in Bird Library, and coffee in industrial quantities. Being gone didn\'t stop the syllabus.', 'date:12/8');
  T('glitches', 'Glitches', 'Something coming through', 'Snow falling the wrong way, a clock reading midnight at noon, a face that flickers into someone from S.E.E.S. for a single frame. The Dark Hour hasn\'t quite let go.', 'glitch');
})();
