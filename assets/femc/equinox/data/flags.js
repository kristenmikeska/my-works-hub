/* Persona 3: Equinox · hidden bookkeeping (the same shape as assets/femc/game/data/flags.js; core.js reads it the same way).
   Saved with the game, never shown. What they mean is in the private plan, not here.
   - counters: numbers scene choices add to with { tally: { name: n } }.
   - choices: one-off answers recorded with { tally: { name: 'value' } }.
   - hooks / cosmetic: flags reserved for later scenes (set with { flag: 'id' }). Act I (data/story-act1.js) and Act II (story-act2.js) set the ones
     listed; nothing reads them yet.
   endingName(flags): the name written into Equinox's clears list ('kg-femc-equinox-clears') at the end; core.js calls it in
   place of Solstice's route-* names. */
window.FEMC_GAME_FLAGS = {
  worlds: {
    R: { prefix: 'runners-', charm: 'bell' },
    S: { prefix: 'strangers-', charm: 'jade' },
    H: { prefix: 'hoax-', charm: 'star' }
  },
  fragmentsPerWorld: 10,
  doors: [],
  doorScenes: {},
  counters: ['cakes', 'choose', 'asked', 'doors.R', 'doors.S', 'doors.H'],
  choices: ['asks.solar.supper', 'asks.solar.smile', 'asks.solar.tide', 'asks.solar.vp'],
  hooks: ['eqx-supper-stayed', 'eqx-supper-mine', 'eqx-asked-hyein', 'eqx-choose-hyein', 'eqx-hill1-smiled', 'eqx-hill1-mine',
    'eqx-door-R1', 'eqx-home-R1', 'eqx-away-R1', 'eqx-watch-R1',
    // Act II (data/story-act2.js): the owed Act I doors (S1, H1), Act II's doors (S2, R2, H2), the hills' asks, the ghost
    // story heard from three people, the household ask, arrivals.
    'eqx-door-S1', 'eqx-home-S1', 'eqx-away-S1', 'eqx-watch-S1', 'eqx-door-H1', 'eqx-home-H1', 'eqx-away-H1', 'eqx-watch-H1',
    'eqx-door-S2', 'eqx-home-S2', 'eqx-away-S2', 'eqx-watch-S2', 'eqx-door-R2', 'eqx-home-R2', 'eqx-away-R2', 'eqx-watch-R2',
    'eqx-door-H2', 'eqx-home-H2', 'eqx-away-H2', 'eqx-watch-H2',
    'eqx-hill2-sat', 'eqx-hill2-mine', 'eqx-hill3-signed', 'eqx-hill3-mine', 'eqx-asked-house', 'eqx-choose-house',
    'eqx-ghost-junpei', 'eqx-ghost-minji', 'eqx-ghost-ken', 'eqx-bridge-name', 'eqx-shinjiro-back', 'eqx-lsrfm-here'],
  cosmetic: ['eqx-flour-wiped', 'eqx-flour-shown', 'eqx-gw-ate', 'eqx-gw-left', 'eqx-gw-dog', 'eqx-tale-tiger',
    'eqx-shin-tin', 'eqx-mark-fifth', 'eqx-wish-home', 'eqx-wish-here', 'eqx-wish-blank', 'eqx-jihoon-roof'],
  endingName: () => 'here'
};
