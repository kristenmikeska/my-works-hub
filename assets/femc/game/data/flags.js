/* Hidden bookkeeping for femc-game.html. These numbers are saved with the game and never shown on screen.
   What they mean and how they're used is in the plot doc (§8, §10, §12), not here.
   - worlds: three tallies keyed R / S / H; a memory fragment adds to its world's tally (by id prefix).
   - doors: scenes due at these per-world fragment counts. Their scenes go in `doorScenes` when written; until then the
     game only records that one is due (save.route.doorsDue).
   - counters: plain numbers scene choices can add to with { tally: { name: n } }.
   - choices: one-off answers recorded with { tally: { name: 'value' } }.
   - hooks: flags reserved for later systems (set with { flag: { id: true } }). */
window.FEMC_GAME_FLAGS = {
  worlds: {
    R: { prefix: 'runners-', charm: 'bell' },
    S: { prefix: 'strangers-', charm: 'jade' },
    H: { prefix: 'hoax-', charm: 'star' }
  },
  fragmentsPerWorld: 9,
  doors: [3, 6, 9],
  doorScenes: {},                      // e.g. 'R3': { place, scene } (TODO, written later)
  counters: ['here', 'home.R', 'home.S', 'home.H', 'lean.R', 'lean.S', 'lean.H', 'haechan.R', 'haechan.S', 'jungwon.H', 'jungwon.S'],
  choices: ['solstice', 'xmas', 'crossroad1', 'crossroad2', 'crossroad3'],
  hooks: ['bad-ending', 'true-path', 'wren-struck-first'],
  // Cosmetic flags from the prologue (callbacks later).
  cosmetic: ['pro-hair-up', 'pro-told-porter']
};
