/* Persona 3: Solstice · cosmetics: the Wardrobe (Menu → Wardrobe) and the Boutique banner (2026-10-25, Kat's skins batch).
   Looks only, never stats. No real money: the banner takes Velvet Plumes (gacha.js), earned by playing.

   ── Kinds (KINDS; one equipped per slot, `slotOf`) ──
     skin      an outfit for a fighter (`who`): replaces their battle pose sheet (battle.js asks battle() for a pose folder)
               and, with "Outfits in scene portraits" on, their scene portraits (core.js portrait asks portrait()).
               Art: game/art/skins/<id>/<who>-pose-0..5.webp (the pose-sheet format: idle, Evoker, attack, spell, hurt,
               victory) and optional game/art/skins/<id>/portraits/<who>/<face>.webp.
               In battle (FEMC-SKINS-BATTLE-DESIGN, 2026-11-01): the portraits also wear the HUD card and turn-order faces, the
               victory pose stands on the win screen, and a look with `clean: true` (its cast frame re-cut without the painted
               effect) gets the layered hand charge; see battle() below.
               Part 8 (Nov 1 2026): a look's `theme` (THEMES below) frames its HUD card and bursts out of the All-Out cloud;
               optional art game/art/skins/<id>/<who>-onemore.webp (the One More eye strip, 5:1) and <who>-entrance.webp
               (the battle-start card, 16:9), <who>-onemore-v2.webp (the strip's second beat), <who>-theurgy.webp (E, the
               look's Theurgy cut-in, 16:9), <who>-finish.webp (G, its All-Out finish card, 16:9) and <who>-evoker.webp (M, its
               Evoker close-up in the summon cut-in, 16:9); a fighter's own look:
               game/art/onemore/<who>.webp (+ <who>-v2.webp), game/art/entrance/<who>.webp;
               a couple set's Showtime game/art/couples/<set>-showtime.webp; a theme's frame game/art/frames/<theme>.webp
               (tools/femc-wardrobe.py onemore / onemore2 / entrance / theurgy / finish / evoker / showtime / frame; scan lists them in ready.js).
               S3 (Nov 1 2026): "Try it on" ([data-wd-try] in the Wardrobe and the Boutique) plays game/tryon.js from tryOnSpec().
     weapon    a weapon look for a fighter: game/art/skins/<id>/weapon.webp (the Equipment tab shows it for her weapon slot).
     evoker    a tint on the Evoker prop in summons (CSS filter; code only).
     battleui  battle colours (CSS variables injected into the battle frame; code only).
     title     the title screen's colours (also kept in localStorage, since the title shows before a save loads; code only).
     wallpaper the menu's backdrop: a place background, the key art or a CSS pattern (code only).
     uitheme   the field UI's colours (CSS variables on :root; code only).
   ── Retired items (`retired: true`, e.g. sk-kiriko, Nov 1 2026) ──
     Gone for players: ready() is false (so never in the pool, a featured list, the viewer, equip or battle), the Wardrobe
     skips it (not even "Art coming"), and cs() takes it off if a save wears it (back to Default). Ownership in the save
     stays, harmless; the art stays on disk. A remake: re-cut the art and drop the flag.
   ── Art-pending items ──
     An item with `art: true` exists in the Wardrobe as "Art coming" and is never in the banner pool until its files are
     listed in game/art/ready.js (FEMC_ART_READY; tools/femc-wardrobe.py cuts sheets and rewrites it). The moment they're
     listed it's a normal item: it joins the pool, can be equipped, and shows up in battle and scenes. Nothing else changes.
   ── The Boutique banner (Menu → Wardrobe → Boutique) ──
     2 Velvet Plumes a pull (BAN.cost). Odds BAN.odds (Rare / Super Rare / Ultra), Super Rare or better within BAN.pitySR,
     an Ultra within BAN.pityUR. Featured items rotate by month (BANNERS; P5X-style rate-up: half of each rarity's pulls
     land on that rarity's featured item, and an Ultra that wasn't featured makes the next Ultra featured).
     Several banners at once (2026-10-27): November–March run 2–4 side by side (July–August 2: Swim Season beside Summer Nights) (the month's main banner, listed first, plus
     spotlight / seasonal / world ones); banners(d) lists the month's, hiding any whose featured list is empty (art not in, or
     only people Solar hasn't met). The Boutique's switcher picks one (S.gacha.cos.bsel; pickBanner); pulls rate up that
     banner's featured looks. Pity and the Ultra guarantee are shared across every banner (P5X-style), never per banner. Repeats give back
     Velvet Plumes (BAN.refund). Series rewards (gacha.js SERIES[].reward) are `pool: false`: only completing the series
     gives them.
   ── The party's looks (2026-10-27, Kat's "more skins" batch) ──
     Any fighter can wear an outfit or a weapon skin: `who` is the fighter id, the slot is `skin:<who>` / `weapon:<who>`,
     battle() hands battle.js a pose folder per member, weaponArt(who) feeds that member's Equipment weapon slot. An item
     for someone Solar hasn't met stays out of the pool and the Wardrobe (no spoilers; `metOk`). All of the party's
     outfits and the new weapon skins are art-pending (FEMC-ART-TODO section 7): game/art/skins/<id>/<who>-pose-0..5.webp
     and game/art/skins/<id>/weapon.webp, cut by tools/femc-wardrobe.py (`skin <sheet> <id> <who>`, `weapon <image> <id>`).
   ── The viewer ──
     An owned look's ⤢ (or the View button by Equip) opens gacha.js viewer() over every owned look on the page; ← → / swipe,
     Esc. First-got days: S.gacha.cos.got { id: day }.
   ── HD preview and the collection meter (2026-11-04) ──
     A Solar outfit with an HD pose set (ready.js skins[id].hd / hdv) previews its HD arms-crossed pose (.g-wd-stage.hd) with a
     row of its other poses (.g-wd-hdrow [data-wd-hd]) and an HD tag on its tile; meters() tops the list: outfits owned / in
     the Wardrobe with art, and Solar's art-ready outfits with an HD set.
   Save: S.gacha.cos = { own: [ids], on: { slot: id }, portraits, pulls, pity: { sr, ur } (shared by every banner), guar, last, got, bsel }. NG+ keeps own / on /
   portraits (core.js newGamePlus). Tests: FemcCosmetics.rng is replaceable; tests/femc_cosmetics.py. */
window.FemcCosmetics = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const S = () => G.S;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const api = { rng: Math.random };
  const R = () => api.rng();
  const pick = a => a[Math.floor(R() * a.length)];
  const RAR = { R: { name: 'Rare', color: '#6ab0ff', sfx: 'femc-advance' }, SR: { name: 'Super Rare', color: '#c58bff', sfx: 'femc-rankup' }, UR: { name: 'Ultra', color: '#ffd36b', sfx: 'femc-moon' } };
  const BAN = { cost: 2, odds: { R: 0.76, SR: 0.2, UR: 0.04 }, pitySR: 10, pityUR: 40, refund: { R: 1, SR: 1, UR: 2 } };
  const KINDS = {
    skin: { name: 'Outfit', order: 1 }, weapon: { name: 'Weapon skin', order: 2 }, evoker: { name: 'Evoker skin', order: 3 },
    battleui: { name: 'Battle theme', order: 4 }, title: { name: 'Title screen', order: 5 }, wallpaper: { name: 'Menu wallpaper', order: 6 }, uitheme: { name: 'Menu colours', order: 7 }
  };
  const BG = slug => `assets/femc/bg/${slug}.webp`;
  const c = (id, kind, name, r, desc, more = {}) => Object.assign({ id, kind, name, r, desc }, more);
  // Colour sets: pink, pink-2, pink-3, night (the game's own tokens, game.css / battle.css :root).
  const PAL = {
    moonlight: ['#6ab0ff', '#a8d0ff', '#dcebff', '#070b18'], sakura: ['#ff7fb0', '#ffb3cf', '#ffe3ee', '#1a0811'], velvet: ['#2b5fd0', '#6a9bff', '#cfe3ff', '#050b20'],
    sunrise: ['#ffb030', '#ffd36b', '#fff0c4', '#1a0e03'], mint: ['#2fd39a', '#7dffc0', '#d8fff0', '#03140d'], summer: ['#1fc4e8', '#6fe3ff', '#d8f7ff', '#031319'],
    pumpkin: ['#ff8a1f', '#ffb766', '#ffe2c2', '#140904'], jade: ['#2fd39a', '#8fffc0', '#dcfff0', '#04120c'], gold: ['#e8a41c', '#ffd36b', '#fff2c8', '#160d02']
  };
  const ITEMS = [
    // Outfits for Solar (FEMC-ART-TODO section 8A; all but Phantom Thief are in, batch 47).
    c('sk-yukata', 'skin', 'Summer Yukata', 'UR', 'Sunflower yukata, hair pinned up, a paper fan tucked in the obi.', { who: 'solar', art: true }),
    c('sk-wintercoat', 'skin', 'Winter Coat', 'SR', 'Cream wool coat, pink scarf, white earmuffs.', { who: 'solar', art: true }),
    c('sk-halloween', 'skin', 'Halloween Witch', 'SR', 'A little witch: pointed hat, star-lined cape, striped stockings.', { who: 'solar', art: true }),
    c('sk-date', 'skin', 'Date Day', 'SR', 'Off-shoulder knit top, pleated skirt, white sneakers.', { who: 'solar', art: true }),
    c('sk-phantom', 'skin', 'Phantom Thief', 'UR', 'A long black coat, red gloves and a white domino mask. Take your heart.', { who: 'solar', art: true }),
    // Kat's own two (2026-10-25).
    c('sk-emo', 'skin', 'Emo Night', 'SR', 'All black: a pleated skirt, striped sleeves, a chain belt and platform boots.', { who: 'solar', art: true }),
    // Retired (Kat, 2026-11-01: she'll remake it); its art stays on disk. Drop `retired` when the remake is in.
    c('sk-kiriko', 'skin', 'Kiriko Cosplay', 'UR', 'Fox-ear band, red and white shrine robes, kunai at her belt. Her main, down to the last ofuda.', { who: 'solar', art: true, retired: true }),
    // More looks for Solar, Haechan and Jungwon (FEMC-ART-WIRING section 7): wired as each one's art arrives (art batches 86-94).
    c('sk-alphaphi', 'skin', 'Alpha Phi Formal', 'SR', 'A long dusty-rose satin gown, a silver Alpha Phi pin and silver heels. Formal night.', { who: 'solar', art: true }), // series: Runners
    c('sk-harbourcoat', 'skin', 'Harbour Night Coat', 'SR', 'A long black coat buttoned to the throat, leather gloves, a red thread tied at her wrist. The port at night.', { who: 'solar', art: true }), // series: strangers
    c('sk-idol', 'skin', 'Stage Idol', 'UR', 'A white-and-gold stage set, sequins, a headset mic and boots made for choreography. Fearless.', { who: 'solar', art: true }), // series: Solstice
    c('sk-esports', 'skin', 'SU eSports Jersey', 'SR', 'The team jersey in orange and navy, a headset round her neck, joggers and sneakers. Match day.', { who: 'solar', art: true }), // series: Runners
    c('sk-hanbok', 'skin', 'Moonlit Hanbok', 'UR', 'A formal hanbok in midnight silk: a pale jeogori, a deep navy skirt embroidered with silver moons, a jade norigae at her hip.', { who: 'solar', art: true }), // series: strangers
    c('sk-vp', 'skin', 'Vice President', 'SR', 'The Hanlim blazer, pressed and buttoned, a council armband and a folder of minutes. She runs the meeting.', { who: 'solar', art: true }), // series: HOAX
    c('sk-velvet', 'skin', 'Velvet Attendant', 'UR', 'Deep blue velvet, a little cap, gloves and a heavy book under one arm. The Velvet Room will see you now.', { who: 'solar', art: true }), // series: Persona
    c('sk-roadwork', 'skin', 'Morning Roadwork', 'SR', 'A pink track jacket, running shorts over leggings, a sweatband and earbuds. Six a.m. with Akihiko.', { who: 'solar', art: true }), // series: Persona
    // Art batch 94: Solar's inspo looks and the 2000s pop set (FEMC-ART-WIRING "Planned skins (2026-10-29)").
    c('sk-y2k', 'skin', 'Y2K Pop Star', 'UR', 'Pink streaks, butterfly clips, a rhinestone belt and a naginata in pink tape. The year 2000 called; she answered.', { who: 'solar', art: true }), // series: Solstice
    c('sk-oops', 'skin', 'Oops!', 'UR', 'Red latex, a high collar and a blowout to the moon. She did it again.', { who: 'solar', art: true }), // series: Solstice
    c('sk-snake', 'skin', 'Snake Charmer', 'UR', 'Rhinestones, shimmer and a very large, very calm python. An awards-show entrance, 2001.', { who: 'solar', art: true }), // series: Solstice
    c('sk-sugarrush', 'skin', 'Sugar Rush', 'UR', 'Twin tails with fuzzy clips, a winged teddy bear on her corset and fluffy boots to the knee. Cute, and armed.', { who: 'solar', art: true }), // series: Solstice
    c('sk-prowl', 'skin', 'Night Prowl', 'SR', 'Leopard print, a black velvet cap and liner sharp enough to cut. Matches Haechan’s Bad Influence.', { who: 'solar', art: true }), // series: strangers
    c('sk-strawberry', 'skin', 'Strawberry Milk', 'SR', 'Strawberry-pink hair to her waist, charm nails and every bead necklace she owns. Sweet until the blade comes out.', { who: 'solar', art: true }), // series: Solstice
    c('sk-summersession', 'skin', 'Summer Session', 'SR', 'A white track jacket, a varsity tube top and cutoffs on the quad. Matches Haechan’s Headphones On.', { who: 'solar', art: true }), // series: Runners
    c('sk-limelight', 'skin', 'Limelight', 'UR', 'Neon lime, rhinestones on everything and a chain belt that stops traffic. She matches him on purpose.', { who: 'solar', art: true }), // series: Solstice
    c('sk-haechan-sweater', 'skin', 'Sweater Date', 'SR', 'A cream cable-knit sweater, a check scarf and a coffee he will absolutely make you hold.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-haechan-headphones', 'skin', 'Headphones On', 'SR', 'Hood up, headphones on, a white-and-blue track jacket over neon green. Do not disturb (you can disturb).', { who: 'haechan', art: true }), // series: Runners
    c('sk-haechan-arrivals', 'skin', 'Arrivals Gate', 'SR', 'Black frames, a navy overshirt and a crossbody strap. Landed at six, camera-ready by five past.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-haechan-windowseat', 'skin', 'Window Seat', 'SR', 'Honey-brown hair, clear frames, a black band tee and two silver chains. Wake him for the snacks.', { who: 'haechan', art: true }), // series: Runners
    c('sk-haechan-bad', 'skin', 'Bad Influence', 'SR', 'Cuban chains, one fingerless glove and a jacket knotted at his hips. Matches Solar’s Night Prowl.', { who: 'haechan', art: true }), // series: strangers
    c('sk-haechan-garage', 'skin', 'Garage Band', 'SR', 'A beat-up biker jacket, a band tee, red plaid and white jeans. Two chords and no regrets.', { who: 'haechan', art: true }), // series: Runners
    c('sk-haechan-limelight', 'skin', 'Limelight', 'UR', 'A black chest rig striped in neon lime, chains, a dog tag and a racing helmet. Comeback season.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-haechan-unravelled', 'skin', 'Unravelled', 'SR', 'A black open-knit sweater coming apart on purpose, silver chains and ripped jeans. Goes with Solar’s Emo Night.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-jungwon-sheer', 'skin', 'Sheer Nerve', 'SR', 'Sheer black sleeves, a cropped waistcoat and a pink flush under his eyes. Goes with Solar’s Emo Night.', { who: 'jungwon', art: true }), // series: Solstice
    // Art batch 106: Haechan's and Jungwon's inspo looks, Sweater Weather and the four suit and stage looks (FEMC-ART-WIRING section 7), pose frames and scene portraits.
    c('sk-haechan-fairground', 'skin', 'Fairground Lights', 'UR', 'Copper hair, a glossy red satin bomber and too many chains. The rides close at midnight; he doesn’t.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-haechan-sweettooth', 'skin', 'Sweet Tooth', 'SR', 'A boxy leather jacket, a white tour tee and a red licorice rope. A corner-shop run after dark.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-jungwon-pinstripe', 'skin', 'Pinstripe Detective', 'UR', 'Grey chalk-stripe, a waistcoat strung with silver chains and a magnifying glass. He already knows who did it.', { who: 'jungwon', art: true }), // series: strangers
    c('sk-jungwon-soundcheck', 'skin', 'Soundcheck', 'SR', 'A grey college hoodie, big black glasses, an in-ear and one puffed cheek. Not showtime yet.', { who: 'jungwon', art: true }), // series: HOAX
    c('sk-jungwon-angel', 'skin', 'Cell Block Angel', 'UR', 'A faded red hoodie worn like a cape, a handcuff on one wrist and a pink lollipop. Inmate 1004: say it in Korean.', { who: 'jungwon', art: true }), // series: Solstice
    c('sk-jungwon-sweater', 'skin', 'Sweater Weather', 'SR', 'A soft navy sweater over a white collar, a long camel coat. He planned the whole date.', { who: 'jungwon', art: true }), // series: Solstice
    c('sk-haechan-suit', 'skin', 'Black Suit', 'SR', 'A black suit, a black shirt open at the collar, no tie. Somebody else’s harbour, his rules.', { who: 'haechan', art: true }), // series: strangers
    c('sk-haechan-stage', 'skin', 'Encore Stage', 'UR', 'A red-and-black stage jacket with silver studs, a headset mic and a sun pinned to the lapel. Encore.', { who: 'haechan', art: true }), // series: Solstice
    c('sk-jungwon-heir', 'skin', 'Heir’s Suit', 'UR', 'A charcoal three-piece suit, a signet ring and a dark overcoat on his shoulders. The family name walks in first.', { who: 'jungwon', art: true }), // series: strangers
    c('sk-jungwon-stage', 'skin', 'Center Stage', 'UR', 'A white stage suit with silver chains and a headset mic. Centre position, no notes.', { who: 'jungwon', art: true }), // series: Solstice
    // Art batch 114 (FEMC-ART-WIRING sections 12, 13, 19): Swim Season, the couple outfits and Tarot Arcana's first look, pose frames
    // (and scene portraits, except The Sun's, still to come). A couple look carries `couple: '<set id>'` (both halves share it); the
    // partner's half needs only metOk, like every look (Kat's ruling, 2026-10-31).
    c('sk-swim-lagoon', 'skin', 'Pink Lagoon', 'UR', 'A ruffled black-and-pink bikini, a sheer pink sarong and a bubble ponytail.', { who: 'solar', art: true }), // series: Swim Season
    c('sk-swim-lifeguard', 'skin', 'Lifeguard on Duty', 'SR', 'A red one-piece, a whistle and an opinion about running by the pool.', { who: 'solar', art: true }), // series: Swim Season
    c('sk-swim-night', 'skin', 'Night Swim', 'UR', 'A black halter suit with silver chains and a moon-print cover-up, for the pool after midnight.', { who: 'solar', art: true }), // series: Swim Season
    c('sk-haechan-swim', 'skin', 'Boardwalk', 'SR', 'A black hibiscus shirt, board shorts and sunglasses he will not take off.', { who: 'haechan', art: true }), // series: Swim Season
    c('sk-jungwon-swim', 'skin', 'Pool Day', 'SR', 'A rash guard, goggles and a towel he folded first.', { who: 'jungwon', art: true }), // series: Swim Season
    c('sk-yukari-swim', 'skin', 'Beach Volley', 'SR', 'A pink sporty bikini, a mesh tee and a visor. She is going to win.', { who: 'yukari', art: true }), // series: Swim Season
    c('sk-akihiko-swim', 'skin', 'Lifeguard Captain', 'SR', 'Red trunks, an open hoodie and a whistle he uses on Junpei.', { who: 'akihiko', art: true }), // series: Swim Season
    c('sk-cp-sunmoon', 'skin', 'Sun Hoodie', 'SR', 'An oversized black hoodie with a pink sun on the front. Goes with Haechan’s Moon Hoodie.', { who: 'solar', art: true, couple: 'cp-sunmoon' }), // series: Couple outfits
    c('sk-haechan-cp-sunmoon', 'skin', 'Moon Hoodie', 'SR', 'An oversized black hoodie with a pink crescent moon. Goes with Solar’s Sun Hoodie.', { who: 'haechan', art: true, couple: 'cp-sunmoon' }), // series: Couple outfits
    c('sk-cp-drive', 'skin', 'Midnight Drive', 'UR', 'A black leather jacket lined in pink over a pink slip dress, for a drive with the windows down. Goes with Haechan’s.', { who: 'solar', art: true, couple: 'cp-drive' }), // series: Couple outfits
    c('sk-haechan-cp-drive', 'skin', 'Midnight Drive', 'UR', 'Black leather lined in pink over a pink shirt open at the collar. He has the keys. Goes with Solar’s.', { who: 'haechan', art: true, couple: 'cp-drive' }), // series: Couple outfits
    c('sk-cp-afterhours', 'skin', 'After Hours', 'SR', 'A black blazer, a pink tie and two long braids: the council room after everyone’s gone. Goes with Jungwon’s.', { who: 'solar', art: true, couple: 'cp-afterhours' }), // series: Couple outfits
    c('sk-jungwon-cp-afterhours', 'skin', 'After Hours', 'SR', 'A black blazer, a pink tie and a pink cardigan over his shoulders. He locks up last. Goes with Solar’s.', { who: 'jungwon', art: true, couple: 'cp-afterhours' }), // series: Couple outfits
    c('sk-cp-moviedate', 'skin', 'Movie Date', 'SR', 'A cream knit, a long black coat and a pink scarf for a winter movie date. Goes with Jungwon’s.', { who: 'solar', art: true, couple: 'cp-moviedate' }), // series: Couple outfits
    c('sk-jungwon-cp-moviedate', 'skin', 'Movie Date', 'SR', 'A cream knit under a long black coat, a pink scarf and both tickets in his pocket. Goes with Solar’s.', { who: 'jungwon', art: true, couple: 'cp-moviedate' }), // series: Couple outfits
    c('sk-cp-ringside', 'skin', 'Ringside', 'SR', 'The boxing club’s red-and-black track jacket, cropped, and a towel round her neck. Goes with Akihiko’s.', { who: 'solar', art: true, couple: 'cp-ringside' }), // series: Couple outfits
    c('sk-akihiko-cp-ringside', 'skin', 'Ringside', 'SR', 'The boxing club’s red-and-black track jacket and a towel round his neck. Goes with Solar’s.', { who: 'akihiko', art: true, couple: 'cp-ringside' }), // series: Couple outfits
    c('sk-cp-festival', 'skin', 'Summer Festival', 'UR', 'A black yukata with red camellias and silver moons, a red obi and a crescent in her hair. Goes with Akihiko’s.', { who: 'solar', art: true, couple: 'cp-festival' }), // series: Couple outfits
    c('sk-akihiko-cp-festival', 'skin', 'Summer Festival', 'UR', 'A grey striped yukata with the same red obi, and his gloves, of course. Goes with Solar’s.', { who: 'akihiko', art: true, couple: 'cp-festival' }), // series: Couple outfits
    c('sk-arcana-sun', 'skin', 'The Sun', 'UR', 'A white-and-gold gown with a sunburst collar. Arcana XIX, and it shows.', { who: 'solar', art: true }), // series: Tarot Arcana
    // Weapon skins (art pending: 8C).
    c('wpn-sakura', 'weapon', 'Sakura Naginata', 'SR', 'A pale wood haft wrapped in pink silk, blossoms etched on the blade.', { who: 'solar', art: true }),
    c('wpn-phantom', 'weapon', 'Phantom Naginata', 'UR', 'Black lacquer and a red tassel, to go with the coat.', { who: 'solar', art: true }),
    // More for Solar (2026-10-27): her two outfits' matches and one from each of Kat's universes (art pending: section 7).
    c('wpn-kiriko', 'weapon', 'Kitsune Naginata', 'UR', 'Red lacquer and a fox-mask charm, kunai strapped along the haft, ofuda streaming from the collar. A fox spirit’s blade.', { who: 'solar', art: true }),
    c('wpn-emo', 'weapon', 'Emo Night Naginata', 'SR', 'Matte black, a chain wrap, safety pins and a little broken-heart charm. Goes with Emo Night.', { who: 'solar', art: true }),
    c('wpn-runners', 'weapon', 'Runners Naginata', 'SR', 'Orange and navy grip tape, a tiny gaming-headset charm, a rooftop at golden hour etched on the blade. From Runners.', { who: 'solar', art: true }),
    c('wpn-strangers', 'weapon', 'Harbour Night Naginata', 'SR', 'Gunmetal and wet black, a harbour-light amber edge and a red thread knotted under the blade. From strangers.', { who: 'solar', art: true }),
    c('wpn-hoax', 'weapon', 'Council Naginata', 'SR', 'Navy and white, a student-council armband tied at the collar and a laminated hall pass. From HOAX.', { who: 'solar', art: true }),
    // Matches for her new outfits (art batch 95).
    c('wpn-velvet', 'weapon', 'Velvet Naginata', 'UR', 'Blue velvet wrap, gold fittings and a little silver key on a chain. Goes with Velvet Attendant.', { who: 'solar', art: true }), // series: Persona
    c('wpn-idol', 'weapon', 'Lightstick Naginata', 'UR', 'A white haft that glows like a lightstick and a star at the collar. Goes with Stage Idol.', { who: 'solar', art: true }), // series: Solstice
    c('wpn-hanbok', 'weapon', 'Norigae Naginata', 'SR', 'Black lacquer inlaid with mother-of-pearl moons, a jade norigae tassel at the collar. Goes with Moonlit Hanbok.', { who: 'solar', art: true }), // series: strangers
    // The party's outfits (2026-10-27, Kat's picks; art pending: section 7). Worn on their battle pose sheets.
    c('sk-akihiko-champ', 'skin', 'Champion’s Robe', 'UR', 'A red satin boxing robe with gold trim, SANADA across the back and a title belt over one shoulder.', { who: 'akihiko', art: true }),
    c('sk-akihiko-hoodie', 'skin', 'Off-Day Hoodie', 'SR', 'A grey zip hoodie, track pants and running shoes. His day off still has roadwork in it.', { who: 'akihiko', art: true }),
    c('sk-haechan-runners', 'skin', 'Sigma Chi Runner', 'SR', 'His Runners look: a Sigma Chi letterman jacket over an orange hoodie, studio headphones round his neck.', { who: 'haechan', art: true }),
    c('sk-jungwon-council', 'skin', 'HOAX Council Uniform', 'SR', 'The Hanlim High blazer, the student-council armband and a clipboard he takes very seriously.', { who: 'jungwon', art: true }),
    c('sk-yukari-kyudo', 'skin', 'Archery Club', 'SR', 'Her kyudo uniform: a white top, navy hakama and a black chest guard.', { who: 'yukari', art: true }),
    c('sk-yukari-pink', 'skin', 'Featherman Pink', 'UR', 'A pink sentai suit, the feathered helmet under her arm. She will not be taking questions from Ken.', { who: 'yukari', art: true }),
    c('sk-junpei-baseball', 'skin', 'Little League Legend', 'SR', 'Pinstripes, a batting helmet and eye black. A legend, by his own account.', { who: 'junpei', art: true }),
    c('sk-mitsuru-rider', 'skin', 'Motorcycle Leathers', 'UR', 'Her white riding suit, and her white motorcycle never far behind. Execution, with style.', { who: 'mitsuru', art: true }),
    c('sk-shinjiro-apron', 'skin', 'Beanie & Apron', 'SR', 'A knit beanie and a plain apron over his coat. Dinner is in ten minutes; nobody touches the pot.', { who: 'shinjiro', art: true }),
    c('sk-minji-crew', 'skin', 'Film Crew', 'SR', 'A cargo vest, black cargo pants and a crew pass on a lanyard. Quiet on set.', { who: 'minji', art: true }),
    c('sk-jihoon-pilates', 'skin', 'Purple Pilates Set', 'SR', 'A lavender matching set, grip socks and a rolled mat. It’s for his core, he says.', { who: 'jihoon', art: true }),
    c('sk-aigis-uniform', 'skin', 'Gekkoukan Uniform', 'SR', 'The school uniform over her frame, the ribbon tied to the millimetre. Mission: blend in.', { who: 'aigis', art: true }),
    // Kat's own two for the searchers (2026-10-27, batch 57).
    c('sk-jihoon-emo', 'skin', 'Emo Night', 'SR', 'A black leather jacket, ripped black jeans, silver chains and combat boots.', { who: 'jihoon', art: true }),
    c('sk-minji-su', 'skin', 'SU Crewneck', 'SR', 'A navy SU crewneck, baggy dark jeans and sneakers. Off-duty on campus.', { who: 'minji', art: true }),
    // The party's weapon skins (2026-10-27; art pending).
    c('wpn-akihiko-champ', 'weapon', 'Champion Gloves', 'UR', 'Gold leather, red trim, laced cuffs. Title-fight gloves.', { who: 'akihiko', art: true }),
    c('wpn-jungwon-council', 'weapon', 'Council Rapier', 'SR', 'A gold swept guard with the council crest, a navy-and-white ribbon on the hilt.', { who: 'jungwon', art: true }),
    c('wpn-haechan-suit', 'weapon', 'Black Tie Knife', 'SR', 'Matte black, a gunmetal guard and a silver cufflink set in the pommel. Goes with Black Suit.', { who: 'haechan', art: true }), // series: strangers
    c('wpn-haechan-stage', 'weapon', 'Encore Knife', 'UR', 'Mirror chrome, a red grip and a gold sun on the pommel. Goes with Encore Stage.', { who: 'haechan', art: true }), // series: Solstice
    c('wpn-jungwon-heir', 'weapon', 'Signet Rapier', 'UR', 'Black steel and gold, a family signet on the guard. Goes with Heir’s Suit.', { who: 'jungwon', art: true }), // series: strangers
    c('wpn-jungwon-stage', 'weapon', 'Spotlight Rapier', 'SR', 'White and silver, a chain on the guard and a crystal pommel. Goes with Center Stage.', { who: 'jungwon', art: true }), // series: Solstice
    // Code-only: Evokers.
    c('evk-rose', 'evoker', 'Rose Gold Evoker', 'R', 'Warm rose-gold plating.', { filter: 'sepia(.8) saturate(2.4) hue-rotate(-28deg) brightness(1.05)' }),
    c('evk-midnight', 'evoker', 'Midnight Evoker', 'R', 'Gunmetal blue, nearly black.', { filter: 'brightness(.6) sepia(.6) hue-rotate(185deg) saturate(3)' }),
    c('evk-jade', 'evoker', 'Jade Evoker', 'SR', 'Polished green stone.', { filter: 'sepia(.8) hue-rotate(95deg) saturate(2.6)' }),
    c('evk-gold', 'evoker', 'Golden Sun Evoker', 'UR', 'Solid gold. Very loud.', { filter: 'sepia(1) saturate(3.2) hue-rotate(-8deg) brightness(1.1)' }),
    c('evk-heart', 'evoker', 'Sweetheart Evoker', 'SR', 'Candy pink. The Valentine’s Series reward.', { filter: 'sepia(.9) saturate(4) hue-rotate(-50deg) brightness(1.1)', pool: false }),
    // Code-only: battle themes.
    c('bui-moonlight', 'battleui', 'Moonlight Battle', 'R', 'Cool blues over the Dark Hour.', { pal: 'moonlight' }),
    c('bui-jade', 'battleui', 'Jade Battle', 'R', 'Calm greens.', { pal: 'jade' }),
    c('bui-velvet', 'battleui', 'Velvet Battle', 'SR', 'The Velvet Room’s blue.', { pal: 'velvet' }),
    c('bui-gold', 'battleui', 'Golden Battle', 'UR', 'Every bar and button in gold.', { pal: 'gold' }),
    // Code-only: title screens.
    c('tt-snow', 'title', 'Snowfall Title', 'R', 'Pale blue sky, a navy band.', { title: ['#bfe3ff', '#0b1c3d'] }),
    c('tt-sakura', 'title', 'Sakura Title', 'R', 'Blossom pink.', { title: ['#ffb3cf', '#3a1028'] }),
    c('tt-darkhour', 'title', 'Dark Hour Title', 'SR', 'Sickly green, like midnight.', { title: ['#3fbf6a', '#04110a'], titleFilter: 'hue-rotate(80deg) saturate(.8)' }),
    c('tt-velvet', 'title', 'Velvet Title', 'SR', 'A room with no doors.', { title: ['#2b5fd0', '#050b20'] }),
    c('tt-sunburst', 'title', 'Sunburst Title', 'UR', 'Gold on gold. The Cast Keychains reward.', { title: ['#ffd36b', '#2a1400'], pool: false }),
    c('tt-twosuns', 'title', 'Two Suns Title', 'UR', 'Amber and rose, two lights at once. The Solchan Series reward.', { title: ['#ffb84d', '#2a0d14'], pool: false }),
    c('tt-eclipse', 'title', 'Eclipse Title', 'UR', 'A sun and a moon sharing the sky. The Hidden Charms reward.', { title: ['#fff0a8', '#070a1c'], pool: false }),
    c('tt-zenith', 'title', 'Zenith Title', 'UR', 'Noon, straight overhead, and no shadow under anyone. For the top of the tower.', { title: ['#fff6cf', '#7a4a00'], pool: false }),
    // Code-only: menu wallpapers (place backgrounds and the key art; nothing from the story's CGs).
    c('wp-dorm', 'wallpaper', 'Dorm Lounge', 'R', 'The lounge at night.', { bg: BG('iwatodaidorm-livingroom-night') }),
    c('wp-mall', 'wallpaper', 'Paulownia Mall', 'R', 'The mall after dark.', { bg: BG('paulownia-mall-night') }),
    c('wp-rooftop', 'wallpaper', 'School Rooftop', 'R', 'The city from the roof.', { bg: BG('rooftop-citynight') }),
    c('wp-shrine', 'wallpaper', 'Shrine Festival', 'SR', 'Lanterns at Naganaki Shrine.', { bg: BG('naganaki-shrine-festival') }),
    c('wp-velvet', 'wallpaper', 'Velvet Room', 'SR', 'Blue all the way down.', { bg: BG('velvetroom-1') }),
    c('wp-xmas', 'wallpaper', 'Port Island Lights', 'SR', 'Christmas on Port Island.', { bg: BG('portisland-christmas') }),
    c('wp-fireworks', 'wallpaper', 'Beach Fireworks', 'SR', 'Fireworks over the sea.', { bg: BG('yakushima-beach-fireworks') }),
    c('wp-keyart', 'wallpaper', 'Solstice Key Art', 'UR', 'The title screen’s painting.', { bg: 'assets/femc/title/keyart.webp' }),
    c('wp-hearts', 'wallpaper', 'Hearts', 'SR', 'Little pink hearts. The Sweethearts & Sidekicks reward.', { css: 'radial-gradient(circle at 25% 25%, #ff8cc0 0 6px, transparent 7px) 0 0 / 46px 46px, radial-gradient(circle at 75% 75%, #ff4f9e 0 5px, transparent 6px) 0 0 / 46px 46px, linear-gradient(160deg, #3a1028, #14070f)', pool: false }),
    c('wp-snow', 'wallpaper', 'Snowfall', 'SR', 'Soft snow on navy. The Winter Series reward.', { css: 'radial-gradient(circle, #fff 0 2px, transparent 3px) 0 0 / 34px 34px, radial-gradient(circle, rgba(255,255,255,.6) 0 1.5px, transparent 2.5px) 17px 17px / 34px 34px, linear-gradient(180deg, #0b1c3d, #050b20)', pool: false }),
    c('wp-pajamas', 'wallpaper', 'Pajama Night', 'SR', 'Moons and stars on flannel blue. The Dorm Life Series reward.', { css: 'radial-gradient(circle at 30% 30%, #ffe9a8 0 4px, transparent 5px) 0 0 / 40px 40px, radial-gradient(circle at 70% 70%, #cfe6ff 0 3px, transparent 4px) 0 0 / 40px 40px, linear-gradient(160deg, #2a3a66, #121a33)', pool: false }),
    // Code-only: field UI colours.
    c('ui-sakura', 'uitheme', 'Sakura Colours', 'R', 'Softer pinks.', { pal: 'sakura' }),
    c('ui-mint', 'uitheme', 'Mint Colours', 'R', 'Fresh greens.', { pal: 'mint' }),
    c('ui-moonlight', 'uitheme', 'Moonlight Colours', 'SR', 'Silver and blue.', { pal: 'moonlight' }),
    c('ui-velvet', 'uitheme', 'Velvet Colours', 'SR', 'Elizabeth would approve.', { pal: 'velvet' }),
    c('ui-sunrise', 'uitheme', 'Sunrise Colours', 'UR', 'Gold and amber.', { pal: 'sunrise' }),
    c('ui-summer', 'uitheme', 'Summer Colours', 'SR', 'Sea blue. The Summer Series reward.', { pal: 'summer', pool: false }),
    c('ui-pumpkin', 'uitheme', 'Pumpkin Colours', 'SR', 'Jack-o’-lantern orange. The Halloween Series reward.', { pal: 'pumpkin', pool: false })
  ];
  const byId = id => ITEMS.find(x => x.id === id) || null;
  /* Themes (FEMC-SKINS-BATTLE-DESIGN part 4's proposal, Nov 1 2026; Kat can move any look, or take it out to leave it plain):
     theme id -> looks. A look's `theme` frames its fighter's HUD card (K) and bursts out of the All-Out cloud (L); later the
     themed skill effects (F) use it too. Ids: hearts, sunmoon, petals, stars, bubbles, notes, glitter, snow, thorns, cards,
     butterflies, foxfire, confetti (battle.js THEME_ART draws each one; art/fx/theme-<id>.webp and art/frames/<id>.webp
     replace the drawing once Kat's art is in). */
  const THEMES = {
    hearts: ['sk-date', 'sk-sugarrush', 'sk-strawberry', 'sk-cp-drive', 'sk-haechan-cp-drive', 'sk-cp-moviedate', 'sk-jungwon-cp-moviedate', 'sk-cp-afterhours',
      'sk-jungwon-cp-afterhours', 'sk-cp-ringside', 'sk-akihiko-cp-ringside', 'sk-haechan-sweater', 'sk-jungwon-sweater', 'sk-jungwon-angel'],
    sunmoon: ['sk-cp-sunmoon', 'sk-haechan-cp-sunmoon', 'sk-arcana-sun', 'sk-hanbok', 'sk-swim-night', 'sk-cp-festival', 'sk-akihiko-cp-festival'],
    petals: ['sk-yukata', 'sk-alphaphi', 'sk-yukari-kyudo'],
    stars: ['sk-halloween', 'sk-yukari-pink'],
    bubbles: ['sk-swim-lagoon', 'sk-swim-lifeguard', 'sk-haechan-swim', 'sk-jungwon-swim', 'sk-yukari-swim', 'sk-akihiko-swim'],
    notes: ['sk-haechan-stage', 'sk-jungwon-stage', 'sk-haechan-garage', 'sk-haechan-headphones', 'sk-summersession', 'sk-jungwon-soundcheck', 'sk-haechan-runners'],
    glitter: ['sk-idol', 'sk-y2k', 'sk-oops', 'sk-snake', 'sk-limelight', 'sk-haechan-limelight', 'sk-haechan-fairground'],
    snow: ['sk-wintercoat', 'sk-harbourcoat'],
    thorns: ['sk-emo', 'sk-jihoon-emo', 'sk-haechan-unravelled', 'sk-jungwon-sheer', 'sk-prowl', 'sk-haechan-bad'],
    cards: ['sk-phantom', 'sk-haechan-suit', 'sk-jungwon-heir', 'sk-jungwon-pinstripe'],
    butterflies: ['sk-velvet'],
    foxfire: ['sk-kiriko'],
    confetti: ['sk-esports', 'sk-junpei-baseball', 'sk-akihiko-champ', 'sk-roadwork'],
  };
  Object.entries(THEMES).forEach(([t, ids]) => ids.forEach(id => { const x = byId(id); if (x && !x.theme) x.theme = t; }));
  // Featured rotation by the game's month (P5X-style banners).
  const BANNERS = [
    // Art-pending items wait in their banner and join its featured list by themselves once their art is in (featured()).
    { id: 'bloom', name: 'Spring Bloom', months: [4, 5], color: '#ff8cc0', featured: ['sk-date', 'tt-sakura', 'ui-sakura', 'sk-jihoon-pilates', 'sk-junpei-baseball', 'sk-yukari-kyudo', 'sk-aigis-uniform', 'wpn-hoax', 'sk-minji-su', 'sk-vp', 'sk-sugarrush', 'sk-strawberry', 'sk-jungwon-soundcheck'] },
    { id: 'summer', name: 'Summer Nights', months: [6, 7, 8], color: '#4fd8ff', featured: ['sk-yukata', 'wp-fireworks', 'ui-mint', 'sk-haechan-runners', 'sk-minji-crew', 'sk-akihiko-hoodie', 'wpn-runners', 'sk-esports', 'sk-roadwork', 'sk-y2k', 'sk-snake', 'sk-strawberry', 'sk-summersession', 'sk-haechan-windowseat', 'sk-haechan-fairground', 'sk-swim-lifeguard', 'sk-cp-festival', 'sk-akihiko-cp-festival'] },
    { id: 'masquerade', name: 'Masquerade', months: [9, 10], color: '#c58bff', featured: ['sk-phantom', 'wpn-phantom', 'sk-halloween', 'bui-velvet', 'evk-jade', 'wpn-kiriko', 'wpn-emo', 'sk-yukari-pink', 'sk-jihoon-emo', 'sk-velvet', 'sk-oops', 'sk-prowl', 'sk-haechan-bad', 'sk-haechan-unravelled', 'sk-emo', 'sk-jungwon-sheer', 'wpn-velvet', 'sk-jungwon-pinstripe', 'sk-jungwon-angel', 'sk-swim-night'] },
    { id: 'lights', name: 'Winter Lights', months: [11, 12, 1], color: '#bfe3ff', featured: ['sk-wintercoat', 'wp-xmas', 'tt-snow', 'evk-rose', 'sk-shinjiro-apron', 'sk-mitsuru-rider', 'wpn-strangers', 'sk-harbourcoat', 'sk-haechan-arrivals', 'wpn-haechan-suit', 'wpn-jungwon-heir', 'sk-haechan-sweettooth', 'sk-jungwon-pinstripe', 'sk-haechan-suit', 'sk-jungwon-heir', 'sk-cp-moviedate', 'sk-jungwon-cp-moviedate'] },
    { id: 'sunrise', name: 'Golden Sunrise', months: [2], color: '#ffd36b', featured: ['ui-sunrise', 'bui-gold', 'evk-gold', 'wp-keyart', 'sk-akihiko-champ', 'wpn-akihiko-champ', 'sk-jungwon-council', 'wpn-jungwon-council', 'sk-hanbok', 'wpn-hanbok', 'sk-arcana-sun'] },
    // March's main banner (Kat's ruling, 2026-10-29: it took Golden Sunrise's March slot). Its other planned looks (FEMC-ART-WIRING
    // section 7) are all in since art batch 106: Encore Stage and Center Stage joined.
    { id: 'solar', name: 'Solar Spotlight', kind: 'Spotlight', months: [3], color: '#ffb84d', featured: ['sk-idol', 'sk-alphaphi', 'sk-hanbok', 'sk-velvet', 'sk-y2k', 'sk-oops', 'sk-snake', 'sk-sugarrush', 'sk-limelight', 'wpn-velvet', 'wpn-idol', 'wpn-hanbok', 'wpn-haechan-stage', 'wpn-jungwon-stage', 'sk-haechan-stage', 'sk-jungwon-stage', 'sk-swim-lagoon'] },
    // Side banners, November–March (2026-10-27): they run beside the month's main banner above (always first, the default).
    { id: 'runners', name: 'Runners World', kind: 'World', months: [11], color: '#ff9a5c', featured: ['sk-haechan-runners', 'wpn-runners', 'sk-minji-su', 'wp-rooftop', 'sk-alphaphi', 'sk-esports', 'sk-summersession', 'sk-haechan-headphones', 'sk-haechan-windowseat', 'sk-haechan-garage'] },
    { id: 'sees', name: 'S.E.E.S. Spotlight', kind: 'Spotlight', months: [11, 12], color: '#6ab0ff', featured: ['sk-yukari-kyudo', 'sk-yukari-pink', 'sk-junpei-baseball', 'sk-mitsuru-rider', 'sk-shinjiro-apron', 'sk-aigis-uniform', 'sk-akihiko-hoodie', 'tt-darkhour', 'wp-dorm', 'sk-yukari-swim'] },
    { id: 'haechan', name: 'Haechan Spotlight', kind: 'Spotlight', months: [12, 1], color: '#ff6f7d', featured: ['sk-haechan-runners', 'wpn-runners', 'wpn-strangers', 'evk-midnight', 'wp-rooftop', 'sk-haechan-sweater', 'sk-haechan-headphones', 'sk-haechan-arrivals', 'sk-haechan-garage', 'sk-haechan-limelight', 'wpn-haechan-suit', 'wpn-haechan-stage', 'sk-haechan-fairground', 'sk-haechan-sweettooth', 'sk-haechan-suit', 'sk-haechan-stage', 'sk-haechan-swim', 'sk-cp-sunmoon', 'sk-haechan-cp-sunmoon', 'sk-cp-drive', 'sk-haechan-cp-drive'] },
    { id: 'hoax', name: 'HOAX World', kind: 'World', months: [1, 2], color: '#9fe06a', featured: ['sk-jungwon-council', 'wpn-jungwon-council', 'wpn-hoax', 'sk-jihoon-pilates', 'sk-jihoon-emo', 'ui-velvet', 'sk-vp', 'wpn-jungwon-heir', 'sk-jungwon-soundcheck', 'sk-jungwon-angel', 'sk-jungwon-heir', 'sk-jungwon-swim', 'sk-cp-afterhours', 'sk-jungwon-cp-afterhours'] },
    { id: 'valentine', name: "Valentine's", kind: 'Seasonal', months: [2], color: '#ff7fb0', featured: ['sk-date', 'evk-rose', 'wpn-sakura', 'ui-sakura', 'wp-mall', 'sk-haechan-sweater', 'sk-prowl', 'sk-limelight', 'sk-haechan-bad', 'sk-haechan-limelight', 'sk-haechan-unravelled', 'sk-emo', 'sk-jungwon-sheer', 'sk-jungwon-sweater', 'sk-cp-sunmoon', 'sk-haechan-cp-sunmoon', 'sk-cp-drive', 'sk-haechan-cp-drive', 'sk-cp-afterhours', 'sk-jungwon-cp-afterhours', 'sk-cp-moviedate', 'sk-jungwon-cp-moviedate', 'sk-cp-ringside', 'sk-akihiko-cp-ringside'] },
    { id: 'akihiko', name: 'Akihiko Spotlight', kind: 'Spotlight', months: [3], color: '#c9d3e6', featured: ['sk-akihiko-champ', 'wpn-akihiko-champ', 'sk-akihiko-hoodie', 'bui-moonlight', 'sk-roadwork', 'sk-akihiko-swim', 'sk-cp-ringside', 'sk-akihiko-cp-ringside', 'sk-cp-festival', 'sk-akihiko-cp-festival'] },
    { id: 'searchers', name: 'The Searchers', kind: 'Spotlight', months: [3], color: '#8fd0ff', featured: ['sk-minji-crew', 'sk-minji-su'] },
    // Swim Season (art batch 114; FEMC-ART-WIRING section 12): July and August, beside Summer Nights.
    { id: 'swim', name: 'Swim Season', kind: 'Seasonal', months: [7, 8], color: '#ff7fa8', featured: ['sk-swim-lagoon', 'sk-swim-lifeguard', 'sk-swim-night', 'sk-haechan-swim', 'sk-jungwon-swim', 'sk-yukari-swim', 'sk-akihiko-swim', 'wp-fireworks', 'ui-mint', 'sk-summersession'] },
    // Tarot Arcana (art batch 114; section 19): January, beside Winter Lights and HOAX World. Its other three looks join when their art is in.
    { id: 'arcana', name: 'Tarot Arcana', kind: 'Seasonal', months: [1], color: '#ffd36b', featured: ['sk-arcana-sun', 'bui-velvet', 'ui-velvet'] }
  ];

  /* ── Art ── */
  const readyArt = () => window.FEMC_ART_READY || {};
  // Is an item usable: code-only always; an art item once ready.js lists its files.
  function ready(x) {
    if (!x || x.retired) return false;
    if (!x.art) return true;
    const A = readyArt();
    if (x.kind === 'skin') return ((A.skins || {})[x.id]?.poses || []).includes(x.who);
    if (x.kind === 'weapon') return (A.weapons || []).includes(x.id);
    return false;
  }
  const skinDir = id => `assets/femc/game/art/skins/${id}/`;
  // A party look only once Solar has met them (no spoilers from the Boutique).
  const metOk = x => !x.who || x.who === 'solar' || !!(G.isMet && G.isMet(x.who));
  const whoName = id => (id === 'solar' ? 'Solar' : (G.LINKS && G.LINKS[id] && G.LINKS[id].short) || (G.name ? G.name(id) : id));
  // Bump SKIN_V when outfit pose frames are re-cut in place (Kat's Photoshop recuts, Nov 1 2026); battle.js uses ART_V.
  const SKIN_V = 4;
  const posePath = (who, skin) => (skin && ready(skin) ? `${G.base}${skinDir(skin.id)}${who}-pose-0.webp?v=${SKIN_V}` : `${G.base}assets/femc/battle/art/poses/${who}-pose-0.webp`);

  /* ── State ── */
  function cs() {
    const g = window.FemcGacha ? window.FemcGacha.gs() : (S().gacha = S().gacha || {});
    const f = { own: [], on: {}, portraits: true, pOff: [], pulls: 0, pity: { sr: 0, ur: 0 }, guar: false, last: null, got: {}, bsel: '' };
    if (!g.cos || typeof g.cos !== 'object') g.cos = f;
    const s = g.cos;
    Object.keys(f).forEach(k => { if (s[k] === undefined || (f[k] !== null && typeof s[k] !== typeof f[k])) s[k] = f[k]; });
    if (s.on && typeof s.on === 'object') Object.keys(s.on).forEach(k => { const x = byId(s.on[k]); if (x && x.retired) delete s.on[k]; }); // a retired look comes off (Default)
    if (!Array.isArray(s.own)) s.own = []; if (!Array.isArray(s.pOff)) s.pOff = []; if (!s.got || Array.isArray(s.got)) s.got = {}; s.pity = Object.assign({ sr: 0, ur: 0 }, s.pity || {});
    return s;
  }
  const owns = id => cs().own.includes(id);
  const slotOf = x => (x.who ? `${x.kind}:${x.who}` : x.kind);
  // The equipped item in a slot, only while it's still usable.
  const onIn = slot => { const x = byId(cs().on[slot]); return x && ready(x) && owns(x.id) ? x : null; };
  function grantItem(id) { const x = byId(id); if (!x) return null; const s = cs(); if (!s.own.includes(id)) { s.own.push(id); if (s.got[id] == null) s.got[id] = S().day; } return x; }
  function equip(id) {
    const x = byId(id); if (!x || !owns(id) || !ready(x)) return false;
    cs().on[slotOf(x)] = id; G.save(); apply(); return true;
  }
  function unequip(slot) { delete cs().on[slot]; G.save(); apply(); return true; }
  /* "Outfits in scene portraits": the master toggle (`portraits`) and, under it, one per character (Kat, Nov 4): `pOff` lists
     the people whose worn outfit stays out of scenes (and, for Solar, off the evening screen). setPortraits(v) sets the master,
     setPortraits(v, who) that one person. */
  function setPortraits(v, who) {
    const s = cs();
    if (!who) s.portraits = !!v;
    else { s.pOff = s.pOff.filter(w => w !== who); if (!v) s.pOff.push(who); }
    G.save(); return who ? portraitsOn(who) : s.portraits;
  }
  const portraitsOn = who => { const s = cs(); return s.portraits !== false && !(who && s.pOff.includes(who)); };

  /* ── The banner ── */
  const monthOf = d => { try { return G.dateOf(d ?? S().day).getMonth() + 1; } catch (e) { return 4; } };
  const featOf = b => b.featured.map(byId).filter(x => x && x.pool !== false && ready(x) && metOk(x));
  // The month's banners, main first; one with nothing featured is hidden (the main one stays if all are empty).
  function banners(d) {
    const on = BANNERS.filter(b => b.months.includes(monthOf(d))), shown = on.filter(b => featOf(b).length);
    return shown.length ? shown : [on[0] || BANNERS[0]];
  }
  const banner = (d, id) => { const a = banners(d), w = id ?? cs().bsel; return a.find(b => b.id === w) || a[0]; };
  function pickBanner(id) { const b = banners().find(x => x.id === id); if (!b) return null; cs().bsel = id; G.save(); return b; }
  // The last day of a banner's run (its last month; the game runs April 2009 – March 2010).
  const bannerEnd = b => { const m = b.months[b.months.length - 1]; return new Date(m >= 4 ? 2009 : 2010, m, 0); };
  const pool = () => ITEMS.filter(x => x.pool !== false && ready(x) && metOk(x));
  const featured = (d, id) => featOf(banner(d, id));
  const plumes = () => (window.FemcGacha ? window.FemcGacha.gs().plumes : 0);
  const canPull = (n = 1) => plumes() >= BAN.cost * n && pool().length > 0;
  const pullWhy = (n = 1) => (canPull(n) ? '' : !pool().length ? 'Nothing in the pool' : `Needs ${BAN.cost * n} plumes (${plumes()})`);
  function rollR() {
    let x = R();
    for (const k of ['UR', 'SR']) { if (x < BAN.odds[k]) return k; x -= BAN.odds[k]; }
    return 'R';
  }
  /* One pull. Returns { item, r, dup, refund, feat } or null. */
  function pull() { const x = pullN(1); return x ? x[0] : null; }
  /* n pulls paid at once (×10 = 20 plumes). Each one counts pity on its own, so a ×10 always holds a Super Rare or
     better (BAN.pitySR is 10). Saved once. */
  function pullN(n = 1) {
    if (!canPull(n)) return null;
    window.FemcGacha.gs().plumes -= BAN.cost * n;
    const out = [], save = G.save;
    G.save = () => {};
    try { for (let i = 0; i < n; i++) out.push(roll()); } finally { G.save = save; }
    G.save();
    return out;
  }
  const pull10 = () => pullN(10);
  function roll() {
    const s = cs(), g = window.FemcGacha.gs(), p = s.pity;
    let r = rollR();
    if (r !== 'UR' && p.ur + 1 >= BAN.pityUR) r = 'UR';
    else if (r === 'R' && p.sr + 1 >= BAN.pitySR) r = 'SR';
    // A rarity with nothing in the pool steps down (Ultra → Super Rare → Rare), then up.
    const order = { UR: ['UR', 'SR', 'R'], SR: ['SR', 'R', 'UR'], R: ['R', 'SR', 'UR'] }[r];
    const rr = order.find(k => pool().some(x => x.r === k));
    p.ur = rr === 'UR' ? 0 : p.ur + 1;
    p.sr = rr === 'UR' || rr === 'SR' ? 0 : p.sr + 1;
    const all = pool().filter(x => x.r === rr), feat = featured().filter(x => x.r === rr);
    let item, isFeat = false;
    if (feat.length && (rr === 'UR' ? (s.guar || R() < 0.5) : R() < 0.5)) { item = pick(feat); isFeat = true; }
    else { const rest = all.filter(x => !feat.includes(x)); item = pick(rest.length ? rest : all); isFeat = feat.includes(item); }
    if (rr === 'UR') s.guar = !isFeat && feat.length > 0;
    const dup = owns(item.id), refund = dup ? BAN.refund[rr] : 0;
    if (dup) g.plumes += refund; else { s.own.push(item.id); s.got[item.id] = S().day; }
    s.pulls += 1; s.last = { at: S().day, id: item.id, r: rr };
    G.save();
    return { item, r: rr, dup, refund, feat: isFeat, ban: banner().id };
  }

  /* ── Applying looks ── */
  const varsCss = pal => { const v = PAL[pal]; return v ? `--pink:${v[0]};--pink-2:${v[1]};--pink-3:${v[2]};--night:${v[3]};` : ''; };
  let styled = false;
  function styleSheet() {
    if (styled) return; styled = true;
    const css = ITEMS.map(x => {
      if (x.kind === 'uitheme') return `:root[data-uitheme="${x.id}"]{${varsCss(x.pal)}}`;
      if (x.kind === 'title') return `:root[data-titletheme="${x.id}"] .g-title{background:${x.title[0]}}:root[data-titletheme="${x.id}"] .g-title::before{background:${x.title[1]}}${x.titleFilter ? `:root[data-titletheme="${x.id}"] .g-title-art{filter:${x.titleFilter}}` : ''}`;
      return '';
    }).join('\n');
    const el = document.createElement('style'); el.id = 'g-cos-style'; el.textContent = css; document.head.appendChild(el);
  }
  const wallCss = x => (x.css ? x.css : `url('${G.base}${x.bg}') center / cover no-repeat`);
  const TITLE_KEY = 'kg-femc-title-theme';
  function apply() {
    styleSheet();
    const root = document.documentElement, has = !!S();
    if (!has) return;
    const ui = onIn('uitheme'), wall = onIn('wallpaper'), title = onIn('title');
    if (ui) root.dataset.uitheme = ui.id; else delete root.dataset.uitheme;
    if (wall) { root.dataset.wall = wall.id; root.style.setProperty('--g-wall', wallCss(wall)); } else { delete root.dataset.wall; root.style.removeProperty('--g-wall'); }
    if (title) root.dataset.titletheme = title.id; else delete root.dataset.titletheme;
    try { if (title) localStorage.setItem(TITLE_KEY, title.id); else localStorage.removeItem(TITLE_KEY); } catch (e) {}
  }
  // The title shows before a save loads: use the last theme this browser saw.
  function applyTitleEarly() { styleSheet(); try { const t = localStorage.getItem(TITLE_KEY); if (t && byId(t)) document.documentElement.dataset.titletheme = t; } catch (e) {} }
  /* For the battle frame (battle.js reads parent.FemcCosmetics.battle() at load and when the Wardrobe changes): per worn look's
     fighter (`who`): pose (the pose folder), face ({ dir, have }: the look's scene portraits, for the HUD cards and turn order,
     FEMC-SKINS-BATTLE-DESIGN B), clean (true once the look's cast frame, pose 3, is re-cut without its painted effect: the
     layered hand charge plays only then, design A), hand ([x, y] share of the frame when an ITEMS `hand` overrides the
     fighter's default), look (the item id); plus CSS for the battle theme and Evoker tint.
     Marking a look clean (only after Kat's recut is wired): re-cut it with
       python3 tools/femc-wardrobe.py skin "<…/RECUTS - PHOTOSHOP EDITS/<sheet>.png>" <look id> <who>   (transparent sheets are fine)
     then add `clean: true` to its ITEMS entry (or list it in CLEAN below). */
  // Kat's Photoshop recuts (Nov 1 2026): every look below has its painted-in skill effect cut out, so the game draws the hand charge.
  const CLEAN = ['sk-aigis-uniform', 'sk-akihiko-champ', 'sk-akihiko-cp-festival', 'sk-akihiko-cp-ringside', 'sk-akihiko-hoodie', 'sk-akihiko-swim', 'sk-alphaphi', 'sk-arcana-sun', 'sk-cp-afterhours', 'sk-cp-drive', 'sk-cp-festival', 'sk-cp-moviedate', 'sk-cp-ringside', 'sk-cp-sunmoon', 'sk-date', 'sk-emo', 'sk-esports', 'sk-haechan-arrivals', 'sk-haechan-bad', 'sk-haechan-cp-drive', 'sk-haechan-cp-sunmoon', 'sk-haechan-fairground', 'sk-haechan-garage', 'sk-haechan-headphones', 'sk-haechan-limelight', 'sk-haechan-runners', 'sk-haechan-stage', 'sk-haechan-suit', 'sk-haechan-sweater', 'sk-haechan-sweettooth', 'sk-haechan-swim', 'sk-haechan-unravelled', 'sk-haechan-windowseat', 'sk-halloween', 'sk-hanbok', 'sk-harbourcoat', 'sk-idol', 'sk-jihoon-emo', 'sk-jihoon-pilates', 'sk-jungwon-angel', 'sk-jungwon-council', 'sk-jungwon-cp-afterhours', 'sk-jungwon-cp-moviedate', 'sk-jungwon-heir', 'sk-jungwon-pinstripe', 'sk-jungwon-sheer', 'sk-jungwon-soundcheck', 'sk-jungwon-stage', 'sk-jungwon-sweater', 'sk-jungwon-swim', 'sk-junpei-baseball', 'sk-limelight', 'sk-minji-crew', 'sk-minji-su', 'sk-mitsuru-rider', 'sk-oops', 'sk-phantom', 'sk-prowl', 'sk-roadwork', 'sk-shinjiro-apron', 'sk-snake', 'sk-strawberry', 'sk-sugarrush', 'sk-summersession', 'sk-swim-lagoon', 'sk-swim-lifeguard', 'sk-swim-night', 'sk-velvet', 'sk-vp', 'sk-wintercoat', 'sk-y2k', 'sk-yukari-kyudo', 'sk-yukari-pink', 'sk-yukata']; // look ids whose cast frame is clean (same as an ITEMS `clean: true`)
  const isClean = (x, who) => !!(x.clean || CLEAN.includes(x.id) || (((readyArt().skins || {})[x.id] || {}).clean || []).includes(who));
  /* Part 8 (FEMC-SKINS-BATTLE-DESIGN H-L, Nov 1 2026), also per fighter: theme (the look's theme id), name (the look's name),
     couple (its couple set id), onemore / onemore2 / entrance (the art's path, when ready.js lists it: the worn look's, else
     for a fighter in their own clothes game/art/onemore|entrance/<who>.webp, onemore2 = onemore/<who>-v2.webp), theurgy /
     finish (E / G: the worn look's own Theurgy cut-in and All-Out finish card), evoker (M: its Evoker close-up in the summon
     cut-in; battle.js draws the look's pose-1 frame without it), pose2b (an alternate sheet 2), omEyes ([x1, y1, x2, y2]
     in % of the v2 strip: ready.js eyes2, where the One More glints go; absent = the fixed 40% / 65% spot), fx (N: the
     look's own 3 x 2 effect sheet, skins/<look>/fx.webp, which battle.js plays wherever the theme sheet would);
     hd ({ dir, have, v }: the look's HD single-figure poses, skins/<look>/hd/, tools/femc-hd-poses.py) and hdOwn (her own look's,
     profile/solar-poses/); and showtime { set: path }, frames { theme: path }.
     A missing file is simply absent, and battle.js draws its built-in version. */
  const ART_V8 = 1; // bump when one of these files is replaced in place
  function battle() {
    if (!S()) return null;
    const pose = {}, pose2 = {}, pose2b = {}, face = {}, clean = {}, hand = {}, look = {}, theme = {}, name = {}, couple = {}, onemore = {}, onemore2 = {}, omEyes = {}, entrance = {}, theurgy = {}, finish = {}, evoker = {}, showtime = {}, frames = {}, fx = {}, hd = {};
    const out = { pose, pose2, pose2b, face, clean, hand, look, theme, name, couple, onemore, onemore2, omEyes, entrance, theurgy, finish, evoker, showtime, frames, fx, hd, hdOwn: null, css: '' };
    const A = readyArt(), art = (dir, f) => `${G.base}${dir}${f}?v=${ART_V8}`;
    ITEMS.filter(x => x.kind === 'skin').forEach(x => {
      const o = onIn(slotOf(x)); if (!o || pose[o.who]) return;
      const w = o.who, R = (A.skins || {})[o.id] || {}, have = (R.portraits || {})[w] || [];
      pose[w] = G.base + skinDir(o.id); look[w] = o.id; name[w] = o.name;
      if ((R.poses2 || []).includes(w)) pose2[w] = true; // D: the look's second pose sheet (<who>-pose2-0..5, femc-wardrobe.py skin2)
      if (pose2[w] && (R.poses2b || []).includes(w)) pose2b[w] = true; // an alternate sheet 2 (<who>-pose2b-0..5, skin2 --alt); battle.js flips a coin per fight
      if (have.length) face[w] = { dir: `${G.base}${skinDir(o.id)}portraits/${w}/`, have: have.slice(), v: 10 };
      if (isClean(o, w)) clean[w] = true;
      if (Array.isArray(o.hand)) hand[w] = o.hand.slice(0, 2);
      if (o.theme) theme[w] = o.theme;
      if (o.couple) couple[w] = o.couple;
      if ((R.onemore || []).includes(w)) onemore[w] = art(skinDir(o.id), `${w}-onemore.webp`);
      if ((R.onemore2 || []).includes(w)) onemore2[w] = art(skinDir(o.id), `${w}-onemore-v2.webp`); // the strip's second beat
      if (onemore2[w] && (R.eyes2 || {})[w]) omEyes[w] = R.eyes2[w].slice(0, 4); // where her eyes are on v2 (femc-wardrobe.py om_eyes), for the glints
      if ((R.entrance || []).includes(w)) entrance[w] = art(skinDir(o.id), `${w}-entrance.webp`);
      if ((R.theurgy || []).includes(w)) theurgy[w] = art(skinDir(o.id), `${w}-theurgy.webp`); // E: the look's Theurgy cut-in
      if ((R.finish || []).includes(w)) finish[w] = art(skinDir(o.id), `${w}-finish.webp`); // G: the look's All-Out finish card
      if ((R.evoker || []).includes(w)) evoker[w] = art(skinDir(o.id), `${w}-evoker.webp`); // M: the look's Evoker close-up (summon cut-in)
      if ((R.hd || []).length) hd[w] = { dir: `${G.base}${skinDir(o.id)}hd/`, have: R.hd.slice(), v: R.hdv || 1 }; // Solar's HD single-figure poses (win screen)
      if (R.fx) fx[w] = `${G.base}${skinDir(o.id)}fx.webp?v=${R.fx}`; // N: the look's own effect sheet (tools/femc-fx.py skin; ready.js fx = its hash)
    });
    const own = A.own || {};
    if ((own.hd || []).length) out.hdOwn = { dir: `${G.base}assets/femc/profile/solar-poses/`, have: own.hd.slice(), v: own.hdv || 1 }; // her own look's HD poses
    (own.onemore || []).forEach(w => { if (!pose[w]) onemore[w] = art('assets/femc/game/art/onemore/', `${w}.webp`); });
    (own.onemore2 || []).forEach(w => { if (!pose[w]) { onemore2[w] = art('assets/femc/game/art/onemore/', `${w}-v2.webp`); if ((own.eyes2 || {})[w]) omEyes[w] = own.eyes2[w].slice(0, 4); } });
    (own.entrance || []).forEach(w => { if (!pose[w]) entrance[w] = art('assets/femc/game/art/entrance/', `${w}.webp`); });
    (A.couples || []).forEach(c => { showtime[c] = art('assets/femc/game/art/couples/', `${c}-showtime.webp`); });
    (A.frames || []).forEach(t => { frames[t] = art('assets/femc/game/art/frames/', `${t}.webp`); });
    const bui = onIn('battleui'), evk = onIn('evoker');
    if (bui) out.css += `:root{${varsCss(bui.pal)}}`;
    if (evk) out.css += `.bt-evk-band .gun{filter:${evk.filter}}`;
    return out;
  }
  /* "Try it on" (FEMC-SKINS-BATTLE-DESIGN S3, Nov 1 2026; game/tryon.js plays it): everything the showcase draws for a ready
     outfit, owned or not: its pose frames, theme, clean flag and hand, Kat's entrance / One More art when ready.js lists it,
     the face for the built-in eye strip (the look's portrait, else the fighter's own) and a sample spell (the fighter's
     first non-physical attack skill in data.js, for its name and element colour). */
  function tryOnSpec(id) {
    const x = byId(id); if (!x || x.kind !== 'skin' || !ready(x)) return null;
    const w = x.who, R = (readyArt().skins || {})[x.id] || {}, have = (R.portraits || {})[w] || [];
    const D = window.FEMC_BATTLE_DATA || {}, m = (D.party || []).find(p => p.id === w) || {}, face0 = (m.faces && m.faces.idle) || 'neutral';
    const f = [face0, 'neutral', have[0]].find(k => k && have.includes(k));
    const art8 = n => `${G.base}${skinDir(x.id)}${n}?v=${ART_V8}`, EL = D.elements || {}, SK = D.skills || {};
    const sid = (m.skills || []).find(k => SK[k] && SK[k].el && EL[SK[k].el] && !EL[SK[k].el].phys && SK[k].type === 'dmg')
      || (m.skills || []).find(k => SK[k] && SK[k].el && EL[SK[k].el] && !EL[SK[k].el].phys);
    const sk = sid ? SK[sid] : { name: 'Megido', el: 'almighty' }, el = EL[sk.el] || { name: 'Almighty', color: '#ff8cc0' };
    const V = (window.FemcMode && window.FemcMode.v) || 1;
    return { id: x.id, who: w, name: x.name, whoName: whoName(w), theme: x.theme || null, clean: isClean(x, w), color: m.color || '#ff4f9e',
      hand: Array.isArray(x.hand) ? x.hand.slice(0, 2) : ((window.FemcLooksArt || {}).FIGHTER_HAND || {})[w] || ((window.FemcLooksArt || {}).HAND_DEFAULT || [0.5, 0.3]),
      frames: [0, 1, 2, 3, 4, 5].map(i => `${G.base}${skinDir(x.id)}${w}-pose-${i}.webp?v=${SKIN_V}`),
      // Kat's theme effect sheet (battle/art/fx/theme-<id>.webp; ready.js `themes`, femc-wardrobe.py scan) for the burst.
      themeSheet: x.theme && (readyArt().themes || []).includes(x.theme) ? `${G.base}assets/femc/battle/art/fx/theme-${x.theme}.webp?v=${ART_V8}` : null,
      fxSheet: R.fx ? `${G.base}${skinDir(x.id)}fx.webp?v=${R.fx}` : null, // N: the look's own effect sheet, played in the theme sheet's place
      entrance: (R.entrance || []).includes(w) ? art8(`${w}-entrance.webp`) : null, onemore: (R.onemore || []).includes(w) ? art8(`${w}-onemore.webp`) : null,
      onemore2: (R.onemore2 || []).includes(w) ? art8(`${w}-onemore-v2.webp`) : null, omEyes: (R.onemore2 || []).includes(w) && (R.eyes2 || {})[w] ? R.eyes2[w].slice(0, 4) : null,
      face: f ? `${G.base}${skinDir(x.id)}portraits/${w}/${f}.webp?v=10` : `${G.base}${D.portraits || 'assets/femc/portraits/'}${w}/${face0}.webp?v=${V}`, faceKey: f || face0,
      skill: { name: sk.name, el: sk.el, elName: el.name, color: el.color } };
  }
  /* For scenes (core.js portrait): an outfit's portrait, when it has one and the toggle is on. */
  function portrait(id, face) {
    const s = S() && S().gacha && S().gacha.cos;
    if (!s || !s.portraits || !portraitsOn(id)) return null;
    const x = onIn(`skin:${id}`); if (!x) return null;
    const have = ((readyArt().skins || {})[x.id]?.portraits || {})[id] || [];
    const f = [face, face && face.replace(/-\d+$/, ''), 'neutral', have[0]].find(k => k && have.includes(k));
    // ?v= bumps when a cut is redone (7: and seven more outfits, 2026-10-30).
    return f ? `${G.base}${skinDir(x.id)}portraits/${id}/${f}.webp?v=10` : null;
  }
  // The Equipment tab's picture for a fighter's weapon slot (a path from the site root, like a gear's `art`).
  function weaponArt(who) { const x = onIn(`weapon:${who}`); return x ? `${skinDir(x.id)}weapon.webp` : null; }

  /* ── Menu → Wardrobe: the fitting room (Nov 4 2026, Kat's mockup mockups/wardrobe/) ──
     Character tabs (Solar first; she holds every general kind too: weapon, Evoker, battle theme, menu colours, title,
     wallpaper; the others have Outfits and Weapon), only people Solar has met (or whose looks she owns). Every closet pane
     is in the page (data-fr-pane="<who>:<kind>"), only the open one shows, so any [data-wd] can be clicked from anywhere
     (picking it opens its pane). Solar's outfits come in small groups (FR_GROUPS); All / Owned and a sort; outfits whose
     art isn't in yet fold under "Coming soon". The booth on the left is fitting.js (FemcFitting.mount), with the picked
     item's name tag and buttons (Strike a pose, View, ▶ Try it on, Equip). Old hooks kept: [data-wd], [data-wd-off],
     [data-wd-equip], [data-wd-zoom], [data-wd-try], [data-wd-portraits], [data-wd-meter], .g-wd-items, .g-wd-acts,
     .g-wd-stage(.hd), .g-wd-pv-solar(.hd, data-who, data-hd-pose), .g-wd-pending, .g-wd-hdtag. */
  let view = 'wardrobe', sel = null, fresh = null;
  let frWho = 'solar', frKind = 'skin', frOwn = false, frSort = 'group';
  // A Solar outfit with a high-res pose set (ready.js skins[id].hd / hdv, tools/femc-hd-poses.py): the booth uses it.
  function hdOf(x) {
    if (!x || x.kind !== 'skin' || x.who !== 'solar' || !ready(x)) return null;
    const R = (readyArt().skins || {})[x.id] || {}, have = (R.hd || []).slice();
    if (!have.length) return null;
    const first = have.includes('arms-crossed') ? 'arms-crossed' : have[0];
    return { have: [first, ...have.filter(k => k !== first)], pick: first, src: k => `${G.base}${skinDir(x.id)}hd/${k}.webp?v=${R.hdv || 1}` };
  }
  /* The collection meter (2026-11-04): outfits owned of those in the Wardrobe with art in (every fighter's; retired and
     not-yet-met ones left out), and how many of Solar's art-ready outfits have an HD pose set. */
  function meters() {
    const A = (readyArt().skins || {});
    const outfits = ITEMS.filter(i => i.kind === 'skin' && ready(i) && (metOk(i) || owns(i.id)));
    const own = outfits.filter(i => owns(i.id)).length;
    const solar = ITEMS.filter(i => i.kind === 'skin' && i.who === 'solar' && ready(i));
    const hd = solar.filter(i => ((A[i.id] || {}).hd || []).length).length;
    const m = (k, lbl, n, max, unit) => `<span class="g-bq-meter" data-wd-meter="${k}" style="--rc:#ff4f9e;--p:${max ? (n / max).toFixed(3) : 0}"><b>${lbl}</b><i><s></s></i><em><b>${n}</b> / ${max} ${unit}</em></span>`;
    return `<div class="g-wd-meters">${m('own', 'Outfits', own, outfits.length, 'owned')}${m('hd', 'HD poses', hd, solar.length, 'Solar outfits')}</div>`;
  }
  const starsHtml = r => `<span class="g-ga-stars" style="--rc:${RAR[r].color}" aria-label="${RAR[r].name}">${'★'.repeat({ R: 2, SR: 3, UR: 4 }[r])}</span>`;
  const EVOKER = 'assets/femc/battle/art/summon/evoker-prop.webp';
  function thumb(x) {
    if (x.kind === 'skin') return ready(x) ? `<img src="${G.base}${skinDir(x.id)}${x.who}-pose-0.webp?v=${SKIN_V}" alt="" loading="lazy">` : `<span class="g-wd-ico">👗</span>`;
    if (x.kind === 'weapon') return ready(x) ? `<img src="${G.base}${skinDir(x.id)}weapon.webp" alt="" loading="lazy">` : `<span class="g-wd-ico">⚔</span>`;
    if (x.kind === 'evoker') return `<img src="${G.base}${EVOKER}" alt="" style="filter:${x.filter}" loading="lazy">`;
    const ca = cardArt(`art-${x.id}`); if (ca) return `<img class="art" src="${ca}" alt="" loading="lazy">`;  // Kat's card art (FEMC-ART-TODO 29)
    if (x.kind === 'wallpaper') return `<span class="g-wd-sw" style="background:${wallCss(x)}"></span>`;
    if (x.kind === 'title') return `<span class="g-wd-sw" style="background:linear-gradient(110deg, ${x.title[1]} 0 42%, ${x.title[0]} 42%)"></span>`;
    const v = PAL[x.pal]; return `<span class="g-wd-sw" style="background:linear-gradient(135deg, ${v[3]} 0 30%, ${v[0]} 30% 60%, ${v[1]} 60% 80%, ${v[2]} 80%)"></span>`;
  }
  // Solar's outfits in small groups, first match wins (Kat can rename or move any of these).
  const FR_GROUPS = [
    ['Couple sets', x => !!x.couple],
    ['Summer', x => /swim|yukata|summersession/.test(x.id)],
    ['Seasons & festivals', x => /wintercoat|halloween|hanbok/.test(x.id)],
    ['Stage & spotlight', x => /idol|limelight|y2k|alphaphi|oops|snake|stage/.test(x.id)],
    ['Arcana & otherworldly', x => /arcana|velvet|phantom|angel/.test(x.id)],
    ['Everyday', () => true],
  ];
  const FR_KINDS = ['skin', 'weapon', 'evoker', 'battleui', 'uitheme', 'title', 'wallpaper'];
  const FR_TAB = { skin: 'Outfits', weapon: 'Weapon', evoker: 'Evoker', battleui: 'Battle theme', uitheme: 'Menu colours', title: 'Title screen', wallpaper: 'Wallpaper' };
  const visible = i => !i.retired && (metOk(i) || owns(i.id));
  const tabOf = x => (x.who || 'solar');
  const frList = (who, kind) => ITEMS.filter(i => i.kind === kind && tabOf(i) === who && visible(i));
  const frWhos = () => {
    const F = window.FemcFitting, order = F ? F.ORDER : ['solar'];
    const has = new Set(ITEMS.filter(visible).map(tabOf));
    return ['solar', ...order.filter(w => w !== 'solar' && has.has(w)), ...[...has].filter(w => w !== 'solar' && !order.includes(w))];
  };
  const frKinds = who => FR_KINDS.filter(k => frList(who, k).length || (who === 'solar' && k === 'skin'));
  const RANK_DESC = { UR: 0, SR: 1, R: 2 };
  function frCard(i) {
    const own = owns(i.id), rd = ready(i), on = onIn(slotOf(i))?.id === i.id;
    const st = !rd ? 'Art coming' : on ? 'Wearing' : own ? 'Owned' : i.pool === false ? 'Series reward' : 'Boutique';
    const tags = (hdOf(i) ? '<i class="g-wd-hdtag" title="HD poses">HD</i>' : '') + (i.couple ? '<i class="g-fr-cptag">Couple</i>' : '');
    return `<li class="g-fr-li">${own && rd ? `<button type="button" class="g-view-zoom" data-wd-zoom="${i.id}" aria-label="View ${esc(i.name)}" title="View">⤢</button>` : ''}<button type="button" class="g-fr-card${own ? ' own' : ''}${on ? ' on' : ''}${rd ? '' : ' pending'}${sel === i.id ? ' sel' : ''}${own || !rd ? '' : ' locked'}" data-wd="${i.id}" style="--rc:${RAR[i.r].color}">${on ? '<span class="g-fr-wear">Wearing</span>' : ''}${tags}<span class="g-fr-th k-${i.kind}">${thumb(i)}</span><b>${esc(i.name)}</b><small>${starsHtml(i.r)} ${st}</small></button></li>`;
  }
  function frDefault(who, kind) {
    const slot = kind === 'skin' || kind === 'weapon' ? `${kind}:${who}` : kind, worn = onIn(slot);
    const label = kind === 'skin' ? (who === 'solar' ? 'Her own look' : 'Their own look') : 'Default';
    const art = kind === 'skin' ? `<img src="${G.base}assets/femc/battle/art/poses/${who}-pose-0.webp" alt="" loading="lazy">` : '<span class="g-wd-ico">○</span>';
    return `<li class="g-fr-li"><button type="button" class="g-fr-card own${worn ? '' : ' on'}${!sel && frWho === who && frKind === kind ? ' sel' : ''}" data-wd-off="${slot}" style="--rc:#ff4f9e">${worn ? '' : '<span class="g-fr-wear">Wearing</span>'}<span class="g-fr-th k-${kind}">${art}</span><b>${label}</b><small>${worn ? 'Take it off' : 'Always yours'}</small></button></li>`;
  }
  function frPane(who, kind) {
    const all = frList(who, kind), live = all.filter(ready), soon = all.filter(i => !ready(i));
    const shown = live.filter(i => !frOwn || owns(i.id));
    const ul = xs => `<ul class="g-fr-cards g-wd-items">${xs}</ul>`;
    let h = '';
    if (frSort === 'group' && kind === 'skin' && who === 'solar') {
      const used = new Set();
      h = ul(frDefault(who, kind)) + FR_GROUPS.map(([g, test]) => {
        const xs = shown.filter(i => !used.has(i.id) && test(i)); xs.forEach(i => used.add(i.id));
        return xs.length ? `<section class="g-fr-group"><h3>${g}<small>${xs.length}</small></h3>${ul(xs.sort((a, b) => RANK_DESC[a.r] - RANK_DESC[b.r]).map(frCard).join(''))}</section>` : '';
      }).join('');
    } else {
      const xs = shown.slice().sort(frSort === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => RANK_DESC[a.r] - RANK_DESC[b.r] || a.name.localeCompare(b.name));
      h = ul(frDefault(who, kind) + xs.map(frCard).join(''));
    }
    if (!shown.length && frOwn && live.length) h += '<p class="g-fr-empty">Nothing owned here yet. The Boutique has them.</p>';
    if (soon.length) h += `<details class="g-fr-soon"${soon.some(i => i.id === sel) ? ' open' : ''}><summary>Coming soon (${soon.length})</summary>${ul(soon.map(frCard).join(''))}</details>`;
    return `<div class="g-fr-pane" data-fr-pane="${who}:${kind}"${who === frWho && kind === frKind ? '' : ' hidden'}>${h}</div>`;
  }
  // The booth's name tag and buttons for what's picked (or what's worn).
  function frBooth() {
    const x = byId(sel), who = frWho, slot = frKind === 'skin' || frKind === 'weapon' ? `${frKind}:${who}` : frKind;
    const shown = x || onIn(slot) || (frKind !== 'skin' ? null : onIn(`skin:${who}`));
    const name = shown ? shown.name : frKind === 'skin' ? (who === 'solar' ? 'Her own look' : 'Their own look') : `Default ${FR_TAB[frKind].toLowerCase()}`;
    const sub = shown ? `${starsHtml(shown.r)} ${esc(KINDS[shown.kind].name)}${shown.who ? ` · ${esc(whoName(shown.who))}` : ''}` : esc(whoName(who));
    const tag = `<b>${esc(name)}</b><small>${sub}</small>`;
    const can = x && owns(x.id) && ready(x), tryable = x && x.kind === 'skin' && ready(x) && window.FemcTryOn, wearing = x && onIn(slotOf(x))?.id === x.id;
    const pose = frKind === 'skin' ? '<button type="button" class="g-btn small g-fr-pose" data-fr-pose><span>Strike a pose</span></button>' : '';
    const acts = `${pose}${tryable ? `<button type="button" class="g-btn small g-wd-try" data-wd-try="${x.id}"><span>▶ Try it on</span></button>` : ''}${can ? `<button type="button" class="g-btn small" data-wd-zoom="${x.id}"><span>View</span></button><button type="button" class="g-btn pink small" data-wd-equip="${x.id}"${wearing ? ' disabled' : ''}><span>${wearing ? 'Wearing' : 'Equip'}</span></button>` : ''}`;
    return { who, kind: frKind, sel, tag, acts };
  }
  function wardrobeHtml() {
    const s = cs(), x = byId(sel);
    const whos = frWhos(); if (!whos.includes(frWho)) { frWho = 'solar'; frKind = 'skin'; }
    if (!frKinds(frWho).includes(frKind)) frKind = 'skin';
    const F = window.FemcFitting;
    const tabs = whos.map(w => { const n = frList(w, 'skin').filter(ready).length;
      return `<button type="button" role="tab" data-fr-who="${w}" class="${w === frWho ? 'on' : ''}${w === 'solar' ? ' main' : ''}" aria-selected="${w === frWho}"><span class="g-fr-face" style="${F ? F.faceIcon(w) : ''}"></span><b>${esc(whoName(w))}</b><small>${n} outfit${n === 1 ? '' : 's'}</small></button>`; }).join('');
    const ks = frKinds(frWho);
    const kinds = ks.length > 1 ? `<div class="g-fr-kinds" role="tablist">${ks.map(k => `<button type="button" role="tab" data-fr-kind="${k}" class="${k === frKind ? 'on' : ''}" aria-selected="${k === frKind}">${FR_TAB[k]}<small>${frList(frWho, k).filter(ready).length}</small></button>`).join('')}</div>` : '';
    const panes = whos.map(w => frKinds(w).map(k => frPane(w, k)).join('')).join('');
    const note = x ? (!ready(x) ? 'Art coming: it joins the Boutique once its pictures are in.' : !owns(x.id) ? (x.pool === false ? 'Complete its capsule series to get it.' : 'Pull for it in the Boutique.') : '') : '';
    const desc = x ? `${esc(x.desc)}${note ? ` <em class="g-note small">${note}</em>` : ''}` : frKind === 'skin' ? 'Pick an outfit to try it on. Looks only: nothing here changes a fight.' : 'Pick one to preview it.';
    return `<div class="g-fr"><div class="g-fr-left"><div data-fr-booth></div></div>
      <div class="g-fr-closet"><div class="g-fr-who" role="tablist" aria-label="Whose closet">${tabs}</div>
        <div class="g-fr-head"><h2>${esc(whoName(frWho))}${frWho === 'solar' ? '' : '’s closet'}</h2>${meters()}</div>
        ${kinds}
        <div class="g-fr-tools"><span class="g-fr-chips"><button type="button" data-fr-own="all" class="${frOwn ? '' : 'on'}">All</button><button type="button" data-fr-own="own" class="${frOwn ? 'on' : ''}">Owned</button></span>
          <select data-fr-sort aria-label="Sort"><option value="group"${frSort === 'group' ? ' selected' : ''}>Grouped</option><option value="rarity"${frSort === 'rarity' ? ' selected' : ''}>Rarity</option><option value="name"${frSort === 'name' ? ' selected' : ''}>Name</option></select>
          <label class="g-wd-toggle"><input type="checkbox" data-wd-portraits${s.portraits ? ' checked' : ''}> Outfits in scene portraits</label>
          <label class="g-wd-toggle g-wd-toggle-who${s.portraits ? '' : ' off'}"><input type="checkbox" data-wd-portraits-who="${frWho}"${portraitsOn(frWho) ? ' checked' : ''}${s.portraits ? '' : ' disabled'}> ${esc(whoName(frWho))}’s outfit in scenes</label></div>
        <p class="g-fr-desc">${desc}</p>
        ${panes}</div></div>`;
  }
  /* The viewer (gacha.js viewer): every owned, usable look in Wardrobe order. */
  const viewable = () => ITEMS.filter(x => owns(x.id) && ready(x)).sort((a, b) => KINDS[a.kind].order - KINDS[b.kind].order);
  function viewEntry(x) {
    const GA = window.FemcGacha, big = (src, style = '') => `<img class="g-view-img" src="${src}" alt="" style="${style}">`;
    let art;
    if (x.kind === 'skin') art = big(posePath(x.who, x));
    else if (x.kind === 'weapon') art = big(`${G.base}${skinDir(x.id)}weapon.webp`);
    else if (x.kind === 'evoker') art = big(`${G.base}${EVOKER}`, `filter:${x.filter}`);
    else if (x.kind === 'wallpaper') art = `<span class="g-view-sw" style="background:${esc(wallCss(x))}"></span>`;
    else if (x.kind === 'title') art = `<span class="g-view-sw g-wd-pv-title" style="--a:${x.title[0]};--b:${x.title[1]}"><img src="${G.base}assets/femc/title/keyart.webp" alt="" style="${x.titleFilter ? `filter:${x.titleFilter}` : ''}"><b>Solstice</b></span>`;
    else { const v = PAL[x.pal]; art = `<span class="g-view-sw" style="background:linear-gradient(135deg, ${v[3]} 0 30%, ${v[0]} 30% 60%, ${v[1]} 60% 80%, ${v[2]} 80%)"></span>`; }
    const d = cs().got[x.id], when = d != null && GA ? `, ${GA.fmtDay(d)}` : '', on = onIn(slotOf(x))?.id === x.id;
    return { name: x.name, r: { name: RAR[x.r].name, color: RAR[x.r].color, stars: { R: 2, SR: 3, UR: 4 }[x.r] }, series: `${KINDS[x.kind].name}${x.who ? ` · ${whoName(x.who)}` : ''}`,
      flavour: x.desc, art, got: `${x.pool === false ? 'A capsule series reward' : 'From the Boutique'}${when}${on ? ' · wearing it now' : ''}.` };
  }
  function openViewer(id) {
    const list = viewable(), at = list.findIndex(x => x.id === id);
    if (at < 0 || !window.FemcGacha) return null;
    return window.FemcGacha.viewer(list.map(viewEntry), at);
  }
  /* The Boutique page, P5X style (Nov 4 2026, Kat's approved mockup: mockups/boutique/). A banner list down the left
     (every running banner: its headline look's face, name, kind, end date, days left; [data-wd-ban] switches and the pick
     is saved as before) and the splash: the banner's name in big slanted letters, the headline look's art large on the
     right with two more featured looks dimmed behind it, a "Rate up" plate (▶ Try it on), the featured strip (a tile puts
     its look in the splash: `hero`, [data-wd-hero]), the pity panel (two meters + the shared-pity line), "Odds & rules"
     and the pull buttons. Pink and black only (Kat's palette rule): a banner's own colour is only its tab stripe.
     Art hooks: game/art/banners/<banner id>.webp (ready.js `banners`; FEMC-ART-TODO 28) becomes the splash's picture in
     place of the composed cast; game/art/cards/<name>.webp (ready.js `cards`: card-back, frame-R / -SR / -UR, art-<item id>;
     FEMC-ART-TODO 29) dress the pull cards and the cards of items with no picture (and their Wardrobe thumbs). All in since Nov 5 (batch 139).
     Switching banners plays a pink slash wipe and the title, plate and cast slam in; the cast drifts with the pointer.
     The inline result under the splash (.g-wd-reveal: the card and the ×10 grid) is what stays after a pull. */
  let hero = null, lastBan = null;
  const RANK = { R: 0, SR: 1, UR: 2 };
  const heroOf = f => f.find(x => x.id === hero) || f.find(x => x.kind === 'skin' && x.r === 'UR' && hdOf(x)) || f.find(x => x.kind === 'skin' && x.r === 'UR') || f.find(x => x.kind === 'skin') || f[0] || null;
  const artList = k => readyArt()[k] || [];
  const cardArt = name => (artList('cards').includes(name) ? `${G.base}assets/femc/game/art/cards/${name}.webp` : null);
  // An outfit's scene face (sharp, head and shoulders) for cards; else its battle frame.
  function faceSrc(x) {
    if (!x || x.kind !== 'skin' || !ready(x)) return null;
    const fs = (((readyArt().skins || {})[x.id] || {}).portraits || {})[x.who] || [];
    return fs.length ? `${G.base}${skinDir(x.id)}portraits/${x.who}/${fs.includes('happy') ? 'happy' : fs[0]}.webp?v=${SKIN_V}` : null;
  }
  function cardHtml(x) {
    const f = faceSrc(x); if (f) return `<img class="face" src="${f}" alt="">`;
    const a = cardArt(`art-${x.id}`); if (a) return `<img class="art" src="${a}" alt="">`;
    return thumb(x);
  }
  // A look's big picture: its HD pose (the first of `prefer` it has), else its victory frame / weapon / swatch.
  function figSrc(x, prefer) {
    if (x.kind !== 'skin' || !ready(x)) return null;
    const R = (readyArt().skins || {})[x.id] || {}, have = R.hd || [];
    const p = (prefer || ['peace', 'jump', 'tease', 'cheer', 'heart', 'wave', 'arms-crossed']).find(k => have.includes(k)) || have[0];
    return p ? { src: `${G.base}${skinDir(x.id)}hd/${p}.webp?v=${R.hdv || 1}`, hd: true } : { src: `${G.base}${skinDir(x.id)}${x.who}-pose-5.webp?v=${SKIN_V}`, hd: false };
  }
  function bigArt(x, cls = 'g-bq-img', prefer) {
    if (x.kind === 'skin') { const f = figSrc(x, prefer); return f ? `<img class="${cls}${f.hd ? ' hd' : ' frame'}" src="${f.src}" alt="">` : `<img class="${cls} frame" src="${posePath(x.who, x)}" alt="">`; }
    if (x.kind === 'weapon') return `<img class="${cls} wpn" src="${G.base}${skinDir(x.id)}weapon.webp" alt="">`;
    const a = cardArt(`art-${x.id}`);
    return a ? `<img class="${cls} sw" src="${a}" alt="">` : `<span class="${cls} sw">${viewEntry(x).art}</span>`;
  }
  const daysLeft = b => { try { return Math.max(0, Math.round((bannerEnd(b) - G.dateOf(S().day)) / 864e5)); } catch (e) { return null; } };
  function bannerHtml() {
    const s = cs(), all = banners(), b = banner(), f = featured(), p = s.pity, MON = m => new Date(2009, m - 1, 1).toLocaleString('en', { month: 'long' });
    const res = fresh || (s.last && byId(s.last.id) ? { item: byId(s.last.id), r: s.last.r, old: true } : null);
    const n = pool().length, ends = x => bannerEnd(x).toLocaleString('en', { month: 'long', day: 'numeric' });
    const h = heroOf(f), dl = daysLeft(b), srL = BAN.pitySR - p.sr, urL = BAN.pityUR - p.ur, hasArt = artList('banners').includes(b.id);
    const tabs = `<div class="g-wd-bans g-bq-tabs" role="tablist" aria-label="Banners">${all.map(x => {
      const hx = heroOf(featOf(x)), d = daysLeft(x), art = artList('banners').includes(x.id);
      const pic = art ? `<span class="g-bq-tth art" style="background-image:url('${G.base}assets/femc/game/art/banners/${x.id}.webp')"></span>` : `<span class="g-bq-tth">${hx ? cardHtml(hx) : ''}</span>`;
      return `<button type="button" role="tab" aria-selected="${x === b}" class="${x === b ? 'on' : ''}" style="--c:${x.color}" data-wd-ban="${x.id}">${pic}<span class="g-bq-tt"><b>${esc(x.name)}</b><small>${x.kind ? `${esc(x.kind)} · ` : ''}until ${esc(ends(x))}</small>${d == null ? '' : `<small class="g-bq-tleft">${d ? `${d} day${d === 1 ? '' : 's'} left` : 'Last day'}</small>`}</span></button>`; }).join('')}</div>`;
    const meter = (k, lbl, left, max) => `<span class="g-bq-meter" style="--rc:${RAR[k].color};--p:${((max - left) / max).toFixed(3)}"><b>${lbl}</b><i><s></s></i><em><b>${left}</b> pull${left === 1 ? '' : 's'} at most</em></span>`;
    // The cast: the headline look large on the right, two more featured outfits dimmed behind (others' looks first).
    const back = h && h.kind === 'skin' ? f.filter(x => x !== h && x.kind === 'skin').sort((a, c) => (c.who !== h.who) - (a.who !== h.who) || !!hdOf(c) - !!hdOf(a)).slice(0, 2) : [];
    const cast = h ? `${back.map((x, i) => bigArt(x, `g-bq-cast b${i}`, ['arms-crossed', 'hair', 'tease', 'thinking'])).join('')}${bigArt(h)}` : '';
    const words = b.name.split(' '), title = words.length > 1 ? `<span>${esc(words.slice(0, -1).join(' '))}</span><span>${esc(words[words.length - 1])}</span>` : `<span>${esc(b.name)}</span>`;
    const tryBtn = x => x && x.kind === 'skin' && ready(x) && window.FemcTryOn;
    const heroHtml = h ? `<div class="g-bq-hero-art r-${h.r}${hasArt ? ' has-art' : ''}" style="--rc:${RAR[h.r].color}" data-hero="${h.id}">${cast}</div>` : '<div class="g-bq-hero-art empty"><p class="g-note">Nothing featured is ready yet.</p></div>';
    return `<div class="g-wd-banner g-bq-ban" data-ban="${b.id}" style="--c:${b.color}">${tabs}
      <div class="g-bq-splash${hasArt ? ' has-art' : ''}"${hasArt ? ` style="--bq-art:url('${G.base}assets/femc/game/art/banners/${b.id}.webp')"` : ''}>
        <div class="g-bq-sbg" aria-hidden="true"><i class="g-bq-rays"></i><i class="g-bq-slash s1"></i><i class="g-bq-slash s2"></i><i class="g-bq-slash s3"></i><b class="g-bq-ghost">${esc(words[0])}</b></div>
        ${heroHtml}
        <div class="g-bq-title"><div class="g-wd-bhead"><span class="g-bq-kind">${esc(b.kind || 'Monthly')} banner</span><b>${title}</b><small>Featured ${esc(MON(b.months[0]))}${b.months.length > 1 ? `–${esc(MON(b.months[b.months.length - 1]))}` : ''} · ends ${esc(ends(b))}</small></div>
          ${dl == null ? '' : `<span class="g-bq-count"><small>Ends in</small><b>${dl || 'Last'}</b><small>${dl ? `day${dl === 1 ? '' : 's'}` : 'day today'}</small></span>`}</div>
        ${h ? `<div class="g-bq-hero-tag" style="--rc:${RAR[h.r].color}"><small>Rate up${h.who ? ` · ${esc(whoName(h.who))}` : ''}</small><b>${esc(h.name)}</b>${starsHtml(h.r)}<em>${esc(RAR[h.r].name)} · ${esc(KINDS[h.kind].name)}${owns(h.id) ? ' · owned' : ''}</em>
          ${tryBtn(h) ? `<button type="button" class="g-btn small g-bq-htry" data-wd-try="${h.id}"><span>▶ Try it on</span></button>` : ''}</div><p class="g-bq-desc">${esc(h.desc)}</p>` : ''}
        <ul class="g-wd-feat g-bq-strip" aria-label="Featured looks">${f.map(x => `<li style="--rc:${RAR[x.r].color}" class="r-${x.r}${h && h.id === x.id ? ' hero' : ''}${owns(x.id) ? ' own' : ''}"><button type="button" class="g-bq-ft" data-wd-hero="${x.id}" aria-pressed="${!!(h && h.id === x.id)}" title="${esc(x.name)}"><span class="g-bq-fth">${cardHtml(x)}</span><b class="g-bq-sr">${esc(x.name)}</b></button>${tryBtn(x) ? `<button type="button" class="g-wd-ftry" data-wd-try="${x.id}" aria-label="Try on ${esc(x.name)}" title="Try it on">▶</button>` : ''}</li>`).join('') || '<li class="g-note">Nothing featured is ready yet.</li>'}</ul>
        <div class="g-bq-side">
          <div class="g-bq-pity"><div class="g-bq-meters">${meter('SR', 'Super Rare+', srL, BAN.pitySR)}${meter('UR', 'Ultra', urL, BAN.pityUR)}</div>
            <p class="g-ga-pity">Super Rare or better within <b>${srL}</b> pull${srL === 1 ? '' : 's'} · an Ultra within <b>${urL}</b>${s.guar ? ' · <span class="g-bq-guar">the next Ultra is featured</span>' : ''}.${all.length > 1 ? ' Pity is shared: it carries over when you switch banners.' : ''}</p></div>
          <details class="g-bq-rules"><summary>Odds &amp; rules</summary><ul class="g-ga-odds">${Object.entries(BAN.odds).map(([k, v]) => `<li style="--rc:${RAR[k].color}">${starsHtml(k)} ${RAR[k].name} <b>${(v * 100).toFixed(0)}%</b></li>`).join('')}</ul>
            <p class="g-note small">Half of each rarity's pulls land on its featured item; an Ultra that isn't featured makes the next one featured. ${n} looks are in the pool (outfits still waiting on art aren't). Repeats give Velvet Plumes back (Rare and Super Rare 1, Ultra 2).</p></details>
          <div class="g-row g-ga-btns"><button type="button" class="g-btn g-bq-pull one" data-wd-pull${canPull() ? '' : ' disabled'}><span><b>Pull ×1</b><small>${BAN.cost} Velvet Plumes</small></span></button>
            <button type="button" class="g-btn pink g-ga-x10 g-bq-pull ten" data-wd-pull10${canPull(10) ? '' : ` disabled title="${esc(pullWhy(10))}"`}><span><b>Pull ×10</b><small>${canPull(10) ? `${BAN.cost * 10} Plumes · a Super Rare or better` : esc(pullWhy(10))}</small></span></button></div>
          <span class="g-ga-own"><span>Velvet Plumes <b>${plumes()}</b></span><span>Pulls <b>${s.pulls}</b></span></span></div>
        <i class="g-bq-wipe" aria-hidden="true"></i><i class="g-bq-wipe w2" aria-hidden="true"></i>
      </div>
      <div class="g-wd-reveal" aria-live="polite">${res ? (res.list ? tenHtml(res) : revealHtml(res)) : ''}</div></div>`;
  }
  // After a render: the slash wipe when the banner changed, the slam when the banner or the hero did, and the pointer drift.
  let lastHero = null;
  function bannerMotion(el) {
    const root = el.querySelector('.g-bq-ban'); if (!root) return;
    const sp = root.querySelector('.g-bq-splash'), still = reduced() || (G.settings && G.settings().perf);
    const b = root.dataset.ban, hid = root.querySelector('.g-bq-hero-art')?.dataset.hero || null;
    const newBan = b !== lastBan, newHero = hid !== lastHero;
    lastBan = b; lastHero = hid;
    if (still || !sp.animate) return;
    if (newBan) sp.querySelectorAll('.g-bq-wipe').forEach((w, k) => w.animate([{ transform: 'skewX(-20deg) translateX(-160%)', opacity: 1 }, { transform: 'skewX(-20deg) translateX(40%)', opacity: 1, offset: .5 }, { transform: 'skewX(-20deg) translateX(260%)', opacity: 1 }], { duration: 620, delay: k * 50, easing: 'cubic-bezier(.7, 0, .3, 1)' }));
    const d0 = newBan ? 260 : 0;
    if (newBan) {
      sp.querySelector('.g-bq-title')?.animate([{ transform: 'skewX(-9deg) translateX(-60px)', opacity: 0 }, { transform: 'skewX(-9deg)', opacity: 1 }], { duration: 420, delay: d0, easing: 'cubic-bezier(.2, 1.3, .4, 1)', fill: 'backwards' });
    }
    if (newBan || newHero) {
      sp.querySelector('.g-bq-hero-tag')?.animate([{ transform: 'skewX(-12deg) rotate(-2deg) translateY(20px)', opacity: 0 }, { transform: 'skewX(-12deg) rotate(-2deg)', opacity: 1 }], { duration: 400, delay: d0 + 120, easing: 'cubic-bezier(.2, 1.3, .4, 1)', fill: 'backwards' });
      const imgs = [...sp.querySelectorAll('.g-bq-hero-art img')];
      imgs.forEach((i, k) => i.animate([{ translate: '120px 0', opacity: 0 }, { translate: '0 0', opacity: 1 }], { duration: 520, delay: d0 + 60 + (imgs.length - 1 - k) * 90, easing: 'cubic-bezier(.2, 1, .3, 1)', fill: 'backwards' }));
    }
    sp.addEventListener('pointermove', e => {
      if (e.pointerType === 'touch') return;
      const r = sp.getBoundingClientRect(), dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
      sp.querySelectorAll('.g-bq-hero-art img').forEach(i => { const d = i.classList.contains('g-bq-cast') ? .4 : 1; i.style.transform = `translate(${(-dx * 18 * d).toFixed(1)}px, ${(-dy * 8 * d).toFixed(1)}px)`; });
    });
  }

  /* ── The pull sequence (seq), P5X style (Nov 4 2026, Kat's approved mockup): an overlay over the menu, pink and black.
     deal: the cards sit in one deck that lights in the best pull's colour (an Ultra flickers) → tell: they're dealt face down,
     each back in its own rarity's light → show: they turn over one by one; a Super Rare or Ultra shakes first and then gets
     its calling card: a black card flies in and bursts, the look slams in large (its HD pose, else its victory frame) over
     rays and slanted bands with its name, stars and NEW! (a ×1 always ends on it: stage end) → sum (×10): the ten tiles with
     NEW / +plumes tags, Pull ×10 again / Done. Click / tap / Enter / Space / → move on, Skip (S) jumps to the end, Esc skips
     then closes; pad buttons arrive as those keys (battle/pad.js). Settings: reduced motion = no flying, flipping or
     calling card (fades, shorter beats); Performance = fewer layers, still rays; Reduce flashes (calm) = no flash or flicker,
     steady glows. Sounds through G.sfx. Focus goes to the overlay's buttons and back to the pull button after. bq() is the
     state for tests. Kat's card-back.webp / frame-<r>.webp (FEMC-ART-TODO 29, ready.js `cards`) dress the cards when in. */
  let sq = null;
  function seq(list, from, rerender) {
    seqClose(true);
    const st = G.settings ? G.settings() : {}, o = { reduced: reduced(), perf: !!st.perf, calm: !!st.calm };
    const n = list.length, best = list.reduce((b, x) => (RANK[x.r] > RANK[b.r] ? x : b), list[0]);
    const T = o.reduced ? { deal: 200, tell: 250, shake: { R: 0, SR: 0, UR: 0 }, flip: 120, auto: { R: 1000, SR: 1800, UR: 2200 }, step: 350 }
      : { deal: best.r === 'UR' ? 1150 : 750, tell: 650 + (n - 1) * 60, shake: { R: 0, SR: 420, UR: 700 }, flip: 420, auto: { R: 1500, SR: 3200, UR: 4200 }, step: 650 };
    const cols = n > 1 ? 5 : 1, back = cardArt('card-back'), frame = r => cardArt(`frame-${r}`);
    const el = document.createElement('div');
    el.className = 'g-overlay g-bq-ov';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', n > 1 ? 'Boutique: ten pulls' : 'Boutique: a pull');
    el.innerHTML = `<div class="g-bq n${n > 1 ? 10 : 1} best-${best.r}${o.reduced ? ' reduced' : ''}${o.perf ? ' perf' : ''}${o.calm ? ' calm' : ''}" data-stage="deal" style="--top:${RAR[best.r].color}">
      <div class="g-bq-bg" aria-hidden="true"><i class="g-bq-rays"></i><b class="g-bq-ghost">${esc(banner().name)}</b><i class="g-bq-bolt"></i></div>
      <div class="g-bq-spread" aria-hidden="true">${list.map((x, i) => `<span class="g-bq-card r-${x.r}" style="--rc:${RAR[x.r].color};--i:${i};--col:${(i % cols) - (Math.min(cols, n) - 1) / 2};--row:${Math.floor(i / cols) - (Math.ceil(n / cols) - 1) / 2};--tilt:${((i * 7) % 11) - 5}deg" data-card="${i}">
        <span class="g-bq-back"${back ? ` style="background-image:url('${back}')"` : ''}><i></i></span><span class="g-bq-front"><span class="g-bq-cth">${cardHtml(x.item)}</span><b>${esc(x.item.name)}</b>${starsHtml(x.r)}${frame(x.r) ? `<img class="g-bq-frame" src="${frame(x.r)}" alt="">` : ''}</span>
        ${x.dup ? `<em class="g-bq-ctag dup">+${x.refund}</em>` : '<em class="g-bq-ctag new">NEW!</em>'}</span>`).join('')}</div>
      <div class="g-bq-show" aria-live="polite"></div><div class="g-bq-sum"></div><i class="g-bq-flash" aria-hidden="true"></i>
      <div class="g-bq-bar"><span class="g-bq-hint">${n > 1 ? 'Tap or Enter: next · S: skip to all ten' : 'Tap or Enter: reveal'}</span><span class="g-bq-acts">
        <button type="button" class="g-btn small" data-bq="skip"><span>Skip</span></button></span></div></div>`;
    document.body.appendChild(el);
    const root = el.querySelector('.g-bq'), acts = el.querySelector('.g-bq-acts'), cards = [...el.querySelectorAll('.g-bq-card')];
    const me = sq = { el, root, list, from, rerender, stage: 'deal', i: -1, timers: [], o, seen: [] };
    const later = (ms, fn) => me.timers.push(setTimeout(() => { if (sq === me && el.isConnected) fn(); }, ms));
    const clear = () => { me.timers.forEach(clearTimeout); me.timers = []; };
    const stage = k => { me.stage = k; root.dataset.stage = k; me.seen.push(k); };
    const buttons = html => { acts.innerHTML = html; const b = acts.querySelector('[data-bq]:not([data-bq="skip"])') || acts.querySelector('[data-bq]'); if (b) b.focus({ preventScroll: true }); };
    const flash = r => { if (o.calm || o.reduced || r === 'R') return; const f = el.querySelector('.g-bq-flash'); f.style.setProperty('--fc', RAR[r].color); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); };
    function tell() {
      if (me.stage !== 'deal') return; stage('tell');
      G.sfx(best.r === 'R' ? 'femc-text' : 'femc-rez');
      later(T.tell, () => show(0));
    }
    // The calling card: the look large over rays and bands, its plate (stars, rarity, name, who, NEW! / plumes back).
    function itemHtml(x, i) {
      const it = x.item, ur = x.r === 'UR', tag = x.dup ? `<span class="g-bq-tag dup">Already had it · +${x.refund} Velvet Plume${x.refund === 1 ? '' : 's'}</span>` : '<span class="g-bq-tag new">New!</span>';
      return `<div class="g-bq-item r-${x.r}${x.feat ? ' feat' : ''}" style="--rc:${RAR[x.r].color}" data-i="${i}">
        <i class="g-bq-irays" aria-hidden="true"></i><i class="g-bq-ihalf" aria-hidden="true"></i><i class="g-bq-band" aria-hidden="true"></i><i class="g-bq-band w" aria-hidden="true"></i>
        <div class="g-bq-art">${bigArt(it, 'g-bq-img', ['jump', 'peace', 'cheer', 'tease', 'heart', 'wave', 'arms-crossed'])}</div>
        <div class="g-bq-plate">${n > 1 ? `<span class="g-bq-num">${i + 1} / ${n}</span>` : ''}<small>${esc(RAR[x.r].name)}${x.feat ? ' · Featured' : ''}${it.who ? ` · ${esc(whoName(it.who))}` : ''}</small><b>${esc(it.name)}</b>
          <span class="g-bq-stars">${[...'★'.repeat({ R: 2, SR: 3, UR: 4 }[x.r])].map((c, k) => `<i style="--k:${k}">${c}</i>`).join('')}</span><em>${esc(KINDS[it.kind].name)}</em>${tag}</div>
        ${x.r !== 'R' && !o.reduced ? `<div class="g-bq-cc" aria-hidden="true"><span>Take your<br>look<small>Velvet Boutique</small></span></div>` : ''}</div>`;
    }
    function turn(i) { const c = cards[i]; if (!c) return; c.classList.remove('shake'); c.classList.add('up'); cards.forEach((k, j) => k.classList.toggle('cur', j === i)); }
    function show(i) {
      clear(); if (i >= n) return sum();
      if (me.stage !== 'show') stage('show');
      me.i = i; const x = list[i], c = cards[i], big = n === 1 || x.r !== 'R';
      el.querySelector('.g-bq-show').innerHTML = '';
      root.classList.remove('splash');
      const reveal = () => {
        turn(i);
        G.sfx(n > 1 && x.r === 'R' ? 'femc-hover' : RAR[x.r].sfx);
        if (!big) { buttons(`<button type="button" class="g-btn small" data-bq="skip"><span>Skip</span></button><button type="button" class="g-btn pink small" data-bq="next"><span>${i === n - 1 ? 'See all ten' : 'Next'}</span></button>`); later(T.step, () => show(i + 1)); return; }
        later(o.reduced ? 0 : T.flip, () => {
          el.querySelector('.g-bq-show').innerHTML = itemHtml(x, i); root.classList.add('splash'); flash(x.r);
          if (n === 1) { done1(x.item.kind === 'skin' && ready(x.item) && window.FemcTryOn); return; }
          buttons(`<button type="button" class="g-btn small" data-bq="skip"><span>Skip</span></button><button type="button" class="g-btn pink small" data-bq="next"><span>${i === n - 1 ? 'See all ten' : 'Next'}</span></button>`);
          later(T.auto[x.r], () => show(i + 1));
        });
      };
      if (T.shake[x.r] && c) { c.classList.add('shake'); later(T.shake[x.r], reveal); } else reveal();
    }
    function done1(tryable) {
      stage('end'); el.querySelector('.g-bq-hint').textContent = 'Enter: done · Esc: close';
      buttons(`${tryable ? `<button type="button" class="g-btn small" data-bq="try"><span>▶ Try it on</span></button>` : ''}${canPull() ? '<button type="button" class="g-btn small" data-bq="again"><span>Pull again</span></button>' : ''}<button type="button" class="g-btn pink small" data-bq="done"><span>Done</span></button>`);
    }
    function sum() {
      clear(); stage('sum'); me.i = n; root.classList.remove('splash');
      cards.forEach(c => c.classList.add('up'));
      el.querySelector('.g-bq-show').innerHTML = '';
      const refund = list.reduce((a, x) => a + x.refund, 0), nw = list.filter(x => !x.dup).length;
      el.querySelector('.g-bq-sum').innerHTML = `<h3 class="g-bq-sumh">Your ten <small>${nw} new look${nw === 1 ? '' : 's'}${refund ? ` · +${refund} Velvet Plumes back` : ''}</small></h3>
        <div class="g-bq-grid">${list.map((x, i) => `<div class="g-bq-tile r-${x.r}${x === best ? ' best' : ''}" style="--rc:${RAR[x.r].color};--i:${i}"><span class="g-bq-cth">${cardHtml(x.item)}</span>${starsHtml(x.r)}<b>${esc(x.item.name)}</b>${x.dup ? `<small class="dup">+${x.refund}</small>` : '<small class="new">NEW</small>'}</div>`).join('')}</div>`;
      el.querySelector('.g-bq-hint').textContent = 'Enter: done · Esc: close';
      G.sfx('femc-on');
      buttons(`${canPull(10) ? '<button type="button" class="g-btn small" data-bq="again"><span>Pull ×10 again</span></button>' : ''}<button type="button" class="g-btn pink small" data-bq="done"><span>Done</span></button>`);
    }
    function skip() {
      if (me.stage === 'sum' || me.stage === 'end') return; clear(); root.classList.add('skipped');
      if (n > 1) sum(); else { stage('show'); me.i = 0; turn(0); el.querySelector('.g-bq-show').innerHTML = itemHtml(list[0], 0); root.classList.add('splash'); done1(list[0].item.kind === 'skin' && ready(list[0].item) && window.FemcTryOn); }
    }
    function next() {
      if (me.stage === 'deal' || me.stage === 'tell') { clear(); if (me.stage === 'deal') stage('tell'); show(0); }
      else if (me.stage === 'show') { if (me.i >= 0 && !cards[me.i]?.classList.contains('up')) { clear(); cards[me.i].classList.remove('shake'); show(me.i); return; } show(me.i + 1); }
    }
    function act(a) {
      if (a === 'skip') skip(); else if (a === 'next') next(); else if (a === 'done') seqClose();
      else if (a === 'try') window.FemcTryOn && window.FemcTryOn.play(list[0].item.id, acts.querySelector('[data-bq="try"]'));
      else if (a === 'again') { const sel = n > 1 ? '[data-wd-pull10]' : '[data-wd-pull]'; seqClose(true); document.querySelector(sel)?.click(); }
    }
    me.skip = skip; me.next = next; me.act = act;
    me.key = e => {
      if (sq !== me || el !== [...document.querySelectorAll('.g-overlay')].pop()) return;
      const k = e.key, fin = me.stage === 'sum' || me.stage === 'end', foc = document.activeElement && el.contains(document.activeElement) && document.activeElement.closest('[data-bq]');
      if (k === 'Escape') { e.preventDefault(); e.stopPropagation(); fin ? seqClose() : skip(); return; }
      if (k === 's' || k === 'S') { e.preventDefault(); e.stopPropagation(); skip(); return; }
      if (k === 'Enter' || k === ' ') { e.preventDefault(); e.stopPropagation(); if (fin) act(foc ? foc.dataset.bq : 'done'); else if (foc && foc.dataset.bq === 'skip') skip(); else next(); return; }
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'].includes(k)) {
        e.preventDefault(); e.stopPropagation();
        if (!fin && k === 'ArrowRight') { next(); return; }
        const bs = [...el.querySelectorAll('[data-bq]')]; if (!bs.length) return;
        const at = bs.indexOf(document.activeElement), d = k === 'ArrowLeft' || k === 'ArrowUp' || (k === 'Tab' && e.shiftKey) ? -1 : 1;
        bs[((at < 0 ? 0 : at + d) + bs.length) % bs.length].focus({ preventScroll: true });
      }
    };
    window.addEventListener('keydown', me.key, true);
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-bq]');
      if (b) { act(b.dataset.bq); return; }
      if (me.stage !== 'sum' && me.stage !== 'end') next();
    });
    G.sfx('femc-hover');
    setTimeout(() => { if (sq === me) acts.querySelector('[data-bq]')?.focus({ preventScroll: true }); }, 30);
    later(T.deal, tell);
    return me;
  }
  function seqClose(quick) {
    const me = sq; if (!me) return false;
    sq = null; me.timers.forEach(clearTimeout); window.removeEventListener('keydown', me.key, true);
    const el = me.el;
    if (quick || !el.isConnected) el.remove(); else { el.classList.add('out'); setTimeout(() => el.remove(), 240); G.sfx('femc-back'); }
    if (!quick && me.rerender && document.querySelector('.g-wd-banner')) me.rerender(me.list.length > 1 ? '[data-wd-pull10]' : '[data-wd-pull]');
    else { const back = me.from && me.from.isConnected ? me.from : null; if (back) back.focus({ preventScroll: true }); }
    return true;
  }
  const bq = () => (sq ? { stage: sq.stage, i: sq.i, n: sq.list.length, seen: sq.seen.slice(), o: sq.o } : null);
  function revealHtml(res) {
    const x = res.item, anim = !res.old && !reduced();
    return `<div class="g-wd-card r-${res.r}${anim ? ' anim' : ''}" style="--rc:${RAR[res.r].color}"><div class="g-wd-card-in"><span class="g-wd-card-back"><i></i></span>
      <span class="g-wd-card-face"><span class="g-wd-th">${thumb(x)}</span><span>${starsHtml(res.r)}<small>${RAR[res.r].name}${res.feat ? ' · Featured' : ''}</small><b>${esc(x.name)}</b><em>${esc(KINDS[x.kind].name)}</em>
      ${res.dup ? `<em class="g-ga-dup">Already had it: +${res.refund} Velvet Plume${res.refund === 1 ? '' : 's'}.</em>` : res.old ? '' : '<em class="g-ga-done">New! Equip it in the Wardrobe.</em>'}</span></span></div></div>`;
  }
  // A ×10: the best pull gets the reveal card (its rarity's animation, once), the ten sit in a grid under it; Skip shows all.
  function tenHtml(res) {
    const order = ['R', 'SR', 'UR'], top = res.list.reduce((b, x) => (order.indexOf(x.r) > order.indexOf(b.r) ? x : b), res.list[0]);
    const anim = !res.old && !reduced(), refund = res.list.reduce((n, x) => n + x.refund, 0), fresh = res.list.filter(x => !x.dup).length;
    return `${anim ? '<button type="button" class="g-btn small g-ga-skip" data-wd-skip><span>Skip</span></button>' : ''}${revealHtml(Object.assign({}, top, { old: !anim, dup: false }))}
      <div class="g-ga-grid${anim ? ' late' : ' fast'}">${res.list.map((x, i) => `<div class="g-ga-cell r-${x.r}${x === top ? ' best' : ''}" style="--rc:${RAR[x.r].color};--i:${i}"><div class="g-ga-cell-art"><span class="g-wd-th">${thumb(x.item)}</span></div>${starsHtml(x.r)}<b>${esc(x.item.name)}</b>${x.dup ? `<small class="g-ga-dup">+${x.refund} plume${x.refund === 1 ? '' : 's'}</small>` : '<small class="g-ga-done">New</small>'}</div>`).join('')}</div>
      <p class="g-ga-sum">${fresh} new look${fresh === 1 ? '' : 's'}${refund ? ` · +${refund} Velvet Plumes back` : ''}.</p>`;
  }
  function html() {
    gsafe();
    return `<div class="g-wd"><div class="g-tabs g-wd-sub" role="tablist"><button type="button" role="tab" data-wd-view="wardrobe" class="${view === 'wardrobe' ? 'on' : ''}">Wardrobe</button><button type="button" role="tab" data-wd-view="banner" class="${view === 'banner' ? 'on' : ''}">Boutique · ${banners().length > 1 ? `${banners().length} banners` : esc(banner().name)}</button></div>
      ${view === 'banner' ? bannerHtml() : wardrobeHtml()}</div>`;
  }
  const gsafe = () => cs();
  function wire(el, rerender) {
    el.querySelectorAll('[data-wd-view]').forEach(b => b.addEventListener('click', () => { view = b.dataset.wdView; fresh = null; G.sfx('femc-click'); rerender(`[data-wd-view="${view}"]`); }));
    el.querySelectorAll('[data-wd-ban]').forEach(b => b.addEventListener('click', () => { if (pickBanner(b.dataset.wdBan)) { fresh = null; G.sfx('femc-click'); rerender(`[data-wd-ban="${b.dataset.wdBan}"]`); } }));
    // The fitting room's booth first (its buttons are wired below with the rest).
    const slot = el.querySelector('[data-fr-booth]');
    if (slot && window.FemcFitting) window.FemcFitting.mount(slot, frBooth());
    el.querySelectorAll('[data-fr-who]').forEach(b => b.addEventListener('click', () => { if (b.dataset.frWho === frWho) return; frWho = b.dataset.frWho; frKind = 'skin'; sel = null; G.sfx('femc-click'); rerender(`[data-fr-who="${frWho}"]`); }));
    el.querySelectorAll('[data-fr-kind]').forEach(b => b.addEventListener('click', () => { if (b.dataset.frKind === frKind) return; frKind = b.dataset.frKind; sel = null; G.sfx('femc-click'); rerender(`[data-fr-kind="${frKind}"]`); }));
    el.querySelectorAll('[data-fr-own]').forEach(b => b.addEventListener('click', () => { frOwn = b.dataset.frOwn === 'own'; G.sfx('femc-click'); rerender(`[data-fr-own="${b.dataset.frOwn}"]`); }));
    el.querySelector('[data-fr-sort]')?.addEventListener('change', e => { frSort = e.target.value; rerender('[data-fr-sort]'); });
    el.querySelectorAll('[data-wd]').forEach(b => b.addEventListener('click', () => { const x = byId(b.dataset.wd); if (!x) return; sel = x.id; frWho = tabOf(x); frKind = x.kind; G.sfx('femc-hover'); rerender(`[data-wd="${sel}"]`); }));
    el.querySelectorAll('[data-wd-off]').forEach(b => b.addEventListener('click', () => { const sl = b.dataset.wdOff, had = !!onIn(sl); if (had) unequip(sl); sel = null; if (had && window.FemcFitting) window.FemcFitting.cue('equip'); G.sfx(had ? 'femc-back' : 'femc-hover'); rerender(`[data-wd-off="${sl}"]`); }));
    el.querySelectorAll('[data-wd-zoom]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openViewer(b.dataset.wdZoom); }));
    el.querySelectorAll('[data-wd-try]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); if (window.FemcTryOn) window.FemcTryOn.play(b.dataset.wdTry, b); }));
    el.querySelector('[data-wd-equip]')?.addEventListener('click', e => { if (equip(e.currentTarget.dataset.wdEquip)) { G.sfx('femc-on'); if (window.FemcFitting) window.FemcFitting.cue('equip'); rerender('[data-wd-equip]'); } });
    el.querySelector('[data-wd-portraits]')?.addEventListener('change', e => {
      setPortraits(e.target.checked); G.sfx('femc-click');
      const one = el.querySelector('[data-wd-portraits-who]'); if (one) { one.disabled = !e.target.checked; one.checked = portraitsOn(one.dataset.wdPortraitsWho); one.parentElement.classList.toggle('off', !e.target.checked); }
    });
    el.querySelector('[data-wd-portraits-who]')?.addEventListener('change', e => { setPortraits(e.target.checked, e.target.dataset.wdPortraitsWho); G.sfx('femc-click'); });
    el.querySelectorAll('[data-wd-hero]').forEach(b => b.addEventListener('click', () => { hero = b.dataset.wdHero; G.sfx('femc-hover'); rerender(`[data-wd-hero="${hero}"]`); }));
    if (el.querySelector('.g-bq-ban')) bannerMotion(el); else lastBan = lastHero = null;
    el.querySelector('[data-wd-pull10]')?.addEventListener('click', () => {
      const list = pull10(); if (!list) return;
      fresh = { list }; G.sfx('femc-click');
      rerender('[data-wd-pull10]');
      fresh = { list, old: true };
      seq(list, document.querySelector('[data-wd-pull10]'), rerender);
    });
    el.querySelector('[data-wd-skip]')?.addEventListener('click', e => {
      const box = el.querySelector('.g-wd-reveal'); box.classList.add('skip'); e.currentTarget.remove();
    });
    el.querySelector('[data-wd-pull]')?.addEventListener('click', () => {
      const res = pull(); if (!res) return;
      fresh = res; G.sfx('femc-click');
      rerender('[data-wd-pull]');
      fresh = Object.assign({}, res, { old: true }); // later re-renders show it still, without replaying
      seq([res], document.querySelector('[data-wd-pull]'), rerender);
    });
  }

  G.onChange(kind => { if (kind !== 'toast') apply(); });
  applyTitleEarly();
  setTimeout(apply, 0);
  return Object.assign(api, { CLEAN, KINDS, ITEMS, BANNERS, BAN, PAL, THEMES, byId, ready, cs, owns, slotOf, onIn, grantItem, equip, unequip, setPortraits, portraitsOn, banner, banners, pickBanner, bannerEnd, pool, featured, canPull, pullWhy, pull, pullN, pull10, apply, battle, tryOnSpec, portrait, weaponArt, html, wire, metOk, viewable, viewEntry, openViewer, seq, seqClose, bq, hdOf, meters, skipSeq: () => sq && sq.skip(), nextSeq: () => sq && sq.next() });
})();
