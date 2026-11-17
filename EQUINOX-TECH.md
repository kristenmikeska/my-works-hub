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

## Build batch 3: links data (Nov 15 2026)

- **`assets/femc/equinox/data/links.js`** pushes the year's 33 Social Links onto `window.FEMC_GAME_LINKS` (loaded by `femc-equinox-game.html` after the other Equinox data, before core.js). Same format as Solstice's `assets/femc/game/links/stubs.js`: every entry is `status: 'stub'` with no ranks for now, but complete otherwise (id, name, short, arcana, numeral, from, kind, world, romance, maxRank, starts, home with a hint). Returning solo links keep their Solstice ids so portraits, contacts and gifts find them; duo, group and couple links have their own ids and a `members` list (with `cast` for their names). Extra fields the engine doesn't read yet: `members`, `lodging` (dorm / guesthouse / boarding) and `arrives`. To write a link, move it to `assets/femc/equinox/data/links/<id>.js` with ranks (a written file with the same id wins over the stub).
- Stubs are inert in the engine: `linkStatus` says 'unwritten', and Who's free, Contacts, invites, calls, holidays and Christmas all skip `status: 'stub'`. The Social Link screen lists met links only, and nobody is met yet, so it reads "0 of 33 met". One visible change: the capsule machine's keychains of anyone who is now a link wait until that person is met (gacha.js `itemEligible`), as in Solstice; before this file every keychain was in the pool.
- Not yet: map areas for the guesthouse and the boarding house (homes are town spots until then), portraits for the duo and group links (they borrow their first member's), card art for the World. LE SSERAFIM's and the parents' faces came in art batch 3.

## Art batch 1: Kat's first Equinox pictures (Nov 15 2026, manifest batch 162)

Sources: `~/Documents/UniverseHub-Images/Femc Mode Images/Equinox/` (33 PNGs, left in place, unchanged). Where each went: EQUINOX-ART-WIRING.md "Where batch 1 put things".

- **Title (femc-equinox.html, title.js v3 / title.css v2):** `ART = { covers, clock }` adds `.art-covers` (day cover in `.lay.day`, night cover in `.lay.night`: the ticking conic mask and the dusk radial now wipe one picture into the other; rings and halftone fainter) and `.art-clock` (Kat's clock face as an `<img class="cf">` inside each `.face12`, multiplied into the day, inverted and screened into the night; the SVG's rings, ticks and numerals hidden, the spinning dashed ring kept). `?art=0` shows the all-code title. Nothing new animates, so reduced motion is unchanged. Favicon / apple-touch icon from the emblem on both pages.
- **Engine hooks (all read `FEMC_GAME_CONFIG`; unset = Solstice unchanged):**
  - `faces: { solar: 'solar-equinox' }`: core.js `gameFace`, used by `portrait()` and `scale()` after the epilogue world's faces and a worn Wardrobe outfit, in place of the seasonal S.E.E.S. faces, only when the folder has faces; menu.js Status tab's Solar picture.
  - `homeFig: { src, ar, ht, hf, hx }`: menu.js `homeFig()` (after a worn outfit's HD pose).
  - `linkFig: { linkId: entry | [entry, entry] }`: menu.js `cfgFigure` before `LINK_FIG`; two entries stand side by side (`img.pair.p0/.p1`, equinox/game.css).
  - `loading(kind, request)`: ui.js `openBattle`'s still: the Well's (`kind === 'tartarus'` or a script `eqx-well*`), else "in between".
- **Menu backdrops:** equinox/game.css (v4) overrides the generated CSS's `menu-backdrop-day / -darkhour` on `.g-fmh-bg`, `.g-pg-bg`, `.g-sl-bg`.
- **Solar's faces:** `tools/femc-skin-portraits.py <eq-solar-portraits.png> <out> solar` (matched to her own faces, Solar's 862 × 851 canvas), WebP q90 → `portraits/solar-equinox/`; index.js entry, scale.js 0.97, placements-data.js face centre = solar's (place.js inherits solar's nudge; it's on the placement review page for Kat).
- **Not wired:** the pose sheet (the battle page doesn't know Equinox yet: hook 10), the Well backgrounds (no blocks yet; none is 8A / 8B), the look tests and Persona concepts (reference).
- Checked in the built-in pane: the title at 1440 × 900 (as 800 × 500) and 390 × 844, day and dusk; a scene with her new faces; the menu screen; the Social Link screen (a couple link and Chaewon); a Well fight's loading still; femc-game.html's title with no errors. HTML: core v102, menu v54, ui v91, portraits index v160 / scale v177 / place v11 (both game pages), config v3.

## Art batch 2: the opening's first pictures (Nov 15 2026, manifest batch 163)

Sources: `~/Documents/UniverseHub-Images/Femc Mode Images/Equinox/` (14 PNGs, left in place, unchanged). Items 7C, 8A-8M; wiring notes in EQUINOX-ART-WIRING.md §8.

- **Backgrounds (q86, native 1672 × 941):** `bg/eqx-well-bottom`, `eqx-well-shaft`, `eqx-courtyard-well-night`, `eqx-courtyard-well-day`, `eqx-oka-gate`, `eqx-oka-kitchen`, swapped in at their `// BG:` comments and the uncommented repeats of the same places. places-extra.js: okahouse `bg` / `bgEvening` = `eqx-oka-gate`, plus `P.cgFocus` entries for the new CGs. battle.js `ART_HAS_WELL = true` (eqx-well-1 / -2 fight on `eqx-well-bottom`), ART_V 61.
- **game.css:** the Dark Hour drain filter (`.gs.gs-darkhour .gs-bg`) now skips `/eqx-` backdrops: they're painted red already (it was greying them out).
- **scene.js:** a `{ bg, music }` line now sets the backdrop too (the music branch returned before reading `bg`, so every Equinox scene opening that way started on a blank backdrop). Solstice data never combines the two, so it's unchanged.
- **CGs (q86):** `cg/eqx-room-light`, `eqx-ribbon-glove`, `eqx-well-waking`, `eqx-holders-wake`, `eqx-minji-frame`, `eqx-there-you-are`, as `{ cg }` / `{ cg: null }` pairs in prologue.js (inside the ifFlag branches where the comment is). Album / Theater listing: later.
- **Mrs. Oka (speaker `mrsoka`):** `tools/femc-sheet-alpha.py … MrsOka --emotions neutral,happy,sad,serious,surprised,worried` + `femc-portraits.py --same-scale mrsoka` → `portraits/mrsoka/`, index.js entry, scale.js 1.08 (Vision face height 0.347; the anime cast's scale × face × Kat's size sits near 0.35-0.40, so 1.08 puts her level with Solar), placements-data.js [0.883, 0.696] (+ main world list), place.js regenerated.
- **7C:** `equinox/art/personas/hyein-concept.webp` (reference only).
- Checked in the built-in pane (muted): the prologue's made-up room and waking CGs, the Well bottom backdrop unfiltered, the courtyard by night and by day, the 4/9 boarding-house gate and kitchen with Mrs. Oka's face, a CG with its focus point, the Go Out boarding-house panel, the first Well fight on `eqx-well-bottom`; femc-game.html title loads (only the old `/favicon.ico` 404). HTML: prologue v5, story-opening v4, story-act1 v2, places-extra v2, links/mrsoka v3, equinox game.css v6, scene v51, portraits index v162 / scale v179 / place v13 (both game pages), battle.js v117.

## Art batch 3: the Personaverse faces, Haechan restyled, Haenim's new look (Nov 15 2026, manifest batch 164)

Sources: `~/Documents/UniverseHub-Images/Femc Mode Images/Equinox/` (14 PNGs + Haechan's 8 in `haechan revamp portraits - art style edit/`, left in place, unchanged). Items 9A-9L plus Elizabeth's Equinox faces; wiring notes in EQUINOX-ART-WIRING.md §9 and "Haechan's Equinox faces".

- **Speaker ids for writers (Equinox scenes, `s: '<id>'`):** `chaewon`, `sakura`, `kazuha`, `eunchae` (their own Equinox folders), `theodore`, `elizabeth` (→ `elizabeth-equinox` through config `faces`), and for the parents the couple links' member ids: **`jaesang-runners`, `solji-runners`** (Runners), **`taesang-strangers`** (Taejoon), **`miyeon-strangers`** (Miseon) (strangers), **`kim-dad`, `kim-mom`** (HOAX). Names come from each link's `cast`. Don't use the epilogues' generic `dad` / `mom` / `appa` / `eomma` here (three couples share the year). Faces: neutral, happy, sad, serious, surprised, flustered (Elizabeth: neutral, happy, sad, serious, surprised, wink; Haechan also angry, blushing, smirk, slight-surprise).
- **config.js (v8):** `faces` gains elizabeth and the six parent ids (a couple link's portrait is its first member's Equinox face); new `art` map (`{ '<path under assets/femc/>': '<Equinox path>' }`): `battle/art/personas/haenim.webp` → `equinox/art/personas/haenim.webp`.
- **battle/data.js (v44, all three pages):** after `personas`, swaps any Persona's `art` listed in `FEMC_GAME_CONFIG.art`, read from the page or, in the battle frame, from its parent (try/catch; unset = Solstice and practice unchanged). That covers the menu's Personas tab and Forms and every battle use (cards, preload). **scene.js (v52):** `{ summon }` lines read the same map (`artPath`).
- **links.js (v2):** the four LE SSERAFIM entries lost their `face: '<name>-strangers'` aliases.
- **Portraits:** sheets cut with `femc-sheet-alpha.py` + `femc-portraits.py --same-scale` (Theodore's and Elizabeth's sheets were RGB with a baked checkerboard: lifted with `femc-lift.swift` first); index.js v163, scale.js v180 (12 scales, `FEMC_PORTRAIT_V` 36 for Haechan's replaced files), place.js v14 + placements-data.js (both game pages).
- **Haechan:** `portraits/haechan-equinox/*` replaced in place with the restyled set (same canvas, scale and face position as before; `serious` now its own face).
- **CGs:** the five `eqx-*` CGs that looked newer have batch 163's exact hashes: nothing to redo.
- Checked in the built-in pane (1440 × 900, muted): Haechan beside Solar in his 4/14 rank (face height on screen 324 px vs Solar's 280, as with the old set), LE SSERAFIM, Theodore and all six parents in a test scene beside Solar (Chaewon's face 281 px vs Solar's 280), Elizabeth's 4/13 Velvet Room rank with her Equinox face, the Personas tab and a `{ summon }` line with Haenim's new look, the battle frame (inside Equinox) loading her new art and Sunna's unchanged; femc-game.html: Solstice faces and Haenim unchanged, no errors. The test's Equinox keys were removed.

## Art batch 4: the main cast's Personaverse faces (Nov 16 2026, manifest batch 165)

Sources: `~/Documents/UniverseHub-Images/Femc Mode Images/Equinox/` (left in place): sheets `eq-<id>-portraits.png` for Aigis, Akihiko, Hanni, Hyein, Jungwon, Junpei (five faces, no serious), Ken, Koromaru, Minji, Shinjiro, Yunjin, Cherry, Mark, Chenle, Theodore and Elizabeth (both new transparent sheets) and Solar (`eq-solar-portraits-REMAKE.png`); singles `eq-<id>-<face>-portrait.png` for Fuuka, Jihoon, Mitsuru, Yukari (`angry` = serious; Yukari's `neutral-portrait-2` is her neutral, the later of the two) and Akihiko's extras `competitive` / `earnest`. EQUINOX-ART-TODO 12A-12O, 12Q-12S.

- **Folders:** `portraits/<id>-equinox/` for aigis, akihiko (+ competitive, earnest), cherry, chenle, fuuka, hanni, hyein, jihoon, jungwon, junpei (`serious` = a copy of neutral until 12D2), ken, koromaru, mark, minji, mitsuru, shinjiro, yukari, yunjin; `solar-equinox`, `theodore` and `elizabeth-equinox` replaced in place (FEMC_PORTRAIT_V 37).
- **config.js `faces`:** each speaker id → its `-equinox` folder, so every Equinox scene, link and menu face uses them (a worn Wardrobe outfit still wins, as before).
- **Placement (`tools/femc-equinox-faces.py`, new; `tools/femc-facebox.swift`):** each new face goes on its Solstice portrait's own canvas, so scale.js (`<id>-equinox` = the base's value) and the placements (face centre = the base's; place.js borrows the base's nudge) still fit. The neutral is sized and placed by face (Vision) where it reads the face; every other expression is placed by matching the body, so nothing drifts between expressions. Where Vision can't read an anime face, the size follows the cast's on-screen face (see the tool's header). Exceptions: Fuuka's canvas widened 540 → 800 (her hair was cropped); Chenle's cut 837 → 712 tall at his bust (scale 1.2 → 1.021, face centre recomputed, own nudge `y: 0` in placements-kat.json). Solar's remake: `FEMC_BODY=1 tools/femc-skin-portraits.py` (the same tool as batch 1, now with body alignment; her new faces drifted ~30 px when each was matched on its own).
- Attachment `Style - Equinox portrait (Solar).png` is now the remake's neutral (old in `Old/`); `Junpei (Equinox) - portraits.png` added for 12D2.
- Checked in the built-in pane (1440 × 900, muted, test keys removed after): all 20 speakers beside Solar in a test scene; all load, and faces sit at the cast's size. HTML: config v14, portraits index v165, scale v182, place v16 (both game pages).

## Art batch 5: the opening's next CGs, Jaehyun, Dalnim, Equinox's own Velvet Room and Gekkoukan (Nov 16 2026, manifest batch 166)

Sources: `Femc Mode Images/Equinox/` (14 files, left in place).
- **CGs (EQUINOX-ART-TODO 8N-8V):** `cg/eqx-sun-and-moon`, `-rope-climb`, `-well-mouth`, `-lounge-full`, `-page-stay` (prologue.js) and `eqx-breakfast`, `-betting-book`, `-register`, `-mrs-oka` (story-opening.js), each a `{ cg }` / `{ cg: null }` pair at its `// CG:` comment, ending where its moment ends (before the next fight, place change, choice or first spoken line as fits). WebP q86, native size. No cgFocus (centre).
- **Background 8W:** `bg/eqx-oka-garden` on Mrs. Oka's rank 1 (links/mrsoka.js, at its `// BG: oka-boarding-house-garden` comment). Act IV's December garden scenes keep their stand-ins (spring light wouldn't fit).
- **Equinox-only backgrounds (new config `bgs`, core.js `gameBg` inside `seasonal()`):** `velvetroom-1` → `bg/eqx-velvetroom` (red), `darkhour-gekkoukan-gate` → `bg/eqx-darkhour-gekkoukan-gate` (red; the `eqx-` name keeps game.css's green-to-red drain off it). Every rule, `{ bg }` line and override naming the Solstice slug shows Equinox's picture; Solstice unchanged (no `bgs`). The Wardrobe's Velvet Room wallpaper still uses Solstice's.
- **Jaehyun (12P):** `portraits/jaehyun-equinox` via `tools/femc-equinox-faces.py` (cast-standard size, M_TARGET .385, on his Solstice canvas), config `faces.jaehyun`, scale 1.0, placement = his base's.
- **Dalnim (12T):** `equinox/art/personas/dalnim.webp` (1024 × 1536, transparent), config `art` (Personas tab, Forms, battle frame, `{ summon }`). His Theurgy cut-in layer (`theurgy/haechan-persona.webp`) still shows the old Dalnim.
- Pane-checked (muted, 1440 × 900): every new file loads, the red gate (no double filter) and the red Velvet Room through their Solstice slugs, the breakfast CG in a scene, Dalnim's art in battle data, Jaehyun's face. HTML: core v106 (both pages), config v15, prologue v6, story-opening v5, mrsoka v6, portraits index v166 / scale v183 / place v17.

## Lost links (Nov 16 2026)

A route death's `dead.<id>` flag (story-act4.js) now means "gone for good" everywhere (core.js `deadLink`, exported): the
fighter leaves `available()` (so every party and story fight), the link's `linkStatus` is `{ reason: 'dead' }`, `goneLink`
counts it (Who's free, invites, the commute, Contacts' "Not around anymore"), `bondRank` 0 (no bond perks), `rankHint`
`lost` ("Lost · The card has turned face down."). menu.js Links screen: the card `.lost` (dark, "Lost" tag), the tarot
`.down` (its back drawn in equinox/game.css: oxblood, a stopped-clock ring), the figure `.lost` (a grey ghost). Solstice
never sets `dead.*`, so nothing changes there. Pane-checked (muted, 1440 × 900): Aigis lost on 11/24: out of the party,
"Lost" in the list and detail, card face down; Solstice's page loads. HTML: core v105, menu v55 (both pages), equinox
game.css v8.

## Battle side 1: party and the Well (Nov 15 2026)

- **Party (`config.js` `party` / `navigators`):** core.js `available()` and `navigator()` read `FEMC_GAME_CONFIG.party` / `.navigators` before stats.js's (same shape). Equinox's roster: everyone S.E.E.S. fought with on 4/8 plus Haechan, Jungwon, Jihoon and Minji from 4/8; Shinjiro from 5/29 once his `{ join: 'shinjiro' }` line plays (story-act2.js `eqx-discharge`, the only story edit); Fuuka navigates. With a config roster Junpei needs no join line (Solstice's special case stays when unset). The new fighters and the second navigator aren't in yet.
- **The Well (`assets/femc/equinox/battle/well.js`):** loaded only inside Equinox (femc-battle.html writes it in after climb.js when the head script has marked the page `data-game="equinox"`; femc-equinox-game.html loads it after tartarus.js) and a no-op unless `FEMC_GAME_CONFIG.id === 'equinox'`. It replaces, in place, `D.blocks` (eight blocks, one per `bg/eq-well-1..8`), `D.floors` (data.js's builder rules: main floors, landings, guardians, gates; 103 stopping floors; labels `B<n>F`, `gameFloor` = depth), puts the Well's full moons in front of `D.ops` (the battle save only keeps cleared ops `D.ops` knows; blocks without a written full moon yet use date ids, `eqx-<mmdd>`, which the story batch writing that op should keep), adds its Shadows (guardians cloned from tartarus.js's rules, renamed regulars on existing art), Fuuka's block and stairs lines, the event-room chatter, and `D.dungeon` (the battle page's words).
- **Calendar (`equinox/data/calendar.js` `floorCaps`):** the deepest floor open from each date; a block opens when the cap reaches its last floor, and going below a block also needs its full moon, as in Tartarus. The first date is also when the Well opens at night (core.js `dungeonOpen()`: `S.unlocked.tartarus`, or with `CFG.dungeon` once `floorCap() > 0`), so no story `{ unlock }` line is needed.
- **Words:** life sim `config.js` `dungeon` (ui.js `DG`: the evening option, the party prompt, the battle card, "Back from…", the unlock toast); battle page `D.dungeon` (battle.js `DUN`: hub title and Enter button, best floor, the barrier, the stairs, teleport, floor labels). Both default to Tartarus's exact words when unset.
- **Solstice and practice are unchanged:** no config means no well.js, no `D.dungeon`, stats.js's roster, `S.unlocked.tartarus` only.
- **Not yet (later batches):** the Well's own version of the Reaper (waits for its art; Tartarus's Reaper stands in), new Shadow behaviours, the reflection rooms, the second navigator, the new fighters, superbosses, the Well's own Shadow art (regulars borrow existing art), event rooms and chatter written for the Well (tartarus.js's generic events and the stairs/barrier text on secret floors still say "Tartarus" / "up" in places), the hidden-room label (`B<n>F` rooms behind cracked walls show `<n>F·B`), and the stats.js "Tired" text that mentions Tartarus.
- **Checked in the built-in pane (muted, Equinox keys removed after):** a fresh Equinox save jumped to 6/1 evening: the dorm's "The Well" option, the prompt (floors to B60F, all 13 fighters with Shinjiro joined), the battle frame loading well.js (hub "THE WELL", Enter at B26F, teleport to B1F / B6F "down to…"), a fight on the First Hill backdrop with Solar, Haechan, Minji and Shinjiro, a Doorstep fight with a renamed regular, the night's result back in the save (best B26F). femc-game.html (no config, 12 Tartarus blocks, roster unchanged) and femc-battle.html?practice=1 (Tartarus's 12 blocks / 158 floors, no well.js) unchanged. HTML: core v103, ui v93 (both game pages), battle.js v120, config v11, calendar v4, story-act2 v2, well.js v2.
