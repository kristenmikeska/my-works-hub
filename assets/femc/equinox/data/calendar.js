/* Persona 3: Equinox · the in-game year (femc-equinox.html): 4/6/2010 to the first week of March 2011.
   The same shape as Solstice's assets/femc/game/data/calendar.js (core.js reads it the same way; see EQUINOX-TECH.md).
   Dates are 'M/D' (April to December are 2010; January to March are 2011). Calendar only: no story events; operations as the story
   batches write them (`ops`); no trips, no Tartarus floor caps yet.
   - The year mirrors Solstice's: day 0 is 4/6 (a Tuesday in 2010), the opening ceremony on 4/8, school Monday to Saturday,
     Sundays, `holidays` and `breaks` off, four exam weeks on the same weeks of the term, summer break 7/21-8/31, winter
     break 12/24-1/7, graduation in the first days of March.
   - `holidays`: Japan's national holidays as they fell in 2010-11 (Happy Monday dates included: Marine Day 7/19,
     Respect for the Aged Day 9/20, Sports Day 10/11, Coming of Age Day 1/10). No substitute holidays were needed:
     none of them fell on a Sunday in this range. The vernal equinox (3/21) is past the end.
   - `fullMoons`: the real full moons of 2010-11 by Japan time (JST date of the exact full moon; Solstice used the same rule:
     6/8/2009, 9/5/2009 and 11/3/2009 are JST dates). 9/23 is the full moon on Autumnal Equinox Day itself, and 12/21 is the
     total lunar eclipse on the winter solstice. The last real full moon in range is 2/18; any finale moon in March is a
     plot decision (Solstice's 3/6 was invented), so none is listed.
   - `end`: in the first week of March 2011 and must stay well before 3/11/2011 (the Tohoku earthquake and tsunami: never in
     range, never mentioned). The end date, graduation and the final stretch may move once the plot writer decides (the
     private plot file decides; this file doesn't read it).
   - `ops`: the full-moon operations written so far (Act I: 4/28, 5/28). `trips`, `floorCaps`, `ngpFloorCaps`: empty until
     the story batches (the Well's floor caps will go here). */
window.FEMC_GAME_CALENDAR = {
  // `year` + `start` are day 0 for core.js's date maths; a month before April is in the next year (2011).
  year: 2010, start: '4/6', firstFree: '4/8', end: '3/6',
  // Mirrors Solstice's last stretch (graduation, the last day before the end, the end). May move with the plot.
  finalStretch: { from: '2/1', graduation: '3/4', finale: '3/5', end: '3/6' },
  // Memory cards can't turn up before this date (mirrors Solstice; the new card set may change it).
  fragmentsFrom: '5/16',
  slots: [
    { id: 'early', name: 'Early Morning' },
    { id: 'morning', name: 'Morning' },
    { id: 'lunch', name: 'Lunchtime' },
    { id: 'afternoon', name: 'Afternoon' },
    { id: 'after', name: 'After School', offName: 'Daytime' },
    { id: 'evening', name: 'Evening' },
    { id: 'late', name: 'Late Night' },
    { id: 'darkhour', name: 'Dark Hour' }
  ],
  holidays: {
    '4/29': 'Showa Day', '5/3': 'Constitution Day', '5/4': 'Greenery Day', '5/5': "Children's Day",
    '7/19': 'Marine Day', '9/20': 'Respect for the Aged Day', '9/23': 'Autumnal Equinox Day',
    '10/11': 'Sports Day', '11/3': 'Culture Day', '11/23': 'Labor Thanksgiving Day', '12/23': "The Emperor's Birthday",
    '1/1': "New Year's Day", '1/10': 'Coming of Age Day', '2/11': 'National Foundation Day'
  },
  breaks: [
    { id: 'summer', from: '7/21', to: '8/31', name: 'Summer Break' },
    { id: 'winter', from: '12/24', to: '1/7', name: 'Winter Break' }
  ],
  // Named school days and seasons (shown under the date). School-calendar labels only, no story.
  events: {
    '4/8': 'Opening Ceremony', '4/29': 'Golden Week', '5/1': 'Golden Week', '5/2': 'Golden Week', '5/3': 'Golden Week', '5/4': 'Golden Week', '5/5': 'Golden Week',
    '7/20': 'Closing Ceremony', '9/1': 'Second Term', '10/29': 'Culture Festival', '10/30': 'Culture Festival',
    '12/22': 'Closing Ceremony', '12/24': 'Christmas Eve', '12/25': 'Christmas', '12/31': "New Year's Eve", '1/8': 'Third Term',
    '2/3': 'Setsubun', '2/14': "Valentine's Day", '3/4': 'Graduation'
  },
  trips: [],
  // Mon-Thu of the same term weeks as Solstice's (one day earlier in 2010); results the following Monday or Saturday.
  exams: [
    { id: 'midterm1', days: ['5/17', '5/18', '5/19', '5/20'], results: '5/24' },
    { id: 'final1', days: ['7/12', '7/13', '7/14', '7/15'], results: '7/17' },
    { id: 'midterm2', days: ['10/18', '10/19', '10/20', '10/21'], results: '10/25' },
    { id: 'final2', days: ['12/13', '12/14', '12/15', '12/16'], results: '12/18' }
  ],
  // Real full moons, JST: 4/28 21:19, 5/28 08:07, 6/26 20:31, 7/26 10:37, 8/25 02:04, 9/23 18:17, 10/23 10:37,
  // 11/22 02:28, 12/21 17:14 (eclipse), 1/20 06:22, 2/18 17:36. None falls on an exam day.
  fullMoons: ['4/28', '5/28', '6/26', '7/26', '8/25', '9/23', '10/23', '11/22', '12/21', '1/20', '2/18'],
  // Full-moon operations (Solstice's shape): each date's story event carries the { battle: { kind: 'operation', op } } line, so
  // core.js plays the op from that event (no fallback scene); battle.js SCRIPTS holds the fights. Act I: data/story-act1.js.
  ops: [
    { date: '4/28', op: 'eqx-knock', name: 'The Knock', kind: 'operation', scripted: true },
    { date: '5/28', op: 'eqx-first-hill', name: 'The First Hill', kind: 'operation', scripted: true }
  ],
  floorCaps: [],
  ngpFloorCaps: [],
  // Fixed weather: only the first days for now (the story batches add the days their scenes describe).
  weather: { '4/6': 'clear', '4/7': 'clear', '4/8': 'clear' },
  weatherLevels: {},
  // Chance of each weather by month (the rest is clear), as Solstice's.
  climate: {
    4: { cloudy: 0.25, rain: 0.18 }, 5: { cloudy: 0.25, rain: 0.2 }, 6: { cloudy: 0.25, rain: 0.3 }, 7: { cloudy: 0.2, rain: 0.2 },
    8: { cloudy: 0.15, rain: 0.12, storm: 0.03 }, 9: { cloudy: 0.25, rain: 0.22, storm: 0.05 }, 10: { cloudy: 0.25, rain: 0.18, storm: 0.02 }, 11: { cloudy: 0.3, rain: 0.15 },
    12: { cloudy: 0.3, rain: 0.1, snow: 0.08 }, 1: { cloudy: 0.3, rain: 0.06, snow: 0.14 }, 2: { cloudy: 0.3, rain: 0.08, snow: 0.14 },
    3: { cloudy: 0.3, rain: 0.18, snow: 0.03 }
  },
  // The 2010 rainy season in Kanto ran from about 6/13 to 7/17 (approximate); typhoon season as Solstice's.
  spells: [
    { from: '6/13', to: '7/17', name: 'Rainy season', cloudy: 0.3, rain: 0.5, storm: 0.02, drizzle: 0.55 },
    { from: '8/25', to: '10/10', name: 'Typhoon season', cloudy: 0.25, rain: 0.2, storm: 0.07 }
  ],
  persist: 0.4,
  drizzle: 0.4, heavySnow: 0.35, fog: 0.2, fogMonths: [11, 12, 1, 2, 3],
  weatherNames: { clear: 'Clear', cloudy: 'Cloudy', rain: 'Rain', snow: 'Snow', storm: 'Storm' },
  levelNames: { clear: 'Clear', overcast: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', storm: 'Storm', light: 'Light snow', heavy: 'Heavy snow' }
};
