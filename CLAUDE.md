# CLAUDE.md: handoff notes for Claude sessions on this repo

Kat's fiction archive (13 worlds). It's live on GitHub Pages at kristenmikeska.github.io/my-works-hub. It's a static site with no build step. Read `MAINTENANCE.md` for the archive side.

**The games moved out (Nov 17 2026).** Persona 3: Solstice and Persona 3: Equinox have their own sites and repos, siblings of this one: `../p3solstice` (kristenmikeska.github.io/p3solstice: the engine, all the art, tools, tests and docs, with its own CLAUDE.md) and `../p3equinox` (Equinox's pages, which load from p3solstice). **Game work happens there, not here.** What stays here for the games:
- `femc.html`: the Persona 3 landing page (the two games side by side, art borrowed from ../p3solstice). Reached only by the easter egg: typing "femc" on any hub page (`femc-mode.js`, now just that shortcut plus the passport's "Memento mori" stamp).
- `achievements.js` / the passport: Solstice's stamps are awarded by the game (`../p3solstice/assets/femc/game/stamps.js` loads this file).
- The original FEMC mode (v1: the pink skin, menu, social links, compendium, secret codes) was retired from the hub on Nov 17; it's in git (tag `femc-v1`, branch `femc-v1-backup`, and this repo's history before the move, with the games' full history too). Its side stamps on the passport show only once earned.

## Ground rules (Kat's, non-negotiable)
- **Push only when Kat says "push".** She reviews locally first. Serve the PARENT folder (`cd "~/Desktop/Narrative Universe Sites" && python3 -m http.server 8000 --bind 127.0.0.1`, in the background) so the hub and the two game sites sit side by side as on GitHub; she opens http://localhost:8000/my-works-hub/ . Fetch before pushing, because other sessions push here too.
- **Hidden plot files** (`DO-NOT-OPEN-*.md`) are never committed or pushed (gitignored). The games' ones moved to ../p3solstice.
- Never read `Runners.md` (read `Runners_text.md`). Never use `~/Claude/Projects/Writing/_oneshots`. In `~/Claude/Projects/Writing/strangers/`, don't open `DO-NOT-OPEN-*` unless the other strangers files aren't enough, and keep their contents out of anything that would spoil the novel.
- Solar is 18, a third-year. Romance can be spicy (Kat, 2026-10-24): real tension, making out, sneaking into rooms, waking up together, sensual detail and morning-after fallout are all welcome; scenes cut away before anything graphic (no explicit sex on the page). Sparse cursing is fine.
- No Tailwind CDN. Write CSS directly.
- Don't overwrite Kat's source images. Her macOS filesystem is case-insensitive, so `foo.png` and `Foo.png` are the same file.
- Commits end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- If a permission check blocks something, ask Kat. Don't route around it.

