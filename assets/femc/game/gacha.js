/* Persona 3: Solstice · the gacha, both kinds (roadmap section 7 batch D, Kat's pick). No real money, ever: yen, Capsule Tickets
   and Velvet Plumes only, all earned by playing.

   ── The capsule machine (Paulownia Mall · Capsule Corner; places.js activity `capsule`, `gacha: 'capsule'`) ──
     One turn: ¥500 or one Capsule Ticket (an item, data in build.js: Tartarus drops one now and then, Shuffle Time's Hierophant
     gives one or two). Odds are shown on the machine (CAP.odds). Pity: Super Rare or better at least every CAP.pitySR turns,
     an Ultra at least every CAP.pityUR turns; both counters are on the machine. Prizes:
       Common: field items and Tarot Dust. Rare: a cast keychain (only people Solar has met; a new one before any repeat),
       a phone case, a better item. Super Rare: a capsule accessory (build.js gear, `gacha: 'capsule'`), a sealed Revelation
       card, a rarer case. Ultra: the Golden Sun Keyring, the gold case, a ★5 card, Soma.
     Repeats (keychains and cases you already have) become Capsule Stars; ten stars trade for a ticket.
   ── Velvet Room draws (Paulownia Mall · The Velvet Room, `gacha: 'velvet'`, from 4/8) ──
     Elizabeth deals three cards face down; pick one. ¥3,000 or 3 Velvet Plumes (Elizabeth's Compendium Credit, rank 2:
     25% less yen and one plume less). Odds VEL.odds; Super Rare or better every VEL.pitySR draws, Ultra every VEL.pityUR.
     Prizes: skill cards (build.js SKILL_CARDS, by how far the year has gone), Velvet Thread, ★4/★5 Revelation cards and
     Elizabeth's rare gear (build.js, `gacha: 'velvet'`).
     Velvet Plumes: +1 a Tartarus night, +3 a full moon won (core.js applyResult → afterFight), and +1 for every Compendium
     entry, claimed from Elizabeth (S.registered; claimed ids in S.gacha.credited).
   Save: S.gacha (core.js fresh; gs() fills a missing or older one): { v, plumes, stars, pulls, draws, pity: { cap: { sr, ur },
     vel: { sr, ur } }, keys: { id: copies }, cases: [ids], caseOn, credited: [ids], last }. Prizes land where the rest of the
     game keeps them: items in S.inventory, gear / materials / skill cards / Revelation cards in S.battleSave (build.js rules).
   Menu → Collection (menu.js) shows the keychains (by set), the phone cases (equip one: the phone wears it) and both
   machines' counters. Tests: FemcGacha.rng can be replaced with a seeded function; tests/femc_extras.py.
   ── Series, rarities and tokens (2026-10-25, Kat's capsule-variety batch) ──
     Five rarities: Common, Rare, Super Rare, Ultra and Secret (CAP.odds; each has its own capsule colour, reveal and sound:
     RARITY[r].color / .sfx, gacha.css `.g-cap-machine[data-r]`). The Corner has two machines on any day: the Cast machine
     (always; the old prizes plus two Secret charms) and the season's machine (SERIES[].months on the game's calendar:
     Sweethearts & Sidekicks Apr–Jun, Sep, Nov · Summer Jul–Aug · Halloween Oct · Winter Dec–Jan · Valentine's Feb–Mar).
     A series item is a keychain of one or two people in an outfit (`who`, `look`, `r`); only people Solar has met. Pity is
     per series (the Cast machine keeps S.gacha.pity.cap; the others S.gacha.pity.series[id]). Owning every item of a
     series pays its reward once (three tickets and a code-only cosmetic, cosmetics.js; S.gacha.done). Repeats become
     Capsule Tokens (the old Capsule Stars field, S.gacha.stars): ten trade for a ticket, or buy a missing item from a
     machine on today (TOKEN_PRICE). Series charm art: tools/femc-wardrobe.py cuts a sheet to game/art/keys/series/<id>.webp
     and lists it in game/art/ready.js (FEMC_ART_READY.keys); until then the charm is drawn from the faces. Halloween
     singles wear Kat's existing <id>-halloween.webp charms. Save: S.gacha.skeys { id: copies }, done [series ids].
   ── Solchan, Dorm Life, hidden charms and goods (2026-10-26, Kat's "more fun stuff" batch) ──
     A series may have `needs` (ids that must be met before its machine stands in the Corner: Solchan needs Haechan, Sep–Mar,
     `featured`). Dorm Life rotates May, Jun, Sep, Nov, Jan, Mar. Side characters who aren't links (Asahi, Niki) never block an
     item. The `hidden` series has no machine: once Haechan is met every turn first rolls HIDDEN.rate (0.15%) for one of its
     charms, outside pity (rarity HID, its own sun-and-moon reveal, ??? in Collection until found). GOODS (sticker sheets,
     acrylic stands, mini plush, photo cards) come out of Rare / Super Rare capsules (capPrize → goodPrize); save
     S.gacha.goods { id: copies }; art game/art/goods/<id>.webp via ready.js `goods`, drawn by kind until then.
   ── The viewer (2026-10-27, Kat's "view button" request) ──
     viewer(entries, at): a big look at one owned thing, on a ui.js overlay (.g-view-ov): the art at full size (Kat's file,
     or the drawn charm zoomed), name, rarity, series, a flavour line and when / how it was got. ← → or a swipe step
     through the list, Esc closes (only the viewer; the menu stays). Collection: tap an owned keychain, charm or good, or
     a case's ⤢ (tapping the case still puts it on); cosmetics.js gives it the Wardrobe's owned looks. Locked tiles stay ???
     and never open it. First-got days: S.gacha.got { 'key:<id>' | 'skey:<id>' | 'good:<id>' | 'case:<id>': day } (older
     saves show only how it was got). */
window.FemcGacha = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const UI = () => window.FemcGameUI, D = () => window.FEMC_BATTLE_DATA, B = () => window.FemcBuild;
  const S = () => G.S;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const yen = n => `¥${Math.round(n || 0).toLocaleString('en-US')}`;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const api = { rng: Math.random };
  const R = () => api.rng();
  const pick = a => a[Math.floor(R() * a.length)];

  /* ── Data ── */
  const RARITY = {
    C: { name: 'Common', stars: 1, color: '#f7f2f5', sfx: 'femc-note' }, R: { name: 'Rare', stars: 2, color: '#6ab0ff', sfx: 'femc-advance' },
    SR: { name: 'Super Rare', stars: 3, color: '#c58bff', sfx: 'femc-rankup' }, UR: { name: 'Ultra', stars: 4, color: '#ffd36b', sfx: 'femc-moon' },
    SEC: { name: 'Secret', stars: 5, color: '#ff6be6', sfx: 'femc-darkhour' },
    HID: { name: 'Hidden', stars: 6, color: '#fff0a8', sfx: 'femc-doves' } // hidden charms only, never rolled (HIDDEN)
  };
  const CAP = { price: 500, odds: { C: 0.6, R: 0.3, SR: 0.08, UR: 0.015, SEC: 0.005 }, pitySR: 10, pityUR: 60, stars: { C: 0, R: 1, SR: 3, UR: 6, SEC: 10, HID: 15 }, starsPerTicket: 10 };
  const TOKEN_PRICE = { R: 5, SR: 12, UR: 25, SEC: 40 };
  /* Capsule series (header). Items: id, who (one or two people), name, look (the outfit, also the art prompt's), r. */
  const it = (id, who, name, look, r) => ({ id, who, name, look, r });
  const SERIES = [
    { id: 'cast', name: 'Cast Keychains', color: '#ff4f9e', always: true, reward: 'tt-sunburst', blurb: 'Everyone Solar has met, phone cases and more.', items: [
      it('cast-elizabeth', ['elizabeth'], 'Elizabeth', 'Velvet Room uniform, holding the Compendium', 'SEC'),
      it('cast-goldsun', ['solar'], 'Golden Solar', 'gold-plated acrylic, sun rays behind her', 'SEC')] },
    { id: 'couples', name: 'Sweethearts & Sidekicks', color: '#ff8cc0', months: [4, 5, 6, 9, 11], reward: 'wp-hearts', blurb: 'Two to a charm: Solar and her favourite people, and the cast’s best pairs.', items: [
      it('cp-hanni-hyein', ['hanni', 'hyein'], 'Hanni & Hyein', 'matching bunny hairclips, cheek to cheek', 'R'),
      it('cp-kuromi-melody', ['kuromi', 'mymelody'], 'Kuromi & My Melody', 'back to back, one smug, one sweet', 'R'),
      it('cp-ken-koro', ['ken', 'koromaru'], 'Ken & Koromaru', 'Ken hugging Koromaru, both proud', 'R'),
      it('cp-junpei-yukari', ['junpei', 'yukari'], 'Junpei & Yukari', 'mid-bicker, Junpei pointing, Yukari rolling her eyes', 'R'),
      it('cp-aki-shinji', ['akihiko', 'shinjiro'], 'Akihiko & Shinjiro', 'back to back, arms crossed, old friends', 'R'),
      it('cp-haechan-mark', ['haechan', 'mark'], 'Haechan & Mark', 'arm over the shoulder, both laughing', 'R'),
      it('cp-solar-akihiko', ['solar', 'akihiko'], 'Solar & Akihiko', 'sharing a protein shake with two straws', 'SR'),
      it('cp-solar-shinjiro', ['solar', 'shinjiro'], 'Solar & Shinjiro', 'he holds a ladle, she steals a taste', 'SR'),
      it('cp-solar-jungwon', ['solar', 'jungwon'], 'Solar & Jungwon', 'sharing one croissant', 'SR'),
      it('cp-solar-jihoon', ['solar', 'jihoon'], 'Solar & Jihoon', 'he grins with a crane-game prize, she pretends not to be impressed', 'SR'),
      it('cp-solar-minji', ['solar', 'minji'], 'Solar & Minji', 'Minji snapping a selfie of the two of them', 'SR'),
      it('cp-solar-haechan', ['solar', 'haechan'], 'Solar & Haechan', 'sharing one pair of earbuds, heads together', 'UR'),
      it('cp-solar-akihiko-2', ['solar', 'akihiko'], 'Solar & Akihiko', 'he laces up her boxing gloves, she grins over his shoulder', 'SR'),
      it('cp-solar-jungwon-2', ['solar', 'jungwon'], 'Solar & Jungwon', 'asleep on his study notes, him quietly holding her pencil', 'SR'),
      it('cp-solar-jihoon-2', ['solar', 'jihoon'], 'Solar & Jihoon', 'sharing one umbrella, his side soaked on purpose', 'SR'),
      it('cp-sees-photo', ['solar', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka'], 'S.E.E.S. Photo', 'the whole dorm squeezed into one photo frame', 'SEC')] },
    { id: 'summer', name: 'Summer Series', color: '#4fd8ff', months: [7, 8], reward: 'ui-summer', blurb: 'Beach days, sun hats and festival nights.', items: [
      it('su-akihiko', ['akihiko'], 'Akihiko', 'swim trunks and a towel over his shoulders', 'R'),
      it('su-yukari', ['yukari'], 'Yukari', 'pink sundress and a straw hat', 'R'),
      it('su-junpei', ['junpei'], 'Junpei', 'loud Hawaiian shirt, holding a melon slice', 'R'),
      it('su-mitsuru', ['mitsuru'], 'Mitsuru', 'white sun hat and a parasol', 'R'),
      it('su-fuuka', ['fuuka'], 'Fuuka', 'sailor-collar summer dress, holding a fan', 'R'),
      it('su-jungwon', ['jungwon'], 'Jungwon', 'beach shirt, sunglasses pushed up', 'R'),
      it('su-solar', ['solar'], 'Solar', 'summer yukata with sunflowers, hair up', 'SR'),
      it('su-haechan', ['haechan'], 'Haechan', 'navy festival yukata, a sparkler', 'SR'),
      it('su-solar-jungwon', ['solar', 'jungwon'], 'Solar & Jungwon', 'summer festival, he wins her a goldfish in a little bag', 'SR'),
      it('su-solar-minji', ['solar', 'minji'], 'Solar & Minji', 'sharing one strawberry shaved ice, two spoons', 'SR'),
      it('su-solar-akihiko', ['solar', 'akihiko'], 'Solar & Akihiko', 'beach day, building a lopsided sandcastle', 'UR'),
      it('su-koro-melon', ['koromaru'], 'Koromaru', 'sitting inside a hollowed watermelon', 'SEC')] },
    { id: 'halloween', name: 'Halloween Series', color: '#ff9a3c', months: [10], reward: 'ui-pumpkin', blurb: 'The cast in costume (the charms you know, now to keep).', items: [
      it('hw-shinjiro', ['shinjiro'], 'Shinjiro', 'Halloween costume', 'R'), it('hw-yukari', ['yukari'], 'Yukari', 'Halloween costume', 'R'),
      it('hw-junpei', ['junpei'], 'Junpei', 'Halloween costume', 'R'), it('hw-mitsuru', ['mitsuru'], 'Mitsuru', 'Halloween costume', 'R'),
      it('hw-aigis', ['aigis'], 'Aigis', 'Halloween costume', 'R'), it('hw-koromaru', ['koromaru'], 'Koromaru', 'Halloween costume', 'R'),
      it('hw-jungwon', ['jungwon'], 'Jungwon', 'Halloween costume', 'R'), it('hw-kuromi', ['kuromi'], 'Kuromi', 'Halloween costume', 'R'),
      it('hw-solar', ['solar'], 'Solar', 'Halloween costume', 'SR'), it('hw-akihiko', ['akihiko'], 'Akihiko', 'Halloween costume', 'SR'),
      it('hw-haechan', ['haechan'], 'Haechan', 'Halloween costume', 'SR'),
      it('hw-solar-jihoon', ['solar', 'jihoon'], 'Solar & Jihoon', 'matching pumpkin costumes, him carrying her candy as well as his', 'SR'),
      it('hw-solar-haechan', ['solar', 'haechan'], 'Solar & Haechan', 'trick-or-treating: a little witch and a vampire sharing one candy bucket', 'UR'),
      it('hw-elizabeth', ['elizabeth'], 'Elizabeth', 'a witch’s hat over her Velvet Room uniform, riding the Compendium like a broom', 'SEC')] },
    { id: 'winter', name: 'Winter Series', color: '#bfe3ff', months: [12, 1], reward: 'wp-snow', blurb: 'Scarves, Santa hats and hot cocoa.', items: [
      it('wi-akihiko', ['akihiko'], 'Akihiko', 'red scarf and a running jacket, breath puffing', 'R'),
      it('wi-shinjiro', ['shinjiro'], 'Shinjiro', 'his beanie and a long winter coat, hands in pockets', 'R'),
      it('wi-mitsuru', ['mitsuru'], 'Mitsuru', 'white fur-trimmed coat', 'R'),
      it('wi-fuuka', ['fuuka'], 'Fuuka', 'mittens and earmuffs, holding a cocoa', 'R'),
      it('wi-aigis', ['aigis'], 'Aigis', 'a Santa hat, very serious about it', 'R'),
      it('wi-jihoon', ['jihoon'], 'Jihoon', 'puffer jacket, a snowball ready', 'R'),
      it('wi-minji', ['minji'], 'Minji', 'knit hat and a camera round her neck', 'R'),
      it('wi-solar', ['solar'], 'Solar', 'cream winter coat, pink scarf, snow in her hair', 'SR'),
      it('wi-jungwon', ['jungwon'], 'Jungwon', 'long dark coat, a gift box tied with ribbon', 'SR'),
      it('wi-solar-akihiko', ['solar', 'akihiko'], 'Solar & Akihiko', 'a New Year’s shrine visit, his red scarf round her neck', 'SR'),
      it('wi-solar-shinjiro', ['solar', 'shinjiro'], 'Solar & Shinjiro', 'two mugs of hot cocoa, one scarf between them', 'UR'),
      it('wi-koro-reindeer', ['koromaru'], 'Koromaru', 'reindeer antlers and a tiny red nose', 'SEC')] },
    { id: 'valentine', name: 'Valentine’s Series', color: '#ff5d8f', months: [2, 3], reward: 'evk-heart', blurb: 'Chocolate, ribbons and a little nerve.', items: [
      it('va-yukari', ['yukari'], 'Yukari', 'holding a pink gift box behind her back', 'R'),
      it('va-junpei', ['junpei'], 'Junpei', 'hopefully holding out an empty hand', 'R'),
      it('va-mitsuru', ['mitsuru'], 'Mitsuru', 'a very expensive chocolate box', 'R'),
      it('va-hanni', ['hanni'], 'Hanni', 'heart-shaped sunglasses', 'R'),
      it('va-hyein', ['hyein'], 'Hyein', 'a bouquet of pink tulips', 'R'),
      it('va-jungwon', ['jungwon'], 'Jungwon', 'a ribboned box of homemade chocolates', 'R'),
      it('va-solar', ['solar'], 'Solar', 'chocolate-stained apron, a tray of hearts', 'SR'),
      it('va-akihiko', ['akihiko'], 'Akihiko', 'a protein bar wrapped in a red ribbon', 'SR'),
      it('va-solar-jungwon', ['solar', 'jungwon'], 'Solar & Jungwon', 'a heart-shaped chocolate split in two', 'UR'),
      it('va-kuromi-melody', ['kuromi', 'mymelody'], 'Kuromi & My Melody', 'Kuromi’s anti-Valentine sign, My Melody’s heart balloon', 'SEC'),
      it('va-solar-shinjiro', ['solar', 'shinjiro'], 'Solar & Shinjiro', 'he pretends the handmade chocolate isn’t for him', 'SR'),
      it('va-solar-minji', ['solar', 'minji'], 'Solar & Minji', 'a polaroid of the two of them holding chocolate hearts', 'SR')] },
    /* Kat's Solchan batch (2026-10-26): a featured machine from Haechan's arrival to the end of the year (`needs`: the
       machine only stands in the Corner once everyone in it is met). */
    { id: 'solchan', name: 'Solchan Series', color: '#ffb84d', months: [9, 10, 11, 12, 1, 2, 3], needs: ['haechan'], featured: true, reward: 'tt-twosuns', blurb: 'Solar and Haechan, all year round. A featured machine.', items: [
      it('sc-haechan-discman', ['haechan'], 'Haechan', 'headphones round his neck, a Discman in one hand', 'C'),
      it('sc-haechan-plush', ['haechan'], 'Haechan', 'a round, sleepy little plush version of him with a moon on his tummy', 'R'),
      it('sc-dryer', ['solar', 'haechan'], 'The Dryer', 'sitting on the laundry-room dryer, his headphones on her ears', 'C'),
      it('sc-earbuds', ['solar', 'haechan'], 'Sharing Earbuds', 'one earbud each, heads tipped together, eyes closed', 'R'),
      it('sc-gamers', ['solar', 'haechan'], 'Player Two', 'gaming headsets and controllers, a mini Widowmaker on his shoulder, a mini Kiriko on hers', 'R'),
      it('sc-morning', ['solar', 'haechan'], 'Five More Minutes', 'a sleepy morning: bed hair, one blanket, her yawning on his shoulder', 'R'),
      it('sc-rooftop', ['solar', 'haechan'], 'Rooftop Night', 'sitting on a rooftop ledge at night, city lights below, a crescent moon', 'SR'),
      it('sc-jacket', ['solar', 'haechan'], 'His Jacket', 'his jacket over her shoulders, him pretending he isn’t cold', 'SR'),
      it('sc-forehead', ['solar', 'haechan'], 'Forehead Touch', 'foreheads together, eyes closed, both smiling', 'SR'),
      it('sc-christmas', ['solar', 'haechan'], 'Port Island Christmas', 'Christmas lights on Port Island, matching scarves, one cup of cocoa', 'SR'),
      it('sc-strangers', ['solar', 'haechan'], 'Strangers', 'the strangers versions: dark coats, a rainy street, her umbrella over them both', 'SR'),
      it('sc-runners', ['solar', 'haechan'], 'Runners', 'the Runners versions: college hoodies, a coffee each, walking in step', 'SR'),
      it('sc-twosuns', ['solar', 'haechan'], 'Two Suns', 'a Theurgy chibi: back to back, two little suns blazing behind them', 'UR'),
      it('sc-held', ['solar', 'haechan'], 'Hold On', 'him holding her close while a ribbon of light tugs at her, refusing to let go', 'SEC')] },
    { id: 'dorm', name: 'Dorm Life Series', color: '#9fd4ff', months: [5, 6, 9, 11, 1, 3], reward: 'wp-pajamas', blurb: 'Pajamas, a dog in costumes and the friends who say they hate each other.', items: [
      it('dl-akihiko-pj', ['akihiko'], 'Akihiko', 'grey pajamas, a protein shaker, hair a mess', 'R'),
      it('dl-junpei-pj', ['junpei'], 'Junpei', 'baggy pajamas, cap still on, asleep sitting up', 'R'),
      it('dl-yukari-pj', ['yukari'], 'Yukari', 'pink pajamas and a sheet mask', 'R'),
      it('dl-mitsuru-pj', ['mitsuru'], 'Mitsuru', 'a silk robe and a cup of tea, very composed', 'R'),
      it('dl-fuuka-pj', ['fuuka'], 'Fuuka', 'mint pajamas, hugging a pillow, a laptop at her feet', 'R'),
      it('dl-solar-pj', ['solar'], 'Solar', 'sunny-yellow pajamas, fluffy slippers, a bowl of ramen', 'SR'),
      it('dl-koro-bee', ['koromaru'], 'Koromaru', 'a bumblebee costume with little wings', 'R'),
      it('dl-koro-hero', ['koromaru'], 'Koromaru', 'a red superhero cape and a tiny mask', 'SR'),
      it('dl-koro-sailor', ['koromaru'], 'Koromaru', 'a sailor hat and a striped collar', 'SR'),
      it('dl-ken-pj', ['ken'], 'Ken', 'a Featherman onesie, hood up, very serious', 'R'),
      it('dl-aigis-pj', ['aigis'], 'Aigis', 'striped pajamas and a sleep mask on her forehead, “resting”', 'R'),
      it('dl-koro-basket', ['koromaru'], 'Koromaru', 'asleep in the laundry basket on someone’s clean towels', 'R'),
      it('dl-shinjiro-pj', ['shinjiro'], 'Shinjiro', 'a midnight snack: apron over a hoodie, a pot of ramen', 'SR'),
      it('dl-hateclub', ['jihoon', 'asahi', 'niki'], 'The Hate Club', 'squeezed into a karaoke booth, Jihoon holding the mic, the other two booing', 'UR'),
      it('dl-dorm-pj', ['solar', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka', 'koromaru'], 'Pajama Night', 'the whole dorm in pajamas piled on the lounge sofa for a movie', 'SEC')] },
    /* Hidden charms (Kat, 2026-10-26): no machine of their own. Any capsule machine can drop one at HIDDEN.rate a turn once
       Haechan has arrived, outside pity (never counted, never guaranteed). Their own rarity (HID) and reveal; ??? in
       Collection until found. */
    { id: 'hidden', name: 'Hidden Charms', color: '#fff0a8', hidden: true, needs: ['haechan'], reward: 'tt-eclipse', blurb: 'Nobody has a list. Nobody has seen all four.', items: [
      it('hd-couch', ['solar', 'haechan'], 'Asleep on the Couch', 'asleep together on the dorm sofa, his arm round her, the TV still on', 'HID'),
      it('hd-rings', ['solar', 'haechan'], 'Matching Rings', 'just their two hands, fingers laced, matching silver rings', 'HID'),
      it('hd-pairsuns', ['solar', 'haechan'], 'A Pair of Suns', 'two little suns with their faces, side by side, glowing', 'HID'),
      it('hd-runners-roof', ['haechan'], 'The Runners Roof', 'him alone on the Runners rooftop at golden hour, looking back with a grin', 'HID')] }
  ];
  const HIDDEN = { rate: 0.0015, stars: 15 };
  const seriesOpen = s => !s.needs || s.needs.every(id => id === 'solar' || G.isMet(id));
  const serById = id => SERIES.find(s => s.id === id);
  const itemById = id => { for (const s of SERIES) { const x = s.items.find(i => i.id === id); if (x) return [x, s]; } return [null, null]; };
  const VEL = { price: 3000, plumes: 3, odds: { R: 0.7, SR: 0.25, UR: 0.05 }, pitySR: 5, pityUR: 30 };
  // Keychains, by set. Solar is always in the machine; everyone else once she has met them (no spoilers from a capsule).
  const SETS = [
    { id: 'sees', name: 'S.E.E.S.', color: '#4b9bff', ids: ['solar', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka', 'aigis', 'ken', 'koromaru', 'shinjiro'] },
    { id: 'old', name: 'Old Friends', color: '#ff4f9e', ids: ['haechan', 'jungwon', 'jihoon', 'minji', 'hanni', 'hyein', 'yunjin', 'mark', 'jaehyun', 'cherry', 'sunoo', 'junkyu'] },
    { id: 'new', name: 'New Friends', color: '#7dffc0', ids: ['ann', 'kasumi', 'haru', 'kuromi', 'mymelody', 'rio', 'saori', 'kiriko'] }
  ];
  /* Kat's phone cases (batch 48, tools/femc-greens.py -> game/art/cases/<id>.webp); the drawn case if the file fails. */
  const caseArt = id => `<span class="g-case-art" data-case="${id}"><img src="${G.base}assets/femc/game/art/cases/${id}.webp" alt="" onerror="this.remove()"><i></i></span>`;
  const CASES = [
    { id: 'sakura', name: 'Sakura Phone Case', r: 'R', desc: 'Pale pink with falling petals.' },
    { id: 'featherman', name: 'Featherman R Case', r: 'R', desc: 'Red, loud and heroic. Ken approves.' },
    { id: 'koro', name: 'Paw Print Case', r: 'R', desc: 'White, with a trail of little paws.' },
    { id: 'moonlight', name: 'Moonlight Case', r: 'SR', desc: 'Midnight navy and a silver crescent.' },
    { id: 'velvet', name: 'Velvet Case', r: 'SR', desc: 'The exact blue of a room with no doors.' },
    { id: 'gold', name: 'Golden Sun Case', r: 'UR', desc: 'Gold all over. Impossible to lose in a bag.' }
  ];
  /* Capsule goods (Kat's 2026-10-26 batch): sticker sheets, acrylic stands, mini plush and photo cards. Data only: { id,
     kind, who, name, look, r }; met-only like the keychains; repeats become tokens. They come out of the Cast machine's Rare
     and Super Rare capsules (so every machine's top-up too). Art: game/art/goods/<id>.webp (tools/femc-wardrobe.py goods,
     listed in ready.js `goods`); until then each kind is drawn from the faces (gacha.css .g-good[data-k]). */
  const GOOD_KINDS = { sticker: 'Sticker sheet', stand: 'Acrylic stand', plush: 'Mini plush', photo: 'Photo card' };
  const gd = (id, kind, who, name, look, r) => ({ id, kind, who, name, look, r });
  const GOODS = [
    gd('gd-st-sees', 'sticker', ['solar', 'akihiko', 'yukari', 'junpei', 'mitsuru', 'fuuka'], 'S.E.E.S. Stickers', 'six chibi faces, die-cut', 'R'),
    gd('gd-st-koro', 'sticker', ['koromaru'], 'Koromaru Stickers', 'six Koromaru moods: happy, sleepy, begging, proud, wet, zoomies', 'R'),
    gd('gd-st-solchan', 'sticker', ['solar', 'haechan'], 'Solchan Stickers', 'doodles of the two of them: suns, moons, headphones', 'R'),
    gd('gd-pc-akihiko', 'photo', ['akihiko'], 'Akihiko Photo Card', 'post-match, towel round his neck, holographic edge', 'R'),
    gd('gd-pc-shinjiro', 'photo', ['shinjiro'], 'Shinjiro Photo Card', 'in the dorm kitchen, caught mid-glare', 'R'),
    gd('gd-pc-jungwon', 'photo', ['jungwon'], 'Jungwon Photo Card', 'a soft smile, sweater sleeves over his hands', 'R'),
    gd('gd-pc-haechan', 'photo', ['haechan'], 'Haechan Photo Card', 'a wink and a peace sign, holographic edge', 'SR'),
    gd('gd-pl-koro', 'plush', ['koromaru'], 'Koromaru Mini Plush', 'a round little Koromaru with a red collar', 'R'),
    gd('gd-pl-solar', 'plush', ['solar'], 'Solar Mini Plush', 'Solar as a squishy round plush, a sun on her hair clip', 'SR'),
    gd('gd-as-solar', 'stand', ['solar'], 'Solar Acrylic Stand', 'her uniform, naginata over her shoulder, a printed moon base', 'SR'),
    gd('gd-as-haechan', 'stand', ['haechan'], 'Haechan Acrylic Stand', 'headphones on, hands in his jacket pockets, a printed rooftop base', 'SR'),
    gd('gd-as-akihiko', 'stand', ['akihiko'], 'Akihiko Acrylic Stand', 'a boxing stance, gloves up, a printed ring base', 'SR')
  ];
  const goodById = id => GOODS.find(x => x.id === id);
  const CAP_C = [['item', 'medicine', 2], ['item', 'snuff_soul', 1], ['item', 'patra_gem', 1], ['item', 'revival_bead', 1], ['item', 'dis_poison', 2], ['mat', 'tarot_dust', 6]];
  const CAP_R_ITEMS = [['item', 'bead', 1], ['item', 'chewing_soul', 1], ['item', 'revival_bead', 2], ['mat', 'tarot_dust', 14]];
  const capGear = r => Object.keys(D().gear).filter(k => D().gear[k].gacha === 'capsule' && (r === 'UR' ? k === 'cap_gold_sun' : k !== 'cap_gold_sun'));
  const velGear = () => Object.keys(D().gear).filter(k => D().gear[k].gacha === 'velvet' && D().gear[k].tier <= 2 + (S().tartarus.bosses || []).length);
  const LINES = {
    capHi: ['A wall of capsule machines hums by the escalator. One of them has a hand-written sign: NEW KEYCHAINS!', 'The machine’s dome is full of little plastic moons.', 'A kid at the next machine is on his ninth turn. He looks very calm about it.'],
    velHi: ['“Ah, Solar. Shall we see what the cards think of you today?”', '“I have shuffled the deck twice and dusted it once. It is ready when you are.”', '“The cards are not gambling. Gambling is when one does not know the odds. I have written them down for you.”'],
    velPick: ['“Interesting. Very interesting.”', '“The card chose you as much as you chose it. That is how this works. I think.”', '“Please do not tell my master how much I enjoy this.”'],
    velClaim: ['“Your Compendium has grown. Every new page is worth a plume to me, and I always pay my debts.”'],
    velBroke: ['“The Velvet Room does not extend credit. Except to friends. Even then, only a little.”']
  };

  /* ── State ── */
  function fresh() { return { v: 2, plumes: 0, stars: 0, pulls: 0, draws: 0, pity: { cap: { sr: 0, ur: 0 }, vel: { sr: 0, ur: 0 }, series: {} }, keys: {}, skeys: {}, goods: {}, got: {}, done: [], cases: [], caseOn: null, credited: [], last: null }; }
  function gs() {
    const s = S();
    const f = fresh();
    if (!s.gacha || typeof s.gacha !== 'object') s.gacha = f;
    const g = s.gacha;
    Object.keys(f).forEach(k => { if (g[k] === undefined || (f[k] !== null && (g[k] === null || typeof g[k] !== typeof f[k]))) g[k] = f[k]; });
    ['cap', 'vel'].forEach(k => { g.pity[k] = Object.assign({ sr: 0, ur: 0 }, g.pity[k] || {}); });
    if (!g.pity.series || typeof g.pity.series !== 'object') g.pity.series = {};
    if (!Array.isArray(g.cases)) g.cases = []; if (!Array.isArray(g.credited)) g.credited = []; if (!Array.isArray(g.done)) g.done = [];
    if (!g.skeys || typeof g.skeys !== 'object' || Array.isArray(g.skeys)) g.skeys = {};
    if (!g.goods || typeof g.goods !== 'object' || Array.isArray(g.goods)) g.goods = {};
    if (!g.got || typeof g.got !== 'object' || Array.isArray(g.got)) g.got = {};
    return g;
  }
  // Pity for a capsule series: the Cast machine keeps the old counters.
  const seriesPity = sid => { const g = gs(); if (!sid || sid === 'cast') return g.pity.cap; return (g.pity.series[sid] = Object.assign({ sr: 0, ur: 0 }, g.pity.series[sid] || {})); };
  // The machines in the Corner on a day: the Cast machine, then the season's.
  const monthOf = d => { try { return G.dateOf(d ?? S().day).getMonth() + 1; } catch (e) { return 4; } };
  const activeSeries = d => SERIES.filter(s => !s.hidden && seriesOpen(s) && (s.always || (s.months || []).includes(monthOf(d))));
  const hiddenSeries = () => serById('hidden');
  const hiddenOn = () => seriesOpen(hiddenSeries());
  // Met-only; a side character who isn't a link (the Hate Club's Asahi and Niki) tags along with whoever is.
  const itemEligible = x => x.who.every(id => id === 'solar' || G.isMet(id) || !G.LINKS[id]);
  const itemCount = s => s.items.filter(x => gs().skeys[x.id] > 0).length;
  // A series is complete when every keychain in it is owned (the Cast machine also needs every cast keychain).
  const seriesDone = s => itemCount(s) === s.items.length && (s.id !== 'cast' || SETS.every(setDone));
  const tickets = () => S().inventory.capsule_ticket || 0;
  const bsave = () => G.ensureBattleSave();

  /* ── Rules ── */
  function rollTier(odds) {
    let x = R();
    const keys = Object.keys(odds);
    for (const k of keys.slice().reverse()) { if (x < odds[k]) return k; x -= odds[k]; }
    return keys[0];
  }
  // A rarity with pity. kind: 'cap' | 'vel'. Pity counts turns since the last SR+ / UR, and the turn that would reach the limit is lifted.
  // A Secret counts as Ultra or better for both counters. sid: the capsule series (its own pity).
  function rarity(kind, sid) {
    const cfg = kind === 'cap' ? CAP : VEL, p = kind === 'cap' ? seriesPity(sid) : gs().pity[kind];
    let r = rollTier(cfg.odds);
    const top = x => x === 'UR' || x === 'SEC';
    if (!top(r) && p.ur + 1 >= cfg.pityUR) r = 'UR';
    else if (!top(r) && r !== 'SR' && p.sr + 1 >= cfg.pitySR) r = 'SR';
    p.ur = top(r) ? 0 : p.ur + 1;
    p.sr = top(r) || r === 'SR' ? 0 : p.sr + 1;
    return r;
  }
  const keyEligible = id => id === 'solar' || G.isMet(id);
  const keyName = id => (id === 'solar' ? 'Solar' : (G.LINKS[id]?.short || G.name(id)));
  const keySet = id => SETS.find(st => st.ids.includes(id));
  // Give a prize; returns { r, kind, id, name, desc, n, dup, stars }.
  function grant(r, p) {
    const g = gs(), out = { r, kind: p[0], id: p[1], n: p[2] || 1 };
    if (['key', 'skey', 'good', 'case'].includes(p[0]) && g.got[`${p[0]}:${p[1]}`] == null) g.got[`${p[0]}:${p[1]}`] = S().day;
    if (p[0] === 'item') { G.D.battle.items[p[1]] && (S().inventory[p[1]] = (S().inventory[p[1]] || 0) + out.n); const it = D().items[p[1]]; out.name = it.name + (out.n > 1 ? ` ×${out.n}` : ''); out.desc = it.desc; }
    else if (p[0] === 'mat') { const b = bsave(); b.mats[p[1]] = (b.mats[p[1]] || 0) + out.n; out.name = `${D().materials[p[1]].name} ×${out.n}`; out.desc = D().materials[p[1]].desc; }
    else if (p[0] === 'gear') { const b = bsave(); b.gear.owned[p[1]] = (b.gear.owned[p[1]] || 0) + 1; const ge = D().gear[p[1]]; out.name = ge.name; out.desc = window.FemcBattleSave ? window.FemcBattleSave.gearLine(p[1]) : ge.desc; out.slot = ge.slot; }
    else if (p[0] === 'key') {
      g.keys[p[1]] = (g.keys[p[1]] || 0) + 1; out.name = `${keyName(p[1])} keychain`; out.set = keySet(p[1]).name; out.desc = `${keySet(p[1]).name} set · ${setCount(keySet(p[1]))}/${keySet(p[1]).ids.length}`;
      if (g.keys[p[1]] > 1) { out.dup = true; out.stars = CAP.stars[r] || 1; g.stars += out.stars; }
      else out.reward = completeSeries(serById('cast'));
    } else if (p[0] === 'skey') {
      const [x, s] = itemById(p[1]); g.skeys[x.id] = (g.skeys[x.id] || 0) + 1;
      out.name = `${x.name} keychain`; out.series = s.id; out.desc = `${s.name} · ${x.look} · ${itemCount(s)}/${s.items.length}`;
      if (g.skeys[x.id] > 1) { out.dup = true; out.stars = CAP.stars[x.r] || 1; g.stars += out.stars; }
      else out.reward = completeSeries(s);
    } else if (p[0] === 'good') {
      const x = goodById(p[1]); g.goods[x.id] = (g.goods[x.id] || 0) + 1;
      out.name = x.name; out.desc = `${GOOD_KINDS[x.kind]} · ${x.look}`;
      if (g.goods[x.id] > 1) { out.dup = true; out.stars = CAP.stars[x.r] || 1; g.stars += out.stars; }
    } else if (p[0] === 'case') {
      const c = CASES.find(x => x.id === p[1]); out.name = c.name; out.desc = c.desc;
      if (g.cases.includes(c.id)) { out.dup = true; out.stars = CAP.stars[r]; g.stars += out.stars; } else g.cases.push(c.id);
    } else if (p[0] === 'card') {
      const Bd = B(), b = bsave(), c = Bd.rollCard(R, { tier: 2 + (S().tartarus.bosses || []).length, r: p[2] === 5 ? 5 : null, minR: p[2] || 3 }), res = Bd.addCard(b, c);
      out.n = 1; out.card = res.card || null; out.name = res.card ? `${Bd.cardName(c)} ★${c.r}` : `Tarot Dust ×${res.dust}`; out.desc = res.card ? 'A Revelation card. Equip it from the menu’s Cards tab.' : 'The card box was full, so it became dust.';
    } else if (p[0] === 'skill') {
      const b = bsave(); b.skillCards = b.skillCards || {}; b.skillCards[p[1]] = (b.skillCards[p[1]] || 0) + 1;
      out.name = `Skill card: ${D().skills[p[1]].name}`; out.desc = `${D().skills[p[1]].desc || ''} Teach it from the menu’s Cards tab.`;
    }
    return out;
  }
  function setCount(st) { const g = gs(); return st.ids.filter(id => g.keys[id] > 0).length; }
  const setDone = st => setCount(st) === st.ids.length;
  /* A series' reward, once: three Capsule Tickets and its cosmetic (cosmetics.js). Returns a line for the prize card, or null. */
  function completeSeries(s) {
    const g = gs();
    if (!s || g.done.includes(s.id) || !seriesDone(s)) return null;
    g.done.push(s.id); S().inventory.capsule_ticket = tickets() + 3;
    const C = window.FemcCosmetics, c = C && s.reward ? C.grantItem(s.reward) : null;
    return `${s.name} complete! Capsule Tickets ×3${c ? ` and ${c.name} (${C.KINDS[c.kind].name}) for the Wardrobe` : ''}.`;
  }
  // What the capsule holds, for a rarity.
  function capPrize(r) {
    const g = gs();
    if (r === 'C') return pick(CAP_C);
    if (r === 'R') {
      const x = R();
      if (x < 0.6) {
        const ok = SETS.flatMap(st => st.ids).filter(keyEligible), fresh = ok.filter(id => !(g.keys[id] > 0));
        return ['key', fresh.length ? pick(fresh) : pick(ok)];
      }
      if (x < 0.72) { const gp = goodPrize('R'); if (gp) return gp; }
      if (x < 0.85) { const cs = CASES.filter(c => c.r === 'R'), nw = cs.filter(c => !g.cases.includes(c.id)); return ['case', pick(nw.length ? nw : cs).id]; }
      return pick(CAP_R_ITEMS);
    }
    const owned = k => (bsave().gear.owned[k] || 0) > 0 || S().gear.includes(k);
    if (r === 'SR') {
      const x = R(), gear = capGear('SR').filter(k => !owned(k)), cs = CASES.filter(c => c.r === 'SR' && !g.cases.includes(c.id));
      if (x < 0.4 && gear.length) return ['gear', pick(gear)];
      if (x < 0.55) { const gp = goodPrize('SR'); if (gp) return gp; }
      if (x < 0.68 && cs.length) return ['case', pick(cs).id];
      if (x < 0.85) return ['card', null, 4];
      return pick([['item', 'bead_chain', 1], ['item', 'chewing_soul', 2]]);
    }
    const x = R();
    if (!owned('cap_gold_sun') && x < 0.4) return ['gear', 'cap_gold_sun'];
    if (!g.cases.includes('gold') && x < 0.65) return ['case', 'gold'];
    if (x < 0.85) return ['card', null, 5];
    return ['item', 'soma', 1];
  }
  // A capsule good of rarity r (a new one first), or null.
  function goodPrize(r) {
    const g = gs(), ok = GOODS.filter(x => x.r === r && itemEligible(x)), nw = ok.filter(x => !(g.goods[x.id] > 0));
    return ok.length ? ['good', pick(nw.length ? nw : ok).id] : null;
  }
  // A series keychain of rarity r (a new one first), or null when nobody she's met fits.
  function seriesKey(s, r) {
    const g = gs(), ok = s.items.filter(x => x.r === r && itemEligible(x)), nw = ok.filter(x => !(g.skeys[x.id] > 0));
    return ok.length ? ['skey', pick(nw.length ? nw : ok).id] : null;
  }
  // What a capsule holds, for a series and a rarity. The Cast machine is the old one plus its Secrets; a season's machine
  // is mostly its own keychains, topped up with the Cast machine's prizes.
  function seriesPrize(sid, r) {
    const s = serById(sid) || SERIES[0];
    if (r === 'SEC') return seriesKey(s, 'SEC') || (s.id !== 'cast' && seriesKey(s, 'UR')) || capPrize('UR');
    if (s.id === 'cast' || r === 'C') return capPrize(r);
    const share = { R: 0.85, SR: 0.6, UR: 0.6 }[r];
    return (R() < share && seriesKey(s, r)) || (r === 'R' ? pick(CAP_R_ITEMS) : capPrize(r));
  }
  const capCan = (how, n = 1) => (how === 'ticket' ? tickets() >= n : S().yen >= CAP.price * n);
  // Why a turn can't be paid for ('' when it can): the ×10 buttons show it.
  const capWhy = (how, n = 1) => (capCan(how, n) ? '' : how === 'ticket' ? `Needs ${n} ticket${n === 1 ? '' : 's'} (${tickets()})` : `Needs ${yen(CAP.price * n - S().yen)} more`);
  /* One turn of a machine. how: 'yen' | 'ticket'; sid: a series on today ('cast' by default). Returns the prize (see grant) or null. */
  function pull(how = 'yen', sid = 'cast') { const x = pullN(how, sid, 1); return x ? x[0] : null; }
  /* n turns in a row, paid at once (×10 = 10× the price). Every turn rolls and counts pity on its own, so a ×10 always holds
     a Super Rare or better (CAP.pitySR is 10): that is the P5X-style guarantee, with no extra rule. Returns the prizes, or null. */
  function pullN(how = 'yen', sid = 'cast', n = 1) {
    if (!capCan(how, n)) return null;
    if (!activeSeries().some(s => s.id === sid)) sid = 'cast';
    if (how === 'ticket') { S().inventory.capsule_ticket -= n; if (!S().inventory.capsule_ticket) delete S().inventory.capsule_ticket; }
    else S().yen -= CAP.price * n;
    const g = gs(), out = [];
    const hid = hiddenOn();
    for (let i = 0; i < n; i++) {
      // A hidden charm first (header): its own roll, outside pity, so the counters neither move nor guarantee one.
      if (hid && R() < HIDDEN.rate) {
        const s = hiddenSeries(), nw = s.items.filter(x => !(g.skeys[x.id] > 0)), x = pick(nw.length ? nw : s.items);
        const prize = grant('HID', ['skey', x.id]); prize.r = 'HID'; prize.from = sid; prize.hidden = true;
        g.pulls += 1; g.last = { at: S().day, r: 'HID', name: prize.name, series: sid };
        out.push(prize); continue;
      }
      const r = rarity('cap', sid), prize = grant(r, seriesPrize(sid, r));
      prize.r = r; prize.from = sid;
      if (prize.kind === 'key') prize.complete = setDone(keySet(prize.id)) && !prize.dup;
      g.pulls += 1; g.last = { at: S().day, r, name: prize.name, series: sid };
      out.push(prize);
    }
    G.save();
    return out;
  }
  const pull10 = (how = 'yen', sid = 'cast') => pullN(how, sid, 10);
  const ORDER = ['C', 'R', 'SR', 'UR', 'SEC', 'HID'];
  const best = list => list.reduce((b, x) => (ORDER.indexOf(x.r) > ORDER.indexOf(b) ? x.r : b), 'C');
  function tradeStars() { const g = gs(); if (g.stars < CAP.starsPerTicket) return false; g.stars -= CAP.starsPerTicket; S().inventory.capsule_ticket = tickets() + 1; G.save(); return true; }
  /* The token shop: any missing keychain from a machine on today, for Capsule Tokens (TOKEN_PRICE by rarity; cast keychains
     are Rare). Only people she has met. */
  function shopList(d) {
    const g = gs(), out = [];
    activeSeries(d).forEach(s => {
      if (s.id === 'cast') SETS.flatMap(st => st.ids).filter(id => keyEligible(id) && !(g.keys[id] > 0)).forEach(id => out.push({ kind: 'key', id, name: `${keyName(id)} keychain`, r: 'R', price: TOKEN_PRICE.R, series: 'cast' }));
      s.items.filter(x => itemEligible(x) && !(g.skeys[x.id] > 0)).forEach(x => out.push({ kind: 'skey', id: x.id, name: `${x.name} keychain`, look: x.look, r: x.r, price: TOKEN_PRICE[x.r], series: s.id }));
    });
    return out;
  }
  function buy(kind, id) {
    const x = shopList().find(y => y.kind === kind && y.id === id), g = gs();
    if (!x || g.stars < x.price) return null;
    g.stars -= x.price;
    const prize = grant(x.r, [kind, id]); prize.r = x.r; prize.bought = true;
    if (prize.kind === 'key') prize.complete = setDone(keySet(prize.id));
    G.save();
    return prize;
  }

  /* Velvet Room. */
  const credit = () => { const l = G.perkOn('velvetCredit'); return l ? l[0].fx.velvetCredit : null; };
  const velCost = () => { const c = credit(); return { yen: Math.round(VEL.price * (1 - (c ? c.pct : 0) / 100)), plumes: Math.max(1, VEL.plumes - (c ? c.plumes : 0)), credit: !!c }; };
  const velCan = (how, n = 1) => (how === 'plumes' ? gs().plumes >= velCost().plumes * n : S().yen >= velCost().yen * n);
  const velWhy = (how, n = 1) => (velCan(how, n) ? '' : how === 'plumes' ? `Needs ${velCost().plumes * n} plumes (${gs().plumes})` : `Needs ${yen(velCost().yen * n - S().yen)} more`);
  const skillTier = () => Math.min(3, Math.floor((S().tartarus.bosses || []).length / 2));
  function velPrize(r) {
    const SK = B().SKILL_CARDS, t = skillTier();
    if (r === 'R') return R() < 0.8 ? ['skill', pick(SK[t])] : ['mat', 'velvet_thread', 1];
    if (r === 'SR') { const x = R(); return x < 0.45 ? ['skill', pick(SK[Math.min(3, t + 1)])] : x < 0.75 ? ['card', null, 4] : ['mat', 'velvet_thread', 3]; }
    const owned = k => (bsave().gear.owned[k] || 0) > 0 || S().gear.includes(k), gear = velGear().filter(k => !owned(k));
    if (gear.length && R() < 0.6) return ['gear', pick(gear)];
    return R() < 0.6 ? ['card', null, 5] : ['skill', pick(SK[3])];
  }
  /* One of Elizabeth's draws. how: 'yen' | 'plumes'. Returns the prize, or null. */
  function draw(how = 'yen') { const x = drawN(how, 1); return x ? x[0] : null; }
  /* n draws paid at once (×10 = 10× the price, Compendium Credit applies to each). Each counts pity (VEL.pitySR 5: a ×10
     holds at least two Super Rares or better). */
  function drawN(how = 'yen', n = 1) {
    if (!velCan(how, n)) return null;
    const c = velCost(), g = gs(), out = [];
    if (how === 'plumes') g.plumes -= c.plumes * n; else S().yen -= c.yen * n;
    for (let i = 0; i < n; i++) {
      const r = rarity('vel'), prize = grant(r, velPrize(r));
      g.draws += 1; g.last = { at: S().day, r, name: prize.name, velvet: true };
      out.push(prize);
    }
    G.save();
    return out;
  }
  const draw10 = (how = 'yen') => drawN(how, 10);
  const unclaimed = () => (S().registered || []).filter(id => !gs().credited.includes(id));
  function claim() { const g = gs(), n = unclaimed(); n.forEach(id => g.credited.push(id)); g.plumes += n.length; if (n.length) { G.toast('perk', `Velvet Plumes +${n.length} (Compendium pages)`); G.save(); } return n.length; }
  /* Plumes from the Dark Hour (core.js applyResult). */
  function afterFight(kind, outcome) {
    const n = kind === 'tartarus' && ['win', 'retreat'].includes(outcome) ? 1 : kind === 'operation' && outcome === 'win' ? 3 : 0;
    if (!n) return 0;
    gs().plumes += n; G.toast('perk', `Velvet Plume${n > 1 ? 's' : ''} +${n}`);
    return n;
  }

  /* ── Drawing things ── */
  const starsHtml = r => `<span class="g-ga-stars" aria-label="${RARITY[r].name}">${'★'.repeat(RARITY[r].stars)}</span>`;
  /* Fallback when a charm's art can't load: the 12 fighters' charms show their chibi victory pose (the last frame of Kat's brawl sheet, battle/art/chibi, cut but
     unused in the All-Out cloud); everyone else shows a portrait until their own keychain art exists. */
  const KEY_CHIBI = { solar: 5, akihiko: 5, yukari: 5, junpei: 5, mitsuru: 5, aigis: 5, koromaru: 5, shinjiro: 5, haechan: 7, jungwon: 5, jihoon: 5, minji: 5 };
  function keyFace(id) {
    if (KEY_CHIBI[id] != null) return `<img class="chibi" src="${G.base}assets/femc/battle/art/chibi/${id}-${KEY_CHIBI[id]}.webp" alt="">`;
    const src = G.portrait(id, 'happy') || G.portrait(id, 'neutral') || (id === 'solar' ? `${G.base}assets/femc/portraits/solar/happy.webp` : null);
    return src ? `<img src="${src}" alt="">` : `<b>${esc(keyName(id)[0] || '?')}</b>`;
  }
  /* Kat's acrylic charms (batch 45; tools/femc-keys.py -> game/art/keys/<id>.webp) replace the whole slot once owned. In
     October on the game's calendar they wear their Halloween costumes (<id>-halloween.webp). If a file fails, the img
     removes itself and the drawn charm below shows again. */
  const KEY_ART = new Set(SETS.flatMap(st => st.ids));
  const halloween = () => { try { return G.dateOf(S().day).getMonth() === 9; } catch (e) { return false; } };
  const keyArt = id => `${G.base}assets/femc/game/art/keys/${id}${halloween() ? '-halloween' : ''}.webp`;
  // An acrylic keychain: ring, chain, a round charm with the face, rimmed in the set's color (or Kat's charm art over it).
  function keychain(id, own = true) {
    const st = keySet(id), art = own && KEY_ART.has(id);
    return `<span class="g-key${own ? '' : ' lock'}${art ? ' art' : ''}" style="--c:${st.color}"><i class="g-key-ring"></i><i class="g-key-chain"></i><span class="g-key-face">${own ? keyFace(id) : '<b>?</b>'}</span>${art ? `<img class="g-key-art" src="${keyArt(id)}" alt="" onerror="this.parentNode.classList.remove('art');this.remove()">` : ''}</span>`;
  }
  /* A series keychain. Kat's charm (art/keys/series/<id>.webp, listed in art/ready.js) or, for a Halloween single, her
     costume charm; otherwise drawn: one face, or two (or a crowd) side by side on a wider charm in the series' colour. */
  const ready = () => window.FEMC_ART_READY || {};
  function skeyArt(x) {
    if ((ready().keys || []).includes(x.id)) return `${G.base}assets/femc/game/art/keys/series/${x.id}.webp`;
    if (x.id.startsWith('hw-') && x.who.length === 1 && KEY_ART.has(x.who[0])) return `${G.base}assets/femc/game/art/keys/${x.who[0]}-halloween.webp`;
    return null;
  }
  function skeychain(x, own = true) {
    const s = itemById(x.id)[1], art = own ? skeyArt(x) : null, many = x.who.length > 1;
    const faces = own ? x.who.slice(0, 3).map(id => `<span class="g-key-face">${keyFace(id)}</span>`).join('') : '<span class="g-key-face"><b>?</b></span>';
    return `<span class="g-key g-skey${own ? '' : ' lock'}${art ? ' art' : ''}${own && many ? ' pair' : ''}${x.r === 'SEC' ? ' sec' : ''}${x.r === 'HID' ? ' hid' : ''}" style="--c:${s.color}" data-r="${x.r}"><i class="g-key-ring"></i><i class="g-key-chain"></i><span class="g-skey-faces">${faces}</span>${art ? `<img class="g-key-art" src="${art}" alt="" onerror="this.parentNode.classList.remove('art');this.remove()">` : ''}</span>`;
  }
  /* A capsule good: Kat's art (ready.js `goods`) or the drawn one for its kind. */
  function goodArt(x, own = true) {
    const art = own && (ready().goods || []).includes(x.id) ? `${G.base}assets/femc/game/art/goods/${x.id}.webp` : null;
    const faces = own ? x.who.slice(0, x.kind === 'sticker' ? 6 : 1).map(id => `<span class="g-key-face">${keyFace(id)}</span>`).join('') : '<span class="g-key-face"><b>?</b></span>';
    return `<span class="g-good${own ? '' : ' lock'}${art ? ' art' : ''}" data-k="${x.kind}" data-r="${x.r}"><span class="g-good-in">${faces}</span>${art ? `<img class="g-key-art" src="${art}" alt="" onerror="this.parentNode.classList.remove('art');this.remove()">` : ''}</span>`;
  }
  function prizeArt(p) {
    if (p.kind === 'key') return keychain(p.id);
    if (p.kind === 'good') return goodArt(goodById(p.id));
    if (p.kind === 'skey') return skeychain(itemById(p.id)[0]);
    if (p.kind === 'case') return caseArt(p.id);
    const ICON = window.FemcIcons;
    // A Revelation card shows its face (Kat's set art; icons.js revCard); a full box (it turned to dust) keeps the plain back.
    if (p.kind === 'card') return p.card && ICON && ICON.revCard ? ICON.revCard(p.card, { cls: 'g-ga-revcard', base: G.base }) : `<span class="g-ga-cardart">✦</span>`;
    if (p.kind === 'skill') return ICON ? ICON.svg('star', '#6ab0ff', 'g-ga-ico') : '';
    return ICON ? ICON.of(p.id, 'g-ga-ico') : '';
  }
  function prizeCard(p) {
    return `<div class="g-ga-prize r-${p.r}" style="--rc:${RARITY[p.r].color}"><div class="g-ga-art">${prizeArt(p)}</div>
      <div class="g-ga-what">${starsHtml(p.r)}<small>${RARITY[p.r].name}</small><b>${esc(p.name)}</b><p>${esc(p.desc || '')}</p>
      ${p.dup ? `<p class="g-ga-dup">Already had one: +${p.stars} Capsule Token${p.stars === 1 ? '' : 's'}.</p>` : ''}${p.complete ? `<p class="g-ga-done">Set complete: ${esc(keySet(p.id).name)}!</p>` : ''}${p.reward ? `<p class="g-ga-done">${esc(p.reward)}</p>` : ''}</div></div>`;
  }
  const oddsHtml = odds => `<ul class="g-ga-odds">${Object.entries(odds).map(([k, v]) => `<li style="--rc:${RARITY[k].color}">${starsHtml(k)} ${RARITY[k].name} <b>${(v * 100).toFixed(v * 100 % 1 ? 1 : 0)}%</b></li>`).join('')}</ul>`;
  const SPARKS = n => Array.from({ length: n }, (_, i) => `<i style="--a:${Math.round(i * 360 / n)}deg;--d:${70 + (i % 3) * 22}px"></i>`).join('');
  let skip = false;
  /* The ×10 results grid: every prize as a small tile (the best ringed), tokens and series rewards under it; `fast` skips the
     tiles' pop-in (Skip, reduced motion). Shared by the capsule machines and the Velvet Room. */
  function gridHtml(list, fast) {
    const b = best(list), tokens = list.reduce((n, x) => n + (x.stars || 0), 0), rewards = list.map(x => x.reward).filter(Boolean);
    return `<div class="g-ga-grid${fast ? ' fast' : ''}" data-best="${b}">${list.map((x, i) => `<div class="g-ga-cell r-${x.r}${x.r === b ? ' best' : ''}" style="--rc:${RARITY[x.r].color};--i:${i}"><div class="g-ga-cell-art">${prizeArt(x)}</div>${starsHtml(x.r)}<b>${esc(x.name)}</b>${x.dup ? `<small class="g-ga-dup">+${x.stars} token${x.stars === 1 ? '' : 's'}</small>` : ['key', 'skey', 'good', 'case', 'gear'].includes(x.kind) ? '<small class="g-ga-done">New</small>' : ''}</div>`).join('')}</div>
      <p class="g-ga-sum">Best: <b style="color:${RARITY[b].color}">${RARITY[b].name}</b>${tokens ? ` · +${tokens} Capsule Tokens` : ''}</p>${rewards.map(t => `<p class="g-ga-done">${esc(t)}</p>`).join('')}`;
  }
  const btn10 = (attr, how, label, why) => `<button type="button" class="g-btn g-ga-x10" ${attr}="${how}"${why ? ` disabled title="${esc(why)}"` : ''}><span>${label}${why ? `<small>${esc(why)}</small>` : ''}</span></button>`;
  const wait = ms => new Promise(res => { const t0 = Date.now(); const tick = () => (skip || Date.now() - t0 >= ms ? res() : setTimeout(tick, 30)); tick(); });

  /* ── The capsule machine ── */
  function openCapsule(done) {
    gs();
    let busy = false, sid = 'cast', shop = false;
    const until = s => { if (s.always) return 'Always here'; const ms = s.months, m = monthOf(), last = (() => { let x = m; while (ms.includes(x % 12 + 1) && x % 12 + 1 !== m) x = x % 12 + 1; return x; })(); return `Here until the end of ${new Date(2009, last - 1, 1).toLocaleString('en', { month: 'long' })}`; };
    const o = UI().overlay(`<div class="g-ga g-cap"><div class="g-st-head"><h2>Capsule Corner<small>Paulownia Mall</small></h2><button type="button" class="g-btn small" data-close>Leave</button></div>
      <p class="g-shop-say g-ga-say">${esc(LINES.capHi[S().day % LINES.capHi.length])}</p>
      <div class="g-cap-pick" role="tablist"></div>
      <div class="g-cap-stage">
        <div class="g-cap-machine" aria-hidden="true">
          <div class="g-cap-rays"></div>
          <div class="g-cap-dome">${Array.from({ length: 14 }, (_, i) => `<i class="g-cap-ball" style="--x:${8 + (i * 37) % 78}%;--y:${30 + (i * 23) % 56}%;--h:${['#ff8cc0', '#6ab0ff', '#f7f2f5', '#c58bff', '#7dffc0', '#ffd36b'][i % 6]};--t:${(i % 5) * .07}s"></i>`).join('')}</div>
          <div class="g-cap-body"><span class="g-cap-label">KEYCHAINS<br>&amp; MORE</span><span class="g-cap-slot"></span><button type="button" class="g-cap-handle" tabindex="-1" aria-hidden="true"><i></i></button><span class="g-cap-chute"></span></div>
          <div class="g-cap-drop"><span class="g-cap-capsule"><i class="top"></i><i class="bot"></i></span><span class="g-cap-spark">${SPARKS(12)}</span></div>
        </div>
        <div class="g-cap-side"><div class="g-ga-result" aria-live="polite"></div><div class="g-ga-info"></div></div>
      </div>
      <div class="g-row g-ga-btns"></div></div>`, 'g-ga-ov g-cap-ov', () => { skip = true; done?.(); });
    const $ = q => o.el.querySelector(q);
    const paint = () => {
      const g = gs(), p = seriesPity(sid), on = activeSeries(), s = serById(sid);
      $('.g-cap-pick').innerHTML = on.map(x => `<button type="button" role="tab" class="g-cap-ser${x.id === sid ? ' on' : ''}" data-series="${x.id}" style="--c:${x.color}" aria-selected="${x.id === sid}"${busy ? ' disabled' : ''}><b>${esc(x.name)}</b><small>${esc(until(x))}</small></button>`).join('');
      $('.g-cap-machine').style.setProperty('--mc', s.color);
      $('.g-cap-label').innerHTML = s.id === 'cast' ? 'KEYCHAINS<br>&amp; MORE' : esc(s.name.replace(/ Series$/, '').toUpperCase()) + '<br>SERIES';
      const have = s.items.filter(x => g.skeys[x.id] > 0).length + (s.id === 'cast' ? SETS.reduce((n, st) => n + setCount(st), 0) : 0), all = s.items.length + (s.id === 'cast' ? SETS.reduce((n, st) => n + st.ids.length, 0) : 0);
      $('.g-ga-info').innerHTML = shop ? shopHtml() : `<p class="g-note small g-cap-blurb">${esc(s.blurb)} <b>${have}/${all}</b> collected${g.done.includes(s.id) ? ' · complete' : ''}.</p>${oddsHtml(CAP.odds)}
        <p class="g-ga-pity">Super Rare or better within <b>${CAP.pitySR - p.sr}</b> turn${CAP.pitySR - p.sr === 1 ? '' : 's'} · an Ultra within <b>${CAP.pityUR - p.ur}</b> (this machine).</p>
        <p class="g-ga-own"><span>Tickets <b>${tickets()}</b></span><span>Capsule Tokens <b>${g.stars}</b></span><span>Turns <b>${g.pulls}</b></span></p>
        <p class="g-note small">Repeats turn into Capsule Tokens: ten for a ticket, or buy a missing keychain in the token shop. Tickets drop in Tartarus and from Shuffle Time.</p>`;
      $('.g-ga-btns').innerHTML = `<button type="button" class="g-btn pink" data-pull="yen"${capCan('yen') && !busy ? '' : ' disabled'}><span>Turn · ${yen(CAP.price)}</span></button>
        <button type="button" class="g-btn" data-pull="ticket"${capCan('ticket') && !busy ? '' : ' disabled'}><span>Use a ticket (${tickets()})</span></button>
        ${btn10('data-pull10', 'yen', `×10 · ${yen(CAP.price * 10)}`, busy ? 'Busy' : capWhy('yen', 10))}
        ${tickets() >= 10 ? btn10('data-pull10', 'ticket', '×10 · 10 tickets', busy ? 'Busy' : '') : ''}
        <button type="button" class="g-btn small" data-shop${busy ? ' disabled' : ''}><span>${shop ? 'Back to the machine' : 'Token shop'}</span></button>
        ${g.stars >= CAP.starsPerTicket ? `<button type="button" class="g-btn small" data-trade${busy ? ' disabled' : ''}><span>Trade ${CAP.starsPerTicket} tokens for a ticket</span></button>` : ''}
        <span class="g-yen g-ga-yen">${yen(S().yen)}</span>`;
      o.el.querySelectorAll('[data-pull]').forEach(b => b.addEventListener('click', () => turn(b.dataset.pull)));
      o.el.querySelectorAll('[data-pull10]').forEach(b => b.addEventListener('click', () => turn10(b.dataset.pull10)));
      o.el.querySelectorAll('[data-series]').forEach(b => b.addEventListener('click', () => { if (busy) return; sid = b.dataset.series; shop = false; $('.g-ga-result').innerHTML = ''; G.sfx('femc-click'); paint(); }));
      $('[data-shop]').addEventListener('click', () => { shop = !shop; G.sfx('femc-click'); paint(); });
      o.el.querySelectorAll('[data-buy]').forEach(b => b.addEventListener('click', () => {
        const [k, id] = b.dataset.buy.split(':'), prize = buy(k, id); if (!prize) return;
        G.sfx(RARITY[prize.r].sfx); $('.g-ga-result').innerHTML = prizeCard(prize); $('.g-ga-say').textContent = 'The attendant swaps the tokens for a sealed capsule. No luck needed.'; paint();
      }));
      $('[data-trade]')?.addEventListener('click', () => { if (tradeStars()) { G.sfx('femc-rankup'); $('.g-ga-say').textContent = 'The machine spits out a fresh ticket.'; paint(); } });
      UI().paintHud?.();
    };
    function shopHtml() {
      const g = gs(), list = shopList();
      return `<p class="g-ga-own"><span>Capsule Tokens <b>${g.stars}</b></span></p>
        ${list.length ? `<ul class="g-cap-shop">${list.map(x => `<li style="--rc:${RARITY[x.r].color}"><span>${starsHtml(x.r)}<b>${esc(x.name)}</b>${x.look ? `<small>${esc(x.look)}</small>` : ''}</span><button type="button" class="g-btn small" data-buy="${x.kind}:${x.id}"${g.stars >= x.price && !busy ? '' : ' disabled'}><span>${x.price} tokens</span></button></li>`).join('')}</ul>` : '<p class="g-note">Nothing missing from today’s machines. Check back next season.</p>'}
        <p class="g-note small">Any keychain you’re missing from a machine that’s here today. Only people Solar has met.</p>`;
    }
    // The machine's reveal for a rarity: turn, drop, pop (reduced motion: the sound only). Skippable (stage click, Skip).
    async function reveal(r) {
      const m = $('.g-cap-machine');
      m.className = 'g-cap-machine'; m.dataset.r = r; m.style.setProperty('--rc', RARITY[r].color);
      o.el.querySelector('.g-cap-stage').addEventListener('click', () => { skip = true; }, { once: true });
      G.sfx('femc-click');
      if (!reduced() && !skip) {
        void m.offsetWidth; m.classList.add('turn'); await wait(r === 'SEC' || r === 'HID' ? 1300 : 950);
        G.sfx(r === 'SEC' || r === 'HID' ? 'femc-darkhour' : 'femc-hover'); m.classList.add('drop'); await wait(r === 'C' || r === 'R' ? 800 : 1100);
        m.classList.add('pop'); G.sfx(RARITY[r].sfx); await wait(r === 'UR' || r === 'SEC' ? 900 : r === 'HID' ? 1500 : 650);
      } else G.sfx(RARITY[r].sfx);
      m.classList.add('shown', `r-${r}`);
    }
    /* Ten turns: one reveal for the best capsule, then the grid. */
    async function turn10(how) {
      if (busy || !capCan(how, 10)) return;
      busy = true; skip = false; shop = false; o.el.dataset.locked = '1';
      const list = pull10(how, sid);
      if (!list) { busy = false; delete o.el.dataset.locked; return paint(); }
      paint();
      const res = $('.g-ga-result'), r = best(list);
      res.innerHTML = '<button type="button" class="g-btn small g-ga-skip" data-skip><span>Skip</span></button>';
      res.querySelector('[data-skip]').addEventListener('click', e => { e.stopPropagation(); skip = true; });
      await reveal(r);
      res.innerHTML = gridHtml(list, skip || reduced());
      $('.g-ga-say').textContent = `Ten capsules tumble out, one after another. The best is ${RARITY[r].name}.`;
      busy = false; delete o.el.dataset.locked; paint();
      o.el.querySelector('[data-pull10]:not([disabled]), [data-pull]:not([disabled])')?.focus({ preventScroll: true });
    }
    async function turn(how) {
      if (busy || !capCan(how)) return;
      busy = true; skip = false; shop = false; o.el.dataset.locked = '1';
      const prize = pull(how, sid);
      if (!prize) { busy = false; delete o.el.dataset.locked; return paint(); }
      paint();
      const res = $('.g-ga-result');
      res.innerHTML = '';
      await reveal(prize.r);
      res.innerHTML = prizeCard(prize);
      $('.g-ga-say').textContent = prize.r === 'HID' ? 'Everything goes quiet. A sun and a moon flash across the dome, and a capsule nobody has ever seen rolls out, warm in her hand.' : prize.r === 'SEC' ? 'The lights flicker. A capsule nobody has seen before rolls out, shimmering every colour at once.' : prize.r === 'UR' ? 'The whole machine lights up gold. People turn to look.' : prize.r === 'SR' ? 'A purple capsule. That’s a good one.' : prize.dup ? 'One she already has. Still cute.' : 'Pop. Something small and new.';
      busy = false; delete o.el.dataset.locked; paint();
      o.el.querySelector('[data-pull]:not([disabled])')?.focus({ preventScroll: true });
    }
    paint();
    return o;
  }
  /* ── The Velvet Room ── */
  function openVelvet(done) {
    gs();
    let busy = false;
    const bg = G.background('The Velvet Room', 'Daytime'), pic = G.portrait('elizabeth', 'happy');
    const o = UI().overlay(`<div class="g-ga g-vel"${bg ? ` style="--pic:url('${bg}')"` : ''}><div class="g-st-head"><h2>The Velvet Room<small>Elizabeth’s cards</small></h2><button type="button" class="g-btn small" data-close>Leave</button></div>
      <div class="g-shop-top">${pic ? `<img src="${pic}" alt="">` : ''}<p class="g-shop-say g-ga-say">${esc(LINES.velHi[S().day % LINES.velHi.length])}</p></div>
      <div class="g-vel-table" aria-live="polite"></div><div class="g-ga-result" aria-live="polite"></div><div class="g-ga-info"></div>
      <div class="g-row g-ga-btns"></div></div>`, 'g-ga-ov g-vel-ov', () => { skip = true; done?.(); });
    const $ = q => o.el.querySelector(q);
    const say = t => { $('.g-ga-say').textContent = t; };
    const paint = () => {
      const g = gs(), p = g.pity.vel, c = velCost(), n = unclaimed().length;
      $('.g-ga-info').innerHTML = `${oddsHtml(VEL.odds)}
        <p class="g-ga-pity">Super Rare or better within <b>${VEL.pitySR - p.sr}</b> draw${VEL.pitySR - p.sr === 1 ? '' : 's'} · an Ultra within <b>${VEL.pityUR - p.ur}</b>.</p>
        <p class="g-ga-own"><span>Velvet Plumes <b>${g.plumes}</b></span><span>Draws <b>${g.draws}</b></span>${c.credit ? '<span class="g-ga-credit">Compendium Credit: 25% off, one plume less</span>' : ''}</p>
        <p class="g-note small">Plumes: one for every Tartarus night, three for a full moon won, one for every new Compendium page.</p>`;
      $('.g-ga-btns').innerHTML = `<button type="button" class="g-btn pink" data-draw="yen"${velCan('yen') && !busy ? '' : ' disabled'}><span>Draw · ${yen(c.yen)}${c.credit ? ` <s>${yen(VEL.price)}</s>` : ''}</span></button>
        <button type="button" class="g-btn" data-draw="plumes"${velCan('plumes') && !busy ? '' : ' disabled'}><span>Draw · ${c.plumes} Plume${c.plumes === 1 ? '' : 's'}</span></button>
        ${btn10('data-draw10', 'yen', `×10 · ${yen(c.yen * 10)}`, busy ? 'Busy' : velWhy('yen', 10))}
        ${btn10('data-draw10', 'plumes', `×10 · ${c.plumes * 10} Plumes`, busy ? 'Busy' : velWhy('plumes', 10))}
        ${n ? `<button type="button" class="g-btn small" data-claim${busy ? ' disabled' : ''}><span>Show her the Compendium (+${n})</span></button>` : ''}
        <span class="g-yen g-ga-yen">${yen(S().yen)}</span>`;
      o.el.querySelectorAll('[data-draw]').forEach(b => b.addEventListener('click', () => deal(b.dataset.draw)));
      o.el.querySelectorAll('[data-draw10]').forEach(b => b.addEventListener('click', () => deal10(b.dataset.draw10)));
      $('[data-claim]')?.addEventListener('click', () => { if (claim()) { G.sfx('femc-rankup'); say(LINES.velClaim[0]); paint(); } });
    };
    /* Ten draws: Elizabeth turns over the best card, then the grid (no picking: she deals the ten herself). */
    async function deal10(how) {
      if (busy) return;
      if (!velCan(how, 10)) { say(LINES.velBroke[0]); return; }
      busy = true; skip = false; o.el.dataset.locked = '1';
      const list = draw10(how);
      if (!list) { busy = false; delete o.el.dataset.locked; return paint(); }
      paint();
      const table = $('.g-vel-table'), res = $('.g-ga-result'), r = best(list);
      res.innerHTML = '<button type="button" class="g-btn small g-ga-skip" data-skip><span>Skip</span></button>';
      res.querySelector('[data-skip]').addEventListener('click', () => { skip = true; });
      table.innerHTML = `<div class="g-vel-hand${reduced() ? ' calm' : ''}"><span class="g-vel-card chosen" style="--i:1"><span class="in"><span class="back"><i></i></span><span class="face"><span class="g-vel-face r-${r}" style="--rc:${RARITY[r].color}">${starsHtml(r)}<b>${esc(RARITY[r].name)}</b></span></span></span></span></div>`;
      say('Elizabeth deals ten cards in one sweep and turns over the best of them.');
      G.sfx('femc-hover');
      await wait(reduced() ? 60 : 450);
      table.querySelector('.g-vel-card').classList.add('up', `r-${r}`); G.sfx(RARITY[r].sfx);
      await wait(reduced() ? 60 : 700);
      res.innerHTML = gridHtml(list, skip || reduced());
      say(pick(LINES.velPick));
      busy = false; delete o.el.dataset.locked; paint();
    }
    async function deal(how) {
      if (busy) return;
      if (!velCan(how)) { say(LINES.velBroke[0]); return; }
      busy = true; skip = false; paint();
      const table = $('.g-vel-table');
      $('.g-ga-result').innerHTML = '';
      table.innerHTML = `<div class="g-vel-hand${reduced() ? ' calm' : ''}">${[0, 1, 2].map(i => `<button type="button" class="g-vel-card" data-i="${i}" style="--i:${i}" aria-label="Card ${i + 1}"><span class="in"><span class="back"><i></i></span><span class="face"></span></span></button>`).join('')}</div><p class="g-note small">Pick a card.</p>`;
      say('Elizabeth fans three cards across the table, face down.');
      G.sfx('femc-hover');
      const cards = [...table.querySelectorAll('.g-vel-card')];
      setTimeout(() => cards[1].focus({ preventScroll: true }), 40);
      cards.forEach(cd => cd.addEventListener('click', async () => {
        if (cd.dataset.done || table.dataset.picked) return;
        table.dataset.picked = '1';
        o.el.dataset.locked = '1';
        const prize = draw(how);
        if (!prize) { busy = false; delete o.el.dataset.locked; table.innerHTML = ''; return paint(); }
        cd.querySelector('.face').innerHTML = `<span class="g-vel-face r-${prize.r}" style="--rc:${RARITY[prize.r].color}">${starsHtml(prize.r)}<b>${esc(RARITY[prize.r].name)}</b></span>`;
        cards.forEach(x => x.classList.toggle('other', x !== cd));
        cd.classList.add('chosen'); G.sfx('femc-click');
        await wait(reduced() ? 60 : 380);
        cd.classList.add('up', `r-${prize.r}`); G.sfx(prize.r === 'R' ? 'femc-note' : 'femc-rankup');
        await wait(reduced() ? 60 : 650);
        $('.g-ga-result').innerHTML = prizeCard(prize);
        say(pick(LINES.velPick));
        delete table.dataset.picked; table.querySelector('.g-note')?.remove();
        busy = false; delete o.el.dataset.locked; paint();
      }));
    }
    paint();
    return o;
  }

  /* ── The viewer (header) ── */
  // An owned tile opens it; a locked one has no hook at all.
  const vw = (own, kind, id, name) => (own ? ` data-view="${kind}:${id}" tabindex="0" role="button" aria-label="View ${esc(name)}"` : '');
  const fmtDay = d => { try { return G.dateOf(d).toLocaleString('en', { month: 'long', day: 'numeric' }); } catch (e) { return ''; } };
  // Kat's art file at full size (the drawn charm, zoomed, if the file fails), or the drawn one.
  const bigArt = (src, drawn) => (src ? `<img class="g-view-img" src="${src}" alt="" onerror="this.nextElementSibling.hidden=false;this.remove()"><span class="g-view-drawn" hidden>${drawn}</span>` : `<span class="g-view-drawn">${drawn}</span>`);
  function gotLine(key, how, n) {
    const d = gs().got[key];
    return `${how}${d != null ? `, ${fmtDay(d)}` : ''}${n > 1 ? ` · ×${n} (repeats became tokens)` : ''}.`;
  }
  /* One Collection tile as a viewer entry ('key:<id>', 'skey:<id>', 'good:<id>', 'case:<id>'). */
  function viewEntry(tok) {
    const g = gs(), [kind, id] = [tok.slice(0, tok.indexOf(':')), tok.slice(tok.indexOf(':') + 1)];
    const rr = r => ({ name: RARITY[r].name, color: RARITY[r].color, stars: RARITY[r].stars });
    if (kind === 'key') {
      const st = keySet(id);
      return { name: `${keyName(id)} keychain`, r: rr('R'), series: `${st.name} keychains`, flavour: halloween() ? 'An acrylic charm, in costume for October.' : 'An acrylic charm on a little silver chain.',
        art: bigArt(KEY_ART.has(id) ? keyArt(id) : null, keychain(id)), got: gotLine(tok, 'From the Cast machine', g.keys[id]) };
    }
    if (kind === 'skey') {
      const [x, s] = itemById(id);
      return { name: x.name, r: rr(x.r), series: s.name, flavour: x.look[0].toUpperCase() + x.look.slice(1) + '.', art: bigArt(skeyArt(x), skeychain(x)),
        got: gotLine(tok, s.hidden ? 'A hidden charm, out of a capsule machine' : s.id === 'cast' ? 'From the Cast machine' : `From the ${s.name} machine`, g.skeys[id]) };
    }
    if (kind === 'good') {
      const x = goodById(id), art = (ready().goods || []).includes(id) ? `${G.base}assets/femc/game/art/goods/${id}.webp` : null;
      return { name: x.name, r: rr(x.r), series: `Capsule goods · ${GOOD_KINDS[x.kind]}`, flavour: x.look[0].toUpperCase() + x.look.slice(1) + '.', art: bigArt(art, goodArt(x)), got: gotLine(tok, 'From the Cast machine', g.goods[id]) };
    }
    const c = CASES.find(x => x.id === id);
    return { name: c.name, r: rr(c.r), series: 'Phone cases', flavour: c.desc, art: bigArt(`${G.base}assets/femc/game/art/cases/${id}.webp`, `<span class="g-case-art" data-case="${id}"><i></i></span>`),
      got: gotLine(tok, g.caseOn === id ? 'From the Cast machine · on her phone now' : 'From the Cast machine') };
  }
  /* The viewer itself. entries: [{ name, r: { name, color, stars }, series, flavour, got, art (html) }]. Returns { el, go, close, at }. */
  function viewer(list, at = 0) {
    const U = UI(); if (!U || !list || !list.length) return null;
    let i = Math.max(0, Math.min(at | 0, list.length - 1));
    const body = () => { const x = list[i]; return `<div class="g-view" style="--rc:${x.r.color}" data-view-i="${i}">
      <button type="button" class="g-view-x" data-close aria-label="Close">×</button>
      <div class="g-view-art">${x.art}</div>
      <div class="g-view-info"><span class="g-ga-stars" style="--rc:${x.r.color}" aria-label="${esc(x.r.name)}">${'★'.repeat(x.r.stars)}</span><small>${esc(x.r.name)}${x.series ? ` · ${esc(x.series)}` : ''}</small>
        <h3>${esc(x.name)}</h3>${x.flavour ? `<p>${esc(x.flavour)}</p>` : ''}${x.got ? `<p class="g-view-got">${esc(x.got)}</p>` : ''}</div>
      ${list.length > 1 ? `<div class="g-view-nav"><button type="button" class="g-btn small" data-view-go="-1" aria-label="Previous"><span>‹</span></button><span>${i + 1} / ${list.length}</span><button type="button" class="g-btn small" data-view-go="1" aria-label="Next"><span>›</span></button></div>` : ''}</div>`; };
    const key = e => {
      if (o.el.classList.contains('out') || o.el !== [...document.querySelectorAll('.g-overlay')].pop()) return;
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); e.stopPropagation(); go(d); }
    };
    const o = U.overlay(body(), 'g-view-ov', () => document.removeEventListener('keydown', key, true));
    const panel = o.el.querySelector('.g-panel');
    panel.tabIndex = -1; panel.style.setProperty('--rc', list[i].r.color);
    function go(d) {
      if (list.length < 2) return i;
      i = (i + d + list.length) % list.length; panel.innerHTML = body(); panel.style.setProperty('--rc', list[i].r.color); G.sfx('femc-hover');
      panel.querySelector(`[data-view-go="${d > 0 ? 1 : -1}"]`)?.focus({ preventScroll: true });
      return i;
    }
    document.addEventListener('keydown', key, true);
    panel.addEventListener('click', e => { const b = e.target.closest('[data-view-go]'); if (b) go(+b.dataset.viewGo); });
    // A swipe (finger or a mouse drag) sideways steps; mostly-vertical movement is left to scrolling.
    let p0 = null;
    panel.addEventListener('pointerdown', e => { p0 = { x: e.clientX, y: e.clientY }; });
    panel.addEventListener('pointerup', e => { if (!p0) return; const dx = e.clientX - p0.x, dy = e.clientY - p0.y; p0 = null; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) go(dx < 0 ? 1 : -1); });
    panel.addEventListener('pointercancel', () => { p0 = null; });
    G.sfx('femc-click');
    return { el: o.el, go, close: o.close, at: () => i };
  }

  /* ── Menu → Collection (menu.js calls these) ── */
  function collectionHtml() {
    const g = gs();
    const sets = SETS.map(st => {
      const n = setCount(st);
      return `<section class="g-col-set" style="--c:${st.color}"><h3>${esc(st.name)} <small>${n}/${st.ids.length}${n === st.ids.length ? ' · complete' : ''}</small></h3>
        <ul class="g-keys">${st.ids.map(id => { const own = g.keys[id] > 0, known = keyEligible(id); return `<li class="${own ? 'own' : ''}"${vw(own, 'key', id, keyName(id))} title="${own ? esc(keyName(id)) + (g.keys[id] > 1 ? ` ×${g.keys[id]}` : '') : known ? 'Not yet' : '???'}">${keychain(id, own)}<small>${own || known ? esc(keyName(id)) : '???'}</small></li>`; }).join('')}</ul></section>`;
    }).join('');
    const cases = CASES.map(c => { const own = g.cases.includes(c.id), on = g.caseOn === c.id; return `<li class="g-col-caseli">${own ? `<button type="button" class="g-view-zoom" data-view="case:${c.id}" aria-label="View ${esc(c.name)}" title="View">⤢</button>` : ''}<button type="button" class="g-col-case${on ? ' on' : ''}" data-case-pick="${own ? c.id : ''}"${own ? '' : ' disabled'}>${own ? caseArt(c.id) : '<span class="g-case-art" data-case="none"><i></i></span>'}<b>${own ? esc(c.name) : '???'}</b><small>${own ? (on ? 'On her phone' : 'Put it on') : RARITY[c.r].name}</small></button></li>`; }).join('');
    const on = activeSeries().map(s => s.id), MON = m => new Date(2009, m - 1, 1).toLocaleString('en', { month: 'short' });
    const series = SERIES.filter(s => !s.hidden).map(s => {
      const n = itemCount(s), C = window.FemcCosmetics, rw = C && s.reward ? C.byId(s.reward) : null;
      const when = s.always ? 'always in the Corner' : on.includes(s.id) ? 'in the Corner now' : s.needs && !seriesOpen(s) ? 'not in the Corner yet' : `in the Corner ${s.months.map(MON).join(', ')}`;
      return `<section class="g-col-set g-col-series" style="--c:${s.color}"><h3>${esc(s.id === 'cast' ? 'Cast Secrets' : s.name)} <small>${n}/${s.items.length}${g.done.includes(s.id) ? ' · complete' : ''} · ${when}</small></h3>
        <ul class="g-keys g-skeys">${s.items.map(x => { const own = g.skeys[x.id] > 0, known = itemEligible(x); return `<li class="${own ? 'own' : ''}"${vw(own, 'skey', x.id, x.name)} title="${own ? esc(x.name + ' · ' + x.look) + (g.skeys[x.id] > 1 ? ` ×${g.skeys[x.id]}` : '') : known ? esc(RARITY[x.r].name) : '???'}">${skeychain(x, own)}<small>${own || (known && x.r !== 'SEC') ? esc(x.name) : '???'}</small></li>`; }).join('')}</ul>
        ${rw ? `<p class="g-note small">Complete it: three Capsule Tickets and ${esc(rw.name)} (${esc(C.KINDS[rw.kind].name)}).</p>` : ''}</section>`;
    }).join('');
    // Hidden charms: ??? until found, a sun-and-moon mark; the section shows once they can drop (or one is owned).
    const hs = hiddenSeries(), hn = itemCount(hs);
    const hidden = hiddenOn() || hn ? `<section class="g-col-set g-col-series g-col-hidden" style="--c:${hs.color}"><h3>☀☾ ${esc(hs.name)} <small>${hn}/${hs.items.length}${g.done.includes(hs.id) ? ' · complete' : ''} · any machine, very rarely</small></h3>
        <ul class="g-keys g-skeys">${hs.items.map(x => { const own = g.skeys[x.id] > 0; return `<li class="${own ? 'own' : ''}"${vw(own, 'skey', x.id, x.name)} title="${own ? esc(x.name + ' · ' + x.look) : '???'}">${skeychain(x, own)}<small>${own ? esc(x.name) : '???'}</small></li>`; }).join('')}</ul></section>` : '';
    const gk = Object.keys(GOOD_KINDS), goods = `<section class="g-col-set g-col-goods"><h3>Capsule goods <small>${GOODS.filter(x => g.goods[x.id] > 0).length}/${GOODS.length}</small></h3>
        <ul class="g-goods">${GOODS.slice().sort((a, b) => gk.indexOf(a.kind) - gk.indexOf(b.kind)).map(x => { const own = g.goods[x.id] > 0, known = itemEligible(x); return `<li class="${own ? 'own' : ''}"${vw(own, 'good', x.id, x.name)} title="${own ? esc(x.name + ' · ' + x.look) + (g.goods[x.id] > 1 ? ` ×${g.goods[x.id]}` : '') : known ? esc(GOOD_KINDS[x.kind]) : '???'}">${goodArt(x, own)}<small>${own || known ? esc(x.name) : '???'}</small></li>`; }).join('')}</ul></section>`;
    return `<p class="g-note">Keychains and phone cases from the capsule machines at Paulownia Mall. A season’s machine stands beside the Cast machine for a few months at a time. Elizabeth’s Velvet Room is down the same hall.</p>
      <div class="g-col-stats"><span>Capsule turns <b>${g.pulls}</b></span><span>Tickets <b>${tickets()}</b></span><span>Capsule Tokens <b>${g.stars}</b></span><span>Velvet draws <b>${g.draws}</b></span><span>Velvet Plumes <b>${g.plumes}</b></span></div>
      ${sets}${series}${hidden}${goods}<section class="g-col-set"><h3>Phone cases <small>${g.cases.length}/${CASES.length}</small></h3><ul class="g-col-cases">${cases}${g.caseOn ? '<li><button type="button" class="g-col-case" data-case-pick="off"><span class="g-case-art" data-case="none"><i></i></span><b>Plain</b><small>Take it off</small></button></li>' : ''}</ul></section>`;
  }
  function wireCollection(el, rerender) {
    const tiles = () => [...el.querySelectorAll('[data-view]')];
    const openAt = t => { const ts = tiles(); viewer(ts.map(x => viewEntry(x.dataset.view)), ts.indexOf(t)); };
    tiles().forEach(t => {
      t.addEventListener('click', e => { e.stopPropagation(); openAt(t); });
      if (t.tagName !== 'BUTTON') t.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); openAt(t); } });
    });
    el.querySelectorAll('[data-case-pick]').forEach(b => b.addEventListener('click', () => {
      const id = b.dataset.casePick; if (!id) return;
      gs().caseOn = id === 'off' ? null : id; G.save(); G.sfx('femc-click'); rerender(`[data-case-pick="${id}"]`);
    }));
  }
  const phoneCase = () => (S().gacha && S().gacha.caseOn) || null;
  /* From the Go Out list (ui.js doActivity). */
  function open(kind, done) { return kind === 'velvet' ? openVelvet(done) : openCapsule(done); }

  return Object.assign(api, { pullN, pull10, drawN, draw10, best, capCan, velCan, capWhy, velWhy, gridHtml, RARITY, CAP, VEL, SETS, CASES, SERIES, TOKEN_PRICE, fresh, gs, pull, draw, claim, unclaimed, tradeStars, afterFight, velCost, rarity, setCount, setDone, keyEligible, tickets, open, openCapsule, openVelvet, collectionHtml, wireCollection, phoneCase, keychain, skeychain, halloween,
    activeSeries, seriesPity, seriesDone, itemEligible, itemById, shopList, buy, completeSeries, GOODS, GOOD_KINDS, HIDDEN, hiddenOn, goodArt, viewer, viewEntry, bigArt, fmtDay });
})();
