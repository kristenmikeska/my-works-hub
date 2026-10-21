# FemC playtest notes — reconciled tracker

Updated 2026-10-20 from `/Users/katarinagrande/Downloads/My Works Hub (1).docx`. The source remains unchanged. It contains the earlier 56 nonempty entries, eight new entries (57–64), and a typo correction in 51. Entry numbers below refer to extracted nonempty paragraphs, including concept headings.

These are playtest observations, questions, canon corrections and design ideas. They do not authorize implementing every proposal. “Complete” means the specific local fix was already recorded and tested, not that the entire surrounding feature is finished or published. Nothing is pushed.

## Completed local fixes

| Entries | Recorded resolution |
|---|---|
| 4 | Activity benefits/cost/time previews and confirmation before spending a slot. |
| 28 | Wren removed from free-time Go Out options; story progression retained. |
| 33 | Party/equipment preparation before forced boss fights. |
| 34 | Phone threads sorted by newest message. |
| 41 | Jihoon arrival/rank-one repetition and unsupported cross-world knowledge corrected. |
| 54 | Jihoon’s conflicting lodging references corrected; Jungwon uses the guesthouse. |
| 55 | Late recruitment level correction and Minji’s introductory-boss damage options fixed. |
| 58 | Scene-opening keyboard dismissal and duplicate replay fixed; native keyboard and one-time completion checked. |
| 59 | Minji’s Junpei wording corrected; no implied second-world Junpei. |
| 61 | Junkyu’s friend descriptions and homecoming history corrected to Kat’s ruling. |
| 62 | Older-memory versus disappearance-night distinction clarified. |
| 64 | Explicit household introductions and an in-world encounter added; related lodging callback corrected. Story pass: Haechan's first in-world meetings with every searcher who knows him (and Jungwon's with his) now play on screen, after each person has arrived. |
| 54, 65, 75 | Housing ruling applied to the story and daily life: Haechan moves into the dorm after arriving and keeps his distance at first; Jihoon lives at the guesthouse; dorm/guesthouse references corrected throughout the story files. |
| 57 | Breakfast at the dorm is shown as a visit (visitors' list, guests leave by eight); the routine that sets up the later breakfast callback now exists. |
| 62 | Re-verified in the story pass: the older memory is clearly distinguished from the disappearance. |
| 66 | Each searcher awakening now has its own trigger, setting and stakes; Haechan's is a high-stakes scene tied to both his worlds; Jungwon acknowledges carrying two lives. Battle hooks unchanged. |
| 77 | Solar's own texts and phone choices use her novel texting voice everywhere; friends react to what she says rather than how she types. |
| 24 | Texts feel real (2026-10-21, polish batch): a phone banner and notification chime when a text arrives, a typing bubble before each incoming text, texts arriving one at a time, and Solar's answer typing out and sending with a whoosh; follows Text speed, Auto and reduced motion, with Skip. Scene phone lines type too. Group chats now name the sender in every multi-person thread. `tests/femc_polish.py`. |
| 39 | Softer pink slashes (2026-10-21): the site skin's full-screen stripes no longer sit over the HUD, text boxes or battle menus; the game's own are thinner, fainter and kept to the edges. |
| 70 | Read all on the phone (2026-10-21); newest threads stay on top (34). |
| 22 | P5R-style social stats screen with a sun level-up animation on every rank-up (2026-10-21). Built for today's three stats and ready for the five P5 stats; the five-stat migration itself is still to do (roadmap section 7). |
| 72 (with 4) | P5X-style Go Out menu (2026-10-21): slanted art cards, descriptions and benefits on hover / focus, who's there today with portraits, touch and pad friendly; the activity review before spending a slot is unchanged. |
| 1, 44, 2, 38, 71, 6, 30, 36, 37, 69 | Living world, part 1 (2026-10-21). **1, 44:** 59 new everyday routines (77 in all) across the whole year and every time of day: teachers (Mr. Ekoda, Mr. Ono, Mr. Edogawa, Ms. Toriumi) and students at Gekkoukan, S.E.E.S. at home, the searchers' days once they've come; each plays once, the one closest to going stale first, some choices give a stat. **2, 38, 71:** 51 texts that react a day or two after a rank scene, 29 daytime texts and group chats with their own windows, and texts the night before each full moon. **69:** late nights for Akihiko (in the dorm), Jungwon and Jihoon (visits that end at the gate, walks, calls), by rank, route and the kind of night. **6:** holiday invites (22, across the P3 calendar) that you only get by spending the day with that person. **30:** Solar's birthday on 6/24, with a surprise party. **36:** Yakushima has a day plan: three days of scenes and picks of who to spend them with. **37:** a build-up scene before each full-moon operation. `tests/femc_living.py`. |
| 5, 21, 20, 7, 25, 67, 26 | Living world, part 2 (2026-10-21). **5, 21:** job shifts no longer repeat: every job has 11-16 full shifts with regulars, seasons and a small story across the year, then short moments that change by month; three new jobs (Chagall Café, Hagakure's kitchen, the shrine's amulet stall); often-seen lines (mornings, lunch, class, bedtime, studying, every activity) have many more versions. **20:** 54 run-ins while out, working or at a club, as people arrive (S.E.E.S., the Persona cast, visitors, searchers). **7:** four clubs (tennis with Rio, with extra scenes on her romance route; the library committee; the light music club; the gaming club). **25, 67:** the Persona cast belongs to this world: ordinary texts, nobody leaves early, holiday invites for Ann, Kasumi and Haru. **26:** Kuromi and My Melody are exchange students living in the dorm, Kuromi's link is rewritten and deeper, and My Melody is a hidden link. `tests/femc_living2.py`. |
| 78, 53 (story side) | Hoax canon state (election over) reflected in the story and the Hoax ending; Jihoon's story-scene voice revised toward HOAX. Link-side Jihoon work is tracked by its own writer. |

## Partly addressed; broader request remains

| Entries | Coverage and remaining work |
|---|---|
| 49 | Story pass: eighteen arrival-aware routines and a story event where searchers from different worlds compare what they know of Solar; the wider daily variety is done (living world, above). |
| 2, 38, 71 | Done (parts 1 and 2): run-ins can leave a follow-up text, and the Persona cast has reactive texts. |
| 45, 50, 60, 76 | Story pass: the come-home asks and several routines acknowledge her love lives back home, naturally and not in every scene. Link-level coverage continues in the link files. |
| 74 | Story side ready: readable lean flags exist for the link writer; the settling arc itself lives in Haechan's link. |
| 42, 43 (story side) | The arrival-day introduction now responds to the player's actual answer and no longer uses the repeated restart wording. |
| 42, 43 | Early dialogue/callback corrections completed. Whole-link repetition and later branches still need review. |
| 52 | Minji’s guesthouse room is now established. Broader story integration remains. |
| 57 | Junkyu/Asahi/Hyunsuk/Jaehyuk stay at the guesthouse. Breakfast at the dorm is a visit, not enrollment or residency. Clarify this in the narrative if needed. |

## Eight new entries

| Entry | Triage |
|---|---|
| 57 | Lodging/enrollment question: answered by the housing split above; review on-page clarity. |
| 58 | Fixed locally: title cards now accept Enter/Space; scenes take keyboard focus, held keys cannot queue replays, and completion runs once. Verified in an isolated browser, including a complete Social Link and calendar return. |
| 59 | Confirmed wording in current Minji **rank five**, not rank four: “biggest mouth in two universes.” Junpei is not established as belonging to a second world. Fixed locally: the joke now concerns his repeating a lounge conversation. |
| 60 | Clarifies entries 45/50: some natural acknowledgment of home relationships, without making every novel link about romance. Needs knowledge-aware review. |
| 61 | Direct canon correction for Junkyu **rank three**: Jaehyuk is the smart one and serves on Student Council. Hyunsuk wants others to think he is smart. His homecoming date was Cherry; Cherry/Hyunsuk had a situationship before Cherry started seeing Sunghoon. Fixed locally in the scene, including Cherry’s name and the relationship sequence. Preserve these facts in future edits. |
| 62 | Fixed locally: the dialogue explicitly distinguishes the older memory from Solar’s later disappearance, including the optional response. No novel cutoff date imposed. |
| 63 | Reviewed: the existing text explicitly interrupts the reference. Its precise motive is not established by that wording. Preserved the scene rather than inventing a definitive explanation; broader knowledge review remains. |
| 64 | Addressed locally: a scheduled morning introduction establishes household familiarity and the first encounter in this world, independent of optional link ranks. Corrected a later lodging reference. Broader later-scene knowledge review remains. |

## Held or awaiting design

- 3: weapon artwork remains on hold by Kat’s explicit instruction. Existing equipment mechanics are separate from these prepared designs.
- 8–19, 31, 35, 47: stat/skill/synergy/presentation/gacha/post-MAX proposals require scoped design; concepts are not settled specifications. (6, 7, 26 and 30, holidays, clubs, Kuromi/My Melody and the birthday, are built.)
- 56: “Buffs and debuffs stack” needs its intended behavior clarified during the combat pass. Do not infer whether this is a bug report or a desired rule.

## Other unresolved notes

Entries 23, 27, 29, 32, 40, 46, 48 and 51 remain pending (5, 21 and 25 were built in living world part 2) (36 and 37 were built in living world part 1) (24 and 39 were built in the 2026-10-21 polish batch) beyond any existing baseline features (2, 38, 45, 50 and 53 are partly addressed above). In particular, the Akihiko/Shinjiro wording and relationship continuity, Jihoon’s deeper characterization, broader messaging, battle presentation, Rush behavior and Tartarus menu work are not complete. Entry 51 overlaps the separately parked combined-game work; do not report that integration as finished.

Next small batches: entry 60 and the broader home-relationship/knowledge review, alongside the remaining later-rank character audit. Entries 58/59/61/62 and the introduction gap in 64 are complete locally. Entry 63 has been reviewed without rewriting its ambiguity. Read the newly updated Runners skill and installed local Strangers skill before that narrative work. Keep the novel/game continuities distinct and preserve the approved Mark rank-nine dialogue.
