# Art to make (one list, updated 2026-10-20)

This file replaces `FEMC-ART-NEXT.md` and `FEMC-THEURGY-PROMPTS.md`. Everything already in the game is off this list.
- Put finished pieces in **New Adds**.
- Once they're in the game, I move them to **Femc Mode Images / Added to Game**.

**Where attachments live:**
- 🎨 **Images folder:** `~/Documents/UniverseHub-Images/Femc Mode Images/`. Character Portraits, Personas, Added to Game.
- 🎮 **Game folder:** `my-works-hub/assets/femc/`. Battle art, tarot cards, CGs.

Use **ChatGPT** for anything with a face, and **Gemini** for places and objects.

---

## ✅ Received, waiting to go in
These don't need anything from you. All of these are in the game now (2026-10-20):
- [x] Solar's 5 Theurgy cut-ins. Each Haenim form shows its own: Rise and Shine, Golden Hour (Sunna), Spring Tide (Mazu), Landslide (Nike), Unveiled.
- [x] Solar's Evoker sheet. It plays in her summon cut-in and on her battlefield figure.
- [x] Haechan's Theurgy cut-in and its 3 layers (Every Universe)
- [x] Jungwon's, Jihoon's and Minji's cut-ins (Perfect Composure, Light of Your Life, Final Cut)
- [x] Strike sheets: Haechan, Jungwon, Jihoon, Minji, and Solar's two. The star-pin sheet is Nike's; the red-tassel sheet plays for her other forms.
- [ ] Mitsuru's waist-up crop: **not used.** It's a cut-out on an empty frame (no background, no Persona) and in a different style from the other cut-ins, so it doesn't work as a full-screen still. Make her one from the S.E.E.S. prompt below.

### For Claude: how new Theurgy art goes in
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

---

## 1. Strike sheets (3 steps each) ⭐
Make one for each Theurgy cut-in, using the same prompt every time.

**Attach:** the finished Theurgy cut-in for that character, e.g. `New Adds/theurgy-solar-sunna.png`.
```
A 3-panel horizontal sheet on a plain white background showing the same character from the attached image in three moments of their ultimate attack: (1) wind-up, (2) the strike or release, (3) the follow-through. Same face, outfit, art style and scale in every panel, nothing overlapping between panels. Character only: no Persona, no background, no effects.
```
- [ ] **Solar:** two are in (Nike's star-pin sheet, and the red-tassel one shared by the other forms). Optional: one each for Haenim, Sunna, Mazu (harbor) and Unveiled, attaching that form's cut-in.
- [x] **Haechan**
- [x] **Jungwon, Jihoon, Minji**
- [ ] **The rest:** do each one after its cut-in in section 2.

---

## 2. Theurgy cut-ins still to make ⭐
**Attach, in this order:**
1. 🎮 `battle/art/theurgy/solar-rise-and-shine.webp` (style)
2. 🎨 `Character Portraits/<Name>/` (one portrait)
3. 🎨 The Persona: `Personas/Hyeonmu.png`, `Dokkaebi.png`, `Theia.png`, or the S.E.E.S. Persona named in the heading

### Jungwon: Perfect Composure (attach Hyeonmu.png) ✅ in the game
```
Create a NEW full-screen 16:9 ultimate-attack cut-in that matches the FIRST attached image's art style, energy and composition exactly: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. The character is Yang Jungwon (second attached image). Keep his face, hair and outfit exactly. Close-to-mid shot: he stands perfectly still and composed amid the chaos, adjusting his sleeve with one hand, a thin rapier held point-down in the other, a calm, polite, faintly dangerous expression. His dimples barely show. Behind him, towering, is his Persona Hyeonmu (third attached image: an armored black tortoise-shell guardian entwined with a great black serpent, with jade-green inlays and a jade ring emblem), drawn exactly as in the reference. The serpent rears and the ground explodes into a field of huge ice spikes and frost shards. A jade ring of light hangs behind them. Icy white, black and jade-green palette. No text, no letters, no logos.
```

### Jihoon: Light of Your Life (attach Dokkaebi.png) ✅ in the game
```
Create a NEW full-screen 16:9 ultimate-attack cut-in that matches the FIRST attached image's art style, energy and composition exactly: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. The character is Park Jihoon (second attached image). Keep his face, hair and outfit exactly. Close-to-mid shot: a huge smug grin, one gloved fist thrown forward at the viewer, the other hand pointing at himself like "you're welcome," hair whipping in the wind, completely full of himself. Behind him, enormous and mid-laugh, is his Persona Dokkaebi (third attached image: a giant blue-skinned Korean goblin with wild white hair, a single horn, a studded gold club over his shoulder, a red and gold sash and gold cuffs), drawn exactly as in the reference. The goblin slams the club down and a tornado of white wind and flying debris tears across the frame. Sky blue, red and gold palette. Loud, vain and enormous. No text, no letters, no logos.
```

### Minji: Final Cut (attach Theia.png) ✅ in the game
```
Create a NEW full-screen 16:9 ultimate-attack cut-in that matches the FIRST attached image's art style, energy and composition exactly: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. The character is Kim Minji (second attached image). Keep her face, long dark hair and outfit exactly. Close-to-mid shot: she draws a bow toward the viewer with one eye closed, as if framing a perfect shot through a camera, her expression focused and soft at once. Behind her, radiant and huge, is her Persona Theia (third attached image: a golden titaness with flowing white-gold drapery and a sunburst crown, drawing a bow of light, circled by rings like a camera aperture), drawn exactly as in the reference. Theia looses an arrow of pure light and the whole frame flashes white and gold like a camera flash going off, with aperture rings and lens flares across the image. Warm gold and white palette. No text, no letters, no logos.
```

### S.E.E.S.
The Personas are all in 🎨 `Personas/`. Each prompt starts the same way; paste this first:
```
Create a NEW full-screen 16:9 ultimate-attack cut-in that matches the FIRST attached image's art style, energy and composition exactly: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Keep the character (second attached image) and the Persona (third attached image) exactly as in their references. No text, no letters, no logos.
```
Then add that character's line:
- [ ] **Akihiko** (Caesar):
  ```
  Akihiko throws a furious punch flurry straight at the viewer, gloves blurring into afterimages, a fierce competitive grin. Caesar raises its sword as blue-white lightning crashes through the frame. Red, silver and electric blue.
  ```
- [ ] **Yukari** (Isis):
  ```
  Yukari draws her bow upward with her eyes closed, calm and determined. Isis spreads her wings as a spiral of pink-green healing light, wind and feathers sweeps the frame. Pink, green and white.
  ```
- [ ] **Junpei** (Trismegistus):
  ```
  Junpei swings his sword in a massive overhead strike, cap flying off, with a cocky grin. Trismegistus dives as a giant blazing slash arc rips across the frame. Blue, orange and white.
  ```
- [ ] **Mitsuru** (Artemisia):
  ```
  Mitsuru raises her rapier and snaps her fingers, icy calm. Artemisia cracks her whip as everything freezes into towering ice spikes. Crimson, white and ice blue.
  ```
- [ ] **Aigis** (Athena):
  ```
  Aigis's arms become blazing machine guns, her eyes glowing red. Athena raises her shield amid a storm of fire and shell casings. Gold, white and fiery orange.
  ```
- [ ] **Ken** (Kala-Nemi):
  ```
  Ken thrusts his spear to the sky, small but fierce. Kala-Nemi towers in a pillar of holy golden light. Gold, white and deep blue.
  ```
- [ ] **Koromaru** (Cerberus):
  ```
  Koromaru howls with a knife in his teeth. Cerberus roars with all three heads as a wall of hellfire sweeps the frame. Red, orange and black.
  ```
- [ ] **Shinjiro** (Castor):
  ```
  Shinjiro rests his axe on his shoulder, coat whipping, gruff but deadly. Castor charges at the viewer on his black horse in a shockwave of dust and dark red force. Maroon, black and steel.
  ```

---

## 3. Battle pose sheets (6 poses: bosses and fighters animate) ⭐
**Attach:** the existing art of that Shadow or fighter.
- 🎮 Bosses: `battle/art/shadows/<name>-shadow.webp`
- 🎮 Wren's Shadow: `battle/art/shadows/wren-shadow-last-train.webp`
- 🎮 Fighters: `battle/art/poses/<name>.webp`
- 🎨 Searcher fighters: their full body in `Added to Game/<Name>FullBody.png`
```
Character pose sheet, 3 columns × 2 rows on a plain white background, the same character as the attached image in six poses, same scale and lighting in every cell, nothing overlapping between cells: (1) idle/ready, (2) wind-up, (3) attack, (4) casting a spell with [ELEMENT] effects, (5) hit/recoil, (6) knocked down. Match the attached design exactly.
```
For people, swap the six poses for: (1) idle, (2) Evoker raised, (3) weapon attack, (4) spell, (5) hurt, (6) victory.
- [ ] **Full-moon bosses:** Priestess, Empress, Emperor, Hierophant, Lovers, Chariot, Justice, Hermit, Fortune, Strength, Hanged Man
- [ ] **Wren's Shadow** (the train lunging is the attack)
- [ ] **Solar**
- [ ] **Akihiko, Yukari, Junpei, Mitsuru, Aigis, Ken, Koromaru, Shinjiro**
- [ ] **Haechan, Jungwon, Jihoon, Minji**

---

## 4. Bond skill cut-ins (Solar + a partner)
**Attach:**
1. 🎮 `cg/prologue-akihiko-finds-solar.webp` (style)
2. 🎨 `Character Portraits/Solar/Solar-smiling.png`
3. 🎨 the partner's portrait
```
Create a NEW 16:9 combo-attack cut-in matching the FIRST attached image's art style: Persona 3 Reload official art, cel shading, a bold diagonal layout, speed lines. Solar (second image: very long straight black hair, black Gekkoukan uniform, red bow, red S.E.E.S. armband) and [NAME] (third image) attack together side by side, mid-strike: her naginata and their [WEAPON], with [EFFECT], their two colors swirling together. Both confident. Keep both faces and outfits exactly. No text.
```
- [ ] **Akihiko:** boxing gloves; lightning and sunrise gold; back to back
- [ ] **Haechan:** knife; violet moonlight and sun gold; he's relaxed and she's fierce
- [ ] **Jungwon:** rapier; ice and a jade glow; calm and precise
- [ ] **Jihoon:** fists; wind and pink star sparks; a smug grin
- [ ] **Minji:** bow; a camera flash freezing the moment as Solar strikes
- [ ] **Shinjiro:** axe; dark red force; a single gruff nod, the weapons crossing
- [ ] *(Optional)* Yukari, Junpei, Mitsuru, Aigis, Ken, Koromaru

**Status (2026-10-21):** the bond skills are in the game with a stylized cut-in made from both portraits and Personas, so nothing waits on this art. The romance versions (on that route) can have their own art too.

**For Claude: how bond art goes in.** The same pieces as a Theurgy (the steps above), in `assets/femc/battle/bonds.js`: on a bond (or one version of it, `tiers[i]` or `love`), add `img` with `focus: [x%, y%]`, `sheet: { frames: [three files] }` or `layers: { bg, persona, char }`. Cut it with `tools/femc-theurgy.py` (a bond still is a `cutin`; a 3-step combo sheet is a `sheet`). Bump `ART_V` in `battle.js` and the `bonds.js ?v=` in both pages, then run `python3 tests/femc_bonds.py --only art,shots`.

---

## 5. Weapon sheets for the other fighters
**Attach:** 🎨 `Added to Game/SolarWeapons.png` (layout)
```
A 2×3 grid of six weapon designs on a white background, each in its own card, in the same rendering style as the attached sheet: [WEAPON] for [NAME]. One plain starter, then themed designs: [THEMES].
```
- [ ] **Akihiko** (boxing gloves): red champion, lightning, silver wolf, gold belt, midnight
- [ ] **Yukari** (bow): pink heart, feather, sakura, moon, angel
- [ ] **Junpei** (sword): baseball bat, katana, flame, neon, giant cleaver
- [ ] **Mitsuru** (rapier): ice crystal, rose, gold filigree, snow queen, Kirijo crest
- [ ] **Aigis** (arm guns): gold plating, heart, wing, heavy cannon, butterfly
- [ ] **Ken** (spear): hero-show toy, lightning, gold, star, dragon
- [ ] **Koromaru** (knife): bone, shrine bell, flame, collar tag, kunai
- [ ] **Shinjiro** (axe): black steel, chain, kitchen cleaver, ember, moonlit
- [ ] **Haechan** (knife), **Jungwon** (rapier), **Jihoon** (gloves), **Minji** (bow): themes from their worlds and Personas

---

## 6. Revelation card art (13 sets; Gemini; no attachment needed)
```
Ornate tarot-like card illustration, portrait 3:4, no people, no text: [SUBJECT], rich jewel colors, gold filigree border, Persona-style dark glamour.
```
Save each as `card-<set>.png`. *(For Claude: wire each to `assets/femc/battle/art/cards/<set>.webp` and set that set's `img` in `build.js`. Set ids: bell, stadium, headset, jade, crane, needle, pin, ballot, croissant, evoker, moon, butterfly, coffin.)*
- [ ] **Runners:**
  - Fox Bell (a gold bell on a fox charm)
  - Snow Stadium (a stadium under falling snow, floodlights)
  - Glow Headset (a gaming headset glowing pink)
- [ ] **strangers:**
  - Jade Cord (a jade ring on a red cord)
  - Harbor Crane (a harbor crane at dawn)
  - Red Thread (a needle with red thread)
- [ ] **Hoax:**
  - Star Pin (a gold star pin on a navy blazer)
  - Ballot Box (a ballot box with ribbons)
  - Council Croissant (a croissant on a council desk)
- [ ] **Persona:**
  - Velvet Evoker (an Evoker on blue velvet)
  - Full Moon (a full moon over Tartarus)
  - Blue Butterfly (a glowing blue butterfly)
  - Green Coffin (a coffin under green Dark Hour light)

---

## 7. Tarot cards
**Attach:** 🎮 two existing cards, e.g. `tarot/star.webp` and `tarot/moon.webp`.
```
A tarot card in exactly the same style, border and layout as the attached cards: [ARCANA], numbered [NUMBER], depicting [IMAGE].
```
- [ ] **Aeon** (Aigis; hers is blank right now): XX, a winged mechanical angel holding an hourglass, a butterfly resting on it, sunrise
- [ ] **Judgement** (Yunjin): XX, an angel blowing a trumpet above a harbor at dawn, people rising
- [ ] **Councillor** (Hanni): an open book and a gentle hand holding a lantern, a lit path ahead
- [ ] *(Optional)* alternates for shared cards: Lovers, Strength, Empress, Priestess, Justice, Magician, Moon, Emperor, Sun, Chariot, Fool

---

## 8. Places (Gemini; no attachment needed)
```
Persona 3 Reload style background art, 16:9, high resolution, no people, no readable text: [PLACE].
```
- [ ] Gekkoukan tennis courts at sunset, a racket on the bench
- [ ] A school band room: drum kit, keyboards, posters, afternoon light
- [ ] A gaming club room: PCs with RGB light, headsets, a whiteboard of match notes, dusk
- [ ] Yakushima: the Kirijo villa's grand lounge
- [ ] Yakushima: a forest trail with mossy cedars
- [ ] Yakushima: the beach at night with fireworks
- [ ] The dorm lounge decorated for a birthday: streamers, a cake, balloons, warm night light

---

## 9. Characters and CGs
- [ ] **Shinjiro's Evoker shot** (your redo)
  - **Attach:** Shinjiro's portrait.
- [ ] **Evoker poses** for Akihiko, Yukari, Junpei, Mitsuru, Ken and Aigis
  - **Attach:** 🎨 `Added to Game/solar-evoker-animation.png` and the character's portrait.
  - Prompt:
    ```
    Close-up of [NAME] raising an ornate silver Evoker to their temple, [EXPRESSION], hair lifting in a rush of blue wind, glowing glass shards around them, a huge full moon behind. Persona 3 Reload style, 16:9.
    ```
- [ ] **Full bodies:** Sunoo, Junkyu, Wren
  - **Attach:** their portrait, plus one finished full body (e.g. 🎨 `Added to Game/CherryFullBody.png`) for style.
  - Prompt:
    ```
    Full-body character art of [NAME], standing in a relaxed signature pose, outfit matching the attached portrait, in the same style as the attached full body, transparent background.
    ```
- [ ] **Birthday CG (6/24)**
  - **Attach:** 🎮 `cg/prologue-akihiko-finds-solar.webp` (style), plus Solar, Akihiko, Yukari, Junpei and Koromaru portraits.
  - Prompt:
    ```
    Solar walks into a dark dorm lounge as the lights flip on: S.E.E.S. jump out with a cake, Koromaru in a party hat, Akihiko holding the cake a little too seriously. Warm, chaotic, happy. 16:9.
    ```

---

## 10. Older CG list
The full prompts are in `FEMC-CG-PROMPTS.md` under the number shown. For all of these, attach 🎮 `cg/prologue-akihiko-finds-solar.webp` first for style, then the portraits named.
- [ ] **Fix:** edit `cg/prologue-elizabeth-blank-page.webp` to remove the armband (#0.1). Attach that CG only.
- [ ] **Fix:** the Wren bench's socks (#0.2). Attach 🎨 `Event CGs/wren-meets-solar-bench-v1`.
- [ ] **Side romances** (#5): Solar plus Ann, Kasumi, Judy, Rio or Saori
- [ ] **Leon and Ada** (#6): Solar, Leon, Ada
- [ ] **Mercy and Aphrodite doing Solar's hair** (#7): Solar, Mercy, Aphrodite
- [ ] **Cloud, Tifa and Aerith** (#8): Solar, Cloud, Tifa, Aerith
- [ ] **The dorm dinner** (#9): a few cast portraits
- [ ] **Wren's Shadow phases 1 and 3** (#25, #26): Wren's portraits
- [ ] *(Optional)* **New Year's at the shrine** (#24), **the train through Tartarus** (#23)

---

## Still to decide
- **The revamp's name,** then the title logo.
