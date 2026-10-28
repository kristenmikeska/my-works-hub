/* The HOAX epilogue's calendar (FEMC-EPILOGUE-PLAN.md section 4, Kat's dates): Thursday 12/21/2023 to Saturday 1/13/2024,
   Hanlim. Loaded on demand by epilogue.js. It crosses New Year: a month before December is in 2024 (core.js dayOf).
   Winter break runs to 1/7; school (and the make-up exams) from Monday 1/8. Korean school week: weekends off.
   The rest of the shape is data/calendar.js's (see data/epi/runners/calendar.js for the slots). */
(window.FEMC_EPI_WORLDS ||= {}).hoax = Object.assign(window.FEMC_EPI_WORLDS.hoax || {}, {
  calendar: {
    year: 2023, start: '12/21', firstFree: '12/21', end: '1/13', weekend: [0, 6],
    slots: [
      { id: 'early', name: 'Morning' },
      { id: 'after', name: 'After School', offName: 'Daytime' },
      { id: 'evening', name: 'Evening' },
      { id: 'late', name: 'Late Night' }
    ],
    daySlots: { school: ['early', 'after', 'evening', 'late'], off: ['early', 'after', 'evening', 'late'], exam: ['early', 'after', 'evening', 'late'] },
    holidays: { '12/25': 'Christmas', '1/1': "New Year's Day" },
    breaks: [{ id: 'winter', from: '12/21', to: '1/7', name: 'Winter Break' }],
    events: { '12/24': 'Christmas Eve', '12/31': "New Year's Eve", '1/8': 'Back to School' },
    exams: [{ id: 'makeup', days: ['1/8', '1/9', '1/10'] }],
    fullMoons: ['12/27'],
    weather: {},
    climate: { 12: { cloudy: 0.35, snow: 0.2, rain: 0.03 }, 1: { cloudy: 0.3, snow: 0.22, rain: 0.02 } },
    persist: 0.4, heavySnow: 0.3, fog: 0.12, fogMonths: [12, 1]
  }
});
