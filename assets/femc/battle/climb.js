/* FEMC Tartarus, the New Game+ climb (2026-10-31, finish roadmap section 5): the floors past Monad, 255F to 400F. Loaded after
   tartarus.js in both pages (the life sim's menu needs the Shadows). The blocks themselves are data.js's (Raqia 255-300,
   Zebul 301-350, Araboth 351-399, the Zenith 400; `secret` + `ngp`), so the floors, landings, gates and guardians come out of
   the same builder as every other block; this file adds what's theirs:
   - open(c): whether the climb exists for this save. Story: New Game+ only (request.ngp from core.js yearRequest, or the battle
     save's own `ngp`, which save.js carry() counts up), and the calendar decides the floors (calendar.js ngpFloorCaps, read by
     core.js floorCap only in New Game+: 300F from 1/9, 350F from 1/31, 400F from 2/14). Practice: once this browser has a
     finished playthrough (core.js recordClear's 'kg-femc-revamp-clears') or the practice save itself carries `ngp`. tartarus.js
     floorOpen asks here for any `ngp` floor; Monad's own rules (Fortune cleared, found) still apply under it.
   - Shadows: each world's memory-floor Shadows grown into regulars (three a world, `kin`), the three block guardians, and the
     Zenith's superboss with its escorts. Difficulty is set by floor: Raqia's pools run Lv 60-74, Zebul's 73-87, Araboth's 86-99;
     guardians 75 / 88 / 99; the superboss 104 (two actions a turn, three in its last phase; three phases, an escort each, Light
     and Dark shrugged off, statuses too; engine.js gimmick 'zenith').
   - Scenes (SCENES, play): eight short ones in rooms panels, each once per playthrough (save.tt.climb; New Game+ starts over,
     like tt.guardians): a block's first floor (arrive), its summit floor (summit), the Zenith's arrival, and the superboss's
     first fall. Lines: { n } narration, { pick: [{ who, t, face }] } the first one whose speaker is in the party ('*' = anyone
     but Solar and Koromaru), { solar }, { nav } (Fuuka, at most one a page, shown at the bottom). tartarus.js arrive() asks
     onArrive(c, floor) first; rooms.super calls afterSuper(c, floor, kind, first).
   - Events (pushed onto FemcTartarus.EVENTS, `when` = the block): six per block in that world's flavour, three on the Zenith.
   - Fuuka's lines (D.nav block_<id>, climbDoor, climbWait, zenithTop) and her chatter (FemcTartarus.BLOCK_LINES).
   Test hooks: FemcClimb.SCENES, FemcClimb.open(c), FemcClimb.play(c, floor, id), window.__climbOpen (true / false overrides
   open() in practice). */
window.FemcClimb = (() => {
  const D = window.FEMC_BATTLE_DATA, TT = window.FemcTartarus;
  if (!D || !TT) return null;
  const P = D.progression;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  const pick = (R, a) => a[Math.floor(R() * a.length)];

  /* ══════════ Open or not ══════════ */
  const clears = () => { try { return JSON.parse(localStorage.getItem('kg-femc-revamp-clears') || '[]') || []; } catch (e) { return []; } };
  function open(c) {
    if (c.HO) return (+c.HO.request.ngp || 0) > 0 || (+(c.save && c.save.ngp) || 0) > 0;
    if (typeof window.__climbOpen === 'boolean') return window.__climbOpen;
    return (+(c.save && c.save.ngp) || 0) > 0 || clears().length > 0;
  }

  /* ══════════ Shadows ══════════ */
  const S = (lvl, k = {}) => ({ lvl, hp: Math.round((26 + lvl * 13.5) * (k.hp || 1)), st: +(4 + lvl * 0.95 * (k.st || 1)).toFixed(1), ma: +(4 + lvl * 0.95 * (k.ma || 1)).toFixed(1),
    en: +(3 + lvl * 0.7 * (k.en || 1)).toFixed(1), ag: +(4 + lvl * 0.8 * (k.ag || 1)).toFixed(1), lu: +(3 + lvl * 0.5 * (k.lu || 1)).toFixed(1) });
  const IMMUNE = ['charm', 'fear', 'bind', 'freeze', 'shock', 'poison', 'distress'];
  /* Up here a level isn't what it is below: a New Game+ party at 80-99 has a whole sun, its orbits, ★5 cards and an Echo. The
     balance sim (tests/femc_ngclimb.py --only sim: tests/femc_ngclimb_sim.js builds that party and plays whole fights on Rush)
     set these: the climb's regulars ×3 HP and ×2 Strength / Magic over the S() curve, guardians ×6 and ×2.3, the superboss
     ×3 and ×2.8, All-Outs resisted by half or more. EXP ×2.5 and yen ×2 to match. */
  const NG = { hp: 3, atk: 2, guardHp: 6, guardAtk: 2.3, bossHp: 3, bossAtk: 2.8 };
  const scale = (o, hp, atk) => Object.assign(o, { hp: Math.round(o.hp * hp), st: +(o.st * atk).toFixed(1), ma: +(o.ma * atk).toFixed(1) });
  // A world's memory-floor Shadow grown into a regular: its art, smaller; its own weaknesses and stronger skills.
  const kin = (base, lvl, name, note, o) => {
    const b = D.enemies[base], st = S(lvl, Object.assign({ hp: 1.45, st: 1.1, ma: 1.12, en: 1.12, ag: 1.05 }, o.k || {}));
    return Object.assign(o.raw ? st : scale(st, NG.hp, NG.atk), {
      name, arcana: b.arcana, aff: o.aff, skills: o.skills, ai: o.ai || 'random', img: b.img, svg: b.svg, idle: b.idle, h: Math.round((b.h || 240) * (o.size || 0.78)),
      exp: Math.round(P.expFor(lvl) * 2.5), yen: P.yenFor(lvl) * 2, drop: o.drop || 'monad_sand', alloutResist: 0.5, note });
  };
  Object.assign(D.enemies, {
    // Raqia: Syracuse (Runners).
    rq_strobe: kin('flash_shadow', 60, 'Strobe', 'A camera flash that learned to walk. It goes off in your eyes, and when you can see again it’s somewhere else.',
      { aff: { dark: 'weak', elec: 'resist', light: 'resist' }, skills: ['e_ziodyne', 'e_mazionga', 'e_evil_smile', 'e_tarunda'], k: { ag: 1.3, hp: 1.3 } }),
    rq_encore: kin('party_shadow', 61, 'Encore', 'The last song of a party nobody wanted to end. It keeps asking for one more.',
      { aff: { wind: 'weak', fire: 'resist', dark: 'null' }, skills: ['e_maragion', 'e_sexy_dance', 'e_power_slash', 'e_heat_wave'], k: { st: 1.2 } }),
    rq_bellfox: kin('fox_shadow', 63, 'Bell Fox', 'A white fox mask with a bell on its cord. The bell rings a beat before it moves.',
      { aff: { light: 'weak', dark: 'resist', fire: 'resist' }, skills: ['e_agilao', 'e_zionga', 'e_vorpal', 'e_dia', 'e_tarukaja'], k: { ag: 1.35 }, size: 0.85 }),
    // Zebul: Incheon (strangers).
    zb_undertow: kin('tide_shadow', 73, 'Undertow', 'The pull under a calm harbor. It doesn’t hit hard so much as it doesn’t let go.',
      { aff: { elec: 'weak', ice: 'drain', fire: 'resist' }, skills: ['e_bufudyne', 'e_mabufula', 'e_rakunda', 'e_marakunda'], k: { en: 1.25 } }),
    zb_crate: kin('fishmonger', 74, 'Auction Crate', 'Fish-market crates iced shut and sold before dawn to whoever bids lowest. Blades skid off it.',
      { aff: { fire: 'weak', ice: 'null', slash: 'resist', pierce: 'resist' }, skills: ['e_power_slash', 'e_herculean', 'e_mabufula', 'e_rakukaja'], ai: 'weakest', k: { st: 1.25, en: 1.3, ag: 0.85 }, size: 0.95 }),
    zb_veil: kin('veil_poster', 75, 'Wedding Veil', 'A veil with no one under it, drifting toward a date nobody picked.',
      { aff: { wind: 'weak', ice: 'resist', light: 'null' }, skills: ['e_marin_karin', 'e_mabufula', 'e_bufudyne', 'e_mediarama'], ai: 'healer', k: { ma: 1.25 } }),
    // Araboth: Hanlim (HOAX).
    ab_recount: kin('ballot_box', 86, 'The Recount', 'A ballot box that counts every vote twice and gets a different answer each time.',
      { aff: { fire: 'weak', strike: 'resist', dark: 'null' }, skills: ['e_mazionga', 'e_maragion', 'e_ominous', 'e_matarunda'], k: { en: 1.25, hp: 1.55 } }),
    ab_receipt: kin('group_chat', 86, 'Read Receipt', 'Seen, 12:00 AM. A hundred little bubbles, and every one of them knows you read it.',
      { aff: { elec: 'weak', wind: 'resist', dark: 'null' }, skills: ['e_magarula', 'e_garula', 'e_evil_smile', 'e_ominous'], ai: 'exploit', k: { ag: 1.25, hp: 1.2 }, size: 1 }),
    ab_poster: kin('veil_poster', 88, 'Campaign Poster', 'A campaign poster with a smile stapled on. Vote for her. It isn’t asking.',
      { aff: { pierce: 'weak', fire: 'resist', elec: 'resist' }, skills: ['e_agilao', 'e_marin_karin', 'e_tarukaja', 'e_megidola'], k: { ma: 1.25 } })
  });
  // The block guardians: a world's own memory Shadow at the size of the floor.
  const guard = (base, lvl, name, note, o) => {
    const b = D.enemies[base];
    return Object.assign(scale(S(lvl, Object.assign({ hp: 3.6, st: 1.15, ma: 1.15, en: 1.22, ag: 1.06 }, o.k || {})), NG.guardHp, NG.guardAtk), {
      name, arcana: b.arcana, aff: Object.assign({}, b.aff, { light: 'null', dark: 'null' }, o.aff || {}), skills: o.skills, ai: o.ai || 'exploit', // no instant kills img: b.img, svg: b.svg, idle: b.idle, h: Math.round((b.h || 240) * 1.15),
      exp: Math.round(P.expFor(lvl) * 10), yen: P.yenFor(lvl) * 12, drop: 'guardian_crest', dropChance: 1, cls: 'guardian', guardian: true,
      ailImmune: ['charm', 'fear', 'bind', 'freeze'], alloutResist: 0.6, note });
  };
  Object.assign(D.enemies, {
    guard_raqia: guard('party_shadow', 75, 'The Last Song', 'A party grown to the size of the quad. The chorus never comes, so it never ends.',
      { skills: ['e_maragion', 'e_sexy_dance', 'e_herculean', 'e_heat_wave', 'e_tarukaja'] }),
    guard_zebul: guard('tide_shadow', 88, 'The Spring Tide', 'The highest water of the month, standing up in the middle of the floor. The harbor lights are under it somewhere.',
      { skills: ['e_bufudyne', 'e_mabufula', 'e_marakunda', 'e_megidola', 'e_rakunda'] }),
    guard_araboth: guard('ballot_box', 99, 'The Landslide', 'Every vote in the school, cast at once, for the same name. It isn’t yours.',
      { skills: ['e_mazionga', 'e_maragion', 'e_ominous', 'e_megidola', 'e_matarunda'] })
  });
  /* The Zenith's superboss: the tiger from the tale Haenim is named for (the sister and brother who climbed the golden rope and
     became the sun and the moon; the tiger got the rotten rope). Three hills on the road home, one for each of her worlds, are
     its escorts: one stands with it, and each new phase calls the next (engine.js GIMMICKS.zenith reads `phases`). */
  const hill = (base, name, aff, skills) => Object.assign(kin(base, 100, name, 'A hill on the road home. On every hill, in the story, the tiger asked for something.',
    { aff, skills, k: { hp: 2.4, st: 1.15 * 1.4, ma: 1.15 * 1.4, en: 1.2 }, size: 0.9, raw: true }), { drop: 'monad_sand', ailImmune: IMMUNE, alloutResist: 0.5 });
  Object.assign(D.enemies, {
    zn_hill_r: hill('flash_shadow', 'The First Hill', { dark: 'weak', elec: 'resist', light: 'null' }, ['e_ziodyne', 'e_mazionga', 'e_evil_smile', 'e_matarunda']),
    zn_hill_s: hill('tide_shadow', 'The Second Hill', { elec: 'weak', ice: 'drain', light: 'null', dark: 'null' }, ['e_bufudyne', 'e_mabufula', 'e_marakunda', 'e_mediarama']),
    zn_hill_h: hill('ballot_box', 'The Third Hill', { fire: 'weak', strike: 'resist', dark: 'null', light: 'null' }, ['e_maragion', 'e_mazionga', 'e_ominous', 'e_masukunda'])
  });
  (() => {
    const b = D.enemies.beast, lvl = 104;
    D.enemies.super_tiger = Object.assign(scale(S(lvl, { hp: 11, st: 1.3, ma: 1.22, en: 1.32, ag: 1.2, lu: 1.3 }), NG.bossHp, NG.bossAtk), {
      name: 'Horangi', arcana: 'Sun', aff: { ice: 'weak', fire: 'resist', strike: 'resist', light: 'null', dark: 'null' },
      skills: ['e_herculean', 'e_kill_rush', 'e_vorpal', 'e_megidola', 'e_evil_smile', 'e_tarukaja'], ai: 'exploit', acts: 2, gimmick: 'zenith',
      phases: [
        { at: 0.66, summon: ['zn_hill_s'], aff: { fire: 'weak', ice: 'resist', strike: 'resist', light: 'null', dark: 'null' },
          skills: ['e_herculean', 'e_vorpal', 'e_megidola', 'e_mabufula', 'e_marakunda', 'e_tarukaja'],
          line: 'Horangi puts on a voice like a mother calling her children in from the cold. “Open the door. It’s only me.”' },
        { at: 0.33, summon: ['zn_hill_h'], acts: 3, aff: { fire: 'resist', ice: 'resist', strike: 'resist', slash: 'resist', light: 'null', dark: 'null' },
          skills: ['e_herculean', 'e_kill_rush', 'e_megidolaon', 'e_vorpal', 'e_evil_smile', 'e_matarunda'],
          line: 'Horangi takes hold of a rope that isn’t there and starts to climb. It moves faster now. It has no weakness left to hide.' }
      ],
      img: b.img, svg: b.svg, idle: b.idle, h: Math.round((b.h || 170) * 1.7), tint: 'sepia(1) saturate(3.2) hue-rotate(-14deg) brightness(1.08)', escort: ['zn_hill_r'],
      exp: Math.round(P.expFor(lvl) * 14), yen: P.yenFor(lvl) * 20, drop: 'guardian_crest', dropChance: 1, cls: 'superboss', superboss: true,
      ailImmune: IMMUNE, alloutResist: 0.7,
      note: 'The tiger from the tale Haenim is named for. It asked for one rice cake on every hill, and then for everything. It climbed the wrong rope once. It has had a long time to look for the right one.' });
  })();

  /* ══════════ Fuuka ══════════ */
  Object.assign(D.nav, {
    block_raqia: ['Raqia… The readings up here are warm. Like a room someone just left.', 'surprised'],
    block_zebul: ['Zebul. I can hear water, a lot of it, somewhere under the floor.', 'surprised'],
    block_araboth: ['Araboth. There are so many voices on this floor, and they’re all talking about you.', 'surprised'],
    block_zenith: ['This is the top. There’s nothing above us. Nothing at all.', 'surprised'],
    climbDoor: ['The door at the top is open… I don’t know what’s past it. I don’t think the tower knows either.', 'surprised'],
    climbWait: ['It gave a little. It isn’t ready yet. Maybe another night.', 'neutral'],
    zenithTop: ['There aren’t any more stairs. We made it. We actually made it.', 'happy']
  });
  Object.assign(TT.BLOCK_LINES, {
    raqia: ['It’s snowing on my scan. Inside the tower. I didn’t know it could do that.', 'Somewhere on this floor there’s music through a wall.', 'Everything up here is orange and navy. Is that… a school’s colors?'],
    zebul: ['The air smells like salt and diesel. I don’t think that’s a Shadow.', 'There’s a tide chart on my readings. It’s going out.', 'Someone up here keeps very careful time.'],
    araboth: ['I keep hearing a phone buzz. Nobody’s phone is buzzing.', 'These floors have rules. I can feel them, like a dress code.', 'The voices are counting something. Votes, maybe.'],
    zenith: ['It’s so bright up here. Please don’t look straight at it.', 'No shadows under anyone. It must be noon.']
  });

  /* ══════════ Events (FemcTartarus.EVENTS format; `when` keeps each set to its block) ══════════ */
  const inB = id => (c, f) => f.blockId === id;
  const heal = (c, hp, sp, only) => c.carryEach(u => { if (only && u.mid !== only) return; u.hp = Math.min(u.maxHp, Math.round(u.hp + u.maxHp * hp)); u.sp = Math.min(u.maxSp, Math.round(u.sp + u.maxSp * sp)); });
  const steps = (c, n) => { if (c.run.map) c.run.map.steps = Math.max(0, c.run.map.steps + n); };
  const edge = (c, n = 1) => { c.run.ttEdge = (c.run.ttEdge || 0) + n; };
  const ward = (c, n = 1) => { c.run.ttWard = (c.run.ttWard || 0) + n; };
  const theurgy = (c, n) => c.carryEach(u => { u.th = Math.min(100, (u.th || 0) + n); });
  const yenGift = (c, base) => { const y = Math.round(base * (1.6 + c.rand()) / 10) * 10; c.save.yen += y; c.persist(); return y; };
  const giveItem = c => { const T = D.map.chest.items, id = pick(c.rand, T[T.length - 1]); c.addItem(id, 1); c.persist(); return D.items[id].name; };
  const reveal = c => { const map = c.run.map; if (!map) return 0; const { dist } = c.MAP.bfs(map, map.pos); let n = 0; map.nodes.forEach(x => { if (dist[x.id] <= 3) { if (x.hidden && !x.found) { x.found = true; n++; } x.seen = x.known = true; } }); return n; };
  const ambush = (c, f) => c.fight({ group: pick(c.rand, f.pool).slice() });
  const EVENTS = [
    // Raqia (Syracuse)
    { id: 'rq-snow', when: inB('raqia'), title: 'SNOW, INDOORS', body: 'Snow is falling in the corridor, out of a ceiling that has no sky in it. It settles on the floor in a perfect, untouched sheet, the way a quad looks at six in the morning before anyone has walked across it.',
      choices: [
        { v: 'walk', label: 'Walk across it first', run: c => { edge(c); return 'Solar’s footprints go across it in a straight line. It feels like something she has done before, early, on purpose. The next fight starts with Attack up.'; } },
        { v: 'around', label: 'Go around the edge', run: c => { heal(c, 0, 0.15); return 'Nobody steps on it. The corridor is quiet in the way only snow is quiet. Everyone gets 15% SP back.'; } }] },
    { id: 'rq-wall', when: inB('raqia'), title: 'MUSIC THROUGH A WALL', body: 'Bass through a wall, the kind that makes the floor hum. Laughter after it, a door banging, someone shouting a name that is almost Solar’s.',
      choices: [
        { v: 'knock', label: 'Knock', run: async (c, f) => (c.rand() < 0.5 ? `The music stops. Under the door slides a red cup with ${c.yen(yenGift(c, 900))} folded in it, and the music starts again.` : ambush(c, f)) },
        { v: 'no', label: 'Keep walking', run: c => { steps(c, -3); return 'Nobody comes out. The Reaper, wherever it is, seems to be listening to the music too: 3 steps further off.'; } }] },
    { id: 'rq-bell', when: inB('raqia'), title: 'A BELL TOWER', body: 'A bell tower stands in the middle of the room, far too tall for it, its top lost somewhere above. The bell starts to ring the hour. It doesn’t stop at twelve.',
      choices: [
        { v: 'count', label: 'Count the rings', run: c => { theurgy(c, 15); return 'Thirteen. Haenim’s gold bell rings back once, very softly, as if answering a name. Everyone’s Theurgy gauge rises.'; } },
        { v: 'cover', label: 'Cover your ears', run: c => { heal(c, 0.1, 0); return 'It rings itself out. The silence after is enormous, and kind. Everyone gets 10% HP back.'; } }] },
    { id: 'rq-hc-coffee', who: 'haechan', when: inB('raqia'), title: 'AN ICED COFFEE', body: 'On a ledge, sweating in the cold, an iced coffee with a straw in it. Haechan picks it up and turns the cup until the name on it faces Solar.', say: ['It says your name. Spelled wrong, which is how you know it’s real.', 'win'],
      choices: [
        { v: 'drink', label: 'Drink it', run: c => { heal(c, 0, 0.25, 'solar'); return 'Too much ice, too little coffee. Exactly right. Solar gets 25% SP back.'; } },
        { v: 'share', label: 'Make him split it', run: c => { heal(c, 0, 0.12, 'solar'); heal(c, 0, 0.12, 'haechan'); edge(c); return '“I’m drinking the bottom half. That’s where the good part is.” Both get 12% SP back, and the next fight starts with Attack up.'; } }] },
    { id: 'rq-mj-roll', who: 'minji', when: inB('raqia'), title: 'ROLLING', body: 'Minji’s camera turns itself on. The red light blinks. On the little screen the corridor is daylight, and full of people.', say: ['It’s recording something that isn’t here. Do I stop it?', 'hurt'],
      choices: [
        { v: 'keep', label: '“Keep rolling.”', run: c => { const n = reveal(c); return n ? 'On the screen the people walk through a wall, and the wall turns out to be hollow. The rooms nearby show on the map.' : 'On the screen the people walk on ahead and turn left. The rooms nearby show on the map.'; } },
        { v: 'stop', label: '“Stop it.”', run: c => { ward(c); return 'She closes the screen and holds the camera against her chest for a while. The next fight starts with Defense up.'; } }] },
    { id: 'rq-locker', when: inB('raqia'), title: 'A LOCKER', body: 'A gym locker set into the tower’s wall, a combination lock hanging open. Inside, a track jacket on a hook, still warm.',
      choices: [
        { v: 'pockets', label: 'Check the pockets', run: c => `A ${giveItem(c)} and a hair tie. Solar puts the hair tie on her wrist without thinking about it.` },
        { v: 'shut', label: 'Close it', run: () => 'Somebody is coming back for that jacket. You leave the lock open for them.' }] },
    // Zebul (Incheon)
    { id: 'zb-tide', when: inB('zebul'), title: 'LOW TIDE', body: 'The floor here is wet sand, ribbed and shining, and the water is a long way out. Somewhere a tide table is being kept to the minute.',
      choices: [
        { v: 'cross', label: 'Cross while it’s out', run: c => { steps(c, -4); return 'You cross with the sea behind you, nowhere near. Everyone walks a little faster without meaning to. The Reaper is 4 steps further off.'; } },
        { v: 'wait', label: 'Wait for it to turn', run: c => { heal(c, 0.15, 0.15); steps(c, 2); return 'It turns. It always does. Everyone gets 15% HP and SP back while you wait, and the Reaper comes 2 steps sooner.'; } }] },
    { id: 'zb-market', when: inB('zebul'), title: 'A FISH MARKET', body: 'Stalls under hanging bulbs, ice in tubs, a man in rubber boots calling prices nobody answers. He looks at Solar like he knows exactly whose daughter she is.',
      choices: [
        { v: 'buy', label: 'Buy something · ¥3,000', off: c => c.save.yen < 3000, run: c => { c.save.yen -= 3000; c.persist(); heal(c, 0.3, 0.3); return 'He wraps it in newspaper and won’t take a tip. Everyone gets 30% HP and SP back.'; } },
        { v: 'bow', label: 'Bow and move on', run: c => { ward(c); return 'He bows back, slower. The next fight starts with Defense up.'; } }] },
    { id: 'zb-ring', when: inB('zebul'), title: 'A RED CORD', body: 'A red cord is tied across the corridor at waist height, knotted to nothing at either end. Something small and green turns on it in the draft.',
      choices: [
        { v: 'untie', label: 'Untie it', run: c => { theurgy(c, 15); return 'It comes loose without a fight. Haenim’s jade ring clicks once on her sash. Everyone’s Theurgy gauge rises.'; } },
        { v: 'duck', label: 'Duck under', run: c => { edge(c); return 'Everyone ducks under, one by one, careful not to touch it. The next fight starts with Attack up.'; } }] },
    { id: 'zb-jw-watch', who: 'jungwon', when: inB('zebul'), title: 'THE TIME', body: 'Jungwon checks his watch, then checks it again, and frowns at it.', say: ['It’s keeping time again. It doesn’t usually, up here. I’d like to know what changed.', 'idle'],
      choices: [{ v: 'ok', label: '“Then we’re on schedule.”', run: c => { steps(c, -3); edge(c); return '“We are.” He sounds surprised to be pleased. The Reaper is 3 steps further off, and the next fight starts with Attack up.'; } }] },
    { id: 'zb-hc-korean', who: 'haechan', when: inB('zebul'), title: 'A SIGN IN KOREAN', body: 'A hand-painted sign over a shuttered shop. Haechan reads it out loud, then stops and looks at his own mouth like it belongs to someone else.', say: ['Okay, which one of me was that. Don’t answer. I don’t want to know.', 'idle'],
      choices: [
        { v: 'laugh', label: 'Laugh at him', run: c => { heal(c, 0, 0.15); return '“Wow. Supportive.” He’s laughing too. Everyone gets 15% SP back.'; } },
        { v: 'read', label: 'Ask what it says', run: c => `“It says closed. Obviously.” Behind the shutter, though, there’s ${c.yen(yenGift(c, 1100))} in the till.` }] },
    { id: 'zb-ferry', when: inB('zebul'), title: 'A FERRY HORN', body: 'A ship’s horn sounds through the floor, low enough to feel in the teeth. Far away, it answers itself.',
      choices: [
        { v: 'listen', label: 'Stand still and listen', run: c => { heal(c, 0.1, 0.1); ward(c); return 'Everyone stands still until it’s over. The next fight starts with Defense up, and everyone gets 10% HP and SP back.'; } },
        { v: 'go', label: 'Keep moving', run: async (c, f) => (c.rand() < 0.6 ? 'You keep moving. The horn follows you up one corridor and stops.' : ambush(c, f)) }] },
    // Araboth (Hanlim)
    { id: 'ab-chat', when: inB('araboth'), title: 'A GROUP CHAT', body: 'Every wall on this floor is a phone screen, and every screen is the same group chat, scrolling. Four hundred unread. Solar’s name is in the last eleven.',
      choices: [
        { v: 'read', label: 'Read them', run: c => { theurgy(c, 10); edge(c); return 'They’re mostly about whether she’s okay. Some of them are mean about it. The next fight starts with Attack up, and everyone’s Theurgy gauge rises a little.'; } },
        { v: 'mute', label: 'Mute the chat', run: c => { steps(c, -3); return 'The screens go dark one after another down the corridor. The quiet is a relief. The Reaper is 3 steps further off.'; } }] },
    { id: 'ab-box', when: inB('araboth'), title: 'A SUGGESTION BOX', body: 'A student council suggestion box, padlocked, full to the slot. A pen on a string. A card on top that says ANONYMOUS IS FINE.',
      choices: [
        { v: 'write', label: 'Write a suggestion', run: c => { heal(c, 0, 0.2, 'solar'); return 'Solar writes “more sleep for the vice president” and posts it before she can think better of it. Solar gets 20% SP back.'; } },
        { v: 'pry', label: 'Pry it open', run: async (c, f) => (c.rand() < 0.5 ? `Under the suggestions, the council’s petty cash: ${c.yen(yenGift(c, 1300))}. You’ll pay it back. Probably.` : ambush(c, f)) }] },
    { id: 'ab-poster', when: inB('araboth'), title: 'A POSTER', body: 'A campaign poster on the wall, her own face on it, smiling a smile she has never once smiled. Someone has drawn a little star by her name in pen.',
      choices: [
        { v: 'tear', label: 'Take it down', run: c => { edge(c, 2); return 'It comes away in one piece. Under it, the wall is just a wall. The next two fights start with Attack up.'; } },
        { v: 'star', label: 'Leave the star', run: c => { theurgy(c, 15); return 'Haenim’s star pin ticks once against her sash. Everyone’s Theurgy gauge rises.'; } }] },
    { id: 'ab-jh-crane', who: 'jihoon', when: inB('araboth'), title: 'A CRANE GAME', body: 'An arcade crane game, lit and humming. Jihoon already has a coin in his hand.', say: ['Sol. Watch the almighty Hoon. This is a skill game.', 'win'],
      choices: [
        { v: 'watch', label: 'Watch him', run: c => { if (c.rand() < 0.4) return `The claw catches. It actually catches. Inside the plush, ${c.yen(yenGift(c, 1200))} and a ${giveItem(c)}. He is impossible about it.`; heal(c, 0, 0.12); return 'The claw slips. He feeds it another coin. It slips again. Everyone gets 12% SP back from laughing.'; } },
        { v: 'pull', label: 'Pull him away', run: () => '“One more! It was loosening! Sol!”' }] },
    { id: 'ab-jw-gavel', who: 'jungwon', when: inB('araboth'), title: 'A MEETING TABLE', body: 'A long table, folding chairs, a gavel and an agenda with tonight’s date on it. Jungwon straightens the agenda without reading it.', say: ['This meeting is adjourned. …Sorry. Habit.', 'idle'],
      choices: [{ v: 'ok', label: '“Seconded.”', run: c => { ward(c, 2); return 'He almost smiles. The next two fights start with Defense up.'; } }] },
    { id: 'ab-bell', when: inB('araboth'), title: 'THE SCHOOL BELL', body: 'The school bell goes off for the end of a period, loud and flat and familiar. Doors open all down the corridor at once, and nobody comes out of any of them.',
      choices: [
        { v: 'go', label: 'Go through the nearest one', run: c => { const n = reveal(c); return n ? 'An empty classroom, and behind its blackboard, a hollow in the wall. The rooms nearby show on the map.' : 'An empty classroom with the chairs up on the desks. The rooms nearby show on the map.'; } },
        { v: 'wait', label: 'Wait for the next bell', run: c => { heal(c, 0.15, 0); steps(c, 2); return 'It never comes. Everyone gets 15% HP back, and the Reaper comes 2 steps sooner.'; } }] },
    // The Zenith
    { id: 'zn-rope', when: inB('zenith'), title: 'A ROPE', body: 'A rope hangs down out of the light, thick and gold, its end coiled on the floor like it was let down for someone and they never came.',
      choices: [
        { v: 'hold', label: 'Hold it', run: c => { heal(c, 0.25, 0.25, 'solar'); theurgy(c, 10); return 'It’s warm. Solar holds it for a long time. She gets 25% HP and SP back, and everyone’s Theurgy gauge rises a little.'; } },
        { v: 'leave', label: 'Leave it hanging', run: () => 'You leave it. It isn’t for climbing. Not today.' }] },
    { id: 'zn-cakes', when: inB('zenith'), title: 'RICE CAKES', body: 'A basket on the floor, a cloth over it, still warm. Rice cakes, the kind you carry home over the hills. One is missing.',
      choices: [
        { v: 'eat', label: 'Share them out', run: c => { heal(c, 0.2, 0.2); return 'Nobody asks who they were for. Everyone gets 20% HP and SP back.'; } },
        { v: 'keep', label: 'Keep one for the road', run: c => { ward(c, 2); return 'Solar wraps one back in the cloth and tucks it in her pocket, for whoever asks. The next two fights start with Defense up.'; } }] },
    { id: 'zn-shadow', when: inB('zenith'), title: 'NO SHADOWS', body: 'It’s noon up here. The light stands straight overhead, and nobody casts a shadow at all, not even the Shadows.',
      choices: [{ v: 'ok', label: 'Look at the light', run: c => { edge(c, 2); heal(c, 0, 0.15); return 'You can look straight at it, which shouldn’t be possible. Everyone gets 15% SP back, and the next two fights start with Attack up.'; } }] }
  ];
  EVENTS.forEach(e => TT.EVENTS.push(e));

  /* ══════════ Scenes ══════════ */
  const ANY = id => id !== 'solar' && id !== 'koromaru';
  const SCENES = {
    'raqia-arrive': { block: 'raqia', title: 'RAQIA', kicker: 'Past the last door', pages: [
      [{ n: 'The stairs past Monad’s last door didn’t climb so much as unfold, and when they ran out, the tower had stopped pretending to be a tower.' },
        { n: 'Snow. A quad under it, lit orange by lamps that hadn’t been there a step ago, a long row of old stone buildings with their windows dark, and a bell tower somewhere ahead with its face lit like a second moon. The cold got in under Solar’s collar and stayed. Her breath went up white.' },
        { n: 'She knew where she was before she knew how she knew it.' }],
      [{ pick: [{ who: 'haechan', t: 'Okay. Okay, no. That’s the quad. That’s our quad, Princess. Why is our quad in the haunted tower.', face: 'hurt' },
        { who: 'minji', t: 'Sol. That’s the walk to the dorms. I’ve filmed this walk a hundred times.', face: 'hurt' },
        { who: '*', t: 'Solar… do you know this place? You look like you do.', face: 'idle' }] },
        { n: 'There was a path worn through the snow, one set of footprints, a girl’s, heading for the dorms. Solar put her own boot in the first print. It fit.' },
        { nav: 'This floor isn’t on any map I have. It’s… it’s yours, Solar. The tower built it out of you.', face: 'surprised' }],
      [{ n: 'She should have been frightened. She was, a little. Mostly she felt like someone had left a light on for her, a long way from home, and she had only now seen it from the road.' },
        { solar: 'It’s Syracuse. It’s just Syracuse. Come on.' },
        { n: 'The snow kept falling up, if you watched it long enough. She didn’t watch it long enough.' }]] },
    'raqia-summit': { block: 'raqia', title: 'THE TOP OF RAQIA', kicker: '300F', pages: [
      [{ n: 'The top of Raqia was a rooftop, flat and gravelled, with a low wall all the way around and the whole campus laid out under it in the snow. Every window in every building was lit, all at once, the way they never are, every room awake at the same time.' },
        { n: 'In the middle of the roof, on a nail in a post that held up nothing, hung a small gold bell on a red string.' }],
      [{ pick: [{ who: 'haechan', t: 'Don’t look at me like that. I didn’t put it there. …I would have, though. If I’d thought of it.', face: 'idle' },
        { who: 'minji', t: 'Hold on. Don’t touch it yet. Let me get one shot of you and it. Okay. Now.', face: 'idle' },
        { who: '*', t: 'That’s like the bell on your Persona, isn’t it? The gold one.', face: 'idle' }] },
        { n: 'Solar lifted it off the nail. It didn’t ring. It only went warm in her palm, and on Haenim’s sash, somewhere behind her ribs, the gold bell answered it, one clear note, and every lit window below went dark in a wave, building by building, the way a party ends.' }],
      [{ n: 'Behind the post, where there hadn’t been any, there were stairs.' },
        { nav: 'The readings above are… colder. Wetter. It smells like the sea, Solar.', face: 'neutral' },
        { solar: 'Yeah. I know where that is too.' }]] },
    'zebul-arrive': { block: 'zebul', title: 'ZEBUL', kicker: 'Above Raqia', pages: [
      [{ n: 'Zebul was a harbor at the hour before light. The tower’s floor ran out into wet planking, then into a quay, then into black water with the lights of the far side shaking on it. A ferry sat low at the dock with its windows lit and nobody aboard. The smell came first, salt and diesel and something frying a long way off, and then the cold, which was a different cold than Raqia’s: wet, and in no hurry.' },
        { n: 'Solar stopped at the top of the stairs with her hand on the rail. The rail was rusted in the exact places she expected it to be.' }],
      [{ pick: [{ who: 'jungwon', t: 'This is the harbor. I’m sure of it. I’d know it with my eyes closed. I think I have.', face: 'idle' },
        { who: 'haechan', t: 'Agasshi. I hate this. I hate that I know which way the wind’s going to come from.', face: 'hurt' },
        { who: '*', t: 'It’s so quiet here. Even the water sounds careful.', face: 'idle' }] },
        { n: 'A tide clock on a post by the quay was counting down, very politely, to low water. She didn’t need to read it. She knew the tables by heart, and she couldn’t have said from where.' },
        { nav: 'There’s a pull under this whole floor. Not a Shadow. Just… the sea, going out. Please don’t go near the edge.', face: 'surprised' }],
      [{ solar: 'It always comes back in. That’s the whole point of it.' },
        { n: 'She said it like a thing someone had told her once, at a gate, in the cold. Then she let go of the rail and went down onto the quay.' }]] },
    'zebul-summit': { block: 'zebul', title: 'THE TOP OF ZEBUL', kicker: '350F', pages: [
      [{ n: 'At the top of Zebul the water had gone all the way out. Mudflats ran to the edge of the light, shining and ribbed, with small boats leaning on their sides where the sea had left them, waiting.' },
        { n: 'Out on the flats, a long way off, a lantern was moving, the way someone carries one when they are looking for somebody and don’t want to call out.' }],
      [{ pick: [{ who: 'jungwon', t: 'Don’t follow it. Please. Whoever it is, they’ll come this way. They always do.', face: 'idle' },
        { who: 'haechan', t: 'If you walk out there I’m carrying you back. I’m not even joking. I will throw you over my shoulder.', face: 'idle' },
        { who: '*', t: 'Someone’s out there. Should we call to them?', face: 'idle' }] },
        { n: 'The lantern stopped. For a long moment it hung there, small and steady, facing them across the mud. Then it turned away, back the way it had come, and went on looking for someone else.' }],
      [{ n: 'On the last post of the quay, where the rope would go, somebody had tied a red cord with a ring of pale green jade on it. Solar untied it. Haenim’s jade ring clicked against the bell on her sash, and the sea, a long way out, began to turn.' },
        { nav: 'There are stairs where the water was. And above them… so many voices. It sounds like a school.', face: 'neutral' }]] },
    'araboth-arrive': { block: 'araboth', title: 'ARABOTH', kicker: 'Above Zebul', pages: [
      [{ n: 'Araboth was a school hallway at night with every light left on. Lockers, a trophy case, a notice board three deep in flyers, and down the far end a door with STUDENT COUNCIL lettered on the glass. The floor had been waxed so recently it still smelled of it. Somewhere a phone was buzzing in a bag nobody had come back for.' },
        { n: 'Every flyer on the notice board had her face on it.' }],
      [{ pick: [{ who: 'jihoon', t: 'Wow. Okay. They really put you everywhere, huh. I mean. Not that I’m complaining. It’s a good photo. It’s a fake smile, but it’s a good photo.', face: 'win' },
        { who: 'jungwon', t: 'That’s our hallway. That’s the council room. I locked that door myself.', face: 'idle' },
        { who: '*', t: 'That’s you on all of those. Solar, what is this place?', face: 'surprised' }] },
        { n: 'She went closer. VOTE, said the flyers, and under it her name, and under her name a smile she had worn so many times it had stopped belonging to her face. Someone had drawn a small star in pen beside the name on one of them, just one, low down, where only a short person or a tired one would see it.' }],
      [{ nav: 'I can hear people talking about you. Hundreds of them. It’s all very nice. It doesn’t sound nice.', face: 'sad' },
        { solar: 'That’s how it always sounds.' },
        { n: 'She touched the little star with one finger, and then she walked on down the hall without straightening a single flyer, which was harder than it should have been.' }]] },
    'araboth-summit': { block: 'araboth', title: 'THE TOP OF ARABOTH', kicker: '399F', pages: [
      [{ n: 'The top of Araboth was a gym after an assembly: the bleachers pushed back, a podium on the floor with a microphone still live, the hum of it filling the room. A banner over the stage said CONGRATULATIONS, and no name, and the space where a name would go had been cut out neatly with scissors.' },
        { n: 'On the podium, by the microphone, lay a small star pin.' }],
      [{ pick: [{ who: 'jungwon', t: 'You don’t have to say anything into it. Nobody’s listening. I checked.', face: 'idle' },
        { who: 'jihoon', t: 'Speech! Speech! …No? Okay. Fine. Respectfully, no speech.', face: 'win' },
        { who: '*', t: 'It’s waiting for you to say something, isn’t it.', face: 'idle' }] },
        { n: 'Solar picked up the pin and didn’t say anything into the microphone at all. Haenim’s star ticked against the jade and the gold on her sash, three small sounds, one from each of her lives, and for the first time in the whole climb they sounded like one thing.' }],
      [{ n: 'Behind the banner the gym had no back wall. There was only light, more of it than she had ever seen, and in the middle of it a single flight of stairs going straight up into noon.' },
        { nav: 'That’s the top, Solar. The very top. Whatever’s up there is waiting, and it’s… it’s really strong. Please be careful.', face: 'surprised' }]] },
    'zenith-arrive': { block: 'zenith', title: 'THE ZENITH', kicker: '400F', pages: [
      [{ n: 'There was no ceiling. Above the last floor of the tower there was only sky, so blue it was nearly white, and the sun standing straight overhead, close enough that Solar could feel it on the part in her hair. Nobody cast a shadow. The floor was warm.' },
        { n: 'From somewhere out of the light, a gold rope hung down and coiled on the floor, as if it had been let down for two children a very long time ago, and they had climbed it, and nobody had pulled it back up.' }],
      [{ pick: [{ who: 'haechan', t: 'I know this story. Everybody knows this story. There’s a tiger in it, Solar.', face: 'hurt' },
        { who: 'akihiko', t: 'Something’s up here with us. I can feel it watching. Stay behind me. …Next to me, then.', face: 'idle' },
        { who: '*', t: 'It’s beautiful. Why does it feel like we shouldn’t be here?', face: 'idle' }] },
        { n: 'Across the floor stood a door of black lacquer, sealed, and on the other side of it something very large was breathing slowly. Every so often, very politely, it knocked.' },
        { nav: 'Solar… whatever’s behind that door asked for you by name. It said it only wants one thing.', face: 'surprised' }],
      [{ n: 'She thought of the tale Elizabeth had told her at the very beginning, about the sister who was afraid of being looked at and became so bright that no one could. About the tiger that came over the hills, asking at every one.' },
        { solar: 'It always only wants one thing. And then it wants the next one.' }]] },
    'zenith-summit': { block: 'zenith', title: 'NOON', kicker: '400F · The top of everything', pages: [
      [{ n: 'The tiger went down the way the tale says it does: all at once, from a height, holding a rope that was never going to take its weight. Then there was only the floor, and the light, and the party breathing hard in it, and no shadow under any of them.' },
        { n: 'The gold rope swung once and was still.' }],
      [{ pick: [{ who: 'haechan', t: 'Sun’s out. You did it, Princess. Don’t make it weird.', face: 'win' },
        { who: 'jungwon', t: 'We’re at the top. There’s nowhere higher. I keep checking, and there isn’t.', face: 'win' },
        { who: 'akihiko', t: 'That’s it. That’s the top. …Not bad, partner. Not bad at all.', face: 'win' },
        { who: '*', t: 'We made it. All the way up. Solar, we made it.', face: 'win' }] },
        { n: 'At the edge of the floor the light thinned enough to see down, and down was a long way. Three windows of it, far below: snow on a quad, the sea coming back in over the flats, a school with one light on in the council room. And under all of them, very small, a dorm in Iwatodai with its lounge lamp burning.' }],
      [{ n: 'Solar could have taken the rope. It was right there, and it was warm, and it went up. She stood with her hand on it for a while. Then she let it go, and turned, and started back down toward the people at the bottom of the stairs, which was the only direction that had ever really been the point.' },
        { nav: 'Let’s go home, Solar.', face: 'happy' }]] }
  };
  const seen = c => { const tt = c.save.tt || (c.save.tt = {}); return tt.climb || (tt.climb = []); };
  function lineHtml(c, l, team, said) {
    if (l.n) return `<p>${esc(l.n)}</p>`;
    if (l.solar) return sayOf(c, 'solar', l.solar, l.face || 'idle');
    if (l.pick) {
      const x = l.pick.find(p => (p.who === '*' ? team.some(id => ANY(id) && !said.includes(id)) : team.includes(p.who)));
      if (!x) return '';
      const who = x.who === '*' ? team.find(id => ANY(id) && !said.includes(id)) : x.who;
      said.push(who);
      return sayOf(c, who, x.t, x.face || 'idle');
    }
    return '';
  }
  function sayOf(c, who, line, face) {
    const m = c.member(who); if (!m) return '';
    const f = (m.faces && m.faces[face]) || (m.faces && m.faces.idle) || 'neutral';
    return `<div class="tt-say" style="--c:${m.color || '#ff8cc0'}"><span class="pic fcb">${c.fimg(who, f)}</span><p><b>${esc(m.name)}</b>${esc(line)}</p></div>`;
  }
  /* Play a scene once per playthrough (force: play it even if seen; tests). Returns true when it played. */
  async function play(c, floor, id, { force = false } = {}) {
    const sc = SCENES[id], done = seen(c);
    if (!sc || (!force && done.includes(id))) return false;
    if (!done.includes(id)) done.push(id);
    c.persist(); c.mark('climb-scene'); c.mark('climb-' + id);
    const team = c.roster().map(m => m.id), said = [];
    for (let i = 0; i < sc.pages.length; i++) {
      const page = sc.pages[i], nav = page.find(l => l.nav);
      const body = page.map(l => lineHtml(c, l, team, said)).join('');
      await c.roomPanel({ bg: floor.bg, cls: 'event tt-event tt-climb', kicker: `${floor.label} · ${sc.kicker}`, title: sc.title, name: 'climb-scene', body,
        buttons: [{ v: 'ok', label: i < sc.pages.length - 1 ? 'Continue' : 'Go on', pink: true }], fuuka: nav ? [nav.nav, nav.face || 'neutral'] : null });
    }
    return true;
  }
  /* On arriving at a floor (tartarus.js arrive): a block's first floor or its summit floor plays its scene, once. */
  async function onArrive(c, floor) {
    if (!floor || !floor.ngp || floor.hiddenFloor) return false;
    if (floor.fi === 0 && SCENES[`${floor.blockId}-arrive`]) return play(c, floor, `${floor.blockId}-arrive`);
    if (floor.top && floor.blockId !== 'zenith' && SCENES[`${floor.blockId}-summit`]) return play(c, floor, `${floor.blockId}-summit`);
    return false;
  }
  /* After a superboss falls (tartarus.js rooms.super): the Zenith's closes the climb. */
  async function afterSuper(c, floor, kind, first) {
    if (floor && floor.blockId === 'zenith' && kind === 'super_tiger') return play(c, floor, 'zenith-summit');
    return false;
  }

  return { open, SCENES, EVENTS, play, onArrive, afterSuper };
})();
