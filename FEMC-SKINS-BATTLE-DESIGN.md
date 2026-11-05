# Skins in battle: design sheet

*Persona 3: Solstice · Kat's decisions of Nov 1 2026 · Nov 4: the new outfits moved here from the main art list, the rest is low priority · reorganised Nov 1: every prompt written out, by fighter, then by look · refreshed Nov 1: only what's still to make · personalised Nov 1: every look has its own look bible*

**New direction (Kat, Nov 1):** each Wardrobe look now has its own **look bible** (palette, vibe, motifs, light, scene) at the top of its block, and every prompt's background, colours, light and effects follow it; only the fighters' own (base game) looks keep the pink-and-black Solstice palette.

When a fighter wears a Wardrobe look, the whole fight shows it: the figure, the faces, the win screen, the cut-ins, the effects and the finish card. Looks stay looks: **no stats, ever.** The technical side is in `FEMC-SKINS-BATTLE-TECH.md`, for Claude.

## How to use

1. Pick a fighter, then a look. Everything still to make for that look is in one block, in order: pose sheet, Theurgy cut-in, eye strip, entrance card, finish card, signature effect sheet (N). Pieces already in the game are gone from this sheet.
2. For each piece: open a new ChatGPT message, attach the files on its **Attach** line in that order (all inside `Femc Mode Images/`), paste the prompt, send.
3. Save the picture into **New Adds** under its **Save as** name, and tell Claude. One picture per message.
4. You don't have to make everything: a piece you skip just uses the fighter's usual version in the game.

**Made so far (Nov 4 2026):** 497 pieces in the game, so they're off this list: 84 second pose sheets, 84 "1 MORE!" strips, 83 entrance cards, 72 Theurgy cut-ins, 72 finish cards, 72 signature effect sheets, all 6 couple Showtimes, 12 theme effect sheets and 12 HUD frames. Every fighter's own look is done (Koromaru's too, Nov 4), and every Wardrobe look of Solar, Haechan, Jungwon, Yukari, Minji, Jihoon and Mitsuru. (The 75 Evoker close-up prompts are parked in `FEMC-SKINS-EVOKER-PROMPTS.md`; optional remakes of the made pieces with the new look bibles, 180 prompts, are in `FEMC-SKINS-REMAKES.md`.)

> **Start here: the new looks (moved from the main art list, Nov 4)**
> 1. **Solar's new looks** (Solar's new looks): 11 skin-series outfits (Tarot Arcana, Midnight Chapel, Wildflower Cottage) and 8 collab outfits. Each has three prompts: its pose sheet, its scene portraits, then a second pose sheet made from the finished first one.
> 2. **The collab couple partners** (Haechan → New looks, Jungwon → New looks): Tuxedo Mask, Clawd and Miles; Syaoran and Howl. Make both pose sheets of a couple set in the same chat so the colours match.
> 3. That's 72 prompts for 24 outfits. Their battle pieces (Theurgy cut-in, "1 MORE!" strip, entrance and finish cards, signature effect sheet) aren't written yet: Claude writes them once an outfit is in the game.
>
> **Low priority (Kat, Nov 4): everything else on this sheet.** Off-Day Hoodie (Akihiko), Beanie & Apron (Shinjiro) and Gekkoukan Uniform (Aigis), each with its scene portraits and six battle pieces; Little League Legend's entrance card (Junpei); the foxfire theme sheet and frame (its only look is retired for now); and the cell-4 clean-up checklist. 24 prompts.
>
> Want the made pieces redone in their look's own colours? That's optional: `FEMC-SKINS-REMAKES.md`.
>
> **New (Nov 1):** the "1 MORE!" strip plays in two beats when a look has two pictures: v1 (the sideways glance) slides in, then a pink-white flash and a slash switch to v2 (looking front, the sun in her eyes) with a little glint on each eye (the game finds where her eyes are on each v2 picture, so the glints land on them). Alpha Phi Formal has two second pose sheets: V1 plays by default, V2 on about half the fights (a coin flip each fight). Tell Claude if you'd rather have only one.

### Piece M: the Evoker close-up
Its 75 prompts live in their own file, `FEMC-SKINS-EVOKER-PROMPTS.md`, to come back to later.

### The pieces

| Piece | What the player sees | Still to make |
|---|---|---|
| Second pose sheet | Six more poses: support cast, guard, dodge, knocked down, badly hurt, dash-in | 22 (1 own look + 21 Wardrobe looks) |
| Theurgy cut-in | The Theurgy cut-in shows the fighter in the look | 21 (Wardrobe looks; own looks already have theirs) |
| "1 MORE!" eye strip | Hit a weakness: a thin strip of the fighter's eyes slams across the screen | 22 |
| Entrance card | As a fight opens, the leader's look flashes on in a slanted card | 22 |
| Finish card | The All-Out finish card shows the look | 21 (Wardrobe looks) |
| Signature effect sheet (N) | That look's own effect (calling cards, firework sparks, rain streaks…), drawn in its own colours on solid black. The game layers it on that look's skills, its All-Out burst and ▶ Try it on; until it's made, the look uses its shared theme sheet | 22 (Solar's 32, 14 of Haechan's and 7 other looks are in) |
| Evoker close-up (M) | The close-up of the fighter raising the Evoker to their temple when they summon shows the look | 75 (32 of Solar's looks + 43 Wardrobe looks) |
| Couple Showtime | Both halves of a couple set fighting together get a special Bond cut-in | 2 (Ringside, Summer Festival) |
| Theme effect sheet | Skills sprinkle the look's theme (hearts, petals, stars…) over the normal effect | 1 (foxfire) |
| HUD frame | A faint frame of the theme around the fighter's HUD card | 1 (foxfire) |

Already built in the game with no art needed: outfit faces in battle, the victory pose on the win screen, the theme bursting out of the All-Out cloud, and the ▶ Try it on button in the Wardrobe. Settings: *Outfit faces in battle*, *Outfit effects* and *Entrance cards* (each On / Off).

### Backgrounds

| Kind of picture | Background |
|---|---|
| Pose sheets and HUD frames | **Transparent** |
| Theme effect sheets and signature effect sheets (N) | **Solid black**: glowing effects come out better keyed from black than with ChatGPT's transparency (soft glows turn muddy or get cut off). |
| Theurgy cut-ins, finish cards, entrance cards, eye strips, couple Showtimes, Evoker close-ups | **Their own full background** (they fill the screen) |

If a transparent one comes back with a background anyway, that's fine: Claude cuts it out.

### If something comes back wrong

| Problem | Say |
|---|---|
| Poses overlap (pose sheet) | "Redo it with more empty space between the poses." |
| Face or Persona moved (Theurgy cut-in) | "Keep the first image's layout exactly; change only the clothes and hair." |
| Eyes too small (eye strip) | "Zoom in much closer: only the eyes and eyebrows should fill the banner." |
| Outfit changed (entrance card, Showtime) | "Keep the outfit exactly as in the first image." |
| Words misspelled (finish card) | "Same picture; the words must read exactly …" (with the card's words) |
| Grid lines, boxes or transparency (theme or signature effect sheet) | "Redo it on solid black with no grid lines or boxes." |

Finish cards use the fighter's own finish line (listed at the top of each fighter). To give a look its own words, change the last sentence of its prompt.

---

## Solar

All 32 of her looks have every piece in the game, signature effect sheets included (Nov 2), so nothing is left to make here. Remakes of their older pink-and-black pieces are optional, in `FEMC-SKINS-REMAKES.md`. Her own look keeps the pink-and-black Solstice palette.

---

## Solar's new looks

Moved from the main art list (Nov 4). These outfits aren't in the game yet: make the pose sheet first, then its scene portraits; the second pose sheet uses the finished first one. Their battle pieces (Theurgy cut-in, "1 MORE!" strip, entrance and finish cards, signature effect sheet) get written once the outfit is in.

### Skin series: Tarot Arcana, Midnight Chapel, Wildflower Cottage

Kat's picks (Oct 31): three series, four looks each, each with its own banner. Every look is a pose sheet plus scene portraits, like the Wardrobe outfits already in the game.

**Tarot Arcana**

### The Moon · `sk-arcana-moon` (was 19C / 19D on the main list)

Tarot Arcana. A midnight-blue slip dress, a sheer veil and moon-phase jewellery; long loose hair with silver tinsel.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: an ankle-length deep midnight-blue silk slip dress, a sheer silver-flecked veil draped from the crown of her head over her shoulders, a choker of tiny silver moon phases, silver crescent earrings, silver sandals, a thin silver anklet. Hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear. Her naginata's haft wrapped in silver, a crescent moon at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a deep midnight-blue silk slip dress, a sheer silver-flecked veil over her head and shoulders, a choker of tiny silver moon phases, silver crescent earrings, cool blue moonlight and a faint silver mist. Hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-arcana-moon-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an ankle-length deep midnight-blue silk slip dress, a sheer silver-flecked veil draped from the crown of her head over her shoulders, a choker of tiny silver moon phases, silver crescent earrings, silver sandals, a thin silver anklet. Hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear. Her naginata's haft wrapped in silver, a crescent moon at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### The Star · `sk-arcana-star` (was 19E / 19F on the main list)

Tarot Arcana. A sheer pale pink layered dress covered in tiny stars, barefoot; a high ponytail with pastel pink and silver streaks.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a sheer pale pink layered tulle dress to mid-calf covered in tiny embroidered silver stars, puffed off-shoulder sleeves, barefoot with a silver star anklet, a small star-shaped glass pendant. Hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side. Small silver star charms hanging from her naginata's collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a sheer pale pink tulle dress covered in tiny embroidered silver stars with puffed off-shoulder sleeves, a small star-shaped glass pendant, soft twilight with tiny stars twinkling around her. Hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-arcana-star-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a sheer pale pink layered tulle dress to mid-calf covered in tiny embroidered silver stars, puffed off-shoulder sleeves, barefoot with a silver star anklet, a small star-shaped glass pendant. Hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side. Small silver star charms hanging from her naginata's collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### The Lovers · `sk-arcana-lovers` (was 19G / 19H on the main list)

Tarot Arcana. A red-and-black corset dress with a heart locket and rose vines; Hollywood waves pinned with a red rose.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a red-and-black corset dress with a sweetheart neckline, a full black skirt lined in red, thin rose vines embroidered climbing up one side, a heart-shaped gold locket, black lace gloves, red heels. Hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends. A rose vine twined along her naginata's haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a red-and-black corset dress with a sweetheart neckline and embroidered rose vines, a heart-shaped gold locket, black lace gloves, warm candlelight and a few drifting rose petals. Hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-arcana-lovers-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a red-and-black corset dress with a sweetheart neckline, a full black skirt lined in red, thin rose vines embroidered climbing up one side, a heart-shaped gold locket, black lace gloves, red heels. Hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends. A rose vine twined along her naginata's haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

**Midnight Chapel**

### Black Rose · `sk-chapel-rose` (was 19I / 19J on the main list)

Midnight Chapel. A gothic lolita dress with lace, a rose corsage and a tiny top hat; ringlet pigtails with black bows.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a black gothic lolita dress with a bell-shaped skirt over layers of black and pink lace petticoat, puffed sleeves, a black rose corsage at the collar, a tiny black top hat with a short lace veil tilted on her head, black-and-pink striped stockings, black platform Mary Janes. Hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail. A black rose tied at her naginata's collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a black gothic lolita dress with pink lace trim and a black rose corsage at the collar, a tiny black top hat with a short lace veil tilted on her head, dim candlelit chapel light. Hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-chapel-rose-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black gothic lolita dress with a bell-shaped skirt over layers of black and pink lace petticoat, puffed sleeves, a black rose corsage at the collar, a tiny black top hat with a short lace veil tilted on her head, black-and-pink striped stockings, black platform Mary Janes. Hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail. A black rose tied at her naginata's collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Cathedral Veil · `sk-chapel-veil` (was 19K / 19L on the main list)

Midnight Chapel. A long black lace gown, a cathedral-length veil and a pink bead belt; a sleek low bun under the veil.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a long black lace gown with a high neck and long sheer sleeves, a cathedral-length black lace veil trailing far behind her, a belt of pink beads and small silver crosses at the waist like a rosary, black pointed boots. Hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips. Her naginata wrapped in black lace ribbon. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a high-necked black lace gown, a long black lace veil over her hair, a string of pink beads and a small silver cross at her collar, coloured light from a stained-glass window falling across her. Hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-chapel-veil-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long black lace gown with a high neck and long sheer sleeves, a cathedral-length black lace veil trailing far behind her, a belt of pink beads and small silver crosses at the waist like a rosary, black pointed boots. Hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips. Her naginata wrapped in black lace ribbon. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Vampire Ball · `sk-chapel-vampire` (was 19M / 19N on the main list)

Midnight Chapel. A red velvet off-shoulder gown and a high-collared cape; a dramatic half-up updo with a deep red streak.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a red velvet off-shoulder ball gown with a corseted bodice, a black high-collared cape lined in red falling from her shoulders, a black choker with a red teardrop gem, long black gloves, black heels. Hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front. Her naginata's blade tinted red, with a bat-wing guard. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a red velvet off-shoulder gown, a black high-collared cape lined in red rising behind her neck, a black choker with a red teardrop gem, candlelight in a dark ballroom with a faint red glow. Hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-chapel-vampire-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a red velvet off-shoulder ball gown with a corseted bodice, a black high-collared cape lined in red falling from her shoulders, a black choker with a red teardrop gem, long black gloves, black heels. Hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front. Her naginata's blade tinted red, with a bat-wing guard. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Graveyard Picnic · `sk-chapel-picnic` (was 19O / 19P on the main list)

Midnight Chapel. A black pinafore with pink cross-stitch, a parasol and a picnic basket; two fluffy space buns with pink ribbons.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a black pinafore dress over a white puff-sleeved blouse, pink cross-stitch along the hem and the straps, white frilly socks and black Mary Janes, a black lace parasol over one shoulder and a small wicker picnic basket on her arm in cells 1 and 6. Hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back. A pink ribbon bow on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a black pinafore dress with pink cross-stitch over a white puff-sleeved blouse, a black lace parasol over one shoulder, soft grey overcast daylight with a few autumn leaves. Hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-chapel-picnic-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black pinafore dress over a white puff-sleeved blouse, pink cross-stitch along the hem and the straps, white frilly socks and black Mary Janes, a black lace parasol over one shoulder and a small wicker picnic basket on her arm in cells 1 and 6. Hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back. A pink ribbon bow on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

**Wildflower Cottage**

### Meadow Picnic · `sk-cottage-meadow` (was 19Q / 19R on the main list)

Wildflower Cottage. A puff-sleeved floral prairie dress and a straw basket; two loose braids woven with wildflowers.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a puff-sleeved cream prairie dress printed with small pink and yellow wildflowers, a lace collar, a ruffled hem at the ankle, brown lace-up boots, a straw basket of flowers on her arm in cells 1 and 6. Hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers. Wildflowers tied at her naginata's collar with twine. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a puff-sleeved cream prairie dress printed with small pink and yellow wildflowers, a lace collar, golden afternoon light in a meadow. Hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-cottage-meadow-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a puff-sleeved cream prairie dress printed with small pink and yellow wildflowers, a lace collar, a ruffled hem at the ankle, brown lace-up boots, a straw basket of flowers on her arm in cells 1 and 6. Hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers. Wildflowers tied at her naginata's collar with twine. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Bakery Morning · `sk-cottage-bakery` (was 19S / 19T on the main list)

Wildflower Cottage. A pink gingham apron over a cream blouse, flour on her cheek; a messy bun with a pink kerchief.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a pink gingham apron over a cream blouse with rolled sleeves, a brown knee-length skirt, cream socks and brown loafers, a little flour on one cheek and on her hands, a wooden rolling pin tucked in the apron pocket. Hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front. A pink gingham ribbon on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a pink gingham apron over a cream blouse with rolled sleeves, a little flour on one cheek, warm early-morning bakery light. Hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-cottage-bakery-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a pink gingham apron over a cream blouse with rolled sleeves, a brown knee-length skirt, cream socks and brown loafers, a little flour on one cheek and on her hands, a wooden rolling pin tucked in the apron pocket. Hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front. A pink gingham ribbon on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Rainy Greenhouse · `sk-cottage-greenhouse` (was 19U / 19V on the main list)

Wildflower Cottage. A cream knit cardigan, rain boots and a clear umbrella; half-up hair with a butterfly clip and pink sun-kissed ends.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a chunky cream knit cardigan over a pale pink sundress, glossy pink rain boots, a clear bubble umbrella in cells 1 and 6, a small garden trowel at her belt. Hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp. Raindrops beading on her naginata, a small leaf charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a chunky cream knit cardigan over a pale pink sundress, soft grey rain light through greenhouse glass with green plants behind her. Hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-cottage-greenhouse-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a chunky cream knit cardigan over a pale pink sundress, glossy pink rain boots, a clear bubble umbrella in cells 1 and 6, a small garden trowel at her belt. Hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp. Raindrops beading on her naginata, a small leaf charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Harvest Festival · `sk-cottage-harvest` (was 19W / 19X on the main list)

Wildflower Cottage. A laced bodice over a long tiered skirt and a flower crown; a long waterfall braid.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a brown corset-laced bodice over a cream blouse, a long tiered skirt in rust, mustard and pink, a crown of dahlias and wheat, a woven shawl over her shoulders, brown boots. Hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through. Wheat and ribbon tied at her naginata's collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a brown corset-laced bodice over a cream blouse, a crown of dahlias and wheat, a woven shawl, warm lantern light at dusk. Hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 3. Second pose sheet

Attach: `skin-sk-cottage-harvest-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a brown corset-laced bodice over a cream blouse, a long tiered skirt in rust, mustard and pink, a crown of dahlias and wheat, a woven shawl over her shoulders, brown boots. Hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through. Wheat and ribbon tied at her naginata's collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Later: Magical Girl Solstice (pitch, not written yet)
Kat likes it; saved for a later series.
- **Sunrise Form:** a white-and-pink sailor-collar dress with a gold sun brooch and ribbon wings at the back; hair in two long high twin tails with pink tips and sun-shaped clips.
- **Moonlight Form:** a black-and-silver version with a crescent tiara and a sheer star-printed cape; hair in a single long braid threaded with silver ribbon.
- **Eclipse Form:** the final form, black and hot pink with a corona-shaped collar; hair loose, waist-length, with a pink ombré that glows at the ends.
- **Off-Duty Disguise:** her everyday look with a plush mascot on her shoulder and a compact mirror on a chain; hair in a messy bun with one pink streak.

### Collab outfits

Cosplay looks from games, anime, TV and movies, for the fighters (it's a fan game). Each look is a pose sheet plus scene portraits. The prompts describe the outfits only by how they look: no logos, no printed names. Five are couple sets (Solar with Haechan or Jungwon): make both pose sheets of a set in the same chat so the colours match.

### Stella, Winx Club · `sk-collab-stella` (was 21A / 21B on the main list)

The sun fairy, the costume Hyein picked for her that Runners Halloween: glittering orange and pink, little wings, and Stella's long golden hair.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a glittering orange satin halter crop top, a short sparkly orange-and-pink mini skirt, small clear sheer fairy wings edged in gold on her back, a thin gold tiara band across her forehead with a small sun gem, gold sparkle make-up under her eyes, orange-and-pink platform sandals with straps up the calf, gold wrist cuffs. Hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full. Her naginata styled like a golden sun sceptre, a glowing sun orb at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a glittering orange satin halter top, small clear sheer fairy wings edged in gold behind her shoulders, a thin gold tiara band with a small sun gem, gold sparkle make-up under her eyes, warm golden sparkle light. Hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-stella-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a glittering orange satin halter crop top, a short sparkly orange-and-pink mini skirt, small clear sheer fairy wings edged in gold on her back, a thin gold tiara band across her forehead with a small sun gem, gold sparkle make-up under her eyes, orange-and-pink platform sandals with straps up the calf, gold wrist cuffs. Hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full. Her naginata styled like a golden sun sceptre, a glowing sun orb at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Sailor Moon · `sk-collab-sailor` (was 21C / 21D on the main list)

Couple set with Haechan's Tuxedo Mask. The classic sailor-guardian uniform; odango buns and very long twin tails in her own black hair, tipped gold.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a white sailor-guardian leotard with a navy-blue sailor collar edged in white stripes, a big red bow at the chest with a gold crescent brooch, a short navy pleated mini skirt, a small red bow at the back, long white gloves with red cuffs, red knee-high boots with a white crescent at the top, a gold tiara with a red gem, red crescent earrings. Hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns. Her naginata's top styled like a pink-and-gold moon wand, a gold crescent at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a white sailor-guardian top with a navy sailor collar and a big red bow with a gold crescent brooch, a gold tiara with a red gem, red crescent earrings, soft pink moonlight sparkle. Hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-sailor-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a white sailor-guardian leotard with a navy-blue sailor collar edged in white stripes, a big red bow at the chest with a gold crescent brooch, a short navy pleated mini skirt, a small red bow at the back, long white gloves with red cuffs, red knee-high boots with a white crescent at the top, a gold tiara with a red gem, red crescent earrings. Hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns. Her naginata's top styled like a pink-and-gold moon wand, a gold crescent at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Draculaura, Monster High · `sk-collab-ghoul` (was 21G / 21H on the main list)

Couple set with Haechan's Clawd. The sweet vampire in pink and black, bat bows and heart details; black pigtails with hot-pink streaks.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a black off-shoulder top with pink lace trim and a little bat-wing collar, a layered pink-and-black tulle mini skirt printed with tiny bats and hearts, black lace fingerless gloves, a black choker with a pink heart and bat charm, pink heart earrings, black lace-up platform boots with pink hearts on the sides, a small pink heart drawn under one eye, two tiny cute vampire fangs in her smile. Hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe. Her naginata's haft striped pink and black, a pink bat charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a black off-shoulder top with pink lace trim and a bat-wing collar, a black choker with a pink heart and bat charm, pink heart earrings, a small pink heart under one eye, tiny cute vampire fangs, a spooky pink-and-purple glow. Hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-ghoul-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black off-shoulder top with pink lace trim and a little bat-wing collar, a layered pink-and-black tulle mini skirt printed with tiny bats and hearts, black lace fingerless gloves, a black choker with a pink heart and bat charm, pink heart earrings, black lace-up platform boots with pink hearts on the sides, a small pink heart drawn under one eye, two tiny cute vampire fangs in her smile. Hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe. Her naginata's haft striped pink and black, a pink bat charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Sukajan Kiriko, Overwatch · `sk-collab-sukajan` (was 21K / 21L on the main list)

Her main again, street style this time (she already has the shrine-robe Kiriko Cosplay): an embroidered souvenir jacket and cargo pants; high ponytail with red streaks.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: an oversized black-and-red satin souvenir jacket embroidered with a white fox and cherry blossoms on the sleeves, worn slipping off one shoulder, a fitted black crop top, high-waisted wide black cargo pants with red straps, black-and-white sneakers, black fingerless gloves, a kunai holster at the thigh, a small red fox-mask charm at the belt. Hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon. Blank paper ofuda charms (no writing) streaming from her naginata's collar, a fox-mask charm on the haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: an oversized black-and-red satin souvenir jacket embroidered with a white fox and cherry blossoms, slipping off one shoulder, a fitted black crop top, neon street-night light. Hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-sukajan-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an oversized black-and-red satin souvenir jacket embroidered with a white fox and cherry blossoms on the sleeves, worn slipping off one shoulder, a fitted black crop top, high-waisted wide black cargo pants with red straps, black-and-white sneakers, black fingerless gloves, a kunai holster at the thigh, a small red fox-mask charm at the belt. Hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon. Blank paper ofuda charms (no writing) streaming from her naginata's collar, a fox-mask charm on the haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Cardcaptor Sakura · `sk-collab-cardcaptor` (was 21M / 21N on the main list)

Couple set with Jungwon's Syaoran. A pink-and-white battle dress with a winged hat and a star wand; a playful short bob.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a pink-and-white puffy dress with a short bell skirt and white frills, a big pink bow at the chest, a white hat with small white wings and a pink ribbon, white gloves, white-and-pink boots with small wings at the ankles. Hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips. Her naginata's top styled like a pink star wand with small white wings at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a pink-and-white puffy dress with white frills and a big pink bow, a white hat with small white wings and a pink ribbon, soft pink sparkles and cherry-blossom light. Hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-cardcaptor-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a pink-and-white puffy dress with a short bell skirt and white frills, a big pink bow at the chest, a white hat with small white wings and a pink ribbon, white gloves, white-and-pink boots with small wings at the ankles. Hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips. Her naginata's top styled like a pink star wand with small white wings at the base of the blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Wednesday · `sk-collab-wednesday` (was 21Q / 21R on the main list)

The black dance dress and the white collar, completely unimpressed; two long braids with one silver streak in the fringe.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a knee-length black dance dress with a layered ruffled tulle skirt and long sheer black sleeves, a crisp white Peter Pan collar and white cuffs, black tights, chunky black platform boots, a tiny black spider brooch. Hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe. Her naginata's haft in matte black with a tiny black spider charm. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a black dance dress with long sheer sleeves and a crisp white Peter Pan collar, a tiny black spider brooch, cold grey light with a dark wood-panelled school hall behind her. Hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-wednesday-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a knee-length black dance dress with a layered ruffled tulle skirt and long sheer black sleeves, a crisp white Peter Pan collar and white cuffs, black tights, chunky black platform boots, a tiny black spider brooch. Hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe. Her naginata's haft in matte black with a tiny black spider charm. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Ghost-Spider, Spider-Verse · `sk-collab-spider` (was 21S / 21T on the main list)

Couple set with Haechan's Miles. The white hooded spider suit, redone in hot pink and black; a platinum undercut bob.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a fitted white superhero bodysuit with a white hood pushed back, hot-pink and black web lines over the hood, the arms and the inner legs, a simple black spider shape on the chest (no letters), black-and-pink ballet-style shoes, a white mask with large white eye lenses hanging from one hand in cell 6. Hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut). Pink web strands wrapped around her naginata's haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a white hooded superhero bodysuit with hot-pink and black web lines, the hood pushed back, a night city glow in pink and blue behind her. Hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-spider-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a fitted white superhero bodysuit with a white hood pushed back, hot-pink and black web lines over the hood, the arms and the inner legs, a simple black spider shape on the chest (no letters), black-and-pink ballet-style shoes, a white mask with large white eye lenses hanging from one hand in cell 6. Hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut). Pink web strands wrapped around her naginata's haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Sophie, Howl's Moving Castle · `sk-collab-castle` (was 21W / 21X on the main list)

Couple set with Jungwon's Howl. A sky-blue dress, a straw hat and a knit shawl; one long braid shot with starlight silver.

#### 1. Pose sheet

Attach: `solar-posesheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a long-sleeved soft sky-blue dress with a full ankle-length skirt, a white lace collar, a cream knit shawl over the shoulders, a wide straw hat with a pink ribbon, brown ankle boots, a small star charm on a chain. Hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front. Tiny falling-star sparkles around her naginata's blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a soft sky-blue dress with a white lace collar, a cream knit shawl, a wide straw hat with a pink ribbon, soft daylight with a flower field behind her. Hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front. Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-collab-castle-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long-sleeved soft sky-blue dress with a full ankle-length skirt, a white lace collar, a cream knit shawl over the shoulders, a wide straw hat with a pink ribbon, brown ankle boots, a small star charm on a chain. Hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front. Tiny falling-star sparkles around her naginata's blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

---

## Haechan

His own look and all 17 of his Wardrobe looks are made, signature effect sheets included (Nov 4: Sigma Chi Runner and Garage Band's effect sheet). New collab looks are below. Finish-card words: **TOO EASY**

### New looks (collab outfits, moved from the main art list Nov 4)

Couple sets with Solar's collab looks: make both pose sheets of a set in the same chat so the colours match. Battle pieces come once they're in.

### Tuxedo Mask · `sk-haechan-collab-tuxedo` (was 21E / 21F on the main list)

Couple set with Solar's Sailor Moon. A tuxedo with tails, a top hat, a white mask, a red-lined cape and a rose.

#### 1. Pose sheet

Attach: `haechan-posesheet.png`, then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a black tuxedo with tails, a white shirt and a black bow tie, white gloves, a black top hat, a white domino eye mask, a long black cape lined in red, a single red rose tucked in the lapel, black dress shoes. Hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn). His knives' handles wrapped in red, a small rose charm on each. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a black tuxedo with a black bow tie, a black top hat, a white domino eye mask, a black cape lined in red, a red rose in the lapel, moonlit night behind him. Hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-haechan-collab-tuxedo-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black tuxedo with tails, a white shirt and a black bow tie, white gloves, a black top hat, a white domino eye mask, a long black cape lined in red, a single red rose tucked in the lapel, black dress shoes. Hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn). His knives' handles wrapped in red, a small rose charm on each. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Clawd, Monster High · `sk-haechan-collab-wolf` (was 21I / 21J on the main list)

Couple set with Solar's Draculaura. The werewolf boyfriend: a fur-collared varsity jacket and wolf ears.

#### 1. Pose sheet

Attach: `haechan-posesheet.png`, then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a purple-and-black varsity jacket with tan sleeves and a fur collar, a small claw-mark patch on the chest (no letters), a black tee, dark ripped jeans, black boots, a dark brown wolf-ear headband, a silver chain, fingerless black gloves. Hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn). His knives with claw-shaped guards. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a purple-and-black varsity jacket with tan sleeves and a fur collar, a dark brown wolf-ear headband, a silver chain, a purple moonlit glow. Hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-haechan-collab-wolf-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a purple-and-black varsity jacket with tan sleeves and a fur collar, a small claw-mark patch on the chest (no letters), a black tee, dark ripped jeans, black boots, a dark brown wolf-ear headband, a silver chain, fingerless black gloves. Hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn). His knives with claw-shaped guards. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Miles, Spider-Verse · `sk-haechan-collab-spider` (was 21U / 21V on the main list)

Couple set with Solar's Ghost-Spider. The black-and-red spider suit under an open hoodie, mask pushed up.

#### 1. Pose sheet

Attach: `haechan-posesheet.png`, then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a black superhero bodysuit with red web lines and a simple red spider shape on the chest (no letters), a black zip hoodie worn open over the suit with the hood down, black-and-red high-top sneakers, black shorts over the suit, the black mask pushed up on his forehead. Hair: his own black hair, short and textured with a soft fringe (a look he has really worn). Red electric sparks crackling on his knives. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a black superhero bodysuit with red web lines under an open black zip hoodie, the black mask pushed up on his forehead, a night city neon glow. Hair: his own black hair, short and textured with a soft fringe (a look he has really worn). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-haechan-collab-spider-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black superhero bodysuit with red web lines and a simple red spider shape on the chest (no letters), a black zip hoodie worn open over the suit with the hood down, black-and-red high-top sneakers, black shorts over the suit, the black mask pushed up on his forehead. Hair: his own black hair, short and textured with a soft fringe (a look he has really worn). Red electric sparks crackling on his knives. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```


## Jungwon

His own look and all 11 of his Wardrobe looks are made (Nov 4: Sweater Weather, Heir’s Suit, After Hours, Movie Date, HOAX Council Uniform, and the rest of Pool Day). New collab looks are below. Finish-card words: **MEETING ADJOURNED**

### New looks (collab outfits, moved from the main art list Nov 4)

Couple sets with Solar's collab looks: make both pose sheets of a set in the same chat so the colours match. Battle pieces come once they're in.

### Syaoran, Cardcaptor Sakura · `sk-jungwon-collab-cardcaptor` (was 21O / 21P on the main list)

Couple set with Solar's Cardcaptor Sakura. The green battle robe with gold trim, the cap and a jade compass.

#### 1. Pose sheet

Attach: `jungwon-posesheet.png`, then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a long-sleeved green-and-white Chinese-style battle robe with a high mandarin collar and gold-trimmed edges, a matching green cap, white trousers, black cloth shoes, a round jade compass charm hanging at the belt. Hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn). His rapier's guard in gold with a green tassel. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a green-and-white battle robe with a high mandarin collar and gold trim, a matching green cap, a jade compass charm, soft cherry-blossom light. Hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-jungwon-collab-cardcaptor-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long-sleeved green-and-white Chinese-style battle robe with a high mandarin collar and gold-trimmed edges, a matching green cap, white trousers, black cloth shoes, a round jade compass charm hanging at the belt. Hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn). His rapier's guard in gold with a green tassel. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```

### Howl, Howl's Moving Castle · `sk-jungwon-collab-castle` (was 21Y / 21Z on the main list)

Couple set with Solar's Sophie. The pink-and-blue diamond jacket over a white shirt, a red jewel earring.

#### 1. Pose sheet

Attach: `jungwon-posesheet.png`, then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-posesheet.png`
```
Character pose sheet: 3 columns × 2 rows on a plain white background, with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same size, nothing overlapping. Copy the six poses, the figure size and the framing of the FIRST attached image exactly, including the skill effect in cell 4; change only the outfit and hair to this look: a loose white shirt open at the collar, black trousers, black boots, a short pink-and-pale-blue harlequin diamond-patterned jacket draped over his shoulders, a small red jewel earring in one ear, a thin silver necklace with a blue gem. Hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn). His rapier with a gold star-shaped guard. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). Cell 1: battle-ready stance. Cell 2: raising the Evoker to the temple. Cell 3: attacking with the weapon. Cell 4: using a skill. Cell 5: hurt, recoiling from a hit. Cell 6: victory pose. Persona 3 Reload official art style. No text, no logos.
```
If it comes back with a background or overlapping poses, say: "Redo it on a plain white background with more space between the poses."

#### 2. Scene portraits

Attach: `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached image in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style. Change only the outfit and hair to this look: a pink-and-pale-blue harlequin diamond-patterned jacket draped over a loose white shirt, a small red jewel earring, a silver necklace with a blue gem, warm golden flower-field light. Hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text, no logos.
```

#### 3. Second pose sheet

Attach: `skin-sk-jungwon-collab-castle-posesheet.png` (your finished pose sheet above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a loose white shirt open at the collar, black trousers, black boots, a short pink-and-pale-blue harlequin diamond-patterned jacket draped over his shoulders, a small red jewel earring in one ear, a thin silver necklace with a blue gem. Hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn). His rapier with a gold star-shaped guard. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text, no logos.
```


## Akihiko

Own look + 5 Wardrobe looks. All made but Off-Day Hoodie (Nov 4: Ringside, Summer Festival and Champion’s Robe). Finish-card words: **ON TO THE NEXT BOUT.**

### Off-Day Hoodie · `sk-akihiko-hoodie` · plain (no theme)

> **Look bible.** Palette: heather grey, black, white and dawn blue. Vibe: a day off that still has roadwork in it.  
> Motifs: speed streaks, breath puffs, kicked-up dust and dawn light. Light: pale dawn blue light. Scene: a riverside path at dawn.

#### 1. Scene portraits

Attach: `Place Prompt Attachments/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Place Prompt Attachments/Akihiko.png`  
Save as: `skin-sk-akihiko-hoodie-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached images in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style as the character reference. Wearing exactly the outfit from the first attached image (A grey zip hoodie, track pants and running shoes. His day off still has roadwork in it.). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 2. Second pose sheet

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 3. Theurgy cut-in

Attach: `Added to Game/theurgy-akihiko.png`, then `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a riverside path at dawn in heather grey, black, white and dawn blue, the light is pale dawn blue light, and speed streaks and breath puffs streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 4. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in heather grey, black, white and dawn blue, lit by pale dawn blue light, a few tiny speed streaks and breath puffs scattered in the stripes. No text, no letters, no logos, no border.
```

#### 5. Entrance card

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a riverside path at dawn, broken into flat graphic shards of heather grey, black, white and dawn blue splitting apart diagonally, a few speed lines, a scatter of speed streaks, breath puffs and kicked-up dust, lit by pale dawn blue light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 6. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Same face as the THIRD attached image. Background: a riverside path at dawn, as flat graphic shapes in heather grey, black, white and dawn blue, speed streaks and breath puffs drifting across, lit by pale dawn blue light. The words are white with a heather grey outline. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

#### 7. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-akihiko-hoodie-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one puff of breath flickers on in the centre. Frame 2: a few speed streaks and dust appear around it, dawn blue light gathering. Frame 3, the peak: a dash burst of white speed streaks and dust from a pale blue centre. Frame 4: the speed streaks and dust spreading wider, tumbling and turning. Frame 5: the speed streaks and dust breaking into small grey dust. Frame 6: a few last tiny speed streaks and dust and grey dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, heather grey, black, white and dawn blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

## Junpei

Own look + 1 Wardrobe look. Little League Legend is made but its entrance card (Nov 4; its finish card came without the words, which is fine). Finish-card words: **THAT'S THE GAME!**

### Little League Legend · `sk-junpei-baseball` · Confetti

> **Look bible.** Palette: pinstripe white, team navy, grass green and stadium gold. Vibe: a legend, by his own account.  
> Motifs: baseballs, chalk lines, stadium lights and confetti. Light: bright stadium lights. Scene: a baseball diamond under stadium lights.

#### 1. Entrance card

Attach: `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the long sword resting on one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a baseball diamond under stadium lights, broken into flat graphic shards of pinstripe white, team navy, grass green and stadium gold splitting apart diagonally, a few speed lines, a scatter of baseballs, chalk lines and stadium lights, lit by bright stadium lights. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

## Shinjiro

Own look + 1 Wardrobe look. His own look is made (Nov 3). Finish-card words: **DON'T WASTE YOUR BREATH.**

### Beanie & Apron · `sk-shinjiro-apron` · plain (no theme)

> **Look bible.** Palette: charcoal, apron navy, coat maroon and stove orange. Vibe: dinner in ten minutes; nobody touches the pot.  
> Motifs: steam curls, stove embers, ladles and stew bubbles. Light: a warm stove glow in a dark kitchen. Scene: the dorm kitchen at night, a pot on the stove.

#### 1. Scene portraits

Attach: `Place Prompt Attachments/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Place Prompt Attachments/Shinjiro.png`  
Save as: `skin-sk-shinjiro-apron-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached images in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style as the character reference. Wearing exactly the outfit from the first attached image (A knit beanie and a plain apron over his coat. Dinner is in ten minutes; nobody touches the pot.). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 2. Second pose sheet

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the axe held loosely in the other hand. Cell 2: guarding: braced low, the axe held across his body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the axe. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the axe lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the axe ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 3. Theurgy cut-in

Attach: `Added to Game/theurgy-shinjiro.png`, then `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes the dorm kitchen at night, a pot on the stove in charcoal, apron navy, coat maroon and stove orange, the light is a warm stove glow in a dark kitchen, and steam curls and stove embers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 4. "1 MORE!" eye strip

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: shoulder-length brown hair under a black knit beanie, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a dark charcoal knit beanie pulled low. Behind the face: bold flat diagonal stripes and speed lines in charcoal, apron navy, coat maroon and stove orange, lit by a warm stove glow in a dark kitchen, a few tiny steam curls and stove embers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 5. Entrance card

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the battle axe slung over one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: the dorm kitchen at night, a pot on the stove, broken into flat graphic shards of charcoal, apron navy, coat maroon and stove orange splitting apart diagonally, a few speed lines, a scatter of steam curls, stove embers and ladles, lit by a warm stove glow in a dark kitchen. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 6. Finish card

Attach: `Current Skins/Base Game/Shinjiro/Shinjiro - finish card.png`, then `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Same face as the THIRD attached image. Background: the dorm kitchen at night, a pot on the stove, as flat graphic shapes in charcoal, apron navy, coat maroon and stove orange, steam curls and stove embers drifting across, lit by a warm stove glow in a dark kitchen. The words are stove orange with a charcoal outline. The words read exactly: DON'T WASTE YOUR BREATH. No other text, no logos, no watermark.
```

#### 7. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-shinjiro-apron-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one curl of steam flickers on in the centre. Frame 2: a few steam curls and embers appear around it, stove orange light gathering. Frame 3, the peak: a warm burst of steam and orange embers from a white-hot centre. Frame 4: the steam curls and embers spreading wider, tumbling and turning. Frame 5: the steam curls and embers breaking into small ember sparks. Frame 6: a few last tiny steam curls and embers and ember sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, charcoal, apron navy, coat maroon and stove orange, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

## Aigis

Own look + 1 Wardrobe look. Her own look is made (Nov 3). Finish-card words: **TARGET NEUTRALIZED**

### Gekkoukan Uniform · `sk-aigis-uniform` · plain (no theme)

> **Look bible.** Palette: Gekkoukan navy, ribbon red, white and steel silver. Vibe: mission: blend in.  
> Motifs: targeting reticles, red ribbons, blue data lines and steel glints. Light: cool morning school light with a blue scan glow. Scene: the Gekkoukan High gate in the morning.

#### 1. Scene portraits

Attach: `Place Prompt Attachments/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Place Prompt Attachments/Aigis.png`  
Save as: `skin-sk-aigis-uniform-portraits.png`
```
A 3 × 2 portrait sheet on a plain white background, clear space between cells, nothing overlapping: the same person as the attached images in six head-and-shoulders portraits, same face, same size and framing in every cell, same art style as the character reference. Wearing exactly the outfit from the first attached image (The school uniform over her frame, the ribbon tied to the millimetre. Mission: blend in.). Cells, in order: neutral, happy, sad, serious, surprised, flustered. No text.
```

#### 2. Second pose sheet

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other arm lowered. Cell 2: guarding: braced low, both forearms crossed in front of her like a shield, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one arm gun still raised. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, her arm guns lowered but still aimed, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, both arm guns ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 3. Theurgy cut-in

Attach: `Added to Game/theurgy-aigis.png`, then `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes the Gekkoukan High gate in the morning in Gekkoukan navy, ribbon red, white and steel silver, the light is cool morning school light with a blue scan glow, and targeting reticles and red ribbons streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 4. "1 MORE!" eye strip

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short blonde hair with the black headband ear units, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in Gekkoukan navy, ribbon red, white and steel silver, lit by cool morning school light with a blue scan glow, a few tiny targeting reticles and red ribbons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 5. Entrance card

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, one arm raised, its arm gun aimed past the viewer, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: the Gekkoukan High gate in the morning, broken into flat graphic shards of Gekkoukan navy, ribbon red, white and steel silver splitting apart diagonally, a few speed lines, a scatter of targeting reticles, red ribbons and blue data lines, lit by cool morning school light with a blue scan glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 6. Finish card

Attach: `Current Skins/Base Game/Aigis/Aigis - finish card.png`, then `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Same face as the THIRD attached image. Background: the Gekkoukan High gate in the morning, as flat graphic shapes in Gekkoukan navy, ribbon red, white and steel silver, targeting reticles and red ribbons drifting across, lit by cool morning school light with a blue scan glow. The words are white with a ribbon red outline. The words read exactly: TARGET NEUTRALIZED. No other text, no logos, no watermark.
```

#### 7. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-aigis-uniform-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one targeting reticle flickers on in the centre. Frame 2: a few targeting reticles and data lines appear around it, steel blue light gathering. Frame 3, the peak: reticles locking on and scattering from a white flash, a red ribbon fluttering. Frame 4: the targeting reticles and data lines spreading wider, tumbling and turning. Frame 5: the targeting reticles and data lines breaking into small blue data sparks. Frame 6: a few last tiny targeting reticles and data lines and blue data sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, Gekkoukan navy, ribbon red, white and steel silver, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

## Themes

Every look already has a theme (listed under each sheet). To move a look to another theme, or leave it plain, just tell Claude.

### Theme effect sheets (solid black background)

One per theme. Attach `Added to Game/heal.jpeg` for format and spacing only. If it comes back with grid lines, boxes or a transparent background, say: "Redo it on solid black with no grid lines or boxes."

#### Foxfire effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-foxfire.png`
*Looks:* Kiriko Cosplay (retired for now, so skip this one until it is remade)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one blue-white flame wisp flickers on in the centre. Frame 2: a few more flame wisps and a paper charm appear around it, a pale blue glow gathering. Frame 3, the peak: fox-fire flames and paper charms swirling outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the flames and paper charms spreading wider, tumbling and turning. Frame 5: the flames and paper charms breaking into small pale blue sparkles. Frame 6: a few last tiny flames and paper charms and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pale blue, white and red, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### HUD frames (transparent background)

One per theme, nothing to attach; Gemini or ChatGPT. If it comes back with a background anyway, that's fine.

#### Foxfire frame

Attach: nothing  
Save as: `frame-foxfire.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small fox-fire flames and paper charms clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, pale blue, white and red. No text, no characters, no shadows, no background colour.
```

---

## Cell-4 clean-up checklist

Nearly all done (thank you!). **Two left** (still open on Nov 3: the Minji and Beach Volley sheets in the Nov 3 batch were second pose sheets, not these recuts), each already copied into **`Femc Mode Images/Skins Battle Design/<Fighter>/`**:

- **Yukari:** `Beach Volley [sk-yukari-swim] - pose sheet.png`
- **Minji:** `Minji - own look - pose sheet.png`

How: open the sheet from that folder, take the effect out of cell 4 only (leave the figure and the other five cells as they are; a transparent background is welcome), and save it into **`RECUTS - PHOTOSHOP EDITS`**. Any name that says pose sheet and the look is fine. If a cell 4 can't be cleaned (the effect covers the face or hand), skip it.

---

## Open questions for Kat

1. The themes: move, rename or add any? (Each look's theme is in its heading.)
2. Solar's outfit cut-ins: one picture with Haenim for every form (as written), or one per form for favourites?
3. Finish-card words: always the fighter's own line (as written), or a line per look?
4. Still waiting for your yes or no: the couple sets side by side on the win screen; a victory line per look (writing only); outfit chibis for the All-Out (lots of art for a tiny moment; parked unless you love it).
