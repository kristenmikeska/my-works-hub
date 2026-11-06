/* The HOAX epilogue's calendar (FEMC-EPILOGUE-PLAN.md section 4, Kat's dates): Thursday 12/21/2023 to Saturday 1/13/2024,
   Hanlim. Loaded on demand by epilogue.js. It crosses New Year: a month before December is in 2024 (core.js dayOf).
   Winter break runs to 1/7; school (and the make-up exams) from Monday 1/8. Korean school week: weekends off.
   The rest of the shape is data/calendar.js's (see data/epi/runners/calendar.js for the slots).
   Weather (batch 5): a white Christmas, the snow that comes in on 1/4 (Yeobo's, the crew), the first make-up exam (the snow that
   goes up past the window) and the last day.
   The expansion pass (Nov 5-6 2026): every day fixed to the scenes (see `weather`) and `frost` on, like Runners. */
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
    // Every day fixed to what the scenes say (the expansion pass, Nov 5-6 2026; Runners' realism pass is the model): snow on
    // the days a scene has it falling, the clear full-moon week (12/26-12/28) and 1/6 (old snow banked waist-high), grey
    // days between; heavy only on the snow day (1/4). From 1/8 the snow sometimes goes up; the forecast still says snow.
    weather: { '12/21': 'cloudy', '12/22': 'snow', '12/23': 'snow', '12/24': 'snow', '12/25': 'snow', '12/26': 'clear', '12/27': 'clear',
      '12/28': 'clear', '12/29': 'snow', '12/30': 'cloudy', '12/31': 'snow', '1/1': 'snow', '1/2': 'cloudy', '1/3': 'snow', '1/4': 'snow',
      '1/5': 'cloudy', '1/6': 'clear', '1/7': 'cloudy', '1/8': 'snow', '1/9': 'snow', '1/10': 'snow', '1/11': 'snow', '1/12': 'snow', '1/13': 'cloudy' },
    weatherLevels: { '12/22': 'light', '12/23': 'light', '12/24': 'light', '12/25': 'light', '12/29': 'light', '12/31': 'light', '1/1': 'light',
      '1/3': 'light', '1/4': 'heavy', '1/8': 'light', '1/9': 'light', '1/10': 'light', '1/11': 'light', '1/12': 'light' },
    frost: true,
    climate: { 12: { cloudy: 0.35, snow: 0.2, rain: 0.03 }, 1: { cloudy: 0.3, snow: 0.22, rain: 0.02 } },
    persist: 0.4, heavySnow: 0.3, fog: 0.12, fogMonths: [12, 1]
  }
});
