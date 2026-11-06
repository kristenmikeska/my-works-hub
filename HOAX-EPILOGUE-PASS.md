# HOAX epilogue: the expansion pass (Nov 5-6 2026)

You asked for the other epilogues to be longer, with the same improvements the Runners epilogue got, and for more Nana. This page covers what changed in HOAX. I've kept what happens in the new scenes out of it, so they stay a surprise. Nothing is committed or pushed.

## The short version

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
