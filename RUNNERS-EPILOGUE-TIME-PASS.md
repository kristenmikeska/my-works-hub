# Runners epilogue: the time pass (Nov 5 2026)

You approved the "more time" set and the rest of the story gaps from `FEMC-RUNNERS-EPI-EXPANSION.md`. Here's what changed. I've kept what happens in the new scenes out of this page so they stay a surprise. Nothing is committed or pushed.

## The short version

- **More free time:** a run had 17 free After Class / Evening times with someone to see. It now has **28, and every one has someone to see**. There are **50 to 51 hangouts on offer per run**, up from 32.
- **More to play:** about **22,700 more words**, counting every narration, line, text and choice on every branch. That takes the act from about 85,600 to about 108,300 by this count. (The home pass's "82k → 89k" used a narrower count, so the numbers aren't directly comparable.)
- **New scenes:** 3 new story scenes and 20 new hangouts, plus small edits to older scenes.

## More time (Section C)

| | What changed |
|---|---|
| **C1 · Late Night** | On 12/3, 12/8 through 12/13, 12/15 and 12/17, Late Night shows the people still up above Sleep. A hangout uses the night, then she sleeps. 12/5, Regionals, fight nights and nights with a late story scene stay as they were. |
| **C2 · Empty times** | 12/20 After Class is now a real last-practice scene. 12/20 Evening comes after Jaehyun's porch scene and has five goodbyes to choose from. (12/1 Evening was filled last pass.) |
| **C3 · Optional practice** | On 12/9 and 12/13, Practice is the first choice in Go Out, so you can practice for the stat or see someone. One later line notices if she skipped Tuesday. |
| **C5 · Longer windows** | Mark's, Jaehyun's, Chenle's and Jaemin's week-1 hangouts stay open until 12/10. Each one has a line or two for after Regionals, so seeing it late reads right. |
| **C7 / gap 14 · Dec 7 Evening** | It's part of Regionals day two now. |

## Story gaps (Section A)

| Gap | Where it is now |
|---|---|
| 6 | The last practice: 12/20 After Class, every route. |
| 7 | The morning after the crossroads: 12/8 Morning, a different scene for each route. |
| 9 | A glimpse of Mark, with no conversation: 12/13 After Class. |
| 12 | Mom's card: one exchange at the 12/16 breakfast, only if you never went to Jaehyun's "helpful". |
| 13 | Haechan's Thursdays, in his words: Haechan's route only, **12/19 After Class** (see the choices below). |

## New hangouts (Section B)

| Who | New ones |
|---|---|
| Haechan | 3 (two late nights, one afternoon) |
| Hanni | 3 |
| Hyein | 3 |
| Minji | 3 |
| Danielle | 2 |
| Mark | 2 |
| Chenle | 1 |
| Jaemin | 1 |
| **The team** (Olivia, Haerin and Doyoung; it shows as "The team" in Go Out) | 2 |

They're ticked in the expansion doc. Five of them are 12/20 goodbyes: Hanni, Hyein, Minji, Mark and Danielle.

## Choices I made on my own (change any of them)

- **Gap 13 isn't a late night.** In "low tide", Haechan says he'll tell her the rest "when I've been more than once". The second Thursday is 12/18, and there's no free Late Night after it, so his scene is 12/19 After Class, after her last final.
- **The porch scene no longer uses up 12/20 Evening.** That's what made room for the goodbyes after it.
- **"Porch rail" became a Haechan-route late-night scene (12/9-12/13),** because the text it comes from is a Haechan-route text. That text now waits until 12/14 and only arrives if you didn't play the scene, so it never shows up twice.
- **The team is one new bond** (shown as "The team", stored as `olivia`). Its closeness starts at 0.
- **The prose:** I wrote the three story scenes. Three writers wrote the 20 hangouts from one brief, using the runners and kat-voice skills, and I checked their canon questions (for example, Solar already knows Mark knew who she was when they met).

## Art: added to `FEMC-ART-TODO.md` (section 32)

New CGs, all realistic Runners epilogue style. Each prompt has the `CG - style (Runners).png` anchor first and the place's background attached:

- **32D** the porch rail (`epi-r-porchrail`)
- **32E** the window seat (`epi-r-window-seat`)
- **32F** see you in january (`epi-r-january`)
- **32G** room tone (`epi-r-room-tone`)
- **32H** half speed (`epi-r-half-speed`)

**New reference copies in Place Prompt Attachments:**
- `CG - <name> (Runners).png` for Solar, Hanni, Hyein, Jaehyun, Haechan, Mark, Minji, Chenle, Olivia, Haerin and Doyoung
- `CG - Solar / Hanni / Hyein (Runners holiday).png`
- `BG - eSports Lab.png`

**Fixed:** the copies that 32A-32C asked for (`CG - Solar (Runners).png`, the holiday ones, Jaehyun's) weren't actually in the folder. They are now, made from the game's own Runners portraits.

**List cleanup:** I checked every "Save as" name on the list against the game. None of them are already in, so nothing had to be removed.

**No new places were needed.** Every new scene uses a place that already has a picture (or the stand-ins already listed in 23F-23N).

The wiring notes for 32D-32H are in `FEMC-ART-WIRING.md`. Nothing is wired until the pictures exist.

## Tests

- `tests/femc_epilogue.py --only runners1,runners2`: all 79 checks pass. That includes three full route runs through the game's own screens to the end card, a quiet night, the optional practice and the closed 12/5 night.
- `--only phone,alerts,album`: all 47 pass.
- Also clean: the engine, saves, HOAX, strangers, Stay and true sections, and `tools/femc-check-scenes.py`.
- One check fails: `polish`'s album count. It still expects 8 Runners album tiles, but there are now 19 (CGs, posts, and the Runners polaroids another session added on Nov 5). That's not from this pass, so I left it for that work.
- The engine and saves checks were updated to mark the home pass's 12/1 welcome scene as seen. That scene fills 12/1 Evening, which those older checks didn't expect. I missed this last pass because I only ran the Runners sections.

## Still missing / not done

- **Section B ideas not built:** Haechan "a quarter-tone flat" and "Media and Society"; Hyein "tape measure"; Minji "three monitors" and "duo, after"; Mark "someone's notes"; Jaehyun "treatment, again" and "the plaque"; Chenle "Dutch Bros" and "three angles"; Jaemin "bold".
- **C4** (weekend mornings) and **C6** (hangouts for two).
- **The Manhattan homecoming:** still your call. I left it out.
- **The art:** the eight section-32 CGs and the section 23 places.

## Files touched

- **New:** `assets/femc/game/data/epi/runners/story-time.js` and `people-time.js`.
- **Runners data edits:** `world.js` (`lateOpen`, `optional`), `story-w1.js` (12/7), `story-w2.js` (the studio's practice line), `story-w3.js` (Mom's card), `story-home.js` (the porch), `people.js` (week-1 windows, the card flag, the porch text), `people-w3.js` (the merge helper).
- **Engine:** `assets/femc/game/epilogue.js`: Late Night people, optional practice, the bond name, `DATA_V` 59.
- **Page:** `femc-game.html` (epilogue v62).
- **Tools and tests:** `tools/femc-check-scenes.py`, `tests/femc_epilogue.py`.
- **Docs:** `FEMC-ART-TODO.md`, `FEMC-ART-WIRING.md`, `FEMC-RUNNERS-EPI-EXPANSION.md`, `FEMC-STATUS.md`, and this file.
- **CLAUDE.md is not touched.** The handoff note for it is at the end of this file, ready to paste in if you want it.

**Backups:** every file from before I edited it is in `~/Documents/FEMC Backups/runners-epilogue-time-pass-2026-11-05/`.

## Handoff note for CLAUDE.md (for Claude sessions; not spoiler-safe)

**Runners epilogue, the time pass: built (2026-11-05), Kat's approval of FEMC-RUNNERS-EPI-EXPANSION's "more time" set and the rest of the gaps (summary for her: `RUNNERS-EPILOGUE-TIME-PASS.md`; spoiler-free line in FEMC-STATUS).** Engine (epilogue.js header documents it): world `lateOpen ['M/D']` → `late()` lists people with a `slots: ['late']` hangout above Sleep (`.g-epi-late`, `[data-sleep]`); `sleepNow()` (the route lock + core.js sleep; `advance()` from the late slot uses it, so a late hangout sleeps after); `practice.optional ['M/D']` → `practiceOpt()` puts Practice first in Go Out's places (`[data-act=_practice]`, spent 'practice', flag `epi-practice-M-D`); a bond's `name` (`bondName`; `olivia` is "The team"). Runners data: world.js `lateOpen` (12/3, 8-13, 15, 17) and `optional` (12/9, 12/13); new `story-time.js` (`epi-r-morning-after` 12/8 early per route, `epi-r-mark-alone` 12/13 after, `epi-r-last-practice` 12/20 after) and `people-time.js` (20 hangouts by three writers to one brief: 13 late, 5 goodbyes on 12/20 evening, 2 team; the Thursday scene is 12/19 after); regionals-2 fills 12/7 evening; the porch no longer consumes 12/20 evening; mark-1 / jaehyun-1 / chenle-1 / jaemin-1 run to 12/10 with ifEvent touches; jaehyun-2 sets `epi-r-card-signed`, read by the kitchen's card line; the studio opening branches on `epi-r-practice-12-9`; people.js's ambient porch text moved to 12/14 with `noFlag: 'epi-r-porchrail-seen'`. The bonds' `add` helper (people-w3.js, people-time.js) now merges everything held so far when people.js assigns the bond (the checker loads files alphabetically and was dropping week 3's hangouts). tools/femc-check-scenes.py allows late hangouts on lateOpen nights. Events 38 → 41, hangouts 35 → 55, words about 85.6k → 108.3k (all branches). Tests: femc_epilogue.py runners1 (25 beats, a `tp` check of the optional practice, a quiet night and 12/5), runners2 (16 beats, 41 events, walk 41 + 11 + 55); the engine and saves checks now mark the home pass's 12/1 welcome seen before expecting Go Out that evening. DATA_V 59, epilogue v62. Art: FEMC-ART-TODO 32D-32H. Backups: `~/Documents/FEMC Backups/runners-epilogue-time-pass-2026-11-05/`.
