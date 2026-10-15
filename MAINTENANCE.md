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

The passport has its own page, `passport.html` (styled by `passport.css`: a cover, a holder page with a machine-readable zone built from the visitor's counts, then visa pages and secret stamps). The homepage keeps a small card (`#passportTeaser`, rendered by `renderTeaser()` in `passport.js`) with counts and the newest stamps, and a gold Passport tab sits beside the brand in the top bar of the homepage, About, Vault and the passport page (`.passport-tab`; icon-only in the top-right corner on phones). Old `index.html#passport` links redirect. It shows three stamps per world: Started, Halfway, and Finished (Completed stories) or Caught up. The reader records them in `kg-stamps` and, on reaching the last page, keeps that page's closing lines as the world's keepsake; the toast in the reader links to the passport. The passport lives in `passport.js`. Each world's stamp emblem is in `STAMP_ART` (placeholder SVGs); the three stages show it as an outline, half-inked, and fully inked. To use custom art, add `image: 'assets/stamps/<world>.png'` to that world's entry (square PNG, transparent background, about 300×300, a bold shape that reads at 64 px); the same ink stages apply automatically. Each world's keepsake opens as an object from its intro, styled by `.ks-<world>` in `styles.css` with the kicker/decor in `KEEPSAKE_THEMES`, and plays the world's hover sound. Stamps are browser-local like bookmarks, and readers who had progress before stamps existed get Started/Halfway from their saved position.

## Homepage effects (`home-effects.js`)

- **"loud" in the headline** is the site-wide sound switch (`kg-intro-sound`, shared with the entrances' Sound on button). Homepage sound (card previews, stat ticks, stamp thunks, secret words) plays only while it is on. First-time visitors get a one-time "psst" hint.
- **Hero collage** tilts toward the cursor and reuses the card previews.
- **Stats** count up once when they scroll into view (timer-driven, not requestAnimationFrame).
- **Passport stamps** earned since the visitor's last passport visit press in with an ink ring and a thunk (`pressInStamps()` on `passport.html`); seen stamps are remembered in `kg-stamps-seen`.
- **Secret words**: typing a world's name (or soomi, castle, bestay, mercer, dream, minji, dmhs, rain) sweeps that world's preview effect across the page; "solar" bursts every world's colour; "dead air" greys the page for three seconds. The list is `WORDS` in `home-effects.js`.
- **Time of day** sets `data-daypart` on `<html>` (dawn, day, golden, dusk, night) for the hero glow, with stars at dusk and night; it re-checks when the visitor returns to the tab.

Avoid long `setInterval`s on the homepage: headless screenshot testing fast-forwards to the next timer.

## Secret stamps, hidden pages, and the regulars

`achievements.js` (loaded on the homepage, world pages, About, Vault, 404, and hidden pages) holds the 27 secret stamps: id, name, group, riddle, and emblem. `Achievements.unlock(id)` records one in `kg-achievements` and shows a toast; `Achievements.note(set, value, goal, id)` counts multi-step ones (every intro, every regulars card). Reading stamps (The end, World traveler, One hundred) are checked when the passport renders, using `maxIdx` the reader stores in `kg-stamps`. Locked stamps show their riddle in the passport.

Hidden pages: `solchan.html` (Solar × Haechan across Runners and Strangers). It's reached from the tiny sun on the back of Haechan's card on the About page, or by typing "solchan" on the homepage, and unlocks the Two suns stamp. Quotes on it are verbatim from the manuscripts with chapter citations; later ones sit behind spoiler toggles.

About page: `about-effects.js` turns the regulars cards into flip cards whose backs list every world each person appears in, read from `worlds-data.js` (cast, love interests, lead).

## Hoax chats

The Hoax reader turns `handle:<br>message` paragraphs into chat threads at load (`buildChatThreads` in `reader-nav.js`): underlined lines become thread headers (group chat names, or "PRIVATE MESSAGE FROM: handle"), a lone `handle:` line followed by an image becomes an image message, and Solar's handles (`solarsystem`, `solarkim`) sit on the right. Messages pop in on scroll and ping softly when site sound is on. Instagram-style "new post" blocks are still handled by `wrapSocialImages`.

The Hoax intro plays a random run of messages from `assets/hoax-chats.json`, exported from `readers/hoax.html`. Re-export it if Hoax gets new chapters (the extraction logic mirrors `buildChatThreads`; memes are skipped).

## Hoax photos

Kat's sorted photos (Desktop/Hoax) are resized into `assets/hoax/roll/` (full, ~1100px) and `assets/hoax/thumbs/` (360px), listed by album in `assets/hoax/roll.js` (`window.HOAX_ROLL`). Albums map to her folders: Selfies (solar), Nana (Solar's samoyed), w/ Cherry, w/ Jihoon, w/ Jungwon, Jungwon, Friends, Memes. Profile pictures come from Kat's `Desktop/Hoax/profile pics` folder, cropped to 200px squares in `assets/hoax/pfp/`. Group-chat and Instagram handles can have different pictures (e.g. `solarsystem` vs `solarkim`). The handle → file map is `HOAX_PFP` in `readers/reader-nav.js`, used by chat bubbles, thread headers, post cards and comment lines. It is mirrored as `PHOTOS` in the Hoax scene of `world-entrances.js` for the intro phone, so update both when adding a handle. `sukhyun`/`sunhyuk` are mapped to Hyunsuk.

- `hoax-roll.html` — hidden camera-roll page (Photos-app style, albums, viewer, favourites in `kg-hoax-favorites`). Reached from the tiny camera icon on the phone in the Hoax intro; unlocks "Camera roll"; opening the Nana album (or `#nana`) unlocks "Good boy".
- Typing "nana" on the homepage sends Nana across the screen (also unlocks "Good boy").
- `world-extras.js` hides the Hoax photo booth (Solar & Jungwon, Solar & Jihoon strips; "Take another" re-rolls four frames) behind a twinkling star in the Hoax hero sky (`.booth-star`, positioned in `world.css`; move it if the hero photo changes). Clicking it plays a flash sound, flashes the screen, unlocks the `say-cheese` stamp, scrolls to the booth, and slides the strips in from opposite sides (`booth-slide` sound) before they develop. "✕ Hide the booth" slides the strips back out, scrolls to the top, and puts the star back. The booth is hidden again on every visit.

## FEMC mode (hidden skin)

`femc-mode.js` is loaded in the `<head>` of every hub page (index, world, about, vault, 404, solchan, hoax-roll) and by `readers/reader-nav.js` for the readers. Typing `femc` anywhere toggles it (`kg-femc = 'on'`); the first time unlocks the `femc` stamp ("Memento mori").

- **Look:** `html.femc` swaps every page accent to pink (`#ff4f9e`), adds pink diagonal stripes and offset heading shadows (not in readers, `html.femc-reader`), pink arrow cursors, and Persona-style offset shadows on card and chip hovers. The CSS lives inside `femc-mode.js`.
- **Badge:** bottom-left ◆ MENU button, calendar (date, P3P-style time of day, real moon phase), SFX mute (`kg-femc-sound`), a ♪ music toggle, and ✕ to switch off.
- **Menu (`femc-menu.js`, loaded on demand):** a P3P-style menu opened from the badge's MENU button or the pink ◆ FEMC tab that appears beside the Passport tab in the top bar (pages with `.topbar`) and after "All Worlds" on world pages. Items: Social Link (Akihiko's rank), Compendium (count), Calendar (moon, next full moon, time until the Dark Hour), Music (play/pause, next track), Stamps (other-side count, links to the passport), Return (turns FEMC mode off). Arrow keys, Enter and Escape work. It moves above the world music player when they'd overlap. From midnight to 1 a.m. it reads "Dark Hour" and the stripes turn green.
- **Sounds:** original P3P-inspired menu sounds in `entrance-sounds.js` (`femc-hover`, `femc-click`, `femc-back`, `femc-on`, `femc-off`). They play while FEMC mode is on regardless of the site's loud switch, unless muted from the badge.
- **Intro:** turning FEMC mode on opens a P3P-style crossing-over screen (`intro()` in `femc-mode.js`): a calendar roll to today with the moon phase, the FeMC portrait (`assets/femc/img/femc-portrait.jpg`), and an Enter / Back to the idols menu (arrow keys work, Escape enters). It plays `assets/femc/music/a-way-of-life.mp3`; Enter fades it out, starts the background music, and unlocks the stamp. Back to the idols turns the mode off again. Page loads while the mode is already on skip the intro.
- **Images:** Kat's FeMC/P3P images are in `assets/femc/img/` (portrait, lying, accomplished, fountain, femc-and-mc, akihiko-hug).
- **Music:** list tracks in `assets/femc/bgm.js` (currently Iwatodai Dorm, then Time) (files in `assets/femc/music/`). They play in order at low volume, resume across pages, pause while a world song or world intro is playing, and start on the first click if the browser blocks autoplay. The ♪ button only appears when the list has tracks.

### FEMC-only Easter eggs

`femc-eggs.js` is loaded by `femc-mode.js` once the mode is on (after the intro's Enter, or on page load if already on). Preview any of them without earning stamps with `?femcpreview=darkhour`, `fullmoon`, `text` or `protein` on any page URL.

- **Akihiko texts you:** a P3P-style message box (lines in `LINES`), at most once every 8 minutes, about 1 in 4 page loads, never in readers. "Go see him" opens `akihiko.html`.
- **protein** (typed): shakers and beef bowls rain down, "COURAGE ↑", stamp `gains`.
- **akihiko / compendium** (typed): go to those pages.
- **Dark Hour:** midnight to 1 a.m. local, once a night (`kg-femc-dh`): green full-screen moment, stamp `dark-hour`.
- **Full Moon Operation:** on full-moon days (within about a day of full, from `FemcMode.moon()`), a banner; Deploy plays the operation and earns `full-moon` (once per day, `kg-femc-fm`). The badge moon's tooltip shows the next full moon.
- **`akihiko.html`:** now just redirects to `social.html#akihiko`.
- **`compendium.html`:** Kat's fictional favorites from `assets/femc/compendium.js`; each entry unlocks with a stamp id. Stamp `compendium`. The badge's ❖ button links here.
- Stamps with `side: 'femc'` (group "The other side") stay hidden in the passport until `femc` is unlocked.

### Social links (`femc-social.js`, `social.html`)

- **Data:** one file per link in `assets/femc/links/<id>.js`, listed in `assets/femc/links/index.js`. Each calls `FemcSocial.define({...})` with the link's arcana, home (place, time slot, weekdays), optional `arrives` date, `music`, side-character `cast`, `stamps` per rank, and ten `ranks`. The format is documented at the top of `akihiko.js`: chapter `title` cards, narration in Kat's voice (close third person, past tense), character lines, Solar's lines (chosen options are spoken automatically unless they're an action in parentheses), choices with ♪ notes, `{ place, time }` scene breaks, `phone` text conversations, the friendship/romance `route` choice, `ifRoute` branches and `register` (compendium popups). Scenes have a Log button for rereading.
- **Calendar:** one shared in-game year from 4/7/2009 to 1/31/2010, with After School (Daytime on weekends) and Evening slots. A hangout uses up the slot. Each rank has an `after` date. `social.html` has Wait and Next day buttons. State is in `kg-femc-game`.
- **Portraits:** `assets/femc/portraits/<id>/<emotion>.webp`, generated from Kat's Character Portraits folder (each expression is matched to the neutral one by head and hair silhouette, then placed on one shared canvas so faces never change size mid-scene; "Mad"/"Angry" become `serious`, numbered variants like `sad-2` are kept). `assets/femc/portraits/index.js` lists what exists, and missing faces fall back to neutral. Re-run `python3 tools/femc-portraits.py` after she adds images.
- **Pages:** `social.html` is the Social Links screen (cards by arcana, "Free now" tags) and `social.html#<id>` is a link's page (rank, status, Spend time together, Memories to replay finished ranks). The FEMC menu's Social Link and Calendar items go there.
- **Compendium:** `assets/femc/compendium.js` lists all 49 characters. Social links unlock when met (`met:<id>`), supporting characters when a scene registers them (`reg:<id>`).
- **Phone:** texts arrive between hangouts when the calendar moves (Wait / Next day), at most one text event per step. Each link file can define `threads` (group chats like the dorm's S.E.E.S. chat, or side characters' DMs) and `texts`: `{ id, thread, rank, before, days, slot, msgs: [{ from, t } | { sys }], reply: [{ t, notes, then }], rename }` (format notes are in femc-social.js above `deliver()`). Arrivals buzz with a notification; the Phone opens from the FEMC menu, the Social Links screen, or a notification. Replies to a link's own texts earn ♪. State is `kg-femc-game.phone`.
- **Sounds:** text blips while typing, `femc-advance` when a line advances, the cursor tick on choices (arrow keys work), the confirm chime, `femc-note` for ♪, `femc-buzz` for texts, `femc-register`, and the rank-up sweep. All original, P3P-inspired.
- **Test panel:** add `?femctest` to `social.html` (before the `#`): jump to any date, step time, set ranks, make everyone free and ungated, or reset all progress.
- **Elizabeth (`elizabeth.js`):** a hidden link (`hidden: true`, `theme: 'velvet'`) whose one scene is the Velvet Room opening with P3P's naming screen (`{ naming: true }`, always "Solar"). It plays the first time Solar opens `social.html` in FEMC mode (`kg-femc-game.intro`). The test panel's Reset replays it.
- **Written so far:** Akihiko: 10 full chapters (both routes) and 21 texts, including the S.E.E.S. group chat. Shinjiro: 10 chapters and 9 texts; his link `closes` on 10/4 (rank 10 must be played on 10/3), and on 10/5 the group chat learns he is at Tatsumi Memorial. Ann: 10 chapters and 10 texts (plus Elizabeth's 5/9 arrival text and Futaba's "phantom thieves (temp)" group chat); she goes home at the end of October, so her link closes 11/3. Mercy: 10 chapters and 8 texts (plus Elizabeth's 6/8 arrival text). Kat's Easter egg: Kat mains Mercy (peak GM, eSports), so Solar fights in sync with Mercy and in rank 7 remembers wearing her wings under stage lights in another world. Typing "heroes never die" in FEMC mode, once Mercy is met, plays a resurrection effect (`femc-rez` sound) and unlocks the `heroes-never-die` stamp. Kiriko: 10 chapters and 7 texts, friendship only (`romance: false`, no route choice); an omikuji fortune every rank; Runners crossover in rank 4 (Solar's Kiriko main and tournament MVP) and rank 8 (Widowmaker and "the sniper boy").
- Haru: 10 chapters and 8 texts (Strangers echo in rank 4; Ann, Shinjiro and Akihiko cross over).
- Astarion: 10 chapters and 8 texts, evenings only; rank 10 is the photo booth (the first picture of himself in two hundred years).
- Aphrodite: 10 chapters and 8 texts (plus Elizabeth's 7/7 arrival text). Kat's Easter egg: Kat mains Aphrodite in Smite (mid and solo, 20+ stars, 5–7 KDA); Aphrodite feels it through the Soul Partner link in rank 5. Typing "love birds" once she's met releases her doves (`femc-doves` sound) and unlocks `mid-lane-goddess`.
- **SECRET: Haechan (`haechan.js`, ∞ The Universe).** Spoilers for Kat. He walked between worlds to find Solar; he remembers pieces of Runners and strangers (Kat's own lines are echoed on purpose). Links can carry an `unlock` ({ stamps, links: { id: rank }, after }); his is the hidden Solchan page stamp + Kiriko rank 8+ + in-game 11/4 or later. Until then he's invisible everywhere, including the compendium (`secret: true` entries stay hidden until opened). Rank 10 reveals that the song on Solar's headphones since Akihiko's rank 5 is his. MAX earns the `every-universe` stamp. Romance only. Junpei has no portrait yet, so his lines show text only.
