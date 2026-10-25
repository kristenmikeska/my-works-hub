"""Haechan batch (2026-10-21): story ranks, save migration, the secret road, his living-world content.

  python3 tests/femc_haechan.py [--screenshots /absolute/dir]

ranks      all ten ranks are story ranks: each is due on its date in its slot (late; 4 and 5 in the evening), not the day
           before, not before his arrival, not on a night a late story event already took; a save behind the dates catches
           up one a night; time with him before a date is a hangout with no rank-up; rank 1 through the real UI.
migration  an old meter-based save with a rank scene seen but the meter not full gets that rank (scene never replayed,
           xp and progress kept); clean saves are untouched; slots, backup codes and the autosave all migrate.
reads      everything that reads his rank still works: perks on rank-up, the Christmas option at 8 on his romance route,
           bonds, afterRank texts (with heading variants), solstice anchors (by his lean).
routes     heading(): the lean before the solstice, the secret road only with intent, the locked route after. The solstice:
           Runners, strangers, Stay and the true ending open on their natural requirements; Hoax only on the secret ones
           (each missing piece closes it); the three hidden "pull" choices appear only after a Hoax door was gone toward.
endings    the Hoax ending is "the unfated life" (card, end screen name, old clears renamed, CG kept); the others unchanged.
scenes     every Haechan scene (ranks, hangouts, afterMax, Christmas, late nights, routines, run-ins, holidays) and every
           story event this batch touched, down every choice path on every heading and on both his romance and friend
           routes: each finishes, every option is reached, every face is a real expression, every background loads.
capacity   a simulated year still plays every routine (Haechan's included); his late nights all fit their windows.
Screenshots at 1000x486 and 375x812. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-haechan-'))
OUT.mkdir(parents=True, exist_ok=True)
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
window.HC = (() => {
  const G = FemcGame, SC = FemcScene, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', true);
  G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  const faces = new Set(), assets = new Set(), bad = [];
  const ARR = [['9/12', 'arrived-hanni'], ['9/12', 'arrived-hyein'], ['9/19', 'arrived-jihoon'], ['9/26', 'arrived-minji'], ['10/10', 'arrived-yunjin'], ['10/14', 'arrived-jungwon'],
    ['10/24', 'arrived-jaehyun'], ['10/31', 'arrived-crew'], ['11/4', 'arrived-haechan'], ['11/7', 'arrived-sunoo'], ['11/13', 'arrived-cherry'], ['11/18', 'arrived-mark'],
    ['10/17', 'awake-jihoon'], ['10/31', 'awake-minji'], ['11/28', 'awake-jungwon'], ['12/5', 'awake-haechan']];
  // A clean save on md at slot: story events dated before it played, the arrivals' flags, Wren / Elizabeth out of the way.
  function at(md, slot, extra = {}) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    const d = G.dayOf(md); G.S.day = d; G.S.slot = slot;
    G.S.events = G.D.events.filter(e => G.dayOf(e.date) < d && (!e.flag || d > G.dayOf('12/21'))).map(e => e.id);
    const F = G.S.flags; if (d > G.dayOf('4/18')) F['joined-junpei'] = true; if (d > G.dayOf('12/21')) F['year-goes-on'] = true;
    ARR.forEach(([w, f]) => { if (d > G.dayOf(w)) F[f] = true; });
    G.S.tartarus.bosses = G.D.cal.ops.filter(o => G.dayOf(o.date) < d).map(o => o.op);
    ['wren', 'elizabeth'].forEach(id => { G.S.links[id] = { rank: 10, xp: 0, seen: [], rankDay: {}, push: 0, reversed: false }; });
    G.S.dailyLife = { seen: G.D.dailyLife.map(e => e.id), lastDay: 9999 }; G.S.lateNights = { seen: [], lastDay: 9999 };
    Object.assign(G.S, copy(extra)); G.S.flags = { ...F, ...(extra.flags || {}) };
    return G.S;
  }
  const link = (id, rank, more = {}) => { if (!G.S.met.includes(id)) G.S.met.push(id); G.S.links[id] = { rank, xp: 0, seen: [], rankDay: {}, hung: 0, push: 0, reversed: false, ...more }; };
  function walk(a, fn) { (a || []).forEach(l => { fn(l); walk(l.then, fn); walk(l.else, fn); (l.choose || l.route || []).forEach(o => { fn(o, true); walk(o.then, fn); }); }); }
  // Battles, act cards and summon cards run on timers or another screen; the walk skips them (they don't branch).
  const noBattle = a => (a || []).filter(l => !l.battle && !l.act && !l.summon).map(l => { const o = { ...l }; if (o.then) o.then = noBattle(o.then); if (o.else) o.else = noBattle(o.else); if (o.choose) o.choose = o.choose.map(c => ({ ...c, then: noBattle(c.then) })); if (o.route) o.route = o.route.map(c => ({ ...c, then: noBattle(c.then) })); return o; });
  function staticCheck(scene, key) {
    walk(scene, (l, opt) => {
      if (opt) return;
      if (l.s) {
        const have = FEMC_PORTRAITS[l.s];
        if (have) { if (l.f && !have.includes(l.f)) bad.push(`${key}: ${l.s}/${l.f}`); }
        else if (l.s !== 'solar' && !G.castHas(l.s)) bad.push(`${key}: no cast name for ${l.s}`);
      }
    });
  }
  function once(opts, path, key) {
    let result, c = 0; const decisions = [], picked = [];
    const pl = SC.play({ ...opts, onDone: r => { result = r; } }), el = pl.el;
    let steps = 0;
    while (!result) {
      if (++steps > 4000) throw Error('stuck ' + key);
      const bs = [...el.querySelectorAll('.gs-choices button:not(:disabled)')];
      if (bs.length) { const n = Math.min(path[c++] ?? 0, bs.length - 1); decisions.push(bs.length); picked.push(bs[n].querySelector('span').textContent); bs[n].click(); continue; }
      const img = el.querySelector('.gs-portrait'); if (img && !img.hidden && img.getAttribute('src')) faces.add(img.src);
      const bg = el.querySelector('.gs-bg')?.style.backgroundImage.match(/url\("?(.*?)"?\)/); if (bg) assets.add(bg[1]);
      el.click();
    }
    el.remove(); document.documentElement.classList.remove('g-in-scene');
    return { result, decisions, picked };
  }
  // Every path, on every heading (the route flags dominate heading()) and on both of his routes, plus the flags the scene
  // reads set and unset. Returns the number of plays.
  const HEADS = [{}, { 'hc-lean-S': true }, { 'home-H3': true, 'pull-no-there': true }, { 'route-R': true }, { 'route-S': true }, { 'route-H': true }, { 'route-stay': true }, { 'route-true': true }];
  function paths(opts, key, md, linkId) {
    opts = { ...opts, scene: noBattle(opts.scene) };
    staticCheck(opts.scene, key);
    const want = new Set(); walk(opts.scene, (o, opt) => { if (opt && !o.christmasOptions) want.add(G.sub(o.t)); });
    const read = {}; walk(opts.scene, l => [].concat(l.ifFlag || []).forEach(f => { read[f] = true; }));
    const events = new Set(); walk(opts.scene, l => [].concat(l.ifEvent || []).forEach(e => events.add(e)));
    let heads = false; walk(opts.scene, l => { if (l.ifHeading) heads = true; });
    const states = [{ h: {}, route: null, full: false }, { h: {}, route: 'romance', full: true }, { h: {}, route: 'friend', full: true }];
    if (heads) HEADS.slice(1).forEach(h => { states.push({ h, route: 'romance', full: false }, { h, route: 'friend', full: false }); });
    // Each flag the scene reads, on its own (a branch nested in another flag's else needs it alone).
    Object.keys(read).forEach(f => states.push({ h: { [f]: true }, route: 'romance', full: false }));
    // After the solstice a route is always locked: play every route, never none.
    if (G.dayOf(md) > G.dayOf('12/21')) { states.length = 0; HEADS.slice(3).forEach(h => { states.push({ h, route: 'romance', full: false }, { h, route: 'friend', full: true }, { h, route: null, full: false }); }); }
    const got = new Set(); let n = 0;
    for (const st of states) {
      const setup = () => {
        at(md, 'late', { flags: { ...(st.full ? read : {}), ...st.h } });
        if (st.full) { G.S.events = G.D.events.map(e => e.id); ['hanni', 'hyein', 'yunjin', 'jungwon', 'mark', 'jihoon', 'cherry', 'minji', 'jaehyun', 'akihiko'].forEach(id => link(id, 10)); }
        link('haechan', st.full ? 10 : 8, st.route ? { route: st.route } : {});
        G.S.route.frags = { R: 3, S: 3, H: st.h['home-H3'] ? 6 : 3 };
      };
      const queue = [[]];
      while (queue.length) {
        const path = queue.shift(); setup();
        const r = once({ ...opts, link: linkId || null }, path, key);
        if (!r.result.finished) throw Error('unfinished ' + key);
        r.picked.forEach(t => got.add(t)); n++;
        const depth = path.length;
        if (r.decisions.length > depth) { for (let k = 1; k < r.decisions[depth]; k++) queue.push([...path, k]); if (r.decisions.length > depth + 1) queue.push([...path, 0]); }
      }
    }
    const missing = [...want].filter(t => !got.has(t));
    if (missing.length) bad.push(`${key}: unreached ${missing.join(' | ')}`);
    return n;
  }
  function step() {
    const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
    const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
    const ov = [...document.querySelectorAll('.g-overlay:not(.out)')].pop(); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay'; } }
    const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  // The options the solstice offers in a state (played with the real scene player up to its big choice).
  function solstice(flags, ranks, more = {}) {
    at('12/21', 'late', { flags });
    Object.entries(ranks).forEach(([id, r]) => link(id, r, id === 'haechan' && more.hcRoute ? { route: more.hcRoute } : {}));
    const e = G.D.events.find(x => x.id === 'a5-solstice');
    let out = null; const pl = SC.play({ scene: e.scene, place: e.place, time: e.time, onDone: () => {} }), el = pl.el;
    for (let i = 0; i < 400 && !out; i++) { const bs = [...el.querySelectorAll('.gs-choices button')]; if (bs.length) out = bs.map(b => b.textContent); else el.click(); }
    pl.close(); el.remove(); document.documentElement.classList.remove('g-in-scene');
    return { opts: out || [], flags: copy(G.S.flags) };
  }
  // The options a story event's choice offers (the first choice list met), with flags set.
  function optionsOf(id, flags, md) {
    at(md || G.D.events.find(x => x.id === id).date, 'late', { flags });
    const e = G.D.events.find(x => x.id === id); let out = null;
    const pl = SC.play({ scene: noBattle(e.scene), place: e.place, time: e.time, onDone: () => {} }), el = pl.el;
    return { pl, el, next: () => { for (let i = 0; i < 600; i++) { const bs = [...el.querySelectorAll('.gs-choices button')]; if (bs.length) return bs.map(b => b.textContent); el.click(); } return null; },
      pick: n => el.querySelectorAll('.gs-choices button')[n].click(), done: () => { pl.close(); el.remove(); document.documentElement.classList.remove('g-in-scene'); } };
  }
  return { at, link, walk, once, paths, step, solstice, optionsOf, faces, assets, bad, base, copy, noBattle };
})();
"""

try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    size(1000, 486)
    p.goto('femc-game.html?debug=1')
    ok(not p.console(), 'the game loads with the Haechan batch and no browser errors')
    p.eval(HELPERS)

    # ── ranks ──
    rk = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.haechan,bad=[];const slotOf=r=>r.slot||l.storySlot;
      if(String(l.forced)!==[...Array(15)].map((_,i)=>i+1).join(','))bad.push('not all forced');
      l.ranks.forEach((r,i)=>{const sl=slotOf(r);
        HC.at(r.after,sl);HC.link('haechan',i);const due=G.dueEvent(sl);if(due?.link?.id!=='haechan')bad.push('rank '+(i+1)+' not due on '+r.after+' got '+(due?.kind));
        HC.at(G.mdOf(G.dayOf(r.after)-1),sl);HC.link('haechan',i);const pre=G.dueEvent(sl);if(pre?.link?.id==='haechan')bad.push('rank '+(i+1)+' due a day early');
        const other=sl==='late'?'evening':'late';HC.at(r.after,other);HC.link('haechan',i);if(G.dueEvent(other)?.link?.id==='haechan')bad.push('rank '+(i+1)+' in the wrong slot');});
      // Not before his arrival has played; not on a night a late story event took.
      let s=HC.at('11/5','late');s.events=s.events.filter(e=>e!=='a4-there-you-are');if(G.dueEvent('late')?.link?.id==='haechan')bad.push('before arrival');
      s=HC.at('12/7','late');HC.link('haechan',5);s.events.push('a5-footage');const taken=G.dueEvent('late');s.events=s.events.filter(e=>e!=='a5-footage');
      // a save behind the dates: one rank a night
      s=HC.at('12/10','late');HC.link('haechan',2);const catchUp=G.dueEvent('late')?.link?.id==='haechan'&&G.linkScene(l).r===2&&G.linkScene(l).kind==='rank';
      // before a date: a hangout, no rank-up; before rank 1: not around at all
      s=HC.at('11/8','evening');HC.link('haechan',1);const st=G.linkStatus(l,s.day,'evening');const sc=G.linkScene(l);const fin=G.finishLink(l,sc.kind,sc.r,3);const hang=st.ok&&sc.kind==='hangout'&&!fin.up&&G.progress('haechan').rank===1;
      s=HC.at('11/4','evening');const r0=G.linkStatus(l,s.day,'evening').ok;
      return {bad,taken:taken?.link?.id==='haechan',catchUp,hang,r0}})()""")
    ok(not rk['bad'], f"all fifteen ranks are due on their dates in their slots, never a day early or in the wrong slot, never before his arrival: {rk['bad']}")
    ok(not rk['taken'], 'a late story rank waits when a story event already took that night')
    ok(rk['catchUp'], 'a save behind the dates catches up: the next rank (not a skipped one) plays that night')
    ok(rk['hang'] and not rk['r0'], 'time with him before a date is a hangout (no rank-up); he is not around before rank 1 and his arrival')

    # Rank 1 through the real UI: 11/5 late, after the household introductions.
    p.eval(r"""(()=>{const G=FemcGame,s=HC.at('11/5','late');s.phone.lastInvite=9999;document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    shots('rank1-story')
    for _ in range(3000):
        if p.eval("FemcGame.S.day===FemcGame.dayOf('11/6')"):
            break
        p.eval('HC.step()')
    ui = p.eval("(()=>{const p=FemcGame.progress('haechan');return {rank:p.rank,met:FemcGame.S.met.includes('haechan'),day:FemcGame.mdOf(FemcGame.S.day),seen:p.seen,day1:p.rankDay[1]}})()")
    ok(ui['rank'] == 1 and ui['met'] and ui['day'] == '11/6' and ui['day1'] == p.eval("FemcGame.dayOf('11/5')"), f'rank 1 plays as story through the UI on 11/5 and she goes to bed: {ui}')

    # ── migration ──
    mig = p.eval(r"""(()=>{const G=FemcGame;const out={};
      const old=HC.at('12/2','early');HC.link('haechan',4,{seen:[0,1,2,3,4],ready:4,xp:5,hung:3,rankDay:{4:G.dayOf('11/25')}});const raw=HC.copy(old);
      const code=btoa(unescape(encodeURIComponent(JSON.stringify({state:raw}))));G.importCode(code);
      let p=G.progress('haechan');out.code={rank:p.rank,ready:'ready' in p,seen:p.seen.join(','),hung:p.hung,day:p.rankDay[5]===G.dayOf('12/2'),kept4:p.rankDay[4]===G.dayOf('11/25')};
      G.S.slot='late';G.S.day=G.dayOf('12/8');G.S.tartarus.bosses=G.D.cal.ops.map(o=>o.op);out.next=G.linkScene(G.LINKS.haechan).r;
      // A clean save (no half-full meter) is untouched; one with a meter in progress but no scene seen keeps its rank.
      HC.at('11/20','early');HC.link('haechan',3,{seen:[0,1,2],xp:4});G.saveSlot(3);const before=HC.copy(G.S.links.haechan);G.loadSlot(3);out.clean=JSON.stringify(G.S.links.haechan)===JSON.stringify(before);
      HC.at('11/20','early');HC.link('haechan',2,{seen:[0,1],ready:1,xp:2});const r2=HC.copy(G.S);G.importCode(btoa(unescape(encodeURIComponent(JSON.stringify({state:r2})))));p=G.progress('haechan');out.oddReady={rank:p.rank,ready:'ready' in p};
      // The autosave: write an old save to the key and read it back the way a page load does.
      HC.at('12/20','early');HC.link('haechan',7,{seen:[0,1,2,3,4,5,6,7],ready:7,xp:1});localStorage.setItem('kg-femc-revamp-slot2',JSON.stringify({state:HC.copy(G.S),at:Date.now()}));G.loadSlot(2);p=G.progress('haechan');out.slot={rank:p.rank,route:p.route||null};
      return out})()""")
    c = mig['code']
    ok(c['rank'] == 5 and not c['ready'] and c['seen'] == '0,1,2,3,4' and c['hung'] == 3 and c['day'] and c['kept4'], f'an old save with rank 5 seen but its meter short gets rank 5 (dated on load), keeps everything else: {c}')
    ok(mig['next'] == 5, 'after migration the next story rank is 6: the scene already seen never replays')
    ok(mig['clean'] and mig['oddReady']['rank'] == 2 and not mig['oddReady']['ready'], 'saves without a half-full rank keep their rank and progress')
    ok(mig['slot']['rank'] == 8, 'a save slot migrates the same way (rank 8 seen → rank 8)')

    # ── everything that reads his rank ──
    reads = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.haechan;const out={};
      let s=HC.at('12/18','late');HC.link('haechan',7,{route:'romance'});G.takeToasts();const sc=G.linkScene(l);const r=G.finishLink(l,sc.kind,sc.r,0);
      out.up=r.up&&G.progress('haechan').rank===8&&G.progress('haechan').rankDay[8]===s.day;out.perk=G.takeToasts().some(t=>t.kind==='perk')||!(window.FemcBuild?.perksAt('haechan',8)||[]).length;
      s=HC.at('12/24','evening');s.flags['route-R']=true;HC.link('haechan',8,{route:'romance'});out.xmas=G.christmasOptions().map(x=>x.id).includes('haechan');
      HC.link('haechan',8,{route:'friend'});out.xmasFriend=!G.christmasOptions().map(x=>x.id).includes('haechan');
      s=HC.at('12/1','evening');HC.link('haechan',4);out.bond=G.bond('haechan',2)===2;
      // The battle's bonds read the handoff's ranks.
      s.unlocked.tartarus=true;const h=G.makeHandoff('tartarus',{});out.handoff=JSON.stringify(h).includes('"haechan":4');G.S.handoff=null;G.S.handoffId=null;
      return out})()""")
    ok(reads['up'] and reads['perk'], 'a story rank-up still dates the rank and announces its perks')
    ok(reads['xmas'] and reads['xmasFriend'], 'Christmas Eve offers him at rank 8 on his romance route, not on his friend route')
    ok(reads['bond'] and reads['handoff'], 'bond points and the battle handoff still read his rank')

    # afterRank texts: every rank's text arrives after it; variants follow the heading, and replies match what was sent.
    ar = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.haechan,bad=[],vars=[];const ranks=Object.keys(l.afterRank||{});
      for(const n of ranks){const t=l.afterRank[n],id='ar-haechan-'+n,day=G.dayOf(l.ranks[n-1].after);
        for(const head of [{},{'hc-lean-S':true},{'route-H':true}]){const s=HC.at(G.mdOf(day),'early',{flags:head});HC.link('haechan',+n,{rankDay:{[n]:day}});
          s.phone.done=G.D.texts.texts.map(x=>x.id).concat((G.D.texts.ambient||[]).map(x=>x.id));s.phone.lastInvite=9999;
          let got=false;for(let k=0;k<5&&!got;k++){s.day=day+(t.delay??1)+k;for(const slot of G.slotsFor(G.dayInfo(s.day))){s.slot=slot;G.deliverTexts();if(s.phone.done.includes(id)){got=true;break;}}}
          if(!got){bad.push('never sent '+id);continue;}
          const sent=(s.phone.threads[t.thread||'haechan']||[]).filter(m=>m.from!=='solar').map(m=>m.t);const served=G.textById(id);
          if(served.msgs.map(m=>m.t).join('|')!==sent.slice(-served.msgs.length).join('|'))bad.push('reply variant mismatch '+id);
          if(t.variants)vars.push(n+':'+(s.phone.vars?.[id]||'base'));
          G.replyText(t.thread||'haechan',0);}}
      return {n:ranks.length,bad,vars}})()""")
    ok(not ar['bad'] and ar['n'] == 15, f"a text follows every one of his fifteen ranks, the sent variant matches its heading and its replies: {ar['bad'][:4]} ({ar['n']} ranks)")
    print('afterRank variants', ar['vars'])

    # ── routes ──
    hd = p.eval(r"""(()=>{const G=FemcGame,H=[];let s=HC.at('12/1','late');H.push(G.heading());s.flags['hc-lean-S']=true;H.push(G.heading());
      s.flags['home-H3']=true;s.flags['pull-no-there']=true;s.route.frags={R:5,S:4,H:6};H.push(G.heading());s.route.frags={R:7,S:4,H:6};H.push(G.heading());
      s.flags={'home-H3':true};s.route.frags={R:2,S:2,H:7};HC.link('haechan',8,{route:'friend'});H.push(G.heading());
      for(const f of ['route-R','route-S','route-H','route-stay','route-true']){s.flags={[f]:true};H.push(G.heading());}
      s.flags={'route-H':true};const b=G.branch({ifHeading:['H','stay'],then:[1],else:[2]});return {H,b}})()""")
    ok(hd['H'] == ['R', 'S', 'H', 'S', 'H', 'R', 'S', 'H', 'stay', 'true'], f"heading(): the lean, the secret road only with intent (and only while its memories lead), friendship as a turn-down, the locked route: {hd['H']}")
    ok(hd['b'] == [1], 'ifHeading branches on a list of headings')

    sol = p.eval(r"""(()=>{const out={};const R={'door-R6':true,'home-R3':true,'home-R6':true,'hc-lean-R':true},S={'door-S6':true,'home-S3':true,'home-S6':true,'hc-lean-S':true};
      const Hx={'door-H6':true,'home-H3':true,'home-H6':true,'xroad1-H':true,'pull-no-there':true,'pull-no-xroad3':true,'hc-lean-R':true};
      const has=(o,re)=>o.opts.some(t=>re.test(t));const star=/star pin/,bell=/bell rings/,jade=/jade ring rings/,stay=/staying/,hand=/her hand/;
      let o=HC.solstice(R,{haechan:7});out.R=has(o,bell)&&!has(o,star)&&has(o,stay);
      o=HC.solstice({...R,'hc-lean-R':false,'hc-lean-S':true},{haechan:7});out.Rlean=!has(o,bell);
      o=HC.solstice(R,{minji:7});out.Rminji=has(o,bell);
      o=HC.solstice(S,{haechan:7});out.S=has(o,jade)&&!has(o,star);o=HC.solstice(S,{yunjin:7});out.Syunjin=has(o,jade);
      o=HC.solstice({'door-H6':true,'home-H3':true,'home-H6':true},{jihoon:7});out.oldHoax=!has(o,star);
      o=HC.solstice(Hx,{jungwon:7,jihoon:7,haechan:7});out.H=has(o,star)&&has(o,bell)===false&&has(o,stay);
      const miss={};for(const k of ['door-H6','home-H6','xroad1-H','pull-no-xroad3']){const f={...Hx};delete f[k];miss[k]=!has(HC.solstice(f,{jungwon:7,jihoon:7}),star);}
      miss.oneLink=!has(HC.solstice(Hx,{jungwon:7}),star);
      out.friend=has(HC.solstice({...Hx,'pull-no-xroad3':false},{jungwon:7,cherry:7,haechan:8},{hcRoute:'friend'}),star);
      out.romance=!has(HC.solstice({...Hx,'pull-no-xroad3':false},{jungwon:7,cherry:7,haechan:8},{hcRoute:'romance'}),star);
      out.xroad2=has(HC.solstice({...Hx,'xroad1-H':false,'xroad2-H':true},{jihoon:7,cherry:7}),star);
      o=HC.solstice({...R,...S,'door-H6':true,'door-R9':true},{wren:9,akihiko:7,minji:7,yunjin:7,jihoon:7});out.T=has(o,hand);
      o=HC.solstice({},{});out.stayAlways=has(o,stay)&&!has(o,bell)&&!has(o,jade)&&!has(o,star);
      out.miss=miss;return out})()""")
    ok(sol['R'] and sol['Rminji'] and sol['S'] and sol['Syunjin'], 'Runners and strangers open on their natural requirements (Haechan or another anchor at 7)')
    ok(sol['Rlean'], 'Haechan anchors only the world he leans toward')
    ok(sol['stayAlways'] and sol['T'], 'Stay is always offered; the true ending opens on its own requirements')
    ok(sol['oldHoax'], "the old Hoax requirements alone no longer open the star")
    ok(sol['H'] and all(sol['miss'].values()), f"the secret road opens only with all of it: Hoax memories, the star followed, two Hoax links at 7, the pull turned down twice: {sol['miss']}")
    ok(sol['friend'] and sol['romance'] and sol['xroad2'], 'friendship with Haechan counts as a turn-down (romance does not); either star crossroad counts')

    hidden = p.eval(r"""(()=>{const out={};const cases=[['a4-there-you-are','pull-no-there',2],['a5-haechan-awakens','pull-no-awaken',0],['a5-crossroad-3','pull-no-xroad3',0]];
      for(const [id,flag,nth] of cases){const r={};for(const h3 of [false,true]){const t=HC.optionsOf(id,h3?{'home-H3':true}:{});let opts=t.next();for(let k=0;k<nth;k++){t.pick(0);opts=t.next();}
        r[h3]=opts.length;if(h3){t.pick(opts.length-1);for(let i=0;i<800&&!FemcGame.S.flags[flag];i++){const b=t.el.querySelector('.gs-choices button');if(b)b.click();else t.el.click();}r.flag=!!FemcGame.S.flags[flag];}t.done();}
        out[id]=r;}return out})()""")
    for k, v in hidden.items():
        ok(v['true'] == v['false'] + 1 and v['flag'], f'{k}: the hidden turn-down choice shows only after a Hoax door was gone toward, and sets its flag ({v})')

    # ── endings ──
    end = p.eval(r"""(()=>{const G=FemcGame,out={};
      const card=flags=>{HC.at(G.mdOf(G.END()),'late',{flags:{'year-goes-on':true,...flags}});return G.endingName()};
      out.names=[card({'route-H':true}),card({'route-R':true}),card({'route-S':true}),card({'route-stay':true}),card({'true-final':true}),card({'route-bad':true})];
      const txt=JSON.stringify(G.D.events.find(x=>x.id==='end-ending'));out.card=txt.includes('ENDING · the unfated life')&&!txt.includes('ENDING · the count');out.cg=txt.includes('ending-hoax-home');
      localStorage.setItem('kg-femc-revamp-clears',JSON.stringify([{run:'old',ending:'the count'}]));HC.at(G.mdOf(G.END()),'late',{flags:{'route-H':true,'year-goes-on':true}});G.S.runId='new';
      document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());return out})()""")
    ok(end['names'] == ['the unfated life', 'where it begins', 'low tide', 'here', 'I am thou', 'the last stop'], f"ending names: {end['names']}")
    ok(end['card'] and end['cg'], 'the Hoax ending closes on "the unfated life" and keeps its CG')
    p.eval(r"""(()=>{const G=FemcGame;HC.at(G.mdOf(G.END()),'late',{flags:{'route-H':true,'year-goes-on':true}});G.S.runId='hc-test';G.S.events.push('end-ending');G.S.lateNights={seen:[],lastDay:9999};document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    for _ in range(200):
        if p.eval("!!document.querySelector('.g-end')"):
            break
        p.eval("(()=>{const b=document.querySelector('[data-next]');if(b)b.click();else HC.step()})()")
    p.wait("!!document.querySelector('.g-end')")
    es = p.eval("document.querySelector('.g-end').textContent")
    shots('end-screen-hoax')
    ok('ENDING · the unfated life' in es and 'the count' not in es, 'the end screen names it, and an old clear is listed under its new name')
    p.eval("localStorage.removeItem('kg-femc-revamp-clears')")

    # ── scenes ──
    n_paths = 0
    for name, body in [('ranks', "l.ranks.forEach((r,i)=>{n+=HC.paths({scene:r.scene,place:r.place,time:r.time},'rank/'+(i+1),r.after,'haechan')});"), ('hangouts', "l.hangouts.forEach((h,i)=>{n+=HC.paths({scene:h,place:G.linkPlace(l)},'hangout/'+i,'12/1','haechan')});(l.afterMax||[]).forEach((e,i)=>{n+=HC.paths({scene:e.scene,place:e.place,time:e.time},'after/'+i,'1/25','haechan')});n+=HC.paths({scene:l.christmas.scene,place:l.christmas.place,time:l.christmas.time},'christmas','12/24','haechan');"), ('nights', "(l.lateNights||[]).forEach(e=>{n+=HC.paths({scene:[...(e.bg?[{bg:e.bg}]:[]),...e.scene],place:e.place,time:e.time},'night/'+e.id,e.after,'haechan')});"), ('holidays', "Object.entries(l.holidays||{}).forEach(([md,h])=>{n+=HC.paths({scene:[...(h.bg?[{bg:h.bg}]:[]),...h.scene],place:h.place,time:h.time},'holiday/'+md,md,'haechan')});"), ('routines', "G.D.dailyLife.filter(e=>e.id.startsWith('hc-day-')).forEach(e=>{n+=HC.paths({scene:[{bg:e.bg},...e.scene],place:e.place,time:e.time},'daily/'+e.id,e.after)});"), ('runins', "G.D.runIns.filter(e=>e.id.startsWith('ri-hc-')).forEach(e=>{n+=HC.paths({scene:e.scene,place:e.place||'Iwatodai Strip',time:e.time||'Evening'},'runin/'+e.id,e.after,'haechan')});"), ('events', "['a4-there-you-are','a5-haechan-awakens','a5-crossroad-3','a5-solstice','a6-unfated','a6-last-train','end-ending'].forEach(id=>{const e=G.D.events.find(x=>x.id===id);n+=HC.paths({scene:e.scene,place:e.place,time:e.time,event:true},'event/'+id,e.date)});")]:
        k = p.eval('(()=>{const G=FemcGame,l=G.LINKS.haechan;let n=0;' + body + 'return n})()', timeout=1800)
        print(name, k, 'paths', flush=True)
        n_paths += k
    bad = p.eval('HC.bad')
    ok(not bad, f'every Haechan scene and touched story event finishes on every heading and route, reaches every option, with real faces: {bad[:6]}')
    ok(n_paths > 1000, f'{n_paths} scene paths played')
    assets = p.eval("(async()=>{const urls=[...HC.faces,...HC.assets];const miss=(await Promise.all(urls.map(u=>fetch(u,{method:'HEAD'}).then(r=>r.ok?null:u).catch(()=>u)))).filter(Boolean);return {n:urls.length,miss}})()")
    ok(not assets['miss'], f"all {assets['n']} faces and backgrounds shown load: {assets['miss'][:4]}")

    counts = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.haechan;return {nights:(l.lateNights||[]).length,routines:G.D.dailyLife.filter(e=>e.id.startsWith('hc-day-')).length,
      runins:G.D.runIns.filter(e=>e.who==='haechan').length,afterRank:Object.keys(l.afterRank||{}).length,holidays:Object.keys(l.holidays||{}).length,
      ambient:(G.D.texts.ambient||[]).filter(t=>t.id.startsWith('am-hc-')||t.thread==='haechan').length,
      akihiko:{nights:(G.LINKS.akihiko.lateNights||[]).length,afterRank:Object.keys(G.LINKS.akihiko.afterRank||{}).length,holidays:Object.keys(G.LINKS.akihiko.holidays||{}).length,
        runins:G.D.runIns.filter(e=>e.who==='akihiko').length,routines:G.D.dailyLife.filter(e=>JSON.stringify(e.scene).includes('"s":"akihiko"')).length},
      hcRoutinesAll:G.D.dailyLife.filter(e=>JSON.stringify(e.scene).includes('"s":"haechan"')).length}})()""")
    print('counts', json.dumps(counts))
    ok(counts['nights'] >= 10 and counts['routines'] >= 14 and counts['afterRank'] == 15 and counts['holidays'] >= 4, f'his living-world content is in: {counts}')

    # ── capacity ──
    cap = p.eval(r"""(()=>{const G=FemcGame,s=HC.at('4/8','early');s.dailyLife={seen:[],lastDay:-99};const plays=[];
      for(let d=G.dayOf('4/8');d<=G.END();d++){s.day=d;const info=G.dayInfo(d);s.spent={};
        if(d>=G.dayOf('4/18'))s.flags['joined-junpei']=true; if(d>=G.dayOf('12/22'))s.flags['year-goes-on']=true;
        for(const slot of G.slotsFor(info)){s.slot=slot;
          const due=G.D.events.filter(e=>!e.unlock&&e.date===info.md&&({darkhour:'evening'}[e.slot]||e.slot||'evening')===slot&&!s.events.includes(e.id)&&(!e.flag||s.flags[e.flag]));
          if(due.length){due.forEach(e=>s.events.push(e.id));continue;}
          const r=G.dailyLife();if(r){G.finishDailyLife(r.id);plays.push(r.id);}}}
      const optional=G.D.events.filter(e=>e.unlock||(e.flag&&e.flag!=='year-goes-on')).map(e=>e.id);
      // Routines behind a link's rank or route (the rank-15 batch's buzz) need that link's progress; femc_rank15.py plays them.
      const missing=G.D.dailyLife.filter(e=>!plays.includes(e.id)&&!(e.events||[]).some(id=>optional.includes(id))&&!e.ranks&&!e.ranksBelow&&!e.route).map(e=>e.id);
      // Late nights: each one can be the night's scene on at least one night in its window, at the rank he has by then.
      const l=G.LINKS.haechan,all=(l.lateNights||[]).map(x=>x.id),never=[];
      for(const e of (l.lateNights||[])){let fits=false;
        for(let d=G.dayOf(e.after);d<=G.dayOf(e.until||G.mdOf(G.END()-1))&&!fits;d++){const w=G.dayInfo(d);if(e.when==='rain'&&w.weather!=='rain')continue;
          HC.at(G.mdOf(d),'late',{flags:d>G.dayOf('12/21')?{'year-goes-on':true}:{}});const r=l.ranks.filter(x=>G.dayOf(x.after)<=d).length;
          HC.link('haechan',r,e.route&&e.route!=='none'?{route:e.route}:{});if(e.when==='tartarus')G.S.tonight='battled';
          (e.events||[]).forEach(x=>{if(!G.S.events.includes(x))G.S.events.push(x)});G.S.lateNights={seen:all.filter(x=>x!==e.id),lastDay:-99};
          // The spice batch's gates (2026-10-24; femc_spice.py plays them): flags it needs, the world it's for, someone else's romance.
          [].concat(e.flag||[]).forEach(f=>{G.S.flags[f]=true});if(e.heading)G.S.flags['route-'+[].concat(e.heading)[0]]=true;if(e.taken)HC.link('akihiko',9,{route:'romance'});
          fits=G.lateNightDue()?.e.id===e.id;}
        if(!fits)never.push(e.id);}
      return {missing,hc:plays.filter(x=>x.startsWith('hc-day-')).length,never}})()""", timeout=600)
    ok(not cap['missing'], f"a simulated year still plays every routine (his {cap['hc']} included): {cap['missing']}")
    ok(not cap['never'], f"each of his late nights fits a night in its window: {cap['never']}")

    errors = p.console()
    ok(not errors, f'no browser errors: {errors[:3]}')
    print(json.dumps({'checks': len(checks), 'scenePaths': n_paths, 'assets': assets['n'], 'screenshots': str(OUT)}, indent=1))
    for c in checks:
        print(' ✓', c)
finally:
    p.close()
