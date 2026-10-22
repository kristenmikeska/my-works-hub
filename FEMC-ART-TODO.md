# Art to make (rebuilt 2026-10-22 from every old list and a check of the whole game)

**81 items:** 2 quick fixes · 14 CGs · 17 places · 19 character pieces · 12 battle · 11 cards and icons · 6 screens. 15 are ⭐, 47 are optional.

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
Create a NEW illustration that matches the art style of the FIRST attached image exactly: same line weight, flat cel shading with hard-edged shadows, same face style and proportions, moody lighting with one dominant color. Use the other attached images only for the characters' faces, hair and clothes. 16:9, high resolution, Persona 3 Reload event CG, cinematic composition. Solar: very long straight black hair, black Gekkoukan uniform, red bow, white earbuds around her neck, white knee socks, red S.E.E.S. armband.
```

### 2A. Big story beats
- [ ] ⭐ **The true ending** (`FEMC-CG-PROMPTS.md` #20)
  - **Attach:** style, Solar, Wren, 🎨 `Personas/Haenim-Unveiled.png`. **Fills:** `cg/ending-true.webp` (the only ending without a CG).
- [ ] ⭐ **Two late-story scenes at a station** (`FEMC-CG-PROMPTS.md` #18 and #19; section 3 of that file has spoilers, so copy just those two prompts)
  - **Attach:** style, Solar, Wren. **Fills:** `cg/story-wren-clock.webp`, `cg/story-wren-cap.webp`.
- [ ] ⭐ **Graduation (3/5), Gekkoukan's front gate**
  - **Attach:** style, Solar, Akihiko, Mitsuru, Yukari, Junpei. **Fills:** `cg/story-graduation.webp`.
  - After the style block:
    ```
    Graduation morning at a Japanese high school's front gate: a cold, bright March day, a few early blossoms, students in black uniforms holding diploma tubes. Solar stands in the middle of her friends from the dorm, mid-laugh, while someone off to the side takes their picture. Warm, bittersweet, proud.
    ```
- [ ] ⭐ **Yakushima (7/21–7/23)**
  - **Attach:** style, Solar, Akihiko, Yukari, Junpei, Mitsuru. **Fills:** `cg/trip-yakushima-beach.webp`.
  - After the style block:
    ```
    A summer beach on a green island: white sand, turquoise water, a big blue sky, a beach umbrella and a cooler. Solar and her dorm friends in summer clothes, one splashing another, someone asleep under the umbrella, a white dog running along the waterline. Bright, loud, carefree.
    ```

### 2B. Romance and link moments
One template; fill in the name, setting and light. Nothing in it is from the scene itself.
```
Solar and [NAME] at [SETTING], [LIGHT]. A quiet, close moment between just the two of them, both of them clearly at ease with each other. [MOOD].
```
- [ ] ⭐ **Rank 15** for the four links that have one. **Fills:** `cg/link-<id>-r15.webp`.
  - **Attach:** style, Solar, the partner.
  - Akihiko: the boxing club after school · Haechan: the dorm hallway · Jungwon: the student council room · Shinjiro: a quiet room in soft morning light
- [ ] ⭐ **Christmas Eve (12/24)** for each romance that has one, besides Akihiko's (done). It snows that night. **Fills:** `cg/xmas-<id>.webp`.
  - **Attach:** style, Solar, the partner. Use `[MOOD]` = "snow falling, warm lights, a little shy".
  - Haechan: the dorm laundry room at night · Jungwon: Iwatodai's shopping street in the evening · Jihoon: the mall's central atrium · Minji: the riverside in the evening · Shinjiro: a quiet room with snow at the window
  - *(Optional)* the side romances' Christmas Eves: Ann (the mall fountain), Kasumi (the shrine), Judy (Club Escapade), Rio (Port Island Station), Saori (the used bookstore)
- [ ] *(Optional)* **Rank 10 (MAX)**, one per link. **Fills:** `cg/link-<id>-r10.webp`. **Attach:** style, Solar, the partner.
  - S.E.E.S.: Yukari (the mall atrium) · Junpei (the dorm roof at night) · Mitsuru (the student council room) · Aigis (the dorm roof) · Fuuka (the dorm dining room) · Koromaru (the shrine)
  - Searchers: Jihoon (the dorm's front steps) · Minji (the dorm lounge) · Hanni (the dorm's 2F hallway) · Hyein (the dorm roof) · Yunjin (the harbor) · Mark (the station concourse) · Jaehyun (the dorm's front steps) · Cherry (the dorm's front steps at night) · Sunoo (Yeobo's Cafe) · Junkyu (the arcade) · Danielle (the station overpass) · Jaemin (karaoke) · Chenle (Game Panic)
  - Everyone else: Elizabeth (the Velvet door) · Kuromi (the dorm lounge) · My Melody (the dorm kitchen) · Mercy (the hospital roof) · Kiriko (the shrine) · Ann (the mall fountain) · Kasumi (the shrine) · Rio (the tennis courts) · Saori (the library) · Haru (the dorm kitchen) · Judy (the junkyard) · Sebastian (Game Panic) · Aphrodite (the mall atrium) · Widowmaker (Moonlight Bridge) · Rohan (the used bookstore) · Wren (the dorm roof)

### 2C. Holidays and group shots *(optional)*
- [ ] **New Year's at the shrine** (`FEMC-CG-PROMPTS.md` #24). **Attach:** style, Solar, 3–4 friends, and 🎮 `bg/naganaki-shrine-newyear.webp` for the setting. **Fills:** `cg/holiday-new-year.webp`.
- [ ] **The summer festival (8/16).** **Attach:** style, Solar, 3–4 friends, 🎮 `bg/naganaki-shrine-festival.webp`. **Fills:** `cg/holiday-summer-festival.webp`.
  ```
  A summer night festival at a hilltop shrine: paper lanterns, food stalls, goldfish scooping. Solar in a dark yukata with her friends in yukata around her, one holding a candy apple, fireworks just starting overhead. Warm lantern light, joyful.
  ```
- [ ] **Valentine's Day (2/14).** **Attach:** style, Solar. **Fills:** `cg/holiday-valentines.webp`.
  ```
  Solar in the school hallway on Valentine's Day, holding a small hand-wrapped box of chocolates behind her back, looking down the hall at someone just out of frame. Winter light through the windows, hopeful and nervous.
  ```
- [ ] **Side romances** (`FEMC-CG-PROMPTS.md` #5): Ann, Kasumi, Judy, Rio, Saori. **Attach:** style, Solar, the partner. **Fills:** `cg/romance-<id>.webp`.
- [ ] **Mercy and Aphrodite doing Solar's hair** (#7). **Attach:** style, Solar, Mercy, Aphrodite. **Fills:** `cg/link-mercy-aphrodite-hair.webp`.
- [ ] **The dorm dinner** (#9). **Attach:** style, Solar, a few cast portraits. **Fills:** `cg/story-dorm-dinner.webp`.
- [ ] **The train through Tartarus** (#23, Gemini). **Attach:** 🎮 `cg/story-moonlight-train.webp` (style). **Fills:** `cg/story-train-tartarus.webp`.

---

## 3. Places (Gemini) ⭐
**Attach:** nothing needed, unless an item says so.
```
Persona 3 Reload style background art, 16:9, high resolution, no people, no readable text: [PLACE].
```

### 3A. Places that borrow another place's art
Each works now on a stand-in (in brackets); the new one replaces it.
- [ ] ⭐ **The dorm's front, day and night:** a three-story red-brick dormitory with a small arched entrance and stone steps, a street lamp, a quiet residential street; then the same at night, warm windows and the lamp on. (The 55-scene image now is a watermarked game screenshot with people in it.) **Attach:** 🎮 `bg/iwotodaidorm-outside.webp` for the layout. **Fills:** `iwatodaidorm-front`, `iwatodaidorm-front-night`.
- [ ] *(Optional)* **Kirijo Guesthouse lobby by day:** the same lobby as `bg/kirijo-guesthouse-night.webp`, in afternoon light. (The night one is in; after-school and daytime guesthouse scenes still use a generic hotel lobby.) **Attach:** 🎮 `bg/kirijo-guesthouse-night.webp`. **Fills:** `kirijo-guesthouse`.
- [ ] *(Optional)* **Yeobo's Cafe and the fish market, today:** the same two places as their washed-out memory images, but clear and present-day. (The jobs use the memory images now, which may be on purpose.) **Attach:** 🎮 `bg/flashback-yeobos-cafe.webp` / `bg/flashback-fish-market.webp`. **Fills:** `yeobos-cafe`, `port-island-fish-market`.
- [ ] *(Optional)* small ones, one or two scenes each: a supermarket aisle (`iwatodai-supermarket`), a school stairwell (`gekkoukan-stairwell`), a canal path behind the mall (`paulownia-canal`), a small flat near the station (`kirijo-flat`).

### 3B. Night versions
Evening scenes dim the day image for these. **Attach:** the day image from 🎮 `bg/`.
```
Edit this image. Keep the place, layout and camera exactly the same, but change it to night: [DETAILS]. No people, no readable text.
```
- [ ] *(Optional)* Paulownia Mall: shop signs and string lights on (`paulownia-mall` → `paulownia-mall-night`)
- [ ] *(Optional)* Iwatodai Strip: lanterns and shop lights (`location-2` → `iwatodai-strip-night`)
- [ ] *(Optional)* Port Island Station: the plaza lit up (`location-1` → `portisland-station-night`)
- [ ] *(Optional)* the bathhouse's street (`outside-daytime-neighborhood` → `bathhouse-night`; now a generic street)
- [ ] *(Optional)* Kirijo Guesthouse's front (`elegant-buildingentrance` → `kirijo-guesthouse-front-night`; now a generic street)

### 3C. Seasons
A day image can change by season now (`places.js seasons`), so these show wherever the place is used. **Attach:** the current image from 🎮 `bg/`.
```
Edit this image. Keep the place, layout and camera exactly the same, but change the season to [SEASON]: [DETAILS]. No people, no readable text.
```
- [ ] ⭐ **Gekkoukan's front gate** in summer, autumn and winter. It has cherry blossoms all year now (15 scenes, graduation included). (`gekkoukanhigh` → `gekkoukanhigh-summer`, `-autumn`, `-winter`)
- [ ] *(Optional)* the riverside in autumn and winter (`park-2`, 45 scenes → `park-2-autumn`, `-winter`)
- [ ] *(Optional)* the dorm's front in winter (after its redo in 3A → `iwatodaidorm-front-winter`)
- [ ] *(Optional)* the school roof in winter (`rooftop-day` → `rooftop-day-winter`)

### 3D. Dark Hour arenas
Two July full-moon fights use ordinary daytime art. **Attach:** the image named.
```
Edit this image. Keep the place, layout and camera exactly the same, but change it to the Dark Hour from Persona 3: the whole scene tinted a sickly green-yellow, a huge yellow-green full moon, the lights dead, deep hard shadows, upright black coffins where people would be, dark red stains on the ground. No people.
```
- [ ] ⭐ the hotel street (🎮 `bg/hotel-outside.webp` → `darkhour-hotel-outside`)
- [ ] ⭐ the hotel lobby (🎮 `bg/hotel-lobby.webp` → `darkhour-hotel-lobby`)

### 3E. Events *(optional)*
- [ ] **The culture festival (10/30–31):** a school hallway decorated for a festival, class stalls, paper banners, balloons. **Fills:** `gekkoukan-culture-festival`.
- [ ] **A rainy evening street:** Iwatodai's shopping street in the rain, puddles reflecting the shop lights. **Fills:** `iwatodai-strip-rain`.

---

## 4. Characters (ChatGPT)
### 4A. Evoker shots ⭐
Only Solar has one. Everyone else's summon shows their face beside a code-drawn gun.
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
- *(Optional)* **Evoker sheets** like Solar's (raise, shot, lower), so the summon also plays on the battlefield. **Attach:** 🎨 `Added to Game/solar-evoker-animation.png` and the portrait. Use the strike-sheet prompt in 4D with "(1) raising an ornate silver Evoker to their temple, (2) the shot, hair and coat lifting in blue wind and glass shards, (3) lowering it". **Fills:** `battle/art/summon/<name>-evoke-0..2.webp`.

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
The most-heard people without a portrait (28 to 67 lines each, shown as a name only): Kenta, Mrs. Okada, Tsuji, Mr. Maeda, Ōta, Mitsuko, Chiba, Mrs. Kubo, Bunkichi, Mr. Tanabe.
- **Attach:** one finished portrait for style, e.g. 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png`.
```
A Persona 3 Reload style character portrait in exactly the same framing, style and size as the attached one: [WHO THEY ARE], neutral expression, transparent background.
```
- [ ] One neutral each; Claude can tell you who each one is. **Fills:** `portraits/<id>/neutral.webp`.

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
- [ ] ⭐ **The April full-moon boss** has no art of its own: it borrows a regular Shadow's (Magical Magus) and doesn't move. Make its art, then its pose sheet.
  - Art (Gemini). **Attach:** 🎮 `battle/art/shadows/priestess-shadow.webp` (style).
    ```
    Persona 3 Reload style boss Shadow design, full body, transparent background, in the style of the attached boss: the Arcana Magician, a tall thin black-bodied figure in a ragged magician's coat, the blue Persona 3 Shadow mask, long clawed hands, a ring of floating cards and blades around it.
    ```
  - **Fills:** `battle/art/shadows/arcana-magician.webp`, then `arcana-magician-pose-0..5.webp`.
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
- [ ] **The Evoker itself** (Gemini). The gun in every summon but Solar's is a code drawing. **Attach:** 🎮 `battle/art/summon/solar-evoker.webp` (to match the gun). **Fills:** `battle/art/summon/evoker-prop.webp`.
  ```
  A single ornate silver Evoker pistol from Persona 3, side view, pointing right, engraved silver barrel, black grip, a thin red stripe, no trigger guard clutter. Clean game-asset render, transparent background, no hands.
  ```
- [ ] **Bigger renders for the 33 small Shadows** (upscaled from tiny sources, so they look soft). The list is every `small: true` in 🎮 `battle/art/shadows/index.js`. **Attach:** that Shadow's current art. **Fills:** the same file.
  ```
  Redraw the attached Persona 3 Shadow at high resolution: same design, pose, colors and mask, clean sharp lines, transparent background.
  ```
- [ ] **Skill effect sprites.** **Attach:** nothing needed. Every spell, crit, buff, Theurgy burst and the All-Out finish is drawn in code now (and looks fine). A sprite sheet per element (fire, ice, elec, wind, light, dark, almighty) plus a crit flash and buff arrows would be the P3R look, but the game needs a sprite hook first. See "Still to decide".

---

## 6. Cards, items and icons
### 6A. Tarot cards
**Attach:** 🎮 two existing cards, e.g. `tarot/star.webp` and `tarot/moon.webp`.
```
A tarot card in exactly the same style, border and layout as the attached cards: [ARCANA], numbered [NUMBER], depicting [IMAGE].
```
- [ ] ⭐ **The Velvet Room** (Elizabeth's arcana): it has no card, so her Bonds page and rank-up card show none. Unnumbered; a blue door standing open on a starry void, a key in the lock. **Fills:** `tarot/velvetroom.webp`.
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
- [ ] **Status icons:** the eight ailments (charm, fear, freeze, shock, poison, distress, bind, disorient) and up/down arrows for attack, defense and agility. Now colored text tags.
- [ ] **Tartarus map rooms:** fight, chest, locked chest, clock, access point, stairs, event, the Reaper. Now code glyphs.
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
- **Skill effect sprites** (5E): worth building a sprite hook for, or keep the code effects?
- **Stamps:** the 29 Persona 3: Solstice stamps are line drawings like every stamp on the hub. Illustrated ones would only fit if the whole passport changed. Keep as is?
- (The name, **Persona 3: Solstice**, and its logo are done: `assets/femc/title/solstice-logo.svg`.)

---

## Appendix (for Claude): how new art goes in
### Wiring-only fixes (no art needed)
None left: the 2026-10-22 audit's list was all wired in.

### CGs
Convert to WebP in `assets/femc/cg/<slug>.webp` (composition untouched, at most 1920 wide), then show it with a `{ cg: '<slug>' }` scene step and clear it with `{ cg: null }`. Add the face's crop point to `places.js cgFocus` for tall phone windows. The album and Theater find CGs in the scene data (`menu.js albumData`), so nothing else is needed. Endings live in `story-endings.js` (one event, branching by route); Christmas Eve scenes are each link's `christmas`; rank 10 / 15 are the link's ranks; graduation is `a6-graduation` in `living-march.js`; Yakushima is `yakushima.js`. Record the source in `tools/femc-new-adds.json` and move it to `Added to Game/`.

### Characters
- **Portraits:** cut with `tools/femc-portraits.py` (sheets: `femc-sheet.py` / `femc-lift.swift`); it rewrites `portraits/index.js`. Check `portraits/scale.js` and every face in a scene.
- **Full bodies:** `tools/femc-profiles.py` writes `profile/<id>.webp` and `profile/index.js`; S.E.E.S. and searcher art goes in `profile/sees/` or `profile/searchers/` with `img` and `profile: true` on the `compendium.js` entry. Fuuka, Sunoo, Junkyu, Wren, Danielle, Jaemin and Chenle have no entry yet: add one (`unlock: 'met:<id>'`, `secret: true`, a note from their introduction, no new prose). Bump `FEMC_ASSET_VERSION` and run `python3 tests/femc_compendium.py --ids <ids>`.
- **Evoker shots:** `battle.js evoker()` shows a face plus the code-drawn `EVOKER_SVG` for everyone but Solar. Give a member `evoker: { shot: 'assets/femc/battle/art/summon/<mid>-evoker.webp' }` in `data.js` and render it in the `.bt-evk-shot` slot like Solar's (small change). Evoker sheets already work: `('evoker', '<file>', '<mid>-evoke')` in `tools/femc-theurgy.py BUILD`, then `evoker.frames`. The Evoker prop replaces `EVOKER_SVG`.

### Battle art
- **New Shadow or boss art:** `tools/femc-shadows.py` cuts it into `battle/art/shadows/<slug>.webp` and `index.js`; point the enemy's `img` at the slug (the April boss is `magician`, the memory boss `memory_car`). Wren's phases: swap `wren_call` / `wren_last`'s `pic` for an `img`. Then pose sheets as below.
- **Gear and item art:** weapons already read a gear's `art` (equip lists, shops, Shuffle Time); armor and accessories need the same field checked in each list. Items, materials and status icons are `icons.js` SVGs: add an `img` hook in `FemcIcons.of` before wiring art.

### Cards, screens and keepsakes
- **Tarot:** Elizabeth's arcana key is `velvetroom` (see Tarot cards and places below).
- **Gacha:** keychains are `gacha.js keychain` / `keyFace`; phone cases are `.g-case-art[data-case]` in `gacha.css`. The phone wears a case via `ui.js openPhone`.
- **Phone groups:** `ui.js threadPic` reads a portrait; add a group picture map for `texts.js groups`.
- **Album locked tile:** `menu.js` album (locked tiles load no art now).
- **Memory cards:** add the id to `battle/data.js memories` (and award it somewhere); `memories/<id>.webp` shows up on its own.

### Tarot cards and places
- **A tarot card:** add `'<arcana key>': 'Added to Game/<file>'` to `EXTRA` in `tools/femc-tarot.py` (the key is the link's `arcana` lowercased without spaces) and run it: it writes `tarot/<key>.webp` and `tarot/index.js`, which the Bonds menu and the rank-up cards read (`core.js tarot`). Bump the `tarot/index.js ?v=` in `femc-game.html`.
- **A place:** add `'<slug>': 'Added to Game/<file>'` to `EXTRA` in `tools/femc-backgrounds.py` and run it (WebP, at most 1920 wide; New Adds pieces are fit to 1920×1072), then point the place's rule in `game/data/places.js` (or a scene's or a pick's `bg`) at the slug and bump that file's `?v=`. An activity that shares its spot with other scenes gets its own `place` (e.g. `'Iwatodai Strip · Hagakure · Challenge Bowl'`) and a rule above the spot's. A rule can't change by season, but a day image can: `places.js seasons` maps one (now `outside-shrine-day`) to [first month, slug] pairs, and `core.js seasonal` swaps it wherever it's used (rules, scene `bg`, Go Out); other seasonal art goes on dated scenes' `bg`. A story event's own `bg` field isn't read (ui.js `sceneFor`), so an event sets its art with a `{ bg }` step. Night-lit art gets the same slug as its evening image too, or evening scenes dim it.

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
