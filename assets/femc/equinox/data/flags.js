/* Persona 3: Equinox · hidden bookkeeping (the same shape as assets/femc/game/data/flags.js; core.js reads it the same way).
   Saved with the game, never shown. What they mean is in the private plan, not here.
   - counters: numbers scene choices add to with { tally: { name: n } }.
   - choices: one-off answers recorded with { tally: { name: 'value' } }.
   - hooks / cosmetic: flags reserved for later scenes (set with { flag: 'id' }). Act I (data/story-act1.js) sets the ones
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
  choices: ['asks.solar.supper', 'asks.solar.smile'],
  hooks: ['eqx-supper-stayed', 'eqx-supper-mine', 'eqx-asked-hyein', 'eqx-choose-hyein', 'eqx-hill1-smiled', 'eqx-hill1-mine',
    'eqx-door-R1', 'eqx-home-R1', 'eqx-away-R1', 'eqx-watch-R1'],
  cosmetic: ['eqx-flour-wiped', 'eqx-flour-shown', 'eqx-gw-ate', 'eqx-gw-left', 'eqx-gw-dog', 'eqx-tale-tiger'],
  endingName: () => 'here'
};
