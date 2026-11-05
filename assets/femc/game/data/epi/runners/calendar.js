/* The Runners epilogue's calendar (FEMC-EPILOGUE-PLAN.md section 3): Monday 12/1/2025 to Wednesday 12/31/2025: Syracuse to
   12/20, then winter break in Manhattan (the Manhattan pass, Nov 5 2026, FEMC-RUNNERS-MANHATTAN-PLAN.md: `end` 12/31, the
   break 12/21-12/31 as days off, Christmas Eve / Christmas / New Year's Eve labels, a New York late December's weather).
   Loaded on demand by epilogue.js when the epilogue is entered (never at the main game's start-up). Same shape as Iwatodai's
   data/calendar.js; whatever is left out comes from epilogue.js CAL_BASE (no ops, trips or floor caps at home).
   - `year` + `start` are day 0; `end` is the act's last night (sleeping through it ends the epilogue).
   - Fewer slots than Gekkoukan (the plan's "Days"): Morning (class, practice or duty), After Class / Daytime, Evening, Late
     Night. The morning keeps the id 'early' so the engine's new-day rules stay as they are.
   - College: weekends off. Finals week is `exams` (a day type for later batches; it has the same slots for now).
   - Weather: a Syracuse December. The return morning snows (the ending's snow day), and so does the act's last day.
     Nov 3 2026 (Kat: more realism): every day is fixed to match what the scenes say about the sky: lake-effect snow on and
     off, gray days, the clear full-moon night (12/4) and two clear days (12/14, 12/19); heavy snow only on the two days the
     story calls a storm or "the first real snow" (12/1, 12/20). `spells` only name the lake-effect stretches for the phone's
     forecast (every day is fixed, so they change no roll). `frost`: on snow days a room with a window gets frost at the glass's
     edges and a few melting drops (weather.js; Iwatodai's calendar doesn't set it, so the main game is unchanged). */
(window.FEMC_EPI_WORLDS ||= {}).runners = Object.assign(window.FEMC_EPI_WORLDS.runners || {}, {
  calendar: {
    year: 2025, start: '12/1', firstFree: '12/1', end: '12/31', weekend: [0, 6],
    slots: [
      { id: 'early', name: 'Morning' },
      { id: 'after', name: 'After Class', offName: 'Daytime' },
      { id: 'evening', name: 'Evening' },
      { id: 'late', name: 'Late Night' }
    ],
    daySlots: { school: ['early', 'after', 'evening', 'late'], off: ['early', 'after', 'evening', 'late'], exam: ['early', 'after', 'evening', 'late'] },
    holidays: { '12/24': 'Christmas Eve', '12/25': 'Christmas', '12/31': "New Year's Eve" },
    breaks: [{ id: 'winter', name: 'Winter break', from: '12/21', to: '12/31' }],
    events: { '12/6': 'Regionals', '12/7': 'Regionals' },
    exams: [{ id: 'finals', days: ['12/15', '12/16', '12/17', '12/18', '12/19'] }],
    fullMoons: ['12/4'],
    weather: { '12/1': 'snow', '12/2': 'snow', '12/3': 'snow', '12/4': 'clear', '12/5': 'cloudy', '12/6': 'snow', '12/7': 'snow',
      '12/8': 'cloudy', '12/9': 'snow', '12/10': 'snow', '12/11': 'snow', '12/12': 'snow', '12/13': 'cloudy', '12/14': 'clear',
      '12/15': 'snow', '12/16': 'cloudy', '12/17': 'snow', '12/18': 'snow', '12/19': 'clear', '12/20': 'snow',
      '12/21': 'cloudy', '12/22': 'clear', '12/23': 'cloudy', '12/24': 'snow', '12/25': 'snow', '12/26': 'clear', '12/27': 'cloudy',
      '12/28': 'clear', '12/29': 'snow', '12/30': 'cloudy', '12/31': 'clear' },
    weatherLevels: { '12/1': 'heavy', '12/2': 'light', '12/3': 'light', '12/6': 'light', '12/7': 'light', '12/8': 'fog', '12/9': 'light',
      '12/10': 'light', '12/11': 'light', '12/12': 'light', '12/15': 'light', '12/17': 'light', '12/18': 'light', '12/20': 'heavy', '12/24': 'light', '12/25': 'light', '12/29': 'light' },
    spells: [{ name: 'Lake-effect snow', from: '12/1', to: '12/3' }, { name: 'Lake-effect snow', from: '12/9', to: '12/12' },
      { name: 'Lake-effect snow', from: '12/17', to: '12/18' }],
    frost: true,
    climate: { 12: { cloudy: 0.4, snow: 0.28, rain: 0.04 } },
    persist: 0.45, heavySnow: 0.3, fog: 0.1, fogMonths: [12]
  }
});
