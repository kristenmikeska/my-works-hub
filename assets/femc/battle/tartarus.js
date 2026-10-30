/* FEMC Tartarus, deeper (2026-10-25): the room types beyond fights and chests, their puzzles, events, loot, and the chatter
   while exploring. Loaded after bonds.js in both pages (the life sim's menu needs the new materials and Shadows); the room
   handlers and puzzles only run in the battle page.
   - Data it adds: materials (lantern_glass, echo_shell, gilded_scale, guardian_crest, monad_sand), Shadows (the rare golden
     ones, the block guardians), Fuuka's lines for the new rooms (D.nav), tips, Monad's floor music.
   - Rooms (map.js places them, battle.js asks here when one is entered: `rooms[type](c, floor, node)`):
       guardian  a block's mini-boss on its set floors (data.js blocks[].guardian); the only way to the stairs. Beaten once
                 per playthrough (save.tt.guardians).
       vault     a sealed treasure vault: a Tartarus Key opens it, or beat the Shadows guarding it.
       puzzle    one of three quick puzzles (lanterns, a sliding route, a switch order); a chest when solved.
       rest      a quiet corner: 35% HP and SP, once (one per floor at most).
       rare      a golden Shadow: big EXP, yen and loot, but it flees on round 3, and on the map it runs off a few moves
                 after Fuuka spots it.
       trap      looks like a corridor until a scan spots it. Entering: dodge (a check: Solar's Agility, the scan, Koromaru's
                 nose, Aigis's sensors) or brace (half the effect, always).
       altar     a moon shrine (rare): pay yen for one blessing for the night.
       crack     a cracked wall (hidden until found by a scan or by walking past it): a hidden room with rare loot or a
                 memory fragment, or a stairwell to a secret floor, or (172F, once open) the way into Monad.
       event     a short scene: a choice, a lost item, a memory echo, a party member's moment (or, as before, a fragment).
   - plan(floor, c) / dress(map, floor, c): what map.js should build on a floor, and each new room's contents.
   - Chatter: Fuuka's block lines and the party's own (only members in the party, so searchers only once they've arrived),
     a line every few moves at most.
   c (the battle page's helpers): see battle.js ttCtx. Test hooks: FemcTartarus.state (the puzzle on screen and its
   solution), FemcTartarus.puzzles (generators and solvers), window.__ttForce (room types next to the arrival point). */
window.FemcTartarus = (() => {
  const D = window.FEMC_BATTLE_DATA;
  if (!D) return null;
  const P = D.progression;
  const pick = (R, a) => a[Math.floor(R() * a.length)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const pickW = (R, w) => { const ks = Object.keys(w).filter(k => w[k] > 0), t = ks.reduce((s, k) => s + w[k], 0); let r = R() * t; for (const k of ks) if ((r -= w[k]) <= 0) return k; return ks[ks.length - 1]; };

  /* ══════════ Materials (Mayoido Antiques buys them) ══════════ */
  Object.assign(D.materials, {
    lantern_glass: { name: 'Lantern Glass', price: 140, icon: 'mat-mirror', tint: '#ffd36b', desc: 'A curved pane from a lantern that lit itself. Warm for a second when you hold it.' },
    echo_shell: { name: 'Echo Shell', price: 420, icon: 'mat-stone', tint: '#7fd6c9', desc: 'A pale shell from a room behind a wall. Hold it to your ear and it hums a tune you almost know.' },
    gilded_scale: { name: 'Gilded Scale', price: 900, icon: 'mat-feather', tint: '#ffd36b', desc: 'A flake of gold a rare Shadow shed as it ran.' },
    guardian_crest: { name: 'Guardian Crest', price: 1500, icon: 'mat-arcana', tint: '#ff5b5b', desc: 'The seal a block guardian wore. Mayoido pays well for these.' },
    monad_sand: { name: 'Monad Sand', price: 1300, icon: 'mat-ash', tint: '#6ab0ff', desc: 'Blue sand that falls upward when no one is looking.' }
  });
  // Kat's stickers (batch 48; build.js ITEM_ART covers the rest, but these are added after it runs).
  ['lantern_glass', 'echo_shell', 'gilded_scale', 'guardian_crest', 'monad_sand'].forEach(id => { D.materials[id].art = `assets/femc/battle/art/items/${id}.webp`; });

  /* ══════════ Shadows: the rare golden ones and the block guardians ══════════ */
  const S = (lvl, k = {}) => ({ lvl, hp: Math.round((26 + lvl * 13.5) * (k.hp || 1)), st: +(4 + lvl * 0.95 * (k.st || 1)).toFixed(1), ma: +(4 + lvl * 0.95 * (k.ma || 1)).toFixed(1),
    en: +(3 + lvl * 0.7 * (k.en || 1)).toFixed(1), ag: +(4 + lvl * 0.8 * (k.ag || 1)).toFixed(1), lu: +(3 + lvl * 0.5 * (k.lu || 1)).toFixed(1) });
  const IMMUNE = ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'];
  // Rare Shadows: one weakness each, everything else shrugged off, and they never fight back (ai 'still': they only edge away). `cls: 'golden'` gilds the art (tartarus.css).
  const RESIST_ALL = { slash: 'resist', strike: 'resist', pierce: 'resist', fire: 'resist', ice: 'resist', elec: 'resist', wind: 'resist', light: 'null', dark: 'null' };
  const rare = (lvl, weak, o) => Object.assign(S(lvl, { hp: 0.5, ag: 1.5, en: 1.3 }), {
    arcana: 'Fortune', aff: Object.assign({}, RESIST_ALL, { [weak]: 'weak' }), skills: ['still'], ai: 'still', still: 'It edges toward the way out, glittering.', exp: Math.round(P.expFor(lvl) * 7), yen: P.yenFor(lvl) * 12,
    cls: 'golden', rare: true, drop: 'gilded_scale', dropChance: 1, ailImmune: IMMUNE, alloutResist: 0 }, o);
  Object.assign(D.enemies, {
    golden_hand: rare(8, 'elec', { name: 'Golden Hand', img: 'dancinghand', h: 240, idle: 'sway', svg: 'hand', note: 'A gilded Dancing Hand. It never fights back. It runs. Weak to Elec.' }),
    golden_relic: rare(17, 'fire', { name: 'Golden Relic', img: 'change-relic', h: 210, idle: 'float', svg: 'maiden', note: 'A Change Relic dipped in gold. It runs before it’s cornered. Weak to Fire.' }),
    golden_beetle: rare(27, 'wind', { name: 'Golden Beetle', img: 'gravebeetle', h: 170, idle: 'crawl', svg: 'beetle', note: 'A Grave Beetle with a gold shell. It digs out of any fight it can. Weak to Wind.' }),
    golden_pot: rare(38, 'ice', { name: 'Golden Pot', img: 'cloudgirl-pot', h: 230, idle: 'float', svg: 'maiden', note: 'A Cloudgirl Pot glazed in gold. It drifts away the moment you blink. Weak to Ice.' })
  });
  const RARE_BY_BLOCK = ['golden_hand', 'golden_hand', 'golden_relic', 'golden_relic', 'golden_beetle', 'golden_beetle', 'golden_pot', 'golden_pot'];
  // Block guardians: an existing Shadow grown into the floor's warden (its art, a third bigger, a red glow: cls 'guardian').
  const guard = (base, lvl, name, note, k = {}) => {
    const b = D.enemies[base];
    return Object.assign(S(lvl, Object.assign({ hp: 3.3, st: 1.12, ma: 1.12, en: 1.2, ag: 1.05 }, k)), {
      name, arcana: b.arcana, aff: Object.assign({}, b.aff), skills: b.skills.slice(), ai: b.ai === 'coward' ? 'weakest' : b.ai, img: b.img, svg: b.svg, idle: b.idle, h: Math.round((b.h || 220) * 1.3),
      exp: Math.round(P.expFor(lvl) * 4), yen: P.yenFor(lvl) * 6, drop: 'guardian_crest', dropChance: 1, cls: 'guardian', guardian: true,
      ailImmune: ['charm', 'fear', 'bind'], alloutResist: 0.35, note });
  };
  Object.assign(D.enemies, {
    guard_thebel: guard('table', 9, 'Gatekeeper Table', 'A Laughing Table the size of a car, set for a dinner no one came to. It guards the stairs like the last seat.'),
    guard_arqa: guard('venus', 15, 'Venus Regent', 'A Venus Eagle grown a crown of feathers. It circles the stairs and won’t land.'),
    guard_yabbashah: guard('mother', 20, 'Iron Matron', 'An Elegant Mother in lacquered armor. Everything she shelters is a Shadow.'),
    guard_tziah: guard('king', 25, 'Mirror Monarch', 'A Positive King copied by every mirror in Tziah. Only one of him is real at a time.'),
    guard_harabah: guard('drive', 30, 'Juggernaut Drive', 'A Rampage Drive with nowhere left to go but through you.'),
    guard_adamah: guard('castle', 35, 'Bastion', 'A Solid Castle that stopped walking and became a wall.'),
    guard_empyrean: guard('seeker', 40, 'Pale Seeker', 'A Death Seeker gone white at the edges. Its eyes follow you even when it doesn’t turn.'),
    guard_monad: guard('tower', 50, 'Monad Warden', 'A Corrupt Tower that has stood in the dark so long it forgot there was a tower below it.')
  });

  /* ══════════ Fuuka's lines for the new rooms, a tip, Monad's music ══════════ */
  Object.assign(D.nav, {
    block_monad: ['This place isn’t on any of my maps… Monad. Everything here is stronger. Please be careful.', 'surprised'],
    guardian: ['That’s this floor’s guardian. It won’t let anyone near the stairs.', 'surprised'],
    guardianSpot: ['Something big is guarding the stairs. We’ll have to get past it.', 'surprised'],
    guardianWin: ['The guardian’s gone! The stairs are open.', 'happy'],
    vault: ['A vault! A Tartarus Key would open it… or its guards will, if you beat them.', 'neutral'],
    vaultSpot: ['I’m reading a sealed vault on this floor.', 'neutral'],
    puzzle: ['There’s a mechanism in here. I think it opens something.', 'neutral'],
    puzzleWin: [['You solved it!', 'It’s opening!'], 'happy'],
    puzzleFail: ['It locked itself… That’s okay. There’s more to find.', 'sad'],
    rest: ['It’s calm here. Let’s catch our breath for a second.', 'happy'],
    rareSpot: [['Wait, that one’s golden! It’ll run if we’re slow!', 'A rare Shadow! Quick, before it runs!'], 'surprised'],
    rareGone: ['It got away… They never stay long.', 'sad'],
    rareFled: ['It ran! Rare ones always do.', 'sad'],
    rareWin: ['You caught it! Look at all that!', 'happy'],
    trapSpot: ['Careful, I marked a trap. You can step around it.', 'neutral'],
    trapDodged: [['Nice footwork!', 'That was close!'], 'happy'],
    trapHit: ['Are you okay? I should have seen that…', 'sad'],
    altar: ['A little shrine… it’s asking for an offering.', 'neutral'],
    crackFound: [['That wall… there’s empty space behind it!', 'There’s a hollow behind that wall. Want to take a look?'], 'surprised'],
    hiddenRoom: ['A room nobody was meant to find…', 'surprised'],
    secretFloor: ['This floor isn’t on any of my maps. Stay close.', 'surprised'],
    monadDoor: ['That wall at the top… there’s more tower behind it. A lot more.', 'surprised'],
    shortcut: ['That passage cuts straight through. But something’s waiting at the other end.', 'neutral'],
    scanNothing: ['Nothing new nearby.', 'neutral'],
    sealed: ['The way up is sealed for now. Tartarus hasn’t opened any higher.', 'neutral'],
    stairsNear: ['The stairs are right ahead.', 'happy']
  });
  if (D.tips) Object.assign(D.tips, {
    rooms: ['room-event', 'Rooms aren’t all fights now: treasure vaults, puzzles, rest spots, traps, golden Shadows that run, shrines, and walls that hide things. A scan shows more.'],
    guardian: ['room-shadow', 'A guardian blocks the stairs on some floors. Beat it once and it’s gone for good.']
  });
  if (D.music) D.music.monad = 'assets/femc/music/deep-mentality.mp3';

  /* What the map shows for the new rooms (battle.js ROOM). icon: Kat's map-rooms sheet 2 (batch 48, tools/femc-icons.py ROOMS2 ->
     art/icons/<icon>.webp, listed in battle.js ROOM_ART); the glyph of the same name in icons.js is the fallback. */
  const ROOMS = {
    guardian: { name: 'Guardian', icon: 'room-guardian', color: '#ff3b6b' },
    vault: { name: 'Vault', icon: 'room-vault', color: '#ffb347' },
    puzzle: { name: 'Puzzle', icon: 'room-puzzle', color: '#9fe8ff' },
    rest: { name: 'Rest spot', icon: 'room-rest', color: '#7dffc0' },
    rare: { name: 'Rare Shadow', icon: 'room-rare', color: '#ffd36b' },
    trap: { name: 'Trap', icon: 'room-trap', color: '#ff7a3d' },
    altar: { name: 'Moon shrine', icon: 'room-altar', color: '#c9b8ff' },
    crack: { name: 'Cracked wall', icon: 'room-crack', color: '#d0c0e0' }
  };
  // A trap no one has spotted looks like any corridor.
  const look = n => (n.type === 'trap' && !n.spotted && !n.used ? 'empty' : n.type);
  // Rooms off the way to the stairs (the floor's side rooms, counted on the map).
  const SIDE = ['chest', 'locked', 'vault', 'puzzle', 'rest', 'rare', 'event', 'altar', 'crack', 'clock', 'shrine'];
  const sideDone = n => !!(n.opened || n.used || n.cleared || n.gone);

  /* ══════════ The floor plan ══════════ */
  const fragsOpen = c => !c.HO || !!c.HO.request.fragmentsOpen;
  // A NO_DROP card can still drop once the life sim has released it (request.dropsOk: every scene that gives it has played).
  const fragsLeft = c => D.memories.filter(m => (!m.noDrop || (c.HO && (c.HO.request.dropsOk || []).includes(m.id))) && !c.save.memories.includes(m.id) && !(c.HO && (c.HO.request.fragments || []).includes(m.id)));
  // Monad opens once Fortune & Strength are cleared and (story) the date has opened 176F (11/4's 204F cap).
  function monadOpen(c) {
    if (!(c.save.ops.cleared || []).includes('fortune')) return false;
    return !c.HO || (+c.HO.request.maxFloor || 0) >= D.floors.find(f => f.secret).gameFloor;
  }
  // Can the party stand on this floor tonight? Main blocks are gated by battle.js (block caps); Monad floor by floor.
  function floorOpen(c, f) { return !f || !f.secret || (monadOpen(c) && (!c.HO || f.gameFloor <= (+c.HO.request.maxFloor || 0))); }
  /* What map.js builds: the guardian (until beaten), and a cracked wall (by chance; on 172F it's Monad's door once open). */
  function plan(floor, c) {
    const p = {};
    if (floor.guardian && !c.save.tt.guardians.includes(floor.id)) p.guardian = floor.guardian;
    if (Array.isArray(window.__ttForce)) p.force = window.__ttForce.slice();
    if (floor.hiddenFloor) return p;
    if (floor.last) { if (monadOpen(c)) p.crack = 'monad'; return p; }
    if (floor.top) return p;
    const ch = clamp(D.map.crackChance * (floor.rooms.crack || 1), 0, 0.9);
    if (window.__ttCrack || c.rand() < ch) {
      const w = { loot: 1.2, floor: floor.secret ? 0.5 : 1 };
      if (fragsOpen(c) && fragsLeft(c).length) w.memory = 0.9;
      p.crack = window.__ttCrack || pickW(c.rand, w);
    }
    return p;
  }
  /* A hidden floor (behind a cracked wall's stairwell): smaller, richer, no access point; its stairs come out on the next floor. */
  function hiddenFloor(base) {
    return Object.assign({}, base, { id: base.id + '-h', label: `${base.gameFloor}F·B`, hiddenFloor: true, top: false, op: null, last: false, access: 0, layers: 4, guardian: null,
      nav: 'secretFloor', rooms: { chest: 2.6, vault: 4, rare: 3, puzzle: 2, rest: 1.5, event: 1.6, altar: 1.5, shadow: 0.55, trap: 0.6, empty: 0.3 } });
  }
  /* Each new room's contents, once the map exists. */
  function dress(map, floor, c) {
    const R = c.rand, bi = Math.min(floor.bi || 0, RARE_BY_BLOCK.length - 1);
    const rareLvl = Math.max(D.enemies[RARE_BY_BLOCK[bi]].lvl, (floor.lvl || 6) + 2 + (floor.fi || 0));
    const K = ['lantern', 'slide', 'switch'];
    map.nodes.forEach(n => {
      if (n.type === 'guardian') { const k = n.kind || floor.guardian; const extra = floor.secret && floor.gameFloor > 220 ? 4 : 0; n.group = [extra ? `${k}@${D.enemies[k].lvl + extra}` : k]; }
      if (n.type === 'vault') n.guard = (floor.strong && floor.strong.length ? pick(R, floor.strong) : pick(R, floor.pool)).slice();
      if (n.type === 'puzzle') { n.puzzle = window.__ttPuzzle || (floor.blockId === 'arqa' || floor.blockId === 'tziah' ? pick(R, K.concat('lantern')) : pick(R, K)); n.seed = 1 + Math.floor(R() * 1e9); }
      if (n.type === 'rare') n.group = [`${RARE_BY_BLOCK[bi]}@${rareLvl}`];
      if (n.type === 'trap') n.trap = pick(R, Object.keys(TRAPS));
      if (n.type === 'altar') { const ks = Object.keys(OFFERS); const out = []; while (out.length < 3) { const k = pick(R, ks); if (!out.includes(k)) out.push(k); } n.offers = out; }
    });
    // A hidden floor keeps one more secret in plain sight: a fragment if one's waiting, else a hidden stash.
    if (floor.hiddenFloor) {
      const spot = map.nodes.filter(n => ['empty', 'chest', 'event'].includes(n.type) && n.layer >= 1);
      if (spot.length) { const n = pick(R, spot); n.type = 'crack'; n.secret = fragsOpen(c) && fragsLeft(c).length ? 'memory' : 'loot'; n.found = true; }
    }
    // The way into Monad is never a secret twice: once found, its wall shows from the start.
    map.nodes.forEach(n => { if (n.type === 'crack' && n.secret === 'monad' && c.save.tt.monad) { n.found = true; n.seen = n.known = true; } });
    if (window.__ttReveal) map.nodes.forEach(n => { if (n.hidden) n.found = true; n.seen = n.known = true; if (n.type === 'trap') n.spotted = true; });
  }

  /* ══════════ Loot ══════════ */
  const yenRange = (bi, k = 1) => { const Y = D.map.chest.yen, [a, b] = Y[Math.min(bi, Y.length - 1)]; const m = bi >= Y.length ? 1.4 : 1; return [a * k * m, b * k * m]; };
  const roll = (R, [a, b]) => Math.round((a + R() * (b - a)) / 10) * 10;
  function gearPick(R, bi, save, rareFirst) {
    const G = D.gear, owned = id => (save.gear.owned[id] || 0) > 0;
    const rare = D.map.chest.lockedRare.filter(id => G[id] && G[id].tier <= bi + 2 && !owned(id));
    if (rareFirst && rare.length) return pick(R, rare);
    const t = Math.min(7, bi + 2), pool = Object.keys(G).filter(id => !G[id].rare && !G[id].owner && !G[id].gacha && G[id].tier === t && G[id].price !== 0);
    const fresh = pool.filter(id => !owned(id));
    return (fresh.length ? pick(R, fresh) : pool.length ? pick(R, pool) : rare.length ? pick(R, rare) : null);
  }
  /* A room's reward. kind: puzzle | vault | guardian | rare | hidden | stash. Returns { yen, items, mats, gear, card, plumes, echo }. */
  function loot(kind, c, floor) {
    const R = c.rand, bi = floor.bi || 0, T = D.map.chest.items, tier = Math.min(7, bi + 1), out = { yen: 0, items: {}, mats: {}, gear: null, card: null, plumes: 0 };
    const item = k => { const t = T[Math.min(bi + k, T.length - 1)]; const id = pick(R, t); out.items[id] = (out.items[id] || 0) + 1; };
    const mat = (id, n = 1) => { out.mats[id] = (out.mats[id] || 0) + n; };
    const card = minR => { if (c.BLD && c.BLD.rollCard) out.card = c.BLD.rollCard(R, { tier: Math.min(7, tier + 1), minR }); };
    const story = !!c.HO;
    if (kind === 'puzzle') { out.yen = roll(R, yenRange(bi, 1.2)); item(0); mat('lantern_glass', 1 + (R() < 0.4 ? 1 : 0)); if (R() < 0.15) card(3); }
    if (kind === 'vault') {
      out.yen = roll(R, yenRange(bi, 2.4)); item(1); if (R() < 0.45) mat('velvet_thread');
      if (R() < 0.6) out.gear = gearPick(R, bi, c.save, R() < 0.55);
      if (!out.gear || R() < 0.4) card(4);
      if (story && R() < 0.35) out.plumes = 1;
      if (story && R() < 0.2) out.items.capsule_ticket = (out.items.capsule_ticket || 0) + 1;
    }
    if (kind === 'guardian') { out.yen = roll(R, yenRange(bi, 2)); out.gear = gearPick(R, bi, c.save, false); card(4); mat('velvet_thread'); if (story) out.plumes = 1; }
    if (kind === 'rare') {
      out.yen = roll(R, yenRange(bi, 3)); mat('gilded_scale');
      if (story && R() < 0.35) out.items.capsule_ticket = 1;
      if (story && R() < 0.3) out.plumes = 1;
      if (R() < 0.2) card(4);
    }
    if (kind === 'hidden') { out.yen = roll(R, yenRange(bi, 1.5)); mat('echo_shell'); if (R() < 0.6) card(4); else out.gear = gearPick(R, bi, c.save, true); if (story && R() < 0.5) out.plumes = 1; }
    if (kind === 'stash') { out.yen = roll(R, yenRange(bi, 0.6)); item(0); }
    if (floor.secret && kind !== 'stash') mat('monad_sand', 1 + (R() < 0.5 ? 1 : 0));
    // A rare Echo for Solar (echoes.js; story only): golden Shadows 30%, vaults 15%, hidden rooms 20%.
    const echoOdds = { rare: 0.3, vault: 0.15, hidden: 0.2 }[kind];
    if (story && echoOdds && window.FemcEchoes && R() < echoOdds) out.echo = window.FemcEchoes.dropPick(R, c.save);
    if (!out.echo) delete out.echo;
    if (!story && out.items.capsule_ticket) { delete out.items.capsule_ticket; out.yen += 500; } // practice has no capsule machine
    if (!out.gear) delete out.gear;
    return out;
  }
  function grant(c, o) {
    const s = c.save;
    if (o.yen) s.yen += o.yen;
    Object.entries(o.items || {}).forEach(([k, n]) => { if (D.items[k]) c.addItem(k, n); });
    Object.entries(o.mats || {}).forEach(([k, n]) => { if (D.materials[k]) c.addMat(k, n); });
    if (o.gear && D.gear[o.gear]) c.addGear(o.gear);
    if (o.card && c.BLD) { const r = c.BLD.addCard(s, o.card); if (r && r.dust) o.cardDust = r.dust; }
    if (o.plumes) c.plumes(o.plumes);
    if (o.echo && window.FemcEchoes) { o.echoRes = window.FemcEchoes.add(s, o.echo, { via: 'tartarus' }); c.mark('tt-echo'); }
    c.persist();
  }
  function lootHtml(c, o) {
    const ICON = c.ICON, rows = [];
    if (o.yen) rows.push(`<div class="bt-loot">${ICON.svg('yen')}<b>${c.yen(o.yen)}</b></div>`);
    Object.entries(o.items || {}).forEach(([k, n]) => { const it = D.items[k]; if (it) rows.push(`<div class="bt-loot">${ICON.of(k)}<b>${esc(it.name)}${n > 1 ? ` ×${n}` : ''}</b><span>${esc(k === 'capsule_ticket' ? 'One free turn of the capsule machine at Paulownia Mall.' : it.desc)}</span></div>`); });
    Object.entries(o.mats || {}).forEach(([k, n]) => { const m = D.materials[k]; if (m) rows.push(`<div class="bt-loot">${ICON.of(k)}<b>${esc(m.name)}${n > 1 ? ` ×${n}` : ''}</b><span>${esc(m.desc)}</span></div>`); });
    if (o.gear && D.gear[o.gear]) { const g = D.gear[o.gear]; rows.push(`<div class="bt-loot${g.art ? ' art' : ''}">${g.art ? `<img${g.artWide ? ' class="wide"' : ''} src="${g.art}?v=${c.ART_V}" alt="">` : ICON.of(o.gear)}<b>${esc(g.name)}</b><span>${esc(c.gearLine(o.gear))}</span></div>`); }
    if (o.card && c.BLD) rows.push(`<div class="bt-loot tt-cardloot">${ICON.revCard ? ICON.revCard(o.card, { cls: 'tt-card' }) : ''}<b>${esc(c.BLD.cardName(o.card))}</b><span>${o.cardDust ? `Your card box is full: it turned into Tarot Dust ×${o.cardDust}.` : `A ${'★'.repeat(o.card.r)} Revelation card.`}</span></div>`);
    if (o.plumes) rows.push(`<div class="bt-loot">${ICON.svg('charm', '#6ab0ff')}<b>Velvet Plume${o.plumes > 1 ? ` ×${o.plumes}` : ''}</b><span>For Elizabeth’s draws in the Velvet Room.</span></div>`);
    if (o.echo && window.FemcEchoes) { const x = window.FemcEchoes.byId(o.echo), r = o.echoRes || {}; if (x) rows.push(`<div class="bt-loot tt-echoloot">${window.FemcEchoes.cardHtml(o.echo, { cls: 'tt-echo' })}<b>Echo · ${esc(x.name)}</b><span>${esc(`${x.arcana} · ${window.FemcEchoes.SETS[x.set] ? window.FemcEchoes.SETS[x.set].myth : ''}. ${r.full ? 'Solar’s Echoes are full: it’s in the Compendium to summon later.' : r.isNew ? 'New! Equip it on the Personas tab.' : 'Equip it on the Personas tab.'}`)}</span></div>`); }
    return rows.join('') || '<p>Nothing but dust.</p>';
  }
  const kick = f => `${f.label} · ${f.hiddenFloor ? 'A floor that isn’t there' : f.block}`;

  /* ══════════ Traps and shrine blessings ══════════ */
  const TRAPS = {
    spikes: { name: 'Spike plates', desc: 'Pressure plates under the dust, and a ceiling full of holes.', hit: 'Spikes drop. Everyone loses 15% of their HP.', brace: 'Shields up: 7% HP each' },
    mist: { name: 'Draining mist', desc: 'Grey mist pooled in the low corners. It drinks focus.', hit: 'The mist rolls over everyone: 20% SP gone.', brace: 'Hold your breath: 10% SP each' },
    alarm: { name: 'A bell wire', desc: 'A wire strung across the doorway, tied to a bell somewhere above.', hit: 'The bell rings and rings. Something heard it: the Reaper comes 5 steps sooner.', brace: 'Grab the bell: 2 steps sooner' },
    snare: { name: 'Coffin ribbons', desc: 'Black ribbons on the floor that tighten when stepped on.', hit: 'The ribbons cling: the next fight starts with everyone slowed (Agility down).', brace: 'Cut them loose: 5% HP each' }
  };
  function trapHit(c, kind, half) {
    const k = half ? 0.5 : 1;
    if (kind === 'spikes') c.carryEach(u => { u.hp = Math.max(1, Math.round(u.hp - u.maxHp * (half ? 0.07 : 0.15))); });
    if (kind === 'mist') c.carryEach(u => { u.sp = Math.max(0, Math.round(u.sp - u.maxSp * 0.2 * k)); });
    if (kind === 'alarm' && c.run.map) c.run.map.steps += half ? 2 : 5;
    if (kind === 'snare') { if (half) c.carryEach(u => { u.hp = Math.max(1, Math.round(u.hp - u.maxHp * 0.05)); }); else c.run.ttSnare = true; }
  }
  function trapOdds(c, floor, n) {
    const team = c.roster().map(m => m.id);
    let p = 0.5 + (c.solarAg() - (floor.lvl || 6) * 0.9) * 0.015;
    const why = [];
    if (n.spotted) { p += 0.3; why.push('marked by the scan'); }
    if (team.includes('koromaru')) { p += 0.15; why.push('Koromaru’s nose'); }
    if (team.includes('aigis')) { p += 0.1; why.push('Aigis’s sensors'); }
    return { p: clamp(p, 0.25, 0.95), why };
  }
  // Moon shrine blessings: pay once, one per shrine. Prices grow with the block.
  const OFFERS = {
    favour: { name: 'Moon’s Favour', base: 400, desc: 'The next three fights give 25% more EXP.', apply: c => { c.run.ttExp = { n: 3, v: 0.25 }; } },
    hush: { name: 'Hushed Steps', base: 300, desc: 'The Reaper loses track: 8 steps back on this floor.', apply: c => { if (c.run.map) c.run.map.steps = Math.max(0, c.run.map.steps - 8); } },
    ward: { name: 'Warding Light', base: 300, desc: 'The next two fights start with Defense up.', apply: c => { c.run.ttWard = 2; } },
    edge: { name: 'Keen Edge', base: 300, desc: 'The next two fights start with Attack up.', apply: c => { c.run.ttEdge = 2; } },
    mend: { name: 'Moonwater', base: 500, desc: 'Everyone recovers half their HP and SP.', apply: c => { c.carryEach(u => { u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * 0.5)); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * 0.5)); }); } },
    sight: { name: 'Night Eyes', base: 250, desc: 'The whole floor is revealed, hidden rooms too.', apply: c => { if (c.run.map) c.run.map.nodes.forEach(n => { if (n.hidden) n.found = true; n.seen = n.known = true; if (n.type === 'trap') n.spotted = true; }); } }
  };
  const offerPrice = (k, floor) => Math.round(OFFERS[k].base * (1 + (floor.bi || 0) * 0.7) / 10) * 10;

  /* Battle hooks (battle.js battle / afterWin): the night's blessings and snares on the next fight; Moon's Favour on its EXP. */
  function battleMods(run, startBuffs) {
    if (!run) return;
    if (run.ttWard > 0) { startBuffs.push('def'); run.ttWard--; }
    if (run.ttEdge > 0) { startBuffs.push('atk'); run.ttEdge--; }
    if (run.ttSnare) { startBuffs.push({ stat: 'agi', v: -1 }); run.ttSnare = false; }
  }
  function expBoost(run, rew, notes) {
    if (!run || !run.ttExp || !(run.ttExp.n > 0) || !rew.exp) return;
    rew.exp = Math.round(rew.exp * (1 + run.ttExp.v)); run.ttExp.n--; notes.push(`Moon’s Favour: EXP +${Math.round(run.ttExp.v * 100)}%`);
  }

  /* ══════════ Rooms ══════════ */
  const TREASURE = 'assets/femc/bg/tartarus-treasure.webp';
  const panel = (c, floor, o) => c.roomPanel(Object.assign({ bg: floor.bg, kicker: kick(floor) }, o));
  const team = c => c.roster().map(m => m.id);
  const sayHtml = (c, who, line, face) => { const m = c.member(who); if (!m) return ''; const f = (m.faces && m.faces[face]) || (m.faces && m.faces.idle) || 'neutral'; return `<div class="tt-say" style="--c:${m.color || '#ff8cc0'}"><span class="pic fcb">${c.fimg(who, f)}</span><p><b>${esc(m.name)}</b>${esc(line)}</p></div>`; };
  const heal = (c, hp, sp, only) => c.carryEach(u => { if (only && u.mid !== only) return; u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * hp)); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * sp)); });
  async function showLoot(c, floor, o, { title, kicker, name, line }) {
    grant(c, o);
    await panel(c, floor, { bg: TREASURE, cls: 'chest tt-loot', kicker: kicker || kick(floor), title, body: lootHtml(c, o), name, fuuka: line || null });
  }
  const ambush = (c, floor) => c.fight({ group: pick(c.rand, floor.pool).slice() });
  const rooms = {
    async guardian(c, floor, n) {
      if (n.cleared) return null;
      const d = D.enemies[n.group[0].split('@')[0]];
      c.tip('guardian');
      const v = await panel(c, floor, { cls: 'event tt-guardian', kicker: `${kick(floor)} · Guardian`, title: esc(d.name.toUpperCase()), name: 'guardian',
        body: `<p>${esc(d.note)}</p><p class="tt-note">It stands between you and the stairs. Beat it once and it’s gone for good.</p>`,
        buttons: [{ v: 'fight', label: 'Fight it', pink: true, small: 'Strong · better rewards' }, { v: 'back', label: 'Not yet', small: 'Step back' }], fuuka: c.navLine('guardian') });
      if (v !== 'fight') { c.MAP.retreat(c.run.map); return null; }
      const r = await c.fight({ group: n.group, strong: true, music: 'danger', nav: 'guardian' });
      if (r === 'over' || r === 'savepoint') return r;
      if (r !== 'win') { c.MAP.retreat(c.run.map); c.say('escape'); return null; }
      n.cleared = true;
      if (!floor.hiddenFloor && !c.save.tt.guardians.includes(floor.id)) c.save.tt.guardians.push(floor.id);
      c.mark('guardian-win'); c.say('guardianWin');
      await showLoot(c, floor, loot('guardian', c, floor), { title: 'GUARDIAN DOWN', kicker: `${d.name} · beaten`, name: 'guardian-loot', line: c.navLine('guardianWin') });
      return null;
    },
    async vault(c, floor, n) {
      if (n.opened) return null;
      const keys = c.save.items.tartarus_key || 0;
      const v = await panel(c, floor, { bg: TREASURE, cls: 'chest locked tt-vault', title: 'A VAULT', name: 'vault',
        body: `<p>A door of banded iron set into the wall, a heavy lock in the middle, and Shadows curled asleep in front of it.</p><p class="tt-note">${keys ? `You have ${keys} Tartarus Key${keys > 1 ? 's' : ''}.` : 'No key? Its guards might have one on them.'}</p>`,
        buttons: [{ v: 'key', label: 'Use a Tartarus Key', pink: !!keys, off: !keys }, { v: 'fight', label: 'Wake the guards', pink: !keys, small: 'Strong Shadows' }, { v: 'no', label: 'Leave it' }], fuuka: c.navLine('vault') });
      if (v === 'key' && keys) { c.save.items.tartarus_key--; if (!c.save.items.tartarus_key) delete c.save.items.tartarus_key; c.mark('vault-key'); }
      else if (v === 'fight') {
        const r = await c.fight({ group: n.guard, strong: true });
        if (r === 'over' || r === 'savepoint') return r;
        if (r !== 'win') { c.MAP.retreat(c.run.map); c.say('escape'); return null; }
        c.mark('vault-guards');
      } else return null;
      n.opened = true; c.sfx('unlock'); c.mark('vault-open');
      await showLoot(c, floor, loot('vault', c, floor), { title: 'THE VAULT', kicker: 'The lock gives way', name: 'vault-loot' });
      return null;
    },
    async puzzle(c, floor, n) {
      if (n.used) return null;
      const Z = PUZZLES[n.puzzle];
      const v = await panel(c, floor, { cls: 'event tt-puzzle', title: Z.title, name: 'puzzle', body: `<p>${esc(Z.intro)}</p><p class="tt-note">${esc(Z.how)}</p>`,
        buttons: [{ v: 'try', label: 'Try it', pink: true, small: Z.small }, { v: 'no', label: 'Leave it', small: 'You can come back' }], fuuka: c.navLine('puzzle') });
      if (v !== 'try') return null;
      n.used = true; c.mark('puzzle-' + n.puzzle);
      const ok = await playPuzzle(c, floor, n);
      if (!ok) { c.mark('puzzle-fail'); c.say('puzzleFail'); return null; }
      c.save.tt.puzzles++; c.mark('puzzle-win');
      await showLoot(c, floor, loot('puzzle', c, floor), { title: 'SOLVED', kicker: Z.title, name: 'puzzle-loot', line: c.navLine('puzzleWin') });
      return null;
    },
    async rest(c, floor, n) {
      if (n.used) return null;
      n.used = true; heal(c, 0.35, 0.35); c.sfx('heal'); c.mark('rest');
      const mates = team(c).filter(id => id !== 'solar' && REST[id]), who = mates.length ? pick(c.rand, mates) : null;
      await panel(c, floor, { cls: 'clock tt-rest', title: 'A QUIET CORNER', name: 'rest',
        body: `<p>${esc(pick(c.rand, REST_PLACES))} Everyone recovers 35% of their HP and SP.</p>${who ? sayHtml(c, who, pick(c.rand, REST[who]), 'win') : ''}`, fuuka: who ? null : c.navLine('rest') });
      return null;
    },
    async rare(c, floor, n) {
      if (n.cleared || n.gone) return null;
      c.tip('rooms');
      const r = await c.fight({ group: n.group, rules: { fleeAt: 3 }, music: 'battle', nav: 'rareSpot' });
      if (r === 'over' || r === 'savepoint') return r;
      if (r === 'win') {
        n.cleared = true; c.save.tt.rares++; c.golden?.(); c.mark('rare-win'); // golden(): the night's tally (story nights; battle.js)
        await showLoot(c, floor, loot('rare', c, floor), { title: 'CAUGHT IT', kicker: 'A rare Shadow', name: 'rare-loot', line: c.navLine('rareWin') });
        return null;
      }
      n.gone = true; n.type = 'empty'; c.mark('rare-fled'); c.say('rareFled');
      return null;
    },
    async trap(c, floor, n) {
      if (n.used) return null;
      n.used = true;
      const T = TRAPS[n.trap] || TRAPS.spikes, odds = trapOdds(c, floor, n), pct = Math.round(odds.p * 100);
      c.mark('trap'); c.mark('trap-' + n.trap);
      const v = await panel(c, floor, { cls: 'event tt-trap', title: n.spotted ? 'A TRAP' : 'CLICK.', name: 'trap',
        body: `<p><b>${esc(T.name)}.</b> ${esc(T.desc)}</p>${odds.why.length ? `<p class="tt-note">On your side: ${esc(odds.why.join(', '))}.</p>` : ''}`,
        buttons: [{ v: 'dodge', label: n.spotted ? 'Step around it' : 'Jump clear', pink: true, small: `${pct}% to avoid it` }, { v: 'brace', label: 'Brace for it', small: T.brace }], fuuka: n.spotted ? c.navLine('trapSpot') : null });
      if (v === 'brace') { trapHit(c, n.trap, true); c.sfx('back'); c.mark('trap-braced'); c.line([`Braced. ${T.brace}.`, 'neutral']); return null; }
      if (c.rand() < odds.p) { c.sfx('ok'); c.mark('trap-dodged'); c.say('trapDodged'); return null; }
      trapHit(c, n.trap, false); c.sfx('ko'); c.mark('trap-hit');
      await panel(c, floor, { cls: 'event tt-trap', title: 'OUCH', name: 'trap-hit', body: `<p>${esc(T.hit)}</p>`, fuuka: c.navLine('trapHit') });
      return null;
    },
    async altar(c, floor, n) {
      if (n.used) return null;
      const offers = (n.offers || Object.keys(OFFERS).slice(0, 3)).map(k => ({ k, price: offerPrice(k, floor) }));
      const v = await panel(c, floor, { cls: 'clock tt-altar', title: 'A MOON SHRINE', name: 'altar',
        body: `<p>A small stone shrine, an offering box, and a paper lantern that lights as you come close. It grants one blessing.</p><p class="tt-note">You have ${c.yen(c.save.yen)}.</p>`,
        buttons: [{ v: 'no', label: 'Leave it', pink: true }].concat(offers.map(o => ({ v: o.k, label: `${OFFERS[o.k].name} · ${c.yen(o.price)}`, small: OFFERS[o.k].desc, off: c.save.yen < o.price }))), fuuka: c.navLine('altar') });
      const o = offers.find(x => x.k === v);
      if (!o || c.save.yen < o.price) return null;
      c.save.yen -= o.price; OFFERS[o.k].apply(c); n.used = true; c.persist(); c.sfx('unlock'); c.mark('altar-' + o.k);
      c.line([`${OFFERS[o.k].name}… The lantern dims. I think it accepted it.`, 'happy']);
      return null;
    },
    async crack(c, floor, n) {
      if (n.used) return null;
      const monad = n.secret === 'monad';
      const v = await panel(c, floor, { cls: 'event tt-crack', title: monad ? 'THE WALL AT THE TOP' : 'A CRACKED WALL', name: 'crack',
        body: monad ? '<p>The plaster at the very top of the tower is cracked through, and on the other side there’s a draft, and stairs, and blue light going up.</p>' : '<p>The plaster has given way here. Cold air moves through the gap.</p>',
        buttons: [{ v: 'break', label: monad ? 'Climb through' : 'Break through', pink: true }, { v: 'no', label: monad ? 'Not tonight' : 'Leave it' }], fuuka: c.navLine(monad ? 'monadDoor' : 'crackFound') });
      if (v !== 'break') return null;
      const rec = `${floor.id}:${n.secret}`;
      if (!c.save.tt.secrets.includes(rec)) c.save.tt.secrets.push(rec);
      c.persist(); c.sfx('unlock'); c.mark('crack-' + n.secret);
      if (monad) { c.save.tt.monad = true; c.persist(); c.mark('monad-found'); return 'monad'; }
      if (n.secret === 'floor') {
        const w = await panel(c, floor, { cls: 'stairs tt-crack', title: 'A STAIRWELL', name: 'secret-stairs',
          body: '<p>Narrow stairs that aren’t on any of Fuuka’s maps, winding up between the floors. They come out somewhere above.</p>',
          buttons: [{ v: 'go', label: 'Take them', pink: true, small: 'A hidden floor, then the next floor up' }, { v: 'no', label: 'Not now' }], fuuka: c.navLine('secretFloor') });
        if (w !== 'go') return null;
        n.used = true; c.mark('secret-floor');
        return 'secret';
      }
      n.used = true;
      const left = fragsLeft(c);
      if (n.secret === 'memory' && fragsOpen(c) && left.length) { c.say('hiddenRoom'); c.mark('hidden-memory'); await c.memoryFound(pick(c.rand, left)); return null; }
      c.mark('hidden-loot');
      await showLoot(c, floor, loot('hidden', c, floor), { title: 'A HIDDEN ROOM', kicker: 'Behind the wall', name: 'hidden-loot', line: c.navLine('hiddenRoom') });
      return null;
    },
    async event(c, floor, n) {
      if (n.used) return null;
      n.used = true;
      const left = fragsLeft(c);
      if (fragsOpen(c) && left.length && c.rand() < D.events.memoryChance && !window.__ttEvent) { await c.memoryFound(pick(c.rand, left)); return null; }
      const seen = c.run.ttSeen || (c.run.ttSeen = []);
      const fit = EVENTS.filter(e => (!e.who || team(c).includes(e.who)) && (!e.when || e.when(c, floor)) && !seen.includes(e.id));
      const forced = window.__ttEvent && EVENTS.find(e => e.id === window.__ttEvent);
      if (!forced && (!fit.length || c.rand() < 0.15)) {
        c.mark('event-line');
        await panel(c, floor, { cls: 'event', title: '…', body: '', fuuka: D.events.lines[Math.floor(c.rand() * D.events.lines.length)], name: 'event' });
        return null;
      }
      const e = forced || fit[Math.floor(c.rand() * fit.length)];
      seen.push(e.id);
      return runEvent(c, floor, e);
    },
    // The stairs on a hidden floor and in Monad (the other stairs are battle.js's own).
    async stairs(c, floor, n) {
      const next = c.D.floors[c.run.fi + 1];
      if (floor.hiddenFloor) {
        const v = await panel(c, floor, { cls: 'stairs', title: 'STAIRS', name: 'stairs', body: `<p>The narrow stairs climb back into the tower and come out on <b>${esc(next ? next.label : '')}</b>.</p>`,
          buttons: [{ v: 'up', label: 'Go up', pink: true }, { v: 'no', label: 'Not yet' }], fuuka: c.navLine('stairs') });
        return v === 'up' ? 'up' : null;
      }
      if (floor.top || !next || !floorOpen(c, next)) {
        const v = await panel(c, floor, { cls: 'barrier', bg: floor.bg, title: floor.top ? 'THE LAST DOOR' : 'SEALED', name: 'monad-sealed',
          body: floor.top ? '<p>The stairs end at a door with no handle. Whatever is past it isn’t for tonight.</p>' : '<p>The way up is sealed. Monad hasn’t opened any higher yet.</p>',
          buttons: [{ v: 'no', label: 'Back to the map', pink: true }, { v: 'leave', label: 'Leave Tartarus' }], fuuka: c.navLine('sealed') });
        if (v === 'leave') { c.mark('leave'); return 'leave'; }
        return null;
      }
      const v = await panel(c, floor, { cls: 'stairs', title: 'STAIRS', name: 'stairs', body: `<p>The stairs lead up to <b>${esc(next.label)}</b>.</p>`,
        buttons: [{ v: 'up', label: `Go up to ${next.label}`, pink: true }, { v: 'no', label: 'Not yet' }], fuuka: c.navLine('stairs') });
      return v === 'up' ? 'up' : null;
    }
  };
  const ownsStairs = floor => !!(floor.hiddenFloor || floor.secret);

  const REST_PLACES = ['Someone left a folding chair and a lantern here, a long time ago.', 'A dry corner out of the draft, with a bench nobody should have been able to carry up here.', 'The floor is warm here, as if the tower remembers sunlight.'];
  const REST = {
    akihiko: ['Two minutes. Stretch, breathe, then we go again.', 'Hydrate. I mean it.'],
    yukari: ['Okay, sit. Let me look at that arm.', 'I’m not moving until everyone’s had water.'],
    junpei: ['Dude, I could nap right here. Like, for real.', 'Five more minutes, Mom… kidding! Kidding.'],
    mitsuru: ['Rest while you can. We’ll need it.', 'A short break is efficient. Use it.'],
    aigis: ['I will keep watch. Please rest, Solar.', 'All of you should close your eyes. I do not need to.'],
    koromaru: ['*curls up against Solar’s ankle*', '*sighs and flops over*'],
    ken: ['I’m not tired. …Okay, maybe a little.', 'This is nice. It’s quiet.'],
    shinjiro: ['Sit down before you fall down.', 'Tch. Eat somethin’.'],
    haechan: ['Wake me up if something tries to eat us.', 'Princess, scoot over. That’s my wall.'],
    jungwon: ['Please sit. I’ll stand watch for a minute.', 'You should drink something. I brought extra.'],
    jihoon: ['A break? Finally. A man of my caliber needs rest.', 'Sol, if I fall asleep, carry me with dignity.'],
    minji: ['Hold still. That’s a nice shot. Okay, now rest.', 'This is the first quiet thing I’ve seen all night.']
  };

  /* ══════════ Events: short scenes, a choice, a lost item, a memory echo, someone's moment ══════════
     { id, who (only with that member in the party), when(c, floor), title, body, say: [line, face] (who's line), choices:
     [{ v, label, small, off(c), run(c, floor) → text shown after (or a fight's result word) }] } */
  const steps = (c, n) => { if (c.run.map) c.run.map.steps += n; };
  const giveItem = (c, floor, up = 0) => { const T = D.map.chest.items, id = pick(c.rand, T[Math.min((floor.bi || 0) + up, T.length - 1)]); c.addItem(id, 1); c.persist(); return D.items[id].name; };
  const EVENTS = [
    { id: 'vending', title: 'A VENDING MACHINE', body: 'A vending machine stands against the wall, lit and humming, plugged into nothing.',
      choices: [
        { v: 'buy', label: 'Buy drinks · ¥150', off: c => c.save.yen < 150, run: c => { c.save.yen -= 150; heal(c, 0, 0.15); c.persist(); return 'Cold, sweet, a little flat. Everyone gets 15% SP back.'; } },
        { v: 'kick', label: 'Let Junpei kick it', need: 'junpei', run: c => { if (c.rand() < 0.5) { heal(c, 0, 0.15); return 'Two cans drop. Then four. Junpei takes a bow. Everyone gets 15% SP back.'; } steps(c, 3); return 'It shrieks. Junpei apologizes to it. Something above may have heard: the Reaper comes 3 steps sooner.'; } },
        { v: 'no', label: 'Leave it', run: () => null }] },
    { id: 'bag', title: 'A LOST BAG', body: 'A gym bag on the floor, its strap snapped. Whoever carried it in here was in a coffin when the hour struck.',
      choices: [
        { v: 'take', label: 'Take what’s useful', run: (c, f) => `You find a ${giveItem(c, f)} and leave the rest. It’ll be by the wall when the Dark Hour ends.` },
        { v: 'no', label: 'Leave it zipped', run: () => 'You set it by the wall, where its owner might find it.' }] },
    { id: 'charm', title: 'A DROPPED CHARM', body: 'A good-luck charm on a broken cord, the kind sold at the shrine for exams. Someone lost it on the way up.',
      choices: [
        { v: 'keep', label: 'Keep it for now', run: c => { c.run.ttEdge = (c.run.ttEdge || 0) + 1; return 'It’s silly. Everyone feels a little luckier anyway: the next fight starts with Attack up.'; } },
        { v: 'no', label: 'Hang it on the wall', run: () => 'You loop the cord over a nail. It turns slowly in the draft.' }] },
    { id: 'coffin', title: 'A COFFIN WITH A RIBBON', body: 'A coffin standing on its end, a ribbon tied around it in a careful bow.',
      choices: [
        { v: 'open', label: 'Untie the ribbon', run: async (c, f) => { if (c.rand() < 0.65) return `Inside, on a velvet lining: a ${giveItem(c, f, 1)}.`; return ambush(c, f); } },
        { v: 'no', label: 'Leave it be', run: () => 'Fuuka sounds relieved. “I’d rather not know.”' }] },
    { id: 'doors', title: 'TWO DOORS', body: 'Two doors side by side where there should be a wall. One is warm to the touch. The other is cold.',
      choices: [
        { v: 'warm', label: 'The warm one', run: async (c, f) => { if (c.rand() < 0.6) { const y = Math.round((60 + 40 * (f.bi || 0)) * (2 + c.rand()) / 10) * 10; c.save.yen += y; c.persist(); return `A closet full of somebody’s things, and ${c.yen(y)} in a coat pocket. And a ${giveItem(c, f)}.`; } return ambush(c, f); } },
        { v: 'cold', label: 'The cold one', run: (c, f) => { const y = Math.round((40 + 30 * (f.bi || 0)) / 10) * 10; c.save.yen += y; c.persist(); return `An empty room, frost on the floor, and ${c.yen(y)} frozen to the windowsill.`; } },
        { v: 'no', label: 'Neither', run: () => null }] },
    { id: 'echo', when: c => c.save.memories.length > 0, title: 'AN ECHO', body: c => { const m = c.save.memories.map(id => D.memories.find(x => x.id === id)).filter(Boolean); const x = m[Math.floor(c.rand() * m.length)] || { title: 'Something', text: '' }; return `Solar stops. For one breath the corridor feels like “${x.title}”. ${x.text} Then it’s gone, and the tower is only the tower again.`; },
      choices: [
        { v: 'hold', label: 'Hold onto it', run: c => { heal(c, 0, 0.25, 'solar'); return 'Haenim’s charms ring once, softly. Solar gets 25% SP back.'; } },
        { v: 'no', label: 'Keep walking', run: () => null }] },
    { id: 'mirror', title: 'A TALL MIRROR', body: 'A mirror as tall as a door. It shows the party a second late.',
      choices: [
        { v: 'look', label: 'Look closer', run: c => { OFFERS.sight.apply(c); return 'In the glass the whole floor is laid out, every room, every wall. Then it’s just your reflection again.'; } },
        { v: 'no', label: 'Turn it to the wall', run: () => 'It’s heavier than it looks. Nobody minds not seeing it anymore.' }] },
    { id: 'aki-bar', who: 'akihiko', title: 'A PULL-UP BAR', body: 'Akihiko spots a rusted pull-up bar bolted into the wall, which makes no sense, and is already counting.', say: ['Ten reps. Thirty seconds. Then we move.', 'win'],
      choices: [
        { v: 'join', label: 'Join him', run: c => { c.run.ttEdge = (c.run.ttEdge || 0) + 1; return 'Ten reps. Everyone’s warmed up: the next fight starts with Attack up.'; } },
        { v: 'no', label: '“We’re on a clock, senpai.”', run: () => 'He drops down, grinning. “Fair. Later, then.”' }] },
    { id: 'yuka-check', who: 'yukari', title: 'A QUICK CHECK', body: 'Yukari makes everyone stop and hold still.', say: ['Nobody leaves this room with a cut I didn’t look at.', 'idle'],
      choices: [{ v: 'ok', label: 'Hold still', run: c => { heal(c, 0.1, 0); return 'Bandages, a spray that stings, a lecture. Everyone gets 10% HP back.'; } }] },
    { id: 'jun-ball', who: 'junpei', title: 'A BASEBALL', body: 'Junpei picks a baseball up off the floor and turns it over like it’s treasure.', say: ['No way. A baseball? In here? Dude, that’s a sign.', 'win'],
      choices: [{ v: 'ok', label: '“Sure, Junpei.”', run: c => { c.run.ttEdge = (c.run.ttEdge || 0) + 1; return 'He’s fired up, and it’s catching: the next fight starts with Attack up.'; } }] },
    { id: 'mit-plan', who: 'mitsuru', title: 'A READ ON THE FLOOR', body: 'Mitsuru studies the angles of the corridor for a long moment.', say: ['The stairs will be this way. Follow me.', 'idle'],
      choices: [{ v: 'ok', label: 'Follow her', run: c => { routeToStairs(c); return 'She’s right, of course. The way to the stairs is marked on the map.'; } }] },
    { id: 'aig-heat', who: 'aigis', title: 'A HEAT SIGNATURE', body: 'Aigis tilts her head at a blank stretch of wall.', say: ['There is a heat source behind this wall. It is either treasure or a Shadow.', 'idle'],
      choices: [
        { v: 'check', label: 'Check it', run: async (c, f) => (c.rand() < 0.7 ? `Treasure. A ${giveItem(c, f, 1)}, still warm.` : ambush(c, f)) },
        { v: 'no', label: 'Trust the wall', run: () => '“Understood. I will remember this wall.”' }] },
    { id: 'koro-dig', who: 'koromaru', title: 'A LOOSE TILE', body: 'Koromaru paws at a loose floor tile, tail going hard.', say: ['*digs, then looks up proudly*', 'win'],
      choices: [{ v: 'ok', label: 'Let him dig', run: (c, f) => `Under the tile: a ${giveItem(c, f)}. Good boy.` }] },
    { id: 'ken-sticker', who: 'ken', title: 'A STICKER', body: 'Ken finds a Featherman sticker on the wall, half peeled off.', say: ['It’s Feather Red. That has to be a good sign.', 'win'],
      choices: [{ v: 'ok', label: '“It definitely is.”', run: c => { c.carryEach(u => { u.th = Math.min(100, (u.th || 0) + 10); }); return 'Everyone’s Theurgy gauge rises a little.'; } }] },
    { id: 'shin-onigiri', who: 'shinjiro', title: 'A RICE BALL', body: 'Shinjiro looks Solar over, then pulls a wrapped rice ball out of his coat.', say: ['Eat. You look like hell.', 'idle'],
      choices: [{ v: 'ok', label: 'Eat it', run: c => { heal(c, 0.2, 0.2, 'solar'); return 'Salted plum. Solar gets 20% HP and SP back.'; } }] },
    { id: 'hc-piano', who: 'haechan', title: 'A PIANO', body: 'An upright piano stands in the middle of the room, out of tune. Haechan plays four bars without asking anyone.', say: ['What? It looked sad. Someone had to.', 'win'],
      choices: [{ v: 'ok', label: 'Listen', run: c => { heal(c, 0, 0.1); return 'It’s off-key and it’s lovely. Everyone gets 10% SP back.'; } }] },
    { id: 'jw-frame', who: 'jungwon', title: 'A CROOKED FRAME', body: 'Jungwon straightens a crooked frame on the wall, then checks whether anyone saw him do it.', say: ['…It was bothering me.', 'idle'],
      choices: [{ v: 'ok', label: 'Say nothing', run: (c, f) => { const y = Math.round((80 + 60 * (f.bi || 0)) / 10) * 10; c.save.yen += y; c.persist(); return `Something slides out from behind the frame: a coin purse with ${c.yen(y)} in it.`; } }] },
    { id: 'jh-capsule', who: 'jihoon', title: 'A CAPSULE', body: 'A gacha capsule rolls across the floor and stops at Jihoon’s foot.', say: ['Sol. Sol. It’s a sign. The universe wants me to win.', 'win'],
      choices: [{ v: 'ok', label: 'Open it', run: c => { if (c.HO && D.items.capsule_ticket) { c.addItem('capsule_ticket', 1); c.persist(); return 'Inside: a Capsule Ticket. Jihoon is unbearable about it.'; } c.save.yen += 500; c.persist(); return `Inside: ${c.yen(500)}, folded very small.`; } }] },
    { id: 'mj-frame', who: 'minji', title: 'A FRAME', body: 'Minji stops and frames the corridor between her fingers.', say: ['Hold on. The light up ahead is weird. Like something’s there.', 'idle'],
      choices: [{ v: 'ok', label: 'Look where she’s looking', run: c => { const f = lookAround(c, 2); return f ? 'She’s right: there’s a hollow behind the wall up ahead.' : 'The rooms ahead come into focus on the map.'; } }] }
  ];
  async function runEvent(c, floor, e) {
    c.mark('event'); c.mark('event-' + e.id);
    const body = typeof e.body === 'function' ? e.body(c, floor) : e.body;
    const ch = e.choices.filter(x => !x.need || team(c).includes(x.need));
    const v = await panel(c, floor, { cls: 'event tt-event', title: e.title, name: 'event', body: `<p>${esc(body)}</p>${e.who && e.say ? sayHtml(c, e.who, e.say[0], e.say[1]) : ''}`,
      buttons: ch.map((x, i) => ({ v: x.v, label: x.label, small: x.small, pink: i === 0, off: x.off ? x.off(c) : false })) });
    const x = ch.find(y => y.v === v) || ch[ch.length - 1];
    const out = await x.run(c, floor);
    if (out === 'over' || out === 'savepoint') return out;
    if (['win', 'escaped', 'fled'].includes(out)) { if (out === 'escaped') { c.MAP.retreat(c.run.map); c.say('escape'); } return null; }
    c.persist();
    if (out) await panel(c, floor, { cls: 'event tt-event', title: e.title, name: 'event-out', body: `<p>${esc(out)}</p>` });
    return null;
  }
  function routeToStairs(c) { const map = c.run.map, { prev } = c.MAP.bfs(map, map.stairs); let k = map.pos, i = 0; while (k && k !== map.stairs && i++ < 40) { const n = c.MAP.get(map, k); n.seen = n.known = true; n.route = true; k = prev[k]; } }
  function lookAround(c, depth) { const map = c.run.map, { dist } = c.MAP.bfs(map, map.pos); let found = 0; map.nodes.forEach(n => { if (dist[n.id] <= depth) { if (n.hidden && !n.found) { n.found = true; found++; } n.seen = n.known = true; } }); return found; }

  /* ══════════ Puzzles: quick, light logic, a move or mistake budget (so every one ends) ══════════
     gen(seed, bi) → a puzzle with its `solution`; solve(p) checks one from scratch (tests). */
  const rng = seed => { let a = seed >>> 0 || 1; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  const LAMPS = [['#ff4f9e', 'rose'], ['#7dffc0', 'jade'], ['#ffd36b', 'gold'], ['#8ab4ff', 'blue']];
  const DIRS = { U: [0, -1, '↑', 'Up'], D: [0, 1, '↓', 'Down'], L: [-1, 0, '←', 'Left'], R: [1, 0, '→', 'Right'] };
  const ROMAN = n => (n === 0 ? '0' : ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI'][n]);
  const ARC = ['Fool', 'Magician', 'Priestess', 'Empress', 'Emperor', 'Hierophant', 'Lovers', 'Chariot', 'Justice', 'Hermit', 'Fortune', 'Strength', 'Hanged Man', 'Death', 'Temperance', 'Devil', 'Tower', 'Star', 'Moon', 'Sun', 'Judgement', 'World'];
  const SW_RULES = {
    asc: ['From the least to the greatest.', (a, b) => a - b],
    desc: ['The greatest bows first, the least goes last.', (a, b) => b - a],
    odd: ['The odd lead and the even follow, each in turn from the least.', (a, b) => ((a % 2 ? 0 : 1) - (b % 2 ? 0 : 1)) || a - b]
  };
  function slideFrom(p, [x, y], d) { const [dx, dy] = DIRS[d]; let nx = x, ny = y; for (;;) { const tx = nx + dx, ty = ny + dy; if (tx < 0 || ty < 0 || tx >= p.w || ty >= p.h || p.rocks.some(r => r[0] === tx && r[1] === ty)) break; nx = tx; ny = ty; } return [nx, ny]; }
  function slideSolve(p) {
    const key = q => q[0] + ',' + q[1], seen = { [key(p.start)]: [] }, q = [p.start];
    while (q.length) { const cur = q.shift(); if (cur[0] === p.goal[0] && cur[1] === p.goal[1]) return seen[key(cur)]; Object.keys(DIRS).forEach(d => { const nx = slideFrom(p, cur, d); if (seen[key(nx)] == null) { seen[key(nx)] = seen[key(cur)].concat(d); q.push(nx); } }); }
    return null;
  }
  const PUZZLES = {
    lantern: { title: 'THE LANTERNS', name: 'lantern sequence', small: 'Watch, then repeat', intro: 'Four paper lanterns hang in a row. As you come in they light up one by one, then go dark.', how: 'Watch the order they light in, then light them the same way. Two wrong tries and they stay dark.',
      gen(seed, bi = 0) { const R = rng(seed), len = 3 + Math.min(2, Math.floor(bi / 2)), seq = []; while (seq.length < len) { const i = Math.floor(R() * 4); if (i !== seq[seq.length - 1]) seq.push(i); } return { kind: 'lantern', seq, solution: seq.slice(), tries: 2 }; },
      solve: p => p.seq.slice() },
    slide: { title: 'THE SLIDING ROUTE', name: 'sliding route', small: 'Slide the stone to the mark', intro: 'A stone on a polished floor, and a glowing mark it wants to reach. Push it and it slides until something stops it.', how: 'Slide the stone (arrow keys or the arrows) until it stops on the mark. It only stops at a wall or a block.',
      gen(seed, bi = 0) {
        const R = rng(seed), w = bi >= 4 ? 6 : 5, h = w, lo = 3, hi = bi >= 3 ? 6 : 5;
        for (let k = 0; k < 400; k++) {
          const cells = []; for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) cells.push([x, y]);
          const take = () => cells.splice(Math.floor(R() * cells.length), 1)[0];
          const rocks = []; const nr = 4 + Math.floor(R() * 4); for (let i = 0; i < nr; i++) rocks.push(take());
          const p = { kind: 'slide', w, h, rocks, start: take(), goal: take() };
          const sol = slideSolve(p);
          if (sol && sol.length >= lo && sol.length <= hi) return Object.assign(p, { solution: sol, budget: sol.length + 3 });
        }
        const p = { kind: 'slide', w: 5, h: 5, rocks: [[2, 0], [4, 2], [0, 3]], start: [0, 0], goal: [4, 1] }; return Object.assign(p, { solution: slideSolve(p), budget: slideSolve(p).length + 3 });
      },
      solve: p => slideSolve(p) },
    switch: { title: 'THE SWITCHES', name: 'switch order', small: 'Read the inscription', intro: 'Four switches in a stone panel, each under a tarot numeral. An inscription runs along the top.', how: 'Press them in the order the inscription asks. A wrong one resets the panel. Three wrong and it seizes up.',
      gen(seed) { const R = rng(seed), nums = []; while (nums.length < 4) { const v = Math.floor(R() * 22); if (!nums.includes(v)) nums.push(v); } const rule = ['asc', 'desc', 'odd'][Math.floor(R() * 3)]; const order = nums.map((v, i) => i).sort((a, b) => SW_RULES[rule][1](nums[a], nums[b])); return { kind: 'switch', nums, rule, text: SW_RULES[rule][0], solution: order, tries: 3 }; },
      solve: p => p.nums.map((v, i) => i).sort((a, b) => SW_RULES[p.rule][1](p.nums[a], p.nums[b])) }
  };
  let state = null;
  function playPuzzle(c, floor, n) {
    const Z = PUZZLES[n.puzzle] || PUZZLES.lantern, p = Z.gen(n.seed || 1, floor.bi || 0);
    state = { kind: p.kind, solution: p.solution.slice(), puzzle: p, done: false, ok: null };
    return new Promise(resolve => {
      let sel = 0, busy = false, fin = false, mistakes = 0, pos = 0, used = 0, at = p.start ? p.start.slice() : null;
      const pressed = [];
      const board = () => {
        if (p.kind === 'lantern') return `<div class="tt-lamps">${LAMPS.map(([col, nm], i) => `<button type="button" class="tt-lamp" data-i="${i}" style="--c:${col}" aria-label="The ${nm} lantern"><i></i></button>`).join('')}</div>`;
        if (p.kind === 'switch') return `<p class="tt-inscr">“${esc(p.text)}”</p><div class="tt-sws">${p.nums.map((v, i) => `<button type="button" class="tt-sw" data-i="${i}" aria-label="${esc(ARC[v])}, ${v}"><b>${ROMAN(v)}</b><small>${esc(ARC[v])}</small><i></i></button>`).join('')}</div>`;
        const cells = []; for (let y = 0; y < p.h; y++) for (let x = 0; x < p.w; x++) { const rock = p.rocks.some(r => r[0] === x && r[1] === y), goal = p.goal[0] === x && p.goal[1] === y; cells.push(`<i class="${rock ? 'rock' : ''}${goal ? ' goal' : ''}"></i>`); }
        return `<div class="tt-grid" style="--w:${p.w};--h:${p.h}">${cells.join('')}<b class="tt-stone" style="--x:${at[0]};--y:${at[1]}"></b></div><div class="tt-dirs">${['L', 'U', 'D', 'R'].map(d => `<button type="button" class="tt-dir" data-d="${d}" aria-label="Slide ${DIRS[d][3]}">${DIRS[d][2]}</button>`).join('')}</div>`;
      };
      const el = c.show(`<div class="bt-room-bg" style="background-image:url('${floor.bg}')"></div><div class="bt-room-shade"></div>
        <div class="bt-room-in tt-pz-in"><p class="bt-kicker">${esc(kick(floor))} · Puzzle</p><h1>${esc(Z.title)}</h1>
          <div class="tt-pz-board tt-pz-${p.kind}">${board()}</div>
          <p class="tt-pz-status" aria-live="polite"></p>
          <div class="row"><button type="button" class="bt-btn" data-pz="quit"><span>Give up</span></button></div></div>`, `bt-room tt-pz tt-pz-${p.kind}`);
      const status = el.querySelector('.tt-pz-status'), setS = t => { status.textContent = t; };
      const items = () => [...el.querySelectorAll(p.kind === 'lantern' ? '.tt-lamp' : p.kind === 'switch' ? '.tt-sw' : '.tt-dir')];
      const paint = () => items().forEach((b, i) => b.classList.toggle('sel', i === sel));
      const end = ok => { if (fin) return; fin = true; state.done = true; state.ok = ok; c.mark(ok ? 'puzzle-solved' : 'puzzle-failed'); c.sfx(ok ? 'unlock' : 'back'); setS(ok ? 'Solved!' : 'It locks up.'); c.setCtl(null); setTimeout(() => resolve(ok), Math.round(650 / Math.max(1, c.speed()))); };
      const left = () => (p.kind === 'slide' ? `Moves left: ${p.budget - used}` : `Wrong tries left: ${(p.tries - mistakes)}`);
      // Lanterns: play the sequence, then wait for it back.
      async function playSeq() {
        busy = true; el.classList.add('watch'); setS('Watch…'); state.phase = 'watch';
        await c.sleep(450);
        for (const i of p.seq) { const L = el.querySelector(`.tt-lamp[data-i="${i}"]`); L.classList.add('lit'); c.sfx('move'); await c.sleep(520); L.classList.remove('lit'); await c.sleep(180); }
        el.classList.remove('watch'); busy = false; pos = 0; state.phase = 'input'; setS(`Your turn. ${left()}`); c.mark('puzzle-ready');
      }
      async function press(i) {
        if (busy || fin) return;
        if (p.kind === 'lantern') {
          const L = el.querySelector(`.tt-lamp[data-i="${i}"]`);
          L.classList.add('lit'); setTimeout(() => L.classList.remove('lit'), 260);
          if (p.seq[pos] === i) { pos++; c.sfx('ok'); if (pos >= p.seq.length) return end(true); setS(`${pos} of ${p.seq.length}. ${left()}`); return; }
          mistakes++; c.sfx('back'); c.mark('puzzle-miss');
          if (mistakes >= p.tries) return end(false);
          setS(`Wrong. Watch again. ${left()}`); await c.sleep(500); return playSeq();
        }
        if (p.kind === 'switch') {
          const b = el.querySelector(`.tt-sw[data-i="${i}"]`);
          if (pressed.includes(i)) return;
          if (p.solution[pressed.length] === i) {
            pressed.push(i); b.classList.add('on'); c.sfx('ok');
            if (pressed.length >= 4) return end(true);
            const nx = [0, 1, 2, 3].find(k => !pressed.includes(k)); if (nx != null) { sel = nx; paint(); }
            setS(`${pressed.length} of 4. ${left()}`); return;
          }
          mistakes++; c.sfx('back'); c.mark('puzzle-miss'); pressed.length = 0; el.querySelectorAll('.tt-sw').forEach(x => x.classList.remove('on'));
          if (mistakes >= p.tries) return end(false);
          sel = (sel + 1) % 4; paint(); setS(`The panel clicks back. ${left()}`); return;
        }
      }
      function slide(d) {
        if (fin || !DIRS[d]) return;
        const nx = slideFrom(p, at, d);
        if (nx[0] === at[0] && nx[1] === at[1]) { c.sfx('back'); used++; } else { at = nx; used++; c.sfx('move'); const s = el.querySelector('.tt-stone'); s.style.setProperty('--x', at[0]); s.style.setProperty('--y', at[1]); }
        state.at = at.slice(); state.used = used;
        if (at[0] === p.goal[0] && at[1] === p.goal[1]) return end(true);
        if (used >= p.budget) return end(false);
        setS(left());
      }
      const act = i => (p.kind === 'slide' ? slide(['L', 'U', 'D', 'R'][i]) : press(i));
      el.querySelectorAll('.tt-lamp, .tt-sw').forEach(b => b.addEventListener('click', () => { sel = +b.dataset.i; paint(); press(+b.dataset.i); }));
      el.querySelectorAll('.tt-dir').forEach(b => b.addEventListener('click', () => { slide(b.dataset.d); }));
      el.querySelector('[data-pz=quit]').addEventListener('click', () => { c.mark('puzzle-quit'); end(false); });
      // Keys: ←→ pick, Enter presses (the slide puzzle: arrows slide the stone). kind 'buttons' so the page's other drivers treat it like a panel.
      c.setCtl({ kind: 'buttons', puzzle: p.kind,
        move(d) { const n2 = items().length; sel = (sel + (d > 0 ? 1 : -1) + n2) % n2; c.sfx('move'); paint(); },
        pick() { act(sel); },
        back() { c.mark('puzzle-quit'); end(false); },
        key(e) { if (p.kind !== 'slide') return false; const k = { ArrowUp: 'U', ArrowDown: 'D', ArrowLeft: 'L', ArrowRight: 'R' }[e.key]; if (!k) return false; slide(k); return true; } });
      paint();
      c.mark('puzzle-open');
      if (p.kind === 'lantern') playSeq(); else { state.phase = 'input'; setS(left()); c.mark('puzzle-ready'); }
    });
  }

  /* ══════════ Chatter while exploring ══════════ */
  const BLOCK_LINES = {
    thebel: ['Thebel’s quiet tonight. Well… quiet for Tartarus.', 'These floors still remember being a school. Can you tell?'],
    arqa: ['Arqa’s walls keep changing color. It’s almost pretty.', 'Something on this block hums, like a song stuck on one note.'],
    yabbashah: ['Please don’t touch the walls here.', 'Watch the floor in Yabbashah. It likes traps.'],
    tziah: ['So many mirrors… I keep counting more of you than there are.', 'Some of these walls are thinner than they look.'],
    harabah: ['The Shadows in Harabah hit hard, but they guard good treasure.', 'There’s gold in the cracks up here. Real gold, I think.'],
    adamah: ['Adamah is quiet in a way I don’t like.', 'I keep catching something golden at the edge of my scan.'],
    empyrean: ['We’re close to the top. The air feels thin, even to me.', 'Every reading up here is loud. Stay close.'],
    monad: ['None of this is on my maps. It shouldn’t exist.', 'Monad… the readings here feel like they’re from another tower.']
  };
  const BANTER = {
    akihiko: ['This floor has a decent incline. Good for sprints.', 'Stay sharp. The next room could be anything.', 'Your guard’s slipping on the left. …Better.'],
    yukari: ['This place gives me the creeps every single time.', 'Anyone hurt? Tell me now, not after the fight.', 'Can we find the stairs before my feet fall off?'],
    junpei: ['Yo, how many floors does this thing even have?', 'Calling it now. Treasure in the next room.', 'Man, I could go for some ramen after this.'],
    mitsuru: ['Keep formation. We don’t know this floor yet.', 'Fuuka, mark anything unusual. I’d rather not be surprised.', 'Good pace. Let’s keep it.'],
    aigis: ['No hostiles within ten meters.', 'Solar, I will walk on your left. It is the side you watch less.', 'This floor’s layout is irregular. Fascinating.'],
    koromaru: ['*sniffs the air, tail low*', '*trots ahead, then waits for you*', 'Woof!'],
    ken: ['I can keep up. Don’t slow down for me.', 'Is it always this quiet before something happens?', 'I’ll watch our backs.'],
    shinjiro: ['Tch. Long night.', 'Don’t wander off.', '…You’re doin’ fine. Keep movin’.'],
    haechan: ['Princess, if there’s another mirror room, I’m leaving.', 'Who decided stairs were a good idea. Who.', 'I hate how used to this I’m getting.'],
    jungwon: ['Please watch your step. The floor’s uneven here.', 'I counted the turns. We haven’t doubled back.', 'If you’re tired, say so. I won’t think less of you.'],
    jihoon: ['The almighty Hoon has found… nothing. Yet.', 'Sol, if there’s treasure, I get first look. Joking. Mostly.', 'This tower has zero respect for my cardio.'],
    minji: ['The light up here is unreal. I wish I could film it.', 'Sol, stay in frame. I mean, stay close.', 'Something’s off about that wall. Maybe.']
  };
  function faceFor(c, who, k = 'idle') { const m = c.member(who); return (m && m.faces && (m.faces[k] || m.faces.idle)) || 'neutral'; }
  function chatter(c, floor) {
    const mates = team(c).filter(id => id !== 'solar' && BANTER[id]);
    if (mates.length && c.rand() < 0.6) { const who = pick(c.rand, mates); c.line([pick(c.rand, BANTER[who]), faceFor(c, who, c.rand() < 0.5 ? 'idle' : 'win'), who]); c.mark('banter'); c.mark('banter-' + who); return true; }
    const L = BLOCK_LINES[floor.blockId];
    if (L) { c.line([pick(c.rand, L), 'neutral']); c.mark('chatter'); return true; }
    return false;
  }
  /* After every step on the map: hidden rooms noticed in passing, golden Shadows running off, Fuuka pointing out new rooms,
     and now and then someone talking. Lines never pile up: one a step at most. */
  function afterMove(c, floor = c.floor) {
    const map = c.run.map, here = c.MAP.get(map, map.pos), said = map.ttSaid || (map.ttSaid = {});
    let line = false;
    const say = k => { if (line) return; c.say(k); line = true; };
    const sharp = team(c).some(id => id === 'minji' || id === 'aigis') ? 0.2 : 0;
    here.links.map(id => c.MAP.get(map, id)).forEach(n => { if (n.hidden && !n.found && c.rand() < 0.3 + sharp) { c.MAP.find(map, n.id); c.mark('crack-noticed'); say(n.secret === 'monad' ? 'monadDoor' : 'crackFound'); } });
    map.nodes.forEach(n => {
      if (n.type !== 'rare' || n.cleared || n.gone || !n.known) return;
      if (n.flee == null) { n.flee = 4; say('rareSpot'); c.mark('rare-spotted'); return; }
      if (n.id === map.pos) return;
      if (--n.flee <= 0) { n.gone = true; n.type = 'empty'; c.mark('rare-gone'); say('rareGone'); }
    });
    [['guardian', 'guardianSpot'], ['vault', 'vaultSpot'], ['altar', 'altar']].forEach(([t, k]) => { if (!said[t] && map.nodes.some(n => n.type === t && n.known && !n.cleared && !n.opened && !n.used)) { said[t] = true; say(k); } });
    if (map.shortcut && !said.shortcut && map.shortcut.every(id => c.MAP.get(map, id).known)) { said.shortcut = true; say('shortcut'); }
    if (!said.stairs && here.links.includes(map.stairs)) { said.stairs = true; if (c.rand() < 0.5) say('stairsNear'); }
    if (!line) { map.ttQuiet = (map.ttQuiet || 0) + 1; if (map.ttQuiet >= 3 && c.rand() < 0.5) { map.ttQuiet = 0; line = chatter(c, floor); } }
    return line;
  }
  function afterScan(c, out) {
    if (out && out.found && out.found.length) { c.say(out.found.some(n => n.secret === 'monad') ? 'monadDoor' : 'crackFound'); c.mark('scan-found'); return true; }
    if (out && out.traps && out.traps.length) { c.say('trapSpot'); c.mark('scan-trap'); return true; }
    return false;
  }
  /* The side panel's text for a room Fuuka can read. */
  function info(n, c) {
    const t = look(n);
    if (t === 'guardian') { const d = D.enemies[(n.group || [n.kind || ''])[0].split('@')[0]] || {}; return n.cleared ? '<b>Guardian</b><span>Beaten. The way to the stairs is clear.</span>' : `<b>Guardian</b><span>${esc(d.name || 'Guardian')} · it blocks the stairs. Strong; beat it once.</span>`; }
    if (t === 'vault') return `<b>Vault</b><span>${n.opened ? 'Opened.' : 'Sealed. A Tartarus Key opens it, or beat its guards.'}</span>`;
    if (t === 'puzzle') return `<b>Puzzle</b><span>${n.used ? 'Done here.' : `A ${esc((PUZZLES[n.puzzle] || PUZZLES.lantern).name)}. Solve it for a chest.`}</span>`;
    if (t === 'rest') return `<b>Rest spot</b><span>${n.used ? 'You rested here.' : 'Recover 35% HP and SP. Once.'}</span>`;
    if (t === 'rare') { const d = D.enemies[(n.group || ['golden_hand'])[0].split('@')[0]] || {}; return n.cleared ? '<b>Rare Shadow</b><span>Caught.</span>' : `<b>Rare Shadow</b><span>${esc(d.name || 'A golden Shadow')} · big rewards. It runs${n.flee != null ? ` in ${n.flee} move${n.flee === 1 ? '' : 's'}` : ''}, and on round 3 of a fight.</span>`; }
    if (t === 'trap') return `<b>Trap</b><span>${n.used ? 'Sprung.' : `${esc((TRAPS[n.trap] || TRAPS.spikes).name)}. Step around it (a check) or brace for half.`}</span>`;
    if (t === 'altar') return `<b>Moon shrine</b><span>${n.used ? 'It has given its blessing.' : 'Pay yen for one blessing tonight.'}</span>`;
    if (t === 'crack') return `<b>${n.secret === 'monad' ? 'The wall at the top' : 'Cracked wall'}</b><span>${n.used ? 'Broken through.' : n.secret === 'monad' ? 'The tower goes on behind it.' : 'Something is behind it.'}</span>`;
    return null;
  }
  // The map's goal line: the stairs, and the side rooms found and done on this floor.
  function goal(map) {
    const side = map.nodes.filter(n => SIDE.includes(n.type) && n.known && (!n.hidden || n.found));
    const done = side.filter(sideDone).length;
    return { side: side.length, done, stairs: map.nodes.find(n => n.id === map.stairs).visited };
  }

  return { ROOMS, look, SIDE, sideDone, plan, dress, hiddenFloor, rooms, ownsStairs, monadOpen, floorOpen, afterMove, afterScan, chatter, info, goal,
    loot, grant, lootHtml, battleMods, expBoost, TRAPS, OFFERS, EVENTS, BANTER, BLOCK_LINES, REST, puzzles: PUZZLES, slideSolve, rng,
    get state() { return state; } };
})();
