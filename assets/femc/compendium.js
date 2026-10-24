/* Every character in the compendium, shown on compendium.html (FEMC mode only).
   unlock: 'met:<id>' (a social link you have met), 'reg:<id>' (registered in someone's scene), a stamp id, or 'always'.
   v1only: a v1 link that isn't in the revamp (Leon, Cloud, Noctis, Astarion, Shadowheart, removed 2026-10-21). It opens only from
   v1's save ('kg-femc-game') and is listed only when a v1 save exists, so revamp-only players never see a locked page forever.
   img is a portrait path; entries without one show a silhouette. Locked entries never show their notes. */
window.FEMC_COMPENDIUM = [
 {
  "id": "haechan",
  "name": "Haechan",
  "from": "Runners · strangers",
  "img": null,
  "unlock": "met:haechan",
  "note": "He wasn't pulled through like the others. He came looking.",
  "arcana": "∞ · Universe",
  "link": "social.html#haechan",
  "secret": true
 },
 {
  "id": "jungwon",
  "name": "Yang Jungwon",
  "from": "Hoax",
  "img": "assets/femc/profile/searchers/jungwon.webp",
  "unlock": "met:jungwon",
  "note": "Student council president of a school nobody here has heard of. He keeps saying you look like someone.",
  "arcana": "V · Hierophant",
  "link": "social.html#jungwon",
  "secret": true,
  "profile": true
 },
 {
  "id": "femc",
  "name": "Solar",
  "from": "Gekkoukan High · S.E.E.S.",
  "img": "assets/femc/portraits/solar/neutral.webp",
  "unlock": "femc",
  "note": "Third-year. Transfer student. Headphones on, armband on. On this side of the site, she is you."
 },
 {
  "id": "elizabeth",
  "name": "Elizabeth",
  "from": "Persona 3",
  "img": "assets/femc/profile/elizabeth.webp",
  "profile": true,
  "unlock": "femc",
  "note": "Attendant of the Velvet Room, keeper of this compendium, and endlessly curious about everything outside it."
 },
 {
  "id": "rohan",
  "name": "Rohan Kishibe",
  "from": "JoJo's Bizarre Adventure",
  "img": null,
  "unlock": "met:rohan",
  "note": "A manga artist who will do almost anything for good material.",
  "arcana": "I · Magician",
  "link": "social.html#rohan"
 },
 {
  "id": "shadowheart",
  "v1only": true,
  "name": "Shadowheart",
  "from": "Baldur's Gate 3",
  "img": "assets/femc/portraits/shadowheart/neutral.webp",
  "unlock": "met:shadowheart",
  "note": "A cleric with a sharp tongue and more secrets than she lets on.",
  "arcana": "II · Priestess",
  "link": "social.html#shadowheart"
 },
 {
  "id": "haru",
  "name": "Haru Okumura",
  "from": "Persona 5",
  "img": "assets/femc/portraits/haru/neutral.webp",
  "unlock": "met:haru",
  "note": "Gentle, polite, and much fiercer than she looks.",
  "arcana": "III · Empress",
  "link": "social.html#haru"
 },
 {
  "id": "noctis",
  "v1only": true,
  "name": "Noctis Lucis Caelum",
  "from": "Final Fantasy XV",
  "img": null,
  "unlock": "met:noctis",
  "note": "A prince who would rather be fishing.",
  "arcana": "IV · Emperor",
  "link": "social.html#noctis"
 },
 {
  "id": "ann",
  "name": "Ann Takamaki",
  "from": "Persona 5",
  "img": "assets/femc/portraits/ann/neutral.webp",
  "unlock": "met:ann",
  "note": "Bright, loyal, and quick to stand up for her friends.",
  "arcana": "VI · Lovers",
  "link": "social.html#ann"
 },
 {
  "id": "rio",
  "name": "Rio Iwasaki",
  "from": "Persona 3 Portable",
  "img": null,
  "unlock": "met:rio",
  "note": "The tennis team's ace, who never once let herself stop before the ball did.",
  "arcana": "VII · Chariot",
  "link": "social.html#rio"
 },
 {
  "id": "saori",
  "name": "Saori Hasegawa",
  "from": "Persona 3 Portable",
  "img": null,
  "unlock": "met:saori",
  "note": "A library committee girl everyone whispers about, and nobody bothered to know.",
  "arcana": "IX · Hermit",
  "link": "social.html#saori"
 },
 {
  "id": "leon",
  "v1only": true,
  "name": "Leon S. Kennedy",
  "from": "Resident Evil 4",
  "img": null,
  "unlock": "met:leon",
  "note": "A government agent with a dry one-liner for every situation.",
  "arcana": "XI · Strength",
  "link": "social.html#leon"
 },
 {
  "id": "sebastian",
  "name": "Sebastian",
  "from": "Stardew Valley",
  "img": null,
  "unlock": "met:sebastian",
  "note": "A quiet programmer who likes rainy days and being left alone.",
  "arcana": "0 · Fool",
  "link": "social.html#sebastian"
 },
 {
  "id": "kiriko",
  "name": "Kiriko",
  "from": "Overwatch",
  "img": null,
  "unlock": "met:kiriko",
  "note": "A cheeky shrine protector with a kitsune at her side.",
  "arcana": "X · Fortune",
  "link": "social.html#kiriko"
 },
 {
  "id": "judy",
  "name": "Judy Alvarez",
  "from": "Cyberpunk 2077",
  "img": null,
  "unlock": "met:judy",
  "note": "A braindance tech who never stops fighting for her people.",
  "arcana": "VIII · Justice",
  "link": "social.html#judy"
 },
 {
  "id": "cloud",
  "v1only": true,
  "name": "Cloud Strife",
  "from": "Final Fantasy VII",
  "img": null,
  "unlock": "met:cloud",
  "note": "A mercenary with a huge sword. Not interested.",
  "arcana": "XII · Hanged Man",
  "link": "social.html#cloud"
 },
 {
  "id": "widowmaker",
  "name": "Widowmaker",
  "from": "Overwatch",
  "img": null,
  "unlock": "met:widowmaker",
  "note": "A sniper who claims to feel nothing at all.",
  "arcana": "XIII · Death",
  "link": "social.html#widowmaker"
 },
 {
  "id": "mercy",
  "name": "Mercy",
  "from": "Overwatch",
  "img": "assets/femc/portraits/mercy/neutral.webp",
  "unlock": "met:mercy",
  "note": "A doctor who will not stop trying to save everyone.",
  "arcana": "XIV · Temperance",
  "link": "social.html#mercy"
 },
 {
  "id": "astarion",
  "v1only": true,
  "name": "Astarion",
  "from": "Baldur's Gate 3",
  "img": "assets/femc/portraits/astarion/neutral.webp",
  "unlock": "met:astarion",
  "note": "Charming, theatrical, and suspiciously fond of the night.",
  "arcana": "XV · Devil",
  "link": "social.html#astarion"
 },
 {
  "id": "kuromi",
  "name": "Kuromi",
  "from": "Sanrio",
  "img": null,
  "unlock": "met:kuromi",
  "note": "A punk troublemaker with a diary she would rather you not read.",
  "arcana": "XVI · Tower",
  "link": "social.html#kuromi"
 },
 {
  "id": "akihiko",
  "name": "Akihiko Sanada",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/akihiko.webp",
  "profile": true,
  "unlock": "met:akihiko",
  "note": "Boxing club captain, protein enthusiast, and S.E.E.S. senpai. Never knows when to stop.",
  "arcana": "XVII · Star",
  "link": "social.html#akihiko"
 },
 {
  "id": "shinjiro",
  "name": "Shinjiro Aragaki",
  "from": "Persona 3",
  "img": "assets/femc/portraits/shinjiro/neutral.webp",
  "unlock": "met:shinjiro",
  "note": "Gruff, guarded, and a much better cook than he lets on.",
  "arcana": "XVIII · Moon",
  "link": "social.html#shinjiro"
 },
 {
  "id": "aphrodite",
  "name": "Aphrodite",
  "from": "Smite",
  "img": null,
  "unlock": "met:aphrodite",
  "note": "The goddess of love, newly without a temple.",
  "arcana": "XIX · Sun",
  "link": "social.html#aphrodite"
 },
 {
  "id": "kasumi",
  "name": "Kasumi Yoshizawa",
  "from": "Persona 5 Royal",
  "img": "assets/femc/portraits/kasumi/neutral.webp",
  "unlock": "met:kasumi",
  "note": "A gymnast with a red ribbon and boundless energy.",
  "arcana": "Faith",
  "link": "social.html#kasumi"
 },
 {
  "id": "junpei",
  "name": "Junpei Iori",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/junpei.webp",
  "profile": true,
  "unlock": "reg:junpei",
  "note": "The self-proclaimed ace of S.E.E.S. Invites himself everywhere."
 },
 {
  "id": "mitsuru",
  "name": "Mitsuru Kirijo",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/mitsuru.webp",
  "profile": true,
  "unlock": "reg:mitsuru",
  "note": "Student council president and the steady center of S.E.E.S."
 },
 {
  "id": "yukari",
  "name": "Yukari Takeba",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/yukari.webp",
  "profile": true,
  "unlock": "reg:yukari",
  "note": "Archer, skeptic, and the first friend you made at the dorm."
 },
 {
  "id": "aigis",
  "name": "Aigis",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/aigis.webp",
  "profile": true,
  "unlock": "reg:aigis",
  "note": "Precise, polite, and always counting something. Stars, steps, ships in the bay."
 },
 {
  "id": "koromaru",
  "name": "Koromaru",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/koromaru.webp",
  "profile": true,
  "unlock": "reg:koromaru",
  "note": "The best boy at Naganaki Shrine."
 },
 {
  "id": "ken",
  "name": "Ken Amada",
  "from": "Persona 3",
  "img": null,
  "unlock": "reg:ken",
  "note": "Young, serious, and older than his years."
 },
 {
  "id": "ryuji",
  "name": "Ryuji Sakamoto",
  "from": "Persona 5",
  "img": "assets/femc/portraits/ryuji/neutral.webp",
  "unlock": "reg:ryuji",
  "note": "Loud, loyal, and always ready to run headfirst into trouble."
 },
 {
  "id": "futaba",
  "name": "Futaba Sakura",
  "from": "Persona 5",
  "img": "assets/femc/portraits/futaba/neutral.webp",
  "unlock": "reg:futaba",
  "note": "A genius hacker who would prefer to talk to you through a screen."
 },
 {
  "id": "makoto",
  "name": "Makoto Niijima",
  "from": "Persona 5",
  "img": "assets/femc/portraits/makoto/neutral.webp",
  "unlock": "reg:makoto",
  "note": "A student council president with a mean right hook."
 },
 {
  "id": "shiho",
  "name": "Shiho Suzui",
  "from": "Persona 5",
  "img": null,
  "unlock": "reg:shiho",
  "note": "Ann's best friend."
 },
 {
  "id": "maruki",
  "name": "Takuto Maruki",
  "from": "Persona 5 Royal",
  "img": null,
  "unlock": "reg:maruki",
  "note": "A school counselor who really, truly wants everyone to be happy."
 },
 {
  "id": "tifa",
  "name": "Tifa Lockhart",
  "from": "Final Fantasy VII",
  "img": null,
  "unlock": "reg:tifa",
  "note": "A martial artist who keeps everyone grounded."
 },
 {
  "id": "aerith",
  "name": "Aerith Gainsborough",
  "from": "Final Fantasy VII",
  "img": null,
  "unlock": "reg:aerith",
  "note": "A flower seller with a warm laugh."
 },
 {
  "id": "karlach",
  "name": "Karlach",
  "from": "Baldur's Gate 3",
  "img": null,
  "unlock": "reg:karlach",
  "note": "A tiefling with a big heart, literally running hot."
 },
 {
  "id": "cazador",
  "name": "Cazador Szarr",
  "from": "Baldur's Gate 3",
  "img": null,
  "unlock": "reg:cazador",
  "note": "A vampire lord. Best avoided."
 },
 {
  "id": "abigail",
  "name": "Abigail",
  "from": "Stardew Valley",
  "img": null,
  "unlock": "reg:abigail",
  "note": "An adventurer stuck in a small town."
 },
 {
  "id": "sam",
  "name": "Sam",
  "from": "Stardew Valley",
  "img": null,
  "unlock": "reg:sam",
  "note": "Skater, guitarist, and terrible at being serious."
 },
 {
  "id": "genji",
  "name": "Genji",
  "from": "Overwatch",
  "img": null,
  "unlock": "reg:genji",
  "note": "A cyborg ninja who found peace the hard way."
 },
 {
  "id": "ana",
  "name": "Ana Amari",
  "from": "Overwatch",
  "img": null,
  "unlock": "reg:ana",
  "note": "A veteran sniper with a mother's patience and very little of it."
 },
 {
  "id": "ares",
  "name": "Ares",
  "from": "Smite",
  "img": null,
  "unlock": "reg:ares",
  "note": "The god of war. Exactly as subtle as that sounds."
 },
 {
  "id": "evelyn",
  "name": "Evelyn Parker",
  "from": "Cyberpunk 2077",
  "img": null,
  "unlock": "reg:evelyn",
  "note": "Poised, mysterious, and hard to read."
 },
 {
  "id": "panam",
  "name": "Panam Palmer",
  "from": "Cyberpunk 2077",
  "img": null,
  "unlock": "reg:panam",
  "note": "A nomad with a temper and a heart of gold."
 },
 {
  "id": "prompto",
  "name": "Prompto Argentum",
  "from": "Final Fantasy XV",
  "img": null,
  "unlock": "reg:prompto",
  "note": "Never seen without his camera."
 },
 {
  "id": "ignis",
  "name": "Ignis Scientia",
  "from": "Final Fantasy XV",
  "img": null,
  "unlock": "reg:ignis",
  "note": "Royal advisor, strategist, and an excellent cook."
 },
 {
  "id": "mymelody",
  "name": "My Melody",
  "from": "Sanrio",
  "img": "assets/femc/profile/mymelody.webp",
  "profile": true,
  "unlock": "reg:mymelody",
  "note": "Sweet, polite, and Kuromi's eternal rival."
 },
 {
  "id": "ashley",
  "name": "Ashley Graham",
  "from": "Resident Evil 4",
  "img": null,
  "unlock": "reg:ashley",
  "note": "The president's daughter, braver than anyone expects."
 },
 {
  "id": "ada",
  "name": "Ada Wong",
  "from": "Resident Evil 4",
  "img": null,
  "unlock": "reg:ada",
  "note": "A spy who always seems to know more than she says."
 },
 {
  "id": "koichi",
  "name": "Koichi Hirose",
  "from": "JoJo's Bizarre Adventure",
  "img": null,
  "unlock": "reg:koichi",
  "note": "Small, earnest, and tougher than he looks."
 },
 {
  "id": "josuke",
  "name": "Josuke Higashikata",
  "from": "JoJo's Bizarre Adventure",
  "img": null,
  "unlock": "reg:josuke",
  "note": "Laid-back, until someone insults his hair."
 },
 {
  "id": "jotaro",
  "name": "Jotaro Kujo",
  "from": "JoJo's Bizarre Adventure",
  "img": null,
  "unlock": "reg:jotaro",
  "note": "Calm, stoic, and rarely surprised."
 },
 {
  "id": "hanni",
  "name": "Hanni Pham",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/hanni.webp",
  "profile": true,
  "unlock": "met:hanni",
  "note": "There's a very small girl with thick black bangs at the window table in Chagall Café with two iced coffees in front of her and nobody in the other chair, and she waves at you through the glass with her whole arm, like you're late, and like it doesn't matter that you're late.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "hyein",
  "name": "Hyein Lee",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/hyein.webp",
  "profile": true,
  "unlock": "met:hyein",
  "note": "A very tall girl with very long, very straight hair is standing in front of a shop window in Paulownia Mall telling a mannequin, out loud, exactly what's wrong with its jacket, and she spots you in the glass and turns around already pointing.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "mark",
  "name": "Mark Lee",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/mark.webp",
  "profile": true,
  "unlock": "met:mark",
  "note": "Somebody's playing the public piano in Port Island Station's concourse, the one painted with fat cartoon seagulls, and it isn't one of the three songs children always play on it. A boy with light brown hair falling in his eyes, playing like he's talking to someone who hasn't shown up yet.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "jihoon",
  "name": "Park Jihoon",
  "from": "Hoax",
  "img": "assets/femc/profile/searchers/jihoon.webp",
  "profile": true,
  "unlock": "met:jihoon",
  "note": "There's a tall boy in a navy blazer at the crane game by Game Panic's door, feeding it coins with the grim focus of a man trying to win back his honor, and he says your name without turning around.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "minji",
  "name": "Minji Kim",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/minji.webp",
  "profile": true,
  "unlock": "met:minji",
  "note": "A girl in a backwards cap is sitting on the seawall at Port Island with an old camera up to her eye, filming the light on the water, and she lowers it the second you come into the frame, like she's been waiting for you to walk into it.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "cherry",
  "name": "Cherry",
  "from": "Hoax",
  "img": "assets/femc/profile/searchers/cherry.webp",
  "profile": true,
  "unlock": "met:cherry",
  "note": "There's a girl in the corner booth at Wild-Duck Burger with her arms folded so tightly it looks structural, glaring at a menu like it owes her money, and when she sees you through the window she doesn't wave. She points at the seat across from her.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "yunjin",
  "name": "Huh Yunjin",
  "from": "strangers",
  "img": "assets/femc/profile/searchers/yunjin.webp",
  "profile": true,
  "unlock": "met:yunjin",
  "note": "Down at the harbor there's a girl sitting on the seawall with her legs swinging over the water and two cans of coffee beside her, singing something loudly and badly to the gulls, and she stops mid-word when she sees you and grins like you're late for something.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "jaehyun",
  "name": "Jaehyun Lee",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/jaehyun.webp",
  "profile": true,
  "unlock": "met:jaehyun",
  "note": "Someone is running the steps at Naganaki Shrine, all hundred and twelve of them, up and down, at a pace that makes the old man by the offering box stop sweeping to watch, and when he reaches the bottom he sees you and stops, not out of breath, like he'd been expecting you to arrive at exactly this minute.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "fuuka",
  "name": "Fuuka Yamagishi",
  "from": "Persona 3",
  "img": "assets/femc/profile/sees/fuuka.webp",
  "profile": true,
  "unlock": "met:fuuka",
  "note": "Fuuka is at the dorm kitchen counter with a cookbook propped against the rice cooker and flour on one cheek, measuring something with the total concentration of a bomb technician, and she jumps a little when you come in.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "sunoo",
  "name": "Kim Sunoo",
  "from": "Hoax",
  "img": "assets/femc/profile/searchers/sunoo.webp",
  "profile": true,
  "unlock": "met:sunoo",
  "note": "There's a café on the Strip that wasn't there in October, wedged between the ramen shop and a shuttered pachinko parlor, with gold-fogged windows and a hand-lettered sign, and the boy behind the counter in a flowered apron waves at you through the glass with both hands like you're his favorite customer.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "junkyu",
  "name": "Kim Junkyu",
  "from": "Hoax",
  "img": "assets/femc/profile/searchers/junkyu.webp",
  "profile": true,
  "unlock": "met:junkyu",
  "note": "There's a small, round-faced boy in a navy blazer in the arcade at Paulownia Mall, losing at a dance game to a ten-year-old and cheering for the ten-year-old louder than anyone, and he spots you and waves with both arms like you're coming in to land.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "wren",
  "name": "Wren",
  "from": "???",
  "img": "assets/femc/profile/wren.webp",
  "profile": true,
  "unlock": "met:wren",
  "note": "There's a girl in a porter's coat on the last bench at Iwatodai Station, watching the trains come and go without getting on any of them.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "danielle",
  "name": "Danielle Marsh",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/danielle.webp",
  "profile": true,
  "unlock": "met:danielle",
  "note": "Halfway along the glass overpass above Iwatodai Station's ticket gates, a girl with curly dark hair sits very straight on the only bench with a folder open on her knees, watching the turnstiles the way other people watch television, and writing some of it down.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "jaemin",
  "name": "Na Jaemin",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/jaemin.webp",
  "profile": true,
  "unlock": "met:jaemin",
  "note": "Somebody has booked the biggest booth at Mandragora karaoke again, the one meant for company parties, and through the round window in its door you can see a boy standing on the vinyl couch with a microphone, doing a terrible accent for an audience of one bored blond kid and a melon soda.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 },
 {
  "id": "chenle",
  "name": "Zhong Chenle",
  "from": "Runners",
  "img": "assets/femc/profile/searchers/chenle.webp",
  "profile": true,
  "unlock": "met:chenle",
  "note": "At the very back of Game Panic, past the fighting games and the crane machines, where the carpet is older and nobody under thirty goes, a short blonde boy in a grey hoodie is playing a four-seat cabinet alone, very still, with a soda can set down beside his foot at an angle that looks measured.",
  "link": "femc-game.html",
  "linkLabel": "Return to game",
  "secret": true
 }
];

// v1-only entries: hidden (like a secret) for a player with no v1 save; v1 players see them exactly as before.
(() => { let v1 = false; try { v1 = !!localStorage.getItem('kg-femc-game'); } catch (err) {} if (!v1) window.FEMC_COMPENDIUM.forEach(e => { if (e.v1only) e.secret = true; }); })();

// The shared Compendium reads progress without changing either game's saves.
window.femcCompendiumOpen = e => {
  const read = key => { try { const value = JSON.parse(localStorage.getItem(key)); return value && typeof value === 'object' ? value : {}; } catch (err) { return {}; } };
  const game = read('kg-femc-game'), revamp = read('kg-femc-revamp');
  const ids = (...lists) => lists.flatMap(list => Array.isArray(list) ? list : []);
  const got = window.Achievements ? Achievements.unlocked() : {};
  if (e.unlock === 'always') return true;
  // v1 keeps prior discoveries in past; the revamp carries registered entries through New Game+.
  if (e.v1only && e.unlock.startsWith('met:')) return ids(game.met, game.past?.met).includes(e.unlock.slice(4));
  if (e.unlock.startsWith('met:')) return ids(game.met, game.past?.met, revamp.met, revamp.registered).includes(e.unlock.slice(4));
  if (e.unlock.startsWith('reg:')) return ids(game.registered, game.past?.registered, revamp.registered).includes(e.unlock.slice(4));
  return !!got[e.unlock];
};
