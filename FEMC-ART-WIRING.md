# FEMC art: wiring notes (for Claude)

Kat's list of art to make is `FEMC-ART-TODO.md`. This file holds everything technical for putting that art in the game: where each piece goes, the tools, the code hooks. Kat doesn't need to read it.

**After every art batch:**
1. Wire the new art (the notes below), record each source in `tools/femc-new-adds.json` and move it to `Femc Mode Images/Added to Game/`.
2. Remove every finished item from `FEMC-ART-TODO.md` (and its entry here), then re-verify the whole list against `assets/femc/` and the manifest: anything that now exists, is covered by other art or duplicates another item comes off. Check per-character lists name by name.
3. Fix the count line at the top of `FEMC-ART-TODO.md`.
4. Keep Kat's file to: name, one line on what it's for, Attach, Save as and a full paste-ready prompt (scene "Must match" details folded into the prompt). Technical paths go here.

## Made, waiting to be wired
- **Haechan · "Eclipse"** (his friendship Showtime, panel 1 = `bond-haechan-2`): panels 2–5 were generated 2026-10-24 and are in `~/Documents/UniverseHub-Images/Femc Mode Images/Generating Art/Showtime-Solar-Haechan/` (`02-face-push.png`, `03-sun-and-moon.png`, `04-eclipse-strike.png`, `05-bunny-ears.png`; prompts in `prompts.txt`; `01-original-still.png` is only the style reference). Taken off Kat's list so she doesn't remake them. Ask Kat whether to use them; then cut as `bond-haechan-show-2..5` with `tools/femc-theurgy.py`, put a `sequence` on the haechan bond (panel 1 = `bond-haechan-2`, which stays the short-version still) and add it to `SHOWS` / `FACES` in `tests/femc_bonds.py`.
- **`assets/femc/battle/art/theurgy/jungwon-showtime/01-opening.png`** (untracked, 1672 × 941 PNG, 2026-10-25): the same picture as the committed `bond-jungwon-love.webp` (mean pixel difference under 1/255 at 400 × 225; not byte-identical to its source `Added to Game/solar-jungwon-bond-ver2.png`). It is a full-size copy of the Jade Ring still, staged as panel 1 for the Jade Ring Showtime; it is not one of the `bond-jungwon-show-*` files (those are the friendship Showtime "Unanimous", whose panel 1 is `bond-jungwon.webp`). Nothing reads it. Leftover; safe to remove once Kat agrees (not deleted).

## Open questions for Kat
- **Stamps:** the 29 Persona 3: Solstice stamps are line drawings like every stamp on the hub. Illustrated ones would only fit if the whole passport changed. Keep as is?
- **Rank 10 CGs not on the list:** Ken and Kat & Ethan have no rank 10 picture either (no `cg/link-ken-r10.webp` / `link-kat-r10.webp`, no `cg` step in their link files). Not added; ask Kat if she wants them.

## Where each item goes (keyed by its name in FEMC-ART-TODO.md)

### 1. Story CGs (ChatGPT)
- **Sebastian, rank 10** (save as `link-sebastian-r10.png`): `cg/link-sebastian-r10.webp`; a `{ cg: 'link-sebastian-r10' }` step in the link's rank 10 (clear with `{ cg: null }`), focus in `places.js cgFocus`.
- **Aphrodite, rank 10** (save as `link-aphrodite-r10.png`): `cg/link-aphrodite-r10.webp`; a `{ cg: 'link-aphrodite-r10' }` step in the link's rank 10 (clear with `{ cg: null }`), focus in `places.js cgFocus`.
- **Widowmaker, rank 10** (save as `link-widowmaker-r10.png`): `cg/link-widowmaker-r10.webp`; a `{ cg: 'link-widowmaker-r10' }` step in the link's rank 10 (clear with `{ cg: null }`), focus in `places.js cgFocus`.
- **Rohan, rank 10** (save as `link-rohan-r10.png`): `cg/link-rohan-r10.webp`; a `{ cg: 'link-rohan-r10' }` step in the link's rank 10 (clear with `{ cg: null }`), focus in `places.js cgFocus`.
- **Wren, rank 10** (save as `link-wren-r10.png`): `cg/link-wren-r10.webp`; a `{ cg: 'link-wren-r10' }` step in the link's rank 10 (clear with `{ cg: null }`), focus in `places.js cgFocus`.
- **Valentine's Day** (save as `holiday-valentines.png`): `cg/holiday-valentines.webp`; Yukari's 2/14 Valentine's scene in `data/living-march.js` (a `{ cg }` step).
- **The dorm dinner** (save as `story-dorm-dinner.png`): `cg/story-dorm-dinner.webp`; `story-act3.js a3-dinner` (7/18, the dining room); the old FEMC-CG-PROMPTS #9 setting didn't match, so this prompt is from the scene.

### 2. Places (Gemini)
- **Kirijo Guesthouse lobby by day** (save as `kirijo-guesthouse.png`): `bg/kirijo-guesthouse.webp` via `tools/femc-backgrounds.py EXTRA`; the place slug `kirijo-guesthouse` in `places.js`.
- **Yeobo's Cafe, today** (save as `yeobos-cafe.png`): `bg/yeobos-cafe.webp`; `places.js` rule `["Iwatodai Strip · Yeobo's Cafe", 'flashback-yeobos-cafe']` → `yeobos-cafe`.
- **The fish market, today** (save as `port-island-fish-market.png`): `bg/port-island-fish-market.webp`; the fish-market job's place rule in `places.js`.
- **Monad, Tartarus's hidden block** (save as `tartarus-monad.png`): `bg/tartarus-monad.webp`; `battle/data.js blocks`, Monad's `bg`.
- **A supermarket aisle** (save as `iwatodai-supermarket.png`): `bg/iwatodai-supermarket.webp`; point the scenes' place rule at `iwatodai-supermarket`.
- **A school stairwell** (save as `gekkoukan-stairwell.png`): `bg/gekkoukan-stairwell.webp`; point the scenes' place rule at `gekkoukan-stairwell`.
- **The canal path behind the mall** (save as `paulownia-canal.png`): `bg/paulownia-canal.webp`; point the scenes' place rule at `paulownia-canal`.
- **A small flat near the station** (save as `kirijo-flat.png`): `bg/kirijo-flat.webp`; point the scenes' place rule at `kirijo-flat`.

### 3. Characters (ChatGPT)
- **Yukari's Evoker shot** (save as `yukari-evoker.png`): `battle/art/summon/yukari-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Junpei's Evoker shot** (save as `junpei-evoker.png`): `battle/art/summon/junpei-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Mitsuru's Evoker shot** (save as `mitsuru-evoker.png`): `battle/art/summon/mitsuru-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Aigis's Evoker shot** (save as `aigis-evoker.png`): `battle/art/summon/aigis-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Haechan's Evoker shot** (save as `haechan-evoker.png`): `battle/art/summon/haechan-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Jungwon's Evoker shot** (save as `jungwon-evoker.png`): `battle/art/summon/jungwon-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Jihoon's Evoker shot** (save as `jihoon-evoker.png`): `battle/art/summon/jihoon-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Minji's Evoker shot** (save as `minji-evoker.png`): `battle/art/summon/minji-evoker.webp`; `data.js` member `evoker: { shot, at: [muzzle x%, y%], pos, posPhone }`.
- **Evoker sheets (raise, shot, lower)** (save as `<name>-evoke-sheet.png (e.g. akihiko-evoke-sheet.png)`): `battle/art/summon/<mid>-evoke-0..2.webp`; `('evoker', '<file>', '<mid>-evoke')` in `tools/femc-theurgy.py BUILD`, then the member's `evoker.frames`.
- **Ryuji's full body** (save as `ryuji-fullbody.png`): `profile/ryuji.webp` via `tools/femc-profiles.py`; `compendium.js` entry (`unlock: 'met:ryuji'`, `secret: true`).
- **Futaba's full body** (save as `futaba-fullbody.png`): `profile/futaba.webp` via `tools/femc-profiles.py`; `compendium.js` entry (`unlock: 'met:futaba'`, `secret: true`).
- **Makoto's full body** (save as `makoto-fullbody.png`): `profile/makoto.webp` via `tools/femc-profiles.py`; `compendium.js` entry (`unlock: 'met:makoto'`, `secret: true`).
- **Maruki's full body** (save as `maruki-fullbody.png`): `profile/maruki.webp` via `tools/femc-profiles.py`; `compendium.js` entry (`unlock: 'met:maruki'`, `secret: true`).
- **Mitsuru: happy** (save as `Mitsuru-Happy.png`): `portraits/mitsuru/happy.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Mitsuru: serious** (save as `Mitsuru-Serious.png`): `portraits/mitsuru/serious.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Shinjiro: serious** (save as `Shinjiro-Serious.png`): `portraits/shinjiro/serious.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Shinjiro: blushing** (save as `Shinjiro-Blushing.png`): `portraits/shinjiro/blushing.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Yukari: happy** (save as `Yukari-Happy.png`): `portraits/yukari/happy.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Fuuka: serious** (save as `Fuuka-Serious.png`): `portraits/fuuka/serious.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Mark: happy** (save as `Mark-Happy.png`): `portraits/mark/happy.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Elizabeth: surprised** (save as `Elizabeth-Surprised.png`): `portraits/elizabeth/surprised.webp` via `tools/femc-portraits.py`; check `portraits/scale.js` and the face in a scene.
- **Happy faces for the busiest regulars** (save as `<name>-happy.png (e.g. ota-happy.png)`): `portraits/<id>/happy.webp` (ids: ota, maeda, kubo, tsuji, chiba, clerk, tanabe); `femc-portraits.py`, check scale.js.

### 4. Battle
- **The Sleeper Car** (save as `memory-sleeper-car.png`): `battle/art/shadows/memory-sleeper-car.webp` via `tools/femc-shadows.py`; `data.js memory_car.img` (now `rampage-drive`).
- **Wren's Shadow, phase 1** (save as `wren-shadow-phase1.png`): `battle/art/shadows/wren-shadow-phase1.webp`; swap `wren_call`'s `pic` for `img` in `data.js`.
- **Wren's Shadow, phase 3** (save as `wren-shadow-phase3.png`): `battle/art/shadows/wren-shadow-phase3.webp`; swap `wren_last`'s `pic` for `img` in `data.js`.
- **The Hanging Effigy** (save as `hanging-effigy.png`): `battle/art/shadows/hanging-effigy.webp`; `data.js effigy.img` (now `corrupt-tower`).
- **The Reaper's pose sheet** (save as `reaper-posesheet.png`): `battle/art/shadows/reaper-pose-0..5.webp`; `BOSSES` in `tools/femc-shadow-poses.py`.
- **The Hanging Effigy's pose sheet** (save as `hanging-effigy-posesheet.png`): `battle/art/shadows/hanging-effigy-pose-0..5.webp`; `BOSSES` in `tools/femc-shadow-poses.py`.
- **Sharper Shadows (33)** (save as `<name>.png (e.g. arcane-turret.png)`): the same `battle/art/shadows/<name>.webp` via `tools/femc-shadows.py`; set `small: false` in `art/shadows/index.js`.
- **Haenim's strike sheet** (save as `solar-haenim-strikesheet.png`): `battle/art/theurgy/solar-haenim-strike-0..2.webp`; `sheet3(...)` on `theurgy.forms['<personaId>']` in `data.js`.
- **Sunna's strike sheet** (save as `solar-sunna-strikesheet.png`): `battle/art/theurgy/solar-sunna-strike-0..2.webp`; `sheet3(...)` on `theurgy.forms['<personaId>']` in `data.js`.
- **Mazu's strike sheet** (save as `solar-mazu-strikesheet.png`): `battle/art/theurgy/solar-mazu-strike-0..2.webp`; `sheet3(...)` on `theurgy.forms['<personaId>']` in `data.js`.
- **Unveiled's strike sheet** (save as `solar-unveiled-strikesheet.png`): `battle/art/theurgy/solar-unveiled-strike-0..2.webp`; `sheet3(...)` on `theurgy.forms['<personaId>']` in `data.js`.
- **Strike: heavy and critical (2 sheets)** (save as `strike-heavy.png and strike-crit.png`): `strike-heavy`, `strike-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Pierce: heavy and critical (2 sheets)** (save as `pierce-heavy.png and pierce-crit.png`): `pierce-heavy`, `pierce-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Fire: heavy and critical (2 sheets)** (save as `fire-heavy.png and fire-crit.png`): `fire-heavy`, `fire-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Ice: heavy and critical (2 sheets)** (save as `ice-heavy.png and ice-crit.png`): `ice-heavy`, `ice-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Elec: heavy and critical (2 sheets)** (save as `elec-heavy.png and elec-crit.png`): `elec-heavy`, `elec-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Wind: heavy and critical (2 sheets)** (save as `wind-heavy.png and wind-crit.png`): `wind-heavy`, `wind-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Light: heavy and critical (2 sheets)** (save as `light-heavy.png and light-crit.png`): `light-heavy`, `light-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Dark: heavy and critical (2 sheets)** (save as `dark-heavy.png and dark-crit.png`): `dark-heavy`, `dark-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Almighty: heavy and critical (2 sheets)** (save as `almighty-heavy.png and almighty-crit.png`): `almighty-heavy`, `almighty-crit` in `tools/femc-fx.py SOURCES`; run `all` (fx.js `artFor` already tries `-crit` / `-heavy`).
- **Solar, sun fire** (save as `fire-solar.png`): `fire-solar` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Solar, sunrise light** (save as `light-solar.png`): `light-solar` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Haechan, moon dark** (save as `dark-haechan.png`): `dark-haechan` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Haechan, static** (save as `elec-haechan.png`): `elec-haechan` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Akihiko, lightning punch** (save as `elec-akihiko.png`): `elec-akihiko` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Mitsuru, rose ice** (save as `ice-mitsuru.png`): `ice-mitsuru` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Jungwon, jade frost** (save as `ice-jungwon.png`): `ice-jungwon` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Yukari, pink gale** (save as `wind-yukari.png`): `wind-yukari` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Jihoon, goblin gale** (save as `wind-jihoon.png`): `wind-jihoon` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Junpei, home-run fire** (save as `fire-junpei.png`): `fire-junpei` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Koromaru, hellhound fire** (save as `fire-koromaru.png`): `fire-koromaru` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Minji, film light** (save as `pierce-minji.png`): `pierce-minji` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Aigis, tracer fire** (save as `pierce-aigis.png`): `pierce-aigis` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Ken, justice spear** (save as `elec-ken.png`): `elec-ken` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).
- **Shinjiro, Castor's charge** (save as `strike-shinjiro.png`): `strike-shinjiro` in `tools/femc-fx.py SOURCES`; needs the caster pick (`o.by`) in `fx.js artFor` (see Effect variants below).

### 5. Cards, items and icons
- **Empress (III), second card** (save as `tarot-empress-2.png`): `tarot/empress-2.webp` (`EXTRA` key `empress-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Mitsuru, Haru).
- **Justice (VIII), second card** (save as `tarot-justice-2.png`): `tarot/justice-2.webp` (`EXTRA` key `justice-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Ken, Judy).
- **Magician (I), second card** (save as `tarot-magician-2.png`): `tarot/magician-2.webp` (`EXTRA` key `magician-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Junpei, Mark, Rohan).
- **Moon (XVIII), second card** (save as `tarot-moon-2.png`): `tarot/moon-2.webp` (`EXTRA` key `moon-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Shinjiro, Minji).
- **Star (XVII), second card** (save as `tarot-star-2.png`): `tarot/star-2.webp` (`EXTRA` key `star-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Akihiko, My Melody).
- **Hermit (IX), second card** (save as `tarot-hermit-2.png`): `tarot/hermit-2.webp` (`EXTRA` key `hermit-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Saori, Chenle).
- **Sun (XIX), second card** (save as `tarot-sun-2.png`): `tarot/sun-2.webp` (`EXTRA` key `sun-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Aphrodite, Jaemin, Sunoo).
- **Chariot (VII), second card** (save as `tarot-chariot-2.png`): `tarot/chariot-2.webp` (`EXTRA` key `chariot-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Cherry, Rio).
- **Fool (0), second card** (save as `tarot-fool-2.png`): `tarot/fool-2.webp` (`EXTRA` key `fool-2` in `tools/femc-tarot.py`); give it to one link in `core.js TAROT_ALT` (Sebastian, Junkyu).
- **Plain weapons: Naginatas** (save as `plain-naginatas.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Gloves** (save as `plain-gloves.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Bows** (save as `plain-bows.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Greatswords** (save as `plain-greatswords.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Rapiers** (save as `plain-rapiers.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Guns** (save as `plain-guns.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Spears** (save as `plain-spears.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Knives** (save as `plain-knives.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Plain weapons: Axes** (save as `plain-axes.png`): `battle/art/weapons/plain-<id>.webp` (`naginata0`, `gloves3`, `sun_naginata`…); `tools/femc-cards.py` needs a nine-card mode (or `pick`); set the gear's `art`.
- **Bookworms' books, sheet 1** (save as `books-1.png`): `game/art/books/<id>.webp`, in order `manga-school poise tiger algebra speech handmade`; books need an `img` hook.
- **Bookworms' books, sheet 2** (save as `books-2.png`): `game/art/books/<id>.webp`, in order `fixit letters kitchen listening`.
- **The five birthday keepsakes** (save as `keepsakes.png`): `game/art/items/keepsake-<name>.webp` (recorder, omamori, cd, cord, socks); give each `gift` in `living-world.js` an id and an `img`.
- **Menu icons: Calendar and Compendium** (save as `menu-icons-2.png`): `game/art/icons/calendar.webp`, `compendium.webp`; `menu.js TAB_ICONS`.
- **Haenim's sun: node icons** (save as `sun-icons.png`): `battle/art/sun/<name>.webp` in order `crit speed evade counter autobuff firstcut hpregen spregen weak followup ailment ailturns lowhp physup magicup healup corona bell momentum buffturns theurgy nullail stat keystone memory`; a `glyph` hook in `sun.js` reading a node's `icon` or first passive key.

### 6. Screens and keepsakes (Gemini)
- **The album's locked tile** (save as `album-locked.png (16:9) and album-locked-sq.png (square)`): `game/art/album-locked.webp`, `album-locked-sq.webp`; `menu.js` album picks by tile shape.
- **Dark Hour still: the dorm lounge at midnight** (save as `loading-2.png`): `title/loading-2.webp`; `ui.js openBattle .g-dh-still` needs a rule for which fade gets it (e.g. nights that start in the dorm).
- **Memory card: barley tea** (save as `strangers-barley-tea.png`): `memories/strangers-barley-tea.webp`; add the id to `battle/data.js memories` and award it.
- **Memory card: the ballot box** (save as `hoax-ballot-box.png`): `memories/hoax-ballot-box.webp`; add the id to `battle/data.js memories` and award it.

### 7. Wardrobe and keychains
- **Phantom Thief outfit (pose sheet)** (save as `skin-sk-phantom-posesheet.png`): `game/art/skins/sk-phantom/solar-pose-0..5.webp`; `python3 tools/femc-wardrobe.py skin <sheet> sk-phantom solar`, bump `ready.js?v=`.
- **Summer Yukata outfit portrait** (save as `sk-yukata-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-yukata/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-yukata solar <folder>`.
- **Winter Coat outfit portrait** (save as `sk-wintercoat-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-wintercoat/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-wintercoat solar <folder>`.
- **Halloween Witch outfit portrait** (save as `sk-halloween-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-halloween/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-halloween solar <folder>`.
- **Date Day outfit portrait** (save as `sk-date-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-date/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-date solar <folder>`.
- **Emo Night outfit portrait** (save as `sk-emo-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-emo/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-emo solar <folder>`.
- **Kiriko Cosplay outfit portrait** (save as `sk-kiriko-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-kiriko/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-kiriko solar <folder>`.
- **Phantom Thief outfit portrait** (save as `sk-phantom-solar-neutral.png (then -happy, -sad…)`): `game/art/skins/sk-phantom/portraits/solar/<face>.webp`; cut like her portraits, then `python3 tools/femc-wardrobe.py portraits sk-phantom solar <folder>`.
- **Sakura Naginata** (save as `skin-wpn-sakura.png`): `game/art/skins/wpn-sakura/weapon.webp`; `python3 tools/femc-wardrobe.py weapon <image> wpn-sakura`.
- **Phantom Naginata** (save as `skin-wpn-phantom.png`): `game/art/skins/wpn-phantom/weapon.webp`; `python3 tools/femc-wardrobe.py weapon <image> wpn-phantom`.
- **Keychain sheet 3: the specials** (save as `keychain-series-3.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-3.png cp-sees-photo hw-solar-haechan hw-elizabeth su-solar-akihiko wi-solar-shinjiro va-solar-jungwon`; bump `ready.js?v=`.
- **Keychain sheet 4: Summer** (save as `keychain-series-4.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-4.png su-akihiko su-yukari su-junpei su-mitsuru su-fuuka su-jungwon`; bump `ready.js?v=`.
- **Keychain sheet 5: festival and mascots** (save as `keychain-series-5.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-5.png su-solar su-haechan su-koro-melon wi-koro-reindeer va-kuromi-melody cast-elizabeth`; bump `ready.js?v=`.
- **Keychain sheet 6: Winter** (save as `keychain-series-6.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-6.png wi-akihiko wi-shinjiro wi-mitsuru wi-fuuka wi-aigis wi-jihoon`; bump `ready.js?v=`.
- **Keychain sheet 7: winter and sweets** (save as `keychain-series-7.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-7.png wi-minji wi-solar wi-jungwon va-solar va-akihiko cast-goldsun`; bump `ready.js?v=`.
- **Keychain sheet 8: Valentine's** (save as `keychain-series-8.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-8.png va-yukari va-junpei va-mitsuru va-hanni va-hyein va-jungwon`; bump `ready.js?v=`.
- **Keychain sheet 9: Solchan, everyday** (save as `keychain-series-9.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-9.png sc-haechan-discman sc-haechan-plush sc-dryer sc-earbuds sc-gamers sc-morning`; bump `ready.js?v=`.
- **Keychain sheet 10: Solchan, sweet** (save as `keychain-series-10.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-10.png sc-rooftop sc-jacket sc-forehead sc-christmas sc-strangers sc-runners`; bump `ready.js?v=`.
- **Keychain sheet 11: Solchan specials and the hidden charms** (save as `keychain-series-11.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-11.png sc-twosuns sc-held hd-couch hd-rings hd-pairsuns hd-runners-roof`; bump `ready.js?v=`.
- **Keychain sheet 12: romance charms** (save as `keychain-series-12.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-12.png cp-solar-akihiko-2 cp-solar-jungwon-2 cp-solar-jihoon-2 su-solar-jungwon su-solar-minji hw-solar-jihoon`; bump `ready.js?v=`.
- **Keychain sheet 13: more romance and Koromaru** (save as `keychain-series-13.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-13.png wi-solar-akihiko va-solar-shinjiro va-solar-minji dl-koro-bee dl-koro-hero dl-koro-sailor`; bump `ready.js?v=`.
- **Keychain sheet 14: Dorm Life pajamas** (save as `keychain-series-14.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-14.png dl-akihiko-pj dl-junpei-pj dl-yukari-pj dl-mitsuru-pj dl-fuuka-pj dl-solar-pj`; bump `ready.js?v=`.
- **Keychain sheet 15: Dorm Life nights** (save as `keychain-series-15.png`): `game/art/keys/series/<id>.webp`: `python3 tools/femc-wardrobe.py keys keychain-series-15.png dl-hateclub dl-dorm-pj dl-ken-pj dl-aigis-pj dl-koro-basket dl-shinjiro-pj`; bump `ready.js?v=`.
- **Capsule goods sheet 1** (save as `capsule-goods-1.png`): `game/art/goods/<id>.webp`: `python3 tools/femc-wardrobe.py goods capsule-goods-1.png gd-st-sees gd-st-koro gd-st-solchan gd-pl-koro gd-pl-solar gd-as-solar`; bump `ready.js?v=`.
- **Capsule goods sheet 2** (save as `capsule-goods-2.png`): `game/art/goods/<id>.webp`: `python3 tools/femc-wardrobe.py goods capsule-goods-2.png gd-as-haechan gd-as-akihiko gd-pc-akihiko gd-pc-shinjiro gd-pc-jungwon gd-pc-haechan`; bump `ready.js?v=`.
- **Series and goods notes (2026-10-26):** ids are gacha.js `SERIES` items (Solchan `sc-*`, Dorm Life `dl-*`, hidden `hd-*`, new couples in their season) and `GOODS` (`gd-*`). The tool cuts every cell like a keychain (key out #00FF00, trim, transparent WebP), so goods only need to sit centred in their cells; `goods` writes `game/art/goods/` and `scan` lists them in `ready.js` `goods`, after which Collection and the prize card show the art instead of the drawn stand-in (`gacha.css .g-good[data-k]`). The hidden charms are ordinary series art (`keys/series/hd-*.webp`); their gold-and-silver look in Collection is CSS. Asahi and Niki have no charms, so their portraits are attached for the Hate Club; Widowmaker likewise for `sc-gamers`.

### Format notes moved from Kat's list
- **Showtime panels:** one 16:9 image per panel, not a sheet. `battle.js playSeq` crossfades separate full-screen pictures, each with its own crop point, drift and zoom; a 3 × 2 sheet would give 512-pixel squares. Panels are made in one ChatGPT chat ("Panel 2 now: same characters, same style.") so faces stay consistent. Where a pair already has a still, it is panel 1 and stays the short-version still (Persona cut-ins Off, Rush, repeats, reduced motion). The romance `love15` version reuses its pair's Showtime; a fifth panel is that version's own ending. ★ = the strike panel (impact and the bond's name land on it).
- **Effect sheets (5F/5G):** a 3 × 2 grid of 512 × 512 frames in a 1536 × 1024 image (a 6:1 strip is a shape ChatGPT can't make). Stages: 1 spark, 2 build-up, 3 impact, 4 spread, 5 break-up, 6 last wisps; the game plays them in about 0.4 s and lands the damage number on frame 3. Solid black, not transparent: `fx.js` draws with additive blending, so black adds nothing and soft glows keep their fade (ChatGPT's "transparent" glows come back with halos or fake checkerboards, and white-keying would eat white-hot cores). Dark, poison and fear are glowing violet edges around empty black. The All-Out cloud is the exception (white with black ink, real transparency or flat #00ff00). All 31 of Kat's base sheets are in; the base template, for a redo:
  `A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: [SPARK]. Frame 2: [BUILD-UP]. Frame 3, the peak: [IMPACT]. Frame 4: [SPREAD]. Frame 5: [BREAK-UP]. Frame 6: [LAST WISPS]. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, [COLOURS], high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.`
- **Backgrounds by kind:** gear and book cards on plain white (the card tool cuts it); small icons, stickers and charms on flat #00FF00 (keys out cleanly); full pictures (tarot, album tile, loading stills, memory cards) full-bleed.
- **Gear and item sizes:** armor and accessories show like weapons (a tall card cropped to 46 × 102 in the equip screen, 26 × 56 in lists, 34 × 76 in battle loot; wide items get 92 × 64), so drawn upright and centred, about 70% of the card's height. Battle items and materials are ~26 px icons (64 px big).
- **Tarot:** 360 × 507 in the Bonds menu and the rank-up card (P3's ~5:7); `tools/femc-tarot.py` crops a 2:3 picture. Lovers (Hyein) and Strength (Koromaru) alternates are in (batch 45); Priestess and Emperor have one link each. Magician, Sun and Lovers have three links, so one alternate still leaves two sharing.
- **Wardrobe:** outfits and weapon skins show "Art coming" and stay out of the Boutique banner until `ready.js` lists their files; series keychains are drawn from faces until cut in. The Halloween singles use Kat's `<id>-halloween.webp` charms, so only `hw-solar-haechan` and `hw-elizabeth` are on a sheet. Elizabeth has no base charm (`game/art/keys/elizabeth.webp`), so her portrait is attached instead.
- **Faces for the regulars (old 4D):** every regular with 7+ lines and the three teachers have a face (batches 37, 39, 40). Mrs. Kanda, Hiyori, other teachers and anyone under 7 lines are left out (no face would show). The old per-person prompts are in git history (FEMC-ART-TODO.md before batch 40); attach `Character Portraits/Fuuka/Fuuka-Neutral.png` for style.
  - CamelCase ids work: `femc-portraits.py` writes lowercase folders (`Character Portraits/chKagami/` → `portraits/chkagami/`), and `core.js faceId` lowercases speaker ids.
  - Shared ids are split: `ybTsuji` (Mrs. Tsuji at Yeobo's), `lbUeda`, `tuDaichi`, `wdClerk`; the prologue's clerk stays `clerk` (same man as the konbini job's). A face for any of them goes in `portraits/<id lowercased>/`.
  - Teachers: `ui.js classPeriod` shows `G.portrait(<teacher key>)` once `portraits/<key>/` exists.
  - After cutting, check `portraits/scale.js` and each face in a scene (`femc-check-scenes.py`).
- **Done sections (nothing left to make):** big story beats, night versions, seasons, Dark Hour arenas, events, the regulars' first faces, Kat's 31 skill-effect sheets, the Tartarus-over-the-gate loading still (`title/loading-1.webp`), outfit pose sheets for Summer Yukata, Winter Coat, Halloween Witch, Date Day, Emo Night and Kiriko Cosplay, keychain series sheets 1–2. Checked and fine: title key art, the Velvet Room, Go Out cards, Tartarus's seven blocks, every Persona, all weapon sheets, finish cards, chibi frames and memory cards in the game.

## How new art goes in (the old appendix)
### Wiring-only fixes (no art needed)
None left: the 2026-10-22 audit's list was all wired in.

### CGs
CG prompts must carry the scene's visual details; check the text before writing a prompt. (Time and light, who's there and who isn't, clothes, poses and distance, setting, season and weather, props, as plain visual direction with no plot.)

Convert to WebP in `assets/femc/cg/<slug>.webp` (composition untouched, at most 1920 wide), then show it with a `{ cg: '<slug>' }` scene step and clear it with `{ cg: null }`. Add the face's crop point to `places.js cgFocus` for tall phone windows. The album and Theater find CGs in the scene data (`menu.js albumData`), so nothing else is needed. Endings live in `story-endings.js` (one event, branching by route); Christmas Eve scenes are each link's `christmas`; rank 10 / 15 are the link's ranks; graduation is `a6-graduation` in `living-march.js`; Yakushima is `yakushima.js` (the album doesn't walk its trip-plan scenes, so a CG there needs `story-act3.js a3-yakushima` or a `menu.js sceneSources` kind). Record the source in `tools/femc-new-adds.json` and move it to `Added to Game/`.

### Characters
- **Portraits:** cut with `tools/femc-portraits.py` (sheets: `femc-sheet.py` / `femc-lift.swift`); it rewrites `portraits/index.js`. Check `portraits/scale.js` and every face in a scene.
  - *Gemini landscape busts (batch 40, 2816×1536 on white or a baked-in checkerboard):* lift with `femc-lift.swift`, then flood away the pale fringe and the art's soft outer glow from the outside (≤14 px, light and low-saturation), put back small holes Vision punched in white collars, and crop a 0.89-wide box from the top of the hair to 1.05 face-heights below the chin (Vision's face box works on these, not on the flatter ChatGPT art). Size in `scale.js` by eye-to-chin against Fuuka, Junpei and the batch 37 regulars.
- **Full bodies:** `tools/femc-profiles.py` writes `profile/<id>.webp` and `profile/index.js`; S.E.E.S. and searcher art goes in `profile/sees/` or `profile/searchers/` with `img` and `profile: true` on the `compendium.js` entry. A character without an entry gets one (`unlock: 'met:<id>'`, `secret: true`, the link's `approach` line as the note, no new prose); batch 43 added Fuuka, Sunoo, Junkyu, Wren, Danielle, Jaemin and Chenle. Elizabeth, Wren and My Melody use `profile/<id>.webp` named on the entry, so `profile/index.js` (and v1) is unchanged. Bump `FEMC_ASSET_VERSION` and run `python3 tests/femc_compendium.py --ids <ids>`.
- **Evoker shots:** `battle.js evoker()` shows a face plus Kat's Evoker prop (`EVOKER_ART`, `art/summon/evoker-prop.webp` from `tools/femc-evoker-prop.py`; the code-drawn `EVOKER_SVG` is its fallback) for members without a close-up. A close-up is `evoker: { shot: 'assets/femc/battle/art/summon/<mid>-evoker.webp', at: [muzzle x%, y%], pos, posPhone }` in `data.js` (built in batch 43; Akihiko and Shinjiro have one): it fills the `.bt-evk-shot` slot like Solar's, the glass breaks at `at`, and `pos` / `posPhone` are its object-position on wide and phone screens. Evoker sheets already work: `('evoker', '<file>', '<mid>-evoke')` in `tools/femc-theurgy.py BUILD`, then `evoker.frames`.

### Battle art
- **New Shadow or boss art:** `tools/femc-shadows.py` cuts it into `battle/art/shadows/<slug>.webp` and `index.js`; point the enemy's `img` at the slug (the memory boss is `memory_car`). A boss that comes as its own picture plus a labelled 2×2 sheet (the April boss, batch 37) goes in `QUADS` in `tools/femc-shadow-poses.py`, which writes both the static art and the frames. Wren's phases: swap `wren_call` / `wren_last`'s `pic` for an `img`. Then pose sheets as below.
- **Gear and item art:** weapons already read a gear's `art` (equip lists, shops, Shuffle Time); armor and accessories need the same field checked in each list. Items and materials are Kat's stickers since batch 48 (`tools/femc-greens.py` → `battle/art/items/<id>.webp`, `build.js ITEM_ART` sets `art`, and `tartarus.js` for its five materials; `FemcIcons.of` shows them, the drawn SVG if a file fails; the menu's Items tab and the life sim's shops show them too). Status icons and map rooms are art since batch 36 (`tools/femc-icons.py` → `battle/art/icons/`, read by `battle.js stIco` / `ROOM_ART`); the deeper Tartarus's nine rooms are `ROOMS2` there (batch 48), the Night Orchid included.

### Cards, screens and keepsakes
- **Tarot:** Elizabeth's arcana key is `velvetroom` (see Tarot cards and places below).
- **Gacha:** keychains are `gacha.js keychain` (Kat's charms since batch 45: `tools/femc-keys.py` → `game/art/keys/<id>.webp` and `<id>-halloween.webp`, worn in October on the game's calendar, `halloween()`; the drawn charm / `keyFace` is the fallback); phone cases are Kat's art since batch 48 (`gacha.js caseArt` → `game/art/cases/<id>.webp` from `tools/femc-greens.py`; the drawn `.g-case-art[data-case]` colours in `gacha.css` are the fallback and still tint the open phone). The phone wears a case via `ui.js openPhone`.
- **Wardrobe and series art (section 8):** `tools/femc-wardrobe.py` cuts every kind and rewrites `game/art/ready.js` (`FEMC_ART_READY`), which is the only thing the game checks: `skin <sheet> <outfit id> [who]` (pose sheets, cut like the fighters' in `femc-shadow-poses.py` → `game/art/skins/<id>/<who>-pose-0..5.webp`; battle.js reads the folder through `parent.FemcCosmetics.battle()`), `portraits <outfit id> <who> <folder>` (scene portraits, `core.js portrait` asks `FemcCosmetics.portrait`), `weapon <image> <id>` (`skins/<id>/weapon.webp`, menu.js Equipment), `keys <sheet> <six ids>` (series charms, cut like `femc-keys.py` → `game/art/keys/series/<id>.webp`), `scan` (re-list only). Bump `ready.js?v=` in `femc-game.html`. An outfit drawn bigger or smaller than her own sheet can get a size factor later (battle.js `FIGHTER_POSES` is per member, not per outfit). `python3 tests/femc_cosmetics.py --only pending` copies frames into a temporary outfit folder to check the whole path.
- **Phone groups:** `ui.js GROUP_PICS` / `threadPic` (batch 48, `game/art/phone/<group>.webp` from `tools/femc-greens.py`; a new group needs its id there and a picture).
- **Album locked tile:** `menu.js` album (locked tiles load no art now).
- **Memory cards:** add the id to `battle/data.js memories` (and award it somewhere); `memories/<id>.webp` shows up on its own.

### Tarot cards and places
- **A tarot card:** add `'<arcana key>': 'Added to Game/<file>'` to `EXTRA` in `tools/femc-tarot.py` (the key is the link's `arcana` lowercased without spaces) and run it: it writes `tarot/<key>.webp` and `tarot/index.js`, which the Bonds menu and the rank-up cards read (`core.js tarot`). Bump the `tarot/index.js ?v=` in `femc-game.html`.
- **A place:** add `'<slug>': 'Added to Game/<file>'` to `EXTRA` in `tools/femc-backgrounds.py` and run it (WebP, at most 1920 wide; New Adds pieces are fit to 1920×1072), then point the place's rule in `game/data/places.js` (or a scene's or a pick's `bg`) at the slug and bump that file's `?v=`. An activity that shares its spot with other scenes gets its own `place` (e.g. `'Iwatodai Strip · Hagakure · Challenge Bowl'`) and a rule above the spot's. A rule can't change by season, but a day image can: `places.js seasons` maps one (now `outside-shrine-day`, `gekkoukanhigh`, `park-2`, `rooftop-day`, `iwotodaidorm-outside`) to [first month, slug] pairs, and `core.js seasonal` swaps it wherever it's used (rules, scene `bg`, Go Out); other seasonal art goes on dated scenes' `bg`. `places.js today` swaps any image for certain dates or weather (`{ dates, weather, img }`, `core.js dressed`, day and evening images both): the festival hallway, the Strip in the rain. A story event's own `bg` field isn't read (ui.js `sceneFor`), so an event sets its art with a `{ bg }` step. Night-lit art gets the same slug as its evening image too, or evening scenes dim it.

### Theurgy and strike-sheet art
Everything is data plus one tool. The presentation is reusable: `battle.js theurgyCut` plays whatever a fighter has (see the comment above `TH` in `data.js`).
1. Add a line to `BUILD` in `tools/femc-theurgy.py`, then run `python3 tools/femc-theurgy.py all` (or one command: `cutin SRC slug`, `layers CHAR PERSONA BG slug`, `sheet SHEET slug`). Check the edges with `python3 tools/femc-theurgy.py check OUT.png <files>`.
   - **Strike sheets** are cut by finding each figure as a connected piece, not by a fixed grid, so a blade crossing into the next panel is fine. Each frame gets the same canvas with the body's mass centred and the feet on one baseline. White gaps in long hair are punched out.
   - If a figure wears a big white shirt, add the file to `HOLES` with `None`; otherwise the shirt could be punched out too.
2. In `data.js`, on that member's `theurgy`, add the pieces:
   - `img` (with `focus: [x%, y%]` of the face)
   - `sheet: sheet3('<slug>')`
   - `layers: { bg, persona, char }`
   - A Persona form gets its own look under `theurgy.forms['<personaId>']`.
3. Bump `ART_V` in `battle.js` and the `data.js ?v=` in both pages, then run `python3 tests/femc_theurgy.py`.
4. Move the source to `Added to Game/` and add its entry (hash, outputs) to `tools/femc-new-adds.json`.

### Pose sheets (bosses and fighters)
1. Add the sheet to `BOSSES` (source → Shadow slug) or `FIGHTERS` in `tools/femc-shadow-poses.py`, then run `python3 tools/femc-shadow-poses.py <sheet.png>`. Check the edges with `python3 tools/femc-shadow-poses.py check OUT.png <sheet.png>`.
   - White is keyed like the strike sheets. If Vision fills paper-white gaps (hair, ribbons, glows), the sheet gets a `HOLES` ring, a `GAPS` entry, or `GLOW` / `AURA` (glows only; not for white-bodied art).
   - Bosses: frames go to `art/shadows/<slug>-pose-0..5.webp` and the index.js entry gains `poses` (the idle figure keeps the boss's `h`).
   - Fighters: frames go to `art/poses/<mid>-pose-0..5.webp`; add the member to `FIGHTER_POSES` in `battle.js` with a size factor (1 = contain in the stance box).
2. Bump `ART_V` in `battle.js` and the `battle.js` / `shadows/index.js` `?v=` in `femc-battle.html`, then run `python3 tests/femc_shadow_poses.py` (bosses) or `python3 tests/femc_field_poses.py` (fighters).
3. Move the source to `Added to Game/` and add its entry to `tools/femc-new-adds.json`.

### Lantern windows (3D)
Done (batch 25). For a redo: cut each one to a transparent WebP in `battle/art/shadows/` (`memory-lantern-runners.webp` etc.) and add it to `art/shadows/index.js` (w, h). In `data.js`, give `lantern_r` / `lantern_s` / `lantern_h` an `img` (and drop `pic`). `battle.js addEnemy` draws the code lantern (`lanternSvg`) only while a lantern has no `img` art; with art it takes the Shadow-art branch and keeps its `.lantern` classes and place on the train (`--lo`), and `orderIcon` shows the art. The "behind glass" look for art lanterns needs a CSS rule on `.bt-enemy.lantern.unreachable .sh-pic` (dim plus a glass overlay). Bump `ART_V`, the `data.js` and `shadows/index.js ?v=` in both pages, and check the finale's phase 2 at 1000×486, 375×812 and 1440×900.

### Bond art
The same pieces as a Theurgy (the steps above), in `assets/femc/battle/bonds.js`: on a bond (or one version of it, `tiers[i]`, `love` or `love15`), add `img` with `focus: [x%, y%]`, `sheet: { frames: [three files] }` or `layers: { bg, persona, char }`. Cut it with `tools/femc-theurgy.py` (a bond still is a `cutin`; a 3-step combo sheet is a `sheet`). Bump `ART_V` in `battle.js` and the `bonds.js ?v=` in both pages, then run `python3 tests/femc_bonds.py --only art,shots`.
- **A sequence** (several full-screen panels, like Haechan's Universe): cut each panel as a `cutin`, then give the version `sequence: [{ src, focus, pan, hit }, ...]` and set its `img` / `focus` to the last panel (the short band and reduced motion show only that one). `hit: true` marks the strike panel (the impact and the name land there; default: the middle one); `pan: [x%, y%]` is where a panel's drift starts. Pick each `focus` so both faces stay inside the phone band (about 53% of a panel's width at 375×812); the test freezes each panel there and checks. A Theurgy takes the same `sequence` field (`data.js` comment above `TH`).

### Weapon sheets and finish cards
- **Weapons:** every fighter has a set now (Solar's naginatas since batch 14, the searchers' in batch 22, S.E.E.S.'s in batch 23; Ken is skipped). For a new sheet (plain-weapon sets, say), add it to `BUILD` in `tools/femc-cards.py` (`weapons`, the file, the six names in reading order, and options: `rotate` for how far to turn a diagonal weapon upright, `labels` `auto` / `auto-wide` to blank only the printed names, or `none` for an unlabelled sheet, `wide` for landscape art like gloves or arm guns, `grid` 3 / 6 when the frame lines are too faint to find, `pick` when a sheet has more cards than six) and run `python3 tools/femc-cards.py all`. Then add the six to `build.js` as a list like `HK` / `AK` and one line in `OWNED` (owner, weapon type): that sets `owner` (only that fighter, in every list, shop and Shuffle draw), makes the tier-0 one their starter (old saves swap through `STARTER_SWAP`), and `artWide` for gloves and guns (guns also get `hits`). Sources go in shops (a price below tier 5 = Police Box; Mayoido's `stock`; both only list a weapon while its owner is around), `lockedRare`, `BOSS_WEAPON` (a value may be a list; saves that already cleared that full moon get it once in `save.js`: bump the `ownBoss` round), a perk's `gift` and `Shuffle Time · Swords`. Add the noun to `SET_NOUN` for a new weapon type. Run `python3 tests/femc_building.py` (`--only knives,searchers,sees`).
- **Revelation card art:** a set's painting goes in with `('revcard', 'card-<world>-<subject>.jpeg', ('<set>', x0, y0, x1))` in the same `BUILD`: the fractions cut inside the printed frame (the game draws its own) to the face's 88:114 art window. `build.js SETS` points every set at `art/cards/<set>.webp`; bump `CARD_ART_V` there with `ART_V`. The face is `icons.js revCard` (menu, Shuffle Time, results, gacha). `python3 tests/femc_building.py --only cardart` checks all three sizes.
- **Finish cards (3C):** add `('finish', '<name>-alloutattack.png', '<mid>')` to the same `BUILD`, run it, and add the member to `FINISH_CARDS` in `battle.js`.

### Skill-effect sheets (5F)
**Built (2026-10-23).** The sheet player is in the game, and every effect keeps its code version as the fallback. All 31 of Kat's sheets are in (Dark since batch 43). Her picks between two versions are in `tools/femc-fx.py SOURCES`, and the other versions are in `ALTERNATES` (in Added to Game, unused).

**Adding a sheet:**
1. Drop the 3 × 2 source in **New Adds**, named as its **Fills** line says (`dark.png` or `.jpeg`; `fx-dark.png` works too). Any size near 3:2 works.
2. Run `python3 tools/femc-fx.py all`. It builds every sheet whose source is in New Adds or Added to Game, rewrites `battle/art/fx/index.js`, and points `femc-battle.html`'s `fx/index.js?v=` at the new list. No other bump is needed, because each sheet's URL carries its own content hash.
3. Look at it: run `python3 tools/femc-fx.py check OUT.png slash` (the sheet on black, field purple and white), then play a hit in a battle.
4. Move the source to Added to Game (same name), add its manifest entry to `tools/femc-new-adds.json`, and tick it off in 5F. `all` still finds it there, so the tool stays re-runnable.

**The tool** (`tools/femc-fx.py`; its header has the details):
- It cuts the fixed 3 × 2 grid and warns when a frame's light touches its cell edge. It clears grid seams and the frame boxes ChatGPT sometimes draws (straight bars along a cell's edge), and fades the outer 5% of each frame so a beam or flare that ran off the cell ends softly.
- Black becomes alpha (alpha = brightest channel, colour divided back out), so soft glows keep their fade and white-hot cores stay solid. `allout-cloud` keeps its own alpha, or keys out flat #00ff00.
- Frames go to 256 px (384 for crit, weak, theurgy-burst and allout-cloud), in one WebP per effect.
- `SOURCES` maps a name to an oddly named file.
- `ALIGN`: the default is one shared shift (the peak frame's brightness centre to the middle), held back so no frame's light leaves the cell. `'peak'` uses the peak frame's hot core instead (Elec, whose bolt from above would pull it down). `'core'` puts each frame's hot core on the middle, on a 1.3× padded canvas (the index's `scale`), for a sheet whose frames drift, like Pierce (frames 4–6 sat left).
- `GREY` (buff): made greyscale so the stat tint reads (Kat's came pink).

**The player** (`fx.js`, "Skill-effect sheets"):
- `play()` checks `artFor(kind, o)` after the reduced-motion line. A listed sheet that has loaded plays its six frames (70 ms each at 1x; battle speed applies) and returns 140 ms, so the damage number lands on frame 3. A missing sheet, a 404 or one still loading plays the code effect, unchanged.
- **Mapping:** element kinds are one to one. `buff` uses `debuff` when `dir < 0`. Fear, freeze and shock play their own sheet first, then borrow Dark, Ice or Elec at the small size. Shatter uses its own sheet, then Ice. Instant kills use `hama` / `mudo`, then Light / Dark. Signature kinds stay code.
- **Extras:** a few code sparks are drawn on top at the impact (not in Performance mode). The buff sheet is tinted per stat (`STAT_COL`; gold for others). Kat's theurgy-burst is gold-white and plays as drawn (the element's own hit adds the colour); a sheet the index marks `tint` would take `o.tint`. Sheets are preloaded in `attach()`.
- **Hooks in `battle.js`:**
  - Crit: the `crit` sheet over the target, peaking on the hit, including the All-Out's final hits. The white flash drops to a third (`flash(pink, k)`, `--fk`).
  - Weakness: the `weak` sheet in place of `.bt-wburst`; the hit-stop stays either way.
  - Theurgy: `theurgy-burst` at `f-hit` (class `has-fx` hides the CSS burst and rays).
  - All-Out: `allout-cloud` becomes `.cloud.art`, stepped with the chibi beat, and holds frame 1 under reduced motion.
  - Shuffle Time: `shuffle-flip` is a CSS sprite on `.bt-sh-card.up::after` (`has-flip`, screen blend).
  - Marks: `fx-art-<name>`.
- **Reduce flashes:** frames 2–4 draw at 0.45, and crit / theurgy-burst at 0.75 size. Shuffle's flare is at .4.
- **Reduced motion:** no sheet plays; it keeps the single soft flash.
- **Test:** `python3 tests/femc_fx_art.py`. It makes its own sheet in the page, so it needs no shipped art.

### Bond Showtimes (5A): the player *(built 2026-10-24, batch 44)*
The player is `battle.js playSeq` / `seqHtml` / `seqSays` (used by `bondCut`); the data shape is in the comment at the top of `bonds.js`.
- **Adding one:** cut each panel with `tools/femc-theurgy.py` (add `('cutin', '<source>', 'bond-<id>[-love]-show-<n>')` to `BUILD` and run `all`, or `cutin SRC SLUG`; 1600 × 900, the framing kept). A friendship Showtime goes on the bond itself (`sequence` on the `BONDS` entry), so every tier plays it, and a romance version without its own art borrows it; a version with its own `img` / `sheet` / `layers` doesn't. A romance one goes on `love` (and `love15`). Panel 1 is the existing still where there is one. Keep the version's `img` as the short-version still (the existing still, else the last panel). Universe keeps its own sequence. Then add the bond to `SHOWS` (and its face x-positions to `FACES`) in `tests/femc_bonds.py` and run `--only showtime,showshots`.
- **Per panel:** `src`, `focus` (keep both faces in the phone band), `pan`, `ms` (the hold at 1x; default 640, the strike 800), `zoom` (start scale for a punch-in), `shake: true` (a non-strike panel), `hit: true` (the ★ strike: impact, flash, the bond's name), `sfx` (an existing `sfx()` key), `say: [who, text, side?]` or a list of those (`who` is `'partner'` or `'solar'`; `side` `'l'` / `'r'` overrides Solar-left / partner-right). Aim for 3–4 s of panels at 1x.
- **Lines:** P5R-style boxes at the top corners over each panel (under the band on phones, where the band shows the whole panel); with lines on the panels the end card shows only the name. The battle log gets the panel lines.
- **Skipping:** tap, Enter, Space or the pad's A jumps to the strike panel (the impact lands once), then the last panel and a shorter end card (marks `bond-seq-skip`).
- **Settings:** Bond Showtimes **On / Still only** (game settings → Battle, and the practice settings): Still only plays the version's `img`. Persona cut-ins Off, Rush and reduced motion show the still as before; Reduce flashes softens the strike flash as everywhere.
- **Batch 49:** every 5A set Kat made is in (every bond but Haechan's has a friendship Showtime, his Eclipse is still waiting; Akihiko, Haechan, Jungwon, Jihoon, Minji and Shinjiro have romance ones, the rank-15 versions with a fifth panel). Kat's `solar-shinjiro-show-1..4` turned out to be the Warm Hands set, so it is `bond-shinjiro-love-show-1..4` on `shinjiro.love`; Seconds stays on the bond.

### Effect variants (5G): how the player picks one *(crit pick built in batch 45; the rest is a note)*
- **Built:** Slash's Heavy and Crit sheets (`slash-heavy`, `slash-crit` in `femc-fx.py SOURCES`). `fx.js artFor` tries `<kind>-crit` when `o.crit` (battle.js already passes it) and `<kind>-heavy` when `o.heavy`, then the plain sheet; `battle.js fxHitKind` sets `o.heavy` for -ma / -dyne / all-foe damage skills (batch 44). The generic `crit` overlay still plays on top.
- **Building:** add each variant to `SOURCES` in `tools/femc-fx.py` under its own name (`fire-heavy`, `fire-crit`, `fire-solar`, …) and run `all`; the index lists it like any other sheet, and no other bump is needed.
- **Picking:** `fx.js artFor(kind, o)` already walks a list of names and takes the first sheet that has loaded. A variant goes at the front of that list: the caster's flavour first (`<kind>-<o.by>`, which needs `battle.js fxPlay` to pass the caster's member id as `o.by`), then `<kind>-crit` when `o.crit`, then `<kind>-heavy` when the skill is a -ma / -dyne / all-foe one (a `heavy` flag on those skills in `data.js`, or `o.big` from the caller), then the plain sheet, then the code effect. So a missing variant just falls back to today's sheet.
- **Order of preference to settle with Kat:** flavour beats heavy (Solar's Agidyne would show her sun fire, not the generic pillar), and crit beats both; or a flavour could get its own `-heavy` later.
- **Crit overlay:** the generic `crit` sheet still plays over a crit; with an element crit sheet the overlay could drop to a small flash so the two don't stack.
- **Test:** `tests/femc_fx_art.py` builds its own sheets in the page, so it can add a variant and check the pick order without shipped art.

### Cards, items and screens (sections 6 and 7): wiring notes
- **Green-screen sheets** (item and material icons, menu icons, keychains, phone cases, group avatars): key out flat #00FF00, cut each cell, trim, and save transparent WebP (`tools/femc-keys.py` does this for the keychains and can be copied for the rest). White-background sheets (gear, books, keepsakes) go through `tools/femc-cards.py` like the weapons; the plain-weapon sheets are 3 × 3, so that tool needs a nine-card mode (or `pick`).
- **Gear art (in since batch 45):** `tools/femc-cards.py gear SHEET ids…` (or a `('gear', file, ids)` line in its `BUILD`) cuts a white sheet onto the wide canvas; add the ids to `build.js GEAR_ART`, which sets `art` + `artWide` (menu Equipment, shop shelves, chest loot read it; `icons.js of` shows it in the battle shop / equip screen and gacha prizes, drawn icon if the file fails). **Tarot alternates:** an `EXTRA` key `<arcana>-2` in `tools/femc-tarot.py`, then the link in `core.js TAROT_ALT`.
- **Hooks still to add:** Bookworms' books and the keepsakes an `img` (keepsakes have no ids yet: give each gift an id); the menu tabs' icons are in (`menu.js TAB_ICONS` / `tabIco`, `game/art/icons/<tab>.webp`, text-only fallback); the album's locked tile picks the 16:9 or square file by the grid it's in; the loading stills are in the Dark Hour fade (`ui.js openBattle` `.g-dh-still`, `game.css`; batch 48 shows `title/loading-1.webp` on every one), so a second still needs a rule for which fade gets which (e.g. `loading-2` for nights that start in the dorm).

- **Portraits changed?** Bump `window.FEMC_PORTRAIT_V` at the bottom of `assets/femc/portraits/scale.js` (and its `?v=`), or browsers keep the old faces.
