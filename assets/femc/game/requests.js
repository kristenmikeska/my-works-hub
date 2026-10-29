/* Persona 3: Solstice · more Velvet Plumes (2026-10-29, Kat's three approved sources). Rules, data and the Velvet Room's two
   new screens; gacha.js openVelvet shows the buttons (velvetButtons / wireVelvet), like Echo Fusion and the Compendium.
   ── Elizabeth's Requests (P3P-style; openRequests) ──
     REQUESTS: 28, in eight waves (WAVES: the dates each Tartarus block opens, calendar.js floorCaps), so a few more are posted
     as the year goes on. Up to MAX_TAKEN are taken at once; one can be given up (its count starts over when taken again).
     `kind` says what she asks for and how it's checked:
       counted from the moment it's taken (`base` = the counter then, so an old save never finishes one by having played):
         kills (Shadows beaten on Tartarus nights) · weak (weaknesses struck, `el`) · act (an activity done, S.done[act]) ·
         rides (school mornings on the monorail, S.gacha.rides) · fused (Echo fusions) · cards (Revelation cards found: the box's
         uid counter) · rares (golden Shadows beaten, battle save tt.rares) · puzzles (Tartarus puzzles solved, tt.puzzles)
       read off the save as it is (a save already past it can hand it in at once):
         floor (S.tartarus.maxFloor) · guardian (battle save tt.guardians) · stat (a social stat's rank) · links (`n` links at
         rank `r` or better, Elizabeth not counted) · maxLink (any link at rank 10) · set4 (anyone wearing four cards of one set)
         · echo (that Echo in Solar's stock: fused, summoned or found) · item (in the bag) · mat (in the battle save)
     Hand in: item and mat requests consume what they ask for. Rewards (`pay`): plumes, plus sometimes an item, a material, a
     Capsule Ticket or a Revelation card of rarity `card`. Battle-side counts come through the handoff: battle.js hoResult
     `tally` { kills, weak: { el: n } } (story Tartarus nights only) → core.js applyResult → afterFight → S.gacha.tally.
   ── Tartarus milestones (payFloors) ──
     Once per playthrough each: the first floor of each block and its summit (Monad: its first floor and the top of each date
     section, the floorCaps inside it), and each block guardian beaten (battle save tt.guardians). Amounts ENTER / TOP / GUARD /
     MONAD (by block). Paid after every Tartarus night (core.js applyResult) and, for a save already past them, once after the
     first save from a load (G.onChange, like stamps.js), with a toast. Claimed ids: S.gacha.miles, so they never repeat.
   ── The Plume Exchange (openExchange) ──
     Spare Revelation cards and surplus materials for plumes, at most EX.week plumes a game week (core.js weekOf: weeks start
     on Sunday). A card is spare only if it is not equipped, not locked, never levelled or refined, and not the last copy of its
     set and slot (with nothing of that set and slot kept, the best free copy stays). Rates (EX.cards): ★3 three for a plume,
     ★4 one for a plume, ★5 one for three. Materials (EX.mats): a lot of `per` for a plume, beyond `keep` and beyond what a
     taken request still needs. Every trade is shown in full and confirmed first. Save: S.gacha.ex { week, n, total }.
   Save (gacha.js gs() fills and checks all of it): S.gacha.req { taken: { id: { at, base, told } }, done: [ids], seen: [ids] },
     miles [ids], tally { kills, weak }, ex, rides { last, n, rain }. New Game+ starts them over (gacha.js keeps only the
     collections). Never in the epilogue (S.epi). Balance and totals: CLAUDE.md "More Velvet Plumes". Tests: tests/femc_plumes.py. */
window.FemcRequests = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const UI = () => window.FemcGameUI, D = () => window.FEMC_BATTLE_DATA, B = () => window.FemcBuild, EC = () => window.FemcEchoes, GA = () => window.FemcGacha;
  const S = () => G.S;
  const gs = () => GA().gs();
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const bs = () => S().battleSave || null;
  const live = () => { const s = S(); return !!(s && s.started && !s.epi && s.phase !== 'title' && GA()); };
  const pickLine = a => a[Math.floor(Math.random() * a.length)];

  /* ── Elizabeth's Requests: data ── */
  const MAX_TAKEN = 3;
  const WAVES = ['4/8', '5/10', '6/9', '7/8', '8/7', '9/6', '10/5', '11/4'];
  const rq = (id, wave, title, kind, goal, pay, ask, thanks) => Object.assign({ id, wave, title, kind, ask, thanks, pay }, goal);
  const REQUESTS = [
    rq('ramen', 0, 'A Bowl Served with an Apology', 'act', { act: 'hagakure', n: 1 }, { plumes: 2 },
      'I am told there is a shop on the Strip whose bowls are the size of hubcaps. I do not know what a hubcap is, but I was told it with such conviction that I believe it entirely. Please eat one bowl and tell me whether it was worth the size.',
      'So it was enormous, and you finished it anyway. I shall file this under courage. Possibly under appetite. I will decide later.'),
    rq('medicine', 0, 'Three Bottles of Something Dreadful', 'item', { item: 'medicine', n: 3 }, { plumes: 2 },
      'Please bring me three bottles of Medicine. I have tasted one. I should like to understand why people keep so many of a thing that tastes like the floor of a pharmacy.',
      'Three. Thank you. I will line them up on the table and look at them until I understand. It may take some time.'),
    rq('dozen', 0, 'A Dozen, Please', 'kills', { n: 12 }, { plumes: 3 },
      'Twelve Shadows in the tower, if you would. I do not need to know how. I only ask that it be twelve, because a dozen is such a tidy number and nothing else about the tower is.',
      'Twelve exactly? Or more? Do not tell me. I shall assume twelve, and be pleased.'),
    rq('thirteen', 0, 'The Thirteenth Floor', 'floor', { n: 13 }, { plumes: 2, item: ['snuff_soul', 1] },
      'Humans are said to leave the thirteenth floor out of their buildings. The tower does not. Please climb to it and tell me whether anything there seemed offended.',
      'Nothing offended? How disappointing. And how reassuring. Here, for the climb down.'),
    rq('fire', 1, 'Something That Dislikes Fire', 'weak', { el: 'fire', n: 8 }, { plumes: 3 },
      'Fire, eight times, into Shadows that dislike it. I have read that a weakness is a kind of honesty. I would like to see eight honest Shadows.',
      'Eight. You make it look like a conversation. A short and rather loud one.'),
    rq('arqa', 1, 'The Warden of Arqa', 'guardian', { fid: 'f29' }, { plumes: 4, mat: ['velvet_thread', 1] },
      'Something large is keeping one of Arqa’s floors as though it were its own. Please explain to it, as firmly as you like, that it is not.',
      'It has been told. Good. Here is a thread from this very room; it seemed the right thing to give you.'),
    rq('wellread', 1, 'A Well-Read Guest', 'stat', { stat: 'knowledge', n: 3 }, { plumes: 3 },
      'I understand that a mind can be ranked, like a card. Please arrange for yours to be called Well-Read. I would like to tell my master I have a well-read guest. He will not be impressed, but I will tell him.',
      'Well-Read. It suits you. I have written it in the margin, in pencil, so that it can go up.'),
    rq('wishes', 1, 'Two Wishes, Ten Yen Each', 'act', { act: 'pray', n: 2 }, { plumes: 2 },
      'At the shrine one throws ten yen into a box, claps twice and wishes. Please do it twice. I want to know whether the second wish is heard more clearly, the god having been warned.',
      'And? You will not tell me what you wished? Quite right. I have heard that telling spoils them.'),
    rq('burger', 2, 'The Mystery Burger', 'act', { act: 'wildduck', n: 1 }, { plumes: 2 },
      'There is a burger on the Strip whose contents are, by its own admission, a mystery. I adore a mystery. Please eat one and solve it, or fail to, and tell me which.',
      'Unsolved. Of course. The best ones are. I shall keep the file open.'),
    rq('ice', 2, 'Ten Cold Truths', 'weak', { el: 'ice', n: 10 }, { plumes: 3 },
      'Ten Shadows struck with Ice, exactly where it hurts them. Frost is very persuasive. I should like to watch it persuade ten.',
      'Ten. The tower must be colder for it. Do wear a scarf.'),
    rq('ash', 2, 'What They Leave Behind', 'mat', { mat: 'shadow_ash', n: 10 }, { plumes: 2, ticket: 1 },
      'When a Shadow is gone it leaves a black ash that never quite settles. Please bring me ten handfuls. I am making a collection, and so far it is very small and very sad.',
      'Oh, lovely. It still refuses to settle. Here, a ticket for the little machines down the hall. I am told they are a collection too.'),
    rq('fusion', 2, 'Two Answers, One Question', 'fused', { n: 1 }, { plumes: 3 },
      'Bring me two of your Echoes and let me make a third of them. I would not normally post this as a request. I simply want to do it, and this way you are paid for indulging me.',
      'There. Was that not satisfying? It was for me. I am paid in satisfaction and you in plumes, which I think is fair.'),
    rq('three', 3, 'Three Who Would Notice', 'links', { r: 5, n: 3 }, { plumes: 4 },
      'Please be known, properly, to three people. Rank five with each, by the book’s reckoning. The book will not tell me what that is like from your side, so I am asking you to find out.',
      'Three. I did ask the book. It only said yes. You say it much better.'),
    rq('elec', 3, 'A Dozen Small Lightnings', 'weak', { el: 'elec', n: 12 }, { plumes: 3 },
      'Twelve Shadows struck with Elec where they are weak. Lightning never strikes the same place twice, I am told, so I would like you to prove it twelve different times.',
      'Twelve places. The saying holds. I am relieved; I was fond of it.'),
    rq('monorail', 3, 'The Train Over the Water', 'rides', { n: 5 }, { plumes: 2, ticket: 1 },
      'There is a train that runs over the sea every morning, full of people who are not looking out of the window. Please ride it five mornings and look out of the window for all of them.',
      'And was the sea there each time? Good. I had worried. Here, a ticket. It is not for the train, but it is a ticket.'),
    rq('gumiho', 3, 'A Fox in the Room', 'echo', { echo: 'gumiho' }, { plumes: 4 },
      'I should like to meet Gumiho. Fuse her, summon her, find her, however you like; only bring her in so that I can look at her. She has nine tails and I have never once had the chance to count them.',
      'Nine. Exactly nine. I counted twice. She minded the second time.'),
    rq('golden', 4, 'Something That Glitters and Runs', 'rares', { n: 1 }, { plumes: 4, card: 4 },
      'Some Shadows in the tower are made of gold, and they run. Please catch one. I am curious whether a thing that is valuable knows it, and they seem to.',
      'It knew. They always know. Please take this. It glitters too, but it stays.'),
    rq('fearless', 4, 'Fearless, by the Book', 'stat', { stat: 'courage', n: 4 }, { plumes: 3 },
      'The book calls a certain kind of guest Fearless. I would like to see it say so of you. I suspect it is already true and the book is merely slow.',
      'Fearless. The book caught up. It usually does, given time.'),
    rq('mirror', 4, 'A Face a Second Late', 'mat', { mat: 'mirror_shard', n: 6 }, { plumes: 3 },
      'The glass of Tziah shows your face a second late. Please bring me six pieces. I want to see whether six of them are six seconds late, or whether they agree among themselves.',
      'They agree. How polite of them. I shall seat them together.'),
    rq('wind', 5, 'Fifteen Gusts', 'weak', { el: 'wind', n: 15 }, { plumes: 4 },
      'Fifteen Shadows struck with Wind where they are weak. The wind is the only thing that comes into this room without knocking, and I admire it. I should like to see it out at work.',
      'Fifteen. It has earned its rudeness.'),
    rq('newcards', 5, 'New Cards for an Old Deck', 'cards', { n: 6 }, { plumes: 3, mat: ['velvet_thread', 2] },
      'Six new Revelation cards, from anywhere at all. I do not want them. I want you to have them. A guest with an interesting hand is a guest worth dealing to.',
      'Six new faces. Here is thread to mend them with, should they fray.'),
    rq('kaguya', 5, 'The Princess Who Set Impossible Tasks', 'echo', { echo: 'kaguya' }, { plumes: 4 },
      'Kaguya-hime, please. Fuse her or summon her, then let me see her. She turned away every suitor with an impossible task, I am told. I post impossible tasks myself, so I feel we would get along.',
      'We do get along. She asked me for a jewel from a dragon’s neck. I said I would see what I could do.'),
    rq('sixty', 6, 'Sixty, if You Please', 'kills', { n: 60 }, { plumes: 5 },
      'Sixty Shadows. It is a great many, I know. I would like to learn whether the tower notices when sixty of its own are gone, and you are the only one I can ask.',
      'Sixty. The tower did not seem to notice. You did. That is enough for both of us.'),
    rq('riddles', 6, 'Three Little Riddles', 'puzzles', { n: 3 }, { plumes: 3, item: ['tartarus_key', 1] },
      'The tower has begun leaving puzzles about: lanterns, sliding paths, switches. Please solve three. I made none of them, but I would like it known that I approve.',
      'Three solved. Here: a key, for the doors that are not puzzles at all, only locked.'),
    rq('matched', 6, 'A Matched Set', 'set4', { n: 4 }, { plumes: 4 },
      'Please dress someone in four cards of one set. Matching is a human habit I find very touching: you wear the same thing as your friends on purpose, and call it a team.',
      'A matched set. Very smart. Very much a team.'),
    rq('summit', 7, 'The Top of the Tower', 'floor', { n: 172 }, { plumes: 6 },
      'Please climb to the highest floor the tower admits to having. I have seen it from this room, of course. I have never seen it from the stairs.',
      'From the stairs, then. Was it farther than it looks? Everything is, from the stairs.'),
    rq('seals', 7, 'Two Seals', 'mat', { mat: 'guardian_crest', n: 2 }, { plumes: 4 },
      'The great Shadows on the guardian floors wear seals. Please bring me two. I will not use them for anything. Some things are for keeping.',
      'Two. I shall keep them where I keep the things that are for keeping. It is a very small drawer, and nearly full.'),
    rq('allway', 7, 'All the Way', 'maxLink', { n: 10 }, { plumes: 5, card: 5 },
      'Please know someone all the way. Rank ten, by the book’s reckoning. I have watched a great many guests come close. I should like to watch one arrive.',
      'All the way. It looks warm from here. Take this; it is the best card in my hand, and I want it to be in yours.')
  ];
  const byId = id => REQUESTS.find(q => q.id === id) || null;
  // Counted from the moment it's taken (header); the rest read the save as it is.
  const SINCE = ['kills', 'weak', 'act', 'rides', 'fused', 'cards', 'rares', 'puzzles'];
  const LINES = {
    hi: ['“The board, Solar. I post what I am curious about. Some of it is business. Most of it is curiosity in a business hat.”',
      '“Requests, written in silver. I have tried other colours. Silver is the only one that looks sincere.”',
      '“Take what interests you. Three at a time, please. I am patient, but my handwriting is not.”'],
    full: ['“Three at once is plenty. Finish one, or set one down, and then we shall talk.”'],
    taken: ['“Splendid. I shall pretend not to be waiting.”', '“Thank you. I will think about it a great deal while you are gone.”'],
    given: ['“Set aside, then. It will keep. Most curiosities do.”'],
    none: ['“Nothing new on the board today. I am being curious about it in private.”']
  };

  /* ── Requests: rules ── */
  const waveDay = w => G.dayOf(WAVES[w]);
  const posted = () => REQUESTS.filter(q => S().day >= waveDay(q.wave));
  const rqs = () => gs().req;
  const isDone = id => rqs().done.includes(id);
  // The taken list, minus anything no longer in REQUESTS (a renamed or removed request), oldest first.
  function takenList() {
    const t = rqs().taken;
    Object.keys(t).forEach(id => { if (!byId(id) || isDone(id) || !t[id] || typeof t[id] !== 'object') delete t[id]; });
    return Object.keys(t).map(byId).sort((a, b) => (t[a.id].at || 0) - (t[b.id].at || 0));
  }
  const openList = () => posted().filter(q => !isDone(q.id) && !rqs().taken[q.id]);
  const nextWave = () => { const w = WAVES.findIndex((_, i) => waveDay(i) > S().day); return w < 0 ? null : WAVES[w]; };
  const linkRanks = () => Object.entries(S().links || {}).filter(([id]) => id !== 'elizabeth' && G.LINKS[id]).map(([, p]) => (p && p.rank) || 0);
  // The counter a SINCE request reads (its value now).
  function counter(q) {
    const g = gs(), b = bs();
    switch (q.kind) {
      case 'kills': return g.tally.kills;
      case 'weak': return g.tally.weak[q.el] || 0;
      case 'act': return ((S().done || {})[q.act]) || 0;
      case 'rides': return g.rides.n;
      case 'fused': return b && EC() ? EC().es(b).fused : 0;
      case 'cards': return b && B() ? B().ensureCards(b).uid || 0 : 0;
      case 'rares': return (b && b.tt && b.tt.rares) || 0;
      case 'puzzles': return (b && b.tt && b.tt.puzzles) || 0;
    }
    return 0;
  }
  const el = k => ((D().elements || {})[k] || {}).name || k;
  const statName = (id, r) => { const s = G.D.stats.stats[id]; return s ? `${s.name} ${s.ranks[r - 1] || r}` : id; };
  /* Where a request stands: { have, need, ready, line } (line: the progress shown on the board). t: its taken entry, or null. */
  function progress(q, t = rqs().taken[q.id]) {
    const b = bs(), S0 = S();
    let have = 0, need = q.n || 1, line = '';
    if (SINCE.includes(q.kind)) {
      if (t) { const now = counter(q); if (now < (t.base || 0)) t.base = now; have = now - (t.base || 0); } // a counter that went back (a new battle save): count from there
      const what = { kills: 'Shadows', weak: `${el(q.el)} weaknesses`, act: 'done', rides: 'mornings', fused: 'fused', cards: 'new cards', rares: 'golden Shadows', puzzles: 'puzzles' }[q.kind];
      line = t ? `${Math.min(have, need)} / ${need} ${what}` : `${need} ${what}, counted once taken`;
    } else if (q.kind === 'floor') { have = (S0.tartarus && S0.tartarus.maxFloor) || 0; line = `Best floor ${have ? `${have}F` : 'none yet'} · needs ${need}F`; }
    else if (q.kind === 'guardian') { have = b && b.tt && (b.tt.guardians || []).includes(q.fid) ? 1 : 0; line = have ? 'Beaten' : 'Not beaten yet'; }
    else if (q.kind === 'stat') { have = G.statRank(q.stat); line = `${statName(q.stat, have)} · needs ${statName(q.stat, need)}`; }
    else if (q.kind === 'links') { have = linkRanks().filter(r => r >= q.r).length; line = `${Math.min(have, need)} / ${need} at rank ${q.r} or better`; }
    else if (q.kind === 'maxLink') { have = Math.max(0, ...linkRanks()); line = `Highest rank ${have} · needs ${need}`; }
    else if (q.kind === 'set4') {
      const C = b && B() ? B().ensureCards(b) : null;
      have = C ? Math.max(0, ...Object.keys(C.eq || {}).map(mid => Math.max(0, ...Object.values(B().setCounts(b, mid))))) : 0;
      line = `Best: ${have} of one set · needs ${need}`;
    } else if (q.kind === 'echo') {
      have = b && EC() ? (EC().owned(b).some(i => i.id === q.echo) ? 1 : 0) : 0;
      const x = EC() && EC().byId(q.echo);
      line = have ? `${x ? x.name : q.echo} is in Solar’s stock` : `${x ? x.name : q.echo} isn’t in Solar’s stock`;
    } else if (q.kind === 'item') { have = (S0.inventory || {})[q.item] || 0; line = `${Math.min(have, need)} / ${need} ${D().items[q.item].name} in the bag`; }
    else if (q.kind === 'mat') { have = (b && b.mats && b.mats[q.mat]) || 0; line = `${Math.min(have, need)} / ${need} ${D().materials[q.mat].name}`; }
    return { have, need, ready: !!t && have >= need, line };
  }
  // What a request pays, as words.
  function payLine(q) {
    const p = q.pay, out = [`${p.plumes} Velvet Plume${p.plumes === 1 ? '' : 's'}`];
    if (p.item) out.push(`${D().items[p.item[0]].name}${p.item[1] > 1 ? ` ×${p.item[1]}` : ''}`);
    if (p.mat) out.push(`${D().materials[p.mat[0]].name} ×${p.mat[1]}`);
    if (p.ticket) out.push(`Capsule Ticket${p.ticket > 1 ? ` ×${p.ticket}` : ''}`);
    if (p.card) out.push(`a ★${p.card} Revelation card`);
    return out.join(' + ');
  }
  /* Take a posted request. Returns { ok, why }. */
  function accept(id) {
    const q = byId(id), r = rqs();
    if (!q || isDone(id) || S().day < waveDay(q.wave)) return { ok: false, why: 'That request isn’t on the board.' };
    if (r.taken[id]) return { ok: true };
    if (takenList().length >= MAX_TAKEN) return { ok: false, why: `Three at a time. Hand one in or set one down first.` };
    r.taken[id] = { at: S().day, base: SINCE.includes(q.kind) ? counter(q) : null };
    if (!r.seen.includes(id)) r.seen.push(id);
    G.save();
    return { ok: true };
  }
  function giveUp(id) { const r = rqs(); if (!r.taken[id]) return false; delete r.taken[id]; G.save(); return true; }
  /* Hand in a finished request: consume what it asks for, pay, mark it done. Returns { ok, why, got: [words] }. */
  function handIn(id) {
    const q = byId(id), t = rqs().taken[id];
    if (!q || !t) return { ok: false, why: 'Take it first.' };
    const pr = progress(q, t);
    if (!pr.ready) return { ok: false, why: 'Not yet.' };
    const s = S(), b = bs(), g = gs();
    if (q.kind === 'item') { s.inventory[q.item] -= q.n; if (!(s.inventory[q.item] > 0)) delete s.inventory[q.item]; }
    if (q.kind === 'mat') { b.mats[q.mat] -= q.n; if (!(b.mats[q.mat] > 0)) delete b.mats[q.mat]; }
    const p = q.pay, got = [];
    g.plumes += p.plumes; got.push(`+${p.plumes} Velvet Plume${p.plumes === 1 ? '' : 's'}`);
    if (p.item && D().items[p.item[0]]) { s.inventory[p.item[0]] = (s.inventory[p.item[0]] || 0) + p.item[1]; got.push(`${D().items[p.item[0]].name}${p.item[1] > 1 ? ` ×${p.item[1]}` : ''}`); }
    if (p.ticket) { s.inventory.capsule_ticket = (s.inventory.capsule_ticket || 0) + p.ticket; got.push(`Capsule Ticket${p.ticket > 1 ? ` ×${p.ticket}` : ''}`); }
    const bb = (p.mat || p.card) ? (b || G.ensureBattleSave()) : null;
    if (p.mat && bb) { bb.mats[p.mat[0]] = (bb.mats[p.mat[0]] || 0) + p.mat[1]; got.push(`${D().materials[p.mat[0]].name} ×${p.mat[1]}`); }
    if (p.card && bb && B()) {
      const c = B().rollCard(Math.random, { tier: Math.min(7, 1 + ((s.tartarus && s.tartarus.bosses) || []).length), r: p.card, minR: p.card }), res = B().addCard(bb, c);
      got.push(res.card ? `${B().cardName(c)} ★${c.r}` : `Tarot Dust ×${res.dust} (the card box was full)`);
    }
    delete rqs().taken[id]; rqs().done.push(id);
    G.save();
    return { ok: true, got, q };
  }
  // Taken requests that are ready and haven't been announced yet: one toast each (after a fight, an activity, a load).
  function tellReady() {
    const t = rqs().taken, out = [];
    takenList().forEach(q => { if (!t[q.id].told && progress(q, t[q.id]).ready) { t[q.id].told = true; out.push(q); G.toast('perk', `Elizabeth’s request ready: ${q.title}`); } });
    return out;
  }
  /* A school morning on the monorail (ui.js earlyMorning). Once a day. */
  function rode(weather) {
    if (!live()) return;
    const r = gs().rides;
    if (r.last === S().day) return;
    r.last = S().day; r.n += 1; if (['rain', 'storm', 'snow'].includes(weather)) r.rain += 1;
  }

  /* ── Tartarus milestones ── */
  const ENTER = [2, 2, 2, 3, 3, 3, 4], TOP = [3, 3, 4, 4, 5, 5, 6], GUARD = [3, 3, 4, 4, 4, 5, 5], MONAD = [4, 4, 5, 6], MONAD_GUARD = 5;
  let milesCache = null;
  /* Every milestone: { id, kind: 'floor' (at: a game floor) | 'guardian' (fid), plumes, name }. Built from data.js blocks. */
  function milestones() {
    if (milesCache) return milesCache;
    const out = [], caps = ((G.D.cal && G.D.cal.floorCaps) || []).map(c => c[1]);
    let bi = 0;
    D().blocks.forEach(b => {
      const f = b.floors, top = f[f.length - 1];
      if (!b.secret) {
        out.push({ id: `in-${b.id}`, kind: 'floor', at: f[0], plumes: ENTER[bi] || ENTER[ENTER.length - 1], name: `${b.name} reached (${f[0]}F)` });
        out.push({ id: `top-${b.id}`, kind: 'floor', at: top, plumes: TOP[bi] || TOP[TOP.length - 1], name: `${b.name}’s summit (${top}F)` });
      } else {
        // Monad: its first floor, then the top of each section the calendar opens (floorCaps inside the block).
        out.push({ id: `in-${b.id}`, kind: 'floor', at: f[0], plumes: MONAD[0], name: `${b.name} found (${f[0]}F)` });
        caps.filter(c => f.includes(c)).forEach((c, i) => out.push({ id: `sec-${b.id}-${c}`, kind: 'floor', at: c, plumes: MONAD[Math.min(i + 1, MONAD.length - 1)], name: `${b.name} · ${c}F` }));
      }
      ((b.guardian && b.guardian.at) || []).forEach(n => out.push({ id: `guard-f${n}`, kind: 'guardian', fid: `f${n}`, plumes: b.secret ? MONAD_GUARD : (GUARD[bi] || GUARD[GUARD.length - 1]), name: `${b.name}’s guardian beaten (${n}F)` }));
      if (!b.secret) bi++;
    });
    return (milesCache = out);
  }
  function dueMiles() {
    const g = gs(), s = S(), top = (s.tartarus && s.tartarus.maxFloor) || 0, gd = (bs() && bs().tt && bs().tt.guardians) || [];
    return milestones().filter(m => !g.miles.includes(m.id) && (m.kind === 'floor' ? top >= m.at : gd.includes(m.fid)));
  }
  /* Pay every milestone that's due, once. how: 'night' (after a Tartarus night: a toast per milestone, three at most) or 'load'
     (a save already past them: one toast for the lot). Returns the milestones paid. The caller saves. */
  function payFloors(how = 'night') {
    if (!live()) return [];
    const due = dueMiles(); if (!due.length) return [];
    const g = gs(); let n = 0;
    due.forEach(m => { g.miles.push(m.id); n += m.plumes; });
    g.plumes += n;
    if (how === 'night' && due.length <= 3) due.forEach(m => G.toast('perk', `Tartarus milestone · ${m.name}: Velvet Plumes +${m.plumes}`));
    else G.toast('perk', `Tartarus milestones${how === 'night' ? '' : ' for floors already climbed'} (${due.length}): Velvet Plumes +${n}`);
    return due;
  }

  /* ── After a fight (core.js applyResult, before it saves) ── */
  function afterFight(h, r) {
    if (!live() || !r) return;
    const t = r.tally, g = gs();
    if (h && h.kind === 'tartarus' && t && typeof t === 'object') {
      if (t.kills > 0) g.tally.kills += Math.floor(t.kills);
      Object.entries(t.weak && typeof t.weak === 'object' ? t.weak : {}).forEach(([k, n]) => { if (D().elements[k] && n > 0) g.tally.weak[k] = (g.tally.weak[k] || 0) + Math.floor(n); });
    }
    payFloors('night');
    tellReady();
  }
  // Any other save (a load, an activity, the menu): milestones a save is already past, and newly ready requests.
  let timer = null;
  G.onChange(kind => {
    if (kind === 'toast') return;
    clearTimeout(timer);
    timer = setTimeout(() => { try { if (!live()) return; const a = payFloors('load'), b = tellReady(); if (a.length || b.length) G.saveQuiet(); } catch (e) { console.error(e); } }, 350);
  });

  /* ── The Plume Exchange: rules ── */
  // cards: by rarity, `per` spare cards for `plumes`. mats: `per` for one plume, beyond `keep` (and beyond taken requests).
  const EX = { week: 8, cards: { 3: { per: 3, plumes: 1 }, 4: { per: 1, plumes: 1 }, 5: { per: 1, plumes: 3 } },
    mats: { shadow_ash: { per: 30 }, mask_shard: { per: 12 }, crimson_lacquer: { per: 8 }, mirror_shard: { per: 5 }, rusted_cog: { per: 3 }, stone_heart: { per: 2 }, moon_feather: { per: 2 },
      lantern_glass: { per: 8 }, echo_shell: { per: 3 }, gilded_scale: { per: 1 }, monad_sand: { per: 1 }, guardian_crest: { per: 1 },
      tarot_dust: { per: 50, keep: 150 }, velvet_thread: { per: 4, keep: 8 }, arcana_fragment: { per: 1, keep: 2 } } };
  const weekNow = () => Math.floor((S().day + 1) / 7); // core.js weekOf
  function exState() { const x = gs().ex; if (x.week !== weekNow()) { x.week = weekNow(); x.n = 0; } return x; }
  const weekLeft = () => Math.max(0, EX.week - exState().n);
  const subSum = c => (c.subs || []).reduce((a, s) => a + (+s[1] || 0), 0);
  // Weakest first (fewest substats, then the smallest, then the newest), so a trade gives up the least.
  const weakFirst = (a, b) => (a.r - b.r) || ((a.subs || []).length - (b.subs || []).length) || (subSum(a) - subSum(b)) || (b.u - a.u);
  /* The spare Revelation cards (header), weakest first. */
  function spareCards(b = bs()) {
    if (!b || !B()) return [];
    const Bd = B(), C = Bd.ensureCards(b), groups = {}, out = [];
    C.list.forEach(c => (groups[`${c.set}:${c.slot}`] ||= []).push(c));
    const kept = c => c.lock || !!Bd.wearerOf(b, c.u) || (c.lvl || 1) > 1 || (c.ref || 0) > 0;
    Object.values(groups).forEach(list => {
      const free = list.filter(c => !kept(c));
      // The last copy is never traded: with nothing of this set and slot kept, the best free copy stays.
      if (!list.some(kept)) free.sort(weakFirst).pop();
      free.forEach(c => out.push(c));
    });
    return out.filter(c => EX.cards[c.r]).sort(weakFirst);
  }
  // What taken requests still need of a material (kept back from the exchange).
  const reqHold = id => takenList().filter(q => q.kind === 'mat' && q.mat === id).reduce((a, q) => a + q.n, 0);
  /* Materials with a surplus: [{ id, name, have, keep, spare, per, lots }]. */
  function spareMats(b = bs()) {
    if (!b) return [];
    return Object.entries(EX.mats).filter(([id]) => D().materials[id] && (b.mats[id] || 0) > 0).map(([id, m]) => {
      const have = b.mats[id] || 0, keep = (m.keep || 0) + reqHold(id), spare = Math.max(0, have - keep);
      return { id, name: D().materials[id].name, have, keep, spare, per: m.per, lots: Math.floor(spare / m.per) };
    });
  }
  /* A trade, worked out. sel: { cards: { 3: lots, 4: lots, 5: lots }, mats: { id: lots } }. Returns { ok, why, plumes, cards
     (the exact cards), mats: [[id, n]] }. */
  function quote(sel = {}) {
    const b = bs(), out = { ok: false, why: '', plumes: 0, cards: [], mats: [] };
    if (!b) { out.why = 'Nothing to trade yet.'; return out; }
    const spare = spareCards(b), mats = spareMats(b);
    for (const [r, lots] of Object.entries(sel.cards || {})) {
      const rate = EX.cards[r], n = Math.max(0, Math.floor(+lots || 0)); if (!rate || !n) continue;
      const pool = spare.filter(c => c.r === +r);
      if (pool.length < n * rate.per) { out.why = `Only ${pool.length} spare ★${r} card${pool.length === 1 ? '' : 's'}.`; return out; }
      out.cards.push(...pool.slice(0, n * rate.per)); out.plumes += n * rate.plumes;
    }
    for (const [id, lots] of Object.entries(sel.mats || {})) {
      const m = mats.find(x => x.id === id), n = Math.max(0, Math.floor(+lots || 0)); if (!n) continue;
      if (!m || m.lots < n) { out.why = `Not that much spare ${D().materials[id] ? D().materials[id].name : id}.`; return out; }
      out.mats.push([id, n * m.per]); out.plumes += n;
    }
    if (!out.plumes) { out.why = 'Pick something to trade.'; return out; }
    if (out.plumes > weekLeft()) { out.why = weekLeft() ? `She takes ${weekLeft()} more plume${weekLeft() === 1 ? '' : 's'}’ worth this week.` : 'She has taken all she will this week.'; return out; }
    out.ok = true;
    return out;
  }
  /* Make the trade (after the confirm). Returns the quote, with ok. */
  function trade(sel) {
    const q = quote(sel); if (!q.ok) return q;
    const b = bs(), C = B().ensureCards(b), gone = new Set(q.cards.map(c => c.u));
    // Re-checked against the save itself: never an equipped or locked card.
    if (q.cards.some(c => c.lock || B().wearerOf(b, c.u))) return Object.assign(q, { ok: false, why: 'A card in that trade is in use.' });
    C.list = C.list.filter(c => !gone.has(c.u));
    q.mats.forEach(([id, n]) => { b.mats[id] -= n; if (!(b.mats[id] > 0)) delete b.mats[id]; });
    const g = gs(), x = exState();
    g.plumes += q.plumes; x.n += q.plumes; x.total += q.plumes;
    G.save();
    return q;
  }

  /* ── The Velvet Room's buttons (gacha.js openVelvet) ── */
  function velvetButtons() {
    if (!live()) return '';
    const ready = takenList().filter(q => progress(q).ready).length, fresh = openList().filter(q => !rqs().seen.includes(q.id)).length;
    return `<button type="button" class="g-btn small" data-rq-open><span>Requests${ready ? ` · ${ready} ready` : fresh ? ` · ${fresh} new` : ''}</span></button><button type="button" class="g-btn small" data-px-open><span>Plume Exchange</span></button>`;
  }
  function wireVelvet(el, repaint) {
    el.querySelector('[data-rq-open]')?.addEventListener('click', () => { G.sfx('femc-click'); openRequests(() => repaint?.()); });
    el.querySelector('[data-px-open]')?.addEventListener('click', () => { G.sfx('femc-click'); openExchange(() => repaint?.()); });
  }
  const head = (title, sub) => { const pic = G.portrait('elizabeth', 'happy'); return `<div class="g-st-head"><h2>${esc(title)}<small>${esc(sub)}</small></h2><button type="button" class="g-btn small" data-close><span>Back</span></button></div>
      <div class="g-shop-top">${pic ? `<img src="${pic}" alt="">` : ''}<p class="g-shop-say g-rq-say"></p></div>`; };
  const no = i => `No. ${String(i + 1).padStart(2, '0')}`;

  /* ── Elizabeth's Requests: the board ── */
  function openRequests(done) {
    const bg = G.background('The Velvet Room', 'Daytime');
    const o = UI().overlay(`<div class="g-ga g-rq"${bg ? ` style="--pic:url('${bg}')"` : ''}>${head('Elizabeth’s Requests', 'The Velvet Room · written in silver')}<div class="g-rq-body"></div></div>`, 'g-ga-ov g-vel-ov g-rq-ov', () => done?.());
    const $ = q => o.el.querySelector(q);
    const say = t => { $('.g-rq-say').textContent = t; };
    say(openList().length || takenList().length ? LINES.hi[S().day % LINES.hi.length] : LINES.none[0]);
    const card = (q, mode) => {
      const t = rqs().taken[q.id], pr = progress(q, t), w = Math.round(Math.min(1, pr.need ? pr.have / pr.need : 0) * 100);
      const fresh = mode === 'open' && !rqs().seen.includes(q.id);
      return `<li class="g-rq-card${pr.ready ? ' ready' : ''}${mode === 'taken' ? ' taken' : ''}" data-rq="${q.id}"><p class="g-rq-top"><span class="g-rq-no">${no(REQUESTS.indexOf(q))}</span><b>${esc(q.title)}</b>${fresh ? '<i class="g-new">NEW</i>' : ''}</p>
        <p class="g-rq-ask">${esc(q.ask)}</p>
        ${mode === 'taken' ? `<span class="g-ec-meter"><i style="--w:${w}%"></i></span>` : ''}<small class="g-rq-prog">${esc(pr.line)}</small>
        <p class="g-rq-pay">Reward: <b>${esc(payLine(q))}</b>${['item', 'mat'].includes(q.kind) ? ' · handed over when you hand it in' : ''}</p>
        <div class="g-row g-rq-btns">${mode === 'taken'
          ? `<button type="button" class="g-btn${pr.ready ? ' pink' : ''} small" data-rq-in="${q.id}"${pr.ready ? '' : ' disabled'}><span>${pr.ready ? 'Hand it in' : 'Not yet'}</span></button><button type="button" class="g-btn small" data-rq-drop="${q.id}"><span>Set it down</span></button>`
          : `<button type="button" class="g-btn small" data-rq-take="${q.id}"${takenList().length >= MAX_TAKEN ? ' disabled' : ''}><span>Take it</span></button>`}</div></li>`;
    };
    const paint = (focus) => {
      const taken = takenList(), open = openList(), doneL = REQUESTS.filter(q => isDone(q.id)), nw = nextWave();
      $('.g-rq-body').innerHTML = `<p class="g-ga-own"><span>Taken <b>${taken.length} / ${MAX_TAKEN}</b></span><span>Done <b>${doneL.length} / ${REQUESTS.length}</b></span><span>Velvet Plumes <b>${gs().plumes}</b></span></p>
        ${taken.length ? `<p class="g-kicker">Taken</p><ul class="g-rq-list">${taken.map(q => card(q, 'taken')).join('')}</ul>` : ''}
        <p class="g-kicker">On the board</p>${open.length ? `<ul class="g-rq-list">${open.map(q => card(q, 'open')).join('')}</ul>` : `<p class="g-note">${nw ? 'Nothing else is posted yet.' : 'The board is empty. Every request she posted is answered or taken.'}</p>`}
        <p class="g-note small">${nw ? `More are posted as the year goes on (next on ${esc(nw)}). ` : ''}Up to ${MAX_TAKEN} at a time. Counts like “Shadows” or “mornings” start when a request is taken; floors, ranks and Echoes are read as they are.</p>
        ${doneL.length ? `<details class="g-rq-done"><summary>Answered (${doneL.length})</summary><ul>${doneL.map(q => `<li><span class="g-rq-no">${no(REQUESTS.indexOf(q))}</span> ${esc(q.title)}</li>`).join('')}</ul></details>` : ''}`;
      // Everything on the board has now been seen (the NEW marks stay up until the next paint).
      open.forEach(q => { if (!rqs().seen.includes(q.id)) rqs().seen.push(q.id); });
      o.el.querySelectorAll('[data-rq-take]').forEach(bt => bt.addEventListener('click', () => {
        const r = accept(bt.dataset.rqTake);
        if (!r.ok) { say(LINES.full[0]); G.sfx('femc-hover'); return; }
        G.sfx('femc-rankup'); say(pickLine(LINES.taken)); paint(`[data-rq-in="${bt.dataset.rqTake}"], [data-rq-drop="${bt.dataset.rqTake}"]`);
      }));
      o.el.querySelectorAll('[data-rq-drop]').forEach(bt => bt.addEventListener('click', () => { if (giveUp(bt.dataset.rqDrop)) { G.sfx('femc-hover'); say(LINES.given[0]); paint(`[data-rq-take="${bt.dataset.rqDrop}"]`); } }));
      o.el.querySelectorAll('[data-rq-in]').forEach(bt => bt.addEventListener('click', () => {
        const r = handIn(bt.dataset.rqIn);
        if (!r.ok) { say(r.why); return; }
        G.sfx('femc-rankup'); say(`“${r.q.thanks}”`); G.toast('perk', `${r.q.title}: ${r.got.join(', ')}`);
        paint();
      }));
      if (focus) o.el.querySelector(focus)?.focus({ preventScroll: true });
    };
    paint();
    G.saveQuiet();
    return o;
  }

  /* ── The Plume Exchange ── */
  const EXL = {
    hi: ['“Spares? Bring them. I pay in plumes, and I never haggle, because I have never once lost.”', '“A card no one wears is a card no one reads. I read everything. Hand them over.”'],
    none: ['“Nothing spare at all. Every card you hold is worn, or wanted, or the only one of its kind. Good.”'],
    cap: ['“That is all I will take this week. I am running out of drawers.”'],
    done: ['“A fair trade. I wrote it down, so it is fairer still.”', '“Thank you. These will be very happy in a drawer.”']
  };
  function openExchange(done) {
    const bg = G.background('The Velvet Room', 'Daytime');
    const o = UI().overlay(`<div class="g-ga g-px"${bg ? ` style="--pic:url('${bg}')"` : ''}>${head('Plume Exchange', 'Elizabeth · spares for Velvet Plumes')}<div class="g-px-body" aria-live="polite"></div></div>`, 'g-ga-ov g-vel-ov g-px-ov', () => done?.());
    const $ = q => o.el.querySelector(q);
    const say = t => { $('.g-rq-say').textContent = t; };
    let sel = { cards: {}, mats: {} }, confirm = null;
    const step = (kind, k, lots, max, label, rate) => `<li class="g-px-row"><span class="g-px-what"><b>${label}</b><small>${rate}</small></span>
      <span class="g-px-step"><button type="button" class="g-btn small" data-px-step="${kind}:${k}:-1"${lots ? '' : ' disabled'} aria-label="Less"><span>−</span></button><output>${lots}</output><button type="button" class="g-btn small" data-px-step="${kind}:${k}:1"${lots < max ? '' : ' disabled'} aria-label="More"><span>+</span></button></span></li>`;
    function paint() {
      const left = weekLeft(), b = bs();
      if (confirm) {
        const q = confirm, byR = r => q.cards.filter(c => c.r === r);
        $('.g-px-body').innerHTML = `<p class="g-kicker">Confirm the trade</p><div class="g-px-confirm">
          <p>These go to Elizabeth for good:</p><ul class="g-px-list">${[5, 4, 3].filter(r => byR(r).length).map(r => byR(r).map(c => `<li>${esc(B().cardName(c))} <b>★${c.r}</b> <small>Lv ${c.lvl || 1}</small></li>`).join('')).join('')}
          ${q.mats.map(([id, n]) => `<li>${esc(D().materials[id].name)} <b>×${n}</b></li>`).join('')}</ul>
          <p class="g-px-get">Solar gets <b>+${q.plumes} Velvet Plume${q.plumes === 1 ? '' : 's'}</b>.</p>
          <p class="g-note small">Equipped, locked, levelled and refined cards never go, nor the last copy of any card.</p></div>
          <div class="g-row"><button type="button" class="g-btn pink" data-px-go><span>Trade</span></button><button type="button" class="g-btn small" data-px-back><span>Back</span></button></div>`;
        $('[data-px-go]').addEventListener('click', () => {
          const r = trade(sel); confirm = null;
          if (!r.ok) { say(`“${r.why}”`); return paint(); }
          sel = { cards: {}, mats: {} }; G.sfx('femc-rankup'); say(pickLine(EXL.done)); G.toast('perk', `Plume Exchange: Velvet Plumes +${r.plumes}`); paint();
        });
        $('[data-px-back]').addEventListener('click', () => { confirm = null; G.sfx('femc-hover'); paint(); });
        $('[data-px-go]').focus({ preventScroll: true });
        return;
      }
      const spare = spareCards(b), mats = spareMats(b), q = quote(sel);
      // Plumes already picked (counted from the picks, so a pick over the week's cap still shows), and the room left this week.
      const used = Object.entries(sel.cards).reduce((a, [r, n]) => a + n * EX.cards[r].plumes, 0) + Object.values(sel.mats).reduce((a, n) => a + n, 0);
      const room = Math.max(0, left - used);
      const cardRows = [3, 4, 5].map(r => { const n = spare.filter(c => c.r === r).length, rate = EX.cards[r], lots = sel.cards[r] || 0, max = Math.min(Math.floor(n / rate.per), lots + Math.floor(room / rate.plumes));
        return n ? step('c', r, lots, max, `★${r} cards · ${n} spare`, `${rate.per === 1 ? 'Each' : `${rate.per} cards`} → ${rate.plumes} plume${rate.plumes === 1 ? '' : 's'}${lots ? ` · trading ${lots * rate.per}` : ''}`) : ''; }).join('');
      const matRows = mats.filter(m => m.lots > 0).map(m => { const lots = sel.mats[m.id] || 0; return step('m', m.id, lots, Math.min(m.lots, lots + room), `${esc(m.name)} · ${m.spare} spare`, `${m.per} → 1 plume${m.keep ? ` · keeps ${m.keep}` : ''}${lots ? ` · trading ${lots * m.per}` : ''}`); }).join('');
      $('.g-px-body').innerHTML = `<p class="g-ga-own"><span>This week <b>${exState().n} / ${EX.week}</b></span><span>Velvet Plumes <b>${gs().plumes}</b></span></p>
        <p class="g-kicker">Spare Revelation cards</p>${cardRows ? `<ul class="g-px-rows">${cardRows}</ul>` : '<p class="g-note">No spares: every card is worn, locked, levelled, or the only copy of its set and slot.</p>'}
        <p class="g-kicker">Surplus materials</p>${matRows ? `<ul class="g-px-rows">${matRows}</ul>` : '<p class="g-note">Nothing in surplus.</p>'}
        <p class="g-note small">Up to ${EX.week} plumes a week. Equipped, locked, levelled and refined cards are never traded, nor the last copy of a card’s set and slot; the weakest spares go first. Materials a taken request still needs are kept back.</p>
        <div class="g-row"><button type="button" class="g-btn pink" data-px-ask${q.ok ? '' : ' disabled'}><span>${q.ok ? `Trade for ${q.plumes} plume${q.plumes === 1 ? '' : 's'}…` : esc(left ? q.why || 'Pick something to trade' : 'Done for this week')}</span></button></div>`;
      o.el.querySelectorAll('[data-px-step]').forEach(bt => bt.addEventListener('click', () => {
        const [kind, k, d] = bt.dataset.pxStep.split(':'), box = kind === 'c' ? sel.cards : sel.mats;
        box[k] = Math.max(0, (box[k] || 0) + +d); if (!box[k]) delete box[k];
        G.sfx('femc-hover'); paint(); o.el.querySelector(`[data-px-step="${kind}:${k}:${d}"]:not([disabled])`)?.focus({ preventScroll: true });
      }));
      $('[data-px-ask]')?.addEventListener('click', () => { const qq = quote(sel); if (!qq.ok) return; confirm = qq; G.sfx('femc-click'); paint(); });
    }
    say(!weekLeft() ? EXL.cap[0] : !spareCards().length && !spareMats().some(m => m.lots) ? EXL.none[0] : EXL.hi[S().day % EXL.hi.length]);
    paint();
    return o;
  }

  return { REQUESTS, WAVES, MAX_TAKEN, SINCE, EX, ENTER, TOP, GUARD, MONAD, MONAD_GUARD, byId, posted, openList, takenList, progress, payLine, accept, giveUp, handIn, tellReady, rode, counter, nextWave,
    milestones, dueMiles, payFloors, afterFight, spareCards, spareMats, quote, trade, weekLeft, exState, velvetButtons, wireVelvet, openRequests, openExchange };
})();
