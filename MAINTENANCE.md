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

`world-entrances.js` and `world-entrances.css` hold the story entrances (Runners: autumn campus; Strangers: Incheon at low tide; Delicate: Seoul flashbulbs and The Pulse; Petal & Thorn: idol/gamer split with a live queue timer). A scene can define `start(dialog)` returning a cleanup function for anything that runs while it is open. Each scene is an entry in `SCENES` with its own CSS class prefix. An entrance opens with the story page and stays until the reader clicks Skip or presses Escape; a replay button sits in the hero. Reduced-motion preferences bypass autoplay and let the replay button open a static scene. Navigation cleans up the overlay and restores scrolling.

## Verification

Run `node --test tests/hub.test.cjs` and `git diff --check`. Preview through a local HTTP server, then check chapter navigation, resume from the homepage, appearance settings, and mobile layout when changing shared reader code.
