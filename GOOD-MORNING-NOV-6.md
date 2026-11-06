# Good morning! What happened overnight (Nov 5–6 2026)

Everything is committed on the laptop and **not pushed**. Say "push" when you're happy. No spoilers on this page, and none in the files it points to, except the ones named `DO-NOT-OPEN-…`.

## The three other epilogues got the Runners treatment

| | strangers | HOAX | Stay |
|---|---|---|---|
| Story scenes | 38 → **41** | 35 → **38** | 16 → **20** |
| Hangouts | 33 → **50** | 38 → **51** | 15 → **27** |
| Everyday routines | 8 | 9 → **11** | 5 → **7** |
| Words (every branch) | ~108k → **~142k** | ~79k → **~99k** | ~19k → **~30k** |
| Free times with someone to see | 38 → **49** | 28 → **38** | 22 → **28** |
| Hangouts on offer in one run | ~28 → **~42** | ~32 → **~45** | ~15 → **~25** |

What kind of things were added, in all three:
- **Late Night**: on quiet nights, the people still up are listed above Sleep, like in Runners.
- **No empty evenings**: every free time now has someone to see.
- **More of the friends, the family and home**, not only the love interest. More of the crew and Cherry in HOAX; the people with the fewest scenes got more in each world.
- **Weather that matches the story** on every day.
- **More phone**: texts that fit the week, new things Solar knows on contact cards, new message topics.
- **Small continuity fixes** where the old scenes disagreed with each other. Each world's summary lists them.
- **More Nana** in HOAX: new morning moments, screen lines, texts, and he turns up where he'd really be. The snowy-window scene from yesterday now plays on a school evening (1/8), because as an everyday routine it could only have landed on a Sunday, while it has her coming home in her uniform.
- **strangers** has a long new party. It's in the questions as trim or keep.

Per-world summaries (spoiler-free): `STRANGERS-EPILOGUE-PASS.md`, `HOAX-EPILOGUE-PASS.md`, `STAY-EPILOGUE-PASS.md`.

## Questions for you (spoiler-free, each has a default if you'd rather skip it)

- `STRANGERS-EPILOGUE-QUESTIONS.md`
- `HOAX-EPILOGUE-QUESTIONS.md`
- `STAY-EPILOGUE-QUESTIONS.md`

Answer in chat, like "strangers 3: yes, 5: keep it", whatever's easiest.

## New art on your list (FEMC-ART-TODO.md)

- **Section 34 (strangers):** the harbor by day (from yesterday), a tent bar under the overpass, and 3 new CGs.
- **Section 36 (HOAX):** 3 places (the Kims' front step at night, Cherry's room, Hyunsuk's car) and 3 CGs, including Nana at the window.
- **Section 37 (Stay):** 3 optional CGs in the P3 Reload style.

Every new place shows a borrowed background until its picture exists. New reference copies are in Place Prompt Attachments: realistic portraits for the strangers cast and a few HOAX ones, plus `CG - Nana (HOAX).png`, cropped from the swings polaroid.

## Also done last night

- **The 11 new Solar outfits** are in the Wardrobe with their own looks in battle, and there are two new banners: **Midnight Chapel** (October) and **Wildflower Cottage** (May). Still to make: the second pose sheet for Black Rose, Rainy Greenhouse and Harvest Festival (prompts on the outfit design sheet).
- **The last Echo sheet**: all 121 Echoes have art.

## Ideas, if you want more (1, 3 and 4 are built now; the rest aren't)

1. ✅ **Built.** **Polaroids for strangers, HOAX and Stay's new hangouts.** The Album already has room for them, and each new world got a few hangouts that would make a good photo. I can write the prompts.
2. **Runners' 14 optional hangouts** from its first plan are still unwritten. Best decided after you've played it.
3. ✅ **Built.** **SUnews-style alerts for HOAX.** HOAX has its own forum (the WHERE IS THE COUNCIL threads). The alert banner Runners uses could pop up when a new thread drops.
4. ✅ **Built.** **A "who's up tonight" text before Late Night**, so you know someone's awake before you pick Sleep.
5. **Nana in the Photo Booth** as a partner for the HOAX epilogue. He'd need one small pose sheet.
6. **Outfit lines for the 11 new outfits**: the little reactions when someone notices what Solar's wearing.

**What got built from 1, 3 and 4 (Nov 6, not pushed):**
- **Polaroids:** 19 new ones on your list as **section 39** of FEMC-ART-TODO.md (strangers 7, HOAX 7, Stay 5, Stay's in its anime style). Every one is a hangout that's open on every route, so nothing hints at anything. The game's already set up for them: each one shows up in the Album (and drops in the first time its hangout ends) as soon as you drop the picture in, same as the Runners ones. New reference copies are in Place Prompt Attachments (a few portraits and backgrounds made from the game's own art).
- **Hanlim Forum alerts:** 9 banners in HOAX, one when a new thread drops, in the forum's own voice. Like SUnews: between scenes, one a day at most, tap opens the phone.
- **"Who's up" texts:** in all four epilogues (64 in all: Runners 17, strangers 19, HOAX 18, Stay 10, with group chats in each). On a quiet night where someone's still up, one of them texts as the late screen opens, so you know before you pick Sleep. One a night at most, never on a big story night.

## For the PC (heavy tests)

On the PC, `tests/femc_epilogue.py` will need its counts updated for strangers, HOAX and Stay (new events and hangouts). I didn't run any browser tests on the laptop. The light checks (every data file loads, the scene check) all pass.
