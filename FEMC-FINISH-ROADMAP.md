# Finishing the first game: roadmap

Kat's list of what to do before calling Persona 3: Solstice finished (Oct 30 2026), in the agreed order. Tick items off as they land.

## 1. Art clean-up (waits on ChatGPT usage)
- [x] HOAX outfit portraits (Oct 31, batch 104): Christmas, the winter-break party, New Year in hanbok (outfit notes are in the Oct 30 chat; the hanbok row can grow to the whole council)
- [ ] Transparent versions of the remaining skin portraits and battle sheets (Claude lists which files still have backgrounds)
- [ ] Skins in battle (cut cell-4 effects, layered effects, second pose sheets, outfit cut-ins / effects / finish cards): design sheet `FEMC-SKINS-BATTLE-DESIGN.md` (Nov 1, waiting on Kat's sign-off)

## 2. Pictures for the Runners social posts
- [ ] Claude lists every post with what it shows; Kat makes the images in batches

## 3. Epilogue backgrounds (Gemini, can start now)
(Checked Oct 31: every background the game names exists.)
Places that still borrow a Persona 3 or main-game background:
- [x] Runners: Bird Library, Hall of Languages (classroom), Honors Dorm room, Marshall Street café, Football Complex
- [x] Strangers: the Lee house sunroom, the Yang house (hall and kitchen), Songdo (street and café), noraebang, bathhouse, the bridge
- [x] HOAX: Hanlim rooftop, Hanlim library, karaoke, arcade, ice rink, the party (outside), Hanlim street

## 4. Skill trees: classes
Kat's decisions:
- Every party member gets a deep tree like Solar's, with a twist so Solar stays the strongest; the others should keep up, not match her.
- Each member has a fixed class (as in P5X), not Solar's switchable forms; their tree offers versatile builds inside that class.
- Approved Oct 31: classes Akihiko Striker, Yukari Medic, Junpei Guardian, Mitsuru Saboteur, Aigis Gunner, Ken Cleric, Koromaru Trickster, Shinjiro Berserker, Jihoon Hype-man, Minji Spotter, Jungwon Strategist, Haechan Assassin; three builds each.
- Approved: 8 tiers, about 40 nodes each, points for roughly two of three builds (respec for the rest); drawn radially like Solar's sun, smaller orbits around her; top nodes need high link ranks and many boost Solar.
- [x] Design sheet signed off Oct 31 (`FEMC-SKILL-TREES-DESIGN.md`)
- [x] Build it (Oct 31: the orbits are in; CLAUDE.md "Party skill trees, redesigned: built")
- [x] Late-game branches so nobody maxes out early (Oct 31: `FEMC-LATE-BRANCHES-DESIGN.md` signed off and built; CLAUDE.md "Late-game skill branches: built")

## 5. Tartarus
- [x] Fill in the gaps between floors (now 8 blocks, 68 stopping floors, top at 254) (Oct 31: 113 floors; CLAUDE.md "Tartarus, phase 1 of the finish roadmap: built")
- [x] Teleport to the start of each block from the Tartarus screen
- [x] More bosses: a guardian per block, plus optional superbosses up top
- [x] Better rewards: Velvet Plumes from guardians and rare events
- [x] Random events every few floors (funny, scary, lore, romantic)
- [x] The climb past 254 to 400, New Game+ only (approved Oct 31; built Oct 31: CLAUDE.md "Tartarus, the New Game+ climb: built"): three blocks above the Monad built from Syracuse (255-300), Incheon (301-350) and Hanlim (351-399), floor 400 tied to Solstice's heart with the final superboss; a scene on arrival and at each summit, a guardian, its own events, Fuuka. Claude names the blocks and writes the story (Kat approves structure, not plot).
- Difficulty stays set by floor, not by the player's level.

## 6. Epilogue depth
- [x] Longer, deeper scenes, paired with the new backgrounds from 3 (Oct 31: CLAUDE.md "Epilogue depth: built")

## 7. UI revamp (last)
- Close to P3 Reload, with its own Solstice identity. Kat's references: `Femc Mode Images/Inspo` (not `Skin Inspo`). Approved direction: giant ghost words, bold italic slanted lists, art bleeding off the edge, angular text box with an arrow name tag; a selection slash, a sun and moon in the date box. (The mockup's indigo-to-gold day and green-and-black Dark Hour were dropped: see Kat's palette rule below.)
- [x] Mock up one screen for Kat first (`mockups/solstice-ui/`; first-pass notes done Oct 31)
- Kat's mockup decisions (Oct 31): full-body art zoomed to a shared head size for Solar on menus, Social Links and the title; dialogue portraits hang from a shared eye line and the speaker is placed by face centre; the old title painting stays as the Solstice Key Art wallpaper (`wp-keyart`).
- **Kat's palette rule (Oct 31, final):** the game's ORIGINAL pink and black, with the new Solstice shapes. The Dawn palette (indigo and gold), purple, the orchid blend, lilac and the green Dark Hour were all tried and rejected: no gold/yellow-heavy, purple/lilac, indigo/navy or green UI (gold a tiny accent at most). The Dark Hour is the same pink and black, darker.
- Placement review: `mockups/solstice-ui/placements.html` shows all 250 characters as the dialogue speaker beside Solar. Kat nudges anyone who looks off and pastes the "Copy for Claude" line back; those numbers become the per-character nudge list in the restyle. **Done Oct 31:** all 239 portraits placed (`placements-kat.json`); the HOAX Christmas, party and New Year outfits wait until Kat remakes them.
- Oct 31: Kat's C3 cover is the title art in the mockup (logo and menu on a panel slanted like the cover's slash; in the game it's her pink and black recolour, `title/cover.webp`); Solar's new full-body poses (`assets/femc/profile/solar-poses/`, six) replace `profile/femc.webp` on the menus. Both are in the game now (Oct 31). The logo's spinning sun was removed at her request.
- [x] Brainstorm the Solstice style from Kat's references, then restyle one area at a time: menus, battle HUD, Tartarus, dialogue (Oct 31: CLAUDE.md "Solstice UI restyle: built"). Built in pink and black: dialogue scenes with every portrait where Kat placed it, the title on her pink cover, the main menu screen on her day / Dark Hour backdrops, the field HUD and home screens, the Social Link screen, a shared frame for every menu page with the most-used pages hand-tuned, the battle HUD and Tartarus panels, Solar's full-body poses, and each epilogue world's fights loading over its own still.
- Still open from the restyle:
  - [ ] Go Out area cards (demo in progress at `mockups/solstice-ui/goout.html`)
  - [x] Checked by eye and fixed (Nov 1): the Wardrobe and its Boutique (Equip always visible), the Skills page's skill list, the battle practice sub-screens
  - [x] Toasts can sit over the menu's date box (Nov 1: they start under it)
  - [x] The Go Out map shows rain, snow and fog; epilogue fights load over their world's still (checked); the end credits made cinematic (Nov 1)
  - [ ] Social Link heads may want small nudges (`menu.js LINK_FIG`)
  - [ ] Art still to come: HOAX fix 4C, five Social Link full-body sheets (FEMC-ART-TODO section 8; until then those links show a bust-up)
