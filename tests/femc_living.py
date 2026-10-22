"""The living world, part 1 (2026-10-21): everyday routines across the year, reactive and daytime texts, holiday invites,
late nights with the romances, Solar's birthday, the Yakushima trip and the build-up before each full moon.

  python3 tests/femc_living.py [--screenshots /absolute/dir]

year       routines over a simulated year (story events played on their dates): none repeats, every one plays except those
           behind an optional arrival, no gap longer than ten days, every slot kind used, more than 40 new ones.
scenes     every new scene (routines, story events, holidays, late nights, every trip scene and pick) played down every choice
           path, in an empty state and a full one (both sides of every branch): each finishes, every option is reached, every
           face shown is a real portrait expression, speakers without a portrait have a cast name, every background loads.
texts      each afterRank text arrives a day or so after its rank and drops when stale; replies give ♪; every ambient text
           arrives in its window, at most one a day; the night-before and birthday texts; a real reply in the phone.
holidays   the morning invitations (gated by rank, route, reversal), the picker in the real UI: accept (the scene plays, the
           slot is spent, the others get a no), decline (Go Out), an evening holiday, two people inviting on one day.
birthday   6/24 through the UI: the morning, the texts, the party (gifts in the bag and gear), the late scene.
yakushima  7/21 to 7/24 through the UI: every part of the day plan, the picks, the story's own scene in its slot, Aigis.
preboss    every operation's build-up plays on its day before the fight; one through the UI; the night-before texts.
nights     late nights gated by rank, route, the night (Tartarus or not), spacing and housing (only dorm residents get a
           dorm scene; guesthouse residents' are visits or calls); one through the UI into the next morning.
Screenshots at 1000x486, 375x812 and 1440x900. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-living-'))
OUT.mkdir(parents=True, exist_ok=True)
SIZES = [('laptop', 1000, 486), ('phone', 375, 812), ('desktop', 1440, 900)]
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what)


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})


def shot(name):
    # Toasts and text banners piled up by the engine-level checks above aren't part of the screen being shown.
    p.eval("FemcGame.takeToasts();document.querySelectorAll('.femc-dh,.g-toast,.g-banner').forEach(x=>x.remove());true")
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,350)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def until(cond, secs=120):
    """Drive the real UI one step at a time (timers get to run between steps) until cond holds."""
    import time
    t0 = time.time()
    while time.time() - t0 < secs:
        if p.eval(f'!!({cond})'):
            return True
        p.eval('LW.step()')
        time.sleep(0.03)
    raise TimeoutError(cond)


def shots(name):
    for tag, w, h in SIZES:
        size(w, h, tag == 'phone')
        shot(f'{name}-{tag}')
    size(1000, 486)


# Helpers in the page: a clean state for a date, a scene played down every choice path, a UI stepper.
HELPERS = r"""
window.LW = (() => {
  const G = FemcGame, SC = FemcScene, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', true);
  G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  const faces = new Set(), assets = new Set(), bad = [];
  const evDay = e => G.dayOf(e.date);
  // A clean save on md at slot; story events dated before it played (optional / unlock-gated ones too), plus the flags
  // those events set that the new content reads.
  function at(md, slot, extra = {}) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    const d = G.dayOf(md); G.S.day = d; G.S.slot = slot;
    G.S.events = G.D.events.filter(e => evDay(e) < d && (!e.flag || e.flag !== 'year-goes-on' || d > G.dayOf('12/21'))).map(e => e.id);
    const F = G.S.flags;
    if (d > G.dayOf('4/18')) F['joined-junpei'] = true;
    if (d > G.dayOf('12/21')) F['year-goes-on'] = true;
    [['9/12', 'arrived-hanni'], ['9/12', 'arrived-hyein'], ['9/19', 'arrived-jihoon'], ['9/26', 'arrived-minji'], ['10/10', 'arrived-yunjin'], ['10/14', 'arrived-jungwon'],
     ['10/24', 'arrived-jaehyun'], ['10/31', 'arrived-crew'], ['11/4', 'arrived-haechan'], ['11/7', 'arrived-sunoo'], ['11/13', 'arrived-cherry'], ['11/18', 'arrived-mark'],
     ['10/17', 'awake-jihoon'], ['10/31', 'awake-minji'], ['11/28', 'awake-jungwon'], ['12/5', 'awake-haechan']].forEach(([w, f]) => { if (d > G.dayOf(w)) F[f] = true; });
    // Story-forced links (Wren, Elizabeth) are kept out of the way: their ranks are the story's, not this test's.
    Object.values(G.LINKS).filter(l => l.forced).forEach(l => { G.S.links[l.id] = { rank: 10, xp: 0, seen: [], rankDay: {}, push: 0, reversed: false }; });
    Object.assign(G.S, copy(extra));
    G.S.flags = { ...F, ...(extra.flags || {}) };
    return G.S;
  }
  const link = (id, rank, more = {}) => { if (!G.S.met.includes(id)) G.S.met.push(id); G.S.links[id] = { rank, xp: 0, seen: [], rankDay: {}, hung: 0, push: 0, reversed: false, ...more }; };
  // Every line, option and nested branch of a scene.
  function walk(a, fn) { (a || []).forEach(l => { fn(l); walk(l.then, fn); walk(l.else, fn); (l.choose || l.route || []).forEach(o => { fn(o, true); walk(o.then, fn); }); }); }
  function staticCheck(scene, key) {
    walk(scene, (l, opt) => {
      if (opt) return;
      if (l.s && l.s !== 'solar') {
        const have = FEMC_PORTRAITS[l.s];
        if (have) { if (l.f && !have.includes(l.f)) bad.push(`${key}: ${l.s}/${l.f}`); }
        else if (G.name(l.s) === l.s[0].toUpperCase() + l.s.slice(1)) bad.push(`${key}: no cast name for ${l.s}`);
      }
      if (l.s === 'solar' && l.f && !(FEMC_PORTRAITS.solar || []).includes(l.f)) bad.push(`${key}: solar/${l.f}`);
    });
  }
  // One play of a scene down `path` (choice indices); returns the decisions seen and the option texts picked.
  function once(opts, path, key) {
    let result, c = 0; const decisions = [], picked = [];
    const pl = SC.play({ ...opts, onDone: r => { result = r; } }), el = pl.el;
    let steps = 0;
    while (!result) {
      if (++steps > 3000) throw Error('stuck ' + key);
      const bs = [...el.querySelectorAll('.gs-choices button:not(:disabled)')];
      if (bs.length) { const n = Math.min(path[c++] ?? 0, bs.length - 1); decisions.push(bs.length); picked.push(bs[n].querySelector('span').textContent); bs[n].click(); continue; }
      const img = el.querySelector('.gs-portrait'); if (img && !img.hidden && img.getAttribute('src')) faces.add(img.src);
      const bg = el.querySelector('.gs-bg')?.style.backgroundImage.match(/url\("?(.*?)"?\)/); if (bg) assets.add(bg[1]);
      el.click();
    }
    el.remove(); document.documentElement.classList.remove('g-in-scene');
    return { result, decisions, picked };
  }
  // Every path, in an empty state and a full one (everyone met at MAX on a romance route, every event, the flags read).
  function paths(opts, key, md, linkId) {
    staticCheck(opts.scene, key);
    const want = new Set(); walk(opts.scene, (o, opt) => { if (opt) want.add(G.sub(o.t)); });
    const flagsRead = {}; walk(opts.scene, l => [].concat(l.ifFlag || []).forEach(f => { flagsRead[f] = true; }));
    const states = [
      () => at(md, 'evening'),
      () => { at(md, 'evening', { flags: flagsRead }); G.S.events = G.D.events.map(e => e.id); Object.keys(G.LINKS).forEach(id => link(id, 10, { route: 'romance' })); }
    ];
    // Scenes that branch on where the story is heading (core.js heading(), { ifHeading }) play on every heading too.
    let heads = false; walk(opts.scene, l => { if (l.ifHeading) heads = true; });
    if (heads) [{ 'hc-lean-S': true }, { 'home-H3': true, 'pull-no-there': true }, { 'route-R': true }, { 'route-S': true }, { 'route-H': true }, { 'route-stay': true }, { 'route-true': true }]
      .forEach(h => states.push(() => { at(md, 'evening', { flags: h }); G.S.route.frags = { R: 3, S: 3, H: h['home-H3'] ? 6 : 3 }; }));
    const got = new Set(); let n = 0;
    for (const st of states) {
      const queue = [[]];
      while (queue.length) {
        const path = queue.shift(); st();
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
  // One step of the real UI: a choice, a card, an overlay's button, a pick, the next line.
  function step() {
    const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
    const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
    const ov = [...document.querySelectorAll('.g-overlay:not(.out)')].pop(); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay'; } }
    const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
    const pk = document.querySelector('#g-app [data-o]'); if (pk) { pk.click(); return 'pick'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  function until(cond, max = 4000) { for (let i = 0; i < max; i++) { if (cond()) return i; step(); } throw Error('UI never reached the condition'); }
  return { at, link, walk, once, paths, step, until, faces, assets, bad, base, copy };
})();
"""

try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    size(1000, 486)
    p.goto('femc-game.html?debug=1')
    ok(not p.console(), 'the game loads with the living world and no browser errors')
    p.eval(HELPERS)

    counts = p.eval("""(()=>{const G=FemcGame;const L=Object.values(G.LINKS);return {
      routines:G.D.dailyLife.length, events:G.D.events.filter(e=>e.id.startsWith('lw-')).length,
      afterRank:L.reduce((a,l)=>a+Object.keys(l.afterRank||{}).length,0), ambient:(G.D.texts.ambient||[]).length,
      holidays:L.reduce((a,l)=>a+Object.keys(l.holidays||{}).length,0), nights:L.reduce((a,l)=>a+(l.lateNights||[]).length,0),
      tripParts:Object.values(G.D.trip.yakushima.days).reduce((a,d)=>a+Object.keys(d).length,0)}})()""")
    ok(counts['routines'] - 18 >= 40, f"{counts['routines'] - 18} new routines (40+)")
    print(json.dumps(counts))

    # ── year: routines across a simulated year ──
    year = p.eval(r"""(()=>{const G=FemcGame,s=LW.at('4/8','early');const plays=[];
      for(let d=G.dayOf('4/8');d<=G.END();d++){s.day=d;const info=G.dayInfo(d);s.spent={};
        if(d>=G.dayOf('4/18'))s.flags['joined-junpei']=true; if(d>=G.dayOf('12/22'))s.flags['year-goes-on']=true;
        for(const slot of G.slotsFor(info)){s.slot=slot;
          const due=G.D.events.filter(e=>!e.unlock&&e.date===info.md&&({darkhour:'evening'}[e.slot]||e.slot||'evening')===slot&&!s.events.includes(e.id)&&(!e.flag||s.flags[e.flag]));
          if(due.length){due.forEach(e=>s.events.push(e.id));continue;}
          const r=G.dailyLife();if(r){G.finishDailyLife(r.id);plays.push([info.md,slot,r.id,d,info.type]);}}}
      const ids=plays.map(x=>x[2]),optional=G.D.events.filter(e=>e.unlock||(e.flag&&e.flag!=='year-goes-on')).map(e=>e.id);
      const missing=G.D.dailyLife.filter(e=>!ids.includes(e.id)&&!(e.events||[]).some(id=>optional.includes(id))).map(e=>e.id);
      let gap=0,where='';for(let i=1;i<plays.length;i++){const g=plays[i][3]-plays[i-1][3];if(g>gap){gap=g;where=plays[i-1][0]+'→'+plays[i][0];}}
      return {n:plays.length,unique:new Set(ids).size,missing,gap,where,trip:plays.filter(x=>x[4]==='trip').length,slots:[...new Set(plays.map(x=>x[1]))].sort(),first:plays[0][0],last:plays.at(-1)[0],
        months:[...new Set(plays.map(x=>x[0].split('/')[0]))].length}})()""")
    ok(year['n'] == year['unique'], f"no routine repeats in a simulated year ({year['n']} played)")
    ok(not year['missing'], f"every routine plays in a year except ones behind an optional arrival: {year['missing']}")
    ok(year['gap'] <= 10, f"no stretch longer than ten days without one ({year['gap']} days, {year['where']})")
    ok(year['trip'] == 0, 'no routine on the Yakushima trip')
    ok(set(year['slots']) >= {'early', 'morning', 'lunch', 'afternoon', 'after', 'evening', 'late'}, f"routines in every kind of slot: {year['slots']}")
    ok(year['months'] == 12, f"routines in every month from April to March ({year['months']})")
    print('year', json.dumps(year))

    # ── scenes: every new scene down every path ──
    n_paths = p.eval(r"""(()=>{const G=FemcGame;let n=0;
      G.D.dailyLife.slice(18).forEach(e=>{n+=LW.paths({scene:[{bg:e.bg},...e.scene],place:e.place,time:e.time,label:'Everyday life'},'daily/'+e.id,e.after)});
      G.D.events.filter(e=>e.id.startsWith('lw-')).forEach(e=>{n+=LW.paths({scene:[...(e.bg?[{bg:e.bg}]:[]),...e.scene],place:e.place,time:e.time,event:true},'event/'+e.id,e.date)});
      Object.values(G.LINKS).forEach(l=>{Object.entries(l.holidays||{}).forEach(([md,h])=>{n+=LW.paths({scene:[...(h.bg?[{bg:h.bg}]:[]),...h.scene],place:h.place,time:h.time},'holiday/'+l.id+'/'+md,md,l.id)});
        (l.lateNights||[]).forEach(e=>{n+=LW.paths({scene:[...(e.bg?[{bg:e.bg}]:[]),...e.scene],place:e.place,time:e.time},'night/'+e.id,e.after,l.id)})});
      Object.entries(G.D.trip.yakushima.days).forEach(([md,day])=>Object.entries(day).forEach(([slot,e])=>{
        if(e.options)e.options.forEach(o=>{n+=LW.paths({scene:o.scene,place:o.place,time:o.time},'trip/'+md+'/'+slot+'/'+o.id,md,o.who)});
        else n+=LW.paths({scene:e.scene,place:e.place,time:e.time},'trip/'+md+'/'+slot,md)}));
      return n})()""", timeout=600)
    bad = p.eval('LW.bad')
    ok(not bad, f'every new scene finishes, reaches every option, with real faces and cast names: {bad[:6]}')
    ok(n_paths > 400, f'{n_paths} scene paths played')
    assets = p.eval("(async()=>{const urls=[...LW.faces,...LW.assets];const miss=(await Promise.all(urls.map(u=>fetch(u,{method:'HEAD'}).then(r=>r.ok?null:u).catch(()=>u)))).filter(Boolean);return {n:urls.length,miss}})()")
    ok(not assets['miss'], f"all {assets['n']} faces and backgrounds shown in the new scenes load: {assets['miss'][:4]}")

    # ── texts ──
    ar = p.eval(r"""(()=>{const G=FemcGame;let sent=0,dropped=0,notes=0;const bad=[];
      Object.values(G.LINKS).forEach(l=>Object.entries(l.afterRank||{}).forEach(([n,t])=>{
        const id='ar-'+l.id+'-'+n,day=G.dayOf(l.ranks[n-1]?.after||'4/20')+1,s=LW.at(G.mdOf(day),'early');LW.link(l.id,+n,{rankDay:{[n]:day}});
        s.phone.done=G.D.texts.texts.map(x=>x.id).concat((G.D.texts.ambient||[]).map(x=>x.id));
        s.phone.lastInvite=9999;G.deliverTexts(); if(s.phone.done.includes(id))bad.push('too early '+id);
        let got=false;for(let k=0;k<4&&!got;k++){s.day=day+(t.delay??1)+k;for(const slot of G.slotsFor(G.dayInfo(s.day))){s.slot=slot;G.deliverTexts();if(s.phone.done.includes(id)){got=true;break;}}}
        if(!got){bad.push('never sent '+id);return;} sent++;
        if(s.phone.pending[t.thread||l.id]!==id)bad.push('no reply waiting '+id);
        const before=G.progress(l.id).xp;G.replyText(t.thread||l.id,0);if(G.progress(l.id).xp<=before)bad.push('no notes '+id);else notes++;
        const s2=LW.at(G.mdOf(day),'early');LW.link(l.id,+n,{rankDay:{[n]:day}});s2.day=day+(t.delay??1)+5;s2.slot='evening';s2.phone.lastInvite=9999;s2.phone.done=G.D.texts.texts.map(x=>x.id).concat((G.D.texts.ambient||[]).map(x=>x.id));G.deliverTexts();
        if(!s2.phone.done.includes(id)||(s2.phone.threads[l.id]||[]).length)bad.push('stale one not dropped '+id);else dropped++;
      }));return {sent,dropped,notes,bad}})()""")
    ok(not ar['bad'], f"every afterRank text arrives after its rank (not before), waits for a reply that gives ♪, and drops when stale: {ar['bad'][:4]}")
    ok(ar['sent'] >= 45, f"{ar['sent']} reactive texts across the links")
    amb = p.eval(r"""(()=>{const G=FemcGame;const bad=[];let n=0;
      for(const t of G.D.texts.ambient){const s=LW.at(t.to,'early');s.phone.done=G.D.texts.texts.map(x=>x.id).concat(G.D.texts.ambient.filter(x=>x!==t).map(x=>x.id));(t.events||[]).forEach(e=>{if(!s.events.includes(e))s.events.push(e)});Object.entries(t.route||{}).forEach(([id,r])=>LW.link(id,10,{route:r}));if(t.rank&&typeof t.rank==='object')Object.entries(t.rank).forEach(([id,r])=>{if(!t.route?.[id])LW.link(id,r)});
        let got=false;for(let d=G.dayOf(t.to)-1;d<=G.dayOf(t.to)&&!got;d++){s.day=d;s.phone.ambientDay=-1;for(const slot of G.slotsFor(G.dayInfo(d))){s.slot=slot;G.deliverTexts();if(s.phone.done.includes(t.id)&&(s.phone.threads[t.thread]||[]).length){got=true;break;}}}
        if(got)n++;else bad.push(t.id);}
      // At most one a day: a day with several open windows.
      const s=LW.at('11/20','early');s.phone.done=G.D.texts.texts.map(x=>x.id);let today=0;
      for(const slot of G.slotsFor(G.dayInfo(s.day))){s.slot=slot;const b=s.phone.done.length;G.deliverTexts();today+=G.D.texts.ambient.filter(t=>s.phone.done.slice(b).includes(t.id)&&(s.phone.threads[t.thread]||[]).length).length;}
      const win=G.D.texts.ambient.every(t=>G.dayOf(t.from)<=G.dayOf(t.to));
      return {n,bad,today,win}})()""")
    ok(not amb['bad'], f"every ambient text arrives inside its window: {amb['bad']}")
    ok(amb['today'] <= 1 and amb['win'], 'ambient texts: one a day at most, every window well-formed')
    dated = p.eval(r"""(()=>{const G=FemcGame;const ids=['t-0508-akihiko','t-0607-yukari','t-0624-sees','t-0624-mitsuru','t-0706-junpei','t-0805-fuuka','t-0904-akihiko','t-1003-ken','t-1102-sisters','t-1201-jungwon','t-0129-sees'];const bad=[];
      for(const id of ids){const t=G.D.texts.texts.find(x=>x.id===id);const s=LW.at(t.date,t.slot);s.phone.done=G.D.texts.texts.filter(x=>x.id!==id).map(x=>x.id);G.deliverTexts();if(!s.phone.done.includes(id))bad.push(id);}
      return bad})()""")
    ok(not dated, f'the night-before and birthday texts arrive on their dates: {dated}')
    # A real reply through the phone.
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('11/8','evening');LW.link('jungwon',4,{rankDay:{4:G.dayOf('11/7')}});s.phone.done=G.D.texts.texts.map(x=>x.id).concat(G.D.texts.ambient.map(x=>x.id));s.phone.lastInvite=9999;s.dailyLife.lastDay=s.day;G.deliverTexts();
      document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run();FemcGameUI.openPhone()})()""")
    p.wait("!!document.querySelector('.g-phone-ov .g-ph-row[data-th=jungwon]')")
    p.eval("document.querySelector('.g-phone-ov .g-ph-row[data-th=jungwon]').click()")
    p.wait("!!document.querySelector('.g-phone-ov .g-ph-reply button')")
    shots('phone-reactive-text')
    p.eval("document.querySelector('.g-phone-ov .g-ph-reply button').click()")
    p.wait("!FemcGame.S.phone.pending.jungwon && FemcGame.S.phone.threads.jungwon.some(m=>m.from==='solar')")
    ok(True, 'a reactive text answered in the real phone')
    p.eval("document.querySelector('.g-phone-ov [data-close]')?.click()")

    # ── holidays ──
    hol = p.eval(r"""(()=>{const G=FemcGame;const out={};
      let s=LW.at('11/23','early');LW.link('haechan',2);LW.link('yunjin',4);G.deliverTexts();out.two=s.holiday&&s.holiday.links.slice().sort().join(',');
      out.texted=['haechan','yunjin'].every(id=>(s.phone.threads[id]||[]).some(m=>m.holiday==='11/23'));
      s=LW.at('11/23','early');LW.link('haechan',1);G.deliverTexts();out.lowRank=!s.holiday;
      s=LW.at('11/23','early');LW.link('haechan',3,{reversed:true});G.deliverTexts();out.reversed=!s.holiday;
      s=LW.at('1/1','early');LW.link('akihiko',7,{route:'friend'});G.deliverTexts();out.anyRoute=!!s.holiday;
      s=LW.at('11/24','early');LW.link('haechan',5);G.deliverTexts();out.notHoliday=!s.holiday;
      out.everyLink=Object.values(G.LINKS).every(l=>Object.entries(l.holidays||{}).every(([md,h])=>{const s=LW.at(md,'early');LW.link(l.id,Math.max(h.rank??1,1),{route:h.route||'romance'});(h.events||[]).forEach(e=>{if(!s.events.includes(e))s.events.push(e)});G.deliverTexts();return s.holiday&&s.holiday.links.includes(l.id)}));
      return out})()""")
    ok(hol['two'] == 'haechan,yunjin' and hol['texted'], 'two friends text holiday invitations the same morning (11/23)')
    ok(hol['lowRank'] and hol['reversed'] and hol['notHoliday'], 'no invitation below its rank, from a reversed link, or on an ordinary day')
    ok(hol['anyRoute'], "a holiday without a route rule invites on either route (Akihiko's New Year)")
    ok(hol['everyLink'], 'every holiday in the data sends its invitation when its conditions hold')
    # Accept through the UI.
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('11/23','early');LW.link('haechan',2);LW.link('yunjin',4);G.deliverTexts();s.slot='after';
      document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());window.__xp=G.progress('haechan').xp;FemcGameUI.run()})()""")
    p.wait("document.querySelectorAll('.g-holiday [data-h]').length===3")
    shots('holiday-picker')
    p.eval("document.querySelector('.g-holiday [data-h=haechan]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("!document.querySelector('.gs:not(.out)')")
    acc = p.eval(r"""(()=>{const G=FemcGame,s=G.S;return {pick:s.holidays['11/23'],spent:s.spent[s.day+'-after'],slot:s.slot,xp:G.progress('haechan').xp>window.__xp,
      yunjinNo:(s.phone.threads.yunjin||[]).slice(-1)[0]?.t===G.LINKS.yunjin.holidays['11/23'].no,again:!G.holidayDue('after')}})()""")
    ok(acc['pick'] == 'haechan' and acc['spent'] == 'holiday:haechan' and acc['slot'] == 'evening', 'accepting plays the holiday scene, spends the day, moves on to the evening')
    ok(acc['xp'] and acc['yunjinNo'] and acc['again'], 'the day with them fills their meter; the other inviter gets a kind no; the picker never comes back')
    # Decline through the UI.
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('5/4','early');LW.link('yukari',1);G.deliverTexts();s.slot='after';document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    p.wait("!!document.querySelector('.g-holiday [data-h=none]')")
    p.eval("document.querySelector('.g-holiday [data-h=none]').click()")
    p.wait("!!document.querySelector('.g-px')")
    dec = p.eval("({pick:FemcGame.S.holidays['5/4'],no:(FemcGame.S.phone.threads.yukari||[]).slice(-1)[0]?.t===FemcGame.LINKS.yukari.holidays['5/4'].no,free:!FemcGame.S.spent[FemcGame.S.day+'-after']})")
    ok(dec['pick'] == 'none' and dec['no'] and dec['free'], 'declining sends a kind no and opens Go Out with the day still free')
    # An evening holiday: the summer festival.
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('8/16','early');LW.link('akihiko',4);LW.link('ken',1);G.deliverTexts();s.slot='after';document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());window.__eve=!G.holidayDue('after')&&!!G.holidayDue('evening');s.slot='evening';FemcGameUI.run()})()""")
    p.wait("document.querySelectorAll('.g-holiday [data-h]').length===3")
    p.eval("document.querySelector('.g-holiday [data-h=akihiko]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    shots('holiday-festival-scene')
    until("!document.querySelector('.gs:not(.out)')")
    eve = p.eval("({eve:window.__eve,pick:FemcGame.S.holidays['8/16'],slot:FemcGame.S.slot})")
    ok(eve['eve'] and eve['pick'] == 'akihiko' and eve['slot'] in ('late', 'early'), 'an evening holiday (the summer festival) waits for the evening, then plays and spends it')

    # ── birthday ──
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('6/24','early');LW.link('akihiko',4);LW.link('shinjiro',3);LW.link('kiriko',1);LW.link('mercy',1);
      s.phone.done=G.D.texts.texts.filter(t=>!t.id.startsWith('t-0624')).map(t=>t.id).concat(G.D.texts.ambient.map(t=>t.id));window.__bag={med:s.inventory.medicine||0};
      document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    until("FemcGame.S.events.includes('lw-birthday-morning')&&FemcGame.S.slot!=='early'")
    p.eval("(()=>{const G=FemcGame,s=G.S;for(const slot of ['lunch','afternoon']){s.slot=slot;G.deliverTexts();}s.slot='evening';document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("/gifts|presents/i.test(document.querySelector('.gs:not(.out) .gs-text')?.textContent||'')||FemcGame.S.events.includes('lw-birthday')")
    shots('birthday-party')
    until("FemcGame.S.day===FemcGame.dayOf('6/25')")
    bd = p.eval(r"""(()=>{const s=FemcGame.S;return {ev:['lw-birthday-morning','lw-birthday','lw-birthday-late'].every(e=>s.events.includes(e)),gear:['guard_ring','lucky_charm'].every(g=>s.gear.includes(g)),
      med:(s.inventory.medicine||0)>=window.__bag.med+3,bead:(s.inventory.revival_bead||0)>=1,texts:['t-0624-sees','t-0624-mitsuru'].every(t=>s.phone.done.includes(t)),flag:!!s.flags['birthday-party']}})()""")
    ok(bd['ev'], 'the birthday plays through the UI: the morning, the surprise party, the late scene')
    ok(bd['gear'] and bd['med'] and bd['bead'], "the presents land: Mitsuru's ring and Yukari's charm in her gear, Junpei's kit and Mercy's bead in the bag")
    ok(bd['texts'] and bd['flag'], "the birthday's texts arrive that day; the party leaves its flag")

    # ── yakushima ──
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('7/21','early');LW.link('akihiko',5);LW.link('yukari',5);LW.link('junpei',5);LW.link('mitsuru',5);LW.link('fuuka',3);
      s.phone.done=G.D.texts.texts.map(t=>t.id).concat(G.D.texts.ambient.map(t=>t.id));document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());window.__trip=[];
      const was=FemcGame.tripPlan;FemcGameUI.run()})()""")
    until("!!document.querySelector('.g-trip [data-o]')")
    shots('yakushima-pick')
    until("FemcGame.S.day===FemcGame.dayOf('7/24')")
    yk = p.eval(r"""(()=>{const s=FemcGame.S;return {done:Object.keys(s.trip.done).sort(),aigis:s.joined.includes('aigis'),ev:s.events.includes('a3-yakushima'),slots:FemcGame.slotsFor(FemcGame.dayInfo(FemcGame.dayOf('7/22')))}})()""")
    want = sorted(['7/21-early', '7/21-after', '7/21-evening', '7/21-late', '7/22-early', '7/22-after', '7/22-evening', '7/23-early', '7/23-after', '7/23-evening'])
    ok(yk['done'] == want, f"every part of the Yakushima plan plays through the UI: {yk['done']}")
    ok(yk['ev'] and yk['aigis'], "the story's own night (Aigis) plays in its slot and she joins")
    ok(yk['slots'] == ['early', 'after', 'evening', 'late'], 'trip days have a day and an evening now')
    tripb = p.eval(r"""(()=>{const G=FemcGame,s=LW.at('7/21','after');LW.link('akihiko',5);G.finishTrip('7/21-early',true);const plan=G.tripPlan();const before=G.progress('akihiko').xp;
      G.finishTrip(plan.key,'akihiko','akihiko',3);const bonded=G.progress('akihiko').xp>before&&G.S.trip.done['7/21-after']==='akihiko'&&!G.tripPlan();const s2=LW.at('7/23','after');const opts=G.tripPlan().options.map(o=>o.id);s2.events=s2.events.filter(e=>e!=='a3-yakushima');const without=G.tripPlan().options.map(o=>o.id);
      return {bond:bonded,aigis:opts.includes('ferry-aigis')&&!without.includes('ferry-aigis')}})()""")
    ok(tripb['bond'] and tripb['aigis'], "a trip pick's ♪ go to the person picked; Aigis is a ferry pick only once she's been found")

    # ── preboss ──
    pre = p.eval(r"""(()=>{const G=FemcGame;const bad=[];const ops=[...new Set(G.D.cal.ops.map(o=>o.date))];const order=G.SLOT_ORDER;
      const evs=G.D.events.filter(e=>e.id.startsWith('lw-pre-'));
      for(const md of ops.filter(m=>!['4/9'].includes(m))){const e=evs.find(x=>x.date===md);if(!e){bad.push('none on '+md);continue;}
        const fight=G.D.events.find(x=>x.date===md&&G.hasBattle(x.scene));if(!fight){bad.push('no fight '+md);continue;}
        if(order.indexOf(e.slot)>=order.indexOf(fight.slot||'evening'))bad.push('after the fight '+md);
        const s=LW.at(md,e.slot);const due=G.dueEvent();if(due?.ev?.id!==e.id)bad.push('not due '+e.id+' got '+(due?.ev?.id||due?.kind));}
      return {n:evs.length,bad}})()""")
    ok(not pre['bad'] and pre['n'] == 9, f"every full-moon operation after the first has its build-up, due that day before the fight: {pre['bad']}")
    p.eval(r"""(()=>{const s=LW.at('5/9','lunch');document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    shots('preboss-scene')
    until("FemcGame.S.slot==='afternoon'")
    ok(p.eval("FemcGame.S.events.includes('lw-pre-priestess') && FemcGame.S.spent[FemcGame.S.day+'-lunch']==='ev:lw-pre-priestess'"), "5/9's build-up plays through the UI at lunch and the day goes on to the fight's evening")

    # ── nights ──
    nights = p.eval(r"""(()=>{const G=FemcGame,LOD=window.FEMC_GAME_LODGING;const bad=[];const dorm=new Set([...LOD.dorm,...LOD.sees]);
      Object.values(G.LINKS).forEach(l=>(l.lateNights||[]).forEach(e=>{
        if(!['dorm','visit','call'].includes(e.kind))bad.push('kind '+e.id);
        if(e.kind==='dorm'&&!dorm.has(l.id))bad.push('dorm scene for a non-resident '+e.id);
        if(LOD.guesthouse.includes(l.id)&&e.kind==='dorm')bad.push('guesthouse resident with a dorm night '+e.id);
        if(e.kind==='call'&&!/Solar's Room/.test(e.place))bad.push('call not in her room '+e.id);
        if(e.kind==='visit'&&/Laundry|Kitchen|Hallway|Solar's Room|Rooftop|Stairs/.test(e.place))bad.push('visit inside the dorm '+e.id);}));
      const out={bad};
      let s=LW.at('11/10','late');LW.link('akihiko',9,{route:'romance'});out.romance=G.lateNightDue()?.e.id;
      s=LW.at('11/10','late');LW.link('akihiko',9,{route:'friend'});out.friend=G.lateNightDue()?.e.id;
      s=LW.at('11/10','late');LW.link('akihiko',2);out.low=G.lateNightDue();
      s=LW.at('11/10','late');LW.link('akihiko',9,{route:'romance',reversed:true});out.rev=G.lateNightDue();
      s=LW.at('6/10','late');LW.link('akihiko',3);out.quiet=G.lateNightDue();s.tonight='battled';out.tower=G.lateNightDue()?.e.id;
      s=LW.at('11/10','late');LW.link('akihiko',9,{route:'romance'});G.finishLateNight('aki-ln-landing');s.day+=1;out.spaced=G.lateNightDue();s.day+=2;s.lateNights.seen=[];out.after3=!!G.lateNightDue();
      s=LW.at('12/2','late');LW.link('akihiko',9,{route:'romance'});out.fullMoon=G.lateNightDue();
      s=LW.at('12/12','late');LW.link('jungwon',8,{route:'romance'});s.lateNights.seen=['jw-ln-call','jw-ln-halfway'];out.jw=G.lateNightDue()?.e;s.lateNights.seen=['jw-ln-call','jw-ln-halfway'];LW.link('jungwon',8,{route:'friend'});out.jwFriend=G.lateNightDue();
      s=LW.at('11/25','late');LW.link('jihoon',8,{route:'romance'});LW.link('jungwon',6);const seen=new Set();for(let k=0;k<6;k++){s.lateNights={seen:[],lastDay:-99};s.day=G.dayOf('11/25')+k;const x=G.lateNightDue();if(x)seen.add(x.link.id);}out.rotate=[...seen].sort().join(',');
      return out})()""")
    ok(not nights['bad'], f"housing holds: only dorm residents get dorm nights; the guesthouse's are visits that end or calls: {nights['bad']}")
    ok(nights['romance'] == 'aki-ln-landing' and nights['friend'] == 'aki-ln-friend', "Akihiko's nights follow his route (romance or friendship)")
    ok(not nights['low'] and not nights['rev'] and not nights['fullMoon'], 'no late night below its rank, from a reversed link, or on a full moon')
    ok(not nights['quiet'] and nights['tower'] == 'aki-ln-ice', 'a Tartarus-night scene plays only after a night in the tower')
    ok(not nights['spaced'] and nights['after3'], 'late nights are spaced at least three nights apart')
    ok(nights['jw'] and nights['jw']['kind'] == 'visit' and nights['jw']['route'] == 'romance' and not nights['jwFriend'], "Jungwon's romance night (a visit that ends at the gate) is for his romance route only")
    ok(nights['rotate'] == 'jihoon,jungwon', 'late nights rotate between people')
    p.eval(r"""(()=>{const G=FemcGame,s=LW.at('11/10','late');LW.link('akihiko',9,{route:'romance'});s.dailyLife.lastDay=s.day;document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.run()})()""")
    p.wait("!!document.querySelector('.gs[aria-label*=\"Late night\"]:not(.out)')")
    shots('late-night-akihiko')
    until("FemcGame.S.day===FemcGame.dayOf('11/11')")
    ok(p.eval("FemcGame.S.lateNights.seen.includes('aki-ln-landing') && FemcGame.S.slot==='early'"), 'a late night plays through the UI instead of the bedtime line, then she sleeps')

    # ── saves ──
    sv = p.eval(r"""(()=>{const G=FemcGame,s=LW.at('11/23','early');s.holidays={'5/4':'yukari'};s.lateNights={seen:['aki-ln-ice'],lastDay:5};s.trip={done:{'7/21-early':true}};G.saveSlot(2);
      s.holidays={};s.lateNights={seen:[],lastDay:-99};s.trip={done:{}};G.loadSlot(2);const a=G.S.holidays['5/4']==='yukari'&&G.S.lateNights.seen[0]==='aki-ln-ice'&&G.S.trip.done['7/21-early'];
      const old=JSON.parse(JSON.stringify(G.S));delete old.holidays;delete old.holiday;delete old.lateNights;delete old.trip;const code=btoa(unescape(encodeURIComponent(JSON.stringify({state:old}))));G.importCode(code);
      return a&&!!G.S.lateNights&&Array.isArray(G.S.lateNights.seen)&&!!G.S.trip.done&&typeof G.S.holidays==='object'})()""")
    ok(sv, 'the new save fields persist in slots and default safely on older saves')

    errors = p.console()
    ok(not errors, f'no browser errors: {errors[:3]}')
    print(json.dumps({'checks': len(checks), 'counts': counts, 'scenePaths': n_paths, 'assets': assets['n'], 'screenshots': str(OUT)}, indent=1))
    for c in checks:
        print(' ✓', c)
finally:
    p.close()
