# FEMC overnight notes, Nov 4

## Done tonight

- **Six more HD outfits are in the game:** Night Swim, The Sun, Sugar Rush, Sun Hoodie, Summer Yukata and Summer Festival, with all 18 poses each. Sun Hoodie uses your arms-crossed v2. Fifteen outfits still have no set, and Midnight Drive's folder is still empty. The art to-do list is updated.
- **The Evoker close-up prompts are reworded (all 71)**, in `FEMC-SKINS-EVOKER-PROMPTS.md`. The old wording asked for "a silver gun pressed to her temple" with "glass shards bursting around the head", which reads like a shooting. That's almost certainly why ChatGPT refused them. Now:
  - The Evoker is "a smooth silver fantasy summoning device" held against the side of her head.
  - The shards are "light fragments swirling like a magic aura".
  - Every prompt ends "bright, stylised fantasy, nothing violent".
  - Words like "blood red" and "oxblood" are gone.
  - Outfits, colours and scenes are unchanged.

  If one still gets refused, the note at the top of that file has a backup wording.
- Two small fixes in my pose tool, with nothing renamed:
  - It now reads the "handonhip" spelling.
  - It reads `sugar-overshoulder`, which was saved without ".png".

## Upscaling plan for tomorrow (nothing downloaded)

- **What to upscale:**
  - 290 HD pose files across the `New Adds/Solar-…-Menu Poses` folders.
  - 38 loose `solar-*.png` own-look poses in New Adds.
  - 87 outfit pose sheets in `Current Skins`.
- **Tools:** Photoshop's Preserve Details 2.0 at 200% works now. Upscayl, a free app, does a whole folder in one go. I'll ask before downloading anything.
- **Two checks before I re-cut:**
  1. **HD poses:** the cutting tool keeps the size you give it, so a 2× upscale makes each file about 4× bigger. The game never shows a pose larger than about 1,500 pixels tall, so I'll cap the saved size at around 1,800 tall. You still get the sharper detail without making the game heavier, since the game felt laggy today.
  2. **Pose sheets:** the battle-sheet tool scales each new sheet to match the old frame size. An upscaled sheet would come out sharper, but not bigger, unless I raise the frame size, which also changes how big she stands in battle. I'll show you a before and after on one outfit first.

## Ideas: art

1. **Couple results screens:** Sun Hoodie goes with Haechan's Moon Hoodie, and Summer Festival goes with Akihiko's festival outfit. When both are worn and you win, the results screen could show them side by side. You'd need one HD victory pose each for Haechan and Akihiko in those outfits.
2. **Other fighters' HD victory poses** are already step 2 of the plan. I'd start with Haechan and Jungwon in their own looks: one pose each, so the results screen always has a figure.
3. **A seasonal home screen:** the evening screen could change backdrop with the season or the weather, for example a snowy window in December or a rainy one in June. That's about 4 backdrops.
4. **Wardrobe "try-on":** in the Wardrobe, hovering an outfit could show its HD arms-crossed pose large. This needs no new art, since the sets exist now.
5. **Boutique banner art:** the featured outfit could use its best HD pose (e.g. jump or peace) instead of the pose sheet frame. No new art needed either.
6. **Epilogue polaroids:** a few photo-style CGs of the hangouts, realistic like the CGs, that land in the album. These would fit your wish for more hangouts and could come later with the expansion.

## Ideas: polish and fun

1. **A photo mode:** pick any outfit and any of its 18 HD poses, and set a background from places you've unlocked. Save it as a picture, or use it as your home screen. It would make all your HD poses something players play with.
2. **Pose of the day:** each evening the home screen picks a different pose from the worn outfit, and sometimes a rare one, like jump or sewing.
3. **Outfit-aware lines:** a short line from a friend when Solar wears certain outfits, e.g. Haechan noticing the Sun Hoodie, or Yukari on Night Swim. Ten to twenty lines total.
4. **A wardrobe collection meter:** "HD sets 17/32" and "Evoker close-ups 0/71", so collecting feels like progress.
5. **Settings quality toggle:** a "Lighter graphics" switch that turns off weather particles and blur effects on older laptops. It would make the lag fix something you control.
6. **Echo of the week:** a rotating Echo shown on the menu with its lore line, so the 120 Echoes get seen.

Tell me which ones you like and I'll build them, or skip any.

## Lag and missing art

**Short version: I didn't change any game code tonight.** I measured every main screen and the battle. Nothing in the game itself is heavy enough to cause the lag, and nothing it asks for is missing. The few small wins I found would all change how something looks or behaves a little, so they're listed below for you to decide on.

### What I measured (headless Chrome, one at a time, at laptop and Retina sizes)

- **Starting the game:** the page is ready in about 0.4 s the first time and under 0.1 s after that, even with all ~160 scripts. The browser caches them, so this isn't where the lag comes from.
- **Sitting on a screen:** the field, evening, phone, menu (all 17 tabs), scenes and the Boutique use almost no CPU while you're just looking at them (under 1%). Nothing keeps animating once you leave it. Rain and snow already pause when the tab is hidden.
- **Opening things:** every menu tab, the phone, Status, Saves and Settings draws its first frame in about 30 ms. A new day takes 60 ms the first time and about 10 ms after that.
- **Battles:** a full fight ran at a steady 60 fps, with only one hitch over 50 ms (about 75 ms at the very start). That held at Retina size too.
- **Leaks:** I opened the menu, phone, scenes and evenings 8 times each, skipped ahead several days and played long fights. Nothing piled up, so the game doesn't get slower the longer you play.
- **Saving:** a save takes about 0.1 ms. The save itself is about 4 KB.
- **Title screen:** this is the only screen with steady work, about 10–15% of one CPU core. That's the falling glass, the moon dust and the logo shimmer. It's fine, but it's the busiest screen.

My best guess at the lag you felt: earlier today several test browsers were running at once in the background (that's what rebooted the Mac). Lag from that shows up in any app, not just the game. If it happens again with nothing else running, note which screen you were on and I'll measure that exact spot.

### Ideas I didn't do (each would change something you can see or feel)

1. **Lighter title screen.** I could rewrite the falling-glass and moon-dust animation so the graphics card handles it instead of the CPU. In a test this cut the title's work by about a third. It should look the same, but it rebuilds how the effect is made, and the gain is small. Only worth it if the title ever feels slow.
2. **Load fewer effect pictures before a fight.** The first fight of a session loads all ~80 skill-effect pictures (about 10 MB), including ones for people who aren't in the party, so any skill can play its art the first time. Loading only the party's own effects would make the first fight start lighter. The catch: if someone joins mid-fight, their first skill would show the simple built-in effect once instead of your art.
3. **Velvet Room backdrop (this looks like a bug).** The Velvet Room card draw, Elizabeth's Requests, the Plume Exchange, Plumes for Yen and the Velvet Trials all try to show the Velvet Room picture behind their panel. It never actually shows, so you get the plain blue panel. The shop panels (Police Box and the like) work the same way, so they're probably missing their pictures too. The fix is small, but those screens would suddenly look different from what you've been playtesting, so tell me if you want them.

### Missing art

**Nothing is missing.** I checked every picture and song the game can ask for against the files:

- every portrait expression, outfit portrait and seasonal face
- every CG, background (including seasonal and weather versions), music mood and epilogue world's music
- every Wardrobe look's battle art, HD poses, One More, entrance, Theurgy and finish cards
- keychains (Halloween versions too), capsule goods and phone cases
- stickers, posts, contact pictures, group-chat pictures and tarot cards
- Shadows and their poses, Echoes, skill effects, cards, gear and items

I also clicked through all the menu tabs with every look owned, and played 12 fights with 11 different fighters in 3 different outfits each. Not one picture or song failed to load, and there were no errors. Art that isn't drawn yet already shows as "Art coming" or the built-in stand-in, as planned.
