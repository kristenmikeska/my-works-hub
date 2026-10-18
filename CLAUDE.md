# CLAUDE.md: handoff notes for Claude sessions on this repo

Kat's fiction archive (13 worlds) plus FEMC mode, a Persona 3 Portable FeMC-style game. It's live on GitHub Pages at kristenmikeska.github.io/my-works-hub. It's a static site with no build step. Read `MAINTENANCE.md` for the archive side.

## Ground rules (Kat's, non-negotiable)
- **Push only when Kat says "push".** She reviews locally first. Run `python3 -m http.server 8000 --bind 127.0.0.1` in the background and she opens http://localhost:8000 in her own browser. Don't use preview-panel tools. Fetch before pushing, because other sessions push here too.
- **No spoilers for Kat.** She plays the game herself. Never summarize the story, routes or endings to her, and keep routes and scenes a surprise. Give spoiler-free progress reports, like "Act IV is written," not what happens in it.
- **Hidden plot files** (`DO-NOT-OPEN-*.md` in the repo root) are for Claude and story writers only. They're gitignored and must never be committed or pushed. If they're missing on this machine, ask Kat to copy them over; they aren't on GitHub.
- Never read `Runners.md` (read `Runners_text.md`). Never use `~/Claude/Projects/Writing/_oneshots`. In `~/Claude/Projects/Writing/strangers/`, don't open `DO-NOT-OPEN-*` unless the other strangers files aren't enough, and keep their contents out of anything that would spoil the novel.
- Solar is 18, a third-year. Romance stays non-explicit. Sparse cursing is fine.
- No Tailwind CDN. Write CSS directly.
- Don't overwrite Kat's source images. Her macOS filesystem is case-insensitive, so `foo.png` and `Foo.png` are the same file.
- Commits end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- If a permission check blocks something, ask Kat. Don't route around it.

## The two FEMC games
- **v1 (finished, backed up):** `social.html` and `femc-social.js`, save key `kg-femc-game`. Backups are tag `femc-v1` and branch `femc-v1-backup`. Don't break Kat's v1 save.
- **The revamp:**
  - **Life sim:** `femc-game.html` and `assets/femc/game/`, save key `kg-femc-revamp`.
    - The engine lives in `core.js`; its header documents the link format. Scene lines are in `scene.js`, and the UI is in `ui.js`.
    - Data is in `data/`: the calendar, the story acts, endings, jobs and texts, with links under `data/links/*.js`. A written link file overrides its entry in `stubs.js`.
    - `?debug=1` adds Simulate buttons to fights.
  - **Battle:** `femc-battle.html` and `assets/femc/battle/`.
    - Files: `data.js`, `engine.js`, `battle.js` (UI and saves), `fx.js`, `map.js`, `icons.js`, `pad.js`, `shadows.js`.
    - Save keys: `kg-femc-battle-proto` for the standalone prototype, `kg-femc-revamp-battle` for handoff mode.
  - **Handoff between them:** life sim → `femc-battle.html?from=game` via `kg-femc-handoff`. The contract is in `FEMC-GAME-HANDOFF.md`.
- **Docs:**
  - `FEMC-REVAMP-LORE.md` is the lore bible and includes Kat's rulings. It's spoiler-safe and Kat edits it too.
  - `FEMC-REVAMP-ROADMAP.md`
  - `FEMC-ART-LIST.md` is the art checklist.
  - `FEMC-CG-PROMPTS.md` and `FEMC-GEMINI-PROMPTS.md` are the image prompts Kat runs.
- **Cache-busting:** after editing a script, bump its `?v=` in the HTML.
  - Battle art uses `ART_V` in `battle.js`.
  - For v1, bump `FEMC_ASSET_VERSION` in `femc-mode.js`.
  - `achievements.js?v` is hard-coded in several files; bump all of them.
- **Art tools are in `tools/`:**
  - `femc-portraits.py` / `femc-sheet.py` / `femc-split.py` / `femc-lift.swift` cut portraits from Kat's sheets.
  - `assets/femc/portraits/scale.js` holds per-character sizes. Check every face in-scene after changing any of them.
  - Kat's art sources are in `~/Documents/UniverseHub-Images/Femc Mode Images/` and her music is in `~/Documents/UniverseHub-Audio`.
- **Testing:** the old play-test harnesses lived in a temp folder and are gone. Re-create them as needed.
  - Use headless Chrome driven from Python (the Mac has no node; `jsc` works for syntax checks).
  - Before reporting done, test real playthroughs, not just syntax.

## Where things stand (2026-10-18)
Everything is pushed:
- all 44 links
- the full story through every ending, plus the bad ending and New Game+
- the battle game (Tartarus node map, 8 full-moon operations, Theurgy, shops, evolutions, Haenim's route forms, difficulty, settings, save slots)
- a single Christmas Eve picker (the 12/24 story event)

## Next tasks, in order
1. **Merge the two halves into one game.** Kat wants it to feel like one game.
   - The battle runs inside the life-sim page (no page jump), with a Dark Hour transition in and out.
   - One save per slot holds everything.
   - One shared menu (party, Personas, skills, equipment, compendium).
   - One look (fonts, colors, text boxes, buttons) and one settings panel.
   - One title screen.
   - The standalone battle page becomes a hidden practice mode.
   - Keep the handoff contract's data shapes so the story's battle hooks keep working.
2. **Skill system.** Kat loves skilling, leveling and upgrading, so talk the design through with her before building. Starting proposal:
   - 8 skill slots, with a choice to forget a skill when learning a new one
   - skills that upgrade in place
   - a deeper Haenim tree with tiers, choice nodes, passives, and keystones tied to her route forms
   - nodes unlocked by memory fragments
   - respec
   - a small tree for each party member, opened by link rank

   Her feedback so far: other characters should get upgraded skills, the skill list is too long and overwhelming, and the tree needs more depth.
3. **Deepen the shorter friend links:** Hanni, Hyein, Cherry, Yunjin, Jaehyun, Mark, Sunoo and Junkyu. Bring them up to the depth of the longer links: richer ranks, texts and after-MAX scenes.
   - Check facts against the novels: `Runners_text.md` and the strangers chapters in `~/Claude/Projects/Writing/`.
   - Use the kat-voice, runners and strangers skills.
   - Keep Mark's rank 9 line exactly as written. Kat approved it.
4. Later: arcana for the searchers besides Haechan and Jungwon (links may share arcana; new arcana or alternate tarot art may come later), wiring in new art as Kat makes it, and the title logo once the revamp has a name.

## Working with Kat
She's the author, a communications professional, and P3P is her favorite game (Akihiko is her favorite character). She sends art as files in Downloads or in her image folders, and expects it cut, cleaned and wired in, with every face checked in the game. She likes being asked about design (skills, mechanics, lore) and surprised by story. Keep replies short and plain.
