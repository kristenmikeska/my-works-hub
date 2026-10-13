# Works hub maintenance

Story metadata lives in `worlds-data.js`. The archive, story pages, filters, and reading shelves use that single catalog.

- `tags` supplies the mood/trope filter. Use consistent labels from the existing catalog.
- `latestUpdate` contains a verified date (`YYYY-MM-DD`), a short update label, the latest chapter title, and its zero-based index. Update it when publishing new chapters; don't use the writing-era dates as chapter-update dates. Stories without a verified update date are omitted from Recently updated.
- `readingPaused: true` changes the card/page badge and excludes the story from reading shelves. Keep the corresponding reader URL as a notice page with no manuscript content; a badge alone does not restrict access.
- `image` controls archive cards and shelf thumbnails. `worldImage` controls the story-page hero. The homepage feature is separate markup in `index.html`.

## Reader

`readers/reader-nav.js` detects chapter headings, builds the chapter list, and loads `reader-experience.js` and `reader-experience.css`. It works from the existing static reader files without a build step.

Chapter mode displays one section at a time; the original HTML document still downloads in full. Full-story mode remains available under **Aa**. All manuscript nodes remain in source order. Chapter mode requires sibling headings; unsupported structures fall back to full-story mode.

Preferences use `kg-reader-preferences`. Bookmarks retain the existing `kg-reading-<story-id>` keys, with a chapter anchor and within-chapter offset added to the original fields. Progress is saved after reader interaction, not merely opening a page. Storage is browser-local and cannot sync between devices, browsers, or site origins.

Keep established chapter anchors stable. Peace's previously unnumbered opening uses `ch-opening`, so existing `ch-0` through `ch-8` links still point to chapters 2–10. Reader counts follow actual section headings, which can differ from older catalog counts and include interludes.

## Story entrances

`world-entrances.js` and `world-entrances.css` hold the story entrances (Runners: autumn campus; Strangers: Incheon at low tide; Delicate: Seoul flashbulbs and The Pulse; Petal & Thorn: idol/gamer split with a live queue timer; Peace: the interview room; Recherche: the Castle in gold; Secret: main vs. private accounts; Hoax: BESTAY CENTRAL and the campaign poster; Casual: the new Mercer apartment; Havenbrook: the east side through chain-link; Soul of Minji: a quest screen; Saint of Dead Air: soundcheck with seven seconds of dead air; GO: DMHS in the rain). Every world now has an entrance.. A scene can define `start(dialog)` returning a cleanup function for anything that runs while it is open.

`entrance-sounds.js` synthesizes each entrance's ambience with Web Audio (no audio files). Browsers only allow sound after a click on the page, so entrances open silently with a ♪ Sound on button; a click anywhere on the entrance also starts it, and the choice is remembered in `kg-intro-sound`. On worlds with an entrance the music player does not autoplay; Skip shows a short loading screen (each scene's `loader` mark and two lines, styled by `.<prefix>-loader`) while the ambience fades into the world's first song through `window.WorldMusic` (set up by the music player in `world.js`). Worlds without songs just fade out. The story page then rises in (`body.world-revealed`). Add songs to a world's `songs` list in `worlds-data.js` with files in `assets/audio/`. Each scene is an entry in `SCENES` with its own CSS class prefix. An entrance opens with the story page and stays until the reader clicks Skip or presses Escape; a replay button sits in the hero. Reduced-motion preferences bypass autoplay and let the replay button open a static scene. Navigation cleans up the overlay and restores scrolling.

## Verification

Run `node --test tests/hub.test.cjs` and `git diff --check`. Preview through a local HTTP server, then check chapter navigation, resume from the homepage, appearance settings, and mobile layout when changing shared reader code.

## Homepage previews and the passport

`card-previews.js` adds a small animated layer (`.cfx-*` in `styles.css`) to each archive card, running only on hover or keyboard focus, and plays a one-second signature from `EntranceSounds.preview()`. Browsers only allow the sound after the visitor's first click or key press on the page; the shared audio context warms up at that moment. Intro sound turned off (`kg-intro-sound = off`) also silences previews. Add a `FX` entry and a `PREVIEWS` entry for new worlds.

The passport (homepage, below the archive) shows three stamps per world: Started, Halfway, and Finished (Completed stories) or Caught up. The reader records them in `kg-stamps` and, on reaching the last page, keeps that page's closing lines as the world's keepsake; the toast in the reader links to the passport. The passport lives in `passport.js`. Each world's stamp emblem is in `STAMP_ART` (placeholder SVGs); the three stages show it as an outline, half-inked, and fully inked. To use custom art, add `image: 'assets/stamps/<world>.png'` to that world's entry (square PNG, transparent background, about 300×300, a bold shape that reads at 64 px); the same ink stages apply automatically. Each world's keepsake opens as an object from its intro, styled by `.ks-<world>` in `styles.css` with the kicker/decor in `KEEPSAKE_THEMES`, and plays the world's hover sound. Stamps are browser-local like bookmarks, and readers who had progress before stamps existed get Started/Halfway from their saved position.

## Homepage effects (`home-effects.js`)

- **"loud" in the headline** is the site-wide sound switch (`kg-intro-sound`, shared with the entrances' Sound on button). Homepage sound (card previews, stat ticks, stamp thunks, secret words) plays only while it is on. First-time visitors get a one-time "psst" hint.
- **Hero collage** tilts toward the cursor and reuses the card previews.
- **Stats** count up once when they scroll into view (timer-driven, not requestAnimationFrame).
- **Passport stamps** earned since the visitor's last homepage visit press in with an ink ring and a thunk; seen stamps are remembered in `kg-stamps-seen`.
- **Secret words**: typing a world's name (or soomi, castle, bestay, mercer, dream, minji, dmhs, rain) sweeps that world's preview effect across the page; "solar" bursts every world's colour; "dead air" greys the page for three seconds. The list is `WORDS` in `home-effects.js`.
- **Time of day** sets `data-daypart` on `<html>` (dawn, day, golden, dusk, night) for the hero glow, with stars at dusk and night; it re-checks when the visitor returns to the tab.

Avoid long `setInterval`s on the homepage: headless screenshot testing fast-forwards to the next timer.
