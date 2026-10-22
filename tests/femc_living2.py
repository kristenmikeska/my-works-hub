"""The living world, part 2 (2026-10-21): job shifts that don't repeat and three more jobs, running into people while out or
working, the four clubs (Rio's tennis club on her romance route too), the Persona cast belonging to this world, Kuromi's
deeper link, My Melody's hidden link, and variants for often-seen narration.

  python3 tests/femc_living2.py [--screenshots /absolute/dir]

jobs       every job worked once a week through a simulated year from the day it opens: no full shift repeats, no quiet
           shift repeats its month and moment, each job's story beats all play once and in order; worked every day it can
           be, every full shift is reachable. Every job shift choice gives a real stat and no notes.
newjobs    the three new jobs through the real UI: hire, the shift preview, the shift scene, the pay and the stats.
runins     every run-in: due in its window with its person met and its gates held, never before, never after, never
           without the person, the flags or the story; spacing; one through the real UI (on the end of an activity), its
           { later } text arriving later.
clubs      joining each club through the real UI on a club day (the join scene, the stats), the next practice a different
           scene, a simulated year of practices (no repeats, every beat), Rio's romance-route beats only on that route,
           Practice Swing.
persona    Ann, Kasumi, Haru, Kuromi and My Melody are 'persona' links: no closes, nobody leaves at MAX, no goodbye text, no
           delayed texts (their reactive texts come the next day), their holiday invites, no visitor framing left in
           their files.
kuromi     Kuromi's ten ranks, hangouts, MAX scenes and holiday, every path, at their dates; her rank 7 gift.
melody     My Melody hidden until found: off every list; the quiet option on a Wednesday evening from 7/15 (not other days),
           found through the real UI, then her link on Wednesday evenings; rank 1 through the UI; skipped, she never appears.
scenes     every new scene (job packs, clubs, run-ins, holidays, the Persona cast's links, Kuromi, My Melody) down every
           choice path, empty and full state: each finishes, every option is reached, every face is a real expression,
           every speaker has a name, every background loads.
variants   often-seen lines walk their pools without repeating.
Screenshots at 1000x486, 375x812 and 1440x900. Isolated browser profile and server; never the player's saves."""
import base64, json, pathlib, sys, tempfile, time
from femc_browser import Page

OUT = pathlib.Path(sys.argv[sys.argv.index('--screenshots') + 1]) if '--screenshots' in sys.argv else pathlib.Path(tempfile.mkdtemp(prefix='femc-living2-'))
OUT.mkdir(parents=True, exist_ok=True)
SIZES = [('laptop', 1000, 486), ('phone', 375, 812), ('desktop', 1440, 900)]
checks = []


def ok(cond, what):
    assert cond, what
    checks.append(what if isinstance(what, str) else str(what)[:160])


p = Page()


def size(w, h, mobile=False):
    p.ws.call('Emulation.setDeviceMetricsOverride', {'width': w, 'height': h, 'deviceScaleFactor': 1, 'mobile': mobile})


def shot(name):
    p.eval("FemcGame.takeToasts();document.querySelectorAll('.femc-dh,.g-toast,.g-banner').forEach(x=>x.remove());true")
    p.eval('document.fonts.ready.then(()=>new Promise(r=>setTimeout(r,350)))')
    (OUT / f'{name}.png').write_bytes(base64.b64decode(p.ws.call('Page.captureScreenshot', {'format': 'png'})['data']))


def shots(name):
    for tag, w, h in SIZES:
        size(w, h, tag == 'phone')
        shot(f'{name}-{tag}')
    size(1000, 486)


def until(cond, secs=120):
    t0 = time.time()
    while time.time() - t0 < secs:
        if p.eval(f'!!({cond})'):
            return True
        p.eval('LW.step()')
        time.sleep(0.03)
    raise TimeoutError(cond)


def fresh_ui(js):
    """Set a state with js (LW helpers), clear the screen and run the real game loop (or open the screen js names last:
    a js ending in FemcGameUI.goOut(...) opens Go Out there instead of running the loop)."""
    if 'FemcGameUI.goOut(' in js:
        head, call = js.rsplit('FemcGameUI.goOut(', 1)
        p.eval("(()=>{" + head + ";document.querySelectorAll('.gs,.g-overlay,.gs-rank').forEach(x=>x.remove());document.documentElement.classList.remove('g-in-scene');FemcGameUI.run();document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut(" + call + "})()")
        return
    p.eval("(()=>{" + js + ";document.querySelectorAll('.gs,.g-overlay,.gs-rank').forEach(x=>x.remove());document.documentElement.classList.remove('g-in-scene');FemcGameUI.run()})()")


HELPERS = r"""
window.LW = (() => {
  const G = FemcGame, SC = FemcScene, copy = x => JSON.parse(JSON.stringify(x));
  G.setSetting('text', 'instant'); G.setSetting('music', 0); G.setSetting('sfx', false); G.setSetting('auto', 'off'); G.setSetting('dateCard', true);
  G.newGame(); const base = copy(G.S); base.phase = 'play'; base.started = true; base.flags = { armband: true };
  const faces = new Set(), assets = new Set(), bad = [];
  const evDay = e => G.dayOf(e.date);
  const ARRIVE = [['9/12', 'arrived-hanni', ['hanni', 'hyein']], ['9/19', 'arrived-jihoon', ['jihoon']], ['9/26', 'arrived-minji', ['minji']], ['10/10', 'arrived-yunjin', ['yunjin']],
    ['10/14', 'arrived-jungwon', ['jungwon']], ['10/24', 'arrived-jaehyun', ['jaehyun']], ['10/31', 'arrived-crew', ['junkyu']], ['11/4', 'arrived-haechan', ['haechan']],
    ['11/7', 'arrived-sunoo', ['sunoo']], ['11/13', 'arrived-cherry', ['cherry']], ['11/18', 'arrived-mark', ['mark']]];
  const JOIN = [['4/18', 'junpei'], ['5/11', 'akihiko'], ['6/12', 'mitsuru'], ['6/15', 'fuuka'], ['7/25', 'aigis'], ['8/7', 'ken'], ['8/7', 'koromaru'], ['8/7', 'shinjiro']];
  // Story flags and joins a date implies (the story's own dates).
  function storyFlags(F, d) {
    if (d > G.dayOf('4/18')) F['joined-junpei'] = true;
    if (d > G.dayOf('12/21')) F['year-goes-on'] = true;
    JOIN.forEach(([w, id]) => { if (d > G.dayOf(w)) F['joined-' + id] = true; });
    ARRIVE.forEach(([w, f]) => { if (d > G.dayOf(w)) F[f] = true; });
    [['10/17', 'awake-jihoon'], ['10/31', 'awake-minji'], ['11/28', 'awake-jungwon'], ['12/5', 'awake-haechan']].forEach(([w, f]) => { if (d > G.dayOf(w)) F[f] = true; });
  }
  function at(md, slot, extra = {}) {
    Object.keys(G.S).forEach(k => delete G.S[k]); Object.assign(G.S, copy(base));
    const d = G.dayOf(md); G.S.day = d; G.S.slot = slot;
    G.S.events = G.D.events.filter(e => evDay(e) < d && (!e.flag || e.flag !== 'year-goes-on' || d > G.dayOf('12/21'))).map(e => e.id);
    const F = G.S.flags; storyFlags(F, d);
    Object.values(G.LINKS).filter(l => l.forced).forEach(l => { G.S.links[l.id] = { rank: 10, xp: 0, seen: [], rankDay: {}, push: 0, reversed: false }; });
    Object.assign(G.S, copy(extra));
    G.S.flags = { ...F, ...(extra.flags || {}) };
    return G.S;
  }
  // Everyone Solar could have met by day d (a link's start, a searcher's arrival), met.
  function meetBy(d) {
    const S = G.S;
    Object.values(G.LINKS).forEach(l => {
      if (l.status === 'stub' || l.secret || l.storyOnly) return;
      const arr = ARRIVE.find(a => a[2].includes(l.id));
      const from = arr ? G.dayOf(arr[0]) + 1 : G.dayOf(l.starts || '4/8');
      if (d >= from && !S.met.includes(l.id)) S.met.push(l.id);
    });
    storyFlags(S.flags, d);
  }
  const link = (id, rank, more = {}) => { if (!G.S.met.includes(id)) G.S.met.push(id); G.S.links[id] = { rank, xp: 0, seen: [], rankDay: {}, hung: 0, push: 0, reversed: false, ...more }; };
  function walk(a, fn) { (a || []).forEach(l => { fn(l); walk(l.then, fn); walk(l.else, fn); (l.choose || l.route || []).forEach(o => { fn(o, true); walk(o.then, fn); }); }); }
  function staticCheck(scene, key) {
    walk(scene, (l, opt) => {
      if (opt) return;
      if (l.s && l.s !== 'solar') {
        const have = FEMC_PORTRAITS[l.s];
        if (have) { if (l.f && !have.includes(l.f) && !have.includes(l.f.replace(/-\d+$/, ''))) bad.push(`${key}: ${l.s}/${l.f}`); }
        else if (!G.castHas(l.s)) bad.push(`${key}: no cast name for ${l.s}`);
      }
      if (l.s === 'solar' && l.f && !(FEMC_PORTRAITS.solar || []).includes(l.f)) bad.push(`${key}: solar/${l.f}`);
    });
  }
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
  function paths(opts, key, md, linkId) {
    staticCheck(opts.scene, key);
    const want = new Set(); walk(opts.scene, (o, opt) => { if (opt) want.add(G.sub(o.t)); });
    const flagsRead = {}; walk(opts.scene, l => [].concat(l.ifFlag || []).forEach(f => { flagsRead[f] = true; }));
    const states = [
      () => at(md, 'evening'),
      () => { at(md, 'evening', { flags: flagsRead }); G.S.events = G.D.events.map(e => e.id); Object.keys(G.LINKS).forEach(id => link(id, 10, { route: 'romance' })); G.S.stats = { knowledge: 999, courage: 999, proficiency: 999, charm: 999, kindness: 999 }; }
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
  function step() {
    const c = document.querySelector('.gs:not(.out) .gs-choices button:not(:disabled)'); if (c) { c.click(); return 'choice'; }
    const o = document.querySelector('.gs-title, .gs-summon.ready, .g-card, .g-actcard, .g-datecard'); if (o) { o.click(); return 'card'; }
    const ov = [...document.querySelectorAll('.g-overlay:not(.out)')].pop(); if (ov) { const b = ov.querySelector('[data-close], .g-btn.pink, button'); if (b) { b.click(); return 'overlay'; } }
    const g = document.querySelector('.gs:not(.out)'); if (g) { g.click(); return 'scene'; }
    const n = document.querySelector('#g-app [data-next]:not(:disabled)'); if (n) { n.click(); return 'next'; }
    return 'idle';
  }
  // A scene run in the real player to its end (choices: first option).
  function playOut() { for (let i = 0; i < 4000; i++) { if (!document.querySelector('.gs:not(.out)')) return i; step(); } throw Error('scene never ended'); }
  return { at, meetBy, link, walk, once, paths, step, playOut, faces, assets, bad, base, copy, storyFlags };
})();
"""

BANNED = ['another world', 'Mary Land', 'Not delivered', 'not delivered', 'fell through', 'my world', 'this world isn', 'go home through', 'doors open']

try:
    p.ws.call('Emulation.setEmulatedMedia', {'features': [{'name': 'prefers-reduced-motion', 'value': 'reduce'}]})
    size(1000, 486)
    p.goto('femc-game.html?debug=1')
    ok(not p.console(), 'the game loads with the living world, part 2 and no browser errors')
    p.eval(HELPERS)

    counts = p.eval(r"""(()=>{const G=FemcGame,P=G.packs();const jobs={};G.D.jobs.forEach(j=>{const k=P[j.id]||{};jobs[j.id]={shifts:(k.shifts||[]).length,beats:(k.beats||[]).length,quiet:(k.quiet||[]).length,openers:Object.keys(k.openers||{}).length}});
      const clubs={};(G.D.places.clubs||[]).forEach(c=>{const k=P[c.id]||{};clubs[c.id]={join:!!k.join,shifts:(k.shifts||[]).length,beats:(k.beats||[]).length,quiet:(k.quiet||[]).length}});
      return {jobs,clubs,runIns:G.D.runIns.length,variants:Object.keys(G.D.variants).length}})()""")
    print(json.dumps(counts))
    ok(len(counts['jobs']) == 10, f"ten jobs: {list(counts['jobs'])}")
    ok(all(v['shifts'] >= 10 and v['beats'] >= 3 and v['quiet'] >= 10 and v['openers'] == 10 for v in counts['jobs'].values()), f"every job has 10+ full shifts, an arc, quiet moments and an opener a month: {counts['jobs']}")
    ok(sum(v['shifts'] for v in counts['jobs'].values()) - 21 >= 90, 'at least 90 new full shift scenes')
    ok(len(counts['clubs']) == 4 and all(v['join'] and v['shifts'] >= 8 and v['beats'] >= 3 for v in counts['clubs'].values()), f"four clubs with a join scene, sessions and an arc: {counts['clubs']}")
    ok(counts['runIns'] >= 40, f"{counts['runIns']} run-ins")

    # ── jobs: once a week through a year, then every possible day ──
    jy = p.eval(r"""(()=>{const G=FemcGame,out={},bad=[];
      for(const every of [false,true]){
        for(const j of G.D.jobs){
          const s=LW.at('4/8','early');s.stats={knowledge:999,courage:999,proficiency:999,charm:999,kindness:999};s.route.frags={R:9,S:9,H:9};G.hire(j);
          const start=Math.max(G.dayOf('4/8'),j.unlock?.after?G.dayOf(j.unlock.after):0);let lastWeek=-1;const log=[];
          for(let d=start;d<=G.END();d++){s.day=d;s.spent={};s.condition='good';LW.meetBy(d);const info=G.dayInfo(d);if(info.type==='trip')continue;
            s.slot=j.slot;if(!G.jobOk(j).ok)continue;const wk=Math.floor((d+1)/7);if(!every&&wk===lastWeek)continue;lastWeek=wk;
            const pk=G.shiftScene(j);log.push([pk.kind,pk.kind==='quiet'?pk.key:pk.id,d]);(pk.scene||[]).forEach(l=>{if(l.flag)G.effect({flag:l.flag})});G.finishShift(j,pk);G.takeToasts();}
          const P=G.packs()[j.id],full=log.filter(x=>x[0]==='shift').map(x=>x[1]),quiet=log.filter(x=>x[0]==='quiet').map(x=>x[1]),beats=log.filter(x=>x[0]==='beat').map(x=>x[1]);
          const key=j.id+(every?'*':'');
          out[key]={n:log.length,full:full.length,quiet:quiet.length,beats:beats.length};
          if(!every){
            if(new Set(full).size!==full.length)bad.push(key+': a full shift repeated');
            if(new Set(quiet).size!==quiet.length)bad.push(key+': a quiet shift repeated its month and moment');
            if(new Set(beats).size!==beats.length)bad.push(key+': a beat played twice');
            P.beats.forEach(b=>{if(b.prev&&beats.includes(b.id)&&beats.indexOf(b.prev)>beats.indexOf(b.id))bad.push(key+': '+b.id+' before '+b.prev)});
            const missingBeats=P.beats.filter(b=>!beats.includes(b.id)).map(b=>b.id);if(missingBeats.length)bad.push(key+': beats never played '+missingBeats.join(','));
            for(let i=1;i<log.length;i++)if(log[i][1]===log[i-1][1])bad.push(key+': same shift twice in a row');
          } else {
            const never=P.shifts.filter(x=>!full.includes(x.id)).map(x=>x.id);if(never.length)bad.push(key+': full shifts never reachable '+never.join(','));
          }
        }
      }
      // Every option in every job and club pack: a real stat (if any) and never notes.
      const S5=['knowledge','courage','proficiency','charm','kindness'];
      Object.entries(G.packs()).forEach(([id,P])=>{[...P.shifts,...P.beats,...P.quiet,...(P.join?[{id:id+'-join',scene:P.join}]:[])].forEach(x=>LW.walk(x.scene,(o,opt)=>{if(!opt)return;if(o.notes)bad.push(id+'/'+x.id+': notes on a shift option');Object.keys(o.stat||{}).forEach(k=>{if(!S5.includes(k))bad.push(id+'/'+x.id+': stat '+k)});}));});
      return {out,bad}})()""", timeout=600)
    print('jobs', json.dumps(jy['out']))
    ok(not jy['bad'], f"a year of weekly shifts at every job: no full or quiet shift repeats, every beat once and in order; every full shift reachable; shift options give real stats, no notes: {jy['bad'][:6]}")
    ok(all(v['n'] >= 10 for k, v in jy['out'].items() if not k.endswith('*')), 'every job gets ten or more weekly shifts in the year')

    # ── newjobs: the three new jobs through the real UI ──
    for jid, md, area, slot in [('chagall', '5/12', 'mall', 'after'), ('hagakure', '5/13', 'strip', 'evening'), ('amulets', '5/16', 'shrine', 'after')]:
        fresh_ui(f"const s=LW.at('{md}','{slot}');s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;window.__y=s.yen;window.__st={{...s.stats}};s.spent={{}};FemcGameUI.goOut('{slot}','{area}')")
        p.wait(f"!!document.querySelector('[data-job={jid}]')")
        if jid == 'chagall':
            shots('job-chagall-card')
        p.eval(f"document.querySelector('[data-job={jid}]').click()")
        p.wait("!!document.querySelector('.g-overlay:not(.out) [data-y]')")
        p.eval("document.querySelector('.g-overlay:not(.out) [data-y]').click()")
        p.wait(f"FemcGame.jobState('{jid}').hired && !!document.querySelector('[data-job={jid}]')")
        p.eval(f"document.querySelector('[data-job={jid}]').click()")
        p.wait("!!document.querySelector('.g-activity-preview:not(.out) [data-confirm]')")
        p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click()")
        p.wait("!!document.querySelector('.gs:not(.out)')")
        if jid == 'hagakure':
            until("!!document.querySelector('.gs:not(.out) .gs-portrait:not([hidden]), .gs:not(.out) .gs-name')", 30)
            shots('job-hagakure-shift')
        until("!document.querySelector('.gs:not(.out)')")
        r = p.eval(f"(()=>{{const G=FemcGame,j=G.D.jobs.find(x=>x.id==='{jid}');const st=G.jobState('{jid}');return {{shifts:st.shifts,yen:G.S.yen-window.__y,pay:j.pay,gain:Object.keys(j.stats).every(k=>G.S.stats[k]>window.__st[k]),seen:st.seen.length+st.beats.length}}}})()")
        ok(r['shifts'] == 1 and r['yen'] >= r['pay'] and r['gain'] and r['seen'] == 1, f'{jid}: hired, a real shift scene, paid and its stats raised ({r})')

    # ── runins ──
    ri = p.eval(r"""(()=>{const G=FemcGame,bad=[];let due=0;const all=G.D.runIns;
      const whereOf=e=>{const w=e.where||{};if((w.acts||[]).length){const a=G.actById(w.acts[0]);return {act:w.acts[0],area:a?.area,slot:e.slot||a?.slots?.[0]}}
        if((w.jobs||[]).length){const j=G.D.jobs.find(x=>x.id===w.jobs[0]);return {job:j.id,area:j.area,slot:j.slot}}
        if((w.clubs||[]).length)return {club:w.clubs[0],area:'gekkoukan',slot:'after'};return {area:(w.areas||[])[0],slot:e.slot||'after'}};
      const firstDay=e=>{let d=Math.max(G.dayOf(e.after||'4/8'),G.dayOf('4/8'));const end=e.until?G.dayOf(e.until):d+45;for(;d<=end;d++){const i=G.dayInfo(d);if((!e.days||e.days.includes(i.dow))&&(!e.months||e.months.includes(i.date.getMonth()+1)))return d}return -1};
      const setup=(e,d,o={})=>{const s=LW.at(G.mdOf(d),'after');s.events=G.D.events.map(x=>x.id).filter(id=>(e.events||[]).includes(id)||G.dayOf(G.D.events.find(x=>x.id===id).date)<d);
        (e.flags||[]).forEach(f=>{s.flags[f]=true});[...(e.met||[e.who])].forEach(id=>{if(id&&!o.unmet)LW.link(id,Math.max(1,...Object.entries(e.ranks||{}).filter(([k])=>k===id).map(([,r])=>r)),{route:(e.route||{})[id]||null})});
        Object.entries(e.ranks||{}).forEach(([id,r])=>{if(!o.unmet||id!==e.who)LW.link(id,r,{route:(e.route||{})[id]||null})});Object.entries(e.route||{}).forEach(([id,r])=>{if(G.S.links[id])G.S.links[id].route=r});
        s.runIns.seen=all.filter(x=>x!==e).map(x=>x.id);(e.noFlags||[]).forEach(f=>{delete s.flags[f]});
        const info=G.dayInfo(d);if(e.weather&&!e.weather.includes(info.weather))s.__skipWeather=true;return s};
      for(const e of all){
        const d=firstDay(e);if(d<0){bad.push(e.id+': no day in its window');continue}
        const w=whereOf(e);if(!w.area&&!w.act&&!w.job&&!w.club){bad.push(e.id+': nowhere');continue}
        let s=setup(e,d);if(s.__skipWeather)continue;
        if(G.runInDue(w,true)?.id!==e.id){bad.push(e.id+': not due in its window at '+G.mdOf(d)+' '+JSON.stringify(w));continue}due++;
        if(e.after&&G.dayOf(e.after)>G.dayOf('4/8')){s=setup(e,G.dayOf(e.after)-1);if(G.runInDue(w,true)?.id===e.id)bad.push(e.id+': due before its window')}
        s=setup(e,(e.until?G.dayOf(e.until):G.dayOf(e.after||'4/8')+45)+1);if(G.runInDue(w,true)?.id===e.id)bad.push(e.id+': due after its window');
        if(e.who&&!(e.met&&!e.met.length)){s=setup(e,d,{unmet:true});s.met=s.met.filter(x=>x!==e.who);if(G.runInDue(w,true)?.id===e.id)bad.push(e.id+': due without meeting '+e.who)}
        if((e.flags||[]).length){s=setup(e,d);delete s.flags[e.flags[0]];if(G.runInDue(w,true)?.id===e.id)bad.push(e.id+': due without the flag '+e.flags[0])}
        if((e.events||[]).length){s=setup(e,d);s.events=s.events.filter(x=>x!==e.events[0]);if(G.runInDue(w,true)?.id===e.id)bad.push(e.id+': due before its story event')}
        if(e.route){s=setup(e,d);Object.keys(e.route).forEach(id=>{G.S.links[id].route='friend'});if(G.runInDue(w,true)?.id===e.id)bad.push(e.id+': due off its route')}
        const wrong={act:'__none__',area:'__none__',job:'__none__',club:'__none__',slot:w.slot};s=setup(e,d);if(G.runInDue(wrong,true))bad.push(e.id+': due somewhere else');
      }
      // Searchers never at school; Shinjiro never after 10/3; each run-in's person exists.
      const SEARCH=['hanni','hyein','jihoon','minji','yunjin','jungwon','jaehyun','junkyu','haechan','sunoo','cherry','mark'];
      all.forEach(e=>{const w=e.where||{};if(SEARCH.includes(e.who)&&((w.areas||[]).includes('gekkoukan')||(w.clubs||[]).length||(w.acts||[]).some(a=>G.actById(a)?.area==='gekkoukan')))bad.push(e.id+': a searcher at school');
        if(e.who==='shinjiro'&&(!e.until||G.dayOf(e.until)>G.dayOf('10/3')))bad.push(e.id+': Shinjiro after 10/3');
        if(!G.LINKS[e.who])bad.push(e.id+': who?')});
      // Spacing: none the day after one, unless forced.
      const s=LW.at('6/20','after');LW.meetBy(G.dayOf('6/20'));s.runIns.lastDay=s.day-1;const sp=G.runInDue({area:'mall',slot:'after'});
      const groups={};all.forEach(e=>{const g=['akihiko','yukari','junpei','mitsuru','fuuka','aigis','ken','koromaru','shinjiro'].includes(e.who)?'sees':SEARCH.includes(e.who)?'searchers':G.LINKS[e.who]?.kind==='persona'||G.LINKS[e.who]?.kind==='native'?'persona':'visitors';groups[g]=(groups[g]||0)+1});
      return {bad,due,spacing:!sp,groups,places:[...new Set(all.flatMap(e=>[...(e.where.acts||[]),...(e.where.jobs||[]),...(e.where.clubs||[]),...(e.where.areas||[])]))].length}})()""", timeout=300)
    print('runins', json.dumps({k: v for k, v in ri.items() if k != 'bad'}))
    ok(not ri['bad'], f"every run-in is due in its window and never before, after, without its person, its flag, its story event or its route, or somewhere else: {ri['bad'][:6]}")
    ok(ri['spacing'], 'run-ins are spaced (none the day after one)')
    ok(all(ri['groups'].get(g, 0) >= 6 for g in ['sees', 'searchers', 'persona', 'visitors']) and ri['places'] >= 20, f"run-ins across S.E.E.S., the Persona cast, visitors and searchers, in {ri['places']} places: {ri['groups']}")
    # One through the real UI, on the end of an activity, with a { later } text if any run-in has one.
    later = p.eval("(FemcGame.D.runIns.find(e=>JSON.stringify(e.scene).includes('\"later\"')&&(e.where.acts||[]).length&&!e.weather&&!e.days&&!(e.events||[]).length)||{}).id||null")
    pick_id = later or p.eval("FemcGame.D.runIns.find(e=>(e.where.acts||[]).length&&!e.weather&&!e.days&&!(e.events||[]).length).id")
    p.eval(r"""(()=>{const G=FemcGame,e=G.D.runIns.find(x=>x.id==='%s');const act=G.actById(e.where.acts[0]);const slot=e.slot||act.slots[0];
      let d=Math.max(G.dayOf(e.after||'4/8'),G.dayOf('4/8'));for(;;d++){const i=G.dayInfo(d);if(G.areaById(act.area)?.schoolOnly&&i.type!=='school')continue;if(act.days&&!act.days.includes(i.dow))continue;if(e.months&&!e.months.includes(i.date.getMonth()+1))continue;break}
      const until=e.until?G.dayOf(e.until):G.dayOf(e.after||'4/8')+45;
      const s=LW.at(G.mdOf(Math.max(d,until-2)),slot);LW.meetBy(s.day);(e.flags||[]).forEach(f=>{s.flags[f]=true});(e.met||[e.who]).forEach(id=>LW.link(id,Math.max(1,(e.ranks||{})[id]||1),{route:(e.route||{})[id]||null}));
      s.runIns.seen=G.D.runIns.filter(x=>x!==e).map(x=>x.id);s.dailyLife.lastDay=s.day;s.yen=99999;s.stats={knowledge:999,courage:999,proficiency:999,charm:999,kindness:999};window.__ri={id:e.id,act:act.id,area:act.area,slot};
      document.querySelectorAll('.gs,.g-overlay').forEach(x=>x.remove());FemcGameUI.goOut(slot,act.area)})()""" % pick_id)
    info = p.eval('window.__ri')
    p.wait(f"!!document.querySelector('[data-act={info['act']}]')")
    p.eval(f"document.querySelector('[data-act={info['act']}]').click()")
    p.wait("!!document.querySelector('.g-activity-preview:not(.out) [data-confirm]')")
    p.eval("document.querySelector('.g-activity-preview:not(.out) [data-confirm]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until(f"document.querySelector('.gs:not(.out) .gs-portrait:not([hidden])')&&/{p.eval('FemcGame.D.runIns.find(e=>e.id===window.__ri.id).who')}/.test(document.querySelector('.gs:not(.out) .gs-portrait').src)", 60)
    shots('runin-after-activity')
    until("!document.querySelector('.gs:not(.out)')")
    ok(p.eval(f"FemcGame.S.runIns.seen.includes('{pick_id}') && FemcGame.S.runIns.lastDay===FemcGame.S.day"), f'a run-in ({pick_id}) plays on the end of a real activity and is recorded')
    if later:
        lt = p.eval(r"""(()=>{const G=FemcGame,s=G.S;const q=s.runIns.later.slice();if(!q.length)return {queued:false};const t=q[0];s.day=t.d;for(const slot of G.slotsFor(G.dayInfo(t.d))){s.slot=slot;G.deliverTexts();}return {queued:true,got:(s.phone.threads[t.thread]||[]).some(m=>m.t===t.msgs[0].t),left:s.runIns.later.length}})()""")
        ok(lt['queued'] and lt['got'] and lt['left'] == 0, f'its follow-up text arrives later, in its thread ({lt})')

    # ── clubs ──
    for cid, md in [('club-tennis', '5/11'), ('club-library', '5/12'), ('club-band', '5/15'), ('club-gaming', '5/13')]:
        fresh_ui(f"const s=LW.at('{md}','after');s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;LW.link('rio',2);window.__st={{...s.stats}};FemcGameUI.goOut('after','gekkoukan')")
        p.wait(f"!!document.querySelector('[data-act={cid}]')")
        if cid == 'club-tennis':
            shots('club-card')
        p.eval(f"document.querySelector('[data-act={cid}]').click()")
        p.wait("!!document.querySelector('.g-club-preview:not(.out) [data-confirm]:not(:disabled)')")
        if cid == 'club-tennis':
            shots('club-join')
        p.eval("document.querySelector('.g-club-preview:not(.out) [data-confirm]').click()")
        p.wait("!!document.querySelector('.gs:not(.out)')")
        if cid == 'club-band':
            until("!!document.querySelector('.gs:not(.out) .gs-name')", 30)
            shots('club-band-join')
        until("!document.querySelector('.gs:not(.out)')")
        r = p.eval(f"""(()=>{{const G=FemcGame,c=G.clubById('{cid}'),st=G.clubState('{cid}');const gained=Object.keys(c.stats).every(k=>G.S.stats[k]>window.__st[k]);
          const next=G.clubScene(c);return {{joined:st.joined,sessions:st.sessions,gained,spent:G.S.spent[G.S.day+'-after']||G.S.spent[(G.S.day)+'-after'],nextKind:next.kind,nextId:next.id}}}})()""")
        ok(r['joined'] and r['sessions'] == 1 and r['gained'] and r['nextKind'] != 'join', f'{cid}: joined through the real UI, the join scene played as the first practice, its stats raised, the next practice is a new scene ({r})')
    cy = p.eval(r"""(()=>{const G=FemcGame,bad=[],out={};
      for(const c of G.D.places.clubs){for(const romance of [false,true]){
        const s=LW.at('4/13','after');s.stats={knowledge:999,courage:999,proficiency:999,charm:999,kindness:999};const log=[];
        for(let d=G.dayOf('4/13');d<=G.END();d++){s.day=d;s.spent={};LW.meetBy(d);const info=G.dayInfo(d);
          // Rio and Saori's ranks grow through the year; Rio's route is set at rank 9.
          const r=Math.min(10,Math.floor((d-G.dayOf('4/21'))/24)+1);if(r>0){LW.link('rio',r,{route:r>=9?(romance?'romance':'friend'):null});LW.link('saori',r)}
          // Twice a week at most (a realistic club life next to links and jobs).
          s.slot='after';if(!G.activityOk({...c,area:'gekkoukan'},'after').ok)continue;const wk=Math.floor((d+1)/7);if((s.__wk||{})[wk]>=2)continue;(s.__wk||={})[wk]=((s.__wk||{})[wk]||0)+1;
          const pk=G.clubScene(c);log.push([pk.kind,pk.kind==='quiet'?pk.key:pk.id]);(pk.scene||[]).forEach(l=>{if(l.flag)G.effect({flag:l.flag})});G.finishClub(c,pk);G.takeToasts();}
        const P=G.packs()[c.id],full=log.filter(x=>x[0]==='shift').map(x=>x[1]),quiet=log.filter(x=>x[0]==='quiet').map(x=>x[1]).filter(k=>!/:again$/.test(k)),beats=log.filter(x=>x[0]==='beat').map(x=>x[1]);
        const key=c.id+(romance?'+romance':'');out[key]={n:log.length,full:full.length,quiet:quiet.length,beats};
        if(new Set(full).size!==full.length)bad.push(key+': a session repeated');if(new Set(quiet).size!==quiet.length)bad.push(key+': a quiet session repeated');
        const routeBeats=P.beats.filter(b=>b.route&&b.route.rio==='romance').map(b=>b.id);
        if(romance&&routeBeats.some(b=>!beats.includes(b)))bad.push(key+': a romance-route beat never played');
        if(!romance&&routeBeats.some(b=>beats.includes(b)))bad.push(key+': a romance-route beat played off the route');
        const plain=P.beats.filter(b=>!b.route).map(b=>b.id).filter(b=>!beats.includes(b));if(plain.length)bad.push(key+': beats never played '+plain.join(','));
        const never=P.shifts.filter(x=>!x.route&&!full.includes(x.id)&&!(x.weather)).map(x=>x.id);if(never.length&&!romance)bad.push(key+': sessions never reached in a year of practice '+never.join(','));
        if(c.id!=='club-tennis')break;}}
      // Practice Swing: tennis +1 Courage +1 Proficiency once Rio is rank 2.
      const c=G.clubById('club-tennis');let s=LW.at('5/11','after');const plain=G.clubStats(c);LW.link('rio',2);const swing=G.clubStats(c);
      return {bad,out,plain,swing,routeBeats:G.packs()['club-tennis'].beats.filter(b=>b.route).length}})()""", timeout=300)
    print('clubs', json.dumps(cy['out']))
    ok(not cy['bad'], f"a year of practice at every club: no session repeats, every beat plays; Rio's romance-route beats only on her romance route: {cy['bad'][:6]}")
    ok(cy['routeBeats'] >= 3, f"tennis has {cy['routeBeats']} romance-route beats")
    ok(cy['swing']['courage'] == cy['plain']['courage'] + 1 and cy['swing']['proficiency'] == cy['plain']['proficiency'] + 1, f"Practice Swing works: tennis practice {cy['plain']} → {cy['swing']} with Rio at rank 2")
    ok(p.eval("FemcBuild.PERKS.find(p=>p.id==='rio-2').stub===null"), "Rio's Practice Swing is no longer stubbed")
    # Rio's romance route at the courts through the UI.
    fresh_ui(r"""const G=FemcGame,s=LW.at('11/16','after');s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;LW.link('rio',9,{route:'romance'});const st=G.clubState('club-tennis');st.joined=true;st.sessions=12;
      const P=G.packs()['club-tennis'];st.beats=P.beats.map((b,i)=>i).filter(i=>!P.beats[i].route);window.__rb=P.beats.find(b=>b.route&&!b.prev)?.id;FemcGameUI.goOut('after','gekkoukan')""")
    p.wait("!!document.querySelector('[data-act=club-tennis]')")
    p.eval("document.querySelector('[data-act=club-tennis]').click()")
    p.wait("!!document.querySelector('.g-club-preview:not(.out) [data-confirm]:not(:disabled)')")
    p.eval("document.querySelector('.g-club-preview:not(.out) [data-confirm]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("document.querySelector('.gs:not(.out) .gs-portrait:not([hidden])')&&/rio/.test(document.querySelector('.gs:not(.out) .gs-portrait').src)", 60)
    shots('club-tennis-rio-romance')
    until("!document.querySelector('.gs:not(.out)')")
    ok(p.eval("(()=>{const P=FemcGame.packs()['club-tennis'],st=FemcGame.clubState('club-tennis');return st.beats.some(i=>P.beats[i].id===window.__rb)})()"), "Rio's first romance-route club beat plays through the UI on her route")

    # ── persona ──
    pc = p.eval(r"""(()=>{const G=FemcGame,ids=['ann','kasumi','haru','kuromi','mymelody'],bad=[];
      ids.forEach(id=>{const l=G.LINKS[id];if(!l){bad.push(id+' missing');return}if(l.kind!=='persona')bad.push(id+' kind '+l.kind);if(l.closes)bad.push(id+' closes '+l.closes);if(G.leavesAtMax(l))bad.push(id+' leaves at MAX');
        const txt=JSON.stringify(l);%s.forEach(w=>{if(txt.includes(w))bad.push(id+': still says "'+w+'"')});
        // At MAX at the end of the year (early March now) they're still here (afterMax plays, nothing closed), no goodbye is due.
        const s=LW.at('3/5','evening');s.flags['found-mymelody']=true;LW.link(id,10);const st=G.linkStatus(l,G.dayOf('3/5'),G.homeOf(l).slot==='evening'?'evening':'after');if(['closed','max'].includes(st.reason))bad.push(id+' gone at MAX: '+st.reason);
        if(!(l.afterMax||[]).length)bad.push(id+': no afterMax');
        const s2=LW.at('3/6','early');LW.link(id,5);if(G.farewellDue()?.id===id)bad.push(id+': a goodbye is due');
        // No delayed texts: reactive ones arrive the day after (delay 1 at most).
        Object.entries(l.afterRank||{}).forEach(([n,t])=>{if((t.delay??1)>1)bad.push(id+': afterRank '+n+' delayed '+t.delay)});
      });
      const fw=G.farewellScene({...G.LINKS.ann,closes:'6/1'});const phoneGoodbye=fw.some(x=>x.phone);
      const hol={};ids.forEach(id=>{hol[id]=Object.keys(G.LINKS[id]?.holidays||{})});
      const sent=[];Object.entries(hol).forEach(([id,days])=>days.forEach(md=>{const h=G.LINKS[id].holidays[md];const s=LW.at(md,'early');LW.link(id,Math.max(1,h.rank||1),{route:h.route||'romance'});(h.events||[]).forEach(e=>{if(!s.events.includes(e))s.events.push(e)});G.deliverTexts();if(s.holiday&&s.holiday.links.includes(id))sent.push(id+' '+md);else bad.push(id+' '+md+': no invite')}));
      // Ann stays past October now.
      const s=LW.at('12/10','after');LW.link('ann',6);const ann=G.linkStatus(G.LINKS.ann,s.day,'after').reason;
      return {bad,phoneGoodbye,hol,sent,ann}})()""" % json.dumps(BANNED))
    print('persona', json.dumps({k: v for k, v in pc.items() if k != 'bad'}))
    ok(not pc['bad'], f"the Persona cast belongs to this world: 'persona' links, no closes, nobody leaves at MAX, no goodbye, no delayed texts, no visitor framing left, every holiday invites: {pc['bad'][:6]}")
    ok(pc['ann'] != 'closed', "Ann is still around in December")
    ok(all(len(pc['hol'][k]) >= 2 for k in ['ann', 'kasumi', 'haru']) and pc['hol']['kuromi'], f"holiday invites for Ann, Kasumi, Haru (two each) and Kuromi: {pc['hol']}")
    ok(not pc['phoneGoodbye'], 'a Persona-world link that closed would get no "i had to go" text')
    # A Persona-cast holiday through the UI (Ann at the summer festival).
    fresh_ui(r"""const G=FemcGame,s=LW.at('8/16','early');LW.link('ann',3);G.deliverTexts();s.slot='evening';""")
    p.wait("!!document.querySelector('.g-holiday [data-h=ann]')")
    p.eval("document.querySelector('.g-holiday [data-h=ann]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("document.querySelector('.gs:not(.out) .gs-portrait:not([hidden])')&&/ann/.test(document.querySelector('.gs:not(.out) .gs-portrait').src)", 60)
    shots('holiday-ann-festival')
    until("!document.querySelector('.gs:not(.out)')")
    ok(p.eval("FemcGame.S.holidays['8/16']==='ann'"), "Ann's summer festival holiday plays through the UI")

    # ── kuromi ──
    kr = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.kuromi;const dates=l.ranks.map(r=>r.after);
      const want=['6/10','6/21','7/8','7/24','8/12','8/26','9/19','10/31','11/28','1/9'];
      return {dates,same:JSON.stringify(dates)===JSON.stringify(want),r4:l.ranks[3].place,ranks:l.ranks.filter(r=>r.scene&&JSON.stringify(r.scene).length>4000).length,hang:(l.hangouts||[]).length,after:(l.afterMax||[]).length,texts:Object.keys(l.afterRank||{}).length,lines:JSON.stringify(l).length,
        home:l.home.area,from:l.from,gift:FemcBuild.PERKS.find(p=>p.id==='kuromi-7').fx.gift}})()""")
    print('kuromi', json.dumps(kr))
    ok(kr['same'] and kr['r4'].startswith('Iwatodai Strip · Bookworms') and kr['home'] == 'dorm', f"Kuromi keeps her ten rank dates, rank 4 at Bookworms and her dorm home: {kr['dates']}")
    ok(kr['ranks'] == 10 and kr['hang'] >= 4 and kr['after'] >= 3 and kr['texts'] >= 3, f"Kuromi's link is deep now: ten full ranks, {kr['hang']} hangouts, {kr['after']} MAX scenes, {kr['texts']} reactive texts")
    # Rank 1 through the real UI (the dorm lounge, an evening in June).
    fresh_ui(r"""const s=LW.at('6/10','evening');s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;""")
    p.wait("!!document.querySelector('[data-n=\"link:kuromi\"]')")
    p.eval("document.querySelector('[data-n=\"link:kuromi\"]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("document.querySelector('.gs:not(.out) .gs-portrait:not([hidden])')&&/kuromi/.test(document.querySelector('.gs:not(.out) .gs-portrait').src)", 60)
    shots('kuromi-rank1')
    until("FemcGame.progress('kuromi').rank===1 && !document.querySelector('.gs:not(.out)')")
    ok(True, "Kuromi's rank 1 plays through the real evening menu and ranks up")

    # ── melody ──
    ml = p.eval(r"""(()=>{const G=FemcGame,l=G.LINKS.mymelody,out={};
      let s=LW.at('7/15','evening');LW.meetBy(s.day);out.hiddenStatus=G.linkStatus(l,s.day,'evening').reason;out.notListed=!G.linksAt('dorm','evening').includes(l);
      out.secretWed=G.secretsDue().map(x=>x.id);s=LW.at('7/16','evening');out.secretThu=G.secretsDue().map(x=>x.id);s=LW.at('7/8','evening');out.secretEarly=G.secretsDue().map(x=>x.id);
      // Skipped: a whole year without finding her, she's never met, never on a list, never invites.
      s=LW.at('7/15','evening');let seen=false;for(let d=G.dayOf('7/15');d<=G.END();d++){s.day=d;s.slot='evening';LW.meetBy(d);if(G.linksAt('dorm','evening').includes(l)||G.linkStatus(l,d,'evening').ok||G.holidayInvites(d).includes(l)||G.christmasOptions(d).includes(l))seen=true;}
      out.skipped=!seen&&!G.isMet('mymelody');out.ranks=(l.ranks||[]).filter(r=>r.scene).length;out.wed=l.ranks.every(r=>G.dayInfo(G.dayOf(r.after)).dow===3);out.home=l.home;
      return out})()""")
    print('melody', json.dumps(ml))
    ok(ml['hiddenStatus'] == 'unwritten' and ml['notListed'] and ml['skipped'], 'My Melody is hidden until found, and a playthrough that never finds her never sees her anywhere')
    ok(ml['secretWed'] == ['mymelody'] and not ml['secretThu'] and not ml['secretEarly'], "the quiet option shows on Wednesday evenings from 7/15 only")
    ok(ml['ranks'] == 10 and ml['wed'] and ml['home']['days'] == [3], 'ten ranks, all on Wednesdays, in the dorm kitchen on Wednesday evenings')
    fresh_ui(r"""const s=LW.at('7/29','evening');s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;LW.link('kuromi',3);""")
    p.wait("!!document.querySelector('[data-n=\"secret:mymelody\"]')")
    shots('melody-secret-option')
    p.eval("document.querySelector('[data-n=\"secret:mymelody\"]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("document.querySelector('.gs:not(.out) .gs-portrait:not([hidden])')&&/mymelody/.test(document.querySelector('.gs:not(.out) .gs-portrait').src)", 60)
    shots('melody-found')
    until("!document.querySelector('.gs:not(.out)')")
    found = p.eval("({flag:!!FemcGame.S.flags['found-mymelody'],met:FemcGame.isMet('mymelody'),reg:FemcGame.S.registered.includes('mymelody'),again:FemcGame.secretsDue(FemcGame.dayOf('8/5')).length})")
    ok(found['flag'] and found['met'] and found['reg'] and found['again'] == 0, f'found through the real evening menu: flag, met, Compendium, and the quiet option never comes back ({found})')
    fresh_ui(r"""const G=FemcGame,s=LW.at('8/5','evening');s.flags['found-mymelody']=true;s.met.push('mymelody');s.dailyLife.lastDay=s.day;s.runIns.lastDay=s.day;""")
    p.wait("!!document.querySelector('[data-n=\"link:mymelody\"]')")
    ok(not p.eval("!!document.querySelector('[data-n=\"secret:mymelody\"]')"), 'once found, the quiet option is gone and her link is on the Wednesday menu')
    p.eval("document.querySelector('[data-n=\"link:mymelody\"]').click()")
    p.wait("!!document.querySelector('.gs:not(.out)')")
    until("FemcGame.progress('mymelody').rank===1 && !document.querySelector('.gs:not(.out)')")
    ok(True, "My Melody's rank 1 plays through the UI")
    ok(p.eval("(()=>{const G=FemcGame,s=LW.at('8/6','evening');s.flags['found-mymelody']=true;s.met.push('mymelody');return !G.linkStatus(G.LINKS.mymelody,s.day,'evening').ok})()"), 'not on other evenings')

    # ── scenes ──
    n_paths = p.eval(r"""(()=>{const G=FemcGame;let n=0;const P=G.packs();
      G.D.jobs.forEach(j=>{const k=P[j.id];const md=j.unlock?.after||'5/12';[...k.shifts.filter(x=>!x.base),...k.beats.slice((G.D.jobScenes[j.id]?.beats||[]).length),...k.quiet].forEach(x=>{n+=LW.paths({scene:x.scene,place:j.place,time:'After School'},'job/'+j.id+'/'+x.id,x.after||md)})});
      (G.D.places.clubs||[]).forEach(c=>{const k=P[c.id];[{id:'join',scene:k.join},...k.shifts,...k.beats,...k.quiet].forEach(x=>{n+=LW.paths({scene:x.scene,place:c.place,time:'After School'},'club/'+c.id+'/'+x.id,x.after||'5/12',c.link)})});
      G.D.runIns.forEach(e=>{n+=LW.paths({scene:e.scene,place:'Paulownia Mall',time:'After School'},'runin/'+e.id,e.after||'5/12')});
      ['ann','kasumi','haru','kuromi','mymelody'].forEach(id=>{const l=G.LINKS[id];
        l.ranks.forEach((r,i)=>{n+=LW.paths({scene:r.scene,place:r.place,time:r.time},id+'/rank'+(i+1),r.after,id)});
        (l.hangouts||[]).forEach((h,i)=>{n+=LW.paths({scene:Array.isArray(h)?h:h.scene,place:G.linkPlace(l)},id+'/hangout'+i,l.starts,id)});
        (l.afterMax||[]).forEach((h,i)=>{n+=LW.paths({scene:h.scene,place:h.place,time:h.time},id+'/after'+i,'1/10',id)});
        Object.entries(l.holidays||{}).forEach(([md,h])=>{n+=LW.paths({scene:[...(h.bg?[{bg:h.bg}]:[]),...h.scene],place:h.place,time:h.time},id+'/holiday/'+md,md,id)});
        if(l.christmas)n+=LW.paths({scene:l.christmas.scene,place:l.christmas.place,time:l.christmas.time},id+'/christmas','12/24',id);
        if(l.secret)n+=LW.paths({scene:l.secret.scene,place:l.secret.place,time:l.secret.time},id+'/secret',l.secret.after,id);});
      return n})()""", timeout=1800)
    bad = p.eval('LW.bad')
    ok(not bad, f'every new scene finishes, reaches every option, with real faces and cast names: {bad[:8]}')
    ok(n_paths > 1000, f'{n_paths} scene paths played')
    assets = p.eval("(async()=>{const urls=[...LW.faces,...LW.assets];const miss=(await Promise.all(urls.map(u=>fetch(u,{method:'HEAD'}).then(r=>r.ok?null:u).catch(()=>u)))).filter(Boolean);return {n:urls.length,miss}})()")
    ok(not assets['miss'], f"all {assets['n']} faces and backgrounds in the new scenes load: {assets['miss'][:4]}")

    # ── variants ──
    vr = p.eval(r"""(()=>{const G=FemcGame,V=G.D.variants,bad=[];const s=LW.at('4/13','early');
      // One walk round the whole pool (whatever the month and weather skip): no line twice.
      for(const path of ['offDay.sunday','classQuiet','late.plain','study','activities.vending','activities.pier','dorm.cook','monorail.clear','lunch.clear']){
        s.vary={};const pool=G.varyPool(path,[]);if(pool.length<2){bad.push(path+': only '+pool.length);continue}
        const L=(path.split('.').reduce((v,k)=>v&&v[k],V)||[]).length;const run=[];let k=0;
        for(;k<400;k++){s.day=G.dayOf('4/13')+k;const line=G.vary(path,[]);if(s.vary[path].n>=L)break;run.push(line)}
        if(new Set(run).size!==run.length)bad.push(path+': repeated before the walk went round');if(run.length<3)bad.push(path+': too short a walk')}
      const acts=G.D.places.activities.filter(a=>a.lines&&!a.shop);const thin=acts.filter(a=>a.lines.length+((V.activities||{})[a.id]||[]).length<6).map(a=>a.id);
      return {bad,thin,pools:Object.keys(V)}})()""")
    ok(not vr['bad'] and not vr['thin'], f"often-seen lines walk their pools without repeats; every activity has six or more lines: {vr['bad'][:4]} {vr['thin']}")
    # The morning commute differs on consecutive school days in the real UI.
    lines = []
    for md in ['4/13', '4/14']:
        fresh_ui(f"const s=LW.at('{md}','early');s.dailyLife.lastDay=s.day;")
        p.wait("!!document.querySelector('.g-seg-text')")
        lines.append(p.eval("document.querySelector('.g-seg-text').textContent"))
    ok(lines[0] != lines[1], f'the morning commute reads differently on consecutive days: {lines}')

    # ── saves ──
    sv = p.eval(r"""(()=>{const G=FemcGame,s=LW.at('11/23','early');s.clubs={'club-tennis':{joined:true,sessions:3,seen:['x'],beats:[0],quiet:{}}};s.runIns={seen:['a'],lastDay:5,later:[]};G.saveSlot(2);
      s.clubs={};s.runIns={seen:[],lastDay:-99,later:[]};G.loadSlot(2);const a=G.S.clubs['club-tennis'].sessions===3&&G.S.runIns.seen[0]==='a';
      const old=JSON.parse(JSON.stringify(G.S));delete old.clubs;delete old.runIns;delete old.vary;old.jobs={bookworms:{hired:true,shifts:2,beats:[]}};const code=btoa(unescape(encodeURIComponent(JSON.stringify({state:old}))));G.importCode(code);
      const st=G.jobState('bookworms');return a&&typeof G.S.clubs==='object'&&Array.isArray(G.S.runIns?.seen||[])&&st.seen.length===2&&!!G.clubState('club-band')})()""")
    ok(sv, 'clubs and run-ins persist in slots; older saves default safely and count the base shifts already worked as seen')

    errors = p.console()
    ok(not errors, f'no browser errors: {errors[:3]}')
    print(json.dumps({'checks': len(checks), 'scenePaths': n_paths, 'assets': assets['n'], 'screenshots': str(OUT)}, indent=1))
    for c in checks:
        print(' ✓', c)
finally:
    p.close()
