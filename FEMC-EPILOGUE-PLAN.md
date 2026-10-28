# Persona 3: Solstice: the epilogue act, build plan

*Written 2026-10-27. Planning only: no game file changes with this doc. It builds on your notes in `FEMC-SOLSTICE-FUTURE.md` and the ten leans you approved in `FEMC-EPILOGUE-READINESS.md`.*

**Spoiler rules for this doc.** Runners and HOAX are written in full, because you wrote them and the epilogue plot is yours to co-design. strangers stays structural (Claude's private notes hold the specifics, as with the sync). Nothing here says what happens in the main game's endings. Where an epilogue scene has to fit an ending, this doc says "fits what the ending already set up" and the details live in a private file you shouldn't open.

---

## Contents

1. What the epilogue is
2. Engine design
   - 2.1 Epilogue mode
   - 2.2 What carries over
   - 2.3 The glitch system
   - 2.4 Half-present battles
   - 2.5 Stay, true and bad
3. Runners
4. HOAX
5. strangers (structural)
6. Stay and true (structural)
7. Art needs (for the art list later)
8. Build batches
9. Open questions for you

---

## 1. What the epilogue is

After the ending's credits, a new act opens: Solar's life back home, in the world her route took her to. It plays like a smaller *Solstice*: days with time slots, places to go, people to see, the phone, school or practice or duty, and story days. Each world runs **about three weeks** (room for a fourth if the content earns it), in three movements:

| Movement | Feel | What the glitches do |
|---|---|---|
| **Normal** (week 1) | She's home. The cover story has to hold, and the world's own drama picks up where she left it. | Almost nothing. One deniable thing a day at most, and only Solar notices. |
| **Wrong** (week 2) | Life keeps going, but things don't sit right. | The glitches get stranger. Her constant (Haechan, Jungwon or both) notices one, and talks himself out of it. The first half-present fight. |
| **Bleeding** (week 3) | The Personaverse is coming through. | Other people see what's left behind (stopped clocks, a blue butterfly). Then someone catches it on camera, or in front of a crowd. The last fights, the climax, and the final "I'll find you" scene. |

Each world has **a few routes**, set by how you played the year and by one or two choices in week 1. Every epilogue ends on its world's holding-on moment and a short *Persona 3: Equinox* card.

---

## 2. Engine design

### 2.1 Epilogue mode

**One save, two layers.** When you enter the epilogue, the finished year is tucked inside the save (as `year1`) and a fresh epilogue state takes its place. The engine runs the epilogue with the same machinery as the year (date cards, slots, Go Out, link scenes, the phone, routines, late nights, weather), pointed at that world's data instead of Iwatodai's. When the epilogue ends, the year comes back out, so the end screen and New Game+ work exactly as they do now. One save per slot stays true, and old saves are never touched.

**What changes in the engine (small, contained):**
- **The calendar learns other years.** The year is hard-wired to April 2009 to March 2010 today. Each calendar file gets a `year` and a `start`, and the date maths reads them; Iwatodai's calendar becomes `year: 2009` and behaves exactly as before. Each epilogue calendar has its own dates, holidays, finals or breaks, weather climate, full moons and a much shorter list of slots.
- **A world context.** The engine's data getters (calendar, places, links, story events, texts, routines, run-ins, variant lines, jobs) read the active world's files while the epilogue runs. The link list is rebuilt for that world, so only home people appear.
- **World data is loaded on demand.** `assets/femc/game/data/epi/<world>/…` (calendar, places, people, story, texts and routines, glitches) loads when you enter, so the main game's start-up doesn't get heavier.
- **New file `assets/femc/game/epilogue.js`:** entering and leaving, carry-over, the route lock, the end card. A second new file, `glitch.js`, holds the glitch system (2.3).
- **New scene conditions:** `ifYear` (anything from the year: an ending flag, a romance, a rank, a Christmas pick, who crossed), `ifGlitch` (the glitch stage is at least n), `ifEpiRoute`.

**The home map.** Each world gets its own Go Out areas, backgrounds, and a few activities (study, eat, practice, a walk, a shop). No Tartarus, no Velvet Room, no gacha machines (the hidden capsule turning up as a glitch is a joke worth making once).

**Days.** Fewer slots than Gekkoukan: Morning (class, practice or duty), Daytime or After School, Evening, Late Night. School and job days come from the world (Runners: classes, the team's four practice days, finals; HOAX: winter break, then make-up exams and council duties; strangers: the house's days).

**Money.** Each world has its own (dollars in Syracuse, won in Korea), shown with the right sign. Yen stays with the year.

**People.** Home people are links again, but lighter: **home bonds**. Each person has three to six scenes across the act, opened by week, route and the glitch stage, and a closeness meter that feeds the routes. Their starting closeness comes from your year with them (a rank-15 Hanni walks in already knowing everything). No ranks 1–10 again, no perks, no rank cards; a small "bond" toast instead.

**Unlocking.**
- On the end screen of a Runners, strangers, HOAX, Stay or true ending, a new button: **Epilogue ▸** (the world's name). The bad ending gets none.
- Before you go in, the game offers to save the finished year to a slot, so you can always come back to the end screen or start New Game+ from it.
- Mid-epilogue saves work in every slot and in backup codes. The slot label says "Epilogue · Syracuse · Dec 9".
- Finishing an epilogue is recorded with your clears, and gets a passport stamp (one per world, plus one for all of them).

**Leaving.** The epilogue's last scene, then its end card ("EPILOGUE · *title*"), the Equinox card, then back to the year's end screen, with New Game+ as before. New Game+ carries what it always did, plus a small keepsake from the epilogue (a card in the journal).

### 2.2 What carries over

| Carries over | How it shows |
|---|---|
| Her memories of the year | She remembers all three lives and the Personaverse (your memory rule). The journal of memory cards is there, read-only. The album gains an "Iwatodai" page. |
| Social stats | Same five, same ranks. They still gate choices (Courage for a confrontation, Charm for a hearing) and can still grow a little. |
| Who she was with | The romance on your save, and your Christmas Eve pick, choose the route you start on and colour scenes. |
| Ranks with home people | Starting closeness, and which secrets they already share with her. |
| Who crossed over | People you never met in the year still crossed, offscreen (your approved lean); they get one line of flavour instead of shared memories. |
| Her battle save | Levels, Haenim's sun, her forms, skills, Echoes and gear sit dormant until the half-present fights wake them. |
| Looks | Her Wardrobe phone case, and a home outfit per world. |

| Doesn't carry over | Why |
|---|---|
| Yen, items, Tartarus progress | None of it exists back home. |
| The Personaverse links | S.E.E.S., the visitors and the Persona-world people come back only as glitches and in the fights. |
| Jobs, clubs, perks, the gacha | Home has its own days. |
| The calendar, weather and moon | Each world has its own. |

### 2.3 The glitch system

**Stages.** `S.glitch.stage` runs 0 to 4. Dates set the floor (week 1 stays at 0–1, week 2 is 2, week 3 is 3, the climax days are 4) and triggers push one night higher:
- **Midnight:** the Late Night slot is the thinnest time.
- **The full moon** that falls inside each world's act.
- **Thin places:** each world has two or three (a rooftop, a harbor, a gym).
- **The constant nearby:** Haechan, Jungwon or both.
- **Strain:** choices where Solar holds a lie together.
- **Story days:** set pieces call for a stage directly.

**Who sees it, by stage.**

| Stage | Who notices |
|---|---|
| 0–1 | Solar only, and she can't prove it. |
| 2 | Her constant notices once, faintly, and explains it away. |
| 3 | Her constant can't explain it away anymore. Everyone else sees only what's left behind: every clock in a house stopped at 12:00, a blue butterfly on a keyboard, frost in the shape of a door. |
| 4 | It happens in front of other people. A camera, a crowd, a call. |

Who her constant is: **Runners**, Solar first, then Haechan. **strangers**, Haechan and Jungwon together. **HOAX**, Jungwon.

**Where glitches come from.** Each world has a glitch file (`data/epi/<world>/glitches.js`) in the same shape as routines: an id, a stage, a kind, and gates (days, slot, place, who's there, moon, weather, route), plus a few ambient ones per stage that roll from a seed, so a reload never changes them. A scene can also call one directly with a `{ glitch }` line.

**The kinds, and what each reuses:**

| Kind | What you see or hear | Built from |
|---|---|---|
| **Tint** | The scene washes Dark Hour green for a beat. | The Dark Hour background filter (`darkhour` mood). |
| **Weather** | Snow falls upward. Rain hangs in the air. The tide stops. | The weather overlay (`weather.js`), with new `rise` and `hold` modes. |
| **Clock** | The HUD reads 12:00 AM for a second, and the moon icon goes green. | The HUD and moon drawing. |
| **Date** | The date card flickers to a date in Iwatodai. | The date card, plus the summon card's glitch-letter animation. |
| **Phone** | A dead Personaverse thread lights up: read receipts, a typing bubble, a message from a sender with no face. | The phone, text banner and chime. |
| **Map** | Go Out shows one extra card for a slot: Iwatodai Station, greyed out. At stage 4 it opens. | Go Out's area cards, with Iwatodai's own art. |
| **Face** | One frame of a portrait swaps to someone from S.E.E.S. | The existing portraits. |
| **Sound** | Two seconds of a P3 track under the home music. A Velvet Room piano note. Static. | The music player's crossfade and the battle music pools. |
| **Tear** | Cracks and glass across the screen, then gone. | The Dark Hour transition's shards and crack lines. |
| **Name** | Haenim's name glitching, in a text or on a screen. | The summon card's glitch letters. |
| **Hands** | A choice she didn't write appears: *(Evoke.)* She doesn't pick it. Then once she does. | The choice list. |

**Settings.** A new **Glitch effects** setting: Full / Gentle / Off, default Full (Gentle shortens and softens everything and makes the unscheduled ones rarer; Off shows none, though a story choice that needs one still appears, plainly). Reduced motion shows still frames; Reduce flashes turns every flash into a fade. *(Built as Full / Gentle / Off in batch 2, instead of the "Story only" option first planned.)*

**The psychological thread.** The glitches are also her Persona still being inside her (your Concept 2 note). The dread works best quiet: not monsters at home, but Solar noticing a gap in herself where something used to be. That thread runs under every world.

### 2.4 Half-present battles

Four fights per world, near the end, all at midnight, all in a version of a home place with Tartarus coming through it. They're scripted story fights through the battle handoff the game already has, so a world can be written before its fights are (the handoff falls back to a plain story fight until the real one exists).

| # | Stage | What it's like | Rules |
|---|---|---|---|
| 1 | **Alone** | Solar, alone, in a home place half turned into Tartarus. Haenim answers, but her name glitches. | Solo, can't escape. After a few rounds or a hard hit she's pulled back, mid-fight. |
| 2 | **Unseen** | She's in a fight with S.E.E.S., and they can't see her. | **The ghost slot:** Solar is in the party but can't be targeted. She acts only every other round, and her portrait flickers between turns. Allies fight on their own (Act Freely); she can't direct them, Bond, All-Out or fire Theurgy. Her heals land and they bark about it ("Who did that?"). The navigator reads "an unknown signal". |
| 3 | **Visible, unheard** | They see her flicker. Nobody hears her. | She can be hit now (half damage). Her Talk is "…". **Partial control:** a skill or Analyze on a foe marks it, and allies start following her marks. |
| 4 | **One second of contact** | For one round, they can hear her. | A banner: ONE SECOND. For exactly one round, allies obey Direct and she can use a Bond skill with her person from that world, or an All-Out. Then she's pulled away. |

**She can't lose these.** If her HP runs out she fades back home instead, with a different line (lean; open question 13). Small EXP goes to her own battle save. Fights 2–4 keep Akihiko in the party (he found her first), plus two of S.E.E.S. picked by your highest ranks.

**Battle side:** new scripted fights `epi-<world>-1..4` built from one table (backdrop, Shadows, party, rules), new rules `ghost` (alone / unseen / unheard / contact), `flicker`, `mark`, `contactRound`, and a `.bt-ghost` look for her figure (transparency, colour split, flicker), all drawn in code. Shadows reuse the memory-floor Shadows and the existing sheets. The Stay epilogue runs the same four the other way round (2.5).

**Why S.E.E.S. are fighting at all** is Equinox's question, not the epilogue's. The epilogue never explains it.

*Built in batch 6 (2026-10-28) as above, with two small additions: in fight 1 a third of her skills (a different third each round) don't answer, and the menus leave out Item (she brings nothing home) and Tactics (each stage sets them). The backdrop is the scene's own place with Tartarus coming through it. strangers and Stay only need their rows in the fights table.*

### 2.5 Stay, true and bad (your approved leans)

- **Stay: a reverse epilogue.** Iwatodai is home, and the signals come *from* the three worlds: dead threads lighting up from Syracuse, a call from Korea that gets through for a second, Haenim's charms ringing on their own. The four fights run backwards: she's pulled into home places in the three worlds, where the people who love her there can't see her. Someone from this world holds on. It's the cheapest world to build (Iwatodai's map, people and art already exist) and it leads straight into Equinox.
- **True: a short three-part coda first, a braid later if there's room.** One long scene in each world, each ending on its holding-on moment. If you want more, a braided version can follow as its own batch: three small calendars, rotating by day. Memory follows your approved lean: the fade reaches only this world's people.
- **Bad: no epilogue.** No button on its end screen.

---

## 3. Runners

**Dates:** Monday **12/1/2025** to Saturday **12/20** (three weeks), with the end of finals and the first snow as the edge. **Home bonds:** Haechan, Hanni, Hyein, Minji, Jaehyun, Mark, Danielle, Jaemin, Chenle, plus the team (Doyoung, Haerin, Olivia) and Sigma (Jeno). **Thin places:** the Language Arts rooftop, studio 4B, the Sigma house stairs.

**The cover, two layers** (your approved lean):
- **Campus:** the rumour that certain Sigma and Alpha members went on *another* joint trip, so "exclusive" not even the whole chapters were invited. It overlaps Thanksgiving break. Everyone goes along with it, because the chapters really do get special treatment.
- **Her parents:** the same story told harder ("an emergency trip with the chapter, no signal"). She missed the Foundation Dinner and Thanksgiving, and the school was called. Her father doesn't believe a word of it, and runs things through his office. He's on the phone, never in person, until after the act.

**Who was gone, and how long (proposal).** Each searcher's absence back home fits a gap in the break, so the story only has to hold for Solar.

| Who | Gone | What they missed | What it costs them |
|---|---|---|---|
| Solar | 11/22–11/30 | The Foundation Dinner, Thanksgiving, her remote practices | Her father. Doyoung. |
| Hanni, Hyein | from about 11/24 | Thanksgiving at home ("Friendsgiving trip") | Their parents' group chat. |
| Minji | from about 11/25 | Two of Doyoung's remote practices | Doyoung, who is *furious*. |
| Jaehyun | the night of 11/29 | Nothing on the field: he left after the Boston College game | Danielle noticed. |
| Mark | from about 11/21 | Sigma's members-only Friday | Sigma noticed. |
| Danielle | 11/29, after Jaehyun | Nothing anyone can name | She knows the trip is fake. |
| Jaemin, Chenle | from about 11/26 | The Sigma Friday (11/28), which started the rumour | Jaemin's stories went quiet; that *is* the rumour. |
| Haechan | from about 11/22 | His studio clients | Chenle. |

**How canon and the game meet.** The epilogue follows your December beats from 12/1 on, with one big difference: game Solar never had Manhattan and Thanksgiving (chapters 79–81). She was gone. So the sibling talk with Jaehyun, the corroboration about Mark and the distance she kept now happen in week 1, at home in Syracuse, under the cover story. The Personaverse year also did some of what Regionals does in canon: Haechan already lived with her friends for months, so he's warmer with them than the book's Haechan is. Their own unfinished business at home (the stem) still has to be done on her terms, even if they were together over there.

### Week by week

**Week 1, normal (12/1–12/7)**

| Day | Beat | Notes |
|---|---|---|
| Mon 12/1 | The first morning back: it fits what the ending set up, and honours something said late in the game. The girls drill the trip story ("memorize it"). `@SUesports`: FIVE DAYS TO REGIONALS. Statistics, with an echo of the Mark seat. Practice. Late: she sees Chenle come out of 4B pale, and he doesn't say why. | Canon 82 from her side. Chenle's "Does she know?" stays offscreen unless you want one cutaway (open question 8). |
| Tue 12/2–Wed 12/3 | **The recording confession.** Haechan asks for a conversation, and *she* picks the place (a choice of three neutral rooms). He tells her before she hears anything. **Choice:** *Not yet* (canon: don't delete while she decides) / *Delete it* / *Give me the file*. If he already told her over there, this is the retelling: "I told you over there. I'm telling you here, where it counts." | Canon 83. Her choice feeds the Haechan route. |
| Wed–Thu | Jaehyun at the door of the lab: "Did you eat." The sibling talk canon put in Manhattan: Mark wasn't the innocent party; he won't absolve Haechan either. | Canon 79–80, moved. |
| Thu 12/4 | Last practice before Regionals. **Full moon.** The valley promise passes, unpaid. At midnight the moon is green for one breath, and only Solar sees it. | Canon 84. The first glitch worth the name. |
| Fri 12/5 | Sigma party; the team skips it. Jaemin's stories carry the "exclusive trip" joke. | Canon 85. |
| Sat 12/6–Sun 12/7 | **Regionals** (set piece; see below). Then **Minji's closure** away from the celebration, revised so it doesn't congratulate a relationship Solar hasn't chosen. Haechan visible but peripheral, with the friends. Mark's brief, non-demanding apology. | Canon 86–88. |

**Week 2, wrong (12/8–12/14)**

| Day | Beat | Notes |
|---|---|---|
| Mon 12/8 | Recovery, class, decompression. | |
| Tue 12/9–Wed 12/10 | **The studio, on her terms.** She goes to 4B because she's decided. Delete what was taken, record the line again knowing it'll be music, then hear the track. The terms (recordings and images, exclusivity, who knows, what if SUnews photographs them, honesty if he wants to disappear or use, a safety plan). The kitsune keycap: "Your setup looked boring." **Glitch:** on playback there's a room under her voice, a dorm lounge, someone laughing. Haechan hears it too and decides it's bleed from another session. | Canon 89. Haechan's first notice. On other routes, she still goes, for her voice, with a friend at the door. |
| Thu 12/11–Sun 12/14 | **Strategy, not fire.** The alliance against Danielle: screenshots and dates, who knew what, proof versus inference, careful with Chungha and Chaeyeon, no fresh public scene. **The game's twist:** Danielle was in the Personaverse too. She knows the trip is fake, and she brought something back on her camera that shouldn't exist. | Canon 90. |
| Fri 12/12 | Sigma party: their first social test. **Going public** is a choice on the Haechan route: inner circle only, or a post on their own terms before Danielle can make one. **Glitch:** the whole party freezes for one second; only Solar moves. This time Haechan sees it. | Canon 90. Stage 2. |
| Sun 12/14 | **Half-present fight 1 (alone):** studio 4B's hallway at midnight, half Tartarus. | |

**Week 3, bleeding (12/15–12/20)**

| Day | Beat | Notes |
|---|---|---|
| Mon 12/15–Thu 12/18 | **Mark's fall verdict.** Sigma's warmth turns; every copy accounted for; no clean reconciliation. Finals around it. In the game Mark remembers the Personaverse too: he's the one who sees her flicker in the Sigma kitchen, and says nothing. Complicated, not a villain. | Canon 91. |
| Tue 12/16 | **Fight 2 (unseen).** | |
| Thu 12/18 | **Fight 3 (visible, unheard).** Every clock in the Alpha house stops at 12:00; the girls see it. | Stage 3: others see the residue. |
| Fri 12/19 | **The Sigma holiday party: the climax.** Ensemble first (Jaemin hosts, Jeno handles the room). Danielle gets her footage: on the Haechan route it's canon's intimate sequence; on the others it's the girls covering for Solar, or Minji's camera catching it first. **What the footage shows is impossible:** at midnight Solar flickers out of frame for one second. That second is **fight 4 (one second of contact)**, pulled mid-party. Afterwards Danielle has a choice, and how your year went with her decides what she does with the file. | Canon 92, plus the bleed. Stage 4. |
| Sat 12/20 | **First snow, finals close.** The Language Arts rooftop. **The final scene:** she's pulled, Haechan holds on. "I'll find you. Every world." On the other routes their person is there too (the girls holding her hands, Minji's camera still running), and Haechan still holds. | Canon 93's snow. Ends the act. |

### Set pieces
- **Regionals (12/6–7):** three movements like canon (arrival and opening bracket, the hard middle, the result). Solar's calls in the hard middle are choices (Kiriko reads, with Minji as her duo); one wrong read costs a map but never the result. Sakura is on the broadcast (LE SSERAFIM, below).
- **The studio (12/9–10):** a scene with real choices about consent, not a romance reward.
- **The 12/19 party:** a party run-in loop (like the main game's run-ins), then Danielle, then the second.
- **The rooftop in the first snow:** the final.

### Glitch schedule
| When | Glitch | Who sees |
|---|---|---|
| 12/1–12/3 | A P3 sting in the Alpha house hall; her thumbs type a Gekkoukan word. | Solar |
| 12/4 (full moon) | The moon goes green for one breath; the clock reads 12:00. | Solar |
| 12/6–7 | A face in the Regionals crowd is Junpei's for one frame. | Solar |
| 12/9–10 | The room under her voice on playback. | Solar, Haechan (explains it away) |
| 12/11–13 | A dead thread lights up: Fuuka typing, no message. Go Out shows Iwatodai Station for one evening. | Solar |
| 12/12 | The party freezes for one second. | Solar, Haechan |
| 12/14 | Fight 1. | Solar |
| 12/15–18 | Snow falls upward on the quad. Every clock in the Alpha house at 12:00. A blue butterfly on the kitsune keycap. Fights 2 and 3. | Residue: everyone. The flicker: Mark. |
| 12/19 | The footage. Fight 4. | Everyone at the party, later, on Danielle's phone |
| 12/20 | The pull. | Everyone on the roof |

### Routes and how you enter them
| Route | What it's about | How you get it |
|---|---|---|
| **Haechan** | The stem, the studio, going public, the 12/19 sequence, the roof. | Romance with Haechan on your save, or his top ranks on the Runners lean, then *Not yet* or *Give me the file* on 12/2–3 and going to 4B in week 2. |
| **The cover** (Hanni and Hyein) | Sisters defending the emergency vacation against Danielle, a cover that keeps getting harder to hold, the Alpha house with the clocks stopped. | Haechan as a friend, or choosing the girls at the week-1 crossroads (after Regionals). |
| **Minji** | Her camera, her closure or her return, the film showcase seed. If you romanced her in the year, the closure scene becomes something else. | Minji's romance or high rank on your save, and staying with her after Regionals. |

The route locks at the end of week 1 (Sunday night after Regionals), P5R-style: a quiet choice that looks like nothing. Mark and Danielle run through every route.

### LE SSERAFIM in Runners (proposal)
Your future canon has Solar joining them in Korea, so nothing here pins down how they meet for real:
- **Sakura** is a guest caster on the Regionals broadcast (a gamer, a known face). She calls Solar's Kiriko play, by name, on stream.
- **Eunchae** is a high-school senior on a campus visit during studio week. She hears Solar's voice through the 4B door and asks who that was.
- **Kazuha and Chaewon** are on the demo Haechan is mixing for a paid client: voices on a track, then a video call he takes in front of Solar.
- **Yunjin** doesn't live in Runners yet. She's a glitch: a girl in a yellow puffer across the snowy quad who looks at Solar like she's known her forever, then isn't there. (Your "soul sisters in every world" heartache, paid on a route that isn't hers.)

---

## 4. HOAX

**Dates (assumed; open question 11):** Solar vanished on the Monday of exam week, Mon **12/11/2023**. She's home about ten days later, Thursday **12/21**, at the start of winter break. The act runs to about **Saturday 1/13/2024**: break, Christmas, New Year, and back to school. **Home bonds:** Jungwon, Jihoon, Cherry, the council (Sunoo, Heeseung, Jake, Jay, Sunghoon, Niki), the crew (Junkyu, Asahi, Hyunsuk, Jaehyuk), her parents. **Thin places:** the gym, the council room, Yeobo's after closing.

**The cover:** a council retreat, in exam week. The council and her friends were in the Personaverse too; her friend group, being less popular, mostly went unnoticed. The school told her parents "a council retreat", and her mom doesn't buy it. The forum has theories. And the president and vice president just missed **every exam**.

**The impeachment drama.** Over break the forum turns the missing week into a motion: dereliction (skipping exam week on an "unapproved retreat") plus a question about the bake-sale tin. It's filed when school opens and heard at an assembly in week 3. (Who files it is open question 10.) Jihoon would enjoy all of it far too much, and pretends the Personaverse didn't happen.

**The gap.** Solar keeps reaching for a name, and Jungwon notices. He carries both of his lives and knows exactly who she's reaching for (your round-3 correction). He's the one person in HOAX she doesn't have to explain it to.

**Your canon plans for this stretch** (the winter-break party, Christmas with Jungwon meeting her parents and Jihoon's hot cocoa, Jungwon kept home by his parents, the rumours, the video) sit right inside the act. This plan uses them, bent by route; whether you'd rather the epilogue run beside them is open question 9.

### Week by week

**Week 1, normal and goofy (12/21–12/27)**

| Day | Beat |
|---|---|
| Thu 12/21 | Home. The group chat, renamed something stupid. Her mom at the door: "A *retreat*? In *exam week*?" The forum's front page: "WHERE IS THE COUNCIL (part 4)". |
| Fri 12/22 | The council's emergency meeting at Yeobo's: getting the retreat story straight. Sunoo is a terrible liar; Heeseung writes it down; Jake has a name for them. Make-up exams are announced for the first week back. Jungwon's parents: "Just wait till you get home" has arrived. |
| Sat 12/23 | Study plans that collapse. Cherry and Sunghoon's "soon". The crew's karaoke. **Glitch:** the **haunted vending machine** outside the convenience store drops the same drink every time, whatever she presses. Funny. Only Solar thinks it isn't. |
| Sun 12/24 | **Christmas Eve:** who she spends it with (the main game's picker, at home). This is the route choice. |
| Mon 12/25 | **Christmas** (your canon beat, by route): Jungwon comes by with a present and meets her parents; Jihoon brings the hot cocoa and her parents light up; Jungwon is annoyed af. |
| Tue 12/26–Wed 12/27 | **Full moon.** The **Hate Club séance** at Jihoon's empty house (Kazuha brings the board). It's a joke until the planchette spells a word in Japanese, and a station name. |

**Week 2, wrong (12/28–1/3)**

| Day | Beat |
|---|---|
| Thu 12/28–Sat 12/30 | **The winter-break party** (your canon beat, as a route set piece). The Jihoon route decides what he does there; on the Jungwon route he's kept home and she goes with Cherry; on the council route the council crashes it to kill a forum rumour. **Glitch:** the party's music drops to a P3 track for two seconds, and nobody else hears it. |
| Sun 12/31 | New Year's Eve. **Footage:** a forum livestream of the council "on retreat" (Eunchae's) has a green frame in it, and the comments notice. **The notes:** a sticky note in Solar's handwriting she didn't write, on her mirror. Jungwon sees one, and knows what it is. |
| Mon 1/1–Wed 1/3 | Studying with Jungwon (or Jihoon, or the council). The motion goes up on the forum. **Fight 1 (alone):** the council room at midnight. |

**Week 3, bleeding (1/4–1/13)**

| Day | Beat |
|---|---|
| Thu 1/4–Sun 1/7 | Snow; Yeobo's; the crew. Every clock at Yeobo's stops at 12:00. **Fight 2 (unseen).** |
| Mon 1/8–Wed 1/10 | **Back to school.** Make-up exams (Sakura proctoring; Jungwon aiming for first, for his parents). The motion is filed; the hearing is set. Prom planning starts, under a cloud. **Fight 3 (visible, unheard).** |
| Thu 1/11 | **The impeachment hearing** (set piece), Chaewon moderating, the whole school in the gym. In the middle of it, Solar flickers in front of everyone. |
| Fri 1/12 | **The gym at midnight.** **Fight 4 (one second of contact).** **The final scene:** she's pulled, and **Jungwon holds on**. **Haechan's voice comes through** the bleed, from somewhere else, framed to fit what's already been said in the game. Jungwon recognizes it, so his choice to hold on, or let go, is fully informed. |

### Set pieces
- **The council's emergency meeting** (getting the story straight, as comedy).
- **Christmas** (your beat).
- **The séance** (comedy that stops being comedy).
- **The party** (your beat, by route).
- **The impeachment hearing** (a debate scene with choices that use her social stats: Charm, Courage, Knowledge; the council backing her depends on your year with them).
- **The gym at midnight** (the final).

### Glitch schedule (comedy, then unsettling, then real)
| When | Glitch | Who sees |
|---|---|---|
| 12/21–23 | The haunted vending machine. A phone autocorrect to a Japanese word. | Solar (Cherry thinks it's hilarious) |
| 12/26–27 (full moon) | The séance. | The Hate Club, who decide Kazuha did it |
| 12/28–30 | Two seconds of P3 at the party. | Solar |
| 12/31 | The green frame in the livestream; the notes. | The forum; Jungwon |
| 1/1–3 | A dead thread lights up. Fight 1. | Solar, Jungwon |
| 1/4–10 | Stopped clocks at Yeobo's; the HUD at 12:00; snow falling upward past the classroom window during an exam; fights 2 and 3. | Residue: everyone. The flicker: Jungwon, then Jihoon (who pretends he didn't). |
| 1/11 | The hearing. | The whole school |
| 1/12 | The gym. | Jungwon |

### Routes and how you enter them
| Route | What it's about | How you get it |
|---|---|---|
| **Jungwon** | His parents and the exams, Christmas with her parents, the impeachment as a couple, the name she reaches for and the boy who knows it. | Romance with Jungwon on your save or his Christmas pick, then Christmas Eve with him. |
| **Jihoon's redemption** | He pretends it didn't happen until he can't. The hot cocoa, the party, a choice he makes differently. | Jihoon's romance or high rank, then Christmas Eve with him. |
| **The council** | The impeachment fight, all seven of them and her, forum war, the hearing. | Friends (no romance), or Christmas Eve with the council. |

### LE SSERAFIM in HOAX (proposal)
They're Hanlim students and staff the book doesn't need yet:
- **Eunchae**, a first-year who runs "Hanlim Unfiltered", the forum's livestream. Comic, relentless, accidentally the one who films the green frame.
- **Kazuha**, an exchange student who believes in ghosts and brings the board to the séance.
- **Chaewon**, the debate captain picked to moderate the hearing. Strict and fair, and the one adult-sounding voice in the room.
- **Sakura**, the student teacher proctoring make-up exams. A gamer; she knows Solar didn't study.
- **Yunjin** as an echo (**approved by Kat, 2026-10-27; build in batch 5**): mid-glitch, Eunchae's forum livestream cuts to her for a second, looking at Solar like she's known her forever, and then it's back. The same person exists in every world.

---

## 5. strangers (structural)

*The specifics (dates, canon tie-ins, scenes) are in Claude's private notes, like the sync. This is the shape.*

- **Pickup:** the private point after her vanishing, with about the same gap as Runners. It's deep winter, mid-crisis, and the pressure comes from outside.
- **Length:** three and a half to four weeks, ending well before a date the book owns.
- **The cover:** her father hides her absence so the house doesn't look weak. He knows she's lying and chooses not to push yet.
- **Haechan and Jungwon** both remember, both see the glitches, and share the secret. They're her constant together.
- **The glitches carry real consequences:** a gun that won't fire, the tide stopping, a call that reaches Iwatodai for a second.
- **Routes:** Haechan, Jungwon, or family. You enter them through your year (romance and the Christmas pick) and a choice in week 1.
- **Movements:** week 1, home and the cover (the house's routine, Yunjin, both boys); week 2, wrong (a festival full moon); week 3, bleeding (consequences); the climax and the final scene.
- **Final scene:** Haechan and Jungwon hold onto her together.
- **LE SSERAFIM:** in strangers they're Yunjin's peers, Solar's age, not kids. They come into the act through Yunjin, as light relief that knows nothing about the house.
- **Canon:** it ties into canon events without following them closely, and it never states anything the book hasn't printed. **This world is built after the manuscript passes Claude's private pickup point** (lean; open question 12), the same re-sync the strangers audit already promises. Until then its engine data and glitch scenes can be prepared, fenced off from anything canon-dependent.
- **Tone:** the most dangerous of the three, with intense violence.

---

## 6. Stay and true (structural)

**Stay, the reverse epilogue.** About three weeks in Iwatodai after the year, ending on a date that means something to this game. The same three movements, reversed: normal (spring in the dorm), wrong (dead threads from the three worlds light up: a Syracuse group chat, a house in Korea, a Hanlim forum), bleeding (Haenim's charms ring by themselves, and the four fights pull her into home places in the three worlds, where the people there can't see her). Someone from this world holds on, and three voices come through. Iwatodai's places, people and art are reused, so the new work is mostly writing.

**True, the coda.** Three scenes, one per world, each its own small day and each ending on that world's holding-on moment. Then the Equinox card. The braid (three short calendars alternating) is an optional later batch.

---

## 7. Art needs (for the art list later)

*Not added to `FEMC-ART-TODO.md` yet. Every item works without art first (backgrounds fall back to the nearest existing one, faces to a silhouette, CGs to no CG). Places are for Gemini; anything with a face is for ChatGPT.*

**Reused as they are:** `bg/flashback-syracuse-quad` (snowy quad, night), `bg/flashback-alphaphi-house`, `bg/flashback-frat-party`, `bg/flashback-hamlim-gym`, `bg/flashback-hamlim-hallway`, `bg/yeobos-cafe`, `bg/flashback-lee-house`, `bg/flashback-incheon-harbor`, `bg/flashback-fish-market`, and every Iwatodai background (Stay). The flashback set is already in the game's style and reads as present-day once the flashback treatment is off.

### Backgrounds

| Save as | What | Must match |
|---|---|---|
| `epi-r-quad-day` | The Syracuse quad on a grey December day, salted paths, students in parkas. | `bg/flashback-syracuse-quad`: the same Hall of Languages towers and domed chapel, the same lamppost, from the same angle. Daylight, overcast. |
| `epi-r-studio-4b` | Studio 4B at night: a mixing desk, two monitor speakers, two chairs (a bag on one), a mic in a booth behind glass, one lit window. | Small and ordinary, a college music building, "4B" on the door. No neon. |
| `epi-r-esports-lab` | The SU eSports lab: rows of PCs, team jerseys on chairs, a whiteboard with a practice count, a Regionals countdown taped up. | Syracuse orange and navy. The keyboards are plain, apart from one kitsune keycap (Solar's, after 12/9). |
| `epi-r-rooftop-night` + `-snow` | The Language Arts building rooftop at night, the campus below; a snow version for the final. | Concrete ledge, a vent stack, the city lights beyond, a can of Monster Pink Punch on the ledge in the plain one. |
| `epi-r-regionals` | The Regionals venue: a stage, two team booths, a caster desk, a big screen, a crowd in the dark. | A college esports event, not a stadium. |
| `epi-r-sigma-kitchen` | The Sigma house kitchen, morning. | The same house as `bg/flashback-frat-party` (woodwork, staircase visible through the door). |
| `epi-r-sigma-holiday` | The Sigma holiday party, 12/19: string lights, a semi-formal crowd, the staircase up to the rooms. | `bg/flashback-frat-party`'s interior, dressed for December. |
| `epi-r-marshall-st` | Marshall Street in snow, evening: a café, bars, a bookstore. | Real college-strip feel; Syracuse orange banners. |
| `epi-r-lecture-hall` | A lecture hall for Statistics, empty at the end of class. | Tiered seats, one seat Solar would never take again. |
| `epi-h-council-room` | Hanlim's student council room: a long table, a whiteboard of prom ideas, the bake-sale cash tin. | The school of `bg/flashback-hamlim-hallway`. |
| `epi-h-classroom-exam` | A Hanlim classroom set up for make-up exams, snow at the windows. | The same school. |
| `epi-h-kim-house` | The Kims' living room at Christmas: a tree, a sofa, the front door visible. | Warm, ordinary, a busy family's house. |
| `epi-h-jihoon-house` | Jihoon's family house: big, half-empty, lived in by one teenager. | Expensive and lonely; pizza boxes and a dining table nobody eats at. |
| `epi-h-winter-street` | The town street at Christmas with the convenience store and its row of vending machines. | Night, snow, one machine lit brighter than the rest. |
| `epi-h-gym-midnight` | Hanlim's gym at midnight, exit signs green, the bleachers dark. | `bg/flashback-hamlim-gym`, at night. |
| strangers (3–4) | The Lee house's rooms and garden, the harbor in winter, a festival night by the water, a dust-hazed street. *(Exact list in the private notes.)* | `bg/flashback-lee-house` and `bg/flashback-incheon-harbor`. |
| Battle (4, optional) | One bleed battlefield per world (a home place half turned into Tartarus) and Stay's reversed one. | The Tartarus palette in `battle/art` and that world's home background. Without these, the battle draws its own green version of the home background. |

### CGs

| Save as | What | Must match |
|---|---|---|
| `epi-r-regionals` | Solar and Minji in their booth, headsets on, the moment the result lands. | Solar's Runners look (below), Minji's portrait, team jerseys in orange. |
| `epi-r-studio` | Solar at the mic in 4B; Haechan at the desk, deliberately not watching her. | Studio 4B (above). Her hand on the headphones. |
| `epi-r-footage` | A phone screen: Danielle's footage of the 12/19 party, Solar half there, green light behind her. | Phone UI drawn simply; the Sigma holiday party behind. |
| `epi-r-held` | The rooftop in the first snow: Haechan holding onto Solar as her edges come apart into light. | `epi-r-rooftop-night-snow`; Haechan all black and cool-toned; the green of the Dark Hour at her edges. |
| `epi-h-seance` | The Hate Club séance by candlelight; Kazuha with the board, everyone's face lit from below. | `epi-h-jihoon-house`; the crew's portraits. |
| `epi-h-hearing` | The hearing in the gym: Chaewon at the podium, the council behind Solar. | `bg/flashback-hamlim-gym` by day; Solar with her VP pin. |
| `epi-h-held` | The gym at midnight: Jungwon holding onto Solar; a song as gold light coming through from somewhere else. | `epi-h-gym-midnight`; Jungwon's portrait; gold for Haechan's voice. |
| strangers (2–3) | The festival moon, the tide stopped, and the final (both boys). *(Details private.)* | The strangers backgrounds above. |
| `epi-stay-held` | The Stay final. *(Details private.)* | Iwatodai's own art. |
| `epi-true-coda` *(optional)* | Three panels, one holding-on moment per world. | The three `-held` CGs. |

### Portraits (six faces each: neutral, happy, sad, serious, surprised, flustered)

| Who | Must match |
|---|---|
| **Solar, Runners look** | Her base portrait's face. Long dark waved hair, cool tones, a navy coat, an SU hoodie under it; slight, composed. |
| **Solar, HOAX look** | Her base face. The Hanlim uniform with a winter cardigan, her VP pin, and the small nose stud (the Personaverse version has none). |
| **Solar, strangers look** | Her base face. Hair down, a dark wool coat, the jade ring on her right hand. |
| **Chaewon, Kazuha, Sakura, Eunchae** | Their real faces. Outfits per world: Runners (Sakura on a caster's headset, Eunchae in a campus-tour lanyard), HOAX (Hanlim uniform; Sakura as a student teacher). Yunjin's existing portrait covers her glitch. |
| **Doyoung, Haerin, Olivia** (the team) | Team jerseys, orange. Doyoung looks like he's counting practices. |
| **Jeno** (Sigma) | Sigma party clothes; easy, in charge of the room. |
| **Her HOAX mom and dad** *(if they appear in person)* | Busy, warm, slightly suspicious (Mom). |
| **Her strangers father and mother** *(if they appear in person)* | Details private. |

---

## 8. Build batches

Nine batches, one at a time, each sized for a modest session. The tests are targeted: a new `tests/femc_epilogue.py` with one section per batch (`--only <section>`), the jsc data check (`tools/femc-check-scenes.py`, extended for the epilogue folders) and one desktop/phone screenshot pair. Each batch also re-runs the one or two existing suites it could disturb. Nothing is pushed until you say so.

| # | Batch | Scope | Test plan |
|---|---|---|---|
| **1** ✅ *(built 2026-10-27)* | **Epilogue mode** (engine) | First, your final look at the ten approved leans; then the few-line ending tweaks they call for. Then: the calendar learns other years (Iwatodai unchanged); the world context for data getters; `epilogue.js` (enter, carry-over, leave, the route lock, the end card); `year1` in the save, with migrations running on it; save slots, labels and backup codes; the end-screen button and the save-first prompt; money per world; a tiny test world. | `femc_epilogue --only engine,saves`: enter from each ending flag (no button on bad); carry-over values; leave and New Game+ from the year; slot and code round-trip mid-epilogue; an old save loads untouched. Regression: `femc_march`, `femc_saves`, `femc_onegame --quick`, and the ending checks in `femc_haechan`. |
| **2** ✅ *(built 2026-10-28)* | **The glitch system** (engine) | `glitch.js`, the `{ glitch }` scene line, the glitch-file format and stage machine, the 11 kinds (new `rise` / `hold` weather modes), the Glitch effects setting, reduced motion and flashes, the `ifGlitch` condition. | `femc_epilogue --only glitch`: every kind plays and cleans up (no tint, overlay, swapped face or music left behind); stage floors and triggers on the test world; the same seed gives the same glitches after reload; Gentle / Story only / reduced motion / no flashes; screenshots at 1000×486, 375×812, 1440×900. Regression: `femc_weather`, `femc_music`. |
| **3** ✅ *(built 2026-10-28)* | **Runners, part 1** | Calendar 12/1–12/20/2025, the map and backgrounds (fallbacks), home bonds, classes and the team's practice days, the cover and the who-was-gone lines, week 1 and week 2 story (to the studio and the 12/12 party), the week-1 route lock, the Regionals set piece, weeks 1–2 glitches, LE SSERAFIM's Runners scenes. | `femc_epilogue --only runners`: a walker plays every scene path in weeks 1–2 on each route and carry state (faces, cast, backgrounds), Regionals' choices, the lock, two calendar runs through the UI; the jsc data check. |
| **4** ✅ *(built 2026-10-28)* | **Runners, part 2** | Week 3: Mark's verdict, finals, the 12/19 party and footage, Danielle's choice, the rooftop final (with fights 1–4 as story-fight placeholders), the end card and the Equinox card. | `--only runners` again (full act, each route through to the end card), plus the leave/New Game+ check from a finished Runners epilogue. |
| **5** ✅ *(built 2026-10-28)* | **HOAX** | The whole world: calendar 12/21/2023–1/13/2024, the map, home bonds, winter break and school days, the Christmas Eve lock, the set pieces (meeting, Christmas, séance, party, hearing, gym), glitches, LE SSERAFIM's HOAX scenes (with Yunjin's approved echo in the livestream), the final (fights as placeholders). | `--only hoax`: every path on each route and carry state; the hearing's stat checks; Christmas by route; the jsc check; one calendar run through the UI. |
| **6** ✅ *(built 2026-10-28)* | **The half-present battles** | `battle.js` scripted fights `epi-<world>-1..4` from one table; rules `ghost` (alone / unseen / unheard / contact), `flicker`, `mark`, `contactRound`; the ghost look; S.E.E.S.'s party pick; can't-lose fades; the request's `epi` field; Runners and HOAX wired. | `femc_epilogue --only fights`: each stage's rules hold in a real fight (untargetable, every-other-round, Act Freely, marks followed, the one contact round, then interrupt); a lost fight fades instead; EXP lands in the year's battle save; the handoff resumes the scene on the next line. Regression: `femc_bonds --only rules`, `femc_tartarus` quick. |
| **7** | **strangers** | After the manuscript passes the private pickup point (re-sync first). The whole world, fights included. | `--only strangers`, plus the canon guard (no line states what the book hasn't printed), like the trio's guard. |
| **8** | **Stay and the true coda** | The reverse epilogue in Iwatodai (the inverted fights included) and the three-part true coda. | `--only stay,true`. |
| **9** | **Finale and polish** | The Equinox cards by route, stamps, the album and Theater pages for epilogue scenes, music passes, art wiring for whatever exists by then, a full playthrough per world. | `--only finale,shots`, plus one real playthrough per world from a finished year, and the whole suite once. |

If you'd rather see a world sooner, batches 1–4 alone give you a complete Runners epilogue (with stand-in fights).

---

## 9. Open questions for you

None of these spoil anything. Claude's lean is in brackets.

1. **Format.** A compact life sim (days, slots, Go Out, people, phone) with story days, or mostly story days with a few free ones? *(compact life sim)*
2. **Length.** Three weeks per world, or stretch to four where there's content? *(three; strangers may run closer to four)*
3. **Parents in person.** In the year they're texts only. At home: Runners by phone only, strangers and HOAX in person? *(yes)*
4. **LE SSERAFIM's roles.** Do the proposals for Runners and HOAX work, or would you swap anyone? *(as proposed)*
5. **Runners: who was gone.** Does the absence table work, especially Jaehyun leaving after the Boston College game so he misses nothing on the field? *(yes)*
6. **Runners: going public.** Canon leaves it to you. In the game: the player's choice on Haechan's route, inner circle or campus? *(the player's choice)*
7. **Runners: the final.** On 12/19 at the party, or the next night, on the rooftop in the first snow? *(the rooftop)*
8. **Runners: Chenle's walk-in.** The game stays in Solar's point of view. Allow one short cutaway for "Does she know?", or keep it offscreen? *(one cutaway, the only one)*
9. **HOAX: your planned winter-break beats.** Play the party and Christmas (bent by route), or run beside them so the book keeps them? *(play Christmas; the party as a route set piece, with drugs named, not shown)*
10. **HOAX: who files the impeachment motion?** *(someone from the forum, never a council member)*
11. **HOAX: dates.** Is the vanishing Monday 12/11/2023, with winter break from that weekend? *(Claude assumed so for the weekdays)*
12. **strangers: timing.** Wait until the manuscript passes the private pickup point, or write it now and keep it vague? *(wait)*
13. **Half-present fights.** Can she lose one, or does she always fade back? *(she fades back)*
14. **Glitch effects default.** Full or Gentle? *(Full, with the setting right there)*
15. **The Equinox card** at the end of each epilogue: a title card and one line? *(yes)*
16. **Music.** Any songs for the epilogue worlds in your audio folder, beyond the three world songs? *(the world songs at home, P3 tracks as the bleed)*

---

## Kat's answers (2026-10-27)
- **HOAX vanishing date:** Monday 12/11/2023, as assumed.
- **Runners final:** the rooftop in the first snow on 12/20.
- **Main themes:** Runners plays "Runners" (Camo), strangers plays "strangers" (Ethel Cain), and HOAX plays "Hoax" (Taylor Swift). These are the existing world songs. Kat will choose more songs per scene from each universe's playlist later.
- **LE SSERAFIM roles:** as proposed.
  - Yunjin in HOAX (approved, 2026-10-27; in section 4's LE SSERAFIM notes for batch 5): an echo, like her Runners glitch. Mid-glitch, the forum livestream cuts to her for a second. The same person exists in every world.
- Every other open question goes with Claude's lean.
