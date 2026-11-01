# Skins in battle: design sheet

*Persona 3: Solstice · Kat's decisions of Nov 1 2026 · reorganised Nov 1: every prompt written out, by fighter, then by look*

When a fighter wears a Wardrobe look, the whole fight shows it: the figure, the faces, the win screen, the cut-ins, the effects and the finish card. Looks stay looks: **no stats, ever.** The technical side is in `FEMC-SKINS-BATTLE-TECH.md`, for Claude.

## How to use

1. Pick a fighter, then a look. Everything for that look is in one block, in order: pose sheet, Theurgy cut-in, eye strip, entrance card, finish card.
2. For each piece: open a new ChatGPT message, attach the files on its **Attach** line in that order (all inside `Femc Mode Images/`), paste the prompt, send.
3. Save the picture into **New Adds** under its **Save as** name, and tell Claude. One picture per message.
4. You don't have to make everything: a piece you skip just uses the fighter's usual version in the game.

> **Start here: the best next picks**
> 1. **Solar's own "1 MORE!" eye strip** (Solar → own look → piece 2).
> 2. **Solar's own entrance card** (Solar → own look → piece 3).
> 3. **The Sun & Moon couple Showtime** (Couple Showtimes → Sun & Moon).
> 4. **The petals theme sheet** (Themes → Petals effect sheet).
> 5. **Haechan's own second pose sheet** (Haechan → own look → piece 1).
>
> **Already made and in the game:** Solar's own second pose sheet, the Summer Yukata second pose sheet, and the hearts theme sheet (marked ✓ made below).

### The pieces

| Piece | What the player sees | How many |
|---|---|---|
| Second pose sheet | Six more poses: support cast, guard, dodge, knocked down, badly hurt, dash-in | 87 (12 own looks + 75 Wardrobe looks) |
| Theurgy cut-in | The Theurgy cut-in shows the fighter in the look | 75 (Wardrobe looks; own looks already have theirs) |
| "1 MORE!" eye strip | Hit a weakness: a thin strip of the fighter's eyes slams across the screen | 87 |
| Entrance card | As a fight opens, the leader's look flashes on in a slanted card | 87 |
| Finish card | The All-Out finish card shows the look | 75 (Wardrobe looks) |
| Couple Showtime | Both halves of a couple set fighting together get a special Bond cut-in | 6 |
| Theme effect sheet | Skills sprinkle the look's theme (hearts, petals, stars…) over the normal effect | 13 |
| HUD frame | A faint frame of the theme around the fighter's HUD card | 13 |

Already built in the game with no art needed: outfit faces in battle, the victory pose on the win screen, the theme bursting out of the All-Out cloud, and the ▶ Try it on button in the Wardrobe. Settings: *Outfit faces in battle*, *Outfit effects* and *Entrance cards* (each On / Off).

### Backgrounds

| Kind of picture | Background |
|---|---|
| Pose sheets and HUD frames | **Transparent** |
| Theme effect sheets | **Solid black**: glowing effects come out better keyed from black than with ChatGPT's transparency (soft glows turn muddy or get cut off). |
| Theurgy cut-ins, finish cards, entrance cards, eye strips, couple Showtimes | **Their own full background** (they fill the screen) |

If a transparent one comes back with a background anyway, that's fine: Claude cuts it out.

### If something comes back wrong

| Problem | Say |
|---|---|
| Poses overlap (pose sheet) | "Redo it with more empty space between the poses." |
| Face or Persona moved (Theurgy cut-in) | "Keep the first image's layout exactly; change only the clothes and hair." |
| Eyes too small (eye strip) | "Zoom in much closer: only the eyes and eyebrows should fill the banner." |
| Outfit changed (entrance card, Showtime) | "Keep the outfit exactly as in the first image." |
| Words misspelled (finish card) | "Same picture; the words must read exactly …" (with the card's words) |
| Grid lines, boxes or transparency (theme sheet) | "Redo it on solid black with no grid lines or boxes." |

Finish cards use the fighter's own finish line (listed at the top of each fighter). To give a look its own words, change the last sentence of its prompt.

---

## Solar

Own look + 32 Wardrobe looks. Finish-card words: **RISE AND SHINE**

### Solar: own look

*Own look · no theme*

#### 1. Second pose sheet ✓ made

Attach: `Current Skins/Base Game/Solar/Solar - battle pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `solar-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: the black Gekkoukan uniform with the red bow, a short black pleated skirt, white knee socks and brown loafers, her naginata. Hair: her long straight jet-black hair, loose. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Solar/Solar-neutral.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `solar-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Solar/Solar - battle pose sheet.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `solar-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (the black Gekkoukan uniform with the red bow and the red S.E.E.S. armband, her long straight jet-black hair, her naginata), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Summer Yukata · `sk-yukata` · Petals

#### 1. Second pose sheet ✓ made

Attach: `Current Skins/Solar/Summer Yukata [sk-yukata] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-yukata-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, wooden geta. Hair: her jet-black hair pinned up with a sunflower. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Summer Yukata [sk-yukata] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-yukata-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, wooden geta. Hair: her jet-black hair pinned up with a sunflower. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Summer Yukata [sk-yukata] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-yukata-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her jet-black hair pinned up with a sunflower, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in soft pink, cream and black, a few tiny drifting petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Summer Yukata [sk-yukata] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-yukata-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, wooden geta. Hair: her jet-black hair pinned up with a sunflower), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of soft pink, cream and black breaking apart diagonally, a few speed lines, a scatter of drifting petals. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Summer Yukata [sk-yukata] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-yukata-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character is large on the right, cropped at the waist and bleeding off the right edge, turned toward the viewer with a confident finishing pose and a small knowing smile, one hand reaching out; huge bold slanted italic words on the left; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a cream yukata covered in big sunflowers, a yellow obi with a paper fan tucked in it, her jet-black hair pinned up with a sunflower. Same face as the THIRD attached image. Background colours: warm sunflower yellow and hot pink with black, sunflower petals drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Winter Coat · `sk-wintercoat` · Snow

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Winter Coat [sk-wintercoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-wintercoat-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a knee-length cream wool coat buttoned up, a long pink knit scarf, white earmuffs, black tights and short brown boots. Hair: her long straight jet-black hair, loose. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Winter Coat [sk-wintercoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-wintercoat-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a knee-length cream wool coat buttoned up, a long pink knit scarf, white earmuffs, black tights and short brown boots. Hair: her long straight jet-black hair, loose. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Winter Coat [sk-wintercoat] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-wintercoat-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: white earmuffs. Behind the face: bold flat diagonal stripes and speed lines in ice blue, white and black, a few tiny snowflakes scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Winter Coat [sk-wintercoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-wintercoat-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a knee-length cream wool coat buttoned up, a long pink knit scarf, white earmuffs, black tights and short brown boots. Hair: her long straight jet-black hair, loose), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of ice blue, white and black breaking apart diagonally, a few speed lines, a scatter of snowflakes. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Winter Coat [sk-wintercoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-wintercoat-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a knee-length cream wool coat buttoned up, a long pink knit scarf, white earmuffs, black tights and short brown boots. Hair: her long straight jet-black hair, loose. Same face as the THIRD attached image. Background colours: ice blue, white and black, snowflakes drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Halloween Witch · `sk-halloween` · Stars

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Halloween Witch [sk-halloween] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-halloween-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a little witch: a tall black pointed hat with a pink band, a short black cape lined with gold stars, a black dress, purple-and-black striped stockings, buckled shoes. Hair: her long straight jet-black hair, loose under the hat. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Halloween Witch [sk-halloween] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-halloween-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a little witch: a tall black pointed hat with a pink band, a short black cape lined with gold stars, a black dress, purple-and-black striped stockings, buckled shoes. Hair: her long straight jet-black hair, loose under the hat. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Halloween Witch [sk-halloween] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-halloween-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose under the hat, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a tall black pointed hat with a pink band. Behind the face: bold flat diagonal stripes and speed lines in gold, pale pink and black, a few tiny five-pointed stars scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Halloween Witch [sk-halloween] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-halloween-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a little witch: a tall black pointed hat with a pink band, a short black cape lined with gold stars, a black dress, purple-and-black striped stockings, buckled shoes. Hair: her long straight jet-black hair, loose under the hat), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of gold, pale pink and black breaking apart diagonally, a few speed lines, a scatter of little five-pointed stars. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Halloween Witch [sk-halloween] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-halloween-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a little witch: a tall black pointed hat with a pink band, a short black cape lined with gold stars, a black dress, purple-and-black striped stockings, buckled shoes. Hair: her long straight jet-black hair, loose under the hat. Same face as the THIRD attached image. Background colours: gold, pale pink and black, little five-pointed stars drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Date Day · `sk-date` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Date Day [sk-date] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-date-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a casual date outfit: a soft pink off-shoulder knit top, a pleated cream skirt, white sneakers, a thin gold necklace, her white earbuds around her neck. Hair: her long straight jet-black hair, loose. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Date Day [sk-date] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-date-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a casual date outfit: a soft pink off-shoulder knit top, a pleated cream skirt, white sneakers, a thin gold necklace, her white earbuds around her neck. Hair: her long straight jet-black hair, loose. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Date Day [sk-date] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-date-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Date Day [sk-date] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-date-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a casual date outfit: a soft pink off-shoulder knit top, a pleated cream skirt, white sneakers, a thin gold necklace, her white earbuds around her neck. Hair: her long straight jet-black hair, loose), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Date Day [sk-date] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-date-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a casual date outfit: a soft pink off-shoulder knit top, a pleated cream skirt, white sneakers, a thin gold necklace, her white earbuds around her neck. Hair: her long straight jet-black hair, loose. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Phantom Thief · `sk-phantom` · Calling cards

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Phantom Thief [sk-phantom] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-phantom-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long black tailcoat with a high collar, red gloves, black fitted trousers and pointed black boots, a white domino mask over her eyes. Hair: very long straight black hair, her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Phantom Thief [sk-phantom] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-phantom-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long black tailcoat with a high collar, red gloves, black fitted trousers and pointed black boots, a white domino mask over her eyes. Hair: very long straight black hair, her naginata. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Phantom Thief [sk-phantom] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-phantom-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: very long straight black hair, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a white domino mask over her eyes. Behind the face: bold flat diagonal stripes and speed lines in red, black and white, a few tiny playing cards scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Phantom Thief [sk-phantom] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-phantom-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long black tailcoat with a high collar, red gloves, black fitted trousers and pointed black boots, a white domino mask over her eyes. Hair: very long straight black hair, her naginata), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of red, black and white breaking apart diagonally, a few speed lines, a scatter of playing cards. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Phantom Thief [sk-phantom] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-phantom-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a long black tailcoat with a high collar, red gloves, black fitted trousers and pointed black boots, a white domino mask over her eyes. Hair: very long straight black hair, her naginata. Same face as the THIRD attached image. Background colours: red, black and white, playing cards drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Emo Night · `sk-emo` · Thorns & bats

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Emo Night [sk-emo] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-emo-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: all black: a loose black tee over purple-and-black striped long sleeves, a short black pleated skirt, a studded black belt with a silver chain hanging at the hip, black tights, chunky black lace-up platform boots, a black choker. Hair: her long straight jet-black hair, loose. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Emo Night [sk-emo] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-emo-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: all black: a loose black tee over purple-and-black striped long sleeves, a short black pleated skirt, a studded black belt with a silver chain hanging at the hip, black tights, chunky black lace-up platform boots, a black choker. Hair: her long straight jet-black hair, loose. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Emo Night [sk-emo] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-emo-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in deep red, black and pink, a few tiny small bat silhouettes and thorny vines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Emo Night [sk-emo] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-emo-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (all black: a loose black tee over purple-and-black striped long sleeves, a short black pleated skirt, a studded black belt with a silver chain hanging at the hip, black tights, chunky black lace-up platform boots, a black choker. Hair: her long straight jet-black hair, loose), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of deep red, black and pink breaking apart diagonally, a few speed lines, a scatter of small bat silhouettes and thorny vines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Emo Night [sk-emo] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-emo-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: all black: a loose black tee over purple-and-black striped long sleeves, a short black pleated skirt, a studded black belt with a silver chain hanging at the hip, black tights, chunky black lace-up platform boots, a black choker. Hair: her long straight jet-black hair, loose. Same face as the THIRD attached image. Background colours: deep red, black and pink, small bat silhouettes and thorny vines drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Alpha Phi Formal · `sk-alphaphi` · Petals

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Alpha Phi Formal [sk-alphaphi] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-alphaphi-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a floor-length dusty-rose satin formal gown with thin straps and a slit at one side so she can move, a small silver sorority pin on the strap, a thin silver bracelet, strappy silver heels. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Alpha Phi Formal [sk-alphaphi] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-alphaphi-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a floor-length dusty-rose satin formal gown with thin straps and a slit at one side so she can move, a small silver sorority pin on the strap, a thin silver bracelet, strappy silver heels. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Alpha Phi Formal [sk-alphaphi] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-alphaphi-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in soft pink, cream and black, a few tiny drifting petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Alpha Phi Formal [sk-alphaphi] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-alphaphi-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a floor-length dusty-rose satin formal gown with thin straps and a slit at one side so she can move, a small silver sorority pin on the strap, a thin silver bracelet, strappy silver heels), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of soft pink, cream and black breaking apart diagonally, a few speed lines, a scatter of drifting petals. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Alpha Phi Formal [sk-alphaphi] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-alphaphi-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a floor-length dusty-rose satin formal gown with thin straps and a slit at one side so she can move, a small silver sorority pin on the strap, a thin silver bracelet, strappy silver heels. Same face as the THIRD attached image. Background colours: soft pink, cream and black, drifting petals drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Harbour Night Coat · `sk-harbourcoat` · Snow

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Harbour Night Coat [sk-harbourcoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-harbourcoat-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long black wool coat buttoned to the throat and belted at the waist, the hem past her knees, black leather gloves, black trousers and low black boots, a thin red thread tied round her right wrist, the collar turned up. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Harbour Night Coat [sk-harbourcoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-harbourcoat-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long black wool coat buttoned to the throat and belted at the waist, the hem past her knees, black leather gloves, black trousers and low black boots, a thin red thread tied round her right wrist, the collar turned up. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Harbour Night Coat [sk-harbourcoat] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-harbourcoat-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in ice blue, white and black, a few tiny snowflakes scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Harbour Night Coat [sk-harbourcoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-harbourcoat-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long black wool coat buttoned to the throat and belted at the waist, the hem past her knees, black leather gloves, black trousers and low black boots, a thin red thread tied round her right wrist, the collar turned up), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of ice blue, white and black breaking apart diagonally, a few speed lines, a scatter of snowflakes. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Harbour Night Coat [sk-harbourcoat] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-harbourcoat-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a long black wool coat buttoned to the throat and belted at the waist, the hem past her knees, black leather gloves, black trousers and low black boots, a thin red thread tied round her right wrist, the collar turned up. Same face as the THIRD attached image. Background colours: ice blue, white and black, snowflakes drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Stage Idol · `sk-idol` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Stage Idol [sk-idol] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-idol-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a K-pop idol stage outfit: a cropped white jacket with gold embroidery and sharp shoulders over a sparkling silver top, a white pleated skirt over shorts, a gold chain belt, white platform boots, a slim headset microphone at her cheek, a little silver star clip in her hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Stage Idol [sk-idol] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-idol-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a K-pop idol stage outfit: a cropped white jacket with gold embroidery and sharp shoulders over a sparkling silver top, a white pleated skirt over shorts, a gold chain belt, white platform boots, a slim headset microphone at her cheek, a little silver star clip in her hair. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Stage Idol [sk-idol] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-idol-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, a little silver star clip in her hair, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a slim headset microphone at her cheek. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Stage Idol [sk-idol] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-idol-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a K-pop idol stage outfit: a cropped white jacket with gold embroidery and sharp shoulders over a sparkling silver top, a white pleated skirt over shorts, a gold chain belt, white platform boots, a slim headset microphone at her cheek, a little silver star clip in her hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Stage Idol [sk-idol] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-idol-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a K-pop idol stage outfit: a cropped white jacket with gold embroidery and sharp shoulders over a sparkling silver top, a white pleated skirt over shorts, a gold chain belt, white platform boots, a slim headset microphone at her cheek, a little silver star clip in her hair. Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### SU eSports Jersey · `sk-esports` · Confetti

#### 1. Second pose sheet

Attach: `Current Skins/Solar/SU eSports Jersey [sk-esports] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-esports-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an esports team jersey in bright orange with navy shoulder panels and sleeve stripes, a black gaming headset with a boom mic round her neck, navy joggers with an orange side stripe, white sneakers, a lanyard with a player badge. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/SU eSports Jersey [sk-esports] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-esports-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an esports team jersey in bright orange with navy shoulder panels and sleeve stripes, a black gaming headset with a boom mic round her neck, navy joggers with an orange side stripe, white sneakers, a lanyard with a player badge. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/SU eSports Jersey [sk-esports] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-esports-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in gold, hot pink and white, a few tiny confetti and streamers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/SU eSports Jersey [sk-esports] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-esports-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an esports team jersey in bright orange with navy shoulder panels and sleeve stripes, a black gaming headset with a boom mic round her neck, navy joggers with an orange side stripe, white sneakers, a lanyard with a player badge), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of gold, hot pink and white breaking apart diagonally, a few speed lines, a scatter of confetti and streamers. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/SU eSports Jersey [sk-esports] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-esports-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: an esports team jersey in bright orange with navy shoulder panels and sleeve stripes, a black gaming headset with a boom mic round her neck, navy joggers with an orange side stripe, white sneakers, a lanyard with a player badge. Same face as the THIRD attached image. Background colours: gold, hot pink and white, confetti and streamers drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Moonlit Hanbok · `sk-hanbok` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Moonlit Hanbok [sk-hanbok] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-hanbok-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an elegant formal hanbok-inspired outfit: a short pale ivory jeogori jacket with a long deep-red goreum ribbon, a full floor-length midnight-navy silk skirt embroidered with silver crescent moons, a jade-and-red norigae tassel charm at her hip, a silver binyeo hairpin. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Moonlit Hanbok [sk-hanbok] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-hanbok-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an elegant formal hanbok-inspired outfit: a short pale ivory jeogori jacket with a long deep-red goreum ribbon, a full floor-length midnight-navy silk skirt embroidered with silver crescent moons, a jade-and-red norigae tassel charm at her hip, a silver binyeo hairpin. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Moonlit Hanbok [sk-hanbok] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-hanbok-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a silver binyeo hairpin. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Moonlit Hanbok [sk-hanbok] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-hanbok-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an elegant formal hanbok-inspired outfit: a short pale ivory jeogori jacket with a long deep-red goreum ribbon, a full floor-length midnight-navy silk skirt embroidered with silver crescent moons, a jade-and-red norigae tassel charm at her hip, a silver binyeo hairpin), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Moonlit Hanbok [sk-hanbok] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-hanbok-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: an elegant formal hanbok-inspired outfit: a short pale ivory jeogori jacket with a long deep-red goreum ribbon, a full floor-length midnight-navy silk skirt embroidered with silver crescent moons, a jade-and-red norigae tassel charm at her hip, a silver binyeo hairpin. Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Vice President · `sk-vp` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Vice President [sk-vp] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-vp-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a tailored navy school blazer with a gold crest on the pocket, a crisp white shirt and a navy-and-white striped tie, a pleated grey skirt, black knee socks and loafers, a white student-council armband on the right sleeve, a navy folder of papers held at her side. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Vice President [sk-vp] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-vp-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a tailored navy school blazer with a gold crest on the pocket, a crisp white shirt and a navy-and-white striped tie, a pleated grey skirt, black knee socks and loafers, a white student-council armband on the right sleeve, a navy folder of papers held at her side. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Vice President [sk-vp] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-vp-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Vice President [sk-vp] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-vp-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a tailored navy school blazer with a gold crest on the pocket, a crisp white shirt and a navy-and-white striped tie, a pleated grey skirt, black knee socks and loafers, a white student-council armband on the right sleeve, a navy folder of papers held at her side), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Vice President [sk-vp] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-vp-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a tailored navy school blazer with a gold crest on the pocket, a crisp white shirt and a navy-and-white striped tie, a pleated grey skirt, black knee socks and loafers, a white student-council armband on the right sleeve, a navy folder of papers held at her side. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Velvet Attendant · `sk-velvet` · Butterflies

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Velvet Attendant [sk-velvet] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-velvet-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a gothic Velvet Room attendant outfit in the style of Elizabeth: a deep-blue velvet dress with a high collar and long sleeves, gold buttons down the front, a small blue cap with a gold band, white gloves, black tights and black heeled boots, a heavy blue-and-gold book held in the crook of one arm. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Velvet Attendant [sk-velvet] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-velvet-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a gothic Velvet Room attendant outfit in the style of Elizabeth: a deep-blue velvet dress with a high collar and long sleeves, gold buttons down the front, a small blue cap with a gold band, white gloves, black tights and black heeled boots, a heavy blue-and-gold book held in the crook of one arm. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Velvet Attendant [sk-velvet] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-velvet-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a small blue cap with a gold band. Behind the face: bold flat diagonal stripes and speed lines in velvet blue, white and black, a few tiny glowing blue butterflies scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Velvet Attendant [sk-velvet] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-velvet-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a gothic Velvet Room attendant outfit in the style of Elizabeth: a deep-blue velvet dress with a high collar and long sleeves, gold buttons down the front, a small blue cap with a gold band, white gloves, black tights and black heeled boots, a heavy blue-and-gold book held in the crook of one arm), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of velvet blue, white and black breaking apart diagonally, a few speed lines, a scatter of glowing blue butterflies. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Velvet Attendant [sk-velvet] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-velvet-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a gothic Velvet Room attendant outfit in the style of Elizabeth: a deep-blue velvet dress with a high collar and long sleeves, gold buttons down the front, a small blue cap with a gold band, white gloves, black tights and black heeled boots, a heavy blue-and-gold book held in the crook of one arm. Same face as the THIRD attached image. Background colours: velvet blue, white and black, glowing blue butterflies drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Morning Roadwork · `sk-roadwork` · Confetti

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Morning Roadwork [sk-roadwork] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-roadwork-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a sporty running outfit: a pink zip-up track jacket half open over a white sports top, black running shorts over black leggings, bright running shoes, a white sweatband on her forehead, wired earbuds trailing to a phone strapped on her upper right arm. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Morning Roadwork [sk-roadwork] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-roadwork-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a sporty running outfit: a pink zip-up track jacket half open over a white sports top, black running shorts over black leggings, bright running shoes, a white sweatband on her forehead, wired earbuds trailing to a phone strapped on her upper right arm. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Morning Roadwork [sk-roadwork] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-roadwork-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight jet-black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in gold, hot pink and white, a few tiny confetti and streamers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Morning Roadwork [sk-roadwork] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-roadwork-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a sporty running outfit: a pink zip-up track jacket half open over a white sports top, black running shorts over black leggings, bright running shoes, a white sweatband on her forehead, wired earbuds trailing to a phone strapped on her upper right arm), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of gold, hot pink and white breaking apart diagonally, a few speed lines, a scatter of confetti and streamers. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Morning Roadwork [sk-roadwork] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-roadwork-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a sporty running outfit: a pink zip-up track jacket half open over a white sports top, black running shorts over black leggings, bright running shoes, a white sweatband on her forehead, wired earbuds trailing to a phone strapped on her upper right arm. Same face as the THIRD attached image. Background colours: gold, hot pink and white, confetti and streamers drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Y2K Pop Star · `sk-y2k` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Y2K Pop Star [sk-y2k] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-y2k-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a Y2K pop-star look: a baby-pink cropped zip-up and a sparkly silver tube top, a low-rise white cargo mini skirt with a rhinestone belt chain, platform sneakers, tinted pink sunglasses pushed up on her head, glossy lips. Hair: long and voluminous with chunky bubblegum-pink face-framing streaks, half up in two little twists pinned with glittery butterfly clips. Her naginata wrapped in pink tape with rhinestones along the blade's spine. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Y2K Pop Star [sk-y2k] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-y2k-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a Y2K pop-star look: a baby-pink cropped zip-up and a sparkly silver tube top, a low-rise white cargo mini skirt with a rhinestone belt chain, platform sneakers, tinted pink sunglasses pushed up on her head, glossy lips. Hair: long and voluminous with chunky bubblegum-pink face-framing streaks, half up in two little twists pinned with glittery butterfly clips. Her naginata wrapped in pink tape with rhinestones along the blade's spine. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Y2K Pop Star [sk-y2k] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-y2k-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: long and voluminous with chunky bubblegum-pink face-framing streaks, half up in two little twists pinned with glittery butterfly clips, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: tinted pink sunglasses pushed up on her head. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Y2K Pop Star [sk-y2k] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-y2k-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a Y2K pop-star look: a baby-pink cropped zip-up and a sparkly silver tube top, a low-rise white cargo mini skirt with a rhinestone belt chain, platform sneakers, tinted pink sunglasses pushed up on her head, glossy lips. Hair: long and voluminous with chunky bubblegum-pink face-framing streaks, half up in two little twists pinned with glittery butterfly clips. Her naginata wrapped in pink tape with rhinestones along the blade's spine), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Y2K Pop Star [sk-y2k] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-y2k-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a Y2K pop-star look: a baby-pink cropped zip-up and a sparkly silver tube top, a low-rise white cargo mini skirt with a rhinestone belt chain, platform sneakers, tinted pink sunglasses pushed up on her head, glossy lips. Hair: long and voluminous with chunky bubblegum-pink face-framing streaks, half up in two little twists pinned with glittery butterfly clips. Her naginata wrapped in pink tape with rhinestones along the blade's spine. Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Oops! · `sk-oops` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Oops! [sk-oops] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-oops-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a glossy red latex catsuit with a high collar, a zip up the front and a subtle seam down each side, red latex gloves and red platform boots, the shine catching hard white highlights like the inside of a spaceship. Hair: long, glossy and voluminous with a deep side part and honey-blonde highlights, blown out into big bouncy waves. Her naginata in glossy red with a silver blade and a tiny silver planet charm on the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Oops! [sk-oops] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-oops-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a glossy red latex catsuit with a high collar, a zip up the front and a subtle seam down each side, red latex gloves and red platform boots, the shine catching hard white highlights like the inside of a spaceship. Hair: long, glossy and voluminous with a deep side part and honey-blonde highlights, blown out into big bouncy waves. Her naginata in glossy red with a silver blade and a tiny silver planet charm on the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Oops! [sk-oops] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-oops-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: long, glossy and voluminous with a deep side part and honey-blonde highlights, blown out into big bouncy waves, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Oops! [sk-oops] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-oops-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a glossy red latex catsuit with a high collar, a zip up the front and a subtle seam down each side, red latex gloves and red platform boots, the shine catching hard white highlights like the inside of a spaceship. Hair: long, glossy and voluminous with a deep side part and honey-blonde highlights, blown out into big bouncy waves. Her naginata in glossy red with a silver blade and a tiny silver planet charm on the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Oops! [sk-oops] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-oops-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a glossy red latex catsuit with a high collar, a zip up the front and a subtle seam down each side, red latex gloves and red platform boots, the shine catching hard white highlights like the inside of a spaceship. Hair: long, glossy and voluminous with a deep side part and honey-blonde highlights, blown out into big bouncy waves. Her naginata in glossy red with a silver blade and a tiny silver planet charm on the collar. Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Snake Charmer · `sk-snake` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Snake Charmer [sk-snake] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-snake-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a 2001-awards-show stage look: a jewelled crop top covered in tiny green and gold rhinestones, low-rise sparkling stage pants with rhinestone fringe at the hips, strappy gold heels, a body-shimmer glow, and a huge pale yellow-and-white python draped across her shoulders and around one arm (calm, curious, its head near her shoulder in every cell). Hair: long, loose and wavy, light brown with golden-blonde highlights, a little tousled. Her naginata wrapped in gold with a snakeskin-patterned haft. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Snake Charmer [sk-snake] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-snake-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a 2001-awards-show stage look: a jewelled crop top covered in tiny green and gold rhinestones, low-rise sparkling stage pants with rhinestone fringe at the hips, strappy gold heels, a body-shimmer glow, and a huge pale yellow-and-white python draped across her shoulders and around one arm (calm, curious, its head near her shoulder in every cell). Hair: long, loose and wavy, light brown with golden-blonde highlights, a little tousled. Her naginata wrapped in gold with a snakeskin-patterned haft. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Snake Charmer [sk-snake] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-snake-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: long, loose and wavy, light brown with golden-blonde highlights, a little tousled, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Snake Charmer [sk-snake] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-snake-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a 2001-awards-show stage look: a jewelled crop top covered in tiny green and gold rhinestones, low-rise sparkling stage pants with rhinestone fringe at the hips, strappy gold heels, a body-shimmer glow, and a huge pale yellow-and-white python draped across her shoulders and around one arm (calm, curious, its head near her shoulder in every cell). Hair: long, loose and wavy, light brown with golden-blonde highlights, a little tousled. Her naginata wrapped in gold with a snakeskin-patterned haft), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Snake Charmer [sk-snake] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-snake-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a 2001-awards-show stage look: a jewelled crop top covered in tiny green and gold rhinestones, low-rise sparkling stage pants with rhinestone fringe at the hips, strappy gold heels, a body-shimmer glow, and a huge pale yellow-and-white python draped across her shoulders and around one arm (calm, curious, its head near her shoulder in every cell). Hair: long, loose and wavy, light brown with golden-blonde highlights, a little tousled. Her naginata wrapped in gold with a snakeskin-patterned haft. Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Sugar Rush · `sk-sugarrush` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Sugar Rush [sk-sugarrush] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-sugarrush-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a kawaii-grunge doll look: a black velvet corset cami with tiny white polka dots, pink lace trim and a little pink bow, printed with a cute brown teddy bear with white angel wings hugging a pink heart; a short tiered, ruffled cream eyelet-lace skirt with tiny polka dots; a pearl choker with a big emerald-green heart pendant; sheer tights wrapped criss-cross with pale ribbon; fluffy white faux-fur leg warmers with white buckled straps over chunky white platform boots; a black fuzzy wrist cuff with a pink plaid band; stacks of sparkly rings and small silver drop earrings. Hair: jet black with a candy-pink underlayer that flashes when she moves, in two long high pigtails, one pinned with a little plush teddy-bear clip and the other with a fuzzy dark green bow, a little glitter along the centre part. Her naginata's haft wrapped in pink glitter tape with silver flame decals, a tiny winged teddy-bear charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Sugar Rush [sk-sugarrush] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-sugarrush-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a kawaii-grunge doll look: a black velvet corset cami with tiny white polka dots, pink lace trim and a little pink bow, printed with a cute brown teddy bear with white angel wings hugging a pink heart; a short tiered, ruffled cream eyelet-lace skirt with tiny polka dots; a pearl choker with a big emerald-green heart pendant; sheer tights wrapped criss-cross with pale ribbon; fluffy white faux-fur leg warmers with white buckled straps over chunky white platform boots; a black fuzzy wrist cuff with a pink plaid band; stacks of sparkly rings and small silver drop earrings. Hair: jet black with a candy-pink underlayer that flashes when she moves, in two long high pigtails, one pinned with a little plush teddy-bear clip and the other with a fuzzy dark green bow, a little glitter along the centre part. Her naginata's haft wrapped in pink glitter tape with silver flame decals, a tiny winged teddy-bear charm at the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Sugar Rush [sk-sugarrush] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-sugarrush-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: jet black with a candy-pink underlayer that flashes when she moves, in two long high pigtails, one pinned with a little plush teddy-bear clip and the other with a fuzzy dark green bow, a little glitter along the centre part, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: stacks of sparkly rings and small silver drop earrings. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Sugar Rush [sk-sugarrush] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-sugarrush-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a kawaii-grunge doll look: a black velvet corset cami with tiny white polka dots, pink lace trim and a little pink bow, printed with a cute brown teddy bear with white angel wings hugging a pink heart; a short tiered, ruffled cream eyelet-lace skirt with tiny polka dots; a pearl choker with a big emerald-green heart pendant; sheer tights wrapped criss-cross with pale ribbon; fluffy white faux-fur leg warmers with white buckled straps over chunky white platform boots; a black fuzzy wrist cuff with a pink plaid band; stacks of sparkly rings and small silver drop earrings. Hair: jet black with a candy-pink underlayer that flashes when she moves, in two long high pigtails, one pinned with a little plush teddy-bear clip and the other with a fuzzy dark green bow, a little glitter along the centre part. Her naginata's haft wrapped in pink glitter tape with silver flame decals, a tiny winged teddy-bear charm at the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Sugar Rush [sk-sugarrush] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-sugarrush-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a kawaii-grunge doll look: a black velvet corset cami with tiny white polka dots, pink lace trim and a little pink bow, printed with a cute brown teddy bear with white angel wings hugging a pink heart; a short tiered, ruffled cream eyelet-lace skirt with tiny polka dots; a pearl choker with a big emerald-green heart pendant; sheer tights wrapped criss-cross with pale ribbon; fluffy white faux-fur leg warmers with white buckled straps over chunky white platform boots; a black fuzzy wrist cuff with a pink plaid band; stacks of sparkly rings and small silver drop earrings. Hair: jet black with a candy-pink underlayer that flashes when she moves, in two long high pigtails, one pinned with a little plush teddy-bear clip and the other with a fuzzy dark green bow, a little glitter along the centre part. Her naginata's haft wrapped in pink glitter tape with silver flame decals, a tiny winged teddy-bear charm at the collar. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Night Prowl · `sk-prowl` · Thorns & bats

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Night Prowl [sk-prowl] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-prowl-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a leopard-print cropped cami top; a slim cropped black zip-up jacket worn open, with thumbhole cuffs; high-waisted black jeans with a crossover wrap waistband (a second waistband strap buttoned on the diagonal); black platform ankle boots; a black velvet baseball cap; a long black cord necklace with a pointed dark crystal pendant; silver ear cuffs, silver rings and long black-and-white graphic nails. Makeup: sharp black winged liner with white inner liner, matte nude-brown lips. Hair: long, layered and tousled, dark chocolate brown with chunky caramel face-framing streaks and a few black lowlights, blown out with volume under the cap. Her naginata in matte black with a leopard-print grip wrap and a dark crystal set in the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Night Prowl [sk-prowl] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-prowl-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a leopard-print cropped cami top; a slim cropped black zip-up jacket worn open, with thumbhole cuffs; high-waisted black jeans with a crossover wrap waistband (a second waistband strap buttoned on the diagonal); black platform ankle boots; a black velvet baseball cap; a long black cord necklace with a pointed dark crystal pendant; silver ear cuffs, silver rings and long black-and-white graphic nails. Makeup: sharp black winged liner with white inner liner, matte nude-brown lips. Hair: long, layered and tousled, dark chocolate brown with chunky caramel face-framing streaks and a few black lowlights, blown out with volume under the cap. Her naginata in matte black with a leopard-print grip wrap and a dark crystal set in the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Night Prowl [sk-prowl] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-prowl-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: long, layered and tousled, dark chocolate brown with chunky caramel face-framing streaks and a few black lowlights, blown out with volume under the cap, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a black velvet baseball cap. Behind the face: bold flat diagonal stripes and speed lines in deep red, black and pink, a few tiny small bat silhouettes and thorny vines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Night Prowl [sk-prowl] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-prowl-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a leopard-print cropped cami top; a slim cropped black zip-up jacket worn open, with thumbhole cuffs; high-waisted black jeans with a crossover wrap waistband (a second waistband strap buttoned on the diagonal); black platform ankle boots; a black velvet baseball cap; a long black cord necklace with a pointed dark crystal pendant; silver ear cuffs, silver rings and long black-and-white graphic nails. Makeup: sharp black winged liner with white inner liner, matte nude-brown lips. Hair: long, layered and tousled, dark chocolate brown with chunky caramel face-framing streaks and a few black lowlights, blown out with volume under the cap. Her naginata in matte black with a leopard-print grip wrap and a dark crystal set in the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of deep red, black and pink breaking apart diagonally, a few speed lines, a scatter of small bat silhouettes and thorny vines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Night Prowl [sk-prowl] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-prowl-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a leopard-print cropped cami top; a slim cropped black zip-up jacket worn open, with thumbhole cuffs; high-waisted black jeans with a crossover wrap waistband (a second waistband strap buttoned on the diagonal); black platform ankle boots; a black velvet baseball cap; a long black cord necklace with a pointed dark crystal pendant; silver ear cuffs, silver rings and long black-and-white graphic nails. Makeup: sharp black winged liner with white inner liner, matte nude-brown lips. Hair: long, layered and tousled, dark chocolate brown with chunky caramel face-framing streaks and a few black lowlights, blown out with volume under the cap. Her naginata in matte black with a leopard-print grip wrap and a dark crystal set in the collar. Same face as the THIRD attached image. Background colours: deep red, black and pink, small bat silhouettes and thorny vines drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Strawberry Milk · `sk-strawberry` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Strawberry Milk [sk-strawberry] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-strawberry-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a lilac-pink one-shoulder ribbed knit tank top; short white drawstring shorts with lavender metallic satin panels; white platform sneakers; a long white beaded strand necklace hanging to her hip with tiny pastel charms; a beaded pastel choker with a pink flower charm; a blank hot-pink nameplate necklace; a white shell-bead necklace; little silver star ear cuffs; a silver watch on a black-bead bracelet and a white bangle; long 3D charm nails in pink and silver with tiny bows; a small butterfly temporary tattoo on one forearm; rosy blush and glossy peach lips. Hair: waist-length soft waves, pastel strawberry pink all over with fine white-blonde and lilac streaks and a few tiny silver star clips. Her naginata's haft in pastel pink, strung with white bead strands and little pastel charms, a sparkly silver blade. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Strawberry Milk [sk-strawberry] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-strawberry-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a lilac-pink one-shoulder ribbed knit tank top; short white drawstring shorts with lavender metallic satin panels; white platform sneakers; a long white beaded strand necklace hanging to her hip with tiny pastel charms; a beaded pastel choker with a pink flower charm; a blank hot-pink nameplate necklace; a white shell-bead necklace; little silver star ear cuffs; a silver watch on a black-bead bracelet and a white bangle; long 3D charm nails in pink and silver with tiny bows; a small butterfly temporary tattoo on one forearm; rosy blush and glossy peach lips. Hair: waist-length soft waves, pastel strawberry pink all over with fine white-blonde and lilac streaks and a few tiny silver star clips. Her naginata's haft in pastel pink, strung with white bead strands and little pastel charms, a sparkly silver blade. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Strawberry Milk [sk-strawberry] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-strawberry-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: waist-length soft waves, pastel strawberry pink all over with fine white-blonde and lilac streaks and a few tiny silver star clips, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Strawberry Milk [sk-strawberry] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-strawberry-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a lilac-pink one-shoulder ribbed knit tank top; short white drawstring shorts with lavender metallic satin panels; white platform sneakers; a long white beaded strand necklace hanging to her hip with tiny pastel charms; a beaded pastel choker with a pink flower charm; a blank hot-pink nameplate necklace; a white shell-bead necklace; little silver star ear cuffs; a silver watch on a black-bead bracelet and a white bangle; long 3D charm nails in pink and silver with tiny bows; a small butterfly temporary tattoo on one forearm; rosy blush and glossy peach lips. Hair: waist-length soft waves, pastel strawberry pink all over with fine white-blonde and lilac streaks and a few tiny silver star clips. Her naginata's haft in pastel pink, strung with white bead strands and little pastel charms, a sparkly silver blade), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Strawberry Milk [sk-strawberry] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-strawberry-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a lilac-pink one-shoulder ribbed knit tank top; short white drawstring shorts with lavender metallic satin panels; white platform sneakers; a long white beaded strand necklace hanging to her hip with tiny pastel charms; a beaded pastel choker with a pink flower charm; a blank hot-pink nameplate necklace; a white shell-bead necklace; little silver star ear cuffs; a silver watch on a black-bead bracelet and a white bangle; long 3D charm nails in pink and silver with tiny bows; a small butterfly temporary tattoo on one forearm; rosy blush and glossy peach lips. Hair: waist-length soft waves, pastel strawberry pink all over with fine white-blonde and lilac streaks and a few tiny silver star clips. Her naginata's haft in pastel pink, strung with white bead strands and little pastel charms, a sparkly silver blade. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Summer Session · `sk-summersession` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Summer Session [sk-summersession] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-summersession-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a sporty campus-summer look: an oversized white zip-up track jacket with a gold zip, navy stripes down the sleeves, gathered elastic cuffs and hem and a tiny navy emblem on the chest, worn open; a strapless white mesh tube top with big blocky royal-blue varsity-number shapes outlined in black (no readable digits); light-wash distressed denim cutoff shorts with frayed hems and the white pocket linings peeking out, little pink star charms clipped to the belt loops; white chunky sneakers and white crew socks with colourful doodles; a dainty silver heart pendant necklace, silver heart stud earrings, stacked rings and long glossy chrome nails with blue-and-pink accents; a few freckles. Hair: black, piled in a messy high bun tied with a navy satin ribbon, with loose face-framing wisps that have cobalt-blue peekaboo streaks. Her naginata with navy-and-white grip tape and a tiny silver heart charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Summer Session [sk-summersession] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-summersession-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a sporty campus-summer look: an oversized white zip-up track jacket with a gold zip, navy stripes down the sleeves, gathered elastic cuffs and hem and a tiny navy emblem on the chest, worn open; a strapless white mesh tube top with big blocky royal-blue varsity-number shapes outlined in black (no readable digits); light-wash distressed denim cutoff shorts with frayed hems and the white pocket linings peeking out, little pink star charms clipped to the belt loops; white chunky sneakers and white crew socks with colourful doodles; a dainty silver heart pendant necklace, silver heart stud earrings, stacked rings and long glossy chrome nails with blue-and-pink accents; a few freckles. Hair: black, piled in a messy high bun tied with a navy satin ribbon, with loose face-framing wisps that have cobalt-blue peekaboo streaks. Her naginata with navy-and-white grip tape and a tiny silver heart charm at the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Summer Session [sk-summersession] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-summersession-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: black, piled in a messy high bun tied with a navy satin ribbon, with loose face-framing wisps that have cobalt-blue peekaboo streaks, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: silver heart stud earrings. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Summer Session [sk-summersession] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-summersession-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a sporty campus-summer look: an oversized white zip-up track jacket with a gold zip, navy stripes down the sleeves, gathered elastic cuffs and hem and a tiny navy emblem on the chest, worn open; a strapless white mesh tube top with big blocky royal-blue varsity-number shapes outlined in black (no readable digits); light-wash distressed denim cutoff shorts with frayed hems and the white pocket linings peeking out, little pink star charms clipped to the belt loops; white chunky sneakers and white crew socks with colourful doodles; a dainty silver heart pendant necklace, silver heart stud earrings, stacked rings and long glossy chrome nails with blue-and-pink accents; a few freckles. Hair: black, piled in a messy high bun tied with a navy satin ribbon, with loose face-framing wisps that have cobalt-blue peekaboo streaks. Her naginata with navy-and-white grip tape and a tiny silver heart charm at the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Summer Session [sk-summersession] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-summersession-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a sporty campus-summer look: an oversized white zip-up track jacket with a gold zip, navy stripes down the sleeves, gathered elastic cuffs and hem and a tiny navy emblem on the chest, worn open; a strapless white mesh tube top with big blocky royal-blue varsity-number shapes outlined in black (no readable digits); light-wash distressed denim cutoff shorts with frayed hems and the white pocket linings peeking out, little pink star charms clipped to the belt loops; white chunky sneakers and white crew socks with colourful doodles; a dainty silver heart pendant necklace, silver heart stud earrings, stacked rings and long glossy chrome nails with blue-and-pink accents; a few freckles. Hair: black, piled in a messy high bun tied with a navy satin ribbon, with loose face-framing wisps that have cobalt-blue peekaboo streaks. Her naginata with navy-and-white grip tape and a tiny silver heart charm at the collar. Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Limelight · `sk-limelight` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Limelight [sk-limelight] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-limelight-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a K-pop comeback look in neon green and bling: a cropped neon lime-green racing jacket with silver studs on the shoulders and black-and-white checkered panels down the sleeves, open over a black rhinestone-studded corset top crossed by a black chest harness with neon lime reflective strips on the straps; a black pleated mini skirt with a heavy silver chain belt and a big square silver buckle; neon green fishnet tights and black platform combat boots with silver hardware; black fingerless gloves sparkling with rhinestones; layered silver and rhinestone chains with a silver dog-tag pendant; big rhinestone hoop earrings. Hair: a long, sleek high ponytail, black with two chunky neon lime-green face-framing streaks and a line of crystal clips along the part. Her naginata's haft wrapped in neon lime reflective tape, rhinestones along the blade's spine, a little silver dog tag hanging from the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Limelight [sk-limelight] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-limelight-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a K-pop comeback look in neon green and bling: a cropped neon lime-green racing jacket with silver studs on the shoulders and black-and-white checkered panels down the sleeves, open over a black rhinestone-studded corset top crossed by a black chest harness with neon lime reflective strips on the straps; a black pleated mini skirt with a heavy silver chain belt and a big square silver buckle; neon green fishnet tights and black platform combat boots with silver hardware; black fingerless gloves sparkling with rhinestones; layered silver and rhinestone chains with a silver dog-tag pendant; big rhinestone hoop earrings. Hair: a long, sleek high ponytail, black with two chunky neon lime-green face-framing streaks and a line of crystal clips along the part. Her naginata's haft wrapped in neon lime reflective tape, rhinestones along the blade's spine, a little silver dog tag hanging from the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Limelight [sk-limelight] - portraits (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-limelight-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: a long, sleek high ponytail, black with two chunky neon lime-green face-framing streaks and a line of crystal clips along the part, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: big rhinestone hoop earrings. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Limelight [sk-limelight] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-limelight-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a K-pop comeback look in neon green and bling: a cropped neon lime-green racing jacket with silver studs on the shoulders and black-and-white checkered panels down the sleeves, open over a black rhinestone-studded corset top crossed by a black chest harness with neon lime reflective strips on the straps; a black pleated mini skirt with a heavy silver chain belt and a big square silver buckle; neon green fishnet tights and black platform combat boots with silver hardware; black fingerless gloves sparkling with rhinestones; layered silver and rhinestone chains with a silver dog-tag pendant; big rhinestone hoop earrings. Hair: a long, sleek high ponytail, black with two chunky neon lime-green face-framing streaks and a line of crystal clips along the part. Her naginata's haft wrapped in neon lime reflective tape, rhinestones along the blade's spine, a little silver dog tag hanging from the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Limelight [sk-limelight] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-limelight-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a K-pop comeback look in neon green and bling: a cropped neon lime-green racing jacket with silver studs on the shoulders and black-and-white checkered panels down the sleeves, open over a black rhinestone-studded corset top crossed by a black chest harness with neon lime reflective strips on the straps; a black pleated mini skirt with a heavy silver chain belt and a big square silver buckle; neon green fishnet tights and black platform combat boots with silver hardware; black fingerless gloves sparkling with rhinestones; layered silver and rhinestone chains with a silver dog-tag pendant; big rhinestone hoop earrings. Hair: a long, sleek high ponytail, black with two chunky neon lime-green face-framing streaks and a line of crystal clips along the part. Her naginata's haft wrapped in neon lime reflective tape, rhinestones along the blade's spine, a little silver dog tag hanging from the collar. Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Pink Lagoon · `sk-swim-lagoon` · Bubbles

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Pink Lagoon [sk-swim-lagoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lagoon-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black bikini top with pink ruffle trim and a tiny pink bow at the centre, high-waisted black bikini bottoms with pink ruffles, a sheer hot-pink chiffon sarong knotted at one hip and floating behind her, heart-shaped pink sunglasses pushed up on her head, a pearl anklet, black platform sandals with pink straps, a few pink beaded bracelets. Hair: her own jet-black hair with bold hot-pink streaks, pulled into a very high bubble ponytail (the long ponytail tied off every few inches with pink hair ties so it puffs into bubbles), little pearl clips above one ear, glossy wet-look ends. Her naginata's haft wrapped in pink and white rope like a beach towel stripe, a small seashell charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Pink Lagoon [sk-swim-lagoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lagoon-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black bikini top with pink ruffle trim and a tiny pink bow at the centre, high-waisted black bikini bottoms with pink ruffles, a sheer hot-pink chiffon sarong knotted at one hip and floating behind her, heart-shaped pink sunglasses pushed up on her head, a pearl anklet, black platform sandals with pink straps, a few pink beaded bracelets. Hair: her own jet-black hair with bold hot-pink streaks, pulled into a very high bubble ponytail (the long ponytail tied off every few inches with pink hair ties so it puffs into bubbles), little pearl clips above one ear, glossy wet-look ends. Her naginata's haft wrapped in pink and white rope like a beach towel stripe, a small seashell charm at the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Pink Lagoon [sk-swim-lagoon] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lagoon-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair with bold hot-pink streaks, pulled into a very high bubble ponytail (the long ponytail tied off every few inches with pink hair ties so it puffs into bubbles), little pearl clips above one ear, glossy wet-look ends, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: heart-shaped pink sunglasses pushed up on her head. Behind the face: bold flat diagonal stripes and speed lines in aqua, pale pink and white, a few tiny round shiny bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Pink Lagoon [sk-swim-lagoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lagoon-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black bikini top with pink ruffle trim and a tiny pink bow at the centre, high-waisted black bikini bottoms with pink ruffles, a sheer hot-pink chiffon sarong knotted at one hip and floating behind her, heart-shaped pink sunglasses pushed up on her head, a pearl anklet, black platform sandals with pink straps, a few pink beaded bracelets. Hair: her own jet-black hair with bold hot-pink streaks, pulled into a very high bubble ponytail (the long ponytail tied off every few inches with pink hair ties so it puffs into bubbles), little pearl clips above one ear, glossy wet-look ends. Her naginata's haft wrapped in pink and white rope like a beach towel stripe, a small seashell charm at the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of aqua, pale pink and white breaking apart diagonally, a few speed lines, a scatter of round shiny bubbles. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Pink Lagoon [sk-swim-lagoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lagoon-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black bikini top with pink ruffle trim and a tiny pink bow at the centre, high-waisted black bikini bottoms with pink ruffles, a sheer hot-pink chiffon sarong knotted at one hip and floating behind her, heart-shaped pink sunglasses pushed up on her head, a pearl anklet, black platform sandals with pink straps, a few pink beaded bracelets. Hair: her own jet-black hair with bold hot-pink streaks, pulled into a very high bubble ponytail (the long ponytail tied off every few inches with pink hair ties so it puffs into bubbles), little pearl clips above one ear, glossy wet-look ends. Her naginata's haft wrapped in pink and white rope like a beach towel stripe, a small seashell charm at the collar. Same face as the THIRD attached image. Background colours: aqua, pale pink and white, round shiny bubbles drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Lifeguard on Duty · `sk-swim-lifeguard` · Bubbles

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Lifeguard on Duty [sk-swim-lifeguard] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lifeguard-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a red racer-back one-piece swimsuit with white piping and a small white sun emblem on the hip (no letters), an oversized white zip hoodie tied around her waist by the sleeves, a pink whistle on a black cord around her neck, a white sun visor, white-and-red slides, a red waterproof wristband. Hair: her own jet-black hair in two tight French braids down her back, with two bleached-blond face-framing streaks at the front, a few loose baby hairs. Her naginata's haft striped red and white like a lifebuoy. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Lifeguard on Duty [sk-swim-lifeguard] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lifeguard-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a red racer-back one-piece swimsuit with white piping and a small white sun emblem on the hip (no letters), an oversized white zip hoodie tied around her waist by the sleeves, a pink whistle on a black cord around her neck, a white sun visor, white-and-red slides, a red waterproof wristband. Hair: her own jet-black hair in two tight French braids down her back, with two bleached-blond face-framing streaks at the front, a few loose baby hairs. Her naginata's haft striped red and white like a lifebuoy. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Lifeguard on Duty [sk-swim-lifeguard] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lifeguard-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in two tight French braids down her back, with two bleached-blond face-framing streaks at the front, a few loose baby hairs, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a white sun visor. Behind the face: bold flat diagonal stripes and speed lines in aqua, pale pink and white, a few tiny round shiny bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Lifeguard on Duty [sk-swim-lifeguard] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lifeguard-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a red racer-back one-piece swimsuit with white piping and a small white sun emblem on the hip (no letters), an oversized white zip hoodie tied around her waist by the sleeves, a pink whistle on a black cord around her neck, a white sun visor, white-and-red slides, a red waterproof wristband. Hair: her own jet-black hair in two tight French braids down her back, with two bleached-blond face-framing streaks at the front, a few loose baby hairs. Her naginata's haft striped red and white like a lifebuoy), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of aqua, pale pink and white breaking apart diagonally, a few speed lines, a scatter of round shiny bubbles. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Lifeguard on Duty [sk-swim-lifeguard] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-lifeguard-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a red racer-back one-piece swimsuit with white piping and a small white sun emblem on the hip (no letters), an oversized white zip hoodie tied around her waist by the sleeves, a pink whistle on a black cord around her neck, a white sun visor, white-and-red slides, a red waterproof wristband. Hair: her own jet-black hair in two tight French braids down her back, with two bleached-blond face-framing streaks at the front, a few loose baby hairs. Her naginata's haft striped red and white like a lifebuoy. Same face as the THIRD attached image. Background colours: aqua, pale pink and white, round shiny bubbles drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Night Swim · `sk-swim-night` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Night Swim [sk-swim-night] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-night-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black halter one-piece swimsuit with a side cut-out and thin silver chain details at the hips, a sheer black kimono-sleeve cover-up printed with small pink crescent moons, worn open and slipping off one shoulder, silver ear cuffs, black strappy sandals, a thin silver body chain at the waist. Hair: her own jet-black hair in half-up twin space buns, the rest falling long and straight down her back, the very ends dip-dyed hot pink, a little silver glitter on the buns. Her naginata's blade catching moonlight, a small silver crescent charm at the collar. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Night Swim [sk-swim-night] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-night-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black halter one-piece swimsuit with a side cut-out and thin silver chain details at the hips, a sheer black kimono-sleeve cover-up printed with small pink crescent moons, worn open and slipping off one shoulder, silver ear cuffs, black strappy sandals, a thin silver body chain at the waist. Hair: her own jet-black hair in half-up twin space buns, the rest falling long and straight down her back, the very ends dip-dyed hot pink, a little silver glitter on the buns. Her naginata's blade catching moonlight, a small silver crescent charm at the collar. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Night Swim [sk-swim-night] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-night-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in half-up twin space buns, the rest falling long and straight down her back, the very ends dip-dyed hot pink, a little silver glitter on the buns, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Night Swim [sk-swim-night] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-night-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black halter one-piece swimsuit with a side cut-out and thin silver chain details at the hips, a sheer black kimono-sleeve cover-up printed with small pink crescent moons, worn open and slipping off one shoulder, silver ear cuffs, black strappy sandals, a thin silver body chain at the waist. Hair: her own jet-black hair in half-up twin space buns, the rest falling long and straight down her back, the very ends dip-dyed hot pink, a little silver glitter on the buns. Her naginata's blade catching moonlight, a small silver crescent charm at the collar), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Night Swim [sk-swim-night] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-swim-night-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black halter one-piece swimsuit with a side cut-out and thin silver chain details at the hips, a sheer black kimono-sleeve cover-up printed with small pink crescent moons, worn open and slipping off one shoulder, silver ear cuffs, black strappy sandals, a thin silver body chain at the waist. Hair: her own jet-black hair in half-up twin space buns, the rest falling long and straight down her back, the very ends dip-dyed hot pink, a little silver glitter on the buns. Her naginata's blade catching moonlight, a small silver crescent charm at the collar. Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Sun Hoodie · `sk-cp-sunmoon` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-sunmoon-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an oversized black hoodie worn as a short dress, a big hot-pink sun printed on the chest and a tiny crescent moon on the cuff (no letters), black thigh-high socks with a pink stripe, chunky black-and-pink sneakers, a pink heart-shaped hair clip, a silver sun pendant. Hair: her own jet-black hair with hot-pink face-framing streaks, in two low loose pigtails tied with black scrunchies. A small pink sun charm on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-sunmoon-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an oversized black hoodie worn as a short dress, a big hot-pink sun printed on the chest and a tiny crescent moon on the cuff (no letters), black thigh-high socks with a pink stripe, chunky black-and-pink sneakers, a pink heart-shaped hair clip, a silver sun pendant. Hair: her own jet-black hair with hot-pink face-framing streaks, in two low loose pigtails tied with black scrunchies. A small pink sun charm on her naginata. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-sunmoon-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair with hot-pink face-framing streaks, in two low loose pigtails tied with black scrunchies, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a pink heart-shaped hair clip. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-sunmoon-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an oversized black hoodie worn as a short dress, a big hot-pink sun printed on the chest and a tiny crescent moon on the cuff (no letters), black thigh-high socks with a pink stripe, chunky black-and-pink sneakers, a pink heart-shaped hair clip, a silver sun pendant. Hair: her own jet-black hair with hot-pink face-framing streaks, in two low loose pigtails tied with black scrunchies. A small pink sun charm on her naginata), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-sunmoon-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: an oversized black hoodie worn as a short dress, a big hot-pink sun printed on the chest and a tiny crescent moon on the cuff (no letters), black thigh-high socks with a pink stripe, chunky black-and-pink sneakers, a pink heart-shaped hair clip, a silver sun pendant. Hair: her own jet-black hair with hot-pink face-framing streaks, in two low loose pigtails tied with black scrunchies. A small pink sun charm on her naginata. Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Midnight Drive · `sk-cp-drive` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Midnight Drive [sk-cp-drive] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-drive-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cropped black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a short pink satin slip dress, sheer black tights, black ankle boots with silver buckles, small silver hoop earrings, a thin black velvet choker. Hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front. Her naginata's haft wrapped in black leather with pink stitching. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Midnight Drive [sk-cp-drive] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-drive-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cropped black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a short pink satin slip dress, sheer black tights, black ankle boots with silver buckles, small silver hoop earrings, a thin black velvet choker. Hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front. Her naginata's haft wrapped in black leather with pink stitching. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Midnight Drive [sk-cp-drive] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-drive-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: small silver hoop earrings. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Midnight Drive [sk-cp-drive] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-drive-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cropped black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a short pink satin slip dress, sheer black tights, black ankle boots with silver buckles, small silver hoop earrings, a thin black velvet choker. Hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front. Her naginata's haft wrapped in black leather with pink stitching), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Midnight Drive [sk-cp-drive] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-drive-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a cropped black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a short pink satin slip dress, sheer black tights, black ankle boots with silver buckles, small silver hoop earrings, a thin black velvet choker. Hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front. Her naginata's haft wrapped in black leather with pink stitching. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### After Hours · `sk-cp-afterhours` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/After Hours [sk-cp-afterhours] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-afterhours-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black school blazer worn open with a small pink pin on the lapel, a white shirt, a loosened hot-pink tie, a pale pink cardigan tied around her waist, a short black pleated skirt, black knee socks, black loafers, a pink student council armband. Hair: her own jet-black hair in two neat French braids with pink ribbon ends. A small pink tassel on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/After Hours [sk-cp-afterhours] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-afterhours-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black school blazer worn open with a small pink pin on the lapel, a white shirt, a loosened hot-pink tie, a pale pink cardigan tied around her waist, a short black pleated skirt, black knee socks, black loafers, a pink student council armband. Hair: her own jet-black hair in two neat French braids with pink ribbon ends. A small pink tassel on her naginata. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/After Hours [sk-cp-afterhours] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-afterhours-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in two neat French braids with pink ribbon ends, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/After Hours [sk-cp-afterhours] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-afterhours-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black school blazer worn open with a small pink pin on the lapel, a white shirt, a loosened hot-pink tie, a pale pink cardigan tied around her waist, a short black pleated skirt, black knee socks, black loafers, a pink student council armband. Hair: her own jet-black hair in two neat French braids with pink ribbon ends. A small pink tassel on her naginata), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/After Hours [sk-cp-afterhours] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-afterhours-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black school blazer worn open with a small pink pin on the lapel, a white shirt, a loosened hot-pink tie, a pale pink cardigan tied around her waist, a short black pleated skirt, black knee socks, black loafers, a pink student council armband. Hair: her own jet-black hair in two neat French braids with pink ribbon ends. A small pink tassel on her naginata. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Movie Date · `sk-cp-moviedate` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Movie Date [sk-cp-moviedate] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-moviedate-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cream cable-knit sweater dress, a long black wool coat worn open, a pink knit scarf, black tights, black loafers with chunky soles, a small black shoulder bag, a cinema ticket stub tucked in her coat pocket. Hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow. A small cream pom-pom charm on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Movie Date [sk-cp-moviedate] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-moviedate-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cream cable-knit sweater dress, a long black wool coat worn open, a pink knit scarf, black tights, black loafers with chunky soles, a small black shoulder bag, a cinema ticket stub tucked in her coat pocket. Hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow. A small cream pom-pom charm on her naginata. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Movie Date [sk-cp-moviedate] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-moviedate-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Movie Date [sk-cp-moviedate] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-moviedate-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cream cable-knit sweater dress, a long black wool coat worn open, a pink knit scarf, black tights, black loafers with chunky soles, a small black shoulder bag, a cinema ticket stub tucked in her coat pocket. Hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow. A small cream pom-pom charm on her naginata), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Movie Date [sk-cp-moviedate] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-moviedate-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a cream cable-knit sweater dress, a long black wool coat worn open, a pink knit scarf, black tights, black loafers with chunky soles, a small black shoulder bag, a cinema ticket stub tucked in her coat pocket. Hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow. A small cream pom-pom charm on her naginata. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Ringside · `sk-cp-ringside` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Ringside [sk-cp-ringside] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-ringside-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cropped red-and-black track jacket with white stripes down the sleeves (no letters), a black sports bra top, black bike shorts under a short red track skirt, white hand wraps, red-and-white high-top boxing boots, a towel around her neck. Hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink. Her naginata's haft wrapped in white boxing tape. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Ringside [sk-cp-ringside] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-ringside-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cropped red-and-black track jacket with white stripes down the sleeves (no letters), a black sports bra top, black bike shorts under a short red track skirt, white hand wraps, red-and-white high-top boxing boots, a towel around her neck. Hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink. Her naginata's haft wrapped in white boxing tape. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Ringside [sk-cp-ringside] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-ringside-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Ringside [sk-cp-ringside] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-ringside-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cropped red-and-black track jacket with white stripes down the sleeves (no letters), a black sports bra top, black bike shorts under a short red track skirt, white hand wraps, red-and-white high-top boxing boots, a towel around her neck. Hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink. Her naginata's haft wrapped in white boxing tape), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Ringside [sk-cp-ringside] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-ringside-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a cropped red-and-black track jacket with white stripes down the sleeves (no letters), a black sports bra top, black bike shorts under a short red track skirt, white hand wraps, red-and-white high-top boxing boots, a towel around her neck. Hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink. Her naginata's haft wrapped in white boxing tape. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### Summer Festival · `sk-cp-festival` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Solar/Summer Festival [sk-cp-festival] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-festival-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black yukata printed with red camellias and small silver crescent moons, a red obi with a black bow at the back, a silver obi cord, red-thonged black geta, a red drawstring kinchaku bag, a small paper fan tucked in the obi. Hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck. A red tassel and a little silver bell on her naginata. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/Summer Festival [sk-cp-festival] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-festival-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black yukata printed with red camellias and small silver crescent moons, a red obi with a black bow at the back, a silver obi cord, red-thonged black geta, a red drawstring kinchaku bag, a small paper fan tucked in the obi. Hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck. A red tassel and a little silver bell on her naginata. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/Summer Festival [sk-cp-festival] - portraits.png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-festival-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/Summer Festival [sk-cp-festival] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-festival-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black yukata printed with red camellias and small silver crescent moons, a red obi with a black bow at the back, a silver obi cord, red-thonged black geta, a red drawstring kinchaku bag, a small paper fan tucked in the obi. Hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck. A red tassel and a little silver bell on her naginata), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/Summer Festival [sk-cp-festival] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-cp-festival-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a black yukata printed with red camellias and small silver crescent moons, a red obi with a black bow at the back, a silver obi cord, red-thonged black geta, a red drawstring kinchaku bag, a small paper fan tucked in the obi. Hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck. A red tassel and a little silver bell on her naginata. Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

### The Sun · `sk-arcana-sun` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Solar/The Sun [sk-arcana-sun] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-sun-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a floor-length white-and-gold gown with a fitted bodice, a sunburst halo collar of gold rays rising behind her neck, a sheer gold-dusted overskirt split at the front so she can move, gold arm cuffs, gold strappy heels, a small sun-disc pendant. Hair: her own jet-black hair in a crown braid wrapped around her head, the rest falling long down her back with warm honey-gold highlights at the ends, tiny gold flowers and gold thread woven through the braid. Her naginata's blade gilded, with a gold sunburst at its base. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the naginata held loosely in the other hand. Cell 2: guarding: braced low, the naginata held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the naginata. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the naginata lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the naginata ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-solar-haenim.png`, then `Current Skins/Solar/The Sun [sk-arcana-sun] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-sun-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a floor-length white-and-gold gown with a fitted bodice, a sunburst halo collar of gold rays rising behind her neck, a sheer gold-dusted overskirt split at the front so she can move, gold arm cuffs, gold strappy heels, a small sun-disc pendant. Hair: her own jet-black hair in a crown braid wrapped around her head, the rest falling long down her back with warm honey-gold highlights at the ends, tiny gold flowers and gold thread woven through the braid. Her naginata's blade gilded, with a gold sunburst at its base. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Solar/The Sun [sk-arcana-sun] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-sun-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own jet-black hair in a crown braid wrapped around her head, the rest falling long down her back with warm honey-gold highlights at the ends, tiny gold flowers and gold thread woven through the braid, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Solar/The Sun [sk-arcana-sun] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-sun-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a floor-length white-and-gold gown with a fitted bodice, a sunburst halo collar of gold rays rising behind her neck, a sheer gold-dusted overskirt split at the front so she can move, gold arm cuffs, gold strappy heels, a small sun-disc pendant. Hair: her own jet-black hair in a crown braid wrapped around her head, the rest falling long down her back with warm honey-gold highlights at the ends, tiny gold flowers and gold thread woven through the braid. Her naginata's blade gilded, with a gold sunburst at its base), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the naginata swung over one shoulder, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Solar/Solar - finish card.png`, then `Current Skins/Solar/The Sun [sk-arcana-sun] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`  
Save as: `skin-sk-arcana-sun-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a floor-length white-and-gold gown with a fitted bodice, a sunburst halo collar of gold rays rising behind her neck, a sheer gold-dusted overskirt split at the front so she can move, gold arm cuffs, gold strappy heels, a small sun-disc pendant. Hair: her own jet-black hair in a crown braid wrapped around her head, the rest falling long down her back with warm honey-gold highlights at the ends, tiny gold flowers and gold thread woven through the braid. Her naginata's blade gilded, with a gold sunburst at its base. Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: RISE AND SHINE. No other text, no logos, no watermark.
```

---

## Haechan

Own look + 16 Wardrobe looks. Finish-card words: **TOO EASY**

### Haechan: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Haechan/Haechan - battle pose sheet.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `haechan-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black suit jacket worn open over a white shirt with a loose black tie, black trousers, black shoes, his knives. Hair: his messy black hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Haechan/Haechan-neutral.png`, then `Current Skins/Base Game/Haechan/Haechan - battle pose sheet.png`  
Save as: `haechan-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his messy black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Haechan/Haechan - battle pose sheet.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `haechan-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black suit jacket worn open over a white shirt with a loose black tie, black trousers, black shoes, his knives. Hair: his messy black hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Sweater Date · `sk-haechan-sweater` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Sweater Date [sk-haechan-sweater] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweater-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cosy date look: a chunky cream cable-knit sweater with the sleeves pushed up, a brown-and-red check scarf, dark straight jeans, white sneakers, a thin silver ring on one finger. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Sweater Date [sk-haechan-sweater] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweater-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cosy date look: a chunky cream cable-knit sweater with the sleeves pushed up, a brown-and-red check scarf, dark straight jeans, white sneakers, a thin silver ring on one finger. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Sweater Date [sk-haechan-sweater] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweater-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his messy black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Sweater Date [sk-haechan-sweater] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweater-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cosy date look: a chunky cream cable-knit sweater with the sleeves pushed up, a brown-and-red check scarf, dark straight jeans, white sneakers, a thin silver ring on one finger), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Sweater Date [sk-haechan-sweater] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweater-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a cosy date look: a chunky cream cable-knit sweater with the sleeves pushed up, a brown-and-red check scarf, dark straight jeans, white sneakers, a thin silver ring on one finger. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Headphones On · `sk-haechan-headphones` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Headphones On [sk-haechan-headphones] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-headphones-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a white zip-up track jacket with royal-blue panels down the sleeves and collar, open over a neon lime-green zip hoodie with the hood pulled up over his head, a plain white tee underneath, white-and-silver over-ear headphones on over the hood, slim black pants and white sneakers. Hair: his own dark brown hair, messy and a little damp-looking, the fringe falling into his eyes under the hood (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Headphones On [sk-haechan-headphones] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-headphones-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a white zip-up track jacket with royal-blue panels down the sleeves and collar, open over a neon lime-green zip hoodie with the hood pulled up over his head, a plain white tee underneath, white-and-silver over-ear headphones on over the hood, slim black pants and white sneakers. Hair: his own dark brown hair, messy and a little damp-looking, the fringe falling into his eyes under the hood (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Headphones On [sk-haechan-headphones] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-headphones-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, messy and a little damp-looking, the fringe falling into his eyes under the hood (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a neon lime-green zip hoodie with the hood pulled up over his head; white-and-silver over-ear headphones on over the hood. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Headphones On [sk-haechan-headphones] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-headphones-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a white zip-up track jacket with royal-blue panels down the sleeves and collar, open over a neon lime-green zip hoodie with the hood pulled up over his head, a plain white tee underneath, white-and-silver over-ear headphones on over the hood, slim black pants and white sneakers. Hair: his own dark brown hair, messy and a little damp-looking, the fringe falling into his eyes under the hood (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Headphones On [sk-haechan-headphones] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-headphones-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a white zip-up track jacket with royal-blue panels down the sleeves and collar, open over a neon lime-green zip hoodie with the hood pulled up over his head, a plain white tee underneath, white-and-silver over-ear headphones on over the hood, slim black pants and white sneakers. Hair: his own dark brown hair, messy and a little damp-looking, the fringe falling into his eyes under the hood (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Arrivals Gate · `sk-haechan-arrivals` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Arrivals Gate [sk-haechan-arrivals] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-arrivals-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an airport look: a boxy navy-black button-up overshirt with a pointed collar and a triangle-flap chest pocket, worn over a plain white tee; a dark brown leather crossbody strap with silver rivets across his chest; black straight trousers and white sneakers; thick black square-framed glasses; a thin silver ring. Hair: his own black hair, full and soft, the fringe falling to the top of his glasses, the sides covering his ears (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Arrivals Gate [sk-haechan-arrivals] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-arrivals-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an airport look: a boxy navy-black button-up overshirt with a pointed collar and a triangle-flap chest pocket, worn over a plain white tee; a dark brown leather crossbody strap with silver rivets across his chest; black straight trousers and white sneakers; thick black square-framed glasses; a thin silver ring. Hair: his own black hair, full and soft, the fringe falling to the top of his glasses, the sides covering his ears (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Arrivals Gate [sk-haechan-arrivals] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-arrivals-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, full and soft, the fringe falling to the top of his glasses, the sides covering his ears (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: thick black square-framed glasses. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Arrivals Gate [sk-haechan-arrivals] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-arrivals-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an airport look: a boxy navy-black button-up overshirt with a pointed collar and a triangle-flap chest pocket, worn over a plain white tee; a dark brown leather crossbody strap with silver rivets across his chest; black straight trousers and white sneakers; thick black square-framed glasses; a thin silver ring. Hair: his own black hair, full and soft, the fringe falling to the top of his glasses, the sides covering his ears (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Arrivals Gate [sk-haechan-arrivals] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-arrivals-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: an airport look: a boxy navy-black button-up overshirt with a pointed collar and a triangle-flap chest pocket, worn over a plain white tee; a dark brown leather crossbody strap with silver rivets across his chest; black straight trousers and white sneakers; thick black square-framed glasses; a thin silver ring. Hair: his own black hair, full and soft, the fringe falling to the top of his glasses, the sides covering his ears (a look he has really worn). Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Window Seat · `sk-haechan-windowseat` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Window Seat [sk-haechan-windowseat] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-windowseat-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an oversized black tee with a white grunge graphic print (no readable lettering); two silver chains at his throat, a fine rope chain and a chunky one with a silver carabiner clasp; light-wash straight blue jeans; white sneakers; a black leather backpack on one shoulder; clear champagne-tinted round-square glasses; a silver ring. Hair: his own honey-caramel brown hair, a centre-parted curtain fringe sweeping past his cheekbones, glossy and full, covering his ears (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Window Seat [sk-haechan-windowseat] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-windowseat-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an oversized black tee with a white grunge graphic print (no readable lettering); two silver chains at his throat, a fine rope chain and a chunky one with a silver carabiner clasp; light-wash straight blue jeans; white sneakers; a black leather backpack on one shoulder; clear champagne-tinted round-square glasses; a silver ring. Hair: his own honey-caramel brown hair, a centre-parted curtain fringe sweeping past his cheekbones, glossy and full, covering his ears (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Window Seat [sk-haechan-windowseat] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-windowseat-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own honey-caramel brown hair, a centre-parted curtain fringe sweeping past his cheekbones, glossy and full, covering his ears (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: clear champagne-tinted round-square glasses. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Window Seat [sk-haechan-windowseat] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-windowseat-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an oversized black tee with a white grunge graphic print (no readable lettering); two silver chains at his throat, a fine rope chain and a chunky one with a silver carabiner clasp; light-wash straight blue jeans; white sneakers; a black leather backpack on one shoulder; clear champagne-tinted round-square glasses; a silver ring. Hair: his own honey-caramel brown hair, a centre-parted curtain fringe sweeping past his cheekbones, glossy and full, covering his ears (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Window Seat [sk-haechan-windowseat] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-windowseat-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: an oversized black tee with a white grunge graphic print (no readable lettering); two silver chains at his throat, a fine rope chain and a chunky one with a silver carabiner clasp; light-wash straight blue jeans; white sneakers; a black leather backpack on one shoulder; clear champagne-tinted round-square glasses; a silver ring. Hair: his own honey-caramel brown hair, a centre-parted curtain fringe sweeping past his cheekbones, glossy and full, covering his ears (a look he has really worn). Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Bad Influence · `sk-haechan-bad` · Thorns & bats

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Bad Influence [sk-haechan-bad] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-bad-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an oversized faded black tee with the sleeves rolled and a white block print (no readable lettering); two chunky silver Cuban-link chains; a silver chain bracelet; black fingerless tactical leather gloves; baggy black parachute cargo pants with a black jacket knotted around his hips and a red-orange shirt hanging loose at one side; a black belt with a silver buckle; black boots. Hair: his own jet-black hair, short and textured, the fringe falling across his forehead in messy windswept strands (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Bad Influence [sk-haechan-bad] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-bad-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an oversized faded black tee with the sleeves rolled and a white block print (no readable lettering); two chunky silver Cuban-link chains; a silver chain bracelet; black fingerless tactical leather gloves; baggy black parachute cargo pants with a black jacket knotted around his hips and a red-orange shirt hanging loose at one side; a black belt with a silver buckle; black boots. Hair: his own jet-black hair, short and textured, the fringe falling across his forehead in messy windswept strands (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Bad Influence [sk-haechan-bad] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-bad-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own jet-black hair, short and textured, the fringe falling across his forehead in messy windswept strands (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in deep red, black and pink, a few tiny small bat silhouettes and thorny vines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Bad Influence [sk-haechan-bad] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-bad-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an oversized faded black tee with the sleeves rolled and a white block print (no readable lettering); two chunky silver Cuban-link chains; a silver chain bracelet; black fingerless tactical leather gloves; baggy black parachute cargo pants with a black jacket knotted around his hips and a red-orange shirt hanging loose at one side; a black belt with a silver buckle; black boots. Hair: his own jet-black hair, short and textured, the fringe falling across his forehead in messy windswept strands (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of deep red, black and pink breaking apart diagonally, a few speed lines, a scatter of small bat silhouettes and thorny vines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Bad Influence [sk-haechan-bad] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-bad-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: an oversized faded black tee with the sleeves rolled and a white block print (no readable lettering); two chunky silver Cuban-link chains; a silver chain bracelet; black fingerless tactical leather gloves; baggy black parachute cargo pants with a black jacket knotted around his hips and a red-orange shirt hanging loose at one side; a black belt with a silver buckle; black boots. Hair: his own jet-black hair, short and textured, the fringe falling across his forehead in messy windswept strands (a look he has really worn). Same face as the THIRD attached image. Background colours: deep red, black and pink, small bat silhouettes and thorny vines drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Garage Band · `sk-haechan-garage` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Garage Band [sk-haechan-garage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-garage-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a worn black leather biker jacket with an asymmetric zip, silver hardware and studded epaulettes; under it a black band tee with a faded grey photo print (no readable lettering) and a red-and-black plaid flannel shirt whose cuffs and hem show; white straight-leg jeans; black lace-up combat boots with beige laces; a silver chain necklace with small charms, a silver chain bracelet and chunky silver rings. Hair: his own dark brown, almost black hair swept loosely back from a soft middle part, a few strands falling over his forehead (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Garage Band [sk-haechan-garage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-garage-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a worn black leather biker jacket with an asymmetric zip, silver hardware and studded epaulettes; under it a black band tee with a faded grey photo print (no readable lettering) and a red-and-black plaid flannel shirt whose cuffs and hem show; white straight-leg jeans; black lace-up combat boots with beige laces; a silver chain necklace with small charms, a silver chain bracelet and chunky silver rings. Hair: his own dark brown, almost black hair swept loosely back from a soft middle part, a few strands falling over his forehead (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Garage Band [sk-haechan-garage] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-garage-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown, almost black hair swept loosely back from a soft middle part, a few strands falling over his forehead (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Garage Band [sk-haechan-garage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-garage-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a worn black leather biker jacket with an asymmetric zip, silver hardware and studded epaulettes; under it a black band tee with a faded grey photo print (no readable lettering) and a red-and-black plaid flannel shirt whose cuffs and hem show; white straight-leg jeans; black lace-up combat boots with beige laces; a silver chain necklace with small charms, a silver chain bracelet and chunky silver rings. Hair: his own dark brown, almost black hair swept loosely back from a soft middle part, a few strands falling over his forehead (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Garage Band [sk-haechan-garage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-garage-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a worn black leather biker jacket with an asymmetric zip, silver hardware and studded epaulettes; under it a black band tee with a faded grey photo print (no readable lettering) and a red-and-black plaid flannel shirt whose cuffs and hem show; white straight-leg jeans; black lace-up combat boots with beige laces; a silver chain necklace with small charms, a silver chain bracelet and chunky silver rings. Hair: his own dark brown, almost black hair swept loosely back from a soft middle part, a few strands falling over his forehead (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Limelight · `sk-haechan-limelight` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Limelight [sk-haechan-limelight] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-limelight-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a racing-crew K-pop comeback look: a black ribbed knit long-sleeved top; a black tactical chest-rig vest with neon lime-green and silver reflective tape across the chest pockets, small silver stud spikes and buckled straps; a beaded silver chain choker and a long silver chain with a silver dog-tag pendant; a heavy black belt with a big square silver buckle worn low; black cargo trousers with a shredded olive-camouflage fabric overlay at one hip; black combat boots; silver rings; a white-and-electric-blue racing helmet clipped to his belt. Hair: his own dark brown, almost black hair in a shaggy layered cut, the choppy fringe falling into his eyes (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Limelight [sk-haechan-limelight] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-limelight-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a racing-crew K-pop comeback look: a black ribbed knit long-sleeved top; a black tactical chest-rig vest with neon lime-green and silver reflective tape across the chest pockets, small silver stud spikes and buckled straps; a beaded silver chain choker and a long silver chain with a silver dog-tag pendant; a heavy black belt with a big square silver buckle worn low; black cargo trousers with a shredded olive-camouflage fabric overlay at one hip; black combat boots; silver rings; a white-and-electric-blue racing helmet clipped to his belt. Hair: his own dark brown, almost black hair in a shaggy layered cut, the choppy fringe falling into his eyes (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Limelight [sk-haechan-limelight] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-limelight-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown, almost black hair in a shaggy layered cut, the choppy fringe falling into his eyes (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Limelight [sk-haechan-limelight] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-limelight-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a racing-crew K-pop comeback look: a black ribbed knit long-sleeved top; a black tactical chest-rig vest with neon lime-green and silver reflective tape across the chest pockets, small silver stud spikes and buckled straps; a beaded silver chain choker and a long silver chain with a silver dog-tag pendant; a heavy black belt with a big square silver buckle worn low; black cargo trousers with a shredded olive-camouflage fabric overlay at one hip; black combat boots; silver rings; a white-and-electric-blue racing helmet clipped to his belt. Hair: his own dark brown, almost black hair in a shaggy layered cut, the choppy fringe falling into his eyes (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Limelight [sk-haechan-limelight] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-limelight-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a racing-crew K-pop comeback look: a black ribbed knit long-sleeved top; a black tactical chest-rig vest with neon lime-green and silver reflective tape across the chest pockets, small silver stud spikes and buckled straps; a beaded silver chain choker and a long silver chain with a silver dog-tag pendant; a heavy black belt with a big square silver buckle worn low; black cargo trousers with a shredded olive-camouflage fabric overlay at one hip; black combat boots; silver rings; a white-and-electric-blue racing helmet clipped to his belt. Hair: his own dark brown, almost black hair in a shaggy layered cut, the choppy fringe falling into his eyes (a look he has really worn). Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Unravelled · `sk-haechan-unravelled` · Thorns & bats

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Unravelled [sk-haechan-unravelled] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-unravelled-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black open-knit crochet sweater full of ladder holes and frayed gaps, worn long over a white tee with a faint red print showing through; layered fine silver chain necklaces with a small round pendant; silver rings and a thin silver bracelet; dark-wash slim flared jeans ripped at one knee; black-and-white low-top canvas sneakers with a white starburst print; a little smudged eyeliner. Hair: his own jet-black hair in a shaggy layered cut, the choppy fringe brushing his lashes, wispy at the nape (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Unravelled [sk-haechan-unravelled] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-unravelled-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black open-knit crochet sweater full of ladder holes and frayed gaps, worn long over a white tee with a faint red print showing through; layered fine silver chain necklaces with a small round pendant; silver rings and a thin silver bracelet; dark-wash slim flared jeans ripped at one knee; black-and-white low-top canvas sneakers with a white starburst print; a little smudged eyeliner. Hair: his own jet-black hair in a shaggy layered cut, the choppy fringe brushing his lashes, wispy at the nape (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Unravelled [sk-haechan-unravelled] - portraits (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-unravelled-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own jet-black hair in a shaggy layered cut, the choppy fringe brushing his lashes, wispy at the nape (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in deep red, black and pink, a few tiny small bat silhouettes and thorny vines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Unravelled [sk-haechan-unravelled] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-unravelled-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black open-knit crochet sweater full of ladder holes and frayed gaps, worn long over a white tee with a faint red print showing through; layered fine silver chain necklaces with a small round pendant; silver rings and a thin silver bracelet; dark-wash slim flared jeans ripped at one knee; black-and-white low-top canvas sneakers with a white starburst print; a little smudged eyeliner. Hair: his own jet-black hair in a shaggy layered cut, the choppy fringe brushing his lashes, wispy at the nape (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of deep red, black and pink breaking apart diagonally, a few speed lines, a scatter of small bat silhouettes and thorny vines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Unravelled [sk-haechan-unravelled] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-unravelled-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a black open-knit crochet sweater full of ladder holes and frayed gaps, worn long over a white tee with a faint red print showing through; layered fine silver chain necklaces with a small round pendant; silver rings and a thin silver bracelet; dark-wash slim flared jeans ripped at one knee; black-and-white low-top canvas sneakers with a white starburst print; a little smudged eyeliner. Hair: his own jet-black hair in a shaggy layered cut, the choppy fringe brushing his lashes, wispy at the nape (a look he has really worn). Same face as the THIRD attached image. Background colours: deep red, black and pink, small bat silhouettes and thorny vines drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Fairground Lights · `sk-haechan-fairground` · Glitter

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Fairground Lights [sk-haechan-fairground] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-fairground-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a glossy red satin varsity bomber with a cream-striped ribbed collar, cuffs and hem, red snap buttons and thin white piping down the sleeves, worn open; under it an open black sheer mesh short-sleeved shirt over a white tee with a red-and-black photo print (no readable lettering); layered silver chains (a big open-link chain, a curb chain and a long figaro chain); a silver chain bracelet; slim black trousers with a black belt and a silver buckle; black boots. Hair: his own copper-orange ginger hair, a long tousled curtain fringe sweeping across one eye (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Fairground Lights [sk-haechan-fairground] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-fairground-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a glossy red satin varsity bomber with a cream-striped ribbed collar, cuffs and hem, red snap buttons and thin white piping down the sleeves, worn open; under it an open black sheer mesh short-sleeved shirt over a white tee with a red-and-black photo print (no readable lettering); layered silver chains (a big open-link chain, a curb chain and a long figaro chain); a silver chain bracelet; slim black trousers with a black belt and a silver buckle; black boots. Hair: his own copper-orange ginger hair, a long tousled curtain fringe sweeping across one eye (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Fairground Lights [sk-haechan-fairground] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-fairground-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own copper-orange ginger hair, a long tousled curtain fringe sweeping across one eye (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in silver, white, hot pink and black, a few tiny rhinestone glints and faceted gems scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Fairground Lights [sk-haechan-fairground] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-fairground-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a glossy red satin varsity bomber with a cream-striped ribbed collar, cuffs and hem, red snap buttons and thin white piping down the sleeves, worn open; under it an open black sheer mesh short-sleeved shirt over a white tee with a red-and-black photo print (no readable lettering); layered silver chains (a big open-link chain, a curb chain and a long figaro chain); a silver chain bracelet; slim black trousers with a black belt and a silver buckle; black boots. Hair: his own copper-orange ginger hair, a long tousled curtain fringe sweeping across one eye (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of silver, white, hot pink and black breaking apart diagonally, a few speed lines, a scatter of rhinestone glints and faceted gems. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Fairground Lights [sk-haechan-fairground] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-fairground-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a glossy red satin varsity bomber with a cream-striped ribbed collar, cuffs and hem, red snap buttons and thin white piping down the sleeves, worn open; under it an open black sheer mesh short-sleeved shirt over a white tee with a red-and-black photo print (no readable lettering); layered silver chains (a big open-link chain, a curb chain and a long figaro chain); a silver chain bracelet; slim black trousers with a black belt and a silver buckle; black boots. Hair: his own copper-orange ginger hair, a long tousled curtain fringe sweeping across one eye (a look he has really worn). Same face as the THIRD attached image. Background colours: silver, white, hot pink and black, rhinestone glints and faceted gems drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Sweet Tooth · `sk-haechan-sweettooth` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Sweet Tooth [sk-haechan-sweettooth] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweettooth-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an oversized boxy black leather biker jacket with silver zips, worn open; a white concert tee with a red-and-black graphic print (no readable lettering); black wide-leg trousers with long white drawstrings; black boots; a thin silver chain necklace and silver rings; a red licorice rope held in his teeth. Hair: his own dark chocolate-brown hair, damp-looking and centre-parted, the fringe falling into his eyes, longer at the nape like a soft mullet (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Sweet Tooth [sk-haechan-sweettooth] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweettooth-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an oversized boxy black leather biker jacket with silver zips, worn open; a white concert tee with a red-and-black graphic print (no readable lettering); black wide-leg trousers with long white drawstrings; black boots; a thin silver chain necklace and silver rings; a red licorice rope held in his teeth. Hair: his own dark chocolate-brown hair, damp-looking and centre-parted, the fringe falling into his eyes, longer at the nape like a soft mullet (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Sweet Tooth [sk-haechan-sweettooth] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweettooth-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark chocolate-brown hair, damp-looking and centre-parted, the fringe falling into his eyes, longer at the nape like a soft mullet (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Sweet Tooth [sk-haechan-sweettooth] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweettooth-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an oversized boxy black leather biker jacket with silver zips, worn open; a white concert tee with a red-and-black graphic print (no readable lettering); black wide-leg trousers with long white drawstrings; black boots; a thin silver chain necklace and silver rings; a red licorice rope held in his teeth. Hair: his own dark chocolate-brown hair, damp-looking and centre-parted, the fringe falling into his eyes, longer at the nape like a soft mullet (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Sweet Tooth [sk-haechan-sweettooth] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-sweettooth-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: an oversized boxy black leather biker jacket with silver zips, worn open; a white concert tee with a red-and-black graphic print (no readable lettering); black wide-leg trousers with long white drawstrings; black boots; a thin silver chain necklace and silver rings; a red licorice rope held in his teeth. Hair: his own dark chocolate-brown hair, damp-looking and centre-parted, the fringe falling into his eyes, longer at the nape like a soft mullet (a look he has really worn). Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Black Suit · `sk-haechan-suit` · Calling cards

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Black Suit [sk-haechan-suit] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-suit-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a sharp black suit with a slim jacket, a black shirt open at the collar with no tie, black leather shoes, a silver watch, black leather gloves, the jacket unbuttoned. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Black Suit [sk-haechan-suit] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-suit-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a sharp black suit with a slim jacket, a black shirt open at the collar with no tie, black leather shoes, a silver watch, black leather gloves, the jacket unbuttoned. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Black Suit [sk-haechan-suit] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-suit-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his messy black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in red, black and white, a few tiny playing cards scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Black Suit [sk-haechan-suit] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-suit-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a sharp black suit with a slim jacket, a black shirt open at the collar with no tie, black leather shoes, a silver watch, black leather gloves, the jacket unbuttoned), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of red, black and white breaking apart diagonally, a few speed lines, a scatter of playing cards. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Black Suit [sk-haechan-suit] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-suit-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a sharp black suit with a slim jacket, a black shirt open at the collar with no tie, black leather shoes, a silver watch, black leather gloves, the jacket unbuttoned. Same face as the THIRD attached image. Background colours: red, black and white, playing cards drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Encore Stage · `sk-haechan-stage` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Encore Stage [sk-haechan-stage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-stage-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a K-pop stage outfit: a fitted red-and-black jacket with silver studs and chains across the shoulders, a black mesh shirt under it, black slim trousers, black boots, a slim headset microphone at his cheek, a small gold sun pin on the lapel. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Encore Stage [sk-haechan-stage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-stage-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a K-pop stage outfit: a fitted red-and-black jacket with silver studs and chains across the shoulders, a black mesh shirt under it, black slim trousers, black boots, a slim headset microphone at his cheek, a small gold sun pin on the lapel. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Encore Stage [sk-haechan-stage] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-stage-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his messy black hair, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a slim headset microphone at his cheek. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Encore Stage [sk-haechan-stage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-stage-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a K-pop stage outfit: a fitted red-and-black jacket with silver studs and chains across the shoulders, a black mesh shirt under it, black slim trousers, black boots, a slim headset microphone at his cheek, a small gold sun pin on the lapel), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Encore Stage [sk-haechan-stage] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-stage-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a K-pop stage outfit: a fitted red-and-black jacket with silver studs and chains across the shoulders, a black mesh shirt under it, black slim trousers, black boots, a slim headset microphone at his cheek, a small gold sun pin on the lapel. Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Boardwalk · `sk-haechan-swim` · Bubbles

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Boardwalk [sk-haechan-swim] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-swim-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a short-sleeved black Hawaiian shirt with a hot-pink hibiscus print, worn open over a white tank top, black-and-pink board shorts to the knee, black slides, round tinted sunglasses pushed up into his hair, a thin silver chain, a beach towel slung over one shoulder. Hair: his own dark chocolate-brown hair, damp and wavy, centre-parted with the fringe falling into his eyes (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Boardwalk [sk-haechan-swim] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-swim-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a short-sleeved black Hawaiian shirt with a hot-pink hibiscus print, worn open over a white tank top, black-and-pink board shorts to the knee, black slides, round tinted sunglasses pushed up into his hair, a thin silver chain, a beach towel slung over one shoulder. Hair: his own dark chocolate-brown hair, damp and wavy, centre-parted with the fringe falling into his eyes (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Boardwalk [sk-haechan-swim] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark chocolate-brown hair, damp and wavy, centre-parted with the fringe falling into his eyes (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: round tinted sunglasses pushed up into his hair. Behind the face: bold flat diagonal stripes and speed lines in aqua, pale pink and white, a few tiny round shiny bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Boardwalk [sk-haechan-swim] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a short-sleeved black Hawaiian shirt with a hot-pink hibiscus print, worn open over a white tank top, black-and-pink board shorts to the knee, black slides, round tinted sunglasses pushed up into his hair, a thin silver chain, a beach towel slung over one shoulder. Hair: his own dark chocolate-brown hair, damp and wavy, centre-parted with the fringe falling into his eyes (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of aqua, pale pink and white breaking apart diagonally, a few speed lines, a scatter of round shiny bubbles. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Boardwalk [sk-haechan-swim] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a short-sleeved black Hawaiian shirt with a hot-pink hibiscus print, worn open over a white tank top, black-and-pink board shorts to the knee, black slides, round tinted sunglasses pushed up into his hair, a thin silver chain, a beach towel slung over one shoulder. Hair: his own dark chocolate-brown hair, damp and wavy, centre-parted with the fringe falling into his eyes (a look he has really worn). Same face as the THIRD attached image. Background colours: aqua, pale pink and white, round shiny bubbles drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Moon Hoodie · `sk-haechan-cp-sunmoon` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-sunmoon-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: an oversized black hoodie with a big hot-pink crescent moon printed on the chest and a tiny sun on the cuff (no letters), black cargo trousers, chunky black-and-pink sneakers, a silver crescent-moon pendant. Hair: his own dark brown hair, a soft fluffy curtain fringe (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-sunmoon-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: an oversized black hoodie with a big hot-pink crescent moon printed on the chest and a tiny sun on the cuff (no letters), black cargo trousers, chunky black-and-pink sneakers, a silver crescent-moon pendant. Hair: his own dark brown hair, a soft fluffy curtain fringe (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-sunmoon-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, a soft fluffy curtain fringe (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-sunmoon-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (an oversized black hoodie with a big hot-pink crescent moon printed on the chest and a tiny sun on the cuff (no letters), black cargo trousers, chunky black-and-pink sneakers, a silver crescent-moon pendant. Hair: his own dark brown hair, a soft fluffy curtain fringe (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-sunmoon-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: an oversized black hoodie with a big hot-pink crescent moon printed on the chest and a tiny sun on the cuff (no letters), black cargo trousers, chunky black-and-pink sneakers, a silver crescent-moon pendant. Hair: his own dark brown hair, a soft fluffy curtain fringe (a look he has really worn). Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Midnight Drive · `sk-haechan-cp-drive` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-drive-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a pink satin shirt open at the collar, black slim trousers, black boots, silver rings, a car key on a pink lanyard hanging from one hand. Hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-drive-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a pink satin shirt open at the collar, black slim trousers, black boots, silver rings, a car key on a pink lanyard hanging from one hand. Hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - portraits.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-drive-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-drive-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a pink satin shirt open at the collar, black slim trousers, black boots, silver rings, a car key on a pink lanyard hanging from one hand. Hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-cp-drive-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a pink satin shirt open at the collar, black slim trousers, black boots, silver rings, a car key on a pink lanyard hanging from one hand. Hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

### Sigma Chi Runner · `sk-haechan-runners` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, a knife held loosely in the other hand. Cell 2: guarding: braced low, his knives crossed in front of his body, forearms raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping a knife. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the knives lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, a knife in each hand, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/Haechan-Theurgy-1.png`, then `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his messy black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck. Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

---

## Jungwon

Own look + 11 Wardrobe looks. Finish-card words: **MEETING ADJOURNED**

### Jungwon: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Jungwon/Jungwon - battle pose sheet.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `jungwon-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black sleeveless top, a thin silver chain, black trousers, black shoes, his rapier. Hair: his short black hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Jungwon/Jungwon-neutral.png`, then `Current Skins/Base Game/Jungwon/Jungwon - battle pose sheet.png`  
Save as: `jungwon-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - battle pose sheet.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `jungwon-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black sleeveless top, a thin silver chain, black trousers, black shoes, his rapier. Hair: his short black hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Sheer Nerve · `sk-jungwon-sheer` · Thorns & bats

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - portraits (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: silver drop earrings and silver rings. Behind the face: bold flat diagonal stripes and speed lines in deep red, black and pink, a few tiny small bat silhouettes and thorny vines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of deep red, black and pink breaking apart diagonally, a few speed lines, a scatter of small bat silhouettes and thorny vines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn). Same face as the THIRD attached image. Background colours: deep red, black and pink, small bat silhouettes and thorny vines drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Pinstripe Detective · `sk-jungwon-pinstripe` · Calling cards

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: small silver hoop earrings. Behind the face: bold flat diagonal stripes and speed lines in red, black and white, a few tiny playing cards scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of red, black and white breaking apart diagonally, a few speed lines, a scatter of playing cards. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn). Same face as the THIRD attached image. Background colours: red, black and white, playing cards drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Soundcheck · `sk-jungwon-soundcheck` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: thick black square-framed glasses; a small silver stud earring. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Cell Block Angel · `sk-jungwon-angel` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Sweater Weather · `sk-jungwon-sweater` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Heir’s Suit · `sk-jungwon-heir` · Calling cards

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in red, black and white, a few tiny playing cards scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of red, black and white breaking apart diagonally, a few speed lines, a scatter of playing cards. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes. Same face as the THIRD attached image. Background colours: red, black and white, playing cards drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Center Stage · `sk-jungwon-stage` · Music notes

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a slim headset microphone at his cheek. Behind the face: bold flat diagonal stripes and speed lines in hot pink, black and neon lime, a few tiny music notes and sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and neon lime breaking apart diagonally, a few speed lines, a scatter of music notes and little sound waves. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff. Same face as the THIRD attached image. Background colours: hot pink, black and neon lime, music notes and little sound waves drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Pool Day · `sk-jungwon-swim` · Bubbles

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: clear swim goggles pushed up on his forehead. Behind the face: bold flat diagonal stripes and speed lines in aqua, pale pink and white, a few tiny round shiny bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of aqua, pale pink and white breaking apart diagonally, a few speed lines, a scatter of round shiny bubbles. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Background colours: aqua, pale pink and white, round shiny bubbles drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### After Hours · `sk-jungwon-cp-afterhours` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, a neat comma fringe (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### Movie Date · `sk-jungwon-cp-moviedate` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn). Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn). Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

### HOAX Council Uniform · `sk-jungwon-council` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jungwon.png`, then `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

---

## Akihiko

Own look + 5 Wardrobe looks. Finish-card words: **ON TO THE NEXT BOUT.**

### Akihiko: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Akihiko/Akihiko - battle pose sheet.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `akihiko-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a red sweater vest over a white shirt with a black tie, dark navy trousers, black shoes, his red boxing gloves. Hair: his short silver hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Akihiko/Aki-Neutral.webp`, then `Current Skins/Base Game/Akihiko/Akihiko - battle pose sheet.png`  
Save as: `akihiko-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - battle pose sheet.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `akihiko-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a red sweater vest over a white shirt with a black tie, dark navy trousers, black shoes, his red boxing gloves. Hair: his short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Lifeguard Captain · `sk-akihiko-swim` · Bubbles

#### 1. Second pose sheet

Attach: `Current Skins/Akihiko/sk-akihiko-swim - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-akihiko.png`, then `Current Skins/Akihiko/sk-akihiko-swim - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Lifeguard Captain [sk-akihiko-swim] - portraits.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in aqua, pale pink and white, a few tiny round shiny bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/sk-akihiko-swim - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of aqua, pale pink and white breaking apart diagonally, a few speed lines, a scatter of round shiny bubbles. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/sk-akihiko-swim - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair. Same face as the THIRD attached image. Background colours: aqua, pale pink and white, round shiny bubbles drifting across. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

---

### Ringside · `sk-akihiko-cp-ringside` · Hearts

#### 1. Second pose sheet

Attach: `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-akihiko.png`, then `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Ringside [sk-akihiko-cp-ringside] - portraits.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink, soft pink and black, a few tiny hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, soft pink and black breaking apart diagonally, a few speed lines, a scatter of little hearts. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair. Same face as the THIRD attached image. Background colours: hot pink, soft pink and black, little hearts drifting across. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

---

### Summer Festival · `sk-akihiko-cp-festival` · Sun & moon

#### 1. Second pose sheet

Attach: `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-akihiko.png`, then `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Summer Festival [sk-akihiko-cp-festival] - portraits.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in warm gold, hot pink and black, a few tiny suns and crescent moons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of warm gold, hot pink and black breaking apart diagonally, a few speed lines, a scatter of little suns and crescent moons. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair. Same face as the THIRD attached image. Background colours: warm gold, hot pink and black, little suns and crescent moons drifting across. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

---

### Champion’s Robe · `sk-akihiko-champ` · Confetti

#### 1. Second pose sheet

Attach: `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-akihiko.png`, then `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in gold, hot pink and white, a few tiny confetti and streamers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of gold, hot pink and white breaking apart diagonally, a few speed lines, a scatter of confetti and streamers. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves. Same face as the THIRD attached image. Background colours: gold, hot pink and white, confetti and streamers drifting across. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

---

### Off-Day Hoodie · `sk-akihiko-hoodie` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-akihiko.png`, then `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

---

## Yukari

Own look + 3 Wardrobe looks. Finish-card words: **THERE YOU HAVE IT**

### Yukari: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Yukari/Yukari - battle pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `yukari-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a pink cardigan over the Gekkoukan uniform with a red bow, a short black pleated skirt, navy knee socks, brown loafers, her bow. Hair: her short brown bob. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Yukari/Yukari-Neutral.png`, then `Current Skins/Base Game/Yukari/Yukari - battle pose sheet.png`  
Save as: `yukari-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short brown bob, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Yukari/Yukari - battle pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `yukari-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink cardigan over the Gekkoukan uniform with a red bow, a short black pleated skirt, navy knee socks, brown loafers, her bow. Hair: her short brown bob), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Beach Volley · `sk-yukari-swim` · Bubbles

#### 1. Second pose sheet

Attach: `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-yukari.png`, then `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - portraits.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own short brown bob, a pink hair clip on one side, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a pink sun visor. Behind the face: bold flat diagonal stripes and speed lines in aqua, pale pink and white, a few tiny round shiny bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of aqua, pale pink and white breaking apart diagonally, a few speed lines, a scatter of round shiny bubbles. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Yukari/Yukari - finish card.png`, then `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape. Same face as the THIRD attached image. Background colours: aqua, pale pink and white, round shiny bubbles drifting across. The words read exactly: THERE YOU HAVE IT. No other text, no logos, no watermark.
```

---

### Archery Club · `sk-yukari-kyudo` · Petals

#### 1. Second pose sheet

Attach: `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-yukari.png`, then `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short brown bob, her pink hair clip kept, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in soft pink, cream and black, a few tiny drifting petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of soft pink, cream and black breaking apart diagonally, a few speed lines, a scatter of drifting petals. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Yukari/Yukari - finish card.png`, then `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept. Same face as the THIRD attached image. Background colours: soft pink, cream and black, drifting petals drifting across. The words read exactly: THERE YOU HAVE IT. No other text, no logos, no watermark.
```

---

### Featherman Pink · `sk-yukari-pink` · Stars

#### 1. Second pose sheet

Attach: `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-yukari.png`, then `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short brown bob, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in gold, pale pink and black, a few tiny five-pointed stars scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of gold, pale pink and black breaking apart diagonally, a few speed lines, a scatter of little five-pointed stars. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Yukari/Yukari - finish card.png`, then `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows. Same face as the THIRD attached image. Background colours: gold, pale pink and black, little five-pointed stars drifting across. The words read exactly: THERE YOU HAVE IT. No other text, no logos, no watermark.
```

---

## Minji

Own look + 2 Wardrobe looks. Finish-card words: **THAT'S A WRAP**

### Minji: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Minji/Minji - battle pose sheet.png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `minji-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a royal-blue tee tucked into dark baggy jeans, a black belt, white sneakers, a thin black choker, her bow. Hair: her long straight black hair, loose. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Minji/Minji-neutral.png`, then `Current Skins/Base Game/Minji/Minji - battle pose sheet.png`  
Save as: `minji-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Minji/Minji - battle pose sheet.png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `minji-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a royal-blue tee tucked into dark baggy jeans, a black belt, white sneakers, a thin black choker, her bow. Hair: her long straight black hair, loose), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Film Crew · `sk-minji-crew` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-minji.png`, then `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Minji/Minji - finish card.png`, then `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: THAT'S A WRAP. No other text, no logos, no watermark.
```

---

### SU Crewneck · `sk-minji-su` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the bow held loosely in the other hand. Cell 2: guarding: braced low, the bow held across her body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the bow. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the bow lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the bow ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-minji.png`, then `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a navy baseball cap worn backwards. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Minji/Minji - finish card.png`, then `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: THAT'S A WRAP. No other text, no logos, no watermark.
```

---

## Jihoon

Own look + 2 Wardrobe looks. Finish-card words: **YOU'RE WELCOME**

### Jihoon: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Jihoon/Jihoon - battle pose sheet.png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `jihoon-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black leather biker jacket over a black tee, ripped black jeans with a silver chain, black lace-up boots, black fingerless gloves. Hair: his ash-blond hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Jihoon/Jihoon-neutral.png`, then `Current Skins/Base Game/Jihoon/Jihoon - battle pose sheet.png`  
Save as: `jihoon-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his ash-blond hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Jihoon/Jihoon - battle pose sheet.png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `jihoon-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black leather biker jacket over a black tee, ripped black jeans with a silver chain, black lace-up boots, black fingerless gloves. Hair: his ash-blond hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose brawler's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Purple Pilates Set · `sk-jihoon-pilates` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jihoon.png`, then `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his ash-blond hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose brawler's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jihoon/Jihoon - finish card.png`, then `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: YOU'RE WELCOME. No other text, no logos, no watermark.
```

---

### Emo Night · `sk-jihoon-emo` · Thorns & bats

#### 1. Second pose sheet

Attach: `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other fist loose at his side. Cell 2: guarding: braced low, both fists raised in a tight boxer's guard in front of his face, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one fist still clenched. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, his guard lowered but his fists still clenched, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, fists up, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-jihoon.png`, then `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own ash-blond hair, short with a soft middle part, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in deep red, black and pink, a few tiny small bat silhouettes and thorny vines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose brawler's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of deep red, black and pink breaking apart diagonally, a few speed lines, a scatter of small bat silhouettes and thorny vines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jihoon/Jihoon - finish card.png`, then `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part. Same face as the THIRD attached image. Background colours: deep red, black and pink, small bat silhouettes and thorny vines drifting across. The words read exactly: YOU'RE WELCOME. No other text, no logos, no watermark.
```

---

## Junpei

Own look + 1 Wardrobe look. Finish-card words: **THAT'S THE GAME!**

### Junpei: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Junpei/Junpei - battle pose sheet.png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `junpei-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a long navy coat worn open over dark clothes, dark trousers, a navy baseball cap, his long sword. Hair: short and dark under the cap. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the sword held loosely in the other hand. Cell 2: guarding: braced low, the sword held across his body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the sword. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the sword lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the sword ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Junpei/Junpei-Neutral.png`, then `Current Skins/Base Game/Junpei/Junpei - battle pose sheet.png`  
Save as: `junpei-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: short and dark under the cap, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Junpei/Junpei - battle pose sheet.png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `junpei-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long navy coat worn open over dark clothes, dark trousers, a navy baseball cap, his long sword. Hair: short and dark under the cap), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the long sword resting on one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Little League Legend · `sk-junpei-baseball` · Confetti

#### 1. Second pose sheet

Attach: `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the sword held loosely in the other hand. Cell 2: guarding: braced low, the sword held across his body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the sword. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the sword lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the sword ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-junpei.png`, then `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: short and dark under the cap, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a navy batting helmet instead of his cap. Behind the face: bold flat diagonal stripes and speed lines in gold, hot pink and white, a few tiny confetti and streamers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the long sword resting on one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of gold, hot pink and white breaking apart diagonally, a few speed lines, a scatter of confetti and streamers. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Junpei/Junpei - finish card.png`, then `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats. Same face as the THIRD attached image. Background colours: gold, hot pink and white, confetti and streamers drifting across. The words read exactly: THAT'S THE GAME! No other text, no logos, no watermark.
```

---

## Mitsuru

Own look + 1 Wardrobe look. Finish-card words: **KNEEL BEFORE ME.**

### Mitsuru: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Mitsuru/Mitsuru - battle pose sheet.png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `mitsuru-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a black uniform jacket with a red bow at the collar, a short red-and-black pleated skirt, long black gloves, tall black heeled boots, her rapier. Hair: her long wavy crimson hair. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Mitsuru/Mitsuru-Neutral.png`, then `Current Skins/Base Game/Mitsuru/Mitsuru - battle pose sheet.png`  
Save as: `mitsuru-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long wavy crimson hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Mitsuru/Mitsuru - battle pose sheet.png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `mitsuru-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black uniform jacket with a red bow at the collar, a short red-and-black pleated skirt, long black gloves, tall black heeled boots, her rapier. Hair: her long wavy crimson hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier raised elegantly before her, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Motorcycle Leathers · `sk-mitsuru-rider` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the rapier held loosely in the other hand. Cell 2: guarding: braced low, the rapier held up in a fencer's parry, the free arm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the rapier. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, the rapier lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the rapier ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-mitsuru.png`, then `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long wavy crimson hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier raised elegantly before her, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Mitsuru/Mitsuru - finish card.png`, then `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: KNEEL BEFORE ME. No other text, no logos, no watermark.
```

---

## Shinjiro

Own look + 1 Wardrobe look. Finish-card words: **DON'T WASTE YOUR BREATH.**

### Shinjiro: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Shinjiro/Shinjiro - battle pose sheet.png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `shinjiro-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: his long red coat worn open over black clothes, black gloves, black boots, his battle axe. Hair: shoulder-length brown hair under a black knit beanie. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the axe held loosely in the other hand. Cell 2: guarding: braced low, the axe held across his body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the axe. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the axe lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the axe ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Shinjiro/Shinjiro-Neutral.png`, then `Current Skins/Base Game/Shinjiro/Shinjiro - battle pose sheet.png`  
Save as: `shinjiro-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: shoulder-length brown hair under a black knit beanie, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Shinjiro/Shinjiro - battle pose sheet.png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `shinjiro-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (his long red coat worn open over black clothes, black gloves, black boots, his battle axe. Hair: shoulder-length brown hair under a black knit beanie), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the battle axe slung over one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Beanie & Apron · `sk-shinjiro-apron` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the axe held loosely in the other hand. Cell 2: guarding: braced low, the axe held across his body like a shield, forearm raised, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, his hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, still gripping the axe. Cell 5: badly hurt: standing but hunched, one hand pressed to his side, breathing hard, the axe lowered but not dropped, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, the axe ready, his hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-shinjiro.png`, then `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: shoulder-length brown hair under a black knit beanie, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a dark charcoal knit beanie pulled low. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the battle axe slung over one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Shinjiro/Shinjiro - finish card.png`, then `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: DON'T WASTE YOUR BREATH. No other text, no logos, no watermark.
```

---

## Aigis

Own look + 1 Wardrobe look. Finish-card words: **TARGET NEUTRALIZED**

### Aigis: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Aigis/Aigis - battle pose sheet.png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `aigis-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: her black jacket with a red ribbon over her white mechanical frame, a short black pleated skirt, white-and-gold mechanical legs, her arm guns. Hair: her short blonde hair with the black headband ear units. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other arm lowered. Cell 2: guarding: braced low, both forearms crossed in front of her like a shield, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one arm gun still raised. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, her arm guns lowered but still aimed, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, both arm guns ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Aigis/Aigis-neutral.png`, then `Current Skins/Base Game/Aigis/Aigis - battle pose sheet.png`  
Save as: `aigis-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short blonde hair with the black headband ear units, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Aigis/Aigis - battle pose sheet.png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `aigis-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (her black jacket with a red ribbon over her white mechanical frame, a short black pleated skirt, white-and-gold mechanical legs, her arm guns. Hair: her short blonde hair with the black headband ear units), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, one arm raised, its arm gun aimed past the viewer, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

### Gekkoukan Uniform · `sk-aigis-uniform` · plain (no theme)

#### 1. Second pose sheet

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME person as the attached images in all six cells, full body, same face, same outfit, same hair, same weapon, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the feet on the same baseline in every cell. The outfit and hair are exactly as in the first image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Keep the red S.E.E.S. armband on the left arm if the first image has one (this is battle art). No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: casting a healing or support skill: standing tall, one open hand raised palm-up at chest height, calm and focused, the other arm lowered. Cell 2: guarding: braced low, both forearms crossed in front of her like a shield, eyes on the enemy. Cell 3: dodging: a quick sidestep leaning away, weight on one foot, her hair and clothes swinging with the motion. Cell 4: knocked down: fallen to one knee with one hand on the ground, head low, one arm gun still raised. Cell 5: badly hurt: standing but hunched, one hand pressed to her side, breathing hard, her arm guns lowered but still aimed, a determined look. Cell 6: dashing in: a full-speed sprint toward the same side the first sheet's attack pose faces, body low and leaning forward, both arm guns ready, her hair and clothes streaming back. Persona 3 Reload official art style. No text.
```

#### 2. Theurgy cut-in

Attach: `Added to Game/theurgy-aigis.png`, then `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-theurgy.png`
```
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, colours, lighting, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short blonde hair with the black headband ear units, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, one arm raised, its arm gun aimed past the viewer, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Aigis/Aigis - finish card.png`, then `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Same face as the THIRD attached image. Background colours: the same as the FIRST attached image. The words read exactly: TARGET NEUTRALIZED. No other text, no logos, no watermark.
```

---

## Koromaru

Own look only (no Wardrobe looks yet). Finish-card words: **WOOF! WOOF! WOOF!**

### Koromaru: own look

*Own look · no theme*

#### 1. Second pose sheet

Attach: `Current Skins/Base Game/Koromaru/Koromaru - battle pose sheet.png`, then `Character Portraits/Koromaru/Koromaru-Neutral.png`  
Save as: `koromaru-posesheet-2.png`
```
Character pose sheet: 3 columns × 2 rows on a transparent background (PNG with alpha), with clear empty space between every pose. The SAME dog as the attached images in all six cells, full body, same size, nothing overlapping. This is the SECOND pose sheet for the FIRST attached image: match its figure size, framing, camera angle, facing direction and art style exactly, with the paws on the same baseline in every cell. He looks exactly as in the first image: the white Shiba Inu exactly as in the first image: his white armoured vest with the blue lights, the red armband on his front leg, the knife held in his mouth. No skill effects anywhere: no glows, no magic, no sparkles, no motion lines, no ground shadows. Cell 1: sitting up alert, ears forward, the knife in his mouth. Cell 2: crouched low, growling, ready to spring. Cell 3: a quick sideways leap. Cell 4: knocked onto his side, trying to get up. Cell 5: limping, one paw raised, still determined. Cell 6: a full-speed run toward the same side the first sheet's attack pose faces, ears back. Persona 3 Reload official art style. No text.
```

#### 2. "1 MORE!" eye strip

Attach: `Character Portraits/Koromaru/Koromaru-Neutral.png`, then `Current Skins/Base Game/Koromaru/Koromaru - battle pose sheet.png`  
Save as: `koromaru-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME dog as the attached images (the white Shiba Inu), cropped to just his eyes and brow across the whole width (ear tips and nose cut off by the top and bottom edges), looking sharply to the right with an intense, alert, determined expression, his red eyes bright. White fur exactly as in the FIRST attached image, a few tufts falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in hot pink and black. No text, no letters, no logos, no border.
```

#### 3. Entrance card

Attach: `Current Skins/Base Game/Koromaru/Koromaru - battle pose sheet.png`, then `Character Portraits/Koromaru/Koromaru-Neutral.png`  
Save as: `koromaru-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME dog as the attached images, exactly as in the FIRST attached image (the white Shiba Inu: his white armoured vest with the blue lights, the red armband on his front leg, the knife held in his mouth), shown full body in a dynamic entrance pose: bounding forward out of a diagonal tear in the background, the knife held in his mouth, ears back and fur ruffling, a fierce, ready look straight at the viewer. Background: flat graphic shards of hot pink, black and white breaking apart diagonally, a few speed lines. The dog fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

---

## Couple Showtimes

One per couple set, for when both halves fight together in their matching looks. Full background.

### Sun & Moon · `sunmoon` · Sun & moon

Solar in Sun Hoodie (`sk-cp-sunmoon`) + Haechan in Moon Hoodie (`sk-haechan-cp-sunmoon`).

#### Couple Showtime

Attach: `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - pose sheet (recut).png`, then `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `couple-sunmoon-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same oversized black hoodie with the pink sun, same hair and naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same oversized black hoodie with the pink crescent moon, same hair and knives). Their matching hoodies clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of hot pink and black energy with little suns and crescent moons streaming across. No text, no letters, no logos.
```

### Midnight Drive · `drive` · Hearts

Solar in Midnight Drive (`sk-cp-drive`) + Haechan in Midnight Drive (`sk-haechan-cp-drive`).

#### Couple Showtime

Attach: `Current Skins/Solar/Midnight Drive [sk-cp-drive] - pose sheet (recut).png`, then `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `couple-drive-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a cropped black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a short pink satin slip dress, sheer black tights, black ankle boots with silver buckles, small silver hoop earrings, a thin black velvet choker. Hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front. Her naginata's haft wrapped in black leather with pink stitching); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a pink satin shirt open at the collar, black slim trousers, black boots, silver rings, a car key on a pink lanyard hanging from one hand. Hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn); his knives). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of hot pink, soft pink and black energy with little hearts streaming across. No text, no letters, no logos.
```

### After Hours · `afterhours` · Hearts

Solar in After Hours (`sk-cp-afterhours`) + Jungwon in After Hours (`sk-jungwon-cp-afterhours`).

#### Couple Showtime

Attach: `Current Skins/Solar/After Hours [sk-cp-afterhours] - pose sheet (recut).png`, then `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `couple-afterhours-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a black school blazer worn open with a small pink pin on the lapel, a white shirt, a loosened hot-pink tie, a pale pink cardigan tied around her waist, a short black pleated skirt, black knee socks, black loafers, a pink student council armband. Hair: her own jet-black hair in two neat French braids with pink ribbon ends. A small pink tassel on her naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn); his rapier). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of hot pink, soft pink and black energy with little hearts streaming across. No text, no letters, no logos.
```

### Movie Date · `moviedate` · Hearts

Solar in Movie Date (`sk-cp-moviedate`) + Jungwon in Movie Date (`sk-jungwon-cp-moviedate`).

#### Couple Showtime

Attach: `Current Skins/Solar/Movie Date [sk-cp-moviedate] - pose sheet (recut).png`, then `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `couple-moviedate-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a cream cable-knit sweater dress, a long black wool coat worn open, a pink knit scarf, black tights, black loafers with chunky soles, a small black shoulder bag, a cinema ticket stub tucked in her coat pocket. Hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow. A small cream pom-pom charm on her naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn); his rapier). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of hot pink, soft pink and black energy with little hearts streaming across. No text, no letters, no logos.
```

### Ringside · `ringside` · Hearts

Solar in Ringside (`sk-cp-ringside`) + Akihiko in Ringside (`sk-akihiko-cp-ringside`).

#### Couple Showtime

Attach: `Current Skins/Solar/Ringside [sk-cp-ringside] - pose sheet (recut).png`, then `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `couple-ringside-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a cropped red-and-black track jacket with white stripes down the sleeves (no letters), a black sports bra top, black bike shorts under a short red track skirt, white hand wraps, red-and-white high-top boxing boots, a towel around her neck. Hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink. Her naginata's haft wrapped in white boxing tape); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of hot pink, soft pink and black energy with little hearts streaming across. No text, no letters, no logos.
```

### Summer Festival · `festival` · Sun & moon

Solar in Summer Festival (`sk-cp-festival`) + Akihiko in Summer Festival (`sk-akihiko-cp-festival`).

#### Couple Showtime

Attach: `Current Skins/Solar/Summer Festival [sk-cp-festival] - pose sheet (recut).png`, then `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `couple-festival-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a black yukata printed with red camellias and small silver crescent moons, a red obi with a black bow at the back, a silver obi cord, red-thonged black geta, a red drawstring kinchaku bag, a small paper fan tucked in the obi. Hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck. A red tassel and a little silver bell on her naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a swirl of warm gold, hot pink and black energy with little suns and crescent moons streaming across. No text, no letters, no logos.
```

---

## Themes

Every look already has a theme (listed under each sheet). To move a look to another theme, or leave it plain, just tell Claude.

### Theme effect sheets (solid black background)

One per theme. Attach `Added to Game/heal.jpeg` for format and spacing only. If it comes back with grid lines, boxes or a transparent background, say: "Redo it on solid black with no grid lines or boxes."

#### Hearts effect sheet ✓ made (in the game)

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-hearts.png`
*Looks:* Date Day (Solar), Sugar Rush (Solar), Strawberry Milk (Solar), Midnight Drive (Solar), After Hours (Solar), Movie Date (Solar), Ringside (Solar), Sweater Date (Haechan), Midnight Drive (Haechan), Cell Block Angel (Jungwon), Sweater Weather (Jungwon), After Hours (Jungwon), Movie Date (Jungwon), Ringside (Akihiko)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small glowing pink heart blinks on in the centre. Frame 2: three or four more hearts pop out around it, a soft pink glow gathering. Frame 3, the peak: a burst of glossy hearts of different sizes flying outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the hearts spreading wider, tumbling and turning. Frame 5: the hearts breaking into small pink sparkles. Frame 6: a few last tiny hearts and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, hot pink, soft pink and white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Sun & moon effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-sunmoon.png`
*Looks:* Moonlit Hanbok (Solar), Night Swim (Solar), Sun Hoodie (Solar), Summer Festival (Solar), The Sun (Solar), Moon Hoodie (Haechan), Summer Festival (Akihiko)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one tiny glowing sun and one thin crescent moon blink on in the centre. Frame 2: three or four more little suns and crescents pop out around them, a soft gold glow gathering. Frame 3, the peak: a burst of little suns and crescent moons spinning outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the suns and crescent moons spreading wider, tumbling and turning. Frame 5: the suns and crescent moons breaking into small gold sparkles. Frame 6: a few last tiny suns and crescent moons and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, warm gold, pink and silver-white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Petals effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-petals.png`
*Looks:* Summer Yukata (Solar), Alpha Phi Formal (Solar), Archery Club (Yukari)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small glowing pink petal drifts on in the centre. Frame 2: a few more petals swirl out around it, a soft pink glow gathering. Frame 3, the peak: a swirl of petals blown outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the petals spreading wider, tumbling and turning. Frame 5: the petals breaking into small pink sparkles. Frame 6: a few last tiny petals and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pink, cream and white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Stars effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-stars.png`
*Looks:* Halloween Witch (Solar), Featherman Pink (Yukari)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small star twinkles on in the centre. Frame 2: three or four more stars pop out around it, a soft gold glow gathering. Frame 3, the peak: a spray of five-pointed stars of different sizes flying outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the stars spreading wider, tumbling and turning. Frame 5: the stars breaking into small gold sparkles. Frame 6: a few last tiny stars and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, gold, white and pale pink, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Bubbles effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-bubbles.png`
*Looks:* Pink Lagoon (Solar), Lifeguard on Duty (Solar), Boardwalk (Haechan), Pool Day (Jungwon), Lifeguard Captain (Akihiko), Beach Volley (Yukari)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small shiny bubble appears in the centre. Frame 2: a few more bubbles bloom around it, a soft aqua glow gathering. Frame 3, the peak: a cloud of round shiny bubbles popping outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the bubbles spreading wider, tumbling and turning. Frame 5: the bubbles breaking into small aqua sparkles. Frame 6: a few last tiny bubbles and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, aqua, white and pale pink, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Music notes effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-notes.png`
*Looks:* Summer Session (Solar), Headphones On (Haechan), Garage Band (Haechan), Encore Stage (Haechan), Sigma Chi Runner (Haechan), Soundcheck (Jungwon), Center Stage (Jungwon)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small glowing music note blinks on in the centre. Frame 2: three or four more notes pop out around it, small sound-wave rings gathering. Frame 3, the peak: a burst of music notes and little sound waves flying outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the music notes spreading wider, tumbling and turning. Frame 5: the music notes breaking into small pink and lime sparkles. Frame 6: a few last tiny music notes and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pink, white and neon lime, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Glitter effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-glitter.png`
*Looks:* Stage Idol (Solar), Y2K Pop Star (Solar), Oops! (Solar), Snake Charmer (Solar), Limelight (Solar), Limelight (Haechan), Fairground Lights (Haechan)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one rhinestone glint flashes in the centre. Frame 2: a few more four-point glints flash around it, a soft silver glow gathering. Frame 3, the peak: a shower of faceted gems and four-point glints flying outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the gems and glints spreading wider, tumbling and turning. Frame 5: the gems and glints breaking into small silver and pink sparkles. Frame 6: a few last tiny gems and glints and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, white, silver and pink, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Snow effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-snow.png`
*Looks:* Winter Coat (Solar), Harbour Night Coat (Solar)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small snowflake glows on in the centre. Frame 2: a few more snowflakes spin out around it, a soft icy glow gathering. Frame 3, the peak: a flurry of snowflakes of different sizes spinning outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the snowflakes spreading wider, tumbling and turning. Frame 5: the snowflakes breaking into small ice-blue sparkles. Frame 6: a few last tiny snowflakes and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, white and ice blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Thorns & bats effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-thorns.png`
*Looks:* Emo Night (Solar), Night Prowl (Solar), Bad Influence (Haechan), Unravelled (Haechan), Sheer Nerve (Jungwon), Emo Night (Jihoon)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small bat silhouette flits on in the centre, edged in red. Frame 2: a few more bats and the tips of thorny vines appear around it, a deep red glow gathering. Frame 3, the peak: bats and thorny vines whipping outward from a bright pink-white centre, a ring of tiny sparkles behind them. Frame 4: the bats and thorns spreading wider, tumbling and turning. Frame 5: the bats and thorns breaking into small red and pink sparkles. Frame 6: a few last tiny bats and thorns and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, deep red and pink edges around black shapes, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Calling cards effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-cards.png`
*Looks:* Phantom Thief (Solar), Black Suit (Haechan), Pinstripe Detective (Jungwon), Heir’s Suit (Jungwon)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one playing card flips over in the centre. Frame 2: a few more cards fan out around it, a soft red glow gathering. Frame 3, the peak: playing cards fanning out in a spiral from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the cards spreading wider, tumbling and turning. Frame 5: the cards breaking into small red and white sparkles. Frame 6: a few last tiny cards and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, red, black and white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Butterflies effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-butterflies.png`
*Looks:* Velvet Attendant (Solar)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one small glowing blue butterfly flutters on in the centre. Frame 2: a few more butterflies flutter out around it, a soft blue glow gathering. Frame 3, the peak: a swarm of glowing blue butterflies bursting outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the butterflies spreading wider, tumbling and turning. Frame 5: the butterflies breaking into small blue sparkles. Frame 6: a few last tiny butterflies and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, velvet blue and white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Foxfire effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-foxfire.png`
*Looks:* Kiriko Cosplay (retired for now, so skip this one until it is remade)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one blue-white flame wisp flickers on in the centre. Frame 2: a few more flame wisps and a paper charm appear around it, a pale blue glow gathering. Frame 3, the peak: fox-fire flames and paper charms swirling outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the flames and paper charms spreading wider, tumbling and turning. Frame 5: the flames and paper charms breaking into small pale blue sparkles. Frame 6: a few last tiny flames and paper charms and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pale blue, white and red, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

#### Confetti effect sheet

Attach: `Added to Game/heal.jpeg`  
Save as: `theme-confetti.png`
*Looks:* SU eSports Jersey (Solar), Morning Roadwork (Solar), Champion’s Robe (Akihiko), Little League Legend (Junpei)
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one curling streamer pops on in the centre. Frame 2: a few more streamers and confetti bits pop out around it, a soft gold glow gathering. Frame 3, the peak: a pop of confetti and streamers flying outward from a bright white-hot centre, a ring of tiny sparkles behind them. Frame 4: the confetti and streamers spreading wider, tumbling and turning. Frame 5: the confetti and streamers breaking into small gold and pink sparkles. Frame 6: a few last tiny confetti and streamers and sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, gold, pink and white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### HUD frames (transparent background)

One per theme, nothing to attach; Gemini or ChatGPT. If it comes back with a background anyway, that's fine.

#### Hearts frame

Attach: nothing  
Save as: `frame-hearts.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small hearts clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, hot pink, soft pink and white. No text, no characters, no shadows, no background colour.
```

#### Sun & moon frame

Attach: nothing  
Save as: `frame-sunmoon.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small little suns and crescent moons clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, warm gold, pink and silver-white. No text, no characters, no shadows, no background colour.
```

#### Petals frame

Attach: nothing  
Save as: `frame-petals.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small drifting petals clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, pink and cream. No text, no characters, no shadows, no background colour.
```

#### Stars frame

Attach: nothing  
Save as: `frame-stars.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small little five-pointed stars clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, gold, white and pale pink. No text, no characters, no shadows, no background colour.
```

#### Bubbles frame

Attach: nothing  
Save as: `frame-bubbles.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small round shiny bubbles clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, aqua, white and pale pink. No text, no characters, no shadows, no background colour.
```

#### Music notes frame

Attach: nothing  
Save as: `frame-notes.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small music notes and little sound waves clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, pink, white and neon lime. No text, no characters, no shadows, no background colour.
```

#### Glitter frame

Attach: nothing  
Save as: `frame-glitter.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small rhinestone glints and faceted gems clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, white, silver and pink. No text, no characters, no shadows, no background colour.
```

#### Snow frame

Attach: nothing  
Save as: `frame-snow.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small snowflakes clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, white and ice blue. No text, no characters, no shadows, no background colour.
```

#### Thorns & bats frame

Attach: nothing  
Save as: `frame-thorns.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small small bat silhouettes and thorny vines clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, deep red and pink edges around black. No text, no characters, no shadows, no background colour.
```

#### Calling cards frame

Attach: nothing  
Save as: `frame-cards.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small playing cards clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, red, black and white. No text, no characters, no shadows, no background colour.
```

#### Butterflies frame

Attach: nothing  
Save as: `frame-butterflies.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small glowing blue butterflies clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, velvet blue and white. No text, no characters, no shadows, no background colour.
```

#### Foxfire frame

Attach: nothing  
Save as: `frame-foxfire.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small fox-fire flames and paper charms clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, pale blue, white and red. No text, no characters, no shadows, no background colour.
```

#### Confetti frame

Attach: nothing  
Save as: `frame-confetti.png`
```
A decorative rectangular frame border for a game HUD card, landscape 5:2, on a transparent background (PNG with alpha). Only the border is drawn: a thin elegant outline with small confetti and streamers clustered in the four corners and a few tiny ones scattered along the edges; the whole middle is empty and transparent. Flat graphic style, crisp clean edges, gold, pink and white. No text, no characters, no shadows, no background colour.
```

---

## Cell-4 clean-up checklist

Nearly all done (thank you!). **Two left**, each already copied into **`Femc Mode Images/Skins Battle Design/<Fighter>/`**:

- **Yukari:** `Beach Volley [sk-yukari-swim] - pose sheet.png`
- **Minji:** `Minji - own look - pose sheet.png`

How: open the sheet from that folder, take the effect out of cell 4 only (leave the figure and the other five cells as they are; a transparent background is welcome), and save it into **`RECUTS - PHOTOSHOP EDITS`**. Any name that says pose sheet and the look is fine. If a cell 4 can't be cleaned (the effect covers the face or hand), skip it.

---

## Open questions for Kat

1. The themes: move, rename or add any? (Each look's theme is in its heading.)
2. Solar's outfit cut-ins: one picture with Haenim for every form (as written), or one per form for favourites?
3. Finish-card words: always the fighter's own line (as written), or a line per look?
4. Still waiting for your yes or no: the couple sets side by side on the win screen; a victory line per look (writing only); outfit chibis for the All-Out (lots of art for a tiny moment; parked unless you love it).
