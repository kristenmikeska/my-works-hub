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

## 1. Style tests (1A-1H)
- `eq-test-<halfway|well|thread|mirror>-keyart.png` / `-logo.png` → `mockups/equinox-ui/art/<dir>-keyart.webp` / `<dir>-logo.webp` (q86), for the four mockups to show beside their UI. Not game art. Once Kat picks a direction, the winning logo test is redrawn as `equinox/title/logo.svg` by hand (as solstice-logo.svg was), keeping the raster only as reference; the key art may become a wallpaper cosmetic like `wp-keyart`.
- Kat's palette rule (CLAUDE.md, Oct 31) holds for Equinox UI too: no blue / navy / indigo / purple / lilac / green-heavy, gold a tiny accent.

## 2. Title (2A-2C)
- `eq-cover.png` → `equinox/title/cover.webp`; `eq-menu-day.png` → `menu-backdrop-day.webp`; `eq-menu-dark.png` → `menu-backdrop-dark.webp`. 1672 × 941 like Solstice's, or native. Hooks TBD (Solstice: ui.js title, menu.js HOME backdrops by slot).

## 3. Solar's Equinox look (3A-3B)
- `eq-solar-posesheet.png` → `tools/femc-wardrobe.py` cut (as an own look, or as a look id such as `eq-own`; TBD) → `equinox/battle/poses/solar-0..5.webp` on sheet 1's canvas.
- `eq-solar-portraits.png` → `tools/femc-skin-portraits.py` (matched to her Solstice faces, same canvas) or `femc-sheet-alpha.py` + `femc-portraits.py` → `equinox/portraits/solar/neutral|happy|sad|serious|surprised|flustered.webp`; scale.js / placements-data.js entries; Kat places it on `mockups/solstice-ui/placements.html`.
- HD poses for the look later (femc-hd-poses.py `LOOKS`).
- Hairpin / wrist ribbon are Claude's suggestions; Kat may change them.

## 4. The Well (4A-4H)
- `eq-well-1..8.png` → `equinox/bg/well-1..8.webp` (q86, native, like Tartarus's block backdrops). Block ids, floor ranges and which block each backdrop belongs to: the private plan §8 (blocks 0-7 there = 1-8 here, top to bottom). Item names in Kat's list are neutral visual names on purpose; keep the plan's block names out of her list.
- 4B-4E attach world backgrounds (Iwatodai strip, Syracuse quad, Incheon mudflats, Hanlim hallway) only as place references.

## 5. LE SSERAFIM full bodies (5A-5D)
- `eq-body-chaewon|sakura|kazuha|eunchae.png` → `equinox/profile/links/<id>.webp`, measured into Equinox's own `LINK_FIG` ([file, width/height, head top, head-to-chin, head centre x], as menu.js's). Yunjin already has `profile/searchers/yunjin.webp` (Solstice LINK_FIG); reuse or copy it.
- Face references are their strangers versions (portraits `<name>-strangers`); which world version the game uses is plan question 4. If Kat answers differently, swap the attachment and the dialogue faces, not this art.

## 6. Parents (6A-6F)
- `eq-body-jaesang|solji|appa|eomma|hoax-mom|hoax-dad.png` → `equinox/profile/links/<id>.webp` + LINK_FIG. Faces already in the game: `jaesang-runners`, `solji-runners`, `taesang-strangers`, `miyeon-strangers` (also `lee-appa` / `lee-eomma`, the baduk minigame's), `kim-mom`, `kim-dad`. Link ids TBD; the HOAX parents' first names are still waiting on Kat (plan question 7), so Kat's list says Mom / Dad (HOAX) only.

## 7. Persona concepts (7A-7C)
- `eq-persona-hanni|yunjin|hyein-concept.png` → keep in `Femc Mode Images/Personas/Equinox concepts/` (and optionally `equinox/personas/concepts/`); reference for designing with Kat (plan question 5: which new fighters). The game's Persona art comes later as a single 2:3 figure on black like `Personas/Theia.png` → `battle/art/personas/<name>.webp`. Visual sources: the private plan §10's candidate myths; never name the myth or the Persona in Kat's list until she picks.

## 8. Later
Counts from EQUINOX-PLAN.md's art section. Prompts wait for the story parts and the picked direction; plot-bearing pieces (CGs, bosses, guardians, the two new characters, Haenim's new form, the duo cut-in) must be written visual-only, checked against `DO-NOT-OPEN-equinox-plot.md` for what not to show.
