/* Persona 3: Solstice · the Index: Hanlim (the HOAX epilogue, world 'hoax'). Format and unlock rules: assets/femc/game/index.js
   header. Listed only once she's been to Hanlim. Spoiler-safe as of each unlock: the HOAX state the game starts from (FEMC-
   REVAMP-LORE.md, "the HOAX side at Ch 99"), nothing the act itself decides. Sources: data/epi/hoax/world.js (places, cast,
   faces), people.js, people-crew.js, story-nana.js. */
(() => {
  const W = 'hoax', A = (window.FEMC_INDEX ||= []);
  const add = (kind, id, name, short, text, unlock, extra) => A.push(Object.assign({ id: `${W}-${id}`, kind, world: W, name, short, text, unlock }, extra || {}));
  const P = (id, name, short, text, unlock, face) => add('person', id, name, short, text, unlock || [`heard:${id}`, `met:${id}`], { face: face === undefined ? `${id}-hoax` : face });
  const L = (id, name, short, text, unlock, bg) => add('place', id, name, short, text, unlock, bg ? { bg } : null);
  const T = (id, name, short, text, unlock, bg) => add('term', id, name, short, text, unlock, bg ? { bg } : null);

  /* ── People ── */
  P('jungwon', 'Yang Jungwon', 'Student council president', 'Hanlim High\'s president, who won the election and picked Solar as his vice president. Earnest, organised to the minute, and her boyfriend. She calls him Won.');
  P('jihoon', 'Park Jihoon', 'An old friend', 'Cocky, quick and meaner than he needs to be, and he has known Solar forever.');
  P('cherry', 'Cherry', 'Her best friend', 'Solar\'s best friend: fierce, funny, arms folded, always on her side even when she\'s yelling at her.');
  P('sunoo', 'Kim Sunoo', 'Council secretary · Yeobo\'s', 'Runs his grandmother\'s café, Yeobo\'s, and keeps the council\'s minutes. Sunshine to everyone, the group\'s peacemaker, and the one who asks if you\'ve eaten.');
  P('heeseung', 'Lee Heeseung', 'The council', 'Keeps the council\'s ledger to the last won and has a key ring for every door in the school.');
  P('jake', 'Jake Sim', 'Jungwon\'s friend', 'Sunny and easygoing, and Layla\'s human. Layla has opinions about Nana.');
  P('jay', 'Park Jongseong', 'Jungwon\'s friend', 'Cool on the outside, protective on the inside, and the one who walks you home under the lamps.');
  P('sunghoon', 'Park Sunghoon', 'Jungwon\'s friend', 'Looks carved on purpose, is very much at home on the ice, and is quieter than his face suggests.');
  P('niki', 'Nishimura Riki', 'Jungwon\'s friend', 'The youngest of the group: arcade high scores, endless energy, and more alt accounts than anyone should have.');
  P('junkyu', 'Kim Junkyu', 'Jihoon\'s crew', 'Warm, round-faced and generous with hugs and ice cream. He\'s happiest losing loudly at the arcade.');
  P('hyunsuk', 'Choi Hyunsuk', 'Jihoon\'s crew', 'Buys two of everything just in case, and has the car everyone ends up in.');
  P('asahi', 'Hamada Asahi', 'Jihoon\'s crew', 'Quiet, and saving his words for when they count.');
  P('jaehyuk', 'Yoon Jaehyuk', 'Jihoon\'s crew', 'Colour-coded notes, a handbook for everything, and the patience to explain procedure twice.');
  P('mom', 'Mom', 'Soyeon Kim', 'Solar\'s mother, usually at work or on the road, and always putting reindeer antlers on someone at Christmas.', ['heard:mom'], 'kim-mom');
  P('dad', 'Dad', 'Jaeseok Kim', 'Solar\'s father: quiet, often away, and "reading" in the dark when she gets home late.', ['heard:dad'], 'kim-dad');
  P('nana', 'Nana', 'The family\'s Samoyed', 'Sixty pounds of white Samoyed who walks Solar, mostly. Everyone in Hanlim loves Nana.', ['did:epi-h-nana', 'event:epi-h-nana-bed', 'at:Hanlim · Home'], 'nana-hoax');
  P('halmeoni', 'Sunoo\'s grandmother', 'Yeobo\'s', 'Yeobo\'s is hers. Sunoo runs it for her, perfectly, because he promised.');
  P('jwmom', 'Mrs. Yang', 'Jungwon\'s mother', 'The author of the errand lists Jungwon carries folded in his pocket.', ['heard:jwmom', 'flag:epi-h-jw-gate']);
  P('girls', 'Eunchae, Kazuha, Chaewon and Sakura', 'Friends at Hanlim', 'Solar\'s friends from school. Eunchae runs Hanlim Unfiltered, so whatever happens, it\'s on the stream by morning.', ['heard:eunchae', 'heard:kazuha', 'heard:chaewon', 'heard:sakura'], 'eunchae-hoax');

  /* ── Places ── */
  L('home', 'Home', 'Hanlim · the Kims\'', 'The Kims\' house: a kitchen, a living room with a tree at Christmas, a front step for sitting on, and Nana at the door.', ['at:Hanlim · Home'], 'epi-h-kim-house-day');
  L('room', 'Her room', 'Hanlim · home', 'Solar\'s room, where most of the important conversations happen whether she wants them to or not.', ['at:Hanlim · Home · Her Room'], 'epi-h-her-room');
  L('school', 'Hanlim High', 'School', 'The school: long hallways, a classroom for make-up exams, a gym, a rooftop and the council room.', ['at:Hanlim · School'], 'epi-h-hallway');
  L('councilroom', 'The council room', 'Hanlim High', 'The student council\'s room: a whiteboard, a cash tin and far too many meetings.', ['at:Hanlim · School · Council Room'], 'epi-h-council-room');
  L('roof', 'The school roof', 'Hanlim High', 'Not technically open. Somebody always has a key.', ['at:Hanlim · School · Rooftop'], 'epi-h-rooftop');
  L('gym', 'The gym', 'Hanlim High', 'Where the school gathers for assemblies, speeches and the things everyone will talk about afterward.', ['at:Hanlim · School · Gym'], 'flashback-hamlim-gym');
  L('yeobos', 'Yeobo\'s', 'Hanlim · Sunoo\'s café', 'A café with a hand-lettered sign, a radiator that does its best, and croissants worth the walk. The council\'s second office.', ['at:Hanlim · Yeobo', 'did:epi-h-yeobos', 'did:epi-h-study'], 'epi-h-yeobos');
  L('street', 'Winter Street', 'Hanlim', 'The main street in the snow: a convenience store, a row of vending machines, and a bench outside where everyone ends up.', ['at:Hanlim · Winter Street', 'did:epi-h-machine'], 'epi-h-winter-street-day');
  L('park', 'The park', 'Hanlim', 'Swings, lamps, snowbanks, and dogs deciding which ones are edible.', ['at:Hanlim · The Park', 'did:epi-h-nana'], 'epi-h-park');
  L('lights', 'The Christmas lights', 'Hanlim', 'Strings of lights over the square every December. Everyone takes the same photo; everyone means it.', ['at:Hanlim · Christmas Lights'], 'epi-h-christmas-lights');
  L('arcade', 'The arcade', 'Hanlim', 'Tokens, a claw machine, and a rhythm game she\'s annoyingly good at now.', ['at:Hanlim · Arcade', 'did:epi-h-arcade'], 'epi-h-arcade');
  L('karaoke', 'Karaoke', 'Hanlim', 'Small rooms, a broken tambourine and scores out of a hundred that people take personally.', ['at:Hanlim · Karaoke', 'did:epi-h-karaoke'], 'epi-h-noraebang');
  L('rink', 'The ice rink', 'Hanlim', 'The outdoor rink by the park. Rented skates a half size too big, and a lot of the wall.', ['at:Hanlim · Ice Rink', 'did:epi-h-rink'], 'epi-h-ice-rink');
  L('library', 'The town library', 'Hanlim', 'A study room with four tables and a heater that clicks.', ['at:Hanlim · Library', 'at:Hanlim · School · Library', 'did:epi-h-library'], 'epi-h-library');
  L('jwstreet', 'Jungwon\'s street', 'Hanlim', 'A quiet street of tidy houses and a gate she knows by heart.', ['at:Hanlim · Jungwon\'s Street'], 'epi-h-jungwon-street-day');
  L('jihoonhouse', 'Jihoon\'s house', 'Hanlim', 'A porch, a front door, and a car parked like it owns the street.', ['at:Hanlim · Jihoon\'s House', 'at:Hanlim · Jihoon\'s Car'], 'epi-h-jihoon-house');
  L('cherryroom', 'Cherry\'s room', 'Hanlim', 'Posters, a mirror with notes tucked behind it, and a bed that\'s seen a lot of sleepovers.', ['at:Hanlim · Cherry\'s Room'], 'epi-h-cherry-room');
  L('party', 'The party', 'Hanlim · winter break', 'Loud music, a crowded house, and everyone from school pretending not to watch everyone else.', ['at:Hanlim · The Party'], 'epi-h-party');

  /* ── Terms ── */
  T('hanlim', 'Hanlim', 'Home', 'A small town in Korea in deep winter: one high school, one main street, and everybody knowing everybody\'s business.', 'always', 'epi-h-jungwon-street-day');
  T('council', 'The student council', 'Hanlim High', 'Jungwon\'s council, and the friends who show up to it anyway. Solar is its vice president.', 'always');
  T('election', 'The election', 'Last term', 'The race for student council president. Jungwon won, and chose Solar as his vice president.', 'always');
  T('unfiltered', 'Hanlim Unfiltered', 'The stream', 'Eunchae\'s account and livestream, where Hanlim\'s gossip goes public. If it\'s on Unfiltered, it happened.', ['heard:stream', 'heard:eunchae']);
  T('forum', 'The Hanlim Forum', 'Online', 'The school\'s anonymous message board. Mostly memes; sometimes a pile-on.', ['heard:forum']);
  T('makeups', 'Make-up exams', 'January', 'The exams Solar missed while she was gone, rescheduled for the new term. The calculus has not gotten easier.', ['date:1/8', 'did:epi-h-study', 'did:epi-h-library']);
  T('glitches', 'Glitches', 'Something coming through', 'Snow falling upward, a clock reading midnight at noon, a face that flickers into someone from S.E.E.S. The Dark Hour hasn\'t quite let go.', 'glitch');
})();
