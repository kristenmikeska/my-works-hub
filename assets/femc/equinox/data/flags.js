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
    'asks.solar.fathers', 'asks.solar.christmas', 'red',
    // Ranks 4-6: Haechan's ask (rank 4); Mrs. Oka's asks of Solar (ranks 4, 5, 6).
    'asks.haechan', 'asks.solar.plums', 'asks.solar.persimmons', 'asks.solar.spring'],
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
    'eqx-oka-revealed', 'eqx-koromaru-stood', 'eqx-theodore-dead',
    // Link ranks 1-6 (data/links/*.js; registered Nov 16 with ranks 4-6): every flag a link sets that wasn't listed. The ask
    // floors are eqx-floor-<link id> (rank 6).
    'eqx-aigis-arai', 'eqx-aigis-float', 'eqx-aigis-hyein', 'eqx-aigis-log', 'eqx-aigis-own-door', 'eqx-aigis-space',
    'eqx-aigis-useless', 'eqx-aigis-wrist', 'eqx-aki-door-come', 'eqx-aki-door-hand', 'eqx-aki-door-his', 'eqx-aki-lamp-kiss',
    'eqx-aki-letter-alone', 'eqx-aki-letter-hand', 'eqx-aki-letter-kept', 'eqx-aki-roof-dawn', 'eqx-aki-room-kiss',
    'eqx-aki-shallows-kiss', 'eqx-aki-strip', 'eqx-aki-woke', 'eqx-asked-aigis', 'eqx-asked-akihiko', 'eqx-asked-hanni',
    'eqx-chaewon-count', 'eqx-cherry-flour-tasted', 'eqx-cherry-headcount', 'eqx-cherry-key', 'eqx-cherry-mirror',
    'eqx-danielle-list', 'eqx-eliz-cup-up', 'eqx-eliz-door-shown', 'eqx-eliz-fault-holder', 'eqx-eliz-fault-next',
    'eqx-eliz-fault-thing', 'eqx-eliz-form', 'eqx-eliz-lantern', 'eqx-eliz-pages-open', 'eqx-eliz-sundays-warned',
    'eqx-eunchae-sang', 'eqx-fc-map', 'eqx-floor-aigis', 'eqx-floor-akihiko', 'eqx-floor-cherry', 'eqx-floor-haechan',
    'eqx-floor-hanni', 'eqx-floor-hyein', 'eqx-floor-jaehyun', 'eqx-floor-jihoon', 'eqx-floor-jungwon', 'eqx-floor-junpei',
    'eqx-floor-ken-koromaru', 'eqx-floor-minji', 'eqx-floor-mitsuru', 'eqx-floor-rio-saori', 'eqx-floor-shinjiro',
    'eqx-floor-yukari', 'eqx-floor-yunjin', 'eqx-hanni-cocoa', 'eqx-hanni-count-me', 'eqx-hanni-floor', 'eqx-hanni-girls-rota',
    'eqx-hanni-looked', 'eqx-hanni-more-nights', 'eqx-hanni-page-blank', 'eqx-hanni-page-laugh', 'eqx-hanni-page-looked',
    'eqx-hanni-said-name', 'eqx-hanni-slot', 'eqx-hanni-split', 'eqx-hanni-strip-date', 'eqx-hanni-strip-mine',
    'eqx-hanni-strip-more', 'eqx-hanni-two-bells', 'eqx-hc-gap-sang', 'eqx-hc-learn-voice', 'eqx-hc-never-say', 'eqx-hc-plush',
    'eqx-hc-roof-kiss', 'eqx-hc-stayed-night', 'eqx-hc-take-erased', 'eqx-hc-take-kept', 'eqx-hc-true-tape',
    'eqx-hyein-dress-keep', 'eqx-hyein-dress-make', 'eqx-hyein-hanni-cardigan', 'eqx-hyein-hum-asked', 'eqx-hyein-let-ring',
    'eqx-hyein-matching', 'eqx-hyein-phone-kept', 'eqx-hyein-picked-up', 'eqx-hyein-slept-over', 'eqx-hyein-two-person',
    'eqx-hyein-voicemail', 'eqx-hyein-yukata-hers', 'eqx-hyein-yukata-navy', 'eqx-hyein-yukata-red', 'eqx-jaehyun-answered',
    'eqx-jaehyun-dad-walked', 'eqx-jaehyun-knock', 'eqx-jaehyun-left-them', 'eqx-jaehyun-notebook', 'eqx-jaehyun-thread-kept',
    'eqx-jaehyun-time-solar', 'eqx-jihoon-booth-kiss', 'eqx-jihoon-dark-kiss', 'eqx-jihoon-fold-opened', 'eqx-jihoon-plush',
    'eqx-jihoon-room', 'eqx-jihoon-vest', 'eqx-jihoon-watched', 'eqx-js-house', 'eqx-junpei-dad', 'eqx-junpei-dad-dorm',
    'eqx-junpei-dad-his', 'eqx-junpei-dad-oka', 'eqx-junpei-latch', 'eqx-junpei-told-garden', 'eqx-junpei-window-mark',
    'eqx-jw-both-names', 'eqx-jw-cake-taken', 'eqx-jw-council-kiss', 'eqx-jw-floor-behind', 'eqx-jw-floor-together',
    'eqx-jw-floor-written', 'eqx-jw-form-blank', 'eqx-jw-form-both', 'eqx-jw-form-kept', 'eqx-jw-room-four', 'eqx-jw-sorry',
    'eqx-jw-summer-kiss', 'eqx-jw-summer-open', 'eqx-jw-summer-walk', 'eqx-jw-tested', 'eqx-jw-third-list', 'eqx-kazuha-rice',
    'eqx-ken-asks-shinji', 'eqx-ken-come', 'eqx-ken-for-now', 'eqx-ken-hospital', 'eqx-mark-coat', 'eqx-minji-breakfast',
    'eqx-minji-camera-back', 'eqx-minji-filmed', 'eqx-minji-held-it', 'eqx-minji-honest', 'eqx-minji-kiss',
    'eqx-minji-knob-seen', 'eqx-minji-nap', 'eqx-minji-rolling', 'eqx-minji-slipped', 'eqx-minji-stayed', 'eqx-minji-street',
    'eqx-minji-unsaid', 'eqx-minji-walked', 'eqx-mitsuru-bag', 'eqx-mitsuru-key', 'eqx-mitsuru-pending', 'eqx-mitsuru-watch',
    'eqx-oka-night-mine', 'eqx-oka-night-stayed', 'eqx-oka-persimmon-mine', 'eqx-oka-persimmon-yes', 'eqx-oka-plums-mine',
    'eqx-oka-plums-yes', 'eqx-oka-spring-mine', 'eqx-oka-spring-yes', 'eqx-oka-told-shinji', 'eqx-rs-book',
    'eqx-rs-card-surnames', 'eqx-rs-rally', 'eqx-rs-snow', 'eqx-sakura-sentence', 'eqx-shinji-awning-kiss', 'eqx-shinji-egg',
    'eqx-shinji-iron-pan', 'eqx-shinji-kuroda-warned', 'eqx-shinji-roof-dawn', 'eqx-shinji-stayed-night', 'eqx-trio-phone',
    'eqx-yukari-arrow', 'eqx-yukari-frame', 'eqx-yukari-mom-home', 'eqx-yukari-mom-yes', 'eqx-yukari-turned',
    'eqx-yunjin-gate', 'eqx-yunjin-left', 'eqx-yunjin-light', 'eqx-yunjin-pulled', 'eqx-yunjin-swim', 'eqx-yunjin-table-held',
    'eqx-yunjin-table-kept', 'eqx-yunjin-table-mine', 'eqx-yunjin-ticket-held', 'eqx-yunjin-ticket-kept',
    'eqx-yunjin-ticket-torn'],
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
