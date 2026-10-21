/* Part-time jobs for femc-game.html. Shift scenes live in data/job-scenes.js (same ids).
   slot: 'after' (After School, or Daytime on days off) | 'evening'. days: 0 Sun ... 6 Sat. offDaysOnly: only on days off.
   pay: yen per shift. stats: social stat points per shift (each job has its own mix; Proficiency comes from work). needs: stat ranks to be hired.
   unlock: when the job appears at all { after: 'M/D', frags: { R|S|H: n } } (memory fragments from that world).
   world: the job belongs to one of Solar's other lives (its beats can nudge the hidden route tally). */
window.FEMC_GAME_JOBS = [
  { id: 'bookworms', name: 'Bookworms', role: 'Shelving at a used bookstore', area: 'strip', place: 'Iwatodai Strip · Bookworms',
    slot: 'after', days: [0, 1, 3, 6], pay: 1800, stats: { knowledge: 1, proficiency: 1 },
    blurb: 'An old couple runs it. They need someone who can reach the top shelf and won’t judge their filing system.' },
  { id: 'konbini', name: 'Convenience store', role: 'Evening shift on Port Island', area: 'portisland', place: 'Port Island · Convenience Store',
    slot: 'evening', days: [2, 4, 5, 6], pay: 2400, stats: { courage: 1, proficiency: 1 },
    blurb: 'The night shift at the corner store by the station. The clerk looks like he’s seen things.' },
  { id: 'tutor', name: 'Tutoring', role: 'Math and English for a middle-schooler', area: 'strip', place: 'Tutor · The Sakamoto Apartment',
    slot: 'evening', days: [1, 3, 5], pay: 3200, stats: { knowledge: 1, kindness: 1 }, needs: { knowledge: 3 },
    blurb: 'A family by the river wants a tutor for their son. They want someone who is at least Well-Read.' },
  { id: 'respawn', name: 'Respawn', role: 'Coffee bar at an esports café', area: 'portisland', place: 'Port Island Station · Respawn', world: 'R',
    slot: 'evening', days: [2, 5, 6], pay: 2800, stats: { proficiency: 1, charm: 1 }, unlock: { after: '9/12', frags: { R: 3 } },
    blurb: 'A late-opening café full of glowing monitors. She doesn’t remember it opening.' },
  { id: 'fishmarket', name: 'Harbor fish market', role: 'Weekend mornings at the market', area: 'port', place: 'Port Island · Fish Market', world: 'S',
    slot: 'after', days: [0], offDaysOnly: true, pay: 2800, stats: { proficiency: 1, courage: 1 }, unlock: { after: '10/10', frags: { S: 3 } },
    blurb: 'Ice, salt and diesel. They need hands on days off, early.' },
  { id: 'yeobos', name: "Yeobo's Cafe", role: 'Counter shifts at a café on the Strip', area: 'strip', place: "Iwatodai Strip · Yeobo's Cafe", world: 'H',
    slot: 'after', days: [0, 1, 4, 6], pay: 2600, stats: { charm: 1, kindness: 1 }, unlock: { after: '11/7', frags: { H: 6 } },
    blurb: 'A café that wasn’t on the Strip last week. The sign is hand-lettered. The cups are where she expects them to be.' },
  { id: 'flowers', name: 'Flower stall', role: 'Afternoons at the flower stall in the mall', area: 'mall', place: 'Paulownia Mall · Flower Stall',
    slot: 'after', days: [2, 4, 6], pay: 1600, stats: { kindness: 1, proficiency: 1 },
    blurb: 'A tiny stall by the mall fountain. The owner’s knees are bad and the buckets are heavy. Most customers are buying flowers for somebody else.' }
];
