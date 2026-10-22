/* Places for femc-game.html: the Go Out map (areas, what you can do there, shops), scene backgrounds and music.
   Images are in assets/femc/bg/<slug>.webp. All of it is data; add an activity or a place by adding a line. */
window.FEMC_GAME_PLACES = {
  /* Go Out map. slots: when the area is open ('after' = After School / Daytime, 'evening').
     schoolOnly: only on school days. Links appear at an area when their `home.area` matches.
     blurb: the short line on the area's card; about: the longer description in the Go Out panel (hover or focus). */
  areas: [
    { id: 'gekkoukan', name: 'Gekkoukan High', bg: 'outside-school', slots: ['after'], schoolOnly: true, blurb: 'Clubs, the library, and whoever is still around.', about: "School after the last bell: the library's quiet tables, the rooftop garden, a study group for first-years, the club rooms, and whoever hasn't gone home yet." },
    { id: 'strip', name: 'Iwatodai Strip', bg: 'location-2', slots: ['after', 'evening'], blurb: 'Ramen, burgers, used books and the bathhouse.', about: 'The narrow street by the station. Cheap food that fixes a bad day (and one bowl that dares you), a pharmacy, used books, and the bathhouse after dark.' },
    { id: 'mall', name: 'Paulownia Mall', bg: 'paulownia-mall', slots: ['after', 'evening'], blurb: 'Shops, karaoke, the arcade and the police box.', about: 'Coffee, boutiques, karaoke, the arcade and its crane games, and a small cinema, plus the Police Box, Be Blue V and Mayoido for gear and rare goods.' },
    { id: 'station', name: 'Iwatodai Station', bg: '0d489c888283c69d5c7848eb84174bc6', slots: ['after', 'evening'], blurb: 'Benches, vending machines, the last train.', about: 'Benches, a row of vending machines, and people waiting for trains with somewhere to be.' },
    { id: 'portisland', name: 'Port Island Station', bg: 'location-1', slots: ['after', 'evening'], blurb: 'The busy side of the bay. Some of it is less busy.', about: 'The busy side of the bay: crowds on the concourse, and a back alley most people walk around.' },
    { id: 'port', name: 'Port Island', bg: 'park', slots: ['after'], blurb: 'The pier, the park and the harbor.', about: 'The pier, the seaside park and the harbor. Wind off the bay, room to think, and a beach cleanup on weekend mornings.' },
    { id: 'shrine', name: 'Naganaki Shrine', bg: 'outside-shrine-day', bgEvening: 'naganaki-shrine-night', slots: ['after', 'evening'], blurb: 'Quiet steps, a fortune box, a playground.', about: 'Stone steps, an offering box, fortunes tied to the tree and the playground behind it. Quiet most days; the neighbors take turns sweeping.' },
    { id: 'hospital', name: 'Tatsumi Memorial Hospital', bg: 'hospital-outside', slots: ['after'], blurb: 'If she isn’t feeling well.', about: 'Tatsumi Memorial. The clinic can fix being tired or sick, for a price, and the children’s ward always wants volunteers.' },
    { id: 'dorm', name: 'Iwatodai Dorm', bg: 'iwotodaidorm-outside', slots: ['after'], home: true, blurb: 'Go home and let the day wind down.', about: 'Head straight home. The rest of this time passes quietly; nothing else happens.' }
  ],
  /* Things to do. One activity uses up the time slot. cost: yen. stats: social stat points (before the condition multiplier).
     days: 0 Sun ... 6 Sat. weather: a bonus that applies in that weather. cures: conditions it fixes. needs: stat ranks.
     showings: a rotating bill, one per week ({ title, stats, lines }; the cinema). from: the first day it's open.
     lines: one is picked at random as the narration. about: what the place is, shown in the Go Out panel beside the
     benefit preview (core.js activityInfo). The five stats and every way to raise them: FEMC-REVAMP-ROADMAP.md section 7. */
  activities: [
    // ── Gekkoukan (after school, school days)
    { id: 'library', area: 'gekkoukan', spot: 'Library', name: 'Study in the library', about: 'Quiet tables by the window and the smell of old paper.', icon: 'book', slots: ['after'], stats: { knowledge: 3 },
      lines: ['The library was warm and smelled like old paper and floor wax, and someone two tables over was sighing at a chemistry textbook in a way that made her feel better about her own.', 'She claimed a table by the window and worked through a page of problems until the light went long and orange across the desk.'] },
    { id: 'tutoring', area: 'gekkoukan', spot: 'Classroom', name: 'Help the first-years study', about: 'A volunteer study group for first-years who are falling behind. Nobody gets paid; everybody gets snacks.', icon: 'book', slots: ['after'], days: [1, 3, 5], stats: { kindness: 2, knowledge: 1 },
      lines: ['A first-year with a cowlick had been stuck on the same equation for a week. She stayed until he got it, and he looked at the answer like it had personally apologized to him.', 'Three first-years, one textbook and a bag of rice crackers. By the end of it they could all do the problem set, and one of them could explain it back to her, which was the real test.'] },
    { id: 'schoolgarden', area: 'gekkoukan', spot: 'Rooftop Garden', name: 'Help in the rooftop garden', about: 'Raised beds on the school roof. Someone keeps them alive; there is always weeding, watering and something to carry.', icon: 'leaf', slots: ['after'], stats: { kindness: 1, proficiency: 1 },
      lines: ['She weeded a whole bed of something leafy and carried the watering can up and down the roof until her arms ached, and the soil went dark and sweet-smelling under her hands.', 'The tomatoes needed tying back. She did it slowly, one twist of string at a time, while the wind came over the rail and the city hummed below.'] },
    // ── Iwatodai Strip
    { id: 'hagakure', area: 'strip', spot: 'Hagakure', name: 'Hagakure Bowl', about: 'A ramen shop with bowls the size of hubcaps. On rainy days the special is famous for a reason.', icon: 'food', slots: ['after', 'evening'], cost: 800, stats: { knowledge: 2 },
      weather: { rain: { stats: { knowledge: 4 }, label: 'Rainy-day special' } },
      lines: ['The ramen came in a bowl the size of a hubcap, and the broth was so rich it felt like it was doing her homework for her.', 'She ate at the counter with her elbows in, the steam fogging the edges of her vision, and thought about absolutely nothing for the first time all day.'] },
    { id: 'megabowl', area: 'strip', spot: 'Hagakure', name: 'The Mega Bowl challenge', about: 'Hagakure’s challenge bowl: four people’s worth of ramen, thirty minutes on the clock, your photo on the wall if you finish.', icon: 'food', slots: ['evening'], cost: 1500, stats: { courage: 3 },
      lines: ['The bowl arrived carried by two hands and a prayer. At minute twenty-two she stopped feeling her face. At minute twenty-nine she drank the last of the broth, and the whole counter clapped, and the owner took her photo with a disposable camera.', 'She did not finish it. She got close enough that the owner nodded at her the way you nod at someone who came back from a war, and gave her a free egg for next time.'] },
    { id: 'wildduck', area: 'strip', spot: 'Wild-Duck Burger', name: 'Wild-Duck Burger', about: 'Loud, greasy and home of the Mystery Burger. Finishing a large takes nerve.', icon: 'food', slots: ['after', 'evening'], cost: 500, stats: { courage: 2 },
      lines: ['The Mystery Burger lived up to its name in every way, and she finished it out of spite.', 'Wild-Duck smelled like fryer oil and teenage ambition. She ordered the large without blinking, which felt like a personal victory.'] },
    { id: 'bathhouse', area: 'strip', spot: 'Bathhouse', name: 'Soak at the bathhouse', about: 'The neighborhood bathhouse. Hot water that takes the day off you, and you walk out glowing.', icon: 'bath', slots: ['evening'], cost: 400, stats: { charm: 2 }, cures: ['tired'],
      lines: ['The water was hot enough to sting and then not, and she sank into it to her chin and let the day come off her like a coat.', 'She came out pink to the ears with her hair wrapped in a towel, and the old woman at the counter told her she looked like a peach, which she decided to believe.'] },
    { id: 'electricbath', area: 'strip', spot: 'Bathhouse', name: 'Try the electric bath', about: 'The bathhouse’s famous electric bath: a mild current through the water. The regulars swear by it. The first-timers swear.', icon: 'bath', slots: ['evening'], cost: 400, stats: { courage: 2 },
      lines: ['The electric bath buzzed through her like a swarm of very polite bees. She lasted three minutes. The grandmother next to her had been in for twenty and was doing a crossword.', 'She lowered herself in one inch at a time while a row of regulars watched with professional interest. When she made it to her shoulders, somebody said “oh, good,” and went back to their newspaper.'] },
    { id: 'books', area: 'strip', spot: 'Bookworms', name: 'Browse books', about: 'A used bookshop run by a kind old couple. Books bought here are read at the dorm, a chapter a night.', icon: 'book', slots: ['after'], shop: 'books' },
    { id: 'aohige', area: 'strip', spot: 'Aohige Pharmacy', name: 'Aohige Pharmacy', about: 'Medicine and supplies to carry into Tartarus.', icon: 'shop', slots: ['after', 'evening'], shop: 'aohige' },
    // ── Paulownia Mall
    { id: 'chagall', area: 'mall', spot: 'Chagall Café', name: 'Pheromone Coffee', about: 'A café famous for one strange drink: Pheromone Coffee.', icon: 'cup', slots: ['after', 'evening'], cost: 600, stats: { charm: 2 },
      lines: ['The Pheromone Coffee smelled like nothing she could name and tasted like confidence, which was a strange thing for a drink to taste like.', 'She sat in the window at Chagall with the coffee going cold between her hands and watched the mall go by, and the mall, now and then, watched her back.'] },
    { id: 'cafestudy', area: 'mall', spot: 'Chagall Café', name: 'Study over coffee', about: 'A corner table, a refill nobody charges for, and the kind of background noise that makes homework go faster.', icon: 'book', slots: ['after', 'evening'], cost: 400, stats: { knowledge: 2 },
      lines: ['She spread her notes over a corner table and worked through them with a cup of plain coffee, and the hiss of the milk steamer kept time.', 'Two pages of history, one cup of coffee, and a waiter who refilled it without asking and nodded at her textbook like they were in on something together.'] },
    { id: 'boutique', area: 'mall', spot: 'Shop Windows', name: 'Try on outfits', about: 'The boutiques along the mall. Trying things on is free; she always leaves with something small.', icon: 'shop', slots: ['after', 'evening'], cost: 1500, stats: { charm: 3 },
      lines: ['She tried on a coat she couldn’t afford, a scarf she could, and a skirt the clerk said was “very you” in a voice that meant it. She bought the scarf. She stood up straighter on the way home.', 'Three changing rooms, eleven tops, and one pair of earrings she wore out of the shop. The girl in the mirror on the escalator looked like she knew where she was going.'] },
    { id: 'karaoke', area: 'mall', spot: 'Karaoke', name: 'Mandragora karaoke', about: 'Private booths, a tired clerk and a songbook as thick as a dictionary.', icon: 'mic', slots: ['evening'], cost: 800, stats: { charm: 2, courage: 1 },
      lines: ['She booked a booth for one, which the clerk did not comment on, and sang until her voice went somewhere it hadn’t been before.', 'The first song came out small. By the fourth she had stopped checking whether the door was shut.'] },
    { id: 'arcade', area: 'mall', spot: 'Game Panic', name: 'Play the cabinets', about: 'Loud cabinets, sticky buttons, and middle-schoolers who never lose.', icon: 'game', slots: ['after', 'evening'], cost: 200, stats: { proficiency: 1, courage: 1 },
      lines: ['The arcade was loud enough to think in. She lost three times to a middle-schooler and won the fourth, and did not let it show on her face, and let it show everywhere else.', 'A rhythm game in the back corner ate four hundred yen and gave her, in return, hands that knew where the notes would be before they came.'] },
    { id: 'crane', area: 'mall', spot: 'Game Panic', name: 'Crane game', about: 'A wall of crane machines full of plushies. The claws are weak. The trick is patience, angles and a steady hand.', icon: 'game', slots: ['after', 'evening'], cost: 300, stats: { proficiency: 2 },
      lines: ['She studied the claw for three tries before she touched it, then nudged a plush cat by its tag until it tipped into the chute. The kid next to her asked if she did this for a living.', 'Six hundred yen, one near miss, and then a small stuffed rabbit dropped into the chute like it had decided to come home with her.'] },
    { id: 'cinema', area: 'mall', spot: 'Screen Shot', name: 'See a movie', about: "A small theater with weekend showings. The bill changes every week, and every film leaves you a little different.", icon: 'film', slots: ['after'], days: [0, 6], cost: 1200,
      showings: [
        { title: 'The Ninth Floor (horror)', stats: { courage: 3 }, lines: ['The Ninth Floor was about an elevator, and it was the worst two hours of her life, and she did not look away once. The boy two rows ahead screamed. She did not. She was a little proud of that.'] },
        { title: 'A Lantern for Mother (drama)', stats: { kindness: 3 }, lines: ['A Lantern for Mother was a small quiet film about a man looking after his mother, and half the theater was crying by the end, and she walked home slower than she came.'] },
        { title: 'Deep Water (documentary)', stats: { knowledge: 3 }, lines: ['Deep Water was a documentary about the bottom of the ocean, and she came out knowing the names of six fish that glow, which seemed like the right kind of thing to know.'] },
        { title: 'Starlight Runway (romance)', stats: { charm: 3 }, lines: ['Starlight Runway was a romance about a model and a tailor, and it was silly, and the clothes were beautiful, and on the way out she caught herself walking like the heroine.'] },
        { title: 'Master of the Lock (heist)', stats: { proficiency: 3 }, lines: ['Master of the Lock was a heist film with a long, silent scene of a woman picking a safe, and Solar watched her hands the whole time instead of her face.'] }
      ] },
    { id: 'lateshow', area: 'mall', spot: 'Screen Shot', name: 'The late horror show', about: 'Friday and Saturday nights: whatever horror film the projectionist can find. The seats creak. That is part of it.', icon: 'film', slots: ['evening'], days: [5, 6], cost: 1000, stats: { courage: 3 },
      lines: ['The late show was a cursed-videotape film older than she was, and the projector flickered at the worst moments as if it were in on the joke. She walked home past every dark alley on purpose.', 'There were four people at the late show. By the end there were three; one of them had left at the part with the well. Solar stayed for the credits.'] },
    { id: 'police', area: 'mall', spot: 'Police Box', name: 'Police Box', about: 'The police box. Weapons and armor for Tartarus, sold quietly over the counter.', icon: 'shop', slots: ['after', 'evening'], shop: 'police' },
    { id: 'bebluev', area: 'mall', spot: 'Be Blue V', name: 'Be Blue V', about: 'An accessory boutique: pretty things that also help in a fight.', icon: 'shop', slots: ['after', 'evening'], shop: 'bebluev' },
    // The gacha (gacha.js): walking up is free and spends no time; `gain` and `price` are the review panel's lines.
    { id: 'capsule', area: 'mall', spot: 'Capsule Corner', name: 'Capsule machine', about: 'A row of capsule machines by the escalator: cast keychains, phone cases, accessories and the odd rare find. The odds are printed on the front.', icon: 'game', slots: ['after', 'evening'], shop: 'capsule', gacha: 'capsule',
      gain: 'Keychains, phone cases, accessories, items. Super Rare or better at least every 10 turns.', price: '¥500 a turn, or a Capsule Ticket (Tartarus and Shuffle Time give them).' },
    { id: 'velvet', area: 'mall', spot: 'The Velvet Room', name: 'The blue door', about: 'A blue door nobody else seems to notice. Elizabeth deals cards here: skill cards and rare gear.', icon: 'shop', slots: ['after', 'evening'], from: '4/8', shop: 'velvet', gacha: 'velvet',
      gain: 'Skill cards, Revelation cards, Velvet Thread and rare gear. Super Rare or better at least every 5 draws.', price: '¥3,000 or 3 Velvet Plumes a draw (plumes come from Tartarus, full moons and the Compendium).' },
    { id: 'mayoido', area: 'mall', spot: 'Mayoido Antiques', name: 'Mayoido Antiques', about: 'Antiques, rare goods and sealed cards. It buys the materials Shadows drop.', icon: 'shop', slots: ['after', 'evening'], shop: 'mayoido' },
    // ── Iwatodai Station
    { id: 'vending', area: 'station', spot: 'Vending Machines', name: 'Something from the vending machine', about: 'A row of machines that never have what you want.', icon: 'cup', slots: ['after', 'evening'], cost: 150, stats: { courage: 1 },
      lines: ['She stood in front of the vending machine for a long time looking for something it didn’t have, and bought a canned coffee instead.'] },
    // ── Port Island Station
    { id: 'alley', area: 'portisland', spot: 'Back Alley', name: 'Cut through the back alley', about: 'The alley behind the station. Not a place to linger, unless you have the nerve.', icon: 'alley', slots: ['evening'], stats: { courage: 3 }, needs: { courage: 2 },
      lines: ['The alley behind the station was the kind of place that watched you walk through it. She walked through it slowly, on purpose, and nobody said a word.'] },
    // ── Port Island
    { id: 'pier', area: 'port', spot: 'Pier', name: 'Walk the pier', about: 'Salt wind, gulls and a long rail over the water.', icon: 'wave', slots: ['after'], stats: { charm: 1, courage: 1 },
      lines: ['The wind off the bay was cold and smelled like salt and diesel, and she stood at the rail longer than she meant to.'] },
    { id: 'beachclean', area: 'port', spot: 'Seaside Park', name: 'Volunteer: the beach cleanup', about: 'Weekend mornings, a neighborhood group cleans the seaside park and the strip of beach below it. Gloves and bags provided.', icon: 'leaf', slots: ['after'], days: [0, 6], stats: { kindness: 2 },
      lines: ['She filled two bags with bottle caps and fishing line and one unexplained shoe, and an old man in a fishing hat gave her a can of tea and said the gulls would thank her if gulls did that sort of thing.', 'The volunteers were mostly retirees and one very serious ten-year-old with a clipboard. By noon the sand was clean and the ten-year-old let her hold the clipboard.'] },
    // ── Naganaki Shrine
    { id: 'pray', area: 'shrine', spot: 'Offering Box', name: 'Make a wish', about: 'Ten yen in the offering box, two claps and a wish.', icon: 'shrine', slots: ['after', 'evening'], cost: 10, stats: { courage: 1 },
      lines: ['She clapped twice and stood with her eyes shut, and found she didn’t know what to wish for, so she wished for that.'] },
    { id: 'fortune', area: 'shrine', spot: 'Omikuji', name: 'Draw a fortune', about: 'Paper fortunes tied to the tree. Good luck can lift a stat or her mood.', icon: 'shrine', slots: ['after'], cost: 100, fortune: true },
    { id: 'shrinesweep', area: 'shrine', spot: 'Grounds', name: 'Volunteer: sweep the grounds', about: 'The shrine has no full-time priest. Neighbors take turns sweeping the leaves and wiping down the offering box.', icon: 'shrine', slots: ['after'], stats: { kindness: 2 },
      lines: ['She swept the stone path from the gate to the offering box and back, and the leaves kept coming down, and she kept sweeping, and somewhere in the middle of it the sweeping stopped being a chore.', 'A grandmother who sweeps here every week showed her how to hold the broom so it didn’t hurt her back, and talked about her grandson the whole time, and gave her a mandarin when they were done.'] },
    // ── Tatsumi Memorial Hospital
    { id: 'clinic', area: 'hospital', spot: 'Clinic', name: 'See a doctor', about: 'The hospital clinic. Expensive, but it gets her back on her feet.', icon: 'cross', slots: ['after'], cost: 1000, cures: ['tired', 'sick'],
      lines: ['The doctor listened to her chest, frowned at nothing, and told her to sleep more, which everyone always said and nobody ever meant.'] },
    { id: 'wardvisit', area: 'hospital', spot: "Children's Ward", name: 'Volunteer: read on the children’s ward', about: 'The children’s ward wants volunteers to read aloud and play cards on visiting afternoons.', icon: 'book', slots: ['after'], days: [2, 4, 6], stats: { kindness: 2, charm: 1 },
      lines: ['She read the same picture book four times to a girl with a cast on her arm, doing all the voices, and the girl corrected her pronunciation of the dragon every single time.', 'Cards with a boy who cheated beautifully and did not know she knew. She lost on purpose twice and for real once, and the nurse caught her eye over his head and smiled.'] }
  ],
  /* Clubs (Kat's roadmap section 7 C; built in the living world, part 2). Each club is an activity (same fields as above,
     plus `club: true` added by core.js), shown at its area (default Gekkoukan, after school, school days):
       { id, spot, name, kind: 'sports' | 'culture', link (whose club it is), days, stats (each practice), about, place }
     Join from its card (the club's `join` scene is the first practice); after that it meets on its `days`. Practices play a
     scene from data/clubs.js (same id): recurring members, a small story across the year, seasonal ones, and, for some,
     scenes that need a link's rank or route (Rio's tennis club on her romance route). Rio's Practice Swing (build.js) adds
     to the tennis club. Any number of clubs can be joined; they meet on different days. */
  clubs: [
    { id: 'club-tennis', spot: 'Tennis Courts', place: 'Gekkoukan High · Tennis Courts', name: 'Tennis club', kind: 'sports', link: 'rio', icon: 'club', slots: ['after'], days: [1, 3, 5], stats: { courage: 2, proficiency: 1 },
      about: 'Gekkoukan’s tennis club: drills, a ball cart with one bad wheel, a captain who stays late, and a team that is mostly there for the team.' },
    { id: 'club-library', spot: 'Library', place: 'Gekkoukan High · Library', name: 'Library committee', kind: 'culture', link: 'saori', icon: 'book', slots: ['after'], days: [2, 4], stats: { knowledge: 2, kindness: 1 },
      about: 'The library committee: the returns cart, the overdue list, new arrivals to stamp, and a book club that meets at the big table when the committee is done.' },
    { id: 'club-band', spot: 'Music Room', place: 'Gekkoukan High · Music Room', name: 'Light music club', kind: 'culture', icon: 'mic', slots: ['after'], days: [2, 5], stats: { charm: 2, proficiency: 1 },
      about: 'A band of four, a borrowed amp and a practice room on the third floor. They need a keyboard. They would settle for anybody who can count to four.' },
    { id: 'club-gaming', spot: 'Computer Room', place: 'Gekkoukan High · Computer Room', name: 'Gaming club', kind: 'culture', icon: 'game', slots: ['after'], days: [3, 6], stats: { proficiency: 2, courage: 1 },
      about: 'The gaming club: the computer room after hours on Wednesdays, and Saturday scrims at Game Panic in the mall, where anybody can wander in.' }
  ],
  /* Night at the dorm (Evening). Tartarus opens after the story unlocks it. Study and Rest are always there; `acts` are the
     other evening activities at home (core.js dormActs): desk: true ones are listed under "Your desk". from / until: dates;
     perk: only once that bond perk (build.js fx key) is earned; leftovers: the dish comes along on the next Tartarus night. */
  dorm: {
    study: { name: 'Study', stats: { knowledge: 2 }, rain: { knowledge: 1 }, lines: ['She studied at her desk with the window cracked and the dorm humming below her.', 'Two hours, one chapter, and a page of notes that would make sense tomorrow, probably.'] },
    rest: { name: 'Rest', lines: ['She went to bed early and slept like someone who had been waiting all day for permission.'] },
    acts: [
      { id: 'cook', name: 'Cook dinner', sub: 'For whoever’s home', place: 'Iwatodai Dorm · Kitchen', cost: 500, stats: { proficiency: 1, kindness: 1 },
        lines: ['She made curry for whoever was home, which turned out to be everyone the moment the smell reached the stairs.', 'Omelet rice, slightly lopsided. Junpei asked for seconds before he’d finished his firsts, which she chose to take as a review.', 'A pot of miso soup and a pan of fried rice, and the lounge went quiet the way it only does when people are eating.'] },
      { id: 'cook-shinjiro', name: 'Cook with Shinjiro', sub: 'Kitchen Duty', place: 'Iwatodai Dorm · Kitchen', perk: 'kitchenDuty', until: '10/3', stats: { proficiency: 3 }, leftovers: true,
        lines: ['He didn’t say much. He moved her hand on the knife, once, and after that the onions came out even. He packed the leftovers into a box without asking and put her name on the lid.', 'Stew, the slow kind. He made her taste it four times and adjust it three, and the fourth time he just nodded, and that nod was worth more than the stew.'] },
      { id: 'roofgarden', name: 'Water the roof garden', sub: 'The planters on the dorm roof', place: 'Iwatodai Dorm · Rooftop', stats: { kindness: 2 },
        lines: ['The planters on the roof had gone dry again. She watered them one by one while the city lit up, and the basil smelled like summer even when it wasn’t.', 'Someone had started a row of tomatoes up here and forgotten about them. She hadn’t. They were doing better than anyone expected, including the tomatoes.'] },
      { id: 'walkkoro', name: 'Walk Koromaru', sub: 'Down to the river and back', place: 'Iwatodai · Riverside', from: '8/10', stats: { kindness: 2 },
        lines: ['Koromaru walked her more than she walked him: to the river, along the bank, a careful sniff of every lamppost, and home again at exactly the pace he had decided on.', 'They sat on the riverbank for a while. Koromaru leaned his whole warm weight against her leg and watched the water, and she watched it with him.'] },
      { id: 'sew', name: 'Sew', sub: 'Mend, alter, make something', desk: true, place: "Iwatodai Dorm · Solar's Room", cost: 300, stats: { proficiency: 2 },
        lines: ['She took in a skirt that had always been a little too big. Her stitches started crooked and ended straight, which is how stitches are supposed to go.', 'A torn uniform cuff, a loose button and a pouch for her Evoker charm. She finished all three before the dorm went quiet.'] },
      { id: 'sew-hyein', name: 'Sew with Hyein', sub: 'Sewing Machine', desk: true, perk: 'sewingMachine', place: "Iwatodai Dorm · Solar's Room", stats: { proficiency: 3, charm: 1 },
        lines: ['Hyein brought the machine and a bag of fabric scraps and opinions. By midnight they had a jacket lining, two arguments about pockets, and a scrunchie each.', 'Hyein pinned, Solar sewed, and Hyein unpicked half of it and said “better” in a voice that meant it. The hem came out perfect on the third try.'] },
      { id: 'fix', name: 'Fix something', sub: 'Whatever broke in the lounge this week', desk: true, place: "Iwatodai Dorm · Solar's Room", stats: { proficiency: 2, knowledge: 1 },
        lines: ['The lounge radio had been dead for a month. She took it apart on a towel, found the loose wire, and put it back together with one screw left over that she decided not to think about.', 'Junpei’s alarm clock, which he had thrown at a wall. It ran again by eleven. It was a little fast. So was Junpei.'] },
      { id: 'retro', name: 'Play retro games', sub: 'The old console under the TV', desk: true, place: "Iwatodai Dorm · Solar's Room", stats: { proficiency: 1, courage: 1 },
        lines: ['A side-scroller from before she was born, with a jump that never landed where it should. She beat the third castle at one in the morning and had to stop herself from waking anyone up to tell them.', 'She got stuck on the same boss for an hour, learned its pattern by heart, and beat it without taking a hit, which felt suspiciously like Tartarus.'] },
      { id: 'keys', name: 'Practice the keyboard', sub: 'A secondhand keyboard and headphones', desk: true, place: "Iwatodai Dorm · Solar's Room", stats: { proficiency: 1, charm: 1 },
        lines: ['Scales, then the same eight bars of the same song, over and over in her headphones, until her fingers stopped thinking about it.', 'She played the song she’d been learning start to finish without a mistake for the first time, and nobody heard it, and she didn’t mind.'] }
    ]
  },
  fortunes: [
    { t: 'Great blessing. Whatever you start today will go well.', cond: 'great' },
    { t: 'Blessing. Wait a little, and what you want will come to you.', stats: { charm: 1 } },
    { t: 'Small blessing. Keep studying.', stats: { knowledge: 1 } },
    { t: 'Small blessing. Be generous to the people near you.', stats: { kindness: 1 } },
    { t: 'Uncertain. Your path is still being written.', stats: { courage: 1 } },
    { t: 'Curse. Tie it to the tree and try again another day.' }
  ],
  /* Bookworms: books are read in the evening at the dorm, a chapter a night. */
  books: [
    { id: 'manga-school', name: 'Manga Classics: The Pillow Book', price: 1200, nights: 2, stats: { knowledge: 4 } },
    { id: 'poise', name: 'The Art of Poise', price: 1500, nights: 3, stats: { charm: 6 } },
    { id: 'tiger', name: 'Tales of the Tiger and the Rope', price: 900, nights: 2, stats: { courage: 4 } },
    { id: 'algebra', name: 'Algebra, Patiently', price: 1800, nights: 3, stats: { knowledge: 7 } },
    { id: 'speech', name: 'Say It Like You Mean It', price: 2000, nights: 3, stats: { charm: 4, courage: 3 } },
    { id: 'handmade', name: 'Handmade: Simple Sewing', price: 1400, nights: 3, stats: { proficiency: 6 } },
    { id: 'fixit', name: 'Fix It Yourself', price: 1600, nights: 3, stats: { proficiency: 5, knowledge: 2 } },
    { id: 'letters', name: 'Letters to a Young Nurse', price: 1300, nights: 2, stats: { kindness: 4 } },
    { id: 'kitchen', name: 'The Dormitory Kitchen', price: 1100, nights: 2, stats: { proficiency: 3, kindness: 2 } },
    { id: 'listening', name: 'The Art of Listening', price: 1700, nights: 3, stats: { kindness: 5, charm: 1 } }
  ],
  // Shops reuse the battle game's shop list (assets/femc/battle/data.js, read only). These say where each one is.
  shops: {
    police: { area: 'mall', battleShop: 'police' },
    aohige: { area: 'strip', battleShop: 'aohige' },
    bebluev: { area: 'mall', battleShop: 'bebluev' },
    // Mayoido Antiques: rare goods, Solar's rarer naginatas, sealed Revelation cards; it buys the materials Shadows drop.
    mayoido: { area: 'mall', battleShop: 'mayoido', cards: true }
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
    ['Gekkoukan High · Music Room', 'gekkoukan-classroom-day', 'gekkoukan-classroom-evening'],
    ['Gekkoukan High · Computer Room', 'gekkoukan-classroom-day', 'gekkoukan-classroom-evening'],
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
    ['Iwatodai Dorm · 3F Hallway', 'iwatodaidorm-hallway'],
    ['Iwatodai Dorm · Stairs', 'iwatodaidorm-hallway'],
    ["Iwatodai Dorm · Solar's Room", 'solar-dormroom-day', 'solar-dormroom-night'],
    ['Iwatodai Dorm · Rooftop', 'iwatodaidorm-roof-evening', 'iwatodaidorm-roof-night'],
    ['Iwatodai Dorm · Front', 'iwotodaidorm-outside'],
    ['Iwatodai Dorm', 'iwatodaidorm-livingroom', 'iwatodaidorm-livingroom-night'],
    ['Kirijo Guesthouse · Front', 'elegant-buildingentrance', 'outside-night'],
    ['Kirijo Guesthouse', 'hotel-lobby'],
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
    ['Paulownia Mall · Fountain', 'paulownia-mall'],
    ['Paulownia Mall · Shop Windows', 'clothing-store'],
    ['Paulownia Mall · Flower Stall', 'shopping-street'],
    ['Paulownia Mall · Game Panic', 'gameparade-outside'],
    ['Paulownia Mall · Karaoke', 'clubescapade'],
    ['Paulownia Mall · Screen Shot', 'screen'],
    ['Paulownia Mall · Police Box', 'policestation-outside'],
    ['Paulownia Mall · Be Blue V', 'bebluev-outside'],
    ['Paulownia Mall · Arcade', 'inside-mall'],
    ['Paulownia Mall · Capsule Corner', 'inside-mall'],
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
    ['Naganaki Shrine · Amulet Stall', 'outside-shrine-day', 'naganaki-shrine-night'],
    ['Naganaki Shrine', 'outside-shrine-day', 'naganaki-shrine-night'],
    // Yakushima (data/yakushima.js): the villa, the forest and the ferry reuse art until Kat's own (FEMC-ART-TODO.md, Places).
    ['Yakushima · Kirijo Villa', 'hotel-lobby'],
    ['Yakushima · Forest', 'park'],
    ['Yakushima · Ferry', 'harbor'],
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
    'story-moonlight-train': '55% 35%', 'story-city-of-the-awake': '50% 40%', 'ending-last-stop': '40% 35%', 'story-haenim-unveiled': '50% 35%',
    'story-facing-wrens-shadow': '40% 35%'
  },
  /* Music (assets/femc/music/<file>.mp3) by mood. Scenes pick a mood; screens use the `screens` map.
     A mood is one file (it loops) or a pool (a list): a pool rotates, never plays the same file twice in a row, and each
     track plays through once and crossfades into the next one, so a long stay doesn't loop one song. A value with a '/'
     is a path from the site root (the world songs are the hub's own, in assets/audio/).
     World moods (world-runners / world-strangers / world-hoax) are Solar's world songs: they play softly, fading in under
     the scene, and fade back out to the P3 track when the song ends, the scene asks for another mood, or the scene ends.
     A memory fragment found in a scene starts its world's song if one isn't already playing. */
  music: {
    // P3 and the rest of the Persona soundtrack, by mood
    joy: ['joy', 'my-homie', 'specialist'], school: ['after-school', 'school-memories'], sun: 'sun',
    tender: ['tender-feeling', 'its-alright-this-way'], mystery: ['this-mysterious-feeling', 'deep-mentality', 'whos-there'],
    night: ['tranquility', 'deep-breath-reload'], velvet: ['poem-for-everyones-souls', 'hall-of-doors'],
    date: ['heartbeat-heartbreak', 'like-a-dream-come-true', 'signs-of-love'], city: ['paulownia-mall', 'specialist', 'my-homie'],
    battle: ['wiping-all-out', 'mass-destruction', 'wiping-all-out', 'its-going-down-now'],
    opening: 'burn-my-dread',                     // the title screen (`title` scores the year's last screen)
    title: 'full-moon-full-life', day: ['want-to-be-close', 'school-memories'], evening: 'color-your-night',
    dorm: ['iwatodai-dorm', 'deep-breath-reload', 'deep-breath-reincarnation'], tartarus: ['basement', 'tartarus-thebel'],
    fullmoon: 'master-of-shadow', exam: ['exam-in-progress', 'time'], results: 'its-going-down-now', shop: 'paulownia-mall',
    class: ['school-memories', 'boring'],          // つまらない: a boring class
    fresh: 'new-days',                             // a new term
    late: 'living-with-determination',             // the last weeks of the year
    trip: 'time-to-make-history',                  // trips and festivals
    rain: 'beneath-the-mask', p5: 'beneath-the-mask', // rainy evenings; the Persona 5 cast's links
    darkhour: 'shadow-world',                      // the Dark Hour streets
    badfeeling: 'bad-feeling',                     // 嫌な予感: a full-moon night
    eerie: ['whos-there', 'disconnected'], tension: 'dont', romance: ['signs-of-love', 'dont'],
    sees: 'meaning-of-armbands', awakening: 'power-of-the-heart', hopeful: 'skys-the-limit', ending: 'memories-of-you',
    // Solar's world songs (soft, over the scene)
    'world-runners': ['assets/audio/Camo-Runners.mp3', 'assets/audio/chanmina-ashell.mp3', 'assets/audio/rose-3am.mp3'],
    'world-strangers': ['assets/audio/EthelCain-Strangers.mp3', 'assets/audio/EthelCain-Crush.mp3', 'assets/audio/CocteauTwins-SeaSwallowMe.mp3'],
    'world-hoax': ['assets/audio/TaylorSwift-Hoax.mp3', 'assets/audio/arianagrande-someonelikeu.mp3']
  },
  // A memory fragment's world (core.js worldOf: R / S / H) → its song.
  worldMusic: { R: 'world-runners', S: 'world-strangers', H: 'world-hoax' },
  /* Screens. ui.js screenMood() swaps in a mood for the day: an exam day plays `exam`, a trip `trip`, the first week of a term
     `fresh`, a rainy evening `rain`, and school days from December on `late`. */
  screens: { opening: 'opening', title: 'title', school: 'day', class: 'class', after: 'day', evening: 'evening', dorm: 'dorm', exam: 'exam', results: 'results', tartarus: 'tartarus', fullmoon: 'fullmoon', status: null }
};
