/* The strangers epilogue's calendar (FEMC-EPILOGUE-PLAN.md section 5; batch 7, 2026-10-28). Sunday 2/17/2013 to Saturday 3/16,
   Incheon, four weeks: deep winter into the first yellow dust. Loaded on demand by epilogue.js. She isn't in school here, so
   every day has the same four slots (the house's days); Sunday is the house's day off (weekend [0]). Daeboreum (2/24) is the
   act's full moon, the first of the lunar year. Yellow dust from 3/4: a 'cloudy' day whose level is 'fog' reads "Yellow dust"
   (levelNames below; fog only in March). The rest of the shape is data/calendar.js's (see data/epi/runners/calendar.js). */
(window.FEMC_EPI_WORLDS ||= {}).strangers = Object.assign(window.FEMC_EPI_WORLDS.strangers || {}, {
  calendar: {
    year: 2013, start: '2/17', firstFree: '2/17', end: '3/16', weekend: [0],
    slots: [
      { id: 'early', name: 'Morning' },
      { id: 'after', name: 'Daytime', offName: 'Daytime' },
      { id: 'evening', name: 'Evening' },
      { id: 'late', name: 'Late Night' }
    ],
    daySlots: { school: ['early', 'after', 'evening', 'late'], off: ['early', 'after', 'evening', 'late'] },
    holidays: { '3/1': 'Independence Movement Day' },
    events: { '2/24': 'Daeboreum' },
    fullMoons: ['2/24'],
    // Fixed days: snow on the first morning home, a clear night for the moon, the dust from 3/4, a grey dawn on the mudflats,
    // a clear cold dawn for the last one.
    // The expansion pass (Nov 5-6 2026): every day fixed to the scenes. Week 1 grey (2/24 is "the first clear morning in a
    // week"), light snow 2/17 and 2/20; clear and hard with frost 2/24-3/1 (the step, the market, the watch); grey 3/2-3/3;
    // yellow dust 3/4-3/9 (the clocks morning and molihua night have it "still hanging"); frost on 3/10, 3/14-3/16; dust 3/12.
    weather: { '2/17': 'snow', '2/18': 'cloudy', '2/19': 'cloudy', '2/20': 'snow', '2/21': 'cloudy', '2/22': 'cloudy', '2/23': 'cloudy',
      '2/24': 'clear', '2/25': 'clear', '2/26': 'clear', '2/27': 'clear', '2/28': 'clear', '3/1': 'clear', '3/2': 'cloudy', '3/3': 'cloudy',
      '3/4': 'cloudy', '3/5': 'cloudy', '3/6': 'cloudy', '3/7': 'cloudy', '3/8': 'cloudy', '3/9': 'cloudy', '3/10': 'clear', '3/11': 'cloudy',
      '3/12': 'cloudy', '3/13': 'cloudy', '3/14': 'clear', '3/15': 'clear', '3/16': 'clear' },
    weatherLevels: { '2/17': 'light', '2/20': 'light', '3/4': 'fog', '3/5': 'fog', '3/6': 'fog', '3/7': 'fog', '3/8': 'fog', '3/9': 'fog', '3/12': 'fog',
      '3/2': 'overcast', '3/3': 'overcast', '3/11': 'overcast', '3/13': 'overcast' }, // grey March days stay grey, not dust
    climate: { 2: { cloudy: 0.35, snow: 0.15, rain: 0.04 }, 3: { cloudy: 0.45, rain: 0.1, snow: 0.03 } },
    persist: 0.4, heavySnow: 0.25, fog: 0.45, fogMonths: [3],
    levelNames: Object.assign({}, (window.FEMC_GAME_CALENDAR || {}).levelNames, { fog: 'Yellow dust' })
  }
});
