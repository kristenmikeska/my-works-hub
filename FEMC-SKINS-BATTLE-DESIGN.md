# Skins in battle: design sheet

*Persona 3: Solstice · drafted Nov 1 2026 from Kat's decisions of the same day · status: **B, C and A's code built Nov 1 2026** (see 7.9); A switches on per look once its cleaned sheet is wired and marked; **H–L built Nov 1 2026 with built-in versions until their art arrives** (see 8.6); D–G and S1–S5 not built.*

The idea: when a fighter wears a Wardrobe look, the whole fight should know it. Not just the figure on the field, but the faces on the party cards, the win screen, the Theurgy cut-in, the skill effects and the All-Out finish card. Looks stay looks: **no stats, ever.**

Parts 1–5 are for Kat (plain language). Part 6 has the paste-ready prompts. Part 7 is the technical side, for Claude.

---

## 1. What's already true today

- A worn look already replaces that fighter's battle figure (all six poses: ready, Evoker, attack, skill, hurt, victory).
- Everything else in a fight still shows the fighter's usual self: card faces, the win screen, the Theurgy cut-in, the finish card, and every skill effect.
- Every pose sheet so far was made with the skill effect painted into **cell 4** ("using a skill"), so the glow is part of the figure. The game can't change or recolour it, and it doubles up with the game's own hit effects.

## 2. The pieces (what each one is, and what the player sees)

| # | Piece | What the player sees | New art? |
|---|---|---|---|
| A | **Clean skill pose + layered effects** | When she casts, her hand glows in the skill's element (fire orange, ice blue…) as the spell leaves her, then the hit lands on the Shadow as it does now. The glow is the game's, so it's always the right element. | No (Kat cuts the old effect out of cell 4) |
| B | **Outfit faces in battle** | The party card face and the turn-order portrait wear the look's own scene portraits (the ones already made for scenes). | No |
| C | **Victory pose on the win screen** | The Results screen shows the fighter's victory pose big, bleeding off the edge, in whatever look they're wearing. | No |
| D | **A second pose sheet** | Six more battle poses per look: a support cast (heals and buffs), guard, dodge, knocked down, badly hurt, and a dash-in for All-Outs and baton passes. Fights feel far less repetitive. Any look without one just keeps using its first sheet. | Yes: one sheet per look |
| E | **Outfit Theurgy cut-in** | The Theurgy cut-in shows the fighter in their look, same layout as their usual cut-in. | Yes: one picture per look |
| F | **Outfit-themed effects** | Each look can carry a theme (hearts, petals, bubbles, stars…). Their skills sprinkle that theme on top of the normal element effect, and later, for favourite looks, can replace it entirely ("fire, but made of hearts"). | Yes: one sheet per theme (shared by many looks) |
| G | **Outfit finish card** | The All-Out Attack's finish card shows the look. | Yes: one card per look |

**Suggestions (Claude's extras, Kat to approve or drop):**
- **S1. Couple sets in battle.** When both halves of a couple set fight together: the win screen shows both victory poses side by side (this is the "Matching" idea already waiting for approval), and their Bond skill gets their shared theme.
- **S2. The theme in the All-Out cloud.** A few hearts / petals / stars puff out of the All-Out dust cloud when the leader wears a themed look. Uses the theme sheet, no new art.
- **S3. "Try it on" in the Wardrobe.** A small button on an owned outfit plays its poses with its effect, so you can see a look in action before a fight.
- **S4. A victory line per look.** One short line a look says on the win screen ("Didn't even wrinkle it."). Writing only.
- **S5. Outfit chibis for the All-Out.** The brawl cloud's chibi frames per look. Lots of art for a tiny on-screen moment: parked unless Kat loves it.

## 3. How it feels for the player (settings)

- Everything is automatic: wear a look, and every piece that look has art for shows up. Pieces without art quietly use the fighter's usual version, so nothing ever looks broken or half-done.
- Two new battle settings: **Outfit faces in battle** (On / Off) and **Outfit effects** (On / Off: Off keeps the normal element effects only). Persona cut-ins Off / Rush / reduced motion keep working as now.
- Practice mode has no Wardrobe, so practice fights stay plain.

## 4. The art, counted

**Today: 76 looks are in the game, all with their first pose sheet; 60 of them also have scene portraits.** With the 12 fighters' own sheets, that's **88 pose sheets.** (Ken has no battle figure; Koromaru has no looks.)

| Fighter | Looks | Without scene portraits (B falls back to their usual faces) |
|---|---|---|
| Solar | 33 | The Sun (portraits still on the art list) |
| Haechan | 16 | Sigma Chi Runner |
| Jungwon | 11 | HOAX Council Uniform |
| Akihiko | 5 | Champion's Robe, Off-Day Hoodie |
| Yukari | 3 | Archery Club, Featherman Pink |
| Minji | 2 | Film Crew, SU Crewneck |
| Jihoon | 2 | Purple Pilates Set, Emo Night |
| Junpei · Mitsuru · Shinjiro · Aigis | 1 each | all four |

**What each piece needs, at full size:**

| Piece | Who makes it | Full count | Start with |
|---|---|---|---|
| A. Cut the cell-4 effect | Kat, Photoshop | 88 sheets (one cell each) | Solar's own sheet, then the party's 11, then looks |
| B, C | Claude, code only | 0 | — |
| D. Second pose sheet | ChatGPT | 88 (12 fighters + 76 looks) | Solar's own, then the other 11 fighters, then Kat's favourite looks |
| E. Outfit Theurgy cut-in | ChatGPT | up to 76 | Kat's favourite looks |
| F. Theme sheets | ChatGPT | 13 themes (list below) to cover most looks; optional full replacements later (one per element per theme, favourites only) | hearts, then whichever themes her favourites use |
| G. Outfit finish card | ChatGPT | up to 76 | Kat's favourite looks |

Nobody needs to make all of it. Every piece works for one look at a time.

### The 13 themes and which looks would use them (Claude's proposal; Kat can move any look, or leave it plain)

*In the game since Nov 1 2026 (cosmetics.js `THEMES`, used by the HUD frame K and the All-Out burst L). Kat can move any look to another theme, or take it out to leave it plain: tell Claude, it's one line each.*

| Theme | Looks |
|---|---|
| **Hearts** | Date Day, Sugar Rush, Strawberry Milk, Midnight Drive (both), Movie Date (both), After Hours (both), Ringside (both), Sweater Date, Sweater Weather, Cell Block Angel |
| **Sun & moon** | Sun Hoodie, Moon Hoodie, The Sun, Moonlit Hanbok, Night Swim, Summer Festival (both) |
| **Petals** | Summer Yukata (sunflower), Alpha Phi Formal (rose), Archery Club |
| **Stars** | Halloween Witch, Featherman Pink |
| **Bubbles** | Pink Lagoon, Lifeguard on Duty, Boardwalk, Pool Day, Beach Volley, Lifeguard Captain |
| **Music notes** | Encore Stage, Center Stage, Garage Band, Headphones On, Summer Session, Soundcheck, Sigma Chi Runner |
| **Glitter** (rhinestones, sequins) | Stage Idol, Y2K Pop Star, Oops!, Snake Charmer, Limelight (both), Fairground Lights |
| **Snow** | Winter Coat, Harbour Night Coat |
| **Thorns & bats** | Emo Night (Solar and Jihoon), Unravelled, Sheer Nerve, Night Prowl, Bad Influence |
| **Calling cards** | Phantom Thief, Black Suit, Heir's Suit, Pinstripe Detective |
| **Butterflies** | Velvet Attendant |
| **Foxfire** | Kiriko Cosplay |
| **Confetti** | SU eSports Jersey, Little League Legend, Champion's Robe, Morning Roadwork |
| *plain (no theme yet)* | Vice President, Arrivals Gate, Window Seat, Sweet Tooth, HOAX Council Uniform, Off-Day Hoodie, Film Crew, SU Crewneck, Purple Pilates Set, Motorcycle Leathers, Beanie & Apron, Gekkoukan Uniform |

### Cell-4 clean-up checklist (step 1)

Every one of these sheets was made from the prompt that asked for "the skill effect in cell 4", so assume each one has an effect to cut until checked. Open the **source sheet** from `Femc Mode Images/Added to Game/`, remove the effect from cell 4 only (leave the figure and the other five cells exactly as they are; a transparent background is welcome, as in roadmap item 1), and save it into **New Adds** as the same name with `-clean` before `.png` (e.g. `solar-posesheet-clean.png`). Claude re-cuts it.

- **The fighters' own sheets (12):** `solar-posesheet.png` · `akihiko-posesheet.png` · `yukari-posesheet.png` · `junpei-posesheet.png` · `mitsuru-posesheet.png` · `aigis-posesheet.png` · `koromaru-posesheet.png` · `shinjiro-posesheet.png` · `haechan-posesheet.png` · `jungwon-posesheet.png` · `jihoon-posesheet.png` · `minji-posesheet.png`
- **Solar (33):** `sk-yukata.png` (Summer Yukata) · `sk-wintercoat.png` (Winter Coat) · `sk-halloween.png` (Halloween Witch) · `sk-date.png` (Date Day) · `skin-sk-phantom-posesheet.png` (Phantom Thief) · `sk-emo.png` (Emo Night) · `sk-kiriko.png` (Kiriko Cosplay) · `skin-sk-alphaphi-posesheet.png` (Alpha Phi Formal) · `skin-sk-harbourcoat-posesheet.png` (Harbour Night Coat) · `sk-stageidol-solar-posesheet.png` (Stage Idol) · `skin-sk-esports-posesheet.png` (SU eSports Jersey) · `skin-sk-hanbok-posesheet.png` (Moonlit Hanbok) · `skin-sk-vp-posesheet.png` (Vice President) · `sk-velvetroom-solar-posesheet.png` (Velvet Attendant) · `sk-roadwork-solar-posesheet.png` (Morning Roadwork) · `skin-sk-y2k-posesheet.png` (Y2K Pop Star) · `skin-sk-oops-posesheet.png` (Oops!) · `skin-sk-snake-posesheet.png` (Snake Charmer) · `skin-sk-sugarrush-posesheet.png` (Sugar Rush) · `sk-skin-prowl-posesheet.png` (Night Prowl) · `skin-sk-strawberry-posesheet.png` (Strawberry Milk) · ` skin-sk-summersession-posesheet.png` (Summer Session; the file name starts with a space) · `skin-sk-limelight-posesheet.png` (Limelight) · `skin-sk-swim-lagoon-posesheet.png` (Pink Lagoon) · `skin-sk-swim-lifeguard-portraits.png` (Lifeguard on Duty; this file holds the poses, the names were swapped) · `skin-sk-swim-night-posesheet.png` (Night Swim) · `skin-sk-cp-sunmoon-posesheet.png` (Sun Hoodie) · `skin-sk-cp-drive-posesheet.png` (Midnight Drive) · `skin-sk-cp-afterhours-posesheet.png` (After Hours) · `skin-sk-cp-moviedate-posesheet.png` (Movie Date) · `skin-sk-cp-ringside-posesheet.png` (Ringside) · `skin-sk-cp-festival-posesheet.png` (Summer Festival) · `skin-sk-arcana-sun-posesheet.png` (The Sun)
- **Haechan (16):** `skin-sk-haechan-sweater-posesheet.png` · `-headphones-` · `-arrivals-` · `-windowseat-` · `-bad-` · `-garage-` · `-limelight-` · `-unravelled-` · `-fairground-` · `-sweettooth-` · `-suit-` · `-stage-` · `-swim-` · `-cp-sunmoon-` · `-cp-drive-` · `-runners-` (all `skin-sk-haechan-<name>-posesheet.png`)
- **Jungwon (11):** `skin-sk-jungwon-sheer-posesheet.png` · `-pinstripe-` · `-soundcheck-` · `-angel-` · `-sweater-` · `-heir-` · `-stage-` · `-swim-` · `-cp-afterhours-` · `-council-` (all `skin-sk-jungwon-<name>-posesheet.png`) · `skin-sk-jungwon-moviedate-posesheet.png` (Movie Date: no `cp-` in this file name)
- **Akihiko (5):** `skin-sk-akihiko-champ-posesheet.png` · `-hoodie-` · `-swim-` · `-cp-ringside-` · `-cp-festival-`
- **Yukari (3):** `skin-sk-yukari-kyudo-posesheet.png` · `-pink-` · `-swim-`
- **Minji (2):** `skin-sk-minji-crew-posesheet.png` · `skin-sk-minji-su-posesheet.png`
- **Jihoon (2):** `skin-sk-jihoon-pilates-posesheet.png` · `skin-sk-jihoon-emo-posesheet.png`
- **One each:** `skin-sk-junpei-baseball-posesheet.png` · `skin-sk-mitsuru-rider-posesheet.png` · `skin-sk-shinjiro-apron-posesheet.png` · `skin-sk-aigis-uniform-posesheet.png`

If a cell 4 is truly impossible to clean (the effect covers the face or hand), skip it and Claude will mark that one for a redo later. Regenerating is the last resort.

## 5. Build order (agreed)

1. **Kat's transparency and cell-4 pass** (part 4's checklist). Claude re-cuts each `-clean` sheet as it arrives. Can go a few sheets at a time; Solar's own first.
2. **Effect-free cast + layered hand effects (A).** Code: the element glow at the caster's hand, then the hit as now. Works the moment a cleaned sheet is in; an uncleaned sheet keeps its painted effect and simply gets no hand glow (so the two never double up).
3. **Outfit faces and the win screen (B, C).** Code only, no art.
4. **Second pose sheet for the main fighters (D).** Solar's own first, then the other 11 fighters; then Kat's favourite looks.
5. **Outfit Theurgy cut-ins and themed effects (E, F).** Per look, as art arrives; the theme sheets start with hearts.
6. **Outfit finish cards (G).**

The suggestions (S1–S5) slot in wherever Kat likes once approved.

---

## 6. Paste-ready prompts

House rules carried over from the art list: ChatGPT; one picture per chat message; attach in the order given; save into **New Adds** under the Save-as name. When an item moves onto Kat's art list later, Claude copies its attachments into `Place Prompt Attachments` as usual (Kat asked that the art list stay uncluttered for now, so the prompts live here).

### 6.1 Second pose sheet (D)

**Template.** Fill the two square-bracket parts. For a fighter's own look leave out the outfit sentence; for a Wardrobe look paste the look's outfit description (its first-sheet prompt in git history has it word for word, or Claude writes it from the sheet).

Attach: the look's first pose sheet (the `-clean` version if it's done), then the fighter's portrait (`Solar.png` for Solar; `Character Portraits/<Name>/` for the others)
Save as: `<who>-posesheet-2.png` (a fighter's own look) or `skin-<look id>-posesheet-2.png` (a Wardrobe look)
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. [OUTFIT: The outfit and hair are exactly as in the first image: ...] Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the weapon held loosely in the other hand. Cell 2: guarding: braced low, the weapon held across the body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the weapon. Cell 5: badly hurt: standing but hunched, one hand pressed to the side, breathing hard, the weapon lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the weapon ready, [HAIR/CLOTHES] streaming back. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."
*Koromaru:* replace the cells with "1: sitting up alert, ears forward, the knife in his mouth; 2: crouched low, growling; 3: a sideways leap; 4: knocked onto his side, trying to get up; 5: limping, one paw raised; 6: a full-speed run". *Aigis:* "the weapon" is her arm guns; cell 1 is one open hand with the other arm lowered.

**Filled: Solar, her own look.**
Attach: `solar-posesheet-clean.png` (or `solar-posesheet.png` until it's cleaned), then `Solar.png`
Save as: `solar-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit is exactly as in the first image: the black Gekkoukan uniform with the red bow, her naginata, her long straight jet-black hair. Keep the red S.E.E.S. armband on the left arm (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, hair and skirt swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her long hair streaming back. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

**Filled: Solar, Summer Yukata (`sk-yukata`).**
Attach: `sk-yukata-clean.png` (or `sk-yukata.png` until it's cleaned), then `Solar.png`
Save as: `skin-sk-yukata-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, wooden geta, her jet-black hair pinned up with a sunflower, her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, the wide yukata sleeve falling back from her raised forearm, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, sleeves and the loose strands of her hair swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata, the yukata hem pooled around her. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, holding the yukata hem up with one hand, the naginata ready, the sleeves streaming back. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

### 6.2 Outfit Theurgy cut-in (E)

Same layout as the fighter's own cut-in, so the game can keep its crop and timing. Solar's look cut-ins are drawn with Haenim (the game shows the same picture for every Haenim form; Kat can ask for per-form ones later).

**Template.**
Attach: the fighter's own Theurgy cut-in (`theurgy-<who>.png` in Added to Game; Solar: `theurgy-solar-haenim.png`), then the look's pose sheet, then the fighter's portrait
Save as: `skin-<look id>-theurgy.png`

**Filled: Solar, Summer Yukata.**
Attach: `theurgy-solar-haenim.png`, then `sk-yukata.png`, then `Solar.png`
Save as: `skin-sk-yukata-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, her jet-black hair pinned up with a sunflower, a few sunflower petals caught in the light around her. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```
If the face moves or the Persona changes, say: "Keep the first image's layout exactly; change only the clothes and hair."

### 6.3 Themed effect sheet (F)

Same format as the 5F effect sheets: 3 × 2 on solid black, one moment per frame, the game plays it in about 0.4 s with the hit on frame 3. A theme sheet plays on top of the normal element effect, so it's light and airy rather than a full blast.

**Filled: Hearts.**
Attach: `heal.jpeg` (from Added to Game; format and spacing only)
Save as: `theme-hearts.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small glowing pink heart blinks on in the centre. Frame 2: three or four more hearts pop out around it, a soft pink glow gathering. Frame 3, the peak: a burst of glossy hearts of different sizes flying outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the hearts spreading wider, tumbling and turning. Frame 5: the hearts breaking into small pink sparkles. Frame 6: a few last tiny hearts and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, hot pink, soft pink and white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```
If it comes back with grid lines, boxes or a transparent background, say: "Redo it on solid black with no grid lines or boxes."

**Other themes:** same prompt, Save as `theme-<name>.png`, with these frame 1 / peak / colours swapped in:
- *Sun & moon:* a tiny sun and a thin crescent · a burst of little suns and crescents spinning out · warm gold, pink and silver-white
- *Petals:* one petal drifting · a swirl of petals blown outward · pink and cream (sunflower: yellow and gold)
- *Stars:* one twinkling star · a spray of five-pointed stars · gold, white and pale pink
- *Bubbles:* one small bubble · a cloud of round shiny bubbles popping outward · aqua, white and pale pink
- *Music notes:* one note · notes and little sound waves bursting outward · pink, white and neon lime
- *Glitter:* one rhinestone glint · a shower of faceted gems and four-point glints · white, silver and pink
- *Snow:* one snowflake · a flurry of snowflakes spinning out · white and ice blue
- *Thorns & bats:* one small bat silhouette · bats and thorny vines whipping outward · deep red and pink edges around black
- *Calling cards:* one card flipping · playing cards fanning out in a spiral · red, black and white
- *Butterflies:* one blue butterfly · a swarm of glowing blue butterflies · velvet blue and white (the Velvet Room's blue is fine here: it's an effect, not the UI)
- *Foxfire:* one blue-white flame wisp · fox-fire flames and paper charms swirling out · pale blue, white and red
- *Confetti:* one streamer · a pop of confetti and streamers · gold, pink and white

**Later, for favourite looks only (optional):** a full replacement per element, e.g. `fire-hearts.png`: the existing fire prompt with "made of hearts" folded in. Not needed for the first round.

### 6.4 Outfit finish card (G)

Same layout as the existing finish cards: the fighter big on the right, cropped at the waist and bleeding off the edge, big bold slanted words on the left over flat graphic shapes. The words default to the fighter's own finish line (Solar: RISE AND SHINE); Kat can give any look its own.

**Template.**
Attach: the fighter's current finish card (`assets/femc/battle/art/finish/<who>.webp`; Haechan, Jungwon, Jihoon and Minji also have `<who>-alloutattack.png` in Added to Game), then the look's pose sheet, then the fighter's portrait
Save as: `skin-<look id>-finish.png`

**Filled: Solar, Summer Yukata.**
Attach: `finish/solar.webp`, then `sk-yukata.png`, then `Solar.png`
Save as: `skin-sk-yukata-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character is large on the right, cropped at the waist and bleeding off the right edge, turned toward the viewer with a confident finishing pose and a small knowing smile, one hand reaching out; huge bold slanted italic words on the left; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, her jet-black hair pinned up with a sunflower. Same face as the THIRD attached image. Background colours: warm sunflower yellow and hot pink with black, sunflower petals drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```
If the words come back misspelled, say: "Same picture; the words must read exactly RISE AND SHINE."

---

## 7. Technical side (for Claude)

### 7.1 Files and naming

| Art | Source (New Adds) | Game file |
|---|---|---|
| Cleaned first sheet | `<source name>-clean.png` | re-cut over the same `…/<who>-pose-0..5.webp` (fighters `battle/art/poses/`, looks `game/art/skins/<id>/`) |
| Second pose sheet | `<who>-posesheet-2.png` / `skin-<id>-posesheet-2.png` | `<who>-pose-6..11.webp` in the same folder as sheet 1 |
| Outfit cut-in | `skin-<id>-theurgy.png` | `game/art/skins/<id>/<who>-theurgy.webp` (1600 × 900, framing kept, like `femc-theurgy.py cutin`) |
| Theme sheet | `theme-<name>.png` | `battle/art/fx/theme-<name>.webp` via `tools/femc-fx.py` (`NAMES` / `SOURCES`); optional `<kind>-<theme>` the same way |
| Outfit finish card | `skin-<id>-finish.png` | `game/art/skins/<id>/<who>-finish.webp` (1600 × 900, `femc-cards.py finish` logic with a `dst`) |

Cleaned sheets keep their manifest entry (`tools/femc-new-adds.json`: add the `-clean` source, `supersedes` the old one); the old source stays in Added to Game.

### 7.2 Tools
- `tools/femc-wardrobe.py`: `skin` takes an optional `--sheet 2` (writes frames 6..11 on the **same canvas and scale as sheet 1**: read sheet 1's canvas size and the idle frame's feet baseline / figure height and fit sheet 2's figures to them, so the two sheets never jump in size). New commands `theurgy <src> <id> <who>` and `finish <src> <id> <who>`. `scan` adds per skin `poses2: [who]`, `theurgy: [who]`, `finish: [who]` (from files present) to `ready.js`.
- `tools/femc-shadow-poses.py` (fighters' own sheets): a `FIGHTERS2` table for `<who>-posesheet-2.png` → `poses/<who>-pose-6..11.webp`, same canvas rule.
- Re-cutting a `-clean` sheet: same commands as the original; check that frames 0–2, 4, 5 come out byte-identical (they should; only cell 4 changed) and that cell 4's feet stay on the baseline.

### 7.3 cosmetics.js
- ITEMS: optional `fx: '<theme>'` on a skin (the table in part 4), optional `hand: [x%, y%]` (only if a look's cast hand sits elsewhere than its fighter's), optional `finishWords` (documentation only; the words are in the art).
- `battle()` returns, per worn look's `who`: `pose` (as now), `pose2: { who: true }` when ready lists `poses2`, `face: { who: { dir, have: [faces] } }` (from the ready portraits), `theurgy: { who: src }`, `finish: { who: src }`, `theme: { who: '<theme>' }`, `clean: { who: true }` (a cleaned cell 4: ready.js `clean: [who]`, written by scan from the manifest's `-clean` entries, so A only plays for cleaned sheets).
- Header comment: the new art kinds and files.

### 7.4 battle.js
- **Sheet 2 and states:** `FIGHTER_STATES` gains `support: [6]`, `guard: [7]`, `dodge: [8]`, `down: [9]`, `wounded: [10]`, `dash: [11]`. `posedFrames(mid)` returns 12 frames when sheet 2 exists for what's worn (`LOOKS.pose2[mid]`, or `FIGHTER_POSES2` for the fighter's own look), else 6. A state whose frame is missing maps back to sheet 1 (`STATE_FALLBACK = { support: 'cast', guard: 'idle', dodge: 'hurt', down: 'hurt', wounded: 'idle', dash: 'attack' }`) with a CSS nudge class (`.fp-dodge` a short slide, `.fp-down` a tilt and drop) so the fallback still reads. Never mix a look's sheet 1 with the fighter's own sheet 2 (outfit mismatch).
- Where each state plays: support for `use` events of heal / buff / cure / revive / support skills (`D.skills[x].type`); guard on `case 'guard'` (held until that unit's next turn); dodge on `case 'miss'` against a party target; down while `u.down` (held, released on stand-up); wounded replaces idle under 25% HP (`paintFighter`); dash at the start of `allOutSequence`, on `case 'shift'` (baton pass) for the incoming fighter, and on a One More.
- **A (hand effects):** `FIGHTER_HAND = { solar: [x, y], … }` (fraction of the frame canvas, measured once from each fighter's cleaned cell 4; looks share their fighter's unless the item has `hand`). In `case 'use'` for a party caster with a non-physical skill and `LOOKS.clean[mid]` (or the own sheet cleaned): after `animateShadow(fp, 'cast'…)` starts, `FX.charge(el, at, { theme })` at the hand point (~280 ms at 1x, battle speed applies), then the hit as now. Physical skills get no charge (the weapon swing is the effect). Uncleaned sheets: no charge.
- **B (faces):** a `bimg(mid, face)` wrapper used by `fimg` / `setFace` / `pimg` callers for party members only: `LOOKS.face[mid]` with the same face fallback as `cosmetics.portrait` (`[face, 'neutral', have[0]]`), else the base portrait. Skin portraits sit on the base canvas, so `fvars` / `faceFocus` work unchanged. Covers the party cards, turn order, results rows, the stylized Theurgy band and perk cut-ins. Setting `skinFaces` (default on).
- **C (win screen):** `resultsScreen` adds `.bt-res-hero` with `posedFrames(mvp)[5]` (MVP = the fighter `fighterWin` picked; Solar if none), large and bleeding off the right edge, behind the rows; phones put it top-right at reduced size. Reduced motion: no slide-in.
- **E (cut-in):** in `theurgyCut`, if `LOOKS.theurgy[u.mid]`: `e.img` = that, `focus` kept from the fighter's base (the prompt keeps the layout), and `sheet`, `sequence`, `layers` and `video` dropped (they show the base outfit), so `kind` becomes `cut`. Name, line, mechanics and Solar's form name unchanged. Preload it in the `stills` call.
- **G (finish card):** `finishArt(mid)` checks `LOOKS.finish[mid]` first (preloaded at line ~2075 like the others).
- **F (themes):** `fxHitKind` adds `o.theme = LOOKS.theme[src.mid]` for party casters when the `skinFx` setting is on. After the main hit, if the main sheet wasn't a `<kind>-<theme>` replacement, play `theme-<theme>` on top at 0.7 size, starting one frame later.
- **S2:** `allOutSequence` plays `theme-<leader's theme>` small at the cloud's edge twice.
- Settings rows next to `cutins` (and the life sim's game settings → Battle, saved through the handoff like the others): `skinFaces` On / Off, `skinFx` On / Off.

### 7.5 fx.js
- `artFor(kind, o)` order becomes: `<kind>-<o.theme>` (when `o.theme`), then `<kind>-<o.by>`, crit, heavy, plain, borrowed, code. A theme replacement wins over the member's own sheet (Kat's "per-skin effects, falling back to the normal ones").
- `charge(el, at, o)`: a code effect (a small swirl of motes pulled into a point, element colour from `D.elements`, ~0.3 s), optional sheet `charge-<el>` or `charge-<theme>` if the index has one (same 3 × 2 format, later). Reduced motion: a single soft glow; Performance mode: half the motes; Reduce flashes: no white core.
- `theme-*` sheets play as drawn (no tint) unless the index marks them `tint`; add them to `ART_OK` / preload only when a worn look uses them (`attach()` gets the list from battle.js).

### 7.6 Fallbacks (summary)
Every piece checks for its file and silently uses the old behaviour: no sheet 2 → sheet 1 states; no clean cell 4 → painted effect, no charge; no outfit portraits → base faces; no outfit cut-in → the fighter's own cut-in; no theme / setting off → normal effects; no outfit finish card → the fighter's own. Practice (`LOOKS` null) is unchanged throughout.

### 7.7 Tests to extend
- `tests/femc_cosmetics.py --only party,equip`: `battle()` returns pose2 / face / theurgy / finish / theme / clean for a worn look with fake ready entries, and nothing for an unworn one.
- `tests/femc_field_poses.py`: the six new states on real turns (guard, a miss, down, low HP, a heal, a baton pass and an All-Out), with sheet 2 and without (fallback frame + class); a look with sheet 1 only never shows the base sheet 2; the hand charge plays only for a cleaned sheet and only for magic.
- `tests/femc_fx_art.py`: the pick order with `o.theme` (replacement > member > crit > heavy > plain), the overlay when there's no replacement, `charge` with and without a sheet, reduced motion / Performance.
- `tests/femc_theurgy.py`: an outfit cut-in replaces the art and drops sheet / sequence / layers; without one the fighter's own plays; Solar's form name stays.
- `tests/femc_building.py --only searchers`: an outfit finish card in a real All-Out.
- Results screen: the hero pose, by MVP and with a worn look (add to `femc_field_poses.py`, desktop and phone shots).
- Bumps when built: `ART_V`, battle.js, fx.js, cosmetics.js, ready.js `?v=` (both pages where loaded).

### 7.9 Built (Nov 1 2026)
- **B, outfit faces:** `battle.js skinFace` inside `pimg` (party cards, turn order, results, the All-Out portraits, Theurgy band, perk cut-ins); `cosmetics.js battle()` returns `face`, `look`, `clean`, `hand` per worn look. Setting `skinFaces` (On / Off), both settings panels.
- **C, win screen:** `resultsScreen` shows `.bt-res-heroW > .bt-res-hero` (pose 5 of the look worn by the fighter `fighterWin` picked, Solar if none; `battle.css`, phones top right, no slide-in under reduced motion). Only with a worn look: a fighter in their own clothes keeps the old results screen.
- **A, hand charge:** `fx.js charge(kind, at)` (motes pulled in, a glow, the element's sheet small; Performance half the motes and no sheet, Reduce flashes no white core, reduced motion one soft glow; `chargeLog` test hook) called by `battle.js castCharge` after the cast pose starts, only for non-physical skills and only when `castClean(mid)`: a worn look marked clean (`cosmetics.js` ITEMS `clean: true`, or its `CLEAN` list, or a ready.js `skins[id].clean` list), or a fighter's own sheet in `FIGHTER_CLEAN`. Hand points: `FIGHTER_HAND` (measured from each pose-3 frame; an item's `hand: [x, y]` overrides; `HAND_DEFAULT` [0.5, 0.3]). Setting `skinFx` (On / Off) gates it. **No look is marked clean yet.** To switch one on once Kat's recut is final: `python3 tools/femc-wardrobe.py skin "<…/RECUTS - PHOTOSHOP EDITS/<sheet>.png>" <look id> <who>` (transparent sheets fine), then add `clean: true` to that look's ITEMS entry.
- **Retired looks:** `retired: true` on an item (Kiriko Cosplay, Nov 1) hides it everywhere and takes it off a save that wears it (cosmetics.js header).
- Tests: `femc_cosmetics.py --only inbattle,retired`, `femc_fx_art.py` (section 6, the charge).

### 7.8 Open questions for Kat
1. The 13 themes and who gets which (part 4): move, rename or add any.
2. Solar's outfit cut-ins: one picture with Haenim for every form (proposed), or per form for favourites?
3. Finish-card words: always the fighter's own line, or a line per look?
4. Do suggestions S1–S5 go in?

---

## 8. More pieces Kat approved (Nov 1): One More eyes, entrance card, couple Showtime, theme frames, the All-Out cloud

Same rules as part 6: ChatGPT unless noted, one picture per message, attach in order, save into **New Adds**. Every piece falls back to today's behaviour for a look without its art.

| # | Piece | What the player sees | Art |
|---|---|---|---|
| H | **"One More!" eye cut-in** | Hit a weakness: a thin strip slams across the screen showing the fighter's eyes and brow in their look (the P3 Reload "One More" cut-in), then slides off. | One wide strip per look (and one per fighter's own look) |
| I | **Battle-start entrance card** | As a fight opens, the leader's look flashes on in a quick slanted card (Persona 5 style) before the HUD settles. | One card per look; Solar's looks first |
| J | **Couple Showtime** | Both halves of a couple set in the party: their Bond skill plays a special cut-in of the two of them in the matching outfits. | One picture per couple set (six sets) |
| K | **Theme frame on the HUD card** | A fighter wearing a themed look gets a faint frame of that theme (hearts, stars, petals…) around their HUD card. | One small frame per theme (13; Gemini or ChatGPT) |
| L | **Theme in the All-Out cloud** | Hearts / petals / stars burst out of the All-Out dust cloud when the leader's look has a theme. | None: reuses the theme sheets (part 6.3) |

### 8.1 "One More!" eye cut-in (H)
Attach: the look's scene portrait sheet (`skin-<look id>-portraits.png`; a fighter's own look: their `Character Portraits/<Name>/` neutral face), then the fighter's portrait
Save as: `skin-<look id>-onemore.png` (own look: `<who>-onemore.png`)
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Hair and any hair accessories exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```
If the eyes come back too small, say: "Zoom in much closer: only the eyes and eyebrows should fill the banner."
*Start with:* Solar's own look, then her favourite outfits, then Haechan and Jungwon.

### 8.2 Battle-start entrance card (I)
Attach: the look's pose sheet, then the fighter's portrait
Save as: `skin-<look id>-entrance.png` (own look: `<who>-entrance.png`)
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image, shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the weapon swung over one shoulder, coat or hair whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```
If the outfit changes, say: "Keep the outfit exactly as in the first image."

### 8.3 Couple Showtime (J)
Attach: her half's pose sheet, then his half's pose sheet, then `Solar.png`, then his portrait (`Character Portraits/<Name>/`)
Save as: `couple-<set id>-showtime.png` (set ids: `sunmoon`, `drive`, `afterhours`, `moviedate`, `ringside`, `festival`)
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit, hair and naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit, hair and weapon). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of hot pink and black energy with [THEME: e.g. little suns and crescent moons / hearts / petals] streaming across. No text, no letters, no logos.
```
Fill the bracket with the set's theme. If either outfit drifts, say: "Keep both outfits exactly as in their attached images."

### 8.4 Theme frame for the HUD card (K)
Gemini works well for this one (flat graphic art). One frame per theme.
Attach: nothing
Save as: `frame-<theme>.png` (e.g. `frame-hearts.png`)
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a pure solid green (#00FF00) background. Only the border is drawn: a thin elegant outline with small [THEME: hearts] clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty solid green. Flat graphic style, crisp clean edges, hot pink, soft pink and white. No text, no characters, no shadows, no gradients on the green.
```
Swap the theme words and colours from the part 6.3 list.

### 8.5 Technical notes (for Claude)
- **H:** `battle.js` weakness hook (where the `weak` sheet plays): if `art/skins/<look>/onemore.webp` (or `art/onemore/<who>.webp`) exists, slide a `.bt-onemore` strip across (CSS, ~550 ms at 1x, battle speed applies; reduced motion: a fade; Off with Persona cut-ins Off / Rush: skip). Cut with a new `femc-wardrobe.py onemore SRC LOOK` (crop to 6:1, WebP).
- **I:** `intro` in battle.js: after the encounter flash, before the HUD, a 700 ms `.bt-entrance` card of the leader's look; skipped on Rush, auto-battle chains and the second fight of a chain; a setting "Entrance cards" (On / Off).
- **J:** `bonds.js` versions: a bond whose two members both wear halves of one couple set (`couple` field) plays `couple-<set>-showtime.webp` as its still / first panel (`playSeq` single panel), else its normal version.
- **K:** `.bt-card` gets `--frame: url(frame-<theme>.webp)` as a border-image overlay at 0.6 opacity when the look has a `theme` and the frame exists; green keyed by `femc-greens.py`.
- **L:** `allOutSequence`: two small `theme-<leader theme>` plays at the cloud's edges (needs the part 6.3 sheets).
- **Tests:** extend femc_cosmetics (fallbacks, ready flags) and a real fight in femc_building for each hook.

### 8.6 Built (Nov 1 2026)
Every piece plays today with a built-in version and switches to Kat's picture the moment its file is cut in (`tools/femc-wardrobe.py … ` runs `scan`, which lists it in `ready.js`; bump ready.js's `?v=`). Story fights only (practice has no Wardrobe).
- **H, One More eye strip:** `battle.js oneMoreStrip` (in the party's `onemore` beat, in place of the old portrait band). Built-in: the fighter's current battle face (outfit faces included) cropped to the eyes and brows over pink / black diagonal stripes with speed lines (`.bt-om`, battle.css). Art: `skin-<look>-onemore.png` → `python3 tools/femc-wardrobe.py onemore <src> <look id> [who]` (centre-cropped 6:1, 1800 × 300, `skins/<id>/<who>-onemore.webp`); a fighter's own look: `onemore <src> own <who>` → `art/onemore/<who>.webp`. Persona cut-ins Off and Rush keep the old band; reduced motion fades it; Performance / Reduce flashes stop the moving lines.
- **I, entrance card:** `battle.js entranceCard` (after the encounter flash). Built-in: the look's idle pose (or the fighter's own) on slanted pink / black shards with the look's name and a few theme motifs (`.bt-entrance`). Art: `entrance <src> <look id | own> [who]` (16:9, 1600 × 900). Setting **Entrance cards** (On / Off, both settings panels). Skipped in Rush, the epilogue's stage fights and a chain: a fight starting within 8 s of the last one, and every ordinary fight of a Tartarus night after its first (strong rooms, the Reaper and bosses still get one). Reduced motion: a plain fade.
- **J, couple Showtime:** `battle.js bondCut` + `coupleSet`: Solar and her bond partner both wearing one couple set (`couple` field), Outfit effects on. Built-in: both victory poses side by side over the bond's own still (or its drawn duo background) with the set's theme sparkling between them (kind `couple`). Art: `couple-<set>-showtime.png` → `showtime <src> <set>` (`sunmoon` or `cp-sunmoon`; `art/couples/cp-<set>-showtime.webp`), played as the bond's single still. The bond's lines stay its own.
- **K, theme frame:** every look has a `theme` (cosmetics.js `THEMES`, part 4's table). `battle.js themeFrame` puts a thin outline and the theme's little motifs (battle.js `THEME_ART` / `THEME_SVG`: hearts, sun & moon, petals, stars, bubbles, notes, glitter, snow, thorns & bats, cards, butterflies, foxfire, confetti) in the card's corners at about 0.6 opacity. Art: `frame-<theme>.png` on flat green → `frame <src> <theme>` (keyed like femc-greens.py, 1000 × 400, `art/frames/<theme>.webp`). Setting Outfit effects.
- **L, All-Out theme burst:** `battle.js themeBurst` (the starter's theme, else the leader's): two bursts of motifs flying out of the cloud's edges; with a `theme-<id>` sheet (tools/femc-fx.py now knows the 13 `theme-*` names; part 6.3's prompts) the sheet plays there instead. Performance: fewer motifs; reduced motion: they fade in place. Setting Outfit effects.
- **Data:** cosmetics.js `battle()` also returns `theme`, `name`, `couple`, `onemore`, `entrance` per fighter and `showtime`, `frames`; ready.js gains per-skin `onemore` / `entrance` and top-level `own`, `couples`, `frames`.
- **Tests:** `python3 tests/femc_skins_battle.py` (data, tools, fallback, art, settings: every built-in version and every art path in real fights, screenshots at 1440 × 900 and 390 × 844).

