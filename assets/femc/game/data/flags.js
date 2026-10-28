/* Hidden bookkeeping for femc-game.html. These numbers are saved with the game and never shown on screen.
   What they mean and how they're used is in the plot doc (§8, §10, §12), not here.
   - worlds: three tallies keyed R / S / H; a memory fragment adds to its world's tally (by id prefix).
   - doors: scenes due at these per-world fragment counts. Their scenes go in `doorScenes` when written; until then the
     game only records that one is due (save.route.doorsDue).
   - counters: plain numbers scene choices can add to with { tally: { name: n } }.
   - choices: one-off answers recorded with { tally: { name: 'value' } }.
   - hooks: flags reserved for later systems (set with { flag: { id: true } }, { flag: 'id' } or { flag: ['a', 'b'] }).
     Story events set them the same way scenes do, e.g. the 10/4 event's { flag: { 'shinjiro-coma': true } }.
     'wren-struck-first' can also come back from the battle game (the finale's result.flags).
   - choices.xmas: the Christmas Eve pick (12/24 evening, core.js christmasOptions): a link id or 'alone'. Also sets the flag
     xmas-<id>. It only picks the ending's variant inside whatever route the solstice locked; it never sets or locks a route. */
window.FEMC_GAME_FLAGS = {
  worlds: {
    R: { prefix: 'runners-', charm: 'bell' },
    S: { prefix: 'strangers-', charm: 'jade' },
    H: { prefix: 'hoax-', charm: 'star' }
  },
  // Ten cards per world (Kat, 2026-10-27): the doors stay at 3 / 6 / 9; each world's tenth is a late memory that lands after
  // its last door. Every card is scene-awarded (battle/data.js NO_DROP), so a door can't open before its scenes.
  fragmentsPerWorld: 10,
  doors: [3, 6, 9],
  doorScenes: {},                      // filled by story-act5.js; core.js plays each due one late at night (one a night)
  counters: ['here', 'home.R', 'home.S', 'home.H', 'lean.R', 'lean.S', 'lean.H', 'haechan.R', 'haechan.S', 'jungwon.H', 'jungwon.S'],
  choices: ['solstice', 'xmas', 'crossroad1', 'crossroad2', 'crossroad3'],
  hooks: ['bad-ending', 'true-path', 'wren-struck-first', 'shinjiro-coma'],
  // Cosmetic flags from the prologue (callbacks later).
  cosmetic: ['pro-hair-up', 'pro-told-porter']
};
