# Art to make (rebuilt 2026-10-22 from every old list and a check of the whole game)

**106 items:** 2 quick fixes · 7 CGs · 3 places · 68 character pieces (50 of them regulars' faces in 4D) · 12 battle · 8 cards and icons · 6 screens. 4 are ⭐ (plus 13 ⭐ regulars inside 4D), 83 are optional.

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
- [ ] **The summer festival (8/16).** **Attach:** style, Solar, Ann, 🎮 `bg/naganaki-shrine-festival.webp`. **Fills:** `cg/holiday-summer-festival.webp`. There's no group festival scene; this goes on Ann's festival day.
  - **Must match:** early evening; red-and-white lanterns up the steps and through the trees; stalls smoking (grilled squid, corn); a crowd in yukata and geta; Solar in a gray yukata with pale blue morning glories (not dark); Ann in deep blue with white goldfish and a peach obi; Yukari there; Junpei at the squid stall; candy apples; no fireworks.
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
Everyone below talks in scenes but has no portrait, so today they show as a name only. 47 speakers (7 to 67 lines each, counted 2026-10-23 across `assets/femc/game/**/*.js`), plus 3 teachers (their faces show in class questions once made). Looks marked *(invented)* aren't in the game text, so change anything you like; the rest come from the text or from P3 canon.

**Do these first ⭐** (most lines): Kenta 67, Mrs. Okada 43, The Master 36, Ōta 35, Mr. Maeda 33, Mitsuko 32, Ms. Kagami 31, Mrs. Kubo 31, Tsuji 31, Chiba 31, Clerk 28, Bunkichi 28, Mr. Tanabe 28.

**How to make them**
- **One neutral each** is enough. For the ⭐ regulars, a second **happy** face is a nice extra: use the 4C edit prompt with the neutral you made and `[EXPRESSION]` = a warm, open smile. **Fills:** `portraits/<id>/happy.webp`.
- **Save usage with a sheet:** ask for a 2×2 or 3×2 sheet of several regulars at once (the sheet prompt below), for example a whole job's regulars. Claude cuts it with `tools/femc-sheet.py` and files each face under its person.
- **Attach** (every item): one finished portrait for style, 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png`. For canon NPCs, also attach a P3R screenshot of them if you have one.
- **The template.** Each item below is this line already filled in, so paste the item's whole line:
```
A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): [WHO THEY ARE AND WHAT THEY LOOK LIKE], neutral expression, transparent background.
```
- **Sheet version** (plain white background, so the tool can cut it):
```
A Persona 3 Reload style character sheet, 3 columns by 2 rows, six different people, each a separate head-and-shoulders portrait in exactly the same framing, crop, art style and size as the attached one, evenly spaced on a plain white background, no labels, neutral expressions. Top row, left to right: (1) [WHO], (2) [WHO], (3) [WHO]. Bottom row: (4) [WHO], (5) [WHO], (6) [WHO].
```

**Tutoring (the Sakamoto apartment)**
- [ ] ⭐ **Kenta** · `kenta` · 67 lines · *(invented)*
  - **Who:** The thirteen-year-old Solar tutors in English and maths. Sharp, proud, hates being seen trying; his ears go red when he's caught out.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a thirteen-year-old Japanese boy, skinny and a little small for his age, messy black hair that sticks up at the crown, a gray hoodie over a middle-school white shirt, a pencil tucked behind one ear, arms folded, a stubborn set jaw and clever, unimpressed eyes, the tips of his ears faintly pink, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kenta/neutral.webp` (and optional `happy.webp`)

**The mall (Paulownia Mall jobs)**
- [ ] ⭐ **Mrs. Okada** · `okada` · 43 lines
  - **Who:** Runs the flower stall by the fountain from her stool. Says little, misses nothing, quietly generous.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese woman in her sixties, short and sturdy, gray hair cut in a practical bob, a dark green work apron with a yellow cloth tape measure in the pocket, a pair of flower scissors hanging on a ribbon round her neck, a sprig of something blue tucked in the apron strap, arms folded, a dry, watchful face with a hint of a smile she's hiding, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/okada/neutral.webp` (and optional `happy.webp`)
- [ ] ⭐ **Ms. Kagami** · `chKagami` · 31 lines
  - **Who:** Manager of Chagall Café. Exacting, dry, and fond of people in a way she'd never admit; one raised eyebrow is her highest praise.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese woman in her forties, slim, black hair pulled back in a neat low knot, thin reading glasses on a fine chain, a crisp white shirt with the sleeves rolled and a long black café apron, one eyebrow very slightly raised, a cool appraising look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/chkagami/neutral.webp` (and optional `happy.webp`)
- [ ] **Mr. Okuda** · `chOkuda` · 14 lines
  - **Who:** A Chagall regular who does the crossword at the window over black coffee. Courtly and quietly funny.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): an elderly Japanese gentleman, thin, silver hair neatly combed, round wire glasses he looks over the top of, a tweed jacket and a knitted vest over a pressed shirt, a fountain pen in his breast pocket, a very dry little smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/chokuda/neutral.webp`
- [ ] **Hinata** · `chHinata` · 14 lines
  - **Who:** A young man who studies every afternoon in the café's corner behind a wall of workbooks.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese young man of nineteen, slight and tired-looking, black hair grown a little too long and pushed off his forehead, a plain navy coat over a gray sweater, a mechanical pencil in his hand, shadows under earnest, anxious eyes, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/chhinata/neutral.webp`
- [ ] **Yuu** · `chYuu` · 11 lines · *(invented)*
  - **Who:** Chagall's weekday-afternoon barista, a university student who believes in lucky coffee and can fix anything with a paperclip.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese university student of about twenty, lanky, soft brown hair falling over one eye, a white shirt with a black Chagall apron, a pair of pliers poking out of the apron pocket, an easygoing, slightly dreamy grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/chyuu/neutral.webp`

**The Strip (Iwatodai Strip jobs)**
- [ ] ⭐ **The Master (Hagakure)** · `hgMaster` · 36 lines
  - **Who:** The owner and chef of Hagakure ramen. Wordless, exacting, proud of his broth; the kitchen goes still when he looks at you.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a short, square Japanese man in his sixties with thick forearms, a white towel knotted around his head, a white cook's jacket with the sleeves pushed up, arms crossed, a flat, unreadable stare across the steam, deep lines at the corners of his eyes, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/hgmaster/neutral.webp` (and optional `happy.webp`)
- [ ] ⭐ **Mitsuko** · `mitsuko` · 32 lines
  - **Who:** Half of the elderly couple who run Bookworms. Brisk, warm, keeps the ledger and the tea going. *(P3/P3R canon NPC.)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style), plus a P3R screenshot of Mitsuko if you have one.
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): Mitsuko from Persona 3, the elderly lady of the Bookworms used bookstore, as she looks in P3 Reload: small and round-shouldered, gray hair in a neat bun, glasses she looks over the top of, a cardigan over a plain blouse and an apron, a gentle, knowing half-smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/mitsuko/neutral.webp` (and optional `happy.webp`)
- [ ] ⭐ **Bunkichi** · `bunkichi` · 28 lines
  - **Who:** Mitsuko's husband at Bookworms. Gentle, dreamy, laughs easily, polishes his glasses when he's moved. *(P3/P3R canon NPC.)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style), plus a P3R screenshot of Bunkichi if you have one.
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): Bunkichi from Persona 3, the elderly gentleman of the Bookworms used bookstore, as he looks in P3 Reload: a kind old man, balding with white hair at the sides, round glasses, a soft knitted cardigan over a collared shirt, hands clasped behind his back, a pleased, grandfatherly smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/bunkichi/neutral.webp` (and optional `happy.webp`)
- [ ] **Daisuke (Hagakure)** · `hgDaisuke` · 15 lines
  - **Who:** The Master's young cook. Tall, loud, eager, and a little scared of his boss.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a tall Japanese man in his twenties, short spiky black hair under a navy bandana, a white cook's jacket with the sleeves shoved up over forearms dotted with small kitchen burns, a ladle in one hand, a big open grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/hgdaisuke/neutral.webp`
- [ ] **Mr. Gotou (Hagakure)** · `hgGotou` · 13 lines
  - **Who:** A Hagakure regular, a site foreman who keeps taking on the giant-bowl challenge.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man of forty-five built like a refrigerator, buzz-cut hair, a thick neck, a navy work jacket with a reflective stripe over a gray T-shirt, a towel round his neck, a solemn, determined face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/hggotou/neutral.webp`
- [ ] **Mrs. Ueda (Yeobo's Cafe)** · `ueda` · 9 lines · *(invented)*
  - **Who:** A young mother who comes into Yeobo's with her toddler asleep in the stroller.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese woman in her early thirties, shoulder-length dark hair tied back loosely with strands escaping, a beige winter coat she hasn't taken off, a knitted scarf, tired soft eyes and a small, worn-out smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/ueda/neutral.webp`
- [ ] **Shiori (Bookworms)** · `shiori` · 8 lines · *(invented)*
  - **Who:** A Gekkoukan first-year who buys one mystery a week at Bookworms and judges everything.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese girl, small, straight black hair to the chin with blunt bangs, square black glasses, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon), a paperback mystery held to her chest, a narrow-eyed, measuring look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/shiori/neutral.webp`

**The fan club and classmates**
- [ ] ⭐ **Ōta (Akihiko's fan club)** · `ota` · 35 lines
  - **Who:** The leader of the Akihiko Sanada fan club, a second-year. Formal, brave when it counts, does everything by committee.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a sixteen-year-old Japanese girl, glossy black hair to the shoulders with a small plastic star hair clip, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) and a winter scarf, a school bag held in front of her in both hands like a shield, a solemn, earnest, very determined face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/ota/neutral.webp` (and optional `happy.webp`)
- [ ] **Maki (Akihiko's fan club)** · `maki` · 21 lines · *(invented)*
  - **Who:** An underclassman who runs bets on everyone's love life (for juice) and wants it all on the record.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese girl, a high side ponytail with a matching hair clip, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) with the sleeves of a pastel cardigan pulled over her hands, chin propped on her fists, a sly, delighted grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/maki/neutral.webp`
- [ ] **Natsuki Moriyama** · `natsuki` · 18 lines
  - **Who:** A sharp-tongued Gekkoukan girl in Fuuka's year. *(P3/P3R canon NPC.)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style), plus a P3R screenshot of Natsuki if you have one.
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): Natsuki Moriyama from Persona 3, as she looks in P3 Reload: a Gekkoukan girl with wavy, shoulder-length light-brown hair, sharp eyes with a bit of gal-style makeup, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) with the blazer open and the ribbon loosened, hands in her pockets, a guarded, defiant look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/natsuki/neutral.webp`
- [ ] **Classmate** · `classmate` · 10 lines · *(invented)*
  - **Who:** Solar's generic classmate (several different students share this id). *(generic; optional)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a seventeen-year-old Japanese girl, plain shoulder-length black hair with a side part, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon), a friendly, ordinary, slightly curious face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/classmate/neutral.webp`
- [ ] **Sonoda (Akihiko's fan club)** · `sonoda` · 7 lines · *(invented)*
  - **Who:** Maki's partner in betting; a boy who always pays up.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese boy, lanky, short neat black hair, Gekkoukan High winter uniform (black blazer over a white shirt), a coin between his fingers, the long-suffering face of someone who has just lost a bet, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/sonoda/neutral.webp`

**The shrine (amulet stall)**
- [ ] ⭐ **Mr. Maeda** · `maeda` · 33 lines
  - **Who:** Chairman of the shrine association who runs the amulet stall: fussy, proper, keeps a ledger older than Solar.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man in his late sixties, thin and upright, white hair carefully combed, rimless glasses, a dark gray cardigan over a white shirt and tie with a shrine-association armband, a clipboard and a pencil in hand, a prim, faintly worried expression, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/maeda/neutral.webp` (and optional `happy.webp`)
- [ ] ⭐ **Mrs. Kubo** · `kubo` · 31 lines
  - **Who:** A neighbor who sweeps the shrine and teaches Solar the knots. Brisk, strict, secretly soft.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese woman in her seventies, small and wiry, gray hair under a cotton headscarf, reading glasses on the end of her nose, a quilted indigo work jacket and cotton gloves, a bamboo broom over one shoulder, a stern mouth and kind eyes, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kubo/neutral.webp` (and optional `happy.webp`)
- [ ] **Shota** · `shota` · 21 lines
  - **Who:** A nine-year-old who's become a regular at the stall without buying anything. Very serious, very formal.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a nine-year-old Japanese boy, a neat bowl haircut, round cheeks, a new navy puffer jacket, holding a small white paper envelope in both hands, a grave, very serious little face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/shota/neutral.webp`
- [ ] **Shrine caretaker** · `caretaker` · 14 lines
  - **Who:** An old woman who has looked after Naganaki Shrine for a long time.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a small, bent Japanese woman in her eighties, white hair under a dark headscarf, a quilted winter jacket and knitted mittens, a deeply lined face with bright, kind eyes, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/caretaker/neutral.webp`

**School clubs**
- [ ] ⭐ **Tsuji (tennis club)** · `tsuji` · 31 lines · *(invented)*
  - **Who:** The tennis club's loudest member: talks through every point and turns every loss into a drama. *(shares an id; see the note below)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a sixteen-year-old Japanese girl, a high bouncy ponytail with a bright yellow scrunchie, a terry sweatband on her forehead, Gekkoukan tennis whites, a smudge of paint on her neck, mid-chatter with a mischievous, theatrical grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/tsuji/neutral.webp` (and optional `happy.webp`)
- [ ] ⭐ **Chiba (tennis club)** · `chiba` · 31 lines
  - **Who:** Runs the relaxed tennis club. Tall, unhurried, faintly amused, never takes her cardigan off.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a seventeen-year-old Japanese girl, tall, dark hair in a low loose knot, a cream cardigan over Gekkoukan tennis whites, a calm, faintly amused half-smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/chiba/neutral.webp` (and optional `happy.webp`)
- [ ] **Kuga (library committee)** · `kuga` · 24 lines
  - **Who:** A third-year on the library committee who has read every nonfiction book in the building and found most of them lacking.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a seventeen-year-old Japanese boy, thin, neat black hair, a gray cardigan buttoned all the way up over his uniform shirt and tie, a pencil behind each ear, a severe, critical, faintly superior look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kuga/neutral.webp`
- [ ] **Hoshino (library committee)** · `hoshino` · 21 lines · *(invented)*
  - **Who:** A cheerful first-year in the book club who reads the first page of everything.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese girl, wavy light-brown hair in two low pigtails, a few freckles, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) with a cardigan, a hardback hugged to her chest, a bright, eager face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/hoshino/neutral.webp`
- [ ] **Aoi (light music club)** · `aoi` · 21 lines
  - **Who:** The band's singer: a second-year who cuts her own hair and writes lyrics up her arm in ballpoint.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a sixteen-year-old Japanese girl, a short, ragged self-cut black haircut, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) with the ribbon loose and the sleeve pushed up to show lines of ballpoint lyrics up her left forearm, an intense, guarded stare, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/aoi/neutral.webp`
- [ ] **Hayato (gaming club)** · `hayato` · 21 lines · *(invented)*
  - **Who:** Leads the gaming club; quiet strategist who writes everything in a notebook.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a seventeen-year-old Japanese boy, black hair with a long fringe, rectangular glasses, Gekkoukan High winter uniform (black blazer over a white shirt) with the tie loosened, a small spiral notebook and pen in hand, a calm, analytical look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/hayato/neutral.webp`
- [ ] **Yuzu (gaming club)** · `yuzu` · 16 lines · *(invented)*
  - **Who:** The gaming club's rhythm-game ace; loud, conspiracy-minded, explains everything.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese girl, short choppy pink-dyed bob with a cat-ear hair clip, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) with an oversized hoodie over it, drumsticks for an arcade drum game tucked under her arm, a smug, excitable grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/yuzu/neutral.webp`
- [ ] **Kousuke (light music club)** · `kousuke` · 13 lines · *(invented)*
  - **Who:** The band's guitarist, who argues for covers and fights the amp.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a seventeen-year-old Japanese boy, floppy dyed-brown hair, Gekkoukan High winter uniform (black blazer over a white shirt) with the blazer open, a guitar strap over one shoulder and a plectrum between his teeth, a harried, exasperated look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kousuke/neutral.webp`
- [ ] **Nishi (tennis club)** · `nishi` · 11 lines · *(invented)*
  - **Who:** A shy tennis-club girl who goes red at any attention and keeps trying anyway.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese girl, small, a straight black bob with a white hairband, Gekkoukan tennis whites, a racket held close to her chest, flushed cheeks and a shy, startled look, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/nishi/neutral.webp`
- [ ] **Gen (light music club)** · `gen` · 10 lines · *(invented)*
  - **Who:** The band's bassist; quiet, sits on a crate, talks to his strings.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a seventeen-year-old Japanese boy, broad and quiet, a buzz cut, Gekkoukan High winter uniform (black blazer over a white shirt) with the sleeves rolled, a bass guitar strap across his chest, a reserved, sleepy-eyed face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/gen/neutral.webp`
- [ ] **Mika (light music club)** · `mika` · 10 lines · *(invented)*
  - **Who:** The band's drummer, always a little too fast.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a sixteen-year-old Japanese girl, a messy half-up ponytail, Gekkoukan High winter uniform (black blazer, white shirt, red ribbon) with a track jacket tied round her waist, a pair of drumsticks in one hand, a restless, bright-eyed grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/mika/neutral.webp`
- [ ] **Kenji (gaming club)** · `kenji` · 10 lines · *(invented)*
  - **Who:** A gaming-club member with an online game he lives in and a theory about everything.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a sixteen-year-old Japanese boy, slightly chubby, round glasses, short messy hair, Gekkoukan High winter uniform (black blazer over a white shirt), a lopsided plush mascot keychain on his bag strap, an earnest, excitable face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kenji/neutral.webp`
- [ ] **Ryoko (tennis team)** · `ryoko` · 9 lines · *(invented)*
  - **Who:** A second-year on the competitive tennis team; kind to opponents, steady with her team.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a sixteen-year-old Japanese girl, athletic, dark hair in a tight braid, Gekkoukan tennis whites with a strip of white overgrip wrapped round one wrist, a composed, quietly determined face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/ryoko/neutral.webp`
- [ ] **Mori (tennis team)** · `mori` · 9 lines
  - **Who:** A tennis-team player whose family runs the old bathhouse on the Strip.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a fifteen-year-old Japanese girl, round face, short dark hair pinned back with plain clips, Gekkoukan tennis whites, a towel round her neck, a quiet, self-contained expression, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/mori/neutral.webp`

**Port Island (konbini, Respawn, fish market)**
- [ ] ⭐ **Clerk (convenience store)** · `clerk` · 28 lines · *(invented)*
  - **Who:** The night clerk Solar works beside at the station convenience store. Laid-back, a little lazy, kind underneath. He's also the tired clerk in the prologue's store.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man in his mid-twenties, lean, slightly shaggy brown-dyed hair with dark roots, a blue-and-white striped convenience store uniform shirt with a name tag, a pen behind one ear, sleepy half-lidded eyes and an easy, lopsided smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/clerk/neutral.webp` (and optional `happy.webp`)
- [ ] ⭐ **Mr. Tanabe (fish market)** · `tanabe` · 28 lines
  - **Who:** Runs the stall Solar works at the harbor fish market. Gruff, sharp-eyed, judges a fish (and a worker) at a glance.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a weathered Japanese man in his late fifties, wiry, gray stubble, short gray hair under a knitted navy watch cap, a heavy rubber apron over a quilted work jacket, a stub of chalk in his fingers, squinting, clear, appraising eyes, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/tanabe/neutral.webp` (and optional `happy.webp`)
- [ ] **Old Oka (fish market)** · `oka` · 16 lines
  - **Who:** The man at the next stall: sixty-something, looks older, speaks thick dialect, teaches with his hands.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a small, leathery Japanese man in his sixties who looks older, deep sun wrinkles, a few missing teeth in a crooked grin, a faded towel twisted round his head, a worn padded vest over a long-sleeved undershirt, a rough hand raised in an auction hand-sign, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/oka/neutral.webp`
- [ ] **Respawn's manager** · `manager` · 14 lines
  - **Who:** Runs Respawn, the net café under Port Island Station; has been losing an argument with the building for six years.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man in his late thirties, slightly heavy, unshaven, black hair flattened by a headset pushed down round his neck, a black polo shirt with the Respawn logo, a mop handle over his shoulder, a long-suffering, deadpan face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/manager/neutral.webp`
- [ ] **Nurse Ono (convenience store)** · `kbOno` · 10 lines
  - **Who:** A nurse from the hospital on the island who stops in after her shift. Tired, polite, a short surprised laugh.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese woman in her forties, dark hair in a low practical ponytail, a cardigan over pale blue hospital scrubs, a lanyard with an ID card, faint tiredness under the eyes and a polite, reserved smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kbono/neutral.webp`
- [ ] **Mr. Hattori (convenience store)** · `kbHattori` · 9 lines
  - **Who:** A taxi driver in his fifties who buys a black coffee and a pork bun every night. Shy, decent, ducks his head when he smiles.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man in his fifties, a neat graying side-part, a dark navy taxi driver's uniform jacket and tie, white driving gloves folded into his breast pocket, a shy, slightly bashful face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/kbhattori/neutral.webp`
- [ ] **The regular (Respawn)** · `regular` · 9 lines · *(invented)*
  - **Who:** One of Respawn's night regulars; always seat fourteen.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man in his late twenties, pale, black hair in a short messy cut, a hooded zip jacket over a band T-shirt, big headphones round his neck, a can of energy drink in hand, a friendly, slightly sheepish half-smile, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/regular/neutral.webp`
- [ ] **Daichi (Respawn)** · `daichi` · 8 lines · *(invented)*
  - **Who:** The loud middle-schooler in seat four who yells at his games.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a thirteen-year-old Japanese boy, round-faced, spiky black hair, a hoodie with the sleeves shoved up over a middle-school uniform shirt, a gaming headset round his neck, a scowl he's trying very hard to keep, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/daichi/neutral.webp`
- [ ] **Tanabe's nephew (fish market)** · `nephew` · 8 lines
  - **Who:** Mr. Tanabe's nineteen-year-old nephew. Reckless, cheerful, soaked half the time.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese young man of nineteen, tanned, bleached-orange hair spiking out from under a backwards cap, a rubber apron over a soaked T-shirt, a big careless grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/nephew/neutral.webp`

**Others**
- [ ] **Ramen cook** · `cook` · 17 lines
  - **Who:** The man who runs the little back-street ramen counter with the half-dead sign. Gruff, talks to strangers in the cold.
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese man in his fifties, gaunt, graying stubble, black hair under a grubby white cook's cap, a stained apron over a long-sleeved shirt, a cigarette tucked behind one ear, tired, wary, kind eyes, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/cook/neutral.webp`
- [ ] **Salaryman** · `salaryman` · 14 lines · *(invented)*
  - **Who:** Generic office worker customers at the konbini and the flower stall. *(generic; optional)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style).
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): a Japanese office worker in his thirties, neat short black hair, a dark gray suit, white shirt and loosened navy tie, a briefcase strap over his shoulder, a harried, polite, tired face, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/salaryman/neutral.webp`

**Teachers** *(their face shows beside the class question once it exists)*
- [ ] **Mr. Ono** · `ono` (teacher key in `questions.js`) · 10 class questions
  - **Who:** World History teacher who wears a samurai helmet to class and derails into the Sengoku period. *(P3/P3R canon NPC.)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style), plus a P3R screenshot of him if you have one.
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): Mr. Ono, the Gekkoukan history teacher from Persona 3, as he looks in P3 Reload: a middle-aged man in a brown suit and tie wearing a samurai kabuto helmet, an excited, lecturing expression, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/ono/neutral.webp`
- [ ] **Mr. Ekoda** · `ekoda` (teacher key in `questions.js`) · 10 class questions
  - **Who:** Classic Literature teacher; a stickler who reads the Heian classics in a flat monotone. *(P3/P3R canon NPC.)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style), plus a P3R screenshot of him if you have one.
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): Mr. Ekoda, the Gekkoukan classics teacher from Persona 3, as he looks in P3 Reload: a sour middle-aged man in a plain suit and tie, thinning hair, narrow eyes and a permanent frown, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/ekoda/neutral.webp`
- [ ] **Mr. Edogawa** · `edogawa` (teacher key in `questions.js`) · 10 class questions
  - **Who:** The school nurse who teaches Health and turns every lesson into the occult. *(P3/P3R canon NPC.)*
  - **Attach:** 🎨 `Character Portraits/Fuuka/Fuuka-Neutral.png` (style), plus a P3R screenshot of him if you have one.
  ```
  A Persona 3 Reload style character portrait in exactly the same framing, crop, art style and size as the attached one (head and shoulders, same angle and lighting): Mr. Edogawa, the Gekkoukan school nurse from Persona 3, as he looks in P3 Reload: a thin man in a rumpled white lab coat, untidy black hair, round glasses, a sly, unsettling grin, neutral expression, transparent background.
  ```
  - **Fills:** `portraits/edogawa/neutral.webp`

*Not listed:* Mrs. Kanda (the guesthouse cook), Hiyori (fan club) and the other teachers have no spoken lines yet, so a face wouldn't show anywhere. Kid, girl, boy and others under 7 lines are left out too.

*Note for Claude (wiring):*
- **CamelCase ids work (fixed 2026-10-23):** `femc-portraits.py` writes lowercase folders (`Character Portraits/chKagami/` → `portraits/chkagami/`, the key in `portraits/index.js`), and `core.js faceId` lowercases every speaker id before looking it up, so `hgMaster`, `chKagami`, `kbOno` and the rest find their faces. The source folder can be named either way.
- **Shared ids split (2026-10-23):** each id above is one person now. The minor ones got their own ids and `cast` names: `ybTsuji` (Mrs. Tsuji at Yeobo's), `lbUeda` (Ueda in the library committee), `tuDaichi` (Kenta's friend at tutoring), `wdClerk` (the Wild-Duck clerk in Mitsuru's rank 4). The prologue's convenience-store clerk is the same man as the konbini job's (the job opens on the same "...Welcome?"), so he stays `clerk` on purpose. The minor ones have under 7 lines, so they aren't listed above; a face for any of them goes in `portraits/<id lowercased>/`.
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
- **Skill effect sprites** (5E): worth building a sprite hook for, or keep the code effects?
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
- **Full bodies:** `tools/femc-profiles.py` writes `profile/<id>.webp` and `profile/index.js`; S.E.E.S. and searcher art goes in `profile/sees/` or `profile/searchers/` with `img` and `profile: true` on the `compendium.js` entry. Fuuka, Sunoo, Junkyu, Wren, Danielle, Jaemin and Chenle have no entry yet: add one (`unlock: 'met:<id>'`, `secret: true`, a note from their introduction, no new prose). Bump `FEMC_ASSET_VERSION` and run `python3 tests/femc_compendium.py --ids <ids>`.
- **Evoker shots:** `battle.js evoker()` shows a face plus the code-drawn `EVOKER_SVG` for everyone but Solar. Give a member `evoker: { shot: 'assets/femc/battle/art/summon/<mid>-evoker.webp' }` in `data.js` and render it in the `.bt-evk-shot` slot like Solar's (small change). Evoker sheets already work: `('evoker', '<file>', '<mid>-evoke')` in `tools/femc-theurgy.py BUILD`, then `evoker.frames`. The Evoker prop replaces `EVOKER_SVG`.

### Battle art
- **New Shadow or boss art:** `tools/femc-shadows.py` cuts it into `battle/art/shadows/<slug>.webp` and `index.js`; point the enemy's `img` at the slug (the April boss is `magician`, the memory boss `memory_car`). Wren's phases: swap `wren_call` / `wren_last`'s `pic` for an `img`. Then pose sheets as below.
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
