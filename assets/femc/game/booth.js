/* Persona 3: Solstice · the photo booth (purikura) at Paulownia Mall (FEMC-ART-TODO 15; FEMC-ART-WIRING "15. Photo booth",
   the approved note of Oct 31 2026). Go Out → Paulownia Mall → Game Panic → Photo booth (data/places.js `booth: true`,
   ¥400, once a day, After School or Evening). Solar picks a partner she has met (Haechan, Jungwon, Akihiko, Yukari, Hanni,
   Hyein), a frame (8), then three shots (her pose and the partner's; a half-heart on either side pairs the other half), then
   up to three stamps placed on the strip. Print pays and spends the time slot (core.js doActivity) and keeps the strip in
   the Album's "Photo Booth" row: S.album.booth = [{ date, day, run, who, frame, shots: [[solarPose, partnerPose] x 3],
   stamps: [{ id, x, y }] }] (x / y in % of the strip). Nothing is baked: the strip is drawn live from its layers, here and in
   the Album (menu.js), and it carries into New Game+ with the album (menu.js albumCarry). The first strip with someone in a
   calendar month gives that link one ♪ (core.js bond).
   Art (tools/femc-booth.py -> game/art/booth/, listed in booth/index.js as window.FEMC_BOOTH_ART): Kat's eight frames, nine
   stamps and the pose sheets of Solar and all six partners are in (Nov 1). The drawn stand-ins stay as the fallback for
   anything not listed (DRAWN_FRAMES: a black border with the season's motifs from battle/looks-art.js; STAMP_SVG; a pose
   without art is the person's scene portrait with a small drawn gesture badge, POSES). The drawn heart over a paired
   half-heart only shows while one of the two is a stand-in.
   Solo shoot (Kat, Nov 4 2026: the "photo mode" folded into the booth): the first tile on the partner step, always there
   (so the booth opens even before anyone is met). Steps: frame → the shoot (an outfit she owns or her own look, any of its
   HD poses, a backdrop) → stamps → Print. Looks: her own (profile/solar-poses/, ready.js own.hd / hdv) and every owned
   Solar outfit with an HD set (cosmetics.js hdOf). Backdrops (backdrops()): the booth's pink, the dorm lounge, the mall and
   the photo booth, plus the day and night art of every place she has done something at (S.done, core.js background), so
   nothing she hasn't been to shows. One picture, 3:4, framed knees-up from the set's fig.json (head top `ht`, head centre
   `hx`, aspect `ar`; fetched once, copied into the record as `fit` so the Album draws without fetching). Print: the same
   ¥400, slot and once-a-day rule, no ♪. Record: { kind: 'solo', date, day, run, look: <id> | null (her own), pose, bg:
   <bg slug> | 'pink', fit: { ar, ht, hx }, frame, stamps } in S.album.booth beside the strips; the Album row and viewer
   draw both kinds (soloHtml). Strips have no `kind`.
   Settings: reduced motion: no countdown bounce or flash, the shots crossfade; Reduce flashes (calm): a soft fade instead of
   the white flash. Test hooks: FemcBooth.state(), FemcBooth.stripHtml(rec), FemcBooth.soloHtml(rec), FemcBooth.partners(),
   FemcBooth.looks(), FemcBooth.backdrops(). */
window.FemcBooth = (() => {
  const G = window.FemcGame;
  if (!G) return null;
  const S = () => G.S, LA = () => window.FemcLooksArt || {};
  const ART = () => window.FEMC_BOOTH_ART || { frames: [], stamps: [], poses: [] };
  const DIR = `${G.base}assets/femc/game/art/booth/`, V = 2;
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const calm = () => !!(G.settings && G.settings().calm);
  const PARTNERS = ['haechan', 'jungwon', 'akihiko', 'yukari', 'hanni', 'hyein'];
  // Each person's six booth poses (the cells of their pose sheet, FEMC-ART-TODO 15D-15J): [label, stand-in face, badge].
  // Cell 2 (index 1) is the half-heart: Solar's left half, everyone else's right half.
  const POSES = {
    solar: [['Peace sign', 'happy', 'peace'], ['Heart, left half', 'happy', 'heart'], ['Squished cheeks', 'flustered', 'blush'], ['Finger heart', 'happy', 'mini'], ['Cat paws', 'happy', 'paw'], ['Pointing, laughing', 'happy', 'point']],
    haechan: [['Peace, tongue out', 'happy', 'peace'], ['Heart, right half', 'happy', 'heart'], ['Puffed cheeks', 'surprised', 'blush'], ['Pointing at her', 'happy', 'point'], ['Finger heart', 'happy', 'mini'], ['Pretend bite', 'serious', 'bang']],
    jungwon: [['Shy peace', 'flustered', 'peace'], ['Heart, right half', 'flustered', 'heart'], ['One cheek puffed', 'neutral', 'blush'], ['Finger heart', 'serious', 'mini'], ['Chin on fist', 'happy', 'glint'], ['Laughing', 'happy', 'note']],
    akihiko: [['Stiff peace', 'neutral', 'peace'], ['Heart, right half', 'blushing', 'heart'], ['Flexing', 'happy', 'star'], ['Fist bump', 'happy', 'bang'], ['Flustered', 'blushing', 'blush'], ['A real laugh', 'happy', 'note']],
    yukari: [['Peace and a wink', 'happy', 'peace'], ['Heart, right half', 'happy', 'heart'], ['Squished cheeks', 'blushing', 'blush'], ['Bunny ears', 'happy', 'bunny'], ['A pout', 'serious', 'bang'], ['Blowing a kiss', 'blushing', 'mini']],
    hanni: [['Peace sign', 'happy', 'peace'], ['Heart, right half', 'happy', 'heart'], ['Puffed cheeks', 'surprised', 'blush'], ['Cat paws', 'happy', 'paw'], ['"Oh!"', 'surprised', 'bang'], ['Giggling', 'happy', 'note']],
    hyein: [['Small peace', 'neutral', 'peace'], ['Heart, right half', 'happy', 'heart'], ['Squished cheeks', 'flustered', 'blush'], ['Finger heart', 'happy', 'mini'], ['Sleepy yawn', 'neutral', 'zz'], ['Big laugh', 'happy', 'note']]
  };
  const HEART = 1;
  const FRAMES = [[1, 'Hearts'], [2, 'Stars'], [3, 'Lace & bows'], [4, 'Sun & moon'], [5, 'Spring'], [6, 'Summer'], [7, 'Autumn'], [8, 'Winter']];
  // Stand-ins for frames 5-8 (booth-frames-2 to come): a black border with the season's motifs (looks-art.js themes).
  const DRAWN_FRAMES = { 5: 'petals', 6: 'bubbles', 7: 'thorns', 8: 'snow' };
  const STAMPS = ['Sparkles', 'Heart', 'Crown', 'Cat ears', 'Bunny ears', 'Blush', 'Speech bubble', 'Sun', 'Moon'];
  const W = 'stroke="#fff" stroke-width="2.2" paint-order="stroke" stroke-linejoin="round"';
  // Stand-in stamps (booth-stamps to come): bold flat stickers with a white edge, in the booth's pink / black / white.
  const STAMP_SVG = [
    `<path ${W} fill="#ffb3d4" d="M10 2c.8 5 2.6 6.8 8 8-5.4 1.2-7.2 3-8 8-.8-5-2.6-6.8-8-8 5.4-1.2 7.2-3 8-8z"/><path ${W} fill="#fff" d="M19 13c.4 2.4 1.2 3.2 3.6 3.6-2.4.4-3.2 1.2-3.6 3.6-.4-2.4-1.2-3.2-3.6-3.6 2.4-.4 3.2-1.2 3.6-3.6z"/>`,
    `<path ${W} fill="#ff4f9e" d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 3.1C20.5 15.7 12 21 12 21z"/><ellipse cx="8.4" cy="9.6" rx="1.6" ry="1" fill="#fff" opacity=".8"/>`,
    `<path ${W} fill="#ff8cc0" d="M3 17.5 4.4 7l4.4 4.6L12 4.5l3.2 7.1L19.6 7 21 17.5z"/><rect x="3" y="17" width="18" height="3" rx="1" fill="#14070f" ${W}/><circle cx="12" cy="13" r="1.5" fill="#fff"/>`,
    `<path ${W} fill="#14070f" d="M3 19c0-6 4-10 9-10s9 4 9 10h-2.2c0-4.8-3-7.8-6.8-7.8S5.2 14.2 5.2 19z"/><path ${W} fill="#ff4f9e" d="M4.4 12.6 5.5 3.5l5.2 5.8zM19.6 12.6 18.5 3.5l-5.2 5.8z"/><path fill="#ffd0e6" d="M6.3 9.8 6.8 6l2.2 2.6zM17.7 9.8 17.2 6 15 8.6z"/>`,
    `<path ${W} fill="#fff" d="M3 20c0-5.4 4-8.6 9-8.6s9 3.2 9 8.6h-2.2c0-4.2-3-6.4-6.8-6.4S5.2 15.8 5.2 20z"/><ellipse ${W} fill="#fff" cx="8.6" cy="7" rx="2.6" ry="6" transform="rotate(-12 8.6 7)"/><ellipse ${W} fill="#fff" cx="15.4" cy="7" rx="2.6" ry="6" transform="rotate(12 15.4 7)"/><ellipse fill="#ffb3d4" cx="8.6" cy="7.4" rx="1.1" ry="3.8" transform="rotate(-12 8.6 7.4)"/><ellipse fill="#ffb3d4" cx="15.4" cy="7.4" rx="1.1" ry="3.8" transform="rotate(12 15.4 7.4)"/>`,
    `<ellipse ${W} fill="#ff8cc0" cx="6.5" cy="12" rx="4.6" ry="3"/><ellipse ${W} fill="#ff8cc0" cx="17.5" cy="12" rx="4.6" ry="3"/><path d="M4.4 10.8 3.6 13M6.6 10.6 5.8 12.8M8.8 10.8 8 13M15.4 10.8l-.8 2.2M17.6 10.6l-.8 2.2M19.8 10.8 19 13" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/>`,
    `<path ${W} fill="#ffb3d4" d="M3 4.5h18a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-5 4 1-4H3A1.5 1.5 0 0 1 1.5 15V6A1.5 1.5 0 0 1 3 4.5z"/>`,
    `<path d="M12 1.8v3M12 19.2v3M1.8 12h3M19.2 12h3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1" stroke="#ff4f9e" stroke-width="2.4" stroke-linecap="round"/><circle ${W} fill="#ffb3d4" cx="12" cy="12" r="5.6"/><circle cx="10" cy="11.2" r=".8" fill="#14070f"/><circle cx="14" cy="11.2" r=".8" fill="#14070f"/><path d="M9.8 13.4c1.2 1.3 3.2 1.3 4.4 0" stroke="#14070f" stroke-width="1" fill="none" stroke-linecap="round"/>`,
    `<path ${W} fill="#ffe3ee" d="M15.5 2.5a9.5 9.5 0 1 0 6 16.9A7.6 7.6 0 0 1 15.5 2.5z"/><path d="M8.6 12.4c.7.7 1.8.7 2.4 0" stroke="#14070f" stroke-width="1" fill="none" stroke-linecap="round"/><circle cx="8" cy="15" r="1.1" fill="#ff8cc0"/>`
  ];
  // The little gesture badge on a stand-in pose (until the person's booth pose sheet is in).
  const BADGE = {
    peace: '<path fill="currentColor" d="M8 22v-6.5L5.4 6.2a1.6 1.6 0 0 1 3-1L11 12l.6-8.6a1.6 1.6 0 0 1 3.2.2L14.4 12 16 9.4a1.4 1.4 0 0 1 2.4 1.4L16 16v6z"/>',
    heart: '<path fill="currentColor" d="M12 21s-8.5-5.3-8.5-11.3A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 3.1C20.5 15.7 12 21 12 21z"/>',
    mini: '<path fill="currentColor" d="M12 18s-6-3.7-6-8a3.3 3.3 0 0 1 6-2 3.3 3.3 0 0 1 6 2c0 4.3-6 8-6 8z"/>',
    blush: '<ellipse fill="currentColor" cx="6.5" cy="12" rx="4.5" ry="3"/><ellipse fill="currentColor" cx="17.5" cy="12" rx="4.5" ry="3"/>',
    paw: '<circle fill="currentColor" cx="12" cy="15.5" r="4.6"/><circle fill="currentColor" cx="5.6" cy="10" r="2.2"/><circle fill="currentColor" cx="9.4" cy="5.8" r="2.2"/><circle fill="currentColor" cx="14.6" cy="5.8" r="2.2"/><circle fill="currentColor" cx="18.4" cy="10" r="2.2"/>',
    point: '<path fill="currentColor" d="M2 10.5h11V6l9 6-9 6v-4.5H2z"/>',
    bang: '<path fill="currentColor" d="M10 2h4l-.8 13h-2.4zM12 17.2a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8z"/>',
    star: '<path fill="currentColor" d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z"/>',
    glint: '<path fill="currentColor" d="M12 1c.9 5.8 3.2 8.1 11 11-7.8 2.9-10.1 5.2-11 11-.9-5.8-3.2-8.1-11-11 7.8-2.9 10.1-5.2 11-11z"/>',
    note: '<path fill="currentColor" d="M9 17.5a3.2 3.2 0 1 1-2-3V4l12-2.2v13a3.2 3.2 0 1 1-2-3V5.5L9 7z"/>',
    bunny: '<ellipse fill="currentColor" cx="8.4" cy="9" rx="2.6" ry="7" transform="rotate(-10 8.4 9)"/><ellipse fill="currentColor" cx="15.6" cy="9" rx="2.6" ry="7" transform="rotate(10 15.6 9)"/>',
    zz: '<path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" d="M4 4h7l-7 8h7M14 12h6l-6 8h6"/>'
  };
  const LINES = [
    'The booth counted down in a voice far too cheerful for the mall, and three flashes later she and {n} were bent over the screen, arguing about stickers.',
    '{n} squeezed in beside her. Three flashes, one argument about the frame, and a strip of photos neither of them would admit to liking this much.',
    'They came out blinking, the strip still warm from the printer. {n} held it up to the light as if it might change.'
  ];

  const nm = id => (G.name ? G.name(id) : id);
  const partners = () => PARTNERS.filter(id => G.isMet(id));
  const hasPoses = who => (ART().poses || []).includes(who);
  const artFrame = n => (ART().frames || []).includes(n);
  const artStamp = n => (ART().stamps || []).includes(n);

  // ── Solo shoot: her looks, their HD poses, backdrops ──
  const POSE_NAMES = { 'arms-crossed': 'Arms crossed', thinking: 'Thinking', wave: 'Wave', peace: 'Peace sign', hair: 'Hand in hair', shy: 'Shy',
    study: 'Reading', ramen: 'Ramen', watering: 'Watering', evoker: 'Evoker', stretch: 'Stretch', phone: 'Phone', cheer: 'Fist pump', jump: 'Jump',
    tease: 'Hand on hip', heart: 'Heart hands', lookback: 'Over the shoulder', sewing: 'Sewing' };
  const POSE_ORDER = Object.keys(POSE_NAMES);
  const READY = () => window.FEMC_ART_READY || {};
  const ownDir = () => `${G.base}assets/femc/profile/solar-poses/`;
  function lookSrc(id, pose) {
    if (!id) return `${ownDir()}${pose}.webp?v=${(READY().own || {}).hdv || 1}`;
    return `${G.base}assets/femc/game/art/skins/${id}/hd/${pose}.webp?v=${((READY().skins || {})[id] || {}).hdv || 1}`;
  }
  const figUrl = id => (id ? `${G.base}assets/femc/game/art/skins/${id}/hd/fig.json` : `${ownDir()}fig.json`);
  function looks() {
    const C = window.FemcCosmetics, own = (READY().own || {}).hd || [];
    const out = [{ id: null, name: 'Her own look', poses: POSE_ORDER.filter(k => own.includes(k)) }];
    if (C) C.ITEMS.filter(x => x.kind === 'skin' && x.who === 'solar' && C.owns(x.id) && C.hdOf(x)).forEach(x => {
      const have = ((READY().skins || {})[x.id] || {}).hd || [];
      out.push({ id: x.id, name: x.name, poses: POSE_ORDER.filter(k => have.includes(k)) });
    });
    return out.filter(l => l.poses.length);
  }
  const lookName = id => (id ? (window.FemcCosmetics && window.FemcCosmetics.byId(id) || {}).name || 'An outfit' : 'Her own look');
  function backdrops() {
    const s = S(), out = [{ id: 'pink', name: 'Booth pink' }], seen = new Set(['pink']);
    const add = (name, place, time) => {
      const b = G.background(place, time); if (!b) return;
      const m = b.url.match(/\/bg\/([^/?]+)\.webp/); if (!m || seen.has(m[1])) return;
      seen.add(m[1]); out.push({ id: m[1], name });
    };
    const base = (name, slug) => { if (!seen.has(slug)) { seen.add(slug); out.push({ id: slug, name }); } };
    base('Dorm lounge', 'iwatodaidorm-livingroom-night');
    add('Paulownia Mall', 'Paulownia Mall', ''); add('The photo booth', 'Paulownia Mall · Photo Booth', '');
    G.activities().filter(a => (s.done || {})[a.id] > 0).forEach(a => {
      const area = G.areaById(a.area), place = a.place || `${area ? area.name : ''} · ${a.spot}`;
      add(a.spot, place, ''); add(`${a.spot} at night`, place, 'Evening');
    });
    return out;
  }
  const figCache = {};
  function loadFit(id, pose) {
    const k = id || 'own';
    if (figCache[k] === undefined) figCache[k] = fetch(figUrl(id)).then(r => (r.ok ? r.json() : {})).catch(() => ({})).then(j => (figCache[k] = j));
    const c = figCache[k];
    if (c && !c.then) { const f = c[pose]; return Promise.resolve(f ? { ar: f.ar, ht: f.ht, hx: f.hx } : null); }
    return c.then(j => { const f = j[pose]; return f ? { ar: f.ar, ht: f.ht, hx: f.hx } : null; });
  }
  // Knees-up in a 3:4 shot: the figure 155% of the shot's height, its head 9% from the top and centred.
  const SOLO_H = 1.55;
  function figStyle(fit) {
    if (!fit) return 'height:155%;left:50%;top:4%;translate:-50% 0';
    const w = SOLO_H * (4 / 3) * fit.ar; // the figure's width in shot widths
    return `height:${SOLO_H * 100}%;left:${((0.5 - fit.hx * w) * 100).toFixed(2)}%;top:${((0.09 - fit.ht * SOLO_H) * 100).toFixed(2)}%`;
  }
  function soloShot(rec, cls = '') {
    const bg = rec.bg && rec.bg !== 'pink' ? `<i class="bs-bg photo" style="background-image:url('${G.base}assets/femc/bg/${esc(rec.bg)}.webp')"></i>` : '<i class="bs-bg"></i>';
    return `<div class="bs-shot solo${cls}">${bg}<img class="bs-solo-fig" src="${esc(lookSrc(rec.look, rec.pose))}" alt="" draggable="false" style="${figStyle(rec.fit)}">${frameHtml(rec.frame)}</div>`;
  }
  // The solo picture as a card on paper, stamps on top (the stamp step, the print, the Album).
  function soloHtml(rec, live = false, cls = '') {
    return `<div class="bs-solo${cls}" data-frame="${rec.frame}">${soloShot(rec)}<div class="bs-stamps">${(rec.stamps || []).map((s, i) => stampHtml(s.id, i, s.x, s.y, live)).join('')}</div></div>`;
  }
  const SOLO_LINES = [
    'The booth was built for two. She took it over anyway, and the countdown was much less stressful without anyone stealing the frame.',
    'One pose, one flash, and a picture she kept looking at all the way home.',
    'The booth’s cheerful voice told her to smile. For once she didn’t mind being told.'
  ];

  // ── Drawing (shared by the booth and the Album) ──
  function person(who, i, side) {
    const p = (POSES[who] || POSES.solar)[i] || POSES.solar[0];
    if (hasPoses(who)) return `<img class="bs-p art ${side}" src="${DIR}${who}-${i}.webp?v=${V}" alt="" draggable="false">`;
    const src = G.portrait(who, p[1]) || '';
    return `<span class="bs-p ${side}"><img src="${esc(src)}" alt="" draggable="false"><svg class="bs-badge" viewBox="0 0 24 24" aria-hidden="true">${BADGE[p[2]] || ''}</svg></span>`;
  }
  function frameHtml(n) {
    if (artFrame(n)) return `<img class="bs-frame" src="${DIR}frame-${n}.webp?v=${V}" alt="" draggable="false">`;
    const th = DRAWN_FRAMES[n] || 'hearts', A = LA(), spots = [[4, 4], [50, 2.4], [96, 4], [97, 30], [97, 62], [96, 96], [50, 97.6], [4, 96], [3, 62], [3, 30], [26, 3], [74, 3], [26, 97], [74, 97]];
    const m = A.motif ? spots.map(([x, y], i) => A.motif(th, i, `left:calc(${x}cqw - 10cqw);top:calc(${y}cqh - 10cqw);--r:${(i * 37) % 60 - 30}deg`, 'tm bs-fm')).join('') : '';
    return `<span class="bs-frame drawn" data-th="${th}" aria-hidden="true">${m}</span>`;
  }
  function stampHtml(id, i, x, y, live) {
    const inner = artStamp(id) ? `<img src="${DIR}stamp-${id}.webp?v=${V}" alt="" draggable="false">` : `<svg viewBox="0 0 24 24" aria-hidden="true">${STAMP_SVG[id - 1] || ''}</svg>`;
    const pos = `left:${x}%;top:${y}%`;
    return live ? `<button type="button" class="bs-st" data-st="${i}" style="${pos}" aria-label="${esc(STAMPS[id - 1])} stamp: arrows move it, Delete removes it">${inner}</button>`
      : `<span class="bs-st" style="${pos}">${inner}</span>`;
  }
  function shotHtml(who, frame, shot, cls = '') {
    const [s, q] = shot || [0, 0], heart = s === HEART && q === HEART && !(hasPoses('solar') && hasPoses(who)); // drawn hands make their own heart
    return `<div class="bs-shot${cls}"><i class="bs-bg"></i>${person('solar', s, 'l')}${person(who, q, 'r')}${heart ? `<svg class="bs-heart" viewBox="0 0 24 24" aria-hidden="true">${BADGE.heart}</svg>` : ''}${frameHtml(frame)}</div>`;
  }
  // A whole strip of three, stamps on top. live: the stamps are buttons (the stamp step).
  function stripHtml(rec, live = false, cls = '') {
    const shots = (rec.shots || []).slice(0, 3);
    while (shots.length < 3) shots.push(null);
    return `<div class="bs-strip${cls}" data-frame="${rec.frame}">${shots.map(sh => (sh ? shotHtml(rec.who, rec.frame, sh) : '<div class="bs-shot empty"><i class="bs-bg"></i></div>')).join('')}
      <div class="bs-stamps">${(rec.stamps || []).map((s, i) => stampHtml(s.id, i, s.x, s.y, live)).join('')}</div></div>`;
  }
  const dateText = rec => { try { const d = G.dateOf(rec.day); return d.toLocaleString('en', { month: 'long', day: 'numeric' }); } catch (e) { return rec.date || ''; } };

  // ── The booth ──
  let cur = null;
  function open(o) {
    close(true);
    const me = cur = { o, step: 'who', rec: { who: null, frame: 1, shots: [], stamps: [] }, pose: [0, 0], sel: -1, printed: false, log: [] };
    const el = document.createElement('div');
    el.className = 'g-overlay g-booth-ov';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', 'Photo booth');
    el.innerHTML = `<div class="g-panel g-booth${reduced() ? ' reduced' : ''}${calm() ? ' calm' : ''}"><div class="bs-body"></div></div>`;
    document.body.appendChild(el);
    me.el = el; me.body = el.querySelector('.bs-body');
    me.key = e => {
      if (cur !== me || el !== [...document.querySelectorAll('.g-overlay')].pop()) return;
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); if (me.printed) me.go(); else if (me.step === 'who') close(); else back(); return; }
      const st = e.target.closest && e.target.closest('.bs-st');
      if (st && me.step === 'stamps') {
        const s = me.rec.stamps[+st.dataset.st]; if (!s) return;
        const d = { ArrowLeft: [-2, 0], ArrowRight: [2, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
        if (d) { e.preventDefault(); s.x = clamp(s.x + d[0]); s.y = clamp(s.y + d[1]); st.style.left = s.x + '%'; st.style.top = s.y + '%'; }
        else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); me.rec.stamps.splice(+st.dataset.st, 1); paint(); }
      }
    };
    window.addEventListener('keydown', me.key, true);
    el.addEventListener('click', e => { if (e.target !== el) return; if (me.printed) me.go(); else if (me.step === 'who') close(); });
    G.sfx('femc-click');
    paint();
    return me;
  }
  const clamp = v => Math.max(4, Math.min(96, Math.round(v)));
  function close(quick) {
    const me = cur; if (!me) return false;
    cur = null; window.removeEventListener('keydown', me.key, true);
    const el = me.el;
    if (quick || !el.isConnected) el.remove(); else { el.classList.add('out'); setTimeout(() => el.remove(), 220); }
    if (!quick) { G.sfx('femc-back'); if (!me.printed && me.o.onCancel) me.o.onCancel(); }
    return true;
  }
  function back() {
    const me = cur; if (!me) return;
    if (me.step === 'frame') { me.step = 'who'; me.solo = null; }
    else if (me.step === 'solo') me.step = 'frame';
    else if (me.step === 'stamps' && me.solo) { me.step = 'solo'; me.rec.stamps = []; }
    else if (me.step === 'shots') { if (me.rec.shots.length) me.rec.shots.pop(); else me.step = 'frame'; }
    else if (me.step === 'stamps') { me.step = 'shots'; me.rec.shots.pop(); me.rec.stamps = []; }
    G.sfx('femc-back'); paint();
  }
  const head = (k, t, sub) => `<p class="g-kicker">Paulownia Mall · Photo booth · ${k}</p><h2>${esc(t)}</h2>${sub ? `<p class="g-note">${esc(sub)}</p>` : ''}`;
  function paint() {
    const me = cur; if (!me) return;
    const r = me.rec, b = me.body;
    let h = '';
    if (me.step === 'who') {
      h = `${head('1 / 4', 'Who’s squeezing in?', '¥400 for a strip of three with someone, or a solo shoot in any outfit she owns. It goes into her Album.')}
        <div class="bs-who"><button type="button" class="bs-pick solo" data-solo><img src="${esc(lookSrc(null, 'peace'))}" alt="" draggable="false"><b>Solo shoot</b></button>${partners().map(id => `<button type="button" class="bs-pick" data-who="${id}"><img src="${esc(G.portrait(id, 'happy') || '')}" alt="" draggable="false"><b>${esc(nm(id))}</b></button>`).join('')}</div>
        <div class="g-row bs-nav"><button type="button" class="g-btn small" data-bs="close">Leave</button></div>`;
    } else if (me.step === 'frame') {
      h = `<div class="bs-cols"><div class="bs-stage">${me.solo ? soloShot(Object.assign({}, me.solo, { frame: r.frame }), ' big') : shotHtml(r.who, r.frame, [0, 0], ' big')}</div><div class="bs-side">
        ${head('2 / 4', 'Pick a frame', me.solo ? 'A solo shoot.' : `With ${nm(r.who)}.`)}
        <div class="bs-frames">${FRAMES.map(([n, label]) => `<button type="button" class="bs-fr${n === r.frame ? ' on' : ''}" data-fr="${n}" aria-pressed="${n === r.frame}" aria-label="${esc(label)} frame"><span class="bs-fr-pic">${frameHtml(n)}</span><small>${esc(label)}</small></button>`).join('')}</div>
        <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="frame-ok">Use this frame</button><button type="button" class="g-btn small" data-bs="back">Back</button></div></div></div>`;
    } else if (me.step === 'shots') {
      const n = r.shots.length + 1, [s, q] = me.pose, pp = POSES[r.who] || POSES.solar;
      h = `<div class="bs-cols"><div class="bs-stage">${shotHtml(r.who, r.frame, me.pose, ' big live')}<i class="bs-flash" aria-hidden="true"></i><b class="bs-count" aria-hidden="true"></b>
        <ol class="bs-dots" aria-hidden="true">${[1, 2, 3].map(k => `<li class="${k < n ? 'done' : k === n ? 'now' : ''}"></li>`).join('')}</ol></div><div class="bs-side">
        ${head(`3 / 4 · shot ${n} of 3`, 'Strike a pose')}
        <h3 class="bs-h3">Solar</h3><div class="bs-poses" role="group" aria-label="Solar's pose">${POSES.solar.map((p, i) => `<button type="button" class="bs-pose${i === s ? ' on' : ''}" data-ps="${i}" aria-pressed="${i === s}"><svg viewBox="0 0 24 24" aria-hidden="true">${BADGE[p[2]]}</svg><span>${esc(p[0])}</span></button>`).join('')}</div>
        <h3 class="bs-h3">${esc(nm(r.who))}</h3><div class="bs-poses" role="group" aria-label="${esc(nm(r.who))}'s pose">${pp.map((p, i) => `<button type="button" class="bs-pose${i === q ? ' on' : ''}" data-pq="${i}" aria-pressed="${i === q}"><svg viewBox="0 0 24 24" aria-hidden="true">${BADGE[p[2]]}</svg><span>${esc(p[0])}</span></button>`).join('')}</div>
        <p class="g-hint bs-tip">A half-heart on either side brings the other half.</p>
        <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="snap">Snap! (${n} / 3)</button><button type="button" class="g-btn small" data-bs="back">Back</button></div></div></div>`;
    } else if (me.step === 'solo') {
      const q = me.solo, L = looks(), cl = L.find(l => l.id === q.look) || L[0];
      h = `<div class="bs-cols"><div class="bs-stage">${soloShot(Object.assign({}, q, { frame: r.frame }), ' big live')}<i class="bs-flash" aria-hidden="true"></i><b class="bs-count" aria-hidden="true"></b></div><div class="bs-side">
        ${head('3 / 4', 'Strike a pose', 'Pick an outfit, a pose and a backdrop.')}
        <h3 class="bs-h3">Outfit</h3><div class="bs-chips" role="group" aria-label="Outfit">${L.map(l => `<button type="button" class="bs-chip${l.id === q.look ? ' on' : ''}" data-sl="${l.id || ''}" aria-pressed="${l.id === q.look}">${esc(l.name)}</button>`).join('')}</div>
        <h3 class="bs-h3">Pose</h3><div class="bs-poses solo" role="group" aria-label="Pose">${cl.poses.map(k => `<button type="button" class="bs-pose${k === q.pose ? ' on' : ''}" data-sp="${k}" aria-pressed="${k === q.pose}"><span>${esc(POSE_NAMES[k] || k)}</span></button>`).join('')}</div>
        <h3 class="bs-h3">Backdrop</h3><div class="bs-chips bg" role="group" aria-label="Backdrop">${backdrops().map(b => `<button type="button" class="bs-chip bgc${b.id === q.bg ? ' on' : ''}" data-sb="${esc(b.id)}" aria-pressed="${b.id === q.bg}" title="${esc(b.name)}">${b.id === 'pink' ? '<i class="sw pink"></i>' : `<i class="sw" style="background-image:url('${G.base}assets/femc/bg/${esc(b.id)}.webp')"></i>`}<span>${esc(b.name)}</span></button>`).join('')}</div>
        <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="snap">Snap!</button><button type="button" class="g-btn small" data-bs="back">Back</button></div></div></div>`;
    } else if (me.solo) {
      const left = 3 - r.stamps.length;
      h = `<div class="bs-cols st"><div class="bs-stage strip">${soloHtml(Object.assign({}, me.solo, { frame: r.frame, stamps: r.stamps }), true)}</div><div class="bs-side">
        ${head('4 / 4', 'Decorate the picture', left ? `Up to ${left} more stamp${left === 1 ? '' : 's'}. Drag one to move it; Delete takes it off.` : 'Three stamps on. Drag to move; Delete takes one off.')}
        <div class="bs-stampset">${STAMPS.map((label, i) => `<button type="button" class="bs-stamp" data-sa="${i + 1}"${left ? '' : ' disabled'} aria-label="Add ${esc(label)}"><span>${artStamp(i + 1) ? `<img src="${DIR}stamp-${i + 1}.webp?v=${V}" alt="" draggable="false">` : `<svg viewBox="0 0 24 24" aria-hidden="true">${STAMP_SVG[i]}</svg>`}</span></button>`).join('')}</div>
        <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="print">Print · ¥400</button><button type="button" class="g-btn small" data-bs="back">Back</button></div></div></div>`;
    } else {
      const left = 3 - r.stamps.length;
      h = `<div class="bs-cols st"><div class="bs-stage strip">${stripHtml(r, true)}</div><div class="bs-side">
        ${head('4 / 4', 'Decorate the strip', left ? `Up to ${left} more stamp${left === 1 ? '' : 's'}. Drag one to move it; Delete takes it off.` : 'Three stamps on. Drag to move; Delete takes one off.')}
        <div class="bs-stampset">${STAMPS.map((label, i) => `<button type="button" class="bs-stamp" data-sa="${i + 1}"${left ? '' : ' disabled'} aria-label="Add ${esc(label)}"><span>${artStamp(i + 1) ? `<img src="${DIR}stamp-${i + 1}.webp?v=${V}" alt="" draggable="false">` : `<svg viewBox="0 0 24 24" aria-hidden="true">${STAMP_SVG[i]}</svg>`}</span></button>`).join('')}</div>
        <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="print">Print · ¥400</button><button type="button" class="g-btn small" data-bs="back">Back</button></div></div></div>`;
    }
    b.innerHTML = h;
    b.dataset.step = me.step;
    b.dataset.mode = me.solo ? 'solo' : 'strip';
    wire();
    if (me.solo) { const q = me.solo, want = `${q.look}|${q.pose}`; loadFit(q.look, q.pose).then(fit => { if (cur !== me || `${q.look}|${q.pose}` !== want) return; q.fit = fit; b.querySelectorAll('.bs-solo-fig').forEach(img => { img.style.cssText = figStyle(fit); }); }); }
    const f = b.querySelector('.bs-pick, .bs-fr.on, [data-bs=snap], [data-bs=print]');
    if (f) setTimeout(() => { if (cur === me && f.isConnected) f.focus({ preventScroll: true }); }, 30);
  }
  function wire() {
    const me = cur, r = me.rec, b = me.body;
    b.querySelectorAll('[data-who]').forEach(x => x.addEventListener('click', () => { r.who = x.dataset.who; me.solo = null; me.step = 'frame'; G.sfx('femc-click'); paint(); }));
    b.querySelectorAll('[data-solo]').forEach(x => x.addEventListener('click', () => {
      const L = looks(), C = window.FemcCosmetics, worn = C && C.onIn && C.onIn('skin:solar'), l = L.find(k => worn && k.id === worn.id) || L[0];
      r.who = null; me.solo = { look: l.id, pose: l.poses.includes('peace') ? 'peace' : l.poses[0], bg: 'pink', fit: null };
      me.step = 'frame'; G.sfx('femc-click'); paint();
    }));
    const soloPick = (fn, sel) => { fn(); G.sfx('femc-hover'); paint(); b.querySelector(sel)?.focus({ preventScroll: true }); };
    b.querySelectorAll('[data-sl]').forEach(x => x.addEventListener('click', () => soloPick(() => {
      const l = looks().find(k => (k.id || '') === x.dataset.sl); if (!l) return;
      me.solo.look = l.id; if (!l.poses.includes(me.solo.pose)) me.solo.pose = l.poses[0]; me.solo.fit = null;
    }, `[data-sl="${x.dataset.sl}"]`)));
    b.querySelectorAll('[data-sp]').forEach(x => x.addEventListener('click', () => soloPick(() => { me.solo.pose = x.dataset.sp; me.solo.fit = null; }, `[data-sp="${x.dataset.sp}"]`)));
    b.querySelectorAll('[data-sb]').forEach(x => x.addEventListener('click', () => soloPick(() => { me.solo.bg = x.dataset.sb; }, `[data-sb="${x.dataset.sb}"]`)));
    b.querySelectorAll('[data-fr]').forEach(x => x.addEventListener('click', () => { r.frame = +x.dataset.fr; G.sfx('femc-hover'); paint(); b.querySelector(`[data-fr="${r.frame}"]`)?.focus({ preventScroll: true }); }));
    const pose = (k, i) => {
      me.pose[k] = i;
      if (i === HEART) me.pose[1 - k] = HEART; // the other half of the heart
      else if (me.pose[1 - k] === HEART) me.pose[1 - k] = 0;
      G.sfx('femc-hover'); const at = k ? `[data-pq="${i}"]` : `[data-ps="${i}"]`; paint(); b.querySelector(at)?.focus({ preventScroll: true });
    };
    b.querySelectorAll('[data-ps]').forEach(x => x.addEventListener('click', () => pose(0, +x.dataset.ps)));
    b.querySelectorAll('[data-pq]').forEach(x => x.addEventListener('click', () => pose(1, +x.dataset.pq)));
    b.querySelectorAll('[data-sa]').forEach(x => x.addEventListener('click', () => {
      if (r.stamps.length >= 3) return;
      const k = r.stamps.length; r.stamps.push({ id: +x.dataset.sa, x: [24, 76, 50][k], y: [30, 52, 80][k] });
      G.sfx('femc-click'); paint(); b.querySelector(`[data-st="${k}"]`)?.focus({ preventScroll: true });
    }));
    b.querySelectorAll('.bs-st[data-st]').forEach(drag);
    b.querySelectorAll('[data-bs]').forEach(x => x.addEventListener('click', () => {
      const a = x.dataset.bs;
      if (a === 'close') close(); else if (a === 'back') back();
      else if (a === 'frame-ok') { me.step = me.solo ? 'solo' : 'shots'; me.pose = [0, 0]; G.sfx('femc-click'); paint(); }
      else if (a === 'snap') snap(); else if (a === 'print') print();
    }));
  }
  // Drag a placed stamp around the strip (mouse, pen or touch).
  function drag(btn) {
    btn.addEventListener('pointerdown', e => {
      const me = cur, strip = btn.closest('.bs-strip, .bs-solo'), s = me.rec.stamps[+btn.dataset.st]; if (!s || !strip) return;
      e.preventDefault(); btn.setPointerCapture(e.pointerId); btn.focus({ preventScroll: true }); btn.classList.add('drag');
      const move = ev => { const R = strip.getBoundingClientRect(); s.x = clamp((ev.clientX - R.left) / R.width * 100); s.y = clamp((ev.clientY - R.top) / R.height * 100); btn.style.left = s.x + '%'; btn.style.top = s.y + '%'; };
      const up = () => { btn.classList.remove('drag'); btn.removeEventListener('pointermove', move); btn.removeEventListener('pointerup', up); btn.removeEventListener('pointercancel', up); };
      btn.addEventListener('pointermove', move); btn.addEventListener('pointerup', up); btn.addEventListener('pointercancel', up);
    });
  }
  // The shot: 3-2-1 and a flash (reduced motion: no countdown bounce; Reduce flashes: a soft fade), then the next.
  function snap() {
    const me = cur; if (!me || me.busy) return;
    me.busy = true;
    const stage = me.body.querySelector('.bs-stage'), cnt = stage.querySelector('.bs-count'), fl = stage.querySelector('.bs-flash');
    me.body.querySelectorAll('button').forEach(x => { x.disabled = true; });
    const quick = reduced(), steps = quick ? [] : ['3', '2', '1'], gap = quick ? 0 : 260;
    let i = 0;
    const tick = () => {
      if (cur !== me) return;
      if (i < steps.length) { cnt.textContent = steps[i++]; cnt.classList.remove('go'); void cnt.offsetWidth; cnt.classList.add('go'); G.sfx('femc-hover'); setTimeout(tick, gap); return; }
      cnt.textContent = ''; fl.classList.add('go'); G.sfx('femc-click');
      setTimeout(() => {
        if (cur !== me) return;
        me.busy = false; me.log.push('shot');
        if (me.solo) me.step = 'stamps';
        else { me.rec.shots.push(me.pose.slice()); if (me.rec.shots.length >= 3) me.step = 'stamps'; else me.pose = [0, 0]; }
        paint();
      }, quick ? 120 : 380);
    };
    tick();
  }
  function print() {
    const me = cur; if (!me || me.printed) return;
    const r = me.rec, s = S();
    if (!G.activityOk(me.o.act, me.o.slot).ok) { close(); return; }
    // Pays, spends the slot and counts the visit (core.js doActivity; the activity has no stats of its own).
    const res = G.doActivity(me.o.act);
    if (me.solo) return printSolo(me, res);
    const rec = { date: G.dayInfo().md, day: s.day, run: s.runId || null, who: r.who, frame: r.frame, shots: r.shots.map(x => x.slice()), stamps: r.stamps.map(x => ({ id: x.id, x: x.x, y: x.y })) };
    const al = s.album ||= { v: 1 }, list = al.booth ||= [];
    const month = d => G.dateOf(d).getMonth();
    const first = !list.some(x => x.who === rec.who && x.run === rec.run && typeof x.day === 'number' && month(x.day) === month(rec.day) && Math.abs(x.day - rec.day) < 40);
    list.push(rec);
    let pt = 0;
    if (first && G.bond) pt = G.bond(rec.who, 1);
    G.save();
    me.printed = true;
    const text = LINES[Math.floor(Math.random() * LINES.length)].replace('{n}', nm(rec.who));
    me.result = { rec, first, pt };
    me.body.innerHTML = `<div class="bs-cols st done"><div class="bs-stage strip">${stripHtml(rec, false, ' print')}</div><div class="bs-side">
      ${head('Printed', 'Into the Album', `${dateText(rec)} · with ${nm(rec.who)}${pt ? ' · ♪' : ''}`)}
      <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="go">Continue</button></div></div></div>`;
    me.body.dataset.step = 'printed';
    G.sfx('femc-click');
    const go = me.go = () => { if (cur !== me) return; cur = null; window.removeEventListener('keydown', me.key, true); me.el.classList.add('out'); setTimeout(() => me.el.remove(), 220); me.o.onDone && me.o.onDone({ text, place: res && res.place, rec }); };
    me.body.querySelector('[data-bs=go]').addEventListener('click', go);
    setTimeout(() => me.body.querySelector('[data-bs=go]')?.focus({ preventScroll: true }), 30);
  }

  function printSolo(me, res) {
    const s = S(), q = me.solo, r = me.rec;
    const rec = { kind: 'solo', date: G.dayInfo().md, day: s.day, run: s.runId || null, look: q.look, pose: q.pose, bg: q.bg, fit: q.fit ? Object.assign({}, q.fit) : null, frame: r.frame, stamps: r.stamps.map(x => ({ id: x.id, x: x.x, y: x.y })) };
    const al = s.album ||= { v: 1 }, list = al.booth ||= [];
    list.push(rec); G.save();
    me.printed = true;
    const text = SOLO_LINES[Math.floor(Math.random() * SOLO_LINES.length)];
    me.result = { rec, first: false, pt: 0 };
    me.body.innerHTML = `<div class="bs-cols st done"><div class="bs-stage strip">${soloHtml(rec, false, ' print')}</div><div class="bs-side">
      ${head('Printed', 'Into the Album', `${dateText(rec)} · ${lookName(rec.look)}`)}
      <div class="g-row bs-nav"><button type="button" class="g-btn pink" data-bs="go">Continue</button></div></div></div>`;
    me.body.dataset.step = 'printed';
    G.sfx('femc-click');
    const go = me.go = () => { if (cur !== me) return; cur = null; window.removeEventListener('keydown', me.key, true); me.el.classList.add('out'); setTimeout(() => me.el.remove(), 220); me.o.onDone && me.o.onDone({ text, place: res && res.place, rec }); };
    me.body.querySelector('[data-bs=go]').addEventListener('click', go);
    setTimeout(() => me.body.querySelector('[data-bs=go]')?.focus({ preventScroll: true }), 30);
  }

  // ── The Album's row and its viewer (menu.js) ──
  const strips = () => { const s = S(); return ((s.album && s.album.booth) || (s.year1 && s.year1.album && s.year1.album.booth) || []); };
  function albumSection(esc2 = esc) {
    const list = strips();
    if (!list.length) return '';
    return `<section class="g-al-sec bs-al"><h3>Photo Booth <small>${list.length}</small></h3><div class="bs-al-grid">${list.map((r, i) => r.kind === 'solo'
      ? `<button type="button" class="bs-al-tile solo" data-bs-al="${i}" aria-label="${esc2(`Solo shoot, ${lookName(r.look)}, ${dateText(r)}`)}">${soloHtml(r, false, ' mini')}<span class="g-al-cap">Solo</span></button>`
      : `<button type="button" class="bs-al-tile" data-bs-al="${i}" aria-label="${esc2(`Photo strip with ${nm(r.who)}, ${dateText(r)}`)}">${stripHtml(r, false, ' mini')}<span class="g-al-cap">${esc2(nm(r.who))}</span></button>`).join('')}</div></section>`;
  }
  function view(i, from) {
    const list = strips(), r = list[i]; if (!r) return null;
    const el = document.createElement('div');
    el.className = 'g-overlay g-booth-ov view';
    const solo = r.kind === 'solo';
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', solo ? `Solo shoot, ${lookName(r.look)}` : `Photo strip with ${nm(r.who)}`);
    el.innerHTML = `<div class="g-panel g-booth"><div class="bs-body" data-step="view"><div class="bs-cols st"><div class="bs-stage strip">${solo ? soloHtml(r, false, ' print') : stripHtml(r, false, ' print')}</div><div class="bs-side">
      <p class="g-kicker">Album · Photo Booth · ${i + 1} / ${list.length}</p><h2>${esc(solo ? 'Solo shoot' : nm(r.who))}</h2><p class="g-note">${esc(dateText(r))}${solo ? ` · ${esc(lookName(r.look))}` : ''}</p>
      <div class="g-row bs-nav"><button type="button" class="g-btn small" data-close>Close</button></div></div></div></div></div>`;
    document.body.appendChild(el);
    const done = () => { document.removeEventListener('keydown', key, true); el.classList.add('out'); setTimeout(() => el.remove(), 220); if (from && from.isConnected) from.focus({ preventScroll: true }); };
    const key = e => { if (e.key === 'Escape' && el === [...document.querySelectorAll('.g-overlay')].pop()) { e.preventDefault(); e.stopPropagation(); done(); } };
    document.addEventListener('keydown', key, true);
    el.addEventListener('click', e => { if (e.target === el || e.target.closest('[data-close]')) done(); });
    setTimeout(() => el.querySelector('[data-close]')?.focus({ preventScroll: true }), 30);
    return el;
  }
  function wireAlbum(root) { root.querySelectorAll('[data-bs-al]').forEach(b => b.addEventListener('click', () => { G.sfx('femc-click'); view(+b.dataset.bsAl, b); })); }

  const state = () => (cur ? { step: cur.step, solo: cur.solo ? Object.assign({}, cur.solo) : null, who: cur.rec.who, frame: cur.rec.frame, shots: cur.rec.shots.map(x => x.slice()), pose: cur.pose.slice(), stamps: cur.rec.stamps.map(x => Object.assign({}, x)), printed: cur.printed, result: cur.result || null } : null);
  return { open, close, state, partners, looks, backdrops, soloHtml, stripHtml, albumSection, wireAlbum, view, strips, POSES, FRAMES, STAMPS, PARTNERS };
})();
