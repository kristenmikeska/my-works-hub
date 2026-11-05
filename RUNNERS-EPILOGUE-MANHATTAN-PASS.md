# Runners epilogue: the Manhattan pass (Nov 5 2026)

You approved the Manhattan extension (`FEMC-RUNNERS-MANHATTAN-PLAN.md`, with your ten answers in its section 7). It's built. Nothing is committed or pushed.

## The short version

- **The act now runs Mon Dec 1 to Wed Dec 31 (31 days, up from 20):** Syracuse to Dec 20, then winter break in Manhattan from Dec 21.
- **The ending moved:** the end card and the Equinox card now come after midnight on New Year's Eve, not after the roof.
- **Free time:** a run has **45 free times, and every one has someone to see** (17 of them in Manhattan). Before this pass it was 28.
- **New scenes:** **23 new story scenes** (41 → 64), **14 new hangouts** (55 → 69), and **Mom and Dad** as people you can spend time with.
- **Longer parties:** Dec 5 is longer through the phone, Dec 12 is about 2.5 times as long and Dec 19 about twice as long.
- **Words: about 91,800 more,** counting every branch of every route (108k → 200k). That's far more than the plan's 30-40k. Every writer gave all three routes their own versions, so one run reads much less. The Haechan route has the most.

## Two things you asked about

- **Haechan's mother (fixed):** the one line borrowed from Better Photography ("my mother isn't well") is gone. Now, in your mother's 6:40 a.m. kitchen questions on Dec 26, he says it once, flat: *"And my mother drinks. She isn't kind when she does, and she does most days. I haven't been home in a while."* He doesn't name her or say more, and no new history was added. Her name, Hyesook, is recorded for later and isn't used yet.
- **Hyein's surname is Lee.** Marco calls her "Miss Lee" (and "another Miss Lee" when the girls arrive together). There's no "Miss Kang" anywhere.

## Family lore added (Nov 5, after your OK; source: `FEMC-RUNNERS-FAMILY-LORE.md`)

I added light touches only: no new scenes, choices or flags.

- **Haechan's 2 a.m. walk** (late night 12/29-30, his route; `people-nyc.js`):
  - Asked where the city's noise isn't in tune, he answers flatly: Fort Lee, fourth floor, no lift, the front door held open with a brick.
  - Solar notices he's sleeping on a couch in Bushwick instead, and doesn't ask why.
  - His phone shows three *Have you eaten?* texts from Mark's mom and one from Mark's dad: *There's a light out in the garage.* He says one line: "That means come over. He's never once said come over."
  - Solar reads the rest: a house up the hill, a bed kept made, and a reason he isn't in it that has Mark's name on it. No names, places or history beyond that.
- **New Year's Eve, if Mark comes** (`story-nyc2.js`): after the container taped for Haechan, Mark adds one line: "It's galbijjim. She's had a pan of it in the oven on low all week. In case."
- **New Year's Eve, the piano** (`story-nyc2.js`): one line of Solar's reading, every route. He never sings, there's no voice on any of his tracks, and whatever shut that door shut it long ago, when he was small. She doesn't know the story, so the line doesn't tell it.
- **His mother** stays as you ruled (Hyesook; she drinks and isn't kind; he's half estranged). The Dec 26 line already fits, so it's unchanged.
- **Fixes for the lore:**
  - Minji's grandmother is in **Leonia** now in every scene; two scenes had said Fort Lee, which is now Haechan's and Mark's town.
  - Nothing already written names Haechan's father or contradicts the town or the names. Mark's mother's bakery box was already from Fort Lee's Main Street.
- **The scholarship:** nothing here touches it, so the book's version stands.
- **Checks:**
  - jsc syntax and `tools/femc-check-scenes.py` are clean. No browser tests.
  - `DATA_V` is 61 and `epilogue.js?v` is 65.
  - Backups of the touched files are in `~/Documents/FEMC Backups/runners-manhattan-2026-11-05/lore/`.

## Choices I made on my own (change any of them)

- **The party "mingle loop" didn't exist yet,** though the plan said it did. I added it to the game, so you walk the room and pick who to go to, 4 or 5 times per party.
- **What she tells Jaehyun on 12/23 has three outcomes at the final:**
  - **Everything:** he puts the name on the desk list himself and stays home on New Year's Eve, so he's in the hold.
  - **Part of it:** he drops in on New Year's Eve and comes back early, as the clocks stop.
  - **Nothing:** he's at the Kaplans' and reaches the roof after she's gone.
- **Manhattan's quiet nights** (Late Night with people) are 12/22, 23, 25, 26, 29 and 30.
- **Small inventions by the writers** (each is listed in its file's header):
  - Haechan's session is with a woman in Brooklyn.
  - Minji's grandmother lives in Leonia.
  - The tenth name on Marco's list is *IORI, J.*
  - At New Year's Eve the track stays untitled ("Not yet.").
  - Your father's "never accept the first one" plays only on Haechan's route.
- **"It's been there since Saturday":** Jaehyun listed Haechan on Saturday, before they left Syracuse, without being asked. I kept that, and your mother quotes the same day.
- **The Christmas Eve guests** are the Kwons and the Kangs. The home pass had already mentioned the Kangs, so both families are at the table, and only the Kwons speak.
- **The housekeeper:** earlier scenes called her "Rosa". She's **Mrs. Oh** everywhere now, matching the plan.
- **Two new flags from the Dec 19 landing scene** (`epi-r-landing-dare` / `-ask`). The 12/22 dossier reads them.
- **A bug fix:** the Syracuse dining hall's time, price and stats were hidden inside a comment, so it showed at every time of day for free. Fixed.
- **Every new place borrows an existing picture until your art comes.** For example, her room uses an elegant bedroom, the lobby a hotel lobby and the roof terrace a city rooftop at night.

## Art

- **33A-33P, sixteen Manhattan places:**
  - the lobby, the service elevator
  - the front room with the piano, the kitchen, her childhood room, the dining room, the hall of photos, the roof terrace
  - the street by day and night, her old school, the park, the reception
  - the car, Penn Station, the subway
  - her Alpha room packed for break
  
  These are now in `RUNNERS-BACKGROUND-PROMPTS.md`, which another session rewrote for the new realistic style.
- **35A-35G, seven CGs:** the twelfth stroke, the sign to nowhere, where wealthy people keep the spices, her childhood room, bar nine, the tenth name, everyone holding on. They're in `FEMC-ART-TODO.md` section 35, with the anchor first, the place (or its stand-in) and the people.
- **New references in Place Prompt Attachments:** `CG - Solji (Runners).png`, `CG - Jaesang (Runners).png`, Jaemin, Jeno, Renjun and Jisung, plus six "(stand-in)" backgrounds (car, kitchen, bedroom, living room, lobby, terrace).
- **Wiring notes** are in `FEMC-ART-WIRING.md`. Nothing is wired until the pictures exist.

## Tests

**Run, and passing:**
- the two Runners sections, `--only runners1,runners2` (84 checks, confirmed by the parent session). These play all three routes through to 12/31 and the end card, and they include new checks for:
  - every Manhattan scene
  - one answer to Jaehyun
  - one guest list
  - the held glitches
- engine (37), saves (8) and glitch (27)

**Not run (your laptop):** the epilogue's fights, HOAX, strangers, Stay, true, phone, alerts, album and polish sections, and every other test file.
- **Most likely to have an issue:** phone and polish. Earlier today polish was already failing on an album count that comes from another session's polaroids.
- **Light checks after the last edits (the mother line):** jsc syntax on every Runners file, and `tools/femc-check-scenes.py` reports no problems (31 days, 64 events, 69 hangouts).

## What to try when you play it

- **Haechan's route to 12/31.** Watch for:
  - the roof on 12/20 holding
  - the phone at 12:01
  - the drive and the first night home
  - the 12/23 talk with Jaehyun (try different answers on different runs)
  - the front desk or the service lift on Christmas Eve
  - the kitchen on Christmas morning
  - New Year's Eve
- **The parties (12/12, 12/19):** walk the room and check the loop feels good, about 4 or 5 picks.
- **The guest list on 12/28:** Mark's invite only shows if his fall left the door open. Try once with him.
- **Manhattan's Go Out and quiet nights:** check that someone is always there and that the borrowed backgrounds don't look too wrong.
- **Watch for the quieter glitches after 12/21:** her portrait thinning, a copy of her lagging behind, a place's name going blank. Check they're eerie, not buggy.
- **One cover run and one Minji run:** both should work, and Minji should be on the roof at the end.
- **Save in Manhattan and load it,** to check the place and the screens come back right.

## Files touched

- **New:**
  - `assets/femc/game/data/epi/runners/story-nyc1.js` (12/21-12/25)
  - `story-nyc2.js` (12/26-12/31)
  - `people-nyc.js` (Manhattan hangouts)
- **Runners data:**
  - `calendar.js` (to 12/31)
  - `world.js` (Manhattan phase, places, cast, lines, quiet nights, the dining fix)
  - `glitches.js` (the held layer)
  - `story-w1.js`, `story-w2.js` and `story-w3.js` (the parties, the new roof)
  - `story-home.js` (porch flags, Mrs. Oh)
  - `phone.js` (Mrs. Oh)
- **Engine:**
  - `epilogue.js`: the map by date, the place name, `DATA_V` 60
  - `scene.js`: the mingle loop
  - `glitch.js`: erase, late, and the held pool
  - `core.js`: exports `varyAll`
  - `ui.js`: the forecast's place
  - `epilogue.css`: the held glitches
- **Page:** `femc-game.html`, version bumps (core 86, scene 32, epilogue 64, glitch 5, ui 74, epilogue.css 15).
- **Tools and tests:** `tools/femc-check-scenes.py`, `tests/femc_epilogue.py`.
- **Docs:** `FEMC-ART-TODO.md`, `FEMC-ART-WIRING.md`, `FEMC-RUNNERS-MANHATTAN-PLAN.md` (section 8, status), `FEMC-RUNNERS-EPI-EXPANSION.md` (section D), `FEMC-STATUS.md`, this file.
- **CLAUDE.md** isn't touched, because another session asked for that edit and my rules don't allow it on another session's request. The handoff note is below, ready to paste in if you want it.

**Backups:** every file from before I edited it is in `~/Documents/FEMC Backups/runners-manhattan-2026-11-05/`.

## Handoff note for CLAUDE.md (for Claude sessions; not spoiler-safe)

**Runners epilogue, the Manhattan pass: built (2026-11-05), Kat's approval of FEMC-RUNNERS-MANHATTAN-PLAN.md (summary: RUNNERS-EPILOGUE-MANHATTAN-PASS.md).**

- **Calendar:** the Runners act ends 12/31. `calendar.js` has a winter break 12/21-12/31 and holiday labels on 12/24, 12/25 and 12/31.
- **Engine:**
  - `epilogue.js`: `places.phases [{ from, name, home, school, variants }]`, with `phaseNow` / `homeOf` / `schoolOf` / `placeName`. `line()` reads `variants.<key>.<path>` first.
  - `scene.js`: `{ mingle: { pick, min }, choose: [...] }` (options with `leave: true` end the loop; what's taken is stored in the queue as `mingle._taken`).
  - `glitch.js`: kinds `erase` and `late`, and `glitch.held { from, ambient }`, which replaces the ambient pool from that date.
  - `core.js`: exports `varyAll`.
  - `ui.js`: the forecast uses `FemcEpilogue.placeName()`.
- **Runners data:**
  - `world.js`:
    - the Manhattan phase from 12/21
    - the `Manhattan · …` bg rules, each borrowing a picture with a `→ slug (33X)` comment
    - five Manhattan activities from 12/21; the Syracuse ones end on 12/20
    - `lateOpen` gains 12/22, 23, 25, 26, 29 and 30
    - name-only cast: party voices, Marco, Mrs. Oh, the Kwons, velvet, reporter, Kaplan, Theo, suanon
    - `variants.nyc`
  - `glitches.js`: the held pool, plus inline ids `epi-r-g-footprints` … `epi-r-g-1159`.
  - **The roof:** `epi-r-rooftop` no longer `ends`; `epi-r-midnight` (12/31 late, in `story-nyc2.js`) does.
  - **The parties:** `epi-r-friday`, `epi-r-sigma` and `epi-r-holiday` are rewritten with mingle loops, by Writer A, and keep every old effect.
  - **New events:** `story-nyc1.js` (12/21-12/25) and `story-nyc2.js` (12/26-12/31).
  - **New hangouts:** `people-nyc.js`, with new bonds `mom` / `dad` named via `bondName`.
- **New flags:**
  - `epi-r-caption-down` / `-read` / `-fought`
  - `epi-r-porch-fetch` / `-stand`
  - `epi-r-car-fetched`
  - `epi-r-greenwich-soft` / `-flat`
  - `epi-r-dossier`
  - `epi-r-jh-all` / `-part` / `-none`
  - `epi-r-entry-desk` / `-service` / `-listed`
  - `epi-r-angry-no` / `-honest`
  - `epi-r-nye-mark` / `-no-mark`
  - `epi-r-landing-dare` / `-ask`
  - `epi-r-gift-*`
- **Canon rulings (Kat, Nov 5):**
  - Haechan's mother is Hyesook: emotionally abusive and an alcoholic, not ill. He says little.
  - Hyein's surname is Lee.
  - The housekeeper is Mrs. Oh (the old "Rosa" lines were renamed).
- **Totals:** events 41 → 64, hangouts 55 → 69, words about 108k → 200k (all branches).
- **Art:** 33A-33P are in `RUNNERS-BACKGROUND-PROMPTS.md`; 35A-35G are in FEMC-ART-TODO.
- **Tests:**
  - `femc_epilogue.py` gets `NYC_BEATS` / `NYC_EVENTS`, route checks to 12/31, and the engine / saves / glitch checks mark the 12/1 welcome seen.
  - **Kat's laptop can't take the browser suites:** use jsc and `tools/femc-check-scenes.py` unless she asks.
- **Backups:** `~/Documents/FEMC Backups/runners-manhattan-2026-11-05/`.
