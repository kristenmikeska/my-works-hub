/* Gifts (P5X-style, Kat's decisions 2026-11-02). Main game only; the epilogue worlds never see any of this.
   Solar buys gifts in shops around the city; they wait in her bag (S.life.bag) until a hangout. At the start of a link's rank
   scene or hangout (ui.js playLink → the scene's { giftAsk } line, scene.js), if she carries any, "Give a gift?" comes up; skipping
   is always fine. Giving plays that person's reaction, adds its ♪ to the scene's (so the meter, overflow and MAX rules in
   core.js finishLink apply: at MAX, or at rank 10+ while the next rank isn't open, the reaction plays and no ♪ is added), files
   the gift on their contact card (core.js noteGift) and, the first time a special gift is given, plays its special.

   This file: the catalog, the shops and the points. Who likes what and every reaction: data/gifts-links-1..4.js.

   FEMC_GAME_GIFTS = {
     points: { loved, liked, meh, no }            ♪ for each reaction tier ('meh' = neutral, 'no' = disliked)
     shops: { <shop id>: { area, spot, name, sub, about, slots, schoolOnly?, hi: [lines], buy: [lines] } }
                                                  gift-only shops; each becomes a Go Out activity { shop: <id> } and an entry in
                                                  FEMC_GAME_PLACES.shops ({ area, gifts: true }) when this file loads. Gifts can
                                                  also sit in an existing shop (bebluev, mayoido, aohige): its gifts are listed
                                                  after its battle stock.
     items: { <gift id>: { name, short, kind, desc, price, shop } }
                                                  name: the shop row; short: how it's said in a line ('the sunflowers', used for
                                                  {gift} in reactions); kind: the little tag on the row (Flowers, Snack, Music…)
     links: { <link id>: {                        (filled by gifts-links-*.js)
       loved: [ids], liked: [ids], no: [ids],     every other gift is 'meh' (a polite reaction)
       say: {
         <gift id>: [lines],                      that gift's own reaction (every loved gift has one; liked / no may)
         loved: [[lines], …], liked: [[lines], …], meh: [[lines], …], no: [[lines], …]
                                                  generic variants per tier, taken in turn ({gift} = the item's short)
       },
       special: { <loved gift id>: [lines] }      once a playthrough, right after that gift's reaction: a short scene, a text
                                                  thread ({ later: { msgs, delay } }) or a keepsake back ({ gift: { from,
                                                  keepsake, note } }, kept on the Items page as a Keepsake)
     } }
   }
   Lines are ordinary scene lines (scene.js): { s, f, t }, { n }, { later }, { gift }, { stat }. */
window.FEMC_GAME_GIFTS = (() => {
  const G = window.FEMC_GAME_GIFTS || {};
  G.points = { loved: 4, liked: 2, meh: 1, no: 0 };
  G.links = G.links || {};
  G.shops = {
    'g-flowers': { area: 'mall', spot: 'Flower Stall', name: 'Hanamizuki Flowers', sub: 'Cut flowers and small plants', icon: 'leaf', slots: ['after', 'evening'],
      about: 'A flower stall under the mall escalator, buckets out front, everything wrapped in brown paper and a ribbon if you ask.',
      hi: ['Somebody special? Don’t tell me. I can always tell by the ribbon they pick.', 'The sunflowers came in this morning. They won’t last the week, so neither should your nerve.'],
      buy: ['There. Hold them stems down on the train.', 'Good choice. Flowers say it so you don’t have to.'] },
    'g-records': { area: 'mall', spot: 'Record Shop', name: 'Tower Bell Records', sub: 'Vinyl, CDs and a listening booth', icon: 'mic', slots: ['after', 'evening'],
      about: 'Crates of used vinyl, a wall of new CDs and a listening booth with one working pair of headphones.',
      hi: ['Browse all you like. The booth’s free, just don’t cry in it, it fogs the glass.', 'If you’re buying for someone, tell me what they hate. That’s more useful.'],
      buy: ['Sleeve’s in good shape. Somebody took care of it.', 'Nice. That one gets better on the third listen.'] },
    'g-prizes': { area: 'mall', spot: 'Game Panic', name: 'Game Panic Prize Counter', sub: 'Prizes, plushies, games', icon: 'game', slots: ['after', 'evening'],
      about: 'The prize counter at the back of the arcade. Most of it can be won; all of it can be bought, if you have no pride.',
      hi: ['You could win it. Or you could just pay. Nobody here is judging. Well. Some of us are.', 'New cartridges came in. The co-op one is sold out everywhere but here.'],
      buy: ['Bagged. Don’t tell the crane I sold it to you.', 'It’s yours. Go be a hero to somebody.'] },
    'g-chagall': { area: 'mall', spot: 'Chagall Café', name: 'Chagall Café Counter', sub: 'Beans, tea and tins to go', icon: 'cup', slots: ['after', 'evening'],
      about: 'The café’s takeaway counter: whole beans in paper bags, loose tea in tins, a tray of biscuits by the till.',
      hi: ['Beans, tea, or something sweet? I can grind those for you if they don’t own a grinder.', 'The first-flush Darjeeling is back. It goes fast every year.'],
      buy: ['Keep it somewhere dark and it’ll keep a month.', 'I put the date on the bag. Tell them that.'] },
    'g-shelf': { area: 'strip', spot: 'Bookworms', name: 'Bookworms · Gift Shelf', sub: 'Manga, stationery, small books', icon: 'book', slots: ['after'],
      about: 'The front shelf at Bookworms: manga box sets, notebooks, pens, and a basket of tiny poetry books by the register.',
      hi: ['Oh, a present? How lovely. The notebooks are from a little maker in Kyoto, dear.', 'My husband says manga isn’t literature. My husband has never read one.'],
      buy: ['I’ll wrap it. No, really, I like wrapping.', 'There you are. Come back and tell me if they liked it.'] },
    'g-konbini': { area: 'strip', spot: 'Corner Store', name: 'Iwatodai Corner Store', sub: 'Snacks, drinks, the odd treat', icon: 'food', slots: ['after', 'evening'],
      about: 'The convenience store on the corner of the strip: snack aisle, drinks fridge, a steamer of nikuman by the register.',
      hi: ['Irasshaimase.', 'The limited pudding is back. There’s four left. Three.'],
      buy: ['Bag? Okay. Thank you.', 'Want chopsticks with that? No? Okay.'] },
    'g-sports': { area: 'portisland', spot: 'Sports Shop', name: 'Port Island Sports', sub: 'Gear for every club', icon: 'shop', slots: ['after', 'evening'],
      about: 'A sports shop off the station concourse that smells like new rubber. The staff all played something once.',
      hi: ['Buying for a team or for one person? One person. Got it. What do they play?', 'Wraps are on the left, balls on the right, motivation is not for sale.'],
      buy: ['Good gear. They’ll feel it.', 'Tell them to break it in slowly.'] },
    'g-kiosk': { area: 'portisland', spot: 'Station Kiosk', name: 'Concourse Kiosk', sub: 'Souvenirs and sweets', icon: 'shop', slots: ['after', 'evening'],
      about: 'A souvenir kiosk on the station concourse for people who forgot to buy something: sweets in boxes, snow globes, cameras.',
      hi: ['Last-minute present? That’s the whole business. Take your time.', 'The daifuku sell out by six. Just so you know.'],
      buy: ['Boxed and bagged. They’ll never know you forgot.', 'Have a good trip. Oh, you live here? Have a good evening, then.'] },
    'g-omamori': { area: 'shrine', spot: 'Charm Stall', name: 'Naganaki Charm Stall', sub: 'Charms and straps', icon: 'shrine', slots: ['after', 'evening'],
      about: 'A little stall beside the offering box: protection charms in silk bags, a few fox straps, a box for the money and nobody watching it.',
      hi: ['(Nobody is at the stall. A hand-written sign says: PLEASE PAY IN THE BOX. THE FOX IS WATCHING.)'],
      buy: ['(She dropped the coins in the box. Somewhere up the steps, something rustled.)'] },
    'g-store': { area: 'gekkoukan', spot: 'School Store', name: 'Gekkoukan School Store', sub: 'Bread and supplies', icon: 'food', slots: ['after'], schoolOnly: true,
      about: 'The school store by the stairs. The bread goes in the first five minutes of lunch; after school there is, sometimes, one left.',
      hi: ['You’re lucky. One yakisoba pan left. I hid it. Don’t tell anyone.', 'Pencils, erasers, bread. The essentials.'],
      buy: ['There you go. Study hard.', 'Mm. Good kid.'] },
    'g-hospital': { area: 'hospital', spot: 'Gift Shop', name: 'Tatsumi Memorial Gift Shop', sub: 'For visiting', icon: 'cross', slots: ['after'],
      about: 'A small gift shop by the hospital lobby: fruit baskets, get-well bears, and cards nobody knows what to write in.',
      hi: ['Visiting someone? I hope they’re feeling better soon.', 'The bears are for the children’s ward, mostly. Grown-ups like them too. They won’t say so.'],
      buy: ['I’ll put a card in. You can write in it on the way.', 'Take care of yourself as well, okay?'] },
    'g-pier': { area: 'port', spot: 'Pier', name: 'Taiyaki Stand', sub: 'On the pier', icon: 'food', slots: ['after'],
      about: 'A taiyaki stand at the foot of the pier. The man who runs it has been flipping the same moulds for thirty years.',
      hi: ['Red bean or custard? Red bean. Correct answer.', 'Three for four-fifty. Nobody eats one.'],
      buy: ['Hot! Hold it by the tail.', 'Eat the head first. Trust me.'] }
  };
  const I = (shop, list) => list.forEach(([id, name, short, kind, price, desc]) => { (G.items ||= {})[id] = { name, short, kind, price, desc, shop }; });
  // Paulownia Mall
  I('g-flowers', [
    ['sunflowers', 'A Bunch of Sunflowers', 'the sunflowers', 'Flowers', 1200, 'Three stems in brown paper. Too tall for any vase anyone owns.'],
    ['sprayroses', 'Pink Spray Roses', 'the roses', 'Flowers', 1800, 'Small, frilly, a lot of them on one stem. Smells like a grandmother’s garden.'],
    ['succulent', 'A Tiny Succulent', 'the little succulent', 'Plant', 600, 'In a pot the size of an egg cup. Very hard to kill. Not impossible.']
  ]);
  I('g-records', [
    ['citypop', 'City Pop LP (used)', 'the record', 'Record', 2800, 'A 1980s album with a sun-faded sleeve. Track three is worn pale from being played.'],
    ['mixcd', 'Staff Picks Mix CD', 'the mix CD', 'Music', 1500, 'Burned in-store, the track list handwritten on the sleeve. Half of it is bands you’ve never heard of.'],
    ['headphones', 'Studio Headphones', 'the headphones', 'Music', 6800, 'Closed-back, flat and honest. Every mistake in a mix, audible.'],
    ['picktin', 'Tin of Guitar Picks', 'the guitar picks', 'Music', 500, 'Twelve picks in a mint tin, three thicknesses. They will all be lost by summer.']
  ]);
  I('g-prizes', [
    ['featherman', 'Featherman R Figure', 'the Featherman figure', 'Figure', 2400, 'Red Hawk in his finishing pose, cape on a wire. The box says ages 6 and up. Nobody reads that.'],
    ['shibaplush', 'Giant Shiba Plush', 'the shiba plush', 'Plushie', 1600, 'A loaf-shaped shiba the size of a pillow. Its face says it knows what you did.'],
    ['tokencup', 'Cup of 200 Arcade Tokens', 'the tokens', 'Game', 1000, 'A plastic cup, heavy and loud. Enough for one very good afternoon at the cabinets.'],
    ['huntgame', 'Co-op Hunting Game', 'the game', 'Game', 4200, 'The handheld game everyone at school is playing. Four players, one huge monster, a lot of shouting.']
  ]);
  I('g-chagall', [
    ['coffeebeans', 'Single-Origin Coffee Beans', 'the coffee beans', 'Coffee', 2200, 'Ethiopian, light roast, ground for a pour-over if you ask. Smells like blueberries.'],
    ['darjeeling', 'First Flush Darjeeling', 'the Darjeeling', 'Tea', 3000, 'Loose leaf in a black tin. Pale, bright, gone by June.'],
    ['shortbread', 'Chagall Shortbread Tin', 'the shortbread', 'Sweets', 900, 'Butter shortbread in a tin with the café’s painting on the lid. The tin outlives the biscuits.']
  ]);
  I('bebluev', [
    ['liptint', 'Cherry Lip Tint', 'the lip tint', 'Cosmetics', 1400, 'A sheer tint in a tiny glass bottle. It looks like you just ate a popsicle.'],
    ['earcuff', 'Silver Ear Cuff', 'the ear cuff', 'Accessory', 2600, 'A thin silver cuff, no piercing needed. Catches the light when they turn their head.'],
    ['ribbon', 'Satin Hair Ribbon', 'the ribbon', 'Accessory', 800, 'A long satin ribbon in deep rose. Ties a bow even if your hands are cold.']
  ]);
  I('mayoido', [
    ['pocketwatch', 'Brass Pocket Watch', 'the pocket watch', 'Antique', 5800, 'An old brass watch that still keeps time, give or take a minute a day. Someone engraved a date inside the lid.'],
    ['valveradio', 'Old Valve Radio', 'the old radio', 'Antique', 4500, 'Wood case, a dial that glows orange. It works, mostly. It hums when it thinks.'],
    ['gostones', 'Clamshell Go Stones', 'the go stones', 'Game', 5500, 'White stones cut from clamshell, black from slate, in two turned wooden bowls. They click like rain.'],
    ['fountainpen', 'Vintage Fountain Pen', 'the fountain pen', 'Stationery', 3800, 'A green marbled pen with a gold nib, repaired and refilled. It writes the way thinking feels.'],
    ['castiron', 'Cast-Iron Pan', 'the cast-iron pan', 'Kitchen', 3600, 'Old, heavy and seasoned black by somebody else’s forty years of breakfasts.'],
    ['sewingtin', 'Antique Sewing Tin', 'the sewing tin', 'Craft', 1800, 'A painted tin of brass thimbles, pins and wooden spools of silk thread.']
  ]);
  // Iwatodai Strip
  I('g-shelf', [
    ['romancemanga', 'Romance Manga Box Set', 'the manga', 'Book', 2500, 'Volumes one to five of a shoujo series with a lot of rain and a lot of almost-confessions.'],
    ['poetry', 'Pocket Poetry Book', 'the poetry book', 'Book', 900, 'A palm-sized collection of short poems about the sea. Somebody pencilled a star by one.'],
    ['notebook', 'Leather Notebook', 'the notebook', 'Stationery', 1600, 'Soft leather, a ribbon marker, blank pages that make you want to have better handwriting.'],
    ['gelpens', 'Gel Pen Set (24 colours)', 'the gel pens', 'Stationery', 700, 'Twenty-four colours, six of them glitter, one of them inexplicably called “Moody Lake”.']
  ]);
  I('g-konbini', [
    ['consomme', 'Consommé Potato Chips', 'the chips', 'Snack', 200, 'The good brand. The bag is mostly air, but it’s very good air.'],
    ['chocosticks', 'Chocolate Sticks, Family Pack', 'the chocolate sticks', 'Snack', 300, 'Eight sleeves of thin chocolate-dipped biscuit sticks. For sharing, allegedly.'],
    ['grapesoda', 'Grape Soda, Six Cans', 'the grape soda', 'Drink', 600, 'Purple, fizzy, entirely artificial. Tastes like being eleven.'],
    ['pudding', 'Limited Premium Pudding', 'the pudding', 'Sweets', 350, 'A glass-jar custard pudding with a dark caramel top. Only on the shelf this month.'],
    ['dogjerky', 'Premium Dog Jerky', 'the dog jerky', 'Pet', 500, 'Chicken strips for dogs. No salt, no nonsense. The bag rustles; every dog in the street hears it.']
  ]);
  I('aohige', [
    ['bathsalts', 'Yuzu Bath Salts', 'the bath salts', 'Bath', 900, 'A jar of yuzu salts. One spoonful and the whole bathroom smells like winter citrus.'],
    ['handcream', 'Rose Hand Cream', 'the hand cream', 'Skincare', 1100, 'A small tube of rich hand cream. For hands that do things all day.'],
    ['musclerub', 'Menthol Muscle Rub', 'the muscle rub', 'Care', 800, 'Strong enough to make your eyes water. Exactly what it says on the tube.']
  ]);
  // Port Island Station
  I('g-sports', [
    ['handwraps', 'Boxing Hand Wraps', 'the hand wraps', 'Sports', 1500, 'Cotton wraps, 4.5 metres, thumb loop and velcro. Black, so they don’t show the work.'],
    ['baseball', 'Hard Baseball, Pro Grade', 'the baseball', 'Sports', 1200, 'A real leather ball with red stitching, the kind that stings your palm when you catch it right.'],
    ['sweatbands', 'Wristband and Headband Set', 'the sweatbands', 'Sports', 700, 'Terry cloth, very bright, very loud. Makes you run faster through confidence alone.'],
    ['basketball', 'Outdoor Basketball', 'the basketball', 'Sports', 3200, 'Grippy rubber, made for asphalt. Bounces like it means it.'],
    ['tennisball', 'Squeaky Tennis Ball', 'the tennis ball', 'Pet', 300, 'A tennis ball with a squeaker inside. For dogs. And some people.']
  ]);
  I('g-kiosk', [
    ['snowglobe', 'Port Island Snow Globe', 'the snow globe', 'Souvenir', 1300, 'The monorail and the bay inside a glass ball. Shake it and it snows on the sea.'],
    ['daifuku', 'Strawberry Daifuku Box', 'the daifuku', 'Sweets', 1000, 'Six soft mochi, each with a whole strawberry in sweet bean paste. They don’t keep, so eat them.'],
    ['camera', 'Disposable Camera', 'the camera', 'Camera', 1200, 'Twenty-seven shots, a flash and a little wheel that clicks. You won’t know what you got until you get it developed.']
  ]);
  // A few odd places
  I('g-omamori', [
    ['omamori', 'Good-Luck Omamori', 'the charm', 'Charm', 500, 'A protection charm in a red silk bag. You’re not supposed to open it. Nobody ever has.'],
    ['foxstrap', 'Fox Charm Strap', 'the fox strap', 'Charm', 700, 'A little white fox on a red cord with a bell. It jingles when your phone does.']
  ]);
  I('g-store', [
    ['yakisobapan', 'Yakisoba Pan', 'the yakisoba pan', 'Bread', 200, 'Fried noodles in a hot-dog bun, the most fought-over thing in the building. The last one.'],
    ['pencil', 'Drafting Mechanical Pencil', 'the mechanical pencil', 'Stationery', 900, 'A metal-barrel 0.5 mm pencil with a knurled grip. Makes homework look like engineering.']
  ]);
  I('g-hospital', [
    ['fruitbasket', 'Fruit Basket', 'the fruit basket', 'Fruit', 3000, 'Melon, apples, a bunch of grapes and a single important-looking pear, in cellophane with a bow.'],
    ['teddy', 'Get-Well Teddy', 'the bear', 'Plushie', 1400, 'A soft brown bear holding a tiny heart that says GET WELL. Works whether or not you’re sick.']
  ]);
  I('g-pier', [
    ['taiyaki', 'Taiyaki, Three in a Bag', 'the taiyaki', 'Sweets', 450, 'Three fish-shaped cakes full of red bean, hot from the mould. Nobody eats just one.']
  ]);
  // Hooking the shops into the Go Out map (places.js is loaded before this file; the epilogue worlds keep their own places).
  const P = window.FEMC_GAME_PLACES;
  if (P && !P.giftsHooked) {
    P.giftsHooked = true;
    Object.entries(G.shops).forEach(([id, s]) => {
      (P.shops ||= {})[id] = { area: s.area, gifts: true };
      P.activities.push({ id, area: s.area, spot: s.spot, name: s.name, about: s.about, icon: s.icon || 'shop', slots: s.slots, shop: id, gifts: true, ...(s.schoolOnly ? { schoolOnly: true } : {}) });
    });
  }
  return G;
})();
