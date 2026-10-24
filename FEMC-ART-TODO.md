# Art to make (rebuilt 2026-10-22 from every old list and a check of the whole game)

**53 items:** 2 quick fixes · 6 CGs · 3 places · 18 character pieces · 10 battle (1 of them a skill effect in 5F) · 8 cards and icons · 6 screens. 3 are ⭐, 31 are optional.

This is the one list. It replaces `FEMC-ART-NEXT.md`, `FEMC-THEURGY-PROMPTS.md` and the open items in `FEMC-ART-LIST.md`, `FEMC-CG-PROMPTS.md` and `FEMC-GEMINI-PROMPTS.md` (those files still hold some full prompts, referenced below by number). Everything already in the game is off it.
- Put finished pieces in **New Adds**.
- Once they're in the game, I move them to **Femc Mode Images / Added to Game**.
- ⭐ = big visible upgrade. *(Optional)* = polish, nice to have. Every item works in the game today without its art.

**Where attachments live:**
- 🎨 **Images folder:** `~/Documents/UniverseHub-Images/Femc Mode Images/`. Character Portraits, Personas, Event CGs, Added to Game.
- 🎮 **Game folder:** `my-works-hub/assets/femc/`. Backgrounds (`bg/`), CGs (`cg/`), battle art (`battle/art/`), tarot cards (`tarot/`).

Use **ChatGPT** for anything with a face, and **Gemini** for places and objects.

---

## 1. Quick fixes to finished art ⭐
Edits, not new pictures. The prompts are in `FEMC-CG-PROMPTS.md` section 0.
- [ ] **Elizabeth's blank page:** the armband is still on Solar's arm (#0.1).
  - **Attach:** 🎮 `cg/prologue-elizabeth-blank-page.webp` only. **Fills:** the same file.
- [ ] **Wren's bench:** the socks and skirt (#0.2). It isn't in the game yet; once fixed it goes on her first meeting.
  - **Attach:** 🎨 `Event CGs/wren-meets-solar-bench-v1.webp` only. **Fills:** `cg/wren-meets-solar-bench.webp`.

---

## 2. Story CGs (ChatGPT) ⭐
**Attach for every CG:** 🎮 `cg/prologue-akihiko-finds-solar.webp` **first** (style), then the portraits named (🎨 `Character Portraits/<Name>/`; Solar's cleanest is `Solar/Solar-smiling.png`).

Every CG prompt starts with this style block:
```
Create a NEW illustration that matches the art style of the FIRST attached image exactly: same line weight, flat cel shading with hard-edged shadows, same face style and proportions, moody lighting with one dominant color. Use the other attached images only for the characters' faces, hair and clothes. 16:9, high resolution, Persona 3 Reload event CG, cinematic composition. Solar: very long straight black hair, black Gekkoukan uniform, red bow, white earbuds around her neck, white knee socks. No S.E.E.S. armband (she only wears it in battle and the Dark Hour; add it back only for those scenes). Kat sometimes changes Solar's outfit for fun: never treat Solar's clothes as a mismatch.
```

### How to use the "Must match" lines
Each CG below has a **Must match** line taken from its scene: time and light, who's in the picture (and who isn't), clothes, poses, setting, season and props. Paste it into the prompt after the style block. The style block's outfit for Solar is only the default; when a Must match line gives her different clothes, use those. Items with their own prompt already carry it.

### 2A. Big story beats
All done.

### 2B. Romance and link moments
One template; fill it from the item's Must match line, not from the setting name alone.
```
Solar and [NAME] at [SETTING], [TIME AND LIGHT]. [WHO ELSE IS THERE, OR "just the two of them"]. [CLOTHES]. [POSE AND DISTANCE]. [SEASON AND WEATHER]. [PROPS]. [MOOD].
```
- [ ] *(Optional)* **Rank 10 (MAX)**, one per link (5 still to make). **Fills:** `cg/link-<id>-r10.webp`. **Attach:** style, Solar, the partner. Solar's clothes go by the season unless the line says otherwise.
  - **Everyone else**
    - **Sebastian** (outside Game Panic, under the awning): a December evening, cold rain on the awning, wet pavement; Sebastian in a hoodie with the hood up, holding a slightly damp pencil sketch of a frog; a worn dark-green twenty-sided die; Solar in her uniform; close but not touching.
    - **Aphrodite** (the mall atrium): a December evening, a three-story tree in gold, white and pink; Aphrodite in white and gold, glowing, sitting on the planter rim under the tree with a golden apple in her hands; Solar beside her.
    - **Widowmaker** (Moonlight Bridge): a late-January night, snow falling through the bridge lamps, a moon, an empty walkway; a slow waltz, Widowmaker leading in a red scarf, hands joined; a long frayed black satin ribbon.
    - **Rohan** (inside Bookworms, closed): late December, snow falling past the window; a cat asleep on the counter; Rohan in his green headband holding a pen; Solar turning the pages of a hand-bound book with a painted cover; just the two of them.
    - **Wren** (the dorm roof): about 11pm in early March, very cold, ice down one side of the water tank, city lights below, the station lights small in the distance; Wren sitting against the tank, coat pulled round her knees, cap on; Solar beside her, both facing the station lights.

### 2C. Holidays and group shots *(optional)*
- [ ] **New Year's at the shrine** (`FEMC-CG-PROMPTS.md` #24). **Attach:** style, Solar, 3–4 friends, and 🎮 `bg/naganaki-shrine-newyear.webp` for the setting. **Fills:** `cg/holiday-new-year.webp`.
  - **Must match:** daytime on 1/1; twenty-odd people in coats coming up the shrine steps, half in rented yukata over sweaters; Solar at the offering box, eyes closed, hands together; coins in the air; old women selling amazake by the gate; Kiriko by the fortune stand.
- [ ] **Valentine's Day (2/14).** **Attach:** style, Solar, Yukari, Fuuka. **Fills:** `cg/holiday-valentines.webp`. No 2/14 scene is set at school (it's a Sunday), so this goes on Yukari's Valentine's day at the mall.
  - **Must match:** daytime; Paulownia Mall pink from the escalators down, paper hearts over the fountain, a line at the chocolate shop; Solar, Yukari and Fuuka in coats on the fountain edge swapping chocolates; Fuuka's lunchbox of partly burnt truffles; Yukari's paper bag from an expensive shop; no snow.
- [ ] **Side romances** (`FEMC-CG-PROMPTS.md` #5's settings don't match; use these). **Attach:** style, Solar, the partner. **Fills:** `cg/romance-<id>.webp`.
  - **Ann** (the mall fountain): a late-October evening, violet sky, the mall's evening lights, fountain spray; Ann on the rim in a red jacket and high pigtails; two crepes in paper cones; close together on the rim.
  - **Kasumi** (Naganaki Shrine, not a rooftop): late November after school, thin silver light through bare trees; Kasumi on the step below Solar's, Solar leaning down to her; track jacket, hair low in a plain black band.
  - **Judy** (the Port Island junkyard, no scooter, no neon): evening, thin snow on rusted cars, snow falling through a yellow work light; a door-on-oil-drums workbench; Judy holding two small chips; a cat in a knitted sweater on a dead sedan.
  - **Rio** (the tennis courts at night, not dusk): around 6pm, one court light left on over the net in the blue dark, breath clouds; Rio's hand holding the front of Solar's coat; an old racket in a faded blue cover; a ball cart.
  - **Saori** (the school library): early December, thin blue light coming sideways between the shelves, frost at the window edges; Saori standing between the stacks, face pink, her hand catching the front of Solar's blazer.
- [ ] **Mercy and Aphrodite doing Solar's hair** (#7's setting doesn't match; use this). **Attach:** style, Solar, Mercy, Aphrodite. **Fills:** `cg/link-mercy-aphrodite-hair.webp`.
  - **Must match:** an early-September afternoon in Solar's room; Solar on her desk chair in the middle of the room, a towel round her shoulders, hair loose and very long down her back; Mercy behind her in white with scissors and a comb; Aphrodite in gold kneeling in front with a makeup palette (or standing behind with a hand mirror); no curling iron, no ribbon, no string lights.
- [ ] **The dorm dinner** (#9's setting doesn't match; use this). **Attach:** style, Solar, a few cast portraits. **Fills:** `cg/story-dorm-dinner.webp`.
  - **Must match:** a hot July night in the dining room (not the lounge), an air conditioner groaning; hot pot on a portable burner on the long table, extra white bowls at the end; guests round the table, among them Aphrodite at the head, Mercy rewrapping Junpei's wrist, Kiriko handing out fortune slips, Haru at the stove, Kuromi on the couch, Sebastian against the wall with a soda; Mitsuru standing at the edge with an untouched cup of tea; summer clothes.
- [ ] **The train through Tartarus** (#23, Gemini). **Attach:** 🎮 `cg/story-moonlight-train.webp` (style). **Fills:** `cg/story-train-tartarus.webp`.
  - Use this, not #23:
    ```
    Inside a strange tower, a long fortieth-floor corridor with a checkerboard floor. Black iron rails rise up out of the floor and spiral away overhead. An old black-green steam train passes slowly along them, an arm's length from the watchers, its paper-lantern windows glowing gold and full of sleeping passengers: a woman in a blue coat holding a long black case, a man in armor under a cloak, a young girl with a schoolbag. Solar at the front, her hand reaching toward the glass. Behind her, watching: Akihiko, Mitsuru, Yukari, Junpei, Fuuka, Aigis, Jihoon, Minji filming on a camera, Jungwon, and Haechan empty-handed. Green Dark Hour light and lantern gold, eerie and hushed.
    ```
  - **Must match:** a checkerboard corridor (not a broken landing); black iron rails (not light); the train passing slowly, close enough to touch; sleepers in the windows as above; the group standing in the corridor; Hanni, Hyein and Yunjin not there.

---

## 3. Places (Gemini) ⭐
**Attach:** nothing needed, unless an item says so.
```
Persona 3 Reload style background art, 16:9, high resolution, no people, no readable text: [PLACE].
```

### 3A. Places that borrow another place's art
Each works now on a stand-in (in brackets); the new one replaces it.
- [ ] *(Optional)* **Kirijo Guesthouse lobby by day:** the same lobby as `bg/kirijo-guesthouse-night.webp`, in afternoon light. (The night one is in; after-school and daytime guesthouse scenes still use a generic hotel lobby.) **Attach:** 🎮 `bg/kirijo-guesthouse-night.webp`. **Fills:** `kirijo-guesthouse`.
- [ ] *(Optional)* **Yeobo's Cafe and the fish market, today:** the same two places as their washed-out memory images, but clear and present-day. (The jobs use the memory images now, which may be on purpose.) **Attach:** 🎮 `bg/flashback-yeobos-cafe.webp` / `bg/flashback-fish-market.webp`. **Fills:** `yeobos-cafe`, `port-island-fish-market`.
- [ ] *(Optional)* small ones, one or two scenes each: a supermarket aisle (`iwatodai-supermarket`), a school stairwell (`gekkoukan-stairwell`), a canal path behind the mall (`paulownia-canal`), a small flat near the station (`kirijo-flat`).

### 3B. Night versions
All done.

### 3C. Seasons
All done (`places.js seasons`: the shrine, the front gate, the riverside, the school roof and the dorm's front).

### 3D. Dark Hour arenas
All done (the two July full moons, batch 36).

### 3E. Events
All done (`places.js today`: the festival hallway on 10/30–31, the Strip on rainy days).

---

## 4. Characters (ChatGPT)
### 4A. Evoker shots ⭐
Only Solar has one. Everyone else's summon shows their face beside the Evoker prop (batch 37).
- **Attach:** 🎮 `battle/art/summon/solar-evoker.webp` (style) and the character's portrait.
```
Close-up of [NAME] raising an ornate silver Evoker to their temple, [EXPRESSION], hair lifting in a rush of blue wind, glowing glass shards around them, a huge full moon behind. Persona 3 Reload style, 16:9.
```
- [ ] Shinjiro, reluctant (your redo)
- [ ] Akihiko, a fierce grin
- [ ] Yukari, eyes squeezed shut
- [ ] Junpei, cocky
- [ ] Mitsuru, icy calm
- [ ] Aigis, expressionless
- [ ] *(Optional)* Haechan, Jungwon, Jihoon, Minji
- **Fills:** `battle/art/summon/<name>-evoker.webp`.
- *(Optional)* **Evoker sheets** like Solar's (raise, shot, lower), so the summon also plays on the battlefield. **Attach:** 🎨 `Added to Game/solar-evoker-animation.png` (style) and the character's portrait.
  ```
  A 3-panel horizontal sheet on a plain white background showing the same character from the attached portrait in three moments of summoning their Persona: (1) raising an ornate silver Evoker to their temple, (2) the shot, hair and coat lifting in blue wind and glass shards, (3) lowering it. Same face, outfit, art style and scale in every panel, matching the attached Evoker sheet's style, nothing overlapping. Character only.
  ```
  (It's the strike-sheet prompt from 5D with the three summon moments filled in.) **Fills:** `battle/art/summon/<name>-evoke-0..2.webp`.

### 4B. Full bodies for the Compendium
- **Attach:** their portrait, plus 🎨 `Added to Game/akihiko-fullbody.png` (S.E.E.S.) or `Added to Game/CherryFullBody.png` (everyone else) for style.
```
Full-body character art of [NAME], standing in a relaxed signature pose, outfit matching the attached portrait, in the same style as the attached full body, transparent background.
```
- [ ] ⭐ Junpei, Fuuka and Elizabeth (the main cast without one)
- [ ] Sunoo, Junkyu, Wren
- [ ] Danielle, Jaemin, Chenle
- [ ] My Melody
- [ ] *(Optional)* the guests who only drop by: Ryuji, Futaba, Makoto, Maruki
- **Fills:** `profile/sees/<id>.webp` or `profile/searchers/<id>.webp` (others: `profile/<id>.webp`).

### 4C. Missing expressions
Scenes only use the faces that exist, so these add range.
- **Attach:** that character's neutral portrait from 🎨 `Character Portraits/<Name>/`.
```
Edit this portrait. Keep the framing, crop, size, art style, hair and outfit exactly the same; change only the expression to [EXPRESSION]. Transparent background.
```
- [ ] ⭐ Mitsuru: happy, serious (she has only neutral, sad and surprised)
- [ ] Shinjiro: serious, blushing
- [ ] Yukari: happy
- [ ] Fuuka: serious
- [ ] Mark: happy
- [ ] Elizabeth: surprised
- **Fills:** `portraits/<id>/<expression>.webp`.

### 4D. *(Optional)* Faces for the regulars
**Done:** every regular with 7+ lines and the three teachers now have a face (batches 37, 39 and 40), so this section has nothing left to make.
- *Optional extra:* a second **happy** face for the busiest regulars (Ōta, Mr. Maeda, Mrs. Kubo, Tsuji, Chiba, the Clerk, Mr. Tanabe): use the 4C edit prompt with their neutral and `[EXPRESSION]` = a warm, open smile. **Fills:** `portraits/<id>/happy.webp`.
- *To redo a face:* the per-person prompts are in git history (this file before batch 40). Attach 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` for style.

*Not listed:* Mrs. Kanda (the guesthouse cook), Hiyori (fan club) and the other teachers have no spoken lines yet, so a face wouldn't show anywhere. Kid, girl, boy and others under 7 lines are left out too.

*Note for Claude (wiring):*
- **CamelCase ids work (fixed 2026-10-23):** `femc-portraits.py` writes lowercase folders (`Character Portraits/chKagami/` → `portraits/chkagami/`, the key in `portraits/index.js`), and `core.js faceId` lowercases every speaker id before looking it up, so `hgMaster`, `chKagami`, `kbOno` and the rest find their faces. The source folder can be named either way.
- **Shared ids split (2026-10-23):** each regular's id is one person now. The minor ones got their own ids and `cast` names: `ybTsuji` (Mrs. Tsuji at Yeobo's), `lbUeda` (Ueda in the library committee), `tuDaichi` (Kenta's friend at tutoring), `wdClerk` (the Wild-Duck clerk in Mitsuru's rank 4). The prologue's convenience-store clerk is the same man as the konbini job's (the job opens on the same "...Welcome?"), so he stays `clerk` on purpose. The minor ones have under 7 lines, so they aren't listed above; a face for any of them goes in `portraits/<id lowercased>/`.
- **Teachers (wired 2026-10-23):** `ui.js classPeriod` shows `G.portrait(<teacher key>)` beside a class question (and small beside the quiet-class line) once `portraits/<key>/` exists; until then the name alone, as before.
- After cutting, check `portraits/scale.js` and see each face in a scene (`femc-check-scenes.py`).

---

## 5. Battle
### 5A. Bond cut-ins
**Attach:**
1. 🎮 `cg/prologue-akihiko-finds-solar.webp` (style)
2. 🎨 `Character Portraits/Solar/Solar-smiling.png`
3. 🎨 the partner's portrait
```
Create a NEW 16:9 combo-attack cut-in matching the FIRST attached image's art style: Persona 3 Reload official art, cel shading, a bold diagonal layout, speed lines. Solar (second image: very long straight black hair, black Gekkoukan uniform, red bow, red S.E.E.S. armband) and [NAME] (third image) attack together side by side, mid-strike: her naginata and their [WEAPON], with [EFFECT], their two colors swirling together. Both confident. Keep both faces and outfits exactly. No text.
```
- [ ] ⭐ **Shinjiro:** axe; dark red force; a single gruff nod, the weapons crossing
- [ ] *(Optional)* Yukari (bow; pink wind) · Junpei (greatsword; fire) · Mitsuru (rapier; ice) · Aigis (arm guns; golden tracer fire) · Koromaru (knife; fire)
- [ ] *(Optional)* own stills for the romance versions that reuse the regular one: Akihiko (rank 9 and 15), Jihoon (9), Minji (9), Shinjiro (9). Same prompt, "close and protective" instead of "side by side".
- **Fills:** `battle/art/theurgy/bond-<name>.webp` (romance: `bond-<name>-love.webp`).

### 5B. Bosses
- [ ] **A memory-floor boss that borrows a regular Shadow's art** (`memory_car`, now Rampage Drive). Claude will describe it when you're ready (it's a story fight). **Attach:** 🎮 `battle/art/shadows/memory-party.webp` (style). **Fills:** `battle/art/shadows/memory-sleeper-car.webp`.
- [ ] *(Optional)* pose sheets for the Reaper and the Hanged Man's effigies (the effigies borrow Corrupt Tower). **Attach:** 🎮 `battle/art/shadows/reaper.webp` / `corrupt-tower.webp`. **Fills:** `reaper-pose-0..5.webp`; the effigies first need their own art (`hanging-effigy.webp`).
- **Pose sheet prompt.** **Attach:** that boss's art from 🎮 `battle/art/shadows/`.
  ```
  Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME monster as the attached image in all six cells, same design, colors, size and lighting, nothing overlapping. Cell 1: idle, hovering menacingly. Cell 2: winding up, gathering power. Cell 3: lunging forward to attack. Cell 4: casting a spell, surrounded by [ELEMENT] effects. Cell 5: recoiling from a hit, flinching. Cell 6: knocked down, collapsing. Persona 3 Reload official art style. No text.
  ```

### 5C. Wren's Shadow, phases 1 and 3 ⭐
Her portraits stand in for both now. The prompts are `FEMC-CG-PROMPTS.md` #25 and #26.
- [ ] Phase 1. **Attach:** Wren's portraits. **Fills:** `battle/art/shadows/wren-shadow-phase1.webp`.
- [ ] Phase 3. **Attach:** Wren's and Solar's portraits. **Fills:** `battle/art/shadows/wren-shadow-phase3.webp`.

### 5D. Solar's strike sheets per form *(optional)*
Haenim, Sunna, Mazu and Unveiled share one sheet; Nike has her own.
- **Attach:** that form's cut-in from 🎨 `Added to Game/` (`theurgy-solar-haenim.png`, `-sunna`, `-harbor`, `-haenimunveiled`).
```
A 3-panel horizontal sheet on a plain white background showing the same character from the attached image in three moments of their ultimate attack: (1) wind-up, (2) the strike or release, (3) the follow-through. Same face, outfit, art style and scale in every panel, nothing overlapping. Character only.
```
- [ ] Haenim · Sunna · Mazu · Unveiled. **Fills:** `solar-<form>-strikesheet.png` → `battle/art/theurgy/solar-<form>-strike-0..2.webp`.

### 5E. Battle objects *(optional)*
- [ ] **Bigger renders for the 33 small Shadows** (upscaled from tiny sources, so they look soft). The list is every `small: true` in 🎮 `battle/art/shadows/index.js`. **Attach:** that Shadow's current art. **Fills:** the same file.
  ```
  Redraw the attached Persona 3 Shadow at high resolution: same design, pose, colors and mask, clean sharp lines, transparent background.
  ```
- Skill effect sprites moved to their own list: 5F, just below.

### 5F. Skill effects
**Kat's sheets are in the game (2026-10-23): 30 of the 31, every effect but Dark.** Effects without a sheet are still drawn in code (`fx.js` and `battle.css`). Dark is the one left. The format and template below are for it and for any redo (the appendix note "Skill-effect sheets (5F)" says how to add one).

**The sheet format (the same for every effect):**
- **A 3 × 2 grid of six square frames**, read left to right, top to bottom. Ask ChatGPT for a **landscape 3:2 image (1536 × 1024)**, which splits into six 512 × 512 squares. A 6-frame strip would be 6:1, and ChatGPT can't make that shape.
- **Six stages:** 1 spark, 2 build-up, 3 impact (the peak), 4 spread, 5 break-up, 6 last wisps. The game plays them in about 0.4 s and lands the damage number on frame 3.
- **On solid black, not transparent.** `fx.js` already draws its effects with additive blending (`lighter`), so black adds nothing. A black sheet drops straight in with no cutting-out, and soft glows keep their fade. ChatGPT's "transparent" glows often come back with a pale halo or a fake checkerboard, and the white-keying our cutting tools use would eat white-hot cores (light, elec, crits). One exception: the All-Out cloud is solid white with black ink, so it needs a real transparent background (prompt below).
- **What black means for the art:** additive light can only brighten. Dark, poison and fear are drawn as glowing violet edges around empty black, and the game keeps its own dim shade under them.
- **No text, no characters, no Shadow, no ground.** Each frame is centred at the same spot and size, with a wide empty margin so nothing crosses into the next square.
- **Match the set:** attach Pierce (and a neighbour, e.g. Mudo for Dark) to every new sheet. Name the file after its **Fills** line (e.g. `dark.png`, or `.jpeg`) and put it in New Adds.

**Template** (each effect below is this one with its blanks filled, ready to paste):
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: [SPARK]. Frame 2: [BUILD-UP]. Frame 3, the peak: [IMPACT]. Frame 4: [SPREAD]. Frame 5: [BREAK-UP]. Frame 6: [LAST WISPS]. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, [COLOURS], high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```
**Attach for every sheet:** 1. a P3R screenshot of that skill landing, if you have one (🎨 `Inspo/` or your own captures); 2. 🎨 `Added to Game/pierce.png` (to match the set). For the first sheet only, attach 🎮 `battle/art/theurgy/akihiko-strike-1.webp` for P3R's line and colour.

#### Still to make
- [ ] **Dark.** Uses: the Fear ailment's hit, Mudo and Die for Me until they have their own sheet, and Dark Theurgy and bond hits. Now: ink tendrils curling in on a ring. **Fills:** `battle/art/fx/dark.webp`.
  ```
  A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: a thin violet ring glowing faintly around an empty centre. Frame 2: curling tendrils of glowing violet energy rising from the ring and bending inward, like ink drawn into a drain. Frame 3, the peak: a vortex of sharp curved tendrils snapping shut over the centre, their edges glowing bright violet and magenta, the inside left empty black, a crisp sigil-like ring of thorny points around it. Frame 4: the tendrils twist and tighten, small magenta sparks shedding off them. Frame 5: the tendrils unravel into thin wisps sinking downward. Frame 6: a few faint purple wisps and a dim ring. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, glowing violet (#c07bff) and deep purple (#7a2bd0) edges with magenta (#ff5ab0) highlights; darkness is shown only as empty black framed by glowing edges, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
  ```

## 6. Cards, items and icons
### 6A. Tarot cards
**Attach:** 🎮 two existing cards, e.g. `tarot/star.webp` and `tarot/moon.webp`.
```
A tarot card in exactly the same style, border and layout as the attached cards: [ARCANA], numbered [NUMBER], depicting [IMAGE].
```
- [ ] *(Optional)* alternates for shared cards: Lovers, Strength, Empress, Priestess, Justice, Magician, Moon, Emperor, Sun, Chariot, Fool. **Fills:** `tarot/<arcana>-2.webp`.

### 6B. Item and gear art *(optional)*
All of these are small code-drawn icons now. Gemini, as sheets of six (the weapon-sheet way).
**Attach:** 🎨 `Added to Game/SolarWeapons.png` (style).
```
A 2×3 grid of six [KIND] on a white background, each in its own card, in the same rendering style as the attached sheet: [LIST]. Game item art, no text.
```
- [ ] Armor (13): school blazers, vests and coats by tier
- [ ] Accessories (26): rings, charms, barrettes, earrings, bangles, belts
- [ ] Items (19) and materials (10): medicine, gems, beads, Soma, Tarot Dust, Velvet Thread and the rest
- [ ] The plain weapons each type still has (8–9 per type): naginata, gloves, bow, greatsword, rapier, gun, spear, knife, axe
- [ ] Bookworms' 10 books: covers, one per card
- [ ] The five birthday keepsakes
- **Fills:** `battle/art/gear/<id>.webp` and `game/art/items/<id>.webp` (Claude has the id list).

### 6C. Icons *(optional)*
**Attach:** nothing needed.
- [ ] **Menu tabs:** Party, Personas, Skills, Cards, Equipment, Items, Collection, Status, Links, Bonds, Journal, Album, Theater. Now text only.
```
A set of [N] flat game UI icons in Persona 3 Reload's style (bold shapes, heavy ink outline, one accent color, a white rim), each on its own square, transparent background, no text: [LIST].
```
- **Fills:** `game/art/icons/<name>.webp`.

---

## 7. Screens and keepsakes *(optional)*
- [ ] **Capsule keychains** (30 cast members). The 12 fighters' charms show their chibi victory frame now (`gacha.js KEY_CHIBI`); the other 18 (searchers and the Persona cast) are a CSS charm with their face. Acrylic chibi charms would look real for them; a proper charm for the 12 can replace their chibi frame too. **Attach:** 🎮 `battle/art/chibi/solar-0.webp` (style) and the portrait. **Fills:** `game/art/keys/<id>.webp`.
  ```
  A small acrylic keychain charm of [NAME] as a cute chibi, same chibi style as the attached image, clear acrylic edge, a metal ring at the top, transparent background.
  ```
- [ ] **Phone cases** (6, CSS now): Sakura, Featherman R, Paw Print, Moonlight, Velvet, Golden Sun. **Attach:** nothing needed. **Fills:** `game/art/cases/<id>.webp`.
  ```
  A flip-phone case design, front view, flat game asset, transparent background, no text: [DESIGN].
  ```
- [ ] **Group-chat pictures** for the phone (they show a letter now): S.E.E.S., the sisters, the search party, the hate club. **Attach:** nothing needed; use the icon prompt in 6C with "a round group-chat avatar". **Fills:** `game/art/phone/<group>.webp`.
- [ ] **The album's locked tile** (a blank tile now): one card back, a silver frame with a small crescent moon. **Attach:** 🎮 `memories/runners-rooftop.webp` (to match the cards). **Fills:** `game/art/album-locked.webp`.
- [ ] **Loading and Dark Hour transition art:** one or two wide stills (Tartarus from below at midnight; the dorm clock at 12:00). Now a plain fade. **Attach:** nothing needed; use the places prompt in section 3. **Fills:** `title/loading-<n>.webp`.
- [ ] **Two more memory cards:** #25 barley tea and #30 ballot box (`FEMC-GEMINI-PROMPTS.md` section D). They need new memory ids, so Claude adds a place for them when they arrive. **Attach:** nothing needed. **Fills:** `memories/<id>.webp`.

Checked and fine as they are: the title screen's key art, the Velvet Room, the Go Out cards (they use the place backgrounds above), Tartarus's seven blocks, every Persona, all weapon sheets, finish cards, chibi frames and memory cards in the game.

---

## Still to decide
- **Stamps:** the 29 Persona 3: Solstice stamps are line drawings like every stamp on the hub. Illustrated ones would only fit if the whole passport changed. Keep as is?
- (The name, **Persona 3: Solstice**, and its logo are done: `assets/femc/title/solstice-logo.svg`.)

---

## Appendix (for Claude): how new art goes in
### Wiring-only fixes (no art needed)
None left: the 2026-10-22 audit's list was all wired in.

### CGs
CG prompts must carry the scene's visual details; check the text before writing a prompt. (Time and light, who's there and who isn't, clothes, poses and distance, setting, season and weather, props, as plain visual direction with no plot.)

Convert to WebP in `assets/femc/cg/<slug>.webp` (composition untouched, at most 1920 wide), then show it with a `{ cg: '<slug>' }` scene step and clear it with `{ cg: null }`. Add the face's crop point to `places.js cgFocus` for tall phone windows. The album and Theater find CGs in the scene data (`menu.js albumData`), so nothing else is needed. Endings live in `story-endings.js` (one event, branching by route); Christmas Eve scenes are each link's `christmas`; rank 10 / 15 are the link's ranks; graduation is `a6-graduation` in `living-march.js`; Yakushima is `yakushima.js` (the album doesn't walk its trip-plan scenes, so a CG there needs `story-act3.js a3-yakushima` or a `menu.js sceneSources` kind). Record the source in `tools/femc-new-adds.json` and move it to `Added to Game/`.

### Characters
- **Portraits:** cut with `tools/femc-portraits.py` (sheets: `femc-sheet.py` / `femc-lift.swift`); it rewrites `portraits/index.js`. Check `portraits/scale.js` and every face in a scene.
  - *Gemini landscape busts (batch 40, 2816×1536 on white or a baked-in checkerboard):* lift with `femc-lift.swift`, then flood away the pale fringe and the art's soft outer glow from the outside (≤14 px, light and low-saturation), put back small holes Vision punched in white collars, and crop a 0.89-wide box from the top of the hair to 1.05 face-heights below the chin (Vision's face box works on these, not on the flatter ChatGPT art). Size in `scale.js` by eye-to-chin against Fuuka, Junpei and the batch 37 regulars.
- **Full bodies:** `tools/femc-profiles.py` writes `profile/<id>.webp` and `profile/index.js`; S.E.E.S. and searcher art goes in `profile/sees/` or `profile/searchers/` with `img` and `profile: true` on the `compendium.js` entry. Fuuka, Sunoo, Junkyu, Wren, Danielle, Jaemin and Chenle have no entry yet: add one (`unlock: 'met:<id>'`, `secret: true`, a note from their introduction, no new prose). Bump `FEMC_ASSET_VERSION` and run `python3 tests/femc_compendium.py --ids <ids>`.
- **Evoker shots:** `battle.js evoker()` shows a face plus Kat's Evoker prop (`EVOKER_ART`, `art/summon/evoker-prop.webp` from `tools/femc-evoker-prop.py`; the code-drawn `EVOKER_SVG` is its fallback) for everyone but Solar. Give a member `evoker: { shot: 'assets/femc/battle/art/summon/<mid>-evoker.webp' }` in `data.js` and render it in the `.bt-evk-shot` slot like Solar's (small change). Evoker sheets already work: `('evoker', '<file>', '<mid>-evoke')` in `tools/femc-theurgy.py BUILD`, then `evoker.frames`.

### Battle art
- **New Shadow or boss art:** `tools/femc-shadows.py` cuts it into `battle/art/shadows/<slug>.webp` and `index.js`; point the enemy's `img` at the slug (the memory boss is `memory_car`). A boss that comes as its own picture plus a labelled 2×2 sheet (the April boss, batch 37) goes in `QUADS` in `tools/femc-shadow-poses.py`, which writes both the static art and the frames. Wren's phases: swap `wren_call` / `wren_last`'s `pic` for an `img`. Then pose sheets as below.
- **Gear and item art:** weapons already read a gear's `art` (equip lists, shops, Shuffle Time); armor and accessories need the same field checked in each list. Items and materials are `icons.js` SVGs: add an `img` hook in `FemcIcons.of` before wiring art. Status icons and map rooms are art since batch 36 (`tools/femc-icons.py` → `battle/art/icons/`, read by `battle.js stIco` / `ROOM_ART`).

### Cards, screens and keepsakes
- **Tarot:** Elizabeth's arcana key is `velvetroom` (see Tarot cards and places below).
- **Gacha:** keychains are `gacha.js keychain` / `keyFace`; phone cases are `.g-case-art[data-case]` in `gacha.css`. The phone wears a case via `ui.js openPhone`.
- **Phone groups:** `ui.js threadPic` reads a portrait; add a group picture map for `texts.js groups`.
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
**Built (2026-10-23).** The sheet player is in the game, and every effect keeps its code version as the fallback. 30 of Kat's 31 sheets are in (all but Dark). Her picks between two versions are in `tools/femc-fx.py SOURCES`, and the other versions are in `ALTERNATES` (in Added to Game, unused).

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
