/* The Stay epilogue's calendar (FEMC-EPILOGUE-PLAN.md 2.5 and section 6; epilogue batch 8, 2026-10-28): the reverse epilogue,
   in Iwatodai. Wednesday 3/24/2010 to Tuesday 4/6/2010, two weeks of spring break; the act's last night is one year to the
   night from her first Dark Hour. Loaded on demand by epilogue.js (never at the main game's start-up). Same shape as
   data/epi/runners/calendar.js; what's left out comes from epilogue.js CAL_BASE.
   - Every day is spring break (`breaks`), so every day is a day off: Morning, Daytime, Evening, Late Night.
   - The full moon of 3/30 (the real one) falls in the act.
   - Weather: a Port Island spring, mostly fair; the act's last day clear. Since Nov 5 2026 (the days pass) every day is fixed
     to its scenes (no rain: see the note on `weather`). */
(window.FEMC_EPI_WORLDS ||= {}).stay = Object.assign(window.FEMC_EPI_WORLDS.stay || {}, {
  calendar: {
    year: 2010, start: '3/24', firstFree: '3/24', end: '4/6', weekend: [0, 6],
    slots: [
      { id: 'early', name: 'Morning' },
      { id: 'after', name: 'Daytime', offName: 'Daytime' },
      { id: 'evening', name: 'Evening' },
      { id: 'late', name: 'Late Night' }
    ],
    daySlots: { school: ['early', 'after', 'evening', 'late'], off: ['early', 'after', 'evening', 'late'] },
    holidays: {},
    breaks: [{ from: '3/24', to: '4/6', name: 'Spring Break' }],
    events: { '3/27': 'Cherry blossoms', '4/6': 'The last day of spring break' },
    fullMoons: ['3/30'],
    // The days pass (Nov 5 2026): every day fixed to what the scenes say. Fair and dry all fortnight, because most of the act's
    // outdoor hangouts (the river, the bridge ride, the roof, the seaside, the front step) can fall on any day of their window;
    // the clouded days are the indoor ones and Hagakure's Monday.
    weather: { '3/24': 'clear', '3/25': 'cloudy', '3/26': 'clear', '3/27': 'clear', '3/28': 'clear', '3/29': 'cloudy', '3/30': 'clear',
      '3/31': 'clear', '4/1': 'clear', '4/2': 'cloudy', '4/3': 'clear', '4/4': 'clear', '4/5': 'cloudy', '4/6': 'clear' },
    // Levels: overcast on the clouded days; the full moon's night clear (3/30, the moon "huge and pale" in the lounge window).
    weatherLevels: { '3/25': 'overcast', '3/29': 'overcast', '3/30': 'clear', '4/2': 'overcast', '4/5': 'overcast' },
    climate: { 3: { cloudy: 0.3, rain: 0.15 }, 4: { cloudy: 0.3, rain: 0.15 } },
    persist: 0.35, fog: 0.15, fogMonths: [3]
  }
});
