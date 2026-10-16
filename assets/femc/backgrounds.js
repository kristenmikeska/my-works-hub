/* Scene backgrounds for FEMC mode, by place. Images live in assets/femc/bg/ (made by tools/femc-backgrounds.py).
   Each rule is [place, image, evening image?]. The first rule whose place starts the scene's place wins;
   a place starting with "*" matches anywhere in the name. With no evening image, evening and night scenes
   dim the day image instead. Places with no rule keep the plain pink backdrop. */
window.FEMC_BG = [
  // Other worlds, and the Dark Hour (the school itself becomes Tartarus)
  ['The Velvet Room', 'velvetroom-1'],
  ['Tartarus', 'tartarus-entrance'],
  ['Gekkoukan High · Rooftop · The Dark Hour', 'tartarus-fromadistance'],
  ['Gekkoukan High · Gym · The Dark Hour', 'tartarus-fromadistance'],
  ['Port Island Station · The Dark Hour', 'tartarus-coffins'],
  ['Paulownia Mall · The Dark Hour', 'tartarus-coffins'],
  ['*The Dark Hour', 'tartarus-scene'],

  // Gekkoukan High
  ['Gekkoukan High · Rooftop', 'rooftop-day', 'rooftop-evening'],
  ['Gekkoukan High · 2F Hallway', 'school-hallwaysecondfloor'],
  ['Gekkoukan High · Library', 'school-library'],
  ['Gekkoukan High · Gym · After Hours', 'school-entryhallway'],
  ['Gekkoukan High', 'school-hallway'],

  // Iwatodai
  ['Iwatodai Dorm · Rooftop', 'rooftop-citynight'],
  ['Iwatodai Dorm · Front', 'outside-daytime-neighborhood'],
  ['Iwatodai Station · Platform', 'subway'],
  ['Iwatodai Station · Vending Machines', 'subway'],
  ['Iwatodai Station · Taxi Stand', 'city'],
  ['Iwatodai Station', '0d489c888283c69d5c7848eb84174bc6'],
  ['Iwatodai Strip · Back Alley', 'outside-nightdistrict'],
  ['Iwatodai Strip', 'location-2'],
  ['Iwatodai · Riverside', 'park'],
  ['Iwatodai · Rooftops', 'rooftop-citynight'],
  ['Hagakure', 'ramen-shop'],

  // Paulownia Mall
  ['Paulownia Mall · Rooftop Garden', 'rooftop-day', 'rooftop-evening'],
  ['Paulownia Mall · Chagall Café', 'lablanc'],
  ['Paulownia Mall · Shop Windows', 'clothing-store'],
  ['Paulownia Mall · Game Panic', 'inside-mall'],
  ['Paulownia Mall · Arcade', 'inside-mall'],
  ['Paulownia Mall · Photo Booth', 'inside-mall'],
  ['Paulownia Mall · Central Atrium', 'inside-mall'],
  ['Paulownia Mall', 'paulownia-mall'],

  // Port Island
  ['Port Island Station · Back Alley', 'outside-nightdistrict'],
  ['Port Island Station · Central Concourse', '0d489c888283c69d5c7848eb84174bc6'],
  ['Port Island Station', 'location-1'],
  ['Port Island · Back Streets', 'outside-nightdistrict'],
  ['Port Island · Seaside Park', 'park'],

  // Naganaki Shrine
  ['Naganaki Shrine', 'outside-shrine-day']
];

// The Go Out map's area cards: area name → image.
window.FEMC_AREA_BG = {
  'Gekkoukan High': 'outside-school',
  'Iwatodai Dorm': 'outside-daytime-neighborhood',
  'Iwatodai Station': '0d489c888283c69d5c7848eb84174bc6',
  'Iwatodai Strip': 'location-2',
  'Paulownia Mall': 'paulownia-mall',
  'Port Island Station': 'location-1',
  'Port Island': 'park',
  'Naganaki Shrine': 'outside-shrine-day'
};
