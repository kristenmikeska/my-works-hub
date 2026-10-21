/* The in-game year for femc-game.html: 4/6/2009 (the first Dark Hour) to 1/31/2010.
   Dates are 'M/D' (April to December are 2009, January is 2010). Everything here is data; core.js reads it.
   - School runs Monday to Saturday, as in P3. Sundays, `holidays` and `breaks` are days off. A break's `id` ('summer',
     'winter') picks a link's summerHome / winterHome (core.js).
   - `exams`: test days (morning exam, no Tartarus that night); `results` is the day the ranking board goes up.
   - `fullMoons`: the moon phase shown in the HUD counts between these. `ops` are the forced Dark Hour operations
     (handed to the battle game, see FEMC-GAME-HANDOFF.md). An op whose date has a story event with a battle line
     is played from that event instead.
   - `trips`: days with no free time (the whole day is one scene or a summary).
   - `weather`: fixed weather for some dates; every other day rolls from `climate` with a seed, so it never changes. */
window.FEMC_GAME_CALENDAR = {
  start: '4/6', firstFree: '4/8', end: '1/31',
  // Memory fragments can't turn up in Tartarus before this date (the first ones are story beats).
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
    '4/29': 'Showa Day', '5/3': 'Constitution Day', '5/4': 'Greenery Day', '5/5': "Children's Day", '5/6': 'Substitute Holiday',
    '7/20': 'Marine Day', '9/21': 'Respect for the Aged Day', '9/22': "Citizens' Holiday", '9/23': 'Autumnal Equinox Day',
    '10/12': 'Sports Day', '11/3': 'Culture Day', '11/23': 'Labor Thanksgiving Day', '12/23': "The Emperor's Birthday",
    '1/1': "New Year's Day", '1/11': 'Coming of Age Day'
  },
  breaks: [
    { id: 'summer', from: '7/21', to: '8/31', name: 'Summer Break' },
    { id: 'winter', from: '12/24', to: '1/7', name: 'Winter Break' }
  ],
  // Named school days and seasons (shown under the date; some change the day's flow).
  events: {
    '4/8': 'Opening Ceremony', '4/29': 'Golden Week', '5/2': 'Golden Week', '5/3': 'Golden Week', '5/4': 'Golden Week', '5/5': 'Golden Week', '5/6': 'Golden Week',
    '7/17': 'Closing Ceremony', '9/1': 'Second Term', '8/16': 'Summer Festival', '10/30': 'Culture Festival', '10/31': 'Culture Festival',
    '12/22': 'Closing Ceremony', '12/24': 'Christmas Eve', '12/25': 'Christmas', '12/31': "New Year's Eve", '1/8': 'Third Term'
  },
  trips: [
    // slots: a trip with a day plan (data/yakushima.js) has daytime and evening slots too.
    { id: 'yakushima', from: '7/21', to: '7/23', place: 'Yakushima', slots: ['early', 'after', 'evening', 'late'], note: 'S.E.E.S. went to Yakushima. The Kirijo villa had a beach, and the beach had a great deal of sun.' }
  ],
  exams: [
    { id: 'midterm1', days: ['5/18', '5/19', '5/20', '5/21'], results: '5/25' },
    { id: 'final1', days: ['7/13', '7/14', '7/15', '7/16'], results: '7/18' },
    { id: 'midterm2', days: ['10/19', '10/20', '10/21', '10/22'], results: '10/26' },
    { id: 'final2', days: ['12/14', '12/15', '12/16', '12/17'], results: '12/19' }
  ],
  fullMoons: ['3/10', '4/9', '5/9', '6/8', '7/7', '8/6', '9/5', '10/4', '11/3', '12/2', '12/31', '1/30', '3/1'],
  ops: [
    { date: '4/9', op: 'magician', name: 'The Magician', kind: 'operation', scripted: true },
    { date: '5/9', op: 'priestess', name: 'The Priestess' },
    { date: '6/8', op: 'empress', name: 'Empress & Emperor' },
    { date: '7/7', op: 'hierophant', name: 'The Hierophant', then: 'lovers' },
    { date: '7/7', op: 'lovers', name: 'The Lovers' },
    { date: '8/6', op: 'chariot', name: 'Chariot & Justice' },
    { date: '9/5', op: 'hermit', name: 'The Hermit' },
    { date: '10/4', op: 'fortune', name: 'Fortune & Strength' },
    { date: '11/3', op: 'hanged', name: 'The Hanged Man' },
    { date: '12/2', op: 'tartarus-memory', name: 'Full Moon Operation', scripted: true },
    { date: '1/30', op: 'finale', name: 'Full Moon Operation', scripted: true }
  ],
  // Tartarus floors the battle game should allow by date (P3 opens blocks as the year goes on). Passed in the handoff.
  floorCaps: [['4/18', 16], ['5/10', 36], ['6/9', 64], ['7/8', 92], ['8/7', 118], ['9/6', 144], ['10/5', 172], ['11/4', 204], ['12/3', 230], ['1/1', 254]],
  weather: { '4/6': 'clear', '4/7': 'clear', '4/8': 'clear', '12/24': 'snow', '12/25': 'snow', '10/30': 'storm', '10/31': 'rain' },
  // Chance of each weather by month (the rest is clear). Rainy season in June; snow is possible in winter.
  climate: {
    4: { cloudy: 0.25, rain: 0.18 }, 5: { cloudy: 0.25, rain: 0.2 }, 6: { cloudy: 0.25, rain: 0.45 }, 7: { cloudy: 0.2, rain: 0.2 },
    8: { cloudy: 0.15, rain: 0.12 }, 9: { cloudy: 0.25, rain: 0.25 }, 10: { cloudy: 0.25, rain: 0.18 }, 11: { cloudy: 0.3, rain: 0.15 },
    12: { cloudy: 0.3, rain: 0.1, snow: 0.08 }, 1: { cloudy: 0.3, rain: 0.08, snow: 0.12 }
  },
  weatherNames: { clear: 'Clear', cloudy: 'Cloudy', rain: 'Rain', snow: 'Snow', storm: 'Storm' }
};
