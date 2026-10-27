# Runners sync audit: the game vs. Runners at 11/22

**Your ruling (2026-10-27):** the game's whole Runners side assumes the state at the moment Solar vanished, around 11/22. That's after camping (11/13–16), Haechan's unfiltered truth (11/19), the Mark confrontation (11/20) and the girls' night (11/21), with her heading home for Thanksgiving. The source for that state is your outline (§§65–78) and `runners_state.md`.

This is an audit only. No game file was changed. Game-plot references stay structural: scene ids, ranks and what a line assumes.

---

## Summary

**Counts:** 108 findings plus 7 code comments.

| Character | Contradiction | Outdated | Could be richer |
|---|---|---|---|
| Haechan | 2 | 9 | 5 |
| Mark | 4 | 13 | 11 |
| Hanni | 2 | 4 | 6 |
| Hyein | 0 | 1 | 4 |
| Hanni & Hyein together | 0 | 4 | 3 |
| Minji | 0 | 3 | 5 |
| Jaehyun | 0 | 0 | 8 |
| Danielle | 1 | 0 | 3 |
| Jaemin | 5 | 3 | 4 |
| Chenle | 1 | 0 | 4 |
| Story events and memory cards | 1 | 0 | 1 |
| Solar's Runners parents | 1 | 0 | 0 |
| **Total** | **17** | **37** | **54** |

**The biggest items:**
1. **Jaemin rank 9 "the packing list" is built on camping still being ahead** (the one you noticed). His Runners-route afterMax line ("Before the trip") is the same problem.
2. **Danielle rank 1 hands Solar the trip folder as something upcoming.** Her actual camp role, trading Mark the window for time with Jaehyun, appears nowhere in the game.
3. **Mark never shows anywhere that he knows what he did at camp.**
   - His rank-10 memory moment gives Solar back "everything", warm.
   - Rank 14 has him say he "used to think I'd have a lot to say", when he already said it, at camp.
   - Hanni and Hyein are still affectionate with him across his link and texts. One text even makes Hanni his source of Solar details again.
4. **Haechan rank 7 says there are things she "doesn't know yet" and that "it's not mine to tell you".** He told her everything on 11/19. Meanwhile his one real remaining secret, her voice in his track, is closed off by a spice line ("I'm not going to record anyone else's without asking").
5. **The girls' withholding is written as a virtue, with no guilt.** Examples: "It's not ours to tell you", "one more person deciding what you can handle", Hanni's "Not because anybody did anything". Solar shouted that exact complaint at them on 11/16, and they apologized on 11/18.

Also notable:
- The Runners ending's homecoming assumes a school day (classes cancelled), but 11/22 is the start of Thanksgiving break.
- Her mother's Foundation Dinner text (11/24) is dated after Solar vanished.
- Hanni's line in `a4-names` says Solar vanished from a party. She actually skipped that party for the girls' night.
- The jacket is "at the back of a closet" in five places. Since camping it has been in her bag, never worn.

## Decisions only you can make

1. **Do Solar's camping memories ever come back in-game?** None of the nine Runners fragments reaches past early November. Right now the game can't let her remember camp, so the Mark and Jaehyun memory moments (both rank 10) quietly skip it. Your options:
   - she remembers it in a late beat, which could be an R-route-only Mark scene;
   - someone tells her (Haechan has done it once already, Hanni carries the guilt, and Jaehyun's "Ask him. He'll tell you some of it." in Mark rank 8 is already set up);
   - it stays behind the "frosted glass" Mark rank 12 already uses.

   Mark's and Jaehyun's rank-10 moments should follow the same answer.
2. **Is Haechan's song in the game the track with her stem in it?** If it is, the beats where it's finished and given to her (his link, plus one closing beat on the Runners route) need one line of him owing her the truth. If it isn't, it's worth saying once that it's a different song.
3. **Did Solar take "Sol" away from Mark on 11/20?** Your outline leaves it open. Mark says "Sol" constantly in the game.
4. **Hyein's deposit:** canon says she required a deposit from Jaemin, not whether he paid it. Hyein rank 6 says he never paid. That's fine unless you decide he did.

**Checked and fine:**
- Haechan's "worse talks… from your brother, in a living room" (`sp-hc-ln-caught`) and the `jaehyun-meets-haechan` "third time" routine are canon (Ch 16 and Ch 39 warnings), so they aren't flagged as errors.
- The nine Runners memory cards and the R3, R6 and R9 doors are all pre-camping and half-remembered, which your ruling allows.
- Nothing in the game treats Regionals, Thanksgiving or Minji's closure as already past.
- Nothing gives Chenle knowledge of the stem.

**Memory gating, in short:** a searcher can know the 11/22 state while Solar doesn't. Most fixes below have them hold it back, hint, or flinch, rather than tell her. Mark's door (R6) is on his arrival, 11/18.

---

## Haechan

His one remaining secret at 11/22 is her stem in his track. Everything else he has told her, and she believes him. They aren't reconciled.

**Contradictions**
- **`links/haechan.js` · rank 7 (12/13), unbranched:** "There are things over there you don't know yet… It's not mine to tell you."
  - Assumes: he hasn't told her yet.
  - Fix: on the Runners side, "You knew. All of it. I told you myself, a week before you fell through. I'm not making you hear it twice here." Optionally add "And there's one thing I never told you. That one I owe you over there."
  - Gating: she has no camp memory at 12/13, so he holds it back. Only the framing changes.
- **`data/spice-haechan.js` · `sp-hc-ln-room` (rank 8+, 12/19–2/28, non-strangers):** "I'm not going to record anyone else's without asking. I've learned that much."
  - Assumes: his recording problem is entirely in the past, and he's playing her the track as he says it.
  - Fix: let it catch. He stops after "without asking", looks at the screen, and says "…Mostly. I'm working on it." Or make clear it isn't that track.

**Outdated: the jacket.** Every one of these has it in a closet; since camping it's in her bag, never worn.
- `links/haechan.js` rank 5 (12/1), choice "There's a jacket. At the back of a closet."
  - Fix: "at the bottom of a bag, under everything, packed and never worn". His reply becomes "In a bag. You packed it. Of course you packed it."
  - A 12/1 rank is also four days before the December full moon, the perfect place for the unpaid "I'll bring you a better one".
- `links/haechan.js` rank 11 Runners branch (2/2): "She'll put it at the back of a closet." Fix: "She'll pack it and never wear it."
- `data/living-haechan-texts.js` holiday 1/1, Runners branch: "the jacket at the back of a closet again". Fix: "at the bottom of a bag she can't open in front of anyone."
- `data/living-haechan-nights.js` `ri-hc-coat` (12/22–1/29): "at the back of somebody's closet". Fix: "in the bottom of her bag where she can't wear it."
- `data/story-endings.js`, the Runners ending (one variant): "At the back of her closet… there was a jacket". Fix: "At the bottom of a bag she hadn't unpacked since the trip…"

**Outdated: Mark.** The game treats the break with Mark as old grief. It's new: Mark kept the raw file and played it to her, and Haechan only learned on 11/19 that it still existed.
- `links/haechan.js` hangout 7 "front steps" (after Mark arrives): "We've had a lot of practice." / "Ask me again in a year."
  - Fix: add under "Don't" a line like "He kept something he said he'd burned. I found out a week before I came here."
  - Gating: give her the shape, not the file.
- `data/living-haechan-days.js` `hc-day-mark` (12/27–3/5, unbranched): the tangerine, the cleaned pith, Mark's hand on his shoulder ("He didn't shrug it off").
  - Fix: add a Runners branch where he stops mid-reach and moves out from under the hand, possibly with "You kept it, Mark."
- `data/living-haechan-nights.js` `hc-ln-mark` (rank 3+, 11/20–12/20): Haechan walks Mark to the corner and "Night, Hyuck" goes unremarked.
  - Fix: Runners branch where he stays on his side of the gate and says "Don't." to "Hyuck". Mark's "Sol. Hey." comes out hesitant.
- `data/living-haechan-days.js` `hc-day-twice` (1/4–3/5, Runners branch): "Hanni didn't ask what plenty was." Hanni heard his account at camp.
  - Fix: "Hanni didn't need to ask; she'd heard it from him once, in the cold."

**Could be richer**
- `links/haechan.js` rank 14 (2/23), Mark present: "Your G's flat, Marky." is a warm thaw with nothing named.
  - Fix: he uses "Marky" once and then flattens it. Under the shoulder touch he goes still. February can thaw, but it should cost something.
- `links/haechan.js` rank 8 (12/18): "In the other one it's what I gave you… Say it again."
  - In the book, "Say it again" belongs to **Hyuck**, the name she took off Mark, not Donghyuck. Rank 9's "He doesn't get it back" already handles Hyuck well.
  - Fix: the Runners half becomes "In the other one you've got a shorter one. You took it off somebody."
- `data/spice-haechan.js` `sp-hc-sisters` (glow morning): "We've been happy about this one since before you could remember his name."
  - Fix: add a Runners line for Hanni: "He told us the worst of it himself. That's why."
- `data/crush-haechan.js` `cr-hc-every-one` and `data/spice-haechan.js` `sp-hc-ln-snow`: "…Then you're on a roof." The cycle stops at the secret period.
  - Fix: add "Then you find out the worst of me. Then you believe me anyway. That's as far as we got."
- Haechan's song (link ranks 10 and 15, Christmas Eve, the Runners ending): see decision 2 above.

---

## Mark

Your outline puts most of the change here. No line in the game knows about camp. The guilt-shaped lines already there are good and should stay:
- rank 1 "None of it's on you"
- rank 4 "Was. Is. I don't actually know what the word is"
- rank 7 "Which is honestly kind of a relief"
- the rank 8 text "hes right to be like that"
- rank 14 "since November"

His crossing gives him a Solar who doesn't remember 11/20, and the fixes mostly let the player see that he knows it.

**Contradictions**
- **`links/mark.js` · rank 10 (1/18), the memory moment:** "She knew it now with his whole name, with everything." What comes back is first day, walks and texts, and her choices are warm.
  - Fix: make it explicitly partial: "almost everything", and November behind frosted glass she doesn't open.
  - Gating: this depends on decision 1.
- **`links/mark.js` · rank 10, choice "Ask me again. The crossing."**: "At home. In a studio. With the door open, and my name on it."
  - Problem: if she remembers everything, she wouldn't agree to record with him.
  - Fix: keep the dialogue and add narration that she picked those terms *because* of what she knows (door open, her name where she can see it). His "Those are exactly the right terms" then lands as him understanding why. With the partial-memory fix, this drops to "could be richer".
- **`links/mark.js` · rank 14 (2/24), shared:** "I'm not going to say anything about it… I used to think I'd have a lot to say."
  - He already said it, at camp, in the worst way.
  - Fix: "I already said it. At home. The worst way there is. I'm not saying it again." Optionally add "You'll remember that part."
- **`data/texts.js` · `t-1120-mark` (11/20):** "hanni says u like the strawberry ones from the station bakery?"
  - Problem: Hanni's 11/18 guilt is exactly that Mark used what she told him. The text also lands the same day as Hanni rank 7.
  - Fix: "asked hanni. she wouldn't tell me lol. guessed."

**Outdated**
- `data/story-act4.js` `a4-mark` (11/18, his arrival): "Hanni texted me, like, a hundred things before… before."
  - Fix: "Hanni's… not really answering me." Also add one visible crack, such as relief when he realizes she doesn't remember, or a flinch at "friend". The ambiguity of the scene is good; keep it.
- **Home as an easy reunion.** These lines assume the pre-camp closeness simply resumes. Add one framing line each (he knows what she said to him on 11/20):
  - rank 10, "See you at home. I'll be the guy by the tree."
  - rank 11 Runners branch (2/5), "Practice room four… you'll sit on the radiator." Possible framing: "If you'll still be in a room with me there. I know what you said to me at home."
  - rank 13 Runners branch (2/19), "you're going to come over and complain". Make it a hope: "If you ever come over again."
  - rank 15 Runners branch (3/1), "at home we put it down for real. In a studio." Lead with his "if you still don't want to, then we don't".
- rank 14 Runners branch (2/24), "I was going to say, be careful with him. I had it ready."
  - Fix: add "I said a version of it once already. You'll remember what it cost."
- rank 12 Runners branch (2/12), "I'm going to tie the real one on you again, outside the ramen place."
  - The scarf was for camping, and Danielle's photo of him tying it became the couple post.
  - Fix: add "If you still have it. If you didn't throw it in a lake. You'd be allowed."
- rank 4 (12/9), narration: "a name for him that belonged to someone else". At 11/22, Hyuck is hers.
  - Fix: a name she once said by accident and was asked to say again, and the boy beside her says it like he still owns it.
- rank 4 (12/9), "He looked at me like I was a song he's heard too many times."
  - Fix: "…like he knows exactly what I did. Because he does."
- **Hanni and Hyein fond of him.** They know about the "in". Fixes:
  - rank 6 (12/22), "Why is this actually nice." Hyein turns suspicious, and Hanni's "warmly" becomes "evenly".
  - hangout 5, Hanni watching him "like a dog… that had once eaten a shoe". Make it a dog that once bit someone she loves.
  - rank 12 and the `living-r15-mark.js` afterRank 12 text, Hanni's diagram. Give it an edge: "obligation chocolate, for people on probation".
  - afterMax "out loud", Hyein's "SOL. Finally. He won't go first." Make it barbed: "He likes to see what everyone else does first."

**Could be richer**
- **Rank 9 (1/15), the approved line, unchanged:** "I'd never put my name on something that was yours."
  - Once Solar remembers, she knows he stole Haechan's demo credit, so the line becomes atonement or a lie.
  - Leave it exactly as written. Add the framing later, in rank 10 or afterMax "credits": she remembers a demo with the wrong name on it, and knows whose stone it was.
- rank 4: "And then we didn't." Fix: he starts "And then, recently, I—" and cuts himself off.
- rank 2 (11/25), the scarf: "It was for the cold." Fix: narration that he didn't say what it had been for, or where she wore it last.
- rank 12: while she's "doing the remembering face", he holds his breath until she says "The Saturday", then is visibly relieved it's that one.
- rank 1, "I'm your friend." Keep the line; "friend" comes out with a hitch.
- rank 5, "I asked. Hanni told me." Fix: add "She doesn't tell me stuff anymore."
- rank 7, "meaning it isn't the problem". Fix: he says it like a sentence he already tried on someone, and lost.
- rank 8, "Some big dinner. Press." Fix: "The November one. The Foundation thing." He knew she was going.
- rank 3, recording on his phone. Fix: a reflexive "just me, not you" before he hits record.
- `data/living-texts.js` Mark afterRank 1 and 3, plus `am-mark-piano`: all carefree.
  - Fix: one crack in `am-mark-piano`, e.g. "nobody here really. comes with me anymore. anyway".
- `data/living-haechan-nights.js` `ri-hc-game-panic`: "Sol! Hey. Come here, I need a witness." Fix: "Sol" comes out and he hesitates on it.

---

## Hanni

Rank dates:

| Rank | Date | Rank | Date | Rank | Date |
|---|---|---|---|---|---|
| 1 | 9/14 | 6 | 10/28 | 11 | 2/1 |
| 2 | 9/21 | 7 | 11/20 | 12 | 2/8 |
| 3 | 9/30 | 8 | 11/30 | 13 | 2/15 |
| 4 | 10/9 | 9 | 12/8 | 14 | 2/22 |
| 5 | 10/18 | 10 | 1/12 | 15 | 3/1 |

The main gap across her link: she carries no guilt, and the doorstep, camping, Mark and Danielle never come up. Her only shadow is the generic "not mine to hand you".

**Contradictions**
- **`links/hanni.js` · rank 7 (11/20), the "worse one" confession:** "Not because anybody did anything. Just because it was yours."
  - Someone did do something with it: Mark, with what she gave him.
  - Fix: "And once somebody did something with it. I'm not saying who." Her face carries the rest. Don't name Mark.
- **`data/story-act4.js` · `a4-names` (9/13):** "We were at a party and then she wasn't."
  - She skipped the 11/21 party for the girls' night and was due home 11/22. `a4-sisters` also says the party "isn't the night she disappeared".
  - Fix: "We had a night in, just us. Next morning she was supposed to get on a train home, and she just… wasn't anywhere."

**Outdated**
- rank 4 (10/9): "I don't want to be one more person deciding what you can handle." That's Solar's own line from 11/16, shouted at Hanni.
  - Fix: her face breaks on it: "You said that to me once. At home. You were right."
- rank 7, the choices "Is one of them bad for me?" and "What aren't you telling me?": "the people who answer that for you are the ones who make you crazy."
  - Fix: "At home I sat on something I should've told you, and you were furious, and you were right. This is different. Here you can't check it."
- rank 10 (1/12), the recall narration: "who had never once tried to".
  - Fix: "who had kept one thing from her once, too long, and come to her on a Tuesday to say so."
- `links/danielle.js` rank 4 (12/3): Hanni steers Solar out of the room with "Could you see if Fuuka needs help with the rice?"
  - Fix: she catches herself: "…No. Stay. I don't get to do that anymore."

**Could be richer**
- rank 4: "I'm good at keeping things." Fix: add "Too good, once."
- rank 7, door-R6 branch (the "we found her" text to Mark): she's repeating her exact flaw. Fix: Solar reads "again" on her face, and Hanni stops texting him.
- rank 8 (11/30), Hyein's near-slip with Haechan in the kitchen. **Your beat still fits 11/22**, since what they're hiding is Solar's own memory and "Ask him" sends her to the source. Optional: one narration line saying they heard his account at camp.
- rank 9 (12/8): "It didn't stop when you forgot us." Fix: add "It didn't stop when you were furious with us, either."
- rank 14 Runners branch: "This one's heavy." Fix: she uses the rule right away because last time she held a heavy one for weeks.
- `data/living-texts.js` Hanni afterRank 8: "nothing!!!" / "go to sleep!!!" Fix: add "…ok not nothing. tomorrow. i promised u the truth".

## Hyein

Rank dates:

| Rank | Date | Rank | Date | Rank | Date |
|---|---|---|---|---|---|
| 1 | 9/15 | 6 | 11/2 | 11 | 2/4 |
| 2 | 9/24 | 7 | 11/14 | 12 | 2/11 |
| 3 | 10/3 | 8 | 11/28 | 13 | 2/18 |
| 4 | 10/13 | 9 | 12/11 | 14 | 2/23 |
| 5 | 10/22 | 10 | 1/19 | 15 | 2/27 |

**Outdated**
- rank 6 (11/2), the unanswered client DM: "And then you were gone, and then we were here." This reads as if Solar vanished right after Halloween.
  - Fix: "…then it was camping, no service, and then everything, and then you were gone." Don't explain "everything".

**Could be richer**
- rank 9 (12/11): "That's on me." Her real 11/18 confession is that she treated Solar's life like a mystery to solve before bringing her in. This rank is the natural place for it, with the doorstep unnamed.
- rank 4: "I'm choosing not to [be mad]." Fix: add "Last time somebody was mad, it was you, at us. You were right."
- rank 3: she scrolls the chat. Fix: her thumb speeds up past a run of "sorry"s near the bottom.
- rank 6, Jaemin's unpaid deposit: see decision 4.

## Hanni and Hyein together

**Outdated**
- `data/story-act4.js` `a4-household-introductions` (11/5): they greet Haechan with plain warmth. They heard him own his part at camp.
  - Fix: Hanni's greeting is measured. Hyein's unfinished "you two are…" lands on the fact that they aren't anything right now.
- `data/story-act5.js` `a5-call-runners` (12/14): "It's not ours to tell you, Sol."
  - Fix: Hanni catches herself: "We promised we'd stop deciding things for you. This one isn't ours, though. It's his."
- Same scene, the Mark branch: "He asks us how you are every day… We don't love that."
  - Fix: "We don't tell him anything. Not anymore."
- `data/living-danielle.js` `danielle-sisters`: "Ask me again at home, Sol."
  - Fix: "When you remember, I'll tell you everything. I'm not deciding for you again."

**Could be richer**
- `data/texts.js` `t-1106-sisters`, `data/living-texts.js` `am-sisters-door`, and the `living-march.js` Galentine's line ("HIM. she said HIM"): pre-camp shipping.
  - Fix: once, add an edge, e.g. "he's ok. i think. i'm watching him".
- `data/crush-triangle.js` `cr-ah-sheet-masks` and `data/crush-haechan.js` `cr-hc-closed-back`: calm withholding.
  - Fix: Hanni says it self-aware: "Last time we kept something from you it went badly. This one's different. It's yours."
- `data/story-act6.js` `a6-snow`, Runners line about home: "Saturday. Then home. Then pancakes…"
  - Fix: add Hyein's "…and then you're getting on a train to your parents' and you're texting us the whole time."

---

## Minji

**Outdated**
- `links/minji.js` rank 10 (1/23): "You remember that one." This is about "I always believe you", which she said while holding the doorstep.
  - Fix: one beat after it: "I meant it. I also did something right after that I'm not proud of. When you remember the rest, ask me."
- `links/minji.js` rank 11 Runners branch (2/2): "she'd never told Solar which four seconds, and she wasn't going to start". The same motif appears in rank 15 Runners and `cr-mj-lamp`.
  - Fix: keep the hold-back, but make it self-aware: "I'm not keeping it from you. Not again. I just want you to get there first."
- `data/crush-jihoon-minji.js` `cr-mj-lamp` (romance with Haechan) and rank 7: "I hope he's careful with it." She now knows what he did.
  - Fix: "I know what it costs him to be." Never name it.

**Could be richer**
- rank 5 (10/24): "I'm not going to tell you mine." Fix: add "If you ask, I'll tell you anything. I'm done not telling you things."
- `cr-mj-lamp` dating branch: "I always believe you, Sol." Fix: add "I didn't always act like it. I do now."
- `data/story-act4.js` `a4-lamppost` (9/26): "I thought I'd never get to ask you anything again." Fix: one undertone of what she didn't tell Solar before Solar vanished.
- `data/daily-life.js` `minji-meets-haechan`: "You never ask for anything. That's how I knew." Fix: add "I'm not [kind]. Not always."
- `links/danielle.js` rank 2 (11/18), the camera-ethics rivalry. Fix: a needle only Minji understands, "You're good at holding things too, Minji."

---

## Jaehyun

Nothing contradicts. He was at camp: Danielle had him for a manufactured treasurer problem; he found Solar afterwards ("Sit down." / "I didn't ask." / "I won't."); and he updated his read on Mark. None of that shows yet. His "third conversation" lines are canon.

**Could be richer**
- `links/jaehyun.js` rank 5 (11/23): "There's history… I've already had this conversation."
  - Fix: base it on what he actually saw: "You stood behind me for two days at camp so you wouldn't have to stand near him." He misreads why, which is true to the book.
  - In rank 6, add: "The other one I haven't spoken to yet. I'm deciding how."
- rank 1 (10/26): "happier than I've seen you in two years." The last time he saw her was at the rupture.
  - Fix: add "Happier than the last time I saw you. I'm not going to tell you about the last time."
- rank 1, choice "You could ask how I am first": he hesitates before asking, like a man told last time not to.
- rank 4 (11/16): "There's a game… I don't know which Saturday it is."
  - Fix: "Notre Dame. Away. I was supposed to be on the plane when—"
- rank 10 (1/24), the memory list (party, gala…): if camp memory returns (decision 1), add a log by a fire, "Sit down", and him not asking.
- `data/story-act4.js` `a4-knock` (10/24), "Who are you?" path: add "I'm not going to ask you anything. I said I wouldn't."
- `data/texts.js` and `data/living-texts.js` (his texts so far, e.g. "the schedule on the fridge"): add one later text, "Did you eat. You don't have to tell me anything else."
- `data/daily-life.js` `jaehyun-meets-haechan`: canon as written. Optionally have him add what he saw at camp: Haechan watching from a distance after Jaehyun found her.

---

## Danielle

**Contradiction**
- **`links/danielle.js` · rank 1 (11/11):** "This is Alpha's. The trip. Cabins, beds, who rides with whom… It was soon."
  - Fix: the folder becomes the after-paperwork: reimbursements, the ride-home manifest. "It's over. The books aren't." She closes it flat and says nothing about what happened there.

**Could be richer**
- `links/danielle.js` rank 5 (12/10), "he had no idea at all", and `data/living-danielle.js` `danielle-signature`.
  - Fix: Jaehyun pauses over a signature: "Last time you needed one, it took twenty-five minutes." He signs anyway; "he had half an idea, and signed anyway."
- `links/danielle.js` rank 9 (1/14), Mark's "Sol! Hey… And— Danielle." Fix: her bored "Mark." reads as a closed account, not a live one.
- Not in the game anywhere: her camp trade. One quiet line in rank 7 "the offer" could carry it: "I've paid in time before. It was worth it."

## Jaemin

**Contradictions:** the pre-camping lists.
- **`links/jaemin.js` · rank 9 "the packing list" (1/16):** "At home it's still that night. Right? So the trip's still ahead of me."
  - Fix: re-premise the scene. He rewrites the trip from memory as the version where nothing went wrong, the one he'd run again. He knows something blew up, not what. Solar's name on a cabin line with nothing next to it is the thing he can't caption.
- Same scene: "Are you coming? When it's— whenever it is." Fix: "Would you go again? If I ran it right?"
- Same scene: "And Mark Lee. Judge of Disputes. For the whole trip." Fix: past tense, and he hears it go wrong: "He was Judge of Disputes. …Bad casting, maybe."
- Same scene: "There's a first aid kit NOW." Fix: Hanni's sad face becomes a grade on the trip that happened ("there wasn't one"). Or "For next year. If there is one."
- `links/jaemin.js` afterMax "the door", Runners-route line: "When we get home, the first thing. Before the trip." Fix: "Before Regionals. Before anything."

**Outdated**
- rank 3 (12/4): "Did you ever look at the transport spreadsheet? For the trip?" Fix: Hanni starts the old bit, remembers the ride home, and goes quiet; Jaemin covers.
- rank 7 (12/30): "I've barely talked to her at home." Danielle did their transport, and he left her off the Friday list on purpose.
  - Fix: "You don't put the treasurer on the Friday list."
- rank 4 (12/9): "at home he's been weird since the semester started." Fix: "Something happened up there. With you two. Nobody'll tell me what."

**Could be richer**
- rank 2 (11/25) and the Friendsgiving holiday (11/23), Mark branches: "never once been the problem at a party". Keep the joke as irony, with Jaehyun's glance or Mark sitting away from Solar.
- rank 8 (1/9): "Mark, be less boring." Fix: let Mark get a small stall too, not only Haechan.
- rank 1 (11/18): "Architect of your every Friday night." Fix: add "Architect of the trip, too. You don't remember that either. …Maybe that's fine."
- `data/story-runners-arrivals.js` `a4-twelve`: "you two came together? At midnight?" Fix: "…again?" Haechan's flat stare does the rest.

## Chenle

**Contradiction**
- **`links/chenle.js` · rank 8 (1/7):** "I've only got the one thing." Solar then tells him about "cold air".
  - Problem: in Ch 65 he himself took Haechan outside and got him to eat, and the game's own rank 9 and `chenle-steps` call it his tested "food, cold air, one number".
  - Fix: Solar's new piece of information is the roof: "Outside, I know. I didn't know he had a place."

**Could be richer**
- rank 8: "I don't know. That's why I'm not asking." Fix: "Something happened that weekend at the lake. I was there. I'm still not asking."
- hangout 6, about Danielle: "Alpha's treasurer… She stands near the stairs." Fix: add "She did the buses for the retreat. She had Jaehyun for forty minutes on Saturday about a form."
- rank 7 (12/29): Mark on the sofa arm with a guitar, at ease near Minji and Solar. Fix: Minji's camera turns away from his corner.
- `a4-twelve`: "Regionals is in December." Optional: "Regionals is the sixth. Two weeks."

---

## Story events, memory cards and home

**Contradictions**
- **`data/story-endings.js`, the Runners ending's homecoming:** "*SNOW DAY.* *they cancelled classes.*" Returning to 11/22 means the start of Thanksgiving break, not a class day.
  - Fix: keep the snow and the joy, and make it "trains are delayed, ur stuck with us another day."
- **`data/living-parents.js` `home-r-foundation` (11/24):** "Three dresses went up to the penthouse this morning." By 11/24 she had already vanished on her way home.
  - Fix: redate it to 11/21 in the future tense ("go up Monday"), so it's the last ordinary text. Or keep 11/24 as a text into silence: "You weren't on the train, dear."

**Could be richer**
- The Runners ending's homecoming has the girls and Jaehyun waiting, and nothing of what she's walking back into: Haechan unreconciled, Mark estranged, Regionals in two weeks.
  - Fix: one closing touch, e.g. a Doyoung ping: "regionals in 2 wks. you good?"

**Clean**
- The nine Runners memory cards (`battle/data.js`) and every fragment moment are pre-camping and half-remembered.
- The trophy is the Ch 45 tournament, not Regionals.
- Haechan's "not my call" in the Runners call home already fits a post-11/19 Haechan who lets her decide.

---

## Code comments (no player impact; they mislead later writers)

These headers still say "Runners canon to Ch 66" or call camping "only ever upcoming". Update each to the 11/22 state:
- `links/haechan.js`
- `links/danielle.js` and `data/living-danielle.js`
- `links/jaemin.js`
- `data/story-runners-arrivals.js`
- `links/chenle.js`
- `data/crush-jihoon-minji.js`
- `data/living-parents.js`

**Outside this audit's scope:** `data/living-weather.js` has Haechan's snow photo "from the guesthouse roof", but he lives in the dorm. It's on your list of writer inventions to confirm.

---

## Opportunities

**Haechan and Solar, unreconciled but closer**
- Haechan rank 10's Runners line could say it outright: "You believed me. We weren't done."
- Rank 14 romance already has him saying "I'm doing that now. Asking." That's the natural doorway to the one secret, her stem.
- **The valley promise** ("I'll bring you a better one next time") is still unpaid; the next full moon is 12/4. Natural homes:
  - rank 5 (12/1)
  - a December roof scene (`hc-ln-first-night`, `sp-hc-ln-snow`)
  - a full-moon-eve text
  - `a4-there-you-are`'s "dinner plate" moon
- Hyein's coat (rank 11, `hc-day-tape-measure`) could land as "the better one" by proxy.
- Haechan's recovery:
  - Rank 6's "Sit. Eat." is the reverse of Chenle's "Just eat". A text could say "somebody made me eat once. it worked. don't tell him."
  - `hc-ln-tower`'s "hands weren't shaking" could nod to it too.
- Haechan's Christmas Eve scarf beat: he checks whether it's navy with gold suns.

**Mark's estrangement**
- One R-route scene (rank 14 or 15) where, before going home, he chooses whether to confess camp, knowing she'll remember. This is the natural home for how Solar feels about him once she knows: the anger, without erasing the friendship's other truth.
- Mark has no Danielle beat. She's in the game from 11/10, so one guilty avoidance or one short exchange about the bargain would do.
- `a6-last-train` and `a6-remember`: Mark is never placed after 11/18. A searcher standing apart shows it.
- `household-photo`: Minji frames Mark and Haechan at opposite ends without comment.
- `ri-mark-credits` ("Somebody had to stay"): nobody stays with him now.
- `mark-meets-haechan`: Solar flinches when Mark says "Hyuck" (could be fragment-gated).
- The SUnews routines (`sunews-tonight`, `sunews-chairs`) could caption Solar as "mark lee's girlfriend", since campus still believes the 11/9 post.

**The girls' guilt and the re-formed four**
- The girls' night on 11/21 has no echo anywhere. Possible homes:
  - Minji ranks 12 and 14 (Runners): "the four of us on Hanni's floor"
  - the sisters' thread around 11/21
  - Hanni rank 2, scrolling up past it
- Hyein's "eleven questions the first night" is her mystery-solving flaw in action. Let her name it.
- Hyein rank 7, the coat: she pointedly makes something that's only Solar's, saying nothing about the gold-sun scarf or the jacket.
- Hyein's paid work: one line about owing Jaemin his December Sigma outfits (`hc-ln-hem`, her fabric scenes).

**Danielle's role**
- Danielle rank 9's camera roll could hold the scarf-tying shot. Solar's body reacts to navy and gold without knowing why.
- Danielle hangout 6's queued draft could be the couple follow-up.
- `danielle-sisters`: "You always looked tired in November" is a perfect needle for Hanni to flinch at.
- Danielle rank 4: Haechan's "never anywhere by accident" could carry what he now knows about her.

**Home in November**
- Thanksgiving and the Foundation Dinner:
  - Jaehyun rank 5 (Labor Thanksgiving, 11/23): "This would have been Thursday."
  - the Haechan 11/23 holiday
  - a Mother text on 11/27: "the table's set for four"
  - Jaemin's Friendsgiving
- Regionals (12/6, Minji captain, Chenle on King's Row):
  - Minji rank 13: "December sixth. Two weeks. I counted the practices."
  - Chenle's "WHEN WE GET BACK" list
  - Haechan rank 4's duo queue
  - a Minji text on 12/6
- Jaemin's 11/21 party:
  - Jaemin rank 5 "cups" and rank 2 ("they happen because he's not there")
  - Chenle rank 2: "Friday he was at the house."
