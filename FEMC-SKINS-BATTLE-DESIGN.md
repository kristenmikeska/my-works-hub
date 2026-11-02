# Skins in battle: design sheet

*Persona 3: Solstice · Kat's decisions of Nov 1 2026 · reorganised Nov 1: every prompt written out, by fighter, then by look · refreshed Nov 1: only what's still to make · personalised Nov 1: every look has its own look bible*

**New direction (Kat, Nov 1):** each Wardrobe look now has its own **look bible** (palette, vibe, motifs, light, scene) at the top of its block, and every prompt's background, colours, light and effects follow it; only the fighters' own (base game) looks keep the pink-and-black Solstice palette.

When a fighter wears a Wardrobe look, the whole fight shows it: the figure, the faces, the win screen, the cut-ins, the effects and the finish card. Looks stay looks: **no stats, ever.** The technical side is in `FEMC-SKINS-BATTLE-TECH.md`, for Claude.

## How to use

1. Pick a fighter, then a look. Everything still to make for that look is in one block, in order: pose sheet, Theurgy cut-in, eye strip, entrance card, finish card, signature effect sheet (N). Pieces already in the game are gone from this sheet.
2. For each piece: open a new ChatGPT message, attach the files on its **Attach** line in that order (all inside `Femc Mode Images/`), paste the prompt, send.
3. Save the picture into **New Adds** under its **Save as** name, and tell Claude. One picture per message.
4. You don't have to make everything: a piece you skip just uses the fighter's usual version in the game.

**Made so far (Nov 2 2026):** 306 pieces in the game, so they're off this list: 49 second pose sheets, 49 "1 MORE!" strips, 49 entrance cards, 47 Theurgy cut-ins, 47 finish cards (Solar's own look and all 32 of her other looks; Haechan's own look and 15 of his), 41 signature effect sheets (all 32 of Solar's looks and 9 of Haechan's), 12 theme effect sheets and 12 HUD frames. **212 prompts left** below (178 + 34 signature effect sheets). (The 75 Evoker close-up prompts are parked in `FEMC-SKINS-EVOKER-PROMPTS.md`; optional remakes of the made pieces with the new look bibles, 180 prompts, are in `FEMC-SKINS-REMAKES.md`.)

> **Start here: the best next picks**
> 1. **The Sun & Moon couple Showtime** (Couple Showtimes → Sun & Moon): both halves already fight in their hoodies, and both now have every piece.
> 2. **Jungwon's own look** (Jungwon → own look): second pose sheet, "1 MORE!" strip and entrance card, seen in every fight he's in.
> 3. **Haechan's last look, Sigma Chi Runner** (Haechan → Sigma Chi Runner): all six pieces; then the six signature effect sheets left for his other looks.
> 4. **Signature effect sheets for the other fighters' looks** (piece N in each look's block): one picture each.
>
> Want the made pieces redone in their look's own colours? That's optional: `FEMC-SKINS-REMAKES.md`.
>
> The foxfire theme sheet and frame can wait: its only look (Kiriko Cosplay) is retired for now.
>
> **New (Nov 1):** the "1 MORE!" strip plays in two beats when a look has two pictures: v1 (the sideways glance) slides in, then a pink-white flash and a slash switch to v2 (looking front, the sun in her eyes) with a little glint on each eye (the game finds where her eyes are on each v2 picture, so the glints land on them). Alpha Phi Formal has two second pose sheets: V1 plays by default, V2 on about half the fights (a coin flip each fight). Tell Claude if you'd rather have only one.

### Piece M: the Evoker close-up
Its 75 prompts live in their own file, `FEMC-SKINS-EVOKER-PROMPTS.md`, to come back to later.

### The pieces

| Piece | What the player sees | Still to make |
|---|---|---|
| Second pose sheet | Six more poses: support cast, guard, dodge, knocked down, badly hurt, dash-in | 38 (10 own looks + 28 Wardrobe looks) |
| Theurgy cut-in | The Theurgy cut-in shows the fighter in the look | 28 (Wardrobe looks; own looks already have theirs) |
| "1 MORE!" eye strip | Hit a weakness: a thin strip of the fighter's eyes slams across the screen | 38 |
| Entrance card | As a fight opens, the leader's look flashes on in a slanted card | 38 |
| Finish card | The All-Out finish card shows the look | 28 (Wardrobe looks) |
| Signature effect sheet (N) | That look's own effect (calling cards, firework sparks, rain streaks…), drawn in its own colours on solid black. The game layers it on that look's skills, its All-Out burst and ▶ Try it on; until it's made, the look uses its shared theme sheet | 34 (Solar's 32 and 9 of Haechan's are in) |
| Evoker close-up (M) | The close-up of the fighter raising the Evoker to their temple when they summon shows the look | 75 (32 of Solar's looks + 43 Wardrobe looks) |
| Couple Showtime | Both halves of a couple set fighting together get a special Bond cut-in | 6 |
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

## Haechan

His own look and 15 of his looks are made (Nov 2: Black Suit, Boardwalk, Encore Stage, Fairground Lights, Limelight, Midnight Drive, Moon Hoodie, Sweet Tooth and Unravelled with their signature effect sheets, Garage Band without); left: Sigma Chi Runner (all six pieces) and the signature effect sheet for Garage Band, Sweater Date, Headphones On, Arrivals Gate, Window Seat and Bad Influence. Finish-card words: **TOO EASY**

### Garage Band · `sk-haechan-garage` · Music notes

> **Look bible.** Palette: leather black, plaid red, denim white and amp amber. Vibe: two chords and no regrets: punk in a garage.  
> Motifs: guitar picks, amp speaker grilles, music notes, coiled cables and sound waves. Light: one bare bulb and an amber amp glow. Scene: a cluttered garage rehearsal space, amps stacked.

*Every other piece is in the game. Only piece N is left (remakes are optional, in `FEMC-SKINS-REMAKES.md`).*

#### 1. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-garage-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one guitar pick flickers on in the centre. Frame 2: a few guitar picks and distortion waves appear around it, amp amber light gathering. Frame 3, the peak: a distortion blast of jagged sound waves and spinning guitar picks from a red-hot centre. Frame 4: the guitar picks and distortion waves spreading wider, tumbling and turning. Frame 5: the guitar picks and distortion waves breaking into small amber sparks. Frame 6: a few last tiny guitar picks and distortion waves and amber sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, leather black, plaid red, denim white and amp amber, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Sigma Chi Runner · `sk-haechan-runners` · Music notes

> **Look bible.** Palette: varsity navy, hoodie orange, white and autumn gold. Vibe: his Runners college look: Syracuse frat-house cool.  
> Motifs: music notes, headphone sound waves, autumn leaves and string lights. Light: warm frat-house string lights on a cool autumn night. Scene: a Syracuse campus street at night, string lights on the porches.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a Syracuse campus street at night, string lights on the porches in varsity navy, hoodie orange, white and autumn gold, the light is warm frat-house string lights on a cool autumn night, and music notes and headphone sound waves streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his messy black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in varsity navy, hoodie orange, white and autumn gold, lit by warm frat-house string lights on a cool autumn night, a few tiny music notes and headphone sound waves scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, a knife in each hand, one in a reverse grip, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a Syracuse campus street at night, string lights on the porches, broken into flat graphic shards of varsity navy, hoodie orange, white and autumn gold splitting apart diagonally, a few speed lines, a scatter of music notes, headphone sound waves and autumn leaves, lit by warm frat-house string lights on a cool autumn night. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Haechan/Haechan - finish card.png`, then `Current Skins/Haechan/Sigma Chi Runner [sk-haechan-runners] - pose sheet (recut).png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `skin-sk-haechan-runners-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: his college look from Runners: a navy-and-white varsity letterman jacket with the Greek letters ΣΧ on the chest, a bright orange hoodie underneath with the hood out over the collar, black jeans, white sneakers, black studio headphones round his neck. Same face as the THIRD attached image. Background: a Syracuse campus street at night, string lights on the porches, as flat graphic shapes in varsity navy, hoodie orange, white and autumn gold, music notes and headphone sound waves drifting across, lit by warm frat-house string lights on a cool autumn night. The words are hoodie orange with a varsity navy outline. The words read exactly: TOO EASY. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-runners-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one orange music note flickers on in the centre. Frame 2: a few music notes and orange sound waves appear around it, hoodie orange light gathering. Frame 3, the peak: orange sound waves and notes pulsing out from a white centre, autumn leaves spinning. Frame 4: the music notes and orange sound waves spreading wider, tumbling and turning. Frame 5: the music notes and orange sound waves breaking into small gold sparkles. Frame 6: a few last tiny music notes and orange sound waves and gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, varsity navy, hoodie orange, white and autumn gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Sweater Date · `sk-haechan-sweater` · Hearts

> **Look bible.** Palette: cream knit, check red, coffee brown and lamp gold. Vibe: a cosy autumn date.  
> Motifs: coffee steam curls, autumn leaves, plaid checks and little hearts. Light: warm café lamp light. Scene: an autumn café window, leaves falling outside.

*Every other piece is in the game. Only piece N is left (remakes are optional, in `FEMC-SKINS-REMAKES.md`).*

#### 1. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-sweater-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one curl of steam flickers on in the centre. Frame 2: a few autumn leaves and little hearts appear around it, lamp gold light gathering. Frame 3, the peak: a warm swirl of steam, autumn leaves and hearts from a golden centre. Frame 4: the autumn leaves and little hearts spreading wider, tumbling and turning. Frame 5: the autumn leaves and little hearts breaking into small gold sparkles. Frame 6: a few last tiny autumn leaves and little hearts and gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, cream knit, check red, coffee brown and lamp gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Headphones On · `sk-haechan-headphones` · Music notes

> **Look bible.** Palette: track white, royal blue, neon lime and screen black. Vibe: do not disturb (you can disturb), matching her Summer Session.  
> Motifs: sound waves, music notes, headphone rings and EQ bars. Light: a blue screen glow with neon lime edges. Scene: a dark bedroom studio lit by screens.

*Every other piece is in the game. Only piece N is left (remakes are optional, in `FEMC-SKINS-REMAKES.md`).*

#### 1. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-headphones-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one neon lime music note flickers on in the centre. Frame 2: a few EQ bars and sound-wave rings appear around it, neon lime light gathering. Frame 3, the peak: sound-wave rings pulsing out from a white centre, EQ bars and notes jumping. Frame 4: the EQ bars and sound-wave rings spreading wider, tumbling and turning. Frame 5: the EQ bars and sound-wave rings breaking into small blue sparks. Frame 6: a few last tiny EQ bars and sound-wave rings and blue sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, track white, royal blue, neon lime and screen black, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Arrivals Gate · `sk-haechan-arrivals` · plain (no theme)

> **Look bible.** Palette: navy black, tee white, leather tan and runway amber. Vibe: landed at six, camera-ready by five past.  
> Motifs: camera flashes, contrails, departure-board flaps (blank) and runway lights. Light: cool airport light through big windows, with camera flashes. Scene: an airport arrivals hall with tall windows and planes beyond.

*Every other piece is in the game. Only piece N is left (remakes are optional, in `FEMC-SKINS-REMAKES.md`).*

#### 1. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-arrivals-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one camera flash flickers on in the centre. Frame 2: a few camera flashes and contrail streaks appear around it, runway amber light gathering. Frame 3, the peak: a burst of camera flashes and white contrail streaks from a bright centre. Frame 4: the camera flashes and contrail streaks spreading wider, tumbling and turning. Frame 5: the camera flashes and contrail streaks breaking into small amber runway dots. Frame 6: a few last tiny camera flashes and contrail streaks and amber runway dots fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, navy black, tee white, leather tan and runway amber, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Window Seat · `sk-haechan-windowseat` · plain (no theme)

> **Look bible.** Palette: honey caramel, champagne, slate blue-grey and cloud white. Vibe: a dreamy, sleepy flight, rain on the window.  
> Motifs: rain streaks, plane-window shapes, clouds and a pale light flare. Light: pale soft light through a rainy window. Scene: clouds and rain seen through a plane window.

*Every other piece is in the game. Only piece N is left (remakes are optional, in `FEMC-SKINS-REMAKES.md`).*

#### 1. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-windowseat-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one raindrop flickers on in the centre. Frame 2: a few rain streaks and cloud wisps appear around it, champagne light gathering. Frame 3, the peak: a pale light flare breaking through rain streaks and cloud wisps from a soft white centre. Frame 4: the rain streaks and cloud wisps spreading wider, tumbling and turning. Frame 5: the rain streaks and cloud wisps breaking into small pale sparkles. Frame 6: a few last tiny rain streaks and cloud wisps and pale sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, honey caramel, champagne, slate blue-grey and cloud white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Bad Influence · `sk-haechan-bad` · Thorns & bats

> **Look bible.** Palette: faded black, red-orange, chain silver and smoke grey. Vibe: street-rebel trouble, matching her Night Prowl.  
> Motifs: Cuban-link chains, spray-paint drips, red-orange sparks and smoke. Light: harsh sodium streetlight with a red-orange glare. Scene: a graffiti alley at night.

*Every other piece is in the game. Only piece N is left (remakes are optional, in `FEMC-SKINS-REMAKES.md`).*

#### 1. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-haechan-bad-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one silver chain link flickers on in the centre. Frame 2: a few chain links and spray sparks appear around it, red-orange light gathering. Frame 3, the peak: chain links snapping outward from a red-orange flash, spray-paint drips flying. Frame 4: the chain links and spray sparks spreading wider, tumbling and turning. Frame 5: the chain links and spray sparks breaking into small grey smoke puffs. Frame 6: a few last tiny chain links and spray sparks and grey smoke puffs fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, faded black, red-orange, chain silver and smoke grey, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: sheer black, silver, rose flush and smoke grey. Vibe: dark elegance and nerve, matching her Emo Night.  
> Motifs: thorny vines, black rose petals, mesh lace patterns and silver chains. Light: a cold silver-white spotlight. Scene: a dark, empty stage with smoke drifting.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a dark, empty stage with smoke drifting in sheer black, silver, rose flush and smoke grey, the light is a cold silver-white spotlight, and thorny vines and black rose petals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - portraits (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: silver drop earrings and silver rings. Behind the face: bold flat diagonal stripes and speed lines in sheer black, silver, rose flush and smoke grey, lit by a cold silver-white spotlight, a few tiny thorny vines and black rose petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a dark, empty stage with smoke drifting, broken into flat graphic shards of sheer black, silver, rose flush and smoke grey splitting apart diagonally, a few speed lines, a scatter of thorny vines, black rose petals and mesh lace patterns, lit by a cold silver-white spotlight. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Sheer Nerve [sk-jungwon-sheer] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sheer-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a sheer black long-sleeved mesh top with one shoulder cut out and long flared cuffs past his wrists; a cropped black single-breasted waistcoat buttoned low over a black button-up shirt; a silver chain choker and a fine silver chain with a small squiggly silver pendant; silver drop earrings and silver rings; a black leather belt with a big chunky silver buckle; faded black acid-wash wide-leg jeans; black boots; a pink-red flush around his eyes and a little gloss on his lips. Hair: his own jet-black hair, sleek and rounded, a centre-parted curtain fringe falling to his lashes, tapered at the nape (a look he has really worn). Same face as the THIRD attached image. Background: a dark, empty stage with smoke drifting, as flat graphic shapes in sheer black, silver, rose flush and smoke grey, thorny vines and black rose petals drifting across, lit by a cold silver-white spotlight. The words are silver with a sheer black outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-sheer-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one black rose petal flickers on in the centre. Frame 2: a few black rose petals and thorns appear around it, rose flush light gathering. Frame 3, the peak: black rose petals and thorny vines whipping out from a silver flash. Frame 4: the black rose petals and thorns spreading wider, tumbling and turning. Frame 5: the black rose petals and thorns breaking into small silver dust. Frame 6: a few last tiny black rose petals and thorns and silver dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, sheer black, silver, rose flush and smoke grey, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Pinstripe Detective · `sk-jungwon-pinstripe` · Calling cards

> **Look bible.** Palette: chalk-stripe grey, shirt pale blue, brass gold and sepia. Vibe: a 1920s whodunit: he already knows who did it.  
> Motifs: magnifying-glass lenses, footprints, clue cards, pocket-watch chains and fog. Light: sepia gas-lamp light through fog. Scene: a foggy 1920s street with gas lamps.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a foggy 1920s street with gas lamps in chalk-stripe grey, shirt pale blue, brass gold and sepia, the light is sepia gas-lamp light through fog, and magnifying-glass lenses and footprints streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: small silver hoop earrings. Behind the face: bold flat diagonal stripes and speed lines in chalk-stripe grey, shirt pale blue, brass gold and sepia, lit by sepia gas-lamp light through fog, a few tiny magnifying-glass lenses and footprints scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a foggy 1920s street with gas lamps, broken into flat graphic shards of chalk-stripe grey, shirt pale blue, brass gold and sepia splitting apart diagonally, a few speed lines, a scatter of magnifying-glass lenses, footprints and clue cards, lit by sepia gas-lamp light through fog. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Pinstripe Detective [sk-jungwon-pinstripe] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-pinstripe-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a 1920s-style grey chalk-stripe three-piece suit (a single-breasted jacket with wide notched lapels, a matching waistcoat and trousers), a pale blue-and-white striped shirt with a white collar, a silver-grey satin tie, silver watch chains looped across the waistcoat and a silver chain brooch on the lapel, small silver hoop earrings, black oxford shoes, a brass magnifying glass hanging at his belt. Hair: his own dark brown hair, a soft wavy fringe parted off-centre and swept to the sides, ear-length (a look he has really worn). Same face as the THIRD attached image. Background: a foggy 1920s street with gas lamps, as flat graphic shapes in chalk-stripe grey, shirt pale blue, brass gold and sepia, magnifying-glass lenses and footprints drifting across, lit by sepia gas-lamp light through fog. The words are brass gold with a sepia outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-pinstripe-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one glinting lens flickers on in the centre. Frame 2: a few clue cards and footprints appear around it, brass gold light gathering. Frame 3, the peak: a magnifying-glass lens flare bursting out with clue cards scattering. Frame 4: the clue cards and footprints spreading wider, tumbling and turning. Frame 5: the clue cards and footprints breaking into small sepia dust. Frame 6: a few last tiny clue cards and footprints and sepia dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, chalk-stripe grey, shirt pale blue, brass gold and sepia, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Soundcheck · `sk-jungwon-soundcheck` · Music notes

> **Look bible.** Palette: heather grey, college navy, white and studio blue. Vibe: not showtime yet: relaxed rehearsal.  
> Motifs: waveform lines, music notes, mixer faders and in-ear cables. Light: soft studio work lights. Scene: an empty concert stage during soundcheck, work lights on.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes an empty concert stage during soundcheck, work lights on in heather grey, college navy, white and studio blue, the light is soft studio work lights, and waveform lines and music notes streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: thick black square-framed glasses; a small silver stud earring. Behind the face: bold flat diagonal stripes and speed lines in heather grey, college navy, white and studio blue, lit by soft studio work lights, a few tiny waveform lines and music notes scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: an empty concert stage during soundcheck, work lights on, broken into flat graphic shards of heather grey, college navy, white and studio blue splitting apart diagonally, a few speed lines, a scatter of waveform lines, music notes and mixer faders, lit by soft studio work lights. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Soundcheck [sk-jungwon-soundcheck] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-soundcheck-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a roomy heather-grey pullover hoodie with a navy arched college-letter print across the chest (no readable lettering), the sleeves pushed up and the drawstrings hanging; black slim jeans; white sneakers; thick black square-framed glasses; a white in-ear monitor in one ear; a small silver stud earring; one cheek puffed out. Hair: his own dark brown hair, fluffy, wavy and tousled, the messy fringe falling over the glasses (a look he has really worn). Same face as the THIRD attached image. Background: an empty concert stage during soundcheck, work lights on, as flat graphic shapes in heather grey, college navy, white and studio blue, waveform lines and music notes drifting across, lit by soft studio work lights. The words are white with a college navy outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-soundcheck-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one soft music note flickers on in the centre. Frame 2: a few waveform lines and notes appear around it, studio blue light gathering. Frame 3, the peak: waveform lines rippling out from a soft white centre, notes bobbing. Frame 4: the waveform lines and notes spreading wider, tumbling and turning. Frame 5: the waveform lines and notes breaking into small grey sparkles. Frame 6: a few last tiny waveform lines and notes and grey sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, heather grey, college navy, white and studio blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Cell Block Angel · `sk-jungwon-angel` · Hearts

> **Look bible.** Palette: brick red, white, lollipop pink and steel grey. Vibe: prison-concept K-pop: Inmate 1004, an angel.  
> Motifs: white feathers, halos, broken handcuff links, lollipop hearts and cell bars. Light: harsh cell-block light falling through bars. Scene: a cell block with long shadows of bars.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a cell block with long shadows of bars in brick red, white, lollipop pink and steel grey, the light is harsh cell-block light falling through bars, and white feathers and halos streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in brick red, white, lollipop pink and steel grey, lit by harsh cell-block light falling through bars, a few tiny white feathers and halos scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a cell block with long shadows of bars, broken into flat graphic shards of brick red, white, lollipop pink and steel grey splitting apart diagonally, a few speed lines, a scatter of white feathers, halos and broken handcuff links, lit by harsh cell-block light falling through bars. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Cell Block Angel [sk-jungwon-angel] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-angel-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a faded, sun-washed brick-red hoodie with one arm through its sleeve and the rest slung across his chest and over one shoulder like a cape, a white cloth patch stitched on it like an inmate tag (no readable numbers); a plain white tee under it; matching faded red track pants with white drawstrings; black-and-white sneakers with white toe caps; chunky silver band rings and white tape wrapped around a few fingers; an open silver handcuff locked on one wrist, its short chain dangling; a pink lollipop. Hair: his own black hair, a choppy layered curtain fringe falling into his eyes, longer at the front, ear-length (a look he has really worn). Same face as the THIRD attached image. Background: a cell block with long shadows of bars, as flat graphic shapes in brick red, white, lollipop pink and steel grey, white feathers and halos drifting across, lit by harsh cell-block light falling through bars. The words are white with a brick red outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-angel-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one white feather flickers on in the centre. Frame 2: a few white feathers and broken cuff links appear around it, white light gathering. Frame 3, the peak: a halo flashing open with white feathers and broken handcuff links bursting outward. Frame 4: the white feathers and broken cuff links spreading wider, tumbling and turning. Frame 5: the white feathers and broken cuff links breaking into small pink hearts. Frame 6: a few last tiny white feathers and broken cuff links and pink hearts fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, brick red, white, lollipop pink and steel grey, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Sweater Weather · `sk-jungwon-sweater` · Hearts

> **Look bible.** Palette: navy, camel, white and ginkgo gold. Vibe: a planned autumn date.  
> Motifs: ginkgo leaves, little hearts, steam curls and watch glints. Light: crisp autumn sun. Scene: an autumn street lined with gold ginkgo trees.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes an autumn street lined with gold ginkgo trees in navy, camel, white and ginkgo gold, the light is crisp autumn sun, and ginkgo leaves and little hearts streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in navy, camel, white and ginkgo gold, lit by crisp autumn sun, a few tiny ginkgo leaves and little hearts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: an autumn street lined with gold ginkgo trees, broken into flat graphic shards of navy, camel, white and ginkgo gold splitting apart diagonally, a few speed lines, a scatter of ginkgo leaves, little hearts and steam curls, lit by crisp autumn sun. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Sweater Weather [sk-jungwon-sweater] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-sweater-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a casual date look: a soft navy crew-neck sweater over a white shirt collar, a long camel coat open over it, light grey trousers, white sneakers, a slim black watch. Same face as the THIRD attached image. Background: an autumn street lined with gold ginkgo trees, as flat graphic shapes in navy, camel, white and ginkgo gold, ginkgo leaves and little hearts drifting across, lit by crisp autumn sun. The words are ginkgo gold with a navy outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-sweater-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one ginkgo leaf flickers on in the centre. Frame 2: a few ginkgo leaves and little hearts appear around it, ginkgo gold light gathering. Frame 3, the peak: ginkgo leaves and hearts swirling out from a warm white centre. Frame 4: the ginkgo leaves and little hearts spreading wider, tumbling and turning. Frame 5: the ginkgo leaves and little hearts breaking into small gold sparkles. Frame 6: a few last tiny ginkgo leaves and little hearts and gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, navy, camel, white and ginkgo gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Heir’s Suit · `sk-jungwon-heir` · Calling cards

> **Look bible.** Palette: charcoal, tie dark green, signet gold and black. Vibe: old money: the family name walks in first.  
> Motifs: gold-edged cards, wax seals, signet glints and chess pieces. Light: chandelier gold in a dim hall. Scene: a dark marble-and-wood family hall.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a dark marble-and-wood family hall in charcoal, tie dark green, signet gold and black, the light is chandelier gold in a dim hall, and gold-edged cards and wax seals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in charcoal, tie dark green, signet gold and black, lit by chandelier gold in a dim hall, a few tiny gold-edged cards and wax seals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a dark marble-and-wood family hall, broken into flat graphic shards of charcoal, tie dark green, signet gold and black splitting apart diagonally, a few speed lines, a scatter of gold-edged cards, wax seals and signet glints, lit by chandelier gold in a dim hall. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Heir’s Suit [sk-jungwon-heir] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-heir-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a tailored charcoal three-piece suit with a waistcoat, a white shirt and a dark green silk tie, a gold signet ring, a long dark overcoat worn over his shoulders like a cape, polished black oxford shoes. Same face as the THIRD attached image. Background: a dark marble-and-wood family hall, as flat graphic shapes in charcoal, tie dark green, signet gold and black, gold-edged cards and wax seals drifting across, lit by chandelier gold in a dim hall. The words are signet gold with a dark green outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-heir-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one gold-edged card flickers on in the centre. Frame 2: a few gold-edged cards and wax seals appear around it, dark green light gathering. Frame 3, the peak: gold-edged cards fanning out from a gold flash, wax seals tumbling. Frame 4: the gold-edged cards and wax seals spreading wider, tumbling and turning. Frame 5: the gold-edged cards and wax seals breaking into small gold dust. Frame 6: a few last tiny gold-edged cards and wax seals and gold dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, charcoal, tie dark green, signet gold and black, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Center Stage · `sk-jungwon-stage` · Music notes

> **Look bible.** Palette: pearl white, silver, black and ice blue. Vibe: centre position, cool precision.  
> Motifs: spotlight beams, silver chains, music notes and mirror shards. Light: ice blue spotlight on white. Scene: a white stage with crossing ice blue spotlights.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a white stage with crossing ice blue spotlights in pearl white, silver, black and ice blue, the light is ice blue spotlight on white, and spotlight beams and silver chains streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a slim headset microphone at his cheek. Behind the face: bold flat diagonal stripes and speed lines in pearl white, silver, black and ice blue, lit by ice blue spotlight on white, a few tiny spotlight beams and silver chains scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a white stage with crossing ice blue spotlights, broken into flat graphic shards of pearl white, silver, black and ice blue splitting apart diagonally, a few speed lines, a scatter of spotlight beams, silver chains and music notes, lit by ice blue spotlight on white. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Center Stage [sk-jungwon-stage] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-stage-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a K-pop stage outfit: a white cropped stage jacket with silver chain details and sharp shoulders, a black shirt, white slim trousers, white boots, a slim headset microphone at his cheek, a silver ear cuff. Same face as the THIRD attached image. Background: a white stage with crossing ice blue spotlights, as flat graphic shapes in pearl white, silver, black and ice blue, spotlight beams and silver chains drifting across, lit by ice blue spotlight on white. The words are pearl white with an ice blue outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-stage-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one silver mirror shard flickers on in the centre. Frame 2: a few mirror shards and music notes appear around it, ice blue light gathering. Frame 3, the peak: mirror shards bursting out from an ice blue flash, notes spinning. Frame 4: the mirror shards and music notes spreading wider, tumbling and turning. Frame 5: the mirror shards and music notes breaking into small silver glitter. Frame 6: a few last tiny mirror shards and music notes and silver glitter fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pearl white, silver, black and ice blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Pool Day · `sk-jungwon-swim` · Bubbles

> **Look bible.** Palette: lane blue, black, white and chlorine aqua. Vibe: neat, disciplined swim practice.  
> Motifs: lane lines, bubbles, goggle glints and ripples. Light: bright indoor pool light. Scene: an indoor pool with lane ropes.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes an indoor pool with lane ropes in lane blue, black, white and chlorine aqua, the light is bright indoor pool light, and lane lines and bubbles streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: clear swim goggles pushed up on his forehead. Behind the face: bold flat diagonal stripes and speed lines in lane blue, black, white and chlorine aqua, lit by bright indoor pool light, a few tiny lane lines and bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: an indoor pool with lane ropes, broken into flat graphic shards of lane blue, black, white and chlorine aqua splitting apart diagonally, a few speed lines, a scatter of lane lines, bubbles and goggle glints, lit by bright indoor pool light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Pool Day [sk-jungwon-swim] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a fitted black short-sleeved zip-up rash guard with white side panels, black swim trunks with a white stripe, a white towel around his neck, clear swim goggles pushed up on his forehead, black slides, a black sports watch. Hair: his own black hair, wet and pushed back off his forehead by the goggles, a few strands falling forward (a look he has really worn). Same face as the THIRD attached image. Background: an indoor pool with lane ropes, as flat graphic shapes in lane blue, black, white and chlorine aqua, lane lines and bubbles drifting across, lit by bright indoor pool light. The words are white with a lane blue outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-swim-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one bubble flickers on in the centre. Frame 2: a few bubbles and ripple rings appear around it, chlorine aqua light gathering. Frame 3, the peak: ripple rings spreading out with bubbles from a white splash. Frame 4: the bubbles and ripple rings spreading wider, tumbling and turning. Frame 5: the bubbles and ripple rings breaking into small white sparkles. Frame 6: a few last tiny bubbles and ripple rings and white sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, lane blue, black, white and chlorine aqua, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### After Hours · `sk-jungwon-cp-afterhours` · Hearts

> **Look bible.** Palette: blazer black, tie hot pink, cardigan pale pink and sunset amber. Vibe: he locks up last: the council room after hours.  
> Motifs: folded notes, council papers, pens, little hearts and a ring of keys. Light: late amber sunset slanting through classroom windows. Scene: the Hanlim student council room at sunset, long window shadows.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes the Hanlim student council room at sunset, long window shadows in blazer black, tie hot pink, cardigan pale pink and sunset amber, the light is late amber sunset slanting through classroom windows, and folded notes and council papers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own black hair, a neat comma fringe (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in blazer black, tie hot pink, cardigan pale pink and sunset amber, lit by late amber sunset slanting through classroom windows, a few tiny folded notes and council papers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: the Hanlim student council room at sunset, long window shadows, broken into flat graphic shards of blazer black, tie hot pink, cardigan pale pink and sunset amber splitting apart diagonally, a few speed lines, a scatter of folded notes, council papers and pens, lit by late amber sunset slanting through classroom windows. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-afterhours-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn). Same face as the THIRD attached image. Background: the Hanlim student council room at sunset, long window shadows, as flat graphic shapes in blazer black, tie hot pink, cardigan pale pink and sunset amber, folded notes and council papers drifting across, lit by late amber sunset slanting through classroom windows. The words are tie hot pink with a blazer black outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-cp-afterhours-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one folded paper note flickers on in the centre. Frame 2: a few council papers and little pink hearts appear around it, sunset amber light gathering. Frame 3, the peak: a flutter of papers and hearts bursting from a warm amber flash. Frame 4: the council papers and little pink hearts spreading wider, tumbling and turning. Frame 5: the council papers and little pink hearts breaking into small pink and amber sparkles. Frame 6: a few last tiny council papers and little pink hearts and pink and amber sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, blazer black, tie hot pink, cardigan pale pink and sunset amber, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Movie Date · `sk-jungwon-cp-moviedate` · Hearts

> **Look bible.** Palette: cream, coat black, scarf pink and projector silver-blue. Vibe: both tickets in his pocket: a winter movie date.  
> Motifs: ticket stubs, film strips, snowflakes and little hearts. Light: a flickering silver projector beam in the dark. Scene: a dark cinema, the projector beam cutting overhead.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn). Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a dark cinema, the projector beam cutting overhead in cream, coat black, scarf pink and projector silver-blue, the light is a flickering silver projector beam in the dark, and ticket stubs and film strips streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - portraits.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn), exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in cream, coat black, scarf pink and projector silver-blue, lit by a flickering silver projector beam in the dark, a few tiny ticket stubs and film strips scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn)), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a dark cinema, the projector beam cutting overhead, broken into flat graphic shards of cream, coat black, scarf pink and projector silver-blue splitting apart diagonally, a few speed lines, a scatter of ticket stubs, film strips and snowflakes, lit by a flickering silver projector beam in the dark. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-cp-moviedate-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn). Same face as the THIRD attached image. Background: a dark cinema, the projector beam cutting overhead, as flat graphic shapes in cream, coat black, scarf pink and projector silver-blue, ticket stubs and film strips drifting across, lit by a flickering silver projector beam in the dark. The words are cream with a scarf pink outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-cp-moviedate-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one ticket stub flickers on in the centre. Frame 2: a few film strips and little hearts appear around it, silver-blue light gathering. Frame 3, the peak: a projector-beam flash with film strips unspooling outward. Frame 4: the film strips and little hearts spreading wider, tumbling and turning. Frame 5: the film strips and little hearts breaking into small silver dust. Frame 6: a few last tiny film strips and little hearts and silver dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, cream, coat black, scarf pink and projector silver-blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### HOAX Council Uniform · `sk-jungwon-council` · plain (no theme)

> **Look bible.** Palette: Hanlim navy, crest gold, shirt white and tie maroon. Vibe: by the book: he takes the clipboard very seriously.  
> Motifs: clipboard sheets, approval stamp marks (blank), gold crests and checkmarks. Light: clean morning classroom light. Scene: a Hanlim High corridor in the morning.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a Hanlim High corridor in the morning in Hanlim navy, crest gold, shirt white and tie maroon, the light is clean morning classroom light, and clipboard sheets and approval stamp marks (blank) streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short black hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in Hanlim navy, crest gold, shirt white and tie maroon, lit by clean morning classroom light, a few tiny clipboard sheets and approval stamp marks (blank) scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier held out low at his side, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a Hanlim High corridor in the morning, broken into flat graphic shards of Hanlim navy, crest gold, shirt white and tie maroon splitting apart diagonally, a few speed lines, a scatter of clipboard sheets, approval stamp marks (blank) and gold crests, lit by clean morning classroom light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jungwon/Jungwon - finish card.png`, then `Current Skins/Jungwon/HOAX Council Uniform [sk-jungwon-council] - pose sheet (recut).png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `skin-sk-jungwon-council-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: his Hanlim High uniform from HOAX: a navy school blazer with a gold crest, a white shirt and a neat striped tie, grey trousers, a white STUDENT COUNCIL armband on his upper right sleeve, a clipboard tucked under his free arm. Same face as the THIRD attached image. Background: a Hanlim High corridor in the morning, as flat graphic shapes in Hanlim navy, crest gold, shirt white and tie maroon, clipboard sheets and approval stamp marks (blank) drifting across, lit by clean morning classroom light. The words are crest gold with a Hanlim navy outline. The words read exactly: MEETING ADJOURNED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jungwon-council-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one checkmark flickers on in the centre. Frame 2: a few clipboard sheets and stamp marks appear around it, crest gold light gathering. Frame 3, the peak: clipboard sheets fanning out from a gold flash, stamp marks thudding down. Frame 4: the clipboard sheets and stamp marks spreading wider, tumbling and turning. Frame 5: the clipboard sheets and stamp marks breaking into small gold glints. Frame 6: a few last tiny clipboard sheets and stamp marks and gold glints fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, Hanlim navy, crest gold, shirt white and tie maroon, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: trunk red, white, ocean blue and sand gold. Vibe: beach captain: he blows the whistle on Junpei.  
> Motifs: surf spray, lifebuoys, whistle-blast rings and little suns. Light: bright beach sun. Scene: a beach with rolling surf and a lifeguard tower.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a beach with rolling surf and a lifeguard tower in trunk red, white, ocean blue and sand gold, the light is bright beach sun, and surf spray and lifebuoys streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Lifeguard Captain [sk-akihiko-swim] - portraits.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in trunk red, white, ocean blue and sand gold, lit by bright beach sun, a few tiny surf spray and lifebuoys scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/sk-akihiko-swim - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a beach with rolling surf and a lifeguard tower, broken into flat graphic shards of trunk red, white, ocean blue and sand gold splitting apart diagonally, a few speed lines, a scatter of surf spray, lifebuoys and whistle-blast rings, lit by bright beach sun. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/sk-akihiko-swim - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: red swim trunks with a white stripe, an open sleeveless white hoodie, a black whistle on a red cord, white hand wraps under his red boxing gloves, red slides. Hair: his own short silver hair. Same face as the THIRD attached image. Background: a beach with rolling surf and a lifeguard tower, as flat graphic shapes in trunk red, white, ocean blue and sand gold, surf spray and lifebuoys drifting across, lit by bright beach sun. The words are white with a trunk red outline. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-akihiko-swim-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one whistle-blast ring flickers on in the centre. Frame 2: a few surf spray and lifebuoys appear around it, ocean blue light gathering. Frame 3, the peak: a surf wave crashing out from a white flash, a red lifebuoy spinning. Frame 4: the surf spray and lifebuoys spreading wider, tumbling and turning. Frame 5: the surf spray and lifebuoys breaking into small sand-gold sparkles. Frame 6: a few last tiny surf spray and lifebuoys and sand-gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, trunk red, white, ocean blue and sand gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Ringside · `sk-akihiko-cp-ringside` · Hearts

> **Look bible.** Palette: boxing red, gym black, tape white and ring-light gold. Vibe: sweat and grit, sparring with her.  
> Motifs: ring ropes, impact stars, tape ribbons, sweat droplets and little hearts. Light: hard overhead ring lights. Scene: a boxing ring in a gym under overhead lights.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a boxing ring in a gym under overhead lights in boxing red, gym black, tape white and ring-light gold, the light is hard overhead ring lights, and ring ropes and impact stars streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Ringside [sk-akihiko-cp-ringside] - portraits.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in boxing red, gym black, tape white and ring-light gold, lit by hard overhead ring lights, a few tiny ring ropes and impact stars scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a boxing ring in a gym under overhead lights, broken into flat graphic shards of boxing red, gym black, tape white and ring-light gold splitting apart diagonally, a few speed lines, a scatter of ring ropes, impact stars and tape ribbons, lit by hard overhead ring lights. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-ringside-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair. Same face as the THIRD attached image. Background: a boxing ring in a gym under overhead lights, as flat graphic shapes in boxing red, gym black, tape white and ring-light gold, ring ropes and impact stars drifting across, lit by hard overhead ring lights. The words are tape white with a boxing red outline. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-akihiko-cp-ringside-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one red impact star flickers on in the centre. Frame 2: a few impact stars and tape ribbons appear around it, boxing red light gathering. Frame 3, the peak: a red impact flash with a white shockwave ring, tape ribbons flung out. Frame 4: the impact stars and tape ribbons spreading wider, tumbling and turning. Frame 5: the impact stars and tape ribbons breaking into small white sparks. Frame 6: a few last tiny impact stars and tape ribbons and white sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, boxing red, gym black, tape white and ring-light gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Summer Festival · `sk-akihiko-cp-festival` · Sun & moon

> **Look bible.** Palette: dove grey, festival red, moon silver and lantern gold. Vibe: easygoing and protective, a festival night with her.  
> Motifs: red paper lanterns, firework bursts, silver crescent moons and paper fans. Light: warm lantern glow with silver moonlight. Scene: a shrine path at night strung with red paper lanterns, fireworks overhead.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a shrine path at night strung with red paper lanterns, fireworks overhead in dove grey, festival red, moon silver and lantern gold, the light is warm lantern glow with silver moonlight, and red paper lanterns and firework bursts streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Summer Festival [sk-akihiko-cp-festival] - portraits.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in dove grey, festival red, moon silver and lantern gold, lit by warm lantern glow with silver moonlight, a few tiny red paper lanterns and firework bursts scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a shrine path at night strung with red paper lanterns, fireworks overhead, broken into flat graphic shards of dove grey, festival red, moon silver and lantern gold splitting apart diagonally, a few speed lines, a scatter of red paper lanterns, firework bursts and silver crescent moons, lit by warm lantern glow with silver moonlight. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-cp-festival-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair. Same face as the THIRD attached image. Background: a shrine path at night strung with red paper lanterns, fireworks overhead, as flat graphic shapes in dove grey, festival red, moon silver and lantern gold, red paper lanterns and firework bursts drifting across, lit by warm lantern glow with silver moonlight. The words are festival red with a moon silver outline. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-akihiko-cp-festival-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one firework spark flickers on in the centre. Frame 2: a few firework sparks and swinging lanterns appear around it, lantern gold light gathering. Frame 3, the peak: a red-and-gold firework burst with lanterns swinging outward. Frame 4: the firework sparks and swinging lanterns spreading wider, tumbling and turning. Frame 5: the firework sparks and swinging lanterns breaking into small silver sparks. Frame 6: a few last tiny firework sparks and swinging lanterns and silver sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, dove grey, festival red, moon silver and lantern gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Champion’s Robe · `sk-akihiko-champ` · Confetti

> **Look bible.** Palette: satin red, title gold, black and spotlight white. Vibe: championship night: the title is his.  
> Motifs: gold confetti, title-belt glints, spotlight beams and flashbulbs. Light: a white championship spotlight with gold flare. Scene: a championship arena, a spotlight on the ring.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a championship arena, a spotlight on the ring in satin red, title gold, black and spotlight white, the light is a white championship spotlight with gold flare, and gold confetti and title-belt glints streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in satin red, title gold, black and spotlight white, lit by a white championship spotlight with gold flare, a few tiny gold confetti and title-belt glints scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a championship arena, a spotlight on the ring, broken into flat graphic shards of satin red, title gold, black and spotlight white splitting apart diagonally, a few speed lines, a scatter of gold confetti, title-belt glints and spotlight beams, lit by a white championship spotlight with gold flare. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/Champion’s Robe [sk-akihiko-champ] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-champ-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a long red satin boxing robe worn open over his usual fighting clothes, wide gold trim on the lapels and cuffs, SANADA stitched in gold across the back, a gold-and-black championship belt slung over his right shoulder, white hand wraps under his gloves. Same face as the THIRD attached image. Background: a championship arena, a spotlight on the ring, as flat graphic shapes in satin red, title gold, black and spotlight white, gold confetti and title-belt glints drifting across, lit by a white championship spotlight with gold flare. The words are title gold with a satin red outline. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-akihiko-champ-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one gold glint flickers on in the centre. Frame 2: a few gold confetti and flashbulbs appear around it, title gold light gathering. Frame 3, the peak: a gold confetti blast with a spotlight flare from a white-hot centre. Frame 4: the gold confetti and flashbulbs spreading wider, tumbling and turning. Frame 5: the gold confetti and flashbulbs breaking into small red sparks. Frame 6: a few last tiny gold confetti and flashbulbs and red sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, satin red, title gold, black and spotlight white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Off-Day Hoodie · `sk-akihiko-hoodie` · plain (no theme)

> **Look bible.** Palette: heather grey, black, white and dawn blue. Vibe: a day off that still has roadwork in it.  
> Motifs: speed streaks, breath puffs, kicked-up dust and dawn light. Light: pale dawn blue light. Scene: a riverside path at dawn.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a riverside path at dawn in heather grey, black, white and dawn blue, the light is pale dawn blue light, and speed streaks and breath puffs streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his short silver hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in heather grey, black, white and dawn blue, lit by pale dawn blue light, a few tiny speed streaks and breath puffs scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose boxer's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a riverside path at dawn, broken into flat graphic shards of heather grey, black, white and dawn blue splitting apart diagonally, a few speed lines, a scatter of speed streaks, breath puffs and kicked-up dust, lit by pale dawn blue light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Akihiko/Akihiko - finish card.png`, then `Current Skins/Akihiko/Off-Day Hoodie [sk-akihiko-hoodie] - pose sheet (recut).png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `skin-sk-akihiko-hoodie-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a heather-grey zip hoodie half zipped over a plain black T-shirt, the hood down, black track pants with a white side stripe, white running shoes, his gloves still on. Same face as the THIRD attached image. Background: a riverside path at dawn, as flat graphic shapes in heather grey, black, white and dawn blue, speed streaks and breath puffs drifting across, lit by pale dawn blue light. The words are white with a heather grey outline. The words read exactly: ON TO THE NEXT BOUT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-akihiko-hoodie-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one puff of breath flickers on in the centre. Frame 2: a few speed streaks and dust appear around it, dawn blue light gathering. Frame 3, the peak: a dash burst of white speed streaks and dust from a pale blue centre. Frame 4: the speed streaks and dust spreading wider, tumbling and turning. Frame 5: the speed streaks and dust breaking into small grey dust. Frame 6: a few last tiny speed streaks and dust and grey dust fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, heather grey, black, white and dawn blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: volley pink, white, sky blue and sand beige. Vibe: a sunny beach match she's going to win.  
> Motifs: sand spray, bubbles, little suns and net lines. Light: bright beach sun. Scene: a beach volleyball court by the sea.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a beach volleyball court by the sea in volley pink, white, sky blue and sand beige, the light is bright beach sun, and sand spray and bubbles streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - portraits.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-onemore.png`
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her own short brown bob, a pink hair clip on one side, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a pink sun visor. Behind the face: bold flat diagonal stripes and speed lines in volley pink, white, sky blue and sand beige, lit by bright beach sun, a few tiny sand spray and bubbles scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a beach volleyball court by the sea, broken into flat graphic shards of volley pink, white, sky blue and sand beige splitting apart diagonally, a few speed lines, a scatter of sand spray, bubbles and little suns, lit by bright beach sun. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Yukari/Yukari - finish card.png`, then `Current Skins/Yukari/Beach Volley [sk-yukari-swim] - pose sheet.png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-swim-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a pink sporty bikini with white trim, a cropped white mesh tee over it, a pink sun visor, white sneakers with pink laces, a pink sweatband on one wrist. Hair: her own short brown bob, a pink hair clip on one side. Her bow's grip wrapped in pink tape. Same face as the THIRD attached image. Background: a beach volleyball court by the sea, as flat graphic shapes in volley pink, white, sky blue and sand beige, sand spray and bubbles drifting across, lit by bright beach sun. The words are volley pink with a sky blue outline. The words read exactly: THERE YOU HAVE IT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-yukari-swim-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one bubble flickers on in the centre. Frame 2: a few sand spray and bubbles appear around it, sky blue light gathering. Frame 3, the peak: a sand-spray burst with bubbles and a white sun flare. Frame 4: the sand spray and bubbles spreading wider, tumbling and turning. Frame 5: the sand spray and bubbles breaking into small pink sparkles. Frame 6: a few last tiny sand spray and bubbles and pink sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, volley pink, white, sky blue and sand beige, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Archery Club · `sk-yukari-kyudo` · Petals

> **Look bible.** Palette: keikogi white, hakama navy, black and cherry pink. Vibe: stillness before the arrow.  
> Motifs: arrows, target rings, cherry petals and dojo beams. Light: still morning light in a kyudo dojo. Scene: a kyudo dojo opening onto the target range.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a kyudo dojo opening onto the target range in keikogi white, hakama navy, black and cherry pink, the light is still morning light in a kyudo dojo, and arrows and target rings streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short brown bob, her pink hair clip kept, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in keikogi white, hakama navy, black and cherry pink, lit by still morning light in a kyudo dojo, a few tiny arrows and target rings scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a kyudo dojo opening onto the target range, broken into flat graphic shards of keikogi white, hakama navy, black and cherry pink splitting apart diagonally, a few speed lines, a scatter of arrows, target rings and cherry petals, lit by still morning light in a kyudo dojo. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Yukari/Yukari - finish card.png`, then `Current Skins/Yukari/Archery Club [sk-yukari-kyudo] - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-kyudo-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: her kyudo club uniform: a white keikogi top, a navy hakama, a black leather chest guard over the left side, a white glove on her drawing hand, her pink hair clip kept. Same face as the THIRD attached image. Background: a kyudo dojo opening onto the target range, as flat graphic shapes in keikogi white, hakama navy, black and cherry pink, arrows and target rings drifting across, lit by still morning light in a kyudo dojo. The words are hakama navy with a keikogi white outline. The words read exactly: THERE YOU HAVE IT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-yukari-kyudo-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one arrow streak flickers on in the centre. Frame 2: a few arrow streaks and cherry petals appear around it, cherry pink light gathering. Frame 3, the peak: an arrow streak piercing a target ring, cherry petals bursting out. Frame 4: the arrow streaks and cherry petals spreading wider, tumbling and turning. Frame 5: the arrow streaks and cherry petals breaking into small white sparkles. Frame 6: a few last tiny arrow streaks and cherry petals and white sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, keikogi white, hakama navy, black and cherry pink, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Featherman Pink · `sk-yukari-pink` · Stars

> **Look bible.** Palette: sentai pink, white, hero gold and blast orange. Vibe: a sentai hero, no questions from Ken.  
> Motifs: stars, pink feathers, sentai explosions and chevrons. Light: a bright sentai explosion flash. Scene: a sentai-show explosion backdrop.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a sentai-show explosion backdrop in sentai pink, white, hero gold and blast orange, the light is a bright sentai explosion flash, and stars and pink feathers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short brown bob, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in sentai pink, white, hero gold and blast orange, lit by a bright sentai explosion flash, a few tiny stars and pink feathers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a sentai-show explosion backdrop, broken into flat graphic shards of sentai pink, white, hero gold and blast orange splitting apart diagonally, a few speed lines, a scatter of stars, pink feathers and sentai explosions, lit by a bright sentai explosion flash. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Yukari/Yukari - finish card.png`, then `Current Skins/Yukari/sk-yukari-pink - pose sheet (recut).png`, then `Character Portraits/Yukari/Yukari-Neutral.png`  
Save as: `skin-sk-yukari-pink-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a pink sentai hero suit like Featherman's Pink Feather: glossy pink bodysuit with white chevrons, white gloves and boots, a small feather crest at the collar; the feathered pink helmet is held under one arm or at her hip, so her face shows. Same face as the THIRD attached image. Background: a sentai-show explosion backdrop, as flat graphic shapes in sentai pink, white, hero gold and blast orange, stars and pink feathers drifting across, lit by a bright sentai explosion flash. The words are sentai pink with a hero gold outline. The words read exactly: THERE YOU HAVE IT. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-yukari-pink-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one gold star flickers on in the centre. Frame 2: a few pink feathers and stars appear around it, blast orange light gathering. Frame 3, the peak: a sentai explosion with pink feathers and gold stars flung out. Frame 4: the pink feathers and stars spreading wider, tumbling and turning. Frame 5: the pink feathers and stars breaking into small orange sparks. Frame 6: a few last tiny pink feathers and stars and orange sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, sentai pink, white, hero gold and blast orange, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: khaki, black, slate white and REC red. Vibe: quiet on set.  
> Motifs: clapperboards, film frames, red REC dots and lens flares. Light: hard film-set lights with lens flares. Scene: a film set with tripod lights.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a film set with tripod lights in khaki, black, slate white and REC red, the light is hard film-set lights with lens flares, and clapperboards and film frames streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in khaki, black, slate white and REC red, lit by hard film-set lights with lens flares, a few tiny clapperboards and film frames scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a film set with tripod lights, broken into flat graphic shards of khaki, black, slate white and REC red splitting apart diagonally, a few speed lines, a scatter of clapperboards, film frames and red REC dots, lit by hard film-set lights with lens flares. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Minji/Minji - finish card.png`, then `Current Skins/Minji/Film Crew [sk-minji-crew] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-crew-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: film-crew gear: a khaki cargo vest with full pockets over a black T-shirt, a headset with a mic round her neck, black cargo pants and boots, a slate clapperboard clipped at her hip, a small camera rig strap over one shoulder. Same face as the THIRD attached image. Background: a film set with tripod lights, as flat graphic shapes in khaki, black, slate white and REC red, clapperboards and film frames drifting across, lit by hard film-set lights with lens flares. The words are slate white with a REC red outline. The words read exactly: THAT'S A WRAP. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-minji-crew-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one red REC dot flickers on in the centre. Frame 2: a few film frames and lens flares appear around it, REC red light gathering. Frame 3, the peak: a lens flare burst with film frames scattering. Frame 4: the film frames and lens flares spreading wider, tumbling and turning. Frame 5: the film frames and lens flares breaking into small white sparkles. Frame 6: a few last tiny film frames and lens flares and white sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, khaki, black, slate white and REC red, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### SU Crewneck · `sk-minji-su` · plain (no theme)

> **Look bible.** Palette: SU navy, SU orange, charcoal and snow white. Vibe: off-duty on a snowy Syracuse campus.  
> Motifs: snowflakes, orange spirit confetti, cap glints and campus lamps. Light: cool winter light with warm lamp glow. Scene: a snowy Syracuse campus at dusk.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a snowy Syracuse campus at dusk in SU navy, SU orange, charcoal and snow white, the light is cool winter light with warm lamp glow, and snowflakes and orange spirit confetti streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long straight black hair, loose, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a navy baseball cap worn backwards. Behind the face: bold flat diagonal stripes and speed lines in SU navy, SU orange, charcoal and snow white, lit by cool winter light with warm lamp glow, a few tiny snowflakes and orange spirit confetti scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the bow held at her side, an arrow ready between her fingers, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a snowy Syracuse campus at dusk, broken into flat graphic shards of SU navy, SU orange, charcoal and snow white splitting apart diagonally, a few speed lines, a scatter of snowflakes, orange spirit confetti and cap glints, lit by cool winter light with warm lamp glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Minji/Minji - finish card.png`, then `Current Skins/Minji/SU Crewneck [sk-minji-su] - pose sheet (recut).png`, then `Character Portraits/Minji/Minji-neutral.png`  
Save as: `skin-sk-minji-su-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: a navy crewneck sweatshirt with big orange SU letters on the chest, baggy dark charcoal jeans, white-and-navy sneakers, a navy baseball cap worn backwards, a thin black choker. Hair: her long straight black hair, loose. Same face as the THIRD attached image. Background: a snowy Syracuse campus at dusk, as flat graphic shapes in SU navy, SU orange, charcoal and snow white, snowflakes and orange spirit confetti drifting across, lit by cool winter light with warm lamp glow. The words are SU orange with an SU navy outline. The words read exactly: THAT'S A WRAP. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-minji-su-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one snowflake flickers on in the centre. Frame 2: a few snowflakes and orange confetti appear around it, SU orange light gathering. Frame 3, the peak: orange confetti and snow bursting out from a white flash. Frame 4: the snowflakes and orange confetti spreading wider, tumbling and turning. Frame 5: the snowflakes and orange confetti breaking into small navy sparkles. Frame 6: a few last tiny snowflakes and orange confetti and navy sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, SU navy, SU orange, charcoal and snow white, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: lavender, white, studio wood and lilac. Vibe: calm core, steady breath.  
> Motifs: breath rings, lavender petals, ripples and soft light. Light: soft lilac studio light. Scene: a bright pilates studio with wood floors.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a bright pilates studio with wood floors in lavender, white, studio wood and lilac, the light is soft lilac studio light, and breath rings and lavender petals streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his ash-blond hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in lavender, white, studio wood and lilac, lit by soft lilac studio light, a few tiny breath rings and lavender petals scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose brawler's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a bright pilates studio with wood floors, broken into flat graphic shards of lavender, white, studio wood and lilac splitting apart diagonally, a few speed lines, a scatter of breath rings, lavender petals and ripples, lit by soft lilac studio light. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jihoon/Jihoon - finish card.png`, then `Current Skins/Jihoon/Purple Pilates Set [sk-jihoon-pilates] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-pilates-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a matching lavender-purple pilates set: a fitted long-sleeve top and leggings-style joggers, white grip socks with purple soles, a rolled purple mat strapped across his back. Same face as the THIRD attached image. Background: a bright pilates studio with wood floors, as flat graphic shapes in lavender, white, studio wood and lilac, breath rings and lavender petals drifting across, lit by soft lilac studio light. The words are lavender with a white outline. The words read exactly: YOU'RE WELCOME. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jihoon-pilates-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one breath ring flickers on in the centre. Frame 2: a few breath rings and lavender petals appear around it, lilac light gathering. Frame 3, the peak: soft breath rings expanding with lavender petals from a white centre. Frame 4: the breath rings and lavender petals spreading wider, tumbling and turning. Frame 5: the breath rings and lavender petals breaking into small lilac sparkles. Frame 6: a few last tiny breath rings and lavender petals and lilac sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, lavender, white, studio wood and lilac, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

### Emo Night · `sk-jihoon-emo` · Thorns & bats

> **Look bible.** Palette: ash grey, black, chain silver and cold blue. Vibe: loud and broken-hearted, rain on the window.  
> Motifs: silver chain links, guitar strings, rain and static. Light: cold blue stage light through rain. Scene: a rainy rooftop at night.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a rainy rooftop at night in ash grey, black, chain silver and cold blue, the light is cold blue stage light through rain, and silver chain links and guitar strings streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: his own ash-blond hair, short with a soft middle part, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in ash grey, black, chain silver and cold blue, lit by cold blue stage light through rain, a few tiny silver chain links and guitar strings scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, both fists up in a loose brawler's guard, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a rainy rooftop at night, broken into flat graphic shards of ash grey, black, chain silver and cold blue splitting apart diagonally, a few speed lines, a scatter of silver chain links, guitar strings and rain, lit by cold blue stage light through rain. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Jihoon/Jihoon - finish card.png`, then `Current Skins/Jihoon/Emo Night [sk-jihoon-emo] - pose sheet (recut).png`, then `Character Portraits/Jihoon/Jihoon-neutral.png`  
Save as: `skin-sk-jihoon-emo-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a distressed black long-sleeved tee with a grey graphic print (no readable lettering) and frayed holes, black-and-grey striped sleeves layered under it, a studded black belt with hanging silver chains, ripped black skinny jeans, black fingerless gloves, a silver dog-tag chain, chunky black lace-up combat boots. Hair: his own ash-blond hair, short with a soft middle part. Same face as the THIRD attached image. Background: a rainy rooftop at night, as flat graphic shapes in ash grey, black, chain silver and cold blue, silver chain links and guitar strings drifting across, lit by cold blue stage light through rain. The words are chain silver with a black outline. The words read exactly: YOU'RE WELCOME. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-jihoon-emo-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one silver chain link flickers on in the centre. Frame 2: a few chain links and static appear around it, cold blue light gathering. Frame 3, the peak: snapping guitar strings and chain links flung out from a blue flash. Frame 4: the chain links and static spreading wider, tumbling and turning. Frame 5: the chain links and static breaking into small static sparks. Frame 6: a few last tiny chain links and static and static sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, ash grey, black, chain silver and cold blue, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: pinstripe white, team navy, grass green and stadium gold. Vibe: a legend, by his own account.  
> Motifs: baseballs, chalk lines, stadium lights and confetti. Light: bright stadium lights. Scene: a baseball diamond under stadium lights.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a baseball diamond under stadium lights in pinstripe white, team navy, grass green and stadium gold, the light is bright stadium lights, and baseballs and chalk lines streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: short and dark under the cap, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a navy batting helmet instead of his cap. Behind the face: bold flat diagonal stripes and speed lines in pinstripe white, team navy, grass green and stadium gold, lit by bright stadium lights, a few tiny baseballs and chalk lines scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the long sword resting on one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a baseball diamond under stadium lights, broken into flat graphic shards of pinstripe white, team navy, grass green and stadium gold splitting apart diagonally, a few speed lines, a scatter of baseballs, chalk lines and stadium lights, lit by bright stadium lights. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Junpei/Junpei - finish card.png`, then `Current Skins/Junpei/Little League Legend [sk-junpei-baseball] - pose sheet (recut).png`, then `Character Portraits/Junpei/Junpei-Neutral.png`  
Save as: `skin-sk-junpei-baseball-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a white pinstripe baseball uniform with a navy number 7, a navy batting helmet instead of his cap, two black eye-black stripes, navy socks pulled high, cleats. Same face as the THIRD attached image. Background: a baseball diamond under stadium lights, as flat graphic shapes in pinstripe white, team navy, grass green and stadium gold, baseballs and chalk lines drifting across, lit by bright stadium lights. The words are stadium gold with a team navy outline. The words read exactly: THAT'S THE GAME! No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-junpei-baseball-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one baseball flickers on in the centre. Frame 2: a few baseball streaks and confetti appear around it, stadium gold light gathering. Frame 3, the peak: a home-run streak with a burst of confetti from a white-hot centre. Frame 4: the baseball streaks and confetti spreading wider, tumbling and turning. Frame 5: the baseball streaks and confetti breaking into small gold sparkles. Frame 6: a few last tiny baseball streaks and confetti and gold sparkles fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, pinstripe white, team navy, grass green and stadium gold, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: leather white, black, ice blue and chrome. Vibe: execution, with style.  
> Motifs: ice crystals, headlight streaks, tyre streaks and chrome glints. Light: cold ice blue headlight glare. Scene: a night highway, her motorcycle's headlight blazing.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes a night highway, her motorcycle's headlight blazing in leather white, black, ice blue and chrome, the light is cold ice blue headlight glare, and ice crystals and headlight streaks streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her long wavy crimson hair, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in leather white, black, ice blue and chrome, lit by cold ice blue headlight glare, a few tiny ice crystals and headlight streaks scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the rapier raised elegantly before her, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: a night highway, her motorcycle's headlight blazing, broken into flat graphic shards of leather white, black, ice blue and chrome splitting apart diagonally, a few speed lines, a scatter of ice crystals, headlight streaks and tyre streaks, lit by cold ice blue headlight glare. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Mitsuru/Mitsuru - finish card.png`, then `Current Skins/Mitsuru/Motorcycle Leathers [sk-mitsuru-rider] - pose sheet (recut).png`, then `Character Portraits/Mitsuru/Mitsuru-Neutral.png`  
Save as: `skin-sk-mitsuru-rider-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: her white motorcycle riding suit from Persona 3: a fitted white leather catsuit with a black zip, black gloves and tall black boots, her fur-collared coat left off. Same face as the THIRD attached image. Background: a night highway, her motorcycle's headlight blazing, as flat graphic shapes in leather white, black, ice blue and chrome, ice crystals and headlight streaks drifting across, lit by cold ice blue headlight glare. The words are leather white with an ice blue outline. The words read exactly: KNEEL BEFORE ME. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-mitsuru-rider-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one ice crystal flickers on in the centre. Frame 2: a few ice shards and headlight streaks appear around it, ice blue light gathering. Frame 3, the peak: ice shards bursting outward from a white headlight flash. Frame 4: the ice shards and headlight streaks spreading wider, tumbling and turning. Frame 5: the ice shards and headlight streaks breaking into small frost glitter. Frame 6: a few last tiny ice shards and headlight streaks and frost glitter fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, leather white, black, ice blue and chrome, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: charcoal, apron navy, coat maroon and stove orange. Vibe: dinner in ten minutes; nobody touches the pot.  
> Motifs: steam curls, stove embers, ladles and stew bubbles. Light: a warm stove glow in a dark kitchen. Scene: the dorm kitchen at night, a pot on the stove.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Same face as the THIRD attached image. Keep the Persona behind him exactly as in the first image, and keep his face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes the dorm kitchen at night, a pot on the stove in charcoal, apron navy, coat maroon and stove orange, the light is a warm stove glow in a dark kitchen, and steam curls and stove embers streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. His hair: shoulder-length brown hair under a black knit beanie, exactly as in the FIRST attached image, strands falling across the frame. Keep these from the look, exactly as in the FIRST attached image, wherever they show in the crop: a dark charcoal knit beanie pulled low. Behind the face: bold flat diagonal stripes and speed lines in charcoal, apron navy, coat maroon and stove orange, lit by a warm stove glow in a dark kitchen, a few tiny steam curls and stove embers scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, the battle axe slung over one shoulder, his hair and clothes whipping back, a cool, ready look straight at the viewer. Background: the dorm kitchen at night, a pot on the stove, broken into flat graphic shards of charcoal, apron navy, coat maroon and stove orange splitting apart diagonally, a few speed lines, a scatter of steam curls, stove embers and ladles, lit by a warm stove glow in a dark kitchen. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Shinjiro/Shinjiro - finish card.png`, then `Current Skins/Shinjiro/Beanie & Apron [sk-shinjiro-apron] - pose sheet (recut).png`, then `Character Portraits/Shinjiro/Shinjiro-Neutral.png`  
Save as: `skin-sk-shinjiro-apron-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind him. Change his outfit and hair to the look in the SECOND attached image: a dark charcoal knit beanie pulled low, a plain navy cooking apron tied over his long maroon coat, the coat's sleeves pushed up, a ladle tucked in the apron's front pocket. Same face as the THIRD attached image. Background: the dorm kitchen at night, a pot on the stove, as flat graphic shapes in charcoal, apron navy, coat maroon and stove orange, steam curls and stove embers drifting across, lit by a warm stove glow in a dark kitchen. The words are stove orange with a charcoal outline. The words read exactly: DON'T WASTE YOUR BREATH. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-shinjiro-apron-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one curl of steam flickers on in the centre. Frame 2: a few steam curls and embers appear around it, stove orange light gathering. Frame 3, the peak: a warm burst of steam and orange embers from a white-hot centre. Frame 4: the steam curls and embers spreading wider, tumbling and turning. Frame 5: the steam curls and embers breaking into small ember sparks. Frame 6: a few last tiny steam curls and embers and ember sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, charcoal, apron navy, coat maroon and stove orange, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible.** Palette: Gekkoukan navy, ribbon red, white and steel silver. Vibe: mission: blend in.  
> Motifs: targeting reticles, red ribbons, blue data lines and steel glints. Light: cool morning school light with a blue scan glow. Scene: the Gekkoukan High gate in the morning.

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
Recreate the FIRST attached image, a full-screen 16:9 ultimate-attack cut-in, keeping its composition, camera angle, pose, Persona, speed lines and energy exactly, in the same Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout. Change only the character's outfit and hair to the look in the SECOND attached image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Same face as the THIRD attached image. Keep the Persona behind her exactly as in the first image, and keep her face in the same place in the frame. Repaint everything around the figure to this look instead of the first image's colours: the background becomes the Gekkoukan High gate in the morning in Gekkoukan navy, ribbon red, white and steel silver, the light is cool morning school light with a blue scan glow, and targeting reticles and red ribbons streak through the speed lines; the Persona keeps its own shape and design, lit to match. No text, no letters, no logos.
```

#### 3. "1 MORE!" eye strip

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-onemore.png`
*(No outfit face sheet for this look yet, so the pose sheet goes first.)*
```
A very wide, very short 6:1 banner image for a video-game "One More!" cut-in, in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows. An extreme close-up of the SAME character as the attached images, cropped to just the eyes and eyebrows across the whole width (forehead and nose tip cut off by the top and bottom edges), looking sharply to the right with an intense, confident, determined expression. Her hair: her short blonde hair with the black headband ear units, exactly as in the FIRST attached image, strands falling across the frame. Behind the face: bold flat diagonal stripes and speed lines in Gekkoukan navy, ribbon red, white and steel silver, lit by cool morning school light with a blue scan glow, a few tiny targeting reticles and red ribbons scattered in the stripes. No text, no letters, no logos, no border.
```

#### 4. Entrance card

Attach: `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-entrance.png`
```
A 16:9 battle-start splash card in Persona 5 / Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold slanted layout. The SAME character as the attached images, in exactly the outfit, hair and weapon of the FIRST attached image (the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees), shown from the knees up in a dynamic entrance pose: stepping forward out of a diagonal tear in the background, one arm raised, its arm gun aimed past the viewer, her hair and clothes whipping back, a cool, ready look straight at the viewer. Background: the Gekkoukan High gate in the morning, broken into flat graphic shards of Gekkoukan navy, ribbon red, white and steel silver splitting apart diagonally, a few speed lines, a scatter of targeting reticles, red ribbons and blue data lines, lit by cool morning school light with a blue scan glow. The character fills the right two thirds; the left third is clean graphic shapes. No text, no letters, no logos.
```

#### 5. Finish card

Attach: `Current Skins/Base Game/Aigis/Aigis - finish card.png`, then `Current Skins/Aigis/Gekkoukan Uniform [sk-aigis-uniform] - pose sheet (recut).png`, then `Character Portraits/Aigis/Aigis-neutral.png`  
Save as: `skin-sk-aigis-uniform-finish.png`
```
Create a NEW 16:9 All-Out Attack finish card in exactly the FIRST attached image's layout and art style: Persona 3 Reload official art, clean anime lineart, flat cel shading with hard shadows. The character in the same place, size and crop as in the first image, turned toward the viewer with a confident finishing pose and a small knowing smile; huge bold slanted words where the first image has its words; flat graphic background shapes and thin lines behind her. Change her outfit and hair to the look in the SECOND attached image: the Gekkoukan High winter uniform worn over her mechanical frame: a dark navy blazer with the school crest, a white shirt and a big red ribbon tied very neatly, a navy pleated skirt, her mechanical joints still showing at the wrists and knees. Same face as the THIRD attached image. Background: the Gekkoukan High gate in the morning, as flat graphic shapes in Gekkoukan navy, ribbon red, white and steel silver, targeting reticles and red ribbons drifting across, lit by cool morning school light with a blue scan glow. The words are white with a ribbon red outline. The words read exactly: TARGET NEUTRALIZED. No other text, no logos, no watermark.
```

#### 6. Signature effect sheet (piece N)

Attach: `Added to Game/heal.jpeg` (format and spacing only)  
Save as: `skin-sk-aigis-uniform-fx.png`
```
A sprite sheet of one video-game spell effect: a 3 × 2 grid of six square frames (3 columns, 2 rows), read left to right, top to bottom, on a pure solid black background (#000000). Every frame shows the SAME effect at a later moment, centred at the same point and the same scale, with a wide empty black margin (at least 10%) on every side so nothing touches or crosses into the next frame. Frame 1: one targeting reticle flickers on in the centre. Frame 2: a few targeting reticles and data lines appear around it, steel blue light gathering. Frame 3, the peak: reticles locking on and scattering from a white flash, a red ribbon fluttering. Frame 4: the targeting reticles and data lines spreading wider, tumbling and turning. Frame 5: the targeting reticles and data lines breaking into small blue data sparks. Frame 6: a few last tiny targeting reticles and data lines and blue data sparks fading. Style: Persona 3 Reload battle VFX: sharp, stylish, graphic shapes with clean hard edges, white-hot cores, Gekkoukan navy, ribbon red, white and steel silver, high contrast, readable at small size. Pure light and energy only: no characters, no monster, no ground, no frame borders, no grid lines, no text or numbers, no watermark. Landscape 3:2.
```

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

> **Look bible (both halves).** Her sunrise (hoodie black, sun hot pink, sunrise orange, gold) meets his twilight (twilight violet, moon silver): day on her side, night on his.

Solar in Sun Hoodie (`sk-cp-sunmoon`) + Haechan in Moon Hoodie (`sk-haechan-cp-sunmoon`).

#### Couple Showtime

Attach: `Current Skins/Solar/Sun Hoodie [sk-cp-sunmoon] - pose sheet (recut).png`, then `Current Skins/Haechan/Moon Hoodie [sk-haechan-cp-sunmoon] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `couple-sunmoon-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same oversized black hoodie with the pink sun, same hair and naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same oversized black hoodie with the pink crescent moon, same hair and knives). Their matching hoodies clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: the sky split down the middle, a warm sunrise of hot pink, orange and gold on her side and a twilight of violet and moon silver on his, pink suns and crescent moons streaming across where they meet. No text, no letters, no logos.
```

### Midnight Drive · `drive` · Hearts

> **Look bible (both halves).** Both halves share one bible: leather black, hot-pink satin, highway neon blue and chrome; a midnight highway, windows down.

Solar in Midnight Drive (`sk-cp-drive`) + Haechan in Midnight Drive (`sk-haechan-cp-drive`).

#### Couple Showtime

Attach: `Current Skins/Solar/Midnight Drive [sk-cp-drive] - pose sheet (recut).png`, then `Current Skins/Haechan/Midnight Drive [sk-haechan-cp-drive] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Haechan/Haechan-neutral.png`  
Save as: `couple-drive-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a cropped black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a short pink satin slip dress, sheer black tights, black ankle boots with silver buckles, small silver hoop earrings, a thin black velvet choker. Hair: her own jet-black hair, glossy and wavy, half-up with a hot-pink claw clip and a single pink streak in the front. Her naginata's haft wrapped in black leather with pink stitching); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a black leather moto jacket with a hot-pink satin lining showing at the cuffs and collar, a pink satin shirt open at the collar, black slim trousers, black boots, silver rings, a car key on a pink lanyard hanging from one hand. Hair: his own black hair, swept back off his forehead with a few strands falling forward (a look he has really worn); his knives). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a midnight highway in leather black and neon blue, tail-light streaks in hot pink and chrome whipping past, little hearts trailing the light. No text, no letters, no logos.
```

### After Hours · `afterhours` · Hearts

> **Look bible (both halves).** Both halves share one bible: blazer black, tie hot pink, cardigan pale pink and sunset amber; the council room after everyone has gone.

Solar in After Hours (`sk-cp-afterhours`) + Jungwon in After Hours (`sk-jungwon-cp-afterhours`).

#### Couple Showtime

Attach: `Current Skins/Solar/After Hours [sk-cp-afterhours] - pose sheet (recut).png`, then `Current Skins/Jungwon/After Hours [sk-jungwon-cp-afterhours] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `couple-afterhours-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a black school blazer worn open with a small pink pin on the lapel, a white shirt, a loosened hot-pink tie, a pale pink cardigan tied around her waist, a short black pleated skirt, black knee socks, black loafers, a pink student council armband. Hair: her own jet-black hair in two neat French braids with pink ribbon ends. A small pink tassel on her naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a black school blazer worn open with a small pink pin on the lapel, a white shirt with the top button undone, a loosened hot-pink tie, black slim trousers, black loafers, a pale pink cardigan over one shoulder, a pen tucked behind his ear. Hair: his own black hair, a neat comma fringe (a look he has really worn); his rapier). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: the Hanlim council room at sunset in amber and black, long window shadows, council papers and little pink hearts fluttering across. No text, no letters, no logos.
```

### Movie Date · `moviedate` · Hearts

> **Look bible (both halves).** Both halves share one bible: cream, coat black, scarf pink and projector silver-blue; a dark cinema in winter.

Solar in Movie Date (`sk-cp-moviedate`) + Jungwon in Movie Date (`sk-jungwon-cp-moviedate`).

#### Couple Showtime

Attach: `Current Skins/Solar/Movie Date [sk-cp-moviedate] - pose sheet (recut).png`, then `Current Skins/Jungwon/Movie Date [sk-jungwon-cp-moviedate] - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Jungwon/Jungwon-neutral.png`  
Save as: `couple-moviedate-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a cream cable-knit sweater dress, a long black wool coat worn open, a pink knit scarf, black tights, black loafers with chunky soles, a small black shoulder bag, a cinema ticket stub tucked in her coat pocket. Hair: her own jet-black hair in a loose low bun with long face-framing strands, tied with a black velvet bow. A small cream pom-pom charm on her naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a cream cable-knit sweater over a white shirt collar, a long black wool coat worn open, a pink knit scarf (the same as Solar's), black slim trousers, black loafers, a cinema ticket stub tucked in his coat pocket. Hair: his own dark brown hair in a soft wavy perm, fringe falling over his forehead (a look he has really worn); his rapier). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a dark cinema, the silver-blue projector beam cutting across, film strips unspooling and little hearts and snowflakes drifting through the light. No text, no letters, no logos.
```

### Ringside · `ringside` · Hearts

> **Look bible (both halves).** Both halves share one bible: boxing red, gym black, tape white and ring-light gold; sweat and grit under the ring lights.

Solar in Ringside (`sk-cp-ringside`) + Akihiko in Ringside (`sk-akihiko-cp-ringside`).

#### Couple Showtime

Attach: `Current Skins/Solar/Ringside [sk-cp-ringside] - pose sheet (recut).png`, then `Current Skins/Akihiko/sk-akihiko-cp-ringside - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `couple-ringside-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a cropped red-and-black track jacket with white stripes down the sleeves (no letters), a black sports bra top, black bike shorts under a short red track skirt, white hand wraps, red-and-white high-top boxing boots, a towel around her neck. Hair: her own jet-black hair in two tight boxer braids joined into a high ponytail, the tips dyed hot pink. Her naginata's haft wrapped in white boxing tape); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a red-and-black track jacket with white stripes down the sleeves (no letters), worn open over a black tank top, black track pants, white hand wraps under his red boxing gloves, red-and-white boxing boots, a towel around his neck. Hair: his own short silver hair). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a boxing ring under hard gold ring lights, a red impact flash and a white shockwave ring, tape ribbons and sweat droplets flying. No text, no letters, no logos.
```

### Summer Festival · `festival` · Sun & moon

> **Look bible (both halves).** Her lacquer black and camellia red meet his dove grey and festival red, under lantern gold and moon silver.

Solar in Summer Festival (`sk-cp-festival`) + Akihiko in Summer Festival (`sk-akihiko-cp-festival`).

#### Couple Showtime

Attach: `Current Skins/Solar/Summer Festival [sk-cp-festival] - pose sheet (recut).png`, then `Current Skins/Akihiko/sk-akihiko-cp-festival - pose sheet (recut).png`, then `Place Prompt Attachments/Solar.png`, then `Character Portraits/Akihiko/Aki-Neutral.webp`  
Save as: `couple-festival-showtime.png`
```
A 16:9 duo ultimate-attack cut-in in Persona 3 Reload official art style: clean anime lineart, flat cel shading with hard shadows, a bold diagonal layout, speed lines. Two characters back to back in a dramatic finishing pose: on the left Solar, exactly as in the FIRST and THIRD attached images (same outfit and hair: a black yukata printed with red camellias and small silver crescent moons, a red obi with a black bow at the back, a silver obi cord, red-thonged black geta, a red drawstring kinchaku bag, a small paper fan tucked in the obi. Hair: her own jet-black hair in an elegant updo, a silver crescent-moon kanzashi hairpin with red tassels, a few loose strands at her neck. A red tassel and a little silver bell on her naginata); on the right the young man exactly as in the SECOND and FOURTH attached images (same outfit and hair: a light grey yukata with a fine dark grey stripe, a red obi (the same red as Solar's), black geta, a small paper fan tucked in the obi, his red boxing gloves still on for battle. Hair: his own short silver hair). Their matching outfits clearly visible, both turned toward the viewer, a confident shared look, their free hands almost touching between them. Behind them: a shrine path at night strung with red paper lanterns, a red-and-gold firework blooming overhead, camellia petals and silver crescent moons streaming across. No text, no letters, no logos.
```

---

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
