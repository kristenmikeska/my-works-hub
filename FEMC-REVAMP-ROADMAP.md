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
  - Skill tree. Kat's skill ideas: Protective Suzu, Kunai Flick and Kitsune Rush for the Bell branch; Public Veneer and Call the Bluff for the Star branch; Off Angle Flank as a passive; Duo Cohesion as a link perk.
  - Link perks in battle (Minji r3/r8 and Haechan r2/r7 are her examples), and romance battle and Tartarus dialogue.
  - Buffs stack to a limit.
  - Smarter Rush (heals when needed, rebuffs, hits weaknesses, uses Theurgy).
  - Remove the post-battle All-Out flashes.
  - Shuffle Time.
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
- **SolarWeapons.png (12 naginatas):** each is a REAL weapon with its own stats and a bonus that suits its look (snowflake → ice, fox → crits, and so on), earned from shops, chests, bosses, links and achievements. Cut files are in `assets/femc/battle/art/weapons/`.
- **ChatGPT Image Oct 18, 2026, 02_44_02 AM.png** (the Last Train with the veiled lantern figure and Solar facing it) **replaces** the current "facing Wren's Shadow" CG. The 02_44_45 file is an identical copy.
- **GroupChatShadow.png and fishmongerShadow.png:** new Shadows on the Hoax and strangers memory floors, animated like the others.
- **PossibleUses/** (Aigis, Koromaru, Mitsuru full bodies): compendium and party-menu art.
- **Skip** the Shinjiro close-up (05_05_25 PM). Kat is regenerating it with an Evoker.
