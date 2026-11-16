/* Persona 3: Equinox · the Well, the battle side's dungeon (EQUINOX-TECH.md "Battle side 1: party and the Well").
   Loaded only inside Equinox: femc-battle.html writes it in after climb.js when its parent page is Equinox, and
   femc-equinox-game.html loads it after tartarus.js (the menu's Compendium knows the same Shadows). It does nothing unless
   FEMC_GAME_CONFIG.id is 'equinox' (this page's or, in the battle frame, its parent's), so Solstice and practice never change.
   What it does, in place (the same arrays data.js returned, so every reader of D.blocks / D.floors / D.ops sees the Well):
   - D.blocks: the Well's eight blocks instead of Tartarus's. Same fields as data.js blocks (floors, landings, guardian, pool,
     strong, rooms, lvl, op, bg, color, tint); no `secret` blocks, no superbosses, no New Game+ blocks.
   - D.floors: rebuilt with data.js's own builder rules. Floors go DOWN: gameFloor 1 … 232 is depth, label 'B<n>F'. The calendar's
     floorCaps (equinox/data/calendar.js) open a block when the cap reaches its deepest floor; a block's last floor waits for its
     full moon (`op`), as in Tartarus. No floor is `last` (that's Tartarus's road to Monad).
   - D.ops: the Well's full moons put in front of Solstice's (the battle save keeps a cleared op only when D.ops knows it, and the
     barrier at the bottom of a block reads its op). Solstice's stay behind them for anything that looks one up by id.
   - Shadows: guardians cloned from Tartarus's (new names, new levels), and the Worn: existing Shadows under new names and notes
     (their own art until the Well's art exists). Pool entries without a level are levelled to the block (lvl − 3, rising
     with depth); strong groups at lvl + 2.
   - D.nav: Fuuka's lines for the blocks and the stairs, D.events.lines: the Well's event-room chatter.
   - D.dungeon: names battle.js uses on the hub, the barrier and the stairs (unset there = Tartarus). */
(function () {
  const W = window;
  let cfg = W.FEMC_GAME_CONFIG;
  try { if (!cfg && W.parent !== W) cfg = W.parent.FEMC_GAME_CONFIG; } catch (e) {}
  const D = W.FEMC_BATTLE_DATA;
  if (!D || !cfg || cfg.id !== 'equinox') return;
  const BG = 'assets/femc/bg/', E = D.enemies, P = D.progression;

  /* ── Shadows ── */
  // The Worn: an existing Shadow's stats, skills and art under a Well name (base level kept; pools level them).
  const worn = (base, name, note) => Object.assign({}, E[base], { name, note, story: false, boss: false });
  Object.assign(E, {
    wn_mask: worn('maya', 'Worn Mask', 'A mask with nobody behind it, painted with a smile that isn’t its own. It tilts its head before it moves.'),
    wn_glove: worn('hand', 'Worn Glove', 'An empty glove walking on its fingertips. It knocks twice on the floor before it strikes.'),
    wn_audience: worn('twins', 'Worn Audience', 'Two seats’ worth of somebody, clapping on the wrong beat. It wants you to smile for it.'),
    wn_net: worn('pesce', 'Worn Net', 'A fishing net that kept the shape of what it held. It drips, and it doesn’t let go.'),
    wn_uniform: worn('king', 'Worn Uniform', 'A school blazer standing up straight with nobody in it. The name tag has been scratched blank.'),
    wn_pilgrim: worn('giant', 'Worn Pilgrim', 'A traveller’s coat walking a road it can’t remember the end of. Its pockets are full of something heavy.'),
    wn_fruit: worn('pot', 'Worn Windfall', 'Something soft that fell from very high up. It hums to itself, a tune nobody taught it.'),
    wn_harvester: worn('tower', 'Worn Harvester', 'A tall, patient figure in a field of red. It never hurries. It never has to.')
  });
  // Block guardians: tartarus.js's guard() rules (a third bigger, the red glow, a Guardian Crest), from an existing Shadow.
  const S = (lvl, k = {}) => ({ lvl, hp: Math.round((26 + lvl * 13.5) * (k.hp || 1)), st: +(4 + lvl * 0.95 * (k.st || 1)).toFixed(1), ma: +(4 + lvl * 0.95 * (k.ma || 1)).toFixed(1),
    en: +(3 + lvl * 0.7 * (k.en || 1)).toFixed(1), ag: +(4 + lvl * 0.8 * (k.ag || 1)).toFixed(1), lu: +(3 + lvl * 0.5 * (k.lu || 1)).toFixed(1) });
  const guard = (base, lvl, name, note) => {
    const b = E[base];
    return Object.assign(S(lvl, { hp: 3.3, st: 1.12, ma: 1.12, en: 1.2, ag: 1.05 }), {
      name, arcana: b.arcana, aff: Object.assign({}, b.aff), skills: b.skills.slice(), ai: b.ai === 'coward' ? 'weakest' : b.ai, img: b.img, svg: b.svg, idle: b.idle, h: Math.round((b.h || 220) * 1.3),
      exp: Math.round(P.expFor(lvl) * 4), yen: P.yenFor(lvl) * 6, drop: 'guardian_crest', dropChance: 1, cls: 'guardian', guardian: true,
      ailImmune: ['charm', 'fear', 'bind'], alloutResist: 0.35, note });
  };
  Object.assign(E, {
    wg_latch: guard('table', 14, 'The Latch', 'A door’s latch grown into a warden. It keeps the stairs shut, and knocks on them from the inside.'),
    wg_front_row: guard('magus', 18, 'The Front Row', 'The best seat in the house, and whoever sits in it. It applauds when you get hurt.'),
    wg_slack_water: guard('pesce', 23, 'The Slack Water', 'The moment the tide stops, standing in one place. Nothing it holds goes in or out.'),
    wg_roll_call: guard('balance', 28, 'The Roll Call', 'A register that reads every name but yours, and waits for you to answer anyway.'),
    wg_last_step: guard('giant', 37, 'The Last Step', 'The final stair before home, grown tall enough to block the road.'),
    wg_old_root: guard('castle', 43, 'The Old Root', 'A root that came down through the dark looking for water and found you instead.'),
    wg_scarecrow: guard('seeker', 50, 'The Scarecrow', 'It stands over the rows with its arms out. Nothing lands in this field, and nothing leaves it.')
  });

  /* ── The blocks (deepest floor = the block's cap; the calendar opens them by date) ── */
  // Main floors every `step` floors from `a` to `b`; a landing (a short floor) halfway along every gap of 3 or more.
  const span = (a, b, step) => {
    const floors = []; for (let n = a; n < b; n += step) floors.push(n); floors.push(b);
    const landings = []; for (let i = 0; i < floors.length - 1; i++) { const g = floors[i + 1] - floors[i]; if (g >= 3) landings.push(floors[i] + Math.floor(g / 2)); }
    return { floors, landings };
  };
  const at = (fl, p) => fl.floors[Math.min(fl.floors.length - 2, Math.round((fl.floors.length - 1) * p))]; // a main floor, never the block's last
  const block = (id, name, n, a, b, step, o) => { const fl = span(a, b, step); return Object.assign({ id, name, bg: `${BG}eq-well-${n}.webp`, floors: fl.floors, landings: fl.landings },
    o, o.guardian ? { guardian: { at: [at(fl, 0.65)], kind: o.guardian } } : {}); };
  const well = [
    block('mouth', 'The Mouth', 1, 1, 5, 2, { color: '#ff9a8a', tint: '#5a1414', op: 'eqx-knock', lvl: 9,
      rooms: { chest: 1.3, event: 1.3, rest: 1.3, trap: 0.5, vault: 0.5 },
      pool: [['wn_mask', 'maya', 'maya'], ['hand', 'wn_mask'], ['slime', 'wn_glove'], ['wn_glove', 'beetle', 'hand'], ['sx_coffin_moth', 'wn_mask']],
      strong: [['table', 'wn_glove'], ['sx_twelve', 'wn_mask', 'wn_mask']] }),
    block('doorstep', 'The Doorstep', 2, 6, 25, 4, { color: '#ff6b6b', tint: '#6b1010', op: 'eqx-first-hill', lvl: 11, guardian: 'wg_latch',
      rooms: { event: 1.4, chest: 1.2, puzzle: 1.2, rest: 1.1, trap: 0.8 },
      pool: [['wn_glove', 'hand'], ['wn_mask', 'table'], ['sx_hall_monitor', 'wn_glove'], ['snake', 'beetle', 'wn_mask'], ['sx_twelve', 'wn_glove', 'hand'], ['cupid', 'wn_mask'], ['table', 'wn_glove', 'slime'], ['sx_dawn_wisp', 'wn_glove', 'wn_mask']],
      strong: [['table', 'wn_glove', 'wn_glove'], ['twins', 'wn_mask'], ['sx_twelve', 'sx_hall_monitor', 'cupid']] }),
    block('firsthill', 'The First Hill', 3, 26, 60, 5, { color: '#ffd0d8', tint: '#5a2030', op: 'eqx-second-hill', lvl: 15, guardian: 'wg_front_row',
      rooms: { puzzle: 1.5, event: 1.3, chest: 1.1, altar: 0.8, trap: 0.8 },
      pool: [['venus', 'wn_audience'], ['sx_letter_locker', 'magus'], ['wn_audience', 'papillon'], ['sx_compact', 'wn_audience', 'twins'], ['sx_petal_veil', 'venus'], ['magus', 'wn_audience', 'cupid'], ['pesce', 'papillon', 'wn_audience'], ['twins', 'sx_compact']],
      strong: [['wn_audience', 'wn_audience', 'magus'], ['twins', 'papillon', 'venus']] }),
    block('secondhill', 'The Second Hill', 4, 61, 95, 5, { color: '#c9a0a0', tint: '#3a1a1a', op: 'eqx-third-hill', lvl: 20, guardian: 'wg_slack_water',
      rooms: { trap: 1.6, vault: 1.3, strong: 1.2, rest: 0.8, crack: 1.2 },
      pool: [['pesce', 'wn_net'], ['dice', 'relic'], ['wn_net', 'mother'], ['sx_red_ink', 'wn_net', 'relic'], ['hablerie', 'balance'], ['sx_vending', 'wn_net'], ['mother', 'dice', 'wn_net'], ['balance', 'hablerie', 'relic']],
      strong: [['mother', 'wn_net', 'wn_net'], ['hablerie', 'dice', 'relic']] }),
    block('thirdhill', 'The Third Hill', 5, 96, 130, 5, { color: '#e8e0e0', tint: '#4a3030', op: 'eqx-1023', lvl: 25, guardian: 'wg_roll_call',
      rooms: { puzzle: 1.5, crack: 1.6, event: 1.2, rare: 1.1, trap: 1 },
      pool: [['king', 'wn_uniform'], ['sx_static_set', 'dancer'], ['wn_uniform', 'turret'], ['sx_moon_rabbit', 'wn_uniform', 'bambino'], ['pot', 'dancer'], ['sx_cranes', 'sx_static_set'], ['king', 'wn_uniform', 'bambino'], ['sx_sleepwalker', 'wn_uniform']],
      strong: [['wn_uniform', 'wn_uniform', 'king'], ['turret', 'pot', 'dancer']] }),
    block('roadhome', 'The Road Home', 6, 131, 165, 5, { color: '#ffb36b', tint: '#5a2a0c', op: 'eqx-1122', lvl: 34, guardian: 'wg_last_step',
      rooms: { shadow: 1.2, strong: 1.4, vault: 1.4, altar: 1.2, puzzle: 0.8 },
      pool: [['drive', 'wn_pilgrim'], ['sx_kendo', 'beast'], ['wn_pilgrim', 'niceguy'], ['basalt', 'giant', 'wn_pilgrim'], ['sx_shishi', 'knight'], ['machine', 'wn_pilgrim'], ['castle', 'sx_overtime', 'wn_pilgrim'], ['tower', 'knight']],
      strong: [['wn_pilgrim', 'wn_pilgrim', 'giant'], ['castle', 'tower', 'basalt']] }),
    block('tree', 'The Tree', 7, 166, 200, 5, { color: '#ff8c4a', tint: '#4a1a08', op: 'eqx-1221', lvl: 40, guardian: 'wg_old_root',
      rooms: { rare: 1.6, trap: 1.3, crack: 1.3, event: 1.2, rest: 0.9 },
      pool: [['wn_fruit', 'sx_aquarium'], ['sx_herald', 'knight'], ['wn_fruit', 'tower', 'castle'], ['sx_sundial', 'wn_fruit'], ['sx_candle', 'seeker'], ['sx_torii', 'wn_fruit', 'machine'], ['sx_eclipse_moth', 'sx_candle'], ['seeker', 'wn_fruit']],
      strong: [['seeker', 'wn_fruit', 'wn_fruit'], ['sx_herald', 'sx_sundial', 'sx_candle']] }),
    block('field', 'The Sorghum Field', 8, 201, 232, 5, { color: '#ff3b3b', tint: '#4a0808', op: 'eqx-0218', lvl: 47, guardian: 'wg_scarecrow',
      rooms: { strong: 1.6, vault: 1.4, crack: 1.3, rare: 1.3, trap: 1.2, rest: 1.1, altar: 1.1, chest: 0.8 },
      pool: [['wn_harvester', 'sx_drift_jelly'], ['castle', 'tower'], ['sx_snow_globe', 'wn_harvester'], ['giant', 'basalt', 'machine'], ['sx_joya_bell', 'wn_harvester', 'castle'], ['dancer', 'pot', 'turret'], ['wn_harvester', 'seeker'], ['sx_black_sun'], ['sx_joya_bell', 'sx_drift_jelly', 'wn_harvester']],
      strong: [['seeker', 'wn_harvester', 'wn_harvester'], ['castle', 'tower', 'knight']] })
  ];
  // Levels: an entry without @ gets max(its own level, the block's − 3), plus up to 4 going down; strong groups block + 2.
  const lv = (k, n) => (k.includes('@') || !E[k] ? k : `${k}@${Math.max(E[k].lvl || 1, n)}`);
  well.forEach(b => { b.strong = b.strong.map(g => g.map(k => lv(k, b.lvl + 2))); });

  /* ── Floors: data.js's builder, going down ── */
  const floors = [];
  const kindAt = (g, n) => (!g || !g.at.includes(n) ? null : Array.isArray(g.kind) ? g.kind[g.at.indexOf(n)] || g.kind[0] : g.kind);
  well.forEach((b, bi) => {
    const lands = b.landings || [], all = b.floors.concat(lands).sort((x, y) => x - y), gates = b.gates || [all[0]];
    const N = all.length, Pn = b.pool.length, win = Math.max(2, Math.ceil(Pn * 0.6));
    all.forEach((n, fi) => {
      const at = N > 1 ? Math.round(fi * (Pn - win) / (N - 1)) : 0, t = N > 1 ? fi / (N - 1) : 0;
      const top = fi === N - 1, landing = lands.includes(n), gate = gates.includes(n);
      const pool = b.pool.slice(at, at + win).map(g => g.map(k => lv(k, b.lvl - 3 + Math.round(t * 4))));
      floors.push({ id: 'f' + n, label: `B${n}F`, gameFloor: n, block: b.name, blockId: b.id, bi, fi, t, bg: b.bg, color: b.color, tint: b.tint,
        pool, strong: b.strong, nav: fi === 0 ? 'block_' + b.id : 'floor', top, op: top ? b.op : null, landing, gate,
        access: fi === 0 || gate ? 1 : landing ? 0.3 : 0.55, layers: landing ? 3 : 5 + Math.min(2, Math.floor(bi / 2)), rooms: b.rooms || {}, lvl: b.lvl,
        guardian: kindAt(b.guardian, n), superboss: null, secret: false, ngp: false, last: false });
    });
  });
  D.blocks.splice(0, D.blocks.length, ...well);
  D.floors.splice(0, D.floors.length, ...floors);

  /* ── The full moons (the ones not written yet carry date ids; the story batch that writes one keeps its id) ── */
  const op = (id, name, arcana, place, n, group, lvl) => ({ id, name, arcana, place, arena: n ? `${BG}eq-well-${n}.webp` : `${BG}darkhour-iwatodai-street.webp`, group, lvl, brief: '' });
  D.ops.splice(0, 0,
    op('eqx-knock', 'The Knock', 'Full Moon · April', 'Iwatodai', 0, ['magician@9', 'hand@8', 'hand@8'], 9),
    op('eqx-first-hill', 'The First Hill', 'Full Moon · May', 'The Well', 3, ['flash_shadow@14', 'maiden@11', 'maiden@11'], 14),
    op('eqx-second-hill', 'The Second Hill', 'Full Moon · June', 'The Well', 4, ['tide_shadow@19', 'pesce@17', 'pesce@17'], 19),
    op('eqx-third-hill', 'The Third Hill', 'Full Moon · July', 'The Well', 5, ['ballot_box@24', 'group_chat@21', 'group_chat@21'], 24),
    op('eqx-1023', 'Full Moon · October', 'Full Moon · October', 'The Well', 6, ['giant@33', 'wn_pilgrim@31'], 33),
    op('eqx-1122', 'Full Moon · November', 'Full Moon · November', 'The Well', 7, ['pot@39', 'wn_fruit@37'], 39),
    op('eqx-1221', 'Full Moon · December', 'Full Moon · December', 'The Well', 8, ['seeker@45', 'wn_harvester@43'], 45),
    op('eqx-0218', 'Full Moon · February', 'Full Moon · February', 'The Well', 8, ['seeker@52', 'wn_harvester@50'], 52));

  /* ── Fuuka, from the top of the rope ── */
  Object.assign(D.nav, {
    block_mouth: ['The Mouth. I can hear you fine from up here. It gets harder the further down you go.', 'neutral'],
    block_doorstep: ['There are doors all over my screen… Don’t open any you don’t have to.', 'surprised'],
    block_firsthill: ['It’s snowing on my readings. I didn’t know that could happen. Stay close together.', 'surprised'],
    block_secondhill: ['The water’s standing up on both sides of you. It isn’t moving. Please don’t touch it.', 'surprised'],
    block_thirdhill: ['There’s static on every channel down there… I can still hear you. Mostly.', 'neutral'],
    block_roadhome: ['A road… it goes on for miles in a space that can’t be miles wide. Keep walking.', 'neutral'],
    block_tree: ['Something’s growing down through the Well. I can hear it whispering. Don’t listen to it.', 'surprised'],
    block_field: ['I can barely hear you down there. If you can hear me, come back up before the hour ends.', 'sad'],
    mapStart: ['I’ll guide you from up here. The stairs are somewhere ahead.', 'neutral'],
    stairs: ['The stairs! Ready to go down?', 'neutral'],
    barrier: ['The way down is sealed. Something’s waiting below this block for the full moon.', 'surprised'],
    barrierOpen: ['The way down’s open. We got through this one already.', 'happy']
  });
  D.events.lines.splice(0, D.events.lines.length,
    ['Your voices sound very far away tonight. Keep talking so I can hear you.', 'neutral'],
    ['There’s water dripping somewhere near you. Upward. I don’t like that.', 'surprised'],
    ['Solar, your readings flickered just now. Are you okay?', 'surprised'],
    ['The walls keep shifting. The Well never looks the same twice.', 'neutral'],
    ['Everyone’s doing great. I’m keeping an eye on all of you.', 'happy'],
    ['There’s a coffin here… no, it’s empty. That’s strange.', 'sad'],
    ['Junpei, please stop poking things. …That goes for you too, Koromaru.', 'neutral'],
    ['I picked up a signal that doesn’t belong here. It sounded like a phone ringing.', 'surprised'],
    ['I can hear the rope creaking from here. It’s holding. It’s fine.', 'neutral'],
    ['Solar, Haenim reacted to something in this room. Does it feel familiar?', 'neutral']);

  // battle.js: the hub, the barrier and the stairs (unset = Tartarus's words).
  D.dungeon = { name: 'The Well', caps: 'THE WELL', up: 'down', higher: 'deeper', climb: 'Go on down', top: 'Bottom', hint: 'Go as deep as you like', entrance: 'The mouth of the Well', tonight: 'Tonight’s descent', floor: n => `B${n}F` };
})();
