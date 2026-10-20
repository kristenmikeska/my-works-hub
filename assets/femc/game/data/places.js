/* Places for femc-game.html: the Go Out map (areas, what you can do there, shops), scene backgrounds and music.
   Images are in assets/femc/bg/<slug>.webp. All of it is data; add an activity or a place by adding a line. */
window.FEMC_GAME_PLACES = {
  /* Go Out map. slots: when the area is open ('after' = After School / Daytime, 'evening').
     schoolOnly: only on school days. Links appear at an area when their `home.area` matches. */
  areas: [
    { id: 'gekkoukan', name: 'Gekkoukan High', bg: 'outside-school', slots: ['after'], schoolOnly: true, blurb: 'Clubs, the library, and whoever is still around.' },
    { id: 'strip', name: 'Iwatodai Strip', bg: 'location-2', slots: ['after', 'evening'], blurb: 'Ramen, burgers, used books and the pharmacy.' },
    { id: 'mall', name: 'Paulownia Mall', bg: 'paulownia-mall', slots: ['after', 'evening'], blurb: 'Shops, karaoke, the arcade and the police box.' },
    { id: 'station', name: 'Iwatodai Station', bg: '0d489c888283c69d5c7848eb84174bc6', slots: ['after', 'evening'], blurb: 'Benches, vending machines, the last train.' },
    { id: 'portisland', name: 'Port Island Station', bg: 'location-1', slots: ['after', 'evening'], blurb: 'The busy side of the bay. Some of it is less busy.' },
    { id: 'port', name: 'Port Island', bg: 'park', slots: ['after'], blurb: 'The pier, the park and the harbor.' },
    { id: 'shrine', name: 'Naganaki Shrine', bg: 'outside-shrine-day', bgEvening: 'naganaki-shrine-night', slots: ['after', 'evening'], blurb: 'Quiet steps, a fortune box, a playground.' },
    { id: 'hospital', name: 'Tatsumi Memorial Hospital', bg: 'hospital-outside', slots: ['after'], blurb: 'If she isn’t feeling well.' },
    { id: 'dorm', name: 'Iwatodai Dorm', bg: 'iwotodaidorm-outside', slots: ['after'], home: true, blurb: 'Go home and let the day wind down.' }
  ],
  /* Things to do. One activity uses up the time slot. cost: yen. stats: social stat points (before the condition multiplier).
     days: 0 Sun ... 6 Sat. weather: a bonus that applies in that weather. cures: conditions it fixes.
     lines: one is picked at random as the narration. */
  activities: [
    { id: 'library', area: 'gekkoukan', spot: 'Library', name: 'Study in the library', icon: 'book', slots: ['after'], stats: { academics: 3 },
      lines: ['The library was warm and smelled like old paper and floor wax, and someone two tables over was sighing at a chemistry textbook in a way that made her feel better about her own.', 'She claimed a table by the window and worked through a page of problems until the light went long and orange across the desk.'] },
    { id: 'hagakure', area: 'strip', spot: 'Hagakure', name: 'Hagakure Bowl', icon: 'food', slots: ['after', 'evening'], cost: 800, stats: { academics: 2 },
      weather: { rain: { stats: { academics: 4 }, label: 'Rainy-day special' } },
      lines: ['The ramen came in a bowl the size of a hubcap, and the broth was so rich it felt like it was doing her homework for her.', 'She ate at the counter with her elbows in, the steam fogging the edges of her vision, and thought about absolutely nothing for the first time all day.'] },
    { id: 'wildduck', area: 'strip', spot: 'Wild-Duck Burger', name: 'Wild-Duck Burger', icon: 'food', slots: ['after', 'evening'], cost: 500, stats: { courage: 2 },
      lines: ['The Mystery Burger lived up to its name in every way, and she finished it out of spite.', 'Wild-Duck smelled like fryer oil and teenage ambition. She ordered the large without blinking, which felt like a personal victory.'] },
    { id: 'bathhouse', area: 'strip', spot: 'Bathhouse', name: 'The bathhouse', icon: 'bath', slots: ['evening'], cost: 400, stats: { charm: 1 }, cures: ['tired'],
      lines: ['The water was hot enough to sting and then not, and she sank into it to her chin and let the day come off her like a coat.'] },
    { id: 'books', area: 'strip', spot: 'Bookworms', name: 'Browse books', icon: 'book', slots: ['after'], shop: 'books' },
    { id: 'aohige', area: 'strip', spot: 'Aohige Pharmacy', name: 'Aohige Pharmacy', icon: 'shop', slots: ['after', 'evening'], shop: 'aohige' },
    { id: 'chagall', area: 'mall', spot: 'Chagall Café', name: 'Pheromone Coffee', icon: 'cup', slots: ['after', 'evening'], cost: 600, stats: { charm: 2 },
      lines: ['The Pheromone Coffee smelled like nothing she could name and tasted like confidence, which was a strange thing for a drink to taste like.', 'She sat in the window at Chagall with the coffee going cold between her hands and watched the mall go by, and the mall, now and then, watched her back.'] },
    { id: 'karaoke', area: 'mall', spot: 'Karaoke', name: 'Mandragora karaoke', icon: 'mic', slots: ['evening'], cost: 800, stats: { courage: 1, charm: 1 },
      lines: ['She booked a booth for one, which the clerk did not comment on, and sang until her voice went somewhere it hadn’t been before.', 'The first song came out small. By the fourth she had stopped checking whether the door was shut.'] },
    { id: 'arcade', area: 'mall', spot: 'Game Panic', name: 'Game Panic', icon: 'game', slots: ['after', 'evening'], cost: 200, stats: { courage: 1 },
      lines: ['The arcade was loud enough to think in. She lost three times to a middle-schooler and won the fourth, and did not let it show on her face, and let it show everywhere else.'] },
    { id: 'cinema', area: 'mall', spot: 'Screen Shot', name: 'See a movie', icon: 'film', slots: ['after'], days: [0, 6], cost: 1200, random: { academics: 3, charm: 3, courage: 3 },
      lines: ['The theater was half empty and the film was better than it had any right to be.', 'She sat in the dark with a paper cup of melon soda and let somebody else’s story be loud for two hours.'] },
    { id: 'police', area: 'mall', spot: 'Police Box', name: 'Police Box', icon: 'shop', slots: ['after', 'evening'], shop: 'police' },
    { id: 'bebluev', area: 'mall', spot: 'Be Blue V', name: 'Be Blue V', icon: 'shop', slots: ['after', 'evening'], shop: 'bebluev' },
    { id: 'vending', area: 'station', spot: 'Vending Machines', name: 'Something from the vending machine', icon: 'cup', slots: ['after', 'evening'], cost: 150, stats: { courage: 1 },
      lines: ['She stood in front of the vending machine for a long time looking for something it didn’t have, and bought a canned coffee instead.'] },
    { id: 'alley', area: 'portisland', spot: 'Back Alley', name: 'Cut through the back alley', icon: 'alley', slots: ['evening'], stats: { courage: 3 }, needs: { courage: 2 },
      lines: ['The alley behind the station was the kind of place that watched you walk through it. She walked through it slowly, on purpose, and nobody said a word.'] },
    { id: 'pier', area: 'port', spot: 'Pier', name: 'Walk the pier', icon: 'wave', slots: ['after'], stats: { charm: 1, courage: 1 },
      lines: ['The wind off the bay was cold and smelled like salt and diesel, and she stood at the rail longer than she meant to.'] },
    { id: 'pray', area: 'shrine', spot: 'Offering Box', name: 'Make a wish', icon: 'shrine', slots: ['after', 'evening'], cost: 10, stats: { courage: 1 },
      lines: ['She clapped twice and stood with her eyes shut, and found she didn’t know what to wish for, so she wished for that.'] },
    { id: 'fortune', area: 'shrine', spot: 'Omikuji', name: 'Draw a fortune', icon: 'shrine', slots: ['after'], cost: 100, fortune: true },
    { id: 'clinic', area: 'hospital', spot: 'Clinic', name: 'See a doctor', icon: 'cross', slots: ['after'], cost: 1000, cures: ['tired', 'sick'],
      lines: ['The doctor listened to her chest, frowned at nothing, and told her to sleep more, which everyone always said and nobody ever meant.'] }
  ],
  /* Night at the dorm (Evening). Tartarus opens after the story unlocks it. */
  dorm: {
    study: { name: 'Study', stats: { academics: 2 }, rain: { academics: 1 }, lines: ['She studied at her desk with the window cracked and the dorm humming below her.', 'Two hours, one chapter, and a page of notes that would make sense tomorrow, probably.'] },
    rest: { name: 'Rest', lines: ['She went to bed early and slept like someone who had been waiting all day for permission.'] }
  },
  fortunes: [
    { t: 'Great blessing. Whatever you start today will go well.', cond: 'great' },
    { t: 'Blessing. Wait a little, and what you want will come to you.', stats: { charm: 1 } },
    { t: 'Small blessing. Keep studying.', stats: { academics: 1 } },
    { t: 'Uncertain. Your path is still being written.', stats: { courage: 1 } },
    { t: 'Curse. Tie it to the tree and try again another day.' }
  ],
  /* Bookworms: books are read in the evening at the dorm, a chapter a night. */
  books: [
    { id: 'manga-school', name: 'Manga Classics: The Pillow Book', price: 1200, nights: 2, stats: { academics: 4 } },
    { id: 'poise', name: 'The Art of Poise', price: 1500, nights: 3, stats: { charm: 6 } },
    { id: 'tiger', name: 'Tales of the Tiger and the Rope', price: 900, nights: 2, stats: { courage: 4 } },
    { id: 'algebra', name: 'Algebra, Patiently', price: 1800, nights: 3, stats: { academics: 7 } },
    { id: 'speech', name: 'Say It Like You Mean It', price: 2000, nights: 3, stats: { charm: 4, courage: 3 } }
  ],
  // Shops reuse the battle game's shop list (assets/femc/battle/data.js, read only). These say where each one is.
  shops: {
    police: { area: 'mall', battleShop: 'police' },
    aohige: { area: 'strip', battleShop: 'aohige' },
    bebluev: { area: 'mall', battleShop: 'bebluev' }
  },

  /* Scene backgrounds by place: [place, image, evening image?, look?]. The first rule whose place starts the scene's
     place wins; "*" matches anywhere. Without an evening image, evening scenes dim the day image. */
  bg: [
    ['The Velvet Room', 'velvetroom-elevator'],
    ['Tartarus · Lobby', 'tartarus-lobby'],
    ['Tartarus', 'tartarus-access-point'],
    ['Moonlight Bridge · The Dark Hour', 'darkhour-moonlight-bridge'],
    ['Iwatodai Station · Platform · The Dark Hour', 'darkhour-station-platform'],
    ['Iwatodai Station · Monorail · The Dark Hour', 'darkhour-monorail'],
    ['Iwatodai Dorm · Lounge · The Dark Hour', 'darkhour-dorm-lounge'],
    ['Iwatodai Dorm · Rooftop · The Dark Hour', 'iwatodaidorm-roof-night', null, 'darkhour'],
    ['Gekkoukan High · The Dark Hour', 'darkhour-gekkoukan-gate'],
    ['*The Dark Hour', 'darkhour-iwatodai-street'],
    ['Gekkoukan High · Rooftop Garden', 'rooftop-day', 'rooftop-evening'],
    ['Gekkoukan High · Rooftop', 'rooftop-day', 'gekkoukan-rooftop-night'],
    ['Gekkoukan High · Boxing Club', 'gekkoukan-boxing-club'],
    ['Gekkoukan High · Student Council Room', 'gekkoukan-student-council'],
    ["Gekkoukan High · Nurse's Office", 'gekkoukan-nurse-office'],
    ['Gekkoukan High · 2F Hallway', 'school-hallwaysecondfloor'],
    ['Gekkoukan High · Library', 'school-library'],
    ['Gekkoukan High · Shoe Lockers', 'school-entryhallway'],
    ['Gekkoukan High · Front Gate', 'gekkoukanhigh'],
    ['Gekkoukan High · Tennis Courts', 'outside-school-2'],
    ['Gekkoukan High · Archery Range', 'outside-school-2'],
    ['Gekkoukan High · Classroom', 'gekkoukan-classroom-day', 'gekkoukan-classroom-evening'],
    ['Gekkoukan High', 'school-hallway'],
    ['Iwatodai Dorm · Lounge', 'iwatodaidorm-livingroom', 'iwatodaidorm-livingroom-night'],
    ['Iwatodai Dorm · Kitchen', 'iwatodaidorm-kitchen'],
    ['Iwatodai Dorm · Dining Room', 'iwatodaidorm-diningroom'],
    ['Iwatodai Dorm · Laundry Room', 'iwatodaidorm-laundryroom'],
    ['Iwatodai Dorm · Command Room', 'iwatodaidorm-commandroom'],
    ['Iwatodai Dorm · 2F Hallway', 'iwatodaidorm-hallway'],
    ['Iwatodai Dorm · Hallway', 'iwatodaidorm-hallway'],
    ["Iwatodai Dorm · Solar's Room", 'solar-dormroom-day', 'solar-dormroom-night'],
    ['Iwatodai Dorm · Rooftop', 'iwatodaidorm-roof-evening', 'iwatodaidorm-roof-night'],
    ['Iwatodai Dorm · Front', 'iwotodaidorm-outside'],
    ['Iwatodai Dorm', 'iwatodaidorm-livingroom', 'iwatodaidorm-livingroom-night'],
    ['Iwatodai Station · Monorail', 'train-car-inside'],
    ['Iwatodai Station · Platform', 'subway', 'station-platform-night'],
    ['Iwatodai Station · Bench', 'subway', 'station-platform-night'],
    ['Iwatodai Station · Photo Booth', 'subway', 'station-platform-night'],
    ['Iwatodai Station · Vending Machines', 'subway'],
    ['Iwatodai Station · Taxi Stand', 'city'],
    ['Iwatodai Station', '0d489c888283c69d5c7848eb84174bc6'],
    ['Iwatodai Strip · Back Alley', 'outside-nightdistrict'],
    ['Iwatodai Strip · Wild-Duck Burger', 'wilduckburger'],
    ['Iwatodai Strip · Hagakure', 'hagakureramen'],
    ['Iwatodai Strip · Bookworms', 'shopping-street'],
    ["Iwatodai Strip · Yeobo's Cafe", 'flashback-yeobos-cafe'],
    ['Iwatodai Strip · Aohige Pharmacy', 'aohigepharmacy-outside'],
    ['Iwatodai Strip · Bathhouse', 'outside-daytime-neighborhood', 'outside-night'],
    ['Iwatodai Strip', 'location-2'],
    ['Iwatodai · Riverside', 'park-2'],
    ['Hagakure', 'hagakureramen'],
    ['Tutor', 'green-bedroom'],
    ['Paulownia Mall · Chagall Café', 'lablanc'],
    ['Paulownia Mall · Shop Windows', 'clothing-store'],
    ['Paulownia Mall · Flower Stall', 'shopping-street'],
    ['Paulownia Mall · Game Panic', 'gameparade-outside'],
    ['Paulownia Mall · Karaoke', 'clubescapade'],
    ['Paulownia Mall · Screen Shot', 'screen'],
    ['Paulownia Mall · Police Box', 'policestation-outside'],
    ['Paulownia Mall · Be Blue V', 'bebluev-outside'],
    ['Paulownia Mall · Arcade', 'inside-mall'],
    ['Paulownia Mall · Photo Booth', 'inside-mall'],
    ['Paulownia Mall · Central Atrium', 'inside-mall'],
    ['Paulownia Mall', 'paulownia-mall'],
    ['Port Island Station · Back Alley', 'outside-nightdistrict'],
    ['Port Island Station · Respawn', 'inside-mall'],
    ['Port Island Station · Central Concourse', '0d489c888283c69d5c7848eb84174bc6'],
    ['Port Island Station', 'location-1'],
    ['Port Island · Convenience Store', 'city'],
    ['Port Island · Fish Market', 'flashback-fish-market'],
    ['Port Island · Back Streets', 'outside-nightdistrict'],
    ['Port Island · Seaside Park', 'park-2'],
    ['Port Island · Pier', 'park-2', 'outside-night'],
    ['Port Island · Harbor', 'harbor'],
    ['Port Island', 'park'],
    ['Tatsumi Memorial Hospital', 'hospital-hallway-day', 'hospital-hallway-night'],
    ['Moonlight Bridge', 'moonlightbridge', null, 'nightblue'],
    ['Naganaki Shrine · Night', 'naganaki-shrine-night'],
    ['Naganaki Shrine', 'outside-shrine-day', 'naganaki-shrine-night'],
    ['Yakushima', 'yakushima-beach']
  ],
  /* CG focus: which part of each CG (assets/femc/cg) to keep in view when a tall, narrow window has to crop it. */
  cgFocus: {
    'prologue-waking-in-tartarus': '24% 70%', 'prologue-akihiko-finds-solar': '42% 55%', 'prologue-first-night-dorm': '55% 45%',
    'prologue-elizabeth-blank-page': '58% 45%', 'prologue-first-day-gekkoukan': '24% 40%',
    'searchers-jihoon-arrives': '35% 35%', 'searchers-yunjin-low-tide': '65% 45%',
    'searchers-jihoon-awakening': '77% 35%', 'searchers-minji-awakening': '62% 35%',
    'searchers-jungwon-awakening': '37% 35%', 'searchers-haechan-awakening': '39% 35%',
    'link-jihoon-crane': '45% 40%', 'link-jungwon-croissant': '67% 45%', 'link-minji-camera-lamp': '68% 40%', 'link-shinjiro-cooking': '50% 40%',
    'story-moonlight-train': '55% 35%', 'story-city-of-the-awake': '50% 40%', 'ending-last-stop': '40% 35%', 'story-haenim-unveiled': '50% 35%'
  },
  /* Music (assets/femc/music/<file>.mp3) by mood. Scenes pick a mood; screens use the `screens` map. */
  music: {
    joy: 'joy', school: 'after-school', sun: 'sun', tender: 'tender-feeling', mystery: 'this-mysterious-feeling', night: 'tranquility',
    velvet: 'poem-for-everyones-souls', date: 'heartbeat-heartbreak', city: 'paulownia-mall', battle: 'mass-destruction',
    title: 'full-moon-full-life', day: 'want-to-be-close', evening: 'color-your-night', dorm: 'iwatodai-dorm', tartarus: 'tartarus-thebel',
    fullmoon: 'master-of-shadow', exam: 'time', results: 'its-going-down-now', shop: 'paulownia-mall'
  },
  screens: { title: 'title', school: 'day', after: 'day', evening: 'evening', dorm: 'dorm', exam: 'exam', results: 'results', tartarus: 'tartarus', fullmoon: 'fullmoon', status: null }
};
