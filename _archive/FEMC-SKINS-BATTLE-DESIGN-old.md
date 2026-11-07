# Skins in battle: design sheet

*Persona 3: Solstice · Kat's decisions of Nov 1 2026 · Nov 4: the new outfits moved here from the main art list, the rest is low priority · reorganised Nov 1: every prompt written out, by fighter, then by look · refreshed Nov 1: only what's still to make · personalised Nov 1: every look has its own look bible*

**New direction (Kat, Nov 1):** each Wardrobe look now has its own **look bible** (palette, vibe, motifs, light, scene) at the top of its block, and every prompt's background, colours, light and effects follow it; only the fighters' own (base game) looks keep the pink-and-black Solstice palette.

When a fighter wears a Wardrobe look, the whole fight shows it: the figure, the faces, the win screen, the cut-ins, the effects and the finish card. Looks stay looks: **no stats, ever.** The technical side is in `FEMC-SKINS-BATTLE-TECH.md`, for Claude.

## How to use

1. Pick a fighter, then a look. Everything still to make for that look is in one block, in order: pose sheet, Theurgy cut-in, eye strip, entrance card, finish card, signature effect sheet (N). Pieces already in the game are gone from this sheet.
2. For each piece: open a new ChatGPT message, attach the files on its **Attach** line in that order (all inside `Femc Mode Images/`), paste the prompt, send.
3. Save the picture into **New Adds** under its **Save as** name, and tell Claude. One picture per message.
4. You don't have to make everything: a piece you skip just uses the fighter's usual version in the game.

**Still to make (Nov 7 2026):** the battle pieces of the 24 new looks (written Nov 7) and the low-priority S.E.E.S. looks; counts in the table below.

**Made so far (Nov 4 2026):** 497 pieces in the game, so they're off this list: 84 second pose sheets, 84 "1 MORE!" strips, 83 entrance cards, 72 Theurgy cut-ins, 72 finish cards, 72 signature effect sheets, all 6 couple Showtimes, 12 theme effect sheets and 12 HUD frames. Every fighter's own look is done (Koromaru's too, Nov 4), and every Wardrobe look of Solar, Haechan, Jungwon, Yukari, Minji, Jihoon and Mitsuru. (The 75 Evoker close-up prompts are parked in `FEMC-SKINS-EVOKER-PROMPTS.md`; optional remakes of the made pieces with the new look bibles, 180 prompts, are in `FEMC-SKINS-REMAKES.md`.)

> **Start here: the new looks (moved from the main art list, Nov 4)**
> 1. **Solar's skin series (in the game since Nov 5): their battle pieces.** The 11 Tarot Arcana, Midnight Chapel and Wildflower Cottage looks each have six new prompts (#4–#9: Theurgy cut-in, both "1 MORE!" pictures, entrance card, finish card, signature effect sheet), and Black Rose, Rainy Greenhouse and Harvest Festival still need their second pose sheet (#3). 69 prompts; every attachment is in Place Prompt Attachments.
> 2. **Solar's 8 collab outfits** (Solar's new looks → Collab outfits): pose sheet, scene portraits and second pose sheet first, then their six battle pieces (#4–#9, written Nov 7), which use your finished pose sheet and scene portraits.
> 3. **The collab couple partners** (Haechan → New looks, Jungwon → New looks): Tuxedo Mask, Clawd and Miles; Syaoran and Howl. Make both pose sheets of a couple set in the same chat so the colours match.
> 4. Together that's 39 outfit prompts (13 collab outfits × 3) plus 139 battle-piece prompts (Nov 7): 66 for the skin series, 48 for Solar's collabs, 15 for Haechan's and 10 for Jungwon's (the partners get one "1 MORE!" picture each, like the other fighters). Make a collab's battle pieces after the outfit is in the game.
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
| Second pose sheet | Six more poses: support cast, guard, dodge, knocked down, badly hurt, dash-in | 19 (3 skin-series looks, 13 collab outfits, Off-Day Hoodie, Beanie & Apron, Gekkoukan Uniform) |
| Theurgy cut-in | The Theurgy cut-in shows the fighter in the look | 27 (11 skin series, 13 collabs, 3 S.E.E.S. looks) |
| "1 MORE!" eye strip | Hit a weakness: a thin strip of the fighter's eyes slams across the screen | 46 pictures (Solar's 19 new looks get v1 and v2; 8 other looks get one) |
| Entrance card | As a fight opens, the leader's look flashes on in a slanted card | 28 |
| Finish card | The All-Out finish card shows the look | 27 |
| Signature effect sheet (N) | That look's own effect (calling cards, firework sparks, rain streaks…), drawn in its own colours on solid black. The game layers it on that look's skills, its All-Out burst and ▶ Try it on; until it's made, the look uses its shared theme sheet | 27 |
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

Moved from the main art list (Nov 4). The 11 skin-series looks are in the game (Nov 5): only their battle pieces are left (#4–#9 in each block, written Nov 7, with a look bible each), plus three second pose sheets. The collab outfits aren't in yet: make the pose sheet first, then its scene portraits; the second pose sheet uses the finished first one, and the battle pieces (#4 on) use both.

### Skin series: Tarot Arcana, Midnight Chapel, Wildflower Cottage

Kat's picks (Oct 31): three series, four looks each, each with its own banner. Every look is a pose sheet plus scene portraits, like the Wardrobe outfits already in the game.

**Tarot Arcana**

### The Moon · `sk-arcana-moon` (was 19C / 19D on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Tarot Arcana. A midnight-blue slip dress, a sheer veil and moon-phase jewellery; long loose hair with silver tinsel.

> **Look bible.** Palette: midnight blue, moon silver, pearl white and pale violet. Vibe: the Moon card: dreamlike, quiet, a little uncanny.  
> Motifs: crescent moons, moon phases, silver mist and tiny falling stars. Light: cool blue moonlight through silver mist. Scene: a still lake at midnight under a huge full moon.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/The Moon [sk-arcana-moon] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an ankle-length deep midnight-blue silk slip dress, a sheer silver-flecked veil draped from the crown of her head over her shoulders, a choker of tiny silver moon phases, silver crescent earrings, silver sandals, a thin silver anklet. Hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a still lake at midnight under a huge full moon in midnight blue, moon silver, pearl white and pale violet, the light is cool blue moonlight through silver mist, and crescent moons and moon phases streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/The Moon [sk-arcana-moon] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a sheer silver-flecked veil over her head. Behind the face: bold flat diagonal stripes and speed lines in midnight blue, moon silver, pearl white and pale violet, lit by cool blue moonlight through silver mist, a few tiny crescent moons and moon phases scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/The Moon [sk-arcana-moon] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a sheer silver-flecked veil over her head. Behind the face: bold flat diagonal stripes and speed lines in midnight blue, moon silver, pearl white and pale violet, lit by cool blue moonlight through silver mist, a few tiny crescent moons and moon phases scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/The Moon [sk-arcana-moon] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an ankle-length deep midnight-blue silk slip dress, a sheer silver-flecked veil draped from the crown of her head over her shoulders, a choker of tiny silver moon phases, silver crescent earrings, silver sandals, a thin silver anklet. Hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a still lake at midnight under a huge full moon, broken into flat graphic shards of midnight blue, moon silver, pearl white and pale violet splitting apart diagonally, a few speed lines, a scatter of crescent moons, moon phases and silver mist, lit by cool blue moonlight through silver mist. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/The Moon [sk-arcana-moon] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-moon-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: an ankle-length deep midnight-blue silk slip dress, a sheer silver-flecked veil draped from the crown of her head over her shoulders, a choker of tiny silver moon phases, silver crescent earrings, silver sandals, a thin silver anklet. Hair: her own jet-black hair long and loose to the waist, fine silver tinsel strands threaded through it that catch the light, a silver crescent pin above one ear. Same face as the THIRD attached image. Background: a still lake at midnight under a huge full moon, as flat graphic shapes in midnight blue, moon silver, pearl white and pale violet, crescent moons and moon phases drifting across, lit by cool blue moonlight through silver mist. The words are pearl white with a midnight blue outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-arcana-moon-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one silver crescent moon flickers on in the centre. Frame 2: a few crescent moons and moon phases appear around it, silver light gathering. Frame 3, the peak: a ring of moon phases spinning outward from a pale silver-white centre, a crescent flashing at its heart. Frame 4: the crescent moons and moon phases spreading wider, tumbling and turning. Frame 5: the crescent moons and moon phases breaking into small silver mist. Frame 6: a few last tiny crescent moons and moon phases and silver mist fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, midnight blue, moon silver, pearl white and pale violet, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### The Star · `sk-arcana-star` (was 19E / 19F on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Tarot Arcana. A sheer pale pink layered dress covered in tiny stars, barefoot; a high ponytail with pastel pink and silver streaks.

> **Look bible.** Palette: pale pink, starlight silver, twilight lilac and soft white. Vibe: the Star card: hope, a wish, a quiet glow.  
> Motifs: tiny stars, shooting stars, starlight sparkles and pink nebula haze. Light: soft silvery starlight with a pink nebula glow. Scene: a twilight hilltop under a sky thick with stars.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/The Star [sk-arcana-star] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a sheer pale pink layered tulle dress to mid-calf covered in tiny embroidered silver stars, puffed off-shoulder sleeves, barefoot with a silver star anklet, a small star-shaped glass pendant. Hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a twilight hilltop under a sky thick with stars in pale pink, starlight silver, twilight lilac and soft white, the light is soft silvery starlight with a pink nebula glow, and shooting stars and tiny stars streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/The Star [sk-arcana-star] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in pale pink, starlight silver, twilight lilac and soft white, lit by soft silvery starlight with a pink nebula glow, a few tiny shooting stars and tiny stars scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/The Star [sk-arcana-star] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in pale pink, starlight silver, twilight lilac and soft white, lit by soft silvery starlight with a pink nebula glow, a few tiny shooting stars and tiny stars scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/The Star [sk-arcana-star] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a sheer pale pink layered tulle dress to mid-calf covered in tiny embroidered silver stars, puffed off-shoulder sleeves, barefoot with a silver star anklet, a small star-shaped glass pendant. Hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a twilight hilltop under a sky thick with stars, broken into flat graphic shards of pale pink, starlight silver, twilight lilac and soft white splitting apart diagonally, a few speed lines, a scatter of tiny stars, shooting stars and starlight sparkles, lit by soft silvery starlight with a pink nebula glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/The Star [sk-arcana-star] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-star-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a sheer pale pink layered tulle dress to mid-calf covered in tiny embroidered silver stars, puffed off-shoulder sleeves, barefoot with a silver star anklet, a small star-shaped glass pendant. Hair: her own jet-black hair in a high ponytail with pastel pink and silver streaks, star-shaped silver clips along one side. Same face as the THIRD attached image. Background: a twilight hilltop under a sky thick with stars, as flat graphic shapes in pale pink, starlight silver, twilight lilac and soft white, shooting stars and tiny stars drifting across, lit by soft silvery starlight with a pink nebula glow. The words are soft white with a twilight lilac outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-arcana-star-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one tiny silver star flickers on in the centre. Frame 2: a few silver stars and shooting-star trails appear around it, pale pink light gathering. Frame 3, the peak: a starburst of silver stars and shooting-star trails from a white-pink centre. Frame 4: the silver stars and shooting-star trails spreading wider, tumbling and turning. Frame 5: the silver stars and shooting-star trails breaking into small pink and silver star dust. Frame 6: a few last tiny silver stars and shooting-star trails and pink and silver star dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pale pink, starlight silver, twilight lilac and soft white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### The Lovers · `sk-arcana-lovers` (was 19G / 19H on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Tarot Arcana. A red-and-black corset dress with a heart locket and rose vines; Hollywood waves pinned with a red rose.

> **Look bible.** Palette: rose red, black, gold and blush. Vibe: the Lovers card: a choice, a vow, a little dangerous.  
> Motifs: red roses, rose petals, gold hearts and climbing rose vines. Light: warm candlelight with a deep red glow. Scene: a rose garden arbour at dusk, roses climbing a black iron arch.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/The Lovers [sk-arcana-lovers] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a red-and-black corset dress with a sweetheart neckline, a full black skirt lined in red, thin rose vines embroidered climbing up one side, a heart-shaped gold locket, black lace gloves, red heels. Hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a rose garden arbour at dusk, roses climbing a black iron arch in rose red, black, gold and blush, the light is warm candlelight with a deep red glow, and rose petals and gold hearts streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/The Lovers [sk-arcana-lovers] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in rose red, black, gold and blush, lit by warm candlelight with a deep red glow, a few tiny rose petals and gold hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/The Lovers [sk-arcana-lovers] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in rose red, black, gold and blush, lit by warm candlelight with a deep red glow, a few tiny rose petals and gold hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/The Lovers [sk-arcana-lovers] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a red-and-black corset dress with a sweetheart neckline, a full black skirt lined in red, thin rose vines embroidered climbing up one side, a heart-shaped gold locket, black lace gloves, red heels. Hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a rose garden arbour at dusk, roses climbing a black iron arch, broken into flat graphic shards of rose red, black, gold and blush splitting apart diagonally, a few speed lines, a scatter of red roses, rose petals and gold hearts, lit by warm candlelight with a deep red glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/The Lovers [sk-arcana-lovers] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-lovers-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a red-and-black corset dress with a sweetheart neckline, a full black skirt lined in red, thin rose vines embroidered climbing up one side, a heart-shaped gold locket, black lace gloves, red heels. Hair: her own jet-black hair in soft glossy Hollywood waves pinned to one side with a single red rose, a deep red tint at the ends. Same face as the THIRD attached image. Background: a rose garden arbour at dusk, roses climbing a black iron arch, as flat graphic shapes in rose red, black, gold and blush, rose petals and gold hearts drifting across, lit by warm candlelight with a deep red glow. The words are gold with a rose red outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-arcana-lovers-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one red rose bud flickers on in the centre. Frame 2: a few red rose petals and small gold hearts appear around it, deep red light gathering. Frame 3, the peak: a rose blooming open into a burst of red petals and gold hearts from a gold-white centre. Frame 4: the red rose petals and small gold hearts spreading wider, tumbling and turning. Frame 5: the red rose petals and small gold hearts breaking into small red petals and gold sparks. Frame 6: a few last tiny red rose petals and small gold hearts and red petals and gold sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, rose red, black, gold and blush, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

**Midnight Chapel**

### Black Rose · `sk-chapel-rose` (was 19I / 19J on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces. **Still to make: the second pose sheet (#3 below) and its battle pieces (#4–#9, written Nov 7).**

Midnight Chapel. A gothic lolita dress with lace, a rose corsage and a tiny top hat; ringlet pigtails with black bows.

> **Look bible.** Palette: black lace, hot pink, bone white and dusty rose. Vibe: a gothic doll: sweet, until it isn't.  
> Motifs: black roses, lace ribbons, ribbon bows and pink thorns. Light: pink candlelight in a dark chapel. Scene: a gothic chapel at midnight, candles and a rose window.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Black Rose [sk-chapel-rose] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black gothic lolita dress with a bell-shaped skirt over layers of black and pink lace petticoat, puffed sleeves, a black rose corsage at the collar, a black lace headpiece with a black rose, big black bows in her hair, black-and-pink striped stockings, black platform Mary Janes. Hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a gothic chapel at midnight, candles and a rose window in black lace, hot pink, bone white and dusty rose, the light is pink candlelight in a dark chapel, and black roses and lace ribbons streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Black Rose [sk-chapel-rose] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: the black lace-and-rose headpiece. Behind the face: bold flat diagonal stripes and speed lines in black lace, hot pink, bone white and dusty rose, lit by pink candlelight in a dark chapel, a few tiny black roses and lace ribbons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Black Rose [sk-chapel-rose] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: the black lace-and-rose headpiece. Behind the face: bold flat diagonal stripes and speed lines in black lace, hot pink, bone white and dusty rose, lit by pink candlelight in a dark chapel, a few tiny black roses and lace ribbons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Black Rose [sk-chapel-rose] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black gothic lolita dress with a bell-shaped skirt over layers of black and pink lace petticoat, puffed sleeves, a black rose corsage at the collar, a black lace headpiece with a black rose, big black bows in her hair, black-and-pink striped stockings, black platform Mary Janes. Hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a gothic chapel at midnight, candles and a rose window, broken into flat graphic shards of black lace, hot pink, bone white and dusty rose splitting apart diagonally, a few speed lines, a scatter of black roses, lace ribbons and pink thorns, lit by pink candlelight in a dark chapel. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Black Rose [sk-chapel-rose] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-rose-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black gothic lolita dress with a bell-shaped skirt over layers of black and pink lace petticoat, puffed sleeves, a black rose corsage at the collar, a black lace headpiece with a black rose, big black bows in her hair, black-and-pink striped stockings, black platform Mary Janes. Hair: her own jet-black hair in long ringlet pigtails tied with big black bows, a hot-pink streak in each pigtail. Same face as the THIRD attached image. Background: a gothic chapel at midnight, candles and a rose window, as flat graphic shapes in black lace, hot pink, bone white and dusty rose, black roses and lace ribbons drifting across, lit by pink candlelight in a dark chapel. The words are hot pink with a black outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-chapel-rose-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one black rose flickers on in the centre. Frame 2: a few black roses and lace ribbons appear around it, hot pink light gathering. Frame 3, the peak: a black rose bursting open in a ring of lace ribbons and pink thorns from a hot-pink centre. Frame 4: the black roses and lace ribbons spreading wider, tumbling and turning. Frame 5: the black roses and lace ribbons breaking into small black petals and pink sparks. Frame 6: a few last tiny black roses and lace ribbons and black petals and pink sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, black lace, hot pink, bone white and dusty rose, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Cathedral Veil · `sk-chapel-veil` (was 19K / 19L on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Midnight Chapel. A long black lace gown, a cathedral-length veil and a pink bead belt; a sleek low bun under the veil.

> **Look bible.** Palette: black lace, candle gold, rosary pink and stained-glass violet. Vibe: a vigil in a cathedral: solemn, beautiful, a little haunted.  
> Motifs: candle flames, lace veils, rosary beads and stained-glass shards. Light: candle gold through violet stained glass. Scene: a vast cathedral nave at night, rows of candles and stained-glass windows.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Cathedral Veil [sk-chapel-veil] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long black lace gown with a high neck and long sheer sleeves, a cathedral-length black lace veil trailing far behind her, a belt of pink beads and small silver crosses at the waist like a rosary, black pointed boots. Hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a vast cathedral nave at night, rows of candles and stained-glass windows in black lace, candle gold, rosary pink and stained-glass violet, the light is candle gold through violet stained glass, and candle flames and stained-glass shards streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Cathedral Veil [sk-chapel-veil] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a black lace veil over her head. Behind the face: bold flat diagonal stripes and speed lines in black lace, candle gold, rosary pink and stained-glass violet, lit by candle gold through violet stained glass, a few tiny candle flames and stained-glass shards scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Cathedral Veil [sk-chapel-veil] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a black lace veil over her head. Behind the face: bold flat diagonal stripes and speed lines in black lace, candle gold, rosary pink and stained-glass violet, lit by candle gold through violet stained glass, a few tiny candle flames and stained-glass shards scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Cathedral Veil [sk-chapel-veil] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long black lace gown with a high neck and long sheer sleeves, a cathedral-length black lace veil trailing far behind her, a belt of pink beads and small silver crosses at the waist like a rosary, black pointed boots. Hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a vast cathedral nave at night, rows of candles and stained-glass windows, broken into flat graphic shards of black lace, candle gold, rosary pink and stained-glass violet splitting apart diagonally, a few speed lines, a scatter of candle flames, rosary beads and stained-glass shards, lit by candle gold through violet stained glass. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Cathedral Veil [sk-chapel-veil] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-veil-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a long black lace gown with a high neck and long sheer sleeves, a cathedral-length black lace veil trailing far behind her, a belt of pink beads and small silver crosses at the waist like a rosary, black pointed boots. Hair: her own jet-black hair in a sleek low bun under the veil, two face-framing strands with pink tips. Same face as the THIRD attached image. Background: a vast cathedral nave at night, rows of candles and stained-glass windows, as flat graphic shapes in black lace, candle gold, rosary pink and stained-glass violet, candle flames and stained-glass shards drifting across, lit by candle gold through violet stained glass. The words are candle gold with a black outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-chapel-veil-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one candle flame flickers on in the centre. Frame 2: a few candle flames and stained-glass shards appear around it, violet light gathering. Frame 3, the peak: a burst of stained-glass shards and pink rosary beads from a candle-gold centre. Frame 4: the candle flames and stained-glass shards spreading wider, tumbling and turning. Frame 5: the candle flames and stained-glass shards breaking into small gold embers. Frame 6: a few last tiny candle flames and stained-glass shards and gold embers fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, black lace, candle gold, rosary pink and stained-glass violet, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Vampire Ball · `sk-chapel-vampire` (was 19M / 19N on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Midnight Chapel. A red velvet off-shoulder gown and a high-collared cape; a dramatic half-up updo with a deep red streak.

> **Look bible.** Palette: blood red, velvet black, gold and moon white. Vibe: a vampire's ball: decadent, dangerous, and she was invited.  
> Motifs: bats, blood-red rose petals, gold candelabras and a red moon. Light: red moonlight and gold candelabra glow. Scene: a gothic ballroom at midnight, a red moon in the tall windows.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Vampire Ball [sk-chapel-vampire] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a red velvet off-shoulder ball gown with a corseted bodice, a black high-collared cape lined in red falling from her shoulders, a black choker with a red teardrop gem, long black gloves, black heels. Hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a gothic ballroom at midnight, a red moon in the tall windows in blood red, velvet black, gold and moon white, the light is red moonlight and gold candelabra glow, and bats and blood-red rose petals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Vampire Ball [sk-chapel-vampire] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in blood red, velvet black, gold and moon white, lit by red moonlight and gold candelabra glow, a few tiny bats and blood-red rose petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Vampire Ball [sk-chapel-vampire] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in blood red, velvet black, gold and moon white, lit by red moonlight and gold candelabra glow, a few tiny bats and blood-red rose petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Vampire Ball [sk-chapel-vampire] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a red velvet off-shoulder ball gown with a corseted bodice, a black high-collared cape lined in red falling from her shoulders, a black choker with a red teardrop gem, long black gloves, black heels. Hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a gothic ballroom at midnight, a red moon in the tall windows, broken into flat graphic shards of blood red, velvet black, gold and moon white splitting apart diagonally, a few speed lines, a scatter of bats, blood-red rose petals and gold candelabra glints, lit by red moonlight and gold candelabra glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Vampire Ball [sk-chapel-vampire] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-vampire-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a red velvet off-shoulder ball gown with a corseted bodice, a black high-collared cape lined in red falling from her shoulders, a black choker with a red teardrop gem, long black gloves, black heels. Hair: her own jet-black hair in a dramatic half-up updo with big sculpted curls, a deep blood-red streak through the front. Same face as the THIRD attached image. Background: a gothic ballroom at midnight, a red moon in the tall windows, as flat graphic shapes in blood red, velvet black, gold and moon white, bats and blood-red rose petals drifting across, lit by red moonlight and gold candelabra glow. The words are blood red with a gold outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-chapel-vampire-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small black bat flickers on in the centre. Frame 2: a few black bats and blood-red petals appear around it, blood red light gathering. Frame 3, the peak: a swarm of bats exploding outward around a red crescent slash from a red-hot centre. Frame 4: the black bats and blood-red petals spreading wider, tumbling and turning. Frame 5: the black bats and blood-red petals breaking into small red and gold sparks. Frame 6: a few last tiny black bats and blood-red petals and red and gold sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, blood red, velvet black, gold and moon white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Graveyard Picnic · `sk-chapel-picnic` (was 19O / 19P on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Midnight Chapel. A black pinafore with pink cross-stitch, a parasol and a picnic basket; two fluffy space buns with pink ribbons.

> **Look bible.** Palette: black, candy pink, cream and moss green. Vibe: a picnic in the quietest spot in town: cute and spooky.  
> Motifs: little ghosts, pink ribbons, black lace and moss. Light: soft overcast twilight with a pink glow. Scene: an old mossy churchyard at dusk, a picnic blanket among the headstones.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Graveyard Picnic [sk-chapel-picnic] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black pinafore dress over a white puff-sleeved blouse, pink cross-stitch along the hem and the straps, white frilly socks and black Mary Janes, a small wicker picnic basket on her arm. Hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes an old mossy churchyard at dusk, a picnic blanket among the headstones in black, candy pink, cream and moss green, the light is soft overcast twilight with a pink glow, and little ghosts and pink ribbons streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Graveyard Picnic [sk-chapel-picnic] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in black, candy pink, cream and moss green, lit by soft overcast twilight with a pink glow, a few tiny little ghosts and pink ribbons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Graveyard Picnic [sk-chapel-picnic] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in black, candy pink, cream and moss green, lit by soft overcast twilight with a pink glow, a few tiny little ghosts and pink ribbons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Graveyard Picnic [sk-chapel-picnic] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black pinafore dress over a white puff-sleeved blouse, pink cross-stitch along the hem and the straps, white frilly socks and black Mary Janes, a small wicker picnic basket on her arm. Hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: an old mossy churchyard at dusk, a picnic blanket among the headstones, broken into flat graphic shards of black, candy pink, cream and moss green splitting apart diagonally, a few speed lines, a scatter of little ghosts, pink ribbons and black lace, lit by soft overcast twilight with a pink glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Graveyard Picnic [sk-chapel-picnic] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-chapel-picnic-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black pinafore dress over a white puff-sleeved blouse, pink cross-stitch along the hem and the straps, white frilly socks and black Mary Janes, a small wicker picnic basket on her arm. Hair: her own jet-black hair in two fluffy space buns tied with pink ribbons, the rest falling straight down her back. Same face as the THIRD attached image. Background: an old mossy churchyard at dusk, a picnic blanket among the headstones, as flat graphic shapes in black, candy pink, cream and moss green, little ghosts and pink ribbons drifting across, lit by soft overcast twilight with a pink glow. The words are candy pink with a black outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-chapel-picnic-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one tiny white ghost flickers on in the centre. Frame 2: a few tiny ghosts and pink ribbon bows appear around it, candy pink light gathering. Frame 3, the peak: a pop of tiny ghosts and pink ribbon bows swirling out from a pink-white centre. Frame 4: the tiny ghosts and pink ribbon bows spreading wider, tumbling and turning. Frame 5: the tiny ghosts and pink ribbon bows breaking into small pink and moss-green sparkles. Frame 6: a few last tiny tiny ghosts and pink ribbon bows and pink and moss-green sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, black, candy pink, cream and moss green, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

**Wildflower Cottage**

### Meadow Picnic · `sk-cottage-meadow` (was 19Q / 19R on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Wildflower Cottage. A puff-sleeved floral prairie dress and a straw basket; two loose braids woven with wildflowers.

> **Look bible.** Palette: cream, wildflower pink, butter yellow and meadow green. Vibe: a sunny meadow picnic: soft, sweet and slow.  
> Motifs: daisies, wildflowers, butterflies and drifting dandelion seeds. Light: warm late-morning sunshine. Scene: a wildflower meadow on a sunny hill, a picnic blanket in the grass.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Meadow Picnic [sk-cottage-meadow] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a puff-sleeved cream prairie dress printed with small pink and yellow wildflowers, a lace collar, a ruffled hem at the ankle, brown lace-up boots, a straw basket of flowers on her arm. Hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a wildflower meadow on a sunny hill, a picnic blanket in the grass in cream, wildflower pink, butter yellow and meadow green, the light is warm late-morning sunshine, and daisies and butterflies streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Meadow Picnic [sk-cottage-meadow] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in cream, wildflower pink, butter yellow and meadow green, lit by warm late-morning sunshine, a few tiny daisies and butterflies scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Meadow Picnic [sk-cottage-meadow] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in cream, wildflower pink, butter yellow and meadow green, lit by warm late-morning sunshine, a few tiny daisies and butterflies scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Meadow Picnic [sk-cottage-meadow] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a puff-sleeved cream prairie dress printed with small pink and yellow wildflowers, a lace collar, a ruffled hem at the ankle, brown lace-up boots, a straw basket of flowers on her arm. Hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a wildflower meadow on a sunny hill, a picnic blanket in the grass, broken into flat graphic shards of cream, wildflower pink, butter yellow and meadow green splitting apart diagonally, a few speed lines, a scatter of daisies, wildflowers and butterflies, lit by warm late-morning sunshine. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Meadow Picnic [sk-cottage-meadow] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-meadow-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a puff-sleeved cream prairie dress printed with small pink and yellow wildflowers, a lace collar, a ruffled hem at the ankle, brown lace-up boots, a straw basket of flowers on her arm. Hair: her own jet-black hair in two loose braids over her shoulders, woven with little daisies and pink wildflowers. Same face as the THIRD attached image. Background: a wildflower meadow on a sunny hill, a picnic blanket in the grass, as flat graphic shapes in cream, wildflower pink, butter yellow and meadow green, daisies and butterflies drifting across, lit by warm late-morning sunshine. The words are cream with a meadow green outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-cottage-meadow-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one daisy flickers on in the centre. Frame 2: a few daisies and pink wildflowers appear around it, butter yellow light gathering. Frame 3, the peak: a bloom of daisies and wildflower petals bursting out from a sunny white centre, two butterflies in it. Frame 4: the daisies and pink wildflowers spreading wider, tumbling and turning. Frame 5: the daisies and pink wildflowers breaking into small dandelion seeds. Frame 6: a few last tiny daisies and pink wildflowers and dandelion seeds fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, cream, wildflower pink, butter yellow and meadow green, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Bakery Morning · `sk-cottage-bakery` (was 19S / 19T on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces and second pose sheet. **Still to make: its battle pieces (#4–#9 below, written Nov 7).**

Wildflower Cottage. A pink gingham apron over a cream blouse, flour on her cheek; a messy bun with a pink kerchief.

> **Look bible.** Palette: gingham pink, cream, crust brown and butter yellow. Vibe: a cottage bakery at dawn: warm, floury, cosy.  
> Motifs: flour puffs, little pastries, wheat ears and pink gingham hearts. Light: a warm golden oven glow and early morning sun. Scene: a cottage bakery kitchen in the morning, bread on wooden shelves.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Bakery Morning [sk-cottage-bakery] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a pink gingham apron over a cream blouse with rolled sleeves, a brown knee-length skirt, cream socks and brown loafers, a little flour on one cheek and on her hands, a wooden rolling pin tucked in the apron pocket. Hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a cottage bakery kitchen in the morning, bread on wooden shelves in gingham pink, cream, crust brown and butter yellow, the light is a warm golden oven glow and early morning sun, and flour puffs and little pastries streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Bakery Morning [sk-cottage-bakery] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a pink kerchief. Behind the face: bold flat diagonal stripes and speed lines in gingham pink, cream, crust brown and butter yellow, lit by a warm golden oven glow and early morning sun, a few tiny flour puffs and little pastries scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Bakery Morning [sk-cottage-bakery] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a pink kerchief. Behind the face: bold flat diagonal stripes and speed lines in gingham pink, cream, crust brown and butter yellow, lit by a warm golden oven glow and early morning sun, a few tiny flour puffs and little pastries scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Bakery Morning [sk-cottage-bakery] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink gingham apron over a cream blouse with rolled sleeves, a brown knee-length skirt, cream socks and brown loafers, a little flour on one cheek and on her hands, a wooden rolling pin tucked in the apron pocket. Hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a cottage bakery kitchen in the morning, bread on wooden shelves, broken into flat graphic shards of gingham pink, cream, crust brown and butter yellow splitting apart diagonally, a few speed lines, a scatter of flour puffs, little pastries and wheat ears, lit by a warm golden oven glow and early morning sun. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Bakery Morning [sk-cottage-bakery] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-bakery-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a pink gingham apron over a cream blouse with rolled sleeves, a brown knee-length skirt, cream socks and brown loafers, a little flour on one cheek and on her hands, a wooden rolling pin tucked in the apron pocket. Hair: her own jet-black hair in a messy bun under a pink kerchief, loose strands at the front. Same face as the THIRD attached image. Background: a cottage bakery kitchen in the morning, bread on wooden shelves, as flat graphic shapes in gingham pink, cream, crust brown and butter yellow, flour puffs and little pastries drifting across, lit by a warm golden oven glow and early morning sun. The words are gingham pink with a cream outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-cottage-bakery-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one puff of flour flickers on in the centre. Frame 2: a few flour puffs and tiny pink gingham hearts appear around it, butter yellow light gathering. Frame 3, the peak: a warm burst of flour and tiny pastries spinning out from a golden centre. Frame 4: the flour puffs and tiny pink gingham hearts spreading wider, tumbling and turning. Frame 5: the flour puffs and tiny pink gingham hearts breaking into small flour dust. Frame 6: a few last tiny flour puffs and tiny pink gingham hearts and flour dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, gingham pink, cream, crust brown and butter yellow, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Rainy Greenhouse · `sk-cottage-greenhouse` (was 19U / 19V on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces. **Still to make: the second pose sheet (#3 below) and its battle pieces (#4–#9, written Nov 7).**

Wildflower Cottage. A cream knit cardigan, rain boots and a clear umbrella; half-up hair with a butterfly clip and pink sun-kissed ends.

> **Look bible.** Palette: fern green, cream, rain-boot pink and glass grey-blue. Vibe: a rainy afternoon in a greenhouse: soft, green, peaceful.  
> Motifs: raindrops, fern leaves, little butterflies and glass reflections. Light: soft grey rain light through glass with a green glow. Scene: an old glass greenhouse full of ferns, rain on the roof.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Rainy Greenhouse [sk-cottage-greenhouse] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a chunky cream knit cardigan over a pale pink sundress, glossy pink rain boots, a clear bubble umbrella, a small garden trowel at her belt. Hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes an old glass greenhouse full of ferns, rain on the roof in fern green, cream, rain-boot pink and glass grey-blue, the light is soft grey rain light through glass with a green glow, and raindrops and fern leaves streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Rainy Greenhouse [sk-cottage-greenhouse] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in fern green, cream, rain-boot pink and glass grey-blue, lit by soft grey rain light through glass with a green glow, a few tiny raindrops and fern leaves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Rainy Greenhouse [sk-cottage-greenhouse] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in fern green, cream, rain-boot pink and glass grey-blue, lit by soft grey rain light through glass with a green glow, a few tiny raindrops and fern leaves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Rainy Greenhouse [sk-cottage-greenhouse] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a chunky cream knit cardigan over a pale pink sundress, glossy pink rain boots, a clear bubble umbrella, a small garden trowel at her belt. Hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: an old glass greenhouse full of ferns, rain on the roof, broken into flat graphic shards of fern green, cream, rain-boot pink and glass grey-blue splitting apart diagonally, a few speed lines, a scatter of raindrops, fern leaves and little butterflies, lit by soft grey rain light through glass with a green glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Rainy Greenhouse [sk-cottage-greenhouse] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-greenhouse-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a chunky cream knit cardigan over a pale pink sundress, glossy pink rain boots, a clear bubble umbrella, a small garden trowel at her belt. Hair: her own jet-black hair half-up with a pink butterfly clip, the ends sun-kissed pink and a little wavy from the damp. Same face as the THIRD attached image. Background: an old glass greenhouse full of ferns, rain on the roof, as flat graphic shapes in fern green, cream, rain-boot pink and glass grey-blue, raindrops and fern leaves drifting across, lit by soft grey rain light through glass with a green glow. The words are rain-boot pink with a fern green outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-cottage-greenhouse-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one raindrop flickers on in the centre. Frame 2: a few raindrops and fern leaves appear around it, fern green light gathering. Frame 3, the peak: a splash ring of raindrops and unfurling fern leaves from a pale glassy centre. Frame 4: the raindrops and fern leaves spreading wider, tumbling and turning. Frame 5: the raindrops and fern leaves breaking into small fine rain mist. Frame 6: a few last tiny raindrops and fern leaves and fine rain mist fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, fern green, cream, rain-boot pink and glass grey-blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Harvest Festival · `sk-cottage-harvest` (was 19W / 19X on the main list)

> ✅ **In the game (Nov 5, art batch 142):** pose sheet, scene faces. **Still to make: the second pose sheet (#3 below) and its battle pieces (#4–#9, written Nov 7).**

Wildflower Cottage. A laced bodice over a long tiered skirt and a flower crown; a long waterfall braid.

> **Look bible.** Palette: rust, mustard, dahlia pink and wheat gold. Vibe: an autumn harvest festival: warm, golden, a dance at dusk.  
> Motifs: dahlias, wheat ears, autumn leaves and lantern glow. Light: warm lantern light at dusk. Scene: a harvest fair at dusk, hay bales and strings of lanterns.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `Place Prompt Attachments/Harvest Festival [sk-cottage-harvest] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a brown corset-laced bodice over a cream blouse, a long tiered skirt in rust, mustard and pink, a crown of dahlias and wheat, a woven shawl over her shoulders, brown boots. Hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a harvest fair at dusk, hay bales and strings of lanterns in rust, mustard, dahlia pink and wheat gold, the light is warm lantern light at dusk, and autumn leaves and wheat ears streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `Place Prompt Attachments/Harvest Festival [sk-cottage-harvest] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a crown of dahlias and wheat. Behind the face: bold flat diagonal stripes and speed lines in rust, mustard, dahlia pink and wheat gold, lit by warm lantern light at dusk, a few tiny autumn leaves and wheat ears scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `Place Prompt Attachments/Harvest Festival [sk-cottage-harvest] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a crown of dahlias and wheat. Behind the face: bold flat diagonal stripes and speed lines in rust, mustard, dahlia pink and wheat gold, lit by warm lantern light at dusk, a few tiny autumn leaves and wheat ears scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `Place Prompt Attachments/Harvest Festival [sk-cottage-harvest] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a brown corset-laced bodice over a cream blouse, a long tiered skirt in rust, mustard and pink, a crown of dahlias and wheat, a woven shawl over her shoulders, brown boots. Hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a harvest fair at dusk, hay bales and strings of lanterns, broken into flat graphic shards of rust, mustard, dahlia pink and wheat gold splitting apart diagonally, a few speed lines, a scatter of dahlias, autumn leaves and wheat ears, lit by warm lantern light at dusk. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `Place Prompt Attachments/Harvest Festival [sk-cottage-harvest] - pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cottage-harvest-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a brown corset-laced bodice over a cream blouse, a long tiered skirt in rust, mustard and pink, a crown of dahlias and wheat, a woven shawl over her shoulders, brown boots. Hair: her own jet-black hair in a long waterfall braid down her back with copper-gold highlights woven through. Same face as the THIRD attached image. Background: a harvest fair at dusk, hay bales and strings of lanterns, as flat graphic shapes in rust, mustard, dahlia pink and wheat gold, autumn leaves and wheat ears drifting across, lit by warm lantern light at dusk. The words are wheat gold with a rust outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-cottage-harvest-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one dahlia flickers on in the centre. Frame 2: a few dahlia petals and wheat ears appear around it, mustard gold light gathering. Frame 3, the peak: a whirl of dahlia petals, autumn leaves and wheat from a golden centre. Frame 4: the dahlia petals and wheat ears spreading wider, tumbling and turning. Frame 5: the dahlia petals and wheat ears breaking into small golden chaff. Frame 6: a few last tiny dahlia petals and wheat ears and golden chaff fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, rust, mustard, dahlia pink and wheat gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Later: Magical Girl Solstice (pitch, not written yet)
Kat likes it; saved for a later series.
- **Sunrise Form:** a white-and-pink sailor-collar dress with a gold sun brooch and ribbon wings at the back; hair in two long high twin tails with pink tips and sun-shaped clips.
- **Moonlight Form:** a black-and-silver version with a crescent tiara and a sheer star-printed cape; hair in a single long braid threaded with silver ribbon.
- **Eclipse Form:** the final form, black and hot pink with a corona-shaped collar; hair loose, waist-length, with a pink ombré that glows at the ends.
- **Off-Duty Disguise:** her everyday look with a plush mascot on her shoulder and a compact mirror on a chain; hair in a messy bun with one pink streak.

### Collab outfits

Cosplay looks from games, anime, TV and movies, for the fighters (it's a fan game). Each look is a pose sheet plus scene portraits, then its battle pieces (#4 on, written Nov 7). The prompts describe the outfits only by how they look: no logos, no printed names. Five are couple sets (Solar with Haechan or Jungwon): make both pose sheets of a set in the same chat so the colours match.

### Stella, Winx Club · `sk-collab-stella` (was 21A / 21B on the main list)

The sun fairy, the costume Hyein picked for her that Runners Halloween: glittering orange and pink, little wings, and Stella's long golden hair.

> **Look bible.** Palette: sun orange, fairy pink, gold and soft cream. Vibe: a sun fairy: bright, glittery and a little extra.  
> Motifs: sun rays, gold fairy dust, sparkles and little sun orbs. Light: bright golden sunlight through a glittery haze. Scene: a sparkling sky above the clouds at sunrise.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-stella-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a glittering orange satin halter crop top, a short sparkly orange-and-pink mini skirt, small clear sheer fairy wings edged in gold on her back, a thin gold tiara band across her forehead with a small sun gem, gold sparkle make-up under her eyes, orange-and-pink platform sandals with straps up the calf, gold wrist cuffs. Hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a sparkling sky above the clouds at sunrise in sun orange, fairy pink, gold and soft cream, the light is bright golden sunlight through a glittery haze, and sun rays and gold fairy dust streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-stella-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a thin gold tiara band with a small sun gem across her forehead and gold sparkle make-up under her eyes. Behind the face: bold flat diagonal stripes and speed lines in sun orange, fairy pink, gold and soft cream, lit by bright golden sunlight through a glittery haze, a few tiny sun rays and gold fairy dust scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-stella-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a thin gold tiara band with a small sun gem across her forehead and gold sparkle make-up under her eyes. Behind the face: bold flat diagonal stripes and speed lines in sun orange, fairy pink, gold and soft cream, lit by bright golden sunlight through a glittery haze, a few tiny sun rays and gold fairy dust scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-stella-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a glittering orange satin halter crop top, a short sparkly orange-and-pink mini skirt, small clear sheer fairy wings edged in gold on her back, a thin gold tiara band across her forehead with a small sun gem, gold sparkle make-up under her eyes, orange-and-pink platform sandals with straps up the calf, gold wrist cuffs. Hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a sparkling sky above the clouds at sunrise, broken into flat graphic shards of sun orange, fairy pink, gold and soft cream splitting apart diagonally, a few speed lines, a scatter of sun rays, gold fairy dust and sparkles, lit by bright golden sunlight through a glittery haze. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-stella-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-stella-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a glittering orange satin halter crop top, a short sparkly orange-and-pink mini skirt, small clear sheer fairy wings edged in gold on her back, a thin gold tiara band across her forehead with a small sun gem, gold sparkle make-up under her eyes, orange-and-pink platform sandals with straps up the calf, gold wrist cuffs. Hair: long golden-blonde hair to her waist (her face stays exactly the same), styled in a high half-up with the top section tied in a small bun behind the tiara, glossy and full. Same face as the THIRD attached image. Background: a sparkling sky above the clouds at sunrise, as flat graphic shapes in sun orange, fairy pink, gold and soft cream, sun rays and gold fairy dust drifting across, lit by bright golden sunlight through a glittery haze. The words are gold with a sun orange outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-stella-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small sun orb flickers on in the centre. Frame 2: a few sun rays and gold fairy dust appear around it, sun orange light gathering. Frame 3, the peak: a blazing sunburst of rays and gold fairy dust from a white-gold centre. Frame 4: the sun rays and gold fairy dust spreading wider, tumbling and turning. Frame 5: the sun rays and gold fairy dust breaking into small glitter. Frame 6: a few last tiny sun rays and gold fairy dust and glitter fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, sun orange, fairy pink, gold and soft cream, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Sailor Moon · `sk-collab-sailor` (was 21C / 21D on the main list)

Couple set with Haechan's Tuxedo Mask. The classic sailor-guardian uniform; odango buns and very long twin tails in her own black hair, tipped gold.

> **Look bible.** Palette: sailor navy, white, red and moon gold. Vibe: a magical-girl transformation: fighting by moonlight.  
> Motifs: crescent moons, sparkles, ribbons and little pink hearts. Light: bright moonlight with a pink-gold transformation glow. Scene: a city rooftop at night under a full moon.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-sailor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a white sailor-guardian leotard with a navy-blue sailor collar edged in white stripes, a big red bow at the chest with a gold crescent brooch, a short navy pleated mini skirt, a small red bow at the back, long white gloves with red cuffs, red knee-high boots with a white crescent at the top, a gold tiara with a red gem, red crescent earrings. Hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a city rooftop at night under a full moon in sailor navy, white, red and moon gold, the light is bright moonlight with a pink-gold transformation glow, and crescent moons and sparkles streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-sailor-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a gold tiara with a red gem across her forehead. Behind the face: bold flat diagonal stripes and speed lines in sailor navy, white, red and moon gold, lit by bright moonlight with a pink-gold transformation glow, a few tiny crescent moons and sparkles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-sailor-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a gold tiara with a red gem across her forehead. Behind the face: bold flat diagonal stripes and speed lines in sailor navy, white, red and moon gold, lit by bright moonlight with a pink-gold transformation glow, a few tiny crescent moons and sparkles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-sailor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a white sailor-guardian leotard with a navy-blue sailor collar edged in white stripes, a big red bow at the chest with a gold crescent brooch, a short navy pleated mini skirt, a small red bow at the back, long white gloves with red cuffs, red knee-high boots with a white crescent at the top, a gold tiara with a red gem, red crescent earrings. Hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a city rooftop at night under a full moon, broken into flat graphic shards of sailor navy, white, red and moon gold splitting apart diagonally, a few speed lines, a scatter of crescent moons, ribbons and sparkles, lit by bright moonlight with a pink-gold transformation glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-sailor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sailor-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a white sailor-guardian leotard with a navy-blue sailor collar edged in white stripes, a big red bow at the chest with a gold crescent brooch, a short navy pleated mini skirt, a small red bow at the back, long white gloves with red cuffs, red knee-high boots with a white crescent at the top, a gold tiara with a red gem, red crescent earrings. Hair: her own jet-black hair in the classic odango style: two round buns on top of her head with very long twin tails falling from each to her knees, the ends dipped pale gold, small red gem clips on the buns. Same face as the THIRD attached image. Background: a city rooftop at night under a full moon, as flat graphic shapes in sailor navy, white, red and moon gold, crescent moons and sparkles drifting across, lit by bright moonlight with a pink-gold transformation glow. The words are moon gold with a sailor navy outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-sailor-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one gold crescent moon flickers on in the centre. Frame 2: a few gold crescents and pink-white sparkles appear around it, moon gold light gathering. Frame 3, the peak: a crescent-moon burst with ribbons of pink light and little hearts from a white-gold centre. Frame 4: the gold crescents and pink-white sparkles spreading wider, tumbling and turning. Frame 5: the gold crescents and pink-white sparkles breaking into small gold sparkles. Frame 6: a few last tiny gold crescents and pink-white sparkles and gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, sailor navy, white, red and moon gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Draculaura, Monster High · `sk-collab-ghoul` (was 21G / 21H on the main list)

Couple set with Haechan's Clawd. The sweet vampire in pink and black, bat bows and heart details; black pigtails with hot-pink streaks.

> **Look bible.** Palette: bubblegum pink, black, lace white and cherry red. Vibe: a sweet vampire: cute, pink and a little spooky.  
> Motifs: tiny bats, pink hearts, black lace and sparkles. Light: a pink neon glow in the dark. Scene: a spooky-cute high school hallway at night, pink-and-black lockers.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-ghoul-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black off-shoulder top with pink lace trim and a little bat-wing collar, a layered pink-and-black tulle mini skirt printed with tiny bats and hearts, black lace fingerless gloves, a black choker with a pink heart and bat charm, pink heart earrings, black lace-up platform boots with pink hearts on the sides, a small pink heart drawn under one eye, two tiny cute vampire fangs in her smile. Hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a spooky-cute high school hallway at night, pink-and-black lockers in bubblegum pink, black, lace white and cherry red, the light is a pink neon glow in the dark, and tiny bats and pink hearts streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-ghoul-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a straight blunt fringe and a small pink heart drawn under one eye. Behind the face: bold flat diagonal stripes and speed lines in bubblegum pink, black, lace white and cherry red, lit by a pink neon glow in the dark, a few tiny tiny bats and pink hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-ghoul-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a straight blunt fringe and a small pink heart drawn under one eye. Behind the face: bold flat diagonal stripes and speed lines in bubblegum pink, black, lace white and cherry red, lit by a pink neon glow in the dark, a few tiny tiny bats and pink hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-ghoul-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black off-shoulder top with pink lace trim and a little bat-wing collar, a layered pink-and-black tulle mini skirt printed with tiny bats and hearts, black lace fingerless gloves, a black choker with a pink heart and bat charm, pink heart earrings, black lace-up platform boots with pink hearts on the sides, a small pink heart drawn under one eye, two tiny cute vampire fangs in her smile. Hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a spooky-cute high school hallway at night, pink-and-black lockers, broken into flat graphic shards of bubblegum pink, black, lace white and cherry red splitting apart diagonally, a few speed lines, a scatter of tiny bats, pink hearts and black lace, lit by a pink neon glow in the dark. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-ghoul-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-ghoul-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black off-shoulder top with pink lace trim and a little bat-wing collar, a layered pink-and-black tulle mini skirt printed with tiny bats and hearts, black lace fingerless gloves, a black choker with a pink heart and bat charm, pink heart earrings, black lace-up platform boots with pink hearts on the sides, a small pink heart drawn under one eye, two tiny cute vampire fangs in her smile. Hair: her own jet-black hair with bold hot-pink streaks, in two high bouncy pigtails tied with black bat-shaped bows, a straight blunt fringe. Same face as the THIRD attached image. Background: a spooky-cute high school hallway at night, pink-and-black lockers, as flat graphic shapes in bubblegum pink, black, lace white and cherry red, tiny bats and pink hearts drifting across, lit by a pink neon glow in the dark. The words are bubblegum pink with a black outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-ghoul-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one tiny pink heart flickers on in the centre. Frame 2: a few tiny black bats and pink hearts appear around it, bubblegum pink light gathering. Frame 3, the peak: a burst of tiny bats and pink hearts from a pink-white centre. Frame 4: the tiny black bats and pink hearts spreading wider, tumbling and turning. Frame 5: the tiny black bats and pink hearts breaking into small pink sparkles. Frame 6: a few last tiny tiny black bats and pink hearts and pink sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, bubblegum pink, black, lace white and cherry red, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Sukajan Kiriko, Overwatch · `sk-collab-sukajan` (was 21K / 21L on the main list)

Her main again, street style this time (she already has the shrine-robe Kiriko Cosplay): an embroidered souvenir jacket and cargo pants; high ponytail with red streaks.

> **Look bible.** Palette: jacket black, cherry red, fox white and blossom pink. Vibe: a street-style shrine kid: quick, cocky and kind.  
> Motifs: white foxes, cherry blossoms, blank paper charms and kunai. Light: red and pink neon on a night street. Scene: a neon back alley at night with paper lanterns and a small shrine gate.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-sukajan-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an oversized black-and-red satin souvenir jacket embroidered with a white fox and cherry blossoms on the sleeves, worn slipping off one shoulder, a fitted black crop top, high-waisted wide black cargo pants with red straps, black-and-white sneakers, black fingerless gloves, a kunai holster at the thigh, a small red fox-mask charm at the belt. Hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a neon back alley at night with paper lanterns and a small shrine gate in jacket black, cherry red, fox white and blossom pink, the light is red and pink neon on a night street, and cherry blossoms and blank paper charms streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-sukajan-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a short blunt fringe. Behind the face: bold flat diagonal stripes and speed lines in jacket black, cherry red, fox white and blossom pink, lit by red and pink neon on a night street, a few tiny cherry blossoms and blank paper charms scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-sukajan-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a short blunt fringe. Behind the face: bold flat diagonal stripes and speed lines in jacket black, cherry red, fox white and blossom pink, lit by red and pink neon on a night street, a few tiny cherry blossoms and blank paper charms scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-sukajan-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an oversized black-and-red satin souvenir jacket embroidered with a white fox and cherry blossoms on the sleeves, worn slipping off one shoulder, a fitted black crop top, high-waisted wide black cargo pants with red straps, black-and-white sneakers, black fingerless gloves, a kunai holster at the thigh, a small red fox-mask charm at the belt. Hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a neon back alley at night with paper lanterns and a small shrine gate, broken into flat graphic shards of jacket black, cherry red, fox white and blossom pink splitting apart diagonally, a few speed lines, a scatter of cherry blossoms, blank paper charms and kunai, lit by red and pink neon on a night street. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-sukajan-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-sukajan-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: an oversized black-and-red satin souvenir jacket embroidered with a white fox and cherry blossoms on the sleeves, worn slipping off one shoulder, a fitted black crop top, high-waisted wide black cargo pants with red straps, black-and-white sneakers, black fingerless gloves, a kunai holster at the thigh, a small red fox-mask charm at the belt. Hair: her own jet-black hair in a high ponytail with a short blunt fringe, two bright red streaks through the ponytail, tied with a red ribbon. Same face as the THIRD attached image. Background: a neon back alley at night with paper lanterns and a small shrine gate, as flat graphic shapes in jacket black, cherry red, fox white and blossom pink, cherry blossoms and blank paper charms drifting across, lit by red and pink neon on a night street. The words are white with a cherry red outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-sukajan-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one blank paper charm flickers on in the centre. Frame 2: a few blank paper charms and cherry blossom petals appear around it, cherry red light gathering. Frame 3, the peak: a burst of blank paper charms and blossom petals around the shape of a white spirit fox, from a white-hot centre. Frame 4: the blank paper charms and cherry blossom petals spreading wider, tumbling and turning. Frame 5: the blank paper charms and cherry blossom petals breaking into small red and pink embers. Frame 6: a few last tiny blank paper charms and cherry blossom petals and red and pink embers fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, jacket black, cherry red, fox white and blossom pink, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Cardcaptor Sakura · `sk-collab-cardcaptor` (was 21M / 21N on the main list)

Couple set with Jungwon's Syaoran. A pink-and-white battle dress with a winged hat and a star wand; a playful short bob.

> **Look bible.** Palette: candy pink, white, gold and sky blue. Vibe: a magical girl out catching cards: brave, sweet, wings everywhere.  
> Motifs: pink stars, white feathers, sparkles and cherry blossom petals. Light: a soft pink magic glow at night. Scene: a moonlit town seen from the rooftops at night, a glowing magic circle underfoot.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-cardcaptor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a pink-and-white puffy dress with a short bell skirt and white frills, a big pink bow at the chest, a white hat with small white wings and a pink ribbon, white gloves, white-and-pink boots with small wings at the ankles. Hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a moonlit town seen from the rooftops at night, a glowing magic circle underfoot in candy pink, white, gold and sky blue, the light is a soft pink magic glow at night, and pink stars and white feathers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-cardcaptor-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a white hat with small white wings. Behind the face: bold flat diagonal stripes and speed lines in candy pink, white, gold and sky blue, lit by a soft pink magic glow at night, a few tiny pink stars and white feathers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-cardcaptor-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a white hat with small white wings. Behind the face: bold flat diagonal stripes and speed lines in candy pink, white, gold and sky blue, lit by a soft pink magic glow at night, a few tiny pink stars and white feathers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-cardcaptor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink-and-white puffy dress with a short bell skirt and white frills, a big pink bow at the chest, a white hat with small white wings and a pink ribbon, white gloves, white-and-pink boots with small wings at the ankles. Hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a moonlit town seen from the rooftops at night, a glowing magic circle underfoot, broken into flat graphic shards of candy pink, white, gold and sky blue splitting apart diagonally, a few speed lines, a scatter of pink stars, white feathers and sparkles, lit by a soft pink magic glow at night. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-cardcaptor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-cardcaptor-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a pink-and-white puffy dress with a short bell skirt and white frills, a big pink bow at the chest, a white hat with small white wings and a pink ribbon, white gloves, white-and-pink boots with small wings at the ankles. Hair: her own jet-black hair cut into a short chin-length bob with two little face-framing strands tied with pink beads, sweet rose-pink tips. Same face as the THIRD attached image. Background: a moonlit town seen from the rooftops at night, a glowing magic circle underfoot, as flat graphic shapes in candy pink, white, gold and sky blue, pink stars and white feathers drifting across, lit by a soft pink magic glow at night. The words are candy pink with a gold outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-cardcaptor-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one pink star flickers on in the centre. Frame 2: a few pink stars and white feathers appear around it, candy pink light gathering. Frame 3, the peak: a glowing magic circle opening in a ring of pink stars and white feathers from a gold-white centre. Frame 4: the pink stars and white feathers spreading wider, tumbling and turning. Frame 5: the pink stars and white feathers breaking into small gold sparkles. Frame 6: a few last tiny pink stars and white feathers and gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, candy pink, white, gold and sky blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Wednesday · `sk-collab-wednesday` (was 21Q / 21R on the main list)

The black dance dress and the white collar, completely unimpressed; two long braids with one silver streak in the fringe.

> **Look bible.** Palette: black, white, storm grey and a touch of dark purple. Vibe: deadpan gothic: completely unimpressed.  
> Motifs: cobwebs, black spiders, raven feathers and rain. Light: cold grey storm light with a flash of lightning. Scene: a gothic school hall at night, rain on tall windows.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-wednesday-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a knee-length black dance dress with a layered ruffled tulle skirt and long sheer black sleeves, a crisp white Peter Pan collar and white cuffs, black tights, chunky black platform boots, a tiny black spider brooch. Hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a gothic school hall at night, rain on tall windows in black, white, storm grey and a touch of dark purple, the light is cold grey storm light with a flash of lightning, and black spiders and raven feathers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-wednesday-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a razor-straight blunt fringe with one thin silver streak. Behind the face: bold flat diagonal stripes and speed lines in black, white, storm grey and a touch of dark purple, lit by cold grey storm light with a flash of lightning, a few tiny black spiders and raven feathers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-wednesday-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a razor-straight blunt fringe with one thin silver streak. Behind the face: bold flat diagonal stripes and speed lines in black, white, storm grey and a touch of dark purple, lit by cold grey storm light with a flash of lightning, a few tiny black spiders and raven feathers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-wednesday-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a knee-length black dance dress with a layered ruffled tulle skirt and long sheer black sleeves, a crisp white Peter Pan collar and white cuffs, black tights, chunky black platform boots, a tiny black spider brooch. Hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a gothic school hall at night, rain on tall windows, broken into flat graphic shards of black, white, storm grey and a touch of dark purple splitting apart diagonally, a few speed lines, a scatter of cobwebs, black spiders and raven feathers, lit by cold grey storm light with a flash of lightning. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-wednesday-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-wednesday-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a knee-length black dance dress with a layered ruffled tulle skirt and long sheer black sleeves, a crisp white Peter Pan collar and white cuffs, black tights, chunky black platform boots, a tiny black spider brooch. Hair: her own jet-black hair in two tight long braids and a razor-straight blunt fringe, one thin silver streak through the fringe. Same face as the THIRD attached image. Background: a gothic school hall at night, rain on tall windows, as flat graphic shapes in black, white, storm grey and a touch of dark purple, black spiders and raven feathers drifting across, lit by cold grey storm light with a flash of lightning. The words are white with a black outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-wednesday-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one black spider flickers on in the centre. Frame 2: a few cobweb strands and raven feathers appear around it, storm grey light gathering. Frame 3, the peak: a cobweb snapping outward in a burst of black feathers from a cold white centre. Frame 4: the cobweb strands and raven feathers spreading wider, tumbling and turning. Frame 5: the cobweb strands and raven feathers breaking into small grey ash. Frame 6: a few last tiny cobweb strands and raven feathers and grey ash fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, black, white, storm grey and a touch of dark purple, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Ghost-Spider, Spider-Verse · `sk-collab-spider` (was 21S / 21T on the main list)

Couple set with Haechan's Miles. The white hooded spider suit, redone in hot pink and black; a platinum undercut bob.

> **Look bible.** Palette: suit white, hot pink, black and electric teal. Vibe: a punk-ballet superhero: graceful and loud.  
> Motifs: web strands, comic halftone dots, glitch shards and drum-beat shock waves. Light: pink and teal neon city light. Scene: a comic-book city skyline at night, seen from a rooftop.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-spider-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a fitted white superhero bodysuit with a white hood pushed back, hot-pink and black web lines over the hood, the arms and the inner legs, a simple black spider shape on the chest (no letters), black-and-pink ballet-style shoes. Hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut). Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a comic-book city skyline at night, seen from a rooftop in suit white, hot pink, black and electric teal, the light is pink and teal neon city light, and web strands and halftone dots streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-spider-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in suit white, hot pink, black and electric teal, lit by pink and teal neon city light, a few tiny web strands and halftone dots scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-spider-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in suit white, hot pink, black and electric teal, lit by pink and teal neon city light, a few tiny web strands and halftone dots scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-spider-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a fitted white superhero bodysuit with a white hood pushed back, hot-pink and black web lines over the hood, the arms and the inner legs, a simple black spider shape on the chest (no letters), black-and-pink ballet-style shoes. Hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a comic-book city skyline at night, seen from a rooftop, broken into flat graphic shards of suit white, hot pink, black and electric teal splitting apart diagonally, a few speed lines, a scatter of web strands, halftone dots and glitch shards, lit by pink and teal neon city light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-spider-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-spider-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a fitted white superhero bodysuit with a white hood pushed back, hot-pink and black web lines over the hood, the arms and the inner legs, a simple black spider shape on the chest (no letters), black-and-pink ballet-style shoes. Hair: her own hair cut into a sleek jaw-length bob dyed platinum blonde with jet-black roots, shaved short on one side (an undercut). Same face as the THIRD attached image. Background: a comic-book city skyline at night, seen from a rooftop, as flat graphic shapes in suit white, hot pink, black and electric teal, web strands and halftone dots drifting across, lit by pink and teal neon city light. The words are white with a hot pink outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-spider-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one pink web strand flickers on in the centre. Frame 2: a few pink web strands and halftone dots appear around it, hot pink light gathering. Frame 3, the peak: a web bursting outward in pink lines and glitch shards from a white centre. Frame 4: the pink web strands and halftone dots spreading wider, tumbling and turning. Frame 5: the pink web strands and halftone dots breaking into small teal glitch pixels. Frame 6: a few last tiny pink web strands and halftone dots and teal glitch pixels fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, suit white, hot pink, black and electric teal, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Sophie, Howl's Moving Castle · `sk-collab-castle` (was 21W / 21X on the main list)

Couple set with Jungwon's Howl. A sky-blue dress, a straw hat and a knit shawl; one long braid shot with starlight silver.

> **Look bible.** Palette: sky blue, cream, starlight silver and hearth orange. Vibe: a girl braver than she thinks: soft, starry and windswept.  
> Motifs: falling stars, flower petals, wind and little hearth flames. Light: soft golden-blue twilight. Scene: a flower field by a mountain lake at twilight.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Solar.png`, then `skin-sk-collab-castle-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long-sleeved soft sky-blue dress with a full ankle-length skirt, a white lace collar, a cream knit shawl over the shoulders, a wide straw hat with a pink ribbon, brown ankle boots, a small star charm on a chain. Hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a flower field by a mountain lake at twilight in sky blue, cream, starlight silver and hearth orange, the light is soft golden-blue twilight, and falling stars and flower petals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-collab-castle-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in sky blue, cream, starlight silver and hearth orange, lit by soft golden-blue twilight, a few tiny falling stars and flower petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. "1 MORE!" eye strip, second picture v2

Attach: `skin-sk-collab-castle-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-onemore-v2.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking straight at the viewer, eyes wide open and bright as if the sun is in them, a confident, determined expression. Her hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in sky blue, cream, starlight silver and hearth orange, lit by soft golden-blue twilight, a few tiny falling stars and flower petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 7. Entrance card

Attach: `skin-sk-collab-castle-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long-sleeved soft sky-blue dress with a full ankle-length skirt, a white lace collar, a cream knit shawl over the shoulders, a wide straw hat with a pink ribbon, brown ankle boots, a small star charm on a chain. Hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a flower field by a mountain lake at twilight, broken into flat graphic shards of sky blue, cream, starlight silver and hearth orange splitting apart diagonally, a few speed lines, a scatter of falling stars, flower petals and small hearth flames, lit by soft golden-blue twilight. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 8. Finish card

Attach: `Place Prompt Attachments/Finish card - Solar.png`, then `skin-sk-collab-castle-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-collab-castle-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a long-sleeved soft sky-blue dress with a full ankle-length skirt, a white lace collar, a cream knit shawl over the shoulders, a wide straw hat with a pink ribbon, brown ankle boots, a small star charm on a chain. Hair: her own jet-black hair in a long loose braid over one shoulder, shimmering starlight-silver streaks through the braid and a few silver strands at the front. Same face as the THIRD attached image. Background: a flower field by a mountain lake at twilight, as flat graphic shapes in sky blue, cream, starlight silver and hearth orange, falling stars and flower petals drifting across, lit by soft golden-blue twilight. The words are cream with a sky blue outline. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

#### 9. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-collab-castle-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one falling star flickers on in the centre. Frame 2: a few falling stars and flower petals appear around it, sky blue light gathering. Frame 3, the peak: a rush of falling stars and petals spiralling out from a warm white centre, a small flame flickering at its heart. Frame 4: the falling stars and flower petals spreading wider, tumbling and turning. Frame 5: the falling stars and flower petals breaking into small silver star dust. Frame 6: a few last tiny falling stars and flower petals and silver star dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, sky blue, cream, starlight silver and hearth orange, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

---

## Haechan

His own look and all 17 of his Wardrobe looks are made, signature effect sheets included (Nov 4: Sigma Chi Runner and Garage Band's effect sheet). New collab looks are below. Finish-card words: **TOO EASY**

### New looks (collab outfits, moved from the main art list Nov 4)

Couple sets with Solar's collab looks: make both pose sheets of a set in the same chat so the colours match. Their battle pieces (#4–#8, written Nov 7) come after the pose sheet and scene portraits: Theurgy cut-in, one "1 MORE!" picture, entrance card, finish card, signature effect sheet.

### Tuxedo Mask · `sk-haechan-collab-tuxedo` (was 21E / 21F on the main list)

Couple set with Solar's Sailor Moon. A tuxedo with tails, a top hat, a white mask, a red-lined cape and a rose.

> **Look bible.** Palette: tuxedo black, rose red, white and moon silver. Vibe: a masked hero who always arrives at the right moment.  
> Motifs: red roses, rose petals, a sweeping cape and crescent moons. Light: silver moonlight with a red glow. Scene: a moonlit rooftop over the city.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Haechan.png`, then `skin-sk-haechan-collab-tuxedo-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black tuxedo with tails, a white shirt and a black bow tie, white gloves, a black top hat, a white domino eye mask, a long black cape lined in red, a single red rose tucked in the lapel, black dress shoes. Hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a moonlit rooftop over the city in tuxedo black, rose red, white and moon silver, the light is silver moonlight with a red glow, and red roses and rose petals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-haechan-collab-tuxedo-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a white domino eye mask. Behind the face: bold flat diagonal stripes and speed lines in tuxedo black, rose red, white and moon silver, lit by silver moonlight with a red glow, a few tiny red roses and rose petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. Entrance card

Attach: `skin-sk-haechan-collab-tuxedo-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black tuxedo with tails, a white shirt and a black bow tie, white gloves, a black top hat, a white domino eye mask, a long black cape lined in red, a single red rose tucked in the lapel, black dress shoes. Hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a moonlit rooftop over the city, broken into flat graphic shards of tuxedo black, rose red, white and moon silver splitting apart diagonally, a few speed lines, a scatter of red roses, rose petals and crescent moons, lit by silver moonlight with a red glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 7. Finish card

Attach: `Place Prompt Attachments/Finish card - Haechan.png`, then `skin-sk-haechan-collab-tuxedo-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-tuxedo-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a black tuxedo with tails, a white shirt and a black bow tie, white gloves, a black top hat, a white domino eye mask, a long black cape lined in red, a single red rose tucked in the lapel, black dress shoes. Hair: his own black hair, swept back under the top hat with a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Background: a moonlit rooftop over the city, as flat graphic shapes in tuxedo black, rose red, white and moon silver, red roses and rose petals drifting across, lit by silver moonlight with a red glow. The words are white with a rose red outline. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

#### 8. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-haechan-collab-tuxedo-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one red rose flickers on in the centre. Frame 2: a few red roses and rose petals appear around it, rose red light gathering. Frame 3, the peak: a thrown red rose bursting into a spray of petals from a white-hot centre. Frame 4: the red roses and rose petals spreading wider, tumbling and turning. Frame 5: the red roses and rose petals breaking into small red petals. Frame 6: a few last tiny red roses and rose petals and red petals fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, tuxedo black, rose red, white and moon silver, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Clawd, Monster High · `sk-haechan-collab-wolf` (was 21I / 21J on the main list)

Couple set with Solar's Draculaura. The werewolf boyfriend: a fur-collared varsity jacket and wolf ears.

> **Look bible.** Palette: varsity purple, black, tan and moon silver. Vibe: the werewolf boyfriend: loyal, loud and a bit fluffy.  
> Motifs: claw marks, a full moon, fur tufts and paw prints. Light: big full moonlight with purple shadows. Scene: a high school sports field at night under a full moon.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Haechan.png`, then `skin-sk-haechan-collab-wolf-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a purple-and-black varsity jacket with tan sleeves and a fur collar, a small claw-mark patch on the chest (no letters), a black tee, dark ripped jeans, black boots, a dark brown wolf-ear headband, a silver chain, fingerless black gloves. Hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a high school sports field at night under a full moon in varsity purple, black, tan and moon silver, the light is big full moonlight with purple shadows, and claw marks and fur tufts streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-haechan-collab-wolf-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a dark brown wolf-ear headband. Behind the face: bold flat diagonal stripes and speed lines in varsity purple, black, tan and moon silver, lit by big full moonlight with purple shadows, a few tiny claw marks and fur tufts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. Entrance card

Attach: `skin-sk-haechan-collab-wolf-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a purple-and-black varsity jacket with tan sleeves and a fur collar, a small claw-mark patch on the chest (no letters), a black tee, dark ripped jeans, black boots, a dark brown wolf-ear headband, a silver chain, fingerless black gloves. Hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a high school sports field at night under a full moon, broken into flat graphic shards of varsity purple, black, tan and moon silver splitting apart diagonally, a few speed lines, a scatter of claw marks, fur tufts and paw prints, lit by big full moonlight with purple shadows. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 7. Finish card

Attach: `Place Prompt Attachments/Finish card - Haechan.png`, then `skin-sk-haechan-collab-wolf-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-wolf-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a purple-and-black varsity jacket with tan sleeves and a fur collar, a small claw-mark patch on the chest (no letters), a black tee, dark ripped jeans, black boots, a dark brown wolf-ear headband, a silver chain, fingerless black gloves. Hair: his own dark brown hair, a messy fluffy fringe under the wolf ears (a look he has really worn). Same face as the THIRD attached image. Background: a high school sports field at night under a full moon, as flat graphic shapes in varsity purple, black, tan and moon silver, claw marks and fur tufts drifting across, lit by big full moonlight with purple shadows. The words are moon silver with a varsity purple outline. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

#### 8. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-haechan-collab-wolf-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one claw mark flickers on in the centre. Frame 2: a few claw marks and fur tufts appear around it, varsity purple light gathering. Frame 3, the peak: three giant claw slashes tearing outward from a silver-white centre. Frame 4: the claw marks and fur tufts spreading wider, tumbling and turning. Frame 5: the claw marks and fur tufts breaking into small silver sparks. Frame 6: a few last tiny claw marks and fur tufts and silver sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, varsity purple, black, tan and moon silver, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Miles, Spider-Verse · `sk-haechan-collab-spider` (was 21U / 21V on the main list)

Couple set with Solar's Ghost-Spider. The black-and-red spider suit under an open hoodie, mask pushed up.

> **Look bible.** Palette: suit black, spider red, graffiti purple and electric white. Vibe: a street-art superhero: cool, glitchy and a step ahead.  
> Motifs: red web strands, electric sparks, graffiti spray and comic halftone dots. Light: red and purple neon street light. Scene: a graffiti-covered rooftop in a comic-book city at night.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Haechan.png`, then `skin-sk-haechan-collab-spider-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black superhero bodysuit with red web lines and a simple red spider shape on the chest (no letters), a black zip hoodie worn open over the suit with the hood down, black-and-red high-top sneakers, black shorts over the suit, the black mask pushed up on his forehead. Hair: his own black hair, short and textured with a soft fringe (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a graffiti-covered rooftop in a comic-book city at night in suit black, spider red, graffiti purple and electric white, the light is red and purple neon street light, and electric sparks and halftone dots streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-haechan-collab-spider-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, short and textured with a soft fringe (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: the black mask pushed up on his forehead. Behind the face: bold flat diagonal stripes and speed lines in suit black, spider red, graffiti purple and electric white, lit by red and purple neon street light, a few tiny electric sparks and halftone dots scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. Entrance card

Attach: `skin-sk-haechan-collab-spider-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black superhero bodysuit with red web lines and a simple red spider shape on the chest (no letters), a black zip hoodie worn open over the suit with the hood down, black-and-red high-top sneakers, black shorts over the suit, the black mask pushed up on his forehead. Hair: his own black hair, short and textured with a soft fringe (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a graffiti-covered rooftop in a comic-book city at night, broken into flat graphic shards of suit black, spider red, graffiti purple and electric white splitting apart diagonally, a few speed lines, a scatter of red web strands, electric sparks and graffiti spray, lit by red and purple neon street light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 7. Finish card

Attach: `Place Prompt Attachments/Finish card - Haechan.png`, then `skin-sk-haechan-collab-spider-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Haechan.png`  
Save as: `skin-sk-haechan-collab-spider-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a black superhero bodysuit with red web lines and a simple red spider shape on the chest (no letters), a black zip hoodie worn open over the suit with the hood down, black-and-red high-top sneakers, black shorts over the suit, the black mask pushed up on his forehead. Hair: his own black hair, short and textured with a soft fringe (a look he has really worn). Same face as the THIRD attached image. Background: a graffiti-covered rooftop in a comic-book city at night, as flat graphic shapes in suit black, spider red, graffiti purple and electric white, electric sparks and halftone dots drifting across, lit by red and purple neon street light. The words are white with a spider red outline. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

#### 8. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-haechan-collab-spider-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one red electric spark flickers on in the centre. Frame 2: a few red electric sparks and web strands appear around it, spider red light gathering. Frame 3, the peak: a crackling burst of red electricity and web strands from a white-hot centre. Frame 4: the red electric sparks and web strands spreading wider, tumbling and turning. Frame 5: the red electric sparks and web strands breaking into small red glitch pixels. Frame 6: a few last tiny red electric sparks and web strands and red glitch pixels fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, suit black, spider red, graffiti purple and electric white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

## Jungwon

His own look and all 11 of his Wardrobe looks are made (Nov 4: Sweater Weather, Heir’s Suit, After Hours, Movie Date, HOAX Council Uniform, and the rest of Pool Day). New collab looks are below. Finish-card words: **MEETING ADJOURNED**

### New looks (collab outfits, moved from the main art list Nov 4)

Couple sets with Solar's collab looks: make both pose sheets of a set in the same chat so the colours match. Their battle pieces (#4–#8, written Nov 7) come after the pose sheet and scene portraits: Theurgy cut-in, one "1 MORE!" picture, entrance card, finish card, signature effect sheet.

### Syaoran, Cardcaptor Sakura · `sk-jungwon-collab-cardcaptor` (was 21O / 21P on the main list)

Couple set with Solar's Cardcaptor Sakura. The green battle robe with gold trim, the cap and a jade compass.

> **Look bible.** Palette: jade green, white, gold and blossom pink. Vibe: a serious young swordsman who would do anything for her.  
> Motifs: green lightning, gold compass rings, cherry blossom petals and blank paper charms. Light: a green-gold lightning glow at dusk. Scene: a temple courtyard at dusk under cherry blossoms.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Jungwon.png`, then `skin-sk-jungwon-collab-cardcaptor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long-sleeved green-and-white Chinese-style battle robe with a high mandarin collar and gold-trimmed edges, a matching green cap, white trousers, black cloth shoes, a round jade compass charm hanging at the belt. Hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a temple courtyard at dusk under cherry blossoms in jade green, white, gold and blossom pink, the light is a green-gold lightning glow at dusk, and green lightning and blossom petals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-jungwon-collab-cardcaptor-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a matching green cap. Behind the face: bold flat diagonal stripes and speed lines in jade green, white, gold and blossom pink, lit by a green-gold lightning glow at dusk, a few tiny green lightning and blossom petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. Entrance card

Attach: `skin-sk-jungwon-collab-cardcaptor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long-sleeved green-and-white Chinese-style battle robe with a high mandarin collar and gold-trimmed edges, a matching green cap, white trousers, black cloth shoes, a round jade compass charm hanging at the belt. Hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a temple courtyard at dusk under cherry blossoms, broken into flat graphic shards of jade green, white, gold and blossom pink splitting apart diagonally, a few speed lines, a scatter of gold compass rings, green lightning and blossom petals, lit by a green-gold lightning glow at dusk. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 7. Finish card

Attach: `Place Prompt Attachments/Finish card - Jungwon.png`, then `skin-sk-jungwon-collab-cardcaptor-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-cardcaptor-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a long-sleeved green-and-white Chinese-style battle robe with a high mandarin collar and gold-trimmed edges, a matching green cap, white trousers, black cloth shoes, a round jade compass charm hanging at the belt. Hair: his own dark brown hair, soft and slightly messy, the fringe falling over his eyes (a look he has really worn). Same face as the THIRD attached image. Background: a temple courtyard at dusk under cherry blossoms, as flat graphic shapes in jade green, white, gold and blossom pink, green lightning and blossom petals drifting across, lit by a green-gold lightning glow at dusk. The words are gold with a jade green outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 8. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-jungwon-collab-cardcaptor-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one spark of green lightning flickers on in the centre. Frame 2: a few green lightning and blossom petals appear around it, jade green light gathering. Frame 3, the peak: a gold compass ring flashing open with green lightning crackling out from a white-hot centre. Frame 4: the green lightning and blossom petals spreading wider, tumbling and turning. Frame 5: the green lightning and blossom petals breaking into small gold sparks. Frame 6: a few last tiny green lightning and blossom petals and gold sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, jade green, white, gold and blossom pink, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Howl, Howl's Moving Castle · `sk-jungwon-collab-castle` (was 21Y / 21Z on the main list)

Couple set with Solar's Sophie. The pink-and-blue diamond jacket over a white shirt, a red jewel earring.

> **Look bible.** Palette: harlequin pink, pale blue, gold and night black. Vibe: a vain, beautiful wizard who is braver than he lets on.  
> Motifs: falling stars, black feathers, gold sparkles and flower petals. Light: blue twilight with gold starlight. Scene: a starry sky over a flower field and a mountain lake.

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

#### 4. Theurgy cut-in

Attach: `Place Prompt Attachments/Theurgy - Jungwon.png`, then `skin-sk-jungwon-collab-castle-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a loose white shirt open at the collar, black trousers, black boots, a short pink-and-pale-blue harlequin diamond-patterned jacket draped over his shoulders, a small red jewel earring in one ear, a thin silver necklace with a blue gem. Hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a starry sky over a flower field and a mountain lake in harlequin pink, pale blue, gold and night black, the light is blue twilight with gold starlight, and falling stars and black feathers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 5. "1 MORE!" eye strip

Attach: `skin-sk-jungwon-collab-castle-portraits.png` (your finished scene portraits, #2 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a small red jewel earring. Behind the face: bold flat diagonal stripes and speed lines in harlequin pink, pale blue, gold and night black, lit by blue twilight with gold starlight, a few tiny falling stars and black feathers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 6. Entrance card

Attach: `skin-sk-jungwon-collab-castle-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a loose white shirt open at the collar, black trousers, black boots, a short pink-and-pale-blue harlequin diamond-patterned jacket draped over his shoulders, a small red jewel earring in one ear, a thin silver necklace with a blue gem. Hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a starry sky over a flower field and a mountain lake, broken into flat graphic shards of harlequin pink, pale blue, gold and night black splitting apart diagonally, a few speed lines, a scatter of falling stars, black feathers and flower petals, lit by blue twilight with gold starlight. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 7. Finish card

Attach: `Place Prompt Attachments/Finish card - Jungwon.png`, then `skin-sk-jungwon-collab-castle-posesheet.png` (your finished pose sheet, #1 above), then `Place Prompt Attachments/Jungwon.png`  
Save as: `skin-sk-jungwon-collab-castle-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a loose white shirt open at the collar, black trousers, black boots, a short pink-and-pale-blue harlequin diamond-patterned jacket draped over his shoulders, a small red jewel earring in one ear, a thin silver necklace with a blue gem. Hair: his own black hair, softly messy and a little longer at the nape, the fringe falling over his eyes (a look he has really worn). Same face as the THIRD attached image. Background: a starry sky over a flower field and a mountain lake, as flat graphic shapes in harlequin pink, pale blue, gold and night black, falling stars and black feathers drifting across, lit by blue twilight with gold starlight. The words are gold with a pale blue outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 8. Signature effect sheet (piece N)

Attach: `Place Prompt Attachments/Effect sheet - format.png` (format and spacing only)  
Save as: `skin-sk-jungwon-collab-castle-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one falling star flickers on in the centre. Frame 2: a few falling stars and black feathers appear around it, pale blue light gathering. Frame 3, the peak: a burst of falling stars and black feathers sweeping out from a gold-white centre. Frame 4: the falling stars and black feathers spreading wider, tumbling and turning. Frame 5: the falling stars and black feathers breaking into small gold star dust. Frame 6: a few last tiny falling stars and black feathers and gold star dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, harlequin pink, pale blue, gold and night black, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
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
