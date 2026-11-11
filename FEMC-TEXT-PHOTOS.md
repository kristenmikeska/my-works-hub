# FEMC text photos: slots (technical; for Claude sessions, not for Kat)

Kat's idea (Nov 11 2026): texts in the epilogues carry REAL photos, never "[photo: …]" brackets. She drops photos (free file
names) into `~/Documents/UniverseHub-Images/Femc Mode Images/Text Photos/<Runners|strangers|HOAX|Stay>/`. A session then looks
at each photo, matches it to a slot below, and runs the tool. Where no photo fits a slot, reword that text instead (and drop
its `img`). This file may describe scenes; keep it out of anything shown to Kat.

## How it works
- Data: a message names its slot, `img: 'tp-<world>-<slug>'` (a burst: `imgs: [...]`). Every slot below is already wired.
- Tool: `python3 tools/femc-text-photos.py <slot id> <source path> [--crop L,T,R,B] [--batch N]` → `assets/femc/game/art/texts/<world>/<slug>.webp`
  (EXIF rotation, longest side 1080, WebP q82), rewrites `art/texts/index.js` (`FEMC_TEXT_PHOTOS`, `FEMC_TEXT_PHOTOS_V`), bumps its
  `?v=` in femc-game.html, records the source in `tools/femc-new-adds.json`. Pass the same `--batch N` for every photo of one
  session (otherwise each run takes highest + 1). `--list` shows every slot with ✓ when its photo exists; `--index` rebuilds.
  Removing a photo: delete the webp, run `--index`.
- Render (`assets/femc/game/textphotos.js`, `FemcTextPhotos`): a ready slot is a photo bubble (tap / Enter → full screen, ‹ Back /
  Esc, ← → in a burst); the text becomes an optional caption with a leading `handle:` and `[bracket]` stripped. "[video …]" texts get
  a ▶ over the still. A burst shows up to 4 thumbnails and "+N" from the bracket's count ("[11 photos]"). The thread list / banner
  line is the caption, else "Photo" / "Video" / "11 photos"; banners show a thumbnail. Reply options with `img` show a thumbnail
  button and send the photo. Not ready: the text exactly as written.
- After matching photos, reword the text so the caption fits the real picture (most brackets disappear on their own; a caption
  that only repeated the bracket is now empty, which is fine). If the bracket text was the whole message and the picture is
  different from what neighbouring lines say ("His Ear", "is he alright."), check those replies still make sense.
- No photo for Stay: its texts and phone lines mention none.

Columns: slot · file:line · sender → recipient · gate · what the photo should show · S = sent by Solar (choice / reply), R = to her.

## Runners (13 slots)
| slot | file:line | from | gate | should show | dir |
|---|---|---|---|---|---|
| tp-runners-left-chat | runners/story-nyc1.js:132 | Solar → girls' chat (Hanni, Hyein) | 12/21 early `epi-r-empty-campus`, choice "(Screenshot it. Send it to the girls.)" | a phone screenshot of the Alpha Phi house group chat: "who took my blue tupperware…" 11:40 PM, a gray "Solar left the chat." 3:12 AM line, "safe travels everyone!!! ❤️ see u in jan" 6:15 AM, a dog in a Christmas sweater 6:40. Caption "did i do this" stays | S |
| tp-runners-minji-quad | runners/story-nyc1.js:286 | Minji → Solar | 12/21 after `epi-r-car`, Minji route | one frame from far away: a tiny figure in a dark jacket at the far end of a white snowy quad, the bell tower behind, a line of footprints running back to the lens | R |
| tp-runners-han-schedule | runners/story-nyc1.js:400 | Ms. Han → Solar | 12/21 evening `epi-r-homecoming` | optional: a PDF page preview, "Lee_S_Dec22-28.pdf", her name in the Foundation's typeface over a four-column schedule table. Not a photo; fine to leave empty | R |
| tp-runners-dossier-1..4 (one `imgs` burst on two lines) | runners/story-nyc1.js:645 ("[11 photos]", flag `epi-r-footage-file`) and :647 ("[12 photos]", else) | Danielle → Jaehyun | 12/22 evening `epi-r-dossier` | surveillance-style shots of Solar. 1 = the October SUnews photo: Solar coming down the Sigma Chi front steps at 7 a.m. in last night's clothes, shoes in hand, head down. 2-4 differ by route (narration right after, lines ~653-700): Haechan route = the Sigma side gate at night through a parked car's window with a black sleeve holding it, the lit 4th-floor window of the Extracurricular Building, a hallway door "4B" with a burned-in 10:42 PM timestamp; read the other routes' lines before choosing. Every picture is "a door, and somebody going through it, and a time"; nothing explicit | R (Jaehyun's phone) |
| tp-runners-story-time-1 | runners/story-w1.js:722 | Jaemin's story (Stories viewer) | 12/5 evening `epi-r-friday`, every route | video still: Jaemin on the couch arm, too close to the lens | R |
| tp-runners-story-time-2 | runners/story-w1.js:723 | Jaemin | same | video still: same couch, one reindeer antler now | R |
| tp-runners-story-time-3 | runners/story-w1.js:724 | Jaemin | same | video still: Jeno's hand over the lens, Jaemin yelling behind it | R |
| tp-runners-story-time-4 | runners/story-w1.js:725 | Jaemin | same | video still: Jaemin whispering in a dark hallway (bass behind the wall) | R |
| tp-runners-story-time-5 | runners/story-w1.js:726 | Jaemin | same | video still: Jaemin holding a red cup to the camera like a microphone | R |
| tp-runners-footage | runners/story-w3.js:917 | Danielle → Solar | 12/19 late `epi-r-footage`, Haechan route | video still (0:41): the Sigma staircase from below, Solar alone at its foot with a red cup looking back over her shoulder. The CG `epi-r-footage` shows right after, so a still could be a crop of that CG if Kat wants (ask; don't assume) | R |

## strangers (5 slots)
| slot | file:line | from | gate | should show | dir |
|---|---|---|---|---|---|
| tp-strangers-koi | strangers/people.js:1560 | Yunjin → Solar | ambient 3/1-3/12 after `epi-s-alone` (`epi-s-am-yunjin-koi`) | two koi in one bucket, and one slipper | R |
| tp-strangers-banana | strangers/people.js:1579 | Jungwon → Solar | ambient 3/3-3/9, Jungwon route (`epi-s-am-jw-casual`), after her reply "send me the banana" | a banana laid very neatly on a baduk board | R |
| tp-strangers-eyebrows | strangers/people-girls.js:479 | Yunjin → girls' chat | 2/24 early, flag `epi-s-eyebrows-help`, after `epi-s-girls` (`epi-s-tx-gc-eyebrows`) | a girl asleep on a heated floor with two white (painted) eyebrows (Daeboreum prank) | R |
| tp-strangers-game-screen | strangers/people-girls.js:538 | Sakura → girls' chat | ambient 3/9-3/13 after `epi-s-moon` (`epi-s-am-gc-count`) | a handheld game screen: a fighter in a coat lying on the floor (KO'd) | R |
| tp-strangers-fish-tank | strangers/story-car.js:610 | Yunjin → Solar | 3/12 evening after `epi-s-tank` (`epi-s-tx-car-tank`) | a fish tank on a step under a tarp, in the dust (the "monument" tank) | R |

## HOAX (18 slots)
| slot | file:line | from | gate | should show | dir |
|---|---|---|---|---|---|
| tp-hoax-mom-pillow | hoax/texts-more.js:28 | Mom → Solar | 12/22 after, after `epi-h-home` (`epi-h-tx-mom-pillow`) | Nana (big white dog) asleep on Solar's pillow, upside down, four legs in the air, tongue out one side | R |
| tp-hoax-dog-bed | hoax/texts-nana.js:25 | Mom → Solar | 12/23 after, after `epi-h-home` (`epi-h-tx-mom-bed`) | a large grey dog bed in the living-room corner, untouched; through the doorway a white tail hangs off a human bed | R |
| tp-hoax-feet | hoax/texts-more.js:118 | Solar → Jihoon (contact topic "Send him a picture of Nana", after 12/22 + `epi-h-home`) | phone topic | Nana asleep across her feet | S |
| tp-hoax-jihoon-snow | hoax/phone.js:130 | Solar → Jihoon (topic "Send him a picture of Nana in the snow", after 12/26) | phone topic | Nana in the snow | S |
| tp-hoax-ear | hoax/texts-more.js:39 | Solar → Jihoon (reply option) | 12/26 evening after `epi-h-christmas` (`epi-h-tx-jh-son`) | Nana on the heated floor, one ear inside out (his reply: "His Ear") | S |
| tp-hoax-antlers-proud | hoax/story-nana.js:76 | Solar → crew group chat | 12/25 evening `epi-h-nana-antlers`, choice "Send the good one" | Nana in reindeer antlers, sitting up very straight, looking into the camera with dignity | S |
| tp-hoax-antlers-flat | hoax/story-nana.js:88 | Solar → crew group chat | same event, choice "Send the one where he's given up" | Nana lying flat on his side in reindeer antlers, tongue out, staring at the ceiling | S |
| tp-hoax-asahi-lights | hoax/people-crew.js:384 | Solar → Jungwon | Asahi hangout `epi-h-asahi-1` (12/21-12/26 evening, after `epi-h-home`), choice "(Send him a photo of Asahi.)" | Asahi under the Christmas lights, glaring | S |
| tp-hoax-niki-poster | hoax/people.js:1285 | Niki → Solar (after her reply "send it to me") | ambient 12/26-1/2 (`epi-h-am-niki-meme`) | Jungwon's yearbook photo with "where is the council" photoshopped on it like a missing poster | R |
| tp-hoax-jake-meme | hoax/phone.js:314 | Jake → Solar (topic "Ask for the newest meme", after 12/27 + `epi-h-part-four`) | phone topic | a meme: Heeseung's flashcards, but they're the Ten Commandments | R |
| tp-hoax-agenda | hoax/story-days.js:193 | Heeseung → council group chat (read over her shoulder) | 12/29 after `epi-h-ready`, routes other than Jungwon / Jihoon | the laminated party agenda ("8:45 at the corner by the convenience store"); the next line says "agenda, attached. Laminated." | R |
| tp-hoax-window | hoax/texts-more.js:86 | Solar → Cherry (reply option) | ambient 12/29-1/5 after `epi-h-christmas` (`epi-h-am-cher-cloud`) | Nana in the window, smiling (Cherry's grandmother prints it) | S |
| tp-hoax-dog-date | hoax/people-extra.js:125 | Niki → crew group chat | Jungwon hangout `epi-h-jungwon-dogs` (12/31-1/7 after school, after `epi-h-christmas`) | very blurry: two people on a bench by a frozen pond and two dogs, one very large (a paparazzi shot) | R |
| tp-hoax-snowbank | hoax/texts-more.js:54 | Solar → Junkyu (reply option) | 1/4 after (`epi-h-tx-kyu-snow`) | a pair of black eyes and a black nose in a snowbank (only the face shows) | S |
| tp-hoax-snowdrift | hoax/story-nana.js:198 | Solar → Junkyu | 1/4 evening `epi-h-nana-shovel`, choice "(Take a picture for Junkyu.)" | Nana up to his eyes in a snowdrift, smiling (same moment as snowbank; one photo may serve both) | S |
| tp-hoax-snow-sit | hoax/texts-nana.js:53 | Solar → Asahi (reply option, for Kazuha) | ambient 1/1-1/7 after `epi-h-seance` (`epi-h-am-asahi-real`) | Nana sitting very straight in the snow, looking directly into the camera | S |
| tp-hoax-food-bowl | hoax/texts-nana.js:46 | Solar → Sunoo (reply option, for his grandmother) | ambient 12/26-12/31 after `epi-h-christmas` (`epi-h-am-sunoo-ask`) | Nana asleep with his head in his food bowl | S |
| tp-hoax-doorway | hoax/texts-nana.js:37 | Solar → Jungwon (reply option, for Maeumi) | 1/10 after, after `epi-h-makeup` (`epi-h-tx-jw-door`) | Nana lying across her bedroom doorway, looking at the camera | S |

Nana is one big white dog (Samoyed-like); the Nana slots can share sources if Kat sends fewer photos than slots.

## Mentions not wired (no message line carries the picture; adding one would change the scene)
- Runners story-w2.js:1071 "(Screenshot it for the girls.)": narration only. story-w3.js:960 Danielle's "screen recording" (said, not sent as a line). story-nyc1.js:141 "wrong pic" (no picture). story-nyc2.js:1787 / 1795 the photo of the eleven bags (narration). story-w1.js:194 "SUesports posted a photo." is the post system (`post-r-…` on the next line).
- HOAX story-days.js:163-165 Cherry's mirror photo for Jungwon (narration, no line); people.js:951 / 1197 "(Screenshot it…)" with empty `then`; people.js:1296 "he sent me a picture of a skate" (mentioned); people-late.js:219 "Send Proof Of Life" (she sends nothing); people-crew-late.js:405 "agenda attached" (no picture line); story-w1.js:210 Cherry's screenshots (narration).
- strangers people.js:1577 "He sent me a picture of a banana" (the banana arrives in tp-strangers-banana).
- Excluded on purpose: every SUgram / HOAXgram post (`img: 'post-…'`, sugram.js, hoaxgram.js), scrapbook pictures, polaroids, CGs.
