# HOAX epilogue: the expansion pass (Nov 5-6 2026)

You asked for the other epilogues to be longer, with the same improvements the Runners epilogue got, and for more Nana. This page covers what changed in HOAX. I've kept what happens in the new scenes out of it, so they stay a surprise. Nothing is committed or pushed.

## Second pass (Nov 6): your answers, built

You answered the questions, so this pass builds what you said yes to. Nothing is committed or pushed.

- **More free time at the end:** the last two days had **2** free times. They now have **4**: one more Late Night, and the last school afternoon is free (council duty is a choice that day). Across the whole act that's **40** free times, up from 38. One scene that crowded the last evenings can now also happen on a late night earlier that week.
- **More to play:** about **16,000 more words**. The act goes from about **100,000 to about 116,000** words, counting every line on every branch once.
- **New scenes:** 8 short story moments that take no time, and 10 new hangouts. **61** hangouts in all, up from 51, and a run now has about **54 on offer**, up from 45. Two new people have hangouts of their own.
- **The longer party:** the winter-break party now has a part where Solar moves round the house and talks to the rest of the school, room by room. You pick where she goes, and what happens depends on your route. There are five rooms, and you have time for up to four of them.
- **More Nana:** he's in most of the new scenes, with nearly everyone, plus new texts, phone lines and screen lines. Solar's own lines no longer call him a cloud. Other people still can.
- **Your three ideas:** all three are built: the dog date, time with Kazuha and with Eunchae, and calls from Solar's dad.
- **Fixes from your answers:**
  - Jungwon's house is about a block away everywhere now (six lines changed).
  - The make-up exams are in Room 3-4 everywhere.
  - The older group-chat text matches its scene.
  - Nana is sixty pounds everywhere.
- **No new flags.** No existing flag, route, ending, fight or date was changed.

**New art (`ART-ADDS-hoax-2.md`), 5 items, numbered 36G-36K:**
- **2 places:** a car at night and a café's back door. Until they're made, the game uses stand-ins.
- **3 CGs:** the dog date, a Christmas-night moment with Nana, and the party.
- Two new reference copies are in Place Prompt Attachments: `CG - Jungwon (HOAX).png` and `BG - The Party (HOAX).png`.

**Questions:** 7 new ones at the bottom of `HOAX-EPILOGUE-QUESTIONS.md`. They include the names I made up for Solar's parents.

**What to try:**
- Play the party on any route.
- Play the last two days.
- Try the afternoons in the week after New Year.
- Try the quiet nights in the first week of January.

**Checks:** `tools/femc-check-scenes.py` says **OK, no problems**, and every new and edited file loads cleanly. As you asked, I ran no browser tests.

**Files:**
- **New:** `story-party.js`, `story-nana.js`, `people-last.js`, `people-extra.js` and `texts-nana.js`, all in `assets/femc/game/data/epi/hoax/`.
- **Edited:**
  - `world.js` (more time, two stand-ins, the party's new names, Nana lines).
  - `story-w2.js` (the party's new part goes in here).
  - Small wording fixes in `story-w1.js`, `story-w3.js`, `story-days.js`, `people.js`, `people-late.js` and `people-crew-late.js`.
  - The HOAX line in `epilogue.js`.
- **Backup** from before this pass: `~/Documents/FEMC Backups/hoax-epilogue-2026-11-06/`.

## The short version (first pass, Nov 5-6)

- **More free time:** a run had **28** After School and Evening times free. It now has **38**, because 12 quiet nights now have Late Night time with someone before bed. Every one of those nights has at least one person to see.
- **More to play:** about **20,000 more words**, counting every narration line, dialogue line, text and choice on every branch. The act goes from about **79,000 to about 99,000** words.
- **New scenes:** 2 new story scenes, 3 new everyday moments, and 13 new hangouts. A run now has about **45 hangouts on offer, up from 32**.
- **More Nana:** he's in most of the new scenes, plus new texts, phone lines and screen lines. You asked for more of him, so he got the most.

## What kinds of things were added

| | |
|---|---|
| **More time with the crew** | Solar's own friend group gets more of her: late calls, a drive, the café after hours, a 3 a.m. group chat. Cherry gets three more scenes. |
| **Late nights** | On nights without a story scene, Late Night shows who's still up, above Sleep. |
| **The social world** | One scene is about where Solar sits when both friend groups are in the same room. |
| **Home** | More of her mom and dad, and the house. |
| **Nana** | New morning moments, more lines on the everyday screens, and a dog who shows up wherever he'd really be. |
| **The weather now matches the story** | Every day's weather is fixed to what the scenes say (snow when it's snowing in a scene, a clear night when the moon matters), and snowy days frost the windows the way they do in Runners. |
| **Phone** | 10 more texts that fit their week, a new message thread, and new contact lines and topics. |
| **A fix** | Your Nana-in-the-snow moment from Nov 5 could almost never come up because of a timing rule. It now plays on the first day back at school, word for word. |

## Choices I made on my own (change any of them)

- Two of the new story scenes each take one free time (a Daytime and an Evening). The new late nights more than make up for it.
- Three writers wrote the hangouts and the everyday moments from one brief, using the HOAX and kat-voice skills. I wrote the texts and checked everything against the existing scenes.
- Some of the facts the writers made up for HOAX (people's cars, rooms, family details) are listed as questions.

## New art (`ART-ADDS-hoax.md`)

Six items, all in the realistic HOAX epilogue style, ready to paste into the art list:

- **3 places:** Solar's front step at night, Cherry's room, Hyunsuk's car. Until they're made, the game uses stand-ins.
- **3 CGs:** getting ready at the mirror, one on the front step, and one of Nana.

New reference copies are in Place Prompt Attachments: `CG - Solar / Cherry / Jihoon (HOAX).png`, the two party looks, `CG - Nana (HOAX).png` (cut from the "swings" polaroid), `BG - Solar's Room (HOAX).png` and `BG - Kim House (evening).png`.

## Questions

They're in **`HOAX-EPILOGUE-QUESTIONS.md`**: 12 short ones plus a few ideas I didn't build. All of them are spoiler-free.

## Checks

- `tools/femc-check-scenes.py`: **OK, no problems.** It checks faces, cast names, places and ids.
- Every new and edited file loads cleanly.
- As you asked, I ran no browser tests.

**What to try:**
- Play the late nights in week 1 and between Christmas and New Year.
- Watch the Daytime of the party day.
- Try the last Sunday before school.
- Check that the snow on the date card matches the scenes.

## Files

- **New:** `assets/femc/game/data/epi/hoax/story-days.js`, `people-late.js`, `people-crew-late.js` and `texts-more.js`.
- **Edited:**
  - HOAX's `world.js`, `calendar.js` and `story-w2.js` (the Nana fix).
  - The HOAX line in `epilogue.js`, so the new files load.
- **Backups:** the whole HOAX folder from before this pass is in `~/Documents/FEMC Backups/hoax-epilogue-2026-11-05/`.
