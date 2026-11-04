# FEMC overnight notes, Nov 4

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
