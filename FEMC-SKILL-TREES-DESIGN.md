# Party skill trees, redesigned: the design sheet

For Kat's sign-off before anything is built (roadmap section 4). Spoiler-free.

## How every tree works

- **Shape:** each member gets a small radial tree drawn like Solar's sun: a little "orbit" around her. A short **core** in the middle, three **builds** going outward (one ray each), and one **Solar ray** that points back toward her.
- **Size:** about 40 nodes in 8 rings.
  - Core: 4 nodes.
  - Each build: 10 nodes.
  - Solar ray: 5 nodes.
  - Crown: 1 node, the member's capstone.
- **Opening the rings:**
  - Rings 1-4 open by level, at levels 1, 15, 30 and 45.
  - Rings 5-7 also need link ranks 4, 7 and 9.
  - Ring 8 and the crown need link MAX (rank 10).
  - The six fighters whose links go to rank 15 (Akihiko, Shinjiro, Jihoon, Minji, Jungwon, Haechan) get one extra **rank-15 node** on their Solar ray.
- **Points:**
  - About 55-60 points by level 99, against about 85 to buy everything.
  - That's roughly two builds out of three, so the third is a respec at the Velvet Room (yen, as now).
- **Solar stays the strongest:**
  - Party passives keep their current caps (crit, evasion, counter).
  - The biggest numbers live on the Solar ray, and they make *her* better.
  - So the best party member is the one who makes Solar shine.
- **Saves:** every node they own today keeps its id inside the new tree, so nothing is lost; spent points carry over.
- **Signature finals** (the link-MAX skill evolutions, like Sonic Punch → Sonic Blitz) stay exactly as they are.

## New battle hooks the Solar rays share

Six new effects; each member's Solar ray uses two or three of them.

| Hook | What it does |
|---|---|
| **Assist** | When Solar hits a weakness, this member may strike the same Shadow for free. |
| **Kindling** | This member's hits fill Solar's Theurgy gauge a little. |
| **Cover** | A chance to take a single-target hit meant for Solar. |
| **Baton** | When this member earns a One More, they can pass it to Solar, and her next hit is stronger. |
| **Sunlit** | Buffs this member puts on Solar last a turn longer, or start the battle on her. |
| **Resonance** | While this member is in the party, Solar's hits of one element (theirs) are stronger. |

## The twelve

### Akihiko: Striker (fast hits; chases weaknesses for One More turns)
- **Core:** Roadwork, Footwork, Counterpunch, Jab.
- **Builds:**
  - **Champion:** crits and boss damage (Main Event, Title Fight, a crit-on-Down node).
  - **Combo:** follow-ups that chain (Combination, a second-follow-up node, Speed Bag).
  - **Thunder:** Elec (Ziodyne, Maziodyne, Corkscrew Thunder, an Elec-pierce node).
- **Solar ray:** Assist, Baton, Resonance (Elec).
- **Crown:** *Undisputed.* After any One More he gets one extra free jab at the same target.

### Yukari: Medic
- **Core:** Archery Club, Steady Aim, Mediarama, Bedside Manner.
- **Builds:**
  - **Healer:** big heals (Diarahan, Healing Light, overheal into a small shield).
  - **Lifeline:** revive and cleanse (Samarecarm, a party ailment cleanse, Guardian Angel).
  - **Gale:** Wind damage (Magarudyne, Gale Force, Sharpshooter).
- **Solar ray:** Sunlit (Solar starts healed above full as a small shield), Cover, Kindling.
- **Crown:** *Second Wind.* The first time Solar would fall each battle, Yukari revives her at once.

### Junpei: Guardian (the tank)
- **Core:** Batting Practice, Provoke, Pinch Hitter, Rally Cap.
- **Builds:**
  - **Wall:** taunt and soak (Endure, damage taken down while provoking, counter while guarding).
  - **Slugger:** Fire bruiser (Agidyne, Maragidyne, Fastball).
  - **Clutch:** stronger when low (Comeback Kid, Grand Slam, a below-a-third crit node).
- **Solar ray:** Cover (his is the strongest), Baton, Kindling.
- **Crown:** *Home Plate.* While he's standing, Solar can't be knocked Down.

### Mitsuru: Saboteur (ailments)
- **Core:** Fencing Form, Bufula, Poise, Executioner.
- **Builds:**
  - **Freeze:** Cold Front, Mabufudyne, Frost Edge.
  - **Charm:** Marin Karin line, longer charm, Charm chance up.
  - **Debuff:** Matarunda, Marakunda, The Kirijo Line.
- **Solar ray:** Resonance (Ice), Sunlit, Assist (on a frozen or charmed foe).
- **Crown:** *Execution.* An ailing Shadow takes a guaranteed critical from Solar once per battle.

### Aigis: Gunner (multi-hit)
- **Core:** Firmware Update, Targeting, Auto Repair, Covering Fire.
- **Builds:**
  - **Spread:** hits every foe (Myriad Shots line, more hits per skill).
  - **Precision:** single target (accuracy, crits, Triple Down).
  - **Fire Support:** debuffs with every volley (Rakunda on hit, Provoke shield).
- **Solar ray:** Assist (her strongest), Cover, Kindling.
- **Crown:** *Orgia Mode.* For three turns, every hit she lands also fills Solar's Theurgy.

### Ken: Cleric (heals plus Light)
- **Core:** a stat node, Dia line, Hama, Rakukaja.
- **Builds:**
  - **Healer:** Diarama → Mediarama, regen on the party.
  - **Light:** Hamaon, Light damage up, a Light-pierce node.
  - **Protection:** barriers, Rakukaja → Marakukaja, Me Patra.
- **Solar ray:** Sunlit, Cover, Resonance (Light).
- **Crown:** *Lance of Justice, refined.* His Light hits deal extra damage equal to a share of Solar's level.

### Koromaru: Trickster (speed, instant kills, ailments)
- **Core:** a speed node, Mudo, Evade, Fire.
- **Builds:**
  - **Swift:** turn order and evasion.
  - **Reaper:** Mudoon, instant-kill chance up.
  - **Mischief:** fear and distress ailments, Evil Smile.
- **Solar ray:** Baton, Assist, Kindling.
- **Crown:** *Loyal to the End.* Whenever Solar is hit, he may counterattack the Shadow that did it.

### Shinjiro: Berserker (heavy hits, risky)
- **Core:** a power node, low accuracy softened, HP up, counter.
- **Builds:**
  - **Power:** huge single hits, Gigantic Fist.
  - **Bloodlust:** trades HP for damage, stronger when hurt.
  - **Retaliation:** counters and endure.
- **Solar ray:** Cover, Baton, Kindling (big hits fill a lot).
- **Crown:** *Last Stand.* At low HP, his next hit can't miss and Solar's next hit is stronger too.

### Jihoon: Hype-man (buffs)
- **Core:** a stat node, Tarukaja, Garu, a crowd-pleasing passive.
- **Builds:**
  - **Hype:** party buffs (Matarukaja, Heat Riser, buffs last longer).
  - **Gale:** Wind strikes and Wind magic.
  - **Chaos:** Jihoon-centric (random big swings, a "watch me" taunt that powers him up).
- **Solar ray:** Sunlit (his is the strongest), Baton, Resonance (Wind).
- **Crown:** *Light of Your Life.* The first buff he casts each battle hits the whole party at three levels.

### Minji: Spotter (heals plus intel)
- **Core:** a stat node, Dia line, Clear Sight (scan), Light.
- **Builds:**
  - **Healer:** heals and regen.
  - **Intel:** scan reveals weaknesses for the whole party, and a weakness hit lands harder.
  - **Light:** Light damage.
- **Solar ray:** Assist (on weakness hits she revealed), Sunlit, Kindling.
- **Crown:** *Cut. Print.* Once per battle, replay Solar's last skill for free.

### Jungwon: Strategist (precise debuffs)
- **Core:** a stat node, Bufu, Tarunda, Serpent Coil.
- **Builds:**
  - **Debuff:** lowers foes for longer, debuff stacking.
  - **Precision:** Ice crits and accuracy.
  - **Defense:** guard, party defense, Black Tortoise.
- **Solar ray:** Sunlit, Cover, Resonance (Ice).
- **Crown:** *Appointed.* At the start of each battle, he picks the strongest Shadow; Solar deals much more to it.

### Haechan: Assassin (single target)
- **Core:** a stat node, a dagger node, Mudo, Zio.
- **Builds:**
  - **Execute:** Dark finishers, big damage on low-HP foes.
  - **Combo:** Elec and Slash chains, follow-ups.
  - **Ambush:** first-turn damage and crits.
- **Solar ray:** Assist (his strongest single hit), Baton, Kindling.
- **Crown:** *Every Single Universe.* When Solar lands a critical, he strikes the same Shadow at once.

## Questions for Kat
1. Do the crowns feel right for each character?
2. Should a respec stay yen at the Velvet Room, or become free once per in-game month?
3. Anyone whose class or builds you'd change?
