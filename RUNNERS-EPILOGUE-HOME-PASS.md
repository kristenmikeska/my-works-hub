# Runners epilogue: the home pass (Nov 4 2026)

You asked whether the Runners epilogue should be longer, whether her parents' portraits were ever used, and whether there should be more of her going back home. Here's what changed while you slept. Nothing is pushed.

## What was there before

- About 82,000 words. The Nov 3 expansion plan (`FEMC-RUNNERS-EPI-EXPANSION.md`) had none of its boxes ticked.
- **Her parents:** Dad's portrait showed in one scene only, the Dec 2 porch call. Mom never spoke in a scene; her portrait only appeared as the little picture on her text thread.
- **Backgrounds:** every Runners background that exists was already wired in. A few places still borrowed one (see "Still missing").

## What's new (about 7,400 words; the act is now about 89,000)

New scenes, all in `assets/femc/game/data/epi/runners/story-home.js`:

| Date | Scene | What it is |
|---|---|---|
| Mon 12/1, Evening | **the first night back** | Hanni and Hyein's room as a blanket fort, takeout from three places, one true thing about the other world. It fills the empty first evening of the act (gap 16). |
| Sat 12/13, Morning | **two minutes** | Her father calls from his own phone, on a Saturday. He writes down her finals schedule and never mentions the trip. His portrait is used here (gap 10). |
| Sun 12/14, Morning | **sunday at ten** | Her mother's Sunday call: the crooked tree, the green dress for the 24th, the place set for her on Thanksgiving. **This is the first scene where Mom's portrait is used.** |
| Thu 12/18, Evening | **what she tells them** | The girls' room with the door shut. If she told them the truth that morning: the list on Hyein's arm ("4. sorry. quad."). If she lied: they're careful with her, and she gets one more chance to tell them (gap 1). |
| Fri 12/19, Morning | **his hoodie** | Waking up in his hoodie, a different version per route: his coffee on the porch rail, Minji's "not asking" text, or Hyein asleep on her floor (gap 2). |
| Fri 12/19, After Class | **friday at two** | The last final in Archbold Gym and the red second hand (gap 3). It doesn't use up the slot. |
| Sat 12/20, Evening | **the car** | Jaehyun shoveling the Alpha porch the night before the drive home: the car, what they'll say at the table, his shoulder, and "I did it once." Every route (gap 11 and Section B's "the car"). |

Edits to existing scenes (`story-w3.js`):

- **The holiday party now opens at seven-thirty in Hanni and Hyein's room:** Hyein zipping her into the wine-red silk, Hanni's low twist with Hyein's velvet ribbon, the portfolio photo, the mirror. Each route gets its own part (Haechan's "two hours" texts; the three dresses and Hanni's rules; Hyein reading Minji's text) (gap 4).
- **Danielle now says "Wear something you'd like to be remembered in" from the landing in the clocks scene**, which everyone plays, so the party's callback always lands (gap 5).
- **The clocks scene's two answers now set flags** (`epi-r-told-girls` / `epi-r-lied-girls`), so the 12/18 evening can follow what she told them.
- **Fixes:** "Last night you counted the stairs" is now "Tuesday night" (gap 15). The rooftop's last final is now "the writing final", which matches one finals schedule everywhere: Mon Intro to Business, Tue Statistics, Thu Media and Society, Fri 2 p.m. the writing final (gap 8).

## Choices I made (change any of them)

- **No scene after the rooftop.** The roof is the act's last word, followed by the Equinox card. A scene of her actually arriving in Manhattan would need a small engine change and would come after the ending you designed. Instead, home comes to her: both parents' calls, Mom's place card and green dress, and Jaehyun's goodbye on the porch. If you want a real Manhattan coda (the car, the penthouse, the crooked tree), say so and I'll plan where it goes.
- Jaehyun's injury is his **right shoulder**, not the wrist in the planning doc, because week 1 already shows the shoulder.
- Small inventions: Rosa's espresso machine, the radio in Mom's kitchen, the Kangs coming on the 24th, the green velvet dress, the empty Thanksgiving chair, the writing final in Archbold Gym, Ms. Han covering an unconfirmed car. They're listed at the top of `story-home.js`.

## Art: added to `FEMC-ART-TODO.md`

- **23L** the Alpha Phi front porch, snowy morning (`epi-r-alpha-porch`). This also replaces the old painted outside of the house.
- **23M** the same porch, snowy evening (`epi-r-alpha-porch-night`), an edit of 23L.
- **23N** Archbold Gym set up for finals (`epi-r-finals-gym`).
- **32A** CG: the blanket fort (`epi-r-fort`).
- **32B** CG: seven-thirty, the mirror (`epi-r-mirror`).
- **32C** CG: the porch, Solar and Jaehyun (`epi-r-porch`).

New attachment copies in Place Prompt Attachments: `CG - Solar (Runners holiday).png`, `CG - Hanni (Runners holiday).png`, `CG - Hyein (Runners holiday).png`, `BG - Alpha Phi House (old painted).png`. Wiring notes are in `FEMC-ART-WIRING.md`. Until the art exists, the porch uses the old painted house and the gym uses the lecture hall, the same way the other places already borrow.

**List cleanup:** I checked the whole list against the game and New Adds. Everything you made today was already in the game and already off the list, so no items had to be removed. I fixed some status lines: Solar's HD list was missing Movie Date, Velvet Attendant and Winter Coat (all done), and the section 23, 26 and 27 notes were out of date.

## Still missing / not done

- From the expansion plan: gaps 6 (the last practice as a real scene), 7 (the morning after the crossroads), 9 (a glimpse of Mark alone), 12 (Mom's card line), 13 (Haechan's Thursdays) and 14 (Dec 7 Evening). Also most of Section B (new hangouts) and all of Section C (more time slots).
- The backgrounds that already borrowed one: the Sigma living room and back porch, the dining hall, the three home-screen views (23F-23K), plus the three new ones above.

## Files touched

`assets/femc/game/data/epi/runners/story-home.js` (new), `story-w3.js`, `world.js`; `assets/femc/game/epilogue.js` (the new file in the list, `DATA_V` 58); `femc-game.html` (epilogue v61); `tests/femc_epilogue.py` (counts); `FEMC-ART-TODO.md`, `FEMC-ART-WIRING.md`, `FEMC-RUNNERS-EPI-EXPANSION.md`, `FEMC-STATUS.md`; this file.

**Backups** of everything before editing: `~/Documents/FEMC Backups/runners-epilogue-2026-11-04/`.
