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
- 7A / 7B / 7C wired as reference: `equinox/art/personas/hanni-concept.webp`, `yunjin-concept.webp`, `hyein-concept.webp` (7C in art batch 2; no game use).
- The game's Persona art comes later as a single 2:3 figure on black like `Personas/Theia.png` → `battle/art/personas/<name>.webp`. Visual sources: the private plan §10's candidate myths; never name the myth or the Persona in Kat's list until she picks.

## 17. Later
Counts from EQUINOX-PLAN.md's art section. Prompts wait for the story parts and the picked direction; plot-bearing pieces (CGs, bosses, guardians, the two new characters, Haenim's new form, the duo cut-in) must be written visual-only, checked against `DO-NOT-OPEN-equinox-plot.md` for what not to show.

## 8. The opening (Nov 15, build batch 2)

**Wired in art batch 2 (Nov 15; details in EQUINOX-TECH.md "Art batch 2"): 8A-8M.**
- 8A-8F: `bg/eqx-*.webp` at every `// BG:` comment (prologue, story-opening, story-act1, links/mrsoka.js), plus the same places without a comment (the Well bottom's second visit, the courtyard's Dark Hour lines in prologue and story-act1). places-extra.js okahouse `bg` / `bgEvening` = `eqx-oka-gate`. Still on `eqx-oka-gate` as stand-ins (comments kept, swap when the art exists): mrsoka.js rank 1 / back step (8W garden) and story-act1's Children's Day veranda (11B). `ART_HAS_WELL = true`.
- 8G: Kat's file is `mrs-oka-portraits.png` (not the list's `eqx-mrsoka-portraits.png`) → `portraits/mrsoka/` (neutral, happy, sad, serious, surprised, worried), scale.js 1.08, face centre 0.696; Kat to fine-tune on the placements review page.
- 8H-8M: `cg/eqx-*.webp`, `{ cg }` / `{ cg: null }` pairs at each comment; cgFocus in places-extra.js. Album / Theater listing still to do.


- **Backgrounds 8A–8F** → `assets/femc/bg/<save name>.webp` (q86, native size). In `assets/femc/equinox/data/prologue.js` / `story-opening.js` each place has a `// BG: <slug> — …` comment above the line using its stand-in; swap that line's `bg` to the new name (8A `eqx-well-bottom` ↔ comment `well-bottom`, 8B `eqx-well-shaft` ↔ `well-shaft`, 8C `eqx-courtyard-well-night` ↔ `gekkoukan-courtyard-well-night`, 8D `eqx-courtyard-well-day` ↔ `gekkoukan-courtyard-well-day`, 8E `eqx-oka-gate` ↔ `oka-boarding-house-gate`, 8F `eqx-oka-kitchen` ↔ `oka-boarding-house-kitchen`). 8A also: `battle.js ART_HAS_WELL = true` (the Well fights' backdrop) and bump ART_V.
- **8G Mrs. Oka's faces** → `tools/femc-sheet-alpha.py` / `femc-portraits.py` into `assets/femc/portraits/mrsoka/` (speaker id `mrsoka`; `oka` is Solstice's "Old Oka" job character, don't reuse it), scale.js + placements as any new face. Cell 6 is `worried` (the scenes use `neutral` only so far).
- **CGs 8H–8V** → `assets/femc/cg/<save name>.webp`; each has a `// CG: eqx-<slug> — …` comment at its spot: put `{ cg: 'eqx-<slug>' }` there and `{ cg: null }` where the moment ends. Album / Theater listing for Equinox CGs is a later batch.
- **8W–8Z (added with the rank 1s):** 8W `eqx-oka-garden` ↔ comment `oka-boarding-house-garden`, 8X `eqx-oka-upstairs` ↔ `oka-boarding-house-upstairs` (both in `assets/femc/equinox/data/links/mrsoka.js`); CGs `eqx-oka-button` (mrsoka.js) and `eqx-threads` (elizabeth.js) at their `// CG:` comments.

## 9. Personaverse faces and Haenim (wired in art batch 3, Nov 15; details in EQUINOX-TECH.md "Art batch 3")
- 9A-9D LE SSERAFIM → plain `portraits/chaewon`, `sakura`, `kazuha`, `eunchae` (Solstice only ever shows these ids through an epilogue world's `faces` map, which wins, so Solstice is unchanged); links.js lost their `face: '<name>-strangers'` aliases.
- 9E-9J parents → `portraits/jaesang-equinox`, `solji-equinox`, `taejoon-equinox`, `miseon-equinox`, `kimdad-equinox`, `kimmom-equinox` (Kat saved 9I / 9J as `eq-kimdad-` / `eq-kimmom-portraits.png`). Speaker ids = the couple links' member ids, mapped in config.js `faces`: `jaesang-runners`, `solji-runners`, `taesang-strangers` (Taejoon), `miyeon-strangers` (Miseon), `kim-dad`, `kim-mom`. A couple link's portrait is its first member's Equinox face (core.js portrait → members[0] → gameFace).
- 9K Theodore → `portraits/theodore` (speaker `theodore`). Kat's sheet had a baked-in checkerboard (RGB, no alpha): lifted with `tools/femc-lift.swift` (Vision), alpha eroded 1 px, then the usual sheet-alpha + `--same-scale`. His uniform came out black and red like Elizabeth's Equinox look, not the list's blue.
- Extra (not on the list): `eq-elizabeth-portraits.png` → `portraits/elizabeth-equinox` + `faces.elizabeth` (same checkerboard lift). Cells: neutral, happy, serious, sad, surprised, **wink** (her sheet's order differs; a `flustered` line falls back to happy).
- 9L `eq-haenim-rework.png` (list said `eq-persona-haenim.png`) → `equinox/art/personas/haenim.webp` (q92, native 1020 × 1536) via config.js `art` (battle/data.js swaps the Personas' art, so the Personas tab, Forms and the battle frame's cards; scene.js `{ summon }` lines). Her four route forms keep Solstice's art.
- Scales (scale.js; scale × Vision face height / canvas height × Kat's inherited size ≈ 0.40 for women (Solar 0.399), ≈ 0.43 for men): chaewon 1.13, sakura 1.07, kazuha 1.03, eunchae 1.13, theodore 1.08, elizabeth-equinox 0.98 (inherits elizabeth's 1.06 nudge), jaesang 0.97, solji 0.96, taejoon 0.98, miseon 0.93, kimdad 1.0, kimmom 0.95. Face centres in placements-data.js from the head-top method the file already uses (+ main world list); place.js regenerated. Kat can fine-tune on the placements review page.

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
- **Restyled (art batch 3):** Kat redid the faces to match everyone's art style (`Equinox/haechan revamp portraits - art style edit/<face>.png`: angry, blushing, happy, neutral, sad, serious, smirk, surprised; 1254², transparent). Same canvas (880 × 822), one shared scale 0.765 (Vision face height of the new neutral matched to the old set's, 380.5 px) and one shared offset putting the new neutral's face centre where the old one's was; the other faces keep the sheet's own positions (Kat's edits share one body, so nothing jumps). `serious` is real now; `flustered` = blushing; `slight-surprise` is still the older single (no restyled one yet: it's in the older style). scale.js / placements unchanged; FEMC_PORTRAIT_V 36.

## 12. Equinox face revamps (wired in art batch 4, Nov 16; details in EQUINOX-TECH.md "Art batch 4")
- `python3 tools/femc-equinox-faces.py <sheet> assets/femc/portraits/<id> <out> neutral,happy,sad,serious,surprised,flustered` (singles: paste into a 3 x 2 grid of 512 cells first), WebP q90 → `portraits/<id>-equinox/`, then index.js, scale.js (the base's value), placements-data.js (the base's face centre) + `tools/femc-placements.py`, config.js `faces`. Still to come: 12P Jaehyun (`jaehyun-equinox`), 12D2 Junpei's serious (replace the copy).
- 12T Dalnim: as Haenim's (9L) → `assets/femc/equinox/art/personas/dalnim.webp` (WebP, native size), config.js `art`: `'battle/art/personas/dalnim.webp': 'equinox/art/personas/dalnim.webp?v=1'`; bump config's ?v.

## 13. Act II and the second meetings
- BGs → `assets/femc/bg/<save name>.webp` (q86, native size); CGs → `assets/femc/cg/<save name>.webp`. At each `// BG: <slug>` comment swap that line's `bg` to the new name; at each `// CG: eqx-<slug>` comment put `{ cg: 'eqx-<slug>' }` and `{ cg: null }` where the moment ends. Bump ART_V.
- Item → file and comment (all under `assets/femc/equinox/data/`):
  - 13A `eqx-iwatodai-dorm-street-dusk` ← `links/aigis.js`, comment `// BG: iwatodai-dorm-street-dusk`
  - 13B `eqx-iwatodai-konbini-day` ← `links/elizabeth.js`, comment `// BG: iwatodai-konbini-day`
  - 13C `eqx-junpei-room-night` ← `links/junpei.js`, comment `// BG: junpei-room-night`
  - 13D `eqx-oka-dining-room` ← `story-act2.js`, comment `// BG: oka-dining-room`
  - 13E `eqx-oka-dining-room-dawn` ← `story-act2.js`, comment `// BG: oka-dining-room-dawn`
  - 13F `eqx-paulownia-atrium-redhour` ← `story-act2.js`, comment `// BG: paulownia-atrium-redhour`
  - 13G `eqx-port-island-harbor-red-hour` ← `links/yunjin.js`, comment `// BG: port-island-harbor-red-hour`
  - 13H `eqx-tatsumi-bus` ← `links/ken-koromaru.js`, comment `// BG: tatsumi-bus`
  - 13I `eqx-tatsumi-hospital-lobby` ← `links/ken-koromaru.js`, comment `// BG: tatsumi-hospital-lobby`
  - 13J `eqx-door-s1` ← `story-act2.js`, comment `// CG: eqx-door-s1`
  - 13K `eqx-door-h1` ← `story-act2.js`, comment `// CG: eqx-door-h1`
  - 13L `eqx-violinist-footage` ← `story-act2.js`, comment `// CG: eqx-violinist-footage`
  - 13M `eqx-violinist` ← `story-act2.js`, comment `// CG: eqx-violinist`
  - 13N `eqx-second-hill` ← `story-act2.js`, comment `// CG: eqx-second-hill`
  - 13O `eqx-door-s2` ← `story-act2.js`, comment `// CG: eqx-door-s2`
  - 13P `eqx-stage` ← `story-act2.js`, comment `// CG: eqx-stage`
  - 13Q `eqx-porter-cap` ← `story-act2.js`, comment `// CG: eqx-porter-cap`
  - 13R `eqx-piano` ← `story-act2.js`, comment `// CG: eqx-piano`
  - 13S `eqx-striped-photo` ← `story-act2.js`, comment `// CG: eqx-striped-photo`
  - 13T `eqx-tanabata-stay` ← `story-act2.js`, comment `// CG: eqx-tanabata-stay`
  - 13U `eqx-door-r2` ← `story-act2.js`, comment `// CG: eqx-door-r2`
  - 13V `eqx-third-hill` ← `story-act2.js`, comment `// CG: eqx-third-hill`
  - 13W `eqx-door-h2` ← `story-act2.js`, comment `// CG: eqx-door-h2`
  - 13X `eqx-last-grain` ← `story-act2.js`, comment `// CG: eqx-last-grain`
  - 13Y `eqx-twelve-seconds` ← `links/hyein.js`, comment `// CG: eqx-twelve-seconds`
  - 13Z `eqx-two-cans` ← `links/haechan.js`, comment `// CG: eqx-two-cans`
  - 13AA `eqx-council-window` ← `links/jungwon.js`, comment `// CG: eqx-council-window`
  - 13AB `eqx-ken-window` ← `links/ken-koromaru.js`, comment `// CG: eqx-ken-window`
  - 13AC `eqx-booth-strip` ← `links/jihoon.js`, comment `// CG: eqx-booth-strip`
  - 13AD `eqx-everyone-turns` ← `links/minji.js`, comment `// CG: eqx-everyone-turns`
  - 13AE `eqx-standing-tide-home` ← `links/yunjin.js`, comment `// CG: eqx-standing-tide-home`
  - 13AF `eqx-three-way-mirror` ← `links/cherry.js`, comment `// CG: eqx-three-way-mirror`
  - 13AG `eqx-darning` ← `links/mrsoka.js`, comment `// CG: eqx-darning`
  - 13AH `eqx-1958` ← `links/rio-saori.js`, comment `// CG: eqx-1958`
  - 13AI `eqx-yukari-strip` ← `links/yukari.js`, comment `// CG: eqx-yukari-strip`
  - 13AJ `eqx-warm-step` ← `links/jaehyun.js`, comment `// CG: eqx-warm-step`

## 14. The summer arrivals' first meetings
- BGs → `assets/femc/bg/<save name>.webp` (q86, native size); CGs → `assets/femc/cg/<save name>.webp`. At each `// BG: <slug>` comment swap that line's `bg` to the new name (14B's scene currently uses the stand-in `eqx-oka-kitchen`); at each `// CG: eqx-<slug>` comment put `{ cg: 'eqx-<slug>' }` and `{ cg: null }` where the moment ends. Bump ART_V.
- Item → file and comment (all under `assets/femc/equinox/data/links/`):
  - 14A `eqx-naganaki-flat-stones` ← `kazuha.js`, comment `// BG: naganaki-flat-stones`
  - 14B `eqx-oka-front-hall-night` ← `kazuha.js`, comment `// BG: oka-front-hall-night`
  - 14C `eqx-clubescapade-door-summer` ← `chaewon.js`, comment `// BG: clubescapade-door-summer`
  - 14D `eqx-iwatodai-overpass-east-dusk` ← `danielle.js`, comment `// BG: iwatodai-overpass-east-dusk`
  - 14E `eqx-three-floors` ← `kazuha.js`, comment `// CG: eqx-three-floors`
  - 14F `eqx-headcount` ← `chaewon.js`, comment `// CG: eqx-headcount`
  - 14G `eqx-camera-roll` ← `eunchae.js`, comment `// CG: eqx-camera-roll`
  - 14H `eqx-two-suns` ← `jaemin-sunoo.js`, comment `// CG: eqx-two-suns`
  - 14I `eqx-three-bowls` ← `trio.js`, comment `// CG: eqx-three-bowls`
  - 14J `eqx-callouts` ← `fuuka-chenle.js`, comment `// CG: eqx-callouts`
  - 14K `eqx-the-club` ← `hateclub.js`, comment `// CG: eqx-the-club`

## 15. Act III and the third meetings
- BGs → `assets/femc/bg/<save name>.webp` (q86, native size); CGs → `assets/femc/cg/<save name>.webp`. At each `// BG: <slug>` comment swap that line's `bg` to the new name; at each `// CG: eqx-<slug>` comment put `{ cg: 'eqx-<slug>' }` and `{ cg: null }` where the moment ends. Bump ART_V. Where a slug has no `eqx-` prefix the saved file gets one (e.g. `oka-hall-redhour` → `eqx-oka-hall-redhour`).
- Item → file and comment (under `assets/femc/equinox/data/`):
  - 15A `eqx-oka-tatami-room` ← `story-act3.js`, comment `// BG: oka-tatami-room`
  - 15B `eqx-funeral-hall` ← `story-act3.js`, comment `// BG: eqx-funeral-hall`
  - 15C `eqx-hydrofoil` ← `story-act3.js`, comment `// BG: eqx-hydrofoil`
  - 15D `eqx-incheon-empty-lot` ← `story-act3.js`, comment `// BG: eqx-incheon-empty-lot`
  - 15E `eqx-riverside-obon` ← `story-act3.js`, comment `// BG: eqx-riverside-obon`
  - 15F `eqx-oka-hall-redhour` ← `story-act3.js`, comment `// BG: oka-hall-redhour`
  - 15G `eqx-oka-dining-room-redhour` ← `story-act3.js`, comment `// BG: oka-dining-room-redhour`
  - 15H `eqx-oka-dining-room-morning` ← `story-act3.js`, comment `// BG: oka-dining-room-morning`
  - 15I `eqx-konbini-day` ← `story-act3.js`, comment `// BG: eqx-konbini-day`
  - 15J `eqx-faculty-office` ← `story-act3.js`, comment `// BG: eqx-faculty-office`
  - 15K `eqx-tsukimi` ← `story-act3.js`, comment `// BG: eqx-tsukimi`
  - 15L `eqx-wheel` ← `story-act3.js`, comment `// CG: eqx-wheel`
  - 15M `eqx-three-cards` ← `story-act3.js`, comment `// CG: eqx-three-cards`
  - 15N `eqx-long-table-six` ← `story-act3.js`, comment `// CG: eqx-long-table-six`
  - 15O `eqx-surname-box` ← `story-act3.js`, comment `// CG: eqx-surname-box`
  - 15P `eqx-hanne-page` ← `story-act3.js`, comment `// CG: eqx-hanne-page`
  - 15Q `eqx-bridge-rail` ← `story-act3.js`, comment `// CG: eqx-bridge-rail`
  - 15R `eqx-shoes` ← `story-act3.js`, comment `// CG: eqx-shoes`
  - 15S `eqx-walking-home` ← `story-act3.js`, comment `// CG: eqx-walking-home`
  - 15T `eqx-glove` ← `story-act3.js`, comment `// CG: eqx-glove`
  - 15U `eqx-there-there` ← `story-act3.js`, comment `// CG: eqx-there-there`
  - 15V `eqx-rain-hangs` ← `links/haechan.js`, comment `// CG: eqx-rain-hangs`
  - 15W `eqx-by-winter` ← `links/shinjiro.js`, comment `// CG: eqx-by-winter`
  - 15X `eqx-under-the-towel` ← `links/akihiko.js`, comment `// CG: eqx-under-the-towel`
  - 15Y `eqx-one-line` ← `links/jungwon.js`, comment `// CG: eqx-one-line`
  - 15Z `eqx-cough-drops` ← `links/jihoon.js`, comment `// CG: eqx-cough-drops`
  - 15AA `eqx-one-second` ← `links/minji.js`, comment `// CG: eqx-one-second`

## 16. The third meetings
- BGs → `assets/femc/bg/<save name>.webp` (q86, native size); CGs → `assets/femc/cg/<save name>.webp`. At each `// BG: <slug>` comment swap that line's `bg` to the new name; at each `// CG: eqx-<slug>` comment put `{ cg: 'eqx-<slug>' }` and `{ cg: null }` where the moment ends. Bump ART_V. Where a slug has no `eqx-` prefix the saved file gets one. All comments are under `assets/femc/equinox/data/links/`.
- Item → file and comment:
  - 16A `eqx-tennis-courts-rain` ← `rio-saori.js`, comment `// BG: gekkoukan-tennis-courts-rain`
  - 16B `eqx-bakery-inside` ← `cherry.js`, comment `// BG: iwatodai-bakery-inside`
  - 16C `eqx-shrine-playground-summer` ← `ken-koromaru.js`, comment `// BG: naganaki-shrine-playground-summer`
  - 16D `eqx-shrine-steps-rain` ← `jaehyun.js`, comment `// BG: naganaki-shrine-steps-rain`
  - 16E `eqx-oka-garden-rain` ← `mrsoka.js`, comment `// BG: oka-boarding-house-garden-rain`
  - 16F `eqx-harbor-high-tide-summer` ← `yunjin.js`, comment `// BG: port-island-harbor-high-tide-summer`
  - 16G `eqx-forty-minutes` ← `hanni.js`, comment `// CG: eqx-forty-minutes`
  - 16H `eqx-one-new` ← `hyein.js`, comment `// CG: eqx-one-new`
  - 16I `eqx-ribbon` ← `hyein.js`, comment `// CG: eqx-ribbon`
  - 16J `eqx-bread-girl` ← `cherry.js`, comment `// CG: eqx-bread-girl`
  - 16K `eqx-census` ← `aigis.js`, comment `// CG: eqx-census`
  - 16L `eqx-end-room` ← `mrsoka.js`, comment `// CG: eqx-end-room`
  - 16M `eqx-next-year-if` ← `rio-saori.js`, comment `// CG: eqx-next-year-if`
  - 16N `eqx-not-allowed` ← `elizabeth.js`, comment `// CG: eqx-not-allowed`
  - 16O `eqx-pace` ← `jaehyun.js`, comment `// CG: eqx-pace`
  - 16P `eqx-request-card` ← `ken-koromaru.js`, comment `// CG: eqx-request-card`
  - 16Q `eqx-the-rounds` ← `junpei.js`, comment `// CG: eqx-the-rounds`
  - 16R `eqx-the-term` ← `mitsuru.js`, comment `// CG: eqx-the-term`
  - 16S `eqx-two-tables` ← `yunjin.js`, comment `// CG: eqx-two-tables`
  - 16T `eqx-where-i-can-see` ← `yukari.js`, comment `// CG: eqx-where-i-can-see`
- Several of these slugs repeat in a story file as an "(as rank 1)" BG line; swap those too.
