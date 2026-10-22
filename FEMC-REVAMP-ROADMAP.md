# FEMC Revamp · Battle & Systems Roadmap (draft 1)

**Build plan:**
- **Batch 1 (in progress):** spell animations, Evoker summon, Shadow reactions, party building + Tactics, status effects.
- **Batch 2:** Tartarus node map, Theurgy, shops and equipment, social links in battle, Persona evolutions, full-moon bosses, accurate P3R data, balance testing, art cleanup, vector icons.

What's next for the battle prototype (`femc-battle.html`). **Claude** = code, **Kat** = art, assets and decisions.

---

## 1. Quality of life (Claude)
*Batch 3 built all of this: remembered cursors, WEAK/RESIST/NULL/DRAIN/REPEL/? skill marks, Rush (R), a Settings panel (P, or Esc on the entrance), the battle log (L), controllers, Story/Normal/Hard, a help glossary (H) with Fuuka’s one-time tips, ghost HP/SP bars, and Save data (3 slots plus a backup code).*
- **Remember my cursor:** each member's menu reopens on their last skill and target, like P3R.
- **Smarter targeting:** once a weakness is known, the target menu shows WEAK, RESIST or NULL next to each skill, and the skill list marks what will hit hard.
- **Rush / auto-battle** for easy fights, plus **Tactics** for party members (Act Freely, Heal/Support, Conserve SP, Direct Command).
- **Settings panel:** text speed, battle speed, a cut-ins on/off toggle (or "only the first time per battle"), and music/SFX volume.
- **Battle log** you can scroll back through.
- **Controller support** (Gamepad API), on top of keyboard, mouse and touch.
- **Difficulty modes:** Story, Normal, Hard.

## 2. Graphics and feel
- **Evoker summons** *(Claude, plus Kat's art)*: P3's signature moment. Gun to the temple, a white flash, glass shattering, then the Persona. Each member gets their own pose.
- **Element effects** *(Claude)*: real animated spells. Agi flames, Bufu ice shards, Zio lightning, Garu wind, Daybreak's sunrise, and Golden Rope lashing out.
- **Shadow reactions** *(Claude)*: hit recoil, a Down wobble, and dissolving into black ash on defeat.
- **All-Out finish cards** *(Claude, plus Kat's art)*: P3R gives each character a unique finish screen.
- **Battle poses for S.E.E.S.** *(Kat)*: full-body action art to replace the portraits in combat. The compendium full-bodies (Akihiko, Yukari, Shinjiro) can work until those are made.
- **Sound effects** *(Kat sources, Claude wires)*: menu move and confirm, Evoker shot, crit, weakness hit, level up.
- **HUD polish** *(Claude)*: animated HP/SP drain, a turn-order strip with icons, and a "danger" pulse at low HP.

## 3. Systems (Claude builds, Kat decides)
- **Tartarus exploration:** a **node map** between fights (fights, chests, stairs, access points, the Reaper). *Decided: node map for now.*
- **More party members:** Mitsuru, Aigis, Ken, Koromaru and Shinjiro, with party switching.
- **Equipment and shops:** weapons from Officer Kurosawa (portrait exists), medicine from Aohige Pharmacy, accessories from Be Blue V, and antiques at Mayoido. *The storefront art already exists.*
- **Status effects:** Charm, Fear, Freeze, Shock, Poison, Distress.
- **Theurgy** (P3R's ultimate moves that charge up): *Decided: yes.* Every member gets one, and Haenim gets one per route form.
- **Persona evolutions** (Polydeuces to Caesar, and the rest) tied to story moments, plus Haenim's route forms.
- **Social links help in battle** (P5-style): bonds give real perks, like Mercy reviving someone once per fight, Kiriko's fox healing between floors, and Akihiko's follow-up attacks. Links and combat feed each other.
- **Memory fragments unlock tree nodes**, so exploring her three lives makes Haenim stronger.
- **Full-moon bosses**, each with its own gimmick. All 11 have art.
- **Fatigue and the calendar:** Tartarus at night, being Tired after, and the link to the school week.

## 4. Kat's art and asset list
- [ ] S.E.E.S. battle poses (full body, action)
- [ ] Evoker art or poses, or a reference to work from
- [ ] Bigger renders for the ~33 small Shadows (optional)
- [ ] Sound effects (P3R-style UI and battle)
- [ ] Item and equipment icons (optional; Claude can draw simple ones)
- [ ] Haenim's route forms: Sunna, the harbor goddess, Nike, unveiled Haenim
- [ ] Tartarus exploration art, depending on the map style chosen
- [x] Decisions: node map; Theurgy yes; direct control with optional Tactics (P3P-style)
- [x] Difficulty modes: Story / Normal / Hard, changeable any time in Settings

## 5. Life sim: Kat's ideas (collecting for the game-loop batch)
- **Part-time jobs at places from Solar's worlds, unlocked later in the game** once those worlds start bleeding through:
  - **Yeobo's Cafe** (*Hoax*): shifts with Sunoo and the ENHYPEN boys dropping in. Jungwon studying in a booth? Jihoon's crew starting trouble?
  - *Ideas to confirm with Kat:* a campus-style coffee bar or esports café (*Runners*), a harbor fish market or the Lee family's restaurant (*strangers*).
- **Jobs pay yen and raise social stats.** The world-specific ones also trigger memory fragments and searcher scenes, so they can nudge routes.

## 6. Skill system: Kat's picks (2026-10-18)
- **8 skill slots per Persona, P3-style.** Learning a 9th asks which skill to forget.
- **Skills upgrade in place.** Agi → Agilao → Agidyne stays in the same slot, so the list never bloats.
- **Haenim's tree has branches plus route keystones:**
  - a core trunk, then offense, healing, support and passive branches
  - one keystone for each route form (Sunna, Mazu, Nike, Unveiled)
  - nodes that memory fragments unlock
  - respec allowed
- **Party members get small trees opened by link rank.** Levels give points, link ranks open new branches, and each member has a final upgraded skill.
- The tree lives in the shared game menu's Skills tab, built after the life sim and battle are merged into one game.

## 7. Kat's playtest decisions (2026-10-20)
Batches, in order, after the story/character pass:
- **A. Merge + battle systems:**
  - Finish the one-game merge (fixes the old Tartarus menu).
  - ✓ Skill tree (built 2026-10-20). Kat's skill ideas: Protective Suzu, Kunai Flick and Kitsune Rush for the Bell branch; Public Veneer and Call the Bluff for the Star branch; Off Angle Flank as a passive; Duo Cohesion as a link perk (not built yet: it belongs to the link perks).
  - **Link perks for EVERY social link** (Kat: like Persona 5 Phantom X). Each link unlocks named perks as it ranks up, about 4 per link, covering:
    - battle: follow-ups, protect, revive, crits, Duo Cohesion-style combos
    - Tartarus: healing between floors, map reveals, better drops
    - daily life: stat boosts, shop discounts, job pay, extra time
    - a skill or passive for Solar at MAX

    Kat's examples: Minji r3 Crosshair Sync, r8 Behind the Lens; Haechan r2 Cut the Fluff, r7 Bait and Punish. ✓ Built 2026-10-20 (193 perks; 3 still wait on unbuilt systems since the five stats landed on 2026-10-21: clubs, party switching, Velvet Room draws; listed at the end of `FEMC-LINK-PERKS.md`). Romance battle dialogue: built 2026-10-21 (battle banter on the romance route); Tartarus dialogue: not yet.
  - ✓ Buffs stack to a limit (3 levels).
  - ✓ Smarter Rush (heals when needed, rebuffs, hits weaknesses, uses Theurgy).
  - ✓ Remove the post-battle All-Out flashes.
  - ✓ Shuffle Time (built 2026-10-20; see section 8).
- **B. Polish:** ✓ built 2026-10-21 (overnight queue item 3).
  - ✓ Animated text send and receive with a notification sound.
  - ✓ Read all.
  - ✓ Softer pink slashes.
  - ✓ A P5-style stat screen with a sun level-up (now showing the five stats below).
  - ✓ A P5X-inspired Go Out menu.
- **C. Living world:** part 1 ✓ built 2026-10-21 (`tests/femc_living.py`); part 2 ✓ built 2026-10-21 (`tests/femc_living2.py`: run-ins, jobs, clubs, the Persona cast staying, Kuromi and My Melody, variants).
  - ✓ Daily random events: 59 new routines (77 in all) in every slot and month, teachers, students, S.E.E.S. and the searchers (`data/daily-life.js`; core.js `dailyLife`: new gates `offOnly`, `days`, `weather`, `flags`, `noFlags`, `met`, `ranks`; the routine that goes stale soonest plays first; one every other day at most; After School routines play before Go Out).
  - ✓ Run-ins while out or working (`data/living-runins.js`, 54: S.E.E.S. 17, the Persona cast 10, visitors 13, searchers 14, in 35 places, jobs and clubs). core.js `runInDue` after an activity, shift or club practice that matches `where`: gated like the routines (dates, met, flags, story events, ranks, route), at most one every other day, each once, one about to expire comes first; the scene plays on the end of the one already playing. New effect `{ later: { delay, slot, msgs } }`: a follow-up text that arrives later (`nextLater` in deliverTexts).
  - ✓ Job scenes that don't repeat, and three new jobs. `data/job-scenes-more-a/b/c.js` (merged into `job-scenes.js` by id): every job has 11-16 full shifts (seasonal and rainy ones, recurring regulars, Persona-world walk-ins), a 3-5 beat story across the year, 10-12 quiet moments and an opener a month; 115 new full shifts. New jobs (`jobs.js`): Chagall Café (after school, Charm + Knowledge), Hagakure's dinner rush (evenings, Proficiency + Courage) and the Naganaki Shrine amulet stall (weekends, Kindness + Charm). core.js `packPick` (shared with clubs): beats in order, then an unseen full shift (the one whose season closes soonest first), then a quiet shift (the month's opener plus a moment not used this month); no full shift ever repeats. Old saves count the base shifts already worked as seen. Yeobo's, Respawn and the fish market keep their unlocks.
  - ✓ Often-seen narration varies (`data/living-variants.js`, 276 lines): the off-day morning, the monorail by weather and season, lunch, quiet class periods, bedtime, going home, study, rest, reading, every activity (6+ lines each) and the dorm's evening acts. core.js `vary` walks each pool in a fixed shuffle, so a line comes back only after the rest.
  - ✓ Holiday invites: a link's `holidays['M/D']` (22 written, `data/living-holidays.js`): the friend texts that morning, the picker at the slot (ui.js `holidayPicker`), the scene only if you spend the day with them. Suggestions for part 2's Persona-cast links: Ann (Golden Week, a photo shoot; the summer festival in a yukata), Kasumi (Sports Day, a gymnastics exhibition; New Year's first sunrise), Haru (Greenery Day at a botanical garden; New Year's Eve with toshikoshi soba from her family's kitchen), Kuromi (Halloween, which is also her birthday).
  - ✓ **Clubs** (`places.js clubs`, scenes in `data/clubs.js`): the tennis club (Rio; Mon/Wed/Fri; Courage + Proficiency; 3 beats only on her romance route and 2 shifts that change with her rank), the library committee and book club (Saori; Tue/Thu; Knowledge + Kindness), the light music club (Tue/Fri; Charm + Proficiency) and the gaming club (Wed in the computer room, Saturday scrims at Game Panic where Kiriko, Minji and Haechan drop by; Proficiency + Courage). Join from the club's card on a club day (its `join` scene is the first practice); then it meets on its days; any number of clubs. Rio's Practice Swing works (+1 Courage +1 Proficiency at tennis).
  - ✓ **Solar's birthday on 6/24** (canon), with a surprise party (`data/living-world.js`: the morning, the party with gifts, a late scene; texts that day).
  - ✓ A fuller Yakushima trip: `data/yakushima.js` day plan (calendar trip `slots`; core.js `tripPlan`; ui.js `tripSlot`): three days of scenes and picks, the story's own night in its slot.
  - ✓ Pre-boss story beats: a build-up scene on the day of every operation after the first (`data/living-world.js` `lw-pre-*`), and a text the night before.
  - ✓ Also built: reactive texts (`afterRank`, 51) and daytime texts / group chats (`ambient`, 29) in `data/living-texts.js`; late nights for Akihiko, Jungwon and Jihoon (`lateNights`, `data/living-nights.js`; housing in `FEMC_GAME_LODGING`).
- ✓ **Haechan (built 2026-10-21, Kat's rulings in the lore bible):** story ranks like Wren's (`links/haechan.js` `forced`, `storySlot: 'late'`, rank `slot`, `storyEvents`; core.js dueEvent / linkStatus / linkScene; `migrateForced` keeps old meter-based saves whole). His living world is in `data/living-haechan-nights.js` (12 late nights, 6 run-ins), `-days.js` (16 routines) and `-texts.js` (afterRank for every rank, 12 daytime and reaction texts, 4 holidays). New engine: `heading()` (where the story is heading) with `{ ifHeading }` in scenes, `heading` gates and per-heading text `variants`; routines in a later slot that are about to go stale hold the day. The Hoax ending is a secret route (details for writers only). `tests/femc_haechan.py`.
- **D. Rewards:**
  - Weapons with looks and abilities (the art is on hold until Kat says), and per-character reward lists.
  - ✓ Achievements as hub stamps (built 2026-10-21): 28 stamps in `achievements.js` (group "Persona 3: Solstice", spoiler-free hints, `side: 'femc'`): first Persona, each full moon April to December, first MAX link, all S.E.E.S. MAX, a stat maxed, all five maxed, each ending (named for the ending, hint "Reach an ending."), My Melody, every club, Tartarus 100F, a bond skill, all twelve naginatas, a keychain set, first capsule, first Velvet draw. `assets/femc/game/stamps.js` watches the save (so old saves earn what they already did) and awards through `Achievements.unlock(id, { quiet: true })` with an in-game toast (ui.js kind `stamp`); battle.js awards the first summon and bond skill directly through `parent.FemcStamps` and leaves `save.feats`. The passport has its own Persona 3: Solstice section (passport.js v7). `achievements.js?v=20` everywhere.
  - ✓ **Gacha, both kinds** (built 2026-10-21, `assets/femc/game/gacha.js` + `gacha.css`; prizes and the ticket item in `build.js`):
    - Capsule machine (Paulownia Mall · Capsule Corner): ¥500 or a Capsule Ticket (Tartarus fights 5%, Strong 12%; Shuffle Time's new Hierophant card gives 1-2; never in practice). Odds C 60 / R 30 / SR 8.5 / UR 1.5%, shown on the machine; pity: SR+ every 10 turns, UR by 60. Prizes: items and Tarot Dust; 30 cast keychains in three sets (S.E.E.S., Old Friends, New Friends; only people Solar has met, a new one before any repeat); six phone cases (the phone wears the one you pick); five capsule accessories; sealed Revelation cards; Soma. Repeats become Capsule Stars, ten trade for a ticket. Animation: the handle turns, the capsule drops, pops and sparkles (reduced motion: straight to the prize).
    - Velvet Room (the blue door at the mall, from 4/8): Elizabeth deals three cards, pick one. ¥3,000 or 3 Velvet Plumes (a Tartarus night +1, a full moon won +3, every Compendium page +1). Odds R 70 / SR 25 / UR 5%; SR+ every 5 draws, UR by 30. Prizes: skill cards by the year's progress, Velvet Thread, ★4/★5 Revelation cards, five pieces of Elizabeth's gear. Compendium Credit (Elizabeth rank 2): 25% off and one plume less.
    - Menu → Collection: keychains by set, phone cases, both machines' counters. Save: `S.gacha` (old saves get a fresh one; New Game+ keeps keychains and cases). `python3 tests/femc_extras.py`.
- **E. Visitors:** ✓ the Persona cast belongs to this world (built in living world part 2: Ann, Kasumi, Haru, Kuromi and My Melody are `kind: 'persona'`, nobody closes or leaves at MAX, no goodbye texts, reactive texts the next day, Ann's afterMax are present scenes and she has a Christmas scene; holidays in `data/living-persona.js`: Ann 5/4 and 8/16, Kasumi 10/12 and 1/1, Haru 9/23 and 12/31, Kuromi 10/31); ✓ Kuromi and My Melody as exchange students (Kuromi's link rewritten, about 900 lines; My Melody's hidden link, `secret`: found on a Wednesday evening, or never); ✓ Kasumi's timeline. Still to do: deeper Mercy, Kiriko and Sebastian links.
- ✓ **Five social stats (built 2026-10-21):** Knowledge, Courage, Proficiency, Charm, Kindness (Persona 5 Royal / Phantom X style). Each has five ranks with the game's own names. They gate links, choices, jobs and activities (clubs will use them too). Test: `python3 tests/femc_stats.py`.

  **Ranks and points** (`stats.js`; points needed for ranks 1 to 5):

  | Stat | Ranks | Points |
  |---|---|---|
  | Knowledge | Clueless · Bookish · Well-Read · Brilliant · Luminary | 0 · 20 · 65 · 125 · 200 |
  | Courage | Skittish · Steady · Gutsy · Fearless · Unflinching | 0 · 15 · 45 · 90 · 150 |
  | Proficiency | All Thumbs · Handy · Capable · Deft · Virtuoso | 0 · 15 · 45 · 90 · 150 |
  | Charm | Wallflower · Noticed · Magnetic · Radiant · Main Character | 0 · 15 · 45 · 90 · 150 |
  | Kindness | Polite · Thoughtful · Warmhearted · Devoted · Heart of Gold | 0 · 15 · 45 · 90 · 150 |

  Knowledge's ladder is longer because class feeds it every day (about 110 points a year from class alone). In a simulated year, a normal playthrough (half its free time on links) ends near 750 points and maxes about three stats; a link-heavy one ends near 530 and maxes one. All five take 800.

  **Ways to raise each one** (Go Out activities in `places.js`, the dorm at night in `places.js dorm`, books, jobs in `jobs.js`, shift choices in `job-scenes.js`, class and exams in `core.js`, bond perks in `build.js`):
  - **Knowledge:** class (catching something worth writing down; a teacher's question answered right, also Charm), the library, studying at the dorm (rainy nights more), Study over coffee at Chagall, Hagakure (the rainy-day special more), the study group for first-years, Fix something at the desk, books (Pillow Book, Algebra, Fix It Yourself), exams (top 10 / top 3), the cinema's documentary week, the bookstore and tutoring jobs, a few shift and link choices. Perks: Study Hall, Tutor Session, Quiet Corner, Bro Discount.
  - **Courage:** Wild-Duck's Mystery Burger, the Hagakure Mega Bowl challenge, the bathhouse's electric bath, the late horror show (Fri/Sat nights), the cinema's horror week, karaoke, the arcade cabinets, the back alley (needs Courage 2), the vending machine, wishing at the shrine, the pier, retro games at the desk, every Tartarus night (+1) and full moon won (+3), the convenience store and fish market jobs, standing-up choices in links and shifts, books (Tiger and the Rope, Say It Like You Mean It). Perks: Roadwork, Featherman Fan, Troublemaker, Pilates Partner.
  - **Proficiency:** every job but tutoring and Yeobo's (by job), the crane game and arcade cabinets, sewing / fixing / retro games / keyboard at Solar's desk, cooking dinner at the dorm, the school rooftop garden, the cinema's heist week, books (Handmade, Fix It Yourself, The Dormitory Kitchen), handy choices in links and shifts. Perks: Kitchen Duty, Sewing Machine, Editing Bay, Fishing Trip, Garden Patch, Morning Stretch, Pilates Partner.
  - **Charm:** Pheromone Coffee at Chagall, trying on outfits at the mall, soaking at the bathhouse, karaoke, the pier, the children's ward, the keyboard, a class question answered right, exams, the romance week at the cinema, Respawn and Yeobo's shifts, books (Art of Poise, Say It Like You Mean It, The Art of Listening). Perks: Fan Club, Glow Up, Fit Check, Golden Hour, Warm-Up, Model Discount, Recruitment Pitch.
  - **Kindness:** walking Koromaru (from 8/10), watering the dorm's roof garden, cooking for the dorm, volunteering (the first-years' study group, sweeping the shrine, the weekend beach cleanup, reading on the children's ward), the school rooftop garden, the flower stall job, tutoring, Yeobo's, helping people in shift choices, caring choices in links, the cinema's drama week, books (Letters to a Young Nurse, The Dormitory Kitchen, The Art of Listening). Perks: Learning Mode, Walkies, Garden Patch, Seven Croissants, Staff Shift.

  **New places and activities:** the Mega Bowl challenge (Hagakure), the electric bath (bathhouse), Study over coffee (Chagall), Try on outfits (Shop Windows), the crane game (Game Panic), the cinema's weekly bill (five films, one a week) and the late horror show, the first-years' study group and the rooftop garden (Gekkoukan), the beach cleanup (Port Island), sweeping the shrine, reading on the children's ward (the hospital), the flower stall job (the mall), and at the dorm in the evening: Cook dinner, Water the roof garden, Walk Koromaru, and Your desk (sew, fix something, retro games, the keyboard). Five new books at Bookworms. All reuse existing backgrounds; art Kat could make is in `FEMC-ART-TODO.md` section 5.

  **Gates** (same rank numbers as before, so old gates keep working): Mitsuru's link (Knowledge 2), tutoring (Knowledge 3), the back alley (Courage 2), Cherry's skating and Mark's mic (Courage 3), Cherry's explaining (Knowledge 3). Two moved to fit the character, with the text unchanged: Junkyu's rhythm-game challenge is Proficiency 2, and Sunoo's "I'll be the whole school" is Kindness 2. An old id (`academics`) still works anywhere (`stats.js alias`).

  **Save migration** (`core.js migrateStats`, once per save; `S.sv` 2 marks it done, the old values stay in `S.statsFrom`): Academics → Knowledge, Charm → Charm, Courage → Courage. Each keeps its place on the ladder (old rank and progress → new rank and progress; old ranks 1-6 map to 1, 2, 3, 3.5, 4, 5), so no stat drops a rank, every old gate still passes, and an old MAX is a new MAX. Proficiency and Kindness start at 3 plus a catch-up from what the playthrough already did: job shifts (each job's Proficiency / Kindness), Koromaru's rank (+2 each), every 6 link ranks (+1 Kindness) and every three weeks of the year (+1 each), capped below rank 4. A mid-December save lands around rank 2-3 in both. Slots and backup codes migrate when loaded.

  **Clubs hook:** `places.js clubs` (empty): each club is an activity with `club: true`, shown at its area like any other; Rio's Practice Swing waits for the tennis club.

### New Adds still to wire in (after the merge lands)
- ✓ **SolarWeapons.png (12 naginatas)** (built 2026-10-20: `build.js` NAG, with art in the Equipment tab and refines +1 to +5): each is a REAL weapon with its own stats and a bonus that suits its look (snowflake → ice, fox → crits, and so on), earned from shops, chests, bosses, links and achievements. Cut files are in `assets/femc/battle/art/weapons/`.
- **Done (batch 15):** ChatGPT Image Oct 18, 2026, 02_44_02 AM.png turned out to be the source of the CG already in the game (`story-facing-wrens-shadow`, same picture), so the file is kept as is and only gained a phone crop focus; 02_44_45 is marked duplicate.
- **Done (batch 15):** GroupChatShadow.png and fishmongerShadow.png are the Group Chat (beside the Ballot Box on the Hoax memory floor) and the Fishmonger (beside the Tide on the strangers memory floor), with pose animation.
- **Done (batch 15):** PossibleUses/ Aigis, Koromaru and Mitsuru full bodies are their Compendium art (Aigis gets a new entry). The field menu's Party screen shows face crops for everyone, so they aren't used there. `Untitled design (25).png` (a waist-up Mitsuru crop) is still pending; it could be her Theurgy still if Kat wants one.
- **Skipped:** the Shinjiro close-up (05_05_25 PM). Kat is regenerating it with an Evoker.

## 8. More building and skilling (Kat, 2026-10-20)
Kat loves the skill tree and wants much more building. **Built 2026-10-20:** Revelation cards (menu → Cards), Shuffle Time, the link perks (menu → Bonds) and the naginatas, all in `assets/femc/battle/build.js`; `tests/femc_building.py` plays them. Bond skills, signature skills and battle lines were built 2026-10-21 (see the overnight queue below). Not built yet: Velvet Room draws. (The five social stats were built 2026-10-21; see section 7.)
- **Revelation-style cards (P5X):** each fighter equips a set of cards. Each card has a main stat and random substats; matching sets give bonuses. Cards level and refine with materials. Sets are themed on Solar's worlds and the arcana.
- **Shuffle Time, P3P-style:** after some fights the cards spin and you pick one.
  - Cups heal, Coins give yen, Swords give weapons, Wands give EXP.
  - Arcana cards give skill cards or Persona boosts.
  - Rare penalty cards add risk.
  - It can also drop building materials and Revelation-style cards.
- **Bond skills (joint skills):** Solar and one partner unleash a combo with its own cut-in, unlocked by link rank. Romances get special ones (Akihiko, Haechan, Jungwon...).
- **More unique skills, animations and effects for every fighter,** plus situational battle lines (hurt ally, low HP, romance banter). Battle lines are text unless Kat supplies voice audio.
- **Status now:** every fighter already has a Theurgy and basic battle lines (turn, One More, shift, finish, Theurgy). Solar (one per form) and the four searchers have Theurgy cut-in art and strike sheets; S.E.E.S. use the stylized cut-in until theirs come.

### Theurgy animation (Kat, 2026-10-20) ✅ built 2026-10-20
Kat likes the **3-step strike sheet**: wind-up, strike, follow-through. Plan: play the sheet's three frames as the character's motion over the Theurgy background and Persona, with a flash, shake and particles. Use the layered pieces where she supplies them; otherwise the regular cut-in is the backdrop. Prompts are in `FEMC-ART-TODO.md`.
- **Built:** `battle.js theurgyCut` plays any mix of a cut-in still, layers (bg / Persona / character) and a strike sheet; without art it builds a stylized cut-in. Each Haenim form has its own art and name. Particles come from `fx.js stream`, with a flash and a shake on impact. It follows the cut-in setting (1st per battle / Off / Rush get a short band; reduced motion gets a fade) and battle speed. The Evoker sheet plays in the summon cut-in and on the battlefield figure. Art tool: `tools/femc-theurgy.py`. Test: `tests/femc_theurgy.py`. How to add more is in `FEMC-ART-TODO.md`.

### World songs (Kat loves this, 2026-10-20) ✅ built 2026-10-20
Play Solar's world songs quietly at the right moments. Sources are in `~/Documents/UniverseHub-Audio/`: Runners/ (Camo – Runners, chanmina – a shell, rosé – 3am), Strangers/ (Ethel Cain – Strangers, Crush, Sea Swallow Me), Hoax/ (Taylor Swift – Hoax, Ariana Grande – someone like u).
- **Where:** memory-fragment scenes and flashbacks, each searcher's arrival, the "come home" calls, and each world's ending. Match each world to its own songs.
- **How:** soft volume. Fade in under the scene and back out to the P3 track. Add new mood keys (e.g. `world-runners`, `world-strangers`, `world-hoax`) in `places.js`'s music map.
- Spread all the P3 tracks so the same song doesn't repeat back to back. This also answers Kat's note about music repetition.

### New songs Kat added (2026-10-20), in `~/Documents/UniverseHub-Audio/`. ✅ All 36 are in `assets/femc/music/` and mapped (2026-10-20); see "Music map" below. Planned uses:
- **Battle rotation:** Wiping All Out (the P3P FeMC battle theme, primary), alongside Mass Destruction and It's Going Down Now.
  - Danger Zone: strong Shadows and the Reaper.
  - Calamity (P3R): full-moon bosses.
  - Blooming Villain: Strega and rival fights.
  - Last Surprise and Break Out Of...: fights with the Persona 5 cast.
  - Nyx (P3R) and Burn My Dread -Last Battle-: the finale.
- **Tartarus and the Dark Hour:** Shadow World (Dark Hour streets), Basement (P3R, the Tartarus lobby), メメントス / Mementos (memory floors), 扉の間 (P3R, the Velvet Room).
- **School and daily life:**
  - 学園の記憶 (P3R, school days)
  - つまらない (boring class)
  - 試験中… (P3R, exams)
  - My Homie (friend hangouts)
  - Beneath the Mask (rainy evenings, the Persona 5 cast)
  - Deep Breath Deep Breath (Reload and Reincarnation Reload; dorm nights)
- **Story moods:**
  - 嫌な予感 (P3R, a bad feeling)
  - 深層心理 -Reload- (mysteries, memories)
  - これでいいんだ… (P3R, quiet comfort and sad beats)
  - Don't (tension, romance)
  - The Meaning of Armbands (S.E.E.S. moments)
  - Living With Determination (P3R, late game)
  - キミの記憶 -Reload- (endings)
- **Nine more (same day):**
  - Like a Dream Come True: P3P FeMC hangouts and dates
  - Signs of Love (P4): romance scenes
  - New Days (P4G): a fresh start, the new semester
  - Time to Make History (P4G): the school trip, Yakushima, festivals
  - Sky's the Limit (P4G): good-ending and big hopeful moments
  - Specialist (P4): daily or free-time variety
  - Period (P4): final-boss or huge-battle variety
  - 心の力 (P4, "Power of the Heart"): Persona awakenings and Theurgy-style moments
  - そこにいるのは誰 (P3, "Who's There?"): eerie and mysterious scenes

### Music map (built 2026-10-20)
Moods live in `assets/femc/game/data/places.js` (`music`, `screens`, `worldMusic`) and the battle's in `assets/femc/battle/data.js` (`music`). A list is a rotation: it never starts the same file twice in a row, and in the story a pooled track plays through once and crossfades into the next. `tests/femc_music.py` checks it all.
- **Battle:** Wiping All Out (every other fight), Mass Destruction, It's Going Down Now. Danger Zone: Strong Shadows, the Reaper, memory-floor bosses. Calamity: full moons. Blooming Villain: a rival fight (and Strega, if they come). Last Surprise / Break Out Of: ready for fights with the Persona 5 cast (none yet). Nyx, Period and Burn My Dread -Last Battle-: pinned to the finale.
- **Tartarus and the Dark Hour:** Basement (lobby and the battle hub), Shadow World (Dark Hour streets), Mementos (memory floors before the fight, the Memories screen), Hall of Doors (in the Velvet Room rotation).
- **School and daily life:** School Memories and Boring (class), Exam in Progress (exams), New Days (a term's first week), Time to Make History (Yakushima, the culture festival), Living With Determination (school days from December), Beneath the Mask (rainy evenings, the Persona 5 cast's links), My Homie / Specialist / Like a Dream Come True (hangouts and free time), Deep Breath Deep Breath (dorm nights).
- **Story moods:** A Bad Feeling (full-moon nights), Deep Mentality and Who's There? (mysteries), It's Alright This Way (quiet comfort), Don't and Signs of Love (romance), The Meaning of Armbands (the armband), Power of the Heart (awakenings and new forms), Sky's the Limit and Memories of You (endings).
- **World songs:** soft (60% of the music volume), fading in over the scene while the P3 track waits, and back out when the song ends, the scene changes mood or the scene ends. They play at memory moments (and any memory fragment found in a scene), each searcher's arrival, the three calls home and each world's ending, and over a fragment's card in Tartarus. The files are the hub's own in `assets/audio/`.


### Overnight queue (2026-10-20, Kat asleep)
1. Theurgy presentation and art: running.
2. ✅ **Built 2026-10-21:** bond skills (Solar plus a partner, unlocked by link rank; special ones for romances), more unique skills and effects per fighter, and situational and romance battle lines. Bond cut-in art doesn't exist yet, so there's a portrait-based fallback with an art hook.
   - **Bond skills** (`assets/femc/battle/bonds.js`, rules in `engine.js` bondInfo / bondAct, menu and cut-in in `battle.js`): one for each fighter's link with Solar: Akihiko, Shinjiro (until 10/3), Haechan, Jungwon, Jihoon, Minji (romances) and Yukari, Junpei, Mitsuru, Aigis, Ken, Koromaru (friendships). Rank 5 opens the first version, rank 9 the upgrade; a romance on its romance route gets its own special version at rank 9 instead. The battle menu's **Bond** works on Solar's turn or the partner's, when both are in the party and able to act. Both pay the SP, both use their turn (the other one rests next turn), once per battle each. A reversed link pauses it. Rush starts one on its own for a boss, a crowd or a long fight. Menu → Bonds lists them with their ranks. Duo Cohesion stays Minji's separate perk.
   - **Signature skills:** every fighter's tree has a third tier-2 node (link rank 4) with their own skill, icon and effect: Corkscrew Thunder, Gale Arrow, Fastball, Glacial Flèche, Missile Salvo, Lance of Justice, Three Heads, Haymaker, Moonlit Static, Black Tortoise, Goblin Fire, Focus Pull. The searchers' first ones (Waning Moon, Serpent Coil, Goblin Club, Clear Sight) got their own icons and effects too.
   - **Battle lines:** each fighter now speaks up when an ally is down or low, Solar is hurt, they hit a weakness, they're knocked down, a boss appears, they win, and their Theurgy is ready (speech bubbles over the cards, and in the log). Romance pair lines (their line and Solar's reply) replace the plain ones on the romance route, from rank 6 (more at 9).
   - Test: `python3 tests/femc_bonds.py`.
3. ✅ **Built 2026-10-21:** batch B polish (Kat's playtest notes 22, 24, 39, 70, 72):
   - **Texts feel real** (`ui.js` openPhone / textBanner / phoneSfx): a new text slides in as a phone banner with a soft chime (tap or Enter opens it); in the conversation each new text gets a typing bubble, then pops in, one at a time; Solar's answer types out in the compose bar and sends with a whoosh, then the replies arrive the same way. Pace follows Text speed (Instant shows everything at once) and Auto (Slow / Fast stretch or tighten the gaps); reduced motion shows everything at once; Skip, a tap on the conversation, or Enter / Space fast-forwards. Everything is saved before it animates. Scene phone lines (`scene.js`) get the same typing bubble and whoosh. Sounds are Web Audio, made in code.
   - **Group chats name the sender** in every multi-person thread (`texts.js groups` plus any thread with two or more senders): the name over the bubble, the in-world handle beside it (hate club), and "added you to a group" lines as chat notices. The data is unchanged.
   - **Read all** on the phone list (`core.js markAllRead`), with the unread count; newest threads stay on top; answers still waiting keep a Reply tag.
   - **Softer pink slashes:** the site skin's full-screen stripes (drawn on top of everything, over the HUD and text boxes) are off on the game and battle pages; the game's own are thin, faint and kept to the lower right of the stage and the top-right corner of scene art.
   - **P5R-style social stats** (menu → Status): a radar with one corner per stat, and a card per stat with its rank name, rank in suns and the meter to the next rank. A rank-up plays a level-up card with Solar's sun (waits for a scene to end; reduced motion gets a still version). Both read `stats.js`; they show the five stats (built 2026-10-21, section 7).
   - **P5X-style Go Out:** slanted art cards per area (and per place inside one) with who's there today (met links' faces); hover or focus fills a side panel with what the place is, who's around, what you'd get and what it costs; on phones the cards carry that themselves. Keyboard, pad, mouse and touch. Choosing still opens the review before any time or yen is spent. Descriptions are `about` fields in `places.js`.
   - Test: `python3 tests/femc_polish.py` (screenshots at 1000×486, 375×812 and 1440×900).

## 9. The year to March, and five links removed (Kat's rulings, built 2026-10-21)
Spoiler-free here; the story side is in the hidden plot doc (§20).

**Removed: Leon, Cloud, Noctis, Astarion, Shadowheart** (Sebastian stays).
- Gone: their link files and stubs, six run-ins, their lines in group scenes (trimmed so the scenes still read well), 23 perks (`build.js PERKS`), their cut-in entries, the Leon/Ada and
  Cloud/Tifa/Aerith CGs (art lists and prompts). They had no bonds, keychains, Christmas options or stamps of their own.
- Rehomed: the **Black Rose** naginata (Astarion's rank-8 gift) is **the Hermit's first-clear drop** (`build.js BOSS_WEAPON`)
  and is in Shuffle Time's Swords; the **Suture Kit** fragment (Leon's rank 7) still comes from the 12/12 crossroad's jade
  path, and any missing fragment can turn up in a Tartarus memory room.
- Old saves (`core.js migrateRemoved`, every load, slots and codes too): their progress, meeting, registration, phone threads
  and battle-side ranks are dropped; everything they gave stays (items, gear, the Black Rose, learned MAX skills, fragments).
  `migrateYear` gives the Black Rose once to a save that cleared the Hermit without it.
- The engine's perk hooks they used are kept, unassigned, for new links (list at the end of `FEMC-LINK-PERKS.md`).
- v1 is untouched (`femc-social.js`, `assets/femc/links/`, `story.js`, `secrets/`, codes, portraits). The shared Compendium
  marks their entries `v1only`: they open only from v1's save and are listed only when a v1 save exists.

**The year runs to early March** (`calendar.js end: '3/7'`, `finalStretch`).
- February is ordinary third term: 2/3 Setsubun, 2/11 National Foundation Day (off), 2/14 Valentine's Day (a Sunday). 3/5 is
  graduation. 1/30 is a full moon with no operation (Tartarus closes); 3/6 is the last full moon and the finale's operation;
  3/7 is the last night (the endings, the bad ending's jump, the end screen, then New Game+).
- Everything up to the winter solstice kept its date. After it, the last week moved five weeks on with its weekdays
  (the plot doc has the list), and content windows that meant "until the end" moved with it (seasonal January ones stayed).
- `core.js endingDue`: the endings follow the finale; a save that played the finale on the old 1/30 (or was in its fight)
  is marked `finale-early` by `migrateYear` and goes straight to its ending. A save
  whose ending already played sits on the new last night. Everything else just plays on into February (`migrateYear`, S.yv 2).
- The fill (`data/living-march.js`): February and March openers for every job and club, 9 routines (one in late January), 7 texts, Valentine's
  invitations (Akihiko, Yukari, Hanni, Jihoon, Jungwon), a quiet full moon on 1/30 and graduation on 3/5.
- Tests: `python3 tests/femc_march.py` (calendar, endings on the new dates through the UI, late-January saves walking into
  February, the removed links and their old saves, the Compendium). Updated for 1/31 → 3/7 or the removed links:
  femc_building, femc_stats, femc_haechan, femc_living (routines through March), femc_living2 (twelve openers),
  femc_preparation, femc_shadow_poses; and
  `tools/femc-check-scenes.py` wants openers for all twelve months.

**Ranks 11–15: built (2026-10-21).** Haechan, Jungwon, Akihiko and Shinjiro go to 15; every other link stays at 10.
- Data: a link's `maxRank: 15` and `ranks[10..14]` with `after` dates in February (Akihiko 2/1–2/26, Jungwon and Haechan 2/2–3/1,
  Shinjiro 2/1–2/27). Haechan's are story ranks (`forced` 1–15); Shinjiro's 15 is one. Each new rank branches by the locked route
  (`ifHeading`) and by romance / friendship. Content: the link files plus `data/living-r15-<id>.js` (texts after ranks 11–15,
  a few late nights and routines, Haechan's 2/14, the Gekkoukan buzz all year, Shinjiro's morning-after event). Akihiko's romance
  can start at rank 7 now (rank 9 still offers it). Story inserts: two in story-act3 (Akihiko), the Stay ending and graduation
  (Shinjiro).
- Engine (`core.js`, header): `maxOf` / `isMaxed`; `afterGap` (rank 10+ while the next rank's date or gate isn't reached: afterMax,
  no ♪); `stretchHangouts` when a rank scene leaves the meter short; afterMax entries gated by `flags` / `noFlags` (traces too);
  `stretch: { from, home }` for a link that closed (Shinjiro: the dorm kitchen from 2/1); routine / pack gates `ranksBelow` and
  `route` ('romance' | 'friend' | 'none'); `migrateForced` and `bond()` read the link's own top rank.
- What "MAX" means: the link's own top rank in the meter, rank card, toasts, Links / Bonds tabs, Go Out notes, end screen and the
  Bond MAX stamp. Rank 10 stays the P3 MAX for the party trees' evolution, the old MAX perks, bond tier 9, Christmas Eve and
  goodbyes; All of S.E.E.S. stays at 10. New at 15: a daily perk each (`build.js`), a third bond tier with a romance version
  (`bonds.js love15`; Shinjiro's bond stays ended), and the Rank 15 stamp (29 stamps). Status draws fifteen pips for the four.
- Old saves: nothing to migrate; a save at rank 10 plays afterMax until the February dates, then the ranks (a save already past
  the dates catches up, Haechan one a night).
- `python3 tests/femc_rank15.py` (engine, UI, perks / bonds / stamps, Shinjiro's return and waking through the UI, Akihiko's turn
  and buzz gates, route branches, a February on every route reaching 15, a weaker player, migration, a year of routines with links
  moving, ~19,000 scene paths). Updated: femc_haechan (fifteen story ranks), femc_bonds (Akihiko's bond still), femc_extras and
  femc_living (fixtures), `tools/femc-check-scenes.py` (maxRank, stretch hangouts, late nights).
- **Maybe later:** rank 15 for Hanni, Hyein, Mark, Minji, Jihoon (lower priority).

### Overnight queue (2026-10-22, Kat asleep; Kat approved)
1. Wire the 13 card sets and the S.E.E.S. weapons: running.
2. **Next, in parallel once 1 is done:**
   - **New links: Danielle, Jaemin and Chenle** (Runners; silhouettes until Kat's portraits).
   - **A Memories photo album:** every CG and memory card unlocked, P3R-style gallery.
   - **A Theater:** replay key story scenes already seen.
3. Then one full test run.
