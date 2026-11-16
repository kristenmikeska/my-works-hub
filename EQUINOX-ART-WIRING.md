# Equinox art: wiring notes (for Claude)

Kat's list is `EQUINOX-ART-TODO.md`; this file is its technical twin, keyed by item number and name. Kat doesn't need to read it. The title, the engine page and the opening are built (EQUINOX-TECH.md); art batch 1 (Nov 15) wired sections 1-7 of the first list. Kat's batch-1 sources stay where she saved them (`Femc Mode Images/Equinox/`): don't move them.

**Rules carried over from Solstice (FEMC-ART-WIRING.md):** WebP (q86 backgrounds / CGs, q92 figures), native size; record every source in `tools/femc-new-adds.json` and move it to `Femc Mode Images/Added to Game/`; remove finished items from EQUINOX-ART-TODO.md and fix its count line; never overwrite a Solstice file (Equinox gets its own copies even when a piece looks shared). Spoilers: item names and prompts in Kat's list stay visual-only; anything plot-bound (block names, who a figure is in the story) lives here or in the private plan, never in her list.

**Attachments added to Place Prompt Attachments for this list (Nov 15; copies, Kat's sources untouched):** `Key art - style (Solstice).png` (title/keyart.webp), `Cover - style (Solstice).png` (title/cover.webp), `Menu - style (Solstice day).png` / `(Solstice Dark Hour).png` (title/menu-backdrop-day / -darkhour.webp), `Logo - style (Solstice).png` (title/solstice-logo.svg rendered by qlmanage, 1600 square), `BG - style (Tartarus).png` (bg/tartarus-yabbashah.webp), `Persona - style (Theia).png` (Femc Mode Images/Personas/Theia.png), `Body - Yunjin.png` (profile/searchers/yunjin.webp; the style and framing reference for every full-body item), `CG - Appa (Strangers).png` / `CG - Eomma (Strangers).png` (portraits/taesang-strangers, miyeon-strangers neutral: the faces the strangers epilogue uses), `CG - Mom (HOAX).png` / `CG - Dad (HOAX).png` (portraits/kim-mom, kim-dad neutral), `solar-posesheet.png` (Femc Mode Images root). Already there: `Solar.png`, `Hanni.png`, `Hyein.png`, `CG - Jaesang (Runners).png`, `CG - Solji (Runners).png`, `CG - Chaewon / Sakura / Kazuha / Eunchae (Strangers).png`, the four `BG -` world places.

## Where batch 1 put things (Nov 15 2026; the old planned tree is replaced by this)

```
assets/femc/bg/eq-well-1..8.webp            the Well's block backdrops (nothing uses blocks yet)
assets/femc/equinox/art/                    cover-day / cover-night / clockface (the title), emblem + icon-192 / icon-512 / favicon.png,
                                            menu-day / menu-dark (menu backdrops), loading-well / loading-between (fight loading),
                                            test-keyart / test-logo (the look tests: reference, not shown),
                                            solar/arms-crossed.webp (menu figure), solar/posesheet.webp (kept for the battle batch),
                                            bodies/<name>.webp (Social Link full bodies), personas/<fighter>-concept.webp (reference only)
assets/femc/portraits/solar-equinox/        Solar's Equinox faces (Solar's canvas; scale.js 0.97; place.js borrows solar's nudge)
```

## 1-6. Wired (art batch 1, Nov 15 2026; details in EQUINOX-TECH.md "Art batch 1")
- 1A / 1B: stored only. The title keeps drawing the logo as live text (per-letter drop-in and dusk flicker).
- 2A / 2B / 2E: the Equilux title (title.js `ART`, title.css `.art-covers` / `.art-clock`; `?art=0` shows the all-code title).
- 2C / 2D: game.css overrides of the generated CSS's menu backdrops. 2F: favicon + apple-touch icon on both Equinox pages (no save-slot badge or spinner yet). 2G / 2H: config.js `loading`.
- 3B: `portraits/solar-equinox/` + config.js `faces`. 3C: config.js `homeFig`. **3A not wired:** the battle page doesn't know Equinox yet (EQUINOX-TECH hook 10); cut it with `tools/femc-wardrobe.py` onto sheet 1's canvas in the battle-page batch (source kept as `equinox/art/solar/posesheet.webp`, Kat's original in `Femc Mode Images/Equinox/`).
- 4A-4H: converted only. None is the opening's 8A / 8B (no gold rope, no bottom water ring); `eq-well-1` (a spiral stair down a round stone well) is the nearest to 8B in feel, Kat's call. `ART_HAS_WELL` stays false.
- 5A-5D, 6A-6F: config.js `linkFig` (couple links show both figures). Kat's files are named for the Equinox cast (`taejoon`, `miseon` = 6C / 6D).

## 7. Persona concepts (7A-7C)
- 7A / 7B wired as reference: `equinox/art/personas/hanni-concept.webp`, `yunjin-concept.webp` (no game use). 7C still to make; same treatment.
- The game's Persona art comes later as a single 2:3 figure on black like `Personas/Theia.png` → `battle/art/personas/<name>.webp`. Visual sources: the private plan §10's candidate myths; never name the myth or the Persona in Kat's list until she picks.

## 12. Later
Counts from EQUINOX-PLAN.md's art section. Prompts wait for the story parts and the picked direction; plot-bearing pieces (CGs, bosses, guardians, the two new characters, Haenim's new form, the duo cut-in) must be written visual-only, checked against `DO-NOT-OPEN-equinox-plot.md` for what not to show.

## 8. The opening (Nov 15, build batch 2)

- **Backgrounds 8A–8F** → `assets/femc/bg/<save name>.webp` (q86, native size). In `assets/femc/equinox/data/prologue.js` / `story-opening.js` each place has a `// BG: <slug> — …` comment above the line using its stand-in; swap that line's `bg` to the new name (8A `eqx-well-bottom` ↔ comment `well-bottom`, 8B `eqx-well-shaft` ↔ `well-shaft`, 8C `eqx-courtyard-well-night` ↔ `gekkoukan-courtyard-well-night`, 8D `eqx-courtyard-well-day` ↔ `gekkoukan-courtyard-well-day`, 8E `eqx-oka-gate` ↔ `oka-boarding-house-gate`, 8F `eqx-oka-kitchen` ↔ `oka-boarding-house-kitchen`). 8A also: `battle.js ART_HAS_WELL = true` (the Well fights' backdrop) and bump ART_V.
- **8G Mrs. Oka's faces** → `tools/femc-sheet-alpha.py` / `femc-portraits.py` into `assets/femc/portraits/mrsoka/` (speaker id `mrsoka`; `oka` is Solstice's "Old Oka" job character, don't reuse it), scale.js + placements as any new face. Cell 6 is `worried` (the scenes use `neutral` only so far).
- **CGs 8H–8V** → `assets/femc/cg/<save name>.webp`; each has a `// CG: eqx-<slug> — …` comment at its spot: put `{ cg: 'eqx-<slug>' }` there and `{ cg: null }` where the moment ends. Album / Theater listing for Equinox CGs is a later batch.
- **8W–8Z (added with the rank 1s):** 8W `eqx-oka-garden` ↔ comment `oka-boarding-house-garden`, 8X `eqx-oka-upstairs` ↔ `oka-boarding-house-upstairs` (both in `assets/femc/equinox/data/links/mrsoka.js`); CGs `eqx-oka-button` (mrsoka.js) and `eqx-threads` (elizabeth.js) at their `// CG:` comments.

## 10. Solar's Equinox home-screen poses
- `eq-solar-hd-<pose>.png` (17; arms-crossed is `equinox/art/solar/arms-crossed.webp` already) → cut like Solstice's own HD set (`tools/femc-hd-poses.py` own-set logic: native size, feet on the bottom edge, WebP q92) into `assets/femc/equinox/art/solar/<pose>.webp` + a fig.json; ui.js `homePose` / `HOME_POSES` needs a config override (e.g. `FEMC_GAME_CONFIG.homePoses = { dir, v }`) so Equinox's evening figure uses them (Solstice unchanged).

## 11. Act I and the first meetings
- BGs → `assets/femc/bg/<save name>.webp` (q86, native size); CGs → `assets/femc/cg/<save name>.webp`. At each `// BG: <slug>` comment swap that line's `bg` to the new name; at each `// CG: eqx-<slug>` comment put `{ cg: 'eqx-<slug>' }` and `{ cg: null }` where the moment ends. Bump ART_V.
- Item → file and comment:
  - 11A `eqx-oka-front-room` ← `story-act1.js`, comment `// BG: oka-boarding-house-front-room`
  - 11B `eqx-oka-veranda-evening` ← `story-act1.js`, comment `// BG: oka-boarding-house-veranda-evening`
  - 11C `eqx-courtyard-well-evening` ← `links/yukari.js`, comment `// BG: gekkoukan-courtyard-well-evening`
  - 11D `eqx-cafe-terrace-evening` ← `links/mitsuru.js`, comment `// BG: portisland-cafe-terrace-evening`
  - 11E `eqx-port-island-bridge-night` ← `links/mitsuru.js`, comment `// BG: port-island-bridge-night`
  - 11F `eqx-harbor-low-tide-evening` ← `links/yunjin.js`, comment `// BG: port-island-harbor-low-tide-evening`
  - 11G `eqx-port-island-beach` ← `story-act1.js`, comment `// BG: port-island-beach-golden-week`
  - 11H `eqx-wilduck-restroom` ← `links/cherry.js`, comment `// BG: wilduck-restroom`
  - 11I `eqx-shrine-playground` ← `links/ken-koromaru.js`, comment `// BG: naganaki-shrine-playground`
  - 11J `eqx-shrine-steps-day` ← `links/jaehyun.js`, comment `// BG: naganaki-shrine-steps-day`
  - 11K `eqx-records` ← `story-act1.js`, comment `// CG: eqx-records`
  - 11L `eqx-the-knock` ← `story-act1.js`, comment `// CG: eqx-the-knock`
  - 11M `eqx-knock-shadow` ← `story-act1.js`, comment `// CG: eqx-knock-shadow`
  - 11N `eqx-tanabe-room` ← `story-act1.js`, comment `// CG: eqx-tanabe-room`
  - 11O `eqx-flour-handle` ← `story-act1.js`, comment `// CG: eqx-flour-handle`
  - 11P `eqx-viral` ← `story-act1.js`, comment `// CG: eqx-viral`
  - 11Q `eqx-first-hill` ← `story-act1.js`, comment `// CG: eqx-first-hill`
  - 11R `eqx-door-r1` ← `story-act1.js`, comment `// CG: eqx-door-r1`
  - 11S `eqx-yukari-arrow` ← `links/yukari.js`, comment `// CG: eqx-yukari-arrow`
  - 11T `eqx-mitsuru-helmet` ← `links/mitsuru.js`, comment `// CG: eqx-mitsuru-helmet`
  - 11U `eqx-aigis-reading` ← `links/aigis.js`, comment `// CG: eqx-aigis-reading`
  - 11V `eqx-standing-tide` ← `links/yunjin.js`, comment `// CG: eqx-standing-tide`
  - 11W `eqx-cherry-sleeve` ← `links/cherry.js`, comment `// CG: eqx-cherry-sleeve`
  - 11X `eqx-koromaru-corner` ← `links/ken-koromaru.js`, comment `// CG: eqx-koromaru-corner`
  - 11Y `eqx-jaehyun-procedure` ← `links/jaehyun.js`, comment `// CG: eqx-jaehyun-procedure`
  - 11Z `eqx-rio-saori-bench` ← `links/rio-saori.js`, comment `// CG: eqx-rio-saori-bench`
  - 11AA `eqx-tale-book` ← `links/rio-saori.js`, comment `// CG: eqx-tale-book`
- All files are under `assets/femc/equinox/data/` (`links/` for the rank files). Album / Theater listing for these CGs is a later batch.

## Haechan's Equinox faces (Nov 15, in)
- Kat's eight singles `Equinox/eq-haechan-<face>-portrait.png` (1254², transparent) → `assets/femc/portraits/haechan-equinox/` on an 880 × 822 canvas: one shared scale (0.702, Vision face height matched to his base neutral), each face centred on the neutral's position, his face height level with his base portraits'. Faces: neutral, smirk, happy, sad, angry (also saved as `serious`), blushing (also `flustered`), surprised, slight-surprise. `config.js faces.haechan`, scale.js 0.95, placements-data.js face centre 0.435 (place.js regenerated; it borrows his base nudge). Kat can fine-tune on the placements review page.
- The same method (one approved portrait, then each expression as a separate edit) is how the other main characters' Equinox faces should be made.
