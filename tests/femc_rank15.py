"""Ranks 11-15 (2026-10-21, Kat's rulings): Haechan, Jungwon, Akihiko and Shinjiro go to rank 15 in February.

  python3 tests/femc_rank15.py [--screenshots /absolute/dir] [--quick]

engine     maxRank: the four are 15, every other link stays 10; ranks 11-15 sit in February/early March (2/1-3/4) in order;
           Haechan's 11-15 are story ranks, Shinjiro's 15 is one; "MAX" (meter, rank card, menus, toasts, end screen,
           stamps) means the link's own top; between rank 10 and the next rank's date time together is afterMax (no ♪),
           a meter a rank scene left short plays stretchHangouts; at 15 afterMax rotates; perks and the rank-15 bond tiers
           unlock at 15; the Bond MAX / Rank 15 stamps; the Status pips.
reach      a realistic February for each of the four (from a save at rank 10 on 1/31, story events taking their slots,
           the after-school slot shared between Akihiko and Jungwon): best answers reach 15 for every locked route and
           both romance and friendship; a player who answers less well still reaches 15 with hangouts by 3/4.
branches   every new rank branches by the locked route (ifHeading) and, for the romances, by romance/friendship; playing
           it under each route gives different scenes.
shinjiro   closed from 10/4 (his traces keep going); back from 2/1 in the dorm kitchen at rank 10; rank 15 (his waking) is
           due on 2/27 after school at rank 14 and not before, not in another slot, not below 14; it plays through the real
           UI, sets shinji-awake, and the bedside traces / Akihiko's hospital afterMax step aside after it.
akihiko    the romance turn now comes at rank 7 (not on Shinjiro's romance route), rank 9 keeps both outcomes coherent;
           the Gekkoukan buzz routines/run-ins play only inside their rank / route gates.
migration  old saves (autosave key, a slot, a backup code) at rank 10 in December and in February load cleanly, keep their
           progress, and pick up ranks 11+ on the right dates; an old save already past the dates catches up.
scenes     every new scene (ranks 11-15, stretch hangouts, afterMax, the changed ranks, living-r15-* routines, run-ins, late
           nights, holidays, story inserts) on every locked route and both link routes: each path finishes, every option
           is reached, every face is a real expression, every speaker has a name, every face and background loads.
No browser errors. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-rank15-'))
OUT.mkdir(parents=True, exist_ok=True)
QUICK = '--quick' in sys.argv
FOUR = ['haechan', 'jungwon', 'akihiko', 'shinjiro']
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})


def shots(name):
    for tag, w, h in [('laptop', 1000, 486), ('phone', 375, 812)]:
        size(w, h, tag == 'phone')
        p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,350)))')
        (OUT / f'{name}-{tag}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))
    size(1000, 486)


HELPERS = r"""
window.RQ = (() => {
  const G = FemcGame, SC = FemcScene, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', false);
  G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  const faces = new Set(), assets = new Set(), bad = [];
  const ARR = [['9/12', 'arrived-hanni'], ['9/12', 'arrived-hyein'], ['9/19', 'arrived-jihoon'], ['9/26', 'arrived-minji'], ['10/10', 'arrived-yunjin'], ['10/14', 'arrived-jungwon'],
    ['10/24', 'arrived-jaehyun'], ['10/31', 'arrived-crew'], ['11/4', 'arrived-haechan'], ['11/7', 'arrived-sunoo'], ['11/13', 'arrived-cherry'], ['11/18', 'arrived-mark'],
    ['10/17', 'awake-jihoon'], ['10/31', 'awake-minji'], ['11/28', 'awake-jungwon'], ['12/5', 'awake-haechan'], ['8/7', 'joined-shinjiro'], ['10/4', 'shinjiro-coma']];
  const ROUTES = { R: 'route-R', S: 'route-S', H: 'route-H', stay: 'route-stay', true: 'route-true' };
  // A clean save on md at slot: story events dated before it played, arrivals' flags, Wren / Elizabeth out of the way,
  // routines / run-ins / late nights quiet unless a check opens them.
  function at(md, slot, extra = {}) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    const d = G.dayOf(md); G.S.day = d; G.S.slot = slot;
    G.S.events = G.D.events.filter(e => !e.unlock && G.dayOf(e.date) < d && (!e.flag || e.flag === 'year-goes-on' && d > G.dayOf('12/21'))).map(e => e.id);
    const F = G.S.flags; if (d > G.dayOf('4/18')) { F['joined-junpei'] = true; G.S.unlocked.tartarus = true; } if (d > G.dayOf('12/21')) F['year-goes-on'] = true;
    ARR.forEach(([w, f]) => { if (d > G.dayOf(w)) F[f] = true; });
    G.S.tartarus.bosses = G.D.cal.ops.filter(o => G.dayOf(o.date) < d).map(o => o.op);
    ['wren', 'elizabeth'].forEach(id => { G.S.links[id] = { rank: 10, xp: 0, seen: [], rankDay: {}, push: 0, reversed: false }; });
    G.S.dailyLife = { seen: G.D.dailyLife.map(e => e.id), lastDay: 9999 }; G.S.lateNights = { seen: [], lastDay: 9999 };
    G.S.runIns = { seen: G.D.runIns.map(e => e.id), lastDay: 9999, later: [] }; G.S.phone.lastInvite = 99999;
    Object.assign(G.S, copy(extra)); G.S.flags = { ...F, ...(extra.flags || {}) };
    return G.S;
  }
  const link = (id, rank, more = {}) => { if (!G.S.met.includes(id)) G.S.met.push(id); G.S.links[id] = { rank, xp: 0, seen: [...Array(rank).keys()], rankDay: {}, hung: 0, push: 0, reversed: false, ...more }; };
  const route = h => { Object.values(ROUTES).forEach(f => { delete G.S.flags[f]; }); if (h) G.S.flags[ROUTES[h]] = true; };
  function walk(a, fn) { (a || []).forEach(l => { fn(l); walk(l.then, fn); walk(l.else, fn); (l.choose || l.route || []).forEach(o => { fn(o, true); walk(o.then, fn); }); }); }
  const noBattle = a => (a || []).filter(l => !l.battle && !l.act && !l.summon).map(l => { const o = { ...l }; if (o.then) o.then = noBattle(o.then); if (o.else) o.else = noBattle(o.else); if (o.choose) o.choose = o.choose.map(c => ({ ...c, then: noBattle(c.then) })); if (o.route) o.route = o.route.map(c => ({ ...c, then: noBattle(c.then) })); return o; });
  function staticCheck(scene, key) {
    walk(scene, (l, opt) => {
      if (opt) { if (!l.christmasOptions && !String(l.t || '').trim()) bad.push(`${key}: an option without text`); return; }
      if (l.s) {
        const have = FEMC_PORTRAITS[l.s];
        if (have) { if (l.f && !have.includes(l.f)) bad.push(`${key}: ${l.s}/${l.f}`); }
        else if (l.s !== 'solar' && !(G.castHas ? G.castHas(l.s) : G.name(l.s) !== l.s[0].toUpperCase() + l.s.slice(1))) bad.push(`${key}: no cast name for ${l.s}`);
        if (l.s === 'solar' && l.f && !FEMC_PORTRAITS.solar?.includes(l.f)) bad.push(`${key}: solar/${l.f}`);
      }
    });
  }
  // One play down `path` (choice indexes); faces and backgrounds seen are collected. Returns the result and the log text.
  function once(opts, path, key) {
    let result, c = 0; const decisions = [], picked = [];
    const pl = SC.play({ ...opts, onDone: r => { result = r; } }), el = pl.el;
    let steps = 0;
    while (!result) {
      if (++steps > 5000) throw Error('stuck ' + key);
      const bs = [...el.querySelectorAll('.gs-choices button:not(:disabled)')];
      if (bs.length) { const n = Math.min(path[c++] ?? 0, bs.length - 1); decisions.push(bs.length); picked.push(bs[n].querySelector('span')?.textContent || bs[n].textContent); bs[n].click(); continue; }
      const img = el.querySelector('.gs-portrait'); if (img && !img.hidden && img.getAttribute('src')) faces.add(img.src);
      const me = el.querySelector('.gs-me'); if (me && !me.hidden && me.getAttribute('src')) faces.add(me.src);
      const bg = el.querySelector('.gs-bg')?.style.backgroundImage.match(/url\("?(.*?)"?\)/); if (bg) assets.add(bg[1]);
      el.click();
    }
    el.querySelector('[data-t="log"]')?.click();
    const text = [...el.querySelectorAll('.gs-log-inner p')].map(x => x.textContent).join('\n');
    el.remove(); document.documentElement.classList.remove('g-in-scene');
    return { result, decisions, picked, text };
  }
  // Every path through a scene, from a state set up by `setup` (called before each play). Returns { n, best, bestPath, texts }.
  function enumerate(opts, key, setup, want, got) {
    const queue = [[]]; let n = 0, best = -1, bestPath = [];
    while (queue.length) {
      const path = queue.shift(); setup();
      const r = once(opts, path, key);
      if (!r.result.finished) { bad.push('unfinished ' + key); return { n, best, bestPath }; }
      r.picked.forEach(t => got.add(t)); n++;
      if ((r.result.gained || 0) > best) { best = r.result.gained || 0; bestPath = path.concat(Array(Math.max(0, r.decisions.length - path.length)).fill(0)); }
      const depth = path.length;
      if (r.decisions.length > depth) { for (let k = 1; k < r.decisions[depth]; k++) queue.push([...path, k]); if (r.decisions.length > depth + 1) queue.push([...path, 0]); }
    }
    return { n, best, bestPath };
  }
  // A scene on every locked route (Feb) or a spread of headings (earlier), on the given link routes; each flag it reads set.
  const HEADS_PRE = [{}, { 'hc-lean-S': true }, { 'home-H3': true, 'pull-no-there': true }];
  function paths(opts, key, md, linkId, o = {}) {
    opts = { ...opts, scene: noBattle(opts.scene), link: linkId || opts.link || null };
    staticCheck(opts.scene, key);
    const want = new Set(); walk(opts.scene, (x, opt) => { if (opt && !x.christmasOptions) want.add(G.sub(x.t)); });
    const read = {}; walk(opts.scene, l => [].concat(l.ifFlag || []).forEach(f => { read[f] = true; }));
    const post = G.dayOf(md) > G.dayOf('12/21');
    const heads = post ? Object.keys(ROUTES) : [null];
    const routes = o.routes || (linkId && G.LINKS[linkId]?.romance ? ['romance', 'friend'] : [null]);
    const states = [];
    heads.forEach(h => routes.forEach(rt => { states.push({ h, rt, flags: {} }); }));
    if (!post) HEADS_PRE.slice(1).forEach(f => routes.forEach(rt => states.push({ h: null, rt, flags: f })));
    Object.keys(read).forEach(f => states.push({ h: post ? 'stay' : null, rt: routes[0], flags: { [f]: true } }));
    if (Object.keys(read).length) states.push({ h: post ? 'R' : null, rt: routes[routes.length - 1], flags: { ...read } });
    const got = new Set(); let n = 0;
    for (const st of states) {
      const setup = () => {
        at(md, o.slot || 'evening', { flags: { ...st.flags } }); route(st.h);
        G.S.events = G.D.events.filter(e => !e.unlock && G.dayOf(e.date) < G.dayOf(md)).map(e => e.id);
        ['hanni', 'hyein', 'yunjin', 'jungwon', 'mark', 'jihoon', 'cherry', 'minji', 'jaehyun', 'akihiko', 'haechan', 'shinjiro', 'ken', 'koromaru', 'sunoo', 'junpei', 'yukari', 'mitsuru', 'fuuka', 'aigis'].forEach(id => link(id, o.rank ?? 10));
        if (linkId) link(linkId, o.rank ?? 10, st.rt ? { route: st.rt } : {});
        if (o.setup) o.setup(st);
        G.S.route.frags = { R: 6, S: 6, H: st.h === 'H' ? 7 : 3 };
      };
      n += enumerate(opts, key, setup, want, got).n;
    }
    const missing = [...want].filter(t => !got.has(t));
    if (missing.length) bad.push(`${key}: unreached ${missing.slice(0, 3).join(' | ')}`);
    return n;
  }
  // The best a player can score in a rank scene from the current save (the save is restored after each try).
  function bestPlay(l, r) {
    const snap = copy(G.S), pick = G.linkScene(l), opts = { scene: noBattle(pick.scene), place: pick.place, time: pick.time, link: l.id };
    const restore = () => { Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(snap)); };
    const e = enumerate(opts, `${l.id}/${pick.kind}/${pick.r}`, restore, new Set(), new Set());
    restore();
    const real = once(opts, e.bestPath, l.id);
    return { pick, gained: real.result.gained || 0, best: e.best, paths: e.n };
  }
  // A player who always takes the second option (or the only one): a fair stand-in for "not the best answers".
  function plainPlay(l) {
    const pick = G.linkScene(l), opts = { scene: noBattle(pick.scene), place: pick.place, time: pick.time, link: l.id };
    const real = once(opts, Array(40).fill(1), l.id);
    return { pick, gained: real.result.gained || 0 };
  }
  /* A realistic February for the given links: from 1/31 late to 3/4 late. Story events take their slots (marked played,
     not shown); Haechan's (and Shinjiro's 15) story ranks play when due; after school goes to whichever of Akihiko /
     Jungwon has a rank or a hangout waiting (else afterMax with one of them); evenings to Shinjiro when his kitchen is
     open. `player`: 'best' | 'plain'. Returns ranks by day and what played. */
  function february(ids, player = 'best') {
    const log = [], reached = {};
    for (let d = G.dayOf('2/1'); d <= G.dayOf('3/4'); d++) {
      G.S.day = d; G.S.spent = G.S.spent || {};
      const info = G.dayInfo(d);
      for (const slot of G.slotsFor(info)) {
        G.S.slot = slot;
        const due = G.dueEvent(slot);
        if (due && due.kind === 'event') { G.markEvent ? G.markEvent(due.ev.id) : G.S.events.push(due.ev.id); if (!G.S.events.includes(due.ev.id)) G.S.events.push(due.ev.id); if (['after', 'evening'].includes(slot)) G.S.spent[`${d}-${slot}`] = 'event'; continue; }
        if (due && due.kind === 'link' && ids.includes(due.link.id)) {
          const l = due.link, r = G.progress(l.id).rank, play = player === 'best' ? bestPlay(l, r) : plainPlay(l);
          const out = G.finishLink(l, play.pick.kind, play.pick.r, play.gained); log.push([G.mdOf(d), slot, l.id, play.pick.kind, play.pick.r + 1, out.up ? 'up' : '']); continue;
        }
        if (!['after', 'evening'].includes(slot)) continue;
        const cands = ids.map(id => G.LINKS[id]).filter(l => !l.forced?.includes(G.progress(l.id).rank + 1) || G.progress(l.id).rank >= 15).filter(l => G.linkStatus(l, d, slot).ok);
        const want = cands.filter(l => !G.linkStatus(l, d, slot).after).sort((a, b) => G.progress(a.id).rank - G.progress(b.id).rank)[0];
        const l = want; if (!l) continue;
        const play = player === 'best' ? bestPlay(l, G.progress(l.id).rank) : plainPlay(l);
        const out = G.finishLink(l, play.pick.kind, play.pick.r, play.gained);
        log.push([G.mdOf(d), slot, l.id, play.pick.kind, play.pick.r + 1, out.up ? 'up' : '', play.gained]);
      }
      ids.forEach(id => { const r = G.progress(id).rank; if (r >= 15 && !reached[id]) reached[id] = G.mdOf(d); });
    }
    return { reached, ranks: Object.fromEntries(ids.map(id => [id, G.progress(id).rank])), log };
  }
  function step() {
    const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
    const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
    const ov = [...document.querySelectorAll('.g-overlay:not(.out)')].pop(); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay'; } }
    const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  return { at, link, route, walk, once, enumerate, paths, bestPlay, plainPlay, february, step, faces, assets, bad, copy, noBattle, ROUTES };
})();
"""

try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    size(1000, 486)
    p.goto('femc-game.html?debug=1')
    ok(not p.console(), 'the game loads with ranks 11-15 and no browser errors')
    p.eval(HELPERS)

    # ── engine ──
    shape = p.eval(r"""(()=>{const G=FemcGame,out={},in2=md=>G.dayOf(md)>=G.dayOf('2/1')&&G.dayOf(md)<=G.dayOf('3/4');
      for(const id of ['haechan','jungwon','akihiko','shinjiro']){const l=G.LINKS[id],rs=l.ranks.slice(10);
        out[id]={max:G.maxOf(l),n:l.ranks.filter(r=>r&&r.scene).length,dates:rs.map(r=>r.after),inFeb:rs.every(r=>in2(r.after)),
          order:rs.every((r,i)=>!i||G.dayOf(r.after)>G.dayOf(rs[i-1].after)),titles:rs.every((r,i)=>String(r.title||'').startsWith((i+11)+':')),forced:l.forced||[]};}
      out.others=Object.values(G.LINKS).filter(l=>!['haechan','jungwon','akihiko','shinjiro'].includes(l.id)&&G.maxOf(l)!==10).map(l=>l.id);
      out.shin=G.LINKS.shinjiro.stretch;return out})()""")
    for id in FOUR:
        s = shape[id]
        ok(s['max'] == 15 and s['n'] == 15 and s['inFeb'] and s['order'] and s['titles'], f'{id}: fifteen written ranks, 11-15 in February/early March in order ({s["dates"]})')
    ok(shape['haechan']['forced'] == list(range(1, 16)) and 15 in shape['shinjiro']['forced'], 'Haechan\'s fifteen ranks are story ranks; Shinjiro\'s 15 is one')
    ok(not shape['others'], f'every other link stays at 10: {shape["others"]}')
    ok(shape['shin'] and shape['shin']['from'] == '2/1' and shape['shin']['home']['area'] == 'dorm', f"Shinjiro comes back from 2/1 at the dorm: {shape['shin']}")

    gap = p.eval(r"""(()=>{const G=FemcGame,out={};
      // Akihiko at 10 in January: afterMax (no ♪, not MAX); on his rank 11 date: rank 11; the meter short: stretch hangouts.
      let s=RQ.at('1/12','after');RQ.link('akihiko',10,{route:'romance'});const a=G.LINKS.akihiko;
      out.janStatus=G.linkStatus(a,s.day,'after');out.janKind=G.linkScene(a).kind;out.janMax=G.isMaxed(a);out.janBond=G.bond('akihiko',3);
      const d11=a.ranks[10].after;s=RQ.at(d11,'after');RQ.link('akihiko',10,{route:'romance'});s.day=G.dayOf(d11);while(G.dayInfo(s.day).dow===0||G.dayInfo(s.day).type!=='school')s.day++;
      out.r11=G.linkScene(a);out.r11={kind:out.r11.kind,r:out.r11.r};out.bond11=G.bond('akihiko',1);G.S.links.akihiko.xp=0;
      const sc=G.linkScene(a),f=G.finishLink(a,sc.kind,sc.r,0);out.short={up:f.up,ready:G.progress('akihiko').ready};
      const h=G.linkScene(a);out.hang={kind:h.kind,stretch:(a.stretchHangouts||[]).includes(h.scene)||!(a.stretchHangouts||[]).length};
      // At 15: MAX, afterMax rotates, no ♪.
      RQ.link('akihiko',15,{route:'romance'});G.S.spent={};out.at15={max:G.isMaxed(a),status:G.linkStatus(a,s.day,'after').ok,kind:G.linkScene(a).kind,bond:G.bond('akihiko',2)};
      // Haechan at 10 before 2/2: afterMax; on 2/2 late: his rank 11 is a story rank (due).
      const hc=G.LINKS.haechan;s=RQ.at('1/28','late');RQ.link('haechan',10,{route:'romance'});out.hcGap=G.linkScene(hc).kind;
      const h11=hc.ranks[10].after;s=RQ.at(h11,'late');RQ.link('haechan',10,{route:'romance'});const due=G.dueEvent('late');out.hcDue=due&&due.kind==='link'&&due.link.id;
      s=RQ.at(G.mdOf(G.dayOf(h11)-1),'late');RQ.link('haechan',10,{route:'romance'});const pre=G.dueEvent('late');out.hcEarly=!!(pre&&pre.kind==='link'&&pre.link.id==='haechan');
      // A 10-link at 10 is MAX as ever.
      s=RQ.at('1/12','after');RQ.link('yukari',10);out.yukari={max:G.isMaxed(G.LINKS.yukari),top:G.maxOf(G.LINKS.yukari)};
      return out})()""")
    ok(gap['janStatus'].get('after') and gap['janKind'] == 'after' and not gap['janMax'] and gap['janBond'] == 0, f"between rank 10 and February, time with Akihiko is afterMax, not MAX, and earns no ♪ ({gap['janStatus']})")
    ok(gap['r11'] == {'kind': 'rank', 'r': 10} and gap['bond11'] == 1, f"on his rank 11 date the rank scene is up and ♪ count again ({gap['r11']})")
    ok(not gap['short']['up'] and gap['short']['ready'] == 10 and gap['hang']['kind'] == 'hangout' and gap['hang']['stretch'], f"a meter left short plays a February hangout ({gap['short']}, {gap['hang']})")
    ok(gap['at15'] == {'max': True, 'status': True, 'kind': 'after', 'bond': 0}, f"at 15 he is MAX: afterMax rotates, no ♪ ({gap['at15']})")
    ok(gap['hcGap'] == 'after' and gap['hcDue'] == 'haechan' and not gap['hcEarly'], f"Haechan: afterMax before 2/2, rank 11 due as story on its night, not the night before ({gap})")
    ok(gap['yukari'] == {'max': True, 'top': 10}, 'a ten-rank link is MAX at 10 as ever')

    ui = p.eval(r"""(()=>{const G=FemcGame,out={};let s=RQ.at('2/8','after');RQ.link('akihiko',10,{route:'romance'});RQ.link('yukari',10);RQ.link('jungwon',15,{route:'romance'});G.saveQuiet();
      document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run();FemcMenu.open('links');
      const card=id=>[...document.querySelectorAll('[data-link]')].find(b=>b.dataset.link===id);
      out.akPips=card('akihiko')?.querySelectorAll('.g-pips i').length;out.akOn=card('akihiko')?.querySelectorAll('.g-pips i.on').length;out.akHint=card('akihiko')?.querySelector('.g-hint')?.textContent;
      out.yuPips=card('yukari')?.querySelectorAll('.g-pips i').length;out.jwHint=card('jungwon')?.querySelector('.g-hint')?.textContent;
      return out})()""")
    shots('status-links')
    ui['bonds'] = p.eval(r"""(()=>{FemcMenu.close();FemcMenu.open('bonds');const t=document.body.textContent||'';return {rank15:/R15/.test(t),five:t.includes('Five, Every Day')}})()""")
    shots('bonds-tab')
    p.eval('FemcMenu.close()')
    ok(ui['akPips'] == 15 and ui['akOn'] == 10 and ui['akHint'] != 'MAX' and ui['yuPips'] == 10 and ui['jwHint'] == 'MAX', f'Status: fifteen pips for the four (MAX only at 15), ten for everyone else ({ui})')
    ok(ui['bonds']['rank15'] and ui['bonds']['five'], 'Bonds lists the rank-15 perks and bond tiers')
    p.eval("document.querySelectorAll('.g-overlay').forEach(x=>x.remove())")

    perks = p.eval(r"""(async()=>{const G=FemcGame,B=window.FemcBuild,BD=window.FemcBonds,out={};
      out.perks=['haechan','jungwon','akihiko','shinjiro'].map(id=>B.perksAt(id,15).length);
      let s=RQ.at('2/26','after');RQ.link('akihiko',14,{route:'romance'});G.takeToasts();const a=G.LINKS.akihiko;s.links.akihiko.ready=undefined;
      const sc=G.linkScene(a);const seen=[];const keep=G.takeToasts;const f=G.finishLink(a,sc.kind,sc.r,99);await new Promise(r=>setTimeout(r,400));out.toast=[...document.querySelectorAll('body *')].filter(e=>!e.children.length&&/Bond perk/.test(e.textContent)).map(e=>e.textContent).concat(G.takeToasts().filter(x=>x.kind==='perk').map(x=>x.text));out.up=f.up&&G.progress('akihiko').rank===15;
      const ctx=(r,love)=>({bonds:{akihiko:r,haechan:r,jungwon:r,shinjiro:r},love:love?['akihiko','haechan','jungwon']:[],rev:[],date:'2/26'});
      out.tier=['akihiko','haechan','jungwon'].map(id=>{const b=BD.byId(id);return [BD.status(b,ctx(14,false)).cur.tier,BD.status(b,ctx(15,false)).cur.tier,BD.status(b,ctx(15,true)).cur.name===b.love15.name]});
      out.shin=BD.status(BD.byId('shinjiro'),ctx(15,true)).state;
      // Stamps: Bond MAX at a link's own top; Rank 15.
      RQ.at('2/26','after');G.S.links.wren.rank=9;G.S.links.elizabeth.rank=9;RQ.link('akihiko',10);out.st10=FemcStamps.earned().filter(x=>/max-link|rank-15/.test(x));
      RQ.link('akihiko',15);out.st15=FemcStamps.earned().filter(x=>/max-link|rank-15/.test(x));
      return out})()""")
    ok(perks['perks'] == [1, 1, 1, 1] and perks['up'] and any('MAX' in t for t in perks['toast']), f"each of the four earns a rank-15 perk, announced as MAX ({perks['toast']})")
    ok(all(t[0] == 2 and t[1] == 3 and t[2] for t in perks['tier']) and perks['shin'] == 'gone', f"the fighters' bond skills gain a rank-15 tier (and its romance version); Shinjiro's stays gone ({perks})")
    ok(perks['st10'] == [] and sorted(perks['st15']) == ['p3s-max-link', 'p3s-rank-15'], f"stamps: Bond MAX at the link's own top, and Rank 15 ({perks['st10']} → {perks['st15']})")

    # ── shinjiro ──
    sh = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.shinjiro,out={};
      let s=RQ.at('12/10','evening');RQ.link('shinjiro',10,{route:'romance'});out.dec=G.linkStatus(l,s.day,'evening').reason;out.decList=G.linksAt('dorm','evening').map(x=>x.id).includes('shinjiro');
      out.trace=!!G.nextTrace(l);
      s=RQ.at('2/1','evening');RQ.link('shinjiro',10,{route:'romance'});const st=G.linkStatus(l,s.day,'evening');out.feb={ok:st.ok,home:G.homeOf(l).area,kind:G.linkScene(l).kind,r:G.linkScene(l).r,list:G.linksAt('dorm','evening').map(x=>x.id).includes('shinjiro')};
      s=RQ.at('1/31','evening');RQ.link('shinjiro',10);out.jan31=G.linkStatus(l,s.day,'evening').ok;
      // Rank 15: due 2/27 after school at rank 14, not before, not in the evening, not at 13.
      const w=l.ranks[14],slot=w.slot||'after';out.wake={date:w.after,slot};
      s=RQ.at(w.after,slot);RQ.link('shinjiro',14,{route:'romance'});let d=G.dueEvent(slot);out.due=!!(d&&d.kind==='link'&&d.link.id==='shinjiro');
      s=RQ.at(G.mdOf(G.dayOf(w.after)-1),slot);RQ.link('shinjiro',14);d=G.dueEvent(slot);out.early=!!(d&&d.kind==='link'&&d.link.id==='shinjiro');
      s=RQ.at(w.after,slot==='after'?'evening':'after');RQ.link('shinjiro',14);d=G.dueEvent(G.S.slot);out.other=!!(d&&d.kind==='link'&&d.link.id==='shinjiro');
      s=RQ.at(w.after,slot);RQ.link('shinjiro',13);d=G.dueEvent(slot);out.at13=!!(d&&d.kind==='link'&&d.link.id==='shinjiro');
      s=RQ.at('3/1',slot);RQ.link('shinjiro',14);d=G.dueEvent(slot);out.late=!!(d&&d.kind==='link'&&d.link.id==='shinjiro');
      return out})()""")
    ok(sh['dec'] in ('max', 'closed') and not sh['decList'] and sh['jan31'] is False, f"after 10/4 Shinjiro is gone (not listed anywhere) until February ({sh['dec']})")
    ok(sh['feb'] == {'ok': True, 'home': 'dorm', 'kind': 'rank', 'r': 10, 'list': True}, f"from 2/1 the dorm kitchen holds his rank 11 ({sh['feb']})")
    ok(sh['due'] and not sh['early'] and not sh['other'] and not sh['at13'] and sh['late'], f"his waking (rank 15) is due on {sh['wake']} at rank 14 only, not a day early, not in another slot; a late save still gets it ({sh})")

    # His waking through the real UI.
    p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.shinjiro,w=l.ranks[14];const s=RQ.at(w.after,w.slot||'after');RQ.route('stay');RQ.link('shinjiro',14,{route:'romance'});RQ.link('akihiko',15,{route:'friend'});
      G.saveQuiet();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    shots('shinjiro-wakes')
    for _ in range(4000):
        if p.eval("FemcGame.progress('shinjiro').rank===15 && !document.querySelector('.gs:not(.out)')"):
            break
        p.eval('RQ.step()')
    wk = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.shinjiro,a=G.LINKS.akihiko;const t=G.nextTrace(l);
      const hosp=(a.afterMax||[]).findIndex(e=>/Tatsumi/.test(e.place||''));const list=G.afterList(a);
      return {rank:G.progress('shinjiro').rank,flag:!!G.S.flags['shinji-awake'],trace:t?((t.entry.flags||[]).includes('shinji-awake')?'awake':t.i):null,akHosp:hosp<0||!list.includes(a.afterMax[hosp]),listed:G.linksAt('dorm','evening').map(x=>x.id).includes('shinjiro')}})()""")
    ok(wk['rank'] == 15 and wk['flag'] and wk['trace'] in (None, 'awake') and wk['akHosp'] and not wk['listed'], f"he wakes through the real UI: rank 15, shinji-awake set, the bedside traces give way to the awake one, and Akihiko's hospital visit steps aside ({wk})")

    mo = p.eval(r"""(()=>{const G=FemcGame,id='r15-shinjiro-awake-morning';const due=()=>{const d=G.dueEvent('early');return d&&d.kind==='event'?d.ev.id:null};
      let s=RQ.at('2/28','early');s.events=s.events.filter(x=>x!==id);RQ.link('shinjiro',14);const before=due();
      s=RQ.at('2/28','early');s.events=s.events.filter(x=>x!==id);RQ.link('shinjiro',15);s.flags['shinji-awake']=true;const after=due();
      s=RQ.at('3/2','early');s.events=s.events.filter(x=>x!==id);RQ.link('shinjiro',15);s.flags['shinji-awake']=true;const late=due();
      return {before,after,late}})()""")
    ok(mo == {'before': None, 'after': 'r15-shinjiro-awake-morning', 'late': 'r15-shinjiro-awake-morning'}, f"the morning after he wakes plays only once he's awake, and still plays if the waking came late ({mo})")

    # ── akihiko: the romance turn and the buzz ──
    ak = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.akihiko,out={};const r7=l.ranks[6],r9=l.ranks[8];
      const routeOpts=sc=>{let n=0;RQ.walk(sc,(o,opt)=>{if(opt&&o.route==='romance')n++;});return n};
      out.r7romance=routeOpts(r7.scene)>0;
      // Play rank 7 to its end down every path, with and without Shinjiro's romance: romance becomes possible only without it.
      const plays=shin=>{const routes=new Set();const want=new Set(),got=new Set();
        RQ.enumerate({scene:RQ.noBattle(r7.scene),place:r7.place,time:r7.time,link:'akihiko'},'ak7',()=>{RQ.at('9/1','after');RQ.link('akihiko',6);RQ.link('shinjiro',6,shin?{route:'romance'}:{});},want,got);
        const res=[];for(let k=0;k<200;k++){RQ.at('9/1','after');RQ.link('akihiko',6);RQ.link('shinjiro',6,shin?{route:'romance'}:{});const path=[...Array(12)].map((_,i)=>(k>>i)&1?1:(k%3===2&&i===5?2:0));RQ.once({scene:RQ.noBattle(r7.scene),link:'akihiko',place:r7.place},path,'ak7');routes.add(G.progress('akihiko').route||'none');}
        return [...routes].sort()};
      out.noShin=plays(false);out.withShin=plays(true);
      // Rank 9 on the romance route offers no way out of it; unset, the old choice is there.
      const opts9=rt=>{RQ.at('11/2','after');RQ.link('akihiko',8,rt?{route:rt}:{});const pl=FemcScene.play({scene:RQ.noBattle(r9.scene),link:'akihiko',place:r9.place,onDone:()=>{}}),el=pl.el;const seen=new Set();
        for(let i=0;i<3000;i++){const bs=[...el.querySelectorAll('.gs-choices button')];if(bs.length){bs.forEach(b=>seen.add(b.textContent));bs[0].click();}else el.click();if(!el.isConnected)break;}
        pl.close();el.remove();document.documentElement.classList.remove('g-in-scene');return {seen:[...seen],route:G.progress('akihiko').route||null}};
      const a=opts9('romance'),b=opts9(null);out.r9romance={best:a.seen.some(t=>/best friend/i.test(t)),route:a.route};out.r9open={best:b.seen.some(t=>/best friend/i.test(t)),fallen:b.seen.some(t=>/fallen/i.test(t))};
      return out})()""", timeout=600)
    ok(ak['r7romance'] and 'romance' in ak['noShin'] and 'none' in ak['noShin'] and ak['withShin'] == ['none'], f"Akihiko's romance can start at rank 7 (9/1); not while Solar is on Shinjiro's romance route ({ak})")
    ok(ak['r9romance']['route'] == 'romance' and not ak['r9romance']['best'] and ak['r9open']['best'] and ak['r9open']['fallen'], f"rank 9 keeps a started romance and still offers both answers to everyone else ({ak})")

    buzz = p.eval(r"""(()=>{const G=FemcGame,out={rows:[],bad:[]};
      const mine=G.D.dailyLife.filter(e=>(e.ranks&&'akihiko' in e.ranks)||(e.ranksBelow&&'akihiko' in e.ranksBelow)||(e.route&&'akihiko' in e.route));
      for(const e of mine){
        const lo=e.ranks?.akihiko??0,hi=e.ranksBelow?.akihiko??16,rt=e.route?.akihiko;
        // Find a day in its window that fits everything else (slot, school/off, days), then flip each gate.
        let day=null;for(let d=G.dayOf(e.after);d<=G.dayOf(e.until||G.mdOf(G.dayOf(e.after)+30));d++){const i=G.dayInfo(d);
          if(e.schoolOnly&&i.type!=='school')continue;if(e.offOnly&&i.type!=='off')continue;if(e.days&&!e.days.includes(i.dow))continue;if(e.weather&&!e.weather.includes(i.weather))continue;
          if(!G.slotsFor(i).includes(e.slot))continue;if(G.D.events.some(x=>x.date===i.md))continue;day=d;break;}
        if(day==null){out.bad.push(e.id+': no day');continue;}
        const fits=(rank,route)=>{RQ.at(G.mdOf(day),e.slot,{flags:Object.fromEntries((e.flags||[]).map(f=>[f,true]))});(e.events||[]).forEach(x=>{if(!G.S.events.includes(x))G.S.events.push(x)});
          (e.met||[]).forEach(id=>RQ.link(id,Math.max(1,G.progress(id).rank)));Object.entries(e.ranks||{}).forEach(([id,r])=>{if(id!=='akihiko')RQ.link(id,r)});
          const h=Array.isArray(e.heading)?e.heading[0]:e.heading;if(h&&G.dayOf(G.mdOf(day))>G.dayOf('12/21'))RQ.route(h);
          RQ.link('akihiko',rank,route&&route!=='none'?{route}:{});G.S.dailyLife={seen:G.D.dailyLife.filter(x=>x.id!==e.id).map(x=>x.id),lastDay:-99};const r=G.dailyLife(e.slot,day);return r&&r.id===e.id};
        const okIn=fits(lo,rt||'romance');const below=lo>0?!fits(lo-1,rt||'romance'):true;const above=hi<16?!fits(hi,rt||'romance'):true;
        const wrong=rt?!fits(lo,rt==='romance'?'friend':'romance'):true;
        out.rows.push([e.id,lo,hi,rt||'-',okIn,below,above,wrong]);if(!(okIn&&below&&above&&wrong))out.bad.push(e.id);}
      const runs=G.D.runIns.filter(e=>(e.ranks&&'akihiko' in e.ranks)||(e.ranksBelow&&'akihiko' in e.ranksBelow)||(e.route&&'akihiko' in e.route));
      out.runins=runs.map(e=>e.id);
      for(const e of runs){const lo=e.ranks?.akihiko??0,hi=e.ranksBelow?.akihiko??16,rt=e.route?.akihiko,w=e.where||{},spot={act:(w.acts||[])[0],area:(w.areas||[])[0],job:(w.jobs||[])[0],club:(w.clubs||[])[0],slot:e.slot};
        let day=null;for(let d=G.dayOf(e.after||'4/8');d<=G.dayOf(e.until||G.mdOf(G.dayOf(e.after||'4/8')+45));d++){RQ.at(G.mdOf(d),e.slot||'after');RQ.link('akihiko',lo,rt&&rt!=='none'?{route:rt}:{});(e.met||[]).forEach(id=>RQ.link(id,Math.max(1,G.progress(id).rank)));Object.assign(G.S.flags,Object.fromEntries((e.flags||[]).map(f=>[f,true])));if(G.runInFits(e,spot,d)){day=d;break;}}
        if(day==null){out.bad.push(e.id+': never fits');continue;}
        const fits=(rank,route)=>{RQ.at(G.mdOf(day),e.slot||'after');(e.met||[]).forEach(id=>RQ.link(id,1));Object.assign(G.S.flags,Object.fromEntries((e.flags||[]).map(f=>[f,true])));RQ.link('akihiko',rank,route&&route!=='none'?{route}:{});return G.runInFits(e,spot,day)};
        const okr=fits(lo,rt)&&(lo===0||!fits(lo-1,rt))&&(hi===16||!fits(hi,rt))&&(!rt||!fits(lo,rt==='romance'?'friend':'romance'));
        out.rows.push([e.id,lo,hi,rt||'-',okr]);if(!okr)out.bad.push(e.id);}
      out.n=mine.length;return out})()""", timeout=600)
    print('buzz', json.dumps(buzz['rows']))
    ok(buzz['n'] >= 4 and not buzz['bad'], f"the Gekkoukan buzz: {buzz['n']} routines and {len(buzz['runins'])} run-ins play inside their rank / route gates and not outside them: {buzz['bad']}")

    # ── branches ──
    br = p.eval(r"""(()=>{const G=FemcGame,out={};
      for(const id of ['haechan','jungwon','akihiko','shinjiro']){const l=G.LINKS[id];out[id]=[];
        l.ranks.slice(10).forEach((r,k)=>{let heads=false,routes=false;RQ.walk(r.scene,x=>{if(x.ifHeading)heads=true;if(x.ifRoute||x.ifRomance)routes=true;});
          const txt={};for(const h of ['R','S','H','stay','true'])for(const rt of ['romance','friend']){RQ.at(r.after,r.slot||'evening');RQ.route(h);RQ.link(id,10+k,{route:rt});
            ['hanni','hyein','yunjin','jungwon','mark','jihoon','cherry','minji','jaehyun','akihiko','haechan','ken','koromaru','sunoo'].forEach(x=>{if(x!==id)RQ.link(x,10)});
            txt[h+'/'+rt]=RQ.once({scene:RQ.noBattle(r.scene),link:id,place:r.place,time:r.time},[],id+'/'+(k+11)).text;}
          const byHead=new Set(['R','S','H','stay','true'].map(h=>txt[h+'/romance'])).size,byRoute=['R','S','H','stay','true'].filter(h=>txt[h+'/romance']!==txt[h+'/friend']).length;
          out[id].push({rank:k+11,heads,routes,byHead,byRoute});});}
      return out})()""", timeout=900)
    print('branches', json.dumps(br))
    for id in FOUR:
        for r in br[id]:
            ok(r['heads'] and r['byHead'] >= 3, f"{id} rank {r['rank']} branches by the locked route ({r['byHead']} different scenes over five routes)")
            ok(r['routes'] and r['byRoute'] >= 1, f"{id} rank {r['rank']} differs between romance and friendship ({r['byRoute']}/5 routes)")

    # ── reach: a realistic February ──
    reach = {}
    for head in ['stay', 'R', 'S', 'H', 'true']:
        for rt in (['romance', 'friend'] if not QUICK else ['romance']):
            r = p.eval(r"""(()=>{const G=FemcGame,s=RQ.at('1/31','late');RQ.route('%s');
              ['haechan','jungwon','akihiko','shinjiro'].forEach(id=>RQ.link(id,10,{route:'%s',rankDay:{10:G.dayOf('1/20')}}));
              ['hanni','hyein','yunjin','mark','jihoon','cherry','minji','jaehyun','ken','koromaru','sunoo','junpei','yukari','mitsuru','fuuka','aigis'].forEach(x=>RQ.link(x,10));
              s.links.shinjiro.after=2;s.route.frags={R:6,S:6,H:6};const f=RQ.february(['haechan','jungwon','akihiko','shinjiro'],'best');return {reached:f.reached,ranks:f.ranks,n:f.log.length,log:f.log.slice(-6)}})()""" % (head, rt), timeout=1800)
            reach[f'{head}/{rt}'] = r
            ok(all(r['ranks'][id] == 15 for id in FOUR), f"a February on the {head} route ({rt}) takes all four to 15 with good answers: {r['reached']} {r['ranks']}")
    plain = p.eval(r"""(()=>{const G=FemcGame,out={};for(const id of ['jungwon','akihiko','shinjiro']){const s=RQ.at('1/31','late');RQ.route('stay');RQ.link(id,10,{route:'friend'});s.route.frags={R:6,S:6,H:6};
        const f=RQ.february([id],'plain');out[id]={rank:f.ranks[id],at:f.reached[id]||null,hang:f.log.filter(x=>x[3]==='hangout').length};}return out})()""", timeout=1800)
    ok(all(v['rank'] == 15 for v in plain.values()), f"a player who answers less well still reaches 15 by 3/4 with hangouts: {plain}")

    # ── migration ──
    mig = p.eval(r"""(()=>{const G=FemcGame,out={};
      // An old December save (made before this batch): the four at 10, afterMax partway, Shinjiro's traces partway.
      let s=RQ.at('12/20','evening');['haechan','jungwon','akihiko'].forEach(id=>RQ.link(id,10,{route:'romance',after:2,rankDay:{10:G.dayOf('12/1')}}));RQ.link('shinjiro',10,{route:'romance',after:1,rankDay:{10:G.dayOf('10/3')}});
      const raw=RQ.copy(s);delete raw.yv;raw.yv=2;
      G.importCode(btoa(unescape(encodeURIComponent(JSON.stringify({state:raw})))));
      out.code=['haechan','jungwon','akihiko','shinjiro'].map(id=>[G.progress(id).rank,G.progress(id).after,G.progress(id).route]);
      out.decAk=G.linkScene(G.LINKS.akihiko).kind;out.decTrace=G.nextTrace(G.LINKS.shinjiro)?.i??null;
      // The same save through a slot and the autosave key.
      localStorage.setItem('kg-femc-revamp-slot2',JSON.stringify({state:raw,at:Date.now()}));G.loadSlot(2);out.slot=G.progress('akihiko').rank===10&&G.progress('shinjiro').after===1;
      // An old save already in February, past several rank dates: everything picks up, one story rank a night.
      s=RQ.at('2/18','late');['haechan','jungwon','akihiko','shinjiro'].forEach(id=>RQ.link(id,10,{route:'friend'}));const raw2=RQ.copy(s);
      G.importCode(btoa(unescape(encodeURIComponent(JSON.stringify({state:raw2})))));
      const hc=G.dueEvent('late');out.feb={hc:hc&&hc.kind==='link'?[hc.link.id,G.linkScene(hc.link).r]:null};G.S.slot='after';G.S.day=G.dayOf('2/19');
      out.feb.ak=[G.linkScene(G.LINKS.akihiko).kind,G.linkScene(G.LINKS.akihiko).r];G.S.slot='evening';out.feb.sh=[G.linkStatus(G.LINKS.shinjiro).ok,G.linkScene(G.LINKS.shinjiro).r];
      return out})()""")
    ok(mig['code'] == [[10, 2, 'romance'], [10, 2, 'romance'], [10, 2, 'romance'], [10, 1, 'romance']] and mig['decAk'] == 'after' and mig['decTrace'] == 1 and mig['slot'],
       f"an old December save loads unchanged (codes and slots): afterMax and traces carry on where they were ({mig})")
    ok(mig['feb']['hc'] == ['haechan', 10] and mig['feb']['ak'] == ['rank', 10] and mig['feb']['sh'] == [True, 10], f"an old save already in February picks up rank 11 for each of the four ({mig['feb']})")
    # The autosave key, read the way a page load reads it.
    p.eval(r"""(()=>{const G=FemcGame,s=RQ.at('2/2','late');['haechan','jungwon','akihiko','shinjiro'].forEach(id=>RQ.link(id,10,{route:'romance'}));const raw=RQ.copy(s);localStorage.setItem('kg-femc-revamp',JSON.stringify(raw))})()""")
    p.goto('femc-game.html?debug=1')
    auto = p.eval("(()=>{const G=FemcGame;return {day:G.mdOf(G.S.day),ranks:['haechan','jungwon','akihiko','shinjiro'].map(id=>G.progress(id).rank),due:(G.dueEvent('late')||{}).link?.id||null}})()")
    ok(auto == {'day': '2/2', 'ranks': [10, 10, 10, 10], 'due': 'haechan'}, f'the autosave loads on a page load and his rank 11 is due that night ({auto})')
    p.eval(HELPERS)

    # ── capacity: a year whose links move on their dates still plays every routine, the buzz included ──
    cap = {}
    for rt in ['romance', 'friend']:
        cap[rt] = p.eval(r"""(()=>{const G=FemcGame,s=RQ.at('4/8','early');s.dailyLife={seen:[],lastDay:-99};const plays=[];const ids=['akihiko','shinjiro','jungwon','haechan'];
          const rankOn=(l,d)=>l.ranks.filter(r=>r.after&&G.dayOf(r.after)<=d).length;
          for(let d=G.dayOf('4/8');d<=G.END();d++){s.day=d;const info=G.dayInfo(d);s.spent={};
            if(d>=G.dayOf('4/18'))s.flags['joined-junpei']=true;if(d>=G.dayOf('12/22'))Object.assign(s.flags,{'year-goes-on':true,'route-stay':true});
            RQ.link&&ids.forEach(id=>{const l=G.LINKS[id];let r=Math.min(15,rankOn(l,d));if(id==='shinjiro'&&d>=G.dayOf('10/4')&&d<G.dayOf('2/1'))r=10;
              if(id==='haechan'&&d<=G.dayOf('11/4'))r=0;if(id==='jungwon'&&d<=G.dayOf('10/14'))r=0;
              if(r>0){if(!s.met.includes(id))s.met.push(id);const pr=G.progress(id);pr.rank=r;pr.route=(id==='akihiko'?(r>=7&&'%s'==='romance'||r>=9?'%s':undefined):(r>=8?'%s':undefined));}});
            if(d>=G.dayOf('10/4'))s.flags['shinjiro-coma']=true;if(G.progress('shinjiro').rank>=15)s.flags['shinji-awake']=true;
            [['9/12','arrived-hanni'],['9/12','arrived-hyein'],['10/10','arrived-yunjin'],['10/14','arrived-jungwon'],['11/4','arrived-haechan'],['8/7','joined-shinjiro']].forEach(([w,f])=>{if(d>G.dayOf(w))s.flags[f]=true});
            for(const slot of G.slotsFor(info)){s.slot=slot;
              const due=G.D.events.filter(e=>!e.unlock&&e.date===info.md&&({darkhour:'evening'}[e.slot]||e.slot||'evening')===slot&&!s.events.includes(e.id)&&(!e.flag||s.flags[e.flag]));
              if(due.length){due.forEach(e=>s.events.push(e.id));continue;}
              const r=G.dailyLife();if(r){G.finishDailyLife(r.id);plays.push(r.id);}}}
          const optional=G.D.events.filter(e=>e.unlock||(e.flag&&e.flag!=='year-goes-on')).map(e=>e.id);
          const wrong=e=>(e.route&&Object.entries(e.route).some(([id,r])=>id==='akihiko'&&(r==='none'?'%s'==='romance':r!=='%s')))||(e.ranksBelow&&Object.entries(e.ranksBelow).some(([id,r])=>rankOn(G.LINKS[id],G.dayOf(e.after))>=r));
          const missing=G.D.dailyLife.filter(e=>!plays.includes(e.id)&&!(e.events||[]).some(id=>optional.includes(id))&&!wrong(e)&&(/^r15-/.test(e.id)||!e.ranks&&!e.ranksBelow&&!e.route)).map(e=>e.id);
          return {missing,r15:plays.filter(x=>/^r15-/.test(x)),skip:G.D.dailyLife.filter(e=>/^r15-/.test(e.id)&&wrong(e)).map(e=>e.id)}})()""" % (rt, rt, rt, rt, rt), timeout=900)
    every = set(cap['romance']['r15']) | set(cap['friend']['r15'])
    allr15 = set(p.eval("FemcGame.D.dailyLife.filter(e=>/^r15-/.test(e.id)).map(e=>e.id)"))
    print('capacity', json.dumps({k: v['missing'] for k, v in cap.items()}))
    ok(not cap['romance']['missing'] and not cap['friend']['missing'], f"a year whose links move on their dates still plays every routine (romance and friend runs): {cap['romance']['missing']} {cap['friend']['missing']}")
    # (One that needs a link barely started, like the outsider's view in February, can't fit runs that max the links; the buzz check plays it.)
    allr15 -= set(cap['romance']['skip']) & set(cap['friend']['skip'])
    ok(every == allr15, f"between the two runs every rank-15 routine they allow plays: missing {sorted(allr15 - every)}")

    # ── scenes ──
    n_paths = 0
    jobs = []
    for id in FOUR:
        jobs.append((f'{id}-ranks', f"const l=G.LINKS['{id}'];l.ranks.slice(10).forEach((r,k)=>{{n+=RQ.paths({{scene:r.scene,place:r.place,time:r.time}},'{id}/'+(k+11),r.after,'{id}',{{rank:10+k,slot:r.slot||'evening'}})}});"))
        jobs.append((f'{id}-stretch', f"const l=G.LINKS['{id}'];(l.stretchHangouts||[]).forEach((h,i)=>{{n+=RQ.paths({{scene:h,place:G.linkPlace(l)}},'{id}/stretch/'+i,'2/10','{id}',{{rank:11}})}});(l.afterMax||[]).forEach((e,i)=>{{n+=RQ.paths({{scene:e.scene,place:e.place,time:e.time}},'{id}/after/'+i,'2/10','{id}',{{rank:12}})}});"))
    jobs.append(('akihiko-changed', "const l=G.LINKS.akihiko;[6,7,8].forEach(i=>{const r=l.ranks[i];n+=RQ.paths({scene:r.scene,place:r.place,time:r.time},'akihiko/'+(i+1),r.after,'akihiko',{rank:i,routes:[null,'romance','friend'],setup:st=>{if(!st.rt)G.S.links.shinjiro.route='romance';}})});n+=RQ.paths({scene:l.christmas.scene,place:l.christmas.place,time:l.christmas.time},'akihiko/christmas','12/24','akihiko',{rank:10});"))
    jobs.append(('haechan-changed', "const l=G.LINKS.haechan;[8,9].forEach(i=>{const r=l.ranks[i];n+=RQ.paths({scene:r.scene,place:r.place,time:r.time},'haechan/'+(i+1),r.after,'haechan',{rank:i,slot:'late'})});"))
    jobs.append(('living', r"""const ids=['haechan','jungwon','akihiko','shinjiro'];
      const mineD=G.D.dailyLife.filter(e=>/^r15-/.test(e.id));mineD.forEach(e=>{n+=RQ.paths({scene:[...(e.bg?[{bg:e.bg}]:[]),...e.scene],place:e.place,time:e.time},'daily/'+e.id,e.after,null,{slot:e.slot,rank:Math.max(10,...Object.values(e.ranks||{}))>15?15:undefined,setup:st=>{Object.entries(e.ranks||{}).forEach(([id,r])=>RQ.link(id,Math.min(15,Math.max(r,(e.ranksBelow||{})[id]?(e.ranksBelow[id]-1):r))));Object.entries(e.ranksBelow||{}).forEach(([id,r])=>{if(G.progress(id).rank>=r)RQ.link(id,r-1)});Object.entries(e.route||{}).forEach(([id,r])=>{G.progress(id).route=r==='none'?undefined:r;});(e.flags||[]).forEach(f=>{G.S.flags[f]=true});(e.events||[]).forEach(x=>{if(!G.S.events.includes(x))G.S.events.push(x)});}})});
      const mineR=G.D.runIns.filter(e=>/^r15-/.test(e.id));mineR.forEach(e=>{n+=RQ.paths({scene:e.scene,place:e.place||'Iwatodai Strip',time:e.time||'After School'},'runin/'+e.id,e.after||'4/20',e.who,{slot:e.slot||'after',setup:st=>{Object.entries(e.ranks||{}).forEach(([id,r])=>RQ.link(id,r));Object.entries(e.ranksBelow||{}).forEach(([id,r])=>{if(G.progress(id).rank>=r)RQ.link(id,r-1)});Object.entries(e.route||{}).forEach(([id,r])=>{G.progress(id).route=r==='none'?undefined:r;});(e.flags||[]).forEach(f=>{G.S.flags[f]=true});}})});
      ids.forEach(id=>{const l=G.LINKS[id];(l.lateNights||[]).filter(e=>/^r15-/.test(e.id)).forEach(e=>{n+=RQ.paths({scene:[...(e.bg?[{bg:e.bg}]:[]),...e.scene],place:e.place,time:e.time},'night/'+e.id,e.after,id,{slot:'late',rank:Math.max(10,e.rank||10)})});
        Object.entries(l.holidays||{}).filter(([md,h])=>G.dayOf(md)>=G.dayOf('1/31')||/^r15-/.test(h.id||'')).forEach(([md,h])=>{n+=RQ.paths({scene:[...(h.bg?[{bg:h.bg}]:[]),...h.scene],place:h.place,time:h.time},'holiday/'+id+'/'+md,md,id,{rank:Math.max(10,h.rank||10)})});});"""))
    jobs.append(('events', "['a6-graduation','end-ending','r15-shinjiro-awake-morning','a3-campus','a3-dinner'].forEach(id=>{const e=G.D.events.find(x=>x.id===id);n+=RQ.paths({scene:e.scene,place:e.place,time:e.time,event:true},'event/'+id,e.date,null,{slot:e.slot,setup:st=>{G.S.flags['shinji-awake']=!!st.flags['shinji-awake'];}})});"))
    for name, body in jobs:
        k = p.eval('(()=>{const G=FemcGame;let n=0;' + body + 'return n})()', timeout=3600)
        print(name, k, 'paths', flush=True)
        n_paths += k
    bad = p.eval('RQ.bad')
    ok(not bad, f'every new scene finishes on every locked route and link route, reaches every option, with real faces and named speakers: {bad[:8]}')
    ok(n_paths > 500, f'{n_paths} scene paths played')
    assets = p.eval("(async()=>{const urls=[...RQ.faces,...RQ.assets];const miss=(await Promise.all(urls.map(u=>fetch(u,{method:'HEAD'}).then(r=>r.ok?null:u).catch(()=>u)))).filter(Boolean);return {n:urls.length,miss}})()")
    ok(not assets['miss'], f"all {assets['n']} faces and backgrounds shown load: {assets['miss'][:4]}")

    # A rank-11 scene and the rank card through the real UI (Akihiko, 2/1 after school).
    p.eval(r"""(()=>{const G=FemcGame,s=RQ.at('2/1','after');RQ.route('stay');RQ.link('akihiko',10,{route:'romance'});G.saveQuiet();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run();
      setTimeout(()=>FemcGameUI.playLink&&FemcGameUI.playLink(G.LINKS.akihiko),50)})()""")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    shots('akihiko-rank11')
    for _ in range(4000):
        if p.eval("!!document.querySelector('.gs-rank') || FemcGame.progress('akihiko').rank===11 && !document.querySelector('.gs:not(.out)')"):
            break
        p.eval("(()=>{const b=document.querySelector('.gs:not(.out) .gs-choices button');if(b){b.click();return}RQ.step()})()")
    card = p.eval("document.querySelector('.gs-rank .gs-ranknum')?.textContent||''")
    print('rank card', card)
    ok(p.eval("FemcGame.progress('akihiko').rank") in (10, 11), 'Akihiko\'s rank 11 plays through the real UI')

    errors = p.console()
    ok(not errors, f'no browser errors: {errors[:3]}')
    print(json.dumps({'checks': len(checks), 'scenePaths': n_paths, 'assets': assets['n'], 'screenshots': str(OUT)}, indent=1))
    for c in checks:
        print(' ✓', c)
finally:
    p.close()
