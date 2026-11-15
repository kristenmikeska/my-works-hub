# Persona 3: Equinox · technical groundwork

How Equinox runs on the Solstice engine without forking it. Spoiler-free: no story here. Companion to `EQUINOX-PLAN.md`.

## Recommendation in one paragraph

Equinox is a second page, `femc-equinox.html`, that loads the **same engine files** as `femc-game.html` (`core.js`, `scene.js`, `ui.js`, `menu.js`, `cosmetics.js`, `gacha.js`, the battle data and `save.js`, the portraits) but swaps every `assets/femc/game/data/*` and `data/links/*` script for its own under **`assets/femc/equinox/`** (`data/calendar.js`, later `data/links/*.js`, `data/story-*.js`, …). Before `core.js`, the page sets one config object, `window.FEMC_GAME_CONFIG = { id: 'equinox', key: 'kg-femc-equinox', clearsKey: 'kg-femc-equinox-clears', titleKey: 'kg-femc-equinox-title-theme', … }`. With no config, every hook below falls back to today's Solstice value, so `femc-game.html` and Kat's saves are untouched.

## Why this works with almost no engine change

- **Data:** core.js never copies data at load. It reads `window.FEMC_GAME_*` through the `D` getters each time (core.js:48-55: `FEMC_GAME_CALENDAR`, `_PLACES`, `_JOBS`, `_EVENTS`, `_TEXTS`, `_LINKS`, `_FLAGS`, `_STATS` …). A page that defines those globals with Equinox's files gets Equinox. The epilogue already uses this trick (core.js `setWorld`/`inWorld`), so the engine copes with another calendar year (`cal.year`, core.js:69).
- **Saves:** everything is in one state `S`, saved under one key (`SAVE_KEY`, core.js:34, written only by `save()` / `saveQuiet()`, core.js:350-352). Slots are `${KEY}-slot1..10` (core.js:31). The battle save lives inside `S.battleSave`. The embedded battle frame reads and writes it through `window.parent.FemcBridge` (battle.js:37, 236-238) and never touches a key of its own in story mode. So **Equinox needs no battle save key**: a new `KEY` moves the life sim, its slots and its battle progress together.
- **`sandbox()` (core.js:3033) is not the tool here.** It redirects `save()` for one session, refuses slots, and reloads Solstice's autosave on exit. Equinox needs its own autosave and ten slots from the first line of `core.js`, so the key has to be chosen at load time (hook 1).
- **Cosmetics:** `cosmetics.js` keeps everything in `S.gacha.cos` (cs(), cosmetics.js:346), and plumes are in `S.gacha.plumes` (gacha.js). `import.js` writes the same fields, so the Wardrobe, the Boutique, the fitting room and battle looks work on an imported Equinox save unchanged.

## Settings: shared (recommended)

Keep `kg-femc-revamp-settings` shared. Every key in `DEFAULTS` (core.js:361) is a player preference (text speed, volume, battle speed, Rush, accessibility, screen size, seasonal looks), not progress. Kat tunes them once, and the battle frame already reads the same store (battle.js:34 `UNI_KEY`, via `BR.settings()`). Things that are progress, like tips seen and Wardrobe toggles, already live in the save. A separate store would only make her set volume and Rush twice. If one ever needs to differ, add it to `DEFAULTS` under a new name rather than splitting the store.

Also shared (fine as they are): `kg-femc-sound`, `kg-femc-music` (scene.js:102, track rotation), `kg-femc-battle-music` (battle.js:389), `kg-femc-battle-proto` (practice prefs read at core.js:2895).

## Hooks needed (hard-coded Solstice assumptions)

Each one: read `window.FEMC_GAME_CONFIG` (call it `CFG`), else today's value. All are one-line changes. **Made in build batch 2 (Nov 15): 1, 2, 3, 5/6 (as `CFG.titleScreen`), 8, 9, 11, 12, plus `CFG.prologueSlot` and the prologue's `cast`; battle scripts `eqx-well-1/-2`.** 4, 13, 15 need nothing; 7 isn't reached (Equinox's title is its own page); 10 and 14 wait for the battle-page batch.

| # | Where | Solstice assumption | Smallest change |
|---|---|---|---|
| 1 | core.js:29 | `KEY = 'kg-femc-revamp'` (autosave + `-slotN` + `exportCode` game id) | `const KEY = (window.FEMC_GAME_CONFIG \|\| {}).key \|\| 'kg-femc-revamp'` |
| 2 | core.js:1944, menu.js:905 | clears list `'kg-femc-revamp-clears'` (NG+ endings, Theater endings, album ending CGs) | `CFG.clearsKey \|\| …` in both |
| 3 | core.js:1940 `endingName`, epilogue.js:101 `endingOf` | Solstice's ending names from `route-*` flags (written into the clears list) | `W.FEMC_GAME_FLAGS.endingName?.(S.flags) \|\| …` (data-side function, Equinox's flags.js) |
| 4 | core.js:29-30 `HANDOFF_KEY`, `LEGACY_BATTLE_KEY`, `PREMERGE_KEY` | pre-merge migration keys | none: a fresh save has `mv: MERGE_V`, so the legacy path never runs for Equinox. `slotInfo` (core.js:2995) only reads the legacy battle key when `battleSave` is missing: harmless |
| 5 | ui.js:776, 810, 812 | title logo `solstice-logo.svg`, cover `title/cover.webp`, "Solstice / Every Universe" text | `CFG.title = { logo, cover, name, tagline }`, read in `titleScreen`/`logoLoad` |
| 6 | ui.js:814 title menu | New Game / Continue / Load only | `CFG.titleItems` hook (or `window.FemcEquinoxTitle?.(sec)` like `FemcEpiSim.title`, ui.js:821) to add **Import from Solstice** |
| 7 | ui.js:816 | Practice link to `femc-battle.html?practice=1` | hide when `CFG.practice === false` (Equinox practice is a later decision) |
| 8 | ui.js:1056, 1103-1105 | credits/roll text "Persona 3: Solstice" | `CFG.title.name` |
| 9 | menu.js:1231, 1313 | Extras kicker and menu ghost word "Solstice" | `CFG.title.name` |
| 10 | ui.js:23 `battleSrc` | battle frame has no idea which game it serves | append `&game=${CFG.id}` (only if set). The battle page then loads Equinox's battle overlay (the Well's blocks, Shadows) after `data.js`. That is a battle-page batch; story fights already carry everything else in the handoff request |
| 11 | cosmetics.js:388 `bannerEnd` | banner countdown dates hard-coded 2009 / 2010 | `G.D.cal.year` / `+1` instead of 2009 / 2010 |
| 12 | cosmetics.js:477 `TITLE_KEY` | title-screen colour copy `'kg-femc-title-theme'` (painted before the save loads) | `CFG.titleKey \|\| …` so each title keeps its own colours |
| 13 | core.js:1667 / 2013 `XMAS` Christmas Eve picker | generic engine, but offers Solstice's Christmas options when links have `christmas` data | none if Equinox's links have no `christmas` field, or `D.cal.christmasPick === false` |
| 14 | battle.js:254, climb.js:31, stamps.js:29 | read Solstice's clears (practice epilogue branches, the NG+ climb, stamps) | Equinox page doesn't load `stamps.js`/`climb.js`/`epilogue.js`/`episim.js`. The battle page's reads stay Solstice-only until hook 10 |
| 15 | core.js:2826 `returnTo: 'femc-game.html?from=battle'` | old two-page handoff | none: unused since the one-game merge (embedded frame) |

Not loaded on `femc-equinox.html`: `epilogue.js`, `episim.js`, `stamps.js`, `scrapbook.js`, `climb.js` (all Solstice content). Every engine call to them is already guarded (`window.FemcEpilogue?.…`, ui.js:614, 644, 648, 1061).

## Files and layout

- `femc-equinox.html` (later batch): a copy of `femc-game.html`'s shell and engine scripts, with the config script first and Equinox's data scripts in place of `assets/femc/game/data/*`. Same CSS. Its own `?v=` numbers for its own data.
- `assets/femc/equinox/`: Equinox's code that isn't engine (`import.js`) and `data/` (calendar.js, then links, story, places, texts…). Equinox art can live in `assets/femc/equinox/art/` and new backgrounds in the shared `assets/femc/bg/`, since Solstice backgrounds come back.
- Save keys: `kg-femc-equinox` (autosave), `kg-femc-equinox-slot1..10`, `kg-femc-equinox-clears`, `kg-femc-equinox-title-theme`. Settings shared (`kg-femc-revamp-settings`).

## Import from Solstice (built: `assets/femc/equinox/import.js`)

- `FemcEquinoxImport.slots()` lists Solstice's autosave and slots (read only) with date, playthrough, clear status, ending and finished epilogues.
- `read(slotKey)` returns only looks (`S.gacha.cos` own / on / portrait toggles: outfits for every fighter, weapons, Evokers, battle themes, menu colours, titles, wallpapers), leftover Velvet Plumes, the album (CGs, posts, booth strips, polaroids) and `[{ world, route }]` for finished epilogues. It refuses an unfinished year. In an epilogue save, it reads both layers (the year in `S.year1`, the layer's own Wardrobe copy and CGs).
- `apply(state, imported)` writes those into a fresh Equinox state under Solstice's field names, plus `state.solstice = { epilogues, from, plumes }` for the opening's flavour lines. It is idempotent.
- The only storage call is `localStorage.getItem`, and only for Solstice's 11 save keys and the clears list.
- Polaroids aren't stored in a Solstice save: they're worked out from epilogue records with a copy of `epilogue.js POLAROIDS` (the live table wins if `epilogue.js` is loaded). **When a polaroid is added to epilogue.js, add it to import.js too.**
- New Game flow for the build batch: title → Import → list `slots()` (finished ones selectable) → `G.newGame()` → `apply(G.S, read(key))` → `G.save()`.
- Test: `jsc tests/equinox_import_jsc.js` (89 checks: allowed fields only, both save layers, no writes, source byte-identical, apply touches only `gacha.cos` / `gacha.plumes` / `album` / `solstice`).

## Calendar (built: `assets/femc/equinox/data/calendar.js`)

- Same shape as Solstice's. Runs 4/6/2010 to 3/6/2011, with graduation on 3/4.
- 2010-11 Japanese holidays, including that year's Happy Monday dates.
- Exams on the same term weeks as Solstice. Summer and winter breaks as Solstice's.
- Real JST full moons (4/28 … 2/18): 9/23 falls on Autumnal Equinox Day, and 12/21 is the eclipse.
- No ops, trips or floor caps yet. The end date may move with the plot but must stay well before 3/11/2011.

## Build batch 1: the title page (built Nov 15 2026)

- `femc-equinox.html` + `assets/femc/equinox/title.css` / `title.js`: the Equilux title in blood red (the approved mockup's screen A, letterboxed 16:9, all drawn in code), the ticking clock, dusk on any input, and a menu: New Game · Import from Solstice · Continue · Back to Solstice. Keyboard and controller (pad.js) both work: ↑↓ move, ✕ / Enter press, ○ / Esc back.
- No engine yet, so nothing of core.js is loaded and none of the hooks above is made. New Game and Import only set the save's **starting point**: localStorage `kg-femc-equinox-start` = `{ v: 1, at, fresh: true }` or `{ v: 1, at, from, import: <FemcEquinoxImport.read() result> }`. The engine batch reads it at New Game, calls `FemcEquinoxImport.apply(G.S, start.import)` and then deletes or keeps it (decide then).
- Continue shows the starting point (what came over) and says the year itself is still being built.
- Checked in the built-in pane (1440 × 900): title, New Game → Ready, Import list (unfinished saves greyed), a finished test save's preview and import, Esc back. The pane's test keys were removed afterwards.

## Build batch 2: the engine page and the opening (Nov 15 2026)

- **Two pages.** `femc-equinox.html` is the title (Equilux). Begin (after New Game or Import) opens `femc-equinox-game.html?go=new`; Continue (shown once an Equinox autosave exists) opens `?go=continue`. The game page's "Title" goes back to the title page.
- **`femc-equinox-game.html`:** the Solstice engine with `assets/femc/equinox/config.js` first (`FEMC_GAME_CONFIG`: save `kg-femc-equinox`, clears `kg-femc-equinox-clears`, title colours `kg-femc-equinox-title-theme`, names, `prologueSlot: 'early'`, `titleScreen()`, `begin(start)`). Data: Equinox's `calendar.js`, `flags.js`, `prologue.js`, `story-opening.js`; the shared town (stats, places, gifts, jobs and job scenes, clubs, class questions, Boutique layout). Not loaded: Solstice's links, living-*, crush-*, spice-*, story acts, texts, daily life, the epilogue, sugram, glitch, stamps, scrapbook, trials, requests, the Index. Links come in batch 3.
- **`begin(start)`:** `G.newGame()`, `FemcEquinoxImport.apply(S, start.import)`, then flags for the opening's lines: `eqx-from-none`, or `eqx-from-<world>` + `eqx-from-<world>-<route>` for the last epilogue in the import's list. The start key is deleted once the year begins.
- **Blood red in game:** `tools/equinox-css.py` writes red copies of 17 game stylesheets to `assets/femc/equinox/css/` (Equilux palette for Solstice's main colours, every other pink hue-shifted, `url()`s rewritten). **Re-run it after any change to Solstice's game CSS** and bump the copies' `?v=`. Never edit the copies.
- **Battle:** `battle.js` SCRIPTS `eqx-well-1` (Solar alone, interrupted) and `eqx-well-2` (Haechan joins). Backdrop `tartarus-scene` until `eqx-well-bottom.webp` exists (`ART_HAS_WELL`).
- **Solstice is unchanged:** every hook falls back to Solstice's value when `FEMC_GAME_CONFIG` is unset.
