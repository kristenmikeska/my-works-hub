# FEMC Revamp · Battle & Systems Roadmap (draft 1)

**Build plan:**
- **Batch 1 (in progress):** spell animations, Evoker summon, Shadow reactions, party building + Tactics, status effects.
- **Batch 2:** Tartarus node map, Theurgy, shops and equipment, social links in battle, Persona evolutions, full-moon bosses, accurate P3R data, balance testing, art cleanup, vector icons.

What's next for the battle prototype (`femc-battle.html`). **Claude** = code, **Kat** = art, assets and decisions.

---

## 1. Quality of life (Claude)
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
- [ ] Decision still open: difficulty modes
