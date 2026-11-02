/* Part-time jobs for femc-game.html. Shift scenes live in data/job-scenes.js and data/job-scenes-more.js (same ids).
   slot: 'after' (After School, or Daytime on days off) | 'evening'. days: 0 Sun ... 6 Sat. offDaysOnly: only on days off.
   pay: yen per shift. stats: social stat points per shift (each job has its own mix; Proficiency comes from work). needs: stat ranks to be hired.
   unlock: when the job appears at all { after: 'M/D', frags: { R|S|H: n } } (memory fragments from that world).
   world: the job belongs to one of Solar's other lives (its beats can nudge the hidden route tally).
   closedIn: weather that shuts the job (as activities' closedIn; none yet). Read by core.js jobOk and the phone's Jobs app.
   Raises and rare rewards (2026-11-01, Kat's ask; core.js "Raises" above jobPay): FEMC_GAME_JOB_RAISES below holds the
   shared rules; a job may override `raises` (its own tiers) and carries its own voice and rewards in `perks`:
     boss: who says it (a toast "<boss>: <line>"), raise: [line per tier], rare: [{ item: { id: n } | book: true,
     keepsake: 'text', line, who }], thanks: { item, keepsake, line, who } (the one-time gift at the top tier; `who` replaces
     boss for that toast, '' for none).
   Items are battle items (data.js items); a book is one of places.js books she doesn't own yet (else the keepsake). */
window.FEMC_GAME_JOBS = [
  { id: 'bookworms', name: 'Bookworms', role: 'Shelving at a used bookstore', area: 'strip', place: 'Iwatodai Strip · Bookworms',
    slot: 'after', days: [0, 1, 3, 6], pay: 1800, stats: { knowledge: 1, proficiency: 1 },
    blurb: 'An old couple runs it. They need someone who can reach the top shelf and won’t judge their filing system.',
    perks: { boss: 'Mitsuko', raise: ['We talked it over. You’re getting a little more an hour. Don’t tell Bunkichi I said he agreed.', 'Bunkichi says you’ve memorised the filing system better than he has. Another raise. It’s only fair.', 'We can’t pay you what you’re worth, dear. But we can pay you more.'],
      rare: [{ book: true, keepsake: 'A first edition, slipped into her bag', line: 'This one came in a box from an estate sale. It wants a reader, not a shelf. Take it.' }],
      thanks: { item: { chewing_soul: 2 }, keepsake: 'A handwritten bookmark from the old couple', line: 'Bunkichi wrote you a bookmark. He wouldn’t let me read it. Keep it in something good.' } } },
  { id: 'konbini', name: 'Convenience store', role: 'Evening shift on Port Island', area: 'portisland', place: 'Port Island · Convenience Store',
    slot: 'evening', days: [2, 4, 5, 6], pay: 2400, stats: { courage: 1, proficiency: 1 },
    blurb: 'The night shift at the corner store by the station. The clerk looks like he’s seen things.',
    perks: { boss: 'The clerk', raise: ['Manager says you’re on the good list now. That means more per hour. It also means more night shifts. Sorry.', 'Second raise. You’ve outlasted three guys who said they’d outlast me.', 'Top rate. Nobody’s ever hit top rate. I’m a little scared of you.'],
      rare: [{ item: { medicine: 3 }, line: 'Box got crushed in delivery. Can’t sell it. You look like someone who gets hurt a lot. Take it.' }, { item: { snuff_soul: 2 }, line: 'Supplier sent extras. Energy drinks. I don’t want to know what’s in them. You might.' }],
      thanks: { item: { bead: 2 }, keepsake: 'A laminated "Employee of the Month" card, the only one the store has ever made', line: 'I made you a card. On the laminator. Don’t make it weird.' } } },
  { id: 'tutor', name: 'Tutoring', role: 'Math and English for a middle-schooler', area: 'strip', place: 'Tutor · The Sakamoto Apartment',
    slot: 'evening', days: [1, 3, 5], pay: 3200, stats: { knowledge: 1, kindness: 1 }, needs: { knowledge: 3 },
    blurb: 'A family by the river wants a tutor for their son. They want someone who is at least Well-Read.',
    perks: { boss: 'Mrs. Sakamoto', raise: ['Kenta’s marks went up. So does your fee. That’s how we do things in this house.', 'His teacher called to ask what changed. I told her: you. We’re paying you more.', 'You’ve done more for him than three cram schools. Please accept this. I won’t take no.'],
      rare: [{ item: { snuff_soul: 2 }, keepsake: 'A box of good tea', line: 'A client gave my husband far too much tea. Please. Take some home.' }],
      thanks: { item: { chewing_soul: 2 }, keepsake: 'A thank-you card in Kenta’s careful handwriting', line: 'Kenta wrote this himself. Twice, actually. The first one had a spelling mistake and he was mortified.' } } },
  { id: 'respawn', name: 'Respawn', role: 'Coffee bar at an esports café', area: 'portisland', place: 'Port Island Station · Respawn', world: 'R',
    slot: 'evening', days: [2, 5, 6], pay: 2800, stats: { proficiency: 1, charm: 1 }, unlock: { after: '9/12', frags: { R: 3 } },
    blurb: 'A late-opening café full of glowing monitors. She doesn’t remember it opening.',
    perks: { boss: 'The manager', raise: ['Regulars keep asking for your latte art. That’s a raise. Don’t let it go to your head.', 'Raise number two. The coffee bar is in the black for the first time since we opened.', 'Top rate. Honestly, I don’t remember hiring you. I’m glad I did.'],
      rare: [{ item: { chewing_soul: 1 }, line: 'Pulled a shot wrong. Wrong for the customer, right for you. On the house.' }],
      thanks: { item: { chewing_soul: 2 }, keepsake: 'A Respawn staff card with her name already printed on it', line: 'Your staff card. Funny thing: it was in the drawer before you started.' } } },
  { id: 'fishmarket', name: 'Harbor fish market', role: 'Weekend mornings at the market', area: 'port', place: 'Port Island · Fish Market', world: 'S',
    slot: 'after', days: [0], offDaysOnly: true, pay: 2800, stats: { proficiency: 1, courage: 1 }, unlock: { after: '10/10', frags: { S: 3 } },
    blurb: 'Ice, salt and diesel. They need hands on days off, early.',
    perks: { boss: 'Mr. Tanabe', raise: ['You haven’t dropped a crate yet. That earns something. More per morning.', 'My nephew still drops crates. You don’t. You get his raise.', 'Best hands on the dock. Top rate. Don’t tell the others.'],
      rare: [{ item: { snuff_soul: 2 }, keepsake: 'A wrapped cut of the best tuna on the dock', line: 'Chef Morita didn’t want this one. His loss. Grill it tonight, salt only.' }],
      thanks: { item: { soma: 1 }, keepsake: 'A tide chart in Tanabe’s square handwriting', line: 'The tides for the year. You’ll want to know when the good fish come in, wherever you end up.' } } },
  { id: 'yeobos', name: "Yeobo's Cafe", role: 'Counter shifts at a café on the Strip', area: 'strip', place: "Iwatodai Strip · Yeobo's Cafe", world: 'H',
    slot: 'after', days: [0, 1, 4, 6], pay: 2600, stats: { charm: 1, kindness: 1 }, unlock: { after: '11/7', frags: { H: 6 } },
    blurb: 'A café that wasn’t on the Strip last week. The sign is hand-lettered. The cups are where she expects them to be.',
    perks: { boss: 'A note taped to the register', raise: ['“Raise, starting today. You make the place feel like it was always here.”', '“Another raise. The regulars ask for you by name now.”', '“Top rate. Thank you for staying. — the café”'],
      rare: [{ who: '', item: { chewing_soul: 1 }, line: 'A drink nobody ordered sat waiting at the end of the counter with her name on the cup.' }],
      thanks: { who: '', item: { chewing_soul: 2 }, keepsake: 'A hand-lettered Yeobo’s mug, her name on the bottom', line: 'A mug on the shelf she hadn’t seen before, her name on the bottom in the same hand as the sign.' } } },
  { id: 'flowers', name: 'Flower stall', role: 'Afternoons at the flower stall in the mall', area: 'mall', place: 'Paulownia Mall · Flower Stall',
    slot: 'after', days: [2, 4, 6], pay: 1600, stats: { kindness: 1, proficiency: 1 },
    blurb: 'A tiny stall by the mall fountain. The owner’s knees are bad and the buckets are heavy. Most customers are buying flowers for somebody else.',
    perks: { boss: 'Mrs. Okada', raise: ['My knee says thank you. So does my wallet, a little. More per shift.', 'The buckets are lighter since you came. Here’s more pay to prove I noticed.', 'Top rate, and don’t argue. You argue like a rose.'],
      rare: [{ item: { revival_bead: 1 }, keepsake: 'A pressed flower between wax paper', line: 'This one was too pretty to sell and too stubborn to wilt. I pressed it. For you.' }],
      thanks: { item: { bead: 2 }, keepsake: 'A small bouquet tied with the stall’s ribbon', line: 'I don’t make bouquets for staff. This isn’t one. Take it before I change my mind.' } } },
  // Living world, part 2 (2026-10-21): three more around Iwatodai.
  { id: 'chagall', name: 'Chagall Café', role: 'Behind the counter at Chagall', area: 'mall', place: 'Paulownia Mall · Chagall Café',
    slot: 'after', days: [1, 2, 4, 6], pay: 2000, stats: { charm: 1, knowledge: 1 },
    blurb: 'The café with the strange coffee wants someone for the afternoon rush. The manager says the job is mostly memory: the orders, the regulars, which pastry goes with which mood.',
    perks: { boss: 'Ms. Kagami', raise: ['You remember the regulars’ orders. That is the whole job. More per hour.', 'Another raise. The afternoon rush runs on time now. I don’t like to admit it.', 'Top rate. I have never paid anyone top rate. Don’t make me regret it.'],
      rare: [{ item: { snuff_soul: 2 }, keepsake: 'A voucher for one free drink', line: 'One free drink. Any drink. Even the flavored ones, God help us.' }],
      thanks: { item: { chewing_soul: 2 }, keepsake: 'The café’s house blend, ground for her', line: 'The house blend. I don’t give it away. Consider that a compliment.' } } },
  { id: 'hagakure', name: 'Hagakure', role: 'The dinner rush in the ramen kitchen', area: 'strip', place: 'Iwatodai Strip · Hagakure · Kitchen',
    slot: 'evening', days: [0, 3, 5, 6], pay: 2600, stats: { proficiency: 1, courage: 1 },
    blurb: 'The ramen shop needs a pair of hands for the dinner rush: bowls, broth, the ticket machine, and the occasional customer attempting the Mega Bowl.',
    perks: { boss: 'The Master', raise: ['Your bowls go out hot and on time. That’s worth more yen.', 'Raise. You can work the ticket machine and the broth at once. That’s rare.', 'Top rate. You’ve got a kitchen in you. Don’t waste it.'],
      rare: [{ item: { chewing_soul: 1 }, keepsake: 'A staff bowl, extra chashu', line: 'Staff meal. Sit. Eat. I won’t say it twice.' }],
      thanks: { item: { soma: 1 }, keepsake: 'A card for the secret menu, signed by the Master', line: 'There’s a secret menu. You’re on the list now.' } } },
  { id: 'amulets', name: 'Amulet stall', role: 'Helping at the shrine’s amulet stall', area: 'shrine', place: 'Naganaki Shrine · Amulet Stall',
    slot: 'after', days: [0, 6], pay: 1700, stats: { kindness: 1, charm: 1 },
    blurb: 'The neighborhood association pays a little for someone to keep the amulet stall open on weekends. Busier than it looks, and very busy at New Year.',
    perks: { boss: 'Mr. Maeda', raise: ['The association voted. Unanimously. More for your weekends.', 'Sales are up. Mrs. Kubo says it’s the knots. It’s the knots. More pay.', 'Top rate. The association has never had a top rate. We made one.'],
      rare: [{ item: { revival_bead: 1 }, keepsake: 'An omamori for safe travels', line: 'The priest blessed a few extra. One of these is yours. Safe travels, wherever you go.' }],
      thanks: { item: { revival_bead: 2 }, keepsake: 'A hand-tied amulet cord in the shrine’s colors', line: 'Mrs. Kubo tied this one for you. She says you’ll know when to use it.' } } }
];

/* Raises and rare rewards, the shared rules (2026-11-01; core.js "Raises"). A tier is reached after `at` shifts worked at
   that job: pay +pct% from the next shift (rounded to `round` yen before perks), announced once with the boss's line; the
   last tier also gives the job's one-time `thanks`. `rare`: the chance per shift of a job's rare reward, by tier reached
   (0 = none yet); never two shifts running, never on a shift whose scene gives a gift itself. Balance (2026-11-01): the top
   rate is +50% (tutoring ¥4,800 a shift, ¥6,480 with both pay perks); a dedicated job reaches it in about half a year. */
window.FEMC_GAME_JOB_RAISES = {
  tiers: [{ at: 5, pct: 15 }, { at: 12, pct: 30 }, { at: 25, pct: 50 }],
  round: 10,
  rare: [0.05, 0.07, 0.09, 0.12]
};
