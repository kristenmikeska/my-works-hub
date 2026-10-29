/* Persona 3: Solstice · cosmetics: the Wardrobe (Menu → Wardrobe) and the Boutique banner (2026-10-25, Kat's skins batch).
   Looks only, never stats. No real money: the banner takes Velvet Plumes (gacha.js), earned by playing.

   ── Kinds (KINDS; one equipped per slot, `slotOf`) ──
     skin      an outfit for a fighter (`who`): replaces their battle pose sheet (battle.js asks battle() for a pose folder)
               and, with "Outfits in scene portraits" on, their scene portraits (core.js portrait asks portrait()).
               Art: game/art/skins/<id>/<who>-pose-0..5.webp (the pose-sheet format: idle, Evoker, attack, spell, hurt,
               victory) and optional game/art/skins/<id>/portraits/<who>/<face>.webp.
     weapon    a weapon look for a fighter: game/art/skins/<id>/weapon.webp (the Equipment tab shows it for her weapon slot).
     evoker    a tint on the Evoker prop in summons (CSS filter; code only).
     battleui  battle colours (CSS variables injected into the battle frame; code only).
     title     the title screen's colours (also kept in localStorage, since the title shows before a save loads; code only).
     wallpaper the menu's backdrop: a place background, the key art or a CSS pattern (code only).
     uitheme   the field UI's colours (CSS variables on :root; code only).
   ── Art-pending items ──
     An item with `art: true` exists in the Wardrobe as "Art coming" and is never in the banner pool until its files are
     listed in game/art/ready.js (FEMC_ART_READY; tools/femc-wardrobe.py cuts sheets and rewrites it). The moment they're
     listed it's a normal item: it joins the pool, can be equipped, and shows up in battle and scenes. Nothing else changes.
   ── The Boutique banner (Menu → Wardrobe → Boutique) ──
     2 Velvet Plumes a pull (BAN.cost). Odds BAN.odds (Rare / Super Rare / Ultra), Super Rare or better within BAN.pitySR,
     an Ultra within BAN.pityUR. Featured items rotate by month (BANNERS; P5X-style rate-up: half of each rarity's pulls
     land on that rarity's featured item, and an Ultra that wasn't featured makes the next Ultra featured).
     Several banners at once (2026-10-27): November–March run 2–3 side by side (the month's main banner, listed first, plus
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
    c('sk-kiriko', 'skin', 'Kiriko Cosplay', 'UR', 'Fox-ear band, red and white shrine robes, kunai at her belt. Her main, down to the last ofuda.', { who: 'solar', art: true }),
    // More looks for Solar (2026-10-27 list, FEMC-ART-WIRING section 7): wired as each one's art arrives (art batch 86).
    c('sk-alphaphi', 'skin', 'Alpha Phi Formal', 'SR', 'A long dusty-rose satin gown, a silver Alpha Phi pin and silver heels. Formal night.', { who: 'solar', art: true }), // series: Runners
    c('sk-harbourcoat', 'skin', 'Harbour Night Coat', 'SR', 'A long black coat buttoned to the throat, leather gloves, a red thread tied at her wrist. The port at night.', { who: 'solar', art: true }), // series: strangers
    c('sk-idol', 'skin', 'Stage Idol', 'UR', 'A white-and-gold stage set, sequins, a headset mic and boots made for choreography. Fearless.', { who: 'solar', art: true }), // series: Solstice
    c('sk-haechan-sweater', 'skin', 'Sweater Date', 'SR', 'A cream cable-knit sweater, a check scarf and a coffee he will absolutely make you hold.', { who: 'haechan', art: true }), // series: Solstice
    // Weapon skins (art pending: 8C).
    c('wpn-sakura', 'weapon', 'Sakura Naginata', 'SR', 'A pale wood haft wrapped in pink silk, blossoms etched on the blade.', { who: 'solar', art: true }),
    c('wpn-phantom', 'weapon', 'Phantom Naginata', 'UR', 'Black lacquer and a red tassel, to go with the coat.', { who: 'solar', art: true }),
    // More for Solar (2026-10-27): her two outfits' matches and one from each of Kat's universes (art pending: section 7).
    c('wpn-kiriko', 'weapon', 'Kitsune Naginata', 'UR', 'Red lacquer and a fox-mask charm, kunai strapped along the haft, ofuda streaming from the collar. Goes with the Kiriko Cosplay.', { who: 'solar', art: true }),
    c('wpn-emo', 'weapon', 'Emo Night Naginata', 'SR', 'Matte black, a chain wrap, safety pins and a little broken-heart charm. Goes with Emo Night.', { who: 'solar', art: true }),
    c('wpn-runners', 'weapon', 'Runners Naginata', 'SR', 'Orange and navy grip tape, a tiny gaming-headset charm, a rooftop at golden hour etched on the blade. From Runners.', { who: 'solar', art: true }),
    c('wpn-strangers', 'weapon', 'Harbour Night Naginata', 'SR', 'Gunmetal and wet black, a harbour-light amber edge and a red thread knotted under the blade. From strangers.', { who: 'solar', art: true }),
    c('wpn-hoax', 'weapon', 'Council Naginata', 'SR', 'Navy and white, a student-council armband tied at the collar and a laminated hall pass. From HOAX.', { who: 'solar', art: true }),
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
  // Featured rotation by the game's month (P5X-style banners).
  const BANNERS = [
    // Art-pending items wait in their banner and join its featured list by themselves once their art is in (featured()).
    { id: 'bloom', name: 'Spring Bloom', months: [4, 5], color: '#ff8cc0', featured: ['sk-date', 'tt-sakura', 'ui-sakura', 'sk-jihoon-pilates', 'sk-junpei-baseball', 'sk-yukari-kyudo', 'sk-aigis-uniform', 'wpn-hoax', 'sk-minji-su'] },
    { id: 'summer', name: 'Summer Nights', months: [6, 7, 8], color: '#4fd8ff', featured: ['sk-yukata', 'wp-fireworks', 'ui-mint', 'sk-haechan-runners', 'sk-minji-crew', 'sk-akihiko-hoodie', 'wpn-runners'] },
    { id: 'masquerade', name: 'Masquerade', months: [9, 10], color: '#c58bff', featured: ['sk-phantom', 'wpn-phantom', 'sk-halloween', 'bui-velvet', 'evk-jade', 'wpn-kiriko', 'wpn-emo', 'sk-yukari-pink', 'sk-jihoon-emo'] },
    { id: 'lights', name: 'Winter Lights', months: [11, 12, 1], color: '#bfe3ff', featured: ['sk-wintercoat', 'wp-xmas', 'tt-snow', 'evk-rose', 'sk-shinjiro-apron', 'sk-mitsuru-rider', 'wpn-strangers', 'sk-harbourcoat'] },
    { id: 'sunrise', name: 'Golden Sunrise', months: [2, 3], color: '#ffd36b', featured: ['ui-sunrise', 'bui-gold', 'evk-gold', 'wp-keyart', 'sk-akihiko-champ', 'wpn-akihiko-champ', 'sk-jungwon-council', 'wpn-jungwon-council'] },
    // Side banners, November–March (2026-10-27): they run beside the month's main banner above (always first, the default).
    { id: 'runners', name: 'Runners World', kind: 'World', months: [11], color: '#ff9a5c', featured: ['sk-haechan-runners', 'wpn-runners', 'sk-minji-su', 'wp-rooftop', 'sk-alphaphi'] },
    { id: 'sees', name: 'S.E.E.S. Spotlight', kind: 'Spotlight', months: [11, 12], color: '#6ab0ff', featured: ['sk-yukari-kyudo', 'sk-yukari-pink', 'sk-junpei-baseball', 'sk-mitsuru-rider', 'sk-shinjiro-apron', 'sk-aigis-uniform', 'sk-akihiko-hoodie', 'tt-darkhour', 'wp-dorm'] },
    { id: 'haechan', name: 'Haechan Spotlight', kind: 'Spotlight', months: [12, 1], color: '#ff6f7d', featured: ['sk-haechan-runners', 'wpn-runners', 'wpn-strangers', 'evk-midnight', 'wp-rooftop', 'sk-haechan-sweater'] },
    { id: 'hoax', name: 'HOAX World', kind: 'World', months: [1, 2], color: '#9fe06a', featured: ['sk-jungwon-council', 'wpn-jungwon-council', 'wpn-hoax', 'sk-jihoon-pilates', 'sk-jihoon-emo', 'ui-velvet'] },
    { id: 'valentine', name: "Valentine's", kind: 'Seasonal', months: [2], color: '#ff7fb0', featured: ['sk-date', 'evk-rose', 'wpn-sakura', 'ui-sakura', 'wp-mall', 'sk-haechan-sweater'] },
    { id: 'akihiko', name: 'Akihiko Spotlight', kind: 'Spotlight', months: [3], color: '#c9d3e6', featured: ['sk-akihiko-champ', 'wpn-akihiko-champ', 'sk-akihiko-hoodie', 'bui-moonlight'] },
    { id: 'searchers', name: 'The Searchers', kind: 'Spotlight', months: [3], color: '#8fd0ff', featured: ['sk-minji-crew', 'sk-minji-su'] }
  ];

  /* ── Art ── */
  const readyArt = () => window.FEMC_ART_READY || {};
  // Is an item usable: code-only always; an art item once ready.js lists its files.
  function ready(x) {
    if (!x) return false;
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
  const posePath = (who, skin) => (skin && ready(skin) ? `${G.base}${skinDir(skin.id)}${who}-pose-0.webp` : `${G.base}assets/femc/battle/art/poses/${who}-pose-0.webp`);

  /* ── State ── */
  function cs() {
    const g = window.FemcGacha ? window.FemcGacha.gs() : (S().gacha = S().gacha || {});
    const f = { own: [], on: {}, portraits: true, pulls: 0, pity: { sr: 0, ur: 0 }, guar: false, last: null, got: {}, bsel: '' };
    if (!g.cos || typeof g.cos !== 'object') g.cos = f;
    const s = g.cos;
    Object.keys(f).forEach(k => { if (s[k] === undefined || (f[k] !== null && typeof s[k] !== typeof f[k])) s[k] = f[k]; });
    if (!Array.isArray(s.own)) s.own = []; if (!s.got || Array.isArray(s.got)) s.got = {}; s.pity = Object.assign({ sr: 0, ur: 0 }, s.pity || {});
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
  function setPortraits(v) { cs().portraits = !!v; G.save(); return cs().portraits; }

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
  /* For the battle frame (battle.js reads parent.FemcCosmetics.battle() once at load): pose folders for skins, and CSS. */
  function battle() {
    if (!S()) return null;
    const pose = {}, out = { pose, css: '' };
    ITEMS.filter(x => x.kind === 'skin').forEach(x => { const o = onIn(slotOf(x)); if (o && !pose[o.who]) pose[o.who] = G.base + skinDir(o.id); });
    const bui = onIn('battleui'), evk = onIn('evoker');
    if (bui) out.css += `:root{${varsCss(bui.pal)}}`;
    if (evk) out.css += `.bt-evk-band .gun{filter:${evk.filter}}`;
    return out;
  }
  /* For scenes (core.js portrait): an outfit's portrait, when it has one and the toggle is on. */
  function portrait(id, face) {
    const s = S() && S().gacha && S().gacha.cos;
    if (!s || !s.portraits) return null;
    const x = onIn(`skin:${id}`); if (!x) return null;
    const have = ((readyArt().skins || {})[x.id]?.portraits || {})[id] || [];
    const f = [face, face && face.replace(/-\d+$/, ''), 'neutral', have[0]].find(k => k && have.includes(k));
    return f ? `${G.base}${skinDir(x.id)}portraits/${id}/${f}.webp` : null;
  }
  // The Equipment tab's picture for a fighter's weapon slot (a path from the site root, like a gear's `art`).
  function weaponArt(who) { const x = onIn(`weapon:${who}`); return x ? `${skinDir(x.id)}weapon.webp` : null; }

  /* ── Menu → Wardrobe ── */
  let view = 'wardrobe', sel = null, fresh = null, sfxT = null;
  const starsHtml = r => `<span class="g-ga-stars" style="--rc:${RAR[r].color}" aria-label="${RAR[r].name}">${'★'.repeat({ R: 2, SR: 3, UR: 4 }[r])}</span>`;
  const DEFAULT_POSE = 'assets/femc/battle/art/poses/solar-pose-0.webp';
  const EVOKER = 'assets/femc/battle/art/summon/evoker-prop.webp';
  function thumb(x) {
    if (x.kind === 'skin') return ready(x) ? `<img src="${G.base}${skinDir(x.id)}${x.who}-pose-0.webp" alt="">` : `<span class="g-wd-ico">👗</span>`;
    if (x.kind === 'weapon') return ready(x) ? `<img src="${G.base}${skinDir(x.id)}weapon.webp" alt="">` : `<span class="g-wd-ico">⚔</span>`;
    if (x.kind === 'evoker') return `<img src="${G.base}${EVOKER}" alt="" style="filter:${x.filter}">`;
    if (x.kind === 'wallpaper') return `<span class="g-wd-sw" style="background:${wallCss(x)}"></span>`;
    if (x.kind === 'title') return `<span class="g-wd-sw" style="background:linear-gradient(110deg, ${x.title[1]} 0 42%, ${x.title[0]} 42%)"></span>`;
    const v = PAL[x.pal]; return `<span class="g-wd-sw" style="background:linear-gradient(135deg, ${v[3]} 0 30%, ${v[0]} 30% 60%, ${v[1]} 60% 80%, ${v[2]} 80%)"></span>`;
  }
  // The big preview: the wallpaper (selected or worn), Solar in her outfit, and the item itself.
  function preview(x) {
    const wall = x && x.kind === 'wallpaper' ? x : onIn('wallpaper');
    const who = (x && x.who) || 'solar', skin = x && x.kind === 'skin' ? x : onIn(`skin:${who}`);
    const pose = who === 'solar' && !(skin && ready(skin)) ? `${G.base}${DEFAULT_POSE}` : posePath(who, skin);
    const pal = x && (x.kind === 'uitheme' || x.kind === 'battleui') ? x.pal : (onIn('uitheme') || {}).pal;
    const evk = x && x.kind === 'evoker' ? x : onIn('evoker');
    let extra = '';
    if (x && x.kind === 'title') extra = `<span class="g-wd-pv-title" style="--a:${x.title[0]};--b:${x.title[1]}"><img src="${G.base}assets/femc/title/keyart.webp" alt="" style="${x.titleFilter ? `filter:${x.titleFilter}` : ''}"><b>Solstice</b></span>`;
    else if (x && x.kind === 'weapon') extra = ready(x) ? `<img class="g-wd-pv-wpn" src="${G.base}${skinDir(x.id)}weapon.webp" alt="">` : '';
    else if (x && x.kind === 'battleui') extra = `<span class="g-wd-pv-hud" style="${varsCss(x.pal)}"><i style="--w:80%"></i><i class="sp" style="--w:55%"></i><b>Attack</b><b>Skill</b><b>Guard</b></span>`;
    const pending = x && x.art && !ready(x);
    return `<div class="g-wd-stage"${wall ? ` style="--wall:${esc(wallCss(wall))}"` : ''} data-pv="${x ? x.id : ''}">
      <img class="g-wd-pv-solar${pending && x.kind === 'skin' ? ' pending' : ''}" src="${pose}" alt="" data-who="${who}">
      ${evk ? `<img class="g-wd-pv-evk" src="${G.base}${EVOKER}" alt="" style="filter:${evk.filter}">` : ''}
      ${extra}${pal ? `<span class="g-wd-pv-pal" style="${varsCss(pal)}"><i></i><i></i><i></i></span>` : ''}
      ${pending ? '<span class="g-wd-pending">Art coming</span>' : ''}</div>`;
  }
  function wardrobeHtml() {
    const s = cs(), x = byId(sel);
    const kinds = Object.keys(KINDS).sort((a, b) => KINDS[a].order - KINDS[b].order);
    const lists = kinds.map(k => {
      const items = ITEMS.filter(i => i.kind === k && (metOk(i) || owns(i.id)));
      const slots = [...new Set(items.map(slotOf))];
      return slots.map(slot => {
        const worn = onIn(slot), one = items.find(i => slotOf(i) === slot);
        return `<section class="g-wd-kind"><h3>${esc(KINDS[k].name)}${one.who ? ` <small>${esc(whoName(one.who))}</small>` : ''}</h3><ul class="g-wd-items">
          <li><button type="button" class="g-wd-item${worn ? '' : ' on'}" data-wd-off="${slot}"><span class="g-wd-th"><span class="g-wd-ico">○</span></span><b>Default</b><small>${worn ? 'Take it off' : 'Wearing'}</small></button></li>
          ${items.filter(i => slotOf(i) === slot).map(i => { const own = owns(i.id), rd = ready(i), on = worn && worn.id === i.id; const st = !rd ? 'Art coming' : on ? 'Wearing' : own ? 'Owned' : i.pool === false ? 'Series reward' : 'Boutique'; return `<li class="g-wd-li">${own && rd ? `<button type="button" class="g-view-zoom" data-wd-zoom="${i.id}" aria-label="View ${esc(i.name)}" title="View">⤢</button>` : ''}<button type="button" class="g-wd-item${own ? ' own' : ''}${on ? ' on' : ''}${rd ? '' : ' pending'}${sel === i.id ? ' sel' : ''}" data-wd="${i.id}" style="--rc:${RAR[i.r].color}"><span class="g-wd-th">${thumb(i)}</span><b>${esc(i.name)}</b><small>${starsHtml(i.r)} ${st}</small></button></li>`; }).join('')}</ul></section>`;
      }).join('');
    }).join('');
    const can = x && owns(x.id) && ready(x), wearing = x && onIn(slotOf(x))?.id === x.id;
    return `<div class="g-wd-grid"><div class="g-wd-side">${preview(x)}
        <div class="g-wd-info">${x ? `<b>${esc(x.name)}</b><small>${starsHtml(x.r)} ${esc(RAR[x.r].name)} · ${esc(KINDS[x.kind].name)}${x.who ? ` · ${esc(whoName(x.who))}` : ''}</small><p>${esc(x.desc)}</p>
          ${!ready(x) ? '<p class="g-note small">Art coming: it joins the Boutique once its pictures are in.</p>' : !owns(x.id) ? `<p class="g-note small">${x.pool === false ? 'Complete its capsule series to get it.' : 'Pull for it in the Boutique.'}</p>` : ''}
          ${can ? `<span class="g-row g-wd-acts"><button type="button" class="g-btn pink small" data-wd-equip="${x.id}"${wearing ? ' disabled' : ''}><span>${wearing ? 'Wearing' : 'Equip'}</span></button><button type="button" class="g-btn small" data-wd-zoom="${x.id}"><span>View</span></button></span>` : ''}` : '<b>Wardrobe</b><p>Pick something to preview it. Looks only: nothing here changes a fight.</p>'}</div>
        <label class="g-wd-toggle"><input type="checkbox" data-wd-portraits${s.portraits ? ' checked' : ''}> Outfits in scene portraits</label></div>
      <div class="g-wd-list">${lists}</div></div>`;
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
  function bannerHtml() {
    const s = cs(), all = banners(), b = banner(), f = featured(), p = s.pity, MON = m => new Date(2009, m - 1, 1).toLocaleString('en', { month: 'long' });
    const res = fresh || (s.last && byId(s.last.id) ? { item: byId(s.last.id), r: s.last.r, old: true } : null);
    const n = pool().length, ends = x => bannerEnd(x).toLocaleString('en', { month: 'long', day: 'numeric' });
    const tabs = all.length > 1 ? `<div class="g-wd-bans" role="tablist" aria-label="Banners">${all.map(x => `<button type="button" role="tab" aria-selected="${x === b}" class="${x === b ? 'on' : ''}" style="--c:${x.color}" data-wd-ban="${x.id}"><b>${esc(x.name)}</b><small>${x.kind ? `${esc(x.kind)} · ` : ''}until ${esc(ends(x))}</small></button>`).join('')}</div>` : '';
    return `${tabs}<div class="g-wd-banner" data-ban="${b.id}" style="--c:${b.color}"><div class="g-wd-bhead"><b>${esc(b.name)}</b><small>Featured ${esc(MON(b.months[0]))}${b.months.length > 1 ? `–${esc(MON(b.months[b.months.length - 1]))}` : ''} · ends ${esc(ends(b))}</small></div>
      <ul class="g-wd-feat">${f.map(x => `<li style="--rc:${RAR[x.r].color}"><span class="g-wd-th">${thumb(x)}</span><b>${esc(x.name)}</b><small>${starsHtml(x.r)}${owns(x.id) ? ' · owned' : ''}</small></li>`).join('') || '<li class="g-note">Nothing featured is ready yet.</li>'}</ul>
      <ul class="g-ga-odds">${Object.entries(BAN.odds).map(([k, v]) => `<li style="--rc:${RAR[k].color}">${starsHtml(k)} ${RAR[k].name} <b>${(v * 100).toFixed(0)}%</b></li>`).join('')}</ul>
      <p class="g-ga-pity">Super Rare or better within <b>${BAN.pitySR - p.sr}</b> pull${BAN.pitySR - p.sr === 1 ? '' : 's'} · an Ultra within <b>${BAN.pityUR - p.ur}</b>${s.guar ? ' · the next Ultra is featured' : ''}.${all.length > 1 ? ' Pity is shared: it carries over when you switch banners.' : ''}</p>
      <p class="g-note small">Half of each rarity's pulls land on its featured item. ${n} looks are in the pool (outfits still waiting on art aren't). Repeats give Velvet Plumes back.</p>
      <div class="g-row g-ga-btns"><button type="button" class="g-btn pink" data-wd-pull${canPull() ? '' : ' disabled'}><span>Pull · ${BAN.cost} Velvet Plumes</span></button>
        <button type="button" class="g-btn g-ga-x10" data-wd-pull10${canPull(10) ? '' : ` disabled title="${esc(pullWhy(10))}"`}><span>×10 · ${BAN.cost * 10} Plumes${canPull(10) ? '' : `<small>${esc(pullWhy(10))}</small>`}</span></button><span class="g-ga-own"><span>Velvet Plumes <b>${plumes()}</b></span><span>Pulls <b>${s.pulls}</b></span></span></div>
      <div class="g-wd-reveal" aria-live="polite">${res ? (res.list ? tenHtml(res) : revealHtml(res)) : ''}</div></div>`;
  }
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
    el.querySelectorAll('[data-wd]').forEach(b => b.addEventListener('click', () => { sel = b.dataset.wd; G.sfx('femc-hover'); rerender(`[data-wd="${sel}"]`); }));
    el.querySelectorAll('[data-wd-off]').forEach(b => b.addEventListener('click', () => { unequip(b.dataset.wdOff); sel = null; G.sfx('femc-back'); rerender(`[data-wd-off="${b.dataset.wdOff}"]`); }));
    el.querySelectorAll('[data-wd-zoom]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openViewer(b.dataset.wdZoom); }));
    el.querySelector('[data-wd-equip]')?.addEventListener('click', e => { if (equip(e.currentTarget.dataset.wdEquip)) { G.sfx('femc-on'); rerender('[data-wd-equip]'); } });
    el.querySelector('[data-wd-portraits]')?.addEventListener('change', e => { setPortraits(e.target.checked); G.sfx('femc-click'); });
    el.querySelector('[data-wd-pull10]')?.addEventListener('click', () => {
      const list = pull10(); if (!list) return;
      const top = list.reduce((b, x) => (['R', 'SR', 'UR'].indexOf(x.r) > ['R', 'SR', 'UR'].indexOf(b.r) ? x : b), list[0]);
      fresh = { list }; G.sfx('femc-click');
      clearTimeout(sfxT); sfxT = setTimeout(() => { sfxT = null; G.sfx(RAR[top.r].sfx); }, reduced() ? 0 : { R: 650, SR: 900, UR: 1200 }[top.r]);
      rerender('[data-wd-pull10]');
      fresh = { list, old: true };
    });
    el.querySelector('[data-wd-skip]')?.addEventListener('click', e => {
      const box = el.querySelector('.g-wd-reveal'); box.classList.add('skip'); e.currentTarget.remove();
      if (sfxT) { clearTimeout(sfxT); sfxT = null; const r = (fresh && fresh.list || []).reduce((b, x) => (['R', 'SR', 'UR'].indexOf(x.r) > ['R', 'SR', 'UR'].indexOf(b) ? x.r : b), 'R'); G.sfx(RAR[r].sfx); }
    });
    el.querySelector('[data-wd-pull]')?.addEventListener('click', () => {
      const res = pull(); if (!res) return;
      fresh = res; G.sfx('femc-click');
      clearTimeout(sfxT); sfxT = setTimeout(() => { sfxT = null; G.sfx(RAR[res.r].sfx); }, reduced() ? 0 : { R: 650, SR: 900, UR: 1200 }[res.r]);
      rerender('[data-wd-pull]');
      fresh = Object.assign({}, res, { old: true }); // later re-renders show it still, without replaying
    });
  }

  G.onChange(kind => { if (kind !== 'toast') apply(); });
  applyTitleEarly();
  setTimeout(apply, 0);
  return Object.assign(api, { KINDS, ITEMS, BANNERS, BAN, PAL, byId, ready, cs, owns, slotOf, onIn, grantItem, equip, unequip, setPortraits, banner, banners, pickBanner, bannerEnd, pool, featured, canPull, pullWhy, pull, pullN, pull10, apply, battle, portrait, weaponArt, html, wire, preview, metOk, viewable, viewEntry, openViewer });
})();
