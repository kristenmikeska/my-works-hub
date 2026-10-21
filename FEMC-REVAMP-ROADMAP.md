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

    Kat's examples: Minji r3 Crosshair Sync, r8 Behind the Lens; Haechan r2 Cut the Fluff, r7 Bait and Punish. ✓ Built 2026-10-20 (193 perks; 12 wait on unbuilt systems, listed at the end of `FEMC-LINK-PERKS.md`). Romance battle and Tartarus dialogue: not yet.
  - ✓ Buffs stack to a limit (3 levels).
  - ✓ Smarter Rush (heals when needed, rebuffs, hits weaknesses, uses Theurgy).
  - ✓ Remove the post-battle All-Out flashes.
  - ✓ Shuffle Time (built 2026-10-20; see section 8).
- **B. Polish:**
  - Animated text send and receive with a notification sound.
  - Read all.
  - Softer pink slashes.
  - A P5-style stat screen with a sun level-up.
  - A P5X-inspired Go Out menu.
- **C. Living world:**
  - Daily random events.
  - Run-ins while out or working.
  - More jobs, and job scenes that vary.
  - Holiday invites.
  - **Clubs:** tennis (Rio, with romance scenes on her route), library/book club, band, gaming/eSports.
  - **Solar's birthday on 6/24** (canon), with a surprise party.
  - A fuller Yakushima trip.
  - Pre-boss story beats.
- **D. Rewards:**
  - Weapons with looks and abilities (the art is on hold until Kat says), and per-character reward lists.
  - Achievements as hub stamps.
  - **Gacha, both kinds:** a capsule machine at the mall (yen or Tartarus tickets; accessories, cosmetics, cast keychains, rare items) and Velvet Room draws from Elizabeth (skill cards, rare gear).
- **E. Visitors:** the Persona cast belongs to this world; Kuromi and My Melody as exchange students (My Melody as a hidden link); deeper Mercy, Kiriko and Sebastian links; Kasumi's timeline.
- **Social stats become five P5-style ones:** Knowledge, Courage, Proficiency, Charm, Kindness. They gate links, choices, jobs and clubs.

### New Adds still to wire in (after the merge lands)
- ✓ **SolarWeapons.png (12 naginatas)** (built 2026-10-20: `build.js` NAG, with art in the Equipment tab and refines +1 to +5): each is a REAL weapon with its own stats and a bonus that suits its look (snowflake → ice, fox → crits, and so on), earned from shops, chests, bosses, links and achievements. Cut files are in `assets/femc/battle/art/weapons/`.
- **Done (batch 15):** ChatGPT Image Oct 18, 2026, 02_44_02 AM.png turned out to be the source of the CG already in the game (`story-facing-wrens-shadow`, same picture), so the file is kept as is and only gained a phone crop focus; 02_44_45 is marked duplicate.
- **Done (batch 15):** GroupChatShadow.png and fishmongerShadow.png are the Group Chat (beside the Ballot Box on the Hoax memory floor) and the Fishmonger (beside the Tide on the strangers memory floor), with pose animation.
- **Done (batch 15):** PossibleUses/ Aigis, Koromaru and Mitsuru full bodies are their Compendium art (Aigis gets a new entry). The field menu's Party screen shows face crops for everyone, so they aren't used there. `Untitled design (25).png` (a waist-up Mitsuru crop) is still pending; it could be her Theurgy still if Kat wants one.
- **Skipped:** the Shinjiro close-up (05_05_25 PM). Kat is regenerating it with an Evoker.

## 8. More building and skilling (Kat, 2026-10-20)
Kat loves the skill tree and wants much more building. **Built 2026-10-20:** Revelation cards (menu → Cards), Shuffle Time, the link perks (menu → Bonds) and the naginatas, all in `assets/femc/battle/build.js`; `tests/femc_building.py` plays them. Not built yet: bond skills (joint skills), Velvet Room draws, the five social stats.
- **Revelation-style cards (P5X):** each fighter equips a set of cards. Each card has a main stat and random substats; matching sets give bonuses. Cards level and refine with materials. Sets are themed on Solar's worlds and the arcana.
- **Shuffle Time, P3P-style:** after some fights the cards spin and you pick one.
  - Cups heal, Coins give yen, Swords give weapons, Wands give EXP.
  - Arcana cards give skill cards or Persona boosts.
  - Rare penalty cards add risk.
  - It can also drop building materials and Revelation-style cards.
- **Bond skills (joint skills):** Solar and one partner unleash a combo with its own cut-in, unlocked by link rank. Romances get special ones (Akihiko, Haechan, Jungwon...).
- **More unique skills, animations and effects for every fighter,** plus situational battle lines (hurt ally, low HP, romance banter). Battle lines are text unless Kat supplies voice audio.
- **Status now:** every fighter already has a Theurgy and basic battle lines (turn, One More, shift, finish, Theurgy). Only Solar has full-screen Theurgy art.

### Theurgy animation (Kat, 2026-10-20)
Kat likes the **3-step strike sheet**: wind-up, strike, follow-through. Plan: play the sheet's three frames as the character's motion over the Theurgy background and Persona, with a flash, shake and particles. Use the layered pieces where she supplies them; otherwise the regular cut-in is the backdrop. Prompts are in `FEMC-THEURGY-PROMPTS.md`.

### World songs (Kat loves this, 2026-10-20)
Play Solar's world songs quietly at the right moments. Sources are in `~/Documents/UniverseHub-Audio/`: Runners/ (Camo – Runners, chanmina – a shell, rosé – 3am), Strangers/ (Ethel Cain – Strangers, Crush, Sea Swallow Me), Hoax/ (Taylor Swift – Hoax, Ariana Grande – someone like u).
- **Where:** memory-fragment scenes and flashbacks, each searcher's arrival, the "come home" calls, and each world's ending. Match each world to its own songs.
- **How:** soft volume. Fade in under the scene and back out to the P3 track. Add new mood keys (e.g. `world-runners`, `world-strangers`, `world-hoax`) in `places.js`'s music map.
- Spread all the P3 tracks so the same song doesn't repeat back to back. This also answers Kat's note about music repetition.

### New songs Kat added (2026-10-20), in `~/Documents/UniverseHub-Audio/`. Planned uses:
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
