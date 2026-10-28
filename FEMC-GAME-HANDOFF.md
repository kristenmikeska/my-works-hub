# FEMC revamp · Battle handoff contract

How the life sim (`femc-game.html`, code in `assets/femc/game/`) hands a fight to the battle game (`femc-battle.html`) and gets the result back. The game side is built; the battle side still has to read and answer the handoff. Nothing here touches v1 (`kg-femc-game`) or the battle prototype's own save (`kg-femc-battle-proto`).

## The flow

1. **The life sim writes a handoff.** It saves `localStorage['kg-femc-handoff']` with `status: 'pending'`, autosaves its own game (`kg-femc-revamp`), and goes to **`femc-battle.html?from=game`**.
2. **The battle game reads it.** If `?from=game` is present and the handoff is `pending`, it skips its own hub and starts the requested fight (a Tartarus run, a full-moon operation, or a scripted story fight).
3. **The battle game writes the result back** into the same object: it sets `result` and `status: 'done'`, saves, and goes to `handoff.returnTo` (always `femc-game.html?from=battle`).
4. **The life sim applies it.** On load it reads the handoff. If the `id` matches the one it saved and `status` is `done`, it applies the result, shows a results card, deletes the handoff key, and carries on. A story scene that was interrupted picks up on the exact line after the fight.
   - If the player comes back without a result (still `pending`), the game offers: simulate the result, go back to the battle game, or call it off (Tartarus only).

Until the battle side is wired up, every fight shows a placeholder card ("Battle: … (handoff)") with **Simulate win**, **Simulate retreat** (Tartarus only), and **Go to the battle game ▸**, which runs steps 1–2 for real.

## `kg-femc-handoff` (JSON)

```js
{
  v: 1,
  id: 'h37-lq2x9a',              // unique per handoff; the game only accepts a result with the id it wrote
  status: 'pending',             // 'pending' → 'done' (battle side), or 'cancelled'
  from: 'game',
  kind: 'tartarus',              // 'tartarus' | 'operation' | 'scripted'
  createdAt: '2026-10-18T…Z',
  returnTo: 'femc-game.html?from=battle',
  date: { day: 37, md: '5/13', iso: '2009-05-13', weekday: 'Wed', moon: 'Waxing Crescent', fullMoon: false },

  request: {
    op: null,                    // operation id: battle data.js `ops` ids (priestess, empress, hierophant, lovers, chariot,
                                 //   hermit, fortune, hanged), or new ids the battle side doesn't have yet: 'magician' (4/9,
                                 //   scripted tutorial on the dorm roof), 'tartarus-memory' (12/2), 'finale' (1/30)
    ops: null,                   // reserved: several ops in one fight
    script: null,                // scripted story fight id, e.g. 'prologue-1'
    segment: null,               // part of a scripted fight (see below)
    title: 'Tartarus', desc: '…',// what the placeholder card shows; the battle side may show it as a briefing
    notes: null,                 // designer notes for scripted fights (rules of the fight, e.g. 'Attack and Guard only…'); not for players
    forced: false,               // true for story fights and full moons: no retreat
    canRetreat: true,
    party: ['solar', 'yukari', 'junpei'],   // chosen party, Solar always first (battle data.js party ids)
    available: ['solar', 'yukari', 'junpei'],// everyone the calendar allows today (ids may include searchers later:
                                            //   jihoon, minji, jungwon, haechan; the battle side can ignore unknown ids)
    navigator: 'mitsuru',        // 'mitsuru' until 6/11, then 'fuuka'
    condition: 'good',           // Solar's condition: 'great' | 'good' | 'tired' | 'sick'
    fatigue: { solar: 'good' },  // same, per member (only Solar is tracked for now)
    yen: 12450,                  // the life sim owns money
    items: { medicine: 3 },      // consumables bought in the life sim (battle data.js `items` ids)
    gear: ['naginata1'],         // gear bought in the life sim (battle data.js `gear` ids)
    maxFloor: 36,                // highest Tartarus floor allowed today (P3-style blocks open by date). Since 2026-10-25 the battle
                                 //   game's floors carry these real numbers (data.js blocks[].floors); Monad's open floor by floor
    bestFloor: 22,               // highest floor reached so far
    bossesCleared: ['magician', 'priestess'],
    fragments: ['strangers-harbor'],   // memory fragments Solar already has (don't award these again)
    fragmentsOpen: true,         // false before 5/16: no memory fragments may drop yet
    kits: { night_leftovers: 1 },  // Tartarus only, optional: night-only items the life sim packed (Shinjiro's Kitchen Duty); battle.js adds them for the night
    social: { stats: { knowledge: 64, courage: 33, proficiency: 20, charm: 36, kindness: 18 }, ranks: { akihiko: 3, yukari: 3 } },  // link ranks: the party trees' tiers (4, 7) and MAX evolutions (battle save `ranks`); link perks later
    difficulty: null             // reserved; the battle side keeps its own setting
  },

  result: null                   // the battle side fills this in
}
```

### `result` (written by the battle game)

```js
result: {
  outcome: 'win',               // 'win' | 'retreat' | 'lose' | 'interrupt' (scripted segment that ends early on purpose)
  exp: { solar: 180, yukari: 180, junpei: 180 },   // EXP earned per member (the game keeps a running total)
  levels: { solar: 9, yukari: 8 },                 // optional: levels after the fight, shown on the status screen
  yenDelta: 1340,               // yen gained (or spent, negative) in the battle game. Or send `yen` (the new total).
  items: { medicine: -1, bead: 1 },                // consumable changes (+found, −used)
  gear: ['naginata1', 'bow2'],  // optional: the full owned-gear list after the run
  fatigue: 'tired',             // Solar's condition afterwards. Omit to let the game decide. Tartarus normally → 'tired';
                                //   going while already tired → 'sick' (P3). Scripted fights: omit.
  fragments: ['runners-monitor'],                  // memory fragments found (event rooms, hidden rooms), ids from data.js `memories`
  plumes: 1,                    // Tartarus only, optional: Velvet Plumes found (vaults, guardians, rare Shadows, hidden rooms); core.js adds them to S.gacha
  bossesCleared: ['priestess'], // operations won (also unlocks shop tiers: 1 + bosses cleared)
  floorsReached: 25             // highest floor reached this run
}
```

## Kinds of fight

- **`tartarus`**: the player chose Tartarus at the dorm at night. Retreat is allowed. Afterwards the evening is spent and the day ends; Solar wakes up with `result.fatigue` (Tired by default).
- **`operation`**: a full-moon boss. `forced: true`. The calendar (`assets/femc/game/data/calendar.js`, `ops`) decides the date. 7/7 runs two operations back to back (`hierophant`, then `lovers`): two handoffs in a row.
- **`scripted`**: a story fight inside a scene. The prologue's first fight is `script: 'prologue-1'` in two segments:
  - `segment: 1`: two Maya, Attack and Guard only. Ends with `outcome: 'interrupt'` on turn 3 or when Solar's HP drops below half (the scene then plays the Evoker moment).
  - `segment: 2`: the Evoker works (Golden Rope, Dia), the second Maya is weak to Light, Solar can't lose. Ends with `win`.
  - `op: 'magician'` (4/9) is also scripted: the first fight on purpose, on the dorm roof.

## The epilogue's half-present fights (batch 6)

A `{ battle: { script: 'epi-<world>-<n>' } }` line inside an epilogue scene (n 1–4) goes through the same handoff, with these differences (core.js `epiRequest`, epilogue.js `fightHook`, battle.js `EPI`):

- **The request comes from the finished year, not the world.** `party` is the epilogue's pick (Solar alone in fight 1; then Solar, Akihiko and two of S.E.E.S. by the year's ranks) and `available` is exactly that party; `navigator: 'fuuka'`; `condition: 'good'`; `yen` is the year's (so the battle save's own yen is left as it was), `items: {}` and `gear: []`; `social`, `bossesCleared`, `route`, `routeFlags` and `carryFrom` are the year's (`S.year1`). New field `request.epi: { world, n, stage ('alone' | 'unseen' | 'unheard' | 'contact'), bg (the scene's place, as a background URL), place, glitch (today's glitch stage) }`.
- **The battle side** plays its `EPI` table for that world and stage: no Get Ready, no results screen, no yen, an empty bag; the battle save's own party and items are put back afterwards. Solar can't lose. Small EXP goes into the battle save either way.
- **The result** is `outcome: 'win' | 'interrupt'` (never `lose`), `exp`, and `epi: { world, n, stage, ended: 'win' | 'pulled' | 'faded' }`.
- **The life sim applies only the EXP tally** (`S.battle.exp`; the levels are already in the battle save) and sets the flag `<script>-<ended>` (e.g. `epi-runners-3-faded`). The world's money, items, condition, Tartarus, fragments and full moons are never touched. On `faded` the scene swaps the lines that told the fight's end for a fade line, then goes on.
- A reload mid-fight loads the world first, reopens the same fight, then rebuilds the scene from its snapshot.

## Rules for both sides

- One handoff at a time. The game never writes a new one while one is pending.
- The battle side never edits `request` and never touches `kg-femc-revamp`.
- Unknown ids (party members, ops, items) should be skipped, not crash.
- If the battle game is opened without `?from=game`, it behaves as it does today and ignores `kg-femc-handoff`.
- The life sim is the source of truth for money, items bought in town, the date and Solar's condition. The battle game is the source of truth for levels, skills and equipment stats.
