/* The Runners epilogue's calendar (FEMC-EPILOGUE-PLAN.md section 3): Monday 12/1/2025 to Saturday 12/20/2025, Syracuse.
   Loaded on demand by epilogue.js when the epilogue is entered (never at the main game's start-up). Same shape as Iwatodai's
   data/calendar.js; whatever is left out comes from epilogue.js CAL_BASE (no ops, trips or floor caps at home).
   - `year` + `start` are day 0; `end` is the act's last night (sleeping through it ends the epilogue).
   - Fewer slots than Gekkoukan (the plan's "Days"): Morning (class, practice or duty), After Class / Daytime, Evening, Late
     Night. The morning keeps the id 'early' so the engine's new-day rules stay as they are.
   - College: weekends off. Finals week is `exams` (a day type for later batches; it has the same slots for now).
   - Weather: a Syracuse December. The return morning snows (the ending's snow day), and so does the act's last day. */
(window.FEMC_EPI_WORLDS ||= {}).runners = Object.assign(window.FEMC_EPI_WORLDS.runners || {}, {
  calendar: {
    year: 2025, start: '12/1', firstFree: '12/1', end: '12/20', weekend: [0, 6],
    slots: [
      { id: 'early', name: 'Morning' },
      { id: 'after', name: 'After Class', offName: 'Daytime' },
      { id: 'evening', name: 'Evening' },
      { id: 'late', name: 'Late Night' }
    ],
    daySlots: { school: ['early', 'after', 'evening', 'late'], off: ['early', 'after', 'evening', 'late'], exam: ['early', 'after', 'evening', 'late'] },
    holidays: {},
    events: { '12/6': 'Regionals', '12/7': 'Regionals' },
    exams: [{ id: 'finals', days: ['12/15', '12/16', '12/17', '12/18', '12/19'] }],
    fullMoons: ['12/4'],
    weather: { '12/1': 'snow', '12/20': 'snow' },
    weatherLevels: { '12/1': 'light', '12/20': 'light' },
    climate: { 12: { cloudy: 0.4, snow: 0.28, rain: 0.04 } },
    persist: 0.45, heavySnow: 0.3, fog: 0.1, fogMonths: [12]
  }
});
