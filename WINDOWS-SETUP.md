# Working on the project from the Windows PC

Kat, Nov 5 2026. A one-time setup, then a short routine each time you switch computers.

## What lives where

| What | Where it is now (Mac) | Size | How it gets to the PC |
|---|---|---|---|
| The project (code, game, docs) | `Desktop/Narrative Universe Sites/my-works-hub` | – | GitHub (`git clone`) |
| Your art (New Adds, WIP, Place Prompt Attachments…) | `Documents/UniverseHub-Images` | 7.1 GB | a synced folder (step 3) |
| Your music | `Documents/UniverseHub-Audio` | 0.5 GB | a synced folder |
| The story files (Runners_text.md, skills' sources…) | `Claude/Projects/Writing` | 0.2 GB | a synced folder |
| The hidden plot files (`DO-NOT-OPEN-*.md`, 6 of them) | in the project folder | small | copy by hand once (never on GitHub, on purpose) |

## One-time setup on the PC

1. **Install:**
   - the Claude desktop app (sign in, open the Code tab)
   - Git for Windows: git-scm.com
   - Python 3: python.org (tick "Add Python to PATH" in the installer)
   - Google Chrome (the tests drive it)
2. **Get the project.** Open a terminal (or ask Claude in the Code tab to do it) in the folder you want it in, and run:
   ```bash
   git clone https://github.com/kristenmikeska/my-works-hub.git
   ```
   Then open that folder in the Code tab.
3. **Get your files.** The easiest lasting fix is to keep the three folders in a cloud folder both computers sync (Google Drive for desktop, OneDrive or iCloud for Windows). On the PC they need to end up at:
   - `C:\Users\<you>\Documents\UniverseHub-Images`
   - `C:\Users\<you>\Documents\UniverseHub-Audio`
   - `C:\Users\<you>\Claude\Projects\Writing`

   The tools look in those spots, so keeping the same names means they work without changes. (If OneDrive "backs up" your Documents folder, Documents moves inside OneDrive; tell Claude and it will point the tools there.)
4. **Copy the six `DO-NOT-OPEN-*.md` files** from the Mac's project folder into the PC's project folder (a USB stick or the synced folder). They stay out of GitHub by design.
5. **Python packages** the art tools use:
   ```bash
   pip install pillow numpy
   ```
6. **The local server** to play in your browser: ask Claude to start it, or run this in the project folder and open http://localhost:8000:
   ```bash
   python -m http.server 8000 --bind 127.0.0.1
   ```

## Every time you switch computers

- **Before leaving a computer:** tell Claude "push" (after it's committed everything you want kept).
- **On the other computer:** tell Claude to pull the latest from GitHub before starting.
- Only one computer should have unpushed work at a time, or the two will need merging.

## What doesn't work on Windows yet

The game itself works anywhere. A few of Claude's helper tools were written for the Mac and would need small fixes on the PC (Claude can do these the first time you use them there):
- 3 tools use a Mac font or Mac-only image helpers (the polaroid captions use a Mac handwriting font, and three portrait tools use a Mac-only cutter written in Swift).
- 1 checking tool uses a JavaScript program that only exists on Macs (`jsc`); the PC would use the tests in Chrome instead.
- 1 tool and 1 test look for Chrome in its Mac location.

Everything else (the art tools that read `Documents/UniverseHub-Images`, the tests, git) works the same once the folders are in place.
