/* Persona 3: Equinox · hidden bookkeeping (the same shape as assets/femc/game/data/flags.js; core.js reads it the same way).
   Saved with the game, never shown. What they mean is in the private plan, not here.
   - counters: numbers scene choices add to with { tally: { name: n } }.
   - choices: one-off answers recorded with { tally: { name: 'value' } }.
   - hooks / cosmetic: flags reserved for later scenes (set with { flag: 'id' }). Act I (data/story-act1.js), Act II (story-act2.js), Act III
     (story-act3.js) and Act IV (story-act4.js) set the ones listed; nothing reads them yet (Act III reads a few of its own and the romance ranks' kiss flags).
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
  choices: ['asks.solar.supper', 'asks.solar.smile', 'asks.solar.tide', 'asks.solar.vp',
    // Romance rank 3s (data/links/<id>.js): each link's own ask, 'yes' / 'no' / 'choose'.
    'asks.akihiko', 'asks.shinjiro', 'asks.jungwon', 'asks.jihoon', 'asks.minji',
    // Act III (data/story-act3.js): Solar's own asks on the trip and for the moon.
    'asks.solar.ferry', 'asks.solar.moon',
    // Non-romance rank 3s (links/junpei, ken-koromaru, yunjin, jaehyun, cherry, rio-saori): each link's own ask.
    'asks.junpei', 'asks.ken-koromaru', 'asks.yunjin', 'asks.jaehyun', 'asks.cherry', 'asks.rio-saori',
    // Rank 3s (links/mrsoka, hanni, hyein, elizabeth, mitsuru, yukari, aigis): Mrs. Oka's is Solar's own ask (asks.solar.*).
    'asks.solar.night', 'asks.hanni', 'asks.hyein', 'asks.elizabeth', 'asks.mitsuru', 'asks.yukari', 'asks.aigis',
    // Act IV (data/story-act4.js): Solar's own asks (the fathers, 10/22; Christmas, 12/18) and the 12/21 answer ('R' / 'S' / 'H' / 'stay' / 'equinox' / 'bad').
    'asks.solar.fathers', 'asks.solar.christmas', 'red'],
  hooks: ['eqx-supper-stayed', 'eqx-supper-mine', 'eqx-asked-hyein', 'eqx-choose-hyein', 'eqx-hill1-smiled', 'eqx-hill1-mine',
    'eqx-door-R1', 'eqx-home-R1', 'eqx-away-R1', 'eqx-watch-R1',
    // Act II (data/story-act2.js): the owed Act I doors (S1, H1), Act II's doors (S2, R2, H2), the hills' asks, the ghost
    // story heard from three people, the household ask, arrivals.
    'eqx-door-S1', 'eqx-home-S1', 'eqx-away-S1', 'eqx-watch-S1', 'eqx-door-H1', 'eqx-home-H1', 'eqx-away-H1', 'eqx-watch-H1',
    'eqx-door-S2', 'eqx-home-S2', 'eqx-away-S2', 'eqx-watch-S2', 'eqx-door-R2', 'eqx-home-R2', 'eqx-away-R2', 'eqx-watch-R2',
    'eqx-door-H2', 'eqx-home-H2', 'eqx-away-H2', 'eqx-watch-H2',
    'eqx-hill2-sat', 'eqx-hill2-mine', 'eqx-hill3-signed', 'eqx-hill3-mine', 'eqx-asked-house', 'eqx-choose-house',
    'eqx-ghost-junpei', 'eqx-ghost-minji', 'eqx-ghost-ken', 'eqx-bridge-name', 'eqx-shinjiro-back', 'eqx-lsrfm-here',
    // Romance rank 3s.
    'eqx-asked-akihiko', 'eqx-hc-stayed-night',
    // Act III (data/story-act3.js).
    'eqx-aigis-exception', 'eqx-jaehyun-told', 'eqx-asked-jaehyun', 'eqx-choose-jaehyun', 'eqx-ferry-stayed', 'eqx-ferry-mine',
    'eqx-hanne-told', 'eqx-parents-here', 'eqx-moon-stayed', 'eqx-moon-mine', 'eqx-aigis-forty', 'eqx-mothers-taken', 'eqx-saw-face',
    'eqx-face-told', 'eqx-face-kept', 'eqx-hanne-hand',
    // Rank 3s (Mrs. Oka, Hanni).
    'eqx-oka-night-stayed', 'eqx-oka-night-mine', 'eqx-asked-hanni',
    // Act IV (data/story-act4.js): route deaths (dead.<id>) and the closed true route; the doors R3 / S3 / H3; the 12/21 answer and
    // the eligibility it computes; Solar's own asks; story beats later scenes may read.
    'dead.shinjiro', 'dead.aigis', 'eqx-true-closed', 'eqx-shinji-falls', 'eqx-shinji-lived', 'eqx-water-door', 'eqx-aigis-lived', 'eqx-aigis-hand',
    'eqx-door-R3', 'eqx-home-R3', 'eqx-away-R3', 'eqx-watch-R3', 'eqx-door-S3', 'eqx-home-S3', 'eqx-away-S3', 'eqx-watch-S3',
    'eqx-door-H3', 'eqx-home-H3', 'eqx-away-H3', 'eqx-watch-H3',
    'eqx-asked-fathers', 'eqx-choose-fathers', 'eqx-xmas-oka', 'eqx-xmas-mine',
    'eqx-red-anchor-R', 'eqx-red-anchor-S', 'eqx-red-anchor-H', 'eqx-red-sees', 'eqx-red-open-R', 'eqx-red-open-S', 'eqx-red-open-H', 'eqx-red-open-E',
    'eqx-red-R', 'eqx-red-S', 'eqx-red-H', 'eqx-red-stay', 'eqx-red-equinox', 'eqx-red-bad', 'eqx-red-answered',
    'eqx-hanne-fingers', 'eqx-hanne-promised', 'eqx-hanne-reported', 'eqx-aki-word', 'eqx-lease-hand', 'eqx-fathers-down', 'eqx-fathers-moved',
    'eqx-mothers-back', 'eqx-eliz-invited', 'eqx-eliz-confessed', 'eqx-edogawa-warned', 'eqx-edogawa-dead', 'eqx-girls-left',
    'eqx-oka-revealed', 'eqx-koromaru-eye', 'eqx-theodore-dead'],
  cosmetic: ['eqx-flour-wiped', 'eqx-flour-shown', 'eqx-gw-ate', 'eqx-gw-left', 'eqx-gw-dog', 'eqx-tale-tiger',
    'eqx-shin-tin', 'eqx-mark-fifth', 'eqx-wish-home', 'eqx-wish-here', 'eqx-wish-blank', 'eqx-jihoon-roof',
    // Romance rank 3s.
    'eqx-hc-note-kept', 'eqx-aki-gate-kiss', 'eqx-shinji-pan', 'eqx-shinji-sink-kiss', 'eqx-jw-locked-door', 'eqx-jihoon-canal-kiss',
    'eqx-minji-on-tape', 'eqx-minji-turned',
    // Act III.
    'eqx-danced-left', 'eqx-wake-box', 'eqx-wheel-jungwon', 'eqx-fireworks-haechan', 'eqx-fireworks-jungwon', 'eqx-fireworks-jihoon',
    'eqx-fireworks-akihiko', 'eqx-fireworks-minji', 'eqx-fireworks-shinjiro', 'eqx-fireworks-girls', 'eqx-tin-parents', 'eqx-box-empty',
    'eqx-songpyeon-ate',
    // Non-romance rank 3s.
    'eqx-yunjin-dark',
    // Rank 3s (Mrs. Oka, Hanni).
    'eqx-oka-ate-own', 'eqx-hanni-slept',
    // Act IV.
    'eqx-looked-kitchen', 'eqx-culture-stage', 'eqx-hc-what-us', 'eqx-hc-what-lean', 'eqx-hc-what-receipts'],
  endingName: () => 'here'
};
