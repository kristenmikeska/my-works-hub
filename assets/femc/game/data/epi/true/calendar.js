/* The true ending's coda (FEMC-EPILOGUE-PLAN.md 2.5 and section 6; epilogue batch 8, 2026-10-28). Three small days, one per
   world, each ending on its holding-on moment; then the Equinox card. Built as the three-part coda: a braid (three short
   calendars alternating by day) is left as an optional later batch.
   One calendar holds all three: its own days are 3/8-3/10/2010 (the morning S.E.E.S. woke having forgotten, and the two after;
   every rule reads these), and each day wears its world's date and place for the date card, the HUD and the save screen
   (`shown`, core.js shownOf). Two slots a day, Day and Night, both always a story event (story.js), so no Go Out or late
   screen ever shows. Weather per day: Syracuse's first snow, a gray Incheon dawn, Hanlim in January snow. */
(window.FEMC_EPI_WORLDS ||= {}).true = Object.assign(window.FEMC_EPI_WORLDS.true || {}, {
  calendar: {
    year: 2010, start: '3/8', firstFree: '3/8', end: '3/10', weekend: [],
    slots: [
      { id: 'early', name: 'Day', offName: 'Day' },
      { id: 'late', name: 'Night' }
    ],
    daySlots: { school: ['early', 'late'], off: ['early', 'late'] },
    holidays: {},
    events: { '3/8': 'Syracuse', '3/9': 'Incheon', '3/10': 'Hanlim' },
    shown: {
      '3/8': { date: '2025-12-20', place: 'Syracuse' },
      '3/9': { date: '2013-03-16', place: 'Incheon' },
      '3/10': { date: '2024-01-12', place: 'Hanlim' }
    },
    fullMoons: [],
    weather: { '3/8': 'snow', '3/9': 'cloudy', '3/10': 'snow' },
    weatherLevels: { '3/8': 'light', '3/9': 'overcast', '3/10': 'light' },
    climate: { 3: { cloudy: 0.5 } }
  }
});
