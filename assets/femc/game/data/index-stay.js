/* Persona 3: Solstice · the Index: spring in Iwatodai (the Stay epilogue, world 'stay'; the tab reads "Spring"). Format and
   unlock rules: assets/femc/game/index.js header. Listed only once she's stayed. The people and places are the year's (their
   year entries stay under Iwatodai); these are how they look in spring break, spoiler-safe as of each unlock. Sources:
   data/epi/stay/world.js, people.js, people-days.js. */
(() => {
  const W = 'stay', A = (window.FEMC_INDEX ||= []);
  const add = (kind, id, name, short, text, unlock, extra) => A.push(Object.assign({ id: `${W}-${id}`, kind, world: W, name, short, text, unlock }, extra || {}));
  const P = (id, name, short, text, unlock, face) => add('person', id, name, short, text, unlock || [`heard:${id}`, `met:${id}`], { face: face === undefined ? id : face });
  const L = (id, name, short, text, unlock, bg) => add('place', id, name, short, text, unlock, bg ? { bg } : null);
  const T = (id, name, short, text, unlock, bg) => add('term', id, name, short, text, unlock, bg ? { bg } : null);

  /* ── People ── */
  P('akihiko', 'Akihiko Sanada', 'Spring break', 'Graduated, and still running the riverside every morning like the year might need him again. He keeps an eye on the dorm, and on her.');
  P('yukari', 'Yukari Takeba', 'Spring break', 'About to be a third-year, and making plans at the mall fountain as if spring were a promise she intends to collect on.');
  P('junpei', 'Junpei Iori', 'Spring break', 'The lounge couch, Wild-Duck runs, and the laundry room as a place to talk about things he won\'t say in the lounge.');
  P('mitsuru', 'Mitsuru Kirijo', 'Spring break', 'Graduated, with more on her desk than ever, and still the one who takes the Command Room\'s last look at night.');
  P('fuuka', 'Fuuka Yamagishi', 'Spring break', 'Still cooking for everyone, and still listening for things nobody else can hear.');
  P('ken', 'Ken Amada', 'Spring break', 'A year older and very serious about it. Shrine runs and riverside walks with Koromaru.');
  P('aigis', 'Aigis', 'Spring break', 'Learning spring the way she learned everything else this year: by watching it very closely.');
  P('shinjiro', 'Shinjiro Aragaki', 'Spring break', 'Some afternoons belong to the third floor of Tatsumi Memorial. He\'d rather you didn\'t make a fuss about it.');
  P('koromaru', 'Koromaru', 'Spring break', 'Keeper of the dorm\'s front step, sniffing at the new season with deep suspicion.');

  /* ── Places ── */
  L('room', 'Solar\'s room', 'Iwatodai Dorm', 'Hers now, really hers. The window\'s open for the first time since autumn.', ['at:Iwatodai Dorm · Solar\'s Room'], 'solar-dormroom-day');
  L('lounge', 'The lounge', 'Iwatodai Dorm', 'The couch, the TV, and fewer bags by the door than there used to be. The dorm is quieter in spring.', ['at:Iwatodai Dorm · Lounge'], 'iwatodaidorm-livingroom');
  L('ward', 'The third floor', 'Tatsumi Memorial Hospital', 'A ward with a window onto the courtyard, a chair pulled up close, and visiting hours everyone in the dorm knows by heart.', ['at:Tatsumi Memorial Hospital'], 'hospital-room');
  L('riverside', 'The riverside', 'Iwatodai', 'Cherry trees along the water, a running path, and benches for not saying much.', ['at:Iwatodai · Riverside'], 'park-2');
  L('seaside', 'Seaside Park in bloom', 'Port Island', 'The park by the bay under the cherry blossoms, blue tarps and bento boxes everywhere.', ['at:Port Island · Seaside Park'], 'epi-st-seaside-hanami');
  L('shrine', 'Naganaki Shrine in spring', 'Iwatodai', 'The first petals on the steps, an empty playground, an old woman sweeping.', ['at:Naganaki Shrine', 'did:epi-st-shrine'], 'naganaki-shrine-spring');
  L('platform', 'The platform', 'Iwatodai Station', 'The station she knows best, its last bench, and the trains still coming and going.', ['at:Iwatodai Station'], 'station-platform-day');

  /* ── Terms ── */
  T('springbreak', 'Spring break', 'Late March', 'The weeks between one school year and the next. Some people graduate, some move on, and the dorm learns what it sounds like with fewer people in it.', 'always', 'iwatodaidorm-livingroom');
  T('hanami', 'Hanami', 'Flower viewing', 'Picnics under the cherry blossoms, the old Japanese way of saying spring has come. Everyone goes; nobody brings enough food.', ['at:Port Island · Seaside Park', 'date:3/28']);
  T('signals', 'Signals from home', 'Something coming through', 'A thread from Syracuse lighting up, a call from a house by the sea, a Hanlim group chat renaming itself. The other worlds haven\'t stopped reaching for her.', 'glitch');
})();
