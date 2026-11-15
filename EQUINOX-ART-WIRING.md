# Equinox art: wiring notes (for Claude)

Kat's list is `EQUINOX-ART-TODO.md`; this file is its technical twin, keyed by item number and name. Kat doesn't need to read it. Nothing for Equinox is built yet: save keys, data files, HTML and code hooks are **TBD**. This only fixes where each piece will live, under a new `assets/femc/equinox/` tree, so the first build batches have somewhere to put the art.

**Rules carried over from Solstice (FEMC-ART-WIRING.md):** WebP (q86 backgrounds / CGs, q92 figures), native size; record every source in `tools/femc-new-adds.json` and move it to `Femc Mode Images/Added to Game/`; remove finished items from EQUINOX-ART-TODO.md and fix its count line; never overwrite a Solstice file (Equinox gets its own copies even when a piece looks shared). Spoilers: item names and prompts in Kat's list stay visual-only; anything plot-bound (block names, who a figure is in the story) lives here or in the private plan, never in her list.

**Attachments added to Place Prompt Attachments for this list (Nov 15; copies, Kat's sources untouched):** `Key art - style (Solstice).png` (title/keyart.webp), `Cover - style (Solstice).png` (title/cover.webp), `Menu - style (Solstice day).png` / `(Solstice Dark Hour).png` (title/menu-backdrop-day / -darkhour.webp), `Logo - style (Solstice).png` (title/solstice-logo.svg rendered by qlmanage, 1600 square), `BG - style (Tartarus).png` (bg/tartarus-yabbashah.webp), `Persona - style (Theia).png` (Femc Mode Images/Personas/Theia.png), `Body - Yunjin.png` (profile/searchers/yunjin.webp; the style and framing reference for every full-body item), `CG - Appa (Strangers).png` / `CG - Eomma (Strangers).png` (portraits/taesang-strangers, miyeon-strangers neutral: the faces the strangers epilogue uses), `CG - Mom (HOAX).png` / `CG - Dad (HOAX).png` (portraits/kim-mom, kim-dad neutral), `solar-posesheet.png` (Femc Mode Images root). Already there: `Solar.png`, `Hanni.png`, `Hyein.png`, `CG - Jaesang (Runners).png`, `CG - Solji (Runners).png`, `CG - Chaewon / Sakura / Kazuha / Eunchae (Strangers).png`, the four `BG -` world places.

## Tree

```
assets/femc/equinox/
  title/        logo.svg (+ logo.webp), cover.webp, menu-backdrop-day.webp, menu-backdrop-dark.webp, app icons later
  portraits/    solar/<mood>.webp (+ index / scale / place entries, TBD whether shared with assets/femc/portraits/)
  battle/poses/ solar-0..5.webp (pose sheet frames)
  profile/      solar-poses/ (HD poses, later), links/<id>.webp (Social Link full bodies)
  bg/           well-1..8.webp (+ town places later)
  personas/     concepts/<fighter>.webp (reference only, not shown in game)
mockups/equinox-ui/art/   the style tests
```

## 1. The look tests (1A-1B; rewritten Nov 15 after Kat picked Equilux in blood red)
- `eq-test-keyart.png` / `eq-test-logo.png` → `mockups/equinox-ui/art/keyart.webp` / `logo.webp` (q86), shown beside the Equilux mockup. Not game art. The logo is redrawn by hand as `equinox/title/logo.svg` (as solstice-logo.svg was) once Kat likes it; the game can also keep drawing it as live text (the mockup does, so the dusk flicker and the drop-in animation work per letter). The key art may become a wallpaper cosmetic like `wp-keyart`.
- The old four-direction tests (Halfway, Well, Red Thread, Mirror) were dropped.
- Equinox palette (Kat, Nov 15): blood `#d7102c`, light `#ff5a5f`, oxblood / clot darks, bone `#f6efe9`; no pink-heavy, blue, purple, green; gold a speck. Solstice keeps its pink.

## 2. The title and the UI (2A-2H)
- `eq-cover-day.png` / `eq-cover-night.png` → `equinox/title/cover-day.webp` / `cover-night.webp`, 1672 × 941 or native, **the same size and aligned** (check by overlaying; nudge with a crop if ChatGPT shifted 2B). Title: the day picture goes in the day layer, the night picture in the night layer, so the ticking conic mask and the dusk radial (`equilux.html` `.lay.day` / `.lay.night`) wipe one picture into the other. The drawn clock face, logo and menu plate stay on top.
- `eq-menu-day.png` / `eq-menu-dark.png` → `menu-backdrop-day.webp` / `menu-backdrop-dark.webp` (Solstice: menu.js HOME backdrops by slot; dark in the late slot and over a fight).
- `eq-clockface.png` → key out the white (`tools/femc-greens.py`-style flood from the corners, or `femc-sheet-alpha.py`) → `equinox/title/clockface.webp` (transparent, square), drawn behind the logo in both title layers in place of the SVG `face12` (keep the SVG second hand / ticks if they read better on top). No hands in the art: the hand is code.
- `eq-emblem.png` → key out the white → `equinox/title/emblem.webp`; app icons (192 / 512 / maskable 512, like `tools/femc-app-icons.py`), the favicon, the save-slot badge and a loading spinner (rotating hand over the static emblem).
- `eq-loading-well.png` / `eq-loading-between.png` → `equinox/title/loading-well.webp` / `loading-between.webp` (Solstice: ui.js `openBattle` picks loading stills; Equinox: the Well's nights vs everything else). The text sits on the right third.

## 3. Solar's Equinox look (3A-3C)
- `eq-solar-posesheet.png` → `tools/femc-wardrobe.py` cut (as an own look, or as a look id such as `eq-own`; TBD) → `equinox/battle/poses/solar-0..5.webp` on sheet 1's canvas.
- `eq-solar-portraits.png` → `tools/femc-skin-portraits.py` (matched to her Solstice faces, same canvas) or `femc-sheet-alpha.py` + `femc-portraits.py` → `equinox/portraits/solar/neutral|happy|sad|serious|surprised|flustered.webp`; scale.js / placements-data.js entries; Kat places it on `mockups/solstice-ui/placements.html`.
- `eq-solar-menu.png` (3C) → `tools/femc-hd-poses.py` (one figure, native, feet on the bottom edge) → `equinox/profile/solar-poses/arms-crossed.webp`: the field menu's figure (`.solar` in the mockup; Solstice's is menu.js `HOME_FIG`). The rest of her HD set later (femc-hd-poses.py `LOOKS`).
- Kat (Nov 15): freshen her look, hair styled or up, more battle ready, the leader now. Prompts: high ponytail with temple braids, red ribbon + clock-face pin, high-collared cropped jacket, leader's coat draped on the shoulders, fingerless gloves, thigh holster for the Evoker, combat boots, the nose stud (Kat's one must-have detail from the Nov 12 sheet). All Claude's suggestions; Kat may change them. A coat that's draped, not worn, may come out different per cell; it's fine for the coat to be on in some and flared in others.

## 4. The Well (4A-4H)
- `eq-well-1..8.png` → `equinox/bg/well-1..8.webp` (q86, native, like Tartarus's block backdrops). Block ids, floor ranges and which block each backdrop belongs to: the private plan §8 (blocks 0-7 there = 1-8 here, top to bottom). Item names in Kat's list are neutral visual names on purpose; keep the plan's block names out of her list.
- 4B-4E attach world backgrounds (Iwatodai strip, Syracuse quad, Incheon mudflats, Hanlim hallway) only as place references.

## 5. LE SSERAFIM full bodies (5A-5D)
- `eq-body-chaewon|sakura|kazuha|eunchae.png` → `equinox/profile/links/<id>.webp`, measured into Equinox's own `LINK_FIG` ([file, width/height, head top, head-to-chin, head centre x], as menu.js's). Yunjin already has `profile/searchers/yunjin.webp` (Solstice LINK_FIG); reuse or copy it.
- Face references are their strangers versions (portraits `<name>-strangers`); each girl remembers all her lives (Kat, Nov 15), so the strangers faces are just the reference.

## 6. Parents (6A-6F)
- `eq-body-jaesang|solji|appa|eomma|hoax-mom|hoax-dad.png` → `equinox/profile/links/<id>.webp` + LINK_FIG. Faces already in the game: `jaesang-runners`, `solji-runners`, `taesang-strangers`, `miyeon-strangers` (also `lee-appa` / `lee-eomma`, the baduk minigame's), `kim-mom`, `kim-dad`. One link per couple (Kat, Nov 15): three couple links, each with both figures (the Social Link screen shows the pair). HOAX parents: Han Soyeon (Mom) and Kim Jaeseok (Dad); Kat's list says Mom / Dad (HOAX).

## 7. Persona concepts (7A-7C)
- `eq-persona-hanni|yunjin|hyein-concept.png` → keep in `Femc Mode Images/Personas/Equinox concepts/` (and optionally `equinox/personas/concepts/`); reference for designing with Kat (plan question 5: which new fighters). The game's Persona art comes later as a single 2:3 figure on black like `Personas/Theia.png` → `battle/art/personas/<name>.webp`. Visual sources: the private plan §10's candidate myths; never name the myth or the Persona in Kat's list until she picks.

## 8. Later
Counts from EQUINOX-PLAN.md's art section. Prompts wait for the story parts and the picked direction; plot-bearing pieces (CGs, bosses, guardians, the two new characters, Haenim's new form, the duo cut-in) must be written visual-only, checked against `DO-NOT-OPEN-equinox-plot.md` for what not to show.

## 8. The opening (Nov 15, build batch 2)

- **Backgrounds 8A–8F** → `assets/femc/bg/<save name>.webp` (q86, native size). In `assets/femc/equinox/data/prologue.js` / `story-opening.js` each place has a `// BG: <slug> — …` comment above the line using its stand-in; swap that line's `bg` to the new name (8A `eqx-well-bottom` ↔ comment `well-bottom`, 8B `eqx-well-shaft` ↔ `well-shaft`, 8C `eqx-courtyard-well-night` ↔ `gekkoukan-courtyard-well-night`, 8D `eqx-courtyard-well-day` ↔ `gekkoukan-courtyard-well-day`, 8E `eqx-oka-gate` ↔ `oka-boarding-house-gate`, 8F `eqx-oka-kitchen` ↔ `oka-boarding-house-kitchen`). 8A also: `battle.js ART_HAS_WELL = true` (the Well fights' backdrop) and bump ART_V.
- **8G Mrs. Oka's faces** → `tools/femc-sheet-alpha.py` / `femc-portraits.py` into `assets/femc/portraits/mrsoka/` (speaker id `mrsoka`; `oka` is Solstice's "Old Oka" job character, don't reuse it), scale.js + placements as any new face. Cell 6 is `worried` (the scenes use `neutral` only so far).
- **CGs 8H–8V** → `assets/femc/cg/<save name>.webp`; each has a `// CG: eqx-<slug> — …` comment at its spot: put `{ cg: 'eqx-<slug>' }` there and `{ cg: null }` where the moment ends. Album / Theater listing for Equinox CGs is a later batch.
