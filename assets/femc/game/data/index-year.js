/* Persona 3: Solstice · the Index: the year in Iwatodai (world 'year'). Format and unlock rules: assets/femc/game/index.js
   header. Spoiler-safe AS OF each unlock: what Solar could say about them the first time. Lore: FEMC-REVAMP-LORE.md, the link
   files (approach / home), data/places.js. P(eople) default to their own portrait folder; L(places) carry their backdrop. */
(() => {
  const W = 'year', A = (window.FEMC_INDEX ||= []);
  const add = (kind, id, name, short, text, unlock, extra) => A.push(Object.assign({ id, kind, world: W, name, short, text, unlock }, extra || {}));
  const P = (id, name, short, text, unlock, face) => add('person', id, name, short, text, unlock || [`met:${id}`, `heard:${id}`], { face: face === undefined ? id : face });
  const L = (id, name, short, text, unlock, bg) => add('place', id, name, short, text, unlock, bg ? { bg } : null);
  const T = (id, name, short, text, unlock, bg) => add('term', id, name, short, text, unlock, bg ? { bg } : null);

  /* ── People: S.E.E.S. ── */
  P('akihiko', 'Akihiko Sanada', 'Third-year · S.E.E.S. · the boxing club', 'The one who found her. Captain of the boxing club, runs every morning, eats protein like it owes him money, and fights Shadows like it\'s training. He treats her like a teammate from the first night, which turns out to matter a lot.');
  P('yukari', 'Yukari Takeba', 'Second-year · S.E.E.S. · the archery club', 'Popular, quick, and tired of being looked at. She shoots on the archery range after school and tells Solar she doesn\'t have to wait for her, then looks relieved when she does.');
  P('junpei', 'Junpei Iori', 'Second-year · S.E.E.S. · the class clown', 'Cap, handheld game, a joke for every silence. Junpei acts like nothing is serious, which is how you can tell when something is.');
  P('mitsuru', 'Mitsuru Kirijo', 'Third-year · S.E.E.S. · student council president', 'The Kirijo heiress who runs the student council, the dorm and most rooms she walks into. Exacting, private, and kinder than she lets anyone see.');
  P('fuuka', 'Fuuka Yamagishi', 'Second-year · S.E.E.S. · the Navigator', 'Gentle and a little shy, with flour on one cheek more evenings than not. In the Dark Hour she\'s the voice in everyone\'s ear.');
  P('aigis', 'Aigis', 'S.E.E.S.', 'Perfectly still, perfectly polite, and always turning toward a door a moment before it opens. She takes the dorm roof in the evenings and the world very literally.');
  P('ken', 'Ken Amada', 'Fifth-grader · S.E.E.S.', 'Ten or eleven, very correct, and practising with a taped pole at the shrine playground long after other kids go home. He bows when he notices you watching.');
  P('koromaru', 'Koromaru', 'S.E.E.S. · a very good dog', 'A white Shiba with a red collar who keeps watch at the top of the shrine steps. One ear always turns to you before the rest of him does.');
  P('shinjiro', 'Shinjiro Aragaki', 'Third-year · an old friend of Akihiko\'s', 'Long maroon coat, beanie pulled low, the back alley behind Port Island Station. He looks at you like you\'re the one who doesn\'t belong there, and he cooks better than anyone in the dorm.');
  P('ikutsuki', 'Shuji Ikutsuki', 'Gekkoukan\'s chairman', 'The school\'s chairman and S.E.E.S.\'s adviser, fond of puns nobody laughs at. He signs the forms that made a place for Solar here.', ['heard:ikutsuki']);
  P('elizabeth', 'Elizabeth', 'The Velvet Room\'s attendant', [
    { t: 'A woman in blue with an enormous book, regarding the world with polite, intense interest. She keeps the Velvet Room, deals its cards, and treats everyday Iwatodai like a museum.' },
    { t: 'Her compendium has a page for everyone who enters this world. Solar\'s page is blank, and Elizabeth has never seen that before.', unlock: ['met:elizabeth', 'at:The Velvet Room'] }]);
  P('wren', 'Wren', 'A girl in a porter\'s coat', 'The first friendly face Solar met: a gentle, frightened girl in a coat too big for her, who sits on the last bench at Iwatodai Station and keeps missing the last train.', ['met:wren', 'heard:wren']);

  /* ── People: Iwatodai, Gekkoukan and the Persona world ── */
  P('rio', 'Rio Iwasaki', 'Second-year · the tennis club', 'Still on the far court long after practice ends, serving into an empty box and glaring at every ball that clips the tape. Blunt, fair, and harder on herself than on anyone.');
  P('saori', 'Saori Hasegawa', 'Second-year · the library committee', 'The quiet girl at the library desk, stamping due dates with great care and lowering her eyes whenever the room lowers its voice.');
  P('ann', 'Ann Takamaki', 'Visiting from Tokyo · Persona 5', 'Red jacket, blonde pigtails, strong opinions about crepes. She hangs around Paulownia Mall\'s fountain when she\'s in town, and her friends are a train ride away.');
  P('kasumi', 'Kasumi Yoshizawa', 'Gymnast · Persona 5 Royal', 'A red-haired gymnast running the same thirty seconds of a ribbon routine on the flat stones at Naganaki Shrine until the light gives out.');
  P('haru', 'Haru Okumura', 'Gardener · Persona 5', 'Someone brought the dead planters on the Gekkoukan roof back to life. It was her: a trowel, a thermos, and a sunhat the wind keeps trying to steal.');
  P('kuromi', 'Kuromi', 'Exchange student · the dorm', 'A second-year from Mariland Girls\' Academy on a one-year Kirijo exchange, moved into one of the dorm\'s empty rooms. Black jester hat, a marker in her teeth, usually in the middle of a crime.');
  P('mymelody', 'My Melody', 'Exchange student · the dorm', 'Kuromi\'s schoolmate from Mariland, here since July. The kitchen smells of almonds on Wednesdays, and somebody is humming a tune that goes up at the end like a question.');
  P('kat', 'Kat & Ethan', 'New in town · two huskies', 'A couple just moved to Port Island from the States, being towed around town by Cosmo, the grey diva, and Wanda, the chaotic baby. They\'re working through a list of how to become locals.', ['met:kat']);
  P('bookworms-couple', 'Bunkichi & Mitsuko', 'The old couple at Bookworms', 'They run the used bookshop on the Strip, misplace things together, and treat every customer like a grandchild who\'s been away too long.', ['heard:bunkichi', 'heard:mitsuko'], 'bunkichi');
  P('hgmaster', 'The Master', 'Hagakure\'s owner', 'Behind the counter at Hagakure, a man of few words and enormous bowls. He remembers your order before you do.', ['heard:hgMaster', 'job:hagakure'], null);
  P('kurosawa', 'Officer Kurosawa', 'The police box at Paulownia Mall', 'A policeman who sells weapons and armor over the counter, quietly, to students who need them. He asks no questions and expects the same.', ['heard:kurosawa', 'did:police'], 'kurosawa');
  P('fanclub', 'Akihiko\'s fan club', 'Ōta, Hiyori, Maki and Sonoda', 'A committee of girls who track Akihiko\'s schedule, his matches and, increasingly, whoever is walking next to him.', ['heard:ota', 'heard:hiyori', 'heard:maki', 'heard:sonoda', 'heard:fanclub'], 'ota');

  /* ── People: visitors ── */
  P('kiriko', 'Kiriko', 'A visitor · Overwatch', 'A girl with a purple-streaked ponytail who sweeps Naganaki Shrine from top to bottom, then sits on the offering box eating a melon pan. Solar\'s hands seem to know her somehow.');
  P('mercy', 'Mercy', 'A visitor · Overwatch', 'A doctor in a white coat with no hospital badge, doing rounds on a ward she doesn\'t work on. None of the nurses have had the nerve to ask.');
  P('sebastian', 'Sebastian', 'A visitor · Stardew Valley', 'A tall guy in a black hoodie under the Game Panic awning, watching the rain like someone who\'d rather be in a basement.');
  P('aphrodite', 'Aphrodite', 'A visitor · Smite', 'A woman in white and gold who makes the whole Port Island concourse go quiet, then looks at you as if you\'re late.');
  P('judy', 'Judy Alvarez', 'A visitor · Cyberpunk 2077', 'Dyed hair, a headlamp, and half her body inside Club Escapade\'s jukebox, swearing at it in two languages.');
  P('rohan', 'Rohan Kishibe', 'A visitor · JoJo\'s Bizarre Adventure', 'A manga artist in a green headband at the back table of Bookworms, drawing so fast the pen sounds like rain.');
  P('widowmaker', 'Widowmaker', 'A visitor · Overwatch', 'A cool, unhurried woman who turns up on Moonlight Bridge in the evenings, as though she\'s waiting for a shot that never comes.');

  /* ── People: searchers ── */
  P('hanni', 'Hanni Pham', 'A searcher · Syracuse', 'A small girl with thick bangs at Chagall\'s window table, two iced coffees already ordered, waving with her whole arm like you\'re late and it doesn\'t matter. She knows Solar. Solar doesn\'t know her yet.');
  P('hyein', 'Hyein Lee', 'A searcher · Syracuse', 'Very tall, very straight hair, telling a mannequin in Paulownia Mall exactly what\'s wrong with its jacket. Hanni\'s other half, and just as sure that Solar is hers.');
  P('minji', 'Minji Kim', 'A searcher · Syracuse', 'A girl in a backwards cap on the Port Island seawall with an old camera, filming the light on the water. She lowers it the second you walk into frame.');
  P('jaehyun', 'Jaehyun Lee', 'A searcher · Syracuse', 'Running all hundred and twelve of the shrine steps until the light goes, and not out of breath at the bottom, like he expected you at exactly this minute.');
  P('mark', 'Mark Lee', 'A searcher · Syracuse', 'Playing the seagull-painted public piano in Port Island Station like he\'s talking to someone who hasn\'t shown up yet.');
  P('haechan', 'Haechan', 'A searcher · Syracuse and Incheon', 'The boy on top of the dorm\'s dryer at an hour nobody does laundry, headphones around his neck, who looks up a second before you reach the door. Being near him feels like remembering a song.');
  P('danielle', 'Danielle Marsh', 'A searcher · Syracuse', 'Curly dark hair, a folder on her knees, on the overpass above Iwatodai Station watching the turnstiles and writing some of it down.');
  P('jaemin', 'Na Jaemin', 'A searcher · Syracuse', 'He\'s made Mandragora karaoke\'s biggest booth his own, and does terrible accents on the couch for an audience of one bored kid and a melon soda.');
  P('chenle', 'Zhong Chenle', 'A searcher · Syracuse', 'A short blonde boy in a grey hoodie in the back row of Game Panic, playing a four-seat cabinet alone, very still, soda can set down at a measured angle.');
  P('yunjin', 'Huh Yunjin', 'A searcher · Incheon', 'Solar\'s best friend since tenth-grade English, loud and fearless in a yellow puffer, and the one who says the true thing out loud. She calls her Sol.');
  P('jungwon', 'Yang Jungwon', 'A searcher · Hanlim and Incheon', 'A boy in a navy blazer that isn\'t Gekkoukan\'s, still in the student council room long after the meeting ended, red pen in hand. He looks up like he\'s been expecting a vote.');
  P('jihoon', 'Park Jihoon', 'A searcher · Hanlim', 'Tall, navy blazer, cocky, losing to Game Panic\'s crane game with the grim focus of a king trying to win back his throne. He says Solar\'s name without turning around.');
  P('cherry', 'Cherry', 'A searcher · Hanlim', 'The girl in Wild-Duck\'s corner booth with her arms folded so tight it looks structural. She doesn\'t wave. She points at the seat across from her.');
  P('sunoo', 'Kim Sunoo', 'A searcher · Hanlim', 'Sunshine with an apron on. He runs Yeobo\'s Cafe as carefully as if his grandmother were watching, and worries out loud about whether everyone has eaten.');
  P('junkyu', 'Kim Junkyu', 'A searcher · Hanlim', 'A round-faced boy losing at a dance game to a ten-year-old and cheering for the ten-year-old louder than anyone.');
  P('sunghoon', 'Park Sunghoon', 'A searcher · Hanlim and Incheon', 'At Yeobo\'s window table, the one that faces the door, beside a single flower in a vase, looking up every time the bell goes.');
  P('jay', 'Park Jongseong', 'A searcher · Hanlim and Incheon', 'Letterman jacket, sharp jaw, an unlit cigarette behind one ear. Jay cooks in the dorm kitchen because the guesthouse one locks at nine.');
  P('niki', 'Nishimura Riki', 'A searcher · Hanlim and Incheon', 'Every high score at Game Panic says RKI. A long-limbed boy in a silver puffer, eating a banana one-handed and winning with the other.');

  /* ── Places ── */
  L('dorm', 'Iwatodai Dorm', 'Home', 'The dorm by the station where S.E.E.S. lives: a lounge with a good couch, a kitchen with a rota nobody follows, a rooftop, and a room on the fourth floor nobody talks about at breakfast.', 'date:4/6', 'iwatodaidorm-livingroom');
  L('command', 'The Command Room', 'Iwatodai Dorm · fourth floor', 'Monitors, a long table and a locked door. Where S.E.E.S. plans its nights.', ['at:Iwatodai Dorm · Command Room', 'date:4/9'], 'iwatodaidorm-commandroom');
  L('dormroof', 'The dorm rooftop', 'Iwatodai Dorm', 'A rail, a few planters, the whole city lit up below. Where people go to be alone together.', ['at:Iwatodai Dorm · Rooftop'], 'iwatodaidorm-roof-evening');
  L('gekkoukan', 'Gekkoukan High', 'School', 'Port Island\'s high school, run by the Kirijo Group. Solar arrived already wearing its uniform, which nobody can quite explain.', 'date:4/7', 'gekkoukanhigh');
  L('library', 'Gekkoukan Library', 'Gekkoukan High', 'Quiet tables by the window and the smell of old paper and floor wax. Twice as good on a rainy day.', ['did:library', 'at:Gekkoukan High · Library', 'met:saori'], 'school-library');
  L('roofgarden', 'The rooftop garden', 'Gekkoukan High', 'Raised beds on the school roof that somebody keeps alive. There\'s always weeding, watering and something to carry.', ['did:schoolgarden', 'at:Gekkoukan High · Rooftop Garden', 'met:haru'], 'rooftop-day');
  L('council', 'The student council room', 'Gekkoukan High', 'Stacks of paper, a bulletin board and a light that stays on long after meetings end.', ['at:Gekkoukan High · Student Council Room', 'met:mitsuru'], 'gekkoukan-student-council');
  L('courts', 'The tennis courts', 'Gekkoukan High', 'Chain-link, a cart of balls and the far court, where someone is always still practising.', ['at:Gekkoukan High · Tennis Courts', 'met:rio'], 'gekkoukan-tennis-courts');
  L('boxing', 'The boxing club', 'Gekkoukan High', 'A ring, heavy bags, tape and sweat. Akihiko\'s second home.', ['at:Gekkoukan High · Boxing Club', 'met:akihiko'], 'gekkoukan-boxing-club');
  L('strip', 'Iwatodai Strip', 'By the station', 'The narrow street by the station: cheap food that fixes a bad day, a pharmacy, used books and the bathhouse.', ['at:Iwatodai Strip', 'did:hagakure', 'did:wildduck', 'did:books', 'did:aohige', 'did:bathhouse'], 'location-2');
  L('hagakure', 'Hagakure', 'Iwatodai Strip', 'Ramen in bowls the size of hubcaps. The rainy-day special is famous for a reason, and the Mega Bowl has a wall of fame.', ['did:hagakure', 'did:megabowl', 'at:Iwatodai Strip · Hagakure', 'at:Hagakure'], 'hagakure-ramen');
  L('wildduck', 'Wild-Duck Burger', 'Iwatodai Strip', 'Loud, greasy, home of the Mystery Burger. Finishing a large takes nerve.', ['did:wildduck', 'at:Iwatodai Strip · Wild-Duck Burger'], 'wilduckburger');
  L('bookworms', 'Bookworms', 'Iwatodai Strip', 'A used bookshop run by a kind old couple. Books bought here get read at the dorm, a chapter a night.', ['did:books', 'job:bookworms', 'at:Iwatodai Strip · Bookworms'], 'bookworms-inside');
  L('aohige', 'Aohige Pharmacy', 'Iwatodai Strip', 'Medicine and supplies for a night in Tartarus. Small sales when it rains.', ['did:aohige', 'at:Iwatodai Strip · Aohige'], 'aohigepharmacy-outside');
  L('bathhouse', 'The bathhouse', 'Iwatodai Strip', 'Hot water that takes the day off you. You walk out glowing.', ['did:bathhouse', 'at:Iwatodai Strip · Bathhouse'], 'iwatodai-bathhouse');
  L('yeobos', 'Yeobo\'s Cafe', 'Iwatodai Strip', [
    { t: 'A café that wasn\'t on the Strip last week. The sign is hand-lettered, and the cups are exactly where Solar expects them to be.' },
    { t: 'Sunoo runs it the way he ran the one back home: perfectly, and mostly by himself.', unlock: 'met:sunoo' }], ['job:yeobos', 'at:Iwatodai Strip · Yeobo', 'met:sunoo'], 'yeobos-cafe');
  L('riverside', 'The riverside', 'Iwatodai', 'A path along the water at the end of the Strip, good for walking dogs, running, and conversations that need moving feet.', ['at:Iwatodai · Riverside', 'met:kat'], 'park-2');
  L('mall', 'Paulownia Mall', 'Port Island', 'Coffee, boutiques, karaoke, the arcade and a small cinema around a fountain, plus a police box that sells more than directions.', ['at:Paulownia Mall', 'did:chagall', 'did:boutique', 'did:karaoke', 'did:arcade', 'did:cinema'], 'paulownia-mall');
  L('chagall', 'Chagall Café', 'Paulownia Mall', 'A café famous for one strange drink, Pheromone Coffee. The window table is the one to get.', ['did:chagall', 'job:chagall', 'at:Paulownia Mall · Chagall'], 'chagall-cafe-inside');
  L('gamepanic', 'Game Panic', 'Paulownia Mall', 'Loud cabinets, sticky buttons and middle-schoolers who never lose. The back row is quieter, and stranger.', ['did:arcade', 'at:Paulownia Mall · Game Panic', 'at:Paulownia Mall · Arcade'], 'gamepanic-inside');
  L('karaoke', 'Mandragora', 'Paulownia Mall · karaoke', 'Private booths, a tired clerk and a songbook as thick as a dictionary.', ['did:karaoke', 'at:Paulownia Mall · Karaoke'], 'paulownia-karaoke');
  L('screenshot', 'Screen Shot', 'Paulownia Mall · the cinema', 'A small theater with weekend showings. The bill changes every week.', ['did:cinema', 'at:Paulownia Mall · Screen Shot'], 'screenshot-theater');
  L('policebox', 'The police box', 'Paulownia Mall', 'Weapons and armor for Tartarus, sold quietly over the counter.', ['did:police', 'at:Paulownia Mall · Police Box'], 'policestation-outside');
  L('bebluev', 'Be Blue V', 'Paulownia Mall', 'An accessory boutique: pretty things that also help in a fight.', ['did:bebluev', 'at:Paulownia Mall · Be Blue V'], 'bebluev-outside');
  L('escapade', 'Club Escapade', 'Paulownia Mall', 'A nightclub with a temperamental jukebox and somebody usually inside it.', ['at:Paulownia Mall · Club Escapade', 'met:judy'], 'clubescapade');
  L('capsule', 'Capsule Corner', 'Paulownia Mall', 'A row of capsule machines by the escalator: keychains, phone cases and the odd surprise.', ['did:capsule', 'at:Paulownia Mall · Capsule'], 'inside-mall');
  L('mayoido', 'Mayoido Antiques', 'Paulownia Mall', 'Antiques, rare goods and sealed cards. It buys the materials Shadows drop, trades rare finds for Velvet Plumes, and doesn\'t ask where you got them.', ['did:mayoido'], null);
  L('flowers', 'The flower stall', 'Paulownia Mall', 'A tiny stall by the fountain. Most customers are buying flowers for somebody else.', ['job:flowers', 'at:Paulownia Mall · Flower Stall'], 'paulownia-flower-shop');
  L('photobooth', 'The photo booth', 'Paulownia Mall', 'By the escalators. Four frames, a curtain, and strips that end up in phone cases.', ['at:Paulownia Mall · Photo Booth', 'at:Iwatodai Station · Photo Booth'], 'paulownia-photo-booth');
  L('station', 'Iwatodai Station', 'The monorail', 'Benches, vending machines, the last train, and people waiting for trains with somewhere to be.', ['at:Iwatodai Station', 'did:vending', 'met:wren'], 'iwatodai-station');
  L('overpass', 'The overpass', 'Iwatodai Station', 'Glass and steel over the ticket gates. The best seat in town for watching who leaves.', ['at:Iwatodai Station · Overpass', 'met:danielle'], 'iwatodai-station-overpass');
  L('guesthouse', 'Kirijo Guesthouse', 'By the station', 'The Kirijo Group\'s guesthouse near the station, with a kitchen that locks at nine. Visitors from far away stay here.', ['at:Kirijo Guesthouse', 'at:Iwatodai Station · Kirijo Guesthouse'], 'kirijo-guesthouse-day');
  L('portstation', 'Port Island Station', 'The busy side of the bay', 'Crowds on the concourse, a public piano painted with seagulls, and a back alley most people walk around.', ['at:Port Island Station', 'met:mark', 'met:aphrodite'], 'location-1');
  L('alley', 'The back alley', 'Port Island Station', 'Behind the station. Not a place to linger, unless you have the nerve.', ['did:alley', 'at:Port Island Station · Back Alley', 'met:shinjiro'], 'portisland-back-alley-night');
  L('respawn', 'Respawn', 'Port Island Station', 'A late-opening café full of glowing monitors. Solar doesn\'t remember it opening.', ['job:respawn', 'at:Port Island Station · Respawn'], 'respawn-cafe-evening');
  L('portisland', 'Port Island', 'The pier, the park, the harbor', 'Wind off the bay, room to think, and a beach cleanup on weekend mornings.', ['at:Port Island ·', 'did:pier', 'did:beachclean'], 'park');
  L('pier', 'The pier', 'Port Island', 'Salt wind, gulls and a long rail over the water.', ['did:pier', 'at:Port Island · Pier'], 'port-island-pier');
  L('seaside', 'Seaside Park', 'Port Island', 'A strip of park and beach on the bay, with a seawall made for sitting.', ['did:beachclean', 'at:Port Island · Seaside Park', 'met:minji'], 'port-island-seaside-park');
  L('fishmarket', 'The fish market', 'Port Island', 'Ice, salt and diesel. They need hands on days off, early.', ['job:fishmarket', 'at:Port Island · Fish Market'], 'port-island-fish-market');
  L('konbini', 'The corner store', 'Port Island', 'The convenience store by the station. The night-shift clerk looks like he\'s seen things.', ['job:konbini', 'at:Port Island · Convenience Store'], 'port-island-konbini-night');
  L('shrine', 'Naganaki Shrine', 'Iwatodai', 'Stone steps, an offering box, fortunes tied to the tree and a playground behind it. Quiet most days.', ['at:Naganaki Shrine', 'did:pray', 'did:fortune', 'did:shrinesweep'], 'outside-shrine-day');
  L('hospital', 'Tatsumi Memorial Hospital', 'Iwatodai', 'The clinic can fix being tired or sick, for a price, and the children\'s ward always wants volunteers.', ['at:Tatsumi Memorial Hospital', 'did:clinic', 'did:wardvisit'], 'hospital-outside');
  L('bridge', 'Moonlight Bridge', 'Between Iwatodai and Port Island', 'The long bridge across the bay, lit up at night like a necklace.', ['at:Moonlight Bridge'], 'moonlightbridge');
  L('yakushima', 'Yakushima', 'The summer trip', 'An island of old forest and long beaches, and a Kirijo villa with a balcony over the sea.', ['at:Yakushima'], 'yakushima-beach');
  L('recordshop', 'The record shop', 'Paulownia Mall', 'Crates of vinyl and a listening booth just big enough for two.', ['at:Paulownia Mall · Record Shop'], 'record-shop-listening-booth');

  /* ── Terms ── */
  T('darkhour', 'The Dark Hour', 'Midnight, and then some', 'A hidden hour between one day and the next. The lights go out, the moon turns huge and green, and most people sleep through it sealed in coffins without ever knowing.', 'date:4/6', 'darkhour-iwatodai-street');
  T('coffins', 'Coffins', 'The Dark Hour', 'What ordinary people become during the Dark Hour: still, sealed, safe, and unaware anything happened.', 'date:4/7');
  T('tartarus', 'Tartarus', 'The tower', 'A labyrinth of a tower that rises out of Gekkoukan High during the Dark Hour. Its floors shift every night. It\'s where Solar woke up.', 'date:4/6', 'tartarus-lobby');
  T('shadows', 'Shadows', 'What waits in the Dark Hour', 'Creatures that roam the Dark Hour and the floors of Tartarus. They have weaknesses; finding them is half of every fight.', 'date:4/6');
  T('personas', 'Personas', 'Another self', 'A Persona is a self you didn\'t know you had, called up to fight. Each has its own skills, strengths and weaknesses.', 'date:4/6');
  T('haenim', 'Haenim', 'Solar\'s Persona', 'Lady Sun, from the Korean tale of the sister who became the sun. She wears charms nobody can explain: a bell, a jade ring, a star pin, headphones.', 'date:4/6');
  T('evokers', 'Evokers', 'S.E.E.S.', 'Silver devices shaped like guns. Pressed to the temple and fired, they call out a Persona. Nobody likes how it looks.', 'date:4/8');
  T('sees', 'S.E.E.S.', 'Specialized Extracurricular Execution Squad', 'The dorm\'s secret club: students who stay awake in the Dark Hour and climb Tartarus. Officially, it doesn\'t exist.', 'date:4/8');
  T('kirijo', 'The Kirijo Group', 'Port Island', 'The company behind Gekkoukan High, the dorm, the guesthouse and a good part of Port Island. Mitsuru\'s family.', ['date:4/10', 'met:mitsuru']);
  T('fullmoon', 'The full moon', 'Every month', 'On full-moon nights something bigger than the usual Shadows comes out. S.E.E.S. keeps a calendar.', 'date:4/9');
  T('velvet', 'The Velvet Room', 'A blue door', 'A room between dream and reality behind a door nobody else seems to notice. Elizabeth deals skill cards and rare cards there, and fuses Echoes.', ['met:elizabeth', 'at:The Velvet Room', 'did:velvet', 'at:Paulownia Mall · Velvet'], 'velvetroom-elevator');
  T('compendium', 'The Compendium', 'Elizabeth\'s book', 'A record of every Persona registered, so a lost one can be called back. Find it under Records in the menu.', ['met:elizabeth', 'date:4/16']);
  T('links', 'Social Links', 'Bonds', 'Time spent with someone deepens your bond, rank by rank. Each one carries an arcana, and higher ranks bring perks for fights and for daily life.', 'links:1');
  T('arcana', 'Arcana', 'The tarot', 'The cards behind every bond and every Persona, from the Fool to the World, and a few nobody has ever drawn before.', 'links:1');
  T('stats', 'Social stats', 'Knowledge, Courage, Proficiency, Charm, Kindness', 'Five sides of Solar that grow with what she does with her days. Some people and choices wait until one is high enough. Each climbs to rank 15 over more than one year (New Game+ keeps them), with rewards at ranks 5, 8, 10, 12 and 15: see the Status screen.', 'date:4/8');
  T('fragments', 'Memory fragments', 'The Journal', 'Déjà vu that won\'t let go: a song she knows, a smell, a name on the tip of her tongue. Each one goes in the Journal, and following them changes where her year leads.', 'frag:1');
  T('echoes', 'Echoes', 'A second slot', 'Myths that answer Solar alone: collectible sub-Personas that lend Haenim their skills and cover her weak spots. They grow as you fight with them, and Elizabeth can fuse two into a third.', 'date:4/10');
  T('theurgy', 'Theurgy', 'Battle', 'Fighting fills each member\'s Theurgy gauge. When it\'s full, their big move costs nothing.', 'date:4/10');
  T('shuffle', 'Shuffle Time', 'After a fight', 'Sometimes the cards come out after a battle. Pick one: a skill, a Revelation card, or an Echo.', 'date:4/10');
  T('cards', 'Revelation cards', 'Battle', 'Cards slotted into each fighter\'s six card slots for small, stacking edges. Tarot Dust levels them up.', 'date:4/10');
  T('access', 'Access points', 'Tartarus', 'Glowing gates on certain floors of Tartarus. They save your climb and take you home to rest.', 'date:4/9');
  T('plumes', 'Velvet Plumes', 'The Boutique', 'Blue feathers Elizabeth pays out for new Echoes and finished sets, spent at the Boutique on new looks.', ['met:elizabeth', 'date:4/16']);
  T('jobs', 'Part-time jobs', 'Yen', 'A shift pays yen and uses up the time. Each job keeps its own days, and some regulars become stories of their own.', ['job:bookworms', 'job:konbini', 'job:tutor', 'job:respawn', 'job:fishmarket', 'job:yeobos', 'job:flowers', 'job:chagall', 'job:hagakure', 'job:amulets', 'date:4/20']);
  T('visitors', 'Visitors', 'From other games', 'People from far-off worlds who were running from endings of their own, and woke up here. They don\'t know Solar, and they\'re as lost as she is.', ['met:kiriko', 'met:mercy', 'met:sebastian', 'met:aphrodite', 'met:judy', 'met:rohan', 'met:widowmaker']);
  T('searchers', 'Searchers', 'From Solar\'s other lives', 'People who know Solar, and followed the hole she left. They step through at midnight, awake and missing her. "It\'s you. Why don\'t you know me?"', ['met:hanni', 'met:hyein', 'met:minji', 'met:jaehyun', 'met:yunjin', 'met:jungwon', 'met:jihoon', 'met:cherry']);
  T('syracuse', 'Syracuse', 'A name that keeps coming back', 'Snow on a quad, a sorority porch, stage lights, a gold bell. A life in upstate New York, coming back in pieces.', ['frag:R:1', 'met:hanni', 'met:hyein']);
  T('incheon', 'Incheon', 'A name that keeps coming back', 'A harbor, a big house with a gate, the smell of the sea in winter, a jade ring on a red cord. A life in Korea, coming back in pieces.', ['frag:S:1', 'met:yunjin']);
  T('hanlim', 'Hanlim', 'A name that keeps coming back', 'A school hallway plastered with campaign posters, a café with a hand-lettered sign, a star pin. A life in Korea, coming back in pieces.', ['frag:H:1', 'met:jungwon', 'met:jihoon']);
})();
