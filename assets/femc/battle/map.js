/* FEMC Tartarus node maps: rules only, no DOM. Each floor is a small branching graph of rooms from the arrival point to the stairs.
   battle.js draws it (SVG) and resolves rooms (tartarus.js the newer ones); this file builds the graph, tracks fog of war and
   moves the Reaper.
   Node: { id, layer, row, x, y (0..1), type, links, seen, known, visited, cleared, group, strong, chest, used,
           hidden (a room behind a cracked wall: invisible until `found` by a scan or by walking past it), secret (what's behind it),
           risky (the far end of a shortcut) }
   type: start | shadow | chest | locked | clock | access | stairs | event | empty, and since 2026-10-25 (tartarus.js):
         guardian (a mini-boss between the stairs and the rest of the floor) | vault | puzzle | rest | rare | trap | altar | crack
   generate(floor, { rand, strongChance, plan }): plan (tartarus.js plan()) = { guardian: kind, crack: 'loot' | 'memory' |
   'floor' | 'monad', force: [types next to the start] (tests) }. */
window.FemcTartarusMap = (() => {
  const D = () => window.FEMC_BATTLE_DATA;

  function pickW(R, weights) {
    const ks = Object.keys(weights), tot = ks.reduce((s, k) => s + weights[k], 0);
    let r = R() * tot;
    for (const k of ks) { if ((r -= weights[k]) <= 0) return k; }
    return ks[ks.length - 1];
  }
  const pick = (R, a) => a[Math.floor(R() * a.length)];

  /* What's in a chest. bi: block index. locked: the better table. */
  function rollChest(R, bi, locked) {
    const C = D().map.chest, G = D().gear;
    if (locked) {
      const rare = C.lockedRare.filter(id => G[id] && G[id].tier <= bi + 2);
      if (rare.length && R() < 0.6) return { gear: pick(R, rare) };
      const [a, b] = C.yen[Math.min(bi, C.yen.length - 1)];
      return { yen: Math.round((a + R() * (b - a)) * 2.2 / 10) * 10, item: pick(R, C.items[Math.min(bi + 1, C.items.length - 1)]), n: 1 };
    }
    const r = R();
    if (r < C.gearChance) {
      const t = Math.min(7, bi + 1);
      const pool = Object.keys(G).filter(id => !G[id].rare && G[id].tier === t);
      if (pool.length) return { gear: pick(R, pool) };
    }
    if (r < 0.6) { const it = pick(R, C.items[Math.min(bi, C.items.length - 1)]); return { item: it, n: it === 'medicine' ? 2 : 1 }; }
    const [a, b] = C.yen[Math.min(bi, C.yen.length - 1)];
    return { yen: Math.round((a + R() * (b - a)) / 10) * 10 };
  }

  /* Build a floor. floor: an entry of data.floors. opts: { rand, strongChance (difficulty override), plan (above) } */
  function generate(floor, { rand = Math.random, strongChance = null, plan = {} } = {}) {
    const R = rand, M = D().map, L = floor.layers || 5, bias = floor.rooms || {};
    const nodes = [], byLayer = [];
    let uid = 0;
    const add = (layer, row, n) => {
      const node = { id: 'n' + uid++, layer, row, x: L > 1 ? layer / (L - 1) : 0.5, y: n === 1 ? 0.5 : 0.12 + 0.76 * row / (n - 1), type: 'empty', links: [], seen: false, known: false, visited: false, cleared: false };
      node.y = Math.max(0.08, Math.min(0.92, node.y + (n === 1 ? (R() - 0.5) * 0.2 : (R() - 0.5) * 0.1)));
      node.x = Math.max(0, Math.min(1, node.x + (layer && layer < L - 1 ? (R() - 0.5) * 0.06 : 0)));
      nodes.push(node);
      (byLayer[layer] || (byLayer[layer] = [])).push(node);
      return node;
    };
    const link = (a, b) => { if (a === b || a.links.includes(b.id)) return; a.links.push(b.id); b.links.push(a.id); };
    const unlink = (a, b) => { a.links = a.links.filter(x => x !== b.id); b.links = b.links.filter(x => x !== a.id); };
    for (let l = 0; l < L; l++) {
      const n = l === 0 || l === L - 1 ? 1 : (R() < 0.55 ? 3 : 2);
      for (let r = 0; r < n; r++) add(l, r, n);
    }
    // Edges between neighbouring layers, by relative height; then make sure every room can be entered.
    for (let l = 0; l < L - 1; l++) {
      const A = byLayer[l], B = byLayer[l + 1];
      A.forEach((a, j) => {
        const k = A.length === 1 ? Math.floor(R() * B.length) : Math.round(j * (B.length - 1) / (A.length - 1));
        link(a, B[k]);
        if (R() < 0.45 && B[k + 1]) link(a, B[k + 1]);
        else if (R() < 0.3 && B[k - 1]) link(a, B[k - 1]);
      });
      if (A.length === 1) B.forEach(b => link(A[0], b));
      B.forEach(b => {
        if (!b.links.some(id => A.some(a => a.id === id))) {
          const near = A.slice().sort((x, y) => Math.abs(x.y - b.y) - Math.abs(y.y - b.y))[0];
          link(near, b);
        }
      });
    }
    // A few side passages inside a layer, for loops (and for running from the Reaper).
    for (let l = 1; l < L - 1; l++) byLayer[l].forEach((a, j) => { const b = byLayer[l][j + 1]; if (b && R() < 0.28) link(a, b); });

    const start = byLayer[0][0], stairs = byLayer[L - 1][0];
    start.type = 'start'; stairs.type = 'stairs';
    const mid = nodes.filter(n => n !== start && n !== stairs);
    const free = () => mid.filter(n => n.type === 'empty' && !n.fixed);
    const place = (type, filter) => { const c = free().filter(filter || (() => true)); if (!c.length) return null; const n = pick(R, c); n.type = type; n.fixed = true; return n; };
    // A block guardian stands in the room before the stairs, and it's the only way to them.
    if (plan.guardian) {
      const g = place('guardian', n => n.layer === L - 2);
      if (g) { stairs.links.slice().forEach(id => { const o = nodes.find(x => x.id === id); if (o !== g) unlink(o, stairs); }); link(g, stairs); g.kind = plan.guardian; }
    }
    if (R() < (floor.access != null ? floor.access : 0.6)) place('access', n => n.layer <= Math.max(1, Math.floor(L / 2)));
    if (R() < M.clockChance) place('clock', n => n.layer >= 2);
    if (R() < M.lockedChance) place('locked', n => n.layer >= 2);
    place('chest');
    place('event');
    // Two Shadows at least, one of them guarding the way to the stairs.
    place('shadow', n => n.layer === L - 2);
    place('shadow', n => n.layer <= 2);
    // The rest by weight: the block's `rooms` bias times the base weights, each type capped per floor.
    const W = {};
    Object.keys(M.weights).forEach(k => { W[k] = M.weights[k] * (bias[k] != null ? bias[k] : 1); });
    const cap = M.max || {};
    const count = t => nodes.filter(x => x.type === t).length;
    free().forEach(n => {
      let t = pickW(R, W);
      for (let tries = 0; cap[t] != null && count(t) >= cap[t] && tries < 6; tries++) t = pickW(R, W);
      if (cap[t] != null && count(t) >= cap[t]) t = R() < 0.6 ? 'shadow' : 'empty';
      n.type = t;
    });
    // Tests: put these room types right next to the arrival point.
    if (Array.isArray(plan.force) && plan.force.length) {
      const near = mid.filter(n => start.links.includes(n.id) && n.type !== 'guardian');
      plan.force.forEach((t, i) => { const n = near[i % Math.max(1, near.length)]; if (n) { n.type = t; n.forced = true; } });
    }
    // A shortcut: a passage from the first rooms straight to the last layer before the stairs. It saves steps (the Reaper)
    // but something waits where it comes out.
    let shortcut = null;
    if (L >= 5 && R() < M.shortcutChance) {
      const A = byLayer[1].filter(n => !n.forced), Bs = byLayer[L - 2].filter(n => ['shadow', 'empty', 'chest', 'event', 'trap'].includes(n.type) && !n.forced);
      const a = A.length && pick(R, A), b = Bs.length && pick(R, Bs);
      if (a && b && !a.links.includes(b.id)) {
        link(a, b); shortcut = [a.id, b.id]; b.risky = true;
        b.type = R() < 0.5 ? 'trap' : 'shadow'; if (b.type === 'shadow') b.strongForce = true;
      }
    }
    // A cracked wall: a hidden room off the top or bottom row (a dead end), only seen once found.
    if (plan.crack) {
      const rows = mid.filter(n => n.layer >= 1 && n.layer <= L - 2 && n.type !== 'guardian' && (byLayer[n.layer][0] === n || byLayer[n.layer][byLayer[n.layer].length - 1] === n));
      const par = rows.length ? pick(R, rows) : null;
      if (par) {
        const up = byLayer[par.layer].length === 1 ? R() < 0.5 : byLayer[par.layer][0] === par;
        const c = { id: 'n' + uid++, layer: par.layer, row: -1, x: Math.max(0.04, Math.min(0.96, par.x + 0.05)), y: up ? Math.max(0.0, par.y - 0.19) : Math.min(1.0, par.y + 0.19),
          type: 'crack', secret: plan.crack, hidden: true, found: false, links: [], seen: false, known: false, visited: false, cleared: false };
        nodes.push(c); link(par, c);
      }
    }
    const bi = floor.bi || 0;
    nodes.forEach(n => {
      delete n.fixed;
      if (n.type === 'shadow') {
        n.strong = !!(n.strongForce || (floor.strong && floor.strong.length && R() < (strongChance != null ? strongChance : M.strongChance) * (bias.strong || 1)));
        if (n.strong && !(floor.strong && floor.strong.length)) n.strong = false;
        n.group = (n.strong ? pick(R, floor.strong) : pick(R, floor.pool)).slice();
      }
      delete n.strongForce;
      if (n.type === 'chest') n.chest = rollChest(R, bi, false);
      if (n.type === 'locked') n.chest = rollChest(R, bi, true);
    });
    const map = { floor: floor.id, nodes, start: start.id, stairs: stairs.id, pos: start.id, prev: null, steps: 0, reaper: null, warned: false, scans: 1, layers: L, shortcut };
    visit(map, start.id);
    get(map, stairs.id).known = true; get(map, stairs.id).seen = true; // Fuuka always senses the stairs
    return map;
  }

  const get = (map, id) => map.nodes.find(n => n.id === id);
  const open = n => !n.hidden || n.found; // a room behind a cracked wall stays out of reach until it's found
  const neighbors = (map, id) => get(map, id).links.map(x => get(map, x)).filter(open);
  /* Visiting reveals the room's neighbours (their type) and, faintly, the rooms beyond (position only). */
  function visit(map, id) {
    const n = get(map, id);
    n.visited = n.seen = n.known = true;
    neighbors(map, id).forEach(a => {
      a.seen = true; a.known = true;
      neighbors(map, a.id).forEach(b => { b.seen = true; });
    });
  }
  /* Fuuka's scan: reveal everything within `depth` steps (Infinity for Juno). Hidden rooms in range are found, traps spotted.
     Returns { found: [hidden rooms found], traps: [traps spotted] }. */
  function scan(map, depth = 3) {
    const dist = bfs(map, map.pos).dist, out = { found: [], traps: [] };
    map.nodes.forEach(n => {
      if (!(dist[n.id] <= depth)) return;
      if (n.hidden && !n.found) { n.found = true; out.found.push(n); }
      if (n.type === 'trap' && !n.spotted && !n.used) { n.spotted = true; out.traps.push(n); }
      n.seen = true; n.known = true;
    });
    map.scans = Math.max(0, map.scans - 1);
    return out;
  }
  /* Reveal a hidden room (walking past it, a perk, a test). */
  function find(map, id) { const n = get(map, id); if (n && n.hidden && !n.found) { n.found = true; n.seen = n.known = true; return true; } return false; }
  function bfs(map, from) {
    const dist = { [from]: 0 }, prev = {}, q = [from];
    while (q.length) {
      const c = q.shift();
      get(map, c).links.forEach(x => { if (dist[x] == null) { dist[x] = dist[c] + 1; prev[x] = c; q.push(x); } });
    }
    return { dist, prev };
  }
  const stepToward = (map, from, to) => {
    const { prev } = bfs(map, to); // path from `from` back toward `to`
    return prev[from] || from;
  };
  /* Move the party to an adjacent room. Returns what happened: { ok, caught, spawned, warn, reaperMoved }.
     noReaper (Story difficulty): the Reaper never comes, and one that's already here stops chasing. */
  function move(map, to, { reaperSteps = D().map.reaperSteps, warnAt = D().map.reaperWarn, noReaper = false } = {}) {
    const here = get(map, map.pos), dest = get(map, to);
    if (!here.links.includes(to) || !dest || !open(dest)) return { ok: false };
    map.prev = map.pos;
    map.pos = to;
    map.steps++;
    visit(map, to);
    const out = { ok: true };
    if (map.reaper && map.reaper.node === to) { out.caught = true; return out; }
    if (noReaper) return out;
    if (!map.reaper && !map.reaperGone && map.steps >= reaperSteps) {
      const { dist } = bfs(map, to);
      const far = map.nodes.filter(n => n.id !== to && n.type !== 'start' && !n.hidden && dist[n.id] != null).sort((a, b) => (dist[b.id] || 0) - (dist[a.id] || 0))[0];
      map.reaper = { node: far.id, moves: 0 };
      out.spawned = true;
    } else if (map.reaper) {
      if (map.reaper.stun > 0) map.reaper.stun--; // it lost track of you after an escape
      else { map.reaper.node = stepToward(map, map.reaper.node, to); map.reaper.moves++; out.reaperMoved = true; }
      if (map.reaper.node === to) out.caught = true;
    } else if (!map.warned && !map.reaperGone && map.steps >= reaperSteps - warnAt) { map.warned = true; out.warn = true; }
    return out;
  }
  /* After an escape: step back to where the party came from (no step counted). */
  function retreat(map) { if (map.prev) { const p = map.pos; map.pos = map.prev; map.prev = p; } }
  /* After beating the Reaper: it's gone for this floor. */
  const banishReaper = map => { map.reaper = null; map.reaperGone = true; };

  return { generate, get, neighbors, visit, scan, find, open, bfs, move, retreat, banishReaper, rollChest, pickW };
})();
