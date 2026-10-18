/* Scene backgrounds for FEMC mode, by place. Images live in assets/femc/bg/ (made by tools/femc-backgrounds.py).
   Each rule is [place, image, evening image?, look?] (look: a CSS filter class like 'nightblue' that recolors the image). The first rule whose place starts the scene's place wins;
   a place starting with "*" matches anywhere in the name. With no evening image, evening and night scenes
   dim the day image instead. Places with no rule keep the plain pink backdrop. */
window.FEMC_BG = [
  // Other worlds, and the Dark Hour (the school itself becomes Tartarus)
  ['The Velvet Room', 'velvetroom-elevator'],
  ['Tartarus · Lobby', 'tartarus-lobby'],
  ['Tartarus', 'tartarus-entrance'],
  ['Gekkoukan High · Rooftop · The Dark Hour', 'tartarus-fromadistance'],
  ['Gekkoukan High · Gym · The Dark Hour', 'tartarus-fromadistance'],
  ['Moonlight Bridge · The Dark Hour', 'moonlightbridge'],
  ['Port Island Station · The Dark Hour', 'tartarus-coffins'],
  ['Paulownia Mall · The Dark Hour', 'tartarus-coffins'],
  ['*The Dark Hour', 'tartarus-scene'],

  // Gekkoukan High
  ['Gekkoukan High · Rooftop', 'rooftop-day', 'rooftop-evening'],
  ['Gekkoukan High · 2F Hallway', 'school-hallwaysecondfloor'],
  ['Gekkoukan High · Library', 'school-library'],
  ['Gekkoukan High · Gym · After Hours', 'school-entryhallway'],
  ['Gekkoukan High · Front Gate', 'gekkoukanhigh'],
  ['Gekkoukan High', 'school-hallway'],

  // Iwatodai Dorm
  ['Iwatodai Dorm · Lounge', 'iwatodaidorm-livingroom', 'iwatodaidorm-livingroom-night'],
  ['Iwatodai Dorm · Kitchen', 'iwatodaidorm-kitchen'],
  ['Iwatodai Dorm · Laundry Room', 'iwatodaidorm-laundryroom'],
  ['Iwatodai Dorm · Command Room', 'iwatodaidorm-commandroom'],
  ['Iwatodai Dorm · Hallway', 'iwatodaidorm-hallway'],
  ['Iwatodai Dorm · 2F Hallway', 'iwatodaidorm-hallway'],
  ['Iwatodai Dorm · His Room', 'haechan-bedroom'],
  // Bedrooms, ready for scenes set there (no current scene uses them yet)
  ["Iwatodai Dorm · Solar's Room", 'pink-bedroom-2'],
  ["Iwatodai Dorm · Akihiko's Room", 'akihiko-bedroom'],
  ["Iwatodai Dorm · Kuromi's Room", 'kuromi-bedroom'],
  ['Iwatodai Dorm · Rooftop', 'rooftop-citynight'],
  ['Iwatodai Dorm · Front', 'iwotodaidorm-outside'],

  // Iwatodai
  ['Iwatodai Station · Platform', 'subway'],
  ['Iwatodai Station · Vending Machines', 'subway'],
  ['Iwatodai Station · Taxi Stand', 'city'],
  ['Iwatodai Station', '0d489c888283c69d5c7848eb84174bc6'],
  ['Iwatodai Strip · Back Alley', 'outside-nightdistrict'],
  ['Iwatodai Strip · Wild-Duck Burger', 'wilduckburger'],
  ['Iwatodai Strip · Bookworms', 'shopping-street'],
  ['Iwatodai Strip', 'location-2'],
  ['Iwatodai · Riverside', 'park-2'],
  ['Iwatodai · Rooftops', 'rooftop-citynight'],
  ['Hagakure', 'hagakureramen'],

  // Paulownia Mall
  ['Paulownia Mall · Rooftop Garden', 'rooftop-day', 'rooftop-evening'],
  ['Paulownia Mall · Chagall Café', 'lablanc'],
  ['Paulownia Mall · Shop Windows', 'clothing-store'],
  ['Paulownia Mall · Flower Stall', 'shopping-street'],
  ['Paulownia Mall · Game Panic', 'gameparade-outside'],
  ['Paulownia Mall · Club Escapade', 'clubescapade'],
  ['Paulownia Mall · Police Box', 'policestation-outside'],
  ['Paulownia Mall · Arcade', 'inside-mall'],
  ['Paulownia Mall · Photo Booth', 'inside-mall'],
  ['Paulownia Mall · Central Atrium', 'inside-mall'],
  ['Paulownia Mall', 'paulownia-mall'],

  // Port Island
  ['Port Island Station · Back Alley', 'outside-nightdistrict'],
  ['Port Island Station · Wild-Duck Burger', 'wilduckburger'],
  ['Port Island Station · Central Concourse', '0d489c888283c69d5c7848eb84174bc6'],
  ['Port Island Station', 'location-1'],
  ['Port Island · Back Streets', 'outside-nightdistrict'],
  ['Port Island · Seaside Park', 'park-2'],
  ['Port Island · Pier', 'park-2', 'outside-night'],
  ['Port Island · Coastal Road', 'outside-night'],
  ['Port Island · Harbor', 'harbor'],
  ['Iwatodai · Junkyard', 'junkyard-scene'],
  ["Ann's Hotel · Lobby", 'hotel-lobby'],
  ["Ann's Hotel", 'hotel-outside'],

  // Tatsumi Memorial Hospital
  ['Tatsumi Memorial Hospital · 3F Ward', 'hospital-room'],
  ['Tatsumi Memorial Hospital · Rooftop', 'rooftop-day', 'rooftop-evening'],
  ['Tatsumi Memorial Hospital · Courtyard', 'hospital-outside'],
  ['Tatsumi Memorial Hospital', 'hospital-hallway-day', 'hospital-hallway-night'],

  // Moonlight Bridge on an ordinary night: the Dark Hour shot, recolored
  ['Moonlight Bridge', 'moonlightbridge', null, 'nightblue'],

  // Naganaki Shrine
  ['Naganaki Shrine', 'outside-shrine-day']
];

// The Go Out map's area cards: area name → image.
window.FEMC_AREA_BG = {
  'Gekkoukan High': 'outside-school',
  'Iwatodai Dorm': 'iwatodaidorm-livingroom',
  'Iwatodai Station': '0d489c888283c69d5c7848eb84174bc6',
  'Iwatodai Strip': 'location-2',
  'Paulownia Mall': 'paulownia-mall',
  'Port Island Station': 'location-1',
  'Port Island': 'park',
  'Naganaki Shrine': 'outside-shrine-day',
  'Tatsumi Memorial Hospital': 'hospital-outside',
  'Moonlight Bridge': 'moonlightbridge'
};
