/* The strangers epilogue's calendar (FEMC-EPILOGUE-PLAN.md section 5; the specifics are in Claude's private notes). Deep
   winter in Incheon, about four weeks. Loaded on demand by epilogue.js. Only the engine data lives here until the world is
   built (after the manuscript passes the private pickup point): no story, nothing canon-dependent.
   The rest of the shape is data/calendar.js's (see data/epi/runners/calendar.js for the slots). */
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
    weather: {},
    climate: { 2: { cloudy: 0.35, snow: 0.15, rain: 0.04 }, 3: { cloudy: 0.4, rain: 0.12, snow: 0.04 } },
    persist: 0.4, heavySnow: 0.25, fog: 0.2, fogMonths: [2, 3]
  }
});
