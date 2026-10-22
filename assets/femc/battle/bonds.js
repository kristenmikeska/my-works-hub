/* FEMC bond skills (Kat's picks, roadmap sections 7–8 and overnight queue item 2): Solar and one partner unleash a combo with its
   own cut-in. Data and rules only, no DOM. Loaded after build.js and before engine.js, in femc-game.html and femc-battle.html.
   Kept apart from data.js and build.js so art and perk work there merges cleanly.

   How a bond works (engine.js bondInfo / bondAct; battle.js bondMenu / bondCut):
   - It unlocks at the partner's link rank (`tiers[].rank`: 5 for the first version, 9 for the upgrade). A romance partner on
     the romance route gets a special version at rank 9 instead (`love`). A reversed link pauses its bond.
   - Usable when Solar and the partner are both in the party, conscious and able to act. Either of them can start it from
     their own turn (menu: Bond).
   - Cost: both pay `sp`, and it takes both their turns (whoever didn't start it loses their next one). Once per battle each.
   - It never overlaps a perk: Duo Cohesion (Minji's rank 5 perk) is a free follow-up hit; her bond is its own move.
   - `until`: the last calendar day it can be used (Shinjiro's, the day the story uses for his exit). Practice has no date.
   Art hook (FEMC-ART-TODO.md section 4): any bond, or any one version of it, can carry
     img: a full-screen cut-in still (with focus [x%, y%]), sheet: { frames: [wind-up, strike, follow-through] },
     layers: { bg, persona, char }: the same shapes as a Theurgy's (data.js comment above TH).
   Without art, battle.js builds a stylized cut-in from both portraits, both Personas and both colors.
   Steps: { by: 'solar' | 'partner', el, power, target: 'one' | 'all' | 'rand', multi, ail, down, crit, fx }. Each is a sure
   hit using the better of St or Ma (like a Theurgy). after: { heal (party, fraction of max HP), cure, buffs [party stats],
   debuffs [stats on every foe], ward ('solar': nothing hurts her until her next turn), th (Theurgy for both) }.
   line: [the partner's line, Solar's reply] in the cut-in. loveFace: the partner's portrait mood in the romance version's cut-in. */
window.FemcBonds = (() => {
  const D = window.FEMC_BATTLE_DATA;
  if (!D) return null;
  const S = (el, power, o = {}) => Object.assign({ by: 'solar', el, power }, o);
  const P = (el, power, o = {}) => Object.assign({ by: 'partner', el, power }, o);
  const BONDS = [
    // ── Romances: special combos, and a special version on the romance route
    { id: 'akihiko', partner: 'akihiko', romance: true, loveFace: 'blushing', look: ['elec', 'sun'], colors: ['#ff4f9e', '#ff9a3d'],
      tiers: [
        { rank: 5, name: 'Daybreak One-Two', sp: 12, target: 'one', steps: [P('elec', 46, { multi: [2, 2], ail: { id: 'shock', chance: 0.2 } }), S('light', 64, { down: 0.3 })],
          line: ['On three. One—', '—two. Keep up.'], desc: 'Akihiko’s lightning jabs, then Solar’s sunrise on the same foe. May Shock it.' },
        { rank: 9, name: 'Thunder at Dawn', sp: 16, target: 'one', steps: [P('elec', 52, { multi: [3, 3], ail: { id: 'shock', chance: 0.25 } }), S('light', 88, { down: 0.4 })], after: { buffs: ['agi'] },
          line: ['Ready when you are.', 'I was ready first.'], desc: 'Three lightning punches and a heavy sunrise on one foe; the party gets faster.' }],
      love: { rank: 9, name: 'Sunrise Cadenza', sp: 16, target: 'one', steps: [P('elec', 56, { multi: [3, 3], ail: { id: 'shock', chance: 0.3 } }), S('light', 96, { down: 0.5 })], after: { buffs: ['atk', 'agi'], heal: 0.15 },
        line: ['Stay on my left. Like always.', 'I always do.'], desc: 'Their own combination: lightning, then the sun. Heavy damage to one foe; the party heals a little and gets stronger and faster.' } },
    { id: 'shinjiro', partner: 'shinjiro', romance: true, loveFace: 'happy', until: '10/3', look: ['strike', 'sun'], colors: ['#ff4f9e', '#c43b3b'],
      tiers: [
        { rank: 5, name: 'Back Alley Sunrise', sp: 10, target: 'one', steps: [P('strike', 120, { crit: 15 }), S('light', 40, { target: 'all' })], after: { heal: 0.15 },
          line: ['Stay back. I’ll make the openin’.', 'I’ll make it count.'], desc: 'Castor runs one foe down, then Solar’s light sweeps the field and the party heals a little.' },
        { rank: 9, name: 'Castor at Daybreak', sp: 14, target: 'one', steps: [P('strike', 150, { crit: 20 }), S('light', 52, { target: 'all' })], after: { heal: 0.2 },
          line: ['Don’t get in front of me.', 'Then don’t make me.'], desc: 'A colossal charge at one foe, then light on every foe; the party heals.' }],
      love: { rank: 9, name: 'Warm Hands', sp: 14, target: 'one', steps: [P('strike', 160, { crit: 25 }), S('light', 60, { target: 'all' })], after: { heal: 0.25, cure: true },
        line: ['Stay behind me. …Please.', 'Just this once.'], desc: 'Their own combination. A colossal charge, light on every foe, and the party heals and is cured.' } },
    { id: 'haechan', partner: 'haechan', romance: true, loveFace: 'flustered', look: ['elec', 'sun'], colors: ['#ff4f9e', '#ff9a3d'],
      tiers: [
        { rank: 5, name: 'Sun and Moon', sp: 14, target: 'all', steps: [P('elec', 44, { ail: { id: 'shock', chance: 0.15 } }), S('light', 52)],
          line: ['Keep up, princess.', 'Keep up yourself.'], desc: 'Dalnim’s static and Haenim’s light on every foe. May Shock.' },
        { rank: 9, name: 'Eclipse', sp: 18, target: 'all', steps: [P('dark', 40), P('elec', 40, { ail: { id: 'shock', chance: 0.2 } }), S('light', 66, { down: 0.35 })], after: { buffs: ['atk'] },
          line: ['Don’t look directly at it.', 'Too late.'], desc: 'Moon, then static, then the sun, on every foe; the party’s attack rises.' }],
      love: { rank: 9, name: 'Corona', sp: 18, target: 'all', steps: [P('dark', 44, { ail: { id: 'fear', chance: 0.2 } }), P('elec', 48, { ail: { id: 'shock', chance: 0.25 } }), S('light', 76, { down: 0.45 })], after: { buffs: ['atk', 'agi'], th: 10 },
        line: ['You and me. Every sky.', 'Show-off.'], desc: 'Their own combination: the light around an eclipse. Heavy damage to every foe; the party gets stronger and faster, and both Theurgy gauges fill a little.' } },
    { id: 'jungwon', partner: 'jungwon', romance: true, loveFace: 'flustered', look: ['ice', 'jade'], colors: ['#ff4f9e', '#9fe8ff'],
      tiers: [
        { rank: 5, name: 'Jade Frost', sp: 12, target: 'one', steps: [P('ice', 60, { ail: { id: 'freeze', chance: 0.2 } }), S('strike', 56, { ail: { id: 'bind', chance: 0.3, rope: true } })],
          line: ['After you.', 'Together, Jungwon.'], desc: 'Hyeonmu’s frost, then the golden rope. Heavy damage to one foe; may Freeze or Bind it.' },
        { rank: 9, name: 'Winter Jade', sp: 16, target: 'all', steps: [P('ice', 58, { ail: { id: 'freeze', chance: 0.25 } }), S('light', 48)], after: { debuffs: ['def'] },
          line: ['Shall we?', 'We shall.'], desc: 'Ice and light on every foe; every foe’s defense drops.' }],
      love: { rank: 9, name: 'Jade Ring', sp: 16, target: 'all', steps: [P('ice', 64, { ail: { id: 'freeze', chance: 0.3 } }), S('light', 60)], after: { debuffs: ['def'], ward: 'solar' },
        line: ['Please stay where I can see you.', 'Formal, even now?'], desc: 'Their own combination. Ice and light on every foe, their defense drops, and the tortoise’s shell closes over Solar: nothing hurts her until her next turn.' } },
    { id: 'jihoon', partner: 'jihoon', romance: true, loveFace: 'happy-2', look: ['wind', 'star'], colors: ['#ff4f9e', '#7dd3ff'],
      tiers: [
        { rank: 5, name: 'Star Power', sp: 14, target: 'all', steps: [P('wind', 46), S('almighty', 40)], after: { buffs: ['atk'] },
          line: ['Behold. Me. And Sol.', 'Mostly Sol.'], desc: 'Dokkaebi’s gale and Nike’s star on every foe; the party’s attack rises.' },
        { rank: 9, name: 'Supernova', sp: 18, target: 'all', steps: [P('wind', 60), S('almighty', 56)], after: { buffs: ['atk', 'def'] },
          line: ['Everybody watch. Everybody.', 'They’re watching, Jihoon.'], desc: 'A bigger gale and a brighter star; the party’s attack and defense rise.' }],
      love: { rank: 9, name: 'Royal Pair', sp: 18, target: 'all', steps: [P('wind', 66), S('almighty', 64)], after: { buffs: ['atk', 'def', 'agi'], th: 10 },
        line: ['Bow, peasants. To both of us.', 'Do NOT include me in this.'], desc: 'Their own combination. Wind and star on every foe; the party’s attack, defense and agility rise, and both Theurgy gauges fill a little.' } },
    { id: 'minji', partner: 'minji', romance: true, loveFace: 'flustered', look: ['light', 'sun'], colors: ['#ff4f9e', '#ffe6a8'],
      tiers: [
        { rank: 5, name: 'Two-Shot', sp: 12, target: 'one', steps: [P('pierce', 34, { multi: [2, 2], crit: 10 }), S('light', 60)],
          line: ['I’ve got you in frame.', 'Then roll.'], desc: 'Two arrows from Theia and Solar’s light, all on one foe.' },
        { rank: 9, name: 'Long Take', sp: 16, target: 'one', steps: [P('pierce', 40, { multi: [3, 3], crit: 12 }), S('light', 80)], after: { heal: 0.15 },
          line: ['Don’t cut. Keep going.', 'I wasn’t going to.'], desc: 'Three arrows and a heavy sunrise on one foe; the party heals a little.' }],
      love: { rank: 9, name: 'Keep This One', sp: 16, target: 'one', steps: [P('pierce', 42, { multi: [3, 3], crit: 15 }), S('light', 90, { down: 0.5 })], after: { heal: 0.2, buffs: ['agi'] },
        line: ['Hold still. The light’s good.', 'Take the shot.'], desc: 'Their own combination. Three arrows and the sun on one foe; the party heals and gets faster.' } },
    // ── Friendships: the S.E.E.S. members who fight
    { id: 'yukari', partner: 'yukari', look: ['wind', 'sun'], colors: ['#ff4f9e', '#ff8cc0'],
      tiers: [
        { rank: 5, name: 'Morning Breeze', sp: 12, target: 'all', steps: [P('wind', 40), S('light', 40)], after: { heal: 0.3, cure: true },
          line: ['Everyone, hold still!', 'We’ve got you.'], desc: 'Io’s wind and Haenim’s light on every foe; the party heals 30% and is cured.' },
        { rank: 9, name: 'Sunlit Gale', sp: 16, target: 'all', steps: [P('wind', 54), S('light', 54)], after: { heal: 0.45, cure: true, buffs: ['def'] },
          line: ['Ready? Don’t miss.', 'Have I ever?'], desc: 'Stronger wind and light on every foe; the party heals 45%, is cured, and its defense rises.' }] },
    { id: 'junpei', partner: 'junpei', look: ['slash', 'sun'], colors: ['#ff4f9e', '#7fb6ff'],
      tiers: [
        { rank: 5, name: 'Sunny Pitch', sp: 10, target: 'one', steps: [S('light', 50), P('slash', 110, { crit: 20 })],
          line: ['Pitch it to me!', 'Don’t whiff, Junpei.'], desc: 'Solar pitches the sun, Junpei swings for the fences. Heavy damage to one foe; often a critical.' },
        { rank: 9, name: 'Walk-Off Sunrise', sp: 14, target: 'one', steps: [S('light', 60), P('slash', 140, { crit: 30 }), P('fire', 60)],
          line: ['Bottom of the ninth, baby!', 'Then end it.'], desc: 'The pitch, the swing and the fire after it. Severe damage to one foe.' }] },
    { id: 'mitsuru', partner: 'mitsuru', look: ['ice', 'sun'], colors: ['#ff4f9e', '#ff5b5b'],
      tiers: [
        { rank: 5, name: 'Frost and Flare', sp: 12, target: 'all', steps: [P('ice', 50, { ail: { id: 'freeze', chance: 0.25 } }), S('light', 50)],
          line: ['Together, then.', 'After you, Mitsuru.'], desc: 'Artemisia’s frost and Haenim’s flare on every foe; may Freeze.' },
        { rank: 9, name: 'Crystal Daybreak', sp: 16, target: 'all', steps: [P('ice', 66, { ail: { id: 'freeze', chance: 0.3 } }), S('light', 64)], after: { debuffs: ['atk'] },
          line: ['Let’s make this brief.', 'Brief and brilliant.'], desc: 'Heavier ice and light on every foe; every foe’s attack drops.' }] },
    { id: 'aigis', partner: 'aigis', look: ['pierce', 'sun'], colors: ['#ff4f9e', '#ffd36b'],
      tiers: [
        { rank: 5, name: 'Covering Fire', sp: 12, target: 'all', steps: [P('pierce', 34, { target: 'rand', multi: [4, 5] }), S('light', 44)], after: { buffs: ['def'] },
          line: ['Covering fire. Go.', 'Going!'], desc: 'A storm of rounds at random foes, then light on all of them; the party’s defense rises.' },
        { rank: 9, name: 'Papillon Dawn', sp: 16, target: 'all', steps: [P('pierce', 40, { target: 'rand', multi: [5, 6] }), S('light', 56)], after: { buffs: ['def', 'atk'] },
          line: ['I will protect you. That is my wish.', 'Then let’s protect each other.'], desc: 'A bigger storm and brighter light; the party’s defense and attack rise.' }] },
    { id: 'ken', partner: 'ken', look: ['light', 'sun'], colors: ['#ff4f9e', '#ffb36b'],
      tiers: [
        { rank: 5, name: 'Spear at Dawn', sp: 12, target: 'one', steps: [P('elec', 50), S('light', 66)], after: { heal: 0.15 },
          line: ['I can do this! With you!', 'I know you can.'], desc: 'Nemesis’s spear and Haenim’s light on one foe; the party heals a little.' },
        { rank: 9, name: 'Daybreak Justice', sp: 16, target: 'all', steps: [P('elec', 50), S('light', 64)], after: { heal: 0.25 },
          line: ['Like Featherman. Together!', 'Strike a pose, Ken.'], desc: 'Lightning and light on every foe; the party heals 25%.' }] },
    { id: 'koromaru', partner: 'koromaru', look: ['fire', 'sun'], colors: ['#ff4f9e', '#e8e8f0'],
      tiers: [
        { rank: 5, name: 'Sun Dog', sp: 10, target: 'all', steps: [P('fire', 46, { ail: { id: 'fear', chance: 0.2 } }), S('light', 46)],
          line: ['Arf!', 'Good boy. Go!'], desc: 'Cerberus’s fire and Haenim’s light on every foe; may frighten them.' },
        { rank: 9, name: 'Hellhound Halo', sp: 14, target: 'all', steps: [P('fire', 62, { ail: { id: 'fear', chance: 0.25 } }), S('light', 58)], after: { buffs: ['agi'] },
          line: ['AWOOO!', 'Sic ’em!'], desc: 'Heavier fire and light on every foe; may frighten them, and the party gets faster.' }] }
  ];
  const byId = id => BONDS.find(b => b.id === id) || null;
  // School-year order for "m/d" dates (April is the first month), so 10/3 comes after 4/6 and before 3/7.
  const ord = md => { const [m, d] = String(md || '').split('/').map(Number); return m && d ? ((m < 4 ? m + 12 : m) * 40 + d) : null; };
  const pastUntil = (b, md) => !!(b.until && md && ord(md) != null && ord(md) > ord(b.until));
  /* Where a bond stands: { state, rank, cur (the version in use or null), next (the next version to unlock), love (on the
     romance route) }. state: own | rank (not yet) | paused (the link is reversed) | gone (past its last day). ctx: { bonds,
     rev, love, date } (save.bonds / bondsRev / bondsLove / bondDate). */
  function status(b, ctx = {}) {
    const rank = +((ctx.bonds || {})[b.partner]) || 0, love = !!(b.romance && (ctx.love || []).includes(b.partner));
    const vers = b.tiers.map((t, i) => Object.assign({ tier: i + 1, love: false }, t));
    if (b.love && love) vers[1] = Object.assign({ tier: 2, love: true }, b.love);
    const got = vers.filter(v => rank >= v.rank);
    const cur = got.length ? got[got.length - 1] : null, next = vers.find(v => rank < v.rank) || null;
    let state = cur ? 'own' : 'rank';
    if (cur && (ctx.rev || []).includes(b.partner)) state = 'paused';
    if (cur && pastUntil(b, ctx.date)) state = 'gone';
    return { state, rank, cur, next, love, vers };
  }
  const ctxOf = save => ({ bonds: (save && save.bonds) || {}, rev: (save && save.bondsRev) || [], love: (save && save.bondsLove) || [], date: (save && save.bondDate) || null });
  /* The bonds this save can use in a fight (engine.js setup.bondArts): the current version of each, resolved. */
  function arts(save) {
    const ctx = ctxOf(save);
    return BONDS.map(b => {
      const st = status(b, ctx);
      if (st.state !== 'own') return null;
      const v = st.cur;
      return { id: b.id, partner: b.partner, name: v.name, tier: v.tier, love: !!v.love, sp: v.sp, target: v.target, steps: v.steps, after: v.after || {}, line: v.line || null, desc: v.desc,
        look: b.look, colors: b.colors, face: v.love ? b.loveFace || null : null, img: v.img || b.img || null, focus: v.focus || b.focus || null, sheet: v.sheet || b.sheet || null, layers: v.layers || b.layers || null, romance: !!b.romance };
    }).filter(Boolean);
  }
  return { BONDS, byId, status, ctxOf, arts, ord, pastUntil };
})();
