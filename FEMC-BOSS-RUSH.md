# Velvet Trials: the boss rush (built 2026-11-01)

Kat approved a boss rush in the Velvet Room on Nov 1, in the spirit of the challenge and battle-rush modes in gacha Persona games (P5X): optional, hard, worth doing for its own rewards. Spoiler-free: no boss story here, and the game never names a boss you haven't beaten.

## Where it is
- The Velvet Room (Paulownia Mall) gets a **Velvet Trials** button once Solar has beaten any boss. Story only: never in the epilogue.
- Bosses count once beaten in this playthrough: full moons, Tartarus guardians, superbosses. New Game+ counts every full moon (the year before won them all) and every guardian under the highest floor ever reached, and the trials remember every boss they've seen, so nothing disappears in a new playthrough. Anything not beaten shows as **???**, and a trial with none of its bosses beaten is just "Sealed".

## What's in it
- **Seven Trials** (I to VII), each a row of three or four boss refights at a fixed level (bosses below it are raised to it, never lowered). A trial opens when all its bosses are beaten. Between fights everyone gets 25% of their HP and SP back and the fallen get up; each trial brings its own small bag of items (your own items stay home). No running, no EXP, no yen, no spoils.
- **The Featured Trial**: each game week Elizabeth picks one open trial and adds a twist: *Bare Hands* (no items), *Shuffled Hearts* (every weakness dealt out again, Analyze starts blank), *Critical Moon* (crits about twice as often, both sides) or *Glass Moon* (Shadows have less HP but hit much harder). Score ×1.2 for the trouble.
- **Duels**: any beaten boss alone, at Solar's level or its own, whichever is higher.

## Score and rank
Per fight: 500 for the win, up to 200 for speed (full at or under the fight's par turns, nothing at twice it), 300 if nobody was knocked out; plus a bonus for the HP left at the end. Rank by share of the best possible: **S** 90%, **A** 75%, **B** 60%, otherwise **C**. Only a full clear ranks. Best records are kept per trial, per Duel and per week's Featured Trial. The result screen shows rank, score, turns, knockouts, HP left and time.

## Rewards
- **Once per trial and rank** (reaching S first time pays everything below it too): C 1 plume + a Guardian Crest, B 2 plumes + Velvet Thread ×2, A 3 plumes + a ★4 card, S 4 plumes + a ★5 card. 70 plumes for all seven at S.
- **Weekly, capped:** the Featured Trial pays 1 / 2 / 3 / 4 plumes for this week's best C / B / A / S (only the difference when you improve); Duels pay a plume a win, two a week.
- **Looks** (only from here; drawn in code, no art needed): *Challenger Title* (a first trial cleared), *Velvet Checker* menu wallpaper (rank A on three trials), *Trial Rose Battle* theme (rank S on a Featured Trial), *Champion Title* (rank S on every trial).
- No stamps (achievements.js stays untouched).

## Rules that keep it clean
- Nothing outside changes: the day, the time, yen, items, Tartarus, the bosses-beaten records, levels, EXP, party, Theurgy gauges and what Analyze knew are all as they were afterwards. Only the rewards are added.
- Giving up between fights, losing, or leaving at the start pays nothing.
- A reload in the middle of a trial reopens it and asks: start over from the first fight, or abandon (no reward).

## Balance
Levels were set from a quick engine sim (a strong build and a bare one at the tuned level; `tests/femc_bossrush.py --only sim` re-checks the first trial). Tuned party levels: I 30, II 40, III 48, IV 52, V 62, VI 66, VII 99 (New Game+). A party at the right level with a decent build should clear; S needs speed and nobody going down.

## For Claude
Game side `assets/femc/game/trials.js` (header: data, rules, save `S.gacha.trials`), `trials.css`; battle side `assets/femc/battle/trials-battle.js` (handoff kind `trial`, `request.trial`; battle.js `trialCtx` / `hoStart`); hooks in core.js `applyResult` / `yearRequest` / `newGamePlus`, ui.js `battleCard` / `openBattle` / `resultsCard` / `resumePending`, gacha.js `openVelvet`. Tests: `python3 tests/femc_bossrush.py`.
