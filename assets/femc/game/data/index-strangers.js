/* Persona 3: Solstice · the Index: Incheon (the strangers epilogue, world 'strangers'). Format and unlock rules:
   assets/femc/game/index.js header. Listed only once she's been to Incheon. Spoiler-safe as of each unlock, and inside the
   canon fence (data/epi/strangers/world.js): nothing the book hasn't printed, no business, nothing from the war. Sources:
   data/epi/strangers/world.js (places, cast, faces), people.js and people-crew.js. */
(() => {
  const W = 'strangers', A = (window.FEMC_INDEX ||= []);
  const add = (kind, id, name, short, text, unlock, extra) => A.push(Object.assign({ id: `${W}-${id}`, kind, world: W, name, short, text, unlock }, extra || {}));
  const P = (id, name, short, text, unlock, face) => add('person', id, name, short, text, unlock || [`heard:${id}`, `met:${id}`], { face: face === undefined ? `${id}-strangers` : face });
  const L = (id, name, short, text, unlock, bg) => add('place', id, name, short, text, unlock, bg ? { bg } : null);
  const T = (id, name, short, text, unlock, bg) => add('term', id, name, short, text, unlock, bg ? { bg } : null);

  /* ── People ── */
  P('haechan', 'Haechan', 'The annex', 'He lives in the annex at the back of the Lee house. Gum, trot on the car radio, and English one word at a time. He watches the gate like it might move.');
  P('jungwon', 'Yang Jungwon', 'The Yang house', 'The Yang family\'s son: formal and careful, at ease in Mandarin, and impossible to rattle across a baduk board.');
  P('yunjin', 'Huh Yunjin', 'Next door', 'Half New York, loud, sassy and fearless, and the only person Solar tells things to. Her light is on next door most nights. She calls her Sol.');
  P('appa', 'Appa', 'Solar\'s father', 'Up at half past four with the paper and the calendar, crosswords in the study at night. Solar\'s father, and one of only two people who call her Sol.', ['heard:appa', 'met:appa'], 'taesang-strangers');
  P('eomma', 'Eomma', 'Solar\'s mother', 'In the sunroom with her thank-you cards, and pins for Solar\'s hair.', ['heard:eomma', 'met:eomma'], 'miyeon-strangers');
  P('mrsbang', 'Mrs. Bang', 'The Lee kitchen', 'She runs the kitchen and, honestly, the house. She beats the rugs, feeds the koi and glares at anyone who tracks in mud.');
  P('auntie', 'Auntie Song', 'The Lee kitchen', 'In her armchair by the stove with her mending, seeing everything and saying about a third of it.', ['heard:auntie'], 'auntsong-strangers');
  P('pyo', 'Pyo', 'The Lee kitchen', 'Peels garlic at alarming speed and laughs at exactly the wrong moments.');
  P('mroh', 'Mr. Oh', 'The family\'s driver', 'Ten and two on the wheel and never in a hurry. Once, he drove her around until she fell asleep.');
  P('minseok', 'Minseok', 'The gatehouse', 'He keeps the gate and the gatehouse, and the comings and goings of the Lee house in his head.');
  P('sunghoon', 'Park Sunghoon', 'Jungwon\'s friend', 'Composed and exact, with a car and a habit of turning up because Jungwon asked.');
  P('jay', 'Park Jongseong', 'Jungwon\'s friend', 'Cooks, reacts, and pretends he doesn\'t. Find him around the Yang kitchen and the back lane behind it.');
  P('niki', 'Nishimura Riki', 'Jungwon\'s friend', 'Comes over the Lee garden wall instead of through the gate, and stays to eat.');
  P('girls', 'The girls', 'Chaewon, Sakura, Kazuha and Eunchae', 'Solar\'s friends from Songdo: studio stories, a nail salon, a photobooth strip, and a group chat that never sleeps.', ['heard:chaewon', 'heard:sakura', 'heard:kazuha', 'heard:eunchae', 'met:girls'], 'chaewon-strangers');
  P('seo', 'Inspector Seo', 'The police', 'A polite, patient police inspector with a lot of questions. He is not here for the tea.');
  P('koi', 'Mr. and Mrs. Kim', 'The koi', 'Two koi in the Lee garden pond, fed on the back step every morning, and treated with more respect than most guests.', ['at:Incheon · The Lee House · Garden'], null);

  /* ── Places ── */
  L('house', 'The Lee house', 'Incheon · home', 'A big house behind a gate: a front room with a piano, a kitchen that\'s always warm, a garden, a study, and an annex out back.', ['at:Incheon · The Lee House'], 'epi-s-front-room');
  L('room', 'Her room', 'The Lee house', 'Solar\'s room, exactly as she left it, with a window onto the garden and Yunjin\'s light beyond the wall.', ['at:Incheon · The Lee House · Her Room'], 'epi-s-her-room');
  L('kitchen', 'The kitchen', 'The Lee house', 'The house\'s real heart: Mrs. Bang\'s pots, Auntie Song\'s armchair, dumplings for the freezer, and everyone passing through.', ['at:Incheon · The Lee House · Kitchen'], 'epi-s-lee-kitchen-day');
  L('garden', 'The garden', 'The Lee house', 'A walled garden with a koi pond and a back step for sitting on in the cold.', ['at:Incheon · The Lee House · Garden'], 'epi-s-garden-day');
  L('annex', 'The annex', 'The Lee house', 'A small building at the back of the property. Haechan\'s.', ['at:Incheon · The Lee House · Annex'], 'epi-s-annex-day');
  L('study', 'The study', 'The Lee house', 'Appa\'s room: books, a crossword, a trot tape and a baduk board.', ['at:Incheon · The Lee House · Study'], 'epi-s-study');
  L('sunroom', 'The sunroom', 'The Lee house', 'Eomma\'s room, full of light and plants and unanswered thank-you cards.', ['at:Incheon · The Lee House · Sunroom'], 'epi-s-sunroom');
  L('gate', 'The gate', 'The Lee house', 'The gate and the gatehouse. Everyone who comes or goes passes here, and someone always notices.', ['at:Incheon · The Lee House · Gate'], 'epi-s-gate-day');
  L('yang', 'The Yang house', 'Incheon', 'Jungwon\'s family home, with a kitchen that runs on its own rules.', ['at:Incheon · The Yang House'], 'epi-s-yang-house');
  L('car', 'The car', 'Incheon', 'A black car with Mr. Oh at the wheel, or a Rexton with trot on the radio. A lot gets said in cars.', ['at:Incheon · The Car'], 'epi-s-car');
  L('harbor', 'The harbor', 'Incheon', 'Wind off the water, gulls, and the cranes standing over everything like they\'d been told to wait.', ['at:Incheon · Harbor', 'did:epi-s-harbor'], 'epi-s-harbor-day');
  L('mudflats', 'The mudflats', 'Incheon', 'At low tide the sea goes out so far you could walk to the horizon. It always comes back.', ['at:Incheon · The Mudflats'], 'epi-s-harbor-tide');
  L('market', 'The fish market', 'Incheon', 'Ice underfoot, men shouting prices, salt and diesel and cold.', ['at:Incheon · Fish Market', 'did:epi-s-market'], 'flashback-fish-market');
  L('sinpo', 'Sinpo Market', 'Incheon', 'A covered market of snacks, steam and crowds, famous for its fried chicken.', ['at:Incheon · Sinpo Market'], 'epi-s-sinpo');
  L('chinatown', 'Chinatown', 'Incheon', 'Red steps, paper lanterns, and jjajangmyeon at the place with the cracked sign.', ['at:Incheon · Chinatown', 'did:epi-s-chinatown'], 'epi-s-chinatown');
  L('wolmido', 'Wolmido', 'Incheon', 'A seaside promenade of shuttered rides, a fish-cake cart and a grey winter sea.', ['at:Incheon · Wolmido', 'did:epi-s-wolmido'], 'epi-s-wolmido');
  L('songdo', 'Songdo', 'Incheon', 'The glass city across the water: cafés with too many plants, a dance studio, and the international school where Solar met Yunjin.', ['at:Incheon · Songdo', 'did:epi-s-songdo'], 'epi-s-songdo');
  L('bathhouse', 'The bathhouse', 'Incheon', 'Hot water to the chin, ajummas arguing about a drama, and a scrub that takes a layer of you with it.', ['at:Incheon · Bathhouse', 'did:epi-s-bathhouse'], 'epi-s-bathhouse');
  L('noraebang', 'The noraebang', 'Incheon', 'An hour in a small room with a tambourine that only has half its bells.', ['at:Incheon · Karaoke', 'did:epi-s-noraebang'], 'epi-s-noraebang');
  L('pojangmacha', 'The pojangmacha', 'Incheon', 'An orange tent on the street at night: plastic stools, soju and tteokbokki.', ['at:Incheon · Pojangmacha'], 'epi-s-pojangmacha');

  /* ── Terms ── */
  T('incheon', 'Incheon', 'Home, by the sea', 'A port city on the Yellow Sea, its harbor, markets and mudflats. Winter here is grey and salt-cold.', 'always', 'flashback-incheon-harbor');
  T('daeboreum', 'Daeboreum', 'The first full moon', 'The first full moon of the lunar year: nuts cracked for luck, fires and wishes by the sea.', ['date:2/24', 'at:Incheon · Wolmido · Daeboreum'], 'epi-s-daeboreum');
  T('baduk', 'Baduk', 'The game of stones', 'Black and white stones on a nineteen-line board. In the Lee house, games in the study can last all evening and say more than the conversation does.', ['at:Incheon · The Lee House · Study', 'heard:appa']);
  T('trot', 'Trot', 'Music', 'Old-fashioned Korean pop, all vibrato and heartbreak. Somebody\'s always playing it in a car.', ['at:Incheon · The Car', 'at:Incheon · The Lee House · Study']);
  T('dust', 'Yellow dust', 'Spring', 'The first spring winds bring fine yellow dust from the west, and the whole city goes a little sepia.', ['at:Incheon · Street in the Dust', 'date:3/4'], 'epi-s-dust');
  T('glitches', 'Glitches', 'Something coming through', 'Rain hanging in the air, a clock reading midnight at noon, a face that flickers into someone from S.E.E.S. The Dark Hour hasn\'t quite let go.', 'glitch');
})();
